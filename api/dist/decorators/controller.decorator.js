"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipController = SkipController;
exports.Controller = Controller;
require("reflect-metadata");
const createClassDecorator_1 = __importDefault(require("../utils/createClassDecorator"));
const error_1 = require("../utils/error");
const prepareResponse_1 = require("../utils/prepareResponse");
const SKIP_DECORATOR_KEY = Symbol("skipDecorator");
// Helper decorator to mark methods that should skip the Controller logic
function SkipController() {
    return function (target, propertyKey, descriptor) {
        Reflect.defineMetadata(SKIP_DECORATOR_KEY, true, target, propertyKey);
    };
}
function Controller(target) {
    return (0, createClassDecorator_1.default)(target, (name) => {
        const method = target.prototype[name];
        // Check if the method is marked to skip
        const skip = Reflect.getMetadata(SKIP_DECORATOR_KEY, target.prototype, name);
        if (skip) {
            // If the method is marked to skip, do nothing
            return;
        }
        target.prototype[name] = function (req, res, ...args) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(`Executing ${target.name}.${name} controller...`);
                try {
                    // Call the original method and handle async behavior
                    const result = yield method.apply(this, [req, res, ...args]);
                    // Assuming the result is an object with 'response' and 'code'
                    if (result && result.response && result.code) {
                        const { response, code = 200 } = result;
                        res.status(code).json((0, prepareResponse_1.prepareResponse)({
                            status: "success",
                            data: response,
                        }));
                    }
                    else
                        throw new error_1.KnownError("Method did not return a valid response object.", 500);
                }
                catch (error) {
                    // If an error occurs, handle custom errors or log it
                    if (error instanceof error_1.KnownError) {
                        res
                            .status(error.code)
                            .json((0, prepareResponse_1.prepareResponse)({
                            status: "error",
                            details: error.details || error.message,
                        }));
                    }
                    else {
                        console.error(error);
                        res
                            .status(500)
                            .json((0, prepareResponse_1.prepareResponse)({ status: "error", details: new Error("InternalServer Error") }));
                    }
                }
            });
        };
    });
}
