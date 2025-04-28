import "reflect-metadata";
import { Request, Response } from "express";
import createClassDecorator from "../utils/createClassDecorator";
import { KnownError } from "../utils/error";
import { prepareResponse } from "../utils/prepareResponse";

const SKIP_DECORATOR_KEY = Symbol("skipDecorator");

// Helper decorator to mark methods that should skip the Controller logic
export function SkipController(): MethodDecorator {
  return function (target, propertyKey, descriptor) {
    Reflect.defineMetadata(SKIP_DECORATOR_KEY, true, target, propertyKey);
  };
}

export function Controller(target: {
  prototype: Record<string, any>;
  name: string;
}): void {
  return createClassDecorator(target, (name: string) => {
    const method = target.prototype[name];

    // Check if the method is marked to skip
    const skip = Reflect.getMetadata(
      SKIP_DECORATOR_KEY,
      target.prototype,
      name,
    );
    if (skip) {
      // If the method is marked to skip, do nothing
      return;
    }

    target.prototype[name] = async function (
      req: Request,
      res: Response,
      ...args: unknown[]
    ) {
      console.log(`Executing ${target.name}.${name} controller...`);
      try {
        // Call the original method and handle async behavior
        const result = await method.apply(this, [req, res, ...args]);

        // Assuming the result is an object with 'response' and 'code'
        if (result && result.response && result.code) {
          const { response, code = 200 } = result;
          res.status(code).json(prepareResponse({
            status: "success",
            data: response,
          }));
        } else
          throw new KnownError(
            "Method did not return a valid response object.",
            500,
          );
      } catch (error) {
        // If an error occurs, handle custom errors or log it
        if (error instanceof KnownError) {
          res
            .status(error.code as number)
            .json(prepareResponse({
              status: "error",
              details: error.message,
            }));
        } else {
          console.error(error);
          res
            .status(500)
            .json(prepareResponse({ status: "error", details: new Error("InternalServer Error") }));
        }
      }
    };
  });
}