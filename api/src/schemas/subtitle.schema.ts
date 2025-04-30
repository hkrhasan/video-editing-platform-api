import { z } from "zod";
import { TimingSchema } from "./timing.schema";

export const SubtitleSchema = z.object({
  text: z.string().min(1, "subtitle is required")
}).merge(TimingSchema)
export type SubtitleSchemaPayload = z.infer<typeof SubtitleSchema>; 