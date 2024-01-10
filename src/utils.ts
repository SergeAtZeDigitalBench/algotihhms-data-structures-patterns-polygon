export const increment = (val: { count: number }) => ({
  ...val,
  count: val.count + 1,
});

export const multiplyBy2 = (val: { count: number }) => ({
  ...val,
  count: val.count * 2,
});

export const log = (val: { count: number }) => {
  console.log("count: ", val.count);
  return val;
};

const wait = (timeout: number, errorMessage?: string) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (errorMessage) {
        reject(new Error(errorMessage));
      } else {
        resolve(null);
      }
    }, timeout);
  });

const getResolvedValue = <D = any>(data: D, timeout = 100): Promise<D> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });

export const incrementAsync = async (val: { count: number }) => {
  const newValue = await getResolvedValue({
    ...val,
    count: val.count + 1,
  });

  return newValue;
};

export const multiplyAsync = async (val: { count: number }) => {
  const newValue = await getResolvedValue({
    ...val,
    count: val.count * 2,
  });

  return newValue;
};

export const errorFunctionAsync = async (val: { count: number }) => {
  wait(200, "Somethng went wrong!");
  return val;
};

export const logAsync = async (val: { count: number }) => {
  wait(200);
  console.log("Async count: ", val.count);
  return val;
};
