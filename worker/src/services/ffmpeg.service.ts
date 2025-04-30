import ffmpeg, { FfmpegCommand } from 'fluent-ffmpeg';
import { PassThrough, Readable } from 'stream';

export interface FFmpegServiceOptions {
  ffmpegPath?: string;
  ffprobePath?: string;
}

export class FFmpegService {
  constructor(private opts: FFmpegServiceOptions = {}) {
    const { ffmpegPath = 'ffmpeg', ffprobePath = 'ffprobe' } = opts;
    ffmpeg.setFfmpegPath(ffmpegPath);
    ffmpeg.setFfprobePath(ffprobePath);
  }

  private bufferToStream(buffer: Buffer): PassThrough {
    const stream = new PassThrough();
    stream.end(buffer);
    return stream;
  }

  private async executeCommand(cmd: FfmpegCommand): Promise<Buffer> {
    const outStream = new PassThrough();
    const chunks: Buffer[] = [];

    return new Promise((resolve, reject) => {
      cmd
        .outputFormat('mp4')
        .on('error', err => reject(err))
        .on('end', () => resolve(Buffer.concat(chunks)))
        .pipe(outStream, { end: true });

      outStream.on('data', chunk => chunks.push(chunk));
      outStream.on('error', reject);
    });
  }

  /*** Get duration (seconds) via ffprobe ***/
  async getDuration(buffer: Buffer): Promise<number> {
    return new Promise((resolve, reject) => {
      const input = this.bufferToStream(buffer);
      const cmd = ffmpeg(input);
      cmd.ffprobe((err, metadata) => {
        if (err) return reject(err);
        resolve(metadata.format.duration as number);
      });
    });
  }

  /*** Trim a video: start time (seconds) and duration (seconds) ***/
  async trim(file: Readable, start: number | string, duration: number): Promise<Buffer> {
    // const input = this.bufferToStream(buffer);
    const cmd = ffmpeg(file)
      .setStartTime(start)
      .setDuration(duration);

    return this.executeCommand(cmd);
  }

  /*** Overlay one video buffer onto another ***/
  async overlay(
    baseBuffer: Buffer,
    overlayBuffer: Buffer,
    x: number,
    y: number,
    enableWindow?: { start: number; duration: number }
  ): Promise<Buffer> {
    const base = this.bufferToStream(baseBuffer);
    const over = this.bufferToStream(overlayBuffer);
    const filterOpts: any = { x, y };

    if (enableWindow) {
      const { start, duration } = enableWindow;
      filterOpts.enable = `between(t,${start},${start + duration})`;
    }

    const complexFilter = [{ filter: 'overlay', options: filterOpts }];
    const cmd = ffmpeg()
      .addInput(base)
      .addInput(over)
      .complexFilter(complexFilter);

    return this.executeCommand(cmd);
  }

  /*** Combine arbitrary chain of operations in one ffmpeg run ***/
  async process(
    buffer: Buffer,
    builder: (cmd: FfmpegCommand) => FfmpegCommand
  ): Promise<Buffer> {
    const input = this.bufferToStream(buffer);
    let cmd = ffmpeg(input);
    cmd = builder(cmd);
    return this.executeCommand(cmd);
  }
}

// Example usage:
// const ff = new FFmpegService({ ffmpegPath: '/usr/bin/ffmpeg', ffprobePath: '/usr/bin/ffprobe' });
// const duration = await ff.getDuration(videoBuf);
// const trimmed = await ff.trim(videoBuf, 5, 10);
// const overlaid = await ff.overlay(baseBuf, logoBuf, 10, 10, { start: 0, duration: 5 });
// const combined = await ff.process(sourceBuf, cmd =>
//   cmd.setStartTime(2)
//      .setDuration(8)
//      .addInput(logoBuf)
//      .complexFilter([{ filter: 'overlay', options: { x: 20, y: 20 } }])
// );
