function createClassDecorator(
  target: { prototype: Record<string, unknown> },
  callbackfn: (value: string, index: number, array: string[]) => void,
) {
  // Loop through all methods in the class prototype
  const methods = Object.getOwnPropertyNames(target.prototype).filter(
    (method) =>
      typeof target.prototype[method] === "function" &&
      method !== "constructor",
  );
  methods.forEach(callbackfn);
}

export default createClassDecorator;