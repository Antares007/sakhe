"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bytes$$$b0 = Bytes$$$b0;
exports.Bytes$$$b1 = Bytes$$$b1;
exports.Bytes$$$b2 = Bytes$$$b2;
exports.Bytes$$$b3 = Bytes$$$b3;
exports.Bytes$$$dWw1 = Bytes$$$dWw1;
exports.Bytes$$$dWw0 = Bytes$$$dWw0;
exports.Bytes$$$get = Bytes$$$get;
exports.Bytes$$$zeroCreate = Bytes$$$zeroCreate;
exports.Bytes$$$sub = Bytes$$$sub;
exports.Bytes$$$blit = Bytes$$$blit;
exports.Bytes$$$ofInt32Array = Bytes$$$ofInt32Array;
exports.Bytes$$$stringAsUtf8NullTerminated = Bytes$$$stringAsUtf8NullTerminated;
exports.Bytes$$$stringAsUnicodeNullTerminated = Bytes$$$stringAsUnicodeNullTerminated;
exports.ByteStream$$ReadByte = ByteStream$$ReadByte;
exports.ByteStream$$ReadUtf8String$$Z524259A4 = ByteStream$$ReadUtf8String$$Z524259A4;
exports.ByteStream$$$FromBytes$$1D3E19A2 = ByteStream$$$FromBytes$$1D3E19A2;
exports.ByteStream$$ReadBytes$$Z524259A4 = ByteStream$$ReadBytes$$Z524259A4;
exports.ByteStream$$get_Position = ByteStream$$get_Position;
exports.ByteBuffer$$Ensure$$Z524259A4 = ByteBuffer$$Ensure$$Z524259A4;
exports.ByteBuffer$$Close = ByteBuffer$$Close;
exports.ByteBuffer$$EmitIntAsByte$$Z524259A4 = ByteBuffer$$EmitIntAsByte$$Z524259A4;
exports.ByteBuffer$$EmitByte$$244D3E44 = ByteBuffer$$EmitByte$$244D3E44;
exports.ByteBuffer$$EmitIntsAsBytes$$13C0A23A = ByteBuffer$$EmitIntsAsBytes$$13C0A23A;
exports.ByteBuffer$$FixupInt32 = ByteBuffer$$FixupInt32;
exports.ByteBuffer$$EmitInt32$$Z524259A4 = ByteBuffer$$EmitInt32$$Z524259A4;
exports.ByteBuffer$$EmitBytes$$6C95DA22 = ByteBuffer$$EmitBytes$$6C95DA22;
exports.ByteBuffer$$EmitInt32AsUInt16$$Z524259A4 = ByteBuffer$$EmitInt32AsUInt16$$Z524259A4;
exports.ByteBuffer$$EmitBoolAsByte$$Z1FBCCD16 = ByteBuffer$$EmitBoolAsByte$$Z1FBCCD16;
exports.ByteBuffer$$EmitUInt16$$Z6EF82811 = ByteBuffer$$EmitUInt16$$Z6EF82811;
exports.ByteBuffer$$EmitInt64$$Z524259C1 = ByteBuffer$$EmitInt64$$Z524259C1;
exports.ByteBuffer$$get_Position = ByteBuffer$$get_Position;
exports.ByteBuffer$$$Create$$Z524259A4 = ByteBuffer$$$Create$$Z524259A4;
exports.ByteBuffer = exports.ByteStream = void 0;

var _Long = require("../fable-core.2.0.3/Long");

var _Array = require("../fable-core.2.0.3/Array");

var _Encoding = require("../fable-core.2.0.3/Encoding");

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

function Bytes$$$b0(n) {
  return n & 255;
}

function Bytes$$$b1(n$$1) {
  return n$$1 >> 8 & 255;
}

function Bytes$$$b2(n$$2) {
  return n$$2 >> 16 & 255;
}

function Bytes$$$b3(n$$3) {
  return n$$3 >> 24 & 255;
}

function Bytes$$$dWw1(n$$4) {
  return ~~(0, _Long.toIntNumber)((0, _Long.op_BitwiseAnd)((0, _Long.op_RightShift)(n$$4, 32), (0, _Long.fromBits)(4294967295, 0, false)));
}

function Bytes$$$dWw0(n$$5) {
  return ~~(0, _Long.toIntNumber)((0, _Long.op_BitwiseAnd)(n$$5, (0, _Long.fromBits)(4294967295, 0, false)));
}

function Bytes$$$get(b, n$$6) {
  return ~~b[n$$6];
}

function Bytes$$$zeroCreate(n$$7) {
  return new Uint8Array(n$$7);
}

function Bytes$$$sub(b$$1, s, l) {
  return (0, _Array.getSubArray)(b$$1, s, l);
}

function Bytes$$$blit(a, b$$2, c, d, e) {
  (0, _Array.copyTo)(a, b$$2, c, d, e);
}

function Bytes$$$ofInt32Array(arr) {
  return (0, _Array.initialize)(arr.length, function (i) {
    return arr[i] & 0xFF;
  }, Uint8Array);
}

function Bytes$$$stringAsUtf8NullTerminated(s$$1) {
  return (0, _Array.append)((0, _Encoding.get_UTF8)().getBytes(s$$1), Bytes$$$ofInt32Array(new Int32Array([0])), Uint8Array);
}

function Bytes$$$stringAsUnicodeNullTerminated(s$$2) {
  return (0, _Array.append)((0, _Encoding.get_Unicode)().getBytes(s$$2), Bytes$$$ofInt32Array(new Int32Array([0, 0])), Uint8Array);
}

const ByteStream = (0, _Types.declare)(function ByteStream(arg1, arg2, arg3) {
  this.bytes = arg1;
  this.pos = arg2 | 0;
  this.max = arg3 | 0;
}, _Types.Record);
exports.ByteStream = ByteStream;

function ByteStream$$ReadByte(b$$3) {
  if (b$$3.pos >= b$$3.max) {
    throw new Error("end of stream");
  }

  const res = b$$3.bytes[b$$3.pos];
  b$$3.pos = b$$3.pos + 1;
  return res;
}

function ByteStream$$ReadUtf8String$$Z524259A4(b$$4, n$$8) {
  const res$$1 = (0, _Encoding.get_UTF8)().getString(b$$4.bytes, b$$4.pos, n$$8);
  b$$4.pos = b$$4.pos + n$$8;
  return res$$1;
}

function ByteStream$$$FromBytes$$1D3E19A2(b$$5, n$$9, len) {
  if (n$$9 < 0 ? true : n$$9 + len > b$$5.length) {
    throw new Error("FromBytes");
  }

  return new ByteStream(b$$5, n$$9, n$$9 + len);
}

function ByteStream$$ReadBytes$$Z524259A4(b$$6, n$$10) {
  if (b$$6.pos + n$$10 > b$$6.max) {
    throw new Error("ReadBytes: end of stream");
  }

  const res$$2 = Bytes$$$sub(b$$6.bytes, b$$6.pos, n$$10);
  b$$6.pos = b$$6.pos + n$$10;
  return res$$2;
}

function ByteStream$$get_Position(b$$7) {
  return b$$7.pos;
}

const ByteBuffer = (0, _Types.declare)(function ByteBuffer(arg1, arg2) {
  this.bbArray = arg1;
  this.bbCurrent = arg2 | 0;
}, _Types.Record);
exports.ByteBuffer = ByteBuffer;

function ByteBuffer$$Ensure$$Z524259A4(buf, newSize) {
  const oldBufSize = buf.bbArray.length | 0;

  if (newSize > oldBufSize) {
    const old = buf.bbArray;
    buf.bbArray = Bytes$$$zeroCreate((0, _Util.max)(_Util.comparePrimitives, newSize, oldBufSize * 2));
    Bytes$$$blit(old, 0, buf.bbArray, 0, buf.bbCurrent);
  }
}

function ByteBuffer$$Close(buf$$1) {
  return Bytes$$$sub(buf$$1.bbArray, 0, buf$$1.bbCurrent);
}

function ByteBuffer$$EmitIntAsByte$$Z524259A4(buf$$2, i$$1) {
  const newSize$$1 = buf$$2.bbCurrent + 1 | 0;
  ByteBuffer$$Ensure$$Z524259A4(buf$$2, newSize$$1);
  buf$$2.bbArray[buf$$2.bbCurrent] = i$$1 & 0xFF;
  buf$$2.bbCurrent = newSize$$1;
}

function ByteBuffer$$EmitByte$$244D3E44(buf$$3, b$$8) {
  ByteBuffer$$EmitIntAsByte$$Z524259A4(buf$$3, ~~b$$8);
}

function ByteBuffer$$EmitIntsAsBytes$$13C0A23A(buf$$4, arr$$1) {
  const n$$11 = arr$$1.length | 0;
  const newSize$$2 = buf$$4.bbCurrent + n$$11 | 0;
  ByteBuffer$$Ensure$$Z524259A4(buf$$4, newSize$$2);
  const bbarr = buf$$4.bbArray;
  const bbbase = buf$$4.bbCurrent | 0;

  for (let i$$2 = 0; i$$2 <= n$$11 - 1; i$$2++) {
    bbarr[bbbase + i$$2] = arr$$1[i$$2] & 0xFF;
  }

  buf$$4.bbCurrent = newSize$$2;
}

function ByteBuffer$$FixupInt32(bb, pos, n$$12) {
  bb.bbArray[pos] = Bytes$$$b0(n$$12) & 0xFF;
  bb.bbArray[pos + 1] = Bytes$$$b1(n$$12) & 0xFF;
  bb.bbArray[pos + 2] = Bytes$$$b2(n$$12) & 0xFF;
  bb.bbArray[pos + 3] = Bytes$$$b3(n$$12) & 0xFF;
}

function ByteBuffer$$EmitInt32$$Z524259A4(buf$$5, n$$13) {
  const newSize$$3 = buf$$5.bbCurrent + 4 | 0;
  ByteBuffer$$Ensure$$Z524259A4(buf$$5, newSize$$3);
  ByteBuffer$$FixupInt32(buf$$5, buf$$5.bbCurrent, n$$13);
  buf$$5.bbCurrent = newSize$$3;
}

function ByteBuffer$$EmitBytes$$6C95DA22(buf$$6, i$$3) {
  const n$$14 = i$$3.length | 0;
  const newSize$$4 = buf$$6.bbCurrent + n$$14 | 0;
  ByteBuffer$$Ensure$$Z524259A4(buf$$6, newSize$$4);
  Bytes$$$blit(i$$3, 0, buf$$6.bbArray, buf$$6.bbCurrent, n$$14);
  buf$$6.bbCurrent = newSize$$4;
}

function ByteBuffer$$EmitInt32AsUInt16$$Z524259A4(buf$$7, n$$15) {
  const newSize$$5 = buf$$7.bbCurrent + 2 | 0;
  ByteBuffer$$Ensure$$Z524259A4(buf$$7, newSize$$5);
  buf$$7.bbArray[buf$$7.bbCurrent] = Bytes$$$b0(n$$15) & 0xFF;
  buf$$7.bbArray[buf$$7.bbCurrent + 1] = Bytes$$$b1(n$$15) & 0xFF;
  buf$$7.bbCurrent = newSize$$5;
}

function ByteBuffer$$EmitBoolAsByte$$Z1FBCCD16(buf$$8, b$$9) {
  ByteBuffer$$EmitIntAsByte$$Z524259A4(buf$$8, b$$9 ? 1 : 0);
}

function ByteBuffer$$EmitUInt16$$Z6EF82811(buf$$9, x) {
  ByteBuffer$$EmitInt32AsUInt16$$Z524259A4(buf$$9, ~~x);
}

function ByteBuffer$$EmitInt64$$Z524259C1(buf$$10, x$$1) {
  ByteBuffer$$EmitInt32$$Z524259A4(buf$$10, Bytes$$$dWw0(x$$1));
  ByteBuffer$$EmitInt32$$Z524259A4(buf$$10, Bytes$$$dWw1(x$$1));
}

function ByteBuffer$$get_Position(buf$$11) {
  return buf$$11.bbCurrent;
}

function ByteBuffer$$$Create$$Z524259A4(sz) {
  return new ByteBuffer(Bytes$$$zeroCreate(sz), 0);
}