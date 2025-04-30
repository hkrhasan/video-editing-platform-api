"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnownError = void 0;
class KnownError extends Error {
    constructor(message, code = 500, details) {
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
exports.KnownError = KnownError;
