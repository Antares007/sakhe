"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testHookMemberBody = testHookMemberBody;
exports.BindTypar = BindTypar;
exports.BindTypars = BindTypars;
exports.BindArgVals = BindArgVals;
exports.Limit$$get_IsLocal = Limit$$get_IsLocal;
exports.CombineTwoLimits = CombineTwoLimits;
exports.CombineLimits = CombineLimits;
exports.IsValArgument = IsValArgument;
exports.IsValLocal = IsValLocal;
exports.GetLimitVal = GetLimitVal;
exports.GetLimitValByRef = GetLimitValByRef;
exports.LimitVal = LimitVal;
exports.BindVal = BindVal;
exports.BindVals = BindVals;
exports.CheckTypeDeep = CheckTypeDeep;
exports.CheckTypesDeep = CheckTypesDeep;
exports.CheckTypeConstraintDeep = CheckTypeConstraintDeep;
exports.CheckTraitInfoDeep = CheckTraitInfoDeep;
exports.CheckForByrefLikeType = CheckForByrefLikeType;
exports.CheckForByrefType = CheckForByrefType;
exports.CheckEscapes = CheckEscapes;
exports.AccessInternalsVisibleToAsInternal = AccessInternalsVisibleToAsInternal;
exports.CheckTypeForAccess = CheckTypeForAccess;
exports.WarnOnWrongTypeForAccess = WarnOnWrongTypeForAccess;
exports.PermitByRefExpr$$get_Disallow = PermitByRefExpr$$get_Disallow;
exports.PermitByRefExpr$$get_PermitOnlyReturnable = PermitByRefExpr$$get_PermitOnlyReturnable;
exports.PermitByRefExpr$$get_PermitOnlyReturnableNonLocal = PermitByRefExpr$$get_PermitOnlyReturnableNonLocal;
exports.mkArgsPermit = mkArgsPermit;
exports.mkArgsForAppliedVal = mkArgsForAppliedVal;
exports.mkArgsForAppliedExpr = mkArgsForAppliedExpr;
exports.CheckType = CheckType;
exports.CheckTypeNoByrefs = CheckTypeNoByrefs;
exports.CheckTypePermitSpanLike = CheckTypePermitSpanLike;
exports.CheckTypePermitAllByrefs = CheckTypePermitAllByrefs;
exports.CheckTypeInstNoByrefs = CheckTypeInstNoByrefs;
exports.CheckTypeInstPermitAllByrefs = CheckTypeInstPermitAllByrefs;
exports.$007COptionalCoerce$007C = $007COptionalCoerce$007C;
exports.CheckNoReraise = CheckNoReraise;
exports.isSpliceOperator = isSpliceOperator;
exports.CheckMultipleInterfaceInstantiations = CheckMultipleInterfaceInstantiations;
exports.CheckExprNoByrefs = CheckExprNoByrefs;
exports.CheckValRef = CheckValRef;
exports.CheckValUse = CheckValUse;
exports.CheckForOverAppliedExceptionRaisingPrimitive = CheckForOverAppliedExceptionRaisingPrimitive;
exports.CheckCallLimitArgs = CheckCallLimitArgs;
exports.CheckCall = CheckCall;
exports.CheckCallWithReceiver = CheckCallWithReceiver;
exports.CheckExpr = CheckExpr;
exports.CheckMethods = CheckMethods;
exports.CheckMethod = CheckMethod;
exports.CheckInterfaceImpls = CheckInterfaceImpls;
exports.CheckInterfaceImpl = CheckInterfaceImpl;
exports.CheckExprOp = CheckExprOp;
exports.CheckLambdas = CheckLambdas;
exports.CheckExprs = CheckExprs;
exports.CheckExprsNoByRefLike = CheckExprsNoByRefLike;
exports.CheckExprsPermitByRefLike = CheckExprsPermitByRefLike;
exports.CheckExprsPermitReturnableByRef = CheckExprsPermitReturnableByRef;
exports.CheckExprPermitByRefLike = CheckExprPermitByRefLike;
exports.CheckExprPermitReturnableByRef = CheckExprPermitReturnableByRef;
exports.CheckDecisionTreeTargets = CheckDecisionTreeTargets;
exports.CheckDecisionTreeTarget = CheckDecisionTreeTarget;
exports.CheckDecisionTree = CheckDecisionTree;
exports.CheckDecisionTreeSwitch = CheckDecisionTreeSwitch;
exports.CheckDecisionTreeTest = CheckDecisionTreeTest;
exports.CheckAttrib = CheckAttrib;
exports.CheckAttribExpr = CheckAttribExpr;
exports.CheckAttribArgExpr = CheckAttribArgExpr;
exports.CheckAttribs = CheckAttribs;
exports.CheckValInfo = CheckValInfo;
exports.CheckArgInfo = CheckArgInfo;
exports.CheckValSpec = CheckValSpec;
exports.AdjustAccess = AdjustAccess;
exports.CheckBinding = CheckBinding;
exports.CheckBindings = CheckBindings;
exports.CheckModuleBinding = CheckModuleBinding;
exports.CheckModuleBindings = CheckModuleBindings;
exports.CheckRecdField = CheckRecdField;
exports.CheckEntityDefn = CheckEntityDefn;
exports.CheckEntityDefns = CheckEntityDefns;
exports.CheckModuleExpr = CheckModuleExpr;
exports.CheckDefnsInModule = CheckDefnsInModule;
exports.CheckNothingAfterEntryPoint = CheckNothingAfterEntryPoint;
exports.CheckDefnInModule = CheckDefnInModule;
exports.CheckModuleSpec = CheckModuleSpec;
exports.CheckTopImpl = CheckTopImpl;
exports.PermitByRefExpr = exports.PermitByRefType = exports.cenv = exports.NoLimit = exports.Limit = exports.LimitFlags = exports.env = exports.testFlagMemberBody = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _TastOps = require("./TastOps");

var _String = require("../fable-core.2.0.3/String");

var _range = require("./range");

var _tast = require("./tast");

var _ast = require("./ast");

var _List = require("../fable-core.2.0.3/List");

var _Util = require("../fable-core.2.0.3/Util");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _Option = require("../fable-core.2.0.3/Option");

var _Seq = require("../fable-core.2.0.3/Seq");

var _zset = require("../absil/zset");

var _AttributeChecking = require("./AttributeChecking");

var _TcGlobals = require("./TcGlobals");

var _NicePrint = require("./NicePrint");

var _Map = require("../fable-core.2.0.3/Map");

var _illib = require("../absil/illib");

var _CheckFormatStrings = require("./CheckFormatStrings");

var _QuotationTranslator = require("./QuotationTranslator");

var _infos = require("./infos");

var _il = require("../absil/il");

var _TypeRelations = require("./TypeRelations");

var _Array = require("../fable-core.2.0.3/Array");

var _Long = require("../fable-core.2.0.3/Long");

var _PrettyNaming = require("./PrettyNaming");

var _AccessibilityLogic = require("./AccessibilityLogic");

var _InfoReader = require("./InfoReader");

var _import = require("./import");

var _FSharp = require("../fable-core.2.0.3/FSharp.Collections");

const testFlagMemberBody = new _Types.FSharpRef(false);
exports.testFlagMemberBody = testFlagMemberBody;

function testHookMemberBody(membInfo, expr) {
  if (testFlagMemberBody.contents) {
    const m = (0, _TastOps.Expr$002Eget_Range)(expr);
    (0, _String.toConsole)((0, _String.printf)("TestMemberBody,%A,%s,%d,%d,%d,%d\n"))(membInfo.MemberFlags.MemberKind)((0, _range.range$$get_FileName)(m))((0, _range.range$$get_StartLine)(m))((0, _range.range$$get_StartColumn)(m))((0, _range.range$$get_EndLine)(m))((0, _range.range$$get_EndColumn)(m));
  }
}

const env = (0, _Types.declare)(function env(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.boundTyparNames = arg1;
  this.boundTypars = arg2;
  this.argVals = arg3;
  this.sigToImplRemapInfo = arg4;
  this.ctorLimitedZone = arg5;
  this.quote = arg6;
  this.reflect = arg7;
  this.external = arg8;
  this.returnScope = arg9 | 0;
}, _Types.Record);
exports.env = env;

function BindTypar(env$$1, tp) {
  return new env((0, _Types.L)((0, _tast.Typar$$get_Name)(tp), env$$1.boundTyparNames), (0, _TastOps.TyparMap$00601$$Add$$Z748C59BB)(env$$1.boundTypars, tp, null), env$$1.argVals, env$$1.sigToImplRemapInfo, env$$1.ctorLimitedZone, env$$1.quote, env$$1.reflect, env$$1.external, env$$1.returnScope);
}

function BindTypars(g, env$$2, tps) {
  const tps$$1 = (0, _TastOps.NormalizeDeclaredTyparsForEquiRecursiveInference)(g, tps);

  if (tps$$1.tail == null) {
    return env$$2;
  } else {
    const nms = (0, _TastOps.PrettyTypes$$$PrettyTyparNames)(function (_arg1) {
      return true;
    }, env$$2.boundTyparNames, tps$$1);
    (0, _List.iterate2)(function action(tp$$1, nm) {
      if ((0, _TastOps.PrettyTypes$$$NeedsPrettyTyparName)(tp$$1)) {
        tp$$1.typar_id = (0, _ast.ident)(nm, (0, _tast.Typar$$get_Range)(tp$$1));
      }
    }, tps$$1, nms);
    return (0, _List.fold)(BindTypar, env$$2, tps$$1);
  }
}

function BindArgVals(env$$4, vs) {
  return new env(env$$4.boundTyparNames, env$$4.boundTypars, (0, _TastOps.ValMap$00601$$$OfList$$Z2CE9D52B)((0, _List.map)(function (v) {
    return [v, null];
  }, vs)), env$$4.sigToImplRemapInfo, env$$4.ctorLimitedZone, env$$4.quote, env$$4.reflect, env$$4.external, env$$4.returnScope);
}

const LimitFlags = (0, _Types.declare)(function LimitFlags(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.value__ = arg1 | 0;
  this.None = arg2;
  this.ByRef = arg3;
  this.ByRefOfSpanLike = arg4;
  this.ByRefOfStackReferringSpanLike = arg5;
  this.SpanLike = arg6;
  this.StackReferringSpanLike = arg7;
}, _Types.Record);
exports.LimitFlags = LimitFlags;
const Limit = (0, _Types.declare)(function Limit(arg1, arg2) {
  this.scope = arg1 | 0;
  this.flags = arg2;
}, _Types.Record);
exports.Limit = Limit;

function Limit$$get_IsLocal(this$) {
  return this$.scope >= 1;
}

const NoLimit = new Limit(0, 0);
exports.NoLimit = NoLimit;

function CombineTwoLimits(limit1, limit2) {
  const isByRef1 = (limit1.flags & 1) === 1;
  const isByRef2 = (limit2.flags & 1) === 1;
  const isStackSpan1 = (limit1.flags & 16) === 16;
  const isStackSpan2 = (limit2.flags & 16) === 16;
  const isLimited1 = isByRef1 ? true : isStackSpan1;
  const isLimited2 = isByRef2 ? true : isStackSpan2;
  const limit1$$1 = (isStackSpan1 ? !isByRef1 : false) ? new Limit(1, limit1.flags) : limit1;
  const limit2$$1 = (isStackSpan2 ? !isByRef2 : false) ? new Limit(1, limit2.flags) : limit2;
  const matchValue = [isLimited1, isLimited2];

  if (matchValue[0]) {
    if (matchValue[1]) {
      return new Limit((0, _Util.max)(_Util.comparePrimitives, limit1$$1.scope, limit2$$1.scope), limit1$$1.flags | limit2$$1.flags);
    } else {
      return new Limit(limit1$$1.scope, limit1$$1.flags | limit2$$1.flags);
    }
  } else if (matchValue[1]) {
    return new Limit(limit2$$1.scope, limit1$$1.flags | limit2$$1.flags);
  } else {
    return new Limit(0, limit1$$1.flags | limit2$$1.flags);
  }
}

function CombineLimits(limits) {
  return (0, _List.fold)(CombineTwoLimits, NoLimit, limits);
}

const cenv = (0, _Types.declare)(function cenv(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {
  this.boundVals = arg1;
  this.limitVals = arg2;
  this.potentialUnboundUsesOfVals = arg3;
  this.g = arg4;
  this.amap = arg5;
  this.infoReader = arg6;
  this.internalsVisibleToPaths = arg7;
  this.denv = arg8;
  this.viewCcu = arg9;
  this.reportErrors = arg10;
  this.isLastCompiland = arg11;
  this.isInternalTestSpanStackReferring = arg12;
  this.usesQuotations = arg13;
  this.entryPointGiven = arg14;
}, _Types.Record);
exports.cenv = cenv;

function IsValArgument(env$$5, v$$1) {
  return (0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(env$$5.argVals, v$$1);
}

function IsValLocal(env$$6, v$$2) {
  if ((0, _tast.Val$$get_ValReprInfo)(v$$2) == null) {
    return !IsValArgument(env$$6, v$$2);
  } else {
    return false;
  }
}

function GetLimitVal(cenv$$1, env$$7, m$$1, v$$3) {
  let limit$$5;
  const matchValue$$1 = (0, _Util.tryGetValue)(cenv$$1.limitVals, (0, _tast.Val$$get_Stamp)(v$$3), null);
  limit$$5 = matchValue$$1[0] ? matchValue$$1[1] : IsValLocal(env$$7, v$$3) ? new Limit(1, 0) : NoLimit;

  if ((0, _TastOps.isSpanLikeTy)(cenv$$1.g, m$$1, (0, _tast.Val$$get_Type)(v$$3))) {
    const isMutable = (0, _tast.Val$$get_IsMutable)(v$$3) ? cenv$$1.isInternalTestSpanStackReferring : false;
    const isLimited = (limit$$5.flags & 16) === 16;

    if (isMutable ? true : isLimited) {
      return new Limit(limit$$5.scope, 16);
    } else {
      return new Limit(limit$$5.scope, 8);
    }
  } else if ((0, _TastOps.isByrefTy)(cenv$$1.g, (0, _tast.Val$$get_Type)(v$$3))) {
    const isByRefOfSpanLike = (0, _TastOps.isSpanLikeTy)(cenv$$1.g, m$$1, (0, _TastOps.destByrefTy)(cenv$$1.g, (0, _tast.Val$$get_Type)(v$$3)));

    if (isByRefOfSpanLike) {
      if ((limit$$5.flags & 5) === 5) {
        return new Limit(limit$$5.scope, 5);
      } else {
        return new Limit(limit$$5.scope, 3);
      }
    } else {
      return new Limit(limit$$5.scope, 1);
    }
  } else {
    return new Limit(limit$$5.scope, 0);
  }
}

function GetLimitValByRef(cenv$$2, env$$8, m$$2, v$$4) {
  const limit$$8 = GetLimitVal(cenv$$2, env$$8, m$$2, v$$4);
  const scope = (IsValArgument(env$$8, v$$4) ? 1 : limit$$8.scope) | 0;
  const flags$$8 = ((limit$$8.flags & 16) === 16 ? 5 : (limit$$8.flags & 8) === 8 ? 3 : 1) | 0;
  return new Limit(scope, flags$$8);
}

function LimitVal(cenv$$3, v$$5, limit$$11) {
  cenv$$3.limitVals.set((0, _tast.Val$$get_Stamp)(v$$5), limit$$11);
}

function BindVal(cenv$$4, env$$9, v$$6) {
  const alreadyDone = cenv$$4.boundVals.has((0, _tast.Val$$get_Stamp)(v$$6));
  cenv$$4.boundVals.set((0, _tast.Val$$get_Stamp)(v$$6), 1);

  if ((((((!env$$9.external ? !alreadyDone : false) ? cenv$$4.reportErrors : false) ? !(0, _tast.Val$$get_HasBeenReferenced)(v$$6) : false) ? !(0, _tast.Val$$get_IsCompiledAsTopLevel)(v$$6) : false) ? !(0, _String.startsWith)((0, _tast.Val$$get_DisplayName)(v$$6), "_", 4) : false) ? !(0, _tast.Val$$get_IsCompilerGenerated)(v$$6) : false) {
    if ((0, _tast.Val$$get_BaseOrThisInfo)(v$$6).tag === 0) {
      (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkUnusedThisVariable$$Z721C83C5)((0, _tast.Val$$get_DisplayName)(v$$6)), (0, _tast.Val$$get_Range)(v$$6)));
    } else {
      (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkUnusedValue$$Z721C83C5)((0, _tast.Val$$get_DisplayName)(v$$6)), (0, _tast.Val$$get_Range)(v$$6)));
    }
  }
}

function BindVals(cenv$$5, env$$10, vs$$1) {
  (0, _List.iterate)(function (v$$7) {
    BindVal(cenv$$5, env$$10, v$$7);
  }, vs$$1);
}

function CheckTypeDeep(_arg1_0, _arg1_1, _arg1_2, _arg1_3, _arg1_4, g$$1, env$$11, isInner, ty) {
  var tp$$3;
  const _arg1$$1 = [_arg1_0, (0, _Util.curry)(2, _arg1_1), _arg1_2, _arg1_3, _arg1_4];
  const f = _arg1$$1;
  const visitTyconRefOpt = f[1];
  const visitTyarOpt = f[4];
  const visitTy = f[0];
  const visitTraitSolutionOpt = f[3];
  const visitAppTyOpt = f[2];
  var $target$$33, tp$$4;

  if (ty.tag === 5) {
    if (tp$$3 = ty.fields[0], (0, _tast.Typar$$get_Solution)(tp$$3) != null) {
      $target$$33 = 0;
      tp$$4 = ty.fields[0];
    } else {
      $target$$33 = 1;
    }
  } else {
    $target$$33 = 1;
  }

  switch ($target$$33) {
    case 0:
      {
        (0, _List.iterate)(function action$$1(cx) {
          if (cx.tag === 3) {
            const soln = cx.fields[0].fields[5];
            const matchValue$$3 = [visitTraitSolutionOpt, soln.contents];
            var $target$$34, sln, visitTraitSolution;

            if (matchValue$$3[0] != null) {
              if (matchValue$$3[1] != null) {
                $target$$34 = 0;
                sln = matchValue$$3[1];
                visitTraitSolution = matchValue$$3[0];
              } else {
                $target$$34 = 1;
              }
            } else {
              $target$$34 = 1;
            }

            switch ($target$$34) {
              case 0:
                {
                  visitTraitSolution(sln);
                  break;
                }
            }
          }
        }, (0, _tast.Typar$$get_Constraints)(tp$$4));
        break;
      }
  }

  const ty$$1 = (0, _tast.stripTyparEqns)(ty);
  visitTy(ty$$1);

  switch (ty$$1.tag) {
    case 6:
      {
        break;
      }

    case 1:
      {
        const tinst = ty$$1.fields[1];
        const tcref = ty$$1.fields[0];

        if (visitTyconRefOpt == null) {} else {
          const visitTyconRef = visitTyconRefOpt;
          visitTyconRef(isInner)(tcref);
        }

        CheckTypesDeep(f[0], (0, _Util.uncurry)(2, f[1]), f[2], f[3], f[4], g$$1, env$$11, tinst);

        if (visitAppTyOpt == null) {} else {
          const visitAppTy = visitAppTyOpt;
          visitAppTy([tcref, tinst]);
        }

        break;
      }

    case 4:
      {
        const tinst$$1 = ty$$1.fields[1];
        CheckTypesDeep(f[0], (0, _Util.uncurry)(2, f[1]), f[2], f[3], f[4], g$$1, env$$11, tinst$$1);
        break;
      }

    case 2:
      {
        const tys = ty$$1.fields[1];
        CheckTypesDeep(f[0], (0, _Util.uncurry)(2, f[1]), f[2], f[3], f[4], g$$1, env$$11, tys);
        break;
      }

    case 3:
      {
        const t = ty$$1.fields[1];
        const s = ty$$1.fields[0];
        CheckTypeDeep(f[0], (0, _Util.uncurry)(2, f[1]), f[2], f[3], f[4], g$$1, env$$11, true, s);
        CheckTypeDeep(f[0], (0, _Util.uncurry)(2, f[1]), f[2], f[3], f[4], g$$1, env$$11, true, t);
        break;
      }

    case 5:
      {
        const tp$$6 = ty$$1.fields[0];

        if (!(0, _tast.Typar$$get_IsSolved)(tp$$6)) {
          if (visitTyarOpt != null) {
            const visitTyar = visitTyarOpt;
            visitTyar([env$$11, tp$$6]);
          }
        }

        break;
      }

    default:
      {
        const tps$$2 = ty$$1.fields[0];
        const body = ty$$1.fields[1];
        const env$$12 = BindTypars(g$$1, env$$11, tps$$2);
        CheckTypeDeep(f[0], (0, _Util.uncurry)(2, f[1]), f[2], f[3], f[4], g$$1, env$$12, isInner, body);
        (0, _List.iterate)(function action$$3(tp$$5) {
          (0, _List.iterate)(function action$$2(x$$1) {
            CheckTypeConstraintDeep(f[0], (0, _Util.uncurry)(2, f[1]), f[2], f[3], f[4], g$$1, env$$12, x$$1);
          }, (0, _tast.Typar$$get_Constraints)(tp$$5));
        }, tps$$2);
      }
  }
}

function CheckTypesDeep(f_0, f_1, f_2, f_3, f_4, g$$2, env$$13, tys$$1) {
  const f$$1 = [f_0, (0, _Util.curry)(2, f_1), f_2, f_3, f_4];
  (0, _List.iterate)(function action$$4(ty$$2) {
    CheckTypeDeep(f$$1[0], (0, _Util.uncurry)(2, f$$1[1]), f$$1[2], f$$1[3], f$$1[4], g$$2, env$$13, true, ty$$2);
  }, tys$$1);
}

function CheckTypeConstraintDeep(f_0$$1, f_1$$1, f_2$$1, f_3$$1, f_4$$1, g$$3, env$$14, x$$2) {
  const f$$2 = [f_0$$1, (0, _Util.curry)(2, f_1$$1), f_2$$1, f_3$$1, f_4$$1];
  var $target$$51;

  switch (x$$2.tag) {
    case 3:
      $target$$51 = 1;
      break;

    case 1:
      $target$$51 = 2;
      break;

    case 6:
      $target$$51 = 3;
      break;

    case 8:
      $target$$51 = 4;
      break;

    case 11:
      $target$$51 = 5;
      break;

    case 9:
    case 10:
    case 2:
    case 4:
    case 12:
    case 5:
    case 7:
      $target$$51 = 6;
      break;

    default:
      $target$$51 = 0;
  }

  switch ($target$$51) {
    case 0:
      {
        const ty$$3 = x$$2.fields[0];
        CheckTypeDeep(f$$2[0], (0, _Util.uncurry)(2, f$$2[1]), f$$2[2], f$$2[3], f$$2[4], g$$3, env$$14, true, ty$$3);
        break;
      }

    case 1:
      {
        const traitInfo = x$$2.fields[0];
        CheckTraitInfoDeep(f$$2[0], (0, _Util.uncurry)(2, f$$2[1]), f$$2[2], f$$2[3], f$$2[4], g$$3, env$$14, traitInfo);
        break;
      }

    case 2:
      {
        const ty$$4 = x$$2.fields[1];
        CheckTypeDeep(f$$2[0], (0, _Util.uncurry)(2, f$$2[1]), f$$2[2], f$$2[3], f$$2[4], g$$3, env$$14, true, ty$$4);
        break;
      }

    case 3:
      {
        const tys$$2 = x$$2.fields[0];
        CheckTypesDeep(f$$2[0], (0, _Util.uncurry)(2, f$$2[1]), f$$2[2], f$$2[3], f$$2[4], g$$3, env$$14, tys$$2);
        break;
      }

    case 4:
      {
        const uty = x$$2.fields[0];
        CheckTypeDeep(f$$2[0], (0, _Util.uncurry)(2, f$$2[1]), f$$2[2], f$$2[3], f$$2[4], g$$3, env$$14, true, uty);
        break;
      }

    case 5:
      {
        const bty = x$$2.fields[1];
        const aty = x$$2.fields[0];
        CheckTypeDeep(f$$2[0], (0, _Util.uncurry)(2, f$$2[1]), f$$2[2], f$$2[3], f$$2[4], g$$3, env$$14, true, aty);
        CheckTypeDeep(f$$2[0], (0, _Util.uncurry)(2, f$$2[1]), f$$2[2], f$$2[3], f$$2[4], g$$3, env$$14, true, bty);
        break;
      }
  }
}

function CheckTraitInfoDeep(_arg3_0, _arg3_1, _arg3_2, _arg3_3, _arg3_4, g$$4, env$$15, _arg2) {
  const _arg3 = [_arg3_0, (0, _Util.curry)(2, _arg3_1), _arg3_2, _arg3_3, _arg3_4];
  const f$$3 = _arg3;
  const visitTraitSolutionOpt$$1 = f$$3[3];
  const tys$$3 = _arg2.fields[0];
  const soln$$1 = _arg2.fields[5];
  const rty = _arg2.fields[4];
  const argtys = _arg2.fields[3];
  CheckTypesDeep(f$$3[0], (0, _Util.uncurry)(2, f$$3[1]), f$$3[2], f$$3[3], f$$3[4], g$$4, env$$15, tys$$3);
  CheckTypesDeep(f$$3[0], (0, _Util.uncurry)(2, f$$3[1]), f$$3[2], f$$3[3], f$$3[4], g$$4, env$$15, argtys);
  (0, _Seq.iterate)(function (ty$$5) {
    CheckTypeDeep(f$$3[0], (0, _Util.uncurry)(2, f$$3[1]), f$$3[2], f$$3[3], f$$3[4], g$$4, env$$15, true, ty$$5);
  }, (0, _Option.defaultArg)(rty, [], function ($x$$3) {
    return [$x$$3];
  }));
  const matchValue$$4 = [visitTraitSolutionOpt$$1, soln$$1.contents];
  var $target$$60, sln$$1, visitTraitSolution$$1;

  if (matchValue$$4[0] != null) {
    if (matchValue$$4[1] != null) {
      $target$$60 = 0;
      sln$$1 = matchValue$$4[1];
      visitTraitSolution$$1 = matchValue$$4[0];
    } else {
      $target$$60 = 1;
    }
  } else {
    $target$$60 = 1;
  }

  switch ($target$$60) {
    case 0:
      {
        visitTraitSolution$$1(sln$$1);
        break;
      }
  }
}

function CheckForByrefLikeType(cenv$$6, env$$16, m$$3, ty$$6, check) {
  CheckTypeDeep(function (value$$1) {
    value$$1;
  }, function (_deep, tcref$$1) {
    if ((0, _TastOps.isByrefLikeTyconRef)(cenv$$6.g, m$$3, tcref$$1)) {
      check();
    }
  }, null, null, null, cenv$$6.g, env$$16, false, ty$$6);
}

function CheckForByrefType(cenv$$7, env$$17, ty$$7, check$$1) {
  CheckTypeDeep(function (value$$2) {
    value$$2;
  }, function (_deep$$1, tcref$$2) {
    if ((0, _TastOps.isByrefTyconRef)(cenv$$7.g, tcref$$2)) {
      check$$1();
    }
  }, null, null, null, cenv$$7.g, env$$17, false, ty$$7);
}

function CheckEscapes(cenv$$8, allowProtected, m$$4, syntacticArgs, body$$1) {
  if (cenv$$8.reportErrors) {
    const cantBeFree = function cantBeFree(v$$8) {
      if ((0, _Util.equals)((0, _tast.Val$$get_BaseOrThisInfo)(v$$8), new _tast.ValBaseOrThisInfo(1, "BaseVal")) ? true : (0, _TastOps.isByrefLikeTy)(cenv$$8.g, m$$4, (0, _tast.Val$$get_Type)(v$$8))) {
        return !(0, _List.exists)(function f$$4(lv1) {
          return function (lv2) {
            return (0, _tast.valEq)(lv1, lv2);
          };
        }(v$$8), syntacticArgs);
      } else {
        return false;
      }
    };

    const frees = (0, _TastOps.freeInExpr)(_TastOps.CollectLocals, body$$1);
    const fvs = frees.FreeLocals;

    if (!allowProtected ? frees.UsesMethodLocalConstructs : false) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkProtectedOrBaseCalled)(), m$$4));
    } else if ((0, _zset.ZsetModule$$$exists)(cantBeFree, fvs)) {
      const v$$9 = (0, _List.find)(cantBeFree, (0, _zset.ZsetModule$$$elements)(fvs));

      if ((0, _TastOps.isByrefLikeTy)(cenv$$8.g, m$$4, (0, _tast.Val$$get_Type)(v$$9))) {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkByrefUsedInInvalidWay$$Z721C83C5)((0, _tast.Val$$get_DisplayName)(v$$9)), m$$4));
      } else if ((0, _Util.equals)((0, _tast.Val$$get_BaseOrThisInfo)(v$$9), new _tast.ValBaseOrThisInfo(1, "BaseVal"))) {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkBaseUsedInInvalidWay)(), m$$4));
      } else {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError((0, _FSComp.SR$$$chkVariableUsedInInvalidWay$$Z721C83C5)((0, _tast.Val$$get_DisplayName)(v$$9)), m$$4));
      }
    }

    return frees;
  } else {
    return null;
  }
}

function AccessInternalsVisibleToAsInternal(thisCompPath, internalsVisibleToPaths, access) {
  return (0, _List.fold)(function folder(access$$1, internalsVisibleToPath) {
    return (0, _tast.accessSubstPaths)(thisCompPath, internalsVisibleToPath, access$$1);
  }, access, internalsVisibleToPaths);
}

function CheckTypeForAccess(cenv$$9, env$$18, objName, valAcc, m$$5, ty$$8) {
  if (cenv$$9.reportErrors) {
    const visitTye = function visitTye(ty$$9) {
      const matchValue$$5 = (0, _TastOps.tryDestAppTy)(cenv$$9.g, ty$$9);

      if (matchValue$$5 != null) {
        const tcref$$3 = matchValue$$5;
        const thisCompPath$$1 = (0, _tast.compPathOfCcu)(cenv$$9.viewCcu);
        const tyconAcc = AccessInternalsVisibleToAsInternal(thisCompPath$$1, cenv$$9.internalsVisibleToPaths, (0, _tast.EntityRef$$get_Accessibility)(tcref$$3));

        if ((0, _tast.isLessAccessible)(tyconAcc, valAcc)) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkTypeLessAccessibleThanType$$Z384F8060)((0, _tast.EntityRef$$get_DisplayName)(tcref$$3), objName()), m$$5));
        }
      }
    };

    CheckTypeDeep(visitTye, (0, _Util.uncurry)(2, null), null, null, null, cenv$$9.g, env$$18, false, ty$$8);
  }
}

function WarnOnWrongTypeForAccess(cenv$$10, env$$19, objName$$1, valAcc$$1, m$$6, ty$$10) {
  if (cenv$$10.reportErrors) {
    const visitTye$$1 = function visitTye$$1(ty$$11) {
      const matchValue$$6 = (0, _TastOps.tryDestAppTy)(cenv$$10.g, ty$$11);

      if (matchValue$$6 != null) {
        const tcref$$4 = matchValue$$6;
        const thisCompPath$$2 = (0, _tast.compPathOfCcu)(cenv$$10.viewCcu);
        const tyconAcc$$1 = AccessInternalsVisibleToAsInternal(thisCompPath$$2, cenv$$10.internalsVisibleToPaths, (0, _tast.EntityRef$$get_Accessibility)(tcref$$4));

        if ((0, _tast.isLessAccessible)(tyconAcc$$1, valAcc$$1)) {
          const errorText = (0, _FSComp.SR$$$chkTypeLessAccessibleThanType$$Z384F8060)((0, _tast.EntityRef$$get_DisplayName)(tcref$$4), objName$$1())[1];
          const warningText = errorText + "\n" + (0, _FSComp.SR$$$tcTypeAbbreviationsCheckedAtCompileTime)();
          (0, _ErrorLogger.warning)(new _AttributeChecking.ObsoleteWarning(warningText, m$$6));
        }
      }
    };

    CheckTypeDeep(visitTye$$1, (0, _Util.uncurry)(2, null), null, null, null, cenv$$10.g, env$$19, false, ty$$10);
  }
}

const PermitByRefType = (0, _Types.declare)(function PermitByRefType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.PermitByRefType = PermitByRefType;
const PermitByRefExpr = (0, _Types.declare)(function PermitByRefExpr(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.PermitByRefExpr = PermitByRefExpr;

function PermitByRefExpr$$get_Disallow(context) {
  var $target$$82;

  switch (context.tag) {
    case 1:
    case 2:
    case 3:
      $target$$82 = 0;
      break;

    default:
      $target$$82 = 1;
  }

  switch ($target$$82) {
    case 0:
      {
        return false;
      }

    case 1:
      {
        return true;
      }
  }
}

function PermitByRefExpr$$get_PermitOnlyReturnable(context$$1) {
  var $target$$83;

  switch (context$$1.tag) {
    case 2:
    case 3:
      $target$$83 = 0;
      break;

    default:
      $target$$83 = 1;
  }

  switch ($target$$83) {
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

function PermitByRefExpr$$get_PermitOnlyReturnableNonLocal(context$$2) {
  if (context$$2.tag === 3) {
    return true;
  } else {
    return false;
  }
}

function mkArgsPermit(n) {
  if (n === 1) {
    return new PermitByRefExpr(1, "Yes");
  } else {
    return new PermitByRefExpr(0, "YesTupleOfArgs", n);
  }
}

function mkArgsForAppliedVal(isBaseCall, vref, argsl) {
  const matchValue$$7 = (0, _tast.ValRef$$get_ValReprInfo)(vref);

  if (matchValue$$7 == null) {
    return (0, _Types.L)();
  } else {
    const topValInfo = matchValue$$7;
    const argArities = (0, _tast.ValReprInfo$$get_AritiesOfArgs)(topValInfo);
    const argArities$$1 = (isBaseCall ? (0, _List.length)(argArities) >= 1 : false) ? (0, _List.tail)(argArities) : argArities;

    if ((0, _List.length)(argsl) >= (0, _List.length)(argArities$$1)) {
      return (0, _List.map)(mkArgsPermit, argArities$$1);
    } else {
      return (0, _Types.L)();
    }
  }
}

function mkArgsForAppliedExpr(isBaseCall$$1, argsl$$1, x$$4) {
  mkArgsForAppliedExpr: while (true) {
    const matchValue$$8 = (0, _TastOps.stripExpr)(x$$4);

    var $target$$84, vref$$1, _fty, _tyargs, f$$5, f$$6;

    if (matchValue$$8.tag === 1) {
      $target$$84 = 0;
      vref$$1 = matchValue$$8.fields[0];
    } else if (matchValue$$8.tag === 5) {
      if (matchValue$$8.fields[3].tail == null) {
        $target$$84 = 1;
        _fty = matchValue$$8.fields[1];
        _tyargs = matchValue$$8.fields[2];
        f$$5 = matchValue$$8.fields[0];
      } else {
        $target$$84 = 3;
      }
    } else if (matchValue$$8.tag === 11) {
      if (matchValue$$8.fields[0].tag === 24) {
        if (matchValue$$8.fields[2].tail != null) {
          if (matchValue$$8.fields[2].tail.tail == null) {
            $target$$84 = 2;
            f$$6 = matchValue$$8.fields[2].head;
          } else {
            $target$$84 = 3;
          }
        } else {
          $target$$84 = 3;
        }
      } else {
        $target$$84 = 3;
      }
    } else {
      $target$$84 = 3;
    }

    switch ($target$$84) {
      case 0:
        {
          return mkArgsForAppliedVal(isBaseCall$$1, vref$$1, argsl$$1);
        }

      case 1:
        {
          isBaseCall$$1 = isBaseCall$$1;
          argsl$$1 = argsl$$1;
          x$$4 = f$$5;
          continue mkArgsForAppliedExpr;
        }

      case 2:
        {
          isBaseCall$$1 = isBaseCall$$1;
          argsl$$1 = argsl$$1;
          x$$4 = f$$6;
          continue mkArgsForAppliedExpr;
        }

      case 3:
        {
          return (0, _Types.L)();
        }
    }
  }
}

function CheckType(permitByRefLike, cenv$$11, env$$20, m$$7, ty$$12) {
  if (cenv$$11.reportErrors) {
    const visitTyar$$1 = function visitTyar$$1(tupledArg) {
      if (!(0, _TastOps.TyparMap$00601$$ContainsKey$$ZB4A2630)(tupledArg[0].boundTypars, tupledArg[1])) {
        if ((0, _tast.Typar$$get_IsCompilerGenerated)(tupledArg[1])) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$checkNotSufficientlyGenericBecauseOfScopeAnon)(), m$$7));
        } else {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$checkNotSufficientlyGenericBecauseOfScope$$Z721C83C5)((0, _tast.Typar$$get_DisplayName)(tupledArg[1])), m$$7));
        }
      }
    };

    const visitTyconRef$$1 = function visitTyconRef$$1(_isInner, tcref$$5) {
      var $target$$85;

      if (permitByRefLike.tag === 0) {
        if ((0, _TastOps.isByrefLikeTyconRef)(cenv$$11.g, m$$7, tcref$$5)) {
          $target$$85 = 0;
        } else {
          $target$$85 = 1;
        }
      } else {
        $target$$85 = 1;
      }

      switch ($target$$85) {
        case 0:
          {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkErrorUseOfByref)(), m$$7));
            break;
          }

        case 1:
          {
            var $target$$86;

            if (permitByRefLike.tag === 1) {
              if ((0, _TastOps.isByrefTyconRef)(cenv$$11.g, tcref$$5)) {
                $target$$86 = 0;
              } else {
                $target$$86 = 1;
              }
            } else {
              $target$$86 = 1;
            }

            switch ($target$$86) {
              case 0:
                {
                  (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkErrorUseOfByref)(), m$$7));
                  break;
                }
            }

            break;
          }
      }

      if ((0, _TastOps.tyconRefEq)(cenv$$11.g, (0, _TcGlobals.TcGlobals$$get_system_Void_tcref)(cenv$$11.g), tcref$$5)) {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkSystemVoidOnlyInTypeof)(), m$$7));
      }
    };

    const visitAppTy$$1 = function visitAppTy$$1(tupledArg$$1) {
      if ((0, _TastOps.isByrefLikeTyconRef)(cenv$$11.g, m$$7, tupledArg$$1[0])) {
        const visitTye$$2 = function visitTye$$2(ty0) {
          const matchValue$$9 = (0, _TastOps.tryDestAppTy)(cenv$$11.g, ty0);

          if (matchValue$$9 != null) {
            const tcref2 = matchValue$$9;

            if ((0, _TastOps.isByrefTyconRef)(cenv$$11.g, tcref2)) {
              (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoByrefsOfByrefs$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(cenv$$11.denv, ty$$12)), m$$7));
            }
          }
        };

        CheckTypesDeep(visitTye$$2, (0, _Util.uncurry)(2, null), null, null, null, cenv$$11.g, env$$20, tupledArg$$1[1]);
      }
    };

    const visitTraitSolution$$2 = function visitTraitSolution$$2(info) {
      if (info.tag === 0) {
        const vref$$2 = info.fields[1];

        if ((0, _tast.valRefInThisAssembly)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(cenv$$11.g), vref$$2) ? !cenv$$11.boundVals.has((0, _tast.ValRef$$get_Stamp)(vref$$2)) : false) {
          cenv$$11.potentialUnboundUsesOfVals = (0, _Map.FSharpMap$$Add$$5BDDA1)(cenv$$11.potentialUnboundUsesOfVals, (0, _tast.ValRef$$get_Stamp)(vref$$2), m$$7);
        }
      }
    };

    CheckTypeDeep(function (value$$3) {
      value$$3;
    }, visitTyconRef$$1, visitAppTy$$1, visitTraitSolution$$2, visitTyar$$1, cenv$$11.g, env$$20, false, ty$$12);
  }
}

function CheckTypeNoByrefs(cenv$$12, env$$22, m$$8, ty$$13) {
  CheckType(new PermitByRefType(0, "None"), cenv$$12, env$$22, m$$8, ty$$13);
}

function CheckTypePermitSpanLike(cenv$$13, env$$23, m$$9, ty$$14) {
  CheckType(new PermitByRefType(1, "SpanLike"), cenv$$13, env$$23, m$$9, ty$$14);
}

function CheckTypePermitAllByrefs(cenv$$14, env$$24, m$$10, ty$$15) {
  CheckType(new PermitByRefType(2, "All"), cenv$$14, env$$24, m$$10, ty$$15);
}

function CheckTypeInstNoByrefs(cenv$$15, env$$25, m$$11, tyargs) {
  (0, _List.iterate)(function action$$5(ty$$16) {
    CheckTypeNoByrefs(cenv$$15, env$$25, m$$11, ty$$16);
  }, tyargs);
}

function CheckTypeInstPermitAllByrefs(cenv$$16, env$$26, m$$12, tyargs$$1) {
  (0, _List.iterate)(function action$$6(ty$$17) {
    CheckTypePermitAllByrefs(cenv$$16, env$$26, m$$12, ty$$17);
  }, tyargs$$1);
}

function $007COptionalCoerce$007C(_arg1$$2) {
  var $target$$87, f$$7, x$$5;

  if (_arg1$$2.tag === 11) {
    if (_arg1$$2.fields[0].tag === 24) {
      if (_arg1$$2.fields[2].tail != null) {
        if (_arg1$$2.fields[2].head.tag === 5) {
          if (_arg1$$2.fields[2].head.fields[3].tail == null) {
            if (_arg1$$2.fields[2].tail.tail == null) {
              $target$$87 = 0;
              f$$7 = _arg1$$2.fields[2].head.fields[0];
            } else {
              $target$$87 = 1;
              x$$5 = _arg1$$2;
            }
          } else {
            $target$$87 = 1;
            x$$5 = _arg1$$2;
          }
        } else {
          $target$$87 = 1;
          x$$5 = _arg1$$2;
        }
      } else {
        $target$$87 = 1;
        x$$5 = _arg1$$2;
      }
    } else {
      $target$$87 = 1;
      x$$5 = _arg1$$2;
    }
  } else {
    $target$$87 = 1;
    x$$5 = _arg1$$2;
  }

  switch ($target$$87) {
    case 0:
      {
        return f$$7;
      }

    case 1:
      {
        return x$$5;
      }
  }
}

function CheckNoReraise(cenv$$17, freesOpt, body$$2) {
  if (cenv$$17.reportErrors) {
    let fvs$$2;

    if (freesOpt != null) {
      const fvs$$1 = freesOpt;
      fvs$$2 = fvs$$1;
    } else {
      fvs$$2 = (0, _TastOps.freeInExpr)(_TastOps.CollectLocals, body$$2);
    }

    if (fvs$$2.UsesUnboundRethrow) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkErrorContainsCallToRethrow)(), (0, _TastOps.Expr$002Eget_Range)(body$$2)));
    }
  }
}

function isSpliceOperator(g$$5, v$$10) {
  if ((0, _TastOps.valRefEq)(g$$5, v$$10, (0, _TcGlobals.TcGlobals$$get_splice_expr_vref)(g$$5))) {
    return true;
  } else {
    return (0, _TastOps.valRefEq)(g$$5, v$$10, (0, _TcGlobals.TcGlobals$$get_splice_raw_expr_vref)(g$$5));
  }
}

function CheckMultipleInterfaceInstantiations(cenv$$18, interfaces, m$$13) {
  const keyf = function keyf(ty$$18) {
    return (0, _tast.EntityRef$$get_Stamp)((0, _TastOps.tcrefOfAppTy)(cenv$$18.g, ty$$18));
  };

  const table = (0, _illib.MultiMapModule$$$initBy)(keyf, interfaces);
  const firstInterfaceWithMultipleGenericInstantiations = (0, _List.tryPick)(function chooser$$1(typ1) {
    return (0, _List.tryPick)(function chooser(typ2) {
      if ((0, _TastOps.tyconRefEq)(cenv$$18.g, (0, _TastOps.tcrefOfAppTy)(cenv$$18.g, typ1), (0, _TastOps.tcrefOfAppTy)(cenv$$18.g, typ2)) ? !(0, _TastOps.typeEquivAux)(new _TastOps.Erasure(2, "EraseNone"), cenv$$18.g, typ1, typ2) : false) {
        return [typ1, typ2];
      } else {
        return null;
      }
    }, (0, _illib.MultiMapModule$$$find)(keyf(typ1), table));
  }, interfaces);

  if (firstInterfaceWithMultipleGenericInstantiations != null) {
    const typ2$$1 = firstInterfaceWithMultipleGenericInstantiations[1];
    const typ1$$1 = firstInterfaceWithMultipleGenericInstantiations[0];
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkMultipleGenericInterfaceInstantiations$$Z384F8060)((0, _NicePrint.minimalStringOfType)(cenv$$18.denv, typ1$$1), (0, _NicePrint.minimalStringOfType)(cenv$$18.denv, typ2$$1)), m$$13));
  }
}

function CheckExprNoByrefs(cenv$$19, env$$27, expr$$1) {
  CheckExpr(cenv$$19, env$$27, expr$$1, new PermitByRefExpr(4, "No"));
}

function CheckValRef(cenv$$20, env$$28, v$$12, m$$15, context$$3) {
  if (cenv$$20.reportErrors) {
    if (isSpliceOperator(cenv$$20.g, v$$12) ? !env$$28.quote : false) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkSplicingOnlyInQuotations)(), m$$15));
    }

    if (isSpliceOperator(cenv$$20.g, v$$12)) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoFirstClassSplicing)(), m$$15));
    }

    if ((0, _TastOps.valRefEq)(cenv$$20.g, v$$12, (0, _TcGlobals.TcGlobals$$get_addrof_vref)(cenv$$20.g))) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoFirstClassAddressOf)(), m$$15));
    }

    if ((0, _TastOps.valRefEq)(cenv$$20.g, v$$12, (0, _TcGlobals.TcGlobals$$get_reraise_vref)(cenv$$20.g))) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoFirstClassRethrow)(), m$$15));
    }

    if (PermitByRefExpr$$get_Disallow(context$$3) ? (0, _TastOps.isByrefLikeTy)(cenv$$20.g, m$$15, (0, _tast.ValRef$$get_Type)(v$$12)) : false) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoByrefAtThisPoint$$Z721C83C5)((0, _tast.ValRef$$get_DisplayName)(v$$12)), m$$15));
    }
  }

  CheckTypePermitAllByrefs(cenv$$20, env$$28, m$$15, (0, _tast.ValRef$$get_Type)(v$$12));
}

function CheckValUse(cenv$$21, env$$29, vref$$3, vFlags, m$$16, context$$4) {
  const g$$6 = cenv$$21.g;
  const limit$$12 = GetLimitVal(cenv$$21, env$$29, m$$16, (0, _tast.ValRef$$get_Deref)(vref$$3));

  if (cenv$$21.reportErrors) {
    if ((0, _Util.equals)((0, _tast.ValRef$$get_BaseOrThisInfo)(vref$$3), new _tast.ValBaseOrThisInfo(1, "BaseVal"))) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkLimitationsOfBaseKeyword)(), m$$16));
    }

    let isCallOfConstructorOfAbstractType;

    if ((vFlags.tag === 1 ? true : false) ? (0, _tast.ValRef$$get_IsConstructor)(vref$$3) : false) {
      const matchValue$$10 = (0, _tast.ValRef$$get_DeclaringEntity)(vref$$3);

      if (matchValue$$10.tag === 0) {
        const tcref$$7 = matchValue$$10.fields[0];
        isCallOfConstructorOfAbstractType = (0, _TastOps.isAbstractTycon)((0, _tast.EntityRef$$get_Deref)(tcref$$7));
      } else {
        isCallOfConstructorOfAbstractType = false;
      }
    } else {
      isCallOfConstructorOfAbstractType = false;
    }

    if (isCallOfConstructorOfAbstractType) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcAbstractTypeCannotBeInstantiated)(), m$$16));
    }

    const isReturnExprBuiltUsingStackReferringByRefLike = PermitByRefExpr$$get_PermitOnlyReturnable(context$$4) ? ((limit$$12.flags & 1) === 1 ? limit$$12.scope >= env$$29.returnScope ? true : Limit$$get_IsLocal(limit$$12) ? PermitByRefExpr$$get_PermitOnlyReturnableNonLocal(context$$4) : false : false) ? true : (limit$$12.flags & 16) === 16 : false;

    if (isReturnExprBuiltUsingStackReferringByRefLike) {
      const isSpanLike = (0, _TastOps.isSpanLikeTy)(g$$6, m$$16, (0, _tast.ValRef$$get_Type)(vref$$3));
      const isCompGen = (0, _tast.ValRef$$get_IsCompilerGenerated)(vref$$3);
      const matchValue$$11 = [isSpanLike, isCompGen];

      if (matchValue$$11[0]) {
        if (matchValue$$11[1]) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoSpanLikeValueFromExpression)(), m$$16));
        } else {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoSpanLikeVariable$$Z721C83C5)((0, _tast.ValRef$$get_DisplayName)(vref$$3)), m$$16));
        }
      } else if (matchValue$$11[1]) {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoByrefAddressOfValueFromExpression)(), m$$16));
      } else {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoByrefAddressOfLocal$$Z721C83C5)((0, _tast.ValRef$$get_DisplayName)(vref$$3)), m$$16));
      }
    }

    const isReturnOfStructThis = (PermitByRefExpr$$get_PermitOnlyReturnable(context$$4) ? (0, _TastOps.isByrefTy)(g$$6, (0, _tast.ValRef$$get_Type)(vref$$3)) : false) ? (0, _Util.equals)((0, _tast.ValRef$$get_BaseOrThisInfo)(vref$$3), new _tast.ValBaseOrThisInfo(3, "MemberThisVal")) : false;

    if (isReturnOfStructThis) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkStructsMayNotReturnAddressesOfContents)(), m$$16));
    }
  }

  CheckValRef(cenv$$21, env$$29, vref$$3, m$$16, context$$4);
  return limit$$12;
}

function CheckForOverAppliedExceptionRaisingPrimitive(cenv$$22, expr$$2) {
  var xs$$1, typC, typB, newFormat, formatString, formatRange, funcRange$$4, failwithfFunc, v$$15, funcRange$$2, v$$13, funcRange;
  const g$$7 = cenv$$22.g;
  const expr$$3 = (0, _TastOps.stripExpr)(expr$$2);

  if (expr$$3.tag === 5) {
    const f$$8 = expr$$3.fields[0];
    const argsl$$2 = expr$$3.fields[3];
    const _tyargs$$1 = expr$$3.fields[2];
    const _m = expr$$3.fields[4];
    const _fty$$1 = expr$$3.fields[1];

    if (cenv$$22.reportErrors) {
      var $target$$88, funcRange$$1, v$$14;
      const activePatternResult45234 = $007COptionalCoerce$007C(f$$8);

      if (activePatternResult45234.tag === 1) {
        if (v$$13 = activePatternResult45234.fields[0], (funcRange = activePatternResult45234.fields[2], (((0, _TastOps.valRefEq)(g$$7, v$$13, (0, _TcGlobals.TcGlobals$$get_raise_vref)(g$$7)) ? true : (0, _TastOps.valRefEq)(g$$7, v$$13, (0, _TcGlobals.TcGlobals$$get_failwith_vref)(g$$7))) ? true : (0, _TastOps.valRefEq)(g$$7, v$$13, (0, _TcGlobals.TcGlobals$$get_null_arg_vref)(g$$7))) ? true : (0, _TastOps.valRefEq)(g$$7, v$$13, (0, _TcGlobals.TcGlobals$$get_invalid_op_vref)(g$$7)))) {
          $target$$88 = 0;
          funcRange$$1 = activePatternResult45234.fields[2];
          v$$14 = activePatternResult45234.fields[0];
        } else {
          $target$$88 = 1;
        }
      } else {
        $target$$88 = 1;
      }

      switch ($target$$88) {
        case 0:
          {
            var $target$$89;

            if (argsl$$2.tail != null) {
              if (argsl$$2.tail.tail != null) {
                $target$$89 = 1;
              } else {
                $target$$89 = 0;
              }
            } else {
              $target$$89 = 0;
            }

            switch ($target$$89) {
              case 1:
                {
                  (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$checkRaiseFamilyFunctionArgumentCount$$487EF8FB)((0, _tast.ValRef$$get_DisplayName)(v$$14), 1, (0, _List.length)(argsl$$2)), funcRange$$1));
                  break;
                }
            }

            break;
          }

        case 1:
          {
            var $target$$90, funcRange$$3, v$$16;
            const activePatternResult45233 = $007COptionalCoerce$007C(f$$8);

            if (activePatternResult45233.tag === 1) {
              if (v$$15 = activePatternResult45233.fields[0], (funcRange$$2 = activePatternResult45233.fields[2], (0, _TastOps.valRefEq)(g$$7, v$$15, (0, _TcGlobals.TcGlobals$$get_invalid_arg_vref)(g$$7)))) {
                $target$$90 = 0;
                funcRange$$3 = activePatternResult45233.fields[2];
                v$$16 = activePatternResult45233.fields[0];
              } else {
                $target$$90 = 1;
              }
            } else {
              $target$$90 = 1;
            }

            switch ($target$$90) {
              case 0:
                {
                  var $target$$91;

                  if (argsl$$2.tail != null) {
                    if (argsl$$2.tail.tail != null) {
                      if (argsl$$2.tail.tail.tail != null) {
                        $target$$91 = 1;
                      } else {
                        $target$$91 = 0;
                      }
                    } else {
                      $target$$91 = 0;
                    }
                  } else {
                    $target$$91 = 0;
                  }

                  switch ($target$$91) {
                    case 1:
                      {
                        (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$checkRaiseFamilyFunctionArgumentCount$$487EF8FB)((0, _tast.ValRef$$get_DisplayName)(v$$16), 2, (0, _List.length)(argsl$$2)), funcRange$$3));
                        break;
                      }
                  }

                  break;
                }

              case 1:
                {
                  var $target$$92, failwithfFunc$$1, funcRange$$5;
                  const activePatternResult45232 = $007COptionalCoerce$007C(f$$8);

                  if (activePatternResult45232.tag === 1) {
                    if (funcRange$$4 = activePatternResult45232.fields[2], (failwithfFunc = activePatternResult45232.fields[0], (0, _TastOps.valRefEq)(g$$7, failwithfFunc, (0, _TcGlobals.TcGlobals$$get_failwithf_vref)(g$$7)))) {
                      $target$$92 = 0;
                      failwithfFunc$$1 = activePatternResult45232.fields[0];
                      funcRange$$5 = activePatternResult45232.fields[2];
                    } else {
                      $target$$92 = 1;
                    }
                  } else {
                    $target$$92 = 1;
                  }

                  switch ($target$$92) {
                    case 0:
                      {
                        var $target$$93, formatRange$$1, formatString$$1, newFormat$$1, typB$$1, typC$$1, xs$$2;

                        if (argsl$$2.tail != null) {
                          if (argsl$$2.head.tag === 5) {
                            if (argsl$$2.head.fields[0].tag === 1) {
                              if (argsl$$2.head.fields[2].tail != null) {
                                if (argsl$$2.head.fields[2].tail.tail != null) {
                                  if (argsl$$2.head.fields[2].tail.tail.tail != null) {
                                    if (argsl$$2.head.fields[2].tail.tail.tail.tail != null) {
                                      if (argsl$$2.head.fields[2].tail.tail.tail.tail.tail != null) {
                                        if (argsl$$2.head.fields[2].tail.tail.tail.tail.tail.tail == null) {
                                          if (argsl$$2.head.fields[3].tail != null) {
                                            if (argsl$$2.head.fields[3].head.tag === 0) {
                                              if (argsl$$2.head.fields[3].head.fields[0].tag === 14) {
                                                if (argsl$$2.head.fields[3].tail.tail == null) {
                                                  if (xs$$1 = argsl$$2.tail, (typC = argsl$$2.head.fields[2].tail.tail.head, (typB = argsl$$2.head.fields[2].tail.head, (newFormat = argsl$$2.head.fields[0].fields[0], (formatString = argsl$$2.head.fields[3].head.fields[0].fields[0], (formatRange = argsl$$2.head.fields[3].head.fields[1], (0, _TastOps.valRefEq)(g$$7, newFormat, (0, _TcGlobals.TcGlobals$$get_new_format_vref)(g$$7)))))))) {
                                                    $target$$93 = 0;
                                                    formatRange$$1 = argsl$$2.head.fields[3].head.fields[1];
                                                    formatString$$1 = argsl$$2.head.fields[3].head.fields[0].fields[0];
                                                    newFormat$$1 = argsl$$2.head.fields[0].fields[0];
                                                    typB$$1 = argsl$$2.head.fields[2].tail.head;
                                                    typC$$1 = argsl$$2.head.fields[2].tail.tail.head;
                                                    xs$$2 = argsl$$2.tail;
                                                  } else {
                                                    $target$$93 = 1;
                                                  }
                                                } else {
                                                  $target$$93 = 1;
                                                }
                                              } else {
                                                $target$$93 = 1;
                                              }
                                            } else {
                                              $target$$93 = 1;
                                            }
                                          } else {
                                            $target$$93 = 1;
                                          }
                                        } else {
                                          $target$$93 = 1;
                                        }
                                      } else {
                                        $target$$93 = 1;
                                      }
                                    } else {
                                      $target$$93 = 1;
                                    }
                                  } else {
                                    $target$$93 = 1;
                                  }
                                } else {
                                  $target$$93 = 1;
                                }
                              } else {
                                $target$$93 = 1;
                              }
                            } else {
                              $target$$93 = 1;
                            }
                          } else {
                            $target$$93 = 1;
                          }
                        } else {
                          $target$$93 = 1;
                        }

                        switch ($target$$93) {
                          case 0:
                            {
                              const matchValue$$12 = (0, _CheckFormatStrings.TryCountFormatStringArguments)(formatRange$$1, g$$7, formatString$$1, typB$$1, typC$$1);

                              if (matchValue$$12 == null) {} else {
                                const n$$2 = matchValue$$12 | 0;
                                const expected = n$$2 + 1 | 0;
                                const actual = (0, _List.length)(xs$$2) + 1 | 0;

                                if (expected < actual) {
                                  (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$checkRaiseFamilyFunctionArgumentCount$$487EF8FB)((0, _tast.ValRef$$get_DisplayName)(failwithfFunc$$1), expected, actual), funcRange$$5));
                                }
                              }

                              break;
                            }
                        }

                        break;
                      }
                  }

                  break;
                }
            }

            break;
          }
      }
    }
  }
}

function CheckCallLimitArgs(cenv$$23, env$$31, m$$17, returnTy, limitArgs, context$$6) {
  const isReturnByref = (0, _TastOps.isByrefTy)(cenv$$23.g, returnTy);
  const isReturnSpanLike = (0, _TastOps.isSpanLikeTy)(cenv$$23.g, m$$17, returnTy);
  const isReturnLimitedByRef = isReturnByref ? (limitArgs.flags & 1) === 1 ? true : (limitArgs.flags & 16) === 16 : false;
  const isReturnLimitedSpanLike = isReturnSpanLike ? (limitArgs.flags & 16) === 16 ? true : (limitArgs.flags & 5) === 5 : false;

  if (cenv$$23.reportErrors) {
    if (PermitByRefExpr$$get_PermitOnlyReturnable(context$$6) ? (isReturnLimitedByRef ? limitArgs.scope >= env$$31.returnScope ? true : Limit$$get_IsLocal(limitArgs) ? PermitByRefExpr$$get_PermitOnlyReturnableNonLocal(context$$6) : false : false) ? true : isReturnLimitedSpanLike : false) {
      if (isReturnLimitedSpanLike) {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoSpanLikeValueFromExpression)(), m$$17));
      } else {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoByrefAddressOfValueFromExpression)(), m$$17));
      }
    }

    const isCallLimited = (limitArgs.flags & 3) === 3 ? (limitArgs.flags & 16) === 16 ? true : (limitArgs.flags & 5) === 5 : false;

    if (isCallLimited) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoByrefLikeFunctionCall)(), m$$17));
    }
  }

  if (isReturnLimitedByRef) {
    if ((0, _TastOps.isSpanLikeTy)(cenv$$23.g, m$$17, (0, _TastOps.destByrefTy)(cenv$$23.g, returnTy))) {
      const isStackReferring = (limitArgs.flags & 16) === 16 ? true : (limitArgs.flags & 5) === 5;

      if (isStackReferring) {
        return new Limit(limitArgs.scope, 5);
      } else {
        return new Limit(limitArgs.scope, 3);
      }
    } else {
      return new Limit(limitArgs.scope, 1);
    }
  } else if (isReturnLimitedSpanLike) {
    return new Limit(1, 16);
  } else if (isReturnByref) {
    if ((0, _TastOps.isSpanLikeTy)(cenv$$23.g, m$$17, (0, _TastOps.destByrefTy)(cenv$$23.g, returnTy))) {
      return new Limit(limitArgs.scope, 3);
    } else {
      return new Limit(limitArgs.scope, 1);
    }
  } else if (isReturnSpanLike) {
    return new Limit(1, 8);
  } else {
    return new Limit(1, 0);
  }
}

function CheckCall(cenv$$24, env$$33, m$$18, returnTy$$1, args, contexts, context$$8) {
  const limitArgs$$1 = CheckExprs(cenv$$24, env$$33, args, contexts);
  return CheckCallLimitArgs(cenv$$24, env$$33, m$$18, returnTy$$1, limitArgs$$1, context$$8);
}

function CheckCallWithReceiver(cenv$$25, env$$34, m$$19, returnTy$$2, args$$1, contexts$$1, context$$9) {
  if (args$$1.tail != null) {
    const receiverArg = args$$1.head;
    const args$$2 = args$$1.tail;
    let patternInput;

    if (contexts$$1.tail != null) {
      const contexts$$2 = contexts$$1.tail;
      const context$$10 = contexts$$1.head;
      patternInput = [context$$10, contexts$$2];
    } else {
      patternInput = [new PermitByRefExpr(4, "No"), (0, _Types.L)()];
    }

    const receiverLimit = CheckExpr(cenv$$25, env$$34, receiverArg, patternInput[0]);
    let limitArgs$$3;
    const limitArgs$$2 = CheckExprs(cenv$$25, env$$34, args$$2, patternInput[1]);
    limitArgs$$3 = (receiverLimit.flags & 5) === 5 ? CombineTwoLimits(limitArgs$$2, new Limit(1, receiverLimit.flags)) : limitArgs$$2;
    return CheckCallLimitArgs(cenv$$25, env$$34, m$$19, returnTy$$2, limitArgs$$3, context$$9);
  } else {
    throw new Error("CheckCallWithReceiver: Argument list is empty.");
  }
}

function CheckExpr(cenv$$26, env$$35, origExpr, context$$11) {
  var tcref$$8, vref$$7, vref$$5, tinst$$3, m$$29, arg, ty$$25, ty$$23, virt, tys$$4, tyargs$$4, rest$$2, mref, methTypeArgs, m$$26, enclTypeArgs, baseVal$$2, vFlags$$1, v$$17, tyargs$$2, rest, m$$20, f$$9, baseVal, _fty$$2;

  CheckExpr: while (true) {
    const g$$8 = cenv$$26.g;
    const origExpr$$1 = (0, _TastOps.stripExpr)(origExpr);
    CheckForOverAppliedExceptionRaisingPrimitive(cenv$$26, origExpr$$1);
    const expr$$4 = (0, _TastOps.NormalizeAndAdjustPossibleSubsumptionExprs)(g$$8, origExpr$$1);
    const expr$$5 = (0, _TastOps.stripExpr)(expr$$4);

    var $target$$94, dir, e1, e2, _bindRhs, bind, body$$3, v$$18, m$$21, ty$$19, m$$22, vFlags$$2, vref$$4, _isFromQueryExpression, ast, m$$23, savedConv, ty$$20, basev, iimpls, m$$24, overrides, superInitCall, ty$$21, _fty$$3, baseVal$$1, f$$10, m$$25, rest$$1, tyargs$$3, v$$19, vFlags$$3;

    if (expr$$5.tag === 2) {
      $target$$94 = 0;
      dir = expr$$5.fields[2];
      e1 = expr$$5.fields[0];
      e2 = expr$$5.fields[1];
    } else if (expr$$5.tag === 7) {
      $target$$94 = 1;
      _bindRhs = expr$$5.fields[0].fields[1];
      bind = expr$$5.fields[0];
      body$$3 = expr$$5.fields[1];
      v$$18 = expr$$5.fields[0].fields[0];
    } else if (expr$$5.tag === 0) {
      $target$$94 = 2;
      m$$21 = expr$$5.fields[1];
      ty$$19 = expr$$5.fields[2];
    } else if (expr$$5.tag === 1) {
      $target$$94 = 3;
      m$$22 = expr$$5.fields[2];
      vFlags$$2 = expr$$5.fields[1];
      vref$$4 = expr$$5.fields[0];
    } else if (expr$$5.tag === 12) {
      $target$$94 = 4;
      _isFromQueryExpression = expr$$5.fields[2];
      ast = expr$$5.fields[0];
      m$$23 = expr$$5.fields[3];
      savedConv = expr$$5.fields[1];
      ty$$20 = expr$$5.fields[4];
    } else if (expr$$5.tag === 8) {
      $target$$94 = 5;
      basev = expr$$5.fields[2];
      iimpls = expr$$5.fields[5];
      m$$24 = expr$$5.fields[6];
      overrides = expr$$5.fields[4];
      superInitCall = expr$$5.fields[3];
      ty$$21 = expr$$5.fields[1];
    } else if (expr$$5.tag === 5) {
      const activePatternResult45273 = (0, _TastOps.$007CInnerExprPat$007C)(expr$$5.fields[0]);
      const activePatternResult45274 = (0, _TastOps.$007CExprValWithPossibleTypeInst$007C_$007C)(activePatternResult45273);

      if (activePatternResult45274 != null) {
        if (expr$$5.fields[3].tail != null) {
          if (expr$$5.fields[3].head.tag === 1) {
            if (vFlags$$1 = activePatternResult45274[1], (v$$17 = activePatternResult45274[0], (tyargs$$2 = expr$$5.fields[2], (rest = expr$$5.fields[3].tail, (m$$20 = expr$$5.fields[4], (f$$9 = activePatternResult45273, (baseVal = expr$$5.fields[3].head.fields[0], (_fty$$2 = expr$$5.fields[1], (vFlags$$1.tag === 4 ? true : false) ? (0, _Util.equals)((0, _tast.ValRef$$get_BaseOrThisInfo)(baseVal), new _tast.ValBaseOrThisInfo(1, "BaseVal")) : false)))))))) {
              $target$$94 = 6;
              _fty$$3 = expr$$5.fields[1];
              baseVal$$1 = expr$$5.fields[3].head.fields[0];
              f$$10 = activePatternResult45273;
              m$$25 = expr$$5.fields[4];
              rest$$1 = expr$$5.fields[3].tail;
              tyargs$$3 = expr$$5.fields[2];
              v$$19 = activePatternResult45274[0];
              vFlags$$3 = activePatternResult45274[1];
            } else {
              $target$$94 = 7;
            }
          } else {
            $target$$94 = 7;
          }
        } else {
          $target$$94 = 7;
        }
      } else {
        $target$$94 = 7;
      }
    } else {
      $target$$94 = 7;
    }

    switch ($target$$94) {
      case 0:
        {
          CheckExprNoByrefs(cenv$$26, env$$35, e1);

          if (dir.tag === 1) {
            CheckExprNoByrefs(cenv$$26, new env(env$$35.boundTyparNames, env$$35.boundTypars, env$$35.argVals, env$$35.sigToImplRemapInfo, false, env$$35.quote, env$$35.reflect, env$$35.external, env$$35.returnScope), e2);
            return NoLimit;
          } else {
            cenv$$26 = cenv$$26;
            env$$35 = env$$35;
            origExpr = e2;
            context$$11 = context$$11;
            continue CheckExpr;
          }
        }

      case 1:
        {
          const isByRef = (0, _TastOps.isByrefTy)(cenv$$26.g, (0, _tast.Val$$get_Type)(v$$18));
          const bindingContext = isByRef ? new PermitByRefExpr(2, "YesReturnable") : new PermitByRefExpr(1, "Yes");
          const limit$$27 = CheckBinding(cenv$$26, new env(env$$35.boundTyparNames, env$$35.boundTypars, env$$35.argVals, env$$35.sigToImplRemapInfo, env$$35.ctorLimitedZone, env$$35.quote, env$$35.reflect, env$$35.external, env$$35.returnScope + 1), false, bindingContext, bind);
          BindVal(cenv$$26, env$$35, v$$18);
          LimitVal(cenv$$26, v$$18, new Limit(isByRef ? limit$$27.scope : env$$35.returnScope, limit$$27.flags));
          cenv$$26 = cenv$$26;
          env$$35 = env$$35;
          origExpr = body$$3;
          context$$11 = context$$11;
          continue CheckExpr;
        }

      case 2:
        {
          CheckTypePermitAllByrefs(cenv$$26, env$$35, m$$21, ty$$19);
          return NoLimit;
        }

      case 3:
        {
          return CheckValUse(cenv$$26, env$$35, vref$$4, vFlags$$2, m$$22, context$$11);
        }

      case 4:
        {
          CheckExprNoByrefs(cenv$$26, new env(env$$35.boundTyparNames, env$$35.boundTypars, env$$35.argVals, env$$35.sigToImplRemapInfo, env$$35.ctorLimitedZone, true, env$$35.reflect, env$$35.external, env$$35.returnScope), ast);

          if (cenv$$26.reportErrors) {
            cenv$$26.usesQuotations = true;

            try {
              const qscope = (0, _QuotationTranslator.QuotationGenerationScope$$$Create$$Z76DDC216)(g$$8, cenv$$26.amap, cenv$$26.viewCcu, new _QuotationTranslator.IsReflectedDefinition(1, "No"));
              const qdata = (0, _QuotationTranslator.ConvExprPublic)(qscope, (0, _QuotationTranslator.QuotationTranslationEnv$$$get_Empty)(), ast);
              const patternInput$$1 = (0, _QuotationTranslator.QuotationGenerationScope$$Close)(qscope);

              if (savedConv.contents != null) {} else {
                savedConv.contents = [patternInput$$1[0], (0, _List.map)(function (tuple$$1) {
                  return tuple$$1[0];
                }, patternInput$$1[1]), (0, _List.map)(function (tuple$$2) {
                  return tuple$$2[0];
                }, patternInput$$1[2]), qdata];
              }
            } catch (matchValue$$14) {
              if (matchValue$$14 instanceof _QuotationTranslator.InvalidQuotedTerm) {
                (0, _ErrorLogger.errorRecovery)(matchValue$$14.Data0, m$$23);
              } else {
                throw matchValue$$14;
              }
            }
          }

          CheckTypeNoByrefs(cenv$$26, env$$35, m$$23, ty$$20);
          return NoLimit;
        }

      case 5:
        {
          CheckExprNoByrefs(cenv$$26, env$$35, superInitCall);
          CheckMethods(cenv$$26, env$$35, basev, overrides);
          CheckInterfaceImpls(cenv$$26, env$$35, basev, iimpls);
          CheckTypeNoByrefs(cenv$$26, env$$35, m$$24, ty$$21);
          const interfaces$$1 = (0, _List.filter)(function predicate(arg10$0040) {
            return (0, _TastOps.isInterfaceTy)(g$$8, arg10$0040);
          }, (0, _List.ofSeq)((0, _Seq.delay)(function () {
            return (0, _Seq.append)((0, _TastOps.isInterfaceTy)(g$$8, ty$$21) ? (0, _infos.AllSuperTypesOfType)(g$$8, cenv$$26.amap, m$$24, new _infos.AllowMultiIntfInstantiations(0, "Yes"), ty$$21) : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
              return (0, _Seq.collect)(function (matchValue$$15) {
                return (0, _infos.AllSuperTypesOfType)(g$$8, cenv$$26.amap, m$$24, new _infos.AllowMultiIntfInstantiations(0, "Yes"), matchValue$$15[0]);
              }, iimpls);
            }));
          })));
          CheckMultipleInterfaceInstantiations(cenv$$26, interfaces$$1, m$$24);
          return NoLimit;
        }

      case 6:
        {
          const memberInfo = (0, _tast.ValRef$$get_MemberInfo)(v$$19);

          if (memberInfo.MemberFlags.IsDispatchSlot) {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcCannotCallAbstractBaseMember$$Z721C83C5)((0, _tast.ValRef$$get_DisplayName)(v$$19)), m$$25));
            return NoLimit;
          } else {
            CheckValRef(cenv$$26, env$$35, v$$19, m$$25, new PermitByRefExpr(4, "No"));
            CheckValRef(cenv$$26, env$$35, baseVal$$1, m$$25, new PermitByRefExpr(4, "No"));
            CheckTypeInstNoByrefs(cenv$$26, env$$35, m$$25, tyargs$$3);
            return CheckExprs(cenv$$26, env$$35, rest$$1, mkArgsForAppliedExpr(true, rest$$1, f$$10));
          }
        }

      case 7:
        {
          var $target$$95, baseVal$$3, enclTypeArgs$$1, m$$27, methTypeArgs$$1, mref$$1, rest$$3, tyargs$$5, tys$$5, virt$$1;

          if (expr$$5.tag === 11) {
            if (expr$$5.fields[0].tag === 31) {
              if (expr$$5.fields[2].tail != null) {
                if (expr$$5.fields[2].head.tag === 1) {
                  if (virt = expr$$5.fields[0].fields[0], (tys$$4 = expr$$5.fields[0].fields[10], (tyargs$$4 = expr$$5.fields[1], (rest$$2 = expr$$5.fields[2].tail, (mref = expr$$5.fields[0].fields[7], (methTypeArgs = expr$$5.fields[0].fields[9], (m$$26 = expr$$5.fields[3], (enclTypeArgs = expr$$5.fields[0].fields[8], (baseVal$$2 = expr$$5.fields[2].head.fields[0], !virt ? (0, _Util.equals)((0, _tast.ValRef$$get_BaseOrThisInfo)(baseVal$$2), new _tast.ValBaseOrThisInfo(1, "BaseVal")) : false))))))))) {
                    $target$$95 = 0;
                    baseVal$$3 = expr$$5.fields[2].head.fields[0];
                    enclTypeArgs$$1 = expr$$5.fields[0].fields[8];
                    m$$27 = expr$$5.fields[3];
                    methTypeArgs$$1 = expr$$5.fields[0].fields[9];
                    mref$$1 = expr$$5.fields[0].fields[7];
                    rest$$3 = expr$$5.fields[2].tail;
                    tyargs$$5 = expr$$5.fields[1];
                    tys$$5 = expr$$5.fields[0].fields[10];
                    virt$$1 = expr$$5.fields[0].fields[0];
                  } else {
                    $target$$95 = 1;
                  }
                } else {
                  $target$$95 = 1;
                }
              } else {
                $target$$95 = 1;
              }
            } else {
              $target$$95 = 1;
            }
          } else {
            $target$$95 = 1;
          }

          switch ($target$$95) {
            case 0:
              {
                const matchValue$$16 = (0, _TastOps.tryDestAppTy)(g$$8, (0, _tast.ValRef$$get_Type)(baseVal$$3));
                var $target$$96, tcref$$9;

                if (matchValue$$16 != null) {
                  if (tcref$$8 = matchValue$$16, (0, _tast.EntityRef$$get_IsILTycon)(tcref$$8)) {
                    $target$$96 = 0;
                    tcref$$9 = matchValue$$16;
                  } else {
                    $target$$96 = 1;
                  }
                } else {
                  $target$$96 = 1;
                }

                switch ($target$$96) {
                  case 0:
                    {
                      try {
                        const mdef = (0, _il.resolveILMethodRef)((0, _tast.EntityRef$$get_ILTyconRawMetadata)(tcref$$9), mref$$1);

                        if ((0, _il.ILMethodDef$$get_IsAbstract)(mdef)) {
                          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcCannotCallAbstractBaseMember$$Z721C83C5)((0, _il.ILMethodDef$$get_Name)(mdef)), m$$27));
                        }
                      } catch (matchValue$$17) {}

                      break;
                    }
                }

                CheckTypeInstNoByrefs(cenv$$26, env$$35, m$$27, tyargs$$5);
                CheckTypeInstNoByrefs(cenv$$26, env$$35, m$$27, enclTypeArgs$$1);
                CheckTypeInstNoByrefs(cenv$$26, env$$35, m$$27, methTypeArgs$$1);
                CheckTypeInstNoByrefs(cenv$$26, env$$35, m$$27, tys$$5);
                CheckValRef(cenv$$26, env$$35, baseVal$$3, m$$27, new PermitByRefExpr(4, "No"));
                return CheckExprsPermitByRefLike(cenv$$26, env$$35, rest$$3);
              }

            case 1:
              {
                var $target$$97, args$$3, c, m$$28, tyargs$$6, ty$$24;

                if (expr$$5.tag === 11) {
                  $target$$97 = 0;
                  args$$3 = expr$$5.fields[2];
                  c = expr$$5.fields[0];
                  m$$28 = expr$$5.fields[3];
                  tyargs$$6 = expr$$5.fields[1];
                } else {
                  const activePatternResult45272 = (0, _TastOps.$007CTypeOfExpr$007C_$007C)(g$$8, expr$$5);

                  if (activePatternResult45272 != null) {
                    if (ty$$23 = activePatternResult45272, (0, _TastOps.isVoidTy)(g$$8, ty$$23)) {
                      $target$$97 = 1;
                      ty$$24 = activePatternResult45272;
                    } else {
                      $target$$97 = 2;
                    }
                  } else {
                    $target$$97 = 2;
                  }
                }

                switch ($target$$97) {
                  case 0:
                    {
                      return CheckExprOp(cenv$$26, env$$35, c, tyargs$$6, args$$3, m$$28, context$$11, expr$$5);
                    }

                  case 1:
                    {
                      return NoLimit;
                    }

                  case 2:
                    {
                      var $target$$98, ty$$26;
                      const activePatternResult45270 = (0, _TastOps.$007CTypeDefOfExpr$007C_$007C)(g$$8, expr$$5);

                      if (activePatternResult45270 != null) {
                        if (ty$$25 = activePatternResult45270, (0, _TastOps.isVoidTy)(g$$8, ty$$25)) {
                          $target$$98 = 0;
                          ty$$26 = activePatternResult45270;
                        } else {
                          $target$$98 = 1;
                        }
                      } else {
                        $target$$98 = 1;
                      }

                      switch ($target$$98) {
                        case 0:
                          {
                            return NoLimit;
                          }

                        case 1:
                          {
                            var $target$$99, arg$$1, m$$30, tinst$$4, vref$$6;

                            if (expr$$5.tag === 5) {
                              if (expr$$5.fields[0].tag === 1) {
                                if (expr$$5.fields[3].tail != null) {
                                  if (expr$$5.fields[3].tail.tail == null) {
                                    if (vref$$5 = expr$$5.fields[0].fields[0], (tinst$$3 = expr$$5.fields[2], (m$$29 = expr$$5.fields[4], (arg = expr$$5.fields[3].head, isSpliceOperator(g$$8, vref$$5) ? env$$35.quote : false)))) {
                                      $target$$99 = 0;
                                      arg$$1 = expr$$5.fields[3].head;
                                      m$$30 = expr$$5.fields[4];
                                      tinst$$4 = expr$$5.fields[2];
                                      vref$$6 = expr$$5.fields[0].fields[0];
                                    } else {
                                      $target$$99 = 1;
                                    }
                                  } else {
                                    $target$$99 = 1;
                                  }
                                } else {
                                  $target$$99 = 1;
                                }
                              } else {
                                $target$$99 = 1;
                              }
                            } else {
                              $target$$99 = 1;
                            }

                            switch ($target$$99) {
                              case 0:
                                {
                                  CheckTypeInstPermitAllByrefs(cenv$$26, env$$35, m$$30, tinst$$4);
                                  CheckExprNoByrefs(cenv$$26, env$$35, arg$$1);
                                  return NoLimit;
                                }

                              case 1:
                                {
                                  switch (expr$$5.tag) {
                                    case 5:
                                      {
                                        const tyargs$$7 = expr$$5.fields[2];
                                        const m$$31 = expr$$5.fields[4];
                                        const f$$11 = expr$$5.fields[0];
                                        const argsl$$3 = expr$$5.fields[3];
                                        const _fty$$4 = expr$$5.fields[1];
                                        CheckTypeInstNoByrefs(cenv$$26, env$$35, m$$31, tyargs$$7);
                                        CheckExprNoByrefs(cenv$$26, env$$35, f$$11);
                                        const hasReceiver = f$$11.tag === 1 ? (vref$$7 = f$$11.fields[0], (0, _tast.ValRef$$get_IsInstanceMember)(vref$$7) ? !(argsl$$3.tail == null) : false) ? true : false : false;
                                        const returnTy$$3 = (0, _TastOps.tyOfExpr)(g$$8, expr$$5);
                                        const contexts$$4 = mkArgsForAppliedExpr(false, argsl$$3, f$$11);

                                        if (hasReceiver) {
                                          return CheckCallWithReceiver(cenv$$26, env$$35, m$$31, returnTy$$3, argsl$$3, contexts$$4, context$$11);
                                        } else {
                                          return CheckCall(cenv$$26, env$$35, m$$31, returnTy$$3, argsl$$3, contexts$$4, context$$11);
                                        }
                                      }

                                    case 3:
                                      {
                                        const rty$$1 = expr$$5.fields[6];
                                        const m$$32 = expr$$5.fields[5];
                                        const argvs = expr$$5.fields[3];
                                        const _ctorThisValOpt = expr$$5.fields[1];
                                        const _baseValOpt = expr$$5.fields[2];
                                        const topValInfo$$1 = new _tast.ValReprInfo(0, "ValReprInfo", (0, _Types.L)(), (0, _Types.L)((0, _List.map)(function mapping(_arg1$$3) {
                                          return _tast.ValReprInfoModule$$$unnamedTopArg1;
                                        }, argvs), (0, _Types.L)()), _tast.ValReprInfoModule$$$unnamedRetVal);
                                        const ty$$27 = (0, _TastOps.mkMultiLambdaTy)(m$$32, argvs, rty$$1);
                                        return CheckLambdas(false, null, cenv$$26, env$$35, false, topValInfo$$1, false, expr$$5, m$$32, ty$$27, new PermitByRefExpr(1, "Yes"));
                                      }

                                    case 4:
                                      {
                                        const tps$$3 = expr$$5.fields[1];
                                        const rty$$2 = expr$$5.fields[4];
                                        const m$$33 = expr$$5.fields[3];
                                        const topValInfo$$2 = new _tast.ValReprInfo(0, "ValReprInfo", (0, _tast.ValReprInfoModule$$$InferTyparInfo)(tps$$3), (0, _Types.L)(), _tast.ValReprInfoModule$$$unnamedRetVal);
                                        const ty$$28 = (0, _TastOps.mkForallTyIfNeeded)(tps$$3, rty$$2);
                                        return CheckLambdas(false, null, cenv$$26, env$$35, false, topValInfo$$2, false, expr$$5, m$$33, ty$$28, new PermitByRefExpr(1, "Yes"));
                                      }

                                    case 13:
                                      {
                                        const tps$$4 = expr$$5.fields[0];
                                        const e1$$1 = expr$$5.fields[1];
                                        const env$$36 = BindTypars(g$$8, env$$35, tps$$4);
                                        CheckExprNoByrefs(cenv$$26, env$$36, e1$$1);
                                        return NoLimit;
                                      }

                                    case 9:
                                      {
                                        const ty$$29 = expr$$5.fields[5];
                                        const targets = expr$$5.fields[3];
                                        const m$$34 = expr$$5.fields[4];
                                        const dtree = expr$$5.fields[2];
                                        CheckTypePermitAllByrefs(cenv$$26, env$$35, m$$34, ty$$29);
                                        CheckDecisionTree(cenv$$26, env$$35, dtree);
                                        return CheckDecisionTreeTargets(cenv$$26, env$$35, targets, context$$11);
                                      }

                                    case 6:
                                      {
                                        const e$$1 = expr$$5.fields[1];
                                        const binds = expr$$5.fields[0];
                                        BindVals(cenv$$26, env$$35, (0, _TastOps.valsOfBinds)(binds));
                                        CheckBindings(cenv$$26, env$$35, binds);
                                        CheckExprNoByrefs(cenv$$26, env$$35, e$$1);
                                        return NoLimit;
                                      }

                                    case 10:
                                      {
                                        const m$$35 = expr$$5.fields[3];
                                        const e3 = expr$$5.fields[2];
                                        const e2$$1 = expr$$5.fields[1];
                                        const constraints = expr$$5.fields[0];
                                        CheckExprNoByrefs(cenv$$26, env$$35, e2$$1);
                                        CheckExprNoByrefs(cenv$$26, env$$35, e3);
                                        (0, _List.iterate)(function action$$7(_arg7) {
                                          if (_arg7.tag === 1) {
                                            const ty1$$1 = _arg7.fields[0];
                                            CheckTypeNoByrefs(cenv$$26, env$$35, m$$35, ty1$$1);
                                          } else {
                                            const ty2 = _arg7.fields[1];
                                            const ty1 = _arg7.fields[0];
                                            CheckTypeNoByrefs(cenv$$26, env$$35, m$$35, ty1);
                                            CheckTypeNoByrefs(cenv$$26, env$$35, m$$35, ty2);
                                          }
                                        }, constraints);
                                        return NoLimit;
                                      }

                                    case 14:
                                      {
                                        throw new Error("Unexpected reclink");
                                      }

                                    default:
                                      {
                                        throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/PostInferenceChecks.fs", 861, 10);
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

function CheckMethods(cenv$$27, env$$37, baseValOpt, methods) {
  (0, _List.iterate)(function action$$8(arg30$0040) {
    CheckMethod(cenv$$27, env$$37, baseValOpt, arg30$0040);
  }, methods);
}

function CheckMethod(cenv$$28, env$$38, baseValOpt$$1, _arg1$$4) {
  var x$$6;
  const vs$$2 = _arg1$$4.fields[3];
  const tps$$5 = _arg1$$4.fields[2];
  const m$$36 = _arg1$$4.fields[5];
  const body$$4 = _arg1$$4.fields[4];
  const attribs = _arg1$$4.fields[1];
  const env$$39 = BindTypars(cenv$$28.g, env$$38, tps$$5);
  const vs$$3 = (0, _List.concat)(vs$$2);
  const env$$40 = BindArgVals(env$$39, vs$$3);
  CheckAttribs(cenv$$28, env$$40, attribs);
  CheckNoReraise(cenv$$28, null, body$$4);
  CheckEscapes(cenv$$28, true, m$$36, baseValOpt$$1 == null ? vs$$3 : (x$$6 = baseValOpt$$1, (0, _Types.L)(x$$6, vs$$3)), body$$4);
  CheckExpr(cenv$$28, new env(env$$40.boundTyparNames, env$$40.boundTypars, env$$40.argVals, env$$40.sigToImplRemapInfo, env$$40.ctorLimitedZone, env$$40.quote, env$$40.reflect, env$$40.external, env$$40.returnScope + 1), body$$4, new PermitByRefExpr(3, "YesReturnableNonLocal"));
}

function CheckInterfaceImpls(cenv$$29, env$$41, baseValOpt$$2, l$$2) {
  (0, _List.iterate)(function action$$9(tupledArg$$2) {
    CheckInterfaceImpl(cenv$$29, env$$41, baseValOpt$$2, tupledArg$$2[0], tupledArg$$2[1]);
  }, l$$2);
}

function CheckInterfaceImpl(cenv$$30, env$$42, baseValOpt$$3, _ty$$1, overrides$$2) {
  CheckMethods(cenv$$30, env$$42, baseValOpt$$3, overrides$$2);
}

function CheckExprOp(cenv$$31, env$$43, op, tyargs$$8, args$$4, m$$37, context$$12, expr$$6) {
  var ty$$30, vref$$13, vref$$14, tupInfo;
  const g$$9 = cenv$$31.g;

  const ctorLimitedZoneCheck = function ctorLimitedZoneCheck() {
    if (env$$43.ctorLimitedZone) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkObjCtorsCantUseExceptionHandling)(), m$$37));
    }
  };

  const matchValue$$18 = [op, tyargs$$8, args$$4];

  var $target$$100, e1$$2, e2$$2, e1$$3, e2$$3, e1$$4, e2$$4, e3$$1, _e2, e1$$5, e3$$2, enclTypeArgs$$2, methRef, methTypeArgs$$2, tys$$6, tupInfo$$1;

  if (matchValue$$18[0].tag === 6) {
    if (matchValue$$18[2].tail != null) {
      if (matchValue$$18[2].head.tag === 3) {
        if (matchValue$$18[2].head.fields[3].tail != null) {
          if (matchValue$$18[2].head.fields[3].tail.tail == null) {
            if (matchValue$$18[2].tail.tail != null) {
              if (matchValue$$18[2].tail.head.tag === 3) {
                if (matchValue$$18[2].tail.head.fields[3].tail != null) {
                  if (matchValue$$18[2].tail.head.fields[3].tail.tail == null) {
                    if (matchValue$$18[2].tail.tail.tail == null) {
                      $target$$100 = 0;
                      e1$$2 = matchValue$$18[2].head.fields[4];
                      e2$$2 = matchValue$$18[2].tail.head.fields[4];
                    } else {
                      $target$$100 = 6;
                    }
                  } else {
                    $target$$100 = 6;
                  }
                } else {
                  $target$$100 = 6;
                }
              } else {
                $target$$100 = 6;
              }
            } else {
              $target$$100 = 6;
            }
          } else {
            $target$$100 = 6;
          }
        } else {
          $target$$100 = 6;
        }
      } else {
        $target$$100 = 6;
      }
    } else {
      $target$$100 = 6;
    }
  } else if (matchValue$$18[0].tag === 9) {
    if (matchValue$$18[1].tail != null) {
      if (matchValue$$18[1].tail.tail == null) {
        if (matchValue$$18[2].tail != null) {
          if (matchValue$$18[2].head.tag === 3) {
            if (matchValue$$18[2].head.fields[3].tail != null) {
              if (matchValue$$18[2].head.fields[3].tail.tail == null) {
                if (matchValue$$18[2].tail.tail != null) {
                  if (matchValue$$18[2].tail.head.tag === 3) {
                    if (matchValue$$18[2].tail.head.fields[3].tail != null) {
                      if (matchValue$$18[2].tail.head.fields[3].tail.tail == null) {
                        if (matchValue$$18[2].tail.tail.tail == null) {
                          $target$$100 = 1;
                          e1$$3 = matchValue$$18[2].head.fields[4];
                          e2$$3 = matchValue$$18[2].tail.head.fields[4];
                        } else {
                          $target$$100 = 6;
                        }
                      } else {
                        $target$$100 = 6;
                      }
                    } else {
                      $target$$100 = 6;
                    }
                  } else {
                    $target$$100 = 6;
                  }
                } else {
                  $target$$100 = 6;
                }
              } else {
                $target$$100 = 6;
              }
            } else {
              $target$$100 = 6;
            }
          } else {
            $target$$100 = 6;
          }
        } else {
          $target$$100 = 6;
        }
      } else {
        $target$$100 = 6;
      }
    } else {
      $target$$100 = 6;
    }
  } else if (matchValue$$18[0].tag === 7) {
    if (matchValue$$18[2].tail != null) {
      if (matchValue$$18[2].head.tag === 3) {
        if (matchValue$$18[2].head.fields[3].tail != null) {
          if (matchValue$$18[2].head.fields[3].tail.tail == null) {
            if (matchValue$$18[2].tail.tail != null) {
              if (matchValue$$18[2].tail.head.tag === 3) {
                if (matchValue$$18[2].tail.head.fields[3].tail != null) {
                  if (matchValue$$18[2].tail.head.fields[3].tail.tail == null) {
                    if (matchValue$$18[2].tail.tail.tail != null) {
                      if (matchValue$$18[2].tail.tail.head.tag === 3) {
                        if (matchValue$$18[2].tail.tail.head.fields[3].tail != null) {
                          if (matchValue$$18[2].tail.tail.head.fields[3].tail.tail == null) {
                            if (matchValue$$18[2].tail.tail.tail.tail == null) {
                              $target$$100 = 2;
                              e1$$4 = matchValue$$18[2].head.fields[4];
                              e2$$4 = matchValue$$18[2].tail.head.fields[4];
                              e3$$1 = matchValue$$18[2].tail.tail.head.fields[4];
                            } else {
                              $target$$100 = 6;
                            }
                          } else {
                            $target$$100 = 6;
                          }
                        } else {
                          $target$$100 = 6;
                        }
                      } else {
                        $target$$100 = 6;
                      }
                    } else {
                      $target$$100 = 6;
                    }
                  } else {
                    $target$$100 = 6;
                  }
                } else {
                  $target$$100 = 6;
                }
              } else {
                $target$$100 = 6;
              }
            } else {
              $target$$100 = 6;
            }
          } else {
            $target$$100 = 6;
          }
        } else {
          $target$$100 = 6;
        }
      } else {
        $target$$100 = 6;
      }
    } else {
      $target$$100 = 6;
    }
  } else if (matchValue$$18[0].tag === 8) {
    if (matchValue$$18[1].tail != null) {
      if (matchValue$$18[1].tail.tail == null) {
        if (matchValue$$18[2].tail != null) {
          if (matchValue$$18[2].head.tag === 3) {
            if (matchValue$$18[2].head.fields[3].tail != null) {
              if (matchValue$$18[2].head.fields[3].tail.tail == null) {
                if (matchValue$$18[2].tail.tail != null) {
                  if (matchValue$$18[2].tail.head.tag === 3) {
                    if (matchValue$$18[2].tail.head.fields[3].tail != null) {
                      if (matchValue$$18[2].tail.head.fields[3].tail.tail == null) {
                        if (matchValue$$18[2].tail.tail.tail != null) {
                          if (matchValue$$18[2].tail.tail.head.tag === 3) {
                            if (matchValue$$18[2].tail.tail.head.fields[3].tail != null) {
                              if (matchValue$$18[2].tail.tail.head.fields[3].tail.tail == null) {
                                if (matchValue$$18[2].tail.tail.tail.tail == null) {
                                  $target$$100 = 3;
                                  _e2 = matchValue$$18[2].tail.head.fields[4];
                                  e1$$5 = matchValue$$18[2].head.fields[4];
                                  e3$$2 = matchValue$$18[2].tail.tail.head.fields[4];
                                } else {
                                  $target$$100 = 6;
                                }
                              } else {
                                $target$$100 = 6;
                              }
                            } else {
                              $target$$100 = 6;
                            }
                          } else {
                            $target$$100 = 6;
                          }
                        } else {
                          $target$$100 = 6;
                        }
                      } else {
                        $target$$100 = 6;
                      }
                    } else {
                      $target$$100 = 6;
                    }
                  } else {
                    $target$$100 = 6;
                  }
                } else {
                  $target$$100 = 6;
                }
              } else {
                $target$$100 = 6;
              }
            } else {
              $target$$100 = 6;
            }
          } else {
            $target$$100 = 6;
          }
        } else {
          $target$$100 = 6;
        }
      } else {
        $target$$100 = 6;
      }
    } else {
      $target$$100 = 6;
    }
  } else if (matchValue$$18[0].tag === 31) {
    $target$$100 = 4;
    enclTypeArgs$$2 = matchValue$$18[0].fields[8];
    methRef = matchValue$$18[0].fields[7];
    methTypeArgs$$2 = matchValue$$18[0].fields[9];
    tys$$6 = matchValue$$18[0].fields[10];
  } else if (matchValue$$18[0].tag === 2) {
    if (tupInfo = matchValue$$18[0].fields[0], !(0, _TastOps.evalTupInfoIsStruct)(tupInfo)) {
      $target$$100 = 5;
      tupInfo$$1 = matchValue$$18[0].fields[0];
    } else {
      $target$$100 = 6;
    }
  } else {
    $target$$100 = 6;
  }

  switch ($target$$100) {
    case 0:
      {
        CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
        return CheckExprsNoByRefLike(cenv$$31, env$$43, (0, _Types.L)(e1$$2, (0, _Types.L)(e2$$2, (0, _Types.L)())));
      }

    case 1:
      {
        CheckTypeInstPermitAllByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
        ctorLimitedZoneCheck();
        const limit$$28 = CheckExpr(cenv$$31, env$$43, e1$$3, context$$12);
        CheckExprNoByrefs(cenv$$31, env$$43, e2$$3);
        return limit$$28;
      }

    case 2:
      {
        CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
        return CheckExprsNoByRefLike(cenv$$31, env$$43, (0, _Types.L)(e1$$4, (0, _Types.L)(e2$$4, (0, _Types.L)(e3$$1, (0, _Types.L)()))));
      }

    case 3:
      {
        CheckTypeInstPermitAllByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
        ctorLimitedZoneCheck();
        const limit1$$3 = CheckExpr(cenv$$31, env$$43, e1$$5, context$$12);
        const limit2$$3 = CheckExpr(cenv$$31, env$$43, e3$$2, context$$12);
        return CombineTwoLimits(limit1$$3, limit2$$3);
      }

    case 4:
      {
        CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
        CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, enclTypeArgs$$2);
        CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, methTypeArgs$$2);
        CheckTypeInstPermitAllByrefs(cenv$$31, env$$43, m$$37, tys$$6);
        const hasReceiver$$1 = ((0, _il.ILCallingConv$$get_IsInstance)((0, _il.ILMethodRef$$get_CallingConv)(methRef)) ? true : (0, _il.ILCallingConv$$get_IsInstanceExplicit)((0, _il.ILMethodRef$$get_CallingConv)(methRef))) ? !(args$$4.tail == null) : false;
        const returnTy$$4 = (0, _TastOps.tyOfExpr)(g$$9, expr$$6);
        const argContexts = (0, _List.initialize)((0, _List.length)(args$$4), function (_arg2$$1) {
          return new PermitByRefExpr(1, "Yes");
        });
        var $target$$101, ty$$31;

        if (tys$$6.tail != null) {
          if (tys$$6.tail.tail == null) {
            if (ty$$30 = tys$$6.head, PermitByRefExpr$$get_PermitOnlyReturnable(context$$12) ? (0, _TastOps.isByrefLikeTy)(g$$9, m$$37, ty$$30) : false) {
              $target$$101 = 0;
              ty$$31 = tys$$6.head;
            } else {
              $target$$101 = 1;
            }
          } else {
            $target$$101 = 1;
          }
        } else {
          $target$$101 = 1;
        }

        switch ($target$$101) {
          case 0:
            {
              if (hasReceiver$$1) {
                return CheckCallWithReceiver(cenv$$31, env$$43, m$$37, returnTy$$4, args$$4, argContexts, context$$12);
              } else {
                return CheckCall(cenv$$31, env$$43, m$$37, returnTy$$4, args$$4, argContexts, context$$12);
              }
            }

          case 1:
            {
              if (hasReceiver$$1) {
                return CheckCallWithReceiver(cenv$$31, env$$43, m$$37, returnTy$$4, args$$4, argContexts, new PermitByRefExpr(1, "Yes"));
              } else {
                return CheckCall(cenv$$31, env$$43, m$$37, returnTy$$4, args$$4, argContexts, new PermitByRefExpr(1, "Yes"));
              }
            }
        }
      }

    case 5:
      {
        if (context$$12.tag === 0) {
          const nArity = context$$12.fields[0] | 0;

          if (cenv$$31.reportErrors) {
            if ((0, _List.length)(args$$4) !== nArity) {
              (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("Tuple arity does not correspond to planned function argument arity", m$$37));
            }
          }

          return CheckExprsPermitByRefLike(cenv$$31, env$$43, args$$4);
        } else {
          CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
          return CheckExprsNoByRefLike(cenv$$31, env$$43, args$$4);
        }
      }

    case 6:
      {
        var $target$$102, vref$$9, arg$$2, vref$$10, vref$$11, arg$$3, vref$$12, arg1, _rf, arg1$$1, arg1$$2, arg2, rf, srcty, tgty, x$$7, _ty1, _readonly, rfref, tyargs$$9, _readonly$$1, obj, rfref$$1, tyargs$$10, arg1$$3, arg1$$4, _idx, _readonly$$2, obj$$1, tyargs$$11, uref, instrs, tys$$7;

        if (matchValue$$18[0].tag === 30) {
          if (matchValue$$18[0].fields[0].tag === 3) {
            if (matchValue$$18[2].tail != null) {
              if (matchValue$$18[2].tail.tail == null) {
                $target$$102 = 1;
                arg$$2 = matchValue$$18[2].head;
                vref$$10 = matchValue$$18[0].fields[1];
              } else {
                $target$$102 = 17;
              }
            } else {
              $target$$102 = 17;
            }
          } else if (matchValue$$18[0].fields[0].tag === 1) {
            if (matchValue$$18[2].tail == null) {
              $target$$102 = 2;
              vref$$11 = matchValue$$18[0].fields[1];
            } else {
              $target$$102 = 17;
            }
          } else if (matchValue$$18[0].fields[0].tag === 2) {
            if (matchValue$$18[2].tail != null) {
              if (matchValue$$18[2].tail.tail == null) {
                $target$$102 = 3;
                arg$$3 = matchValue$$18[2].head;
                vref$$12 = matchValue$$18[0].fields[1];
              } else {
                $target$$102 = 17;
              }
            } else {
              $target$$102 = 17;
            }
          } else {
            $target$$102 = 0;
            vref$$9 = matchValue$$18[0].fields[1];
          }
        } else if (matchValue$$18[0].tag === 21) {
          if (matchValue$$18[2].tail != null) {
            if (matchValue$$18[2].tail.tail == null) {
              $target$$102 = 4;
              arg1 = matchValue$$18[2].head;
            } else {
              $target$$102 = 17;
            }
          } else {
            $target$$102 = 17;
          }
        } else if (matchValue$$18[0].tag === 12) {
          if (matchValue$$18[2].tail != null) {
            if (matchValue$$18[2].tail.tail == null) {
              $target$$102 = 5;
              _rf = matchValue$$18[0].fields[0];
              arg1$$1 = matchValue$$18[2].head;
            } else {
              $target$$102 = 17;
            }
          } else {
            $target$$102 = 17;
          }
        } else if (matchValue$$18[0].tag === 11) {
          if (matchValue$$18[2].tail != null) {
            if (matchValue$$18[2].tail.tail != null) {
              if (matchValue$$18[2].tail.tail.tail == null) {
                $target$$102 = 6;
                arg1$$2 = matchValue$$18[2].head;
                arg2 = matchValue$$18[2].tail.head;
                rf = matchValue$$18[0].fields[0];
              } else {
                $target$$102 = 17;
              }
            } else {
              $target$$102 = 17;
            }
          } else {
            $target$$102 = 17;
          }
        } else if (matchValue$$18[0].tag === 24) {
          if (matchValue$$18[1].tail != null) {
            if (matchValue$$18[1].tail.tail != null) {
              if (matchValue$$18[1].tail.tail.tail == null) {
                if (matchValue$$18[2].tail != null) {
                  if (matchValue$$18[2].tail.tail == null) {
                    $target$$102 = 7;
                    srcty = matchValue$$18[1].tail.head;
                    tgty = matchValue$$18[1].head;
                    x$$7 = matchValue$$18[2].head;
                  } else {
                    $target$$102 = 17;
                  }
                } else {
                  $target$$102 = 17;
                }
              } else {
                $target$$102 = 17;
              }
            } else {
              $target$$102 = 17;
            }
          } else {
            $target$$102 = 17;
          }
        } else if (matchValue$$18[0].tag === 25) {
          if (matchValue$$18[1].tail != null) {
            if (matchValue$$18[1].tail.tail == null) {
              if (matchValue$$18[2].tail == null) {
                $target$$102 = 8;
                _ty1 = matchValue$$18[1].head;
              } else {
                $target$$102 = 17;
              }
            } else {
              $target$$102 = 17;
            }
          } else {
            $target$$102 = 17;
          }
        } else if (matchValue$$18[0].tag === 13) {
          if (matchValue$$18[2].tail != null) {
            if (matchValue$$18[2].tail.tail == null) {
              $target$$102 = 10;
              _readonly$$1 = matchValue$$18[0].fields[1];
              obj = matchValue$$18[2].head;
              rfref$$1 = matchValue$$18[0].fields[0];
              tyargs$$10 = matchValue$$18[1];
            } else {
              $target$$102 = 17;
            }
          } else {
            $target$$102 = 9;
            _readonly = matchValue$$18[0].fields[1];
            rfref = matchValue$$18[0].fields[0];
            tyargs$$9 = matchValue$$18[1];
          }
        } else if (matchValue$$18[0].tag === 16) {
          if (matchValue$$18[2].tail != null) {
            if (matchValue$$18[2].tail.tail == null) {
              $target$$102 = 11;
              arg1$$3 = matchValue$$18[2].head;
            } else {
              $target$$102 = 17;
            }
          } else {
            $target$$102 = 17;
          }
        } else if (matchValue$$18[0].tag === 14) {
          if (matchValue$$18[2].tail != null) {
            if (matchValue$$18[2].tail.tail == null) {
              $target$$102 = 12;
              arg1$$4 = matchValue$$18[2].head;
            } else {
              $target$$102 = 17;
            }
          } else {
            $target$$102 = 17;
          }
        } else if (matchValue$$18[0].tag === 17) {
          if (matchValue$$18[2].tail != null) {
            if (matchValue$$18[2].tail.tail == null) {
              $target$$102 = 13;
              _idx = matchValue$$18[0].fields[1];
              _readonly$$2 = matchValue$$18[0].fields[2];
              obj$$1 = matchValue$$18[2].head;
              tyargs$$11 = matchValue$$18[1];
              uref = matchValue$$18[0].fields[0];
            } else {
              $target$$102 = 17;
            }
          } else {
            $target$$102 = 17;
          }
        } else if (matchValue$$18[0].tag === 22) {
          $target$$102 = 14;
          instrs = matchValue$$18[0].fields[0];
          tys$$7 = matchValue$$18[0].fields[1];
        } else if (matchValue$$18[0].tag === 29) {
          $target$$102 = 15;
        } else if (matchValue$$18[0].tag === 10) {
          $target$$102 = 16;
        } else {
          $target$$102 = 17;
        }

        switch ($target$$102) {
          case 0:
            {
              const limit1$$4 = GetLimitValByRef(cenv$$31, env$$43, m$$37, (0, _tast.ValRef$$get_Deref)(vref$$9));
              const limit2$$4 = CheckExprsNoByRefLike(cenv$$31, env$$43, args$$4);
              const limit$$29 = CombineTwoLimits(limit1$$4, limit2$$4);

              if (cenv$$31.reportErrors) {
                if (PermitByRefExpr$$get_Disallow(context$$12)) {
                  (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoAddressOfAtThisPoint$$Z721C83C5)((0, _tast.ValRef$$get_DisplayName)(vref$$9)), m$$37));
                }

                const returningAddrOfLocal = (PermitByRefExpr$$get_PermitOnlyReturnable(context$$12) ? (limit$$29.flags & 1) === 1 : false) ? limit$$29.scope >= env$$43.returnScope ? true : Limit$$get_IsLocal(limit$$29) ? PermitByRefExpr$$get_PermitOnlyReturnableNonLocal(context$$12) : false : false;

                if (returningAddrOfLocal) {
                  if ((0, _tast.ValRef$$get_IsCompilerGenerated)(vref$$9)) {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoByrefAddressOfValueFromExpression)(), m$$37));
                  } else {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoByrefAddressOfLocal$$Z721C83C5)((0, _tast.ValRef$$get_DisplayName)(vref$$9)), m$$37));
                  }
                }
              }

              return limit$$29;
            }

          case 1:
            {
              const limit$$32 = GetLimitVal(cenv$$31, env$$43, m$$37, (0, _tast.ValRef$$get_Deref)(vref$$10));
              const isVrefLimited = !((limit$$32.flags & 5) === 5);
              const isArgLimited = (CheckExprPermitByRefLike(cenv$$31, env$$43, arg$$2).flags & 16) === 16;

              if (isVrefLimited ? isArgLimited : false) {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoWriteToLimitedSpan$$Z721C83C5)((0, _tast.ValRef$$get_DisplayName)(vref$$10)), m$$37));
              }

              return NoLimit;
            }

          case 2:
            {
              const limit$$35 = GetLimitVal(cenv$$31, env$$43, m$$37, (0, _tast.ValRef$$get_Deref)(vref$$11));

              if ((limit$$35.flags & 5) === 5) {
                if (cenv$$31.reportErrors ? PermitByRefExpr$$get_PermitOnlyReturnable(context$$12) : false) {
                  if ((0, _tast.ValRef$$get_IsCompilerGenerated)(vref$$11)) {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoSpanLikeValueFromExpression)(), m$$37));
                  } else {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoSpanLikeVariable$$Z721C83C5)((0, _tast.ValRef$$get_DisplayName)(vref$$11)), m$$37));
                  }
                }

                return new Limit(1, 16);
              } else if ((limit$$35.flags & 3) === 3) {
                return new Limit(1, 8);
              } else {
                return new Limit(1, 0);
              }
            }

          case 3:
            {
              const isVrefLimited$$1 = !((GetLimitVal(cenv$$31, env$$43, m$$37, (0, _tast.ValRef$$get_Deref)(vref$$12)).flags & 16) === 16);
              const isArgLimited$$1 = (CheckExprPermitByRefLike(cenv$$31, env$$43, arg$$3).flags & 16) === 16;

              if (isVrefLimited$$1 ? isArgLimited$$1 : false) {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoWriteToLimitedSpan$$Z721C83C5)((0, _tast.ValRef$$get_DisplayName)(vref$$12)), m$$37));
              }

              return NoLimit;
            }

          case 4:
            {
              CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
              return CheckExprsPermitByRefLike(cenv$$31, env$$43, (0, _Types.L)(arg1, (0, _Types.L)()));
            }

          case 5:
            {
              CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
              return CheckExprsPermitByRefLike(cenv$$31, env$$43, (0, _Types.L)(arg1$$1, (0, _Types.L)()));
            }

          case 6:
            {
              CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
              const limit1$$5 = CheckExprPermitByRefLike(cenv$$31, env$$43, arg1$$2);
              const limit2$$5 = CheckExprPermitByRefLike(cenv$$31, env$$43, arg2);
              const isLhsLimited = !((limit1$$5.flags & 5) === 5);
              const isRhsLimited = (limit2$$5.flags & 16) === 16;

              if (isLhsLimited ? isRhsLimited : false) {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoWriteToLimitedSpan$$Z721C83C5)((0, _tast.RecdFieldRef$$get_FieldName)(rf)), m$$37));
              }

              return NoLimit;
            }

          case 7:
            {
              if ((0, _TypeRelations.TypeDefinitelySubsumesTypeNoCoercion)(0, g$$9, cenv$$31.amap, m$$37, tgty, srcty)) {
                return CheckExpr(cenv$$31, env$$43, x$$7, context$$12);
              } else {
                CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
                CheckExprNoByrefs(cenv$$31, env$$43, x$$7);
                return NoLimit;
              }
            }

          case 8:
            {
              CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
              return NoLimit;
            }

          case 9:
            {
              if ((PermitByRefExpr$$get_Disallow(context$$12) ? cenv$$31.reportErrors : false) ? (0, _TastOps.isByrefLikeTy)(g$$9, m$$37, (0, _TastOps.tyOfExpr)(g$$9, expr$$6)) : false) {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoAddressStaticFieldAtThisPoint$$Z721C83C5)((0, _tast.RecdFieldRef$$get_FieldName)(rfref)), m$$37));
              }

              CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$9);
              return NoLimit;
            }

          case 10:
            {
              if ((PermitByRefExpr$$get_Disallow(context$$12) ? cenv$$31.reportErrors : false) ? (0, _TastOps.isByrefLikeTy)(g$$9, m$$37, (0, _TastOps.tyOfExpr)(g$$9, expr$$6)) : false) {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoAddressFieldAtThisPoint$$Z721C83C5)((0, _tast.RecdFieldRef$$get_FieldName)(rfref$$1)), m$$37));
              }

              if ((PermitByRefExpr$$get_PermitOnlyReturnable(context$$12) ? obj.tag === 1 ? (vref$$13 = obj.fields[0], (0, _Util.equals)((0, _tast.ValRef$$get_BaseOrThisInfo)(vref$$13), new _tast.ValBaseOrThisInfo(3, "MemberThisVal"))) : false : false) ? (0, _TastOps.isByrefTy)(g$$9, (0, _TastOps.tyOfExpr)(g$$9, obj)) : false) {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkStructsMayNotReturnAddressesOfContents)(), m$$37));
              }

              if ((PermitByRefExpr$$get_Disallow(context$$12) ? cenv$$31.reportErrors : false) ? (0, _TastOps.isByrefLikeTy)(g$$9, m$$37, (0, _TastOps.tyOfExpr)(g$$9, expr$$6)) : false) {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoAddressFieldAtThisPoint$$Z721C83C5)((0, _tast.RecdFieldRef$$get_FieldName)(rfref$$1)), m$$37));
              }

              CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$10);
              return CheckExpr(cenv$$31, env$$43, obj, context$$12);
            }

          case 11:
            {
              CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
              return CheckExprPermitByRefLike(cenv$$31, env$$43, arg1$$3);
            }

          case 12:
            {
              CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
              return CheckExprPermitByRefLike(cenv$$31, env$$43, arg1$$4);
            }

          case 13:
            {
              if ((PermitByRefExpr$$get_Disallow(context$$12) ? cenv$$31.reportErrors : false) ? (0, _TastOps.isByrefLikeTy)(g$$9, m$$37, (0, _TastOps.tyOfExpr)(g$$9, expr$$6)) : false) {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoAddressFieldAtThisPoint$$Z721C83C5)((0, _tast.UnionCaseRef$$get_CaseName)(uref)), m$$37));
              }

              if ((PermitByRefExpr$$get_PermitOnlyReturnable(context$$12) ? obj$$1.tag === 1 ? (vref$$14 = obj$$1.fields[0], (0, _Util.equals)((0, _tast.ValRef$$get_BaseOrThisInfo)(vref$$14), new _tast.ValBaseOrThisInfo(3, "MemberThisVal"))) : false : false) ? (0, _TastOps.isByrefTy)(g$$9, (0, _TastOps.tyOfExpr)(g$$9, obj$$1)) : false) {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkStructsMayNotReturnAddressesOfContents)(), m$$37));
              }

              CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$11);
              return CheckExpr(cenv$$31, env$$43, obj$$1, context$$12);
            }

          case 14:
            {
              CheckTypeInstPermitAllByrefs(cenv$$31, env$$43, m$$37, tys$$7);
              CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
              const matchValue$$19 = [instrs, args$$4];

              var $target$$103, _alignment, _fspec, _vol, _alignment$$1, _fspec$$1, _vol$$1, _alignment$$2, _fspec$$2, _vol$$2, fspec, fspec$$1, obj$$2, indices, isNativePtr, lhsArray;

              if (matchValue$$19[0].tail != null) {
                if (matchValue$$19[0].head.tag === 64) {
                  if (matchValue$$19[0].tail.tail == null) {
                    $target$$103 = 0;
                    _alignment = matchValue$$19[0].head.fields[0];
                    _fspec = matchValue$$19[0].head.fields[2];
                    _vol = matchValue$$19[0].head.fields[1];
                  } else {
                    $target$$103 = 7;
                  }
                } else if (matchValue$$19[0].head.tag === 60) {
                  if (matchValue$$19[0].tail.tail != null) {
                    if (matchValue$$19[0].tail.head.tag === 33) {
                      if (matchValue$$19[0].tail.tail.tail == null) {
                        $target$$103 = 2;
                        _alignment$$2 = matchValue$$19[0].head.fields[0];
                        _fspec$$2 = matchValue$$19[0].head.fields[2];
                        _vol$$2 = matchValue$$19[0].head.fields[1];
                      } else {
                        $target$$103 = 7;
                      }
                    } else {
                      $target$$103 = 7;
                    }
                  } else {
                    $target$$103 = 1;
                    _alignment$$1 = matchValue$$19[0].head.fields[0];
                    _fspec$$1 = matchValue$$19[0].head.fields[2];
                    _vol$$1 = matchValue$$19[0].head.fields[1];
                  }
                } else if (matchValue$$19[0].head.tag === 61) {
                  if (matchValue$$19[0].tail.tail == null) {
                    if (matchValue$$19[1].tail == null) {
                      $target$$103 = 3;
                      fspec = matchValue$$19[0].head.fields[0];
                    } else {
                      $target$$103 = 7;
                    }
                  } else {
                    $target$$103 = 7;
                  }
                } else if (matchValue$$19[0].head.tag === 62) {
                  if (matchValue$$19[0].tail.tail == null) {
                    if (matchValue$$19[1].tail != null) {
                      if (matchValue$$19[1].tail.tail == null) {
                        $target$$103 = 4;
                        fspec$$1 = matchValue$$19[0].head.fields[0];
                        obj$$2 = matchValue$$19[1].head;
                      } else {
                        $target$$103 = 7;
                      }
                    } else {
                      $target$$103 = 7;
                    }
                  } else {
                    $target$$103 = 7;
                  }
                } else if (matchValue$$19[0].head.tag === 80) {
                  if (matchValue$$19[0].tail.tail == null) {
                    if (matchValue$$19[1].tail != null) {
                      $target$$103 = 5;
                      indices = matchValue$$19[1].tail;
                      isNativePtr = matchValue$$19[0].head.fields[1];
                      lhsArray = matchValue$$19[1].head;
                    } else {
                      $target$$103 = 7;
                    }
                  } else {
                    $target$$103 = 7;
                  }
                } else if (matchValue$$19[0].head.tag === 11) {
                  if (matchValue$$19[0].tail.tail == null) {
                    $target$$103 = 6;
                  } else {
                    $target$$103 = 7;
                  }
                } else {
                  $target$$103 = 7;
                }
              } else {
                $target$$103 = 7;
              }

              switch ($target$$103) {
                case 0:
                  {
                    return CheckExprsPermitByRefLike(cenv$$31, env$$43, args$$4);
                  }

                case 1:
                  {
                    return CheckExprsPermitByRefLike(cenv$$31, env$$43, args$$4);
                  }

                case 2:
                  {
                    return CheckExprsPermitByRefLike(cenv$$31, env$$43, args$$4);
                  }

                case 3:
                  {
                    if ((PermitByRefExpr$$get_Disallow(context$$12) ? cenv$$31.reportErrors : false) ? (0, _TastOps.isByrefLikeTy)(g$$9, m$$37, (0, _TastOps.tyOfExpr)(g$$9, expr$$6)) : false) {
                      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoAddressFieldAtThisPoint$$Z721C83C5)((0, _il.ILFieldSpec$$get_Name)(fspec)), m$$37));
                    }

                    return NoLimit;
                  }

                case 4:
                  {
                    if ((PermitByRefExpr$$get_Disallow(context$$12) ? cenv$$31.reportErrors : false) ? (0, _TastOps.isByrefLikeTy)(g$$9, m$$37, (0, _TastOps.tyOfExpr)(g$$9, expr$$6)) : false) {
                      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoAddressFieldAtThisPoint$$Z721C83C5)((0, _il.ILFieldSpec$$get_Name)(fspec$$1)), m$$37));
                    }

                    return CheckExpr(cenv$$31, env$$43, obj$$2, context$$12);
                  }

                case 5:
                  {
                    if (((PermitByRefExpr$$get_Disallow(context$$12) ? cenv$$31.reportErrors : false) ? !isNativePtr : false) ? (0, _TastOps.isByrefLikeTy)(g$$9, m$$37, (0, _TastOps.tyOfExpr)(g$$9, expr$$6)) : false) {
                      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoAddressOfArrayElementAtThisPoint)(), m$$37));
                    }

                    const limit$$42 = CheckExprPermitByRefLike(cenv$$31, env$$43, lhsArray);
                    CheckExprsNoByRefLike(cenv$$31, env$$43, indices);
                    return limit$$42;
                  }

                case 6:
                  {
                    return CheckExprsPermitByRefLike(cenv$$31, env$$43, args$$4);
                  }

                case 7:
                  {
                    return CheckExprsNoByRefLike(cenv$$31, env$$43, args$$4);
                  }
              }
            }

          case 15:
            {
              CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
              return CheckExprsPermitByRefLike(cenv$$31, env$$43, args$$4);
            }

          case 16:
            {
              CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
              return CheckExprsPermitByRefLike(cenv$$31, env$$43, args$$4);
            }

          case 17:
            {
              CheckTypeInstNoByrefs(cenv$$31, env$$43, m$$37, tyargs$$8);
              return CheckExprsNoByRefLike(cenv$$31, env$$43, args$$4);
            }
        }
      }
  }
}

function CheckLambdas(isTop, memInfo, cenv$$32, env$$45, inlined, topValInfo$$3, alwaysCheckNoReraise, e$$2, m$$38, ety, context$$14) {
  CheckLambdas: while (true) {
    const g$$10 = cenv$$32.g;
    var $target$$104, m$$40;

    switch (e$$2.tag) {
      case 13:
        $target$$104 = 0;
        break;

      case 3:
        $target$$104 = 1;
        m$$40 = e$$2.fields[5];
        break;

      case 4:
        $target$$104 = 1;
        m$$40 = e$$2.fields[3];
        break;

      default:
        $target$$104 = 2;
    }

    switch ($target$$104) {
      case 0:
        {
          const tps$$6 = e$$2.fields[0];
          const m$$39 = e$$2.fields[2];
          const e1$$6 = e$$2.fields[1];
          const env$$46 = BindTypars(g$$10, env$$45, tps$$6);
          isTop = isTop;
          memInfo = memInfo;
          cenv$$32 = cenv$$32;
          env$$45 = env$$46;
          inlined = inlined;
          topValInfo$$3 = topValInfo$$3;
          alwaysCheckNoReraise = alwaysCheckNoReraise;
          e$$2 = e1$$6;
          m$$38 = m$$39;
          ety = ety;
          context$$14 = context$$14;
          continue CheckLambdas;
        }

      case 1:
        {
          const patternInput$$2 = (0, _TypeRelations.destTopLambda)(g$$10, cenv$$32.amap, topValInfo$$3, e$$2, ety);
          const env$$47 = BindTypars(g$$10, env$$45, patternInput$$2[0]);
          const thisAndBase = (0, _List.append)((0, _List.ofArray)((0, _Option.defaultArg)(patternInput$$2[1], [], function ($x$$4) {
            return [$x$$4];
          })), (0, _List.ofArray)((0, _Option.defaultArg)(patternInput$$2[2], [], function ($x$$5) {
            return [$x$$5];
          })));
          const restArgs = (0, _List.concat)(patternInput$$2[3]);
          const syntacticArgs$$1 = (0, _List.append)(thisAndBase, restArgs);
          const env$$48 = BindArgVals(env$$47, restArgs);

          if (memInfo != null) {
            const mi = memInfo;
            (0, _Seq.iterate)(function (v$$20) {
              (0, _tast.Val$$SetHasBeenReferenced)(v$$20);
            }, thisAndBase);
            const matchValue$$20 = [mi.MemberFlags.IsInstance, restArgs];
            var $target$$105;

            if (matchValue$$20[0]) {
              if (matchValue$$20[1].tail != null) {
                $target$$105 = 0;
              } else {
                $target$$105 = 1;
              }
            } else {
              $target$$105 = 1;
            }

            switch ($target$$105) {
              case 0:
                {
                  const firstArg = matchValue$$20[1].head;
                  (0, _tast.Val$$SetHasBeenReferenced)(firstArg);
                  break;
                }
            }

            (0, _List.iterate)(function action$$10(arg$$4) {
              if ((0, _TastOps.isByrefTy)(g$$10, (0, _tast.Val$$get_Type)(arg$$4))) {
                (0, _tast.Val$$SetHasBeenReferenced)(arg$$4);
              }
            }, restArgs);
          }

          (0, _List.iterate)(function action$$11(v$$21) {
            CheckValSpec(cenv$$32, env$$48, v$$21);
          }, syntacticArgs$$1);
          (0, _List.iterate)(function action$$12(v$$22) {
            BindVal(cenv$$32, env$$48, v$$22);
          }, syntacticArgs$$1);

          if (memInfo != null) {
            const membInfo$$1 = memInfo;
            testHookMemberBody(membInfo$$1, patternInput$$2[4]);
          }

          const freesOpt$$1 = CheckEscapes(cenv$$32, memInfo != null, m$$40, syntacticArgs$$1, patternInput$$2[4]);
          CheckNoReraise(cenv$$32, freesOpt$$1, patternInput$$2[4]);

          if ((isTop ? !(0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$10) : false) ? (0, _TastOps.isByrefLikeTy)(g$$10, m$$40, patternInput$$2[5]) : false) {
            CheckExprPermitReturnableByRef(cenv$$32, env$$48, patternInput$$2[4]);
          } else {
            CheckExprNoByrefs(cenv$$32, env$$48, patternInput$$2[4]);
          }

          if (cenv$$32.reportErrors) {
            if (!isTop) {
              CheckForByrefLikeType(cenv$$32, env$$48, m$$40, patternInput$$2[5], function () {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkFirstClassFuncNoByref)(), m$$40));
              });
            } else if (!(0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$10) ? (0, _TastOps.isByrefTy)(g$$10, patternInput$$2[5]) : false) {
              CheckForByrefType(cenv$$32, env$$48, (0, _TastOps.destByrefTy)(g$$10, patternInput$$2[5]), function () {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkReturnTypeNoByref)(), m$$40));
              });
            }

            (0, _Seq.iterate)(function (tp$$8) {
              if ((0, _List.sumBy)(function projection(_arg8) {
                var ty$$32;
                var $target$$106, ty$$33;

                if (_arg8.tag === 0) {
                  if (ty$$32 = _arg8.fields[0], (0, _TastOps.isClassTy)(g$$10, ty$$32)) {
                    $target$$106 = 0;
                    ty$$33 = _arg8.fields[0];
                  } else {
                    $target$$106 = 1;
                  }
                } else {
                  $target$$106 = 1;
                }

                switch ($target$$106) {
                  case 0:
                    {
                      return 1;
                    }

                  case 1:
                    {
                      return 0;
                    }
                }
              }, (0, _tast.Typar$$get_Constraints)(tp$$8), {
                GetZero() {
                  return 0;
                },

                Add($x$$6, $y$$7) {
                  return $x$$6 + $y$$7;
                }

              }) > 1) {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkTyparMultipleClassConstraints)(), m$$40));
              }
            }, patternInput$$2[0]);
          }

          return NoLimit;
        }

      case 2:
        {
          CheckTypePermitAllByrefs(cenv$$32, env$$45, m$$38, ety);
          let limit$$43;

          if (!inlined ? (0, _TastOps.isByrefLikeTy)(g$$10, m$$38, ety) ? true : (0, _TastOps.isNativePtrTy)(g$$10, ety) : false) {
            limit$$43 = CheckExpr(cenv$$32, env$$45, e$$2, context$$14);
          } else {
            CheckExprNoByrefs(cenv$$32, env$$45, e$$2);
            limit$$43 = NoLimit;
          }

          if (alwaysCheckNoReraise) {
            CheckNoReraise(cenv$$32, null, e$$2);
          }

          return limit$$43;
        }
    }
  }
}

function CheckExprs(cenv$$33, env$$49, exprs, contexts$$5) {
  const contexts$$6 = (0, _Array.ofList)(contexts$$5, Array);

  const argArity = function argArity(i) {
    if (i < contexts$$6.length) {
      return contexts$$6[i];
    } else {
      return new PermitByRefExpr(4, "No");
    }
  };

  return CombineLimits((0, _List.mapIndexed)(function mapping$$1(i$$1, exp) {
    return CheckExpr(cenv$$33, env$$49, exp, argArity(i$$1));
  }, exprs));
}

function CheckExprsNoByRefLike(cenv$$34, env$$50, exprs$$1) {
  (0, _List.iterate)(function action$$13(expr$$7) {
    CheckExprNoByrefs(cenv$$34, env$$50, expr$$7);
  }, exprs$$1);
  return NoLimit;
}

function CheckExprsPermitByRefLike(cenv$$35, env$$51, exprs$$2) {
  return CombineLimits((0, _List.map)(function mapping$$2(expr$$8) {
    return CheckExprPermitByRefLike(cenv$$35, env$$51, expr$$8);
  }, exprs$$2));
}

function CheckExprsPermitReturnableByRef(cenv$$36, env$$52, exprs$$3) {
  return CombineLimits((0, _List.map)(function mapping$$3(expr$$9) {
    return CheckExprPermitReturnableByRef(cenv$$36, env$$52, expr$$9);
  }, exprs$$3));
}

function CheckExprPermitByRefLike(cenv$$37, env$$53, expr$$10) {
  return CheckExpr(cenv$$37, env$$53, expr$$10, new PermitByRefExpr(1, "Yes"));
}

function CheckExprPermitReturnableByRef(cenv$$38, env$$54, expr$$11) {
  return CheckExpr(cenv$$38, env$$54, expr$$11, new PermitByRefExpr(2, "YesReturnable"));
}

function CheckDecisionTreeTargets(cenv$$39, env$$55, targets$$1, context$$15) {
  return CombineLimits((0, _List.ofArray)((0, _Array.map)(function mapping$$4(arg30$0040$$1) {
    return CheckDecisionTreeTarget(cenv$$39, env$$55, context$$15, arg30$0040$$1);
  }, targets$$1, Array)));
}

function CheckDecisionTreeTarget(cenv$$40, env$$56, context$$16, _arg2$$2) {
  const vs$$4 = _arg2$$2.fields[0];
  const e$$3 = _arg2$$2.fields[1];
  BindVals(cenv$$40, env$$56, vs$$4);
  (0, _List.iterate)(function action$$14(v$$23) {
    CheckValSpec(cenv$$40, env$$56, v$$23);
  }, vs$$4);
  return CheckExpr(cenv$$40, env$$56, e$$3, context$$16);
}

function CheckDecisionTree(cenv$$41, env$$57, x$$8) {
  switch (x$$8.tag) {
    case 2:
      {
        const rest$$4 = x$$8.fields[1];
        const bind$$1 = x$$8.fields[0];
        CheckBinding(cenv$$41, env$$57, false, new PermitByRefExpr(1, "Yes"), bind$$1);
        CheckDecisionTree(cenv$$41, env$$57, rest$$4);
        break;
      }

    case 0:
      {
        const m$$41 = x$$8.fields[3];
        const e$$4 = x$$8.fields[0];
        const dflt = x$$8.fields[2];
        const cases = x$$8.fields[1];
        CheckDecisionTreeSwitch(cenv$$41, env$$57, e$$4, cases, dflt, m$$41);
        break;
      }

    default:
      {
        const es = x$$8.fields[0];
        CheckExprsNoByRefLike(cenv$$41, env$$57, es);
      }
  }
}

function CheckDecisionTreeSwitch(cenv$$42, env$$58, e$$5, cases$$1, dflt$$1, m$$42) {
  CheckExprPermitByRefLike(cenv$$42, env$$58, e$$5);
  (0, _List.iterate)(function action$$15(_arg3$$1) {
    const e$$6 = _arg3$$1.fields[1];
    const discrim = _arg3$$1.fields[0];
    CheckDecisionTreeTest(cenv$$42, env$$58, m$$42, discrim);
    CheckDecisionTree(cenv$$42, env$$58, e$$6);
  }, cases$$1);
  (0, _Seq.iterate)(function action$$16(x$$9) {
    CheckDecisionTree(cenv$$42, env$$58, x$$9);
  }, (0, _Option.defaultArg)(dflt$$1, [], function ($x$$9) {
    return [$x$$9];
  }));
}

function CheckDecisionTreeTest(cenv$$43, env$$59, m$$43, discrim$$1) {
  switch (discrim$$1.tag) {
    case 1:
      {
        const ty$$34 = discrim$$1.fields[1];
        CheckTypePermitAllByrefs(cenv$$43, env$$59, m$$43, ty$$34);
        break;
      }

    case 2:
      {
        break;
      }

    case 3:
      {
        break;
      }

    case 4:
      {
        const tgtTy = discrim$$1.fields[1];
        const srcTy = discrim$$1.fields[0];
        CheckTypePermitAllByrefs(cenv$$43, env$$59, m$$43, srcTy);
        CheckTypePermitAllByrefs(cenv$$43, env$$59, m$$43, tgtTy);
        break;
      }

    case 5:
      {
        const exp$$1 = discrim$$1.fields[0];
        CheckExprNoByrefs(cenv$$43, env$$59, exp$$1);
        break;
      }

    default:
      {
        const tinst$$5 = discrim$$1.fields[1];
        CheckTypeInstPermitAllByrefs(cenv$$43, env$$59, m$$43, tinst$$5);
      }
  }
}

function CheckAttrib(cenv$$44, env$$60, _arg3$$2) {
  const props = _arg3$$2.fields[3];
  const args$$5 = _arg3$$2.fields[2];
  (0, _List.iterate)(function action$$17(_arg4) {
    const expr$$12 = _arg4.fields[0][3];
    CheckAttribExpr(cenv$$44, env$$60, expr$$12);
  }, props);
  (0, _List.iterate)(function action$$18(arg20$0040) {
    CheckAttribExpr(cenv$$44, env$$60, arg20$0040);
  }, args$$5);
}

function CheckAttribExpr(cenv$$45, env$$61, _arg4$$1) {
  const vexpr = _arg4$$1.fields[1];
  const expr$$13 = _arg4$$1.fields[0];
  CheckExprNoByrefs(cenv$$45, env$$61, expr$$13);
  CheckExprNoByrefs(cenv$$45, env$$61, vexpr);
  CheckNoReraise(cenv$$45, null, expr$$13);
  CheckAttribArgExpr(cenv$$45, env$$61, vexpr);
}

function CheckAttribArgExpr(cenv$$46, env$$62, expr$$14) {
  const g$$11 = cenv$$46.g;

  var $target$$107, c$$1, m$$44, _elemTy, _m$$1, args$$6;

  if (expr$$14.tag === 0) {
    $target$$107 = 0;
    c$$1 = expr$$14.fields[0];
    m$$44 = expr$$14.fields[1];
  } else if (expr$$14.tag === 11) {
    if (expr$$14.fields[0].tag === 3) {
      if (expr$$14.fields[1].tail != null) {
        if (expr$$14.fields[1].tail.tail == null) {
          $target$$107 = 1;
          _elemTy = expr$$14.fields[1].head;
          _m$$1 = expr$$14.fields[3];
          args$$6 = expr$$14.fields[2];
        } else if ((0, _TastOps.$007CTypeOfExpr$007C_$007C)(g$$11, expr$$14) != null) {
          $target$$107 = 2;
        } else {
          $target$$107 = 3;
        }
      } else if ((0, _TastOps.$007CTypeOfExpr$007C_$007C)(g$$11, expr$$14) != null) {
        $target$$107 = 2;
      } else {
        $target$$107 = 3;
      }
    } else if ((0, _TastOps.$007CTypeOfExpr$007C_$007C)(g$$11, expr$$14) != null) {
      $target$$107 = 2;
    } else {
      $target$$107 = 3;
    }
  } else if ((0, _TastOps.$007CTypeOfExpr$007C_$007C)(g$$11, expr$$14) != null) {
    $target$$107 = 2;
  } else {
    $target$$107 = 3;
  }

  switch ($target$$107) {
    case 0:
      {
        var $target$$108;

        switch (c$$1.tag) {
          case 0:
          case 5:
          case 1:
          case 3:
          case 7:
          case 2:
          case 4:
          case 6:
          case 8:
          case 12:
          case 11:
          case 13:
          case 17:
          case 14:
            $target$$108 = 0;
            break;

          default:
            $target$$108 = 1;
        }

        switch ($target$$108) {
          case 1:
            {
              if (cenv$$46.reportErrors) {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastNotAConstantExpression)(), m$$44));
              }

              break;
            }
        }

        break;
      }

    case 1:
      {
        (0, _List.iterate)(function (expr$$15) {
          CheckAttribArgExpr(cenv$$46, env$$62, expr$$15);
        }, args$$6);
        break;
      }

    case 3:
      {
        if ((0, _TastOps.$007CTypeDefOfExpr$007C_$007C)(g$$11, expr$$14) != null) {} else {
          var $target$$109, arg$$5, arg1$$5;

          if (expr$$14.tag === 11) {
            if (expr$$14.fields[0].tag === 24) {
              if (expr$$14.fields[2].tail != null) {
                if (expr$$14.fields[2].tail.tail == null) {
                  $target$$109 = 0;
                  arg$$5 = expr$$14.fields[2].head;
                } else {
                  const activePatternResult45376 = (0, _TastOps.$007CEnumExpr$007C_$007C)(g$$11, expr$$14);

                  if (activePatternResult45376 != null) {
                    $target$$109 = 1;
                    arg1$$5 = activePatternResult45376;
                  } else {
                    $target$$109 = 2;
                  }
                }
              } else {
                const activePatternResult45377 = (0, _TastOps.$007CEnumExpr$007C_$007C)(g$$11, expr$$14);

                if (activePatternResult45377 != null) {
                  $target$$109 = 1;
                  arg1$$5 = activePatternResult45377;
                } else {
                  $target$$109 = 2;
                }
              }
            } else {
              const activePatternResult45378 = (0, _TastOps.$007CEnumExpr$007C_$007C)(g$$11, expr$$14);

              if (activePatternResult45378 != null) {
                $target$$109 = 1;
                arg1$$5 = activePatternResult45378;
              } else {
                $target$$109 = 2;
              }
            }
          } else {
            const activePatternResult45379 = (0, _TastOps.$007CEnumExpr$007C_$007C)(g$$11, expr$$14);

            if (activePatternResult45379 != null) {
              $target$$109 = 1;
              arg1$$5 = activePatternResult45379;
            } else {
              $target$$109 = 2;
            }
          }

          switch ($target$$109) {
            case 0:
              {
                CheckAttribArgExpr(cenv$$46, env$$62, arg$$5);
                break;
              }

            case 1:
              {
                CheckAttribArgExpr(cenv$$46, env$$62, arg1$$5);
                break;
              }

            case 2:
              {
                const activePatternResult45374 = (0, _TastOps.$007CAttribBitwiseOrExpr$007C_$007C)(g$$11, expr$$14);

                if (activePatternResult45374 != null) {
                  CheckAttribArgExpr(cenv$$46, env$$62, activePatternResult45374[0]);
                  CheckAttribArgExpr(cenv$$46, env$$62, activePatternResult45374[1]);
                } else {
                  if (cenv$$46.reportErrors) {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkInvalidCustAttrVal)(), (0, _TastOps.Expr$002Eget_Range)(expr$$14)));
                  }
                }

                break;
              }
          }
        }

        break;
      }
  }
}

function CheckAttribs(cenv$$47, env$$63, attribs$$1) {
  if (attribs$$1.tail == null) {} else {
    const tcrefs = (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (matchValue$$21) {
        const tcref$$10 = matchValue$$21.fields[0];
        const m$$45 = matchValue$$21.fields[6];
        return (0, _Seq.singleton)([tcref$$10, m$$45]);
      }, attribs$$1);
    }));
    const duplicates = (0, _List.filter)(function predicate$$2(tupledArg$$6) {
      return !(0, _Util.equals)((0, _TastOps.TryFindAttributeUsageAttribute)(cenv$$47.g, tupledArg$$6[1], tupledArg$$6[0]), true);
    }, (0, _List.ofSeq)((0, _Seq.map)(function mapping$$6(tuple$$3) {
      return tuple$$3[0];
    }, (0, _Seq.filter)(function predicate$$1(tupledArg$$5) {
      return tupledArg$$5[1] > 1;
    }, (0, _Seq.map)(function mapping$$5(tupledArg$$4) {
      return [(0, _List.last)((0, _List.ofSeq)(tupledArg$$4[1])), (0, _Seq.length)(tupledArg$$4[1])];
    }, (0, _Map.groupBy)(function projection$$1(tupledArg$$3) {
      return (0, _tast.EntityRef$$get_Stamp)(tupledArg$$3[0]);
    }, tcrefs, {
      Compare: _Long.compare
    }))))));

    if (cenv$$47.reportErrors) {
      (0, _Seq.iterate)(function (forLoopVar) {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkAttrHasAllowMultiFalse$$Z721C83C5)((0, _tast.EntityRef$$get_DisplayName)(forLoopVar[0])), forLoopVar[1]));
      }, duplicates);
    }

    (0, _List.iterate)(function action$$19(arg20$0040$$1) {
      CheckAttrib(cenv$$47, env$$63, arg20$0040$$1);
    }, attribs$$1);
  }
}

function CheckValInfo(cenv$$48, env$$64, _arg5$$1) {
  const ret = _arg5$$1.fields[2];
  const args$$7 = _arg5$$1.fields[1];
  (0, _illib.List$$$iterSquared)(function f$$12(argInfo) {
    CheckArgInfo(cenv$$48, env$$64, argInfo);
  }, args$$7);
  CheckArgInfo(cenv$$48, env$$64, ret);
}

function CheckArgInfo(cenv$$49, env$$65, argInfo$$2) {
  CheckAttribs(cenv$$49, env$$65, argInfo$$2.Attribs);
}

function CheckValSpec(cenv$$50, env$$66, v$$24) {
  CheckAttribs(cenv$$50, env$$66, (0, _tast.Val$$get_Attribs)(v$$24));
  (0, _Seq.iterate)(function action$$20(arg20$0040$$2) {
    CheckValInfo(cenv$$50, env$$66, arg20$0040$$2);
  }, (0, _Option.defaultArg)((0, _tast.Val$$get_ValReprInfo)(v$$24), [], function ($x$$12) {
    return [$x$$12];
  }));
  CheckTypePermitAllByrefs(cenv$$50, env$$66, (0, _tast.Val$$get_Range)(v$$24), (0, _tast.Val$$get_Type)(v$$24));
}

function AdjustAccess(isHidden, cpath, access$$4) {
  if (isHidden) {
    const l$$4 = access$$4.fields[0];
    const scoref = (0, _tast.CompilationPath$$get_ILScopeRef)(cpath());
    return new _tast.Accessibility(0, "TAccess", (0, _Types.L)(new _tast.CompilationPath(0, "CompPath", scoref, (0, _Types.L)()), l$$4));
  } else {
    return access$$4;
  }
}

function CheckBinding(cenv$$51, env$$67, alwaysCheckNoReraise$$1, context$$17, _arg6$$1) {
  var _apinfo, info$$1, memberInfo$$1;

  const bind$$2 = _arg6$$1;
  const v$$25 = bind$$2.fields[0];
  const bindRhs = bind$$2.fields[1];
  const g$$12 = cenv$$51.g;
  const isTop$$1 = (0, _tast.Val$$get_ValReprInfo)((0, _tast.Binding$$get_Var)(bind$$2)) != null;
  const env$$68 = new env(env$$67.boundTyparNames, env$$67.boundTypars, env$$67.argVals, env$$67.sigToImplRemapInfo, env$$67.ctorLimitedZone, env$$67.quote, env$$67.reflect, env$$67.external ? true : (0, _Seq.exists)(function predicate$$3(attr) {
    return (0, _TastOps.HasFSharpAttribute)(g$$12, attr, (0, _tast.Val$$get_Attribs)(v$$25));
  }, (0, _Option.defaultArg)((0, _TcGlobals.TcGlobals$$get_attrib_DllImportAttribute)(g$$12), [], function ($x$$13) {
    return [$x$$13];
  })), env$$67.returnScope);
  const matchValue$$22 = (0, _TastOps.TryGetActivePatternInfo)((0, _tast.mkLocalValRef)(v$$25));

  var $target$$113, _apinfo$$1;

  if (matchValue$$22 != null) {
    if (_apinfo = matchValue$$22, (0, _List.length)((0, _PrettyNaming.ActivePatternInfo$$get_ActiveTags)(_apinfo)) > 1) {
      $target$$113 = 0;
      _apinfo$$1 = matchValue$$22;
    } else {
      $target$$113 = 1;
    }
  } else {
    $target$$113 = 1;
  }

  switch ($target$$113) {
    case 0:
      {
        if ((0, _TastOps.doesActivePatternHaveFreeTypars)(g$$12, (0, _tast.mkLocalValRef)(v$$25))) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$activePatternChoiceHasFreeTypars$$Z721C83C5)((0, _tast.Val$$get_LogicalName)(v$$25)), (0, _tast.Val$$get_Range)(v$$25)));
        }

        break;
      }
  }

  const matchValue$$23 = (0, _Map.FSharpMap$$TryFind$$2B595)(cenv$$51.potentialUnboundUsesOfVals, (0, _tast.Val$$get_Stamp)(v$$25));

  if (matchValue$$23 != null) {
    const m$$49 = matchValue$$23;
    const nm$$1 = (0, _tast.Val$$get_DisplayName)(v$$25);
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkMemberUsedInInvalidWay$$30230F9B)(nm$$1, nm$$1, (0, _range.stringOfRange)(m$$49)), (0, _tast.Val$$get_Range)(v$$25)));
  }

  CheckTypePermitAllByrefs(cenv$$51, env$$68, (0, _tast.Val$$get_Range)(v$$25), (0, _tast.Val$$get_Type)(v$$25));
  CheckAttribs(cenv$$51, env$$68, (0, _tast.Val$$get_Attribs)(v$$25));
  (0, _Seq.iterate)(function action$$21(arg20$0040$$3) {
    CheckValInfo(cenv$$51, env$$68, arg20$0040$$3);
  }, (0, _Option.defaultArg)((0, _tast.Val$$get_ValReprInfo)(v$$25), [], function ($x$$14) {
    return [$x$$14];
  }));

  if (((0, _tast.Val$$get_IsMemberOrModuleBinding)(v$$25) ? true : (0, _tast.Val$$get_IsMember)(v$$25)) ? !(0, _tast.Val$$get_IsIncrClassGeneratedMember)(v$$25) : false) {
    const access$$5 = AdjustAccess((0, _TastOps.IsHiddenVal)(env$$68.sigToImplRemapInfo, v$$25), function () {
      return (0, _tast.EntityRef$$get_CompilationPath)((0, _tast.Val$$get_TopValDeclaringEntity)(v$$25));
    }, (0, _tast.Val$$get_Accessibility)(v$$25));
    CheckTypeForAccess(cenv$$51, env$$68, function () {
      return (0, _NicePrint.stringOfQualifiedValOrMember)(cenv$$51.denv, v$$25);
    }, access$$5, (0, _tast.Val$$get_Range)(v$$25), (0, _tast.Val$$get_Type)(v$$25));
  }

  const env$$69 = ((0, _tast.Val$$get_IsConstructor)(v$$25) ? !(0, _tast.Val$$get_IsIncrClassConstructor)(v$$25) : false) ? new env(env$$68.boundTyparNames, env$$68.boundTypars, env$$68.argVals, env$$68.sigToImplRemapInfo, true, env$$68.quote, env$$68.reflect, env$$68.external, env$$68.returnScope) : env$$68;

  if (cenv$$51.reportErrors) {
    const matchValue$$24 = (0, _tast.Val$$get_ValReprInfo)((0, _tast.Binding$$get_Var)(bind$$2));
    var $target$$114, info$$2;

    if (matchValue$$24 != null) {
      if (info$$1 = matchValue$$24, (0, _tast.ValReprInfo$$get_HasNoArgs)(info$$1)) {
        $target$$114 = 0;
        info$$2 = matchValue$$24;
      } else {
        $target$$114 = 1;
      }
    } else {
      $target$$114 = 1;
    }

    switch ($target$$114) {
      case 0:
        {
          CheckForByrefLikeType(cenv$$51, env$$69, (0, _tast.Val$$get_Range)(v$$25), (0, _tast.Val$$get_Type)(v$$25), function () {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoByrefAsTopValue)(), (0, _tast.Val$$get_Range)(v$$25)));
          });
          break;
        }
    }

    if ((0, _tast.Val$$get_PublicPath)(v$$25) != null) {
      if ((!(0, _tast.Val$$get_IsCompilerGenerated)(v$$25) ? true : (0, _tast.Val$$get_IsIncrClassGeneratedMember)(v$$25)) ? (env$$69.reflect ? true : (0, _TastOps.HasFSharpAttribute)(g$$12, (0, _TcGlobals.TcGlobals$$get_attrib_ReflectedDefinitionAttribute)(g$$12), (0, _tast.Val$$get_Attribs)(v$$25))) ? true : (0, _TastOps.HasFSharpAttribute)(g$$12, (0, _TcGlobals.TcGlobals$$get_attrib_ReflectedDefinitionAttribute)(g$$12), (0, _tast.EntityRef$$get_Attribs)((0, _tast.Val$$get_TopValDeclaringEntity)(v$$25))) : false) {
        if ((0, _tast.Val$$get_IsInstanceMember)(v$$25) ? (0, _tast.EntityRef$$get_IsStructOrEnumTycon)((0, _tast.Val$$get_MemberApparentEntity)(v$$25)) : false) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoReflectedDefinitionOnStructMember)(), (0, _tast.Val$$get_Range)(v$$25)));
        }

        cenv$$51.usesQuotations = true;

        if ((0, _tast.Val$$get_ReflectedDefinition)(v$$25) != null) {} else {
          (0, _tast.Val$$SetValDefn$$1EB7EF41)(v$$25, bindRhs);
        }

        try {
          const ety$$1 = (0, _TastOps.tyOfExpr)(g$$12, bindRhs);
          let patternInput$$3;

          if (bindRhs.tag === 4) {
            const tps$$8 = bindRhs.fields[1];
            const b = bindRhs.fields[2];
            patternInput$$3 = [tps$$8, b, (0, _TastOps.applyForallTy)(g$$12, ety$$1, (0, _List.map)(_tast.mkTyparTy, tps$$8))];
          } else {
            patternInput$$3 = [(0, _Types.L)(), bindRhs, ety$$1];
          }

          const env$$70 = (0, _QuotationTranslator.QuotationTranslationEnv$$BindTypars$$52A2C29A)((0, _QuotationTranslator.QuotationTranslationEnv$$$get_Empty)(), patternInput$$3[0]);
          const qscope$$1 = (0, _QuotationTranslator.QuotationGenerationScope$$$Create$$Z76DDC216)(g$$12, cenv$$51.amap, cenv$$51.viewCcu, new _QuotationTranslator.IsReflectedDefinition(0, "Yes"));
          (0, _QuotationTranslator.ConvExprPublic)(qscope$$1, env$$70, patternInput$$3[1]);
          const patternInput$$4 = (0, _QuotationTranslator.QuotationGenerationScope$$Close)(qscope$$1);

          if (!(patternInput$$4[2].tail == null)) {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkReflectedDefCantSplice)(), (0, _tast.Val$$get_Range)(v$$25)));
          }

          (0, _QuotationTranslator.ConvMethodBase)(qscope$$1, env$$70, (0, _tast.Val$$get_CompiledName)(v$$25), v$$25);
        } catch (matchValue$$26) {
          if (matchValue$$26 instanceof _QuotationTranslator.InvalidQuotedTerm) {
            (0, _ErrorLogger.errorR)(matchValue$$26.Data0);
          } else {
            throw matchValue$$26;
          }
        }
      }
    }
  }

  const matchValue$$27 = (0, _tast.Val$$get_MemberInfo)(v$$25);
  var $target$$115, memberInfo$$2;

  if (matchValue$$27 != null) {
    if (memberInfo$$1 = matchValue$$27, !(0, _tast.Val$$get_IsIncrClassGeneratedMember)(v$$25)) {
      $target$$115 = 0;
      memberInfo$$2 = matchValue$$27;
    } else {
      $target$$115 = 1;
    }
  } else {
    $target$$115 = 1;
  }

  switch ($target$$115) {
    case 0:
      {
        var $target$$116;

        if (memberInfo$$2.MemberFlags.MemberKind.tag === 4) {
          $target$$116 = 0;
        } else if (memberInfo$$2.MemberFlags.MemberKind.tag === 3) {
          $target$$116 = 0;
        } else {
          $target$$116 = 1;
        }

        switch ($target$$116) {
          case 0:
            {
              (0, _TastOps.ReturnTypeOfPropertyVal)(g$$12, v$$25);
              (0, _TastOps.ArgInfosOfPropertyVal)(g$$12, v$$25);
              break;
            }
        }

        break;
      }
  }

  let topValInfo$$4;
  const matchValue$$29 = (0, _tast.Val$$get_ValReprInfo)((0, _tast.Binding$$get_Var)(bind$$2));

  if (matchValue$$29 != null) {
    const info$$3 = matchValue$$29;
    topValInfo$$4 = info$$3;
  } else {
    topValInfo$$4 = _tast.ValReprInfoModule$$$emptyValData;
  }

  return CheckLambdas(isTop$$1, (0, _tast.Val$$get_MemberInfo)(v$$25), cenv$$51, env$$69, (0, _tast.Val$$get_MustInline)(v$$25), topValInfo$$4, alwaysCheckNoReraise$$1, bindRhs, (0, _tast.Val$$get_Range)(v$$25), (0, _tast.Val$$get_Type)(v$$25), context$$17);
}

function CheckBindings(cenv$$52, env$$71, xs$$3) {
  (0, _List.iterate)(function action$$22($arg$$15) {
    CheckBinding(cenv$$52, env$$71, false, new PermitByRefExpr(1, "Yes"), $arg$$15);
  }, xs$$3);
}

function CheckModuleBinding(cenv$$53, env$$72, _arg1$$5) {
  var arity$$1, arity$$3;
  const bind$$3 = _arg1$$5;
  const v$$26 = bind$$3.fields[0];
  const e$$8 = bind$$3.fields[1];
  const g$$13 = cenv$$53.g;
  const isExplicitEntryPoint = (0, _TastOps.HasFSharpAttribute)(g$$13, (0, _TcGlobals.TcGlobals$$get_attrib_EntryPointAttribute)(g$$13), (0, _tast.Val$$get_Attribs)(v$$26));

  if (isExplicitEntryPoint) {
    cenv$$53.entryPointGiven = true;
    const isLastCompiland = cenv$$53.isLastCompiland[0];

    if (!isLastCompiland ? cenv$$53.reportErrors : false) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkEntryPointUsage)(), (0, _tast.Val$$get_Range)(v$$26)));
    }
  }

  if ((((((!(0, _tast.Val$$get_IsMutable)(v$$26) ? !(0, _TastOps.HasFSharpAttribute)(g$$13, (0, _TcGlobals.TcGlobals$$get_attrib_LiteralAttribute)(g$$13), (0, _tast.Val$$get_Attribs)(v$$26)) : false) ? !(0, _TastOps.HasFSharpAttributeOpt)(g$$13, (0, _TcGlobals.TcGlobals$$get_attrib_ThreadStaticAttribute)(g$$13), (0, _tast.Val$$get_Attribs)(v$$26)) : false) ? !(0, _TastOps.HasFSharpAttributeOpt)(g$$13, (0, _TcGlobals.TcGlobals$$get_attrib_ContextStaticAttribute)(g$$13), (0, _tast.Val$$get_Attribs)(v$$26)) : false) ? (0, _TastOps.IsSimpleSyntacticConstantExpr)(g$$13, e$$8) : false) ? (0, _TastOps.IsCompiledAsStaticProperty)(g$$13, v$$26) : false) ? true : (0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$13) ? (0, _List.exists)(function predicate$$4(_arg1$$6) {
    const tc = _arg1$$6.fields[0];
    return (0, _tast.EntityRef$$get_CompiledName)(tc) === "ValueAsStaticPropertyAttribute";
  }, (0, _tast.Val$$get_Attribs)(v$$26)) : false) {
    (0, _tast.Val$$SetIsCompiledAsStaticPropertyWithoutField)(v$$26);
  }

  try {
    if ((0, _tast.Val$$get_IsCompilerGenerated)(v$$26)) {} else if ((0, _TastOps.ValIsExplicitImpl)(g$$13, v$$26)) {} else {
      if ((0, _tast.Val$$get_DeclaringEntity)(v$$26).tag === 0) {
        const tcref$$14 = (0, _tast.Val$$get_TopValDeclaringEntity)(v$$26);
        let hasDefaultAugmentation;

        if ((0, _tast.EntityRef$$get_IsUnionTycon)(tcref$$14)) {
          const matchValue$$31 = (0, _TastOps.TryFindFSharpAttribute)(g$$13, (0, _TcGlobals.TcGlobals$$get_attrib_DefaultAugmentationAttribute)(g$$13), (0, _tast.EntityRef$$get_Attribs)(tcref$$14));
          var $target$$117, b$$1;

          if (matchValue$$31 != null) {
            if (matchValue$$31.fields[2].tail != null) {
              const activePatternResult45431 = (0, _TastOps.$007CAttribBoolArg$007C_$007C)(matchValue$$31.fields[2].head);

              if (activePatternResult45431 != null) {
                if (matchValue$$31.fields[2].tail.tail == null) {
                  $target$$117 = 0;
                  b$$1 = activePatternResult45431;
                } else {
                  $target$$117 = 1;
                }
              } else {
                $target$$117 = 1;
              }
            } else {
              $target$$117 = 1;
            }
          } else {
            $target$$117 = 1;
          }

          switch ($target$$117) {
            case 0:
              {
                hasDefaultAugmentation = b$$1;
                break;
              }

            case 1:
              {
                hasDefaultAugmentation = true;
                break;
              }
          }
        } else {
          hasDefaultAugmentation = false;
        }

        const kind = (0, _tast.Val$$get_IsMember)(v$$26) ? "member" : "value";

        const check$$2 = function check$$2(skipValCheck, nm$$2) {
          if (((!skipValCheck ? (0, _tast.Val$$get_IsModuleBinding)(v$$26) : false) ? (0, _Map.FSharpMap$$ContainsKey$$2B595)((0, _tast.ModuleOrNamespaceType$$get_AllValsByLogicalName)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(tcref$$14)), nm$$2) : false) ? !(0, _tast.valEq)((0, _Map.FSharpMap$$get_Item$$2B595)((0, _tast.ModuleOrNamespaceType$$get_AllValsByLogicalName)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(tcref$$14)), nm$$2), v$$26) : false) {
            (0, _ErrorLogger.error)(new _tast.Duplicate(kind, (0, _tast.Val$$get_DisplayName)(v$$26), (0, _tast.Val$$get_Range)(v$$26)));
          }

          if ((0, _tast.EntityRef$$get_IsUnionTycon)(tcref$$14)) {
            switch (nm$$2) {
              case "Tag":
                {
                  (0, _ErrorLogger.errorR)(new _tast.NameClash(nm$$2, kind, (0, _tast.Val$$get_DisplayName)(v$$26), (0, _tast.Val$$get_Range)(v$$26), (0, _FSComp.SR$$$typeInfoGeneratedProperty)(), "Tag", (0, _tast.EntityRef$$get_Range)(tcref$$14)));
                  break;
                }

              case "Tags":
                {
                  (0, _ErrorLogger.errorR)(new _tast.NameClash(nm$$2, kind, (0, _tast.Val$$get_DisplayName)(v$$26), (0, _tast.Val$$get_Range)(v$$26), (0, _FSComp.SR$$$typeInfoGeneratedType)(), "Tags", (0, _tast.EntityRef$$get_Range)(tcref$$14)));
                  break;
                }

              default:
                {
                  if (hasDefaultAugmentation) {
                    const matchValue$$32 = (0, _tast.EntityRef$$GetUnionCaseByName$$Z721C83C5)(tcref$$14, nm$$2);

                    if (matchValue$$32 == null) {} else {
                      const uc = matchValue$$32;
                      (0, _ErrorLogger.error)(new _tast.NameClash(nm$$2, kind, (0, _tast.Val$$get_DisplayName)(v$$26), (0, _tast.Val$$get_Range)(v$$26), (0, _FSComp.SR$$$typeInfoUnionCase)(), (0, _tast.UnionCase$$get_DisplayName)(uc), (0, _tast.UnionCase$$get_Range)(uc)));
                    }

                    let hasNoArgs;
                    const matchValue$$33 = (0, _tast.Val$$get_ValReprInfo)(v$$26);

                    if (matchValue$$33 != null) {
                      const arity = matchValue$$33;
                      hasNoArgs = (0, _List.sum)((0, _tast.ValReprInfo$$get_AritiesOfArgs)(arity), {
                        GetZero() {
                          return 0;
                        },

                        Add($x$$16, $y$$17) {
                          return $x$$16 + $y$$17;
                        }

                      }) - (0, _tast.Val$$get_NumObjArgs)(v$$26) <= 0 ? (0, _tast.ValReprInfo$$get_NumTypars)(arity) === 0 : false;
                    } else {
                      hasNoArgs = false;
                    }

                    if ((0, _tast.EntityRef$$get_UnionCasesArray)(tcref$$14).length === 1 ? hasNoArgs : false) {
                      const ucase1 = (0, _tast.EntityRef$$get_UnionCasesArray)(tcref$$14)[0];
                      const arr = (0, _tast.UnionCase$$get_RecdFieldsArray)(ucase1);

                      for (let idx = 0; idx <= arr.length - 1; idx++) {
                        const f$$13 = arr[idx];

                        if ((0, _tast.RecdField$$get_Name)(f$$13) === nm$$2) {
                          (0, _ErrorLogger.error)(new _tast.NameClash(nm$$2, kind, (0, _tast.Val$$get_DisplayName)(v$$26), (0, _tast.Val$$get_Range)(v$$26), (0, _FSComp.SR$$$typeInfoGeneratedProperty)(), (0, _tast.RecdField$$get_Name)(f$$13), (0, _tast.UnionCase$$get_Range)(ucase1)));
                        }
                      }
                    }
                  }
                }
            }
          }

          const prefix = "New";

          if ((0, _String.startsWith)(nm$$2, prefix, 4)) {
            const matchValue$$34 = (0, _tast.EntityRef$$GetUnionCaseByName$$Z721C83C5)(tcref$$14, nm$$2.slice(prefix.length, nm$$2.length));

            if (matchValue$$34 == null) {} else {
              const uc$$1 = matchValue$$34;
              (0, _ErrorLogger.error)(new _tast.NameClash(nm$$2, kind, (0, _tast.Val$$get_DisplayName)(v$$26), (0, _tast.Val$$get_Range)(v$$26), (0, _FSComp.SR$$$chkUnionCaseCompiledForm)(), (0, _tast.UnionCase$$get_DisplayName)(uc$$1), (0, _tast.UnionCase$$get_Range)(uc$$1)));
            }
          }

          const prefix$$1 = "Is";

          if ((0, _String.startsWith)(nm$$2, prefix$$1, 4) ? hasDefaultAugmentation : false) {
            const matchValue$$35 = (0, _tast.EntityRef$$GetUnionCaseByName$$Z721C83C5)(tcref$$14, nm$$2.slice(prefix$$1.length, nm$$2.length));

            if (matchValue$$35 == null) {} else {
              const uc$$2 = matchValue$$35;
              (0, _ErrorLogger.error)(new _tast.NameClash(nm$$2, kind, (0, _tast.Val$$get_DisplayName)(v$$26), (0, _tast.Val$$get_Range)(v$$26), (0, _FSComp.SR$$$chkUnionCaseDefaultAugmentation)(), (0, _tast.UnionCase$$get_DisplayName)(uc$$2), (0, _tast.UnionCase$$get_Range)(uc$$2)));
            }
          }

          const matchValue$$36 = (0, _tast.EntityRef$$GetFieldByName$$Z721C83C5)(tcref$$14, nm$$2);

          if (matchValue$$36 == null) {} else {
            const rf$$1 = matchValue$$36;
            (0, _ErrorLogger.error)(new _tast.NameClash(nm$$2, kind, (0, _tast.Val$$get_DisplayName)(v$$26), (0, _tast.Val$$get_Range)(v$$26), "field", (0, _tast.RecdField$$get_Name)(rf$$1), (0, _tast.RecdField$$get_Range)(rf$$1)));
          }
        };

        check$$2(false, (0, _tast.Val$$get_CoreDisplayName)(v$$26));
        check$$2(false, (0, _tast.Val$$get_DisplayName)(v$$26));
        check$$2(false, (0, _tast.Val$$get_CompiledName)(v$$26));

        if ((0, _tast.Val$$get_IsExtensionMember)(v$$26)) {
          (0, _List.iterate)(function action$$23(v2) {
            if (((0, _tast.Val$$get_IsExtensionMember)(v2) ? !(0, _tast.valEq)(v$$26, v2) : false) ? (0, _tast.Val$$get_CompiledName)(v$$26) === (0, _tast.Val$$get_CompiledName)(v2) : false) {
              const minfo1 = new _infos.MethInfo(0, "FSMeth", g$$13, (0, _TastOps.generalizedTyconRef)(tcref$$14), (0, _tast.mkLocalValRef)(v$$26), (0, _Long.fromBits)(0, 0, true));
              const minfo2 = new _infos.MethInfo(0, "FSMeth", g$$13, (0, _TastOps.generalizedTyconRef)(tcref$$14), (0, _tast.mkLocalValRef)(v2), (0, _Long.fromBits)(0, 0, true));

              if ((0, _TastOps.tyconRefEq)(g$$13, (0, _tast.Val$$get_MemberApparentEntity)(v$$26), (0, _tast.Val$$get_MemberApparentEntity)(v2)) ? (0, _infos.MethInfosEquivByNameAndSig)(new _TastOps.Erasure(0, "EraseAll"), true, g$$13, cenv$$53.amap, (0, _tast.Val$$get_Range)(v$$26), minfo1, minfo2) : false) {
                (0, _ErrorLogger.errorR)(new _tast.Duplicate(kind, (0, _tast.Val$$get_DisplayName)(v$$26), (0, _tast.Val$$get_Range)(v$$26)));
              }
            }
          }, (0, _Map.FSharpMap$$get_Item$$2B595)((0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembersByLogicalNameUncached)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(tcref$$14)), (0, _tast.Val$$get_LogicalName)(v$$26)));
        }

        const matchValue$$37 = (0, _tast.Val$$get_ValReprInfo)(v$$26);
        var $target$$118, arity$$2;

        if (matchValue$$37 != null) {
          if (arity$$1 = matchValue$$37, (0, _tast.ValReprInfo$$get_NumCurriedArgs)(arity$$1) === 0 ? (0, _tast.ValReprInfo$$get_NumTypars)(arity$$1) === 0 : false) {
            $target$$118 = 0;
            arity$$2 = matchValue$$37;
          } else {
            $target$$118 = 1;
          }
        } else {
          $target$$118 = 1;
        }

        switch ($target$$118) {
          case 0:
            {
              check$$2(false, "get_" + (0, _tast.Val$$get_DisplayName)(v$$26));
              break;
            }
        }

        const matchValue$$38 = (0, _tast.Val$$get_ValReprInfo)(v$$26);
        var $target$$119, arity$$4;

        if (matchValue$$38 != null) {
          if (arity$$3 = matchValue$$38, ((0, _tast.Val$$get_IsMutable)(v$$26) ? (0, _tast.ValReprInfo$$get_NumCurriedArgs)(arity$$3) === 0 : false) ? (0, _tast.ValReprInfo$$get_NumTypars)(arity$$3) === 0 : false) {
            $target$$119 = 0;
            arity$$4 = matchValue$$38;
          } else {
            $target$$119 = 1;
          }
        } else {
          $target$$119 = 1;
        }

        switch ($target$$119) {
          case 0:
            {
              check$$2(false, "set_" + (0, _tast.Val$$get_DisplayName)(v$$26));
              break;
            }
        }

        const matchValue$$39 = (0, _PrettyNaming.TryChopPropertyName)((0, _tast.Val$$get_DisplayName)(v$$26));

        if (matchValue$$39 == null) {} else {
          const res = matchValue$$39;
          check$$2(true, res);
        }
      }
    }
  } catch (e$$9) {
    (0, _ErrorLogger.errorRecovery)(e$$9, (0, _tast.Val$$get_Range)(v$$26));
  }

  CheckBinding(cenv$$53, new env(env$$72.boundTyparNames, env$$72.boundTypars, env$$72.argVals, env$$72.sigToImplRemapInfo, env$$72.ctorLimitedZone, env$$72.quote, env$$72.reflect, env$$72.external, 1), true, new PermitByRefExpr(1, "Yes"), bind$$3);
}

function CheckModuleBindings(cenv$$54, env$$73, binds$$1) {
  (0, _List.iterate)(function action$$24(arg20$0040$$4) {
    CheckModuleBinding(cenv$$54, env$$73, arg20$0040$$4);
  }, binds$$1);
}

function CheckRecdField(isUnion, cenv$$55, env$$74, tycon, rfield) {
  const g$$14 = cenv$$55.g;
  const tcref$$15 = (0, _tast.mkLocalTyconRef)(tycon);
  const m$$51 = (0, _tast.RecdField$$get_Range)(rfield);
  const fieldTy = (0, _TastOps.stripTyEqns)(cenv$$55.g, (0, _tast.RecdField$$get_FormalType)(rfield));
  const isHidden$$1 = ((0, _TastOps.IsHiddenTycon)(env$$74.sigToImplRemapInfo, tycon) ? true : (0, _TastOps.IsHiddenTyconRepr)(env$$74.sigToImplRemapInfo, tycon)) ? true : !isUnion ? (0, _TastOps.IsHiddenRecdField)(env$$74.sigToImplRemapInfo, (0, _tast.EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14)(tcref$$15, rfield)) : false;
  const access$$6 = AdjustAccess(isHidden$$1, function () {
    return (0, _tast.Entity$$get_CompilationPath)(tycon);
  }, (0, _tast.RecdField$$get_Accessibility)(rfield));
  CheckTypeForAccess(cenv$$55, env$$74, function () {
    return (0, _tast.RecdField$$get_Name)(rfield);
  }, access$$6, m$$51, fieldTy);

  if ((0, _TastOps.TyconRefHasAttribute)(g$$14, m$$51, (0, _TcGlobals.TcGlobals$$get_attrib_IsByRefLikeAttribute)(g$$14), tcref$$15)) {
    CheckTypePermitSpanLike(cenv$$55, env$$74, m$$51, fieldTy);

    if (cenv$$55.reportErrors) {
      CheckForByrefType(cenv$$55, env$$74, fieldTy, function () {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkCantStoreByrefValue)(), (0, _tast.Entity$$get_Range)(tycon)));
      });
    }
  } else {
    CheckTypeNoByrefs(cenv$$55, env$$74, m$$51, fieldTy);

    if (cenv$$55.reportErrors) {
      CheckForByrefLikeType(cenv$$55, env$$74, m$$51, fieldTy, function () {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkCantStoreByrefValue)(), (0, _tast.Entity$$get_Range)(tycon)));
      });
    }
  }

  CheckAttribs(cenv$$55, env$$74, (0, _tast.RecdField$$get_PropertyAttribs)(rfield));
  CheckAttribs(cenv$$55, env$$74, (0, _tast.RecdField$$get_FieldAttribs)(rfield));
}

function CheckEntityDefn(cenv$$56, env$$75, tycon$$1) {
  const g$$15 = cenv$$56.g;
  const m$$52 = (0, _tast.Entity$$get_Range)(tycon$$1);
  const tcref$$16 = (0, _tast.mkLocalTyconRef)(tycon$$1);
  const ty$$37 = (0, _TastOps.generalizedTyconRef)(tcref$$16);
  const env$$76 = new env(env$$75.boundTyparNames, env$$75.boundTypars, env$$75.argVals, env$$75.sigToImplRemapInfo, env$$75.ctorLimitedZone, env$$75.quote, env$$75.reflect ? true : (0, _TastOps.HasFSharpAttribute)(g$$15, (0, _TcGlobals.TcGlobals$$get_attrib_ReflectedDefinitionAttribute)(g$$15), (0, _tast.Entity$$get_Attribs)(tycon$$1)), env$$75.external, env$$75.returnScope);
  const env$$77 = BindTypars(g$$15, env$$76, (0, _tast.Entity$$Typars$$4DB9192C)(tycon$$1, m$$52));
  CheckAttribs(cenv$$56, env$$77, (0, _tast.Entity$$get_Attribs)(tycon$$1));
  const matchValue$$40 = (0, _tast.Entity$$get_TypeAbbrev)(tycon$$1);

  if (matchValue$$40 != null) {
    const abbrev = matchValue$$40;
    WarnOnWrongTypeForAccess(cenv$$56, env$$77, function () {
      return (0, _tast.Entity$$get_CompiledName)(tycon$$1);
    }, (0, _tast.Entity$$get_Accessibility)(tycon$$1), (0, _tast.Entity$$get_Range)(tycon$$1), abbrev);
  }

  if (cenv$$56.reportErrors) {
    if (!(0, _tast.Entity$$get_IsTypeAbbrev)(tycon$$1)) {
      let allVirtualMethsInParent;
      const matchValue$$41 = (0, _infos.GetSuperTypeOfType)(g$$15, cenv$$56.amap, m$$52, ty$$37);

      if (matchValue$$41 == null) {
        allVirtualMethsInParent = (0, _Types.L)();
      } else {
        const super$ = matchValue$$41;
        allVirtualMethsInParent = (0, _List.filter)(function predicate$$5(minfo) {
          return (0, _infos.MethInfo$$get_IsVirtual)(minfo);
        }, (0, _InfoReader.GetIntrinsicMethInfosOfType)(cenv$$56.infoReader, null, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"), new _infos.AllowMultiIntfInstantiations(0, "Yes"), new _InfoReader.FindMemberFlag(0, "IgnoreOverrides"), m$$52, super$));
      }

      const namesOfMethodsThatMayDifferOnlyInReturnType = (0, _Types.L)("op_Explicit", (0, _Types.L)("op_Implicit", (0, _Types.L)()));

      const methodUniquenessIncludesReturnType = function methodUniquenessIncludesReturnType(minfo$$1) {
        return (0, _List.contains)((0, _infos.MethInfo$$get_LogicalName)(minfo$$1), namesOfMethodsThatMayDifferOnlyInReturnType, {
          Equals($x$$18, $y$$19) {
            return $x$$18 === $y$$19;
          },

          GetHashCode: _Util.structuralHash
        });
      };

      const MethInfosEquivWrtUniqueness = function MethInfosEquivWrtUniqueness(eraseFlag, m$$53, minfo$$2, minfo2$$1) {
        if (methodUniquenessIncludesReturnType(minfo$$2)) {
          return (0, _infos.MethInfosEquivByNameAndSig)(eraseFlag, true, g$$15, cenv$$56.amap, m$$53, minfo$$2, minfo2$$1);
        } else {
          return (0, _infos.MethInfosEquivByNameAndPartialSig)(eraseFlag, true, g$$15, cenv$$56.amap, m$$53, minfo$$2, minfo2$$1);
        }
      };

      const immediateMeths = (0, _List.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.append)((0, _Seq.map)(function (v$$27) {
          return new _infos.MethInfo(0, "FSMeth", g$$15, ty$$37, v$$27, null);
        }, (0, _tast.Entity$$get_AllGeneratedValues)(tycon$$1)), (0, _Seq.delay)(function () {
          return (0, _InfoReader.GetImmediateIntrinsicMethInfosOfType)(null, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"), g$$15, cenv$$56.amap, m$$52, ty$$37);
        }));
      }));
      const immediateProps = (0, _InfoReader.GetImmediateIntrinsicPropInfosOfType)(null, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"), g$$15, cenv$$56.amap, m$$52, ty$$37);

      const getHash = function getHash(hash, nm$$3) {
        const matchValue$$42 = (0, _Util.tryGetValue)(hash, nm$$3, null);

        if (matchValue$$42[0]) {
          return matchValue$$42[1];
        } else {
          return (0, _Types.L)();
        }
      };

      let hashOfImmediateMeths;
      const h$$1 = new Map([]);
      (0, _Seq.iterate)(function (minfo$$3) {
        const matchValue$$43 = (0, _Util.tryGetValue)(h$$1, (0, _infos.MethInfo$$get_LogicalName)(minfo$$3), null);

        if (matchValue$$43[0]) {
          h$$1.set((0, _infos.MethInfo$$get_LogicalName)(minfo$$3), (0, _Types.L)(minfo$$3, matchValue$$43[1]));
        } else {
          h$$1.set((0, _infos.MethInfo$$get_LogicalName)(minfo$$3), (0, _Types.L)(minfo$$3, (0, _Types.L)()));
        }
      }, immediateMeths);
      hashOfImmediateMeths = h$$1;

      const getOtherMethods = function getOtherMethods(minfo$$4) {
        return (0, _List.ofSeq)((0, _Seq.delay)(function () {
          const methods$$2 = hashOfImmediateMeths.get((0, _infos.MethInfo$$get_LogicalName)(minfo$$4));
          return (0, _Seq.collect)(function (m$$54) {
            return !(m$$54 === minfo$$4) ? (0, _Seq.singleton)(m$$54) : (0, _Seq.empty)();
          }, methods$$2);
        }));
      };

      const hashOfImmediateProps = new Map([]);
      (0, _Seq.iterate)(function (minfo$$5) {
        const nm$$4 = (0, _infos.MethInfo$$get_LogicalName)(minfo$$5);
        let m$$55;
        const matchValue$$44 = (0, _infos.MethInfo$$get_ArbitraryValRef)(minfo$$5);

        if (matchValue$$44 != null) {
          const vref$$15 = matchValue$$44;
          m$$55 = (0, _tast.ValRef$$get_DefinitionRange)(vref$$15);
        } else {
          m$$55 = m$$52;
        }

        const others = getOtherMethods(minfo$$5);

        const IsAbstractDefaultPair = function IsAbstractDefaultPair(x$$12, y) {
          if ((0, _infos.MethInfo$$get_IsDispatchSlot)(x$$12)) {
            return (0, _infos.MethInfo$$get_IsDefiniteFSharpOverride)(y);
          } else {
            return false;
          }
        };

        const IsAbstractDefaultPair2 = function IsAbstractDefaultPair2(minfo$$6, minfo2$$2) {
          if (IsAbstractDefaultPair(minfo$$6, minfo2$$2)) {
            return true;
          } else {
            return IsAbstractDefaultPair(minfo2$$2, minfo$$6);
          }
        };

        const checkForDup = function checkForDup(erasureFlag, minfo2$$3) {
          if (!IsAbstractDefaultPair2(minfo$$5, minfo2$$3) ? (0, _infos.MethInfo$$get_IsInstance)(minfo$$5) === (0, _infos.MethInfo$$get_IsInstance)(minfo2$$3) : false) {
            return MethInfosEquivWrtUniqueness(erasureFlag, m$$55, minfo$$5, minfo2$$3);
          } else {
            return false;
          }
        };

        if ((0, _List.exists)((0, _Util.partialApply)(1, checkForDup, [new _TastOps.Erasure(0, "EraseAll")]), others)) {
          if ((0, _List.exists)((0, _Util.partialApply)(1, checkForDup, [new _TastOps.Erasure(2, "EraseNone")]), others)) {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkDuplicateMethod$$Z384F8060)(nm$$4, (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, ty$$37)), m$$55));
          } else {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkDuplicateMethodWithSuffix$$Z384F8060)(nm$$4, (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, ty$$37)), m$$55));
          }
        }

        const numCurriedArgSets = (0, _List.length)((0, _infos.MethInfo$$get_NumArgs)(minfo$$5)) | 0;

        if (numCurriedArgSets > 1 ? (0, _List.exists)(function predicate$$8(minfo2$$4) {
          return !IsAbstractDefaultPair2(minfo$$5, minfo2$$4);
        }, others) : false) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkDuplicateMethodCurried$$Z384F8060)(nm$$4, (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, ty$$37)), m$$55));
        }

        if (numCurriedArgSets > 1 ? (0, _illib.List$$$existsSquared)(function f$$14(_arg1$$7) {
          const ty$$38 = _arg1$$7.fields[7];
          const reflArgInfo = _arg1$$7.fields[6];
          const optArgInfo = _arg1$$7.fields[3];
          const isParamArrayArg = _arg1$$7.fields[0];
          const isOutArg = _arg1$$7.fields[2];
          const callerInfo = _arg1$$7.fields[4];
          const _isInArg = _arg1$$7.fields[1];

          if ((((isParamArrayArg ? true : isOutArg) ? true : (0, _infos.ReflectedArgInfo$$get_AutoQuote)(reflArgInfo)) ? true : (0, _infos.OptionalArgInfo$$get_IsOptional)(optArgInfo)) ? true : !(0, _Util.equals)(callerInfo, new _infos.CallerInfo(0, "NoCallerInfo"))) {
            return true;
          } else {
            return (0, _TastOps.isByrefLikeTy)(g$$15, m$$55, ty$$38);
          }
        }, (0, _infos.MethInfo$$GetParamDatas$$Z5D984B3C)(minfo$$5, cenv$$56.amap, m$$55, (0, _infos.MethInfo$$get_FormalMethodInst)(minfo$$5))) : false) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkCurriedMethodsCantHaveOutParams)(), m$$55));
        }

        if (numCurriedArgSets === 1) {
          (0, _illib.List$$$iterSquared)(function f$$15(_arg2$$3) {
            const ty$$39 = _arg2$$3.fields[7];
            const optArgInfo$$1 = _arg2$$3.fields[3];
            const isInArg = _arg2$$3.fields[1];
            const callerInfo$$1 = _arg2$$3.fields[4];
            isInArg;
            const matchValue$$45 = [optArgInfo$$1, callerInfo$$1];
            var $target$$120;

            if (matchValue$$45[1].tag === 1) {
              if (matchValue$$45[0].tag === 2) {
                $target$$120 = 2;
              } else if (matchValue$$45[0].tag === 1) {
                $target$$120 = 3;
              } else {
                $target$$120 = 1;
              }
            } else if (matchValue$$45[1].tag === 3) {
              if (matchValue$$45[0].tag === 2) {
                $target$$120 = 4;
              } else if (matchValue$$45[0].tag === 1) {
                $target$$120 = 5;
              } else {
                $target$$120 = 1;
              }
            } else if (matchValue$$45[1].tag === 2) {
              if (matchValue$$45[0].tag === 2) {
                $target$$120 = 6;
              } else if (matchValue$$45[0].tag === 1) {
                $target$$120 = 7;
              } else {
                $target$$120 = 1;
              }
            } else {
              $target$$120 = 0;
            }

            switch ($target$$120) {
              case 1:
                {
                  (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcCallerInfoNotOptional$$Z721C83C5)(callerInfo$$1.toString()), m$$55));
                  break;
                }

              case 2:
                {
                  if (!(0, _TastOps.typeEquiv)(g$$15, (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$15), ty$$39)) {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcCallerInfoWrongType$$30230F9B)(callerInfo$$1.toString(), "int", (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, ty$$39)), m$$55));
                  }

                  break;
                }

              case 3:
                {
                  if (!((0, _TastOps.isOptionTy)(g$$15, ty$$39) ? (0, _TastOps.typeEquiv)(g$$15, (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$15), (0, _TastOps.destOptionTy)(g$$15, ty$$39)) : false)) {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcCallerInfoWrongType$$30230F9B)(callerInfo$$1.toString(), "int", (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, (0, _TastOps.destOptionTy)(g$$15, ty$$39))), m$$55));
                  }

                  break;
                }

              case 4:
                {
                  if (!(0, _TastOps.typeEquiv)(g$$15, (0, _TcGlobals.TcGlobals$$get_string_ty)(g$$15), ty$$39)) {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcCallerInfoWrongType$$30230F9B)(callerInfo$$1.toString(), "string", (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, ty$$39)), m$$55));
                  }

                  break;
                }

              case 5:
                {
                  if (!((0, _TastOps.isOptionTy)(g$$15, ty$$39) ? (0, _TastOps.typeEquiv)(g$$15, (0, _TcGlobals.TcGlobals$$get_string_ty)(g$$15), (0, _TastOps.destOptionTy)(g$$15, ty$$39)) : false)) {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcCallerInfoWrongType$$30230F9B)(callerInfo$$1.toString(), "string", (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, (0, _TastOps.destOptionTy)(g$$15, ty$$39))), m$$55));
                  }

                  break;
                }

              case 6:
                {
                  if (!(0, _TastOps.typeEquiv)(g$$15, (0, _TcGlobals.TcGlobals$$get_string_ty)(g$$15), ty$$39)) {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcCallerInfoWrongType$$30230F9B)(callerInfo$$1.toString(), "string", (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, ty$$39)), m$$55));
                  }

                  break;
                }

              case 7:
                {
                  if (!((0, _TastOps.isOptionTy)(g$$15, ty$$39) ? (0, _TastOps.typeEquiv)(g$$15, (0, _TcGlobals.TcGlobals$$get_string_ty)(g$$15), (0, _TastOps.destOptionTy)(g$$15, ty$$39)) : false)) {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcCallerInfoWrongType$$30230F9B)(callerInfo$$1.toString(), "string", (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, (0, _TastOps.destOptionTy)(g$$15, ty$$39))), m$$55));
                  }

                  break;
                }
            }
          }, (0, _infos.MethInfo$$GetParamDatas$$Z5D984B3C)(minfo$$5, cenv$$56.amap, m$$55, (0, _infos.MethInfo$$get_FormalMethodInst)(minfo$$5)));
        }
      }, immediateMeths);
      (0, _Seq.iterate)(function (pinfo) {
        var setterArgs, getterArgs, nargs;
        const nm$$5 = (0, _infos.PropInfo$$get_PropertyName)(pinfo);
        let m$$56;
        const matchValue$$46 = (0, _infos.PropInfo$$get_ArbitraryValRef)(pinfo);

        if (matchValue$$46 != null) {
          const vref$$16 = matchValue$$46;
          m$$56 = (0, _tast.ValRef$$get_DefinitionRange)(vref$$16);
        } else {
          m$$56 = m$$52;
        }

        if (hashOfImmediateMeths.has(nm$$5)) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkPropertySameNameMethod$$Z384F8060)(nm$$5, (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, ty$$37)), m$$56));
        }

        const others$$1 = getHash(hashOfImmediateProps, nm$$5);

        if (((0, _infos.PropInfo$$get_HasGetter)(pinfo) ? (0, _infos.PropInfo$$get_HasSetter)(pinfo) : false) ? (0, _infos.MethInfo$$get_IsVirtual)((0, _infos.PropInfo$$get_GetterMethod)(pinfo)) !== (0, _infos.MethInfo$$get_IsVirtual)((0, _infos.PropInfo$$get_SetterMethod)(pinfo)) : false) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkGetterSetterDoNotMatchAbstract$$Z384F8060)(nm$$5, (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, ty$$37)), m$$56));
        }

        const checkForDup$$1 = function checkForDup$$1(erasureFlag$$1, pinfo2) {
          const IsAbstractDefaultPair$$1 = function IsAbstractDefaultPair$$1(x$$13, y$$1) {
            if ((0, _infos.PropInfo$$get_IsDispatchSlot)(x$$13)) {
              return (0, _infos.PropInfo$$get_IsDefiniteFSharpOverride)(y$$1);
            } else {
              return false;
            }
          };

          if (!(IsAbstractDefaultPair$$1(pinfo, pinfo2) ? true : IsAbstractDefaultPair$$1(pinfo2, pinfo))) {
            return (0, _infos.PropInfosEquivByNameAndPartialSig)(erasureFlag$$1, g$$15, cenv$$56.amap, m$$56, pinfo, pinfo2);
          } else {
            return false;
          }
        };

        if ((0, _List.exists)((0, _Util.partialApply)(1, checkForDup$$1, [new _TastOps.Erasure(0, "EraseAll")]), others$$1)) {
          if ((0, _List.exists)((0, _Util.partialApply)(1, checkForDup$$1, [new _TastOps.Erasure(2, "EraseNone")]), others$$1)) {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkDuplicateProperty$$Z384F8060)(nm$$5, (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, ty$$37)), m$$56));
          } else {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkDuplicatePropertyWithSuffix$$Z384F8060)(nm$$5, (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, ty$$37)), m$$56));
          }
        }

        if ((((0, _infos.PropInfo$$get_HasGetter)(pinfo) ? (0, _infos.PropInfo$$get_HasSetter)(pinfo) : false) ? (setterArgs = (0, _infos.PropInfo$$GetParamTypes$$73F6E43C)((0, _infos.PropInfo$$get_DropGetter)(pinfo), cenv$$56.amap, m$$56), (getterArgs = (0, _infos.PropInfo$$GetParamTypes$$73F6E43C)((0, _infos.PropInfo$$get_DropSetter)(pinfo), cenv$$56.amap, m$$56), (0, _List.length)(setterArgs) !== (0, _List.length)(getterArgs))) : false) ? true : (nargs = (0, _List.length)((0, _infos.PropInfo$$GetParamTypes$$73F6E43C)(pinfo, cenv$$56.amap, m$$56)) | 0, (0, _List.exists)(function predicate$$11(pinfo2$$1) {
          return (0, _infos.PropInfo$$GetParamTypes$$73F6E43C)(pinfo2$$1, cenv$$56.amap, m$$56).tail == null !== (nargs === 0);
        }, others$$1))) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkPropertySameNameIndexer$$Z384F8060)(nm$$5, (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, ty$$37)), m$$56));
        }

        if (((0, _infos.PropInfo$$get_HasGetter)(pinfo) ? (0, _infos.PropInfo$$get_HasSetter)(pinfo) : false) ? !(0, _infos.PropInfo$$get_IsIndexer)(pinfo) : false) {
          const ty1$$2 = (0, _infos.PropInfo$$GetPropertyType$$73F6E43C)((0, _infos.PropInfo$$get_DropSetter)(pinfo), cenv$$56.amap, m$$56);
          const ty2$$1 = (0, _infos.PropInfo$$GetPropertyType$$73F6E43C)((0, _infos.PropInfo$$get_DropGetter)(pinfo), cenv$$56.amap, m$$56);

          if (!(0, _TastOps.typeEquivAux)(new _TastOps.Erasure(2, "EraseNone"), (0, _import.ImportMap$$get_g)(cenv$$56.amap), ty1$$2, ty2$$1)) {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkGetterAndSetterHaveSamePropertyType$$30230F9B)((0, _infos.PropInfo$$get_PropertyName)(pinfo), (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, ty1$$2), (0, _NicePrint.minimalStringOfType)(cenv$$56.denv, ty2$$1)), m$$56));
          }
        }

        hashOfImmediateProps.set(nm$$5, (0, _Types.L)(pinfo, others$$1));
      }, immediateProps);

      if (!(0, _TastOps.isInterfaceTy)(g$$15, ty$$37)) {
        const hashOfAllVirtualMethsInParent = new Map([]);
        (0, _Seq.iterate)(function (minfo$$7) {
          const nm$$6 = (0, _infos.MethInfo$$get_LogicalName)(minfo$$7);
          const others$$2 = getHash(hashOfAllVirtualMethsInParent, nm$$6);
          hashOfAllVirtualMethsInParent.set(nm$$6, (0, _Types.L)(minfo$$7, others$$2));
        }, allVirtualMethsInParent);
        (0, _Seq.iterate)(function (minfo$$8) {
          if ((!(0, _infos.MethInfo$$get_IsDispatchSlot)(minfo$$8) ? !(0, _infos.MethInfo$$get_IsVirtual)(minfo$$8) : false) ? (0, _infos.MethInfo$$get_IsInstance)(minfo$$8) : false) {
            const nm$$7 = (0, _infos.MethInfo$$get_LogicalName)(minfo$$8);
            let m$$57;
            const matchValue$$47 = (0, _infos.MethInfo$$get_ArbitraryValRef)(minfo$$8);

            if (matchValue$$47 != null) {
              const vref$$17 = matchValue$$47;
              m$$57 = (0, _tast.ValRef$$get_DefinitionRange)(vref$$17);
            } else {
              m$$57 = m$$52;
            }

            const parentMethsOfSameName = getHash(hashOfAllVirtualMethsInParent, nm$$7);

            const checkForDup$$2 = function checkForDup$$2(erasureFlag$$2, minfo2$$5) {
              if ((0, _infos.MethInfo$$get_IsDispatchSlot)(minfo2$$5)) {
                return (0, _infos.MethInfosEquivByNameAndSig)(erasureFlag$$2, true, g$$15, cenv$$56.amap, m$$57, minfo$$8, minfo2$$5);
              } else {
                return false;
              }
            };

            const matchValue$$48 = (0, _List.tryFind)((0, _Util.partialApply)(1, checkForDup$$2, [new _TastOps.Erasure(0, "EraseAll")]), parentMethsOfSameName);

            if (matchValue$$48 != null) {
              const minfo$$9 = matchValue$$48;
              const mtext = (0, _NicePrint.stringOfMethInfo)(cenv$$56.amap, m$$57, cenv$$56.denv, minfo$$9);

              if ((0, _List.exists)((0, _Util.partialApply)(1, checkForDup$$2, [new _TastOps.Erasure(2, "EraseNone")]), parentMethsOfSameName)) {
                (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcNewMemberHidesAbstractMember$$Z721C83C5)(mtext), m$$57));
              } else {
                (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcNewMemberHidesAbstractMemberWithSuffix$$Z721C83C5)(mtext), m$$57));
              }
            }
          }

          if ((0, _infos.MethInfo$$get_IsDispatchSlot)(minfo$$8)) {
            const nm$$8 = (0, _infos.MethInfo$$get_LogicalName)(minfo$$8);
            let m$$58;
            const matchValue$$49 = (0, _infos.MethInfo$$get_ArbitraryValRef)(minfo$$8);

            if (matchValue$$49 != null) {
              const vref$$18 = matchValue$$49;
              m$$58 = (0, _tast.ValRef$$get_DefinitionRange)(vref$$18);
            } else {
              m$$58 = m$$52;
            }

            const parentMethsOfSameName$$1 = getHash(hashOfAllVirtualMethsInParent, nm$$8);

            const checkForDup$$3 = function checkForDup$$3(erasureFlag$$3, minfo2$$6) {
              return (0, _infos.MethInfosEquivByNameAndSig)(erasureFlag$$3, true, g$$15, cenv$$56.amap, m$$58, minfo$$8, minfo2$$6);
            };

            if ((0, _List.exists)((0, _Util.partialApply)(1, checkForDup$$3, [new _TastOps.Erasure(0, "EraseAll")]), parentMethsOfSameName$$1)) {
              if ((0, _List.exists)((0, _Util.partialApply)(1, checkForDup$$3, [new _TastOps.Erasure(2, "EraseNone")]), parentMethsOfSameName$$1)) {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkDuplicateMethodInheritedType$$Z721C83C5)(nm$$8), m$$58));
              } else {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkDuplicateMethodInheritedTypeWithSuffix$$Z721C83C5)(nm$$8), m$$58));
              }
            }
          }
        }, immediateMeths);
      }
    }
  }

  if ((0, _TastOps.TyconRefHasAttribute)(g$$15, m$$52, (0, _TcGlobals.TcGlobals$$get_attrib_IsByRefLikeAttribute)(g$$15), tcref$$16) ? !(0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$1) : false) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcByRefLikeNotStruct)(), (0, _tast.Entity$$get_Range)(tycon$$1)));
  }

  if ((0, _TastOps.TyconRefHasAttribute)(g$$15, m$$52, (0, _TcGlobals.TcGlobals$$get_attrib_IsReadOnlyAttribute)(g$$15), tcref$$16) ? !(0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$1) : false) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcIsReadOnlyNotStruct)(), (0, _tast.Entity$$get_Range)(tycon$$1)));
  }

  (0, _tast.Entity$$get_AllFieldsArray)(tycon$$1).forEach(function action$$25(rfield$$1) {
    CheckRecdField(false, cenv$$56, env$$77, tycon$$1, rfield$$1);
  });
  (0, _Seq.iterate)(function (vref$$19) {
    const matchValue$$50 = (0, _tast.Val$$get_ValReprInfo)(vref$$19);

    if (matchValue$$50 == null) {} else {
      const topValInfo$$5 = matchValue$$50;
      const patternInput$$5 = (0, _TastOps.GetTopValTypeInFSharpForm)(g$$15, topValInfo$$5, (0, _tast.Val$$get_Type)(vref$$19), m$$52);
      const env$$78 = BindTypars(g$$15, env$$77, patternInput$$5[0]);
      (0, _Seq.iterate)(function (argtys$$1) {
        (0, _Seq.iterate)(function (forLoopVar$$1) {
          CheckTypePermitAllByrefs(cenv$$56, env$$78, m$$52, forLoopVar$$1[0]);
        }, argtys$$1);
      }, patternInput$$5[1]);
      CheckTypePermitAllByrefs(cenv$$56, env$$78, m$$52, patternInput$$5[2]);
    }
  }, (0, _TastOps.abstractSlotValsOfTycons)((0, _Types.L)(tycon$$1, (0, _Types.L)())));
  (0, _List.iterate)(function action$$26(ty$$40) {
    CheckTypeNoByrefs(cenv$$56, env$$77, m$$52, ty$$40);
  }, (0, _tast.Entity$$get_ImmediateInterfaceTypesOfFSharpTycon)(tycon$$1));
  CheckTypeNoByrefs(cenv$$56, env$$77, m$$52, (0, _TastOps.superOfTycon)(g$$15, tycon$$1));

  if ((0, _tast.Entity$$get_IsUnionTycon)(tycon$$1)) {
    (0, _List.iterate)(function action$$28(uc$$3) {
      CheckAttribs(cenv$$56, env$$77, uc$$3.Attribs);
      (0, _List.iterate)(function action$$27(rfield$$2) {
        CheckRecdField(true, cenv$$56, env$$77, tycon$$1, rfield$$2);
      }, (0, _tast.UnionCase$$get_RecdFields)(uc$$3));
    }, (0, _tast.Entity$$get_UnionCasesAsList)(tycon$$1));
  }

  const access$$7 = AdjustAccess((0, _TastOps.IsHiddenTycon)(env$$77.sigToImplRemapInfo, tycon$$1), function () {
    return (0, _tast.Entity$$get_CompilationPath)(tycon$$1);
  }, (0, _tast.Entity$$get_Accessibility)(tycon$$1));

  const visitTye$$3 = function visitTye$$3(ty$$42) {
    CheckTypeForAccess(cenv$$56, env$$77, function () {
      return (0, _tast.Entity$$get_DisplayNameWithStaticParametersAndUnderscoreTypars)(tycon$$1);
    }, access$$7, (0, _tast.Entity$$get_Range)(tycon$$1), ty$$42);
  };

  (0, _List.iterate)(function action$$29($arg$$20) {
    visitTye$$3((0, _tast.typeOfVal)($arg$$20));
  }, (0, _TastOps.abstractSlotValsOfTycons)((0, _Types.L)(tycon$$1, (0, _Types.L)())));
  visitTye$$3((0, _TastOps.superOfTycon)(g$$15, tycon$$1));

  if ((0, _tast.Entity$$get_IsFSharpDelegateTycon)(tycon$$1)) {
    const matchValue$$51 = (0, _tast.Entity$$get_TypeReprInfo)(tycon$$1);

    if (matchValue$$51.tag === 0) {
      const r = matchValue$$51.fields[0];

      if (r.fsobjmodel_kind.tag === 3) {
        const ss = r.fsobjmodel_kind.fields[0];
        (0, _Seq.iterate)(visitTye$$3, (0, _Option.defaultArg)((0, _tast.SlotSig$$get_FormalReturnType)(ss), [], function ($x$$21) {
          return [$x$$21];
        }));
        (0, _illib.List$$$iterSquared)(function f$$16(_arg3$$3) {
          const ty$$43 = _arg3$$3.fields[1];
          visitTye$$3(ty$$43);
        }, (0, _tast.SlotSig$$get_FormalParams)(ss));
      }
    }
  }

  const interfaces$$2 = (0, _List.filter)(function predicate$$16(arg10$0040$$15) {
    return (0, _TastOps.isInterfaceTy)(g$$15, arg10$0040$$15);
  }, (0, _infos.AllSuperTypesOfType)(g$$15, cenv$$56.amap, (0, _tast.Entity$$get_Range)(tycon$$1), new _infos.AllowMultiIntfInstantiations(0, "Yes"), ty$$37));

  if ((0, _tast.Entity$$get_IsFSharpInterfaceTycon)(tycon$$1)) {
    (0, _List.iterate)(visitTye$$3, interfaces$$2);
  }

  if (!(0, _TastOps.isRecdOrStructTyconRefAssumedImmutable)(g$$15, tcref$$16) ? (0, _TastOps.isRecdOrStructTyconRefReadOnly)(g$$15, m$$52, tcref$$16) : false) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$readOnlyAttributeOnStructWithMutableField)(), m$$52));
  }

  if (cenv$$56.reportErrors) {
    if (!(0, _tast.Entity$$get_IsTypeAbbrev)(tycon$$1)) {
      const immediateInterfaces = (0, _infos.GetImmediateInterfacesOfType)(new _infos.SkipUnrefInterfaces(0, "Yes"), g$$15, cenv$$56.amap, m$$52, ty$$37);
      const interfaces$$3 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.collect)(function (ty$$44) {
          return (0, _infos.AllSuperTypesOfType)(g$$15, cenv$$56.amap, m$$52, new _infos.AllowMultiIntfInstantiations(0, "Yes"), ty$$44);
        }, immediateInterfaces);
      }));
      CheckMultipleInterfaceInstantiations(cenv$$56, interfaces$$3, m$$52);
    }

    if ((0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$1)) {
      (0, _Seq.iterate)(function (f$$17) {
        const zeroInitUnsafe = (0, _TastOps.TryFindFSharpBoolAttribute)(g$$15, (0, _TcGlobals.TcGlobals$$get_attrib_DefaultValueAttribute)(g$$15), (0, _tast.RecdField$$get_FieldAttribs)(f$$17));

        if ((0, _Util.equals)(zeroInitUnsafe, true)) {
          if (!(0, _TastOps.TypeHasDefaultValue)(g$$15, m$$52, ty$$37)) {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkValueWithDefaultValueMustHaveDefaultValue)(), m$$52));
          }
        }
      }, (0, _tast.Entity$$get_AllInstanceFieldsAsList)(tycon$$1));
    }

    const matchValue$$53 = (0, _tast.Entity$$get_TypeAbbrev)(tycon$$1);

    if (matchValue$$53 != null) {
      const ty$$45 = matchValue$$53;

      if (!(0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$15)) {
        CheckForByrefType(cenv$$56, env$$77, ty$$45, function () {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkNoByrefInTypeAbbrev)(), (0, _tast.Entity$$get_Range)(tycon$$1)));
        });
      }
    }
  }
}

function CheckEntityDefns(cenv$$57, env$$79, tycons) {
  (0, _List.iterate)(function action$$30(tycon$$2) {
    CheckEntityDefn(cenv$$57, env$$79, tycon$$2);
  }, tycons);
}

function CheckModuleExpr(cenv$$58, env$$80, x$$14) {
  const mty = x$$14.fields[0];
  const def = x$$14.fields[1];
  const patternInput$$6 = (0, _TastOps.ComputeRemappingFromImplementationToSignature)(cenv$$58.g, def, mty);
  const env$$81 = new env(env$$80.boundTyparNames, env$$80.boundTypars, env$$80.argVals, (0, _Types.L)([(0, _TastOps.mkRepackageRemapping)(patternInput$$6[0]), patternInput$$6[1]], env$$80.sigToImplRemapInfo), env$$80.ctorLimitedZone, env$$80.quote, env$$80.reflect, env$$80.external, env$$80.returnScope);
  CheckDefnInModule(cenv$$58, env$$81, def);
}

function CheckDefnsInModule(cenv$$59, env$$82, x$$15) {
  (0, _List.iterate)(function action$$31(x$$16) {
    CheckDefnInModule(cenv$$59, env$$82, x$$16);
  }, x$$15);
}

function CheckNothingAfterEntryPoint(cenv$$60, m$$59) {
  if (cenv$$60.entryPointGiven ? cenv$$60.reportErrors : false) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$chkEntryPointUsage)(), m$$59));
  }
}

function CheckDefnInModule(cenv$$61, env$$83, x$$17) {
  switch (x$$17.tag) {
    case 2:
      {
        const m$$61 = x$$17.fields[1];
        const bind$$4 = x$$17.fields[0];
        CheckNothingAfterEntryPoint(cenv$$61, m$$61);
        CheckModuleBinding(cenv$$61, env$$83, bind$$4);
        BindVal(cenv$$61, env$$83, (0, _tast.Binding$$get_Var)(bind$$4));
        break;
      }

    case 3:
      {
        const m$$62 = x$$17.fields[1];
        const e$$10 = x$$17.fields[0];
        CheckNothingAfterEntryPoint(cenv$$61, m$$62);
        CheckNoReraise(cenv$$61, null, e$$10);
        CheckExprNoByrefs(cenv$$61, env$$83, e$$10);
        break;
      }

    case 0:
      {
        const def$$1 = x$$17.fields[0];
        CheckModuleExpr(cenv$$61, env$$83, def$$1);
        break;
      }

    case 1:
      {
        const defs = x$$17.fields[0];
        CheckDefnsInModule(cenv$$61, env$$83, defs);
        break;
      }

    default:
      {
        const tycons$$1 = x$$17.fields[1];
        const mspecs = x$$17.fields[2];
        const m$$60 = x$$17.fields[3];
        const isRec = x$$17.fields[0];
        CheckNothingAfterEntryPoint(cenv$$61, m$$60);

        if (isRec) {
          BindVals(cenv$$61, env$$83, (0, _List.ofSeq)((0, _TastOps.allValsOfModDef)(x$$17)));
        }

        CheckEntityDefns(cenv$$61, env$$83, tycons$$1);
        (0, _List.iterate)(function (x$$18) {
          CheckModuleSpec(cenv$$61, env$$83, x$$18);
        }, mspecs);
      }
  }
}

function CheckModuleSpec(cenv$$62, env$$84, x$$19) {
  if (x$$19.tag === 1) {
    const rhs = x$$19.fields[1];
    const mspec = x$$19.fields[0];
    CheckEntityDefn(cenv$$62, env$$84, mspec);
    const env$$85 = new env(env$$84.boundTyparNames, env$$84.boundTypars, env$$84.argVals, env$$84.sigToImplRemapInfo, env$$84.ctorLimitedZone, env$$84.quote, env$$84.reflect ? true : (0, _TastOps.HasFSharpAttribute)(cenv$$62.g, (0, _TcGlobals.TcGlobals$$get_attrib_ReflectedDefinitionAttribute)(cenv$$62.g), (0, _tast.Entity$$get_Attribs)(mspec)), env$$84.external, env$$84.returnScope);
    CheckDefnInModule(cenv$$62, env$$85, rhs);
  } else {
    const bind$$5 = x$$19.fields[0];
    BindVals(cenv$$62, env$$84, (0, _TastOps.valsOfBinds)((0, _Types.L)(bind$$5, (0, _Types.L)())));
    CheckModuleBinding(cenv$$62, env$$84, bind$$5);
  }
}

function CheckTopImpl(g$$16, amap, reportErrors, infoReader, internalsVisibleToPaths$$3, viewCcu, denv, mexpr, extraAttribs, isLastCompiland$$1, isInternalTestSpanStackReferring) {
  const cenv$$63 = new cenv((0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp.HashIdentity$$$Structural)())), (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp.HashIdentity$$$Structural)())), (0, _Map.empty)({
    Compare: _Long.compare
  }), g$$16, amap, infoReader, internalsVisibleToPaths$$3, denv, viewCcu, reportErrors, isLastCompiland$$1, isInternalTestSpanStackReferring, false, false);
  (0, _tast.EntityRef$$get_TryDeref)((0, _TcGlobals.TcGlobals$$get_system_Void_tcref)(g$$16));
  (0, _tast.EntityRef$$get_TryDeref)((0, _TcGlobals.TcGlobals$$get_byref_tcr)(g$$16));

  const resolve = function resolve(_arg1$$8) {
    if (_arg1$$8 != null) {
      const t$$1 = _arg1$$8;
      (0, _tast.EntityRef$$get_TryDeref)(t$$1);
    }
  };

  resolve((0, _TcGlobals.TcGlobals$$get_system_TypedReference_tcref)(g$$16));
  resolve((0, _TcGlobals.TcGlobals$$get_system_ArgIterator_tcref)(g$$16));
  resolve((0, _TcGlobals.TcGlobals$$get_system_RuntimeArgumentHandle_tcref)(g$$16));
  const env$$86 = new env((0, _Types.L)(), (0, _TastOps.TyparMap$00601$$$get_Empty)(), (0, _TastOps.ValMap$00601$$$get_Empty)(), (0, _Types.L)(), false, false, false, false, 0);
  CheckModuleExpr(cenv$$63, env$$86, mexpr);
  CheckAttribs(cenv$$63, env$$86, extraAttribs);

  if (cenv$$63.usesQuotations ? (0, _Util.equals)((0, _QuotationTranslator.QuotationGenerationScope$$$ComputeQuotationFormat$$2AE8EA0C)(g$$16), new _QuotationTranslator.QuotationSerializationFormat(1, "FSharp_20_Plus")) : false) {
    (0, _tast.CcuThunk$$set_UsesFSharp20PlusQuotations$$Z1FBCCD16)(viewCcu, true);
  }

  return cenv$$63.entryPointGiven;
}