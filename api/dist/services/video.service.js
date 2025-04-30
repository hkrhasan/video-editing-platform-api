"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
const fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
const child_process_1 = require("child_process");
class VideoService {
    duration(file) {
        return new Promise((resolve, reject) => {
            fluent_ffmpeg_1.default.ffprobe(file.path, (err, metadata) => {
                if (err)
                    return resolve(0);
                resolve(metadata.format.duration || 0);
            });
        });
    }
    probeBufferWithFFprobe(buffer) {
        return new Promise((resolve, reject) => {
            const args = [
                '-v', 'error',
                '-print_format', 'json',
                '-show_format',
                '-show_streams',
                '-' // read from stdin
            ];
            const proc = (0, child_process_1.spawn)('ffprobe', args);
            let stdout = '', stderr = '';
            proc.stdout.on('data', d => stdout += d);
            proc.stderr.on('data', d => stderr += d);
            proc.on('close', code => {
                if (code !== 0) {
                    return reject(new Error(`ffprobe exited ${code}: ${stderr}`));
                }
                try {
                    resolve(JSON.parse(stdout));
                }
                catch (e) {
                    reject(e);
                }
            });
            proc.stdin.write(buffer);
            proc.stdin.end();
        });
    }
}
exports.VideoService = VideoService;
