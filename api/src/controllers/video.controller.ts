import { Request, Response } from 'express';
import fs from 'fs/promises';
import { S3Service } from '../services/s3.service';
import { Controller, SkipController } from '../decorators/controller.decorator';
import { KnownError } from '../utils/error';
import { InstructionType, JobStatus, prisma } from '../prisma';
import { TrimSchema, TrimSchemaPayload } from '../schemas/trim.schema';
import { RawFFMPEGService } from '../services/rawffmpeg.service';
import generateFilenameAndVideoId from '../utils/generatePath';
import { config } from '../config';
import { SubtitleSchema, SubtitleSchemaPayload } from '../schemas/subtitle.schema';
import validateBody from '../utils/validateBody';
import { Queue } from 'bullmq';
import { redisConnection } from '../utils/redis';
import path from 'path';

const s3Service = new S3Service();
const rawFFMPEGService = new RawFFMPEGService();
const renderQueue = new Queue('renderQueue', {
  connection: redisConnection
})


@Controller
export class VideoController {
  async upload(req: Request) {
    if (!req.file) {
      throw new KnownError("No file provided", 400)
    }
    try {
      const { videoId, fileName } = generateFilenameAndVideoId(req.file.originalname)

      // Upload video on s3 and get duration
      const [s3Path, duration] = await Promise.all([
        // Upload file to S3
        s3Service.upload(
          fileName,
          {
            buffer: req.file.buffer,
            mimetype: req.file.mimetype,
            prefix: config.aws.videosDir,
          }
        ),
        // calculate duration
        rawFFMPEGService.getDuration(req.file.buffer)
      ])

      const video = await prisma.video.create({
        data: {
          id: videoId,
          filename: req.file.originalname,
          path: s3Path,
          size: req.file.size,
          duration,
        }
      })
      return { response: { id: video.id, name: video.filename, size: video.size, duration: video.duration }, code: 200 }
    } catch (error) {
      throw error
    }
  }

  async trim(req: Request) {
    const id = req.params['id']
    try {
      const video = await prisma.video.findFirst({
        where: { id }
      })

      if (!video) {
        throw new KnownError("Invalid Id", 404)
      }

      // validate body
      const { start, end } = validateBody<TrimSchemaPayload>(req.body, TrimSchema)

      const dowloadedFile = await s3Service.download(video.path)
      const { videoId, fileName } = generateFilenameAndVideoId(dowloadedFile)
      const trimmedVersion = await rawFFMPEGService.trim(dowloadedFile, {
        start,
        end,
        outputFileName: fileName
      })


      // Upload file on s3 
      const [uploadedKey, duration, stats] = await Promise.all([
        s3Service.upload(
          trimmedVersion,
          {
            prefix: config.aws.videosDir,
          }
        ),
        rawFFMPEGService.getDuration(trimmedVersion),
        fs.stat(trimmedVersion)
      ])

      const trimmedVideo = await prisma.video.create({
        data: {
          id: videoId,
          filename: fileName,
          size: stats.size,
          duration,
          orignalId: id,
          path: uploadedKey,
        }
      })


      fs.unlink(trimmedVersion)
      fs.unlink(dowloadedFile)
      return { response: trimmedVideo, code: 200 }
    } catch (error) {
      throw error;
    }
  }

  async addSubtitles(req: Request) {
    const id = req.params['id']
    try {

      const video = await prisma.video.findFirst({
        where: { id }
      })

      if (!video) {
        throw new KnownError("Invalid Id", 404)
      }


      const { text, start, end } = validateBody<SubtitleSchemaPayload>(req.body, SubtitleSchema)
      const maxSeq = await prisma.instruction.aggregate({
        where: { videoId: id },
        _max: { sequence: true }
      });
      const seq = (maxSeq._max.sequence || 0) + 1;
      const instruction = await prisma.instruction.create({
        data: {
          videoId: id,
          type: InstructionType.SUBTITLE,
          params: { text, start, end, },
          sequence: seq
        }
      });
      return { response: instruction, code: 200 }
    } catch (error) {
      throw error;
    }
  }

  async render(req: Request) {
    const id = req.params['id']
    try {
      const video = await prisma.video.findUnique({
        where: { id },
        include: { instructions: { orderBy: { sequence: 'asc' } } }
      });

      if (!video) {
        throw new KnownError("Invalid Id", 404)
      }

      if (!video.instructions.length) {
        throw new KnownError("There is no changes to render", 403)
      }

      // Create RenderJob
      const job = await prisma.renderJob.create({
        data: { videoId: id, status: JobStatus.QUEUED }
      });

      await renderQueue.add("render", { videoId: video.id, path: video.path, instructions: video.instructions, jobId: job.id });

      return { response: { jobId: job.id, status: job.status }, code: 200 }
    } catch (error) {
      throw error;
    }
  }

  @SkipController()
  async download(req: Request, res: Response) {
    const id = req.params['id']
    try {
      const video = await prisma.video.findFirst({
        where: {
          id,
        }
      })

      if (!video) {
        return res.status(404).json({
          status: "error",
          details: 'video not found'
        })
      }


      const isRendering = await prisma.renderJob.findFirst({
        where: {
          videoId: id,
          isActive: true
        }
      })

      if (isRendering) {
        return res.status(403).json({
          status: 'error',
          details: 'Video is still rendering please try again later....'
        })
      }

      const s3Stream = await s3Service.getStream(video.path);
      const contentType = await s3Service.getContentType(video.path);
      res.setHeader('Content-Disposition', `attachment; filename="${id}-rendered-${path.extname(video.path) || '.mp4'}"`);

      res.setHeader('Content-Type', contentType || 'video/mp4')

      s3Stream.on('error', (error) => {
        if (!res.headersSent) {
          res.status(500).json({
            status: 'error',
            details: 'StreemError'
          })
        }
      })

      // Pipe the S3 stream directly to responce
      s3Stream.pipe(res);
    } catch (error) {
      if ((error as Error).message?.includes('not found')) {
        return res.status(404).json({
          status: 'error',
          details: 'Rendered video not found'
        })
      }

      console.error("Download error: ", error)

      res.status(500).json({ status: 'error', details: 'InternalServerError' })
    }
  }
}
