import { Clock$$$return$0027 as Clock$0024$0024$0024return$00240027, FlooredFloat$002ET as FlooredFloat$0024002ET } from "./clock";
import { return$0027 as return$00240027 } from "./timer";
export const clock = Clock$0024$0024$0024return$00240027(function () {
  return new FlooredFloat$0024002ET(0, "FlooredFloat", Math.floor(performance.now()));
});
export const timer = return$00240027(setTimeout, clearTimeout);