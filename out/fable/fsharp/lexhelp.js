"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightSyntaxStatus$$$$002Ector$$8EAA2C0 = LightSyntaxStatus$$$$002Ector$$8EAA2C0;
exports.LightSyntaxStatus$$get_Status = LightSyntaxStatus$$get_Status;
exports.LightSyntaxStatus$$set_Status$$Z1FBCCD16 = LightSyntaxStatus$$set_Status$$Z1FBCCD16;
exports.LightSyntaxStatus$$get_ExplicitlySet = LightSyntaxStatus$$get_ExplicitlySet;
exports.LightSyntaxStatus$$get_WarnOnMultipleTokens = LightSyntaxStatus$$get_WarnOnMultipleTokens;
exports.LexResourceManager$$$$002Ector = LexResourceManager$$$$002Ector;
exports.LexResourceManager$$InternIdentifierToken$$Z721C83C5 = LexResourceManager$$InternIdentifierToken$$Z721C83C5;
exports.mkLexargs = mkLexargs;
exports.reusingLexbufForParsing = reusingLexbufForParsing;
exports.resetLexbufPos = resetLexbufPos;
exports.usingLexbufForParsing = usingLexbufForParsing;
exports.defaultStringFinisher = defaultStringFinisher;
exports.callStringFinisher = callStringFinisher;
exports.addUnicodeString = addUnicodeString;
exports.addIntChar = addIntChar;
exports.addUnicodeChar = addUnicodeChar;
exports.addByteChar = addByteChar;
exports.stringBufferAsString = stringBufferAsString;
exports.stringBufferAsBytes = stringBufferAsBytes;
exports.stringBufferIsBytes = stringBufferIsBytes;
exports.newline = newline;
exports.trigraph = trigraph;
exports.digit = digit;
exports.hexdigit = hexdigit;
exports.unicodeGraphShort = unicodeGraphShort;
exports.hexGraphShort = hexGraphShort;
exports.unicodeGraphLong = unicodeGraphLong;
exports.escape = escape;
exports.Keywords$$$KeywordToken = Keywords$$$KeywordToken;
exports.Keywords$$$IdentifierToken = Keywords$$$IdentifierToken;
exports.Keywords$$$KeywordOrIdentifierToken = Keywords$$$KeywordOrIdentifierToken;
exports.Keywords$$$QuoteIdentifierIfNeeded = Keywords$$$QuoteIdentifierIfNeeded;
exports.Keywords$$$NormalizeIdentifierBackticks = Keywords$$$NormalizeIdentifierBackticks;
exports.Keywords$$$keywordsWithDescription = exports.Keywords$$$keywordTable = exports.Keywords$$$keywordNames = exports.IndentationProblem = exports.ReservedKeyword = exports.LongUnicodeLexResult = exports.lexargs = exports.LexResourceManager = exports.LightSyntaxStatus = exports.stdinMockFilename = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _pars = require("../codegen/pars");

var _ErrorLogger = require("./ErrorLogger");

var _ast = require("./ast");

var _range = require("./range");

var _primLexing = require("../utils/prim-lexing");

var _Encoding = require("../fable-core.2.0.3/Encoding");

var _bytes = require("../absil/bytes");

var _Array = require("../fable-core.2.0.3/Array");

var _List = require("../fable-core.2.0.3/List");

var _Seq = require("../fable-core.2.0.3/Seq");

var _PrettyNaming = require("./PrettyNaming");

var _FSComp = require("../codegen/FSComp");

var _String = require("../fable-core.2.0.3/String");

var _adapters = require("../fcs-fable/adapters");

var _illib = require("../absil/illib");

const stdinMockFilename = "stdin";
exports.stdinMockFilename = stdinMockFilename;
const LightSyntaxStatus = (0, _Types.declare)(function LightSyntaxStatus(initial, warn) {
  const $this$$1 = this;
  $this$$1.initial = initial;
  $this$$1.warn = warn;
  $this$$1.status = null;
});
exports.LightSyntaxStatus = LightSyntaxStatus;

function LightSyntaxStatus$$$$002Ector$$8EAA2C0(initial, warn) {
  return this != null ? LightSyntaxStatus.call(this, initial, warn) : new LightSyntaxStatus(initial, warn);
}

function LightSyntaxStatus$$get_Status(x) {
  const matchValue = x.status;

  if (matchValue != null) {
    const v = matchValue;
    return v;
  } else {
    return x.initial;
  }
}

function LightSyntaxStatus$$set_Status$$Z1FBCCD16(x$$1, v$$1) {
  x$$1.status = v$$1;
}

function LightSyntaxStatus$$get_ExplicitlySet(x$$2) {
  return x$$2.status != null;
}

function LightSyntaxStatus$$get_WarnOnMultipleTokens(x$$3) {
  return x$$3.warn;
}

const LexResourceManager = (0, _Types.declare)(function LexResourceManager() {
  const $this$$2 = this;
  $this$$2.strings = new Map([]);
});
exports.LexResourceManager = LexResourceManager;

function LexResourceManager$$$$002Ector() {
  return this != null ? LexResourceManager.call(this) : new LexResourceManager();
}

function LexResourceManager$$InternIdentifierToken$$Z721C83C5(x$$4, s) {
  const patternInput = (0, _Util.tryGetValue)(x$$4.strings, s, null);

  if (patternInput[0]) {
    return patternInput[1];
  } else {
    const res$$1 = new _pars.token(190, "IDENT", s);
    x$$4.strings.set(s, res$$1);
    return res$$1;
  }
}

const lexargs = (0, _Types.declare)(function lexargs(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.defines = arg1;
  this.ifdefStack = arg2;
  this.resourceManager = arg3;
  this.lightSyntaxStatus = arg4;
  this.errorLogger = arg5;
  this.applyLineDirectives = arg6;
}, _Types.Record);
exports.lexargs = lexargs;
const LongUnicodeLexResult = (0, _Types.declare)(function LongUnicodeLexResult(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.LongUnicodeLexResult = LongUnicodeLexResult;

function mkLexargs(_filename, defines, lightSyntaxStatus, resourceManager, ifdefStack, errorLogger) {
  return new lexargs(defines, ifdefStack, resourceManager, lightSyntaxStatus, errorLogger, true);
}

function reusingLexbufForParsing(lexbuf, f) {
  const unwindBuildPhase = (0, _ErrorLogger.PushThreadBuildPhaseUntilUnwind)(new _ErrorLogger.BuildPhase(3, "Parse"));

  try {
    (0, _ast.LexbufLocalXmlDocStore$$$ClearXmlDoc)(lexbuf);

    try {
      return f();
    } catch (e) {
      throw new _ErrorLogger.WrappedError(e, (() => {
        try {
          return (0, _ast.LexBuffer$00601$002Eget_LexemeRange)(lexbuf);
        } catch (matchValue$$1) {
          return _range.range0;
        }
      })());
    }
  } finally {
    if ((0, _Util.isDisposable)(unwindBuildPhase)) {
      unwindBuildPhase.Dispose();
    }
  }
}

function resetLexbufPos(filename, lexbuf$$1) {
  (0, _primLexing.LexBuffer$00601$$set_EndPos$$Z5C04B2F)(lexbuf$$1, (0, _primLexing.Position$$$FirstLine$$Z524259A4)((0, _range.fileIndexOfFile)(filename)));
}

function usingLexbufForParsing(lexbuf$$2, filename$$1, f$$1) {
  resetLexbufPos(filename$$1, lexbuf$$2);
  return reusingLexbufForParsing(lexbuf$$2, function () {
    return f$$1(lexbuf$$2);
  });
}

function defaultStringFinisher(_endm, _b, s$$1) {
  return new _pars.token(192, "STRING", (0, _Encoding.get_Unicode)().getString(s$$1, 0, s$$1.length));
}

function callStringFinisher(fin, buf, endm, b) {
  return fin(endm, b, (0, _bytes.ByteBuffer$$Close)(buf));
}

function addUnicodeString(buf$$1, x$$5) {
  (0, _bytes.ByteBuffer$$EmitBytes$$6C95DA22)(buf$$1, (0, _Encoding.get_Unicode)().getBytes(x$$5));
}

function addIntChar(buf$$2, c) {
  (0, _bytes.ByteBuffer$$EmitIntAsByte$$Z524259A4)(buf$$2, c % 256);
  (0, _bytes.ByteBuffer$$EmitIntAsByte$$Z524259A4)(buf$$2, ~~(c / 256));
}

function addUnicodeChar(buf$$3, c$$1) {
  addIntChar(buf$$3, c$$1);
}

function addByteChar(buf$$4, c$$2) {
  addIntChar(buf$$4, c$$2.charCodeAt(0) % 256);
}

function stringBufferAsString(buf$$5) {
  if (buf$$5.length % 2 !== 0) {
    throw new Error("Expected even number of bytes");
  }

  const chars = (0, _Array.fill)(new Array(~~(buf$$5.length / 2)), 0, ~~(buf$$5.length / 2), null);

  for (let i = 0; i <= ~~(buf$$5.length / 2) - 1; i++) {
    const hi = buf$$5[i * 2 + 1];
    const lo = buf$$5[i * 2];
    const c$$3 = String.fromCharCode(~~hi * 256 + ~~lo);
    chars[i] = c$$3;
  }

  return chars.join("");
}

function stringBufferAsBytes(buf$$6) {
  const bytes = (0, _bytes.ByteBuffer$$Close)(buf$$6);
  return (0, _Array.initialize)(~~(bytes.length / 2), function (i$$1) {
    return bytes[i$$1 * 2];
  }, Uint8Array);
}

function stringBufferIsBytes(buf$$7) {
  const bytes$$1 = (0, _bytes.ByteBuffer$$Close)(buf$$7);
  let ok$$1 = true;

  for (let i$$2 = 0; i$$2 <= ~~(bytes$$1.length / 2) - 1; i$$2++) {
    if (bytes$$1[i$$2 * 2 + 1] !== 0) {
      ok$$1 = false;
    }
  }

  return ok$$1;
}

function newline(lexbuf$$3) {
  var copyOfStruct;
  (0, _primLexing.LexBuffer$00601$$set_EndPos$$Z5C04B2F)(lexbuf$$3, (copyOfStruct = (0, _primLexing.LexBuffer$00601$$get_EndPos)(lexbuf$$3), (0, _primLexing.Position$$get_NextLine)(copyOfStruct)));
}

function trigraph(c1, c2, c3) {
  const digit$$1 = function digit$$1(c$$4) {
    return c$$4.charCodeAt(0) - "0".charCodeAt(0);
  };

  return String.fromCharCode(digit$$1(c1) * 100 + digit$$1(c2) * 10 + digit$$1(c3));
}

function digit(d) {
  if (d >= "0" ? d <= "9" : false) {
    return d.charCodeAt(0) - "0".charCodeAt(0) | 0;
  } else {
    throw new Error("digit");
  }
}

function hexdigit(d$$1) {
  if (d$$1 >= "0" ? d$$1 <= "9" : false) {
    return digit(d$$1) | 0;
  } else if (d$$1 >= "a" ? d$$1 <= "f" : false) {
    return d$$1.charCodeAt(0) - "a".charCodeAt(0) + 10 | 0;
  } else if (d$$1 >= "A" ? d$$1 <= "F" : false) {
    return d$$1.charCodeAt(0) - "A".charCodeAt(0) + 10 | 0;
  } else {
    throw new Error("hexdigit");
  }
}

function unicodeGraphShort(s$$2) {
  if (s$$2.length !== 4) {
    throw new Error("unicodegraph");
  }

  return hexdigit(s$$2[0]) * 4096 + hexdigit(s$$2[1]) * 256 + hexdigit(s$$2[2]) * 16 + hexdigit(s$$2[3]) & 0xFFFF;
}

function hexGraphShort(s$$3) {
  if (s$$3.length !== 2) {
    throw new Error("hexgraph");
  }

  return hexdigit(s$$3[0]) * 16 + hexdigit(s$$3[1]) & 0xFFFF;
}

function unicodeGraphLong(s$$4) {
  if (s$$4.length !== 8) {
    throw new Error("unicodeGraphLong");
  }

  const high = hexdigit(s$$4[0]) * 4096 + hexdigit(s$$4[1]) * 256 + hexdigit(s$$4[2]) * 16 + hexdigit(s$$4[3]) | 0;
  const low = hexdigit(s$$4[4]) * 4096 + hexdigit(s$$4[5]) * 256 + hexdigit(s$$4[6]) * 16 + hexdigit(s$$4[7]) | 0;

  if (high === 0) {
    return new LongUnicodeLexResult(1, "SingleChar", low & 0xFFFF);
  } else if (high > 16) {
    return new LongUnicodeLexResult(2, "Invalid");
  } else {
    const codepoint = high * 65536 + low | 0;
    const hiSurr = 55296 + ~~((codepoint - 65536) / 1024) & 0xFFFF;
    const loSurr = 56320 + (codepoint - 65536) % 1024 & 0xFFFF;
    return new LongUnicodeLexResult(0, "SurrogatePair", hiSurr, loSurr);
  }
}

function escape(c$$5) {
  switch (c$$5) {
    case "'":
      {
        return "'";
      }

    case "\\":
      {
        return "\\";
      }

    case "a":
      {
        return String.fromCharCode(7);
      }

    case "b":
      {
        return "\b";
      }

    case "f":
      {
        return String.fromCharCode(12);
      }

    case "n":
      {
        return "\n";
      }

    case "r":
      {
        return "\r";
      }

    case "t":
      {
        return "\t";
      }

    case "v":
      {
        return String.fromCharCode(11);
      }

    default:
      {
        const c$$6 = c$$5;
        return c$$6;
      }
  }
}

const ReservedKeyword = (0, _Types.declare)(function ReservedKeyword(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.ReservedKeyword = ReservedKeyword;
const IndentationProblem = (0, _Types.declare)(function IndentationProblem(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.IndentationProblem = IndentationProblem;
const Keywords$002EcompatibilityMode = (0, _Types.declare)(function Keywords$002EcompatibilityMode(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
const Keywords$$$keywordList = (0, _List.append)((0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "abstract", new _pars.token(49, "ABSTRACT")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "and", new _pars.token(131, "AND")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "as", new _pars.token(132, "AS")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "assert", new _pars.token(133, "ASSERT")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "asr", new _pars.token(189, "INFIX_STAR_STAR_OP", "asr")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "base", new _pars.token(153, "BASE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "begin", new _pars.token(136, "BEGIN")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "class", new _pars.token(48, "CLASS")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "const", new _pars.token(113, "CONST")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "default", new _pars.token(51, "DEFAULT")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "delegate", new _pars.token(151, "DELEGATE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "do", new _pars.token(137, "DO")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "done", new _pars.token(138, "DONE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "downcast", new _pars.token(146, "DOWNCAST")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "downto", new _pars.token(139, "DOWNTO")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "elif", new _pars.token(141, "ELIF")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "else", new _pars.token(140, "ELSE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "end", new _pars.token(142, "END")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "exception", new _pars.token(121, "EXCEPTION")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "extern", new _pars.token(40, "EXTERN")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "false", new _pars.token(122, "FALSE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "finally", new _pars.token(129, "FINALLY")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "fixed", new _pars.token(13, "FIXED")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "for", new _pars.token(123, "FOR")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "fun", new _pars.token(124, "FUN")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "function", new _pars.token(125, "FUNCTION")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "global", new _pars.token(45, "GLOBAL")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "if", new _pars.token(126, "IF")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "in", new _pars.token(127, "IN")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "inherit", new _pars.token(53, "INHERIT")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "inline", new _pars.token(110, "INLINE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "interface", new _pars.token(111, "INTERFACE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "internal", new _pars.token(44, "INTERNAL")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "land", new _pars.token(184, "INFIX_STAR_DIV_MOD_OP", "land")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "lazy", new _pars.token(114, "LAZY")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "let", new _pars.token(161, "LET", false)], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "lor", new _pars.token(184, "INFIX_STAR_DIV_MOD_OP", "lor")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "lsl", new _pars.token(189, "INFIX_STAR_STAR_OP", "lsl")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "lsr", new _pars.token(189, "INFIX_STAR_STAR_OP", "lsr")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "lxor", new _pars.token(184, "INFIX_STAR_DIV_MOD_OP", "lxor")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "match", new _pars.token(116, "MATCH")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "member", new _pars.token(47, "MEMBER")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "mod", new _pars.token(184, "INFIX_STAR_DIV_MOD_OP", "mod")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "module", new _pars.token(149, "MODULE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "mutable", new _pars.token(118, "MUTABLE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "namespace", new _pars.token(150, "NAMESPACE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "new", new _pars.token(119, "NEW")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "null", new _pars.token(147, "NULL")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "of", new _pars.token(120, "OF")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "open", new _pars.token(101, "OPEN")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "or", new _pars.token(102, "OR")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "override", new _pars.token(50, "OVERRIDE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "private", new _pars.token(43, "PRIVATE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "public", new _pars.token(42, "PUBLIC")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "rec", new _pars.token(103, "REC")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "return", new _pars.token(162, "YIELD", false)], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "sig", new _pars.token(56, "SIG")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "static", new _pars.token(46, "STATIC")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "struct", new _pars.token(55, "STRUCT")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "then", new _pars.token(104, "THEN")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "to", new _pars.token(105, "TO")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "true", new _pars.token(106, "TRUE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "try", new _pars.token(107, "TRY")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "type", new _pars.token(108, "TYPE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "upcast", new _pars.token(145, "UPCAST")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "use", new _pars.token(161, "LET", true)], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "val", new _pars.token(109, "VAL")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "void", new _pars.token(41, "VOID")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "when", new _pars.token(85, "WHEN")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "while", new _pars.token(86, "WHILE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "with", new _pars.token(87, "WITH")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "yield", new _pars.token(162, "YIELD", true)], (0, _Types.L)([new Keywords$002EcompatibilityMode(0, "ALWAYS"), "_", new _pars.token(67, "UNDERSCORE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "__token_OBLOCKSEP", new _pars.token(21, "OBLOCKSEP")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "__token_OWITH", new _pars.token(26, "OWITH")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "__token_ODECLEND", new _pars.token(19, "ODECLEND")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "__token_OTHEN", new _pars.token(28, "OTHEN")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "__token_OELSE", new _pars.token(27, "OELSE")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "__token_OEND", new _pars.token(20, "OEND")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "__token_ODO", new _pars.token(30, "ODO")], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "__token_OLET", new _pars.token(32, "OLET", true)], (0, _Types.L)([new Keywords$002EcompatibilityMode(1, "FSHARP"), "__token_constraint", new _pars.token(152, "CONSTRAINT")], (0, _Types.L)())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))), (0, _List.map)(function (s$$5) {
  return [new Keywords$002EcompatibilityMode(1, "FSHARP"), s$$5, new _pars.token(148, "RESERVED")];
}, (0, _Types.L)("break", (0, _Types.L)("checked", (0, _Types.L)("component", (0, _Types.L)("constraint", (0, _Types.L)("continue", (0, _Types.L)("fori", (0, _Types.L)("include", (0, _Types.L)("mixin", (0, _Types.L)("parallel", (0, _Types.L)("params", (0, _Types.L)("process", (0, _Types.L)("protected", (0, _Types.L)("pure", (0, _Types.L)("sealed", (0, _Types.L)("trait", (0, _Types.L)("tailcall", (0, _Types.L)("virtual", (0, _Types.L)())))))))))))))))))));
const Keywords$$$unreserveWords = (0, _List.choose)(function chooser(_arg1) {
  if ((0, _Util.equals)(_arg1[0], new Keywords$002EcompatibilityMode(1, "FSHARP"))) {
    return _arg1[1];
  } else {
    return null;
  }
}, Keywords$$$keywordList);
const Keywords$$$keywordNames = (0, _List.map)(function mapping(tupledArg) {
  return tupledArg[1];
}, Keywords$$$keywordList);
exports.Keywords$$$keywordNames = Keywords$$$keywordNames;

const Keywords$$$keywordTable = (() => {
  const tab = new Map([]);
  (0, _Seq.iterate)(function (forLoopVar) {
    tab.set(forLoopVar[1], forLoopVar[2]);
  }, Keywords$$$keywordList);
  return tab;
})();

exports.Keywords$$$keywordTable = Keywords$$$keywordTable;

function Keywords$$$KeywordToken(s$$6) {
  return Keywords$$$keywordTable.get(s$$6);
}

function Keywords$$$IdentifierToken(args, lexbuf$$4, s$$7) {
  if ((0, _PrettyNaming.IsCompilerGeneratedName)(s$$7)) {
    (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$lexhlpIdentifiersContainingAtSymbolReserved)(), (0, _ast.LexBuffer$00601$002Eget_LexemeRange)(lexbuf$$4)));
  }

  return LexResourceManager$$InternIdentifierToken$$Z721C83C5(args.resourceManager, s$$7);
}

function Keywords$$$KeywordOrIdentifierToken(args$$1, lexbuf$$5, s$$8) {
  const matchValue$$2 = (0, _Util.tryGetValue)(Keywords$$$keywordTable, s$$8, null);

  if (matchValue$$2[0]) {
    if (matchValue$$2[1].tag === 148) {
      (0, _ErrorLogger.warning)(new ReservedKeyword((0, _FSComp.SR$$$lexhlpIdentifierReserved$$Z721C83C5)(s$$8), (0, _ast.LexBuffer$00601$002Eget_LexemeRange)(lexbuf$$5)));
      return Keywords$$$IdentifierToken(args$$1, lexbuf$$5, s$$8);
    } else {
      return matchValue$$2[1];
    }
  } else {
    switch (s$$8) {
      case "__SOURCE_DIRECTORY__":
        {
          const filename$$2 = (0, _range.fileOfFileIndex)((0, _primLexing.LexBuffer$00601$$get_StartPos)(lexbuf$$5).FileIndex);
          const dirname = (0, _String.isNullOrWhiteSpace)(filename$$2) ? "" : filename$$2 === stdinMockFilename ? (0, _adapters.System$002EIO$002EDirectory$$$GetCurrentDirectory)() : (0, _adapters.System$002EIO$002EPath$$$GetDirectoryName)((0, _illib.Shim$$$FileSystem)().GetFullPathShim(filename$$2));
          return new _pars.token(191, "KEYWORD_STRING", dirname);
        }

      case "__SOURCE_FILE__":
        {
          return new _pars.token(191, "KEYWORD_STRING", (0, _adapters.System$002EIO$002EPath$$$GetFileName)((0, _range.fileOfFileIndex)((0, _primLexing.LexBuffer$00601$$get_StartPos)(lexbuf$$5).FileIndex)));
        }

      case "__LINE__":
        {
          return new _pars.token(191, "KEYWORD_STRING", (0, _Util.int32ToString)((0, _primLexing.LexBuffer$00601$$get_StartPos)(lexbuf$$5).Line));
        }

      default:
        {
          return Keywords$$$IdentifierToken(args$$1, lexbuf$$5, s$$8);
        }
    }
  }
}

function Keywords$$$QuoteIdentifierIfNeeded(s$$9) {
  if ((!(0, _Seq.forAll)(_PrettyNaming.IsIdentifierPartCharacter, s$$9.split("")) ? true : s$$9.length > 0 ? !(0, _PrettyNaming.IsIdentifierFirstCharacter)(s$$9[0]) : false) ? true : Keywords$$$keywordTable.has(s$$9)) {
    return "``" + s$$9 + "``";
  } else {
    return s$$9;
  }
}

function Keywords$$$NormalizeIdentifierBackticks(s$$11) {
  const s$$12 = ((0, _String.startsWith)(s$$11, "``", 4) ? (0, _String.endsWith)(s$$11, "``", 4) : false) ? s$$11.slice(2, s$$11.length - 3 + 1) : s$$11;
  return Keywords$$$QuoteIdentifierIfNeeded(s$$12);
}

const Keywords$$$keywordsWithDescription = (0, _Types.L)(["abstract", (0, _FSComp.SR$$$keywordDescriptionAbstract)()], (0, _Types.L)(["and", (0, _FSComp.SR$$$keyworkDescriptionAnd)()], (0, _Types.L)(["as", (0, _FSComp.SR$$$keywordDescriptionAs)()], (0, _Types.L)(["assert", (0, _FSComp.SR$$$keywordDescriptionAssert)()], (0, _Types.L)(["base", (0, _FSComp.SR$$$keywordDescriptionBase)()], (0, _Types.L)(["begin", (0, _FSComp.SR$$$keywordDescriptionBegin)()], (0, _Types.L)(["class", (0, _FSComp.SR$$$keywordDescriptionClass)()], (0, _Types.L)(["default", (0, _FSComp.SR$$$keywordDescriptionDefault)()], (0, _Types.L)(["delegate", (0, _FSComp.SR$$$keywordDescriptionDelegate)()], (0, _Types.L)(["do", (0, _FSComp.SR$$$keywordDescriptionDo)()], (0, _Types.L)(["done", (0, _FSComp.SR$$$keywordDescriptionDone)()], (0, _Types.L)(["downcast", (0, _FSComp.SR$$$keywordDescriptionDowncast)()], (0, _Types.L)(["downto", (0, _FSComp.SR$$$keywordDescriptionDownto)()], (0, _Types.L)(["elif", (0, _FSComp.SR$$$keywordDescriptionElif)()], (0, _Types.L)(["else", (0, _FSComp.SR$$$keywordDescriptionElse)()], (0, _Types.L)(["end", (0, _FSComp.SR$$$keywordDescriptionEnd)()], (0, _Types.L)(["exception", (0, _FSComp.SR$$$keywordDescriptionException)()], (0, _Types.L)(["extern", (0, _FSComp.SR$$$keywordDescriptionExtern)()], (0, _Types.L)(["false", (0, _FSComp.SR$$$keywordDescriptionTrueFalse)()], (0, _Types.L)(["finally", (0, _FSComp.SR$$$keywordDescriptionFinally)()], (0, _Types.L)(["for", (0, _FSComp.SR$$$keywordDescriptionFor)()], (0, _Types.L)(["fun", (0, _FSComp.SR$$$keywordDescriptionFun)()], (0, _Types.L)(["function", (0, _FSComp.SR$$$keywordDescriptionFunction)()], (0, _Types.L)(["global", (0, _FSComp.SR$$$keywordDescriptionGlobal)()], (0, _Types.L)(["if", (0, _FSComp.SR$$$keywordDescriptionIf)()], (0, _Types.L)(["in", (0, _FSComp.SR$$$keywordDescriptionIn)()], (0, _Types.L)(["inherit", (0, _FSComp.SR$$$keywordDescriptionInherit)()], (0, _Types.L)(["inline", (0, _FSComp.SR$$$keywordDescriptionInline)()], (0, _Types.L)(["interface", (0, _FSComp.SR$$$keywordDescriptionInterface)()], (0, _Types.L)(["internal", (0, _FSComp.SR$$$keywordDescriptionInternal)()], (0, _Types.L)(["lazy", (0, _FSComp.SR$$$keywordDescriptionLazy)()], (0, _Types.L)(["let", (0, _FSComp.SR$$$keywordDescriptionLet)()], (0, _Types.L)(["let!", (0, _FSComp.SR$$$keywordDescriptionLetBang)()], (0, _Types.L)(["match", (0, _FSComp.SR$$$keywordDescriptionMatch)()], (0, _Types.L)(["match!", (0, _FSComp.SR$$$keywordDescriptionMatchBang)()], (0, _Types.L)(["member", (0, _FSComp.SR$$$keywordDescriptionMember)()], (0, _Types.L)(["module", (0, _FSComp.SR$$$keywordDescriptionModule)()], (0, _Types.L)(["mutable", (0, _FSComp.SR$$$keywordDescriptionMutable)()], (0, _Types.L)(["namespace", (0, _FSComp.SR$$$keywordDescriptionNamespace)()], (0, _Types.L)(["new", (0, _FSComp.SR$$$keywordDescriptionNew)()], (0, _Types.L)(["not", (0, _FSComp.SR$$$keywordDescriptionNot)()], (0, _Types.L)(["null", (0, _FSComp.SR$$$keywordDescriptionNull)()], (0, _Types.L)(["of", (0, _FSComp.SR$$$keywordDescriptionOf)()], (0, _Types.L)(["open", (0, _FSComp.SR$$$keywordDescriptionOpen)()], (0, _Types.L)(["or", (0, _FSComp.SR$$$keywordDescriptionOr)()], (0, _Types.L)(["override", (0, _FSComp.SR$$$keywordDescriptionOverride)()], (0, _Types.L)(["private", (0, _FSComp.SR$$$keywordDescriptionPrivate)()], (0, _Types.L)(["public", (0, _FSComp.SR$$$keywordDescriptionPublic)()], (0, _Types.L)(["rec", (0, _FSComp.SR$$$keywordDescriptionRec)()], (0, _Types.L)(["return", (0, _FSComp.SR$$$keywordDescriptionReturn)()], (0, _Types.L)(["return!", (0, _FSComp.SR$$$keywordDescriptionReturnBang)()], (0, _Types.L)(["select", (0, _FSComp.SR$$$keywordDescriptionSelect)()], (0, _Types.L)(["static", (0, _FSComp.SR$$$keywordDescriptionStatic)()], (0, _Types.L)(["struct", (0, _FSComp.SR$$$keywordDescriptionStruct)()], (0, _Types.L)(["then", (0, _FSComp.SR$$$keywordDescriptionThen)()], (0, _Types.L)(["to", (0, _FSComp.SR$$$keywordDescriptionTo)()], (0, _Types.L)(["true", (0, _FSComp.SR$$$keywordDescriptionTrueFalse)()], (0, _Types.L)(["try", (0, _FSComp.SR$$$keywordDescriptionTry)()], (0, _Types.L)(["type", (0, _FSComp.SR$$$keywordDescriptionType)()], (0, _Types.L)(["upcast", (0, _FSComp.SR$$$keywordDescriptionUpcast)()], (0, _Types.L)(["use", (0, _FSComp.SR$$$keywordDescriptionUse)()], (0, _Types.L)(["use!", (0, _FSComp.SR$$$keywordDescriptionUseBang)()], (0, _Types.L)(["val", (0, _FSComp.SR$$$keywordDescriptionVal)()], (0, _Types.L)(["void", (0, _FSComp.SR$$$keywordDescriptionVoid)()], (0, _Types.L)(["when", (0, _FSComp.SR$$$keywordDescriptionWhen)()], (0, _Types.L)(["while", (0, _FSComp.SR$$$keywordDescriptionWhile)()], (0, _Types.L)(["with", (0, _FSComp.SR$$$keywordDescriptionWith)()], (0, _Types.L)(["yield", (0, _FSComp.SR$$$keywordDescriptionYield)()], (0, _Types.L)(["yield!", (0, _FSComp.SR$$$keywordDescriptionYieldBang)()], (0, _Types.L)(["->", (0, _FSComp.SR$$$keywordDescriptionRightArrow)()], (0, _Types.L)(["<-", (0, _FSComp.SR$$$keywordDescriptionLeftArrow)()], (0, _Types.L)([":>", (0, _FSComp.SR$$$keywordDescriptionCast)()], (0, _Types.L)([":?>", (0, _FSComp.SR$$$keywordDescriptionDynamicCast)()], (0, _Types.L)(["<@", (0, _FSComp.SR$$$keywordDescriptionTypedQuotation)()], (0, _Types.L)(["@>", (0, _FSComp.SR$$$keywordDescriptionTypedQuotation)()], (0, _Types.L)(["<@@", (0, _FSComp.SR$$$keywordDescriptionUntypedQuotation)()], (0, _Types.L)(["@@>", (0, _FSComp.SR$$$keywordDescriptionUntypedQuotation)()], (0, _Types.L)())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
exports.Keywords$$$keywordsWithDescription = Keywords$$$keywordsWithDescription;