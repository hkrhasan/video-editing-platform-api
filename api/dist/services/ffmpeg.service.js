"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FFmpegService = void 0;
const fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
const stream_1 = require("stream");
class FFmpegService {
    constructor(opts = {}) {
        this.opts = opts;
        const { ffmpegPath = 'ffmpeg', ffprobePath = 'ffprobe' } = opts;
        fluent_ffmpeg_1.default.setFfmpegPath(ffmpegPath);
        fluent_ffmpeg_1.default.setFfprobePath(ffprobePath);
    }
    bufferToStream(buffer) {
        const stream = new stream_1.PassThrough();
        stream.end(buffer);
        return stream;
    }
    executeCommand(cmd) {
        return __awaiter(this, void 0, void 0, function* () {
            const outStream = new stream_1.PassThrough();
            const chunks = [];
            return new Promise((resolve, reject) => {
                cmd
                    .outputFormat('mp4')
                    .on('error', err => reject(err))
                    .on('end', () => resolve(Buffer.concat(chunks)))
                    .pipe(outStream, { end: true });
                outStream.on('data', chunk => chunks.push(chunk));
                outStream.on('error', reject);
            });
        });
    }
    /*** Get duration (seconds) via ffprobe ***/
    getDuration(buffer) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const input = this.bufferToStream(buffer);
                const cmd = (0, fluent_ffmpeg_1.default)(input);
                cmd.ffprobe((err, metadata) => {
                    if (err)
                        return reject(err);
                    resolve(metadata.format.duration);
                });
            });
        });
    }
    /*** Trim a video: start time (seconds) and duration (seconds) ***/
    trim(file, start, duration) {
        return __awaiter(this, void 0, void 0, function* () {
            // const input = this.bufferToStream(buffer);
            const cmd = (0, fluent_ffmpeg_1.default)(file)
                .setStartTime(start)
                .setDuration(duration);
            return this.executeCommand(cmd);
        });
    }
    /*** Overlay one video buffer onto another ***/
    overlay(baseBuffer, overlayBuffer, x, y, enableWindow) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = this.bufferToStream(baseBuffer);
            const over = this.bufferToStream(overlayBuffer);
            const filterOpts = { x, y };
            if (enableWindow) {
                const { start, duration } = enableWindow;
                filterOpts.enable = `between(t,${start},${start + duration})`;
            }
            const complexFilter = [{ filter: 'overlay', options: filterOpts }];
            const cmd = (0, fluent_ffmpeg_1.default)()
                .addInput(base)
                .addInput(over)
                .complexFilter(complexFilter);
            return this.executeCommand(cmd);
        });
    }
    /*** Combine arbitrary chain of operations in one ffmpeg run ***/
    process(buffer, builder) {
        return __awaiter(this, void 0, void 0, function* () {
            const input = this.bufferToStream(buffer);
            let cmd = (0, fluent_ffmpeg_1.default)(input);
            cmd = builder(cmd);
            return this.executeCommand(cmd);
        });
    }
}
exports.FFmpegService = FFmpegService;
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
