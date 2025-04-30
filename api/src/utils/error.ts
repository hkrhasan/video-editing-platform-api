import { ZodIssue } from "zod";

type Details = string | ZodIssue | ZodIssue[]

export class KnownError extends Error {
  public code: number;
  public details?: Details

  constructor(
    message: string,
    code: number = 500,
    details?: Details
  ) {
    super(message);
    this.code = code;
    this.name = this.constructor.name;
    this.details = details;

    // Ensure the name of this error is the same as the class name
    Object.setPrototypeOf(this, new.target.prototype);
    // Capture the stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}