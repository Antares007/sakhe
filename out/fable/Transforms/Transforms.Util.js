"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dictionary$00602$002EGetOrAdd$$FCD6C4A = Dictionary$00602$002EGetOrAdd$$FCD6C4A;
exports.Dictionary$00602$002EAddOrUpdate$$Z5E44222A = Dictionary$00602$002EAddOrUpdate$$Z5E44222A;
exports.Log$$$addWarning = Log$$$addWarning;
exports.Log$$$addError = Log$$$addError;
exports.Log$$$addErrorAndReturnNull = Log$$$addErrorAndReturnNull;
exports.Log$$$attachRange = Log$$$attachRange;
exports.Log$$$attachRangeAndFile = Log$$$attachRangeAndFile;
exports.AST$$$$007CNestedLambdaType$007C_$007C = AST$$$$007CNestedLambdaType$007C_$007C;
exports.AST$$$$007CNestedLambda$007C_$007C = AST$$$$007CNestedLambda$007C_$007C;
exports.AST$$$$007CNestedApply$007C_$007C = AST$$$$007CNestedApply$007C_$007C;
exports.AST$$$$007CLambdaUncurriedAtCompileTime$007C_$007C = AST$$$$007CLambdaUncurriedAtCompileTime$007C_$007C;
exports.AST$$$$007CMaybeCasted$007C = AST$$$$007CMaybeCasted$007C;
exports.AST$$$$007CMaybeLambdaUncurriedAtCompileTime$007C = AST$$$$007CMaybeLambdaUncurriedAtCompileTime$007C;
exports.AST$$$hasDoubleEvalRisk = AST$$$hasDoubleEvalRisk;
exports.AST$$$mustWrapOption = AST$$$mustWrapOption;
exports.AST$$$makeIdentNonMangled = AST$$$makeIdentNonMangled;
exports.AST$$$makeIdentUnique = AST$$$makeIdentUnique;
exports.AST$$$makeTypedIdentNonMangled = AST$$$makeTypedIdentNonMangled;
exports.AST$$$makeTypedIdentUnique = AST$$$makeTypedIdentUnique;
exports.AST$$$makeIdentExprNonMangled = AST$$$makeIdentExprNonMangled;
exports.AST$$$makeLoop = AST$$$makeLoop;
exports.AST$$$makeBinOp = AST$$$makeBinOp;
exports.AST$$$makeUnOp = AST$$$makeUnOp;
exports.AST$$$makeLogOp = AST$$$makeLogOp;
exports.AST$$$makeEqOp = AST$$$makeEqOp;
exports.AST$$$makeArray = AST$$$makeArray;
exports.AST$$$makeDelegate = AST$$$makeDelegate;
exports.AST$$$makeLambda = AST$$$makeLambda;
exports.AST$$$makeBoolConst = AST$$$makeBoolConst;
exports.AST$$$makeStrConst = AST$$$makeStrConst;
exports.AST$$$makeIntConst = AST$$$makeIntConst;
exports.AST$$$makeFloatConst = AST$$$makeFloatConst;
exports.AST$$$makeDecConst = AST$$$makeDecConst;
exports.AST$$$makeCoreRef = AST$$$makeCoreRef;
exports.AST$$$makeCustomImport = AST$$$makeCustomImport;
exports.AST$$$makeInternalImport = AST$$$makeInternalImport;
exports.AST$$$argInfo = AST$$$argInfo;
exports.AST$$$staticCall = AST$$$staticCall;
exports.AST$$$constructorCall = AST$$$constructorCall;
exports.AST$$$instanceCall = AST$$$instanceCall;
exports.AST$$$getExpr = AST$$$getExpr;
exports.AST$$$get = AST$$$get;
exports.AST$$$getTypedArrayName = AST$$$getTypedArrayName;
exports.AST$$$listEquals = AST$$$listEquals;
exports.AST$$$typeEquals = AST$$$typeEquals;
exports.AST$$$getTypeFullName = AST$$$getTypeFullName;
exports.Operators$$$standardSet = void 0;

var _Util = require("../fable-core.2.0.3/Util");

var _Set = require("../fable-core.2.0.3/Set");

var _Prelude = require("../Global/Prelude");

var _String = require("../fable-core.2.0.3/String");

var _Types = require("../fable-core.2.0.3/Types");

var _List = require("../fable-core.2.0.3/List");

var _Compiler = require("../Global/Compiler");

var _AST = require("../AST/AST.Fable");

var _Option = require("../fable-core.2.0.3/Option");

var _AST2 = require("../AST/AST.Common");

var _Symbols = require("../symbols/Symbols");

const Operators$$$standardSet = (0, _Set.ofSeq)(["op_Addition", "op_Subtraction", "op_Multiply", "op_Division", "op_Modulus", "op_LeftShift", "op_RightShift", "op_BitwiseAnd", "op_BitwiseOr", "op_ExclusiveOr", "op_BooleanAnd", "op_BooleanOr", "op_LogicalNot", "op_UnaryNegation"], {
  Compare: _Util.comparePrimitives
});
exports.Operators$$$standardSet = Operators$$$standardSet;

function Dictionary$00602$002EGetOrAdd$$FCD6C4A(dic, key, addFn) {
  const matchValue = (0, _Util.tryGetValue)(dic, key, null);

  if (matchValue[0]) {
    return matchValue[1];
  } else {
    const v$$1 = addFn();
    dic.set(key, v$$1);
    return v$$1;
  }
}

function Dictionary$00602$002EAddOrUpdate$$Z5E44222A(dic$$1, key$$1, addFn$$1, updateFn) {
  let v$$3;
  const matchValue$$1 = (0, _Util.tryGetValue)(dic$$1, key$$1, null);

  if (matchValue$$1[0]) {
    dic$$1.delete(key$$1);
    v$$3 = updateFn(key$$1, matchValue$$1[1]);
  } else {
    v$$3 = addFn$$1(key$$1);
  }

  dic$$1.set(key$$1, v$$3);
  return v$$3;
}

function Log$$$addLog(com, inlinePath, range, msg, severity) {
  const printInlineSource = function printInlineSource(refPath, path, r) {
    const path$$1 = (0, _Prelude.Path$$$getRelativeFileOrDirPath)(false, refPath, false, path);

    if (r == null) {
      return path$$1;
    } else {
      const r$$1 = r;
      return (0, _String.toText)((0, _String.printf)("%s(%i,%i)"))(path$$1)(r$$1.start.line)(r$$1.start.column);
    }
  };

  const buildInlinePath = function buildInlinePath(acc, refPath$$1, r$$2, _arg1) {
    buildInlinePath: while (true) {
      if (_arg1.tail != null) {
        const rest = _arg1.tail;
        const r2 = _arg1.head[1];
        const file = _arg1.head[0];
        const acc$$1 = (0, _Types.L)(printInlineSource(refPath$$1, file, r$$2), acc);
        acc = acc$$1;
        refPath$$1 = refPath$$1;
        r$$2 = r2;
        _arg1 = rest;
        continue buildInlinePath;
      } else {
        return " - Inline call from " + (0, _String.join)(" < ", ...(0, _List.reverse)((0, _Types.L)(printInlineSource(refPath$$1, com.CurrentFile, r$$2), acc)));
      }
    }
  };

  let patternInput;

  if (inlinePath.tail != null) {
    const r$$3 = inlinePath.head[1];
    const inlinePath$$1 = inlinePath.tail;
    const file$$1 = inlinePath.head[0];
    patternInput = [file$$1, msg + buildInlinePath((0, _Types.L)(), file$$1, r$$3, inlinePath$$1)];
  } else {
    patternInput = [com.CurrentFile, msg];
  }

  com.AddLog(patternInput[1], severity, range, patternInput[0]);
}

function Log$$$addWarning(com$$1, inlinePath$$2, range$$1, warning) {
  Log$$$addLog(com$$1, inlinePath$$2, range$$1, warning, new _Compiler.Severity(0, "Warning"));
}

function Log$$$addError(com$$2, inlinePath$$3, range$$2, error) {
  Log$$$addLog(com$$2, inlinePath$$3, range$$2, error, new _Compiler.Severity(1, "Error"));
}

function Log$$$addErrorAndReturnNull(com$$3, inlinePath$$4, range$$3, error$$1) {
  Log$$$addLog(com$$3, inlinePath$$4, range$$3, error$$1, new _Compiler.Severity(1, "Error"));
  return new _AST.Expr(0, "Value", new _AST.ValueKind(1, "Null", new _AST.Type(1, "Any")));
}

function Log$$$attachRange(range$$4, msg$$2) {
  if (range$$4 == null) {
    return msg$$2;
  } else {
    const range$$5 = range$$4;
    return msg$$2 + " " + range$$5.toString();
  }
}

function Log$$$attachRangeAndFile(range$$6, fileName, msg$$3) {
  if (range$$6 == null) {
    return msg$$3 + " (" + fileName + ")";
  } else {
    const range$$7 = range$$6;
    return msg$$3 + " " + range$$7.toString() + " (" + fileName + ")";
  }
}

function AST$$$$007CNestedLambdaType$007C_$007C(t) {
  const nestedLambda = function nestedLambda(acc$$2, _arg1$$1) {
    nestedLambda: while (true) {
      var $target$$10, arg, returnType, returnType$$1;

      if (_arg1$$1.tag === 13) {
        if (_arg1$$1.fields[0].tag === 0) {
          $target$$10 = 0;
          arg = _arg1$$1.fields[0].fields[0];
          returnType = _arg1$$1.fields[1];
        } else {
          $target$$10 = 1;
          returnType$$1 = _arg1$$1;
        }
      } else {
        $target$$10 = 1;
        returnType$$1 = _arg1$$1;
      }

      switch ($target$$10) {
        case 0:
          {
            acc$$2 = (0, _Types.L)(arg, acc$$2);
            _arg1$$1 = returnType;
            continue nestedLambda;
          }

        case 1:
          {
            return [(0, _List.reverse)(acc$$2), returnType$$1];
          }
      }
    }
  };

  var $target$$11, arg$$1, returnType$$2;

  if (t.tag === 13) {
    if (t.fields[0].tag === 0) {
      $target$$11 = 0;
      arg$$1 = t.fields[0].fields[0];
      returnType$$2 = t.fields[1];
    } else {
      $target$$11 = 1;
    }
  } else {
    $target$$11 = 1;
  }

  switch ($target$$11) {
    case 0:
      {
        return nestedLambda((0, _Types.L)(arg$$1, (0, _Types.L)()), returnType$$2);
      }

    case 1:
      {
        return null;
      }
  }
}

function AST$$$$007CNestedLambda$007C_$007C(expr) {
  var argTypes;

  const nestedLambda$$1 = function nestedLambda$$1(accArgs, body, name) {
    nestedLambda$$1: while (true) {
      var $target$$12, arg$$2, body$$1;

      if (body.tag === 5) {
        if (body.fields[0].tag === 0) {
          if (body.fields[2] == null) {
            $target$$12 = 0;
            arg$$2 = body.fields[0].fields[0];
            body$$1 = body.fields[1];
          } else {
            $target$$12 = 1;
          }
        } else {
          $target$$12 = 1;
        }
      } else {
        $target$$12 = 1;
      }

      switch ($target$$12) {
        case 0:
          {
            accArgs = (0, _Types.L)(arg$$2, accArgs);
            body = body$$1;
            name = name;
            continue nestedLambda$$1;
          }

        case 1:
          {
            return [(0, _List.reverse)(accArgs), body, name];
          }
      }
    }
  };

  var $target$$13, arg$$3, body$$2, name$$1;

  if (expr.tag === 5) {
    if (expr.fields[0].tag === 0) {
      $target$$13 = 0;
      arg$$3 = expr.fields[0].fields[0];
      body$$2 = expr.fields[1];
      name$$1 = expr.fields[2];
    } else {
      $target$$13 = 1;
    }
  } else {
    $target$$13 = 1;
  }

  switch ($target$$13) {
    case 0:
      {
        const patternInput$$1 = nestedLambda$$1((0, _Types.L)(arg$$3, (0, _Types.L)()), body$$2, name$$1);
        var $target$$14, argTypes$$1;
        const activePatternResult65771 = AST$$$$007CNestedLambdaType$007C_$007C((0, _AST.Expr$$get_Type)(expr));

        if (activePatternResult65771 != null) {
          if (argTypes = activePatternResult65771[0], (0, _Prelude.List$$$sameLength)(patternInput$$1[0], argTypes)) {
            $target$$14 = 0;
            argTypes$$1 = activePatternResult65771[0];
          } else {
            $target$$14 = 1;
          }
        } else {
          $target$$14 = 1;
        }

        switch ($target$$14) {
          case 0:
            {
              return [patternInput$$1[0], patternInput$$1[1], patternInput$$1[2]];
            }

          case 1:
            {
              return null;
            }
        }
      }

    case 1:
      {
        return null;
      }
  }
}

function AST$$$$007CNestedApply$007C_$007C(expr$$1) {
  const nestedApply = function nestedApply(r$$4, t$$1, accArgs$$1, applied) {
    nestedApply: while (true) {
      var $target$$15, applied$$1, args$$1;

      if (applied.tag === 8) {
        if (applied.fields[0].tag === 1) {
          $target$$15 = 0;
          applied$$1 = applied.fields[0].fields[0];
          args$$1 = applied.fields[0].fields[1];
        } else {
          $target$$15 = 1;
        }
      } else {
        $target$$15 = 1;
      }

      switch ($target$$15) {
        case 0:
          {
            r$$4 = r$$4;
            t$$1 = t$$1;
            accArgs$$1 = (0, _List.append)(args$$1, accArgs$$1);
            applied = applied$$1;
            continue nestedApply;
          }

        case 1:
          {
            return [applied, accArgs$$1, t$$1, r$$4];
          }
      }
    }
  };

  var $target$$16, applied$$2, args$$2, r$$5, t$$2;

  if (expr$$1.tag === 8) {
    if (expr$$1.fields[0].tag === 1) {
      $target$$16 = 0;
      applied$$2 = expr$$1.fields[0].fields[0];
      args$$2 = expr$$1.fields[0].fields[1];
      r$$5 = expr$$1.fields[2];
      t$$2 = expr$$1.fields[1];
    } else {
      $target$$16 = 1;
    }
  } else {
    $target$$16 = 1;
  }

  switch ($target$$16) {
    case 0:
      {
        return nestedApply(r$$5, t$$2, args$$2, applied$$2);
      }

    case 1:
      {
        return null;
      }
  }
}

function AST$$$$007CLambdaUncurriedAtCompileTime$007C_$007C(arity, expr$$2) {
  const uncurryLambdaInner = function uncurryLambdaInner(name$$3, accArgs$$2, remainingArity, expr$$3) {
    uncurryLambdaInner: while (true) {
      if ((0, _Util.equals)(remainingArity, 0)) {
        return new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", (0, _List.reverse)(accArgs$$2)), expr$$3, name$$3);
      } else {
        const matchValue$$3 = [expr$$3, remainingArity];
        var $target$$17, arg$$4, body$$4, name2;

        if (matchValue$$3[0].tag === 5) {
          if (matchValue$$3[0].fields[0].tag === 0) {
            $target$$17 = 0;
            arg$$4 = matchValue$$3[0].fields[0].fields[0];
            body$$4 = matchValue$$3[0].fields[1];
            name2 = matchValue$$3[0].fields[2];
          } else if (matchValue$$3[1] == null) {
            if (!(accArgs$$2.tail == null)) {
              $target$$17 = 1;
            } else {
              $target$$17 = 2;
            }
          } else {
            $target$$17 = 2;
          }
        } else if (matchValue$$3[1] == null) {
          if (!(accArgs$$2.tail == null)) {
            $target$$17 = 1;
          } else {
            $target$$17 = 2;
          }
        } else {
          $target$$17 = 2;
        }

        switch ($target$$17) {
          case 0:
            {
              const remainingArity$$1 = (0, _Option.defaultArg)(remainingArity, null, function mapping(x$$1) {
                return x$$1 - 1;
              });
              name$$3 = (0, _Option.defaultArg)(name$$3, name2);
              accArgs$$2 = (0, _Types.L)(arg$$4, accArgs$$2);
              remainingArity = remainingArity$$1;
              expr$$3 = body$$4;
              continue uncurryLambdaInner;
            }

          case 1:
            {
              return new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", (0, _List.reverse)(accArgs$$2)), expr$$3, name$$3);
            }

          case 2:
            {
              return null;
            }
        }
      }
    }
  };

  var $target$$18, expr$$4;

  if (expr$$2.tag === 0) {
    if (expr$$2.fields[0].tag === 9) {
      if (expr$$2.fields[0].fields[0] != null) {
        $target$$18 = 0;
        expr$$4 = expr$$2.fields[0].fields[0];
      } else {
        $target$$18 = 1;
      }
    } else {
      $target$$18 = 1;
    }
  } else {
    $target$$18 = 1;
  }

  switch ($target$$18) {
    case 0:
      {
        return (0, _Option.defaultArg)(uncurryLambdaInner(null, (0, _Types.L)(), arity, expr$$4), null, function mapping$$1(expr$$5) {
          return new _AST.Expr(0, "Value", new _AST.ValueKind(9, "NewOption", expr$$5, (0, _AST.Expr$$get_Type)(expr$$5)));
        });
      }

    case 1:
      {
        return uncurryLambdaInner(null, (0, _Types.L)(), arity, expr$$2);
      }
  }
}

function AST$$$$007CMaybeCasted$007C(_arg1$$2) {
  if (_arg1$$2.tag === 2) {
    const e = _arg1$$2.fields[0];
    return e;
  } else {
    const e$$1 = _arg1$$2;
    return e$$1;
  }
}

function AST$$$$007CMaybeLambdaUncurriedAtCompileTime$007C(_arg1$$3) {
  const activePatternResult65793 = AST$$$$007CLambdaUncurriedAtCompileTime$007C_$007C(null, AST$$$$007CMaybeCasted$007C(_arg1$$3));

  if (activePatternResult65793 != null) {
    const lambda = activePatternResult65793;
    return lambda;
  } else {
    const e$$2 = _arg1$$3;
    return e$$2;
  }
}

function AST$$$hasDoubleEvalRisk(_arg1$$4) {
  var $target$$19, id, exprs, kind;

  if (_arg1$$4.tag === 1) {
    $target$$19 = 0;
    id = _arg1$$4.fields[0];
  } else if (_arg1$$4.tag === 0) {
    if (_arg1$$4.fields[0].tag === 1) {
      $target$$19 = 1;
    } else if (_arg1$$4.fields[0].tag === 2) {
      $target$$19 = 1;
    } else if (_arg1$$4.fields[0].tag === 6) {
      $target$$19 = 1;
    } else if (_arg1$$4.fields[0].tag === 5) {
      $target$$19 = 1;
    } else if (_arg1$$4.fields[0].tag === 3) {
      $target$$19 = 1;
    } else if (_arg1$$4.fields[0].tag === 8) {
      $target$$19 = 1;
    } else if (_arg1$$4.fields[0].tag === 12) {
      $target$$19 = 2;
      exprs = _arg1$$4.fields[0].fields[0];
    } else {
      $target$$19 = 4;
    }
  } else if (_arg1$$4.tag === 9) {
    $target$$19 = 3;
    kind = _arg1$$4.fields[1];
  } else {
    $target$$19 = 4;
  }

  switch ($target$$19) {
    case 0:
      {
        return id.IsMutable;
      }

    case 1:
      {
        return false;
      }

    case 2:
      {
        return (0, _List.exists)(AST$$$hasDoubleEvalRisk, exprs);
      }

    case 3:
      {
        var $target$$20;

        switch (kind.tag) {
          case 5:
          case 6:
          case 1:
          case 4:
          case 3:
            $target$$20 = 0;
            break;

          case 2:
            $target$$20 = 1;
            break;

          default:
            $target$$20 = 2;
        }

        switch ($target$$20) {
          case 0:
            {
              return false;
            }

          case 1:
            {
              const hasDoubleEvalRisk = kind.fields[1];
              return hasDoubleEvalRisk;
            }

          case 2:
            {
              return true;
            }
        }
      }

    case 4:
      {
        return true;
      }
  }
}

function AST$$$mustWrapOption(_arg1$$6) {
  var $target$$21;

  switch (_arg1$$6.tag) {
    case 2:
    case 14:
    case 9:
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

function AST$$$makeIdentNonMangled(name$$4) {
  return new _AST.Ident(name$$4, new _AST.Type(1, "Any"), new _AST.IdentKind(0, "UnspecifiedIdent"), false, true, null);
}

function AST$$$makeIdentUnique(com$$4, name$$5) {
  return AST$$$makeIdentNonMangled(com$$4.GetUniqueVar(name$$5));
}

function AST$$$makeTypedIdentNonMangled(typ, name$$7) {
  return new _AST.Ident(name$$7, typ, new _AST.IdentKind(0, "UnspecifiedIdent"), false, true, null);
}

function AST$$$makeTypedIdentUnique(com$$5, typ$$1, name$$8) {
  return AST$$$makeTypedIdentNonMangled(typ$$1, com$$5.GetUniqueVar(name$$8));
}

function AST$$$makeIdentExprNonMangled(name$$10) {
  return new _AST.Expr(1, "IdentExpr", AST$$$makeIdentNonMangled(name$$10));
}

function AST$$$makeLoop(range$$8, loopKind) {
  return new _AST.Expr(17, "Loop", loopKind, range$$8);
}

function AST$$$makeBinOp(range$$9, typ$$2, left, right, op) {
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(4, "BinaryOperation", op, left, right), typ$$2, range$$9);
}

function AST$$$makeUnOp(range$$10, typ$$3, arg$$5, op$$1) {
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(3, "UnaryOperation", op$$1, arg$$5), typ$$3, range$$10);
}

function AST$$$makeLogOp(range$$11, left$$1, right$$1, op$$2) {
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(5, "LogicalOperation", op$$2, left$$1, right$$1), new _AST.Type(3, "Boolean"), range$$11);
}

function AST$$$makeEqOp(range$$12, left$$2, right$$2, op$$3) {
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(4, "BinaryOperation", op$$3, left$$2, right$$2), new _AST.Type(3, "Boolean"), range$$12);
}

function AST$$$makeArray(elementType, arrExprs) {
  return new _AST.Expr(0, "Value", new _AST.ValueKind(10, "NewArray", new _AST.NewArrayKind(0, "ArrayValues", arrExprs), elementType));
}

function AST$$$makeDelegate(args$$3, body$$5) {
  return new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", args$$3), body$$5, null);
}

function AST$$$makeLambda(args$$4, body$$6) {
  return (0, _List.foldBack)(function folder(arg$$6, body$$7) {
    return new _AST.Expr(5, "Function", new _AST.FunctionKind(0, "Lambda", arg$$6), body$$7, null);
  }, args$$4, body$$6);
}

function AST$$$makeBoolConst(x$$2) {
  return new _AST.Expr(0, "Value", new _AST.ValueKind(3, "BoolConstant", x$$2));
}

function AST$$$makeStrConst(x$$3) {
  return new _AST.Expr(0, "Value", new _AST.ValueKind(5, "StringConstant", x$$3));
}

function AST$$$makeIntConst(x$$4) {
  return new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", x$$4, new _AST2.NumberKind(4, "Int32")));
}

function AST$$$makeFloatConst(x$$5) {
  return new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", x$$5, new _AST2.NumberKind(7, "Float64")));
}

function AST$$$makeDecConst(x$$6) {
  return new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", x$$6, new _AST2.NumberKind(8, "Decimal")));
}

function AST$$$makeCoreRef(t$$3, memberName, moduleName) {
  return new _AST.Expr(4, "Import", AST$$$makeStrConst(memberName), AST$$$makeStrConst(moduleName), new _AST.ImportKind(0, "CoreLib"), t$$3, null);
}

function AST$$$makeCustomImport(t$$4, selector, path$$2) {
  return new _AST.Expr(4, "Import", AST$$$makeStrConst(selector.trim()), AST$$$makeStrConst(path$$2.trim()), new _AST.ImportKind(2, "CustomImport"), t$$4, null);
}

function AST$$$makeInternalImport(t$$5, selector$$1, path$$3) {
  return new _AST.Expr(4, "Import", AST$$$makeStrConst(selector$$1.trim()), AST$$$makeStrConst(path$$3.trim()), new _AST.ImportKind(1, "Internal"), t$$5, null);
}

function AST$$$argInfo(thisArg, args$$5, argTypes$$2) {
  return new _AST.ArgInfo(thisArg, args$$5, argTypes$$2, new _AST.SpreadKind(0, "NoSpread"), false);
}

function AST$$$staticCall(r$$6, t$$6, argInfo, functionExpr) {
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(0, "Call", new _AST.CallKind(1, "StaticCall", functionExpr), argInfo), t$$6, r$$6);
}

function AST$$$constructorCall(r$$7, t$$7, argInfo$$1, consExpr) {
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(0, "Call", new _AST.CallKind(0, "ConstructorCall", consExpr), argInfo$$1), t$$7, r$$7);
}

function AST$$$instanceCall(r$$8, t$$8, argInfo$$2, memb) {
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(0, "Call", new _AST.CallKind(2, "InstanceCall", memb), argInfo$$2), t$$8, r$$8);
}

function AST$$$getExpr(r$$9, t$$9, left$$3, memb$$1) {
  return new _AST.Expr(9, "Get", left$$3, new _AST.GetKind(0, "ExprGet", memb$$1), t$$9, r$$9);
}

function AST$$$get(r$$10, t$$10, left$$4, membName) {
  return AST$$$getExpr(r$$10, t$$10, left$$4, AST$$$makeStrConst(membName));
}

function AST$$$getTypedArrayName(com$$6, numberKind) {
  var $target$$22;

  switch (numberKind.tag) {
    case 1:
      $target$$22 = 1;
      break;

    case 2:
      $target$$22 = 2;
      break;

    case 3:
      $target$$22 = 3;
      break;

    case 4:
      $target$$22 = 4;
      break;

    case 5:
      $target$$22 = 5;
      break;

    case 6:
      $target$$22 = 6;
      break;

    case 7:
    case 8:
      $target$$22 = 7;
      break;

    default:
      $target$$22 = 0;
  }

  switch ($target$$22) {
    case 0:
      {
        return "Int8Array";
      }

    case 1:
      {
        if (com$$6.Options.clampByteArrays) {
          return "Uint8ClampedArray";
        } else {
          return "Uint8Array";
        }
      }

    case 2:
      {
        return "Int16Array";
      }

    case 3:
      {
        return "Uint16Array";
      }

    case 4:
      {
        return "Int32Array";
      }

    case 5:
      {
        return "Uint32Array";
      }

    case 6:
      {
        return "Float32Array";
      }

    case 7:
      {
        return "Float64Array";
      }
  }
}

function AST$$$listEquals($arg$$23, $arg$$24, $arg$$25) {
  AST$$$listEquals: while (true) {
    const f = $arg$$23,
          li1 = $arg$$24,
          li2 = $arg$$25;
    const matchValue$$4 = [li1, li2];
    var $target$$26, h1, h2, t1, t2;

    if (matchValue$$4[0].tail != null) {
      if (matchValue$$4[1].tail != null) {
        $target$$26 = 1;
        h1 = matchValue$$4[0].head;
        h2 = matchValue$$4[1].head;
        t1 = matchValue$$4[0].tail;
        t2 = matchValue$$4[1].tail;
      } else {
        $target$$26 = 2;
      }
    } else if (matchValue$$4[1].tail == null) {
      $target$$26 = 0;
    } else {
      $target$$26 = 2;
    }

    switch ($target$$26) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          if (f(h1, h2)) {
            $arg$$23 = f;
            $arg$$24 = t1;
            $arg$$25 = t2;
            continue AST$$$listEquals;
          } else {
            return false;
          }
        }

      case 2:
        {
          return false;
        }
    }
  }
}

function AST$$$typeEquals(strict, typ1, typ2) {
  var n2, n1;

  AST$$$typeEquals: while (true) {
    const matchValue$$5 = [typ1, typ2];
    var $target$$27, kind1, kind2, kind1$$1, kind2$$1, name1, name2$$1, t1$$1, t2$$1, ts1, ts2, a1, a2, t1$$2, t2$$2, as1, as2, t1$$3, t2$$3, ent1, ent2, gen1, gen2;

    if (matchValue$$5[0].tag === 1) {
      if (matchValue$$5[1].tag === 1) {
        $target$$27 = 0;
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 2) {
      if (matchValue$$5[1].tag === 2) {
        $target$$27 = 0;
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 3) {
      if (matchValue$$5[1].tag === 3) {
        $target$$27 = 0;
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 4) {
      if (matchValue$$5[1].tag === 4) {
        $target$$27 = 0;
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 5) {
      if (matchValue$$5[1].tag === 5) {
        $target$$27 = 0;
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 6) {
      if (matchValue$$5[1].tag === 6) {
        $target$$27 = 0;
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 7) {
      if (matchValue$$5[1].tag === 7) {
        $target$$27 = 1;
        kind1 = matchValue$$5[0].fields[0];
        kind2 = matchValue$$5[1].fields[0];
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 8) {
      if (matchValue$$5[1].tag === 8) {
        $target$$27 = 2;
        kind1$$1 = matchValue$$5[0].fields[0];
        kind2$$1 = matchValue$$5[1].fields[0];
        name1 = matchValue$$5[0].fields[1];
        name2$$1 = matchValue$$5[1].fields[1];
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 9) {
      if (matchValue$$5[1].tag === 9) {
        $target$$27 = 3;
        t1$$1 = matchValue$$5[0].fields[0];
        t2$$1 = matchValue$$5[1].fields[0];
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 11) {
      if (matchValue$$5[1].tag === 11) {
        $target$$27 = 3;
        t1$$1 = matchValue$$5[0].fields[0];
        t2$$1 = matchValue$$5[1].fields[0];
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 12) {
      if (matchValue$$5[1].tag === 12) {
        $target$$27 = 3;
        t1$$1 = matchValue$$5[0].fields[0];
        t2$$1 = matchValue$$5[1].fields[0];
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 15) {
      if (matchValue$$5[1].tag === 15) {
        $target$$27 = 4;
        ts1 = matchValue$$5[0].fields[0];
        ts2 = matchValue$$5[1].fields[0];
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 10) {
      if (matchValue$$5[1].tag === 10) {
        $target$$27 = 4;
        ts1 = matchValue$$5[0].fields[0];
        ts2 = matchValue$$5[1].fields[0];
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 13) {
      if (matchValue$$5[0].fields[0].tag === 1) {
        if (matchValue$$5[1].tag === 13) {
          if (matchValue$$5[1].fields[0].tag === 1) {
            $target$$27 = 6;
            as1 = matchValue$$5[0].fields[0].fields[0];
            as2 = matchValue$$5[1].fields[0].fields[0];
            t1$$3 = matchValue$$5[0].fields[1];
            t2$$3 = matchValue$$5[1].fields[1];
          } else {
            $target$$27 = 9;
          }
        } else if (matchValue$$5[1].tag === 14) {
          if (!strict) {
            $target$$27 = 8;
          } else {
            $target$$27 = 9;
          }
        } else {
          $target$$27 = 9;
        }
      } else if (matchValue$$5[1].tag === 13) {
        if (matchValue$$5[1].fields[0].tag === 0) {
          $target$$27 = 5;
          a1 = matchValue$$5[0].fields[0].fields[0];
          a2 = matchValue$$5[1].fields[0].fields[0];
          t1$$2 = matchValue$$5[0].fields[1];
          t2$$2 = matchValue$$5[1].fields[1];
        } else {
          $target$$27 = 9;
        }
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 16) {
      if (matchValue$$5[1].tag === 16) {
        $target$$27 = 7;
        ent1 = matchValue$$5[0].fields[0];
        ent2 = matchValue$$5[1].fields[0];
        gen1 = matchValue$$5[0].fields[1];
        gen2 = matchValue$$5[1].fields[1];
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[0].tag === 14) {
      if (!strict) {
        $target$$27 = 8;
      } else if (matchValue$$5[1].tag === 14) {
        if (!strict) {
          $target$$27 = 8;
        } else {
          $target$$27 = 9;
        }
      } else {
        $target$$27 = 9;
      }
    } else if (matchValue$$5[1].tag === 14) {
      if (!strict) {
        $target$$27 = 8;
      } else {
        $target$$27 = 9;
      }
    } else {
      $target$$27 = 9;
    }

    switch ($target$$27) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return (0, _Util.equals)(kind1, kind2);
        }

      case 2:
        {
          if ((0, _Util.equals)(kind1$$1, kind2$$1)) {
            return name1 === name2$$1;
          } else {
            return false;
          }
        }

      case 3:
        {
          strict = strict;
          typ1 = t1$$1;
          typ2 = t2$$1;
          continue AST$$$typeEquals;
        }

      case 4:
        {
          return AST$$$listEquals(function (typ1$$1, typ2$$1) {
            return AST$$$typeEquals(strict, typ1$$1, typ2$$1);
          }, ts1, ts2);
        }

      case 5:
        {
          if (AST$$$typeEquals(strict, a1, a2)) {
            strict = strict;
            typ1 = t1$$2;
            typ2 = t2$$2;
            continue AST$$$typeEquals;
          } else {
            return false;
          }
        }

      case 6:
        {
          if (AST$$$listEquals(function (typ1$$2, typ2$$2) {
            return AST$$$typeEquals(strict, typ1$$2, typ2$$2);
          }, as1, as2)) {
            strict = strict;
            typ1 = t1$$3;
            typ2 = t2$$3;
            continue AST$$$typeEquals;
          } else {
            return false;
          }
        }

      case 7:
        {
          const matchValue$$6 = [(0, _Symbols.FSharpEntity$$get_TryFullName)(ent1), (0, _Symbols.FSharpEntity$$get_TryFullName)(ent2)];
          var $target$$28, n1$$1, n2$$1;

          if (matchValue$$6[0] != null) {
            if (matchValue$$6[1] != null) {
              if (n2 = matchValue$$6[1], (n1 = matchValue$$6[0], n1 === n2)) {
                $target$$28 = 0;
                n1$$1 = matchValue$$6[0];
                n2$$1 = matchValue$$6[1];
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
                return AST$$$listEquals(function (typ1$$3, typ2$$3) {
                  return AST$$$typeEquals(strict, typ1$$3, typ2$$3);
                }, gen1, gen2);
              }

            case 1:
              {
                return false;
              }
          }
        }

      case 8:
        {
          return true;
        }

      case 9:
        {
          var $target$$29, name1$$1, name2$$2;

          if (matchValue$$5[0].tag === 14) {
            if (matchValue$$5[1].tag === 14) {
              $target$$29 = 0;
              name1$$1 = matchValue$$5[0].fields[0];
              name2$$2 = matchValue$$5[1].fields[0];
            } else {
              $target$$29 = 1;
            }
          } else {
            $target$$29 = 1;
          }

          switch ($target$$29) {
            case 0:
              {
                return name1$$1 === name2$$2;
              }

            case 1:
              {
                return false;
              }
          }
        }
    }
  }
}

function AST$$$getTypeFullName(prettify, _arg1$$7) {
  var fullname$$1;
  var $target$$30, name$$11, fullname, kind$$1, argType, returnType$$3, argTypes$$3, returnType$$5, genArgs, gen, gen$$1, gen$$3, ent, gen$$5;

  if (_arg1$$7.tag === 8) {
    $target$$30 = 1;
    fullname = _arg1$$7.fields[1];
  } else if (_arg1$$7.tag === 6) {
    $target$$30 = 2;
  } else if (_arg1$$7.tag === 0) {
    $target$$30 = 3;
  } else if (_arg1$$7.tag === 2) {
    $target$$30 = 4;
  } else if (_arg1$$7.tag === 3) {
    $target$$30 = 5;
  } else if (_arg1$$7.tag === 4) {
    $target$$30 = 6;
  } else if (_arg1$$7.tag === 5) {
    $target$$30 = 7;
  } else if (_arg1$$7.tag === 15) {
    $target$$30 = 8;
  } else if (_arg1$$7.tag === 1) {
    $target$$30 = 8;
  } else if (_arg1$$7.tag === 7) {
    $target$$30 = 9;
    kind$$1 = _arg1$$7.fields[0];
  } else if (_arg1$$7.tag === 13) {
    if (_arg1$$7.fields[0].tag === 1) {
      $target$$30 = 11;
      argTypes$$3 = _arg1$$7.fields[0].fields[0];
      returnType$$5 = _arg1$$7.fields[1];
    } else {
      $target$$30 = 10;
      argType = _arg1$$7.fields[0].fields[0];
      returnType$$3 = _arg1$$7.fields[1];
    }
  } else if (_arg1$$7.tag === 10) {
    $target$$30 = 12;
    genArgs = _arg1$$7.fields[0];
  } else if (_arg1$$7.tag === 11) {
    $target$$30 = 13;
    gen = _arg1$$7.fields[0];
  } else if (_arg1$$7.tag === 9) {
    $target$$30 = 14;
    gen$$1 = _arg1$$7.fields[0];
  } else if (_arg1$$7.tag === 12) {
    $target$$30 = 15;
    gen$$3 = _arg1$$7.fields[0];
  } else if (_arg1$$7.tag === 16) {
    $target$$30 = 16;
    ent = _arg1$$7.fields[0];
    gen$$5 = _arg1$$7.fields[1];
  } else {
    $target$$30 = 0;
    name$$11 = _arg1$$7.fields[0];
  }

  switch ($target$$30) {
    case 0:
      {
        return "'" + name$$11;
      }

    case 1:
      {
        return fullname;
      }

    case 2:
      {
        return "System.Text.RegularExpressions.Regex";
      }

    case 3:
      {
        return "System.Type";
      }

    case 4:
      {
        return "Microsoft.FSharp.Core.Unit";
      }

    case 5:
      {
        return "System.Boolean";
      }

    case 6:
      {
        return "System.Char";
      }

    case 7:
      {
        return "System.String";
      }

    case 8:
      {
        return "System.Object";
      }

    case 9:
      {
        switch (kind$$1.tag) {
          case 1:
            {
              return "System.Byte";
            }

          case 2:
            {
              return "System.Int16";
            }

          case 3:
            {
              return "System.UInt16";
            }

          case 4:
            {
              return "System.Int32";
            }

          case 5:
            {
              return "System.UInt32";
            }

          case 6:
            {
              return "System.Single";
            }

          case 7:
            {
              return "System.Double";
            }

          case 8:
            {
              return "System.Decimal";
            }

          default:
            {
              return "System.SByte";
            }
        }
      }

    case 10:
      {
        const argType$$1 = AST$$$getTypeFullName(prettify, argType);
        const returnType$$4 = AST$$$getTypeFullName(prettify, returnType$$3);

        if (prettify) {
          return argType$$1 + " -> " + returnType$$4;
        } else {
          return "Microsoft.FSharp.Core.FSharpFunc`2[" + argType$$1 + "," + returnType$$4 + "]";
        }
      }

    case 11:
      {
        return (0, _String.toText)((0, _String.printf)("System.Func`%i[%s,%s]"))((0, _List.length)(argTypes$$3) + 1)((0, _String.join)(",", ...(0, _List.map)(function (_arg1$$8) {
          return AST$$$getTypeFullName(prettify, _arg1$$8);
        }, argTypes$$3)))(AST$$$getTypeFullName(prettify, returnType$$5));
      }

    case 12:
      {
        const genArgs$$1 = (0, _List.map)(function (_arg1$$9) {
          return AST$$$getTypeFullName(prettify, _arg1$$9);
        }, genArgs);

        if (prettify) {
          return (0, _String.join)(" * ", ...genArgs$$1);
        } else {
          return (0, _String.toText)((0, _String.printf)("System.Tuple`%i[%s]"))((0, _List.length)(genArgs$$1))((0, _String.join)(",", ...genArgs$$1));
        }
      }

    case 13:
      {
        return AST$$$getTypeFullName(prettify, gen) + "[]";
      }

    case 14:
      {
        const gen$$2 = AST$$$getTypeFullName(prettify, gen$$1);

        if (prettify) {
          return gen$$2 + " option";
        } else {
          return "Microsoft.FSharp.Core.FSharpOption`1" + "[" + gen$$2 + "]";
        }
      }

    case 15:
      {
        const gen$$4 = AST$$$getTypeFullName(prettify, gen$$3);

        if (prettify) {
          return gen$$4 + " list";
        } else {
          return "Microsoft.FSharp.Collections.FSharpList`1" + "[" + gen$$4 + "]";
        }
      }

    case 16:
      {
        const matchValue$$7 = (0, _Symbols.FSharpEntity$$get_TryFullName)(ent);

        if (matchValue$$7 != null) {
          if (fullname$$1 = matchValue$$7, gen$$5.tail == null) {
            const fullname$$2 = matchValue$$7;
            return fullname$$2;
          } else {
            if (matchValue$$7 != null) {
              const fullname$$3 = matchValue$$7;
              const gen$$6 = (0, _String.join)(",", ...(0, _List.map)(function (_arg1$$10) {
                return AST$$$getTypeFullName(prettify, _arg1$$10);
              }, gen$$5));
              const fullname$$4 = prettify ? fullname$$3 === "Microsoft.FSharp.Core.FSharpResult`2" ? "Result" : (0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("Microsoft.FSharp.Core.FSharpChoice", fullname$$3) != null ? "Choice" : fullname$$3 : fullname$$3;
              return fullname$$4 + "[" + gen$$6 + "]";
            } else {
              throw new _Types.MatchFailureException("C:/code/fable/src/dotnet/Fable.Compiler/Transforms/Transforms.Util.fs", 469, 18);
            }
          }
        } else {
          return "UNKNOWN";
        }
      }
  }
}