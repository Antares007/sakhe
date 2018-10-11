"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Position$$get_Column = Position$$get_Column;
exports.Position$$$$002Ector$$Z5DE7C2A4 = Position$$$$002Ector$$Z5DE7C2A4;
exports.Position$$get_NextLine = Position$$get_NextLine;
exports.Position$$EndOfToken$$Z524259A4 = Position$$EndOfToken$$Z524259A4;
exports.Position$$ShiftColumnBy$$Z524259A4 = Position$$ShiftColumnBy$$Z524259A4;
exports.Position$$get_ColumnMinusOne = Position$$get_ColumnMinusOne;
exports.Position$$ApplyLineDirective$$Z37302880 = Position$$ApplyLineDirective$$Z37302880;
exports.Position$$$get_Empty = Position$$$get_Empty;
exports.Position$$$FirstLine$$Z524259A4 = Position$$$FirstLine$$Z524259A4;
exports.LexBuffer$00601$$$$002Ector$$16BBD254 = LexBuffer$00601$$$$002Ector$$16BBD254;
exports.LexBuffer$00601$$EndOfScan = LexBuffer$00601$$EndOfScan;
exports.LexBuffer$00601$$get_StartPos = LexBuffer$00601$$get_StartPos;
exports.LexBuffer$00601$$set_StartPos$$Z5C04B2F = LexBuffer$00601$$set_StartPos$$Z5C04B2F;
exports.LexBuffer$00601$$get_EndPos = LexBuffer$00601$$get_EndPos;
exports.LexBuffer$00601$$set_EndPos$$Z5C04B2F = LexBuffer$00601$$set_EndPos$$Z5C04B2F;
exports.LexBuffer$00601$$get_Lexeme = LexBuffer$00601$$get_Lexeme;
exports.LexBuffer$00601$$LexemeChar$$Z524259A4 = LexBuffer$00601$$LexemeChar$$Z524259A4;
exports.LexBuffer$00601$$get_BufferLocalStore = LexBuffer$00601$$get_BufferLocalStore;
exports.LexBuffer$00601$$get_LexemeLength = LexBuffer$00601$$get_LexemeLength;
exports.LexBuffer$00601$$set_LexemeLength$$Z524259A4 = LexBuffer$00601$$set_LexemeLength$$Z524259A4;
exports.LexBuffer$00601$$get_Buffer = LexBuffer$00601$$get_Buffer;
exports.LexBuffer$00601$$set_Buffer$$B867673 = LexBuffer$00601$$set_Buffer$$B867673;
exports.LexBuffer$00601$$get_BufferMaxScanLength = LexBuffer$00601$$get_BufferMaxScanLength;
exports.LexBuffer$00601$$set_BufferMaxScanLength$$Z524259A4 = LexBuffer$00601$$set_BufferMaxScanLength$$Z524259A4;
exports.LexBuffer$00601$$get_BufferScanLength = LexBuffer$00601$$get_BufferScanLength;
exports.LexBuffer$00601$$set_BufferScanLength$$Z524259A4 = LexBuffer$00601$$set_BufferScanLength$$Z524259A4;
exports.LexBuffer$00601$$get_BufferScanStart = LexBuffer$00601$$get_BufferScanStart;
exports.LexBuffer$00601$$set_BufferScanStart$$Z524259A4 = LexBuffer$00601$$set_BufferScanStart$$Z524259A4;
exports.LexBuffer$00601$$get_BufferAcceptAction = LexBuffer$00601$$get_BufferAcceptAction;
exports.LexBuffer$00601$$set_BufferAcceptAction$$Z524259A4 = LexBuffer$00601$$set_BufferAcceptAction$$Z524259A4;
exports.LexBuffer$00601$$RefillBuffer = LexBuffer$00601$$RefillBuffer;
exports.LexBuffer$00601$$$LexemeString$$4198D4C4 = LexBuffer$00601$$$LexemeString$$4198D4C4;
exports.LexBuffer$00601$$get_IsPastEndOfStream = LexBuffer$00601$$get_IsPastEndOfStream;
exports.LexBuffer$00601$$set_IsPastEndOfStream$$Z1FBCCD16 = LexBuffer$00601$$set_IsPastEndOfStream$$Z1FBCCD16;
exports.LexBuffer$00601$$DiscardInput = LexBuffer$00601$$DiscardInput;
exports.LexBuffer$00601$$get_BufferScanPos = LexBuffer$00601$$get_BufferScanPos;
exports.LexBuffer$00601$$EnsureBufferSize$$Z524259A4 = LexBuffer$00601$$EnsureBufferSize$$Z524259A4;
exports.LexBuffer$00601$$$FromFunction$$60D283D9 = LexBuffer$00601$$$FromFunction$$60D283D9;
exports.LexBuffer$00601$$$FromArrayNoCopy$$B867673 = LexBuffer$00601$$$FromArrayNoCopy$$B867673;
exports.LexBuffer$00601$$$FromArray$$B867673 = LexBuffer$00601$$$FromArray$$B867673;
exports.LexBuffer$00601$$$FromString$$Z721C83C5 = LexBuffer$00601$$$FromString$$Z721C83C5;
exports.GenericImplFragments$$$startInterpret = GenericImplFragments$$$startInterpret;
exports.GenericImplFragments$$$afterRefill = GenericImplFragments$$$afterRefill;
exports.GenericImplFragments$$$onAccept = GenericImplFragments$$$onAccept;
exports.UnicodeTables$$$$002Ector$$9AA1546 = UnicodeTables$$$$002Ector$$9AA1546;
exports.UnicodeTables$$Interpret$$24EAA518 = UnicodeTables$$Interpret$$24EAA518;
exports.UnicodeTables$$$Create$$9AA1546 = UnicodeTables$$$Create$$9AA1546;
exports.UnicodeTables = exports.LexBuffer$00601 = exports.Position = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Array = require("../fable-core.2.0.3/Array");

var _Char = require("../fable-core.2.0.3/Char");

const Position = (0, _Types.declare)(function Position(arg1, arg2, arg3, arg4, arg5) {
  this.FileIndex = arg1 | 0;
  this.Line = arg2 | 0;
  this.OriginalLine = arg3 | 0;
  this.AbsoluteOffset = arg4 | 0;
  this.StartOfLineAbsoluteOffset = arg5 | 0;
}, _Types.Record);
exports.Position = Position;

function Position$$get_Column(x) {
  return x.AbsoluteOffset - x.StartOfLineAbsoluteOffset;
}

function Position$$$$002Ector$$Z5DE7C2A4(fileIndex, line, originalLine, startOfLineAbsoluteOffset, absoluteOffset) {
  return new Position(fileIndex, line, originalLine, absoluteOffset, startOfLineAbsoluteOffset);
}

function Position$$get_NextLine(x$$1) {
  return Position$$$$002Ector$$Z5DE7C2A4(x$$1.FileIndex, x$$1.Line + 1, x$$1.OriginalLine + 1, x$$1.AbsoluteOffset, x$$1.AbsoluteOffset);
}

function Position$$EndOfToken$$Z524259A4(x$$2, n) {
  return Position$$$$002Ector$$Z5DE7C2A4(x$$2.FileIndex, x$$2.Line, x$$2.OriginalLine, x$$2.StartOfLineAbsoluteOffset, x$$2.AbsoluteOffset + n);
}

function Position$$ShiftColumnBy$$Z524259A4(x$$3, by) {
  return Position$$$$002Ector$$Z5DE7C2A4(x$$3.FileIndex, x$$3.Line, x$$3.OriginalLine, x$$3.StartOfLineAbsoluteOffset, x$$3.AbsoluteOffset + by);
}

function Position$$get_ColumnMinusOne(x$$4) {
  return Position$$$$002Ector$$Z5DE7C2A4(x$$4.FileIndex, x$$4.Line, x$$4.OriginalLine, x$$4.StartOfLineAbsoluteOffset, x$$4.StartOfLineAbsoluteOffset - 1);
}

function Position$$ApplyLineDirective$$Z37302880(x$$5, fileIdx, line$$1) {
  return Position$$$$002Ector$$Z5DE7C2A4(fileIdx, line$$1, x$$5.OriginalLine, x$$5.AbsoluteOffset, x$$5.AbsoluteOffset);
}

function Position$$$get_Empty() {
  return null;
}

function Position$$$FirstLine$$Z524259A4(fileIdx$$1) {
  return Position$$$$002Ector$$Z5DE7C2A4(fileIdx$$1, 1, 0, 0, 0);
}

const LexBuffer$00601 = (0, _Types.declare)(function LexBuffer$00601(filler) {
  const $this$$1 = this;
  $this$$1.filler = filler;
  $this$$1.context = new Map([]);
  $this$$1.buffer = [];
  $this$$1.bufferMaxScanLength = 0;
  $this$$1.bufferScanStart = 0;
  $this$$1.bufferScanLength = 0;
  $this$$1.lexemeLength = 0;
  $this$$1.bufferAcceptAction = 0;
  $this$$1.eof = false;
  $this$$1.startPos = Position$$$get_Empty();
  $this$$1.endPos = Position$$$get_Empty();
});
exports.LexBuffer$00601 = LexBuffer$00601;

function LexBuffer$00601$$$$002Ector$$16BBD254(filler) {
  return this != null ? LexBuffer$00601.call(this, filler) : new LexBuffer$00601(filler);
}

function LexBuffer$00601$$EndOfScan(lexbuf) {
  if (lexbuf.bufferAcceptAction < 0) {
    throw new Error("unrecognized input");
  }

  LexBuffer$00601$$set_StartPos$$Z5C04B2F(lexbuf, lexbuf.endPos);
  LexBuffer$00601$$set_EndPos$$Z5C04B2F(lexbuf, Position$$EndOfToken$$Z524259A4(lexbuf.endPos, LexBuffer$00601$$get_LexemeLength(lexbuf)));
  return lexbuf.bufferAcceptAction | 0;
}

function LexBuffer$00601$$get_StartPos(lexbuf$$1) {
  return lexbuf$$1.startPos;
}

function LexBuffer$00601$$set_StartPos$$Z5C04B2F(lexbuf$$2, b) {
  lexbuf$$2.startPos = b;
}

function LexBuffer$00601$$get_EndPos(lexbuf$$3) {
  return lexbuf$$3.endPos;
}

function LexBuffer$00601$$set_EndPos$$Z5C04B2F(lexbuf$$4, b$$1) {
  lexbuf$$4.endPos = b$$1;
}

function LexBuffer$00601$$get_Lexeme(lexbuf$$5) {
  return (0, _Array.getSubArray)(lexbuf$$5.buffer, lexbuf$$5.bufferScanStart, lexbuf$$5.lexemeLength);
}

function LexBuffer$00601$$LexemeChar$$Z524259A4(lexbuf$$6, n$$1) {
  return lexbuf$$6.buffer[n$$1 + lexbuf$$6.bufferScanStart];
}

function LexBuffer$00601$$get_BufferLocalStore(lexbuf$$7) {
  return lexbuf$$7.context;
}

function LexBuffer$00601$$get_LexemeLength(lexbuf$$8) {
  return lexbuf$$8.lexemeLength;
}

function LexBuffer$00601$$set_LexemeLength$$Z524259A4(lexbuf$$9, v) {
  lexbuf$$9.lexemeLength = v;
}

function LexBuffer$00601$$get_Buffer(lexbuf$$10) {
  return lexbuf$$10.buffer;
}

function LexBuffer$00601$$set_Buffer$$B867673(lexbuf$$11, v$$1) {
  lexbuf$$11.buffer = v$$1;
}

function LexBuffer$00601$$get_BufferMaxScanLength(lexbuf$$12) {
  return lexbuf$$12.bufferMaxScanLength;
}

function LexBuffer$00601$$set_BufferMaxScanLength$$Z524259A4(lexbuf$$13, v$$2) {
  lexbuf$$13.bufferMaxScanLength = v$$2;
}

function LexBuffer$00601$$get_BufferScanLength(lexbuf$$14) {
  return lexbuf$$14.bufferScanLength;
}

function LexBuffer$00601$$set_BufferScanLength$$Z524259A4(lexbuf$$15, v$$3) {
  lexbuf$$15.bufferScanLength = v$$3;
}

function LexBuffer$00601$$get_BufferScanStart(lexbuf$$16) {
  return lexbuf$$16.bufferScanStart;
}

function LexBuffer$00601$$set_BufferScanStart$$Z524259A4(lexbuf$$17, v$$4) {
  lexbuf$$17.bufferScanStart = v$$4;
}

function LexBuffer$00601$$get_BufferAcceptAction(lexbuf$$18) {
  return lexbuf$$18.bufferAcceptAction;
}

function LexBuffer$00601$$set_BufferAcceptAction$$Z524259A4(lexbuf$$19, v$$5) {
  lexbuf$$19.bufferAcceptAction = v$$5;
}

function LexBuffer$00601$$RefillBuffer(lexbuf$$20) {
  lexbuf$$20.filler(lexbuf$$20);
}

function LexBuffer$00601$$$LexemeString$$4198D4C4(lexbuf$$21) {
  const chars = (0, _Array.initialize)(LexBuffer$00601$$get_LexemeLength(lexbuf$$21), function ($arg$$2) {
    return String.fromCharCode(LexBuffer$00601$$LexemeChar$$Z524259A4(lexbuf$$21, $arg$$2));
  }, Array);
  return chars.join("");
}

function LexBuffer$00601$$get_IsPastEndOfStream(lexbuf$$22) {
  return lexbuf$$22.eof;
}

function LexBuffer$00601$$set_IsPastEndOfStream$$Z1FBCCD16(lexbuf$$23, b$$2) {
  lexbuf$$23.eof = b$$2;
}

function LexBuffer$00601$$DiscardInput(lexbuf$$24) {
  LexBuffer$00601$$discardInput(lexbuf$$24);
}

function LexBuffer$00601$$get_BufferScanPos(x$$6) {
  return x$$6.bufferScanStart + x$$6.bufferScanLength;
}

function LexBuffer$00601$$EnsureBufferSize$$Z524259A4(lexbuf$$25, n$$2) {
  if (LexBuffer$00601$$get_BufferScanPos(lexbuf$$25) + n$$2 >= lexbuf$$25.buffer.length) {
    const repl = (0, _Array.fill)(new Array(LexBuffer$00601$$get_BufferScanPos(lexbuf$$25) + n$$2), 0, LexBuffer$00601$$get_BufferScanPos(lexbuf$$25) + n$$2, null);
    (0, _Array.copyTo)(lexbuf$$25.buffer, lexbuf$$25.bufferScanStart, repl, lexbuf$$25.bufferScanStart, lexbuf$$25.bufferScanLength);
    lexbuf$$25.buffer = repl;
  }
}

function LexBuffer$00601$$$FromFunction$$60D283D9(f) {
  const extension = (0, _Array.fill)(new Array(4096), 0, 4096, null);

  const filler$$1 = function filler$$1(lexBuffer) {
    const n$$3 = f([extension, 0, extension.length]) | 0;
    LexBuffer$00601$$EnsureBufferSize$$Z524259A4(lexBuffer, n$$3);
    (0, _Array.copyTo)(extension, 0, LexBuffer$00601$$get_Buffer(lexBuffer), LexBuffer$00601$$get_BufferScanPos(lexBuffer), n$$3);
    LexBuffer$00601$$set_BufferMaxScanLength$$Z524259A4(lexBuffer, LexBuffer$00601$$get_BufferScanLength(lexBuffer) + n$$3);
  };

  return LexBuffer$00601$$$$002Ector$$16BBD254(filler$$1);
}

function LexBuffer$00601$$$FromArrayNoCopy$$B867673(buffer) {
  const lexBuffer$$1 = LexBuffer$00601$$$$002Ector$$16BBD254(function (_arg1) {});
  LexBuffer$00601$$set_Buffer$$B867673(lexBuffer$$1, buffer);
  LexBuffer$00601$$set_BufferMaxScanLength$$Z524259A4(lexBuffer$$1, buffer.length);
  return lexBuffer$$1;
}

function LexBuffer$00601$$$FromArray$$B867673(s) {
  const buffer$$1 = (0, _Array.copy)(s, Array);
  return LexBuffer$00601$$$FromArrayNoCopy$$B867673(buffer$$1);
}

function LexBuffer$00601$$$FromString$$Z721C83C5(s$$1) {
  const arr = (0, _Array.initialize)(s$$1.length, function (i) {
    return s$$1[i].charCodeAt(0);
  }, Uint16Array);
  return LexBuffer$00601$$$FromArrayNoCopy$$B867673(arr);
}

function LexBuffer$00601$$discardInput(this$) {
  const keep = (0, _Array.getSubArray)(this$.buffer, this$.bufferScanStart, this$.bufferScanLength);
  const nkeep = keep.length | 0;
  (0, _Array.copyTo)(keep, 0, this$.buffer, 0, nkeep);
  this$.bufferScanStart = 0;
  this$.bufferMaxScanLength = nkeep;
}

function GenericImplFragments$$$startInterpret(lexBuffer$$2) {
  LexBuffer$00601$$set_BufferScanStart$$Z524259A4(lexBuffer$$2, LexBuffer$00601$$get_BufferScanStart(lexBuffer$$2) + LexBuffer$00601$$get_LexemeLength(lexBuffer$$2));
  LexBuffer$00601$$set_BufferMaxScanLength$$Z524259A4(lexBuffer$$2, LexBuffer$00601$$get_BufferMaxScanLength(lexBuffer$$2) - LexBuffer$00601$$get_LexemeLength(lexBuffer$$2));
  LexBuffer$00601$$set_BufferScanLength$$Z524259A4(lexBuffer$$2, 0);
  LexBuffer$00601$$set_LexemeLength$$Z524259A4(lexBuffer$$2, 0);
  LexBuffer$00601$$set_BufferAcceptAction$$Z524259A4(lexBuffer$$2, -1);
}

function GenericImplFragments$$$afterRefill(trans, sentinel, lexBuffer$$3, scanUntilSentinel$$1, endOfScan, state, eofPos) {
  if (LexBuffer$00601$$get_BufferScanLength(lexBuffer$$3) === LexBuffer$00601$$get_BufferMaxScanLength(lexBuffer$$3)) {
    const snew = ~~trans[state][eofPos] | 0;

    if (snew === sentinel) {
      return endOfScan();
    } else {
      if (LexBuffer$00601$$get_IsPastEndOfStream(lexBuffer$$3)) {
        throw new Error("End of file on lexing stream");
      }

      LexBuffer$00601$$set_IsPastEndOfStream$$Z1FBCCD16(lexBuffer$$3, true);
      return scanUntilSentinel$$1(lexBuffer$$3, snew);
    }
  } else {
    return scanUntilSentinel$$1(lexBuffer$$3, state);
  }
}

function GenericImplFragments$$$onAccept(lexBuffer$$4, a) {
  LexBuffer$00601$$set_LexemeLength$$Z524259A4(lexBuffer$$4, LexBuffer$00601$$get_BufferScanLength(lexBuffer$$4));
  LexBuffer$00601$$set_BufferAcceptAction$$Z524259A4(lexBuffer$$4, a);
}

const UnicodeTables = (0, _Types.declare)(function UnicodeTables(trans$$1, accept) {
  const $this$$3 = this;
  $this$$3.trans = trans$$1;
  $this$$3.accept = accept;
  $this$$3.sentinel = 255 * 256 + 255;
  const numUnicodeCategories = 30;
  $this$$3.numLowUnicodeChars = 128;
  $this$$3.numSpecificUnicodeChars = ~~(($this$$3.trans[0].length - 1 - $this$$3.numLowUnicodeChars - numUnicodeCategories) / 2);
  $this$$3.eofPos = $this$$3.numLowUnicodeChars + 2 * $this$$3.numSpecificUnicodeChars + numUnicodeCategories;
});
exports.UnicodeTables = UnicodeTables;

function UnicodeTables$$$$002Ector$$9AA1546(trans$$1, accept) {
  return this != null ? UnicodeTables.call(this, trans$$1, accept) : new UnicodeTables(trans$$1, accept);
}

function UnicodeTables$$Interpret$$24EAA518(tables, initialState, lexBuffer$$5) {
  GenericImplFragments$$$startInterpret(lexBuffer$$5);
  return UnicodeTables$$scanUntilSentinel(tables, lexBuffer$$5, initialState) | 0;
}

function UnicodeTables$$$Create$$9AA1546(trans$$2, accept$$1) {
  return UnicodeTables$$$$002Ector$$9AA1546(trans$$2, accept$$1);
}

function UnicodeTables$$lookupUnicodeCharacters(this$$$1, state$$1, inp) {
  const inpAsInt = ~~inp | 0;

  if (inpAsInt < this$$$1.numLowUnicodeChars) {
    return ~~this$$$1.trans[state$$1][inpAsInt] | 0;
  } else {
    const baseForSpecificUnicodeChars = this$$$1.numLowUnicodeChars | 0;

    const loop = function loop(i$$1) {
      loop: while (true) {
        if (i$$1 >= this$$$1.numSpecificUnicodeChars) {
          const baseForUnicodeCategories = this$$$1.numLowUnicodeChars + this$$$1.numSpecificUnicodeChars * 2 | 0;
          const unicodeCategory = (0, _Char.getUnicodeCategory)(String.fromCharCode(inp)) | 0;
          return ~~this$$$1.trans[state$$1][baseForUnicodeCategories + unicodeCategory] | 0;
        } else {
          const c = this$$$1.trans[state$$1][baseForSpecificUnicodeChars + i$$1 * 2];

          if (c === inp) {
            return ~~this$$$1.trans[state$$1][baseForSpecificUnicodeChars + i$$1 * 2 + 1] | 0;
          } else {
            i$$1 = i$$1 + 1;
            continue loop;
          }
        }
      }
    };

    return loop(0) | 0;
  }
}

function UnicodeTables$$scanUntilSentinel(this$$$2, lexBuffer$$6, state$$2) {
  UnicodeTables$$scanUntilSentinel: while (true) {
    const a$$1 = ~~this$$$2.accept[state$$2] | 0;

    if (a$$1 !== this$$$2.sentinel) {
      GenericImplFragments$$$onAccept(lexBuffer$$6, a$$1);
    }

    if (LexBuffer$00601$$get_BufferScanLength(lexBuffer$$6) === LexBuffer$00601$$get_BufferMaxScanLength(lexBuffer$$6)) {
      LexBuffer$00601$$DiscardInput(lexBuffer$$6);
      LexBuffer$00601$$RefillBuffer(lexBuffer$$6);
      return GenericImplFragments$$$afterRefill(this$$$2.trans, this$$$2.sentinel, lexBuffer$$6, function (lexBuffer$$7, state$$3) {
        return UnicodeTables$$scanUntilSentinel(this$$$2, lexBuffer$$7, state$$3);
      }, function () {
        return LexBuffer$00601$$EndOfScan(lexBuffer$$6);
      }, state$$2, this$$$2.eofPos) | 0;
    } else {
      const inp$$1 = LexBuffer$00601$$get_Buffer(lexBuffer$$6)[LexBuffer$00601$$get_BufferScanPos(lexBuffer$$6)];
      const snew$$1 = UnicodeTables$$lookupUnicodeCharacters(this$$$2, state$$2, inp$$1) | 0;

      if (snew$$1 === this$$$2.sentinel) {
        return LexBuffer$00601$$EndOfScan(lexBuffer$$6) | 0;
      } else {
        LexBuffer$00601$$set_BufferScanLength$$Z524259A4(lexBuffer$$6, LexBuffer$00601$$get_BufferScanLength(lexBuffer$$6) + 1);
        this$$$2 = this$$$2;
        lexBuffer$$6 = lexBuffer$$6;
        state$$2 = snew$$1;
        continue UnicodeTables$$scanUntilSentinel;
      }
    }
  }
}