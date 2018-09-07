import { declare, Union } from "../fable-core.2.0.0-beta-003/Types";
import { DelayModule$$$value as DelayModule$0024$0024$0024value } from "./time";
import { run, Cancelable$$$extend as Cancelable$0024$0024$0024extend } from "./task";
import { append, return$0027 as return$00240027 } from "./disposable";
export const T = declare(function T(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function return$0027(set, clear) {
  return new T(0, "Timer", function (task, delay) {
    const delay$$1 = DelayModule$0024$0024$0024value(delay) | 0;
    const patternInput = Cancelable$0024$0024$0024extend(task);

    if (0 === delay$$1) {
      Promise.resolve(patternInput[0]).then(run);
      return patternInput[1];
    } else {
      const handle = set(function () {
        run(patternInput[0]);
      }, delay$$1);
      return append(patternInput[1], return$00240027(function () {
        clear(handle);
      }));
    }
  });
}
export function setTimer(task$$2, time, _arg1) {
  const set$$1 = _arg1.fields[0];
  return set$$1(task$$2, time);
}