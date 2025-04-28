import { RequestHandler, Router } from "express";
import multer from "multer";
import { VideoController } from "../controllers/video.controller";

const ALLOWED_MIME_TYPES = [
  'video/mp4',
  'video/quicktime',  // .mov
];

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      // reject the file and pass an error down to your error handler
      cb(new Error('Invalid file type. Only .mp4 and .mov are allowed.'));
    }
  },
});
const videoController = new VideoController();
const router = Router();

/**
 * @openapi
 * /api/videos/upload:
 *   post:
 *     summary: Upload a single file
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
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: id
 *                 name:
 *                   type: string
 *                   format: name 
 *                 size:
 *                   type: string
 *                   format: size 
 *                 duration:
 *                   type: string
 *                   format: duration 
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
 *
 * components:
 *   schemas:
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: error
 *         details:
 *           type: string
 *           example: InternalServerError
 */

router.post(
  "/upload",
  upload.single('file'),
  videoController.upload as unknown as RequestHandler
)

/**
 * @openapi
 * /api/videos/:id/trim:
 *   post:
 *     summary: 
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
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: id
 *                 name:
 *                   type: string
 *                   format: name 
 *                 size:
 *                   type: string
 *                   format: size 
 *                 duration:
 *                   type: string
 *                   format: duration 
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
 *
 * components:
 *   schemas:
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: error
 *         details:
 *           type: string
 *           example: InternalServerError
 */
router.post("/:id/trim", videoController.trim as unknown as RequestHandler)


export default router;