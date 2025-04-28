import ffmpeg from 'fluent-ffmpeg';
import { spawn } from "child_process"

export class VideoService {
  duration(file: Express.Multer.File): Promise<number> {
    return new Promise((resolve, reject) => {
      ffmpeg.ffprobe(file.path, (err, metadata) => {
        if (err) return resolve(0);
        resolve(metadata.format.duration || 0);
      });
    });
  }


  probeBufferWithFFprobe(buffer: Buffer) {
    return new Promise((resolve, reject) => {
      const args = [
        '-v', 'error',
        '-print_format', 'json',
        '-show_format',
        '-show_streams',
        '-'               // read from stdin
      ];
      const proc = spawn('ffprobe', args);

      let stdout = '', stderr = '';
      proc.stdout.on('data', d => stdout += d);
      proc.stderr.on('data', d => stderr += d);

      proc.on('close', code => {
        if (code !== 0) {
          return reject(new Error(`ffprobe exited ${code}: ${stderr}`));
        }
        try {
          resolve(JSON.parse(stdout));
        } catch (e) {
          reject(e);
        }
      });

      proc.stdin.write(buffer);
      proc.stdin.end();
    });
  }

}