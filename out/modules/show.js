import { run, map, Cancelable$$$wrap as Cancelable$0024$0024$0024wrap, Cancelable$$$ifCanceledThenRaiseCancellationException as Cancelable$0024$0024$0024ifCanceledThenRaiseCancellationException, Cancelable$002EException as Cancelable$0024002EException, return$0027 as return$00240027 } from "./s/task";
import { Clock$$$now as Clock$0024$0024$0024now, PositiveInt$002ET as PositiveInt$0024002ET } from "./s/clock";
import { clock, timer } from "./s/default";
import { setTimer } from "./s/timer";
import { instanceofExtended } from "./fable-core.2.0.0-beta-003/Util";
import { toConsole, printf } from "./fable-core.2.0.0-beta-003/String";
import { dispose, return$0027 as return$00240027$$1 } from "./s/disposable";
export const setTask = setTimer(return$00240027(function (_arg1) {
  if (_arg1.tag === 1) {
    return null;
  } else {
    const s = _arg1.fields[0][1];
    return null;
  }
}), (!(5 >= 0) ? (() => {
  debugger;
})() : null, new PositiveInt$0024002ET(0, "PositiveInt", 5)), timer);
export const z = return$00240027(function (_arg1$$1) {
  if (_arg1$$1.tag === 1) {
    if (instanceofExtended(_arg1$$1.fields[1], Cancelable$0024002EException)) {
      toConsole(printf("cancel"));
      return null;
    } else {
      toConsole(printf("error"));
      return null;
    }
  } else {
    Cancelable$0024$0024$0024ifCanceledThenRaiseCancellationException(_arg1$$1.fields[0][1]);
    toConsole(printf("running... %f"))(_arg1$$1.fields[0][0]);
    return return$00240027$$1(function () {
      toConsole(printf("disposed"));
    });
  }
});
const patternInput$004025$002D6 = Cancelable$0024$0024$0024wrap(z);
export const ctask1 = patternInput$004025$002D6[0];
export const cancel1 = patternInput$004025$002D6[1];
export const rez1 = map(function f$$2() {
  return 1;
}, ctask1);
toConsole(printf("run at: %A"))(Clock$0024$0024$0024now(clock));
run(rez1);
dispose(cancel1);
run(rez1);