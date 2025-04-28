import { z } from 'zod';

export const TrimSchema = z.object({
  start: z.string().regex(/^(?:(\d+:)?([0-5]?\d):)?([0-5]?\d)(\.\d+)?$/),
  end: z.string().regex(/^(?:(\d+:)?([0-5]?\d):)?([0-5]?\d)(\.\d+)?$/),
})