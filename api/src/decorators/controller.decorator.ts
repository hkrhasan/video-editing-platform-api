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
    const original = target.prototype[name];

    // Check if the method is marked to skip
    const skip = Reflect.getMetadata(
      SKIP_DECORATOR_KEY,
      target.prototype,
      name,
    );
    if (skip) {
      return;
    }

    target.prototype[name] = async function (
      req: Request,
      res: Response,
      ...args: unknown[]
    ) {
      console.log(`→ [${target.name}.${name}] start`);
      const start = process.hrtime.bigint();

      try {
        const result = await original.apply(this, [req, res, ...args]);

        const end = process.hrtime.bigint();
        const durationMs = Number(end - start) / 1_000_000;
        console.log(`← [${target.name}.${name}] done in ${durationMs.toFixed(2)}ms`);

        if (result && result.response && result.code) {
          const { response, code = 200 } = result;
          return res
            .status(code)
            .json(prepareResponse({ status: "success", data: response }));
        } else {
          throw new KnownError(
            "Method did not return a valid response object.",
            500,
          );
        }
      } catch (error) {
        const end = process.hrtime.bigint();
        const durationMs = Number(end - start) / 1_000_000;
        console.log(`✖ [${target.name}.${name}] failed in ${durationMs.toFixed(2)}ms`);

        if (error instanceof KnownError) {
          return res
            .status(error.code as number)
            .json(
              prepareResponse({
                status: "error",
                details: error.details || error.message,
              }),
            );
        } else {
          console.error(error);
          return res
            .status(500)
            .json(
              prepareResponse({
                status: "error",
                details: new Error("InternalServer Error"),
              }),
            );
        }
      }
    };
  });
}
