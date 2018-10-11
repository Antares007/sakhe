"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IParseState$$$$002Ector$$Z209E1772 = IParseState$$$$002Ector$$Z209E1772;
exports.IParseState$$get_LexBuffer = IParseState$$get_LexBuffer;
exports.IParseState$$InputRange$$Z524259A4 = IParseState$$InputRange$$Z524259A4;
exports.IParseState$$InputStartPosition$$Z524259A4 = IParseState$$InputStartPosition$$Z524259A4;
exports.IParseState$$InputEndPosition$$Z524259A4 = IParseState$$InputEndPosition$$Z524259A4;
exports.IParseState$$get_ResultStartPosition = IParseState$$get_ResultStartPosition;
exports.IParseState$$get_ResultEndPosition = IParseState$$get_ResultEndPosition;
exports.IParseState$$GetInput$$Z524259A4 = IParseState$$GetInput$$Z524259A4;
exports.IParseState$$get_ResultRange = IParseState$$get_ResultRange;
exports.IParseState$$RaiseError = IParseState$$RaiseError;
exports.ParseErrorContext$00601$$$$002Ector$$ZD8A61ED = ParseErrorContext$00601$$$$002Ector$$ZD8A61ED;
exports.ParseErrorContext$00601$$get_StateStack = ParseErrorContext$00601$$get_StateStack;
exports.ParseErrorContext$00601$$get_ReduceTokens = ParseErrorContext$00601$$get_ReduceTokens;
exports.ParseErrorContext$00601$$get_CurrentToken = ParseErrorContext$00601$$get_CurrentToken;
exports.ParseErrorContext$00601$$get_ParseState = ParseErrorContext$00601$$get_ParseState;
exports.ParseErrorContext$00601$$get_ReducibleProductions = ParseErrorContext$00601$$get_ReducibleProductions;
exports.ParseErrorContext$00601$$get_ShiftTokens = ParseErrorContext$00601$$get_ShiftTokens;
exports.ParseErrorContext$00601$$get_Message = ParseErrorContext$00601$$get_Message;
exports.Stack$00601$$$$002Ector$$Z524259A4 = Stack$00601$$$$002Ector$$Z524259A4;
exports.Stack$00601$$Ensure$$Z524259A4 = Stack$00601$$Ensure$$Z524259A4;
exports.Stack$00601$$get_Count = Stack$00601$$get_Count;
exports.Stack$00601$$Pop = Stack$00601$$Pop;
exports.Stack$00601$$Peep = Stack$00601$$Peep;
exports.Stack$00601$$Top$$Z524259A4 = Stack$00601$$Top$$Z524259A4;
exports.Stack$00601$$Push$$2B595 = Stack$00601$$Push$$2B595;
exports.Stack$00601$$get_IsEmpty = Stack$00601$$get_IsEmpty;
exports.Implementation$$$actionValue = Implementation$$$actionValue;
exports.Implementation$$$actionKind = Implementation$$$actionKind;
exports.Implementation$002EAssocTable$$$$002Ector$$Z33ACE6E0 = Implementation$002EAssocTable$$$$002Ector$$Z33ACE6E0;
exports.Implementation$002EAssocTable$$ReadAssoc$$Z6C21C500 = Implementation$002EAssocTable$$ReadAssoc$$Z6C21C500;
exports.Implementation$002EAssocTable$$Read$$Z37302880 = Implementation$002EAssocTable$$Read$$Z37302880;
exports.Implementation$002EAssocTable$$ReadAll$$Z524259A4 = Implementation$002EAssocTable$$ReadAll$$Z524259A4;
exports.Implementation$002EIdxToIdxListTable$$$$002Ector$$Z33ACE6E0 = Implementation$002EIdxToIdxListTable$$$$002Ector$$Z33ACE6E0;
exports.Implementation$002EIdxToIdxListTable$$ReadAll$$Z524259A4 = Implementation$002EIdxToIdxListTable$$ReadAll$$Z524259A4;
exports.Implementation$002EValueInfo$$$$002Ector$$129EF33B = Implementation$002EValueInfo$$$$002Ector$$129EF33B;
exports.Implementation$$$interpret = Implementation$$$interpret;
exports.Tables$00601$$Interpret$$117DDC1F = Tables$00601$$Interpret$$117DDC1F;
exports.ParseHelpers$$$parse_error = ParseHelpers$$$parse_error;
exports.ParseHelpers$$$parse_error_rich = ParseHelpers$$$parse_error_rich;
exports.Implementation$002EValueInfo = exports.Implementation$002EIdxToIdxListTable = exports.Implementation$002EAssocTable = exports.Implementation$$$actionMask = exports.Implementation$$$acceptFlag = exports.Implementation$$$errorFlag = exports.Implementation$$$reduceFlag = exports.Implementation$$$shiftFlag = exports.Implementation$$$anyMarker = exports.Stack$00601 = exports.Tables$00601 = exports.ParseErrorContext$00601 = exports.IParseState = exports.Accept = exports.RecoverableParseError = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Array = require("../fable-core.2.0.3/Array");

var _Util = require("../fable-core.2.0.3/Util");

var _Seq = require("../fable-core.2.0.3/Seq");

var _List = require("../fable-core.2.0.3/List");

var _Option = require("../fable-core.2.0.3/Option");

var _primLexing = require("./prim-lexing");

var _Set = require("../fable-core.2.0.3/Set");

const RecoverableParseError = (0, _Types.declare)(function RecoverableParseError() {}, _Types.FSharpException);
exports.RecoverableParseError = RecoverableParseError;
const Accept = (0, _Types.declare)(function Accept(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.Accept = Accept;
const IParseState = (0, _Types.declare)(function IParseState(ruleStartPoss, ruleEndPoss, lhsPos, ruleValues, lexbuf) {
  const $this$$1 = this;
  $this$$1.ruleStartPoss = ruleStartPoss;
  $this$$1.ruleEndPoss = ruleEndPoss;
  $this$$1.lhsPos = lhsPos;
  $this$$1.ruleValues = ruleValues;
  $this$$1.lexbuf = lexbuf;
});
exports.IParseState = IParseState;

function IParseState$$$$002Ector$$Z209E1772(ruleStartPoss, ruleEndPoss, lhsPos, ruleValues, lexbuf) {
  return this != null ? IParseState.call(this, ruleStartPoss, ruleEndPoss, lhsPos, ruleValues, lexbuf) : new IParseState(ruleStartPoss, ruleEndPoss, lhsPos, ruleValues, lexbuf);
}

function IParseState$$get_LexBuffer(p) {
  return p.lexbuf;
}

function IParseState$$InputRange$$Z524259A4(p$$1, n) {
  return [p$$1.ruleStartPoss[n - 1], p$$1.ruleEndPoss[n - 1]];
}

function IParseState$$InputStartPosition$$Z524259A4(p$$2, n$$1) {
  return p$$2.ruleStartPoss[n$$1 - 1];
}

function IParseState$$InputEndPosition$$Z524259A4(p$$3, n$$2) {
  return p$$3.ruleEndPoss[n$$2 - 1];
}

function IParseState$$get_ResultStartPosition(p$$4) {
  return p$$4.lhsPos[0];
}

function IParseState$$get_ResultEndPosition(p$$5) {
  return p$$5.lhsPos[1];
}

function IParseState$$GetInput$$Z524259A4(p$$6, n$$3) {
  return p$$6.ruleValues[n$$3 - 1];
}

function IParseState$$get_ResultRange(p$$7) {
  return [p$$7.lhsPos[0], p$$7.lhsPos[1]];
}

function IParseState$$RaiseError(p$$8) {
  throw new RecoverableParseError();
}

const ParseErrorContext$00601 = (0, _Types.declare)(function ParseErrorContext$00601(stateStack, parseState, reduceTokens, currentToken, reducibleProductions, shiftableTokens, message) {
  const $this$$2 = this;
  $this$$2.stateStack = stateStack;
  $this$$2.parseState = parseState;
  $this$$2.reduceTokens = reduceTokens;
  $this$$2.currentToken = currentToken;
  $this$$2.reducibleProductions = reducibleProductions;
  $this$$2.shiftableTokens = shiftableTokens;
  $this$$2.message = message;
});
exports.ParseErrorContext$00601 = ParseErrorContext$00601;

function ParseErrorContext$00601$$$$002Ector$$ZD8A61ED(stateStack, parseState, reduceTokens, currentToken, reducibleProductions, shiftableTokens, message) {
  return this != null ? ParseErrorContext$00601.call(this, stateStack, parseState, reduceTokens, currentToken, reducibleProductions, shiftableTokens, message) : new ParseErrorContext$00601(stateStack, parseState, reduceTokens, currentToken, reducibleProductions, shiftableTokens, message);
}

function ParseErrorContext$00601$$get_StateStack(x) {
  return x.stateStack;
}

function ParseErrorContext$00601$$get_ReduceTokens(x$$1) {
  return x$$1.reduceTokens;
}

function ParseErrorContext$00601$$get_CurrentToken(x$$2) {
  return x$$2.currentToken;
}

function ParseErrorContext$00601$$get_ParseState(x$$3) {
  return x$$3.parseState;
}

function ParseErrorContext$00601$$get_ReducibleProductions(x$$4) {
  return x$$4.reducibleProductions;
}

function ParseErrorContext$00601$$get_ShiftTokens(x$$5) {
  return x$$5.shiftableTokens;
}

function ParseErrorContext$00601$$get_Message(x$$6) {
  return x$$6.message;
}

const Tables$00601 = (0, _Types.declare)(function Tables$00601(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16) {
  this.reductions = arg1;
  this.endOfInputTag = arg2 | 0;
  this.tagOfToken = arg3;
  this.dataOfToken = arg4;
  this.actionTableElements = arg5;
  this.actionTableRowOffsets = arg6;
  this.reductionSymbolCounts = arg7;
  this.immediateActions = arg8;
  this.gotos = arg9;
  this.sparseGotoTableRowOffsets = arg10;
  this.stateToProdIdxsTableElements = arg11;
  this.stateToProdIdxsTableRowOffsets = arg12;
  this.productionToNonTerminalTable = arg13;
  this.parseError = arg14;
  this.numTerminals = arg15 | 0;
  this.tagOfErrorTerminal = arg16 | 0;
}, _Types.Record);
exports.Tables$00601 = Tables$00601;
const Stack$00601 = (0, _Types.declare)(function Stack$00601(n$$4) {
  const $this$$3 = this;
  $this$$3.contents = (0, _Array.fill)(new Array(n$$4), 0, n$$4, null);
  $this$$3.count = 0;
});
exports.Stack$00601 = Stack$00601;

function Stack$00601$$$$002Ector$$Z524259A4(n$$4) {
  return this != null ? Stack$00601.call(this, n$$4) : new Stack$00601(n$$4);
}

function Stack$00601$$Ensure$$Z524259A4(buf, newSize) {
  const oldSize = buf.contents.length | 0;

  if (newSize > oldSize) {
    const old = buf.contents;
    buf.contents = (0, _Array.fill)(new Array((0, _Util.max)(_Util.comparePrimitives, newSize, oldSize * 2)), 0, (0, _Util.max)(_Util.comparePrimitives, newSize, oldSize * 2), null);
    (0, _Array.copyTo)(old, 0, buf.contents, 0, buf.count);
  }
}

function Stack$00601$$get_Count(buf$$1) {
  return buf$$1.count;
}

function Stack$00601$$Pop(buf$$2) {
  buf$$2.count = buf$$2.count - 1;
  return buf$$2.contents[buf$$2.count];
}

function Stack$00601$$Peep(buf$$3) {
  return buf$$3.contents[buf$$3.count - 1];
}

function Stack$00601$$Top$$Z524259A4(buf$$4, n$$5) {
  return (0, _List.reverse)((0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (x$$7) {
      return x$$7;
    }, buf$$4.contents.slice((0, _Util.max)(_Util.comparePrimitives, 0, buf$$4.count - n$$5), buf$$4.count - 1 + 1));
  })));
}

function Stack$00601$$Push$$2B595(buf$$5, x$$8) {
  Stack$00601$$Ensure$$Z524259A4(buf$$5, buf$$5.count + 1);
  buf$$5.contents[buf$$5.count] = x$$8;
  buf$$5.count = buf$$5.count + 1;
}

function Stack$00601$$get_IsEmpty(buf$$6) {
  return buf$$6.count === 0;
}

const Implementation$$$anyMarker = 65535;
exports.Implementation$$$anyMarker = Implementation$$$anyMarker;
const Implementation$$$shiftFlag = 0;
exports.Implementation$$$shiftFlag = Implementation$$$shiftFlag;
const Implementation$$$reduceFlag = 16384;
exports.Implementation$$$reduceFlag = Implementation$$$reduceFlag;
const Implementation$$$errorFlag = 32768;
exports.Implementation$$$errorFlag = Implementation$$$errorFlag;
const Implementation$$$acceptFlag = 49152;
exports.Implementation$$$acceptFlag = Implementation$$$acceptFlag;
const Implementation$$$actionMask = 49152;
exports.Implementation$$$actionMask = Implementation$$$actionMask;

function Implementation$$$actionValue(action) {
  return action & ~Implementation$$$actionMask;
}

function Implementation$$$actionKind(action$$1) {
  return action$$1 & Implementation$$$actionMask;
}

const Implementation$002EAssocTable = (0, _Types.declare)(function Implementation$002EAssocTable(elemTab, offsetTab) {
  const $this$$8 = this;
  $this$$8.elemTab = elemTab;
  $this$$8.offsetTab = offsetTab;
  $this$$8.cacheSize = 7919;
  $this$$8.cache = new Int32Array($this$$8.cacheSize * 2);
});
exports.Implementation$002EAssocTable = Implementation$002EAssocTable;

function Implementation$002EAssocTable$$$$002Ector$$Z33ACE6E0(elemTab, offsetTab) {
  return this != null ? Implementation$002EAssocTable.call(this, elemTab, offsetTab) : new Implementation$002EAssocTable(elemTab, offsetTab);
}

function Implementation$002EAssocTable$$ReadAssoc$$Z6C21C500(t, minElemNum, maxElemNum, defaultValueOfAssoc, keyToFind) {
  Implementation$002EAssocTable$$ReadAssoc$$Z6C21C500: while (true) {
    const elemNumber = ~~((minElemNum + maxElemNum) / 2) | 0;

    if (elemNumber === maxElemNum) {
      return defaultValueOfAssoc | 0;
    } else {
      const x$$9 = ~~t.elemTab[elemNumber * 2] | 0;

      if (keyToFind === x$$9) {
        return ~~t.elemTab[elemNumber * 2 + 1] | 0;
      } else if (keyToFind < x$$9) {
        t = t;
        minElemNum = minElemNum;
        maxElemNum = elemNumber;
        defaultValueOfAssoc = defaultValueOfAssoc;
        keyToFind = keyToFind;
        continue Implementation$002EAssocTable$$ReadAssoc$$Z6C21C500;
      } else {
        t = t;
        minElemNum = elemNumber + 1;
        maxElemNum = maxElemNum;
        defaultValueOfAssoc = defaultValueOfAssoc;
        keyToFind = keyToFind;
        continue Implementation$002EAssocTable$$ReadAssoc$$Z6C21C500;
      }
    }
  }
}

function Implementation$002EAssocTable$$Read$$Z37302880(t$$1, rowNumber, keyToFind$$1) {
  const cacheKey = rowNumber << 16 | keyToFind$$1 | 0;
  const cacheIdx = ~~((cacheKey >>> 0) % (t$$1.cacheSize >>> 0)) * 2 | 0;
  const cacheKey2 = t$$1.cache[cacheIdx] | 0;
  const v = t$$1.cache[cacheIdx + 1] | 0;

  if (cacheKey === cacheKey2) {
    return v | 0;
  } else {
    const headOfTable = ~~t$$1.offsetTab[rowNumber] | 0;
    const firstElemNumber = headOfTable + 1 | 0;
    const numberOfElementsInAssoc = ~~t$$1.elemTab[headOfTable * 2] | 0;
    const defaultValueOfAssoc$$1 = ~~t$$1.elemTab[headOfTable * 2 + 1] | 0;
    const res = Implementation$002EAssocTable$$ReadAssoc$$Z6C21C500(t$$1, firstElemNumber, firstElemNumber + numberOfElementsInAssoc, defaultValueOfAssoc$$1, keyToFind$$1) | 0;
    t$$1.cache[cacheIdx] = cacheKey;
    t$$1.cache[cacheIdx + 1] = res;
    return res | 0;
  }
}

function Implementation$002EAssocTable$$ReadAll$$Z524259A4(x$$10, n$$6) {
  const headOfTable$$1 = ~~x$$10.offsetTab[n$$6] | 0;
  const firstElemNumber$$1 = headOfTable$$1 + 1 | 0;
  const numberOfElementsInAssoc$$1 = ~~x$$10.elemTab[headOfTable$$1 * 2] | 0;
  const defaultValueOfAssoc$$2 = ~~x$$10.elemTab[headOfTable$$1 * 2 + 1] | 0;
  return [(0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (i) {
      return [~~x$$10.elemTab[i * 2], ~~x$$10.elemTab[i * 2 + 1]];
    }, (0, _Seq.rangeNumber)(firstElemNumber$$1, 1, firstElemNumber$$1 + numberOfElementsInAssoc$$1 - 1));
  })), defaultValueOfAssoc$$2];
}

const Implementation$002EIdxToIdxListTable = (0, _Types.declare)(function Implementation$002EIdxToIdxListTable(elemTab$$1, offsetTab$$1) {
  const $this$$9 = this;
  $this$$9.elemTab = elemTab$$1;
  $this$$9.offsetTab = offsetTab$$1;
});
exports.Implementation$002EIdxToIdxListTable = Implementation$002EIdxToIdxListTable;

function Implementation$002EIdxToIdxListTable$$$$002Ector$$Z33ACE6E0(elemTab$$1, offsetTab$$1) {
  return this != null ? Implementation$002EIdxToIdxListTable.call(this, elemTab$$1, offsetTab$$1) : new Implementation$002EIdxToIdxListTable(elemTab$$1, offsetTab$$1);
}

function Implementation$002EIdxToIdxListTable$$ReadAll$$Z524259A4(x$$11, n$$7) {
  const headOfTable$$2 = ~~x$$11.offsetTab[n$$7] | 0;
  const firstElemNumber$$2 = headOfTable$$2 + 1 | 0;
  const numberOfElements = ~~x$$11.elemTab[headOfTable$$2] | 0;
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (i$$1) {
      return ~~x$$11.elemTab[i$$1];
    }, (0, _Seq.rangeNumber)(firstElemNumber$$2, 1, firstElemNumber$$2 + numberOfElements - 1));
  }));
}

const Implementation$002EValueInfo = (0, _Types.declare)(function Implementation$002EValueInfo(arg1, arg2, arg3) {
  this.value = arg1;
  this.startPos = arg2;
  this.endPos = arg3;
}, _Types.Record);
exports.Implementation$002EValueInfo = Implementation$002EValueInfo;

function Implementation$002EValueInfo$$$$002Ector$$129EF33B(value, startPos, endPos) {
  return new Implementation$002EValueInfo(value, startPos, endPos);
}

function Implementation$$$interpret(tables, lexer, lexbuf$$1, initialState) {
  const stateStack$$1 = Stack$00601$$$$002Ector$$Z524259A4(100);
  Stack$00601$$Push$$2B595(stateStack$$1, initialState);
  const valueStack = Stack$00601$$$$002Ector$$Z524259A4(100);
  let haveLookahead = false;
  let lookaheadToken = null;
  let lookaheadEndPos = null;
  let lookaheadStartPos = null;
  let finished = false;
  let errorSuppressionCountDown = 0;
  let inEofCountDown = false;
  let eofCountDown = 20;
  const ruleStartPoss$$1 = (0, _Array.fill)(new Array(100), 0, 100, null);
  const ruleEndPoss$$1 = (0, _Array.fill)(new Array(100), 0, 100, null);
  const ruleValues$$1 = (0, _Array.fill)(new Array(100), 0, 100, null);
  const lhsPos$$1 = (0, _Array.fill)(new Array(2), 0, 2, null);
  const reductions = tables.reductions;
  const actionTable = Implementation$002EAssocTable$$$$002Ector$$Z33ACE6E0(tables.actionTableElements, tables.actionTableRowOffsets);
  const gotoTable = Implementation$002EAssocTable$$$$002Ector$$Z33ACE6E0(tables.gotos, tables.sparseGotoTableRowOffsets);
  const stateToProdIdxsTable = Implementation$002EIdxToIdxListTable$$$$002Ector$$Z33ACE6E0(tables.stateToProdIdxsTableElements, tables.stateToProdIdxsTableRowOffsets);
  const parseState$$1 = IParseState$$$$002Ector$$Z209E1772(ruleStartPoss$$1, ruleEndPoss$$1, lhsPos$$1, ruleValues$$1, lexbuf$$1);

  const popStackUntilErrorShifted = function popStackUntilErrorShifted(tokenOpt) {
    var token, nextState;

    if (Stack$00601$$get_IsEmpty(stateStack$$1)) {
      throw new Error("parse error");
    }

    const currState = Stack$00601$$Peep(stateStack$$1) | 0;
    const action$$2 = Implementation$002EAssocTable$$Read$$Z37302880(actionTable, currState, tables.tagOfErrorTerminal) | 0;

    if (Implementation$$$actionKind(action$$2) === Implementation$$$shiftFlag ? tokenOpt != null ? (token = (0, _Option.value)(tokenOpt), (nextState = Implementation$$$actionValue(action$$2) | 0, Implementation$$$actionKind(Implementation$002EAssocTable$$Read$$Z37302880(actionTable, nextState, tables.tagOfToken(token))) === Implementation$$$shiftFlag)) : true : false) {
      const nextState$$1 = Implementation$$$actionValue(action$$2) | 0;
      Stack$00601$$Push$$2B595(valueStack, Implementation$002EValueInfo$$$$002Ector$$129EF33B(null, (0, _primLexing.LexBuffer$00601$$get_StartPos)(lexbuf$$1), (0, _primLexing.LexBuffer$00601$$get_EndPos)(lexbuf$$1)));
      Stack$00601$$Push$$2B595(stateStack$$1, nextState$$1);
    } else {
      if (Stack$00601$$get_IsEmpty(valueStack)) {
        throw new Error("parse error");
      }

      Stack$00601$$Pop(valueStack);
      Stack$00601$$Pop(stateStack$$1);
      popStackUntilErrorShifted(tokenOpt);
    }
  };

  while (!finished) {
    if (Stack$00601$$get_IsEmpty(stateStack$$1)) {
      finished = true;
    } else {
      const state = Stack$00601$$Peep(stateStack$$1) | 0;
      let action$$3;
      const immediateAction = ~~tables.immediateActions[state] | 0;

      if (!(immediateAction === Implementation$$$anyMarker)) {
        action$$3 = immediateAction;
      } else {
        if (!haveLookahead) {
          if ((0, _primLexing.LexBuffer$00601$$get_IsPastEndOfStream)(lexbuf$$1)) {
            if (eofCountDown > 0) {
              haveLookahead = true;
              eofCountDown = eofCountDown - 1;
              inEofCountDown = true;
            } else {
              haveLookahead = false;
            }
          } else {
            lookaheadToken = lexer(lexbuf$$1);
            lookaheadStartPos = (0, _primLexing.LexBuffer$00601$$get_StartPos)(lexbuf$$1);
            lookaheadEndPos = (0, _primLexing.LexBuffer$00601$$get_EndPos)(lexbuf$$1);
            haveLookahead = true;
          }
        }

        const tag = (haveLookahead ? tables.tagOfToken(lookaheadToken) : tables.endOfInputTag) | 0;
        action$$3 = Implementation$002EAssocTable$$Read$$Z37302880(actionTable, state, tag);
      }

      const kind = Implementation$$$actionKind(action$$3) | 0;

      if (kind === Implementation$$$shiftFlag) {
        if (errorSuppressionCountDown > 0) {
          errorSuppressionCountDown = errorSuppressionCountDown - 1;
        }

        const nextState$$2 = Implementation$$$actionValue(action$$3) | 0;

        if (!haveLookahead) {
          throw new Error("shift on end of input!");
        }

        const data = tables.dataOfToken(lookaheadToken);
        Stack$00601$$Push$$2B595(valueStack, Implementation$002EValueInfo$$$$002Ector$$129EF33B(data, lookaheadStartPos, lookaheadEndPos));
        Stack$00601$$Push$$2B595(stateStack$$1, nextState$$2);
        haveLookahead = false;
      } else if (kind === Implementation$$$reduceFlag) {
        const prod = Implementation$$$actionValue(action$$3) | 0;
        const reduction = reductions[prod];
        const n$$8 = ~~tables.reductionSymbolCounts[prod] | 0;

        for (let i$$2 = 0; i$$2 <= n$$8 - 1; i$$2++) {
          if (Stack$00601$$get_IsEmpty(valueStack)) {
            throw new Error("empty symbol stack");
          }

          const topVal = Stack$00601$$Peep(valueStack);
          Stack$00601$$Pop(valueStack);
          Stack$00601$$Pop(stateStack$$1);
          ruleValues$$1[n$$8 - i$$2 - 1] = topVal.value;
          ruleStartPoss$$1[n$$8 - i$$2 - 1] = topVal.startPos;
          ruleEndPoss$$1[n$$8 - i$$2 - 1] = topVal.endPos;

          if (i$$2 === 0) {
            lhsPos$$1[1] = topVal.endPos;
          }

          if (i$$2 === n$$8 - 1) {
            lhsPos$$1[0] = topVal.startPos;
          }
        }

        if (n$$8 === 0) {
          if (haveLookahead) {
            lhsPos$$1[0] = lookaheadStartPos;
            lhsPos$$1[1] = lookaheadEndPos;
          } else {
            lhsPos$$1[0] = (0, _primLexing.LexBuffer$00601$$get_StartPos)(lexbuf$$1);
            lhsPos$$1[1] = (0, _primLexing.LexBuffer$00601$$get_EndPos)(lexbuf$$1);
          }
        }

        try {
          const redResult = reduction(parseState$$1);
          Stack$00601$$Push$$2B595(valueStack, Implementation$002EValueInfo$$$$002Ector$$129EF33B(redResult, lhsPos$$1[0], lhsPos$$1[1]));
          const currState$$1 = Stack$00601$$Peep(stateStack$$1) | 0;
          const newGotoState = Implementation$002EAssocTable$$Read$$Z37302880(gotoTable, ~~tables.productionToNonTerminalTable[prod], currState$$1) | 0;
          Stack$00601$$Push$$2B595(stateStack$$1, newGotoState);
        } catch (matchValue) {
          if (matchValue instanceof Accept) {
            finished = true;
            Stack$00601$$Push$$2B595(valueStack, Implementation$002EValueInfo$$$$002Ector$$129EF33B(matchValue.Data0, lhsPos$$1[0], lhsPos$$1[1]));
          } else if (matchValue instanceof RecoverableParseError) {
            popStackUntilErrorShifted(null);
            errorSuppressionCountDown = 3;
          } else {
            throw matchValue;
          }
        }
      } else if (kind === Implementation$$$errorFlag) {
        if (errorSuppressionCountDown > 0) {
          if (inEofCountDown ? eofCountDown < 10 : false) {
            popStackUntilErrorShifted(haveLookahead ? (0, _Option.some)(lookaheadToken) : null);
          }

          if (!haveLookahead) {
            throw new Error("parse error: unexpected end of file");
          }

          haveLookahead = false;
          errorSuppressionCountDown = 3;
        } else {
          const currentToken$$1 = haveLookahead ? (0, _Option.some)(lookaheadToken) : null;
          const patternInput = Implementation$002EAssocTable$$ReadAll$$Z524259A4(actionTable, state);
          const explicit = (0, _Set.ofList)((0, _List.ofSeq)((0, _Seq.delay)(function () {
            return (0, _Seq.collect)(function (matchValue$$1) {
              return (0, _Seq.singleton)(matchValue$$1[0]);
            }, patternInput[0]);
          })), {
            Compare: _Util.comparePrimitives
          });
          const shiftableTokens$$1 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
            return (0, _Seq.append)((0, _Seq.collect)(function (matchValue$$2) {
              return Implementation$$$actionKind(matchValue$$2[1]) === Implementation$$$shiftFlag ? (0, _Seq.singleton)(matchValue$$2[0]) : (0, _Seq.empty)();
            }, patternInput[0]), (0, _Seq.delay)(function () {
              return Implementation$$$actionKind(patternInput[1]) === Implementation$$$shiftFlag ? (0, _Seq.collect)(function (tag$$3) {
                return !(0, _Set.FSharpSet$$Contains$$2B595)(explicit, tag$$3) ? (0, _Seq.singleton)(tag$$3) : (0, _Seq.empty)();
              }, (0, _Seq.rangeNumber)(0, 1, tables.numTerminals - 1)) : (0, _Seq.empty)();
            }));
          }));
          const stateStack$$2 = Stack$00601$$Top$$Z524259A4(stateStack$$1, 12);
          const reducibleProductions$$1 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
            return (0, _Seq.map)(function (state$$1) {
              return Implementation$002EIdxToIdxListTable$$ReadAll$$Z524259A4(stateToProdIdxsTable, state$$1);
            }, stateStack$$2);
          }));
          const reduceTokens$$1 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
            return (0, _Seq.append)((0, _Seq.collect)(function (matchValue$$3) {
              return Implementation$$$actionKind(matchValue$$3[1]) === Implementation$$$reduceFlag ? (0, _Seq.singleton)(matchValue$$3[0]) : (0, _Seq.empty)();
            }, patternInput[0]), (0, _Seq.delay)(function () {
              return Implementation$$$actionKind(patternInput[1]) === Implementation$$$reduceFlag ? (0, _Seq.collect)(function (tag$$5) {
                return !(0, _Set.FSharpSet$$Contains$$2B595)(explicit, tag$$5) ? (0, _Seq.singleton)(tag$$5) : (0, _Seq.empty)();
              }, (0, _Seq.rangeNumber)(0, 1, tables.numTerminals - 1)) : (0, _Seq.empty)();
            }));
          }));
          const errorContext = ParseErrorContext$00601$$$$002Ector$$ZD8A61ED(stateStack$$2, parseState$$1, reduceTokens$$1, currentToken$$1, reducibleProductions$$1, shiftableTokens$$1, "syntax error");
          tables.parseError(errorContext);
          popStackUntilErrorShifted(null);
          errorSuppressionCountDown = 3;
        }
      } else if (kind === Implementation$$$acceptFlag) {
        finished = true;
      }
    }
  }

  return Stack$00601$$Peep(valueStack).value;
}

function Tables$00601$$Interpret$$117DDC1F(tables$$1, lexer$$1, lexbuf$$2, initialState$$1) {
  return Implementation$$$interpret(tables$$1, lexer$$1, lexbuf$$2, initialState$$1);
}

function ParseHelpers$$$parse_error(_s) {}

function ParseHelpers$$$parse_error_rich() {
  return null;
}