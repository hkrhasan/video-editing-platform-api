import { promisify } from 'util';
import { exec as execCallback } from 'child_process';
import path from 'path';
import os from 'os';
import fs from 'fs/promises';

const exec = promisify(execCallback);

type FFmpegInput = string | Buffer;

interface TrimOptions {
  start: string;           // seconds
  end: string;             // seconds
  outputFileName?: string; // optional custom filename
}

interface TextOverlayOptions {
  start: number;            // seconds
  end: number;              // seconds
  fontSize?: number;
  fontColor?: string;
  backgroundColor?: string;
  position?: { x: string; y: string }; // supports expressions e.g. '(w-text_w)/2'
  outputFileName?: string;
}

export class RawFFMPEGService {
  private async runFFmpegCommand(args: string[]): Promise<void> {
    const cmd = ['ffmpeg', ...args].join(' ');
    const { stdout, stderr } = await exec(cmd);
    if (stderr) console.warn('FFmpeg warning:', stderr);
  }

  public async getDuration(input: FFmpegInput, ext = '.mp4'): Promise<number> {
    let tempPath: string | undefined;
    let target: string;

    if (Buffer.isBuffer(input)) {
      tempPath = path.join(os.tmpdir(), `buffer_${Date.now()}${ext}`);
      await fs.writeFile(tempPath, input);
      target = tempPath;
    } else {
      target = input;
    }

    try {
      const cmd = `ffprobe -v error -show_entries format=duration -of csv=p=0 "${target}"`;
      const { stdout } = await exec(cmd);
      return parseFloat(stdout.trim());
    } finally {
      if (tempPath) {
        await fs.unlink(tempPath).catch(() => { /* ignore */ });
      }
    }
  }

  public async trim(inputPath: string, options: TrimOptions): Promise<string> {
    const { start, end, outputFileName } = options;
    const ext = path.extname(inputPath) || '.mp4';
    const output = outputFileName
      ? path.join(os.tmpdir(), outputFileName)
      : path.join(os.tmpdir(), `${path.basename(inputPath, ext)}_trimmed_${Date.now()}${ext}`);

    const args = [
      '-y',
      '-i', `"${inputPath}"`,
      '-ss', start,
      '-to', end,
      '-c', 'copy',
      `"${output}"`
    ];

    await this.runFFmpegCommand(args);
    return output;
  }

  public async addSubtitles(inputPath: string, srtContentOrPath: string): Promise<string> {
    let subtitlePath = srtContentOrPath;
    if (!srtContentOrPath.endsWith('.srt')) {
      subtitlePath = path.join(os.tmpdir(), `sub_${Date.now()}.srt`);
      await fs.writeFile(subtitlePath, srtContentOrPath, 'utf-8');
    }

    const ext = path.extname(inputPath) || '.mp4';
    const output = path.join(os.tmpdir(), `${path.basename(inputPath, ext)}_subtitled_${Date.now()}${ext}`);

    const filter = `subtitles='${subtitlePath.replace(/'/g, "'\\''")}':force_style='Alignment=2'`;
    const args = [
      '-y',
      '-i', `"${inputPath}"`,
      '-vf', `"${filter}"`,
      '-c:v', 'libx264',
      '-preset', 'fast',
      '-c:a', 'copy',
      `"${output}"`
    ];

    await this.runFFmpegCommand(args);

    if (subtitlePath !== srtContentOrPath) {
      await fs.unlink(subtitlePath).catch(() => { /* ignore */ });
    }

    return output;
  }

  public async addTextOverlay(
    inputPath: string,
    text: string,
    options: TextOverlayOptions
  ): Promise<string> {
    const ext = path.extname(inputPath) || '.mp4';
    const output = options.outputFileName
      ? path.join(os.tmpdir(), options.outputFileName)
      : path.join(os.tmpdir(), `${path.basename(inputPath, ext)}_overlay_${Date.now()}${ext}`);

    const safeText = text.replace(/'/g, "\\'");
    const fontSize = options.fontSize ?? 24;
    const fontColor = options.fontColor ?? 'white';
    const bgColor = options.backgroundColor ?? 'black@0.5';
    const pos = options.position ?? { x: '(w-text_w)/2', y: 'h-text_h-10' };

    const drawtext = [
      `drawtext=text='${safeText}'`,
      `fontsize=${fontSize}`,
      `fontcolor=${fontColor}`,
      `box=1`,
      `boxcolor=${bgColor}`,
      `x=${pos.x}`,
      `y=${pos.y}`,
      `enable='between(t,${options.start},${options.end})'`
    ].join(':');

    const args = [
      '-y',
      '-i', `"${inputPath}"`,
      '-vf', `"${drawtext}"`,
      '-c:v', 'libx264',
      '-preset', 'fast',
      '-c:a', 'aac',
      '-movflags', '+faststart',
      `"${output}"`
    ];

    await this.runFFmpegCommand(args);
    return output;
  }

  /**
   * Applies an arbitrary list of FFmpeg filters to a single input in one pass.
   * @param inputPath  path to the source video file
   * @param filters    e.g. ["drawtext=...", "subtitles=..."]
   * @returns          path to the newly rendered file
   */
  public async renderWithFilters(inputPath: string, filters: string[], outputPath?: string): Promise<string> {
    const ext = path.extname(inputPath) ?? '.mp4';
    const output = outputPath ?? path.join(os.tmpdir(), `render_${Date.now()}${ext}`);
    const vf = filters.join(',');

    const args = [
      '-y',
      '-i', `"${inputPath}"`,
      '-vf', `"${vf}"`,
      '-c:v', 'libx264',
      '-preset', 'fast',
      '-c:a', 'aac',
      '-movflags', '+faststart',
      `"${output}"`
    ];

    await this.runFFmpegCommand(args);
    return output;
  }
}
