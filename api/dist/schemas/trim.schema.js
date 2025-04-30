"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrimSchema = void 0;
const zod_1 = require("zod");
exports.TrimSchema = zod_1.z.object({
    start: zod_1.z.string().regex(/^(?:(\d+:)?([0-5]?\d):)?([0-5]?\d)(\.\d+)?$/),
    end: zod_1.z.string().regex(/^(?:(\d+:)?([0-5]?\d):)?([0-5]?\d)(\.\d+)?$/),
});
