"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IO$002EI$$$map = IO$002EI$$$map;
exports.IO$$$return$0027 = IO$$$return$0027;
exports.IO$$$run = IO$$$run;
exports.IO$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _pith = require("./pith");

const IO$00601 = (0, _Types.declare)(function IO$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.IO$00601 = IO$00601;

function IO$002EI$$$map(f, _arg1) {
  if (_arg1.tag === 1) {
    const exn = _arg1.fields[1];
    const a$$1 = _arg1.fields[0];
    return new IO$00601(1, "Catch", f(a$$1), exn);
  } else {
    const a = _arg1.fields[0];
    return new IO$00601(0, "Try", f(a));
  }
}

function IO$$$return$0027(f$$1, i) {
  return function (o) {
    return f$$1(o, i);
  };
}

function IO$$$run(o$$1, a$$2, io) {
  try {
    return (0, _pith.Pith$$$run)(o$$1, io(new IO$00601(0, "Try", a$$2)));
  } catch (err) {
    return (0, _pith.Pith$$$run)(o$$1, io(new IO$00601(1, "Catch", a$$2, err)));
  }
}