"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pos$$$$002Ector$$Z524259A4 = pos$$$$002Ector$$Z524259A4;
exports.pos$$$$002Ector$$Z37302880 = pos$$$$002Ector$$Z37302880;
exports.pos$$get_Line = pos$$get_Line;
exports.pos$$get_Column = pos$$get_Column;
exports.pos$$get_Encoding = pos$$get_Encoding;
exports.pos$$$get_EncodingSize = pos$$$get_EncodingSize;
exports.pos$$$Decode$$Z524259A4 = pos$$$Decode$$Z524259A4;
exports.FileIndexTable$$$$002Ector = FileIndexTable$$$$002Ector;
exports.FileIndexTable$$FileToIndex$$Z721C83C5 = FileIndexTable$$FileToIndex$$Z721C83C5;
exports.FileIndexTable$$IndexToFile$$Z524259A4 = FileIndexTable$$IndexToFile$$Z524259A4;
exports.fileIndexOfFile = fileIndexOfFile;
exports.fileOfFileIndex = fileOfFileIndex;
exports.mkPos = mkPos;
exports.range$$$$002Ector$$Z524259C1 = range$$$$002Ector$$Z524259C1;
exports.range$$$get_Zero = range$$$get_Zero;
exports.range$$$$002Ector$$Z5DE7C2A4 = range$$$$002Ector$$Z5DE7C2A4;
exports.range$$$$002Ector$$78EBC1BC = range$$$$002Ector$$78EBC1BC;
exports.range$$get_StartLine = range$$get_StartLine;
exports.range$$get_StartColumn = range$$get_StartColumn;
exports.range$$get_EndLine = range$$get_EndLine;
exports.range$$get_EndColumn = range$$get_EndColumn;
exports.range$$get_IsSynthetic = range$$get_IsSynthetic;
exports.range$$get_Start = range$$get_Start;
exports.range$$get_End = range$$get_End;
exports.range$$get_FileIndex = range$$get_FileIndex;
exports.range$$get_StartRange = range$$get_StartRange;
exports.range$$get_EndRange = range$$get_EndRange;
exports.range$$get_FileName = range$$get_FileName;
exports.range$$MakeSynthetic = range$$MakeSynthetic;
exports.range$$ToShortString = range$$ToShortString;
exports.range$$get_Code = range$$get_Code;
exports.mkRange = mkRange;
exports.mkFileIndexRange = mkFileIndexRange;
exports.outputPos = outputPos;
exports.boutputPos = boutputPos;
exports.stringPos = stringPos;
exports.outputRange = outputRange;
exports.boutputRange = boutputRange;
exports.posGt = posGt;
exports.posEq = posEq;
exports.posGeq = posGeq;
exports.posLt = posLt;
exports.unionRanges = unionRanges;
exports.rangeContainsRange = rangeContainsRange;
exports.rangeContainsPos = rangeContainsPos;
exports.rangeBeforePos = rangeBeforePos;
exports.rangeN = rangeN;
exports.trimRangeToLine = trimRangeToLine;
exports.stringOfPos = stringOfPos;
exports.stringOfRange = stringOfRange;
exports.Line$$$fromZ = Line$$$fromZ;
exports.Line$$$toZ = Line$$$toZ;
exports.Pos$$$fromZ = Pos$$$fromZ;
exports.Pos$$$toZ = Pos$$$toZ;
exports.Range$$$toZ = Range$$$toZ;
exports.Range$$$toFileZ = Range$$$toFileZ;
exports.rangeCmdArgs = exports.rangeStartup = exports.range0 = exports.pos0 = exports.rangeOrder = exports.posOrder = exports.range = exports.fileIndexTable = exports.maxFileIndex = exports.FileIndexTable = exports.pos = exports.lineColumnMask = exports.posColumnMask = exports.posBitCount = void 0;

var _lib = require("./lib");

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _String = require("../fable-core.2.0.3/String");

var _Long = require("../fable-core.2.0.3/Long");

var _adapters = require("../fcs-fable/adapters");

var _illib = require("../absil/illib");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

const posBitCount = 16 + 9;
exports.posBitCount = posBitCount;
const posColumnMask = (0, _lib.Bits$$$mask32)(0, 9);
exports.posColumnMask = posColumnMask;
const lineColumnMask = (0, _lib.Bits$$$mask32)(9, 16);
exports.lineColumnMask = lineColumnMask;
const pos = (0, _Types.declare)(function pos(code) {
  const $this$$1 = this;
  $this$$1.code = code;
}, _Types.Record);
exports.pos = pos;

function pos$$$$002Ector$$Z524259A4(code) {
  return this != null ? pos.call(this, code) : new pos(code);
}

function pos$$$$002Ector$$Z37302880(l, c) {
  const l$$1 = (0, _Util.max)(_Util.comparePrimitives, 0, l) | 0;
  const c$$1 = (0, _Util.max)(_Util.comparePrimitives, 0, c) | 0;
  const p = c$$1 & posColumnMask | l$$1 << 9 & lineColumnMask | 0;
  return pos$$$$002Ector$$Z524259A4.call(this, p);
}

function pos$$get_Line(p$$1) {
  return ~~(p$$1.code >>> 0 >>> 9);
}

function pos$$get_Column(p$$2) {
  return p$$2.code & posColumnMask;
}

function pos$$get_Encoding(r) {
  return r.code;
}

function pos$$$get_EncodingSize() {
  return posBitCount;
}

function pos$$$Decode$$Z524259A4(code$$1) {
  return pos$$$$002Ector$$Z524259A4(code$$1);
}

pos.prototype.Equals = function (obj) {
  const p$$3 = this;

  if (obj instanceof pos) {
    const p2 = obj;
    return p$$3.code === pos$$get_Encoding(p2);
  } else {
    return false;
  }
};

pos.prototype.GetHashCode = function () {
  const p$$4 = this;
  return (0, _Util.structuralHash)(p$$4.code) | 0;
};

pos.prototype.toString = function () {
  const p$$5 = this;
  return (0, _String.toText)((0, _String.printf)("(%d,%d)"))(pos$$get_Line(p$$5))(pos$$get_Column(p$$5));
};

const FileIndexTable = (0, _Types.declare)(function FileIndexTable() {
  const $this$$6 = this;
  $this$$6.indexToFileTable = [];
  $this$$6.fileToIndexTable = new Map([]);
});
exports.FileIndexTable = FileIndexTable;

function FileIndexTable$$$$002Ector() {
  return this != null ? FileIndexTable.call(this) : new FileIndexTable();
}

function FileIndexTable$$FileToIndex$$Z721C83C5(t, f) {
  const patternInput = (0, _Util.tryGetValue)(t.fileToIndexTable, f, 0);

  if (patternInput[0]) {
    return patternInput[1] | 0;
  } else {
    const n = (0, _Util.count)(t.indexToFileTable) | 0;
    t.indexToFileTable.push(f);
    t.fileToIndexTable.set(f, n);
    return n | 0;
  }
}

function FileIndexTable$$IndexToFile$$Z524259A4(t$$1, n$$1) {
  if (n$$1 < 0) {
    (0, _String.toFail)((0, _String.printf)("fileOfFileIndex: negative argument: n = %d\n"))(n$$1);
  }

  if (n$$1 >= (0, _Util.count)(t$$1.indexToFileTable)) {
    (0, _String.toFail)((0, _String.printf)("fileOfFileIndex: invalid argument: n = %d\n"))(n$$1);
  }

  return t$$1.indexToFileTable[n$$1];
}

const maxFileIndex = (0, _lib.Bits$$$pown32)(14);
exports.maxFileIndex = maxFileIndex;
const fileIndexTable = FileIndexTable$$$$002Ector();
exports.fileIndexTable = fileIndexTable;

function fileIndexOfFile(f$$1) {
  return FileIndexTable$$FileToIndex$$Z721C83C5(fileIndexTable, f$$1) % maxFileIndex;
}

function fileOfFileIndex(n$$2) {
  return FileIndexTable$$IndexToFile$$Z524259A4(fileIndexTable, n$$2);
}

function mkPos(l$$2, c$$2) {
  return pos$$$$002Ector$$Z37302880(l$$2, c$$2);
}

const range = (0, _Types.declare)(function range(code$$2) {
  const $this$$7 = this;
  $this$$7.code = code$$2;
}, _Types.Record);
exports.range = range;

function range$$$$002Ector$$Z524259C1(code$$2) {
  return this != null ? range.call(this, code$$2) : new range(code$$2);
}

function range$$$get_Zero() {
  return range$$$$002Ector$$Z524259C1((0, _Long.fromBits)(0, 0, false));
}

function range$$$$002Ector$$Z5DE7C2A4(fidx, bl, bc, el, ec) {
  return range$$$$002Ector$$Z524259C1.call(this, (0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.fromInteger)(fidx, false, 2), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(bl, false, 2), 14)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(bc, false, 2), 30)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(el - bl, false, 2), 39)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(ec, false, 2), 54)));
}

function range$$$$002Ector$$78EBC1BC(fidx$$1, b, e) {
  return range$$$$002Ector$$Z5DE7C2A4.call(this, fidx$$1, pos$$get_Line(b), pos$$get_Column(b), pos$$get_Line(e), pos$$get_Column(e));
}

function range$$get_StartLine(r$$1) {
  return ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_BitwiseAnd)(r$$1.code, (0, _Long.fromBits)(1073725440, 0, false)), 14));
}

function range$$get_StartColumn(r$$2) {
  return ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_BitwiseAnd)(r$$2.code, (0, _Long.fromBits)(3221225472, 127, false)), 30));
}

function range$$get_EndLine(r$$3) {
  return ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_BitwiseAnd)(r$$3.code, (0, _Long.fromBits)(0, 4194176, false)), 39)) + range$$get_StartLine(r$$3);
}

function range$$get_EndColumn(r$$4) {
  return ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_BitwiseAnd)(r$$4.code, (0, _Long.fromBits)(0, 2143289344, false)), 54));
}

function range$$get_IsSynthetic(r$$5) {
  return ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_BitwiseAnd)(r$$5.code, (0, _Long.fromBits)(0, 2147483648, false)), 63)) !== 0;
}

function range$$get_Start(r$$6) {
  return pos$$$$002Ector$$Z37302880(range$$get_StartLine(r$$6), range$$get_StartColumn(r$$6));
}

function range$$get_End(r$$7) {
  return pos$$$$002Ector$$Z37302880(range$$get_EndLine(r$$7), range$$get_EndColumn(r$$7));
}

function range$$get_FileIndex(r$$8) {
  return ~~(0, _Long.toIntNumber)((0, _Long.op_BitwiseAnd)(r$$8.code, (0, _Long.fromBits)(16383, 0, false)));
}

function range$$get_StartRange(m) {
  return range$$$$002Ector$$78EBC1BC(range$$get_FileIndex(m), range$$get_Start(m), range$$get_Start(m));
}

function range$$get_EndRange(m$$1) {
  return range$$$$002Ector$$78EBC1BC(range$$get_FileIndex(m$$1), range$$get_End(m$$1), range$$get_End(m$$1));
}

function range$$get_FileName(r$$9) {
  return fileOfFileIndex(range$$get_FileIndex(r$$9));
}

function range$$MakeSynthetic(r$$10) {
  return range$$$$002Ector$$Z524259C1((0, _Long.op_BitwiseOr)(r$$10.code, (0, _Long.fromBits)(0, 2147483648, false)));
}

range.prototype.toString = function () {
  const r$$11 = this;
  return (0, _String.toText)((0, _String.printf)("%s (%d,%d--%d,%d) IsSynthetic=%b"))(range$$get_FileName(r$$11))(range$$get_StartLine(r$$11))(range$$get_StartColumn(r$$11))(range$$get_EndLine(r$$11))(range$$get_EndColumn(r$$11))(range$$get_IsSynthetic(r$$11));
};

function range$$ToShortString(r$$12) {
  return (0, _String.toText)((0, _String.printf)("(%d,%d--%d,%d)"))(range$$get_StartLine(r$$12))(range$$get_StartColumn(r$$12))(range$$get_EndLine(r$$12))(range$$get_EndColumn(r$$12));
}

function range$$get_Code(r$$13) {
  return r$$13.code;
}

range.prototype.Equals = function (obj$$1) {
  const r$$14 = this;

  if (obj$$1 instanceof range) {
    const r2 = obj$$1;
    return (0, _Long.equals)(r$$14.code, range$$get_Code(r2));
  } else {
    return false;
  }
};

range.prototype.GetHashCode = function () {
  const r$$15 = this;
  return (0, _Util.structuralHash)(r$$15.code) | 0;
};

function mkRange(f$$2, b$$1, e$$1) {
  let normalizedFilePath;

  if ((0, _adapters.System$002EIO$002EPath$$$IsPathRooted)(f$$2)) {
    try {
      normalizedFilePath = (0, _adapters.System$002EIO$002EPath$$$GetFullPath)(f$$2);
    } catch (matchValue) {
      normalizedFilePath = f$$2;
    }
  } else {
    normalizedFilePath = f$$2;
  }

  return range$$$$002Ector$$78EBC1BC(fileIndexOfFile(normalizedFilePath), b$$1, e$$1);
}

function mkFileIndexRange(fi, b$$2, e$$2) {
  return range$$$$002Ector$$78EBC1BC(fi, b$$2, e$$2);
}

const posOrder = (0, _illib.Order$$$orderOn)(function (p$$6) {
  return [pos$$get_Line(p$$6), pos$$get_Column(p$$6)];
}, (0, _lib.Pair$$$order)(_lib.Int32$$$order, _lib.Int32$$$order));
exports.posOrder = posOrder;
const rangeOrder = (0, _illib.Order$$$orderOn)(function (r$$16) {
  return [range$$get_FileName(r$$16), range$$get_Start(r$$16)];
}, (0, _lib.Pair$$$order)(_illib.String$$$order, posOrder));
exports.rangeOrder = rangeOrder;

function outputPos(os, m$$2) {
  (0, _String.toConsole)((0, _String.printf)("(%d,%d)"))(pos$$get_Line(m$$2))(pos$$get_Column(m$$2));
}

function boutputPos(os$$1, m$$3) {
  (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os$$1, (0, _String.printf)("(%d,%d)"))(pos$$get_Line(m$$3))(pos$$get_Column(m$$3));
}

function stringPos(m$$4) {
  return (0, _String.toText)((0, _String.printf)("(%d,%d)"))(pos$$get_Line(m$$4))(pos$$get_Column(m$$4));
}

function outputRange(os$$2, m$$5) {
  (0, _String.toConsole)((0, _String.printf)("%s%s-%s"))(range$$get_FileName(m$$5))(stringPos(range$$get_Start(m$$5)))(stringPos(range$$get_End(m$$5)));
}

function boutputRange(os$$3, m$$6) {
  (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os$$3, (0, _String.printf)("%s%s-%s"))(range$$get_FileName(m$$6))(stringPos(range$$get_Start(m$$6)))(stringPos(range$$get_End(m$$6)));
}

function posGt(p1, p2$$1) {
  if (pos$$get_Line(p1) > pos$$get_Line(p2$$1)) {
    return true;
  } else if (pos$$get_Line(p1) === pos$$get_Line(p2$$1)) {
    return pos$$get_Column(p1) > pos$$get_Column(p2$$1);
  } else {
    return false;
  }
}

function posEq(p1$$1, p2$$2) {
  if (pos$$get_Line(p1$$1) === pos$$get_Line(p2$$2)) {
    return pos$$get_Column(p1$$1) === pos$$get_Column(p2$$2);
  } else {
    return false;
  }
}

function posGeq(p1$$2, p2$$3) {
  if (posEq(p1$$2, p2$$3)) {
    return true;
  } else {
    return posGt(p1$$2, p2$$3);
  }
}

function posLt(p1$$3, p2$$4) {
  return posGt(p2$$4, p1$$3);
}

function unionRanges(m1, m2) {
  if (range$$get_FileIndex(m1) !== range$$get_FileIndex(m2)) {
    return m2;
  } else {
    const b$$3 = (range$$get_StartLine(m1) > range$$get_StartLine(m2) ? true : range$$get_StartLine(m1) === range$$get_StartLine(m2) ? range$$get_StartColumn(m1) > range$$get_StartColumn(m2) : false) ? m2 : m1;
    const e$$3 = (range$$get_EndLine(m1) > range$$get_EndLine(m2) ? true : range$$get_EndLine(m1) === range$$get_EndLine(m2) ? range$$get_EndColumn(m1) > range$$get_EndColumn(m2) : false) ? m1 : m2;
    return range$$$$002Ector$$Z5DE7C2A4(range$$get_FileIndex(m1), range$$get_StartLine(b$$3), range$$get_StartColumn(b$$3), range$$get_EndLine(e$$3), range$$get_EndColumn(e$$3));
  }
}

function rangeContainsRange(m1$$1, m2$$1) {
  if (range$$get_FileIndex(m1$$1) === range$$get_FileIndex(m2$$1) ? posGeq(range$$get_Start(m2$$1), range$$get_Start(m1$$1)) : false) {
    return posGeq(range$$get_End(m1$$1), range$$get_End(m2$$1));
  } else {
    return false;
  }
}

function rangeContainsPos(m1$$2, p$$7) {
  if (posGeq(p$$7, range$$get_Start(m1$$2))) {
    return posGeq(range$$get_End(m1$$2), p$$7);
  } else {
    return false;
  }
}

function rangeBeforePos(m1$$3, p$$8) {
  return posGeq(p$$8, range$$get_End(m1$$3));
}

function rangeN(filename, line) {
  return mkRange(filename, mkPos(line, 0), mkPos(line, 0));
}

const pos0 = mkPos(1, 0);
exports.pos0 = pos0;
const range0 = rangeN("unknown", 1);
exports.range0 = range0;
const rangeStartup = rangeN("startup", 1);
exports.rangeStartup = rangeStartup;
const rangeCmdArgs = rangeN("commandLineArgs", 0);
exports.rangeCmdArgs = rangeCmdArgs;

function trimRangeToLine(r$$17) {
  const patternInput$$1 = [range$$get_StartLine(r$$17), range$$get_StartColumn(r$$17)];
  const patternInput$$2 = [range$$get_EndLine(r$$17), range$$get_EndColumn(r$$17)];

  if (patternInput$$2[0] <= patternInput$$1[0]) {
    return r$$17;
  } else {
    const patternInput$$3 = [patternInput$$1[0] + 1, 0];
    return range$$$$002Ector$$Z5DE7C2A4(range$$get_FileIndex(r$$17), patternInput$$1[0], patternInput$$1[1], patternInput$$3[0], patternInput$$3[1]);
  }
}

function stringOfPos(pos$$1) {
  return (0, _String.toText)((0, _String.printf)("(%d,%d)"))(pos$$get_Line(pos$$1))(pos$$get_Column(pos$$1));
}

function stringOfRange(r$$18) {
  return (0, _String.toText)((0, _String.printf)("%s%s-%s"))(range$$get_FileName(r$$18))(stringOfPos(range$$get_Start(r$$18)))(stringOfPos(range$$get_End(r$$18)));
}

function Line$$$fromZ(line$$1) {
  return line$$1 + 1;
}

function Line$$$toZ(line$$2) {
  return line$$2 - 1;
}

function Pos$$$fromZ(line$$3, idx) {
  return mkPos(Line$$$fromZ(line$$3), idx);
}

function Pos$$$toZ(p$$9) {
  return [Line$$$toZ(pos$$get_Line(p$$9)), pos$$get_Column(p$$9)];
}

function Range$$$toZ(m$$7) {
  return [Pos$$$toZ(range$$get_Start(m$$7)), Pos$$$toZ(range$$get_End(m$$7))];
}

function Range$$$toFileZ(m$$8) {
  return [range$$get_FileName(m$$8), Range$$$toZ(m$$8)];
}