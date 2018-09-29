"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.add = add;
exports.change = change;
exports.DelayModule$$$return$0027 = DelayModule$$$return$0027;
exports.DelayModule$$$fromTo = DelayModule$$$fromTo;
exports.DelayModule$$$unbox = DelayModule$$$unbox;
exports.OffsetModule$$$return$0027 = OffsetModule$$$return$0027;
exports.OffsetModule$$$from = OffsetModule$$$from;
exports.DelayModule$$$zero = exports.zero = void 0;

var _Util = require("./fable-core.2.0.0/Util");

function return$0027(t) {
  if (!(t >= 0)) {
    debugger;
  }

  if (!(t === Math.floor(t))) {
    debugger;
  }

  return t;
}

const zero = 0;
exports.zero = zero;

function add(_arg2, _arg1) {
  const delay = _arg2;
  const t$$1 = _arg1;
  return return$0027(t$$1 + delay);
}

function change(_arg2$$1, _arg1$$1) {
  const offset = _arg2$$1;
  const t$$3 = _arg1$$1;
  return return$0027(t$$3 + offset);
}

function DelayModule$$$return$0027(i) {
  if (!(i >= 0)) {
    debugger;
  }

  return i;
}

const DelayModule$$$zero = 0;
exports.DelayModule$$$zero = DelayModule$$$zero;

function DelayModule$$$fromTo(_arg2$$2, _arg1$$2) {
  const from = _arg2$$2;
  const to$0027 = _arg1$$2;
  return (0, _Util.max)(_Util.comparePrimitives, 0, to$0027 - from);
}

function DelayModule$$$unbox(_arg1$$3) {
  const v = _arg1$$3;
  return v | 0;
}

function OffsetModule$$$return$0027(a) {
  return a;
}

function OffsetModule$$$from(_arg2$$3, _arg1$$4) {
  const origin = _arg2$$3;
  const local = _arg1$$4;
  return local - origin;
}