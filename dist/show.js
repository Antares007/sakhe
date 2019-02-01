import { run, combineArray, at, map, tap, on, merge, periodic } from "./stream";
import { empty } from "./disposable";
import { createAtom } from "./fable-library.2.1.0-beta-006/Util";
import { scheduler } from "./default";
import { toConsole, printf } from "./fable-library.2.1.0-beta-006/String";
import { mkScheduler } from "./scheduler2";
export function pair(a, b) {
  return [a, b];
}
export const s = merge(periodic(1000, "a"), periodic(2000, "b"));
export const d = createAtom(empty);
d(
  run(
    scheduler,
    function(arg10) {
      toConsole(printf("%A"))(arg10);
    },
    s
  )
);
export function see2(o) {
  return function() {
    o(43);
  };
}
see2(function(o$$1) {})(null);
export function see() {
  return function(tf) {
    return function(requestNextFrame) {
      return mkScheduler(tf, requestNextFrame);
    };
  };
}
