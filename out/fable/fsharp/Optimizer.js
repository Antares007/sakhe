"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValInfos$$$$002Ector$$2FE4CE46 = ValInfos$$$$002Ector$$2FE4CE46;
exports.ValInfos$$get_Entries = ValInfos$$get_Entries;
exports.ValInfos$$Map$$Z6E46560A = ValInfos$$Map$$Z6E46560A;
exports.ValInfos$$Filter$$Z50890DAB = ValInfos$$Filter$$Z50890DAB;
exports.ValInfos$$TryFind$$7D2DE7B4 = ValInfos$$TryFind$$7D2DE7B4;
exports.ValInfos$$TryFindForFslib$$7D2DE7B4 = ValInfos$$TryFindForFslib$$7D2DE7B4;
exports.SizeOfValueInfos = SizeOfValueInfos;
exports.SizeOfValueInfo = SizeOfValueInfo;
exports.MakeValueInfoWithCachedSize = MakeValueInfoWithCachedSize;
exports.MakeSizedValueInfo = MakeSizedValueInfo;
exports.BoundValueInfoBySize = BoundValueInfoBySize;
exports.OptimizationSettings$$$get_Defaults = OptimizationSettings$$$get_Defaults;
exports.OptimizationSettings$$jitOpt = OptimizationSettings$$jitOpt;
exports.OptimizationSettings$$localOpt = OptimizationSettings$$localOpt;
exports.OptimizationSettings$$crossModuleOpt = OptimizationSettings$$crossModuleOpt;
exports.OptimizationSettings$$KeepOptimizationValues = OptimizationSettings$$KeepOptimizationValues;
exports.OptimizationSettings$$InlineLambdas = OptimizationSettings$$InlineLambdas;
exports.OptimizationSettings$$EliminateUnusedBindings = OptimizationSettings$$EliminateUnusedBindings;
exports.OptimizationSettings$$EliminateTryCatchAndTryFinally = OptimizationSettings$$EliminateTryCatchAndTryFinally;
exports.OptimizationSettings$$EliminateSequential = OptimizationSettings$$EliminateSequential;
exports.OptimizationSettings$$EliminateSwitch = OptimizationSettings$$EliminateSwitch;
exports.OptimizationSettings$$EliminateRecdFieldGet = OptimizationSettings$$EliminateRecdFieldGet;
exports.OptimizationSettings$$EliminateTupleFieldGet = OptimizationSettings$$EliminateTupleFieldGet;
exports.OptimizationSettings$$EliminatUnionCaseFieldGet = OptimizationSettings$$EliminatUnionCaseFieldGet;
exports.OptimizationSettings$$EliminateImmediatelyConsumedLocals = OptimizationSettings$$EliminateImmediatelyConsumedLocals;
exports.OptimizationSettings$$ExpandStructrualValues = OptimizationSettings$$ExpandStructrualValues;
exports.IncrementalOptimizationEnv$$$get_Empty = IncrementalOptimizationEnv$$$get_Empty;
exports.IsPartialExprVal = IsPartialExprVal;
exports.CheckInlineValueIsComplete = CheckInlineValueIsComplete;
exports.check = check;
exports.UnionOptimizationInfos = UnionOptimizationInfos;
exports.FindOrCreateModuleInfo = FindOrCreateModuleInfo;
exports.FindOrCreateGlobalModuleInfo = FindOrCreateGlobalModuleInfo;
exports.BindValueInSubModuleFSharpCore = BindValueInSubModuleFSharpCore;
exports.BindValueInModuleForFslib = BindValueInModuleForFslib;
exports.BindValueInGlobalModuleForFslib = BindValueInGlobalModuleForFslib;
exports.BindValueForFslib = BindValueForFslib;
exports.mkValInfo = mkValInfo;
exports.BindInternalLocalVal = BindInternalLocalVal;
exports.BindExternalLocalVal = BindExternalLocalVal;
exports.BindValsInModuleOrNamespace = BindValsInModuleOrNamespace;
exports.BindTypeVar = BindTypeVar;
exports.BindTypeVarsToUnknown = BindTypeVarsToUnknown;
exports.BindCcu = BindCcu;
exports.GetInfoForLocalValue = GetInfoForLocalValue;
exports.TryGetInfoForCcu = TryGetInfoForCcu;
exports.TryGetInfoForEntity = TryGetInfoForEntity;
exports.TryGetInfoForPath = TryGetInfoForPath;
exports.TryGetInfoForNonLocalEntityRef = TryGetInfoForNonLocalEntityRef;
exports.GetInfoForNonLocalVal = GetInfoForNonLocalVal;
exports.GetInfoForVal = GetInfoForVal;
exports.stripValue = stripValue;
exports.$007CStripConstValue$007C_$007C = $007CStripConstValue$007C_$007C;
exports.$007CStripLambdaValue$007C_$007C = $007CStripLambdaValue$007C_$007C;
exports.destTupleValue = destTupleValue;
exports.destRecdValue = destRecdValue;
exports.$007CStripUnionCaseValue$007C_$007C = $007CStripUnionCaseValue$007C_$007C;
exports.mkBoolVal = mkBoolVal;
exports.mkInt8Val = mkInt8Val;
exports.mkInt16Val = mkInt16Val;
exports.mkInt32Val = mkInt32Val;
exports.mkInt64Val = mkInt64Val;
exports.mkUInt8Val = mkUInt8Val;
exports.mkUInt16Val = mkUInt16Val;
exports.mkUInt32Val = mkUInt32Val;
exports.mkUInt64Val = mkUInt64Val;
exports.$007CStripInt32Value$007C_$007C = $007CStripInt32Value$007C_$007C;
exports.MakeValueInfoForValue = MakeValueInfoForValue;
exports.MakeValueInfoForRecord = MakeValueInfoForRecord;
exports.MakeValueInfoForTuple = MakeValueInfoForTuple;
exports.MakeValueInfoForUnionCase = MakeValueInfoForUnionCase;
exports.MakeValueInfoForConst = MakeValueInfoForConst;
exports.mkAssemblyCodeValueInfo = mkAssemblyCodeValueInfo;
exports.OptimizeList = OptimizeList;
exports.CombineValueInfos = CombineValueInfos;
exports.CombineValueInfosUnknown = CombineValueInfosUnknown;
exports.AbstractLazyModulInfoByHiding = AbstractLazyModulInfoByHiding;
exports.AbstractExprInfoByVars = AbstractExprInfoByVars;
exports.RemapOptimizationInfo = RemapOptimizationInfo;
exports.AbstractAndRemapModulInfo = AbstractAndRemapModulInfo;
exports.IsTyFuncValRefExpr = IsTyFuncValRefExpr;
exports.IsSmallConstExpr = IsSmallConstExpr;
exports.ValueOfExpr = ValueOfExpr;
exports.ValueIsUsedOrHasEffect = ValueIsUsedOrHasEffect;
exports.SplitValuesByIsUsedOrHasEffect = SplitValuesByIsUsedOrHasEffect;
exports.IlAssemblyCodeInstrHasEffect = IlAssemblyCodeInstrHasEffect;
exports.IlAssemblyCodeHasEffect = IlAssemblyCodeHasEffect;
exports.ExprHasEffect = ExprHasEffect;
exports.ExprsHaveEffect = ExprsHaveEffect;
exports.BindingsHaveEffect = BindingsHaveEffect;
exports.BindingHasEffect = BindingHasEffect;
exports.OpHasEffect = OpHasEffect;
exports.TryEliminateBinding = TryEliminateBinding;
exports.TryEliminateLet = TryEliminateLet;
exports.$007CKnownValApp$007C_$007C = $007CKnownValApp$007C_$007C;
exports.CanExpandStructuralBinding = CanExpandStructuralBinding;
exports.ExprIsValue = ExprIsValue;
exports.ExpandStructuralBindingRaw = ExpandStructuralBindingRaw;
exports.RearrangeTupleBindings = RearrangeTupleBindings;
exports.ExpandStructuralBinding = ExpandStructuralBinding;
exports.$007CQueryRun$007C_$007C = $007CQueryRun$007C_$007C;
exports.$007CMaybeRefTupled$007C = $007CMaybeRefTupled$007C;
exports.$007CAnyInstanceMethodApp$007C_$007C = $007CAnyInstanceMethodApp$007C_$007C;
exports.$007CInstanceMethodApp$007C_$007C = $007CInstanceMethodApp$007C_$007C;
exports.$007CQuerySourceEnumerable$007C_$007C = $007CQuerySourceEnumerable$007C_$007C;
exports.$007CQueryFor$007C_$007C = $007CQueryFor$007C_$007C;
exports.$007CQueryYield$007C_$007C = $007CQueryYield$007C_$007C;
exports.$007CQueryYieldFrom$007C_$007C = $007CQueryYieldFrom$007C_$007C;
exports.$007CQuerySelect$007C_$007C = $007CQuerySelect$007C_$007C;
exports.$007CQueryZero$007C_$007C = $007CQueryZero$007C_$007C;
exports.$007CAnyRefTupleTrans$007C = $007CAnyRefTupleTrans$007C;
exports.$007CAnyQueryBuilderOpTrans$007C_$007C = $007CAnyQueryBuilderOpTrans$007C_$007C;
exports.mkUnitDelayLambda = mkUnitDelayLambda;
exports.tryRewriteToSeqCombinators = tryRewriteToSeqCombinators;
exports.TryDetectQueryQuoteAndRun = TryDetectQueryQuoteAndRun;
exports.OptimizeExpr = OptimizeExpr;
exports.OptimizeObjectExpr = OptimizeObjectExpr;
exports.OptimizeMethods = OptimizeMethods;
exports.OptimizeMethod = OptimizeMethod;
exports.OptimizeInterfaceImpls = OptimizeInterfaceImpls;
exports.OptimizeInterfaceImpl = OptimizeInterfaceImpl;
exports.OptimizeExprOp = OptimizeExprOp;
exports.OptimizeExprOpFallback = OptimizeExprOpFallback;
exports.OptimizeConst = OptimizeConst;
exports.TryOptimizeRecordFieldGet = TryOptimizeRecordFieldGet;
exports.TryOptimizeTupleFieldGet = TryOptimizeTupleFieldGet;
exports.TryOptimizeUnionCaseGet = TryOptimizeUnionCaseGet;
exports.OptimizeFastIntegerForLoop = OptimizeFastIntegerForLoop;
exports.OptimizeLetRec = OptimizeLetRec;
exports.OptimizeLinearExpr = OptimizeLinearExpr;
exports.OptimizeTryFinally = OptimizeTryFinally;
exports.OptimizeTryCatch = OptimizeTryCatch;
exports.OptimizeWhileLoop = OptimizeWhileLoop;
exports.OptimizeTraitCall = OptimizeTraitCall;
exports.TryOptimizeVal = TryOptimizeVal;
exports.TryOptimizeValInfo = TryOptimizeValInfo;
exports.AddValEqualityInfo = AddValEqualityInfo;
exports.OptimizeVal = OptimizeVal;
exports.StripToNominalTyconRef = StripToNominalTyconRef;
exports.CanDevirtualizeApplication = CanDevirtualizeApplication;
exports.TakeAddressOfStructArgumentIfNeeded = TakeAddressOfStructArgumentIfNeeded;
exports.DevirtualizeApplication = DevirtualizeApplication;
exports.TryDevirtualizeApplication = TryDevirtualizeApplication;
exports.TryInlineApplication = TryInlineApplication;
exports.OptimizeApplication = OptimizeApplication;
exports.OptimizeLambdas = OptimizeLambdas;
exports.OptimizeExprsThenReshapeAndConsiderSplits = OptimizeExprsThenReshapeAndConsiderSplits;
exports.OptimizeExprsThenConsiderSplits = OptimizeExprsThenConsiderSplits;
exports.OptimizeExprThenReshapeAndConsiderSplit = OptimizeExprThenReshapeAndConsiderSplit;
exports.OptimizeDecisionTreeTargets = OptimizeDecisionTreeTargets;
exports.ReshapeExpr = ReshapeExpr;
exports.OptimizeExprThenConsiderSplit = OptimizeExprThenConsiderSplit;
exports.ComputeSplitToMethodCondition = ComputeSplitToMethodCondition;
exports.ConsiderSplitToMethod = ConsiderSplitToMethod;
exports.OptimizeMatch = OptimizeMatch;
exports.CombineMatchInfos = CombineMatchInfos;
exports.RebuildOptimizedMatch = RebuildOptimizedMatch;
exports.OptimizeDecisionTreeTarget = OptimizeDecisionTreeTarget;
exports.OptimizeDecisionTree = OptimizeDecisionTree;
exports.TryOptimizeDecisionTreeTest = TryOptimizeDecisionTreeTest;
exports.OptimizeSwitch = OptimizeSwitch;
exports.OptimizeSwitchFallback = OptimizeSwitchFallback;
exports.OptimizeBinding = OptimizeBinding;
exports.OptimizeBindings = OptimizeBindings;
exports.OptimizeModuleExpr = OptimizeModuleExpr;
exports.mkValBind = mkValBind;
exports.OptimizeModuleDef = OptimizeModuleDef;
exports.OptimizeModuleBindings = OptimizeModuleBindings;
exports.OptimizeModuleBinding = OptimizeModuleBinding;
exports.OptimizeModuleDefs = OptimizeModuleDefs;
exports.OptimizeImplFileInternal = OptimizeImplFileInternal;
exports.OptimizeImplFile = OptimizeImplFile;
exports.p_ExprValueInfo = p_ExprValueInfo;
exports.p_ValInfo = p_ValInfo;
exports.p_ModuleInfo = p_ModuleInfo;
exports.p_LazyModuleInfo = p_LazyModuleInfo;
exports.p_CcuOptimizationInfo = p_CcuOptimizationInfo;
exports.u_ExprInfo = u_ExprInfo;
exports.u_ValInfo = u_ValInfo;
exports.u_ModuleInfo = u_ModuleInfo;
exports.u_LazyModuleInfo = u_LazyModuleInfo;
exports.u_CcuOptimizationInfo = u_CcuOptimizationInfo;
exports.AbstractOptimizationInfoToEssentials = exports.NoExprs = exports.UnknownValInfo = exports.EmptyModuleInfo = exports.IncrementalOptimizationEnv = exports.cenv = exports.OptimizationSettings = exports.Summary$00601 = exports.ModuleInfo = exports.ValInfos = exports.ValInfo = exports.ExprValueInfo = exports.TypeValueInfo = exports.i_ldlen = void 0;

var _il = require("../absil/il");

var _Types = require("../fable-core.2.0.3/Types");

var _TastOps = require("./TastOps");

var _tast = require("./tast");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Util = require("../fable-core.2.0.3/Util");

var _Map = require("../fable-core.2.0.3/Map");

var _Array = require("../fable-core.2.0.3/Array");

var _lib = require("./lib");

var _zset = require("../absil/zset");

var _illib = require("../absil/illib");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _TcGlobals = require("./TcGlobals");

var _List = require("../fable-core.2.0.3/List");

var _ast = require("./ast");

var _Long = require("../fable-core.2.0.3/Long");

var _range = require("./range");

var _Option = require("../fable-core.2.0.3/Option");

var _TypeRelations = require("./TypeRelations");

var _ConstraintSolver = require("./ConstraintSolver");

var _AttributeChecking = require("./AttributeChecking");

var _String = require("../fable-core.2.0.3/String");

var _TaggedCollections = require("../utils/TaggedCollections");

var _infos = require("./infos");

var _QueueList = require("./QueueList");

var _TastPickle = require("./TastPickle");

const i_ldlen = (0, _Types.L)(new _il.ILInstr(84, "I_ldlen"), (0, _Types.L)(new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(5, "DT_I4")), (0, _Types.L)()));
exports.i_ldlen = i_ldlen;
const TypeValueInfo = (0, _Types.declare)(function TypeValueInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TypeValueInfo = TypeValueInfo;
const ExprValueInfo = (0, _Types.declare)(function ExprValueInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ExprValueInfo = ExprValueInfo;
const ValInfo = (0, _Types.declare)(function ValInfo(arg1, arg2) {
  this.ValMakesNoCriticalTailcalls = arg1;
  this.ValExprInfo = arg2;
}, _Types.Record);
exports.ValInfo = ValInfo;
const ValInfos = (0, _Types.declare)(function ValInfos(entries) {
  const $this$$1 = this;
  $this$$1.valInfoTable = new _Util.Lazy(function () {
    const t = (0, _TastOps.ValHash$00601$$$Create)();
    (0, _Seq.iterate)(function (forLoopVar) {
      (0, _TastOps.ValHash$00601$$Add$$1EAE66D0)(t, (0, _tast.ValRef$$get_Deref)(forLoopVar[0]), [forLoopVar[0], forLoopVar[1]]);
    }, entries);
    return t;
  });
  $this$$1.valInfosForFslib = new _Util.Lazy(function () {
    const dict = (0, _Map.createMutable)([], {
      Compare($x$$2, $y$$3) {
        return $x$$2.CompareTo($y$$3);
      }

    });
    (0, _Seq.iterate)(function (p) {
      const vref$$1 = p[0];
      const _x = p[1];
      const vkey = (0, _tast.Val$$GetLinkagePartialKey)((0, _tast.ValRef$$get_Deref)(vref$$1));
      const value = dict.set(vkey, p);
    }, entries);
    return dict;
  });
});
exports.ValInfos = ValInfos;

function ValInfos$$$$002Ector$$2FE4CE46(entries) {
  return this != null ? ValInfos.call(this, entries) : new ValInfos(entries);
}

function ValInfos$$get_Entries(x$$1) {
  return (0, _TastOps.ValHash$00601$$get_Values)(x$$1.valInfoTable.Value);
}

function ValInfos$$Map$$Z6E46560A(x$$2, f) {
  return ValInfos$$$$002Ector$$2FE4CE46((0, _Seq.map)(f, ValInfos$$get_Entries(x$$2)));
}

function ValInfos$$Filter$$Z50890DAB(x$$3, f$$1) {
  return ValInfos$$$$002Ector$$2FE4CE46((0, _Seq.filter)(f$$1, ValInfos$$get_Entries(x$$3)));
}

function ValInfos$$TryFind$$7D2DE7B4(x$$4, v) {
  return (0, _TastOps.ValHash$00601$$TryFind$$7D0CFEA5)(x$$4.valInfoTable.Value, (0, _tast.ValRef$$get_Deref)(v));
}

function ValInfos$$TryFindForFslib$$7D2DE7B4(x$$5, v$$1) {
  return (0, _Util.tryGetValue)(x$$5.valInfosForFslib.Value, (0, _tast.Val$$GetLinkagePartialKey)((0, _tast.ValRef$$get_Deref)(v$$1)), null);
}

const ModuleInfo = (0, _Types.declare)(function ModuleInfo(arg1, arg2) {
  this.ValInfos = arg1;
  this.ModuleOrNamespaceInfos = arg2;
}, _Types.Record);
exports.ModuleInfo = ModuleInfo;
const Summary$00601 = (0, _Types.declare)(function Summary$00601(arg1, arg2, arg3, arg4, arg5) {
  this.Info = arg1;
  this.FunctionSize = arg2 | 0;
  this.TotalSize = arg3 | 0;
  this.HasEffect = arg4;
  this.MightMakeCriticalTailcall = arg5;
}, _Types.Record);
exports.Summary$00601 = Summary$00601;

function SizeOfValueInfos(arr) {
  if (arr.length <= 0) {
    return 0;
  } else {
    return (0, _Util.max)(_Util.comparePrimitives, 0, SizeOfValueInfo(arr[0])) | 0;
  }
}

function SizeOfValueInfo(x$$6) {
  var $target$$61, vinfos;

  switch (x$$6.tag) {
    case 6:
      $target$$61 = 1;
      break;

    case 0:
      $target$$61 = 2;
      break;

    case 2:
      $target$$61 = 3;
      break;

    case 3:
      $target$$61 = 4;
      vinfos = x$$6.fields[0];
      break;

    case 4:
      $target$$61 = 4;
      vinfos = x$$6.fields[1];
      break;

    case 5:
      $target$$61 = 4;
      vinfos = x$$6.fields[1];
      break;

    case 7:
      $target$$61 = 5;
      break;

    case 8:
      $target$$61 = 6;
      break;

    default:
      $target$$61 = 0;
  }

  switch ($target$$61) {
    case 0:
      {
        const vdepth = x$$6.fields[0] | 0;
        const _v = x$$6.fields[1];
        return vdepth | 0;
      }

    case 1:
      {
        const _x$$1 = x$$6.fields[0];
        return 1;
      }

    case 2:
      {
        return 1;
      }

    case 3:
      {
        const vinfo = x$$6.fields[1];
        const _vr = x$$6.fields[0];
        return SizeOfValueInfo(vinfo) + 1 | 0;
      }

    case 4:
      {
        return 1 + SizeOfValueInfos(vinfos) | 0;
      }

    case 5:
      {
        const _lambdaId = x$$6.fields[0];
        const _expr$0027 = x$$6.fields[3];
        const _ety = x$$6.fields[4];

        const _bsize = x$$6.fields[2] | 0;

        const _arities = x$$6.fields[1] | 0;

        return 1;
      }

    case 6:
      {
        const _size = x$$6.fields[0] | 0;

        return 1;
      }
  }
}

function MakeValueInfoWithCachedSize(vdepth$$1, v$$2) {
  MakeValueInfoWithCachedSize: while (true) {
    if (v$$2.tag === 1) {
      const v$$3 = v$$2.fields[1];
      vdepth$$1 = vdepth$$1;
      v$$2 = v$$3;
      continue MakeValueInfoWithCachedSize;
    } else if (vdepth$$1 > 5) {
      return new ExprValueInfo(1, "SizeValue", vdepth$$1, v$$2);
    } else {
      return v$$2;
    }
  }
}

function MakeSizedValueInfo(v$$4) {
  const vdepth$$2 = SizeOfValueInfo(v$$4) | 0;
  return MakeValueInfoWithCachedSize(vdepth$$2, v$$4);
}

function BoundValueInfoBySize(vinfo$$1) {
  const bound = function bound(depth, x$$7) {
    if (depth < 0) {
      return new ExprValueInfo(0, "UnknownValue");
    } else {
      switch (x$$7.tag) {
        case 2:
          {
            const vr = x$$7.fields[0];
            const vinfo$$3 = x$$7.fields[1];
            return new ExprValueInfo(2, "ValValue", vr, bound(depth - 1, vinfo$$3));
          }

        case 3:
          {
            const vinfos$$1 = x$$7.fields[0];
            return new ExprValueInfo(3, "TupleValue", (0, _Array.map)((0, _Util.partialApply)(1, bound, [depth - 1]), vinfos$$1, Array));
          }

        case 4:
          {
            const vinfos$$2 = x$$7.fields[1];
            const tcref = x$$7.fields[0];
            return new ExprValueInfo(4, "RecdValue", tcref, (0, _Array.map)((0, _Util.partialApply)(1, bound, [depth - 1]), vinfos$$2, Array));
          }

        case 5:
          {
            const vinfos$$3 = x$$7.fields[1];
            const ucr = x$$7.fields[0];
            return new ExprValueInfo(5, "UnionCaseValue", ucr, (0, _Array.map)((0, _Util.partialApply)(1, bound, [depth - 1]), vinfos$$3, Array));
          }

        case 6:
          {
            return x$$7;
          }

        case 0:
          {
            return x$$7;
          }

        case 7:
          {
            const _lambdaId$$1 = x$$7.fields[0];
            const _expr$0027$$1 = x$$7.fields[3];
            const _ety$$1 = x$$7.fields[4];

            const _bsize$$1 = x$$7.fields[2] | 0;

            const _arities$$1 = x$$7.fields[1] | 0;

            return x$$7;
          }

        case 8:
          {
            const _size$$1 = x$$7.fields[0] | 0;

            return x$$7;
          }

        default:
          {
            const vinfo$$2 = x$$7.fields[1];
            const vdepth$$3 = x$$7.fields[0] | 0;

            if (vdepth$$3 < depth) {
              return x$$7;
            } else {
              return MakeSizedValueInfo(bound(depth, vinfo$$2));
            }
          }
      }
    }
  };

  const maxDepth = 6;
  const trimDepth = 3;
  const vdepth$$4 = SizeOfValueInfo(vinfo$$1) | 0;

  if (vdepth$$4 > maxDepth) {
    return MakeSizedValueInfo(bound(trimDepth, vinfo$$1));
  } else {
    return MakeValueInfoWithCachedSize(vdepth$$4, vinfo$$1);
  }
}

const OptimizationSettings = (0, _Types.declare)(function OptimizationSettings(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12) {
  this.abstractBigTargets = arg1;
  this.jitOptUser = arg2;
  this.localOptUser = arg3;
  this.crossModuleOptUser = arg4;
  this.bigTargetSize = arg5 | 0;
  this.veryBigExprSize = arg6 | 0;
  this.lambdaInlineThreshold = arg7 | 0;
  this.reportingPhase = arg8;
  this.reportNoNeedToTailcall = arg9;
  this.reportFunctionSizes = arg10;
  this.reportHasEffect = arg11;
  this.reportTotalSizes = arg12;
}, _Types.Record);
exports.OptimizationSettings = OptimizationSettings;

function OptimizationSettings$$$get_Defaults() {
  return new OptimizationSettings(false, null, null, null, 100, 3000, 6, false, false, false, false, false);
}

function OptimizationSettings$$jitOpt(x$$8) {
  if (x$$8.jitOptUser == null) {
    return true;
  } else {
    const f$$2 = x$$8.jitOptUser;
    return f$$2;
  }
}

function OptimizationSettings$$localOpt(x$$9) {
  if (x$$9.localOptUser == null) {
    return true;
  } else {
    const f$$3 = x$$9.localOptUser;
    return f$$3;
  }
}

function OptimizationSettings$$crossModuleOpt(x$$10) {
  if (OptimizationSettings$$localOpt(x$$10)) {
    if (x$$10.crossModuleOptUser == null) {
      return true;
    } else {
      const f$$4 = x$$10.crossModuleOptUser;
      return f$$4;
    }
  } else {
    return false;
  }
}

function OptimizationSettings$$KeepOptimizationValues(x$$11) {
  return OptimizationSettings$$crossModuleOpt(x$$11);
}

function OptimizationSettings$$InlineLambdas(x$$12) {
  return OptimizationSettings$$localOpt(x$$12);
}

function OptimizationSettings$$EliminateUnusedBindings(x$$13) {
  return OptimizationSettings$$localOpt(x$$13);
}

function OptimizationSettings$$EliminateTryCatchAndTryFinally(x$$14) {
  return false;
}

function OptimizationSettings$$EliminateSequential(x$$15) {
  return OptimizationSettings$$localOpt(x$$15);
}

function OptimizationSettings$$EliminateSwitch(x$$16) {
  return OptimizationSettings$$localOpt(x$$16);
}

function OptimizationSettings$$EliminateRecdFieldGet(x$$17) {
  return OptimizationSettings$$localOpt(x$$17);
}

function OptimizationSettings$$EliminateTupleFieldGet(x$$18) {
  return OptimizationSettings$$localOpt(x$$18);
}

function OptimizationSettings$$EliminatUnionCaseFieldGet(x$$19) {
  return OptimizationSettings$$localOpt(x$$19);
}

function OptimizationSettings$$EliminateImmediatelyConsumedLocals(x$$20) {
  return OptimizationSettings$$localOpt(x$$20);
}

function OptimizationSettings$$ExpandStructrualValues(x$$21) {
  return OptimizationSettings$$localOpt(x$$21);
}

const cenv = (0, _Types.declare)(function cenv(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.g = arg1;
  this.TcVal = arg2;
  this.amap = arg3;
  this.optimizing = arg4;
  this.scope = arg5;
  this.localInternalVals = arg6;
  this.settings = arg7;
  this.emitTailcalls = arg8;
  this.casApplied = arg9;
}, _Types.Record);
exports.cenv = cenv;
const IncrementalOptimizationEnv = (0, _Types.declare)(function IncrementalOptimizationEnv(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this.latestBoundId = arg1;
  this.dontInline = arg2;
  this.dontSplitVars = arg3;
  this.inLoop = arg4;
  this.functionVal = arg5;
  this.typarInfos = arg6;
  this.localExternalVals = arg7;
  this.globalModuleInfos = arg8;
}, _Types.Record);
exports.IncrementalOptimizationEnv = IncrementalOptimizationEnv;

function IncrementalOptimizationEnv$$$get_Empty() {
  return new IncrementalOptimizationEnv(null, (0, _zset.ZsetModule$$$empty)(_lib.Int64$$$order), (0, _TastOps.ValMap$00601$$$get_Empty)(), false, null, (0, _Types.L)(), (0, _illib.Map$00602$002Eget_Empty$002EStatic)(), (0, _illib.Map$00602$002Eget_Empty$002EStatic)());
}

function IsPartialExprVal(x$$22) {
  IsPartialExprVal: while (true) {
    var $target$$62, args, a;

    switch (x$$22.tag) {
      case 3:
        $target$$62 = 1;
        args = x$$22.fields[0];
        break;

      case 4:
        $target$$62 = 1;
        args = x$$22.fields[1];
        break;

      case 5:
        $target$$62 = 1;
        args = x$$22.fields[1];
        break;

      case 6:
      case 7:
      case 8:
        $target$$62 = 2;
        break;

      case 2:
        $target$$62 = 3;
        a = x$$22.fields[1];
        break;

      case 1:
        $target$$62 = 3;
        a = x$$22.fields[1];
        break;

      default:
        $target$$62 = 0;
    }

    switch ($target$$62) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return args.some(IsPartialExprVal);
        }

      case 2:
        {
          return false;
        }

      case 3:
        {
          x$$22 = a;
          continue IsPartialExprVal;
        }
    }
  }
}

function CheckInlineValueIsComplete(v$$5, res) {
  if ((0, _tast.Val$$get_MustInline)(v$$5) ? IsPartialExprVal(res) : false) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$optValueMarkedInlineButIncomplete$$Z721C83C5)((0, _tast.Val$$get_DisplayName)(v$$5)), (0, _tast.Val$$get_Range)(v$$5)));
  }
}

function check(vref$$2, res$$1) {
  CheckInlineValueIsComplete((0, _tast.ValRef$$get_Deref)(vref$$2), res$$1.ValExprInfo);
  return [vref$$2, res$$1];
}

const EmptyModuleInfo = (0, _illib.notlazy)(new ModuleInfo(ValInfos$$$$002Ector$$2FE4CE46([]), (0, _Map.empty)({
  Compare: _Util.comparePrimitives
})));
exports.EmptyModuleInfo = EmptyModuleInfo;

function UnionOptimizationInfos(minfos) {
  return (0, _illib.notlazy)(new ModuleInfo(ValInfos$$$$002Ector$$2FE4CE46((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (minfo) {
      return ValInfos$$get_Entries(minfo.Value.ValInfos);
    }, minfos);
  })), (0, _illib.NameMapModule$$$union)(UnionOptimizationInfos, (0, _Seq.map)(function mapping(m) {
    return m.Value.ModuleOrNamespaceInfos;
  }, minfos))));
}

function FindOrCreateModuleInfo(n, ss) {
  const matchValue$$3 = (0, _Map.FSharpMap$$TryFind$$2B595)(ss, n);

  if (matchValue$$3 == null) {
    return EmptyModuleInfo;
  } else {
    const res$$2 = matchValue$$3;
    return res$$2;
  }
}

function FindOrCreateGlobalModuleInfo(n$$1, ss$$1) {
  const matchValue$$4 = (0, _Map.FSharpMap$$TryFind$$2B595)(ss$$1, n$$1);

  if (matchValue$$4 == null) {
    return EmptyModuleInfo;
  } else {
    const res$$3 = matchValue$$4;
    return res$$3;
  }
}

function BindValueInSubModuleFSharpCore(mp, i, v$$6, vval, ss$$2) {
  if (i < mp.length) {
    return new ModuleInfo(ss$$2.ValInfos, BindValueInModuleForFslib(mp[i], mp, i + 1, v$$6, vval, ss$$2.ModuleOrNamespaceInfos));
  } else {
    return new ModuleInfo(ValInfos$$$$002Ector$$2FE4CE46((0, _Seq.append)(ValInfos$$get_Entries(ss$$2.ValInfos), (0, _Seq.singleton)([(0, _tast.mkLocalValRef)(v$$6), vval]))), ss$$2.ModuleOrNamespaceInfos);
  }
}

function BindValueInModuleForFslib(n$$2, mp$$1, i$$1, v$$7, vval$$1, ss$$3) {
  const old = FindOrCreateModuleInfo(n$$2, ss$$3);
  return (0, _Map.add)(n$$2, (0, _illib.notlazy)(BindValueInSubModuleFSharpCore(mp$$1, i$$1, v$$7, vval$$1, old.Value)), ss$$3);
}

function BindValueInGlobalModuleForFslib(n$$3, mp$$2, i$$2, v$$8, vval$$2, ss$$4) {
  const old$$1 = FindOrCreateGlobalModuleInfo(n$$3, ss$$4);
  return (0, _Map.FSharpMap$$Add$$5BDDA1)(ss$$4, n$$3, (0, _illib.notlazy)(BindValueInSubModuleFSharpCore(mp$$2, i$$2, v$$8, vval$$2, old$$1.Value)));
}

function BindValueForFslib(nlvref, v$$9, vval$$3, env) {
  return new IncrementalOptimizationEnv(env.latestBoundId, env.dontInline, env.dontSplitVars, env.inLoop, env.functionVal, env.typarInfos, env.localExternalVals, BindValueInGlobalModuleForFslib((0, _tast.NonLocalValOrMemberRef$$get_AssemblyName)(nlvref), (0, _tast.NonLocalEntityRef$$get_Path)(nlvref.EnclosingEntity.nlr), 0, v$$9, vval$$3, env.globalModuleInfos));
}

const UnknownValInfo = new ValInfo(false, new ExprValueInfo(0, "UnknownValue"));
exports.UnknownValInfo = UnknownValInfo;

function mkValInfo(info, v$$10) {
  return new ValInfo((0, _tast.Val$$get_MakesNoCriticalTailcalls)(v$$10), info.Info);
}

function BindInternalLocalVal(cenv$$1, v$$11, vval$$4, env$$1) {
  const vval$$5 = (0, _tast.Val$$get_IsMutable)(v$$11) ? UnknownValInfo : vval$$4;

  if (vval$$5.ValExprInfo.tag === 0) {
    return env$$1;
  } else {
    cenv$$1.localInternalVals.set((0, _tast.Val$$get_Stamp)(v$$11), vval$$5);
    return env$$1;
  }
}

function BindExternalLocalVal(cenv$$2, v$$12, vval$$6, env$$2) {
  const vval$$7 = (0, _tast.Val$$get_IsMutable)(v$$12) ? new ValInfo(vval$$6.ValMakesNoCriticalTailcalls, new ExprValueInfo(0, "UnknownValue")) : vval$$6;
  const env$$3 = vval$$7.ValExprInfo.tag === 0 ? env$$2 : new IncrementalOptimizationEnv(env$$2.latestBoundId, env$$2.dontInline, env$$2.dontSplitVars, env$$2.inLoop, env$$2.functionVal, env$$2.typarInfos, (0, _Map.FSharpMap$$Add$$5BDDA1)(env$$2.localExternalVals, (0, _tast.Val$$get_Stamp)(v$$12), vval$$7), env$$2.globalModuleInfos);
  let env$$4;

  if ((0, _TcGlobals.TcGlobals$$get_compilingFslib)(cenv$$2.g)) {
    const matchValue$$7 = (0, _TastOps.tryRescopeVal)((0, _TcGlobals.TcGlobals$$get_fslibCcu)(cenv$$2.g), (0, _TastOps.Remap$$$get_Empty)(), v$$12);

    if (matchValue$$7 == null) {
      env$$4 = env$$3;
    } else {
      const vref$$3 = matchValue$$7;
      env$$4 = BindValueForFslib(vref$$3.nlr, v$$12, vval$$7, env$$3);
    }
  } else {
    env$$4 = env$$3;
  }

  return env$$4;
}

function BindValsInModuleOrNamespace(cenv$$3, mval, env$$5) {
  const mval$$1 = mval.Value;
  const env$$7 = (0, _illib.NameMapModule$$$foldBackRange)(function f$$5(mval$$2, env$$6) {
    return BindValsInModuleOrNamespace(cenv$$3, mval$$2, env$$6);
  }, mval$$1.ModuleOrNamespaceInfos, env$$5);
  const env$$9 = (0, _Seq.fold)(function folder(env$$8, tupledArg) {
    return BindExternalLocalVal(cenv$$3, (0, _tast.ValRef$$get_Deref)(tupledArg[0]), tupledArg[1], env$$8);
  }, env$$7, ValInfos$$get_Entries(mval$$1.ValInfos));
  return env$$9;
}

function BindTypeVar(tyv, typeinfo, env$$10) {
  return new IncrementalOptimizationEnv(env$$10.latestBoundId, env$$10.dontInline, env$$10.dontSplitVars, env$$10.inLoop, env$$10.functionVal, (0, _Types.L)([tyv, typeinfo], env$$10.typarInfos), env$$10.localExternalVals, env$$10.globalModuleInfos);
}

function BindTypeVarsToUnknown(tps, env$$11) {
  if (tps.tail == null) {
    return env$$11;
  } else {
    const nms = (0, _TastOps.PrettyTypes$$$PrettyTyparNames)(function (_arg1) {
      return true;
    }, (0, _List.map)(function mapping$$1(tupledArg$$1) {
      return (0, _tast.Typar$$get_Name)(tupledArg$$1[0]);
    }, env$$11.typarInfos), tps);
    (0, _List.iterate2)(function action(tp$$1, nm) {
      if ((0, _TastOps.PrettyTypes$$$NeedsPrettyTyparName)(tp$$1)) {
        tp$$1.typar_id = (0, _ast.ident)(nm, (0, _tast.Typar$$get_Range)(tp$$1));
      }
    }, tps, nms);
    return (0, _List.fold)(function (sofar, arg) {
      return BindTypeVar(arg, new TypeValueInfo(0, "UnknownTypeValue"), sofar);
    }, env$$11, tps);
  }
}

function BindCcu(ccu, mval$$3, env$$12, _g) {
  return new IncrementalOptimizationEnv(env$$12.latestBoundId, env$$12.dontInline, env$$12.dontSplitVars, env$$12.inLoop, env$$12.functionVal, env$$12.typarInfos, env$$12.localExternalVals, (0, _Map.FSharpMap$$Add$$5BDDA1)(env$$12.globalModuleInfos, (0, _tast.CcuThunk$$get_AssemblyName)(ccu), mval$$3));
}

function GetInfoForLocalValue(cenv$$4, env$$13, v$$14, m$$1) {
  if ((0, _tast.Val$$get_IsDispatchSlot)(v$$14)) {
    return UnknownValInfo;
  } else {
    const patternInput = (0, _Util.tryGetValue)(cenv$$4.localInternalVals, (0, _tast.Val$$get_Stamp)(v$$14), null);

    if (patternInput[0]) {
      return patternInput[1];
    } else {
      const matchValue$$8 = (0, _Map.FSharpMap$$TryFind$$2B595)(env$$13.localExternalVals, (0, _tast.Val$$get_Stamp)(v$$14));

      if (matchValue$$8 == null) {
        if ((0, _tast.Val$$get_MustInline)(v$$14)) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$optValueMarkedInlineButWasNotBoundInTheOptEnv$$Z721C83C5)((0, _TastOps.fullDisplayTextOfValRef)((0, _tast.mkLocalValRef)(v$$14))), m$$1));
        }

        return UnknownValInfo;
      } else {
        const vval$$9 = matchValue$$8;
        return vval$$9;
      }
    }
  }
}

function TryGetInfoForCcu(env$$14, ccu$$1) {
  return (0, _Map.FSharpMap$$TryFind$$2B595)(env$$14.globalModuleInfos, (0, _tast.CcuThunk$$get_AssemblyName)(ccu$$1));
}

function TryGetInfoForEntity(sv, n$$4) {
  const matchValue$$9 = (0, _Map.FSharpMap$$TryFind$$2B595)(sv.ModuleOrNamespaceInfos, n$$4);

  if (matchValue$$9 == null) {
    return null;
  } else {
    const info$$1 = matchValue$$9;
    return info$$1.Value;
  }
}

function TryGetInfoForPath(sv$$1, p$$1, i$$3) {
  TryGetInfoForPath: while (true) {
    if (i$$3 >= p$$1.length) {
      return sv$$1;
    } else {
      const matchValue$$10 = TryGetInfoForEntity(sv$$1, p$$1[i$$3]);

      if (matchValue$$10 == null) {
        return null;
      } else {
        const info$$2 = matchValue$$10;
        sv$$1 = info$$2;
        p$$1 = p$$1;
        i$$3 = i$$3 + 1;
        continue TryGetInfoForPath;
      }
    }
  }
}

function TryGetInfoForNonLocalEntityRef(env$$15, nleref) {
  const matchValue$$11 = TryGetInfoForCcu(env$$15, (0, _tast.NonLocalEntityRef$$get_Ccu)(nleref));

  if (matchValue$$11 == null) {
    return null;
  } else {
    const ccuinfo = matchValue$$11;
    return TryGetInfoForPath(ccuinfo.Value, (0, _tast.NonLocalEntityRef$$get_Path)(nleref), 0);
  }
}

function GetInfoForNonLocalVal(cenv$$5, env$$16, vref$$4) {
  if ((0, _tast.ValRef$$get_IsDispatchSlot)(vref$$4)) {
    return UnknownValInfo;
  } else if (OptimizationSettings$$crossModuleOpt(cenv$$5.settings) ? true : (0, _tast.ValRef$$get_MustInline)(vref$$4)) {
    const matchValue$$12 = TryGetInfoForNonLocalEntityRef(env$$16, vref$$4.nlr.EnclosingEntity.nlr);

    if (matchValue$$12 == null) {
      return UnknownValInfo;
    } else {
      const structInfo = matchValue$$12;
      const matchValue$$13 = ValInfos$$TryFind$$7D2DE7B4(structInfo.ValInfos, vref$$4);

      if (matchValue$$13 == null) {
        if ((0, _TcGlobals.TcGlobals$$get_compilingFslib)(cenv$$5.g)) {
          const matchValue$$14 = ValInfos$$TryFindForFslib$$7D2DE7B4(structInfo.ValInfos, vref$$4);

          if (matchValue$$14[0]) {
            return matchValue$$14[1][1];
          } else {
            return UnknownValInfo;
          }
        } else {
          return UnknownValInfo;
        }
      } else {
        const ninfo = matchValue$$13;
        return ninfo[1];
      }
    }
  } else {
    return UnknownValInfo;
  }
}

function GetInfoForVal(cenv$$6, env$$17, m$$2, vref$$5) {
  const res$$5 = (0, _tast.ValRef$$get_IsLocalRef)(vref$$5) ? GetInfoForLocalValue(cenv$$6, env$$17, vref$$5.binding, m$$2) : GetInfoForNonLocalVal(cenv$$6, env$$17, vref$$5);
  check(vref$$5, res$$5);
  return res$$5;
}

function stripValue(_arg1$$1) {
  stripValue: while (true) {
    switch (_arg1$$1.tag) {
      case 2:
        {
          const details = _arg1$$1.fields[1];
          _arg1$$1 = details;
          continue stripValue;
        }

      case 1:
        {
          const details$$1 = _arg1$$1.fields[1];
          _arg1$$1 = details$$1;
          continue stripValue;
        }

      default:
        {
          const vinfo$$4 = _arg1$$1;
          return vinfo$$4;
        }
    }
  }
}

function $007CStripConstValue$007C_$007C(ev) {
  const matchValue$$15 = stripValue(ev);

  if (matchValue$$15.tag === 6) {
    const c = matchValue$$15.fields[0];
    return c;
  } else {
    return null;
  }
}

function $007CStripLambdaValue$007C_$007C(ev$$1) {
  const matchValue$$16 = stripValue(ev$$1);

  if (matchValue$$16.tag === 7) {
    const ty = matchValue$$16.fields[4];
    const sz = matchValue$$16.fields[2] | 0;
    const id = matchValue$$16.fields[0];
    const expr = matchValue$$16.fields[3];
    const arity = matchValue$$16.fields[1] | 0;
    return [id, arity, sz, expr, ty];
  } else {
    return null;
  }
}

function destTupleValue(ev$$2) {
  const matchValue$$17 = stripValue(ev$$2);

  if (matchValue$$17.tag === 3) {
    const info$$3 = matchValue$$17.fields[0];
    return info$$3;
  } else {
    return null;
  }
}

function destRecdValue(ev$$3) {
  const matchValue$$18 = stripValue(ev$$3);

  if (matchValue$$18.tag === 4) {
    const info$$4 = matchValue$$18.fields[1];
    const _tcref = matchValue$$18.fields[0];
    return info$$4;
  } else {
    return null;
  }
}

function $007CStripUnionCaseValue$007C_$007C(ev$$4) {
  const matchValue$$19 = stripValue(ev$$4);

  if (matchValue$$19.tag === 5) {
    const info$$5 = matchValue$$19.fields[1];
    const c$$1 = matchValue$$19.fields[0];
    return [c$$1, info$$5];
  } else {
    return null;
  }
}

function mkBoolVal(g, n$$5) {
  return new ExprValueInfo(6, "ConstValue", new _tast.Const(0, "Bool", n$$5), (0, _TcGlobals.TcGlobals$$get_bool_ty)(g));
}

function mkInt8Val(g$$1, n$$6) {
  return new ExprValueInfo(6, "ConstValue", new _tast.Const(1, "SByte", n$$6), (0, _TcGlobals.TcGlobals$$get_sbyte_ty)(g$$1));
}

function mkInt16Val(g$$2, n$$7) {
  return new ExprValueInfo(6, "ConstValue", new _tast.Const(3, "Int16", n$$7), (0, _TcGlobals.TcGlobals$$get_int16_ty)(g$$2));
}

function mkInt32Val(g$$3, n$$8) {
  return new ExprValueInfo(6, "ConstValue", new _tast.Const(5, "Int32", n$$8), (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$3));
}

function mkInt64Val(g$$4, n$$9) {
  return new ExprValueInfo(6, "ConstValue", new _tast.Const(7, "Int64", n$$9), (0, _TcGlobals.TcGlobals$$get_int64_ty)(g$$4));
}

function mkUInt8Val(g$$5, n$$10) {
  return new ExprValueInfo(6, "ConstValue", new _tast.Const(2, "Byte", n$$10), (0, _TcGlobals.TcGlobals$$get_byte_ty)(g$$5));
}

function mkUInt16Val(g$$6, n$$11) {
  return new ExprValueInfo(6, "ConstValue", new _tast.Const(4, "UInt16", n$$11), (0, _TcGlobals.TcGlobals$$get_uint16_ty)(g$$6));
}

function mkUInt32Val(g$$7, n$$12) {
  return new ExprValueInfo(6, "ConstValue", new _tast.Const(6, "UInt32", n$$12), (0, _TcGlobals.TcGlobals$$get_uint32_ty)(g$$7));
}

function mkUInt64Val(g$$8, n$$13) {
  return new ExprValueInfo(6, "ConstValue", new _tast.Const(8, "UInt64", n$$13), (0, _TcGlobals.TcGlobals$$get_uint64_ty)(g$$8));
}

function $007CStripInt32Value$007C_$007C(_arg1$$2) {
  var $target$$63, n$$14;
  const activePatternResult50393 = $007CStripConstValue$007C_$007C(_arg1$$2);

  if (activePatternResult50393 != null) {
    if (activePatternResult50393.tag === 5) {
      $target$$63 = 0;
      n$$14 = activePatternResult50393.fields[0];
    } else {
      $target$$63 = 1;
    }
  } else {
    $target$$63 = 1;
  }

  switch ($target$$63) {
    case 0:
      {
        return n$$14;
      }

    case 1:
      {
        return null;
      }
  }
}

function MakeValueInfoForValue(g$$9, m$$3, vref$$6, vinfo$$5) {
  g$$9;
  m$$3;
  return BoundValueInfoBySize(new ExprValueInfo(2, "ValValue", vref$$6, vinfo$$5));
}

function MakeValueInfoForRecord(tcref$$1, argvals) {
  return BoundValueInfoBySize(new ExprValueInfo(4, "RecdValue", tcref$$1, argvals));
}

function MakeValueInfoForTuple(argvals$$1) {
  return BoundValueInfoBySize(new ExprValueInfo(3, "TupleValue", argvals$$1));
}

function MakeValueInfoForUnionCase(cspec, argvals$$2) {
  return BoundValueInfoBySize(new ExprValueInfo(5, "UnionCaseValue", cspec, argvals$$2));
}

function MakeValueInfoForConst(c$$2, ty$$1) {
  return new ExprValueInfo(6, "ConstValue", c$$2, ty$$1);
}

function mkAssemblyCodeValueInfo(g$$10, instrs, argvals$$3, tys) {
  var n$$34, a$$185, n$$32, a$$183, n$$30, a$$181, n$$28, a$$179, n$$26, a$$177, n$$24, a$$175, n$$22, a$$173, n$$20, a$$171, n$$43, a$$194, n$$41, a$$192, n$$39, a$$190, n$$37, a$$188, n$$52, a$$203, n$$50, a$$201, n$$48, a$$199, n$$46, a$$197, ty$$22, b$$70, a$$168, ty$$20, b$$68, a$$166, ty$$18, b$$66, a$$164, ty$$16, a$$154, ty$$14, a$$144, ty$$12, a$$134, ty$$10, a$$124, ty$$8, a$$114, ty$$6, a$$104, ty$$4, a$$94, ty$$2, a$$1;
  const matchValue$$20 = [instrs, argvals$$3, tys];
  var $target$$64, t1, t2, t1$$1, t2$$1, a$$22, b$$20, a$$33, b$$31, a$$44, b$$42, a$$55, b$$53, a$$66, a$$77, a$$83, b$$64, a$$84, b$$65, a$$85, ty$$3;

  if (matchValue$$20[0].tail != null) {
    if (matchValue$$20[0].head.tag === 0) {
      if (matchValue$$20[0].tail.tail == null) {
        if (matchValue$$20[1].tail != null) {
          if (matchValue$$20[1].tail.tail != null) {
            if (matchValue$$20[1].tail.tail.tail == null) {
              $target$$64 = 0;
              t1 = matchValue$$20[1].head;
              t2 = matchValue$$20[1].tail.head;
            } else {
              $target$$64 = 11;
            }
          } else {
            $target$$64 = 11;
          }
        } else {
          $target$$64 = 11;
        }
      } else {
        $target$$64 = 11;
      }
    } else if (matchValue$$20[0].head.tag === 22) {
      if (matchValue$$20[0].tail.tail == null) {
        if (matchValue$$20[1].tail != null) {
          if (matchValue$$20[1].tail.tail != null) {
            if (matchValue$$20[1].tail.tail.tail == null) {
              $target$$64 = 1;
              t1$$1 = matchValue$$20[1].head;
              t2$$1 = matchValue$$20[1].tail.head;
            } else {
              $target$$64 = 11;
            }
          } else {
            $target$$64 = 11;
          }
        } else {
          $target$$64 = 11;
        }
      } else {
        $target$$64 = 11;
      }
    } else if (matchValue$$20[0].head.tag === 14) {
      if (matchValue$$20[0].tail.tail == null) {
        if (matchValue$$20[1].tail != null) {
          if (matchValue$$20[1].tail.tail != null) {
            if (matchValue$$20[1].tail.tail.tail == null) {
              $target$$64 = 2;
              a$$22 = matchValue$$20[1].head;
              b$$20 = matchValue$$20[1].tail.head;
            } else {
              $target$$64 = 11;
            }
          } else {
            $target$$64 = 11;
          }
        } else {
          $target$$64 = 11;
        }
      } else {
        $target$$64 = 11;
      }
    } else if (matchValue$$20[0].head.tag === 3) {
      if (matchValue$$20[0].tail.tail == null) {
        if (matchValue$$20[1].tail != null) {
          if (matchValue$$20[1].tail.tail != null) {
            if (matchValue$$20[1].tail.tail.tail == null) {
              $target$$64 = 3;
              a$$33 = matchValue$$20[1].head;
              b$$31 = matchValue$$20[1].tail.head;
            } else {
              $target$$64 = 11;
            }
          } else {
            $target$$64 = 11;
          }
        } else {
          $target$$64 = 11;
        }
      } else {
        $target$$64 = 11;
      }
    } else if (matchValue$$20[0].head.tag === 26) {
      if (matchValue$$20[0].tail.tail == null) {
        if (matchValue$$20[1].tail != null) {
          if (matchValue$$20[1].tail.tail != null) {
            if (matchValue$$20[1].tail.tail.tail == null) {
              $target$$64 = 4;
              a$$44 = matchValue$$20[1].head;
              b$$42 = matchValue$$20[1].tail.head;
            } else {
              $target$$64 = 11;
            }
          } else {
            $target$$64 = 11;
          }
        } else {
          $target$$64 = 11;
        }
      } else {
        $target$$64 = 11;
      }
    } else if (matchValue$$20[0].head.tag === 25) {
      if (matchValue$$20[0].tail.tail == null) {
        if (matchValue$$20[1].tail != null) {
          if (matchValue$$20[1].tail.tail != null) {
            if (matchValue$$20[1].tail.tail.tail == null) {
              $target$$64 = 5;
              a$$55 = matchValue$$20[1].head;
              b$$53 = matchValue$$20[1].tail.head;
            } else {
              $target$$64 = 11;
            }
          } else {
            $target$$64 = 11;
          }
        } else {
          $target$$64 = 11;
        }
      } else {
        $target$$64 = 11;
      }
    } else if (matchValue$$20[0].head.tag === 28) {
      if (matchValue$$20[0].tail.tail == null) {
        if (matchValue$$20[1].tail != null) {
          if (matchValue$$20[1].tail.tail == null) {
            $target$$64 = 6;
            a$$66 = matchValue$$20[1].head;
          } else {
            $target$$64 = 11;
          }
        } else {
          $target$$64 = 11;
        }
      } else {
        $target$$64 = 11;
      }
    } else if (matchValue$$20[0].head.tag === 27) {
      if (matchValue$$20[0].tail.tail == null) {
        if (matchValue$$20[1].tail != null) {
          if (matchValue$$20[1].tail.tail == null) {
            $target$$64 = 7;
            a$$77 = matchValue$$20[1].head;
          } else {
            $target$$64 = 11;
          }
        } else {
          $target$$64 = 11;
        }
      } else {
        $target$$64 = 11;
      }
    } else if (matchValue$$20[0].head.tag === 6) {
      if (matchValue$$20[0].tail.tail == null) {
        if (matchValue$$20[1].tail != null) {
          if (matchValue$$20[1].tail.tail != null) {
            if (matchValue$$20[1].tail.tail.tail == null) {
              $target$$64 = 8;
              a$$83 = matchValue$$20[1].head;
              b$$64 = matchValue$$20[1].tail.head;
            } else {
              $target$$64 = 11;
            }
          } else {
            $target$$64 = 11;
          }
        } else {
          $target$$64 = 11;
        }
      } else {
        $target$$64 = 11;
      }
    } else if (matchValue$$20[0].head.tag === 9) {
      if (matchValue$$20[0].tail.tail == null) {
        if (matchValue$$20[1].tail != null) {
          if (matchValue$$20[1].tail.tail != null) {
            if (matchValue$$20[1].tail.tail.tail == null) {
              $target$$64 = 9;
              a$$84 = matchValue$$20[1].head;
              b$$65 = matchValue$$20[1].tail.head;
            } else {
              $target$$64 = 11;
            }
          } else {
            $target$$64 = 11;
          }
        } else {
          $target$$64 = 11;
        }
      } else {
        $target$$64 = 11;
      }
    } else if (matchValue$$20[0].head.tag === 11) {
      if (matchValue$$20[0].head.fields[0].tag === 2) {
        if (matchValue$$20[0].tail.tail == null) {
          if (matchValue$$20[1].tail != null) {
            if (matchValue$$20[1].tail.tail == null) {
              if (matchValue$$20[2].tail != null) {
                if (matchValue$$20[2].tail.tail == null) {
                  if (ty$$2 = matchValue$$20[2].head, (a$$1 = matchValue$$20[1].head, (0, _TastOps.typeEquiv)(g$$10, ty$$2, (0, _TcGlobals.TcGlobals$$get_byte_ty)(g$$10)))) {
                    $target$$64 = 10;
                    a$$85 = matchValue$$20[1].head;
                    ty$$3 = matchValue$$20[2].head;
                  } else {
                    $target$$64 = 11;
                  }
                } else {
                  $target$$64 = 11;
                }
              } else {
                $target$$64 = 11;
              }
            } else {
              $target$$64 = 11;
            }
          } else {
            $target$$64 = 11;
          }
        } else {
          $target$$64 = 11;
        }
      } else {
        $target$$64 = 11;
      }
    } else {
      $target$$64 = 11;
    }
  } else {
    $target$$64 = 11;
  }

  switch ($target$$64) {
    case 0:
      {
        let matchValue$$23;

        const f32 = function f32(x$$26, y$$2) {
          return x$$26 + y$$2;
        };

        const matchValue$$21 = [t1, t2];
        var $target$$65, c1, c2;
        const activePatternResult50425 = $007CStripConstValue$007C_$007C(matchValue$$21[0]);

        if (activePatternResult50425 != null) {
          const activePatternResult50426 = $007CStripConstValue$007C_$007C(matchValue$$21[1]);

          if (activePatternResult50426 != null) {
            $target$$65 = 0;
            c1 = activePatternResult50425;
            c2 = activePatternResult50426;
          } else {
            $target$$65 = 1;
          }
        } else {
          $target$$65 = 1;
        }

        switch ($target$$65) {
          case 0:
            {
              const matchValue$$22 = [c1, c2];
              var $target$$66, a$$3, b$$1, a$$4, b$$2, a$$5, b$$3, a$$6, b$$4, a$$7, b$$5, a$$8, b$$6, a$$9, b$$7, a$$10, b$$8, a$$11, b$$9;

              if (matchValue$$22[0].tag === 0) {
                if (matchValue$$22[1].tag === 0) {
                  $target$$66 = 0;
                  a$$3 = matchValue$$22[0].fields[0];
                  b$$1 = matchValue$$22[1].fields[0];
                } else {
                  $target$$66 = 9;
                }
              } else if (matchValue$$22[0].tag === 5) {
                if (matchValue$$22[1].tag === 5) {
                  $target$$66 = 1;
                  a$$4 = matchValue$$22[0].fields[0];
                  b$$2 = matchValue$$22[1].fields[0];
                } else {
                  $target$$66 = 9;
                }
              } else if (matchValue$$22[0].tag === 7) {
                if (matchValue$$22[1].tag === 7) {
                  $target$$66 = 2;
                  a$$5 = matchValue$$22[0].fields[0];
                  b$$3 = matchValue$$22[1].fields[0];
                } else {
                  $target$$66 = 9;
                }
              } else if (matchValue$$22[0].tag === 3) {
                if (matchValue$$22[1].tag === 3) {
                  $target$$66 = 3;
                  a$$6 = matchValue$$22[0].fields[0];
                  b$$4 = matchValue$$22[1].fields[0];
                } else {
                  $target$$66 = 9;
                }
              } else if (matchValue$$22[0].tag === 1) {
                if (matchValue$$22[1].tag === 1) {
                  $target$$66 = 4;
                  a$$7 = matchValue$$22[0].fields[0];
                  b$$5 = matchValue$$22[1].fields[0];
                } else {
                  $target$$66 = 9;
                }
              } else if (matchValue$$22[0].tag === 2) {
                if (matchValue$$22[1].tag === 2) {
                  $target$$66 = 5;
                  a$$8 = matchValue$$22[0].fields[0];
                  b$$6 = matchValue$$22[1].fields[0];
                } else {
                  $target$$66 = 9;
                }
              } else if (matchValue$$22[0].tag === 4) {
                if (matchValue$$22[1].tag === 4) {
                  $target$$66 = 6;
                  a$$9 = matchValue$$22[0].fields[0];
                  b$$7 = matchValue$$22[1].fields[0];
                } else {
                  $target$$66 = 9;
                }
              } else if (matchValue$$22[0].tag === 6) {
                if (matchValue$$22[1].tag === 6) {
                  $target$$66 = 7;
                  a$$10 = matchValue$$22[0].fields[0];
                  b$$8 = matchValue$$22[1].fields[0];
                } else {
                  $target$$66 = 9;
                }
              } else if (matchValue$$22[0].tag === 8) {
                if (matchValue$$22[1].tag === 8) {
                  $target$$66 = 8;
                  a$$11 = matchValue$$22[0].fields[0];
                  b$$9 = matchValue$$22[1].fields[0];
                } else {
                  $target$$66 = 9;
                }
              } else {
                $target$$66 = 9;
              }

              switch ($target$$66) {
                case 0:
                  {
                    matchValue$$23 = mkBoolVal(g$$10, f32(a$$3 ? 1 : 0, b$$1 ? 1 : 0) !== 0);
                    break;
                  }

                case 1:
                  {
                    matchValue$$23 = mkInt32Val(g$$10, f32(a$$4, b$$2));
                    break;
                  }

                case 2:
                  {
                    matchValue$$23 = mkInt64Val(g$$10, (0, _Long.op_Addition)(a$$5, b$$3));
                    break;
                  }

                case 3:
                  {
                    matchValue$$23 = mkInt16Val(g$$10, function f16(x$$25, y$$1) {
                      return x$$25 + y$$1;
                    }(a$$6, b$$4));
                    break;
                  }

                case 4:
                  {
                    matchValue$$23 = mkInt8Val(g$$10, function f8(x$$24, y) {
                      return x$$24 + y;
                    }(a$$7, b$$5));
                    break;
                  }

                case 5:
                  {
                    matchValue$$23 = mkUInt8Val(g$$10, function fu8(x$$28, y$$4) {
                      return x$$28 + y$$4;
                    }(a$$8, b$$6));
                    break;
                  }

                case 6:
                  {
                    matchValue$$23 = mkUInt16Val(g$$10, function fu16(x$$29, y$$5) {
                      return x$$29 + y$$5;
                    }(a$$9, b$$7));
                    break;
                  }

                case 7:
                  {
                    matchValue$$23 = mkUInt32Val(g$$10, function fu32(x$$30, y$$6) {
                      return x$$30 + y$$6;
                    }(a$$10, b$$8));
                    break;
                  }

                case 8:
                  {
                    matchValue$$23 = mkUInt64Val(g$$10, (0, _Long.op_Addition)(a$$11, b$$9));
                    break;
                  }

                case 9:
                  {
                    matchValue$$23 = null;
                    break;
                  }
              }

              break;
            }

          case 1:
            {
              matchValue$$23 = null;
              break;
            }
        }

        if (matchValue$$23 != null) {
          const res$$6 = matchValue$$23;
          return res$$6;
        } else {
          return new ExprValueInfo(0, "UnknownValue");
        }
      }

    case 1:
      {
        let matchValue$$26;

        const f32$$1 = function f32$$1(x$$34, y$$10) {
          return x$$34 - y$$10;
        };

        const matchValue$$24 = [t1$$1, t2$$1];
        var $target$$67, c1$$1, c2$$1;
        const activePatternResult50425$$1 = $007CStripConstValue$007C_$007C(matchValue$$24[0]);

        if (activePatternResult50425$$1 != null) {
          const activePatternResult50426$$1 = $007CStripConstValue$007C_$007C(matchValue$$24[1]);

          if (activePatternResult50426$$1 != null) {
            $target$$67 = 0;
            c1$$1 = activePatternResult50425$$1;
            c2$$1 = activePatternResult50426$$1;
          } else {
            $target$$67 = 1;
          }
        } else {
          $target$$67 = 1;
        }

        switch ($target$$67) {
          case 0:
            {
              const matchValue$$25 = [c1$$1, c2$$1];
              var $target$$68, a$$13, b$$11, a$$14, b$$12, a$$15, b$$13, a$$16, b$$14, a$$17, b$$15, a$$18, b$$16, a$$19, b$$17, a$$20, b$$18, a$$21, b$$19;

              if (matchValue$$25[0].tag === 0) {
                if (matchValue$$25[1].tag === 0) {
                  $target$$68 = 0;
                  a$$13 = matchValue$$25[0].fields[0];
                  b$$11 = matchValue$$25[1].fields[0];
                } else {
                  $target$$68 = 9;
                }
              } else if (matchValue$$25[0].tag === 5) {
                if (matchValue$$25[1].tag === 5) {
                  $target$$68 = 1;
                  a$$14 = matchValue$$25[0].fields[0];
                  b$$12 = matchValue$$25[1].fields[0];
                } else {
                  $target$$68 = 9;
                }
              } else if (matchValue$$25[0].tag === 7) {
                if (matchValue$$25[1].tag === 7) {
                  $target$$68 = 2;
                  a$$15 = matchValue$$25[0].fields[0];
                  b$$13 = matchValue$$25[1].fields[0];
                } else {
                  $target$$68 = 9;
                }
              } else if (matchValue$$25[0].tag === 3) {
                if (matchValue$$25[1].tag === 3) {
                  $target$$68 = 3;
                  a$$16 = matchValue$$25[0].fields[0];
                  b$$14 = matchValue$$25[1].fields[0];
                } else {
                  $target$$68 = 9;
                }
              } else if (matchValue$$25[0].tag === 1) {
                if (matchValue$$25[1].tag === 1) {
                  $target$$68 = 4;
                  a$$17 = matchValue$$25[0].fields[0];
                  b$$15 = matchValue$$25[1].fields[0];
                } else {
                  $target$$68 = 9;
                }
              } else if (matchValue$$25[0].tag === 2) {
                if (matchValue$$25[1].tag === 2) {
                  $target$$68 = 5;
                  a$$18 = matchValue$$25[0].fields[0];
                  b$$16 = matchValue$$25[1].fields[0];
                } else {
                  $target$$68 = 9;
                }
              } else if (matchValue$$25[0].tag === 4) {
                if (matchValue$$25[1].tag === 4) {
                  $target$$68 = 6;
                  a$$19 = matchValue$$25[0].fields[0];
                  b$$17 = matchValue$$25[1].fields[0];
                } else {
                  $target$$68 = 9;
                }
              } else if (matchValue$$25[0].tag === 6) {
                if (matchValue$$25[1].tag === 6) {
                  $target$$68 = 7;
                  a$$20 = matchValue$$25[0].fields[0];
                  b$$18 = matchValue$$25[1].fields[0];
                } else {
                  $target$$68 = 9;
                }
              } else if (matchValue$$25[0].tag === 8) {
                if (matchValue$$25[1].tag === 8) {
                  $target$$68 = 8;
                  a$$21 = matchValue$$25[0].fields[0];
                  b$$19 = matchValue$$25[1].fields[0];
                } else {
                  $target$$68 = 9;
                }
              } else {
                $target$$68 = 9;
              }

              switch ($target$$68) {
                case 0:
                  {
                    matchValue$$26 = mkBoolVal(g$$10, f32$$1(a$$13 ? 1 : 0, b$$11 ? 1 : 0) !== 0);
                    break;
                  }

                case 1:
                  {
                    matchValue$$26 = mkInt32Val(g$$10, f32$$1(a$$14, b$$12));
                    break;
                  }

                case 2:
                  {
                    matchValue$$26 = mkInt64Val(g$$10, (0, _Long.op_Subtraction)(a$$15, b$$13));
                    break;
                  }

                case 3:
                  {
                    matchValue$$26 = mkInt16Val(g$$10, function f16$$1(x$$33, y$$9) {
                      return x$$33 - y$$9;
                    }(a$$16, b$$14));
                    break;
                  }

                case 4:
                  {
                    matchValue$$26 = mkInt8Val(g$$10, function f8$$1(x$$32, y$$8) {
                      return x$$32 - y$$8;
                    }(a$$17, b$$15));
                    break;
                  }

                case 5:
                  {
                    matchValue$$26 = mkUInt8Val(g$$10, function fu8$$1(x$$36, y$$12) {
                      return x$$36 - y$$12;
                    }(a$$18, b$$16));
                    break;
                  }

                case 6:
                  {
                    matchValue$$26 = mkUInt16Val(g$$10, function fu16$$1(x$$37, y$$13) {
                      return x$$37 - y$$13;
                    }(a$$19, b$$17));
                    break;
                  }

                case 7:
                  {
                    matchValue$$26 = mkUInt32Val(g$$10, function fu32$$1(x$$38, y$$14) {
                      return x$$38 - y$$14;
                    }(a$$20, b$$18));
                    break;
                  }

                case 8:
                  {
                    matchValue$$26 = mkUInt64Val(g$$10, (0, _Long.op_Subtraction)(a$$21, b$$19));
                    break;
                  }

                case 9:
                  {
                    matchValue$$26 = null;
                    break;
                  }
              }

              break;
            }

          case 1:
            {
              matchValue$$26 = null;
              break;
            }
        }

        if (matchValue$$26 != null) {
          const res$$7 = matchValue$$26;
          return res$$7;
        } else {
          return new ExprValueInfo(0, "UnknownValue");
        }
      }

    case 2:
      {
        let matchValue$$29;

        const f32$$2 = function f32$$2(x$$42, y$$18) {
          return x$$42 * y$$18;
        };

        const matchValue$$27 = [a$$22, b$$20];
        var $target$$69, c1$$2, c2$$2;
        const activePatternResult50425$$2 = $007CStripConstValue$007C_$007C(matchValue$$27[0]);

        if (activePatternResult50425$$2 != null) {
          const activePatternResult50426$$2 = $007CStripConstValue$007C_$007C(matchValue$$27[1]);

          if (activePatternResult50426$$2 != null) {
            $target$$69 = 0;
            c1$$2 = activePatternResult50425$$2;
            c2$$2 = activePatternResult50426$$2;
          } else {
            $target$$69 = 1;
          }
        } else {
          $target$$69 = 1;
        }

        switch ($target$$69) {
          case 0:
            {
              const matchValue$$28 = [c1$$2, c2$$2];
              var $target$$70, a$$24, b$$22, a$$25, b$$23, a$$26, b$$24, a$$27, b$$25, a$$28, b$$26, a$$29, b$$27, a$$30, b$$28, a$$31, b$$29, a$$32, b$$30;

              if (matchValue$$28[0].tag === 0) {
                if (matchValue$$28[1].tag === 0) {
                  $target$$70 = 0;
                  a$$24 = matchValue$$28[0].fields[0];
                  b$$22 = matchValue$$28[1].fields[0];
                } else {
                  $target$$70 = 9;
                }
              } else if (matchValue$$28[0].tag === 5) {
                if (matchValue$$28[1].tag === 5) {
                  $target$$70 = 1;
                  a$$25 = matchValue$$28[0].fields[0];
                  b$$23 = matchValue$$28[1].fields[0];
                } else {
                  $target$$70 = 9;
                }
              } else if (matchValue$$28[0].tag === 7) {
                if (matchValue$$28[1].tag === 7) {
                  $target$$70 = 2;
                  a$$26 = matchValue$$28[0].fields[0];
                  b$$24 = matchValue$$28[1].fields[0];
                } else {
                  $target$$70 = 9;
                }
              } else if (matchValue$$28[0].tag === 3) {
                if (matchValue$$28[1].tag === 3) {
                  $target$$70 = 3;
                  a$$27 = matchValue$$28[0].fields[0];
                  b$$25 = matchValue$$28[1].fields[0];
                } else {
                  $target$$70 = 9;
                }
              } else if (matchValue$$28[0].tag === 1) {
                if (matchValue$$28[1].tag === 1) {
                  $target$$70 = 4;
                  a$$28 = matchValue$$28[0].fields[0];
                  b$$26 = matchValue$$28[1].fields[0];
                } else {
                  $target$$70 = 9;
                }
              } else if (matchValue$$28[0].tag === 2) {
                if (matchValue$$28[1].tag === 2) {
                  $target$$70 = 5;
                  a$$29 = matchValue$$28[0].fields[0];
                  b$$27 = matchValue$$28[1].fields[0];
                } else {
                  $target$$70 = 9;
                }
              } else if (matchValue$$28[0].tag === 4) {
                if (matchValue$$28[1].tag === 4) {
                  $target$$70 = 6;
                  a$$30 = matchValue$$28[0].fields[0];
                  b$$28 = matchValue$$28[1].fields[0];
                } else {
                  $target$$70 = 9;
                }
              } else if (matchValue$$28[0].tag === 6) {
                if (matchValue$$28[1].tag === 6) {
                  $target$$70 = 7;
                  a$$31 = matchValue$$28[0].fields[0];
                  b$$29 = matchValue$$28[1].fields[0];
                } else {
                  $target$$70 = 9;
                }
              } else if (matchValue$$28[0].tag === 8) {
                if (matchValue$$28[1].tag === 8) {
                  $target$$70 = 8;
                  a$$32 = matchValue$$28[0].fields[0];
                  b$$30 = matchValue$$28[1].fields[0];
                } else {
                  $target$$70 = 9;
                }
              } else {
                $target$$70 = 9;
              }

              switch ($target$$70) {
                case 0:
                  {
                    matchValue$$29 = mkBoolVal(g$$10, f32$$2(a$$24 ? 1 : 0, b$$22 ? 1 : 0) !== 0);
                    break;
                  }

                case 1:
                  {
                    matchValue$$29 = mkInt32Val(g$$10, f32$$2(a$$25, b$$23));
                    break;
                  }

                case 2:
                  {
                    matchValue$$29 = mkInt64Val(g$$10, (0, _Long.op_Multiply)(a$$26, b$$24));
                    break;
                  }

                case 3:
                  {
                    matchValue$$29 = mkInt16Val(g$$10, function f16$$2(x$$41, y$$17) {
                      return x$$41 * y$$17;
                    }(a$$27, b$$25));
                    break;
                  }

                case 4:
                  {
                    matchValue$$29 = mkInt8Val(g$$10, function f8$$2(x$$40, y$$16) {
                      return x$$40 * y$$16;
                    }(a$$28, b$$26));
                    break;
                  }

                case 5:
                  {
                    matchValue$$29 = mkUInt8Val(g$$10, function fu8$$2(x$$44, y$$20) {
                      return x$$44 * y$$20;
                    }(a$$29, b$$27));
                    break;
                  }

                case 6:
                  {
                    matchValue$$29 = mkUInt16Val(g$$10, function fu16$$2(x$$45, y$$21) {
                      return x$$45 * y$$21;
                    }(a$$30, b$$28));
                    break;
                  }

                case 7:
                  {
                    matchValue$$29 = mkUInt32Val(g$$10, function fu32$$2(x$$46, y$$22) {
                      return x$$46 * y$$22;
                    }(a$$31, b$$29));
                    break;
                  }

                case 8:
                  {
                    matchValue$$29 = mkUInt64Val(g$$10, (0, _Long.op_Multiply)(a$$32, b$$30));
                    break;
                  }

                case 9:
                  {
                    matchValue$$29 = null;
                    break;
                  }
              }

              break;
            }

          case 1:
            {
              matchValue$$29 = null;
              break;
            }
        }

        if (matchValue$$29 == null) {
          return new ExprValueInfo(0, "UnknownValue");
        } else {
          const res$$8 = matchValue$$29;
          return res$$8;
        }
      }

    case 3:
      {
        let matchValue$$32;

        const f32$$3 = function f32$$3(x$$50, y$$26) {
          return x$$50 & y$$26;
        };

        const matchValue$$30 = [a$$33, b$$31];
        var $target$$71, c1$$3, c2$$3;
        const activePatternResult50425$$3 = $007CStripConstValue$007C_$007C(matchValue$$30[0]);

        if (activePatternResult50425$$3 != null) {
          const activePatternResult50426$$3 = $007CStripConstValue$007C_$007C(matchValue$$30[1]);

          if (activePatternResult50426$$3 != null) {
            $target$$71 = 0;
            c1$$3 = activePatternResult50425$$3;
            c2$$3 = activePatternResult50426$$3;
          } else {
            $target$$71 = 1;
          }
        } else {
          $target$$71 = 1;
        }

        switch ($target$$71) {
          case 0:
            {
              const matchValue$$31 = [c1$$3, c2$$3];
              var $target$$72, a$$35, b$$33, a$$36, b$$34, a$$37, b$$35, a$$38, b$$36, a$$39, b$$37, a$$40, b$$38, a$$41, b$$39, a$$42, b$$40, a$$43, b$$41;

              if (matchValue$$31[0].tag === 0) {
                if (matchValue$$31[1].tag === 0) {
                  $target$$72 = 0;
                  a$$35 = matchValue$$31[0].fields[0];
                  b$$33 = matchValue$$31[1].fields[0];
                } else {
                  $target$$72 = 9;
                }
              } else if (matchValue$$31[0].tag === 5) {
                if (matchValue$$31[1].tag === 5) {
                  $target$$72 = 1;
                  a$$36 = matchValue$$31[0].fields[0];
                  b$$34 = matchValue$$31[1].fields[0];
                } else {
                  $target$$72 = 9;
                }
              } else if (matchValue$$31[0].tag === 7) {
                if (matchValue$$31[1].tag === 7) {
                  $target$$72 = 2;
                  a$$37 = matchValue$$31[0].fields[0];
                  b$$35 = matchValue$$31[1].fields[0];
                } else {
                  $target$$72 = 9;
                }
              } else if (matchValue$$31[0].tag === 3) {
                if (matchValue$$31[1].tag === 3) {
                  $target$$72 = 3;
                  a$$38 = matchValue$$31[0].fields[0];
                  b$$36 = matchValue$$31[1].fields[0];
                } else {
                  $target$$72 = 9;
                }
              } else if (matchValue$$31[0].tag === 1) {
                if (matchValue$$31[1].tag === 1) {
                  $target$$72 = 4;
                  a$$39 = matchValue$$31[0].fields[0];
                  b$$37 = matchValue$$31[1].fields[0];
                } else {
                  $target$$72 = 9;
                }
              } else if (matchValue$$31[0].tag === 2) {
                if (matchValue$$31[1].tag === 2) {
                  $target$$72 = 5;
                  a$$40 = matchValue$$31[0].fields[0];
                  b$$38 = matchValue$$31[1].fields[0];
                } else {
                  $target$$72 = 9;
                }
              } else if (matchValue$$31[0].tag === 4) {
                if (matchValue$$31[1].tag === 4) {
                  $target$$72 = 6;
                  a$$41 = matchValue$$31[0].fields[0];
                  b$$39 = matchValue$$31[1].fields[0];
                } else {
                  $target$$72 = 9;
                }
              } else if (matchValue$$31[0].tag === 6) {
                if (matchValue$$31[1].tag === 6) {
                  $target$$72 = 7;
                  a$$42 = matchValue$$31[0].fields[0];
                  b$$40 = matchValue$$31[1].fields[0];
                } else {
                  $target$$72 = 9;
                }
              } else if (matchValue$$31[0].tag === 8) {
                if (matchValue$$31[1].tag === 8) {
                  $target$$72 = 8;
                  a$$43 = matchValue$$31[0].fields[0];
                  b$$41 = matchValue$$31[1].fields[0];
                } else {
                  $target$$72 = 9;
                }
              } else {
                $target$$72 = 9;
              }

              switch ($target$$72) {
                case 0:
                  {
                    matchValue$$32 = mkBoolVal(g$$10, f32$$3(a$$35 ? 1 : 0, b$$33 ? 1 : 0) !== 0);
                    break;
                  }

                case 1:
                  {
                    matchValue$$32 = mkInt32Val(g$$10, f32$$3(a$$36, b$$34));
                    break;
                  }

                case 2:
                  {
                    matchValue$$32 = mkInt64Val(g$$10, (0, _Long.op_BitwiseAnd)(a$$37, b$$35));
                    break;
                  }

                case 3:
                  {
                    matchValue$$32 = mkInt16Val(g$$10, function f16$$3(x$$49, y$$25) {
                      return x$$49 & y$$25;
                    }(a$$38, b$$36));
                    break;
                  }

                case 4:
                  {
                    matchValue$$32 = mkInt8Val(g$$10, function f8$$3(x$$48, y$$24) {
                      return x$$48 & y$$24;
                    }(a$$39, b$$37));
                    break;
                  }

                case 5:
                  {
                    matchValue$$32 = mkUInt8Val(g$$10, function fu8$$3(x$$52, y$$28) {
                      return x$$52 & y$$28;
                    }(a$$40, b$$38));
                    break;
                  }

                case 6:
                  {
                    matchValue$$32 = mkUInt16Val(g$$10, function fu16$$3(x$$53, y$$29) {
                      return x$$53 & y$$29;
                    }(a$$41, b$$39));
                    break;
                  }

                case 7:
                  {
                    matchValue$$32 = mkUInt32Val(g$$10, function fu32$$3(x$$54, y$$30) {
                      return (x$$54 & y$$30) >>> 0;
                    }(a$$42, b$$40));
                    break;
                  }

                case 8:
                  {
                    matchValue$$32 = mkUInt64Val(g$$10, (0, _Long.op_BitwiseAnd)(a$$43, b$$41));
                    break;
                  }

                case 9:
                  {
                    matchValue$$32 = null;
                    break;
                  }
              }

              break;
            }

          case 1:
            {
              matchValue$$32 = null;
              break;
            }
        }

        if (matchValue$$32 == null) {
          return new ExprValueInfo(0, "UnknownValue");
        } else {
          const res$$9 = matchValue$$32;
          return res$$9;
        }
      }

    case 4:
      {
        let matchValue$$35;

        const f32$$4 = function f32$$4(x$$58, y$$34) {
          return x$$58 | y$$34;
        };

        const matchValue$$33 = [a$$44, b$$42];
        var $target$$73, c1$$4, c2$$4;
        const activePatternResult50425$$4 = $007CStripConstValue$007C_$007C(matchValue$$33[0]);

        if (activePatternResult50425$$4 != null) {
          const activePatternResult50426$$4 = $007CStripConstValue$007C_$007C(matchValue$$33[1]);

          if (activePatternResult50426$$4 != null) {
            $target$$73 = 0;
            c1$$4 = activePatternResult50425$$4;
            c2$$4 = activePatternResult50426$$4;
          } else {
            $target$$73 = 1;
          }
        } else {
          $target$$73 = 1;
        }

        switch ($target$$73) {
          case 0:
            {
              const matchValue$$34 = [c1$$4, c2$$4];
              var $target$$74, a$$46, b$$44, a$$47, b$$45, a$$48, b$$46, a$$49, b$$47, a$$50, b$$48, a$$51, b$$49, a$$52, b$$50, a$$53, b$$51, a$$54, b$$52;

              if (matchValue$$34[0].tag === 0) {
                if (matchValue$$34[1].tag === 0) {
                  $target$$74 = 0;
                  a$$46 = matchValue$$34[0].fields[0];
                  b$$44 = matchValue$$34[1].fields[0];
                } else {
                  $target$$74 = 9;
                }
              } else if (matchValue$$34[0].tag === 5) {
                if (matchValue$$34[1].tag === 5) {
                  $target$$74 = 1;
                  a$$47 = matchValue$$34[0].fields[0];
                  b$$45 = matchValue$$34[1].fields[0];
                } else {
                  $target$$74 = 9;
                }
              } else if (matchValue$$34[0].tag === 7) {
                if (matchValue$$34[1].tag === 7) {
                  $target$$74 = 2;
                  a$$48 = matchValue$$34[0].fields[0];
                  b$$46 = matchValue$$34[1].fields[0];
                } else {
                  $target$$74 = 9;
                }
              } else if (matchValue$$34[0].tag === 3) {
                if (matchValue$$34[1].tag === 3) {
                  $target$$74 = 3;
                  a$$49 = matchValue$$34[0].fields[0];
                  b$$47 = matchValue$$34[1].fields[0];
                } else {
                  $target$$74 = 9;
                }
              } else if (matchValue$$34[0].tag === 1) {
                if (matchValue$$34[1].tag === 1) {
                  $target$$74 = 4;
                  a$$50 = matchValue$$34[0].fields[0];
                  b$$48 = matchValue$$34[1].fields[0];
                } else {
                  $target$$74 = 9;
                }
              } else if (matchValue$$34[0].tag === 2) {
                if (matchValue$$34[1].tag === 2) {
                  $target$$74 = 5;
                  a$$51 = matchValue$$34[0].fields[0];
                  b$$49 = matchValue$$34[1].fields[0];
                } else {
                  $target$$74 = 9;
                }
              } else if (matchValue$$34[0].tag === 4) {
                if (matchValue$$34[1].tag === 4) {
                  $target$$74 = 6;
                  a$$52 = matchValue$$34[0].fields[0];
                  b$$50 = matchValue$$34[1].fields[0];
                } else {
                  $target$$74 = 9;
                }
              } else if (matchValue$$34[0].tag === 6) {
                if (matchValue$$34[1].tag === 6) {
                  $target$$74 = 7;
                  a$$53 = matchValue$$34[0].fields[0];
                  b$$51 = matchValue$$34[1].fields[0];
                } else {
                  $target$$74 = 9;
                }
              } else if (matchValue$$34[0].tag === 8) {
                if (matchValue$$34[1].tag === 8) {
                  $target$$74 = 8;
                  a$$54 = matchValue$$34[0].fields[0];
                  b$$52 = matchValue$$34[1].fields[0];
                } else {
                  $target$$74 = 9;
                }
              } else {
                $target$$74 = 9;
              }

              switch ($target$$74) {
                case 0:
                  {
                    matchValue$$35 = mkBoolVal(g$$10, f32$$4(a$$46 ? 1 : 0, b$$44 ? 1 : 0) !== 0);
                    break;
                  }

                case 1:
                  {
                    matchValue$$35 = mkInt32Val(g$$10, f32$$4(a$$47, b$$45));
                    break;
                  }

                case 2:
                  {
                    matchValue$$35 = mkInt64Val(g$$10, (0, _Long.op_BitwiseOr)(a$$48, b$$46));
                    break;
                  }

                case 3:
                  {
                    matchValue$$35 = mkInt16Val(g$$10, function f16$$4(x$$57, y$$33) {
                      return x$$57 | y$$33;
                    }(a$$49, b$$47));
                    break;
                  }

                case 4:
                  {
                    matchValue$$35 = mkInt8Val(g$$10, function f8$$4(x$$56, y$$32) {
                      return x$$56 | y$$32;
                    }(a$$50, b$$48));
                    break;
                  }

                case 5:
                  {
                    matchValue$$35 = mkUInt8Val(g$$10, function fu8$$4(x$$60, y$$36) {
                      return x$$60 | y$$36;
                    }(a$$51, b$$49));
                    break;
                  }

                case 6:
                  {
                    matchValue$$35 = mkUInt16Val(g$$10, function fu16$$4(x$$61, y$$37) {
                      return x$$61 | y$$37;
                    }(a$$52, b$$50));
                    break;
                  }

                case 7:
                  {
                    matchValue$$35 = mkUInt32Val(g$$10, function fu32$$4(x$$62, y$$38) {
                      return (x$$62 | y$$38) >>> 0;
                    }(a$$53, b$$51));
                    break;
                  }

                case 8:
                  {
                    matchValue$$35 = mkUInt64Val(g$$10, (0, _Long.op_BitwiseOr)(a$$54, b$$52));
                    break;
                  }

                case 9:
                  {
                    matchValue$$35 = null;
                    break;
                  }
              }

              break;
            }

          case 1:
            {
              matchValue$$35 = null;
              break;
            }
        }

        if (matchValue$$35 == null) {
          return new ExprValueInfo(0, "UnknownValue");
        } else {
          const res$$10 = matchValue$$35;
          return res$$10;
        }
      }

    case 5:
      {
        let matchValue$$38;

        const f32$$5 = function f32$$5(x$$66, y$$42) {
          return x$$66 ^ y$$42;
        };

        const matchValue$$36 = [a$$55, b$$53];
        var $target$$75, c1$$5, c2$$5;
        const activePatternResult50425$$5 = $007CStripConstValue$007C_$007C(matchValue$$36[0]);

        if (activePatternResult50425$$5 != null) {
          const activePatternResult50426$$5 = $007CStripConstValue$007C_$007C(matchValue$$36[1]);

          if (activePatternResult50426$$5 != null) {
            $target$$75 = 0;
            c1$$5 = activePatternResult50425$$5;
            c2$$5 = activePatternResult50426$$5;
          } else {
            $target$$75 = 1;
          }
        } else {
          $target$$75 = 1;
        }

        switch ($target$$75) {
          case 0:
            {
              const matchValue$$37 = [c1$$5, c2$$5];
              var $target$$76, a$$57, b$$55, a$$58, b$$56, a$$59, b$$57, a$$60, b$$58, a$$61, b$$59, a$$62, b$$60, a$$63, b$$61, a$$64, b$$62, a$$65, b$$63;

              if (matchValue$$37[0].tag === 0) {
                if (matchValue$$37[1].tag === 0) {
                  $target$$76 = 0;
                  a$$57 = matchValue$$37[0].fields[0];
                  b$$55 = matchValue$$37[1].fields[0];
                } else {
                  $target$$76 = 9;
                }
              } else if (matchValue$$37[0].tag === 5) {
                if (matchValue$$37[1].tag === 5) {
                  $target$$76 = 1;
                  a$$58 = matchValue$$37[0].fields[0];
                  b$$56 = matchValue$$37[1].fields[0];
                } else {
                  $target$$76 = 9;
                }
              } else if (matchValue$$37[0].tag === 7) {
                if (matchValue$$37[1].tag === 7) {
                  $target$$76 = 2;
                  a$$59 = matchValue$$37[0].fields[0];
                  b$$57 = matchValue$$37[1].fields[0];
                } else {
                  $target$$76 = 9;
                }
              } else if (matchValue$$37[0].tag === 3) {
                if (matchValue$$37[1].tag === 3) {
                  $target$$76 = 3;
                  a$$60 = matchValue$$37[0].fields[0];
                  b$$58 = matchValue$$37[1].fields[0];
                } else {
                  $target$$76 = 9;
                }
              } else if (matchValue$$37[0].tag === 1) {
                if (matchValue$$37[1].tag === 1) {
                  $target$$76 = 4;
                  a$$61 = matchValue$$37[0].fields[0];
                  b$$59 = matchValue$$37[1].fields[0];
                } else {
                  $target$$76 = 9;
                }
              } else if (matchValue$$37[0].tag === 2) {
                if (matchValue$$37[1].tag === 2) {
                  $target$$76 = 5;
                  a$$62 = matchValue$$37[0].fields[0];
                  b$$60 = matchValue$$37[1].fields[0];
                } else {
                  $target$$76 = 9;
                }
              } else if (matchValue$$37[0].tag === 4) {
                if (matchValue$$37[1].tag === 4) {
                  $target$$76 = 6;
                  a$$63 = matchValue$$37[0].fields[0];
                  b$$61 = matchValue$$37[1].fields[0];
                } else {
                  $target$$76 = 9;
                }
              } else if (matchValue$$37[0].tag === 6) {
                if (matchValue$$37[1].tag === 6) {
                  $target$$76 = 7;
                  a$$64 = matchValue$$37[0].fields[0];
                  b$$62 = matchValue$$37[1].fields[0];
                } else {
                  $target$$76 = 9;
                }
              } else if (matchValue$$37[0].tag === 8) {
                if (matchValue$$37[1].tag === 8) {
                  $target$$76 = 8;
                  a$$65 = matchValue$$37[0].fields[0];
                  b$$63 = matchValue$$37[1].fields[0];
                } else {
                  $target$$76 = 9;
                }
              } else {
                $target$$76 = 9;
              }

              switch ($target$$76) {
                case 0:
                  {
                    matchValue$$38 = mkBoolVal(g$$10, f32$$5(a$$57 ? 1 : 0, b$$55 ? 1 : 0) !== 0);
                    break;
                  }

                case 1:
                  {
                    matchValue$$38 = mkInt32Val(g$$10, f32$$5(a$$58, b$$56));
                    break;
                  }

                case 2:
                  {
                    matchValue$$38 = mkInt64Val(g$$10, (0, _Long.op_ExclusiveOr)(a$$59, b$$57));
                    break;
                  }

                case 3:
                  {
                    matchValue$$38 = mkInt16Val(g$$10, function f16$$5(x$$65, y$$41) {
                      return x$$65 ^ y$$41;
                    }(a$$60, b$$58));
                    break;
                  }

                case 4:
                  {
                    matchValue$$38 = mkInt8Val(g$$10, function f8$$5(x$$64, y$$40) {
                      return x$$64 ^ y$$40;
                    }(a$$61, b$$59));
                    break;
                  }

                case 5:
                  {
                    matchValue$$38 = mkUInt8Val(g$$10, function fu8$$5(x$$68, y$$44) {
                      return x$$68 ^ y$$44;
                    }(a$$62, b$$60));
                    break;
                  }

                case 6:
                  {
                    matchValue$$38 = mkUInt16Val(g$$10, function fu16$$5(x$$69, y$$45) {
                      return x$$69 ^ y$$45;
                    }(a$$63, b$$61));
                    break;
                  }

                case 7:
                  {
                    matchValue$$38 = mkUInt32Val(g$$10, function fu32$$5(x$$70, y$$46) {
                      return (x$$70 ^ y$$46) >>> 0;
                    }(a$$64, b$$62));
                    break;
                  }

                case 8:
                  {
                    matchValue$$38 = mkUInt64Val(g$$10, (0, _Long.op_ExclusiveOr)(a$$65, b$$63));
                    break;
                  }

                case 9:
                  {
                    matchValue$$38 = null;
                    break;
                  }
              }

              break;
            }

          case 1:
            {
              matchValue$$38 = null;
              break;
            }
        }

        if (matchValue$$38 == null) {
          return new ExprValueInfo(0, "UnknownValue");
        } else {
          const res$$11 = matchValue$$38;
          return res$$11;
        }
      }

    case 6:
      {
        let matchValue$$39;

        const f32$$6 = function f32$$6(value$$4) {
          return ~value$$4;
        };

        const activePatternResult50407 = $007CStripConstValue$007C_$007C(a$$66);

        if (activePatternResult50407 != null) {
          const c$$3 = activePatternResult50407;

          switch (c$$3.tag) {
            case 0:
              {
                const a$$68 = c$$3.fields[0];
                matchValue$$39 = mkBoolVal(g$$10, f32$$6(a$$68 ? 1 : 0) !== 0);
                break;
              }

            case 5:
              {
                const a$$69 = c$$3.fields[0] | 0;
                matchValue$$39 = mkInt32Val(g$$10, f32$$6(a$$69));
                break;
              }

            case 7:
              {
                const a$$70 = c$$3.fields[0];
                matchValue$$39 = mkInt64Val(g$$10, (0, _Long.op_LogicalNot)(a$$70));
                break;
              }

            case 3:
              {
                const a$$71 = c$$3.fields[0] | 0;
                matchValue$$39 = mkInt16Val(g$$10, function f16$$6(value$$3) {
                  return ~value$$3;
                }(a$$71));
                break;
              }

            case 1:
              {
                const a$$72 = c$$3.fields[0] | 0;
                matchValue$$39 = mkInt8Val(g$$10, function f8$$6(value$$2) {
                  return ~value$$2;
                }(a$$72));
                break;
              }

            case 2:
              {
                const a$$73 = c$$3.fields[0];
                matchValue$$39 = mkUInt8Val(g$$10, function fu8$$6(value$$6) {
                  return ~value$$6;
                }(a$$73));
                break;
              }

            case 6:
              {
                const a$$74 = c$$3.fields[0];
                matchValue$$39 = mkUInt32Val(g$$10, function fu32$$6(value$$8) {
                  return ~value$$8 >>> 0;
                }(a$$74));
                break;
              }

            case 8:
              {
                const a$$75 = c$$3.fields[0];
                matchValue$$39 = mkUInt64Val(g$$10, (0, _Long.op_LogicalNot)(a$$75));
                break;
              }

            case 4:
              {
                const a$$76 = c$$3.fields[0];
                matchValue$$39 = mkUInt16Val(g$$10, function fu16$$6(value$$7) {
                  return ~value$$7;
                }(a$$76));
                break;
              }

            default:
              {
                matchValue$$39 = null;
              }
          }
        } else {
          matchValue$$39 = null;
        }

        if (matchValue$$39 == null) {
          return new ExprValueInfo(0, "UnknownValue");
        } else {
          const res$$12 = matchValue$$39;
          return res$$12;
        }
      }

    case 7:
      {
        let matchValue$$40;
        const activePatternResult50418 = $007CStripConstValue$007C_$007C(a$$77);

        if (activePatternResult50418 != null) {
          const c$$4 = activePatternResult50418;

          switch (c$$4.tag) {
            case 5:
              {
                const a$$79 = c$$4.fields[0] | 0;
                matchValue$$40 = mkInt32Val(g$$10, function f32$$7(n$$17) {
                  return -n$$17;
                }(a$$79));
                break;
              }

            case 7:
              {
                const a$$80 = c$$4.fields[0];
                matchValue$$40 = mkInt64Val(g$$10, (0, _Long.op_UnaryNegation)(a$$80));
                break;
              }

            case 3:
              {
                const a$$81 = c$$4.fields[0] | 0;
                matchValue$$40 = mkInt16Val(g$$10, function f16$$7(n$$16) {
                  return -n$$16;
                }(a$$81));
                break;
              }

            case 1:
              {
                const a$$82 = c$$4.fields[0] | 0;
                matchValue$$40 = mkInt8Val(g$$10, function f8$$7(n$$15) {
                  return -n$$15;
                }(a$$82));
                break;
              }

            default:
              {
                matchValue$$40 = null;
              }
          }
        } else {
          matchValue$$40 = null;
        }

        if (matchValue$$40 == null) {
          return new ExprValueInfo(0, "UnknownValue");
        } else {
          const res$$13 = matchValue$$40;
          return res$$13;
        }
      }

    case 8:
      {
        const matchValue$$41 = [stripValue(a$$83), stripValue(b$$64)];
        var $target$$77, a1, a2, a1$$1, a2$$1, a1$$2, a2$$2, a1$$3, a2$$3, a1$$4, a2$$4, a1$$5, a2$$5, a1$$6, a2$$6, a1$$7, a2$$7, a1$$8, a2$$8, a1$$9, a2$$9;

        if (matchValue$$41[0].tag === 6) {
          if (matchValue$$41[0].fields[0].tag === 0) {
            if (matchValue$$41[1].tag === 6) {
              if (matchValue$$41[1].fields[0].tag === 0) {
                $target$$77 = 0;
                a1 = matchValue$$41[0].fields[0].fields[0];
                a2 = matchValue$$41[1].fields[0].fields[0];
              } else {
                $target$$77 = 10;
              }
            } else {
              $target$$77 = 10;
            }
          } else if (matchValue$$41[0].fields[0].tag === 1) {
            if (matchValue$$41[1].tag === 6) {
              if (matchValue$$41[1].fields[0].tag === 1) {
                $target$$77 = 1;
                a1$$1 = matchValue$$41[0].fields[0].fields[0];
                a2$$1 = matchValue$$41[1].fields[0].fields[0];
              } else {
                $target$$77 = 10;
              }
            } else {
              $target$$77 = 10;
            }
          } else if (matchValue$$41[0].fields[0].tag === 3) {
            if (matchValue$$41[1].tag === 6) {
              if (matchValue$$41[1].fields[0].tag === 3) {
                $target$$77 = 2;
                a1$$2 = matchValue$$41[0].fields[0].fields[0];
                a2$$2 = matchValue$$41[1].fields[0].fields[0];
              } else {
                $target$$77 = 10;
              }
            } else {
              $target$$77 = 10;
            }
          } else if (matchValue$$41[0].fields[0].tag === 5) {
            if (matchValue$$41[1].tag === 6) {
              if (matchValue$$41[1].fields[0].tag === 5) {
                $target$$77 = 3;
                a1$$3 = matchValue$$41[0].fields[0].fields[0];
                a2$$3 = matchValue$$41[1].fields[0].fields[0];
              } else {
                $target$$77 = 10;
              }
            } else {
              $target$$77 = 10;
            }
          } else if (matchValue$$41[0].fields[0].tag === 7) {
            if (matchValue$$41[1].tag === 6) {
              if (matchValue$$41[1].fields[0].tag === 7) {
                $target$$77 = 4;
                a1$$4 = matchValue$$41[0].fields[0].fields[0];
                a2$$4 = matchValue$$41[1].fields[0].fields[0];
              } else {
                $target$$77 = 10;
              }
            } else {
              $target$$77 = 10;
            }
          } else if (matchValue$$41[0].fields[0].tag === 13) {
            if (matchValue$$41[1].tag === 6) {
              if (matchValue$$41[1].fields[0].tag === 13) {
                $target$$77 = 5;
                a1$$5 = matchValue$$41[0].fields[0].fields[0];
                a2$$5 = matchValue$$41[1].fields[0].fields[0];
              } else {
                $target$$77 = 10;
              }
            } else {
              $target$$77 = 10;
            }
          } else if (matchValue$$41[0].fields[0].tag === 2) {
            if (matchValue$$41[1].tag === 6) {
              if (matchValue$$41[1].fields[0].tag === 2) {
                $target$$77 = 6;
                a1$$6 = matchValue$$41[0].fields[0].fields[0];
                a2$$6 = matchValue$$41[1].fields[0].fields[0];
              } else {
                $target$$77 = 10;
              }
            } else {
              $target$$77 = 10;
            }
          } else if (matchValue$$41[0].fields[0].tag === 4) {
            if (matchValue$$41[1].tag === 6) {
              if (matchValue$$41[1].fields[0].tag === 4) {
                $target$$77 = 7;
                a1$$7 = matchValue$$41[0].fields[0].fields[0];
                a2$$7 = matchValue$$41[1].fields[0].fields[0];
              } else {
                $target$$77 = 10;
              }
            } else {
              $target$$77 = 10;
            }
          } else if (matchValue$$41[0].fields[0].tag === 6) {
            if (matchValue$$41[1].tag === 6) {
              if (matchValue$$41[1].fields[0].tag === 6) {
                $target$$77 = 8;
                a1$$8 = matchValue$$41[0].fields[0].fields[0];
                a2$$8 = matchValue$$41[1].fields[0].fields[0];
              } else {
                $target$$77 = 10;
              }
            } else {
              $target$$77 = 10;
            }
          } else if (matchValue$$41[0].fields[0].tag === 8) {
            if (matchValue$$41[1].tag === 6) {
              if (matchValue$$41[1].fields[0].tag === 8) {
                $target$$77 = 9;
                a1$$9 = matchValue$$41[0].fields[0].fields[0];
                a2$$9 = matchValue$$41[1].fields[0].fields[0];
              } else {
                $target$$77 = 10;
              }
            } else {
              $target$$77 = 10;
            }
          } else {
            $target$$77 = 10;
          }
        } else {
          $target$$77 = 10;
        }

        switch ($target$$77) {
          case 0:
            {
              return mkBoolVal(g$$10, a1 === a2);
            }

          case 1:
            {
              return mkBoolVal(g$$10, a1$$1 === a2$$1);
            }

          case 2:
            {
              return mkBoolVal(g$$10, a1$$2 === a2$$2);
            }

          case 3:
            {
              return mkBoolVal(g$$10, a1$$3 === a2$$3);
            }

          case 4:
            {
              return mkBoolVal(g$$10, (0, _Long.equals)(a1$$4, a2$$4));
            }

          case 5:
            {
              return mkBoolVal(g$$10, a1$$5 === a2$$5);
            }

          case 6:
            {
              return mkBoolVal(g$$10, a1$$6 === a2$$6);
            }

          case 7:
            {
              return mkBoolVal(g$$10, a1$$7 === a2$$7);
            }

          case 8:
            {
              return mkBoolVal(g$$10, a1$$8 === a2$$8);
            }

          case 9:
            {
              return mkBoolVal(g$$10, (0, _Long.equals)(a1$$9, a2$$9));
            }

          case 10:
            {
              return new ExprValueInfo(0, "UnknownValue");
            }
        }
      }

    case 9:
      {
        const matchValue$$42 = [stripValue(a$$84), stripValue(b$$65)];
        var $target$$78, a1$$10, a2$$10, a1$$11, a2$$11, a1$$12, a2$$12, a1$$13, a2$$13, a1$$14, a2$$14;

        if (matchValue$$42[0].tag === 6) {
          if (matchValue$$42[0].fields[0].tag === 0) {
            if (matchValue$$42[1].tag === 6) {
              if (matchValue$$42[1].fields[0].tag === 0) {
                $target$$78 = 0;
                a1$$10 = matchValue$$42[0].fields[0].fields[0];
                a2$$10 = matchValue$$42[1].fields[0].fields[0];
              } else {
                $target$$78 = 5;
              }
            } else {
              $target$$78 = 5;
            }
          } else if (matchValue$$42[0].fields[0].tag === 5) {
            if (matchValue$$42[1].tag === 6) {
              if (matchValue$$42[1].fields[0].tag === 5) {
                $target$$78 = 1;
                a1$$11 = matchValue$$42[0].fields[0].fields[0];
                a2$$11 = matchValue$$42[1].fields[0].fields[0];
              } else {
                $target$$78 = 5;
              }
            } else {
              $target$$78 = 5;
            }
          } else if (matchValue$$42[0].fields[0].tag === 7) {
            if (matchValue$$42[1].tag === 6) {
              if (matchValue$$42[1].fields[0].tag === 7) {
                $target$$78 = 2;
                a1$$12 = matchValue$$42[0].fields[0].fields[0];
                a2$$12 = matchValue$$42[1].fields[0].fields[0];
              } else {
                $target$$78 = 5;
              }
            } else {
              $target$$78 = 5;
            }
          } else if (matchValue$$42[0].fields[0].tag === 1) {
            if (matchValue$$42[1].tag === 6) {
              if (matchValue$$42[1].fields[0].tag === 1) {
                $target$$78 = 3;
                a1$$13 = matchValue$$42[0].fields[0].fields[0];
                a2$$13 = matchValue$$42[1].fields[0].fields[0];
              } else {
                $target$$78 = 5;
              }
            } else {
              $target$$78 = 5;
            }
          } else if (matchValue$$42[0].fields[0].tag === 3) {
            if (matchValue$$42[1].tag === 6) {
              if (matchValue$$42[1].fields[0].tag === 3) {
                $target$$78 = 4;
                a1$$14 = matchValue$$42[0].fields[0].fields[0];
                a2$$14 = matchValue$$42[1].fields[0].fields[0];
              } else {
                $target$$78 = 5;
              }
            } else {
              $target$$78 = 5;
            }
          } else {
            $target$$78 = 5;
          }
        } else {
          $target$$78 = 5;
        }

        switch ($target$$78) {
          case 0:
            {
              return mkBoolVal(g$$10, a1$$10 < a2$$10);
            }

          case 1:
            {
              return mkBoolVal(g$$10, a1$$11 < a2$$11);
            }

          case 2:
            {
              return mkBoolVal(g$$10, (0, _Long.compare)(a1$$12, a2$$12) < 0);
            }

          case 3:
            {
              return mkBoolVal(g$$10, a1$$13 < a2$$13);
            }

          case 4:
            {
              return mkBoolVal(g$$10, a1$$14 < a2$$14);
            }

          case 5:
            {
              return new ExprValueInfo(0, "UnknownValue");
            }
        }
      }

    case 10:
      {
        const matchValue$$43 = stripValue(a$$85);
        var $target$$79, a$$86, a$$87, a$$88, a$$89, a$$90, a$$91, a$$92, a$$93;

        if (matchValue$$43.tag === 6) {
          if (matchValue$$43.fields[0].tag === 1) {
            $target$$79 = 0;
            a$$86 = matchValue$$43.fields[0].fields[0];
          } else if (matchValue$$43.fields[0].tag === 3) {
            $target$$79 = 1;
            a$$87 = matchValue$$43.fields[0].fields[0];
          } else if (matchValue$$43.fields[0].tag === 5) {
            $target$$79 = 2;
            a$$88 = matchValue$$43.fields[0].fields[0];
          } else if (matchValue$$43.fields[0].tag === 7) {
            $target$$79 = 3;
            a$$89 = matchValue$$43.fields[0].fields[0];
          } else if (matchValue$$43.fields[0].tag === 2) {
            $target$$79 = 4;
            a$$90 = matchValue$$43.fields[0].fields[0];
          } else if (matchValue$$43.fields[0].tag === 4) {
            $target$$79 = 5;
            a$$91 = matchValue$$43.fields[0].fields[0];
          } else if (matchValue$$43.fields[0].tag === 6) {
            $target$$79 = 6;
            a$$92 = matchValue$$43.fields[0].fields[0];
          } else if (matchValue$$43.fields[0].tag === 8) {
            $target$$79 = 7;
            a$$93 = matchValue$$43.fields[0].fields[0];
          } else {
            $target$$79 = 8;
          }
        } else {
          $target$$79 = 8;
        }

        switch ($target$$79) {
          case 0:
            {
              return mkUInt8Val(g$$10, a$$86 & 0xFF);
            }

          case 1:
            {
              return mkUInt8Val(g$$10, a$$87 & 0xFF);
            }

          case 2:
            {
              return mkUInt8Val(g$$10, a$$88 & 0xFF);
            }

          case 3:
            {
              return mkUInt8Val(g$$10, (0, _Long.toIntNumber)(a$$89) & 0xFF);
            }

          case 4:
            {
              return mkUInt8Val(g$$10, a$$90);
            }

          case 5:
            {
              return mkUInt8Val(g$$10, a$$91 & 0xFF);
            }

          case 6:
            {
              return mkUInt8Val(g$$10, a$$92 & 0xFF);
            }

          case 7:
            {
              return mkUInt8Val(g$$10, (0, _Long.toIntNumber)(a$$93) & 0xFF);
            }

          case 8:
            {
              return new ExprValueInfo(0, "UnknownValue");
            }
        }
      }

    case 11:
      {
        var $target$$80, a$$95, ty$$5;

        if (matchValue$$20[0].tail != null) {
          if (matchValue$$20[0].head.tag === 11) {
            if (matchValue$$20[0].head.fields[0].tag === 4) {
              if (matchValue$$20[0].tail.tail == null) {
                if (matchValue$$20[1].tail != null) {
                  if (matchValue$$20[1].tail.tail == null) {
                    if (matchValue$$20[2].tail != null) {
                      if (matchValue$$20[2].tail.tail == null) {
                        if (ty$$4 = matchValue$$20[2].head, (a$$94 = matchValue$$20[1].head, (0, _TastOps.typeEquiv)(g$$10, ty$$4, (0, _TcGlobals.TcGlobals$$get_uint16_ty)(g$$10)))) {
                          $target$$80 = 0;
                          a$$95 = matchValue$$20[1].head;
                          ty$$5 = matchValue$$20[2].head;
                        } else {
                          $target$$80 = 1;
                        }
                      } else {
                        $target$$80 = 1;
                      }
                    } else {
                      $target$$80 = 1;
                    }
                  } else {
                    $target$$80 = 1;
                  }
                } else {
                  $target$$80 = 1;
                }
              } else {
                $target$$80 = 1;
              }
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
              const matchValue$$44 = stripValue(a$$95);
              var $target$$81, a$$96, a$$97, a$$98, a$$99, a$$100, a$$101, a$$102, a$$103;

              if (matchValue$$44.tag === 6) {
                if (matchValue$$44.fields[0].tag === 1) {
                  $target$$81 = 0;
                  a$$96 = matchValue$$44.fields[0].fields[0];
                } else if (matchValue$$44.fields[0].tag === 3) {
                  $target$$81 = 1;
                  a$$97 = matchValue$$44.fields[0].fields[0];
                } else if (matchValue$$44.fields[0].tag === 5) {
                  $target$$81 = 2;
                  a$$98 = matchValue$$44.fields[0].fields[0];
                } else if (matchValue$$44.fields[0].tag === 7) {
                  $target$$81 = 3;
                  a$$99 = matchValue$$44.fields[0].fields[0];
                } else if (matchValue$$44.fields[0].tag === 2) {
                  $target$$81 = 4;
                  a$$100 = matchValue$$44.fields[0].fields[0];
                } else if (matchValue$$44.fields[0].tag === 4) {
                  $target$$81 = 5;
                  a$$101 = matchValue$$44.fields[0].fields[0];
                } else if (matchValue$$44.fields[0].tag === 6) {
                  $target$$81 = 6;
                  a$$102 = matchValue$$44.fields[0].fields[0];
                } else if (matchValue$$44.fields[0].tag === 8) {
                  $target$$81 = 7;
                  a$$103 = matchValue$$44.fields[0].fields[0];
                } else {
                  $target$$81 = 8;
                }
              } else {
                $target$$81 = 8;
              }

              switch ($target$$81) {
                case 0:
                  {
                    return mkUInt16Val(g$$10, a$$96 & 0xFFFF);
                  }

                case 1:
                  {
                    return mkUInt16Val(g$$10, a$$97 & 0xFFFF);
                  }

                case 2:
                  {
                    return mkUInt16Val(g$$10, a$$98 & 0xFFFF);
                  }

                case 3:
                  {
                    return mkUInt16Val(g$$10, (0, _Long.toIntNumber)(a$$99) & 0xFFFF);
                  }

                case 4:
                  {
                    return mkUInt16Val(g$$10, a$$100);
                  }

                case 5:
                  {
                    return mkUInt16Val(g$$10, a$$101);
                  }

                case 6:
                  {
                    return mkUInt16Val(g$$10, a$$102 & 0xFFFF);
                  }

                case 7:
                  {
                    return mkUInt16Val(g$$10, (0, _Long.toIntNumber)(a$$103) & 0xFFFF);
                  }

                case 8:
                  {
                    return new ExprValueInfo(0, "UnknownValue");
                  }
              }
            }

          case 1:
            {
              var $target$$82, a$$105, ty$$7;

              if (matchValue$$20[0].tail != null) {
                if (matchValue$$20[0].head.tag === 11) {
                  if (matchValue$$20[0].head.fields[0].tag === 6) {
                    if (matchValue$$20[0].tail.tail == null) {
                      if (matchValue$$20[1].tail != null) {
                        if (matchValue$$20[1].tail.tail == null) {
                          if (matchValue$$20[2].tail != null) {
                            if (matchValue$$20[2].tail.tail == null) {
                              if (ty$$6 = matchValue$$20[2].head, (a$$104 = matchValue$$20[1].head, (0, _TastOps.typeEquiv)(g$$10, ty$$6, (0, _TcGlobals.TcGlobals$$get_uint32_ty)(g$$10)))) {
                                $target$$82 = 0;
                                a$$105 = matchValue$$20[1].head;
                                ty$$7 = matchValue$$20[2].head;
                              } else {
                                $target$$82 = 1;
                              }
                            } else {
                              $target$$82 = 1;
                            }
                          } else {
                            $target$$82 = 1;
                          }
                        } else {
                          $target$$82 = 1;
                        }
                      } else {
                        $target$$82 = 1;
                      }
                    } else {
                      $target$$82 = 1;
                    }
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
                    const matchValue$$45 = stripValue(a$$105);
                    var $target$$83, a$$106, a$$107, a$$108, a$$109, a$$110, a$$111, a$$112, a$$113;

                    if (matchValue$$45.tag === 6) {
                      if (matchValue$$45.fields[0].tag === 1) {
                        $target$$83 = 0;
                        a$$106 = matchValue$$45.fields[0].fields[0];
                      } else if (matchValue$$45.fields[0].tag === 3) {
                        $target$$83 = 1;
                        a$$107 = matchValue$$45.fields[0].fields[0];
                      } else if (matchValue$$45.fields[0].tag === 5) {
                        $target$$83 = 2;
                        a$$108 = matchValue$$45.fields[0].fields[0];
                      } else if (matchValue$$45.fields[0].tag === 7) {
                        $target$$83 = 3;
                        a$$109 = matchValue$$45.fields[0].fields[0];
                      } else if (matchValue$$45.fields[0].tag === 2) {
                        $target$$83 = 4;
                        a$$110 = matchValue$$45.fields[0].fields[0];
                      } else if (matchValue$$45.fields[0].tag === 4) {
                        $target$$83 = 5;
                        a$$111 = matchValue$$45.fields[0].fields[0];
                      } else if (matchValue$$45.fields[0].tag === 6) {
                        $target$$83 = 6;
                        a$$112 = matchValue$$45.fields[0].fields[0];
                      } else if (matchValue$$45.fields[0].tag === 8) {
                        $target$$83 = 7;
                        a$$113 = matchValue$$45.fields[0].fields[0];
                      } else {
                        $target$$83 = 8;
                      }
                    } else {
                      $target$$83 = 8;
                    }

                    switch ($target$$83) {
                      case 0:
                        {
                          return mkUInt32Val(g$$10, a$$106 >>> 0);
                        }

                      case 1:
                        {
                          return mkUInt32Val(g$$10, a$$107 >>> 0);
                        }

                      case 2:
                        {
                          return mkUInt32Val(g$$10, a$$108 >>> 0);
                        }

                      case 3:
                        {
                          return mkUInt32Val(g$$10, (0, _Long.toIntNumber)(a$$109) >>> 0);
                        }

                      case 4:
                        {
                          return mkUInt32Val(g$$10, a$$110);
                        }

                      case 5:
                        {
                          return mkUInt32Val(g$$10, a$$111);
                        }

                      case 6:
                        {
                          return mkUInt32Val(g$$10, a$$112);
                        }

                      case 7:
                        {
                          return mkUInt32Val(g$$10, (0, _Long.toIntNumber)(a$$113) >>> 0);
                        }

                      case 8:
                        {
                          return new ExprValueInfo(0, "UnknownValue");
                        }
                    }
                  }

                case 1:
                  {
                    var $target$$84, a$$115, ty$$9;

                    if (matchValue$$20[0].tail != null) {
                      if (matchValue$$20[0].head.tag === 11) {
                        if (matchValue$$20[0].head.fields[0].tag === 8) {
                          if (matchValue$$20[0].tail.tail == null) {
                            if (matchValue$$20[1].tail != null) {
                              if (matchValue$$20[1].tail.tail == null) {
                                if (matchValue$$20[2].tail != null) {
                                  if (matchValue$$20[2].tail.tail == null) {
                                    if (ty$$8 = matchValue$$20[2].head, (a$$114 = matchValue$$20[1].head, (0, _TastOps.typeEquiv)(g$$10, ty$$8, (0, _TcGlobals.TcGlobals$$get_uint64_ty)(g$$10)))) {
                                      $target$$84 = 0;
                                      a$$115 = matchValue$$20[1].head;
                                      ty$$9 = matchValue$$20[2].head;
                                    } else {
                                      $target$$84 = 1;
                                    }
                                  } else {
                                    $target$$84 = 1;
                                  }
                                } else {
                                  $target$$84 = 1;
                                }
                              } else {
                                $target$$84 = 1;
                              }
                            } else {
                              $target$$84 = 1;
                            }
                          } else {
                            $target$$84 = 1;
                          }
                        } else {
                          $target$$84 = 1;
                        }
                      } else {
                        $target$$84 = 1;
                      }
                    } else {
                      $target$$84 = 1;
                    }

                    switch ($target$$84) {
                      case 0:
                        {
                          const matchValue$$46 = stripValue(a$$115);
                          var $target$$85, a$$116, a$$117, a$$118, a$$119, a$$120, a$$121, a$$122, a$$123;

                          if (matchValue$$46.tag === 6) {
                            if (matchValue$$46.fields[0].tag === 1) {
                              $target$$85 = 0;
                              a$$116 = matchValue$$46.fields[0].fields[0];
                            } else if (matchValue$$46.fields[0].tag === 3) {
                              $target$$85 = 1;
                              a$$117 = matchValue$$46.fields[0].fields[0];
                            } else if (matchValue$$46.fields[0].tag === 5) {
                              $target$$85 = 2;
                              a$$118 = matchValue$$46.fields[0].fields[0];
                            } else if (matchValue$$46.fields[0].tag === 7) {
                              $target$$85 = 3;
                              a$$119 = matchValue$$46.fields[0].fields[0];
                            } else if (matchValue$$46.fields[0].tag === 2) {
                              $target$$85 = 4;
                              a$$120 = matchValue$$46.fields[0].fields[0];
                            } else if (matchValue$$46.fields[0].tag === 4) {
                              $target$$85 = 5;
                              a$$121 = matchValue$$46.fields[0].fields[0];
                            } else if (matchValue$$46.fields[0].tag === 6) {
                              $target$$85 = 6;
                              a$$122 = matchValue$$46.fields[0].fields[0];
                            } else if (matchValue$$46.fields[0].tag === 8) {
                              $target$$85 = 7;
                              a$$123 = matchValue$$46.fields[0].fields[0];
                            } else {
                              $target$$85 = 8;
                            }
                          } else {
                            $target$$85 = 8;
                          }

                          switch ($target$$85) {
                            case 0:
                              {
                                return mkUInt64Val(g$$10, (0, _Long.fromInteger)(a$$116, true, 0));
                              }

                            case 1:
                              {
                                return mkUInt64Val(g$$10, (0, _Long.fromInteger)(a$$117, true, 1));
                              }

                            case 2:
                              {
                                return mkUInt64Val(g$$10, (0, _Long.fromInteger)(a$$118, true, 2));
                              }

                            case 3:
                              {
                                return mkUInt64Val(g$$10, (0, _Long.fromValue)(a$$119, true));
                              }

                            case 4:
                              {
                                return mkUInt64Val(g$$10, (0, _Long.fromInteger)(a$$120, true, 4));
                              }

                            case 5:
                              {
                                return mkUInt64Val(g$$10, (0, _Long.fromInteger)(a$$121, true, 5));
                              }

                            case 6:
                              {
                                return mkUInt64Val(g$$10, (0, _Long.fromInteger)(a$$122, true, 6));
                              }

                            case 7:
                              {
                                return mkUInt64Val(g$$10, (0, _Long.fromValue)(a$$123, true));
                              }

                            case 8:
                              {
                                return new ExprValueInfo(0, "UnknownValue");
                              }
                          }
                        }

                      case 1:
                        {
                          var $target$$86, a$$125, ty$$11;

                          if (matchValue$$20[0].tail != null) {
                            if (matchValue$$20[0].head.tag === 11) {
                              if (matchValue$$20[0].head.fields[0].tag === 1) {
                                if (matchValue$$20[0].tail.tail == null) {
                                  if (matchValue$$20[1].tail != null) {
                                    if (matchValue$$20[1].tail.tail == null) {
                                      if (matchValue$$20[2].tail != null) {
                                        if (matchValue$$20[2].tail.tail == null) {
                                          if (ty$$10 = matchValue$$20[2].head, (a$$124 = matchValue$$20[1].head, (0, _TastOps.typeEquiv)(g$$10, ty$$10, (0, _TcGlobals.TcGlobals$$get_sbyte_ty)(g$$10)))) {
                                            $target$$86 = 0;
                                            a$$125 = matchValue$$20[1].head;
                                            ty$$11 = matchValue$$20[2].head;
                                          } else {
                                            $target$$86 = 1;
                                          }
                                        } else {
                                          $target$$86 = 1;
                                        }
                                      } else {
                                        $target$$86 = 1;
                                      }
                                    } else {
                                      $target$$86 = 1;
                                    }
                                  } else {
                                    $target$$86 = 1;
                                  }
                                } else {
                                  $target$$86 = 1;
                                }
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
                                const matchValue$$47 = stripValue(a$$125);
                                var $target$$87, a$$126, a$$127, a$$128, a$$129, a$$130, a$$131, a$$132, a$$133;

                                if (matchValue$$47.tag === 6) {
                                  if (matchValue$$47.fields[0].tag === 1) {
                                    $target$$87 = 0;
                                    a$$126 = matchValue$$47.fields[0].fields[0];
                                  } else if (matchValue$$47.fields[0].tag === 3) {
                                    $target$$87 = 1;
                                    a$$127 = matchValue$$47.fields[0].fields[0];
                                  } else if (matchValue$$47.fields[0].tag === 5) {
                                    $target$$87 = 2;
                                    a$$128 = matchValue$$47.fields[0].fields[0];
                                  } else if (matchValue$$47.fields[0].tag === 7) {
                                    $target$$87 = 3;
                                    a$$129 = matchValue$$47.fields[0].fields[0];
                                  } else if (matchValue$$47.fields[0].tag === 2) {
                                    $target$$87 = 4;
                                    a$$130 = matchValue$$47.fields[0].fields[0];
                                  } else if (matchValue$$47.fields[0].tag === 4) {
                                    $target$$87 = 5;
                                    a$$131 = matchValue$$47.fields[0].fields[0];
                                  } else if (matchValue$$47.fields[0].tag === 6) {
                                    $target$$87 = 6;
                                    a$$132 = matchValue$$47.fields[0].fields[0];
                                  } else if (matchValue$$47.fields[0].tag === 8) {
                                    $target$$87 = 7;
                                    a$$133 = matchValue$$47.fields[0].fields[0];
                                  } else {
                                    $target$$87 = 8;
                                  }
                                } else {
                                  $target$$87 = 8;
                                }

                                switch ($target$$87) {
                                  case 0:
                                    {
                                      return mkInt8Val(g$$10, a$$126);
                                    }

                                  case 1:
                                    {
                                      return mkInt8Val(g$$10, (a$$127 + 0x80 & 0xFF) - 0x80);
                                    }

                                  case 2:
                                    {
                                      return mkInt8Val(g$$10, (a$$128 + 0x80 & 0xFF) - 0x80);
                                    }

                                  case 3:
                                    {
                                      return mkInt8Val(g$$10, ((0, _Long.toIntNumber)(a$$129) + 0x80 & 0xFF) - 0x80);
                                    }

                                  case 4:
                                    {
                                      return mkInt8Val(g$$10, (a$$130 + 0x80 & 0xFF) - 0x80);
                                    }

                                  case 5:
                                    {
                                      return mkInt8Val(g$$10, (a$$131 + 0x80 & 0xFF) - 0x80);
                                    }

                                  case 6:
                                    {
                                      return mkInt8Val(g$$10, (a$$132 + 0x80 & 0xFF) - 0x80);
                                    }

                                  case 7:
                                    {
                                      return mkInt8Val(g$$10, ((0, _Long.toIntNumber)(a$$133) + 0x80 & 0xFF) - 0x80);
                                    }

                                  case 8:
                                    {
                                      return new ExprValueInfo(0, "UnknownValue");
                                    }
                                }
                              }

                            case 1:
                              {
                                var $target$$88, a$$135, ty$$13;

                                if (matchValue$$20[0].tail != null) {
                                  if (matchValue$$20[0].head.tag === 11) {
                                    if (matchValue$$20[0].head.fields[0].tag === 3) {
                                      if (matchValue$$20[0].tail.tail == null) {
                                        if (matchValue$$20[1].tail != null) {
                                          if (matchValue$$20[1].tail.tail == null) {
                                            if (matchValue$$20[2].tail != null) {
                                              if (matchValue$$20[2].tail.tail == null) {
                                                if (ty$$12 = matchValue$$20[2].head, (a$$134 = matchValue$$20[1].head, (0, _TastOps.typeEquiv)(g$$10, ty$$12, (0, _TcGlobals.TcGlobals$$get_int16_ty)(g$$10)))) {
                                                  $target$$88 = 0;
                                                  a$$135 = matchValue$$20[1].head;
                                                  ty$$13 = matchValue$$20[2].head;
                                                } else {
                                                  $target$$88 = 1;
                                                }
                                              } else {
                                                $target$$88 = 1;
                                              }
                                            } else {
                                              $target$$88 = 1;
                                            }
                                          } else {
                                            $target$$88 = 1;
                                          }
                                        } else {
                                          $target$$88 = 1;
                                        }
                                      } else {
                                        $target$$88 = 1;
                                      }
                                    } else {
                                      $target$$88 = 1;
                                    }
                                  } else {
                                    $target$$88 = 1;
                                  }
                                } else {
                                  $target$$88 = 1;
                                }

                                switch ($target$$88) {
                                  case 0:
                                    {
                                      const matchValue$$48 = stripValue(a$$135);
                                      var $target$$89, a$$136, a$$137, a$$138, a$$139, a$$140, a$$141, a$$142, a$$143;

                                      if (matchValue$$48.tag === 6) {
                                        if (matchValue$$48.fields[0].tag === 5) {
                                          $target$$89 = 0;
                                          a$$136 = matchValue$$48.fields[0].fields[0];
                                        } else if (matchValue$$48.fields[0].tag === 3) {
                                          $target$$89 = 1;
                                          a$$137 = matchValue$$48.fields[0].fields[0];
                                        } else if (matchValue$$48.fields[0].tag === 1) {
                                          $target$$89 = 2;
                                          a$$138 = matchValue$$48.fields[0].fields[0];
                                        } else if (matchValue$$48.fields[0].tag === 7) {
                                          $target$$89 = 3;
                                          a$$139 = matchValue$$48.fields[0].fields[0];
                                        } else if (matchValue$$48.fields[0].tag === 6) {
                                          $target$$89 = 4;
                                          a$$140 = matchValue$$48.fields[0].fields[0];
                                        } else if (matchValue$$48.fields[0].tag === 4) {
                                          $target$$89 = 5;
                                          a$$141 = matchValue$$48.fields[0].fields[0];
                                        } else if (matchValue$$48.fields[0].tag === 2) {
                                          $target$$89 = 6;
                                          a$$142 = matchValue$$48.fields[0].fields[0];
                                        } else if (matchValue$$48.fields[0].tag === 8) {
                                          $target$$89 = 7;
                                          a$$143 = matchValue$$48.fields[0].fields[0];
                                        } else {
                                          $target$$89 = 8;
                                        }
                                      } else {
                                        $target$$89 = 8;
                                      }

                                      switch ($target$$89) {
                                        case 0:
                                          {
                                            return mkInt16Val(g$$10, (a$$136 + 0x8000 & 0xFFFF) - 0x8000);
                                          }

                                        case 1:
                                          {
                                            return mkInt16Val(g$$10, a$$137);
                                          }

                                        case 2:
                                          {
                                            return mkInt16Val(g$$10, a$$138);
                                          }

                                        case 3:
                                          {
                                            return mkInt16Val(g$$10, ((0, _Long.toIntNumber)(a$$139) + 0x8000 & 0xFFFF) - 0x8000);
                                          }

                                        case 4:
                                          {
                                            return mkInt16Val(g$$10, (a$$140 + 0x8000 & 0xFFFF) - 0x8000);
                                          }

                                        case 5:
                                          {
                                            return mkInt16Val(g$$10, (a$$141 + 0x8000 & 0xFFFF) - 0x8000);
                                          }

                                        case 6:
                                          {
                                            return mkInt16Val(g$$10, (a$$142 + 0x8000 & 0xFFFF) - 0x8000);
                                          }

                                        case 7:
                                          {
                                            return mkInt16Val(g$$10, ((0, _Long.toIntNumber)(a$$143) + 0x8000 & 0xFFFF) - 0x8000);
                                          }

                                        case 8:
                                          {
                                            return new ExprValueInfo(0, "UnknownValue");
                                          }
                                      }
                                    }

                                  case 1:
                                    {
                                      var $target$$90, a$$145, ty$$15;

                                      if (matchValue$$20[0].tail != null) {
                                        if (matchValue$$20[0].head.tag === 11) {
                                          if (matchValue$$20[0].head.fields[0].tag === 5) {
                                            if (matchValue$$20[0].tail.tail == null) {
                                              if (matchValue$$20[1].tail != null) {
                                                if (matchValue$$20[1].tail.tail == null) {
                                                  if (matchValue$$20[2].tail != null) {
                                                    if (matchValue$$20[2].tail.tail == null) {
                                                      if (ty$$14 = matchValue$$20[2].head, (a$$144 = matchValue$$20[1].head, (0, _TastOps.typeEquiv)(g$$10, ty$$14, (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$10)))) {
                                                        $target$$90 = 0;
                                                        a$$145 = matchValue$$20[1].head;
                                                        ty$$15 = matchValue$$20[2].head;
                                                      } else {
                                                        $target$$90 = 1;
                                                      }
                                                    } else {
                                                      $target$$90 = 1;
                                                    }
                                                  } else {
                                                    $target$$90 = 1;
                                                  }
                                                } else {
                                                  $target$$90 = 1;
                                                }
                                              } else {
                                                $target$$90 = 1;
                                              }
                                            } else {
                                              $target$$90 = 1;
                                            }
                                          } else {
                                            $target$$90 = 1;
                                          }
                                        } else {
                                          $target$$90 = 1;
                                        }
                                      } else {
                                        $target$$90 = 1;
                                      }

                                      switch ($target$$90) {
                                        case 0:
                                          {
                                            const matchValue$$49 = stripValue(a$$145);
                                            var $target$$91, a$$146, a$$147, a$$148, a$$149, a$$150, a$$151, a$$152, a$$153;

                                            if (matchValue$$49.tag === 6) {
                                              if (matchValue$$49.fields[0].tag === 5) {
                                                $target$$91 = 0;
                                                a$$146 = matchValue$$49.fields[0].fields[0];
                                              } else if (matchValue$$49.fields[0].tag === 3) {
                                                $target$$91 = 1;
                                                a$$147 = matchValue$$49.fields[0].fields[0];
                                              } else if (matchValue$$49.fields[0].tag === 1) {
                                                $target$$91 = 2;
                                                a$$148 = matchValue$$49.fields[0].fields[0];
                                              } else if (matchValue$$49.fields[0].tag === 7) {
                                                $target$$91 = 3;
                                                a$$149 = matchValue$$49.fields[0].fields[0];
                                              } else if (matchValue$$49.fields[0].tag === 6) {
                                                $target$$91 = 4;
                                                a$$150 = matchValue$$49.fields[0].fields[0];
                                              } else if (matchValue$$49.fields[0].tag === 4) {
                                                $target$$91 = 5;
                                                a$$151 = matchValue$$49.fields[0].fields[0];
                                              } else if (matchValue$$49.fields[0].tag === 2) {
                                                $target$$91 = 6;
                                                a$$152 = matchValue$$49.fields[0].fields[0];
                                              } else if (matchValue$$49.fields[0].tag === 8) {
                                                $target$$91 = 7;
                                                a$$153 = matchValue$$49.fields[0].fields[0];
                                              } else {
                                                $target$$91 = 8;
                                              }
                                            } else {
                                              $target$$91 = 8;
                                            }

                                            switch ($target$$91) {
                                              case 0:
                                                {
                                                  return mkInt32Val(g$$10, a$$146);
                                                }

                                              case 1:
                                                {
                                                  return mkInt32Val(g$$10, a$$147);
                                                }

                                              case 2:
                                                {
                                                  return mkInt32Val(g$$10, a$$148);
                                                }

                                              case 3:
                                                {
                                                  return mkInt32Val(g$$10, ~~(0, _Long.toIntNumber)(a$$149));
                                                }

                                              case 4:
                                                {
                                                  return mkInt32Val(g$$10, ~~a$$150);
                                                }

                                              case 5:
                                                {
                                                  return mkInt32Val(g$$10, ~~a$$151);
                                                }

                                              case 6:
                                                {
                                                  return mkInt32Val(g$$10, ~~a$$152);
                                                }

                                              case 7:
                                                {
                                                  return mkInt32Val(g$$10, ~~(0, _Long.toIntNumber)(a$$153));
                                                }

                                              case 8:
                                                {
                                                  return new ExprValueInfo(0, "UnknownValue");
                                                }
                                            }
                                          }

                                        case 1:
                                          {
                                            var $target$$92, a$$155, ty$$17;

                                            if (matchValue$$20[0].tail != null) {
                                              if (matchValue$$20[0].head.tag === 11) {
                                                if (matchValue$$20[0].head.fields[0].tag === 7) {
                                                  if (matchValue$$20[0].tail.tail == null) {
                                                    if (matchValue$$20[1].tail != null) {
                                                      if (matchValue$$20[1].tail.tail == null) {
                                                        if (matchValue$$20[2].tail != null) {
                                                          if (matchValue$$20[2].tail.tail == null) {
                                                            if (ty$$16 = matchValue$$20[2].head, (a$$154 = matchValue$$20[1].head, (0, _TastOps.typeEquiv)(g$$10, ty$$16, (0, _TcGlobals.TcGlobals$$get_int64_ty)(g$$10)))) {
                                                              $target$$92 = 0;
                                                              a$$155 = matchValue$$20[1].head;
                                                              ty$$17 = matchValue$$20[2].head;
                                                            } else {
                                                              $target$$92 = 1;
                                                            }
                                                          } else {
                                                            $target$$92 = 1;
                                                          }
                                                        } else {
                                                          $target$$92 = 1;
                                                        }
                                                      } else {
                                                        $target$$92 = 1;
                                                      }
                                                    } else {
                                                      $target$$92 = 1;
                                                    }
                                                  } else {
                                                    $target$$92 = 1;
                                                  }
                                                } else {
                                                  $target$$92 = 1;
                                                }
                                              } else {
                                                $target$$92 = 1;
                                              }
                                            } else {
                                              $target$$92 = 1;
                                            }

                                            switch ($target$$92) {
                                              case 0:
                                                {
                                                  const matchValue$$50 = stripValue(a$$155);
                                                  var $target$$93, a$$156, a$$157, a$$158, a$$159, a$$160, a$$161, a$$162, a$$163;

                                                  if (matchValue$$50.tag === 6) {
                                                    if (matchValue$$50.fields[0].tag === 5) {
                                                      $target$$93 = 0;
                                                      a$$156 = matchValue$$50.fields[0].fields[0];
                                                    } else if (matchValue$$50.fields[0].tag === 3) {
                                                      $target$$93 = 1;
                                                      a$$157 = matchValue$$50.fields[0].fields[0];
                                                    } else if (matchValue$$50.fields[0].tag === 1) {
                                                      $target$$93 = 2;
                                                      a$$158 = matchValue$$50.fields[0].fields[0];
                                                    } else if (matchValue$$50.fields[0].tag === 7) {
                                                      $target$$93 = 3;
                                                      a$$159 = matchValue$$50.fields[0].fields[0];
                                                    } else if (matchValue$$50.fields[0].tag === 6) {
                                                      $target$$93 = 4;
                                                      a$$160 = matchValue$$50.fields[0].fields[0];
                                                    } else if (matchValue$$50.fields[0].tag === 4) {
                                                      $target$$93 = 5;
                                                      a$$161 = matchValue$$50.fields[0].fields[0];
                                                    } else if (matchValue$$50.fields[0].tag === 2) {
                                                      $target$$93 = 6;
                                                      a$$162 = matchValue$$50.fields[0].fields[0];
                                                    } else if (matchValue$$50.fields[0].tag === 8) {
                                                      $target$$93 = 7;
                                                      a$$163 = matchValue$$50.fields[0].fields[0];
                                                    } else {
                                                      $target$$93 = 8;
                                                    }
                                                  } else {
                                                    $target$$93 = 8;
                                                  }

                                                  switch ($target$$93) {
                                                    case 0:
                                                      {
                                                        return mkInt64Val(g$$10, (0, _Long.fromInteger)(a$$156, false, 2));
                                                      }

                                                    case 1:
                                                      {
                                                        return mkInt64Val(g$$10, (0, _Long.fromInteger)(a$$157, false, 1));
                                                      }

                                                    case 2:
                                                      {
                                                        return mkInt64Val(g$$10, (0, _Long.fromInteger)(a$$158, false, 0));
                                                      }

                                                    case 3:
                                                      {
                                                        return mkInt64Val(g$$10, (0, _Long.fromValue)(a$$159, false));
                                                      }

                                                    case 4:
                                                      {
                                                        return mkInt64Val(g$$10, (0, _Long.fromInteger)(a$$160, false, 6));
                                                      }

                                                    case 5:
                                                      {
                                                        return mkInt64Val(g$$10, (0, _Long.fromInteger)(a$$161, false, 5));
                                                      }

                                                    case 6:
                                                      {
                                                        return mkInt64Val(g$$10, (0, _Long.fromInteger)(a$$162, false, 4));
                                                      }

                                                    case 7:
                                                      {
                                                        return mkInt64Val(g$$10, (0, _Long.fromValue)(a$$163, false));
                                                      }

                                                    case 8:
                                                      {
                                                        return new ExprValueInfo(0, "UnknownValue");
                                                      }
                                                  }
                                                }

                                              case 1:
                                                {
                                                  var $target$$94, a$$165, b$$67, ty$$19;

                                                  if (matchValue$$20[0].tail != null) {
                                                    if (matchValue$$20[0].head.tag === 10) {
                                                      if (matchValue$$20[0].tail.tail == null) {
                                                        if (matchValue$$20[1].tail != null) {
                                                          if (matchValue$$20[1].tail.tail != null) {
                                                            if (matchValue$$20[1].tail.tail.tail == null) {
                                                              if (matchValue$$20[2].tail != null) {
                                                                if (matchValue$$20[2].tail.tail == null) {
                                                                  if (ty$$18 = matchValue$$20[2].head, (b$$66 = matchValue$$20[1].tail.head, (a$$164 = matchValue$$20[1].head, (0, _TastOps.typeEquiv)(g$$10, ty$$18, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$10))))) {
                                                                    $target$$94 = 0;
                                                                    a$$165 = matchValue$$20[1].head;
                                                                    b$$67 = matchValue$$20[1].tail.head;
                                                                    ty$$19 = matchValue$$20[2].head;
                                                                  } else {
                                                                    $target$$94 = 1;
                                                                  }
                                                                } else {
                                                                  $target$$94 = 1;
                                                                }
                                                              } else {
                                                                $target$$94 = 1;
                                                              }
                                                            } else {
                                                              $target$$94 = 1;
                                                            }
                                                          } else {
                                                            $target$$94 = 1;
                                                          }
                                                        } else {
                                                          $target$$94 = 1;
                                                        }
                                                      } else {
                                                        $target$$94 = 1;
                                                      }
                                                    } else {
                                                      $target$$94 = 1;
                                                    }
                                                  } else {
                                                    $target$$94 = 1;
                                                  }

                                                  switch ($target$$94) {
                                                    case 0:
                                                      {
                                                        const matchValue$$51 = [stripValue(a$$165), stripValue(b$$67)];
                                                        var $target$$95, a1$$15, a2$$15, a1$$16, a2$$16, a1$$17, a2$$17, a1$$18, a2$$18, a1$$19, a2$$19;

                                                        if (matchValue$$51[0].tag === 6) {
                                                          if (matchValue$$51[0].fields[0].tag === 13) {
                                                            if (matchValue$$51[1].tag === 6) {
                                                              if (matchValue$$51[1].fields[0].tag === 13) {
                                                                $target$$95 = 0;
                                                                a1$$15 = matchValue$$51[0].fields[0].fields[0];
                                                                a2$$15 = matchValue$$51[1].fields[0].fields[0];
                                                              } else {
                                                                $target$$95 = 5;
                                                              }
                                                            } else {
                                                              $target$$95 = 5;
                                                            }
                                                          } else if (matchValue$$51[0].fields[0].tag === 2) {
                                                            if (matchValue$$51[1].tag === 6) {
                                                              if (matchValue$$51[1].fields[0].tag === 2) {
                                                                $target$$95 = 1;
                                                                a1$$16 = matchValue$$51[0].fields[0].fields[0];
                                                                a2$$16 = matchValue$$51[1].fields[0].fields[0];
                                                              } else {
                                                                $target$$95 = 5;
                                                              }
                                                            } else {
                                                              $target$$95 = 5;
                                                            }
                                                          } else if (matchValue$$51[0].fields[0].tag === 4) {
                                                            if (matchValue$$51[1].tag === 6) {
                                                              if (matchValue$$51[1].fields[0].tag === 4) {
                                                                $target$$95 = 2;
                                                                a1$$17 = matchValue$$51[0].fields[0].fields[0];
                                                                a2$$17 = matchValue$$51[1].fields[0].fields[0];
                                                              } else {
                                                                $target$$95 = 5;
                                                              }
                                                            } else {
                                                              $target$$95 = 5;
                                                            }
                                                          } else if (matchValue$$51[0].fields[0].tag === 6) {
                                                            if (matchValue$$51[1].tag === 6) {
                                                              if (matchValue$$51[1].fields[0].tag === 6) {
                                                                $target$$95 = 3;
                                                                a1$$18 = matchValue$$51[0].fields[0].fields[0];
                                                                a2$$18 = matchValue$$51[1].fields[0].fields[0];
                                                              } else {
                                                                $target$$95 = 5;
                                                              }
                                                            } else {
                                                              $target$$95 = 5;
                                                            }
                                                          } else if (matchValue$$51[0].fields[0].tag === 8) {
                                                            if (matchValue$$51[1].tag === 6) {
                                                              if (matchValue$$51[1].fields[0].tag === 8) {
                                                                $target$$95 = 4;
                                                                a1$$19 = matchValue$$51[0].fields[0].fields[0];
                                                                a2$$19 = matchValue$$51[1].fields[0].fields[0];
                                                              } else {
                                                                $target$$95 = 5;
                                                              }
                                                            } else {
                                                              $target$$95 = 5;
                                                            }
                                                          } else {
                                                            $target$$95 = 5;
                                                          }
                                                        } else {
                                                          $target$$95 = 5;
                                                        }

                                                        switch ($target$$95) {
                                                          case 0:
                                                            {
                                                              return mkBoolVal(g$$10, a1$$15 < a2$$15);
                                                            }

                                                          case 1:
                                                            {
                                                              return mkBoolVal(g$$10, a1$$16 < a2$$16);
                                                            }

                                                          case 2:
                                                            {
                                                              return mkBoolVal(g$$10, a1$$17 < a2$$17);
                                                            }

                                                          case 3:
                                                            {
                                                              return mkBoolVal(g$$10, a1$$18 < a2$$18);
                                                            }

                                                          case 4:
                                                            {
                                                              return mkBoolVal(g$$10, (0, _Long.compare)(a1$$19, a2$$19) < 0);
                                                            }

                                                          case 5:
                                                            {
                                                              return new ExprValueInfo(0, "UnknownValue");
                                                            }
                                                        }
                                                      }

                                                    case 1:
                                                      {
                                                        var $target$$96, a$$167, b$$69, ty$$21;

                                                        if (matchValue$$20[0].tail != null) {
                                                          if (matchValue$$20[0].head.tag === 7) {
                                                            if (matchValue$$20[0].tail.tail == null) {
                                                              if (matchValue$$20[1].tail != null) {
                                                                if (matchValue$$20[1].tail.tail != null) {
                                                                  if (matchValue$$20[1].tail.tail.tail == null) {
                                                                    if (matchValue$$20[2].tail != null) {
                                                                      if (matchValue$$20[2].tail.tail == null) {
                                                                        if (ty$$20 = matchValue$$20[2].head, (b$$68 = matchValue$$20[1].tail.head, (a$$166 = matchValue$$20[1].head, (0, _TastOps.typeEquiv)(g$$10, ty$$20, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$10))))) {
                                                                          $target$$96 = 0;
                                                                          a$$167 = matchValue$$20[1].head;
                                                                          b$$69 = matchValue$$20[1].tail.head;
                                                                          ty$$21 = matchValue$$20[2].head;
                                                                        } else {
                                                                          $target$$96 = 1;
                                                                        }
                                                                      } else {
                                                                        $target$$96 = 1;
                                                                      }
                                                                    } else {
                                                                      $target$$96 = 1;
                                                                    }
                                                                  } else {
                                                                    $target$$96 = 1;
                                                                  }
                                                                } else {
                                                                  $target$$96 = 1;
                                                                }
                                                              } else {
                                                                $target$$96 = 1;
                                                              }
                                                            } else {
                                                              $target$$96 = 1;
                                                            }
                                                          } else {
                                                            $target$$96 = 1;
                                                          }
                                                        } else {
                                                          $target$$96 = 1;
                                                        }

                                                        switch ($target$$96) {
                                                          case 0:
                                                            {
                                                              const matchValue$$52 = [stripValue(a$$167), stripValue(b$$69)];
                                                              var $target$$97, a1$$20, a2$$20, a1$$21, a2$$21, a1$$22, a2$$22, a1$$23, a2$$23;

                                                              if (matchValue$$52[0].tag === 6) {
                                                                if (matchValue$$52[0].fields[0].tag === 1) {
                                                                  if (matchValue$$52[1].tag === 6) {
                                                                    if (matchValue$$52[1].fields[0].tag === 1) {
                                                                      $target$$97 = 0;
                                                                      a1$$20 = matchValue$$52[0].fields[0].fields[0];
                                                                      a2$$20 = matchValue$$52[1].fields[0].fields[0];
                                                                    } else {
                                                                      $target$$97 = 4;
                                                                    }
                                                                  } else {
                                                                    $target$$97 = 4;
                                                                  }
                                                                } else if (matchValue$$52[0].fields[0].tag === 3) {
                                                                  if (matchValue$$52[1].tag === 6) {
                                                                    if (matchValue$$52[1].fields[0].tag === 3) {
                                                                      $target$$97 = 1;
                                                                      a1$$21 = matchValue$$52[0].fields[0].fields[0];
                                                                      a2$$21 = matchValue$$52[1].fields[0].fields[0];
                                                                    } else {
                                                                      $target$$97 = 4;
                                                                    }
                                                                  } else {
                                                                    $target$$97 = 4;
                                                                  }
                                                                } else if (matchValue$$52[0].fields[0].tag === 5) {
                                                                  if (matchValue$$52[1].tag === 6) {
                                                                    if (matchValue$$52[1].fields[0].tag === 5) {
                                                                      $target$$97 = 2;
                                                                      a1$$22 = matchValue$$52[0].fields[0].fields[0];
                                                                      a2$$22 = matchValue$$52[1].fields[0].fields[0];
                                                                    } else {
                                                                      $target$$97 = 4;
                                                                    }
                                                                  } else {
                                                                    $target$$97 = 4;
                                                                  }
                                                                } else if (matchValue$$52[0].fields[0].tag === 7) {
                                                                  if (matchValue$$52[1].tag === 6) {
                                                                    if (matchValue$$52[1].fields[0].tag === 7) {
                                                                      $target$$97 = 3;
                                                                      a1$$23 = matchValue$$52[0].fields[0].fields[0];
                                                                      a2$$23 = matchValue$$52[1].fields[0].fields[0];
                                                                    } else {
                                                                      $target$$97 = 4;
                                                                    }
                                                                  } else {
                                                                    $target$$97 = 4;
                                                                  }
                                                                } else {
                                                                  $target$$97 = 4;
                                                                }
                                                              } else {
                                                                $target$$97 = 4;
                                                              }

                                                              switch ($target$$97) {
                                                                case 0:
                                                                  {
                                                                    return mkBoolVal(g$$10, a1$$20 > a2$$20);
                                                                  }

                                                                case 1:
                                                                  {
                                                                    return mkBoolVal(g$$10, a1$$21 > a2$$21);
                                                                  }

                                                                case 2:
                                                                  {
                                                                    return mkBoolVal(g$$10, a1$$22 > a2$$22);
                                                                  }

                                                                case 3:
                                                                  {
                                                                    return mkBoolVal(g$$10, (0, _Long.compare)(a1$$23, a2$$23) > 0);
                                                                  }

                                                                case 4:
                                                                  {
                                                                    return new ExprValueInfo(0, "UnknownValue");
                                                                  }
                                                              }
                                                            }

                                                          case 1:
                                                            {
                                                              var $target$$98, a$$169, b$$71, ty$$23;

                                                              if (matchValue$$20[0].tail != null) {
                                                                if (matchValue$$20[0].head.tag === 8) {
                                                                  if (matchValue$$20[0].tail.tail == null) {
                                                                    if (matchValue$$20[1].tail != null) {
                                                                      if (matchValue$$20[1].tail.tail != null) {
                                                                        if (matchValue$$20[1].tail.tail.tail == null) {
                                                                          if (matchValue$$20[2].tail != null) {
                                                                            if (matchValue$$20[2].tail.tail == null) {
                                                                              if (ty$$22 = matchValue$$20[2].head, (b$$70 = matchValue$$20[1].tail.head, (a$$168 = matchValue$$20[1].head, (0, _TastOps.typeEquiv)(g$$10, ty$$22, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$10))))) {
                                                                                $target$$98 = 0;
                                                                                a$$169 = matchValue$$20[1].head;
                                                                                b$$71 = matchValue$$20[1].tail.head;
                                                                                ty$$23 = matchValue$$20[2].head;
                                                                              } else {
                                                                                $target$$98 = 1;
                                                                              }
                                                                            } else {
                                                                              $target$$98 = 1;
                                                                            }
                                                                          } else {
                                                                            $target$$98 = 1;
                                                                          }
                                                                        } else {
                                                                          $target$$98 = 1;
                                                                        }
                                                                      } else {
                                                                        $target$$98 = 1;
                                                                      }
                                                                    } else {
                                                                      $target$$98 = 1;
                                                                    }
                                                                  } else {
                                                                    $target$$98 = 1;
                                                                  }
                                                                } else {
                                                                  $target$$98 = 1;
                                                                }
                                                              } else {
                                                                $target$$98 = 1;
                                                              }

                                                              switch ($target$$98) {
                                                                case 0:
                                                                  {
                                                                    const matchValue$$53 = [stripValue(a$$169), stripValue(b$$71)];
                                                                    var $target$$99, a1$$24, a2$$24, a1$$25, a2$$25, a1$$26, a2$$26, a1$$27, a2$$27, a1$$28, a2$$28;

                                                                    if (matchValue$$53[0].tag === 6) {
                                                                      if (matchValue$$53[0].fields[0].tag === 13) {
                                                                        if (matchValue$$53[1].tag === 6) {
                                                                          if (matchValue$$53[1].fields[0].tag === 13) {
                                                                            $target$$99 = 0;
                                                                            a1$$24 = matchValue$$53[0].fields[0].fields[0];
                                                                            a2$$24 = matchValue$$53[1].fields[0].fields[0];
                                                                          } else {
                                                                            $target$$99 = 5;
                                                                          }
                                                                        } else {
                                                                          $target$$99 = 5;
                                                                        }
                                                                      } else if (matchValue$$53[0].fields[0].tag === 2) {
                                                                        if (matchValue$$53[1].tag === 6) {
                                                                          if (matchValue$$53[1].fields[0].tag === 2) {
                                                                            $target$$99 = 1;
                                                                            a1$$25 = matchValue$$53[0].fields[0].fields[0];
                                                                            a2$$25 = matchValue$$53[1].fields[0].fields[0];
                                                                          } else {
                                                                            $target$$99 = 5;
                                                                          }
                                                                        } else {
                                                                          $target$$99 = 5;
                                                                        }
                                                                      } else if (matchValue$$53[0].fields[0].tag === 4) {
                                                                        if (matchValue$$53[1].tag === 6) {
                                                                          if (matchValue$$53[1].fields[0].tag === 4) {
                                                                            $target$$99 = 2;
                                                                            a1$$26 = matchValue$$53[0].fields[0].fields[0];
                                                                            a2$$26 = matchValue$$53[1].fields[0].fields[0];
                                                                          } else {
                                                                            $target$$99 = 5;
                                                                          }
                                                                        } else {
                                                                          $target$$99 = 5;
                                                                        }
                                                                      } else if (matchValue$$53[0].fields[0].tag === 6) {
                                                                        if (matchValue$$53[1].tag === 6) {
                                                                          if (matchValue$$53[1].fields[0].tag === 6) {
                                                                            $target$$99 = 3;
                                                                            a1$$27 = matchValue$$53[0].fields[0].fields[0];
                                                                            a2$$27 = matchValue$$53[1].fields[0].fields[0];
                                                                          } else {
                                                                            $target$$99 = 5;
                                                                          }
                                                                        } else {
                                                                          $target$$99 = 5;
                                                                        }
                                                                      } else if (matchValue$$53[0].fields[0].tag === 8) {
                                                                        if (matchValue$$53[1].tag === 6) {
                                                                          if (matchValue$$53[1].fields[0].tag === 8) {
                                                                            $target$$99 = 4;
                                                                            a1$$28 = matchValue$$53[0].fields[0].fields[0];
                                                                            a2$$28 = matchValue$$53[1].fields[0].fields[0];
                                                                          } else {
                                                                            $target$$99 = 5;
                                                                          }
                                                                        } else {
                                                                          $target$$99 = 5;
                                                                        }
                                                                      } else {
                                                                        $target$$99 = 5;
                                                                      }
                                                                    } else {
                                                                      $target$$99 = 5;
                                                                    }

                                                                    switch ($target$$99) {
                                                                      case 0:
                                                                        {
                                                                          return mkBoolVal(g$$10, a1$$24 > a2$$24);
                                                                        }

                                                                      case 1:
                                                                        {
                                                                          return mkBoolVal(g$$10, a1$$25 > a2$$25);
                                                                        }

                                                                      case 2:
                                                                        {
                                                                          return mkBoolVal(g$$10, a1$$26 > a2$$26);
                                                                        }

                                                                      case 3:
                                                                        {
                                                                          return mkBoolVal(g$$10, a1$$27 > a2$$27);
                                                                        }

                                                                      case 4:
                                                                        {
                                                                          return mkBoolVal(g$$10, (0, _Long.compare)(a1$$28, a2$$28) > 0);
                                                                        }

                                                                      case 5:
                                                                        {
                                                                          return new ExprValueInfo(0, "UnknownValue");
                                                                        }
                                                                    }
                                                                  }

                                                                case 1:
                                                                  {
                                                                    var $target$$100, a$$170, n$$19, a$$187, n$$36, a$$196, n$$45, ty$$24, v$$15;

                                                                    if (matchValue$$20[0].tail == null) {
                                                                      if (matchValue$$20[1].tail != null) {
                                                                        if (matchValue$$20[1].tail.tail == null) {
                                                                          if (matchValue$$20[2].tail != null) {
                                                                            if (matchValue$$20[2].tail.tail == null) {
                                                                              $target$$100 = 3;
                                                                              ty$$24 = matchValue$$20[2].head;
                                                                              v$$15 = matchValue$$20[1].head;
                                                                            } else {
                                                                              $target$$100 = 4;
                                                                            }
                                                                          } else {
                                                                            $target$$100 = 4;
                                                                          }
                                                                        } else {
                                                                          $target$$100 = 4;
                                                                        }
                                                                      } else {
                                                                        $target$$100 = 4;
                                                                      }
                                                                    } else if (matchValue$$20[0].head.tag === 19) {
                                                                      if (matchValue$$20[0].tail.tail == null) {
                                                                        if (matchValue$$20[1].tail != null) {
                                                                          if (matchValue$$20[1].tail.tail != null) {
                                                                            if (matchValue$$20[1].tail.tail.tail == null) {
                                                                              $target$$100 = 0;
                                                                              a$$170 = matchValue$$20[1].head;
                                                                              n$$19 = matchValue$$20[1].tail.head;
                                                                            } else {
                                                                              $target$$100 = 4;
                                                                            }
                                                                          } else {
                                                                            $target$$100 = 4;
                                                                          }
                                                                        } else {
                                                                          $target$$100 = 4;
                                                                        }
                                                                      } else {
                                                                        $target$$100 = 4;
                                                                      }
                                                                    } else if (matchValue$$20[0].head.tag === 20) {
                                                                      if (matchValue$$20[0].tail.tail == null) {
                                                                        if (matchValue$$20[1].tail != null) {
                                                                          if (matchValue$$20[1].tail.tail != null) {
                                                                            if (matchValue$$20[1].tail.tail.tail == null) {
                                                                              $target$$100 = 1;
                                                                              a$$187 = matchValue$$20[1].head;
                                                                              n$$36 = matchValue$$20[1].tail.head;
                                                                            } else {
                                                                              $target$$100 = 4;
                                                                            }
                                                                          } else {
                                                                            $target$$100 = 4;
                                                                          }
                                                                        } else {
                                                                          $target$$100 = 4;
                                                                        }
                                                                      } else {
                                                                        $target$$100 = 4;
                                                                      }
                                                                    } else if (matchValue$$20[0].head.tag === 21) {
                                                                      if (matchValue$$20[0].tail.tail == null) {
                                                                        if (matchValue$$20[1].tail != null) {
                                                                          if (matchValue$$20[1].tail.tail != null) {
                                                                            if (matchValue$$20[1].tail.tail.tail == null) {
                                                                              $target$$100 = 2;
                                                                              a$$196 = matchValue$$20[1].head;
                                                                              n$$45 = matchValue$$20[1].tail.head;
                                                                            } else {
                                                                              $target$$100 = 4;
                                                                            }
                                                                          } else {
                                                                            $target$$100 = 4;
                                                                          }
                                                                        } else {
                                                                          $target$$100 = 4;
                                                                        }
                                                                      } else {
                                                                        $target$$100 = 4;
                                                                      }
                                                                    } else {
                                                                      $target$$100 = 4;
                                                                    }

                                                                    switch ($target$$100) {
                                                                      case 0:
                                                                        {
                                                                          const matchValue$$54 = [stripValue(a$$170), stripValue(n$$19)];
                                                                          var $target$$101, a$$172, n$$21;

                                                                          if (matchValue$$54[0].tag === 6) {
                                                                            if (matchValue$$54[0].fields[0].tag === 7) {
                                                                              if (matchValue$$54[1].tag === 6) {
                                                                                if (matchValue$$54[1].fields[0].tag === 5) {
                                                                                  if (n$$20 = matchValue$$54[1].fields[0].fields[0] | 0, (a$$171 = matchValue$$54[0].fields[0].fields[0], n$$20 >= 0 ? n$$20 <= 63 : false)) {
                                                                                    $target$$101 = 0;
                                                                                    a$$172 = matchValue$$54[0].fields[0].fields[0];
                                                                                    n$$21 = matchValue$$54[1].fields[0].fields[0];
                                                                                  } else {
                                                                                    $target$$101 = 1;
                                                                                  }
                                                                                } else {
                                                                                  $target$$101 = 1;
                                                                                }
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
                                                                                return mkInt64Val(g$$10, (0, _Long.op_LeftShift)(a$$172, n$$21));
                                                                              }

                                                                            case 1:
                                                                              {
                                                                                var $target$$102, a$$174, n$$23;

                                                                                if (matchValue$$54[0].tag === 6) {
                                                                                  if (matchValue$$54[0].fields[0].tag === 5) {
                                                                                    if (matchValue$$54[1].tag === 6) {
                                                                                      if (matchValue$$54[1].fields[0].tag === 5) {
                                                                                        if (n$$22 = matchValue$$54[1].fields[0].fields[0] | 0, (a$$173 = matchValue$$54[0].fields[0].fields[0] | 0, n$$22 >= 0 ? n$$22 <= 31 : false)) {
                                                                                          $target$$102 = 0;
                                                                                          a$$174 = matchValue$$54[0].fields[0].fields[0];
                                                                                          n$$23 = matchValue$$54[1].fields[0].fields[0];
                                                                                        } else {
                                                                                          $target$$102 = 1;
                                                                                        }
                                                                                      } else {
                                                                                        $target$$102 = 1;
                                                                                      }
                                                                                    } else {
                                                                                      $target$$102 = 1;
                                                                                    }
                                                                                  } else {
                                                                                    $target$$102 = 1;
                                                                                  }
                                                                                } else {
                                                                                  $target$$102 = 1;
                                                                                }

                                                                                switch ($target$$102) {
                                                                                  case 0:
                                                                                    {
                                                                                      return mkInt32Val(g$$10, a$$174 << n$$23);
                                                                                    }

                                                                                  case 1:
                                                                                    {
                                                                                      var $target$$103, a$$176, n$$25;

                                                                                      if (matchValue$$54[0].tag === 6) {
                                                                                        if (matchValue$$54[0].fields[0].tag === 3) {
                                                                                          if (matchValue$$54[1].tag === 6) {
                                                                                            if (matchValue$$54[1].fields[0].tag === 5) {
                                                                                              if (n$$24 = matchValue$$54[1].fields[0].fields[0] | 0, (a$$175 = matchValue$$54[0].fields[0].fields[0] | 0, n$$24 >= 0 ? n$$24 <= 15 : false)) {
                                                                                                $target$$103 = 0;
                                                                                                a$$176 = matchValue$$54[0].fields[0].fields[0];
                                                                                                n$$25 = matchValue$$54[1].fields[0].fields[0];
                                                                                              } else {
                                                                                                $target$$103 = 1;
                                                                                              }
                                                                                            } else {
                                                                                              $target$$103 = 1;
                                                                                            }
                                                                                          } else {
                                                                                            $target$$103 = 1;
                                                                                          }
                                                                                        } else {
                                                                                          $target$$103 = 1;
                                                                                        }
                                                                                      } else {
                                                                                        $target$$103 = 1;
                                                                                      }

                                                                                      switch ($target$$103) {
                                                                                        case 0:
                                                                                          {
                                                                                            return mkInt16Val(g$$10, a$$176 << n$$25);
                                                                                          }

                                                                                        case 1:
                                                                                          {
                                                                                            var $target$$104, a$$178, n$$27;

                                                                                            if (matchValue$$54[0].tag === 6) {
                                                                                              if (matchValue$$54[0].fields[0].tag === 1) {
                                                                                                if (matchValue$$54[1].tag === 6) {
                                                                                                  if (matchValue$$54[1].fields[0].tag === 5) {
                                                                                                    if (n$$26 = matchValue$$54[1].fields[0].fields[0] | 0, (a$$177 = matchValue$$54[0].fields[0].fields[0] | 0, n$$26 >= 0 ? n$$26 <= 7 : false)) {
                                                                                                      $target$$104 = 0;
                                                                                                      a$$178 = matchValue$$54[0].fields[0].fields[0];
                                                                                                      n$$27 = matchValue$$54[1].fields[0].fields[0];
                                                                                                    } else {
                                                                                                      $target$$104 = 1;
                                                                                                    }
                                                                                                  } else {
                                                                                                    $target$$104 = 1;
                                                                                                  }
                                                                                                } else {
                                                                                                  $target$$104 = 1;
                                                                                                }
                                                                                              } else {
                                                                                                $target$$104 = 1;
                                                                                              }
                                                                                            } else {
                                                                                              $target$$104 = 1;
                                                                                            }

                                                                                            switch ($target$$104) {
                                                                                              case 0:
                                                                                                {
                                                                                                  return mkInt8Val(g$$10, a$$178 << n$$27);
                                                                                                }

                                                                                              case 1:
                                                                                                {
                                                                                                  var $target$$105, a$$180, n$$29;

                                                                                                  if (matchValue$$54[0].tag === 6) {
                                                                                                    if (matchValue$$54[0].fields[0].tag === 8) {
                                                                                                      if (matchValue$$54[1].tag === 6) {
                                                                                                        if (matchValue$$54[1].fields[0].tag === 5) {
                                                                                                          if (n$$28 = matchValue$$54[1].fields[0].fields[0] | 0, (a$$179 = matchValue$$54[0].fields[0].fields[0], n$$28 >= 0 ? n$$28 <= 63 : false)) {
                                                                                                            $target$$105 = 0;
                                                                                                            a$$180 = matchValue$$54[0].fields[0].fields[0];
                                                                                                            n$$29 = matchValue$$54[1].fields[0].fields[0];
                                                                                                          } else {
                                                                                                            $target$$105 = 1;
                                                                                                          }
                                                                                                        } else {
                                                                                                          $target$$105 = 1;
                                                                                                        }
                                                                                                      } else {
                                                                                                        $target$$105 = 1;
                                                                                                      }
                                                                                                    } else {
                                                                                                      $target$$105 = 1;
                                                                                                    }
                                                                                                  } else {
                                                                                                    $target$$105 = 1;
                                                                                                  }

                                                                                                  switch ($target$$105) {
                                                                                                    case 0:
                                                                                                      {
                                                                                                        return mkUInt64Val(g$$10, (0, _Long.op_LeftShift)(a$$180, n$$29));
                                                                                                      }

                                                                                                    case 1:
                                                                                                      {
                                                                                                        var $target$$106, a$$182, n$$31;

                                                                                                        if (matchValue$$54[0].tag === 6) {
                                                                                                          if (matchValue$$54[0].fields[0].tag === 6) {
                                                                                                            if (matchValue$$54[1].tag === 6) {
                                                                                                              if (matchValue$$54[1].fields[0].tag === 5) {
                                                                                                                if (n$$30 = matchValue$$54[1].fields[0].fields[0] | 0, (a$$181 = matchValue$$54[0].fields[0].fields[0], n$$30 >= 0 ? n$$30 <= 31 : false)) {
                                                                                                                  $target$$106 = 0;
                                                                                                                  a$$182 = matchValue$$54[0].fields[0].fields[0];
                                                                                                                  n$$31 = matchValue$$54[1].fields[0].fields[0];
                                                                                                                } else {
                                                                                                                  $target$$106 = 1;
                                                                                                                }
                                                                                                              } else {
                                                                                                                $target$$106 = 1;
                                                                                                              }
                                                                                                            } else {
                                                                                                              $target$$106 = 1;
                                                                                                            }
                                                                                                          } else {
                                                                                                            $target$$106 = 1;
                                                                                                          }
                                                                                                        } else {
                                                                                                          $target$$106 = 1;
                                                                                                        }

                                                                                                        switch ($target$$106) {
                                                                                                          case 0:
                                                                                                            {
                                                                                                              return mkUInt32Val(g$$10, a$$182 << n$$31 >>> 0);
                                                                                                            }

                                                                                                          case 1:
                                                                                                            {
                                                                                                              var $target$$107, a$$184, n$$33;

                                                                                                              if (matchValue$$54[0].tag === 6) {
                                                                                                                if (matchValue$$54[0].fields[0].tag === 4) {
                                                                                                                  if (matchValue$$54[1].tag === 6) {
                                                                                                                    if (matchValue$$54[1].fields[0].tag === 5) {
                                                                                                                      if (n$$32 = matchValue$$54[1].fields[0].fields[0] | 0, (a$$183 = matchValue$$54[0].fields[0].fields[0], n$$32 >= 0 ? n$$32 <= 15 : false)) {
                                                                                                                        $target$$107 = 0;
                                                                                                                        a$$184 = matchValue$$54[0].fields[0].fields[0];
                                                                                                                        n$$33 = matchValue$$54[1].fields[0].fields[0];
                                                                                                                      } else {
                                                                                                                        $target$$107 = 1;
                                                                                                                      }
                                                                                                                    } else {
                                                                                                                      $target$$107 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$107 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$107 = 1;
                                                                                                                }
                                                                                                              } else {
                                                                                                                $target$$107 = 1;
                                                                                                              }

                                                                                                              switch ($target$$107) {
                                                                                                                case 0:
                                                                                                                  {
                                                                                                                    return mkUInt16Val(g$$10, a$$184 << n$$33);
                                                                                                                  }

                                                                                                                case 1:
                                                                                                                  {
                                                                                                                    var $target$$108, a$$186, n$$35;

                                                                                                                    if (matchValue$$54[0].tag === 6) {
                                                                                                                      if (matchValue$$54[0].fields[0].tag === 2) {
                                                                                                                        if (matchValue$$54[1].tag === 6) {
                                                                                                                          if (matchValue$$54[1].fields[0].tag === 5) {
                                                                                                                            if (n$$34 = matchValue$$54[1].fields[0].fields[0] | 0, (a$$185 = matchValue$$54[0].fields[0].fields[0], n$$34 >= 0 ? n$$34 <= 7 : false)) {
                                                                                                                              $target$$108 = 0;
                                                                                                                              a$$186 = matchValue$$54[0].fields[0].fields[0];
                                                                                                                              n$$35 = matchValue$$54[1].fields[0].fields[0];
                                                                                                                            } else {
                                                                                                                              $target$$108 = 1;
                                                                                                                            }
                                                                                                                          } else {
                                                                                                                            $target$$108 = 1;
                                                                                                                          }
                                                                                                                        } else {
                                                                                                                          $target$$108 = 1;
                                                                                                                        }
                                                                                                                      } else {
                                                                                                                        $target$$108 = 1;
                                                                                                                      }
                                                                                                                    } else {
                                                                                                                      $target$$108 = 1;
                                                                                                                    }

                                                                                                                    switch ($target$$108) {
                                                                                                                      case 0:
                                                                                                                        {
                                                                                                                          return mkUInt8Val(g$$10, a$$186 << n$$35);
                                                                                                                        }

                                                                                                                      case 1:
                                                                                                                        {
                                                                                                                          return new ExprValueInfo(0, "UnknownValue");
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

                                                                      case 1:
                                                                        {
                                                                          const matchValue$$55 = [stripValue(a$$187), stripValue(n$$36)];
                                                                          var $target$$109, a$$189, n$$38;

                                                                          if (matchValue$$55[0].tag === 6) {
                                                                            if (matchValue$$55[0].fields[0].tag === 1) {
                                                                              if (matchValue$$55[1].tag === 6) {
                                                                                if (matchValue$$55[1].fields[0].tag === 5) {
                                                                                  if (n$$37 = matchValue$$55[1].fields[0].fields[0] | 0, (a$$188 = matchValue$$55[0].fields[0].fields[0] | 0, n$$37 >= 0 ? n$$37 <= 7 : false)) {
                                                                                    $target$$109 = 0;
                                                                                    a$$189 = matchValue$$55[0].fields[0].fields[0];
                                                                                    n$$38 = matchValue$$55[1].fields[0].fields[0];
                                                                                  } else {
                                                                                    $target$$109 = 1;
                                                                                  }
                                                                                } else {
                                                                                  $target$$109 = 1;
                                                                                }
                                                                              } else {
                                                                                $target$$109 = 1;
                                                                              }
                                                                            } else {
                                                                              $target$$109 = 1;
                                                                            }
                                                                          } else {
                                                                            $target$$109 = 1;
                                                                          }

                                                                          switch ($target$$109) {
                                                                            case 0:
                                                                              {
                                                                                return mkInt8Val(g$$10, a$$189 >> n$$38);
                                                                              }

                                                                            case 1:
                                                                              {
                                                                                var $target$$110, a$$191, n$$40;

                                                                                if (matchValue$$55[0].tag === 6) {
                                                                                  if (matchValue$$55[0].fields[0].tag === 3) {
                                                                                    if (matchValue$$55[1].tag === 6) {
                                                                                      if (matchValue$$55[1].fields[0].tag === 5) {
                                                                                        if (n$$39 = matchValue$$55[1].fields[0].fields[0] | 0, (a$$190 = matchValue$$55[0].fields[0].fields[0] | 0, n$$39 >= 0 ? n$$39 <= 15 : false)) {
                                                                                          $target$$110 = 0;
                                                                                          a$$191 = matchValue$$55[0].fields[0].fields[0];
                                                                                          n$$40 = matchValue$$55[1].fields[0].fields[0];
                                                                                        } else {
                                                                                          $target$$110 = 1;
                                                                                        }
                                                                                      } else {
                                                                                        $target$$110 = 1;
                                                                                      }
                                                                                    } else {
                                                                                      $target$$110 = 1;
                                                                                    }
                                                                                  } else {
                                                                                    $target$$110 = 1;
                                                                                  }
                                                                                } else {
                                                                                  $target$$110 = 1;
                                                                                }

                                                                                switch ($target$$110) {
                                                                                  case 0:
                                                                                    {
                                                                                      return mkInt16Val(g$$10, a$$191 >> n$$40);
                                                                                    }

                                                                                  case 1:
                                                                                    {
                                                                                      var $target$$111, a$$193, n$$42;

                                                                                      if (matchValue$$55[0].tag === 6) {
                                                                                        if (matchValue$$55[0].fields[0].tag === 5) {
                                                                                          if (matchValue$$55[1].tag === 6) {
                                                                                            if (matchValue$$55[1].fields[0].tag === 5) {
                                                                                              if (n$$41 = matchValue$$55[1].fields[0].fields[0] | 0, (a$$192 = matchValue$$55[0].fields[0].fields[0] | 0, n$$41 >= 0 ? n$$41 <= 31 : false)) {
                                                                                                $target$$111 = 0;
                                                                                                a$$193 = matchValue$$55[0].fields[0].fields[0];
                                                                                                n$$42 = matchValue$$55[1].fields[0].fields[0];
                                                                                              } else {
                                                                                                $target$$111 = 1;
                                                                                              }
                                                                                            } else {
                                                                                              $target$$111 = 1;
                                                                                            }
                                                                                          } else {
                                                                                            $target$$111 = 1;
                                                                                          }
                                                                                        } else {
                                                                                          $target$$111 = 1;
                                                                                        }
                                                                                      } else {
                                                                                        $target$$111 = 1;
                                                                                      }

                                                                                      switch ($target$$111) {
                                                                                        case 0:
                                                                                          {
                                                                                            return mkInt32Val(g$$10, a$$193 >> n$$42);
                                                                                          }

                                                                                        case 1:
                                                                                          {
                                                                                            var $target$$112, a$$195, n$$44;

                                                                                            if (matchValue$$55[0].tag === 6) {
                                                                                              if (matchValue$$55[0].fields[0].tag === 7) {
                                                                                                if (matchValue$$55[1].tag === 6) {
                                                                                                  if (matchValue$$55[1].fields[0].tag === 5) {
                                                                                                    if (n$$43 = matchValue$$55[1].fields[0].fields[0] | 0, (a$$194 = matchValue$$55[0].fields[0].fields[0], n$$43 >= 0 ? n$$43 <= 63 : false)) {
                                                                                                      $target$$112 = 0;
                                                                                                      a$$195 = matchValue$$55[0].fields[0].fields[0];
                                                                                                      n$$44 = matchValue$$55[1].fields[0].fields[0];
                                                                                                    } else {
                                                                                                      $target$$112 = 1;
                                                                                                    }
                                                                                                  } else {
                                                                                                    $target$$112 = 1;
                                                                                                  }
                                                                                                } else {
                                                                                                  $target$$112 = 1;
                                                                                                }
                                                                                              } else {
                                                                                                $target$$112 = 1;
                                                                                              }
                                                                                            } else {
                                                                                              $target$$112 = 1;
                                                                                            }

                                                                                            switch ($target$$112) {
                                                                                              case 0:
                                                                                                {
                                                                                                  return mkInt64Val(g$$10, (0, _Long.op_RightShift)(a$$195, n$$44));
                                                                                                }

                                                                                              case 1:
                                                                                                {
                                                                                                  return new ExprValueInfo(0, "UnknownValue");
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
                                                                          const matchValue$$56 = [stripValue(a$$196), stripValue(n$$45)];
                                                                          var $target$$113, a$$198, n$$47;

                                                                          if (matchValue$$56[0].tag === 6) {
                                                                            if (matchValue$$56[0].fields[0].tag === 2) {
                                                                              if (matchValue$$56[1].tag === 6) {
                                                                                if (matchValue$$56[1].fields[0].tag === 5) {
                                                                                  if (n$$46 = matchValue$$56[1].fields[0].fields[0] | 0, (a$$197 = matchValue$$56[0].fields[0].fields[0], n$$46 >= 0 ? n$$46 <= 7 : false)) {
                                                                                    $target$$113 = 0;
                                                                                    a$$198 = matchValue$$56[0].fields[0].fields[0];
                                                                                    n$$47 = matchValue$$56[1].fields[0].fields[0];
                                                                                  } else {
                                                                                    $target$$113 = 1;
                                                                                  }
                                                                                } else {
                                                                                  $target$$113 = 1;
                                                                                }
                                                                              } else {
                                                                                $target$$113 = 1;
                                                                              }
                                                                            } else {
                                                                              $target$$113 = 1;
                                                                            }
                                                                          } else {
                                                                            $target$$113 = 1;
                                                                          }

                                                                          switch ($target$$113) {
                                                                            case 0:
                                                                              {
                                                                                return mkUInt8Val(g$$10, a$$198 >> n$$47);
                                                                              }

                                                                            case 1:
                                                                              {
                                                                                var $target$$114, a$$200, n$$49;

                                                                                if (matchValue$$56[0].tag === 6) {
                                                                                  if (matchValue$$56[0].fields[0].tag === 4) {
                                                                                    if (matchValue$$56[1].tag === 6) {
                                                                                      if (matchValue$$56[1].fields[0].tag === 5) {
                                                                                        if (n$$48 = matchValue$$56[1].fields[0].fields[0] | 0, (a$$199 = matchValue$$56[0].fields[0].fields[0], n$$48 >= 0 ? n$$48 <= 15 : false)) {
                                                                                          $target$$114 = 0;
                                                                                          a$$200 = matchValue$$56[0].fields[0].fields[0];
                                                                                          n$$49 = matchValue$$56[1].fields[0].fields[0];
                                                                                        } else {
                                                                                          $target$$114 = 1;
                                                                                        }
                                                                                      } else {
                                                                                        $target$$114 = 1;
                                                                                      }
                                                                                    } else {
                                                                                      $target$$114 = 1;
                                                                                    }
                                                                                  } else {
                                                                                    $target$$114 = 1;
                                                                                  }
                                                                                } else {
                                                                                  $target$$114 = 1;
                                                                                }

                                                                                switch ($target$$114) {
                                                                                  case 0:
                                                                                    {
                                                                                      return mkUInt16Val(g$$10, a$$200 >> n$$49);
                                                                                    }

                                                                                  case 1:
                                                                                    {
                                                                                      var $target$$115, a$$202, n$$51;

                                                                                      if (matchValue$$56[0].tag === 6) {
                                                                                        if (matchValue$$56[0].fields[0].tag === 6) {
                                                                                          if (matchValue$$56[1].tag === 6) {
                                                                                            if (matchValue$$56[1].fields[0].tag === 5) {
                                                                                              if (n$$50 = matchValue$$56[1].fields[0].fields[0] | 0, (a$$201 = matchValue$$56[0].fields[0].fields[0], n$$50 >= 0 ? n$$50 <= 31 : false)) {
                                                                                                $target$$115 = 0;
                                                                                                a$$202 = matchValue$$56[0].fields[0].fields[0];
                                                                                                n$$51 = matchValue$$56[1].fields[0].fields[0];
                                                                                              } else {
                                                                                                $target$$115 = 1;
                                                                                              }
                                                                                            } else {
                                                                                              $target$$115 = 1;
                                                                                            }
                                                                                          } else {
                                                                                            $target$$115 = 1;
                                                                                          }
                                                                                        } else {
                                                                                          $target$$115 = 1;
                                                                                        }
                                                                                      } else {
                                                                                        $target$$115 = 1;
                                                                                      }

                                                                                      switch ($target$$115) {
                                                                                        case 0:
                                                                                          {
                                                                                            return mkUInt32Val(g$$10, a$$202 >>> n$$51);
                                                                                          }

                                                                                        case 1:
                                                                                          {
                                                                                            var $target$$116, a$$204, n$$53;

                                                                                            if (matchValue$$56[0].tag === 6) {
                                                                                              if (matchValue$$56[0].fields[0].tag === 8) {
                                                                                                if (matchValue$$56[1].tag === 6) {
                                                                                                  if (matchValue$$56[1].fields[0].tag === 5) {
                                                                                                    if (n$$52 = matchValue$$56[1].fields[0].fields[0] | 0, (a$$203 = matchValue$$56[0].fields[0].fields[0], n$$52 >= 0 ? n$$52 <= 63 : false)) {
                                                                                                      $target$$116 = 0;
                                                                                                      a$$204 = matchValue$$56[0].fields[0].fields[0];
                                                                                                      n$$53 = matchValue$$56[1].fields[0].fields[0];
                                                                                                    } else {
                                                                                                      $target$$116 = 1;
                                                                                                    }
                                                                                                  } else {
                                                                                                    $target$$116 = 1;
                                                                                                  }
                                                                                                } else {
                                                                                                  $target$$116 = 1;
                                                                                                }
                                                                                              } else {
                                                                                                $target$$116 = 1;
                                                                                              }
                                                                                            } else {
                                                                                              $target$$116 = 1;
                                                                                            }

                                                                                            switch ($target$$116) {
                                                                                              case 0:
                                                                                                {
                                                                                                  return mkUInt64Val(g$$10, (0, _Long.op_RightShiftUnsigned)(a$$204, n$$53));
                                                                                                }

                                                                                              case 1:
                                                                                                {
                                                                                                  return new ExprValueInfo(0, "UnknownValue");
                                                                                                }
                                                                                            }
                                                                                          }
                                                                                      }
                                                                                    }
                                                                                }
                                                                              }
                                                                          }
                                                                        }

                                                                      case 3:
                                                                        {
                                                                          const matchValue$$57 = stripValue(v$$15);
                                                                          var $target$$117, a$$205, a$$206, a$$207, a$$208, a$$209, a$$210, a$$211, a$$212, a$$213;

                                                                          if (matchValue$$57.tag === 6) {
                                                                            if (matchValue$$57.fields[0].tag === 0) {
                                                                              $target$$117 = 0;
                                                                              a$$205 = matchValue$$57.fields[0].fields[0];
                                                                            } else if (matchValue$$57.fields[0].tag === 1) {
                                                                              $target$$117 = 1;
                                                                              a$$206 = matchValue$$57.fields[0].fields[0];
                                                                            } else if (matchValue$$57.fields[0].tag === 2) {
                                                                              $target$$117 = 2;
                                                                              a$$207 = matchValue$$57.fields[0].fields[0];
                                                                            } else if (matchValue$$57.fields[0].tag === 3) {
                                                                              $target$$117 = 3;
                                                                              a$$208 = matchValue$$57.fields[0].fields[0];
                                                                            } else if (matchValue$$57.fields[0].tag === 4) {
                                                                              $target$$117 = 4;
                                                                              a$$209 = matchValue$$57.fields[0].fields[0];
                                                                            } else if (matchValue$$57.fields[0].tag === 5) {
                                                                              $target$$117 = 5;
                                                                              a$$210 = matchValue$$57.fields[0].fields[0];
                                                                            } else if (matchValue$$57.fields[0].tag === 6) {
                                                                              $target$$117 = 6;
                                                                              a$$211 = matchValue$$57.fields[0].fields[0];
                                                                            } else if (matchValue$$57.fields[0].tag === 7) {
                                                                              $target$$117 = 7;
                                                                              a$$212 = matchValue$$57.fields[0].fields[0];
                                                                            } else if (matchValue$$57.fields[0].tag === 8) {
                                                                              $target$$117 = 8;
                                                                              a$$213 = matchValue$$57.fields[0].fields[0];
                                                                            } else {
                                                                              $target$$117 = 9;
                                                                            }
                                                                          } else {
                                                                            $target$$117 = 9;
                                                                          }

                                                                          switch ($target$$117) {
                                                                            case 0:
                                                                              {
                                                                                if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$10))) {
                                                                                  return v$$15;
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_sbyte_ty)(g$$10))) {
                                                                                  return mkInt8Val(g$$10, a$$205 ? 1 : 0);
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_int16_ty)(g$$10))) {
                                                                                  return mkInt16Val(g$$10, a$$205 ? 1 : 0);
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$10))) {
                                                                                  return mkInt32Val(g$$10, a$$205 ? 1 : 0);
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_byte_ty)(g$$10))) {
                                                                                  return mkUInt8Val(g$$10, a$$205 ? 1 : 0);
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_uint16_ty)(g$$10))) {
                                                                                  return mkUInt16Val(g$$10, a$$205 ? 1 : 0);
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_uint32_ty)(g$$10))) {
                                                                                  return mkUInt32Val(g$$10, a$$205 ? 1 : 0);
                                                                                } else {
                                                                                  return new ExprValueInfo(0, "UnknownValue");
                                                                                }
                                                                              }

                                                                            case 1:
                                                                              {
                                                                                if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_sbyte_ty)(g$$10))) {
                                                                                  return v$$15;
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_int16_ty)(g$$10))) {
                                                                                  return mkInt16Val(g$$10, a$$206);
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$10))) {
                                                                                  return mkInt32Val(g$$10, a$$206);
                                                                                } else {
                                                                                  return new ExprValueInfo(0, "UnknownValue");
                                                                                }
                                                                              }

                                                                            case 2:
                                                                              {
                                                                                if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_byte_ty)(g$$10))) {
                                                                                  return v$$15;
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_uint16_ty)(g$$10))) {
                                                                                  return mkUInt16Val(g$$10, a$$207);
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_uint32_ty)(g$$10))) {
                                                                                  return mkUInt32Val(g$$10, a$$207);
                                                                                } else {
                                                                                  return new ExprValueInfo(0, "UnknownValue");
                                                                                }
                                                                              }

                                                                            case 3:
                                                                              {
                                                                                if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_int16_ty)(g$$10))) {
                                                                                  return v$$15;
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$10))) {
                                                                                  return mkInt32Val(g$$10, a$$208);
                                                                                } else {
                                                                                  return new ExprValueInfo(0, "UnknownValue");
                                                                                }
                                                                              }

                                                                            case 4:
                                                                              {
                                                                                if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_uint16_ty)(g$$10))) {
                                                                                  return v$$15;
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_uint32_ty)(g$$10))) {
                                                                                  return mkUInt32Val(g$$10, a$$209);
                                                                                } else {
                                                                                  return new ExprValueInfo(0, "UnknownValue");
                                                                                }
                                                                              }

                                                                            case 5:
                                                                              {
                                                                                if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$10))) {
                                                                                  return v$$15;
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_uint32_ty)(g$$10))) {
                                                                                  return mkUInt32Val(g$$10, a$$210 >>> 0);
                                                                                } else {
                                                                                  return new ExprValueInfo(0, "UnknownValue");
                                                                                }
                                                                              }

                                                                            case 6:
                                                                              {
                                                                                if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_uint32_ty)(g$$10))) {
                                                                                  return v$$15;
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$10))) {
                                                                                  return mkInt32Val(g$$10, ~~a$$211);
                                                                                } else {
                                                                                  return new ExprValueInfo(0, "UnknownValue");
                                                                                }
                                                                              }

                                                                            case 7:
                                                                              {
                                                                                if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_int64_ty)(g$$10))) {
                                                                                  return v$$15;
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_uint64_ty)(g$$10))) {
                                                                                  return mkUInt64Val(g$$10, (0, _Long.fromValue)(a$$212, true));
                                                                                } else {
                                                                                  return new ExprValueInfo(0, "UnknownValue");
                                                                                }
                                                                              }

                                                                            case 8:
                                                                              {
                                                                                if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_uint64_ty)(g$$10))) {
                                                                                  return v$$15;
                                                                                } else if ((0, _TastOps.typeEquiv)(g$$10, ty$$24, (0, _TcGlobals.TcGlobals$$get_int64_ty)(g$$10))) {
                                                                                  return mkInt64Val(g$$10, (0, _Long.fromValue)(a$$213, false));
                                                                                } else {
                                                                                  return new ExprValueInfo(0, "UnknownValue");
                                                                                }
                                                                              }

                                                                            case 9:
                                                                              {
                                                                                return new ExprValueInfo(0, "UnknownValue");
                                                                              }
                                                                          }
                                                                        }

                                                                      case 4:
                                                                        {
                                                                          return new ExprValueInfo(0, "UnknownValue");
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

function OptimizeList(f$$6, l$$2) {
  return (0, _List.unzip)((0, _List.map)(f$$6, l$$2));
}

const NoExprs = [(0, _Types.L)(), (0, _Types.L)()];
exports.NoExprs = NoExprs;

function CombineValueInfos(einfos, res$$14) {
  return new Summary$00601(res$$14, (0, _List.sumBy)(function projection$$1(x$$73) {
    return x$$73.FunctionSize;
  }, einfos, {
    GetZero() {
      return 0;
    },

    Add($x$$10, $y$$11) {
      return $x$$10 + $y$$11;
    }

  }), (0, _List.sumBy)(function projection(x$$72) {
    return x$$72.TotalSize;
  }, einfos, {
    GetZero() {
      return 0;
    },

    Add($x$$8, $y$$9) {
      return $x$$8 + $y$$9;
    }

  }), (0, _List.exists)(function (x$$74) {
    return x$$74.HasEffect;
  }, einfos), (0, _List.exists)(function (x$$75) {
    return x$$75.MightMakeCriticalTailcall;
  }, einfos));
}

function CombineValueInfosUnknown(einfos$$1) {
  return CombineValueInfos(einfos$$1, new ExprValueInfo(0, "UnknownValue"));
}

function AbstractLazyModulInfoByHiding(isAssemblyBoundary, mhi) {
  const patternInput$$1 = [function (arg10$0040) {
    return (0, _zset.ZsetModule$$$memberOf)(mhi.mhiTycons, arg10$0040);
  }, function (arg10$0040$$1) {
    return (0, _zset.ZsetModule$$$memberOf)(mhi.mhiTyconReprs, arg10$0040$$1);
  }, function (arg10$0040$$2) {
    return (0, _zset.ZsetModule$$$memberOf)(mhi.mhiVals, arg10$0040$$2);
  }, function (arg10$0040$$3) {
    return (0, _zset.ZsetModule$$$memberOf)(mhi.mhiRecdFields, arg10$0040$$3);
  }, function (arg10$0040$$4) {
    return (0, _zset.ZsetModule$$$memberOf)(mhi.mhiUnionCases, arg10$0040$$4);
  }];

  const abstractExprInfo = function abstractExprInfo(ivalue) {
    var ty$$25, ftyvs, expr$$1, fvs, expr$$2, fvs$$1;
    var $target$$120, detail, vref2, expr$$3;

    if (ivalue.tag === 2) {
      $target$$120 = 0;
      detail = ivalue.fields[1];
      vref2 = ivalue.fields[0];
    } else if (ivalue.tag === 7) {
      if (expr$$1 = ivalue.fields[3], (fvs = (0, _TastOps.freeInExpr)(_TastOps.CollectAll, expr$$1), (((((isAssemblyBoundary ? !(0, _TastOps.freeVarsAllPublic)(fvs) : false) ? true : (0, _zset.ZsetModule$$$exists)(patternInput$$1[2], fvs.FreeLocals)) ? true : (0, _zset.ZsetModule$$$exists)(patternInput$$1[0], fvs.FreeTyvars.FreeTycons)) ? true : (0, _zset.ZsetModule$$$exists)(patternInput$$1[1], fvs.FreeLocalTyconReprs)) ? true : (0, _zset.ZsetModule$$$exists)(patternInput$$1[3], fvs.FreeRecdFields)) ? true : (0, _zset.ZsetModule$$$exists)(patternInput$$1[4], fvs.FreeUnionCases))) {
        $target$$120 = 1;
        expr$$3 = ivalue.fields[3];
      } else {
        $target$$120 = 2;
      }
    } else if (ivalue.tag === 8) {
      if (expr$$2 = ivalue.fields[1], (fvs$$1 = (0, _TastOps.freeInExpr)(_TastOps.CollectAll, expr$$2), (((((isAssemblyBoundary ? !(0, _TastOps.freeVarsAllPublic)(fvs$$1) : false) ? true : (0, _zset.ZsetModule$$$exists)(patternInput$$1[2], fvs$$1.FreeLocals)) ? true : (0, _zset.ZsetModule$$$exists)(patternInput$$1[0], fvs$$1.FreeTyvars.FreeTycons)) ? true : (0, _zset.ZsetModule$$$exists)(patternInput$$1[1], fvs$$1.FreeLocalTyconReprs)) ? true : (0, _zset.ZsetModule$$$exists)(patternInput$$1[3], fvs$$1.FreeRecdFields)) ? true : (0, _zset.ZsetModule$$$exists)(patternInput$$1[4], fvs$$1.FreeUnionCases))) {
        $target$$120 = 1;
        expr$$3 = ivalue.fields[1];
      } else {
        $target$$120 = 2;
      }
    } else {
      $target$$120 = 2;
    }

    switch ($target$$120) {
      case 0:
        {
          const detail$0027 = abstractExprInfo(detail);
          const v2 = (0, _tast.ValRef$$get_Deref)(vref2);
          const tyvars = (0, _TastOps.freeInVal)(_TastOps.CollectAll, v2);

          if (((isAssemblyBoundary ? !(0, _TastOps.freeTyvarsAllPublic)(tyvars) : false) ? true : (0, _zset.ZsetModule$$$exists)(patternInput$$1[0], tyvars.FreeTycons)) ? true : patternInput$$1[2](v2)) {
            return detail$0027;
          } else {
            return new ExprValueInfo(2, "ValValue", vref2, detail$0027);
          }
        }

      case 1:
        {
          return new ExprValueInfo(0, "UnknownValue");
        }

      case 2:
        {
          var $target$$121, ty$$26;

          if (ivalue.tag === 6) {
            if (ty$$25 = ivalue.fields[1], (ftyvs = (0, _TastOps.freeInType)(_TastOps.CollectAll, ty$$25), (isAssemblyBoundary ? !(0, _TastOps.freeTyvarsAllPublic)(ftyvs) : false) ? true : (0, _zset.ZsetModule$$$exists)(patternInput$$1[0], ftyvs.FreeTycons))) {
              $target$$121 = 0;
              ty$$26 = ivalue.fields[1];
            } else {
              $target$$121 = 1;
            }
          } else {
            $target$$121 = 1;
          }

          switch ($target$$121) {
            case 0:
              {
                return new ExprValueInfo(0, "UnknownValue");
              }

            case 1:
              {
                var $target$$122;

                switch (ivalue.tag) {
                  case 3:
                    $target$$122 = 0;
                    break;

                  case 4:
                    $target$$122 = 1;
                    break;

                  case 5:
                    $target$$122 = 2;
                    break;

                  case 1:
                    $target$$122 = 3;
                    break;

                  case 0:
                  case 8:
                  case 7:
                  case 6:
                    $target$$122 = 4;
                    break;

                  default:
                    $target$$122 = 5;
                }

                switch ($target$$122) {
                  case 0:
                    {
                      const vinfos$$4 = ivalue.fields[0];
                      return new ExprValueInfo(3, "TupleValue", (0, _Array.map)(abstractExprInfo, vinfos$$4, Array));
                    }

                  case 1:
                    {
                      const vinfos$$5 = ivalue.fields[1];
                      const tcref$$2 = ivalue.fields[0];

                      if (patternInput$$1[1]((0, _tast.EntityRef$$get_Deref)(tcref$$2)) ? true : (0, _tast.EntityRef$$get_AllFieldsArray)(tcref$$2).some(function ($arg$$12) {
                        return patternInput$$1[3]((0, _tast.EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14)(tcref$$2, $arg$$12));
                      })) {
                        return new ExprValueInfo(0, "UnknownValue");
                      } else {
                        return new ExprValueInfo(4, "RecdValue", tcref$$2, (0, _Array.map)(abstractExprInfo, vinfos$$5, Array));
                      }
                    }

                  case 2:
                    {
                      const vinfos$$6 = ivalue.fields[1];
                      const ucref = ivalue.fields[0];
                      const tcref$$3 = (0, _tast.UnionCaseRef$$get_TyconRef)(ucref);

                      if (patternInput$$1[1]((0, _tast.UnionCaseRef$$get_Tycon)(ucref)) ? true : (0, _tast.EntityRef$$get_UnionCasesArray)(tcref$$3).some(function predicate($arg$$13) {
                        return patternInput$$1[4]((0, _tast.EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7)(tcref$$3, $arg$$13));
                      })) {
                        return new ExprValueInfo(0, "UnknownValue");
                      } else {
                        return new ExprValueInfo(5, "UnionCaseValue", ucref, (0, _Array.map)(abstractExprInfo, vinfos$$6, Array));
                      }
                    }

                  case 3:
                    {
                      const vinfo$$10 = ivalue.fields[1];

                      const _vdepth = ivalue.fields[0] | 0;

                      return MakeSizedValueInfo(abstractExprInfo(vinfo$$10));
                    }

                  case 4:
                    {
                      return ivalue;
                    }

                  case 5:
                    {
                      throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/Optimizer.fs", 982, 14);
                    }
                }
              }
          }
        }
    }
  };

  const abstractValInfo = function abstractValInfo(v$$16) {
    return new ValInfo(v$$16.ValMakesNoCriticalTailcalls, abstractExprInfo(v$$16.ValExprInfo));
  };

  const abstractModulInfo = function abstractModulInfo(ss$$5) {
    return new ModuleInfo(ValInfos$$$$002Ector$$2FE4CE46((0, _Seq.map)(function mapping$$2(tupledArg$$3) {
      return check(tupledArg$$3[0], abstractValInfo(tupledArg$$3[1]));
    }, (0, _Seq.filter)(function predicate$$1(tupledArg$$2) {
      return !patternInput$$1[2]((0, _tast.ValRef$$get_Deref)(tupledArg$$2[0]));
    }, ValInfos$$get_Entries(ss$$5.ValInfos)))), (0, _illib.NameMapModule$$$map)(abstractLazyModulInfo, ss$$5.ModuleOrNamespaceInfos));
  };

  const abstractLazyModulInfo = function abstractLazyModulInfo(ss$$6) {
    return (0, _illib.notlazy)(abstractModulInfo(ss$$6.Value));
  };

  return abstractLazyModulInfo;
}

const AbstractOptimizationInfoToEssentials = (() => {
  const abstractModulInfo$$1 = function abstractModulInfo$$1(ss$$7) {
    return new ModuleInfo(ValInfos$$Filter$$Z50890DAB(ss$$7.ValInfos, function (tupledArg$$4) {
      return (0, _tast.ValRef$$get_MustInline)(tupledArg$$4[0]);
    }), (0, _illib.NameMapModule$$$map)(function ($arg$$15) {
      return (0, _illib.notlazy)(abstractModulInfo$$1((0, _illib.Lazy$$$force)($arg$$15)));
    }, ss$$7.ModuleOrNamespaceInfos));
  };

  const abstractLazyModulInfo$$1 = function abstractLazyModulInfo$$1(ss$$8) {
    return (0, _illib.notlazy)(abstractModulInfo$$1((0, _illib.Lazy$$$force)(ss$$8)));
  };

  return abstractLazyModulInfo$$1;
})();

exports.AbstractOptimizationInfoToEssentials = AbstractOptimizationInfoToEssentials;

function AbstractExprInfoByVars(boundVars, boundTyVars, ivalue$$1) {
  const boundVars$$1 = (0, _List.filter)(function predicate$$2(v$$21) {
    return !(0, _tast.Val$$get_IsMemberOrModuleBinding)(v$$21);
  }, boundVars);
  const matchValue$$58 = [boundVars$$1, boundTyVars];
  var $target$$123;

  if (matchValue$$58[0].tail == null) {
    if (matchValue$$58[1].tail == null) {
      $target$$123 = 0;
    } else {
      $target$$123 = 1;
    }
  } else {
    $target$$123 = 1;
  }

  switch ($target$$123) {
    case 0:
      {
        return ivalue$$1;
      }

    case 1:
      {
        const abstractExprInfo$$1 = function abstractExprInfo$$1(ivalue$$2) {
          var ty$$27, ftyvs$$2, expr$$4, fvs$$2, expr$$5, fvs$$3, v2$$1, detail$$1, ftyvs$$1;

          abstractExprInfo$$1: while (true) {
            var $target$$124, detail$$2, v2$$2;

            if (ivalue$$2.tag === 2) {
              const activePatternResult50477 = (0, _tast.$007CVRefLocal$007CVRefNonLocal$007C)(ivalue$$2.fields[0]);

              if (activePatternResult50477.tag === 0) {
                if (v2$$1 = activePatternResult50477.fields[0], (detail$$1 = ivalue$$2.fields[1], (!(boundVars$$1.tail == null) ? (0, _List.exists)(function (lv2) {
                  return (0, _tast.valEq)(v2$$1, lv2);
                }, boundVars$$1) : false) ? true : !(boundTyVars.tail == null) ? (ftyvs$$1 = (0, _TastOps.freeInVal)(_TastOps.CollectTypars, v2$$1), (0, _List.exists)(function (arg10$0040$$5) {
                  return (0, _zset.ZsetModule$$$memberOf)(ftyvs$$1.FreeTypars, arg10$0040$$5);
                }, boundTyVars)) : false)) {
                  $target$$124 = 0;
                  detail$$2 = ivalue$$2.fields[1];
                  v2$$2 = activePatternResult50477.fields[0];
                } else {
                  $target$$124 = 1;
                }
              } else {
                $target$$124 = 1;
              }
            } else {
              $target$$124 = 1;
            }

            switch ($target$$124) {
              case 0:
                {
                  ivalue$$2 = detail$$2;
                  continue abstractExprInfo$$1;
                }

              case 1:
                {
                  var $target$$125, detail$$3, v2$$3, expr$$6;

                  if (ivalue$$2.tag === 2) {
                    $target$$125 = 0;
                    detail$$3 = ivalue$$2.fields[1];
                    v2$$3 = ivalue$$2.fields[0];
                  } else if (ivalue$$2.tag === 7) {
                    if (expr$$4 = ivalue$$2.fields[3], (fvs$$2 = (0, _TastOps.freeInExpr)(boundTyVars.tail == null ? _TastOps.CollectLocals : _TastOps.CollectTyparsAndLocals, expr$$4), ((!(boundVars$$1.tail == null) ? (0, _List.exists)(function (arg10$0040$$6) {
                      return (0, _zset.ZsetModule$$$memberOf)(fvs$$2.FreeLocals, arg10$0040$$6);
                    }, boundVars$$1) : false) ? true : !(boundTyVars.tail == null) ? (0, _List.exists)(function (arg10$0040$$7) {
                      return (0, _zset.ZsetModule$$$memberOf)(fvs$$2.FreeTyvars.FreeTypars, arg10$0040$$7);
                    }, boundTyVars) : false) ? true : fvs$$2.UsesMethodLocalConstructs)) {
                      $target$$125 = 1;
                      expr$$6 = ivalue$$2.fields[3];
                    } else {
                      $target$$125 = 2;
                    }
                  } else if (ivalue$$2.tag === 8) {
                    if (expr$$5 = ivalue$$2.fields[1], (fvs$$3 = (0, _TastOps.freeInExpr)(boundTyVars.tail == null ? _TastOps.CollectLocals : _TastOps.CollectTyparsAndLocals, expr$$5), ((!(boundVars$$1.tail == null) ? (0, _List.exists)(function (arg10$0040$$8) {
                      return (0, _zset.ZsetModule$$$memberOf)(fvs$$3.FreeLocals, arg10$0040$$8);
                    }, boundVars$$1) : false) ? true : !(boundTyVars.tail == null) ? (0, _List.exists)(function (arg10$0040$$9) {
                      return (0, _zset.ZsetModule$$$memberOf)(fvs$$3.FreeTyvars.FreeTypars, arg10$0040$$9);
                    }, boundTyVars) : false) ? true : fvs$$3.UsesMethodLocalConstructs)) {
                      $target$$125 = 1;
                      expr$$6 = ivalue$$2.fields[1];
                    } else {
                      $target$$125 = 2;
                    }
                  } else {
                    $target$$125 = 2;
                  }

                  switch ($target$$125) {
                    case 0:
                      {
                        const detail$0027$$1 = abstractExprInfo$$1(detail$$3);
                        return new ExprValueInfo(2, "ValValue", v2$$3, detail$0027$$1);
                      }

                    case 1:
                      {
                        return new ExprValueInfo(0, "UnknownValue");
                      }

                    case 2:
                      {
                        var $target$$126, ty$$28;

                        if (ivalue$$2.tag === 6) {
                          if (ty$$27 = ivalue$$2.fields[1], !(boundTyVars.tail == null) ? (ftyvs$$2 = (0, _TastOps.freeInType)(_TastOps.CollectTypars, ty$$27), (0, _List.exists)(function (arg10$0040$$10) {
                            return (0, _zset.ZsetModule$$$memberOf)(ftyvs$$2.FreeTypars, arg10$0040$$10);
                          }, boundTyVars)) : false) {
                            $target$$126 = 0;
                            ty$$28 = ivalue$$2.fields[1];
                          } else {
                            $target$$126 = 1;
                          }
                        } else {
                          $target$$126 = 1;
                        }

                        switch ($target$$126) {
                          case 0:
                            {
                              return new ExprValueInfo(0, "UnknownValue");
                            }

                          case 1:
                            {
                              var $target$$127;

                              switch (ivalue$$2.tag) {
                                case 3:
                                  $target$$127 = 0;
                                  break;

                                case 4:
                                  $target$$127 = 1;
                                  break;

                                case 5:
                                  $target$$127 = 2;
                                  break;

                                case 7:
                                case 6:
                                case 8:
                                case 0:
                                  $target$$127 = 3;
                                  break;

                                case 1:
                                  $target$$127 = 4;
                                  break;

                                default:
                                  $target$$127 = 5;
                              }

                              switch ($target$$127) {
                                case 0:
                                  {
                                    const vinfos$$7 = ivalue$$2.fields[0];
                                    return new ExprValueInfo(3, "TupleValue", (0, _Array.map)(abstractExprInfo$$1, vinfos$$7, Array));
                                  }

                                case 1:
                                  {
                                    const vinfos$$8 = ivalue$$2.fields[1];
                                    const tcref$$4 = ivalue$$2.fields[0];
                                    return new ExprValueInfo(4, "RecdValue", tcref$$4, (0, _Array.map)(abstractExprInfo$$1, vinfos$$8, Array));
                                  }

                                case 2:
                                  {
                                    const vinfos$$9 = ivalue$$2.fields[1];
                                    const cspec$$1 = ivalue$$2.fields[0];
                                    return new ExprValueInfo(5, "UnionCaseValue", cspec$$1, (0, _Array.map)(abstractExprInfo$$1, vinfos$$9, Array));
                                  }

                                case 3:
                                  {
                                    return ivalue$$2;
                                  }

                                case 4:
                                  {
                                    const vinfo$$11 = ivalue$$2.fields[1];

                                    const _vdepth$$1 = ivalue$$2.fields[0] | 0;

                                    return MakeSizedValueInfo(abstractExprInfo$$1(vinfo$$11));
                                  }

                                case 5:
                                  {
                                    throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/Optimizer.fs", 1066, 16);
                                  }
                              }
                            }
                        }
                      }
                  }
                }
            }
          }
        };

        const abstractValInfo$$1 = function abstractValInfo$$1(v$$22) {
          return new ValInfo(v$$22.ValMakesNoCriticalTailcalls, abstractExprInfo$$1(v$$22.ValExprInfo));
        };

        const abstractModulInfo$$2 = function abstractModulInfo$$2(ss$$9) {
          return new ModuleInfo(ValInfos$$Map$$Z6E46560A(ss$$9.ValInfos, function (tupledArg$$5) {
            return check(tupledArg$$5[0], abstractValInfo$$1(tupledArg$$5[1]));
          }), (0, _illib.NameMapModule$$$map)(function f$$7($arg$$17) {
            return (0, _illib.notlazy)(abstractModulInfo$$2((0, _illib.Lazy$$$force)($arg$$17)));
          }, ss$$9.ModuleOrNamespaceInfos));
        };

        return abstractExprInfo$$1(ivalue$$1);
      }
  }
}

function RemapOptimizationInfo(g$$19, tmenv) {
  const remapExprInfo = function remapExprInfo(ivalue$$3) {
    switch (ivalue$$3.tag) {
      case 3:
        {
          const vinfos$$10 = ivalue$$3.fields[0];
          return new ExprValueInfo(3, "TupleValue", (0, _Array.map)(remapExprInfo, vinfos$$10, Array));
        }

      case 4:
        {
          const vinfos$$11 = ivalue$$3.fields[1];
          const tcref$$5 = ivalue$$3.fields[0];
          return new ExprValueInfo(4, "RecdValue", (0, _TastOps.remapTyconRef)(tmenv.tyconRefRemap, tcref$$5), (0, _Array.map)(remapExprInfo, vinfos$$11, Array));
        }

      case 5:
        {
          const vinfos$$12 = ivalue$$3.fields[1];
          const cspec$$2 = ivalue$$3.fields[0];
          return new ExprValueInfo(5, "UnionCaseValue", (0, _TastOps.remapUnionCaseRef)(tmenv.tyconRefRemap, cspec$$2), (0, _Array.map)(remapExprInfo, vinfos$$12, Array));
        }

      case 1:
        {
          const vinfo$$12 = ivalue$$3.fields[1];

          const _vdepth$$2 = ivalue$$3.fields[0] | 0;

          return MakeSizedValueInfo(remapExprInfo(vinfo$$12));
        }

      case 0:
        {
          return new ExprValueInfo(0, "UnknownValue");
        }

      case 7:
        {
          const uniq = ivalue$$3.fields[0];
          const ty$$29 = ivalue$$3.fields[4];
          const sz$$1 = ivalue$$3.fields[2] | 0;
          const expr$$7 = ivalue$$3.fields[3];
          const arity$$1 = ivalue$$3.fields[1] | 0;
          return new ExprValueInfo(7, "CurriedLambdaValue", uniq, arity$$1, sz$$1, (0, _TastOps.remapExpr)(g$$19, new _TastOps.ValCopyFlag(0, "CloneAll"), tmenv, expr$$7), (0, _TastOps.remapPossibleForallTy)(g$$19, tmenv, ty$$29));
        }

      case 6:
        {
          const ty$$30 = ivalue$$3.fields[1];
          const c$$5 = ivalue$$3.fields[0];
          return new ExprValueInfo(6, "ConstValue", c$$5, (0, _TastOps.remapPossibleForallTy)(g$$19, tmenv, ty$$30));
        }

      case 8:
        {
          const sz$$2 = ivalue$$3.fields[0] | 0;
          const expr$$8 = ivalue$$3.fields[1];
          return new ExprValueInfo(8, "ConstExprValue", sz$$2, (0, _TastOps.remapExpr)(g$$19, new _TastOps.ValCopyFlag(0, "CloneAll"), tmenv, expr$$8));
        }

      default:
        {
          const v$$24 = ivalue$$3.fields[0];
          const detail$$4 = ivalue$$3.fields[1];
          return new ExprValueInfo(2, "ValValue", (0, _TastOps.remapValRef)(tmenv, v$$24), remapExprInfo(detail$$4));
        }
    }
  };

  const remapValInfo = function remapValInfo(v$$25) {
    return new ValInfo(v$$25.ValMakesNoCriticalTailcalls, remapExprInfo(v$$25.ValExprInfo));
  };

  const remapModulInfo = function remapModulInfo(ss$$10) {
    return new ModuleInfo(ValInfos$$Map$$Z6E46560A(ss$$10.ValInfos, function (tupledArg$$6) {
      const vref$0027 = (0, _TastOps.remapValRef)(tmenv, tupledArg$$6[0]);
      const vinfo$$14 = remapValInfo(tupledArg$$6[1]);

      if (vinfo$$14.ValMakesNoCriticalTailcalls) {
        (0, _tast.Val$$SetMakesNoCriticalTailcalls)((0, _tast.ValRef$$get_Deref)(vref$0027));
      }

      return [vref$0027, vinfo$$14];
    }), (0, _illib.NameMapModule$$$map)(remapLazyModulInfo, ss$$10.ModuleOrNamespaceInfos));
  };

  const remapLazyModulInfo = function remapLazyModulInfo(ss$$11) {
    return (0, _illib.notlazy)(remapModulInfo((0, _illib.Lazy$$$force)(ss$$11)));
  };

  return remapLazyModulInfo;
}

function AbstractAndRemapModulInfo(msg, g$$20, m$$4, repackage, hidden, info$$6) {
  const mrpi = (0, _TastOps.mkRepackageRemapping)(repackage);
  [msg, m$$4];
  const info$$7 = AbstractLazyModulInfoByHiding(false, hidden)(info$$6);
  const info$$8 = RemapOptimizationInfo(g$$20, mrpi)(info$$7);
  return info$$8;
}

function IsTyFuncValRefExpr(_arg1$$5) {
  if (_arg1$$5.tag === 1) {
    const fv = _arg1$$5.fields[0];
    return (0, _tast.ValRef$$get_IsTypeFunction)(fv);
  } else {
    return false;
  }
}

function IsSmallConstExpr(x$$80) {
  IsSmallConstExpr: while (true) {
    switch (x$$80.tag) {
      case 1:
        {
          const v$$27 = x$$80.fields[0];
          const _m = x$$80.fields[2];
          return !(0, _tast.ValRef$$get_IsMutable)(v$$27);
        }

      case 5:
        {
          const fe = x$$80.fields[0];
          const args$$1 = x$$80.fields[3];
          const _tyargs = x$$80.fields[2];

          if (args$$1.tail == null ? !IsTyFuncValRefExpr(fe) : false) {
            x$$80 = fe;
            continue IsSmallConstExpr;
          } else {
            return false;
          }
        }

      default:
        {
          return false;
        }
    }
  }
}

function ValueOfExpr(expr$$9) {
  if (IsSmallConstExpr(expr$$9)) {
    return new ExprValueInfo(8, "ConstExprValue", 0, expr$$9);
  } else {
    return new ExprValueInfo(0, "UnknownValue");
  }
}

function ValueIsUsedOrHasEffect(cenv$$7, fvs$$4, b$$72, binfo) {
  const v$$28 = (0, _tast.Binding$$get_Var)(b$$72);

  if (((!OptimizationSettings$$EliminateUnusedBindings(cenv$$7.settings) ? true : (0, _tast.Val$$get_MemberInfo)(v$$28) != null) ? true : binfo.HasEffect) ? true : (0, _tast.Val$$get_IsFixed)(v$$28)) {
    return true;
  } else {
    return (0, _zset.ZsetModule$$$contains)(v$$28, fvs$$4());
  }
}

function SplitValuesByIsUsedOrHasEffect(cenv$$8, fvs$$5, x$$81) {
  return (0, _List.unzip)((0, _List.filter)(function predicate$$3(tupledArg$$7) {
    return ValueIsUsedOrHasEffect(cenv$$8, fvs$$5, tupledArg$$7[0], tupledArg$$7[1]);
  }, x$$81));
}

function IlAssemblyCodeInstrHasEffect(i$$4) {
  var $target$$135;

  switch (i$$4.tag) {
    case 33:
    case 34:
    case 0:
    case 22:
    case 14:
    case 25:
    case 3:
    case 26:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 19:
    case 20:
    case 21:
    case 27:
    case 28:
    case 29:
    case 65:
    case 68:
      $target$$135 = 0;
      break;

    default:
      $target$$135 = 1;
  }

  switch ($target$$135) {
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

function IlAssemblyCodeHasEffect(instrs$$1) {
  return (0, _List.exists)(IlAssemblyCodeInstrHasEffect, instrs$$1);
}

function ExprHasEffect(g$$21, expr$$10) {
  ExprHasEffect: while (true) {
    var $target$$136, vref$$11, f0, args$$2, m$$5, op, binds, body, bind, body$$1;

    if (expr$$10.tag === 1) {
      $target$$136 = 0;
      vref$$11 = expr$$10.fields[0];
    } else if (expr$$10.tag === 12) {
      $target$$136 = 1;
    } else if (expr$$10.tag === 3) {
      $target$$136 = 1;
    } else if (expr$$10.tag === 4) {
      $target$$136 = 1;
    } else if (expr$$10.tag === 0) {
      $target$$136 = 1;
    } else if (expr$$10.tag === 5) {
      if (expr$$10.fields[3].tail == null) {
        $target$$136 = 2;
        f0 = expr$$10.fields[0];
      } else {
        $target$$136 = 6;
      }
    } else if (expr$$10.tag === 11) {
      $target$$136 = 3;
      args$$2 = expr$$10.fields[2];
      m$$5 = expr$$10.fields[3];
      op = expr$$10.fields[0];
    } else if (expr$$10.tag === 6) {
      $target$$136 = 4;
      binds = expr$$10.fields[0];
      body = expr$$10.fields[1];
    } else if (expr$$10.tag === 7) {
      $target$$136 = 5;
      bind = expr$$10.fields[0];
      body$$1 = expr$$10.fields[1];
    } else {
      $target$$136 = 6;
    }

    switch ($target$$136) {
      case 0:
        {
          if ((0, _tast.ValRef$$get_IsTypeFunction)(vref$$11)) {
            return true;
          } else {
            return (0, _tast.ValRef$$get_IsMutable)(vref$$11);
          }
        }

      case 1:
        {
          return false;
        }

      case 2:
        {
          if (IsTyFuncValRefExpr(f0)) {
            return true;
          } else {
            g$$21 = g$$21;
            expr$$10 = f0;
            continue ExprHasEffect;
          }
        }

      case 3:
        {
          if (ExprsHaveEffect(g$$21, args$$2)) {
            return true;
          } else {
            return OpHasEffect(g$$21, m$$5, op);
          }
        }

      case 4:
        {
          if (BindingsHaveEffect(g$$21, binds)) {
            return true;
          } else {
            g$$21 = g$$21;
            expr$$10 = body;
            continue ExprHasEffect;
          }
        }

      case 5:
        {
          if (BindingHasEffect(g$$21, bind)) {
            return true;
          } else {
            g$$21 = g$$21;
            expr$$10 = body$$1;
            continue ExprHasEffect;
          }
        }

      case 6:
        {
          return true;
        }
    }
  }
}

function ExprsHaveEffect(g$$22, exprs) {
  return (0, _List.exists)(function (arg10$0040$$11) {
    return ExprHasEffect(g$$22, arg10$0040$$11);
  }, exprs);
}

function BindingsHaveEffect(g$$23, binds$$1) {
  return (0, _List.exists)(function (bind$$1) {
    return BindingHasEffect(g$$23, bind$$1);
  }, binds$$1);
}

function BindingHasEffect(g$$24, bind$$2) {
  return ExprHasEffect(g$$24, (0, _tast.Binding$$get_Expr)(bind$$2));
}

function OpHasEffect(g$$25, m$$6, op$$1) {
  var $target$$137, ctor, tcref$$6, ucref$$1, ecref, n$$54, ucref$$2, instrs$$2, ecref$$1, n$$55, rfref, _readonly, rfref$$1, lv;

  if (op$$1.tag === 10) {
    $target$$137 = 1;
    ctor = op$$1.fields[0];
    tcref$$6 = op$$1.fields[1];
  } else if (op$$1.tag === 0) {
    $target$$137 = 2;
    ucref$$1 = op$$1.fields[0];
  } else if (op$$1.tag === 1) {
    $target$$137 = 3;
    ecref = op$$1.fields[0];
  } else if (op$$1.tag === 4) {
    $target$$137 = 4;
  } else if (op$$1.tag === 5) {
    $target$$137 = 4;
  } else if (op$$1.tag === 3) {
    $target$$137 = 4;
  } else if (op$$1.tag === 14) {
    $target$$137 = 5;
  } else if (op$$1.tag === 15) {
    $target$$137 = 6;
  } else if (op$$1.tag === 16) {
    $target$$137 = 7;
    n$$54 = op$$1.fields[1];
    ucref$$2 = op$$1.fields[0];
  } else if (op$$1.tag === 22) {
    $target$$137 = 8;
    instrs$$2 = op$$1.fields[0];
  } else if (op$$1.tag === 21) {
    $target$$137 = 9;
  } else if (op$$1.tag === 19) {
    $target$$137 = 10;
    ecref$$1 = op$$1.fields[0];
    n$$55 = op$$1.fields[1];
  } else if (op$$1.tag === 23) {
    $target$$137 = 11;
  } else if (op$$1.tag === 12) {
    $target$$137 = 12;
    rfref = op$$1.fields[0];
  } else if (op$$1.tag === 13) {
    $target$$137 = 13;
    _readonly = op$$1.fields[1];
    rfref$$1 = op$$1.fields[0];
  } else if (op$$1.tag === 17) {
    $target$$137 = 14;
  } else if (op$$1.tag === 30) {
    if (op$$1.fields[0].tag === 0) {
      $target$$137 = 15;
      lv = op$$1.fields[1];
    } else {
      $target$$137 = 16;
    }
  } else if (op$$1.tag === 18) {
    $target$$137 = 16;
  } else if (op$$1.tag === 20) {
    $target$$137 = 16;
  } else if (op$$1.tag === 24) {
    $target$$137 = 16;
  } else if (op$$1.tag === 25) {
    $target$$137 = 16;
  } else if (op$$1.tag === 7) {
    $target$$137 = 16;
  } else if (op$$1.tag === 6) {
    $target$$137 = 16;
  } else if (op$$1.tag === 8) {
    $target$$137 = 16;
  } else if (op$$1.tag === 9) {
    $target$$137 = 16;
  } else if (op$$1.tag === 29) {
    $target$$137 = 16;
  } else if (op$$1.tag === 27) {
    $target$$137 = 16;
  } else if (op$$1.tag === 28) {
    $target$$137 = 16;
  } else if (op$$1.tag === 26) {
    $target$$137 = 16;
  } else if (op$$1.tag === 31) {
    $target$$137 = 16;
  } else if (op$$1.tag === 11) {
    $target$$137 = 16;
  } else {
    $target$$137 = 0;
  }

  switch ($target$$137) {
    case 0:
      {
        return false;
      }

    case 1:
      {
        if (ctor.tag === 1) {
          return !(0, _TastOps.isRecdOrStructTyconRefReadOnly)(g$$25, m$$6, tcref$$6);
        } else {
          return true;
        }
      }

    case 2:
      {
        return (0, _TastOps.isRecdOrUnionOrStructTyconRefDefinitelyMutable)((0, _tast.UnionCaseRef$$get_TyconRef)(ucref$$1));
      }

    case 3:
      {
        return (0, _TastOps.isExnDefinitelyMutable)(ecref);
      }

    case 4:
      {
        return true;
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
        return (0, _TastOps.isUnionCaseFieldMutable)(g$$25, ucref$$2, n$$54);
      }

    case 8:
      {
        return IlAssemblyCodeHasEffect(instrs$$2);
      }

    case 9:
      {
        return false;
      }

    case 10:
      {
        return (0, _TastOps.isExnFieldMutable)(ecref$$1, n$$55);
      }

    case 11:
      {
        return false;
      }

    case 12:
      {
        if ((0, _tast.RecdField$$get_IsMutable)((0, _tast.RecdFieldRef$$get_RecdField)(rfref))) {
          return true;
        } else {
          return (0, _Util.equals)((0, _TastOps.TryFindTyconRefBoolAttribute)(g$$25, _range.range0, (0, _TcGlobals.TcGlobals$$get_attrib_AllowNullLiteralAttribute)(g$$25), (0, _tast.RecdFieldRef$$get_TyconRef)(rfref)), true);
        }
      }

    case 13:
      {
        return (0, _tast.RecdField$$get_IsMutable)((0, _tast.RecdFieldRef$$get_RecdField)(rfref$$1));
      }

    case 14:
      {
        return false;
      }

    case 15:
      {
        return (0, _tast.ValRef$$get_IsMutable)(lv);
      }

    case 16:
      {
        return true;
      }
  }
}

function TryEliminateBinding(cenv$$9, _env, _arg1$$6, e2, _m$$1) {
  var tyargs, m$$9, f0ty, f$$9, args$$4, vspec2$$5, ty2, targets, spMatch, m$$7, dflt, cases, _exprm, fvs$$7, vspec2$$3;

  const vspec1 = _arg1$$6.fields[0];
  const spBind = _arg1$$6.fields[2];
  const e1 = _arg1$$6.fields[1];

  if (!(cenv$$9.optimizing ? OptimizationSettings$$EliminateImmediatelyConsumedLocals(cenv$$9.settings) : false) ? !(0, _tast.Val$$get_IsCompilerGenerated)(vspec1) : false) {
    return null;
  } else if ((0, _tast.Val$$get_IsFixed)(vspec1)) {
    return null;
  } else {
    const IsUniqueUse = function IsUniqueUse(vspec2, args$$3) {
      if ((0, _tast.valEq)(vspec1, vspec2) ? !((0, _tast.Val$$get_LogicalName)(vspec2).indexOf("$cont") >= 0) : false) {
        const fvs$$6 = (0, _TastOps.accFreeInExprs)(_TastOps.CollectLocals, args$$3, _TastOps.emptyFreeVars);
        return !(0, _zset.ZsetModule$$$contains)(vspec1, fvs$$6.FreeLocals);
      } else {
        return false;
      }
    };

    const GetImmediateUseContext = function GetImmediateUseContext(rargsl, argsr) {
      var argsrt, argsrh, vspec2$$1, argsr2;

      GetImmediateUseContext: while (true) {
        var $target$$138, argsr2$$1, vspec2$$2;

        if (argsr.tail != null) {
          if (argsr.head.tag === 1) {
            const activePatternResult50524 = (0, _tast.$007CVRefLocal$007CVRefNonLocal$007C)(argsr.head.fields[0]);

            if (activePatternResult50524.tag === 0) {
              if (vspec2$$1 = activePatternResult50524.fields[0], (argsr2 = argsr.tail, (0, _tast.valEq)(vspec1, vspec2$$1) ? IsUniqueUse(vspec2$$1, (0, _List.append)((0, _List.reverse)(rargsl), argsr2)) : false)) {
                $target$$138 = 0;
                argsr2$$1 = argsr.tail;
                vspec2$$2 = activePatternResult50524.fields[0];
              } else {
                $target$$138 = 1;
              }
            } else {
              $target$$138 = 1;
            }
          } else {
            $target$$138 = 1;
          }
        } else {
          $target$$138 = 1;
        }

        switch ($target$$138) {
          case 0:
            {
              return [(0, _List.reverse)(rargsl), argsr2$$1];
            }

          case 1:
            {
              var $target$$139, argsrh$$1, argsrt$$1;

              if (argsr.tail != null) {
                if (argsrt = argsr.tail, (argsrh = argsr.head, !ExprHasEffect(cenv$$9.g, argsrh))) {
                  $target$$139 = 0;
                  argsrh$$1 = argsr.head;
                  argsrt$$1 = argsr.tail;
                } else {
                  $target$$139 = 1;
                }
              } else {
                $target$$139 = 1;
              }

              switch ($target$$139) {
                case 0:
                  {
                    rargsl = (0, _Types.L)(argsrh$$1, rargsl);
                    argsr = argsrt$$1;
                    continue GetImmediateUseContext;
                  }

                case 1:
                  {
                    return null;
                  }
              }
            }
        }
      }
    };

    const matchValue$$59 = (0, _TastOps.stripExpr)(e2);
    var $target$$140, vspec2$$4;

    if (matchValue$$59.tag === 1) {
      const activePatternResult50530 = (0, _tast.$007CVRefLocal$007CVRefNonLocal$007C)(matchValue$$59.fields[0]);

      if (activePatternResult50530.tag === 0) {
        if (vspec2$$3 = activePatternResult50530.fields[0], IsUniqueUse(vspec2$$3, (0, _Types.L)())) {
          $target$$140 = 0;
          vspec2$$4 = activePatternResult50530.fields[0];
        } else {
          $target$$140 = 1;
        }
      } else {
        $target$$140 = 1;
      }
    } else {
      $target$$140 = 1;
    }

    switch ($target$$140) {
      case 0:
        {
          return e1;
        }

      case 1:
        {
          var $target$$141, _exprm$$1, cases$$1, dflt$$1, m$$8, spMatch$$1, targets$$1, ty2$$1, vspec2$$6;

          if (matchValue$$59.tag === 9) {
            if (matchValue$$59.fields[2].tag === 0) {
              if (matchValue$$59.fields[2].fields[0].tag === 1) {
                const activePatternResult50529 = (0, _tast.$007CVRefLocal$007CVRefNonLocal$007C)(matchValue$$59.fields[2].fields[0].fields[0]);

                if (activePatternResult50529.tag === 0) {
                  if (vspec2$$5 = activePatternResult50529.fields[0], (ty2 = matchValue$$59.fields[5], (targets = matchValue$$59.fields[3], (spMatch = matchValue$$59.fields[0], (m$$7 = matchValue$$59.fields[4], (dflt = matchValue$$59.fields[2].fields[2], (cases = matchValue$$59.fields[2].fields[1], (_exprm = matchValue$$59.fields[1], (0, _tast.valEq)(vspec1, vspec2$$5) ? (fvs$$7 = (0, _TastOps.accFreeInTargets)(_TastOps.CollectLocals, targets, (0, _TastOps.accFreeInSwitchCases)(_TastOps.CollectLocals, cases, dflt, _TastOps.emptyFreeVars)), !(0, _zset.ZsetModule$$$contains)(vspec1, fvs$$7.FreeLocals)) : false)))))))) {
                    $target$$141 = 0;
                    _exprm$$1 = matchValue$$59.fields[1];
                    cases$$1 = matchValue$$59.fields[2].fields[1];
                    dflt$$1 = matchValue$$59.fields[2].fields[2];
                    m$$8 = matchValue$$59.fields[4];
                    spMatch$$1 = matchValue$$59.fields[0];
                    targets$$1 = matchValue$$59.fields[3];
                    ty2$$1 = matchValue$$59.fields[5];
                    vspec2$$6 = activePatternResult50529.fields[0];
                  } else {
                    $target$$141 = 1;
                  }
                } else {
                  $target$$141 = 1;
                }
              } else {
                $target$$141 = 1;
              }
            } else {
              $target$$141 = 1;
            }
          } else {
            $target$$141 = 1;
          }

          switch ($target$$141) {
            case 0:
              {
                const spMatch$$2 = (0, _ast.SequencePointInfoForBinding$$Combine$$2F0DA76D)(spBind, spMatch$$1);
                return new _tast.Expr(9, "Match", spMatch$$2, (0, _TastOps.Expr$002Eget_Range)(e1), new _tast.DecisionTree(0, "TDSwitch", e1, cases$$1, dflt$$1, m$$8), targets$$1, m$$8, ty2$$1);
              }

            case 1:
              {
                var $target$$142, args$$5, f$$10, f0ty$$1, m$$10, tyargs$$1;

                if (matchValue$$59.tag === 5) {
                  if (tyargs = matchValue$$59.fields[2], (m$$9 = matchValue$$59.fields[4], (f0ty = matchValue$$59.fields[1], (f$$9 = matchValue$$59.fields[0], (args$$4 = matchValue$$59.fields[3], !((0, _tast.Val$$get_LogicalName)(vspec1).indexOf("$cont") >= 0)))))) {
                    $target$$142 = 0;
                    args$$5 = matchValue$$59.fields[3];
                    f$$10 = matchValue$$59.fields[0];
                    f0ty$$1 = matchValue$$59.fields[1];
                    m$$10 = matchValue$$59.fields[4];
                    tyargs$$1 = matchValue$$59.fields[2];
                  } else {
                    $target$$142 = 1;
                  }
                } else {
                  $target$$142 = 1;
                }

                switch ($target$$142) {
                  case 0:
                    {
                      const matchValue$$60 = GetImmediateUseContext((0, _Types.L)(), (0, _Types.L)(f$$10, args$$5));

                      if (matchValue$$60 == null) {
                        return null;
                      } else if (matchValue$$60[0].tail != null) {
                        return (0, _TastOps.MakeApplicationAndBetaReduce)(cenv$$9.g, matchValue$$60[0].head, f0ty$$1, (0, _Types.L)(tyargs$$1, (0, _Types.L)()), (0, _List.append)(matchValue$$60[0].tail, (0, _Types.L)(e1, matchValue$$60[1])), m$$10);
                      } else {
                        return (0, _TastOps.MakeApplicationAndBetaReduce)(cenv$$9.g, e1, f0ty$$1, (0, _Types.L)(tyargs$$1, (0, _Types.L)()), matchValue$$60[1], m$$10);
                      }
                    }

                  case 1:
                    {
                      var $target$$143, arg1, arg2, arg3, c1$$6, c2$$6, m1, m2, tyargs1, tyargs2, args$$6, c$$6, m$$11, tyargs$$2;

                      if (matchValue$$59.tag === 11) {
                        if (matchValue$$59.fields[2].tail != null) {
                          if (matchValue$$59.fields[2].head.tag === 11) {
                            if (matchValue$$59.fields[2].head.fields[2].tail != null) {
                              if (matchValue$$59.fields[2].head.fields[2].tail.tail != null) {
                                if (matchValue$$59.fields[2].head.fields[2].tail.tail.tail == null) {
                                  if (matchValue$$59.fields[2].tail.tail != null) {
                                    if (matchValue$$59.fields[2].tail.tail.tail == null) {
                                      $target$$143 = 0;
                                      arg1 = matchValue$$59.fields[2].head.fields[2].head;
                                      arg2 = matchValue$$59.fields[2].head.fields[2].tail.head;
                                      arg3 = matchValue$$59.fields[2].tail.head;
                                      c1$$6 = matchValue$$59.fields[0];
                                      c2$$6 = matchValue$$59.fields[2].head.fields[0];
                                      m1 = matchValue$$59.fields[3];
                                      m2 = matchValue$$59.fields[2].head.fields[3];
                                      tyargs1 = matchValue$$59.fields[1];
                                      tyargs2 = matchValue$$59.fields[2].head.fields[1];
                                    } else {
                                      $target$$143 = 1;
                                      args$$6 = matchValue$$59.fields[2];
                                      c$$6 = matchValue$$59.fields[0];
                                      m$$11 = matchValue$$59.fields[3];
                                      tyargs$$2 = matchValue$$59.fields[1];
                                    }
                                  } else {
                                    $target$$143 = 1;
                                    args$$6 = matchValue$$59.fields[2];
                                    c$$6 = matchValue$$59.fields[0];
                                    m$$11 = matchValue$$59.fields[3];
                                    tyargs$$2 = matchValue$$59.fields[1];
                                  }
                                } else {
                                  $target$$143 = 1;
                                  args$$6 = matchValue$$59.fields[2];
                                  c$$6 = matchValue$$59.fields[0];
                                  m$$11 = matchValue$$59.fields[3];
                                  tyargs$$2 = matchValue$$59.fields[1];
                                }
                              } else {
                                $target$$143 = 1;
                                args$$6 = matchValue$$59.fields[2];
                                c$$6 = matchValue$$59.fields[0];
                                m$$11 = matchValue$$59.fields[3];
                                tyargs$$2 = matchValue$$59.fields[1];
                              }
                            } else {
                              $target$$143 = 1;
                              args$$6 = matchValue$$59.fields[2];
                              c$$6 = matchValue$$59.fields[0];
                              m$$11 = matchValue$$59.fields[3];
                              tyargs$$2 = matchValue$$59.fields[1];
                            }
                          } else {
                            $target$$143 = 1;
                            args$$6 = matchValue$$59.fields[2];
                            c$$6 = matchValue$$59.fields[0];
                            m$$11 = matchValue$$59.fields[3];
                            tyargs$$2 = matchValue$$59.fields[1];
                          }
                        } else {
                          $target$$143 = 1;
                          args$$6 = matchValue$$59.fields[2];
                          c$$6 = matchValue$$59.fields[0];
                          m$$11 = matchValue$$59.fields[3];
                          tyargs$$2 = matchValue$$59.fields[1];
                        }
                      } else {
                        $target$$143 = 2;
                      }

                      switch ($target$$143) {
                        case 0:
                          {
                            const matchValue$$61 = GetImmediateUseContext((0, _Types.L)(), (0, _Types.L)(arg1, (0, _Types.L)(arg2, (0, _Types.L)(arg3, (0, _Types.L)()))));
                            var $target$$144, arg2$$1, arg3$$1, arg1$$1, arg3$$2, arg1$$2, arg2$$2;

                            if (matchValue$$61 == null) {
                              $target$$144 = 4;
                            } else if (matchValue$$61[0].tail != null) {
                              if (matchValue$$61[0].tail.tail != null) {
                                if (matchValue$$61[0].tail.tail.tail == null) {
                                  if (matchValue$$61[1].tail == null) {
                                    $target$$144 = 2;
                                    arg1$$2 = matchValue$$61[0].head;
                                    arg2$$2 = matchValue$$61[0].tail.head;
                                  } else {
                                    $target$$144 = 3;
                                  }
                                } else {
                                  $target$$144 = 3;
                                }
                              } else if (matchValue$$61[1].tail != null) {
                                if (matchValue$$61[1].tail.tail == null) {
                                  $target$$144 = 1;
                                  arg1$$1 = matchValue$$61[0].head;
                                  arg3$$2 = matchValue$$61[1].head;
                                } else {
                                  $target$$144 = 3;
                                }
                              } else {
                                $target$$144 = 3;
                              }
                            } else if (matchValue$$61[1].tail != null) {
                              if (matchValue$$61[1].tail.tail != null) {
                                if (matchValue$$61[1].tail.tail.tail == null) {
                                  $target$$144 = 0;
                                  arg2$$1 = matchValue$$61[1].head;
                                  arg3$$1 = matchValue$$61[1].tail.head;
                                } else {
                                  $target$$144 = 3;
                                }
                              } else {
                                $target$$144 = 3;
                              }
                            } else {
                              $target$$144 = 3;
                            }

                            switch ($target$$144) {
                              case 0:
                                {
                                  return new _tast.Expr(11, "Op", c1$$6, tyargs1, (0, _Types.L)(new _tast.Expr(11, "Op", c2$$6, tyargs2, (0, _Types.L)(e1, (0, _Types.L)(arg2$$1, (0, _Types.L)())), m2), (0, _Types.L)(arg3$$1, (0, _Types.L)())), m1);
                                }

                              case 1:
                                {
                                  return new _tast.Expr(11, "Op", c1$$6, tyargs1, (0, _Types.L)(new _tast.Expr(11, "Op", c2$$6, tyargs2, (0, _Types.L)(arg1$$1, (0, _Types.L)(e1, (0, _Types.L)())), m2), (0, _Types.L)(arg3$$2, (0, _Types.L)())), m1);
                                }

                              case 2:
                                {
                                  return new _tast.Expr(11, "Op", c1$$6, tyargs1, (0, _Types.L)(new _tast.Expr(11, "Op", c2$$6, tyargs2, (0, _Types.L)(arg1$$2, (0, _Types.L)(arg2$$2, (0, _Types.L)())), m2), (0, _Types.L)(e1, (0, _Types.L)())), m1);
                                }

                              case 3:
                                {
                                  return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("unexpected return pattern from GetImmediateUseContext", m1));
                                }

                              case 4:
                                {
                                  return null;
                                }
                            }
                          }

                        case 1:
                          {
                            const matchValue$$62 = GetImmediateUseContext((0, _Types.L)(), args$$6);

                            if (matchValue$$62 == null) {
                              return null;
                            } else {
                              const rargs$$2 = matchValue$$62[1];
                              const largs$$1 = matchValue$$62[0];
                              return new _tast.Expr(11, "Op", c$$6, tyargs$$2, (0, _List.append)(largs$$1, (0, _Types.L)(e1, rargs$$2)), m$$11);
                            }
                          }

                        case 2:
                          {
                            return null;
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

function TryEliminateLet(cenv$$10, env$$18, bind$$3, e2$$1, m$$12) {
  const matchValue$$63 = TryEliminateBinding(cenv$$10, env$$18, bind$$3, e2$$1, m$$12);

  if (matchValue$$63 == null) {
    return [(0, _TastOps.mkLetBind)(m$$12, bind$$3, e2$$1), 0];
  } else {
    const e2$0027 = matchValue$$63;
    return [e2$0027, -1];
  }
}

function $007CKnownValApp$007C_$007C(expr$$11) {
  const matchValue$$64 = (0, _TastOps.stripExpr)(expr$$11);
  var $target$$145, vref$$12, otherArgs1, otherArgs2, typeArgs1, typeArgs2, vref$$13;

  if (matchValue$$64.tag === 1) {
    $target$$145 = 0;
    vref$$12 = matchValue$$64.fields[0];
  } else if (matchValue$$64.tag === 5) {
    const activePatternResult50543 = $007CKnownValApp$007C_$007C(matchValue$$64.fields[0]);

    if (activePatternResult50543 != null) {
      $target$$145 = 1;
      otherArgs1 = activePatternResult50543[2];
      otherArgs2 = matchValue$$64.fields[3];
      typeArgs1 = activePatternResult50543[1];
      typeArgs2 = matchValue$$64.fields[2];
      vref$$13 = activePatternResult50543[0];
    } else {
      $target$$145 = 2;
    }
  } else {
    $target$$145 = 2;
  }

  switch ($target$$145) {
    case 0:
      {
        return [vref$$12, (0, _Types.L)(), (0, _Types.L)()];
      }

    case 1:
      {
        return [vref$$13, (0, _List.append)(typeArgs1, typeArgs2), (0, _List.append)(otherArgs1, otherArgs2)];
      }

    case 2:
      {
        return null;
      }
  }
}

function CanExpandStructuralBinding(v$$29) {
  if ((!(0, _tast.Val$$get_IsCompiledAsTopLevel)(v$$29) ? !(0, _tast.Val$$get_IsMember)(v$$29) : false) ? !(0, _tast.Val$$get_IsTypeFunction)(v$$29) : false) {
    return !(0, _tast.Val$$get_IsMutable)(v$$29);
  } else {
    return false;
  }
}

function ExprIsValue(_arg1$$7) {
  if (_arg1$$7.tag === 1) {
    return true;
  } else {
    return false;
  }
}

function ExpandStructuralBindingRaw(cenv$$11, expr$$12) {
  var v$$30, tgtSeqPtOpt, rhs, m$$13, body$$2;
  var $target$$146, body$$3, m$$14, rhs$$1, tgtSeqPtOpt$$1, v$$31;

  if (expr$$12.tag === 7) {
    if (v$$30 = expr$$12.fields[0].fields[0], (tgtSeqPtOpt = expr$$12.fields[0].fields[2], (rhs = expr$$12.fields[0].fields[1], (m$$13 = expr$$12.fields[2], (body$$2 = expr$$12.fields[1], (0, _TastOps.isRefTupleExpr)(rhs) ? CanExpandStructuralBinding(v$$30) : false))))) {
      $target$$146 = 0;
      body$$3 = expr$$12.fields[1];
      m$$14 = expr$$12.fields[2];
      rhs$$1 = expr$$12.fields[0].fields[1];
      tgtSeqPtOpt$$1 = expr$$12.fields[0].fields[2];
      v$$31 = expr$$12.fields[0].fields[0];
    } else {
      $target$$146 = 1;
    }
  } else {
    $target$$146 = 1;
  }

  switch ($target$$146) {
    case 0:
      {
        const args$$7 = (0, _TastOps.tryDestRefTupleExpr)(rhs$$1);

        if ((0, _List.forAll)(ExprIsValue, args$$7)) {
          return expr$$12;
        } else {
          const argTys = (0, _TastOps.destRefTupleTy)(cenv$$11.g, (0, _tast.Val$$get_Type)(v$$31));

          const argBind = function argBind(i$$6, arg$$1, argTy) {
            const name = (0, _tast.Val$$get_LogicalName)(v$$31) + "_" + (0, _Util.int32ToString)(i$$6);
            const patternInput$$2 = (0, _TastOps.mkCompGenLocal)((0, _TastOps.Expr$002Eget_Range)(arg$$1), name, argTy);
            return [patternInput$$2[1], (0, _TastOps.mkCompGenBind)(patternInput$$2[0], arg$$1)];
          };

          const patternInput$$3 = (0, _List.unzip)((0, _List.mapIndexed2)(argBind, args$$7, argTys));
          const tuple = (0, _TastOps.mkRefTupled)(cenv$$11.g, m$$14, patternInput$$3[0], argTys);
          return (0, _TastOps.mkLetsBind)(m$$14, patternInput$$3[1], (0, _TastOps.mkLet)(tgtSeqPtOpt$$1, m$$14, v$$31, tuple, body$$3));
        }
      }

    case 1:
      {
        const expr$$13 = expr$$12;
        return expr$$13;
      }
  }
}

function RearrangeTupleBindings(expr$$14, fin) {
  var tupInfo;
  var $target$$149, bind$$4, body$$4, m$$15, tupInfo$$1;

  if (expr$$14.tag === 7) {
    $target$$149 = 0;
    bind$$4 = expr$$14.fields[0];
    body$$4 = expr$$14.fields[1];
    m$$15 = expr$$14.fields[2];
  } else if (expr$$14.tag === 11) {
    if (expr$$14.fields[0].tag === 2) {
      if (tupInfo = expr$$14.fields[0].fields[0], !(0, _TastOps.evalTupInfoIsStruct)(tupInfo)) {
        $target$$149 = 1;
        tupInfo$$1 = expr$$14.fields[0].fields[0];
      } else {
        $target$$149 = 2;
      }
    } else {
      $target$$149 = 2;
    }
  } else {
    $target$$149 = 2;
  }

  switch ($target$$149) {
    case 0:
      {
        const matchValue$$65 = RearrangeTupleBindings(body$$4, fin);

        if (matchValue$$65 == null) {
          return null;
        } else {
          const b$$74 = matchValue$$65;
          return (0, _TastOps.mkLetBind)(m$$15, bind$$4, b$$74);
        }
      }

    case 1:
      {
        return fin(expr$$14);
      }

    case 2:
      {
        return null;
      }
  }
}

function ExpandStructuralBinding(cenv$$12, expr$$15) {
  var v$$33, tgtSeqPtOpt$$2, rhs$$2, m$$16, body$$5;
  var $target$$150, body$$6, m$$17, rhs$$3, tgtSeqPtOpt$$3, v$$34;

  if (expr$$15.tag === 7) {
    if (v$$33 = expr$$15.fields[0].fields[0], (tgtSeqPtOpt$$2 = expr$$15.fields[0].fields[2], (rhs$$2 = expr$$15.fields[0].fields[1], (m$$16 = expr$$15.fields[2], (body$$5 = expr$$15.fields[1], ((0, _TastOps.isRefTupleTy)(cenv$$12.g, (0, _tast.Val$$get_Type)(v$$33)) ? !(0, _TastOps.isRefTupleExpr)(rhs$$2) : false) ? CanExpandStructuralBinding(v$$33) : false))))) {
      $target$$150 = 0;
      body$$6 = expr$$15.fields[1];
      m$$17 = expr$$15.fields[2];
      rhs$$3 = expr$$15.fields[0].fields[1];
      tgtSeqPtOpt$$3 = expr$$15.fields[0].fields[2];
      v$$34 = expr$$15.fields[0].fields[0];
    } else {
      $target$$150 = 1;
    }
  } else {
    $target$$150 = 1;
  }

  switch ($target$$150) {
    case 0:
      {
        const matchValue$$66 = RearrangeTupleBindings(rhs$$3, function (top) {
          return (0, _TastOps.mkLet)(tgtSeqPtOpt$$3, m$$17, v$$34, top, body$$6);
        });

        if (matchValue$$66 == null) {
          return expr$$15;
        } else {
          const e$$2 = matchValue$$66;
          return ExpandStructuralBindingRaw(cenv$$12, e$$2);
        }
      }

    case 1:
      {
        const e$$3 = expr$$15;
        return ExpandStructuralBindingRaw(cenv$$12, e$$3);
      }
  }
}

function $007CQueryRun$007C_$007C(g$$26, expr$$16) {
  var vref$$16, elemTy, arg$$4, _builder$$2, vref$$14, arg$$2, _builder;

  var $target$$151, _builder$$1, arg$$3, vref$$15;

  if (expr$$16.tag === 5) {
    if (expr$$16.fields[0].tag === 1) {
      if (expr$$16.fields[3].tail != null) {
        if (expr$$16.fields[3].tail.tail != null) {
          if (expr$$16.fields[3].tail.tail.tail == null) {
            if (vref$$14 = expr$$16.fields[0].fields[0], (arg$$2 = expr$$16.fields[3].tail.head, (_builder = expr$$16.fields[3].head, (0, _TastOps.valRefEq)(g$$26, vref$$14, (0, _TcGlobals.TcGlobals$$get_query_run_value_vref)(g$$26))))) {
              $target$$151 = 0;
              _builder$$1 = expr$$16.fields[3].head;
              arg$$3 = expr$$16.fields[3].tail.head;
              vref$$15 = expr$$16.fields[0].fields[0];
            } else {
              $target$$151 = 1;
            }
          } else {
            $target$$151 = 1;
          }
        } else {
          $target$$151 = 1;
        }
      } else {
        $target$$151 = 1;
      }
    } else {
      $target$$151 = 1;
    }
  } else {
    $target$$151 = 1;
  }

  switch ($target$$151) {
    case 0:
      {
        return [arg$$3, null];
      }

    case 1:
      {
        var $target$$152, _builder$$3, arg$$5, elemTy$$1, vref$$17;

        if (expr$$16.tag === 5) {
          if (expr$$16.fields[0].tag === 1) {
            if (expr$$16.fields[2].tail != null) {
              if (expr$$16.fields[2].tail.tail == null) {
                if (expr$$16.fields[3].tail != null) {
                  if (expr$$16.fields[3].tail.tail != null) {
                    if (expr$$16.fields[3].tail.tail.tail == null) {
                      if (vref$$16 = expr$$16.fields[0].fields[0], (elemTy = expr$$16.fields[2].head, (arg$$4 = expr$$16.fields[3].tail.head, (_builder$$2 = expr$$16.fields[3].head, (0, _TastOps.valRefEq)(g$$26, vref$$16, (0, _TcGlobals.TcGlobals$$get_query_run_enumerable_vref)(g$$26)))))) {
                        $target$$152 = 0;
                        _builder$$3 = expr$$16.fields[3].head;
                        arg$$5 = expr$$16.fields[3].tail.head;
                        elemTy$$1 = expr$$16.fields[2].head;
                        vref$$17 = expr$$16.fields[0].fields[0];
                      } else {
                        $target$$152 = 1;
                      }
                    } else {
                      $target$$152 = 1;
                    }
                  } else {
                    $target$$152 = 1;
                  }
                } else {
                  $target$$152 = 1;
                }
              } else {
                $target$$152 = 1;
              }
            } else {
              $target$$152 = 1;
            }
          } else {
            $target$$152 = 1;
          }
        } else {
          $target$$152 = 1;
        }

        switch ($target$$152) {
          case 0:
            {
              return [arg$$5, elemTy$$1];
            }

          case 1:
            {
              return null;
            }
        }
      }
  }
}

function $007CMaybeRefTupled$007C(e$$4) {
  return (0, _TastOps.tryDestRefTupleExpr)(e$$4);
}

function $007CAnyInstanceMethodApp$007C_$007C(e$$5) {
  var $target$$153, args$$8, obj, tyargs$$3, vref$$18;

  if (e$$5.tag === 5) {
    if (e$$5.fields[0].tag === 1) {
      if (e$$5.fields[3].tail != null) {
        if (e$$5.fields[3].tail.tail != null) {
          if (e$$5.fields[3].tail.tail.tail == null) {
            $target$$153 = 0;
            args$$8 = $007CMaybeRefTupled$007C(e$$5.fields[3].tail.head);
            obj = e$$5.fields[3].head;
            tyargs$$3 = e$$5.fields[2];
            vref$$18 = e$$5.fields[0].fields[0];
          } else {
            $target$$153 = 1;
          }
        } else {
          $target$$153 = 1;
        }
      } else {
        $target$$153 = 1;
      }
    } else {
      $target$$153 = 1;
    }
  } else {
    $target$$153 = 1;
  }

  switch ($target$$153) {
    case 0:
      {
        return [vref$$18, tyargs$$3, obj, args$$8];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CInstanceMethodApp$007C_$007C(g$$27, expectedValRef, e$$6) {
  var vref$$19, tyargs$$4, obj$$1, args$$9;
  var $target$$154, args$$10, obj$$2, tyargs$$5, vref$$20;
  const activePatternResult50562 = $007CAnyInstanceMethodApp$007C_$007C(e$$6);

  if (activePatternResult50562 != null) {
    if (vref$$19 = activePatternResult50562[0], (tyargs$$4 = activePatternResult50562[1], (obj$$1 = activePatternResult50562[2], (args$$9 = activePatternResult50562[3], (0, _TastOps.valRefEq)(g$$27, vref$$19, expectedValRef))))) {
      $target$$154 = 0;
      args$$10 = activePatternResult50562[3];
      obj$$2 = activePatternResult50562[2];
      tyargs$$5 = activePatternResult50562[1];
      vref$$20 = activePatternResult50562[0];
    } else {
      $target$$154 = 1;
    }
  } else {
    $target$$154 = 1;
  }

  switch ($target$$154) {
    case 0:
      {
        return [tyargs$$5, obj$$2, args$$10];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CQuerySourceEnumerable$007C_$007C(g$$28, _arg1$$9) {
  var $target$$155, _builder$$4, res$$15, resTy;

  const activePatternResult50567 = $007CInstanceMethodApp$007C_$007C(g$$28, (0, _TcGlobals.TcGlobals$$get_query_source_vref)(g$$28), _arg1$$9);

  if (activePatternResult50567 != null) {
    if (activePatternResult50567[0].tail != null) {
      if (activePatternResult50567[0].tail.tail == null) {
        if (activePatternResult50567[2].tail != null) {
          if (activePatternResult50567[2].tail.tail == null) {
            $target$$155 = 0;
            _builder$$4 = activePatternResult50567[1];
            res$$15 = activePatternResult50567[2].head;
            resTy = activePatternResult50567[0].head;
          } else {
            $target$$155 = 1;
          }
        } else {
          $target$$155 = 1;
        }
      } else {
        $target$$155 = 1;
      }
    } else {
      $target$$155 = 1;
    }
  } else {
    $target$$155 = 1;
  }

  switch ($target$$155) {
    case 0:
      {
        return [resTy, res$$15];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CQueryFor$007C_$007C(g$$29, _arg1$$10) {
  var $target$$156, _builder$$5, _qInnerTy, qTy, resTy$$1, selector, src, srcTy;

  const activePatternResult50571 = $007CInstanceMethodApp$007C_$007C(g$$29, (0, _TcGlobals.TcGlobals$$get_query_for_vref)(g$$29), _arg1$$10);

  if (activePatternResult50571 != null) {
    if (activePatternResult50571[0].tail != null) {
      if (activePatternResult50571[0].tail.tail != null) {
        if (activePatternResult50571[0].tail.tail.tail != null) {
          if (activePatternResult50571[0].tail.tail.tail.tail != null) {
            if (activePatternResult50571[0].tail.tail.tail.tail.tail == null) {
              if (activePatternResult50571[2].tail != null) {
                if (activePatternResult50571[2].tail.tail != null) {
                  if (activePatternResult50571[2].tail.tail.tail == null) {
                    $target$$156 = 0;
                    _builder$$5 = activePatternResult50571[1];
                    _qInnerTy = activePatternResult50571[0].tail.tail.tail.head;
                    qTy = activePatternResult50571[0].tail.head;
                    resTy$$1 = activePatternResult50571[0].tail.tail.head;
                    selector = activePatternResult50571[2].tail.head;
                    src = activePatternResult50571[2].head;
                    srcTy = activePatternResult50571[0].head;
                  } else {
                    $target$$156 = 1;
                  }
                } else {
                  $target$$156 = 1;
                }
              } else {
                $target$$156 = 1;
              }
            } else {
              $target$$156 = 1;
            }
          } else {
            $target$$156 = 1;
          }
        } else {
          $target$$156 = 1;
        }
      } else {
        $target$$156 = 1;
      }
    } else {
      $target$$156 = 1;
    }
  } else {
    $target$$156 = 1;
  }

  switch ($target$$156) {
    case 0:
      {
        return [qTy, srcTy, resTy$$1, src, selector];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CQueryYield$007C_$007C(g$$30, _arg1$$11) {
  var $target$$157, _builder$$6, qTy$$1, res$$16, resTy$$2;

  const activePatternResult50575 = $007CInstanceMethodApp$007C_$007C(g$$30, (0, _TcGlobals.TcGlobals$$get_query_yield_vref)(g$$30), _arg1$$11);

  if (activePatternResult50575 != null) {
    if (activePatternResult50575[0].tail != null) {
      if (activePatternResult50575[0].tail.tail != null) {
        if (activePatternResult50575[0].tail.tail.tail == null) {
          if (activePatternResult50575[2].tail != null) {
            if (activePatternResult50575[2].tail.tail == null) {
              $target$$157 = 0;
              _builder$$6 = activePatternResult50575[1];
              qTy$$1 = activePatternResult50575[0].tail.head;
              res$$16 = activePatternResult50575[2].head;
              resTy$$2 = activePatternResult50575[0].head;
            } else {
              $target$$157 = 1;
            }
          } else {
            $target$$157 = 1;
          }
        } else {
          $target$$157 = 1;
        }
      } else {
        $target$$157 = 1;
      }
    } else {
      $target$$157 = 1;
    }
  } else {
    $target$$157 = 1;
  }

  switch ($target$$157) {
    case 0:
      {
        return [qTy$$1, resTy$$2, res$$16];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CQueryYieldFrom$007C_$007C(g$$31, _arg1$$12) {
  var $target$$158, _builder$$7, qTy$$2, res$$17, resTy$$3;

  const activePatternResult50579 = $007CInstanceMethodApp$007C_$007C(g$$31, (0, _TcGlobals.TcGlobals$$get_query_yield_from_vref)(g$$31), _arg1$$12);

  if (activePatternResult50579 != null) {
    if (activePatternResult50579[0].tail != null) {
      if (activePatternResult50579[0].tail.tail != null) {
        if (activePatternResult50579[0].tail.tail.tail == null) {
          if (activePatternResult50579[2].tail != null) {
            if (activePatternResult50579[2].tail.tail == null) {
              $target$$158 = 0;
              _builder$$7 = activePatternResult50579[1];
              qTy$$2 = activePatternResult50579[0].tail.head;
              res$$17 = activePatternResult50579[2].head;
              resTy$$3 = activePatternResult50579[0].head;
            } else {
              $target$$158 = 1;
            }
          } else {
            $target$$158 = 1;
          }
        } else {
          $target$$158 = 1;
        }
      } else {
        $target$$158 = 1;
      }
    } else {
      $target$$158 = 1;
    }
  } else {
    $target$$158 = 1;
  }

  switch ($target$$158) {
    case 0:
      {
        return [qTy$$2, resTy$$3, res$$17];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CQuerySelect$007C_$007C(g$$32, _arg1$$13) {
  var $target$$159, _builder$$8, qTy$$3, resTy$$4, selector$$1, src$$1, srcTy$$1;

  const activePatternResult50583 = $007CInstanceMethodApp$007C_$007C(g$$32, (0, _TcGlobals.TcGlobals$$get_query_select_vref)(g$$32), _arg1$$13);

  if (activePatternResult50583 != null) {
    if (activePatternResult50583[0].tail != null) {
      if (activePatternResult50583[0].tail.tail != null) {
        if (activePatternResult50583[0].tail.tail.tail != null) {
          if (activePatternResult50583[0].tail.tail.tail.tail == null) {
            if (activePatternResult50583[2].tail != null) {
              if (activePatternResult50583[2].tail.tail != null) {
                if (activePatternResult50583[2].tail.tail.tail == null) {
                  $target$$159 = 0;
                  _builder$$8 = activePatternResult50583[1];
                  qTy$$3 = activePatternResult50583[0].tail.head;
                  resTy$$4 = activePatternResult50583[0].tail.tail.head;
                  selector$$1 = activePatternResult50583[2].tail.head;
                  src$$1 = activePatternResult50583[2].head;
                  srcTy$$1 = activePatternResult50583[0].head;
                } else {
                  $target$$159 = 1;
                }
              } else {
                $target$$159 = 1;
              }
            } else {
              $target$$159 = 1;
            }
          } else {
            $target$$159 = 1;
          }
        } else {
          $target$$159 = 1;
        }
      } else {
        $target$$159 = 1;
      }
    } else {
      $target$$159 = 1;
    }
  } else {
    $target$$159 = 1;
  }

  switch ($target$$159) {
    case 0:
      {
        return [qTy$$3, srcTy$$1, resTy$$4, src$$1, selector$$1];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CQueryZero$007C_$007C(g$$33, _arg1$$14) {
  var $target$$160, _builder$$9, qTy$$4, resTy$$5;

  const activePatternResult50587 = $007CInstanceMethodApp$007C_$007C(g$$33, (0, _TcGlobals.TcGlobals$$get_query_zero_vref)(g$$33), _arg1$$14);

  if (activePatternResult50587 != null) {
    if (activePatternResult50587[0].tail != null) {
      if (activePatternResult50587[0].tail.tail != null) {
        if (activePatternResult50587[0].tail.tail.tail == null) {
          $target$$160 = 0;
          _builder$$9 = activePatternResult50587[1];
          qTy$$4 = activePatternResult50587[0].tail.head;
          resTy$$5 = activePatternResult50587[0].head;
        } else {
          $target$$160 = 1;
        }
      } else {
        $target$$160 = 1;
      }
    } else {
      $target$$160 = 1;
    }
  } else {
    $target$$160 = 1;
  }

  switch ($target$$160) {
    case 0:
      {
        return [qTy$$4, resTy$$5];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CAnyRefTupleTrans$007C(e$$13) {
  var tys$$1, tupInfo$$2, m$$18, es;
  var $target$$161, es$$1, m$$19, tupInfo$$3, tys$$2;

  if (e$$13.tag === 11) {
    if (e$$13.fields[0].tag === 2) {
      if (tys$$1 = e$$13.fields[1], (tupInfo$$2 = e$$13.fields[0].fields[0], (m$$18 = e$$13.fields[3], (es = e$$13.fields[2], !(0, _TastOps.evalTupInfoIsStruct)(tupInfo$$2))))) {
        $target$$161 = 0;
        es$$1 = e$$13.fields[2];
        m$$19 = e$$13.fields[3];
        tupInfo$$3 = e$$13.fields[0].fields[0];
        tys$$2 = e$$13.fields[1];
      } else {
        $target$$161 = 1;
      }
    } else {
      $target$$161 = 1;
    }
  } else {
    $target$$161 = 1;
  }

  switch ($target$$161) {
    case 0:
      {
        return [es$$1, function (es$$2) {
          return new _tast.Expr(11, "Op", new _tast.TOp(2, "Tuple", tupInfo$$3), tys$$2, es$$2, m$$19);
        }];
      }

    case 1:
      {
        return [(0, _Types.L)(e$$13, (0, _Types.L)()), function (_arg1$$15) {
          var $target$$162, e$$14;

          if (_arg1$$15.tail != null) {
            if (_arg1$$15.tail.tail == null) {
              $target$$162 = 0;
              e$$14 = _arg1$$15.head;
            } else {
              $target$$162 = 1;
            }
          } else {
            $target$$162 = 1;
          }

          switch ($target$$162) {
            case 0:
              {
                return e$$14;
              }

            case 1:
              {
                throw new Error("unreachable");
              }
          }
        }];
      }
  }
}

function $007CAnyQueryBuilderOpTrans$007C_$007C(g$$34, _arg1$$16) {
  var vty, vref$$21, v$$35, tyargs$$6, src$$2, rest, m$$20, builder, matchValue$$67, tcref$$7;
  var $target$$163, builder$$1, m$$21, replaceArgs$$1, rest$$1, src$$3, tyargs$$7, v$$36, vref$$22, vty$$1;

  if (_arg1$$16.tag === 5) {
    if (_arg1$$16.fields[0].tag === 1) {
      if (_arg1$$16.fields[3].tail != null) {
        if (_arg1$$16.fields[3].tail.tail != null) {
          const activePatternResult50595 = $007CAnyRefTupleTrans$007C(_arg1$$16.fields[3].tail.head);

          if (activePatternResult50595[0].tail != null) {
            if (_arg1$$16.fields[3].tail.tail.tail == null) {
              if (vty = _arg1$$16.fields[1], (vref$$21 = _arg1$$16.fields[0].fields[0], (v$$35 = _arg1$$16.fields[0], (tyargs$$6 = _arg1$$16.fields[2], (src$$2 = activePatternResult50595[0].head, (rest = activePatternResult50595[0].tail, (m$$20 = _arg1$$16.fields[4], (builder = _arg1$$16.fields[3].head, (matchValue$$67 = (0, _tast.ValRef$$get_ApparentEnclosingEntity)(vref$$21), matchValue$$67.tag === 1 ? false : (tcref$$7 = matchValue$$67.fields[0], (0, _TastOps.tyconRefEq)(g$$34, tcref$$7, (0, _TcGlobals.TcGlobals$$get_query_builder_tcref)(g$$34)))))))))))) {
                $target$$163 = 0;
                builder$$1 = _arg1$$16.fields[3].head;
                m$$21 = _arg1$$16.fields[4];
                replaceArgs$$1 = activePatternResult50595[1];
                rest$$1 = activePatternResult50595[0].tail;
                src$$3 = activePatternResult50595[0].head;
                tyargs$$7 = _arg1$$16.fields[2];
                v$$36 = _arg1$$16.fields[0];
                vref$$22 = _arg1$$16.fields[0].fields[0];
                vty$$1 = _arg1$$16.fields[1];
              } else {
                $target$$163 = 1;
              }
            } else {
              $target$$163 = 1;
            }
          } else {
            $target$$163 = 1;
          }
        } else {
          $target$$163 = 1;
        }
      } else {
        $target$$163 = 1;
      }
    } else {
      $target$$163 = 1;
    }
  } else {
    $target$$163 = 1;
  }

  switch ($target$$163) {
    case 0:
      {
        return [src$$3, function (newSource) {
          return new _tast.Expr(5, "App", v$$36, vty$$1, tyargs$$7, (0, _Types.L)(builder$$1, (0, _Types.L)(replaceArgs$$1((0, _Types.L)(newSource, rest$$1)), (0, _Types.L)())), m$$21);
        }];
      }

    case 1:
      {
        return null;
      }
  }
}

function mkUnitDelayLambda(g$$35, m$$22, e$$15) {
  const patternInput$$4 = (0, _TastOps.mkCompGenLocal)(m$$22, "unitVar", (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$35));
  return (0, _TastOps.mkLambda)(m$$22, patternInput$$4[0], e$$15, (0, _TastOps.tyOfExpr)(g$$35, e$$15));
}

function tryRewriteToSeqCombinators(g$$36, e$$16) {
  const m$$23 = (0, _TastOps.Expr$002Eget_Range)(e$$16);
  const activePatternResult50616 = $007CQueryYield$007C_$007C(g$$36, e$$16);

  if (activePatternResult50616 != null) {
    return (0, _TastOps.mkCallSeqSingleton)(g$$36, m$$23, activePatternResult50616[1], activePatternResult50616[2]);
  } else {
    var $target$$164, resExpr;
    const activePatternResult50612 = $007CQueryYieldFrom$007C_$007C(g$$36, e$$16);

    if (activePatternResult50612 != null) {
      const activePatternResult50614 = $007CQuerySourceEnumerable$007C_$007C(g$$36, activePatternResult50612[2]);

      if (activePatternResult50614 != null) {
        $target$$164 = 0;
        resExpr = activePatternResult50614[1];
      } else {
        $target$$164 = 1;
      }
    } else {
      $target$$164 = 1;
    }

    switch ($target$$164) {
      case 0:
        {
          return resExpr;
        }

      case 1:
        {
          const activePatternResult50610 = $007CQuerySelect$007C_$007C(g$$36, e$$16);

          if (activePatternResult50610 != null) {
            const matchValue$$68 = tryRewriteToSeqCombinators(g$$36, activePatternResult50610[3]);

            if (matchValue$$68 == null) {
              return null;
            } else {
              const newSource$$1 = matchValue$$68;
              return (0, _TastOps.mkCallSeqMap)(g$$36, m$$23, activePatternResult50610[1], activePatternResult50610[2], activePatternResult50610[4], newSource$$1);
            }
          } else {
            const activePatternResult50608 = $007CQueryZero$007C_$007C(g$$36, e$$16);

            if (activePatternResult50608 != null) {
              return (0, _TastOps.mkCallSeqEmpty)(g$$36, m$$23, activePatternResult50608[1]);
            } else {
              var $target$$165, _qTy$$2, mLambda, resultElemTy$$2, resultSelector$$1, resultSelectorVar, source$$5, sourceElemTy$$2;

              const activePatternResult50604 = $007CQueryFor$007C_$007C(g$$36, e$$16);

              if (activePatternResult50604 != null) {
                const activePatternResult50606 = $007CQuerySourceEnumerable$007C_$007C(g$$36, activePatternResult50604[3]);

                if (activePatternResult50606 != null) {
                  if (activePatternResult50604[4].tag === 3) {
                    if (activePatternResult50604[4].fields[3].tail != null) {
                      if (activePatternResult50604[4].fields[3].tail.tail == null) {
                        $target$$165 = 0;
                        _qTy$$2 = activePatternResult50604[0];
                        mLambda = activePatternResult50604[4].fields[5];
                        resultElemTy$$2 = activePatternResult50604[2];
                        resultSelector$$1 = activePatternResult50604[4].fields[4];
                        resultSelectorVar = activePatternResult50604[4].fields[3].head;
                        source$$5 = activePatternResult50606[1];
                        sourceElemTy$$2 = activePatternResult50604[1];
                      } else {
                        $target$$165 = 1;
                      }
                    } else {
                      $target$$165 = 1;
                    }
                  } else {
                    $target$$165 = 1;
                  }
                } else {
                  $target$$165 = 1;
                }
              } else {
                $target$$165 = 1;
              }

              switch ($target$$165) {
                case 0:
                  {
                    const matchValue$$69 = tryRewriteToSeqCombinators(g$$36, resultSelector$$1);

                    if (matchValue$$69 != null) {
                      const newResultSelector = matchValue$$69;
                      return (0, _TastOps.mkCallSeqCollect)(g$$36, m$$23, sourceElemTy$$2, resultElemTy$$2, (0, _TastOps.mkLambda)(mLambda, resultSelectorVar, newResultSelector, (0, _TastOps.tyOfExpr)(g$$36, newResultSelector)), source$$5);
                    } else {
                      return null;
                    }
                  }

                case 1:
                  {
                    switch (e$$16.tag) {
                      case 7:
                        {
                          const m$$24 = e$$16.fields[2];
                          const bodyExpr = e$$16.fields[1];
                          const bind$$5 = e$$16.fields[0];
                          const matchValue$$70 = tryRewriteToSeqCombinators(g$$36, bodyExpr);

                          if (matchValue$$70 == null) {
                            return null;
                          } else {
                            const newBodyExpr = matchValue$$70;
                            return new _tast.Expr(7, "Let", bind$$5, newBodyExpr, m$$24, (0, _lib.newCache)());
                          }
                        }

                      case 9:
                        {
                          const targets$$2 = e$$16.fields[3];
                          const spBind$$1 = e$$16.fields[0];
                          const pt = e$$16.fields[2];
                          const m$$25 = e$$16.fields[4];
                          const exprm = e$$16.fields[1];
                          const _ty = e$$16.fields[5];
                          const targets$$3 = (0, _Array.map)(function mapping$$3(_arg1$$24) {
                            const vs = _arg1$$24.fields[0];
                            const spTarget = _arg1$$24.fields[2];
                            const e$$17 = _arg1$$24.fields[1];
                            const matchValue$$71 = tryRewriteToSeqCombinators(g$$36, e$$17);

                            if (matchValue$$71 != null) {
                              const e$$18 = matchValue$$71;
                              return new _tast.DecisionTreeTarget(0, "TTarget", vs, e$$18, spTarget);
                            } else {
                              return null;
                            }
                          }, targets$$2, Array);

                          if (targets$$3.every(function predicate$$4(option) {
                            return option != null;
                          })) {
                            const targets$$4 = (0, _Array.map)(function mapping$$4(option$$1) {
                              return option$$1;
                            }, targets$$3, Array);
                            const ty$$31 = (0, _Array.pick)(function chooser(_arg2$$1) {
                              const e$$19 = _arg2$$1.fields[1];
                              return (0, _TastOps.tyOfExpr)(g$$36, e$$19);
                            }, targets$$4);
                            return new _tast.Expr(9, "Match", spBind$$1, exprm, pt, targets$$4, m$$25, ty$$31);
                          } else {
                            return null;
                          }
                        }

                      default:
                        {
                          return null;
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

function TryDetectQueryQuoteAndRun(cenv$$13, expr$$17) {
  const g$$37 = cenv$$13.g;
  const activePatternResult50642 = $007CQueryRun$007C_$007C(g$$37, expr$$17);

  if (activePatternResult50642 != null) {
    var $target$$166, quotedExpr;

    if (activePatternResult50642[0].tag === 12) {
      if (activePatternResult50642[0].fields[2]) {
        $target$$166 = 0;
        quotedExpr = activePatternResult50642[0].fields[0];
      } else {
        $target$$166 = 1;
      }
    } else {
      $target$$166 = 1;
    }

    switch ($target$$166) {
      case 0:
        {
          const loopOuter = function loopOuter(e$$20) {
            var resultElemTy$$3, qTy$$5, resultElemTy$$4, qTy$$6, resultElemTy$$5, qTy$$7, resultElemTy$$6, qTy$$8, resultElemTy$$7, qTy$$9, resultElemTy$$8, qTy$$10, resultElemTy$$9, qTy$$11, resultElemTy$$10, qTy$$12, resultElemTy$$11, qTy$$13, resultElemTy$$12, qTy$$14, resultElemTy$$13, qTy$$15, resultElemTy$$14, qTy$$16, resultElemTy$$15, qTy$$17, resultElemTy$$16, qTy$$18, resultElemTy$$17, qTy$$19;
            var $target$$167, qTy$$20, resultElemTy$$18;
            const activePatternResult50625 = $007CQueryFor$007C_$007C(g$$37, e$$20);

            if (activePatternResult50625 != null) {
              if (resultElemTy$$3 = activePatternResult50625[2], (qTy$$5 = activePatternResult50625[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$5, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                $target$$167 = 0;
                qTy$$20 = activePatternResult50625[0];
                resultElemTy$$18 = activePatternResult50625[2];
              } else {
                const activePatternResult50626 = $007CQuerySelect$007C_$007C(g$$37, e$$20);

                if (activePatternResult50626 != null) {
                  if (resultElemTy$$4 = activePatternResult50626[2], (qTy$$6 = activePatternResult50626[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$6, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                    $target$$167 = 0;
                    qTy$$20 = activePatternResult50626[0];
                    resultElemTy$$18 = activePatternResult50626[2];
                  } else {
                    const activePatternResult50627 = $007CQueryYield$007C_$007C(g$$37, e$$20);

                    if (activePatternResult50627 != null) {
                      if (resultElemTy$$5 = activePatternResult50627[1], (qTy$$7 = activePatternResult50627[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$7, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                        $target$$167 = 0;
                        qTy$$20 = activePatternResult50627[0];
                        resultElemTy$$18 = activePatternResult50627[1];
                      } else {
                        const activePatternResult50628 = $007CQueryYieldFrom$007C_$007C(g$$37, e$$20);

                        if (activePatternResult50628 != null) {
                          if (resultElemTy$$6 = activePatternResult50628[1], (qTy$$8 = activePatternResult50628[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$8, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                            $target$$167 = 0;
                            qTy$$20 = activePatternResult50628[0];
                            resultElemTy$$18 = activePatternResult50628[1];
                          } else {
                            $target$$167 = 1;
                          }
                        } else {
                          $target$$167 = 1;
                        }
                      }
                    } else {
                      const activePatternResult50629 = $007CQueryYieldFrom$007C_$007C(g$$37, e$$20);

                      if (activePatternResult50629 != null) {
                        if (resultElemTy$$7 = activePatternResult50629[1], (qTy$$9 = activePatternResult50629[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$9, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                          $target$$167 = 0;
                          qTy$$20 = activePatternResult50629[0];
                          resultElemTy$$18 = activePatternResult50629[1];
                        } else {
                          $target$$167 = 1;
                        }
                      } else {
                        $target$$167 = 1;
                      }
                    }
                  }
                } else {
                  const activePatternResult50630 = $007CQueryYield$007C_$007C(g$$37, e$$20);

                  if (activePatternResult50630 != null) {
                    if (resultElemTy$$8 = activePatternResult50630[1], (qTy$$10 = activePatternResult50630[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$10, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                      $target$$167 = 0;
                      qTy$$20 = activePatternResult50630[0];
                      resultElemTy$$18 = activePatternResult50630[1];
                    } else {
                      const activePatternResult50631 = $007CQueryYieldFrom$007C_$007C(g$$37, e$$20);

                      if (activePatternResult50631 != null) {
                        if (resultElemTy$$9 = activePatternResult50631[1], (qTy$$11 = activePatternResult50631[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$11, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                          $target$$167 = 0;
                          qTy$$20 = activePatternResult50631[0];
                          resultElemTy$$18 = activePatternResult50631[1];
                        } else {
                          $target$$167 = 1;
                        }
                      } else {
                        $target$$167 = 1;
                      }
                    }
                  } else {
                    const activePatternResult50632 = $007CQueryYieldFrom$007C_$007C(g$$37, e$$20);

                    if (activePatternResult50632 != null) {
                      if (resultElemTy$$10 = activePatternResult50632[1], (qTy$$12 = activePatternResult50632[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$12, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                        $target$$167 = 0;
                        qTy$$20 = activePatternResult50632[0];
                        resultElemTy$$18 = activePatternResult50632[1];
                      } else {
                        $target$$167 = 1;
                      }
                    } else {
                      $target$$167 = 1;
                    }
                  }
                }
              }
            } else {
              const activePatternResult50633 = $007CQuerySelect$007C_$007C(g$$37, e$$20);

              if (activePatternResult50633 != null) {
                if (resultElemTy$$11 = activePatternResult50633[2], (qTy$$13 = activePatternResult50633[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$13, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                  $target$$167 = 0;
                  qTy$$20 = activePatternResult50633[0];
                  resultElemTy$$18 = activePatternResult50633[2];
                } else {
                  const activePatternResult50634 = $007CQueryYield$007C_$007C(g$$37, e$$20);

                  if (activePatternResult50634 != null) {
                    if (resultElemTy$$12 = activePatternResult50634[1], (qTy$$14 = activePatternResult50634[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$14, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                      $target$$167 = 0;
                      qTy$$20 = activePatternResult50634[0];
                      resultElemTy$$18 = activePatternResult50634[1];
                    } else {
                      const activePatternResult50635 = $007CQueryYieldFrom$007C_$007C(g$$37, e$$20);

                      if (activePatternResult50635 != null) {
                        if (resultElemTy$$13 = activePatternResult50635[1], (qTy$$15 = activePatternResult50635[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$15, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                          $target$$167 = 0;
                          qTy$$20 = activePatternResult50635[0];
                          resultElemTy$$18 = activePatternResult50635[1];
                        } else {
                          $target$$167 = 1;
                        }
                      } else {
                        $target$$167 = 1;
                      }
                    }
                  } else {
                    const activePatternResult50636 = $007CQueryYieldFrom$007C_$007C(g$$37, e$$20);

                    if (activePatternResult50636 != null) {
                      if (resultElemTy$$14 = activePatternResult50636[1], (qTy$$16 = activePatternResult50636[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$16, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                        $target$$167 = 0;
                        qTy$$20 = activePatternResult50636[0];
                        resultElemTy$$18 = activePatternResult50636[1];
                      } else {
                        $target$$167 = 1;
                      }
                    } else {
                      $target$$167 = 1;
                    }
                  }
                }
              } else {
                const activePatternResult50637 = $007CQueryYield$007C_$007C(g$$37, e$$20);

                if (activePatternResult50637 != null) {
                  if (resultElemTy$$15 = activePatternResult50637[1], (qTy$$17 = activePatternResult50637[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$17, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                    $target$$167 = 0;
                    qTy$$20 = activePatternResult50637[0];
                    resultElemTy$$18 = activePatternResult50637[1];
                  } else {
                    const activePatternResult50638 = $007CQueryYieldFrom$007C_$007C(g$$37, e$$20);

                    if (activePatternResult50638 != null) {
                      if (resultElemTy$$16 = activePatternResult50638[1], (qTy$$18 = activePatternResult50638[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$18, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                        $target$$167 = 0;
                        qTy$$20 = activePatternResult50638[0];
                        resultElemTy$$18 = activePatternResult50638[1];
                      } else {
                        $target$$167 = 1;
                      }
                    } else {
                      $target$$167 = 1;
                    }
                  }
                } else {
                  const activePatternResult50639 = $007CQueryYieldFrom$007C_$007C(g$$37, e$$20);

                  if (activePatternResult50639 != null) {
                    if (resultElemTy$$17 = activePatternResult50639[1], (qTy$$19 = activePatternResult50639[0], (0, _TastOps.typeEquiv)(cenv$$13.g, qTy$$19, (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)())))) {
                      $target$$167 = 0;
                      qTy$$20 = activePatternResult50639[0];
                      resultElemTy$$18 = activePatternResult50639[1];
                    } else {
                      $target$$167 = 1;
                    }
                  } else {
                    $target$$167 = 1;
                  }
                }
              }
            }

            switch ($target$$167) {
              case 0:
                {
                  const matchValue$$72 = tryRewriteToSeqCombinators(cenv$$13.g, e$$20);

                  if (matchValue$$72 == null) {
                    return [e$$20, null];
                  } else {
                    const newSource$$2 = matchValue$$72;
                    return [(0, _TastOps.mkCallSeq)(cenv$$13.g, (0, _TastOps.Expr$002Eget_Range)(newSource$$2), resultElemTy$$18, (0, _TastOps.mkCallSeqDelay)(cenv$$13.g, (0, _TastOps.Expr$002Eget_Range)(newSource$$2), resultElemTy$$18, mkUnitDelayLambda(cenv$$13.g, (0, _TastOps.Expr$002Eget_Range)(newSource$$2), newSource$$2))), [resultElemTy$$18, qTy$$20]];
                  }
                }

              case 1:
                {
                  const activePatternResult50620 = $007CAnyQueryBuilderOpTrans$007C_$007C(g$$37, e$$20);

                  if (activePatternResult50620 != null) {
                    const matchValue$$73 = loopOuter(activePatternResult50620[0]);

                    if (matchValue$$73 == null) {
                      return null;
                    } else {
                      const newSeqSourceIsEnumerableInfo = matchValue$$73[1];
                      const newSeqSource = matchValue$$73[0];
                      let newSeqSourceAsQuerySource;

                      if (newSeqSourceIsEnumerableInfo == null) {
                        newSeqSourceAsQuerySource = newSeqSource;
                      } else {
                        const resultElemTy$$19 = newSeqSourceIsEnumerableInfo[0];
                        const qTy$$21 = newSeqSourceIsEnumerableInfo[1];
                        newSeqSourceAsQuerySource = (0, _TastOps.mkCallNewQuerySource)(cenv$$13.g, (0, _TastOps.Expr$002Eget_Range)(newSeqSource), resultElemTy$$19, qTy$$21, newSeqSource);
                      }

                      return [activePatternResult50620[1](newSeqSourceAsQuerySource), null];
                    }
                  } else {
                    return null;
                  }
                }
            }
          };

          const resultExprInfo = loopOuter(quotedExpr);

          if (resultExprInfo == null) {
            return null;
          } else {
            const resultExpr = resultExprInfo[0];
            const exprIsEnumerableInfo = resultExprInfo[1];
            let resultExprAfterConvertToResultTy;
            const matchValue$$74 = [activePatternResult50642[1], exprIsEnumerableInfo];
            var $target$$168, resultElemTy$$20, qTy$$22, resultElemTy$$21;

            if (matchValue$$74[0] == null) {
              if (matchValue$$74[1] != null) {
                $target$$168 = 2;
                qTy$$22 = matchValue$$74[1][1];
                resultElemTy$$21 = matchValue$$74[1][0];
              } else {
                $target$$168 = 0;
              }
            } else if (matchValue$$74[1] == null) {
              $target$$168 = 1;
              resultElemTy$$20 = matchValue$$74[0];
            } else {
              $target$$168 = 0;
            }

            switch ($target$$168) {
              case 0:
                {
                  resultExprAfterConvertToResultTy = resultExpr;
                  break;
                }

              case 1:
                {
                  resultExprAfterConvertToResultTy = (0, _TastOps.mkCallGetQuerySourceAsEnumerable)(cenv$$13.g, (0, _TastOps.Expr$002Eget_Range)(expr$$17), resultElemTy$$20, new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEnumerable)(cenv$$13.g), (0, _Types.L)()), resultExpr);
                  break;
                }

              case 2:
                {
                  resultExprAfterConvertToResultTy = (0, _TastOps.mkCallNewQuerySource)(cenv$$13.g, (0, _TastOps.Expr$002Eget_Range)(expr$$17), resultElemTy$$21, qTy$$22, resultExpr);
                  break;
                }
            }

            return resultExprAfterConvertToResultTy;
          }
        }

      case 1:
        {
          return null;
        }
    }
  } else {
    return null;
  }
}

function OptimizeExpr(cenv$$14, env$$19, expr$$19) {
  OptimizeExpr: while (true) {
    const expr$$20 = (0, _TastOps.NormalizeAndAdjustPossibleSubsumptionExprs)(cenv$$14.g, expr$$19);
    const expr$$21 = (0, _TastOps.stripExpr)(expr$$20);
    var $target$$169;

    switch (expr$$21.tag) {
      case 7:
        $target$$169 = 0;
        break;

      case 0:
        $target$$169 = 1;
        break;

      case 1:
        $target$$169 = 2;
        break;

      case 12:
        $target$$169 = 3;
        break;

      case 8:
        $target$$169 = 4;
        break;

      case 11:
        $target$$169 = 5;
        break;

      case 5:
        $target$$169 = 6;
        break;

      case 3:
        $target$$169 = 7;
        break;

      case 4:
        $target$$169 = 8;
        break;

      case 13:
        $target$$169 = 9;
        break;

      case 9:
        $target$$169 = 10;
        break;

      case 6:
        $target$$169 = 11;
        break;

      case 10:
        $target$$169 = 12;
        break;

      case 14:
        $target$$169 = 13;
        break;

      default:
        $target$$169 = 0;
    }

    switch ($target$$169) {
      case 0:
        {
          return OptimizeLinearExpr(cenv$$14, env$$19, expr$$21, function (x$$82) {
            return x$$82;
          });
        }

      case 1:
        {
          const ty$$32 = expr$$21.fields[2];
          const m$$26 = expr$$21.fields[1];
          const c$$7 = expr$$21.fields[0];
          return OptimizeConst(cenv$$14, env$$19, expr$$21, c$$7, m$$26, ty$$32);
        }

      case 2:
        {
          const v$$37 = expr$$21.fields[0];
          const m$$27 = expr$$21.fields[2];
          const _vFlags = expr$$21.fields[1];
          return OptimizeVal(cenv$$14, env$$19, expr$$21, v$$37, m$$27);
        }

      case 3:
        {
          const ty$$33 = expr$$21.fields[4];
          const splices = expr$$21.fields[1];
          const m$$28 = expr$$21.fields[3];
          const isFromQueryExpression = expr$$21.fields[2];
          const ast = expr$$21.fields[0];
          const splices$$1 = new _Types.FSharpRef((0, _Option.defaultArg)(splices.contents, null, function mapping$$6(tupledArg$$8) {
            return (0, _lib.map3Of4)(function f$$12(list$$9) {
              return (0, _List.map)(function mapping$$5($arg$$18) {
                return OptimizeExpr(cenv$$14, env$$19, $arg$$18)[0];
              }, list$$9);
            }, tupledArg$$8[0], tupledArg$$8[1], tupledArg$$8[2], tupledArg$$8[3]);
          }));
          return [new _tast.Expr(12, "Quote", ast, splices$$1, isFromQueryExpression, m$$28, ty$$33), new Summary$00601(new ExprValueInfo(0, "UnknownValue"), 1, 10, false, false)];
        }

      case 4:
        {
          const ty$$34 = expr$$21.fields[1];
          const overrides = expr$$21.fields[4];
          const m$$29 = expr$$21.fields[6];
          const iimpls = expr$$21.fields[5];
          const expr$$23 = expr$$21.fields[3];
          const basev = expr$$21.fields[2];
          return OptimizeObjectExpr(cenv$$14, env$$19, ty$$34, basev, expr$$23, overrides, iimpls, m$$29);
        }

      case 5:
        {
          const tyargs$$8 = expr$$21.fields[1];
          const m$$30 = expr$$21.fields[3];
          const c$$8 = expr$$21.fields[0];
          const args$$11 = expr$$21.fields[2];
          return OptimizeExprOp(cenv$$14, env$$19, c$$8, tyargs$$8, args$$11, m$$30);
        }

      case 6:
        {
          const tyargs$$9 = expr$$21.fields[2];
          const m$$31 = expr$$21.fields[4];
          const fty = expr$$21.fields[1];
          const f$$13 = expr$$21.fields[0];
          const argsl = expr$$21.fields[3];
          const matchValue$$75 = TryDetectQueryQuoteAndRun(cenv$$14, expr$$21);

          if (matchValue$$75 == null) {
            return OptimizeApplication(cenv$$14, env$$19, f$$13, fty, tyargs$$9, argsl, m$$31);
          } else {
            const newExpr = matchValue$$75;
            cenv$$14 = cenv$$14;
            env$$19 = env$$19;
            expr$$19 = newExpr;
            continue OptimizeExpr;
          }
        }

      case 7:
        {
          const rty = expr$$21.fields[6];
          const m$$32 = expr$$21.fields[5];
          const argvs = expr$$21.fields[3];
          const _lambdaId$$2 = expr$$21.fields[0];
          const _body = expr$$21.fields[4];
          const topValInfo = new _tast.ValReprInfo(0, "ValReprInfo", (0, _Types.L)(), (0, _Types.L)((0, _List.map)(function mapping$$7(_arg1$$41) {
            return _tast.ValReprInfoModule$$$unnamedTopArg1;
          }, argvs), (0, _Types.L)()), _tast.ValReprInfoModule$$$unnamedRetVal);
          const ty$$35 = (0, _TastOps.mkMultiLambdaTy)(m$$32, argvs, rty);
          return OptimizeLambdas(null, cenv$$14, env$$19, topValInfo, expr$$21, ty$$35);
        }

      case 8:
        {
          const tps$$1 = expr$$21.fields[1];
          const rty$$1 = expr$$21.fields[4];
          const _m$$2 = expr$$21.fields[3];
          const _lambdaId$$3 = expr$$21.fields[0];
          const _body$$1 = expr$$21.fields[2];
          const topValInfo$$1 = new _tast.ValReprInfo(0, "ValReprInfo", (0, _tast.ValReprInfoModule$$$InferTyparInfo)(tps$$1), (0, _Types.L)(), _tast.ValReprInfoModule$$$unnamedRetVal);
          const ty$$36 = (0, _TastOps.mkForallTyIfNeeded)(tps$$1, rty$$1);
          return OptimizeLambdas(null, cenv$$14, env$$19, topValInfo$$1, expr$$21, ty$$36);
        }

      case 9:
        {
          const $var$$170 = cenv$$14;
          env$$19 = env$$19;
          expr$$19 = (0, _TypeRelations.ChooseTyparSolutionsForFreeChoiceTypars)(cenv$$14.g, cenv$$14.amap, expr$$21);
          cenv$$14 = $var$$170;
          continue OptimizeExpr;
        }

      case 10:
        {
          const ty$$37 = expr$$21.fields[5];
          const targets$$5 = expr$$21.fields[3];
          const spMatch$$3 = expr$$21.fields[0];
          const m$$33 = expr$$21.fields[4];
          const exprm$$1 = expr$$21.fields[1];
          const dtree = expr$$21.fields[2];
          return OptimizeMatch(cenv$$14, env$$19, spMatch$$3, exprm$$1, dtree, targets$$5, m$$33, ty$$37);
        }

      case 11:
        {
          const m$$34 = expr$$21.fields[2];
          const e$$21 = expr$$21.fields[1];
          const binds$$3 = expr$$21.fields[0];
          return OptimizeLetRec(cenv$$14, env$$19, binds$$3, e$$21, m$$34);
        }

      case 12:
        {
          const m$$35 = expr$$21.fields[3];
          const e3 = expr$$21.fields[2];
          const e2$$2 = expr$$21.fields[1];
          const constraints = expr$$21.fields[0];
          const patternInput$$5 = OptimizeExpr(cenv$$14, env$$19, e2$$2);
          const patternInput$$6 = OptimizeExpr(cenv$$14, env$$19, e3);
          return [new _tast.Expr(10, "StaticOptimization", constraints, patternInput$$5[0], patternInput$$6[0], m$$35), new Summary$00601(new ExprValueInfo(0, "UnknownValue"), (0, _Util.min)(_Util.comparePrimitives, patternInput$$5[1].FunctionSize, patternInput$$6[1].FunctionSize), (0, _Util.min)(_Util.comparePrimitives, patternInput$$5[1].TotalSize, patternInput$$6[1].TotalSize), patternInput$$5[1].HasEffect ? true : patternInput$$6[1].HasEffect, patternInput$$5[1].MightMakeCriticalTailcall ? true : patternInput$$6[1].MightMakeCriticalTailcall)];
        }

      case 13:
        {
          const _eref = expr$$21.fields[0];
          throw new Error("Unexpected reclink");
        }
    }
  }
}

function OptimizeObjectExpr(cenv$$15, env$$20, ty$$38, baseValOpt, basecall, overrides$$1, iimpls$$1, m$$36) {
  const patternInput$$7 = OptimizeExpr(cenv$$15, env$$20, basecall);
  const patternInput$$8 = OptimizeMethods(cenv$$15, env$$20, baseValOpt, overrides$$1);
  const patternInput$$9 = OptimizeInterfaceImpls(cenv$$15, env$$20, baseValOpt, iimpls$$1);
  const expr$0027 = (0, _TastOps.mkObjExpr)(ty$$38, baseValOpt, patternInput$$7[0], patternInput$$8[0], patternInput$$9[0], m$$36);
  return [expr$0027, new Summary$00601(new ExprValueInfo(0, "UnknownValue"), 1, 10 + patternInput$$7[1].TotalSize + (0, _List.sumBy)(function projection$$2(x$$83) {
    return x$$83.TotalSize;
  }, patternInput$$8[1], {
    GetZero() {
      return 0;
    },

    Add($x$$23, $y$$24) {
      return $x$$23 + $y$$24;
    }

  }) + (0, _List.sumBy)(function projection$$3(x$$84) {
    return x$$84.TotalSize;
  }, patternInput$$9[1], {
    GetZero() {
      return 0;
    },

    Add($x$$25, $y$$26) {
      return $x$$25 + $y$$26;
    }

  }), true, false)];
}

function OptimizeMethods(cenv$$16, env$$21, baseValOpt$$1, l$$21) {
  return OptimizeList(function (arg30$0040) {
    return OptimizeMethod(cenv$$16, env$$21, baseValOpt$$1, arg30$0040);
  }, l$$21);
}

function OptimizeMethod(cenv$$17, env$$22, baseValOpt$$2, _arg1$$42) {
  const tmethod = _arg1$$42;
  const vs$$1 = tmethod.fields[3];
  const tps$$2 = tmethod.fields[2];
  const slotsig = tmethod.fields[0];
  const m$$37 = tmethod.fields[5];
  const e$$22 = tmethod.fields[4];
  const attribs = tmethod.fields[1];
  const env$$23 = new IncrementalOptimizationEnv((0, _tast.ObjExprMethod$$get_Id)(tmethod), env$$22.dontInline, env$$22.dontSplitVars, env$$22.inLoop, null, env$$22.typarInfos, env$$22.localExternalVals, env$$22.globalModuleInfos);
  const env$$24 = BindTypeVarsToUnknown(tps$$2, env$$23);
  let env$$26;
  cenv$$17;
  vs$$1;
  env$$26 = env$$24;
  const env$$29 = (0, _Seq.foldBack)(function (v$$38, env$$27) {
    cenv$$17;
    v$$38;
    return env$$27;
  }, (0, _Option.defaultArg)(baseValOpt$$2, [], function ($x$$27) {
    return [$x$$27];
  }), env$$26);
  const patternInput$$10 = OptimizeExpr(cenv$$17, env$$29, e$$22);
  return [new _tast.ObjExprMethod(0, "TObjExprMethod", slotsig, attribs, tps$$2, vs$$1, patternInput$$10[0], m$$37), new Summary$00601(new ExprValueInfo(0, "UnknownValue"), 0, patternInput$$10[1].TotalSize, false, false)];
}

function OptimizeInterfaceImpls(cenv$$20, env$$30, baseValOpt$$3, l$$22) {
  return OptimizeList(function (tupledArg$$9) {
    return OptimizeInterfaceImpl(cenv$$20, env$$30, baseValOpt$$3, tupledArg$$9[0], tupledArg$$9[1]);
  }, l$$22);
}

function OptimizeInterfaceImpl(cenv$$21, env$$31, baseValOpt$$4, ty$$40, overrides$$3) {
  const patternInput$$11 = OptimizeMethods(cenv$$21, env$$31, baseValOpt$$4, overrides$$3);
  return [[ty$$40, patternInput$$11[0]], new Summary$00601(new ExprValueInfo(0, "UnknownValue"), 1, (0, _List.sumBy)(function projection$$4(x$$85) {
    return x$$85.TotalSize;
  }, patternInput$$11[1], {
    GetZero() {
      return 0;
    },

    Add($x$$28, $y$$29) {
      return $x$$28 + $y$$29;
    }

  }), false, false)];
}

function OptimizeExprOp(cenv$$22, env$$32, op$$2, tyargs$$10, args$$12, m$$38) {
  var v$$40, ty$$41, a$$214, mref, arg$$6, _tys, _methTypeArgs, _enclTypeArgs;

  const matchValue$$76 = [op$$2, tyargs$$10, args$$12];

  var $target$$171, e$$23, fromty, toty, lop, lv$$1, e1$$1, e2$$3, marker, spWhile, dir, e1$$2, e2$$4, e3$$1, spStart, v$$42, e1$$3, e2$$5, resty, spFinally, spTry, e1$$4, ef, eh, resty$$1, spTry$$1, spWith, vf, vh, args$$13, traitInfo, _enclTypeArgs$$1, _methTypeArgs$$1, _tys$$1, arg$$7, mref$$1;

  if (matchValue$$76[0].tag === 24) {
    if (matchValue$$76[1].tail != null) {
      if (matchValue$$76[1].tail.tail != null) {
        if (matchValue$$76[1].tail.tail.tail == null) {
          if (matchValue$$76[2].tail != null) {
            if (matchValue$$76[2].tail.tail == null) {
              $target$$171 = 0;
              e$$23 = matchValue$$76[2].head;
              fromty = matchValue$$76[1].tail.head;
              toty = matchValue$$76[1].head;
            } else {
              $target$$171 = 8;
            }
          } else {
            $target$$171 = 8;
          }
        } else {
          $target$$171 = 8;
        }
      } else {
        $target$$171 = 8;
      }
    } else {
      $target$$171 = 8;
    }
  } else if (matchValue$$76[0].tag === 30) {
    if (matchValue$$76[0].fields[0].tag === 0) {
      $target$$171 = 1;
      lop = matchValue$$76[0].fields[0];
      lv$$1 = matchValue$$76[0].fields[1];
    } else {
      $target$$171 = 8;
    }
  } else if (matchValue$$76[0].tag === 6) {
    if (matchValue$$76[2].tail != null) {
      if (matchValue$$76[2].head.tag === 3) {
        if (matchValue$$76[2].head.fields[3].tail != null) {
          if (matchValue$$76[2].head.fields[3].tail.tail == null) {
            if (matchValue$$76[2].tail.tail != null) {
              if (matchValue$$76[2].tail.head.tag === 3) {
                if (matchValue$$76[2].tail.head.fields[3].tail != null) {
                  if (matchValue$$76[2].tail.head.fields[3].tail.tail == null) {
                    if (matchValue$$76[2].tail.tail.tail == null) {
                      $target$$171 = 2;
                      e1$$1 = matchValue$$76[2].head.fields[4];
                      e2$$3 = matchValue$$76[2].tail.head.fields[4];
                      marker = matchValue$$76[0].fields[1];
                      spWhile = matchValue$$76[0].fields[0];
                    } else {
                      $target$$171 = 8;
                    }
                  } else {
                    $target$$171 = 8;
                  }
                } else {
                  $target$$171 = 8;
                }
              } else {
                $target$$171 = 8;
              }
            } else {
              $target$$171 = 8;
            }
          } else {
            $target$$171 = 8;
          }
        } else {
          $target$$171 = 8;
        }
      } else {
        $target$$171 = 8;
      }
    } else {
      $target$$171 = 8;
    }
  } else if (matchValue$$76[0].tag === 7) {
    if (matchValue$$76[2].tail != null) {
      if (matchValue$$76[2].head.tag === 3) {
        if (matchValue$$76[2].head.fields[3].tail != null) {
          if (matchValue$$76[2].head.fields[3].tail.tail == null) {
            if (matchValue$$76[2].tail.tail != null) {
              if (matchValue$$76[2].tail.head.tag === 3) {
                if (matchValue$$76[2].tail.head.fields[3].tail != null) {
                  if (matchValue$$76[2].tail.head.fields[3].tail.tail == null) {
                    if (matchValue$$76[2].tail.tail.tail != null) {
                      if (matchValue$$76[2].tail.tail.head.tag === 3) {
                        if (matchValue$$76[2].tail.tail.head.fields[3].tail != null) {
                          if (matchValue$$76[2].tail.tail.head.fields[3].tail.tail == null) {
                            if (matchValue$$76[2].tail.tail.tail.tail == null) {
                              $target$$171 = 3;
                              dir = matchValue$$76[0].fields[1];
                              e1$$2 = matchValue$$76[2].head.fields[4];
                              e2$$4 = matchValue$$76[2].tail.head.fields[4];
                              e3$$1 = matchValue$$76[2].tail.tail.head.fields[4];
                              spStart = matchValue$$76[0].fields[0];
                              v$$42 = matchValue$$76[2].tail.tail.head.fields[3].head;
                            } else {
                              $target$$171 = 8;
                            }
                          } else {
                            $target$$171 = 8;
                          }
                        } else {
                          $target$$171 = 8;
                        }
                      } else {
                        $target$$171 = 8;
                      }
                    } else {
                      $target$$171 = 8;
                    }
                  } else {
                    $target$$171 = 8;
                  }
                } else {
                  $target$$171 = 8;
                }
              } else {
                $target$$171 = 8;
              }
            } else {
              $target$$171 = 8;
            }
          } else {
            $target$$171 = 8;
          }
        } else {
          $target$$171 = 8;
        }
      } else {
        $target$$171 = 8;
      }
    } else {
      $target$$171 = 8;
    }
  } else if (matchValue$$76[0].tag === 9) {
    if (matchValue$$76[1].tail != null) {
      if (matchValue$$76[1].tail.tail == null) {
        if (matchValue$$76[2].tail != null) {
          if (matchValue$$76[2].head.tag === 3) {
            if (matchValue$$76[2].head.fields[3].tail != null) {
              if (matchValue$$76[2].head.fields[3].tail.tail == null) {
                if (matchValue$$76[2].tail.tail != null) {
                  if (matchValue$$76[2].tail.head.tag === 3) {
                    if (matchValue$$76[2].tail.head.fields[3].tail != null) {
                      if (matchValue$$76[2].tail.head.fields[3].tail.tail == null) {
                        if (matchValue$$76[2].tail.tail.tail == null) {
                          $target$$171 = 4;
                          e1$$3 = matchValue$$76[2].head.fields[4];
                          e2$$5 = matchValue$$76[2].tail.head.fields[4];
                          resty = matchValue$$76[1].head;
                          spFinally = matchValue$$76[0].fields[1];
                          spTry = matchValue$$76[0].fields[0];
                        } else {
                          $target$$171 = 8;
                        }
                      } else {
                        $target$$171 = 8;
                      }
                    } else {
                      $target$$171 = 8;
                    }
                  } else {
                    $target$$171 = 8;
                  }
                } else {
                  $target$$171 = 8;
                }
              } else {
                $target$$171 = 8;
              }
            } else {
              $target$$171 = 8;
            }
          } else {
            $target$$171 = 8;
          }
        } else {
          $target$$171 = 8;
        }
      } else {
        $target$$171 = 8;
      }
    } else {
      $target$$171 = 8;
    }
  } else if (matchValue$$76[0].tag === 8) {
    if (matchValue$$76[1].tail != null) {
      if (matchValue$$76[1].tail.tail == null) {
        if (matchValue$$76[2].tail != null) {
          if (matchValue$$76[2].head.tag === 3) {
            if (matchValue$$76[2].head.fields[3].tail != null) {
              if (matchValue$$76[2].head.fields[3].tail.tail == null) {
                if (matchValue$$76[2].tail.tail != null) {
                  if (matchValue$$76[2].tail.head.tag === 3) {
                    if (matchValue$$76[2].tail.head.fields[3].tail != null) {
                      if (matchValue$$76[2].tail.head.fields[3].tail.tail == null) {
                        if (matchValue$$76[2].tail.tail.tail != null) {
                          if (matchValue$$76[2].tail.tail.head.tag === 3) {
                            if (matchValue$$76[2].tail.tail.head.fields[3].tail != null) {
                              if (matchValue$$76[2].tail.tail.head.fields[3].tail.tail == null) {
                                if (matchValue$$76[2].tail.tail.tail.tail == null) {
                                  $target$$171 = 5;
                                  e1$$4 = matchValue$$76[2].head.fields[4];
                                  ef = matchValue$$76[2].tail.head.fields[4];
                                  eh = matchValue$$76[2].tail.tail.head.fields[4];
                                  resty$$1 = matchValue$$76[1].head;
                                  spTry$$1 = matchValue$$76[0].fields[0];
                                  spWith = matchValue$$76[0].fields[1];
                                  vf = matchValue$$76[2].tail.head.fields[3].head;
                                  vh = matchValue$$76[2].tail.tail.head.fields[3].head;
                                } else {
                                  $target$$171 = 8;
                                }
                              } else {
                                $target$$171 = 8;
                              }
                            } else {
                              $target$$171 = 8;
                            }
                          } else {
                            $target$$171 = 8;
                          }
                        } else {
                          $target$$171 = 8;
                        }
                      } else {
                        $target$$171 = 8;
                      }
                    } else {
                      $target$$171 = 8;
                    }
                  } else {
                    $target$$171 = 8;
                  }
                } else {
                  $target$$171 = 8;
                }
              } else {
                $target$$171 = 8;
              }
            } else {
              $target$$171 = 8;
            }
          } else {
            $target$$171 = 8;
          }
        } else {
          $target$$171 = 8;
        }
      } else {
        $target$$171 = 8;
      }
    } else {
      $target$$171 = 8;
    }
  } else if (matchValue$$76[0].tag === 29) {
    if (matchValue$$76[1].tail == null) {
      $target$$171 = 6;
      args$$13 = matchValue$$76[2];
      traitInfo = matchValue$$76[0].fields[0];
    } else {
      $target$$171 = 8;
    }
  } else if (matchValue$$76[0].tag === 31) {
    if (matchValue$$76[2].tail != null) {
      if (matchValue$$76[2].tail.tail == null) {
        if (mref = matchValue$$76[0].fields[7], (arg$$6 = matchValue$$76[2].head, (_tys = matchValue$$76[0].fields[10], (_methTypeArgs = matchValue$$76[0].fields[9], (_enclTypeArgs = matchValue$$76[0].fields[8], ((((0, _il.ILScopeRef$$get_IsAssemblyRef)((0, _il.ILTypeRef$$get_Scope)((0, _il.ILMethodRef$$get_DeclaringTypeRef)(mref))) ? (0, _il.ILAssemblyRef$$get_Name)((0, _il.ILScopeRef$$get_AssemblyRef)((0, _il.ILTypeRef$$get_Scope)((0, _il.ILMethodRef$$get_DeclaringTypeRef)(mref)))) === (0, _il.ILAssemblyRef$$get_Name)((0, _il.ILScopeRef$$get_AssemblyRef)((0, _il.ILTypeRef$$get_Scope)((0, _il.ILType$$get_TypeRef)((0, _il.ILGlobals$$get_typ_Array)((0, _TcGlobals.TcGlobals$$get_ilg)(cenv$$22.g)))))) : false) ? (0, _il.ILTypeRef$$get_Name)((0, _il.ILMethodRef$$get_DeclaringTypeRef)(mref)) === (0, _il.ILTypeRef$$get_Name)((0, _il.ILType$$get_TypeRef)((0, _il.ILGlobals$$get_typ_Array)((0, _TcGlobals.TcGlobals$$get_ilg)(cenv$$22.g)))) : false) ? (0, _il.ILMethodRef$$get_Name)(mref) === "get_Length" : false) ? (0, _TastOps.isArray1DTy)(cenv$$22.g, (0, _TastOps.tyOfExpr)(cenv$$22.g, arg$$6)) : false))))) {
          $target$$171 = 7;
          _enclTypeArgs$$1 = matchValue$$76[0].fields[8];
          _methTypeArgs$$1 = matchValue$$76[0].fields[9];
          _tys$$1 = matchValue$$76[0].fields[10];
          arg$$7 = matchValue$$76[2].head;
          mref$$1 = matchValue$$76[0].fields[7];
        } else {
          $target$$171 = 8;
        }
      } else {
        $target$$171 = 8;
      }
    } else {
      $target$$171 = 8;
    }
  } else {
    $target$$171 = 8;
  }

  switch ($target$$171) {
    case 0:
      {
        const patternInput$$12 = OptimizeExpr(cenv$$22, env$$32, e$$23);

        if ((0, _TastOps.typeEquiv)(cenv$$22.g, toty, fromty)) {
          return [patternInput$$12[0], patternInput$$12[1]];
        } else {
          return [(0, _TastOps.mkCoerceExpr)(patternInput$$12[0], toty, m$$38, fromty), new Summary$00601(new ExprValueInfo(0, "UnknownValue"), patternInput$$12[1].FunctionSize + 1, patternInput$$12[1].TotalSize + 1, true, false)];
        }
      }

    case 1:
      {
        const patternInput$$13 = OptimizeExpr(cenv$$22, env$$32, (0, _TastOps.exprForValRef)(m$$38, lv$$1));
        const op$0027 = patternInput$$13[0].tag === 1 ? (v$$40 = patternInput$$13[0].fields[0], !(0, _tast.ValRef$$get_IsCompiledAsTopLevel)(v$$40)) ? new _tast.TOp(30, "LValueOp", lop, patternInput$$13[0].fields[0]) : op$$2 : op$$2;
        return [new _tast.Expr(11, "Op", op$0027, tyargs$$10, args$$12, m$$38), new Summary$00601(new ExprValueInfo(0, "UnknownValue"), 1, 1, OpHasEffect(cenv$$22.g, m$$38, op$0027), false)];
      }

    case 2:
      {
        return OptimizeWhileLoop(cenv$$22, new IncrementalOptimizationEnv(env$$32.latestBoundId, env$$32.dontInline, env$$32.dontSplitVars, true, env$$32.functionVal, env$$32.typarInfos, env$$32.localExternalVals, env$$32.globalModuleInfos), spWhile, marker, e1$$1, e2$$3, m$$38);
      }

    case 3:
      {
        return OptimizeFastIntegerForLoop(cenv$$22, new IncrementalOptimizationEnv(env$$32.latestBoundId, env$$32.dontInline, env$$32.dontSplitVars, true, env$$32.functionVal, env$$32.typarInfos, env$$32.localExternalVals, env$$32.globalModuleInfos), spStart, v$$42, e1$$2, dir, e2$$4, e3$$1, m$$38);
      }

    case 4:
      {
        return OptimizeTryFinally(cenv$$22, env$$32, spTry, spFinally, e1$$3, e2$$5, m$$38, resty);
      }

    case 5:
      {
        return OptimizeTryCatch(cenv$$22, env$$32, e1$$4, vf, ef, vh, eh, m$$38, resty$$1, spTry$$1, spWith);
      }

    case 6:
      {
        return OptimizeTraitCall(cenv$$22, env$$32, traitInfo, args$$13, m$$38);
      }

    case 7:
      {
        return OptimizeExpr(cenv$$22, env$$32, new _tast.Expr(11, "Op", new _tast.TOp(22, "ILAsm", i_ldlen, (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_int_ty)(cenv$$22.g), (0, _Types.L)())), (0, _Types.L)(), (0, _Types.L)(arg$$7, (0, _Types.L)()), m$$38));
      }

    case 8:
      {
        var $target$$172, a$$215, ty$$42;

        if (matchValue$$76[0].tag === 22) {
          if (matchValue$$76[0].fields[0].tail == null) {
            if (matchValue$$76[0].fields[1].tail != null) {
              if (matchValue$$76[0].fields[1].tail.tail == null) {
                if (matchValue$$76[2].tail != null) {
                  if (matchValue$$76[2].tail.tail == null) {
                    if (ty$$41 = matchValue$$76[0].fields[1].head, (a$$214 = matchValue$$76[2].head, (0, _TastOps.typeEquiv)(cenv$$22.g, (0, _TastOps.tyOfExpr)(cenv$$22.g, a$$214), ty$$41))) {
                      $target$$172 = 0;
                      a$$215 = matchValue$$76[2].head;
                      ty$$42 = matchValue$$76[0].fields[1].head;
                    } else {
                      $target$$172 = 1;
                    }
                  } else {
                    $target$$172 = 1;
                  }
                } else {
                  $target$$172 = 1;
                }
              } else {
                $target$$172 = 1;
              }
            } else {
              $target$$172 = 1;
            }
          } else {
            $target$$172 = 1;
          }
        } else {
          $target$$172 = 1;
        }

        switch ($target$$172) {
          case 0:
            {
              return OptimizeExpr(cenv$$22, env$$32, a$$215);
            }

          case 1:
            {
              const patternInput$$14 = OptimizeExprsThenConsiderSplits(cenv$$22, env$$32, args$$12);
              let knownValue;
              const matchValue$$77 = [op$$2, patternInput$$14[1]];
              var $target$$173, e1info, rf, e1info$$1, n$$56, tupInfo$$4, cspec$$3, e1info$$2, n$$57;

              if (matchValue$$77[0].tag === 12) {
                if (matchValue$$77[1].tail != null) {
                  if (matchValue$$77[1].tail.tail == null) {
                    $target$$173 = 0;
                    e1info = matchValue$$77[1].head;
                    rf = matchValue$$77[0].fields[0];
                  } else {
                    $target$$173 = 3;
                  }
                } else {
                  $target$$173 = 3;
                }
              } else if (matchValue$$77[0].tag === 21) {
                if (matchValue$$77[1].tail != null) {
                  if (matchValue$$77[1].tail.tail == null) {
                    $target$$173 = 1;
                    e1info$$1 = matchValue$$77[1].head;
                    n$$56 = matchValue$$77[0].fields[1];
                    tupInfo$$4 = matchValue$$77[0].fields[0];
                  } else {
                    $target$$173 = 3;
                  }
                } else {
                  $target$$173 = 3;
                }
              } else if (matchValue$$77[0].tag === 16) {
                if (matchValue$$77[1].tail != null) {
                  if (matchValue$$77[1].tail.tail == null) {
                    $target$$173 = 2;
                    cspec$$3 = matchValue$$77[0].fields[0];
                    e1info$$2 = matchValue$$77[1].head;
                    n$$57 = matchValue$$77[0].fields[1];
                  } else {
                    $target$$173 = 3;
                  }
                } else {
                  $target$$173 = 3;
                }
              } else {
                $target$$173 = 3;
              }

              switch ($target$$173) {
                case 0:
                  {
                    knownValue = TryOptimizeRecordFieldGet(cenv$$22, env$$32, e1info, rf, tyargs$$10, m$$38);
                    break;
                  }

                case 1:
                  {
                    knownValue = TryOptimizeTupleFieldGet(cenv$$22, env$$32, tupInfo$$4, e1info$$1, tyargs$$10, n$$56, m$$38);
                    break;
                  }

                case 2:
                  {
                    knownValue = TryOptimizeUnionCaseGet(cenv$$22, env$$32, e1info$$2, cspec$$3, tyargs$$10, n$$57, m$$38);
                    break;
                  }

                case 3:
                  {
                    knownValue = null;
                    break;
                  }
              }

              if (knownValue == null) {
                return OptimizeExprOpFallback(cenv$$22, env$$32, op$$2, tyargs$$10, patternInput$$14[0], m$$38, patternInput$$14[1], new ExprValueInfo(0, "UnknownValue"));
              } else {
                const valu = knownValue;
                const matchValue$$78 = TryOptimizeVal(cenv$$22, env$$32, false, valu, m$$38);

                if (matchValue$$78 == null) {
                  return OptimizeExprOpFallback(cenv$$22, env$$32, op$$2, tyargs$$10, patternInput$$14[0], m$$38, patternInput$$14[1], valu);
                } else {
                  const res$$18 = matchValue$$78;
                  return OptimizeExpr(cenv$$22, env$$32, res$$18);
                }
              }
            }
        }
      }
  }
}

function OptimizeExprOpFallback(cenv$$23, env$$33, op$$3, tyargs$$11, args$0027$$1, m$$39, arginfos$$1, valu$$1) {
  var activePatternResult50673;
  const argsTSize = (0, _List.sumBy)(function projection$$5(x$$86) {
    return x$$86.TotalSize;
  }, arginfos$$1, {
    GetZero() {
      return 0;
    },

    Add($x$$30, $y$$31) {
      return $x$$30 + $y$$31;
    }

  }) | 0;
  const argsFSize = (0, _List.sumBy)(function projection$$6(x$$87) {
    return x$$87.FunctionSize;
  }, arginfos$$1, {
    GetZero() {
      return 0;
    },

    Add($x$$32, $y$$33) {
      return $x$$32 + $y$$33;
    }

  }) | 0;
  const argEffects = (0, _List.exists)(function (x$$88) {
    return x$$88.HasEffect;
  }, arginfos$$1);
  const argValues = (0, _List.map)(function (x$$89) {
    return x$$89.Info;
  }, arginfos$$1);
  const effect = OpHasEffect(cenv$$23.g, m$$39, op$$3);
  let patternInput$$15;
  var $target$$174;

  switch (op$$3.tag) {
    case 1:
      $target$$174 = 1;
      break;

    case 2:
      $target$$174 = 2;
      break;

    case 12:
    case 21:
    case 16:
    case 19:
    case 14:
      $target$$174 = 3;
      break;

    case 15:
      $target$$174 = 4;
      break;

    case 22:
      $target$$174 = 5;
      break;

    case 4:
      $target$$174 = 6;
      break;

    case 5:
      $target$$174 = 7;
      break;

    case 13:
    case 3:
    case 7:
    case 6:
    case 8:
    case 9:
    case 31:
    case 29:
    case 30:
    case 11:
    case 18:
    case 23:
    case 24:
    case 25:
    case 17:
    case 20:
      $target$$174 = 8;
      break;

    case 10:
      $target$$174 = 9;
      break;

    case 27:
    case 28:
    case 26:
      $target$$174 = 10;
      break;

    default:
      $target$$174 = 0;
  }

  switch ($target$$174) {
    case 0:
      {
        const c$$9 = op$$3.fields[0];
        patternInput$$15 = [2, MakeValueInfoForUnionCase(c$$9, (0, _Array.ofList)(argValues, Array))];
        break;
      }

    case 1:
      {
        patternInput$$15 = [2, valu$$1];
        break;
      }

    case 2:
      {
        const tupInfo$$5 = op$$3.fields[0];
        const isStruct = (0, _TastOps.evalTupInfoIsStruct)(tupInfo$$5);
        patternInput$$15 = isStruct ? [0, valu$$1] : [1, MakeValueInfoForTuple((0, _Array.ofList)(argValues, Array))];
        break;
      }

    case 3:
      {
        patternInput$$15 = [1, valu$$1];
        break;
      }

    case 4:
      {
        const valu$$2 = (activePatternResult50673 = $007CStripUnionCaseValue$007C_$007C((0, _List.item)(0, argValues)), activePatternResult50673 != null ? new ExprValueInfo(5, "UnionCaseValue", activePatternResult50673[0], activePatternResult50673[1]) : valu$$1);
        patternInput$$15 = [0, valu$$2];
        break;
      }

    case 5:
      {
        const tys$$3 = op$$3.fields[1];
        const instrs$$3 = op$$3.fields[0];
        patternInput$$15 = [(0, _Util.min)(_Util.comparePrimitives, (0, _List.length)(instrs$$3), 1), mkAssemblyCodeValueInfo(cenv$$23.g, instrs$$3, argValues, tys$$3)];
        break;
      }

    case 6:
      {
        const bytes = op$$3.fields[0];
        patternInput$$15 = [~~(bytes.length / 10), valu$$1];
        break;
      }

    case 7:
      {
        const bytes$$1 = op$$3.fields[0];
        patternInput$$15 = [~~(bytes$$1.length / 10), valu$$1];
        break;
      }

    case 8:
      {
        patternInput$$15 = [1, valu$$1];
        break;
      }

    case 9:
      {
        const tcref$$8 = op$$3.fields[1];
        const ctorInfo = op$$3.fields[0];
        const finfos = (0, _tast.EntityRef$$get_AllInstanceFieldsAsList)(tcref$$8);
        const valu$$3 = ctorInfo.tag === 1 ? (0, _List.length)(argValues) !== (0, _List.length)(finfos) ? valu$$1 : MakeValueInfoForRecord(tcref$$8, (0, _Array.ofList)((0, _List.map2)(function mapping$$8(x$$90, f$$14) {
          if ((0, _tast.RecdField$$get_IsMutable)(f$$14)) {
            return new ExprValueInfo(0, "UnknownValue");
          } else {
            return x$$90;
          }
        }, argValues, finfos), Array)) : new ExprValueInfo(0, "UnknownValue");
        patternInput$$15 = [2, valu$$3];
        break;
      }

    case 10:
      {
        patternInput$$15 = (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("unexpected goto/label/return in optimization", m$$39));
        break;
      }
  }

  let mayBeCriticalTailcall;

  if (op$$3.tag === 31) {
    const virt = op$$3.fields[0];
    const newobj = op$$3.fields[2];
    mayBeCriticalTailcall = !newobj ? virt : false;
  } else {
    mayBeCriticalTailcall = false;
  }

  const vinfo$$15 = new Summary$00601(patternInput$$15[1], argsFSize + patternInput$$15[0], argsTSize + patternInput$$15[0], argEffects ? true : effect, mayBeCriticalTailcall);
  const matchValue$$80 = TryOptimizeValInfo(cenv$$23, env$$33, m$$39, vinfo$$15);

  if (matchValue$$80 == null) {
    return [new _tast.Expr(11, "Op", op$$3, tyargs$$11, args$0027$$1, m$$39), new Summary$00601(patternInput$$15[1], argsFSize + patternInput$$15[0], argsTSize + patternInput$$15[0], argEffects ? true : effect, mayBeCriticalTailcall)];
  } else {
    const res$$19 = matchValue$$80;
    return [res$$19, vinfo$$15];
  }
}

function OptimizeConst(cenv$$24, env$$34, expr$$24, c$$10, m$$40, ty$$43) {
  var b$$75;
  const matchValue$$81 = (0, _TastOps.TryEliminateDesugaredConstants)(cenv$$24.g, m$$40, c$$10);

  if (matchValue$$81 == null) {
    return [expr$$24, new Summary$00601(MakeValueInfoForConst(c$$10, ty$$43), 0, c$$10.tag === 14 ? (b$$75 = c$$10.fields[0], ~~(b$$75.length / 10)) : 0, false, false)];
  } else {
    const e$$25 = matchValue$$81;
    return OptimizeExpr(cenv$$24, env$$34, e$$25);
  }
}

function TryOptimizeRecordFieldGet(cenv$$25, _env$$1, e1info$$3, _arg2$$2, _tinst, m$$41) {
  var finfos$$1;
  const r = _arg2$$2;
  const rtcref = r.fields[0];
  const matchValue$$82 = destRecdValue(e1info$$3.Info);
  var $target$$175, finfos$$2;

  if (matchValue$$82 != null) {
    if (finfos$$1 = matchValue$$82, OptimizationSettings$$EliminateRecdFieldGet(cenv$$25.settings) ? !e1info$$3.HasEffect : false) {
      $target$$175 = 0;
      finfos$$2 = matchValue$$82;
    } else {
      $target$$175 = 1;
    }
  } else {
    $target$$175 = 1;
  }

  switch ($target$$175) {
    case 0:
      {
        if ((0, _TastOps.TryFindFSharpAttribute)(cenv$$25.g, (0, _TcGlobals.TcGlobals$$get_attrib_CLIMutableAttribute)(cenv$$25.g), (0, _tast.EntityRef$$get_Attribs)(rtcref)) == null) {
          const n$$58 = (0, _tast.RecdFieldRef$$get_Index)(r) | 0;

          if (n$$58 >= finfos$$2.length) {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("TryOptimizeRecordFieldGet: term argument out of range", m$$41));
          }

          return finfos$$2[n$$58];
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

function TryOptimizeTupleFieldGet(cenv$$26, _env$$2, _tupInfo, e1info$$4, tys$$4, n$$59, m$$42) {
  var tups;
  const matchValue$$84 = destTupleValue(e1info$$4.Info);
  var $target$$176, tups$$1;

  if (matchValue$$84 != null) {
    if (tups = matchValue$$84, OptimizationSettings$$EliminateTupleFieldGet(cenv$$26.settings) ? !e1info$$4.HasEffect : false) {
      $target$$176 = 0;
      tups$$1 = matchValue$$84;
    } else {
      $target$$176 = 1;
    }
  } else {
    $target$$176 = 1;
  }

  switch ($target$$176) {
    case 0:
      {
        const len = tups$$1.length | 0;

        if (len !== (0, _List.length)(tys$$4)) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("error: tuple lengths don't match", m$$42));
        }

        if (n$$59 >= len) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("TryOptimizeTupleFieldGet: tuple index out of range", m$$42));
        }

        return tups$$1[n$$59];
      }

    case 1:
      {
        return null;
      }
  }
}

function TryOptimizeUnionCaseGet(cenv$$27, _env$$3, e1info$$5, cspec$$4, _tys$$2, n$$60, m$$43) {
  var cspec2, args$$14;
  var $target$$177, args$$15, cspec2$$1;
  const activePatternResult50693 = $007CStripUnionCaseValue$007C_$007C(e1info$$5.Info);

  if (activePatternResult50693 != null) {
    if (cspec2 = activePatternResult50693[0], (args$$14 = activePatternResult50693[1], (OptimizationSettings$$EliminatUnionCaseFieldGet(cenv$$27.settings) ? !e1info$$5.HasEffect : false) ? (0, _TcGlobals.TcGlobals$$unionCaseRefEq)(cenv$$27.g, cspec$$4, cspec2) : false)) {
      $target$$177 = 0;
      args$$15 = activePatternResult50693[1];
      cspec2$$1 = activePatternResult50693[0];
    } else {
      $target$$177 = 1;
    }
  } else {
    $target$$177 = 1;
  }

  switch ($target$$177) {
    case 0:
      {
        if (n$$60 >= args$$15.length) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("TryOptimizeUnionCaseGet: term argument out of range", m$$43));
        }

        return args$$15[n$$60];
      }

    case 1:
      {
        return null;
      }
  }
}

function OptimizeFastIntegerForLoop(cenv$$28, env$$35, spStart$$1, v$$43, e1$$5, dir$$1, e2$$6, e3$$2, m$$44) {
  var n$$61, arre, arre$$1;
  const patternInput$$16 = OptimizeExpr(cenv$$28, env$$35, e1$$5);
  const patternInput$$17 = OptimizeExpr(cenv$$28, env$$35, e2$$6);
  let env$$37;
  cenv$$28;
  v$$43;
  env$$37 = env$$35;
  const patternInput$$18 = OptimizeExpr(cenv$$28, env$$37, e3$$2);
  let patternInput$$19;
  const matchValue$$86 = [dir$$1, patternInput$$17[0]];
  var $target$$178, arre$$2;

  if (matchValue$$86[0].tag === 0) {
    if (matchValue$$86[1].tag === 11) {
      if (matchValue$$86[1].fields[0].tag === 22) {
        if (matchValue$$86[1].fields[0].fields[0].tail != null) {
          if (matchValue$$86[1].fields[0].fields[0].head.tag === 22) {
            if (matchValue$$86[1].fields[0].fields[0].tail.tail == null) {
              if (matchValue$$86[1].fields[2].tail != null) {
                if (matchValue$$86[1].fields[2].head.tag === 11) {
                  if (matchValue$$86[1].fields[2].head.fields[0].tag === 22) {
                    if (matchValue$$86[1].fields[2].head.fields[0].fields[0].tail != null) {
                      if (matchValue$$86[1].fields[2].head.fields[0].fields[0].head.tag === 84) {
                        if (matchValue$$86[1].fields[2].head.fields[0].fields[0].tail.tail != null) {
                          if (matchValue$$86[1].fields[2].head.fields[0].fields[0].tail.head.tag === 11) {
                            if (matchValue$$86[1].fields[2].head.fields[0].fields[0].tail.head.fields[0].tag === 5) {
                              if (matchValue$$86[1].fields[2].head.fields[0].fields[0].tail.tail.tail == null) {
                                if (matchValue$$86[1].fields[2].head.fields[2].tail != null) {
                                  if (matchValue$$86[1].fields[2].head.fields[2].tail.tail == null) {
                                    if (matchValue$$86[1].fields[2].tail.tail != null) {
                                      if (matchValue$$86[1].fields[2].tail.head.tag === 0) {
                                        if (matchValue$$86[1].fields[2].tail.head.fields[0].tag === 5) {
                                          if (matchValue$$86[1].fields[2].tail.head.fields[0].fields[0] === 1) {
                                            if (matchValue$$86[1].fields[2].tail.tail.tail == null) {
                                              if (arre = matchValue$$86[1].fields[2].head.fields[2].head, !OptimizeExpr(cenv$$28, env$$37, arre)[1].HasEffect) {
                                                $target$$178 = 0;
                                                arre$$2 = matchValue$$86[1].fields[2].head.fields[2].head;
                                              } else {
                                                $target$$178 = 1;
                                              }
                                            } else {
                                              $target$$178 = 1;
                                            }
                                          } else {
                                            $target$$178 = 1;
                                          }
                                        } else {
                                          $target$$178 = 1;
                                        }
                                      } else {
                                        $target$$178 = 1;
                                      }
                                    } else {
                                      $target$$178 = 1;
                                    }
                                  } else {
                                    $target$$178 = 1;
                                  }
                                } else {
                                  $target$$178 = 1;
                                }
                              } else {
                                $target$$178 = 1;
                              }
                            } else {
                              $target$$178 = 1;
                            }
                          } else {
                            $target$$178 = 1;
                          }
                        } else {
                          $target$$178 = 1;
                        }
                      } else {
                        $target$$178 = 1;
                      }
                    } else {
                      $target$$178 = 1;
                    }
                  } else {
                    $target$$178 = 1;
                  }
                } else {
                  $target$$178 = 1;
                }
              } else {
                $target$$178 = 1;
              }
            } else {
              $target$$178 = 1;
            }
          } else if (matchValue$$86[1].fields[0].fields[0].head.tag === 23) {
            if (matchValue$$86[1].fields[0].fields[0].tail.tail == null) {
              if (matchValue$$86[1].fields[2].tail != null) {
                if (matchValue$$86[1].fields[2].head.tag === 11) {
                  if (matchValue$$86[1].fields[2].head.fields[0].tag === 22) {
                    if (matchValue$$86[1].fields[2].head.fields[0].fields[0].tail != null) {
                      if (matchValue$$86[1].fields[2].head.fields[0].fields[0].head.tag === 84) {
                        if (matchValue$$86[1].fields[2].head.fields[0].fields[0].tail.tail != null) {
                          if (matchValue$$86[1].fields[2].head.fields[0].fields[0].tail.head.tag === 11) {
                            if (matchValue$$86[1].fields[2].head.fields[0].fields[0].tail.head.fields[0].tag === 5) {
                              if (matchValue$$86[1].fields[2].head.fields[0].fields[0].tail.tail.tail == null) {
                                if (matchValue$$86[1].fields[2].head.fields[2].tail != null) {
                                  if (matchValue$$86[1].fields[2].head.fields[2].tail.tail == null) {
                                    if (matchValue$$86[1].fields[2].tail.tail != null) {
                                      if (matchValue$$86[1].fields[2].tail.head.tag === 0) {
                                        if (matchValue$$86[1].fields[2].tail.head.fields[0].tag === 5) {
                                          if (matchValue$$86[1].fields[2].tail.head.fields[0].fields[0] === 1) {
                                            if (matchValue$$86[1].fields[2].tail.tail.tail == null) {
                                              if (arre$$1 = matchValue$$86[1].fields[2].head.fields[2].head, !OptimizeExpr(cenv$$28, env$$37, arre$$1)[1].HasEffect) {
                                                $target$$178 = 0;
                                                arre$$2 = matchValue$$86[1].fields[2].head.fields[2].head;
                                              } else {
                                                $target$$178 = 1;
                                              }
                                            } else {
                                              $target$$178 = 1;
                                            }
                                          } else {
                                            $target$$178 = 1;
                                          }
                                        } else {
                                          $target$$178 = 1;
                                        }
                                      } else {
                                        $target$$178 = 1;
                                      }
                                    } else {
                                      $target$$178 = 1;
                                    }
                                  } else {
                                    $target$$178 = 1;
                                  }
                                } else {
                                  $target$$178 = 1;
                                }
                              } else {
                                $target$$178 = 1;
                              }
                            } else {
                              $target$$178 = 1;
                            }
                          } else {
                            $target$$178 = 1;
                          }
                        } else {
                          $target$$178 = 1;
                        }
                      } else {
                        $target$$178 = 1;
                      }
                    } else {
                      $target$$178 = 1;
                    }
                  } else {
                    $target$$178 = 1;
                  }
                } else {
                  $target$$178 = 1;
                }
              } else {
                $target$$178 = 1;
              }
            } else {
              $target$$178 = 1;
            }
          } else {
            $target$$178 = 1;
          }
        } else {
          $target$$178 = 1;
        }
      } else {
        $target$$178 = 1;
      }
    } else {
      $target$$178 = 1;
    }
  } else {
    $target$$178 = 1;
  }

  switch ($target$$178) {
    case 0:
      {
        patternInput$$19 = [(0, _TastOps.mkLdlen)(cenv$$28.g, (0, _TastOps.Expr$002Eget_Range)(patternInput$$17[0]), arre$$2), new _tast.ForLoopStyle(2, "CSharpForLoopUp")];
        break;
      }

    case 1:
      {
        var $target$$179, n$$62;

        if (matchValue$$86[0].tag === 0) {
          if (matchValue$$86[1].tag === 0) {
            if (matchValue$$86[1].fields[0].tag === 5) {
              if (n$$61 = matchValue$$86[1].fields[0].fields[0] | 0, n$$61 < 2147483647) {
                $target$$179 = 0;
                n$$62 = matchValue$$86[1].fields[0].fields[0];
              } else {
                $target$$179 = 1;
              }
            } else {
              $target$$179 = 1;
            }
          } else {
            $target$$179 = 1;
          }
        } else {
          $target$$179 = 1;
        }

        switch ($target$$179) {
          case 0:
            {
              patternInput$$19 = [(0, _TastOps.mkIncr)(cenv$$28.g, (0, _TastOps.Expr$002Eget_Range)(patternInput$$17[0]), patternInput$$17[0]), new _tast.ForLoopStyle(2, "CSharpForLoopUp")];
              break;
            }

          case 1:
            {
              patternInput$$19 = [patternInput$$17[0], dir$$1];
              break;
            }
        }

        break;
      }
  }

  const einfos$$2 = (0, _Types.L)(patternInput$$16[1], (0, _Types.L)(patternInput$$17[1], (0, _Types.L)(patternInput$$18[1], (0, _Types.L)())));
  const eff = (0, _List.exists)(function (x$$91) {
    return x$$91.HasEffect;
  }, einfos$$2);

  if (!eff) {
    return [(0, _TastOps.mkUnit)(cenv$$28.g, m$$44), new Summary$00601(new ExprValueInfo(0, "UnknownValue"), 0, 0, false, false)];
  } else {
    const expr$0027$$1 = (0, _TastOps.mkFor)(cenv$$28.g, spStart$$1, v$$43, patternInput$$16[0], patternInput$$19[1], patternInput$$19[0], patternInput$$18[0], m$$44);
    return [expr$0027$$1, new Summary$00601(new ExprValueInfo(0, "UnknownValue"), (0, _List.sumBy)(function projection$$8(x$$93) {
      return x$$93.FunctionSize;
    }, einfos$$2, {
      GetZero() {
        return 0;
      },

      Add($x$$38, $y$$39) {
        return $x$$38 + $y$$39;
      }

    }) + 5, (0, _List.sumBy)(function projection$$7(x$$92) {
      return x$$92.TotalSize;
    }, einfos$$2, {
      GetZero() {
        return 0;
      },

      Add($x$$36, $y$$37) {
        return $x$$36 + $y$$37;
      }

    }) + 5, eff, false)];
  }
}

function OptimizeLetRec(cenv$$30, env$$38, binds$$4, bodyExpr$$1, m$$45) {
  const vs$$3 = (0, _List.map)(function mapping$$9(v$$45) {
    return (0, _tast.Binding$$get_Var)(v$$45);
  }, binds$$4);
  let env$$40;
  cenv$$30;
  vs$$3;
  env$$40 = env$$38;
  const patternInput$$20 = OptimizeBindings(cenv$$30, true, env$$40, binds$$4);
  const patternInput$$21 = OptimizeExpr(cenv$$30, patternInput$$20[1], bodyExpr$$1);
  let patternInput$$22;
  const fvs0 = (0, _TastOps.freeInExpr)(_TastOps.CollectLocals, patternInput$$21[0]);
  const fvs$$8 = (0, _List.fold)(function (acc$$1, x$$94) {
    return (0, _TastOps.unionFreeVars)(acc$$1, (0, _TastOps.freeInBindingRhs)(_TastOps.CollectLocals, x$$94[0]));
  }, fvs0, patternInput$$20[0]);
  patternInput$$22 = SplitValuesByIsUsedOrHasEffect(cenv$$30, function () {
    return fvs$$8.FreeLocals;
  }, patternInput$$20[0]);
  const evalue$0027 = AbstractExprInfoByVars(vs$$3, (0, _Types.L)(), patternInput$$21[1].Info);
  const bodyExpr$0027$$1 = new _tast.Expr(6, "LetRec", patternInput$$22[0], patternInput$$21[0], m$$45, (0, _tast.NewFreeVarsCache)());
  const info$$10 = CombineValueInfos((0, _Types.L)(patternInput$$21[1], patternInput$$22[1]), evalue$0027);
  return [bodyExpr$0027$$1, info$$10];
}

function OptimizeLinearExpr($arg$$180, $arg$$181, $arg$$182, $arg$$183) {
  OptimizeLinearExpr: while (true) {
    const cenv$$32 = $arg$$180,
          env$$42 = $arg$$181,
          expr$$25 = $arg$$182,
          contf = $arg$$183;
    const expr$$26 = (0, _TastOps.DetectAndOptimizeForExpression)(cenv$$32.g, new _TastOps.OptimizeForExpressionOptions(1, "OptimizeAllForExpressions"), expr$$25);
    const expr$$27 = OptimizationSettings$$ExpandStructrualValues(cenv$$32.settings) ? ExpandStructuralBinding(cenv$$32, expr$$26) : expr$$26;

    if (expr$$27.tag === 2) {
      const patternInput$$23 = OptimizeExpr(cenv$$32, env$$42, expr$$27.fields[0]);
      $arg$$180 = cenv$$32;
      $arg$$181 = env$$42;
      $arg$$182 = expr$$27.fields[1];

      $arg$$183 = function ($arg$$40) {
        return contf((((0, _Util.equals)(expr$$27.fields[2], new _tast.SequentialOpKind(0, "NormalSeq")) ? OptimizationSettings$$EliminateSequential(cenv$$32.settings) ? true : patternInput$$23[0].tag === 0 ? patternInput$$23[0].fields[0].tag === 16 ? true : false : false : false) ? !patternInput$$23[1].HasEffect : false) ? [$arg$$40[0], $arg$$40[1]] : [new _tast.Expr(2, "Sequential", patternInput$$23[0], $arg$$40[0], expr$$27.fields[2], expr$$27.fields[3], expr$$27.fields[4]), new Summary$00601(new ExprValueInfo(0, "UnknownValue"), patternInput$$23[1].FunctionSize + $arg$$40[1].FunctionSize, patternInput$$23[1].TotalSize + $arg$$40[1].TotalSize, (!(0, _Util.equals)(expr$$27.fields[2], new _tast.SequentialOpKind(0, "NormalSeq")) ? true : patternInput$$23[1].HasEffect) ? true : $arg$$40[1].HasEffect, (0, _Util.equals)(expr$$27.fields[2], new _tast.SequentialOpKind(0, "NormalSeq")) ? $arg$$40[1].MightMakeCriticalTailcall : patternInput$$23[1].MightMakeCriticalTailcall ? true : $arg$$40[1].MightMakeCriticalTailcall)]);
      };

      continue OptimizeLinearExpr;
    } else if (expr$$27.tag === 7) {
      const patternInput$$24 = OptimizeBinding(cenv$$32, false, env$$42, expr$$27.fields[0]);
      const bindingInfo = patternInput$$24[0][1];
      const bind$0027 = patternInput$$24[0][0];
      $arg$$180 = cenv$$32;
      $arg$$181 = patternInput$$24[1];
      $arg$$182 = expr$$27.fields[1];

      $arg$$183 = function ($arg$$41) {
        var patternInput$$25, evalue$0027$$1;
        return contf(ValueIsUsedOrHasEffect(cenv$$32, function () {
          return (0, _TastOps.freeInExpr)(_TastOps.CollectLocals, $arg$$41[0]).FreeLocals;
        }, bind$0027, bindingInfo) ? (patternInput$$25 = TryEliminateLet(cenv$$32, patternInput$$24[1], bind$0027, $arg$$41[0], expr$$27.fields[2]), [patternInput$$25[0], new Summary$00601(new ExprValueInfo(0, "UnknownValue"), bindingInfo.FunctionSize + $arg$$41[1].FunctionSize + patternInput$$25[1], bindingInfo.TotalSize + $arg$$41[1].TotalSize + patternInput$$25[1], bindingInfo.HasEffect ? true : $arg$$41[1].HasEffect, $arg$$41[1].MightMakeCriticalTailcall)]) : (evalue$0027$$1 = AbstractExprInfoByVars((0, _Types.L)((0, _tast.Binding$$get_Var)(bind$0027), (0, _Types.L)()), (0, _Types.L)(), $arg$$41[1].Info), [$arg$$41[0], new Summary$00601(evalue$0027$$1, bindingInfo.FunctionSize + $arg$$41[1].FunctionSize - 1, bindingInfo.TotalSize + $arg$$41[1].TotalSize - 1, bindingInfo.HasEffect ? true : $arg$$41[1].HasEffect, $arg$$41[1].MightMakeCriticalTailcall)]));
      };

      continue OptimizeLinearExpr;
    } else {
      const activePatternResult50711 = (0, _TastOps.$007CLinearMatchExpr$007C_$007C)(expr$$27);

      if (activePatternResult50711 != null) {
        const patternInput$$26 = OptimizeDecisionTree(cenv$$32, env$$42, activePatternResult50711[6], activePatternResult50711[2]);
        const patternInput$$27 = OptimizeDecisionTreeTarget(cenv$$32, env$$42, activePatternResult50711[6], activePatternResult50711[3]);
        $arg$$180 = cenv$$32;
        $arg$$181 = env$$42;
        $arg$$182 = activePatternResult50711[4];

        $arg$$183 = function ($arg$$42) {
          var patternInput$$28, tinfos, tgs;
          return contf((patternInput$$28 = ConsiderSplitToMethod(cenv$$32.settings.abstractBigTargets, cenv$$32.settings.bigTargetSize, cenv$$32, env$$42, $arg$$42[0], $arg$$42[1]), (tinfos = (0, _Types.L)(patternInput$$27[1], (0, _Types.L)(patternInput$$28[1], (0, _Types.L)())), (tgs = (0, _Types.L)(patternInput$$27[0], (0, _Types.L)(new _tast.DecisionTreeTarget(0, "TTarget", (0, _Types.L)(), patternInput$$28[0], activePatternResult50711[5]), (0, _Types.L)())), RebuildOptimizedMatch(activePatternResult50711[0], activePatternResult50711[1], activePatternResult50711[6], activePatternResult50711[7], patternInput$$26[0], tgs, patternInput$$26[1], tinfos)))));
        };

        continue OptimizeLinearExpr;
      } else {
        return contf(OptimizeExpr(cenv$$32, env$$42, expr$$27));
      }
    }
  }
}

function OptimizeTryFinally(cenv$$33, env$$44, spTry$$2, spFinally$$1, e1$$7, e2$$11, m$$49, ty$$45) {
  const patternInput$$29 = OptimizeExpr(cenv$$33, env$$44, e1$$7);
  const patternInput$$30 = OptimizeExpr(cenv$$33, env$$44, e2$$11);
  const info$$11 = new Summary$00601(new ExprValueInfo(0, "UnknownValue"), patternInput$$29[1].FunctionSize + patternInput$$30[1].FunctionSize + 5, patternInput$$29[1].TotalSize + patternInput$$30[1].TotalSize + 5, patternInput$$29[1].HasEffect ? true : patternInput$$30[1].HasEffect, false);

  if (OptimizationSettings$$EliminateTryCatchAndTryFinally(cenv$$33.settings) ? !patternInput$$29[1].HasEffect : false) {
    const sp = spTry$$2.tag === 1 ? new _ast.SequencePointInfoForSeq(0, "SequencePointsAtSeq") : spTry$$2.tag === 2 ? new _ast.SequencePointInfoForSeq(1, "SuppressSequencePointOnExprOfSequential") : new _ast.SequencePointInfoForSeq(0, "SequencePointsAtSeq");
    return [new _tast.Expr(2, "Sequential", patternInput$$29[0], patternInput$$30[0], new _tast.SequentialOpKind(1, "ThenDoSeq"), sp, m$$49), info$$11];
  } else {
    return [(0, _TastOps.mkTryFinally)(cenv$$33.g, patternInput$$29[0], patternInput$$30[0], m$$49, ty$$45, spTry$$2, spFinally$$1), info$$11];
  }
}

function OptimizeTryCatch(cenv$$34, env$$45, e1$$8, vf$$1, ef$$1, vh$$1, eh$$1, m$$50, ty$$46, spTry$$3, spWith$$1) {
  const patternInput$$31 = OptimizeExpr(cenv$$34, env$$45, e1$$8);

  if (OptimizationSettings$$EliminateTryCatchAndTryFinally(cenv$$34.settings) ? !patternInput$$31[1].HasEffect : false) {
    return [patternInput$$31[0], patternInput$$31[1]];
  } else {
    let envinner;
    cenv$$34;
    vf$$1;
    cenv$$34;
    vh$$1;
    envinner = env$$45;
    const patternInput$$32 = OptimizeExpr(cenv$$34, envinner, ef$$1);
    const patternInput$$33 = OptimizeExpr(cenv$$34, envinner, eh$$1);
    const info$$12 = new Summary$00601(new ExprValueInfo(0, "UnknownValue"), patternInput$$31[1].FunctionSize + patternInput$$32[1].FunctionSize + patternInput$$33[1].FunctionSize + 5, patternInput$$31[1].TotalSize + patternInput$$32[1].TotalSize + patternInput$$33[1].TotalSize + 5, (patternInput$$31[1].HasEffect ? true : patternInput$$32[1].HasEffect) ? true : patternInput$$33[1].HasEffect, false);
    return [(0, _TastOps.mkTryWith)(cenv$$34.g, patternInput$$31[0], vf$$1, patternInput$$32[0], vh$$1, patternInput$$33[0], m$$50, ty$$46, spTry$$3, spWith$$1), info$$12];
  }
}

function OptimizeWhileLoop(cenv$$37, env$$48, spWhile$$1, marker$$1, e1$$9, e2$$12, m$$51) {
  const patternInput$$34 = OptimizeExpr(cenv$$37, env$$48, e1$$9);
  const patternInput$$35 = OptimizeExpr(cenv$$37, env$$48, e2$$12);
  return [(0, _TastOps.mkWhile)(cenv$$37.g, spWhile$$1, marker$$1, patternInput$$34[0], patternInput$$35[0], m$$51), new Summary$00601(new ExprValueInfo(0, "UnknownValue"), patternInput$$34[1].FunctionSize + patternInput$$35[1].FunctionSize + 5, patternInput$$34[1].TotalSize + patternInput$$35[1].TotalSize + 5, true, false)];
}

function OptimizeTraitCall(cenv$$38, env$$49, traitInfo$$1, args$$16, m$$52) {
  const matchValue$$87 = (0, _ConstraintSolver.CodegenWitnessThatTypeSupportsTraitConstraint)(cenv$$38.TcVal, cenv$$38.g, cenv$$38.amap, m$$52, traitInfo$$1, args$$16);
  var $target$$184, expr$$28;

  if (matchValue$$87.tag === 0) {
    if (matchValue$$87.fields[1] != null) {
      $target$$184 = 0;
      expr$$28 = matchValue$$87.fields[1];
    } else {
      $target$$184 = 1;
    }
  } else {
    $target$$184 = 1;
  }

  switch ($target$$184) {
    case 0:
      {
        return OptimizeExpr(cenv$$38, env$$49, expr$$28);
      }

    case 1:
      {
        const patternInput$$36 = OptimizeExprsThenConsiderSplits(cenv$$38, env$$49, args$$16);
        return OptimizeExprOpFallback(cenv$$38, env$$49, new _tast.TOp(29, "TraitCall", traitInfo$$1), (0, _Types.L)(), patternInput$$36[0], m$$52, patternInput$$36[1], new ExprValueInfo(0, "UnknownValue"));
      }
  }
}

function TryOptimizeVal(cenv$$39, env$$50, mustInline, valInfoForVal, m$$53) {
  var expr$$29;

  TryOptimizeVal: while (true) {
    var $target$$185, c$$11, ty$$47, detail$$5, detail$$6, v$0027, _size$$2, expr$$30, expr$$31;

    if (valInfoForVal.tag === 6) {
      $target$$185 = 0;
      c$$11 = valInfoForVal.fields[0];
      ty$$47 = valInfoForVal.fields[1];
    } else if (valInfoForVal.tag === 1) {
      $target$$185 = 1;
      detail$$5 = valInfoForVal.fields[1];
    } else if (valInfoForVal.tag === 2) {
      $target$$185 = 2;
      detail$$6 = valInfoForVal.fields[1];
      v$0027 = valInfoForVal.fields[0];
    } else if (valInfoForVal.tag === 8) {
      $target$$185 = 3;
      _size$$2 = valInfoForVal.fields[0];
      expr$$30 = valInfoForVal.fields[1];
    } else if (valInfoForVal.tag === 7) {
      if (expr$$29 = valInfoForVal.fields[3], mustInline) {
        $target$$185 = 4;
        expr$$31 = valInfoForVal.fields[3];
      } else {
        $target$$185 = 5;
      }
    } else {
      $target$$185 = 5;
    }

    switch ($target$$185) {
      case 0:
        {
          return new _tast.Expr(0, "Const", c$$11, m$$53, ty$$47);
        }

      case 1:
        {
          cenv$$39 = cenv$$39;
          env$$50 = env$$50;
          mustInline = mustInline;
          valInfoForVal = detail$$5;
          m$$53 = m$$53;
          continue TryOptimizeVal;
        }

      case 2:
        {
          const matchValue$$88 = TryOptimizeVal(cenv$$39, env$$50, mustInline, detail$$6, m$$53);

          if (matchValue$$88 == null) {
            return (0, _TastOps.exprForValRef)(m$$53, v$0027);
          } else {
            const e$$26 = matchValue$$88;
            return e$$26;
          }
        }

      case 3:
        {
          return (0, _TastOps.remarkExpr)(m$$53, (0, _TastOps.copyExpr)(cenv$$39.g, new _TastOps.ValCopyFlag(1, "CloneAllAndMarkExprValsAsCompilerGenerated"), expr$$30));
        }

      case 4:
        {
          return (0, _TastOps.remarkExpr)(m$$53, (0, _TastOps.copyExpr)(cenv$$39.g, new _TastOps.ValCopyFlag(1, "CloneAllAndMarkExprValsAsCompilerGenerated"), expr$$31));
        }

      case 5:
        {
          var $target$$186;

          if (valInfoForVal.tag === 3) {
            if (mustInline) {
              $target$$186 = 0;
            } else {
              $target$$186 = 1;
            }
          } else if (valInfoForVal.tag === 5) {
            if (mustInline) {
              $target$$186 = 0;
            } else {
              $target$$186 = 1;
            }
          } else if (valInfoForVal.tag === 4) {
            if (mustInline) {
              $target$$186 = 0;
            } else {
              $target$$186 = 1;
            }
          } else {
            $target$$186 = 1;
          }

          switch ($target$$186) {
            case 0:
              {
                throw new Error("tuple, union and record values cannot be marked 'inline'");
              }

            case 1:
              {
                var $target$$187;

                if (valInfoForVal.tag === 0) {
                  if (mustInline) {
                    $target$$187 = 0;
                  } else {
                    $target$$187 = 1;
                  }
                } else {
                  $target$$187 = 1;
                }

                switch ($target$$187) {
                  case 0:
                    {
                      (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$optValueMarkedInlineHasUnexpectedValue)(), m$$53));
                      return null;
                    }

                  case 1:
                    {
                      if (mustInline) {
                        (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$optValueMarkedInlineCouldNotBeInlined)(), m$$53));
                        return null;
                      } else {
                        return null;
                      }
                    }
                }
              }
          }
        }
    }
  }
}

function TryOptimizeValInfo(cenv$$40, env$$51, m$$54, vinfo$$16) {
  if (vinfo$$16.HasEffect) {
    return null;
  } else {
    return TryOptimizeVal(cenv$$40, env$$51, false, vinfo$$16.Info, m$$54);
  }
}

function AddValEqualityInfo(g$$38, m$$55, v$$48, info$$13) {
  if ((0, _tast.ValRef$$get_IsMutable)(v$$48)) {
    return info$$13;
  } else {
    return new Summary$00601(MakeValueInfoForValue(g$$38, m$$55, v$$48, info$$13.Info), info$$13.FunctionSize, info$$13.TotalSize, info$$13.HasEffect, info$$13.MightMakeCriticalTailcall);
  }
}

function OptimizeVal(cenv$$41, env$$52, expr$$32, v$$49, m$$56) {
  const valInfoForVal$$1 = GetInfoForVal(cenv$$41, env$$52, m$$56, v$$49);
  const matchValue$$89 = TryOptimizeVal(cenv$$41, env$$52, (0, _tast.ValRef$$get_MustInline)(v$$49), valInfoForVal$$1.ValExprInfo, m$$56);

  if (matchValue$$89 == null) {
    if ((0, _tast.ValRef$$get_MustInline)(v$$49)) {
      (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$optFailedToInlineValue$$Z721C83C5)((0, _tast.ValRef$$get_DisplayName)(v$$49)), m$$56));
    }

    return [expr$$32, AddValEqualityInfo(cenv$$41.g, m$$56, v$$49, new Summary$00601(valInfoForVal$$1.ValExprInfo, 1, 1, false, false))];
  } else {
    const e$$27 = matchValue$$89;
    var $target$$188;

    switch (e$$27.tag) {
      case 4:
      case 3:
        $target$$188 = 0;
        break;

      default:
        $target$$188 = 1;
    }

    switch ($target$$188) {
      case 0:
        {
          return [e$$27, AddValEqualityInfo(cenv$$41.g, m$$56, v$$49, new Summary$00601(valInfoForVal$$1.ValExprInfo, 10, 10, false, false))];
        }

      case 1:
        {
          const patternInput$$37 = OptimizeExpr(cenv$$41, env$$52, e$$27);
          return [patternInput$$37[0], AddValEqualityInfo(cenv$$41.g, m$$56, v$$49, patternInput$$37[1])];
        }
    }
  }
}

function StripToNominalTyconRef(cenv$$42, ty$$48) {
  if ((0, _TastOps.isAppTy)(cenv$$42.g, ty$$48)) {
    return (0, _TastOps.destAppTy)(cenv$$42.g, ty$$48);
  } else if ((0, _TastOps.isRefTupleTy)(cenv$$42.g, ty$$48)) {
    const tyargs$$12 = (0, _TastOps.destRefTupleTy)(cenv$$42.g, ty$$48);
    return [(0, _TastOps.mkCompiledTupleTyconRef)(cenv$$42.g, false, (0, _List.length)(tyargs$$12)), tyargs$$12];
  } else {
    throw new Error("StripToNominalTyconRef: unreachable");
  }
}

function CanDevirtualizeApplication(cenv$$43, v$$50, vref$$23, ty$$49, args$$17) {
  if ((((0, _TastOps.valRefEq)(cenv$$43.g, v$$50, vref$$23) ? !(0, _TastOps.isUnitTy)(cenv$$43.g, ty$$49) : false) ? (0, _TastOps.isAppTy)(cenv$$43.g, ty$$49) : false) ? !(0, _TastOps.IsUnionTypeWithNullAsTrueValue)(cenv$$43.g, (0, _tast.EntityRef$$get_Deref)(StripToNominalTyconRef(cenv$$43, ty$$49)[0])) : false) {
    if (!(0, _TastOps.isStructTy)(cenv$$43.g, ty$$49)) {
      return true;
    } else {
      return !(args$$17.tail == null);
    }
  } else {
    return false;
  }
}

function TakeAddressOfStructArgumentIfNeeded(cenv$$44, vref$$24, ty$$50, args$$18, m$$57) {
  if ((0, _tast.ValRef$$get_IsInstanceMember)(vref$$24) ? (0, _TastOps.isStructTy)(cenv$$44.g, ty$$50) : false) {
    if (args$$18.tail != null) {
      const rest$$2 = args$$18.tail;
      const objArg = args$$18.head;
      const patternInput$$38 = (0, _TastOps.mkExprAddrOfExpr)(cenv$$44.g, true, false, new _TastOps.Mutates(3, "NeverMutates"), objArg, null, m$$57);
      return [patternInput$$38[0], (0, _Types.L)(patternInput$$38[1], rest$$2)];
    } else {
      return [function (x$$95) {
        return x$$95;
      }, args$$18];
    }
  } else {
    return [function (x$$96) {
      return x$$96;
    }, args$$18];
  }
}

function DevirtualizeApplication(cenv$$45, env$$53, vref$$25, ty$$51, tyargs$$13, args$$19, m$$58) {
  const patternInput$$39 = TakeAddressOfStructArgumentIfNeeded(cenv$$45, vref$$25, ty$$51, args$$19, m$$58);
  const transformedExpr = patternInput$$39[0]((0, _TastOps.MakeApplicationAndBetaReduce)(cenv$$45.g, (0, _TastOps.exprForValRef)(m$$58, vref$$25), (0, _tast.ValRef$$get_Type)(vref$$25), tyargs$$13.tail == null ? (0, _Types.L)() : (0, _Types.L)(tyargs$$13, (0, _Types.L)()), patternInput$$39[1], m$$58));
  return OptimizeExpr(cenv$$45, env$$53, transformedExpr);
}

function TryDevirtualizeApplication(cenv$$46, env$$54, f$$15, tyargs$$14, args$$21, m$$59) {
  var vref$$41, v$$79, ty$$80, v$$77, ty$$78, v$$75, ty$$76, v$$73, ty$$74, v$$71, ty$$72, v$$69, ty$$70, v$$67, ty$$68, v$$65, ty$$66, v$$63, ty$$64, v$$61, ty$$62, v$$59, ty$$60, v$$57, ty$$58, v$$55, ty$$56, v$$53, ty$$54, v$$51, ty$$52;
  const matchValue$$90 = [f$$15, tyargs$$14, args$$21];
  var $target$$189, ty$$53, v$$52;

  if (matchValue$$90[0].tag === 1) {
    if (matchValue$$90[1].tail != null) {
      if (matchValue$$90[1].tail.tail == null) {
        if (v$$51 = matchValue$$90[0].fields[0], (ty$$52 = matchValue$$90[1].head, CanDevirtualizeApplication(cenv$$46, v$$51, (0, _TcGlobals.TcGlobals$$get_generic_comparison_inner_vref)(cenv$$46.g), ty$$52, args$$21))) {
          $target$$189 = 0;
          ty$$53 = matchValue$$90[1].head;
          v$$52 = matchValue$$90[0].fields[0];
        } else {
          $target$$189 = 1;
        }
      } else {
        $target$$189 = 1;
      }
    } else {
      $target$$189 = 1;
    }
  } else {
    $target$$189 = 1;
  }

  switch ($target$$189) {
    case 0:
      {
        const patternInput$$40 = StripToNominalTyconRef(cenv$$46, ty$$53);
        const matchValue$$91 = (0, _tast.EntityRef$$get_GeneratedCompareToValues)(patternInput$$40[0]);

        if (matchValue$$91 != null) {
          const vref$$26 = matchValue$$91[1];
          return DevirtualizeApplication(cenv$$46, env$$54, vref$$26, ty$$53, patternInput$$40[1], args$$21, m$$59);
        } else {
          return null;
        }
      }

    case 1:
      {
        var $target$$190, ty$$55, v$$54;

        if (matchValue$$90[0].tag === 1) {
          if (matchValue$$90[1].tail != null) {
            if (matchValue$$90[1].tail.tail == null) {
              if (v$$53 = matchValue$$90[0].fields[0], (ty$$54 = matchValue$$90[1].head, CanDevirtualizeApplication(cenv$$46, v$$53, (0, _TcGlobals.TcGlobals$$get_generic_comparison_withc_inner_vref)(cenv$$46.g), ty$$54, args$$21))) {
                $target$$190 = 0;
                ty$$55 = matchValue$$90[1].head;
                v$$54 = matchValue$$90[0].fields[0];
              } else {
                $target$$190 = 1;
              }
            } else {
              $target$$190 = 1;
            }
          } else {
            $target$$190 = 1;
          }
        } else {
          $target$$190 = 1;
        }

        switch ($target$$190) {
          case 0:
            {
              const patternInput$$41 = StripToNominalTyconRef(cenv$$46, ty$$55);
              const matchValue$$92 = [(0, _tast.EntityRef$$get_GeneratedCompareToWithComparerValues)(patternInput$$41[0]), args$$21];
              var $target$$191, comp, vref$$27, x$$97, y$$48;

              if (matchValue$$92[0] != null) {
                if (matchValue$$92[1].tail != null) {
                  if (matchValue$$92[1].tail.tail != null) {
                    if (matchValue$$92[1].tail.tail.tail != null) {
                      if (matchValue$$92[1].tail.tail.tail.tail == null) {
                        $target$$191 = 0;
                        comp = matchValue$$92[1].head;
                        vref$$27 = matchValue$$92[0];
                        x$$97 = matchValue$$92[1].tail.head;
                        y$$48 = matchValue$$92[1].tail.tail.head;
                      } else {
                        $target$$191 = 1;
                      }
                    } else {
                      $target$$191 = 1;
                    }
                  } else {
                    $target$$191 = 1;
                  }
                } else {
                  $target$$191 = 1;
                }
              } else {
                $target$$191 = 1;
              }

              switch ($target$$191) {
                case 0:
                  {
                    const args2 = (0, _Types.L)(x$$97, (0, _Types.L)((0, _TastOps.mkRefTupledNoTypes)(cenv$$46.g, m$$59, (0, _Types.L)((0, _TastOps.mkCoerceExpr)(y$$48, (0, _TcGlobals.TcGlobals$$get_obj_ty)(cenv$$46.g), m$$59, ty$$55), (0, _Types.L)(comp, (0, _Types.L)()))), (0, _Types.L)()));
                    return DevirtualizeApplication(cenv$$46, env$$54, vref$$27, ty$$55, patternInput$$41[1], args2, m$$59);
                  }

                case 1:
                  {
                    return null;
                  }
              }
            }

          case 1:
            {
              var $target$$192, ty$$57, v$$56;

              if (matchValue$$90[0].tag === 1) {
                if (matchValue$$90[1].tail != null) {
                  if (matchValue$$90[1].tail.tail == null) {
                    if (v$$55 = matchValue$$90[0].fields[0], (ty$$56 = matchValue$$90[1].head, CanDevirtualizeApplication(cenv$$46, v$$55, (0, _TcGlobals.TcGlobals$$get_generic_equality_er_inner_vref)(cenv$$46.g), ty$$56, args$$21))) {
                      $target$$192 = 0;
                      ty$$57 = matchValue$$90[1].head;
                      v$$56 = matchValue$$90[0].fields[0];
                    } else {
                      $target$$192 = 1;
                    }
                  } else {
                    $target$$192 = 1;
                  }
                } else {
                  $target$$192 = 1;
                }
              } else {
                $target$$192 = 1;
              }

              switch ($target$$192) {
                case 0:
                  {
                    const patternInput$$42 = StripToNominalTyconRef(cenv$$46, ty$$57);
                    const matchValue$$93 = (0, _tast.EntityRef$$get_GeneratedHashAndEqualsValues)(patternInput$$42[0]);

                    if (matchValue$$93 != null) {
                      const vref$$28 = matchValue$$93[1];
                      return DevirtualizeApplication(cenv$$46, env$$54, vref$$28, ty$$57, patternInput$$42[1], args$$21, m$$59);
                    } else {
                      return null;
                    }
                  }

                case 1:
                  {
                    var $target$$193, ty$$59, v$$58;

                    if (matchValue$$90[0].tag === 1) {
                      if (matchValue$$90[1].tail != null) {
                        if (matchValue$$90[1].tail.tail == null) {
                          if (v$$57 = matchValue$$90[0].fields[0], (ty$$58 = matchValue$$90[1].head, CanDevirtualizeApplication(cenv$$46, v$$57, (0, _TcGlobals.TcGlobals$$get_generic_equality_withc_inner_vref)(cenv$$46.g), ty$$58, args$$21))) {
                            $target$$193 = 0;
                            ty$$59 = matchValue$$90[1].head;
                            v$$58 = matchValue$$90[0].fields[0];
                          } else {
                            $target$$193 = 1;
                          }
                        } else {
                          $target$$193 = 1;
                        }
                      } else {
                        $target$$193 = 1;
                      }
                    } else {
                      $target$$193 = 1;
                    }

                    switch ($target$$193) {
                      case 0:
                        {
                          const patternInput$$43 = StripToNominalTyconRef(cenv$$46, ty$$59);
                          const matchValue$$94 = [(0, _tast.EntityRef$$get_GeneratedHashAndEqualsWithComparerValues)(patternInput$$43[0]), args$$21];
                          var $target$$194, comp$$1, withcEqualsVal, x$$98, y$$49;

                          if (matchValue$$94[0] != null) {
                            if (matchValue$$94[1].tail != null) {
                              if (matchValue$$94[1].tail.tail != null) {
                                if (matchValue$$94[1].tail.tail.tail != null) {
                                  if (matchValue$$94[1].tail.tail.tail.tail == null) {
                                    $target$$194 = 0;
                                    comp$$1 = matchValue$$94[1].head;
                                    withcEqualsVal = matchValue$$94[0][2];
                                    x$$98 = matchValue$$94[1].tail.head;
                                    y$$49 = matchValue$$94[1].tail.tail.head;
                                  } else {
                                    $target$$194 = 1;
                                  }
                                } else {
                                  $target$$194 = 1;
                                }
                              } else {
                                $target$$194 = 1;
                              }
                            } else {
                              $target$$194 = 1;
                            }
                          } else {
                            $target$$194 = 1;
                          }

                          switch ($target$$194) {
                            case 0:
                              {
                                const args2$$1 = (0, _Types.L)(x$$98, (0, _Types.L)((0, _TastOps.mkRefTupledNoTypes)(cenv$$46.g, m$$59, (0, _Types.L)((0, _TastOps.mkCoerceExpr)(y$$49, (0, _TcGlobals.TcGlobals$$get_obj_ty)(cenv$$46.g), m$$59, ty$$59), (0, _Types.L)(comp$$1, (0, _Types.L)()))), (0, _Types.L)()));
                                return DevirtualizeApplication(cenv$$46, env$$54, withcEqualsVal, ty$$59, patternInput$$43[1], args2$$1, m$$59);
                              }

                            case 1:
                              {
                                return null;
                              }
                          }
                        }

                      case 1:
                        {
                          var $target$$195, ty$$61, v$$60;

                          if (matchValue$$90[0].tag === 1) {
                            if (matchValue$$90[1].tail != null) {
                              if (matchValue$$90[1].tail.tail == null) {
                                if (v$$59 = matchValue$$90[0].fields[0], (ty$$60 = matchValue$$90[1].head, CanDevirtualizeApplication(cenv$$46, v$$59, (0, _TcGlobals.TcGlobals$$get_generic_equality_per_inner_vref)(cenv$$46.g), ty$$60, args$$21) ? !(0, _TastOps.isRefTupleTy)(cenv$$46.g, ty$$60) : false)) {
                                  $target$$195 = 0;
                                  ty$$61 = matchValue$$90[1].head;
                                  v$$60 = matchValue$$90[0].fields[0];
                                } else {
                                  $target$$195 = 1;
                                }
                              } else {
                                $target$$195 = 1;
                              }
                            } else {
                              $target$$195 = 1;
                            }
                          } else {
                            $target$$195 = 1;
                          }

                          switch ($target$$195) {
                            case 0:
                              {
                                const patternInput$$44 = StripToNominalTyconRef(cenv$$46, ty$$61);
                                const matchValue$$95 = [(0, _tast.EntityRef$$get_GeneratedHashAndEqualsWithComparerValues)(patternInput$$44[0]), args$$21];
                                var $target$$196, withcEqualsVal$$1, x$$99, y$$50;

                                if (matchValue$$95[0] != null) {
                                  if (matchValue$$95[1].tail != null) {
                                    if (matchValue$$95[1].tail.tail != null) {
                                      if (matchValue$$95[1].tail.tail.tail == null) {
                                        $target$$196 = 0;
                                        withcEqualsVal$$1 = matchValue$$95[0][2];
                                        x$$99 = matchValue$$95[1].head;
                                        y$$50 = matchValue$$95[1].tail.head;
                                      } else {
                                        $target$$196 = 1;
                                      }
                                    } else {
                                      $target$$196 = 1;
                                    }
                                  } else {
                                    $target$$196 = 1;
                                  }
                                } else {
                                  $target$$196 = 1;
                                }

                                switch ($target$$196) {
                                  case 0:
                                    {
                                      const args2$$2 = (0, _Types.L)(x$$99, (0, _Types.L)((0, _TastOps.mkRefTupledNoTypes)(cenv$$46.g, m$$59, (0, _Types.L)((0, _TastOps.mkCoerceExpr)(y$$50, (0, _TcGlobals.TcGlobals$$get_obj_ty)(cenv$$46.g), m$$59, ty$$61), (0, _Types.L)((0, _TastOps.mkCallGetGenericPEREqualityComparer)(cenv$$46.g, m$$59), (0, _Types.L)()))), (0, _Types.L)()));
                                      return DevirtualizeApplication(cenv$$46, env$$54, withcEqualsVal$$1, ty$$61, patternInput$$44[1], args2$$2, m$$59);
                                    }

                                  case 1:
                                    {
                                      return null;
                                    }
                                }
                              }

                            case 1:
                              {
                                var $target$$197, ty$$63, v$$62;

                                if (matchValue$$90[0].tag === 1) {
                                  if (matchValue$$90[1].tail != null) {
                                    if (matchValue$$90[1].tail.tail == null) {
                                      if (v$$61 = matchValue$$90[0].fields[0], (ty$$62 = matchValue$$90[1].head, CanDevirtualizeApplication(cenv$$46, v$$61, (0, _TcGlobals.TcGlobals$$get_generic_hash_inner_vref)(cenv$$46.g), ty$$62, args$$21))) {
                                        $target$$197 = 0;
                                        ty$$63 = matchValue$$90[1].head;
                                        v$$62 = matchValue$$90[0].fields[0];
                                      } else {
                                        $target$$197 = 1;
                                      }
                                    } else {
                                      $target$$197 = 1;
                                    }
                                  } else {
                                    $target$$197 = 1;
                                  }
                                } else {
                                  $target$$197 = 1;
                                }

                                switch ($target$$197) {
                                  case 0:
                                    {
                                      const patternInput$$45 = StripToNominalTyconRef(cenv$$46, ty$$63);
                                      const matchValue$$96 = [(0, _tast.EntityRef$$get_GeneratedHashAndEqualsWithComparerValues)(patternInput$$45[0]), args$$21];
                                      var $target$$198, withcGetHashCodeVal, x$$100;

                                      if (matchValue$$96[0] != null) {
                                        if (matchValue$$96[1].tail != null) {
                                          if (matchValue$$96[1].tail.tail == null) {
                                            $target$$198 = 0;
                                            withcGetHashCodeVal = matchValue$$96[0][1];
                                            x$$100 = matchValue$$96[1].head;
                                          } else {
                                            $target$$198 = 1;
                                          }
                                        } else {
                                          $target$$198 = 1;
                                        }
                                      } else {
                                        $target$$198 = 1;
                                      }

                                      switch ($target$$198) {
                                        case 0:
                                          {
                                            const args2$$3 = (0, _Types.L)(x$$100, (0, _Types.L)((0, _TastOps.mkCallGetGenericEREqualityComparer)(cenv$$46.g, m$$59), (0, _Types.L)()));
                                            return DevirtualizeApplication(cenv$$46, env$$54, withcGetHashCodeVal, ty$$63, patternInput$$45[1], args2$$3, m$$59);
                                          }

                                        case 1:
                                          {
                                            return null;
                                          }
                                      }
                                    }

                                  case 1:
                                    {
                                      var $target$$199, ty$$65, v$$64;

                                      if (matchValue$$90[0].tag === 1) {
                                        if (matchValue$$90[1].tail != null) {
                                          if (matchValue$$90[1].tail.tail == null) {
                                            if (v$$63 = matchValue$$90[0].fields[0], (ty$$64 = matchValue$$90[1].head, CanDevirtualizeApplication(cenv$$46, v$$63, (0, _TcGlobals.TcGlobals$$get_generic_hash_withc_inner_vref)(cenv$$46.g), ty$$64, args$$21))) {
                                              $target$$199 = 0;
                                              ty$$65 = matchValue$$90[1].head;
                                              v$$64 = matchValue$$90[0].fields[0];
                                            } else {
                                              $target$$199 = 1;
                                            }
                                          } else {
                                            $target$$199 = 1;
                                          }
                                        } else {
                                          $target$$199 = 1;
                                        }
                                      } else {
                                        $target$$199 = 1;
                                      }

                                      switch ($target$$199) {
                                        case 0:
                                          {
                                            const patternInput$$46 = StripToNominalTyconRef(cenv$$46, ty$$65);
                                            const matchValue$$97 = [(0, _tast.EntityRef$$get_GeneratedHashAndEqualsWithComparerValues)(patternInput$$46[0]), args$$21];
                                            var $target$$200, comp$$2, withcGetHashCodeVal$$1, x$$101;

                                            if (matchValue$$97[0] != null) {
                                              if (matchValue$$97[1].tail != null) {
                                                if (matchValue$$97[1].tail.tail != null) {
                                                  if (matchValue$$97[1].tail.tail.tail == null) {
                                                    $target$$200 = 0;
                                                    comp$$2 = matchValue$$97[1].head;
                                                    withcGetHashCodeVal$$1 = matchValue$$97[0][1];
                                                    x$$101 = matchValue$$97[1].tail.head;
                                                  } else {
                                                    $target$$200 = 1;
                                                  }
                                                } else {
                                                  $target$$200 = 1;
                                                }
                                              } else {
                                                $target$$200 = 1;
                                              }
                                            } else {
                                              $target$$200 = 1;
                                            }

                                            switch ($target$$200) {
                                              case 0:
                                                {
                                                  const args2$$4 = (0, _Types.L)(x$$101, (0, _Types.L)(comp$$2, (0, _Types.L)()));
                                                  return DevirtualizeApplication(cenv$$46, env$$54, withcGetHashCodeVal$$1, ty$$65, patternInput$$46[1], args2$$4, m$$59);
                                                }

                                              case 1:
                                                {
                                                  return null;
                                                }
                                            }
                                          }

                                        case 1:
                                          {
                                            var $target$$201, ty$$67, v$$66;

                                            if (matchValue$$90[0].tag === 1) {
                                              if (matchValue$$90[1].tail != null) {
                                                if (matchValue$$90[1].tail.tail == null) {
                                                  if (v$$65 = matchValue$$90[0].fields[0], (ty$$66 = matchValue$$90[1].head, (0, _TastOps.valRefEq)(cenv$$46.g, v$$65, (0, _TcGlobals.TcGlobals$$get_generic_comparison_inner_vref)(cenv$$46.g)) ? (0, _TastOps.isRefTupleTy)(cenv$$46.g, ty$$66) : false)) {
                                                    $target$$201 = 0;
                                                    ty$$67 = matchValue$$90[1].head;
                                                    v$$66 = matchValue$$90[0].fields[0];
                                                  } else {
                                                    $target$$201 = 1;
                                                  }
                                                } else {
                                                  $target$$201 = 1;
                                                }
                                              } else {
                                                $target$$201 = 1;
                                              }
                                            } else {
                                              $target$$201 = 1;
                                            }

                                            switch ($target$$201) {
                                              case 0:
                                                {
                                                  const tyargs$$22 = (0, _TastOps.destRefTupleTy)(cenv$$46.g, ty$$67);
                                                  let vref$$29;
                                                  const matchValue$$98 = (0, _List.length)(tyargs$$22) | 0;

                                                  switch (matchValue$$98) {
                                                    case 2:
                                                      {
                                                        vref$$29 = (0, _TcGlobals.TcGlobals$$get_generic_compare_withc_tuple2_vref)(cenv$$46.g);
                                                        break;
                                                      }

                                                    case 3:
                                                      {
                                                        vref$$29 = (0, _TcGlobals.TcGlobals$$get_generic_compare_withc_tuple3_vref)(cenv$$46.g);
                                                        break;
                                                      }

                                                    case 4:
                                                      {
                                                        vref$$29 = (0, _TcGlobals.TcGlobals$$get_generic_compare_withc_tuple4_vref)(cenv$$46.g);
                                                        break;
                                                      }

                                                    case 5:
                                                      {
                                                        vref$$29 = (0, _TcGlobals.TcGlobals$$get_generic_compare_withc_tuple5_vref)(cenv$$46.g);
                                                        break;
                                                      }

                                                    default:
                                                      {
                                                        vref$$29 = null;
                                                      }
                                                  }

                                                  if (vref$$29 == null) {
                                                    return null;
                                                  } else {
                                                    const vref$$30 = vref$$29;
                                                    return DevirtualizeApplication(cenv$$46, env$$54, vref$$30, ty$$67, tyargs$$22, (0, _Types.L)((0, _TastOps.mkCallGetGenericComparer)(cenv$$46.g, m$$59), args$$21), m$$59);
                                                  }
                                                }

                                              case 1:
                                                {
                                                  var $target$$202, ty$$69, v$$68;

                                                  if (matchValue$$90[0].tag === 1) {
                                                    if (matchValue$$90[1].tail != null) {
                                                      if (matchValue$$90[1].tail.tail == null) {
                                                        if (v$$67 = matchValue$$90[0].fields[0], (ty$$68 = matchValue$$90[1].head, (0, _TastOps.valRefEq)(cenv$$46.g, v$$67, (0, _TcGlobals.TcGlobals$$get_generic_hash_inner_vref)(cenv$$46.g)) ? (0, _TastOps.isRefTupleTy)(cenv$$46.g, ty$$68) : false)) {
                                                          $target$$202 = 0;
                                                          ty$$69 = matchValue$$90[1].head;
                                                          v$$68 = matchValue$$90[0].fields[0];
                                                        } else {
                                                          $target$$202 = 1;
                                                        }
                                                      } else {
                                                        $target$$202 = 1;
                                                      }
                                                    } else {
                                                      $target$$202 = 1;
                                                    }
                                                  } else {
                                                    $target$$202 = 1;
                                                  }

                                                  switch ($target$$202) {
                                                    case 0:
                                                      {
                                                        const tyargs$$23 = (0, _TastOps.destRefTupleTy)(cenv$$46.g, ty$$69);
                                                        let vref$$31;
                                                        const matchValue$$99 = (0, _List.length)(tyargs$$23) | 0;

                                                        switch (matchValue$$99) {
                                                          case 2:
                                                            {
                                                              vref$$31 = (0, _TcGlobals.TcGlobals$$get_generic_hash_withc_tuple2_vref)(cenv$$46.g);
                                                              break;
                                                            }

                                                          case 3:
                                                            {
                                                              vref$$31 = (0, _TcGlobals.TcGlobals$$get_generic_hash_withc_tuple3_vref)(cenv$$46.g);
                                                              break;
                                                            }

                                                          case 4:
                                                            {
                                                              vref$$31 = (0, _TcGlobals.TcGlobals$$get_generic_hash_withc_tuple4_vref)(cenv$$46.g);
                                                              break;
                                                            }

                                                          case 5:
                                                            {
                                                              vref$$31 = (0, _TcGlobals.TcGlobals$$get_generic_hash_withc_tuple5_vref)(cenv$$46.g);
                                                              break;
                                                            }

                                                          default:
                                                            {
                                                              vref$$31 = null;
                                                            }
                                                        }

                                                        if (vref$$31 == null) {
                                                          return null;
                                                        } else {
                                                          const vref$$32 = vref$$31;
                                                          return DevirtualizeApplication(cenv$$46, env$$54, vref$$32, ty$$69, tyargs$$23, (0, _Types.L)((0, _TastOps.mkCallGetGenericEREqualityComparer)(cenv$$46.g, m$$59), args$$21), m$$59);
                                                        }
                                                      }

                                                    case 1:
                                                      {
                                                        var $target$$203, ty$$71, v$$70;

                                                        if (matchValue$$90[0].tag === 1) {
                                                          if (matchValue$$90[1].tail != null) {
                                                            if (matchValue$$90[1].tail.tail == null) {
                                                              if (v$$69 = matchValue$$90[0].fields[0], (ty$$70 = matchValue$$90[1].head, (0, _TastOps.valRefEq)(cenv$$46.g, v$$69, (0, _TcGlobals.TcGlobals$$get_generic_equality_per_inner_vref)(cenv$$46.g)) ? (0, _TastOps.isRefTupleTy)(cenv$$46.g, ty$$70) : false)) {
                                                                $target$$203 = 0;
                                                                ty$$71 = matchValue$$90[1].head;
                                                                v$$70 = matchValue$$90[0].fields[0];
                                                              } else {
                                                                $target$$203 = 1;
                                                              }
                                                            } else {
                                                              $target$$203 = 1;
                                                            }
                                                          } else {
                                                            $target$$203 = 1;
                                                          }
                                                        } else {
                                                          $target$$203 = 1;
                                                        }

                                                        switch ($target$$203) {
                                                          case 0:
                                                            {
                                                              const tyargs$$24 = (0, _TastOps.destRefTupleTy)(cenv$$46.g, ty$$71);
                                                              let vref$$33;
                                                              const matchValue$$100 = (0, _List.length)(tyargs$$24) | 0;

                                                              switch (matchValue$$100) {
                                                                case 2:
                                                                  {
                                                                    vref$$33 = (0, _TcGlobals.TcGlobals$$get_generic_equals_withc_tuple2_vref)(cenv$$46.g);
                                                                    break;
                                                                  }

                                                                case 3:
                                                                  {
                                                                    vref$$33 = (0, _TcGlobals.TcGlobals$$get_generic_equals_withc_tuple3_vref)(cenv$$46.g);
                                                                    break;
                                                                  }

                                                                case 4:
                                                                  {
                                                                    vref$$33 = (0, _TcGlobals.TcGlobals$$get_generic_equals_withc_tuple4_vref)(cenv$$46.g);
                                                                    break;
                                                                  }

                                                                case 5:
                                                                  {
                                                                    vref$$33 = (0, _TcGlobals.TcGlobals$$get_generic_equals_withc_tuple5_vref)(cenv$$46.g);
                                                                    break;
                                                                  }

                                                                default:
                                                                  {
                                                                    vref$$33 = null;
                                                                  }
                                                              }

                                                              if (vref$$33 == null) {
                                                                return null;
                                                              } else {
                                                                const vref$$34 = vref$$33;
                                                                return DevirtualizeApplication(cenv$$46, env$$54, vref$$34, ty$$71, tyargs$$24, (0, _Types.L)((0, _TastOps.mkCallGetGenericPEREqualityComparer)(cenv$$46.g, m$$59), args$$21), m$$59);
                                                              }
                                                            }

                                                          case 1:
                                                            {
                                                              var $target$$204, ty$$73, v$$72;

                                                              if (matchValue$$90[0].tag === 1) {
                                                                if (matchValue$$90[1].tail != null) {
                                                                  if (matchValue$$90[1].tail.tail == null) {
                                                                    if (v$$71 = matchValue$$90[0].fields[0], (ty$$72 = matchValue$$90[1].head, (0, _TastOps.valRefEq)(cenv$$46.g, v$$71, (0, _TcGlobals.TcGlobals$$get_generic_comparison_withc_inner_vref)(cenv$$46.g)) ? (0, _TastOps.isRefTupleTy)(cenv$$46.g, ty$$72) : false)) {
                                                                      $target$$204 = 0;
                                                                      ty$$73 = matchValue$$90[1].head;
                                                                      v$$72 = matchValue$$90[0].fields[0];
                                                                    } else {
                                                                      $target$$204 = 1;
                                                                    }
                                                                  } else {
                                                                    $target$$204 = 1;
                                                                  }
                                                                } else {
                                                                  $target$$204 = 1;
                                                                }
                                                              } else {
                                                                $target$$204 = 1;
                                                              }

                                                              switch ($target$$204) {
                                                                case 0:
                                                                  {
                                                                    const tyargs$$25 = (0, _TastOps.destRefTupleTy)(cenv$$46.g, ty$$73);
                                                                    let vref$$35;
                                                                    const matchValue$$101 = (0, _List.length)(tyargs$$25) | 0;

                                                                    switch (matchValue$$101) {
                                                                      case 2:
                                                                        {
                                                                          vref$$35 = (0, _TcGlobals.TcGlobals$$get_generic_compare_withc_tuple2_vref)(cenv$$46.g);
                                                                          break;
                                                                        }

                                                                      case 3:
                                                                        {
                                                                          vref$$35 = (0, _TcGlobals.TcGlobals$$get_generic_compare_withc_tuple3_vref)(cenv$$46.g);
                                                                          break;
                                                                        }

                                                                      case 4:
                                                                        {
                                                                          vref$$35 = (0, _TcGlobals.TcGlobals$$get_generic_compare_withc_tuple4_vref)(cenv$$46.g);
                                                                          break;
                                                                        }

                                                                      case 5:
                                                                        {
                                                                          vref$$35 = (0, _TcGlobals.TcGlobals$$get_generic_compare_withc_tuple5_vref)(cenv$$46.g);
                                                                          break;
                                                                        }

                                                                      default:
                                                                        {
                                                                          vref$$35 = null;
                                                                        }
                                                                    }

                                                                    if (vref$$35 == null) {
                                                                      return null;
                                                                    } else {
                                                                      const vref$$36 = vref$$35;
                                                                      return DevirtualizeApplication(cenv$$46, env$$54, vref$$36, ty$$73, tyargs$$25, args$$21, m$$59);
                                                                    }
                                                                  }

                                                                case 1:
                                                                  {
                                                                    var $target$$205, ty$$75, v$$74;

                                                                    if (matchValue$$90[0].tag === 1) {
                                                                      if (matchValue$$90[1].tail != null) {
                                                                        if (matchValue$$90[1].tail.tail == null) {
                                                                          if (v$$73 = matchValue$$90[0].fields[0], (ty$$74 = matchValue$$90[1].head, (0, _TastOps.valRefEq)(cenv$$46.g, v$$73, (0, _TcGlobals.TcGlobals$$get_generic_hash_withc_inner_vref)(cenv$$46.g)) ? (0, _TastOps.isRefTupleTy)(cenv$$46.g, ty$$74) : false)) {
                                                                            $target$$205 = 0;
                                                                            ty$$75 = matchValue$$90[1].head;
                                                                            v$$74 = matchValue$$90[0].fields[0];
                                                                          } else {
                                                                            $target$$205 = 1;
                                                                          }
                                                                        } else {
                                                                          $target$$205 = 1;
                                                                        }
                                                                      } else {
                                                                        $target$$205 = 1;
                                                                      }
                                                                    } else {
                                                                      $target$$205 = 1;
                                                                    }

                                                                    switch ($target$$205) {
                                                                      case 0:
                                                                        {
                                                                          const tyargs$$26 = (0, _TastOps.destRefTupleTy)(cenv$$46.g, ty$$75);
                                                                          let vref$$37;
                                                                          const matchValue$$102 = (0, _List.length)(tyargs$$26) | 0;

                                                                          switch (matchValue$$102) {
                                                                            case 2:
                                                                              {
                                                                                vref$$37 = (0, _TcGlobals.TcGlobals$$get_generic_hash_withc_tuple2_vref)(cenv$$46.g);
                                                                                break;
                                                                              }

                                                                            case 3:
                                                                              {
                                                                                vref$$37 = (0, _TcGlobals.TcGlobals$$get_generic_hash_withc_tuple3_vref)(cenv$$46.g);
                                                                                break;
                                                                              }

                                                                            case 4:
                                                                              {
                                                                                vref$$37 = (0, _TcGlobals.TcGlobals$$get_generic_hash_withc_tuple4_vref)(cenv$$46.g);
                                                                                break;
                                                                              }

                                                                            case 5:
                                                                              {
                                                                                vref$$37 = (0, _TcGlobals.TcGlobals$$get_generic_hash_withc_tuple5_vref)(cenv$$46.g);
                                                                                break;
                                                                              }

                                                                            default:
                                                                              {
                                                                                vref$$37 = null;
                                                                              }
                                                                          }

                                                                          if (vref$$37 == null) {
                                                                            return null;
                                                                          } else {
                                                                            const vref$$38 = vref$$37;
                                                                            return DevirtualizeApplication(cenv$$46, env$$54, vref$$38, ty$$75, tyargs$$26, args$$21, m$$59);
                                                                          }
                                                                        }

                                                                      case 1:
                                                                        {
                                                                          var $target$$206, ty$$77, v$$76;

                                                                          if (matchValue$$90[0].tag === 1) {
                                                                            if (matchValue$$90[1].tail != null) {
                                                                              if (matchValue$$90[1].tail.tail == null) {
                                                                                if (v$$75 = matchValue$$90[0].fields[0], (ty$$76 = matchValue$$90[1].head, (0, _TastOps.valRefEq)(cenv$$46.g, v$$75, (0, _TcGlobals.TcGlobals$$get_generic_equality_withc_inner_vref)(cenv$$46.g)) ? (0, _TastOps.isRefTupleTy)(cenv$$46.g, ty$$76) : false)) {
                                                                                  $target$$206 = 0;
                                                                                  ty$$77 = matchValue$$90[1].head;
                                                                                  v$$76 = matchValue$$90[0].fields[0];
                                                                                } else {
                                                                                  $target$$206 = 1;
                                                                                }
                                                                              } else {
                                                                                $target$$206 = 1;
                                                                              }
                                                                            } else {
                                                                              $target$$206 = 1;
                                                                            }
                                                                          } else {
                                                                            $target$$206 = 1;
                                                                          }

                                                                          switch ($target$$206) {
                                                                            case 0:
                                                                              {
                                                                                const tyargs$$27 = (0, _TastOps.destRefTupleTy)(cenv$$46.g, ty$$77);
                                                                                let vref$$39;
                                                                                const matchValue$$103 = (0, _List.length)(tyargs$$27) | 0;

                                                                                switch (matchValue$$103) {
                                                                                  case 2:
                                                                                    {
                                                                                      vref$$39 = (0, _TcGlobals.TcGlobals$$get_generic_equals_withc_tuple2_vref)(cenv$$46.g);
                                                                                      break;
                                                                                    }

                                                                                  case 3:
                                                                                    {
                                                                                      vref$$39 = (0, _TcGlobals.TcGlobals$$get_generic_equals_withc_tuple3_vref)(cenv$$46.g);
                                                                                      break;
                                                                                    }

                                                                                  case 4:
                                                                                    {
                                                                                      vref$$39 = (0, _TcGlobals.TcGlobals$$get_generic_equals_withc_tuple4_vref)(cenv$$46.g);
                                                                                      break;
                                                                                    }

                                                                                  case 5:
                                                                                    {
                                                                                      vref$$39 = (0, _TcGlobals.TcGlobals$$get_generic_equals_withc_tuple5_vref)(cenv$$46.g);
                                                                                      break;
                                                                                    }

                                                                                  default:
                                                                                    {
                                                                                      vref$$39 = null;
                                                                                    }
                                                                                }

                                                                                if (vref$$39 == null) {
                                                                                  return null;
                                                                                } else {
                                                                                  const vref$$40 = vref$$39;
                                                                                  return DevirtualizeApplication(cenv$$46, env$$54, vref$$40, ty$$77, tyargs$$27, args$$21, m$$59);
                                                                                }
                                                                              }

                                                                            case 1:
                                                                              {
                                                                                var $target$$207, ty$$79, v$$78;

                                                                                if (matchValue$$90[0].tag === 1) {
                                                                                  if (matchValue$$90[1].tail != null) {
                                                                                    if (matchValue$$90[1].tail.tail == null) {
                                                                                      if (v$$77 = matchValue$$90[0].fields[0], (ty$$78 = matchValue$$90[1].head, (0, _TastOps.valRefEq)(cenv$$46.g, v$$77, (0, _TcGlobals.TcGlobals$$get_unbox_vref)(cenv$$46.g)) ? (0, _TastOps.canUseUnboxFast)(cenv$$46.g, m$$59, ty$$78) : false)) {
                                                                                        $target$$207 = 0;
                                                                                        ty$$79 = matchValue$$90[1].head;
                                                                                        v$$78 = matchValue$$90[0].fields[0];
                                                                                      } else {
                                                                                        $target$$207 = 1;
                                                                                      }
                                                                                    } else {
                                                                                      $target$$207 = 1;
                                                                                    }
                                                                                  } else {
                                                                                    $target$$207 = 1;
                                                                                  }
                                                                                } else {
                                                                                  $target$$207 = 1;
                                                                                }

                                                                                switch ($target$$207) {
                                                                                  case 0:
                                                                                    {
                                                                                      return DevirtualizeApplication(cenv$$46, env$$54, (0, _TcGlobals.TcGlobals$$get_unbox_fast_vref)(cenv$$46.g), ty$$79, tyargs$$14, args$$21, m$$59);
                                                                                    }

                                                                                  case 1:
                                                                                    {
                                                                                      var $target$$208, ty$$81, v$$80;

                                                                                      if (matchValue$$90[0].tag === 1) {
                                                                                        if (matchValue$$90[1].tail != null) {
                                                                                          if (matchValue$$90[1].tail.tail == null) {
                                                                                            if (v$$79 = matchValue$$90[0].fields[0], (ty$$80 = matchValue$$90[1].head, (0, _TastOps.valRefEq)(cenv$$46.g, v$$79, (0, _TcGlobals.TcGlobals$$get_istype_vref)(cenv$$46.g)) ? (0, _TastOps.canUseTypeTestFast)(cenv$$46.g, ty$$80) : false)) {
                                                                                              $target$$208 = 0;
                                                                                              ty$$81 = matchValue$$90[1].head;
                                                                                              v$$80 = matchValue$$90[0].fields[0];
                                                                                            } else {
                                                                                              $target$$208 = 1;
                                                                                            }
                                                                                          } else {
                                                                                            $target$$208 = 1;
                                                                                          }
                                                                                        } else {
                                                                                          $target$$208 = 1;
                                                                                        }
                                                                                      } else {
                                                                                        $target$$208 = 1;
                                                                                      }

                                                                                      switch ($target$$208) {
                                                                                        case 0:
                                                                                          {
                                                                                            return DevirtualizeApplication(cenv$$46, env$$54, (0, _TcGlobals.TcGlobals$$get_istype_fast_vref)(cenv$$46.g), ty$$81, tyargs$$14, args$$21, m$$59);
                                                                                          }

                                                                                        case 1:
                                                                                          {
                                                                                            var $target$$209, vref$$42;

                                                                                            if (matchValue$$90[0].tag === 1) {
                                                                                              if (vref$$41 = matchValue$$90[0].fields[0], (0, _TastOps.valRefEq)(cenv$$46.g, vref$$41, (0, _TcGlobals.TcGlobals$$get_methodhandleof_vref)(cenv$$46.g))) {
                                                                                                $target$$209 = 0;
                                                                                                vref$$42 = matchValue$$90[0].fields[0];
                                                                                              } else {
                                                                                                $target$$209 = 1;
                                                                                              }
                                                                                            } else {
                                                                                              $target$$209 = 1;
                                                                                            }

                                                                                            switch ($target$$209) {
                                                                                              case 0:
                                                                                                {
                                                                                                  return [(0, _TastOps.MakeApplicationAndBetaReduce)(cenv$$46.g, (0, _TastOps.exprForValRef)(m$$59, vref$$42), (0, _tast.ValRef$$get_Type)(vref$$42), tyargs$$14.tail == null ? (0, _Types.L)() : (0, _Types.L)(tyargs$$14, (0, _Types.L)()), args$$21, m$$59), new Summary$00601(new ExprValueInfo(0, "UnknownValue"), 1, 1, false, false)];
                                                                                                }

                                                                                              case 1:
                                                                                                {
                                                                                                  return null;
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

function TryInlineApplication(cenv$$47, env$$55, finfo, tyargs$$28, args$$22, m$$60) {
  var vref$$43, tcr, size, lambdaId, f2ty, f2, arities;
  var $target$$210, arities$$1, f2$$1, f2ty$$1, lambdaId$$1, size$$1;
  const activePatternResult50768 = $007CStripLambdaValue$007C_$007C(finfo.Info);

  if (activePatternResult50768 != null) {
    if (size = activePatternResult50768[2] | 0, (lambdaId = activePatternResult50768[0], (f2ty = activePatternResult50768[4], (f2 = activePatternResult50768[3], (arities = activePatternResult50768[1] | 0, (((cenv$$47.optimizing ? OptimizationSettings$$InlineLambdas(cenv$$47.settings) : false) ? !finfo.HasEffect : false) ? !(0, _zset.ZsetModule$$$contains)(lambdaId, env$$55.dontInline) : false) ? ((0, _List.exists)(function predicate$$5(t$$1) {
      if (t$$1.tag === 6) {
        return false;
      } else {
        return true;
      }
    }, tyargs$$28) ? 1 : 0) + (0, _List.length)(args$$22) === arities ? size > cenv$$47.settings.lambdaInlineThreshold + (0, _List.length)(args$$22) ? false : true : false : false))))) {
      $target$$210 = 0;
      arities$$1 = activePatternResult50768[1];
      f2$$1 = activePatternResult50768[3];
      f2ty$$1 = activePatternResult50768[4];
      lambdaId$$1 = activePatternResult50768[0];
      size$$1 = activePatternResult50768[2];
    } else {
      $target$$210 = 1;
    }
  } else {
    $target$$210 = 1;
  }

  switch ($target$$210) {
    case 0:
      {
        let isBaseCall;

        if (!(args$$22.tail == null)) {
          const matchValue$$105 = (0, _List.item)(0, args$$22);
          var $target$$211, vref$$44;

          if (matchValue$$105.tag === 1) {
            if (vref$$43 = matchValue$$105.fields[0], (0, _Util.equals)((0, _tast.ValRef$$get_BaseOrThisInfo)(vref$$43), new _tast.ValBaseOrThisInfo(1, "BaseVal"))) {
              $target$$211 = 0;
              vref$$44 = matchValue$$105.fields[0];
            } else {
              $target$$211 = 1;
            }
          } else {
            $target$$211 = 1;
          }

          switch ($target$$211) {
            case 0:
              {
                isBaseCall = true;
                break;
              }

            case 1:
              {
                isBaseCall = false;
                break;
              }
          }
        } else {
          isBaseCall = false;
        }

        if (isBaseCall) {
          return null;
        } else {
          let isValFromLazyExtensions;

          if ((0, _TcGlobals.TcGlobals$$get_compilingFslib)(cenv$$47.g)) {
            isValFromLazyExtensions = false;
          } else if (finfo.Info.tag === 2) {
            const vref$$45 = finfo.Info.fields[0];
            const matchValue$$107 = (0, _tast.ValRef$$get_ApparentEnclosingEntity)(vref$$45);
            var $target$$212, tcr$$1;

            if (matchValue$$107.tag === 0) {
              if (tcr = matchValue$$107.fields[0], (0, _TastOps.tyconRefEq)(cenv$$47.g, (0, _TcGlobals.TcGlobals$$get_lazy_tcr_canon)(cenv$$47.g), tcr)) {
                $target$$212 = 0;
                tcr$$1 = matchValue$$107.fields[0];
              } else {
                $target$$212 = 1;
              }
            } else {
              $target$$212 = 1;
            }

            switch ($target$$212) {
              case 0:
                {
                  const matchValue$$108 = (0, _tast.EntityRef$$get_CompiledRepresentation)(tcr$$1);

                  if (matchValue$$108.tag === 0) {
                    const iltr = matchValue$$108.fields[0];
                    isValFromLazyExtensions = (0, _il.ILAssemblyRef$$get_Name)((0, _il.ILScopeRef$$get_AssemblyRef)((0, _il.ILTypeRef$$get_Scope)(iltr))) === "FSharp.Core";
                  } else {
                    isValFromLazyExtensions = false;
                  }

                  break;
                }

              case 1:
                {
                  isValFromLazyExtensions = false;
                  break;
                }
            }
          } else {
            isValFromLazyExtensions = false;
          }

          if (isValFromLazyExtensions) {
            return null;
          } else {
            let isSecureMethod;

            if (finfo.Info.tag === 2) {
              const vref$$46 = finfo.Info.fields[0];
              isSecureMethod = (0, _List.exists)(function predicate$$6(a$$216) {
                if ((0, _AttributeChecking.IsSecurityAttribute)(cenv$$47.g, cenv$$47.amap, cenv$$47.casApplied, a$$216, m$$60)) {
                  return true;
                } else {
                  return (0, _AttributeChecking.IsSecurityCriticalAttribute)(cenv$$47.g, a$$216);
                }
              }, (0, _tast.ValRef$$get_Attribs)(vref$$46));
            } else {
              isSecureMethod = false;
            }

            if (isSecureMethod) {
              return null;
            } else {
              let isGetHashCode;

              if (finfo.Info.tag === 2) {
                const vref$$47 = finfo.Info.fields[0];
                isGetHashCode = (0, _tast.ValRef$$get_DisplayName)(vref$$47) === "GetHashCode" ? (0, _tast.ValRef$$get_IsCompilerGenerated)(vref$$47) : false;
              } else {
                isGetHashCode = false;
              }

              if (isGetHashCode) {
                return null;
              } else {
                const f2$0027 = (0, _TastOps.remarkExpr)(m$$60, (0, _TastOps.copyExpr)(cenv$$47.g, new _TastOps.ValCopyFlag(1, "CloneAllAndMarkExprValsAsCompilerGenerated"), f2$$1));
                const args$0027$$3 = (0, _List.map)(function mapping$$10(e$$29) {
                  const patternInput$$47 = OptimizeExpr(cenv$$47, env$$55, e$$29);
                  return patternInput$$47[0];
                }, args$$22);
                const expr$0027$$3 = (0, _TastOps.MakeApplicationAndBetaReduce)(cenv$$47.g, f2$0027, f2ty$$1, (0, _Types.L)(tyargs$$28, (0, _Types.L)()), args$0027$$3, m$$60);
                return OptimizeExpr(cenv$$47, new IncrementalOptimizationEnv(env$$55.latestBoundId, (0, _zset.ZsetModule$$$add)(lambdaId$$1, env$$55.dontInline), env$$55.dontSplitVars, env$$55.inLoop, env$$55.functionVal, env$$55.typarInfos, env$$55.localExternalVals, env$$55.globalModuleInfos), expr$0027$$3);
              }
            }
          }
        }
      }

    case 1:
      {
        return null;
      }
  }
}

function OptimizeApplication(cenv$$48, env$$56, f0$$1, f0ty$$2, tyargs$$29, args$$23, m$$61) {
  var valInfoForVal$$2;
  const matchValue$$111 = TryDevirtualizeApplication(cenv$$48, env$$56, f0$$1, tyargs$$29, args$$23, m$$61);

  if (matchValue$$111 == null) {
    const patternInput$$48 = OptimizeExpr(cenv$$48, env$$56, f0$$1);
    const matchValue$$112 = TryInlineApplication(cenv$$48, env$$56, patternInput$$48[1], tyargs$$29, args$$23, m$$61);

    if (matchValue$$112 == null) {
      let shapes;

      if (patternInput$$48[0].tag === 1) {
        const vref$$48 = patternInput$$48[0].fields[0];
        const matchValue$$113 = (0, _tast.ValRef$$get_ValReprInfo)(vref$$48);

        if (matchValue$$113 != null) {
          const detupArgsL = matchValue$$113.fields[1];
          const nargs = (0, _List.length)(args$$23) | 0;
          const nDetupArgsL = (0, _List.length)(detupArgsL) | 0;
          const nShapes = (0, _Util.min)(_Util.comparePrimitives, nargs, nDetupArgsL) | 0;
          const detupArgsShapesL = (0, _List.map)(function mapping$$11(detupArgs) {
            var $target$$213;

            if (detupArgs.tail != null) {
              if (detupArgs.tail.tail == null) {
                $target$$213 = 0;
              } else {
                $target$$213 = 1;
              }
            } else {
              $target$$213 = 0;
            }

            switch ($target$$213) {
              case 0:
                {
                  return new ExprValueInfo(0, "UnknownValue");
                }

              case 1:
                {
                  return new ExprValueInfo(3, "TupleValue", (0, _Array.ofList)((0, _List.map)(function (_arg2$$3) {
                    return new ExprValueInfo(0, "UnknownValue");
                  }, detupArgs), Array));
                }
            }
          }, (0, _List.truncate)(nShapes, detupArgsL));
          shapes = (0, _List.zip)((0, _List.append)(detupArgsShapesL, (0, _List.replicate)(nargs - nShapes, new ExprValueInfo(0, "UnknownValue"))), args$$23);
        } else {
          shapes = (0, _List.map)(function mapping$$12(arg$$8) {
            return [new ExprValueInfo(0, "UnknownValue"), arg$$8];
          }, args$$23);
        }
      } else {
        shapes = (0, _List.map)(function mapping$$13(arg$$9) {
          return [new ExprValueInfo(0, "UnknownValue"), arg$$9];
        }, args$$23);
      }

      const patternInput$$49 = OptimizeExprsThenReshapeAndConsiderSplits(cenv$$48, env$$56, shapes);
      const newExpr$$1 = (0, _TastOps.MakeApplicationAndBetaReduce)(cenv$$48.g, patternInput$$48[0], f0ty$$2, (0, _Types.L)(tyargs$$29, (0, _Types.L)()), patternInput$$49[0], m$$61);
      const matchValue$$114 = [patternInput$$48[0], newExpr$$1];
      var $target$$214;

      if (matchValue$$114[0].tag === 3) {
        if (matchValue$$114[1].tag === 7) {
          $target$$214 = 0;
        } else {
          $target$$214 = 1;
        }
      } else if (matchValue$$114[0].tag === 4) {
        if (matchValue$$114[1].tag === 7) {
          $target$$214 = 0;
        } else {
          $target$$214 = 1;
        }
      } else {
        $target$$214 = 1;
      }

      switch ($target$$214) {
        case 0:
          {
            return OptimizeExpr(cenv$$48, env$$56, newExpr$$1);
          }

        case 1:
          {
            let mayBeCriticalTailcall$$1;
            const activePatternResult50777 = $007CKnownValApp$007C_$007C(patternInput$$48[0]);

            if (activePatternResult50777 != null) {
              let doesNotMakeCriticalTailcall;

              if ((0, _tast.ValRef$$get_MakesNoCriticalTailcalls)(activePatternResult50777[0]) ? true : (valInfoForVal$$2 = GetInfoForVal(cenv$$48, env$$56, m$$61, activePatternResult50777[0]), valInfoForVal$$2.ValMakesNoCriticalTailcalls)) {
                doesNotMakeCriticalTailcall = true;
              } else {
                if (env$$56.functionVal != null) {
                  const v$$81 = env$$56.functionVal[0];
                  doesNotMakeCriticalTailcall = (0, _tast.valEq)((0, _tast.ValRef$$get_Deref)(activePatternResult50777[0]), v$$81);
                } else {
                  doesNotMakeCriticalTailcall = false;
                }
              }

              if (doesNotMakeCriticalTailcall) {
                const numArgs = (0, _List.length)(activePatternResult50777[2]) + (0, _List.length)(patternInput$$49[0]) | 0;
                const matchValue$$116 = (0, _tast.ValRef$$get_ValReprInfo)(activePatternResult50777[0]);

                if (matchValue$$116 == null) {
                  if (env$$56.functionVal == null) {
                    mayBeCriticalTailcall$$1 = true;
                  } else {
                    const i$$8 = env$$56.functionVal[1];
                    const _v$$1 = env$$56.functionVal[0];
                    mayBeCriticalTailcall$$1 = numArgs > (0, _tast.ValReprInfo$$get_NumCurriedArgs)(i$$8);
                  }
                } else {
                  const i$$7 = matchValue$$116;
                  mayBeCriticalTailcall$$1 = numArgs > (0, _tast.ValReprInfo$$get_NumCurriedArgs)(i$$7);
                }
              } else {
                mayBeCriticalTailcall$$1 = true;
              }
            } else {
              mayBeCriticalTailcall$$1 = true;
            }

            return [newExpr$$1, new Summary$00601(ValueOfExpr(newExpr$$1), patternInput$$48[1].FunctionSize + (0, _List.sumBy)(function projection$$10(x$$103) {
              return x$$103.FunctionSize;
            }, patternInput$$49[1], {
              GetZero() {
                return 0;
              },

              Add($x$$47, $y$$48) {
                return $x$$47 + $y$$48;
              }

            }), patternInput$$48[1].TotalSize + (0, _List.sumBy)(function projection$$9(x$$102) {
              return x$$102.TotalSize;
            }, patternInput$$49[1], {
              GetZero() {
                return 0;
              },

              Add($x$$45, $y$$46) {
                return $x$$45 + $y$$46;
              }

            }), true, mayBeCriticalTailcall$$1)];
          }
      }
    } else {
      const res$$21 = matchValue$$112;
      return res$$21;
    }
  } else {
    const res$$20 = matchValue$$111;
    return res$$20;
  }
}

function OptimizeLambdas(vspec, cenv$$49, env$$57, topValInfo$$2, e$$30, ety) {
  var v$$82, copyOfStruct, copyOfStruct$$1, copyOfStruct$$2, copyOfStruct$$3, copyOfStruct$$4, copyOfStruct$$5, v$$88, v$$89;
  var $target$$215, lambdaId$$2, m$$62;

  switch (e$$30.tag) {
    case 3:
      $target$$215 = 0;
      lambdaId$$2 = e$$30.fields[0];
      m$$62 = e$$30.fields[5];
      break;

    case 4:
      $target$$215 = 0;
      lambdaId$$2 = e$$30.fields[0];
      m$$62 = e$$30.fields[3];
      break;

    default:
      $target$$215 = 1;
  }

  switch ($target$$215) {
    case 0:
      {
        const patternInput$$50 = (0, _TypeRelations.IteratedAdjustArityOfLambda)(cenv$$49.g, cenv$$49.amap, topValInfo$$2, e$$30);
        const env$$58 = new IncrementalOptimizationEnv(env$$57.latestBoundId, env$$57.dontInline, env$$57.dontSplitVars, env$$57.inLoop, vspec != null ? (v$$82 = vspec, [v$$82, topValInfo$$2]) : null, env$$57.typarInfos, env$$57.localExternalVals, env$$57.globalModuleInfos);
        const env$$61 = (0, _Seq.foldBack)(function (v$$83, env$$59) {
          cenv$$49;
          v$$83;
          return env$$59;
        }, (0, _Option.defaultArg)(patternInput$$50[1], [], function ($x$$49) {
          return [$x$$49];
        }), env$$58);
        const env$$64 = (0, _Seq.foldBack)(function (v$$85, env$$62) {
          cenv$$49;
          v$$85;
          return env$$62;
        }, (0, _Option.defaultArg)(patternInput$$50[2], [], function ($x$$50) {
          return [$x$$50];
        }), env$$61);
        const env$$65 = BindTypeVarsToUnknown(patternInput$$50[0], env$$64);
        const env$$68 = (0, _List.foldBack)(function (vs$$5, env$$66) {
          cenv$$49;
          vs$$5;
          return env$$66;
        }, patternInput$$50[3], env$$65);
        let env$$70;
        cenv$$49;
        (0, _List.ofArray)((0, _Option.defaultArg)(patternInput$$50[2], [], function ($x$$51) {
          return [$x$$51];
        }));
        env$$70 = env$$68;
        const patternInput$$51 = OptimizeExpr(cenv$$49, env$$70, patternInput$$50[4]);
        const expr$0027$$4 = (0, _TastOps.mkMemberLambdas)(m$$62, patternInput$$50[0], patternInput$$50[1], patternInput$$50[2], patternInput$$50[3], patternInput$$51[0], patternInput$$50[5]);
        const arities$$2 = (0, _List.length)(patternInput$$50[3]) | 0;
        const arities$$3 = (patternInput$$50[0].tail == null ? arities$$2 : 1 + arities$$2) | 0;
        const bsize = patternInput$$51[1].TotalSize | 0;

        if (vspec != null) {
          const v$$87 = vspec;

          if (!patternInput$$51[1].MightMakeCriticalTailcall) {
            (0, _tast.Val$$SetMakesNoCriticalTailcalls)(v$$87);
          }

          if (cenv$$49.settings.reportingPhase ? !(0, _tast.Val$$get_IsCompilerGenerated)(v$$87) : false) {
            if (cenv$$49.settings.reportNoNeedToTailcall) {
              if (patternInput$$51[1].MightMakeCriticalTailcall) {
                (0, _String.toConsole)((0, _String.printf)("value %s at line %d may make a critical tailcall"))((0, _tast.Val$$get_DisplayName)(v$$87))((copyOfStruct = (0, _tast.Val$$get_Range)(v$$87), (0, _range.range$$get_StartLine)(copyOfStruct)));
              } else {
                (0, _String.toConsole)((0, _String.printf)("value %s at line %d does not make a critical tailcall"))((0, _tast.Val$$get_DisplayName)(v$$87))((copyOfStruct$$1 = (0, _tast.Val$$get_Range)(v$$87), (0, _range.range$$get_StartLine)(copyOfStruct$$1)));
              }
            }

            if (cenv$$49.settings.reportTotalSizes) {
              (0, _String.toConsole)((0, _String.printf)("value %s at line %d has total size %d"))((0, _tast.Val$$get_DisplayName)(v$$87))((copyOfStruct$$2 = (0, _tast.Val$$get_Range)(v$$87), (0, _range.range$$get_StartLine)(copyOfStruct$$2)))(patternInput$$51[1].TotalSize);
            }

            if (cenv$$49.settings.reportFunctionSizes) {
              (0, _String.toConsole)((0, _String.printf)("value %s at line %d has method size %d"))((0, _tast.Val$$get_DisplayName)(v$$87))((copyOfStruct$$3 = (0, _tast.Val$$get_Range)(v$$87), (0, _range.range$$get_StartLine)(copyOfStruct$$3)))(patternInput$$51[1].FunctionSize);
            }

            if (cenv$$49.settings.reportHasEffect) {
              if (patternInput$$51[1].HasEffect) {
                (0, _String.toConsole)((0, _String.printf)("function %s at line %d causes side effects or may not terminate"))((0, _tast.Val$$get_DisplayName)(v$$87))((copyOfStruct$$4 = (0, _tast.Val$$get_Range)(v$$87), (0, _range.range$$get_StartLine)(copyOfStruct$$4)));
              } else {
                (0, _String.toConsole)((0, _String.printf)("function %s at line %d causes no side effects"))((0, _tast.Val$$get_DisplayName)(v$$87))((copyOfStruct$$5 = (0, _tast.Val$$get_Range)(v$$87), (0, _range.range$$get_StartLine)(copyOfStruct$$5)));
              }
            }
          }
        }

        let valu$$5;

        if (patternInput$$50[2] != null) {
          const baseVal = patternInput$$50[2];
          const fvs$$9 = (0, _TastOps.freeInExpr)(_TastOps.CollectLocals, patternInput$$51[0]);

          if (fvs$$9.UsesMethodLocalConstructs ? true : (0, _TaggedCollections.Set$00602$$Contains$$2B595)(fvs$$9.FreeLocals, baseVal)) {
            valu$$5 = new ExprValueInfo(0, "UnknownValue");
          } else {
            const expr2 = (0, _TastOps.mkMemberLambdas)(m$$62, patternInput$$50[0], patternInput$$50[1], null, patternInput$$50[3], patternInput$$51[0], patternInput$$50[5]);
            valu$$5 = new ExprValueInfo(7, "CurriedLambdaValue", lambdaId$$2, arities$$3, bsize, expr2, ety);
          }
        } else {
          valu$$5 = new ExprValueInfo(7, "CurriedLambdaValue", lambdaId$$2, arities$$3, bsize, expr$0027$$4, ety);
        }

        const estimatedSize = (vspec != null ? (v$$88 = vspec, (0, _tast.Val$$get_IsCompiledAsTopLevel)(v$$88)) ? (v$$89 = vspec, 1) : 10 : 10) | 0;
        return [expr$0027$$4, new Summary$00601(valu$$5, 1, bsize + estimatedSize, false, false)];
      }

    case 1:
      {
        return OptimizeExpr(cenv$$49, env$$57, e$$30);
      }
  }
}

function OptimizeExprsThenReshapeAndConsiderSplits(cenv$$54, env$$71, exprs$$1) {
  if (exprs$$1.tail == null) {
    return NoExprs;
  } else {
    return OptimizeList(function (tupledArg$$13) {
      return OptimizeExprThenReshapeAndConsiderSplit(cenv$$54, env$$71, tupledArg$$13[0], tupledArg$$13[1]);
    }, exprs$$1);
  }
}

function OptimizeExprsThenConsiderSplits(cenv$$55, env$$72, exprs$$2) {
  if (exprs$$2.tail == null) {
    return NoExprs;
  } else {
    return OptimizeList(function (e$$32) {
      return OptimizeExprThenConsiderSplit(cenv$$55, env$$72, e$$32);
    }, exprs$$2);
  }
}

function OptimizeExprThenReshapeAndConsiderSplit(cenv$$56, env$$73, shape$$1, e$$33) {
  return OptimizeExprThenConsiderSplit(cenv$$56, env$$73, ReshapeExpr(cenv$$56, shape$$1, e$$33));
}

function OptimizeDecisionTreeTargets(cenv$$57, env$$74, m$$63, targets$$6) {
  return OptimizeList(function (arg30$0040$$1) {
    return OptimizeDecisionTreeTarget(cenv$$57, env$$74, m$$63, arg30$0040$$1);
  }, (0, _Array.toList)(targets$$6));
}

function ReshapeExpr(cenv$$58, shape$$2, e$$34) {
  const matchValue$$118 = [shape$$2, e$$34];

  var $target$$216, _vFlags$$1, _vref, m$$64, subshapes;

  if (matchValue$$118[0].tag === 3) {
    if (matchValue$$118[1].tag === 1) {
      $target$$216 = 0;
      _vFlags$$1 = matchValue$$118[1].fields[1];
      _vref = matchValue$$118[1].fields[0];
      m$$64 = matchValue$$118[1].fields[2];
      subshapes = matchValue$$118[0].fields[0];
    } else {
      $target$$216 = 1;
    }
  } else {
    $target$$216 = 1;
  }

  switch ($target$$216) {
    case 0:
      {
        const tinst = (0, _TastOps.destRefTupleTy)(cenv$$58.g, (0, _TastOps.tyOfExpr)(cenv$$58.g, e$$34));
        const subshapes$$1 = (0, _Array.toList)(subshapes);
        return (0, _TastOps.mkRefTupled)(cenv$$58.g, m$$64, (0, _List.mapIndexed)(function (i$$9, subshape) {
          return ReshapeExpr(cenv$$58, subshape, (0, _TastOps.mkTupleFieldGet)(cenv$$58.g, _tast.tupInfoRef, e$$34, tinst, i$$9, m$$64));
        }, subshapes$$1), tinst);
      }

    case 1:
      {
        return e$$34;
      }
  }
}

function OptimizeExprThenConsiderSplit(cenv$$59, env$$75, e$$35) {
  const patternInput$$52 = OptimizeExpr(cenv$$59, env$$75, e$$35);
  return ConsiderSplitToMethod(true, cenv$$59.settings.veryBigExprSize, cenv$$59, env$$75, patternInput$$52[0], patternInput$$52[1]);
}

function ComputeSplitToMethodCondition(flag$$1, threshold, cenv$$60, env$$76, e$$36, einfo$$5) {
  var fvs$$10;

  if (((flag$$1 ? cenv$$60.emitTailcalls : false) ? !env$$76.inLoop : false) ? einfo$$5.FunctionSize >= threshold : false) {
    const m$$65 = (0, _TastOps.Expr$002Eget_Range)(e$$36);

    if (fvs$$10 = (0, _TastOps.freeInExpr)(_TastOps.CollectLocals, e$$36), (!fvs$$10.UsesUnboundRethrow ? !fvs$$10.UsesMethodLocalConstructs : false) ? (0, _zset.ZsetModule$$$forall)(function predicate$$7(v$$90) {
      if (!(0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(env$$76.dontSplitVars, v$$90)) {
        if ((0, _tast.Val$$get_ValReprInfo)(v$$90) != null) {
          return true;
        } else if (((0, _Util.equals)((0, _tast.Val$$get_BaseOrThisInfo)(v$$90), new _tast.ValBaseOrThisInfo(2, "NormalVal")) ? !(0, _TastOps.isByrefLikeTy)(cenv$$60.g, m$$65, (0, _tast.Val$$get_Type)(v$$90)) : false) ? !(0, _TastOps.IsGenericValWithGenericContraints)(cenv$$60.g, v$$90) : false) {
          return !(0, _tast.Val$$get_IsMutable)(v$$90);
        } else {
          return false;
        }
      } else {
        return false;
      }
    }, fvs$$10.FreeLocals) : false) {
      return !(0, _TastOps.isByrefLikeTy)(cenv$$60.g, m$$65, (0, _TastOps.tyOfExpr)(cenv$$60.g, e$$36));
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function ConsiderSplitToMethod(flag$$2, threshold$$1, cenv$$61, env$$77, e$$37, einfo$$6) {
  if (ComputeSplitToMethodCondition(flag$$2, threshold$$1, cenv$$61, env$$77, e$$37, einfo$$6)) {
    const m$$66 = (0, _TastOps.Expr$002Eget_Range)(e$$37);
    const patternInput$$53 = (0, _TastOps.mkCompGenLocal)(m$$66, "unitVar", (0, _TcGlobals.TcGlobals$$get_unit_ty)(cenv$$61.g));
    const ty$$82 = (0, _TastOps.tyOfExpr)(cenv$$61.g, e$$37);
    let nm$$1;

    if (env$$77.latestBoundId == null) {
      nm$$1 = "$cont";
    } else {
      const id$$1 = env$$77.latestBoundId;
      nm$$1 = (0, _ast.Ident$$get_idText)(id$$1) + "$cont";
    }

    const patternInput$$54 = (0, _TastOps.mkCompGenLocal)(m$$66, nm$$1, (0, _TastOps.op_MinusMinusGreater)((0, _TcGlobals.TcGlobals$$get_unit_ty)(cenv$$61.g), ty$$82));
    return [(0, _TastOps.mkInvisibleLet)(m$$66, patternInput$$54[0], (0, _TastOps.mkLambda)(m$$66, patternInput$$53[0], e$$37, ty$$82), (0, _TastOps.primMkApp)([patternInput$$54[1], (0, _TastOps.op_MinusMinusGreater)((0, _TcGlobals.TcGlobals$$get_unit_ty)(cenv$$61.g), ty$$82)], (0, _Types.L)(), (0, _Types.L)((0, _TastOps.mkUnit)(cenv$$61.g, m$$66), (0, _Types.L)()), m$$66)), new Summary$00601(einfo$$6.Info, 1, einfo$$6.TotalSize, einfo$$6.HasEffect, einfo$$6.MightMakeCriticalTailcall)];
  } else {
    return [e$$37, einfo$$6];
  }
}

function OptimizeMatch(cenv$$62, env$$78, spMatch$$5, exprm$$3, dtree$$3, targets$$7, m$$67, ty$$83) {
  const patternInput$$55 = OptimizeDecisionTree(cenv$$62, env$$78, m$$67, dtree$$3);
  const patternInput$$56 = OptimizeDecisionTreeTargets(cenv$$62, env$$78, m$$67, targets$$7);
  return RebuildOptimizedMatch(spMatch$$5, exprm$$3, m$$67, ty$$83, patternInput$$55[0], patternInput$$56[0], patternInput$$55[1], patternInput$$56[1]);
}

function CombineMatchInfos(dinfo$$2, tinfo) {
  return new Summary$00601(new ExprValueInfo(0, "UnknownValue"), dinfo$$2.FunctionSize + tinfo.FunctionSize, dinfo$$2.TotalSize + tinfo.TotalSize, dinfo$$2.HasEffect ? true : tinfo.HasEffect, tinfo.MightMakeCriticalTailcall);
}

function RebuildOptimizedMatch(spMatch$$6, exprm$$4, m$$68, ty$$84, dtree$$4, tgs$$1, dinfo$$3, tinfos$$2) {
  const tinfo$$1 = CombineValueInfosUnknown(tinfos$$2);
  const expr$$33 = (0, _TastOps.mkAndSimplifyMatch)(spMatch$$6, exprm$$4, m$$68, ty$$84, dtree$$4, tgs$$1);
  const einfo$$7 = CombineMatchInfos(dinfo$$3, tinfo$$1);
  return [expr$$33, einfo$$7];
}

function OptimizeDecisionTreeTarget(cenv$$63, env$$79, _m$$3, _arg3) {
  const vs$$8 = _arg3.fields[0];
  const spTarget$$1 = _arg3.fields[2];
  const e$$38 = _arg3.fields[1];
  let env$$81;
  cenv$$63;
  vs$$8;
  env$$81 = env$$79;
  const patternInput$$57 = OptimizeExpr(cenv$$63, env$$81, e$$38);
  const patternInput$$58 = ConsiderSplitToMethod(cenv$$63.settings.abstractBigTargets, cenv$$63.settings.bigTargetSize, cenv$$63, env$$81, patternInput$$57[0], patternInput$$57[1]);
  const evalue$0027$$2 = AbstractExprInfoByVars(vs$$8, (0, _Types.L)(), patternInput$$58[1].Info);
  return [new _tast.DecisionTreeTarget(0, "TTarget", vs$$8, patternInput$$58[0], spTarget$$1), new Summary$00601(evalue$0027$$2, patternInput$$58[1].FunctionSize, patternInput$$58[1].TotalSize, patternInput$$58[1].HasEffect, patternInput$$58[1].MightMakeCriticalTailcall)];
}

function OptimizeDecisionTree(cenv$$65, env$$82, m$$69, x$$104) {
  switch (x$$104.tag) {
    case 2:
      {
        const rest$$3 = x$$104.fields[1];
        const bind$$7 = x$$104.fields[0];
        const patternInput$$60 = OptimizeBinding(cenv$$65, false, env$$82, bind$$7);
        const binfo$$2 = patternInput$$60[0][1];
        const bind$$8 = patternInput$$60[0][0];
        const patternInput$$61 = OptimizeDecisionTree(cenv$$65, patternInput$$60[1], m$$69, rest$$3);

        if (ValueIsUsedOrHasEffect(cenv$$65, function () {
          return (0, _TastOps.accFreeInDecisionTree)(_TastOps.CollectLocals, patternInput$$61[0], _TastOps.emptyFreeVars).FreeLocals;
        }, bind$$8, binfo$$2)) {
          const info$$14 = CombineValueInfosUnknown((0, _Types.L)(patternInput$$61[1], (0, _Types.L)(binfo$$2, (0, _Types.L)())));
          var $target$$217, e$$39, n$$64;

          if (patternInput$$61[0].tag === 1) {
            if (patternInput$$61[0].fields[0].tail != null) {
              if (patternInput$$61[0].fields[0].tail.tail == null) {
                $target$$217 = 0;
                e$$39 = patternInput$$61[0].fields[0].head;
                n$$64 = patternInput$$61[0].fields[1];
              } else {
                $target$$217 = 1;
              }
            } else {
              $target$$217 = 1;
            }
          } else {
            $target$$217 = 1;
          }

          switch ($target$$217) {
            case 0:
              {
                const patternInput$$62 = TryEliminateLet(cenv$$65, env$$82, bind$$8, e$$39, m$$69);
                return [new _tast.DecisionTree(1, "TDSuccess", (0, _Types.L)(patternInput$$62[0], (0, _Types.L)()), n$$64), info$$14];
              }

            case 1:
              {
                return [new _tast.DecisionTree(2, "TDBind", bind$$8, patternInput$$61[0]), info$$14];
              }
          }
        } else {
          return [patternInput$$61[0], patternInput$$61[1]];
        }
      }

    case 0:
      {
        const m$$70 = x$$104.fields[3];
        const e$$41 = x$$104.fields[0];
        const dflt$$2 = x$$104.fields[2];
        const cases$$2 = x$$104.fields[1];
        const e$$42 = (0, _TastOps.typeEquiv)(cenv$$65.g, (0, _TastOps.tyOfExpr)(cenv$$65.g, e$$41), (0, _TcGlobals.TcGlobals$$get_bool_ty)(cenv$$65.g)) ? (0, _TastOps.copyExpr)(cenv$$65.g, new _TastOps.ValCopyFlag(0, "CloneAll"), e$$41) : e$$41;
        return OptimizeSwitch(cenv$$65, env$$82, e$$42, cases$$2, dflt$$2, m$$70);
      }

    default:
      {
        const n$$63 = x$$104.fields[1] | 0;
        const es$$3 = x$$104.fields[0];
        const patternInput$$59 = OptimizeExprsThenConsiderSplits(cenv$$65, env$$82, es$$3);
        return [new _tast.DecisionTree(1, "TDSuccess", patternInput$$59[0], n$$63), CombineValueInfosUnknown(patternInput$$59[1])];
      }
  }
}

function TryOptimizeDecisionTreeTest(cenv$$66, test, vinfo$$17) {
  const matchValue$$120 = [test, vinfo$$17];
  var $target$$218, c1$$7, c2$$7;

  if (matchValue$$120[0].tag === 0) {
    const activePatternResult50837 = $007CStripUnionCaseValue$007C_$007C(matchValue$$120[1]);

    if (activePatternResult50837 != null) {
      $target$$218 = 0;
      c1$$7 = matchValue$$120[0].fields[0];
      c2$$7 = activePatternResult50837[0];
    } else {
      $target$$218 = 1;
    }
  } else {
    $target$$218 = 1;
  }

  switch ($target$$218) {
    case 0:
      {
        return (0, _TcGlobals.TcGlobals$$unionCaseRefEq)(cenv$$66.g, c1$$7, c2$$7);
      }

    case 1:
      {
        var $target$$219, c1$$8, c2$$8;

        if (matchValue$$120[0].tag === 1) {
          $target$$219 = 0;
        } else if (matchValue$$120[0].tag === 2) {
          const activePatternResult50836 = $007CStripConstValue$007C_$007C(matchValue$$120[1]);

          if (activePatternResult50836 != null) {
            $target$$219 = 1;
            c1$$8 = matchValue$$120[0].fields[0];
            c2$$8 = activePatternResult50836;
          } else {
            $target$$219 = 2;
          }
        } else {
          $target$$219 = 2;
        }

        switch ($target$$219) {
          case 0:
            {
              return null;
            }

          case 1:
            {
              if ((0, _Util.equals)(c1$$8, new _tast.Const(17, "Zero")) ? true : (0, _Util.equals)(c2$$8, new _tast.Const(17, "Zero"))) {
                return null;
              } else {
                return (0, _Util.equals)(c1$$8, c2$$8);
              }
            }

          case 2:
            {
              var $target$$220, c2$$9;

              if (matchValue$$120[0].tag === 3) {
                const activePatternResult50835 = $007CStripConstValue$007C_$007C(matchValue$$120[1]);

                if (activePatternResult50835 != null) {
                  $target$$220 = 0;
                  c2$$9 = activePatternResult50835;
                } else {
                  $target$$220 = 1;
                }
              } else {
                $target$$220 = 1;
              }

              switch ($target$$220) {
                case 0:
                  {
                    return (0, _Util.equals)(c2$$9, new _tast.Const(17, "Zero"));
                  }

                case 1:
                  {
                    if (matchValue$$120[0].tag === 4) {
                      const _tgty1 = matchValue$$120[0].fields[1];
                      const _srcty1 = matchValue$$120[0].fields[0];
                      return null;
                    } else if (matchValue$$120[0].tag === 5) {
                      const _vrefOpt1 = matchValue$$120[0].fields[2];
                      return null;
                    } else {
                      return null;
                    }
                  }
              }
            }
        }
      }
  }
}

function OptimizeSwitch(cenv$$67, env$$83, e$$43, cases$$3, dflt$$3, m$$71) {
  const patternInput$$63 = OptimizeExpr(cenv$$67, env$$83, e$$43);
  let patternInput$$64;

  if (OptimizationSettings$$EliminateSwitch(cenv$$67.settings) ? !patternInput$$63[1].HasEffect : false) {
    const matchValue$$121 = (0, _List.tryFind)(function (_arg6) {
      var d2;

      if (d2 = _arg6.fields[0], (0, _Util.equals)(TryOptimizeDecisionTreeTest(cenv$$67, d2, patternInput$$63[1].Info), true)) {
        const d2$$1 = _arg6.fields[0];
        return true;
      } else {
        return false;
      }
    }, cases$$3);

    if (matchValue$$121 != null) {
      const case$ = matchValue$$121.fields[1];
      patternInput$$64 = [(0, _Types.L)(), case$];
    } else {
      patternInput$$64 = [(0, _List.filter)(function predicate$$8(_arg7) {
        var d2$$2;

        if (d2$$2 = _arg7.fields[0], (0, _Util.equals)(TryOptimizeDecisionTreeTest(cenv$$67, d2$$2, patternInput$$63[1].Info), false)) {
          const d2$$3 = _arg7.fields[0];
          return false;
        } else {
          return true;
        }
      }, cases$$3), dflt$$3];
    }
  } else {
    patternInput$$64 = [cases$$3, dflt$$3];
  }

  const matchValue$$122 = [patternInput$$64[0], patternInput$$64[1]];
  var $target$$221;

  if (matchValue$$122[0].tail == null) {
    if (matchValue$$122[1] != null) {
      $target$$221 = 0;
    } else {
      $target$$221 = 1;
    }
  } else {
    $target$$221 = 1;
  }

  switch ($target$$221) {
    case 0:
      {
        const case$$$1 = matchValue$$122[1];
        return OptimizeDecisionTree(cenv$$67, env$$83, m$$71, case$$$1);
      }

    case 1:
      {
        return OptimizeSwitchFallback(cenv$$67, env$$83, patternInput$$63[0], patternInput$$63[1], patternInput$$64[0], patternInput$$64[1], m$$71);
      }
  }
}

function OptimizeSwitchFallback(cenv$$68, env$$84, e$0027$$7, einfo$$11, cases$$5, dflt$$5, m$$72) {
  const patternInput$$66 = (0, _List.unzip)((0, _List.map)(function (_arg3$$1) {
    const e$$44 = _arg3$$1.fields[1];
    const discrim = _arg3$$1.fields[0];
    const patternInput$$65 = OptimizeDecisionTree(cenv$$68, env$$84, m$$72, e$$44);
    return [new _tast.DecisionTreeCase(0, "TCase", discrim, patternInput$$65[0]), patternInput$$65[1]];
  }, cases$$5));
  let patternInput$$68;

  if (dflt$$5 != null) {
    const df = dflt$$5;
    const patternInput$$67 = OptimizeDecisionTree(cenv$$68, env$$84, m$$72, df);
    patternInput$$68 = [patternInput$$67[0], (0, _Types.L)(patternInput$$67[1], (0, _Types.L)())];
  } else {
    patternInput$$68 = [null, (0, _Types.L)()];
  }

  const size$$2 = ((0, _List.length)(patternInput$$68[1]) + (0, _List.length)(patternInput$$66[1])) * 2 | 0;
  const info$$15 = CombineValueInfosUnknown((0, _List.append)((0, _Types.L)(einfo$$11, patternInput$$66[1]), patternInput$$68[1]));
  const info$$16 = new Summary$00601(info$$15.Info, info$$15.FunctionSize + size$$2, info$$15.TotalSize + size$$2, info$$15.HasEffect, info$$15.MightMakeCriticalTailcall);
  return [new _tast.DecisionTree(0, "TDSwitch", e$0027$$7, patternInput$$66[0], patternInput$$68[0], m$$72), info$$16];
}

function OptimizeBinding(cenv$$69, isRec, env$$85, _arg4) {
  var matchValue$$123, tcref$$17, matchValue$$124, mbrTyconRef, copyOfStruct$$6, nvref;
  const vref$$50 = _arg4.fields[0];
  const spBind$$2 = _arg4.fields[2];
  const expr$$34 = _arg4.fields[1];

  try {
    const env$$86 = isRec ? new IncrementalOptimizationEnv(env$$85.latestBoundId, env$$85.dontInline, (0, _TastOps.ValMap$00601$$Add)(env$$85.dontSplitVars, vref$$50, null), env$$85.inLoop, env$$85.functionVal, env$$85.typarInfos, env$$85.localExternalVals, env$$85.globalModuleInfos) : env$$85;
    let patternInput$$70;
    const env$$87 = ((0, _tast.Val$$get_IsCompilerGenerated)(vref$$50) ? env$$86.latestBoundId != null : false) ? env$$86 : new IncrementalOptimizationEnv((0, _tast.Val$$get_Id)(vref$$50), env$$86.dontInline, env$$86.dontSplitVars, env$$86.inLoop, env$$86.functionVal, env$$86.typarInfos, env$$86.localExternalVals, env$$86.globalModuleInfos);
    const cenv$$70 = (0, _Util.equals)((0, _tast.Val$$get_InlineInfo)(vref$$50), new _tast.ValInline(0, "PseudoVal")) ? new cenv(cenv$$69.g, cenv$$69.TcVal, cenv$$69.amap, false, cenv$$69.scope, cenv$$69.localInternalVals, cenv$$69.settings, cenv$$69.emitTailcalls, cenv$$69.casApplied) : cenv$$69;
    const arityInfo = (0, _TastOps.InferArityOfExprBinding)(cenv$$70.g, new _TastOps.AllowTypeDirectedDetupling(1, "No"), vref$$50, expr$$34);
    const patternInput$$69 = OptimizeLambdas(vref$$50, cenv$$70, env$$87, arityInfo, expr$$34, (0, _tast.Val$$get_Type)(vref$$50));
    const size$$3 = 1;
    patternInput$$70 = [patternInput$$69[0], new Summary$00601(patternInput$$69[1].Info, patternInput$$69[1].FunctionSize + size$$3, patternInput$$69[1].TotalSize + size$$3, patternInput$$69[1].HasEffect, patternInput$$69[1].MightMakeCriticalTailcall)];

    const cut = function cut(ivalue$$4) {
      var $target$$222;

      switch (ivalue$$4.tag) {
        case 2:
          $target$$222 = 1;
          break;

        case 3:
          $target$$222 = 2;
          break;

        case 4:
          $target$$222 = 3;
          break;

        case 5:
          $target$$222 = 4;
          break;

        case 0:
        case 6:
        case 8:
          $target$$222 = 5;
          break;

        case 1:
          $target$$222 = 6;
          break;

        default:
          $target$$222 = 0;
      }

      switch ($target$$222) {
        case 0:
          {
            const size$$4 = ivalue$$4.fields[2] | 0;
            const body$$9 = ivalue$$4.fields[3];
            const arities$$4 = ivalue$$4.fields[1] | 0;

            if (size$$4 > cenv$$69.settings.lambdaInlineThreshold + arities$$4 + 2) {
              return new ExprValueInfo(0, "UnknownValue");
            } else {
              const fvs$$11 = (0, _TastOps.freeInExpr)(_TastOps.CollectLocals, body$$9);

              if (fvs$$11.UsesMethodLocalConstructs) {
                return new ExprValueInfo(0, "UnknownValue");
              } else {
                return ivalue$$4;
              }
            }
          }

        case 1:
          {
            const x$$105 = ivalue$$4.fields[1];
            const v$$91 = ivalue$$4.fields[0];
            return new ExprValueInfo(2, "ValValue", v$$91, cut(x$$105));
          }

        case 2:
          {
            const a$$217 = ivalue$$4.fields[0];
            return new ExprValueInfo(3, "TupleValue", (0, _Array.map)(cut, a$$217, Array));
          }

        case 3:
          {
            const tcref$$16 = ivalue$$4.fields[0];
            const a$$218 = ivalue$$4.fields[1];
            return new ExprValueInfo(4, "RecdValue", tcref$$16, (0, _Array.map)(cut, a$$218, Array));
          }

        case 4:
          {
            const b$$76 = ivalue$$4.fields[1];
            const a$$219 = ivalue$$4.fields[0];
            return new ExprValueInfo(5, "UnionCaseValue", a$$219, (0, _Array.map)(cut, b$$76, Array));
          }

        case 5:
          {
            return ivalue$$4;
          }

        case 6:
          {
            const a$$220 = ivalue$$4.fields[1];
            return MakeSizedValueInfo(cut(a$$220));
          }
      }
    };

    const einfo$$16 = (0, _tast.Val$$get_MustInline)(vref$$50) ? patternInput$$70[1] : new Summary$00601(cut(patternInput$$70[1].Info), patternInput$$70[1].FunctionSize, patternInput$$70[1].TotalSize, patternInput$$70[1].HasEffect, patternInput$$70[1].MightMakeCriticalTailcall);
    const einfo$$17 = (((((!(0, _tast.Val$$get_MustInline)(vref$$50) ? !OptimizationSettings$$KeepOptimizationValues(cenv$$69.settings) : false) ? true : (0, _TastOps.IsCompiledAsStaticPropertyWithField)(cenv$$69.g, vref$$50)) ? true : (0, _Util.equals)((0, _tast.Val$$get_InlineInfo)(vref$$50), new _tast.ValInline(3, "Never"))) ? true : (matchValue$$123 = (0, _tast.Val$$get_DeclaringEntity)(vref$$50), matchValue$$123.tag === 1 ? false : (tcref$$17 = matchValue$$123.fields[0], (matchValue$$124 = (0, _TcGlobals.TcGlobals$$get_system_MarshalByRefObject_tcref)(cenv$$69.g), matchValue$$124 != null ? (mbrTyconRef = matchValue$$124, (copyOfStruct$$6 = (0, _tast.EntityRef$$get_TryDeref)(mbrTyconRef), (0, _illib.ValueOption$00601$$get_IsSome)(copyOfStruct$$6)) ? (null, (0, _infos.ExistsSameHeadTypeInHierarchy)(cenv$$69.g, cenv$$69.amap, (0, _tast.Val$$get_Range)(vref$$50), (0, _TastOps.generalizedTyconRef)(tcref$$17), (0, _TcGlobals.TcGlobals$$get_system_MarshalByRefObject_ty)(cenv$$69.g))) : false) : false)))) ? true : (nvref = (0, _tast.mkLocalValRef)(vref$$50), (0, _TcGlobals.TcGlobals$$get_compilingFslib)(cenv$$69.g) ? ((((((((((((((((0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_seq_vref)(cenv$$69.g)) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_seq_generated_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_seq_finally_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_seq_using_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_seq_append_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_seq_empty_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_seq_delay_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_seq_singleton_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_seq_map_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_seq_collect_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_reference_equality_inner_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_generic_comparison_inner_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_generic_comparison_withc_inner_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_generic_equality_er_inner_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_generic_equality_per_inner_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_generic_equality_withc_inner_vref)(cenv$$69.g))) ? true : (0, _TastOps.valRefEq)(cenv$$69.g, nvref, (0, _TcGlobals.TcGlobals$$get_generic_hash_inner_vref)(cenv$$69.g)) : false)) ? new Summary$00601(new ExprValueInfo(0, "UnknownValue"), einfo$$16.FunctionSize, einfo$$16.TotalSize, einfo$$16.HasEffect, einfo$$16.MightMakeCriticalTailcall) : einfo$$16;

    if ((0, _tast.Val$$get_MustInline)(vref$$50) ? IsPartialExprVal(einfo$$17.Info) : false) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError("the mustinline value '" + (0, _tast.Val$$get_LogicalName)(vref$$50) + "' was not inferred to have a known value", (0, _tast.Val$$get_Range)(vref$$50)));
    }

    const env$$88 = BindInternalLocalVal(cenv$$69, vref$$50, mkValInfo(einfo$$17, vref$$50), env$$86);
    return [[new _tast.Binding(0, "TBind", vref$$50, patternInput$$70[0], spBind$$2), einfo$$17], env$$88];
  } catch (exn) {
    (0, _ErrorLogger.errorRecovery)(exn, (0, _tast.Val$$get_Range)(vref$$50));
    throw new _ErrorLogger.ReportedError(exn);
  }
}

function OptimizeBindings(cenv$$71, isRec$$1, env$$89, xs) {
  return (0, _List.mapFold)(function (env$$90, arg30$0040$$2) {
    return OptimizeBinding(cenv$$71, isRec$$1, env$$90, arg30$0040$$2);
  }, env$$89, xs);
}

function OptimizeModuleExpr(cenv$$72, env$$91, x$$106) {
  const mty = x$$106.fields[0];
  const m$$73 = x$$106.fields[2];
  const def = x$$106.fields[1];
  const patternInput$$71 = OptimizeModuleDef(cenv$$72, env$$91, (0, _Types.L)(), def);
  const info$$17 = patternInput$$71[0][1];
  const def$$1 = patternInput$$71[0][0];
  const bindInfosColl = patternInput$$71[1][1];
  const _env$$4 = patternInput$$71[1][0];
  const bindInfosColl$$1 = (0, _List.concat)(bindInfosColl);
  const rpi = (0, _TastOps.ComputeRemappingFromImplementationToSignature)(cenv$$72.g, def$$1, mty);
  const hidden$$1 = rpi[1];
  const _renaming = rpi[0];
  let def$$2;

  if (!OptimizationSettings$$localOpt(cenv$$72.settings)) {
    def$$2 = def$$1;
  } else {
    const fvs$$12 = (0, _TastOps.freeInModuleOrNamespace)(_TastOps.CollectLocals, def$$1);
    const dead = (0, _List.filter)(function predicate$$9(tupledArg$$14) {
      if (!ValueIsUsedOrHasEffect(cenv$$72, function () {
        return fvs$$12.FreeLocals;
      }, tupledArg$$14[0], tupledArg$$14[1]) ? (0, _TaggedCollections.Set$00602$$Contains$$2B595)(hidden$$1.mhiVals, (0, _tast.Binding$$get_Var)(tupledArg$$14[0])) : false) {
        return !(0, _TastOps.IsCompiledAsStaticProperty)(cenv$$72.g, (0, _tast.Binding$$get_Var)(tupledArg$$14[0]));
      } else {
        return false;
      }
    }, bindInfosColl$$1);
    const deadSet = (0, _zset.ZsetModule$$$addList)((0, _List.map)(function mapping$$14(tupledArg$$15) {
      return (0, _tast.Binding$$get_Var)(tupledArg$$15[0]);
    }, dead), (0, _zset.ZsetModule$$$empty)(_TastOps.valOrder));

    const elimModTy = function elimModTy(mtyp) {
      const mty$$1 = (0, _tast.ModuleOrNamespaceType$$$$002Ector$$Z36FEFB0E)((0, _tast.ModuleOrNamespaceType$$get_ModuleOrNamespaceKind)(mtyp), (0, _QueueList.QueueListModule$$$filter)(function f$$16($arg$$52) {
        return !(0, _zset.ZsetModule$$$memberOf)(deadSet, $arg$$52);
      }, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)(mtyp)), (0, _tast.ModuleOrNamespaceType$$get_AllEntities)(mtyp));
      (0, _List.iterate)(elimModSpec, (0, _tast.ModuleOrNamespaceType$$get_ModuleAndNamespaceDefinitions)(mtyp));
      return mty$$1;
    };

    const elimModSpec = function elimModSpec(mspec) {
      const mtyp$$1 = elimModTy((0, _tast.Entity$$get_ModuleOrNamespaceType)(mspec));
      mspec.entity_modul_contents = new _tast.MaybeLazy$00601(0, "Strict", mtyp$$1);
    };

    const elimModDef = function elimModDef(x$$108) {
      switch (x$$108.tag) {
        case 2:
          {
            const m$$75 = x$$108.fields[1];
            const bind$$11 = x$$108.fields[0];

            if ((0, _zset.ZsetModule$$$contains)((0, _tast.Binding$$get_Var)(bind$$11), deadSet)) {
              return new _tast.ModuleOrNamespaceExpr(4, "TMDefRec", false, (0, _Types.L)(), (0, _Types.L)(), m$$75);
            } else {
              return x$$108;
            }
          }

        case 3:
          {
            return x$$108;
          }

        case 1:
          {
            const defs = x$$108.fields[0];
            return new _tast.ModuleOrNamespaceExpr(1, "TMDefs", (0, _List.map)(elimModDef, defs));
          }

        case 0:
          {
            return x$$108;
          }

        default:
          {
            const tycons = x$$108.fields[1];
            const mbinds = x$$108.fields[2];
            const m$$74 = x$$108.fields[3];
            const isRec$$2 = x$$108.fields[0];
            const mbinds$$1 = (0, _List.choose)(elimModuleBinding, mbinds);
            return new _tast.ModuleOrNamespaceExpr(4, "TMDefRec", isRec$$2, tycons, mbinds$$1, m$$74);
          }
      }
    };

    const elimModuleBinding = function elimModuleBinding(x$$109) {
      if (x$$109.tag === 1) {
        const mspec$$1 = x$$109.fields[0];
        const d = x$$109.fields[1];
        elimModSpec(mspec$$1);
        return new _tast.ModuleOrNamespaceBinding(1, "Module", mspec$$1, elimModDef(d));
      } else {
        const bind$$12 = x$$109.fields[0];

        if ((0, _zset.ZsetModule$$$memberOf)(deadSet, (0, _tast.Binding$$get_Var)(bind$$12))) {
          return null;
        } else {
          return x$$109;
        }
      }
    };

    def$$2 = elimModDef(def$$1);
  }

  const info$$18 = AbstractAndRemapModulInfo("defs", cenv$$72.g, m$$73, rpi[0], rpi[1], info$$17);
  return [new _tast.ModuleOrNamespaceExprWithSig(0, "ModuleOrNamespaceExprWithSig", mty, def$$2, m$$73), info$$18];
}

function mkValBind(bind$$13, info$$19) {
  return [(0, _tast.mkLocalValRef)((0, _tast.Binding$$get_Var)(bind$$13)), info$$19];
}

function OptimizeModuleDef(cenv$$73, env$$92, bindInfosColl$$2, x$$110) {
  switch (x$$110.tag) {
    case 0:
      {
        const mexpr = x$$110.fields[0];
        const patternInput$$74 = OptimizeModuleExpr(cenv$$73, env$$92, mexpr);
        const env$$96 = BindValsInModuleOrNamespace(cenv$$73, patternInput$$74[1], env$$92);
        return [[new _tast.ModuleOrNamespaceExpr(0, "TMAbstract", patternInput$$74[0]), patternInput$$74[1]], [env$$96, bindInfosColl$$2]];
      }

    case 2:
      {
        const m$$77 = x$$110.fields[1];
        const bind$$15 = x$$110.fields[0];
        const patternInput$$75 = OptimizeBinding(cenv$$73, false, env$$92, bind$$15);
        const binfo$$5 = patternInput$$75[0][1];
        const bind$0027$$1 = patternInput$$75[0][0];
        return [[new _tast.ModuleOrNamespaceExpr(2, "TMDefLet", bind$0027$$1, m$$77), (0, _illib.notlazy)(new ModuleInfo(ValInfos$$$$002Ector$$2FE4CE46([mkValBind(bind$$15, mkValInfo(binfo$$5, (0, _tast.Binding$$get_Var)(bind$$15)))]), (0, _illib.NameMapModule$$$empty)()))], [patternInput$$75[1], (0, _Types.L)((0, _Types.L)(patternInput$$75[0], (0, _Types.L)()), bindInfosColl$$2)]];
      }

    case 3:
      {
        const m$$78 = x$$110.fields[1];
        const e$$45 = x$$110.fields[0];
        const patternInput$$76 = OptimizeExpr(cenv$$73, env$$92, e$$45);
        return [[new _tast.ModuleOrNamespaceExpr(3, "TMDefDo", patternInput$$76[0], m$$78), EmptyModuleInfo], [env$$92, bindInfosColl$$2]];
      }

    case 1:
      {
        const defs$$1 = x$$110.fields[0];
        const patternInput$$77 = OptimizeModuleDefs(cenv$$73, env$$92, bindInfosColl$$2, defs$$1);
        const info$$21 = patternInput$$77[0][1];
        const env$$98 = patternInput$$77[1][0];
        const defs$$2 = patternInput$$77[0][0];
        const bindInfosColl$$4 = patternInput$$77[1][1];
        return [[new _tast.ModuleOrNamespaceExpr(1, "TMDefs", defs$$2), info$$21], [env$$98, bindInfosColl$$4]];
      }

    default:
      {
        const tycons$$1 = x$$110.fields[1];
        const mbinds$$2 = x$$110.fields[2];
        const m$$76 = x$$110.fields[3];
        const isRec$$3 = x$$110.fields[0];
        let env$$94;

        if (isRec$$3) {
          cenv$$73;
          (0, _TastOps.allValsOfModDef)(x$$110);
          env$$94 = env$$92;
        } else {
          env$$94 = env$$92;
        }

        const patternInput$$72 = OptimizeModuleBindings(cenv$$73, env$$94, bindInfosColl$$2, mbinds$$2);
        const env$$95 = patternInput$$72[1][0];
        const bindInfosColl$$3 = patternInput$$72[1][1];
        const patternInput$$73 = (0, _List.unzip)(patternInput$$72[0]);
        const binds$$5 = (0, _List.choose)(function chooser$$1(_arg8) {
          if (_arg8.tag === 0) {
            const x$$111 = _arg8.fields[0][0];
            return x$$111;
          } else {
            return null;
          }
        }, patternInput$$73[1]);
        const binfos = (0, _List.choose)(function chooser$$2(_arg9) {
          if (_arg9.tag === 0) {
            const x$$112 = _arg9.fields[0][1];
            return x$$112;
          } else {
            return null;
          }
        }, patternInput$$73[1]);
        const minfos$$2 = (0, _List.choose)(function chooser$$3(_arg10) {
          if (_arg10.tag === 1) {
            const x$$113 = _arg10.fields[0];
            return x$$113;
          } else {
            return null;
          }
        }, patternInput$$73[1]);
        return [[new _tast.ModuleOrNamespaceExpr(4, "TMDefRec", isRec$$3, tycons$$1, patternInput$$73[0], m$$76), (0, _illib.notlazy)(new ModuleInfo(ValInfos$$$$002Ector$$2FE4CE46((0, _List.map2)(function (bind$$14, binfo$$4) {
          return mkValBind(bind$$14, mkValInfo(binfo$$4, (0, _tast.Binding$$get_Var)(bind$$14)));
        }, binds$$5, binfos)), (0, _illib.NameMapModule$$$ofList)(minfos$$2)))], [env$$95, bindInfosColl$$3]];
      }
  }
}

function OptimizeModuleBindings(cenv$$75, env$$99, bindInfosColl$$5, xs$$1) {
  return (0, _List.mapFold)(function (tupledArg$$16, x$$114) {
    return OptimizeModuleBinding(cenv$$75, tupledArg$$16[0], tupledArg$$16[1], x$$114);
  }, [env$$99, bindInfosColl$$5], xs$$1);
}

function OptimizeModuleBinding(cenv$$76, env$$101, bindInfosColl$$7, x$$115) {
  if (x$$115.tag === 1) {
    const mspec$$2 = x$$115.fields[0];
    const def$$3 = x$$115.fields[1];
    const id$$2 = (0, _tast.Entity$$get_Id)(mspec$$2);
    const patternInput$$79 = OptimizeModuleDef(cenv$$76, env$$101, bindInfosColl$$7, def$$3);
    const info$$22 = patternInput$$79[0][1];
    const def$$4 = patternInput$$79[0][0];
    const bindInfosColl$$8 = patternInput$$79[1][1];
    const env$$103 = BindValsInModuleOrNamespace(cenv$$76, info$$22, env$$101);
    return [[new _tast.ModuleOrNamespaceBinding(1, "Module", mspec$$2, def$$4), new _Option.Choice(1, "Choice2Of2", [(0, _ast.Ident$$get_idText)(id$$2), info$$22])], [env$$103, bindInfosColl$$8]];
  } else {
    const bind$$16 = x$$115.fields[0];
    const patternInput$$78 = OptimizeBinding(cenv$$76, true, env$$101, bind$$16);
    const binfo$$6 = patternInput$$78[0][1];
    const bind$0027$$2 = patternInput$$78[0][0];
    return [[new _tast.ModuleOrNamespaceBinding(0, "Binding", bind$0027$$2), new _Option.Choice(0, "Choice1Of2", [bind$0027$$2, binfo$$6])], [patternInput$$78[1], (0, _Types.L)((0, _Types.L)(patternInput$$78[0], (0, _Types.L)()), bindInfosColl$$7)]];
  }
}

function OptimizeModuleDefs(cenv$$77, env$$104, bindInfosColl$$9, defs$$3) {
  const patternInput$$80 = (0, _List.mapFold)(function (tupledArg$$17, x$$116) {
    return OptimizeModuleDef(cenv$$77, tupledArg$$17[0], tupledArg$$17[1], x$$116);
  }, [env$$104, bindInfosColl$$9], defs$$3);
  const env$$106 = patternInput$$80[1][0];
  const bindInfosColl$$11 = patternInput$$80[1][1];
  const patternInput$$81 = (0, _List.unzip)(patternInput$$80[0]);
  return [[patternInput$$81[0], UnionOptimizationInfos(patternInput$$81[1])], [env$$106, bindInfosColl$$11]];
}

function OptimizeImplFileInternal(cenv$$78, env$$107, isIncrementalFragment, hidden$$3, _arg5) {
  var mty$$2, m$$79, def$$5;
  const qname = _arg5.fields[0];
  const pragmas = _arg5.fields[1];
  const mexpr$$2 = _arg5.fields[2];
  const isScript = _arg5.fields[4];
  const hasExplicitEntryPoint = _arg5.fields[3];
  let patternInput$$84;

  if (mty$$2 = mexpr$$2.fields[0], (m$$79 = mexpr$$2.fields[2], (def$$5 = mexpr$$2.fields[1], isIncrementalFragment))) {
    const mty$$3 = mexpr$$2.fields[0];
    const m$$80 = mexpr$$2.fields[2];
    const def$$6 = mexpr$$2.fields[1];
    const patternInput$$82 = OptimizeModuleDef(cenv$$78, env$$107, (0, _Types.L)(), def$$6);
    const minfo$$1 = patternInput$$82[0][1];
    const env$$108 = patternInput$$82[1][0];
    const def$$7 = patternInput$$82[0][0];
    const _bindInfosColl = patternInput$$82[1][1];
    patternInput$$84 = [env$$108, new _tast.ModuleOrNamespaceExprWithSig(0, "ModuleOrNamespaceExprWithSig", mty$$3, def$$7, m$$80), minfo$$1];
  } else {
    const patternInput$$83 = OptimizeModuleExpr(cenv$$78, env$$107, mexpr$$2);
    const env$$109 = BindValsInModuleOrNamespace(cenv$$78, patternInput$$83[1], env$$107);
    const env$$110 = new IncrementalOptimizationEnv(env$$109.latestBoundId, env$$109.dontInline, env$$109.dontSplitVars, env$$109.inLoop, env$$109.functionVal, env$$109.typarInfos, (0, _illib.Map$00602$002EMarkAsCollapsible)(env$$109.localExternalVals), env$$109.globalModuleInfos);
    patternInput$$84 = [env$$110, patternInput$$83[0], patternInput$$83[1]];
  }

  const hidden$$4 = (0, _TastOps.ComputeHidingInfoAtAssemblyBoundary)((0, _tast.ModuleOrNamespaceExprWithSig$$get_Type)(mexpr$$2), hidden$$3);
  const minfo$$4 = AbstractLazyModulInfoByHiding(true, hidden$$4)(patternInput$$84[2]);
  return [patternInput$$84[0], new _tast.TypedImplFile(0, "TImplFile", qname, pragmas, patternInput$$84[1], hasExplicitEntryPoint, isScript), minfo$$4, hidden$$4];
}

function OptimizeImplFile(settings, ccu$$2, tcGlobals, tcVal, importMap, optEnv, isIncrementalFragment$$1, emitTailcalls, hidden$$5, mimpls) {
  const cenv$$79 = new cenv(tcGlobals, tcVal, importMap, true, ccu$$2, (0, _Map.createMutable)([], {
    Compare: _Long.compare
  }), settings, emitTailcalls, (0, _Map.createMutable)([], {
    Compare: _Long.compare
  }));
  const results = OptimizeImplFileInternal(cenv$$79, optEnv, isIncrementalFragment$$1, hidden$$5, mimpls);
  const optEnvNew = results[0];

  const optimizeDuringCodeGen = function optimizeDuringCodeGen(expr$$35) {
    return OptimizeExpr(cenv$$79, optEnvNew, expr$$35)[0];
  };

  return [results, optimizeDuringCodeGen];
}

function p_ExprValueInfo(x$$117, st) {
  switch (x$$117.tag) {
    case 0:
      {
        (0, _TastPickle.p_byte)(1, st);
        break;
      }

    case 2:
      {
        const b$$78 = x$$117.fields[1];
        const a$$222 = x$$117.fields[0];
        (0, _TastPickle.p_byte)(2, st);
        (0, _TastPickle.p_vref)("optval")(a$$222)(st);
        p_ExprValueInfo(b$$78, st);
        break;
      }

    case 3:
      {
        const a$$224 = x$$117.fields[0];
        (0, _TastPickle.p_byte)(3, st);
        (0, _TastPickle.p_array)(p_ExprValueInfo)(a$$224)(st);
        break;
      }

    case 5:
      {
        const b$$80 = x$$117.fields[1];
        const a$$225 = x$$117.fields[0];
        (0, _TastPickle.p_byte)(4, st);
        (0, _TastPickle.p_ucref)(a$$225)(st);
        (0, _TastPickle.p_array)(p_ExprValueInfo)(b$$80)(st);
        break;
      }

    case 7:
      {
        const e$$47 = x$$117.fields[4];
        const d$$1 = x$$117.fields[3];
        const c$$13 = x$$117.fields[2] | 0;
        const b$$82 = x$$117.fields[1] | 0;
        (0, _TastPickle.p_byte)(5, st);
        (0, _TastPickle.p_int)(b$$82, st);
        (0, _TastPickle.p_int)(c$$13, st);
        (0, _TastPickle.p_expr)(d$$1)(st);
        (0, _TastPickle.p_ty)(e$$47)(st);
        break;
      }

    case 8:
      {
        const b$$84 = x$$117.fields[1];
        const a$$228 = x$$117.fields[0] | 0;
        (0, _TastPickle.p_byte)(6, st);
        (0, _TastPickle.p_int)(a$$228, st);
        (0, _TastPickle.p_expr)(b$$84)(st);
        break;
      }

    case 4:
      {
        const tcref$$18 = x$$117.fields[0];
        const a$$230 = x$$117.fields[1];
        (0, _TastPickle.p_byte)(7, st);
        (0, _TastPickle.p_tcref)("opt data")(tcref$$18)(st);
        (0, _TastPickle.p_array)(p_ExprValueInfo)(a$$230)(st);
        break;
      }

    case 1:
      {
        const a$$232 = x$$117.fields[1];

        const _adepth = x$$117.fields[0] | 0;

        p_ExprValueInfo(a$$232, st);
        break;
      }

    default:
      {
        const ty$$85 = x$$117.fields[1];
        const c$$12 = x$$117.fields[0];
        (0, _TastPickle.p_byte)(0, st);
        (0, _TastPickle.p_const)(c$$12)(st);
        (0, _TastPickle.p_ty)(ty$$85)(st);
      }
  }
}

function p_ValInfo(v$$92, st$$11) {
  p_ExprValueInfo(v$$92.ValExprInfo, st$$11);
  (0, _TastPickle.p_bool)(v$$92.ValMakesNoCriticalTailcalls, st$$11);
}

function p_ModuleInfo(x$$123, st$$14) {
  var tupledArg$$26;
  (tupledArg$$26 = [(0, _Array.ofSeq)(ValInfos$$get_Entries(x$$123.ValInfos), Array), x$$123.ModuleOrNamespaceInfos], function (st$$18) {
    (0, _TastPickle.p_array)(function (tupledArg$$25, st$$16) {
      (0, _TastPickle.p_vref)("opttab")(tupledArg$$25[0])(st$$16);
      p_ValInfo(tupledArg$$25[1], st$$16);
    })(tupledArg$$26[0])(st$$18);
    (0, _TastPickle.p_namemap)(p_LazyModuleInfo)(tupledArg$$26[1])(st$$18);
  })(st$$14);
}

function p_LazyModuleInfo(x$$125, st$$19) {
  (0, _TastPickle.p_lazy)(p_ModuleInfo)(x$$125)(st$$19);
}

function p_CcuOptimizationInfo(x$$127, st$$21) {
  p_LazyModuleInfo(x$$127, st$$21);
}

function u_ExprInfo(st$$22) {
  const loop = function loop(st$$23) {
    const tag = (0, _TastPickle.u_byte)(st$$23) | 0;

    switch (tag) {
      case 0:
        {
          let tupledArg$$27;
          const a$$236 = (0, _TastPickle.u_const)(st$$23);
          const b$$90 = (0, _TastPickle.u_ty)(st$$23);
          tupledArg$$27 = [a$$236, b$$90];
          return new ExprValueInfo(6, "ConstValue", tupledArg$$27[0], tupledArg$$27[1]);
        }

      case 1:
        {
          return new ExprValueInfo(0, "UnknownValue");
        }

      case 2:
        {
          let tupledArg$$28;
          const a$$237 = (0, _TastPickle.u_vref)(st$$23);
          const b$$91 = loop(st$$23);
          tupledArg$$28 = [a$$237, b$$91];
          return new ExprValueInfo(2, "ValValue", tupledArg$$28[0], tupledArg$$28[1]);
        }

      case 3:
        {
          return new ExprValueInfo(3, "TupleValue", (0, _TastPickle.u_array)(loop)(st$$23));
        }

      case 4:
        {
          let tupledArg$$29;
          const a$$240 = (0, _TastPickle.u_ucref)(st$$23);
          const b$$93 = (0, _TastPickle.u_array)(loop)(st$$23);
          tupledArg$$29 = [a$$240, b$$93];
          return new ExprValueInfo(5, "UnionCaseValue", tupledArg$$29[0], tupledArg$$29[1]);
        }

      case 5:
        {
          let tupledArg$$30;
          const a$$242 = (0, _TastPickle.u_int)(st$$23) | 0;
          const b$$95 = (0, _TastPickle.u_int)(st$$23) | 0;
          const c$$16 = (0, _TastPickle.u_expr)(st$$23);
          const d$$3 = (0, _TastPickle.u_ty)(st$$23);
          tupledArg$$30 = [a$$242, b$$95, c$$16, d$$3];
          return new ExprValueInfo(7, "CurriedLambdaValue", (0, _tast.newUnique)(), tupledArg$$30[0], tupledArg$$30[1], tupledArg$$30[2], tupledArg$$30[3]);
        }

      case 6:
        {
          let tupledArg$$31;
          const a$$243 = (0, _TastPickle.u_int)(st$$23) | 0;
          const b$$97 = (0, _TastPickle.u_expr)(st$$23);
          tupledArg$$31 = [a$$243, b$$97];
          return new ExprValueInfo(8, "ConstExprValue", tupledArg$$31[0], tupledArg$$31[1]);
        }

      case 7:
        {
          let tupledArg$$32;
          const a$$245 = (0, _TastPickle.u_tcref)(st$$23);
          const b$$99 = (0, _TastPickle.u_array)(loop)(st$$23);
          tupledArg$$32 = [a$$245, b$$99];
          return new ExprValueInfo(4, "RecdValue", tupledArg$$32[0], tupledArg$$32[1]);
        }

      default:
        {
          throw new Error("loop");
        }
    }
  };

  return MakeSizedValueInfo(loop(st$$22));
}

function u_ValInfo(st$$30) {
  let patternInput$$85;
  const a$$247 = u_ExprInfo(st$$30);
  const b$$101 = (0, _TastPickle.u_bool)(st$$30);
  patternInput$$85 = [a$$247, b$$101];
  return new ValInfo(patternInput$$85[1], patternInput$$85[0]);
}

function u_ModuleInfo(st$$33) {
  let patternInput$$86;
  const a$$250 = (0, _TastPickle.u_array)(function (st$$35) {
    const a$$249 = (0, _TastPickle.u_vref)(st$$35);
    const b$$103 = u_ValInfo(st$$35);
    return [a$$249, b$$103];
  })(st$$33);
  const b$$104 = (0, _TastPickle.u_namemap)(u_LazyModuleInfo)(st$$33);
  patternInput$$86 = [a$$250, b$$104];
  return new ModuleInfo(ValInfos$$$$002Ector$$2FE4CE46(patternInput$$86[0]), patternInput$$86[1]);
}

function u_LazyModuleInfo(st$$38) {
  return (0, _TastPickle.u_lazy)(u_ModuleInfo)(st$$38);
}

function u_CcuOptimizationInfo(st$$40) {
  return u_LazyModuleInfo(st$$40);
}