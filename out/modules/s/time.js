"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.PointModule$$$return$0027 = PointModule$$$return$0027;
exports.PointModule$$$add = PointModule$$$add;
exports.DelayModule$$$return$0027 = DelayModule$$$return$0027;
exports.DelayModule$$$value = DelayModule$$$value;
exports.DelayModule$$$fromTo = DelayModule$$$fromTo;
exports.ClockModule$$$localClock = ClockModule$$$localClock;
exports.ClockModule$$$localTime = ClockModule$$$localTime;
exports.ClockModule$$$originTime = ClockModule$$$originTime;
exports.ClockModule$$$performanceClock = void 0;

var _Util = require("../fable-core.2.0.0-beta-004/Util");

function add(_arg2, _arg1) {
  const t = _arg2;
  const delay = _arg1;
  return function () {
    return t() + delay;
  };
}

function PointModule$$$return$0027(_arg1$$1) {
  const t$$1 = _arg1$$1;
  return t$$1();
}

function PointModule$$$add(_arg2$$1, _arg1$$2) {
  const t$$2 = _arg2$$1;
  const delay$$1 = _arg1$$2;
  return t$$2 + delay$$1;
}

function DelayModule$$$return$0027(i) {
  if (!(i >= 0)) {
    debugger;
  }

  return i;
}

function DelayModule$$$value(_arg1$$3) {
  const i$$1 = _arg1$$3;
  return i$$1 | 0;
}

function DelayModule$$$fromTo(_arg2$$2, _arg1$$4) {
  const from = _arg2$$2;
  const to$0027 = _arg1$$4;
  return (0, _Util.max)(_Util.comparePrimitives, 0, to$0027 - from);
}

const ClockModule$$$performanceClock = [function () {
  return Math.floor(window.performance.now());
}, function () {
  return 0;
}];
exports.ClockModule$$$performanceClock = ClockModule$$$performanceClock;

function ClockModule$$$localClock(_arg1$$5) {
  const fZero = new _Util.Lazy(function () {
    return _arg1$$5[0]();
  });
  return [function () {
    return _arg1$$5[0]() - fZero.Value;
  }, function () {
    return 0 - fZero.Value + _arg1$$5[1]();
  }];
}

function ClockModule$$$localTime(_arg1$$6) {
  return function () {
    return _arg1$$6[0]();
  };
}

function ClockModule$$$originTime(_arg1$$7) {
  return function () {
    return _arg1$$7[0]() + _arg1$$7[1]();
  };
}