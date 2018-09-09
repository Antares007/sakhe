import { Lazy } from "../fable-core.2.0.0-beta-004/Util";
import { return$0027 as return$00240027 } from "./time";
import { return$0027 as return$00240027$$1 } from "./clock";
import { return$0027 as return$00240027$$2 } from "./timer";
import { return$0027 as return$00240027$$3 } from "./scheduler";

function clock() {
  const runAt = new Lazy(function () {
    return Math.floor(performance.now());
  });
  return return$00240027$$1(function () {
    const prev = runAt.Value;
    return return$00240027(Math.floor(performance.now()) - prev);
  });
}

export const timer = return$00240027$$2(setTimeout, clearTimeout);
export function scheduler() {
  return return$00240027$$3(timer, clock());
}