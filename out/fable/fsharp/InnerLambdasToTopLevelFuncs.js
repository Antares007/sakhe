"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internalError = internalError;
exports.Zmap$$$force = Zmap$$$force;
exports.fringeTR = fringeTR;
exports.emptyTR = emptyTR;
exports.destApp = destApp;
exports.isDelayedRepr = isDelayedRepr;
exports.mkLocalNameTypeArity = mkLocalNameTypeArity;
exports.GetValsBoundUnderMustInline = GetValsBoundUnderMustInline;
exports.IsRefusedTLR = IsRefusedTLR;
exports.IsMandatoryTopLevel = IsMandatoryTopLevel;
exports.IsMandatoryNonTopLevel = IsMandatoryNonTopLevel;
exports.Pass1_DetermineTLRAndArities$$$GetMaxNumArgsAtUses = Pass1_DetermineTLRAndArities$$$GetMaxNumArgsAtUses;
exports.Pass1_DetermineTLRAndArities$$$SelectTLRVals = Pass1_DetermineTLRAndArities$$$SelectTLRVals;
exports.Pass1_DetermineTLRAndArities$$$IsValueRecursionFree = Pass1_DetermineTLRAndArities$$$IsValueRecursionFree;
exports.Pass1_DetermineTLRAndArities$$$DumpArity = Pass1_DetermineTLRAndArities$$$DumpArity;
exports.Pass1_DetermineTLRAndArities$$$DetermineTLRAndArities = Pass1_DetermineTLRAndArities$$$DetermineTLRAndArities;
exports.BindingGroupSharingSameReqdItems$$$$002Ector$$2D84EA95 = BindingGroupSharingSameReqdItems$$$$002Ector$$2D84EA95;
exports.BindingGroupSharingSameReqdItems$$get_Vals = BindingGroupSharingSameReqdItems$$get_Vals;
exports.BindingGroupSharingSameReqdItems$$Contains$$7D0CFEA5 = BindingGroupSharingSameReqdItems$$Contains$$7D0CFEA5;
exports.BindingGroupSharingSameReqdItems$$get_IsEmpty = BindingGroupSharingSameReqdItems$$get_IsEmpty;
exports.BindingGroupSharingSameReqdItems$$get_Pairs = BindingGroupSharingSameReqdItems$$get_Pairs;
exports.ReqdItemsForDefn$$get_ReqdSubEnvs = ReqdItemsForDefn$$get_ReqdSubEnvs;
exports.ReqdItemsForDefn$$get_ReqdVals = ReqdItemsForDefn$$get_ReqdVals;
exports.ReqdItemsForDefn$$Extend$$Z633C68B6 = ReqdItemsForDefn$$Extend$$Z633C68B6;
exports.ReqdItemsForDefn$$$Initial = ReqdItemsForDefn$$$Initial;
exports.IsArityMet = IsArityMet;
exports.Pass2_DetermineReqdItems$$$PushFrame = Pass2_DetermineReqdItems$$$PushFrame;
exports.Pass2_DetermineReqdItems$$$SaveFrame = Pass2_DetermineReqdItems$$$SaveFrame;
exports.Pass2_DetermineReqdItems$$$LogRequiredFrom = Pass2_DetermineReqdItems$$$LogRequiredFrom;
exports.Pass2_DetermineReqdItems$$$LogShortCall = Pass2_DetermineReqdItems$$$LogShortCall;
exports.Pass2_DetermineReqdItems$$$FreeInBindings = Pass2_DetermineReqdItems$$$FreeInBindings;
exports.Pass2_DetermineReqdItems$$$ExprEnvIntercept = Pass2_DetermineReqdItems$$$ExprEnvIntercept;
exports.Pass2_DetermineReqdItems$$$CloseReqdTypars = Pass2_DetermineReqdItems$$$CloseReqdTypars;
exports.Pass2_DetermineReqdItems$$$DetermineReqdItems = Pass2_DetermineReqdItems$$$DetermineReqdItems;
exports.FlatEnvPacks = FlatEnvPacks;
exports.ChooseReqdItemPackings = ChooseReqdItemPackings;
exports.MakeSimpleArityInfo = MakeSimpleArityInfo;
exports.CreateNewValuesForTLR = CreateNewValuesForTLR;
exports.Pass4_RewriteAssembly$$$EnterInner = Pass4_RewriteAssembly$$$EnterInner;
exports.Pass4_RewriteAssembly$$$ExitInner = Pass4_RewriteAssembly$$$ExitInner;
exports.Pass4_RewriteAssembly$$$EnterMustInline = Pass4_RewriteAssembly$$$EnterMustInline;
exports.Pass4_RewriteAssembly$$$ExtractPreDecs = Pass4_RewriteAssembly$$$ExtractPreDecs;
exports.Pass4_RewriteAssembly$$$PopPreDecs = Pass4_RewriteAssembly$$$PopPreDecs;
exports.Pass4_RewriteAssembly$$$SetPreDecs = Pass4_RewriteAssembly$$$SetPreDecs;
exports.Pass4_RewriteAssembly$$$LiftTopBinds = Pass4_RewriteAssembly$$$LiftTopBinds;
exports.Pass4_RewriteAssembly$$$MakePreDec = Pass4_RewriteAssembly$$$MakePreDec;
exports.Pass4_RewriteAssembly$$$MakePreDecs = Pass4_RewriteAssembly$$$MakePreDecs;
exports.Pass4_RewriteAssembly$$$RecursivePreDecs = Pass4_RewriteAssembly$$$RecursivePreDecs;
exports.Pass4_RewriteAssembly$$$ConvertBind = Pass4_RewriteAssembly$$$ConvertBind;
exports.Pass4_RewriteAssembly$$$TransTLRBindings = Pass4_RewriteAssembly$$$TransTLRBindings;
exports.Pass4_RewriteAssembly$$$GetAEnvBindings = Pass4_RewriteAssembly$$$GetAEnvBindings;
exports.Pass4_RewriteAssembly$$$TransBindings = Pass4_RewriteAssembly$$$TransBindings;
exports.Pass4_RewriteAssembly$$$TransApp = Pass4_RewriteAssembly$$$TransApp;
exports.Pass4_RewriteAssembly$$$TransExpr = Pass4_RewriteAssembly$$$TransExpr;
exports.Pass4_RewriteAssembly$$$TransLinearExpr = Pass4_RewriteAssembly$$$TransLinearExpr;
exports.Pass4_RewriteAssembly$$$TransMethod = Pass4_RewriteAssembly$$$TransMethod;
exports.Pass4_RewriteAssembly$$$TransBindingRhs = Pass4_RewriteAssembly$$$TransBindingRhs;
exports.Pass4_RewriteAssembly$$$TransDecisionTree = Pass4_RewriteAssembly$$$TransDecisionTree;
exports.Pass4_RewriteAssembly$$$TransDecisionTreeTarget = Pass4_RewriteAssembly$$$TransDecisionTreeTarget;
exports.Pass4_RewriteAssembly$$$TransValBinding = Pass4_RewriteAssembly$$$TransValBinding;
exports.Pass4_RewriteAssembly$$$TransValBindings = Pass4_RewriteAssembly$$$TransValBindings;
exports.Pass4_RewriteAssembly$$$TransModuleExpr = Pass4_RewriteAssembly$$$TransModuleExpr;
exports.Pass4_RewriteAssembly$$$TransModuleDefs = Pass4_RewriteAssembly$$$TransModuleDefs;
exports.Pass4_RewriteAssembly$$$TransModuleDef = Pass4_RewriteAssembly$$$TransModuleDef;
exports.Pass4_RewriteAssembly$$$TransModuleBindings = Pass4_RewriteAssembly$$$TransModuleBindings;
exports.Pass4_RewriteAssembly$$$TransModuleBinding = Pass4_RewriteAssembly$$$TransModuleBinding;
exports.Pass4_RewriteAssembly$$$TransImplFile = Pass4_RewriteAssembly$$$TransImplFile;
exports.RecreateUniqueBounds = RecreateUniqueBounds;
exports.MakeTLRDecisions = MakeTLRDecisions;
exports.Pass4_RewriteAssembly$$$rewriteState0 = exports.Pass4_RewriteAssembly$002ERewriteState = exports.Pass4_RewriteAssembly$002EIsRecursive = exports.Pass4_RewriteAssembly$002ERewriteContext = exports.AbortTLR = exports.PackedReqdItems = exports.Pass2_DetermineReqdItems$$$state0 = exports.Pass2_DetermineReqdItems$002Estate = exports.ReqdItemsForDefn = exports.reqdItemOrder = exports.ReqdItem = exports.fclassOrder = exports.BindingGroupSharingSameReqdItems = exports.Tree$00601 = exports.verboseTLR = void 0;

var _String = require("../fable-core.2.0.3/String");

var _ildiag = require("../absil/ildiag");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

var _ErrorLogger = require("./ErrorLogger");

var _zmap = require("../absil/zmap");

var _Types = require("../fable-core.2.0.3/Types");

var _List = require("../fable-core.2.0.3/List");

var _TastOps = require("./TastOps");

var _tast = require("./tast");

var _ast = require("./ast");

var _Util = require("../fable-core.2.0.3/Util");

var _DetupleArgs = require("./DetupleArgs");

var _zset = require("../absil/zset");

var _layout = require("./layout");

var _lib = require("./lib");

var _TaggedCollections = require("../utils/TaggedCollections");

var _illib = require("../absil/illib");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Array = require("../fable-core.2.0.3/Array");

var _FSComp = require("../codegen/FSComp");

const verboseTLR = false;
exports.verboseTLR = verboseTLR;

function internalError(str) {
  (0, _ildiag.dprintf)((0, _String.printf)("Error: %s\n"))(str);
  throw (0, _FSharp.Operators$$$Failure)(str);
}

function Zmap$$$force(k, mp, str$$1, soK) {
  try {
    return (0, _zmap.ZmapModule$$$find)(k, mp);
  } catch (e) {
    (0, _ildiag.dprintf)((0, _String.printf)("Zmap.force: %s %s\n"))(str$$1)(soK(k));
    (0, _ErrorLogger.ErrorLoggerExtensions$$$PreserveStackTrace)(e);
    throw e;
  }
}

const Tree$00601 = (0, _Types.declare)(function Tree$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Tree$00601 = Tree$00601;

function fringeTR(tr) {
  const collect = function collect(tr$$1, acc) {
    if (tr$$1.tag === 1) {
      const x = tr$$1.fields[0];
      return (0, _Types.L)(x, acc);
    } else {
      const subts = tr$$1.fields[0];
      return (0, _List.foldBack)(collect, subts, acc);
    }
  };

  return collect(tr, (0, _Types.L)());
}

function emptyTR() {
  return new Tree$00601(0, "TreeNode", (0, _Types.L)());
}

function destApp(f, fty, tys, args, m) {
  const matchValue = (0, _TastOps.stripExpr)(f);

  if (matchValue.tag === 5) {
    if (matchValue.fields[3].tail == null) {
      return [matchValue.fields[0], matchValue.fields[1], (0, _List.append)(matchValue.fields[2], tys), args, m];
    } else {
      return [f, fty, tys, args, m];
    }
  } else {
    return [matchValue, fty, tys, args, m];
  }
}

function isDelayedRepr(f$$2, e$$1) {
  const patternInput = (0, _TastOps.stripTopLambda)(e$$1, (0, _tast.Val$$get_Type)(f$$2));
  return (0, _List.length)(patternInput[1]) > 0;
}

function mkLocalNameTypeArity(compgen, m$$1, name, ty, topValInfo) {
  return (0, _tast.NewVal)(name, m$$1, null, ty, new _tast.ValMutability(0, "Immutable"), compgen, topValInfo, _tast.taccessPublic, new _tast.ValRecursiveScopeInfo(1, "ValNotInRecScope"), null, new _tast.ValBaseOrThisInfo(2, "NormalVal"), (0, _Types.L)(), new _tast.ValInline(2, "Optional"), (0, _ast.XmlDoc$$$get_Empty)(), false, false, false, false, false, false, null, new _tast.ParentRef(1, "ParentNone"));
}

function GetValsBoundUnderMustInline(xinfo) {
  const accRejectFrom = function accRejectFrom(v, repr, rejectS) {
    if ((0, _Util.equals)((0, _tast.Val$$get_InlineInfo)(v), new _tast.ValInline(0, "PseudoVal"))) {
      return (0, _zset.ZsetModule$$$union)((0, _DetupleArgs.GlobalUsageAnalysis$$$GetValsBoundInExpr)(repr), rejectS);
    } else {
      return rejectS;
    }
  };

  const rejectS$$1 = (0, _zset.ZsetModule$$$empty)(_TastOps.valOrder);
  const rejectS$$2 = (0, _zmap.ZmapModule$$$fold)(accRejectFrom, xinfo.Defns, rejectS$$1);
  return rejectS$$2;
}

function IsRefusedTLR(g, f$$3) {
  const mutableVal = (0, _tast.Val$$get_IsMutable)(f$$3);
  const dllImportStubOrOtherNeverInline = (0, _Util.equals)((0, _tast.Val$$get_InlineInfo)(f$$3), new _tast.ValInline(3, "Never"));
  const byrefVal = (0, _TastOps.isByrefLikeTy)(g, (0, _tast.Val$$get_Range)(f$$3), (0, _tast.Val$$get_Type)(f$$3));
  const specialVal = (0, _tast.Val$$get_MemberInfo)(f$$3) != null;
  const alreadyChosen = (0, _tast.Val$$get_ValReprInfo)(f$$3) != null;
  const refuseTest = (((alreadyChosen ? true : mutableVal) ? true : byrefVal) ? true : specialVal) ? true : dllImportStubOrOtherNeverInline;
  return refuseTest;
}

function IsMandatoryTopLevel(f$$4) {
  const specialVal$$1 = (0, _tast.Val$$get_MemberInfo)(f$$4) != null;
  const isModulBinding = (0, _tast.Val$$get_IsMemberOrModuleBinding)(f$$4);

  if (specialVal$$1) {
    return true;
  } else {
    return isModulBinding;
  }
}

function IsMandatoryNonTopLevel(g$$1, f$$5) {
  const byrefVal$$1 = (0, _TastOps.isByrefLikeTy)(g$$1, (0, _tast.Val$$get_Range)(f$$5), (0, _tast.Val$$get_Type)(f$$5));
  return byrefVal$$1;
}

function Pass1_DetermineTLRAndArities$$$GetMaxNumArgsAtUses(xinfo$$1, f$$6) {
  const matchValue$$1 = (0, _zmap.ZmapModule$$$tryFind)(f$$6, xinfo$$1.Uses);

  if (matchValue$$1 != null) {
    const sites = matchValue$$1;
    return (0, _List.max)((0, _List.map)(function mapping(tupledArg) {
      return (0, _List.length)(tupledArg[2]);
    }, sites), {
      Compare: _Util.comparePrimitives
    }) | 0;
  } else {
    return 0;
  }
}

function Pass1_DetermineTLRAndArities$$$SelectTLRVals(g$$2, xinfo$$2, f$$7, e$$2) {
  if (IsRefusedTLR(g$$2, f$$7)) {
    return null;
  } else if ((0, _zset.ZsetModule$$$contains)(f$$7, xinfo$$2.DecisionTreeBindings)) {
    return null;
  } else {
    const atTopLevel = (0, _zset.ZsetModule$$$contains)(f$$7, xinfo$$2.TopLevelBindings);
    const patternInput$$1 = (0, _TastOps.stripTopLambda)(e$$2, (0, _tast.Val$$get_Type)(f$$7));
    const nFormals = (0, _List.length)(patternInput$$1[1]) | 0;
    const nMaxApplied = Pass1_DetermineTLRAndArities$$$GetMaxNumArgsAtUses(xinfo$$2, f$$7) | 0;
    const arity = (0, _Util.min)(_Util.comparePrimitives, nFormals, nMaxApplied) | 0;

    if ((atTopLevel ? true : arity !== 0) ? true : !(patternInput$$1[0].tail == null)) {
      return [f$$7, arity];
    } else {
      return null;
    }
  }
}

function Pass1_DetermineTLRAndArities$$$IsValueRecursionFree(xinfo$$3, f$$8) {
  const hasDelayedRepr = function hasDelayedRepr(f$$9) {
    return isDelayedRepr(f$$9, Zmap$$$force(f$$9, xinfo$$3.Defns, "IsValueRecursionFree - hasDelayedRepr", _tast.nameOfVal));
  };

  const patternInput$$2 = Zmap$$$force(f$$8, xinfo$$3.RecursiveBindings, "IsValueRecursionFree", _tast.nameOfVal);

  if (!patternInput$$2[0]) {
    return true;
  } else {
    return (0, _List.forAll)(hasDelayedRepr, patternInput$$2[1]);
  }
}

function Pass1_DetermineTLRAndArities$$$DumpArity(arityM) {
  const dump = function dump(f$$10, n) {
    (0, _ildiag.dprintf)((0, _String.printf)("tlr: arity %50s = %d\n"))((0, _layout.showL)((0, _TastOps.DebugPrint$$$valL)(f$$10)))(n);
  };

  (0, _zmap.ZmapModule$$$iter)(dump, arityM);
}

function Pass1_DetermineTLRAndArities$$$DetermineTLRAndArities(g$$3, expr) {
  const xinfo$$4 = (0, _DetupleArgs.GlobalUsageAnalysis$$$GetUsageInfoOfImplFile)(g$$3, expr);
  const fArities = (0, _zmap.ZmapModule$$$chooseL)(function (f$$11, e$$3) {
    return Pass1_DetermineTLRAndArities$$$SelectTLRVals(g$$3, xinfo$$4, f$$11, e$$3);
  }, xinfo$$4.Defns);
  const fArities$$1 = (0, _List.filter)(function ($arg$$5) {
    return Pass1_DetermineTLRAndArities$$$IsValueRecursionFree(xinfo$$4, $arg$$5[0]);
  }, fArities);
  const rejectS$$3 = GetValsBoundUnderMustInline(xinfo$$4);
  const fArities$$2 = (0, _List.filter)(function (tupledArg$$1) {
    return !(0, _zset.ZsetModule$$$contains)(tupledArg$$1[0], rejectS$$3);
  }, fArities$$1);
  const tlrS = (0, _lib.Zset$$$ofList)(_TastOps.valOrder, (0, _List.map)(function (tuple$$1) {
    return tuple$$1[0];
  }, fArities$$2));
  const topValS = xinfo$$4.TopLevelBindings;
  const topValS$$1 = (0, _zset.ZsetModule$$$filter)(function ($arg$$6) {
    return !IsMandatoryNonTopLevel(g$$3, $arg$$6);
  }, topValS);
  const arityM$$1 = (0, _zmap.ZmapModule$$$ofList)(_TastOps.valOrder, fArities$$2);
  return [tlrS, topValS$$1, arityM$$1];
}

const BindingGroupSharingSameReqdItems = (0, _Types.declare)(function BindingGroupSharingSameReqdItems(bindings) {
  const $this$$7 = this;
  $this$$7.vals = (0, _TastOps.valsOfBinds)(bindings);
  $this$$7.vset = (0, _zset.ZsetModule$$$addList)($this$$7.vals, (0, _zset.ZsetModule$$$empty)(_TastOps.valOrder));
});
exports.BindingGroupSharingSameReqdItems = BindingGroupSharingSameReqdItems;

function BindingGroupSharingSameReqdItems$$$$002Ector$$2D84EA95(bindings) {
  return this != null ? BindingGroupSharingSameReqdItems.call(this, bindings) : new BindingGroupSharingSameReqdItems(bindings);
}

function BindingGroupSharingSameReqdItems$$get_Vals(fclass) {
  return fclass.vals;
}

function BindingGroupSharingSameReqdItems$$Contains$$7D0CFEA5(fclass$$1, v$$4) {
  return (0, _TaggedCollections.Set$00602$$Contains$$2B595)(fclass$$1.vset, v$$4);
}

function BindingGroupSharingSameReqdItems$$get_IsEmpty(fclass$$2) {
  return fclass$$2.vals.tail == null;
}

function BindingGroupSharingSameReqdItems$$get_Pairs(fclass$$3) {
  return (0, _List.map)(function mapping$$1(f$$14) {
    return [f$$14, fclass$$3];
  }, fclass$$3.vals);
}

BindingGroupSharingSameReqdItems.prototype.toString = function () {
  const fclass$$4 = this;
  return "+" + (0, _String.join)("+", ...(0, _List.map)(_tast.nameOfVal, fclass$$4.vals));
};

const fclassOrder = (0, _illib.Order$$$orderOn)(function (b) {
  return BindingGroupSharingSameReqdItems$$get_Vals(b);
}, (0, _illib.List$$$order)(_TastOps.valOrder));
exports.fclassOrder = fclassOrder;
const ReqdItem = (0, _Types.declare)(function ReqdItem(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ReqdItem = ReqdItem;

ReqdItem.prototype.toString = function () {
  const i = this;

  if (i.tag === 1) {
    const f$$16 = i.fields[0];
    return (0, _tast.Val$$get_LogicalName)(f$$16);
  } else {
    const f$$15 = i.fields[0];
    return "&" + (0, _tast.Val$$get_LogicalName)(f$$15);
  }
};

const reqdItemOrder = (() => {
  const rep = function rep(_arg1$$1) {
    if (_arg1$$1.tag === 1) {
      const v$$7 = _arg1$$1.fields[0];
      return [false, v$$7];
    } else {
      const v$$6 = _arg1$$1.fields[0];
      return [true, v$$6];
    }
  };

  return (0, _illib.Order$$$orderOn)(rep, (0, _lib.Pair$$$order)(_lib.Bool$$$order, _TastOps.valOrder));
})();

exports.reqdItemOrder = reqdItemOrder;
const ReqdItemsForDefn = (0, _Types.declare)(function ReqdItemsForDefn(arg1, arg2, arg3) {
  this.reqdTypars = arg1;
  this.reqdItems = arg2;
  this.m = arg3;
}, _Types.Record);
exports.ReqdItemsForDefn = ReqdItemsForDefn;

function ReqdItemsForDefn$$get_ReqdSubEnvs(env) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (x$$1) {
      if (x$$1.tag === 1) {
        return (0, _Seq.empty)();
      } else {
        const f$$17 = x$$1.fields[0];
        return (0, _Seq.singleton)(f$$17);
      }
    }, env.reqdItems);
  }));
}

function ReqdItemsForDefn$$get_ReqdVals(env$$1) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (x$$2) {
      if (x$$2.tag === 1) {
        const v$$8 = x$$2.fields[0];
        return (0, _Seq.singleton)(v$$8);
      } else {
        return (0, _Seq.empty)();
      }
    }, env$$1.reqdItems);
  }));
}

function ReqdItemsForDefn$$Extend$$Z633C68B6(env$$2, typars, items) {
  return new ReqdItemsForDefn((0, _zset.ZsetModule$$$addList)(typars, env$$2.reqdTypars), (0, _zset.ZsetModule$$$addList)(items, env$$2.reqdItems), env$$2.m);
}

function ReqdItemsForDefn$$$Initial(typars$$1, m$$2) {
  return new ReqdItemsForDefn((0, _zset.ZsetModule$$$addList)(typars$$1, (0, _zset.ZsetModule$$$empty)(_TastOps.typarOrder)), (0, _zset.ZsetModule$$$empty)(reqdItemOrder), m$$2);
}

ReqdItemsForDefn.prototype.toString = function () {
  const env$$3 = this;
  return (0, _layout.showL)((0, _layout.commaListL)((0, _List.map)(_TastOps.DebugPrint$$$typarL, (0, _zset.ZsetModule$$$elements)(env$$3.reqdTypars)))) + "--" + (0, _String.join)(",", ...(0, _List.map)(function (value$$1) {
    return value$$1.toString();
  }, (0, _zset.ZsetModule$$$elements)(env$$3.reqdItems)));
};

function IsArityMet(vref, wf, tys$$1, args$$2) {
  if ((0, _List.length)(tys$$1) === (0, _List.length)((0, _tast.ValRef$$get_Typars)(vref))) {
    return wf <= (0, _List.length)(args$$2);
  } else {
    return false;
  }
}

const Pass2_DetermineReqdItems$002Estate = (0, _Types.declare)(function Pass2_DetermineReqdItems$002Estate(arg1, arg2, arg3, arg4, arg5) {
  this.stack = arg1;
  this.reqdItemsMap = arg2;
  this.fclassM = arg3;
  this.revDeclist = arg4;
  this.recShortCallS = arg5;
}, _Types.Record);
exports.Pass2_DetermineReqdItems$002Estate = Pass2_DetermineReqdItems$002Estate;
const Pass2_DetermineReqdItems$$$state0 = new Pass2_DetermineReqdItems$002Estate((0, _Types.L)(), (0, _zmap.ZmapModule$$$empty)(fclassOrder), (0, _zmap.ZmapModule$$$empty)(_TastOps.valOrder), (0, _Types.L)(), (0, _zset.ZsetModule$$$empty)(_TastOps.valOrder));
exports.Pass2_DetermineReqdItems$$$state0 = Pass2_DetermineReqdItems$$$state0;

function Pass2_DetermineReqdItems$$$PushFrame(fclass$$5, reqdTypars0, reqdVals0, m$$3, state) {
  var env$$4;

  if (BindingGroupSharingSameReqdItems$$get_IsEmpty(fclass$$5)) {
    return state;
  } else {
    return new Pass2_DetermineReqdItems$002Estate((env$$4 = ReqdItemsForDefn$$$Initial(reqdTypars0, m$$3), (0, _Types.L)([fclass$$5, reqdVals0, env$$4], state.stack)), state.reqdItemsMap, state.fclassM, (0, _Types.L)(fclass$$5, state.revDeclist), state.recShortCallS);
  }
}

function Pass2_DetermineReqdItems$$$SaveFrame(fclass$$6, state$$1) {
  if (verboseTLR) {
    (0, _ildiag.dprintf)((0, _String.printf)("SaveFrame: %A\n"))(fclass$$6);
  }

  if (BindingGroupSharingSameReqdItems$$get_IsEmpty(fclass$$6)) {
    return state$$1;
  } else {
    if (state$$1.stack.tail != null) {
      const stack = state$$1.stack.tail;
      const fclass$$7 = state$$1.stack.head[0];
      const env$$5 = state$$1.stack.head[2];
      const _reqdVals0 = state$$1.stack.head[1];
      return new Pass2_DetermineReqdItems$002Estate(stack, (0, _zmap.ZmapModule$$$add)(fclass$$7, env$$5, state$$1.reqdItemsMap), (0, _List.fold)(function (mp$$1, tupledArg$$2) {
        return (0, _zmap.ZmapModule$$$add)(tupledArg$$2[0], tupledArg$$2[1], mp$$1);
      }, state$$1.fclassM, BindingGroupSharingSameReqdItems$$get_Pairs(fclass$$7)), state$$1.revDeclist, state$$1.recShortCallS);
    } else {
      return internalError("trl: popFrame has empty stack");
    }
  }
}

function Pass2_DetermineReqdItems$$$LogRequiredFrom(gv, items$$1, state$$2) {
  const logIntoFrame = function logIntoFrame(tupledArg$$3) {
    const env$$7 = (0, _TaggedCollections.Set$00602$$Contains$$2B595)(tupledArg$$3[1], gv) ? ReqdItemsForDefn$$Extend$$Z633C68B6(tupledArg$$3[2], (0, _Types.L)(), items$$1) : tupledArg$$3[2];
    return [tupledArg$$3[0], tupledArg$$3[1], env$$7];
  };

  return new Pass2_DetermineReqdItems$002Estate((0, _List.map)(logIntoFrame, state$$2.stack), state$$2.reqdItemsMap, state$$2.fclassM, state$$2.revDeclist, state$$2.recShortCallS);
}

function Pass2_DetermineReqdItems$$$LogShortCall(gv$$1, state$$3) {
  if ((0, _List.exists)(function predicate(tupledArg$$4) {
    return BindingGroupSharingSameReqdItems$$Contains$$7D0CFEA5(tupledArg$$4[0], gv$$1);
  }, state$$3.stack)) {
    if (verboseTLR) {
      (0, _ildiag.dprintf)((0, _String.printf)("shortCall:     rec: %s\n"))((0, _tast.Val$$get_LogicalName)(gv$$1));
    }

    return new Pass2_DetermineReqdItems$002Estate(state$$3.stack, state$$3.reqdItemsMap, state$$3.fclassM, state$$3.revDeclist, (0, _zset.ZsetModule$$$add)(gv$$1, state$$3.recShortCallS));
  } else {
    if (verboseTLR) {
      (0, _ildiag.dprintf)((0, _String.printf)("shortCall: not-rec: %s\n"))((0, _tast.Val$$get_LogicalName)(gv$$1));
    }

    return state$$3;
  }
}

function Pass2_DetermineReqdItems$$$FreeInBindings(bs) {
  return (0, _List.fold)(function (z, x$$3) {
    return (0, _illib.foldOn)(function p(arg10$0040) {
      return (0, _TastOps.freeInBindingRhs)(_TastOps.CollectTyparsAndLocals, arg10$0040);
    }, _TastOps.unionFreeVars, z, x$$3);
  }, _TastOps.emptyFreeVars, bs);
}

function Pass2_DetermineReqdItems$$$ExprEnvIntercept(tlrS$$1, arityM$$2, exprF, z$$1, expr$$1) {
  const accInstance = function accInstance(z$$2, tupledArg$$5) {
    const f$$18 = (0, _tast.ValRef$$get_Deref)(tupledArg$$5[0]);
    const matchValue$$3 = (0, _zmap.ZmapModule$$$tryFind)(f$$18, arityM$$2);

    if (matchValue$$3 == null) {
      return Pass2_DetermineReqdItems$$$LogRequiredFrom(f$$18, (0, _Types.L)(new ReqdItem(1, "ReqdVal", f$$18), (0, _Types.L)()), z$$2);
    } else {
      const wf$$1 = matchValue$$3 | 0;

      if (IsArityMet(tupledArg$$5[0], wf$$1, tupledArg$$5[1], tupledArg$$5[2])) {
        return Pass2_DetermineReqdItems$$$LogRequiredFrom(f$$18, (0, _Types.L)(new ReqdItem(0, "ReqdSubEnv", f$$18), (0, _Types.L)()), z$$2);
      } else {
        const z$$3 = Pass2_DetermineReqdItems$$$LogRequiredFrom(f$$18, (0, _Types.L)(new ReqdItem(1, "ReqdVal", f$$18), (0, _Types.L)()), z$$2);
        const z$$4 = Pass2_DetermineReqdItems$$$LogShortCall(f$$18, z$$3);
        return z$$4;
      }
    }
  };

  const accBinds = function accBinds(m$$4, z$$5, binds) {
    const patternInput$$3 = (0, _List.partition)(function predicate$$1(b$$1) {
      return (0, _zset.ZsetModule$$$contains)((0, _tast.Binding$$get_Var)(b$$1), tlrS$$1);
    }, binds);
    const fclass$$10 = BindingGroupSharingSameReqdItems$$$$002Ector$$2D84EA95(patternInput$$3[0]);
    const frees = Pass2_DetermineReqdItems$$$FreeInBindings(patternInput$$3[0]);
    const reqdTypars0$$1 = (0, _zset.ZsetModule$$$elements)(frees.FreeTyvars.FreeTypars);
    const reqdVals0$$2 = (0, _zset.ZsetModule$$$elements)(frees.FreeLocals);
    const reqdVals0$$3 = (0, _List.filter)(function predicate$$2(gv$$2) {
      return !BindingGroupSharingSameReqdItems$$Contains$$7D0CFEA5(fclass$$10, gv$$2);
    }, reqdVals0$$2);
    const reqdVals0$$4 = (0, _lib.Zset$$$ofList)(_TastOps.valOrder, reqdVals0$$3);
    const z$$6 = Pass2_DetermineReqdItems$$$PushFrame(fclass$$10, reqdTypars0$$1, reqdVals0$$4, m$$4, z$$5);
    const z$$8 = (0, _List.fold)(function folder(z$$7, x$$4) {
      return (0, _illib.foldOn)(function p$$1(b$$2) {
        return (0, _tast.Binding$$get_Expr)(b$$2);
      }, exprF, z$$7, x$$4);
    }, z$$6, patternInput$$3[0]);
    const z$$9 = Pass2_DetermineReqdItems$$$SaveFrame(fclass$$10, z$$8);
    const z$$11 = (0, _List.fold)(function folder$$1(z$$10, x$$5) {
      return (0, _illib.foldOn)(function p$$2(b$$3) {
        return (0, _tast.Binding$$get_Expr)(b$$3);
      }, exprF, z$$10, x$$5);
    }, z$$9, patternInput$$3[1]);
    return z$$11;
  };

  var $target$$23, v$$10, _tys, args$$4, v$$11, args$$5, f$$19, fty$$1, m$$5, tys$$2, binds$$1, body, m$$6, bind, body$$1, m$$7;

  if (expr$$1.tag === 1) {
    $target$$23 = 0;
    v$$10 = expr$$1.fields[0];
  } else if (expr$$1.tag === 11) {
    if (expr$$1.fields[0].tag === 30) {
      $target$$23 = 1;
      _tys = expr$$1.fields[1];
      args$$4 = expr$$1.fields[2];
      v$$11 = expr$$1.fields[0].fields[1];
    } else {
      $target$$23 = 5;
    }
  } else if (expr$$1.tag === 5) {
    $target$$23 = 2;
    args$$5 = expr$$1.fields[3];
    f$$19 = expr$$1.fields[0];
    fty$$1 = expr$$1.fields[1];
    m$$5 = expr$$1.fields[4];
    tys$$2 = expr$$1.fields[2];
  } else if (expr$$1.tag === 6) {
    $target$$23 = 3;
    binds$$1 = expr$$1.fields[0];
    body = expr$$1.fields[1];
    m$$6 = expr$$1.fields[2];
  } else if (expr$$1.tag === 7) {
    $target$$23 = 4;
    bind = expr$$1.fields[0];
    body$$1 = expr$$1.fields[1];
    m$$7 = expr$$1.fields[2];
  } else {
    $target$$23 = 5;
  }

  switch ($target$$23) {
    case 0:
      {
        const z$$12 = accInstance(z$$1, [v$$10, (0, _Types.L)(), (0, _Types.L)()]);
        return z$$12;
      }

    case 1:
      {
        const z$$13 = accInstance(z$$1, [v$$11, (0, _Types.L)(), (0, _Types.L)()]);
        const z$$14 = (0, _List.fold)(exprF, z$$13, args$$4);
        return z$$14;
      }

    case 2:
      {
        const patternInput$$4 = destApp(f$$19, fty$$1, tys$$2, args$$5, m$$5);

        if (patternInput$$4[0].tag === 1) {
          const f$$21 = patternInput$$4[0].fields[0];
          const z$$15 = accInstance(z$$1, [f$$21, patternInput$$4[2], patternInput$$4[3]]);
          const z$$16 = (0, _List.fold)(exprF, z$$15, patternInput$$4[3]);
          return z$$16;
        } else {
          return null;
        }
      }

    case 3:
      {
        const z$$17 = accBinds(m$$6, z$$1, binds$$1);
        const z$$18 = exprF(z$$17, body);
        return z$$18;
      }

    case 4:
      {
        const z$$19 = accBinds(m$$7, z$$1, (0, _Types.L)(bind, (0, _Types.L)()));
        const z$$20 = exprF(z$$19, body$$1);
        return z$$20;
      }

    case 5:
      {
        return null;
      }
  }
}

function Pass2_DetermineReqdItems$$$CloseReqdTypars(fclassM, reqdItemsMap) {
  if (verboseTLR) {
    (0, _ildiag.dprintf)((0, _String.printf)("CloseReqdTypars------\n"));
  }

  const closeStep = function closeStep(reqdItemsMap$$1, changed, fc, env$$8) {
    const directCallReqdEnvs = ReqdItemsForDefn$$get_ReqdSubEnvs(env$$8);
    const directCallReqdTypars = (0, _List.map)(function mapping$$2(f$$22) {
      const fc$$1 = Zmap$$$force(f$$22, fclassM, "reqdTyparsFor", _tast.nameOfVal);
      const env$$9 = Zmap$$$force(fc$$1, reqdItemsMap$$1, "reqdTyparsFor", _Util.toString);
      return env$$9.reqdTypars;
    }, directCallReqdEnvs);
    const reqdTypars0$$2 = env$$8.reqdTypars;
    const reqdTypars = (0, _List.fold)(_zset.ZsetModule$$$union, reqdTypars0$$2, directCallReqdTypars);
    const changed$$1 = changed ? true : !(0, _zset.ZsetModule$$$equal)(reqdTypars0$$2, reqdTypars);
    const env$$10 = new ReqdItemsForDefn(reqdTypars, env$$8.reqdItems, env$$8.m);
    fc;
    return [changed$$1, env$$10];
  };

  const fixpoint = function fixpoint(reqdItemsMap$$2) {
    fixpoint: while (true) {
      const changed$$2 = false;
      const patternInput$$5 = (0, _zmap.ZmapModule$$$foldMap)((0, _Util.uncurry)(3, (0, _Util.partialApply)(3, closeStep, [reqdItemsMap$$2])), changed$$2, reqdItemsMap$$2);

      if (patternInput$$5[0]) {
        reqdItemsMap$$2 = patternInput$$5[1];
        continue fixpoint;
      } else {
        return patternInput$$5[1];
      }
    }
  };

  return fixpoint(reqdItemsMap);
}

function Pass2_DetermineReqdItems$$$DetermineReqdItems(tlrS$$2, arityM$$3, expr$$2) {
  if (verboseTLR) {
    (0, _ildiag.dprintf)((0, _String.printf)("DetermineReqdItems------\n"));
  }

  let folder$$2;
  const inputRecord = (0, _TastOps.ExprFolder0)();
  folder$$2 = new _TastOps.ExprFolder$00601(function (exprF$$1, z$$21, expr$$3) {
    return Pass2_DetermineReqdItems$$$ExprEnvIntercept(tlrS$$2, arityM$$3, exprF$$1, z$$21, expr$$3);
  }, inputRecord.valBindingSiteIntercept, inputRecord.nonRecBindingsIntercept, inputRecord.recBindingsIntercept, inputRecord.dtreeIntercept, inputRecord.targetIntercept, inputRecord.tmethodIntercept);
  const z$$22 = Pass2_DetermineReqdItems$$$state0;
  const z$$23 = (0, _TastOps.FoldImplFile)(folder$$2)(z$$22)(expr$$2);
  const reqdItemsMap$$4 = z$$23.reqdItemsMap;
  const fclassM$$1 = z$$23.fclassM;
  const declist = (0, _List.reverse)(z$$23.revDeclist);
  const recShortCallS$$1 = z$$23.recShortCallS;
  const reqdItemsMap$$5 = Pass2_DetermineReqdItems$$$CloseReqdTypars(fclassM$$1, reqdItemsMap$$4);
  const reqdItemsMap$$6 = (0, _zmap.ZmapModule$$$remove)(BindingGroupSharingSameReqdItems$$$$002Ector$$2D84EA95((0, _Types.L)()), reqdItemsMap$$5);
  const declist$$1 = (0, _List.filter)(function (arg10$0040$$3) {
    return (0, _zmap.ZmapModule$$$memberOf)(reqdItemsMap$$6, arg10$0040$$3);
  }, declist);
  return [reqdItemsMap$$6, fclassM$$1, declist$$1, recShortCallS$$1];
}

const PackedReqdItems = (0, _Types.declare)(function PackedReqdItems(arg1, arg2, arg3, arg4) {
  this.ep_etps = arg1;
  this.ep_aenvs = arg2;
  this.ep_pack = arg3;
  this.ep_unpack = arg4;
}, _Types.Record);
exports.PackedReqdItems = PackedReqdItems;
const AbortTLR = (0, _Types.declare)(function AbortTLR(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.AbortTLR = AbortTLR;

function FlatEnvPacks(g$$4, fclassM$$2, topValS$$2, declist$$2, reqdItemsMap$$7) {
  const fclassOf = function fclassOf(f$$23) {
    return Zmap$$$force(f$$23, fclassM$$2, "fclassM", _tast.nameOfVal);
  };

  const packEnv = function packEnv(carrierMaps, fc$$2) {
    if (verboseTLR) {
      (0, _ildiag.dprintf)((0, _String.printf)("\ntlr: packEnv fc=%A\n"))(fc$$2);
    }

    const env$$11 = Zmap$$$force(fc$$2, reqdItemsMap$$7, "packEnv", _Util.toString);

    const carrierMapFor = function carrierMapFor(f$$24) {
      return Zmap$$$force(fclassOf(f$$24), carrierMaps, "carrierMapFor", _Util.toString);
    };

    const valsSubEnvFor = function valsSubEnvFor(f$$25) {
      return (0, _zmap.ZmapModule$$$keys)(carrierMapFor(f$$25));
    };

    const vals = (0, _List.append)(ReqdItemsForDefn$$get_ReqdVals(env$$11), (0, _List.collect)(valsSubEnvFor, ReqdItemsForDefn$$get_ReqdSubEnvs(env$$11)));
    const vals$$1 = (0, _lib.List$$$noRepeats)(_TastOps.valOrder, vals);
    const vals$$2 = (0, _List.filter)(function predicate$$3($arg$$8) {
      return !IsMandatoryTopLevel($arg$$8);
    }, vals$$1);
    const vals$$3 = (0, _List.filter)(function predicate$$4(v$$14) {
      return !(0, _TastOps.isByrefLikeTy)(g$$4, (0, _tast.Val$$get_Range)(v$$14), (0, _tast.Val$$get_Type)(v$$14));
    }, vals$$2);
    const vals$$4 = (0, _List.filter)(function predicate$$5($arg$$9) {
      return !(0, _zset.ZsetModule$$$memberOf)(topValS$$2, $arg$$9);
    }, vals$$3);
    const matchValue$$4 = (0, _List.tryFind)(function predicate$$6(arg10$0040$$5) {
      return (0, _TastOps.IsGenericValWithGenericContraints)(g$$4, arg10$0040$$5);
    }, vals$$4);

    if (matchValue$$4 != null) {
      const v$$15 = matchValue$$4;
      throw new AbortTLR((0, _tast.Val$$get_Range)(v$$15));
    }

    const cmapPairs = (0, _List.map)(function mapping$$3(v$$16) {
      return [v$$16, (0, _TastOps.mkCompGenLocal)(env$$11.m, (0, _tast.Val$$get_LogicalName)(v$$16), (0, _tast.Val$$get_Type)(v$$16))[0]];
    }, vals$$4);
    const cmap = (0, _zmap.ZmapModule$$$ofList)(_TastOps.valOrder, cmapPairs);

    const aenvFor = function aenvFor(v$$17) {
      return Zmap$$$force(v$$17, cmap, "aenvFor", _tast.nameOfVal);
    };

    const aenvExprFor = function aenvExprFor(v$$19) {
      return (0, _TastOps.exprForVal)(env$$11.m, aenvFor(v$$19));
    };

    const reqdTypars$$1 = env$$11.reqdTypars;
    const aenvs = (0, _zmap.ZmapModule$$$values)(cmap);
    const pack = (0, _List.map)(function mapping$$4(tupledArg$$6) {
      return (0, _TastOps.mkInvisibleBind)(tupledArg$$6[1], (0, _TastOps.exprForVal)(env$$11.m, tupledArg$$6[0]));
    }, cmapPairs);
    let unpack;

    const unpackCarrier = function unpackCarrier(tupledArg$$7) {
      return (0, _TastOps.mkInvisibleBind)((0, _TastOps.setValHasNoArity)(tupledArg$$7[0]), (0, _TastOps.exprForVal)(env$$11.m, tupledArg$$7[1]));
    };

    const unpackSubenv = function unpackSubenv(f$$27) {
      const subCMap = carrierMapFor(f$$27);
      const vaenvs = (0, _zmap.ZmapModule$$$toList)(subCMap);
      return (0, _List.map)(function mapping$$5(tupledArg$$8) {
        return (0, _TastOps.mkBind)(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), tupledArg$$8[1], aenvExprFor(tupledArg$$8[0]));
      }, vaenvs);
    };

    unpack = (0, _List.append)((0, _List.map)(unpackCarrier, (0, _zmap.ZmapModule$$$toList)(cmap)), (0, _List.collect)(unpackSubenv, ReqdItemsForDefn$$get_ReqdSubEnvs(env$$11)));
    const carrierMaps$$1 = (0, _zmap.ZmapModule$$$add)(fc$$2, cmap, carrierMaps);

    if (verboseTLR) {
      (0, _ildiag.dprintf)((0, _String.printf)("tlr: packEnv envVals =%s\n"))((0, _layout.showL)((0, _layout.listL)(_TastOps.DebugPrint$$$valL, ReqdItemsForDefn$$get_ReqdVals(env$$11))));
      (0, _ildiag.dprintf)((0, _String.printf)("tlr: packEnv envSubs =%s\n"))((0, _layout.showL)((0, _layout.listL)(_TastOps.DebugPrint$$$valL, ReqdItemsForDefn$$get_ReqdSubEnvs(env$$11))));
      (0, _ildiag.dprintf)((0, _String.printf)("tlr: packEnv vals    =%s\n"))((0, _layout.showL)((0, _layout.listL)(_TastOps.DebugPrint$$$valL, vals$$4)));
      (0, _ildiag.dprintf)((0, _String.printf)("tlr: packEnv aenvs   =%s\n"))((0, _layout.showL)((0, _layout.listL)(_TastOps.DebugPrint$$$valL, aenvs)));
      (0, _ildiag.dprintf)((0, _String.printf)("tlr: packEnv pack    =%s\n"))((0, _layout.showL)((0, _layout.listL)(_TastOps.DebugPrint$$$bindingL, pack)));
      (0, _ildiag.dprintf)((0, _String.printf)("tlr: packEnv unpack  =%s\n"))((0, _layout.showL)((0, _layout.listL)(_TastOps.DebugPrint$$$bindingL, unpack)));
    }

    return [[fc$$2, new PackedReqdItems((0, _zset.ZsetModule$$$elements)(reqdTypars$$1), aenvs, pack, unpack)], carrierMaps$$1];
  };

  const carriedMaps = (0, _zmap.ZmapModule$$$empty)(fclassOrder);
  const patternInput$$6 = (0, _List.mapFold)(function (arg00$$1, arg10$$14) {
    return packEnv(arg00$$1, arg10$$14);
  }, carriedMaps, declist$$2);
  const envPacks$$1 = (0, _zmap.ZmapModule$$$ofList)(fclassOrder, patternInput$$6[0]);
  return envPacks$$1;
}

function ChooseReqdItemPackings(g$$5, fclassM$$3, topValS$$3, declist$$3, reqdItemsMap$$8) {
  if (verboseTLR) {
    (0, _ildiag.dprintf)((0, _String.printf)("ChooseReqdItemPackings------\n"));
  }

  const envPackM = FlatEnvPacks(g$$5, fclassM$$3, topValS$$3, declist$$3, reqdItemsMap$$8);
  return envPackM;
}

function MakeSimpleArityInfo(tps$$2, n$$1) {
  return new _tast.ValReprInfo(0, "ValReprInfo", (0, _tast.ValReprInfoModule$$$InferTyparInfo)(tps$$2), (0, _List.replicate)(n$$1, _tast.ValReprInfoModule$$$unnamedTopArg), _tast.ValReprInfoModule$$$unnamedRetVal);
}

function CreateNewValuesForTLR(g$$6, tlrS$$3, arityM$$4, fclassM$$4, envPackM$$1) {
  if (verboseTLR) {
    (0, _ildiag.dprintf)((0, _String.printf)("CreateNewValuesForTLR------\n"));
  }

  const createFHat = function createFHat(f$$28) {
    const wf$$2 = Zmap$$$force(f$$28, arityM$$4, "createFHat - wf", function (v$$22) {
      return (0, _layout.showL)((0, _TastOps.DebugPrint$$$valL)(v$$22));
    }) | 0;
    const fc$$3 = Zmap$$$force(f$$28, fclassM$$4, "createFHat - fc", _tast.nameOfVal);
    const envp = Zmap$$$force(fc$$3, envPackM$$1, "CreateNewValuesForTLR - envp", _Util.toString);
    const name$$1 = (0, _tast.Val$$get_LogicalName)(f$$28);
    const m$$8 = (0, _tast.Val$$get_Range)(f$$28);
    const patternInput$$7 = (0, _tast.Val$$get_TypeScheme)(f$$28);
    const patternInput$$8 = (0, _TastOps.stripFunTy)(g$$6, patternInput$$7[1]);
    const newTps = (0, _List.append)(envp.ep_etps, patternInput$$7[0]);
    let fHatTy;
    const newArgtys = (0, _List.append)((0, _List.map)(_tast.typeOfVal, envp.ep_aenvs), patternInput$$8[0]);
    fHatTy = (0, _TastOps.mkLambdaTy)(newTps, newArgtys, patternInput$$8[1]);
    const fHatArity = MakeSimpleArityInfo(newTps, (0, _List.length)(envp.ep_aenvs) + wf$$2);
    const fHatName = (0, _ast.NiceNameGenerator$$FreshCompilerGeneratedName$$7EA1AB7)(_tast.globalNng, name$$1, m$$8);
    const fHat = mkLocalNameTypeArity((0, _tast.Val$$get_IsCompilerGenerated)(f$$28), m$$8, fHatName, fHatTy, fHatArity);
    return fHat;
  };

  const fs = (0, _zset.ZsetModule$$$elements)(tlrS$$3);
  const ffHats = (0, _List.map)(function (f$$29) {
    return [f$$29, createFHat(f$$29)];
  }, fs);
  const fHatM = (0, _zmap.ZmapModule$$$ofList)(_TastOps.valOrder, ffHats);
  return fHatM;
}

const Pass4_RewriteAssembly$002ERewriteContext = (0, _Types.declare)(function Pass4_RewriteAssembly$002ERewriteContext(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.ccu = arg1;
  this.g = arg2;
  this.tlrS = arg3;
  this.topValS = arg4;
  this.arityM = arg5;
  this.fclassM = arg6;
  this.recShortCallS = arg7;
  this.envPackM = arg8;
  this.fHatM = arg9;
}, _Types.Record);
exports.Pass4_RewriteAssembly$002ERewriteContext = Pass4_RewriteAssembly$002ERewriteContext;
const Pass4_RewriteAssembly$002EIsRecursive = (0, _Types.declare)(function Pass4_RewriteAssembly$002EIsRecursive(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Pass4_RewriteAssembly$002EIsRecursive = Pass4_RewriteAssembly$002EIsRecursive;
const Pass4_RewriteAssembly$002ERewriteState = (0, _Types.declare)(function Pass4_RewriteAssembly$002ERewriteState(arg1, arg2, arg3) {
  this.rws_mustinline = arg1;
  this.rws_innerLevel = arg2 | 0;
  this.rws_preDecs = arg3;
}, _Types.Record);
exports.Pass4_RewriteAssembly$002ERewriteState = Pass4_RewriteAssembly$002ERewriteState;
const Pass4_RewriteAssembly$$$rewriteState0 = new Pass4_RewriteAssembly$002ERewriteState(false, 0, emptyTR());
exports.Pass4_RewriteAssembly$$$rewriteState0 = Pass4_RewriteAssembly$$$rewriteState0;

function Pass4_RewriteAssembly$$$EnterInner(z$$24) {
  return new Pass4_RewriteAssembly$002ERewriteState(z$$24.rws_mustinline, z$$24.rws_innerLevel + 1, z$$24.rws_preDecs);
}

function Pass4_RewriteAssembly$$$ExitInner(z$$25) {
  return new Pass4_RewriteAssembly$002ERewriteState(z$$25.rws_mustinline, z$$25.rws_innerLevel - 1, z$$25.rws_preDecs);
}

function Pass4_RewriteAssembly$$$EnterMustInline(b$$4, z$$26, f$$30) {
  const orig = z$$26.rws_mustinline;
  const patternInput$$9 = f$$30(b$$4 ? new Pass4_RewriteAssembly$002ERewriteState(true, z$$26.rws_innerLevel, z$$26.rws_preDecs) : z$$26);
  return [new Pass4_RewriteAssembly$002ERewriteState(orig, patternInput$$9[1].rws_innerLevel, patternInput$$9[1].rws_preDecs), patternInput$$9[0]];
}

function Pass4_RewriteAssembly$$$ExtractPreDecs(z$$27) {
  if (z$$27.rws_innerLevel === 0) {
    const preDecs = fringeTR(z$$27.rws_preDecs);
    return [preDecs, new Pass4_RewriteAssembly$002ERewriteState(z$$27.rws_mustinline, z$$27.rws_innerLevel, emptyTR())];
  } else {
    return [(0, _Types.L)(), z$$27];
  }
}

function Pass4_RewriteAssembly$$$PopPreDecs(z$$28) {
  return [new Pass4_RewriteAssembly$002ERewriteState(z$$28.rws_mustinline, z$$28.rws_innerLevel, emptyTR()), z$$28.rws_preDecs];
}

function Pass4_RewriteAssembly$$$SetPreDecs(z$$29, pdt) {
  return new Pass4_RewriteAssembly$002ERewriteState(z$$29.rws_mustinline, z$$29.rws_innerLevel, pdt);
}

function Pass4_RewriteAssembly$$$LiftTopBinds(_isRec, _penv, z$$30, binds$$2) {
  return [z$$30, binds$$2];
}

function Pass4_RewriteAssembly$$$MakePreDec(m$$9, isRec, binds$$3, expr$$4) {
  if ((0, _Util.equals)(isRec, new Pass4_RewriteAssembly$002EIsRecursive(0, "IsRec"))) {
    const patternInput$$10 = (0, _List.partition)(function predicate$$7(bind$$1) {
      return (0, _tast.Val$$get_IsCompiledAsTopLevel)((0, _tast.Binding$$get_Var)(bind$$1));
    }, binds$$3);
    return (0, _TastOps.mkLetRecBinds)(m$$9, patternInput$$10[0], (0, _TastOps.mkLetRecBinds)(m$$9, patternInput$$10[1], expr$$4));
  } else {
    return (0, _TastOps.mkLetsFromBindings)(m$$9, binds$$3, expr$$4);
  }
}

function Pass4_RewriteAssembly$$$MakePreDecs(m$$10, preDecs$$1, expr$$5) {
  return (0, _List.foldBack)(function (tupledArg$$9, expr$$6) {
    return Pass4_RewriteAssembly$$$MakePreDec(m$$10, tupledArg$$9[0], tupledArg$$9[1], expr$$6);
  }, preDecs$$1, expr$$5);
}

function Pass4_RewriteAssembly$$$RecursivePreDecs(pdsA, pdsB) {
  const pds = fringeTR(new Tree$00601(0, "TreeNode", (0, _Types.L)(pdsA, (0, _Types.L)(pdsB, (0, _Types.L)()))));
  const decs = (0, _List.collect)(function mapping$$6(tuple$$3) {
    return tuple$$3[1];
  }, pds);
  return new Tree$00601(1, "LeafNode", [new Pass4_RewriteAssembly$002EIsRecursive(0, "IsRec"), decs]);
}

function Pass4_RewriteAssembly$$$ConvertBind(g$$7, _arg1$$2) {
  const bind$$2 = _arg1$$2;
  const v$$25 = bind$$2.fields[0];
  const repr$$1 = bind$$2.fields[1];

  if ((0, _tast.Val$$get_ValReprInfo)(v$$25) != null) {} else {
    (0, _tast.Val$$SetValReprInfo$$Z35BE7615)(v$$25, (0, _TastOps.InferArityOfExprBinding)(g$$7, new _TastOps.AllowTypeDirectedDetupling(0, "Yes"), v$$25, repr$$1));
  }

  return bind$$2;
}

function Pass4_RewriteAssembly$$$TransTLRBindings(penv, binds$$5) {
  if (binds$$5.tail == null) {
    return [(0, _Types.L)(), (0, _Types.L)()];
  } else {
    const fc$$4 = BindingGroupSharingSameReqdItems$$$$002Ector$$2D84EA95(binds$$5);
    const envp$$1 = Zmap$$$force(fc$$4, penv.envPackM, "TransTLRBindings", _Util.toString);

    const fRebinding = function fRebinding(_arg1$$3) {
      const letSeqPtOpt = _arg1$$3.fields[2];
      const fOrig = _arg1$$3.fields[0];
      const b$$5 = _arg1$$3.fields[1];
      const m$$11 = (0, _tast.Val$$get_Range)(fOrig);
      const patternInput$$11 = (0, _TastOps.stripTopLambda)(b$$5, (0, _tast.Val$$get_Type)(fOrig));
      const aenvExprs = (0, _List.map)(function mapping$$7(arg10$0040$$6) {
        return (0, _TastOps.exprForVal)(m$$11, arg10$0040$$6);
      }, envp$$1.ep_aenvs);
      const vsExprs = (0, _List.map)(function mapping$$8(arg20$0040) {
        return (0, _TastOps.mkRefTupledVars)(penv.g, m$$11, arg20$0040);
      }, patternInput$$11[1]);
      const fHat$$1 = Zmap$$$force(fOrig, penv.fHatM, "fRebinding", _tast.nameOfVal);
      const fOrig$$1 = (0, _TastOps.setValHasNoArity)(fOrig);
      const fBind = (0, _TastOps.mkMultiLambdaBind)(fOrig$$1, letSeqPtOpt, m$$11, patternInput$$11[0], patternInput$$11[1], (0, _TastOps.mkApps)(penv.g, [(0, _TastOps.exprForVal)(m$$11, fHat$$1), (0, _tast.Val$$get_Type)(fHat$$1)], (0, _Types.L)((0, _List.map)(_tast.mkTyparTy, (0, _List.append)(envp$$1.ep_etps, patternInput$$11[0])), (0, _Types.L)()), (0, _List.append)(aenvExprs, vsExprs), m$$11), patternInput$$11[3]);
      return fBind;
    };

    const fHatNewBinding = function fHatNewBinding(shortRecBinds, _arg2) {
      const letSeqPtOpt$$1 = _arg2.fields[2];
      const f$$31 = _arg2.fields[0];
      const b$$6 = _arg2.fields[1];
      const wf$$3 = Zmap$$$force(f$$31, penv.arityM, "fHatNewBinding - arityM", _tast.nameOfVal) | 0;
      const fHat$$2 = Zmap$$$force(f$$31, penv.fHatM, "fHatNewBinding - fHatM", _tast.nameOfVal);
      const patternInput$$12 = (0, _TastOps.stripTopLambda)(b$$6, (0, _tast.Val$$get_Type)(f$$31));
      const patternInput$$13 = (0, _List.splitAt)(wf$$3, patternInput$$12[1]);
      const patternInput$$14 = (0, _TastOps.mkMultiLambdasCore)((0, _TastOps.Expr$002Eget_Range)(patternInput$$12[2]), patternInput$$13[1], patternInput$$12[2], patternInput$$12[3]);
      const m$$12 = (0, _tast.Val$$get_Range)(fHat$$2);
      const fHat_tps = (0, _List.append)(envp$$1.ep_etps, patternInput$$12[0]);
      const fHat_args = (0, _List.append)((0, _List.map)(function (value$$9) {
        return (0, _Types.L)(value$$9, (0, _Types.L)());
      }, envp$$1.ep_aenvs), patternInput$$13[0]);
      const fHat_body = (0, _TastOps.mkLetsFromBindings)(m$$12, envp$$1.ep_unpack, patternInput$$14[0]);
      const fHat_body$$1 = (0, _TastOps.mkLetsFromBindings)(m$$12, shortRecBinds, fHat_body);
      const fHatBind = (0, _TastOps.mkMultiLambdaBind)(fHat$$2, letSeqPtOpt$$1, m$$12, fHat_tps, fHat_args, fHat_body$$1, patternInput$$14[1]);
      return fHatBind;
    };

    const rebinds = (0, _List.map)(fRebinding, binds$$5);
    const shortRecBinds$$1 = (0, _List.filter)(function predicate$$8(b$$9) {
      return (0, _TaggedCollections.Set$00602$$Contains$$2B595)(penv.recShortCallS, (0, _tast.Binding$$get_Var)(b$$9));
    }, rebinds);
    const newBinds = (0, _List.map)((0, _Util.partialApply)(1, fHatNewBinding, [shortRecBinds$$1]), binds$$5);
    return [newBinds, rebinds];
  }
}

function Pass4_RewriteAssembly$$$GetAEnvBindings(penv$$1, fc$$5) {
  const matchValue$$6 = (0, _zmap.ZmapModule$$$tryFind)(fc$$5, penv$$1.envPackM);

  if (matchValue$$6 != null) {
    const envp$$2 = matchValue$$6;
    return envp$$2.ep_pack;
  } else {
    return (0, _Types.L)();
  }
}

function Pass4_RewriteAssembly$$$TransBindings(xisRec, penv$$2, binds$$6) {
  const patternInput$$15 = (0, _List.partition)(function predicate$$9(b$$10) {
    return (0, _zset.ZsetModule$$$contains)((0, _tast.Binding$$get_Var)(b$$10), penv$$2.tlrS);
  }, binds$$6);
  const fclass$$11 = BindingGroupSharingSameReqdItems$$$$002Ector$$2D84EA95(patternInput$$15[0]);
  const patternInput$$16 = Pass4_RewriteAssembly$$$TransTLRBindings(penv$$2, patternInput$$15[0]);
  const aenvBinds = Pass4_RewriteAssembly$$$GetAEnvBindings(penv$$2, fclass$$11);

  const forceTopBindToHaveArity = function forceTopBindToHaveArity(bind$$3) {
    if ((0, _TaggedCollections.Set$00602$$Contains$$2B595)(penv$$2.topValS, (0, _tast.Binding$$get_Var)(bind$$3))) {
      return Pass4_RewriteAssembly$$$ConvertBind(penv$$2.g, bind$$3);
    } else {
      return bind$$3;
    }
  };

  const nonTlrBs$$2 = (0, _List.map)(forceTopBindToHaveArity, patternInput$$15[1]);
  const tlrRebinds$$1 = (0, _List.map)(forceTopBindToHaveArity, patternInput$$16[1]);
  const patternInput$$17 = xisRec.tag === 1 ? [(0, _List.append)(aenvBinds, patternInput$$16[0]), (0, _List.append)(tlrRebinds$$1, nonTlrBs$$2)] : [(0, _List.append)(patternInput$$16[0], (0, _List.append)(tlrRebinds$$1, (0, _List.append)(nonTlrBs$$2, aenvBinds))), (0, _Types.L)()];
  return [patternInput$$17[0], patternInput$$17[1]];
}

function Pass4_RewriteAssembly$$$TransApp(penv$$3, fx, fty$$2, tys$$4, args$$7, m$$13) {
  var m$$14, fvref$$1, wf$$4;
  var $target$$27, fvref$$2, m$$15;

  if (fx.tag === 1) {
    if (m$$14 = fx.fields[2], (fvref$$1 = fx.fields[0], (0, _zset.ZsetModule$$$contains)((0, _tast.ValRef$$get_Deref)(fvref$$1), penv$$3.tlrS) ? (wf$$4 = Zmap$$$force((0, _tast.ValRef$$get_Deref)(fvref$$1), penv$$3.arityM, "TransApp - wf", _tast.nameOfVal) | 0, IsArityMet(fvref$$1, wf$$4, tys$$4, args$$7)) : false)) {
      $target$$27 = 0;
      fvref$$2 = fx.fields[0];
      m$$15 = fx.fields[2];
    } else {
      $target$$27 = 1;
    }
  } else {
    $target$$27 = 1;
  }

  switch ($target$$27) {
    case 0:
      {
        const f$$32 = (0, _tast.ValRef$$get_Deref)(fvref$$2);
        const fc$$6 = Zmap$$$force(f$$32, penv$$3.fclassM, "TransApp - fc", _tast.nameOfVal);
        const envp$$3 = Zmap$$$force(fc$$6, penv$$3.envPackM, "TransApp - envp", _Util.toString);
        const fHat$$3 = Zmap$$$force(f$$32, penv$$3.fHatM, "TransApp - fHat", _tast.nameOfVal);
        const tys$$5 = (0, _List.append)((0, _List.map)(_tast.mkTyparTy, envp$$3.ep_etps), tys$$4);
        const aenvExprs$$1 = (0, _List.map)(function (arg10$0040$$7) {
          return (0, _TastOps.exprForVal)(m$$15, arg10$0040$$7);
        }, envp$$3.ep_aenvs);
        const args$$8 = (0, _List.append)(aenvExprs$$1, args$$7);
        return (0, _TastOps.mkApps)(penv$$3.g, [(0, _TastOps.exprForVal)(m$$15, fHat$$3), (0, _tast.Val$$get_Type)(fHat$$3)], (0, _Types.L)(tys$$5, (0, _Types.L)()), args$$8, m$$15);
      }

    case 1:
      {
        if (tys$$4.tail == null ? args$$7.tail == null : false) {
          return fx;
        } else {
          return new _tast.Expr(5, "App", fx, fty$$2, tys$$4, args$$7, m$$13);
        }
      }
  }
}

function Pass4_RewriteAssembly$$$TransExpr(penv$$4, z$$31, expr$$7) {
  Pass4_RewriteAssembly$$$TransExpr: while (true) {
    var $target$$28, args$$9, f$$33, fty$$3, m$$16, tys$$6, m$$18, v$$32, r, basecall, basev, iimpls, m$$19, overrides, ty$$1, argvs, baseValOpt, body$$2, ctorThisValOpt, m$$20, rty$$3, argtyvs, body$$4, m$$21, rty$$4, dtree, exprm, m$$22, spBind, targets, ty$$2, a, argExprs, argTypes, data, isFromQueryExpression, m$$23, ty$$3, typeDefs, a$$1, isFromQueryExpression$$1, m$$24, ty$$4, args$$12, c, m$$25, tyargs, constraints, e2, e3, m$$26, m$$27;

    if (expr$$7.tag === 7) {
      $target$$28 = 0;
    } else if (expr$$7.tag === 2) {
      $target$$28 = 0;
    } else if (expr$$7.tag === 5) {
      $target$$28 = 1;
      args$$9 = expr$$7.fields[3];
      f$$33 = expr$$7.fields[0];
      fty$$3 = expr$$7.fields[1];
      m$$16 = expr$$7.fields[4];
      tys$$6 = expr$$7.fields[2];
    } else if (expr$$7.tag === 1) {
      $target$$28 = 2;
      m$$18 = expr$$7.fields[2];
      v$$32 = expr$$7.fields[0];
    } else if (expr$$7.tag === 14) {
      $target$$28 = 3;
      r = expr$$7.fields[0];
    } else if (expr$$7.tag === 8) {
      $target$$28 = 4;
      basecall = expr$$7.fields[3];
      basev = expr$$7.fields[2];
      iimpls = expr$$7.fields[5];
      m$$19 = expr$$7.fields[6];
      overrides = expr$$7.fields[4];
      ty$$1 = expr$$7.fields[1];
    } else if (expr$$7.tag === 3) {
      $target$$28 = 5;
      argvs = expr$$7.fields[3];
      baseValOpt = expr$$7.fields[2];
      body$$2 = expr$$7.fields[4];
      ctorThisValOpt = expr$$7.fields[1];
      m$$20 = expr$$7.fields[5];
      rty$$3 = expr$$7.fields[6];
    } else if (expr$$7.tag === 4) {
      $target$$28 = 6;
      argtyvs = expr$$7.fields[1];
      body$$4 = expr$$7.fields[2];
      m$$21 = expr$$7.fields[3];
      rty$$4 = expr$$7.fields[4];
    } else if (expr$$7.tag === 9) {
      $target$$28 = 7;
      dtree = expr$$7.fields[2];
      exprm = expr$$7.fields[1];
      m$$22 = expr$$7.fields[4];
      spBind = expr$$7.fields[0];
      targets = expr$$7.fields[3];
      ty$$2 = expr$$7.fields[5];
    } else if (expr$$7.tag === 0) {
      $target$$28 = 8;
    } else if (expr$$7.tag === 12) {
      if (expr$$7.fields[1].contents == null) {
        $target$$28 = 10;
        a$$1 = expr$$7.fields[0];
        isFromQueryExpression$$1 = expr$$7.fields[2];
        m$$24 = expr$$7.fields[3];
        ty$$4 = expr$$7.fields[4];
      } else {
        $target$$28 = 9;
        a = expr$$7.fields[0];
        argExprs = expr$$7.fields[1].contents[2];
        argTypes = expr$$7.fields[1].contents[1];
        data = expr$$7.fields[1].contents[3];
        isFromQueryExpression = expr$$7.fields[2];
        m$$23 = expr$$7.fields[3];
        ty$$3 = expr$$7.fields[4];
        typeDefs = expr$$7.fields[1].contents[0];
      }
    } else if (expr$$7.tag === 11) {
      $target$$28 = 11;
      args$$12 = expr$$7.fields[2];
      c = expr$$7.fields[0];
      m$$25 = expr$$7.fields[3];
      tyargs = expr$$7.fields[1];
    } else if (expr$$7.tag === 10) {
      $target$$28 = 12;
      constraints = expr$$7.fields[0];
      e2 = expr$$7.fields[1];
      e3 = expr$$7.fields[2];
      m$$26 = expr$$7.fields[3];
    } else if (expr$$7.tag === 13) {
      $target$$28 = 13;
      m$$27 = expr$$7.fields[2];
    } else {
      $target$$28 = 0;
    }

    switch ($target$$28) {
      case 0:
        {
          return Pass4_RewriteAssembly$$$TransLinearExpr(penv$$4, z$$31, expr$$7, function (res$$1) {
            return res$$1;
          });
        }

      case 1:
        {
          const patternInput$$18 = Pass4_RewriteAssembly$$$TransExpr(penv$$4, z$$31, f$$33);
          const patternInput$$19 = (0, _List.mapFold)(function (z$$33, expr$$8) {
            return Pass4_RewriteAssembly$$$TransExpr(penv$$4, z$$33, expr$$8);
          }, patternInput$$18[1], args$$9);
          const patternInput$$20 = destApp(patternInput$$18[0], fty$$3, tys$$6, patternInput$$19[0], m$$16);
          const expr$$9 = Pass4_RewriteAssembly$$$TransApp(penv$$4, patternInput$$20[0], patternInput$$20[1], patternInput$$20[2], patternInput$$20[3], patternInput$$20[4]);
          return [expr$$9, patternInput$$19[1]];
        }

      case 2:
        {
          const patternInput$$21 = [expr$$7, (0, _tast.ValRef$$get_Type)(v$$32)];
          const expr$$10 = Pass4_RewriteAssembly$$$TransApp(penv$$4, patternInput$$21[0], patternInput$$21[1], (0, _Types.L)(), (0, _Types.L)(), m$$18);
          return [expr$$10, z$$31];
        }

      case 3:
        {
          penv$$4 = penv$$4;
          z$$31 = z$$31;
          expr$$7 = r.contents;
          continue Pass4_RewriteAssembly$$$TransExpr;
        }

      case 4:
        {
          const patternInput$$22 = Pass4_RewriteAssembly$$$TransExpr(penv$$4, z$$31, basecall);
          const patternInput$$23 = (0, _List.mapFold)(function (z$$36, arg20$0040$$1) {
            return Pass4_RewriteAssembly$$$TransMethod(penv$$4, z$$36, arg20$0040$$1);
          }, patternInput$$22[1], overrides);
          const patternInput$$25 = (0, _List.mapFold)(function (z$$38, tupledArg$$10) {
            const patternInput$$24 = (0, _List.mapFold)(function (z$$39, arg20$0040$$2) {
              return Pass4_RewriteAssembly$$$TransMethod(penv$$4, z$$39, arg20$0040$$2);
            }, z$$38, tupledArg$$10[1]);
            return [[tupledArg$$10[0], patternInput$$24[0]], patternInput$$24[1]];
          }, patternInput$$23[1], iimpls);
          const expr$$11 = new _tast.Expr(8, "Obj", (0, _tast.newUnique)(), ty$$1, basev, patternInput$$22[0], patternInput$$23[0], patternInput$$25[0], m$$19);
          const patternInput$$26 = Pass4_RewriteAssembly$$$ExtractPreDecs(patternInput$$25[1]);
          return [Pass4_RewriteAssembly$$$MakePreDecs(m$$19, patternInput$$26[0], expr$$11), patternInput$$26[1]];
        }

      case 5:
        {
          const z$$42 = Pass4_RewriteAssembly$$$EnterInner(z$$31);
          const patternInput$$27 = Pass4_RewriteAssembly$$$TransExpr(penv$$4, z$$42, body$$2);
          const z$$44 = Pass4_RewriteAssembly$$$ExitInner(patternInput$$27[1]);
          const patternInput$$28 = Pass4_RewriteAssembly$$$ExtractPreDecs(z$$44);
          return [Pass4_RewriteAssembly$$$MakePreDecs(m$$20, patternInput$$28[0], (0, _TastOps.rebuildLambda)(m$$20, ctorThisValOpt, baseValOpt, argvs, patternInput$$27[0], rty$$3)), patternInput$$28[1]];
        }

      case 6:
        {
          const z$$46 = Pass4_RewriteAssembly$$$EnterInner(z$$31);
          const patternInput$$29 = Pass4_RewriteAssembly$$$TransExpr(penv$$4, z$$46, body$$4);
          const z$$48 = Pass4_RewriteAssembly$$$ExitInner(patternInput$$29[1]);
          const patternInput$$30 = Pass4_RewriteAssembly$$$ExtractPreDecs(z$$48);
          return [Pass4_RewriteAssembly$$$MakePreDecs(m$$21, patternInput$$30[0], (0, _TastOps.mkTypeLambda)(m$$21, argtyvs, patternInput$$29[0], rty$$4)), patternInput$$30[1]];
        }

      case 7:
        {
          const targets$$1 = (0, _Array.toList)(targets);
          const patternInput$$31 = Pass4_RewriteAssembly$$$TransDecisionTree(penv$$4, z$$31, dtree);
          const patternInput$$32 = (0, _List.mapFold)(function (z$$51, arg20$0040$$3) {
            return Pass4_RewriteAssembly$$$TransDecisionTreeTarget(penv$$4, z$$51, arg20$0040$$3);
          }, patternInput$$31[1], targets$$1);
          const patternInput$$33 = Pass4_RewriteAssembly$$$ExtractPreDecs(patternInput$$32[1]);
          return [Pass4_RewriteAssembly$$$MakePreDecs(m$$22, patternInput$$33[0], (0, _TastOps.mkAndSimplifyMatch)(spBind, exprm, m$$22, ty$$2, patternInput$$31[0], patternInput$$32[0])), patternInput$$33[1]];
        }

      case 8:
        {
          return [expr$$7, z$$31];
        }

      case 9:
        {
          const patternInput$$34 = (0, _List.mapFold)(function (z$$54, expr$$12) {
            return Pass4_RewriteAssembly$$$TransExpr(penv$$4, z$$54, expr$$12);
          }, z$$31, argExprs);
          return [new _tast.Expr(12, "Quote", a, new _Types.FSharpRef([typeDefs, argTypes, patternInput$$34[0], data]), isFromQueryExpression, m$$23, ty$$3), patternInput$$34[1]];
        }

      case 10:
        {
          return [new _tast.Expr(12, "Quote", a$$1, new _Types.FSharpRef(null), isFromQueryExpression$$1, m$$24, ty$$4), z$$31];
        }

      case 11:
        {
          const patternInput$$35 = (0, _List.mapFold)(function (z$$56, expr$$13) {
            return Pass4_RewriteAssembly$$$TransExpr(penv$$4, z$$56, expr$$13);
          }, z$$31, args$$12);
          return [new _tast.Expr(11, "Op", c, tyargs, patternInput$$35[0], m$$25), patternInput$$35[1]];
        }

      case 12:
        {
          const patternInput$$36 = Pass4_RewriteAssembly$$$TransExpr(penv$$4, z$$31, e2);
          const patternInput$$37 = Pass4_RewriteAssembly$$$TransExpr(penv$$4, patternInput$$36[1], e3);
          return [new _tast.Expr(10, "StaticOptimization", constraints, patternInput$$36[0], patternInput$$37[0], m$$26), patternInput$$37[1]];
        }

      case 13:
        {
          return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tlrUnexpectedTExpr)(), m$$27));
        }
    }
  }
}

function Pass4_RewriteAssembly$$$TransLinearExpr($arg$$29, $arg$$30, $arg$$31, $arg$$32) {
  Pass4_RewriteAssembly$$$TransLinearExpr: while (true) {
    const penv$$5 = $arg$$29,
          z$$60 = $arg$$30,
          expr$$14 = $arg$$31,
          contf = $arg$$32;

    if (expr$$14.tag === 2) {
      const patternInput$$38 = Pass4_RewriteAssembly$$$TransExpr(penv$$5, z$$60, expr$$14.fields[0]);
      $arg$$29 = penv$$5;
      $arg$$30 = patternInput$$38[1];
      $arg$$31 = expr$$14.fields[1];

      $arg$$32 = function ($arg$$10) {
        return contf([new _tast.Expr(2, "Sequential", patternInput$$38[0], $arg$$10[0], expr$$14.fields[2], expr$$14.fields[3], expr$$14.fields[4]), $arg$$10[1]]);
      };

      continue Pass4_RewriteAssembly$$$TransLinearExpr;
    } else if (expr$$14.tag === 6) {
      const z$$63 = Pass4_RewriteAssembly$$$EnterInner(z$$60);
      const patternInput$$39 = Pass4_RewriteAssembly$$$PopPreDecs(z$$63);
      const patternInput$$40 = (0, _List.mapFold)(function (z$$65, arg20$0040$$4) {
        return Pass4_RewriteAssembly$$$TransBindingRhs(penv$$5, z$$65, arg20$0040$$4);
      }, patternInput$$39[0], expr$$14.fields[0]);
      const patternInput$$41 = Pass4_RewriteAssembly$$$PopPreDecs(patternInput$$40[1]);
      const patternInput$$42 = Pass4_RewriteAssembly$$$TransBindings(new Pass4_RewriteAssembly$002EIsRecursive(0, "IsRec"), penv$$5, patternInput$$40[0]);
      const patternInput$$43 = Pass4_RewriteAssembly$$$LiftTopBinds(new Pass4_RewriteAssembly$002EIsRecursive(0, "IsRec"), penv$$5, patternInput$$41[0], patternInput$$42[0]);
      const patternInput$$44 = Pass4_RewriteAssembly$$$LiftTopBinds(new Pass4_RewriteAssembly$002EIsRecursive(0, "IsRec"), penv$$5, patternInput$$43[0], patternInput$$42[1]);
      const patternInput$$45 = Pass4_RewriteAssembly$$$PopPreDecs(patternInput$$44[0]);
      const z$$71 = Pass4_RewriteAssembly$$$SetPreDecs(patternInput$$45[0], new Tree$00601(0, "TreeNode", (0, _Types.L)(patternInput$$39[1], (0, _Types.L)(Pass4_RewriteAssembly$$$RecursivePreDecs(patternInput$$45[1], patternInput$$41[1]), (0, _Types.L)()))));
      const z$$72 = Pass4_RewriteAssembly$$$ExitInner(z$$71);
      const patternInput$$46 = Pass4_RewriteAssembly$$$ExtractPreDecs(z$$72);
      $arg$$29 = penv$$5;
      $arg$$30 = patternInput$$46[1];
      $arg$$31 = expr$$14.fields[1];

      $arg$$32 = function ($arg$$11) {
        var e$$6;
        return contf((e$$6 = (0, _TastOps.mkLetsFromBindings)(expr$$14.fields[2], patternInput$$44[1], $arg$$11[0]), [Pass4_RewriteAssembly$$$MakePreDecs(expr$$14.fields[2], patternInput$$46[0], new _tast.Expr(6, "LetRec", patternInput$$43[1], e$$6, expr$$14.fields[2], (0, _tast.NewFreeVarsCache)())), $arg$$11[1]]));
      };

      continue Pass4_RewriteAssembly$$$TransLinearExpr;
    } else if (expr$$14.tag === 7) {
      const patternInput$$47 = Pass4_RewriteAssembly$$$TransBindingRhs(penv$$5, z$$60, expr$$14.fields[0]);
      const patternInput$$48 = Pass4_RewriteAssembly$$$TransBindings(new Pass4_RewriteAssembly$002EIsRecursive(1, "NotRec"), penv$$5, (0, _Types.L)(patternInput$$47[0], (0, _Types.L)()));
      const patternInput$$49 = Pass4_RewriteAssembly$$$LiftTopBinds(new Pass4_RewriteAssembly$002EIsRecursive(1, "NotRec"), penv$$5, patternInput$$47[1], patternInput$$48[0]);
      const patternInput$$50 = Pass4_RewriteAssembly$$$LiftTopBinds(new Pass4_RewriteAssembly$002EIsRecursive(1, "NotRec"), penv$$5, patternInput$$49[0], patternInput$$48[1]);
      const patternInput$$51 = Pass4_RewriteAssembly$$$ExtractPreDecs(patternInput$$50[0]);
      $arg$$29 = penv$$5;
      $arg$$30 = patternInput$$51[1];
      $arg$$31 = expr$$14.fields[1];

      $arg$$32 = function ($arg$$12) {
        var e$$9;
        return contf((e$$9 = (0, _TastOps.mkLetsFromBindings)(expr$$14.fields[2], patternInput$$50[1], $arg$$12[0]), [Pass4_RewriteAssembly$$$MakePreDecs(expr$$14.fields[2], patternInput$$51[0], (0, _TastOps.mkLetsFromBindings)(expr$$14.fields[2], patternInput$$49[1], e$$9)), $arg$$12[1]]));
      };

      continue Pass4_RewriteAssembly$$$TransLinearExpr;
    } else {
      const activePatternResult51534 = (0, _TastOps.$007CLinearMatchExpr$007C_$007C)(expr$$14);

      if (activePatternResult51534 != null) {
        const patternInput$$52 = Pass4_RewriteAssembly$$$TransDecisionTree(penv$$5, z$$60, activePatternResult51534[2]);
        const patternInput$$53 = Pass4_RewriteAssembly$$$TransDecisionTreeTarget(penv$$5, patternInput$$52[1], activePatternResult51534[3]);
        $arg$$29 = penv$$5;
        $arg$$30 = patternInput$$53[1];
        $arg$$31 = activePatternResult51534[4];

        $arg$$32 = function ($arg$$13) {
          return contf([(0, _TastOps.rebuildLinearMatchExpr)([activePatternResult51534[0], activePatternResult51534[1], patternInput$$52[0], patternInput$$53[0], $arg$$13[0], activePatternResult51534[5], activePatternResult51534[6], activePatternResult51534[7]]), $arg$$13[1]]);
        };

        continue Pass4_RewriteAssembly$$$TransLinearExpr;
      } else {
        return contf(Pass4_RewriteAssembly$$$TransExpr(penv$$5, z$$60, expr$$14));
      }
    }
  }
}

function Pass4_RewriteAssembly$$$TransMethod(penv$$6, z$$83, _arg1$$4) {
  const vs = _arg1$$4.fields[3];
  const tps$$6 = _arg1$$4.fields[2];
  const slotsig = _arg1$$4.fields[0];
  const m$$31 = _arg1$$4.fields[5];
  const e$$10 = _arg1$$4.fields[4];
  const attribs = _arg1$$4.fields[1];
  const z$$84 = Pass4_RewriteAssembly$$$EnterInner(z$$83);
  const patternInput$$54 = Pass4_RewriteAssembly$$$TransExpr(penv$$6, z$$84, e$$10);
  const z$$86 = Pass4_RewriteAssembly$$$ExitInner(patternInput$$54[1]);
  return [new _tast.ObjExprMethod(0, "TObjExprMethod", slotsig, attribs, tps$$6, vs, patternInput$$54[0], m$$31), z$$86];
}

function Pass4_RewriteAssembly$$$TransBindingRhs(penv$$7, z$$87, _arg2$$1) {
  const v$$33 = _arg2$$1.fields[0];
  const letSeqPtOpt$$2 = _arg2$$1.fields[2];
  const e$$12 = _arg2$$1.fields[1];
  const mustInline = (0, _tast.Val$$get_MustInline)(v$$33);
  const patternInput$$55 = Pass4_RewriteAssembly$$$EnterMustInline(mustInline, z$$87, function (z$$88) {
    return Pass4_RewriteAssembly$$$TransExpr(penv$$7, z$$88, e$$12);
  });
  return [new _tast.Binding(0, "TBind", v$$33, patternInput$$55[1], letSeqPtOpt$$2), patternInput$$55[0]];
}

function Pass4_RewriteAssembly$$$TransDecisionTree(penv$$8, z$$90, x$$7) {
  switch (x$$7.tag) {
    case 2:
      {
        const rest = x$$7.fields[1];
        const bind$$6 = x$$7.fields[0];
        const patternInput$$57 = Pass4_RewriteAssembly$$$TransBindingRhs(penv$$8, z$$90, bind$$6);
        const patternInput$$58 = Pass4_RewriteAssembly$$$TransDecisionTree(penv$$8, patternInput$$57[1], rest);
        return [new _tast.DecisionTree(2, "TDBind", patternInput$$57[0], patternInput$$58[0]), patternInput$$58[1]];
      }

    case 0:
      {
        const m$$32 = x$$7.fields[3];
        const e$$14 = x$$7.fields[0];
        const dflt = x$$7.fields[2];
        const cases = x$$7.fields[1];
        const patternInput$$59 = Pass4_RewriteAssembly$$$TransExpr(penv$$8, z$$90, e$$14);

        const TransDecisionTreeCase = function TransDecisionTreeCase(penv$$9, z$$96, _arg4) {
          const dtree$$4 = _arg4.fields[1];
          const discrim = _arg4.fields[0];
          const patternInput$$60 = Pass4_RewriteAssembly$$$TransDecisionTree(penv$$9, z$$96, dtree$$4);
          return [new _tast.DecisionTreeCase(0, "TCase", discrim, patternInput$$60[0]), patternInput$$60[1]];
        };

        const patternInput$$61 = (0, _List.mapFold)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, TransDecisionTreeCase, [penv$$8])), patternInput$$59[1], cases);
        const patternInput$$62 = (0, _illib.Option$$$mapFold)(function (z$$99, x$$8) {
          return Pass4_RewriteAssembly$$$TransDecisionTree(penv$$8, z$$99, x$$8);
        }, patternInput$$61[1], dflt);
        return [new _tast.DecisionTree(0, "TDSwitch", patternInput$$59[0], patternInput$$61[0], patternInput$$62[0], m$$32), patternInput$$62[1]];
      }

    default:
      {
        const n$$2 = x$$7.fields[1] | 0;
        const es = x$$7.fields[0];
        const patternInput$$56 = (0, _List.mapFold)(function (z$$91, expr$$15) {
          return Pass4_RewriteAssembly$$$TransExpr(penv$$8, z$$91, expr$$15);
        }, z$$90, es);
        return [new _tast.DecisionTree(1, "TDSuccess", patternInput$$56[0], n$$2), patternInput$$56[1]];
      }
  }
}

function Pass4_RewriteAssembly$$$TransDecisionTreeTarget(penv$$10, z$$101, _arg3) {
  const vs$$1 = _arg3.fields[0];
  const spTarget = _arg3.fields[2];
  const e$$16 = _arg3.fields[1];
  const z$$102 = Pass4_RewriteAssembly$$$EnterInner(z$$101);
  const patternInput$$63 = Pass4_RewriteAssembly$$$TransExpr(penv$$10, z$$102, e$$16);
  const z$$104 = Pass4_RewriteAssembly$$$ExitInner(patternInput$$63[1]);
  return [new _tast.DecisionTreeTarget(0, "TTarget", vs$$1, patternInput$$63[0], spTarget), z$$104];
}

function Pass4_RewriteAssembly$$$TransValBinding(penv$$11, z$$105, bind$$8) {
  return Pass4_RewriteAssembly$$$TransBindingRhs(penv$$11, z$$105, bind$$8);
}

function Pass4_RewriteAssembly$$$TransValBindings(penv$$12, z$$106, binds$$13) {
  return (0, _List.mapFold)(function (z$$107, bind$$9) {
    return Pass4_RewriteAssembly$$$TransValBinding(penv$$12, z$$107, bind$$9);
  }, z$$106, binds$$13);
}

function Pass4_RewriteAssembly$$$TransModuleExpr(penv$$13, z$$108, x$$9) {
  const mty = x$$9.fields[0];
  const m$$33 = x$$9.fields[2];
  const def = x$$9.fields[1];
  const patternInput$$64 = Pass4_RewriteAssembly$$$TransModuleDef(penv$$13, z$$108, def);
  return [new _tast.ModuleOrNamespaceExprWithSig(0, "ModuleOrNamespaceExprWithSig", mty, patternInput$$64[0], m$$33), patternInput$$64[1]];
}

function Pass4_RewriteAssembly$$$TransModuleDefs(penv$$14, z$$110, x$$10) {
  return (0, _List.mapFold)(function (z$$111, x$$11) {
    return Pass4_RewriteAssembly$$$TransModuleDef(penv$$14, z$$111, x$$11);
  }, z$$110, x$$10);
}

function Pass4_RewriteAssembly$$$TransModuleDef(penv$$15, z$$112, x$$12) {
  switch (x$$12.tag) {
    case 2:
      {
        const m$$35 = x$$12.fields[1];
        const bind$$10 = x$$12.fields[0];
        const patternInput$$66 = Pass4_RewriteAssembly$$$TransValBinding(penv$$15, z$$112, bind$$10);
        return [new _tast.ModuleOrNamespaceExpr(2, "TMDefLet", patternInput$$66[0], m$$35), patternInput$$66[1]];
      }

    case 3:
      {
        const m$$36 = x$$12.fields[1];
        const e$$18 = x$$12.fields[0];
        const patternInput$$67 = Pass4_RewriteAssembly$$$TransExpr(penv$$15, z$$112, e$$18);
        return [new _tast.ModuleOrNamespaceExpr(3, "TMDefDo", e$$18, m$$36), patternInput$$67[1]];
      }

    case 1:
      {
        const defs = x$$12.fields[0];
        const patternInput$$68 = Pass4_RewriteAssembly$$$TransModuleDefs(penv$$15, z$$112, defs);
        return [new _tast.ModuleOrNamespaceExpr(1, "TMDefs", patternInput$$68[0]), patternInput$$68[1]];
      }

    case 0:
      {
        const mexpr = x$$12.fields[0];
        const patternInput$$69 = Pass4_RewriteAssembly$$$TransModuleExpr(penv$$15, z$$112, mexpr);
        return [new _tast.ModuleOrNamespaceExpr(0, "TMAbstract", patternInput$$69[0]), patternInput$$69[1]];
      }

    default:
      {
        const tycons = x$$12.fields[1];
        const mbinds = x$$12.fields[2];
        const m$$34 = x$$12.fields[3];
        const isRec$$2 = x$$12.fields[0];
        const patternInput$$65 = Pass4_RewriteAssembly$$$TransModuleBindings(penv$$15, z$$112, mbinds);
        return [new _tast.ModuleOrNamespaceExpr(4, "TMDefRec", isRec$$2, tycons, patternInput$$65[0], m$$34), patternInput$$65[1]];
      }
  }
}

function Pass4_RewriteAssembly$$$TransModuleBindings(penv$$16, z$$118, binds$$14) {
  return (0, _List.mapFold)(function (z$$119, x$$13) {
    return Pass4_RewriteAssembly$$$TransModuleBinding(penv$$16, z$$119, x$$13);
  }, z$$118, binds$$14);
}

function Pass4_RewriteAssembly$$$TransModuleBinding(penv$$17, z$$120, x$$14) {
  if (x$$14.tag === 1) {
    const rhs = x$$14.fields[1];
    const nm = x$$14.fields[0];
    const patternInput$$71 = Pass4_RewriteAssembly$$$TransModuleDef(penv$$17, z$$120, rhs);
    return [new _tast.ModuleOrNamespaceBinding(1, "Module", nm, patternInput$$71[0]), patternInput$$71[1]];
  } else {
    const bind$$12 = x$$14.fields[0];
    const patternInput$$70 = Pass4_RewriteAssembly$$$TransValBinding(penv$$17, z$$120, bind$$12);
    return [new _tast.ModuleOrNamespaceBinding(0, "Binding", patternInput$$70[0]), patternInput$$70[1]];
  }
}

function Pass4_RewriteAssembly$$$TransImplFile(penv$$18, z$$123, _arg1$$5) {
  const pragmas = _arg1$$5.fields[1];
  const moduleExpr = _arg1$$5.fields[2];
  const isScript = _arg1$$5.fields[4];
  const hasExplicitEntryPoint = _arg1$$5.fields[3];
  const fragName = _arg1$$5.fields[0];
  const patternInput$$72 = Pass4_RewriteAssembly$$$TransModuleExpr(penv$$18, z$$123, moduleExpr);
  return [new _tast.TypedImplFile(0, "TImplFile", fragName, pragmas, patternInput$$72[0], hasExplicitEntryPoint, isScript), patternInput$$72[1]];
}

function RecreateUniqueBounds(g$$8, expr$$16) {
  return (0, _TastOps.copyImplFile)(g$$8, new _TastOps.ValCopyFlag(2, "OnlyCloneExprVals"), expr$$16);
}

function MakeTLRDecisions(ccu, g$$9, expr$$17) {
  try {
    const patternInput$$73 = Pass1_DetermineTLRAndArities$$$DetermineTLRAndArities(g$$9, expr$$17);
    const patternInput$$74 = Pass2_DetermineReqdItems$$$DetermineReqdItems(patternInput$$73[0], patternInput$$73[2], expr$$17);
    const envPackM$$2 = ChooseReqdItemPackings(g$$9, patternInput$$74[1], patternInput$$73[1], patternInput$$74[2], patternInput$$74[0]);
    const fHatM$$1 = CreateNewValuesForTLR(g$$9, patternInput$$73[0], patternInput$$73[2], patternInput$$74[1], envPackM$$2);

    if (verboseTLR) {
      (0, _ildiag.dprintf)((0, _String.printf)("TransExpr(rw)------\n"));
    }

    let patternInput$$75;
    const penv$$19 = new Pass4_RewriteAssembly$002ERewriteContext(ccu, g$$9, patternInput$$73[0], patternInput$$73[1], patternInput$$73[2], patternInput$$74[1], patternInput$$74[3], envPackM$$2, fHatM$$1);
    const z$$125 = Pass4_RewriteAssembly$$$rewriteState0;
    patternInput$$75 = Pass4_RewriteAssembly$$$TransImplFile(penv$$19, z$$125, expr$$17);

    if (verboseTLR) {
      (0, _ildiag.dprintf)((0, _String.printf)("copyExpr------\n"));
    }

    const expr$$19 = RecreateUniqueBounds(g$$9, patternInput$$75[0]);

    if (verboseTLR) {
      (0, _ildiag.dprintf)((0, _String.printf)("TLR-done------\n"));
    }

    return expr$$19;
  } catch (matchValue$$7) {
    if (matchValue$$7 instanceof AbortTLR) {
      (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tlrLambdaLiftingOptimizationsNotApplied)(), matchValue$$7.Data0));
      return expr$$17;
    } else {
      throw matchValue$$7;
    }
  }
}