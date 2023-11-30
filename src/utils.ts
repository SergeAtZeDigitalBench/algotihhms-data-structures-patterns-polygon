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

const wait = (timeout = 100) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
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

export const logAsync = async (val: { count: number }) => {
  wait(200);
  console.log("Async count: ", val.count);
  return val;
};
