"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoController = void 0;
const s3_service_1 = require("../services/s3.service");
const controller_decorator_1 = require("../decorators/controller.decorator");
const error_1 = require("../utils/error");
const cuid2_1 = require("@paralleldrive/cuid2");
const ffmpeg_service_1 = require("../services/ffmpeg.service");
const prisma_1 = require("../prisma");
const trim_schema_1 = require("../schemas/trim.schema");
const time_1 = require("../utils/time");
const s3Service = new s3_service_1.S3Service();
const ffmpegService = new ffmpeg_service_1.FFmpegService();
let VideoController = (() => {
    let _classDecorators = [controller_decorator_1.Controller];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var VideoController = _classThis = class {
        upload(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!req.file) {
                    throw new error_1.KnownError("No file provided", 400);
                }
                try {
                    const videoId = (0, cuid2_1.createId)();
                    const ext = req.file.originalname.split(".").pop();
                    const prefix = `videos/${videoId}`;
                    const fileName = `main.${ext}`;
                    const path = `${prefix}/${fileName}`;
                    // Upload video on s3 and get duration
                    const [resultUrl, duration] = yield Promise.all([
                        // Upload file to S3
                        s3Service.uploadFile(req.file.buffer, fileName, req.file.mimetype, {
                            prefix,
                        }),
                        // calculate duration
                        ffmpegService.getDuration(req.file.buffer)
                    ]);
                    const video = yield prisma_1.prisma.video.create({
                        data: {
                            id: videoId,
                            filename: req.file.originalname,
                            path,
                            size: req.file.size,
                            duration,
                        }
                    });
                    return { response: { id: video.id, name: video.filename, size: video.size, duration: video.duration }, code: 200 };
                }
                catch (error) {
                    throw error;
                }
            });
        }
        trim(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const id = req.params['id'];
                try {
                    // validate body
                    const validationResult = trim_schema_1.TrimSchema.safeParse(req.body);
                    if (!validationResult.success) {
                        throw new error_1.KnownError("Validation Error", 400, validationResult.error.issues);
                    }
                    const video = yield prisma_1.prisma.video.findFirst({
                        where: { id }
                    });
                    if (!video) {
                        throw new error_1.KnownError("Invalid Id", 404);
                    }
                    const obj = yield s3Service.getFile(video.path);
                    const { start, end } = validationResult.data;
                    const duration = (0, time_1.diff)(start, end);
                    const trimedOuput = yield ffmpegService.trim(obj, start, duration);
                    console.log({ trimedOuput });
                    return { response: { id, video, duration }, code: 200 };
                }
                catch (error) {
                    throw error;
                }
            });
        }
    };
    __setFunctionName(_classThis, "VideoController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        VideoController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return VideoController = _classThis;
})();
exports.VideoController = VideoController;
