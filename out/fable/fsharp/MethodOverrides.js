"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverrideInfo$$get_CanImplement = OverrideInfo$$get_CanImplement;
exports.OverrideInfo$$get_BoundingTyconRef = OverrideInfo$$get_BoundingTyconRef;
exports.OverrideInfo$$get_LogicalName = OverrideInfo$$get_LogicalName;
exports.OverrideInfo$$get_Range = OverrideInfo$$get_Range;
exports.OverrideInfo$$get_IsFakeEventProperty = OverrideInfo$$get_IsFakeEventProperty;
exports.OverrideInfo$$get_ArgTypes = OverrideInfo$$get_ArgTypes;
exports.OverrideInfo$$get_ReturnType = OverrideInfo$$get_ReturnType;
exports.OverrideInfo$$get_IsCompilerGenerated = OverrideInfo$$get_IsCompilerGenerated;
exports.DispatchSlotChecking$$$PrintOverrideToBuffer = DispatchSlotChecking$$$PrintOverrideToBuffer;
exports.DispatchSlotChecking$$$PrintMethInfoSigToBuffer = DispatchSlotChecking$$$PrintMethInfoSigToBuffer;
exports.DispatchSlotChecking$$$FormatOverride = DispatchSlotChecking$$$FormatOverride;
exports.DispatchSlotChecking$$$FormatMethInfoSig = DispatchSlotChecking$$$FormatMethInfoSig;
exports.DispatchSlotChecking$$$GetInheritedMemberOverrideInfo = DispatchSlotChecking$$$GetInheritedMemberOverrideInfo;
exports.DispatchSlotChecking$$$GetTypeMemberOverrideInfo = DispatchSlotChecking$$$GetTypeMemberOverrideInfo;
exports.DispatchSlotChecking$$$GetObjectExprOverrideInfo = DispatchSlotChecking$$$GetObjectExprOverrideInfo;
exports.DispatchSlotChecking$$$IsNameMatch = DispatchSlotChecking$$$IsNameMatch;
exports.DispatchSlotChecking$$$IsImplMatch = DispatchSlotChecking$$$IsImplMatch;
exports.DispatchSlotChecking$$$IsTyparKindMatch = DispatchSlotChecking$$$IsTyparKindMatch;
exports.DispatchSlotChecking$$$IsPartialMatch = DispatchSlotChecking$$$IsPartialMatch;
exports.DispatchSlotChecking$$$ReverseTyparRenaming = DispatchSlotChecking$$$ReverseTyparRenaming;
exports.DispatchSlotChecking$$$ComposeTyparInsts = DispatchSlotChecking$$$ComposeTyparInsts;
exports.DispatchSlotChecking$$$IsExactMatch = DispatchSlotChecking$$$IsExactMatch;
exports.DispatchSlotChecking$$$OverrideImplementsDispatchSlot = DispatchSlotChecking$$$OverrideImplementsDispatchSlot;
exports.DispatchSlotChecking$$$DispatchSlotIsAlreadyImplemented = DispatchSlotChecking$$$DispatchSlotIsAlreadyImplemented;
exports.DispatchSlotChecking$$$CheckDispatchSlotsAreImplemented = DispatchSlotChecking$$$CheckDispatchSlotsAreImplemented;
exports.DispatchSlotChecking$$$CheckOverridesAreAllUsedOnce = DispatchSlotChecking$$$CheckOverridesAreAllUsedOnce;
exports.DispatchSlotChecking$$$GetSlotImplSets = DispatchSlotChecking$$$GetSlotImplSets;
exports.DispatchSlotChecking$$$CheckImplementationRelationAtEndOfInferenceScope = DispatchSlotChecking$$$CheckImplementationRelationAtEndOfInferenceScope;
exports.FinalTypeDefinitionChecksAtEndOfInferenceScope = FinalTypeDefinitionChecksAtEndOfInferenceScope;
exports.GetAbstractMethInfosForSynMethodDecl = GetAbstractMethInfosForSynMethodDecl;
exports.GetAbstractPropInfosForSynPropertyDecl = GetAbstractPropInfosForSynPropertyDecl;
exports.OverrideDoesntOverride = exports.TypeIsImplicitlyAbstract = exports.SlotImplSet = exports.RequiredSlot = exports.OverrideInfo = exports.OverrideCanImplement = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _ast = require("./ast");

var _TastOps = require("./TastOps");

var _TcGlobals = require("./TcGlobals");

var _tast = require("./tast");

var _illib = require("../absil/illib");

var _NicePrint = require("./NicePrint");

var _layout = require("./layout");

var _infos = require("./infos");

var _lib = require("./lib");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _Option = require("../fable-core.2.0.3/Option");

var _TypeRelations = require("./TypeRelations");

var _List = require("../fable-core.2.0.3/List");

var _Util = require("../fable-core.2.0.3/Util");

var _NameResolution = require("./NameResolution");

var _AccessibilityLogic = require("./AccessibilityLogic");

var _String = require("../fable-core.2.0.3/String");

var _Seq = require("../fable-core.2.0.3/Seq");

var _InfoReader = require("./InfoReader");

var _AugmentWithHashCompare = require("./AugmentWithHashCompare");

const OverrideCanImplement = (0, _Types.declare)(function OverrideCanImplement(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.OverrideCanImplement = OverrideCanImplement;
const OverrideInfo = (0, _Types.declare)(function OverrideInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.OverrideInfo = OverrideInfo;

function OverrideInfo$$get_CanImplement(x) {
  const a = x.fields[0];
  return a;
}

function OverrideInfo$$get_BoundingTyconRef(x$$1) {
  const ty = x$$1.fields[1];
  return ty;
}

function OverrideInfo$$get_LogicalName(x$$2) {
  const id = x$$2.fields[2];
  return (0, _ast.Ident$$get_idText)(id);
}

function OverrideInfo$$get_Range(x$$3) {
  const id$$1 = x$$3.fields[2];
  return (0, _ast.Ident$$get_idRange)(id$$1);
}

function OverrideInfo$$get_IsFakeEventProperty(x$$4) {
  const b = x$$4.fields[6];
  return b;
}

function OverrideInfo$$get_ArgTypes(x$$5) {
  const b$$1 = x$$5.fields[4];
  return b$$1;
}

function OverrideInfo$$get_ReturnType(x$$6) {
  const b$$2 = x$$6.fields[5];
  return b$$2;
}

function OverrideInfo$$get_IsCompilerGenerated(x$$7) {
  const b$$3 = x$$7.fields[7];
  return b$$3;
}

const RequiredSlot = (0, _Types.declare)(function RequiredSlot(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.RequiredSlot = RequiredSlot;
const SlotImplSet = (0, _Types.declare)(function SlotImplSet(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SlotImplSet = SlotImplSet;
const TypeIsImplicitlyAbstract = (0, _Types.declare)(function TypeIsImplicitlyAbstract(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.TypeIsImplicitlyAbstract = TypeIsImplicitlyAbstract;
const OverrideDoesntOverride = (0, _Types.declare)(function OverrideDoesntOverride(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
  this.Data4 = arg5;
  this.Data5 = arg6;
}, _Types.FSharpException);
exports.OverrideDoesntOverride = OverrideDoesntOverride;

function DispatchSlotChecking$$$PrintOverrideToBuffer(denv, os, _arg1) {
  const retTy = _arg1.fields[5];
  const mtps = _arg1.fields[3][0];
  const memberToParentInst = _arg1.fields[3][1];
  const id$$2 = _arg1.fields[2];
  const argTys = _arg1.fields[4];
  const denv$$1 = new _TastOps.DisplayEnv(denv.includeStaticParametersInTypeNames, denv.openTopPathsSorted, denv.openTopPathsRaw, denv.shortTypeNames, denv.suppressNestedTypes, denv.maxMembers, denv.showObsoleteMembers, denv.showHiddenMembers, true, denv.showImperativeTyparAnnotations, denv.suppressInlineKeyword, denv.suppressMutableKeyword, denv.showMemberContainers, denv.shortConstraints, denv.useColonForReturnType, denv.showAttributes, denv.showOverrides, denv.showConstraintTyparAnnotations, denv.abbreviateAdditionalConstraints, denv.showTyparDefaultConstraints, denv.g, denv.contextAccessibility, denv.generatedValueLayout);
  const retTy$$1 = (0, _TastOps.GetFSharpViewOfReturnType)(denv$$1.g, retTy);
  const argInfos = argTys.tail == null ? (0, _Types.L)((0, _Types.L)([(0, _TcGlobals.TcGlobals$$get_unit_ty)(denv$$1.g), _tast.ValReprInfoModule$$$unnamedTopArg1], (0, _Types.L)()), (0, _Types.L)()) : (0, _illib.List$$$mapSquared)(function f(ty$$1) {
    return [ty$$1, _tast.ValReprInfoModule$$$unnamedTopArg1];
  }, argTys);
  (0, _layout.bufferL)(os, (0, _NicePrint.prettyLayoutOfMemberSig)(denv$$1, memberToParentInst, (0, _ast.Ident$$get_idText)(id$$2), mtps, argInfos, retTy$$1));
}

function DispatchSlotChecking$$$PrintMethInfoSigToBuffer(g, amap, m, denv$$2, os$$1, minfo) {
  const denv$$3 = new _TastOps.DisplayEnv(denv$$2.includeStaticParametersInTypeNames, denv$$2.openTopPathsSorted, denv$$2.openTopPathsRaw, denv$$2.shortTypeNames, denv$$2.suppressNestedTypes, denv$$2.maxMembers, denv$$2.showObsoleteMembers, denv$$2.showHiddenMembers, true, denv$$2.showImperativeTyparAnnotations, denv$$2.suppressInlineKeyword, denv$$2.suppressMutableKeyword, denv$$2.showMemberContainers, denv$$2.shortConstraints, denv$$2.useColonForReturnType, denv$$2.showAttributes, denv$$2.showOverrides, denv$$2.showConstraintTyparAnnotations, denv$$2.abbreviateAdditionalConstraints, denv$$2.showTyparDefaultConstraints, denv$$2.g, denv$$2.contextAccessibility, denv$$2.generatedValueLayout);
  const patternInput = (0, _infos.CompiledSigOfMeth)(g, amap, m, minfo);
  const ttpinst = patternInput.fields[3];
  const retTy$$2 = patternInput.fields[1];
  const fmtps = patternInput.fields[2];
  const argTys$$1 = patternInput.fields[0];
  const retTy$$3 = (0, _TastOps.GetFSharpViewOfReturnType)(g, retTy$$2);
  const argInfos$$1 = (0, _illib.List$$$mapSquared)(function f$$1(ty$$2) {
    return [ty$$2, _tast.ValReprInfoModule$$$unnamedTopArg1];
  }, argTys$$1);
  const nm = (0, _infos.MethInfo$$get_LogicalName)(minfo);
  (0, _layout.bufferL)(os$$1, (0, _NicePrint.prettyLayoutOfMemberSig)(denv$$3, ttpinst, nm, fmtps, argInfos$$1, retTy$$3));
}

function DispatchSlotChecking$$$FormatOverride(denv$$4, d) {
  return (0, _lib.bufs)(function (buf) {
    DispatchSlotChecking$$$PrintOverrideToBuffer(denv$$4, buf, d);
  });
}

function DispatchSlotChecking$$$FormatMethInfoSig(g$$1, amap$$1, m$$1, denv$$5, d$$1) {
  return (0, _lib.bufs)(function (buf$$1) {
    DispatchSlotChecking$$$PrintMethInfoSigToBuffer(g$$1, amap$$1, m$$1, denv$$5, buf$$1, d$$1);
  });
}

function DispatchSlotChecking$$$GetInheritedMemberOverrideInfo(g$$2, amap$$2, m$$2, parentType, minfo$$1) {
  const nm$$1 = (0, _infos.MethInfo$$get_LogicalName)(minfo$$1);
  const patternInput$$1 = (0, _infos.CompiledSigOfMeth)(g$$2, amap$$2, m$$2, minfo$$1);
  const ttpinst$$1 = patternInput$$1.fields[3];
  const retTy$$4 = patternInput$$1.fields[1];
  const fmtps$$1 = patternInput$$1.fields[2];
  const argTys$$2 = patternInput$$1.fields[0];
  const isFakeEventProperty = (0, _infos.MethInfo$$get_IsFSharpEventPropertyMethod)(minfo$$1);
  return new OverrideInfo(0, "Override", parentType, (0, _infos.MethInfo$$get_ApparentEnclosingTyconRef)(minfo$$1), (0, _ast.mkSynId)(m$$2, nm$$1), [fmtps$$1, ttpinst$$1], argTys$$2, retTy$$4, isFakeEventProperty, false);
}

function DispatchSlotChecking$$$GetTypeMemberOverrideInfo(g$$3, reqdTy, overrideBy) {
  const patternInput$$2 = (0, _TastOps.GetTypeOfMemberInMemberForm)(g$$3, overrideBy);
  const nm$$2 = (0, _tast.ValRef$$get_LogicalName)(overrideBy);
  const argTys$$3 = (0, _illib.List$$$mapSquared)(function f$$2(tuple) {
    return tuple[0];
  }, patternInput$$2[1]);
  let patternInput$$3;
  const matchValue = (0, _TastOps.PartitionValRefTypars)(g$$3, overrideBy);

  if (matchValue == null) {
    patternInput$$3 = (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelMethodIsOverconstrained)(), (0, _tast.ValRef$$get_Range)(overrideBy)));
  } else {
    const memberToParentInst$$1 = matchValue[3];
    const memberMethodTypars = matchValue[2];
    const _tinst = matchValue[4];
    const argTys$$4 = (0, _illib.List$$$mapSquared)(function f$$3(arg10$0040$$2) {
      return (0, _TastOps.instType)(memberToParentInst$$1, arg10$0040$$2);
    }, argTys$$3);
    const retTy$$6 = (0, _Option.defaultArg)(patternInput$$2[2], null, function mapping(arg10$0040$$3) {
      return (0, _TastOps.instType)(memberToParentInst$$1, arg10$0040$$3);
    });
    patternInput$$3 = [memberMethodTypars, memberToParentInst$$1, argTys$$4, retTy$$6];
  }

  let implKind;

  if ((0, _TastOps.ValRefIsExplicitImpl)(g$$3, overrideBy)) {
    let belongsToReqdTy;
    const matchValue$$1 = (0, _tast.ValRef$$get_MemberInfo)(overrideBy).ImplementedSlotSigs;

    if (matchValue$$1.tail != null) {
      const ss = matchValue$$1.head;
      belongsToReqdTy = (0, _TastOps.isInterfaceTy)(g$$3, (0, _tast.SlotSig$$get_ImplementedType)(ss)) ? (0, _TastOps.typeEquiv)(g$$3, reqdTy, (0, _tast.SlotSig$$get_ImplementedType)(ss)) : false;
    } else {
      belongsToReqdTy = false;
    }

    implKind = belongsToReqdTy ? new OverrideCanImplement(0, "CanImplementAnyInterfaceSlot") : new OverrideCanImplement(3, "CanImplementNoSlots");
  } else if ((0, _infos.ValRef$002Eget_IsDispatchSlotMember)(overrideBy)) {
    implKind = new OverrideCanImplement(3, "CanImplementNoSlots");
  } else {
    implKind = new OverrideCanImplement(1, "CanImplementAnyClassHierarchySlot");
  }

  const isFakeEventProperty$$1 = (0, _infos.ValRef$002EIsFSharpEventProperty$$2AE8EA0C)(overrideBy, g$$3);
  return new OverrideInfo(0, "Override", implKind, (0, _tast.ValRef$$get_MemberApparentEntity)(overrideBy), (0, _ast.mkSynId)((0, _tast.ValRef$$get_Range)(overrideBy), nm$$2), [patternInput$$3[0], patternInput$$3[1]], patternInput$$3[2], patternInput$$3[3], isFakeEventProperty$$1, (0, _tast.ValRef$$get_IsCompilerGenerated)(overrideBy));
}

function DispatchSlotChecking$$$GetObjectExprOverrideInfo(g$$4, amap$$3, implty, id$$3, memberFlags, ty$$3, arityInfo, bindingAttribs, rhsExpr) {
  const patternInput$$4 = (0, _TastOps.GetMemberTypeInMemberForm)(g$$4, memberFlags, arityInfo, ty$$3, (0, _ast.Ident$$get_idRange)(id$$3));
  const argTys$$6 = (0, _illib.List$$$mapSquared)(function f$$4(tuple$$1) {
    return tuple$$1[0];
  }, patternInput$$4[1]);
  const patternInput$$5 = (0, _TypeRelations.destTopLambda)(g$$4, amap$$3, arityInfo, rhsExpr, ty$$3);
  var $target$$4, thisv, vs;

  if (patternInput$$5[3].tail != null) {
    if (patternInput$$5[3].head.tail != null) {
      if (patternInput$$5[3].head.tail.tail == null) {
        $target$$4 = 0;
        thisv = patternInput$$5[3].head.head;
        vs = patternInput$$5[3].tail;
      } else {
        $target$$4 = 1;
      }
    } else {
      $target$$4 = 1;
    }
  } else {
    $target$$4 = 1;
  }

  switch ($target$$4) {
    case 0:
      {
        const vs$$1 = ((0, _List.length)(vs) === 1 ? patternInput$$4[1].tail == null : false) ? (0, _Types.L)() : vs;
        const implKind$$1 = (0, _TastOps.isInterfaceTy)(g$$4, implty) ? new OverrideCanImplement(0, "CanImplementAnyInterfaceSlot") : new OverrideCanImplement(1, "CanImplementAnyClassHierarchySlot");
        const isFakeEventProperty$$2 = (0, _TastOps.CompileAsEvent)(g$$4, bindingAttribs);
        const overrideByInfo = new OverrideInfo(0, "Override", implKind$$1, (0, _TastOps.tcrefOfAppTy)(g$$4, implty), id$$3, [patternInput$$4[0], (0, _Types.L)()], argTys$$6, patternInput$$4[2], isFakeEventProperty$$2, false);
        return [overrideByInfo, [patternInput$$5[2], thisv, vs$$1, bindingAttribs, patternInput$$5[4]]];
      }

    case 1:
      {
        return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("Unexpected shape for object expression override", (0, _ast.Ident$$get_idRange)(id$$3)));
      }
  }
}

function DispatchSlotChecking$$$IsNameMatch(dispatchSlot, overrideBy$$1) {
  return OverrideInfo$$get_LogicalName(overrideBy$$1) === (0, _infos.MethInfo$$get_LogicalName)(dispatchSlot);
}

function DispatchSlotChecking$$$IsImplMatch(g$$5, dispatchSlot$$1, overrideBy$$2) {
  const matchValue$$2 = OverrideInfo$$get_CanImplement(overrideBy$$2);

  switch (matchValue$$2.tag) {
    case 2:
      {
        return true;
      }

    case 1:
      {
        return !(0, _TastOps.isInterfaceTy)(g$$5, (0, _infos.MethInfo$$get_ApparentEnclosingType)(dispatchSlot$$1));
      }

    case 0:
      {
        return (0, _TastOps.isInterfaceTy)(g$$5, (0, _infos.MethInfo$$get_ApparentEnclosingType)(dispatchSlot$$1));
      }

    default:
      {
        return false;
      }
  }
}

function DispatchSlotChecking$$$IsTyparKindMatch(_arg2, _arg1$$1) {
  const fvmtps = _arg2.fields[2];
  const mtps$$1 = _arg1$$1.fields[3][0];
  return (0, _illib.List$$$lengthsEqAndForall2)(function (tp1, tp2) {
    return (0, _Util.equals)((0, _tast.Typar$$get_Kind)(tp1), (0, _tast.Typar$$get_Kind)(tp2));
  }, mtps$$1, fvmtps);
}

function DispatchSlotChecking$$$IsPartialMatch(g$$6, dispatchSlot$$2, compiledSig, _arg1$$2) {
  const overrideBy$$3 = _arg1$$2;
  const mtps$$2 = overrideBy$$3.fields[3][0];
  const argTys$$7 = overrideBy$$3.fields[4];
  const _retTy = overrideBy$$3.fields[5];

  if (DispatchSlotChecking$$$IsNameMatch(dispatchSlot$$2, overrideBy$$3)) {
    const vargtys = compiledSig.fields[0];
    const fvmtps$$1 = compiledSig.fields[2];

    if (((0, _List.length)(mtps$$2) === (0, _List.length)(fvmtps$$1) ? DispatchSlotChecking$$$IsTyparKindMatch(compiledSig, overrideBy$$3) : false) ? (0, _List.length)(argTys$$7) === (0, _List.length)(vargtys) : false) {
      return DispatchSlotChecking$$$IsImplMatch(g$$6, dispatchSlot$$2, overrideBy$$3);
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function DispatchSlotChecking$$$ReverseTyparRenaming(g$$7, tinst) {
  return (0, _List.map)(function mapping$$1(tupledArg) {
    return [(0, _TastOps.destTyparTy)(g$$7, tupledArg[1]), (0, _tast.mkTyparTy)(tupledArg[0])];
  }, tinst);
}

function DispatchSlotChecking$$$ComposeTyparInsts(inst1, inst2) {
  return (0, _List.map)(function mapping$$2(tupledArg$$1) {
    return (0, _lib.map2Of2)(function f$$5(arg10$0040$$4) {
      return (0, _TastOps.instType)(inst2, arg10$0040$$4);
    }, tupledArg$$1[0], tupledArg$$1[1]);
  }, inst1);
}

function DispatchSlotChecking$$$IsExactMatch(g$$8, amap$$4, m$$3, dispatchSlot$$3, _arg1$$3) {
  const overrideBy$$4 = _arg1$$3;
  const retTy$$9 = overrideBy$$4.fields[5];
  const mtps$$3 = overrideBy$$4.fields[3][0];
  const mtpinst = overrideBy$$4.fields[3][1];
  const argTys$$8 = overrideBy$$4.fields[4];
  const compiledSig$$1 = (0, _infos.CompiledSigOfMeth)(g$$8, amap$$4, m$$3, dispatchSlot$$3);

  if (DispatchSlotChecking$$$IsPartialMatch(g$$8, dispatchSlot$$3, compiledSig$$1, overrideBy$$4)) {
    const vrty = compiledSig$$1.fields[1];
    const vargtys$$1 = compiledSig$$1.fields[0];
    const ttpinst$$2 = compiledSig$$1.fields[3];
    const fvmtps$$2 = compiledSig$$1.fields[2];
    const aenv = (0, _TastOps.TypeEquivEnv$$$FromEquivTypars)(fvmtps$$2, mtps$$3);

    if ((0, _List.forAll2)(function (l1, l2) {
      return (0, _illib.List$$$lengthsEqAndForall2)(function p(arg20$0040, arg30$0040) {
        return (0, _TastOps.typeAEquiv)(g$$8, aenv, arg20$0040, arg30$0040);
      }, l1, l2);
    }, vargtys$$1, argTys$$8) ? (0, _TastOps.returnTypesAEquiv)(g$$8, aenv, vrty, retTy$$9) : false) {
      const ttpinst$$3 = (0, _List.exists)(function predicate($arg$$2) {
        return !(0, _TastOps.isTyparTy)(g$$8, $arg$$2[1]);
      }, mtpinst) ? ttpinst$$2 : DispatchSlotChecking$$$ComposeTyparInsts(ttpinst$$2, DispatchSlotChecking$$$ReverseTyparRenaming(g$$8, mtpinst));
      const aenv$$1 = (0, _TastOps.TypeEquivEnv$$$FromTyparInst$$Z794F4A39)(ttpinst$$3);
      return (0, _TastOps.typarsAEquiv)(g$$8, aenv$$1, fvmtps$$2, mtps$$3);
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function DispatchSlotChecking$$$OverrideImplementsDispatchSlot(g$$9, amap$$5, m$$4, dispatchSlot$$4, availPriorOverride) {
  if (DispatchSlotChecking$$$IsExactMatch(g$$9, amap$$5, m$$4, dispatchSlot$$4, availPriorOverride)) {
    return (0, _infos.ExistsHeadTypeInEntireHierarchy)(g$$9, amap$$5, m$$4, (0, _TastOps.generalizedTyconRef)(OverrideInfo$$get_BoundingTyconRef(availPriorOverride)), (0, _infos.MethInfo$$get_DeclaringTyconRef)(dispatchSlot$$4));
  } else {
    return false;
  }
}

function DispatchSlotChecking$$$DispatchSlotIsAlreadyImplemented(g$$10, amap$$6, m$$5, availPriorOverridesKeyed, dispatchSlot$$5) {
  return (0, _List.exists)(function predicate$$1(availPriorOverride$$1) {
    return DispatchSlotChecking$$$OverrideImplementsDispatchSlot(g$$10, amap$$6, m$$5, dispatchSlot$$5, availPriorOverride$$1);
  }, (0, _illib.NameMultiMapModule$$$find)((0, _infos.MethInfo$$get_LogicalName)(dispatchSlot$$5), availPriorOverridesKeyed));
}

function DispatchSlotChecking$$$CheckDispatchSlotsAreImplemented(denv$$6, g$$11, amap$$7, m$$7, nenv, sink, isOverallTyAbstract, reqdTy$$1, dispatchSlots, availPriorOverrides, overrides) {
  const isReqdTyInterface = (0, _TastOps.isInterfaceTy)(g$$11, reqdTy$$1);
  const showMissingMethodsAndRaiseErrors = isReqdTyInterface ? true : !isOverallTyAbstract;
  const res = new _Types.FSharpRef(true);

  const fail = function fail(exn) {
    res.contents = false;

    if (showMissingMethodsAndRaiseErrors) {
      (0, _ErrorLogger.errorR)(exn);
    }
  };

  const availPriorOverridesKeyed$$1 = (0, _illib.NameMultiMapModule$$$initBy)(function f$$6(ov) {
    return OverrideInfo$$get_LogicalName(ov);
  }, availPriorOverrides);
  const overridesKeyed = (0, _illib.NameMultiMapModule$$$initBy)(function f$$7(ov$$1) {
    return OverrideInfo$$get_LogicalName(ov$$1);
  }, overrides);
  (0, _List.iterate)(function action(_arg3) {
    var l;
    const isOptional = _arg3.fields[1];
    const dispatchSlot$$6 = _arg3.fields[0];
    const matchValue$$3 = (0, _List.filter)(function predicate$$2(availPriorOverride$$2) {
      return DispatchSlotChecking$$$OverrideImplementsDispatchSlot(g$$11, amap$$7, m$$7, dispatchSlot$$6, availPriorOverride$$2);
    }, (0, _illib.NameMultiMapModule$$$find)((0, _infos.MethInfo$$get_LogicalName)(dispatchSlot$$6), overridesKeyed));

    if (matchValue$$3.tail == null) {
      if (!isOptional ? !DispatchSlotChecking$$$DispatchSlotIsAlreadyImplemented(g$$11, amap$$7, m$$7, availPriorOverridesKeyed$$1, dispatchSlot$$6) : false) {
        const compiledSig$$2 = (0, _infos.CompiledSigOfMeth)(g$$11, amap$$7, m$$7, dispatchSlot$$6);

        const noimpl = function noimpl() {
          if (isReqdTyInterface) {
            fail(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelNoImplementationGivenWithSuggestion$$Z721C83C5)((0, _NicePrint.stringOfMethInfo)(amap$$7, m$$7, denv$$6, dispatchSlot$$6)), m$$7));
          } else {
            fail(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelNoImplementationGiven$$Z721C83C5)((0, _NicePrint.stringOfMethInfo)(amap$$7, m$$7, denv$$6, dispatchSlot$$6)), m$$7));
          }
        };

        const matchValue$$4 = (0, _List.filter)(function predicate$$3(arg30$0040$$1) {
          return DispatchSlotChecking$$$IsPartialMatch(g$$11, dispatchSlot$$6, compiledSig$$2, arg30$0040$$1);
        }, overrides);

        if (matchValue$$4.tail != null) {
          if (matchValue$$4.tail.tail == null) {
            if ((0, _List.exists)(function predicate$$6(_arg2$$1) {
              const dispatchSlot$$8 = _arg2$$1.fields[0];
              return DispatchSlotChecking$$$OverrideImplementsDispatchSlot(g$$11, amap$$7, m$$7, dispatchSlot$$8, matchValue$$4.head);
            }, dispatchSlots)) {
              noimpl();
            }
          } else {
            fail(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelOverrideWasAmbiguous$$Z721C83C5)(DispatchSlotChecking$$$FormatMethInfoSig(g$$11, amap$$7, m$$7, denv$$6, dispatchSlot$$6)), m$$7));
          }
        } else {
          const possibleOverrides = (0, _List.filter)(function predicate$$4(overrideBy$$5) {
            if (DispatchSlotChecking$$$IsNameMatch(dispatchSlot$$6, overrideBy$$5)) {
              return DispatchSlotChecking$$$IsImplMatch(g$$11, dispatchSlot$$6, overrideBy$$5);
            } else {
              return false;
            }
          }, overrides);

          if (possibleOverrides.tail != null) {
            if (possibleOverrides.tail.tail == null) {
              const moreThanOnePossibleDispatchSlot = !(l = (0, _List.filter)(function predicate$$5(_arg1$$4) {
                const dispatchSlot$$7 = _arg1$$4.fields[0];

                if (DispatchSlotChecking$$$IsNameMatch(dispatchSlot$$7, possibleOverrides.head)) {
                  return DispatchSlotChecking$$$IsImplMatch(g$$11, dispatchSlot$$7, possibleOverrides.head);
                } else {
                  return false;
                }
              }, dispatchSlots), l.tail != null ? l.tail.tail == null ? true : false : true);
              const vargtys$$2 = compiledSig$$2.fields[0];
              const fvmtps$$3 = compiledSig$$2.fields[2];

              if (moreThanOnePossibleDispatchSlot) {
                noimpl();
              } else if ((0, _List.length)(possibleOverrides.head.fields[4]) !== (0, _List.length)(vargtys$$2)) {
                fail(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelMemberDoesNotHaveCorrectNumberOfArguments$$Z384F8060)(DispatchSlotChecking$$$FormatOverride(denv$$6, possibleOverrides.head), DispatchSlotChecking$$$FormatMethInfoSig(g$$11, amap$$7, m$$7, denv$$6, dispatchSlot$$6)), OverrideInfo$$get_Range(possibleOverrides.head)));
              } else if ((0, _List.length)(possibleOverrides.head.fields[3][0]) !== (0, _List.length)(fvmtps$$3)) {
                fail(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelMemberDoesNotHaveCorrectNumberOfTypeParameters$$Z384F8060)(DispatchSlotChecking$$$FormatOverride(denv$$6, possibleOverrides.head), DispatchSlotChecking$$$FormatMethInfoSig(g$$11, amap$$7, m$$7, denv$$6, dispatchSlot$$6)), OverrideInfo$$get_Range(possibleOverrides.head)));
              } else if (!DispatchSlotChecking$$$IsTyparKindMatch(compiledSig$$2, possibleOverrides.head)) {
                fail(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelMemberDoesNotHaveCorrectKindsOfGenericParameters$$Z384F8060)(DispatchSlotChecking$$$FormatOverride(denv$$6, possibleOverrides.head), DispatchSlotChecking$$$FormatMethInfoSig(g$$11, amap$$7, m$$7, denv$$6, dispatchSlot$$6)), OverrideInfo$$get_Range(possibleOverrides.head)));
              } else {
                fail(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelMemberCannotImplement$$30230F9B)(DispatchSlotChecking$$$FormatOverride(denv$$6, possibleOverrides.head), (0, _NicePrint.stringOfMethInfo)(amap$$7, m$$7, denv$$6, dispatchSlot$$6), DispatchSlotChecking$$$FormatMethInfoSig(g$$11, amap$$7, m$$7, denv$$6, dispatchSlot$$6)), OverrideInfo$$get_Range(possibleOverrides.head)));
              }
            } else {
              (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelOverloadNotFound$$Z384F8060)(DispatchSlotChecking$$$FormatMethInfoSig(g$$11, amap$$7, m$$7, denv$$6, dispatchSlot$$6), DispatchSlotChecking$$$FormatMethInfoSig(g$$11, amap$$7, m$$7, denv$$6, dispatchSlot$$6)), OverrideInfo$$get_Range(possibleOverrides.head)));
            }
          } else {
            noimpl();
          }
        }
      }
    } else if (matchValue$$3.tail.tail == null) {
      if (!OverrideInfo$$get_IsCompilerGenerated(matchValue$$3.head)) {
        const item = new _NameResolution.Item(10, "MethodGroup", OverrideInfo$$get_LogicalName(matchValue$$3.head), (0, _Types.L)(dispatchSlot$$6, (0, _Types.L)()), null);
        (0, _NameResolution.CallNameResolutionSink)(sink, OverrideInfo$$get_Range(matchValue$$3.head), nenv, item, item, (0, _infos.MethInfo$$get_FormalMethodTyparInst)(dispatchSlot$$6), new _NameResolution.ItemOccurence(5, "Implemented"), denv$$6, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"));
      }

      sink;
    } else {
      fail(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelMoreThenOneOverride$$Z721C83C5)(DispatchSlotChecking$$$FormatMethInfoSig(g$$11, amap$$7, m$$7, denv$$6, dispatchSlot$$6)), m$$7));
    }
  }, dispatchSlots);
  return res.contents;
}

function DispatchSlotChecking$$$CheckOverridesAreAllUsedOnce(denv$$7, g$$12, amap$$8, isObjExpr, reqdTy$$2, dispatchSlotsKeyed, availPriorOverrides$$1, overrides$$1) {
  const availPriorOverridesKeyed$$2 = (0, _illib.NameMultiMapModule$$$initBy)(function f$$8(ov$$2) {
    return OverrideInfo$$get_LogicalName(ov$$2);
  }, availPriorOverrides$$1);
  (0, _Seq.iterate)(function (overrideBy$$9) {
    var meth;

    if (!OverrideInfo$$get_IsFakeEventProperty(overrideBy$$9)) {
      const m$$8 = OverrideInfo$$get_Range(overrideBy$$9);
      const relevantVirts = (0, _illib.NameMultiMapModule$$$find)(OverrideInfo$$get_LogicalName(overrideBy$$9), dispatchSlotsKeyed);
      const relevantVirts$$1 = (0, _List.map)(function mapping$$3(_arg1$$5) {
        const dispatchSlot$$9 = _arg1$$5.fields[0];
        return dispatchSlot$$9;
      }, relevantVirts);
      const matchValue$$5 = (0, _List.filter)(function predicate$$7(dispatchSlot$$10) {
        return DispatchSlotChecking$$$OverrideImplementsDispatchSlot(g$$12, amap$$8, m$$8, dispatchSlot$$10, overrideBy$$9);
      }, relevantVirts$$1);

      if (matchValue$$5.tail != null) {
        if (matchValue$$5.tail.tail == null) {
          if ((0, _infos.MethInfo$$get_IsFinal)(matchValue$$5.head) ? isObjExpr ? true : !(0, _TastOps.typeEquiv)(g$$12, reqdTy$$2, (0, _infos.MethInfo$$get_ApparentEnclosingType)(matchValue$$5.head)) : false) {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelMethodIsSealed$$Z721C83C5)((0, _NicePrint.stringOfMethInfo)(amap$$8, m$$8, denv$$7, matchValue$$5.head)), m$$8));
          }
        } else {
          const matchValue$$8 = (0, _List.filter)(function predicate$$10(dispatchSlot$$17) {
            if ((0, _TastOps.isInterfaceTy)(g$$12, (0, _infos.MethInfo$$get_ApparentEnclosingType)(dispatchSlot$$17))) {
              return true;
            } else {
              return !DispatchSlotChecking$$$DispatchSlotIsAlreadyImplemented(g$$12, amap$$8, m$$8, availPriorOverridesKeyed$$2, dispatchSlot$$17);
            }
          }, matchValue$$5);
          var $target$$5, h1, h2;

          if (matchValue$$8.tail != null) {
            if (matchValue$$8.tail.tail != null) {
              $target$$5 = 0;
              h1 = matchValue$$8.head;
              h2 = matchValue$$8.tail.head;
            } else {
              $target$$5 = 1;
            }
          } else {
            $target$$5 = 1;
          }

          switch ($target$$5) {
            case 0:
              {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelOverrideImplementsMoreThenOneSlot$$30230F9B)(DispatchSlotChecking$$$FormatOverride(denv$$7, overrideBy$$9), (0, _NicePrint.stringOfMethInfo)(amap$$8, m$$8, denv$$7, h1), (0, _NicePrint.stringOfMethInfo)(amap$$8, m$$8, denv$$7, h2)), m$$8));
                break;
              }

            case 1:
              {
                var $target$$6, meth$$1;

                if (matchValue$$5.tail != null) {
                  if (meth = matchValue$$5.head, (0, _infos.MethInfo$$get_IsFinal)(meth)) {
                    $target$$6 = 0;
                    meth$$1 = matchValue$$5.head;
                  } else {
                    $target$$6 = 1;
                  }
                } else {
                  $target$$6 = 1;
                }

                switch ($target$$6) {
                  case 0:
                    {
                      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcCannotOverrideSealedMethod$$Z721C83C5)((0, _String.toText)((0, _String.printf)("%s::%s"))((0, _infos.MethInfo$$get_ApparentEnclosingType)(meth$$1).toString())((0, _infos.MethInfo$$get_LogicalName)(meth$$1))), m$$8));
                      break;
                    }
                }

                break;
              }
          }
        }
      } else {
        const matchValue$$6 = (0, _List.filter)(function predicate$$8(dispatchSlot$$11) {
          return DispatchSlotChecking$$$IsPartialMatch(g$$12, dispatchSlot$$11, (0, _infos.CompiledSigOfMeth)(g$$12, amap$$8, m$$8, dispatchSlot$$11), overrideBy$$9);
        }, relevantVirts$$1);
        var $target$$7, dispatchSlot$$12;

        if (matchValue$$6.tail != null) {
          if (matchValue$$6.tail.tail == null) {
            $target$$7 = 0;
            dispatchSlot$$12 = matchValue$$6.head;
          } else {
            $target$$7 = 1;
          }
        } else {
          $target$$7 = 1;
        }

        switch ($target$$7) {
          case 0:
            {
              (0, _ErrorLogger.errorR)(new OverrideDoesntOverride(denv$$7, overrideBy$$9, dispatchSlot$$12, g$$12, amap$$8, m$$8));
              break;
            }

          case 1:
            {
              const matchValue$$7 = (0, _List.filter)(function predicate$$9(dispatchSlot$$13) {
                return DispatchSlotChecking$$$IsNameMatch(dispatchSlot$$13, overrideBy$$9);
              }, relevantVirts$$1);

              if (matchValue$$7.tail != null) {
                if (matchValue$$7.tail.tail == null) {
                  (0, _ErrorLogger.errorR)(new OverrideDoesntOverride(denv$$7, overrideBy$$9, matchValue$$7.head, g$$12, amap$$8, m$$8));
                } else {
                  const details = (0, _String.join)("", ...(0, _Seq.map)(function (arg20) {
                    return (0, _String.toText)((0, _String.printf)("%s   %s"))("\n")(arg20);
                  }, (0, _List.map)(function mapping$$4(dispatchSlot$$15) {
                    return DispatchSlotChecking$$$FormatMethInfoSig(g$$12, amap$$8, m$$8, denv$$7, dispatchSlot$$15);
                  }, matchValue$$7)));
                  (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelMemberHasMultiplePossibleDispatchSlots$$Z384F8060)(DispatchSlotChecking$$$FormatOverride(denv$$7, overrideBy$$9), details), OverrideInfo$$get_Range(overrideBy$$9)));
                }
              } else {
                (0, _ErrorLogger.errorR)(new OverrideDoesntOverride(denv$$7, overrideBy$$9, null, g$$12, amap$$8, m$$8));
              }

              break;
            }
        }
      }
    }
  }, overrides$$1);
}

function DispatchSlotChecking$$$GetSlotImplSets(infoReader, denv$$8, isObjExpr$$1, allReqdTys) {
  const g$$13 = (0, _InfoReader.InfoReader$$get_g)(infoReader);
  const amap$$9 = (0, _InfoReader.InfoReader$$get_amap)(infoReader);
  const availImpliedInterfaces = (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (matchValue$$9) {
      if (!(0, _TastOps.isInterfaceTy)(g$$13, matchValue$$9[0])) {
        const baseTyOpt = isObjExpr$$1 ? matchValue$$9[0] : (0, _infos.GetSuperTypeOfType)(g$$13, amap$$9, matchValue$$9[1], matchValue$$9[0]);

        if (baseTyOpt != null) {
          const baseTy = baseTyOpt;
          return (0, _infos.AllInterfacesOfType)(g$$13, amap$$9, matchValue$$9[1], new _infos.AllowMultiIntfInstantiations(0, "Yes"), baseTy);
        } else {
          return (0, _Seq.empty)();
        }
      } else {
        return (0, _Seq.empty)();
      }
    }, allReqdTys);
  }));
  const intfSets = (0, _List.mapIndexed)(function mapping$$6(i, tupledArg$$2) {
    const interfaces = (0, _infos.AllInterfacesOfType)(g$$13, amap$$9, tupledArg$$2[1], new _infos.AllowMultiIntfInstantiations(0, "Yes"), tupledArg$$2[0]);
    const impliedTys = (0, _TastOps.isInterfaceTy)(g$$13, tupledArg$$2[0]) ? interfaces : (0, _Types.L)(tupledArg$$2[0], interfaces);
    return [i, tupledArg$$2[0], impliedTys, tupledArg$$2[1]];
  }, allReqdTys);
  const reqdTyInfos = (0, _List.map)(function mapping$$7(tupledArg$$3) {
    const reduced = (0, _List.fold)(function folder(acc, tupledArg$$4) {
      if (tupledArg$$3[0] !== tupledArg$$4[0] ? (0, _TypeRelations.TypeFeasiblySubsumesType)(0, g$$13, amap$$9, tupledArg$$4[3], tupledArg$$4[1], new _TypeRelations.CanCoerce(0, "CanCoerce"), tupledArg$$3[1]) : false) {
        return (0, _lib.ListSet$$$subtract)(function (ty1, ty2) {
          return (0, _TypeRelations.TypesFeasiblyEquiv)(0, g$$13, amap$$9, tupledArg$$4[3], ty1, ty2);
        }, acc, tupledArg$$4[2]);
      } else {
        return acc;
      }
    }, tupledArg$$3[2], intfSets);
    return [tupledArg$$3[0], tupledArg$$3[1], tupledArg$$3[3], reduced];
  }, intfSets);
  (0, _Seq.iterate)(function (forLoopVar) {
    if ((0, _TastOps.isInterfaceTy)(g$$13, forLoopVar[1]) ? forLoopVar[3].tail == null : false) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelDuplicateInterface)(), forLoopVar[2]));
    }
  }, reqdTyInfos);
  (0, _Seq.iterate)(function (forLoopVar$$1) {
    (0, _Seq.iterate)(function (forLoopVar$$2) {
      if (forLoopVar$$1[0] > forLoopVar$$2[0]) {
        const overlap = (0, _lib.ListSet$$$intersect)(function (ty1$$1, ty2$$1) {
          return (0, _TypeRelations.TypesFeasiblyEquiv)(0, g$$13, amap$$9, forLoopVar$$1[2], ty1$$1, ty2$$1);
        }, forLoopVar$$1[3], forLoopVar$$2[3]);
        (0, _List.iterate)(function action$$1(overlappingTy) {
          if (!((0, _List.filter)(function predicate$$11(minfo$$2) {
            return (0, _infos.MethInfo$$get_IsVirtual)(minfo$$2);
          }, (0, _InfoReader.GetImmediateIntrinsicMethInfosOfType)(null, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"), g$$13, amap$$9, forLoopVar$$1[2], overlappingTy)).tail == null)) {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelNeedExplicitImplementation$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$8, (0, _List.head)(overlap))), forLoopVar$$1[2]));
          }
        }, overlap);
      }
    }, reqdTyInfos);
  }, reqdTyInfos);
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (matchValue$$10) {
      const isImpliedInterfaceTable = (0, _TastOps.TyconRefMap$00601$$$OfList$$ZB24A5BC)((0, _List.map)(function mapping$$8(ty$$5) {
        return [(0, _TastOps.tcrefOfAppTy)(g$$13, ty$$5), null];
      }, (0, _List.filter)(function predicate$$12(arg10$0040$$6) {
        return (0, _TastOps.isInterfaceTy)(g$$13, arg10$0040$$6);
      }, matchValue$$10[3])));

      const isImpliedInterfaceType = function isImpliedInterfaceType(ty$$6) {
        if ((0, _TastOps.isAppTy)(g$$13, ty$$6) ? (0, _TastOps.TyconRefMap$00601$$ContainsKey$$Z788D4AAC)(isImpliedInterfaceTable, (0, _TastOps.tcrefOfAppTy)(g$$13, ty$$6)) : false) {
          return (0, _List.exists)(function predicate$$13(ty2$$2) {
            return (0, _TypeRelations.TypesFeasiblyEquiv)(0, g$$13, amap$$9, matchValue$$10[2], ty$$6, ty2$$2);
          }, matchValue$$10[3]);
        } else {
          return false;
        }
      };

      const dispatchSlots$$2 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
        return (0, _TastOps.isInterfaceTy)(g$$13, matchValue$$10[1]) ? (0, _Seq.collect)(function (impliedTy) {
          const isOptional$$1 = (0, _List.exists)(function f$$9(arg10$0040$$7) {
            return function (arg20$0040$$1) {
              return (0, _TastOps.typeEquiv)(g$$13, arg10$0040$$7, arg20$0040$$1);
            };
          }(impliedTy), availImpliedInterfaces);
          return (0, _Seq.map)(function (reqdSlot) {
            return new RequiredSlot(0, "RequiredSlot", reqdSlot, isOptional$$1);
          }, (0, _InfoReader.GetImmediateIntrinsicMethInfosOfType)(null, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"), g$$13, amap$$9, matchValue$$10[2], impliedTy));
        }, matchValue$$10[3]) : (0, _Seq.collect)(function (minfo$$3) {
          return (0, _infos.MethInfo$$get_IsDispatchSlot)(minfo$$3) ? (0, _Seq.singleton)(new RequiredSlot(0, "RequiredSlot", minfo$$3, !(0, _infos.MethInfo$$get_IsAbstract)(minfo$$3))) : (0, _Seq.empty)();
        }, (0, _InfoReader.GetIntrinsicMethInfosOfType)(infoReader, null, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"), new _infos.AllowMultiIntfInstantiations(0, "Yes"), new _InfoReader.FindMemberFlag(0, "IgnoreOverrides"), matchValue$$10[2], matchValue$$10[1]));
      }));
      let availPriorOverrides$$2;

      if ((0, _TastOps.isInterfaceTy)(g$$13, matchValue$$10[1])) {
        availPriorOverrides$$2 = (0, _Types.L)();
      } else {
        let reqdTy$$8;
        const baseTyOpt$$1 = isObjExpr$$1 ? matchValue$$10[1] : (0, _infos.GetSuperTypeOfType)(g$$13, amap$$9, matchValue$$10[2], matchValue$$10[1]);

        if (baseTyOpt$$1 != null) {
          const baseTy$$1 = baseTyOpt$$1;
          reqdTy$$8 = baseTy$$1;
        } else {
          reqdTy$$8 = matchValue$$10[1];
        }

        availPriorOverrides$$2 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.collect)(function (minfos) {
            return (0, _Seq.collect)(function (minfo$$4) {
              return !(0, _infos.MethInfo$$get_IsAbstract)(minfo$$4) ? (0, _Seq.singleton)(DispatchSlotChecking$$$GetInheritedMemberOverrideInfo(g$$13, amap$$9, matchValue$$10[2], new OverrideCanImplement(1, "CanImplementAnyClassHierarchySlot"), minfo$$4)) : (0, _Seq.empty)();
            }, minfos);
          }, (0, _InfoReader.InfoReader$$GetRawIntrinsicMethodSetsOfType$$Z1FA90CF3)(infoReader, null, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"), new _infos.AllowMultiIntfInstantiations(0, "Yes"), matchValue$$10[2], reqdTy$$8));
        }));
      }

      const isRelevantRequiredProperty = function isRelevantRequiredProperty(x$$9) {
        if ((0, _infos.PropInfo$$get_IsVirtualProperty)(x$$9) ? !(0, _TastOps.isInterfaceTy)(g$$13, matchValue$$10[1]) : false) {
          return true;
        } else {
          return isImpliedInterfaceType((0, _infos.PropInfo$$get_ApparentEnclosingType)(x$$9));
        }
      };

      const reqdProperties = (0, _List.filter)(isRelevantRequiredProperty, (0, _InfoReader.GetIntrinsicPropInfosOfType)(infoReader, null, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"), new _infos.AllowMultiIntfInstantiations(0, "Yes"), new _InfoReader.FindMemberFlag(0, "IgnoreOverrides"), matchValue$$10[2], matchValue$$10[1]));
      const dispatchSlotsKeyed$$1 = (0, _illib.NameMultiMapModule$$$initBy)(function f$$10(_arg1$$6) {
        const v$$1 = _arg1$$6.fields[0];
        return (0, _infos.MethInfo$$get_LogicalName)(v$$1);
      }, dispatchSlots$$2);
      return (0, _Seq.singleton)(new SlotImplSet(0, "SlotImplSet", dispatchSlots$$2, dispatchSlotsKeyed$$1, availPriorOverrides$$2, reqdProperties));
    }, reqdTyInfos);
  }));
}

function DispatchSlotChecking$$$CheckImplementationRelationAtEndOfInferenceScope(infoReader$$1, denv$$9, nenv$$1, sink$$1, tycon, isImplementation) {
  const g$$14 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$1);
  const amap$$10 = (0, _InfoReader.InfoReader$$get_amap)(infoReader$$1);
  const tcaug = (0, _tast.Entity$$get_TypeContents)(tycon);
  const interfaces$$1 = (0, _List.map)(function mapping$$9(tupledArg$$5) {
    return [tupledArg$$5[0], tupledArg$$5[2]];
  }, (0, _tast.Entity$$get_ImmediateInterfacesOfFSharpTycon)(tycon));
  const overallTy = (0, _TastOps.generalizedTyconRef)((0, _tast.mkLocalTyconRef)(tycon));
  const allReqdTys$$1 = (0, _Types.L)([overallTy, (0, _tast.Entity$$get_Range)(tycon)], interfaces$$1);
  const allImmediateMembers = (0, _List.append)((0, _tast.Entity$$get_MembersOfFSharpTyconSorted)(tycon), (0, _tast.Entity$$get_AllGeneratedValues)(tycon));
  const slotImplSets = DispatchSlotChecking$$$GetSlotImplSets(infoReader$$1, denv$$9, false, allReqdTys$$1);
  const allImpls = (0, _List.zip)(allReqdTys$$1, slotImplSets);
  const allImmediateMembersThatMightImplementDispatchSlots = (0, _List.filter)(function predicate$$14(overrideBy$$10) {
    if ((0, _tast.ValRef$$get_IsInstanceMember)(overrideBy$$10) ? (0, _infos.ValRef$002Eget_IsVirtualMember)(overrideBy$$10) : false) {
      return !(0, _infos.ValRef$002Eget_IsDispatchSlotMember)(overrideBy$$10);
    } else {
      return false;
    }
  }, allImmediateMembers);

  const mustOverrideSomething = function mustOverrideSomething(reqdTy$$9, overrideBy$$11) {
    const memberInfo = (0, _tast.ValRef$$get_MemberInfo)(overrideBy$$11);

    if (!(0, _infos.ValRef$002EIsFSharpEventProperty$$2AE8EA0C)(overrideBy$$11, g$$14) ? memberInfo.MemberFlags.IsOverrideOrExplicitImpl : false) {
      const matchValue$$11 = memberInfo.ImplementedSlotSigs;

      if (matchValue$$11.tail == null) {
        return !(0, _TastOps.isInterfaceTy)(g$$14, reqdTy$$9);
      } else {
        const ss$$1 = matchValue$$11;
        return (0, _List.forAll)(function predicate$$15(ss$$2) {
          const ty$$8 = (0, _tast.SlotSig$$get_ImplementedType)(ss$$2);

          if ((0, _TastOps.isInterfaceTy)(g$$14, ty$$8)) {
            return (0, _TastOps.typeEquiv)(g$$14, ty$$8, reqdTy$$9);
          } else {
            return !(0, _TastOps.isInterfaceTy)(g$$14, reqdTy$$9);
          }
        }, ss$$1);
      }
    } else {
      return false;
    }
  };

  (0, _Seq.iterate)(function (forLoopVar$$3) {
    const reqdTy$$10 = forLoopVar$$3[0][0];
    const m$$15 = forLoopVar$$3[0][1];
    const dispatchSlotsKeyed$$2 = forLoopVar$$3[1].fields[1];
    const dispatchSlots$$3 = forLoopVar$$3[1].fields[0];
    const availPriorOverrides$$3 = forLoopVar$$3[1].fields[2];

    try {
      const allImmediateMembersThatMightImplementDispatchSlots$$1 = (0, _List.map)(function mapping$$10(overrideBy$$12) {
        return [overrideBy$$12, DispatchSlotChecking$$$GetTypeMemberOverrideInfo(g$$14, reqdTy$$10, overrideBy$$12)];
      }, allImmediateMembersThatMightImplementDispatchSlots);

      if (isImplementation ? !(0, _TastOps.isInterfaceTy)(g$$14, overallTy) : false) {
        const overrides$$2 = (0, _List.map)(function mapping$$11(tuple$$3) {
          return tuple$$3[1];
        }, allImmediateMembersThatMightImplementDispatchSlots$$1);
        const allCorrect = DispatchSlotChecking$$$CheckDispatchSlotsAreImplemented(denv$$9, g$$14, amap$$10, m$$15, nenv$$1, sink$$1, tcaug.tcaug_abstract, reqdTy$$10, dispatchSlots$$3, availPriorOverrides$$3, overrides$$2);

        if ((!allCorrect ? !tcaug.tcaug_abstract : false) ? !(0, _TastOps.isInterfaceTy)(g$$14, reqdTy$$10) : false) {
          (0, _ErrorLogger.errorR)(new TypeIsImplicitlyAbstract(m$$15));
        }

        const overridesToCheck = (0, _List.map)(function mapping$$12(tuple$$5) {
          return tuple$$5[1];
        }, (0, _List.filter)(function predicate$$16($arg$$3) {
          return mustOverrideSomething(reqdTy$$10, $arg$$3[0]);
        }, allImmediateMembersThatMightImplementDispatchSlots$$1));
        DispatchSlotChecking$$$CheckOverridesAreAllUsedOnce(denv$$9, g$$14, amap$$10, false, reqdTy$$10, dispatchSlotsKeyed$$2, availPriorOverrides$$3, overridesToCheck);
      }
    } catch (e) {
      (0, _ErrorLogger.errorRecovery)(e, m$$15);
    }
  }, allImpls);
  (0, _List.iterate)(function action$$2(overrideBy$$13) {
    const isFakeEventProperty$$3 = (0, _infos.ValRef$002EIsFSharpEventProperty$$2AE8EA0C)(overrideBy$$13, g$$14);
    let overriden;

    if (isFakeEventProperty$$3) {
      const slotsigs = (0, _tast.ValRef$$get_MemberInfo)(overrideBy$$13).ImplementedSlotSigs;
      overriden = (0, _List.map)(function mapping$$13(slotsig) {
        return (0, _infos.ReparentSlotSigToUseMethodTypars)(g$$14, (0, _tast.ValRef$$get_Range)(overrideBy$$13), overrideBy$$13, slotsig);
      }, slotsigs);
    } else {
      overriden = (0, _List.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.collect)(function (matchValue$$12) {
          const reqdTy$$11 = matchValue$$12[0][0];
          const m$$17 = matchValue$$12[0][1];
          const dispatchSlotsKeyed$$3 = matchValue$$12[1].fields[1];
          const _dispatchSlots = matchValue$$12[1].fields[0];
          const overrideByInfo$$1 = DispatchSlotChecking$$$GetTypeMemberOverrideInfo(g$$14, reqdTy$$11, overrideBy$$13);
          const overridenForThisSlotImplSet = (0, _List.ofSeq)((0, _Seq.delay)(function () {
            return (0, _Seq.collect)(function (matchValue$$13) {
              var matchValue$$14, virtMember;
              const dispatchSlot$$18 = matchValue$$13.fields[0];
              return DispatchSlotChecking$$$OverrideImplementsDispatchSlot(g$$14, amap$$10, m$$17, dispatchSlot$$18, overrideByInfo$$1) ? (0, _Seq.append)((0, _TastOps.tyconRefEq)(g$$14, OverrideInfo$$get_BoundingTyconRef(overrideByInfo$$1), (0, _infos.MethInfo$$get_DeclaringTyconRef)(dispatchSlot$$18)) ? (matchValue$$14 = (0, _infos.MethInfo$$get_ArbitraryValRef)(dispatchSlot$$18), matchValue$$14 == null ? (null, (0, _Seq.empty)()) : (virtMember = matchValue$$14, (0, _Seq.append)((0, _tast.ValRef$$get_MemberInfo)(virtMember).IsImplemented ? ((0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcDefaultImplementationAlreadyExists)(), OverrideInfo$$get_Range(overrideByInfo$$1))), (0, _Seq.empty)()) : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                (0, _tast.ValRef$$get_MemberInfo)(virtMember).IsImplemented = true;
                return (0, _Seq.empty)();
              })))) : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                const slotsig$$1 = (0, _infos.MethInfo$$GetSlotSig$$73F6E43C)(dispatchSlot$$18, amap$$10, m$$17);
                const slotsig$$2 = (0, _infos.ReparentSlotSigToUseMethodTypars)(g$$14, m$$17, overrideBy$$13, slotsig$$1);
                return (0, _Seq.singleton)(slotsig$$2);
              })) : (0, _Seq.empty)();
            }, (0, _illib.NameMultiMapModule$$$find)(OverrideInfo$$get_LogicalName(overrideByInfo$$1), dispatchSlotsKeyed$$3));
          }));
          return overridenForThisSlotImplSet;
        }, allImpls);
      }));
    }

    (0, _tast.ValRef$$get_MemberInfo)(overrideBy$$13).ImplementedSlotSigs = overriden;
  }, allImmediateMembersThatMightImplementDispatchSlots);
}

function FinalTypeDefinitionChecksAtEndOfInferenceScope(infoReader$$2, nenv$$2, sink$$2, isImplementation$$1, denv$$10, tycon$$1) {
  const g$$15 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$2);
  const amap$$11 = (0, _InfoReader.InfoReader$$get_amap)(infoReader$$2);
  const tcaug$$1 = (0, _tast.Entity$$get_TypeContents)(tycon$$1);
  tcaug$$1.tcaug_closed = true;

  if ((((isImplementation$$1 ? (0, _tast.Entity$$get_GeneratedCompareToValues)(tycon$$1) == null : false) ? (0, _TastOps.Entity$002EHasInterface)(tycon$$1, g$$15, (0, _TcGlobals.TcGlobals$$get_mk_IComparable_ty)(g$$15)) : false) ? !(0, _TastOps.Entity$002EHasOverride)(tycon$$1, g$$15, "Equals", (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$15), (0, _Types.L)())) : false) ? !(0, _tast.Entity$$get_IsFSharpInterfaceTycon)(tycon$$1) : false) {
    if ((0, _AugmentWithHashCompare.TyconIsCandidateForAugmentationWithEquals)(g$$15, tycon$$1)) {
      (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelTypeImplementsIComparableShouldOverrideObjectEquals$$Z721C83C5)((0, _tast.Entity$$get_DisplayName)(tycon$$1)), (0, _tast.Entity$$get_Range)(tycon$$1)));
    } else {
      (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelTypeImplementsIComparableDefaultObjectEqualsProvided$$Z721C83C5)((0, _tast.Entity$$get_DisplayName)(tycon$$1)), (0, _tast.Entity$$get_Range)(tycon$$1)));
    }
  }

  (0, _AugmentWithHashCompare.CheckAugmentationAttribs)(isImplementation$$1, g$$15, amap$$11, tycon$$1);

  if (isImplementation$$1) {
    const tcaug$$2 = (0, _tast.Entity$$get_TypeContents)(tycon$$1);
    const m$$18 = (0, _tast.Entity$$get_Range)(tycon$$1);
    const hasExplicitObjectGetHashCode = (0, _TastOps.Entity$002EHasOverride)(tycon$$1, g$$15, "GetHashCode", (0, _Types.L)());
    const hasExplicitObjectEqualsOverride = (0, _TastOps.Entity$002EHasOverride)(tycon$$1, g$$15, "Equals", (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$15), (0, _Types.L)()));

    if ((0, _tast.Entity$$get_GeneratedHashAndEqualsWithComparerValues)(tycon$$1) != null ? hasExplicitObjectGetHashCode ? true : hasExplicitObjectEqualsOverride : false) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelExplicitImplementationOfGetHashCodeOrEquals$$Z721C83C5)((0, _tast.Entity$$get_DisplayName)(tycon$$1)), m$$18));
    }

    if (!hasExplicitObjectEqualsOverride ? hasExplicitObjectGetHashCode : false) {
      (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelExplicitImplementationOfGetHashCode$$Z721C83C5)((0, _tast.Entity$$get_DisplayName)(tycon$$1)), m$$18));
    }

    if (hasExplicitObjectEqualsOverride ? !hasExplicitObjectGetHashCode : false) {
      (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelExplicitImplementationOfEquals$$Z721C83C5)((0, _tast.Entity$$get_DisplayName)(tycon$$1)), m$$18));
    }

    (0, _tast.TyconAugmentation$$SetHasObjectGetHashCode$$Z1FBCCD16)(tcaug$$2, hasExplicitObjectGetHashCode);

    if (((((!(0, _tast.Entity$$get_IsHiddenReprTycon)(tycon$$1) ? !(0, _tast.Entity$$get_IsTypeAbbrev)(tycon$$1) : false) ? !(0, _tast.Entity$$get_IsMeasureableReprTycon)(tycon$$1) : false) ? !(0, _tast.Entity$$get_IsAsmReprTycon)(tycon$$1) : false) ? !(0, _tast.Entity$$get_IsFSharpInterfaceTycon)(tycon$$1) : false) ? !(0, _tast.Entity$$get_IsFSharpDelegateTycon)(tycon$$1) : false) {
      DispatchSlotChecking$$$CheckImplementationRelationAtEndOfInferenceScope(infoReader$$2, denv$$10, nenv$$2, sink$$2, tycon$$1, isImplementation$$1);
    }
  }
}

function GetAbstractMethInfosForSynMethodDecl(infoReader$$3, ad$$1, memberName, bindm, typToSearchForAbstractMembers, valSynData) {
  let minfos$$1;

  if (typToSearchForAbstractMembers[1] == null) {
    const ty$$9 = typToSearchForAbstractMembers[0];
    minfos$$1 = (0, _InfoReader.GetIntrinsicMethInfosOfType)(infoReader$$3, (0, _ast.Ident$$get_idText)(memberName), ad$$1, new _infos.AllowMultiIntfInstantiations(0, "Yes"), new _InfoReader.FindMemberFlag(0, "IgnoreOverrides"), bindm, ty$$9);
  } else {
    const dispatchSlotsKeyed$$4 = typToSearchForAbstractMembers[1].fields[1];
    minfos$$1 = (0, _List.map)(function mapping$$14(_arg1$$7) {
      const dispatchSlot$$19 = _arg1$$7.fields[0];
      return dispatchSlot$$19;
    }, (0, _illib.NameMultiMapModule$$$find)((0, _ast.Ident$$get_idText)(memberName), dispatchSlotsKeyed$$4));
  }

  const dispatchSlots$$4 = (0, _List.filter)(function predicate$$17(minfo$$5) {
    return (0, _infos.MethInfo$$get_IsDispatchSlot)(minfo$$5);
  }, minfos$$1);
  const topValSynArities = (0, _ast.SynInfo$$$AritiesOfArgs)(valSynData);
  const topValSynArities$$1 = topValSynArities.tail == null ? topValSynArities : (0, _List.tail)(topValSynArities);
  const dispatchSlotsArityMatch = (0, _List.filter)(function predicate$$18(minfo$$6) {
    return (0, _Util.equals)((0, _infos.MethInfo$$get_NumArgs)(minfo$$6), topValSynArities$$1);
  }, dispatchSlots$$4);
  return [dispatchSlots$$4, dispatchSlotsArityMatch];
}

function GetAbstractPropInfosForSynPropertyDecl(infoReader$$4, ad$$2, memberName$$1, bindm$$1, typToSearchForAbstractMembers$$1, _k, _valSynData) {
  let pinfos;

  if (typToSearchForAbstractMembers$$1[1] == null) {
    const ty$$10 = typToSearchForAbstractMembers$$1[0];
    pinfos = (0, _InfoReader.GetIntrinsicPropInfosOfType)(infoReader$$4, (0, _ast.Ident$$get_idText)(memberName$$1), ad$$2, new _infos.AllowMultiIntfInstantiations(0, "Yes"), new _InfoReader.FindMemberFlag(0, "IgnoreOverrides"), bindm$$1, ty$$10);
  } else {
    const reqdProps = typToSearchForAbstractMembers$$1[1].fields[3];
    pinfos = (0, _List.filter)(function predicate$$19(pinfo) {
      return (0, _infos.PropInfo$$get_PropertyName)(pinfo) === (0, _ast.Ident$$get_idText)(memberName$$1);
    }, reqdProps);
  }

  const dispatchSlots$$5 = (0, _List.filter)(function predicate$$20(pinfo$$1) {
    return (0, _infos.PropInfo$$get_IsVirtualProperty)(pinfo$$1);
  }, pinfos);
  return dispatchSlots$$5;
}