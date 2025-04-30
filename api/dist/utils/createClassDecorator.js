"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createClassDecorator(target, callbackfn) {
    // Loop through all methods in the class prototype
    const methods = Object.getOwnPropertyNames(target.prototype).filter((method) => typeof target.prototype[method] === "function" &&
        method !== "constructor");
    methods.forEach(callbackfn);
}
exports.default = createClassDecorator;
