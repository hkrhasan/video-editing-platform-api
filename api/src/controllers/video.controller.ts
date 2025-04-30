import { Request, Response } from 'express';
import fs from 'fs';
import { S3Service } from '../services/s3.service';
import { Controller } from '../decorators/controller.decorator';
import { KnownError } from '../utils/error';
import { prisma } from '../prisma';
import { TrimSchema, TrimSchemaPayload } from '../schemas/trim.schema';
import { RawFFMPEGService } from '../services/rawffmpeg.service';
import generateFilenameAndVideoId from '../utils/generatePath';
import { config } from '../config';
import { cleanFile } from '../utils/file';
import { SubtitleSchema, SubtitleSchemaPayload } from '../schemas/subtitle.schema';
import validateBody from '../utils/validateBody';
import createSRTContent from '../utils/createSRTContent';
import { parseTimestampToMilliseconds, parseTimeToSeconds } from '../utils/time';
import { Queue } from 'bullmq';
import { redisConnection } from '../utils/redis';

const s3Service = new S3Service();
const rawFFMPEGService = new RawFFMPEGService();
const renderQueue = new Queue('renderQueue', {
  connection: redisConnection
})


@Controller
export class VideoController {
  async upload(req: Request, res: Response) {
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

  async trim(req: Request, res: Response) {
    const id = req.params['id']
    let originalFIle: string | undefined = undefined;
    let trimmedFile: string | undefined = undefined;
    try {
      const video = await prisma.video.findFirst({
        where: { id }
      })

      if (!video) {
        throw new KnownError("Invalid Id", 404)
      }

      // validate body
      const { start, end } = validateBody<TrimSchemaPayload>(req.body, TrimSchema)

      originalFIle = await s3Service.download(video.path);
      const { videoId, fileName } = generateFilenameAndVideoId(originalFIle)
      trimmedFile = await rawFFMPEGService.trim(originalFIle, { start, end, outputFileName: fileName })
      const stats = fs.statSync(trimmedFile);
      // Upload video on s3 and get duration
      const [s3Path, duration] = await Promise.all([
        // Upload file to S3
        s3Service.upload(
          trimmedFile,
          {
            prefix: config.aws.videosDir,
          }
        ),
        // calculate duration
        rawFFMPEGService.getDuration(trimmedFile)
      ])

      const trimmedVideo = await prisma.video.create({
        data: {
          id: videoId,
          filename: fileName,
          path: s3Path,
          size: stats.size,
          duration,
          originalId: id,
        }
      })

      return { response: { ...trimmedVideo }, code: 200 }
    } catch (error) {
      throw error;
    }
  }

  async addSubtitles(req: Request, res: Response) {
    const id = req.params['id']
    let originalFIle: string | undefined = undefined;
    let subtitledFile: string | undefined = undefined;
    try {

      const video = await prisma.video.findFirst({
        where: { id }
      })

      if (!video) {
        throw new KnownError("Invalid Id", 404)
      }


      const { text, start, end } = validateBody<SubtitleSchemaPayload>(req.body, SubtitleSchema)
      const subtitles = createSRTContent([{
        text,
        start,
        end
      }])
      // download original file
      originalFIle = await s3Service.download(video.path);

      const { videoId, fileName } = generateFilenameAndVideoId(originalFIle);
      // subtitledFile = await rawFFMPEGService.addSubtitles(originalFIle, subtitles)
      subtitledFile = await rawFFMPEGService.addTextOverlay(originalFIle, text, {
        start: parseTimeToSeconds(start),
        end: parseTimeToSeconds(end),
        outputFileName: fileName,
        backgroundColor: 'black'
      })
      const stats = fs.statSync(subtitledFile);
      // Upload video on s3 and get duration
      const [s3Path, duration] = await Promise.all([
        // Upload file to S3
        s3Service.upload(
          fileName,
          {
            prefix: config.aws.videosDir,
          }
        ),
        // calculate duration
        rawFFMPEGService.getDuration(subtitledFile)
      ])

      const subtitledVideo = await prisma.video.create({
        data: {
          id: videoId,
          filename: fileName,
          path: s3Path,
          size: stats.size,
          duration,
          originalId: id,
        }
      })

      return { response: { ...subtitledVideo }, code: 200 }
    } catch (error) {
      throw error;
    }
  }

  async render(req: Request, res: Response) {
    const id = req.params['id']
    try {
      const video = await prisma.video.findFirst({
        where: { id },
        include: {
          _count: {
            select: {
              copies: {
                where: {
                  isRendered: false
                }
              }
            }
          }
        }
      })

      if (!video) {
        throw new KnownError("Invalid Id", 404)
      }

      if (!(video._count.copies > 0)) {
        throw new KnownError("There's nothing to render", 403)
      }
    } catch (error) {

    }
  }
}
