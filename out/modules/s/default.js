import { Clock$$$return$0027 as Clock$0024$0024$0024return$00240027, Time$$$return$0027 as Time$0024$0024$0024return$00240027 } from "./clock";
import { return$0027 as return$00240027 } from "./timer";
export function clock() {
  const runAt = performance.now();
  return Clock$0024$0024$0024return$00240027(function () {
    return Time$0024$0024$0024return$00240027(performance.now() - runAt);
  });
}
export const timer = return$00240027(setTimeout, clearTimeout);