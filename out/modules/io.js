"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.O$$$return$0027 = O$$$return$0027;
exports.return$0027 = return$0027;
exports.run = run;
exports.I$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _disposable = require("./s/disposable");

var _pith = require("./pith");

const I$00601 = (0, _Types.declare)(function I$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.I$00601 = I$00601;

function O$$$return$0027() {
  return (0, _pith.O$$$return$0027)(_disposable.append, _disposable.empty);
}

function return$0027(f, i) {
  return function (o) {
    return f(o, i);
  };
}

function run(o$$1, a, io) {
  try {
    return (0, _pith.Pith$$$run)(o$$1, io(new I$00601(0, "Try", a)));
  } catch (err) {
    return (0, _pith.Pith$$$run)(o$$1, io(new I$00601(1, "Catch", a, err)));
  }
}