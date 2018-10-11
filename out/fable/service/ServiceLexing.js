"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenClassifications$$$tokenInfo = TokenClassifications$$$tokenInfo;
exports.TestExpose$$$TokenInfo = TestExpose$$$TokenInfo;
exports.LexerStateEncoding$$$computeNextLexState = LexerStateEncoding$$$computeNextLexState;
exports.LexerStateEncoding$$$resize32 = LexerStateEncoding$$$resize32;
exports.LexerStateEncoding$$$bitOfBool = LexerStateEncoding$$$bitOfBool;
exports.LexerStateEncoding$$$boolOfBit = LexerStateEncoding$$$boolOfBit;
exports.LexerStateEncoding$$$encodeLexCont = LexerStateEncoding$$$encodeLexCont;
exports.LexerStateEncoding$$$decodeLexCont = LexerStateEncoding$$$decodeLexCont;
exports.LexerStateEncoding$$$encodeLexInt = LexerStateEncoding$$$encodeLexInt;
exports.LexerStateEncoding$$$decodeLexInt = LexerStateEncoding$$$decodeLexInt;
exports.LexerStateEncoding$$$callLexCont = LexerStateEncoding$$$callLexCont;
exports.FSharpLineTokenizer$$$$002Ector$$Z37EF3A9D = FSharpLineTokenizer$$$$002Ector$$Z37EF3A9D;
exports.FSharpLineTokenizer$$ScanToken$$Z524259C1 = FSharpLineTokenizer$$ScanToken$$Z524259C1;
exports.FSharpLineTokenizer$$$ColorStateOfLexState$$Z524259C1 = FSharpLineTokenizer$$$ColorStateOfLexState$$Z524259C1;
exports.FSharpLineTokenizer$$$LexStateOfColorState$$1EE8EDB9 = FSharpLineTokenizer$$$LexStateOfColorState$$1EE8EDB9;
exports.FSharpSourceTokenizer$$$$002Ector$$5B59003F = FSharpSourceTokenizer$$$$002Ector$$5B59003F;
exports.FSharpSourceTokenizer$$CreateLineTokenizer$$Z721C83C5 = FSharpSourceTokenizer$$CreateLineTokenizer$$Z721C83C5;
exports.FSharpSourceTokenizer$$CreateBufferTokenizer$$Z3DD8C9DD = FSharpSourceTokenizer$$CreateBufferTokenizer$$Z3DD8C9DD;
exports.Keywords$$$QuoteIdentifierIfNeeded = Keywords$$$QuoteIdentifierIfNeeded;
exports.Keywords$$$NormalizeIdentifierBackticks = Keywords$$$NormalizeIdentifierBackticks;
exports.Keywords$$$KeywordsWithDescription = exports.FSharpSourceTokenizer = exports.FSharpLineTokenizer = exports.SingleLineTokenState = exports.LexerStateEncoding$$$ifdefstackMask = exports.LexerStateEncoding$$$ifdefstackCountMask = exports.LexerStateEncoding$$$hardwhitePosMask = exports.LexerStateEncoding$$$startPosMask = exports.LexerStateEncoding$$$ncommentsMask = exports.LexerStateEncoding$$$lexstateMask = exports.LexerStateEncoding$$$ifdefstackStart = exports.LexerStateEncoding$$$ifdefstackCountStart = exports.LexerStateEncoding$$$hardwhitePosStart = exports.LexerStateEncoding$$$startPosStart = exports.LexerStateEncoding$$$ncommentsStart = exports.LexerStateEncoding$$$lexstateStart = exports.LexerStateEncoding$$$ifdefstackNumBits = exports.LexerStateEncoding$$$ifdefstackCountNumBits = exports.LexerStateEncoding$$$hardwhiteNumBits = exports.LexerStateEncoding$$$startPosNumBits = exports.LexerStateEncoding$$$ncommentsNumBits = exports.LexerStateEncoding$$$lexstateNumBits = exports.LexerStateEncoding$$$revertToDefaultLexCont = exports.FSharpTokenizerColorState = exports.FSharpTokenInfo = exports.FSharpTokenCharKind = exports.FSharpTokenTriggerClass = exports.FSharpTokenColorKind = exports.FSharpTokenTag$$$OWITH = exports.FSharpTokenTag$$$WITH = exports.FSharpTokenTag$$$NEW = exports.FSharpTokenTag$$$TRY = exports.FSharpTokenTag$$$CLASS = exports.FSharpTokenTag$$$STRUCT = exports.FSharpTokenTag$$$ELSE = exports.FSharpTokenTag$$$THEN = exports.FSharpTokenTag$$$FUNCTION = exports.FSharpTokenTag$$$DO = exports.FSharpTokenTag$$$BEGIN = exports.FSharpTokenTag$$$LINE_COMMENT = exports.FSharpTokenTag$$$COMMENT = exports.FSharpTokenTag$$$WHITESPACE = exports.FSharpTokenTag$$$QUOTE = exports.FSharpTokenTag$$$LARROW = exports.FSharpTokenTag$$$RARROW = exports.FSharpTokenTag$$$BAR_BAR = exports.FSharpTokenTag$$$COLON_EQUALS = exports.FSharpTokenTag$$$PREFIX_OP = exports.FSharpTokenTag$$$AMP_AMP = exports.FSharpTokenTag$$$COLON_COLON = exports.FSharpTokenTag$$$INFIX_COMPARE_OP = exports.FSharpTokenTag$$$INFIX_BAR_OP = exports.FSharpTokenTag$$$COLON_QMARK = exports.FSharpTokenTag$$$COLON_QMARK_GREATER = exports.FSharpTokenTag$$$COLON_GREATER = exports.FSharpTokenTag$$$BAR = exports.FSharpTokenTag$$$UNDERSCORE = exports.FSharpTokenTag$$$INT32_DOT_DOT = exports.FSharpTokenTag$$$DOT_DOT = exports.FSharpTokenTag$$$DOT = exports.FSharpTokenTag$$$COMMA = exports.FSharpTokenTag$$$SEMICOLON = exports.FSharpTokenTag$$$EQUALS = exports.FSharpTokenTag$$$COLON = exports.FSharpTokenTag$$$QMARK = exports.FSharpTokenTag$$$INFIX_AT_HAT_OP = exports.FSharpTokenTag$$$PERCENT_OP = exports.FSharpTokenTag$$$INFIX_STAR_DIV_MOD_OP = exports.FSharpTokenTag$$$STAR = exports.FSharpTokenTag$$$MINUS = exports.FSharpTokenTag$$$PLUS_MINUS_OP = exports.FSharpTokenTag$$$BAR_RBRACK = exports.FSharpTokenTag$$$LBRACK_BAR = exports.FSharpTokenTag$$$GREATER = exports.FSharpTokenTag$$$LESS = exports.FSharpTokenTag$$$GREATER_RBRACK = exports.FSharpTokenTag$$$LBRACK_LESS = exports.FSharpTokenTag$$$RBRACE = exports.FSharpTokenTag$$$LBRACE = exports.FSharpTokenTag$$$RBRACK = exports.FSharpTokenTag$$$LBRACK = exports.FSharpTokenTag$$$RPAREN = exports.FSharpTokenTag$$$LPAREN = exports.FSharpTokenTag$$$STRING = exports.FSharpTokenTag$$$IDENT = exports.FSharpTokenTag$$$String = exports.FSharpTokenTag$$$Identifier = void 0;

var _pars = require("../codegen/pars");

var _Types = require("../fable-core.2.0.3/Types");

var _ast = require("../fsharp/ast");

var _Long = require("../fable-core.2.0.3/Long");

var _range = require("../fsharp/range");

var _lib = require("../fsharp/lib");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Util = require("../fable-core.2.0.3/Util");

var _lexhelp = require("../fsharp/lexhelp");

var _lex = require("../codegen/lex");

var _bytes = require("../absil/bytes");

var _CompileOps = require("../fsharp/CompileOps");

var _primParsing = require("../utils/prim-parsing");

var _primLexing = require("../utils/prim-lexing");

var _ErrorLogger = require("../fsharp/ErrorLogger");

var _String = require("../fable-core.2.0.3/String");

var _LexFilter = require("../fsharp/LexFilter");

var _UnicodeLexing = require("../fsharp/UnicodeLexing");

const FSharpTokenTag$$$Identifier = (0, _pars.tagOfToken)(new _pars.token(190, "IDENT", "a"));
exports.FSharpTokenTag$$$Identifier = FSharpTokenTag$$$Identifier;
const FSharpTokenTag$$$String = (0, _pars.tagOfToken)(new _pars.token(192, "STRING", "a"));
exports.FSharpTokenTag$$$String = FSharpTokenTag$$$String;
const FSharpTokenTag$$$IDENT = (0, _pars.tagOfToken)(new _pars.token(190, "IDENT", "a"));
exports.FSharpTokenTag$$$IDENT = FSharpTokenTag$$$IDENT;
const FSharpTokenTag$$$STRING = (0, _pars.tagOfToken)(new _pars.token(192, "STRING", "a"));
exports.FSharpTokenTag$$$STRING = FSharpTokenTag$$$STRING;
const FSharpTokenTag$$$LPAREN = (0, _pars.tagOfToken)(new _pars.token(92, "LPAREN"));
exports.FSharpTokenTag$$$LPAREN = FSharpTokenTag$$$LPAREN;
const FSharpTokenTag$$$RPAREN = (0, _pars.tagOfToken)(new _pars.token(93, "RPAREN"));
exports.FSharpTokenTag$$$RPAREN = FSharpTokenTag$$$RPAREN;
const FSharpTokenTag$$$LBRACK = (0, _pars.tagOfToken)(new _pars.token(71, "LBRACK"));
exports.FSharpTokenTag$$$LBRACK = FSharpTokenTag$$$LBRACK;
const FSharpTokenTag$$$RBRACK = (0, _pars.tagOfToken)(new _pars.token(58, "RBRACK"));
exports.FSharpTokenTag$$$RBRACK = FSharpTokenTag$$$RBRACK;
const FSharpTokenTag$$$LBRACE = (0, _pars.tagOfToken)(new _pars.token(74, "LBRACE"));
exports.FSharpTokenTag$$$LBRACE = FSharpTokenTag$$$LBRACE;
const FSharpTokenTag$$$RBRACE = (0, _pars.tagOfToken)(new _pars.token(59, "RBRACE"));
exports.FSharpTokenTag$$$RBRACE = FSharpTokenTag$$$RBRACE;
const FSharpTokenTag$$$LBRACK_LESS = (0, _pars.tagOfToken)(new _pars.token(73, "LBRACK_LESS"));
exports.FSharpTokenTag$$$LBRACK_LESS = FSharpTokenTag$$$LBRACK_LESS;
const FSharpTokenTag$$$GREATER_RBRACK = (0, _pars.tagOfToken)(new _pars.token(54, "GREATER_RBRACK"));
exports.FSharpTokenTag$$$GREATER_RBRACK = FSharpTokenTag$$$GREATER_RBRACK;
const FSharpTokenTag$$$LESS = (0, _pars.tagOfToken)(new _pars.token(159, "LESS", true));
exports.FSharpTokenTag$$$LESS = FSharpTokenTag$$$LESS;
const FSharpTokenTag$$$GREATER = (0, _pars.tagOfToken)(new _pars.token(160, "GREATER", true));
exports.FSharpTokenTag$$$GREATER = FSharpTokenTag$$$GREATER;
const FSharpTokenTag$$$LBRACK_BAR = (0, _pars.tagOfToken)(new _pars.token(72, "LBRACK_BAR"));
exports.FSharpTokenTag$$$LBRACK_BAR = FSharpTokenTag$$$LBRACK_BAR;
const FSharpTokenTag$$$BAR_RBRACK = (0, _pars.tagOfToken)(new _pars.token(65, "BAR_RBRACK"));
exports.FSharpTokenTag$$$BAR_RBRACK = FSharpTokenTag$$$BAR_RBRACK;
const FSharpTokenTag$$$PLUS_MINUS_OP = (0, _pars.tagOfToken)(new _pars.token(182, "PLUS_MINUS_OP", "a"));
exports.FSharpTokenTag$$$PLUS_MINUS_OP = FSharpTokenTag$$$PLUS_MINUS_OP;
const FSharpTokenTag$$$MINUS = (0, _pars.tagOfToken)(new _pars.token(62, "MINUS"));
exports.FSharpTokenTag$$$MINUS = FSharpTokenTag$$$MINUS;
const FSharpTokenTag$$$STAR = (0, _pars.tagOfToken)(new _pars.token(96, "STAR"));
exports.FSharpTokenTag$$$STAR = FSharpTokenTag$$$STAR;
const FSharpTokenTag$$$INFIX_STAR_DIV_MOD_OP = (0, _pars.tagOfToken)(new _pars.token(184, "INFIX_STAR_DIV_MOD_OP", "a"));
exports.FSharpTokenTag$$$INFIX_STAR_DIV_MOD_OP = FSharpTokenTag$$$INFIX_STAR_DIV_MOD_OP;
const FSharpTokenTag$$$PERCENT_OP = (0, _pars.tagOfToken)(new _pars.token(157, "PERCENT_OP", "a"));
exports.FSharpTokenTag$$$PERCENT_OP = FSharpTokenTag$$$PERCENT_OP;
const FSharpTokenTag$$$INFIX_AT_HAT_OP = (0, _pars.tagOfToken)(new _pars.token(187, "INFIX_AT_HAT_OP", "a"));
exports.FSharpTokenTag$$$INFIX_AT_HAT_OP = FSharpTokenTag$$$INFIX_AT_HAT_OP;
const FSharpTokenTag$$$QMARK = (0, _pars.tagOfToken)(new _pars.token(75, "QMARK"));
exports.FSharpTokenTag$$$QMARK = FSharpTokenTag$$$QMARK;
const FSharpTokenTag$$$COLON = (0, _pars.tagOfToken)(new _pars.token(78, "COLON"));
exports.FSharpTokenTag$$$COLON = FSharpTokenTag$$$COLON;
const FSharpTokenTag$$$EQUALS = (0, _pars.tagOfToken)(new _pars.token(70, "EQUALS"));
exports.FSharpTokenTag$$$EQUALS = FSharpTokenTag$$$EQUALS;
const FSharpTokenTag$$$SEMICOLON = (0, _pars.tagOfToken)(new _pars.token(84, "SEMICOLON"));
exports.FSharpTokenTag$$$SEMICOLON = FSharpTokenTag$$$SEMICOLON;
const FSharpTokenTag$$$COMMA = (0, _pars.tagOfToken)(new _pars.token(97, "COMMA"));
exports.FSharpTokenTag$$$COMMA = FSharpTokenTag$$$COMMA;
const FSharpTokenTag$$$DOT = (0, _pars.tagOfToken)(new _pars.token(77, "DOT"));
exports.FSharpTokenTag$$$DOT = FSharpTokenTag$$$DOT;
const FSharpTokenTag$$$DOT_DOT = (0, _pars.tagOfToken)(new _pars.token(143, "DOT_DOT"));
exports.FSharpTokenTag$$$DOT_DOT = FSharpTokenTag$$$DOT_DOT;
const FSharpTokenTag$$$INT32_DOT_DOT = (0, _pars.tagOfToken)(new _pars.token(177, "INT32_DOT_DOT", [0, true]));
exports.FSharpTokenTag$$$INT32_DOT_DOT = FSharpTokenTag$$$INT32_DOT_DOT;
const FSharpTokenTag$$$UNDERSCORE = (0, _pars.tagOfToken)(new _pars.token(67, "UNDERSCORE"));
exports.FSharpTokenTag$$$UNDERSCORE = FSharpTokenTag$$$UNDERSCORE;
const FSharpTokenTag$$$BAR = (0, _pars.tagOfToken)(new _pars.token(57, "BAR"));
exports.FSharpTokenTag$$$BAR = FSharpTokenTag$$$BAR;
const FSharpTokenTag$$$COLON_GREATER = (0, _pars.tagOfToken)(new _pars.token(80, "COLON_GREATER"));
exports.FSharpTokenTag$$$COLON_GREATER = FSharpTokenTag$$$COLON_GREATER;
const FSharpTokenTag$$$COLON_QMARK_GREATER = (0, _pars.tagOfToken)(new _pars.token(81, "COLON_QMARK_GREATER"));
exports.FSharpTokenTag$$$COLON_QMARK_GREATER = FSharpTokenTag$$$COLON_QMARK_GREATER;
const FSharpTokenTag$$$COLON_QMARK = (0, _pars.tagOfToken)(new _pars.token(82, "COLON_QMARK"));
exports.FSharpTokenTag$$$COLON_QMARK = FSharpTokenTag$$$COLON_QMARK;
const FSharpTokenTag$$$INFIX_BAR_OP = (0, _pars.tagOfToken)(new _pars.token(186, "INFIX_BAR_OP", "a"));
exports.FSharpTokenTag$$$INFIX_BAR_OP = FSharpTokenTag$$$INFIX_BAR_OP;
const FSharpTokenTag$$$INFIX_COMPARE_OP = (0, _pars.tagOfToken)(new _pars.token(188, "INFIX_COMPARE_OP", "a"));
exports.FSharpTokenTag$$$INFIX_COMPARE_OP = FSharpTokenTag$$$INFIX_COMPARE_OP;
const FSharpTokenTag$$$COLON_COLON = (0, _pars.tagOfToken)(new _pars.token(79, "COLON_COLON"));
exports.FSharpTokenTag$$$COLON_COLON = FSharpTokenTag$$$COLON_COLON;
const FSharpTokenTag$$$AMP_AMP = (0, _pars.tagOfToken)(new _pars.token(90, "AMP_AMP"));
exports.FSharpTokenTag$$$AMP_AMP = FSharpTokenTag$$$AMP_AMP;
const FSharpTokenTag$$$PREFIX_OP = (0, _pars.tagOfToken)(new _pars.token(185, "PREFIX_OP", "a"));
exports.FSharpTokenTag$$$PREFIX_OP = FSharpTokenTag$$$PREFIX_OP;
const FSharpTokenTag$$$COLON_EQUALS = (0, _pars.tagOfToken)(new _pars.token(83, "COLON_EQUALS"));
exports.FSharpTokenTag$$$COLON_EQUALS = FSharpTokenTag$$$COLON_EQUALS;
const FSharpTokenTag$$$BAR_BAR = (0, _pars.tagOfToken)(new _pars.token(144, "BAR_BAR"));
exports.FSharpTokenTag$$$BAR_BAR = FSharpTokenTag$$$BAR_BAR;
const FSharpTokenTag$$$RARROW = (0, _pars.tagOfToken)(new _pars.token(98, "RARROW"));
exports.FSharpTokenTag$$$RARROW = FSharpTokenTag$$$RARROW;
const FSharpTokenTag$$$LARROW = (0, _pars.tagOfToken)(new _pars.token(69, "LARROW"));
exports.FSharpTokenTag$$$LARROW = FSharpTokenTag$$$LARROW;
const FSharpTokenTag$$$QUOTE = (0, _pars.tagOfToken)(new _pars.token(91, "QUOTE"));
exports.FSharpTokenTag$$$QUOTE = FSharpTokenTag$$$QUOTE;
const FSharpTokenTag$$$WHITESPACE = (0, _pars.tagOfToken)(new _pars.token(4, "WHITESPACE", null));
exports.FSharpTokenTag$$$WHITESPACE = FSharpTokenTag$$$WHITESPACE;
const FSharpTokenTag$$$COMMENT = (0, _pars.tagOfToken)(new _pars.token(3, "COMMENT", null));
exports.FSharpTokenTag$$$COMMENT = FSharpTokenTag$$$COMMENT;
const FSharpTokenTag$$$LINE_COMMENT = (0, _pars.tagOfToken)(new _pars.token(8, "LINE_COMMENT", null));
exports.FSharpTokenTag$$$LINE_COMMENT = FSharpTokenTag$$$LINE_COMMENT;
const FSharpTokenTag$$$BEGIN = (0, _pars.tagOfToken)(new _pars.token(136, "BEGIN"));
exports.FSharpTokenTag$$$BEGIN = FSharpTokenTag$$$BEGIN;
const FSharpTokenTag$$$DO = (0, _pars.tagOfToken)(new _pars.token(137, "DO"));
exports.FSharpTokenTag$$$DO = FSharpTokenTag$$$DO;
const FSharpTokenTag$$$FUNCTION = (0, _pars.tagOfToken)(new _pars.token(125, "FUNCTION"));
exports.FSharpTokenTag$$$FUNCTION = FSharpTokenTag$$$FUNCTION;
const FSharpTokenTag$$$THEN = (0, _pars.tagOfToken)(new _pars.token(104, "THEN"));
exports.FSharpTokenTag$$$THEN = FSharpTokenTag$$$THEN;
const FSharpTokenTag$$$ELSE = (0, _pars.tagOfToken)(new _pars.token(140, "ELSE"));
exports.FSharpTokenTag$$$ELSE = FSharpTokenTag$$$ELSE;
const FSharpTokenTag$$$STRUCT = (0, _pars.tagOfToken)(new _pars.token(55, "STRUCT"));
exports.FSharpTokenTag$$$STRUCT = FSharpTokenTag$$$STRUCT;
const FSharpTokenTag$$$CLASS = (0, _pars.tagOfToken)(new _pars.token(48, "CLASS"));
exports.FSharpTokenTag$$$CLASS = FSharpTokenTag$$$CLASS;
const FSharpTokenTag$$$TRY = (0, _pars.tagOfToken)(new _pars.token(107, "TRY"));
exports.FSharpTokenTag$$$TRY = FSharpTokenTag$$$TRY;
const FSharpTokenTag$$$NEW = (0, _pars.tagOfToken)(new _pars.token(119, "NEW"));
exports.FSharpTokenTag$$$NEW = FSharpTokenTag$$$NEW;
const FSharpTokenTag$$$WITH = (0, _pars.tagOfToken)(new _pars.token(87, "WITH"));
exports.FSharpTokenTag$$$WITH = FSharpTokenTag$$$WITH;
const FSharpTokenTag$$$OWITH = (0, _pars.tagOfToken)(new _pars.token(26, "OWITH"));
exports.FSharpTokenTag$$$OWITH = FSharpTokenTag$$$OWITH;
const FSharpTokenColorKind = (0, _Types.declare)(function FSharpTokenColorKind(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13) {
  this.value__ = arg1 | 0;
  this.Default = arg2;
  this.Text = arg3;
  this.Keyword = arg4;
  this.Comment = arg5;
  this.Identifier = arg6;
  this.String = arg7;
  this.UpperIdentifier = arg8;
  this.InactiveCode = arg9;
  this.PreprocessorKeyword = arg10;
  this.Number = arg11;
  this.Operator = arg12;
  this.Punctuation = arg13;
}, _Types.Record);
exports.FSharpTokenColorKind = FSharpTokenColorKind;
const FSharpTokenTriggerClass = (0, _Types.declare)(function FSharpTokenTriggerClass(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.value__ = arg1 | 0;
  this.None = arg2;
  this.MemberSelect = arg3;
  this.MatchBraces = arg4;
  this.ChoiceSelect = arg5;
  this.MethodTip = arg6;
  this.ParamStart = arg7;
  this.ParamNext = arg8;
  this.ParamEnd = arg9;
}, _Types.Record);
exports.FSharpTokenTriggerClass = FSharpTokenTriggerClass;
const FSharpTokenCharKind = (0, _Types.declare)(function FSharpTokenCharKind(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12) {
  this.value__ = arg1 | 0;
  this.Default = arg2;
  this.Text = arg3;
  this.Keyword = arg4;
  this.Identifier = arg5;
  this.String = arg6;
  this.Literal = arg7;
  this.Operator = arg8;
  this.Delimiter = arg9;
  this.WhiteSpace = arg10;
  this.LineComment = arg11;
  this.Comment = arg12;
}, _Types.Record);
exports.FSharpTokenCharKind = FSharpTokenCharKind;
const FSharpTokenInfo = (0, _Types.declare)(function FSharpTokenInfo(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this.LeftColumn = arg1 | 0;
  this.RightColumn = arg2 | 0;
  this.ColorClass = arg3;
  this.CharClass = arg4;
  this.FSharpTokenTriggerClass = arg5;
  this.Tag = arg6 | 0;
  this.TokenName = arg7;
  this.FullMatchedLength = arg8 | 0;
}, _Types.Record);
exports.FSharpTokenInfo = FSharpTokenInfo;

function TokenClassifications$$$tokenInfo(token) {
  var $target$$3, s;

  if (token.tag === 128) {
    $target$$3 = 1;
  } else if (token.tag === 165) {
    $target$$3 = 2;
  } else if (token.tag === 164) {
    $target$$3 = 2;
  } else if (token.tag === 179) {
    $target$$3 = 2;
  } else if (token.tag === 174) {
    $target$$3 = 2;
  } else if (token.tag === 178) {
    $target$$3 = 2;
  } else if (token.tag === 173) {
    $target$$3 = 2;
  } else if (token.tag === 176) {
    $target$$3 = 2;
  } else if (token.tag === 172) {
    $target$$3 = 2;
  } else if (token.tag === 175) {
    $target$$3 = 2;
  } else if (token.tag === 171) {
    $target$$3 = 2;
  } else if (token.tag === 170) {
    $target$$3 = 2;
  } else if (token.tag === 169) {
    $target$$3 = 2;
  } else if (token.tag === 168) {
    $target$$3 = 2;
  } else if (token.tag === 167) {
    $target$$3 = 2;
  } else if (token.tag === 177) {
    $target$$3 = 3;
  } else if (token.tag === 184) {
    if (token.fields[0] === "mod") {
      $target$$3 = 4;
    } else if (token.fields[0] === "land") {
      $target$$3 = 4;
    } else if (token.fields[0] === "lor") {
      $target$$3 = 4;
    } else if (token.fields[0] === "lxor") {
      $target$$3 = 4;
    } else {
      $target$$3 = 6;
    }
  } else if (token.tag === 189) {
    if (token.fields[0] === "lsl") {
      $target$$3 = 4;
    } else if (token.fields[0] === "lsr") {
      $target$$3 = 4;
    } else if (token.fields[0] === "asr") {
      $target$$3 = 4;
    } else {
      $target$$3 = 6;
    }
  } else if (token.tag === 100) {
    $target$$3 = 5;
  } else if (token.tag === 63) {
    $target$$3 = 5;
  } else if (token.tag === 80) {
    $target$$3 = 5;
  } else if (token.tag === 79) {
    $target$$3 = 5;
  } else if (token.tag === 157) {
    $target$$3 = 5;
  } else if (token.tag === 182) {
    $target$$3 = 5;
  } else if (token.tag === 185) {
    $target$$3 = 5;
  } else if (token.tag === 81) {
    $target$$3 = 5;
  } else if (token.tag === 89) {
    $target$$3 = 5;
  } else if (token.tag === 90) {
    $target$$3 = 5;
  } else if (token.tag === 144) {
    $target$$3 = 5;
  } else if (token.tag === 75) {
    $target$$3 = 5;
  } else if (token.tag === 76) {
    $target$$3 = 5;
  } else if (token.tag === 82) {
    $target$$3 = 5;
  } else if (token.tag === 33) {
    $target$$3 = 5;
  } else if (token.tag === 83) {
    $target$$3 = 5;
  } else if (token.tag === 70) {
    $target$$3 = 5;
  } else if (token.tag === 156) {
    $target$$3 = 5;
  } else if (token.tag === 62) {
    $target$$3 = 5;
  } else if (token.tag === 181) {
    $target$$3 = 5;
  } else if (token.tag === 188) {
    $target$$3 = 6;
  } else if (token.tag === 180) {
    $target$$3 = 6;
  } else if (token.tag === 183) {
    $target$$3 = 6;
  } else if (token.tag === 186) {
    $target$$3 = 6;
  } else if (token.tag === 143) {
    $target$$3 = 7;
  } else if (token.tag === 97) {
    $target$$3 = 8;
  } else if (token.tag === 77) {
    $target$$3 = 9;
  } else if (token.tag === 57) {
    $target$$3 = 10;
  } else if (token.tag === 88) {
    $target$$3 = 11;
  } else if (token.tag === 96) {
    $target$$3 = 11;
  } else if (token.tag === 84) {
    $target$$3 = 11;
  } else if (token.tag === 68) {
    $target$$3 = 11;
  } else if (token.tag === 78) {
    $target$$3 = 11;
  } else if (token.tag === 91) {
    $target$$3 = 12;
  } else if (token.tag === 67) {
    $target$$3 = 12;
  } else if (token.tag === 187) {
    $target$$3 = 12;
  } else if (token.tag === 159) {
    $target$$3 = 13;
  } else if (token.tag === 160) {
    $target$$3 = 14;
  } else if (token.tag === 92) {
    $target$$3 = 15;
  } else if (token.tag === 93) {
    $target$$3 = 16;
  } else if (token.tag === 94) {
    $target$$3 = 16;
  } else if (token.tag === 95) {
    $target$$3 = 16;
  } else if (token.tag === 73) {
    $target$$3 = 17;
  } else if (token.tag === 64) {
    $target$$3 = 17;
  } else if (token.tag === 154) {
    $target$$3 = 18;
  } else if (token.tag === 71) {
    $target$$3 = 18;
  } else if (token.tag === 74) {
    $target$$3 = 18;
  } else if (token.tag === 72) {
    $target$$3 = 18;
  } else if (token.tag === 66) {
    $target$$3 = 19;
  } else if (token.tag === 54) {
    $target$$3 = 19;
  } else if (token.tag === 99) {
    $target$$3 = 19;
  } else if (token.tag === 155) {
    $target$$3 = 20;
  } else if (token.tag === 58) {
    $target$$3 = 20;
  } else if (token.tag === 59) {
    $target$$3 = 20;
  } else if (token.tag === 60) {
    $target$$3 = 20;
  } else if (token.tag === 61) {
    $target$$3 = 20;
  } else if (token.tag === 65) {
    $target$$3 = 20;
  } else if (token.tag === 42) {
    $target$$3 = 21;
  } else if (token.tag === 43) {
    $target$$3 = 21;
  } else if (token.tag === 44) {
    $target$$3 = 21;
  } else if (token.tag === 153) {
    $target$$3 = 21;
  } else if (token.tag === 45) {
    $target$$3 = 21;
  } else if (token.tag === 152) {
    $target$$3 = 21;
  } else if (token.tag === 112) {
    $target$$3 = 21;
  } else if (token.tag === 151) {
    $target$$3 = 21;
  } else if (token.tag === 53) {
    $target$$3 = 21;
  } else if (token.tag === 52) {
    $target$$3 = 21;
  } else if (token.tag === 51) {
    $target$$3 = 21;
  } else if (token.tag === 50) {
    $target$$3 = 21;
  } else if (token.tag === 49) {
    $target$$3 = 21;
  } else if (token.tag === 48) {
    $target$$3 = 21;
  } else if (token.tag === 47) {
    $target$$3 = 21;
  } else if (token.tag === 46) {
    $target$$3 = 21;
  } else if (token.tag === 150) {
    $target$$3 = 21;
  } else if (token.tag === 134) {
    $target$$3 = 21;
  } else if (token.tag === 115) {
    $target$$3 = 21;
  } else if (token.tag === 19) {
    $target$$3 = 21;
  } else if (token.tag === 21) {
    $target$$3 = 21;
  } else if (token.tag === 20) {
    $target$$3 = 21;
  } else if (token.tag === 22) {
    $target$$3 = 21;
  } else if (token.tag === 18) {
    $target$$3 = 21;
  } else if (token.tag === 15) {
    $target$$3 = 21;
  } else if (token.tag === 16) {
    $target$$3 = 21;
  } else if (token.tag === 17) {
    $target$$3 = 21;
  } else if (token.tag === 28) {
    $target$$3 = 21;
  } else if (token.tag === 27) {
    $target$$3 = 21;
  } else if (token.tag === 32) {
    $target$$3 = 21;
  } else if (token.tag === 31) {
    $target$$3 = 21;
  } else if (token.tag === 158) {
    $target$$3 = 21;
  } else if (token.tag === 30) {
    $target$$3 = 21;
  } else if (token.tag === 26) {
    $target$$3 = 21;
  } else if (token.tag === 25) {
    $target$$3 = 21;
  } else if (token.tag === 24) {
    $target$$3 = 21;
  } else if (token.tag === 23) {
    $target$$3 = 21;
  } else if (token.tag === 12) {
    $target$$3 = 21;
  } else if (token.tag === 130) {
    $target$$3 = 21;
  } else if (token.tag === 29) {
    $target$$3 = 21;
  } else if (token.tag === 162) {
    $target$$3 = 21;
  } else if (token.tag === 163) {
    $target$$3 = 21;
  } else if (token.tag === 14) {
    $target$$3 = 21;
  } else if (token.tag === 141) {
    $target$$3 = 21;
  } else if (token.tag === 98) {
    $target$$3 = 21;
  } else if (token.tag === 69) {
    $target$$3 = 21;
  } else if (token.tag === 56) {
    $target$$3 = 21;
  } else if (token.tag === 55) {
    $target$$3 = 21;
  } else if (token.tag === 145) {
    $target$$3 = 21;
  } else if (token.tag === 146) {
    $target$$3 = 21;
  } else if (token.tag === 147) {
    $target$$3 = 21;
  } else if (token.tag === 148) {
    $target$$3 = 21;
  } else if (token.tag === 149) {
    $target$$3 = 21;
  } else if (token.tag === 131) {
    $target$$3 = 21;
  } else if (token.tag === 132) {
    $target$$3 = 21;
  } else if (token.tag === 133) {
    $target$$3 = 21;
  } else if (token.tag === 135) {
    $target$$3 = 21;
  } else if (token.tag === 139) {
    $target$$3 = 21;
  } else if (token.tag === 121) {
    $target$$3 = 21;
  } else if (token.tag === 122) {
    $target$$3 = 21;
  } else if (token.tag === 123) {
    $target$$3 = 21;
  } else if (token.tag === 124) {
    $target$$3 = 21;
  } else if (token.tag === 125) {
    $target$$3 = 21;
  } else if (token.tag === 129) {
    $target$$3 = 21;
  } else if (token.tag === 114) {
    $target$$3 = 21;
  } else if (token.tag === 116) {
    $target$$3 = 21;
  } else if (token.tag === 117) {
    $target$$3 = 21;
  } else if (token.tag === 118) {
    $target$$3 = 21;
  } else if (token.tag === 119) {
    $target$$3 = 21;
  } else if (token.tag === 120) {
    $target$$3 = 21;
  } else if (token.tag === 101) {
    $target$$3 = 21;
  } else if (token.tag === 102) {
    $target$$3 = 21;
  } else if (token.tag === 41) {
    $target$$3 = 21;
  } else if (token.tag === 40) {
    $target$$3 = 21;
  } else if (token.tag === 111) {
    $target$$3 = 21;
  } else if (token.tag === 103) {
    $target$$3 = 21;
  } else if (token.tag === 105) {
    $target$$3 = 21;
  } else if (token.tag === 106) {
    $target$$3 = 21;
  } else if (token.tag === 107) {
    $target$$3 = 21;
  } else if (token.tag === 108) {
    $target$$3 = 21;
  } else if (token.tag === 109) {
    $target$$3 = 21;
  } else if (token.tag === 110) {
    $target$$3 = 21;
  } else if (token.tag === 85) {
    $target$$3 = 21;
  } else if (token.tag === 86) {
    $target$$3 = 21;
  } else if (token.tag === 87) {
    $target$$3 = 21;
  } else if (token.tag === 126) {
    $target$$3 = 21;
  } else if (token.tag === 104) {
    $target$$3 = 21;
  } else if (token.tag === 140) {
    $target$$3 = 21;
  } else if (token.tag === 137) {
    $target$$3 = 21;
  } else if (token.tag === 138) {
    $target$$3 = 21;
  } else if (token.tag === 161) {
    $target$$3 = 21;
  } else if (token.tag === 127) {
    $target$$3 = 21;
  } else if (token.tag === 113) {
    $target$$3 = 21;
  } else if (token.tag === 34) {
    $target$$3 = 21;
  } else if (token.tag === 13) {
    $target$$3 = 21;
  } else if (token.tag === 35) {
    $target$$3 = 21;
  } else if (token.tag === 36) {
    $target$$3 = 21;
  } else if (token.tag === 37) {
    $target$$3 = 21;
  } else if (token.tag === 38) {
    $target$$3 = 21;
  } else if (token.tag === 39) {
    $target$$3 = 21;
  } else if (token.tag === 136) {
    $target$$3 = 22;
  } else if (token.tag === 142) {
    $target$$3 = 23;
  } else if (token.tag === 6) {
    $target$$3 = 24;
  } else if (token.tag === 5) {
    $target$$3 = 24;
  } else if (token.tag === 0) {
    $target$$3 = 24;
  } else if (token.tag === 1) {
    $target$$3 = 24;
  } else if (token.tag === 2) {
    $target$$3 = 24;
  } else if (token.tag === 7) {
    $target$$3 = 25;
  } else if (token.tag === 11) {
    $target$$3 = 26;
  } else if (token.tag === 4) {
    $target$$3 = 26;
  } else if (token.tag === 3) {
    $target$$3 = 27;
  } else if (token.tag === 8) {
    $target$$3 = 28;
  } else if (token.tag === 9) {
    $target$$3 = 29;
  } else if (token.tag === 191) {
    $target$$3 = 30;
  } else if (token.tag === 193) {
    $target$$3 = 31;
  } else if (token.tag === 192) {
    $target$$3 = 31;
  } else if (token.tag === 166) {
    $target$$3 = 31;
  } else if (token.tag === 10) {
    $target$$3 = 32;
  } else {
    $target$$3 = 0;
    s = token.fields[0];
  }

  switch ($target$$3) {
    case 0:
      {
        if (s.length <= 0) {
          return [3, 2, 0];
        } else if (s[0].toUpperCase() === s[0]) {
          return [5, 2, 0];
        } else {
          return [3, 2, 0];
        }
      }

    case 1:
      {
        return [3, 2, 0];
      }

    case 2:
      {
        return [9, 4, 0];
      }

    case 3:
      {
        return [9, 5, 0];
      }

    case 4:
      {
        return [1, 1, 0];
      }

    case 5:
      {
        return [10, 5, 0];
      }

    case 6:
      {
        return [10, 5, 0];
      }

    case 7:
      {
        return [10, 5, 1];
      }

    case 8:
      {
        return [11, 6, 32];
      }

    case 9:
      {
        return [11, 6, 1];
      }

    case 10:
      {
        return [11, 6, 0];
      }

    case 11:
      {
        return [11, 6, 0];
      }

    case 12:
      {
        return [3, 2, 0];
      }

    case 13:
      {
        return [11, 5, 16];
      }

    case 14:
      {
        return [11, 5, 64];
      }

    case 15:
      {
        return [11, 6, 16 | 2];
      }

    case 16:
      {
        return [11, 6, 64 | 2];
      }

    case 17:
      {
        return [11, 6, 0];
      }

    case 18:
      {
        return [11, 6, 2];
      }

    case 19:
      {
        return [11, 6, 0];
      }

    case 20:
      {
        return [11, 6, 2];
      }

    case 21:
      {
        return [1, 1, 0];
      }

    case 22:
      {
        return [1, 1, 0];
      }

    case 23:
      {
        return [1, 1, 0];
      }

    case 24:
      {
        return [8, 8, 0];
      }

    case 25:
      {
        return [7, 8, 0];
      }

    case 26:
      {
        return [0, 8, 0];
      }

    case 27:
      {
        return [2, 10, 0];
      }

    case 28:
      {
        return [2, 9, 0];
      }

    case 29:
      {
        return [4, 3, 0];
      }

    case 30:
      {
        return [1, 1, 0];
      }

    case 31:
      {
        return [4, 3, 0];
      }

    case 32:
      {
        throw new Error("tokenInfo");
      }
  }
}

function TestExpose$$$TokenInfo(tok) {
  return TokenClassifications$$$tokenInfo(tok);
}

const FSharpTokenizerColorState = (0, _Types.declare)(function FSharpTokenizerColorState(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
  this.value__ = arg1 | 0;
  this.Token = arg2;
  this.IfDefSkip = arg3;
  this.String = arg4;
  this.Comment = arg5;
  this.StringInComment = arg6;
  this.VerbatimStringInComment = arg7;
  this.CamlOnly = arg8;
  this.VerbatimString = arg9;
  this.SingleLineComment = arg10;
  this.EndLineThenSkip = arg11;
  this.EndLineThenToken = arg12;
  this.TripleQuoteString = arg13;
  this.TripleQuoteStringInComment = arg14;
  this.InitialState = arg15;
}, _Types.Record);
exports.FSharpTokenizerColorState = FSharpTokenizerColorState;

function LexerStateEncoding$$$computeNextLexState(token$$1, prevLexcont) {
  var $target$$4, s$$1;

  switch (token$$1.tag) {
    case 5:
      $target$$4 = 0;
      s$$1 = token$$1.fields[0];
      break;

    case 6:
      $target$$4 = 0;
      s$$1 = token$$1.fields[0];
      break;

    case 0:
      $target$$4 = 0;
      s$$1 = token$$1.fields[0][2];
      break;

    case 1:
      $target$$4 = 0;
      s$$1 = token$$1.fields[0][2];
      break;

    case 2:
      $target$$4 = 0;
      s$$1 = token$$1.fields[0][2];
      break;

    case 7:
      $target$$4 = 0;
      s$$1 = token$$1.fields[0];
      break;

    case 4:
      $target$$4 = 0;
      s$$1 = token$$1.fields[0];
      break;

    case 3:
      $target$$4 = 0;
      s$$1 = token$$1.fields[0];
      break;

    case 8:
      $target$$4 = 0;
      s$$1 = token$$1.fields[0];
      break;

    case 9:
      $target$$4 = 0;
      s$$1 = token$$1.fields[0];
      break;

    case 10:
      $target$$4 = 0;
      s$$1 = token$$1.fields[0];
      break;

    case 193:
    case 192:
      $target$$4 = 1;
      break;

    default:
      $target$$4 = 2;
  }

  switch ($target$$4) {
    case 0:
      {
        return s$$1;
      }

    case 1:
      {
        return new _ast.LexerWhitespaceContinuation(0, "Token", (0, _ast.LexerWhitespaceContinuation$$get_LexerIfdefStack)(prevLexcont));
      }

    case 2:
      {
        return prevLexcont;
      }
  }
}

const LexerStateEncoding$$$revertToDefaultLexCont = new _ast.LexerWhitespaceContinuation(0, "Token", (0, _Types.L)());
exports.LexerStateEncoding$$$revertToDefaultLexCont = LexerStateEncoding$$$revertToDefaultLexCont;

function LexerStateEncoding$$$resize32(i) {
  return (0, _Long.fromInteger)(i, false, 2);
}

const LexerStateEncoding$$$lexstateNumBits = 4;
exports.LexerStateEncoding$$$lexstateNumBits = LexerStateEncoding$$$lexstateNumBits;
const LexerStateEncoding$$$ncommentsNumBits = 2;
exports.LexerStateEncoding$$$ncommentsNumBits = LexerStateEncoding$$$ncommentsNumBits;
const LexerStateEncoding$$$startPosNumBits = (0, _range.pos$$$get_EncodingSize)();
exports.LexerStateEncoding$$$startPosNumBits = LexerStateEncoding$$$startPosNumBits;
const LexerStateEncoding$$$hardwhiteNumBits = 1;
exports.LexerStateEncoding$$$hardwhiteNumBits = LexerStateEncoding$$$hardwhiteNumBits;
const LexerStateEncoding$$$ifdefstackCountNumBits = 4;
exports.LexerStateEncoding$$$ifdefstackCountNumBits = LexerStateEncoding$$$ifdefstackCountNumBits;
const LexerStateEncoding$$$ifdefstackNumBits = 16;
exports.LexerStateEncoding$$$ifdefstackNumBits = LexerStateEncoding$$$ifdefstackNumBits;
const LexerStateEncoding$$$lexstateStart = 0;
exports.LexerStateEncoding$$$lexstateStart = LexerStateEncoding$$$lexstateStart;
const LexerStateEncoding$$$ncommentsStart = LexerStateEncoding$$$lexstateNumBits;
exports.LexerStateEncoding$$$ncommentsStart = LexerStateEncoding$$$ncommentsStart;
const LexerStateEncoding$$$startPosStart = LexerStateEncoding$$$lexstateNumBits + LexerStateEncoding$$$ncommentsNumBits;
exports.LexerStateEncoding$$$startPosStart = LexerStateEncoding$$$startPosStart;
const LexerStateEncoding$$$hardwhitePosStart = LexerStateEncoding$$$lexstateNumBits + LexerStateEncoding$$$ncommentsNumBits + LexerStateEncoding$$$startPosNumBits;
exports.LexerStateEncoding$$$hardwhitePosStart = LexerStateEncoding$$$hardwhitePosStart;
const LexerStateEncoding$$$ifdefstackCountStart = LexerStateEncoding$$$lexstateNumBits + LexerStateEncoding$$$ncommentsNumBits + LexerStateEncoding$$$startPosNumBits + LexerStateEncoding$$$hardwhiteNumBits;
exports.LexerStateEncoding$$$ifdefstackCountStart = LexerStateEncoding$$$ifdefstackCountStart;
const LexerStateEncoding$$$ifdefstackStart = LexerStateEncoding$$$lexstateNumBits + LexerStateEncoding$$$ncommentsNumBits + LexerStateEncoding$$$startPosNumBits + LexerStateEncoding$$$hardwhiteNumBits + LexerStateEncoding$$$ifdefstackCountNumBits;
exports.LexerStateEncoding$$$ifdefstackStart = LexerStateEncoding$$$ifdefstackStart;
const LexerStateEncoding$$$lexstateMask = (0, _lib.Bits$$$mask64)(LexerStateEncoding$$$lexstateStart, LexerStateEncoding$$$lexstateNumBits);
exports.LexerStateEncoding$$$lexstateMask = LexerStateEncoding$$$lexstateMask;
const LexerStateEncoding$$$ncommentsMask = (0, _lib.Bits$$$mask64)(LexerStateEncoding$$$ncommentsStart, LexerStateEncoding$$$ncommentsNumBits);
exports.LexerStateEncoding$$$ncommentsMask = LexerStateEncoding$$$ncommentsMask;
const LexerStateEncoding$$$startPosMask = (0, _lib.Bits$$$mask64)(LexerStateEncoding$$$startPosStart, LexerStateEncoding$$$startPosNumBits);
exports.LexerStateEncoding$$$startPosMask = LexerStateEncoding$$$startPosMask;
const LexerStateEncoding$$$hardwhitePosMask = (0, _lib.Bits$$$mask64)(LexerStateEncoding$$$hardwhitePosStart, LexerStateEncoding$$$hardwhiteNumBits);
exports.LexerStateEncoding$$$hardwhitePosMask = LexerStateEncoding$$$hardwhitePosMask;
const LexerStateEncoding$$$ifdefstackCountMask = (0, _lib.Bits$$$mask64)(LexerStateEncoding$$$ifdefstackCountStart, LexerStateEncoding$$$ifdefstackCountNumBits);
exports.LexerStateEncoding$$$ifdefstackCountMask = LexerStateEncoding$$$ifdefstackCountMask;
const LexerStateEncoding$$$ifdefstackMask = (0, _lib.Bits$$$mask64)(LexerStateEncoding$$$ifdefstackStart, LexerStateEncoding$$$ifdefstackNumBits);
exports.LexerStateEncoding$$$ifdefstackMask = LexerStateEncoding$$$ifdefstackMask;

function LexerStateEncoding$$$bitOfBool(b) {
  if (b) {
    return 1;
  } else {
    return 0;
  }
}

function LexerStateEncoding$$$boolOfBit(n) {
  return (0, _Long.equals)(n, (0, _Long.fromBits)(1, 0, false));
}

function LexerStateEncoding$$$encodeLexCont(colorState, ncomments, b$$1, ifdefStack, light) {
  let ifdefStackCount = 0;
  let ifdefStackBits = 0;
  (0, _Seq.iterate)(function (ifOrElse) {
    if (ifOrElse[0].tag === 1) {
      ifdefStackBits = ifdefStackBits | 1 << ifdefStackCount;
    }

    ifdefStackCount = ifdefStackCount + 1;
  }, ifdefStack);
  const lexstate = (0, _Long.fromInteger)(colorState, false, 2);
  return (0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseAnd)((0, _Long.op_LeftShift)(lexstate, LexerStateEncoding$$$lexstateStart), LexerStateEncoding$$$lexstateMask), (0, _Long.op_BitwiseAnd)((0, _Long.op_LeftShift)(ncomments, LexerStateEncoding$$$ncommentsStart), LexerStateEncoding$$$ncommentsMask)), (0, _Long.op_BitwiseAnd)((0, _Long.op_LeftShift)(LexerStateEncoding$$$resize32((0, _range.pos$$get_Encoding)(b$$1)), LexerStateEncoding$$$startPosStart), LexerStateEncoding$$$startPosMask)), (0, _Long.op_BitwiseAnd)((0, _Long.op_LeftShift)(LexerStateEncoding$$$resize32(LexerStateEncoding$$$bitOfBool(light)), LexerStateEncoding$$$hardwhitePosStart), LexerStateEncoding$$$hardwhitePosMask)), (0, _Long.op_BitwiseAnd)((0, _Long.op_LeftShift)(LexerStateEncoding$$$resize32(ifdefStackCount), LexerStateEncoding$$$ifdefstackCountStart), LexerStateEncoding$$$ifdefstackCountMask)), (0, _Long.op_BitwiseAnd)((0, _Long.op_LeftShift)(LexerStateEncoding$$$resize32(ifdefStackBits), LexerStateEncoding$$$ifdefstackStart), LexerStateEncoding$$$ifdefstackMask));
}

function LexerStateEncoding$$$decodeLexCont(state) {
  let ifDefs = (0, _Types.L)();
  const ifdefStackCount$$1 = ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_BitwiseAnd)(state, LexerStateEncoding$$$ifdefstackCountMask), LexerStateEncoding$$$ifdefstackCountStart)) | 0;

  if (ifdefStackCount$$1 > 0) {
    const ifdefStack$$1 = ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_BitwiseAnd)(state, LexerStateEncoding$$$ifdefstackMask), LexerStateEncoding$$$ifdefstackStart)) | 0;

    for (let i$$1 = 1; i$$1 <= ifdefStackCount$$1; i$$1++) {
      const bit = ifdefStackCount$$1 - i$$1 | 0;
      const mask = 1 << bit | 0;
      const ifDef = (ifdefStack$$1 & mask) === 0 ? new _ast.LexerIfdefStackEntry(0, "IfDefIf") : new _ast.LexerIfdefStackEntry(1, "IfDefElse");
      ifDefs = (0, _Types.L)([ifDef, _range.range0], ifDefs);
    }
  }

  return [~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_BitwiseAnd)(state, LexerStateEncoding$$$lexstateMask), LexerStateEncoding$$$lexstateStart)), ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_BitwiseAnd)(state, LexerStateEncoding$$$ncommentsMask), LexerStateEncoding$$$ncommentsStart)), (0, _range.pos$$$Decode$$Z524259A4)(~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_BitwiseAnd)(state, LexerStateEncoding$$$startPosMask), LexerStateEncoding$$$startPosStart))), ifDefs, LexerStateEncoding$$$boolOfBit((0, _Long.op_RightShift)((0, _Long.op_BitwiseAnd)(state, LexerStateEncoding$$$hardwhitePosMask), LexerStateEncoding$$$hardwhitePosStart))];
}

function LexerStateEncoding$$$encodeLexInt(lightSyntaxStatus, lexcont) {
  const patternInput = lexcont.tag === 1 ? [3, LexerStateEncoding$$$resize32(lexcont.fields[1]), (0, _range.range$$get_Start)(lexcont.fields[2]), lexcont.fields[0]] : lexcont.tag === 11 ? lexcont.fields[0].tag === 0 ? [12, (0, _Long.fromBits)(0, 0, false), _range.pos0, lexcont.fields[0].fields[0]] : [11, LexerStateEncoding$$$resize32(lexcont.fields[0].fields[1]), (0, _range.range$$get_Start)(lexcont.fields[0].fields[2]), lexcont.fields[0].fields[0]] : lexcont.tag === 2 ? [4, (0, _Long.fromBits)(0, 0, false), (0, _range.range$$get_Start)(lexcont.fields[1]), lexcont.fields[0]] : lexcont.tag === 5 ? [5, LexerStateEncoding$$$resize32(lexcont.fields[1]), (0, _range.range$$get_Start)(lexcont.fields[2]), lexcont.fields[0]] : lexcont.tag === 6 ? [10, LexerStateEncoding$$$resize32(lexcont.fields[1]), (0, _range.range$$get_Start)(lexcont.fields[2]), lexcont.fields[0]] : lexcont.tag === 7 ? [6, LexerStateEncoding$$$resize32(lexcont.fields[1]), (0, _range.range$$get_Start)(lexcont.fields[2]), lexcont.fields[0]] : lexcont.tag === 8 ? [7, LexerStateEncoding$$$resize32(lexcont.fields[1]), (0, _range.range$$get_Start)(lexcont.fields[2]), lexcont.fields[0]] : lexcont.tag === 9 ? [14, LexerStateEncoding$$$resize32(lexcont.fields[1]), (0, _range.range$$get_Start)(lexcont.fields[2]), lexcont.fields[0]] : lexcont.tag === 10 ? [8, (0, _Long.fromBits)(0, 0, false), (0, _range.range$$get_Start)(lexcont.fields[1]), lexcont.fields[0]] : lexcont.tag === 3 ? [9, (0, _Long.fromBits)(0, 0, false), (0, _range.range$$get_Start)(lexcont.fields[1]), lexcont.fields[0]] : lexcont.tag === 4 ? [13, (0, _Long.fromBits)(0, 0, false), (0, _range.range$$get_Start)(lexcont.fields[1]), lexcont.fields[0]] : [1, (0, _Long.fromBits)(0, 0, false), _range.pos0, lexcont.fields[0]];
  return LexerStateEncoding$$$encodeLexCont(patternInput[0], patternInput[1], patternInput[2], patternInput[3], lightSyntaxStatus);
}

function LexerStateEncoding$$$decodeLexInt(state$$1) {
  const patternInput$$1 = LexerStateEncoding$$$decodeLexCont(state$$1);
  const lexcont$$1 = patternInput$$1[0] === 1 ? new _ast.LexerWhitespaceContinuation(0, "Token", patternInput$$1[3]) : patternInput$$1[0] === 3 ? new _ast.LexerWhitespaceContinuation(1, "IfDefSkip", patternInput$$1[3], patternInput$$1[1], (0, _range.mkRange)("file", patternInput$$1[2], patternInput$$1[2])) : patternInput$$1[0] === 4 ? new _ast.LexerWhitespaceContinuation(2, "String", patternInput$$1[3], (0, _range.mkRange)("file", patternInput$$1[2], patternInput$$1[2])) : patternInput$$1[0] === 5 ? new _ast.LexerWhitespaceContinuation(5, "Comment", patternInput$$1[3], patternInput$$1[1], (0, _range.mkRange)("file", patternInput$$1[2], patternInput$$1[2])) : patternInput$$1[0] === 6 ? new _ast.LexerWhitespaceContinuation(7, "StringInComment", patternInput$$1[3], patternInput$$1[1], (0, _range.mkRange)("file", patternInput$$1[2], patternInput$$1[2])) : patternInput$$1[0] === 7 ? new _ast.LexerWhitespaceContinuation(8, "VerbatimStringInComment", patternInput$$1[3], patternInput$$1[1], (0, _range.mkRange)("file", patternInput$$1[2], patternInput$$1[2])) : patternInput$$1[0] === 8 ? new _ast.LexerWhitespaceContinuation(10, "MLOnly", patternInput$$1[3], (0, _range.mkRange)("file", patternInput$$1[2], patternInput$$1[2])) : patternInput$$1[0] === 9 ? new _ast.LexerWhitespaceContinuation(3, "VerbatimString", patternInput$$1[3], (0, _range.mkRange)("file", patternInput$$1[2], patternInput$$1[2])) : patternInput$$1[0] === 10 ? new _ast.LexerWhitespaceContinuation(6, "SingleLineComment", patternInput$$1[3], patternInput$$1[1], (0, _range.mkRange)("file", patternInput$$1[2], patternInput$$1[2])) : patternInput$$1[0] === 11 ? new _ast.LexerWhitespaceContinuation(11, "EndLine", new _ast.LexerEndlineContinuation(1, "Skip", patternInput$$1[3], patternInput$$1[1], (0, _range.mkRange)("file", patternInput$$1[2], patternInput$$1[2]))) : patternInput$$1[0] === 12 ? new _ast.LexerWhitespaceContinuation(11, "EndLine", new _ast.LexerEndlineContinuation(0, "Token", patternInput$$1[3])) : patternInput$$1[0] === 13 ? new _ast.LexerWhitespaceContinuation(4, "TripleQuoteString", patternInput$$1[3], (0, _range.mkRange)("file", patternInput$$1[2], patternInput$$1[2])) : patternInput$$1[0] === 14 ? new _ast.LexerWhitespaceContinuation(9, "TripleQuoteStringInComment", patternInput$$1[3], patternInput$$1[1], (0, _range.mkRange)("file", patternInput$$1[2], patternInput$$1[2])) : new _ast.LexerWhitespaceContinuation(0, "Token", (0, _Types.L)());
  return [patternInput$$1[4], lexcont$$1];
}

function LexerStateEncoding$$$callLexCont(lexcont$$2, args, skip, lexbuf) {
  const argsWithIfDefs = function argsWithIfDefs(ifd$$15) {
    if ((0, _Util.equals)(args.ifdefStack.contents, ifd$$15)) {
      return args;
    } else {
      return new _lexhelp.lexargs(args.defines, new _Types.FSharpRef(ifd$$15), args.resourceManager, args.lightSyntaxStatus, args.errorLogger, args.applyLineDirectives);
    }
  };

  switch (lexcont$$2.tag) {
    case 0:
      {
        const ifd$$16 = lexcont$$2.fields[0];
        return (0, _lex.token)(argsWithIfDefs(ifd$$16), skip, lexbuf);
      }

    case 1:
      {
        const n$$8 = lexcont$$2.fields[1] | 0;
        const m$$11 = lexcont$$2.fields[2];
        const ifd$$17 = lexcont$$2.fields[0];
        return (0, _lex.ifdefSkip)(n$$8, m$$11, argsWithIfDefs(ifd$$17), skip, lexbuf);
      }

    case 2:
      {
        const m$$12 = lexcont$$2.fields[1];
        const ifd$$18 = lexcont$$2.fields[0];
        return (0, _lex.string)((0, _bytes.ByteBuffer$$$Create$$Z524259A4)(100), _lexhelp.defaultStringFinisher, m$$12, argsWithIfDefs(ifd$$18), skip, lexbuf);
      }

    case 5:
      {
        const n$$9 = lexcont$$2.fields[1] | 0;
        const m$$13 = lexcont$$2.fields[2];
        const ifd$$19 = lexcont$$2.fields[0];
        return (0, _lex.comment)(n$$9, m$$13, argsWithIfDefs(ifd$$19), skip, lexbuf);
      }

    case 6:
      {
        const n$$10 = lexcont$$2.fields[1] | 0;
        const m$$14 = lexcont$$2.fields[2];
        const ifd$$20 = lexcont$$2.fields[0];
        return (0, _lex.singleLineComment)(null, n$$10, m$$14, argsWithIfDefs(ifd$$20), skip, lexbuf);
      }

    case 7:
      {
        const n$$11 = lexcont$$2.fields[1] | 0;
        const m$$15 = lexcont$$2.fields[2];
        const ifd$$21 = lexcont$$2.fields[0];
        return (0, _lex.stringInComment)(n$$11, m$$15, argsWithIfDefs(ifd$$21), skip, lexbuf);
      }

    case 8:
      {
        const n$$12 = lexcont$$2.fields[1] | 0;
        const m$$16 = lexcont$$2.fields[2];
        const ifd$$22 = lexcont$$2.fields[0];
        return (0, _lex.verbatimStringInComment)(n$$12, m$$16, argsWithIfDefs(ifd$$22), skip, lexbuf);
      }

    case 9:
      {
        const n$$13 = lexcont$$2.fields[1] | 0;
        const m$$17 = lexcont$$2.fields[2];
        const ifd$$23 = lexcont$$2.fields[0];
        return (0, _lex.tripleQuoteStringInComment)(n$$13, m$$17, argsWithIfDefs(ifd$$23), skip, lexbuf);
      }

    case 10:
      {
        const m$$18 = lexcont$$2.fields[1];
        const ifd$$24 = lexcont$$2.fields[0];
        return (0, _lex.mlOnly)(m$$18, argsWithIfDefs(ifd$$24), skip, lexbuf);
      }

    case 3:
      {
        const m$$19 = lexcont$$2.fields[1];
        const ifd$$25 = lexcont$$2.fields[0];
        return (0, _lex.verbatimString)((0, _bytes.ByteBuffer$$$Create$$Z524259A4)(100), _lexhelp.defaultStringFinisher, m$$19, argsWithIfDefs(ifd$$25), skip, lexbuf);
      }

    case 4:
      {
        const m$$20 = lexcont$$2.fields[1];
        const ifd$$26 = lexcont$$2.fields[0];
        return (0, _lex.tripleQuoteString)((0, _bytes.ByteBuffer$$$Create$$Z524259A4)(100), _lexhelp.defaultStringFinisher, m$$20, argsWithIfDefs(ifd$$26), skip, lexbuf);
      }

    default:
      {
        const cont = lexcont$$2.fields[0];
        return (0, _lex.endline)(cont, args, skip, lexbuf);
      }
  }
}

const SingleLineTokenState = (0, _Types.declare)(function SingleLineTokenState(arg1, arg2, arg3) {
  this.value__ = arg1 | 0;
  this.BeforeHash = arg2;
  this.NoFurtherMatchPossible = arg3;
}, _Types.Record);
exports.SingleLineTokenState = SingleLineTokenState;
const FSharpLineTokenizer = (0, _Types.declare)(function FSharpLineTokenizer(lexbuf$$1, maxLength, filename, lexArgsLightOn, lexArgsLightOff) {
  const $this$$1 = this;
  $this$$1.lexbuf = lexbuf$$1;
  $this$$1.maxLength = maxLength;
  $this$$1.lexArgsLightOn = lexArgsLightOn;
  $this$$1.lexArgsLightOff = lexArgsLightOff;
  $this$$1.skip = false;
  $this$$1.singleLineTokenState = 0;

  if (filename != null) {
    const value = filename;
    $this$$1.fsx = (0, _CompileOps.IsScript)(value);
  } else {
    $this$$1.fsx = false;
  }

  $this$$1.tokenStack = (0, _primParsing.Stack$00601$$$$002Ector$$Z524259A4)(31);

  if (filename != null) {
    const value$$1 = filename;
    (0, _lexhelp.resetLexbufPos)(value$$1, $this$$1.lexbuf);
  } else {
    (0, _primLexing.LexBuffer$00601$$set_EndPos$$Z5C04B2F)($this$$1.lexbuf, (0, _primLexing.Position$$$get_Empty)());
  }
});
exports.FSharpLineTokenizer = FSharpLineTokenizer;

function FSharpLineTokenizer$$$$002Ector$$Z37EF3A9D(lexbuf$$1, maxLength, filename, lexArgsLightOn, lexArgsLightOff) {
  return this != null ? FSharpLineTokenizer.call(this, lexbuf$$1, maxLength, filename, lexArgsLightOn, lexArgsLightOff) : new FSharpLineTokenizer(lexbuf$$1, maxLength, filename, lexArgsLightOn, lexArgsLightOff);
}

function FSharpLineTokenizer$$ScanToken$$Z524259C1(x, lexintInitial) {
  const unwindBP = (0, _ErrorLogger.PushThreadBuildPhaseUntilUnwind)(new _ErrorLogger.BuildPhase(3, "Parse"));

  try {
    const unwindEL = (0, _ErrorLogger.PushErrorLoggerPhaseUntilUnwind)(function (_arg1) {
      return _ErrorLogger.DiscardErrorsLogger;
    });

    try {
      const patternInput$$2 = LexerStateEncoding$$$decodeLexInt(lexintInitial);
      const lightSyntaxStatus$$1 = (0, _lexhelp.LightSyntaxStatus$$$$002Ector$$8EAA2C0)(patternInput$$2[0], false);
      const lexargs = patternInput$$2[0] ? x.lexArgsLightOn : x.lexArgsLightOff;

      const GetTokenWithPosition = function GetTokenWithPosition(lexcontInitial$$1) {
        var opstr$$19, opstr$$17, opstr$$15, opstr$$13, opstr$$11, opstr$$9, opstr$$7, opstr$$5, opstr$$3, opstr$$1, m$$25, lineStr$$4, cont$$5, m$$23, lineStr$$2, cont$$3, m$$21, lineStr, cont$$1;

        const ColumnsOfCurrentToken = function ColumnsOfCurrentToken() {
          var mx, mx$$1;
          const leftp = (0, _primLexing.LexBuffer$00601$$get_StartPos)(x.lexbuf);
          const rightp = (0, _primLexing.LexBuffer$00601$$get_EndPos)(x.lexbuf);
          const leftc = (0, _primLexing.Position$$get_Column)(leftp) | 0;
          const rightc = (x.maxLength != null ? (mx = x.maxLength | 0, rightp.Line > leftp.Line) ? (mx$$1 = x.maxLength | 0, mx$$1) : (0, _primLexing.Position$$get_Column)(rightp) : (0, _primLexing.Position$$get_Column)(rightp)) | 0;
          const rightc$$1 = rightc - 1 | 0;
          return [leftc, rightc$$1];
        };

        try {
          if ((0, _primParsing.Stack$00601$$get_Count)(x.tokenStack) > 0) {
            return [true, (0, _primParsing.Stack$00601$$Pop)(x.tokenStack)];
          } else {
            const token$$2 = LexerStateEncoding$$$callLexCont(lexcontInitial$$1, lexargs, x.skip, x.lexbuf);
            const patternInput$$3 = ColumnsOfCurrentToken();
            var $target$$5, cont$$2, lineStr$$1, m$$22;

            if (token$$2.tag === 0) {
              if (m$$21 = token$$2.fields[0][0], (lineStr = token$$2.fields[0][1], (cont$$1 = token$$2.fields[0][2], lineStr !== ""))) {
                $target$$5 = 0;
                cont$$2 = token$$2.fields[0][2];
                lineStr$$1 = token$$2.fields[0][1];
                m$$22 = token$$2.fields[0][0];
              } else {
                $target$$5 = 1;
              }
            } else {
              $target$$5 = 1;
            }

            switch ($target$$5) {
              case 0:
                {
                  return [false, FSharpLineTokenizer$$processHashIfLine(x, (0, _range.range$$get_StartColumn)(m$$22), lineStr$$1, cont$$2)];
                }

              case 1:
                {
                  var $target$$6, cont$$4, lineStr$$3, m$$24;

                  if (token$$2.tag === 1) {
                    if (m$$23 = token$$2.fields[0][0], (lineStr$$2 = token$$2.fields[0][1], (cont$$3 = token$$2.fields[0][2], lineStr$$2 !== ""))) {
                      $target$$6 = 0;
                      cont$$4 = token$$2.fields[0][2];
                      lineStr$$3 = token$$2.fields[0][1];
                      m$$24 = token$$2.fields[0][0];
                    } else {
                      $target$$6 = 1;
                    }
                  } else {
                    $target$$6 = 1;
                  }

                  switch ($target$$6) {
                    case 0:
                      {
                        return [false, FSharpLineTokenizer$$processHashEndElse(x, (0, _range.range$$get_StartColumn)(m$$24), lineStr$$3, 4, cont$$4)];
                      }

                    case 1:
                      {
                        var $target$$7, cont$$6, lineStr$$5, m$$26;

                        if (token$$2.tag === 2) {
                          if (m$$25 = token$$2.fields[0][0], (lineStr$$4 = token$$2.fields[0][1], (cont$$5 = token$$2.fields[0][2], lineStr$$4 !== ""))) {
                            $target$$7 = 0;
                            cont$$6 = token$$2.fields[0][2];
                            lineStr$$5 = token$$2.fields[0][1];
                            m$$26 = token$$2.fields[0][0];
                          } else {
                            $target$$7 = 1;
                          }
                        } else {
                          $target$$7 = 1;
                        }

                        switch ($target$$7) {
                          case 0:
                            {
                              return [false, FSharpLineTokenizer$$processHashEndElse(x, (0, _range.range$$get_StartColumn)(m$$26), lineStr$$5, 5, cont$$6)];
                            }

                          case 1:
                            {
                              var $target$$8, raw, s$$2, afterOp, greaters, opstr;

                              if (token$$2.tag === 156) {
                                $target$$8 = 0;
                                raw = token$$2.fields[0][1];
                                s$$2 = token$$2.fields[0][0];
                              } else if (token$$2.tag === 188) {
                                const activePatternResult59340 = (0, _LexFilter.$007CTyparsCloseOp$007C_$007C)(token$$2.fields[0]);

                                if (activePatternResult59340 != null) {
                                  $target$$8 = 1;
                                  afterOp = activePatternResult59340[1];
                                  greaters = activePatternResult59340[0];
                                  opstr = token$$2.fields[0];
                                } else {
                                  $target$$8 = 2;
                                }
                              } else {
                                $target$$8 = 2;
                              }

                              switch ($target$$8) {
                                case 0:
                                  {
                                    FSharpLineTokenizer$$delayToken$$Z217B7B50(x, new _pars.token(77, "DOT"), patternInput$$3[1], patternInput$$3[1]);
                                    return [false, [new _pars.token(155, "RQUOTE", [s$$2, raw]), patternInput$$3[0], patternInput$$3[1] - 1]];
                                  }

                                case 1:
                                  {
                                    if (afterOp != null) {
                                      const tok$$1 = afterOp;
                                      FSharpLineTokenizer$$delayToken$$Z217B7B50(x, tok$$1, patternInput$$3[0] + greaters.length, patternInput$$3[1]);
                                    }

                                    for (let i$$2 = greaters.length - 1; i$$2 >= 1; i$$2--) {
                                      FSharpLineTokenizer$$delayToken$$Z217B7B50(x, greaters[i$$2](false), patternInput$$3[0] + i$$2, patternInput$$3[1] - opstr.length + i$$2 + 1);
                                    }

                                    return [false, [greaters[0](false), patternInput$$3[0], patternInput$$3[1] - opstr.length + 1]];
                                  }

                                case 2:
                                  {
                                    var $target$$9, opstr$$2;

                                    if (token$$2.tag === 189) {
                                      if (opstr$$1 = token$$2.fields[0], (0, _String.startsWith)(opstr$$1, ".", 4)) {
                                        $target$$9 = 0;
                                        opstr$$2 = token$$2.fields[0];
                                      } else {
                                        $target$$9 = 1;
                                      }
                                    } else {
                                      $target$$9 = 1;
                                    }

                                    switch ($target$$9) {
                                      case 0:
                                        {
                                          FSharpLineTokenizer$$delayToken$$Z217B7B50(x, new _pars.token(189, "INFIX_STAR_STAR_OP", opstr$$2.substr(1)), patternInput$$3[0] + 1, patternInput$$3[1]);
                                          return [false, [new _pars.token(77, "DOT"), patternInput$$3[0], patternInput$$3[0]]];
                                        }

                                      case 1:
                                        {
                                          var $target$$10, opstr$$4;

                                          if (token$$2.tag === 182) {
                                            if (opstr$$3 = token$$2.fields[0], (0, _String.startsWith)(opstr$$3, ".", 4)) {
                                              $target$$10 = 0;
                                              opstr$$4 = token$$2.fields[0];
                                            } else {
                                              $target$$10 = 1;
                                            }
                                          } else {
                                            $target$$10 = 1;
                                          }

                                          switch ($target$$10) {
                                            case 0:
                                              {
                                                FSharpLineTokenizer$$delayToken$$Z217B7B50(x, new _pars.token(182, "PLUS_MINUS_OP", opstr$$4.substr(1)), patternInput$$3[0] + 1, patternInput$$3[1]);
                                                return [false, [new _pars.token(77, "DOT"), patternInput$$3[0], patternInput$$3[0]]];
                                              }

                                            case 1:
                                              {
                                                var $target$$11, opstr$$6;

                                                if (token$$2.tag === 188) {
                                                  if (opstr$$5 = token$$2.fields[0], (0, _String.startsWith)(opstr$$5, ".", 4)) {
                                                    $target$$11 = 0;
                                                    opstr$$6 = token$$2.fields[0];
                                                  } else {
                                                    $target$$11 = 1;
                                                  }
                                                } else {
                                                  $target$$11 = 1;
                                                }

                                                switch ($target$$11) {
                                                  case 0:
                                                    {
                                                      FSharpLineTokenizer$$delayToken$$Z217B7B50(x, new _pars.token(188, "INFIX_COMPARE_OP", opstr$$6.substr(1)), patternInput$$3[0] + 1, patternInput$$3[1]);
                                                      return [false, [new _pars.token(77, "DOT"), patternInput$$3[0], patternInput$$3[0]]];
                                                    }

                                                  case 1:
                                                    {
                                                      var $target$$12, opstr$$8;

                                                      if (token$$2.tag === 187) {
                                                        if (opstr$$7 = token$$2.fields[0], (0, _String.startsWith)(opstr$$7, ".", 4)) {
                                                          $target$$12 = 0;
                                                          opstr$$8 = token$$2.fields[0];
                                                        } else {
                                                          $target$$12 = 1;
                                                        }
                                                      } else {
                                                        $target$$12 = 1;
                                                      }

                                                      switch ($target$$12) {
                                                        case 0:
                                                          {
                                                            FSharpLineTokenizer$$delayToken$$Z217B7B50(x, new _pars.token(187, "INFIX_AT_HAT_OP", opstr$$8.substr(1)), patternInput$$3[0] + 1, patternInput$$3[1]);
                                                            return [false, [new _pars.token(77, "DOT"), patternInput$$3[0], patternInput$$3[0]]];
                                                          }

                                                        case 1:
                                                          {
                                                            var $target$$13, opstr$$10;

                                                            if (token$$2.tag === 186) {
                                                              if (opstr$$9 = token$$2.fields[0], (0, _String.startsWith)(opstr$$9, ".", 4)) {
                                                                $target$$13 = 0;
                                                                opstr$$10 = token$$2.fields[0];
                                                              } else {
                                                                $target$$13 = 1;
                                                              }
                                                            } else {
                                                              $target$$13 = 1;
                                                            }

                                                            switch ($target$$13) {
                                                              case 0:
                                                                {
                                                                  FSharpLineTokenizer$$delayToken$$Z217B7B50(x, new _pars.token(186, "INFIX_BAR_OP", opstr$$10.substr(1)), patternInput$$3[0] + 1, patternInput$$3[1]);
                                                                  return [false, [new _pars.token(77, "DOT"), patternInput$$3[0], patternInput$$3[0]]];
                                                                }

                                                              case 1:
                                                                {
                                                                  var $target$$14, opstr$$12;

                                                                  if (token$$2.tag === 185) {
                                                                    if (opstr$$11 = token$$2.fields[0], (0, _String.startsWith)(opstr$$11, ".", 4)) {
                                                                      $target$$14 = 0;
                                                                      opstr$$12 = token$$2.fields[0];
                                                                    } else {
                                                                      $target$$14 = 1;
                                                                    }
                                                                  } else {
                                                                    $target$$14 = 1;
                                                                  }

                                                                  switch ($target$$14) {
                                                                    case 0:
                                                                      {
                                                                        FSharpLineTokenizer$$delayToken$$Z217B7B50(x, new _pars.token(185, "PREFIX_OP", opstr$$12.substr(1)), patternInput$$3[0] + 1, patternInput$$3[1]);
                                                                        return [false, [new _pars.token(77, "DOT"), patternInput$$3[0], patternInput$$3[0]]];
                                                                      }

                                                                    case 1:
                                                                      {
                                                                        var $target$$15, opstr$$14;

                                                                        if (token$$2.tag === 184) {
                                                                          if (opstr$$13 = token$$2.fields[0], (0, _String.startsWith)(opstr$$13, ".", 4)) {
                                                                            $target$$15 = 0;
                                                                            opstr$$14 = token$$2.fields[0];
                                                                          } else {
                                                                            $target$$15 = 1;
                                                                          }
                                                                        } else {
                                                                          $target$$15 = 1;
                                                                        }

                                                                        switch ($target$$15) {
                                                                          case 0:
                                                                            {
                                                                              FSharpLineTokenizer$$delayToken$$Z217B7B50(x, new _pars.token(184, "INFIX_STAR_DIV_MOD_OP", opstr$$14.substr(1)), patternInput$$3[0] + 1, patternInput$$3[1]);
                                                                              return [false, [new _pars.token(77, "DOT"), patternInput$$3[0], patternInput$$3[0]]];
                                                                            }

                                                                          case 1:
                                                                            {
                                                                              var $target$$16, opstr$$16;

                                                                              if (token$$2.tag === 183) {
                                                                                if (opstr$$15 = token$$2.fields[0], (0, _String.startsWith)(opstr$$15, ".", 4)) {
                                                                                  $target$$16 = 0;
                                                                                  opstr$$16 = token$$2.fields[0];
                                                                                } else {
                                                                                  $target$$16 = 1;
                                                                                }
                                                                              } else {
                                                                                $target$$16 = 1;
                                                                              }

                                                                              switch ($target$$16) {
                                                                                case 0:
                                                                                  {
                                                                                    FSharpLineTokenizer$$delayToken$$Z217B7B50(x, new _pars.token(183, "INFIX_AMP_OP", opstr$$16.substr(1)), patternInput$$3[0] + 1, patternInput$$3[1]);
                                                                                    return [false, [new _pars.token(77, "DOT"), patternInput$$3[0], patternInput$$3[0]]];
                                                                                  }

                                                                                case 1:
                                                                                  {
                                                                                    var $target$$17, opstr$$18;

                                                                                    if (token$$2.tag === 181) {
                                                                                      if (opstr$$17 = token$$2.fields[0], (0, _String.startsWith)(opstr$$17, ".", 4)) {
                                                                                        $target$$17 = 0;
                                                                                        opstr$$18 = token$$2.fields[0];
                                                                                      } else {
                                                                                        $target$$17 = 1;
                                                                                      }
                                                                                    } else {
                                                                                      $target$$17 = 1;
                                                                                    }

                                                                                    switch ($target$$17) {
                                                                                      case 0:
                                                                                        {
                                                                                          FSharpLineTokenizer$$delayToken$$Z217B7B50(x, new _pars.token(181, "ADJACENT_PREFIX_OP", opstr$$18.substr(1)), patternInput$$3[0] + 1, patternInput$$3[1]);
                                                                                          return [false, [new _pars.token(77, "DOT"), patternInput$$3[0], patternInput$$3[0]]];
                                                                                        }

                                                                                      case 1:
                                                                                        {
                                                                                          var $target$$18, opstr$$20;

                                                                                          if (token$$2.tag === 180) {
                                                                                            if (opstr$$19 = token$$2.fields[0], (0, _String.startsWith)(opstr$$19, ".", 4)) {
                                                                                              $target$$18 = 0;
                                                                                              opstr$$20 = token$$2.fields[0];
                                                                                            } else {
                                                                                              $target$$18 = 1;
                                                                                            }
                                                                                          } else {
                                                                                            $target$$18 = 1;
                                                                                          }

                                                                                          switch ($target$$18) {
                                                                                            case 0:
                                                                                              {
                                                                                                FSharpLineTokenizer$$delayToken$$Z217B7B50(x, new _pars.token(180, "FUNKY_OPERATOR_NAME", opstr$$20.substr(1)), patternInput$$3[0] + 1, patternInput$$3[1]);
                                                                                                return [false, [new _pars.token(77, "DOT"), patternInput$$3[0], patternInput$$3[0]]];
                                                                                              }

                                                                                            case 1:
                                                                                              {
                                                                                                return [false, [token$$2, patternInput$$3[0], patternInput$$3[1]]];
                                                                                              }
                                                                                          }
                                                                                        }
                                                                                    }
                                                                                  }
                                                                              }
                                                                            }
                                                                        }
                                                                      }
                                                                  }
                                                                }
                                                            }
                                                          }
                                                      }
                                                    }
                                                }
                                              }
                                          }
                                        }
                                    }
                                  }
                              }
                            }
                        }
                      }
                  }
                }
            }
          }
        } catch (e) {
          return [false, [new _pars.token(10, "EOF", LexerStateEncoding$$$revertToDefaultLexCont), 0, 0]];
        }
      };

      const patternInput$$4 = GetTokenWithPosition(patternInput$$2[1]);
      const token$$3 = patternInput$$4[1][0];
      const rightc$$3 = patternInput$$4[1][2] | 0;
      const leftc$$2 = patternInput$$4[1][1] | 0;
      let patternInput$$6;

      switch (token$$3.tag) {
        case 10:
          {
            const lexcont$$3 = token$$3.fields[0];
            patternInput$$6 = [null, lexcont$$3, 0];
            break;
          }

        case 11:
          {
            patternInput$$6 = [null, LexerStateEncoding$$$revertToDefaultLexCont, 0];
            break;
          }

        default:
          {
            const patternInput$$5 = TokenClassifications$$$tokenInfo(token$$3);
            const lexcontFinal = patternInput$$4[0] ? patternInput$$2[1] : LexerStateEncoding$$$computeNextLexState(token$$3, patternInput$$2[1]);
            const tokenTag = (0, _pars.tagOfToken)(token$$3) | 0;
            const fullMatchedLength = (0, _primLexing.LexBuffer$00601$$get_EndPos)(x.lexbuf).AbsoluteOffset - (0, _primLexing.LexBuffer$00601$$get_StartPos)(x.lexbuf).AbsoluteOffset | 0;
            const tokenData = new FSharpTokenInfo(leftc$$2, rightc$$3, patternInput$$5[0], patternInput$$5[1], patternInput$$5[2], tokenTag, (0, _pars.token_to_string)(token$$3), fullMatchedLength);
            patternInput$$6 = [tokenData, lexcontFinal, tokenTag];
          }
      }

      const FinalState = function FinalState(lexcontFinal$$2) {
        return LexerStateEncoding$$$encodeLexInt((0, _lexhelp.LightSyntaxStatus$$get_Status)(lightSyntaxStatus$$1), lexcontFinal$$2);
      };

      let patternInput$$8;
      const lexintFinal = FinalState(patternInput$$6[1]);
      const matchValue$$1 = [patternInput$$6[0], x.singleLineTokenState, (0, _pars.tokenTagToTokenId)(patternInput$$6[2])];
      var $target$$19, tokenData$$1;

      if (matchValue$$1[0] != null) {
        if (matchValue$$1[1] === 0) {
          if (matchValue$$1[2].tag === 88) {
            $target$$19 = 0;
            tokenData$$1 = matchValue$$1[0];
          } else if (matchValue$$1[2].tag === 4) {
            $target$$19 = 1;
          } else {
            $target$$19 = 2;
          }
        } else {
          $target$$19 = 2;
        }
      } else if (matchValue$$1[1] === 0) {
        if (matchValue$$1[2].tag === 4) {
          $target$$19 = 1;
        } else {
          $target$$19 = 2;
        }
      } else {
        $target$$19 = 2;
      }

      switch ($target$$19) {
        case 0:
          {
            x.singleLineTokenState = 1;
            const patternInput$$7 = GetTokenWithPosition(patternInput$$2[1]);
            const rightc$$4 = patternInput$$7[1][2] | 0;
            const nextToken = patternInput$$7[1][0];

            if (nextToken.tag === 190) {
              const possibleMetacommand = nextToken.fields[0];
              const matchValue$$2 = [x.fsx, possibleMetacommand];
              var $target$$20;

              if (matchValue$$2[0]) {
                if (matchValue$$2[1] === "r") {
                  $target$$20 = 0;
                } else if (matchValue$$2[1] === "reference") {
                  $target$$20 = 0;
                } else if (matchValue$$2[1] === "I") {
                  $target$$20 = 0;
                } else if (matchValue$$2[1] === "load") {
                  $target$$20 = 0;
                } else if (matchValue$$2[1] === "time") {
                  $target$$20 = 0;
                } else if (matchValue$$2[1] === "dbgbreak") {
                  $target$$20 = 0;
                } else if (matchValue$$2[1] === "cd") {
                  $target$$20 = 0;
                } else if (matchValue$$2[1] === "silentCd") {
                  $target$$20 = 0;
                } else if (matchValue$$2[1] === "q") {
                  $target$$20 = 0;
                } else if (matchValue$$2[1] === "quit") {
                  $target$$20 = 0;
                } else if (matchValue$$2[1] === "help") {
                  $target$$20 = 0;
                } else if (matchValue$$2[1] === "nowarn") {
                  $target$$20 = 0;
                } else {
                  $target$$20 = 1;
                }
              } else if (matchValue$$2[1] === "nowarn") {
                $target$$20 = 0;
              } else {
                $target$$20 = 1;
              }

              switch ($target$$20) {
                case 0:
                  {
                    const lexcontFinal$$3 = patternInput$$7[0] ? patternInput$$2[1] : LexerStateEncoding$$$computeNextLexState(token$$3, patternInput$$2[1]);
                    const tokenData$$2 = new FSharpTokenInfo(tokenData$$1.LeftColumn, rightc$$4, 8, 1, 0, tokenData$$1.Tag, tokenData$$1.TokenName, tokenData$$1.FullMatchedLength);
                    const lexintFinal$$1 = FinalState(lexcontFinal$$3);
                    patternInput$$8 = [tokenData$$2, lexintFinal$$1];
                    break;
                  }

                case 1:
                  {
                    patternInput$$8 = [patternInput$$6[0], lexintFinal];
                    break;
                  }
              }
            } else {
              patternInput$$8 = [patternInput$$6[0], lexintFinal];
            }

            break;
          }

        case 1:
          {
            patternInput$$8 = [patternInput$$6[0], lexintFinal];
            break;
          }

        case 2:
          {
            x.singleLineTokenState = 1;
            patternInput$$8 = [patternInput$$6[0], lexintFinal];
            break;
          }
      }

      return [patternInput$$8[0], patternInput$$8[1]];
    } finally {
      if ((0, _Util.isDisposable)(unwindEL)) {
        unwindEL.Dispose();
      }
    }
  } finally {
    if ((0, _Util.isDisposable)(unwindBP)) {
      unwindBP.Dispose();
    }
  }
}

function FSharpLineTokenizer$$$ColorStateOfLexState$$Z524259C1(lexState) {
  const patternInput$$9 = LexerStateEncoding$$$decodeLexCont(lexState);
  return patternInput$$9[0] | 0;
}

function FSharpLineTokenizer$$$LexStateOfColorState$$1EE8EDB9(colorState$$1) {
  const ncomments$$1 = (0, _Long.fromBits)(0, 0, false);
  const position = _range.pos0;
  const ifdefStack$$3 = (0, _Types.L)();
  const light$$1 = true;
  return LexerStateEncoding$$$encodeLexCont(colorState$$1, ncomments$$1, position, ifdefStack$$3, light$$1);
}

function FSharpLineTokenizer$$delayToken$$Z217B7B50(this$, tok_0, tok_1, tok_2) {
  const tok$$2 = [tok_0, tok_1, tok_2];
  (0, _primParsing.Stack$00601$$Push$$2B595)(this$.tokenStack, tok$$2);
}

function FSharpLineTokenizer$$processDirective(this$$$1, str, directiveLength, delay, cont$$7) {
  const hashIdx = str.indexOf("#") | 0;

  if (hashIdx !== 0) {
    delay([new _pars.token(4, "WHITESPACE", cont$$7), 0, hashIdx - 1]);
  }

  delay([new _pars.token(0, "HASH_IF", [_range.range0, "", cont$$7]), hashIdx, hashIdx + directiveLength]);
  return hashIdx + directiveLength + 1 | 0;
}

function FSharpLineTokenizer$$processWhiteAndComment(this$$$2, str$$1, offset, delay$$1, cont$$8) {
  const rest = str$$1.substr(offset, str$$1.length - offset);
  const comment = rest.indexOf("/") | 0;
  const spaceLength = (comment === -1 ? rest.length : comment) | 0;

  if (spaceLength > 0) {
    delay$$1([new _pars.token(4, "WHITESPACE", cont$$8), offset, offset + spaceLength - 1]);
  }

  if (comment !== -1) {
    delay$$1([new _pars.token(3, "COMMENT", cont$$8), offset + comment, offset + rest.length - 1]);
  }
}

function FSharpLineTokenizer$$processDirectiveLine(this$$$3, ofs$$3, f) {
  const delayed = [];
  f(function (tupledArg) {
    delayed.push([tupledArg[0], tupledArg[1] + ofs$$3, tupledArg[2] + ofs$$3]);
  });

  for (let i$$3 = (0, _Util.count)(delayed) - 1; i$$3 >= 1; i$$3--) {
    const tupledArg$$1 = delayed[i$$3];
    FSharpLineTokenizer$$delayToken$$Z217B7B50(this$$$3, tupledArg$$1[0], tupledArg$$1[1], tupledArg$$1[2]);
  }

  return delayed[0];
}

function FSharpLineTokenizer$$processHashEndElse(this$$$4, ofs$$4, str$$2, length$$2, cont$$9) {
  return FSharpLineTokenizer$$processDirectiveLine(this$$$4, ofs$$4, function f$$1(delay$$2) {
    const offset$$1 = FSharpLineTokenizer$$processDirective(this$$$4, str$$2, length$$2, delay$$2, cont$$9) | 0;
    FSharpLineTokenizer$$processWhiteAndComment(this$$$4, str$$2, offset$$1, delay$$2, cont$$9);
  });
}

function FSharpLineTokenizer$$processHashIfLine(this$$$5, ofs$$5, str$$3, cont$$10) {
  const With = function With(n$$14, m$$27) {
    if (n$$14 < 0) {
      return m$$27 | 0;
    } else {
      return n$$14 | 0;
    }
  };

  return FSharpLineTokenizer$$processDirectiveLine(this$$$5, ofs$$5, function f$$2(delay$$3) {
    const offset$$2 = FSharpLineTokenizer$$processDirective(this$$$5, str$$3, 2, delay$$3, cont$$10) | 0;
    let patternInput$$10;
    const w = str$$3.substr(offset$$2);
    const r = (0, _String.trimStart)(w, " ", "\t");
    patternInput$$10 = [r, w.length - r.length];
    const beforeIdent = offset$$2 + patternInput$$10[1] | 0;
    const identLength = With((0, _String.indexOfAny)(patternInput$$10[0], ["/", "\t", " "]), patternInput$$10[0].length) | 0;
    delay$$3([new _pars.token(4, "WHITESPACE", cont$$10), offset$$2, beforeIdent - 1]);
    delay$$3([new _pars.token(190, "IDENT", patternInput$$10[0].substr(0, identLength)), beforeIdent, beforeIdent + identLength - 1]);
    const offset$$3 = beforeIdent + identLength | 0;
    FSharpLineTokenizer$$processWhiteAndComment(this$$$5, str$$3, offset$$3, delay$$3, cont$$10);
  });
}

const FSharpSourceTokenizer = (0, _Types.declare)(function FSharpSourceTokenizer(defineConstants, filename$$1) {
  const $this$$2 = this;
  $this$$2.filename = filename$$1;
  const lexResourceManager = (0, _lexhelp.LexResourceManager$$$$002Ector)();
  $this$$2.lexArgsLightOn = (0, _lexhelp.mkLexargs)($this$$2.filename, defineConstants, (0, _lexhelp.LightSyntaxStatus$$$$002Ector$$8EAA2C0)(true, false), lexResourceManager, new _Types.FSharpRef((0, _Types.L)()), _ErrorLogger.DiscardErrorsLogger);
  $this$$2.lexArgsLightOff = (0, _lexhelp.mkLexargs)($this$$2.filename, defineConstants, (0, _lexhelp.LightSyntaxStatus$$$$002Ector$$8EAA2C0)(false, false), lexResourceManager, new _Types.FSharpRef((0, _Types.L)()), _ErrorLogger.DiscardErrorsLogger);
});
exports.FSharpSourceTokenizer = FSharpSourceTokenizer;

function FSharpSourceTokenizer$$$$002Ector$$5B59003F(defineConstants, filename$$1) {
  return this != null ? FSharpSourceTokenizer.call(this, defineConstants, filename$$1) : new FSharpSourceTokenizer(defineConstants, filename$$1);
}

function FSharpSourceTokenizer$$CreateLineTokenizer$$Z721C83C5(this$$$6, lineText) {
  const lexbuf$$2 = (0, _UnicodeLexing.StringAsLexbuf)(lineText);
  return FSharpLineTokenizer$$$$002Ector$$Z37EF3A9D(lexbuf$$2, lineText.length, this$$$6.filename, this$$$6.lexArgsLightOn, this$$$6.lexArgsLightOff);
}

function FSharpSourceTokenizer$$CreateBufferTokenizer$$Z3DD8C9DD(this$$$7, bufferFiller) {
  const lexbuf$$3 = (0, _UnicodeLexing.FunctionAsLexbuf)(bufferFiller);
  return FSharpLineTokenizer$$$$002Ector$$Z37EF3A9D(lexbuf$$3, null, this$$$7.filename, this$$$7.lexArgsLightOn, this$$$7.lexArgsLightOff);
}

function Keywords$$$QuoteIdentifierIfNeeded(s$$4) {
  return (0, _lexhelp.Keywords$$$QuoteIdentifierIfNeeded)(s$$4);
}

function Keywords$$$NormalizeIdentifierBackticks(s$$5) {
  return (0, _lexhelp.Keywords$$$NormalizeIdentifierBackticks)(s$$5);
}

const Keywords$$$KeywordsWithDescription = _lexhelp.Keywords$$$keywordsWithDescription;
exports.Keywords$$$KeywordsWithDescription = Keywords$$$KeywordsWithDescription;