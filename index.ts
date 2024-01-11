import { curriedSum } from "./src/curry";
import { debounce, throttle } from "./src/debounceAndThrottle";

// const sum = (a: number, b: number, c: number) => a + b + c;

// const curriedFn = curriedSum(sum) as any;

// console.log(curriedFn(1)(2)(3));
// console.log(curriedFn(1, 2)(3));
// console.log(curriedFn(1, 2, 3));

const logFullname = (first: string, last: string) => {
  console.log(`Hi, ${first} ${last}!`);
};

const debouncedLogFullName = debounce(logFullname, 3000);
const throttledHi = throttle(logFullname, 3000);

throttledHi("Serge", "B1");
// debouncedLogFullName("Serge", "B1");
// debouncedLogFullName("Serge", "B2");
// debouncedLogFullName("Serge", "B3");

throttledHi("Serge", "B2");
throttledHi("Serge", "B3");
throttledHi("Serge", "B4");

setTimeout(() => {
  throttledHi("Serge", "B5");
}, 3100);
