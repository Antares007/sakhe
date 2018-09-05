import { return$0027 as return$00240027 } from "./scheduler/disposable";
import { Task$$$run as Task$0024$0024$0024run, Task$$$return$0027 as Task$0024$0024$0024return$00240027, Task$$$map as Task$0024$0024$0024map } from "./scheduler/task";
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
  }), Task$0024$0024$0024map(function f(a) {
    return [onAttach, a];
  }, task)];
}
export const z = Task$0024$0024$0024return$00240027(function (_arg1) {
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
export const rez1 = Task$0024$0024$0024map(function f$$2() {
  return 1;
}, hmm1[1]);
export const rez2 = Task$0024$0024$0024map(function f$$3() {
  return 2;
}, hmm2[1]);
toConsole(printf("run"));
Task$0024$0024$0024run(rez1);
hmm1[0].dispose();
hmm2[0].dispose();
Task$0024$0024$0024run(rez2);