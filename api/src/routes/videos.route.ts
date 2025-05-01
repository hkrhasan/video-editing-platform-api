import { RequestHandler, Router } from "express";
import multer from "multer";
import { VideoController } from "../controllers/video.controller";

const ALLOWED_MIME_TYPES = [
  "video/mp4",
  "video/quicktime", // .mov
];

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only .mp4 and .mov are allowed."));
    }
  },
});

const videoController = new VideoController();
const router = Router();

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
 *     JobStatus:
 *       type: object
 *       required:
 *         - jobId
 *         - status
 *       properties:
 *         jobId:
 *           type: string
 *           format: uuid
 *         status:
 *           type: string
 *           example: RUNNING
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
 *     
 *     SubtitleRequest:
 *       type: object
 *       required:
 *         - text 
 *         - start
 *         - end
 *       properties:
 *         text:
 *           type: string
 *           description: subtitle text
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
router.post(
  "/upload",
  upload.single("file"),
  videoController.upload as unknown as RequestHandler
);

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
router.post(
  "/:id/trim",
  videoController.trim as unknown as RequestHandler
);


/**
 * @openapi
 * /api/videos/{id}/subtitles:
 *   post:
 *     summary: Add Subtitles 
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
 *             $ref: '#/components/schemas/SubtitleRequest'
 *           example:
 *             subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
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
router.post(
  "/:id/subtitles",
  videoController.addSubtitles as unknown as RequestHandler
);


/**
 * @openapi
 * /api/videos/{id}/render:
 *   post:
 *     summary: Combine all changes into one video 
 *     tags:
 *       - Videos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Video ID
 *     responses:
 *       200:
 *         description: Render Job Queued
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JobStatus'
 *       400:
 *         description: Invalid render parameters
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
router.post(
  "/:id/render",
  videoController.render as unknown as RequestHandler
);


/**
 * @openapi
 * /api/videos/{id}/download:
 *   get:
 *     summary: Download the final rendered video
 *     tags:
 *       - Videos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Video ID
 *     responses:
 *       200:
 *         description: The rendered video file
 *         content:
 *           video/mp4:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Rendered video not found
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
router.get(
  "/:id/download",
  videoController.download as unknown as RequestHandler
);

export default router;
