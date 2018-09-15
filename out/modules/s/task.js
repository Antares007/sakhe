"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.empty = empty;
exports.contraMap = contraMap;
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
  return function (a) {
    return null;
  };
}

function contraMap(f$$1, _arg1) {
  const g = _arg1;
  return function (_arg2) {
    if (_arg2.tag === 1) {
      const err = _arg2.fields[1];
      const a$$2 = _arg2.fields[0];
      const $arg$$2 = [f$$1(a$$2), err];
      return g(new I$00601(1, "Exn", $arg$$2[0], $arg$$2[1]));
    } else {
      const a$$1 = _arg2.fields[0];
      return g(new I$00601(0, "Run", f$$1(a$$1)));
    }
  };
}

function run(a$$3, _arg1$$1) {
  const t = _arg1$$1;

  try {
    return t(new I$00601(0, "Run", a$$3));
  } catch (err$$1) {
    return t(new I$00601(1, "Exn", a$$3, err$$1));
  }
}

function append(l, r) {
  return function (_arg1$$2) {
    var r$$1, l$$1, d, d$$1;

    if (_arg1$$2.tag === 1) {
      return null;
    } else {
      const a$$4 = _arg1$$2.fields[0];
      const matchValue = [run(a$$4, l), run(a$$4, r)];
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
    return function (_arg1$$3) {
      if (_arg1$$3.tag === 1) {
        return null;
      } else {
        const a$$5 = _arg1$$3.fields[0];
        const disposables = (0, _Array.ofSeq)((0, _Seq.map)(function mapping$$1(o$$1) {
          return o$$1;
        }, (0, _Seq.filter)(function predicate(o) {
          return o != null;
        }, (0, _Seq.map)(function mapping(arg10$0040) {
          return run(a$$5, arg10$0040);
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

function Cancelable$$$ifCanceledThenRaiseCancellationException(_arg1$$4) {
  const f$$2 = _arg1$$4.fields[0];
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
  const task$$1 = return$0027(function (_arg1$$6) {
    var a$$7;

    if (_arg1$$6.tag === 1) {
      return null;
    } else {
      const a$$6 = _arg1$$6.fields[0];

      if (canceled) {
        return null;
      } else {
        taskDisposable = (a$$7 = [a$$6, cancellationSource], function (arg10$0040$$1) {
          return run(a$$7, arg10$0040$$1);
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

function Cancelable$$$return$0027(t$$1) {
  return Cancelable$$$extend(return$0027(t$$1));
}