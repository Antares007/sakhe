"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pmap = pmap;
exports.I$$$map = I$$$map;
exports.return$0027 = return$0027;
exports.run = run;
exports.I$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _disposable = require("./s/disposable");

var _pith = require("./pith");

const I$00601 = (0, _Types.declare)(function I$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.I$00601 = I$00601;

function pmap(f, _arg1) {
  const io = _arg1;
  return function (i) {
    const p = io(i);
    return (0, _Util.partialApply)(1, f, [p]);
  };
}

function I$$$map(f$$1, _arg1$$1) {
  if (_arg1$$1.tag === 1) {
    const exn = _arg1$$1.fields[1];
    const a$$1 = _arg1$$1.fields[0];
    return new I$00601(1, "Catch", f$$1(a$$1), exn);
  } else {
    const a = _arg1$$1.fields[0];
    return new I$00601(0, "Try", f$$1(a));
  }
}

function return$0027(f$$2) {
  return f$$2;
}

function run(a$$2, _arg1$$2) {
  const io$$1 = _arg1$$2;
  const o = (0, _pith.O$$$return$0027)(_disposable.append, _disposable.empty);
  let b;

  try {
    try {
      b = (0, _pith.Pith$$$run)(o, io$$1(new I$00601(0, "Try", a$$2)));
    } catch (err) {
      b = (0, _pith.Pith$$$run)(o, io$$1(new I$00601(1, "Catch", a$$2, err)));
    }
  } catch (err$$1) {
    (0, _pith.O$00602$$get_Value)(o).Dispose();
    throw err$$1;
  }

  return [b, (0, _pith.O$00602$$get_Value)(o)];
}