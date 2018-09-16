"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.map = map;
exports.bind = bind;
exports.run = run;
exports.Cancellation$$$cancelable = Cancellation$$$cancelable;
exports.Cancellation$002EException = exports.I$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _Util = require("./fable-core.2.0.0-beta-004/Util");

var _io = require("./io");

var _disposable = require("./s/disposable");

var _List = require("./fable-core.2.0.0-beta-004/List");

const I$00601 = (0, _Types.declare)(function I$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.I$00601 = I$00601;

function return$0027(f) {
  return (0, _Util.curry)(2, f);
}

function map(g, f$$1, _arg1) {
  const io = _arg1;
  return (0, _io.IO$$$map)(g, f$$1, io);
}

function bind(f$$2, _arg1$$1) {
  const io$$1 = _arg1$$1;
  return (0, _io.IO$$$bind)(function (a) {
    const io$$2 = f$$2(a);
    return io$$2;
  }, io$$1);
}

function run(a$$1, _arg1$$2) {
  const io$$3 = _arg1$$2;
  let patternInput$$1;

  try {
    patternInput$$1 = (0, _io.IO$$$run)(function () {
      return new I$00601(0, "Run", a$$1());
    }, io$$3);
  } catch (err) {
    patternInput$$1 = (0, _io.IO$$$run)(function () {
      return new I$00601(1, "Exn", a$$1(), err);
    }, io$$3);
  }

  return [patternInput$$1[0], (0, _List.fold)(_disposable.append, _disposable.empty, patternInput$$1[1])];
}

const Cancellation$002EException = (0, _Types.declare)(function Cancellation$002EException() {}, _Types.FSharpException);
exports.Cancellation$002EException = Cancellation$002EException;

function Cancellation$$$cancelable(io$$4) {
  let taskDisposable = _disposable.empty;
  const canceled = new _Types.FSharpRef(false);

  const cancel = function cancel() {
    canceled.contents = true;
    const f$$3 = taskDisposable;
    f$$3();
  };

  const task = return$0027(function (i, o) {
    const matchValue = i();

    if (matchValue.tag === 1) {
      if (matchValue.fields[1] instanceof Cancellation$002EException) {} else {
        throw matchValue.fields[1];
      }
    } else {
      const i$$1 = function i$$1() {
        if (canceled.contents) {
          throw new Cancellation$002EException();
        } else {
          return matchValue.fields[0];
        }
      };

      const mapO = function mapO(d) {
        if (canceled.contents) {
          const f$$5 = d;
          f$$5();
          throw new Cancellation$002EException();
        }

        return d;
      };

      const patternInput$$2 = run(i$$1, map(mapO, function f$$6() {}, io$$4));
      taskDisposable = patternInput$$2[1];

      if (canceled.contents) {
        const f$$7 = patternInput$$2[1];
        f$$7();
      }

      o(patternInput$$2[1]);
    }
  });
  return [task, (0, _disposable.return$0027)(cancel)];
}