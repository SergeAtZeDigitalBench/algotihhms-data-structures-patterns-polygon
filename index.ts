import { compose, composeAsync } from "./src/compose";
import {
  log,
  multiplyBy2,
  increment,
  incrementAsync,
  multiplyAsync,
  logAsync,
} from "./src/utils";

compose(log, multiplyBy2, increment)({ count: 1 });

console.log("\n====================\n");

composeAsync(logAsync, multiplyAsync, incrementAsync)({ count: 1 });
