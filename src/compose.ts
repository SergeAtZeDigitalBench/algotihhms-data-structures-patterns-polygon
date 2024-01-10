type FnType<D> = (v: D) => D;
type FnAsyncType<D> = (v: D) => Promise<D>;

export const compose =
  <T extends {} = Record<string, any>>(...fns: FnType<T>[]) =>
  (initObjValue: T) => {
    return fns.reduceRight((currentValue, currentFunc) => {
      return currentFunc(currentValue);
    }, initObjValue);
  };

export const composeAsync =
  <T = any>(...fnsAsync: FnAsyncType<T>[]) =>
  (initObjValue: T) => {
    return fnsAsync.reduceRight(async (currentValue, currentAsyncFn, index) => {
      try {
        return currentAsyncFn(await currentValue);
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : `Composition failed at functiuon number ${
                index + 1
              } from the right`;
        console.warn(message);
        return await currentValue;
      }
    }, Promise.resolve(initObjValue));
  };
