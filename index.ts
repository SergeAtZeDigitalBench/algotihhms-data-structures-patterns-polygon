import { curriedSum } from "./src/curry";

const sum = (a: number, b: number, c: number) => a + b + c;

const curriedFn = curriedSum(sum) as any;

console.log(curriedFn(1)(2)(3));
console.log(curriedFn(1, 2)(3));
console.log(curriedFn(1, 2, 3));
