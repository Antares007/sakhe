"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.map = map;
exports.contraMap = contraMap;
exports.run = run;
exports.bind = bind;
exports.Cancellation$002ESource$$get_IsCanceled = Cancellation$002ESource$$get_IsCanceled;
exports.Cancellation$002ESource$$get_IfCanceledThenRaiseCancellationException = Cancellation$002ESource$$get_IfCanceledThenRaiseCancellationException;
exports.Cancellation$$$cancelable = Cancellation$$$cancelable;
exports.Cancellation$$$return$0027 = Cancellation$$$return$0027;
exports.Cancellation$002ESource = exports.Cancellation$002EException = exports.I$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _Util = require("./fable-core.2.0.0-beta-004/Util");

var _disposable = require("./s/disposable");

const I$00601 = (0, _Types.declare)(function I$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.I$00601 = I$00601;

function return$0027(f) {
  return (0, _Util.curry)(2, f);
}

function map(f$$1, _arg1) {
  const io = _arg1;
  return function (i) {
    return function ($arg$$1) {
      return f$$1(io(i)($arg$$1));
    };
  };
}

function contraMap(f$$2, _arg1$$1) {
  const io$$1 = _arg1$$1;
  return function (_arg2) {
    if (_arg2.tag === 1) {
      const err = _arg2.fields[1];
      const a$$1 = _arg2.fields[0];
      return function ($arg$$3) {
        return io$$1(new I$00601(1, "Exn", $arg$$3[0], $arg$$3[1]));
      }([f$$2(a$$1), err]);
    } else {
      const a = _arg2.fields[0];
      return function ($arg$$2) {
        return io$$1(new I$00601(0, "Run", $arg$$2));
      }(f$$2(a));
    }
  };
}

function run(a$$2, _arg1$$2) {
  const io$$2 = _arg1$$2;
  let r = _disposable.empty;

  const add = function add(l) {
    r = (0, _disposable.append)(r, l);
  };

  let rez;

  try {
    rez = io$$2(new I$00601(0, "Run", a$$2))(add);
  } catch (err$$1) {
    rez = io$$2(new I$00601(1, "Exn", a$$2, err$$1))(add);
  }

  return [rez, r];
}

function bind(f$$3, io$$3) {
  return function (_arg1$$3) {
    if (_arg1$$3.tag === 1) {
      const err$$2 = _arg1$$3.fields[1];
      throw err$$2;
    } else {
      const a$$3 = _arg1$$3.fields[0];
      const patternInput = run(a$$3, io$$3);
      return function (o) {
        o(patternInput[1]);
        const io2 = f$$3(patternInput[0]);
        return io2(new I$00601(0, "Run", a$$3))(o);
      };
    }
  };
}

const Cancellation$002EException = (0, _Types.declare)(function Cancellation$002EException() {}, _Types.FSharpException);
exports.Cancellation$002EException = Cancellation$002EException;
const Cancellation$002ESource = (0, _Types.declare)(function Cancellation$002ESource(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Cancellation$002ESource = Cancellation$002ESource;

function Cancellation$002ESource$$get_IsCanceled(cs) {
  const canceled = cs.fields[0];
  return canceled.contents;
}

function Cancellation$002ESource$$get_IfCanceledThenRaiseCancellationException(cs$$1) {
  const canceled$$1 = cs$$1.fields[0];

  if (canceled$$1.contents) {
    throw new Cancellation$002EException();
  }
}

function Cancellation$$$cancelable(io$$4) {
  let taskDisposable = _disposable.empty;
  const canceled$$2 = new _Types.FSharpRef(false);

  const cancel = function cancel() {
    canceled$$2.contents = true;
    const f$$4 = taskDisposable;
    f$$4();
  };

  const task = function (_arg1$$5) {
    if (_arg1$$5.tag === 1) {
      if (_arg1$$5.fields[1] instanceof Cancellation$002EException) {
        return function (value$$1) {
          value$$1;
        };
      } else {
        throw _arg1$$5.fields[1];
      }
    } else {
      return canceled$$2.contents ? function (value) {
        value;
      } : function (o$$1) {
        const patternInput$$2 = run([_arg1$$5.fields[0], new Cancellation$002ESource(0, "Source", canceled$$2)], io$$4);
        taskDisposable = patternInput$$2[1];

        if (canceled$$2.contents) {
          const f$$5 = patternInput$$2[1];
          f$$5();
        } else {
          o$$1(patternInput$$2[1]);
        }
      };
    }
  };

  return [task, (0, _disposable.return$0027)(cancel)];
}

function Cancellation$$$return$0027(f$$6) {
  return Cancellation$$$cancelable(return$0027(f$$6));
}