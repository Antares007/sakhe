;require._modules["/s\task.js"] = (function() { var __filename = "/s\task.js"; var __dirname = "/s"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /s\task.js  == */ var __module__ = function() { 
 import { FSharpException, declare, Union } from "../fable-core.2.0.0-beta-004/Types";
import { return$0027 as return$00240027, appendArray as appendArray$$1, append as append$$1 } from "./disposable";
import { filter, map as map$$1 } from "../fable-core.2.0.0-beta-004/Seq";
import { ofSeq } from "../fable-core.2.0.0-beta-004/Array";
export const On$00601 = declare(function On$00601(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function return$0027(f) {
  return f;
}
export function empty() {
  return function (_arg1) {
    return null;
  };
}
export function map(f$$1, _arg1$$1) {
  const g = _arg1$$1;
  return function (_arg2) {
    if (_arg2.tag === 1) {
      const err = _arg2.fields[1];
      const a$$1 = _arg2.fields[0];
      return g(new On$00601(1, "Exn", f$$1(a$$1), err));
    } else {
      const a = _arg2.fields[0];
      return g(new On$00601(0, "Run", f$$1(a)));
    }
  };
}
export function run(_arg1$$2) {
  const g$$1 = _arg1$$2;

  try {
    return g$$1(new On$00601(0, "Run", null));
  } catch (err$$1) {
    return g$$1(new On$00601(1, "Exn", null, err$$1));
  }
}
export function append(l, r) {
  return function (_arg1$$3) {
    var r$$1, l$$1, d, d$$1;

    if (_arg1$$3.tag === 1) {
      return null;
    } else {
      const a$$2 = _arg1$$3.fields[0];

      const a$$3 = function a$$3() {
        return a$$2;
      };

      const matchValue = [run(map(a$$3, l)), run(map(a$$3, r))];
      return matchValue[0] != null ? matchValue[1] != null ? (r$$1 = matchValue[1], l$$1 = matchValue[0], append$$1(l$$1, r$$1)) : (d = matchValue[0], d) : matchValue[1] != null ? (d$$1 = matchValue[1], d$$1) : null;
    }
  };
}
export function appendArray(tasks) {
  const length = tasks.length | 0;

  if (length === 0) {
    return empty();
  } else if (length === 1) {
    return tasks[0];
  } else {
    return function (_arg1$$4) {
      if (_arg1$$4.tag === 1) {
        return null;
      } else {
        const a$$4 = _arg1$$4.fields[0];

        const a$$5 = function a$$5() {
          return a$$4;
        };

        const disposables = ofSeq(map$$1(function mapping$$1(o$$1) {
          return o$$1;
        }, filter(function predicate(o) {
          return o != null;
        }, map$$1(function mapping(t) {
          return run(map(a$$5, t));
        }, tasks))), Array);
        return appendArray$$1(disposables);
      }
    };
  }
}
export const Cancelable$002EException = declare(function Cancelable$002EException() {}, FSharpException);
export const Cancelable$002ESource = declare(function Cancelable$002ESource(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Cancelable$$$ifCanceledThenRaiseCancellationException(_arg1$$5) {
  const f$$2 = _arg1$$5.fields[0];
  f$$2();
}
export function Cancelable$$$extend(task) {
  let canceled = false;
  let taskDisposable = null;
  const cancellationSource = new Cancelable$002ESource(0, "Source", function () {
    if (canceled) {
      throw new Cancelable$002EException();
    }
  });
  const cancelDisposable = return$00240027(function () {
    canceled = true;

    if (taskDisposable != null) {
      const f$$4 = taskDisposable;
      f$$4();
    }
  });
  const task$$1 = return$0027(function (_arg1$$7) {
    if (_arg1$$7.tag === 1) {
      return null;
    } else {
      const a$$6 = _arg1$$7.fields[0];

      if (canceled) {
        return null;
      } else {
        taskDisposable = run(map(function f$$6() {
          return [a$$6, cancellationSource];
        }, task));

        if (canceled ? taskDisposable != null : false) {
          const f$$7 = taskDisposable;
          f$$7();
          return null;
        } else {
          return taskDisposable;
        }
      }
    }
  });
  return [task$$1, cancelDisposable];
}
export function Cancelable$$$return$0027(t$$1) {
  return Cancelable$$$extend(return$0027(t$$1));
} 
 }; /* ==  End source for module /s\task.js  == */ return module; }());;