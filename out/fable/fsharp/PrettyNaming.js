"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IsOperatorOrBacktickedName = IsOperatorOrBacktickedName;
exports.IsOperatorName = IsOperatorName;
exports.IsMangledOpName = IsMangledOpName;
exports.DemangleOperatorName = DemangleOperatorName;
exports.DemangleOperatorNameAsLayout = DemangleOperatorNameAsLayout;
exports.IsIdentifierFirstCharacter = IsIdentifierFirstCharacter;
exports.IsIdentifierPartCharacter = IsIdentifierPartCharacter;
exports.IsLongIdentifierPartCharacter = IsLongIdentifierPartCharacter;
exports.IsValidPrefixOperatorUse = IsValidPrefixOperatorUse;
exports.IsValidPrefixOperatorDefinitionName = IsValidPrefixOperatorDefinitionName;
exports.IsPrefixOperator = IsPrefixOperator;
exports.IsPunctuation = IsPunctuation;
exports.IsTernaryOperator = IsTernaryOperator;
exports.$007CControl$007CEquality$007CRelational$007CIndexer$007CFixedTypes$007COther$007C = $007CControl$007CEquality$007CRelational$007CIndexer$007CFixedTypes$007COther$007C;
exports.IsCompilerGeneratedName = IsCompilerGeneratedName;
exports.CompilerGeneratedName = CompilerGeneratedName;
exports.GetBasicNameOfPossibleCompilerGeneratedName = GetBasicNameOfPossibleCompilerGeneratedName;
exports.CompilerGeneratedNameSuffix = CompilerGeneratedNameSuffix;
exports.IsMangledGenericName = IsMangledGenericName;
exports.DecodeGenericTypeName = DecodeGenericTypeName;
exports.DemangleGenericTypeName = DemangleGenericTypeName;
exports.TryChopPropertyName = TryChopPropertyName;
exports.ChopPropertyName = ChopPropertyName;
exports.SplitNamesForILPath = SplitNamesForILPath;
exports.IsActivePatternName = IsActivePatternName;
exports.ActivePatternInfo$$get_IsTotal = ActivePatternInfo$$get_IsTotal;
exports.ActivePatternInfo$$get_ActiveTags = ActivePatternInfo$$get_ActiveTags;
exports.ActivePatternInfo$$get_ActiveTagsWithRanges = ActivePatternInfo$$get_ActiveTagsWithRanges;
exports.ActivePatternInfo$$get_Range = ActivePatternInfo$$get_Range;
exports.ActivePatternInfoOfValName = ActivePatternInfoOfValName;
exports.demangleProvidedTypeName = demangleProvidedTypeName;
exports.mangleProvidedTypeName = mangleProvidedTypeName;
exports.computeMangledNameWithoutDefaultArgValues = computeMangledNameWithoutDefaultArgValues;
exports.InvalidMangledStaticArg = exports.ActivePatternInfo = exports.IllegalCharactersInTypeAndNamespaceNames = exports.NameArityPair = exports.IsInfixOperator = exports.opNameNullableEqualsNullable = exports.opNameNullableEquals = exports.opNameEqualsNullable = exports.opNameEquals = exports.opNameNil = exports.opNameCons = exports.DecompileOpName = exports.CompileOpName = void 0;

var _Util = require("../fable-core.2.0.3/Util");

var _String = require("../fable-core.2.0.3/String");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Array = require("../fable-core.2.0.3/Array");

var _adapters = require("../fcs-fable/adapters");

var _System = require("../fable-core.2.0.3/System.Text");

var _Map = require("../fable-core.2.0.3/Map");

var _sformat = require("../utils/sformat");

var _Char = require("../fable-core.2.0.3/Char");

var _Option = require("../fable-core.2.0.3/Option");

var _Types = require("../fable-core.2.0.3/Types");

var _Int = require("../fable-core.2.0.3/Int32");

var _List = require("../fable-core.2.0.3/List");

var _range = require("./range");

var _illib = require("../absil/illib");

const opNameTable = [["[]", "op_Nil"], ["::", "op_ColonColon"], ["+", "op_Addition"], ["~%", "op_Splice"], ["~%%", "op_SpliceUntyped"], ["~++", "op_Increment"], ["~--", "op_Decrement"], ["-", "op_Subtraction"], ["*", "op_Multiply"], ["**", "op_Exponentiation"], ["/", "op_Division"], ["@", "op_Append"], ["^", "op_Concatenate"], ["%", "op_Modulus"], ["&&&", "op_BitwiseAnd"], ["|||", "op_BitwiseOr"], ["^^^", "op_ExclusiveOr"], ["<<<", "op_LeftShift"], ["~~~", "op_LogicalNot"], [">>>", "op_RightShift"], ["~+", "op_UnaryPlus"], ["~-", "op_UnaryNegation"], ["~&", "op_AddressOf"], ["~&&", "op_IntegerAddressOf"], ["&&", "op_BooleanAnd"], ["||", "op_BooleanOr"], ["<=", "op_LessThanOrEqual"], ["=", "op_Equality"], ["<>", "op_Inequality"], [">=", "op_GreaterThanOrEqual"], ["<", "op_LessThan"], [">", "op_GreaterThan"], ["|>", "op_PipeRight"], ["||>", "op_PipeRight2"], ["|||>", "op_PipeRight3"], ["<|", "op_PipeLeft"], ["<||", "op_PipeLeft2"], ["<|||", "op_PipeLeft3"], ["!", "op_Dereference"], [">>", "op_ComposeRight"], ["<<", "op_ComposeLeft"], ["<< >>", "op_TypedQuotationUnicode"], ["<<| |>>", "op_ChevronsBar"], ["<@ @>", "op_Quotation"], ["<@@ @@>", "op_QuotationUntyped"], ["+=", "op_AdditionAssignment"], ["-=", "op_SubtractionAssignment"], ["*=", "op_MultiplyAssignment"], ["/=", "op_DivisionAssignment"], ["..", "op_Range"], [".. ..", "op_RangeStep"], ["?", "op_Dynamic"], ["?<-", "op_DynamicAssignment"], [".()", "op_ArrayLookup"], [".()<-", "op_ArrayAssign"]];
const opCharTranslateTable = [[">", "Greater"], ["<", "Less"], ["+", "Plus"], ["-", "Minus"], ["*", "Multiply"], ["=", "Equals"], ["~", "Twiddle"], ["%", "Percent"], [".", "Dot"], ["$", "Dollar"], ["&", "Amp"], ["|", "Bar"], ["@", "At"], ["#", "Hash"], ["^", "Hat"], ["!", "Bang"], ["?", "Qmark"], ["/", "Divide"], [":", "Colon"], ["(", "LParen"], [",", "Comma"], [")", "RParen"], [" ", "Space"], ["[", "LBrack"], ["]", "RBrack"]];

const opCharSet = (() => {
  const t = new Set([]);

  for (let idx = 0; idx <= opCharTranslateTable.length - 1; idx++) {
    const forLoopVar = opCharTranslateTable[idx];
    (0, _Util.addToSet)(forLoopVar[0], t);
  }

  return t;
})();

function IsOperatorOrBacktickedName(name) {
  const nameLen = name.length | 0;

  const loop = function loop(i) {
    loop: while (true) {
      if (i < nameLen) {
        if (opCharSet.has(name[i])) {
          return true;
        } else {
          i = i + 1;
          continue loop;
        }
      } else {
        return false;
      }
    }
  };

  return loop(0);
}

function IsOperatorName(name$$1) {
  const name$$2 = ((0, _String.startsWith)(name$$1, "( ", 4) ? (0, _String.endsWith)(name$$1, " )", 4) : false) ? name$$1.slice(2, name$$1.length - 3 + 1) : name$$1;

  if (name$$2 === ".. ..") {
    return true;
  } else {
    return (0, _Seq.forAll)(function predicate(c$$1) {
      if (c$$1 !== " ") {
        return opCharSet.has(c$$1);
      } else {
        return false;
      }
    }, name$$2.split(""));
  }
}

function IsMangledOpName(n) {
  return (0, _String.startsWith)(n, "op_", 4);
}

const compileCustomOpName = (() => {
  let t2$$1;
  const t2 = new Map([]);

  for (let idx$$1 = 0; idx$$1 <= opCharTranslateTable.length - 1; idx$$1++) {
    const forLoopVar$$1 = opCharTranslateTable[idx$$1];
    t2.set(forLoopVar$$1[0], forLoopVar$$1[1]);
  }

  t2$$1 = t2;
  const maxOperatorNameLength = (0, _Array.maxBy)(function projection($arg$$1) {
    return $arg$$1[1].length;
  }, opCharTranslateTable, {
    Compare: _Util.comparePrimitives
  })[1].length | 0;
  const compiledOperators = (0, _adapters.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector$$Z79760D57)((0, _adapters.System$002EStringComparer$$$get_Ordinal)());
  return function (opp) {
    return (0, _adapters.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$GetOrAdd$$Z1F9F2CFE)(compiledOperators, opp, function (op) {
      const opLength = op.length | 0;
      const sb = (0, _System.StringBuilder$$$$002Ector$$Z18115A39)("op_", "op_".length + opLength * maxOperatorNameLength);

      for (let i$$1 = 0; i$$1 <= opLength - 1; i$$1++) {
        const c$$2 = op[i$$1];
        const matchValue = (0, _Util.tryGetValue)(t2$$1, c$$2, null);

        if (matchValue[0]) {
          (0, _System.StringBuilder$$Append$$Z721C83C5)(sb, matchValue[1]);
        } else {
          (0, _System.StringBuilder$$Append$$Z721C83C5)(sb, c$$2);
        }
      }

      const opName = (0, _Util.toString)(sb);
      return opName;
    });
  };
})();

const CompileOpName = (() => {
  let standardOpNames;
  const opNames = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _adapters.System$002EStringComparer$$$get_Ordinal)()));

  for (let idx$$2 = 0; idx$$2 <= opNameTable.length - 1; idx$$2++) {
    const forLoopVar$$2 = opNameTable[idx$$2];
    opNames.set(forLoopVar$$2[0], forLoopVar$$2[1]);
  }

  standardOpNames = opNames;
  return function (op$$1) {
    const matchValue$$1 = (0, _Util.tryGetValue)(standardOpNames, op$$1, null);
    return matchValue$$1[0] ? matchValue$$1[1] : IsOperatorOrBacktickedName(op$$1) ? compileCustomOpName(op$$1) : op$$1;
  };
})();

exports.CompileOpName = CompileOpName;

const decompileCustomOpName = (() => {
  const decompiledOperators = (0, _adapters.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector$$Z79760D57)((0, _adapters.System$002EStringComparer$$$get_Ordinal)());
  const minOperatorNameLength = (0, _Array.minBy)(function projection$$1($arg$$4) {
    return $arg$$4[1].length;
  }, opCharTranslateTable, {
    Compare: _Util.comparePrimitives
  })[1].length | 0;
  return function (opName$$1) {
    const matchValue$$2 = (0, _Util.tryGetValue)(decompiledOperators, opName$$1, null);

    if (matchValue$$2[0]) {
      return matchValue$$2[1];
    } else {
      const opNameLen = opName$$1.length | 0;

      const decompile = function decompile(sb$$1, idx$$3) {
        decompile: while (true) {
          if (idx$$3 === opNameLen) {
            const decompiledOp = (0, _Util.toString)(sb$$1);
            (0, _adapters.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$TryAdd$$5BDDA1)(decompiledOperators, opName$$1, decompiledOp);
            return decompiledOp;
          } else {
            const choice = (0, _Array.tryFind)(function predicate$$1(tupledArg) {
              const opCharNameLen = tupledArg[1].length | 0;

              if (opNameLen - idx$$3 < opCharNameLen) {
                return false;
              } else {
                return (0, _String.compare)(opName$$1, idx$$3, tupledArg[1], 0, opCharNameLen, 4) === 0;
              }
            }, opCharTranslateTable);

            if (choice != null) {
              const opCharName$$1 = choice[1];
              const opChar = choice[0];
              (0, _System.StringBuilder$$Append$$Z721C83C5)(sb$$1, opChar);
              sb$$1 = sb$$1;
              idx$$3 = idx$$3 + opCharName$$1.length;
              continue decompile;
            } else {
              return opName$$1;
            }
          }
        }
      };

      const opNamePrefixLen = "op_".length | 0;
      let sb$$2;
      const maxPossibleOpCharCount = ~~((opNameLen - opNamePrefixLen) / minOperatorNameLength) | 0;
      sb$$2 = (0, _System.StringBuilder$$$$002Ector$$Z524259A4)(maxPossibleOpCharCount);
      return decompile(sb$$2, opNamePrefixLen);
    }
  };
})();

const DecompileOpName = (() => {
  let standardOps;
  const ops = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _adapters.System$002EStringComparer$$$get_Ordinal)()));

  for (let idx$$4 = 0; idx$$4 <= opNameTable.length - 1; idx$$4++) {
    const forLoopVar$$3 = opNameTable[idx$$4];
    ops.set(forLoopVar$$3[1], forLoopVar$$3[0]);
  }

  standardOps = ops;
  return function (opName$$2) {
    const matchValue$$3 = (0, _Util.tryGetValue)(standardOps, opName$$2, null);
    return matchValue$$3[0] ? matchValue$$3[1] : IsMangledOpName(opName$$2) ? decompileCustomOpName(opName$$2) : opName$$2;
  };
})();

exports.DecompileOpName = DecompileOpName;

function DemangleOperatorName(nm) {
  const nm$$1 = DecompileOpName(nm);

  if (IsOperatorOrBacktickedName(nm$$1)) {
    return "( " + nm$$1 + " )";
  } else {
    return nm$$1;
  }
}

function DemangleOperatorNameAsLayout(nonOpTagged, nm$$2) {
  const nm$$3 = DecompileOpName(nm$$2);

  if (IsOperatorOrBacktickedName(nm$$3)) {
    return (0, _sformat.LayoutOps$$$op_HatHat)((0, _sformat.LayoutOps$$$wordL)((0, _sformat.TaggedTextOps$$$tagPunctuation)("(")), (0, _sformat.LayoutOps$$$op_HatHat)((0, _sformat.LayoutOps$$$wordL)((0, _sformat.TaggedTextOps$$$tagOperator)(nm$$3)), (0, _sformat.LayoutOps$$$wordL)((0, _sformat.TaggedTextOps$$$tagPunctuation)(")"))));
  } else {
    return (0, _sformat.LayoutOps$$$wordL)(nonOpTagged(nm$$3));
  }
}

const opNameCons = CompileOpName("::");
exports.opNameCons = opNameCons;
const opNameNil = CompileOpName("[]");
exports.opNameNil = opNameNil;
const opNameEquals = CompileOpName("=");
exports.opNameEquals = opNameEquals;
const opNameEqualsNullable = CompileOpName("=?");
exports.opNameEqualsNullable = opNameEqualsNullable;
const opNameNullableEquals = CompileOpName("?=");
exports.opNameNullableEquals = opNameNullableEquals;
const opNameNullableEqualsNullable = CompileOpName("?=?");
exports.opNameNullableEqualsNullable = opNameNullableEqualsNullable;

function IsIdentifierFirstCharacter(c$$3) {
  if (c$$3 === "_") {
    return true;
  } else {
    const matchValue$$4 = (0, _Char.getUnicodeCategory)(c$$3) | 0;
    var $target$$13;

    switch (matchValue$$4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 9:
        $target$$13 = 0;
        break;

      default:
        $target$$13 = 1;
    }

    switch ($target$$13) {
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
}

function IsIdentifierPartCharacter(c$$4) {
  if (c$$4 === "'") {
    return true;
  } else {
    const matchValue$$5 = (0, _Char.getUnicodeCategory)(c$$4) | 0;
    var $target$$14;

    switch (matchValue$$5) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 8:
      case 9:
      case 18:
        $target$$14 = 0;
        break;

      default:
        $target$$14 = 1;
    }

    switch ($target$$14) {
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
}

function IsLongIdentifierPartCharacter(c$$5) {
  if (c$$5 === ".") {
    return true;
  } else {
    return IsIdentifierPartCharacter(c$$5);
  }
}

function IsValidPrefixOperatorUse(s) {
  if ((0, _String.isNullOrEmpty)(s)) {
    return false;
  } else {
    var $target$$15;

    switch (s) {
      case "?+":
      case "?-":
      case "+":
      case "-":
      case "+.":
      case "-.":
      case "%":
      case "%%":
      case "&":
      case "&&":
        $target$$15 = 0;
        break;

      default:
        $target$$15 = 1;
    }

    switch ($target$$15) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          if (s[0] === "!") {
            return true;
          } else if (s[0] === "~") {
            return (0, _Seq.forAll)(function (c$$6) {
              return c$$6 === "~";
            }, s.split(""));
          } else {
            return false;
          }
        }
    }
  }
}

function IsValidPrefixOperatorDefinitionName(s$$1) {
  if ((0, _String.isNullOrEmpty)(s$$1)) {
    return false;
  } else {
    var $target$$16;

    switch (s$$1) {
      case "~?+":
      case "~?-":
      case "~+":
      case "~-":
      case "~+.":
      case "~-.":
      case "~%":
      case "~%%":
      case "~&":
      case "~&&":
        $target$$16 = 0;
        break;

      default:
        $target$$16 = 1;
    }

    switch ($target$$16) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          if (s$$1[0] === "!" ? s$$1 !== "!=" : false) {
            return true;
          } else if (s$$1[0] === "~") {
            return (0, _Seq.forAll)(function (c$$7) {
              return c$$7 === "~";
            }, s$$1.split(""));
          } else {
            return false;
          }
        }
    }
  }
}

function IsPrefixOperator(s$$2) {
  if ((0, _String.isNullOrEmpty)(s$$2)) {
    return false;
  } else {
    const s$$3 = DecompileOpName(s$$2);
    var $target$$17;

    switch (s$$3) {
      case "~?+":
      case "~?-":
      case "~+":
      case "~-":
      case "~+.":
      case "~-.":
      case "~%":
      case "~%%":
      case "~&":
      case "~&&":
        $target$$17 = 0;
        break;

      default:
        $target$$17 = 1;
    }

    switch ($target$$17) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          if (s$$3[0] === "!" ? s$$3 !== "!=" : false) {
            return true;
          } else if (s$$3[0] === "~") {
            return (0, _Seq.forAll)(function (c$$8) {
              return c$$8 === "~";
            }, s$$3.split(""));
          } else {
            return false;
          }
        }
    }
  }
}

function IsPunctuation(s$$4) {
  if ((0, _String.isNullOrEmpty)(s$$4)) {
    return false;
  } else {
    var $target$$18;

    switch (s$$4) {
      case ",":
      case ";":
      case "|":
      case ":":
      case ".":
      case "*":
      case "(":
      case ")":
      case "[":
      case "]":
      case "{":
      case "}":
      case "<":
      case ">":
      case "[|":
      case "|]":
      case "[<":
      case ">]":
        $target$$18 = 0;
        break;

      default:
        $target$$18 = 1;
    }

    switch ($target$$18) {
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
}

function IsTernaryOperator(s$$5) {
  return DecompileOpName(s$$5) === "?<-";
}

const IsInfixOperator = (() => {
  const relational = ["=", "!=", "<", ">", "$"];
  const concat = ["@", "^"];
  const plusMinus = ["+", "-"];
  const otherMath = ["*", "/", "%"];
  const ignoredChars = [".", "?"];
  return function (s$$6) {
    const s$$7 = DecompileOpName(s$$6);
    const skipIgnoredChars = (0, _String.trimStart)(s$$7, ...ignoredChars);

    const afterSkipStartsWith = function afterSkipStartsWith(prefix) {
      return (0, _String.startsWith)(skipIgnoredChars, prefix, 4);
    };

    const afterSkipStarts = function afterSkipStarts(prefixes) {
      return prefixes.some(afterSkipStartsWith);
    };

    return ((((((((s$$7 === ":=" ? true : afterSkipStartsWith("|")) ? true : afterSkipStartsWith("&")) ? true : afterSkipStarts(relational)) ? true : s$$7 === "$") ? true : afterSkipStarts(concat)) ? true : s$$7 === "::") ? true : afterSkipStarts(plusMinus)) ? true : afterSkipStarts(otherMath)) ? true : s$$7 === "**";
  };
})();

exports.IsInfixOperator = IsInfixOperator;

function $007CControl$007CEquality$007CRelational$007CIndexer$007CFixedTypes$007COther$007C(opName$$3) {
  var $target$$19;

  switch (opName$$3) {
    case "&":
    case "or":
    case "&&":
    case "||":
      $target$$19 = 0;
      break;

    case "<>":
    case "=":
      $target$$19 = 1;
      break;

    case "<":
    case ">":
    case "<=":
    case ">=":
      $target$$19 = 2;
      break;

    case "<<":
    case "<|":
    case "<||":
    case "|>":
    case "||>":
    case "|||>":
    case ">>":
    case "^":
    case ":=":
    case "@":
      $target$$19 = 3;
      break;

    case ".[]":
      $target$$19 = 4;
      break;

    default:
      $target$$19 = 5;
  }

  switch ($target$$19) {
    case 0:
      {
        return new _Option.Choice(0, "Choice1Of6", null);
      }

    case 1:
      {
        return new _Option.Choice(1, "Choice2Of6", null);
      }

    case 2:
      {
        return new _Option.Choice(2, "Choice3Of6", null);
      }

    case 3:
      {
        return new _Option.Choice(4, "Choice5Of6", null);
      }

    case 4:
      {
        return new _Option.Choice(3, "Choice4Of6", null);
      }

    case 5:
      {
        return new _Option.Choice(5, "Choice6Of6", null);
      }
  }
}

function IsCompilerGeneratedName(nm$$4) {
  return nm$$4.indexOf("@") !== -1;
}

function CompilerGeneratedName(nm$$5) {
  if (IsCompilerGeneratedName(nm$$5)) {
    return nm$$5;
  } else {
    return nm$$5 + "@";
  }
}

function GetBasicNameOfPossibleCompilerGeneratedName(name$$3) {
  const matchValue$$6 = name$$3.indexOf("@") | 0;
  var $target$$20;

  switch (matchValue$$6) {
    case -1:
    case 0:
      $target$$20 = 0;
      break;

    default:
      $target$$20 = 1;
  }

  switch ($target$$20) {
    case 0:
      {
        return name$$3;
      }

    case 1:
      {
        const n$$1 = matchValue$$6 | 0;
        return name$$3.slice(0, n$$1 - 1 + 1);
      }
  }
}

function CompilerGeneratedNameSuffix(basicName, suffix) {
  return basicName + "@" + suffix;
}

function IsMangledGenericName(n$$2) {
  if (n$$2.indexOf("`") !== -1) {
    const m = n$$2.lastIndexOf("`") | 0;
    let res$$1 = m < n$$2.length - 1;

    for (let i$$2 = m + 1; i$$2 <= n$$2.length - 1; i$$2++) {
      res$$1 = (res$$1 ? n$$2[i$$2] >= "0" : false) ? n$$2[i$$2] <= "9" : false;
    }

    return res$$1;
  } else {
    return false;
  }
}

const NameArityPair = (0, _Types.declare)(function NameArityPair(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.NameArityPair = NameArityPair;

function DecodeGenericTypeName(n$$3) {
  if (IsMangledGenericName(n$$3)) {
    const pos = n$$3.lastIndexOf("`") | 0;
    const res$$2 = n$$3.substr(0, pos);
    const num = n$$3.substr(pos + 1, n$$3.length - pos - 1);
    return new NameArityPair(0, "NameArityPair", res$$2, (0, _Int.parse)(num));
  } else {
    return new NameArityPair(0, "NameArityPair", n$$3, 0);
  }
}

function DemangleGenericTypeName(n$$4) {
  if (IsMangledGenericName(n$$4)) {
    const pos$$1 = n$$4.lastIndexOf("`") | 0;
    return n$$4.substr(0, pos$$1);
  } else {
    return n$$4;
  }
}

function chopStringTo(s$$8, c$$9) {
  const matchValue$$7 = s$$8.indexOf(c$$9) | 0;

  if (matchValue$$7 === -1) {
    return s$$8;
  } else {
    const idx$$5 = matchValue$$7 | 0;
    const i$$3 = idx$$5 + 1 | 0;
    return s$$8.substr(i$$3, s$$8.length - i$$3);
  }
}

function TryChopPropertyName(s$$9) {
  if (s$$9.length <= 4) {
    return null;
  } else if ((0, _String.startsWith)(s$$9, "get_", 4) ? true : (0, _String.startsWith)(s$$9, "set_", 4)) {
    return s$$9.substr(4, s$$9.length - 4);
  } else {
    const s$$10 = chopStringTo(s$$9, ".");

    if ((0, _String.startsWith)(s$$10, "get_", 4) ? true : (0, _String.startsWith)(s$$10, "set_", 4)) {
      return s$$10.substr(4, s$$10.length - 4);
    } else {
      return null;
    }
  }
}

function ChopPropertyName(s$$11) {
  const matchValue$$8 = TryChopPropertyName(s$$11);

  if (matchValue$$8 != null) {
    const res$$3 = matchValue$$8;
    return res$$3;
  } else {
    return (0, _String.toFail)((0, _String.printf)("Invalid internal property name: '%s'"))(s$$11);
  }
}

function SplitNamesForILPath(s$$12) {
  if (((0, _String.startsWith)(s$$12, "``", 4) ? (0, _String.endsWith)(s$$12, "``", 4) : false) ? s$$12.length > 4 : false) {
    return (0, _Types.L)(s$$12.substr(2, s$$12.length - 4), (0, _Types.L)());
  } else {
    return (0, _Array.toList)((0, _String.split)(s$$12, [".", "`"]));
  }
}

function splitAroundQuotation(text, separator) {
  const length = text.length | 0;

  const isNotQuotedQuotation = function isNotQuotedQuotation(n$$5) {
    if (n$$5 > 0) {
      return text[n$$5 - 1] !== "\\";
    } else {
      return false;
    }
  };

  const split = function split(tupledArg$$1) {
    split: while (true) {
      if (tupledArg$$1[0] >= length) {
        return (0, _List.reverse)((0, _Types.L)(tupledArg$$1[1], tupledArg$$1[2]));
      } else {
        const matchValue$$9 = [text[tupledArg$$1[0]], tupledArg$$1[3]];
        var $target$$21;

        if (matchValue$$9[1]) {
          $target$$21 = 1;
        } else if (matchValue$$9[0] === separator) {
          $target$$21 = 0;
        } else {
          $target$$21 = 1;
        }

        switch ($target$$21) {
          case 0:
            {
              tupledArg$$1 = [tupledArg$$1[0] + 1, "", (0, _Types.L)(tupledArg$$1[1], tupledArg$$1[2]), false];
              continue split;
            }

          case 1:
            {
              var $target$$22;

              if (matchValue$$9[1]) {
                if (matchValue$$9[0] === separator) {
                  $target$$22 = 0;
                } else {
                  $target$$22 = 1;
                }
              } else {
                $target$$22 = 1;
              }

              switch ($target$$22) {
                case 0:
                  {
                    tupledArg$$1 = [tupledArg$$1[0] + 1, tupledArg$$1[1] + matchValue$$9[0], tupledArg$$1[2], true];
                    continue split;
                  }

                case 1:
                  {
                    var $target$$23;

                    if (matchValue$$9[0] === "\"") {
                      if (isNotQuotedQuotation(tupledArg$$1[0])) {
                        $target$$23 = 0;
                      } else {
                        $target$$23 = 1;
                      }
                    } else {
                      $target$$23 = 1;
                    }

                    switch ($target$$23) {
                      case 0:
                        {
                          tupledArg$$1 = [tupledArg$$1[0] + 1, tupledArg$$1[1] + "\"", tupledArg$$1[2], !tupledArg$$1[3]];
                          continue split;
                        }

                      case 1:
                        {
                          tupledArg$$1 = [tupledArg$$1[0] + 1, tupledArg$$1[1] + matchValue$$9[0], tupledArg$$1[2], tupledArg$$1[3]];
                          continue split;
                        }
                    }
                  }
              }
            }
        }
      }
    }
  };

  return (0, _Array.ofList)(split([0, "", (0, _Types.L)(), false]), Array);
}

function splitAroundQuotationWithCount(text$$1, separator$$1, count) {
  if (count <= 1) {
    return [text$$1];
  } else {
    const mangledText = splitAroundQuotation(text$$1, separator$$1);

    if (mangledText.length > count) {
      return (0, _Array.append)(mangledText.slice(0, count - 2 + 1), [(0, _String.join)(separator$$1, ...mangledText.slice(count - 1, mangledText.length))], Array);
    } else {
      return mangledText;
    }
  }
}

const IllegalCharactersInTypeAndNamespaceNames = [".", "+", "$", "&", "[", "]", "/", "\\", "*", "\"", "`"];
exports.IllegalCharactersInTypeAndNamespaceNames = IllegalCharactersInTypeAndNamespaceNames;

function IsActivePatternName(nm$$6) {
  const nameLen$$1 = nm$$6.length | 0;

  if ((nm$$6.indexOf("|") === 0 ? nm$$6.lastIndexOf("|") === nameLen$$1 - 1 : false) ? nameLen$$1 >= 3 : false) {
    const core = nm$$6.substr(1, nameLen$$1 - 2);

    if ((0, _Seq.forAll)(function predicate$$2(c$$15) {
      if (c$$15 === "|" ? true : c$$15 === " ") {
        return true;
      } else {
        return !opCharSet.has(c$$15);
      }
    }, core.split(""))) {
      return (0, _Seq.exists)(function predicate$$3(c$$16) {
        if (c$$16 === " ") {
          return true;
        } else {
          return !opCharSet.has(c$$16);
        }
      }, core.split(""));
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const ActivePatternInfo = (0, _Types.declare)(function ActivePatternInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ActivePatternInfo = ActivePatternInfo;

function ActivePatternInfo$$get_IsTotal(x$$15) {
  const p = x$$15.fields[0];
  return p;
}

function ActivePatternInfo$$get_ActiveTags(x$$16) {
  const tags = x$$16.fields[1];
  return (0, _List.map)(function (tuple$$4) {
    return tuple$$4[0];
  }, tags);
}

function ActivePatternInfo$$get_ActiveTagsWithRanges(x$$17) {
  const tags$$1 = x$$17.fields[1];
  return tags$$1;
}

function ActivePatternInfo$$get_Range(x$$18) {
  const m$$1 = x$$18.fields[2];
  return m$$1;
}

function ActivePatternInfoOfValName(nm$$7, m$$2) {
  const loop$$1 = function loop$$1(nm$$8, mp) {
    const n$$6 = nm$$8.indexOf("|") | 0;

    if (n$$6 > 0) {
      const m1 = (0, _range.mkRange)((0, _range.range$$get_FileName)(mp), (0, _range.range$$get_Start)(mp), (0, _range.mkPos)((0, _range.range$$get_StartLine)(mp), (0, _range.range$$get_StartColumn)(mp) + n$$6));
      const m2 = (0, _range.mkRange)((0, _range.range$$get_FileName)(mp), (0, _range.mkPos)((0, _range.range$$get_StartLine)(mp), (0, _range.range$$get_StartColumn)(mp) + n$$6 + 1), (0, _range.range$$get_End)(mp));
      return (0, _Types.L)([nm$$8.slice(0, n$$6 - 1 + 1), m1], loop$$1(nm$$8.slice(n$$6 + 1, nm$$8.length), m2));
    } else {
      const m1$$1 = (0, _range.mkRange)((0, _range.range$$get_FileName)(mp), (0, _range.range$$get_Start)(mp), (0, _range.mkPos)((0, _range.range$$get_StartLine)(mp), (0, _range.range$$get_StartColumn)(mp) + nm$$8.length));
      return (0, _Types.L)([nm$$8, m1$$1], (0, _Types.L)());
    }
  };

  const nm$$9 = DecompileOpName(nm$$7);

  if (IsActivePatternName(nm$$9)) {
    const m0 = (0, _range.mkRange)((0, _range.range$$get_FileName)(m$$2), (0, _range.mkPos)((0, _range.range$$get_StartLine)(m$$2), (0, _range.range$$get_StartColumn)(m$$2) + 1), (0, _range.mkPos)((0, _range.range$$get_EndLine)(m$$2), (0, _range.range$$get_EndColumn)(m$$2) - 1));
    const names = loop$$1(nm$$9.slice(1, nm$$9.length - 2 + 1), m0);
    const patternInput = (0, _illib.List$$$frontAndBack)(names);
    return patternInput[1][0] === "_" ? new ActivePatternInfo(0, "APInfo", false, patternInput[0], m$$2) : new ActivePatternInfo(0, "APInfo", true, names, m$$2);
  } else {
    return null;
  }
}

function mangleStaticStringArg(nm$$10, v) {
  return nm$$10 + "=" + "\"" + (0, _String.replace)((0, _String.replace)(v, "\\", "\\\\"), "\"", "\\\"") + "\"";
}

function tryDemangleStaticStringArg(mangledText$$1) {
  const matchValue$$11 = splitAroundQuotationWithCount(mangledText$$1, "=", 2);

  if (!(0, _Array.equalsWith)(_Util.comparePrimitives, matchValue$$11, null) ? matchValue$$11.length === 2 : false) {
    const v$$1 = matchValue$$11[1];
    const nm$$11 = matchValue$$11[0];

    if (v$$1.length >= 2) {
      return [nm$$11, (0, _String.replace)((0, _String.replace)(v$$1.slice(1, v$$1.length - 2 + 1), "\\\\", "\\"), "\\\"", "\"")];
    } else {
      return [nm$$11, v$$1];
    }
  } else {
    return null;
  }
}

const InvalidMangledStaticArg = (0, _Types.declare)(function InvalidMangledStaticArg(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.InvalidMangledStaticArg = InvalidMangledStaticArg;

function demangleProvidedTypeName(typeLogicalName) {
  if (typeLogicalName.indexOf(",") >= 0) {
    const pieces = splitAroundQuotation(typeLogicalName, ",");
    var $target$$24;

    if (!(0, _Array.equalsWith)(_Util.comparePrimitives, pieces, null) ? pieces.length === 2 : false) {
      if (pieces[1] === "") {
        $target$$24 = 0;
      } else {
        $target$$24 = 1;
      }
    } else {
      $target$$24 = 1;
    }

    switch ($target$$24) {
      case 0:
        {
          const x$$19 = pieces[0];
          return [x$$19, []];
        }

      case 1:
        {
          const argNamesAndValues = (0, _Array.choose)(tryDemangleStaticStringArg, pieces.slice(1, pieces.length), Array);

          if (argNamesAndValues.length === pieces.length - 1) {
            return [pieces[0], argNamesAndValues];
          } else {
            return [typeLogicalName, []];
          }
        }
    }
  } else {
    return [typeLogicalName, []];
  }
}

function mangleProvidedTypeName(typeLogicalName$$1, nonDefaultArgs) {
  const nonDefaultArgsText = (0, _String.join)(",", ...(0, _Array.map)(function (tupledArg$$2) {
    return mangleStaticStringArg(tupledArg$$2[0], tupledArg$$2[1]);
  }, nonDefaultArgs, Array));

  if (nonDefaultArgsText === "") {
    return typeLogicalName$$1;
  } else {
    return typeLogicalName$$1 + "," + nonDefaultArgsText;
  }
}

function computeMangledNameWithoutDefaultArgValues(nm$$13, staticArgs, defaultArgValues) {
  const nonDefaultArgs$$1 = (0, _Array.choose)(function chooser(tupledArg$$3) {
    var v$$3;
    const actualArgValue = (0, _Util.toString)(tupledArg$$3[0]);
    var $target$$25, v$$4;

    if (tupledArg$$3[1][1] != null) {
      if (v$$3 = tupledArg$$3[1][1], v$$3 === actualArgValue) {
        $target$$25 = 0;
        v$$4 = tupledArg$$3[1][1];
      } else {
        $target$$25 = 1;
      }
    } else {
      $target$$25 = 1;
    }

    switch ($target$$25) {
      case 0:
        {
          return null;
        }

      case 1:
        {
          return [tupledArg$$3[1][0], actualArgValue];
        }
    }
  }, (0, _Array.zip)(staticArgs, defaultArgValues), Array);
  return mangleProvidedTypeName(nm$$13, nonDefaultArgs$$1);
}