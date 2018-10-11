"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visit = visit;
exports.visitFromInsideOut = visitFromInsideOut;
exports.visitFromOutsideIn = visitFromOutsideIn;
exports.getSubExpressions = getSubExpressions;
exports.deepExists = deepExists;
exports.deepExistsWithShortcircuit = deepExistsWithShortcircuit;
exports.replaceValues = replaceValues;
exports.countReferences = countReferences;
exports.canInlineArg = canInlineArg;
exports.optimizations = optimizations;
exports.optimizeExpr = optimizeExpr;
exports.optimizeDeclaration = optimizeDeclaration;
exports.optimizeFile = optimizeFile;

var _AST = require("../AST/AST.Fable");

var _Option = require("../fable-core.2.0.3/Option");

var _List = require("../fable-core.2.0.3/List");

var _Types = require("../fable-core.2.0.3/Types");

var _Map = require("../fable-core.2.0.3/Map");

var _Transforms = require("./Transforms.Util");

var _Util = require("../fable-core.2.0.3/Util");

var _Prelude = require("../Global/Prelude");

var _String = require("../fable-core.2.0.3/String");

var _Replacements = require("./Replacements");

var _Symbols = require("../symbols/Symbols");

var _FSharp2Fable = require("./FSharp2Fable.Util");

var _Seq = require("../fable-core.2.0.3/Seq");

function visit(f, e) {
  var $target$$29;

  switch (e.tag) {
    case 10:
      $target$$29 = 0;
      break;

    case 2:
      $target$$29 = 1;
      break;

    case 4:
      $target$$29 = 2;
      break;

    case 0:
      $target$$29 = 3;
      break;

    case 7:
      $target$$29 = 4;
      break;

    case 3:
      $target$$29 = 5;
      break;

    case 5:
      $target$$29 = 6;
      break;

    case 6:
      $target$$29 = 7;
      break;

    case 8:
      $target$$29 = 8;
      break;

    case 9:
      $target$$29 = 9;
      break;

    case 11:
      $target$$29 = 10;
      break;

    case 14:
      $target$$29 = 11;
      break;

    case 15:
      $target$$29 = 12;
      break;

    case 19:
      $target$$29 = 13;
      break;

    case 16:
      $target$$29 = 14;
      break;

    case 17:
      $target$$29 = 15;
      break;

    case 18:
      $target$$29 = 16;
      break;

    case 12:
      $target$$29 = 17;
      break;

    case 13:
      $target$$29 = 18;
      break;

    default:
      $target$$29 = 0;
  }

  switch ($target$$29) {
    case 0:
      {
        return e;
      }

    case 1:
      {
        const t = e.fields[1];
        const e$$1 = e.fields[0];
        return new _AST.Expr(2, "TypeCast", f(e$$1), t);
      }

    case 2:
      {
        const t$$1 = e.fields[3];
        const r = e.fields[4];
        const kind = e.fields[2];
        const e2 = e.fields[1];
        const e1 = e.fields[0];
        return new _AST.Expr(4, "Import", f(e1), f(e2), kind, t$$1, r);
      }

    case 3:
      {
        const kind$$1 = e.fields[0];
        var $target$$30;

        switch (kind$$1.tag) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
            $target$$30 = 0;
            break;

          case 9:
            $target$$30 = 1;
            break;

          case 12:
            $target$$30 = 2;
            break;

          case 10:
            $target$$30 = 3;
            break;

          case 11:
            $target$$30 = 4;
            break;

          case 13:
            $target$$30 = 5;
            break;

          case 15:
            $target$$30 = 6;
            break;

          case 14:
            $target$$30 = 7;
            break;

          default:
            $target$$30 = 0;
        }

        switch ($target$$30) {
          case 0:
            {
              return e;
            }

          case 1:
            {
              const t$$2 = kind$$1.fields[1];
              const e$$2 = kind$$1.fields[0];
              return new _AST.Expr(0, "Value", new _AST.ValueKind(9, "NewOption", (0, _Option.defaultArg)(e$$2, null, f), t$$2));
            }

          case 2:
            {
              const exprs = kind$$1.fields[0];
              return new _AST.Expr(0, "Value", new _AST.ValueKind(12, "NewTuple", (0, _List.map)(f, exprs)));
            }

          case 3:
            {
              const t$$3 = kind$$1.fields[1];
              const kind$$2 = kind$$1.fields[0];

              if (kind$$2.tag === 1) {
                const e$$3 = kind$$2.fields[0];
                return new _AST.Expr(0, "Value", new _AST.ValueKind(10, "NewArray", new _AST.NewArrayKind(1, "ArrayAlloc", f(e$$3)), t$$3));
              } else {
                const exprs$$1 = kind$$2.fields[0];
                return new _AST.Expr(0, "Value", new _AST.ValueKind(10, "NewArray", new _AST.NewArrayKind(0, "ArrayValues", (0, _List.map)(f, exprs$$1)), t$$3));
              }
            }

          case 4:
            {
              const t$$4 = kind$$1.fields[1];
              const ht = kind$$1.fields[0];
              const ht$$1 = (0, _Option.defaultArg)(ht, null, function mapping(tupledArg) {
                return [f(tupledArg[0]), f(tupledArg[1])];
              });
              return new _AST.Expr(0, "Value", new _AST.ValueKind(11, "NewList", ht$$1, t$$4));
            }

          case 5:
            {
              const genArgs = kind$$1.fields[2];
              const exprs$$2 = kind$$1.fields[0];
              const ent = kind$$1.fields[1];
              return new _AST.Expr(0, "Value", new _AST.ValueKind(13, "NewRecord", (0, _List.map)(f, exprs$$2), ent, genArgs));
            }

          case 6:
            {
              const genArgs$$1 = kind$$1.fields[1];
              const e$$4 = kind$$1.fields[0];
              return new _AST.Expr(0, "Value", new _AST.ValueKind(15, "NewErasedUnion", f(e$$4), genArgs$$1));
            }

          case 7:
            {
              const uci = kind$$1.fields[1];
              const genArgs$$2 = kind$$1.fields[3];
              const exprs$$3 = kind$$1.fields[0];
              const ent$$1 = kind$$1.fields[2];
              return new _AST.Expr(0, "Value", new _AST.ValueKind(14, "NewUnion", (0, _List.map)(f, exprs$$3), uci, ent$$1, genArgs$$2));
            }
        }
      }

    case 4:
      {
        const r$$1 = e.fields[2];
        const kind$$3 = e.fields[1];
        const e$$5 = e.fields[0];
        return new _AST.Expr(7, "Test", f(e$$5), kind$$3, r$$1);
      }

    case 5:
      {
        const t$$6 = e.fields[1];
        const r$$2 = e.fields[2];
        const kind$$4 = e.fields[0];

        if (kind$$4.tag === 1) {
          const e$$6 = kind$$4.fields[0];
          const arity = kind$$4.fields[1] | 0;
          return new _AST.Expr(3, "DelayedResolution", new _AST.DelayedResolutionKind(1, "Curry", f(e$$6), arity), t$$6, r$$2);
        } else {
          const e2$$1 = kind$$4.fields[1];
          const e1$$1 = kind$$4.fields[0];
          return new _AST.Expr(3, "DelayedResolution", new _AST.DelayedResolutionKind(0, "AsPojo", f(e1$$1), f(e2$$1)), t$$6, r$$2);
        }
      }

    case 6:
      {
        const name = e.fields[2];
        const kind$$5 = e.fields[0];
        const body = e.fields[1];
        return new _AST.Expr(5, "Function", kind$$5, f(body), name);
      }

    case 7:
      {
        const t$$7 = e.fields[1];
        const members = e.fields[0];
        const baseCall = e.fields[2];
        const baseCall$$1 = (0, _Option.defaultArg)(baseCall, null, f);
        const members$$1 = (0, _List.map)(function mapping$$1(_arg1) {
          const v = _arg1.fields[1];
          const kind$$6 = _arg1.fields[2];
          const k = _arg1.fields[0];
          return new _AST.ObjectMember(0, "ObjectMember", f(k), f(v), kind$$6);
        }, members);
        return new _AST.Expr(6, "ObjectExpr", members$$1, t$$7, baseCall$$1);
      }

    case 8:
      {
        const t$$8 = e.fields[1];
        const r$$3 = e.fields[2];
        const kind$$7 = e.fields[0];

        switch (kind$$7.tag) {
          case 0:
            {
              const kind$$8 = kind$$7.fields[0];
              const info = kind$$7.fields[1];
              let kind$$9;

              switch (kind$$8.tag) {
                case 1:
                  {
                    const e$$8 = kind$$8.fields[0];
                    kind$$9 = new _AST.CallKind(1, "StaticCall", f(e$$8));
                    break;
                  }

                case 2:
                  {
                    const memb = kind$$8.fields[0];
                    kind$$9 = new _AST.CallKind(2, "InstanceCall", (0, _Option.defaultArg)(memb, null, f));
                    break;
                  }

                default:
                  {
                    const e$$7 = kind$$8.fields[0];
                    kind$$9 = new _AST.CallKind(0, "ConstructorCall", f(e$$7));
                  }
              }

              const info$$1 = new _AST.ArgInfo((0, _Option.defaultArg)(info.ThisArg, null, f), (0, _List.map)(f, info.Args), info.SignatureArgTypes, info.Spread, info.IsBaseOrSelfConstructorCall);
              return new _AST.Expr(8, "Operation", new _AST.OperationKind(0, "Call", kind$$9, info$$1), t$$8, r$$3);
            }

          case 2:
            {
              const macro = kind$$7.fields[0];
              const info$$2 = kind$$7.fields[1];
              const info$$4 = (0, _Option.defaultArg)(info$$2, null, function mapping$$2(info$$3) {
                return new _AST.ArgInfo((0, _Option.defaultArg)(info$$3.ThisArg, null, f), (0, _List.map)(f, info$$3.Args), info$$3.SignatureArgTypes, info$$3.Spread, info$$3.IsBaseOrSelfConstructorCall);
              });
              return new _AST.Expr(8, "Operation", new _AST.OperationKind(2, "Emit", macro, info$$4), t$$8, r$$3);
            }

          case 3:
            {
              const operator = kind$$7.fields[0];
              const operand = kind$$7.fields[1];
              return new _AST.Expr(8, "Operation", new _AST.OperationKind(3, "UnaryOperation", operator, f(operand)), t$$8, r$$3);
            }

          case 4:
            {
              const right = kind$$7.fields[2];
              const op = kind$$7.fields[0];
              const left = kind$$7.fields[1];
              return new _AST.Expr(8, "Operation", new _AST.OperationKind(4, "BinaryOperation", op, f(left), f(right)), t$$8, r$$3);
            }

          case 5:
            {
              const right$$1 = kind$$7.fields[2];
              const op$$1 = kind$$7.fields[0];
              const left$$1 = kind$$7.fields[1];
              return new _AST.Expr(8, "Operation", new _AST.OperationKind(5, "LogicalOperation", op$$1, f(left$$1), f(right$$1)), t$$8, r$$3);
            }

          default:
            {
              const callee = kind$$7.fields[0];
              const args = kind$$7.fields[1];
              return new _AST.Expr(8, "Operation", new _AST.OperationKind(1, "CurriedApply", f(callee), (0, _List.map)(f, args)), t$$8, r$$3);
            }
        }
      }

    case 9:
      {
        const t$$9 = e.fields[2];
        const r$$4 = e.fields[3];
        const kind$$10 = e.fields[1];
        const e$$9 = e.fields[0];
        var $target$$31;

        switch (kind$$10.tag) {
          case 6:
          case 7:
          case 1:
          case 4:
          case 3:
          case 2:
            $target$$31 = 0;
            break;

          case 0:
            $target$$31 = 1;
            break;

          default:
            $target$$31 = 0;
        }

        switch ($target$$31) {
          case 0:
            {
              return new _AST.Expr(9, "Get", f(e$$9), kind$$10, t$$9, r$$4);
            }

          case 1:
            {
              const e2$$2 = kind$$10.fields[0];
              return new _AST.Expr(9, "Get", f(e$$9), new _AST.GetKind(0, "ExprGet", f(e2$$2)), t$$9, r$$4);
            }
        }
      }

    case 10:
      {
        const typ = e.fields[1];
        const r$$5 = e.fields[2];
        const e$$10 = e.fields[0];
        return new _AST.Expr(11, "Throw", f(e$$10), typ, r$$5);
      }

    case 11:
      {
        const exprs$$4 = e.fields[0];
        return new _AST.Expr(14, "Sequential", (0, _List.map)(f, exprs$$4));
      }

    case 12:
      {
        const bs = e.fields[0];
        const body$$1 = e.fields[1];
        const bs$$1 = (0, _List.map)(function mapping$$3(tupledArg$$1) {
          return [tupledArg$$1[0], f(tupledArg$$1[1])];
        }, bs);
        return new _AST.Expr(15, "Let", bs$$1, f(body$$1));
      }

    case 13:
      {
        const thenExpr = e.fields[1];
        const elseExpr = e.fields[2];
        const cond = e.fields[0];
        return new _AST.Expr(19, "IfThenElse", f(cond), f(thenExpr), f(elseExpr));
      }

    case 14:
      {
        const v$$1 = e.fields[2];
        const r$$6 = e.fields[3];
        const kind$$11 = e.fields[1];
        const e$$12 = e.fields[0];
        var $target$$32;

        switch (kind$$11.tag) {
          case 2:
            $target$$32 = 0;
            break;

          case 1:
            $target$$32 = 1;
            break;

          default:
            $target$$32 = 0;
        }

        switch ($target$$32) {
          case 0:
            {
              return new _AST.Expr(16, "Set", f(e$$12), kind$$11, f(v$$1), r$$6);
            }

          case 1:
            {
              const e2$$3 = kind$$11.fields[0];
              return new _AST.Expr(16, "Set", f(e$$12), new _AST.SetKind(1, "ExprSet", f(e2$$3)), f(v$$1), r$$6);
            }
        }
      }

    case 15:
      {
        const r$$7 = e.fields[1];
        const kind$$12 = e.fields[0];

        if (kind$$12.tag === 1) {
          const up = kind$$12.fields[4];
          const i$$1 = kind$$12.fields[0];
          const e3 = kind$$12.fields[3];
          const e2$$5 = kind$$12.fields[2];
          const e1$$3 = kind$$12.fields[1];
          return new _AST.Expr(17, "Loop", new _AST.LoopKind(1, "For", i$$1, f(e1$$3), f(e2$$5), f(e3), up), r$$7);
        } else {
          const e2$$4 = kind$$12.fields[1];
          const e1$$2 = kind$$12.fields[0];
          return new _AST.Expr(17, "Loop", new _AST.LoopKind(0, "While", f(e1$$2), f(e2$$4)), r$$7);
        }
      }

    case 16:
      {
        const finalizer = e.fields[2];
        const catch$ = e.fields[1];
        const body$$2 = e.fields[0];
        return new _AST.Expr(18, "TryCatch", f(body$$2), (0, _Option.defaultArg)(catch$, null, function (tupledArg$$2) {
          return [tupledArg$$2[0], f(tupledArg$$2[1])];
        }), (0, _Option.defaultArg)(finalizer, null, f));
      }

    case 17:
      {
        const targets = e.fields[1];
        const expr = e.fields[0];
        const targets$$1 = (0, _List.map)(function mapping$$4(tupledArg$$3) {
          return [tupledArg$$3[0], f(tupledArg$$3[1])];
        }, targets);
        return new _AST.Expr(12, "DecisionTree", f(expr), targets$$1);
      }

    case 18:
      {
        const t$$10 = e.fields[2];
        const idx = e.fields[0] | 0;
        const boundValues = e.fields[1];
        return new _AST.Expr(13, "DecisionTreeSuccess", idx, (0, _List.map)(f, boundValues), t$$10);
      }
  }
}

function visitFromInsideOut(f$$1, e$$14) {
  return f$$1(visit(function (e$$15) {
    return visitFromInsideOut(f$$1, e$$15);
  }, e$$14));
}

function visitFromOutsideIn(f$$2, e$$16) {
  const matchValue = f$$2(e$$16);

  if (matchValue == null) {
    return visit(function (e$$18) {
      return visitFromOutsideIn(f$$2, e$$18);
    }, e$$16);
  } else {
    const e$$17 = matchValue;
    return e$$17;
  }
}

function getSubExpressions(_arg1$$1) {
  var $target$$37;

  switch (_arg1$$1.tag) {
    case 10:
      $target$$37 = 0;
      break;

    case 2:
      $target$$37 = 1;
      break;

    case 4:
      $target$$37 = 2;
      break;

    case 0:
      $target$$37 = 3;
      break;

    case 7:
      $target$$37 = 4;
      break;

    case 3:
      $target$$37 = 5;
      break;

    case 5:
      $target$$37 = 6;
      break;

    case 6:
      $target$$37 = 7;
      break;

    case 8:
      $target$$37 = 8;
      break;

    case 9:
      $target$$37 = 9;
      break;

    case 11:
      $target$$37 = 10;
      break;

    case 14:
      $target$$37 = 11;
      break;

    case 15:
      $target$$37 = 12;
      break;

    case 19:
      $target$$37 = 13;
      break;

    case 16:
      $target$$37 = 14;
      break;

    case 17:
      $target$$37 = 15;
      break;

    case 18:
      $target$$37 = 16;
      break;

    case 12:
      $target$$37 = 17;
      break;

    case 13:
      $target$$37 = 18;
      break;

    default:
      $target$$37 = 0;
  }

  switch ($target$$37) {
    case 0:
      {
        return (0, _Types.L)();
      }

    case 1:
      {
        const e$$19 = _arg1$$1.fields[0];
        return (0, _Types.L)(e$$19, (0, _Types.L)());
      }

    case 2:
      {
        const e2$$6 = _arg1$$1.fields[1];
        const e1$$4 = _arg1$$1.fields[0];
        return (0, _Types.L)(e1$$4, (0, _Types.L)(e2$$6, (0, _Types.L)()));
      }

    case 3:
      {
        const kind$$13 = _arg1$$1.fields[0];
        var $target$$38;

        switch (kind$$13.tag) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
            $target$$38 = 0;
            break;

          case 9:
            $target$$38 = 1;
            break;

          case 12:
            $target$$38 = 2;
            break;

          case 10:
            $target$$38 = 3;
            break;

          case 11:
            $target$$38 = 4;
            break;

          case 13:
            $target$$38 = 5;
            break;

          case 15:
            $target$$38 = 6;
            break;

          case 14:
            $target$$38 = 7;
            break;

          default:
            $target$$38 = 0;
        }

        switch ($target$$38) {
          case 0:
            {
              return (0, _Types.L)();
            }

          case 1:
            {
              const e$$20 = kind$$13.fields[0];
              return (0, _List.ofArray)((0, _Option.defaultArg)(e$$20, [], function ($x$$1) {
                return [$x$$1];
              }));
            }

          case 2:
            {
              const exprs$$5 = kind$$13.fields[0];
              return exprs$$5;
            }

          case 3:
            {
              const kind$$14 = kind$$13.fields[0];

              if (kind$$14.tag === 1) {
                const e$$21 = kind$$14.fields[0];
                return (0, _Types.L)(e$$21, (0, _Types.L)());
              } else {
                const exprs$$6 = kind$$14.fields[0];
                return exprs$$6;
              }
            }

          case 4:
            {
              const ht$$2 = kind$$13.fields[0];

              if (ht$$2 == null) {
                return (0, _Types.L)();
              } else {
                const t$$11 = ht$$2[1];
                const h$$1 = ht$$2[0];
                return (0, _Types.L)(h$$1, (0, _Types.L)(t$$11, (0, _Types.L)()));
              }
            }

          case 5:
            {
              const exprs$$7 = kind$$13.fields[0];
              return exprs$$7;
            }

          case 6:
            {
              const e$$22 = kind$$13.fields[0];
              return (0, _Types.L)(e$$22, (0, _Types.L)());
            }

          case 7:
            {
              const exprs$$8 = kind$$13.fields[0];
              return exprs$$8;
            }
        }
      }

    case 4:
      {
        const e$$23 = _arg1$$1.fields[0];
        return (0, _Types.L)(e$$23, (0, _Types.L)());
      }

    case 5:
      {
        const kind$$15 = _arg1$$1.fields[0];

        if (kind$$15.tag === 0) {
          const e2$$7 = kind$$15.fields[1];
          const e1$$5 = kind$$15.fields[0];
          return (0, _Types.L)(e1$$5, (0, _Types.L)(e2$$7, (0, _Types.L)()));
        } else {
          const e$$24 = kind$$15.fields[0];
          return (0, _Types.L)(e$$24, (0, _Types.L)());
        }
      }

    case 6:
      {
        const body$$3 = _arg1$$1.fields[1];
        return (0, _Types.L)(body$$3, (0, _Types.L)());
      }

    case 7:
      {
        const members$$2 = _arg1$$1.fields[0];
        const baseCall$$2 = _arg1$$1.fields[2];
        const members$$3 = (0, _List.collect)(function mapping$$5(_arg1$$2) {
          const v$$3 = _arg1$$2.fields[1];
          const k$$1 = _arg1$$2.fields[0];
          return (0, _Types.L)(k$$1, (0, _Types.L)(v$$3, (0, _Types.L)()));
        }, members$$2);

        if (baseCall$$2 == null) {
          return members$$3;
        } else {
          const b = baseCall$$2;
          return (0, _Types.L)(b, members$$3);
        }
      }

    case 8:
      {
        const kind$$16 = _arg1$$1.fields[0];

        switch (kind$$16.tag) {
          case 0:
            {
              const kind$$17 = kind$$16.fields[0];
              const info$$5 = kind$$16.fields[1];
              let e1$$6;

              switch (kind$$17.tag) {
                case 1:
                  {
                    const e$$26 = kind$$17.fields[0];
                    e1$$6 = (0, _Types.L)(e$$26, (0, _Types.L)());
                    break;
                  }

                case 2:
                  {
                    const memb$$1 = kind$$17.fields[0];
                    e1$$6 = (0, _List.ofArray)((0, _Option.defaultArg)(memb$$1, [], function ($x$$2) {
                      return [$x$$2];
                    }));
                    break;
                  }

                default:
                  {
                    const e$$25 = kind$$17.fields[0];
                    e1$$6 = (0, _Types.L)(e$$25, (0, _Types.L)());
                  }
              }

              return (0, _List.append)(e1$$6, (0, _List.append)((0, _List.ofArray)((0, _Option.defaultArg)(info$$5.ThisArg, [], function ($x$$3) {
                return [$x$$3];
              })), info$$5.Args));
            }

          case 2:
            {
              const info$$6 = kind$$16.fields[1];

              if (info$$6 == null) {
                return (0, _Types.L)();
              } else {
                const info$$7 = info$$6;
                return (0, _List.append)((0, _List.ofArray)((0, _Option.defaultArg)(info$$7.ThisArg, [], function ($x$$4) {
                  return [$x$$4];
                })), info$$7.Args);
              }
            }

          case 3:
            {
              const operand$$1 = kind$$16.fields[1];
              return (0, _Types.L)(operand$$1, (0, _Types.L)());
            }

          case 4:
            {
              const right$$2 = kind$$16.fields[2];
              const left$$2 = kind$$16.fields[1];
              return (0, _Types.L)(left$$2, (0, _Types.L)(right$$2, (0, _Types.L)()));
            }

          case 5:
            {
              const right$$3 = kind$$16.fields[2];
              const left$$3 = kind$$16.fields[1];
              return (0, _Types.L)(left$$3, (0, _Types.L)(right$$3, (0, _Types.L)()));
            }

          default:
            {
              const callee$$1 = kind$$16.fields[0];
              const args$$1 = kind$$16.fields[1];
              return (0, _Types.L)(callee$$1, args$$1);
            }
        }
      }

    case 9:
      {
        const kind$$18 = _arg1$$1.fields[1];
        const e$$27 = _arg1$$1.fields[0];
        var $target$$39;

        switch (kind$$18.tag) {
          case 6:
          case 7:
          case 1:
          case 4:
          case 3:
          case 2:
            $target$$39 = 0;
            break;

          case 0:
            $target$$39 = 1;
            break;

          default:
            $target$$39 = 0;
        }

        switch ($target$$39) {
          case 0:
            {
              return (0, _Types.L)(e$$27, (0, _Types.L)());
            }

          case 1:
            {
              const e2$$8 = kind$$18.fields[0];
              return (0, _Types.L)(e$$27, (0, _Types.L)(e2$$8, (0, _Types.L)()));
            }
        }
      }

    case 10:
      {
        const e$$28 = _arg1$$1.fields[0];
        return (0, _Types.L)(e$$28, (0, _Types.L)());
      }

    case 11:
      {
        const exprs$$9 = _arg1$$1.fields[0];
        return exprs$$9;
      }

    case 12:
      {
        const bs$$2 = _arg1$$1.fields[0];
        const body$$4 = _arg1$$1.fields[1];
        return (0, _List.append)((0, _List.map)(function (tuple) {
          return tuple[1];
        }, bs$$2), (0, _Types.L)(body$$4, (0, _Types.L)()));
      }

    case 13:
      {
        const thenExpr$$1 = _arg1$$1.fields[1];
        const elseExpr$$1 = _arg1$$1.fields[2];
        const cond$$1 = _arg1$$1.fields[0];
        return (0, _Types.L)(cond$$1, (0, _Types.L)(thenExpr$$1, (0, _Types.L)(elseExpr$$1, (0, _Types.L)())));
      }

    case 14:
      {
        const v$$4 = _arg1$$1.fields[2];
        const kind$$19 = _arg1$$1.fields[1];
        const e$$29 = _arg1$$1.fields[0];
        var $target$$40;

        switch (kind$$19.tag) {
          case 2:
            $target$$40 = 0;
            break;

          case 1:
            $target$$40 = 1;
            break;

          default:
            $target$$40 = 0;
        }

        switch ($target$$40) {
          case 0:
            {
              return (0, _Types.L)(e$$29, (0, _Types.L)(v$$4, (0, _Types.L)()));
            }

          case 1:
            {
              const e2$$9 = kind$$19.fields[0];
              return (0, _Types.L)(e$$29, (0, _Types.L)(e2$$9, (0, _Types.L)(v$$4, (0, _Types.L)())));
            }
        }
      }

    case 15:
      {
        const kind$$20 = _arg1$$1.fields[0];

        if (kind$$20.tag === 1) {
          const e3$$1 = kind$$20.fields[3];
          const e2$$11 = kind$$20.fields[2];
          const e1$$8 = kind$$20.fields[1];
          return (0, _Types.L)(e1$$8, (0, _Types.L)(e2$$11, (0, _Types.L)(e3$$1, (0, _Types.L)())));
        } else {
          const e2$$10 = kind$$20.fields[1];
          const e1$$7 = kind$$20.fields[0];
          return (0, _Types.L)(e1$$7, (0, _Types.L)(e2$$10, (0, _Types.L)()));
        }
      }

    case 16:
      {
        const finalizer$$1 = _arg1$$1.fields[2];
        const catch$$$1 = _arg1$$1.fields[1];
        const body$$5 = _arg1$$1.fields[0];

        if (catch$$$1 == null) {
          return (0, _Types.L)(body$$5, (0, _List.ofArray)((0, _Option.defaultArg)(finalizer$$1, [], function ($x$$6) {
            return [$x$$6];
          })));
        } else {
          const c = catch$$$1[1];
          return (0, _Types.L)(body$$5, (0, _Types.L)(c, (0, _List.ofArray)((0, _Option.defaultArg)(finalizer$$1, [], function ($x$$5) {
            return [$x$$5];
          }))));
        }
      }

    case 17:
      {
        const targets$$2 = _arg1$$1.fields[1];
        const expr$$1 = _arg1$$1.fields[0];
        return (0, _Types.L)(expr$$1, (0, _List.map)(function (tuple$$1) {
          return tuple$$1[1];
        }, targets$$2));
      }

    case 18:
      {
        const boundValues$$1 = _arg1$$1.fields[1];
        return boundValues$$1;
      }
  }
}

function deepExists(f$$3, expr$$2) {
  if (f$$3(expr$$2)) {
    return true;
  } else {
    return (0, _List.exists)(function predicate(expr$$3) {
      return deepExists(f$$3, expr$$3);
    }, getSubExpressions(expr$$2));
  }
}

function deepExistsWithShortcircuit(f$$4, expr$$4) {
  const matchValue$$1 = f$$4(expr$$4);

  if (matchValue$$1 == null) {
    return (0, _List.exists)(function predicate$$1(expr$$5) {
      return deepExistsWithShortcircuit(f$$4, expr$$5);
    }, getSubExpressions(expr$$4));
  } else {
    const res = matchValue$$1;
    return res;
  }
}

function replaceValues(replacements, expr$$6) {
  if ((0, _Map.isEmpty)(replacements)) {
    return expr$$6;
  } else {
    return visitFromInsideOut(function f$$5(_arg1$$3) {
      if (_arg1$$3.tag === 1) {
        const id = _arg1$$3.fields[0];
        const e$$30 = _arg1$$3;
        const matchValue$$2 = (0, _Map.tryFind)(id.Name, replacements);

        if (matchValue$$2 == null) {
          return e$$30;
        } else {
          const e$$31 = matchValue$$2;
          return e$$31;
        }
      } else {
        const e$$32 = _arg1$$3;
        return e$$32;
      }
    }, expr$$6);
  }
}

function countReferences(limit, identName, body$$6) {
  let count = 0;
  deepExists(function f$$6(_arg1$$4) {
    var id2;
    var $target$$45, id2$$1;

    if (_arg1$$4.tag === 1) {
      if (id2 = _arg1$$4.fields[0], id2.Name === identName) {
        $target$$45 = 0;
        id2$$1 = _arg1$$4.fields[0];
      } else {
        $target$$45 = 1;
      }
    } else {
      $target$$45 = 1;
    }

    switch ($target$$45) {
      case 0:
        {
          count = count + 1;
          return count > limit;
        }

      case 1:
        {
          return false;
        }
    }
  }, body$$6);
  return count | 0;
}

function canInlineArg(identName$$1, value$$1, body$$7) {
  if (!(0, _Transforms.AST$$$hasDoubleEvalRisk)(value$$1)) {
    return true;
  } else {
    return countReferences(1, identName$$1, body$$7) === 1;
  }
}

function Transforms$$$$007CLambdaOrDelegate$007C_$007C(_arg1$$5) {
  if (_arg1$$5.tag === 5) {
    if (_arg1$$5.fields[0].tag === 1) {
      return [_arg1$$5.fields[0].fields[0], _arg1$$5.fields[1], _arg1$$5.fields[2]];
    } else {
      return [(0, _Types.L)(_arg1$$5.fields[0].fields[0], (0, _Types.L)()), _arg1$$5.fields[1], _arg1$$5.fields[2]];
    }
  } else {
    return null;
  }
}

function Transforms$$$lambdaBetaReduction(_arg1$$6, e$$34) {
  const applyArgs = function applyArgs(args$$3, argExprs, body$$10) {
    const patternInput = (0, _List.fold2)(function folder(tupledArg$$4, ident, expr$$8) {
      if (canInlineArg(ident.Name, expr$$8, body$$10)) {
        return [tupledArg$$4[0], (0, _Map.add)(ident.Name, expr$$8, tupledArg$$4[1])];
      } else {
        return [(0, _Types.L)([ident, expr$$8], tupledArg$$4[0]), tupledArg$$4[1]];
      }
    }, [(0, _Types.L)(), (0, _Map.empty)({
      Compare: _Util.comparePrimitives
    })], args$$3, argExprs);

    if (patternInput[0].tail == null) {
      return replaceValues(patternInput[1], body$$10);
    } else {
      const bindings$$2 = patternInput[0];
      return new _AST.Expr(15, "Let", (0, _List.reverse)(bindings$$2), replaceValues(patternInput[1], body$$10));
    }
  };

  var $target$$46, argExprs$$1, args$$4, body$$11, lambda;

  if (e$$34.tag === 8) {
    if (e$$34.fields[0].tag === 1) {
      const activePatternResult68959 = (0, _Transforms.AST$$$$007CNestedLambda$007C_$007C)(e$$34.fields[0].fields[0]);

      if (activePatternResult68959 != null) {
        if (activePatternResult68959[2] == null) {
          $target$$46 = 0;
          argExprs$$1 = e$$34.fields[0].fields[1];
          args$$4 = activePatternResult68959[0];
          body$$11 = activePatternResult68959[1];
          lambda = e$$34.fields[0].fields[0];
        } else {
          $target$$46 = 1;
        }
      } else {
        $target$$46 = 1;
      }
    } else {
      $target$$46 = 1;
    }
  } else {
    $target$$46 = 1;
  }

  switch ($target$$46) {
    case 0:
      {
        if ((0, _Prelude.List$$$sameLength)(args$$4, argExprs$$1)) {
          return applyArgs(args$$4, argExprs$$1, body$$11);
        } else {
          const matchValue$$3 = [(0, _List.length)(argExprs$$1), lambda];
          var $target$$47, arg$$1, body$$12, arg1, arg2, body$$13, arg1$$1, arg2$$1, arg3, body$$14, arg1$$2, arg2$$2, arg3$$1, arg4, body$$15;

          if (matchValue$$3[0] === 1) {
            if (matchValue$$3[1].tag === 5) {
              if (matchValue$$3[1].fields[0].tag === 0) {
                $target$$47 = 0;
                arg$$1 = matchValue$$3[1].fields[0].fields[0];
                body$$12 = matchValue$$3[1].fields[1];
              } else {
                $target$$47 = 4;
              }
            } else {
              $target$$47 = 4;
            }
          } else if (matchValue$$3[0] === 2) {
            if (matchValue$$3[1].tag === 5) {
              if (matchValue$$3[1].fields[0].tag === 0) {
                if (matchValue$$3[1].fields[1].tag === 5) {
                  if (matchValue$$3[1].fields[1].fields[0].tag === 0) {
                    $target$$47 = 1;
                    arg1 = matchValue$$3[1].fields[0].fields[0];
                    arg2 = matchValue$$3[1].fields[1].fields[0].fields[0];
                    body$$13 = matchValue$$3[1].fields[1].fields[1];
                  } else {
                    $target$$47 = 4;
                  }
                } else {
                  $target$$47 = 4;
                }
              } else {
                $target$$47 = 4;
              }
            } else {
              $target$$47 = 4;
            }
          } else if (matchValue$$3[0] === 3) {
            if (matchValue$$3[1].tag === 5) {
              if (matchValue$$3[1].fields[0].tag === 0) {
                if (matchValue$$3[1].fields[1].tag === 5) {
                  if (matchValue$$3[1].fields[1].fields[0].tag === 0) {
                    if (matchValue$$3[1].fields[1].fields[1].tag === 5) {
                      if (matchValue$$3[1].fields[1].fields[1].fields[0].tag === 0) {
                        $target$$47 = 2;
                        arg1$$1 = matchValue$$3[1].fields[0].fields[0];
                        arg2$$1 = matchValue$$3[1].fields[1].fields[0].fields[0];
                        arg3 = matchValue$$3[1].fields[1].fields[1].fields[0].fields[0];
                        body$$14 = matchValue$$3[1].fields[1].fields[1].fields[1];
                      } else {
                        $target$$47 = 4;
                      }
                    } else {
                      $target$$47 = 4;
                    }
                  } else {
                    $target$$47 = 4;
                  }
                } else {
                  $target$$47 = 4;
                }
              } else {
                $target$$47 = 4;
              }
            } else {
              $target$$47 = 4;
            }
          } else if (matchValue$$3[0] === 4) {
            if (matchValue$$3[1].tag === 5) {
              if (matchValue$$3[1].fields[0].tag === 0) {
                if (matchValue$$3[1].fields[1].tag === 5) {
                  if (matchValue$$3[1].fields[1].fields[0].tag === 0) {
                    if (matchValue$$3[1].fields[1].fields[1].tag === 5) {
                      if (matchValue$$3[1].fields[1].fields[1].fields[0].tag === 0) {
                        if (matchValue$$3[1].fields[1].fields[1].fields[1].tag === 5) {
                          if (matchValue$$3[1].fields[1].fields[1].fields[1].fields[0].tag === 0) {
                            $target$$47 = 3;
                            arg1$$2 = matchValue$$3[1].fields[0].fields[0];
                            arg2$$2 = matchValue$$3[1].fields[1].fields[0].fields[0];
                            arg3$$1 = matchValue$$3[1].fields[1].fields[1].fields[0].fields[0];
                            arg4 = matchValue$$3[1].fields[1].fields[1].fields[1].fields[0].fields[0];
                            body$$15 = matchValue$$3[1].fields[1].fields[1].fields[1].fields[1];
                          } else {
                            $target$$47 = 4;
                          }
                        } else {
                          $target$$47 = 4;
                        }
                      } else {
                        $target$$47 = 4;
                      }
                    } else {
                      $target$$47 = 4;
                    }
                  } else {
                    $target$$47 = 4;
                  }
                } else {
                  $target$$47 = 4;
                }
              } else {
                $target$$47 = 4;
              }
            } else {
              $target$$47 = 4;
            }
          } else {
            $target$$47 = 4;
          }

          switch ($target$$47) {
            case 0:
              {
                return applyArgs((0, _Types.L)(arg$$1, (0, _Types.L)()), argExprs$$1, body$$12);
              }

            case 1:
              {
                return applyArgs((0, _Types.L)(arg1, (0, _Types.L)(arg2, (0, _Types.L)())), argExprs$$1, body$$13);
              }

            case 2:
              {
                return applyArgs((0, _Types.L)(arg1$$1, (0, _Types.L)(arg2$$1, (0, _Types.L)(arg3, (0, _Types.L)()))), argExprs$$1, body$$14);
              }

            case 3:
              {
                return applyArgs((0, _Types.L)(arg1$$2, (0, _Types.L)(arg2$$2, (0, _Types.L)(arg3$$1, (0, _Types.L)(arg4, (0, _Types.L)())))), argExprs$$1, body$$15);
              }

            case 4:
              {
                return e$$34;
              }
          }
        }
      }

    case 1:
      {
        const e$$35 = e$$34;
        return e$$35;
      }
  }
}

function Transforms$$$tupleBetaReduction(_arg1$$7) {
  return function (_arg2) {
    return _arg2.tag === 9 ? _arg2.fields[0].tag === 0 ? _arg2.fields[0].fields[0].tag === 12 ? _arg2.fields[1].tag === 1 ? (0, _List.item)(_arg2.fields[1].fields[0], _arg2.fields[0].fields[0].fields[0]) : _arg2 : _arg2 : _arg2 : _arg2;
  };
}

function Transforms$$$bindingBetaReduction(com, e$$37) {
  var value$$6, funBody, currentName, args$$5, value$$4, tupleIdent, value$$2, letBody, ident$$1;

  const isTuple = function isTuple(_arg1$$8) {
    if (_arg1$$8.tag === 10) {
      return true;
    } else {
      return false;
    }
  };

  var $target$$48, ident$$2, letBody$$1, value$$3;

  if (e$$37.tag === 15) {
    if (e$$37.fields[0].tail != null) {
      if (e$$37.fields[0].tail.tail == null) {
        if (value$$2 = e$$37.fields[0].head[1], (letBody = e$$37.fields[1], (ident$$1 = e$$37.fields[0].head[0], !ident$$1.IsMutable))) {
          $target$$48 = 0;
          ident$$2 = e$$37.fields[0].head[0];
          letBody$$1 = e$$37.fields[1];
          value$$3 = e$$37.fields[0].head[1];
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
        var $target$$49, tupleIdent$$1, value$$5;

        if (value$$3.tag === 9) {
          if (value$$3.fields[0].tag === 1) {
            if (value$$3.fields[1].tag === 1) {
              if (value$$4 = value$$3, (tupleIdent = value$$3.fields[0].fields[0], tupleIdent.IsCompilerGenerated)) {
                $target$$49 = 0;
                tupleIdent$$1 = value$$3.fields[0].fields[0];
                value$$5 = value$$3;
              } else {
                $target$$49 = 1;
              }
            } else {
              $target$$49 = 1;
            }
          } else {
            $target$$49 = 1;
          }
        } else {
          $target$$49 = 1;
        }

        switch ($target$$49) {
          case 0:
            {
              return replaceValues((0, _Map.ofSeq)([[ident$$2.Name, value$$5]], {
                Compare: _Util.comparePrimitives
              }), letBody$$1);
            }

          case 1:
            {
              var $target$$50, args$$6, currentName$$1, funBody$$1;

              if (value$$3.tag === 5) {
                if (funBody = value$$3.fields[1], (currentName = value$$3.fields[2], (args$$5 = value$$3.fields[0], ident$$2.IsCompilerGenerated ? countReferences(1, ident$$2.Name, letBody$$1) <= 1 : false))) {
                  $target$$50 = 0;
                  args$$6 = value$$3.fields[0];
                  currentName$$1 = value$$3.fields[2];
                  funBody$$1 = value$$3.fields[1];
                } else {
                  $target$$50 = 1;
                }
              } else {
                $target$$50 = 1;
              }

              switch ($target$$50) {
                case 0:
                  {
                    if (currentName$$1 != null) {
                      (0, _Transforms.Log$$$addWarning)(com, (0, _Types.L)(), ident$$2.Range, (0, _String.toText)((0, _String.printf)("Unexpected named function when erasing binding (%s > %s)"))(currentName$$1)(ident$$2.Name));
                    }

                    const replacement = new _AST.Expr(5, "Function", args$$6, funBody$$1, ident$$2.Name);
                    return replaceValues((0, _Map.ofSeq)([[ident$$2.Name, replacement]], {
                      Compare: _Util.comparePrimitives
                    }), letBody$$1);
                  }

                case 1:
                  {
                    if (value$$6 = value$$3, (ident$$2.IsCompilerGenerated ? !isTuple(ident$$2.Type) : false) ? canInlineArg(ident$$2.Name, value$$6, letBody$$1) : false) {
                      const value$$7 = value$$3;
                      return replaceValues((0, _Map.ofSeq)([[ident$$2.Name, value$$7]], {
                        Compare: _Util.comparePrimitives
                      }), letBody$$1);
                    } else {
                      return e$$37;
                    }
                  }
              }
            }
        }
      }

    case 1:
      {
        const e$$38 = e$$37;
        return e$$38;
      }
  }
}

function Transforms$$$getLambdaTypeArity(t$$12) {
  const getLambdaTypeArity = function getLambdaTypeArity(acc, _arg1$$9) {
    getLambdaTypeArity: while (true) {
      var $target$$51, returnType;

      if (_arg1$$9.tag === 13) {
        if (_arg1$$9.fields[0].tag === 0) {
          $target$$51 = 0;
          returnType = _arg1$$9.fields[1];
        } else {
          $target$$51 = 1;
        }
      } else {
        $target$$51 = 1;
      }

      switch ($target$$51) {
        case 0:
          {
            acc = acc + 1;
            _arg1$$9 = returnType;
            continue getLambdaTypeArity;
          }

        case 1:
          {
            return acc | 0;
          }
      }
    }
  };

  var $target$$52, returnType$$1;

  if (t$$12.tag === 13) {
    if (t$$12.fields[0].tag === 0) {
      $target$$52 = 0;
      returnType$$1 = t$$12.fields[1];
    } else {
      $target$$52 = 1;
    }
  } else if (t$$12.tag === 9) {
    if (t$$12.fields[0].tag === 13) {
      if (t$$12.fields[0].fields[0].tag === 0) {
        $target$$52 = 0;
        returnType$$1 = t$$12.fields[0].fields[1];
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
        return getLambdaTypeArity(1, returnType$$1) | 0;
      }

    case 1:
      {
        return 0;
      }
  }
}

function Transforms$$$curryIdentsInBody(replacements$$3, body$$16) {
  return visitFromInsideOut(function (_arg1$$10) {
    if (_arg1$$10.tag === 1) {
      const id$$1 = _arg1$$10.fields[0];
      const e$$39 = _arg1$$10;
      const matchValue$$4 = (0, _Map.tryFind)(id$$1.Name, replacements$$3);

      if (matchValue$$4 == null) {
        return e$$39;
      } else {
        const arity$$1 = matchValue$$4 | 0;
        return new _AST.Expr(3, "DelayedResolution", new _AST.DelayedResolutionKind(1, "Curry", e$$39, arity$$1), id$$1.Type, id$$1.Range);
      }
    } else {
      const e$$40 = _arg1$$10;
      return e$$40;
    }
  }, body$$16);
}

function Transforms$$$uncurryIdentsAndReplaceInBody(idents$$1, body$$17) {
  const replacements$$5 = (0, _List.fold)(function folder$$1(replacements$$4, id$$2) {
    const arity$$2 = Transforms$$$getLambdaTypeArity(id$$2.Type) | 0;

    if (arity$$2 > 1) {
      return (0, _Map.add)(id$$2.Name, arity$$2, replacements$$4);
    } else {
      return replacements$$4;
    }
  }, (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }), idents$$1);

  if ((0, _Map.isEmpty)(replacements$$5)) {
    return body$$17;
  } else {
    return Transforms$$$curryIdentsInBody(replacements$$5, body$$17);
  }
}

function Transforms$$$uncurryExpr(arity$$3, expr$$9) {
  var r$$10, innerExpr$$4, arity2$$5, t$$13, r$$8, innerExpr$$2, arity2$$3, innerExpr, arity2$$1;

  const matches = function matches(arity$$4, arity2) {
    if (arity$$4 == null) {
      return true;
    } else {
      const arity$$5 = (0, _Option.value)(arity$$4);
      return (0, _Util.equals)(arity$$5, arity2);
    }
  };

  const matchValue$$5 = [expr$$9, expr$$9];
  const activePatternResult68983 = (0, _Transforms.AST$$$$007CLambdaUncurriedAtCompileTime$007C_$007C)(arity$$3, (0, _Transforms.AST$$$$007CMaybeCasted$007C)(matchValue$$5[0]));

  if (activePatternResult68983 != null) {
    const lambda$$1 = activePatternResult68983;
    return lambda$$1;
  } else {
    var $target$$53, arity2$$2, innerExpr$$1;

    if (matchValue$$5[1].tag === 3) {
      if (matchValue$$5[1].fields[0].tag === 1) {
        if (innerExpr = matchValue$$5[1].fields[0].fields[0], (arity2$$1 = matchValue$$5[1].fields[0].fields[1] | 0, matches(arity$$3, arity2$$1))) {
          $target$$53 = 0;
          arity2$$2 = matchValue$$5[1].fields[0].fields[1];
          innerExpr$$1 = matchValue$$5[1].fields[0].fields[0];
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
          return innerExpr$$1;
        }

      case 1:
        {
          var $target$$54, arity2$$4, innerExpr$$3, r$$9, t$$14;

          if (matchValue$$5[1].tag === 9) {
            if (matchValue$$5[1].fields[0].tag === 3) {
              if (matchValue$$5[1].fields[0].fields[0].tag === 1) {
                if (matchValue$$5[1].fields[1].tag === 7) {
                  if (t$$13 = matchValue$$5[1].fields[2], (r$$8 = matchValue$$5[1].fields[3], (innerExpr$$2 = matchValue$$5[1].fields[0].fields[0].fields[0], (arity2$$3 = matchValue$$5[1].fields[0].fields[0].fields[1] | 0, matches(arity$$3, arity2$$3))))) {
                    $target$$54 = 0;
                    arity2$$4 = matchValue$$5[1].fields[0].fields[0].fields[1];
                    innerExpr$$3 = matchValue$$5[1].fields[0].fields[0].fields[0];
                    r$$9 = matchValue$$5[1].fields[3];
                    t$$14 = matchValue$$5[1].fields[2];
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
                return new _AST.Expr(9, "Get", innerExpr$$3, new _AST.GetKind(7, "OptionValue"), t$$14, r$$9);
              }

            case 1:
              {
                var $target$$55, arity2$$6, innerExpr$$5, r$$11;

                if (matchValue$$5[1].tag === 0) {
                  if (matchValue$$5[1].fields[0].tag === 9) {
                    if (matchValue$$5[1].fields[0].fields[0] != null) {
                      if (matchValue$$5[1].fields[0].fields[0].tag === 3) {
                        if (matchValue$$5[1].fields[0].fields[0].fields[0].tag === 1) {
                          if (r$$10 = matchValue$$5[1].fields[0].fields[1], (innerExpr$$4 = matchValue$$5[1].fields[0].fields[0].fields[0].fields[0], (arity2$$5 = matchValue$$5[1].fields[0].fields[0].fields[0].fields[1] | 0, matches(arity$$3, arity2$$5)))) {
                            $target$$55 = 0;
                            arity2$$6 = matchValue$$5[1].fields[0].fields[0].fields[0].fields[1];
                            innerExpr$$5 = matchValue$$5[1].fields[0].fields[0].fields[0].fields[0];
                            r$$11 = matchValue$$5[1].fields[0].fields[1];
                          } else {
                            $target$$55 = 1;
                          }
                        } else {
                          $target$$55 = 1;
                        }
                      } else {
                        $target$$55 = 1;
                      }
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
                      return new _AST.Expr(0, "Value", new _AST.ValueKind(9, "NewOption", innerExpr$$5, r$$11));
                    }

                  case 1:
                    {
                      if (arity$$3 == null) {
                        return expr$$9;
                      } else {
                        const arity$$6 = arity$$3 | 0;
                        return (0, _Replacements.uncurryExprAtRuntime)(arity$$6, expr$$9);
                      }
                    }
                }
              }
          }
        }
    }
  }
}

function Transforms$$$checkSubArguments(com$$1, expectedType, expr$$10) {
  var returnType$$2, expectedArgs, actualArgs;
  const matchValue$$6 = [expectedType, expr$$10];
  var $target$$56, actualArgs$$1, expectedArgs$$1, returnType$$3;
  const activePatternResult68995 = (0, _Transforms.AST$$$$007CNestedLambdaType$007C_$007C)(matchValue$$6[0]);

  if (activePatternResult68995 != null) {
    const activePatternResult68997 = (0, _Transforms.AST$$$$007CNestedLambdaType$007C_$007C)((0, _AST.Expr$$get_Type)(matchValue$$6[1]));

    if (activePatternResult68997 != null) {
      if (returnType$$2 = activePatternResult68997[1], (expectedArgs = activePatternResult68995[0], (actualArgs = activePatternResult68997[0], (0, _Prelude.List$$$sameLength)(expectedArgs, actualArgs)))) {
        $target$$56 = 0;
        actualArgs$$1 = activePatternResult68997[0];
        expectedArgs$$1 = activePatternResult68995[0];
        returnType$$3 = activePatternResult68997[1];
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
        const patternInput$$1 = (0, _List.fold2)(function folder$$2(tupledArg$$5, expected, actual) {
          var args2$$2, args1, args2;
          const matchValue$$7 = [expected, actual];
          var $target$$57, args2$$1;

          if (matchValue$$7[0].tag === 14) {
            const activePatternResult68988 = (0, _Transforms.AST$$$$007CNestedLambdaType$007C_$007C)(matchValue$$7[1]);

            if (activePatternResult68988 != null) {
              if (args2 = activePatternResult68988[0], (0, _Prelude.List$$$isMultiple)(args2)) {
                $target$$57 = 0;
                args2$$1 = activePatternResult68988[0];
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
                return [tupledArg$$5[0] + 1, (0, _Map.add)(tupledArg$$5[0], [0, (0, _List.length)(args2$$1)], tupledArg$$5[1])];
              }

            case 1:
              {
                var $target$$58, args1$$1, args2$$3;
                const activePatternResult68986 = (0, _Transforms.AST$$$$007CNestedLambdaType$007C_$007C)(matchValue$$7[0]);

                if (activePatternResult68986 != null) {
                  const activePatternResult68987 = (0, _Transforms.AST$$$$007CNestedLambdaType$007C_$007C)(matchValue$$7[1]);

                  if (activePatternResult68987 != null) {
                    if (args2$$2 = activePatternResult68987[0], (args1 = activePatternResult68986[0], !(0, _Prelude.List$$$sameLength)(args1, args2$$2))) {
                      $target$$58 = 0;
                      args1$$1 = activePatternResult68986[0];
                      args2$$3 = activePatternResult68987[0];
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
                      const expectedArity = (0, _List.length)(args1$$1) | 0;
                      const actualArity = (0, _List.length)(args2$$3) | 0;
                      return [tupledArg$$5[0] + 1, (0, _Map.add)(tupledArg$$5[0], [expectedArity, actualArity], tupledArg$$5[1])];
                    }

                  case 1:
                    {
                      return [tupledArg$$5[0] + 1, tupledArg$$5[1]];
                    }
                }
              }
          }
        }, [0, (0, _Map.empty)({
          Compare: _Util.comparePrimitives
        })], expectedArgs$$1, actualArgs$$1);

        if ((0, _Map.isEmpty)(patternInput$$1[1])) {
          return expr$$10;
        } else {
          const args$$7 = (0, _List.map)(function (_arg1$$11) {
            return (0, _Transforms.AST$$$makeIdentUnique)(com$$1, "arg");
          }, actualArgs$$1);
          const argExprs$$2 = (0, _List.mapIndexed)(function mapping$$6(i$$3, arg$$2) {
            const argExpr = new _AST.Expr(1, "IdentExpr", arg$$2);
            const matchValue$$8 = (0, _Map.tryFind)(i$$3, patternInput$$1[1]);

            if (matchValue$$8 == null) {
              return argExpr;
            } else {
              const expectedArity$$1 = matchValue$$8[0] | 0;
              const actualArity$$1 = matchValue$$8[1] | 0;
              const argExpr$$1 = expectedArity$$1 > 1 ? (0, _Replacements.curryExprAtRuntime)(expectedArity$$1, argExpr) : argExpr;
              return (0, _Replacements.uncurryExprAtRuntime)(actualArity$$1, argExpr$$1);
            }
          }, args$$7);
          const body$$18 = new _AST.Expr(8, "Operation", new _AST.OperationKind(1, "CurriedApply", expr$$10, argExprs$$2), returnType$$3, null);
          return (0, _Transforms.AST$$$makeLambda)(args$$7, body$$18);
        }
      }

    case 1:
      {
        return expr$$10;
      }
  }
}

function Transforms$$$uncurryArgs(com$$2, argTypes, args$$8) {
  const mapArgs = function mapArgs(f$$7, argTypes$$1, args$$9) {
    const mapArgsInner = function mapArgsInner($arg$$62, $arg$$63, $arg$$64, $arg$$65) {
      mapArgsInner: while (true) {
        const f$$8 = $arg$$62,
              acc$$1 = $arg$$63,
              argTypes$$2 = $arg$$64,
              args$$10 = $arg$$65;
        const matchValue$$9 = [argTypes$$2, args$$10];

        if (matchValue$$9[0].tail == null) {
          return (0, _List.append)((0, _List.reverse)(acc$$1), matchValue$$9[1]);
        } else if (matchValue$$9[1].tail == null) {
          return (0, _List.reverse)(acc$$1);
        } else {
          const x = f$$8(matchValue$$9[0].head, matchValue$$9[1].head);
          $arg$$62 = f$$8;
          $arg$$63 = (0, _Types.L)(x, acc$$1);
          $arg$$64 = matchValue$$9[0].tail;
          $arg$$65 = matchValue$$9[1].tail;
          continue mapArgsInner;
        }
      }
    };

    return mapArgsInner(f$$7, (0, _Types.L)(), argTypes$$1, args$$9);
  };

  var $target$$66, argTypes$$3;

  if (argTypes.tag === 0) {
    if (argTypes.fields[0].tail == null) {
      $target$$66 = 0;
    } else {
      $target$$66 = 1;
      argTypes$$3 = argTypes.fields[0];
    }
  } else if (argTypes.tag === 1) {
    $target$$66 = 2;
  } else {
    $target$$66 = 0;
  }

  switch ($target$$66) {
    case 0:
      {
        return args$$8;
      }

    case 1:
      {
        return mapArgs(function (expectedType$$1, arg$$3) {
          const arg$$4 = Transforms$$$checkSubArguments(com$$2, expectedType$$1, arg$$3);
          const arity$$7 = Transforms$$$getLambdaTypeArity(expectedType$$1) | 0;
          return arity$$7 > 1 ? Transforms$$$uncurryExpr(arity$$7, arg$$4) : arg$$4;
        }, argTypes$$3, args$$8);
      }

    case 2:
      {
        return (0, _List.map)(function (expr$$11) {
          return Transforms$$$uncurryExpr(null, expr$$11);
        }, args$$8);
      }
  }
}

function Transforms$$$uncurryInnerFunctions(_arg1$$12, e$$42) {
  var t$$15, r$$12, name$$3, fnBody$$3, args$$14, argExprs$$3, letBody$$2, ident$$3, fnBody, args$$12;

  const curryIdentInBody = function curryIdentInBody(identName$$2, args$$11, body$$19) {
    return Transforms$$$curryIdentsInBody((0, _Map.ofSeq)([[identName$$2, (0, _List.length)(args$$11)]], {
      Compare: _Util.comparePrimitives
    }), body$$19);
  };

  var $target$$67, args$$13, fnBody$$1, ident$$4, letBody$$3;

  if (e$$42.tag === 15) {
    if (e$$42.fields[0].tail != null) {
      const activePatternResult69021 = (0, _Transforms.AST$$$$007CNestedLambda$007C_$007C)(e$$42.fields[0].head[1]);

      if (activePatternResult69021 != null) {
        if (e$$42.fields[0].tail.tail == null) {
          if (letBody$$2 = e$$42.fields[1], (ident$$3 = e$$42.fields[0].head[0], (fnBody = activePatternResult69021[1], (args$$12 = activePatternResult69021[0], (0, _Prelude.List$$$isMultiple)(args$$12))))) {
            $target$$67 = 0;
            args$$13 = activePatternResult69021[0];
            fnBody$$1 = activePatternResult69021[1];
            ident$$4 = e$$42.fields[0].head[0];
            letBody$$3 = e$$42.fields[1];
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
  } else {
    $target$$67 = 1;
  }

  switch ($target$$67) {
    case 0:
      {
        const fnBody$$2 = curryIdentInBody(ident$$4.Name, args$$13, fnBody$$1);
        const letBody$$4 = curryIdentInBody(ident$$4.Name, args$$13, letBody$$3);
        return new _AST.Expr(15, "Let", (0, _Types.L)([ident$$4, new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", args$$13), fnBody$$2, null)], (0, _Types.L)()), letBody$$4);
      }

    case 1:
      {
        var $target$$68, argExprs$$4, args$$15, fnBody$$4, name$$4, r$$13, t$$16;

        if (e$$42.tag === 8) {
          if (e$$42.fields[0].tag === 1) {
            const activePatternResult69020 = (0, _Transforms.AST$$$$007CNestedLambda$007C_$007C)(e$$42.fields[0].fields[0]);

            if (activePatternResult69020 != null) {
              if (activePatternResult69020[2] != null) {
                if (t$$15 = e$$42.fields[1], (r$$12 = e$$42.fields[2], (name$$3 = activePatternResult69020[2], (fnBody$$3 = activePatternResult69020[1], (args$$14 = activePatternResult69020[0], (argExprs$$3 = e$$42.fields[0].fields[1], (0, _Prelude.List$$$isMultiple)(args$$14) ? (0, _Prelude.List$$$sameLength)(args$$14, argExprs$$3) : false)))))) {
                  $target$$68 = 0;
                  argExprs$$4 = e$$42.fields[0].fields[1];
                  args$$15 = activePatternResult69020[0];
                  fnBody$$4 = activePatternResult69020[1];
                  name$$4 = activePatternResult69020[2];
                  r$$13 = e$$42.fields[2];
                  t$$16 = e$$42.fields[1];
                } else {
                  $target$$68 = 1;
                }
              } else {
                $target$$68 = 1;
              }
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
              const fnBody$$5 = curryIdentInBody(name$$4, args$$15, fnBody$$4);
              const info$$8 = (0, _Transforms.AST$$$argInfo)(null, argExprs$$4, new _AST.SignatureKind(0, "Typed", (0, _List.map)(function mapping$$7(a) {
                return a.Type;
              }, args$$15)));
              return (0, _Transforms.AST$$$staticCall)(r$$13, t$$16, info$$8, new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", args$$15), fnBody$$5, name$$4));
            }

          case 1:
            {
              const e$$43 = e$$42;
              return e$$43;
            }
        }
      }
  }
}

function Transforms$$$propagateUncurryingThroughLets(_arg1$$13) {
  return function (_arg2$$1) {
    if (_arg2$$1.tag === 15) {
      const identsAndValues = _arg2$$1.fields[0];
      const body$$20 = _arg2$$1.fields[1];
      const patternInput$$2 = (0, _List.foldBack)(function folder$$3(tupledArg$$6, tupledArg$$7) {
        var $target$$69, arity$$9, innerExpr$$6, arity$$10, innerExpr$$7, r$$14, t$$17, arity$$11, innerExpr$$8, r$$15;

        if (tupledArg$$6[1].tag === 3) {
          if (tupledArg$$6[1].fields[0].tag === 1) {
            $target$$69 = 0;
            arity$$9 = tupledArg$$6[1].fields[0].fields[1];
            innerExpr$$6 = tupledArg$$6[1].fields[0].fields[0];
          } else {
            $target$$69 = 3;
          }
        } else if (tupledArg$$6[1].tag === 9) {
          if (tupledArg$$6[1].fields[0].tag === 3) {
            if (tupledArg$$6[1].fields[0].fields[0].tag === 1) {
              if (tupledArg$$6[1].fields[1].tag === 7) {
                $target$$69 = 1;
                arity$$10 = tupledArg$$6[1].fields[0].fields[0].fields[1];
                innerExpr$$7 = tupledArg$$6[1].fields[0].fields[0].fields[0];
                r$$14 = tupledArg$$6[1].fields[3];
                t$$17 = tupledArg$$6[1].fields[2];
              } else {
                $target$$69 = 3;
              }
            } else {
              $target$$69 = 3;
            }
          } else {
            $target$$69 = 3;
          }
        } else if (tupledArg$$6[1].tag === 0) {
          if (tupledArg$$6[1].fields[0].tag === 9) {
            if (tupledArg$$6[1].fields[0].fields[0] != null) {
              if (tupledArg$$6[1].fields[0].fields[0].tag === 3) {
                if (tupledArg$$6[1].fields[0].fields[0].fields[0].tag === 1) {
                  $target$$69 = 2;
                  arity$$11 = tupledArg$$6[1].fields[0].fields[0].fields[0].fields[1];
                  innerExpr$$8 = tupledArg$$6[1].fields[0].fields[0].fields[0].fields[0];
                  r$$15 = tupledArg$$6[1].fields[0].fields[1];
                } else {
                  $target$$69 = 3;
                }
              } else {
                $target$$69 = 3;
              }
            } else {
              $target$$69 = 3;
            }
          } else {
            $target$$69 = 3;
          }
        } else {
          $target$$69 = 3;
        }

        switch ($target$$69) {
          case 0:
            {
              return [(0, _Types.L)([tupledArg$$6[0], innerExpr$$6], tupledArg$$7[0]), (0, _Map.add)(tupledArg$$6[0].Name, arity$$9, tupledArg$$7[1])];
            }

          case 1:
            {
              return [(0, _Types.L)([tupledArg$$6[0], new _AST.Expr(9, "Get", innerExpr$$7, new _AST.GetKind(7, "OptionValue"), t$$17, r$$14)], tupledArg$$7[0]), (0, _Map.add)(tupledArg$$6[0].Name, arity$$10, tupledArg$$7[1])];
            }

          case 2:
            {
              return [(0, _Types.L)([tupledArg$$6[0], new _AST.Expr(0, "Value", new _AST.ValueKind(9, "NewOption", innerExpr$$8, r$$15))], tupledArg$$7[0]), (0, _Map.add)(tupledArg$$6[0].Name, arity$$11, tupledArg$$7[1])];
            }

          case 3:
            {
              return [(0, _Types.L)([tupledArg$$6[0], tupledArg$$6[1]], tupledArg$$7[0]), tupledArg$$7[1]];
            }
        }
      }, identsAndValues, [(0, _Types.L)(), (0, _Map.empty)({
        Compare: _Util.comparePrimitives
      })]);
      return (0, _Map.isEmpty)(patternInput$$2[1]) ? new _AST.Expr(15, "Let", patternInput$$2[0], body$$20) : new _AST.Expr(15, "Let", patternInput$$2[0], Transforms$$$curryIdentsInBody(patternInput$$2[1], body$$20));
    } else {
      const e$$44 = _arg2$$1;
      return e$$44;
    }
  };
}

function Transforms$$$uncurryReceivedArgs(_arg1$$14, e$$45) {
  var $target$$70, arg$$5, body$$21, name$$5, args$$16, body$$23, name$$6, fieldType, r$$16, t$$18, e$$46;

  if (e$$45.tag === 5) {
    if (e$$45.fields[0].tag === 1) {
      $target$$70 = 1;
      args$$16 = e$$45.fields[0].fields[0];
      body$$23 = e$$45.fields[1];
      name$$6 = e$$45.fields[2];
    } else {
      $target$$70 = 0;
      arg$$5 = e$$45.fields[0].fields[0];
      body$$21 = e$$45.fields[1];
      name$$5 = e$$45.fields[2];
    }
  } else if (e$$45.tag === 9) {
    if (e$$45.fields[1].tag === 2) {
      $target$$70 = 2;
      fieldType = e$$45.fields[1].fields[2];
      r$$16 = e$$45.fields[3];
      t$$18 = e$$45.fields[2];
    } else if (e$$45.fields[1].tag === 3) {
      $target$$70 = 2;
      fieldType = e$$45.fields[1].fields[2];
      r$$16 = e$$45.fields[3];
      t$$18 = e$$45.fields[2];
    } else {
      $target$$70 = 3;
      e$$46 = e$$45;
    }
  } else {
    $target$$70 = 3;
    e$$46 = e$$45;
  }

  switch ($target$$70) {
    case 0:
      {
        const body$$22 = Transforms$$$uncurryIdentsAndReplaceInBody((0, _Types.L)(arg$$5, (0, _Types.L)()), body$$21);
        return new _AST.Expr(5, "Function", new _AST.FunctionKind(0, "Lambda", arg$$5), body$$22, name$$5);
      }

    case 1:
      {
        const body$$24 = Transforms$$$uncurryIdentsAndReplaceInBody(args$$16, body$$23);
        return new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", args$$16), body$$24, name$$6);
      }

    case 2:
      {
        const arity$$12 = Transforms$$$getLambdaTypeArity(fieldType) | 0;

        if (arity$$12 > 1) {
          return new _AST.Expr(3, "DelayedResolution", new _AST.DelayedResolutionKind(1, "Curry", e$$45, arity$$12), t$$18, r$$16);
        } else {
          return e$$45;
        }
      }

    case 3:
      {
        return e$$46;
      }
  }
}

function Transforms$$$uncurrySendingArgs(com$$3, e$$47) {
  const uncurryConsArgs = function uncurryConsArgs(args$$17, fields) {
    const argTypes$$4 = (0, _List.ofSeq)((0, _Seq.map)(function mapping$$8(fi) {
      return (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$3, (0, _Map.empty)({
        Compare: _Util.comparePrimitives
      }), (0, _Symbols.FSharpField$$get_FieldType)(fi));
    }, fields));
    return Transforms$$$uncurryArgs(com$$3, new _AST.SignatureKind(0, "Typed", argTypes$$4), args$$17);
  };

  var $target$$71, info$$9, kind$$21, r$$17, t$$19, args$$18, callee$$2, r$$18, t$$20, info$$11, macro$$1, r$$19, t$$21, args$$19, ent$$2, genArgs$$3, args$$21, ent$$3, genArgs$$4, uci$$1, e$$48, fieldName, fieldType$$1, r$$20, value$$9, e$$49;

  if (e$$47.tag === 8) {
    if (e$$47.fields[0].tag === 0) {
      $target$$71 = 0;
      info$$9 = e$$47.fields[0].fields[1];
      kind$$21 = e$$47.fields[0].fields[0];
      r$$17 = e$$47.fields[2];
      t$$19 = e$$47.fields[1];
    } else if (e$$47.fields[0].tag === 1) {
      $target$$71 = 1;
      args$$18 = e$$47.fields[0].fields[1];
      callee$$2 = e$$47.fields[0].fields[0];
      r$$18 = e$$47.fields[2];
      t$$20 = e$$47.fields[1];
    } else if (e$$47.fields[0].tag === 2) {
      if (e$$47.fields[0].fields[1] != null) {
        $target$$71 = 2;
        info$$11 = e$$47.fields[0].fields[1];
        macro$$1 = e$$47.fields[0].fields[0];
        r$$19 = e$$47.fields[2];
        t$$21 = e$$47.fields[1];
      } else {
        $target$$71 = 6;
        e$$49 = e$$47;
      }
    } else {
      $target$$71 = 6;
      e$$49 = e$$47;
    }
  } else if (e$$47.tag === 0) {
    if (e$$47.fields[0].tag === 13) {
      $target$$71 = 3;
      args$$19 = e$$47.fields[0].fields[0];
      ent$$2 = e$$47.fields[0].fields[1];
      genArgs$$3 = e$$47.fields[0].fields[2];
    } else if (e$$47.fields[0].tag === 14) {
      $target$$71 = 4;
      args$$21 = e$$47.fields[0].fields[0];
      ent$$3 = e$$47.fields[0].fields[2];
      genArgs$$4 = e$$47.fields[0].fields[3];
      uci$$1 = e$$47.fields[0].fields[1];
    } else {
      $target$$71 = 6;
      e$$49 = e$$47;
    }
  } else if (e$$47.tag === 16) {
    if (e$$47.fields[1].tag === 2) {
      $target$$71 = 5;
      e$$48 = e$$47.fields[0];
      fieldName = e$$47.fields[1].fields[0];
      fieldType$$1 = e$$47.fields[1].fields[1];
      r$$20 = e$$47.fields[3];
      value$$9 = e$$47.fields[2];
    } else {
      $target$$71 = 6;
      e$$49 = e$$47;
    }
  } else {
    $target$$71 = 6;
    e$$49 = e$$47;
  }

  switch ($target$$71) {
    case 0:
      {
        const info$$10 = new _AST.ArgInfo(info$$9.ThisArg, Transforms$$$uncurryArgs(com$$3, info$$9.SignatureArgTypes, info$$9.Args), info$$9.SignatureArgTypes, info$$9.Spread, info$$9.IsBaseOrSelfConstructorCall);
        return new _AST.Expr(8, "Operation", new _AST.OperationKind(0, "Call", kind$$21, info$$10), t$$19, r$$17);
      }

    case 1:
      {
        const activePatternResult69033 = (0, _Transforms.AST$$$$007CNestedLambdaType$007C_$007C)((0, _AST.Expr$$get_Type)(callee$$2));

        if (activePatternResult69033 != null) {
          return new _AST.Expr(8, "Operation", new _AST.OperationKind(1, "CurriedApply", callee$$2, Transforms$$$uncurryArgs(com$$3, new _AST.SignatureKind(0, "Typed", activePatternResult69033[0]), args$$18)), t$$20, r$$18);
        } else {
          return e$$47;
        }
      }

    case 2:
      {
        const info$$12 = new _AST.ArgInfo(info$$11.ThisArg, Transforms$$$uncurryArgs(com$$3, info$$11.SignatureArgTypes, info$$11.Args), info$$11.SignatureArgTypes, info$$11.Spread, info$$11.IsBaseOrSelfConstructorCall);
        return new _AST.Expr(8, "Operation", new _AST.OperationKind(2, "Emit", macro$$1, info$$12), t$$21, r$$19);
      }

    case 3:
      {
        const args$$20 = uncurryConsArgs(args$$19, (0, _Symbols.FSharpEntity$$get_FSharpFields)(ent$$2));
        return new _AST.Expr(0, "Value", new _AST.ValueKind(13, "NewRecord", args$$20, ent$$2, genArgs$$3));
      }

    case 4:
      {
        const args$$22 = uncurryConsArgs(args$$21, (0, _Symbols.FSharpUnionCase$$get_UnionCaseFields)(uci$$1));
        return new _AST.Expr(0, "Value", new _AST.ValueKind(14, "NewUnion", args$$22, uci$$1, ent$$3, genArgs$$4));
      }

    case 5:
      {
        const value$$10 = Transforms$$$uncurryArgs(com$$3, new _AST.SignatureKind(0, "Typed", (0, _Types.L)(fieldType$$1, (0, _Types.L)())), (0, _Types.L)(value$$9, (0, _Types.L)()));
        return new _AST.Expr(16, "Set", e$$48, new _AST.SetKind(2, "FieldSet", fieldName, fieldType$$1), (0, _List.head)(value$$10), r$$20);
      }

    case 6:
      {
        return e$$49;
      }
  }
}

function Transforms$$$uncurryApplications(com$$4, e$$50) {
  const uncurryApply = function uncurryApply(r$$21, t$$22, applied, args$$23, uncurriedArity) {
    const argsLen = (0, _List.length)(args$$23) | 0;

    if (uncurriedArity === argsLen) {
      const info$$13 = (0, _Transforms.AST$$$argInfo)(null, args$$23, new _AST.SignatureKind(1, "AutoUncurrying"));
      return (0, _Transforms.AST$$$staticCall)(r$$21, t$$22, info$$13, applied);
    } else {
      return (0, _Replacements.partialApplyAtRuntime)(t$$22, uncurriedArity - argsLen, applied, args$$23);
    }
  };

  const activePatternResult69044 = (0, _Transforms.AST$$$$007CNestedApply$007C_$007C)(e$$50);

  if (activePatternResult69044 != null) {
    const applied$$2 = visitFromOutsideIn(function (e$$51) {
      return Transforms$$$uncurryApplications(com$$4, e$$51);
    }, activePatternResult69044[0]);
    const args$$25 = (0, _List.map)(function mapping$$9(e$$53) {
      return visitFromOutsideIn(function f$$9(e$$52) {
        return Transforms$$$uncurryApplications(com$$4, e$$52);
      }, e$$53);
    }, activePatternResult69044[1]);
    var $target$$72, applied$$3, uncurriedArity$$1, applied$$4, r2, t2, uncurriedArity$$2;

    if (applied$$2.tag === 3) {
      if (applied$$2.fields[0].tag === 1) {
        $target$$72 = 0;
        applied$$3 = applied$$2.fields[0].fields[0];
        uncurriedArity$$1 = applied$$2.fields[0].fields[1];
      } else {
        $target$$72 = 2;
      }
    } else if (applied$$2.tag === 9) {
      if (applied$$2.fields[0].tag === 3) {
        if (applied$$2.fields[0].fields[0].tag === 1) {
          if (applied$$2.fields[1].tag === 7) {
            $target$$72 = 1;
            applied$$4 = applied$$2.fields[0].fields[0].fields[0];
            r2 = applied$$2.fields[3];
            t2 = applied$$2.fields[2];
            uncurriedArity$$2 = applied$$2.fields[0].fields[0].fields[1];
          } else {
            $target$$72 = 2;
          }
        } else {
          $target$$72 = 2;
        }
      } else {
        $target$$72 = 2;
      }
    } else {
      $target$$72 = 2;
    }

    switch ($target$$72) {
      case 0:
        {
          return uncurryApply(activePatternResult69044[3], activePatternResult69044[2], applied$$3, args$$25, uncurriedArity$$1);
        }

      case 1:
        {
          return uncurryApply(activePatternResult69044[3], activePatternResult69044[2], new _AST.Expr(9, "Get", applied$$4, new _AST.GetKind(7, "OptionValue"), t2, r2), args$$25, uncurriedArity$$2);
        }

      case 2:
        {
          return new _AST.Expr(8, "Operation", new _AST.OperationKind(1, "CurriedApply", applied$$2, args$$25), activePatternResult69044[2], activePatternResult69044[3]);
        }
    }
  } else {
    return null;
  }
}

function Transforms$$$unwrapFunctions(_arg1$$15, e$$54) {
  const notReferencedInExpr = function notReferencedInExpr(args$$26, e$$55) {
    return !(0, _List.exists)(function predicate$$2(a$$1) {
      const identName$$3 = a$$1.Name;
      return deepExists(function f$$10(_arg2$$2) {
        if (_arg2$$2.tag === 1) {
          const id$$4 = _arg2$$2.fields[0];
          return id$$4.Name === identName$$3;
        } else {
          return false;
        }
      }, e$$55);
    }, args$$26);
  };

  const sameArgs = function sameArgs(args1$$2, args2$$5) {
    if ((0, _Prelude.List$$$sameLength)(args1$$2, args2$$5)) {
      return (0, _List.forAll2)(function (a1, _arg3) {
        if (_arg3.tag === 1) {
          const a2 = _arg3.fields[0];
          return a1.Name === a2.Name;
        } else {
          return false;
        }
      }, args1$$2, args2$$5);
    } else {
      return false;
    }
  };

  const unwrapFunctionsInner = function unwrapFunctionsInner(_arg4) {
    var info$$14, funcExpr, args$$27;
    var $target$$73, args$$28, funcExpr$$1, info$$15;
    const activePatternResult69056 = Transforms$$$$007CLambdaOrDelegate$007C_$007C(_arg4);

    if (activePatternResult69056 != null) {
      if (activePatternResult69056[1].tag === 8) {
        if (activePatternResult69056[1].fields[0].tag === 0) {
          if (activePatternResult69056[1].fields[0].fields[0].tag === 1) {
            if (info$$14 = activePatternResult69056[1].fields[0].fields[1], (funcExpr = activePatternResult69056[1].fields[0].fields[0].fields[0], (args$$27 = activePatternResult69056[0], ((info$$14.ThisArg == null ? !(0, _Option.defaultArg)((0, _Option.defaultArg)((0, _List.tryHead)(args$$27), null, function mapping$$10(x$$1) {
              return (0, _AST.Ident$$get_IsThisArgDeclaration)(x$$1);
            }), false) : false) ? sameArgs(args$$27, info$$14.Args) : false) ? notReferencedInExpr(args$$27, funcExpr) : false))) {
              $target$$73 = 0;
              args$$28 = activePatternResult69056[0];
              funcExpr$$1 = activePatternResult69056[1].fields[0].fields[0].fields[0];
              info$$15 = activePatternResult69056[1].fields[0].fields[1];
            } else {
              $target$$73 = 1;
            }
          } else {
            $target$$73 = 1;
          }
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
          return funcExpr$$1;
        }

      case 1:
        {
          const e$$56 = _arg4;
          return e$$56;
        }
    }
  };

  if (e$$54.tag === 5) {
    const name$$7 = e$$54.fields[2];
    const kind$$22 = e$$54.fields[0];
    const body$$25 = e$$54.fields[1];
    return new _AST.Expr(5, "Function", kind$$22, visitFromInsideOut(unwrapFunctionsInner, body$$25), name$$7);
  } else {
    const e$$57 = e$$54;
    return visitFromInsideOut(unwrapFunctionsInner, e$$57);
  }
}

function optimizations() {
  return (0, _Types.L)(function (com$$5) {
    return function (e$$58) {
      return visitFromInsideOut(function (e$$59) {
        return Transforms$$$bindingBetaReduction(com$$5, e$$59);
      }, e$$58);
    };
  }, (0, _Types.L)(function (com$$6) {
    return function (e$$60) {
      return visitFromInsideOut(function (e$$61) {
        return Transforms$$$lambdaBetaReduction(com$$6, e$$61);
      }, e$$60);
    };
  }, (0, _Types.L)(function (com$$7) {
    return function (e$$62) {
      return visitFromInsideOut(function (arg10$$3) {
        return Transforms$$$tupleBetaReduction(com$$7)(arg10$$3);
      }, e$$62);
    };
  }, (0, _Types.L)(function (com$$8) {
    return function (e$$63) {
      return visitFromInsideOut(function (e$$64) {
        return Transforms$$$uncurryReceivedArgs(com$$8, e$$64);
      }, e$$63);
    };
  }, (0, _Types.L)(function (com$$9) {
    return function (e$$65) {
      return visitFromInsideOut(function (e$$66) {
        return Transforms$$$uncurryInnerFunctions(com$$9, e$$66);
      }, e$$65);
    };
  }, (0, _Types.L)(function (com$$10) {
    return function (e$$67) {
      return visitFromInsideOut(function (arg10$$4) {
        return Transforms$$$propagateUncurryingThroughLets(com$$10)(arg10$$4);
      }, e$$67);
    };
  }, (0, _Types.L)(function (com$$11) {
    return function (e$$68) {
      return visitFromInsideOut(function (e$$69) {
        return Transforms$$$uncurrySendingArgs(com$$11, e$$69);
      }, e$$68);
    };
  }, (0, _Types.L)(function (com$$12) {
    return function (e$$70) {
      return visitFromOutsideIn(function (e$$71) {
        return Transforms$$$uncurryApplications(com$$12, e$$71);
      }, e$$70);
    };
  }, (0, _Types.L)(function (arg00$0040) {
    return function (e$$72) {
      return Transforms$$$unwrapFunctions(arg00$0040, e$$72);
    };
  }, (0, _Types.L)())))))))));
}

function optimizeExpr(com$$13, e$$73) {
  return (0, _List.fold)(function ($arg$$25, $arg$$26) {
    return function (e$$74) {
      return function (f$$11) {
        return f$$11(com$$13, e$$74);
      };
    }($arg$$25)((0, _Util.uncurry)(2, $arg$$26));
  }, e$$73, optimizations());
}

function optimizeDeclaration(com$$14, _arg1$$16) {
  switch (_arg1$$16.tag) {
    case 1:
      {
        const value$$14 = _arg1$$16.fields[0];
        const info$$16 = _arg1$$16.fields[1];
        return new _AST.Declaration(1, "ValueDeclaration", optimizeExpr(com$$14, value$$14), info$$16);
      }

    case 3:
      {
        const kind$$23 = _arg1$$16.fields[0];
        let kind$$25;

        if (kind$$23.tag === 0) {
          const info$$17 = kind$$23.fields[0];
          let patternInput$$3;

          const _arg2$$3 = optimizeExpr(com$$14, new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", info$$17.Arguments), info$$17.Body, null));

          var $target$$74, args$$29, body$$26;

          if (_arg2$$3.tag === 5) {
            if (_arg2$$3.fields[0].tag === 1) {
              $target$$74 = 0;
              args$$29 = _arg2$$3.fields[0].fields[0];
              body$$26 = _arg2$$3.fields[1];
            } else {
              $target$$74 = 1;
            }
          } else {
            $target$$74 = 1;
          }

          switch ($target$$74) {
            case 0:
              {
                patternInput$$3 = [args$$29, body$$26];
                break;
              }

            case 1:
              {
                (0, _Transforms.Log$$$addWarning)(com$$14, (0, _Types.L)(), null, "Unexpected result when optimizing ClassImplicitConstructor, please report");
                patternInput$$3 = [info$$17.Arguments, info$$17.Body];
                break;
              }
          }

          kind$$25 = new _AST.ConstructorKind(0, "ClassImplicitConstructor", new _AST.ClassImplicitConstructorInfo(info$$17.Name, info$$17.Entity, info$$17.EntityName, info$$17.IsEntityPublic, info$$17.IsConstructorPublic, info$$17.HasSpread, info$$17.Base, patternInput$$3[0], info$$17.BoundConstructorThis, patternInput$$3[1]));
        } else {
          const kind$$24 = kind$$23;
          kind$$25 = kind$$24;
        }

        return new _AST.Declaration(3, "ConstructorDeclaration", kind$$25);
      }

    case 2:
      {
        const info$$18 = _arg1$$16.fields[2];
        const body$$28 = _arg1$$16.fields[1];
        const args$$31 = _arg1$$16.fields[0];
        return new _AST.Declaration(2, "AttachedMemberDeclaration", args$$31, optimizeExpr(com$$14, body$$28), info$$18);
      }

    default:
      {
        const expr$$13 = _arg1$$16.fields[0];
        return new _AST.Declaration(0, "ActionDeclaration", optimizeExpr(com$$14, expr$$13));
      }
  }
}

function optimizeFile(com$$15, file) {
  const newDecls = (0, _List.map)(function (_arg1$$17) {
    return optimizeDeclaration(com$$15, _arg1$$17);
  }, (0, _AST.File$$get_Declarations)(file));
  return (0, _AST.File$$$$002Ector$$788BC77C)((0, _AST.File$$get_SourcePath)(file), newDecls, (0, _AST.File$$get_UsedVarNames)(file), (0, _AST.File$$get_Dependencies)(file));
}