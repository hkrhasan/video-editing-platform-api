

export class KnownError extends Error {
  public code: number;

  constructor(
    message: string,
    code: number = 500,
  ) {
    super(message);
    this.code = code;
    this.name = this.constructor.name;

    // Ensure the name of this error is the same as the class name
    Object.setPrototypeOf(this, new.target.prototype);
    // Capture the stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}