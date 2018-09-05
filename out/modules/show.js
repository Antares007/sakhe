import { dispose, return$0027 as return$00240027 } from "./s/disposable";
import { run, return$0027 as return$00240027$$1, map } from "./s/task";
import { toConsole, printf } from "./fable-core.2.0.0-beta-003/String";
export function cancelable(task) {
  let active = true;

  let onCancel = function onCancel() {
    active = false;
  };

  const onAttach = function onAttach(cb) {
    if (!active) {
      cb();
    } else {
      onCancel = cb;
    }
  };

  return [return$00240027(function () {
    onCancel();
  }), map(function f(a) {
    return [onAttach, a];
  }, task)];
}
export const z = return$00240027$$1(function (_arg1) {
  if (_arg1.tag === 1) {
    return null;
  } else {
    const onCancel$$1 = _arg1.fields[0][0];
    const b = _arg1.fields[0][1];
    let active$$1 = true;
    onCancel$$1(function () {
      toConsole(printf("canceled"));
      active$$1 = false;
    });
    toConsole(printf("running... %f %b"))(b)(active$$1);
    return return$00240027(function () {
      toConsole(printf("disposed"));
    });
  }
});
export const hmm1 = cancelable(z);
export const hmm2 = cancelable(z);
export const rez1 = map(function f$$2() {
  return 1;
}, hmm1[1]);
export const rez2 = map(function f$$3() {
  return 2;
}, hmm2[1]);
toConsole(printf("run"));
run(rez1);
dispose(hmm1[0]);
dispose(hmm2[0]);
run(rez2);