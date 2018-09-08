import { scheduler as scheduler$$2, clock as clock$$1 } from "./s/default";
import { schedule } from "./s/scheduler";
import { toConsole, printf } from "./fable-core.2.0.0-beta-003/String";
import { now } from "./s/clock";
import { return$0027 as return$00240027 } from "./s/disposable";
import { toString } from "./fable-core.2.0.0-beta-003/Util";
import { return$0027 as return$00240027$$1 } from "./s/task";
import { DelayModule$$$return$0027 as DelayModule$0024$0024$0024return$00240027 } from "./s/time";
export const clock = clock$$1();
export function sch(delay) {
  return function (period) {
    return function (task$$1) {
      return function (scheduler$$1) {
        return schedule(delay, period, task$$1, scheduler$$1);
      };
    };
  };
}
export const scheduler = scheduler$$2();
toConsole(printf("run at: %A"))(now(clock));
export const task = return$00240027$$1(function (_arg1) {
  if (_arg1.tag === 1) {
    const t$$1 = _arg1.fields[0][0];
    const err = _arg1.fields[1];
    toConsole(printf("task exn at: %A with: %A"))(t$$1)(err);
    return return$00240027(function () {
      toConsole(printf("task disposed Exn"));
    });
  } else {
    const t = _arg1.fields[0][0];
    const s = _arg1.fields[0][1];
    toConsole(printf("task run at: %A"))(t);
    console.timeStamp("stamp " + toString(t));
    return return$00240027(function () {
      toConsole(printf("task disposed Run"));
    });
  }
});
export const delay1s = DelayModule$0024$0024$0024return$00240027(1000);
export const d = schedule(null, delay1s, task, scheduler);