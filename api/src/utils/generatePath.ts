import { createId } from '@paralleldrive/cuid2';
import path from 'path'


export default function generateFilenameAndVideoId(originalName: string) {
  const videoId = createId();
  const ext = path.extname(originalName);
  const fileName = videoId + ext;
  return {
    originalName,
    videoId,
    fileName,
    ext
  }
}