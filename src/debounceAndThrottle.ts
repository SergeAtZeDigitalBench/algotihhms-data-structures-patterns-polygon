/**
 * @description the purpose of debounce fn - is to create a function that
 * has a delayed call - AND all consequent functions called during this delay
 * ARE going to REPLACE the function called in process
 * eg, debouncedFn1 = debounced(fn, 2000)
 * debouncedFn1("a"); // cancelled
 * debouncedFn1("b"); // cancelled
 * debouncedFn1("c"); // this one will be called
 */
export const debounce = <Args extends any[], Return = any>(
  fn: (...args: Args) => Return,
  timeout: number
) => {
  let timer: null | number = null;

  const debouncedFn = (...args: Args) => {
    timer && clearTimeout(timer);

    timer = setTimeout(() => fn.apply(this, args), timeout);
  };

  return debouncedFn;
};

/**
 * @description the purpose of throttle function - is to create a function,
 * that after when called - creates a delay, AND all consequent
 * function calls during this delay - ARE cancelled
 * eg. throttledFn1 = throttle(fn, 2000)
 * throttledFn1("a"); // this one will be called
 * throttledFn1("b"); // cancelled
 * throttledFn1("c"); // cancelled
 * setTimeout(() => { throttledFn1("d") }, 2100 ); // this one will be called, because the 1st delay of 2000 has expired.
 */
export const throttle = <Args extends any[], Return = any>(
  fn: (...args: Args) => Return,
  timeout: number
) => {
  let isPending: boolean = false;

  const throttledFn = (...args: Args) => {
    if (isPending) return;

    fn.apply(this, args);
    isPending = true;
    setTimeout(() => {
      isPending = false;
    }, timeout);
  };

  return throttledFn;
};
