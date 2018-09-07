import { timer, clock as clock$$1 } from "./s/default";
import { schedule } from "./s/scheduler";
import { toConsole, printf } from "./fable-core.2.0.0-beta-003/String";
import { now } from "./s/clock";
import { return$0027 as return$00240027 } from "./s/task";
import { DelayModule$$$return$0027 as DelayModule$0024$0024$0024return$00240027 } from "./s/time";
import { setTimer } from "./s/timer";
export const clock = clock$$1();
export function sch(delay) {
  return function (period) {
    return function (task) {
      return function (arg30$0040) {
        return schedule(delay, period, task, arg30$0040);
      };
    };
  };
}
toConsole(printf("run at: %A"))(now(clock));
export const d = setTimer(return$00240027(function (_arg1) {
  if (_arg1.tag === 1) {
    toConsole(printf("disposed..."));
    return null;
  } else {
    const s = _arg1.fields[0][1];
    toConsole(printf("running... at: %A"))(now(clock));
    return null;
  }
}), DelayModule$0024$0024$0024return$00240027(0), timer);
export const d2 = setTimer(return$00240027(function (_arg1$$1) {
  if (_arg1$$1.tag === 1) {
    toConsole(printf("disposed..."));
    return null;
  } else {
    const s$$1 = _arg1$$1.fields[0][1];
    toConsole(printf("running... at: %A"))(now(clock));
    return null;
  }
}), DelayModule$0024$0024$0024return$00240027(1000), timer);