"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T$$$op_Subtraction$$Z3104FA00 = T$$$op_Subtraction$$Z3104FA00;
exports.T$$$op_Addition$$Z136A6A47 = T$$$op_Addition$$Z136A6A47;
exports.T$$$op_Addition$$Z4A94DB67 = T$$$op_Addition$$Z4A94DB67;
exports.T$$$op_Addition$$Z521ACF7F = T$$$op_Addition$$Z521ACF7F;
exports.T$$$op_Addition$$Z3FF3231F = T$$$op_Addition$$Z3FF3231F;
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

function T$$$op_Subtraction$$Z3104FA00(_arg1, _arg2) {
  const l = _arg1;
  const r = _arg2;
  return l - r;
}

function T$$$op_Addition$$Z136A6A47(_arg3, _arg4) {
  const t = _arg3;
  const o = _arg4;
  return t + o;
}

function T$$$op_Addition$$Z4A94DB67(_arg5, _arg6) {
  const o$$1 = _arg5;
  const t$$1 = _arg6;
  return t$$1 + o$$1;
}

function T$$$op_Addition$$Z521ACF7F(_arg7, _arg8) {
  const t$$2 = _arg7;
  const d = _arg8;
  return t$$2 + d;
}

function T$$$op_Addition$$Z3FF3231F(_arg9, _arg10) {
  const d$$1 = _arg9;
  const t$$3 = _arg10;
  return t$$3 + d$$1;
}

function return$0027(t$$4) {
  if (!(t$$4 >= 0)) {
    debugger;
  }

  if (!(t$$4 === Math.floor(t$$4))) {
    debugger;
  }

  return t$$4;
}

const zero = 0;
exports.zero = zero;

function add(_arg2$$1, _arg1$$1) {
  const delay = _arg2$$1;
  const t$$5 = _arg1$$1;
  return return$0027(t$$5 + delay);
}

function change(_arg2$$2, _arg1$$2) {
  const offset = _arg2$$2;
  const t$$7 = _arg1$$2;
  return return$0027(t$$7 + offset);
}

function DelayModule$$$return$0027(i) {
  if (!(i >= 0)) {
    debugger;
  }

  return i;
}

const DelayModule$$$zero = 0;
exports.DelayModule$$$zero = DelayModule$$$zero;

function DelayModule$$$fromTo(_arg2$$3, _arg1$$3) {
  const from = _arg2$$3;
  const to$0027 = _arg1$$3;
  return (0, _Util.max)(_Util.comparePrimitives, 0, to$0027 - from);
}

function DelayModule$$$unbox(_arg1$$4) {
  const v = _arg1$$4;
  return v | 0;
}

function OffsetModule$$$return$0027(a) {
  return a;
}

function OffsetModule$$$from(_arg2$$4, _arg1$$5) {
  const origin = _arg2$$4;
  const local = _arg1$$5;
  return local - origin;
}