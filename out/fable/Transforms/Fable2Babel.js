"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Util$$$$007CFunctionArgs$007C = Util$$$$007CFunctionArgs$007C;
exports.Util$$$discardUnitArg = Util$$$discardUnitArg;
exports.Util$002ENamedTailCallOpportunity$$$$002Ector$$Z77F31FDD = Util$002ENamedTailCallOpportunity$$$$002Ector$$Z77F31FDD;
exports.Util$$$prepareBoundThis = Util$$$prepareBoundThis;
exports.Util$$$decisionTargetsReferencedMultipleTimes = Util$$$decisionTargetsReferencedMultipleTimes;
exports.Util$$$getDecisionTarget = Util$$$getDecisionTarget;
exports.Util$$$isJsStatement = Util$$$isJsStatement;
exports.Util$$$addErrorAndReturnNull = Util$$$addErrorAndReturnNull;
exports.Util$$$toPattern = Util$$$toPattern;
exports.Util$$$ident = Util$$$ident;
exports.Util$$$identAsPattern = Util$$$identAsPattern;
exports.Util$$$identAsExpr = Util$$$identAsExpr;
exports.Util$$$ofInt = Util$$$ofInt;
exports.Util$$$ofString = Util$$$ofString;
exports.Util$$$memberFromName = Util$$$memberFromName;
exports.Util$$$memberFromExpr = Util$$$memberFromExpr;
exports.Util$$$get = Util$$$get;
exports.Util$$$getExpr = Util$$$getExpr;
exports.Util$$$getParts = Util$$$getParts;
exports.Util$$$jsObject = Util$$$jsObject;
exports.Util$$$coreUtil = Util$$$coreUtil;
exports.Util$$$coreLibCall = Util$$$coreLibCall;
exports.Util$$$coreValue = Util$$$coreValue;
exports.Util$$$entityRefMaybeImported = Util$$$entityRefMaybeImported;
exports.Util$$$makeTypedArray = Util$$$makeTypedArray;
exports.Util$$$makeStringArray = Util$$$makeStringArray;
exports.Util$$$makeJsObject = Util$$$makeJsObject;
exports.Util$$$assign = Util$$$assign;
exports.Util$$$iife = Util$$$iife;
exports.Util$$$multiVarDeclaration = Util$$$multiVarDeclaration;
exports.Util$$$varDeclaration = Util$$$varDeclaration;
exports.Util$$$restElement = Util$$$restElement;
exports.Util$$$callFunctionWithThisContext = Util$$$callFunctionWithThisContext;
exports.Util$$$macroExpression = Util$$$macroExpression;
exports.Util$$$getMemberArgsAndBody = Util$$$getMemberArgsAndBody;
exports.Util$$$getUnionCaseName = Util$$$getUnionCaseName;
exports.Util$$$getUnionExprTag = Util$$$getUnionExprTag;
exports.Util$$$getUnionExprField = Util$$$getUnionExprField;
exports.Util$$$wrapIntExpression = Util$$$wrapIntExpression;
exports.Util$$$makeFunctionExpression = Util$$$makeFunctionExpression;
exports.Util$$$optimizeTailCall = Util$$$optimizeTailCall;
exports.Util$$$transformImport = Util$$$transformImport;
exports.Util$$$transformCast = Util$$$transformCast;
exports.Util$$$transformDelayedResolution = Util$$$transformDelayedResolution;
exports.Util$$$hasRecursiveTypes = Util$$$hasRecursiveTypes;
exports.Util$$$transformTypeInfo = Util$$$transformTypeInfo;
exports.Util$$$transformValue = Util$$$transformValue;
exports.Util$$$transformObjectExpr = Util$$$transformObjectExpr;
exports.Util$$$transformArgs = Util$$$transformArgs;
exports.Util$$$resolveExpr = Util$$$resolveExpr;
exports.Util$$$transformOperation = Util$$$transformOperation;
exports.Util$$$transformOperationAsStatements = Util$$$transformOperationAsStatements;
exports.Util$$$transformBlock = Util$$$transformBlock;
exports.Util$$$transformTryCatch = Util$$$transformTryCatch;
exports.Util$$$transformIfStatement = Util$$$transformIfStatement;
exports.Util$$$transformGet = Util$$$transformGet;
exports.Util$$$transformSet = Util$$$transformSet;
exports.Util$$$getSetReturnStrategy = Util$$$getSetReturnStrategy;
exports.Util$$$transformBindingExprBody = Util$$$transformBindingExprBody;
exports.Util$$$transformBindingAsExpr = Util$$$transformBindingAsExpr;
exports.Util$$$transformBindingAsStatements = Util$$$transformBindingAsStatements;
exports.Util$$$transformTypeTest = Util$$$transformTypeTest;
exports.Util$$$transformTest = Util$$$transformTest;
exports.Util$$$transformSwitch = Util$$$transformSwitch;
exports.Util$$$getDecisionTargetAndBindValues = Util$$$getDecisionTargetAndBindValues;
exports.Util$$$transformDecisionTreeSuccessAsExpr = Util$$$transformDecisionTreeSuccessAsExpr;
exports.Util$$$transformDecisionTreeSuccessAsStatements = Util$$$transformDecisionTreeSuccessAsStatements;
exports.Util$$$transformDecisionTreeAsSwitch = Util$$$transformDecisionTreeAsSwitch;
exports.Util$$$transformDecisionTreeAsExpr = Util$$$transformDecisionTreeAsExpr;
exports.Util$$$transformDecisionTreeAsStaments = Util$$$transformDecisionTreeAsStaments;
exports.Util$$$transformAsExpr = Util$$$transformAsExpr;
exports.Util$$$transformAsStatements = Util$$$transformAsStatements;
exports.Util$$$transformFunction = Util$$$transformFunction;
exports.Util$$$declareEntryPoint = Util$$$declareEntryPoint;
exports.Util$$$declareModuleMember = Util$$$declareModuleMember;
exports.Util$$$declareType = Util$$$declareType;
exports.Util$$$transformModuleFunction = Util$$$transformModuleFunction;
exports.Util$$$transformAction = Util$$$transformAction;
exports.Util$$$transformOverrideProperty = Util$$$transformOverrideProperty;
exports.Util$$$transformOverrideMethod = Util$$$transformOverrideMethod;
exports.Util$$$transformUnionConstructor = Util$$$transformUnionConstructor;
exports.Util$$$transformCompilerGeneratedConstructor = Util$$$transformCompilerGeneratedConstructor;
exports.Util$$$transformImplicitConstructor = Util$$$transformImplicitConstructor;
exports.Util$$$transformDeclarations = Util$$$transformDeclarations;
exports.Util$$$transformImports = Util$$$transformImports;
exports.Util$$$getLocalIdent = Util$$$getLocalIdent;
exports.Compiler$002EBabelCompiler$$$$002Ector$$740660D = Compiler$002EBabelCompiler$$$$002Ector$$740660D;
exports.Compiler$$$makeCompiler = Compiler$$$makeCompiler;
exports.Compiler$$$createFacade = Compiler$$$createFacade;
exports.Compiler$$$transformFile = Compiler$$$transformFile;
exports.Compiler$002EBabelCompiler = exports.Util$$$thisExpr = exports.Util$002ENamedTailCallOpportunity = exports.Context = exports.Import = exports.ReturnStrategy = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _AST = require("../AST/AST.Fable");

var _Util = require("../fable-core.2.0.3/Util");

var _List = require("../fable-core.2.0.3/List");

var _FableTransforms = require("./FableTransforms");

var _Prelude = require("../Global/Prelude");

var _String = require("../fable-core.2.0.3/String");

var _Transforms = require("./Transforms.Util");

var _AST2 = require("../AST/AST.Babel");

var _FSharp2Fable = require("./FSharp2Fable.Util");

var _Replacements = require("./Replacements");

var _Symbols = require("../symbols/Symbols");

var _AST3 = require("../AST/AST.Common");

var _Array = require("../fable-core.2.0.3/Array");

var _Map = require("../fable-core.2.0.3/Map");

var _Option = require("../fable-core.2.0.3/Option");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Set = require("../fable-core.2.0.3/Set");

const ReturnStrategy = (0, _Types.declare)(function ReturnStrategy(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ReturnStrategy = ReturnStrategy;
const Import = (0, _Types.declare)(function Import(arg1, arg2, arg3) {
  this.Selector = arg1;
  this.LocalIdent = arg2;
  this.Path = arg3;
}, _Types.Record);
exports.Import = Import;
const Context = (0, _Types.declare)(function Context(arg1, arg2, arg3, arg4, arg5) {
  this.File = arg1;
  this.DecisionTargets = arg2;
  this.HoistVars = arg3;
  this.TailCallOpportunity = arg4;
  this.OptimizeTailCall = arg5;
}, _Types.Record);
exports.Context = Context;

function Util$$$$007CFunctionArgs$007C(_arg1) {
  if (_arg1.tag === 1) {
    const args = _arg1.fields[0];
    return args;
  } else {
    const arg = _arg1.fields[0];
    return (0, _Types.L)(arg, (0, _Types.L)());
  }
}

function Util$$$discardUnitArg(args$$1) {
  var unitArg$$2, thisArg, unitArg;
  var $target$$32, unitArg$$1;

  if (args$$1.tail != null) {
    if (args$$1.tail.tail == null) {
      if (unitArg = args$$1.head, (0, _Util.equals)(unitArg.Type, new _AST.Type(2, "Unit"))) {
        $target$$32 = 1;
        unitArg$$1 = args$$1.head;
      } else {
        $target$$32 = 2;
      }
    } else {
      $target$$32 = 2;
    }
  } else {
    $target$$32 = 0;
  }

  switch ($target$$32) {
    case 0:
      {
        return (0, _Types.L)();
      }

    case 1:
      {
        return (0, _Types.L)();
      }

    case 2:
      {
        var $target$$33, thisArg$$1, unitArg$$3;

        if (args$$1.tail != null) {
          if (args$$1.tail.tail != null) {
            if (args$$1.tail.tail.tail == null) {
              if (unitArg$$2 = args$$1.tail.head, (thisArg = args$$1.head, (0, _AST.Ident$$get_IsThisArgDeclaration)(thisArg) ? (0, _Util.equals)(unitArg$$2.Type, new _AST.Type(2, "Unit")) : false)) {
                $target$$33 = 0;
                thisArg$$1 = args$$1.head;
                unitArg$$3 = args$$1.tail.head;
              } else {
                $target$$33 = 1;
              }
            } else {
              $target$$33 = 1;
            }
          } else {
            $target$$33 = 1;
          }
        } else {
          $target$$33 = 1;
        }

        switch ($target$$33) {
          case 0:
            {
              return (0, _Types.L)(thisArg$$1, (0, _Types.L)());
            }

          case 1:
            {
              const args$$2 = args$$1;
              return args$$2;
            }
        }
      }
  }
}

const Util$002ENamedTailCallOpportunity = (0, _Types.declare)(function Util$002ENamedTailCallOpportunity(com, name, args$$3) {
  const $this$$1 = this;
  $this$$1.name = name;
  const patternInput = Util$002ENamedTailCallOpportunity$$getTailCallArgIds($this$$1, com, Util$$$discardUnitArg(args$$3));
  $this$$1.replaceArgs = patternInput[0];
  $this$$1.argIds = patternInput[1];
});
exports.Util$002ENamedTailCallOpportunity = Util$002ENamedTailCallOpportunity;

function Util$002ENamedTailCallOpportunity$$$$002Ector$$Z77F31FDD(com, name, args$$3) {
  return this != null ? Util$002ENamedTailCallOpportunity.call(this, com, name, args$$3) : new Util$002ENamedTailCallOpportunity(com, name, args$$3);
}

Object.defineProperty(Util$002ENamedTailCallOpportunity.prototype, "Label", {
  "get": function () {
    const __ = this;
    return __.name;
  }
});
Object.defineProperty(Util$002ENamedTailCallOpportunity.prototype, "Args", {
  "get": function () {
    const __$$1 = this;
    return __$$1.argIds;
  }
});
Object.defineProperty(Util$002ENamedTailCallOpportunity.prototype, "ReplaceArgs", {
  "get": function () {
    const __$$2 = this;
    return __$$2.replaceArgs;
  }
});

Util$002ENamedTailCallOpportunity.prototype.IsRecursiveRef = function (e) {
  const __$$3 = this;

  if (e.tag === 1) {
    const id = e.fields[0];
    return __$$3.name === id.Name;
  } else {
    return false;
  }
};

function Util$002ENamedTailCallOpportunity$$getTailCallArgIds(this$, com$$1, args$$5) {
  const replaceArgs = (0, _List.exists)(function predicate(arg$$1) {
    if (arg$$1.Type.tag === 13) {
      return true;
    } else {
      return false;
    }
  }, args$$5);
  return [replaceArgs, (0, _List.map)(function mapping(arg$$2) {
    if (replaceArgs) {
      return com$$1.GetUniqueVar("arg");
    } else {
      return arg$$2.Name;
    }
  }, args$$5)];
}

function Util$$$prepareBoundThis(boundThis, args$$6) {
  if (args$$6.tail != null) {
    const thisArg$$2 = args$$6.head;
    const args$$7 = args$$6.tail;
    return [[boundThis, thisArg$$2], args$$7];
  } else {
    throw new Error("Expecting thisArg to be first element of argument list");
  }
}

function Util$$$decisionTargetsReferencedMultipleTimes(expr, targetsLength) {
  const targetRefs = new Map([]);

  for (let i = 1; i <= targetsLength; i++) {
    targetRefs.set(i - 1, 0);
  }

  return (0, _FableTransforms.deepExistsWithShortcircuit)(function f(_arg1$$1) {
    switch (_arg1$$1.tag) {
      case 13:
        {
          const idx = _arg1$$1.fields[0] | 0;
          const count = targetRefs.get(idx) | 0;
          targetRefs.set(idx, count + 1);

          if (count > 0) {
            return true;
          } else {
            return null;
          }
        }

      case 12:
        {
          return false;
        }

      default:
        {
          return null;
        }
    }
  }, expr);
}

function Util$$$getDecisionTarget(ctx, targetIndex, boundValues) {
  var idents;
  const matchValue$$1 = (0, _List.tryItem)(targetIndex, ctx.DecisionTargets);

  if (matchValue$$1 != null) {
    if (idents = matchValue$$1[0], !(0, _Prelude.List$$$sameLength)(idents, boundValues)) {
      return (0, _String.toFail)((0, _String.printf)("Found DecisionTree target %i but length of bindings differ"))(targetIndex);
    } else {
      if (matchValue$$1 != null) {
        const target = matchValue$$1[1];
        const idents$$2 = matchValue$$1[0];
        return [idents$$2, target];
      } else {
        throw new _Types.MatchFailureException("C:/code/fable/src/dotnet/Fable.Compiler/Transforms/Fable2Babel.fs", 100, 14);
      }
    }
  } else {
    return (0, _String.toFail)((0, _String.printf)("Cannot find DecisionTree target %i"))(targetIndex);
  }
}

function Util$$$isJsStatement(ctx$$1, preferStatement, expr$$2) {
  Util$$$isJsStatement: while (true) {
    var $target$$34;

    switch (expr$$2.tag) {
      case 4:
      case 3:
      case 7:
      case 1:
      case 5:
      case 6:
      case 8:
      case 9:
      case 2:
        $target$$34 = 0;
        break;

      case 18:
      case 10:
      case 14:
      case 15:
      case 16:
      case 17:
      case 11:
        $target$$34 = 1;
        break;

      case 13:
        $target$$34 = 2;
        break;

      case 12:
        $target$$34 = 3;
        break;

      case 19:
        $target$$34 = 4;
        break;

      default:
        $target$$34 = 0;
    }

    switch ($target$$34) {
      case 0:
        {
          return false;
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          const targetIndex$$1 = expr$$2.fields[0] | 0;
          const boundValues$$1 = expr$$2.fields[1];
          const $var$$35 = ctx$$1;
          preferStatement = preferStatement;
          expr$$2 = Util$$$getDecisionTarget(ctx$$1, targetIndex$$1, boundValues$$1)[1];
          ctx$$1 = $var$$35;
          continue Util$$$isJsStatement;
        }

      case 3:
        {
          const targets = expr$$2.fields[1];

          if (preferStatement) {
            return true;
          } else {
            return (0, _List.exists)(function ($arg$$2) {
              return Util$$$isJsStatement(ctx$$1, false, $arg$$2[1]);
            }, targets);
          }
        }

      case 4:
        {
          const thenExpr = expr$$2.fields[1];
          const elseExpr = expr$$2.fields[2];

          if (preferStatement ? true : Util$$$isJsStatement(ctx$$1, false, thenExpr)) {
            return true;
          } else {
            ctx$$1 = ctx$$1;
            preferStatement = false;
            expr$$2 = elseExpr;
            continue Util$$$isJsStatement;
          }
        }
    }
  }
}

function Util$$$addErrorAndReturnNull(com$$2, range, error) {
  (0, _Transforms.Log$$$addError)(com$$2, (0, _Types.L)(), range, error);
  return (0, _AST2.NullLiteral$$$$002Ector$$Z2370DF4E)();
}

function Util$$$toPattern(e$$1) {
  return e$$1;
}

function Util$$$ident(id$$1) {
  return (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(id$$1.Name, null, id$$1.Range);
}

function Util$$$identAsPattern(id$$2) {
  return Util$$$toPattern((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(id$$2.Name, null, id$$2.Range));
}

function Util$$$identAsExpr(id$$3) {
  return (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(id$$3.Name, null, id$$3.Range);
}

const Util$$$thisExpr = (0, _AST2.ThisExpression$$$$002Ector$$Z2370DF4E)();
exports.Util$$$thisExpr = Util$$$thisExpr;

function Util$$$ofInt(i$$1) {
  return (0, _AST2.NumericLiteral$$$$002Ector$$Z64831D7)(i$$1);
}

function Util$$$ofString(s) {
  return (0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(s);
}

function Util$$$memberFromName(memberName) {
  if ((0, _Prelude.Naming$$$hasIdentForbiddenChars)(memberName)) {
    return [(0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(memberName), true];
  } else {
    return [(0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(memberName), false];
  }
}

function Util$$$memberFromExpr(com$$3, ctx$$2, memberExpr) {
  var $target$$36, name$$1, e$$3;

  if (memberExpr.tag === 0) {
    if (memberExpr.fields[0].tag === 5) {
      $target$$36 = 0;
      name$$1 = memberExpr.fields[0].fields[0];
    } else {
      $target$$36 = 1;
      e$$3 = memberExpr;
    }
  } else {
    $target$$36 = 1;
    e$$3 = memberExpr;
  }

  switch ($target$$36) {
    case 0:
      {
        return Util$$$memberFromName(name$$1);
      }

    case 1:
      {
        return [com$$3.TransformAsExpr(ctx$$2, e$$3), true];
      }
  }
}

function Util$$$get(r, left, memberName$$1) {
  const patternInput$$1 = Util$$$memberFromName(memberName$$1);
  return (0, _AST2.MemberExpression$$$$002Ector$$Z606DD313)(left, patternInput$$1[0], patternInput$$1[1], r);
}

function Util$$$getExpr(r$$1, object, expr$$6) {
  const patternInput$$2 = expr$$6 instanceof _AST2.StringLiteral ? Util$$$memberFromName((0, _AST2.StringLiteral$$get_Value)(expr$$6)) : [expr$$6, true];
  return (0, _AST2.MemberExpression$$$$002Ector$$Z606DD313)(object, patternInput$$2[0], patternInput$$2[1], r$$1);
}

function Util$$$getParts(parts, expr$$8) {
  Util$$$getParts: while (true) {
    if (parts.tail != null) {
      const ms = parts.tail;
      const m = parts.head;
      parts = ms;
      expr$$8 = Util$$$get(null, expr$$8, m);
      continue Util$$$getParts;
    } else {
      return expr$$8;
    }
  }
}

function Util$$$jsObject(methodName, args$$8) {
  return (0, _AST2.CallExpression$$$$002Ector$$67485474)(Util$$$get(null, (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)("Object"), methodName), args$$8);
}

function Util$$$coreUtil(com$$4, ctx$$3, memberName$$2, args$$9) {
  return (0, _AST2.CallExpression$$$$002Ector$$67485474)(com$$4.TransformImport(ctx$$3, memberName$$2, "Util", new _AST.ImportKind(0, "CoreLib")), args$$9);
}

function Util$$$coreLibCall(com$$5, ctx$$4, moduleName, memberName$$3, args$$10) {
  return (0, _AST2.CallExpression$$$$002Ector$$67485474)(com$$5.TransformImport(ctx$$4, memberName$$3, moduleName, new _AST.ImportKind(0, "CoreLib")), args$$10);
}

function Util$$$coreValue(com$$6, ctx$$5, moduleName$$1, memberName$$4) {
  return com$$6.TransformImport(ctx$$5, memberName$$4, moduleName$$1, new _AST.ImportKind(0, "CoreLib"));
}

function Util$$$entityRefMaybeImported(com$$7, ctx$$6, ent) {
  if ((0, _FSharp2Fable.Util$$$isReplacementCandidate)(ent)) {
    const matchValue$$2 = (0, _Replacements.tryEntityRef)(ent);

    if (matchValue$$2 == null) {
      return Util$$$addErrorAndReturnNull(com$$7, null, (0, _String.toText)((0, _String.printf)("Cannot find %s constructor"))((0, _Symbols.FSharpEntity$$get_FullName)(ent)));
    } else {
      const entRef = matchValue$$2;
      return com$$7.TransformAsExpr(ctx$$6, entRef);
    }
  } else {
    const entRef$$1 = (0, _FSharp2Fable.Util$$$entityRefMaybeImported)(com$$7, ent);
    return com$$7.TransformAsExpr(ctx$$6, entRef$$1);
  }
}

function Util$$$makeTypedArray(com$$8, ctx$$7, typ, arrayKind) {
  var kind;

  const makeJsTypedArray = function makeJsTypedArray(jsName) {
    let args$$12;

    if (arrayKind.tag === 1) {
      const size = com$$8.TransformAsExpr(ctx$$7, arrayKind.fields[0]);
      args$$12 = [size];
    } else {
      const args$$11 = arrayKind.fields[0];
      args$$12 = [(0, _AST2.ArrayExpression$$$$002Ector$$Z586268D1)((0, _Prelude.List$$$mapToArray)(function (e$$6) {
        return com$$8.TransformAsExpr(ctx$$7, e$$6);
      }, args$$11))];
    }

    return (0, _AST2.NewExpression$$$$002Ector$$67485474)((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(jsName), args$$12);
  };

  var $target$$37, kind$$1;

  if (typ.tag === 7) {
    if (kind = typ.fields[0], com$$8.Options.typedArrays) {
      $target$$37 = 0;
      kind$$1 = typ.fields[0];
    } else {
      $target$$37 = 1;
    }
  } else {
    $target$$37 = 1;
  }

  switch ($target$$37) {
    case 0:
      {
        return makeJsTypedArray((0, _Transforms.AST$$$getTypedArrayName)(com$$8, kind$$1));
      }

    case 1:
      {
        if (arrayKind.tag === 1) {
          const size$$1 = com$$8.TransformAsExpr(ctx$$7, arrayKind.fields[0]);
          return (0, _AST2.NewExpression$$$$002Ector$$67485474)((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)("Array"), [size$$1]);
        } else {
          const args$$13 = arrayKind.fields[0];
          return (0, _AST2.ArrayExpression$$$$002Ector$$Z586268D1)((0, _Prelude.List$$$mapToArray)(function (e$$9) {
            return com$$8.TransformAsExpr(ctx$$7, e$$9);
          }, args$$13));
        }
      }
  }
}

function Util$$$makeStringArray(strings) {
  return (0, _AST2.ArrayExpression$$$$002Ector$$Z586268D1)((0, _Prelude.List$$$mapToArray)(function f$$1(x) {
    return (0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(x);
  }, strings));
}

function Util$$$makeJsObject(pairs) {
  return (0, _AST2.ObjectExpression$$$$002Ector$$Z988B729)((0, _Prelude.List$$$mapToArray)(function f$$2(tupledArg) {
    const patternInput$$3 = Util$$$memberFromName(tupledArg[0]);
    return (0, _AST2.ObjectProperty$$$$002Ector$$Z73E2480E)(patternInput$$3[0], tupledArg[1], null, patternInput$$3[1]);
  }, pairs));
}

function Util$$$assign(range$$2, left$$1, right) {
  return (0, _AST2.AssignmentExpression$$$$002Ector$$665D200E)(new _AST3.AssignmentOperator(0, "AssignEqual"), left$$1, right, range$$2);
}

function Util$$$iife(com$$11, ctx$$10, expr$$10) {
  const patternInput$$4 = com$$11.TransformFunction(ctx$$10, null, (0, _Types.L)(), expr$$10);
  return (0, _AST2.CallExpression$$$$002Ector$$67485474)((0, _AST2.ArrowFunctionExpression$$$$002Ector$$Z732484B9)([], patternInput$$4[1]), []);
}

function Util$$$multiVarDeclaration(kind$$2, namesAndValue) {
  const varDeclarators = (0, _Prelude.List$$$mapToArray)(function f$$3(tupledArg$$1) {
    return (0, _AST2.VariableDeclarator$$$$002Ector$$Z40BB3B3D)(Util$$$toPattern((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(tupledArg$$1[0])), tupledArg$$1[1]);
  }, (0, _List.distinctBy)(function (tuple$$2) {
    return tuple$$2[0];
  }, namesAndValue, {
    Equals($x$$3, $y$$4) {
      return $x$$3 === $y$$4;
    },

    GetHashCode: _Util.structuralHash
  }));
  return (0, _AST2.VariableDeclaration$$$$002Ector$$157C2DC9)(kind$$2, varDeclarators);
}

function Util$$$varDeclaration(var$, isMutable, value$$2) {
  const kind$$3 = isMutable ? new _AST2.VariableDeclarationKind(1, "Let") : new _AST2.VariableDeclarationKind(2, "Const");
  return (0, _AST2.VariableDeclaration$$$$002Ector$$26195FF1)(Util$$$toPattern(var$), value$$2, kind$$3);
}

function Util$$$restElement(var$$$1) {
  return (0, _AST2.RestElement$$$$002Ector$$Z1AE20953)(Util$$$toPattern(var$$$1));
}

function Util$$$callFunctionWithThisContext(r$$2, funcExpr, thisArg$$3, args$$14) {
  return (0, _AST2.CallExpression$$$$002Ector$$67485474)(Util$$$get(null, funcExpr, "call"), (0, _Array.ofList)((0, _Types.L)(thisArg$$3, args$$14), Array), r$$2);
}

function Util$$$macroExpression(range$$3, txt, args$$15) {
  return (0, _AST2.MacroExpression$$$$002Ector$$5A506194)(txt, (0, _Array.ofList)(args$$15, Array), range$$3);
}

function Util$$$getMemberArgsAndBody(com$$12, ctx$$11, name$$4, boundThis$$1, args$$16, hasSpread, body$$1) {
  let patternInput$$5;

  if (boundThis$$1 == null) {
    patternInput$$5 = [args$$16, body$$1];
  } else {
    const thisArg$$4 = boundThis$$1[1];
    const boundThis$$2 = boundThis$$1[0];
    const isThisUsed = (0, _FableTransforms.deepExists)(function f$$4(_arg1$$2) {
      var id$$4;
      var $target$$38, id$$5;

      if (_arg1$$2.tag === 1) {
        if (id$$4 = _arg1$$2.fields[0], id$$4.Name === thisArg$$4.Name) {
          $target$$38 = 0;
          id$$5 = _arg1$$2.fields[0];
        } else {
          $target$$38 = 1;
        }
      } else {
        $target$$38 = 1;
      }

      switch ($target$$38) {
        case 0:
          {
            return true;
          }

        case 1:
          {
            return false;
          }
      }
    }, body$$1);

    if (!isThisUsed) {
      patternInput$$5 = [args$$16, body$$1];
    } else {
      const boundThisExpr = new _AST.Expr(1, "IdentExpr", new _AST.Ident(boundThis$$2, thisArg$$4.Type, thisArg$$4.Kind, thisArg$$4.IsMutable, thisArg$$4.IsCompilerGenerated, thisArg$$4.Range));
      const body$$2 = boundThis$$2 === "this" ? new _AST.Expr(15, "Let", (0, _Types.L)([thisArg$$4, boundThisExpr], (0, _Types.L)()), body$$1) : (0, _FableTransforms.replaceValues)((0, _Map.ofSeq)([[thisArg$$4.Name, boundThisExpr]], {
        Compare: _Util.comparePrimitives
      }), body$$1);
      patternInput$$5 = [args$$16, body$$2];
    }
  }

  const patternInput$$6 = com$$12.TransformFunction(ctx$$11, name$$4, patternInput$$5[0], patternInput$$5[1]);
  let args$$20;

  if (!hasSpread) {
    args$$20 = patternInput$$6[0];
  } else {
    const args$$19 = (0, _Array.reverse)(patternInput$$6[0], Array);
    const restEl = (0, _AST2.RestElement$$$$002Ector$$Z1AE20953)((0, _Array.head)(args$$19));
    args$$20 = (0, _Array.reverse)((0, _Array.append)([restEl], (0, _Array.tail)(args$$19), Array), Array);
  }

  if (patternInput$$6[1] instanceof _AST2.Expression) {
    const e$$14 = patternInput$$6[1];
    return [args$$20, (0, _AST2.BlockStatement$$$$002Ector$$Z886A72B)([(0, _AST2.ReturnStatement$$$$002Ector$$Z42439CB7)(e$$14)])];
  } else {
    const e$$13 = patternInput$$6[1];
    return [args$$20, e$$13];
  }
}

function Util$$$getUnionCaseName(uci) {
  return (0, _Option.defaultArg)((0, _FSharp2Fable.Helpers$$$unionCaseCompiledName)(uci), (0, _Symbols.FSharpUnionCase$$get_Name)(uci));
}

function Util$$$getUnionExprTag(r$$3, expr$$12) {
  return Util$$$getExpr(r$$3, expr$$12, Util$$$ofString("tag"));
}

function Util$$$getUnionExprField(r$$4, expr$$13, fieldIndex) {
  return Util$$$getExpr(r$$4, Util$$$getExpr(null, expr$$13, Util$$$ofString("fields")), Util$$$ofInt(fieldIndex));
}

function Util$$$wrapIntExpression(typ$$1, e$$15) {
  const matchValue$$3 = [e$$15, typ$$1];
  var $target$$39;

  if (matchValue$$3[0] instanceof _AST2.NumericLiteral) {
    $target$$39 = 0;
  } else if (matchValue$$3[1].tag === 7) {
    if (matchValue$$3[1].fields[0].tag === 0) {
      $target$$39 = 1;
    } else if (matchValue$$3[1].fields[0].tag === 2) {
      $target$$39 = 1;
    } else if (matchValue$$3[1].fields[0].tag === 4) {
      $target$$39 = 1;
    } else {
      $target$$39 = 2;
    }
  } else if (matchValue$$3[1].tag === 8) {
    if (matchValue$$3[1].fields[0].tag === 0) {
      $target$$39 = 1;
    } else {
      $target$$39 = 2;
    }
  } else {
    $target$$39 = 2;
  }

  switch ($target$$39) {
    case 0:
      {
        return e$$15;
      }

    case 1:
      {
        return (0, _AST2.BinaryExpression$$$$002Ector$$F065D52)(new _AST3.BinaryOperator(17, "BinaryOrBitwise"), e$$15, (0, _AST2.NumericLiteral$$$$002Ector$$Z64831D7)(0));
      }

    case 2:
      {
        return e$$15;
      }
  }
}

function Util$$$makeFunctionExpression(name$$5, args$$21, body$$5) {
  let id$$6;

  if (name$$5 == null) {
    id$$6 = null;
  } else {
    const name$$6 = name$$5;
    id$$6 = (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(name$$6);
  }

  let body$$7;

  if (body$$5 instanceof _AST2.Expression) {
    const e$$16 = body$$5;
    body$$7 = (0, _AST2.BlockStatement$$$$002Ector$$Z886A72B)([(0, _AST2.ReturnStatement$$$$002Ector$$Z42439CB7)(e$$16)]);
  } else {
    const body$$6 = body$$5;
    body$$7 = body$$6;
  }

  return (0, _AST2.FunctionExpression$$$$002Ector$$D5FC551)(args$$21, body$$7, null, null, id$$6);
}

function Util$$$optimizeTailCall(com$$13, ctx$$12, tc, args$$22) {
  ctx$$12.OptimizeTailCall();
  const zippedArgs = (0, _List.zip)(tc.Args, args$$22);
  let tempVars;

  const checkCrossRefs = function checkCrossRefs(acc, _arg1$$3) {
    checkCrossRefs: while (true) {
      var $target$$40, _arg, argId, rest;

      if (_arg1$$3.tail != null) {
        if (_arg1$$3.tail.tail == null) {
          $target$$40 = 0;
        } else {
          $target$$40 = 1;
          _arg = _arg1$$3.head[1];
          argId = _arg1$$3.head[0];
          rest = _arg1$$3.tail;
        }
      } else {
        $target$$40 = 0;
      }

      switch ($target$$40) {
        case 0:
          {
            return acc;
          }

        case 1:
          {
            acc = (0, _List.exists)(function predicate$$1($arg$$7) {
              return (0, _FableTransforms.deepExists)(function f$$5(_arg2) {
                if (_arg2.tag === 1) {
                  const i$$2 = _arg2.fields[0];
                  return argId === i$$2.Name;
                } else {
                  return false;
                }
              }, $arg$$7[1]);
            }, rest) ? (0, _Map.add)(argId, com$$13.GetUniqueVar(), acc) : acc;
            _arg1$$3 = rest;
            continue checkCrossRefs;
          }
      }
    }
  };

  tempVars = checkCrossRefs((0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }), zippedArgs);
  return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.append)((0, _Seq.collect)(function (matchValue$$4) {
      const arg$$4 = com$$13.TransformAsExpr(ctx$$12, matchValue$$4[1]);
      const matchValue$$5 = (0, _Map.tryFind)(matchValue$$4[0], tempVars);

      if (matchValue$$5 == null) {
        return (0, _Seq.singleton)((0, _AST2.ExpressionStatement$$$$002Ector$$Z42439CB7)(Util$$$assign(null, (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(matchValue$$4[0]), arg$$4)));
      } else {
        const tempVar = matchValue$$5;
        return (0, _Seq.singleton)(Util$$$varDeclaration((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(tempVar), false, arg$$4));
      }
    }, zippedArgs), (0, _Seq.delay)(function () {
      return (0, _Seq.append)((0, _Seq.collect)(function (matchValue$$6) {
        const activePatternResult69287 = matchValue$$6;
        return (0, _Seq.singleton)((0, _AST2.ExpressionStatement$$$$002Ector$$Z42439CB7)(Util$$$assign(null, (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(activePatternResult69287[0]), (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(activePatternResult69287[1]))));
      }, tempVars), (0, _Seq.delay)(function () {
        return (0, _Seq.singleton)((0, _AST2.ContinueStatement$$$$002Ector$$Z388DE073)((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(tc.Label)));
      }));
    }));
  }), Array);
}

function Util$$$transformImport(com$$14, ctx$$13, r$$5, selector, path, kind$$4) {
  const matchValue$$7 = [selector, path];
  var $target$$41, path$$1, selector$$1;

  if (matchValue$$7[0].tag === 0) {
    if (matchValue$$7[0].fields[0].tag === 5) {
      if (matchValue$$7[1].tag === 0) {
        if (matchValue$$7[1].fields[0].tag === 5) {
          $target$$41 = 0;
          path$$1 = matchValue$$7[1].fields[0].fields[0];
          selector$$1 = matchValue$$7[0].fields[0].fields[0];
        } else {
          $target$$41 = 1;
        }
      } else {
        $target$$41 = 1;
      }
    } else {
      $target$$41 = 1;
    }
  } else {
    $target$$41 = 1;
  }

  switch ($target$$41) {
    case 0:
      {
        let patternInput$$7;
        const parts$$1 = (0, _Array.toList)(selector$$1.split("."));
        patternInput$$7 = [(0, _List.head)(parts$$1), (0, _List.tail)(parts$$1)];
        return Util$$$getParts(patternInput$$7[1], com$$14.GetImportExpr(ctx$$13, patternInput$$7[0], path$$1, kind$$4));
      }

    case 1:
      {
        return Util$$$addErrorAndReturnNull(com$$14, r$$5, "Import expressions only accept string literals");
      }
  }
}

function Util$$$transformCast(com$$15, ctx$$14, t, e$$17) {
  var ent$$1;
  var $target$$42, ent$$2;

  if (t.tag === 16) {
    if (t.fields[1].tail != null) {
      if (t.fields[1].tail.tail == null) {
        if (ent$$1 = t.fields[0], (0, _Util.equals)((0, _Symbols.FSharpEntity$$get_TryFullName)(ent$$1), "System.Collections.Generic.IEnumerable`1")) {
          $target$$42 = 0;
          ent$$2 = t.fields[0];
        } else {
          $target$$42 = 1;
        }
      } else {
        $target$$42 = 1;
      }
    } else {
      $target$$42 = 1;
    }
  } else {
    $target$$42 = 1;
  }

  switch ($target$$42) {
    case 0:
      {
        const activePatternResult69302 = (0, _Replacements.$007CListLiteral$007C_$007C)(e$$17);

        if (activePatternResult69302 != null) {
          return Util$$$makeTypedArray(com$$15, ctx$$14, new _AST.Type(1, "Any"), new _AST.NewArrayKind(0, "ArrayValues", activePatternResult69302[0]));
        } else {
          return com$$15.TransformAsExpr(ctx$$14, e$$17);
        }
      }

    case 1:
      {
        return com$$15.TransformAsExpr(ctx$$14, e$$17);
      }
  }
}

function Util$$$transformDelayedResolution(com$$16, ctx$$15, r$$6, kind$$5) {
  if (kind$$5.tag === 1) {
    const expr$$17 = kind$$5.fields[0];
    const arity = kind$$5.fields[1] | 0;
    return com$$16.TransformAsExpr(ctx$$15, (0, _Replacements.curryExprAtRuntime)(arity, expr$$17));
  } else {
    const expr$$16 = kind$$5.fields[0];
    const caseRule = kind$$5.fields[1];
    return com$$16.TransformAsExpr(ctx$$15, (0, _Replacements.makePojo)(com$$16, r$$6, caseRule, expr$$16));
  }
}

function Util$$$hasRecursiveTypes(com$$17, acc$$1, t$$1) {
  Util$$$hasRecursiveTypes: while (true) {
    var $target$$43, argType, returnType, argTypes, returnType$$1, genArgs, gen, gen$$1, gen$$2, ent$$3, generics;

    if (t$$1.tag === 1) {
      $target$$43 = 0;
    } else if (t$$1.tag === 14) {
      $target$$43 = 0;
    } else if (t$$1.tag === 2) {
      $target$$43 = 0;
    } else if (t$$1.tag === 3) {
      $target$$43 = 0;
    } else if (t$$1.tag === 4) {
      $target$$43 = 0;
    } else if (t$$1.tag === 5) {
      $target$$43 = 0;
    } else if (t$$1.tag === 8) {
      $target$$43 = 0;
    } else if (t$$1.tag === 7) {
      $target$$43 = 0;
    } else if (t$$1.tag === 6) {
      $target$$43 = 0;
    } else if (t$$1.tag === 0) {
      $target$$43 = 0;
    } else if (t$$1.tag === 13) {
      if (t$$1.fields[0].tag === 1) {
        $target$$43 = 2;
        argTypes = t$$1.fields[0].fields[0];
        returnType$$1 = t$$1.fields[1];
      } else {
        $target$$43 = 1;
        argType = t$$1.fields[0].fields[0];
        returnType = t$$1.fields[1];
      }
    } else if (t$$1.tag === 10) {
      $target$$43 = 3;
      genArgs = t$$1.fields[0];
    } else if (t$$1.tag === 9) {
      $target$$43 = 4;
      gen = t$$1.fields[0];
    } else if (t$$1.tag === 11) {
      $target$$43 = 5;
      gen$$1 = t$$1.fields[0];
    } else if (t$$1.tag === 12) {
      $target$$43 = 6;
      gen$$2 = t$$1.fields[0];
    } else if (t$$1.tag === 16) {
      $target$$43 = 7;
      ent$$3 = t$$1.fields[0];
      generics = t$$1.fields[1];
    } else {
      $target$$43 = 0;
    }

    switch ($target$$43) {
      case 0:
        {
          return false;
        }

      case 1:
        {
          if (Util$$$hasRecursiveTypes(com$$17, acc$$1, argType)) {
            return true;
          } else {
            com$$17 = com$$17;
            acc$$1 = acc$$1;
            t$$1 = returnType;
            continue Util$$$hasRecursiveTypes;
          }
        }

      case 2:
        {
          if ((0, _List.exists)(function (t$$2) {
            return Util$$$hasRecursiveTypes(com$$17, acc$$1, t$$2);
          }, argTypes)) {
            return true;
          } else {
            com$$17 = com$$17;
            acc$$1 = acc$$1;
            t$$1 = returnType$$1;
            continue Util$$$hasRecursiveTypes;
          }
        }

      case 3:
        {
          return (0, _List.exists)(function (t$$3) {
            return Util$$$hasRecursiveTypes(com$$17, acc$$1, t$$3);
          }, genArgs);
        }

      case 4:
        {
          com$$17 = com$$17;
          acc$$1 = acc$$1;
          t$$1 = gen;
          continue Util$$$hasRecursiveTypes;
        }

      case 5:
        {
          com$$17 = com$$17;
          acc$$1 = acc$$1;
          t$$1 = gen$$1;
          continue Util$$$hasRecursiveTypes;
        }

      case 6:
        {
          com$$17 = com$$17;
          acc$$1 = acc$$1;
          t$$1 = gen$$2;
          continue Util$$$hasRecursiveTypes;
        }

      case 7:
        {
          const fullname = (0, _FSharp2Fable.Helpers$$$getEntityFullName)(ent$$3);

          if ((0, _Set.contains)(fullname, acc$$1)) {
            return true;
          } else {
            const acc$$2 = (0, _Set.add)(fullname, acc$$1);

            if ((0, _List.exists)(function (t$$4) {
              return Util$$$hasRecursiveTypes(com$$17, acc$$2, t$$4);
            }, generics) ? true : (0, _Symbols.FSharpEntity$$get_IsFSharpRecord)(ent$$3) ? (0, _Seq.exists)(function predicate$$2(fi) {
              return Util$$$hasRecursiveTypes(com$$17, acc$$2, (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$17, (0, _Map.empty)({
                Compare: _Util.comparePrimitives
              }), (0, _Symbols.FSharpField$$get_FieldType)(fi)));
            }, (0, _Symbols.FSharpEntity$$get_FSharpFields)(ent$$3)) : false) {
              return true;
            } else if ((0, _Symbols.FSharpEntity$$get_IsFSharpUnion)(ent$$3)) {
              return (0, _Seq.exists)(function predicate$$4(uci$$1) {
                return (0, _Seq.exists)(function predicate$$3(fi$$1) {
                  return Util$$$hasRecursiveTypes(com$$17, acc$$2, (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$17, (0, _Map.empty)({
                    Compare: _Util.comparePrimitives
                  }), (0, _Symbols.FSharpField$$get_FieldType)(fi$$1)));
                }, (0, _Symbols.FSharpUnionCase$$get_UnionCaseFields)(uci$$1));
              }, (0, _Symbols.FSharpEntity$$get_UnionCases)(ent$$3));
            } else {
              return false;
            }
          }
        }
    }
  }
}

function Util$$$transformTypeInfo(com$$18, ctx$$16, r$$7, knownTypes, t$$7) {
  var value$$4;

  const foldAndMap = function foldAndMap(f$$6, oldState, oldSeq) {
    const patternInput$$9 = (0, _Seq.foldBack)(function folder(item, tupledArg$$2) {
      const patternInput$$8 = f$$6(tupledArg$$2[0], item);
      return [patternInput$$8[0], (0, _Types.L)(patternInput$$8[1], tupledArg$$2[1])];
    }, oldSeq, [oldState, (0, _Types.L)()]);
    return [patternInput$$9[0], (0, _Array.ofList)(patternInput$$9[1], Array)];
  };

  const error$$3 = function error$$3(knownTypes$$1, msg) {
    return [knownTypes$$1, Util$$$addErrorAndReturnNull(com$$18, r$$7, msg)];
  };

  const primitiveTypeInfo = function primitiveTypeInfo(knownTypes$$2, name$$7) {
    return [knownTypes$$2, Util$$$coreValue(com$$18, ctx$$16, "Reflection", name$$7)];
  };

  const nonGenericTypeInfo = function nonGenericTypeInfo(knownTypes$$3, fullname$$1) {
    return (0, _Prelude.Tuple$$$make2)(knownTypes$$3, Util$$$coreLibCall(com$$18, ctx$$16, "Reflection", "type", [(0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(fullname$$1)]));
  };

  const resolveGenerics = function resolveGenerics(knownTypes$$4, generics$$1) {
    return foldAndMap(function (knownTypes$$5, genArg) {
      return Util$$$transformTypeInfo(com$$18, ctx$$16, r$$7, knownTypes$$5, genArg);
    }, knownTypes$$4, generics$$1);
  };

  const genericTypeInfo = function genericTypeInfo(knownTypes$$6, name$$8, genArgs$$1) {
    const patternInput$$10 = resolveGenerics(knownTypes$$6, genArgs$$1);
    return [patternInput$$10[0], Util$$$coreLibCall(com$$18, ctx$$16, "Reflection", name$$8, patternInput$$10[1])];
  };

  const resolveType = function resolveType(argMap, knownTypes$$8, t$$8) {
    return Util$$$transformTypeInfo(com$$18, ctx$$16, r$$7, knownTypes$$8, (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$18, argMap, t$$8));
  };

  const transformEntityInfo = function transformEntityInfo(knownTypes$$9, ent$$4, fullname$$2, generics$$2) {
    const fullnameExpr = (0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(fullname$$2);
    let genMap;
    const argNames = (0, _Seq.map)(function mapping$$1(x$$1) {
      return (0, _Symbols.FSharpGenericParameter$$get_Name)(x$$1);
    }, (0, _Symbols.FSharpEntity$$get_GenericParameters)(ent$$4));
    genMap = (0, _Map.ofSeq)((0, _Seq.zip)(argNames, generics$$2), {
      Compare: _Util.comparePrimitives
    });
    const patternInput$$11 = resolveGenerics(knownTypes$$9, generics$$2);
    const generics$$4 = (0, _AST2.ArrowFunctionExpression$$$$002Ector$$Z732484B9)([], (0, _AST2.ArrayExpression$$$$002Ector$$Z586268D1)(patternInput$$11[1]));

    if ((0, _Symbols.FSharpEntity$$get_IsFSharpRecord)(ent$$4)) {
      const patternInput$$13 = foldAndMap(function (knownTypes$$11, x$$2) {
        const patternInput$$12 = resolveType(genMap, knownTypes$$11, (0, _Symbols.FSharpField$$get_FieldType)(x$$2));
        return [patternInput$$12[0], (0, _AST2.ArrayExpression$$$$002Ector$$Z586268D1)([(0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)((0, _Symbols.FSharpField$$get_Name)(x$$2)), patternInput$$12[1]])];
      }, patternInput$$11[0], (0, _Symbols.FSharpEntity$$get_FSharpFields)(ent$$4));
      const fields$$1 = (0, _AST2.ArrowFunctionExpression$$$$002Ector$$Z732484B9)([], (0, _AST2.ArrayExpression$$$$002Ector$$Z586268D1)(patternInput$$13[1]));
      return [patternInput$$13[0], Util$$$coreLibCall(com$$18, ctx$$16, "Reflection", "record", [fullnameExpr, generics$$4, Util$$$entityRefMaybeImported(com$$18, ctx$$16, ent$$4), fields$$1])];
    } else if ((0, _Symbols.FSharpEntity$$get_IsFSharpUnion)(ent$$4)) {
      const patternInput$$15 = foldAndMap(function (knownTypes$$14, uci$$2) {
        const patternInput$$14 = foldAndMap(function (knownTypes$$15, fi$$2) {
          return resolveType(genMap, knownTypes$$15, (0, _Symbols.FSharpField$$get_FieldType)(fi$$2));
        }, knownTypes$$14, (0, _Symbols.FSharpUnionCase$$get_UnionCaseFields)(uci$$2));
        const caseInfo = patternInput$$14[1].length === 0 ? (0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(Util$$$getUnionCaseName(uci$$2)) : (0, _AST2.ArrayExpression$$$$002Ector$$Z586268D1)([(0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(Util$$$getUnionCaseName(uci$$2)), (0, _AST2.ArrayExpression$$$$002Ector$$Z586268D1)(patternInput$$14[1])]);
        return [patternInput$$14[0], caseInfo];
      }, patternInput$$11[0], (0, _Symbols.FSharpEntity$$get_UnionCases)(ent$$4));
      const cases$$1 = (0, _AST2.ArrowFunctionExpression$$$$002Ector$$Z732484B9)([], (0, _AST2.ArrayExpression$$$$002Ector$$Z586268D1)(patternInput$$15[1]));
      return [patternInput$$15[0], Util$$$coreLibCall(com$$18, ctx$$16, "Reflection", "union", [fullnameExpr, generics$$4, Util$$$entityRefMaybeImported(com$$18, ctx$$16, ent$$4), cases$$1])];
    } else {
      return [patternInput$$11[0], Util$$$coreLibCall(com$$18, ctx$$16, "Reflection", "type", [fullnameExpr, generics$$4])];
    }
  };

  var $target$$47, kind$$6, argType$$1, returnType$$2, argTypes$$1, returnType$$3, genArgs$$2, gen$$3, gen$$4, gen$$5, ent$$5, generics$$5;

  if (t$$7.tag === 1) {
    $target$$47 = 0;
  } else if (t$$7.tag === 14) {
    $target$$47 = 1;
  } else if (t$$7.tag === 2) {
    $target$$47 = 2;
  } else if (t$$7.tag === 3) {
    $target$$47 = 3;
  } else if (t$$7.tag === 4) {
    $target$$47 = 4;
  } else if (t$$7.tag === 5) {
    $target$$47 = 5;
  } else if (t$$7.tag === 8) {
    if (t$$7.fields[0].tag === 0) {
      $target$$47 = 6;
    } else {
      $target$$47 = 5;
    }
  } else if (t$$7.tag === 7) {
    $target$$47 = 7;
    kind$$6 = t$$7.fields[0];
  } else if (t$$7.tag === 13) {
    if (t$$7.fields[0].tag === 1) {
      $target$$47 = 9;
      argTypes$$1 = t$$7.fields[0].fields[0];
      returnType$$3 = t$$7.fields[1];
    } else {
      $target$$47 = 8;
      argType$$1 = t$$7.fields[0].fields[0];
      returnType$$2 = t$$7.fields[1];
    }
  } else if (t$$7.tag === 10) {
    $target$$47 = 10;
    genArgs$$2 = t$$7.fields[0];
  } else if (t$$7.tag === 9) {
    $target$$47 = 11;
    gen$$3 = t$$7.fields[0];
  } else if (t$$7.tag === 11) {
    $target$$47 = 12;
    gen$$4 = t$$7.fields[0];
  } else if (t$$7.tag === 12) {
    $target$$47 = 13;
    gen$$5 = t$$7.fields[0];
  } else if (t$$7.tag === 6) {
    $target$$47 = 14;
  } else if (t$$7.tag === 0) {
    $target$$47 = 15;
  } else if (t$$7.tag === 16) {
    $target$$47 = 16;
    ent$$5 = t$$7.fields[0];
    generics$$5 = t$$7.fields[1];
  } else {
    $target$$47 = 0;
  }

  switch ($target$$47) {
    case 0:
      {
        return primitiveTypeInfo(knownTypes, "obj");
      }

    case 1:
      {
        (0, _Replacements.genericTypeInfoError)(com$$18, (0, _Types.L)(), r$$7);
        return [knownTypes, (0, _AST2.NullLiteral$$$$002Ector$$Z2370DF4E)()];
      }

    case 2:
      {
        return primitiveTypeInfo(knownTypes, "unit");
      }

    case 3:
      {
        return primitiveTypeInfo(knownTypes, "bool");
      }

    case 4:
      {
        return primitiveTypeInfo(knownTypes, "char");
      }

    case 5:
      {
        return primitiveTypeInfo(knownTypes, "string");
      }

    case 6:
      {
        return primitiveTypeInfo(knownTypes, "int32");
      }

    case 7:
      {
        return primitiveTypeInfo(knownTypes, kind$$6.tag === 1 ? "uint8" : kind$$6.tag === 2 ? "int16" : kind$$6.tag === 3 ? "uint16" : kind$$6.tag === 4 ? "int32" : kind$$6.tag === 5 ? "uint32" : kind$$6.tag === 6 ? "float32" : kind$$6.tag === 7 ? "float64" : kind$$6.tag === 8 ? "decimal" : "int8");
      }

    case 8:
      {
        return genericTypeInfo(knownTypes, "lambda", [argType$$1, returnType$$2]);
      }

    case 9:
      {
        return genericTypeInfo(knownTypes, "delegate", (0, _List.append)(argTypes$$1, (0, _Types.L)(returnType$$3, (0, _Types.L)())));
      }

    case 10:
      {
        return genericTypeInfo(knownTypes, "tuple", genArgs$$2);
      }

    case 11:
      {
        return genericTypeInfo(knownTypes, "option", [gen$$3]);
      }

    case 12:
      {
        return genericTypeInfo(knownTypes, "array", [gen$$4]);
      }

    case 13:
      {
        return genericTypeInfo(knownTypes, "list", [gen$$5]);
      }

    case 14:
      {
        return nonGenericTypeInfo(knownTypes, "System.Text.RegularExpressions.Regex");
      }

    case 15:
      {
        return nonGenericTypeInfo(knownTypes, "System.Type");
      }

    case 16:
      {
        const fullname$$3 = (0, _Option.defaultArg)((0, _Symbols.FSharpEntity$$get_TryFullName)(ent$$5), "UNKNOWN");
        const fullnameWithGenerics = (0, _Transforms.AST$$$getTypeFullName)(false, t$$7);

        if (knownTypes != null) {
          const knownTypesValue = knownTypes;
          const matchValue$$8 = (0, _Map.tryFind)(fullnameWithGenerics, knownTypesValue);

          if (matchValue$$8 == null) {
            const ident$$1 = com$$18.GetUniqueVar("type");
            const knownTypes$$18 = (0, _Map.add)(fullnameWithGenerics, [ident$$1, (0, _AST2.NullLiteral$$$$002Ector$$Z2370DF4E)()], knownTypesValue);
            const patternInput$$16 = transformEntityInfo(knownTypes$$18, ent$$5, fullname$$3, generics$$5);
            return [(0, _Option.defaultArg)(patternInput$$16[0], null, (value$$4 = [ident$$1, patternInput$$16[1]], function (table) {
              return (0, _Map.add)(fullnameWithGenerics, value$$4, table);
            })), (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(ident$$1)];
          } else {
            const ident = matchValue$$8[0];
            return [knownTypes, (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(ident)];
          }
        } else {
          return transformEntityInfo(knownTypes, ent$$5, fullname$$3, generics$$5);
        }
      }
  }
}

function Util$$$transformValue(com$$19, ctx$$17, value$$5) {
  var tail, head;

  switch (value$$5.tag) {
    case 1:
      {
        return (0, _AST2.NullLiteral$$$$002Ector$$Z2370DF4E)();
      }

    case 2:
      {
        return (0, _AST2.NullLiteral$$$$002Ector$$Z2370DF4E)();
      }

    case 3:
      {
        const x$$3 = value$$5.fields[0];
        return (0, _AST2.BooleanLiteral$$$$002Ector$$3426B098)(x$$3);
      }

    case 4:
      {
        const x$$4 = value$$5.fields[0];
        return (0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(x$$4);
      }

    case 5:
      {
        const x$$5 = value$$5.fields[0];
        return (0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(x$$5);
      }

    case 6:
      {
        const x$$6 = value$$5.fields[0];

        if (x$$6 < 0) {
          return (0, _AST2.UnaryExpression$$$$002Ector$$Z6A61F878)(new _AST3.UnaryOperator(0, "UnaryMinus"), (0, _AST2.NumericLiteral$$$$002Ector$$Z64831D7)(x$$6 * -1));
        } else {
          return (0, _AST2.NumericLiteral$$$$002Ector$$Z64831D7)(x$$6);
        }
      }

    case 7:
      {
        const source$$7 = value$$5.fields[0];
        const flags = value$$5.fields[1];
        return (0, _AST2.RegExpLiteral$$$$002Ector$$Z60844438)(source$$7, flags);
      }

    case 10:
      {
        const typ$$2 = value$$5.fields[1];
        const arrayKind$$1 = value$$5.fields[0];
        return Util$$$makeTypedArray(com$$19, ctx$$17, typ$$2, arrayKind$$1);
      }

    case 12:
      {
        const vals = value$$5.fields[0];
        return Util$$$makeTypedArray(com$$19, ctx$$17, new _AST.Type(1, "Any"), new _AST.NewArrayKind(0, "ArrayValues", vals));
      }

    case 11:
      {
        const headAndTail = value$$5.fields[0];
        return Util$$$coreLibCall(com$$19, ctx$$17, "Types", "L", headAndTail != null ? (tail = com$$19.TransformAsExpr(ctx$$17, headAndTail[1]), (head = com$$19.TransformAsExpr(ctx$$17, headAndTail[0]), [head, tail])) : []);
      }

    case 9:
      {
        const value$$6 = value$$5.fields[0];
        const t$$11 = value$$5.fields[1];

        if (value$$6 == null) {
          return (0, _AST2.NullLiteral$$$$002Ector$$Z2370DF4E)();
        } else {
          const e$$25 = com$$19.TransformAsExpr(ctx$$17, value$$6);

          if ((0, _Transforms.AST$$$mustWrapOption)(t$$11)) {
            return Util$$$coreLibCall(com$$19, ctx$$17, "Option", "some", [e$$25]);
          } else {
            return e$$25;
          }
        }
      }

    case 8:
      {
        const kind$$7 = value$$5.fields[0];
        var $target$$48, x$$7;

        if (kind$$7.tag === 1) {
          $target$$48 = 0;
          x$$7 = kind$$7.fields[0];
        } else {
          $target$$48 = 0;
          x$$7 = kind$$7.fields[0];
        }

        switch ($target$$48) {
          case 0:
            {
              return com$$19.TransformAsExpr(ctx$$17, x$$7);
            }
        }
      }

    case 13:
      {
        const values = value$$5.fields[0];
        const ent$$6 = value$$5.fields[1];
        const consRef = Util$$$entityRefMaybeImported(com$$19, ctx$$17, ent$$6);
        const values$$1 = (0, _Prelude.List$$$mapToArray)(function (x$$8) {
          return com$$19.TransformAsExpr(ctx$$17, x$$8);
        }, values);
        return (0, _AST2.NewExpression$$$$002Ector$$67485474)(consRef, values$$1);
      }

    case 14:
      {
        const values$$2 = value$$5.fields[0];
        const uci$$3 = value$$5.fields[1];
        const ent$$7 = value$$5.fields[2];

        if ((0, _FSharp2Fable.Helpers$$$tryFindAtt)("Fable.Core.EraseAttribute", (0, _Symbols.FSharpUnionCase$$get_Attributes)(uci$$3)) == null) {
          const name$$9 = Util$$$getUnionCaseName(uci$$3);
          const consRef$$1 = Util$$$entityRefMaybeImported(com$$19, ctx$$17, ent$$7);
          const tag = (0, _FSharp2Fable.Helpers$$$unionCaseTag)(ent$$7, uci$$3) | 0;
          const values$$3 = (0, _List.map)(function (x$$9) {
            return com$$19.TransformAsExpr(ctx$$17, x$$9);
          }, values$$2);
          return (0, _AST2.NewExpression$$$$002Ector$$67485474)(consRef$$1, (0, _Array.ofList)((0, _Types.L)(Util$$$ofInt(tag), (0, _Types.L)(Util$$$ofString(name$$9), values$$3)), Array));
        } else {
          return Util$$$makeTypedArray(com$$19, ctx$$17, new _AST.Type(1, "Any"), new _AST.NewArrayKind(0, "ArrayValues", values$$2));
        }
      }

    case 15:
      {
        const e$$26 = value$$5.fields[0];
        return com$$19.TransformAsExpr(ctx$$17, e$$26);
      }

    default:
      {
        const t$$10 = value$$5.fields[0];
        const r$$8 = value$$5.fields[1];

        if (Util$$$hasRecursiveTypes(com$$19, (0, _Set.empty)({
          Compare: _Util.comparePrimitives
        }), t$$10)) {
          const patternInput$$17 = Util$$$transformTypeInfo(com$$19, ctx$$17, r$$8, (0, _Map.empty)({
            Compare: _Util.comparePrimitives
          }), t$$10);
          const varDeclarations = (0, _List.ofSeq)((0, _Seq.concat)((0, _List.ofArray)((0, _Option.defaultArg)((0, _Option.defaultArg)(patternInput$$17[0], null, function mapping$$4(source$$5) {
            return (0, _Seq.map)(function mapping$$3(_arg1$$4) {
              const activePatternResult69365 = _arg1$$4;
              const typeInfo$$3 = activePatternResult69365[1][1];
              const ident$$2 = activePatternResult69365[1][0];
              return (0, _AST2.VariableDeclaration$$$$002Ector$$26195FF1)(Util$$$toPattern((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(ident$$2)), typeInfo$$3, new _AST2.VariableDeclarationKind(2, "Const"));
            }, source$$5);
          }), [], function ($x$$20) {
            return [$x$$20];
          }))));
          const block = (0, _AST2.BlockStatement$$$$002Ector$$Z886A72B)((0, _Array.ofList)((0, _List.append)(varDeclarations, (0, _Types.L)((0, _AST2.ReturnStatement$$$$002Ector$$Z42439CB7)(patternInput$$17[1]), (0, _Types.L)())), Array));
          return (0, _AST2.CallExpression$$$$002Ector$$67485474)((0, _AST2.FunctionExpression$$$$002Ector$$D5FC551)([], block), []);
        } else {
          return Util$$$transformTypeInfo(com$$19, ctx$$17, r$$8, null, t$$10)[1];
        }
      }
  }
}

function Util$$$transformObjectExpr(com$$23, ctx$$21, members, boundThis$$3, baseCall) {
  const makeObjMethod = function makeObjMethod(kind$$8, prop$$1, computed$$3, hasSpread$$1, args$$27, body$$8) {
    const patternInput$$18 = Util$$$prepareBoundThis(boundThis$$3, args$$27);
    const patternInput$$19 = Util$$$getMemberArgsAndBody(com$$23, ctx$$21, null, patternInput$$18[0], patternInput$$18[1], hasSpread$$1, body$$8);
    return (0, _AST2.ObjectMethod$$$$002Ector$$486CEB01)(kind$$8, prop$$1, patternInput$$19[0], patternInput$$19[1], computed$$3);
  };

  const pojo = (0, _AST2.ObjectExpression$$$$002Ector$$Z988B729)((0, _Array.ofList)((0, _List.choose)(function chooser(_arg1$$5) {
    const kind$$9 = _arg1$$5.fields[2];
    const key = _arg1$$5.fields[0];
    const expr$$18 = _arg1$$5.fields[1];
    const matchValue$$10 = [kind$$9, expr$$18];
    var $target$$49, args$$30, body$$10, value$$7, args$$32, body$$11, hasSpread$$2, args$$33, body$$12, args$$34, body$$13, args$$35, body$$14, kind$$10;

    if (matchValue$$10[0].tag === 1) {
      if (matchValue$$10[1].tag === 5) {
        if (matchValue$$10[1].fields[0].tag === 1) {
          $target$$49 = 2;
          args$$32 = matchValue$$10[1].fields[0].fields[0];
          body$$11 = matchValue$$10[1].fields[1];
          hasSpread$$2 = matchValue$$10[0].fields[0];
        } else {
          $target$$49 = 6;
          kind$$10 = matchValue$$10[0];
        }
      } else {
        $target$$49 = 6;
        kind$$10 = matchValue$$10[0];
      }
    } else if (matchValue$$10[0].tag === 4) {
      if (matchValue$$10[1].tag === 5) {
        if (matchValue$$10[1].fields[0].tag === 1) {
          $target$$49 = 3;
          args$$33 = matchValue$$10[1].fields[0].fields[0];
          body$$12 = matchValue$$10[1].fields[1];
        } else {
          $target$$49 = 6;
          kind$$10 = matchValue$$10[0];
        }
      } else {
        $target$$49 = 6;
        kind$$10 = matchValue$$10[0];
      }
    } else if (matchValue$$10[0].tag === 2) {
      if (matchValue$$10[1].tag === 5) {
        if (matchValue$$10[1].fields[0].tag === 1) {
          $target$$49 = 4;
          args$$34 = matchValue$$10[1].fields[0].fields[0];
          body$$13 = matchValue$$10[1].fields[1];
        } else {
          $target$$49 = 6;
          kind$$10 = matchValue$$10[0];
        }
      } else {
        $target$$49 = 6;
        kind$$10 = matchValue$$10[0];
      }
    } else if (matchValue$$10[0].tag === 3) {
      if (matchValue$$10[1].tag === 5) {
        if (matchValue$$10[1].fields[0].tag === 1) {
          $target$$49 = 5;
          args$$35 = matchValue$$10[1].fields[0].fields[0];
          body$$14 = matchValue$$10[1].fields[1];
        } else {
          $target$$49 = 6;
          kind$$10 = matchValue$$10[0];
        }
      } else {
        $target$$49 = 6;
        kind$$10 = matchValue$$10[0];
      }
    } else if (matchValue$$10[1].tag === 5) {
      if (matchValue$$10[1].fields[0].tag === 1) {
        $target$$49 = 0;
        args$$30 = matchValue$$10[1].fields[0].fields[0];
        body$$10 = matchValue$$10[1].fields[1];
      } else {
        $target$$49 = 1;
        value$$7 = com$$23.TransformAsExpr(ctx$$21, matchValue$$10[1]);
      }
    } else {
      $target$$49 = 1;
      value$$7 = com$$23.TransformAsExpr(ctx$$21, matchValue$$10[1]);
    }

    switch ($target$$49) {
      case 0:
        {
          const patternInput$$20 = Util$$$getMemberArgsAndBody(com$$23, ctx$$21, null, null, args$$30, false, body$$10);
          const patternInput$$21 = Util$$$memberFromExpr(com$$23, ctx$$21, key);
          return (0, _AST2.ObjectMethod$$$$002Ector$$486CEB01)(new _AST2.ObjectMethodKind(2, "ObjectMeth"), patternInput$$21[0], patternInput$$20[0], patternInput$$20[1], patternInput$$21[1]);
        }

      case 1:
        {
          const patternInput$$22 = Util$$$memberFromExpr(com$$23, ctx$$21, key);
          return (0, _AST2.ObjectProperty$$$$002Ector$$Z73E2480E)(patternInput$$22[0], value$$7, null, patternInput$$22[1]);
        }

      case 2:
        {
          const patternInput$$23 = key.tag === 0 ? key.fields[0].tag === 5 ? key.fields[0].fields[0] === "ToString" ? Util$$$memberFromName("toString") : Util$$$memberFromExpr(com$$23, ctx$$21, key) : Util$$$memberFromExpr(com$$23, ctx$$21, key) : Util$$$memberFromExpr(com$$23, ctx$$21, key);
          return makeObjMethod(new _AST2.ObjectMethodKind(2, "ObjectMeth"), patternInput$$23[0], patternInput$$23[1], hasSpread$$2, args$$32, body$$11);
        }

      case 3:
        {
          const prop$$5 = Util$$$get(null, (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)("Symbol"), "iterator");
          return makeObjMethod(new _AST2.ObjectMethodKind(2, "ObjectMeth"), prop$$5, true, false, args$$33, (0, _Replacements.enumerator2iterator)(body$$12));
        }

      case 4:
        {
          const patternInput$$24 = Util$$$memberFromExpr(com$$23, ctx$$21, key);
          return makeObjMethod(new _AST2.ObjectMethodKind(0, "ObjectGetter"), patternInput$$24[0], patternInput$$24[1], false, args$$34, body$$13);
        }

      case 5:
        {
          const patternInput$$25 = Util$$$memberFromExpr(com$$23, ctx$$21, key);
          return makeObjMethod(new _AST2.ObjectMethodKind(1, "ObjectSetter"), patternInput$$25[0], patternInput$$25[1], false, args$$35, body$$14);
        }

      case 6:
        {
          (0, _Transforms.Log$$$addError)(com$$23, (0, _Types.L)(), null, (0, _String.toText)((0, _String.printf)("Object member has kind %A but value is not a function"))(kind$$10));
          return null;
        }
    }
  }, members), Array));

  if (baseCall == null) {
    return pojo;
  } else {
    const baseCall$$1 = com$$23.TransformAsExpr(ctx$$21, baseCall);
    return Util$$$coreUtil(com$$23, ctx$$21, "extend", [baseCall$$1, pojo]);
  }
}

function Util$$$transformArgs(com$$27, ctx$$25, args$$36, spread) {
  const matchValue$$11 = [args$$36, spread];
  var $target$$50, args$$37, args$$38, args$$39;

  if (matchValue$$11[0].tail != null) {
    const activePatternResult69409 = (0, _Transforms.AST$$$$007CMaybeCasted$007C)(matchValue$$11[0].head);

    if (activePatternResult69409.tag === 0) {
      if (activePatternResult69409.fields[0].tag === 2) {
        if (matchValue$$11[0].tail.tail == null) {
          $target$$50 = 0;
        } else if (matchValue$$11[1].tag === 1) {
          $target$$50 = 2;
          args$$38 = matchValue$$11[0];
        } else {
          $target$$50 = 3;
          args$$39 = matchValue$$11[0];
        }
      } else if (activePatternResult69409.fields[0].tag === 12) {
        if (matchValue$$11[0].tail.tail == null) {
          if (matchValue$$11[1].tag === 2) {
            $target$$50 = 1;
            args$$37 = activePatternResult69409.fields[0].fields[0];
          } else if (matchValue$$11[1].tag === 1) {
            $target$$50 = 2;
            args$$38 = matchValue$$11[0];
          } else {
            $target$$50 = 3;
            args$$39 = matchValue$$11[0];
          }
        } else if (matchValue$$11[1].tag === 1) {
          $target$$50 = 2;
          args$$38 = matchValue$$11[0];
        } else {
          $target$$50 = 3;
          args$$39 = matchValue$$11[0];
        }
      } else if (matchValue$$11[1].tag === 1) {
        $target$$50 = 2;
        args$$38 = matchValue$$11[0];
      } else {
        $target$$50 = 3;
        args$$39 = matchValue$$11[0];
      }
    } else if (matchValue$$11[1].tag === 1) {
      $target$$50 = 2;
      args$$38 = matchValue$$11[0];
    } else {
      $target$$50 = 3;
      args$$39 = matchValue$$11[0];
    }
  } else {
    $target$$50 = 0;
  }

  switch ($target$$50) {
    case 0:
      {
        return (0, _Types.L)();
      }

    case 1:
      {
        return (0, _List.map)(function (e$$33) {
          return com$$27.TransformAsExpr(ctx$$25, e$$33);
        }, args$$37);
      }

    case 2:
      {
        const matchValue$$12 = (0, _List.reverse)(args$$38);
        var $target$$51, rest$$1, spreadArgs, last, rest$$3;

        if (matchValue$$12.tail != null) {
          if (matchValue$$12.head.tag === 0) {
            if (matchValue$$12.head.fields[0].tag === 10) {
              if (matchValue$$12.head.fields[0].fields[0].tag === 0) {
                $target$$51 = 1;
                rest$$1 = matchValue$$12.tail;
                spreadArgs = matchValue$$12.head.fields[0].fields[0].fields[0];
              } else {
                $target$$51 = 2;
                last = matchValue$$12.head;
                rest$$3 = matchValue$$12.tail;
              }
            } else {
              $target$$51 = 2;
              last = matchValue$$12.head;
              rest$$3 = matchValue$$12.tail;
            }
          } else {
            $target$$51 = 2;
            last = matchValue$$12.head;
            rest$$3 = matchValue$$12.tail;
          }
        } else {
          $target$$51 = 0;
        }

        switch ($target$$51) {
          case 0:
            {
              return (0, _Types.L)();
            }

          case 1:
            {
              const rest$$2 = (0, _List.map)(function mapping$$5(e$$34) {
                return com$$27.TransformAsExpr(ctx$$25, e$$34);
              }, (0, _List.reverse)(rest$$1));
              return (0, _List.append)(rest$$2, (0, _List.map)(function (e$$35) {
                return com$$27.TransformAsExpr(ctx$$25, e$$35);
              }, spreadArgs));
            }

          case 2:
            {
              const rest$$4 = (0, _List.map)(function mapping$$6(e$$36) {
                return com$$27.TransformAsExpr(ctx$$25, e$$36);
              }, (0, _List.reverse)(rest$$3));
              return (0, _List.append)(rest$$4, (0, _Types.L)((0, _AST2.SpreadElement$$$$002Ector$$Z42439CB7)(com$$27.TransformAsExpr(ctx$$25, last)), (0, _Types.L)()));
            }
        }
      }

    case 3:
      {
        return (0, _List.map)(function (e$$37) {
          return com$$27.TransformAsExpr(ctx$$25, e$$37);
        }, args$$39);
      }
  }
}

function Util$$$resolveExpr(t$$12, strategy, babelExpr) {
  if (strategy != null) {
    if (strategy.tag === 1) {
      return (0, _AST2.ExpressionStatement$$$$002Ector$$Z42439CB7)(Util$$$assign(null, strategy.fields[0], babelExpr));
    } else if (strategy.tag === 2) {
      return (0, _AST2.ExpressionStatement$$$$002Ector$$Z42439CB7)(Util$$$assign(null, strategy.fields[0], babelExpr));
    } else {
      return (0, _AST2.ReturnStatement$$$$002Ector$$Z42439CB7)(Util$$$wrapIntExpression(t$$12, babelExpr));
    }
  } else {
    return (0, _AST2.ExpressionStatement$$$$002Ector$$Z42439CB7)(babelExpr);
  }
}

function Util$$$transformOperation(com$$28, ctx$$26, range$$5, opKind) {
  var thisIdent, membExpr$$1, baseEntity;

  switch (opKind.tag) {
    case 4:
      {
        const right$$1 = com$$28.TransformAsExpr(ctx$$26, opKind.fields[2]);
        const op$$1 = opKind.fields[0];
        const left$$4 = com$$28.TransformAsExpr(ctx$$26, opKind.fields[1]);
        return (0, _AST2.BinaryExpression$$$$002Ector$$F065D52)(op$$1, left$$4, right$$1, range$$5);
      }

    case 5:
      {
        const right$$2 = com$$28.TransformAsExpr(ctx$$26, opKind.fields[2]);
        const op$$2 = opKind.fields[0];
        const left$$5 = com$$28.TransformAsExpr(ctx$$26, opKind.fields[1]);
        return (0, _AST2.LogicalExpression$$$$002Ector$$6A05FB7E)(op$$2, left$$5, right$$2, range$$5);
      }

    case 2:
      {
        const emit = opKind.fields[0];
        const argInfo = opKind.fields[1];

        if (argInfo == null) {
          return Util$$$macroExpression(range$$5, emit, (0, _Types.L)());
        } else {
          const argInfo$$1 = argInfo;
          const args$$40 = Util$$$transformArgs(com$$28, ctx$$26, argInfo$$1.Args, argInfo$$1.Spread);

          if (argInfo$$1.ThisArg == null) {
            return Util$$$macroExpression(range$$5, emit, args$$40);
          } else {
            const thisArg$$5 = com$$28.TransformAsExpr(ctx$$26, argInfo$$1.ThisArg);
            return Util$$$macroExpression(range$$5, emit, (0, _Types.L)(thisArg$$5, args$$40));
          }
        }
      }

    case 0:
      {
        const kind$$11 = opKind.fields[0];
        const argInfo$$2 = opKind.fields[1];
        const args$$41 = Util$$$transformArgs(com$$28, ctx$$26, argInfo$$2.Args, argInfo$$2.Spread);

        switch (kind$$11.tag) {
          case 1:
            {
              const funcExpr$$1 = com$$28.TransformAsExpr(ctx$$26, kind$$11.fields[0]);

              if (argInfo$$2.IsBaseOrSelfConstructorCall) {
                let thisArg$$7;

                if (argInfo$$2.ThisArg == null) {
                  thisArg$$7 = Util$$$thisExpr;
                } else {
                  const thisArg$$6 = com$$28.TransformAsExpr(ctx$$26, argInfo$$2.ThisArg);
                  thisArg$$7 = thisArg$$6;
                }

                return Util$$$callFunctionWithThisContext(range$$5, funcExpr$$1, thisArg$$7, args$$41);
              } else {
                let args$$42;

                if (argInfo$$2.ThisArg == null) {
                  args$$42 = args$$41;
                } else {
                  const thisArg$$8 = com$$28.TransformAsExpr(ctx$$26, argInfo$$2.ThisArg);
                  args$$42 = (0, _Types.L)(thisArg$$8, args$$41);
                }

                return (0, _AST2.CallExpression$$$$002Ector$$67485474)(funcExpr$$1, (0, _Array.ofList)(args$$42, Array), range$$5);
              }
            }

          case 2:
            {
              const membExpr = kind$$11.fields[0];
              const matchValue$$16 = [argInfo$$2.ThisArg, membExpr];
              var $target$$52, baseEntity$$1, membExpr$$2, thisIdent$$1;

              if (matchValue$$16[0] != null) {
                if (matchValue$$16[0].tag === 1) {
                  if (matchValue$$16[0].fields[0].Type.tag === 16) {
                    if (matchValue$$16[1] != null) {
                      if (thisIdent = matchValue$$16[0].fields[0], (membExpr$$1 = matchValue$$16[1], (baseEntity = matchValue$$16[0].fields[0].Type.fields[0], (0, _AST.Ident$$get_IsBaseValue)(thisIdent)))) {
                        $target$$52 = 1;
                        baseEntity$$1 = matchValue$$16[0].fields[0].Type.fields[0];
                        membExpr$$2 = matchValue$$16[1];
                        thisIdent$$1 = matchValue$$16[0].fields[0];
                      } else {
                        $target$$52 = 2;
                      }
                    } else {
                      $target$$52 = 2;
                    }
                  } else {
                    $target$$52 = 2;
                  }
                } else {
                  $target$$52 = 2;
                }
              } else {
                $target$$52 = 0;
              }

              switch ($target$$52) {
                case 0:
                  {
                    return Util$$$addErrorAndReturnNull(com$$28, range$$5, "InstanceCall with empty this argument");
                  }

                case 1:
                  {
                    const baseClassExpr = Util$$$entityRefMaybeImported(com$$28, ctx$$26, baseEntity$$1);
                    const baseProtoMember = Util$$$getExpr(null, Util$$$get(null, baseClassExpr, "prototype"), com$$28.TransformAsExpr(ctx$$26, membExpr$$2));
                    return Util$$$callFunctionWithThisContext(range$$5, baseProtoMember, Util$$$ident(thisIdent$$1), args$$41);
                  }

                case 2:
                  {
                    if (matchValue$$16[0] != null) {
                      if (matchValue$$16[1] != null) {
                        const m$$1 = com$$28.TransformAsExpr(ctx$$26, matchValue$$16[1]);
                        const thisArg$$10 = matchValue$$16[0];
                        const thisArg$$11 = com$$28.TransformAsExpr(ctx$$26, thisArg$$10);
                        return (0, _AST2.CallExpression$$$$002Ector$$67485474)(Util$$$getExpr(null, thisArg$$11, m$$1), (0, _Array.ofList)(args$$41, Array), range$$5);
                      } else {
                        const thisArg$$9 = matchValue$$16[0];
                        return (0, _AST2.CallExpression$$$$002Ector$$67485474)(com$$28.TransformAsExpr(ctx$$26, thisArg$$9), (0, _Array.ofList)(args$$41, Array), range$$5);
                      }
                    } else {
                      throw new _Types.MatchFailureException("C:/code/fable/src/dotnet/Fable.Compiler/Transforms/Fable2Babel.fs", 686, 22);
                    }
                  }
              }
            }

          default:
            {
              const consExpr = com$$28.TransformAsExpr(ctx$$26, kind$$11.fields[0]);
              return (0, _AST2.NewExpression$$$$002Ector$$67485474)(consExpr, (0, _Array.ofList)(args$$41, Array), range$$5);
            }
        }
      }

    case 1:
      {
        const args$$43 = opKind.fields[1];
        const applied = com$$28.TransformAsExpr(ctx$$26, opKind.fields[0]);
        const matchValue$$17 = Util$$$transformArgs(com$$28, ctx$$26, args$$43, new _AST.SpreadKind(0, "NoSpread"));

        if (matchValue$$17.tail != null) {
          const rest$$5 = matchValue$$17.tail;
          const head$$1 = matchValue$$17.head;
          const baseExpr = (0, _AST2.CallExpression$$$$002Ector$$67485474)(applied, [head$$1], range$$5);
          return (0, _List.fold)(function folder$$1(e$$62, arg$$5) {
            return (0, _AST2.CallExpression$$$$002Ector$$67485474)(e$$62, [arg$$5], range$$5);
          }, baseExpr, rest$$5);
        } else {
          return (0, _AST2.CallExpression$$$$002Ector$$67485474)(applied, [], range$$5);
        }
      }

    default:
      {
        const op = opKind.fields[0];
        const expr$$19 = com$$28.TransformAsExpr(ctx$$26, opKind.fields[1]);
        return (0, _AST2.UnaryExpression$$$$002Ector$$Z6A61F878)(op, expr$$19, null, range$$5);
      }
  }
}

function Util$$$transformOperationAsStatements(com$$41, ctx$$39, range$$6, t$$13, returnStrategy, opKind$$1) {
  var tc$$3, funcExpr$$4, args$$45, tc$$1, funcExpr$$2, argInfo$$3;

  const argsLen = function argsLen(i$$3) {
    return (0, _List.length)(i$$3.Args) + (i$$3.ThisArg != null ? 1 : 0);
  };

  const matchValue$$18 = [returnStrategy, ctx$$39.TailCallOpportunity, opKind$$1];
  var $target$$53, argInfo$$4, funcExpr$$3, tc$$2;

  if (matchValue$$18[0] != null) {
    if (matchValue$$18[0].tag === 0) {
      if (matchValue$$18[1] != null) {
        if (matchValue$$18[2].tag === 0) {
          if (matchValue$$18[2].fields[0].tag === 1) {
            if (tc$$1 = matchValue$$18[1], (funcExpr$$2 = matchValue$$18[2].fields[0].fields[0], (argInfo$$3 = matchValue$$18[2].fields[1], (!argInfo$$3.IsBaseOrSelfConstructorCall ? tc$$1.IsRecursiveRef(funcExpr$$2) : false) ? argsLen(argInfo$$3) === (0, _List.length)(tc$$1.Args) : false))) {
              $target$$53 = 0;
              argInfo$$4 = matchValue$$18[2].fields[1];
              funcExpr$$3 = matchValue$$18[2].fields[0].fields[0];
              tc$$2 = matchValue$$18[1];
            } else {
              $target$$53 = 1;
            }
          } else {
            $target$$53 = 1;
          }
        } else {
          $target$$53 = 1;
        }
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
        let args$$44;

        if (argInfo$$4.ThisArg == null) {
          args$$44 = argInfo$$4.Args;
        } else {
          const thisArg$$12 = argInfo$$4.ThisArg;
          args$$44 = (0, _Types.L)(thisArg$$12, argInfo$$4.Args);
        }

        return Util$$$optimizeTailCall(com$$41, ctx$$39, tc$$2, args$$44);
      }

    case 1:
      {
        var $target$$54, args$$46, funcExpr$$5, tc$$4;

        if (matchValue$$18[0] != null) {
          if (matchValue$$18[0].tag === 0) {
            if (matchValue$$18[1] != null) {
              if (matchValue$$18[2].tag === 1) {
                if (tc$$3 = matchValue$$18[1], (funcExpr$$4 = matchValue$$18[2].fields[0], (args$$45 = matchValue$$18[2].fields[1], tc$$3.IsRecursiveRef(funcExpr$$4) ? (0, _Prelude.List$$$sameLength)(args$$45, tc$$3.Args) : false))) {
                  $target$$54 = 0;
                  args$$46 = matchValue$$18[2].fields[1];
                  funcExpr$$5 = matchValue$$18[2].fields[0];
                  tc$$4 = matchValue$$18[1];
                } else {
                  $target$$54 = 1;
                }
              } else {
                $target$$54 = 1;
              }
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
              return Util$$$optimizeTailCall(com$$41, ctx$$39, tc$$4, args$$46);
            }

          case 1:
            {
              return [Util$$$resolveExpr(t$$13, returnStrategy, Util$$$transformOperation(com$$41, ctx$$39, range$$6, opKind$$1))];
            }
        }
      }
  }
}

function Util$$$transformBlock(com$$42, ctx$$40, ret, expr$$21) {
  return (0, _AST2.BlockStatement$$$$002Ector$$Z886A72B)(com$$42.TransformAsStatements(ctx$$40, ret, expr$$21));
}

function Util$$$transformTryCatch(com$$43, ctx$$41, returnStrategy$$1, body$$15, catch$, finalizer) {
  const ctx$$42 = new Context(ctx$$41.File, ctx$$41.DecisionTargets, ctx$$41.HoistVars, null, ctx$$41.OptimizeTailCall);
  const handler = (0, _Option.defaultArg)(catch$, null, function mapping$$7(tupledArg$$3) {
    return (0, _AST2.CatchClause$$$$002Ector$$3BA16AA8)(Util$$$toPattern(Util$$$ident(tupledArg$$3[0])), Util$$$transformBlock(com$$43, ctx$$42, returnStrategy$$1, tupledArg$$3[1]), (0, _AST.Expr$$get_Range)(tupledArg$$3[1]));
  });
  const finalizer$$1 = (0, _Option.defaultArg)(finalizer, null, function mapping$$8(expr$$22) {
    return Util$$$transformBlock(com$$43, ctx$$42, null, expr$$22);
  });
  return [(0, _AST2.TryStatement$$$$002Ector$$54B0C90B)(Util$$$transformBlock(com$$43, ctx$$42, returnStrategy$$1, body$$15), handler, finalizer$$1)];
}

function Util$$$transformIfStatement(com$$44, ctx$$43, ret$$2, guardExpr, thenStmnt, elseStmnt) {
  var e$$66;
  const thenStmnt$$1 = Util$$$transformBlock(com$$44, ctx$$43, ret$$2, thenStmnt);

  if (elseStmnt.tag === 19) {
    const thenStmnt$0027 = elseStmnt.fields[1];
    const guardExpr$0027 = com$$44.TransformAsExpr(ctx$$43, elseStmnt.fields[0]);
    const elseStmnt$0027 = elseStmnt.fields[2];
    const elseStmnt$$1 = Util$$$transformIfStatement(com$$44, ctx$$43, ret$$2, guardExpr$0027, thenStmnt$0027, elseStmnt$0027);
    return (0, _AST2.IfStatement$$$$002Ector$$Z981FD64)(guardExpr, thenStmnt$$1, elseStmnt$$1);
  } else {
    const expr$$23 = elseStmnt;
    const matchValue$$20 = com$$44.TransformAsStatements(ctx$$43, ret$$2, expr$$23);
    var $target$$55, e$$67;

    if (!(0, _Array.equalsWith)(_Util.compare, matchValue$$20, null) ? matchValue$$20.length === 0 : false) {
      $target$$55 = 0;
    } else if (!(0, _Array.equalsWith)(_Util.compare, matchValue$$20, null) ? matchValue$$20.length === 1 : false) {
      if (matchValue$$20[0] instanceof _AST2.ExpressionStatement) {
        if (e$$66 = matchValue$$20[0], (0, _AST2.ExpressionStatement$$get_Expression)(e$$66) instanceof _AST2.NullLiteral) {
          $target$$55 = 1;
          e$$67 = matchValue$$20[0];
        } else {
          $target$$55 = 2;
        }
      } else {
        $target$$55 = 2;
      }
    } else {
      $target$$55 = 2;
    }

    switch ($target$$55) {
      case 0:
        {
          return (0, _AST2.IfStatement$$$$002Ector$$Z981FD64)(guardExpr, thenStmnt$$1);
        }

      case 1:
        {
          return (0, _AST2.IfStatement$$$$002Ector$$Z981FD64)(guardExpr, thenStmnt$$1);
        }

      case 2:
        {
          const statements = matchValue$$20;
          return (0, _AST2.IfStatement$$$$002Ector$$Z981FD64)(guardExpr, thenStmnt$$1, (0, _AST2.BlockStatement$$$$002Ector$$Z886A72B)(statements));
        }
    }
  }
}

function Util$$$transformGet(com$$46, ctx$$45, range$$7, typ$$4, fableExpr, getKind) {
  var thisIdent$$2, baseEntity$$2;
  const expr$$24 = com$$46.TransformAsExpr(ctx$$45, fableExpr);

  switch (getKind.tag) {
    case 5:
      {
        return Util$$$get(range$$7, expr$$24, "head");
      }

    case 6:
      {
        return Util$$$get(range$$7, expr$$24, "tail");
      }

    case 2:
      {
        const fieldName = getKind.fields[0];
        let expr$$25;
        var $target$$56, baseEntity$$3, thisIdent$$3;

        if (fableExpr.tag === 1) {
          if (fableExpr.fields[0].Type.tag === 16) {
            if (thisIdent$$2 = fableExpr.fields[0], (baseEntity$$2 = fableExpr.fields[0].Type.fields[0], (0, _AST.Ident$$get_IsBaseValue)(thisIdent$$2))) {
              $target$$56 = 0;
              baseEntity$$3 = fableExpr.fields[0].Type.fields[0];
              thisIdent$$3 = fableExpr.fields[0];
            } else {
              $target$$56 = 1;
            }
          } else {
            $target$$56 = 1;
          }
        } else {
          $target$$56 = 1;
        }

        switch ($target$$56) {
          case 0:
            {
              const baseClassExpr$$1 = Util$$$entityRefMaybeImported(com$$46, ctx$$45, baseEntity$$3);
              expr$$25 = Util$$$get(null, baseClassExpr$$1, "prototype");
              break;
            }

          case 1:
            {
              expr$$25 = expr$$24;
              break;
            }
        }

        return Util$$$get(range$$7, expr$$25, fieldName);
      }

    case 1:
      {
        const index = getKind.fields[0] | 0;
        return Util$$$getExpr(range$$7, expr$$24, Util$$$ofInt(index));
      }

    case 7:
      {
        if ((0, _Transforms.AST$$$mustWrapOption)(typ$$4)) {
          return Util$$$coreLibCall(com$$46, ctx$$45, "Option", "value", [expr$$24]);
        } else {
          return expr$$24;
        }
      }

    case 4:
      {
        return Util$$$getUnionExprTag(range$$7, expr$$24);
      }

    case 3:
      {
        const uci$$4 = getKind.fields[1];
        const field = getKind.fields[0];
        const fieldName$$1 = (0, _Symbols.FSharpField$$get_Name)(field);
        return Util$$$getUnionExprField(range$$7, expr$$24, (0, _Seq.findIndex)(function predicate$$5(fi$$3) {
          return (0, _Symbols.FSharpField$$get_Name)(fi$$3) === fieldName$$1;
        }, (0, _Symbols.FSharpUnionCase$$get_UnionCaseFields)(uci$$4)));
      }

    default:
      {
        const prop$$8 = com$$46.TransformAsExpr(ctx$$45, getKind.fields[0]);
        return Util$$$getExpr(range$$7, expr$$24, prop$$8);
      }
  }
}

function Util$$$transformSet(com$$48, ctx$$47, range$$8, var$$$2, value$$8, setKind) {
  const var$$$3 = com$$48.TransformAsExpr(ctx$$47, var$$$2);
  const value$$9 = Util$$$wrapIntExpression((0, _AST.Expr$$get_Type)(value$$8), com$$48.TransformAsExpr(ctx$$47, value$$8));
  let var$$$4;

  switch (setKind.tag) {
    case 2:
      {
        const name$$10 = setKind.fields[0];
        var$$$4 = Util$$$get(null, var$$$3, name$$10);
        break;
      }

    case 1:
      {
        const e$$73 = com$$48.TransformAsExpr(ctx$$47, setKind.fields[0]);
        var$$$4 = Util$$$getExpr(null, var$$$3, e$$73);
        break;
      }

    default:
      {
        var$$$4 = var$$$3;
      }
  }

  return Util$$$assign(range$$8, var$$$4, value$$9);
}

function Util$$$getSetReturnStrategy(com$$50, ctx$$49, _arg1$$6) {
  const expr$$26 = com$$50.TransformAsExpr(ctx$$49, _arg1$$6);
  return function (_arg2$$1) {
    switch (_arg2$$1.tag) {
      case 1:
        {
          const prop$$9 = com$$50.TransformAsExpr(ctx$$49, _arg2$$1.fields[0]);
          return new ReturnStrategy(1, "Assign", Util$$$getExpr(null, expr$$26, prop$$9));
        }

      case 2:
        {
          const name$$11 = _arg2$$1.fields[0];
          return new ReturnStrategy(1, "Assign", Util$$$get(null, expr$$26, name$$11));
        }

      default:
        {
          return new ReturnStrategy(1, "Assign", expr$$26);
        }
    }
  };
}

function Util$$$transformBindingExprBody(com$$53, ctx$$52, var$$$5, value$$10) {
  var $target$$57, args$$47, body$$17, kind$$12, path$$2, r$$10;

  if (value$$10.tag === 5) {
    $target$$57 = 0;
    args$$47 = value$$10.fields[0];
    body$$17 = value$$10.fields[1];
  } else if (value$$10.tag === 4) {
    if (value$$10.fields[0].tag === 0) {
      if (value$$10.fields[0].fields[0].tag === 5) {
        if (value$$10.fields[0].fields[0].fields[0] === "__PLACE-HOLDER__") {
          $target$$57 = 1;
          kind$$12 = value$$10.fields[2];
          path$$2 = value$$10.fields[1];
          r$$10 = value$$10.fields[4];
        } else {
          $target$$57 = 2;
        }
      } else {
        $target$$57 = 2;
      }
    } else {
      $target$$57 = 2;
    }
  } else {
    $target$$57 = 2;
  }

  switch ($target$$57) {
    case 0:
      {
        let args$$49;

        if (args$$47.tag === 1) {
          const args$$48 = args$$47.fields[0];
          args$$49 = args$$48;
        } else {
          const arg$$6 = args$$47.fields[0];
          args$$49 = (0, _Types.L)(arg$$6, (0, _Types.L)());
        }

        const tupledArg$$4 = com$$53.TransformFunction(ctx$$52, var$$$5.Name, args$$49, body$$17);
        return function func(args$$50, body$$18) {
          return Util$$$makeFunctionExpression(var$$$5.Name, args$$50, body$$18);
        }(tupledArg$$4[0], tupledArg$$4[1]);
      }

    case 1:
      {
        return Util$$$transformImport(com$$53, ctx$$52, r$$10, (0, _Transforms.AST$$$makeStrConst)(var$$$5.Name), path$$2, kind$$12);
      }

    case 2:
      {
        return Util$$$wrapIntExpression((0, _AST.Expr$$get_Type)(value$$10), com$$53.TransformAsExpr(ctx$$52, value$$10));
      }
  }
}

function Util$$$transformBindingAsExpr(com$$54, ctx$$53, var$$$6, value$$11) {
  return Util$$$assign(null, Util$$$ident(var$$$6), Util$$$transformBindingExprBody(com$$54, ctx$$53, var$$$6, value$$11));
}

function Util$$$transformBindingAsStatements(com$$55, ctx$$54, var$$$7, value$$12) {
  if (Util$$$isJsStatement(ctx$$54, false, value$$12)) {
    const var$$$8 = Util$$$ident(var$$$7);
    const decl = (0, _AST2.VariableDeclaration$$$$002Ector$$26195FF1)(Util$$$toPattern(var$$$8));
    const body$$19 = com$$55.TransformAsStatements(ctx$$54, new ReturnStrategy(1, "Assign", var$$$8), value$$12);
    return (0, _Array.append)([decl], body$$19, Array);
  } else {
    const value$$13 = Util$$$transformBindingExprBody(com$$55, ctx$$54, var$$$7, value$$12);
    return [Util$$$varDeclaration(Util$$$ident(var$$$7), var$$$7.IsMutable, value$$13)];
  }
}

function Util$$$transformTypeTest(com$$56, ctx$$55, range$$10, expr$$27, typ$$7) {
  var ent2;

  const fail = function fail(msg$$1) {
    return Util$$$addErrorAndReturnNull(com$$56, range$$10, "Cannot type test: " + msg$$1);
  };

  const warnAndEvalToFalse = function warnAndEvalToFalse(msg$$2) {
    (0, _Transforms.Log$$$addWarning)(com$$56, (0, _Types.L)(), range$$10, "Cannot type test (evals to false): " + msg$$2);
    return (0, _AST2.BooleanLiteral$$$$002Ector$$3426B098)(false);
  };

  const jsTypeof = function jsTypeof(primitiveType, _arg1$$7) {
    const expr$$28 = com$$56.TransformAsExpr(ctx$$55, _arg1$$7);
    const typof = (0, _AST2.UnaryExpression$$$$002Ector$$Z6A61F878)(new _AST3.UnaryOperator(4, "UnaryTypeof"), expr$$28);
    return (0, _AST2.BinaryExpression$$$$002Ector$$F065D52)(new _AST3.BinaryOperator(2, "BinaryEqualStrict"), typof, (0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(primitiveType), range$$10);
  };

  const jsInstanceof = function jsInstanceof(consExpr$$1, _arg2$$2) {
    const expr$$29 = com$$56.TransformAsExpr(ctx$$55, _arg2$$2);
    return (0, _AST2.BinaryExpression$$$$002Ector$$F065D52)(new _AST3.BinaryOperator(21, "BinaryInstanceOf"), expr$$29, consExpr$$1, range$$10);
  };

  var $target$$58, ent$$8, genArgs$$3;

  if (typ$$7.tag === 2) {
    $target$$58 = 1;
  } else if (typ$$7.tag === 3) {
    $target$$58 = 2;
  } else if (typ$$7.tag === 4) {
    $target$$58 = 3;
  } else if (typ$$7.tag === 5) {
    $target$$58 = 3;
  } else if (typ$$7.tag === 8) {
    if (typ$$7.fields[0].tag === 0) {
      $target$$58 = 4;
    } else {
      $target$$58 = 3;
    }
  } else if (typ$$7.tag === 7) {
    $target$$58 = 4;
  } else if (typ$$7.tag === 6) {
    $target$$58 = 5;
  } else if (typ$$7.tag === 13) {
    $target$$58 = 6;
  } else if (typ$$7.tag === 11) {
    $target$$58 = 7;
  } else if (typ$$7.tag === 10) {
    $target$$58 = 7;
  } else if (typ$$7.tag === 12) {
    $target$$58 = 8;
  } else if (typ$$7.tag === 16) {
    $target$$58 = 9;
    ent$$8 = typ$$7.fields[0];
    genArgs$$3 = typ$$7.fields[1];
  } else if (typ$$7.tag === 0) {
    $target$$58 = 10;
  } else if (typ$$7.tag === 9) {
    $target$$58 = 10;
  } else if (typ$$7.tag === 14) {
    $target$$58 = 10;
  } else if (typ$$7.tag === 15) {
    $target$$58 = 10;
  } else {
    $target$$58 = 0;
  }

  switch ($target$$58) {
    case 0:
      {
        return (0, _AST2.BooleanLiteral$$$$002Ector$$3426B098)(true);
      }

    case 1:
      {
        return (0, _AST2.BinaryExpression$$$$002Ector$$F065D52)(new _AST3.BinaryOperator(0, "BinaryEqual"), com$$56.TransformAsExpr(ctx$$55, expr$$27), (0, _AST2.NullLiteral$$$$002Ector$$Z2370DF4E)(), range$$10);
      }

    case 2:
      {
        return jsTypeof("boolean", expr$$27);
      }

    case 3:
      {
        return jsTypeof("string", expr$$27);
      }

    case 4:
      {
        return jsTypeof("number", expr$$27);
      }

    case 5:
      {
        return jsInstanceof((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)("RegExp"), expr$$27);
      }

    case 6:
      {
        return jsTypeof("function", expr$$27);
      }

    case 7:
      {
        return Util$$$coreLibCall(com$$56, ctx$$55, "Util", "isArray", [com$$56.TransformAsExpr(ctx$$55, expr$$27)]);
      }

    case 8:
      {
        return jsInstanceof(Util$$$coreValue(com$$56, ctx$$55, "Types", "List"), expr$$27);
      }

    case 9:
      {
        const matchValue$$21 = (0, _Symbols.FSharpEntity$$get_TryFullName)(ent$$8);
        var $target$$59;

        if (matchValue$$21 != null) {
          if (matchValue$$21 === "System.IDisposable") {
            $target$$59 = 0;
          } else if (matchValue$$21 === "System.Collections.IEnumerable") {
            $target$$59 = 1;
          } else if (matchValue$$21 === "System.DateTime") {
            $target$$59 = 2;
          } else if (matchValue$$21 === "System.DateTimeOffset") {
            $target$$59 = 2;
          } else if (matchValue$$21 === "System.Int64") {
            $target$$59 = 3;
          } else if (matchValue$$21 === "System.UInt64") {
            $target$$59 = 3;
          } else if (matchValue$$21 === "System.Numerics.BigInteger") {
            $target$$59 = 4;
          } else if ((0, _Symbols.FSharpEntity$$get_IsInterface)(ent$$8)) {
            $target$$59 = 5;
          } else {
            $target$$59 = 6;
          }
        } else if ((0, _Symbols.FSharpEntity$$get_IsInterface)(ent$$8)) {
          $target$$59 = 5;
        } else {
          $target$$59 = 6;
        }

        switch ($target$$59) {
          case 0:
            {
              const matchValue$$22 = (0, _AST.Expr$$get_Type)(expr$$27);
              var $target$$60, ent2$$1;

              if (matchValue$$22.tag === 16) {
                if (ent2 = matchValue$$22.fields[0], (0, _FSharp2Fable.Util$$$hasInterface)("System.IDisposable", ent2)) {
                  $target$$60 = 0;
                  ent2$$1 = matchValue$$22.fields[0];
                } else {
                  $target$$60 = 1;
                }
              } else {
                $target$$60 = 1;
              }

              switch ($target$$60) {
                case 0:
                  {
                    return (0, _AST2.BooleanLiteral$$$$002Ector$$3426B098)(true);
                  }

                case 1:
                  {
                    return Util$$$coreLibCall(com$$56, ctx$$55, "Util", "isDisposable", [com$$56.TransformAsExpr(ctx$$55, expr$$27)]);
                  }
              }
            }

          case 1:
            {
              return Util$$$coreLibCall(com$$56, ctx$$55, "Util", "isIterable", [com$$56.TransformAsExpr(ctx$$55, expr$$27)]);
            }

          case 2:
            {
              return jsInstanceof((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)("Date"), expr$$27);
            }

          case 3:
            {
              return jsInstanceof(Util$$$coreValue(com$$56, ctx$$55, "Long", "default"), expr$$27);
            }

          case 4:
            {
              return jsInstanceof(Util$$$coreValue(com$$56, ctx$$55, "BigInt", "default"), expr$$27);
            }

          case 5:
            {
              return fail((0, _String.toText)((0, _String.printf)("interface %A"))((0, _Symbols.FSharpEntity$$get_FullName)(ent$$8)));
            }

          case 6:
            {
              if ((0, _FSharp2Fable.Util$$$isReplacementCandidate)(ent$$8)) {
                const matchValue$$23 = (0, _Symbols.FSharpEntity$$get_TryFullName)(ent$$8);
                var $target$$61, fullName;

                if (matchValue$$23 != null) {
                  if (matchValue$$23 === "System.Exception") {
                    $target$$61 = 0;
                  } else {
                    $target$$61 = 1;
                    fullName = matchValue$$23;
                  }
                } else {
                  $target$$61 = 1;
                  fullName = matchValue$$23;
                }

                switch ($target$$61) {
                  case 0:
                    {
                      return Util$$$coreLibCall(com$$56, ctx$$55, "Types", "isException", [com$$56.TransformAsExpr(ctx$$55, expr$$27)]);
                    }

                  case 1:
                    {
                      return warnAndEvalToFalse((0, _Option.defaultArg)(fullName, "UNKNOWN"));
                    }
                }
              } else {
                if (!(genArgs$$3.tail == null)) {
                  (0, _Transforms.Log$$$addWarning)(com$$56, (0, _Types.L)(), range$$10, "Cannot type test generic arguments");
                }

                const entRef$$2 = Util$$$entityRefMaybeImported(com$$56, ctx$$55, ent$$8);
                return jsInstanceof(entRef$$2, expr$$27);
              }
            }
        }
      }

    case 10:
      {
        return fail("options, generic parameters or erased unions");
      }
  }
}

function Util$$$transformTest(com$$59, ctx$$58, range$$11, kind$$13, expr$$30) {
  var $target$$62, t$$14;

  switch (kind$$13.tag) {
    case 1:
      $target$$62 = 0;
      t$$14 = kind$$13.fields[0];
      break;

    case 2:
      $target$$62 = 1;
      break;

    case 3:
      $target$$62 = 2;
      break;

    case 4:
      $target$$62 = 3;
      break;

    default:
      $target$$62 = 0;
      t$$14 = kind$$13.fields[0];
  }

  switch ($target$$62) {
    case 0:
      {
        return Util$$$transformTypeTest(com$$59, ctx$$58, range$$11, expr$$30, t$$14);
      }

    case 1:
      {
        const nonEmpty = kind$$13.fields[0];
        const op$$3 = nonEmpty ? new _AST3.BinaryOperator(1, "BinaryUnequal") : new _AST3.BinaryOperator(0, "BinaryEqual");
        return (0, _AST2.BinaryExpression$$$$002Ector$$F065D52)(op$$3, com$$59.TransformAsExpr(ctx$$58, expr$$30), (0, _AST2.NullLiteral$$$$002Ector$$Z2370DF4E)(), range$$11);
      }

    case 2:
      {
        const nonEmpty$$1 = kind$$13.fields[0];
        const expr$$31 = com$$59.TransformAsExpr(ctx$$58, expr$$30);
        const op$$4 = nonEmpty$$1 ? new _AST3.BinaryOperator(1, "BinaryUnequal") : new _AST3.BinaryOperator(0, "BinaryEqual");
        return (0, _AST2.BinaryExpression$$$$002Ector$$F065D52)(op$$4, Util$$$get(null, expr$$31, "tail"), (0, _AST2.NullLiteral$$$$002Ector$$Z2370DF4E)(), range$$11);
      }

    case 3:
      {
        const uci$$5 = kind$$13.fields[0];
        const ent$$9 = kind$$13.fields[1];
        const expected = Util$$$ofInt((0, _FSharp2Fable.Helpers$$$unionCaseTag)(ent$$9, uci$$5));
        const actual = Util$$$getUnionExprTag(null, com$$59.TransformAsExpr(ctx$$58, expr$$30));
        return (0, _AST2.BinaryExpression$$$$002Ector$$F065D52)(new _AST3.BinaryOperator(2, "BinaryEqualStrict"), actual, expected, range$$11);
      }
  }
}

function Util$$$transformSwitch(com$$60, ctx$$59, useBlocks, returnStrategy$$2, evalExpr, cases$$2, defaultCase) {
  const consequent = function consequent(caseBody) {
    if (useBlocks) {
      return [(0, _AST2.BlockStatement$$$$002Ector$$Z886A72B)(caseBody)];
    } else {
      return caseBody;
    }
  };

  const cases$$3 = (0, _List.collect)(function mapping$$10(tupledArg$$5) {
    const matchValue$$24 = [returnStrategy$$2, tupledArg$$5[1], tupledArg$$5[0]];
    var $target$$63, guards$$1;

    if (matchValue$$24[0] == null) {
      if (matchValue$$24[1].tag === 0) {
        if (matchValue$$24[1].fields[0].tag === 2) {
          $target$$63 = 0;
        } else if (matchValue$$24[2].tail == null) {
          $target$$63 = 0;
        } else {
          $target$$63 = 1;
          guards$$1 = matchValue$$24[2];
        }
      } else if (matchValue$$24[2].tail == null) {
        $target$$63 = 0;
      } else {
        $target$$63 = 1;
        guards$$1 = matchValue$$24[2];
      }
    } else if (matchValue$$24[2].tail == null) {
      $target$$63 = 0;
    } else {
      $target$$63 = 1;
      guards$$1 = matchValue$$24[2];
    }

    switch ($target$$63) {
      case 0:
        {
          return (0, _Types.L)();
        }

      case 1:
        {
          const patternInput$$26 = (0, _Prelude.List$$$splitLast)(guards$$1);
          const guards$$3 = (0, _List.map)(function mapping$$9(e$$83) {
            return (0, _AST2.SwitchCase$$$$002Ector$$1AEAF9B6)([], com$$60.TransformAsExpr(ctx$$59, e$$83));
          }, patternInput$$26[0]);
          const caseBody$$1 = com$$60.TransformAsStatements(ctx$$59, returnStrategy$$2, tupledArg$$5[1]);
          const caseBody$$2 = returnStrategy$$2 != null ? returnStrategy$$2.tag === 0 ? caseBody$$1 : (0, _Array.append)(caseBody$$1, [(0, _AST2.BreakStatement$$$$002Ector$$Z388DE073)()], Array) : (0, _Array.append)(caseBody$$1, [(0, _AST2.BreakStatement$$$$002Ector$$Z388DE073)()], Array);
          return (0, _List.append)(guards$$3, (0, _Types.L)((0, _AST2.SwitchCase$$$$002Ector$$1AEAF9B6)(consequent(caseBody$$2), com$$60.TransformAsExpr(ctx$$59, patternInput$$26[1])), (0, _Types.L)()));
        }
    }
  }, cases$$2);
  let cases$$4;

  if (defaultCase == null) {
    cases$$4 = cases$$3;
  } else {
    const expr$$34 = defaultCase;
    const defaultCaseBody = com$$60.TransformAsStatements(ctx$$59, returnStrategy$$2, expr$$34);
    cases$$4 = (0, _List.append)(cases$$3, (0, _Types.L)((0, _AST2.SwitchCase$$$$002Ector$$1AEAF9B6)(consequent(defaultCaseBody)), (0, _Types.L)()));
  }

  return (0, _AST2.SwitchStatement$$$$002Ector$$1940DA20)(com$$60.TransformAsExpr(ctx$$59, evalExpr), (0, _Array.ofList)(cases$$4, Array));
}

function Util$$$getDecisionTargetAndBindValues(ctx$$60, targetIndex$$2, boundValues$$2) {
  const patternInput$$27 = Util$$$getDecisionTarget(ctx$$60, targetIndex$$2, boundValues$$2);
  const patternInput$$28 = (0, _List.fold2)(function folder$$2(tupledArg$$6, ident$$3, expr$$35) {
    if ((0, _Transforms.AST$$$hasDoubleEvalRisk)(expr$$35)) {
      return [(0, _Types.L)([ident$$3, expr$$35], tupledArg$$6[0]), tupledArg$$6[1]];
    } else {
      return [tupledArg$$6[0], (0, _Map.add)(ident$$3.Name, expr$$35, tupledArg$$6[1])];
    }
  }, [(0, _Types.L)(), (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  })], patternInput$$27[0], boundValues$$2);
  const target$$2 = (0, _FableTransforms.replaceValues)(patternInput$$28[1], patternInput$$27[1]);
  return [patternInput$$28[0], target$$2];
}

function Util$$$transformDecisionTreeSuccessAsExpr(com$$61, ctx$$61, targetIndex$$3, boundValues$$3) {
  const patternInput$$29 = Util$$$getDecisionTargetAndBindValues(ctx$$61, targetIndex$$3, boundValues$$3);

  if (patternInput$$29[0].tail == null) {
    return com$$61.TransformAsExpr(ctx$$61, patternInput$$29[1]);
  } else {
    const bindings$$3 = patternInput$$29[0];
    return com$$61.TransformAsExpr(ctx$$61, new _AST.Expr(15, "Let", bindings$$3, patternInput$$29[1]));
  }
}

function Util$$$transformDecisionTreeSuccessAsStatements(com$$62, ctx$$62, returnStrategy$$3, targetIndex$$4, boundValues$$4) {
  var $target$$64, targetId, ret$$3;

  if (returnStrategy$$3 != null) {
    if (returnStrategy$$3.tag === 2) {
      $target$$64 = 0;
      targetId = returnStrategy$$3.fields[0];
    } else {
      $target$$64 = 1;
      ret$$3 = returnStrategy$$3;
    }
  } else {
    $target$$64 = 1;
    ret$$3 = returnStrategy$$3;
  }

  switch ($target$$64) {
    case 0:
      {
        const patternInput$$30 = Util$$$getDecisionTarget(ctx$$62, targetIndex$$4, boundValues$$4);
        const assignments = (0, _Prelude.List$$$mapToArray)(function f$$7(tupledArg$$7) {
          const value$$14 = com$$62.TransformAsExpr(ctx$$62, tupledArg$$7[1]);
          return (0, _AST2.ExpressionStatement$$$$002Ector$$Z42439CB7)(Util$$$assign(null, Util$$$ident(tupledArg$$7[0]), value$$14));
        }, (0, _List.zip)(patternInput$$30[0], boundValues$$4));
        const targetAssignment = (0, _AST2.ExpressionStatement$$$$002Ector$$Z42439CB7)(Util$$$assign(null, targetId, Util$$$ofInt(targetIndex$$4)));
        return (0, _Array.append)([targetAssignment], assignments, Array);
      }

    case 1:
      {
        const patternInput$$31 = Util$$$getDecisionTargetAndBindValues(ctx$$62, targetIndex$$4, boundValues$$4);
        const bindings$$5 = (0, _Array.ofSeq)((0, _Seq.collect)(function mapping$$11(tupledArg$$8) {
          return Util$$$transformBindingAsStatements(com$$62, ctx$$62, tupledArg$$8[0], tupledArg$$8[1]);
        }, (0, _List.reverse)(patternInput$$31[0])), Array);
        return (0, _Array.append)(bindings$$5, com$$62.TransformAsStatements(ctx$$62, ret$$3, patternInput$$31[1]), Array);
      }
  }
}

function Util$$$transformDecisionTreeAsSwitch(expr$$36) {
  const $007CEquals$007C_$007C = function $007CEquals$007C_$007C(_arg1$$9) {
    var $target$$65, expr$$37, right$$4, ent$$10, expr$$38, uci$$6;

    if (_arg1$$9.tag === 8) {
      if (_arg1$$9.fields[0].tag === 4) {
        if (_arg1$$9.fields[0].fields[0].tag === 2) {
          $target$$65 = 0;
          expr$$37 = _arg1$$9.fields[0].fields[1];
          right$$4 = _arg1$$9.fields[0].fields[2];
        } else {
          $target$$65 = 2;
        }
      } else {
        $target$$65 = 2;
      }
    } else if (_arg1$$9.tag === 7) {
      if (_arg1$$9.fields[1].tag === 4) {
        $target$$65 = 1;
        ent$$10 = _arg1$$9.fields[1].fields[1];
        expr$$38 = _arg1$$9.fields[0];
        uci$$6 = _arg1$$9.fields[1].fields[0];
      } else {
        $target$$65 = 2;
      }
    } else {
      $target$$65 = 2;
    }

    switch ($target$$65) {
      case 0:
        {
          return [expr$$37, right$$4];
        }

      case 1:
        {
          const evalExpr$$1 = new _AST.Expr(9, "Get", expr$$38, new _AST.GetKind(4, "UnionTag"), new _AST.Type(7, "Number", new _AST3.NumberKind(4, "Int32")), null);
          const right$$5 = new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", (0, _FSharp2Fable.Helpers$$$unionCaseTag)(ent$$10, uci$$6), new _AST3.NumberKind(4, "Int32")));
          return [evalExpr$$1, right$$5];
        }

      case 2:
        {
          return null;
        }
    }
  };

  const sameEvalExprs = function sameEvalExprs(evalExpr1, evalExpr2) {
    const matchValue$$25 = [evalExpr1, evalExpr2];
    var $target$$66, i1, i2;

    if (matchValue$$25[0].tag === 1) {
      if (matchValue$$25[1].tag === 1) {
        $target$$66 = 0;
        i1 = matchValue$$25[0].fields[0];
        i2 = matchValue$$25[1].fields[0];
      } else {
        $target$$66 = 1;
      }
    } else if (matchValue$$25[0].tag === 9) {
      if (matchValue$$25[0].fields[0].tag === 1) {
        if (matchValue$$25[0].fields[1].tag === 4) {
          if (matchValue$$25[1].tag === 9) {
            if (matchValue$$25[1].fields[0].tag === 1) {
              if (matchValue$$25[1].fields[1].tag === 4) {
                $target$$66 = 0;
                i1 = matchValue$$25[0].fields[0].fields[0];
                i2 = matchValue$$25[1].fields[0].fields[0];
              } else {
                $target$$66 = 1;
              }
            } else {
              $target$$66 = 1;
            }
          } else {
            $target$$66 = 1;
          }
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
          return i1.Name === i2.Name;
        }

      case 1:
        {
          return false;
        }
    }
  };

  const checkInner = function checkInner(cases$$5, evalExpr$$2, _arg2$$3) {
    var treeExpr, targetIndex$$5, evalExpr2$$1, caseExpr, boundValues$$5;

    checkInner: while (true) {
      var $target$$67, boundValues$$6, caseExpr$$1, evalExpr2$$2, targetIndex$$6, treeExpr$$1;

      if (_arg2$$3.tag === 19) {
        const activePatternResult69576 = $007CEquals$007C_$007C(_arg2$$3.fields[0]);

        if (activePatternResult69576 != null) {
          if (_arg2$$3.fields[1].tag === 13) {
            if (treeExpr = _arg2$$3.fields[2], (targetIndex$$5 = _arg2$$3.fields[1].fields[0] | 0, (evalExpr2$$1 = activePatternResult69576[0], (caseExpr = activePatternResult69576[1], (boundValues$$5 = _arg2$$3.fields[1].fields[1], sameEvalExprs(evalExpr$$2, evalExpr2$$1)))))) {
              $target$$67 = 0;
              boundValues$$6 = _arg2$$3.fields[1].fields[1];
              caseExpr$$1 = activePatternResult69576[1];
              evalExpr2$$2 = activePatternResult69576[0];
              targetIndex$$6 = _arg2$$3.fields[1].fields[0];
              treeExpr$$1 = _arg2$$3.fields[2];
            } else {
              $target$$67 = 1;
            }
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
            if (treeExpr$$1.tag === 13) {
              const defaultTargetIndex = treeExpr$$1.fields[0] | 0;
              const defaultBoundValues = treeExpr$$1.fields[1];
              const cases$$6 = (0, _List.reverse)((0, _Types.L)([caseExpr$$1, targetIndex$$6, boundValues$$6], cases$$5));
              return [evalExpr$$2, cases$$6, [defaultTargetIndex, defaultBoundValues]];
            } else {
              const treeExpr$$2 = treeExpr$$1;
              cases$$5 = (0, _Types.L)([caseExpr$$1, targetIndex$$6, boundValues$$6], cases$$5);
              evalExpr$$2 = evalExpr$$2;
              _arg2$$3 = treeExpr$$2;
              continue checkInner;
            }
          }

        case 1:
          {
            return null;
          }
      }
    }
  };

  var $target$$68, boundValues$$7, caseExpr$$2, evalExpr$$3, targetIndex$$7, treeExpr$$3;

  if (expr$$36.tag === 19) {
    const activePatternResult69580 = $007CEquals$007C_$007C(expr$$36.fields[0]);

    if (activePatternResult69580 != null) {
      if (expr$$36.fields[1].tag === 13) {
        $target$$68 = 0;
        boundValues$$7 = expr$$36.fields[1].fields[1];
        caseExpr$$2 = activePatternResult69580[1];
        evalExpr$$3 = activePatternResult69580[0];
        targetIndex$$7 = expr$$36.fields[1].fields[0];
        treeExpr$$3 = expr$$36.fields[2];
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
        const matchValue$$26 = checkInner((0, _Types.L)([caseExpr$$2, targetIndex$$7, boundValues$$7], (0, _Types.L)()), evalExpr$$3, treeExpr$$3);

        if (matchValue$$26 == null) {
          return null;
        } else {
          const evalExpr$$4 = matchValue$$26[0];
          const defaultCase$$1 = matchValue$$26[2];
          const cases$$7 = matchValue$$26[1];
          return [evalExpr$$4, cases$$7, defaultCase$$1];
        }
      }

    case 1:
      {
        return null;
      }
  }
}

function Util$$$transformDecisionTreeAsExpr(com$$64, ctx$$64, targets$$1, expr$$39) {
  const ctx$$65 = new Context(ctx$$64.File, targets$$1, ctx$$64.HoistVars, ctx$$64.TailCallOpportunity, ctx$$64.OptimizeTailCall);
  return com$$64.TransformAsExpr(ctx$$65, expr$$39);
}

function Util$$$transformDecisionTreeAsStaments(com$$65, ctx$$66, returnStrategy$$4, targets$$2, treeExpr$$4) {
  if (Util$$$decisionTargetsReferencedMultipleTimes(treeExpr$$4, (0, _List.length)(targets$$2))) {
    const targetId$$1 = com$$65.GetUniqueVar("target");
    let varDeclaration;
    const boundIdents = (0, _List.collect)(function mapping$$13(tupledArg$$9) {
      return (0, _List.map)(function mapping$$12(i$$6) {
        return [i$$6.Name, null];
      }, tupledArg$$9[0]);
    }, targets$$2);
    varDeclaration = Util$$$multiVarDeclaration(new _AST2.VariableDeclarationKind(0, "Var"), (0, _Types.L)([targetId$$1, null], boundIdents));
    let switch2;
    const cases$$8 = (0, _List.mapIndexed)(function mapping$$14(i$$7, tupledArg$$10) {
      return [(0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(i$$7), (0, _Types.L)()), tupledArg$$10[1]];
    }, targets$$2);
    switch2 = Util$$$transformSwitch(com$$65, ctx$$66, true, returnStrategy$$4, new _AST.Expr(1, "IdentExpr", (0, _Transforms.AST$$$makeIdentNonMangled)(targetId$$1)), cases$$8, null);
    const targetAssign = new ReturnStrategy(2, "Target", (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(targetId$$1));
    const ctx$$67 = new Context(ctx$$66.File, targets$$2, ctx$$66.HoistVars, ctx$$66.TailCallOpportunity, ctx$$66.OptimizeTailCall);
    const matchValue$$27 = Util$$$transformDecisionTreeAsSwitch(treeExpr$$4);

    if (matchValue$$27 == null) {
      const decisionTree = com$$65.TransformAsStatements(ctx$$67, targetAssign, treeExpr$$4);
      return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.append)((0, _Seq.singleton)(varDeclaration), (0, _Seq.delay)(function () {
          return (0, _Seq.append)(decisionTree, (0, _Seq.delay)(function () {
            return (0, _Seq.singleton)(switch2);
          }));
        }));
      }), Array);
    } else {
      const evalExpr$$5 = matchValue$$27[0];
      const defaultIndex = matchValue$$27[2][0] | 0;
      const defaultBoundValues$$1 = matchValue$$27[2][1];
      const cases$$9 = matchValue$$27[1];
      const cases$$11 = (0, _List.map)(function mapping$$16(tupledArg$$12) {
        const caseExprs = (0, _List.map)(function mapping$$15(tupledArg$$13) {
          return (0, _Prelude.Tuple3$$$item1)(tupledArg$$13[0], tupledArg$$13[1], tupledArg$$13[2]);
        }, tupledArg$$12[1]);
        let boundValues$$9;
        const tupledArg$$14 = (0, _List.head)(tupledArg$$12[1]);
        boundValues$$9 = (0, _Prelude.Tuple3$$$item3)(tupledArg$$14[0], tupledArg$$14[1], tupledArg$$14[2]);
        return [caseExprs, new _AST.Expr(13, "DecisionTreeSuccess", tupledArg$$12[0][0], boundValues$$9, new _AST.Type(7, "Number", new _AST3.NumberKind(4, "Int32")))];
      }, (0, _List.groupBy)(function projection(tupledArg$$11) {
        if (tupledArg$$11[2].tail == null) {
          return [tupledArg$$11[1], "00000000-0000-0000-0000-000000000000"];
        } else {
          return [tupledArg$$11[1], (0, _String.newGuid)()];
        }
      }, cases$$9, {
        Equals: _Util.equalArrays,
        GetHashCode: _Util.structuralHash
      }));
      const defaultCase$$2 = new _AST.Expr(13, "DecisionTreeSuccess", defaultIndex, defaultBoundValues$$1, new _AST.Type(7, "Number", new _AST3.NumberKind(4, "Int32")));
      const switch1 = Util$$$transformSwitch(com$$65, ctx$$67, false, targetAssign, evalExpr$$5, cases$$11, defaultCase$$2);
      return [varDeclaration, switch1, switch2];
    }
  } else {
    const ctx$$68 = new Context(ctx$$66.File, targets$$2, ctx$$66.HoistVars, ctx$$66.TailCallOpportunity, ctx$$66.OptimizeTailCall);
    const matchValue$$28 = Util$$$transformDecisionTreeAsSwitch(treeExpr$$4);

    if (matchValue$$28 == null) {
      return com$$65.TransformAsStatements(ctx$$68, returnStrategy$$4, treeExpr$$4);
    } else {
      const evalExpr$$6 = matchValue$$28[0];
      const defaultIndex$$1 = matchValue$$28[2][0] | 0;
      const defaultBoundValues$$2 = matchValue$$28[2][1];
      const cases$$12 = matchValue$$28[1];
      const t$$15 = (0, _AST.Expr$$get_Type)(treeExpr$$4);
      const cases$$13 = (0, _List.map)(function mapping$$17(tupledArg$$15) {
        return [(0, _Types.L)(tupledArg$$15[0], (0, _Types.L)()), new _AST.Expr(13, "DecisionTreeSuccess", tupledArg$$15[1], tupledArg$$15[2], t$$15)];
      }, cases$$12);
      const defaultCase$$3 = new _AST.Expr(13, "DecisionTreeSuccess", defaultIndex$$1, defaultBoundValues$$2, t$$15);
      return [Util$$$transformSwitch(com$$65, ctx$$68, true, returnStrategy$$4, evalExpr$$6, cases$$13, defaultCase$$3)];
    }
  }
}

function Util$$$transformAsExpr(com$$66, ctx$$69, expr$$40) {
  var $target$$69;

  switch (expr$$40.tag) {
    case 3:
      $target$$69 = 1;
      break;

    case 0:
      $target$$69 = 2;
      break;

    case 1:
      $target$$69 = 3;
      break;

    case 4:
      $target$$69 = 4;
      break;

    case 7:
      $target$$69 = 5;
      break;

    case 5:
      $target$$69 = 6;
      break;

    case 6:
      $target$$69 = 7;
      break;

    case 8:
      $target$$69 = 8;
      break;

    case 9:
      $target$$69 = 9;
      break;

    case 19:
      $target$$69 = 10;
      break;

    case 12:
      $target$$69 = 11;
      break;

    case 13:
      $target$$69 = 12;
      break;

    case 16:
      $target$$69 = 13;
      break;

    case 15:
      $target$$69 = 14;
      break;

    case 14:
      $target$$69 = 15;
      break;

    case 10:
    case 11:
    case 17:
    case 18:
      $target$$69 = 16;
      break;

    default:
      $target$$69 = 0;
  }

  switch ($target$$69) {
    case 0:
      {
        const t$$16 = expr$$40.fields[1];
        const e$$86 = expr$$40.fields[0];
        return Util$$$transformCast(com$$66, ctx$$69, t$$16, e$$86);
      }

    case 1:
      {
        const r$$12 = expr$$40.fields[2];
        const kind$$14 = expr$$40.fields[0];
        return Util$$$transformDelayedResolution(com$$66, ctx$$69, r$$12, kind$$14);
      }

    case 2:
      {
        const kind$$15 = expr$$40.fields[0];
        return Util$$$transformValue(com$$66, ctx$$69, kind$$15);
      }

    case 3:
      {
        const id$$10 = expr$$40.fields[0];
        return Util$$$ident(id$$10);
      }

    case 4:
      {
        const selector$$3 = expr$$40.fields[0];
        const r$$13 = expr$$40.fields[4];
        const path$$3 = expr$$40.fields[1];
        const kind$$16 = expr$$40.fields[2];
        return Util$$$transformImport(com$$66, ctx$$69, r$$13, selector$$3, path$$3, kind$$16);
      }

    case 5:
      {
        const range$$12 = expr$$40.fields[2];
        const kind$$17 = expr$$40.fields[1];
        const expr$$41 = expr$$40.fields[0];
        return Util$$$transformTest(com$$66, ctx$$69, range$$12, kind$$17, expr$$41);
      }

    case 6:
      {
        const name$$13 = expr$$40.fields[2];
        const body$$20 = expr$$40.fields[1];
        const args$$52 = Util$$$$007CFunctionArgs$007C(expr$$40.fields[0]);
        const tupledArg$$16 = com$$66.TransformFunction(ctx$$69, name$$13, args$$52, body$$20);
        return function func$$1(args$$53, body$$21) {
          return Util$$$makeFunctionExpression(name$$13, args$$53, body$$21);
        }(tupledArg$$16[0], tupledArg$$16[1]);
      }

    case 7:
      {
        const members$$1 = expr$$40.fields[0];
        const baseCall$$2 = expr$$40.fields[2];
        return Util$$$transformObjectExpr(com$$66, ctx$$69, members$$1, "this", baseCall$$2);
      }

    case 8:
      {
        const range$$13 = expr$$40.fields[2];
        const opKind$$2 = expr$$40.fields[0];
        return Util$$$transformOperation(com$$66, ctx$$69, range$$13, opKind$$2);
      }

    case 9:
      {
        const typ$$8 = expr$$40.fields[2];
        const range$$14 = expr$$40.fields[3];
        const getKind$$1 = expr$$40.fields[1];
        const expr$$42 = expr$$40.fields[0];
        return Util$$$transformGet(com$$66, ctx$$69, range$$14, typ$$8, expr$$42, getKind$$1);
      }

    case 10:
      {
        const thenExpr$$1 = com$$66.TransformAsExpr(ctx$$69, expr$$40.fields[1]);
        const guardExpr$$1 = com$$66.TransformAsExpr(ctx$$69, expr$$40.fields[0]);
        const elseExpr$$1 = com$$66.TransformAsExpr(ctx$$69, expr$$40.fields[2]);
        return (0, _AST2.ConditionalExpression$$$$002Ector$$75B0CFE9)(guardExpr$$1, thenExpr$$1, elseExpr$$1);
      }

    case 11:
      {
        const targets$$3 = expr$$40.fields[1];
        const expr$$43 = expr$$40.fields[0];
        return Util$$$transformDecisionTreeAsExpr(com$$66, ctx$$69, targets$$3, expr$$43);
      }

    case 12:
      {
        const idx$$3 = expr$$40.fields[0] | 0;
        const boundValues$$11 = expr$$40.fields[1];
        return Util$$$transformDecisionTreeSuccessAsExpr(com$$66, ctx$$69, idx$$3, boundValues$$11);
      }

    case 13:
      {
        const var$$$9 = expr$$40.fields[0];
        const value$$16 = expr$$40.fields[2];
        const setKind$$1 = expr$$40.fields[1];
        const range$$15 = expr$$40.fields[3];
        return Util$$$transformSet(com$$66, ctx$$69, range$$15, var$$$9, value$$16, setKind$$1);
      }

    case 14:
      {
        const body$$22 = expr$$40.fields[1];
        const bindings$$6 = expr$$40.fields[0];

        if (ctx$$69.HoistVars((0, _List.map)(function (tuple$$5) {
          return tuple$$5[0];
        }, bindings$$6))) {
          const values$$4 = (0, _Prelude.List$$$mapToArray)(function f$$8(tupledArg$$17) {
            return Util$$$transformBindingAsExpr(com$$66, ctx$$69, tupledArg$$17[0], tupledArg$$17[1]);
          }, bindings$$6);
          return (0, _AST2.SequenceExpression$$$$002Ector$$Z586268D1)((0, _Array.append)(values$$4, [com$$66.TransformAsExpr(ctx$$69, body$$22)], Array));
        } else {
          return Util$$$iife(com$$66, ctx$$69, expr$$40);
        }
      }

    case 15:
      {
        const exprs$$1 = expr$$40.fields[0];
        return (0, _AST2.SequenceExpression$$$$002Ector$$Z586268D1)((0, _Prelude.List$$$mapToArray)(function (e$$93) {
          return com$$66.TransformAsExpr(ctx$$69, e$$93);
        }, exprs$$1));
      }

    case 16:
      {
        return Util$$$iife(com$$66, ctx$$69, expr$$40);
      }
  }
}

function Util$$$transformAsStatements(com$$70, ctx$$73, returnStrategy$$5, expr$$44) {
  var tupledArg$$18, e$$97, var$$$10, start, limit, isUp, body$$28, patternInput$$32, guard, body$$27;

  switch (expr$$44.tag) {
    case 3:
      {
        const t$$18 = expr$$44.fields[1];
        const r$$14 = expr$$44.fields[2];
        const kind$$18 = expr$$44.fields[0];
        return [Util$$$resolveExpr(t$$18, returnStrategy$$5, Util$$$transformDelayedResolution(com$$70, ctx$$73, r$$14, kind$$18))];
      }

    case 0:
      {
        const kind$$19 = expr$$44.fields[0];
        return [Util$$$resolveExpr((0, _AST.ValueKind$$get_Type)(kind$$19), returnStrategy$$5, Util$$$transformValue(com$$70, ctx$$73, kind$$19))];
      }

    case 1:
      {
        const id$$12 = expr$$44.fields[0];
        return [Util$$$resolveExpr(id$$12.Type, returnStrategy$$5, Util$$$ident(id$$12))];
      }

    case 4:
      {
        const t$$21 = expr$$44.fields[3];
        const selector$$4 = expr$$44.fields[0];
        const r$$15 = expr$$44.fields[4];
        const path$$4 = expr$$44.fields[1];
        const kind$$20 = expr$$44.fields[2];
        return [Util$$$resolveExpr(t$$21, returnStrategy$$5, Util$$$transformImport(com$$70, ctx$$73, r$$15, selector$$4, path$$4, kind$$20))];
      }

    case 7:
      {
        const range$$16 = expr$$44.fields[2];
        const kind$$21 = expr$$44.fields[1];
        const expr$$45 = expr$$44.fields[0];
        return [Util$$$resolveExpr(new _AST.Type(3, "Boolean"), returnStrategy$$5, Util$$$transformTest(com$$70, ctx$$73, range$$16, kind$$21, expr$$45))];
      }

    case 5:
      {
        const name$$14 = expr$$44.fields[2];
        const body$$23 = expr$$44.fields[1];
        const args$$54 = Util$$$$007CFunctionArgs$007C(expr$$44.fields[0]);
        return [Util$$$resolveExpr((0, _AST.Expr$$get_Type)(expr$$44), returnStrategy$$5, (tupledArg$$18 = com$$70.TransformFunction(ctx$$73, name$$14, args$$54, body$$23), function func$$2(args$$55, body$$24) {
          return Util$$$makeFunctionExpression(name$$14, args$$55, body$$24);
        }(tupledArg$$18[0], tupledArg$$18[1])))];
      }

    case 6:
      {
        const t$$24 = expr$$44.fields[1];
        const members$$2 = expr$$44.fields[0];
        const baseCall$$3 = expr$$44.fields[2];
        return [Util$$$resolveExpr(t$$24, returnStrategy$$5, Util$$$transformObjectExpr(com$$70, ctx$$73, members$$2, "this", baseCall$$3))];
      }

    case 8:
      {
        const t$$25 = expr$$44.fields[1];
        const range$$17 = expr$$44.fields[2];
        const callKind = expr$$44.fields[0];
        return Util$$$transformOperationAsStatements(com$$70, ctx$$73, range$$17, t$$25, returnStrategy$$5, callKind);
      }

    case 9:
      {
        const t$$26 = expr$$44.fields[2];
        const range$$18 = expr$$44.fields[3];
        const getKind$$2 = expr$$44.fields[1];
        const expr$$46 = expr$$44.fields[0];
        return [Util$$$resolveExpr(t$$26, returnStrategy$$5, Util$$$transformGet(com$$70, ctx$$73, range$$18, t$$26, expr$$46, getKind$$2))];
      }

    case 15:
      {
        const body$$25 = expr$$44.fields[1];
        const bindings$$7 = expr$$44.fields[0];
        const bindings$$8 = (0, _Array.ofSeq)((0, _Seq.collect)(function mapping$$18(tupledArg$$19) {
          return Util$$$transformBindingAsStatements(com$$70, ctx$$73, tupledArg$$19[0], tupledArg$$19[1]);
        }, bindings$$7), Array);
        return (0, _Array.append)(bindings$$8, Util$$$transformAsStatements(com$$70, ctx$$73, returnStrategy$$5, body$$25), Array);
      }

    case 16:
      {
        const value$$18 = expr$$44.fields[2];
        const setKind$$2 = expr$$44.fields[1];
        const expr$$47 = expr$$44.fields[0];
        const _range = expr$$44.fields[3];
        const ret$$4 = Util$$$getSetReturnStrategy(com$$70, ctx$$73, expr$$47)(setKind$$2);
        return com$$70.TransformAsStatements(ctx$$73, ret$$4, value$$18);
      }

    case 11:
      {
        const range$$19 = expr$$44.fields[2];
        const ex = com$$70.TransformAsExpr(ctx$$73, expr$$44.fields[0]);
        return [(0, _AST2.ThrowStatement$$$$002Ector$$Z42439CB7)(ex, range$$19)];
      }

    case 10:
      {
        return [(0, _AST2.DebuggerStatement$$$$002Ector$$Z2370DF4E)()];
      }

    case 19:
      {
        const thenExpr$$2 = expr$$44.fields[1];
        const guardExpr$$2 = expr$$44.fields[0];
        const elseExpr$$2 = expr$$44.fields[2];
        const asStatement = returnStrategy$$5 != null ? returnStrategy$$5.tag === 1 ? Util$$$isJsStatement(ctx$$73, false, thenExpr$$2) ? true : Util$$$isJsStatement(ctx$$73, false, elseExpr$$2) : returnStrategy$$5.tag === 0 ? (ctx$$73.TailCallOpportunity != null ? true : Util$$$isJsStatement(ctx$$73, false, thenExpr$$2)) ? true : Util$$$isJsStatement(ctx$$73, false, elseExpr$$2) : true : true;

        if (asStatement) {
          const matchValue$$29 = com$$70.TransformAsExpr(ctx$$73, guardExpr$$2);
          var $target$$70, e$$98;

          if (matchValue$$29 instanceof _AST2.BooleanLiteral) {
            if (e$$97 = matchValue$$29, (0, _AST2.BooleanLiteral$$get_Value)(e$$97)) {
              $target$$70 = 0;
              e$$98 = matchValue$$29;
            } else {
              $target$$70 = 1;
            }
          } else {
            $target$$70 = 1;
          }

          switch ($target$$70) {
            case 0:
              {
                return com$$70.TransformAsStatements(ctx$$73, returnStrategy$$5, thenExpr$$2);
              }

            case 1:
              {
                const guardExpr$$3 = matchValue$$29;
                return [Util$$$transformIfStatement(com$$70, ctx$$73, returnStrategy$$5, guardExpr$$3, thenExpr$$2, elseExpr$$2)];
              }
          }
        } else {
          const guardExpr$0027$$1 = Util$$$transformAsExpr(com$$70, ctx$$73, guardExpr$$2);
          const thenExpr$0027 = Util$$$transformAsExpr(com$$70, ctx$$73, thenExpr$$2);
          const elseExpr$0027 = Util$$$transformAsExpr(com$$70, ctx$$73, elseExpr$$2);
          return [Util$$$resolveExpr((0, _AST.Expr$$get_Type)(thenExpr$$2), returnStrategy$$5, (0, _AST2.ConditionalExpression$$$$002Ector$$75B0CFE9)(guardExpr$0027$$1, thenExpr$0027, elseExpr$0027))];
        }
      }

    case 14:
      {
        const statements$$1 = expr$$44.fields[0];
        const lasti = (0, _List.length)(statements$$1) - 1 | 0;
        return (0, _Array.concat)((0, _Prelude.List$$$mapiToArray)(function f$$9(i$$9, statement) {
          const ret$$5 = i$$9 < lasti ? null : returnStrategy$$5;
          return com$$70.TransformAsStatements(ctx$$73, ret$$5, statement);
        }, statements$$1), Array);
      }

    case 18:
      {
        const finalizer$$2 = expr$$44.fields[2];
        const catch$$$1 = expr$$44.fields[1];
        const body$$26 = expr$$44.fields[0];
        return Util$$$transformTryCatch(com$$70, ctx$$73, returnStrategy$$5, body$$26, catch$$$1, finalizer$$2);
      }

    case 12:
      {
        const targets$$4 = expr$$44.fields[1];
        const expr$$48 = expr$$44.fields[0];
        return Util$$$transformDecisionTreeAsStaments(com$$70, ctx$$73, returnStrategy$$5, targets$$4, expr$$48);
      }

    case 13:
      {
        const idx$$4 = expr$$44.fields[0] | 0;
        const boundValues$$12 = expr$$44.fields[1];
        return Util$$$transformDecisionTreeSuccessAsStatements(com$$70, ctx$$73, returnStrategy$$5, idx$$4, boundValues$$12);
      }

    case 17:
      {
        const range$$20 = expr$$44.fields[1];
        const loopKind = expr$$44.fields[0];
        return (0, _Array.singleton)(loopKind.tag === 1 ? (var$$$10 = loopKind.fields[0], (start = com$$70.TransformAsExpr(ctx$$73, loopKind.fields[1]), (limit = com$$70.TransformAsExpr(ctx$$73, loopKind.fields[2]), (isUp = loopKind.fields[4], (body$$28 = loopKind.fields[3], (patternInput$$32 = isUp ? [new _AST3.BinaryOperator(5, "BinaryLessOrEqual"), new _AST3.UpdateOperator(1, "UpdatePlus")] : [new _AST3.BinaryOperator(7, "BinaryGreaterOrEqual"), new _AST3.UpdateOperator(0, "UpdateMinus")], (0, _AST2.ForStatement$$$$002Ector$$5CF9F7FB)(Util$$$transformBlock(com$$70, ctx$$73, null, body$$28), Util$$$varDeclaration(Util$$$ident(var$$$10), true, start), (0, _AST2.BinaryExpression$$$$002Ector$$F065D52)(patternInput$$32[0], Util$$$ident(var$$$10), limit), (0, _AST2.UpdateExpression$$$$002Ector$$730C8CDD)(patternInput$$32[1], false, Util$$$ident(var$$$10)), range$$20))))))) : (guard = com$$70.TransformAsExpr(ctx$$73, loopKind.fields[0]), (body$$27 = loopKind.fields[1], (0, _AST2.WhileStatement$$$$002Ector$$Z68B1BDB4)(guard, Util$$$transformBlock(com$$70, ctx$$73, null, body$$27), range$$20))), Array);
      }

    default:
      {
        const t$$17 = expr$$44.fields[1];
        const e$$94 = expr$$44.fields[0];
        return [Util$$$resolveExpr(t$$17, returnStrategy$$5, Util$$$transformCast(com$$70, ctx$$73, t$$17, e$$94))];
      }
  }
}

function Util$$$transformFunction(com$$75, ctx$$78, name$$15, args$$56, body$$29) {
  const tailcallChance = (0, _Option.defaultArg)(name$$15, null, function (name$$16) {
    return Util$002ENamedTailCallOpportunity$$$$002Ector$$Z77F31FDD(com$$75, name$$16, args$$56);
  });
  const args$$57 = (0, _List.map)(Util$$$ident, Util$$$discardUnitArg(args$$56));
  const declaredVars = [];
  let isTailCallOptimized = false;
  const ctx$$79 = new Context(ctx$$78.File, ctx$$78.DecisionTargets, function HoistVars(ids) {
    (0, _Array.addRangeInPlace)(ids, declaredVars);
    return true;
  }, tailcallChance, function OptimizeTailCall() {
    isTailCallOptimized = true;
  });
  const body$$30 = (0, _Util.equals)((0, _AST.Expr$$get_Type)(body$$29), new _AST.Type(2, "Unit")) ? Util$$$transformBlock(com$$75, ctx$$79, null, body$$29) : Util$$$isJsStatement(ctx$$79, tailcallChance != null, body$$29) ? Util$$$transformBlock(com$$75, ctx$$79, new ReturnStrategy(0, "Return"), body$$29) : Util$$$transformAsExpr(com$$75, ctx$$79, body$$29);
  let patternInput$$34;
  const matchValue$$30 = [isTailCallOptimized, tailcallChance, body$$30];
  var $target$$71, body$$31, tc$$5;

  if (matchValue$$30[0]) {
    if (matchValue$$30[1] != null) {
      if (matchValue$$30[2] instanceof _AST2.BlockStatement) {
        $target$$71 = 0;
        body$$31 = matchValue$$30[2];
        tc$$5 = matchValue$$30[1];
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
        let patternInput$$33;

        if (tc$$5.ReplaceArgs) {
          const varDeclaration$$1 = Util$$$multiVarDeclaration(new _AST2.VariableDeclarationKind(2, "Const"), (0, _List.map)(function mapping$$19(tupledArg$$20) {
            return [(0, _AST2.Identifier$$get_Name)(tupledArg$$20[0]), (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(tupledArg$$20[1])];
          }, (0, _List.zip)(args$$57, tc$$5.Args)));
          patternInput$$33 = [(0, _List.map)(_AST2.Identifier$$$$002Ector$$Z32D4DD16, tc$$5.Args), (0, _AST2.BlockStatement$$$$002Ector$$Z886A72B)((0, _Array.append)([varDeclaration$$1], (0, _AST2.BlockStatement$$get_Body)(body$$31), Array))];
        } else {
          patternInput$$33 = [args$$57, body$$31];
        }

        patternInput$$34 = [patternInput$$33[0], (0, _AST2.BlockStatement$$$$002Ector$$Z886A72B)((0, _Array.singleton)((0, _AST2.LabeledStatement$$$$002Ector$$36461C34)((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(tc$$5.Label), (0, _AST2.WhileStatement$$$$002Ector$$Z68B1BDB4)((0, _AST2.BooleanLiteral$$$$002Ector$$3426B098)(true), patternInput$$33[1])), Array))];
        break;
      }

    case 1:
      {
        patternInput$$34 = [args$$57, body$$30];
        break;
      }
  }

  let body$$34;

  if ((0, _Util.count)(declaredVars) === 0) {
    body$$34 = patternInput$$34[1];
  } else {
    const varDeclStatement = Util$$$multiVarDeclaration(new _AST2.VariableDeclarationKind(0, "Var"), (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.map)(function (v$$2) {
        return [v$$2.Name, null];
      }, declaredVars);
    })));
    let bodyStatements;

    if (patternInput$$34[1] instanceof _AST2.Expression) {
      const bodyExpr = patternInput$$34[1];
      bodyStatements = [(0, _AST2.ReturnStatement$$$$002Ector$$Z42439CB7)(bodyExpr, (0, _AST2.Node$$get_Loc)(bodyExpr))];
    } else {
      const bodyBlock = patternInput$$34[1];
      bodyStatements = (0, _AST2.BlockStatement$$get_Body)(bodyBlock);
    }

    body$$34 = (0, _AST2.BlockStatement$$$$002Ector$$Z886A72B)((0, _Array.append)([varDeclStatement], bodyStatements, Array));
  }

  return [(0, _Prelude.List$$$mapToArray)(function f$$10(e$$105) {
    return Util$$$toPattern(e$$105);
  }, patternInput$$34[0]), body$$34];
}

function Util$$$declareEntryPoint(_com, _ctx, funcExpr$$6) {
  const argv = Util$$$macroExpression(null, "process.argv.slice(2)", (0, _Types.L)());
  const main = (0, _AST2.CallExpression$$$$002Ector$$67485474)(funcExpr$$6, [argv]);
  return (0, _AST2.ExpressionStatement$$$$002Ector$$Z42439CB7)(main);
}

function Util$$$declareModuleMember(isPublic, name$$17, isMutable$$2, expr$$49) {
  const privateIdent = (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(name$$17);
  const decl$$1 = expr$$49 instanceof _AST2.ClassExpression ? (0, _AST2.ClassDeclaration$$$$002Ector$$Z15AF7394)((0, _AST2.ClassExpression$$get_Body)(expr$$49), privateIdent, (0, _AST2.ClassExpression$$get_SuperClass)(expr$$49), (0, _AST2.ClassExpression$$get_TypeParameters)(expr$$49)) : expr$$49 instanceof _AST2.FunctionExpression ? (0, _AST2.FunctionDeclaration$$$$002Ector$$Z3BD2CFFC)(privateIdent, (0, _AST2.FunctionExpression$$get_Params)(expr$$49), (0, _AST2.FunctionExpression$$get_Body)(expr$$49)) : Util$$$varDeclaration(privateIdent, isMutable$$2, expr$$49);

  if (!isPublic) {
    return decl$$1;
  } else {
    return (0, _AST2.ExportNamedDeclaration$$$$002Ector$$Z4610D90D)(decl$$1);
  }
}

function Util$$$declareType(com$$76, ctx$$80, isPublic$$1, name$$18, consArgs, consBody, baseExpr$$1) {
  var e$$108;
  const consFunction = Util$$$makeFunctionExpression(name$$18, consArgs, consBody);
  return Util$$$declareModuleMember(isPublic$$1, name$$18, false, Util$$$coreLibCall(com$$76, ctx$$80, "Types", "declare", baseExpr$$1 == null ? [consFunction] : (e$$108 = baseExpr$$1, [consFunction, e$$108])));
}

function Util$$$transformModuleFunction(com$$77, ctx$$81, info, args$$61, body$$35) {
  const patternInput$$35 = Util$$$getMemberArgsAndBody(com$$77, ctx$$81, info.Name, null, args$$61, info.HasSpread, body$$35);
  const expr$$51 = (0, _AST2.FunctionExpression$$$$002Ector$$D5FC551)(patternInput$$35[0], patternInput$$35[1]);

  if (info.IsEntryPoint) {
    return Util$$$declareEntryPoint(com$$77, ctx$$81, expr$$51);
  } else {
    return Util$$$declareModuleMember(info.IsPublic, info.Name, false, expr$$51);
  }
}

function Util$$$transformAction(com$$78, ctx$$82, expr$$52) {
  const statements$$2 = Util$$$transformAsStatements(com$$78, ctx$$82, null, expr$$52);
  const hasVarDeclarations = statements$$2.some(function predicate$$6(_arg1$$11) {
    if (_arg1$$11 instanceof _AST2.VariableDeclaration) {
      return true;
    } else {
      return false;
    }
  });

  if (hasVarDeclarations) {
    return (0, _Types.L)((0, _AST2.ExpressionStatement$$$$002Ector$$Z42439CB7)((0, _AST2.CallExpression$$$$002Ector$$67485474)((0, _AST2.FunctionExpression$$$$002Ector$$D5FC551)([], (0, _AST2.BlockStatement$$$$002Ector$$Z886A72B)(statements$$2)), [])), (0, _Types.L)());
  } else {
    return (0, _Array.toList)((0, _Array.map)(function (arg0$$26) {
      return arg0$$26;
    }, statements$$2, Array));
  }
}

function Util$$$transformOverrideProperty(com$$79, ctx$$83, info$$1, getter, setter) {
  const funcExpr$$7 = function funcExpr$$7(tupledArg$$21) {
    const patternInput$$36 = Util$$$prepareBoundThis("this", tupledArg$$21[0]);
    const patternInput$$37 = Util$$$getMemberArgsAndBody(com$$79, ctx$$83, null, patternInput$$36[0], patternInput$$36[1], false, tupledArg$$21[1]);
    return (0, _AST2.FunctionExpression$$$$002Ector$$D5FC551)(patternInput$$37[0], patternInput$$37[1]);
  };

  const getterFuncExpr = (0, _Option.defaultArg)(getter, null, funcExpr$$7);
  const setterFuncExpr = (0, _Option.defaultArg)(setter, null, funcExpr$$7);
  const funcCons = (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(info$$1.EntityName);
  return (0, _Types.L)((0, _AST2.ExpressionStatement$$$$002Ector$$Z42439CB7)(Util$$$jsObject("defineProperty", [Util$$$get(null, funcCons, "prototype"), (0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(info$$1.Name), (0, _AST2.ObjectExpression$$$$002Ector$$Z988B729)((0, _Array.ofSeq)((0, _Seq.delay)(function () {
    var e$$109;
    return (0, _Seq.append)(getterFuncExpr == null ? (null, (0, _Seq.empty)()) : (e$$109 = getterFuncExpr, (0, _Seq.singleton)((0, _AST2.ObjectProperty$$$$002Ector$$Z73E2480E)((0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)("get"), e$$109))), (0, _Seq.delay)(function () {
      if (setterFuncExpr == null) {
        return (0, _Seq.empty)();
      } else {
        const e$$110 = setterFuncExpr;
        return (0, _Seq.singleton)((0, _AST2.ObjectProperty$$$$002Ector$$Z73E2480E)((0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)("set"), e$$110));
      }
    }));
  }), Array))])), (0, _Types.L)());
}

function Util$$$transformOverrideMethod(com$$80, ctx$$84, info$$2, args$$66, body$$39) {
  const funcCons$$1 = (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(info$$2.EntityName);
  let patternInput$$38;

  if (info$$2.Kind.tag === 4) {
    patternInput$$38 = ["Symbol.iterator", false, (0, _Replacements.enumerator2iterator)(body$$39)];
  } else if (info$$2.Kind.tag === 1) {
    const hasSpread$$3 = info$$2.Kind.fields[0];
    patternInput$$38 = [info$$2.Name, hasSpread$$3, body$$39];
  } else {
    patternInput$$38 = [info$$2.Name, false, body$$39];
  }

  const patternInput$$39 = Util$$$prepareBoundThis("this", args$$66);
  const patternInput$$40 = Util$$$getMemberArgsAndBody(com$$80, ctx$$84, null, patternInput$$39[0], patternInput$$39[1], patternInput$$38[1], patternInput$$38[2]);
  const funcExpr$$8 = (0, _AST2.FunctionExpression$$$$002Ector$$D5FC551)(patternInput$$40[0], patternInput$$40[1]);
  let protoMember;
  const activePatternResult69693 = (0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("Symbol.", patternInput$$38[0]);

  if (activePatternResult69693 != null) {
    const symbolName = activePatternResult69693;
    protoMember = Util$$$get(null, (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)("Symbol"), symbolName);
  } else {
    if (patternInput$$38[0] === "ToString") {
      protoMember = (0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)("toString");
    } else {
      const name$$19 = patternInput$$38[0];
      protoMember = (0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(name$$19);
    }
  }

  const protoMember$$1 = Util$$$getExpr(null, Util$$$get(null, funcCons$$1, "prototype"), protoMember);
  return (0, _Types.L)((0, _AST2.ExpressionStatement$$$$002Ector$$Z42439CB7)(Util$$$assign(null, protoMember$$1, funcExpr$$8)), (0, _Types.L)());
}

function Util$$$transformUnionConstructor(com$$81, ctx$$85, info$$3) {
  const baseRef = Util$$$coreValue(com$$81, ctx$$85, "Types", "Union");
  const args$$69 = [Util$$$toPattern((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)("tag")), Util$$$toPattern((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)("name")), Util$$$restElement((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)("fields"))];
  const body$$42 = (0, _AST2.ExpressionStatement$$$$002Ector$$Z42439CB7)(Util$$$callFunctionWithThisContext(null, baseRef, Util$$$thisExpr, (0, _Types.L)((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)("tag"), (0, _Types.L)((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)("name"), (0, _Types.L)((0, _AST2.SpreadElement$$$$002Ector$$Z42439CB7)((0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)("fields")), (0, _Types.L)())))));
  return (0, _Types.L)(Util$$$declareType(com$$81, ctx$$85, info$$3.IsPublic, info$$3.EntityName, args$$69, (0, _AST2.BlockStatement$$$$002Ector$$Z886A72B)([body$$42]), baseRef), (0, _Types.L)());
}

function Util$$$transformCompilerGeneratedConstructor(com$$82, ctx$$86, info$$4) {
  const args$$71 = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (i$$10) {
      return (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)("arg" + (0, _Util.int32ToString)(i$$10));
    }, (0, _Seq.rangeNumber)(1, 1, (0, _Util.count)((0, _Symbols.FSharpEntity$$get_FSharpFields)(info$$4.Entity))));
  }), Array);
  const setters = (0, _Array.ofSeq)((0, _Seq.mapIndexed)(function mapping$$21(i$$11, fi$$4) {
    const left$$7 = Util$$$get(null, (0, _AST2.ThisExpression$$$$002Ector$$Z2370DF4E)(), (0, _Symbols.FSharpField$$get_Name)(fi$$4));
    const right$$6 = (0, _FSharp2Fable.TypeHelpers$$$isSignedIntType)((0, _Symbols.FSharpField$$get_FieldType)(fi$$4)) ? (0, _AST2.BinaryExpression$$$$002Ector$$F065D52)(new _AST3.BinaryOperator(17, "BinaryOrBitwise"), args$$71[i$$11], (0, _AST2.NumericLiteral$$$$002Ector$$Z64831D7)(0)) : args$$71[i$$11];
    return (0, _AST2.ExpressionStatement$$$$002Ector$$Z42439CB7)(Util$$$assign(null, left$$7, right$$6));
  }, (0, _Symbols.FSharpEntity$$get_FSharpFields)(info$$4.Entity)), Array);
  const baseExpr$$2 = (0, _Symbols.FSharpEntity$$get_IsFSharpExceptionDeclaration)(info$$4.Entity) ? Util$$$coreValue(com$$82, ctx$$86, "Types", "FSharpException") : ((0, _Symbols.FSharpEntity$$get_IsFSharpRecord)(info$$4.Entity) ? true : (0, _Symbols.FSharpEntity$$get_IsValueType)(info$$4.Entity)) ? Util$$$coreValue(com$$82, ctx$$86, "Types", "Record") : null;
  const args$$72 = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (arg$$8) {
      return Util$$$toPattern(arg$$8);
    }, args$$71);
  }), Array);
  return (0, _Types.L)(Util$$$declareType(com$$82, ctx$$86, info$$4.IsPublic, info$$4.EntityName, args$$72, (0, _AST2.BlockStatement$$$$002Ector$$Z886A72B)(setters), baseExpr$$2), (0, _Types.L)());
}

function Util$$$transformImplicitConstructor(com$$83, ctx$$87, info$$5) {
  var args$$74, unitArg$$4;
  const boundThis$$7 = ["this", info$$5.BoundConstructorThis];
  const patternInput$$41 = Util$$$getMemberArgsAndBody(com$$83, ctx$$87, null, boundThis$$7, info$$5.Arguments, info$$5.HasSpread, info$$5.Body);
  let patternInput$$42;
  var $target$$72, unitArg$$5;

  if (info$$5.Arguments.tail != null) {
    if (info$$5.Arguments.tail.tail == null) {
      if (unitArg$$4 = info$$5.Arguments.head, (0, _Util.equals)(unitArg$$4.Type, new _AST.Type(2, "Unit"))) {
        $target$$72 = 1;
        unitArg$$5 = info$$5.Arguments.head;
      } else {
        $target$$72 = 2;
      }
    } else {
      $target$$72 = 2;
    }
  } else {
    $target$$72 = 0;
  }

  switch ($target$$72) {
    case 0:
      {
        patternInput$$42 = [(0, _Types.L)(), (0, _Types.L)()];
        break;
      }

    case 1:
      {
        patternInput$$42 = [(0, _Types.L)(), (0, _Types.L)()];
        break;
      }

    case 2:
      {
        if (args$$74 = info$$5.Arguments, info$$5.HasSpread) {
          const args$$75 = info$$5.Arguments;
          const args$$76 = (0, _List.reverse)(args$$75);
          patternInput$$42 = [(0, _List.reverse)((0, _Types.L)(Util$$$restElement(Util$$$ident((0, _List.head)(args$$76))), (0, _List.map)(Util$$$identAsPattern, (0, _List.tail)(args$$76)))), (0, _List.reverse)((0, _Types.L)((0, _AST2.SpreadElement$$$$002Ector$$Z42439CB7)(Util$$$ident((0, _List.head)(args$$76))), (0, _List.map)(Util$$$identAsExpr, (0, _List.tail)(args$$76))))];
        } else {
          const args$$77 = info$$5.Arguments;
          patternInput$$42 = [(0, _List.map)(Util$$$identAsPattern, args$$77), (0, _List.map)(Util$$$identAsExpr, args$$77)];
        }

        break;
      }
  }

  const consIdent = (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(info$$5.EntityName);
  const exposedCons = (0, _AST2.FunctionExpression$$$$002Ector$$D5FC551)((0, _Array.ofList)(patternInput$$42[0], Array), (0, _AST2.BlockStatement$$$$002Ector$$Z886A72B)([(0, _AST2.ReturnStatement$$$$002Ector$$Z42439CB7)((0, _AST2.ConditionalExpression$$$$002Ector$$75B0CFE9)((0, _AST2.BinaryExpression$$$$002Ector$$F065D52)(new _AST3.BinaryOperator(1, "BinaryUnequal"), (0, _AST2.ThisExpression$$$$002Ector$$Z2370DF4E)(), (0, _AST2.NullLiteral$$$$002Ector$$Z2370DF4E)()), Util$$$callFunctionWithThisContext(null, consIdent, Util$$$thisExpr, patternInput$$42[1]), (0, _AST2.NewExpression$$$$002Ector$$67485474)(consIdent, (0, _Array.ofList)(patternInput$$42[1], Array))))]));
  let baseExpr$$3;

  if (info$$5.Base == null) {
    if ((0, _Symbols.FSharpEntity$$get_IsValueType)(info$$5.Entity)) {
      baseExpr$$3 = Util$$$coreValue(com$$83, ctx$$87, "Types", "Record");
    } else {
      if (info$$5.Base == null) {
        baseExpr$$3 = null;
      } else {
        throw new _Types.MatchFailureException("C:/code/fable/src/dotnet/Fable.Compiler/Transforms/Fable2Babel.fs", 1417, 18);
      }
    }
  } else {
    const baseRef$$1 = com$$83.TransformAsExpr(ctx$$87, info$$5.Base);
    baseExpr$$3 = baseRef$$1;
  }

  return (0, _Types.L)(Util$$$declareType(com$$83, ctx$$87, info$$5.IsEntityPublic, info$$5.EntityName, patternInput$$41[0], patternInput$$41[1], baseExpr$$3), (0, _Types.L)(Util$$$declareModuleMember(info$$5.IsConstructorPublic, info$$5.Name, false, exposedCons), (0, _Types.L)()));
}

function Util$$$transformDeclarations(com$$85, ctx$$89, decls, transformed) {
  var value$$25, value$$26, value$$28, restDecls$$1, info2, body2, args2;

  Util$$$transformDeclarations: while (true) {
    if (decls.tail != null) {
      const restDecls = decls.tail;
      const decl$$2 = decls.head;

      switch (decl$$2.tag) {
        case 1:
          {
            const value$$24 = decl$$2.fields[0];
            const info$$6 = decl$$2.fields[1];
            const $var$$73 = com$$85;
            const $var$$74 = ctx$$89;
            decls = restDecls;
            transformed = (0, _List.append)(transformed, (value$$25 = value$$24, info$$6.IsMutable ? info$$6.IsPublic : false) ? (value$$26 = value$$24, (0, _Types.L)(Util$$$declareModuleMember(true, info$$6.Name, false, Util$$$transformAsExpr(com$$85, ctx$$89, (0, _Replacements.createAtom)(value$$26))), (0, _Types.L)())) : value$$24.tag === 5 ? value$$24.fields[0].tag === 1 ? (0, _Types.L)(Util$$$transformModuleFunction(com$$85, ctx$$89, info$$6, value$$24.fields[0].fields[0], value$$24.fields[1]), (0, _Types.L)()) : (value$$28 = Util$$$transformAsExpr(com$$85, ctx$$89, value$$24), (0, _Types.L)(Util$$$declareModuleMember(info$$6.IsPublic, info$$6.Name, info$$6.IsMutable, value$$28), (0, _Types.L)())) : (value$$28 = Util$$$transformAsExpr(com$$85, ctx$$89, value$$24), (0, _Types.L)(Util$$$declareModuleMember(info$$6.IsPublic, info$$6.Name, info$$6.IsMutable, value$$28), (0, _Types.L)())));
            com$$85 = $var$$73;
            ctx$$89 = $var$$74;
            continue Util$$$transformDeclarations;
          }

        case 3:
          {
            const kind$$23 = decl$$2.fields[0];
            let consDecls;

            switch (kind$$23.tag) {
              case 1:
                {
                  const info$$8 = kind$$23.fields[0];
                  consDecls = Util$$$transformUnionConstructor(com$$85, ctx$$89, info$$8);
                  break;
                }

              case 2:
                {
                  const info$$9 = kind$$23.fields[0];
                  consDecls = Util$$$transformCompilerGeneratedConstructor(com$$85, ctx$$89, info$$9);
                  break;
                }

              default:
                {
                  const info$$7 = kind$$23.fields[0];
                  consDecls = Util$$$transformImplicitConstructor(com$$85, ctx$$89, info$$7);
                }
            }

            com$$85 = com$$85;
            ctx$$89 = ctx$$89;
            decls = restDecls;
            transformed = (0, _List.append)(transformed, consDecls);
            continue Util$$$transformDeclarations;
          }

        case 2:
          {
            const info$$10 = decl$$2.fields[2];
            const body$$45 = decl$$2.fields[1];
            const args$$79 = decl$$2.fields[0];
            let patternInput$$44;
            var $target$$75, kind$$24;

            if (info$$10.Kind.tag === 2) {
              $target$$75 = 0;
              kind$$24 = info$$10.Kind;
            } else if (info$$10.Kind.tag === 3) {
              $target$$75 = 0;
              kind$$24 = info$$10.Kind;
            } else {
              $target$$75 = 1;
            }

            switch ($target$$75) {
              case 0:
                {
                  const patternInput$$43 = restDecls.tail != null ? restDecls.head.tag === 2 ? (restDecls$$1 = restDecls.tail, (info2 = restDecls.head.fields[2], (body2 = restDecls.head.fields[1], (args2 = restDecls.head.fields[0], info$$10.Name === info2.Name)))) ? kind$$24.tag === 2 ? [[args$$79, body$$45], [restDecls.head.fields[0], restDecls.head.fields[1]], restDecls.tail] : [[restDecls.head.fields[0], restDecls.head.fields[1]], [args$$79, body$$45], restDecls.tail] : kind$$24.tag === 2 ? [[args$$79, body$$45], null, restDecls] : [null, [args$$79, body$$45], restDecls] : kind$$24.tag === 2 ? [[args$$79, body$$45], null, restDecls] : [null, [args$$79, body$$45], restDecls] : kind$$24.tag === 2 ? [[args$$79, body$$45], null, restDecls] : [null, [args$$79, body$$45], restDecls];
                  patternInput$$44 = [Util$$$transformOverrideProperty(com$$85, ctx$$89, info$$10, patternInput$$43[0], patternInput$$43[1]), patternInput$$43[2]];
                  break;
                }

              case 1:
                {
                  patternInput$$44 = [Util$$$transformOverrideMethod(com$$85, ctx$$89, info$$10, args$$79, body$$45), restDecls];
                  break;
                }
            }

            com$$85 = com$$85;
            ctx$$89 = ctx$$89;
            decls = patternInput$$44[1];
            transformed = (0, _List.append)(transformed, patternInput$$44[0]);
            continue Util$$$transformDeclarations;
          }

        default:
          {
            const e$$116 = decl$$2.fields[0];
            const $var$$76 = com$$85;
            const $var$$77 = ctx$$89;
            decls = restDecls;
            transformed = (0, _List.append)(transformed, Util$$$transformAction(com$$85, ctx$$89, e$$116));
            com$$85 = $var$$76;
            ctx$$89 = $var$$77;
            continue Util$$$transformDeclarations;
          }
      }
    } else {
      return transformed;
    }
  }
}

function Util$$$transformImports(imports) {
  return (0, _List.ofSeq)((0, _Seq.collect)(function mapping$$24(tupledArg$$22) {
    const patternInput$$45 = (0, _Seq.fold)(function folder$$3(tupledArg$$23, x$$11) {
      let t$$28;

      if (x$$11 instanceof _AST2.ImportDefaultSpecifier) {
        const x$$13 = x$$11;
        t$$28 = (0, _AST2.Node$$get_Type)(x$$13);
      } else if (x$$11 instanceof _AST2.ImportNamespaceSpecifier) {
        const x$$14 = x$$11;
        t$$28 = (0, _AST2.Node$$get_Type)(x$$14);
      } else {
        const x$$12 = x$$11;
        t$$28 = (0, _AST2.Node$$get_Type)(x$$12);
      }

      switch (t$$28) {
        case "ImportNamespaceSpecifier":
          {
            return [tupledArg$$23[0], tupledArg$$23[1], (0, _Types.L)(x$$11, tupledArg$$23[2])];
          }

        case "ImportDefaultSpecifier":
          {
            return [tupledArg$$23[0], (0, _Types.L)(x$$11, tupledArg$$23[1]), tupledArg$$23[2]];
          }

        default:
          {
            return [(0, _Types.L)(x$$11, tupledArg$$23[0]), tupledArg$$23[1], tupledArg$$23[2]];
          }
      }
    }, [(0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)()], (0, _Seq.choose)(function (tuple$$7) {
      return tuple$$7[1];
    }, tupledArg$$22[1]));
    const matchValue$$36 = (0, _Types.L)(patternInput$$45[0], (0, _Types.L)(patternInput$$45[1], (0, _Types.L)(patternInput$$45[2], (0, _Types.L)())));
    var $target$$78, specifiers$$1;

    if (matchValue$$36.tail != null) {
      if (matchValue$$36.head.tail == null) {
        if (matchValue$$36.tail.tail != null) {
          if (matchValue$$36.tail.head.tail == null) {
            if (matchValue$$36.tail.tail.tail != null) {
              if (matchValue$$36.tail.tail.head.tail == null) {
                if (matchValue$$36.tail.tail.tail.tail == null) {
                  $target$$78 = 0;
                } else {
                  $target$$78 = 1;
                  specifiers$$1 = matchValue$$36;
                }
              } else {
                $target$$78 = 1;
                specifiers$$1 = matchValue$$36;
              }
            } else {
              $target$$78 = 1;
              specifiers$$1 = matchValue$$36;
            }
          } else {
            $target$$78 = 1;
            specifiers$$1 = matchValue$$36;
          }
        } else {
          $target$$78 = 1;
          specifiers$$1 = matchValue$$36;
        }
      } else {
        $target$$78 = 1;
        specifiers$$1 = matchValue$$36;
      }
    } else {
      $target$$78 = 1;
      specifiers$$1 = matchValue$$36;
    }

    switch ($target$$78) {
      case 0:
        {
          return (0, _Types.L)((0, _AST2.ImportDeclaration$$$$002Ector$$462F86FA)([], (0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(tupledArg$$22[0])), (0, _Types.L)());
        }

      case 1:
        {
          return (0, _List.choose)(function chooser$$1(_arg1$$12) {
            if (_arg1$$12.tail == null) {
              return null;
            } else {
              const specifiers$$2 = _arg1$$12;
              return (0, _AST2.ImportDeclaration$$$$002Ector$$462F86FA)((0, _Array.ofList)(specifiers$$2, Array), (0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)(tupledArg$$22[0]));
            }
          }, specifiers$$1);
        }
    }
  }, (0, _Map.groupBy)(function projection$$1(tuple$$6) {
    return tuple$$6[0];
  }, (0, _Seq.map)(function mapping$$23(import$) {
    const specifier = (0, _Option.defaultArg)(import$.LocalIdent, null, function mapping$$22(localId) {
      const localId$$1 = (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(localId);
      var $target$$79;

      if (import$.Selector === "*") {
        $target$$79 = 0;
      } else if (import$.Selector === "default") {
        $target$$79 = 1;
      } else if (import$.Selector === "") {
        $target$$79 = 1;
      } else {
        $target$$79 = 2;
      }

      switch ($target$$79) {
        case 0:
          {
            return (0, _AST2.ImportNamespaceSpecifier$$$$002Ector$$67C6C58)(localId$$1);
          }

        case 1:
          {
            return (0, _AST2.ImportDefaultSpecifier$$$$002Ector$$67C6C58)(localId$$1);
          }

        case 2:
          {
            const memb = import$.Selector;
            return (0, _AST2.ImportSpecifier$$$$002Ector$$76F1A3F2)(localId$$1, (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(memb));
          }
      }
    });
    return [import$.Path, specifier];
  }, imports), {
    Compare: _Util.comparePrimitives
  })));
}

function Util$$$getLocalIdent(ctx$$90, imports$$1, path$$6, selector$$5) {
  var x$$15, selector$$6;
  return (0, _Option.defaultArg)(selector$$5 === "" ? null : selector$$5 === "*" ? (x$$15 = (0, _String.trimEnd)(path$$6, "/"), x$$15.substr(x$$15.lastIndexOf("/") + 1)) : selector$$5 === "default" ? (x$$15 = (0, _String.trimEnd)(path$$6, "/"), x$$15.substr(x$$15.lastIndexOf("/") + 1)) : (selector$$6 = selector$$5, selector$$6), null, function mapping$$25(selector$$7) {
    return (0, _Prelude.Naming$$$sanitizeIdent)(function conflicts(s$$1) {
      if ((0, _Set.FSharpSet$$Contains$$2B595)((0, _AST.File$$get_UsedVarNames)(ctx$$90.File), s$$1)) {
        return true;
      } else {
        return (0, _Seq.exists)(function predicate$$7(i$$12) {
          return (0, _Util.equals)(i$$12.LocalIdent, s$$1);
        }, imports$$1.values());
      }
    }, selector$$7, new _Prelude.Naming$002EMemberPart(2, "NoMemberPart"));
  });
}

const Compiler$002EBabelCompiler = (0, _Types.declare)(function Compiler$002EBabelCompiler(com$$86) {
  const $this$$31 = this;
  $this$$31.com = com$$86;
  $this$$31.dependencies = new Set([]);
  $this$$31.imports = new Map([]);
});
exports.Compiler$002EBabelCompiler = Compiler$002EBabelCompiler;

function Compiler$002EBabelCompiler$$$$002Ector$$740660D(com$$86) {
  return this != null ? Compiler$002EBabelCompiler.call(this, com$$86) : new Compiler$002EBabelCompiler(com$$86);
}

Compiler$002EBabelCompiler.prototype.GetImportExpr = function (ctx$$91, selector$$8, path$$7, kind$$25) {
  const __$$4 = this;
  const matchValue$$37 = (0, _Util.tryGetValue)(__$$4.imports, path$$7 + "::" + selector$$8, null);

  if (matchValue$$37[0]) {
    if (matchValue$$37[1].LocalIdent == null) {
      return (0, _AST2.NullLiteral$$$$002Ector$$Z2370DF4E)();
    } else {
      const localIdent = matchValue$$37[1].LocalIdent;
      return (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(localIdent);
    }
  } else {
    const localId$$2 = Util$$$getLocalIdent(ctx$$91, __$$4.imports, path$$7, selector$$8);
    const sanitizedPath = kind$$25.tag === 1 ? path$$7 : kind$$25.tag === 0 ? __$$4.com.FableCore + "/" + path$$7 + _Prelude.Naming$$$targetFileExtension : path$$7;
    const i$$14 = new Import(selector$$8 === "__PLACE-HOLDER__" ? ((0, _Transforms.Log$$$addError)(__$$4.com, (0, _Types.L)(), null, "`importMember` must be assigned to a variable"), selector$$8) : selector$$8, localId$$2, sanitizedPath);

    __$$4.imports.set(path$$7 + "::" + selector$$8, i$$14);

    if (localId$$2 == null) {
      return (0, _AST2.NullLiteral$$$$002Ector$$Z2370DF4E)();
    } else {
      const localId$$3 = localId$$2;
      return (0, _AST2.Identifier$$$$002Ector$$Z32D4DD16)(localId$$3);
    }
  }
};

Compiler$002EBabelCompiler.prototype.GetAllImports = function () {
  const __$$5 = this;
  return __$$5.imports.values();
};

Compiler$002EBabelCompiler.prototype.GetAllDependencies = function () {
  const __$$6 = this;
  return __$$6.dependencies;
};

Compiler$002EBabelCompiler.prototype.TransformAsExpr = function (ctx$$92, e$$117) {
  const bcom = this;
  return Util$$$transformAsExpr(bcom, ctx$$92, e$$117);
};

Compiler$002EBabelCompiler.prototype.TransformAsStatements = function (ctx$$93, ret$$6, e$$118) {
  const bcom$$1 = this;
  return Util$$$transformAsStatements(bcom$$1, ctx$$93, ret$$6, e$$118);
};

Compiler$002EBabelCompiler.prototype.TransformFunction = function (ctx$$94, name$$22, args$$80, body$$46) {
  const bcom$$2 = this;
  return Util$$$transformFunction(bcom$$2, ctx$$94, name$$22, args$$80, body$$46);
};

Compiler$002EBabelCompiler.prototype.TransformObjectExpr = function (ctx$$95, members$$3, boundThis$$8, baseCall$$4) {
  const bcom$$3 = this;
  return Util$$$transformObjectExpr(bcom$$3, ctx$$95, members$$3, boundThis$$8, baseCall$$4);
};

Compiler$002EBabelCompiler.prototype.TransformImport = function (ctx$$96, selector$$9, path$$8, kind$$26) {
  const bcom$$4 = this;
  return Util$$$transformImport(bcom$$4, ctx$$96, null, (0, _Transforms.AST$$$makeStrConst)(selector$$9), (0, _Transforms.AST$$$makeStrConst)(path$$8), kind$$26);
};

Object.defineProperty(Compiler$002EBabelCompiler.prototype, "Options", {
  "get": function () {
    const __$$7 = this;
    return __$$7.com.Options;
  }
});
Object.defineProperty(Compiler$002EBabelCompiler.prototype, "FableCore", {
  "get": function () {
    const __$$8 = this;
    return __$$8.com.FableCore;
  }
});
Object.defineProperty(Compiler$002EBabelCompiler.prototype, "CurrentFile", {
  "get": function () {
    const __$$9 = this;
    return __$$9.com.CurrentFile;
  }
});

Compiler$002EBabelCompiler.prototype.GetUniqueVar = function (name$$23) {
  const __$$10 = this;
  return __$$10.com.GetUniqueVar(name$$23);
};

Compiler$002EBabelCompiler.prototype.GetRootModule = function (fileName) {
  const __$$11 = this;
  return __$$11.com.GetRootModule(fileName);
};

Compiler$002EBabelCompiler.prototype.GetOrAddInlineExpr = function (fullName$$1, generate) {
  const __$$12 = this;
  return __$$12.com.GetOrAddInlineExpr(fullName$$1, generate);
};

Compiler$002EBabelCompiler.prototype.AddLog = function (msg$$3, severity, range$$22, fileName$$1, tag$$1) {
  const __$$13 = this;

  __$$13.com.AddLog(msg$$3, severity, range$$22, fileName$$1, tag$$1);
};

function Compiler$$$makeCompiler(com$$88) {
  return Compiler$002EBabelCompiler$$$$002Ector$$740660D(com$$88);
}

function Compiler$$$createFacade(sourceFiles, facadeFile) {
  const sourceFiles$$1 = sourceFiles.filter(function predicate$$8(x$$16) {
    return !(0, _String.endsWith)(x$$16, ".fsi");
  });
  let decls$$1;
  const importFile = (0, _Array.last)(sourceFiles$$1);
  decls$$1 = (0, _Array.singleton)((0, _AST2.ExportAllDeclaration$$$$002Ector$$419B5150)((0, _AST2.StringLiteral$$$$002Ector$$Z6923DCD7)((0, _Prelude.Path$$$getRelativeFileOrDirPath)(false, facadeFile, false, importFile))), Array);
  return (0, _AST2.Program$$$$002Ector$$327B3B2F)(facadeFile, decls$$1, null, null, null, sourceFiles$$1);
}

function Compiler$$$transformFile(com$$89, file) {
  try {
    const com$$90 = Compiler$$$makeCompiler(com$$89);
    const ctx$$97 = new Context(file, (0, _Types.L)(), function (_arg1$$13) {
      return false;
    }, null, function () {});
    const rootDecls = Util$$$transformDeclarations(com$$90, ctx$$97, (0, _AST.File$$get_Declarations)(file), (0, _Types.L)());
    const importDecls = Util$$$transformImports(com$$90.GetAllImports());
    const dependencies = (0, _Array.ofSeq)((0, _Seq.append)((0, _AST.File$$get_Dependencies)(file), com$$90.GetAllDependencies()), Array);
    return (0, _AST2.Program$$$$002Ector$$327B3B2F)((0, _AST.File$$get_SourcePath)(file), (0, _Array.ofList)((0, _List.append)(importDecls, rootDecls), Array), null, null, dependencies);
  } catch (ex$$1) {
    throw new Error((0, _String.toText)((0, _String.printf)("%s (%s)"))(ex$$1.message)((0, _AST.File$$get_SourcePath)(file)), ex$$1);
  }
}