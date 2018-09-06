import { declare, Union } from "../fable-core.2.0.0-beta-003/Types";
import { run, Cancelable$$$wrap as Cancelable$0024$0024$0024wrap } from "./task";
import { dispose } from "./disposable";
export const Handle$00601 = declare(function Handle$00601(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const T$00601 = declare(function T$00601(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function return$0027(set, clear) {
  const set$$1 = function set$$1(task, delay) {
    var i;
    const patternInput = Cancelable$0024$0024$0024wrap(task);

    if (0 === (i = delay.fields[0] | 0, i)) {
      return new Handle$00601(0, "Timeout", [set(function () {
        run(patternInput[0]);
      }, 0), patternInput[1]]);
    } else {
      Promise.resolve(patternInput[0]).then(run);
      return new Handle$00601(1, "Defer", patternInput[1]);
    }
  };

  const clear$$1 = function clear$$1(h) {
    if (h.tag === 1) {
      const d$$1 = h.fields[0];
      dispose(d$$1);
    } else {
      const d = h.fields[0][1];
      const a = h.fields[0][0];
      clear(a);
      dispose(d);
    }
  };

  return new T$00601(0, "Timer", set$$1, clear$$1);
}
export function setTimer(task$$2, time, _arg1$$1) {
  const set$$2 = _arg1$$1.fields[0];
  return set$$2(task$$2, time);
}
export function clearTimer(handle, _arg1$$2) {
  const clear$$2 = _arg1$$2.fields[1];
  clear$$2(handle);
}