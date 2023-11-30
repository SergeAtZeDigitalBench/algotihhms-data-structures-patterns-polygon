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
    return fnsAsync.reduceRight(async (currentValue, currentAsyncFn) => {
      return currentAsyncFn(await currentValue);
    }, Promise.resolve(initObjValue));
  };
