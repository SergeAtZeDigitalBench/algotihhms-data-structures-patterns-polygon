// const sum = (a: number, b: number, c: number) => a + b + c;

export const curriedSum = function (fn: (...args: number[]) => number) {
  const maxArguments = fn.length;

  return function currentSum(...nums: number[]) {
    if (nums.length >= maxArguments) {
      console.log("done. enough arguments👍");

      return fn(...nums);
    } else {
      console.log("adding more arguments...");
      return function nextSum(...moreNums: number[]) {
        const newNums = [...nums, ...moreNums];
        return currentSum(...newNums);
      };
    }
  };
};
