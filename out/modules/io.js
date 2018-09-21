"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I$$$map = I$$$map;
exports.return$0027 = return$0027;
exports.run = run;
exports.I$00601 = exports.T$00603 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _disposable = require("./s/disposable");

var _pith = require("./pith");

const T$00603 = (0, _Types.declare)(function T$00603(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00603 = T$00603;
const I$00601 = (0, _Types.declare)(function I$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.I$00601 = I$00601;

function I$$$map(f, _arg1) {
  if (_arg1.tag === 1) {
    const exn = _arg1.fields[1];
    const a$$1 = _arg1.fields[0];
    return new I$00601(1, "Catch", f(a$$1), exn);
  } else {
    const a = _arg1.fields[0];
    return new I$00601(0, "Try", f(a));
  }
}

function return$0027(f$$1) {
  return new T$00603(0, "IO", f$$1);
}

function run(a$$2, _arg1$$1) {
  const io = _arg1$$1.fields[0];
  const o = (0, _pith.O$$$return$0027)(_disposable.append, _disposable.empty);
  let b;

  try {
    try {
      b = (0, _pith.Pith$$$run)(o, io(new I$00601(0, "Try", a$$2)));
    } catch (err) {
      b = (0, _pith.Pith$$$run)(o, io(new I$00601(1, "Catch", a$$2, err)));
    }
  } catch (err$$1) {
    (0, _pith.O$00602$$get_Value)(o).Dispose();
    throw err$$1;
  }

  return [b, (0, _pith.O$00602$$get_Value)(o)];
}