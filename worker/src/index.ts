import { Redis } from 'ioredis';
import { Worker } from 'bullmq';
import { FFmpegService } from './services/ffmpeg.service';
import { S3Service } from './services/s3.service';
import { prisma } from "./prisma";
import { v4 as uuidV4 } from "uuid"
import { RawFFMPEGService } from './services/rawffmpeg.service';

const redisConnection = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || '6379'),
  maxRetriesPerRequest: null,
  enableReadyCheck: true,
});

const ffmpegService = new FFmpegService();
const s3Service = new S3Service();
const rawFFMPEGService = new RawFFMPEGService();

type VideoPayload = {
  videoId: string;
  objPath: string;
};

type TrimPayload = VideoPayload & {
  start: string;
  end: string;
};

type OverlayPayload = VideoPayload & {
  // Add overlay-specific properties
  overlayImagePath: string;
  position: { x: number; y: number };
};

// Discriminated union type
type JobData =
  | {
    action: "trim";
    data: TrimPayload;
  }
  | {
    action: "overlay";
    data: OverlayPayload;
  };

const editWorker = new Worker<JobData>("editVideoQueue", async (job) => {
  try {
    console.log(`Data ${JSON.stringify(job.data)}`);

    const { action, data } = job.data;

    switch (action) {
      case "overlay":
        // Implement overlay logic here
        throw Error("Not Implemented yet....");

      case "trim":
        const { objPath, start, end, videoId } = data;
        const mainFile = await s3Service.download(objPath)
        const trimmedFile = await rawFFMPEGService.trim(mainFile, { start, end })

        const uploadedURI = await s3Service.upload(trimmedFile, {
          prefix: `videos/${videoId}`
        })

        console.log({ uploadedURI })
        throw new Error("Incomplete job ......")
        break;

      default:
        // This will never be reached due to discriminated union
        const _exhaustiveCheck: never = action;
        throw Error("Invalid Action");
    }

    console.log(`${job.id} Job is completed`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Job ${job.id} failed with:`, error.message);
      console.error('Error stack:', error.stack);
    }
    throw error;
  }
}, {
  connection: redisConnection
});


editWorker.on('completed', (job) => {
  console.log(`Job ${job.id} completed!`);
});

editWorker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed:`, err);
});