"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T$$$op_Addition$$Z3104FA00 = T$$$op_Addition$$Z3104FA00;
exports.T$$$op_Subtraction$$Z3104FA00 = T$$$op_Subtraction$$Z3104FA00;
exports.T$$$op_Addition$$Z136A6A47 = T$$$op_Addition$$Z136A6A47;
exports.T$$$op_Addition$$Z4A94DB67 = T$$$op_Addition$$Z4A94DB67;
exports.T$$$op_Subtraction$$Z136A6A47 = T$$$op_Subtraction$$Z136A6A47;
exports.T$$$op_Subtraction$$Z4A94DB67 = T$$$op_Subtraction$$Z4A94DB67;
exports.T$$$op_Addition$$Z521ACF7F = T$$$op_Addition$$Z521ACF7F;
exports.T$$$op_Addition$$Z3FF3231F = T$$$op_Addition$$Z3FF3231F;
exports.return$0027 = return$0027;
exports.add = add;
exports.change = change;
exports.max = max;
exports.DelayModule$$$return$0027 = DelayModule$$$return$0027;
exports.DelayModule$$$fromTo = DelayModule$$$fromTo;
exports.DelayModule$$$unbox = DelayModule$$$unbox;
exports.OffsetModule$$$return$0027 = OffsetModule$$$return$0027;
exports.OffsetModule$$$from = OffsetModule$$$from;
exports.DelayModule$$$zero = exports.zero = void 0;

var _Util = require("./fable-library.2.1.2/Util");

function T$$$op_Addition$$Z3104FA00(_arg1, _arg2) {
  const l = _arg1;
  const r = _arg2;
  return l + r;
}

function T$$$op_Subtraction$$Z3104FA00(_arg3, _arg4) {
  const l$$1 = _arg3;
  const r$$1 = _arg4;
  return l$$1 - r$$1;
}

function T$$$op_Addition$$Z136A6A47(_arg5, _arg6) {
  const l$$2 = _arg5;
  const r$$2 = _arg6;
  return l$$2 + r$$2;
}

function T$$$op_Addition$$Z4A94DB67(_arg7, _arg8) {
  const l$$3 = _arg7;
  const r$$3 = _arg8;
  return l$$3 + r$$3;
}

function T$$$op_Subtraction$$Z136A6A47(_arg9, _arg10) {
  const l$$4 = _arg9;
  const r$$4 = _arg10;
  return l$$4 - r$$4;
}

function T$$$op_Subtraction$$Z4A94DB67(_arg11, _arg12) {
  const l$$5 = _arg11;
  const r$$5 = _arg12;
  return l$$5 - r$$5;
}

function T$$$op_Addition$$Z521ACF7F(_arg13, _arg14) {
  const t = _arg13;
  const d = _arg14;
  return t + d;
}

function T$$$op_Addition$$Z3FF3231F(_arg15, _arg16) {
  const d$$1 = _arg15;
  const t$$1 = _arg16;
  return t$$1 + d$$1;
}

function return$0027(t$$2) {
  if (!(t$$2 >= 0)) {
    debugger;
  }

  if (!(t$$2 === Math.floor(t$$2))) {
    debugger;
  }

  return t$$2;
}

const zero = 0;
exports.zero = zero;

function add(_arg2$$1, _arg1$$1) {
  const delay = _arg2$$1;
  const t$$3 = _arg1$$1;
  return return$0027(t$$3 + delay);
}

function change(_arg2$$2, _arg1$$2) {
  const offset = _arg2$$2;
  const t$$5 = _arg1$$2;
  return return$0027(t$$5 + offset);
}

function max(_arg2$$3, _arg1$$3) {
  const l$$6 = _arg2$$3;
  const r$$6 = _arg1$$3;
  return return$0027((0, _Util.max)(_Util.comparePrimitives, l$$6, r$$6));
}

function DelayModule$$$return$0027(i) {
  if (!(i >= 0)) {
    debugger;
  }

  return i;
}

const DelayModule$$$zero = 0;
exports.DelayModule$$$zero = DelayModule$$$zero;

function DelayModule$$$fromTo(_arg2$$4, _arg1$$4) {
  const from = _arg2$$4;
  const to$0027 = _arg1$$4;
  return (0, _Util.max)(_Util.comparePrimitives, 0, to$0027 - from);
}

function DelayModule$$$unbox(_arg1$$5) {
  const v = _arg1$$5;
  return v | 0;
}

function OffsetModule$$$return$0027(a) {
  return a;
}

function OffsetModule$$$from(_arg2$$5, _arg1$$6) {
  const origin = _arg2$$5;
  const local = _arg1$$6;
  return local - origin;
}