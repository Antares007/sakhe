"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pattern$$get_Range = Pattern$$get_Range;
exports.TypedMatchClause$$get_GuardExpr = TypedMatchClause$$get_GuardExpr;
exports.TypedMatchClause$$get_Pattern = TypedMatchClause$$get_Pattern;
exports.TypedMatchClause$$get_Range = TypedMatchClause$$get_Range;
exports.TypedMatchClause$$get_Target = TypedMatchClause$$get_Target;
exports.TypedMatchClause$$get_BoundVals = TypedMatchClause$$get_BoundVals;
exports.BindSubExprOfInput = BindSubExprOfInput;
exports.GetSubExprOfInput = GetSubExprOfInput;
exports.pathEq = pathEq;
exports.ilFieldToTastConst = ilFieldToTastConst;
exports.RefuteDiscrimSet = RefuteDiscrimSet;
exports.CombineRefutations = CombineRefutations;
exports.ShowCounterExample = ShowCounterExample;
exports.isMemOfActives = isMemOfActives;
exports.lookupActive = lookupActive;
exports.removeActive = removeActive;
exports.getDiscrimOfPattern = getDiscrimOfPattern;
exports.constOfDiscrim = constOfDiscrim;
exports.constOfCase = constOfCase;
exports.discrimsEq = discrimsEq;
exports.isDiscrimSubsumedBy = isDiscrimSubsumedBy;
exports.chooseSimultaneousEdgeSet = chooseSimultaneousEdgeSet;
exports.canCompactConstantClass = canCompactConstantClass;
exports.discrimsHaveSameSimultaneousClass = discrimsHaveSameSimultaneousClass;
exports.ChooseInvestigationPointLeftToRight = ChooseInvestigationPointLeftToRight;
exports.BuildSwitch = BuildSwitch;
exports.mkFrontiers = mkFrontiers;
exports.getRuleIndex = getRuleIndex;
exports.isPatternPartial = isPatternPartial;
exports.erasePartialPatterns = erasePartialPatterns;
exports.erasePartials = erasePartials;
exports.getDiscrim = getDiscrim;
exports.CompilePatternBasic = CompilePatternBasic;
exports.isPartialOrWhenClause = isPartialOrWhenClause;
exports.CompilePattern = CompilePattern;
exports.EdgeDiscrim = exports.InvestigationPoint = exports.Frontier = exports.Active = exports.CannotRefute = exports.otherSubtypeText = exports.notNullText = exports.RefutedSet = exports.Path = exports.SubExprOfInput = exports.debug = exports.TypedMatchClause = exports.PatternValBinding = exports.Pattern = exports.ActionOnFailure = exports.EnumMatchIncomplete = exports.RuleNeverMatched = exports.MatchIncomplete = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _TastOps = require("./TastOps");

var _tast = require("./tast");

var _TypeRelations = require("./TypeRelations");

var _List = require("../fable-core.2.0.3/List");

var _Long = require("../fable-core.2.0.3/Long");

var _Set = require("../fable-core.2.0.3/Set");

var _Seq = require("../fable-core.2.0.3/Seq");

var _il = require("../absil/il");

var _Option = require("../fable-core.2.0.3/Option");

var _ast = require("./ast");

var _TcGlobals = require("./TcGlobals");

var _Util = require("../fable-core.2.0.3/Util");

var _ErrorLogger = require("./ErrorLogger");

var _String = require("../fable-core.2.0.3/String");

var _lib = require("./lib");

var _ildiag = require("../absil/ildiag");

var _layout = require("./layout");

var _NicePrint = require("./NicePrint");

var _illib = require("../absil/illib");

var _range = require("./range");

var _PrettyNaming = require("./PrettyNaming");

var _Array = require("../fable-core.2.0.3/Array");

var _FSComp = require("../codegen/FSComp");

var _FSharp = require("../fable-core.2.0.3/FSharp.Collections");

const MatchIncomplete = (0, _Types.declare)(function MatchIncomplete(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.MatchIncomplete = MatchIncomplete;
const RuleNeverMatched = (0, _Types.declare)(function RuleNeverMatched(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.RuleNeverMatched = RuleNeverMatched;
const EnumMatchIncomplete = (0, _Types.declare)(function EnumMatchIncomplete(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.EnumMatchIncomplete = EnumMatchIncomplete;
const ActionOnFailure = (0, _Types.declare)(function ActionOnFailure(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ActionOnFailure = ActionOnFailure;
const Pattern = (0, _Types.declare)(function Pattern(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Pattern = Pattern;
const PatternValBinding = (0, _Types.declare)(function PatternValBinding(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.PatternValBinding = PatternValBinding;
const TypedMatchClause = (0, _Types.declare)(function TypedMatchClause(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TypedMatchClause = TypedMatchClause;

function Pattern$$get_Range(this$) {
  switch (this$.tag) {
    case 1:
      {
        const m$$1 = this$.fields[0];
        return m$$1;
      }

    case 2:
      {
        const m$$2 = this$.fields[2];
        return m$$2;
      }

    case 3:
      {
        const m$$3 = this$.fields[1];
        return m$$3;
      }

    case 4:
      {
        const m$$4 = this$.fields[1];
        return m$$4;
      }

    case 5:
      {
        const m$$5 = this$.fields[2];
        return m$$5;
      }

    case 6:
      {
        const m$$6 = this$.fields[3];
        return m$$6;
      }

    case 7:
      {
        const m$$7 = this$.fields[2];
        return m$$7;
      }

    case 8:
      {
        const m$$8 = this$.fields[3];
        return m$$8;
      }

    case 9:
      {
        const m$$9 = this$.fields[2];
        return m$$9;
      }

    case 10:
      {
        const m$$10 = this$.fields[3];
        return m$$10;
      }

    case 11:
      {
        const m$$11 = this$.fields[2];
        return m$$11;
      }

    case 12:
      {
        const m$$12 = this$.fields[0];
        return m$$12;
      }

    case 13:
      {
        const m$$13 = this$.fields[3];
        return m$$13;
      }

    default:
      {
        const m = this$.fields[1];
        return m;
      }
  }
}

function TypedMatchClause$$get_GuardExpr(c) {
  const whenOpt = c.fields[1];
  return whenOpt;
}

function TypedMatchClause$$get_Pattern(c$$1) {
  const p = c$$1.fields[0];
  return p;
}

function TypedMatchClause$$get_Range(c$$2) {
  const m$$14 = c$$2.fields[3];
  return m$$14;
}

function TypedMatchClause$$get_Target(c$$3) {
  const tg = c$$3.fields[2];
  return tg;
}

function TypedMatchClause$$get_BoundVals(c$$4) {
  const vs = c$$4.fields[2].fields[0];
  const _whenOpt = c$$4.fields[1];
  const _p = c$$4.fields[0];
  const _m = c$$4.fields[3];
  return vs;
}

const debug = false;
exports.debug = debug;
const SubExprOfInput = (0, _Types.declare)(function SubExprOfInput(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SubExprOfInput = SubExprOfInput;

function BindSubExprOfInput(g, amap, gtps, _arg2, m$$15, _arg1) {
  const v = _arg2.fields[0];
  const tyscheme = _arg2.fields[1];
  const ve2 = _arg1.fields[1][0];
  const v2 = _arg1.fields[1][1];
  const accessf = _arg1.fields[0];
  let e$0027;

  if (gtps.tail == null) {
    e$0027 = accessf((0, _Types.L)(), ve2);
  } else {
    let tyargs;
    const someSolved = new _Types.FSharpRef(false);

    const freezeVar = function freezeVar(gtp) {
      if ((0, _TastOps.isBeingGeneralized)(gtp, tyscheme)) {
        return (0, _tast.mkTyparTy)(gtp);
      } else {
        someSolved.contents = true;
        return (0, _TypeRelations.ChooseTyparSolution)(g, amap, gtp);
      }
    };

    const solutions = (0, _List.map)(freezeVar, gtps);
    tyargs = someSolved.contents ? (0, _TypeRelations.IterativelySubstituteTyparSolutions)(g, gtps, solutions) : solutions;
    const tinst = (0, _TastOps.mkTyparInst)(gtps, tyargs);
    e$0027 = accessf(tinst, (0, _TastOps.mkApps)(g, [ve2, (0, _tast.Val$$get_Type)(v2)], (0, _Types.L)(tyargs, (0, _Types.L)()), (0, _Types.L)(), (0, _tast.Val$$get_Range)(v2)));
  }

  return [v, (0, _TastOps.mkGenericBindRhs)(g, m$$15, (0, _Types.L)(), tyscheme, e$0027)];
}

function GetSubExprOfInput(g$$1, gtps$$1, tyargs$$1, tinst$$1, _arg1$$1) {
  const ve2$$1 = _arg1$$1.fields[1][0];
  const v2$$1 = _arg1$$1.fields[1][1];
  const accessf$$1 = _arg1$$1.fields[0];

  if (gtps$$1.tail == null) {
    return accessf$$1((0, _Types.L)(), ve2$$1);
  } else {
    return accessf$$1(tinst$$1, (0, _TastOps.mkApps)(g$$1, [ve2$$1, (0, _tast.Val$$get_Type)(v2$$1)], (0, _Types.L)(tyargs$$1, (0, _Types.L)()), (0, _Types.L)(), (0, _tast.Val$$get_Range)(v2$$1)));
  }
}

const Path = (0, _Types.declare)(function Path(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Path = Path;

function pathEq(p1, p2) {
  pathEq: while (true) {
    const matchValue = [p1, p2];
    var $target$$10, n1, n2, p1$$1, p2$$1, n1$$1, n2$$1, p1$$2, p2$$2, n1$$2, n2$$2, p1$$3, p2$$3, n1$$3, n2$$3, p1$$4, p2$$4, n1$$4, n2$$4, p1$$5, p2$$5, n1$$5, n2$$5, p1$$6, p2$$6, n1$$6, n2$$6, p1$$7, p2$$7;

    if (matchValue[0].tag === 1) {
      if (matchValue[1].tag === 1) {
        $target$$10 = 1;
        n1$$1 = matchValue[0].fields[1];
        n2$$1 = matchValue[1].fields[1];
        p1$$2 = matchValue[0].fields[0];
        p2$$2 = matchValue[1].fields[0];
      } else {
        $target$$10 = 8;
      }
    } else if (matchValue[0].tag === 2) {
      if (matchValue[1].tag === 2) {
        $target$$10 = 2;
        n1$$2 = matchValue[0].fields[2];
        n2$$2 = matchValue[1].fields[2];
        p1$$3 = matchValue[0].fields[0];
        p2$$3 = matchValue[1].fields[0];
      } else {
        $target$$10 = 8;
      }
    } else if (matchValue[0].tag === 3) {
      if (matchValue[1].tag === 3) {
        $target$$10 = 3;
        n1$$3 = matchValue[0].fields[3];
        n2$$3 = matchValue[1].fields[3];
        p1$$4 = matchValue[0].fields[0];
        p2$$4 = matchValue[1].fields[0];
      } else {
        $target$$10 = 8;
      }
    } else if (matchValue[0].tag === 4) {
      if (matchValue[1].tag === 4) {
        $target$$10 = 4;
        n1$$4 = matchValue[0].fields[3];
        n2$$4 = matchValue[1].fields[3];
        p1$$5 = matchValue[0].fields[0];
        p2$$5 = matchValue[1].fields[0];
      } else {
        $target$$10 = 8;
      }
    } else if (matchValue[0].tag === 5) {
      if (matchValue[1].tag === 5) {
        $target$$10 = 5;
        n1$$5 = matchValue[0].fields[3];
        n2$$5 = matchValue[1].fields[3];
        p1$$6 = matchValue[0].fields[0];
        p2$$6 = matchValue[1].fields[0];
      } else {
        $target$$10 = 8;
      }
    } else if (matchValue[0].tag === 6) {
      if (matchValue[1].tag === 6) {
        $target$$10 = 6;
        n1$$6 = matchValue[0].fields[2];
        n2$$6 = matchValue[1].fields[2];
        p1$$7 = matchValue[0].fields[0];
        p2$$7 = matchValue[1].fields[0];
      } else {
        $target$$10 = 8;
      }
    } else if (matchValue[0].tag === 7) {
      if (matchValue[1].tag === 7) {
        $target$$10 = 7;
      } else {
        $target$$10 = 8;
      }
    } else if (matchValue[1].tag === 0) {
      $target$$10 = 0;
      n1 = matchValue[0].fields[1];
      n2 = matchValue[1].fields[1];
      p1$$1 = matchValue[0].fields[0];
      p2$$1 = matchValue[1].fields[0];
    } else {
      $target$$10 = 8;
    }

    switch ($target$$10) {
      case 0:
        {
          if ((0, _Long.equals)(n1, n2)) {
            p1 = p1$$1;
            p2 = p2$$1;
            continue pathEq;
          } else {
            return false;
          }
        }

      case 1:
        {
          if (n1$$1 === n2$$1) {
            p1 = p1$$2;
            p2 = p2$$2;
            continue pathEq;
          } else {
            return false;
          }
        }

      case 2:
        {
          if (n1$$2 === n2$$2) {
            p1 = p1$$3;
            p2 = p2$$3;
            continue pathEq;
          } else {
            return false;
          }
        }

      case 3:
        {
          if (n1$$3 === n2$$3) {
            p1 = p1$$4;
            p2 = p2$$4;
            continue pathEq;
          } else {
            return false;
          }
        }

      case 4:
        {
          if (n1$$4 === n2$$4) {
            p1 = p1$$5;
            p2 = p2$$5;
            continue pathEq;
          } else {
            return false;
          }
        }

      case 5:
        {
          if (n1$$5 === n2$$5) {
            p1 = p1$$6;
            p2 = p2$$6;
            continue pathEq;
          } else {
            return false;
          }
        }

      case 6:
        {
          if (n1$$6 === n2$$6) {
            p1 = p1$$7;
            p2 = p2$$7;
            continue pathEq;
          } else {
            return false;
          }
        }

      case 7:
        {
          return true;
        }

      case 8:
        {
          return false;
        }
    }
  }
}

const RefutedSet = (0, _Types.declare)(function RefutedSet(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.RefutedSet = RefutedSet;
const notNullText = "some-non-null-value";
exports.notNullText = notNullText;
const otherSubtypeText = "some-other-subtype";
exports.otherSubtypeText = otherSubtypeText;

function ilFieldToTastConst(lit) {
  switch (lit.tag) {
    case 13:
      {
        return new _tast.Const(17, "Zero");
      }

    case 1:
      {
        const b = lit.fields[0];
        return new _tast.Const(0, "Bool", b);
      }

    case 2:
      {
        const c$$5 = lit.fields[0];
        return new _tast.Const(13, "Char", String.fromCharCode(~~c$$5));
      }

    case 3:
      {
        const x = lit.fields[0] | 0;
        return new _tast.Const(1, "SByte", x);
      }

    case 4:
      {
        const x$$1 = lit.fields[0] | 0;
        return new _tast.Const(3, "Int16", x$$1);
      }

    case 5:
      {
        const x$$2 = lit.fields[0] | 0;
        return new _tast.Const(5, "Int32", x$$2);
      }

    case 6:
      {
        const x$$3 = lit.fields[0];
        return new _tast.Const(7, "Int64", x$$3);
      }

    case 7:
      {
        const x$$4 = lit.fields[0];
        return new _tast.Const(2, "Byte", x$$4);
      }

    case 8:
      {
        const x$$5 = lit.fields[0];
        return new _tast.Const(4, "UInt16", x$$5);
      }

    case 9:
      {
        const x$$6 = lit.fields[0];
        return new _tast.Const(6, "UInt32", x$$6);
      }

    case 10:
      {
        const x$$7 = lit.fields[0];
        return new _tast.Const(8, "UInt64", x$$7);
      }

    case 11:
      {
        const f = lit.fields[0];
        return new _tast.Const(11, "Single", f);
      }

    case 12:
      {
        const f$$1 = lit.fields[0];
        return new _tast.Const(12, "Double", f$$1);
      }

    default:
      {
        const s = lit.fields[0];
        return new _tast.Const(14, "String", s);
      }
  }
}

const CannotRefute = (0, _Types.declare)(function CannotRefute() {}, _Types.FSharpException);
exports.CannotRefute = CannotRefute;

function RefuteDiscrimSet(g$$2, m$$16, path, discrims) {
  const mkUnknown = function mkUnknown(ty) {
    return (0, _TastOps.mkCompGenLocal)(m$$16, "_", ty)[1];
  };

  const go = function go(path$$1) {
    return function (tm) {
      switch (path$$1.tag) {
        case 1:
          {
            const p$$1 = path$$1.fields[0];

            const _j = path$$1.fields[1] | 0;

            return go(p$$1)(tm);
          }

        case 2:
          {
            const tys = path$$1.fields[1];
            const p$$2 = path$$1.fields[0];
            const j = path$$1.fields[2] | 0;
            const patternInput = mkOneKnown(tm)(j)(tys);
            return go(p$$2)(function (_arg1$$2) {
              return [(0, _TastOps.mkRefTupled)(g$$2, m$$16, patternInput[0], tys), patternInput[1]];
            });
          }

        case 3:
          {
            const tinst$$2 = path$$1.fields[2];
            const tcref = path$$1.fields[1];
            const p$$3 = path$$1.fields[0];
            const j$$1 = path$$1.fields[3] | 0;
            const patternInput$$1 = mkOneKnown(tm)(j$$1)((0, _TastOps.actualTysOfInstanceRecdFields)((0, _TastOps.mkTyconRefInst)(tcref, tinst$$2), tcref));
            return go(p$$3)(function (_arg2$$1) {
              return [new _tast.Expr(11, "Op", new _tast.TOp(10, "Recd", new _tast.RecordConstructionInfo(1, "RecdExpr"), tcref), tinst$$2, patternInput$$1[0], m$$16), patternInput$$1[1]];
            });
          }

        case 4:
          {
            const ucref = path$$1.fields[1];
            const tinst$$3 = path$$1.fields[2];
            const p$$4 = path$$1.fields[0];
            const j$$2 = path$$1.fields[3] | 0;
            const patternInput$$2 = mkOneKnown(tm)(j$$2)((0, _TastOps.actualTysOfUnionCaseFields)((0, _TastOps.mkTyconRefInst)((0, _tast.UnionCaseRef$$get_TyconRef)(ucref), tinst$$3), ucref));
            return go(p$$4)(function (_arg3) {
              return [new _tast.Expr(11, "Op", new _tast.TOp(0, "UnionCase", ucref), tinst$$3, patternInput$$2[0], m$$16), patternInput$$2[1]];
            });
          }

        case 5:
          {
            const ty$$1 = path$$1.fields[1];
            const p$$5 = path$$1.fields[0];
            const n = path$$1.fields[3] | 0;
            const len = path$$1.fields[2] | 0;
            const patternInput$$3 = mkOneKnown(tm)(n)((0, _List.replicate)(len, ty$$1));
            return go(p$$5)(function (_arg4) {
              return [new _tast.Expr(11, "Op", new _tast.TOp(3, "Array"), (0, _Types.L)(ty$$1, (0, _Types.L)()), patternInput$$3[0], m$$16), patternInput$$3[1]];
            });
          }

        case 6:
          {
            const p$$6 = path$$1.fields[0];
            const n$$1 = path$$1.fields[2] | 0;
            const ecref = path$$1.fields[1];
            const patternInput$$4 = mkOneKnown(tm)(n$$1)((0, _TastOps.recdFieldTysOfExnDefRef)(ecref));
            return go(p$$6)(function (_arg5) {
              return [new _tast.Expr(11, "Op", new _tast.TOp(1, "ExnConstr", ecref), (0, _Types.L)(), patternInput$$4[0], m$$16), patternInput$$4[1]];
            });
          }

        case 7:
          {
            const ty$$2 = path$$1.fields[0];
            return tm(ty$$2);
          }

        default:
          {
            throw new CannotRefute();
          }
      }
    };
  };

  const mkOneKnown = function mkOneKnown(tm$$1) {
    return function (n$$2) {
      return function (tys$$1) {
        const flds$$4 = (0, _List.mapIndexed)(function (i, ty$$3) {
          return i === n$$2 ? tm$$1(ty$$3) : [mkUnknown(ty$$3), false];
        }, tys$$1);
        return [(0, _List.map)(function (tuple) {
          return tuple[0];
        }, flds$$4), (0, _List.fold)(function (acc, tupledArg) {
          return tupledArg[1] ? true : acc;
        }, false, flds$$4)];
      };
    };
  };

  const mkUnknowns = function mkUnknowns(tys$$2) {
    return (0, _List.map)(function (x$$8) {
      return mkUnknown(x$$8);
    }, tys$$2);
  };

  const tm$$2 = function tm$$2(ty$$4) {
    var tcref$$1;
    var $target$$12, c$$6, rest, rest$$1, tinst$$4, ucref1, n$$3, ty$$5;

    if (discrims.tail != null) {
      if (discrims.head.tag === 3) {
        if (discrims.tail.tail == null) {
          $target$$12 = 0;
        } else {
          $target$$12 = 5;
        }
      } else if (discrims.head.tag === 4) {
        if (discrims.tail.tail == null) {
          $target$$12 = 1;
        } else {
          $target$$12 = 5;
        }
      } else if (discrims.head.tag === 2) {
        $target$$12 = 2;
        c$$6 = discrims.head.fields[0];
        rest = discrims.tail;
      } else if (discrims.head.tag === 0) {
        $target$$12 = 3;
        rest$$1 = discrims.tail;
        tinst$$4 = discrims.head.fields[1];
        ucref1 = discrims.head.fields[0];
      } else if (discrims.head.tag === 1) {
        if (discrims.tail.tail == null) {
          $target$$12 = 4;
          n$$3 = discrims.head.fields[0];
          ty$$5 = discrims.head.fields[1];
        } else {
          $target$$12 = 5;
        }
      } else {
        $target$$12 = 5;
      }
    } else {
      $target$$12 = 5;
    }

    switch ($target$$12) {
      case 0:
        {
          return [(0, _TastOps.mkCompGenLocal)(m$$16, notNullText, ty$$4)[1], false];
        }

      case 1:
        {
          return [(0, _TastOps.mkCompGenLocal)(m$$16, otherSubtypeText, ty$$4)[1], false];
        }

      case 2:
        {
          const consts = (0, _Set.ofList)((0, _Types.L)(c$$6, (0, _List.choose)(function (_arg1$$3) {
            if (_arg1$$3.tag === 2) {
              const c$$7 = _arg1$$3.fields[0];
              return c$$7;
            } else {
              return null;
            }
          }, rest)), {
            Compare($x$$1, $y$$2) {
              return $x$$1.CompareTo($y$$2);
            }

          });
          const c$0027 = (0, _Seq.tryFind)(function (c$$8) {
            return !(0, _Set.FSharpSet$$Contains$$2B595)(consts, c$$8);
          }, c$$6.tag === 0 ? (0, _Seq.map)(function mapping(v$$1) {
            return new _tast.Const(0, "Bool", v$$1);
          }, [true, false]) : c$$6.tag === 1 ? (0, _Seq.map)(function mapping$$1(v$$2) {
            return new _tast.Const(1, "SByte", v$$2);
          }, (0, _Seq.append)((0, _Seq.rangeNumber)(0, 1, 127), (0, _Seq.rangeNumber)(-128, 1, 0))) : c$$6.tag === 3 ? (0, _Seq.map)(function mapping$$2(v$$3) {
            return new _tast.Const(3, "Int16", v$$3);
          }, (0, _Seq.append)((0, _Seq.rangeNumber)(0, 1, 32767), (0, _Seq.rangeNumber)(-32768, 1, 0))) : c$$6.tag === 5 ? (0, _Seq.map)(function mapping$$3(v$$4) {
            return new _tast.Const(5, "Int32", v$$4);
          }, (0, _Seq.append)((0, _Seq.rangeNumber)(0, 1, 2147483647), (0, _Seq.rangeNumber)(-2147483648, 1, 0))) : c$$6.tag === 7 ? (0, _Seq.map)(function mapping$$4(v$$5) {
            return new _tast.Const(7, "Int64", v$$5);
          }, (0, _Seq.append)((0, _Seq.rangeLong)((0, _Long.fromBits)(0, 0, false), (0, _Long.fromInt)(1), (0, _Long.fromBits)(4294967295, 2147483647, false), false), (0, _Seq.rangeLong)((0, _Long.fromBits)(0, 2147483648, false), (0, _Long.fromInt)(1), (0, _Long.fromBits)(0, 0, false), false))) : c$$6.tag === 9 ? (0, _Seq.map)(function mapping$$5(v$$6) {
            return new _tast.Const(9, "IntPtr", v$$6);
          }, (0, _Seq.append)((0, _Seq.rangeLong)((0, _Long.fromBits)(0, 0, false), (0, _Long.fromInt)(1), (0, _Long.fromBits)(4294967295, 2147483647, false), false), (0, _Seq.rangeLong)((0, _Long.fromBits)(0, 2147483648, false), (0, _Long.fromInt)(1), (0, _Long.fromBits)(0, 0, false), false))) : c$$6.tag === 2 ? (0, _Seq.map)(function mapping$$6(v$$7) {
            return new _tast.Const(2, "Byte", v$$7);
          }, (0, _Seq.rangeNumber)(0, 1, 255)) : c$$6.tag === 4 ? (0, _Seq.map)(function mapping$$7(v$$8) {
            return new _tast.Const(4, "UInt16", v$$8);
          }, (0, _Seq.rangeNumber)(0, 1, 65535)) : c$$6.tag === 6 ? (0, _Seq.map)(function mapping$$8(v$$9) {
            return new _tast.Const(6, "UInt32", v$$9);
          }, (0, _Seq.rangeNumber)(0, 1, 4294967295)) : c$$6.tag === 8 ? (0, _Seq.map)(function mapping$$9(v$$10) {
            return new _tast.Const(8, "UInt64", v$$10);
          }, (0, _Seq.rangeLong)((0, _Long.fromBits)(0, 0, true), (0, _Long.fromInt)(1), (0, _Long.fromBits)(4294967295, 4294967295, true), true)) : c$$6.tag === 10 ? (0, _Seq.map)(function mapping$$10(v$$11) {
            return new _tast.Const(10, "UIntPtr", v$$11);
          }, (0, _Seq.rangeLong)((0, _Long.fromBits)(0, 0, true), (0, _Long.fromInt)(1), (0, _Long.fromBits)(4294967295, 4294967295, true), true)) : c$$6.tag === 12 ? (0, _Seq.map)(function mapping$$11(v$$12) {
            return new _tast.Const(12, "Double", v$$12);
          }, (0, _Seq.rangeNumber)(0, 1, 2147483647)) : c$$6.tag === 11 ? (0, _Seq.map)(function mapping$$12(v$$13) {
            return new _tast.Const(11, "Single", v$$13);
          }, (0, _Seq.rangeNumber)(0, 1, 2147483647)) : c$$6.tag === 13 ? (0, _Seq.map)(function mapping$$13(v$$14) {
            return new _tast.Const(13, "Char", String.fromCharCode(v$$14));
          }, (0, _Seq.rangeNumber)(32, 1, 65535)) : c$$6.tag === 14 ? (0, _Seq.map)(function mapping$$14(v$$15) {
            return new _tast.Const(14, "String", Array(v$$15 + 1).join("a"));
          }, (0, _Seq.rangeNumber)(1, 1, 2147483647)) : c$$6.tag === 15 ? (0, _Seq.map)(function mapping$$15(v$$16) {
            return new _tast.Const(15, "Decimal", v$$16);
          }, (0, _Seq.rangeNumber)(1, 1, 2147483647)) : (() => {
            throw new CannotRefute();
          })());

          if (c$0027 != null) {
            const c$$9 = c$0027;
            const matchValue$$1 = (0, _TastOps.tryDestAppTy)(g$$2, ty$$4);
            var $target$$13, tcref$$2;

            if (matchValue$$1 != null) {
              if (tcref$$1 = matchValue$$1, (0, _tast.EntityRef$$get_IsEnumTycon)(tcref$$1)) {
                $target$$13 = 0;
                tcref$$2 = matchValue$$1;
              } else {
                $target$$13 = 1;
              }
            } else {
              $target$$13 = 1;
            }

            switch ($target$$13) {
              case 0:
                {
                  let enumValues;

                  if ((0, _tast.EntityRef$$get_IsILEnumTycon)(tcref$$2)) {
                    const tdef = (0, _tast.EntityRef$$get_ILTyconInfo)(tcref$$2).fields[2];
                    enumValues = (0, _Seq.choose)(function chooser(ilField) {
                      if ((0, _il.ILFieldDef$$get_IsStatic)(ilField)) {
                        return (0, _Option.defaultArg)((0, _il.ILFieldDef$$get_LiteralValue)(ilField), null, function mapping$$16(ilValue) {
                          return [(0, _il.ILFieldDef$$get_Name)(ilField), ilFieldToTastConst(ilValue)];
                        });
                      } else {
                        return null;
                      }
                    }, (0, _il.ILFieldDefs$$get_AsList)((0, _il.ILTypeDef$$get_Fields)(tdef)));
                  } else {
                    enumValues = (0, _Seq.choose)(function chooser$$1(fsField) {
                      const matchValue$$2 = [fsField.rfield_const, fsField.rfield_static];
                      var $target$$14, fsFieldValue;

                      if (matchValue$$2[0] != null) {
                        if (matchValue$$2[1]) {
                          $target$$14 = 0;
                          fsFieldValue = matchValue$$2[0];
                        } else {
                          $target$$14 = 1;
                        }
                      } else {
                        $target$$14 = 1;
                      }

                      switch ($target$$14) {
                        case 0:
                          {
                            return [(0, _ast.Ident$$get_idText)(fsField.rfield_id), fsFieldValue];
                          }

                        case 1:
                          {
                            return null;
                          }
                      }
                    }, (0, _tast.EntityRef$$get_AllFieldsArray)(tcref$$2));
                  }

                  const nonCoveredEnumValues = (0, _Seq.tryFind)(function (tupledArg$$1) {
                    return !(0, _Set.FSharpSet$$Contains$$2B595)(consts, tupledArg$$1[1]);
                  }, enumValues);

                  if (nonCoveredEnumValues != null) {
                    const fldName = nonCoveredEnumValues[0];
                    const v$$17 = new _tast.RecdFieldRef(0, "RFRef", tcref$$2, fldName);
                    return [new _tast.Expr(11, "Op", new _tast.TOp(12, "ValFieldGet", v$$17), (0, _Types.L)(ty$$4, (0, _Types.L)()), (0, _Types.L)(), m$$16), false];
                  } else {
                    return [new _tast.Expr(0, "Const", c$$9, m$$16, ty$$4), true];
                  }
                }

              case 1:
                {
                  return [new _tast.Expr(0, "Const", c$$9, m$$16, ty$$4), false];
                }
            }
          } else {
            throw new CannotRefute();
          }
        }

      case 3:
        {
          const ucrefs = (0, _Types.L)(ucref1, (0, _List.choose)(function (_arg2$$2) {
            if (_arg2$$2.tag === 0) {
              const ucref$$1 = _arg2$$2.fields[0];
              return ucref$$1;
            } else {
              return null;
            }
          }, rest$$1));
          const tcref$$3 = (0, _tast.UnionCaseRef$$get_TyconRef)(ucref1);
          const others = (0, _List.sortBy)(function projection(ucref$$3) {
            return (0, _tast.UnionCaseRef$$get_CaseName)(ucref$$3);
          }, (0, _List.filter)(function predicate(ucref$$2) {
            return !(0, _List.exists)(function (arg10) {
              return (0, _TcGlobals.TcGlobals$$unionCaseRefEq)(g$$2, ucref$$2, arg10);
            }, ucrefs);
          }, (0, _tast.EntityRef$$get_UnionCasesAsRefList)(tcref$$3)), {
            Compare: _Util.comparePrimitives
          });

          if (others.tail != null) {
            const ucref2 = others.head;
            const flds$$5 = mkUnknowns((0, _TastOps.actualTysOfUnionCaseFields)((0, _TastOps.mkTyconRefInst)(tcref$$3, tinst$$4), ucref2));
            return [new _tast.Expr(11, "Op", new _tast.TOp(0, "UnionCase", ucref2), tinst$$4, flds$$5, m$$16), false];
          } else {
            throw new CannotRefute();
          }
        }

      case 4:
        {
          return [new _tast.Expr(11, "Op", new _tast.TOp(3, "Array"), (0, _Types.L)(ty$$5, (0, _Types.L)()), mkUnknowns((0, _List.replicate)(n$$3 + 1, ty$$5)), m$$16), false];
        }

      case 5:
        {
          throw new CannotRefute();
        }
    }
  };

  return go(path)(tm$$2);
}

function CombineRefutations(g$$3, r1, r2) {
  var tinst1, op1, m1, flds2, flds1, ecref2, ecref1, vref$$8, vref$$9, vref$$10, vref$$4, vref$$5, vref$$6, vref, vref$$1, vref$$2;
  const matchValue$$3 = [r1, r2];
  var $target$$15, other$$3, vref$$3;

  if (matchValue$$3[0].tag === 1) {
    if (vref = matchValue$$3[0].fields[0], (0, _tast.ValRef$$get_LogicalName)(vref) === "_") {
      $target$$15 = 0;
      other$$3 = matchValue$$3[1];
      vref$$3 = matchValue$$3[0].fields[0];
    } else if (matchValue$$3[1].tag === 1) {
      if (vref$$1 = matchValue$$3[1].fields[0], (0, _tast.ValRef$$get_LogicalName)(vref$$1) === "_") {
        $target$$15 = 0;
        other$$3 = matchValue$$3[0];
        vref$$3 = matchValue$$3[1].fields[0];
      } else {
        $target$$15 = 1;
      }
    } else {
      $target$$15 = 1;
    }
  } else if (matchValue$$3[1].tag === 1) {
    if (vref$$2 = matchValue$$3[1].fields[0], (0, _tast.ValRef$$get_LogicalName)(vref$$2) === "_") {
      $target$$15 = 0;
      other$$3 = matchValue$$3[0];
      vref$$3 = matchValue$$3[1].fields[0];
    } else {
      $target$$15 = 1;
    }
  } else {
    $target$$15 = 1;
  }

  switch ($target$$15) {
    case 0:
      {
        return other$$3;
      }

    case 1:
      {
        var $target$$16, other$$7, vref$$7;

        if (matchValue$$3[0].tag === 1) {
          if (vref$$4 = matchValue$$3[0].fields[0], (0, _tast.ValRef$$get_LogicalName)(vref$$4) === notNullText) {
            $target$$16 = 0;
            other$$7 = matchValue$$3[1];
            vref$$7 = matchValue$$3[0].fields[0];
          } else if (matchValue$$3[1].tag === 1) {
            if (vref$$5 = matchValue$$3[1].fields[0], (0, _tast.ValRef$$get_LogicalName)(vref$$5) === notNullText) {
              $target$$16 = 0;
              other$$7 = matchValue$$3[0];
              vref$$7 = matchValue$$3[1].fields[0];
            } else {
              $target$$16 = 1;
            }
          } else {
            $target$$16 = 1;
          }
        } else if (matchValue$$3[1].tag === 1) {
          if (vref$$6 = matchValue$$3[1].fields[0], (0, _tast.ValRef$$get_LogicalName)(vref$$6) === notNullText) {
            $target$$16 = 0;
            other$$7 = matchValue$$3[0];
            vref$$7 = matchValue$$3[1].fields[0];
          } else {
            $target$$16 = 1;
          }
        } else {
          $target$$16 = 1;
        }

        switch ($target$$16) {
          case 0:
            {
              return other$$7;
            }

          case 1:
            {
              var $target$$17, other$$11, vref$$11;

              if (matchValue$$3[0].tag === 1) {
                if (vref$$8 = matchValue$$3[0].fields[0], (0, _tast.ValRef$$get_LogicalName)(vref$$8) === otherSubtypeText) {
                  $target$$17 = 0;
                  other$$11 = matchValue$$3[1];
                  vref$$11 = matchValue$$3[0].fields[0];
                } else if (matchValue$$3[1].tag === 1) {
                  if (vref$$9 = matchValue$$3[1].fields[0], (0, _tast.ValRef$$get_LogicalName)(vref$$9) === otherSubtypeText) {
                    $target$$17 = 0;
                    other$$11 = matchValue$$3[0];
                    vref$$11 = matchValue$$3[1].fields[0];
                  } else {
                    $target$$17 = 1;
                  }
                } else {
                  $target$$17 = 1;
                }
              } else if (matchValue$$3[1].tag === 1) {
                if (vref$$10 = matchValue$$3[1].fields[0], (0, _tast.ValRef$$get_LogicalName)(vref$$10) === otherSubtypeText) {
                  $target$$17 = 0;
                  other$$11 = matchValue$$3[0];
                  vref$$11 = matchValue$$3[1].fields[0];
                } else {
                  $target$$17 = 1;
                }
              } else {
                $target$$17 = 1;
              }

              switch ($target$$17) {
                case 0:
                  {
                    return other$$11;
                  }

                case 1:
                  {
                    var $target$$18, ecref1$$1, ecref2$$1, flds1$$1, flds2$$1, m1$$1, op1$$1, tinst1$$1;

                    if (matchValue$$3[0].tag === 11) {
                      if (matchValue$$3[0].fields[0].tag === 1) {
                        if (matchValue$$3[1].tag === 11) {
                          if (matchValue$$3[1].fields[0].tag === 1) {
                            if (tinst1 = matchValue$$3[0].fields[1], (op1 = matchValue$$3[0].fields[0], (m1 = matchValue$$3[0].fields[3], (flds2 = matchValue$$3[1].fields[2], (flds1 = matchValue$$3[0].fields[2], (ecref2 = matchValue$$3[1].fields[0].fields[0], (ecref1 = matchValue$$3[0].fields[0].fields[0], (0, _TastOps.tyconRefEq)(g$$3, ecref1, ecref2)))))))) {
                              $target$$18 = 0;
                              ecref1$$1 = matchValue$$3[0].fields[0].fields[0];
                              ecref2$$1 = matchValue$$3[1].fields[0].fields[0];
                              flds1$$1 = matchValue$$3[0].fields[2];
                              flds2$$1 = matchValue$$3[1].fields[2];
                              m1$$1 = matchValue$$3[0].fields[3];
                              op1$$1 = matchValue$$3[0].fields[0];
                              tinst1$$1 = matchValue$$3[0].fields[1];
                            } else {
                              $target$$18 = 1;
                            }
                          } else {
                            $target$$18 = 1;
                          }
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
                          return new _tast.Expr(11, "Op", op1$$1, tinst1$$1, (0, _List.map2)(function (r1$$1, r2$$1) {
                            return CombineRefutations(g$$3, r1$$1, r2$$1);
                          }, flds1$$1, flds2$$1), m1$$1);
                        }

                      case 1:
                        {
                          var $target$$19, flds1$$2, flds2$$2, m1$$2, op1$$2, tinst1$$2, ucref1$$1, ucref2$$1, flds1$$3, flds2$$3, m1$$3, op1$$3, tinst1$$3, c1, c2, m1$$4, ty1;

                          if (matchValue$$3[0].tag === 11) {
                            if (matchValue$$3[0].fields[0].tag === 0) {
                              if (matchValue$$3[1].tag === 11) {
                                if (matchValue$$3[1].fields[0].tag === 0) {
                                  $target$$19 = 0;
                                  flds1$$2 = matchValue$$3[0].fields[2];
                                  flds2$$2 = matchValue$$3[1].fields[2];
                                  m1$$2 = matchValue$$3[0].fields[3];
                                  op1$$2 = matchValue$$3[0].fields[0];
                                  tinst1$$2 = matchValue$$3[0].fields[1];
                                  ucref1$$1 = matchValue$$3[0].fields[0].fields[0];
                                  ucref2$$1 = matchValue$$3[1].fields[0].fields[0];
                                } else {
                                  $target$$19 = 1;
                                  flds1$$3 = matchValue$$3[0].fields[2];
                                  flds2$$3 = matchValue$$3[1].fields[2];
                                  m1$$3 = matchValue$$3[0].fields[3];
                                  op1$$3 = matchValue$$3[0].fields[0];
                                  tinst1$$3 = matchValue$$3[0].fields[1];
                                }
                              } else {
                                $target$$19 = 3;
                              }
                            } else if (matchValue$$3[1].tag === 11) {
                              $target$$19 = 1;
                              flds1$$3 = matchValue$$3[0].fields[2];
                              flds2$$3 = matchValue$$3[1].fields[2];
                              m1$$3 = matchValue$$3[0].fields[3];
                              op1$$3 = matchValue$$3[0].fields[0];
                              tinst1$$3 = matchValue$$3[0].fields[1];
                            } else {
                              $target$$19 = 3;
                            }
                          } else if (matchValue$$3[0].tag === 0) {
                            if (matchValue$$3[1].tag === 0) {
                              $target$$19 = 2;
                              c1 = matchValue$$3[0].fields[0];
                              c2 = matchValue$$3[1].fields[0];
                              m1$$4 = matchValue$$3[0].fields[1];
                              ty1 = matchValue$$3[0].fields[2];
                            } else {
                              $target$$19 = 3;
                            }
                          } else {
                            $target$$19 = 3;
                          }

                          switch ($target$$19) {
                            case 0:
                              {
                                if ((0, _TcGlobals.TcGlobals$$unionCaseRefEq)(g$$3, ucref1$$1, ucref2$$1)) {
                                  return new _tast.Expr(11, "Op", op1$$2, tinst1$$2, (0, _List.map2)(function (r1$$2, r2$$2) {
                                    return CombineRefutations(g$$3, r1$$2, r2$$2);
                                  }, flds1$$2, flds2$$2), m1$$2);
                                } else if ((0, _tast.UnionCaseRef$$get_CaseName)(ucref1$$1) < (0, _tast.UnionCaseRef$$get_CaseName)(ucref2$$1)) {
                                  return r2;
                                } else {
                                  return r1;
                                }
                              }

                            case 1:
                              {
                                return new _tast.Expr(11, "Op", op1$$3, tinst1$$3, (0, _List.map2)(function (r1$$3, r2$$3) {
                                  return CombineRefutations(g$$3, r1$$3, r2$$3);
                                }, flds1$$3, flds2$$3), m1$$3);
                              }

                            case 2:
                              {
                                let c12;

                                const MaxStrings = function MaxStrings(s1, s2) {
                                  const c$$10 = (0, _Util.comparePrimitives)(s1.length, s2.length) | 0;

                                  if (c$$10 < 0) {
                                    return s2;
                                  } else if (c$$10 > 0) {
                                    return s1;
                                  } else if (s1 < s2) {
                                    return s2;
                                  } else {
                                    return s1;
                                  }
                                };

                                const matchValue$$4 = [c1, c2];
                                var $target$$20, s1$$1, s2$$1, s1$$2, s2$$2;

                                if (matchValue$$4[0].tag === 14) {
                                  if (matchValue$$4[1].tag === 14) {
                                    $target$$20 = 0;
                                    s1$$1 = matchValue$$4[0].fields[0];
                                    s2$$1 = matchValue$$4[1].fields[0];
                                  } else {
                                    $target$$20 = 2;
                                  }
                                } else if (matchValue$$4[0].tag === 15) {
                                  if (matchValue$$4[1].tag === 15) {
                                    $target$$20 = 1;
                                    s1$$2 = matchValue$$4[0].fields[0];
                                    s2$$2 = matchValue$$4[1].fields[0];
                                  } else {
                                    $target$$20 = 2;
                                  }
                                } else {
                                  $target$$20 = 2;
                                }

                                switch ($target$$20) {
                                  case 0:
                                    {
                                      c12 = new _tast.Const(14, "String", MaxStrings(s1$$1, s2$$1));
                                      break;
                                    }

                                  case 1:
                                    {
                                      c12 = new _tast.Const(15, "Decimal", (0, _Util.max)(_Util.comparePrimitives, s1$$2, s2$$2));
                                      break;
                                    }

                                  case 2:
                                    {
                                      c12 = (0, _Util.max)(function ($x$$7, $y$$8) {
                                        return $x$$7.CompareTo($y$$8);
                                      }, c1, c2);
                                      break;
                                    }
                                }

                                return new _tast.Expr(0, "Const", c12, m1$$4, ty1);
                              }

                            case 3:
                              {
                                return r1;
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

function ShowCounterExample(g$$4, denv, m$$17, refuted) {
  try {
    const refutations = (0, _List.collect)(function mapping$$17(_arg1$$4) {
      if (_arg1$$4.tag === 0) {
        const path$$2 = _arg1$$4.fields[0];
        const discrim = _arg1$$4.fields[1];
        return (0, _Types.L)(RefuteDiscrimSet(g$$4, m$$17, path$$2, discrim), (0, _Types.L)());
      } else {
        return (0, _Types.L)();
      }
    }, refuted);
    let patternInput$$6;

    if (refutations.tail != null) {
      const t = refutations.tail;
      const r = refutations.head[0];
      const eck = refutations.head[1];

      if (_lib.verbose) {
        (0, _ildiag.dprintf)((0, _String.printf)("r = %s (enumCoversKnownValue = %b)\n"))((0, _layout.showL)((0, _TastOps.DebugPrint$$$exprL)(r)))(eck);
      }

      patternInput$$6 = (0, _List.fold)(function (tupledArg$$2, tupledArg$$3) {
        return [CombineRefutations(g$$4, tupledArg$$2[0], tupledArg$$3[0]), tupledArg$$2[1] ? true : tupledArg$$3[1]];
      }, [r, eck], t);
    } else {
      throw new CannotRefute();
    }

    const text = (0, _layout.showL)((0, _NicePrint.dataExprL)(denv, patternInput$$6[0]));
    const failingWhenClause = (0, _List.exists)(function predicate$$1(_arg2$$3) {
      if (_arg2$$3.tag === 1) {
        return true;
      } else {
        return false;
      }
    }, refuted);
    return [text, failingWhenClause, patternInput$$6[1]];
  } catch (matchValue$$5) {
    if (matchValue$$5 instanceof CannotRefute) {
      return null;
    } else {
      (0, _ErrorLogger.warning)(new _ErrorLogger.InternalError((0, _String.toText)((0, _String.printf)("<failure during counter example generation: %s>"))((0, _Util.toString)(matchValue$$5)), m$$17));
      return null;
    }
  }
}

const Active = (0, _Types.declare)(function Active(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Active = Active;
const Frontier = (0, _Types.declare)(function Frontier(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Frontier = Frontier;
const InvestigationPoint = (0, _Types.declare)(function InvestigationPoint(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.InvestigationPoint = InvestigationPoint;

function isMemOfActives(p1$$8, actives) {
  isMemOfActives: while (true) {
    if (actives.tail != null) {
      const rest$$2 = actives.tail;
      const p2$$8 = actives.head.fields[0];

      if (pathEq(p1$$8, p2$$8)) {
        return true;
      } else {
        p1$$8 = p1$$8;
        actives = rest$$2;
        continue isMemOfActives;
      }
    } else {
      return false;
    }
  }
}

function lookupActive(x$$9, l$$2) {
  lookupActive: while (true) {
    if (l$$2.tail != null) {
      const t$$1 = l$$2.tail;
      const r2$$4 = l$$2.head.fields[2];
      const r1$$4 = l$$2.head.fields[1];
      const h = l$$2.head.fields[0];

      if (pathEq(x$$9, h)) {
        return [r1$$4, r2$$4];
      } else {
        x$$9 = x$$9;
        l$$2 = t$$1;
        continue lookupActive;
      }
    } else {
      throw new Error();
    }
  }
}

function removeActive(x$$10, l$$3) {
  if (l$$3.tail != null) {
    const t$$2 = l$$3.tail;
    const p$$7 = l$$3.head;
    const h$$1 = l$$3.head.fields[0];

    if (pathEq(x$$10, h$$1)) {
      return t$$2;
    } else {
      return (0, _Types.L)(p$$7, removeActive(x$$10, t$$2));
    }
  } else {
    return (0, _Types.L)();
  }
}

function getDiscrimOfPattern(g$$5, tpinst, t$$3) {
  switch (t$$3.tag) {
    case 12:
      {
        const _m$$1 = t$$3.fields[0];
        return new _tast.DecisionTreeTest(3, "IsNull");
      }

    case 13:
      {
        const tgty = t$$3.fields[1];
        const srcty = t$$3.fields[0];
        const _m$$2 = t$$3.fields[3];
        return new _tast.DecisionTreeTest(4, "IsInst", (0, _TastOps.instType)(tpinst, srcty), (0, _TastOps.instType)(tpinst, tgty));
      }

    case 7:
      {
        const tcref$$4 = t$$3.fields[0];
        const _m$$3 = t$$3.fields[2];
        return new _tast.DecisionTreeTest(4, "IsInst", (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$5), (0, _TastOps.mkAppTy)(tcref$$4, (0, _Types.L)()));
      }

    case 0:
      {
        const c$$11 = t$$3.fields[0];
        const _m$$4 = t$$3.fields[1];
        return new _tast.DecisionTreeTest(2, "Const", c$$11);
      }

    case 6:
      {
        const tyargs$0027 = t$$3.fields[1];
        const c$$12 = t$$3.fields[0];
        const _m$$5 = t$$3.fields[3];
        return new _tast.DecisionTreeTest(0, "UnionCase", c$$12, (0, _TastOps.instTypes)(tpinst, tyargs$0027));
      }

    case 9:
      {
        const ty$$6 = t$$3.fields[1];
        const args = t$$3.fields[0];
        const _m$$6 = t$$3.fields[2];
        return new _tast.DecisionTreeTest(1, "ArrayLength", (0, _List.length)(args), ty$$6);
      }

    case 5:
      {
        const resTys = t$$3.fields[0][1];
        const pexp = t$$3.fields[0][0];
        const idx = t$$3.fields[0][3] | 0;
        const apinfo = t$$3.fields[0][4];
        const apatVrefOpt = t$$3.fields[0][2];
        const _m$$7 = t$$3.fields[2];
        return new _tast.DecisionTreeTest(5, "ActivePatternCase", pexp, (0, _TastOps.instTypes)(tpinst, resTys), apatVrefOpt, idx, apinfo);
      }

    default:
      {
        return null;
      }
  }
}

function constOfDiscrim(discrim$$1) {
  if (discrim$$1.tag === 2) {
    const x$$11 = discrim$$1.fields[0];
    return x$$11;
  } else {
    throw new Error("not a const case");
  }
}

function constOfCase(c$$13) {
  return constOfDiscrim((0, _tast.DecisionTreeCase$$get_Discriminator)(c$$13));
}

function discrimsEq(g$$6, d1, d2) {
  const matchValue$$6 = [d1, d2];
  var $target$$21, c1$$1, c2$$1, n1$$7, n2$$7, c1$$2, c2$$2, srcty1, srcty2, tgty1, tgty2, n1$$8, n2$$8, vrefOpt1, vrefOpt2;

  if (matchValue$$6[0].tag === 1) {
    if (matchValue$$6[1].tag === 1) {
      $target$$21 = 1;
      n1$$7 = matchValue$$6[0].fields[0];
      n2$$7 = matchValue$$6[1].fields[0];
    } else {
      $target$$21 = 6;
    }
  } else if (matchValue$$6[0].tag === 2) {
    if (matchValue$$6[1].tag === 2) {
      $target$$21 = 2;
      c1$$2 = matchValue$$6[0].fields[0];
      c2$$2 = matchValue$$6[1].fields[0];
    } else {
      $target$$21 = 6;
    }
  } else if (matchValue$$6[0].tag === 3) {
    if (matchValue$$6[1].tag === 3) {
      $target$$21 = 3;
    } else {
      $target$$21 = 6;
    }
  } else if (matchValue$$6[0].tag === 4) {
    if (matchValue$$6[1].tag === 4) {
      $target$$21 = 4;
      srcty1 = matchValue$$6[0].fields[0];
      srcty2 = matchValue$$6[1].fields[0];
      tgty1 = matchValue$$6[0].fields[1];
      tgty2 = matchValue$$6[1].fields[1];
    } else {
      $target$$21 = 6;
    }
  } else if (matchValue$$6[0].tag === 5) {
    if (matchValue$$6[1].tag === 5) {
      $target$$21 = 5;
      n1$$8 = matchValue$$6[0].fields[3];
      n2$$8 = matchValue$$6[1].fields[3];
      vrefOpt1 = matchValue$$6[0].fields[2];
      vrefOpt2 = matchValue$$6[1].fields[2];
    } else {
      $target$$21 = 6;
    }
  } else if (matchValue$$6[1].tag === 0) {
    $target$$21 = 0;
    c1$$1 = matchValue$$6[0].fields[0];
    c2$$1 = matchValue$$6[1].fields[0];
  } else {
    $target$$21 = 6;
  }

  switch ($target$$21) {
    case 0:
      {
        return (0, _TcGlobals.TcGlobals$$unionCaseRefEq)(g$$6, c1$$1, c2$$1);
      }

    case 1:
      {
        return n1$$7 === n2$$7;
      }

    case 2:
      {
        return (0, _Util.equals)(c1$$2, c2$$2);
      }

    case 3:
      {
        return true;
      }

    case 4:
      {
        if ((0, _TastOps.typeEquiv)(g$$6, srcty1, srcty2)) {
          return (0, _TastOps.typeEquiv)(g$$6, tgty1, tgty2);
        } else {
          return false;
        }
      }

    case 5:
      {
        const matchValue$$7 = [vrefOpt1, vrefOpt2];
        var $target$$22, tinst1$$4, tinst2, vref1, vref2;

        if (matchValue$$7[0] != null) {
          if (matchValue$$7[1] != null) {
            $target$$22 = 0;
            tinst1$$4 = matchValue$$7[0][1];
            tinst2 = matchValue$$7[1][1];
            vref1 = matchValue$$7[0][0];
            vref2 = matchValue$$7[1][0];
          } else {
            $target$$22 = 1;
          }
        } else {
          $target$$22 = 1;
        }

        switch ($target$$22) {
          case 0:
            {
              if (((0, _TastOps.valRefEq)(g$$6, vref1, vref2) ? n1$$8 === n2$$8 : false) ? !(0, _TastOps.doesActivePatternHaveFreeTypars)(g$$6, vref1) : false) {
                return (0, _illib.List$$$lengthsEqAndForall2)(function (arg10$0040$$3, arg20$0040) {
                  return (0, _TastOps.typeEquiv)(g$$6, arg10$0040$$3, arg20$0040);
                }, tinst1$$4, tinst2);
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

    case 6:
      {
        return false;
      }
  }
}

function isDiscrimSubsumedBy(g$$7, amap$$1, m$$18, d1$$1, d2$$1) {
  if (discrimsEq(g$$7, d1$$1, d2$$1)) {
    return true;
  } else {
    const matchValue$$8 = [d1$$1, d2$$1];
    var $target$$23, tgty1$$1, tgty2$$1;

    if (matchValue$$8[0].tag === 4) {
      if (matchValue$$8[1].tag === 4) {
        $target$$23 = 0;
        tgty1$$1 = matchValue$$8[0].fields[1];
        tgty2$$1 = matchValue$$8[1].fields[1];
      } else {
        $target$$23 = 1;
      }
    } else {
      $target$$23 = 1;
    }

    switch ($target$$23) {
      case 0:
        {
          return (0, _TypeRelations.TypeDefinitelySubsumesTypeNoCoercion)(0, g$$7, amap$$1, m$$18, tgty2$$1, tgty1$$1);
        }

      case 1:
        {
          return false;
        }
    }
  }
}

function chooseSimultaneousEdgeSet(prevOpt, f$$2, l$$4) {
  if (l$$4.tail != null) {
    const t$$4 = l$$4.tail;
    const h$$2 = l$$4.head;
    const matchValue$$9 = f$$2(prevOpt, h$$2);

    if (matchValue$$9[0] == null) {
      const patternInput$$8 = chooseSimultaneousEdgeSet(prevOpt, f$$2, t$$4);
      return [patternInput$$8[0], (0, _Types.L)(h$$2, patternInput$$8[1])];
    } else {
      const x$$12 = (0, _Option.value)(matchValue$$9[0]);
      const patternInput$$7 = chooseSimultaneousEdgeSet((0, _Option.some)(x$$12), f$$2, t$$4);
      return [(0, _Types.L)(x$$12, patternInput$$7[0]), patternInput$$7[1]];
    }
  } else {
    return [(0, _Types.L)(), (0, _Types.L)()];
  }
}

function canCompactConstantClass(c$$14) {
  var $target$$27;

  switch (c$$14.tag) {
    case 1:
    case 3:
    case 5:
    case 2:
    case 4:
    case 6:
    case 13:
      $target$$27 = 0;
      break;

    default:
      $target$$27 = 1;
  }

  switch ($target$$27) {
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

function discrimsHaveSameSimultaneousClass(g$$8, d1$$2, d2$$2) {
  const matchValue$$10 = [d1$$2, d2$$2];
  var $target$$28, apatVrefOpt1, apatVrefOpt2;

  if (matchValue$$10[0].tag === 3) {
    if (matchValue$$10[1].tag === 3) {
      $target$$28 = 0;
    } else {
      $target$$28 = 3;
    }
  } else if (matchValue$$10[0].tag === 1) {
    if (matchValue$$10[1].tag === 1) {
      $target$$28 = 0;
    } else {
      $target$$28 = 3;
    }
  } else if (matchValue$$10[0].tag === 0) {
    if (matchValue$$10[1].tag === 0) {
      $target$$28 = 0;
    } else {
      $target$$28 = 3;
    }
  } else if (matchValue$$10[0].tag === 4) {
    if (matchValue$$10[1].tag === 4) {
      $target$$28 = 1;
    } else {
      $target$$28 = 3;
    }
  } else if (matchValue$$10[0].tag === 5) {
    if (matchValue$$10[1].tag === 5) {
      $target$$28 = 2;
      apatVrefOpt1 = matchValue$$10[0].fields[2];
      apatVrefOpt2 = matchValue$$10[1].fields[2];
    } else {
      $target$$28 = 3;
    }
  } else if (matchValue$$10[1].tag === 2) {
    $target$$28 = 0;
  } else {
    $target$$28 = 3;
  }

  switch ($target$$28) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }

    case 2:
      {
        const matchValue$$11 = [apatVrefOpt1, apatVrefOpt2];
        var $target$$29, tinst1$$5, tinst2$$1, vref1$$1, vref2$$1;

        if (matchValue$$11[0] != null) {
          if (matchValue$$11[1] != null) {
            $target$$29 = 0;
            tinst1$$5 = matchValue$$11[0][1];
            tinst2$$1 = matchValue$$11[1][1];
            vref1$$1 = matchValue$$11[0][0];
            vref2$$1 = matchValue$$11[1][0];
          } else {
            $target$$29 = 1;
          }
        } else {
          $target$$29 = 1;
        }

        switch ($target$$29) {
          case 0:
            {
              if ((0, _TastOps.valRefEq)(g$$8, vref1$$1, vref2$$1) ? !(0, _TastOps.doesActivePatternHaveFreeTypars)(g$$8, vref1$$1) : false) {
                return (0, _illib.List$$$lengthsEqAndForall2)(function (arg10$0040$$4, arg20$0040$$1) {
                  return (0, _TastOps.typeEquiv)(g$$8, arg10$0040$$4, arg20$0040$$1);
                }, tinst1$$5, tinst2$$1);
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

    case 3:
      {
        return false;
      }
  }
}

function ChooseInvestigationPointLeftToRight(frontiers) {
  if (frontiers.tail == null) {
    throw new Error("ChooseInvestigationPointLeftToRight: no frontiers!");
  } else {
    const actives$$1 = frontiers.head.fields[1];
    const _t = frontiers.tail;

    const _i = frontiers.head.fields[0] | 0;

    const choose = function choose(l$$7) {
      choose: while (true) {
        var $target$$30, active, t$$5;

        if (l$$7.tail != null) {
          if (l$$7.head.fields[2].tag === 12) {
            $target$$30 = 1;
            active = l$$7.head;
          } else if (l$$7.head.fields[2].tag === 13) {
            $target$$30 = 1;
            active = l$$7.head;
          } else if (l$$7.head.fields[2].tag === 7) {
            $target$$30 = 1;
            active = l$$7.head;
          } else if (l$$7.head.fields[2].tag === 6) {
            $target$$30 = 1;
            active = l$$7.head;
          } else if (l$$7.head.fields[2].tag === 9) {
            $target$$30 = 1;
            active = l$$7.head;
          } else if (l$$7.head.fields[2].tag === 0) {
            $target$$30 = 1;
            active = l$$7.head;
          } else if (l$$7.head.fields[2].tag === 5) {
            $target$$30 = 1;
            active = l$$7.head;
          } else if (l$$7.head.fields[2].tag === 11) {
            $target$$30 = 1;
            active = l$$7.head;
          } else {
            $target$$30 = 2;
            t$$5 = l$$7.tail;
          }
        } else {
          $target$$30 = 0;
        }

        switch ($target$$30) {
          case 0:
            {
              throw new Error("ChooseInvestigationPointLeftToRight: no non-immediate patterns in first rule");
            }

          case 1:
            {
              return active;
            }

          case 2:
            {
              l$$7 = t$$5;
              continue choose;
            }
        }
      }
    };

    return choose(actives$$1);
  }
}

function BuildSwitch(inpExprOpt, g$$9, expr, edges, dflt, m$$19) {
  var dflt$$5, c$$15, dflt$$6, c$$16, dflt$$7, c$$17, dflt$$8, c$$18, dflt$$9, c$$19, dflt$$10, c$$20, dflt$$11, c$$21, dflt$$12, c$$22, success, edges$$1, success$$1, edges$$2;

  if (_lib.verbose) {
    (0, _ildiag.dprintf)((0, _String.printf)("--> BuildSwitch@%a, #edges = %A, dflt.IsSome = %A\n"))(_range.outputRange)(m$$19)((0, _List.length)(edges))(dflt != null);
  }

  const matchValue$$12 = [edges, dflt];
  var $target$$31, dflt$$3, tree, dflt$$4, edges$$3, success$$2;

  if (matchValue$$12[0].tail != null) {
    if (matchValue$$12[0].tail.tail == null) {
      if (matchValue$$12[1] == null) {
        $target$$31 = 2;
        tree = matchValue$$12[0].head.fields[1];
      } else if (matchValue$$12[0].head.fields[0].tag === 4) {
        if (success = matchValue$$12[0].head.fields[1], (edges$$1 = matchValue$$12[0].tail, inpExprOpt != null)) {
          $target$$31 = 3;
          dflt$$4 = matchValue$$12[1];
          edges$$3 = matchValue$$12[0].tail;
          success$$2 = matchValue$$12[0].head.fields[1];
        } else {
          $target$$31 = 4;
        }
      } else {
        $target$$31 = 4;
      }
    } else if (matchValue$$12[0].head.fields[0].tag === 4) {
      if (success$$1 = matchValue$$12[0].head.fields[1], (edges$$2 = matchValue$$12[0].tail, inpExprOpt != null)) {
        $target$$31 = 3;
        dflt$$4 = matchValue$$12[1];
        edges$$3 = matchValue$$12[0].tail;
        success$$2 = matchValue$$12[0].head.fields[1];
      } else {
        $target$$31 = 4;
      }
    } else {
      $target$$31 = 4;
    }
  } else if (matchValue$$12[1] != null) {
    $target$$31 = 1;
    dflt$$3 = matchValue$$12[1];
  } else {
    $target$$31 = 0;
  }

  switch ($target$$31) {
    case 0:
      {
        throw new Error("internal error: no edges and no default");
      }

    case 1:
      {
        return dflt$$3;
      }

    case 2:
      {
        return tree;
      }

    case 3:
      {
        return new _tast.DecisionTree(0, "TDSwitch", expr, (0, _Types.L)(new _tast.DecisionTreeCase(0, "TCase", new _tast.DecisionTreeTest(3, "IsNull"), BuildSwitch(null, g$$9, expr, edges$$3, dflt$$4, m$$19)), (0, _Types.L)()), success$$2, m$$19);
      }

    case 4:
      {
        var $target$$32, dflt$$13, edge, edges$$4, dflt$$14, c$$26, dflt$$15;

        if (matchValue$$12[0].tail != null) {
          if (matchValue$$12[0].head.fields[0].tag === 3) {
            $target$$32 = 0;
            dflt$$13 = matchValue$$12[1];
            edge = matchValue$$12[0].head;
            edges$$4 = matchValue$$12[0].tail;
          } else if (matchValue$$12[0].head.fields[0].tag === 4) {
            $target$$32 = 0;
            dflt$$13 = matchValue$$12[1];
            edge = matchValue$$12[0].head;
            edges$$4 = matchValue$$12[0].tail;
          } else if (matchValue$$12[0].head.fields[0].tag === 2) {
            if (matchValue$$12[0].head.fields[0].fields[0].tag === 15) {
              if (matchValue$$12[1] != null) {
                $target$$32 = 2;
                dflt$$14 = matchValue$$12[1];
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 14) {
              if (matchValue$$12[1] != null) {
                $target$$32 = 2;
                dflt$$14 = matchValue$$12[1];
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 11) {
              if (matchValue$$12[1] != null) {
                $target$$32 = 2;
                dflt$$14 = matchValue$$12[1];
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 12) {
              if (matchValue$$12[1] != null) {
                $target$$32 = 2;
                dflt$$14 = matchValue$$12[1];
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 1) {
              if (matchValue$$12[1] != null) {
                if (dflt$$5 = matchValue$$12[1], (c$$15 = matchValue$$12[0].head.fields[0].fields[0], canCompactConstantClass(c$$15))) {
                  $target$$32 = 3;
                  c$$26 = matchValue$$12[0].head.fields[0].fields[0];
                  dflt$$15 = matchValue$$12[1];
                } else {
                  $target$$32 = 4;
                }
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 2) {
              if (matchValue$$12[1] != null) {
                if (dflt$$6 = matchValue$$12[1], (c$$16 = matchValue$$12[0].head.fields[0].fields[0], canCompactConstantClass(c$$16))) {
                  $target$$32 = 3;
                  c$$26 = matchValue$$12[0].head.fields[0].fields[0];
                  dflt$$15 = matchValue$$12[1];
                } else {
                  $target$$32 = 4;
                }
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 3) {
              if (matchValue$$12[1] != null) {
                if (dflt$$7 = matchValue$$12[1], (c$$17 = matchValue$$12[0].head.fields[0].fields[0], canCompactConstantClass(c$$17))) {
                  $target$$32 = 3;
                  c$$26 = matchValue$$12[0].head.fields[0].fields[0];
                  dflt$$15 = matchValue$$12[1];
                } else {
                  $target$$32 = 4;
                }
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 4) {
              if (matchValue$$12[1] != null) {
                if (dflt$$8 = matchValue$$12[1], (c$$18 = matchValue$$12[0].head.fields[0].fields[0], canCompactConstantClass(c$$18))) {
                  $target$$32 = 3;
                  c$$26 = matchValue$$12[0].head.fields[0].fields[0];
                  dflt$$15 = matchValue$$12[1];
                } else {
                  $target$$32 = 4;
                }
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 5) {
              if (matchValue$$12[1] != null) {
                if (dflt$$9 = matchValue$$12[1], (c$$19 = matchValue$$12[0].head.fields[0].fields[0], canCompactConstantClass(c$$19))) {
                  $target$$32 = 3;
                  c$$26 = matchValue$$12[0].head.fields[0].fields[0];
                  dflt$$15 = matchValue$$12[1];
                } else {
                  $target$$32 = 4;
                }
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 6) {
              if (matchValue$$12[1] != null) {
                if (dflt$$10 = matchValue$$12[1], (c$$20 = matchValue$$12[0].head.fields[0].fields[0], canCompactConstantClass(c$$20))) {
                  $target$$32 = 3;
                  c$$26 = matchValue$$12[0].head.fields[0].fields[0];
                  dflt$$15 = matchValue$$12[1];
                } else {
                  $target$$32 = 4;
                }
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 7) {
              if (matchValue$$12[1] != null) {
                $target$$32 = 2;
                dflt$$14 = matchValue$$12[1];
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 8) {
              if (matchValue$$12[1] != null) {
                $target$$32 = 2;
                dflt$$14 = matchValue$$12[1];
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 9) {
              if (matchValue$$12[1] != null) {
                $target$$32 = 2;
                dflt$$14 = matchValue$$12[1];
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 10) {
              if (matchValue$$12[1] != null) {
                $target$$32 = 2;
                dflt$$14 = matchValue$$12[1];
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[0].head.fields[0].fields[0].tag === 13) {
              if (matchValue$$12[1] != null) {
                if (dflt$$11 = matchValue$$12[1], (c$$21 = matchValue$$12[0].head.fields[0].fields[0], canCompactConstantClass(c$$21))) {
                  $target$$32 = 3;
                  c$$26 = matchValue$$12[0].head.fields[0].fields[0];
                  dflt$$15 = matchValue$$12[1];
                } else {
                  $target$$32 = 4;
                }
              } else {
                $target$$32 = 1;
              }
            } else if (matchValue$$12[1] != null) {
              if (dflt$$12 = matchValue$$12[1], (c$$22 = matchValue$$12[0].head.fields[0].fields[0], canCompactConstantClass(c$$22))) {
                $target$$32 = 3;
                c$$26 = matchValue$$12[0].head.fields[0].fields[0];
                dflt$$15 = matchValue$$12[1];
              } else {
                $target$$32 = 4;
              }
            } else {
              $target$$32 = 4;
            }
          } else if (matchValue$$12[0].head.fields[0].tag === 1) {
            if (matchValue$$12[1] != null) {
              $target$$32 = 2;
              dflt$$14 = matchValue$$12[1];
            } else {
              $target$$32 = 4;
            }
          } else {
            $target$$32 = 4;
          }
        } else {
          $target$$32 = 4;
        }

        switch ($target$$32) {
          case 0:
            {
              return new _tast.DecisionTree(0, "TDSwitch", expr, (0, _Types.L)(edge, (0, _Types.L)()), BuildSwitch(inpExprOpt, g$$9, expr, edges$$4, dflt$$13, m$$19), m$$19);
            }

          case 1:
            {
              return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("inexhaustive match - need a default cases!", m$$19));
            }

          case 2:
            {
              return (0, _List.foldBack)(function (_arg1$$5, sofar) {
                const tree$$1 = _arg1$$5.fields[1];
                const discrim$$2 = _arg1$$5.fields[0];
                const testexpr = expr;
                let testexpr$$1;
                var $target$$33, n$$4, c$$23, c$$24, c$$25;

                if (discrim$$2.tag === 1) {
                  $target$$33 = 0;
                  n$$4 = discrim$$2.fields[0];
                } else if (discrim$$2.tag === 2) {
                  if (discrim$$2.fields[0].tag === 14) {
                    $target$$33 = 1;
                    c$$23 = discrim$$2.fields[0];
                  } else if (discrim$$2.fields[0].tag === 15) {
                    $target$$33 = 2;
                    c$$24 = discrim$$2.fields[0];
                  } else if (discrim$$2.fields[0].tag === 12) {
                    $target$$33 = 3;
                    c$$25 = discrim$$2.fields[0];
                  } else if (discrim$$2.fields[0].tag === 11) {
                    $target$$33 = 3;
                    c$$25 = discrim$$2.fields[0];
                  } else if (discrim$$2.fields[0].tag === 7) {
                    $target$$33 = 3;
                    c$$25 = discrim$$2.fields[0];
                  } else if (discrim$$2.fields[0].tag === 8) {
                    $target$$33 = 3;
                    c$$25 = discrim$$2.fields[0];
                  } else if (discrim$$2.fields[0].tag === 9) {
                    $target$$33 = 3;
                    c$$25 = discrim$$2.fields[0];
                  } else if (discrim$$2.fields[0].tag === 10) {
                    $target$$33 = 3;
                    c$$25 = discrim$$2.fields[0];
                  } else {
                    $target$$33 = 4;
                  }
                } else {
                  $target$$33 = 4;
                }

                switch ($target$$33) {
                  case 0:
                    {
                      const patternInput$$9 = (0, _TastOps.mkCompGenLocalAndInvisbleBind)(g$$9, "testExpr", m$$19, testexpr);
                      testexpr$$1 = (0, _TastOps.mkLetBind)(m$$19, patternInput$$9[2], (0, _TastOps.mkLazyAnd)(g$$9, m$$19, (0, _TastOps.mkNonNullTest)(g$$9, m$$19, patternInput$$9[1]), (0, _TastOps.mkILAsmCeq)(g$$9, m$$19, (0, _TastOps.mkLdlen)(g$$9, m$$19, patternInput$$9[1]), (0, _TastOps.mkInt)(g$$9, m$$19, n$$4))));
                      break;
                    }

                  case 1:
                    {
                      testexpr$$1 = (0, _TastOps.mkCallEqualsOperator)(g$$9, m$$19, (0, _TcGlobals.TcGlobals$$get_string_ty)(g$$9), testexpr, new _tast.Expr(0, "Const", c$$23, m$$19, (0, _TcGlobals.TcGlobals$$get_string_ty)(g$$9)));
                      break;
                    }

                  case 2:
                    {
                      testexpr$$1 = (0, _TastOps.mkCallEqualsOperator)(g$$9, m$$19, (0, _TcGlobals.TcGlobals$$get_decimal_ty)(g$$9), testexpr, new _tast.Expr(0, "Const", c$$24, m$$19, (0, _TcGlobals.TcGlobals$$get_decimal_ty)(g$$9)));
                      break;
                    }

                  case 3:
                    {
                      testexpr$$1 = (0, _TastOps.mkILAsmCeq)(g$$9, m$$19, testexpr, new _tast.Expr(0, "Const", c$$25, m$$19, (0, _TastOps.tyOfExpr)(g$$9, testexpr)));
                      break;
                    }

                  case 4:
                    {
                      testexpr$$1 = (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("strange switch", m$$19));
                      break;
                    }
                }

                return (0, _TastOps.mkBoolSwitch)(m$$19, testexpr$$1, tree$$1, sofar);
              }, edges, dflt$$14);
            }

          case 3:
            {
              const edgeCompare = function edgeCompare(c1$$3, c2$$3) {
                const matchValue$$13 = [constOfCase(c1$$3), constOfCase(c2$$3)];
                var $target$$34, i1, i2, i1$$1, i2$$1, i1$$2, i2$$2, i1$$3, i2$$3, i1$$4, i2$$4, i1$$5, i2$$5, c1$$4, c2$$4;

                if (matchValue$$13[0].tag === 1) {
                  if (matchValue$$13[1].tag === 1) {
                    $target$$34 = 0;
                    i1 = matchValue$$13[0].fields[0];
                    i2 = matchValue$$13[1].fields[0];
                  } else {
                    $target$$34 = 7;
                  }
                } else if (matchValue$$13[0].tag === 3) {
                  if (matchValue$$13[1].tag === 3) {
                    $target$$34 = 1;
                    i1$$1 = matchValue$$13[0].fields[0];
                    i2$$1 = matchValue$$13[1].fields[0];
                  } else {
                    $target$$34 = 7;
                  }
                } else if (matchValue$$13[0].tag === 5) {
                  if (matchValue$$13[1].tag === 5) {
                    $target$$34 = 2;
                    i1$$2 = matchValue$$13[0].fields[0];
                    i2$$2 = matchValue$$13[1].fields[0];
                  } else {
                    $target$$34 = 7;
                  }
                } else if (matchValue$$13[0].tag === 2) {
                  if (matchValue$$13[1].tag === 2) {
                    $target$$34 = 3;
                    i1$$3 = matchValue$$13[0].fields[0];
                    i2$$3 = matchValue$$13[1].fields[0];
                  } else {
                    $target$$34 = 7;
                  }
                } else if (matchValue$$13[0].tag === 4) {
                  if (matchValue$$13[1].tag === 4) {
                    $target$$34 = 4;
                    i1$$4 = matchValue$$13[0].fields[0];
                    i2$$4 = matchValue$$13[1].fields[0];
                  } else {
                    $target$$34 = 7;
                  }
                } else if (matchValue$$13[0].tag === 6) {
                  if (matchValue$$13[1].tag === 6) {
                    $target$$34 = 5;
                    i1$$5 = matchValue$$13[0].fields[0];
                    i2$$5 = matchValue$$13[1].fields[0];
                  } else {
                    $target$$34 = 7;
                  }
                } else if (matchValue$$13[0].tag === 13) {
                  if (matchValue$$13[1].tag === 13) {
                    $target$$34 = 6;
                    c1$$4 = matchValue$$13[0].fields[0];
                    c2$$4 = matchValue$$13[1].fields[0];
                  } else {
                    $target$$34 = 7;
                  }
                } else {
                  $target$$34 = 7;
                }

                switch ($target$$34) {
                  case 0:
                    {
                      return (0, _Util.comparePrimitives)(i1, i2) | 0;
                    }

                  case 1:
                    {
                      return (0, _Util.comparePrimitives)(i1$$1, i2$$1) | 0;
                    }

                  case 2:
                    {
                      return (0, _Util.comparePrimitives)(i1$$2, i2$$2) | 0;
                    }

                  case 3:
                    {
                      return (0, _Util.comparePrimitives)(i1$$3, i2$$3) | 0;
                    }

                  case 4:
                    {
                      return (0, _Util.comparePrimitives)(i1$$4, i2$$4) | 0;
                    }

                  case 5:
                    {
                      return (0, _Util.comparePrimitives)(i1$$5, i2$$5) | 0;
                    }

                  case 6:
                    {
                      return (0, _Util.comparePrimitives)(c1$$4, c2$$4) | 0;
                    }

                  case 7:
                    {
                      throw new Error("illtyped term during pattern compilation");
                    }
                }
              };

              const edges$0027 = (0, _List.sortWith)(edgeCompare, edges);

              const compactify = function compactify(curr, edges$$5) {
                var cprev, cnext, iprev$$10, inext$$10, iprev$$8, inext$$8, iprev$$6, inext$$6, iprev$$4, inext$$4, iprev$$2, inext$$2, iprev, inext;

                compactify: while (true) {
                  const matchValue$$14 = [curr, edges$$5];

                  if (matchValue$$14[0] != null) {
                    if (matchValue$$14[1].tail != null) {
                      if (matchValue$$14[0].tail != null) {
                        const matchValue$$15 = [constOfCase(matchValue$$14[0].head), constOfCase(matchValue$$14[1].head)];
                        var $target$$35, inext$$1, iprev$$1;

                        if (matchValue$$15[0].tag === 1) {
                          if (matchValue$$15[1].tag === 1) {
                            if (iprev = matchValue$$15[0].fields[0] | 0, (inext = matchValue$$15[1].fields[0] | 0, iprev + 1 === inext)) {
                              $target$$35 = 0;
                              inext$$1 = matchValue$$15[1].fields[0];
                              iprev$$1 = matchValue$$15[0].fields[0];
                            } else {
                              $target$$35 = 1;
                            }
                          } else {
                            $target$$35 = 1;
                          }
                        } else {
                          $target$$35 = 1;
                        }

                        switch ($target$$35) {
                          case 0:
                            {
                              curr = (0, _Types.L)(matchValue$$14[1].head, (0, _Types.L)(matchValue$$14[0].head, matchValue$$14[0].tail));
                              edges$$5 = matchValue$$14[1].tail;
                              continue compactify;
                            }

                          case 1:
                            {
                              var $target$$36, inext$$3, iprev$$3;

                              if (matchValue$$15[0].tag === 3) {
                                if (matchValue$$15[1].tag === 3) {
                                  if (iprev$$2 = matchValue$$15[0].fields[0] | 0, (inext$$2 = matchValue$$15[1].fields[0] | 0, iprev$$2 + 1 === inext$$2)) {
                                    $target$$36 = 0;
                                    inext$$3 = matchValue$$15[1].fields[0];
                                    iprev$$3 = matchValue$$15[0].fields[0];
                                  } else {
                                    $target$$36 = 1;
                                  }
                                } else {
                                  $target$$36 = 1;
                                }
                              } else {
                                $target$$36 = 1;
                              }

                              switch ($target$$36) {
                                case 0:
                                  {
                                    curr = (0, _Types.L)(matchValue$$14[1].head, (0, _Types.L)(matchValue$$14[0].head, matchValue$$14[0].tail));
                                    edges$$5 = matchValue$$14[1].tail;
                                    continue compactify;
                                  }

                                case 1:
                                  {
                                    var $target$$37, inext$$5, iprev$$5;

                                    if (matchValue$$15[0].tag === 5) {
                                      if (matchValue$$15[1].tag === 5) {
                                        if (iprev$$4 = matchValue$$15[0].fields[0] | 0, (inext$$4 = matchValue$$15[1].fields[0] | 0, iprev$$4 + 1 === inext$$4)) {
                                          $target$$37 = 0;
                                          inext$$5 = matchValue$$15[1].fields[0];
                                          iprev$$5 = matchValue$$15[0].fields[0];
                                        } else {
                                          $target$$37 = 1;
                                        }
                                      } else {
                                        $target$$37 = 1;
                                      }
                                    } else {
                                      $target$$37 = 1;
                                    }

                                    switch ($target$$37) {
                                      case 0:
                                        {
                                          curr = (0, _Types.L)(matchValue$$14[1].head, (0, _Types.L)(matchValue$$14[0].head, matchValue$$14[0].tail));
                                          edges$$5 = matchValue$$14[1].tail;
                                          continue compactify;
                                        }

                                      case 1:
                                        {
                                          var $target$$38, inext$$7, iprev$$7;

                                          if (matchValue$$15[0].tag === 2) {
                                            if (matchValue$$15[1].tag === 2) {
                                              if (iprev$$6 = matchValue$$15[0].fields[0], (inext$$6 = matchValue$$15[1].fields[0], ~~iprev$$6 + 1 === ~~inext$$6)) {
                                                $target$$38 = 0;
                                                inext$$7 = matchValue$$15[1].fields[0];
                                                iprev$$7 = matchValue$$15[0].fields[0];
                                              } else {
                                                $target$$38 = 1;
                                              }
                                            } else {
                                              $target$$38 = 1;
                                            }
                                          } else {
                                            $target$$38 = 1;
                                          }

                                          switch ($target$$38) {
                                            case 0:
                                              {
                                                curr = (0, _Types.L)(matchValue$$14[1].head, (0, _Types.L)(matchValue$$14[0].head, matchValue$$14[0].tail));
                                                edges$$5 = matchValue$$14[1].tail;
                                                continue compactify;
                                              }

                                            case 1:
                                              {
                                                var $target$$39, inext$$9, iprev$$9;

                                                if (matchValue$$15[0].tag === 4) {
                                                  if (matchValue$$15[1].tag === 4) {
                                                    if (iprev$$8 = matchValue$$15[0].fields[0], (inext$$8 = matchValue$$15[1].fields[0], ~~iprev$$8 + 1 === ~~inext$$8)) {
                                                      $target$$39 = 0;
                                                      inext$$9 = matchValue$$15[1].fields[0];
                                                      iprev$$9 = matchValue$$15[0].fields[0];
                                                    } else {
                                                      $target$$39 = 1;
                                                    }
                                                  } else {
                                                    $target$$39 = 1;
                                                  }
                                                } else {
                                                  $target$$39 = 1;
                                                }

                                                switch ($target$$39) {
                                                  case 0:
                                                    {
                                                      curr = (0, _Types.L)(matchValue$$14[1].head, (0, _Types.L)(matchValue$$14[0].head, matchValue$$14[0].tail));
                                                      edges$$5 = matchValue$$14[1].tail;
                                                      continue compactify;
                                                    }

                                                  case 1:
                                                    {
                                                      var $target$$40, inext$$11, iprev$$11;

                                                      if (matchValue$$15[0].tag === 6) {
                                                        if (matchValue$$15[1].tag === 6) {
                                                          if (iprev$$10 = matchValue$$15[0].fields[0], (inext$$10 = matchValue$$15[1].fields[0], ~~iprev$$10 + 1 === ~~inext$$10)) {
                                                            $target$$40 = 0;
                                                            inext$$11 = matchValue$$15[1].fields[0];
                                                            iprev$$11 = matchValue$$15[0].fields[0];
                                                          } else {
                                                            $target$$40 = 1;
                                                          }
                                                        } else {
                                                          $target$$40 = 1;
                                                        }
                                                      } else {
                                                        $target$$40 = 1;
                                                      }

                                                      switch ($target$$40) {
                                                        case 0:
                                                          {
                                                            curr = (0, _Types.L)(matchValue$$14[1].head, (0, _Types.L)(matchValue$$14[0].head, matchValue$$14[0].tail));
                                                            edges$$5 = matchValue$$14[1].tail;
                                                            continue compactify;
                                                          }

                                                        case 1:
                                                          {
                                                            var $target$$41, cnext$$1, cprev$$1;

                                                            if (matchValue$$15[0].tag === 13) {
                                                              if (matchValue$$15[1].tag === 13) {
                                                                if (cprev = matchValue$$15[0].fields[0], (cnext = matchValue$$15[1].fields[0], cprev.charCodeAt(0) + 1 === cnext.charCodeAt(0))) {
                                                                  $target$$41 = 0;
                                                                  cnext$$1 = matchValue$$15[1].fields[0];
                                                                  cprev$$1 = matchValue$$15[0].fields[0];
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
                                                                  curr = (0, _Types.L)(matchValue$$14[1].head, (0, _Types.L)(matchValue$$14[0].head, matchValue$$14[0].tail));
                                                                  edges$$5 = matchValue$$14[1].tail;
                                                                  continue compactify;
                                                                }

                                                              case 1:
                                                                {
                                                                  return (0, _Types.L)((0, _List.reverse)((0, _Types.L)(matchValue$$14[0].head, matchValue$$14[0].tail)), compactify(null, edges$$5));
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
                      } else {
                        throw new Error("internal error: compactify");
                      }
                    } else {
                      const last = matchValue$$14[0];
                      return (0, _Types.L)((0, _List.reverse)(last), (0, _Types.L)());
                    }
                  } else if (matchValue$$14[1].tail != null) {
                    curr = (0, _Types.L)(matchValue$$14[1].head, (0, _Types.L)());
                    edges$$5 = matchValue$$14[1].tail;
                    continue compactify;
                  } else {
                    return (0, _Types.L)();
                  }
                }
              };

              const edgeGroups = compactify(null, edges$0027);
              return (0, _List.foldBack)(function folder(edgeGroup, sofar$$1) {
                return new _tast.DecisionTree(0, "TDSwitch", expr, edgeGroup, sofar$$1, m$$19);
              }, edgeGroups, dflt$$15);
            }

          case 4:
            {
              var $target$$42, rest$$3, tree$$2;

              if (matchValue$$12[0].tail != null) {
                if (matchValue$$12[0].head.fields[0].tag === 5) {
                  $target$$42 = 0;
                } else if (matchValue$$12[1] == null) {
                  $target$$42 = 1;
                  rest$$3 = matchValue$$12[0].tail;
                  tree$$2 = matchValue$$12[0].head.fields[1];
                } else {
                  $target$$42 = 2;
                }
              } else {
                $target$$42 = 2;
              }

              switch ($target$$42) {
                case 0:
                  {
                    return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("DecisionTreeTest.ActivePatternCase should have been eliminated", m$$19));
                  }

                case 1:
                  {
                    return new _tast.DecisionTree(0, "TDSwitch", expr, rest$$3, tree$$2, m$$19);
                  }

                case 2:
                  {
                    return new _tast.DecisionTree(0, "TDSwitch", expr, edges, dflt, m$$19);
                  }
              }
            }
        }
      }
  }
}

function mkFrontiers(investigations, i$$1) {
  return (0, _List.map)(function (tupledArg$$4) {
    return new Frontier(0, "Frontier", i$$1, tupledArg$$4[0], tupledArg$$4[1]);
  }, investigations);
}

function getRuleIndex(_arg1$$6) {
  const i$$2 = _arg1$$6.fields[0] | 0;
  const _valMap = _arg1$$6.fields[2];
  const _active = _arg1$$6.fields[1];
  return i$$2 | 0;
}

function isPatternPartial(p$$8) {
  isPatternPartial: while (true) {
    var $target$$43, ps;

    switch (p$$8.tag) {
      case 0:
        $target$$43 = 1;
        break;

      case 1:
        $target$$43 = 2;
        break;

      case 2:
        $target$$43 = 3;
        break;

      case 3:
        $target$$43 = 4;
        ps = p$$8.fields[0];
        break;

      case 4:
        $target$$43 = 4;
        ps = p$$8.fields[0];
        break;

      case 8:
        $target$$43 = 4;
        ps = p$$8.fields[1];
        break;

      case 7:
        $target$$43 = 4;
        ps = p$$8.fields[1];
        break;

      case 9:
        $target$$43 = 4;
        ps = p$$8.fields[0];
        break;

      case 6:
        $target$$43 = 4;
        ps = p$$8.fields[2];
        break;

      case 10:
        $target$$43 = 4;
        ps = p$$8.fields[2];
        break;

      case 11:
        $target$$43 = 5;
        break;

      case 12:
        $target$$43 = 6;
        break;

      case 13:
        $target$$43 = 7;
        break;

      default:
        $target$$43 = 0;
    }

    switch ($target$$43) {
      case 0:
        {
          const p$$9 = p$$8.fields[1];
          const apinfo$$1 = p$$8.fields[0][4];
          const _m$$8 = p$$8.fields[2];

          if (!(0, _PrettyNaming.ActivePatternInfo$$get_IsTotal)(apinfo$$1)) {
            return true;
          } else {
            p$$8 = p$$9;
            continue isPatternPartial;
          }
        }

      case 1:
        {
          return false;
        }

      case 2:
        {
          return false;
        }

      case 3:
        {
          const p$$10 = p$$8.fields[0];
          p$$8 = p$$10;
          continue isPatternPartial;
        }

      case 4:
        {
          return (0, _List.exists)(isPatternPartial, ps);
        }

      case 5:
        {
          return false;
        }

      case 6:
        {
          return false;
        }

      case 7:
        {
          return false;
        }
    }
  }
}

function erasePartialPatterns(inpp) {
  var $target$$44;

  switch (inpp.tag) {
    case 2:
      $target$$44 = 1;
      break;

    case 3:
      $target$$44 = 2;
      break;

    case 4:
      $target$$44 = 3;
      break;

    case 8:
      $target$$44 = 4;
      break;

    case 7:
      $target$$44 = 5;
      break;

    case 9:
      $target$$44 = 6;
      break;

    case 6:
      $target$$44 = 7;
      break;

    case 10:
      $target$$44 = 8;
      break;

    case 0:
    case 1:
    case 11:
    case 12:
    case 13:
      $target$$44 = 9;
      break;

    default:
      $target$$44 = 0;
  }

  switch ($target$$44) {
    case 0:
      {
        const resTys$$1 = inpp.fields[0][1];
        const p$$12 = inpp.fields[1];
        const m$$20 = inpp.fields[2];
        const idx$$1 = inpp.fields[0][3] | 0;
        const expr$$1 = inpp.fields[0][0];
        const apinfo$$2 = inpp.fields[0][4];
        const apatVrefOpt$$1 = inpp.fields[0][2];

        if ((0, _PrettyNaming.ActivePatternInfo$$get_IsTotal)(apinfo$$2)) {
          return new Pattern(5, "TPat_query", [expr$$1, resTys$$1, apatVrefOpt$$1, idx$$1, apinfo$$2], erasePartialPatterns(p$$12), m$$20);
        } else {
          return new Pattern(3, "TPat_disjs", (0, _Types.L)(), m$$20);
        }
      }

    case 1:
      {
        const x$$13 = inpp.fields[1];
        const p$$13 = inpp.fields[0];
        const m$$21 = inpp.fields[2];
        return new Pattern(2, "TPat_as", erasePartialPatterns(p$$13), x$$13, m$$21);
      }

    case 2:
      {
        const ps$$1 = inpp.fields[0];
        const m$$22 = inpp.fields[1];
        return new Pattern(3, "TPat_disjs", erasePartials(ps$$1), m$$22);
      }

    case 3:
      {
        const ps$$2 = inpp.fields[0];
        const m$$23 = inpp.fields[1];
        return new Pattern(4, "TPat_conjs", erasePartials(ps$$2), m$$23);
      }

    case 4:
      {
        const x$$14 = inpp.fields[2];
        const tupInfo = inpp.fields[0];
        const ps$$3 = inpp.fields[1];
        const m$$24 = inpp.fields[3];
        return new Pattern(8, "TPat_tuple", tupInfo, erasePartials(ps$$3), x$$14, m$$24);
      }

    case 5:
      {
        const x$$15 = inpp.fields[0];
        const ps$$4 = inpp.fields[1];
        const m$$25 = inpp.fields[2];
        return new Pattern(7, "TPat_exnconstr", x$$15, erasePartials(ps$$4), m$$25);
      }

    case 6:
      {
        const x$$16 = inpp.fields[1];
        const ps$$5 = inpp.fields[0];
        const m$$26 = inpp.fields[2];
        return new Pattern(9, "TPat_array", erasePartials(ps$$5), x$$16, m$$26);
      }

    case 7:
      {
        const y = inpp.fields[1];
        const x$$17 = inpp.fields[0];
        const ps$$6 = inpp.fields[2];
        const m$$27 = inpp.fields[3];
        return new Pattern(6, "TPat_unioncase", x$$17, y, erasePartials(ps$$6), m$$27);
      }

    case 8:
      {
        const y$$1 = inpp.fields[1];
        const x$$18 = inpp.fields[0];
        const ps$$7 = inpp.fields[2];
        const m$$28 = inpp.fields[3];
        return new Pattern(10, "TPat_recd", x$$18, y$$1, (0, _List.map)(erasePartialPatterns, ps$$7), m$$28);
      }

    case 9:
      {
        return inpp;
      }
  }
}

function erasePartials(inps) {
  return (0, _List.map)(erasePartialPatterns, inps);
}

const EdgeDiscrim = (0, _Types.declare)(function EdgeDiscrim(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.EdgeDiscrim = EdgeDiscrim;

function getDiscrim(_arg1$$7) {
  const discrim$$3 = _arg1$$7.fields[1];
  return discrim$$3;
}

function CompilePatternBasic(g$$10, denv$$1, amap$$2, exprm, matchm, warnOnUnused, warnOnIncomplete, actionOnFailure, topv, topgtvs, clausesL, inputTy, resultTy) {
  const mbuilder = (0, _TastOps.MatchBuilder$$$$002Ector$$5D7B8C21)(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), exprm);
  (0, _List.iterateIndexed)(function action(_i$$1, c$$27) {
    (0, _TastOps.MatchBuilder$$AddTarget$$Z659D13A7)(mbuilder, TypedMatchClause$$get_Target(c$$27));
  }, clausesL);
  const incompleteMatchClauseOnce = new _Types.FSharpRef(null);

  const getIncompleteMatchClause = function getIncompleteMatchClause(refuted$$1) {
    const matchValue$$16 = incompleteMatchClauseOnce.contents;

    if (matchValue$$16 != null) {
      const c$$28 = matchValue$$16;
      return c$$28;
    } else {
      if (warnOnIncomplete) {
        var $target$$45;

        switch (actionOnFailure.tag) {
          case 0:
          case 1:
            $target$$45 = 0;
            break;

          default:
            $target$$45 = 1;
        }

        switch ($target$$45) {
          case 0:
            {
              const ignoreWithWarning = (0, _Util.equals)(actionOnFailure, new ActionOnFailure(1, "IgnoreWithWarning"));
              const matchValue$$17 = ShowCounterExample(g$$10, denv$$1, matchm, refuted$$1);

              if (matchValue$$17 == null) {
                (0, _ErrorLogger.warning)(new MatchIncomplete(ignoreWithWarning, null, matchm));
              } else if (matchValue$$17[2]) {
                (0, _ErrorLogger.warning)(new EnumMatchIncomplete(ignoreWithWarning, [matchValue$$17[0], matchValue$$17[1]], matchm));
              } else {
                (0, _ErrorLogger.warning)(new MatchIncomplete(ignoreWithWarning, [matchValue$$17[0], matchValue$$17[1]], matchm));
              }

              break;
            }
        }
      }

      const throwExpr = actionOnFailure.tag === 3 ? (0, _TastOps.mkReraise)(matchm, resultTy) : actionOnFailure.tag === 2 ? (0, _TastOps.mkThrow)(matchm, resultTy, (0, _TastOps.exprForVal)(matchm, topv)) : actionOnFailure.tag === 0 ? (0, _TastOps.mkThrow)(matchm, resultTy, (0, _TastOps.mkExnExpr)((0, _TcGlobals.mk_MFCore_tcref)((0, _TcGlobals.TcGlobals$$get_fslibCcu)(g$$10), "MatchFailureException"), (0, _Types.L)((0, _TastOps.mkString)(g$$10, matchm, (0, _range.range$$get_FileName)(matchm)), (0, _Types.L)((0, _TastOps.mkInt)(g$$10, matchm, (0, _range.range$$get_StartLine)(matchm)), (0, _Types.L)((0, _TastOps.mkInt)(g$$10, matchm, (0, _range.range$$get_StartColumn)(matchm)), (0, _Types.L)()))), matchm)) : actionOnFailure.tag === 1 ? (0, _TastOps.mkUnit)(g$$10, matchm) : (0, _TastOps.mkInt)(g$$10, matchm, 0);
      const tg$$1 = new _tast.DecisionTreeTarget(0, "TTarget", (0, _Types.L)(), throwExpr, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
      (0, _TastOps.MatchBuilder$$AddTarget$$Z659D13A7)(mbuilder, tg$$1);
      const clause = new TypedMatchClause(0, "TClause", new Pattern(1, "TPat_wild", matchm), null, tg$$1, matchm);
      incompleteMatchClauseOnce.contents = clause;
      return clause;
    }
  };

  const clausesA = (0, _Array.ofList)(clausesL, Array);
  const nclauses = clausesA.length | 0;

  const GetClause = function GetClause(i$$3, refuted$$2) {
    if (i$$3 < nclauses) {
      return clausesA[i$$3];
    } else if (i$$3 === nclauses) {
      return getIncompleteMatchClause(refuted$$2);
    } else {
      throw new Error("GetClause");
    }
  };

  const GetValsBoundByClause = function GetValsBoundByClause(i$$4, refuted$$3) {
    return TypedMatchClause$$get_BoundVals(GetClause(i$$4, refuted$$3));
  };

  const GetWhenGuardOfClause = function GetWhenGuardOfClause(i$$5, refuted$$4) {
    return TypedMatchClause$$get_GuardExpr(GetClause(i$$5, refuted$$4));
  };

  const genUniquePathId = function genUniquePathId() {
    return (0, _Long.op_UnaryNegation)((0, _tast.newUnique)());
  };

  let patternInput$$10;
  const tyargs$$2 = (0, _List.map)(function (_arg1$$8) {
    return (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$10);
  }, topgtvs);
  const unit_tpinst = (0, _TastOps.mkTyparInst)(topgtvs, tyargs$$2);
  patternInput$$10 = [function (arg20$0040$$2) {
    return GetSubExprOfInput(g$$10, topgtvs, tyargs$$2, unit_tpinst, arg20$0040$$2);
  }, function (t$$8) {
    return getDiscrimOfPattern(g$$10, unit_tpinst, t$$8);
  }];

  const InvestigateFrontiers = function InvestigateFrontiers(refuted$$5) {
    return function (frontiers$$1) {
      if (frontiers$$1.tail != null) {
        const valMap$$1 = frontiers$$1.head.fields[2];
        const rest$$4 = frontiers$$1.tail;
        const i$$6 = frontiers$$1.head.fields[0] | 0;
        const active$$1 = frontiers$$1.head.fields[1];

        if (active$$1.tail == null) {
          return CompileSuccessPointAndGuard(i$$6)(refuted$$5)(valMap$$1)(rest$$4);
        } else {
          const patternInput$$11 = ChooseInvestigationPointLeftToRight(frontiers$$1);
          const subexpr = patternInput$$11.fields[1];
          const path$$3 = patternInput$$11.fields[0];
          const pat = patternInput$$11.fields[2];
          var $target$$46;

          switch (pat.tag) {
            case 2:
            case 8:
            case 1:
            case 3:
            case 4:
            case 10:
              $target$$46 = 0;
              break;

            default:
              $target$$46 = 1;
          }

          switch ($target$$46) {
            case 0:
              {
                throw new Error("Unexpected pattern");
              }

            case 1:
              {
                const patternInput$$12 = ChooseSimultaneousEdges(frontiers$$1)(path$$3);
                const patternInput$$13 = ChoosePreBinder(patternInput$$12[0])(subexpr);
                const patternInput$$14 = CompileSimultaneousSet(frontiers$$1)(path$$3)(refuted$$5)(subexpr)(patternInput$$12[0])(patternInput$$13[0]);
                const defaultTreeOpt = CompileFallThroughTree(patternInput$$12[1])(path$$3)(refuted$$5)(patternInput$$14[0]);
                let finalDecisionTree;
                let inpExprToSwitch;

                if (patternInput$$13[0] == null) {
                  inpExprToSwitch = patternInput$$10[0](subexpr);
                } else {
                  const vexp$$1 = patternInput$$13[0];
                  inpExprToSwitch = vexp$$1;
                }

                const tree$$3 = BuildSwitch(patternInput$$13[0], g$$10, inpExprToSwitch, patternInput$$14[0], defaultTreeOpt, matchm);

                if (patternInput$$13[1] != null) {
                  const bind$$1 = patternInput$$13[1];
                  finalDecisionTree = new _tast.DecisionTree(2, "TDBind", bind$$1, tree$$3);
                } else {
                  finalDecisionTree = tree$$3;
                }

                return finalDecisionTree;
              }
          }
        }
      } else {
        throw new Error("CompilePattern:compile - empty clauses: at least the final clause should always succeed");
      }
    };
  };

  const CompileSuccessPointAndGuard = function CompileSuccessPointAndGuard(i$$7) {
    return function (refuted$$6) {
      return function (valMap$$2) {
        return function (rest$$5) {
          const vs2 = GetValsBoundByClause(i$$7, refuted$$6);
          const es2 = (0, _List.map)(function mapping$$18(v$$18) {
            const matchValue$$18 = (0, _TastOps.ValMap$00601$$TryFind$$7D0CFEA5)(valMap$$2, v$$18);

            if (matchValue$$18 != null) {
              const res = matchValue$$18;
              return res;
            } else {
              return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$patcMissingVariable$$Z721C83C5)((0, _tast.Val$$get_DisplayName)(v$$18)), (0, _tast.Val$$get_Range)(v$$18)));
            }
          }, vs2);
          const rhs$0027 = new _tast.DecisionTree(1, "TDSuccess", es2, i$$7);
          const matchValue$$19 = GetWhenGuardOfClause(i$$7, refuted$$6);

          if (matchValue$$19 == null) {
            return rhs$0027;
          } else {
            const whenExpr = matchValue$$19;
            const m$$29 = (0, _TastOps.Expr$002Eget_Range)(whenExpr);
            const whenExpr$$1 = (0, _TastOps.mkLetsFromBindings)(m$$29, (0, _TastOps.mkInvisibleBinds)(vs2, es2), whenExpr);
            return (0, _TastOps.mkBoolSwitch)(m$$29, whenExpr$$1, rhs$0027, InvestigateFrontiers((0, _Types.L)(new RefutedSet(1, "RefutedWhenClause"), refuted$$6))(rest$$5));
          }
        };
      };
    };
  };

  const ChooseSimultaneousEdges = function ChooseSimultaneousEdges(frontiers$$2) {
    return function (path$$4) {
      return chooseSimultaneousEdgeSet(null, function f$$3(prevOpt$$2, _arg2$$4) {
        var discrimPrev;
        const i$0027 = _arg2$$4.fields[0] | 0;
        const active$0027 = _arg2$$4.fields[1];

        if (isMemOfActives(path$$4, active$0027)) {
          const p$$14 = lookupActive(path$$4, active$0027)[1];
          const matchValue$$20 = patternInput$$10[1](p$$14);

          if (matchValue$$20 == null) {
            return [null, true];
          } else {
            const discrim$$4 = matchValue$$20;

            if (prevOpt$$2 != null ? (discrimPrev = prevOpt$$2.fields[1], discrimsHaveSameSimultaneousClass(g$$10, discrim$$4, discrimPrev)) : true) {
              return [new EdgeDiscrim(0, "EdgeDiscrim", i$0027, discrim$$4, Pattern$$get_Range(p$$14)), true];
            } else {
              return [null, false];
            }
          }
        } else {
          return [null, true];
        }
      }, frontiers$$2);
    };
  };

  const ChoosePreBinder = function ChoosePreBinder(simulSetOfEdgeDiscrims$$1) {
    return function (subexpr$$1) {
      var ucref$$4, _rest$$2, _i$0027$$2, tgty$$1, m$$30, _srcty, _rest, _i$0027;

      var $target$$47, _i$0027$$1, _rest$$1, _srcty$$1, m$$31, tgty$$2;

      if (simulSetOfEdgeDiscrims$$1.tail != null) {
        if (simulSetOfEdgeDiscrims$$1.head.fields[1].tag === 4) {
          if (tgty$$1 = simulSetOfEdgeDiscrims$$1.head.fields[1].fields[1], (m$$30 = simulSetOfEdgeDiscrims$$1.head.fields[2], (_srcty = simulSetOfEdgeDiscrims$$1.head.fields[1].fields[0], (_rest = simulSetOfEdgeDiscrims$$1.tail, (_i$0027 = simulSetOfEdgeDiscrims$$1.head.fields[0] | 0, (0, _TastOps.canUseTypeTestFast)(g$$10, tgty$$1) ? topgtvs.tail == null : false))))) {
            $target$$47 = 0;
            _i$0027$$1 = simulSetOfEdgeDiscrims$$1.head.fields[0];
            _rest$$1 = simulSetOfEdgeDiscrims$$1.tail;
            _srcty$$1 = simulSetOfEdgeDiscrims$$1.head.fields[1].fields[0];
            m$$31 = simulSetOfEdgeDiscrims$$1.head.fields[2];
            tgty$$2 = simulSetOfEdgeDiscrims$$1.head.fields[1].fields[1];
          } else {
            $target$$47 = 1;
          }
        } else {
          $target$$47 = 1;
        }
      } else {
        $target$$47 = 1;
      }

      switch ($target$$47) {
        case 0:
          {
            const patternInput$$15 = (0, _TastOps.mkCompGenLocal)(m$$31, "typeTestResult", tgty$$2);

            if ((0, _tast.Val$$get_IsMemberOrModuleBinding)(topv)) {
              (0, _TastOps.AdjustValToTopVal)(patternInput$$15[0], (0, _tast.Val$$get_DeclaringEntity)(topv), _tast.ValReprInfoModule$$$emptyValData);
            }

            const argexp = patternInput$$10[0](subexpr$$1);
            const appexp = (0, _TastOps.mkIsInst)(tgty$$2, argexp, matchm);
            return [patternInput$$15[1], (0, _TastOps.mkInvisibleBind)(patternInput$$15[0], appexp)];
          }

        case 1:
          {
            var $target$$48, _i$0027$$3, _rest$$3, ucref$$5;

            if (simulSetOfEdgeDiscrims$$1.tail != null) {
              if (simulSetOfEdgeDiscrims$$1.head.fields[1].tag === 0) {
                if (ucref$$4 = simulSetOfEdgeDiscrims$$1.head.fields[1].fields[0], (_rest$$2 = simulSetOfEdgeDiscrims$$1.tail, (_i$0027$$2 = simulSetOfEdgeDiscrims$$1.head.fields[0] | 0, topgtvs.tail == null ? (0, _tast.Entity$$get_IsStructRecordOrUnionTycon)((0, _tast.UnionCaseRef$$get_Tycon)(ucref$$4)) : false))) {
                  $target$$48 = 0;
                  _i$0027$$3 = simulSetOfEdgeDiscrims$$1.head.fields[0];
                  _rest$$3 = simulSetOfEdgeDiscrims$$1.tail;
                  ucref$$5 = simulSetOfEdgeDiscrims$$1.head.fields[1].fields[0];
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
                  const argexp$$1 = patternInput$$10[0](subexpr$$1);
                  const patternInput$$16 = (0, _TastOps.mkExprAddrOfExprAux)(g$$10, true, false, new _TastOps.Mutates(3, "NeverMutates"), argexp$$1, null, matchm);

                  if (patternInput$$16[0] != null) {
                    const v$$20 = patternInput$$16[0][0];
                    const e$$1 = patternInput$$16[0][1];

                    if ((0, _tast.Val$$get_IsMemberOrModuleBinding)(topv)) {
                      (0, _TastOps.AdjustValToTopVal)(v$$20, (0, _tast.Val$$get_DeclaringEntity)(topv), _tast.ValReprInfoModule$$$emptyValData);
                    }

                    return [patternInput$$16[1], (0, _TastOps.mkInvisibleBind)(v$$20, e$$1)];
                  } else {
                    return [patternInput$$16[1], null];
                  }
                }

              case 1:
                {
                  var $target$$49, apinfo$$3, m$$32, pexp$$1, resTys$$2;

                  if (simulSetOfEdgeDiscrims$$1.tail != null) {
                    if (simulSetOfEdgeDiscrims$$1.head.fields[1].tag === 5) {
                      $target$$49 = 0;
                      apinfo$$3 = simulSetOfEdgeDiscrims$$1.head.fields[1].fields[4];
                      m$$32 = simulSetOfEdgeDiscrims$$1.head.fields[2];
                      pexp$$1 = simulSetOfEdgeDiscrims$$1.head.fields[1].fields[0];
                      resTys$$2 = simulSetOfEdgeDiscrims$$1.head.fields[1].fields[1];
                    } else {
                      $target$$49 = 1;
                    }
                  } else {
                    $target$$49 = 1;
                  }

                  switch ($target$$49) {
                    case 0:
                      {
                        if (!(topgtvs.tail == null)) {
                          (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("Unexpected generalized type variables when compiling an active pattern", m$$32));
                        }

                        const rty = (0, _TastOps.ActivePatternInfo$002EResultType)(apinfo$$3, g$$10, m$$32, resTys$$2);
                        const patternInput$$17 = (0, _TastOps.mkCompGenLocal)(m$$32, "activePatternResult" + (0, _Long.toString)((0, _tast.newUnique)()), rty);

                        if ((0, _tast.Val$$get_IsMemberOrModuleBinding)(topv)) {
                          (0, _TastOps.AdjustValToTopVal)(patternInput$$17[0], (0, _tast.Val$$get_DeclaringEntity)(topv), _tast.ValReprInfoModule$$$emptyValData);
                        }

                        const argexp$$2 = patternInput$$10[0](subexpr$$1);
                        const appexp$$1 = (0, _TastOps.mkApps)(g$$10, [pexp$$1, (0, _TastOps.tyOfExpr)(g$$10, pexp$$1)], (0, _Types.L)(), (0, _Types.L)(argexp$$2, (0, _Types.L)()), m$$32);
                        return [patternInput$$17[1], (0, _TastOps.mkInvisibleBind)(patternInput$$17[0], appexp$$1)];
                      }

                    case 1:
                      {
                        return [null, null];
                      }
                  }
                }
            }
          }
      }
    };
  };

  const CompileSimultaneousSet = function CompileSimultaneousSet(frontiers$$3) {
    return function (path$$5) {
      return function (refuted$$7) {
        return function (subexpr$$2) {
          return function (simulSetOfEdgeDiscrims$$2) {
            return function (inpExprOpt$$2) {
              return (0, _illib.List$$$collectFold)(function f$$4(taken, _arg3$$1) {
                var ucref$$6, tinst$$5;
                const m$$33 = _arg3$$1.fields[2];
                const i$0027$$1 = _arg3$$1.fields[0] | 0;
                const discrim$$5 = _arg3$$1.fields[1];

                if ((0, _List.exists)(function (d2$$3) {
                  return isDiscrimSubsumedBy(g$$10, amap$$2, m$$33, discrim$$5, d2$$3);
                }, taken)) {
                  return [(0, _Types.L)(), taken];
                } else {
                  let patternInput$$19;
                  var $target$$50, tinst$$6, ucref$$7;

                  if (discrim$$5.tag === 0) {
                    if (ucref$$6 = discrim$$5.fields[0], (tinst$$5 = discrim$$5.fields[1], (((topgtvs.tail == null ? !(0, _tast.Val$$get_IsMemberOrModuleBinding)(topv) : false) ? !(0, _tast.Entity$$get_IsStructRecordOrUnionTycon)((0, _tast.UnionCaseRef$$get_Tycon)(ucref$$6)) : false) ? (0, _List.length)((0, _tast.UnionCase$$get_RecdFields)((0, _tast.UnionCaseRef$$get_UnionCase)(ucref$$6))) >= 1 : false) ? (0, _tast.Entity$$get_UnionCasesArray)((0, _tast.UnionCaseRef$$get_Tycon)(ucref$$6)).length > 1 : false)) {
                      $target$$50 = 0;
                      tinst$$6 = discrim$$5.fields[1];
                      ucref$$7 = discrim$$5.fields[0];
                    } else {
                      $target$$50 = 1;
                    }
                  } else {
                    $target$$50 = 1;
                  }

                  switch ($target$$50) {
                    case 0:
                      {
                        const patternInput$$18 = (0, _TastOps.mkCompGenLocal)(m$$33, "unionCase", (0, _TastOps.mkProvenUnionCaseTy)(ucref$$7, tinst$$6));
                        const argexp$$3 = patternInput$$10[0](subexpr$$2);
                        const appexp$$2 = (0, _TastOps.mkUnionCaseProof)(argexp$$3, ucref$$7, tinst$$6, m$$33);
                        patternInput$$19 = [patternInput$$18[1], (0, _TastOps.mkInvisibleBind)(patternInput$$18[0], appexp$$2)];
                        break;
                      }

                    case 1:
                      {
                        patternInput$$19 = [null, null];
                        break;
                      }
                  }

                  let discrim$0027;

                  if (discrim$$5.tag === 5) {
                    const resTys$$3 = discrim$$5.fields[1];
                    const idx$$2 = discrim$$5.fields[3] | 0;
                    const apinfo$$4 = discrim$$5.fields[4];
                    const _pexp = discrim$$5.fields[0];
                    const _apatVrefOpt = discrim$$5.fields[2];
                    const aparity = (0, _List.length)((0, _TastOps.ActivePatternInfo$002Eget_Names)(apinfo$$4)) | 0;
                    const total = (0, _PrettyNaming.ActivePatternInfo$$get_IsTotal)(apinfo$$4);

                    if (!total ? aparity > 1 : false) {
                      (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$patcPartialActivePatternsGenerateOneResult)(), m$$33));
                    }

                    discrim$0027 = !total ? new _tast.DecisionTreeTest(0, "UnionCase", (0, _TastOps.mkSomeCase)(g$$10), resTys$$3) : aparity <= 1 ? new _tast.DecisionTreeTest(2, "Const", new _tast.Const(16, "Unit")) : new _tast.DecisionTreeTest(0, "UnionCase", (0, _TastOps.mkChoiceCaseRef)(g$$10, m$$33, aparity, idx$$2), resTys$$3);
                  } else {
                    discrim$0027 = discrim$$5;
                  }

                  const investigation = new InvestigationPoint(0, "Investigation", i$0027$$1, discrim$$5, path$$5);
                  const frontiers$$4 = (0, _List.collect)(GenerateNewFrontiersAfterSucccessfulInvestigation(inpExprOpt$$2)(patternInput$$19[0])(investigation), frontiers$$3);
                  const tree$$4 = InvestigateFrontiers(refuted$$7)(frontiers$$4);
                  let tree$$5;

                  if (patternInput$$19[1] != null) {
                    const bind$$2 = patternInput$$19[1];
                    tree$$5 = new _tast.DecisionTree(2, "TDBind", bind$$2, tree$$4);
                  } else {
                    tree$$5 = tree$$4;
                  }

                  const edge$$1 = new _tast.DecisionTreeCase(0, "TCase", discrim$0027, tree$$5);
                  return [(0, _Types.L)(edge$$1, (0, _Types.L)()), (0, _Types.L)(discrim$$5, taken)];
                }
              }, (0, _Types.L)(), simulSetOfEdgeDiscrims$$2);
            };
          };
        };
      };
    };
  };

  const CompileFallThroughTree = function CompileFallThroughTree(fallthroughPathFrontiers$$1) {
    return function (path$$6) {
      return function (refuted$$8) {
        return function (simulSetOfCases$$1) {
          var ucref$$8, _b;

          const simulSetOfDiscrims = (0, _List.map)(function mapping$$20(c$$29) {
            return (0, _tast.DecisionTreeCase$$get_Discriminator)(c$$29);
          }, simulSetOfCases$$1);

          const isRefuted = function isRefuted(_arg5$$1) {
            const active$0027$$1 = _arg5$$1.fields[1];

            const _i$0027$$4 = _arg5$$1.fields[0] | 0;

            if (isMemOfActives(path$$6, active$0027$$1)) {
              const p$$15 = lookupActive(path$$6, active$0027$$1)[1];
              const matchValue$$21 = patternInput$$10[1](p$$15);

              if (matchValue$$21 == null) {
                return false;
              } else {
                const discrim$$6 = matchValue$$21;
                return (0, _List.exists)(function (d2$$4) {
                  return isDiscrimSubsumedBy(g$$10, amap$$2, exprm, discrim$$6, d2$$4);
                }, simulSetOfDiscrims);
              }
            } else {
              return false;
            }
          };

          var $target$$51, _b$$1;

          if (simulSetOfDiscrims.tail != null) {
            if (simulSetOfDiscrims.head.tag === 2) {
              if (simulSetOfDiscrims.head.fields[0].tag === 0) {
                if (_b = simulSetOfDiscrims.head.fields[0].fields[0], (0, _List.length)(simulSetOfCases$$1) === 2) {
                  $target$$51 = 0;
                  _b$$1 = simulSetOfDiscrims.head.fields[0].fields[0];
                } else {
                  $target$$51 = 1;
                }
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
                return null;
              }

            case 1:
              {
                var $target$$52, ucref$$9;

                if (simulSetOfDiscrims.tail != null) {
                  if (simulSetOfDiscrims.head.tag === 2) {
                    if (simulSetOfDiscrims.head.fields[0].tag === 16) {
                      $target$$52 = 0;
                    } else {
                      $target$$52 = 2;
                    }
                  } else if (simulSetOfDiscrims.head.tag === 0) {
                    if (ucref$$8 = simulSetOfDiscrims.head.fields[0], (0, _List.length)(simulSetOfCases$$1) === (0, _tast.EntityRef$$get_UnionCasesArray)((0, _tast.UnionCaseRef$$get_TyconRef)(ucref$$8)).length) {
                      $target$$52 = 1;
                      ucref$$9 = simulSetOfDiscrims.head.fields[0];
                    } else {
                      $target$$52 = 2;
                    }
                  } else {
                    $target$$52 = 2;
                  }
                } else {
                  $target$$52 = 2;
                }

                switch ($target$$52) {
                  case 0:
                    {
                      return null;
                    }

                  case 1:
                    {
                      return null;
                    }

                  case 2:
                    {
                      var $target$$53;

                      if (simulSetOfDiscrims.tail != null) {
                        if (simulSetOfDiscrims.head.tag === 5) {
                          $target$$53 = 0;
                        } else {
                          $target$$53 = 1;
                        }
                      } else {
                        $target$$53 = 1;
                      }

                      switch ($target$$53) {
                        case 0:
                          {
                            return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("DecisionTreeTest.ActivePatternCase should have been eliminated", matchm));
                          }

                        case 1:
                          {
                            const fallthroughPathFrontiers$$2 = (0, _List.filter)(function ($arg$$9) {
                              return !isRefuted($arg$$9);
                            }, fallthroughPathFrontiers$$1);
                            const refuted$$9 = (0, _Types.L)(new RefutedSet(0, "RefutedInvestigation", path$$6, simulSetOfDiscrims), refuted$$8);
                            return fallthroughPathFrontiers$$2.tail == null ? null : InvestigateFrontiers(refuted$$9)(fallthroughPathFrontiers$$2);
                          }
                      }
                    }
                }
              }
          }
        };
      };
    };
  };

  const GenerateNewFrontiersAfterSucccessfulInvestigation = function GenerateNewFrontiersAfterSucccessfulInvestigation(inpExprOpt$$3) {
    return function (resPostBindOpt$$1) {
      return function (_arg2$$5) {
        return function (_arg1$$9) {
          var ucref2$$2, tinst$$7, n$$5, tgtTy, _srcTy, tgtTy2, _srcTy$$2, c2$$5;

          const path$$7 = _arg2$$5.fields[2];
          const i$0027$$2 = _arg2$$5.fields[0] | 0;
          const discrim$$7 = _arg2$$5.fields[1];
          const frontier = _arg1$$9;
          const valMap$$3 = frontier.fields[2];
          const i$$8 = frontier.fields[0] | 0;
          const active$$2 = frontier.fields[1];

          if (isMemOfActives(path$$7, active$$2)) {
            const patternInput$$20 = lookupActive(path$$7, active$$2);
            const ve = patternInput$$20[0].fields[1];
            const accessf$$2 = patternInput$$20[0].fields[0];

            const mkSubFrontiers = function mkSubFrontiers(path$$8, accessf$0027, active$0027$$2, argpats, pathBuilder) {
              const mkSubActive = function mkSubActive(j$$3, p$$16) {
                const newSubExpr = new SubExprOfInput(0, "SubExpr", (0, _Util.uncurry)(2, (0, _Util.partialApply)(2, accessf$0027, [j$$3])), ve);
                const newPath = pathBuilder(path$$8, j$$3);
                return new Active(0, "Active", newPath, newSubExpr, p$$16);
              };

              const newActives = (0, _List.mapIndexed)(mkSubActive, argpats);
              const investigations$$1 = BindProjectionPatterns(newActives)([active$0027$$2, valMap$$3]);
              return mkFrontiers(investigations$$1, i$$8);
            };

            const active$0027$$3 = removeActive(path$$7, active$$2);
            var $target$$59;

            if (patternInput$$20[1].tag === 1) {
              $target$$59 = 0;
            } else if (patternInput$$20[1].tag === 2) {
              $target$$59 = 0;
            } else if (patternInput$$20[1].tag === 8) {
              $target$$59 = 0;
            } else if (patternInput$$20[1].tag === 3) {
              $target$$59 = 0;
            } else if (patternInput$$20[1].tag === 4) {
              $target$$59 = 0;
            } else if (patternInput$$20[1].tag === 10) {
              $target$$59 = 0;
            } else if (patternInput$$20[1].tag === 5) {
              $target$$59 = 1;
            } else if (patternInput$$20[1].tag === 6) {
              $target$$59 = 2;
            } else if (patternInput$$20[1].tag === 9) {
              $target$$59 = 3;
            } else if (patternInput$$20[1].tag === 7) {
              $target$$59 = 4;
            } else if (patternInput$$20[1].tag === 13) {
              $target$$59 = 5;
            } else if (patternInput$$20[1].tag === 12) {
              $target$$59 = 6;
            } else if (patternInput$$20[1].tag === 0) {
              $target$$59 = 7;
            } else {
              $target$$59 = 8;
            }

            switch ($target$$59) {
              case 0:
                {
                  throw new Error("Unexpected projection pattern");
                }

              case 1:
                {
                  const resTys$$4 = patternInput$$20[1].fields[0][1];
                  const p$$17 = patternInput$$20[1].fields[1];
                  const m$$34 = patternInput$$20[1].fields[2];
                  const idx$$3 = patternInput$$20[1].fields[0][3] | 0;
                  const apinfo$$5 = patternInput$$20[1].fields[0][4];
                  const apatVrefOpt$$2 = patternInput$$20[1].fields[0][2];

                  if ((0, _PrettyNaming.ActivePatternInfo$$get_IsTotal)(apinfo$$5)) {
                    let hasParam;

                    if (apatVrefOpt$$2 != null) {
                      const vref$$12 = apatVrefOpt$$2[0];
                      hasParam = (0, _TastOps.doesActivePatternHaveFreeTypars)(g$$10, vref$$12);
                    } else {
                      hasParam = true;
                    }

                    if ((hasParam ? i$$8 === i$0027$$2 : false) ? true : discrimsEq(g$$10, discrim$$7, patternInput$$10[1](patternInput$$20[1]))) {
                      const aparity$$1 = (0, _List.length)((0, _TastOps.ActivePatternInfo$002Eget_Names)(apinfo$$5)) | 0;

                      const accessf$0027$$1 = function accessf$0027$$1(j$$4, tpinst$$1, _e$0027) {
                        if (aparity$$1 <= 1) {
                          return inpExprOpt$$3;
                        } else {
                          const ucref$$10 = (0, _TastOps.mkChoiceCaseRef)(g$$10, m$$34, aparity$$1, idx$$3);
                          return (0, _TastOps.mkUnionCaseFieldGetUnprovenViaExprAddr)(inpExprOpt$$3, ucref$$10, (0, _TastOps.instTypes)(tpinst$$1, resTys$$4), j$$4, exprm);
                        }
                      };

                      return mkSubFrontiers(path$$7, accessf$0027$$1, active$0027$$3, (0, _Types.L)(p$$17, (0, _Types.L)()), function (path$$9, j$$5) {
                        return new Path(0, "PathQuery", path$$9, (0, _Long.fromInteger)(j$$5, false, 2));
                      });
                    } else if (hasParam) {
                      return (0, _Types.L)(frontier, (0, _Types.L)());
                    } else {
                      return (0, _Types.L)();
                    }
                  } else if (i$$8 === i$0027$$2) {
                    const accessf$0027$$2 = function accessf$0027$$2(_j$$1, tpinst$$2, _arg6$$1) {
                      return (0, _TastOps.mkUnionCaseFieldGetUnprovenViaExprAddr)(inpExprOpt$$3, (0, _TastOps.mkSomeCase)(g$$10), (0, _TastOps.instTypes)(tpinst$$2, resTys$$4), 0, exprm);
                    };

                    return mkSubFrontiers(path$$7, accessf$0027$$2, active$0027$$3, (0, _Types.L)(p$$17, (0, _Types.L)()), function (path$$10, j$$6) {
                      return new Path(0, "PathQuery", path$$10, (0, _Long.fromInteger)(j$$6, false, 2));
                    });
                  } else {
                    return (0, _Types.L)(frontier, (0, _Types.L)());
                  }
                }

              case 2:
                {
                  const ucref1$$2 = patternInput$$20[1].fields[0];
                  const tyargs$$3 = patternInput$$20[1].fields[1];
                  const argpats$$1 = patternInput$$20[1].fields[2];
                  var $target$$60, tinst$$8, ucref2$$3;

                  if (discrim$$7.tag === 0) {
                    if (ucref2$$2 = discrim$$7.fields[0], (tinst$$7 = discrim$$7.fields[1], (0, _TcGlobals.TcGlobals$$unionCaseRefEq)(g$$10, ucref1$$2, ucref2$$2))) {
                      $target$$60 = 0;
                      tinst$$8 = discrim$$7.fields[1];
                      ucref2$$3 = discrim$$7.fields[0];
                    } else {
                      $target$$60 = 1;
                    }
                  } else {
                    $target$$60 = 1;
                  }

                  switch ($target$$60) {
                    case 0:
                      {
                        const accessf$0027$$3 = function accessf$0027$$3(j$$7, tpinst$$3, exprIn) {
                          if (resPostBindOpt$$1 == null) {
                            let exprIn$$1;

                            if (inpExprOpt$$3 == null) {
                              exprIn$$1 = accessf$$2(tpinst$$3, exprIn);
                            } else {
                              const addrexp$$1 = inpExprOpt$$3;
                              exprIn$$1 = addrexp$$1;
                            }

                            return (0, _TastOps.mkUnionCaseFieldGetUnprovenViaExprAddr)(exprIn$$1, ucref1$$2, (0, _TastOps.instTypes)(tpinst$$3, tyargs$$3), j$$7, exprm);
                          } else {
                            const e$$2 = resPostBindOpt$$1;
                            return (0, _TastOps.mkUnionCaseFieldGetProvenViaExprAddr)(e$$2, ucref1$$2, tinst$$8, j$$7, exprm);
                          }
                        };

                        return mkSubFrontiers(path$$7, accessf$0027$$3, active$0027$$3, argpats$$1, function (path$$11, j$$8) {
                          return new Path(4, "PathUnionConstr", path$$11, ucref1$$2, tyargs$$3, j$$8);
                        });
                      }

                    case 1:
                      {
                        return discrim$$7.tag === 0 ? (0, _Types.L)() : (0, _Types.L)(frontier, (0, _Types.L)());
                      }
                  }
                }

              case 3:
                {
                  const ty$$7 = patternInput$$20[1].fields[1];
                  const argpats$$2 = patternInput$$20[1].fields[0];
                  var $target$$61, n$$6;

                  if (discrim$$7.tag === 1) {
                    if (n$$5 = discrim$$7.fields[0] | 0, (0, _List.length)(argpats$$2) === n$$5) {
                      $target$$61 = 0;
                      n$$6 = discrim$$7.fields[0];
                    } else {
                      $target$$61 = 1;
                    }
                  } else {
                    $target$$61 = 1;
                  }

                  switch ($target$$61) {
                    case 0:
                      {
                        const accessf$0027$$4 = function accessf$0027$$4(j$$9, tpinst$$4, exprIn$$2) {
                          return (0, _TastOps.mkCallArrayGet)(g$$10, exprm, ty$$7, accessf$$2(tpinst$$4, exprIn$$2), (0, _TastOps.mkInt)(g$$10, exprm, j$$9));
                        };

                        return mkSubFrontiers(path$$7, accessf$0027$$4, active$0027$$3, argpats$$2, function (path$$12, j$$10) {
                          return new Path(5, "PathArray", path$$12, ty$$7, (0, _List.length)(argpats$$2), j$$10);
                        });
                      }

                    case 1:
                      {
                        return discrim$$7.tag === 1 ? (0, _Types.L)() : (0, _Types.L)(frontier, (0, _Types.L)());
                      }
                  }
                }

              case 4:
                {
                  const ecref$$1 = patternInput$$20[1].fields[0];
                  const argpats$$3 = patternInput$$20[1].fields[1];

                  var $target$$62, _srcTy$$1, tgtTy$$1;

                  if (discrim$$7.tag === 4) {
                    if (tgtTy = discrim$$7.fields[1], (_srcTy = discrim$$7.fields[0], (0, _TastOps.typeEquiv)(g$$10, (0, _TastOps.mkAppTy)(ecref$$1, (0, _Types.L)()), tgtTy))) {
                      $target$$62 = 0;
                      _srcTy$$1 = discrim$$7.fields[0];
                      tgtTy$$1 = discrim$$7.fields[1];
                    } else {
                      $target$$62 = 1;
                    }
                  } else {
                    $target$$62 = 1;
                  }

                  switch ($target$$62) {
                    case 0:
                      {
                        const accessf$0027$$5 = function accessf$0027$$5(j$$11, tpinst$$5, exprIn$$3) {
                          return (0, _TastOps.mkExnCaseFieldGet)(accessf$$2(tpinst$$5, exprIn$$3), ecref$$1, j$$11, exprm);
                        };

                        return mkSubFrontiers(path$$7, accessf$0027$$5, active$0027$$3, argpats$$3, function (path$$13, j$$12) {
                          return new Path(6, "PathExnConstr", path$$13, ecref$$1, j$$12);
                        });
                      }

                    case 1:
                      {
                        return (0, _Types.L)(frontier, (0, _Types.L)());
                      }
                  }
                }

              case 5:
                {
                  const tgtTy1 = patternInput$$20[1].fields[1];
                  const pbindOpt = patternInput$$20[1].fields[2];
                  const _srcty$$2 = patternInput$$20[1].fields[0];

                  var $target$$63, _srcTy$$3, tgtTy2$$1;

                  if (discrim$$7.tag === 4) {
                    if (tgtTy2 = discrim$$7.fields[1], (_srcTy$$2 = discrim$$7.fields[0], (0, _TastOps.typeEquiv)(g$$10, tgtTy1, tgtTy2))) {
                      $target$$63 = 0;
                      _srcTy$$3 = discrim$$7.fields[0];
                      tgtTy2$$1 = discrim$$7.fields[1];
                    } else {
                      $target$$63 = 1;
                    }
                  } else {
                    $target$$63 = 1;
                  }

                  switch ($target$$63) {
                    case 0:
                      {
                        if (pbindOpt == null) {
                          return (0, _Types.L)(new Frontier(0, "Frontier", i$$8, active$0027$$3, valMap$$3), (0, _Types.L)());
                        } else {
                          const pbind = pbindOpt;

                          const accessf$0027$$6 = function accessf$0027$$6(tpinst$$6, exprIn$$4) {
                            if (inpExprOpt$$3 != null) {
                              const e$$3 = inpExprOpt$$3;
                              return e$$3;
                            } else {
                              return (0, _TastOps.mkCallUnboxFast)(g$$10, exprm, (0, _TastOps.instType)(tpinst$$6, tgtTy1), accessf$$2(tpinst$$6, exprIn$$4));
                            }
                          };

                          const patternInput$$21 = BindSubExprOfInput(g$$10, amap$$2, topgtvs, pbind, exprm, new SubExprOfInput(0, "SubExpr", accessf$0027$$6, ve));
                          return (0, _Types.L)(new Frontier(0, "Frontier", i$$8, active$0027$$3, (0, _TastOps.ValMap$00601$$Add)(valMap$$3, patternInput$$21[0], patternInput$$21[1])), (0, _Types.L)());
                        }
                      }

                    case 1:
                      {
                        return (0, _Types.L)(frontier, (0, _Types.L)());
                      }
                  }
                }

              case 6:
                {
                  return discrim$$7.tag === 3 ? (0, _Types.L)(new Frontier(0, "Frontier", i$$8, active$0027$$3, valMap$$3), (0, _Types.L)()) : (0, _Types.L)(frontier, (0, _Types.L)());
                }

              case 7:
                {
                  const c1$$5 = patternInput$$20[1].fields[0];
                  var $target$$64, c2$$6;

                  if (discrim$$7.tag === 2) {
                    if (c2$$5 = discrim$$7.fields[0], (0, _Util.equals)(c1$$5, c2$$5)) {
                      $target$$64 = 0;
                      c2$$6 = discrim$$7.fields[0];
                    } else {
                      $target$$64 = 1;
                    }
                  } else {
                    $target$$64 = 1;
                  }

                  switch ($target$$64) {
                    case 0:
                      {
                        return (0, _Types.L)(new Frontier(0, "Frontier", i$$8, active$0027$$3, valMap$$3), (0, _Types.L)());
                      }

                    case 1:
                      {
                        return discrim$$7.tag === 2 ? (0, _Types.L)() : (0, _Types.L)(frontier, (0, _Types.L)());
                      }
                  }
                }

              case 8:
                {
                  throw new Error("pattern compilation: GenerateNewFrontiersAfterSucccessfulInvestigation");
                }
            }
          } else {
            return (0, _Types.L)(frontier, (0, _Types.L)());
          }
        };
      };
    };
  };

  const BindProjectionPattern = function BindProjectionPattern(_arg4$$1) {
    return function (_arg3$$2) {
      var vref$$13;
      const inp = _arg4$$1;
      const subExpr = inp.fields[1];
      const path$$14 = inp.fields[0];
      const p$$18 = inp.fields[2];
      const s$$2 = _arg3$$2;
      const accValMap = s$$2[1];
      const accActive = s$$2[0];
      const ve$$1 = subExpr.fields[1];
      const accessf$$3 = subExpr.fields[0];

      const mkSubActive$$1 = function mkSubActive$$1(pathBuilder$$1, accessf$0027$$7, j$$13, p$0027) {
        return new Active(0, "Active", pathBuilder$$1(path$$14, j$$13), new SubExprOfInput(0, "SubExpr", (0, _Util.uncurry)(2, (0, _Util.partialApply)(2, accessf$0027$$7, [j$$13])), ve$$1), p$0027);
      };

      switch (p$$18.tag) {
        case 1:
          {
            return BindProjectionPatterns((0, _Types.L)())(s$$2);
          }

        case 2:
          {
            const pbind$$1 = p$$18.fields[1];
            const p$0027$$1 = p$$18.fields[0];
            const m$$35 = p$$18.fields[2];
            const patternInput$$22 = BindSubExprOfInput(g$$10, amap$$2, topgtvs, pbind$$1, m$$35, subExpr);
            return BindProjectionPattern(new Active(0, "Active", path$$14, subExpr, p$0027$$1))([accActive, (0, _TastOps.ValMap$00601$$Add)(accValMap, patternInput$$22[0], patternInput$$22[1])]);
          }

        case 8:
          {
            const tyargs$$4 = p$$18.fields[2];
            const tupInfo$$1 = p$$18.fields[0];
            const ps$$8 = p$$18.fields[1];
            const _m$$9 = p$$18.fields[3];

            const accessf$0027$$8 = function accessf$0027$$8(j$$14, tpinst$$7, subExpr$0027$$1) {
              return (0, _TastOps.mkTupleFieldGet)(g$$10, tupInfo$$1, accessf$$3(tpinst$$7, subExpr$0027$$1), (0, _TastOps.instTypes)(tpinst$$7, tyargs$$4), j$$14, exprm);
            };

            const pathBuilder$$2 = function pathBuilder$$2(path$$15, j$$15) {
              return new Path(2, "PathTuple", path$$15, tyargs$$4, j$$15);
            };

            const newActives$$1 = (0, _List.mapIndexed)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, mkSubActive$$1, [pathBuilder$$2, accessf$0027$$8])), ps$$8);
            return BindProjectionPatterns(newActives$$1)(s$$2);
          }

        case 10:
          {
            const tinst$$9 = p$$18.fields[1];
            const tcref$$5 = p$$18.fields[0];
            const ps$$9 = p$$18.fields[2];
            const _m$$10 = p$$18.fields[3];
            const newActives$$2 = (0, _List.mapIndexed2)(function mapping$$21(j$$16, p$$19, fref) {
              const accessf$0027$$9 = function accessf$0027$$9(fref$$1, _j$$2, tpinst$$8, exprIn$$6) {
                return (0, _TastOps.mkRecdFieldGet)(g$$10, accessf$$3(tpinst$$8, exprIn$$6), fref$$1, (0, _TastOps.instTypes)(tpinst$$8, tinst$$9), exprm);
              };

              const pathBuilder$$3 = function pathBuilder$$3(path$$16, j$$17) {
                return new Path(3, "PathRecd", path$$16, tcref$$5, tinst$$9, j$$17);
              };

              return mkSubActive$$1(pathBuilder$$3, (0, _Util.uncurry)(3, (0, _Util.partialApply)(3, accessf$0027$$9, [fref])), j$$16, p$$19);
            }, ps$$9, (0, _tast.EntityRef$$get_TrueInstanceFieldsAsRefList)(tcref$$5));
            return BindProjectionPatterns(newActives$$2)(s$$2);
          }

        case 3:
          {
            const ps$$10 = p$$18.fields[0];
            const _m$$11 = p$$18.fields[1];
            return (0, _List.collect)(function (p$$20) {
              return BindProjectionPattern(new Active(0, "Active", path$$14, subExpr, p$$20))(s$$2);
            }, ps$$10);
          }

        case 4:
          {
            const ps$$11 = p$$18.fields[0];
            const _m$$12 = p$$18.fields[1];
            const newActives$$3 = (0, _List.mapIndexed)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, mkSubActive$$1, [function (path$$17, j$$18) {
              return new Path(1, "PathConj", path$$17, j$$18);
            }, (0, _Util.uncurry)(3, function (_j$$3) {
              return (0, _Util.curry)(2, accessf$$3);
            })])), ps$$11);
            return BindProjectionPatterns(newActives$$3)(s$$2);
          }

        case 11:
          {
            const m$$36 = p$$18.fields[2];
            const c2$$7 = p$$18.fields[1];
            const c1$$6 = p$$18.fields[0];
            const res$$1 = new _Types.FSharpRef((0, _Types.L)());

            for (let i$$9 = c1$$6.charCodeAt(0); i$$9 <= c2$$7.charCodeAt(0); i$$9++) {
              res$$1.contents = (0, _List.append)(BindProjectionPattern(new Active(0, "Active", path$$14, subExpr, new Pattern(0, "TPat_const", new _tast.Const(13, "Char", String.fromCharCode(i$$9)), m$$36)))(s$$2), res$$1.contents);
            }

            return res$$1.contents;
          }

        case 5:
          {
            const apatVrefOpt$$3 = p$$18.fields[0][2];
            const uniqId = apatVrefOpt$$3 != null ? (vref$$13 = apatVrefOpt$$3[0], !(0, _TastOps.doesActivePatternHaveFreeTypars)(g$$10, vref$$13)) ? (0, _tast.ValRef$$get_Stamp)(apatVrefOpt$$3[0]) : genUniquePathId() : genUniquePathId();
            const inp$$1 = new Active(0, "Active", new Path(0, "PathQuery", path$$14, uniqId), subExpr, p$$18);
            return (0, _Types.L)([(0, _Types.L)(inp$$1, accActive), accValMap], (0, _Types.L)());
          }

        default:
          {
            return (0, _Types.L)([(0, _Types.L)(inp, accActive), accValMap], (0, _Types.L)());
          }
      }
    };
  };

  const BindProjectionPatterns = function BindProjectionPatterns(ps$$12) {
    return function (s$$3) {
      return (0, _List.foldBack)(function (p$$21, sofar$$2) {
        return (0, _List.collect)(BindProjectionPattern(p$$21), sofar$$2);
      }, ps$$12, (0, _Types.L)(s$$3, (0, _Types.L)()));
    };
  };

  const frontiers$$5 = (0, _List.append)((0, _List.concat)((0, _List.mapIndexed)(function mapping$$22(i$$10, c$$30) {
    const initialSubExpr = new SubExprOfInput(0, "SubExpr", function (_tpinst, x$$19) {
      return x$$19;
    }, [(0, _TastOps.exprForVal)((0, _tast.Val$$get_Range)(topv), topv), topv]);
    const investigations$$2 = BindProjectionPattern(new Active(0, "Active", new Path(7, "PathEmpty", inputTy), initialSubExpr, TypedMatchClause$$get_Pattern(c$$30)))([(0, _Types.L)(), (0, _TastOps.ValMap$00601$$$get_Empty)()]);
    return mkFrontiers(investigations$$2, i$$10);
  }, clausesL)), mkFrontiers((0, _Types.L)([(0, _Types.L)(), (0, _TastOps.ValMap$00601$$$get_Empty)()], (0, _Types.L)()), nclauses));
  const dtree = InvestigateFrontiers((0, _Types.L)())(frontiers$$5);
  const targets = (0, _TastOps.MatchBuilder$$CloseTargets)(mbuilder);

  if (warnOnUnused) {
    const used = (0, _Set.createMutable)((0, _TastOps.accTargetsOfDecisionTree)(dtree, (0, _Types.L)()), (0, _Util.comparerFromEqualityComparer)((0, _FSharp.HashIdentity$$$Structural)()));
    (0, _List.iterateIndexed)(function action$$1(i$$11, c$$31) {
      if (!used.has(i$$11)) {
        (0, _ErrorLogger.warning)(new RuleNeverMatched(TypedMatchClause$$get_Range(c$$31)));
      }
    }, clausesL);
  }

  return [dtree, targets];
}

function isPartialOrWhenClause(c$$32) {
  if (isPatternPartial(TypedMatchClause$$get_Pattern(c$$32))) {
    return true;
  } else {
    return TypedMatchClause$$get_GuardExpr(c$$32) != null;
  }
}

function CompilePattern(g$$11, denv$$2, amap$$3, exprm$$1, matchm$$1, warnOnUnused$$1, actionOnFailure$$1, topv$$1, topgtvs$$1, clausesL$$1, inputTy$$1, resultTy$$1) {
  if ((0, _List.exists)(isPartialOrWhenClause, clausesL$$1)) {
    const warnOnUnused$$2 = false;
    const warnOnIncomplete$$1 = true;
    const clausesPretendAllPartialFail = (0, _List.collect)(function (_arg1$$10) {
      const whenOpt$$1 = _arg1$$10.fields[1];
      const tg$$2 = _arg1$$10.fields[2];
      const p$$22 = _arg1$$10.fields[0];
      const m$$37 = _arg1$$10.fields[3];
      return (0, _Types.L)(new TypedMatchClause(0, "TClause", erasePartialPatterns(p$$22), whenOpt$$1, tg$$2, m$$37), (0, _Types.L)());
    }, clausesL$$1);
    CompilePatternBasic(g$$11, denv$$2, amap$$3, exprm$$1, matchm$$1, warnOnUnused$$2, warnOnIncomplete$$1, actionOnFailure$$1, topv$$1, topgtvs$$1, clausesPretendAllPartialFail, inputTy$$1, resultTy$$1);
    const warnOnIncomplete$$2 = false;

    const atMostOnePartialAtATime = function atMostOnePartialAtATime(clauses) {
      const matchValue$$22 = (0, _illib.List$$$takeUntil)(isPartialOrWhenClause, clauses);

      if (matchValue$$22[1].tail != null) {
        const t$$9 = matchValue$$22[1].tail;
        const h$$5 = matchValue$$22[1].head;
        return doGroupWithAtMostOnePartial((0, _List.append)(matchValue$$22[0], (0, _Types.L)(h$$5, (0, _Types.L)())))(t$$9);
      } else {
        return CompilePatternBasic(g$$11, denv$$2, amap$$3, exprm$$1, matchm$$1, warnOnUnused$$2, warnOnIncomplete$$2, actionOnFailure$$1, topv$$1, topgtvs$$1, matchValue$$22[0], inputTy$$1, resultTy$$1);
      }
    };

    const doGroupWithAtMostOnePartial = function doGroupWithAtMostOnePartial(group) {
      return function (rest$$6) {
        const patternInput$$23 = atMostOnePartialAtATime(rest$$6);
        const expr$$2 = (0, _TastOps.mkAndSimplifyMatch)(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), exprm$$1, matchm$$1, resultTy$$1, patternInput$$23[0], patternInput$$23[1]);
        const spTarget = (0, _Util.equals)((0, _TastOps.Expr$002Eget_Range)(expr$$2), matchm$$1) ? new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget") : new _ast.SequencePointInfoForTarget(0, "SequencePointAtTarget");
        const clauseForRestOfMatch = new TypedMatchClause(0, "TClause", new Pattern(1, "TPat_wild", matchm$$1), null, new _tast.DecisionTreeTarget(0, "TTarget", (0, _Types.L)(), expr$$2, spTarget), matchm$$1);
        return CompilePatternBasic(g$$11, denv$$2, amap$$3, exprm$$1, matchm$$1, warnOnUnused$$2, warnOnIncomplete$$2, actionOnFailure$$1, topv$$1, topgtvs$$1, (0, _List.append)(group, (0, _Types.L)(clauseForRestOfMatch, (0, _Types.L)())), inputTy$$1, resultTy$$1);
      };
    };

    return atMostOnePartialAtATime(clausesL$$1);
  } else {
    return CompilePatternBasic(g$$11, denv$$2, amap$$3, exprm$$1, matchm$$1, warnOnUnused$$1, true, actionOnFailure$$1, topv$$1, topgtvs$$1, clausesL$$1, inputTy$$1, resultTy$$1);
  }
}