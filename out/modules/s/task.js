"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.empty = empty;
exports.map = map;
exports.run = run;
exports.append = append;
exports.appendArray = appendArray;
exports.Cancelable$$$ifCanceledThenRaiseCancellationException = Cancelable$$$ifCanceledThenRaiseCancellationException;
exports.Cancelable$$$extend = Cancelable$$$extend;
exports.Cancelable$$$return$0027 = Cancelable$$$return$0027;
exports.Cancelable$002ESource = exports.Cancelable$002EException = exports.I$00601 = void 0;

var _Types = require("../fable-core.2.0.0-beta-004/Types");

var _disposable = require("./disposable");

var _Seq = require("../fable-core.2.0.0-beta-004/Seq");

var _Array = require("../fable-core.2.0.0-beta-004/Array");

const I$00601 = (0, _Types.declare)(function I$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.I$00601 = I$00601;

function return$0027(f) {
  return f;
}

function empty() {
  return function (_arg1) {
    return null;
  };
}

function map(f$$1, _arg1$$1) {
  const g = _arg1$$1;
  return function (_arg2) {
    if (_arg2.tag === 1) {
      const err = _arg2.fields[1];
      const a$$1 = _arg2.fields[0];
      return g(new I$00601(1, "Exn", f$$1(a$$1), err));
    } else {
      const a = _arg2.fields[0];
      return g(new I$00601(0, "Run", f$$1(a)));
    }
  };
}

function run(a$$2, _arg1$$2) {
  const g$$1 = _arg1$$2;

  try {
    return g$$1(new I$00601(0, "Run", a$$2));
  } catch (err$$1) {
    return g$$1(new I$00601(1, "Exn", a$$2, err$$1));
  }
}

function append(l, r) {
  return function (_arg1$$3) {
    var r$$1, l$$1, d, d$$1;

    if (_arg1$$3.tag === 1) {
      return null;
    } else {
      const a$$3 = _arg1$$3.fields[0];
      const matchValue = [run(a$$3, l), run(a$$3, r)];
      return matchValue[0] != null ? matchValue[1] != null ? (r$$1 = matchValue[1], l$$1 = matchValue[0], (0, _disposable.append)(l$$1, r$$1)) : (d = matchValue[0], d) : matchValue[1] != null ? (d$$1 = matchValue[1], d$$1) : null;
    }
  };
}

function appendArray(tasks) {
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
        const disposables = (0, _Array.ofSeq)((0, _Seq.map)(function mapping$$1(o$$1) {
          return o$$1;
        }, (0, _Seq.filter)(function predicate(o) {
          return o != null;
        }, (0, _Seq.map)(function mapping(arg10$0040) {
          return run(a$$4, arg10$0040);
        }, tasks))), Array);
        return (0, _disposable.appendArray)(disposables);
      }
    };
  }
}

const Cancelable$002EException = (0, _Types.declare)(function Cancelable$002EException() {}, _Types.FSharpException);
exports.Cancelable$002EException = Cancelable$002EException;
const Cancelable$002ESource = (0, _Types.declare)(function Cancelable$002ESource(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Cancelable$002ESource = Cancelable$002ESource;

function Cancelable$$$ifCanceledThenRaiseCancellationException(_arg1$$5) {
  const f$$2 = _arg1$$5.fields[0];
  f$$2();
}

function Cancelable$$$extend(task) {
  let canceled = false;
  let taskDisposable = null;
  const cancellationSource = new Cancelable$002ESource(0, "Source", function () {
    if (canceled) {
      throw new Cancelable$002EException();
    }
  });
  const cancelDisposable = (0, _disposable.return$0027)(function () {
    canceled = true;

    if (taskDisposable != null) {
      const f$$4 = taskDisposable;
      f$$4();
    }
  });
  const task$$1 = return$0027(function (_arg1$$7) {
    var a$$6;

    if (_arg1$$7.tag === 1) {
      return null;
    } else {
      const a$$5 = _arg1$$7.fields[0];

      if (canceled) {
        return null;
      } else {
        taskDisposable = (a$$6 = [a$$5, cancellationSource], function (arg10$0040$$1) {
          return run(a$$6, arg10$0040$$1);
        })(task);

        if (canceled ? taskDisposable != null : false) {
          const f$$6 = taskDisposable;
          f$$6();
        }

        return taskDisposable;
      }
    }
  });
  return [task$$1, cancelDisposable];
}

function Cancelable$$$return$0027(t) {
  return Cancelable$$$extend(return$0027(t));
}