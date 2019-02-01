import { declare, Record } from "./fable-library.2.1.0-beta-006/Types";
import {
  record,
  type,
  lambda,
  unit
} from "./fable-library.2.1.0-beta-006/Reflection";
import { return$0027 as return$00240027 } from "./disposable";
import { run } from "./scheduler";
import { run as run$$1 } from "./stream";
export const Sink$00601 = declare(function Sakhe_Default_Sink(
  arg1,
  arg2,
  arg3
) {
  this.next = arg1;
  this.complete = arg2;
  this.error = arg3;
},
Record);
export function Sink$00601$reflection($gen$$1) {
  return record("Sakhe.Default.Sink`1", [$gen$$1], Sink$00601, () => [
    ["next", lambda($gen$$1, unit)],
    ["complete", lambda(unit, unit)],
    ["error", lambda(type("System.Exception"), unit)]
  ]);
}
export function timer(delay, task) {
  if (delay <= 0) {
    let canceled = false;
    Promise.resolve(task).then(function(t) {
      if (!canceled) {
        t();
      }
    });
    return return$00240027(function() {
      canceled = true;
    });
  } else {
    const token = setTimeout(task, ~~delay);
    return return$00240027(function() {
      clearTimeout(token);
    });
  }
}
export function tf() {
  return Math.floor(Date.now());
}
export const scheduler = run(function() {
  return tf();
}, timer);
export function subscribe(sink, s) {
  return run$$1(
    scheduler,
    function(_arg1) {
      switch (_arg1.tag) {
        case 1: {
          const t$$2 = _arg1.fields[0];
          sink.complete();
          break;
        }

        case 2: {
          const t$$3 = _arg1.fields[0];
          const err = _arg1.fields[1];
          sink.error(err);
          break;
        }

        default: {
          const t$$1 = _arg1.fields[0];
          const a = _arg1.fields[1];
          sink.next(a);
        }
      }
    },
    s
  );
}
