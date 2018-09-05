import { declare, FSharpException } from "./fable-core.2.0.0-beta-003/Types";
import { dispose, return$0027 as return$00240027 } from "./s/disposable";
import { run, return$0027 as return$00240027$$1, map } from "./s/task";
import { instanceofExtended } from "./fable-core.2.0.0-beta-003/Util";
import { toConsole, printf } from "./fable-core.2.0.0-beta-003/String";
export const CancelationException = declare(function CancelationException() {}, FSharpException);
export function cancelable(task) {
  let active = true;

  const cancel = function cancel() {
    active = false;
  };

  const ifCanceledRaiseCancelationExn = function ifCanceledRaiseCancelationExn() {
    if (!active) {
      throw new CancelationException();
    }
  };

  return [return$00240027(cancel), map(function (a) {
    return [ifCanceledRaiseCancelationExn, a];
  }, task)];
}
export const z = return$00240027$$1(function (_arg1) {
  if (_arg1.tag === 1) {
    if (instanceofExtended(_arg1.fields[1], CancelationException)) {
      toConsole(printf("cancel"));
      return null;
    } else {
      toConsole(printf("error"));
      return null;
    }
  } else {
    _arg1.fields[0][0]();

    throw new Error("omg");
    toConsole(printf("running... %f"))(_arg1.fields[0][1]);
    return return$00240027(function () {
      toConsole(printf("disposed"));
    });
  }
});
export const hmm1 = cancelable(z);
export const rez1 = map(function f$$2() {
  return 1;
}, hmm1[1]);
toConsole(printf("run"));
dispose(hmm1[0]);
run(rez1);