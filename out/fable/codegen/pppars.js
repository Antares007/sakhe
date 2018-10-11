"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doNothing = doNothing;
exports.fail = fail;
exports.tagOfToken = tagOfToken;
exports.tokenTagToTokenId = tokenTagToTokenId;
exports.prodIdxToNonTerminal = prodIdxToNonTerminal;
exports.token_to_string = token_to_string;
exports._fsyacc_dataOfToken = _fsyacc_dataOfToken;
exports._fsyacc_reductions = _fsyacc_reductions;
exports.tables = tables;
exports.engine = engine;
exports.start = start;
exports._fsyacc_immediateActions = exports._fsyacc_productionToNonTerminalTable = exports._fsyacc_reductionSymbolCounts = exports._fsyacc_actionTableRowOffsets = exports._fsyacc_actionTableElements = exports._fsyacc_action_rows = exports._fsyacc_stateToProdIdxsTableRowOffsets = exports._fsyacc_stateToProdIdxsTableElements = exports._fsyacc_sparseGotoTableRowOffsets = exports._fsyacc_gotos = exports._fsyacc_tagOfErrorTerminal = exports._fsyacc_endOfInputTag = exports.nonTerminalId = exports.tokenId = exports.token = exports.dummy = void 0;

var _ast = require("../fsharp/ast");

var _primParsing = require("../utils/prim-parsing");

var _ErrorLogger = require("../fsharp/ErrorLogger");

var _Types = require("../fable-core.2.0.3/Types");

var _FSComp = require("./FSComp");

const dummy = new _ast.LexerIfdefExpression(3, "IfdefId", "DUMMY");
exports.dummy = dummy;

function doNothing(_arg1, dflt) {
  return dflt;
}

function fail(ps, i, e_0, e_1) {
  const e = [e_0, e_1];
  const patternInput = (0, _primParsing.IParseState$$InputRange$$Z524259A4)(ps, i);
  const m = (0, _ast.mkSynRange)(patternInput[0], patternInput[1]);
  (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$(e, m));
  return dummy;
}

const token = (0, _Types.declare)(function token(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.token = token;
const tokenId = (0, _Types.declare)(function tokenId(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.tokenId = tokenId;
const nonTerminalId = (0, _Types.declare)(function nonTerminalId(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.nonTerminalId = nonTerminalId;

function tagOfToken(t$$1) {
  switch (t$$1.tag) {
    case 1:
      {
        return 1;
      }

    case 2:
      {
        return 2;
      }

    case 3:
      {
        return 3;
      }

    case 4:
      {
        return 4;
      }

    case 5:
      {
        return 5;
      }

    case 6:
      {
        return 6;
      }

    case 7:
      {
        return 7;
      }

    default:
      {
        return 0;
      }
  }
}

function tokenTagToTokenId(tokenIdx) {
  switch (tokenIdx) {
    case 0:
      {
        return new tokenId(0, "TOKEN_OP_NOT");
      }

    case 1:
      {
        return new tokenId(1, "TOKEN_OP_AND");
      }

    case 2:
      {
        return new tokenId(2, "TOKEN_OP_OR");
      }

    case 3:
      {
        return new tokenId(3, "TOKEN_LPAREN");
      }

    case 4:
      {
        return new tokenId(4, "TOKEN_RPAREN");
      }

    case 5:
      {
        return new tokenId(5, "TOKEN_PRELUDE");
      }

    case 6:
      {
        return new tokenId(6, "TOKEN_EOF");
      }

    case 7:
      {
        return new tokenId(7, "TOKEN_ID");
      }

    case 8:
      {
        return new tokenId(9, "TOKEN_error");
      }

    case 10:
      {
        return new tokenId(8, "TOKEN_end_of_input");
      }

    default:
      {
        throw new Error("tokenTagToTokenId: bad token");
      }
  }
}

function prodIdxToNonTerminal(prodIdx) {
  switch (prodIdx) {
    case 0:
      {
        return new nonTerminalId(0, "NONTERM__startstart");
      }

    case 1:
      {
        return new nonTerminalId(1, "NONTERM_start");
      }

    case 2:
      {
        return new nonTerminalId(2, "NONTERM_Recover");
      }

    case 3:
      {
        return new nonTerminalId(3, "NONTERM_Full");
      }

    case 4:
      {
        return new nonTerminalId(3, "NONTERM_Full");
      }

    case 5:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    case 6:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    case 7:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    case 8:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    case 9:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    case 10:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    case 11:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    case 12:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    case 13:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    case 14:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    case 15:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    case 16:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    case 17:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    case 18:
      {
        return new nonTerminalId(4, "NONTERM_Expr");
      }

    default:
      {
        throw new Error("prodIdxToNonTerminal: bad production index");
      }
  }
}

const _fsyacc_endOfInputTag = 10;
exports._fsyacc_endOfInputTag = _fsyacc_endOfInputTag;
const _fsyacc_tagOfErrorTerminal = 8;
exports._fsyacc_tagOfErrorTerminal = _fsyacc_tagOfErrorTerminal;

function token_to_string(t$$2) {
  switch (t$$2.tag) {
    case 1:
      {
        return "OP_AND";
      }

    case 2:
      {
        return "OP_OR";
      }

    case 3:
      {
        return "LPAREN";
      }

    case 4:
      {
        return "RPAREN";
      }

    case 5:
      {
        return "PRELUDE";
      }

    case 6:
      {
        return "EOF";
      }

    case 7:
      {
        return "ID";
      }

    default:
      {
        return "OP_NOT";
      }
  }
}

function _fsyacc_dataOfToken(t$$3) {
  switch (t$$3.tag) {
    case 1:
      {
        return null;
      }

    case 2:
      {
        return null;
      }

    case 3:
      {
        return null;
      }

    case 4:
      {
        return null;
      }

    case 5:
      {
        return null;
      }

    case 6:
      {
        return null;
      }

    case 7:
      {
        const _fsyacc_x = t$$3.fields[0];
        return _fsyacc_x;
      }

    default:
      {
        return null;
      }
  }
}

const _fsyacc_gotos = new Uint16Array([0, 65535, 1, 65535, 0, 1, 11, 65535, 0, 8, 6, 29, 9, 26, 10, 25, 13, 23, 14, 29, 15, 29, 16, 29, 19, 20, 21, 22, 27, 28, 1, 65535, 0, 2, 5, 65535, 5, 6, 9, 10, 13, 14, 17, 15, 18, 16]);

exports._fsyacc_gotos = _fsyacc_gotos;

const _fsyacc_sparseGotoTableRowOffsets = new Uint16Array([0, 1, 3, 15, 17]);

exports._fsyacc_sparseGotoTableRowOffsets = _fsyacc_sparseGotoTableRowOffsets;

const _fsyacc_stateToProdIdxsTableElements = new Uint16Array([1, 0, 1, 0, 1, 1, 1, 2, 2, 2, 13, 1, 3, 4, 3, 8, 9, 17, 1, 3, 1, 4, 4, 5, 13, 14, 15, 5, 5, 8, 9, 14, 17, 1, 5, 1, 6, 2, 7, 12, 4, 7, 8, 9, 17, 4, 8, 8, 9, 17, 4, 8, 9, 9, 17, 1, 8, 1, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 12, 1, 13, 2, 14, 17, 1, 15, 1, 16, 1, 16, 1, 17, 1, 18]);

exports._fsyacc_stateToProdIdxsTableElements = _fsyacc_stateToProdIdxsTableElements;

const _fsyacc_stateToProdIdxsTableRowOffsets = new Uint16Array([0, 2, 4, 6, 8, 11, 13, 18, 20, 22, 27, 33, 35, 37, 40, 45, 50, 55, 57, 59, 61, 63, 65, 67, 69, 71, 74, 76, 78, 80, 82]);

exports._fsyacc_stateToProdIdxsTableRowOffsets = _fsyacc_stateToProdIdxsTableRowOffsets;
const _fsyacc_action_rows = 31;
exports._fsyacc_action_rows = _fsyacc_action_rows;

const _fsyacc_actionTableElements = new Uint16Array([2, 32768, 5, 5, 8, 3, 0, 49152, 0, 16385, 0, 16386, 1, 16386, 4, 24, 7, 32768, 0, 13, 1, 19, 2, 21, 3, 9, 4, 27, 6, 30, 7, 12, 4, 32768, 1, 17, 2, 18, 6, 7, 8, 3, 0, 16387, 0, 16388, 8, 32768, 0, 13, 1, 19, 2, 21, 3, 9, 4, 27, 6, 30, 7, 12, 8, 4, 4, 32768, 1, 17, 2, 18, 4, 11, 8, 3, 0, 16389, 0, 16390, 8, 32768, 0, 13, 1, 19, 2, 21, 3, 9, 4, 27, 6, 30, 7, 12, 8, 3, 1, 16391, 8, 3, 1, 16392, 8, 3, 2, 16393, 1, 17, 8, 3, 7, 32768, 0, 13, 1, 19, 2, 21, 3, 9, 4, 27, 6, 30, 7, 12, 7, 32768, 0, 13, 1, 19, 2, 21, 3, 9, 4, 27, 6, 30, 7, 12, 1, 32768, 8, 3, 0, 16394, 1, 32768, 8, 3, 0, 16395, 0, 16396, 0, 16397, 0, 16398, 0, 16399, 1, 32768, 8, 3, 0, 16400, 0, 16401, 0, 16402]);

exports._fsyacc_actionTableElements = _fsyacc_actionTableElements;

const _fsyacc_actionTableRowOffsets = new Uint16Array([0, 3, 4, 5, 6, 8, 16, 21, 22, 23, 32, 37, 38, 39, 48, 50, 52, 55, 63, 71, 73, 74, 76, 77, 78, 79, 80, 81, 83, 84, 85]);

exports._fsyacc_actionTableRowOffsets = _fsyacc_actionTableRowOffsets;

const _fsyacc_reductionSymbolCounts = new Uint16Array([1, 1, 1, 3, 1, 3, 1, 2, 3, 3, 2, 2, 2, 3, 3, 2, 2, 2, 1]);

exports._fsyacc_reductionSymbolCounts = _fsyacc_reductionSymbolCounts;

const _fsyacc_productionToNonTerminalTable = new Uint16Array([0, 1, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);

exports._fsyacc_productionToNonTerminalTable = _fsyacc_productionToNonTerminalTable;

const _fsyacc_immediateActions = new Uint16Array([65535, 49152, 16385, 16386, 65535, 65535, 65535, 16387, 16388, 65535, 65535, 16389, 16390, 65535, 65535, 65535, 65535, 65535, 65535, 65535, 16394, 65535, 16395, 16396, 16397, 65535, 16399, 65535, 16400, 16401, 16402]);

exports._fsyacc_immediateActions = _fsyacc_immediateActions;

function _fsyacc_reductions() {
  return [function (parseState) {
    let _1;

    const data = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState, 1);
    _1 = data;
    return (() => {
      throw new _primParsing.Accept(_1);
    })();
  }, function (parseState$$1) {
    let _1$$1;

    const data$$1 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$1, 1);
    _1$$1 = data$$1;
    return _1$$1;
  }, function (parseState$$2) {
    return doNothing(parseState$$2, null);
  }, function (parseState$$3) {
    let _2;

    const data$$2 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$3, 2);
    _2 = data$$2;
    return _2;
  }, function (parseState$$4) {
    var tupledArg;

    let _1$$2;

    const data$$3 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$4, 1);
    _1$$2 = data$$3;
    return tupledArg = (0, _FSComp.SR$$$ppparsMissingToken$$Z721C83C5)("#if/#elif"), fail(parseState$$4, 1, tupledArg[0], tupledArg[1]);
  }, function (parseState$$5) {
    let _2$$1;

    const data$$4 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$5, 2);
    _2$$1 = data$$4;
    return _2$$1;
  }, function (parseState$$6) {
    let _1$$3;

    const data$$5 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$6, 1);
    _1$$3 = data$$5;
    return new _ast.LexerIfdefExpression(3, "IfdefId", _1$$3);
  }, function (parseState$$7) {
    let _2$$2;

    const data$$6 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$7, 2);
    _2$$2 = data$$6;
    return new _ast.LexerIfdefExpression(2, "IfdefNot", _2$$2);
  }, function (parseState$$8) {
    let _1$$4;

    const data$$7 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$8, 1);
    _1$$4 = data$$7;

    let _3;

    const data$$8 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$8, 3);
    _3 = data$$8;
    return new _ast.LexerIfdefExpression(0, "IfdefAnd", _1$$4, _3);
  }, function (parseState$$9) {
    let _1$$5;

    const data$$9 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$9, 1);
    _1$$5 = data$$9;

    let _3$$1;

    const data$$10 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$9, 3);
    _3$$1 = data$$10;
    return new _ast.LexerIfdefExpression(1, "IfdefOr", _1$$5, _3$$1);
  }, function (parseState$$10) {
    var tupledArg$$1;

    let _2$$3;

    const data$$11 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$10, 2);
    _2$$3 = data$$11;
    return tupledArg$$1 = (0, _FSComp.SR$$$ppparsUnexpectedToken$$Z721C83C5)("&&"), fail(parseState$$10, 1, tupledArg$$1[0], tupledArg$$1[1]);
  }, function (parseState$$11) {
    var tupledArg$$2;

    let _2$$4;

    const data$$12 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$11, 2);
    _2$$4 = data$$12;
    return tupledArg$$2 = (0, _FSComp.SR$$$ppparsUnexpectedToken$$Z721C83C5)("||"), fail(parseState$$11, 1, tupledArg$$2[0], tupledArg$$2[1]);
  }, function (parseState$$12) {
    var tupledArg$$3;

    let _2$$5;

    const data$$13 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$12, 2);
    _2$$5 = data$$13;
    return tupledArg$$3 = (0, _FSComp.SR$$$ppparsUnexpectedToken$$Z721C83C5)("!"), fail(parseState$$12, 1, tupledArg$$3[0], tupledArg$$3[1]);
  }, function (parseState$$13) {
    return doNothing(parseState$$13, dummy);
  }, function (parseState$$14) {
    var tupledArg$$4;

    let _2$$6;

    const data$$14 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$14, 2);
    _2$$6 = data$$14;

    let _3$$2;

    const data$$15 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$14, 3);
    _3$$2 = data$$15;
    return tupledArg$$4 = (0, _FSComp.SR$$$ppparsMissingToken$$Z721C83C5)(")"), fail(parseState$$14, 3, tupledArg$$4[0], tupledArg$$4[1]);
  }, function (parseState$$15) {
    var tupledArg$$5;

    let _2$$7;

    const data$$16 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$15, 2);
    _2$$7 = data$$16;
    return tupledArg$$5 = (0, _FSComp.SR$$$ppparsIncompleteExpression)(), fail(parseState$$15, 2, tupledArg$$5[0], tupledArg$$5[1]);
  }, function (parseState$$16) {
    var tupledArg$$6;

    let _2$$8;

    const data$$17 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$16, 2);
    _2$$8 = data$$17;
    return tupledArg$$6 = (0, _FSComp.SR$$$ppparsUnexpectedToken$$Z721C83C5)(")"), fail(parseState$$16, 1, tupledArg$$6[0], tupledArg$$6[1]);
  }, function (parseState$$17) {
    var tupledArg$$7;

    let _1$$6;

    const data$$18 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$17, 1);
    _1$$6 = data$$18;

    let _2$$9;

    const data$$19 = (0, _primParsing.IParseState$$GetInput$$Z524259A4)(parseState$$17, 2);
    _2$$9 = data$$19;
    return tupledArg$$7 = (0, _FSComp.SR$$$ppparsIncompleteExpression)(), fail(parseState$$17, 2, tupledArg$$7[0], tupledArg$$7[1]);
  }, function (parseState$$18) {
    var tupledArg$$8;
    return tupledArg$$8 = (0, _FSComp.SR$$$ppparsIncompleteExpression)(), fail(parseState$$18, 1, tupledArg$$8[0], tupledArg$$8[1]);
  }];
}

function tables() {
  return new _primParsing.Tables$00601(_fsyacc_reductions(), _fsyacc_endOfInputTag, tagOfToken, _fsyacc_dataOfToken, _fsyacc_actionTableElements, _fsyacc_actionTableRowOffsets, _fsyacc_reductionSymbolCounts, _fsyacc_immediateActions, _fsyacc_gotos, _fsyacc_sparseGotoTableRowOffsets, _fsyacc_stateToProdIdxsTableElements, _fsyacc_stateToProdIdxsTableRowOffsets, _fsyacc_productionToNonTerminalTable, function parseError(ctxt) {
    const matchValue = (0, _primParsing.ParseHelpers$$$parse_error_rich)();

    if (matchValue == null) {
      (0, _primParsing.ParseHelpers$$$parse_error)((0, _primParsing.ParseErrorContext$00601$$get_Message)(ctxt));
    } else {
      const f$$1 = matchValue;
      f$$1(ctxt);
    }
  }, 11, _fsyacc_tagOfErrorTerminal);
}

function engine(lexer, lexbuf, startState) {
  return (0, _primParsing.Tables$00601$$Interpret$$117DDC1F)(tables(), lexer, lexbuf, startState);
}

function start(lexer$$1, lexbuf$$1) {
  return (0, _primParsing.Tables$00601$$Interpret$$117DDC1F)(tables(), lexer$$1, lexbuf$$1, 0);
}