import fs from "fs";



export function cleanFile(path?: string) {
  if (path && fs.existsSync(path)) fs.unlinkSync(path)
}