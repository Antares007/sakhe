"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.empty = empty;
exports.map = map;
exports.run = run;
exports.append = append;
exports.Cancelable$$$ifCanceledThenRaiseCancellationException = Cancelable$$$ifCanceledThenRaiseCancellationException;
exports.Cancelable$$$extend = Cancelable$$$extend;
exports.Cancelable$$$return$0027 = Cancelable$$$return$0027;
exports.Cancelable$002ESource = exports.Cancelable$002EException = exports.On$00601 = void 0;

var _Types = require("../fable-core.2.0.0-beta-004/Types");

var _disposable = require("./disposable");

const On$00601 = (0, _Types.declare)(function On$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.On$00601 = On$00601;

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
      return g(new On$00601(1, "Exn", f$$1(a$$1), err));
    } else {
      const a = _arg2.fields[0];
      return g(new On$00601(0, "Run", f$$1(a)));
    }
  };
}

function run(_arg1$$2) {
  const g$$1 = _arg1$$2;

  try {
    return g$$1(new On$00601(0, "Run", null));
  } catch (err$$1) {
    return g$$1(new On$00601(1, "Exn", null, err$$1));
  }
}

function append(l, r) {
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
      return matchValue[0] != null ? matchValue[1] != null ? (r$$1 = matchValue[1], l$$1 = matchValue[0], (0, _disposable.append)(l$$1, r$$1)) : (d = matchValue[0], d) : matchValue[1] != null ? (d$$1 = matchValue[1], d$$1) : null;
    }
  };
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
    if (_arg1$$6.tag === 1) {
      return null;
    } else {
      const a$$4 = _arg1$$6.fields[0];

      if (canceled) {
        return null;
      } else {
        taskDisposable = run(map(function f$$6() {
          return [a$$4, cancellationSource];
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

function Cancelable$$$return$0027(t) {
  return Cancelable$$$extend(return$0027(t));
}