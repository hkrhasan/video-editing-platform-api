import { z } from "zod";
import { TimingSchema } from './timing.schema';

export const TrimSchema = TimingSchema
export type TrimSchemaPayload = z.infer<typeof TrimSchema>