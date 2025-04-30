import { promisify } from 'util';
import { exec } from 'child_process';
import path from 'path'
import os from 'os'
import fs from 'fs'

export class RawFFMPEGService {
  private execCommand: (cmd: string) => Promise<{ stdout: string; stderr: string }>;

  constructor() {
    // Promisified exec for running FFmpeg CLI commands
    this.execCommand = promisify(exec);
  }

  /**
   * Runs an FFmpeg command.
   * @param command - The FFmpeg command string to execute.
   */
  private async runFFmpegCommand(command: string): Promise<void> {
    await this.execCommand(command);
  }

  private prepareAndValidateInputPath(input: string | Buffer, ext?: string): string {
    let tempPath: string | undefined;

    try {
      if (Buffer.isBuffer(input)) {
        // Write buffer to temp file
        const tempName = `buffer_${Date.now()}${ext || ".mp4"}`;
        tempPath = path.join(os.tmpdir(), tempName);
        fs.writeFileSync(tempPath, input);
      } else if (typeof input === 'string') {
        // Local file path
        if (!fs.existsSync(input)) throw new Error(`File not found: ${input}`);
        tempPath = input;
      } else {
        throw new Error('Invalid Input');
      }
      return tempPath;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Retrieves the duration of a video.
   * @param input - Local file path (string) or Buffer containing video data.
   * @returns Duration in seconds as a number.
   */
  public async getDuration(input: string | Buffer, options?: {
    ext?: string;
  }): Promise<number> {
    let tempPath: string | undefined;
    let targetPath: string;
    try {
      if (Buffer.isBuffer(input)) {
        // Write buffer to temp file
        const tempName = `buffer_${Date.now()}${options?.ext || ".mp4"}`;
        tempPath = path.join(os.tmpdir(), tempName);
        fs.writeFileSync(tempPath, input);
        targetPath = tempPath;
      } else if (typeof input === 'string') {
        // Local file path
        if (!fs.existsSync(input)) throw new Error(`File not found: ${input}`);
        targetPath = input;
      } else {
        throw new Error('Unsupported input type for getDuration');
      }
      const cmd = `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${targetPath}"`;
      const { stdout } = await this.execCommand(cmd);
      return parseFloat(stdout.trim());
    } catch (error) {
      throw error;
    } finally {
      if (tempPath && fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
  }


  public async trim(input: string, options: { outputFileName?: string; start: string; end: string; }): Promise<string> {
    let outputPath: string;
    try {
      const { start, end } = options;

      if (options.outputFileName) {
        outputPath = path.join(os.tmpdir(), options.outputFileName);
      } else {
        const ext = path.extname(input)
        outputPath = path.join(os.tmpdir(), `${path.basename(input, ext)}_trimmed_${Date.now()}${ext}`)
      }

      if (!fs.existsSync(input)) throw new Error(`File not found: ${outputPath}`);
      // Build and run FFmpeg command to trim video
      const command = `ffmpeg -i "${input}" -ss ${start} -to ${end} -c copy -y "${outputPath}"`;
      await this.runFFmpegCommand(command);
      return outputPath;
    } catch (error) {
      throw error;
    }
  }



  public async addSubtitles(
    input: string,
    subtitles: string,
  ): Promise<string> {
    let outputPath: string | undefined;
    let tempSubPath: string | undefined;
    let subPath: string | undefined
    try {

      subPath = subtitles
      if (!fs.existsSync(subtitles) || subtitles.includes('\n')) {
        // treat as raw text, write to temp .srt file
        const tempName = `sub_${Date.now()}.srt`;
        tempSubPath = path.join(os.tmpdir(), tempName);
        fs.writeFileSync(tempSubPath, subtitles, "utf-8");
        subPath = tempSubPath

        fs.writeFileSync(tempSubPath, subtitles, "utf-8");
      }

      const ext = path.extname(input);
      const base = path.basename(input, ext);
      outputPath = path.join(os.tmpdir(), `${base}_subtitled_${Date.now()}${ext}`);

      // Build FFmpeg command
      const cmd = [
        'ffmpeg -y',
        `-i "${input}"`,
        `-vf "subtitles='${subPath.replace(/'/g, "'\\\\''")}'"`,
        '-c:v libx264 -preset fast',
        '-c:a copy',
        `"${outputPath}"`
      ].join(' ');

      await this.runFFmpegCommand(cmd);
      return outputPath;
    } catch (error) {
      throw error;
    } finally {
      if (tempSubPath && fs.existsSync(tempSubPath)) fs.unlinkSync(tempSubPath);
    }
  }


  public async addTextOverlay(
    input: string,
    text: string,
    options: {
      start: number,  // seconds (e.g. 5.0)
      end: number,    // seconds (e.g. 10.0)
      fontSize?: number,
      fontColor?: string,
      backgroundColor?: string,
      outputFileName?: string,
    }
  ): Promise<string> {
    let outputPath: string | undefined = options.outputFileName;

    try {
      // Validate input exists
      if (!fs.existsSync(input)) {
        throw new Error(`Input file not found: ${input}`);
      }

      if (!outputPath) {
        // Generate safe output path
        const ext = path.extname(input);
        const base = path.basename(input, ext);
        outputPath = path.join(os.tmpdir(), `${base}_overlay_${Date.now()}${ext}`);

      }


      // Sanitize text input
      const sanitizedText = text
        .replace(/'/g, "'\\\\''")  // Escape single quotes
        .replace(/\\/g, '\\\\');    // Escape backslashes

      // Font configuration
      const fontSize = options.fontSize || 24; ``
      const fontColor = options.fontColor || 'white';
      const bgColor = options.backgroundColor || 'black';

      // FFmpeg filter configuration
      const filter = `drawtext=
      text='${sanitizedText}':
      fontsize=${fontSize}:
      fontcolor=${fontColor}:
      box=1:boxcolor=${options.backgroundColor}@0.5:
      x=(w-text_w)/2:
      y=h-text_h-10:
      enable='between(t,${options.start},${options.end})'
    `.replace(/\s+/g, ''); // Remove whitespace

      // Build FFmpeg command
      const cmd = [
        'ffmpeg -y',
        `-i "${input}"`,
        `-vf "${filter}"`,
        '-c:v libx264 -preset fast',
        '-c:a aac',
        '-movflags +faststart',
        `"${outputPath}"`
      ].join(' ');

      await this.runFFmpegCommand(cmd);
      return outputPath;
    } catch (error) {
      if (outputPath && fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
      }
      throw error;
    }
  }
}