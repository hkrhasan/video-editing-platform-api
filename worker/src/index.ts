import { Redis } from 'ioredis';
import { Worker } from 'bullmq';
import { S3Service } from './services/s3.service';
import { Instruction, prisma, JobStatus, InstructionType } from "./prisma";
import { RawFFMPEGService } from './services/rawffmpeg.service';
import { parseTimeToSeconds } from './utils/time';
import path from 'path';
import fs from 'fs/promises';


const redisConnection = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || '6379'),
  maxRetriesPerRequest: null,
  enableReadyCheck: true,
});

const s3Service = new S3Service();
const rawFFMPEGService = new RawFFMPEGService();

type JobData = {
  videoId: string;
  path: string;
  instructions: Instruction[];
  jobId: string;
}

const editWorker = new Worker<JobData>("renderQueue", async (job) => {
  const { videoId, path: s3Path, instructions, jobId } = job.data;
  let downloadedFilePath: string | undefined = undefined;
  let outputFile: string | undefined = undefined;
  const filters: string[] = [];
  try {
    console.log("Job is started: ", jobId)
    // Apply trim immediately if present
    // const trimInstr = instructions.find(i => i.type === InstructionType.TRIM);

    // if (trimInstr) {
    //   const { start, end } = trimInstr.params as { start: string; end: string };
    //   inputPath = await rawFFMPEGService.trim(inputPath, { start, end })
    // }

    // Apply Subtitle
    filters.push(...instructions.filter((i) => i.type === InstructionType.SUBTITLE).map((instr) => {
      const { text, start, end, position, fontColor = "white", fontSize = 24, backgroundColor = "black" } = instr.params as {
        text: string;
        start: string;
        end: string;
        fontSize?: number;
        backgroundColor?: string;
        fontColor?: string;
        position?: {
          x: number;
          y: number;
        }
      }

      const x = position?.x ?? '(w-text_w)/2';
      const y = position?.y ?? 'h-text_h-10';

      const safeText = text.replace(/'/g, "\\'");
      const startMs = parseTimeToSeconds(start)
      const endMs = parseTimeToSeconds(end)
      let filter = [
        `drawtext=text='${safeText}'`,
        `x=${x}`,
        `y=${y}`,
        `enable='between(t,${startMs},${endMs})'`
      ]

      if (fontColor) filter.push(`fontcolor=${fontColor}`)
      if (fontSize) filter.push(`fontsize=${fontSize}`)
      if (backgroundColor) {
        filter.push(...[`box=1`, `boxcolor=${backgroundColor}@0.5`])
      }

      return filter.join(':')
    }))

    if (!filters.length) {
      await prisma.renderJob.update({
        where: { id: jobId },
        data: {
          status: JobStatus.FAILED,
          errorMessage: "there is nothing to render",
          isActive: false
        }
      })


      return;
    }

    console.log(`${filters.length}: Filters found....`)

    // Update Job Status
    let [_, downloadedFile] = await Promise.all([
      prisma.renderJob.update({
        where: {
          id: jobId
        },
        data: {
          status: JobStatus.RUNNING
        }
      }),
      s3Service.download(s3Path)
    ]);

    console.log(`${downloadedFile} File downloaded from s3`)
    downloadedFilePath = downloadedFile;

    outputFile = await rawFFMPEGService.renderWithFilters(downloadedFile, filters)

    console.log(`Filter applied.....`)

    const uploaded = await s3Service.upload(outputFile, {
      prefix: 'videos',
      fileName: path.basename(`${videoId}${path.extname(downloadedFile)}`)
    })



    await prisma.video.update({
      where: { id: videoId },
      data: {
        path: uploaded
      }
    })

    // Mark Job completed
    await prisma.renderJob.update({
      where: {
        id: jobId
      },
      data: {
        status: JobStatus.COMPLETED,
        isActive: false,
      }
    })
    console.log(`${job.id} Job is completed`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Job ${job.id} failed with:`, error.message);
      console.error('Error stack:', error.stack);
    }
    await prisma.renderJob.update({
      where: { id: jobId },
      data: {
        status: JobStatus.FAILED,
        isActive: false
      }
    })
  } finally {
    if (downloadedFilePath) await fs.unlink(downloadedFilePath)
    if (outputFile) await fs.unlink(outputFile)
  }
}, {
  connection: redisConnection
});


editWorker.on('completed', (job) => {
  console.log(`Job ${job.id} completed!`);
});

editWorker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed:`, err);
})