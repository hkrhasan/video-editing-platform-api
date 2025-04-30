import { ZodObject } from "zod";
import { KnownError } from "./error";



export default function validateBody<T>(data: any, schema: ZodObject<any>) {
  const result = schema.safeParse(data);

  if (!result.success) {
    throw new KnownError("Validation Error", 400, result.error.issues)
  }

  return result.data as T;
}