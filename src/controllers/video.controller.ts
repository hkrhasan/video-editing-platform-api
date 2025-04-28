import { Request, Response } from 'express';
import { S3Service } from '../services/s3.service';
import { Controller } from '../decorators/controller.decorator';
import { KnownError } from '../utils/error';
import { VideoService } from '../services/video.service';
import { createId } from '@paralleldrive/cuid2';
import { FFmpegService } from '../services/ffmpeg.service';
import { prisma } from '../prisma';

const s3Service = new S3Service();
const ffmpegService = new FFmpegService();

@Controller
export class VideoController {
  async upload(req: Request, res: Response) {
    if (!req.file) {
      throw new KnownError("No file provided", 400)
    }
    try {
      const videoId = createId();
      const ext = req.file.originalname.split(".").pop()
      const prefix = `videos/${videoId}`;
      const fileName = `main.${ext}`
      const path = `${prefix}/${fileName}`

      // Upload video on s3 and get duration
      const [resultUrl, duration] = await Promise.all([
        // Upload file to S3
        s3Service.uploadFile(
          req.file.buffer,
          fileName,
          req.file.mimetype,
          {
            prefix,
          }
        ),
        // calculate duration
        ffmpegService.getDuration(req.file.buffer)
      ])

      const video = await prisma.video.create({
        data: {
          id: videoId,
          filename: req.file.originalname,
          path,
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
    try {
      return { response: { id }, code: 200 }
    } catch (error) {
      throw error;
    }
  }
}
