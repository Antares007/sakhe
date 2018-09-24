"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.O$$$run = O$$$run;
exports.O$$$delay = O$$$delay;
exports.O$$$periodic = O$$$periodic;
exports.see = exports.O$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _io = require("./io");

var _time = require("./time");

const O$00601 = (0, _Types.declare)(function O$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O$00601 = O$00601;

function return$0027(f) {
  return (0, _io.return$0027)(f);
}

function O$$$run(f$$2) {
  return new O$00601(0, "Run", return$0027(f$$2));
}

function O$$$delay(delay, f$$4) {
  return new O$00601(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay), return$0027(f$$4));
}

function O$$$periodic(delay$$1, f$$5) {
  return new O$00601(2, "Periodic", (0, _time.DelayModule$$$return$0027)(delay$$1), return$0027(f$$5));
}

const see = return$0027(function (i, o) {
  return 1;
});
exports.see = see;