"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const video_controller_1 = require("../controllers/video.controller");
const ALLOWED_MIME_TYPES = [
    "video/mp4",
    "video/quicktime", // .mov
];
const upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    fileFilter: (req, file, cb) => {
        if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error("Invalid file type. Only .mp4 and .mov are allowed."));
        }
    },
});
const videoController = new video_controller_1.VideoController();
const router = (0, express_1.Router)();
/**
 * @openapi
 * components:
 *   schemas:
 *     ErrorResponse:
 *       type: object
 *       required:
 *         - status
 *         - details
 *       properties:
 *         status:
 *           type: string
 *           example: error
 *         details:
 *           type: string
 *           example: InternalServerError
 *
 *     VideoMetadata:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - size
 *         - duration
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         name:
 *           type: string
 *         size:
 *           type: integer
 *           description: File size in bytes
 *         duration:
 *           type: number
 *           format: float
 *           description: Duration of the video in seconds (floating-point)
 *
 *     TrimRequest:
 *       type: object
 *       required:
 *         - start
 *         - end
 *       properties:
 *         start:
 *           type: string
 *           description: Start time of the trimmed segment (hh:mm:ss(.ms) or mm:ss(.ms) or ss(.ms))
 *           pattern: "^(?:(\\d+:)?([0-5]?\\d):)?([0-5]?\\d)(\\.\\d+)?$"
 *         end:
 *           type: string
 *           description: End time of the trimmed segment (hh:mm:ss(.ms) or mm:ss(.ms) or ss(.ms))
 *           pattern: "^(?:(\\d+:)?([0-5]?\\d):)?([0-5]?\\d)(\\.\\d+)?$"
 */
/**
 * @openapi
 * /api/videos/upload:
 *   post:
 *     summary: Upload a single video file
 *     tags:
 *       - Videos
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Video file (e.g., .mp4, .mov)
 *             required:
 *               - file
 *           encoding:
 *             file:
 *               contentType:
 *                 - video/mp4
 *                 - video/quicktime
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VideoMetadata'
 *       400:
 *         description: No file provided
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Unexpected error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post("/upload", upload.single("file"), videoController.upload);
/**
 * @openapi
 * /api/videos/{id}/trim:
 *   post:
 *     summary: Trim an existing video
 *     tags:
 *       - Videos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Video ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TrimRequest'
 *           example:
 *             start: "00:00:05.000"
 *             end:   "00:00:10.000"
 *     responses:
 *       200:
 *         description: Video trimmed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VideoMetadata'
 *       400:
 *         description: Invalid trim parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Unexpected error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post("/:id/trim", videoController.trim);
exports.default = router;
