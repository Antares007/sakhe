import { return$0027 as return$00240027 } from "./time";
import { return$0027 as return$00240027$$1 } from "./clock";
import { return$0027 as return$00240027$$2 } from "./timer";
export function clock() {
  const runAt = performance.now();
  return return$00240027$$1(function () {
    return return$00240027(performance.now() - runAt);
  });
}
export const timer = return$00240027$$2(setTimeout, clearTimeout);