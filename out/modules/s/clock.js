"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.localClock = localClock;
exports.localTime = localTime;
exports.offset = offset;

var _Util = require("../fable-core.2.0.0-beta-004/Util");

var _time = require("./time");

function return$0027(now, offset$$1) {
  return [now, new _Util.Lazy(function () {
    return offset$$1;
  })];
}

function localClock(_arg1) {
  let offsetFromBase = null;
  const zero = (0, _time.return$0027)(0);

  const localNow = function localNow() {
    const baseTime = _arg1[0]();

    if (offsetFromBase != null) {
      const offsetFromBase$$1 = offsetFromBase;
      return (0, _time.change)(offsetFromBase$$1, baseTime);
    } else {
      offsetFromBase = (0, _time.OffsetModule$$$from)(baseTime, zero);
      return zero;
    }
  };

  const localOffset = new _Util.Lazy(function () {
    const baseTime$$1 = _arg1[0]();

    const baseOffset = _arg1[1].Value;

    if (offsetFromBase == null) {
      offsetFromBase = (0, _time.OffsetModule$$$from)(baseTime$$1, zero);
    }

    return (0, _time.OffsetModule$$$from)((0, _time.change)(baseOffset, baseTime$$1), zero);
  });
  return [localNow, localOffset];
}

function localTime(_arg1$$1) {
  return _arg1$$1[0]();
}

function offset(_arg1$$2) {
  return _arg1$$2[1];
}