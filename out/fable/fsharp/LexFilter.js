"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringOfPos = stringOfPos;
exports.outputPos = outputPos;
exports.warningStringOfPos = warningStringOfPos;
exports.Context$$get_StartPos = Context$$get_StartPos;
exports.Context$$get_StartCol = Context$$get_StartCol;
exports.isInfix = isInfix;
exports.isNonAssocInfixToken = isNonAssocInfixToken;
exports.infixTokenLength = infixTokenLength;
exports.isIfBlockContinuator = isIfBlockContinuator;
exports.isTryBlockContinuator = isTryBlockContinuator;
exports.isThenBlockContinuator = isThenBlockContinuator;
exports.isDoContinuator = isDoContinuator;
exports.isInterfaceContinuator = isInterfaceContinuator;
exports.isNamespaceContinuator = isNamespaceContinuator;
exports.isTypeContinuator = isTypeContinuator;
exports.isForLoopContinuator = isForLoopContinuator;
exports.isWhileBlockContinuator = isWhileBlockContinuator;
exports.isLetContinuator = isLetContinuator;
exports.isTypeSeqBlockElementContinuator = isTypeSeqBlockElementContinuator;
exports.isSeqBlockElementContinuator = isSeqBlockElementContinuator;
exports.isWithAugmentBlockContinuator = isWithAugmentBlockContinuator;
exports.isLongIdentifier = isLongIdentifier;
exports.isLongIdentifierOrGlobal = isLongIdentifierOrGlobal;
exports.isAtomicExprEndToken = isAtomicExprEndToken;
exports.parenTokensBalance = parenTokensBalance;
exports.LexbufState$$$$002Ector$$590A0CCA = LexbufState$$$$002Ector$$590A0CCA;
exports.LexbufState$$get_StartPos = LexbufState$$get_StartPos;
exports.LexbufState$$get_EndPos = LexbufState$$get_EndPos;
exports.LexbufState$$get_PastEOF = LexbufState$$get_PastEOF;
exports.PositionTuple$$$$002Ector$$Z47F605E0 = PositionTuple$$$$002Ector$$Z47F605E0;
exports.TokenTup$$$$002Ector$$40945AC6 = TokenTup$$$$002Ector$$40945AC6;
exports.TokenTup$$get_Token = TokenTup$$get_Token;
exports.TokenTup$$get_LexbufState = TokenTup$$get_LexbufState;
exports.TokenTup$$get_LastTokenPos = TokenTup$$get_LastTokenPos;
exports.TokenTup$$get_StartPos = TokenTup$$get_StartPos;
exports.TokenTup$$get_EndPos = TokenTup$$get_EndPos;
exports.TokenTup$$UseLocation$$56122D30 = TokenTup$$UseLocation$$56122D30;
exports.TokenTup$$UseShiftedLocation$$Z217B7B50 = TokenTup$$UseShiftedLocation$$Z217B7B50;
exports.$007CTyparsCloseOp$007C_$007C = $007CTyparsCloseOp$007C_$007C;
exports.PositionWithColumn$$$$002Ector$$Z10741753 = PositionWithColumn$$$$002Ector$$Z10741753;
exports.LexFilterImpl$$$$002Ector$$74BB6F03 = LexFilterImpl$$$$002Ector$$74BB6F03;
exports.LexFilterImpl$$get_LexBuffer = LexFilterImpl$$get_LexBuffer;
exports.LexFilterImpl$$Lexer$$1505 = LexFilterImpl$$Lexer$$1505;
exports.LexFilter$$$$002Ector$$74BB6F03 = LexFilter$$$$002Ector$$74BB6F03;
exports.LexFilter$$get_LexBuffer = LexFilter$$get_LexBuffer;
exports.LexFilter$$Lexer$$1505 = LexFilter$$Lexer$$1505;
exports.token = token;
exports.LexFilter = exports.LexFilterImpl = exports.PositionWithColumn = exports.TokenTup = exports.PositionTuple = exports.LexbufState = exports.FirstInSequence = exports.AddBlockEnd = exports.Context = exports.debug = void 0;

var _String = require("../fable-core.2.0.3/String");

var _primLexing = require("../utils/prim-lexing");

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _Seq = require("../fable-core.2.0.3/Seq");

var _List = require("../fable-core.2.0.3/List");

var _Array = require("../fable-core.2.0.3/Array");

var _pars = require("../codegen/pars");

var _primParsing = require("../utils/prim-parsing");

var _lexhelp = require("./lexhelp");

var _ildiag = require("../absil/ildiag");

var _ast = require("./ast");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _illib = require("../absil/illib");

var _Long = require("../fable-core.2.0.3/Long");

var _lex = require("../codegen/lex");

const debug = false;
exports.debug = debug;

function stringOfPos(p) {
  return (0, _String.toText)((0, _String.printf)("(%d:%d)"))(p.OriginalLine)((0, _primLexing.Position$$get_Column)(p));
}

function outputPos(os, p$$1) {
  (0, _String.toConsole)((0, _String.printf)("(%d:%d)"))(p$$1.OriginalLine)((0, _primLexing.Position$$get_Column)(p$$1));
}

function warningStringOfPos(p$$2) {
  return (0, _String.toText)((0, _String.printf)("(%d:%d)"))(p$$2.Line)((0, _primLexing.Position$$get_Column)(p$$2) + 1);
}

const Context = (0, _Types.declare)(function Context(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Context = Context;
const AddBlockEnd = (0, _Types.declare)(function AddBlockEnd(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AddBlockEnd = AddBlockEnd;
const FirstInSequence = (0, _Types.declare)(function FirstInSequence(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FirstInSequence = FirstInSequence;

function Context$$get_StartPos(c) {
  var $target$$5, p$$3;

  switch (c.tag) {
    case 18:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 23:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 21:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 22:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 0:
      $target$$5 = 0;
      p$$3 = c.fields[1];
      break;

    case 14:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 15:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 16:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 24:
      $target$$5 = 0;
      p$$3 = c.fields[1];
      break;

    case 19:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 20:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 5:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 6:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 26:
      $target$$5 = 0;
      p$$3 = c.fields[1];
      break;

    case 1:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 7:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 8:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 9:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 10:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 4:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 3:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 2:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 12:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 13:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 11:
      $target$$5 = 0;
      p$$3 = c.fields[0];
      break;

    case 25:
      $target$$5 = 0;
      p$$3 = c.fields[1];
      break;

    default:
      $target$$5 = 0;
      p$$3 = c.fields[0];
  }

  switch ($target$$5) {
    case 0:
      {
        return p$$3;
      }
  }
}

function Context$$get_StartCol(c$$1) {
  let copyOfStruct = Context$$get_StartPos(c$$1);
  return (0, _primLexing.Position$$get_Column)(copyOfStruct) | 0;
}

Context.prototype.toString = function () {
  const c$$2 = this;

  switch (c$$2.tag) {
    case 18:
      {
        return "modhead";
      }

    case 23:
      {
        return "exception";
      }

    case 21:
      {
        return "modbody";
      }

    case 22:
      {
        return "nsbody";
      }

    case 0:
      {
        const p$$4 = c$$2.fields[1];
        const b = c$$2.fields[0];
        return (0, _String.toText)((0, _String.printf)("let(%b,%s)"))(b)(stringOfPos(p$$4));
      }

    case 5:
      {
        const p$$5 = c$$2.fields[0];
        return (0, _String.toText)((0, _String.printf)("withlet(%s)"))(stringOfPos(p$$5));
      }

    case 6:
      {
        return "withaug";
      }

    case 14:
      {
        return "do";
      }

    case 15:
      {
        return "interface-decl";
      }

    case 16:
      {
        return "type";
      }

    case 24:
      {
        return "paren";
      }

    case 19:
      {
        return "member-head";
      }

    case 20:
      {
        return "body";
      }

    case 25:
      {
        const p$$6 = c$$2.fields[1];
        const b$$1 = c$$2.fields[0];
        const _addBlockEnd = c$$2.fields[2];
        return (0, _String.toText)((0, _String.printf)("seqblock(%s,%s)"))(b$$1.tag === 1 ? "subsequent" : "first")(stringOfPos(p$$6));
      }

    case 26:
      {
        return "matching";
      }

    case 1:
      {
        return "if";
      }

    case 7:
      {
        return "match";
      }

    case 8:
      {
        return "for";
      }

    case 9:
      {
        const p$$7 = c$$2.fields[0];
        return (0, _String.toText)((0, _String.printf)("while(%s)"))(stringOfPos(p$$7));
      }

    case 10:
      {
        return "when";
      }

    case 2:
      {
        return "try";
      }

    case 3:
      {
        return "fun";
      }

    case 4:
      {
        return "function";
      }

    case 12:
      {
        return "then";
      }

    case 13:
      {
        const p$$8 = c$$2.fields[0];
        return (0, _String.toText)((0, _String.printf)("else(%s)"))(stringOfPos(p$$8));
      }

    case 11:
      {
        const p$$9 = c$$2.fields[0];
        return (0, _String.toText)((0, _String.printf)("vanilla(%s)"))(stringOfPos(p$$9));
      }

    default:
      {
        return "nshead";
      }
  }
};

function isInfix(token$$1) {
  var $target$$6;

  switch (token$$1.tag) {
    case 97:
    case 144:
    case 90:
    case 89:
    case 102:
    case 186:
    case 183:
    case 188:
    case 63:
    case 187:
    case 182:
    case 79:
    case 80:
    case 81:
    case 83:
    case 62:
    case 96:
    case 184:
    case 189:
    case 76:
      $target$$6 = 0;
      break;

    default:
      $target$$6 = 1;
  }

  switch ($target$$6) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

function isNonAssocInfixToken(token$$2) {
  if (token$$2.tag === 70) {
    return true;
  } else {
    return false;
  }
}

function infixTokenLength(token$$3) {
  var $target$$7, d;

  if (token$$3.tag === 97) {
    $target$$7 = 0;
  } else if (token$$3.tag === 89) {
    $target$$7 = 1;
  } else if (token$$3.tag === 102) {
    $target$$7 = 2;
  } else if (token$$3.tag === 63) {
    $target$$7 = 3;
  } else if (token$$3.tag === 62) {
    $target$$7 = 4;
  } else if (token$$3.tag === 96) {
    $target$$7 = 5;
  } else if (token$$3.tag === 57) {
    $target$$7 = 6;
  } else if (token$$3.tag === 159) {
    if (token$$3.fields[0]) {
      $target$$7 = 18;
    } else {
      $target$$7 = 7;
    }
  } else if (token$$3.tag === 160) {
    if (token$$3.fields[0]) {
      $target$$7 = 18;
    } else {
      $target$$7 = 8;
    }
  } else if (token$$3.tag === 70) {
    $target$$7 = 9;
  } else if (token$$3.tag === 76) {
    $target$$7 = 10;
  } else if (token$$3.tag === 80) {
    $target$$7 = 11;
  } else if (token$$3.tag === 79) {
    $target$$7 = 12;
  } else if (token$$3.tag === 83) {
    $target$$7 = 13;
  } else if (token$$3.tag === 144) {
    $target$$7 = 14;
  } else if (token$$3.tag === 90) {
    $target$$7 = 15;
  } else if (token$$3.tag === 186) {
    $target$$7 = 16;
    d = token$$3.fields[0];
  } else if (token$$3.tag === 183) {
    $target$$7 = 16;
    d = token$$3.fields[0];
  } else if (token$$3.tag === 188) {
    $target$$7 = 16;
    d = token$$3.fields[0];
  } else if (token$$3.tag === 187) {
    $target$$7 = 16;
    d = token$$3.fields[0];
  } else if (token$$3.tag === 182) {
    $target$$7 = 16;
    d = token$$3.fields[0];
  } else if (token$$3.tag === 184) {
    $target$$7 = 16;
    d = token$$3.fields[0];
  } else if (token$$3.tag === 189) {
    $target$$7 = 16;
    d = token$$3.fields[0];
  } else if (token$$3.tag === 81) {
    $target$$7 = 17;
  } else {
    $target$$7 = 18;
  }

  switch ($target$$7) {
    case 0:
      {
        return 1;
      }

    case 1:
      {
        return 1;
      }

    case 2:
      {
        return 1;
      }

    case 3:
      {
        return 1;
      }

    case 4:
      {
        return 1;
      }

    case 5:
      {
        return 1;
      }

    case 6:
      {
        return 1;
      }

    case 7:
      {
        return 1;
      }

    case 8:
      {
        return 1;
      }

    case 9:
      {
        return 1;
      }

    case 10:
      {
        return 2;
      }

    case 11:
      {
        return 2;
      }

    case 12:
      {
        return 2;
      }

    case 13:
      {
        return 2;
      }

    case 14:
      {
        return 2;
      }

    case 15:
      {
        return 2;
      }

    case 16:
      {
        return d.length | 0;
      }

    case 17:
      {
        return 3;
      }

    case 18:
      {
        return 1;
      }
  }
}

function isIfBlockContinuator(token$$4) {
  isIfBlockContinuator: while (true) {
    var $target$$8;

    switch (token$$4.tag) {
      case 104:
      case 140:
      case 141:
        $target$$8 = 0;
        break;

      case 142:
      case 93:
        $target$$8 = 1;
        break;

      case 18:
      case 15:
      case 19:
        $target$$8 = 2;
        break;

      case 12:
        $target$$8 = 3;
        break;

      default:
        $target$$8 = 4;
    }

    switch ($target$$8) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          return true;
        }

      case 3:
        {
          const token$$5 = token$$4.fields[0];
          token$$4 = token$$5;
          continue isIfBlockContinuator;
        }

      case 4:
        {
          return false;
        }
    }
  }
}

function isTryBlockContinuator(token$$6) {
  isTryBlockContinuator: while (true) {
    var $target$$9;

    switch (token$$6.tag) {
      case 129:
      case 87:
        $target$$9 = 0;
        break;

      case 18:
      case 15:
      case 19:
        $target$$9 = 1;
        break;

      case 12:
        $target$$9 = 2;
        break;

      default:
        $target$$9 = 3;
    }

    switch ($target$$9) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          const token$$7 = token$$6.fields[0];
          token$$6 = token$$7;
          continue isTryBlockContinuator;
        }

      case 3:
        {
          return false;
        }
    }
  }
}

function isThenBlockContinuator(token$$8) {
  isThenBlockContinuator: while (true) {
    var $target$$10;

    switch (token$$8.tag) {
      case 18:
      case 15:
      case 19:
        $target$$10 = 0;
        break;

      case 12:
        $target$$10 = 1;
        break;

      default:
        $target$$10 = 2;
    }

    switch ($target$$10) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          const token$$9 = token$$8.fields[0];
          token$$8 = token$$9;
          continue isThenBlockContinuator;
        }

      case 2:
        {
          return false;
        }
    }
  }
}

function isDoContinuator(token$$10) {
  isDoContinuator: while (true) {
    var $target$$11;

    switch (token$$10.tag) {
      case 138:
        $target$$11 = 0;
        break;

      case 18:
      case 15:
      case 19:
        $target$$11 = 1;
        break;

      case 12:
        $target$$11 = 2;
        break;

      default:
        $target$$11 = 3;
    }

    switch ($target$$11) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          const token$$11 = token$$10.fields[0];
          token$$10 = token$$11;
          continue isDoContinuator;
        }

      case 3:
        {
          return false;
        }
    }
  }
}

function isInterfaceContinuator(token$$12) {
  isInterfaceContinuator: while (true) {
    var $target$$12;

    switch (token$$12.tag) {
      case 142:
        $target$$12 = 0;
        break;

      case 18:
      case 15:
      case 19:
        $target$$12 = 1;
        break;

      case 12:
        $target$$12 = 2;
        break;

      default:
        $target$$12 = 3;
    }

    switch ($target$$12) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          const token$$13 = token$$12.fields[0];
          token$$12 = token$$13;
          continue isInterfaceContinuator;
        }

      case 3:
        {
          return false;
        }
    }
  }
}

function isNamespaceContinuator(token$$14) {
  isNamespaceContinuator: while (true) {
    var $target$$13;

    switch (token$$14.tag) {
      case 10:
      case 150:
        $target$$13 = 0;
        break;

      case 12:
        $target$$13 = 1;
        break;

      default:
        $target$$13 = 2;
    }

    switch ($target$$13) {
      case 0:
        {
          return false;
        }

      case 1:
        {
          const token$$15 = token$$14.fields[0];
          token$$14 = token$$15;
          continue isNamespaceContinuator;
        }

      case 2:
        {
          return true;
        }
    }
  }
}

function isTypeContinuator(token$$16) {
  isTypeContinuator: while (true) {
    var $target$$14;

    switch (token$$16.tag) {
      case 59:
      case 87:
      case 57:
      case 131:
      case 142:
        $target$$14 = 0;
        break;

      case 18:
      case 15:
      case 19:
        $target$$14 = 1;
        break;

      case 12:
        $target$$14 = 2;
        break;

      default:
        $target$$14 = 3;
    }

    switch ($target$$14) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          const token$$17 = token$$16.fields[0];
          token$$16 = token$$17;
          continue isTypeContinuator;
        }

      case 3:
        {
          return false;
        }
    }
  }
}

function isForLoopContinuator(token$$18) {
  isForLoopContinuator: while (true) {
    var $target$$15;

    switch (token$$18.tag) {
      case 138:
        $target$$15 = 0;
        break;

      case 18:
      case 15:
      case 19:
        $target$$15 = 1;
        break;

      case 12:
        $target$$15 = 2;
        break;

      default:
        $target$$15 = 3;
    }

    switch ($target$$15) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          const token$$19 = token$$18.fields[0];
          token$$18 = token$$19;
          continue isForLoopContinuator;
        }

      case 3:
        {
          return false;
        }
    }
  }
}

function isWhileBlockContinuator(token$$20) {
  isWhileBlockContinuator: while (true) {
    var $target$$16;

    switch (token$$20.tag) {
      case 138:
        $target$$16 = 0;
        break;

      case 18:
      case 15:
      case 19:
        $target$$16 = 1;
        break;

      case 12:
        $target$$16 = 2;
        break;

      default:
        $target$$16 = 3;
    }

    switch ($target$$16) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          const token$$21 = token$$20.fields[0];
          token$$20 = token$$21;
          continue isWhileBlockContinuator;
        }

      case 3:
        {
          return false;
        }
    }
  }
}

function isLetContinuator(token$$22) {
  isLetContinuator: while (true) {
    var $target$$17;

    switch (token$$22.tag) {
      case 131:
        $target$$17 = 0;
        break;

      case 18:
      case 15:
      case 19:
        $target$$17 = 1;
        break;

      case 12:
        $target$$17 = 2;
        break;

      default:
        $target$$17 = 3;
    }

    switch ($target$$17) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          const token$$23 = token$$22.fields[0];
          token$$22 = token$$23;
          continue isLetContinuator;
        }

      case 3:
        {
          return false;
        }
    }
  }
}

function isTypeSeqBlockElementContinuator(token$$24) {
  isTypeSeqBlockElementContinuator: while (true) {
    var $target$$18;

    switch (token$$24.tag) {
      case 57:
        $target$$18 = 0;
        break;

      case 22:
      case 18:
      case 15:
      case 19:
        $target$$18 = 1;
        break;

      case 12:
        $target$$18 = 2;
        break;

      default:
        $target$$18 = 3;
    }

    switch ($target$$18) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          const token$$25 = token$$24.fields[0];
          token$$24 = token$$25;
          continue isTypeSeqBlockElementContinuator;
        }

      case 3:
        {
          return false;
        }
    }
  }
}

function isSeqBlockElementContinuator(token$$26) {
  isSeqBlockElementContinuator: while (true) {
    if (isInfix(token$$26)) {
      return true;
    } else {
      var $target$$19;

      switch (token$$26.tag) {
        case 142:
        case 131:
        case 87:
        case 104:
        case 93:
        case 59:
        case 58:
        case 65:
        case 155:
          $target$$19 = 0;
          break;

        case 18:
        case 15:
        case 19:
          $target$$19 = 1;
          break;

        case 12:
          $target$$19 = 2;
          break;

        default:
          $target$$19 = 3;
      }

      switch ($target$$19) {
        case 0:
          {
            return true;
          }

        case 1:
          {
            return true;
          }

        case 2:
          {
            const token$$27 = token$$26.fields[0];
            token$$26 = token$$27;
            continue isSeqBlockElementContinuator;
          }

        case 3:
          {
            return false;
          }
      }
    }
  }
}

function isWithAugmentBlockContinuator(token$$28) {
  isWithAugmentBlockContinuator: while (true) {
    switch (token$$28.tag) {
      case 142:
        {
          return true;
        }

      case 12:
        {
          const token$$29 = token$$28.fields[0];
          token$$28 = token$$29;
          continue isWithAugmentBlockContinuator;
        }

      default:
        {
          return false;
        }
    }
  }
}

function isLongIdentifier(token$$30) {
  var $target$$20;

  switch (token$$30.tag) {
    case 190:
    case 77:
      $target$$20 = 0;
      break;

    default:
      $target$$20 = 1;
  }

  switch ($target$$20) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

function isLongIdentifierOrGlobal(token$$31) {
  var $target$$21;

  switch (token$$31.tag) {
    case 45:
    case 190:
    case 77:
      $target$$21 = 0;
      break;

    default:
      $target$$21 = 1;
  }

  switch ($target$$21) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

function isAtomicExprEndToken(token$$32) {
  var $target$$22;

  switch (token$$32.tag) {
    case 190:
    case 179:
    case 178:
    case 176:
    case 175:
    case 169:
    case 174:
    case 173:
    case 172:
    case 171:
    case 170:
    case 165:
    case 164:
    case 192:
    case 193:
    case 166:
    case 168:
    case 167:
    case 93:
    case 58:
    case 59:
    case 65:
    case 142:
    case 147:
    case 122:
    case 106:
    case 67:
      $target$$22 = 0;
      break;

    default:
      $target$$22 = 1;
  }

  switch ($target$$22) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

function parenTokensBalance(t1, t2) {
  var q2, q1;
  const matchValue = [t1, t2];
  var $target$$23, q1$$1, q2$$1;

  if (matchValue[0].tag === 92) {
    if (matchValue[1].tag === 93) {
      $target$$23 = 0;
    } else {
      $target$$23 = 2;
    }
  } else if (matchValue[0].tag === 74) {
    if (matchValue[1].tag === 59) {
      $target$$23 = 0;
    } else {
      $target$$23 = 2;
    }
  } else if (matchValue[0].tag === 71) {
    if (matchValue[1].tag === 58) {
      $target$$23 = 0;
    } else {
      $target$$23 = 2;
    }
  } else if (matchValue[0].tag === 111) {
    if (matchValue[1].tag === 142) {
      $target$$23 = 0;
    } else {
      $target$$23 = 2;
    }
  } else if (matchValue[0].tag === 48) {
    if (matchValue[1].tag === 142) {
      $target$$23 = 0;
    } else {
      $target$$23 = 2;
    }
  } else if (matchValue[0].tag === 56) {
    if (matchValue[1].tag === 142) {
      $target$$23 = 0;
    } else {
      $target$$23 = 2;
    }
  } else if (matchValue[0].tag === 55) {
    if (matchValue[1].tag === 142) {
      $target$$23 = 0;
    } else {
      $target$$23 = 2;
    }
  } else if (matchValue[0].tag === 72) {
    if (matchValue[1].tag === 65) {
      $target$$23 = 0;
    } else {
      $target$$23 = 2;
    }
  } else if (matchValue[0].tag === 159) {
    if (matchValue[0].fields[0]) {
      if (matchValue[1].tag === 160) {
        if (matchValue[1].fields[0]) {
          $target$$23 = 0;
        } else {
          $target$$23 = 2;
        }
      } else {
        $target$$23 = 2;
      }
    } else {
      $target$$23 = 2;
    }
  } else if (matchValue[0].tag === 136) {
    if (matchValue[1].tag === 142) {
      $target$$23 = 0;
    } else {
      $target$$23 = 2;
    }
  } else if (matchValue[0].tag === 154) {
    if (matchValue[1].tag === 155) {
      if (q2 = matchValue[1].fields[0], (q1 = matchValue[0].fields[0], (0, _Util.equalArrays)(q1, q2))) {
        $target$$23 = 1;
        q1$$1 = matchValue[0].fields[0];
        q2$$1 = matchValue[1].fields[0];
      } else {
        $target$$23 = 2;
      }
    } else {
      $target$$23 = 2;
    }
  } else {
    $target$$23 = 2;
  }

  switch ($target$$23) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return true;
      }

    case 2:
      {
        return false;
      }
  }
}

const LexbufState = (0, _Types.declare)(function LexbufState(startPos, endPos, pastEOF) {
  const $this$$1 = this;
  $this$$1.startPos = startPos;
  $this$$1.endPos = endPos;
  $this$$1.pastEOF = pastEOF;
}, _Types.Record);
exports.LexbufState = LexbufState;

function LexbufState$$$$002Ector$$590A0CCA(startPos, endPos, pastEOF) {
  return this != null ? LexbufState.call(this, startPos, endPos, pastEOF) : new LexbufState(startPos, endPos, pastEOF);
}

function LexbufState$$get_StartPos(x) {
  return x.startPos;
}

function LexbufState$$get_EndPos(x$$1) {
  return x$$1.endPos;
}

function LexbufState$$get_PastEOF(x$$2) {
  return x$$2.pastEOF;
}

const PositionTuple = (0, _Types.declare)(function PositionTuple(arg1, arg2) {
  this.X = arg1;
  this.Y = arg2;
}, _Types.Record);
exports.PositionTuple = PositionTuple;

function PositionTuple$$$$002Ector$$Z47F605E0(x$$3, y) {
  return new PositionTuple(x$$3, y);
}

const TokenTup = (0, _Types.declare)(function TokenTup(token$$33, state, lastTokenPos) {
  const $this$$2 = this;
  $this$$2.token = token$$33;
  $this$$2.state = state;
  $this$$2.lastTokenPos = lastTokenPos;
});
exports.TokenTup = TokenTup;

function TokenTup$$$$002Ector$$40945AC6(token$$33, state, lastTokenPos) {
  return this != null ? TokenTup.call(this, token$$33, state, lastTokenPos) : new TokenTup(token$$33, state, lastTokenPos);
}

function TokenTup$$get_Token(x$$4) {
  return x$$4.token;
}

function TokenTup$$get_LexbufState(x$$5) {
  return x$$5.state;
}

function TokenTup$$get_LastTokenPos(x$$6) {
  return x$$6.lastTokenPos;
}

function TokenTup$$get_StartPos(x$$7) {
  let copyOfStruct$$1 = TokenTup$$get_LexbufState(x$$7);
  return LexbufState$$get_StartPos(copyOfStruct$$1);
}

function TokenTup$$get_EndPos(x$$8) {
  let copyOfStruct$$2 = TokenTup$$get_LexbufState(x$$8);
  return LexbufState$$get_EndPos(copyOfStruct$$2);
}

function TokenTup$$UseLocation$$56122D30(x$$9, tok) {
  const tokState = TokenTup$$get_LexbufState(x$$9);
  return TokenTup$$$$002Ector$$40945AC6(tok, LexbufState$$$$002Ector$$590A0CCA(LexbufState$$get_StartPos(tokState), LexbufState$$get_EndPos(tokState), false), TokenTup$$get_LastTokenPos(x$$9));
}

function TokenTup$$UseShiftedLocation$$Z217B7B50(x$$10, tok$$1, shiftLeft, shiftRight) {
  var copyOfStruct$$3, copyOfStruct$$4;
  const tokState$$1 = TokenTup$$get_LexbufState(x$$10);
  return TokenTup$$$$002Ector$$40945AC6(tok$$1, LexbufState$$$$002Ector$$590A0CCA((copyOfStruct$$3 = LexbufState$$get_StartPos(tokState$$1), (0, _primLexing.Position$$ShiftColumnBy$$Z524259A4)(copyOfStruct$$3, shiftLeft)), (copyOfStruct$$4 = LexbufState$$get_EndPos(tokState$$1), (0, _primLexing.Position$$ShiftColumnBy$$Z524259A4)(copyOfStruct$$4, shiftRight)), false), TokenTup$$get_LastTokenPos(x$$10));
}

function $007CTyparsCloseOp$007C_$007C(txt) {
  const angles = (0, _List.ofSeq)((0, _Seq.takeWhile)(function predicate(c$$3) {
    return c$$3 === ">";
  }, txt.split("")));
  const afterAngles = (0, _List.ofSeq)((0, _Seq.skipWhile)(function predicate$$1(c$$4) {
    return c$$4 === ">";
  }, txt.split("")));

  if (angles.tail == null) {
    return null;
  } else {
    let afterOp;
    const matchValue$$1 = (0, _Array.ofSeq)(afterAngles, Array).join("");

    switch (matchValue$$1) {
      case ".":
        {
          afterOp = new _pars.token(77, "DOT");
          break;
        }

      case "]":
        {
          afterOp = new _pars.token(58, "RBRACK");
          break;
        }

      case "-":
        {
          afterOp = new _pars.token(62, "MINUS");
          break;
        }

      case "..":
        {
          afterOp = new _pars.token(143, "DOT_DOT");
          break;
        }

      case "?":
        {
          afterOp = new _pars.token(75, "QMARK");
          break;
        }

      case "??":
        {
          afterOp = new _pars.token(76, "QMARK_QMARK");
          break;
        }

      case ":=":
        {
          afterOp = new _pars.token(83, "COLON_EQUALS");
          break;
        }

      case "::":
        {
          afterOp = new _pars.token(79, "COLON_COLON");
          break;
        }

      case "*":
        {
          afterOp = new _pars.token(96, "STAR");
          break;
        }

      case "&":
        {
          afterOp = new _pars.token(89, "AMP");
          break;
        }

      case "->":
        {
          afterOp = new _pars.token(98, "RARROW");
          break;
        }

      case "<-":
        {
          afterOp = new _pars.token(69, "LARROW");
          break;
        }

      case "=":
        {
          afterOp = new _pars.token(70, "EQUALS");
          break;
        }

      case "<":
        {
          afterOp = new _pars.token(159, "LESS", false);
          break;
        }

      case "$":
        {
          afterOp = new _pars.token(63, "DOLLAR");
          break;
        }

      case "%":
        {
          afterOp = new _pars.token(157, "PERCENT_OP", "%");
          break;
        }

      case "%%":
        {
          afterOp = new _pars.token(157, "PERCENT_OP", "%%");
          break;
        }

      case "":
        {
          afterOp = null;
          break;
        }

      default:
        {
          const s = matchValue$$1;
          const matchValue$$2 = (0, _List.ofSeq)(afterAngles);
          var $target$$24;

          if (matchValue$$2.tail != null) {
            if (matchValue$$2.head === "!") {
              if (matchValue$$2.tail.tail != null) {
                if (matchValue$$2.tail.head === "=") {
                  $target$$24 = 0;
                } else {
                  $target$$24 = 3;
                }
              } else {
                $target$$24 = 3;
              }
            } else if (matchValue$$2.head === "$") {
              $target$$24 = 0;
            } else if (matchValue$$2.head === "%") {
              $target$$24 = 7;
            } else if (matchValue$$2.head === "&") {
              $target$$24 = 1;
            } else if (matchValue$$2.head === "*") {
              if (matchValue$$2.tail.tail != null) {
                if (matchValue$$2.tail.head === "*") {
                  $target$$24 = 6;
                } else {
                  $target$$24 = 7;
                }
              } else {
                $target$$24 = 7;
              }
            } else if (matchValue$$2.head === "+") {
              $target$$24 = 5;
            } else if (matchValue$$2.head === "-") {
              $target$$24 = 5;
            } else if (matchValue$$2.head === "/") {
              $target$$24 = 7;
            } else if (matchValue$$2.head === "<") {
              $target$$24 = 0;
            } else if (matchValue$$2.head === "=") {
              $target$$24 = 0;
            } else if (matchValue$$2.head === ">") {
              $target$$24 = 0;
            } else if (matchValue$$2.head === "?") {
              $target$$24 = 3;
            } else if (matchValue$$2.head === "@") {
              $target$$24 = 4;
            } else if (matchValue$$2.head === "^") {
              $target$$24 = 4;
            } else if (matchValue$$2.head === "|") {
              $target$$24 = 2;
            } else if (matchValue$$2.head === "~") {
              $target$$24 = 3;
            } else {
              $target$$24 = 8;
            }
          } else {
            $target$$24 = 8;
          }

          switch ($target$$24) {
            case 0:
              {
                afterOp = new _pars.token(188, "INFIX_COMPARE_OP", s);
                break;
              }

            case 1:
              {
                afterOp = new _pars.token(183, "INFIX_AMP_OP", s);
                break;
              }

            case 2:
              {
                afterOp = new _pars.token(186, "INFIX_BAR_OP", s);
                break;
              }

            case 3:
              {
                afterOp = new _pars.token(185, "PREFIX_OP", s);
                break;
              }

            case 4:
              {
                afterOp = new _pars.token(187, "INFIX_AT_HAT_OP", s);
                break;
              }

            case 5:
              {
                afterOp = new _pars.token(182, "PLUS_MINUS_OP", s);
                break;
              }

            case 6:
              {
                afterOp = new _pars.token(189, "INFIX_STAR_STAR_OP", s);
                break;
              }

            case 7:
              {
                afterOp = new _pars.token(184, "INFIX_STAR_DIV_MOD_OP", s);
                break;
              }

            case 8:
              {
                afterOp = null;
                break;
              }
          }
        }
    }

    return [(0, _Array.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.map)(function (_c) {
        return function (arg0) {
          return new _pars.token(160, "GREATER", arg0);
        };
      }, angles);
    }), Array), afterOp];
  }
}

const PositionWithColumn = (0, _Types.declare)(function PositionWithColumn(arg1, arg2) {
  this.Position = arg1;
  this.Column = arg2 | 0;
}, _Types.Record);
exports.PositionWithColumn = PositionWithColumn;

function PositionWithColumn$$$$002Ector$$Z10741753(position, column) {
  return new PositionWithColumn(position, column);
}

const LexFilterImpl = (0, _Types.declare)(function LexFilterImpl(lightSyntaxStatus, compilingFsLib, lexer, lexbuf) {
  const $this$$3 = this;
  $this$$3.lightSyntaxStatus = lightSyntaxStatus;
  $this$$3.compilingFsLib = compilingFsLib;
  $this$$3.lexer = lexer;
  $this$$3.lexbuf = lexbuf;
  $this$$3.savedLexbufState = null;
  $this$$3.haveLexbufState = false;
  $this$$3.delayedStack = (0, _primParsing.Stack$00601$$$$002Ector$$Z524259A4)(100);
  $this$$3.tokensThatNeedNoProcessingCount = 0;
  $this$$3.initialized = false;
  $this$$3.offsideStack = (0, _Types.L)();
  $this$$3.prevWasAtomicEnd = false;
});
exports.LexFilterImpl = LexFilterImpl;

function LexFilterImpl$$$$002Ector$$74BB6F03(lightSyntaxStatus, compilingFsLib, lexer, lexbuf) {
  return this != null ? LexFilterImpl.call(this, lightSyntaxStatus, compilingFsLib, lexer, lexbuf) : new LexFilterImpl(lightSyntaxStatus, compilingFsLib, lexer, lexbuf);
}

function LexFilterImpl$$get_LexBuffer(__) {
  return __.lexbuf;
}

function LexFilterImpl$$Lexer$$1505(__$$1, _arg1) {
  if (!__$$1.initialized) {
    const _firstTokenTup = LexFilterImpl$$peekInitial(__$$1);
  }

  if ((0, _lexhelp.LightSyntaxStatus$$get_Status)(__$$1.lightSyntaxStatus)) {
    return LexFilterImpl$$hwTokenFetch$$Z1FBCCD16(__$$1, true);
  } else {
    return LexFilterImpl$$swTokenFetch(__$$1);
  }
}

function LexFilterImpl$$lexbufStateForInsertedDummyTokens$$Z47F605E0(this$, lastTokenStartPos, lastTokenEndPos) {
  return LexbufState$$$$002Ector$$590A0CCA(lastTokenStartPos, lastTokenEndPos, false);
}

function LexFilterImpl$$getLexbufState(this$$$1) {
  return LexbufState$$$$002Ector$$590A0CCA((0, _primLexing.LexBuffer$00601$$get_StartPos)(this$$$1.lexbuf), (0, _primLexing.LexBuffer$00601$$get_EndPos)(this$$$1.lexbuf), (0, _primLexing.LexBuffer$00601$$get_IsPastEndOfStream)(this$$$1.lexbuf));
}

function LexFilterImpl$$setLexbufState$$Z43E1A716(this$$$2, p$$10) {
  (0, _primLexing.LexBuffer$00601$$set_StartPos$$Z5C04B2F)(this$$$2.lexbuf, LexbufState$$get_StartPos(p$$10));
  (0, _primLexing.LexBuffer$00601$$set_EndPos$$Z5C04B2F)(this$$$2.lexbuf, LexbufState$$get_EndPos(p$$10));
  (0, _primLexing.LexBuffer$00601$$set_IsPastEndOfStream$$Z1FBCCD16)(this$$$2.lexbuf, LexbufState$$get_PastEOF(p$$10));
}

function LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$3, tokenTup) {
  if (TokenTup$$get_Token(tokenTup).tag === 10) {
    let copyOfStruct$$6;
    let copyOfStruct$$5 = TokenTup$$get_LexbufState(tokenTup);
    copyOfStruct$$6 = LexbufState$$get_StartPos(copyOfStruct$$5);
    return (0, _primLexing.Position$$get_ColumnMinusOne)(copyOfStruct$$6);
  } else {
    let copyOfStruct$$7 = TokenTup$$get_LexbufState(tokenTup);
    return LexbufState$$get_StartPos(copyOfStruct$$7);
  }
}

function LexFilterImpl$$runWrappedLexerInConsistentLexbufState(this$$$4) {
  const state$$1 = this$$$4.haveLexbufState ? this$$$4.savedLexbufState : LexFilterImpl$$getLexbufState(this$$$4);
  LexFilterImpl$$setLexbufState$$Z43E1A716(this$$$4, state$$1);
  const lastTokenStart = LexbufState$$get_StartPos(state$$1);
  const lastTokenEnd = LexbufState$$get_EndPos(state$$1);
  const token$$34 = this$$$4.lexer(this$$$4.lexbuf);
  const tokenLexbufState = LexFilterImpl$$getLexbufState(this$$$4);
  this$$$4.savedLexbufState = tokenLexbufState;
  this$$$4.haveLexbufState = true;
  return TokenTup$$$$002Ector$$40945AC6(token$$34, tokenLexbufState, PositionTuple$$$$002Ector$$Z47F605E0(lastTokenStart, lastTokenEnd));
}

function LexFilterImpl$$delayToken$$24788697(this$$$5, tokenTup$$1) {
  (0, _primParsing.Stack$00601$$Push$$2B595)(this$$$5.delayedStack, tokenTup$$1);
}

function LexFilterImpl$$delayTokenNoProcessing$$24788697(this$$$6, tokenTup$$2) {
  LexFilterImpl$$delayToken$$24788697(this$$$6, tokenTup$$2);
  this$$$6.tokensThatNeedNoProcessingCount = this$$$6.tokensThatNeedNoProcessingCount + 1;
}

function LexFilterImpl$$popNextTokenTup(this$$$7) {
  if ((0, _primParsing.Stack$00601$$get_Count)(this$$$7.delayedStack) > 0) {
    const tokenTup$$3 = (0, _primParsing.Stack$00601$$Pop)(this$$$7.delayedStack);

    if (debug) {
      (0, _ildiag.dprintf)((0, _String.printf)("popNextTokenTup: delayed token, tokenStartPos = %a\n"))(outputPos)(LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$7, tokenTup$$3));
    }

    return tokenTup$$3;
  } else {
    if (debug) {
      (0, _ildiag.dprintf)((0, _String.printf)("popNextTokenTup: no delayed tokens, running lexer...\n"));
    }

    return LexFilterImpl$$runWrappedLexerInConsistentLexbufState(this$$$7);
  }
}

function LexFilterImpl$$peekInitial(this$$$8) {
  const initialLookaheadTokenTup = LexFilterImpl$$popNextTokenTup(this$$$8);

  if (debug) {
    (0, _ildiag.dprintf)((0, _String.printf)("first token: initialLookaheadTokenLexbufState = %a\n"))(outputPos)(LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$8, initialLookaheadTokenTup));
  }

  LexFilterImpl$$delayToken$$24788697(this$$$8, initialLookaheadTokenTup);
  this$$$8.initialized = true;
  this$$$8.offsideStack = (0, _Types.L)(new Context(25, "CtxtSeqBlock", new FirstInSequence(0, "FirstInSeqBlock"), LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$8, initialLookaheadTokenTup), new AddBlockEnd(1, "NoAddBlockEnd")), this$$$8.offsideStack);
  return initialLookaheadTokenTup;
}

function LexFilterImpl$$warn(this$$$9, s$$1, msg) {
  var copyOfStruct$$8;
  (0, _ErrorLogger.warning)(new _lexhelp.IndentationProblem(msg, (0, _ast.mkSynRange)(LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$9, s$$1), (copyOfStruct$$8 = TokenTup$$get_LexbufState(s$$1), LexbufState$$get_EndPos(copyOfStruct$$8)))));
}

function LexFilterImpl$$detectJoinInCtxt$$114910A8(this$$$10, stack) {
  const check = function check(s$$2) {
    check: while (true) {
      var $target$$25, rest;

      if (s$$2.tail != null) {
        if (s$$2.head.tag === 24) {
          if (s$$2.head.fields[0].tag === 74) {
            $target$$25 = 0;
          } else {
            $target$$25 = 2;
          }
        } else if (s$$2.head.tag === 25) {
          $target$$25 = 1;
          rest = s$$2.tail;
        } else if (s$$2.head.tag === 14) {
          $target$$25 = 1;
          rest = s$$2.tail;
        } else if (s$$2.head.tag === 8) {
          $target$$25 = 1;
          rest = s$$2.tail;
        } else {
          $target$$25 = 2;
        }
      } else {
        $target$$25 = 2;
      }

      switch ($target$$25) {
        case 0:
          {
            return true;
          }

        case 1:
          {
            s$$2 = rest;
            continue check;
          }

        case 2:
          {
            return false;
          }
      }
    }
  };

  var $target$$26, rest$$1;

  if (stack.tail != null) {
    if (stack.head.tag === 11) {
      $target$$26 = 0;
      rest$$1 = stack.tail;
    } else {
      $target$$26 = 1;
    }
  } else {
    $target$$26 = 1;
  }

  switch ($target$$26) {
    case 0:
      {
        return check(rest$$1);
      }

    case 1:
      {
        return false;
      }
  }
}

function LexFilterImpl$$pushCtxt(this$$$11, tokenTup$$4, newCtxt) {
  const unindentationLimit = function unindentationLimit(strict, stack$$1) {
    var rest$$5, rest$$2;

    unindentationLimit: while (true) {
      const matchValue$$4 = [newCtxt, stack$$1];
      var $target$$27, rest$$3, rest$$4;

      if (matchValue$$4[1].tail != null) {
        if (matchValue$$4[1].head.tag === 11) {
          $target$$27 = 1;
          rest$$3 = matchValue$$4[1].tail;
        } else if (matchValue$$4[1].head.tag === 25) {
          if (rest$$2 = matchValue$$4[1].tail, !strict) {
            $target$$27 = 2;
            rest$$4 = matchValue$$4[1].tail;
          } else {
            $target$$27 = 3;
          }
        } else {
          $target$$27 = 3;
        }
      } else {
        $target$$27 = 0;
      }

      switch ($target$$27) {
        case 0:
          {
            return PositionWithColumn$$$$002Ector$$Z10741753(Context$$get_StartPos(newCtxt), -1);
          }

        case 1:
          {
            strict = strict;
            stack$$1 = rest$$3;
            continue unindentationLimit;
          }

        case 2:
          {
            strict = strict;
            stack$$1 = rest$$4;
            continue unindentationLimit;
          }

        case 3:
          {
            var $target$$28, rest$$6;

            if (matchValue$$4[1].tail != null) {
              if (matchValue$$4[1].head.tag === 24) {
                if (rest$$5 = matchValue$$4[1].tail, !strict) {
                  $target$$28 = 0;
                  rest$$6 = matchValue$$4[1].tail;
                } else {
                  $target$$28 = 1;
                }
              } else {
                $target$$28 = 1;
              }
            } else {
              $target$$28 = 1;
            }

            switch ($target$$28) {
              case 0:
                {
                  strict = strict;
                  stack$$1 = rest$$6;
                  continue unindentationLimit;
                }

              case 1:
                {
                  var $target$$29, _rest, ctxt1, ctxt2, _rest$$1, limitCtxt, rest$$7, _rest$$2, limitCtxt$$1, rest$$8, rest$$9, _rest$$3, limitCtxt$$2, _rest$$4, limitCtxt$$3, rest$$10, rest$$11, limitCtxt$$4, limitCtxt$$5, _rest$$5, limitCtxt$$6, _rest$$6, limitCtxt$$7, limitCtxt$$8, limitCtxt$$9;

                  if (matchValue$$4[1].tail != null) {
                    if (matchValue$$4[1].head.tag === 7) {
                      if (matchValue$$4[1].tail.tail != null) {
                        if (matchValue$$4[1].tail.head.tag === 25) {
                          if (matchValue$$4[1].tail.tail.tail != null) {
                            if (matchValue$$4[1].tail.tail.head.tag === 24) {
                              if (matchValue$$4[1].tail.tail.head.fields[0].tag === 136) {
                                $target$$29 = 0;
                                _rest = matchValue$$4[1].tail.tail.tail;
                                ctxt1 = matchValue$$4[1].head;
                                ctxt2 = matchValue$$4[1].tail.tail.head;
                              } else if (matchValue$$4[1].tail.tail.head.fields[0].tag === 92) {
                                $target$$29 = 0;
                                _rest = matchValue$$4[1].tail.tail.tail;
                                ctxt1 = matchValue$$4[1].head;
                                ctxt2 = matchValue$$4[1].tail.tail.head;
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else {
                            $target$$29 = 15;
                            limitCtxt$$9 = matchValue$$4[1].head;
                          }
                        } else {
                          $target$$29 = 15;
                          limitCtxt$$9 = matchValue$$4[1].head;
                        }
                      } else {
                        $target$$29 = 15;
                        limitCtxt$$9 = matchValue$$4[1].head;
                      }
                    } else if (matchValue$$4[1].head.tag === 4) {
                      if (matchValue$$4[1].tail.tail != null) {
                        if (matchValue$$4[1].tail.head.tag === 25) {
                          if (matchValue$$4[1].tail.tail.tail != null) {
                            if (matchValue$$4[1].tail.tail.head.tag === 0) {
                              if (matchValue$$4[0].tag === 26) {
                                $target$$29 = 1;
                                _rest$$1 = matchValue$$4[1].tail.tail.tail;
                                limitCtxt = matchValue$$4[1].tail.tail.head;
                              } else {
                                $target$$29 = 9;
                                rest$$11 = matchValue$$4[1].tail;
                              }
                            } else if (matchValue$$4[0].tag === 26) {
                              $target$$29 = 2;
                              rest$$7 = matchValue$$4[1].tail;
                            } else {
                              $target$$29 = 9;
                              rest$$11 = matchValue$$4[1].tail;
                            }
                          } else if (matchValue$$4[0].tag === 26) {
                            $target$$29 = 2;
                            rest$$7 = matchValue$$4[1].tail;
                          } else {
                            $target$$29 = 9;
                            rest$$11 = matchValue$$4[1].tail;
                          }
                        } else if (matchValue$$4[0].tag === 26) {
                          $target$$29 = 2;
                          rest$$7 = matchValue$$4[1].tail;
                        } else {
                          $target$$29 = 9;
                          rest$$11 = matchValue$$4[1].tail;
                        }
                      } else if (matchValue$$4[0].tag === 26) {
                        $target$$29 = 2;
                        rest$$7 = matchValue$$4[1].tail;
                      } else {
                        $target$$29 = 9;
                        rest$$11 = matchValue$$4[1].tail;
                      }
                    } else if (matchValue$$4[1].head.tag === 26) {
                      if (matchValue$$4[1].tail.tail != null) {
                        if (matchValue$$4[1].tail.head.tag === 2) {
                          $target$$29 = 3;
                          _rest$$2 = matchValue$$4[1].tail.tail;
                          limitCtxt$$1 = matchValue$$4[1].tail.head;
                        } else {
                          $target$$29 = 15;
                          limitCtxt$$9 = matchValue$$4[1].head;
                        }
                      } else {
                        $target$$29 = 15;
                        limitCtxt$$9 = matchValue$$4[1].head;
                      }
                    } else if (matchValue$$4[1].head.tag === 3) {
                      $target$$29 = 4;
                      rest$$8 = matchValue$$4[1].tail;
                    } else if (matchValue$$4[1].head.tag === 24) {
                      if (matchValue$$4[1].head.fields[0].tag === 74) {
                        if (matchValue$$4[1].tail.tail != null) {
                          if (matchValue$$4[1].tail.head.tag === 25) {
                            $target$$29 = 5;
                            rest$$9 = matchValue$$4[1].tail.tail;
                          } else if (matchValue$$4[1].tail.head.tag === 11) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 25) {
                                $target$$29 = 5;
                                rest$$9 = matchValue$$4[1].tail.tail.tail;
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else {
                            $target$$29 = 15;
                            limitCtxt$$9 = matchValue$$4[1].head;
                          }
                        } else {
                          $target$$29 = 15;
                          limitCtxt$$9 = matchValue$$4[1].head;
                        }
                      } else if (matchValue$$4[1].head.fields[0].tag === 71) {
                        if (matchValue$$4[1].tail.tail != null) {
                          if (matchValue$$4[1].tail.head.tag === 25) {
                            $target$$29 = 5;
                            rest$$9 = matchValue$$4[1].tail.tail;
                          } else if (matchValue$$4[1].tail.head.tag === 11) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 25) {
                                $target$$29 = 5;
                                rest$$9 = matchValue$$4[1].tail.tail.tail;
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else {
                            $target$$29 = 15;
                            limitCtxt$$9 = matchValue$$4[1].head;
                          }
                        } else {
                          $target$$29 = 15;
                          limitCtxt$$9 = matchValue$$4[1].head;
                        }
                      } else if (matchValue$$4[1].head.fields[0].tag === 72) {
                        if (matchValue$$4[1].tail.tail != null) {
                          if (matchValue$$4[1].tail.head.tag === 25) {
                            $target$$29 = 5;
                            rest$$9 = matchValue$$4[1].tail.tail;
                          } else if (matchValue$$4[1].tail.head.tag === 11) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 25) {
                                $target$$29 = 5;
                                rest$$9 = matchValue$$4[1].tail.tail.tail;
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else {
                            $target$$29 = 15;
                            limitCtxt$$9 = matchValue$$4[1].head;
                          }
                        } else {
                          $target$$29 = 15;
                          limitCtxt$$9 = matchValue$$4[1].head;
                        }
                      } else if (matchValue$$4[1].head.fields[0].tag === 56) {
                        if (matchValue$$4[1].tail.tail != null) {
                          if (matchValue$$4[1].tail.head.tag === 25) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 21) {
                                if (matchValue$$4[1].tail.tail.head.fields[1]) {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                } else {
                                  $target$$29 = 10;
                                  limitCtxt$$4 = matchValue$$4[1].tail.tail.head;
                                }
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else {
                            $target$$29 = 15;
                            limitCtxt$$9 = matchValue$$4[1].head;
                          }
                        } else {
                          $target$$29 = 15;
                          limitCtxt$$9 = matchValue$$4[1].head;
                        }
                      } else if (matchValue$$4[1].head.fields[0].tag === 55) {
                        if (matchValue$$4[1].tail.tail != null) {
                          if (matchValue$$4[1].tail.head.tag === 25) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 21) {
                                if (matchValue$$4[1].tail.tail.head.fields[1]) {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                } else {
                                  $target$$29 = 10;
                                  limitCtxt$$4 = matchValue$$4[1].tail.tail.head;
                                }
                              } else if (matchValue$$4[1].tail.tail.head.tag === 16) {
                                $target$$29 = 10;
                                limitCtxt$$4 = matchValue$$4[1].tail.tail.head;
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else {
                            $target$$29 = 15;
                            limitCtxt$$9 = matchValue$$4[1].head;
                          }
                        } else {
                          $target$$29 = 15;
                          limitCtxt$$9 = matchValue$$4[1].head;
                        }
                      } else if (matchValue$$4[1].head.fields[0].tag === 136) {
                        if (matchValue$$4[1].tail.tail != null) {
                          if (matchValue$$4[1].tail.head.tag === 25) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 21) {
                                if (matchValue$$4[1].tail.tail.head.fields[1]) {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                } else {
                                  $target$$29 = 10;
                                  limitCtxt$$4 = matchValue$$4[1].tail.tail.head;
                                }
                              } else if (matchValue$$4[1].tail.tail.head.tag === 12) {
                                if (matchValue$$4[1].tail.tail.tail.tail != null) {
                                  if (matchValue$$4[1].tail.tail.tail.head.tag === 1) {
                                    $target$$29 = 10;
                                    limitCtxt$$4 = matchValue$$4[1].tail.tail.tail.head;
                                  } else {
                                    $target$$29 = 15;
                                    limitCtxt$$9 = matchValue$$4[1].head;
                                  }
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else if (matchValue$$4[1].tail.tail.head.tag === 13) {
                                if (matchValue$$4[1].tail.tail.tail.tail != null) {
                                  if (matchValue$$4[1].tail.tail.tail.head.tag === 1) {
                                    $target$$29 = 10;
                                    limitCtxt$$4 = matchValue$$4[1].tail.tail.tail.head;
                                  } else {
                                    $target$$29 = 15;
                                    limitCtxt$$9 = matchValue$$4[1].head;
                                  }
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else if (matchValue$$4[1].tail.tail.head.tag === 16) {
                                if (matchValue$$4[0].tag === 25) {
                                  $target$$29 = 11;
                                  limitCtxt$$5 = matchValue$$4[1].tail.tail.head;
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else if (matchValue$$4[1].tail.tail.head.tag === 0) {
                                if (matchValue$$4[0].tag === 25) {
                                  $target$$29 = 11;
                                  limitCtxt$$5 = matchValue$$4[1].tail.tail.head;
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else if (matchValue$$4[1].tail.tail.head.tag === 20) {
                                if (matchValue$$4[0].tag === 25) {
                                  $target$$29 = 11;
                                  limitCtxt$$5 = matchValue$$4[1].tail.tail.head;
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else if (matchValue$$4[1].tail.tail.head.tag === 5) {
                                if (matchValue$$4[0].tag === 25) {
                                  $target$$29 = 11;
                                  limitCtxt$$5 = matchValue$$4[1].tail.tail.head;
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else if (matchValue$$4[1].tail.head.tag === 11) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 25) {
                                $target$$29 = 10;
                                limitCtxt$$4 = matchValue$$4[1].tail.tail.head;
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else {
                            $target$$29 = 15;
                            limitCtxt$$9 = matchValue$$4[1].head;
                          }
                        } else {
                          $target$$29 = 15;
                          limitCtxt$$9 = matchValue$$4[1].head;
                        }
                      } else if (matchValue$$4[1].head.fields[0].tag === 92) {
                        if (matchValue$$4[1].tail.tail != null) {
                          if (matchValue$$4[1].tail.head.tag === 25) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 12) {
                                if (matchValue$$4[1].tail.tail.tail.tail != null) {
                                  if (matchValue$$4[1].tail.tail.tail.head.tag === 1) {
                                    $target$$29 = 10;
                                    limitCtxt$$4 = matchValue$$4[1].tail.tail.tail.head;
                                  } else {
                                    $target$$29 = 15;
                                    limitCtxt$$9 = matchValue$$4[1].head;
                                  }
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else if (matchValue$$4[1].tail.tail.head.tag === 13) {
                                if (matchValue$$4[1].tail.tail.tail.tail != null) {
                                  if (matchValue$$4[1].tail.tail.tail.head.tag === 1) {
                                    $target$$29 = 10;
                                    limitCtxt$$4 = matchValue$$4[1].tail.tail.tail.head;
                                  } else {
                                    $target$$29 = 15;
                                    limitCtxt$$9 = matchValue$$4[1].head;
                                  }
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else if (matchValue$$4[1].tail.tail.head.tag === 16) {
                                if (matchValue$$4[0].tag === 25) {
                                  $target$$29 = 11;
                                  limitCtxt$$5 = matchValue$$4[1].tail.tail.head;
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else if (matchValue$$4[1].tail.tail.head.tag === 0) {
                                if (matchValue$$4[0].tag === 25) {
                                  $target$$29 = 11;
                                  limitCtxt$$5 = matchValue$$4[1].tail.tail.head;
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else if (matchValue$$4[1].tail.tail.head.tag === 20) {
                                if (matchValue$$4[0].tag === 25) {
                                  $target$$29 = 11;
                                  limitCtxt$$5 = matchValue$$4[1].tail.tail.head;
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else if (matchValue$$4[1].tail.tail.head.tag === 5) {
                                if (matchValue$$4[0].tag === 25) {
                                  $target$$29 = 11;
                                  limitCtxt$$5 = matchValue$$4[1].tail.tail.head;
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else if (matchValue$$4[1].tail.head.tag === 11) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 25) {
                                $target$$29 = 10;
                                limitCtxt$$4 = matchValue$$4[1].tail.tail.head;
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else {
                            $target$$29 = 15;
                            limitCtxt$$9 = matchValue$$4[1].head;
                          }
                        } else {
                          $target$$29 = 15;
                          limitCtxt$$9 = matchValue$$4[1].head;
                        }
                      } else if (matchValue$$4[1].head.fields[0].tag === 159) {
                        if (matchValue$$4[1].head.fields[0].fields[0]) {
                          if (matchValue$$4[1].tail.tail != null) {
                            if (matchValue$$4[1].tail.head.tag === 11) {
                              if (matchValue$$4[1].tail.tail.tail != null) {
                                if (matchValue$$4[1].tail.tail.head.tag === 25) {
                                  $target$$29 = 10;
                                  limitCtxt$$4 = matchValue$$4[1].tail.tail.head;
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else {
                            $target$$29 = 15;
                            limitCtxt$$9 = matchValue$$4[1].head;
                          }
                        } else {
                          $target$$29 = 15;
                          limitCtxt$$9 = matchValue$$4[1].head;
                        }
                      } else if (matchValue$$4[1].head.fields[0].tag === 48) {
                        if (matchValue$$4[1].tail.tail != null) {
                          if (matchValue$$4[1].tail.head.tag === 25) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 16) {
                                $target$$29 = 10;
                                limitCtxt$$4 = matchValue$$4[1].tail.tail.head;
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else {
                            $target$$29 = 15;
                            limitCtxt$$9 = matchValue$$4[1].head;
                          }
                        } else {
                          $target$$29 = 15;
                          limitCtxt$$9 = matchValue$$4[1].head;
                        }
                      } else if (matchValue$$4[1].head.fields[0].tag === 111) {
                        if (matchValue$$4[1].tail.tail != null) {
                          if (matchValue$$4[1].tail.head.tag === 25) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 16) {
                                $target$$29 = 10;
                                limitCtxt$$4 = matchValue$$4[1].tail.tail.head;
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else {
                            $target$$29 = 15;
                            limitCtxt$$9 = matchValue$$4[1].head;
                          }
                        } else {
                          $target$$29 = 15;
                          limitCtxt$$9 = matchValue$$4[1].head;
                        }
                      } else {
                        $target$$29 = 15;
                        limitCtxt$$9 = matchValue$$4[1].head;
                      }
                    } else if (matchValue$$4[1].head.tag === 25) {
                      if (matchValue$$4[1].tail.tail != null) {
                        if (matchValue$$4[1].tail.head.tag === 24) {
                          if (matchValue$$4[1].tail.head.fields[0].tag === 74) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 11) {
                                if (matchValue$$4[1].tail.tail.tail.tail != null) {
                                  if (matchValue$$4[1].tail.tail.tail.head.tag === 25) {
                                    $target$$29 = 5;
                                    rest$$9 = matchValue$$4[1].tail.tail.tail.tail;
                                  } else {
                                    $target$$29 = 15;
                                    limitCtxt$$9 = matchValue$$4[1].head;
                                  }
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else if (matchValue$$4[1].tail.head.fields[0].tag === 71) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 11) {
                                if (matchValue$$4[1].tail.tail.tail.tail != null) {
                                  if (matchValue$$4[1].tail.tail.tail.head.tag === 25) {
                                    $target$$29 = 5;
                                    rest$$9 = matchValue$$4[1].tail.tail.tail.tail;
                                  } else {
                                    $target$$29 = 15;
                                    limitCtxt$$9 = matchValue$$4[1].head;
                                  }
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else if (matchValue$$4[1].tail.head.fields[0].tag === 72) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 11) {
                                if (matchValue$$4[1].tail.tail.tail.tail != null) {
                                  if (matchValue$$4[1].tail.tail.tail.head.tag === 25) {
                                    $target$$29 = 5;
                                    rest$$9 = matchValue$$4[1].tail.tail.tail.tail;
                                  } else {
                                    $target$$29 = 15;
                                    limitCtxt$$9 = matchValue$$4[1].head;
                                  }
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else if (matchValue$$4[1].tail.head.fields[0].tag === 136) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 11) {
                                if (matchValue$$4[1].tail.tail.tail.tail != null) {
                                  if (matchValue$$4[1].tail.tail.tail.head.tag === 25) {
                                    $target$$29 = 11;
                                    limitCtxt$$5 = matchValue$$4[1].tail.tail.tail.head;
                                  } else {
                                    $target$$29 = 15;
                                    limitCtxt$$9 = matchValue$$4[1].head;
                                  }
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else if (matchValue$$4[1].tail.head.fields[0].tag === 92) {
                            if (matchValue$$4[1].tail.tail.tail != null) {
                              if (matchValue$$4[1].tail.tail.head.tag === 11) {
                                if (matchValue$$4[1].tail.tail.tail.tail != null) {
                                  if (matchValue$$4[1].tail.tail.tail.head.tag === 25) {
                                    $target$$29 = 11;
                                    limitCtxt$$5 = matchValue$$4[1].tail.tail.tail.head;
                                  } else {
                                    $target$$29 = 15;
                                    limitCtxt$$9 = matchValue$$4[1].head;
                                  }
                                } else {
                                  $target$$29 = 15;
                                  limitCtxt$$9 = matchValue$$4[1].head;
                                }
                              } else {
                                $target$$29 = 15;
                                limitCtxt$$9 = matchValue$$4[1].head;
                              }
                            } else {
                              $target$$29 = 15;
                              limitCtxt$$9 = matchValue$$4[1].head;
                            }
                          } else {
                            $target$$29 = 15;
                            limitCtxt$$9 = matchValue$$4[1].head;
                          }
                        } else {
                          $target$$29 = 15;
                          limitCtxt$$9 = matchValue$$4[1].head;
                        }
                      } else {
                        $target$$29 = 15;
                        limitCtxt$$9 = matchValue$$4[1].head;
                      }
                    } else if (matchValue$$4[1].head.tag === 13) {
                      if (matchValue$$4[1].tail.tail != null) {
                        if (matchValue$$4[1].tail.head.tag === 1) {
                          if (matchValue$$4[0].tag === 25) {
                            $target$$29 = 6;
                            _rest$$3 = matchValue$$4[1].tail.tail;
                            limitCtxt$$2 = matchValue$$4[1].tail.head;
                          } else {
                            $target$$29 = 8;
                            rest$$10 = matchValue$$4[1].tail;
                          }
                        } else {
                          $target$$29 = 8;
                          rest$$10 = matchValue$$4[1].tail;
                        }
                      } else {
                        $target$$29 = 8;
                        rest$$10 = matchValue$$4[1].tail;
                      }
                    } else if (matchValue$$4[1].head.tag === 15) {
                      if (matchValue$$4[0].tag === 6) {
                        $target$$29 = 7;
                        _rest$$4 = matchValue$$4[1].tail;
                        limitCtxt$$3 = matchValue$$4[1].head;
                      } else {
                        $target$$29 = 14;
                        limitCtxt$$8 = matchValue$$4[1].head;
                      }
                    } else if (matchValue$$4[1].head.tag === 19) {
                      if (matchValue$$4[0].tag === 6) {
                        $target$$29 = 7;
                        _rest$$4 = matchValue$$4[1].tail;
                        limitCtxt$$3 = matchValue$$4[1].head;
                      } else {
                        $target$$29 = 14;
                        limitCtxt$$8 = matchValue$$4[1].head;
                      }
                    } else if (matchValue$$4[1].head.tag === 23) {
                      if (matchValue$$4[0].tag === 6) {
                        $target$$29 = 7;
                        _rest$$4 = matchValue$$4[1].tail;
                        limitCtxt$$3 = matchValue$$4[1].head;
                      } else {
                        $target$$29 = 14;
                        limitCtxt$$8 = matchValue$$4[1].head;
                      }
                    } else if (matchValue$$4[1].head.tag === 16) {
                      if (matchValue$$4[0].tag === 6) {
                        $target$$29 = 7;
                        _rest$$4 = matchValue$$4[1].tail;
                        limitCtxt$$3 = matchValue$$4[1].head;
                      } else {
                        $target$$29 = 15;
                        limitCtxt$$9 = matchValue$$4[1].head;
                      }
                    } else if (matchValue$$4[1].head.tag === 6) {
                      $target$$29 = 8;
                      rest$$10 = matchValue$$4[1].tail;
                    } else if (matchValue$$4[1].head.tag === 12) {
                      $target$$29 = 8;
                      rest$$10 = matchValue$$4[1].tail;
                    } else if (matchValue$$4[1].head.tag === 14) {
                      $target$$29 = 8;
                      rest$$10 = matchValue$$4[1].tail;
                    } else if (matchValue$$4[1].head.tag === 1) {
                      if (matchValue$$4[0].tag === 1) {
                        $target$$29 = 12;
                        _rest$$5 = matchValue$$4[1].tail;
                        limitCtxt$$6 = matchValue$$4[1].head;
                      } else if (matchValue$$4[0].tag === 13) {
                        $target$$29 = 12;
                        _rest$$5 = matchValue$$4[1].tail;
                        limitCtxt$$6 = matchValue$$4[1].head;
                      } else if (matchValue$$4[0].tag === 12) {
                        $target$$29 = 12;
                        _rest$$5 = matchValue$$4[1].tail;
                        limitCtxt$$6 = matchValue$$4[1].head;
                      } else {
                        $target$$29 = 14;
                        limitCtxt$$8 = matchValue$$4[1].head;
                      }
                    } else if (matchValue$$4[1].head.tag === 8) {
                      if (matchValue$$4[0].tag === 14) {
                        $target$$29 = 13;
                        _rest$$6 = matchValue$$4[1].tail;
                        limitCtxt$$7 = matchValue$$4[1].head;
                      } else {
                        $target$$29 = 15;
                        limitCtxt$$9 = matchValue$$4[1].head;
                      }
                    } else if (matchValue$$4[1].head.tag === 9) {
                      if (matchValue$$4[0].tag === 14) {
                        $target$$29 = 13;
                        _rest$$6 = matchValue$$4[1].tail;
                        limitCtxt$$7 = matchValue$$4[1].head;
                      } else {
                        $target$$29 = 15;
                        limitCtxt$$9 = matchValue$$4[1].head;
                      }
                    } else if (matchValue$$4[1].head.tag === 17) {
                      $target$$29 = 14;
                      limitCtxt$$8 = matchValue$$4[1].head;
                    } else if (matchValue$$4[1].head.tag === 18) {
                      $target$$29 = 14;
                      limitCtxt$$8 = matchValue$$4[1].head;
                    } else if (matchValue$$4[1].head.tag === 21) {
                      if (matchValue$$4[1].head.fields[1]) {
                        $target$$29 = 15;
                        limitCtxt$$9 = matchValue$$4[1].head;
                      } else {
                        $target$$29 = 14;
                        limitCtxt$$8 = matchValue$$4[1].head;
                      }
                    } else if (matchValue$$4[1].head.tag === 5) {
                      $target$$29 = 14;
                      limitCtxt$$8 = matchValue$$4[1].head;
                    } else if (matchValue$$4[1].head.tag === 0) {
                      $target$$29 = 14;
                      limitCtxt$$8 = matchValue$$4[1].head;
                    } else if (matchValue$$4[1].head.tag === 20) {
                      $target$$29 = 14;
                      limitCtxt$$8 = matchValue$$4[1].head;
                    } else if (matchValue$$4[1].head.tag === 10) {
                      $target$$29 = 15;
                      limitCtxt$$9 = matchValue$$4[1].head;
                    } else if (matchValue$$4[1].head.tag === 22) {
                      $target$$29 = 15;
                      limitCtxt$$9 = matchValue$$4[1].head;
                    } else if (matchValue$$4[1].head.tag === 2) {
                      $target$$29 = 15;
                      limitCtxt$$9 = matchValue$$4[1].head;
                    } else {
                      $target$$29 = 16;
                    }
                  } else {
                    $target$$29 = 16;
                  }

                  switch ($target$$29) {
                    case 0:
                      {
                        if (Context$$get_StartCol(ctxt1) <= Context$$get_StartCol(ctxt2)) {
                          return PositionWithColumn$$$$002Ector$$Z10741753(Context$$get_StartPos(ctxt1), Context$$get_StartCol(ctxt1));
                        } else {
                          return PositionWithColumn$$$$002Ector$$Z10741753(Context$$get_StartPos(ctxt2), Context$$get_StartCol(ctxt2));
                        }
                      }

                    case 1:
                      {
                        return PositionWithColumn$$$$002Ector$$Z10741753(Context$$get_StartPos(limitCtxt), Context$$get_StartCol(limitCtxt));
                      }

                    case 2:
                      {
                        strict = false;
                        stack$$1 = rest$$7;
                        continue unindentationLimit;
                      }

                    case 3:
                      {
                        return PositionWithColumn$$$$002Ector$$Z10741753(Context$$get_StartPos(limitCtxt$$1), Context$$get_StartCol(limitCtxt$$1));
                      }

                    case 4:
                      {
                        strict = false;
                        stack$$1 = rest$$8;
                        continue unindentationLimit;
                      }

                    case 5:
                      {
                        strict = false;
                        stack$$1 = rest$$9;
                        continue unindentationLimit;
                      }

                    case 6:
                      {
                        return PositionWithColumn$$$$002Ector$$Z10741753(Context$$get_StartPos(limitCtxt$$2), Context$$get_StartCol(limitCtxt$$2));
                      }

                    case 7:
                      {
                        return PositionWithColumn$$$$002Ector$$Z10741753(Context$$get_StartPos(limitCtxt$$3), Context$$get_StartCol(limitCtxt$$3));
                      }

                    case 8:
                      {
                        strict = false;
                        stack$$1 = rest$$10;
                        continue unindentationLimit;
                      }

                    case 9:
                      {
                        strict = false;
                        stack$$1 = rest$$11;
                        continue unindentationLimit;
                      }

                    case 10:
                      {
                        return PositionWithColumn$$$$002Ector$$Z10741753(Context$$get_StartPos(limitCtxt$$4), Context$$get_StartCol(limitCtxt$$4) + 1);
                      }

                    case 11:
                      {
                        return PositionWithColumn$$$$002Ector$$Z10741753(Context$$get_StartPos(limitCtxt$$5), Context$$get_StartCol(limitCtxt$$5) + 1);
                      }

                    case 12:
                      {
                        return PositionWithColumn$$$$002Ector$$Z10741753(Context$$get_StartPos(limitCtxt$$6), Context$$get_StartCol(limitCtxt$$6));
                      }

                    case 13:
                      {
                        return PositionWithColumn$$$$002Ector$$Z10741753(Context$$get_StartPos(limitCtxt$$7), Context$$get_StartCol(limitCtxt$$7));
                      }

                    case 14:
                      {
                        return PositionWithColumn$$$$002Ector$$Z10741753(Context$$get_StartPos(limitCtxt$$8), Context$$get_StartCol(limitCtxt$$8) + 1);
                      }

                    case 15:
                      {
                        return PositionWithColumn$$$$002Ector$$Z10741753(Context$$get_StartPos(limitCtxt$$9), Context$$get_StartCol(limitCtxt$$9));
                      }

                    case 16:
                      {
                        throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/LexFilter.fs", 648, 18);
                      }
                  }
                }
            }
          }
      }
    }
  };

  if (newCtxt.tag === 11) {} else {
    const p1 = unindentationLimit(true, this$$$11.offsideStack);
    const c2 = Context$$get_StartCol(newCtxt) | 0;

    if (c2 < p1.Column) {
      LexFilterImpl$$warn(this$$$11, tokenTup$$4, debug ? (0, _String.toText)((0, _String.printf)("possible incorrect indentation: this token is offside of context at position %s, newCtxt = %A, stack = %A, newCtxtPos = %s, c1 = %d, c2 = %d"))(warningStringOfPos(p1.Position))(newCtxt)(this$$$11.offsideStack)(stringOfPos(Context$$get_StartPos(newCtxt)))(p1.Column)(c2) : (0, _FSComp.SR$$$lexfltTokenIsOffsideOfContextStartedEarlier$$Z721C83C5)(warningStringOfPos(p1.Position)));
    }
  }

  const newOffsideStack = (0, _Types.L)(newCtxt, this$$$11.offsideStack);

  if (debug) {
    (0, _ildiag.dprintf)((0, _String.printf)("--> pushing, stack = %A\n"))(newOffsideStack);
  }

  this$$$11.offsideStack = newOffsideStack;
}

function LexFilterImpl$$popCtxt(this$$$12) {
  const matchValue$$5 = this$$$12.offsideStack;

  if (matchValue$$5.tail != null) {
    const rest$$12 = matchValue$$5.tail;
    const h = matchValue$$5.head;

    if (debug) {
      (0, _ildiag.dprintf)((0, _String.printf)("<-- popping Context(%A), stack = %A\n"))(h)(rest$$12);
    }

    this$$$12.offsideStack = rest$$12;
  }
}

function LexFilterImpl$$replaceCtxt(this$$$13, p$$13, ctxt) {
  LexFilterImpl$$popCtxt(this$$$13);
  LexFilterImpl$$pushCtxt(this$$$13, p$$13, ctxt);
}

function LexFilterImpl$$peekNextTokenTup(this$$$14) {
  const tokenTup$$5 = LexFilterImpl$$popNextTokenTup(this$$$14);
  LexFilterImpl$$delayToken$$24788697(this$$$14, tokenTup$$5);
  return tokenTup$$5;
}

function LexFilterImpl$$peekNextToken(this$$$15) {
  return TokenTup$$get_Token(LexFilterImpl$$peekNextTokenTup(this$$$15));
}

function LexFilterImpl$$isAdjacent(this$$$16, leftTokenTup, rightTokenTup) {
  const lparenStartPos = LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$16, rightTokenTup);
  let tokenEndPos;
  let copyOfStruct$$9 = TokenTup$$get_LexbufState(leftTokenTup);
  tokenEndPos = LexbufState$$get_EndPos(copyOfStruct$$9);
  return (0, _Util.equals)(tokenEndPos, lparenStartPos);
}

function LexFilterImpl$$nextTokenIsAdjacentLParenOrLBrack$$24788697(this$$$17, tokenTup$$6) {
  const lookaheadTokenTup = LexFilterImpl$$peekNextTokenTup(this$$$17);
  const matchValue$$6 = TokenTup$$get_Token(lookaheadTokenTup);
  var $target$$30;

  switch (matchValue$$6.tag) {
    case 92:
    case 71:
      $target$$30 = 0;
      break;

    default:
      $target$$30 = 1;
  }

  switch ($target$$30) {
    case 0:
      {
        if (LexFilterImpl$$isAdjacent(this$$$17, tokenTup$$6, lookaheadTokenTup)) {
          return TokenTup$$get_Token(lookaheadTokenTup);
        } else {
          return null;
        }
      }

    case 1:
      {
        return null;
      }
  }
}

function LexFilterImpl$$nextTokenIsAdjacent$$24788697(this$$$18, firstTokenTup) {
  const lookaheadTokenTup$$1 = LexFilterImpl$$peekNextTokenTup(this$$$18);
  return LexFilterImpl$$isAdjacent(this$$$18, firstTokenTup, lookaheadTokenTup$$1);
}

function LexFilterImpl$$peekAdjacentTypars(this$$$19, indentation, tokenTup$$7) {
  const lookaheadTokenTup$$2 = LexFilterImpl$$peekNextTokenTup(this$$$19);
  const matchValue$$7 = TokenTup$$get_Token(lookaheadTokenTup$$2);
  var $target$$31;

  if (matchValue$$7.tag === 188) {
    if (matchValue$$7.fields[0] === "</") {
      $target$$31 = 0;
    } else {
      $target$$31 = 1;
    }
  } else if (matchValue$$7.tag === 159) {
    $target$$31 = 0;
  } else {
    $target$$31 = 1;
  }

  switch ($target$$31) {
    case 0:
      {
        let tokenEndPos$$1;
        let copyOfStruct$$10 = TokenTup$$get_LexbufState(tokenTup$$7);
        tokenEndPos$$1 = LexbufState$$get_EndPos(copyOfStruct$$10);

        if (LexFilterImpl$$isAdjacent(this$$$19, tokenTup$$7, lookaheadTokenTup$$2)) {
          const stack$$2 = new _Types.FSharpRef((0, _Types.L)());

          const scanAhead = function scanAhead(nParen) {
            var matchValue$$8, matchValue$$9;

            scanAhead: while (true) {
              const lookaheadTokenTup$$3 = LexFilterImpl$$popNextTokenTup(this$$$19);
              const lookaheadToken = TokenTup$$get_Token(lookaheadTokenTup$$3);
              stack$$2.contents = (0, _Types.L)([lookaheadTokenTup$$3, true], stack$$2.contents);
              const lookaheadTokenStartPos = LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$19, lookaheadTokenTup$$3);
              var $target$$32;

              if (lookaheadToken.tag === 10) {
                $target$$32 = 0;
              } else if (lookaheadToken.tag === 68) {
                $target$$32 = 0;
              } else if (indentation ? lookaheadTokenStartPos.CompareTo(tokenEndPos$$1) < 0 : false) {
                $target$$32 = 1;
              } else {
                $target$$32 = 2;
              }

              switch ($target$$32) {
                case 0:
                  {
                    return false;
                  }

                case 1:
                  {
                    return false;
                  }

                case 2:
                  {
                    var $target$$33, afterOp$$1, greaters;

                    if (lookaheadToken.tag === 93) {
                      $target$$33 = 0;
                    } else if (lookaheadToken.tag === 58) {
                      $target$$33 = 0;
                    } else if (lookaheadToken.tag === 160) {
                      $target$$33 = 1;
                    } else if (lookaheadToken.tag === 54) {
                      $target$$33 = 1;
                    } else if (lookaheadToken.tag === 99) {
                      $target$$33 = 1;
                    } else if (lookaheadToken.tag === 188) {
                      const activePatternResult22310 = $007CTyparsCloseOp$007C_$007C(lookaheadToken.fields[0]);

                      if (activePatternResult22310 != null) {
                        $target$$33 = 2;
                        afterOp$$1 = activePatternResult22310[1];
                        greaters = activePatternResult22310[0];
                      } else {
                        $target$$33 = 3;
                      }
                    } else {
                      $target$$33 = 3;
                    }

                    switch ($target$$33) {
                      case 0:
                        {
                          const nParen$$1 = nParen - 1 | 0;

                          if (nParen$$1 > 0) {
                            nParen = nParen$$1;
                            continue scanAhead;
                          } else {
                            return false;
                          }
                        }

                      case 1:
                        {
                          const nParen$$2 = nParen - 1 | 0;
                          const hasAfterOp = lookaheadToken.tag === 160 ? false : true;

                          if (nParen$$2 > 0) {
                            stack$$2.contents = (0, _Types.L)([lookaheadTokenTup$$3, !hasAfterOp], (0, _List.tail)(stack$$2.contents));
                            nParen = nParen$$2;
                            continue scanAhead;
                          } else {
                            if (!hasAfterOp ? (matchValue$$8 = LexFilterImpl$$nextTokenIsAdjacentLParenOrLBrack$$24788697(this$$$19, lookaheadTokenTup$$3), matchValue$$8 != null ? matchValue$$8.tag === 92 ? true : false : false) : false) {
                              const dotTokenTup = LexFilterImpl$$peekNextTokenTup(this$$$19);
                              stack$$2.contents = (0, _Types.L)([TokenTup$$UseLocation$$56122D30(dotTokenTup, new _pars.token(34, "HIGH_PRECEDENCE_PAREN_APP")), false], stack$$2.contents);
                            }

                            return true;
                          }
                        }

                      case 2:
                        {
                          const nParen$$3 = nParen - greaters.length | 0;

                          if (nParen$$3 > 0) {
                            stack$$2.contents = (0, _Types.L)([lookaheadTokenTup$$3, !(afterOp$$1 != null)], (0, _List.tail)(stack$$2.contents));
                            nParen = nParen$$3;
                            continue scanAhead;
                          } else {
                            if (afterOp$$1 == null ? (matchValue$$9 = LexFilterImpl$$nextTokenIsAdjacentLParenOrLBrack$$24788697(this$$$19, lookaheadTokenTup$$3), matchValue$$9 != null ? matchValue$$9.tag === 92 ? true : false : false) : false) {
                              const dotTokenTup$$1 = LexFilterImpl$$peekNextTokenTup(this$$$19);
                              stack$$2.contents = (0, _Types.L)([TokenTup$$UseLocation$$56122D30(dotTokenTup$$1, new _pars.token(34, "HIGH_PRECEDENCE_PAREN_APP")), false], stack$$2.contents);
                            }

                            return true;
                          }
                        }

                      case 3:
                        {
                          var $target$$34;

                          if (lookaheadToken.tag === 92) {
                            $target$$34 = 0;
                          } else if (lookaheadToken.tag === 159) {
                            $target$$34 = 0;
                          } else if (lookaheadToken.tag === 71) {
                            $target$$34 = 0;
                          } else if (lookaheadToken.tag === 73) {
                            $target$$34 = 0;
                          } else if (lookaheadToken.tag === 188) {
                            if (lookaheadToken.fields[0] === "</") {
                              $target$$34 = 0;
                            } else {
                              $target$$34 = 2;
                            }
                          } else if (lookaheadToken.tag === 51) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 78) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 80) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 55) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 147) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 151) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 131) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 85) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 143) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 187) {
                            if (lookaheadToken.fields[0] === "^") {
                              $target$$34 = 1;
                            } else if (lookaheadToken.fields[0] === "^-") {
                              $target$$34 = 1;
                            } else {
                              $target$$34 = 2;
                            }
                          } else if (lookaheadToken.tag === 184) {
                            if (lookaheadToken.fields[0] === "/") {
                              $target$$34 = 1;
                            } else {
                              $target$$34 = 2;
                            }
                          } else if (lookaheadToken.tag === 62) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 45) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 113) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 191) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 179) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 178) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 176) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 175) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 169) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 174) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 173) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 172) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 171) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 170) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 165) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 164) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 192) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 193) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 166) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 106) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 122) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 168) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 167) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 77) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 67) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 70) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 190) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 97) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 98) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 88) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 96) {
                            $target$$34 = 1;
                          } else if (lookaheadToken.tag === 91) {
                            $target$$34 = 1;
                          } else {
                            $target$$34 = 2;
                          }

                          switch ($target$$34) {
                            case 0:
                              {
                                nParen = nParen + 1;
                                continue scanAhead;
                              }

                            case 1:
                              {
                                nParen = nParen;
                                continue scanAhead;
                              }

                            case 2:
                              {
                                if (nParen > 1) {
                                  nParen = nParen;
                                  continue scanAhead;
                                } else {
                                  return false;
                                }
                              }
                          }
                        }
                    }
                  }
              }
            }
          };

          const res = scanAhead(0);
          (0, _List.iterate)(function action(tupledArg) {
            if (tupledArg[1]) {
              const matchValue$$10 = TokenTup$$get_Token(tupledArg[0]);
              var $target$$35, afterOp$$2, greaters$$1, opstr;

              if (matchValue$$10.tag === 188) {
                if (matchValue$$10.fields[0] === "</") {
                  $target$$35 = 0;
                } else {
                  const activePatternResult22315 = $007CTyparsCloseOp$007C_$007C(matchValue$$10.fields[0]);

                  if (activePatternResult22315 != null) {
                    $target$$35 = 4;
                    afterOp$$2 = activePatternResult22315[1];
                    greaters$$1 = activePatternResult22315[0];
                    opstr = matchValue$$10.fields[0];
                  } else {
                    $target$$35 = 5;
                  }
                }
              } else if (matchValue$$10.tag === 99) {
                $target$$35 = 1;
              } else if (matchValue$$10.tag === 54) {
                $target$$35 = 2;
              } else if (matchValue$$10.tag === 160) {
                $target$$35 = 3;
              } else {
                $target$$35 = 5;
              }

              switch ($target$$35) {
                case 0:
                  {
                    LexFilterImpl$$delayToken$$24788697(this$$$19, TokenTup$$UseShiftedLocation$$Z217B7B50(tupledArg[0], new _pars.token(184, "INFIX_STAR_DIV_MOD_OP", "/"), 1, 0));
                    LexFilterImpl$$delayToken$$24788697(this$$$19, TokenTup$$UseShiftedLocation$$Z217B7B50(tupledArg[0], new _pars.token(159, "LESS", res), 0, -1));
                    break;
                  }

                case 1:
                  {
                    LexFilterImpl$$delayToken$$24788697(this$$$19, TokenTup$$UseShiftedLocation$$Z217B7B50(tupledArg[0], new _pars.token(65, "BAR_RBRACK"), 1, 0));
                    LexFilterImpl$$delayToken$$24788697(this$$$19, TokenTup$$UseShiftedLocation$$Z217B7B50(tupledArg[0], new _pars.token(160, "GREATER", res), 0, -2));
                    break;
                  }

                case 2:
                  {
                    LexFilterImpl$$delayToken$$24788697(this$$$19, TokenTup$$UseShiftedLocation$$Z217B7B50(tupledArg[0], new _pars.token(58, "RBRACK"), 1, 0));
                    LexFilterImpl$$delayToken$$24788697(this$$$19, TokenTup$$UseShiftedLocation$$Z217B7B50(tupledArg[0], new _pars.token(160, "GREATER", res), 0, -1));
                    break;
                  }

                case 3:
                  {
                    LexFilterImpl$$delayToken$$24788697(this$$$19, TokenTup$$UseLocation$$56122D30(tupledArg[0], new _pars.token(160, "GREATER", res)));
                    break;
                  }

                case 4:
                  {
                    if (afterOp$$2 != null) {
                      const tok$$2 = afterOp$$2;
                      LexFilterImpl$$delayToken$$24788697(this$$$19, TokenTup$$UseShiftedLocation$$Z217B7B50(tupledArg[0], tok$$2, greaters$$1.length, 0));
                    }

                    for (let i = greaters$$1.length - 1; i >= 0; i--) {
                      LexFilterImpl$$delayToken$$24788697(this$$$19, TokenTup$$UseShiftedLocation$$Z217B7B50(tupledArg[0], greaters$$1[i](res), i, -opstr.length + i + 1));
                    }

                    break;
                  }

                case 5:
                  {
                    LexFilterImpl$$delayToken$$24788697(this$$$19, tupledArg[0]);
                    break;
                  }
              }
            } else {
              LexFilterImpl$$delayToken$$24788697(this$$$19, tupledArg[0]);
            }
          }, stack$$2.contents);
          return res;
        } else {
          return false;
        }
      }

    case 1:
      {
        return false;
      }
  }
}

function LexFilterImpl$$returnToken(this$$$20, tokenLexbufState$$1, tok$$3) {
  LexFilterImpl$$setLexbufState$$Z43E1A716(this$$$20, tokenLexbufState$$1);
  this$$$20.prevWasAtomicEnd = isAtomicExprEndToken(tok$$3);
  return tok$$3;
}

function LexFilterImpl$$suffixExists($arg$$36, $arg$$37, $arg$$38) {
  LexFilterImpl$$suffixExists: while (true) {
    const this$$$21 = $arg$$36,
          p$$14 = $arg$$37,
          l = $arg$$38;

    if (l.tail != null) {
      const t = l.tail;

      if (p$$14(t)) {
        return true;
      } else {
        $arg$$36 = this$$$21;
        $arg$$37 = p$$14;
        $arg$$38 = t;
        continue LexFilterImpl$$suffixExists;
      }
    } else {
      return false;
    }
  }
}

function LexFilterImpl$$tokenBalancesHeadContext(this$$$22, token$$35, stack$$3) {
  const matchValue$$11 = [token$$35, stack$$3];
  var $target$$39, stack$$6;

  if (matchValue$$11[0].tag === 142) {
    if (matchValue$$11[1].tail != null) {
      if (matchValue$$11[1].head.tag === 6) {
        $target$$39 = 0;
      } else {
        $target$$39 = 3;
      }
    } else {
      $target$$39 = 3;
    }
  } else if (matchValue$$11[0].tag === 140) {
    if (matchValue$$11[1].tail != null) {
      if (matchValue$$11[1].head.tag === 1) {
        $target$$39 = 0;
      } else {
        $target$$39 = 3;
      }
    } else {
      $target$$39 = 3;
    }
  } else if (matchValue$$11[0].tag === 141) {
    if (matchValue$$11[1].tail != null) {
      if (matchValue$$11[1].head.tag === 1) {
        $target$$39 = 0;
      } else {
        $target$$39 = 3;
      }
    } else {
      $target$$39 = 3;
    }
  } else if (matchValue$$11[0].tag === 138) {
    if (matchValue$$11[1].tail != null) {
      if (matchValue$$11[1].head.tag === 14) {
        $target$$39 = 0;
      } else {
        $target$$39 = 3;
      }
    } else {
      $target$$39 = 3;
    }
  } else if (matchValue$$11[0].tag === 87) {
    if (matchValue$$11[1].tail != null) {
      if (matchValue$$11[1].head.tag === 7) {
        $target$$39 = 0;
      } else if (matchValue$$11[1].head.tag === 23) {
        $target$$39 = 0;
      } else if (matchValue$$11[1].head.tag === 19) {
        $target$$39 = 0;
      } else if (matchValue$$11[1].head.tag === 15) {
        $target$$39 = 0;
      } else if (matchValue$$11[1].head.tag === 2) {
        $target$$39 = 0;
      } else if (matchValue$$11[1].head.tag === 16) {
        $target$$39 = 0;
      } else if (matchValue$$11[1].head.tag === 20) {
        $target$$39 = 0;
      } else if (matchValue$$11[1].head.tag === 25) {
        if (matchValue$$11[1].tail.tail != null) {
          if (matchValue$$11[1].tail.head.tag === 24) {
            if (matchValue$$11[1].tail.head.fields[0].tag === 74) {
              $target$$39 = 0;
            } else {
              $target$$39 = 3;
            }
          } else {
            $target$$39 = 3;
          }
        } else {
          $target$$39 = 3;
        }
      } else {
        $target$$39 = 3;
      }
    } else {
      $target$$39 = 3;
    }
  } else if (matchValue$$11[0].tag === 129) {
    if (matchValue$$11[1].tail != null) {
      if (matchValue$$11[1].head.tag === 2) {
        $target$$39 = 0;
      } else {
        $target$$39 = 3;
      }
    } else {
      $target$$39 = 3;
    }
  } else if (matchValue$$11[0].tag === 127) {
    if (matchValue$$11[1].tail != null) {
      if (matchValue$$11[1].head.tag === 8) {
        $target$$39 = 1;
      } else if (matchValue$$11[1].head.tag === 0) {
        $target$$39 = 1;
      } else if (LexFilterImpl$$detectJoinInCtxt$$114910A8(this$$$22, matchValue$$11[1])) {
        $target$$39 = 2;
        stack$$6 = matchValue$$11[1];
      } else {
        $target$$39 = 3;
      }
    } else if (LexFilterImpl$$detectJoinInCtxt$$114910A8(this$$$22, matchValue$$11[1])) {
      $target$$39 = 2;
      stack$$6 = matchValue$$11[1];
    } else {
      $target$$39 = 3;
    }
  } else {
    $target$$39 = 3;
  }

  switch ($target$$39) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return true;
      }

    case 2:
      {
        return true;
      }

    case 3:
      {
        var $target$$40, t1$$1, t2$$1;

        if (matchValue$$11[0].tag === 68) {
          if (matchValue$$11[1].tail != null) {
            if (matchValue$$11[1].head.tag === 25) {
              if (matchValue$$11[1].tail.tail != null) {
                if (matchValue$$11[1].tail.head.tag === 22) {
                  $target$$40 = 0;
                } else if (matchValue$$11[1].tail.head.tag === 21) {
                  if (matchValue$$11[1].tail.head.fields[1]) {
                    $target$$40 = 1;
                  } else {
                    $target$$40 = 3;
                  }
                } else {
                  $target$$40 = 3;
                }
              } else {
                $target$$40 = 3;
              }
            } else if (matchValue$$11[1].head.tag === 24) {
              $target$$40 = 2;
              t1$$1 = matchValue$$11[1].head.fields[0];
              t2$$1 = matchValue$$11[0];
            } else {
              $target$$40 = 3;
            }
          } else {
            $target$$40 = 3;
          }
        } else if (matchValue$$11[1].tail != null) {
          if (matchValue$$11[1].head.tag === 24) {
            $target$$40 = 2;
            t1$$1 = matchValue$$11[1].head.fields[0];
            t2$$1 = matchValue$$11[0];
          } else {
            $target$$40 = 3;
          }
        } else {
          $target$$40 = 3;
        }

        switch ($target$$40) {
          case 0:
            {
              return true;
            }

          case 1:
            {
              return true;
            }

          case 2:
            {
              return parenTokensBalance(t1$$1, t2$$1);
            }

          case 3:
            {
              return false;
            }
        }
      }
  }
}

function LexFilterImpl$$hwTokenFetch$$Z1FBCCD16(this$$$23, useBlockRule$$1) {
  var copyOfStruct$$17, copyOfStruct$$16, ctxt$$22, _ctxt, _ctxt$$1, _ctxt$$2, ctxt$$15, ctxt$$16, ctxt$$17, ctxt$$18, ctxt$$19, ctxt$$20, isUse, ctxt$$11, offsidePos$$56, leadingBar, cond1, cond2, copyOfStruct$$15, offsidePos$$54, offsidePos$$52, offsidePos$$50, offsidePos$$48, offsidePos$$46, offsidePos$$44, offsidePos$$42, offsidePos$$40, offsidePos$$38, offsidePos$$36, offsidePos$$34, offsidePos$$32, offsidePos$$30, offsidePos$$28, offsidePos$$26, offsidePos$$24, wholeFile, offsidePos$$22, offsidePos$$20, offsidePos$$18, offsidePos$$16, offsidePos$$14, rest$$15, offsidePos$$12, addBlockEnd$$9, isTypeCtxt, isNamespaceCtxt, offsidePos$$10, addBlockEnd$$7, offsidePos$$8, addBlockEnd$$5, offsidePos$$6, rest$$13, offsidePos$$4, addBlockEnd, grace, matchValue$$19, posNamespace, posType, offsidePos$$2, t1$$2, t1$$3, t1$$4, t1$$5, t1$$6, t1$$7, t1$$8;

  LexFilterImpl$$hwTokenFetch$$Z1FBCCD16: while (true) {
    const tokenTup$$18 = LexFilterImpl$$popNextTokenTup(this$$$23);
    const tokenReplaced = LexFilterImpl$$rulesForBothSoftWhiteAndHardWhite$$24788697(this$$$23, tokenTup$$18);

    if (tokenReplaced) {
      this$$$23 = this$$$23;
      useBlockRule$$1 = useBlockRule$$1;
      continue LexFilterImpl$$hwTokenFetch$$Z1FBCCD16;
    } else {
      const tokenStartPos = LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$23, tokenTup$$18);
      const token$$36 = TokenTup$$get_Token(tokenTup$$18);
      const tokenLexbufState$$2 = TokenTup$$get_LexbufState(tokenTup$$18);
      const tokenStartCol = (0, _primLexing.Position$$get_Column)(tokenStartPos) | 0;

      const isSameLine = function isSameLine() {
        if (token$$36.tag === 10) {
          return false;
        } else {
          return LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$23, LexFilterImpl$$peekNextTokenTup(this$$$23)).OriginalLine === tokenStartPos.OriginalLine;
        }
      };

      const isControlFlowOrNotSameLine = function isControlFlowOrNotSameLine() {
        if (token$$36.tag === 10) {
          return false;
        } else if (!isSameLine()) {
          return true;
        } else {
          const matchValue$$12 = LexFilterImpl$$peekNextToken(this$$$23);
          var $target$$41;

          switch (matchValue$$12.tag) {
            case 107:
            case 116:
            case 117:
            case 126:
            case 161:
            case 123:
            case 86:
              $target$$41 = 0;
              break;

            default:
              $target$$41 = 1;
          }

          switch ($target$$41) {
            case 0:
              {
                return true;
              }

            case 1:
              {
                return false;
              }
          }
        }
      };

      const isLongIdentEquals = function isLongIdentEquals(token$$37) {
        var $target$$42;

        switch (token$$37.tag) {
          case 45:
          case 190:
            $target$$42 = 0;
            break;

          default:
            $target$$42 = 1;
        }

        switch ($target$$42) {
          case 0:
            {
              const loop = function loop() {
                const tokenTup$$20 = LexFilterImpl$$popNextTokenTup(this$$$23);
                let res$$2;
                const matchValue$$13 = TokenTup$$get_Token(tokenTup$$20);

                switch (matchValue$$13.tag) {
                  case 10:
                    {
                      res$$2 = false;
                      break;
                    }

                  case 77:
                    {
                      const tokenTup$$21 = LexFilterImpl$$popNextTokenTup(this$$$23);
                      let res$$1;
                      const matchValue$$14 = TokenTup$$get_Token(tokenTup$$21);

                      switch (matchValue$$14.tag) {
                        case 10:
                          {
                            res$$1 = false;
                            break;
                          }

                        case 190:
                          {
                            res$$1 = loop();
                            break;
                          }

                        default:
                          {
                            res$$1 = false;
                          }
                      }

                      LexFilterImpl$$delayToken$$24788697(this$$$23, tokenTup$$21);
                      res$$2 = res$$1;
                      break;
                    }

                  case 70:
                    {
                      res$$2 = true;
                      break;
                    }

                  default:
                    {
                      res$$2 = false;
                    }
                }

                LexFilterImpl$$delayToken$$24788697(this$$$23, tokenTup$$20);
                return res$$2;
              };

              return loop();
            }

          case 1:
            {
              return false;
            }
        }
      };

      const reprocess = function reprocess() {
        LexFilterImpl$$delayToken$$24788697(this$$$23, tokenTup$$18);
        return LexFilterImpl$$hwTokenFetch$$Z1FBCCD16(this$$$23, useBlockRule$$1);
      };

      const reprocessWithoutBlockRule = function reprocessWithoutBlockRule() {
        LexFilterImpl$$delayToken$$24788697(this$$$23, tokenTup$$18);
        return LexFilterImpl$$hwTokenFetch$$Z1FBCCD16(this$$$23, false);
      };

      const insertTokenFromPrevPosToCurrentPos = function insertTokenFromPrevPosToCurrentPos(tok$$4) {
        var copyOfStruct$$13;
        LexFilterImpl$$delayToken$$24788697(this$$$23, tokenTup$$18);

        if (debug) {
          (0, _ildiag.dprintf)((0, _String.printf)("inserting %+A\n"))(tok$$4);
        }

        let lastTokenPos$$1;
        const pos = TokenTup$$get_LastTokenPos(tokenTup$$18).Y;
        lastTokenPos$$1 = (0, _primLexing.Position$$ShiftColumnBy$$Z524259A4)(pos, 1);
        return LexFilterImpl$$returnToken(this$$$23, LexFilterImpl$$lexbufStateForInsertedDummyTokens$$Z47F605E0(this$$$23, lastTokenPos$$1, (copyOfStruct$$13 = TokenTup$$get_LexbufState(tokenTup$$18), LexbufState$$get_StartPos(copyOfStruct$$13))), tok$$4);
      };

      const insertToken = function insertToken(tok$$5) {
        var copyOfStruct$$14;
        LexFilterImpl$$delayToken$$24788697(this$$$23, tokenTup$$18);

        if (debug) {
          (0, _ildiag.dprintf)((0, _String.printf)("inserting %+A\n"))(tok$$5);
        }

        return LexFilterImpl$$returnToken(this$$$23, LexFilterImpl$$lexbufStateForInsertedDummyTokens$$Z47F605E0(this$$$23, LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$23, tokenTup$$18), (copyOfStruct$$14 = TokenTup$$get_LexbufState(tokenTup$$18), LexbufState$$get_EndPos(copyOfStruct$$14))), tok$$5);
      };

      const isSemiSemi = token$$36.tag === 68 ? true : false;

      const thereIsACtxtMemberBodyOnTheStackAndWeShouldPopStackForUpcomingMember = function thereIsACtxtMemberBodyOnTheStackAndWeShouldPopStackForUpcomingMember(ctxtStack) {
        if (!(0, _List.exists)(function (_arg2) {
          return _arg2.tag === 20 ? true : false;
        }, ctxtStack)) {
          return false;
        } else if ((0, _List.exists)(function (_arg3) {
          return _arg3.tag === 24 ? _arg3.fields[0].tag === 74 ? true : false : false;
        }, ctxtStack)) {
          return false;
        } else if ((0, _illib.List$$$count)(function (_arg4) {
          return _arg4.tag === 24 ? _arg4.fields[0].tag === 92 ? true : false : false;
        }, ctxtStack) >= 2) {
          return false;
        } else {
          return true;
        }
      };

      const endTokenForACtxt = function endTokenForACtxt(ctxt$$1) {
        var $target$$43;

        if (ctxt$$1.tag === 3) {
          $target$$43 = 0;
        } else if (ctxt$$1.tag === 26) {
          $target$$43 = 0;
        } else if (ctxt$$1.tag === 5) {
          $target$$43 = 0;
        } else if (ctxt$$1.tag === 6) {
          $target$$43 = 1;
        } else if (ctxt$$1.tag === 14) {
          $target$$43 = 2;
        } else if (ctxt$$1.tag === 0) {
          if (ctxt$$1.fields[0]) {
            $target$$43 = 2;
          } else {
            $target$$43 = 5;
          }
        } else if (ctxt$$1.tag === 25) {
          if (ctxt$$1.fields[2].tag === 0) {
            $target$$43 = 3;
          } else if (ctxt$$1.fields[2].tag === 2) {
            $target$$43 = 4;
          } else {
            $target$$43 = 5;
          }
        } else {
          $target$$43 = 5;
        }

        switch ($target$$43) {
          case 0:
            {
              return new _pars.token(20, "OEND");
            }

          case 1:
            {
              return new _pars.token(19, "ODECLEND");
            }

          case 2:
            {
              return new _pars.token(19, "ODECLEND");
            }

          case 3:
            {
              return new _pars.token(15, "OBLOCKEND");
            }

          case 4:
            {
              return new _pars.token(18, "ORIGHT_BLOCK_END");
            }

          case 5:
            {
              return null;
            }
        }
      };

      const tokenForcesHeadContextClosure = function tokenForcesHeadContextClosure(token$$38, stack$$7) {
        if (!(stack$$7.tail == null)) {
          var $target$$44;

          if (token$$38.tag === 10) {
            $target$$44 = 0;
          } else if (token$$38.tag === 68) {
            $target$$44 = 1;
          } else if (token$$38.tag === 142) {
            $target$$44 = 2;
          } else if (token$$38.tag === 140) {
            $target$$44 = 2;
          } else if (token$$38.tag === 141) {
            $target$$44 = 2;
          } else if (token$$38.tag === 138) {
            $target$$44 = 2;
          } else if (token$$38.tag === 127) {
            $target$$44 = 2;
          } else if (token$$38.tag === 93) {
            $target$$44 = 2;
          } else if (token$$38.tag === 160) {
            if (token$$38.fields[0]) {
              $target$$44 = 2;
            } else {
              $target$$44 = 3;
            }
          } else if (token$$38.tag === 59) {
            $target$$44 = 2;
          } else if (token$$38.tag === 58) {
            $target$$44 = 2;
          } else if (token$$38.tag === 65) {
            $target$$44 = 2;
          } else if (token$$38.tag === 87) {
            $target$$44 = 2;
          } else if (token$$38.tag === 129) {
            $target$$44 = 2;
          } else if (token$$38.tag === 155) {
            $target$$44 = 2;
          } else {
            $target$$44 = 3;
          }

          switch ($target$$44) {
            case 0:
              {
                return true;
              }

            case 1:
              {
                return !LexFilterImpl$$tokenBalancesHeadContext(this$$$23, token$$38, stack$$7);
              }

            case 2:
              {
                if (!LexFilterImpl$$tokenBalancesHeadContext(this$$$23, token$$38, stack$$7)) {
                  return LexFilterImpl$$suffixExists(this$$$23, function p$$15(stack$$8) {
                    return LexFilterImpl$$tokenBalancesHeadContext(this$$$23, token$$38, stack$$8);
                  }, stack$$7);
                } else {
                  return false;
                }
              }

            case 3:
              {
                return false;
              }
          }
        } else {
          return false;
        }
      };

      const insertComingSoonTokens$$1 = function insertComingSoonTokens$$1(tupledArg$$1) {
        var matchValue$$15;
        let effectsToDo = (0, _Types.L)();

        if (!this$$$23.compilingFsLib) {
          const nextOuterMostInterestingContextIsNamespaceOrModule = function nextOuterMostInterestingContextIsNamespaceOrModule(offsideStack) {
            nextOuterMostInterestingContextIsNamespaceOrModule: while (true) {
              var $target$$45;

              if (offsideStack.tail != null) {
                if (offsideStack.tail.tail == null) {
                  $target$$45 = 2;
                } else if (offsideStack.tail.head.tag === 22) {
                  $target$$45 = 0;
                } else if (offsideStack.tail.head.tag === 21) {
                  $target$$45 = 0;
                } else if (offsideStack.tail.head.tag === 24) {
                  if (offsideStack.tail.head.fields[0].tag === 136) {
                    if (offsideStack.tail.tail.tail != null) {
                      if (offsideStack.tail.tail.head.tag === 25) {
                        $target$$45 = 1;
                      } else {
                        $target$$45 = 3;
                      }
                    } else {
                      $target$$45 = 3;
                    }
                  } else if (offsideStack.tail.head.fields[0].tag === 55) {
                    if (offsideStack.tail.tail.tail != null) {
                      if (offsideStack.tail.tail.head.tag === 25) {
                        $target$$45 = 1;
                      } else {
                        $target$$45 = 3;
                      }
                    } else {
                      $target$$45 = 3;
                    }
                  } else {
                    $target$$45 = 3;
                  }
                } else {
                  $target$$45 = 3;
                }
              } else {
                $target$$45 = 3;
              }

              switch ($target$$45) {
                case 0:
                  {
                    return true;
                  }

                case 1:
                  {
                    offsideStack = (0, _List.tail)((0, _List.tail)(offsideStack));
                    continue nextOuterMostInterestingContextIsNamespaceOrModule;
                  }

                case 2:
                  {
                    return true;
                  }

                case 3:
                  {
                    return false;
                  }
              }
            }
          };

          while ((!(this$$$23.offsideStack.tail == null) ? !nextOuterMostInterestingContextIsNamespaceOrModule(this$$$23.offsideStack) : false) ? (matchValue$$15 = (0, _List.head)(this$$$23.offsideStack), matchValue$$15.tag === 24 ? matchValue$$15.fields[0].tag === 92 ? true : matchValue$$15.fields[0].tag === 71 ? true : matchValue$$15.fields[0].tag === 74 ? true : matchValue$$15.fields[0].tag === 72 ? true : false : matchValue$$15.tag === 25 ? true : matchValue$$15.tag === 11 ? true : false) : false) {
            const matchValue$$16 = (0, _List.head)(this$$$23.offsideStack);

            if (matchValue$$16.tag === 24) {
              if (debug) {
                (0, _ildiag.dprintf)((0, _String.printf)("%s at %a terminates CtxtParen()\n"))(tupledArg$$1[0])(outputPos)(tokenStartPos);
              }

              LexFilterImpl$$popCtxt(this$$$23);
            } else if (matchValue$$16.tag === 25) {
              if (matchValue$$16.fields[2].tag === 1) {
                if (debug) {
                  (0, _ildiag.dprintf)((0, _String.printf)("--> because %s is coming, popping CtxtSeqBlock\n"))(tupledArg$$1[0]);
                }

                LexFilterImpl$$popCtxt(this$$$23);
              } else if (matchValue$$16.fields[2].tag === 2) {
                LexFilterImpl$$popCtxt(this$$$23);
                effectsToDo = (0, _Types.L)(function () {
                  if (debug) {
                    (0, _ildiag.dprintf)((0, _String.printf)("--> because %s is coming, inserting ORIGHT_BLOCK_END\n"))(tupledArg$$1[0]);
                  }

                  LexFilterImpl$$delayTokenNoProcessing$$24788697(this$$$23, TokenTup$$UseLocation$$56122D30(tokenTup$$18, new _pars.token(18, "ORIGHT_BLOCK_END")));
                }, effectsToDo);
              } else {
                LexFilterImpl$$popCtxt(this$$$23);
                effectsToDo = (0, _Types.L)(function () {
                  if (debug) {
                    (0, _ildiag.dprintf)((0, _String.printf)("--> because %s is coming, inserting OBLOCKEND\n"))(tupledArg$$1[0]);
                  }

                  LexFilterImpl$$delayTokenNoProcessing$$24788697(this$$$23, TokenTup$$UseLocation$$56122D30(tokenTup$$18, new _pars.token(15, "OBLOCKEND")));
                }, effectsToDo);
              }
            } else if (matchValue$$16.tag === 11) {
              if (debug) {
                (0, _ildiag.dprintf)((0, _String.printf)("--> because %s is coming, popping CtxtVanilla\n"))(tupledArg$$1[0]);
              }

              LexFilterImpl$$popCtxt(this$$$23);
            } else {
              throw new Error("impossible, the while loop guard just above prevents this");
            }
          }
        }

        if (debug) {
          (0, _ildiag.dprintf)((0, _String.printf)("inserting 6 copies of %+A before %+A\n"))(tupledArg$$1[1])(tupledArg$$1[2]);
        }

        LexFilterImpl$$delayTokenNoProcessing$$24788697(this$$$23, TokenTup$$UseLocation$$56122D30(tokenTup$$18, tupledArg$$1[2]));

        for (let i$$1 = 1; i$$1 <= 6; i$$1++) {
          LexFilterImpl$$delayTokenNoProcessing$$24788697(this$$$23, TokenTup$$UseLocation$$56122D30(tokenTup$$18, tupledArg$$1[1]));
        }

        (0, _Seq.iterate)(function (e) {
          e();
        }, (0, _List.reverse)(effectsToDo));
      };

      const matchValue$$17 = [token$$36, this$$$23.offsideStack];

      if (this$$$23.tokensThatNeedNoProcessingCount > 0) {
        this$$$23.tokensThatNeedNoProcessingCount = this$$$23.tokensThatNeedNoProcessingCount - 1;
        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
      } else if (tokenForcesHeadContextClosure(token$$36, this$$$23.offsideStack)) {
        const ctxt$$2 = (0, _List.head)(this$$$23.offsideStack);

        if (debug) {
          (0, _ildiag.dprintf)((0, _String.printf)("IN/ELSE/ELIF/DONE/RPAREN/RBRACE/END at %a terminates context at position %a\n"))(outputPos)(tokenStartPos)(outputPos)(Context$$get_StartPos(ctxt$$2));
        }

        LexFilterImpl$$popCtxt(this$$$23);
        const matchValue$$18 = endTokenForACtxt(ctxt$$2);

        if (matchValue$$18 != null) {
          const tok$$6 = matchValue$$18;

          if (debug) {
            (0, _ildiag.dprintf)((0, _String.printf)("--> inserting %+A\n"))(tok$$6);
          }

          return insertToken(tok$$6);
        } else {
          return reprocess();
        }
      } else {
        var $target$$46;

        if (matchValue$$17[0].tag === 68) {
          if (matchValue$$17[1].tail == null) {
            $target$$46 = 0;
          } else {
            $target$$46 = 3;
          }
        } else if (matchValue$$17[0].tag === 23) {
          if (matchValue$$17[1].tail == null) {
            $target$$46 = 1;
          } else {
            $target$$46 = 3;
          }
        } else if (matchValue$$17[0].tag === 127) {
          if (LexFilterImpl$$detectJoinInCtxt$$114910A8(this$$$23, matchValue$$17[1])) {
            $target$$46 = 2;
          } else {
            $target$$46 = 3;
          }
        } else {
          $target$$46 = 3;
        }

        switch ($target$$46) {
          case 0:
            {
              if (debug) {
                (0, _ildiag.dprintf)((0, _String.printf)(";; scheduling a reset\n"));
              }

              LexFilterImpl$$delayToken$$24788697(this$$$23, TokenTup$$UseLocation$$56122D30(tokenTup$$18, new _pars.token(23, "ORESET")));
              return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, new _pars.token(68, "SEMICOLON_SEMICOLON"));
            }

          case 1:
            {
              if (debug) {
                (0, _ildiag.dprintf)((0, _String.printf)("performing a reset after a ;; has been swallowed\n"));
              }

              LexFilterImpl$$peekInitial(this$$$23);
              this$$$23 = this$$$23;
              useBlockRule$$1 = true;
              continue LexFilterImpl$$hwTokenFetch$$Z1FBCCD16;
            }

          case 2:
            {
              return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, new _pars.token(128, "JOIN_IN"));
            }

          case 3:
            {
              var $target$$47, blockLet, offsidePos, offsidePos$$1, t1$$9, t2$$9;

              if (matchValue$$17[0].tag === 127) {
                if (matchValue$$17[1].tail != null) {
                  if (matchValue$$17[1].head.tag === 0) {
                    $target$$47 = 0;
                    blockLet = matchValue$$17[1].head.fields[0];
                    offsidePos = matchValue$$17[1].head.fields[1];
                  } else {
                    $target$$47 = 3;
                  }
                } else {
                  $target$$47 = 3;
                }
              } else if (matchValue$$17[0].tag === 138) {
                if (matchValue$$17[1].tail != null) {
                  if (matchValue$$17[1].head.tag === 14) {
                    $target$$47 = 1;
                    offsidePos$$1 = matchValue$$17[1].head.fields[0];
                  } else {
                    $target$$47 = 3;
                  }
                } else {
                  $target$$47 = 3;
                }
              } else if (matchValue$$17[0].tag === 142) {
                if (matchValue$$17[1].tail != null) {
                  if (matchValue$$17[1].head.tag === 24) {
                    if (t1$$2 = matchValue$$17[1].head.fields[0], parenTokensBalance(t1$$2, matchValue$$17[0])) {
                      $target$$47 = 2;
                      t1$$9 = matchValue$$17[1].head.fields[0];
                      t2$$9 = matchValue$$17[0];
                    } else {
                      $target$$47 = 3;
                    }
                  } else {
                    $target$$47 = 3;
                  }
                } else {
                  $target$$47 = 3;
                }
              } else if (matchValue$$17[0].tag === 93) {
                if (matchValue$$17[1].tail != null) {
                  if (matchValue$$17[1].head.tag === 24) {
                    if (t1$$3 = matchValue$$17[1].head.fields[0], parenTokensBalance(t1$$3, matchValue$$17[0])) {
                      $target$$47 = 2;
                      t1$$9 = matchValue$$17[1].head.fields[0];
                      t2$$9 = matchValue$$17[0];
                    } else {
                      $target$$47 = 3;
                    }
                  } else {
                    $target$$47 = 3;
                  }
                } else {
                  $target$$47 = 3;
                }
              } else if (matchValue$$17[0].tag === 59) {
                if (matchValue$$17[1].tail != null) {
                  if (matchValue$$17[1].head.tag === 24) {
                    if (t1$$4 = matchValue$$17[1].head.fields[0], parenTokensBalance(t1$$4, matchValue$$17[0])) {
                      $target$$47 = 2;
                      t1$$9 = matchValue$$17[1].head.fields[0];
                      t2$$9 = matchValue$$17[0];
                    } else {
                      $target$$47 = 3;
                    }
                  } else {
                    $target$$47 = 3;
                  }
                } else {
                  $target$$47 = 3;
                }
              } else if (matchValue$$17[0].tag === 58) {
                if (matchValue$$17[1].tail != null) {
                  if (matchValue$$17[1].head.tag === 24) {
                    if (t1$$5 = matchValue$$17[1].head.fields[0], parenTokensBalance(t1$$5, matchValue$$17[0])) {
                      $target$$47 = 2;
                      t1$$9 = matchValue$$17[1].head.fields[0];
                      t2$$9 = matchValue$$17[0];
                    } else {
                      $target$$47 = 3;
                    }
                  } else {
                    $target$$47 = 3;
                  }
                } else {
                  $target$$47 = 3;
                }
              } else if (matchValue$$17[0].tag === 65) {
                if (matchValue$$17[1].tail != null) {
                  if (matchValue$$17[1].head.tag === 24) {
                    if (t1$$6 = matchValue$$17[1].head.fields[0], parenTokensBalance(t1$$6, matchValue$$17[0])) {
                      $target$$47 = 2;
                      t1$$9 = matchValue$$17[1].head.fields[0];
                      t2$$9 = matchValue$$17[0];
                    } else {
                      $target$$47 = 3;
                    }
                  } else {
                    $target$$47 = 3;
                  }
                } else {
                  $target$$47 = 3;
                }
              } else if (matchValue$$17[0].tag === 155) {
                if (matchValue$$17[1].tail != null) {
                  if (matchValue$$17[1].head.tag === 24) {
                    if (t1$$7 = matchValue$$17[1].head.fields[0], parenTokensBalance(t1$$7, matchValue$$17[0])) {
                      $target$$47 = 2;
                      t1$$9 = matchValue$$17[1].head.fields[0];
                      t2$$9 = matchValue$$17[0];
                    } else {
                      $target$$47 = 3;
                    }
                  } else {
                    $target$$47 = 3;
                  }
                } else {
                  $target$$47 = 3;
                }
              } else if (matchValue$$17[0].tag === 160) {
                if (matchValue$$17[0].fields[0]) {
                  if (matchValue$$17[1].tail != null) {
                    if (matchValue$$17[1].head.tag === 24) {
                      if (t1$$8 = matchValue$$17[1].head.fields[0], parenTokensBalance(t1$$8, matchValue$$17[0])) {
                        $target$$47 = 2;
                        t1$$9 = matchValue$$17[1].head.fields[0];
                        t2$$9 = matchValue$$17[0];
                      } else {
                        $target$$47 = 3;
                      }
                    } else {
                      $target$$47 = 3;
                    }
                  } else {
                    $target$$47 = 3;
                  }
                } else {
                  $target$$47 = 3;
                }
              } else {
                $target$$47 = 3;
              }

              switch ($target$$47) {
                case 0:
                  {
                    if (debug) {
                      (0, _ildiag.dprintf)((0, _String.printf)("IN at %a (becomes %s)\n"))(outputPos)(tokenStartPos)(blockLet ? "ODECLEND" : "IN");
                    }

                    if (tokenStartCol < (0, _primLexing.Position$$get_Column)(offsidePos)) {
                      LexFilterImpl$$warn(this$$$23, tokenTup$$18, (0, _FSComp.SR$$$lexfltIncorrentIndentationOfIn)());
                    }

                    LexFilterImpl$$popCtxt(this$$$23);
                    LexFilterImpl$$delayToken$$24788697(this$$$23, TokenTup$$UseLocation$$56122D30(tokenTup$$18, new _pars.token(12, "ODUMMY", token$$36)));
                    return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, blockLet ? new _pars.token(19, "ODECLEND") : token$$36);
                  }

                case 1:
                  {
                    if (debug) {
                      (0, _ildiag.dprintf)((0, _String.printf)("DONE at %a terminates CtxtDo(offsidePos=%a)\n"))(outputPos)(tokenStartPos)(outputPos)(offsidePos$$1);
                    }

                    LexFilterImpl$$popCtxt(this$$$23);
                    LexFilterImpl$$delayToken$$24788697(this$$$23, TokenTup$$UseLocation$$56122D30(tokenTup$$18, new _pars.token(19, "ODECLEND")));
                    this$$$23 = this$$$23;
                    useBlockRule$$1 = useBlockRule$$1;
                    continue LexFilterImpl$$hwTokenFetch$$Z1FBCCD16;
                  }

                case 2:
                  {
                    if (debug) {
                      (0, _ildiag.dprintf)((0, _String.printf)("RPAREN/RBRACE/RBRACK/BAR_RBRACK/RQUOTE/END at %a terminates CtxtParen()\n"))(outputPos)(tokenStartPos);
                    }

                    LexFilterImpl$$popCtxt(this$$$23);
                    LexFilterImpl$$delayToken$$24788697(this$$$23, TokenTup$$UseLocation$$56122D30(tokenTup$$18, new _pars.token(12, "ODUMMY", token$$36)));
                    return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                  }

                case 3:
                  {
                    var $target$$48, offsidePos$$3;

                    if (matchValue$$17[0].tag === 142) {
                      if (matchValue$$17[1].tail != null) {
                        if (matchValue$$17[1].head.tag === 6) {
                          if (offsidePos$$2 = matchValue$$17[1].head.fields[0], !(tokenStartCol + 1 <= (0, _primLexing.Position$$get_Column)(offsidePos$$2))) {
                            $target$$48 = 0;
                            offsidePos$$3 = matchValue$$17[1].head.fields[0];
                          } else {
                            $target$$48 = 1;
                          }
                        } else {
                          $target$$48 = 1;
                        }
                      } else {
                        $target$$48 = 1;
                      }
                    } else {
                      $target$$48 = 1;
                    }

                    switch ($target$$48) {
                      case 0:
                        {
                          if (debug) {
                            (0, _ildiag.dprintf)((0, _String.printf)("END at %a terminates CtxtWithAsAugment()\n"))(outputPos)(tokenStartPos);
                          }

                          LexFilterImpl$$popCtxt(this$$$23);
                          LexFilterImpl$$delayToken$$24788697(this$$$23, TokenTup$$UseLocation$$56122D30(tokenTup$$18, new _pars.token(12, "ODUMMY", token$$36)));
                          return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, new _pars.token(20, "OEND"));
                        }

                      case 1:
                        {
                          var $target$$49, namespaceTokenPos, prevToken, moduleTokenPos, prevToken$$1, addBlockEnd$$4, offsidePos$$5, rest$$14;

                          if (matchValue$$17[1].tail != null) {
                            if (matchValue$$17[1].head.tag === 17) {
                              $target$$49 = 0;
                              namespaceTokenPos = matchValue$$17[1].head.fields[0];
                              prevToken = matchValue$$17[1].head.fields[1];
                            } else if (matchValue$$17[1].head.tag === 18) {
                              $target$$49 = 1;
                              moduleTokenPos = matchValue$$17[1].head.fields[0];
                              prevToken$$1 = matchValue$$17[1].head.fields[1];
                            } else if (matchValue$$17[1].head.tag === 25) {
                              if (rest$$13 = matchValue$$17[1].tail, (offsidePos$$4 = matchValue$$17[1].head.fields[1], (addBlockEnd = matchValue$$17[1].head.fields[2], (isSemiSemi ? !(rest$$13.tail != null ? rest$$13.head.tag === 22 ? true : rest$$13.head.tag === 21 ? rest$$13.head.fields[1] ? true : false : false : false) : false) ? true : (grace = (matchValue$$19 = [token$$36, rest$$13], matchValue$$19[0].tag === 57 ? matchValue$$19[1].tail != null ? matchValue$$19[1].head.tag === 16 ? 2 : matchValue$$19[1].tail != null ? matchValue$$19[1].head.tag === 22 ? (posNamespace = matchValue$$19[1].head.fields[0], (0, _primLexing.Position$$get_Column)(offsidePos$$4) === (0, _primLexing.Position$$get_Column)(posNamespace) ? token$$36.tag === 150 ? true : false : false) ? -1 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : matchValue$$19[1].tail != null ? matchValue$$19[1].head.tag === 22 ? (posNamespace = matchValue$$19[1].head.fields[0], (0, _primLexing.Position$$get_Column)(offsidePos$$4) === (0, _primLexing.Position$$get_Column)(posNamespace) ? token$$36.tag === 150 ? true : false : false) ? -1 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : matchValue$$19[1].tail != null ? matchValue$$19[1].head.tag === 16 ? (posType = matchValue$$19[1].head.fields[0], (0, _primLexing.Position$$get_Column)(offsidePos$$4) === (0, _primLexing.Position$$get_Column)(posType) ? !isTypeSeqBlockElementContinuator(token$$36) : false) ? -1 : matchValue$$19[1].tail != null ? matchValue$$19[1].head.tag === 22 ? (posNamespace = matchValue$$19[1].head.fields[0], (0, _primLexing.Position$$get_Column)(offsidePos$$4) === (0, _primLexing.Position$$get_Column)(posNamespace) ? token$$36.tag === 150 ? true : false : false) ? -1 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : matchValue$$19[1].tail != null ? matchValue$$19[1].head.tag === 22 ? (posNamespace = matchValue$$19[1].head.fields[0], (0, _primLexing.Position$$get_Column)(offsidePos$$4) === (0, _primLexing.Position$$get_Column)(posNamespace) ? token$$36.tag === 150 ? true : false : false) ? -1 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : matchValue$$19[1].tail != null ? matchValue$$19[1].head.tag === 22 ? (posNamespace = matchValue$$19[1].head.fields[0], (0, _primLexing.Position$$get_Column)(offsidePos$$4) === (0, _primLexing.Position$$get_Column)(posNamespace) ? token$$36.tag === 150 ? true : false : false) ? -1 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0 : isInfix(token$$36) ? infixTokenLength(token$$36) + 1 : 0) | 0, tokenStartCol + grace < (0, _primLexing.Position$$get_Column)(offsidePos$$4))))) {
                                $target$$49 = 2;
                                addBlockEnd$$4 = matchValue$$17[1].head.fields[2];
                                offsidePos$$5 = matchValue$$17[1].head.fields[1];
                                rest$$14 = matchValue$$17[1].tail;
                              } else {
                                $target$$49 = 3;
                              }
                            } else {
                              $target$$49 = 3;
                            }
                          } else {
                            $target$$49 = 3;
                          }

                          switch ($target$$49) {
                            case 0:
                              {
                                const matchValue$$20 = [prevToken, token$$36];
                                var $target$$50;

                                if (matchValue$$20[0].tag === 150) {
                                  if (matchValue$$20[1].tag === 103) {
                                    if ((0, _primLexing.Position$$get_Column)(namespaceTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                      $target$$50 = 0;
                                    } else {
                                      $target$$50 = 1;
                                    }
                                  } else if (matchValue$$20[1].tag === 190) {
                                    if ((0, _primLexing.Position$$get_Column)(namespaceTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                      $target$$50 = 0;
                                    } else {
                                      $target$$50 = 1;
                                    }
                                  } else if (matchValue$$20[1].tag === 45) {
                                    if ((0, _primLexing.Position$$get_Column)(namespaceTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                      $target$$50 = 0;
                                    } else {
                                      $target$$50 = 1;
                                    }
                                  } else {
                                    $target$$50 = 1;
                                  }
                                } else if (matchValue$$20[0].tag === 77) {
                                  if (matchValue$$20[1].tag === 103) {
                                    if ((0, _primLexing.Position$$get_Column)(namespaceTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                      $target$$50 = 0;
                                    } else {
                                      $target$$50 = 1;
                                    }
                                  } else if (matchValue$$20[1].tag === 190) {
                                    if ((0, _primLexing.Position$$get_Column)(namespaceTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                      $target$$50 = 0;
                                    } else {
                                      $target$$50 = 1;
                                    }
                                  } else if (matchValue$$20[1].tag === 45) {
                                    if ((0, _primLexing.Position$$get_Column)(namespaceTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                      $target$$50 = 0;
                                    } else {
                                      $target$$50 = 1;
                                    }
                                  } else {
                                    $target$$50 = 1;
                                  }
                                } else if (matchValue$$20[0].tag === 103) {
                                  if (matchValue$$20[1].tag === 103) {
                                    if ((0, _primLexing.Position$$get_Column)(namespaceTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                      $target$$50 = 0;
                                    } else {
                                      $target$$50 = 1;
                                    }
                                  } else if (matchValue$$20[1].tag === 190) {
                                    if ((0, _primLexing.Position$$get_Column)(namespaceTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                      $target$$50 = 0;
                                    } else {
                                      $target$$50 = 1;
                                    }
                                  } else if (matchValue$$20[1].tag === 45) {
                                    if ((0, _primLexing.Position$$get_Column)(namespaceTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                      $target$$50 = 0;
                                    } else {
                                      $target$$50 = 1;
                                    }
                                  } else {
                                    $target$$50 = 1;
                                  }
                                } else if (matchValue$$20[0].tag === 45) {
                                  if (matchValue$$20[1].tag === 103) {
                                    if ((0, _primLexing.Position$$get_Column)(namespaceTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                      $target$$50 = 0;
                                    } else {
                                      $target$$50 = 1;
                                    }
                                  } else if (matchValue$$20[1].tag === 190) {
                                    if ((0, _primLexing.Position$$get_Column)(namespaceTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                      $target$$50 = 0;
                                    } else {
                                      $target$$50 = 1;
                                    }
                                  } else if (matchValue$$20[1].tag === 45) {
                                    if ((0, _primLexing.Position$$get_Column)(namespaceTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                      $target$$50 = 0;
                                    } else {
                                      $target$$50 = 1;
                                    }
                                  } else {
                                    $target$$50 = 1;
                                  }
                                } else {
                                  $target$$50 = 1;
                                }

                                switch ($target$$50) {
                                  case 0:
                                    {
                                      LexFilterImpl$$replaceCtxt(this$$$23, tokenTup$$18, new Context(17, "CtxtNamespaceHead", namespaceTokenPos, token$$36));
                                      return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                    }

                                  case 1:
                                    {
                                      var $target$$51;

                                      if (matchValue$$20[0].tag === 190) {
                                        if (matchValue$$20[1].tag === 77) {
                                          if ((0, _primLexing.Position$$get_Column)(namespaceTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                            $target$$51 = 0;
                                          } else {
                                            $target$$51 = 1;
                                          }
                                        } else {
                                          $target$$51 = 1;
                                        }
                                      } else {
                                        $target$$51 = 1;
                                      }

                                      switch ($target$$51) {
                                        case 0:
                                          {
                                            LexFilterImpl$$replaceCtxt(this$$$23, tokenTup$$18, new Context(17, "CtxtNamespaceHead", namespaceTokenPos, token$$36));
                                            return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                          }

                                        case 1:
                                          {
                                            if (debug) {
                                              (0, _ildiag.dprintf)((0, _String.printf)("CtxtNamespaceHead: pushing CtxtSeqBlock\n"));
                                            }

                                            LexFilterImpl$$popCtxt(this$$$23);

                                            if (TokenTup$$get_Token(tokenTup$$18).tag === 10) {
                                              return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                            } else {
                                              LexFilterImpl$$delayToken$$24788697(this$$$23, tokenTup$$18);
                                              LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(22, "CtxtNamespaceBody", namespaceTokenPos));
                                              LexFilterImpl$$pushCtxtSeqBlockAt$$Z2F572839(this$$$23, tokenTup$$18, true, new AddBlockEnd(0, "AddBlockEnd"));
                                              this$$$23 = this$$$23;
                                              useBlockRule$$1 = false;
                                              continue LexFilterImpl$$hwTokenFetch$$Z1FBCCD16;
                                            }
                                          }
                                      }
                                    }
                                }
                              }

                            case 1:
                              {
                                const matchValue$$22 = [prevToken$$1, token$$36];
                                var $target$$52;

                                if (matchValue$$22[0].tag === 149) {
                                  if (matchValue$$22[1].tag === 45) {
                                    if ((0, _primLexing.Position$$get_Column)(moduleTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                      $target$$52 = 0;
                                    } else {
                                      $target$$52 = 1;
                                    }
                                  } else {
                                    $target$$52 = 1;
                                  }
                                } else {
                                  $target$$52 = 1;
                                }

                                switch ($target$$52) {
                                  case 0:
                                    {
                                      LexFilterImpl$$replaceCtxt(this$$$23, tokenTup$$18, new Context(18, "CtxtModuleHead", moduleTokenPos, token$$36));
                                      return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                    }

                                  case 1:
                                    {
                                      var $target$$53;

                                      if (matchValue$$22[0].tag === 149) {
                                        if (matchValue$$22[1].tag === 42) {
                                          if ((0, _primLexing.Position$$get_Column)(moduleTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                            $target$$53 = 0;
                                          } else {
                                            $target$$53 = 1;
                                          }
                                        } else if (matchValue$$22[1].tag === 43) {
                                          if ((0, _primLexing.Position$$get_Column)(moduleTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                            $target$$53 = 0;
                                          } else {
                                            $target$$53 = 1;
                                          }
                                        } else if (matchValue$$22[1].tag === 44) {
                                          if ((0, _primLexing.Position$$get_Column)(moduleTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                            $target$$53 = 0;
                                          } else {
                                            $target$$53 = 1;
                                          }
                                        } else {
                                          $target$$53 = 1;
                                        }
                                      } else {
                                        $target$$53 = 1;
                                      }

                                      switch ($target$$53) {
                                        case 0:
                                          {
                                            return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                          }

                                        case 1:
                                          {
                                            var $target$$54;

                                            if (matchValue$$22[0].tag === 149) {
                                              if (matchValue$$22[1].tag === 103) {
                                                if ((0, _primLexing.Position$$get_Column)(moduleTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                                  $target$$54 = 0;
                                                } else {
                                                  $target$$54 = 1;
                                                }
                                              } else if (matchValue$$22[1].tag === 190) {
                                                if ((0, _primLexing.Position$$get_Column)(moduleTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                                  $target$$54 = 0;
                                                } else {
                                                  $target$$54 = 1;
                                                }
                                              } else {
                                                $target$$54 = 1;
                                              }
                                            } else if (matchValue$$22[0].tag === 77) {
                                              if (matchValue$$22[1].tag === 103) {
                                                if ((0, _primLexing.Position$$get_Column)(moduleTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                                  $target$$54 = 0;
                                                } else {
                                                  $target$$54 = 1;
                                                }
                                              } else if (matchValue$$22[1].tag === 190) {
                                                if ((0, _primLexing.Position$$get_Column)(moduleTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                                  $target$$54 = 0;
                                                } else {
                                                  $target$$54 = 1;
                                                }
                                              } else {
                                                $target$$54 = 1;
                                              }
                                            } else if (matchValue$$22[0].tag === 103) {
                                              if (matchValue$$22[1].tag === 103) {
                                                if ((0, _primLexing.Position$$get_Column)(moduleTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                                  $target$$54 = 0;
                                                } else {
                                                  $target$$54 = 1;
                                                }
                                              } else if (matchValue$$22[1].tag === 190) {
                                                if ((0, _primLexing.Position$$get_Column)(moduleTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                                  $target$$54 = 0;
                                                } else {
                                                  $target$$54 = 1;
                                                }
                                              } else {
                                                $target$$54 = 1;
                                              }
                                            } else {
                                              $target$$54 = 1;
                                            }

                                            switch ($target$$54) {
                                              case 0:
                                                {
                                                  LexFilterImpl$$replaceCtxt(this$$$23, tokenTup$$18, new Context(18, "CtxtModuleHead", moduleTokenPos, token$$36));
                                                  return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                }

                                              case 1:
                                                {
                                                  var $target$$55;

                                                  if (matchValue$$22[0].tag === 190) {
                                                    if (matchValue$$22[1].tag === 77) {
                                                      if ((0, _primLexing.Position$$get_Column)(moduleTokenPos) < (0, _primLexing.Position$$get_Column)(tokenStartPos)) {
                                                        $target$$55 = 0;
                                                      } else {
                                                        $target$$55 = 1;
                                                      }
                                                    } else {
                                                      $target$$55 = 1;
                                                    }
                                                  } else {
                                                    $target$$55 = 1;
                                                  }

                                                  switch ($target$$55) {
                                                    case 0:
                                                      {
                                                        LexFilterImpl$$replaceCtxt(this$$$23, tokenTup$$18, new Context(18, "CtxtModuleHead", moduleTokenPos, token$$36));
                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                      }

                                                    case 1:
                                                      {
                                                        var $target$$56;

                                                        if (matchValue$$22[1].tag === 70) {
                                                          $target$$56 = 0;
                                                        } else if (matchValue$$22[1].tag === 78) {
                                                          $target$$56 = 0;
                                                        } else {
                                                          $target$$56 = 1;
                                                        }

                                                        switch ($target$$56) {
                                                          case 0:
                                                            {
                                                              if (debug) {
                                                                (0, _ildiag.dprintf)((0, _String.printf)("CtxtModuleHead: COLON/EQUALS, pushing CtxtModuleBody and CtxtSeqBlock\n"));
                                                              }

                                                              LexFilterImpl$$popCtxt(this$$$23);
                                                              LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(21, "CtxtModuleBody", moduleTokenPos, false));
                                                              LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                              return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                            }

                                                          case 1:
                                                            {
                                                              if (debug) {
                                                                (0, _ildiag.dprintf)((0, _String.printf)("CtxtModuleHead: start of file, CtxtSeqBlock\n"));
                                                              }

                                                              LexFilterImpl$$popCtxt(this$$$23);

                                                              if (TokenTup$$get_Token(tokenTup$$18).tag === 10) {
                                                                return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                              } else {
                                                                LexFilterImpl$$delayToken$$24788697(this$$$23, tokenTup$$18);
                                                                LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(21, "CtxtModuleBody", moduleTokenPos, true));
                                                                LexFilterImpl$$pushCtxtSeqBlockAt$$Z2F572839(this$$$23, tokenTup$$18, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                this$$$23 = this$$$23;
                                                                useBlockRule$$1 = false;
                                                                continue LexFilterImpl$$hwTokenFetch$$Z1FBCCD16;
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

                            case 2:
                              {
                                if (debug) {
                                  (0, _ildiag.dprintf)((0, _String.printf)("offside token at column %d indicates end of CtxtSeqBlock started at %a!\n"))(tokenStartCol)(outputPos)(offsidePos$$5);
                                }

                                LexFilterImpl$$popCtxt(this$$$23);

                                if (debug) {
                                  if (addBlockEnd$$4.tag === 0) {
                                    (0, _ildiag.dprintf)((0, _String.printf)("end of CtxtSeqBlock, insert OBLOCKEND \n"));
                                  }
                                }

                                switch (addBlockEnd$$4.tag) {
                                  case 2:
                                    {
                                      return insertToken(new _pars.token(18, "ORIGHT_BLOCK_END"));
                                    }

                                  case 1:
                                    {
                                      return reprocess();
                                    }

                                  default:
                                    {
                                      return insertToken(new _pars.token(15, "OBLOCKEND"));
                                    }
                                }
                              }

                            case 3:
                              {
                                var $target$$57, offsidePos$$7;

                                if (matchValue$$17[1].tail != null) {
                                  if (matchValue$$17[1].head.tag === 11) {
                                    if (offsidePos$$6 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : tokenStartCol <= (0, _primLexing.Position$$get_Column)(offsidePos$$6)) {
                                      $target$$57 = 0;
                                      offsidePos$$7 = matchValue$$17[1].head.fields[0];
                                    } else {
                                      $target$$57 = 1;
                                    }
                                  } else {
                                    $target$$57 = 1;
                                  }
                                } else {
                                  $target$$57 = 1;
                                }

                                switch ($target$$57) {
                                  case 0:
                                    {
                                      if (debug) {
                                        (0, _ildiag.dprintf)((0, _String.printf)("offside token at column %d indicates end of CtxtVanilla started at %a!\n"))(tokenStartCol)(outputPos)(offsidePos$$7);
                                      }

                                      LexFilterImpl$$popCtxt(this$$$23);
                                      return reprocess();
                                    }

                                  case 1:
                                    {
                                      var $target$$58, addBlockEnd$$6, offsidePos$$9;

                                      if (matchValue$$17[1].tail != null) {
                                        if (matchValue$$17[1].head.tag === 25) {
                                          if (matchValue$$17[1].head.fields[0].tag === 1) {
                                            if (offsidePos$$8 = matchValue$$17[1].head.fields[1], (addBlockEnd$$5 = matchValue$$17[1].head.fields[2], token$$36.tag === 54 ? true : false)) {
                                              $target$$58 = 0;
                                              addBlockEnd$$6 = matchValue$$17[1].head.fields[2];
                                              offsidePos$$9 = matchValue$$17[1].head.fields[1];
                                            } else {
                                              $target$$58 = 1;
                                            }
                                          } else {
                                            $target$$58 = 1;
                                          }
                                        } else {
                                          $target$$58 = 1;
                                        }
                                      } else {
                                        $target$$58 = 1;
                                      }

                                      switch ($target$$58) {
                                        case 0:
                                          {
                                            LexFilterImpl$$replaceCtxt(this$$$23, tokenTup$$18, new Context(25, "CtxtSeqBlock", new FirstInSequence(0, "FirstInSeqBlock"), offsidePos$$9, addBlockEnd$$6));
                                            return reprocessWithoutBlockRule();
                                          }

                                        case 1:
                                          {
                                            var $target$$59, addBlockEnd$$8, offsidePos$$11;

                                            if (matchValue$$17[1].tail != null) {
                                              if (matchValue$$17[1].head.tag === 25) {
                                                if (matchValue$$17[1].head.fields[0].tag === 0) {
                                                  if (offsidePos$$10 = matchValue$$17[1].head.fields[1], (addBlockEnd$$7 = matchValue$$17[1].head.fields[2], useBlockRule$$1)) {
                                                    $target$$59 = 0;
                                                    addBlockEnd$$8 = matchValue$$17[1].head.fields[2];
                                                    offsidePos$$11 = matchValue$$17[1].head.fields[1];
                                                  } else {
                                                    $target$$59 = 1;
                                                  }
                                                } else {
                                                  $target$$59 = 1;
                                                }
                                              } else {
                                                $target$$59 = 1;
                                              }
                                            } else {
                                              $target$$59 = 1;
                                            }

                                            switch ($target$$59) {
                                              case 0:
                                                {
                                                  if (debug) {
                                                    (0, _ildiag.dprintf)((0, _String.printf)("repull for CtxtSeqBlockStart\n"));
                                                  }

                                                  LexFilterImpl$$replaceCtxt(this$$$23, tokenTup$$18, new Context(25, "CtxtSeqBlock", new FirstInSequence(1, "NotFirstInSeqBlock"), offsidePos$$11, addBlockEnd$$8));
                                                  return reprocessWithoutBlockRule();
                                                }

                                              case 1:
                                                {
                                                  var $target$$60, addBlockEnd$$10, offsidePos$$13, rest$$16;

                                                  if (matchValue$$17[1].tail != null) {
                                                    if (matchValue$$17[1].head.tag === 25) {
                                                      if (matchValue$$17[1].head.fields[0].tag === 1) {
                                                        if (rest$$15 = matchValue$$17[1].tail, (offsidePos$$12 = matchValue$$17[1].head.fields[1], (addBlockEnd$$9 = matchValue$$17[1].head.fields[2], ((useBlockRule$$1 ? !(isTypeCtxt = rest$$15.tail != null ? rest$$15.head.tag === 16 ? true : false : false, (isNamespaceCtxt = rest$$15.tail != null ? rest$$15.head.tag === 22 ? true : false : false, isNamespaceCtxt ? token$$36.tag === 150 ? true : false : isTypeCtxt ? isTypeSeqBlockElementContinuator(token$$36) : isSeqBlockElementContinuator(token$$36))) : false) ? tokenStartCol === (0, _primLexing.Position$$get_Column)(offsidePos$$12) : false) ? tokenStartPos.OriginalLine !== offsidePos$$12.OriginalLine : false))) {
                                                          $target$$60 = 0;
                                                          addBlockEnd$$10 = matchValue$$17[1].head.fields[2];
                                                          offsidePos$$13 = matchValue$$17[1].head.fields[1];
                                                          rest$$16 = matchValue$$17[1].tail;
                                                        } else {
                                                          $target$$60 = 1;
                                                        }
                                                      } else {
                                                        $target$$60 = 1;
                                                      }
                                                    } else {
                                                      $target$$60 = 1;
                                                    }
                                                  } else {
                                                    $target$$60 = 1;
                                                  }

                                                  switch ($target$$60) {
                                                    case 0:
                                                      {
                                                        if (debug) {
                                                          (0, _ildiag.dprintf)((0, _String.printf)("offside at column %d matches start of block(%a)! delaying token, returning OBLOCKSEP\n"))(tokenStartCol)(outputPos)(offsidePos$$13);
                                                        }

                                                        LexFilterImpl$$replaceCtxt(this$$$23, tokenTup$$18, new Context(25, "CtxtSeqBlock", new FirstInSequence(0, "FirstInSeqBlock"), offsidePos$$13, addBlockEnd$$10));
                                                        return insertTokenFromPrevPosToCurrentPos(new _pars.token(21, "OBLOCKSEP"));
                                                      }

                                                    case 1:
                                                      {
                                                        var $target$$61, offsidePos$$15;

                                                        if (matchValue$$17[1].tail != null) {
                                                          if (matchValue$$17[1].head.tag === 0) {
                                                            if (matchValue$$17[1].head.fields[0]) {
                                                              if (offsidePos$$14 = matchValue$$17[1].head.fields[1], isSemiSemi ? true : (isLetContinuator(token$$36) ? tokenStartCol + 1 : tokenStartCol) <= (0, _primLexing.Position$$get_Column)(offsidePos$$14)) {
                                                                $target$$61 = 0;
                                                                offsidePos$$15 = matchValue$$17[1].head.fields[1];
                                                              } else {
                                                                $target$$61 = 1;
                                                              }
                                                            } else {
                                                              $target$$61 = 1;
                                                            }
                                                          } else {
                                                            $target$$61 = 1;
                                                          }
                                                        } else {
                                                          $target$$61 = 1;
                                                        }

                                                        switch ($target$$61) {
                                                          case 0:
                                                            {
                                                              if (debug) {
                                                                (0, _ildiag.dprintf)((0, _String.printf)("token at column %d is offside from LET(offsidePos=%a)! delaying token, returning ODECLEND\n"))(tokenStartCol)(outputPos)(offsidePos$$15);
                                                              }

                                                              LexFilterImpl$$popCtxt(this$$$23);
                                                              return insertToken(new _pars.token(19, "ODECLEND"));
                                                            }

                                                          case 1:
                                                            {
                                                              var $target$$62, offsidePos$$17;

                                                              if (matchValue$$17[1].tail != null) {
                                                                if (matchValue$$17[1].head.tag === 14) {
                                                                  if (offsidePos$$16 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : (isDoContinuator(token$$36) ? tokenStartCol + 1 : tokenStartCol) <= (0, _primLexing.Position$$get_Column)(offsidePos$$16)) {
                                                                    $target$$62 = 0;
                                                                    offsidePos$$17 = matchValue$$17[1].head.fields[0];
                                                                  } else {
                                                                    $target$$62 = 1;
                                                                  }
                                                                } else {
                                                                  $target$$62 = 1;
                                                                }
                                                              } else {
                                                                $target$$62 = 1;
                                                              }

                                                              switch ($target$$62) {
                                                                case 0:
                                                                  {
                                                                    if (debug) {
                                                                      (0, _ildiag.dprintf)((0, _String.printf)("token at column %d is offside from DO(offsidePos=%a)! delaying token, returning ODECLEND\n"))(tokenStartCol)(outputPos)(offsidePos$$17);
                                                                    }

                                                                    LexFilterImpl$$popCtxt(this$$$23);
                                                                    return insertToken(new _pars.token(19, "ODECLEND"));
                                                                  }

                                                                case 1:
                                                                  {
                                                                    var $target$$63, offsidePos$$19;

                                                                    if (matchValue$$17[1].tail != null) {
                                                                      if (matchValue$$17[1].head.tag === 15) {
                                                                        if (offsidePos$$18 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : (isInterfaceContinuator(token$$36) ? tokenStartCol + 1 : tokenStartCol) <= (0, _primLexing.Position$$get_Column)(offsidePos$$18)) {
                                                                          $target$$63 = 0;
                                                                          offsidePos$$19 = matchValue$$17[1].head.fields[0];
                                                                        } else {
                                                                          $target$$63 = 1;
                                                                        }
                                                                      } else {
                                                                        $target$$63 = 1;
                                                                      }
                                                                    } else {
                                                                      $target$$63 = 1;
                                                                    }

                                                                    switch ($target$$63) {
                                                                      case 0:
                                                                        {
                                                                          if (debug) {
                                                                            (0, _ildiag.dprintf)((0, _String.printf)("token at column %d is offside from INTERFACE(offsidePos=%a)! pop and reprocess\n"))(tokenStartCol)(outputPos)(offsidePos$$19);
                                                                          }

                                                                          LexFilterImpl$$popCtxt(this$$$23);
                                                                          return reprocess();
                                                                        }

                                                                      case 1:
                                                                        {
                                                                          var $target$$64, offsidePos$$21;

                                                                          if (matchValue$$17[1].tail != null) {
                                                                            if (matchValue$$17[1].head.tag === 16) {
                                                                              if (offsidePos$$20 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : (isTypeContinuator(token$$36) ? tokenStartCol + 1 : tokenStartCol) <= (0, _primLexing.Position$$get_Column)(offsidePos$$20)) {
                                                                                $target$$64 = 0;
                                                                                offsidePos$$21 = matchValue$$17[1].head.fields[0];
                                                                              } else {
                                                                                $target$$64 = 1;
                                                                              }
                                                                            } else {
                                                                              $target$$64 = 1;
                                                                            }
                                                                          } else {
                                                                            $target$$64 = 1;
                                                                          }

                                                                          switch ($target$$64) {
                                                                            case 0:
                                                                              {
                                                                                if (debug) {
                                                                                  (0, _ildiag.dprintf)((0, _String.printf)("token at column %d is offside from TYPE(offsidePos=%a)! pop and reprocess\n"))(tokenStartCol)(outputPos)(offsidePos$$21);
                                                                                }

                                                                                LexFilterImpl$$popCtxt(this$$$23);
                                                                                return reprocess();
                                                                              }

                                                                            case 1:
                                                                              {
                                                                                var $target$$65, offsidePos$$23, wholeFile$$1;

                                                                                if (matchValue$$17[1].tail != null) {
                                                                                  if (matchValue$$17[1].head.tag === 21) {
                                                                                    if (wholeFile = matchValue$$17[1].head.fields[1], (offsidePos$$22 = matchValue$$17[1].head.fields[0], (isSemiSemi ? !wholeFile : false) ? true : tokenStartCol <= (0, _primLexing.Position$$get_Column)(offsidePos$$22))) {
                                                                                      $target$$65 = 0;
                                                                                      offsidePos$$23 = matchValue$$17[1].head.fields[0];
                                                                                      wholeFile$$1 = matchValue$$17[1].head.fields[1];
                                                                                    } else {
                                                                                      $target$$65 = 1;
                                                                                    }
                                                                                  } else {
                                                                                    $target$$65 = 1;
                                                                                  }
                                                                                } else {
                                                                                  $target$$65 = 1;
                                                                                }

                                                                                switch ($target$$65) {
                                                                                  case 0:
                                                                                    {
                                                                                      if (debug) {
                                                                                        (0, _ildiag.dprintf)((0, _String.printf)("token at column %d is offside from MODULE with offsidePos %a! delaying token\n"))(tokenStartCol)(outputPos)(offsidePos$$23);
                                                                                      }

                                                                                      LexFilterImpl$$popCtxt(this$$$23);
                                                                                      return reprocess();
                                                                                    }

                                                                                  case 1:
                                                                                    {
                                                                                      var $target$$66, offsidePos$$25;

                                                                                      if (matchValue$$17[1].tail != null) {
                                                                                        if (matchValue$$17[1].head.tag === 22) {
                                                                                          if (offsidePos$$24 = matchValue$$17[1].head.fields[0], (isNamespaceContinuator(token$$36) ? tokenStartCol + 1 : tokenStartCol) <= (0, _primLexing.Position$$get_Column)(offsidePos$$24)) {
                                                                                            $target$$66 = 0;
                                                                                            offsidePos$$25 = matchValue$$17[1].head.fields[0];
                                                                                          } else {
                                                                                            $target$$66 = 1;
                                                                                          }
                                                                                        } else {
                                                                                          $target$$66 = 1;
                                                                                        }
                                                                                      } else {
                                                                                        $target$$66 = 1;
                                                                                      }

                                                                                      switch ($target$$66) {
                                                                                        case 0:
                                                                                          {
                                                                                            if (debug) {
                                                                                              (0, _ildiag.dprintf)((0, _String.printf)("token at column %d is offside from NAMESPACE with offsidePos %a! delaying token\n"))(tokenStartCol)(outputPos)(offsidePos$$25);
                                                                                            }

                                                                                            LexFilterImpl$$popCtxt(this$$$23);
                                                                                            return reprocess();
                                                                                          }

                                                                                        case 1:
                                                                                          {
                                                                                            var $target$$67, offsidePos$$27;

                                                                                            if (matchValue$$17[1].tail != null) {
                                                                                              if (matchValue$$17[1].head.tag === 23) {
                                                                                                if (offsidePos$$26 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : tokenStartCol <= (0, _primLexing.Position$$get_Column)(offsidePos$$26)) {
                                                                                                  $target$$67 = 0;
                                                                                                  offsidePos$$27 = matchValue$$17[1].head.fields[0];
                                                                                                } else {
                                                                                                  $target$$67 = 1;
                                                                                                }
                                                                                              } else {
                                                                                                $target$$67 = 1;
                                                                                              }
                                                                                            } else {
                                                                                              $target$$67 = 1;
                                                                                            }

                                                                                            switch ($target$$67) {
                                                                                              case 0:
                                                                                                {
                                                                                                  if (debug) {
                                                                                                    (0, _ildiag.dprintf)((0, _String.printf)("token at column %d is offside from EXCEPTION with offsidePos %a! delaying token\n"))(tokenStartCol)(outputPos)(offsidePos$$27);
                                                                                                  }

                                                                                                  LexFilterImpl$$popCtxt(this$$$23);
                                                                                                  return reprocess();
                                                                                                }

                                                                                              case 1:
                                                                                                {
                                                                                                  var $target$$68, offsidePos$$29;

                                                                                                  if (matchValue$$17[1].tail != null) {
                                                                                                    if (matchValue$$17[1].head.tag === 20) {
                                                                                                      if (offsidePos$$28 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : tokenStartCol <= (0, _primLexing.Position$$get_Column)(offsidePos$$28)) {
                                                                                                        $target$$68 = 0;
                                                                                                        offsidePos$$29 = matchValue$$17[1].head.fields[0];
                                                                                                      } else {
                                                                                                        $target$$68 = 1;
                                                                                                      }
                                                                                                    } else {
                                                                                                      $target$$68 = 1;
                                                                                                    }
                                                                                                  } else {
                                                                                                    $target$$68 = 1;
                                                                                                  }

                                                                                                  switch ($target$$68) {
                                                                                                    case 0:
                                                                                                      {
                                                                                                        if (debug) {
                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("token at column %d is offside from MEMBER/OVERRIDE head with offsidePos %a!\n"))(tokenStartCol)(outputPos)(offsidePos$$29);
                                                                                                        }

                                                                                                        LexFilterImpl$$popCtxt(this$$$23);
                                                                                                        return insertToken(new _pars.token(19, "ODECLEND"));
                                                                                                      }

                                                                                                    case 1:
                                                                                                      {
                                                                                                        var $target$$69, offsidePos$$31;

                                                                                                        if (matchValue$$17[1].tail != null) {
                                                                                                          if (matchValue$$17[1].head.tag === 19) {
                                                                                                            if (offsidePos$$30 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : tokenStartCol <= (0, _primLexing.Position$$get_Column)(offsidePos$$30)) {
                                                                                                              $target$$69 = 0;
                                                                                                              offsidePos$$31 = matchValue$$17[1].head.fields[0];
                                                                                                            } else {
                                                                                                              $target$$69 = 1;
                                                                                                            }
                                                                                                          } else {
                                                                                                            $target$$69 = 1;
                                                                                                          }
                                                                                                        } else {
                                                                                                          $target$$69 = 1;
                                                                                                        }

                                                                                                        switch ($target$$69) {
                                                                                                          case 0:
                                                                                                            {
                                                                                                              if (debug) {
                                                                                                                (0, _ildiag.dprintf)((0, _String.printf)("token at column %d is offside from MEMBER/OVERRIDE head with offsidePos %a!\n"))(tokenStartCol)(outputPos)(offsidePos$$31);
                                                                                                              }

                                                                                                              LexFilterImpl$$popCtxt(this$$$23);
                                                                                                              return reprocess();
                                                                                                            }

                                                                                                          case 1:
                                                                                                            {
                                                                                                              var $target$$70, offsidePos$$33;

                                                                                                              if (matchValue$$17[1].tail != null) {
                                                                                                                if (matchValue$$17[1].head.tag === 1) {
                                                                                                                  if (offsidePos$$32 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : (isIfBlockContinuator(token$$36) ? tokenStartCol + 1 : tokenStartCol) <= (0, _primLexing.Position$$get_Column)(offsidePos$$32)) {
                                                                                                                    $target$$70 = 0;
                                                                                                                    offsidePos$$33 = matchValue$$17[1].head.fields[0];
                                                                                                                  } else {
                                                                                                                    $target$$70 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$70 = 1;
                                                                                                                }
                                                                                                              } else {
                                                                                                                $target$$70 = 1;
                                                                                                              }

                                                                                                              switch ($target$$70) {
                                                                                                                case 0:
                                                                                                                  {
                                                                                                                    if (debug) {
                                                                                                                      (0, _ildiag.dprintf)((0, _String.printf)("offside from CtxtIf\n"));
                                                                                                                    }

                                                                                                                    LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                    return reprocess();
                                                                                                                  }

                                                                                                                case 1:
                                                                                                                  {
                                                                                                                    var $target$$71, offsidePos$$35;

                                                                                                                    if (matchValue$$17[1].tail != null) {
                                                                                                                      if (matchValue$$17[1].head.tag === 5) {
                                                                                                                        if (offsidePos$$34 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : (isLetContinuator(token$$36) ? tokenStartCol + 1 : tokenStartCol) <= (0, _primLexing.Position$$get_Column)(offsidePos$$34)) {
                                                                                                                          $target$$71 = 0;
                                                                                                                          offsidePos$$35 = matchValue$$17[1].head.fields[0];
                                                                                                                        } else {
                                                                                                                          $target$$71 = 1;
                                                                                                                        }
                                                                                                                      } else {
                                                                                                                        $target$$71 = 1;
                                                                                                                      }
                                                                                                                    } else {
                                                                                                                      $target$$71 = 1;
                                                                                                                    }

                                                                                                                    switch ($target$$71) {
                                                                                                                      case 0:
                                                                                                                        {
                                                                                                                          if (debug) {
                                                                                                                            (0, _ildiag.dprintf)((0, _String.printf)("offside from CtxtWithAsLet\n"));
                                                                                                                          }

                                                                                                                          LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                          return insertToken(new _pars.token(20, "OEND"));
                                                                                                                        }

                                                                                                                      case 1:
                                                                                                                        {
                                                                                                                          var $target$$72, offsidePos$$37;

                                                                                                                          if (matchValue$$17[1].tail != null) {
                                                                                                                            if (matchValue$$17[1].head.tag === 6) {
                                                                                                                              if (offsidePos$$36 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : (isWithAugmentBlockContinuator(token$$36) ? tokenStartCol + 1 : tokenStartCol) <= (0, _primLexing.Position$$get_Column)(offsidePos$$36)) {
                                                                                                                                $target$$72 = 0;
                                                                                                                                offsidePos$$37 = matchValue$$17[1].head.fields[0];
                                                                                                                              } else {
                                                                                                                                $target$$72 = 1;
                                                                                                                              }
                                                                                                                            } else {
                                                                                                                              $target$$72 = 1;
                                                                                                                            }
                                                                                                                          } else {
                                                                                                                            $target$$72 = 1;
                                                                                                                          }

                                                                                                                          switch ($target$$72) {
                                                                                                                            case 0:
                                                                                                                              {
                                                                                                                                if (debug) {
                                                                                                                                  (0, _ildiag.dprintf)((0, _String.printf)("offside from CtxtWithAsAugment, isWithAugmentBlockContinuator = %b\n"))(isWithAugmentBlockContinuator(token$$36));
                                                                                                                                }

                                                                                                                                LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                                return insertToken(new _pars.token(19, "ODECLEND"));
                                                                                                                              }

                                                                                                                            case 1:
                                                                                                                              {
                                                                                                                                var $target$$73, offsidePos$$39;

                                                                                                                                if (matchValue$$17[1].tail != null) {
                                                                                                                                  if (matchValue$$17[1].head.tag === 7) {
                                                                                                                                    if (offsidePos$$38 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : tokenStartCol <= (0, _primLexing.Position$$get_Column)(offsidePos$$38)) {
                                                                                                                                      $target$$73 = 0;
                                                                                                                                      offsidePos$$39 = matchValue$$17[1].head.fields[0];
                                                                                                                                    } else {
                                                                                                                                      $target$$73 = 1;
                                                                                                                                    }
                                                                                                                                  } else {
                                                                                                                                    $target$$73 = 1;
                                                                                                                                  }
                                                                                                                                } else {
                                                                                                                                  $target$$73 = 1;
                                                                                                                                }

                                                                                                                                switch ($target$$73) {
                                                                                                                                  case 0:
                                                                                                                                    {
                                                                                                                                      if (debug) {
                                                                                                                                        (0, _ildiag.dprintf)((0, _String.printf)("offside from CtxtMatch\n"));
                                                                                                                                      }

                                                                                                                                      LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                                      return reprocess();
                                                                                                                                    }

                                                                                                                                  case 1:
                                                                                                                                    {
                                                                                                                                      var $target$$74, offsidePos$$41;

                                                                                                                                      if (matchValue$$17[1].tail != null) {
                                                                                                                                        if (matchValue$$17[1].head.tag === 8) {
                                                                                                                                          if (offsidePos$$40 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : (isForLoopContinuator(token$$36) ? tokenStartCol + 1 : tokenStartCol) <= (0, _primLexing.Position$$get_Column)(offsidePos$$40)) {
                                                                                                                                            $target$$74 = 0;
                                                                                                                                            offsidePos$$41 = matchValue$$17[1].head.fields[0];
                                                                                                                                          } else {
                                                                                                                                            $target$$74 = 1;
                                                                                                                                          }
                                                                                                                                        } else {
                                                                                                                                          $target$$74 = 1;
                                                                                                                                        }
                                                                                                                                      } else {
                                                                                                                                        $target$$74 = 1;
                                                                                                                                      }

                                                                                                                                      switch ($target$$74) {
                                                                                                                                        case 0:
                                                                                                                                          {
                                                                                                                                            if (debug) {
                                                                                                                                              (0, _ildiag.dprintf)((0, _String.printf)("offside from CtxtFor\n"));
                                                                                                                                            }

                                                                                                                                            LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                                            return reprocess();
                                                                                                                                          }

                                                                                                                                        case 1:
                                                                                                                                          {
                                                                                                                                            var $target$$75, offsidePos$$43;

                                                                                                                                            if (matchValue$$17[1].tail != null) {
                                                                                                                                              if (matchValue$$17[1].head.tag === 9) {
                                                                                                                                                if (offsidePos$$42 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : (isWhileBlockContinuator(token$$36) ? tokenStartCol + 1 : tokenStartCol) <= (0, _primLexing.Position$$get_Column)(offsidePos$$42)) {
                                                                                                                                                  $target$$75 = 0;
                                                                                                                                                  offsidePos$$43 = matchValue$$17[1].head.fields[0];
                                                                                                                                                } else {
                                                                                                                                                  $target$$75 = 1;
                                                                                                                                                }
                                                                                                                                              } else {
                                                                                                                                                $target$$75 = 1;
                                                                                                                                              }
                                                                                                                                            } else {
                                                                                                                                              $target$$75 = 1;
                                                                                                                                            }

                                                                                                                                            switch ($target$$75) {
                                                                                                                                              case 0:
                                                                                                                                                {
                                                                                                                                                  if (debug) {
                                                                                                                                                    (0, _ildiag.dprintf)((0, _String.printf)("offside from CtxtWhile\n"));
                                                                                                                                                  }

                                                                                                                                                  LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                                                  return reprocess();
                                                                                                                                                }

                                                                                                                                              case 1:
                                                                                                                                                {
                                                                                                                                                  var $target$$76, offsidePos$$45;

                                                                                                                                                  if (matchValue$$17[1].tail != null) {
                                                                                                                                                    if (matchValue$$17[1].head.tag === 10) {
                                                                                                                                                      if (offsidePos$$44 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : tokenStartCol <= (0, _primLexing.Position$$get_Column)(offsidePos$$44)) {
                                                                                                                                                        $target$$76 = 0;
                                                                                                                                                        offsidePos$$45 = matchValue$$17[1].head.fields[0];
                                                                                                                                                      } else {
                                                                                                                                                        $target$$76 = 1;
                                                                                                                                                      }
                                                                                                                                                    } else {
                                                                                                                                                      $target$$76 = 1;
                                                                                                                                                    }
                                                                                                                                                  } else {
                                                                                                                                                    $target$$76 = 1;
                                                                                                                                                  }

                                                                                                                                                  switch ($target$$76) {
                                                                                                                                                    case 0:
                                                                                                                                                      {
                                                                                                                                                        if (debug) {
                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("offside from CtxtWhen\n"));
                                                                                                                                                        }

                                                                                                                                                        LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                                                        return reprocess();
                                                                                                                                                      }

                                                                                                                                                    case 1:
                                                                                                                                                      {
                                                                                                                                                        var $target$$77, offsidePos$$47;

                                                                                                                                                        if (matchValue$$17[1].tail != null) {
                                                                                                                                                          if (matchValue$$17[1].head.tag === 3) {
                                                                                                                                                            if (offsidePos$$46 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : tokenStartCol <= (0, _primLexing.Position$$get_Column)(offsidePos$$46)) {
                                                                                                                                                              $target$$77 = 0;
                                                                                                                                                              offsidePos$$47 = matchValue$$17[1].head.fields[0];
                                                                                                                                                            } else {
                                                                                                                                                              $target$$77 = 1;
                                                                                                                                                            }
                                                                                                                                                          } else {
                                                                                                                                                            $target$$77 = 1;
                                                                                                                                                          }
                                                                                                                                                        } else {
                                                                                                                                                          $target$$77 = 1;
                                                                                                                                                        }

                                                                                                                                                        switch ($target$$77) {
                                                                                                                                                          case 0:
                                                                                                                                                            {
                                                                                                                                                              if (debug) {
                                                                                                                                                                (0, _ildiag.dprintf)((0, _String.printf)("offside from CtxtFun\n"));
                                                                                                                                                              }

                                                                                                                                                              LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                                                              return insertToken(new _pars.token(20, "OEND"));
                                                                                                                                                            }

                                                                                                                                                          case 1:
                                                                                                                                                            {
                                                                                                                                                              var $target$$78, offsidePos$$49;

                                                                                                                                                              if (matchValue$$17[1].tail != null) {
                                                                                                                                                                if (matchValue$$17[1].head.tag === 4) {
                                                                                                                                                                  if (offsidePos$$48 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : tokenStartCol <= (0, _primLexing.Position$$get_Column)(offsidePos$$48)) {
                                                                                                                                                                    $target$$78 = 0;
                                                                                                                                                                    offsidePos$$49 = matchValue$$17[1].head.fields[0];
                                                                                                                                                                  } else {
                                                                                                                                                                    $target$$78 = 1;
                                                                                                                                                                  }
                                                                                                                                                                } else {
                                                                                                                                                                  $target$$78 = 1;
                                                                                                                                                                }
                                                                                                                                                              } else {
                                                                                                                                                                $target$$78 = 1;
                                                                                                                                                              }

                                                                                                                                                              switch ($target$$78) {
                                                                                                                                                                case 0:
                                                                                                                                                                  {
                                                                                                                                                                    LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                                                                    return reprocess();
                                                                                                                                                                  }

                                                                                                                                                                case 1:
                                                                                                                                                                  {
                                                                                                                                                                    var $target$$79, offsidePos$$51;

                                                                                                                                                                    if (matchValue$$17[1].tail != null) {
                                                                                                                                                                      if (matchValue$$17[1].head.tag === 2) {
                                                                                                                                                                        if (offsidePos$$50 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : (isTryBlockContinuator(token$$36) ? tokenStartCol + 1 : tokenStartCol) <= (0, _primLexing.Position$$get_Column)(offsidePos$$50)) {
                                                                                                                                                                          $target$$79 = 0;
                                                                                                                                                                          offsidePos$$51 = matchValue$$17[1].head.fields[0];
                                                                                                                                                                        } else {
                                                                                                                                                                          $target$$79 = 1;
                                                                                                                                                                        }
                                                                                                                                                                      } else {
                                                                                                                                                                        $target$$79 = 1;
                                                                                                                                                                      }
                                                                                                                                                                    } else {
                                                                                                                                                                      $target$$79 = 1;
                                                                                                                                                                    }

                                                                                                                                                                    switch ($target$$79) {
                                                                                                                                                                      case 0:
                                                                                                                                                                        {
                                                                                                                                                                          if (debug) {
                                                                                                                                                                            (0, _ildiag.dprintf)((0, _String.printf)("offside from CtxtTry\n"));
                                                                                                                                                                          }

                                                                                                                                                                          LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                                                                          return reprocess();
                                                                                                                                                                        }

                                                                                                                                                                      case 1:
                                                                                                                                                                        {
                                                                                                                                                                          var $target$$80, offsidePos$$53;

                                                                                                                                                                          if (matchValue$$17[1].tail != null) {
                                                                                                                                                                            if (matchValue$$17[1].head.tag === 12) {
                                                                                                                                                                              if (offsidePos$$52 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : (isThenBlockContinuator(token$$36) ? tokenStartCol + 1 : tokenStartCol) <= (0, _primLexing.Position$$get_Column)(offsidePos$$52)) {
                                                                                                                                                                                $target$$80 = 0;
                                                                                                                                                                                offsidePos$$53 = matchValue$$17[1].head.fields[0];
                                                                                                                                                                              } else {
                                                                                                                                                                                $target$$80 = 1;
                                                                                                                                                                              }
                                                                                                                                                                            } else {
                                                                                                                                                                              $target$$80 = 1;
                                                                                                                                                                            }
                                                                                                                                                                          } else {
                                                                                                                                                                            $target$$80 = 1;
                                                                                                                                                                          }

                                                                                                                                                                          switch ($target$$80) {
                                                                                                                                                                            case 0:
                                                                                                                                                                              {
                                                                                                                                                                                if (debug) {
                                                                                                                                                                                  (0, _ildiag.dprintf)((0, _String.printf)("offside from CtxtThen, popping\n"));
                                                                                                                                                                                }

                                                                                                                                                                                LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                                                                                return reprocess();
                                                                                                                                                                              }

                                                                                                                                                                            case 1:
                                                                                                                                                                              {
                                                                                                                                                                                var $target$$81, offsidePos$$55;

                                                                                                                                                                                if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                  if (matchValue$$17[1].head.tag === 13) {
                                                                                                                                                                                    if (offsidePos$$54 = matchValue$$17[1].head.fields[0], isSemiSemi ? true : tokenStartCol <= (0, _primLexing.Position$$get_Column)(offsidePos$$54)) {
                                                                                                                                                                                      $target$$81 = 0;
                                                                                                                                                                                      offsidePos$$55 = matchValue$$17[1].head.fields[0];
                                                                                                                                                                                    } else {
                                                                                                                                                                                      $target$$81 = 1;
                                                                                                                                                                                    }
                                                                                                                                                                                  } else {
                                                                                                                                                                                    $target$$81 = 1;
                                                                                                                                                                                  }
                                                                                                                                                                                } else {
                                                                                                                                                                                  $target$$81 = 1;
                                                                                                                                                                                }

                                                                                                                                                                                switch ($target$$81) {
                                                                                                                                                                                  case 0:
                                                                                                                                                                                    {
                                                                                                                                                                                      if (debug) {
                                                                                                                                                                                        (0, _ildiag.dprintf)((0, _String.printf)("offside from CtxtElse, popping\n"));
                                                                                                                                                                                      }

                                                                                                                                                                                      LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                                                                                      return reprocess();
                                                                                                                                                                                    }

                                                                                                                                                                                  case 1:
                                                                                                                                                                                    {
                                                                                                                                                                                      var $target$$82, leadingBar$$1, offsidePos$$57;

                                                                                                                                                                                      if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                        if (matchValue$$17[1].head.tag === 26) {
                                                                                                                                                                                          if (offsidePos$$56 = matchValue$$17[1].head.fields[1], (leadingBar = matchValue$$17[1].head.fields[0], isSemiSemi ? true : token$$36.tag === 57 ? (cond1 = tokenStartCol + (leadingBar ? 0 : 2) < (0, _primLexing.Position$$get_Column)(offsidePos$$56), (cond2 = tokenStartCol + (leadingBar ? 1 : 2) < (0, _primLexing.Position$$get_Column)(offsidePos$$56), (cond1 !== cond2 ? (0, _ErrorLogger.errorR)(new _lexhelp.IndentationProblem((0, _FSComp.SR$$$lexfltSeparatorTokensOfPatternMatchMisaligned)(), (0, _ast.mkSynRange)(LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$23, tokenTup$$18), (copyOfStruct$$15 = TokenTup$$get_LexbufState(tokenTup$$18), LexbufState$$get_EndPos(copyOfStruct$$15))))) : null, cond1))) : token$$36.tag === 142 ? tokenStartCol + (leadingBar ? -1 : 1) < (0, _primLexing.Position$$get_Column)(offsidePos$$56) : tokenStartCol + (leadingBar ? -1 : 1) < (0, _primLexing.Position$$get_Column)(offsidePos$$56))) {
                                                                                                                                                                                            $target$$82 = 0;
                                                                                                                                                                                            leadingBar$$1 = matchValue$$17[1].head.fields[0];
                                                                                                                                                                                            offsidePos$$57 = matchValue$$17[1].head.fields[1];
                                                                                                                                                                                          } else {
                                                                                                                                                                                            $target$$82 = 1;
                                                                                                                                                                                          }
                                                                                                                                                                                        } else {
                                                                                                                                                                                          $target$$82 = 1;
                                                                                                                                                                                        }
                                                                                                                                                                                      } else {
                                                                                                                                                                                        $target$$82 = 1;
                                                                                                                                                                                      }

                                                                                                                                                                                      switch ($target$$82) {
                                                                                                                                                                                        case 0:
                                                                                                                                                                                          {
                                                                                                                                                                                            if (debug) {
                                                                                                                                                                                              (0, _ildiag.dprintf)((0, _String.printf)("offside from WITH, tokenStartCol = %d, offsidePos = %a, delaying token, returning OEND\n"))(tokenStartCol)(outputPos)(offsidePos$$57);
                                                                                                                                                                                            }

                                                                                                                                                                                            LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                                                                                            return insertToken(new _pars.token(20, "OEND"));
                                                                                                                                                                                          }

                                                                                                                                                                                        case 1:
                                                                                                                                                                                          {
                                                                                                                                                                                            var $target$$83, ctxt$$12, isUse$$1;

                                                                                                                                                                                            if (matchValue$$17[0].tag === 150) {
                                                                                                                                                                                              if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                $target$$83 = 0;
                                                                                                                                                                                              } else {
                                                                                                                                                                                                $target$$83 = 4;
                                                                                                                                                                                              }
                                                                                                                                                                                            } else if (matchValue$$17[0].tag === 149) {
                                                                                                                                                                                              if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                $target$$83 = 1;
                                                                                                                                                                                              } else {
                                                                                                                                                                                                $target$$83 = 4;
                                                                                                                                                                                              }
                                                                                                                                                                                            } else if (matchValue$$17[0].tag === 121) {
                                                                                                                                                                                              if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                $target$$83 = 2;
                                                                                                                                                                                              } else {
                                                                                                                                                                                                $target$$83 = 4;
                                                                                                                                                                                              }
                                                                                                                                                                                            } else if (matchValue$$17[0].tag === 161) {
                                                                                                                                                                                              if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                if (isUse = matchValue$$17[0].fields[0], (ctxt$$11 = matchValue$$17[1].head, ctxt$$11.tag === 19 ? true : false)) {
                                                                                                                                                                                                  $target$$83 = 3;
                                                                                                                                                                                                  ctxt$$12 = matchValue$$17[1].head;
                                                                                                                                                                                                  isUse$$1 = matchValue$$17[0].fields[0];
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  $target$$83 = 4;
                                                                                                                                                                                                }
                                                                                                                                                                                              } else {
                                                                                                                                                                                                $target$$83 = 4;
                                                                                                                                                                                              }
                                                                                                                                                                                            } else {
                                                                                                                                                                                              $target$$83 = 4;
                                                                                                                                                                                            }

                                                                                                                                                                                            switch ($target$$83) {
                                                                                                                                                                                              case 0:
                                                                                                                                                                                                {
                                                                                                                                                                                                  if (debug) {
                                                                                                                                                                                                    (0, _ildiag.dprintf)((0, _String.printf)("NAMESPACE: entering CtxtNamespaceHead, awaiting end of long identifier to push CtxtSeqBlock\n"));
                                                                                                                                                                                                  }

                                                                                                                                                                                                  LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(17, "CtxtNamespaceHead", tokenStartPos, token$$36));
                                                                                                                                                                                                  return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                }

                                                                                                                                                                                              case 1:
                                                                                                                                                                                                {
                                                                                                                                                                                                  insertComingSoonTokens$$1(["MODULE", new _pars.token(38, "MODULE_COMING_SOON"), new _pars.token(39, "MODULE_IS_HERE")]);

                                                                                                                                                                                                  if (debug) {
                                                                                                                                                                                                    (0, _ildiag.dprintf)((0, _String.printf)("MODULE: entering CtxtModuleHead, awaiting EQUALS to go to CtxtSeqBlock (%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                  }

                                                                                                                                                                                                  LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(18, "CtxtModuleHead", tokenStartPos, token$$36));
                                                                                                                                                                                                  this$$$23 = this$$$23;
                                                                                                                                                                                                  useBlockRule$$1 = useBlockRule$$1;
                                                                                                                                                                                                  continue LexFilterImpl$$hwTokenFetch$$Z1FBCCD16;
                                                                                                                                                                                                }

                                                                                                                                                                                              case 2:
                                                                                                                                                                                                {
                                                                                                                                                                                                  if (debug) {
                                                                                                                                                                                                    (0, _ildiag.dprintf)((0, _String.printf)("EXCEPTION: entering CtxtException(%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                  }

                                                                                                                                                                                                  LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(23, "CtxtException", tokenStartPos));
                                                                                                                                                                                                  return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                }

                                                                                                                                                                                              case 3:
                                                                                                                                                                                                {
                                                                                                                                                                                                  if (debug) {
                                                                                                                                                                                                    (0, _ildiag.dprintf)((0, _String.printf)("LET: entering CtxtLetDecl(), awaiting EQUALS to go to CtxtSeqBlock (%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                  }

                                                                                                                                                                                                  let startPos$$2;

                                                                                                                                                                                                  if (ctxt$$12.tag === 19) {
                                                                                                                                                                                                    const startPos$$1 = ctxt$$12.fields[0];
                                                                                                                                                                                                    startPos$$2 = startPos$$1;
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    startPos$$2 = tokenStartPos;
                                                                                                                                                                                                  }

                                                                                                                                                                                                  LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                                                                                                  LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(0, "CtxtLetDecl", true, startPos$$2));
                                                                                                                                                                                                  return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, new _pars.token(32, "OLET", isUse$$1));
                                                                                                                                                                                                }

                                                                                                                                                                                              case 4:
                                                                                                                                                                                                {
                                                                                                                                                                                                  var $target$$84, ctxt$$13, isUse$$2, b$$2, ctxt$$14, ctxtStack$$7;

                                                                                                                                                                                                  if (matchValue$$17[0].tag === 161) {
                                                                                                                                                                                                    if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                      $target$$84 = 0;
                                                                                                                                                                                                      ctxt$$13 = matchValue$$17[1].head;
                                                                                                                                                                                                      isUse$$2 = matchValue$$17[0].fields[0];
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      $target$$84 = 3;
                                                                                                                                                                                                    }
                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 158) {
                                                                                                                                                                                                    if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                      $target$$84 = 1;
                                                                                                                                                                                                      b$$2 = matchValue$$17[0].fields[0];
                                                                                                                                                                                                      ctxt$$14 = matchValue$$17[1].head;
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      $target$$84 = 3;
                                                                                                                                                                                                    }
                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 109) {
                                                                                                                                                                                                    if (thereIsACtxtMemberBodyOnTheStackAndWeShouldPopStackForUpcomingMember(matchValue$$17[1])) {
                                                                                                                                                                                                      $target$$84 = 2;
                                                                                                                                                                                                      ctxtStack$$7 = matchValue$$17[1];
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      $target$$84 = 3;
                                                                                                                                                                                                    }
                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 46) {
                                                                                                                                                                                                    if (thereIsACtxtMemberBodyOnTheStackAndWeShouldPopStackForUpcomingMember(matchValue$$17[1])) {
                                                                                                                                                                                                      $target$$84 = 2;
                                                                                                                                                                                                      ctxtStack$$7 = matchValue$$17[1];
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      $target$$84 = 3;
                                                                                                                                                                                                    }
                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 49) {
                                                                                                                                                                                                    if (thereIsACtxtMemberBodyOnTheStackAndWeShouldPopStackForUpcomingMember(matchValue$$17[1])) {
                                                                                                                                                                                                      $target$$84 = 2;
                                                                                                                                                                                                      ctxtStack$$7 = matchValue$$17[1];
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      $target$$84 = 3;
                                                                                                                                                                                                    }
                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 47) {
                                                                                                                                                                                                    if (thereIsACtxtMemberBodyOnTheStackAndWeShouldPopStackForUpcomingMember(matchValue$$17[1])) {
                                                                                                                                                                                                      $target$$84 = 2;
                                                                                                                                                                                                      ctxtStack$$7 = matchValue$$17[1];
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      $target$$84 = 3;
                                                                                                                                                                                                    }
                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 50) {
                                                                                                                                                                                                    if (thereIsACtxtMemberBodyOnTheStackAndWeShouldPopStackForUpcomingMember(matchValue$$17[1])) {
                                                                                                                                                                                                      $target$$84 = 2;
                                                                                                                                                                                                      ctxtStack$$7 = matchValue$$17[1];
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      $target$$84 = 3;
                                                                                                                                                                                                    }
                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 51) {
                                                                                                                                                                                                    if (thereIsACtxtMemberBodyOnTheStackAndWeShouldPopStackForUpcomingMember(matchValue$$17[1])) {
                                                                                                                                                                                                      $target$$84 = 2;
                                                                                                                                                                                                      ctxtStack$$7 = matchValue$$17[1];
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      $target$$84 = 3;
                                                                                                                                                                                                    }
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    $target$$84 = 3;
                                                                                                                                                                                                  }

                                                                                                                                                                                                  switch ($target$$84) {
                                                                                                                                                                                                    case 0:
                                                                                                                                                                                                      {
                                                                                                                                                                                                        const blockLet$$1 = ctxt$$13.tag === 25 ? true : ctxt$$13.tag === 26 ? true : false;

                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("LET: entering CtxtLetDecl(blockLet=%b), awaiting EQUALS to go to CtxtSeqBlock (%a)\n"))(blockLet$$1)(outputPos)(tokenStartPos);
                                                                                                                                                                                                        }

                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(0, "CtxtLetDecl", blockLet$$1, tokenStartPos));
                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, blockLet$$1 ? new _pars.token(32, "OLET", isUse$$2) : token$$36);
                                                                                                                                                                                                      }

                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                      {
                                                                                                                                                                                                        const blockLet$$2 = ctxt$$14.tag === 25 ? true : false;

                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("LET: entering CtxtLetDecl(blockLet=%b), awaiting EQUALS to go to CtxtSeqBlock (%a)\n"))(blockLet$$2)(outputPos)(tokenStartPos);
                                                                                                                                                                                                        }

                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(0, "CtxtLetDecl", blockLet$$2, tokenStartPos));
                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, blockLet$$2 ? new _pars.token(31, "OBINDER", b$$2) : token$$36);
                                                                                                                                                                                                      }

                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                      {
                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("STATIC/MEMBER/OVERRIDE/DEFAULT: already inside CtxtMemberBody, popping all that context before starting next member...\n"));
                                                                                                                                                                                                        }

                                                                                                                                                                                                        LexFilterImpl$$delayTokenNoProcessing$$24788697(this$$$23, tokenTup$$18);

                                                                                                                                                                                                        while ((0, _List.head)(this$$$23.offsideStack).tag === 20 ? false : true) {
                                                                                                                                                                                                          const matchValue$$25 = endTokenForACtxt((0, _List.head)(this$$$23.offsideStack));

                                                                                                                                                                                                          if (matchValue$$25 != null) {
                                                                                                                                                                                                            const tok$$14 = matchValue$$25;
                                                                                                                                                                                                            LexFilterImpl$$popCtxt(this$$$23);

                                                                                                                                                                                                            if (debug) {
                                                                                                                                                                                                              (0, _ildiag.dprintf)((0, _String.printf)("--> inserting %+A\n"))(tok$$14);
                                                                                                                                                                                                            }

                                                                                                                                                                                                            LexFilterImpl$$delayTokenNoProcessing$$24788697(this$$$23, TokenTup$$UseLocation$$56122D30(tokenTup$$18, tok$$14));
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            LexFilterImpl$$popCtxt(this$$$23);
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }

                                                                                                                                                                                                        LexFilterImpl$$popCtxt(this$$$23);

                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("...STATIC/MEMBER/OVERRIDE/DEFAULT: finished popping all that context\n"));
                                                                                                                                                                                                        }

                                                                                                                                                                                                        this$$$23 = this$$$23;
                                                                                                                                                                                                        useBlockRule$$1 = useBlockRule$$1;
                                                                                                                                                                                                        continue LexFilterImpl$$hwTokenFetch$$Z1FBCCD16;
                                                                                                                                                                                                      }

                                                                                                                                                                                                    case 3:
                                                                                                                                                                                                      {
                                                                                                                                                                                                        var $target$$85, ctxt$$21;

                                                                                                                                                                                                        if (matchValue$$17[0].tag === 109) {
                                                                                                                                                                                                          if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                            if (ctxt$$15 = matchValue$$17[1].head, ctxt$$15.tag === 19 ? false : true) {
                                                                                                                                                                                                              $target$$85 = 0;
                                                                                                                                                                                                              ctxt$$21 = matchValue$$17[1].head;
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              $target$$85 = 1;
                                                                                                                                                                                                            }
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            $target$$85 = 1;
                                                                                                                                                                                                          }
                                                                                                                                                                                                        } else if (matchValue$$17[0].tag === 46) {
                                                                                                                                                                                                          if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                            if (ctxt$$16 = matchValue$$17[1].head, ctxt$$16.tag === 19 ? false : true) {
                                                                                                                                                                                                              $target$$85 = 0;
                                                                                                                                                                                                              ctxt$$21 = matchValue$$17[1].head;
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              $target$$85 = 1;
                                                                                                                                                                                                            }
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            $target$$85 = 1;
                                                                                                                                                                                                          }
                                                                                                                                                                                                        } else if (matchValue$$17[0].tag === 49) {
                                                                                                                                                                                                          if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                            if (ctxt$$17 = matchValue$$17[1].head, ctxt$$17.tag === 19 ? false : true) {
                                                                                                                                                                                                              $target$$85 = 0;
                                                                                                                                                                                                              ctxt$$21 = matchValue$$17[1].head;
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              $target$$85 = 1;
                                                                                                                                                                                                            }
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            $target$$85 = 1;
                                                                                                                                                                                                          }
                                                                                                                                                                                                        } else if (matchValue$$17[0].tag === 47) {
                                                                                                                                                                                                          if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                            if (ctxt$$18 = matchValue$$17[1].head, ctxt$$18.tag === 19 ? false : true) {
                                                                                                                                                                                                              $target$$85 = 0;
                                                                                                                                                                                                              ctxt$$21 = matchValue$$17[1].head;
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              $target$$85 = 1;
                                                                                                                                                                                                            }
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            $target$$85 = 1;
                                                                                                                                                                                                          }
                                                                                                                                                                                                        } else if (matchValue$$17[0].tag === 50) {
                                                                                                                                                                                                          if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                            if (ctxt$$19 = matchValue$$17[1].head, ctxt$$19.tag === 19 ? false : true) {
                                                                                                                                                                                                              $target$$85 = 0;
                                                                                                                                                                                                              ctxt$$21 = matchValue$$17[1].head;
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              $target$$85 = 1;
                                                                                                                                                                                                            }
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            $target$$85 = 1;
                                                                                                                                                                                                          }
                                                                                                                                                                                                        } else if (matchValue$$17[0].tag === 51) {
                                                                                                                                                                                                          if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                            if (ctxt$$20 = matchValue$$17[1].head, ctxt$$20.tag === 19 ? false : true) {
                                                                                                                                                                                                              $target$$85 = 0;
                                                                                                                                                                                                              ctxt$$21 = matchValue$$17[1].head;
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              $target$$85 = 1;
                                                                                                                                                                                                            }
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            $target$$85 = 1;
                                                                                                                                                                                                          }
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          $target$$85 = 1;
                                                                                                                                                                                                        }

                                                                                                                                                                                                        switch ($target$$85) {
                                                                                                                                                                                                          case 0:
                                                                                                                                                                                                            {
                                                                                                                                                                                                              if (debug) {
                                                                                                                                                                                                                (0, _ildiag.dprintf)((0, _String.printf)("STATIC/MEMBER/OVERRIDE/DEFAULT: entering CtxtMemberHead, awaiting EQUALS to go to CtxtSeqBlock (%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                              }

                                                                                                                                                                                                              LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(19, "CtxtMemberHead", tokenStartPos));
                                                                                                                                                                                                              return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                            }

                                                                                                                                                                                                          case 1:
                                                                                                                                                                                                            {
                                                                                                                                                                                                              var $target$$86, _ctxt$$3;

                                                                                                                                                                                                              if (matchValue$$17[0].tag === 42) {
                                                                                                                                                                                                                if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                                  if (_ctxt = matchValue$$17[1].head, LexFilterImpl$$peekNextToken(this$$$23).tag === 119 ? true : false) {
                                                                                                                                                                                                                    $target$$86 = 0;
                                                                                                                                                                                                                    _ctxt$$3 = matchValue$$17[1].head;
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    $target$$86 = 1;
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  $target$$86 = 1;
                                                                                                                                                                                                                }
                                                                                                                                                                                                              } else if (matchValue$$17[0].tag === 43) {
                                                                                                                                                                                                                if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                                  if (_ctxt$$1 = matchValue$$17[1].head, LexFilterImpl$$peekNextToken(this$$$23).tag === 119 ? true : false) {
                                                                                                                                                                                                                    $target$$86 = 0;
                                                                                                                                                                                                                    _ctxt$$3 = matchValue$$17[1].head;
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    $target$$86 = 1;
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  $target$$86 = 1;
                                                                                                                                                                                                                }
                                                                                                                                                                                                              } else if (matchValue$$17[0].tag === 44) {
                                                                                                                                                                                                                if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                                  if (_ctxt$$2 = matchValue$$17[1].head, LexFilterImpl$$peekNextToken(this$$$23).tag === 119 ? true : false) {
                                                                                                                                                                                                                    $target$$86 = 0;
                                                                                                                                                                                                                    _ctxt$$3 = matchValue$$17[1].head;
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    $target$$86 = 1;
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  $target$$86 = 1;
                                                                                                                                                                                                                }
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                $target$$86 = 1;
                                                                                                                                                                                                              }

                                                                                                                                                                                                              switch ($target$$86) {
                                                                                                                                                                                                                case 0:
                                                                                                                                                                                                                  {
                                                                                                                                                                                                                    if (debug) {
                                                                                                                                                                                                                      (0, _ildiag.dprintf)((0, _String.printf)("PUBLIC/PRIVATE/INTERNAL NEW: entering CtxtMemberHead, awaiting EQUALS to go to CtxtSeqBlock (%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                    LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(19, "CtxtMemberHead", tokenStartPos));
                                                                                                                                                                                                                    return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                  }

                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                  {
                                                                                                                                                                                                                    var $target$$87, ctxt$$23;

                                                                                                                                                                                                                    if (matchValue$$17[0].tag === 119) {
                                                                                                                                                                                                                      if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                                        if (ctxt$$22 = matchValue$$17[1].head, (LexFilterImpl$$peekNextToken(this$$$23).tag === 92 ? true : false) ? ctxt$$22.tag === 19 ? false : true : false) {
                                                                                                                                                                                                                          $target$$87 = 0;
                                                                                                                                                                                                                          ctxt$$23 = matchValue$$17[1].head;
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          $target$$87 = 1;
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        $target$$87 = 1;
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      $target$$87 = 1;
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                    switch ($target$$87) {
                                                                                                                                                                                                                      case 0:
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                          if (debug) {
                                                                                                                                                                                                                            (0, _ildiag.dprintf)((0, _String.printf)("NEW: entering CtxtMemberHead, awaiting EQUALS to go to CtxtSeqBlock (%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                          }

                                                                                                                                                                                                                          LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(19, "CtxtMemberHead", tokenStartPos));
                                                                                                                                                                                                                          return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                        }

                                                                                                                                                                                                                      case 1:
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                          var $target$$88, offsidePos$$58, ctxts$$1;

                                                                                                                                                                                                                          if (matchValue$$17[0].tag === 70) {
                                                                                                                                                                                                                            if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                                              if (matchValue$$17[1].head.tag === 0) {
                                                                                                                                                                                                                                $target$$88 = 0;
                                                                                                                                                                                                                              } else if (matchValue$$17[1].head.tag === 16) {
                                                                                                                                                                                                                                $target$$88 = 1;
                                                                                                                                                                                                                              } else if (matchValue$$17[1].head.tag === 5) {
                                                                                                                                                                                                                                $target$$88 = 3;
                                                                                                                                                                                                                              } else if (matchValue$$17[1].head.tag === 11) {
                                                                                                                                                                                                                                if (matchValue$$17[1].head.fields[1]) {
                                                                                                                                                                                                                                  if (matchValue$$17[1].tail.tail != null) {
                                                                                                                                                                                                                                    if (matchValue$$17[1].tail.head.tag === 25) {
                                                                                                                                                                                                                                      if (matchValue$$17[1].tail.tail.tail != null) {
                                                                                                                                                                                                                                        if (matchValue$$17[1].tail.tail.head.tag === 5) {
                                                                                                                                                                                                                                          $target$$88 = 3;
                                                                                                                                                                                                                                        } else if (matchValue$$17[1].tail.tail.head.tag === 24) {
                                                                                                                                                                                                                                          if (matchValue$$17[1].tail.tail.head.fields[0].tag === 74) {
                                                                                                                                                                                                                                            $target$$88 = 3;
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            $target$$88 = 7;
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          $target$$88 = 7;
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        $target$$88 = 7;
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      $target$$88 = 7;
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    $target$$88 = 7;
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  $target$$88 = 7;
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              } else if (matchValue$$17[1].head.tag === 19) {
                                                                                                                                                                                                                                $target$$88 = 4;
                                                                                                                                                                                                                                offsidePos$$58 = matchValue$$17[1].head.fields[0];
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                $target$$88 = 7;
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              $target$$88 = 7;
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          } else if (matchValue$$17[0].tag === 114) {
                                                                                                                                                                                                                            $target$$88 = 2;
                                                                                                                                                                                                                          } else if (matchValue$$17[0].tag === 133) {
                                                                                                                                                                                                                            $target$$88 = 2;
                                                                                                                                                                                                                          } else if (matchValue$$17[0].tag === 136) {
                                                                                                                                                                                                                            $target$$88 = 5;
                                                                                                                                                                                                                          } else if (matchValue$$17[0].tag === 92) {
                                                                                                                                                                                                                            $target$$88 = 5;
                                                                                                                                                                                                                          } else if (matchValue$$17[0].tag === 56) {
                                                                                                                                                                                                                            $target$$88 = 5;
                                                                                                                                                                                                                          } else if (matchValue$$17[0].tag === 74) {
                                                                                                                                                                                                                            $target$$88 = 5;
                                                                                                                                                                                                                          } else if (matchValue$$17[0].tag === 71) {
                                                                                                                                                                                                                            $target$$88 = 5;
                                                                                                                                                                                                                          } else if (matchValue$$17[0].tag === 72) {
                                                                                                                                                                                                                            $target$$88 = 5;
                                                                                                                                                                                                                          } else if (matchValue$$17[0].tag === 154) {
                                                                                                                                                                                                                            $target$$88 = 5;
                                                                                                                                                                                                                          } else if (matchValue$$17[0].tag === 159) {
                                                                                                                                                                                                                            if (matchValue$$17[0].fields[0]) {
                                                                                                                                                                                                                              $target$$88 = 5;
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              $target$$88 = 7;
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          } else if (matchValue$$17[0].tag === 55) {
                                                                                                                                                                                                                            if (matchValue$$17[1].tail != null ? matchValue$$17[1].head.tag === 25 ? matchValue$$17[1].tail.tail != null ? matchValue$$17[1].tail.head.tag === 21 ? true : matchValue$$17[1].tail.head.tag === 16 ? true : false : false : false : false) {
                                                                                                                                                                                                                              $target$$88 = 6;
                                                                                                                                                                                                                              ctxts$$1 = matchValue$$17[1];
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              $target$$88 = 7;
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            $target$$88 = 7;
                                                                                                                                                                                                                          }

                                                                                                                                                                                                                          switch ($target$$88) {
                                                                                                                                                                                                                            case 0:
                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                if (debug) {
                                                                                                                                                                                                                                  (0, _ildiag.dprintf)((0, _String.printf)("CtxtLetDecl: EQUALS, pushing CtxtSeqBlock\n"));
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                              }

                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                if (debug) {
                                                                                                                                                                                                                                  (0, _ildiag.dprintf)((0, _String.printf)("CtxType: EQUALS, pushing CtxtSeqBlock\n"));
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                              }

                                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                if (isControlFlowOrNotSameLine()) {
                                                                                                                                                                                                                                  if (debug) {
                                                                                                                                                                                                                                    (0, _ildiag.dprintf)((0, _String.printf)("LAZY/ASSERT, pushing CtxtSeqBlock\n"));
                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                  LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                  return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36.tag === 114 ? new _pars.token(115, "OLAZY") : new _pars.token(134, "OASSERT"));
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }

                                                                                                                                                                                                                            case 3:
                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                if (debug) {
                                                                                                                                                                                                                                  (0, _ildiag.dprintf)((0, _String.printf)("CtxtLetDecl/CtxtWithAsLet: EQUALS, pushing CtxtSeqBlock\n"));
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                if (isControlFlowOrNotSameLine()) {
                                                                                                                                                                                                                                  LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, false, new AddBlockEnd(1, "NoAddBlockEnd"));
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                              }

                                                                                                                                                                                                                            case 4:
                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                if (debug) {
                                                                                                                                                                                                                                  (0, _ildiag.dprintf)((0, _String.printf)("CtxtMemberHead: EQUALS, pushing CtxtSeqBlock\n"));
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                LexFilterImpl$$replaceCtxt(this$$$23, tokenTup$$18, new Context(20, "CtxtMemberBody", offsidePos$$58));
                                                                                                                                                                                                                                LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                              }

                                                                                                                                                                                                                            case 5:
                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                if (debug) {
                                                                                                                                                                                                                                  (0, _ildiag.dprintf)((0, _String.printf)("LPAREN etc., pushes CtxtParen, pushing CtxtSeqBlock, tokenStartPos = %a\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(24, "CtxtParen", token$$36, tokenStartPos));
                                                                                                                                                                                                                                LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, false, new AddBlockEnd(1, "NoAddBlockEnd"));
                                                                                                                                                                                                                                return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                              }

                                                                                                                                                                                                                            case 6:
                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                if (debug) {
                                                                                                                                                                                                                                  (0, _ildiag.dprintf)((0, _String.printf)("LPAREN etc., pushes CtxtParen, pushing CtxtSeqBlock, tokenStartPos = %a\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(24, "CtxtParen", token$$36, tokenStartPos));
                                                                                                                                                                                                                                LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, false, new AddBlockEnd(1, "NoAddBlockEnd"));
                                                                                                                                                                                                                                return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                              }

                                                                                                                                                                                                                            case 7:
                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                var $target$$89;

                                                                                                                                                                                                                                if (matchValue$$17[0].tag === 98) {
                                                                                                                                                                                                                                  if (matchValue$$17[1].tail != null ? matchValue$$17[1].head.tag === 9 ? true : matchValue$$17[1].head.tag === 8 ? true : matchValue$$17[1].head.tag === 10 ? true : matchValue$$17[1].head.tag === 26 ? true : matchValue$$17[1].head.tag === 3 ? true : matchValue$$17[1].head.tag === 25 ? matchValue$$17[1].tail.tail != null ? matchValue$$17[1].tail.head.tag === 24 ? matchValue$$17[1].tail.head.fields[0].tag === 71 ? true : matchValue$$17[1].tail.head.fields[0].tag === 74 ? true : matchValue$$17[1].tail.head.fields[0].tag === 72 ? true : false : matchValue$$17[1].tail.head.tag === 14 ? true : matchValue$$17[1].tail.head.tag === 9 ? true : matchValue$$17[1].tail.head.tag === 8 ? true : matchValue$$17[1].tail.head.tag === 10 ? true : matchValue$$17[1].tail.head.tag === 26 ? true : matchValue$$17[1].tail.head.tag === 2 ? true : matchValue$$17[1].tail.head.tag === 12 ? true : matchValue$$17[1].tail.head.tag === 13 ? true : false : false : false : false) {
                                                                                                                                                                                                                                    $target$$89 = 0;
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    $target$$89 = 1;
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  $target$$89 = 1;
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                switch ($target$$89) {
                                                                                                                                                                                                                                  case 0:
                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                      if (debug) {
                                                                                                                                                                                                                                        (0, _ildiag.dprintf)((0, _String.printf)("RARROW, pushing CtxtSeqBlock, tokenStartPos = %a\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                      LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, false, new AddBlockEnd(2, "AddOneSidedBlockEnd"));
                                                                                                                                                                                                                                      return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                  case 1:
                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                      var $target$$90;

                                                                                                                                                                                                                                      if (matchValue$$17[0].tag === 69) {
                                                                                                                                                                                                                                        if (isControlFlowOrNotSameLine()) {
                                                                                                                                                                                                                                          $target$$90 = 0;
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          $target$$90 = 1;
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        $target$$90 = 1;
                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                      switch ($target$$90) {
                                                                                                                                                                                                                                        case 0:
                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                            if (debug) {
                                                                                                                                                                                                                                              (0, _ildiag.dprintf)((0, _String.printf)("LARROW, pushing CtxtSeqBlock, tokenStartPos = %a\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                            LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                            return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                            var $target$$91;

                                                                                                                                                                                                                                            if (matchValue$$17[0].tag === 137) {
                                                                                                                                                                                                                                              $target$$91 = 0;
                                                                                                                                                                                                                                            } else if (matchValue$$17[0].tag === 130) {
                                                                                                                                                                                                                                              $target$$91 = 0;
                                                                                                                                                                                                                                            } else if ((isInfix(token$$36) ? !isSameLine() : false) ? matchValue$$17[1].tail != null ? matchValue$$17[1].head.tag === 26 ? false : true : true : false) {
                                                                                                                                                                                                                                              $target$$91 = 1;
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              $target$$91 = 2;
                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                            switch ($target$$91) {
                                                                                                                                                                                                                                              case 0:
                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                  if (debug) {
                                                                                                                                                                                                                                                    (0, _ildiag.dprintf)((0, _String.printf)("DO: pushing CtxtSeqBlock, tokenStartPos = %a\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                  LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(14, "CtxtDo", tokenStartPos));
                                                                                                                                                                                                                                                  LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                                  return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36.tag === 137 ? new _pars.token(30, "ODO") : token$$36.tag === 130 ? new _pars.token(29, "ODO_BANG") : (() => {
                                                                                                                                                                                                                                                    throw new Error("unreachable");
                                                                                                                                                                                                                                                  })());
                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                              case 1:
                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                  if (debug) {
                                                                                                                                                                                                                                                    (0, _ildiag.dprintf)((0, _String.printf)("(Infix etc.), pushing CtxtSeqBlock, tokenStartPos = %a\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                  LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, false, new AddBlockEnd(1, "NoAddBlockEnd"));
                                                                                                                                                                                                                                                  return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                              case 2:
                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                  var $target$$92, limCtxt, stack$$11;

                                                                                                                                                                                                                                                  if (matchValue$$17[0].tag === 87) {
                                                                                                                                                                                                                                                    if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                                                                      if (matchValue$$17[1].head.tag === 2) {
                                                                                                                                                                                                                                                        $target$$92 = 0;
                                                                                                                                                                                                                                                      } else if (matchValue$$17[1].head.tag === 7) {
                                                                                                                                                                                                                                                        $target$$92 = 0;
                                                                                                                                                                                                                                                      } else if (matchValue$$17[1].head.tag === 23) {
                                                                                                                                                                                                                                                        $target$$92 = 2;
                                                                                                                                                                                                                                                        limCtxt = matchValue$$17[1].head;
                                                                                                                                                                                                                                                      } else if (matchValue$$17[1].head.tag === 16) {
                                                                                                                                                                                                                                                        $target$$92 = 2;
                                                                                                                                                                                                                                                        limCtxt = matchValue$$17[1].head;
                                                                                                                                                                                                                                                      } else if (matchValue$$17[1].head.tag === 19) {
                                                                                                                                                                                                                                                        $target$$92 = 2;
                                                                                                                                                                                                                                                        limCtxt = matchValue$$17[1].head;
                                                                                                                                                                                                                                                      } else if (matchValue$$17[1].head.tag === 15) {
                                                                                                                                                                                                                                                        $target$$92 = 2;
                                                                                                                                                                                                                                                        limCtxt = matchValue$$17[1].head;
                                                                                                                                                                                                                                                      } else if (matchValue$$17[1].head.tag === 20) {
                                                                                                                                                                                                                                                        $target$$92 = 2;
                                                                                                                                                                                                                                                        limCtxt = matchValue$$17[1].head;
                                                                                                                                                                                                                                                      } else if (matchValue$$17[1].head.tag === 25) {
                                                                                                                                                                                                                                                        if (matchValue$$17[1].tail.tail != null) {
                                                                                                                                                                                                                                                          if (matchValue$$17[1].tail.head.tag === 24) {
                                                                                                                                                                                                                                                            if (matchValue$$17[1].tail.head.fields[0].tag === 74) {
                                                                                                                                                                                                                                                              $target$$92 = 2;
                                                                                                                                                                                                                                                              limCtxt = matchValue$$17[1].head;
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              $target$$92 = 3;
                                                                                                                                                                                                                                                              stack$$11 = matchValue$$17[1];
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            $target$$92 = 3;
                                                                                                                                                                                                                                                            stack$$11 = matchValue$$17[1];
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          $target$$92 = 3;
                                                                                                                                                                                                                                                          stack$$11 = matchValue$$17[1];
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        $target$$92 = 3;
                                                                                                                                                                                                                                                        stack$$11 = matchValue$$17[1];
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      $target$$92 = 3;
                                                                                                                                                                                                                                                      stack$$11 = matchValue$$17[1];
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 129) {
                                                                                                                                                                                                                                                    if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                                                                      if (matchValue$$17[1].head.tag === 2) {
                                                                                                                                                                                                                                                        $target$$92 = 1;
                                                                                                                                                                                                                                                      } else if (matchValue$$17[1].head.tag === 25) {
                                                                                                                                                                                                                                                        $target$$92 = 19;
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        $target$$92 = 20;
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      $target$$92 = 20;
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 125) {
                                                                                                                                                                                                                                                    $target$$92 = 4;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 104) {
                                                                                                                                                                                                                                                    $target$$92 = 5;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 140) {
                                                                                                                                                                                                                                                    $target$$92 = 6;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 141) {
                                                                                                                                                                                                                                                    $target$$92 = 7;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 126) {
                                                                                                                                                                                                                                                    $target$$92 = 7;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 116) {
                                                                                                                                                                                                                                                    $target$$92 = 8;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 117) {
                                                                                                                                                                                                                                                    $target$$92 = 8;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 123) {
                                                                                                                                                                                                                                                    $target$$92 = 9;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 86) {
                                                                                                                                                                                                                                                    $target$$92 = 10;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 85) {
                                                                                                                                                                                                                                                    if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                                                                      if (matchValue$$17[1].head.tag === 25) {
                                                                                                                                                                                                                                                        $target$$92 = 11;
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        $target$$92 = 20;
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      $target$$92 = 20;
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 124) {
                                                                                                                                                                                                                                                    $target$$92 = 12;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 111) {
                                                                                                                                                                                                                                                    $target$$92 = 13;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 48) {
                                                                                                                                                                                                                                                    $target$$92 = 14;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 108) {
                                                                                                                                                                                                                                                    $target$$92 = 15;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 107) {
                                                                                                                                                                                                                                                    $target$$92 = 16;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 22) {
                                                                                                                                                                                                                                                    $target$$92 = 17;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[0].tag === 12) {
                                                                                                                                                                                                                                                    $target$$92 = 18;
                                                                                                                                                                                                                                                  } else if (matchValue$$17[1].tail != null) {
                                                                                                                                                                                                                                                    if (matchValue$$17[1].head.tag === 25) {
                                                                                                                                                                                                                                                      $target$$92 = 19;
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      $target$$92 = 20;
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    $target$$92 = 20;
                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                  switch ($target$$92) {
                                                                                                                                                                                                                                                    case 0:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        const lookaheadTokenTup$$4 = LexFilterImpl$$peekNextTokenTup(this$$$23);
                                                                                                                                                                                                                                                        const lookaheadTokenStartPos$$1 = LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$23, lookaheadTokenTup$$4);
                                                                                                                                                                                                                                                        const leadingBar$$2 = LexFilterImpl$$peekNextToken(this$$$23).tag === 57 ? true : false;

                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("WITH, pushing CtxtMatchClauses, lookaheadTokenStartPos = %a, tokenStartPos = %a\n"))(outputPos)(lookaheadTokenStartPos$$1)(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, lookaheadTokenTup$$4, new Context(26, "CtxtMatchClauses", leadingBar$$2, lookaheadTokenStartPos$$1));
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, new _pars.token(26, "OWITH"));
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("FINALLY, pushing pushCtxtSeqBlock, tokenStartPos = %a\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        const lookaheadTokenTup$$5 = LexFilterImpl$$peekNextTokenTup(this$$$23);
                                                                                                                                                                                                                                                        const lookaheadTokenStartPos$$2 = LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$23, lookaheadTokenTup$$5);
                                                                                                                                                                                                                                                        const matchValue$$31 = TokenTup$$get_Token(lookaheadTokenTup$$5);
                                                                                                                                                                                                                                                        var $target$$93;

                                                                                                                                                                                                                                                        switch (matchValue$$31.tag) {
                                                                                                                                                                                                                                                          case 59:
                                                                                                                                                                                                                                                          case 190:
                                                                                                                                                                                                                                                          case 42:
                                                                                                                                                                                                                                                          case 43:
                                                                                                                                                                                                                                                          case 44:
                                                                                                                                                                                                                                                          case 110:
                                                                                                                                                                                                                                                            $target$$93 = 0;
                                                                                                                                                                                                                                                            break;

                                                                                                                                                                                                                                                          default:
                                                                                                                                                                                                                                                            $target$$93 = 1;
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        switch ($target$$93) {
                                                                                                                                                                                                                                                          case 0:
                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                              const offsidePos$$59 = (0, _primLexing.Position$$get_Column)(lookaheadTokenStartPos$$2) > (copyOfStruct$$17 = (copyOfStruct$$16 = TokenTup$$get_LexbufState(tokenTup$$18), LexbufState$$get_EndPos(copyOfStruct$$16)), (0, _primLexing.Position$$get_Column)(copyOfStruct$$17)) ? tokenStartPos : Context$$get_StartPos(limCtxt);

                                                                                                                                                                                                                                                              if (debug) {
                                                                                                                                                                                                                                                                (0, _ildiag.dprintf)((0, _String.printf)("WITH, pushing CtxtWithAsLet, tokenStartPos = %a, lookaheadTokenStartPos = %a\n"))(outputPos)(tokenStartPos)(outputPos)(lookaheadTokenStartPos$$2);
                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                              LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(5, "CtxtWithAsLet", offsidePos$$59));
                                                                                                                                                                                                                                                              let isFollowedByLongIdentEquals;
                                                                                                                                                                                                                                                              const tokenTup$$32 = LexFilterImpl$$popNextTokenTup(this$$$23);
                                                                                                                                                                                                                                                              const res$$3 = isLongIdentEquals(TokenTup$$get_Token(tokenTup$$32));
                                                                                                                                                                                                                                                              LexFilterImpl$$delayToken$$24788697(this$$$23, tokenTup$$32);
                                                                                                                                                                                                                                                              isFollowedByLongIdentEquals = res$$3;

                                                                                                                                                                                                                                                              if (isFollowedByLongIdentEquals) {
                                                                                                                                                                                                                                                                LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, false, new AddBlockEnd(1, "NoAddBlockEnd"));
                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                              return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, new _pars.token(26, "OWITH"));
                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                          case 1:
                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                              if (debug) {
                                                                                                                                                                                                                                                                (0, _ildiag.dprintf)((0, _String.printf)("WITH, pushing CtxtWithAsAugment and CtxtSeqBlock, tokenStartPos = %a, limCtxt = %A\n"))(outputPos)(tokenStartPos)(limCtxt);
                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                              if ((TokenTup$$get_Token(lookaheadTokenTup$$5).tag === 73 ? true : false) ? lookaheadTokenStartPos$$2.OriginalLine === TokenTup$$get_StartPos(tokenTup$$18).OriginalLine : false) {
                                                                                                                                                                                                                                                                const offsidePos$$60 = tokenStartPos;
                                                                                                                                                                                                                                                                LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(5, "CtxtWithAsLet", offsidePos$$60));
                                                                                                                                                                                                                                                                return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, new _pars.token(26, "OWITH"));
                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                const offsidePos$$61 = Context$$get_StartPos(limCtxt);
                                                                                                                                                                                                                                                                LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(6, "CtxtWithAsAugment", offsidePos$$61));
                                                                                                                                                                                                                                                                LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                                                return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 3:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("WITH\n"));
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("WITH --> NO MATCH, pushing CtxtWithAsAugment (type augmentation), stack = %A"))(stack$$11);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(6, "CtxtWithAsAugment", tokenStartPos));
                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 4:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        const lookaheadTokenTup$$6 = LexFilterImpl$$peekNextTokenTup(this$$$23);
                                                                                                                                                                                                                                                        const lookaheadTokenStartPos$$3 = LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$23, lookaheadTokenTup$$6);
                                                                                                                                                                                                                                                        const leadingBar$$3 = LexFilterImpl$$peekNextToken(this$$$23).tag === 57 ? true : false;
                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(4, "CtxtFunction", tokenStartPos));
                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, lookaheadTokenTup$$6, new Context(26, "CtxtMatchClauses", leadingBar$$3, lookaheadTokenStartPos$$3));
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, new _pars.token(25, "OFUNCTION"));
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 5:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("THEN, replacing THEN with OTHEN, pushing CtxtSeqBlock;CtxtThen(%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(12, "CtxtThen", tokenStartPos));
                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, new _pars.token(28, "OTHEN"));
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 6:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        const lookaheadTokenTup$$7 = LexFilterImpl$$peekNextTokenTup(this$$$23);
                                                                                                                                                                                                                                                        const lookaheadTokenStartPos$$4 = LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$23, lookaheadTokenTup$$7);
                                                                                                                                                                                                                                                        var $target$$94;

                                                                                                                                                                                                                                                        if (LexFilterImpl$$peekNextToken(this$$$23).tag === 126) {
                                                                                                                                                                                                                                                          if (isSameLine()) {
                                                                                                                                                                                                                                                            $target$$94 = 0;
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            $target$$94 = 1;
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          $target$$94 = 1;
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        switch ($target$$94) {
                                                                                                                                                                                                                                                          case 0:
                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                              LexFilterImpl$$popNextTokenTup(this$$$23);

                                                                                                                                                                                                                                                              if (debug) {
                                                                                                                                                                                                                                                                (0, _ildiag.dprintf)((0, _String.printf)("ELSE IF: replacing ELSE IF with ELIF, pushing CtxtIf, CtxtVanilla(%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                              LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(1, "CtxtIf", tokenStartPos));
                                                                                                                                                                                                                                                              return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, new _pars.token(141, "ELIF"));
                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                          case 1:
                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                              if (debug) {
                                                                                                                                                                                                                                                                (0, _ildiag.dprintf)((0, _String.printf)("ELSE: replacing ELSE with OELSE, pushing CtxtSeqBlock, CtxtElse(%a)\n"))(outputPos)(lookaheadTokenStartPos$$4);
                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                              LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(13, "CtxtElse", tokenStartPos));
                                                                                                                                                                                                                                                              LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                                              return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, new _pars.token(27, "OELSE"));
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 7:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("IF, pushing CtxtIf(%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(1, "CtxtIf", tokenStartPos));
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 8:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("MATCH, pushing CtxtMatch(%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(7, "CtxtMatch", tokenStartPos));
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 9:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("FOR, pushing CtxtFor(%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(8, "CtxtFor", tokenStartPos));
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 10:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("WHILE, pushing CtxtWhile(%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(9, "CtxtWhile", tokenStartPos));
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 11:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("WHEN, pushing CtxtWhen(%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(10, "CtxtWhen", tokenStartPos));
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 12:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("FUN, pushing CtxtFun(%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(3, "CtxtFun", tokenStartPos));
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, new _pars.token(24, "OFUN"));
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 13:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        const lookaheadTokenTup$$8 = LexFilterImpl$$peekNextTokenTup(this$$$23);
                                                                                                                                                                                                                                                        const lookaheadTokenStartPos$$5 = LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$23, lookaheadTokenTup$$8);
                                                                                                                                                                                                                                                        const matchValue$$35 = TokenTup$$get_Token(lookaheadTokenTup$$8);
                                                                                                                                                                                                                                                        var $target$$95;

                                                                                                                                                                                                                                                        switch (matchValue$$35.tag) {
                                                                                                                                                                                                                                                          case 51:
                                                                                                                                                                                                                                                          case 50:
                                                                                                                                                                                                                                                          case 111:
                                                                                                                                                                                                                                                          case 119:
                                                                                                                                                                                                                                                          case 108:
                                                                                                                                                                                                                                                          case 46:
                                                                                                                                                                                                                                                          case 142:
                                                                                                                                                                                                                                                          case 47:
                                                                                                                                                                                                                                                          case 49:
                                                                                                                                                                                                                                                          case 53:
                                                                                                                                                                                                                                                          case 73:
                                                                                                                                                                                                                                                            $target$$95 = 0;
                                                                                                                                                                                                                                                            break;

                                                                                                                                                                                                                                                          default:
                                                                                                                                                                                                                                                            $target$$95 = 1;
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        switch ($target$$95) {
                                                                                                                                                                                                                                                          case 0:
                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                              if (debug) {
                                                                                                                                                                                                                                                                (0, _ildiag.dprintf)((0, _String.printf)("INTERFACE, pushing CtxtParen, tokenStartPos = %a, lookaheadTokenStartPos = %a\n"))(outputPos)(tokenStartPos)(outputPos)(lookaheadTokenStartPos$$5);
                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                              LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(24, "CtxtParen", token$$36, tokenStartPos));
                                                                                                                                                                                                                                                              LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                                              return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                          case 1:
                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                              if (debug) {
                                                                                                                                                                                                                                                                (0, _ildiag.dprintf)((0, _String.printf)("INTERFACE, pushing CtxtInterfaceHead, tokenStartPos = %a, lookaheadTokenStartPos = %a\n"))(outputPos)(tokenStartPos)(outputPos)(lookaheadTokenStartPos$$5);
                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                              LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(15, "CtxtInterfaceHead", tokenStartPos));
                                                                                                                                                                                                                                                              return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, new _pars.token(14, "OINTERFACE_MEMBER"));
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 14:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("CLASS, pushing CtxtParen(%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(24, "CtxtParen", token$$36, tokenStartPos));
                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, true, new AddBlockEnd(0, "AddBlockEnd"));
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 15:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        insertComingSoonTokens$$1(["TYPE", new _pars.token(36, "TYPE_COMING_SOON"), new _pars.token(37, "TYPE_IS_HERE")]);

                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("TYPE, pushing CtxtTypeDefns(%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(16, "CtxtTypeDefns", tokenStartPos));
                                                                                                                                                                                                                                                        this$$$23 = this$$$23;
                                                                                                                                                                                                                                                        useBlockRule$$1 = useBlockRule$$1;
                                                                                                                                                                                                                                                        continue LexFilterImpl$$hwTokenFetch$$Z1FBCCD16;
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 16:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("Try, pushing CtxtTry(%a)\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(2, "CtxtTry", tokenStartPos));
                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$23, false, new AddBlockEnd(2, "AddOneSidedBlockEnd"));
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 17:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 18:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("skipping dummy token as no offside rules apply\n"));
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        this$$$23 = this$$$23;
                                                                                                                                                                                                                                                        useBlockRule$$1 = useBlockRule$$1;
                                                                                                                                                                                                                                                        continue LexFilterImpl$$hwTokenFetch$$Z1FBCCD16;
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 19:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        LexFilterImpl$$pushCtxt(this$$$23, tokenTup$$18, new Context(11, "CtxtVanilla", tokenStartPos, isLongIdentEquals(token$$36)));

                                                                                                                                                                                                                                                        if (debug) {
                                                                                                                                                                                                                                                          (0, _ildiag.dprintf)((0, _String.printf)("pushing CtxtVanilla at tokenStartPos = %a\n"))(outputPos)(tokenStartPos);
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    case 20:
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        return LexFilterImpl$$returnToken(this$$$23, tokenLexbufState$$2, token$$36);
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

function LexFilterImpl$$rulesForBothSoftWhiteAndHardWhite$$24788697(this$$$24, tokenTup$$33) {
  var copyOfStruct$$24, copyOfStruct$$25, matchValue$$39, s$$3, s$$4, matchValue$$40, s$$5, s$$6, matchValue$$41, s$$7, s$$8, matchValue$$42, s$$9, s$$10, matchValue$$43, s$$11, s$$12;
  const matchValue$$36 = TokenTup$$get_Token(tokenTup$$33);
  var $target$$96;

  if (matchValue$$36.tag === 190) {
    if (LexFilterImpl$$nextTokenIsAdjacentLParenOrLBrack$$24788697(this$$$24, tokenTup$$33) != null) {
      $target$$96 = 0;
    } else {
      $target$$96 = 1;
    }
  } else {
    $target$$96 = 1;
  }

  switch ($target$$96) {
    case 0:
      {
        const dotTokenTup$$2 = LexFilterImpl$$peekNextTokenTup(this$$$24);

        if (debug) {
          (0, _ildiag.dprintf)((0, _String.printf)("inserting HIGH_PRECEDENCE_PAREN_APP at dotTokenPos = %a\n"))(outputPos)(LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$24, dotTokenTup$$2));
        }

        let hpa;
        const matchValue$$37 = LexFilterImpl$$nextTokenIsAdjacentLParenOrLBrack$$24788697(this$$$24, tokenTup$$33);
        var $target$$97;

        if (matchValue$$37 != null) {
          if (matchValue$$37.tag === 92) {
            $target$$97 = 0;
          } else if (matchValue$$37.tag === 71) {
            $target$$97 = 1;
          } else {
            $target$$97 = 2;
          }
        } else {
          $target$$97 = 2;
        }

        switch ($target$$97) {
          case 0:
            {
              hpa = new _pars.token(34, "HIGH_PRECEDENCE_PAREN_APP");
              break;
            }

          case 1:
            {
              hpa = new _pars.token(35, "HIGH_PRECEDENCE_BRACK_APP");
              break;
            }

          case 2:
            {
              throw new Error("unreachable");
              break;
            }
        }

        LexFilterImpl$$delayToken$$24788697(this$$$24, TokenTup$$UseLocation$$56122D30(dotTokenTup$$2, hpa));
        LexFilterImpl$$delayToken$$24788697(this$$$24, tokenTup$$33);
        return true;
      }

    case 1:
      {
        var $target$$98;

        if (matchValue$$36.tag === 151) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 190) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 167) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 168) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 165) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 179) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 178) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 176) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 175) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 169) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 174) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 173) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 172) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 171) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else if (matchValue$$36.tag === 164) {
          if (LexFilterImpl$$peekAdjacentTypars(this$$$24, false, tokenTup$$33)) {
            $target$$98 = 0;
          } else {
            $target$$98 = 1;
          }
        } else {
          $target$$98 = 1;
        }

        switch ($target$$98) {
          case 0:
            {
              const lessTokenTup = LexFilterImpl$$popNextTokenTup(this$$$24);
              LexFilterImpl$$delayToken$$24788697(this$$$24, TokenTup$$UseLocation$$56122D30(lessTokenTup, TokenTup$$get_Token(lessTokenTup).tag === 159 ? new _pars.token(159, "LESS", true) : (() => {
                throw new Error("unreachable");
              })()));

              if (debug) {
                (0, _ildiag.dprintf)((0, _String.printf)("softwhite inserting HIGH_PRECEDENCE_TYAPP at dotTokenPos = %a\n"))(outputPos)(LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$24, lessTokenTup));
              }

              LexFilterImpl$$delayToken$$24788697(this$$$24, TokenTup$$UseLocation$$56122D30(lessTokenTup, new _pars.token(33, "HIGH_PRECEDENCE_TYAPP")));
              LexFilterImpl$$delayToken$$24788697(this$$$24, tokenTup$$33);
              return true;
            }

          case 1:
            {
              var $target$$99, i$$2, v, raw, s$$13;

              if (matchValue$$36.tag === 177) {
                $target$$99 = 0;
                i$$2 = matchValue$$36.fields[0][0];
                v = matchValue$$36.fields[0][1];
              } else if (matchValue$$36.tag === 156) {
                $target$$99 = 1;
                raw = matchValue$$36.fields[0][1];
                s$$13 = matchValue$$36.fields[0][0];
              } else if (matchValue$$36.tag === 62) {
                if (((matchValue$$39 = TokenTup$$get_Token(tokenTup$$33), matchValue$$39.tag === 182 ? (s$$3 = matchValue$$39.fields[0], (s$$3 === "+" ? true : s$$3 === "+.") ? true : s$$3 === "-.") : matchValue$$39.tag === 157 ? (s$$4 = matchValue$$39.fields[0], s$$4 === "%" ? true : s$$4 === "%%") : true) ? LexFilterImpl$$nextTokenIsAdjacent$$24788697(this$$$24, tokenTup$$33) : false) ? !(this$$$24.prevWasAtomicEnd ? (0, _Util.equals)(TokenTup$$get_LastTokenPos(tokenTup$$33).Y, LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$24, tokenTup$$33)) : false) : false) {
                  $target$$99 = 2;
                } else {
                  $target$$99 = 3;
                }
              } else if (matchValue$$36.tag === 182) {
                if (((matchValue$$40 = TokenTup$$get_Token(tokenTup$$33), matchValue$$40.tag === 182 ? (s$$5 = matchValue$$40.fields[0], (s$$5 === "+" ? true : s$$5 === "+.") ? true : s$$5 === "-.") : matchValue$$40.tag === 157 ? (s$$6 = matchValue$$40.fields[0], s$$6 === "%" ? true : s$$6 === "%%") : true) ? LexFilterImpl$$nextTokenIsAdjacent$$24788697(this$$$24, tokenTup$$33) : false) ? !(this$$$24.prevWasAtomicEnd ? (0, _Util.equals)(TokenTup$$get_LastTokenPos(tokenTup$$33).Y, LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$24, tokenTup$$33)) : false) : false) {
                  $target$$99 = 2;
                } else {
                  $target$$99 = 3;
                }
              } else if (matchValue$$36.tag === 157) {
                if (((matchValue$$41 = TokenTup$$get_Token(tokenTup$$33), matchValue$$41.tag === 182 ? (s$$7 = matchValue$$41.fields[0], (s$$7 === "+" ? true : s$$7 === "+.") ? true : s$$7 === "-.") : matchValue$$41.tag === 157 ? (s$$8 = matchValue$$41.fields[0], s$$8 === "%" ? true : s$$8 === "%%") : true) ? LexFilterImpl$$nextTokenIsAdjacent$$24788697(this$$$24, tokenTup$$33) : false) ? !(this$$$24.prevWasAtomicEnd ? (0, _Util.equals)(TokenTup$$get_LastTokenPos(tokenTup$$33).Y, LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$24, tokenTup$$33)) : false) : false) {
                  $target$$99 = 2;
                } else {
                  $target$$99 = 3;
                }
              } else if (matchValue$$36.tag === 89) {
                if (((matchValue$$42 = TokenTup$$get_Token(tokenTup$$33), matchValue$$42.tag === 182 ? (s$$9 = matchValue$$42.fields[0], (s$$9 === "+" ? true : s$$9 === "+.") ? true : s$$9 === "-.") : matchValue$$42.tag === 157 ? (s$$10 = matchValue$$42.fields[0], s$$10 === "%" ? true : s$$10 === "%%") : true) ? LexFilterImpl$$nextTokenIsAdjacent$$24788697(this$$$24, tokenTup$$33) : false) ? !(this$$$24.prevWasAtomicEnd ? (0, _Util.equals)(TokenTup$$get_LastTokenPos(tokenTup$$33).Y, LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$24, tokenTup$$33)) : false) : false) {
                  $target$$99 = 2;
                } else {
                  $target$$99 = 3;
                }
              } else if (matchValue$$36.tag === 90) {
                if (((matchValue$$43 = TokenTup$$get_Token(tokenTup$$33), matchValue$$43.tag === 182 ? (s$$11 = matchValue$$43.fields[0], (s$$11 === "+" ? true : s$$11 === "+.") ? true : s$$11 === "-.") : matchValue$$43.tag === 157 ? (s$$12 = matchValue$$43.fields[0], s$$12 === "%" ? true : s$$12 === "%%") : true) ? LexFilterImpl$$nextTokenIsAdjacent$$24788697(this$$$24, tokenTup$$33) : false) ? !(this$$$24.prevWasAtomicEnd ? (0, _Util.equals)(TokenTup$$get_LastTokenPos(tokenTup$$33).Y, LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$24, tokenTup$$33)) : false) : false) {
                  $target$$99 = 2;
                } else {
                  $target$$99 = 3;
                }
              } else {
                $target$$99 = 3;
              }

              switch ($target$$99) {
                case 0:
                  {
                    const dotdotPos = LexbufState$$$$002Ector$$590A0CCA((copyOfStruct$$24 = TokenTup$$get_EndPos(tokenTup$$33), (0, _primLexing.Position$$ShiftColumnBy$$Z524259A4)(copyOfStruct$$24, -2)), TokenTup$$get_EndPos(tokenTup$$33), false);
                    LexFilterImpl$$delayToken$$24788697(this$$$24, TokenTup$$$$002Ector$$40945AC6(new _pars.token(143, "DOT_DOT"), dotdotPos, TokenTup$$get_LastTokenPos(tokenTup$$33)));
                    LexFilterImpl$$delayToken$$24788697(this$$$24, TokenTup$$UseShiftedLocation$$Z217B7B50(tokenTup$$33, new _pars.token(176, "INT32", [i$$2, v]), 0, -2));
                    return true;
                  }

                case 1:
                  {
                    const dotPos = LexbufState$$$$002Ector$$590A0CCA((copyOfStruct$$25 = TokenTup$$get_EndPos(tokenTup$$33), (0, _primLexing.Position$$ShiftColumnBy$$Z524259A4)(copyOfStruct$$25, -1)), TokenTup$$get_EndPos(tokenTup$$33), false);
                    LexFilterImpl$$delayToken$$24788697(this$$$24, TokenTup$$$$002Ector$$40945AC6(new _pars.token(77, "DOT"), dotPos, TokenTup$$get_LastTokenPos(tokenTup$$33)));
                    LexFilterImpl$$delayToken$$24788697(this$$$24, TokenTup$$UseShiftedLocation$$Z217B7B50(tokenTup$$33, new _pars.token(155, "RQUOTE", [s$$13, raw]), 0, -1));
                    return true;
                  }

                case 2:
                  {
                    let plus;
                    const matchValue$$44 = TokenTup$$get_Token(tokenTup$$33);

                    if (matchValue$$44.tag === 182) {
                      const s$$14 = matchValue$$44.fields[0];
                      plus = s$$14 === "+";
                    } else {
                      plus = false;
                    }

                    let plusOrMinus;
                    const matchValue$$45 = TokenTup$$get_Token(tokenTup$$33);

                    switch (matchValue$$45.tag) {
                      case 182:
                        {
                          const s$$15 = matchValue$$45.fields[0];
                          plusOrMinus = s$$15 === "+";
                          break;
                        }

                      case 62:
                        {
                          plusOrMinus = true;
                          break;
                        }

                      default:
                        {
                          plusOrMinus = false;
                        }
                    }

                    const nextTokenTup = LexFilterImpl$$popNextTokenTup(this$$$24);

                    const delayMergedToken = function delayMergedToken(tok$$26) {
                      var copyOfStruct$$26, copyOfStruct$$27, copyOfStruct$$28;
                      LexFilterImpl$$delayToken$$24788697(this$$$24, TokenTup$$$$002Ector$$40945AC6(tok$$26, LexbufState$$$$002Ector$$590A0CCA((copyOfStruct$$26 = TokenTup$$get_LexbufState(tokenTup$$33), LexbufState$$get_StartPos(copyOfStruct$$26)), (copyOfStruct$$27 = TokenTup$$get_LexbufState(nextTokenTup), LexbufState$$get_EndPos(copyOfStruct$$27)), (copyOfStruct$$28 = TokenTup$$get_LexbufState(nextTokenTup), LexbufState$$get_PastEOF(copyOfStruct$$28))), TokenTup$$get_LastTokenPos(tokenTup$$33)));
                    };

                    const noMerge = function noMerge() {
                      let tokenName;
                      const matchValue$$46 = TokenTup$$get_Token(tokenTup$$33);
                      var $target$$100, s$$16;

                      switch (matchValue$$46.tag) {
                        case 182:
                          $target$$100 = 0;
                          s$$16 = matchValue$$46.fields[0];
                          break;

                        case 157:
                          $target$$100 = 0;
                          s$$16 = matchValue$$46.fields[0];
                          break;

                        case 89:
                          $target$$100 = 1;
                          break;

                        case 90:
                          $target$$100 = 2;
                          break;

                        case 62:
                          $target$$100 = 3;
                          break;

                        default:
                          $target$$100 = 4;
                      }

                      switch ($target$$100) {
                        case 0:
                          {
                            tokenName = s$$16;
                            break;
                          }

                        case 1:
                          {
                            tokenName = "&";
                            break;
                          }

                        case 2:
                          {
                            tokenName = "&&";
                            break;
                          }

                        case 3:
                          {
                            tokenName = "-";
                            break;
                          }

                        case 4:
                          {
                            throw new Error("unreachable");
                            break;
                          }
                      }

                      const token$$39 = new _pars.token(181, "ADJACENT_PREFIX_OP", tokenName);
                      LexFilterImpl$$delayToken$$24788697(this$$$24, nextTokenTup);
                      LexFilterImpl$$delayToken$$24788697(this$$$24, TokenTup$$UseLocation$$56122D30(tokenTup$$33, token$$39));
                    };

                    if (plusOrMinus) {
                      const matchValue$$47 = TokenTup$$get_Token(nextTokenTup);

                      switch (matchValue$$47.tag) {
                        case 179:
                          {
                            const v$$1 = matchValue$$47.fields[0][0] | 0;
                            const bad = matchValue$$47.fields[0][1];
                            delayMergedToken(new _pars.token(179, "INT8", [plus ? v$$1 : -v$$1, plus ? bad : false]));
                            break;
                          }

                        case 178:
                          {
                            const v$$2 = matchValue$$47.fields[0][0] | 0;
                            const bad$$1 = matchValue$$47.fields[0][1];
                            delayMergedToken(new _pars.token(178, "INT16", [plus ? v$$2 : -v$$2, plus ? bad$$1 : false]));
                            break;
                          }

                        case 176:
                          {
                            const v$$3 = matchValue$$47.fields[0][0] | 0;
                            const bad$$2 = matchValue$$47.fields[0][1];
                            delayMergedToken(new _pars.token(176, "INT32", [plus ? v$$3 : -v$$3, plus ? bad$$2 : false]));
                            break;
                          }

                        case 177:
                          {
                            const v$$4 = matchValue$$47.fields[0][0] | 0;
                            const bad$$3 = matchValue$$47.fields[0][1];
                            delayMergedToken(new _pars.token(177, "INT32_DOT_DOT", [plus ? v$$4 : -v$$4, plus ? bad$$3 : false]));
                            break;
                          }

                        case 175:
                          {
                            const v$$5 = matchValue$$47.fields[0][0];
                            const bad$$4 = matchValue$$47.fields[0][1];
                            delayMergedToken(new _pars.token(175, "INT64", [plus ? v$$5 : (0, _Long.op_UnaryNegation)(v$$5), plus ? bad$$4 : false]));
                            break;
                          }

                        case 169:
                          {
                            const v$$6 = matchValue$$47.fields[0];
                            delayMergedToken(new _pars.token(169, "NATIVEINT", plus ? v$$6 : (0, _Long.op_UnaryNegation)(v$$6)));
                            break;
                          }

                        case 168:
                          {
                            const v$$7 = matchValue$$47.fields[0];
                            delayMergedToken(new _pars.token(168, "IEEE32", plus ? v$$7 : -v$$7));
                            break;
                          }

                        case 167:
                          {
                            const v$$8 = matchValue$$47.fields[0];
                            delayMergedToken(new _pars.token(167, "IEEE64", plus ? v$$8 : -v$$8));
                            break;
                          }

                        case 165:
                          {
                            const v$$9 = matchValue$$47.fields[0];
                            delayMergedToken(new _pars.token(165, "DECIMAL", plus ? v$$9 : -v$$9));
                            break;
                          }

                        case 164:
                          {
                            const v$$10 = matchValue$$47.fields[0][0];
                            const s$$17 = matchValue$$47.fields[0][1];
                            delayMergedToken(new _pars.token(164, "BIGNUM", [plus ? v$$10 : "-" + v$$10, s$$17]));
                            break;
                          }

                        default:
                          {
                            noMerge();
                          }
                      }
                    } else {
                      noMerge();
                    }

                    return true;
                  }

                case 3:
                  {
                    return false;
                  }
              }
            }
        }
      }
  }
}

function LexFilterImpl$$pushCtxtSeqBlock$$ZAE96730(this$$$25, addBlockBegin$$24, addBlockEnd$$32) {
  LexFilterImpl$$pushCtxtSeqBlockAt$$Z2F572839(this$$$25, LexFilterImpl$$peekNextTokenTup(this$$$25), addBlockBegin$$24, addBlockEnd$$32);
}

function LexFilterImpl$$pushCtxtSeqBlockAt$$Z2F572839(this$$$26, p$$77, addBlockBegin$$25, addBlockEnd$$33) {
  if (addBlockBegin$$25) {
    if (debug) {
      (0, _ildiag.dprintf)((0, _String.printf)("--> insert OBLOCKBEGIN \n"));
    }

    LexFilterImpl$$delayToken$$24788697(this$$$26, TokenTup$$UseLocation$$56122D30(p$$77, new _pars.token(22, "OBLOCKBEGIN")));
  }

  LexFilterImpl$$pushCtxt(this$$$26, p$$77, new Context(25, "CtxtSeqBlock", new FirstInSequence(0, "FirstInSeqBlock"), LexFilterImpl$$startPosOfTokenTup$$24788697(this$$$26, p$$77), addBlockEnd$$33));
}

function LexFilterImpl$$swTokenFetch(this$$$27) {
  const tokenTup$$44 = LexFilterImpl$$popNextTokenTup(this$$$27);
  const tokenReplaced$$1 = LexFilterImpl$$rulesForBothSoftWhiteAndHardWhite$$24788697(this$$$27, tokenTup$$44);

  if (tokenReplaced$$1) {
    return LexFilterImpl$$swTokenFetch(this$$$27);
  } else {
    return LexFilterImpl$$returnToken(this$$$27, TokenTup$$get_LexbufState(tokenTup$$44), TokenTup$$get_Token(tokenTup$$44));
  }
}

const LexFilter = (0, _Types.declare)(function LexFilter(lightSyntaxStatus$$1, compilingFsLib$$1, lexer$$1, lexbuf$$1) {
  const $this$$4 = this;
  $this$$4.inner = LexFilterImpl$$$$002Ector$$74BB6F03(lightSyntaxStatus$$1, compilingFsLib$$1, lexer$$1, lexbuf$$1);
  $this$$4.delayedStack = (0, _primParsing.Stack$00601$$$$002Ector$$Z524259A4)(100);
});
exports.LexFilter = LexFilter;

function LexFilter$$$$002Ector$$74BB6F03(lightSyntaxStatus$$1, compilingFsLib$$1, lexer$$1, lexbuf$$1) {
  return this != null ? LexFilter.call(this, lightSyntaxStatus$$1, compilingFsLib$$1, lexer$$1, lexbuf$$1) : new LexFilter(lightSyntaxStatus$$1, compilingFsLib$$1, lexer$$1, lexbuf$$1);
}

function LexFilter$$get_LexBuffer(__$$2) {
  return LexFilterImpl$$get_LexBuffer(__$$2.inner);
}

function LexFilter$$Lexer$$1505(__$$3, _arg1$$1) {
  const loop$$1 = function loop$$1() {
    const token$$40 = LexFilter$$popNextToken(__$$3);

    switch (token$$40.tag) {
      case 59:
        {
          LexFilter$$insertComingSoonTokens(__$$3, new _pars.token(60, "RBRACE_COMING_SOON"), new _pars.token(61, "RBRACE_IS_HERE"));
          return loop$$1();
        }

      case 93:
        {
          LexFilter$$insertComingSoonTokens(__$$3, new _pars.token(94, "RPAREN_COMING_SOON"), new _pars.token(95, "RPAREN_IS_HERE"));
          return loop$$1();
        }

      case 15:
        {
          LexFilter$$insertComingSoonTokens(__$$3, new _pars.token(16, "OBLOCKEND_COMING_SOON"), new _pars.token(17, "OBLOCKEND_IS_HERE"));
          return loop$$1();
        }

      default:
        {
          return token$$40;
        }
    }
  };

  return loop$$1();
}

function LexFilter$$delayToken$$56122D30(this$$$28, tok$$28) {
  (0, _primParsing.Stack$00601$$Push$$2B595)(this$$$28.delayedStack, tok$$28);
}

function LexFilter$$popNextToken(this$$$29) {
  if ((0, _primParsing.Stack$00601$$get_Count)(this$$$29.delayedStack) > 0) {
    const tokenTup$$45 = (0, _primParsing.Stack$00601$$Pop)(this$$$29.delayedStack);
    return tokenTup$$45;
  } else {
    return LexFilterImpl$$Lexer$$1505(this$$$29.inner);
  }
}

function LexFilter$$insertComingSoonTokens(this$$$30, comingSoon$$4, isHere$$4) {
  if (debug) {
    (0, _ildiag.dprintf)((0, _String.printf)("inserting 6 copies of %+A before %+A\n"))(comingSoon$$4)(isHere$$4);
  }

  LexFilter$$delayToken$$56122D30(this$$$30, isHere$$4);

  for (let i$$3 = 1; i$$3 <= 6; i$$3++) {
    LexFilter$$delayToken$$56122D30(this$$$30, comingSoon$$4);
  }
}

function token(lexargs, skip) {
  return function (lexbuf$$2) {
    return (0, _lex.token)(lexargs, skip, lexbuf$$2);
  };
}