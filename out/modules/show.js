import { run, map, Cancelable$$$wrap as Cancelable$0024$0024$0024wrap, return$0027 as return$00240027$$1, Cancelable$$$ifCanceledThenRaiseCancellationException as Cancelable$0024$0024$0024ifCanceledThenRaiseCancellationException, Cancelable$002EException as Cancelable$0024002EException } from "./s/task";
import { instanceofExtended } from "./fable-core.2.0.0-beta-003/Util";
import { toConsole, printf } from "./fable-core.2.0.0-beta-003/String";
import { dispose, return$0027 as return$00240027 } from "./s/disposable";
export const z = return$00240027$$1(function (_arg1) {
  if (_arg1.tag === 1) {
    if (instanceofExtended(_arg1.fields[1], Cancelable$0024002EException)) {
      toConsole(printf("cancel"));
      return null;
    } else {
      toConsole(printf("error"));
      return null;
    }
  } else {
    Cancelable$0024$0024$0024ifCanceledThenRaiseCancellationException(_arg1.fields[0][1]);
    toConsole(printf("running... %f"))(_arg1.fields[0][0]);
    return return$00240027(function () {
      toConsole(printf("disposed"));
    });
  }
});
const patternInput$004017$002D2 = Cancelable$0024$0024$0024wrap(z);
export const ctask1 = patternInput$004017$002D2[0];
export const cancel1 = patternInput$004017$002D2[1];
export const rez1 = map(function f$$2() {
  return 1;
}, ctask1);
toConsole(printf("run"));
run(rez1);
dispose(cancel1);
run(rez1);