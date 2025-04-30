import { Router } from "express";
import videos from "./videos.route"

const router = Router();

router.use("/videos", videos)

export default router;