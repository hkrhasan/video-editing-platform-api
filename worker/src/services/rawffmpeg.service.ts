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
        const tempName = `buffer_${Date.now()}.${options?.ext || "mp4"}`;
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


  public async trim(input: string, options: { outputPath?: string; start: string; end: string; clean?: boolean }): Promise<string> {
    let tempPath: string | undefined;
    let outputPath: string;
    try {
      const { start, end } = options;
      const ext = path.extname(input)

      if (options.outputPath) {
        outputPath = options.outputPath;
      } else {
        tempPath = path.join(os.tmpdir(), `${path.basename(input, ext)}_trimmed_${Date.now()}${ext}`)
        outputPath = tempPath;
      }

      if (!fs.existsSync(input)) throw new Error(`File not found: ${outputPath}`);
      // Build and run FFmpeg command to trim video
      const command = `ffmpeg -i "${input}" -ss ${start} -to ${end} -c copy -y "${outputPath}"`;
      await this.runFFmpegCommand(command);
      return outputPath;
    } catch (error) {
      throw error;
    } finally {
      if (options.clean && tempPath && fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath)
        console.log(`Removed file: ${tempPath}`)
      };
    }
  }



  public async addSubtitles(
    input: string,
    subtitlesPath: string
  ): Promise<string> {
    let inputPath: string | undefined;
    let outputPath: string | undefined;
    try {
      const ext = path.extname(input);
      const base = path.basename(input, ext);
      outputPath = path.join(os.tmpdir(), `${base}_subtitled_${Date.now()}${ext}`);
      const cmd = `ffmpeg -i "${inputPath}" -vf subtitles=\"${subtitlesPath}\" -c:a copy -y "${outputPath}"`;
      await this.runFFmpegCommand(cmd);
      return outputPath;
    } finally {
      if (inputPath) fs.unlinkSync(inputPath);
      if (outputPath) fs.unlinkSync(outputPath);
    }
  }
}