import { timer, clock as clock$$1 } from "./s/default";
import { toConsole, printf } from "./fable-core.2.0.0-beta-003/String";
import { PositiveInt$002ET as PositiveInt$0024002ET, Clock$$$now as Clock$0024$0024$0024now } from "./s/clock";
import { return$0027 as return$00240027 } from "./s/task";
import { setTimer } from "./s/timer";
export const clock = clock$$1();
toConsole(printf("run at: %A"))(Clock$0024$0024$0024now(clock));
export const d = setTimer(return$00240027(function (_arg1) {
  if (_arg1.tag === 1) {
    toConsole(printf("disposed..."));
    return null;
  } else {
    const s = _arg1.fields[0][1];
    toConsole(printf("running... at: %A"))(Clock$0024$0024$0024now(clock));
    return null;
  }
}), (!(0 >= 0) ? (() => {
  debugger;
})() : null, new PositiveInt$0024002ET(0, "PositiveInt", 0)), timer);
export const d2 = setTimer(return$00240027(function (_arg1$$1) {
  if (_arg1$$1.tag === 1) {
    toConsole(printf("disposed..."));
    return null;
  } else {
    const s$$1 = _arg1$$1.fields[0][1];
    toConsole(printf("running... at: %A"))(Clock$0024$0024$0024now(clock));
    return null;
  }
}), (!(1000 >= 0) ? (() => {
  debugger;
})() : null, new PositiveInt$0024002ET(0, "PositiveInt", 1000)), timer);