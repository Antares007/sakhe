import { Clock$$$return$0027 as Clock$0024$0024$0024return$00240027, PositiveFlooredFloat$002ET as PositiveFlooredFloat$0024002ET } from "./clock";
import { return$0027 as return$00240027 } from "./timer";
export function clock() {
  const runAt = performance.now();
  return Clock$0024$0024$0024return$00240027(function () {
    const f$$1 = performance.now() - runAt;

    if (!(f$$1 >= 0)) {
      debugger;
    }

    return new PositiveFlooredFloat$0024002ET(0, "FlooredFloat", Math.floor(f$$1));
  });
}
export const timer = return$00240027(setTimeout, clearTimeout);