"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.map = map;
exports.contraMap = contraMap;
exports.run = run;
exports.bind = bind;
exports.I$00601 = void 0;

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