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
exports.S3Service = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const config_1 = require("../config");
const path_1 = __importDefault(require("path"));
const stream_1 = require("stream");
class S3Service {
    constructor() {
        this.s3 = new client_s3_1.S3Client({
            region: config_1.config.aws.region,
            credentials: {
                accessKeyId: config_1.config.aws.accessKeyId,
                secretAccessKey: config_1.config.aws.secretAccessKey
            }
        });
    }
    /**
     * Uploads a buffer to S3 under an optional folder prefix.
     * Returns the full object URL.
     */
    uploadFile(buffer, filename, mimetype, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { prefix = '' } = options || {};
            // Build the S3 key: e.g. "videos/1234/original.mp4"
            const key = path_1.default.posix.join(prefix, filename);
            const command = new client_s3_1.PutObjectCommand({
                Bucket: config_1.config.aws.bucketName,
                Key: key,
                Body: buffer,
                ContentType: mimetype
            });
            yield this.s3.send(command);
            return `https://${config_1.config.aws.bucketName}.s3.${config_1.config.aws.region}.amazonaws.com/${key}`;
        });
    }
    /**
     * Get an file from S3 and return its contents as a Readable.
     * Throws if the object does not exist or on any other error.
     */
    getFile(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Body } = yield this.s3.send(new client_s3_1.GetObjectCommand({
                Bucket: config_1.config.aws.bucketName,
                Key: key
            }));
            if (!(Body instanceof stream_1.Readable)) {
                throw new Error('Unexpected body type from S3');
            }
            return Body;
        });
    }
}
exports.S3Service = S3Service;
