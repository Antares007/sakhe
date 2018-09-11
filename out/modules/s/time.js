"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.add = add;
exports.DelayModule$$$return$0027 = DelayModule$$$return$0027;
exports.DelayModule$$$value = DelayModule$$$value;
exports.DelayModule$$$fromTo = DelayModule$$$fromTo;
exports.ClockModule$$$localTime = ClockModule$$$localTime;
exports.ClockModule$$$performanceClock = void 0;

var _Util = require("../fable-core.2.0.0-beta-004/Util");

function return$0027(f) {
  if (!(f >= 0)) {
    debugger;
  }

  return Math.floor(f);
}

function add(_arg2, _arg1) {
  const now = _arg2;
  const delay = _arg1;
  return now + delay;
}

function DelayModule$$$return$0027(i) {
  if (!(i >= 0)) {
    debugger;
  }

  return i;
}

function DelayModule$$$value(_arg1$$1) {
  const i$$1 = _arg1$$1;
  return i$$1 | 0;
}

function DelayModule$$$fromTo(_arg2$$1, _arg1$$2) {
  const from = _arg2$$1;
  const to$0027 = _arg1$$2;
  return (0, _Util.max)(_Util.comparePrimitives, 0, to$0027 - from);
}

const ClockModule$$$performanceClock = [function () {
  return Math.floor(window.performance.now());
}, 0];
exports.ClockModule$$$performanceClock = ClockModule$$$performanceClock;

function ClockModule$$$localTime(_arg1$$3) {
  const t = _arg1$$3[0]();

  return t + _arg1$$3[1];
}