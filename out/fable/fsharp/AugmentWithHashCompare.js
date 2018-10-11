"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkIComparableCompareToSlotSig = mkIComparableCompareToSlotSig;
exports.mkGenericIComparableCompareToSlotSig = mkGenericIComparableCompareToSlotSig;
exports.mkIStructuralComparableCompareToSlotSig = mkIStructuralComparableCompareToSlotSig;
exports.mkGenericIEquatableEqualsSlotSig = mkGenericIEquatableEqualsSlotSig;
exports.mkIStructuralEquatableEqualsSlotSig = mkIStructuralEquatableEqualsSlotSig;
exports.mkIStructuralEquatableGetHashCodeSlotSig = mkIStructuralEquatableGetHashCodeSlotSig;
exports.mkGetHashCodeSlotSig = mkGetHashCodeSlotSig;
exports.mkEqualsSlotSig = mkEqualsSlotSig;
exports.mkThisTy = mkThisTy;
exports.mkCompareObjTy = mkCompareObjTy;
exports.mkCompareTy = mkCompareTy;
exports.mkCompareWithComparerTy = mkCompareWithComparerTy;
exports.mkEqualsObjTy = mkEqualsObjTy;
exports.mkEqualsTy = mkEqualsTy;
exports.mkEqualsWithComparerTy = mkEqualsWithComparerTy;
exports.mkHashTy = mkHashTy;
exports.mkHashWithComparerTy = mkHashWithComparerTy;
exports.mkRelBinOp = mkRelBinOp;
exports.mkClt = mkClt;
exports.mkCgt = mkCgt;
exports.mkILLangPrimTy = mkILLangPrimTy;
exports.mkILCallGetComparer = mkILCallGetComparer;
exports.mkILCallGetEqualityComparer = mkILCallGetEqualityComparer;
exports.mkThisVar = mkThisVar;
exports.mkShl = mkShl;
exports.mkShr = mkShr;
exports.mkAdd = mkAdd;
exports.mkAddToHashAcc = mkAddToHashAcc;
exports.mkCombineHashGenerators = mkCombineHashGenerators;
exports.mkThatAddrLocal = mkThatAddrLocal;
exports.mkThatAddrLocalIfNeeded = mkThatAddrLocalIfNeeded;
exports.mkThisVarThatVar = mkThisVarThatVar;
exports.mkThatVarBind = mkThatVarBind;
exports.mkBindThatAddr = mkBindThatAddr;
exports.mkBindThatAddrIfNeeded = mkBindThatAddrIfNeeded;
exports.mkDerefThis = mkDerefThis;
exports.mkCompareTestConjuncts = mkCompareTestConjuncts;
exports.mkEqualsTestConjuncts = mkEqualsTestConjuncts;
exports.mkMinimalTy = mkMinimalTy;
exports.mkBindNullComparison = mkBindNullComparison;
exports.mkBindThisNullEquals = mkBindThisNullEquals;
exports.mkBindThatNullEquals = mkBindThatNullEquals;
exports.mkBindNullHash = mkBindNullHash;
exports.mkRecdCompare = mkRecdCompare;
exports.mkRecdCompareWithComparer = mkRecdCompareWithComparer;
exports.mkRecdEquality = mkRecdEquality;
exports.mkRecdEqualityWithComparer = mkRecdEqualityWithComparer;
exports.mkExnEquality = mkExnEquality;
exports.mkExnEqualityWithComparer = mkExnEqualityWithComparer;
exports.mkUnionCompare = mkUnionCompare;
exports.mkUnionCompareWithComparer = mkUnionCompareWithComparer;
exports.mkUnionEquality = mkUnionEquality;
exports.mkUnionEqualityWithComparer = mkUnionEqualityWithComparer;
exports.mkRecdHashWithComparer = mkRecdHashWithComparer;
exports.mkExnHashWithComparer = mkExnHashWithComparer;
exports.mkUnionHashWithComparer = mkUnionHashWithComparer;
exports.isNominalExnc = isNominalExnc;
exports.isTrueFSharpStructTycon = isTrueFSharpStructTycon;
exports.canBeAugmentedWithEquals = canBeAugmentedWithEquals;
exports.canBeAugmentedWithCompare = canBeAugmentedWithCompare;
exports.getAugmentationAttribs = getAugmentationAttribs;
exports.CheckAugmentationAttribs = CheckAugmentationAttribs;
exports.TyconIsCandidateForAugmentationWithCompare = TyconIsCandidateForAugmentationWithCompare;
exports.TyconIsCandidateForAugmentationWithEquals = TyconIsCandidateForAugmentationWithEquals;
exports.TyconIsCandidateForAugmentationWithHash = TyconIsCandidateForAugmentationWithHash;
exports.slotImplMethod = slotImplMethod;
exports.nonVirtualMethod = nonVirtualMethod;
exports.mkValSpec = mkValSpec;
exports.MakeValsForCompareAugmentation = MakeValsForCompareAugmentation;
exports.MakeValsForCompareWithComparerAugmentation = MakeValsForCompareWithComparerAugmentation;
exports.MakeValsForEqualsAugmentation = MakeValsForEqualsAugmentation;
exports.MakeValsForEqualityWithComparerAugmentation = MakeValsForEqualityWithComparerAugmentation;
exports.MakeBindingsForCompareAugmentation = MakeBindingsForCompareAugmentation;
exports.MakeBindingsForCompareWithComparerAugmentation = MakeBindingsForCompareWithComparerAugmentation;
exports.MakeBindingsForEqualityWithComparerAugmentation = MakeBindingsForEqualityWithComparerAugmentation;
exports.MakeBindingsForEqualsAugmentation = MakeBindingsForEqualsAugmentation;
exports.TypeDefinitelyHasEquality = TypeDefinitelyHasEquality;
exports.tupArg = exports.unaryArg = exports.unitArg = void 0;

var _tast = require("./tast");

var _TcGlobals = require("./TcGlobals");

var _Types = require("../fable-core.2.0.3/Types");

var _TastOps = require("./TastOps");

var _il = require("../absil/il");

var _List = require("../fable-core.2.0.3/List");

var _illib = require("../absil/illib");

var _ast = require("./ast");

var _Util = require("../fable-core.2.0.3/Util");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _infos = require("./infos");

function mkIComparableCompareToSlotSig(g) {
  return new _tast.SlotSig(0, "TSlotSig", "CompareTo", (0, _TcGlobals.TcGlobals$$get_mk_IComparable_ty)(g), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)((0, _Types.L)(new _tast.SlotParam(0, "TSlotParam", "obj", (0, _TcGlobals.TcGlobals$$get_obj_ty)(g), false, false, false, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)()), (0, _TcGlobals.TcGlobals$$get_int_ty)(g));
}

function mkGenericIComparableCompareToSlotSig(g$$1, ty) {
  return new _tast.SlotSig(0, "TSlotSig", "CompareTo", (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_system_GenericIComparable_tcref)(g$$1), (0, _Types.L)(ty, (0, _Types.L)())), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)((0, _Types.L)(new _tast.SlotParam(0, "TSlotParam", "obj", ty, false, false, false, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)()), (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$1));
}

function mkIStructuralComparableCompareToSlotSig(g$$2) {
  return new _tast.SlotSig(0, "TSlotSig", "CompareTo", (0, _TcGlobals.TcGlobals$$get_mk_IStructuralComparable_ty)(g$$2), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)((0, _Types.L)(new _tast.SlotParam(0, "TSlotParam", null, (0, _TastOps.mkRefTupledTy)(g$$2, (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$2), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_IComparer_ty)(g$$2), (0, _Types.L)()))), false, false, false, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)()), (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$2));
}

function mkGenericIEquatableEqualsSlotSig(g$$3, ty$$1) {
  return new _tast.SlotSig(0, "TSlotSig", "Equals", (0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_system_GenericIEquatable_tcref)(g$$3), (0, _Types.L)(ty$$1, (0, _Types.L)())), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)((0, _Types.L)(new _tast.SlotParam(0, "TSlotParam", "obj", ty$$1, false, false, false, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)()), (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$3));
}

function mkIStructuralEquatableEqualsSlotSig(g$$4) {
  return new _tast.SlotSig(0, "TSlotSig", "Equals", (0, _TcGlobals.TcGlobals$$get_mk_IStructuralEquatable_ty)(g$$4), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)((0, _Types.L)(new _tast.SlotParam(0, "TSlotParam", null, (0, _TastOps.mkRefTupledTy)(g$$4, (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$4), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_IEqualityComparer_ty)(g$$4), (0, _Types.L)()))), false, false, false, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)()), (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$4));
}

function mkIStructuralEquatableGetHashCodeSlotSig(g$$5) {
  return new _tast.SlotSig(0, "TSlotSig", "GetHashCode", (0, _TcGlobals.TcGlobals$$get_mk_IStructuralEquatable_ty)(g$$5), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)((0, _Types.L)(new _tast.SlotParam(0, "TSlotParam", null, (0, _TcGlobals.TcGlobals$$get_IEqualityComparer_ty)(g$$5), false, false, false, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)()), (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$5));
}

function mkGetHashCodeSlotSig(g$$6) {
  return new _tast.SlotSig(0, "TSlotSig", "GetHashCode", (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$6), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)((0, _Types.L)(), (0, _Types.L)()), (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$6));
}

function mkEqualsSlotSig(g$$7) {
  return new _tast.SlotSig(0, "TSlotSig", "Equals", (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$7), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)((0, _Types.L)(new _tast.SlotParam(0, "TSlotParam", "obj", (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$7), false, false, false, (0, _Types.L)()), (0, _Types.L)()), (0, _Types.L)()), (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$7));
}

function mkThisTy(g$$8, ty$$2) {
  if ((0, _TastOps.isStructTy)(g$$8, ty$$2)) {
    return (0, _TastOps.mkByrefTy)(g$$8, ty$$2);
  } else {
    return ty$$2;
  }
}

function mkCompareObjTy(g$$9, ty$$3) {
  return (0, _TastOps.op_MinusMinusGreater)(mkThisTy(g$$9, ty$$3), (0, _TastOps.op_MinusMinusGreater)((0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$9), (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$9)));
}

function mkCompareTy(g$$10, ty$$4) {
  return (0, _TastOps.op_MinusMinusGreater)(mkThisTy(g$$10, ty$$4), (0, _TastOps.op_MinusMinusGreater)(ty$$4, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$10)));
}

function mkCompareWithComparerTy(g$$11, ty$$5) {
  return (0, _TastOps.op_MinusMinusGreater)(mkThisTy(g$$11, ty$$5), (0, _TastOps.op_MinusMinusGreater)((0, _TastOps.mkRefTupledTy)(g$$11, (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$11), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_IComparer_ty)(g$$11), (0, _Types.L)()))), (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$11)));
}

function mkEqualsObjTy(g$$12, ty$$6) {
  return (0, _TastOps.op_MinusMinusGreater)(mkThisTy(g$$12, ty$$6), (0, _TastOps.op_MinusMinusGreater)((0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$12), (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$12)));
}

function mkEqualsTy(g$$13, ty$$7) {
  return (0, _TastOps.op_MinusMinusGreater)(mkThisTy(g$$13, ty$$7), (0, _TastOps.op_MinusMinusGreater)(ty$$7, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$13)));
}

function mkEqualsWithComparerTy(g$$14, ty$$8) {
  return (0, _TastOps.op_MinusMinusGreater)(mkThisTy(g$$14, ty$$8), (0, _TastOps.op_MinusMinusGreater)((0, _TastOps.mkRefTupledTy)(g$$14, (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$14), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_IEqualityComparer_ty)(g$$14), (0, _Types.L)()))), (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$14)));
}

function mkHashTy(g$$15, ty$$9) {
  return (0, _TastOps.op_MinusMinusGreater)(mkThisTy(g$$15, ty$$9), (0, _TastOps.op_MinusMinusGreater)((0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$15), (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$15)));
}

function mkHashWithComparerTy(g$$16, ty$$10) {
  return (0, _TastOps.op_MinusMinusGreater)(mkThisTy(g$$16, ty$$10), (0, _TastOps.op_MinusMinusGreater)((0, _TcGlobals.TcGlobals$$get_IEqualityComparer_ty)(g$$16), (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$16)));
}

function mkRelBinOp(g$$17, op, m, e1, e2) {
  return (0, _TastOps.mkAsmExpr)((0, _Types.L)(op, (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(e1, (0, _Types.L)(e2, (0, _Types.L)())), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$17), (0, _Types.L)()), m);
}

function mkClt(g$$18, m$$1, e1$$1, e2$$1) {
  return mkRelBinOp(g$$18, new _il.ILInstr(9, "AI_clt"), m$$1, e1$$1, e2$$1);
}

function mkCgt(g$$19, m$$2, e1$$2, e2$$2) {
  return mkRelBinOp(g$$19, new _il.ILInstr(7, "AI_cgt"), m$$2, e1$$2, e2$$2);
}

function mkILLangPrimTy(g$$20) {
  return (0, _il.mkILNonGenericBoxedTy)((0, _tast.EntityRef$$get_CompiledRepresentationForNamedType)((0, _TcGlobals.TcGlobals$$get_tcref_LanguagePrimitives)(g$$20)));
}

function mkILCallGetComparer(g$$21, m$$3) {
  const ty$$11 = (0, _il.mkILNonGenericBoxedTy)((0, _tast.EntityRef$$get_CompiledRepresentationForNamedType)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IComparer)(g$$21)));
  const mspec = (0, _il.mkILNonGenericStaticMethSpecInTy)(mkILLangPrimTy(g$$21), "get_GenericComparer", (0, _Types.L)(), ty$$11);
  return (0, _TastOps.mkAsmExpr)((0, _Types.L)((0, _il.mkNormalCall)(mspec), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_IComparer_ty)(g$$21), (0, _Types.L)()), m$$3);
}

function mkILCallGetEqualityComparer(g$$22, m$$4) {
  const ty$$12 = (0, _il.mkILNonGenericBoxedTy)((0, _tast.EntityRef$$get_CompiledRepresentationForNamedType)((0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_IEqualityComparer)(g$$22)));
  const mspec$$1 = (0, _il.mkILNonGenericStaticMethSpecInTy)(mkILLangPrimTy(g$$22), "get_GenericEqualityComparer", (0, _Types.L)(), ty$$12);
  return (0, _TastOps.mkAsmExpr)((0, _Types.L)((0, _il.mkNormalCall)(mspec$$1), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_IEqualityComparer_ty)(g$$22), (0, _Types.L)()), m$$4);
}

function mkThisVar(g$$23, m$$5, ty$$13) {
  return (0, _TastOps.mkCompGenLocal)(m$$5, "this", mkThisTy(g$$23, ty$$13));
}

function mkShl(g$$24, m$$6, acce, n) {
  return (0, _TastOps.mkAsmExpr)((0, _Types.L)(new _il.ILInstr(19, "AI_shl"), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(acce, (0, _Types.L)((0, _TastOps.mkInt)(g$$24, m$$6, n), (0, _Types.L)())), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_int_ty)(g$$24), (0, _Types.L)()), m$$6);
}

function mkShr(g$$25, m$$7, acce$$1, n$$1) {
  return (0, _TastOps.mkAsmExpr)((0, _Types.L)(new _il.ILInstr(20, "AI_shr"), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(acce$$1, (0, _Types.L)((0, _TastOps.mkInt)(g$$25, m$$7, n$$1), (0, _Types.L)())), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_int_ty)(g$$25), (0, _Types.L)()), m$$7);
}

function mkAdd(g$$26, m$$8, e1$$3, e2$$3) {
  return (0, _TastOps.mkAsmExpr)((0, _Types.L)(new _il.ILInstr(0, "AI_add"), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(e1$$3, (0, _Types.L)(e2$$3, (0, _Types.L)())), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_int_ty)(g$$26), (0, _Types.L)()), m$$8);
}

function mkAddToHashAcc(g$$27, m$$9, e, accv, acce$$2) {
  return (0, _TastOps.mkValSet)(m$$9, accv, mkAdd(g$$27, m$$9, (0, _TastOps.mkInt)(g$$27, m$$9, -1640531527), mkAdd(g$$27, m$$9, e, mkAdd(g$$27, m$$9, mkShl(g$$27, m$$9, acce$$2, 6), mkShr(g$$27, m$$9, acce$$2, 2)))));
}

function mkCombineHashGenerators(g$$28, m$$10, exprs, accv$$1, acce$$3) {
  return (0, _List.fold)(function folder(tm, e$$1) {
    return (0, _TastOps.mkCompGenSequential)(m$$10, mkAddToHashAcc(g$$28, m$$10, e$$1, accv$$1, acce$$3), tm);
  }, acce$$3, exprs);
}

function mkThatAddrLocal(g$$29, m$$11, ty$$14) {
  return (0, _TastOps.mkCompGenLocal)(m$$11, "obj", mkThisTy(g$$29, ty$$14));
}

function mkThatAddrLocalIfNeeded(g$$30, m$$12, tcve, ty$$15) {
  if ((0, _TastOps.isStructTy)(g$$30, ty$$15)) {
    const patternInput = (0, _TastOps.mkCompGenLocal)(m$$12, "obj", mkThisTy(g$$30, ty$$15));
    return [patternInput[0], patternInput[1]];
  } else {
    return [null, tcve];
  }
}

function mkThisVarThatVar(g$$31, m$$13, ty$$16) {
  const patternInput$$1 = mkThisVar(g$$31, m$$13, ty$$16);
  const patternInput$$2 = mkThatAddrLocal(g$$31, m$$13, ty$$16);
  return [patternInput$$1[0], patternInput$$2[0], patternInput$$1[1], patternInput$$2[1]];
}

function mkThatVarBind(g$$32, m$$14, ty$$17, thataddrv$$2, expr) {
  if ((0, _TastOps.isStructTy)(g$$32, ty$$17)) {
    const patternInput$$3 = (0, _TastOps.mkMutableCompGenLocal)(m$$14, "obj", ty$$17);
    return [patternInput$$3[0], (0, _TastOps.mkCompGenLet)(m$$14, thataddrv$$2, (0, _TastOps.mkValAddr)(m$$14, false, (0, _tast.mkLocalValRef)(patternInput$$3[0])), expr)];
  } else {
    return [thataddrv$$2, expr];
  }
}

function mkBindThatAddr(g$$33, m$$15, ty$$18, thataddrv$$3, thatv, thate, expr$$1) {
  if ((0, _TastOps.isStructTy)(g$$33, ty$$18)) {
    return (0, _TastOps.mkCompGenLet)(m$$15, thataddrv$$3, (0, _TastOps.mkValAddr)(m$$15, false, (0, _tast.mkLocalValRef)(thatv)), expr$$1);
  } else {
    return (0, _TastOps.mkCompGenLet)(m$$15, thataddrv$$3, thate, expr$$1);
  }
}

function mkBindThatAddrIfNeeded(m$$16, thataddrvOpt, thatv$$1, expr$$2) {
  if (thataddrvOpt != null) {
    const thataddrv$$4 = thataddrvOpt;
    return (0, _TastOps.mkCompGenLet)(m$$16, thataddrv$$4, (0, _TastOps.mkValAddr)(m$$16, false, (0, _tast.mkLocalValRef)(thatv$$1)), expr$$2);
  } else {
    return expr$$2;
  }
}

function mkDerefThis(g$$34, m$$17, thisv$$1, thise$$1) {
  if ((0, _TastOps.isByrefTy)(g$$34, (0, _tast.Val$$get_Type)(thisv$$1))) {
    return (0, _TastOps.mkAddrGet)(m$$17, (0, _tast.mkLocalValRef)(thisv$$1));
  } else {
    return thise$$1;
  }
}

function mkCompareTestConjuncts(g$$35, m$$18, exprs$$1) {
  if (exprs$$1.tail != null) {
    if (exprs$$1.tail.tail == null) {
      return exprs$$1.head;
    } else {
      const patternInput$$4 = (0, _illib.List$$$frontAndBack)(exprs$$1);
      return (0, _List.foldBack)(function folder$$1(e$$2, acc) {
        const patternInput$$5 = (0, _TastOps.mkCompGenLocal)(m$$18, "n", (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$35));
        return (0, _TastOps.mkCompGenLet)(m$$18, patternInput$$5[0], e$$2, (0, _TastOps.mkCond)(new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"), m$$18, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$35), mkClt(g$$35, m$$18, patternInput$$5[1], (0, _TastOps.mkZero)(g$$35, m$$18)), patternInput$$5[1], (0, _TastOps.mkCond)(new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"), m$$18, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$35), mkCgt(g$$35, m$$18, patternInput$$5[1], (0, _TastOps.mkZero)(g$$35, m$$18)), patternInput$$5[1], acc)));
      }, patternInput$$4[0], patternInput$$4[1]);
    }
  } else {
    return (0, _TastOps.mkZero)(g$$35, m$$18);
  }
}

function mkEqualsTestConjuncts(g$$36, m$$19, exprs$$2) {
  if (exprs$$2.tail != null) {
    if (exprs$$2.tail.tail == null) {
      return exprs$$2.head;
    } else {
      const patternInput$$6 = (0, _illib.List$$$frontAndBack)(exprs$$2);
      return (0, _List.foldBack)(function (e$$3, acc$$1) {
        return (0, _TastOps.mkCond)(new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"), m$$19, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$36), e$$3, acc$$1, (0, _TastOps.mkFalse)(g$$36, m$$19));
      }, patternInput$$6[0], patternInput$$6[1]);
    }
  } else {
    return (0, _TastOps.mkOne)(g$$36, m$$19);
  }
}

function mkMinimalTy(g$$37, tcref) {
  if ((0, _tast.Entity$$get_IsExceptionDecl)((0, _tast.EntityRef$$get_Deref)(tcref))) {
    return [(0, _Types.L)(), (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$37)];
  } else {
    return (0, _TastOps.generalizeTyconRef)(tcref);
  }
}

function mkBindNullComparison(g$$38, m$$20, thise$$2, thate$$1, expr$$3) {
  const expr$$4 = (0, _TastOps.mkNonNullCond)(g$$38, m$$20, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$38), thate$$1, expr$$3, (0, _TastOps.mkOne)(g$$38, m$$20));
  const expr$$5 = (0, _TastOps.mkNonNullCond)(g$$38, m$$20, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$38), thise$$2, expr$$4, (0, _TastOps.mkNonNullCond)(g$$38, m$$20, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$38), thate$$1, (0, _TastOps.mkMinusOne)(g$$38, m$$20), (0, _TastOps.mkZero)(g$$38, m$$20)));
  return expr$$5;
}

function mkBindThisNullEquals(g$$39, m$$21, thise$$3, thate$$2, expr$$6) {
  const expr$$7 = (0, _TastOps.mkNonNullCond)(g$$39, m$$21, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$39), thise$$3, expr$$6, (0, _TastOps.mkNonNullCond)(g$$39, m$$21, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$39), thate$$2, (0, _TastOps.mkFalse)(g$$39, m$$21), (0, _TastOps.mkTrue)(g$$39, m$$21)));
  return expr$$7;
}

function mkBindThatNullEquals(g$$40, m$$22, thise$$4, thate$$3, expr$$8) {
  const expr$$9 = (0, _TastOps.mkNonNullCond)(g$$40, m$$22, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$40), thate$$3, expr$$8, (0, _TastOps.mkFalse)(g$$40, m$$22));
  const expr$$10 = mkBindThisNullEquals(g$$40, m$$22, thise$$4, thate$$3, expr$$9);
  return expr$$10;
}

function mkBindNullHash(g$$41, m$$23, thise$$5, expr$$11) {
  const expr$$12 = (0, _TastOps.mkNonNullCond)(g$$41, m$$23, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$41), thise$$5, expr$$11, (0, _TastOps.mkZero)(g$$41, m$$23));
  return expr$$12;
}

function mkRecdCompare(g$$42, tcref$$1, tycon) {
  const m$$24 = (0, _tast.Entity$$get_Range)(tycon);
  const fields = (0, _tast.Entity$$get_AllInstanceFieldsAsList)(tycon);
  const patternInput$$7 = mkMinimalTy(g$$42, tcref$$1);
  const patternInput$$8 = mkThisVarThatVar(g$$42, m$$24, patternInput$$7[1]);
  const compe = mkILCallGetComparer(g$$42, m$$24);

  const mkTest = function mkTest(fspec) {
    const fty = (0, _tast.RecdField$$get_FormalType)(fspec);
    const fref = (0, _tast.EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14)(tcref$$1, fspec);
    const m$$25 = (0, _tast.RecdFieldRef$$get_Range)(fref);
    return (0, _TastOps.mkCallGenericComparisonWithComparerOuter)(g$$42, m$$25, fty, compe, (0, _TastOps.mkRecdFieldGetViaExprAddr)(patternInput$$8[2], fref, patternInput$$7[0], m$$25), (0, _TastOps.mkRecdFieldGetViaExprAddr)(patternInput$$8[3], fref, patternInput$$7[0], m$$25));
  };

  const expr$$13 = mkCompareTestConjuncts(g$$42, m$$24, (0, _List.map)(mkTest, fields));
  const expr$$14 = (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon) ? expr$$13 : mkBindNullComparison(g$$42, m$$24, patternInput$$8[2], patternInput$$8[3], expr$$13);
  const patternInput$$9 = mkThatVarBind(g$$42, m$$24, patternInput$$7[1], patternInput$$8[1], expr$$14);
  return [patternInput$$8[0], patternInput$$9[0], patternInput$$9[1]];
}

function mkRecdCompareWithComparer(g$$43, tcref$$2, tycon$$1, _thisv, thise$$7, _arg1, thate$$4, compe$$1) {
  const m$$26 = (0, _tast.Entity$$get_Range)(tycon$$1);
  const fields$$1 = (0, _tast.Entity$$get_AllInstanceFieldsAsList)(tycon$$1);
  const patternInput$$10 = mkMinimalTy(g$$43, tcref$$2);
  const patternInput$$11 = (0, _TastOps.mkCompGenLocal)(m$$26, "objTemp", patternInput$$10[1]);
  const patternInput$$12 = mkThatAddrLocal(g$$43, m$$26, patternInput$$10[1]);

  const mkTest$$1 = function mkTest$$1(fspec$$1) {
    const fty$$1 = (0, _tast.RecdField$$get_FormalType)(fspec$$1);
    const fref$$1 = (0, _tast.EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14)(tcref$$2, fspec$$1);
    const m$$27 = (0, _tast.RecdFieldRef$$get_Range)(fref$$1);
    return (0, _TastOps.mkCallGenericComparisonWithComparerOuter)(g$$43, m$$27, fty$$1, compe$$1, (0, _TastOps.mkRecdFieldGetViaExprAddr)(thise$$7, fref$$1, patternInput$$10[0], m$$27), (0, _TastOps.mkRecdFieldGetViaExprAddr)(patternInput$$12[1], fref$$1, patternInput$$10[0], m$$27));
  };

  const expr$$16 = mkCompareTestConjuncts(g$$43, m$$26, (0, _List.map)(mkTest$$1, fields$$1));
  const expr$$17 = (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$1) ? expr$$16 : mkBindNullComparison(g$$43, m$$26, thise$$7, thate$$4, expr$$16);
  const expr$$18 = mkBindThatAddr(g$$43, m$$26, patternInput$$10[1], patternInput$$12[0], patternInput$$11[0], patternInput$$11[1], expr$$17);
  const expr$$19 = (0, _TastOps.mkCompGenLet)(m$$26, patternInput$$11[0], thate$$4, expr$$18);
  return expr$$19;
}

function mkRecdEquality(g$$44, tcref$$3, tycon$$2) {
  const m$$28 = (0, _tast.Entity$$get_Range)(tycon$$2);
  const fields$$2 = (0, _tast.Entity$$get_AllInstanceFieldsAsList)(tycon$$2);
  const patternInput$$13 = mkMinimalTy(g$$44, tcref$$3);
  const patternInput$$14 = mkThisVarThatVar(g$$44, m$$28, patternInput$$13[1]);

  const mkTest$$2 = function mkTest$$2(fspec$$2) {
    const fty$$2 = (0, _tast.RecdField$$get_FormalType)(fspec$$2);
    const fref$$2 = (0, _tast.EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14)(tcref$$3, fspec$$2);
    const m$$29 = (0, _tast.RecdFieldRef$$get_Range)(fref$$2);
    return (0, _TastOps.mkCallGenericEqualityEROuter)(g$$44, m$$29, fty$$2, (0, _TastOps.mkRecdFieldGetViaExprAddr)(patternInput$$14[2], fref$$2, patternInput$$13[0], m$$29), (0, _TastOps.mkRecdFieldGetViaExprAddr)(patternInput$$14[3], fref$$2, patternInput$$13[0], m$$29));
  };

  const expr$$20 = mkEqualsTestConjuncts(g$$44, m$$28, (0, _List.map)(mkTest$$2, fields$$2));
  const expr$$21 = (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$2) ? expr$$20 : mkBindThatNullEquals(g$$44, m$$28, patternInput$$14[2], patternInput$$14[3], expr$$20);
  const patternInput$$15 = mkThatVarBind(g$$44, m$$28, patternInput$$13[1], patternInput$$14[1], expr$$21);
  return [patternInput$$14[0], patternInput$$15[0], patternInput$$15[1]];
}

function mkRecdEqualityWithComparer(g$$45, tcref$$4, tycon$$3, _thisv$$1, thise$$9, thatobje, thatv$$4, thate$$5, compe$$2) {
  const m$$30 = (0, _tast.Entity$$get_Range)(tycon$$3);
  const fields$$3 = (0, _tast.Entity$$get_AllInstanceFieldsAsList)(tycon$$3);
  const patternInput$$16 = mkMinimalTy(g$$45, tcref$$4);
  const patternInput$$17 = mkThatAddrLocal(g$$45, m$$30, patternInput$$16[1]);

  const mkTest$$3 = function mkTest$$3(fspec$$3) {
    const fty$$3 = (0, _tast.RecdField$$get_FormalType)(fspec$$3);
    const fref$$3 = (0, _tast.EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14)(tcref$$4, fspec$$3);
    const m$$31 = (0, _tast.RecdFieldRef$$get_Range)(fref$$3);
    return (0, _TastOps.mkCallGenericEqualityWithComparerOuter)(g$$45, m$$31, fty$$3, compe$$2, (0, _TastOps.mkRecdFieldGetViaExprAddr)(thise$$9, fref$$3, patternInput$$16[0], m$$31), (0, _TastOps.mkRecdFieldGetViaExprAddr)(patternInput$$17[1], fref$$3, patternInput$$16[0], m$$31));
  };

  const expr$$23 = mkEqualsTestConjuncts(g$$45, m$$30, (0, _List.map)(mkTest$$3, fields$$3));
  const expr$$24 = mkBindThatAddr(g$$45, m$$30, patternInput$$16[1], patternInput$$17[0], thatv$$4, thate$$5, expr$$23);
  const expr$$25 = (0, _TastOps.mkIsInstConditional)(g$$45, m$$30, patternInput$$16[1], thatobje, thatv$$4, expr$$24, (0, _TastOps.mkFalse)(g$$45, m$$30));
  const expr$$26 = (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$3) ? expr$$25 : mkBindThisNullEquals(g$$45, m$$30, thise$$9, thatobje, expr$$25);
  return expr$$26;
}

function mkExnEquality(g$$46, exnref, exnc) {
  const m$$32 = (0, _tast.Entity$$get_Range)(exnc);
  const patternInput$$18 = (0, _TastOps.mkCompGenLocal)(m$$32, "obj", (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$46));
  const patternInput$$19 = mkThisVar(g$$46, m$$32, (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$46));

  const mkTest$$4 = function mkTest$$4(i, rfield) {
    const fty$$4 = (0, _tast.RecdField$$get_FormalType)(rfield);
    return (0, _TastOps.mkCallGenericEqualityEROuter)(g$$46, m$$32, fty$$4, (0, _TastOps.mkExnCaseFieldGet)(patternInput$$19[1], exnref, i, m$$32), (0, _TastOps.mkExnCaseFieldGet)(patternInput$$18[1], exnref, i, m$$32));
  };

  const expr$$27 = mkEqualsTestConjuncts(g$$46, m$$32, (0, _List.mapIndexed)(mkTest$$4, (0, _tast.Entity$$get_AllInstanceFieldsAsList)(exnc)));
  let expr$$28;
  const mbuilder = (0, _TastOps.MatchBuilder$$$$002Ector$$5D7B8C21)(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), m$$32);
  const cases = (0, _Types.L)((0, _TastOps.mkCase)(new _tast.DecisionTreeTest(4, "IsInst", (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$46), (0, _TastOps.mkAppTy)(exnref, (0, _Types.L)())), (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder, expr$$27, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"))), (0, _Types.L)());
  const dflt = (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder, (0, _TastOps.mkFalse)(g$$46, m$$32), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
  const dtree = new _tast.DecisionTree(0, "TDSwitch", patternInput$$18[1], cases, dflt, m$$32);
  expr$$28 = (0, _TastOps.MatchBuilder$$Close$$569B5856)(mbuilder, dtree, m$$32, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$46));
  const expr$$29 = mkBindThatNullEquals(g$$46, m$$32, patternInput$$19[1], patternInput$$18[1], expr$$28);
  return [patternInput$$19[0], patternInput$$18[0], expr$$29];
}

function mkExnEqualityWithComparer(g$$47, exnref$$1, exnc$$1, _thisv$$2, thise$$11, thatobje$$1, thatv$$6, thate$$7, compe$$3) {
  const m$$33 = (0, _tast.Entity$$get_Range)(exnc$$1);
  const patternInput$$20 = mkThatAddrLocal(g$$47, m$$33, (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$47));

  const mkTest$$5 = function mkTest$$5(i$$1, rfield$$1) {
    const fty$$5 = (0, _tast.RecdField$$get_FormalType)(rfield$$1);
    return (0, _TastOps.mkCallGenericEqualityWithComparerOuter)(g$$47, m$$33, fty$$5, compe$$3, (0, _TastOps.mkExnCaseFieldGet)(thise$$11, exnref$$1, i$$1, m$$33), (0, _TastOps.mkExnCaseFieldGet)(patternInput$$20[1], exnref$$1, i$$1, m$$33));
  };

  const expr$$30 = mkEqualsTestConjuncts(g$$47, m$$33, (0, _List.mapIndexed)(mkTest$$5, (0, _tast.Entity$$get_AllInstanceFieldsAsList)(exnc$$1)));
  let expr$$31;
  const mbuilder$$1 = (0, _TastOps.MatchBuilder$$$$002Ector$$5D7B8C21)(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), m$$33);
  const cases$$1 = (0, _Types.L)((0, _TastOps.mkCase)(new _tast.DecisionTreeTest(4, "IsInst", (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$47), (0, _TastOps.mkAppTy)(exnref$$1, (0, _Types.L)())), (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder$$1, expr$$30, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"))), (0, _Types.L)());
  const dflt$$1 = (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder$$1, (0, _TastOps.mkFalse)(g$$47, m$$33), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
  const dtree$$1 = new _tast.DecisionTree(0, "TDSwitch", thate$$7, cases$$1, dflt$$1, m$$33);
  expr$$31 = (0, _TastOps.MatchBuilder$$Close$$569B5856)(mbuilder$$1, dtree$$1, m$$33, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$47));
  const expr$$32 = mkBindThatAddr(g$$47, m$$33, (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$47), patternInput$$20[0], thatv$$6, thate$$7, expr$$31);
  const expr$$33 = (0, _TastOps.mkIsInstConditional)(g$$47, m$$33, (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$47), thatobje$$1, thatv$$6, expr$$32, (0, _TastOps.mkFalse)(g$$47, m$$33));
  const expr$$34 = (0, _tast.Entity$$get_IsStructOrEnumTycon)(exnc$$1) ? expr$$33 : mkBindThisNullEquals(g$$47, m$$33, thise$$11, thatobje$$1, expr$$33);
  return expr$$34;
}

function mkUnionCompare(g$$48, tcref$$5, tycon$$4) {
  const m$$34 = (0, _tast.Entity$$get_Range)(tycon$$4);
  const ucases = (0, _tast.Entity$$get_UnionCasesAsList)(tycon$$4);
  const patternInput$$21 = mkMinimalTy(g$$48, tcref$$5);
  const patternInput$$22 = mkThisVarThatVar(g$$48, m$$34, patternInput$$21[1]);
  const patternInput$$23 = (0, _TastOps.mkCompGenLocal)(m$$34, "thisTag", (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$48));
  const patternInput$$24 = (0, _TastOps.mkCompGenLocal)(m$$34, "thatTag", (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$48));
  const compe$$4 = mkILCallGetComparer(g$$48, m$$34);
  let expr$$35;
  const mbuilder$$2 = (0, _TastOps.MatchBuilder$$$$002Ector$$5D7B8C21)(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), m$$34);

  const mkCase = function mkCase(ucase) {
    const cref = (0, _tast.EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7)(tcref$$5, ucase);
    const m$$35 = (0, _tast.UnionCaseRef$$get_Range)(cref);
    const rfields = (0, _tast.UnionCase$$get_RecdFields)(ucase);

    if (rfields.tail == null) {
      return null;
    } else {
      const mkTest$$6 = function mkTest$$6(thise$$13, thataddre$$8, j, argty) {
        return (0, _TastOps.mkCallGenericComparisonWithComparerOuter)(g$$48, m$$35, (0, _tast.RecdField$$get_FormalType)(argty), compe$$4, (0, _TastOps.mkUnionCaseFieldGetProvenViaExprAddr)(thise$$13, cref, patternInput$$21[0], j, m$$35), (0, _TastOps.mkUnionCaseFieldGetProvenViaExprAddr)(thataddre$$8, cref, patternInput$$21[0], j, m$$35));
      };

      let test;

      if ((0, _tast.Entity$$get_IsStructOrEnumTycon)((0, _tast.UnionCaseRef$$get_Tycon)(cref))) {
        test = mkCompareTestConjuncts(g$$48, m$$35, (0, _List.mapIndexed)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, mkTest$$6, [patternInput$$22[2], patternInput$$22[3]])), rfields));
      } else {
        const patternInput$$25 = (0, _TastOps.mkCompGenLocal)(m$$35, "thisCast", (0, _TastOps.mkProvenUnionCaseTy)(cref, patternInput$$21[0]));
        const patternInput$$26 = (0, _TastOps.mkCompGenLocal)(m$$35, "objCast", (0, _TastOps.mkProvenUnionCaseTy)(cref, patternInput$$21[0]));
        test = (0, _TastOps.mkCompGenLet)(m$$35, patternInput$$25[0], (0, _TastOps.mkUnionCaseProof)(patternInput$$22[2], cref, patternInput$$21[0], m$$35), (0, _TastOps.mkCompGenLet)(m$$35, patternInput$$26[0], (0, _TastOps.mkUnionCaseProof)(patternInput$$22[3], cref, patternInput$$21[0], m$$35), mkCompareTestConjuncts(g$$48, m$$35, (0, _List.mapIndexed)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, mkTest$$6, [patternInput$$25[1], patternInput$$26[1]])), rfields))));
      }

      return (0, _TastOps.mkCase)(new _tast.DecisionTreeTest(0, "UnionCase", cref, patternInput$$21[0]), (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder$$2, test, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget")));
    }
  };

  const patternInput$$27 = (0, _List.partition)(function (option) {
    return option == null;
  }, (0, _List.map)(mkCase, ucases));

  if (patternInput$$27[1].tail == null) {
    expr$$35 = (0, _TastOps.mkZero)(g$$48, m$$34);
  } else {
    const cases$$2 = (0, _List.map)(function mapping(_arg1$$1) {
      if (_arg1$$1 == null) {
        throw new Error("mkUnionCompare");
      } else {
        const c = _arg1$$1;
        return c;
      }
    }, patternInput$$27[1]);
    const dflt$$2 = patternInput$$27[0].tail == null ? null : (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder$$2, (0, _TastOps.mkZero)(g$$48, m$$34), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
    const dtree$$2 = new _tast.DecisionTree(0, "TDSwitch", patternInput$$22[2], cases$$2, dflt$$2, m$$34);
    expr$$35 = (0, _TastOps.MatchBuilder$$Close$$569B5856)(mbuilder$$2, dtree$$2, m$$34, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$48));
  }

  let expr$$36;

  if ((0, _List.length)(ucases) === 1) {
    expr$$36 = expr$$35;
  } else {
    const tagsEqTested = (0, _TastOps.mkCond)(new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"), m$$34, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$48), (0, _TastOps.mkILAsmCeq)(g$$48, m$$34, patternInput$$23[1], patternInput$$24[1]), expr$$35, (0, _TastOps.mkAsmExpr)((0, _Types.L)(new _il.ILInstr(22, "AI_sub"), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(patternInput$$23[1], (0, _Types.L)(patternInput$$24[1], (0, _Types.L)())), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_int_ty)(g$$48), (0, _Types.L)()), m$$34));
    expr$$36 = (0, _TastOps.mkCompGenLet)(m$$34, patternInput$$23[0], (0, _TastOps.mkUnionCaseTagGetViaExprAddr)(patternInput$$22[2], tcref$$5, patternInput$$21[0], m$$34), (0, _TastOps.mkCompGenLet)(m$$34, patternInput$$24[0], (0, _TastOps.mkUnionCaseTagGetViaExprAddr)(patternInput$$22[3], tcref$$5, patternInput$$21[0], m$$34), tagsEqTested));
  }

  const expr$$37 = (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$4) ? expr$$36 : mkBindNullComparison(g$$48, m$$34, patternInput$$22[2], patternInput$$22[3], expr$$36);
  const patternInput$$28 = mkThatVarBind(g$$48, m$$34, patternInput$$21[1], patternInput$$22[1], expr$$37);
  return [patternInput$$22[0], patternInput$$28[0], patternInput$$28[1]];
}

function mkUnionCompareWithComparer(g$$49, tcref$$6, tycon$$5, _thisv$$3, thise$$14, _thatobjv, thatcaste, compe$$5) {
  const m$$36 = (0, _tast.Entity$$get_Range)(tycon$$5);
  const ucases$$1 = (0, _tast.Entity$$get_UnionCasesAsList)(tycon$$5);
  const patternInput$$29 = mkMinimalTy(g$$49, tcref$$6);
  const patternInput$$30 = (0, _TastOps.mkCompGenLocal)(m$$36, "objTemp", patternInput$$29[1]);
  const patternInput$$31 = mkThatAddrLocalIfNeeded(g$$49, m$$36, patternInput$$30[1], patternInput$$29[1]);
  const patternInput$$32 = (0, _TastOps.mkCompGenLocal)(m$$36, "thisTag", (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$49));
  const patternInput$$33 = (0, _TastOps.mkCompGenLocal)(m$$36, "thatTag", (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$49));
  let expr$$39;
  const mbuilder$$3 = (0, _TastOps.MatchBuilder$$$$002Ector$$5D7B8C21)(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), m$$36);

  const mkCase$$1 = function mkCase$$1(ucase$$1) {
    const cref$$1 = (0, _tast.EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7)(tcref$$6, ucase$$1);
    const m$$37 = (0, _tast.UnionCaseRef$$get_Range)(cref$$1);
    const rfields$$1 = (0, _tast.UnionCase$$get_RecdFields)(ucase$$1);

    if (rfields$$1.tail == null) {
      return null;
    } else {
      const mkTest$$7 = function mkTest$$7(thise$$15, thataddre$$10, j$$1, argty$$1) {
        return (0, _TastOps.mkCallGenericComparisonWithComparerOuter)(g$$49, m$$37, (0, _tast.RecdField$$get_FormalType)(argty$$1), compe$$5, (0, _TastOps.mkUnionCaseFieldGetProvenViaExprAddr)(thise$$15, cref$$1, patternInput$$29[0], j$$1, m$$37), (0, _TastOps.mkUnionCaseFieldGetProvenViaExprAddr)(thataddre$$10, cref$$1, patternInput$$29[0], j$$1, m$$37));
      };

      let test$$1;

      if ((0, _tast.Entity$$get_IsStructOrEnumTycon)((0, _tast.UnionCaseRef$$get_Tycon)(cref$$1))) {
        test$$1 = mkCompareTestConjuncts(g$$49, m$$37, (0, _List.mapIndexed)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, mkTest$$7, [thise$$14, patternInput$$31[1]])), rfields$$1));
      } else {
        const patternInput$$34 = (0, _TastOps.mkCompGenLocal)(m$$37, "thisCastu", (0, _TastOps.mkProvenUnionCaseTy)(cref$$1, patternInput$$29[0]));
        const patternInput$$35 = (0, _TastOps.mkCompGenLocal)(m$$37, "thatCastu", (0, _TastOps.mkProvenUnionCaseTy)(cref$$1, patternInput$$29[0]));
        test$$1 = (0, _TastOps.mkCompGenLet)(m$$37, patternInput$$34[0], (0, _TastOps.mkUnionCaseProof)(thise$$14, cref$$1, patternInput$$29[0], m$$37), (0, _TastOps.mkCompGenLet)(m$$37, patternInput$$35[0], (0, _TastOps.mkUnionCaseProof)(patternInput$$31[1], cref$$1, patternInput$$29[0], m$$37), mkCompareTestConjuncts(g$$49, m$$37, (0, _List.mapIndexed)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, mkTest$$7, [patternInput$$34[1], patternInput$$35[1]])), rfields$$1))));
      }

      return (0, _TastOps.mkCase)(new _tast.DecisionTreeTest(0, "UnionCase", cref$$1, patternInput$$29[0]), (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder$$3, test$$1, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget")));
    }
  };

  const patternInput$$36 = (0, _List.partition)(function (option$$1) {
    return option$$1 == null;
  }, (0, _List.map)(mkCase$$1, ucases$$1));

  if (patternInput$$36[1].tail == null) {
    expr$$39 = (0, _TastOps.mkZero)(g$$49, m$$36);
  } else {
    const cases$$3 = (0, _List.map)(function mapping$$1(_arg1$$2) {
      if (_arg1$$2 == null) {
        throw new Error("mkUnionCompare");
      } else {
        const c$$1 = _arg1$$2;
        return c$$1;
      }
    }, patternInput$$36[1]);
    const dflt$$3 = patternInput$$36[0].tail == null ? null : (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder$$3, (0, _TastOps.mkZero)(g$$49, m$$36), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
    const dtree$$3 = new _tast.DecisionTree(0, "TDSwitch", thise$$14, cases$$3, dflt$$3, m$$36);
    expr$$39 = (0, _TastOps.MatchBuilder$$Close$$569B5856)(mbuilder$$3, dtree$$3, m$$36, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$49));
  }

  let expr$$40;

  if ((0, _List.length)(ucases$$1) === 1) {
    expr$$40 = expr$$39;
  } else {
    const tagsEqTested$$1 = (0, _TastOps.mkCond)(new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"), m$$36, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$49), (0, _TastOps.mkILAsmCeq)(g$$49, m$$36, patternInput$$32[1], patternInput$$33[1]), expr$$39, (0, _TastOps.mkAsmExpr)((0, _Types.L)(new _il.ILInstr(22, "AI_sub"), (0, _Types.L)()), (0, _Types.L)(), (0, _Types.L)(patternInput$$32[1], (0, _Types.L)(patternInput$$33[1], (0, _Types.L)())), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_int_ty)(g$$49), (0, _Types.L)()), m$$36));
    expr$$40 = (0, _TastOps.mkCompGenLet)(m$$36, patternInput$$32[0], (0, _TastOps.mkUnionCaseTagGetViaExprAddr)(thise$$14, tcref$$6, patternInput$$29[0], m$$36), (0, _TastOps.mkCompGenLet)(m$$36, patternInput$$33[0], (0, _TastOps.mkUnionCaseTagGetViaExprAddr)(patternInput$$31[1], tcref$$6, patternInput$$29[0], m$$36), tagsEqTested$$1));
  }

  const expr$$41 = (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$5) ? expr$$40 : mkBindNullComparison(g$$49, m$$36, thise$$14, thatcaste, expr$$40);
  const expr$$42 = mkBindThatAddrIfNeeded(m$$36, patternInput$$31[0], patternInput$$30[0], expr$$41);
  const expr$$43 = (0, _TastOps.mkCompGenLet)(m$$36, patternInput$$30[0], thatcaste, expr$$42);
  return expr$$43;
}

function mkUnionEquality(g$$50, tcref$$7, tycon$$6) {
  const m$$38 = (0, _tast.Entity$$get_Range)(tycon$$6);
  const ucases$$2 = (0, _tast.Entity$$get_UnionCasesAsList)(tycon$$6);
  const patternInput$$37 = mkMinimalTy(g$$50, tcref$$7);
  const patternInput$$38 = mkThisVarThatVar(g$$50, m$$38, patternInput$$37[1]);
  const patternInput$$39 = (0, _TastOps.mkCompGenLocal)(m$$38, "thisTag", (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$50));
  const patternInput$$40 = (0, _TastOps.mkCompGenLocal)(m$$38, "thatTag", (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$50));
  let expr$$44;
  const mbuilder$$4 = (0, _TastOps.MatchBuilder$$$$002Ector$$5D7B8C21)(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), m$$38);

  const mkCase$$2 = function mkCase$$2(ucase$$2) {
    const cref$$2 = (0, _tast.EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7)(tcref$$7, ucase$$2);
    const m$$39 = (0, _tast.UnionCaseRef$$get_Range)(cref$$2);
    const rfields$$2 = (0, _tast.UnionCase$$get_RecdFields)(ucase$$2);

    if (rfields$$2.tail == null) {
      return null;
    } else {
      const mkTest$$8 = function mkTest$$8(thise$$17, thataddre$$12, j$$2, argty$$2) {
        return (0, _TastOps.mkCallGenericEqualityEROuter)(g$$50, m$$39, (0, _tast.RecdField$$get_FormalType)(argty$$2), (0, _TastOps.mkUnionCaseFieldGetProvenViaExprAddr)(thise$$17, cref$$2, patternInput$$37[0], j$$2, m$$39), (0, _TastOps.mkUnionCaseFieldGetProvenViaExprAddr)(thataddre$$12, cref$$2, patternInput$$37[0], j$$2, m$$39));
      };

      let test$$2;

      if ((0, _tast.Entity$$get_IsStructOrEnumTycon)((0, _tast.UnionCaseRef$$get_Tycon)(cref$$2))) {
        test$$2 = mkEqualsTestConjuncts(g$$50, m$$39, (0, _List.mapIndexed)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, mkTest$$8, [patternInput$$38[2], patternInput$$38[3]])), rfields$$2));
      } else {
        const patternInput$$41 = (0, _TastOps.mkCompGenLocal)(m$$39, "thisCast", (0, _TastOps.mkProvenUnionCaseTy)(cref$$2, patternInput$$37[0]));
        const patternInput$$42 = (0, _TastOps.mkCompGenLocal)(m$$39, "objCast", (0, _TastOps.mkProvenUnionCaseTy)(cref$$2, patternInput$$37[0]));
        test$$2 = (0, _TastOps.mkCompGenLet)(m$$39, patternInput$$41[0], (0, _TastOps.mkUnionCaseProof)(patternInput$$38[2], cref$$2, patternInput$$37[0], m$$39), (0, _TastOps.mkCompGenLet)(m$$39, patternInput$$42[0], (0, _TastOps.mkUnionCaseProof)(patternInput$$38[3], cref$$2, patternInput$$37[0], m$$39), mkEqualsTestConjuncts(g$$50, m$$39, (0, _List.mapIndexed)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, mkTest$$8, [patternInput$$41[1], patternInput$$42[1]])), rfields$$2))));
      }

      return (0, _TastOps.mkCase)(new _tast.DecisionTreeTest(0, "UnionCase", cref$$2, patternInput$$37[0]), (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder$$4, test$$2, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget")));
    }
  };

  const patternInput$$43 = (0, _List.partition)(function (option$$2) {
    return option$$2 == null;
  }, (0, _List.map)(mkCase$$2, ucases$$2));

  if (patternInput$$43[1].tail == null) {
    expr$$44 = (0, _TastOps.mkTrue)(g$$50, m$$38);
  } else {
    const cases$$4 = (0, _List.map)(function (_arg1$$3) {
      if (_arg1$$3 == null) {
        throw new Error("mkUnionEquality");
      } else {
        const c$$2 = _arg1$$3;
        return c$$2;
      }
    }, patternInput$$43[1]);
    const dflt$$4 = patternInput$$43[0].tail == null ? null : (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder$$4, (0, _TastOps.mkTrue)(g$$50, m$$38), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
    const dtree$$4 = new _tast.DecisionTree(0, "TDSwitch", patternInput$$38[2], cases$$4, dflt$$4, m$$38);
    expr$$44 = (0, _TastOps.MatchBuilder$$Close$$569B5856)(mbuilder$$4, dtree$$4, m$$38, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$50));
  }

  let expr$$45;

  if ((0, _List.length)(ucases$$2) === 1) {
    expr$$45 = expr$$44;
  } else {
    const tagsEqTested$$2 = (0, _TastOps.mkCond)(new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"), m$$38, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$50), (0, _TastOps.mkILAsmCeq)(g$$50, m$$38, patternInput$$39[1], patternInput$$40[1]), expr$$44, (0, _TastOps.mkFalse)(g$$50, m$$38));
    expr$$45 = (0, _TastOps.mkCompGenLet)(m$$38, patternInput$$39[0], (0, _TastOps.mkUnionCaseTagGetViaExprAddr)(patternInput$$38[2], tcref$$7, patternInput$$37[0], m$$38), (0, _TastOps.mkCompGenLet)(m$$38, patternInput$$40[0], (0, _TastOps.mkUnionCaseTagGetViaExprAddr)(patternInput$$38[3], tcref$$7, patternInput$$37[0], m$$38), tagsEqTested$$2));
  }

  const patternInput$$44 = mkThatVarBind(g$$50, m$$38, patternInput$$37[1], patternInput$$38[1], expr$$45);
  const expr$$47 = (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$6) ? patternInput$$44[1] : mkBindThatNullEquals(g$$50, m$$38, patternInput$$38[2], patternInput$$38[3], patternInput$$44[1]);
  return [patternInput$$38[0], patternInput$$44[0], expr$$47];
}

function mkUnionEqualityWithComparer(g$$51, tcref$$8, tycon$$7, _thisv$$4, thise$$18, thatobje$$2, thatv$$9, thate$$8, compe$$6) {
  const m$$40 = (0, _tast.Entity$$get_Range)(tycon$$7);
  const ucases$$3 = (0, _tast.Entity$$get_UnionCasesAsList)(tycon$$7);
  const patternInput$$45 = mkMinimalTy(g$$51, tcref$$8);
  const patternInput$$46 = (0, _TastOps.mkCompGenLocal)(m$$40, "thisTag", (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$51));
  const patternInput$$47 = (0, _TastOps.mkCompGenLocal)(m$$40, "thatTag", (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$51));
  const patternInput$$48 = mkThatAddrLocal(g$$51, m$$40, patternInput$$45[1]);
  let expr$$48;
  const mbuilder$$5 = (0, _TastOps.MatchBuilder$$$$002Ector$$5D7B8C21)(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), m$$40);

  const mkCase$$3 = function mkCase$$3(ucase$$3) {
    const cref$$3 = (0, _tast.EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7)(tcref$$8, ucase$$3);
    const m$$41 = (0, _tast.UnionCaseRef$$get_Range)(cref$$3);
    const rfields$$3 = (0, _tast.UnionCase$$get_RecdFields)(ucase$$3);

    if (rfields$$3.tail == null) {
      return null;
    } else {
      const mkTest$$9 = function mkTest$$9(thise$$19, thataddre$$14, j$$3, argty$$3) {
        return (0, _TastOps.mkCallGenericEqualityWithComparerOuter)(g$$51, m$$41, (0, _tast.RecdField$$get_FormalType)(argty$$3), compe$$6, (0, _TastOps.mkUnionCaseFieldGetProvenViaExprAddr)(thise$$19, cref$$3, patternInput$$45[0], j$$3, m$$41), (0, _TastOps.mkUnionCaseFieldGetProvenViaExprAddr)(thataddre$$14, cref$$3, patternInput$$45[0], j$$3, m$$41));
      };

      let test$$3;

      if ((0, _tast.Entity$$get_IsStructOrEnumTycon)((0, _tast.UnionCaseRef$$get_Tycon)(cref$$3))) {
        test$$3 = mkEqualsTestConjuncts(g$$51, m$$41, (0, _List.mapIndexed)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, mkTest$$9, [thise$$18, patternInput$$48[1]])), rfields$$3));
      } else {
        const patternInput$$49 = (0, _TastOps.mkCompGenLocal)(m$$41, "thisCastu", (0, _TastOps.mkProvenUnionCaseTy)(cref$$3, patternInput$$45[0]));
        const patternInput$$50 = (0, _TastOps.mkCompGenLocal)(m$$41, "thatCastu", (0, _TastOps.mkProvenUnionCaseTy)(cref$$3, patternInput$$45[0]));
        test$$3 = (0, _TastOps.mkCompGenLet)(m$$41, patternInput$$49[0], (0, _TastOps.mkUnionCaseProof)(thise$$18, cref$$3, patternInput$$45[0], m$$41), (0, _TastOps.mkCompGenLet)(m$$41, patternInput$$50[0], (0, _TastOps.mkUnionCaseProof)(patternInput$$48[1], cref$$3, patternInput$$45[0], m$$41), mkEqualsTestConjuncts(g$$51, m$$41, (0, _List.mapIndexed)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, mkTest$$9, [patternInput$$49[1], patternInput$$50[1]])), rfields$$3))));
      }

      return (0, _TastOps.mkCase)(new _tast.DecisionTreeTest(0, "UnionCase", cref$$3, patternInput$$45[0]), (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder$$5, test$$3, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget")));
    }
  };

  const patternInput$$51 = (0, _List.partition)(function (option$$3) {
    return option$$3 == null;
  }, (0, _List.map)(mkCase$$3, ucases$$3));

  if (patternInput$$51[1].tail == null) {
    expr$$48 = (0, _TastOps.mkTrue)(g$$51, m$$40);
  } else {
    const cases$$5 = (0, _List.map)(function (_arg1$$4) {
      if (_arg1$$4 == null) {
        throw new Error("mkUnionEquality");
      } else {
        const c$$3 = _arg1$$4;
        return c$$3;
      }
    }, patternInput$$51[1]);
    const dflt$$5 = patternInput$$51[0].tail == null ? null : (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder$$5, (0, _TastOps.mkTrue)(g$$51, m$$40), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
    const dtree$$5 = new _tast.DecisionTree(0, "TDSwitch", thise$$18, cases$$5, dflt$$5, m$$40);
    expr$$48 = (0, _TastOps.MatchBuilder$$Close$$569B5856)(mbuilder$$5, dtree$$5, m$$40, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$51));
  }

  let expr$$49;

  if ((0, _List.length)(ucases$$3) === 1) {
    expr$$49 = expr$$48;
  } else {
    const tagsEqTested$$3 = (0, _TastOps.mkCond)(new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"), m$$40, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$51), (0, _TastOps.mkILAsmCeq)(g$$51, m$$40, patternInput$$46[1], patternInput$$47[1]), expr$$48, (0, _TastOps.mkFalse)(g$$51, m$$40));
    expr$$49 = (0, _TastOps.mkCompGenLet)(m$$40, patternInput$$46[0], (0, _TastOps.mkUnionCaseTagGetViaExprAddr)(thise$$18, tcref$$8, patternInput$$45[0], m$$40), (0, _TastOps.mkCompGenLet)(m$$40, patternInput$$47[0], (0, _TastOps.mkUnionCaseTagGetViaExprAddr)(patternInput$$48[1], tcref$$8, patternInput$$45[0], m$$40), tagsEqTested$$3));
  }

  const expr$$50 = mkBindThatAddr(g$$51, m$$40, patternInput$$45[1], patternInput$$48[0], thatv$$9, thate$$8, expr$$49);
  const expr$$51 = (0, _TastOps.mkIsInstConditional)(g$$51, m$$40, patternInput$$45[1], thatobje$$2, thatv$$9, expr$$50, (0, _TastOps.mkFalse)(g$$51, m$$40));
  const expr$$52 = (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$7) ? expr$$51 : mkBindThisNullEquals(g$$51, m$$40, thise$$18, thatobje$$2, expr$$51);
  return expr$$52;
}

function mkRecdHashWithComparer(g$$52, tcref$$9, tycon$$8, compe$$7) {
  const m$$42 = (0, _tast.Entity$$get_Range)(tycon$$8);
  const fields$$4 = (0, _tast.Entity$$get_AllInstanceFieldsAsList)(tycon$$8);
  const patternInput$$52 = mkMinimalTy(g$$52, tcref$$9);
  const patternInput$$53 = mkThisVar(g$$52, m$$42, patternInput$$52[1]);

  const mkFieldHash = function mkFieldHash(fspec$$4) {
    const fty$$6 = (0, _tast.RecdField$$get_FormalType)(fspec$$4);
    const fref$$4 = (0, _tast.EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14)(tcref$$9, fspec$$4);
    const m$$43 = (0, _tast.RecdFieldRef$$get_Range)(fref$$4);
    const e$$4 = (0, _TastOps.mkRecdFieldGetViaExprAddr)(patternInput$$53[1], fref$$4, patternInput$$52[0], m$$43);
    return (0, _TastOps.mkCallGenericHashWithComparerOuter)(g$$52, m$$43, fty$$6, compe$$7, e$$4);
  };

  const patternInput$$54 = (0, _TastOps.mkMutableCompGenLocal)(m$$42, "i", (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$52));
  const stmt = mkCombineHashGenerators(g$$52, m$$42, (0, _List.map)(mkFieldHash, fields$$4), (0, _tast.mkLocalValRef)(patternInput$$54[0]), patternInput$$54[1]);
  const expr$$53 = (0, _TastOps.mkCompGenLet)(m$$42, patternInput$$54[0], (0, _TastOps.mkZero)(g$$52, m$$42), stmt);
  const expr$$54 = (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$8) ? expr$$53 : mkBindNullHash(g$$52, m$$42, patternInput$$53[1], expr$$53);
  return [patternInput$$53[0], expr$$54];
}

function mkExnHashWithComparer(g$$53, exnref$$2, exnc$$2, compe$$8) {
  const m$$44 = (0, _tast.Entity$$get_Range)(exnc$$2);
  const patternInput$$55 = mkThisVar(g$$53, m$$44, (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$53));

  const mkHash = function mkHash(i$$2, rfield$$2) {
    const fty$$7 = (0, _tast.RecdField$$get_FormalType)(rfield$$2);
    const e$$5 = (0, _TastOps.mkExnCaseFieldGet)(patternInput$$55[1], exnref$$2, i$$2, m$$44);
    return (0, _TastOps.mkCallGenericHashWithComparerOuter)(g$$53, m$$44, fty$$7, compe$$8, e$$5);
  };

  const patternInput$$56 = (0, _TastOps.mkMutableCompGenLocal)(m$$44, "i", (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$53));
  const stmt$$1 = mkCombineHashGenerators(g$$53, m$$44, (0, _List.mapIndexed)(mkHash, (0, _tast.Entity$$get_AllInstanceFieldsAsList)(exnc$$2)), (0, _tast.mkLocalValRef)(patternInput$$56[0]), patternInput$$56[1]);
  const expr$$55 = (0, _TastOps.mkCompGenLet)(m$$44, patternInput$$56[0], (0, _TastOps.mkZero)(g$$53, m$$44), stmt$$1);
  const expr$$56 = mkBindNullHash(g$$53, m$$44, patternInput$$55[1], expr$$55);
  return [patternInput$$55[0], expr$$56];
}

function mkUnionHashWithComparer(g$$54, tcref$$10, tycon$$9, compe$$9) {
  const m$$45 = (0, _tast.Entity$$get_Range)(tycon$$9);
  const ucases$$4 = (0, _tast.Entity$$get_UnionCasesAsList)(tycon$$9);
  const patternInput$$57 = mkMinimalTy(g$$54, tcref$$10);
  const patternInput$$58 = mkThisVar(g$$54, m$$45, patternInput$$57[1]);
  const mbuilder$$6 = (0, _TastOps.MatchBuilder$$$$002Ector$$5D7B8C21)(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), m$$45);
  const patternInput$$59 = (0, _TastOps.mkMutableCompGenLocal)(m$$45, "i", (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$54));

  const mkCase$$4 = function mkCase$$4(i$$3, ucase1) {
    const c1ref = (0, _tast.EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7)(tcref$$10, ucase1);
    const m$$46 = (0, _tast.UnionCaseRef$$get_Range)(c1ref);

    if ((0, _tast.UnionCase$$get_IsNullary)(ucase1)) {
      return null;
    } else {
      const mkHash$$1 = function mkHash$$1(thise$$23, j$$4, rfield$$3) {
        const fty$$8 = (0, _tast.RecdField$$get_FormalType)(rfield$$3);
        const e$$6 = (0, _TastOps.mkUnionCaseFieldGetProvenViaExprAddr)(thise$$23, c1ref, patternInput$$57[0], j$$4, m$$46);
        return (0, _TastOps.mkCallGenericHashWithComparerOuter)(g$$54, m$$46, fty$$8, compe$$9, e$$6);
      };

      let test$$4;

      if ((0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$9)) {
        test$$4 = (0, _TastOps.mkCompGenSequential)(m$$46, (0, _TastOps.mkValSet)(m$$46, (0, _tast.mkLocalValRef)(patternInput$$59[0]), (0, _TastOps.mkInt)(g$$54, m$$46, i$$3)), mkCombineHashGenerators(g$$54, m$$46, (0, _List.mapIndexed)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, mkHash$$1, [patternInput$$58[1]])), (0, _tast.UnionCase$$get_RecdFields)(ucase1)), (0, _tast.mkLocalValRef)(patternInput$$59[0]), patternInput$$59[1]));
      } else {
        const patternInput$$60 = (0, _TastOps.mkCompGenLocal)(m$$46, "unionCase", (0, _TastOps.mkProvenUnionCaseTy)(c1ref, patternInput$$57[0]));
        test$$4 = (0, _TastOps.mkCompGenLet)(m$$46, patternInput$$60[0], (0, _TastOps.mkUnionCaseProof)(patternInput$$58[1], c1ref, patternInput$$57[0], m$$46), (0, _TastOps.mkCompGenSequential)(m$$46, (0, _TastOps.mkValSet)(m$$46, (0, _tast.mkLocalValRef)(patternInput$$59[0]), (0, _TastOps.mkInt)(g$$54, m$$46, i$$3)), mkCombineHashGenerators(g$$54, m$$46, (0, _List.mapIndexed)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, mkHash$$1, [patternInput$$60[1]])), (0, _tast.UnionCase$$get_RecdFields)(ucase1)), (0, _tast.mkLocalValRef)(patternInput$$59[0]), patternInput$$59[1])));
      }

      return (0, _TastOps.mkCase)(new _tast.DecisionTreeTest(0, "UnionCase", c1ref, patternInput$$57[0]), (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder$$6, test$$4, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget")));
    }
  };

  const patternInput$$61 = (0, _List.partition)(function predicate(i$$4) {
    return i$$4 == null;
  }, (0, _List.mapIndexed)(mkCase$$4, ucases$$4));
  const cases$$6 = (0, _List.map)(function mapping$$2(_arg1$$5) {
    if (_arg1$$5 == null) {
      throw new Error("mkUnionHash");
    } else {
      const c$$4 = _arg1$$5;
      return c$$4;
    }
  }, patternInput$$61[1]);
  let dflt$$6;

  if (patternInput$$61[0].tail == null) {
    dflt$$6 = null;
  } else {
    const tag = (0, _TastOps.mkUnionCaseTagGetViaExprAddr)(patternInput$$58[1], tcref$$10, patternInput$$57[0], m$$45);
    dflt$$6 = (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder$$6, tag, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
  }

  const dtree$$6 = new _tast.DecisionTree(0, "TDSwitch", patternInput$$58[1], cases$$6, dflt$$6, m$$45);
  const stmt$$2 = (0, _TastOps.MatchBuilder$$Close$$569B5856)(mbuilder$$6, dtree$$6, m$$45, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$54));
  const expr$$57 = (0, _TastOps.mkCompGenLet)(m$$45, patternInput$$59[0], (0, _TastOps.mkZero)(g$$54, m$$45), stmt$$2);
  const expr$$58 = (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$9) ? expr$$57 : mkBindNullHash(g$$54, m$$45, patternInput$$58[1], expr$$57);
  return [patternInput$$58[0], expr$$58];
}

function isNominalExnc(exnc$$3) {
  const matchValue = (0, _tast.Entity$$get_ExceptionInfo)(exnc$$3);
  var $target$$1;

  switch (matchValue.tag) {
    case 3:
    case 1:
      $target$$1 = 0;
      break;

    case 2:
      $target$$1 = 1;
      break;

    default:
      $target$$1 = 0;
  }

  switch ($target$$1) {
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

function isTrueFSharpStructTycon(_g, tycon$$10) {
  if ((0, _tast.Entity$$get_IsFSharpStructOrEnumTycon)(tycon$$10)) {
    return !(0, _tast.Entity$$get_IsFSharpEnumTycon)(tycon$$10);
  } else {
    return false;
  }
}

function canBeAugmentedWithEquals(g$$55, tycon$$11) {
  if (((0, _tast.Entity$$get_IsUnionTycon)(tycon$$11) ? true : (0, _tast.Entity$$get_IsRecordTycon)(tycon$$11)) ? true : (0, _tast.Entity$$get_IsExceptionDecl)(tycon$$11) ? isNominalExnc(tycon$$11) : false) {
    return true;
  } else {
    return isTrueFSharpStructTycon(g$$55, tycon$$11);
  }
}

function canBeAugmentedWithCompare(g$$56, tycon$$12) {
  if ((0, _tast.Entity$$get_IsUnionTycon)(tycon$$12) ? true : (0, _tast.Entity$$get_IsRecordTycon)(tycon$$12)) {
    return true;
  } else {
    return isTrueFSharpStructTycon(g$$56, tycon$$12);
  }
}

function getAugmentationAttribs(g$$57, tycon$$13) {
  return [canBeAugmentedWithEquals(g$$57, tycon$$13), canBeAugmentedWithCompare(g$$57, tycon$$13), (0, _TastOps.TryFindFSharpBoolAttribute)(g$$57, (0, _TcGlobals.TcGlobals$$get_attrib_NoEqualityAttribute)(g$$57), (0, _tast.Entity$$get_Attribs)(tycon$$13)), (0, _TastOps.TryFindFSharpBoolAttribute)(g$$57, (0, _TcGlobals.TcGlobals$$get_attrib_CustomEqualityAttribute)(g$$57), (0, _tast.Entity$$get_Attribs)(tycon$$13)), (0, _TastOps.TryFindFSharpBoolAttribute)(g$$57, (0, _TcGlobals.TcGlobals$$get_attrib_ReferenceEqualityAttribute)(g$$57), (0, _tast.Entity$$get_Attribs)(tycon$$13)), (0, _TastOps.TryFindFSharpBoolAttribute)(g$$57, (0, _TcGlobals.TcGlobals$$get_attrib_StructuralEqualityAttribute)(g$$57), (0, _tast.Entity$$get_Attribs)(tycon$$13)), (0, _TastOps.TryFindFSharpBoolAttribute)(g$$57, (0, _TcGlobals.TcGlobals$$get_attrib_NoComparisonAttribute)(g$$57), (0, _tast.Entity$$get_Attribs)(tycon$$13)), (0, _TastOps.TryFindFSharpBoolAttribute)(g$$57, (0, _TcGlobals.TcGlobals$$get_attrib_CustomComparisonAttribute)(g$$57), (0, _tast.Entity$$get_Attribs)(tycon$$13)), (0, _TastOps.TryFindFSharpBoolAttribute)(g$$57, (0, _TcGlobals.TcGlobals$$get_attrib_StructuralComparisonAttribute)(g$$57), (0, _tast.Entity$$get_Attribs)(tycon$$13))];
}

function CheckAugmentationAttribs(isImplementation, g$$58, amap, tycon$$14) {
  const m$$47 = (0, _tast.Entity$$get_Range)(tycon$$14);
  const attribs = getAugmentationAttribs(g$$58, tycon$$14);
  var $target$$2;

  if (attribs[2] != null) {
    if (attribs[2]) {
      if (attribs[3] != null) {
        if (attribs[6] == null) {
          $target$$2 = 3;
        } else if (attribs[0]) {
          if (attribs[1]) {
            if (attribs[5] != null) {
              if (attribs[5]) {
                if (attribs[4] != null) {
                  if (attribs[4]) {
                    $target$$2 = 7;
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else if (attribs[4] != null) {
                if (attribs[4]) {
                  if (attribs[8] != null) {
                    if (attribs[8]) {
                      $target$$2 = 7;
                    } else {
                      $target$$2 = 9;
                    }
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 4;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[4] != null) {
            if (attribs[4]) {
              if (attribs[5] != null) {
                if (attribs[5]) {
                  $target$$2 = 7;
                } else if (attribs[8] != null) {
                  if (attribs[8]) {
                    $target$$2 = 7;
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else if (attribs[8] != null) {
                if (attribs[8]) {
                  $target$$2 = 7;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[4] != null) {
          if (attribs[4]) {
            $target$$2 = 8;
          } else if (attribs[5] != null) {
            if (attribs[5]) {
              $target$$2 = 8;
            } else if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 8;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[8] != null) {
            if (attribs[8]) {
              $target$$2 = 8;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[5] != null) {
          if (attribs[5]) {
            $target$$2 = 8;
          } else if (attribs[8] != null) {
            if (attribs[8]) {
              $target$$2 = 8;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[8] != null) {
          if (attribs[8]) {
            $target$$2 = 8;
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[4] != null) {
        if (attribs[6] == null) {
          $target$$2 = 3;
        } else if (attribs[0]) {
          if (attribs[1]) {
            if (attribs[5] != null) {
              if (attribs[5]) {
                if (attribs[4]) {
                  $target$$2 = 7;
                } else {
                  $target$$2 = 9;
                }
              } else if (attribs[4]) {
                if (attribs[8] != null) {
                  if (attribs[8]) {
                    $target$$2 = 7;
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 4;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[4]) {
            if (attribs[5] != null) {
              if (attribs[5]) {
                $target$$2 = 7;
              } else if (attribs[8] != null) {
                if (attribs[8]) {
                  $target$$2 = 7;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 7;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[4]) {
          $target$$2 = 8;
        } else if (attribs[5] != null) {
          if (attribs[5]) {
            $target$$2 = 8;
          } else if (attribs[8] != null) {
            if (attribs[8]) {
              $target$$2 = 8;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[8] != null) {
          if (attribs[8]) {
            $target$$2 = 8;
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[5] != null) {
        if (attribs[6] == null) {
          $target$$2 = 3;
        } else if (attribs[5]) {
          if (attribs[0]) {
            $target$$2 = 9;
          } else {
            $target$$2 = 8;
          }
        } else if (attribs[0]) {
          $target$$2 = 9;
        } else if (attribs[8] != null) {
          if (attribs[8]) {
            $target$$2 = 8;
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[6] == null) {
        $target$$2 = 3;
      } else if (attribs[6]) {
        if (attribs[7] == null) {
          if (attribs[8] != null) {
            if (attribs[8]) {
              if (attribs[0]) {
                if (attribs[1]) {
                  $target$$2 = 4;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 8;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 2;
          }
        } else if (attribs[0]) {
          if (attribs[1]) {
            if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 4;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[8] != null) {
          if (attribs[8]) {
            $target$$2 = 8;
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[0]) {
        if (attribs[1]) {
          if (attribs[8] != null) {
            if (attribs[8]) {
              $target$$2 = 4;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[8] != null) {
        if (attribs[8]) {
          $target$$2 = 8;
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 9;
      }
    } else if (attribs[0]) {
      if (attribs[1]) {
        if (attribs[5] != null) {
          if (attribs[5]) {
            if (attribs[6] == null) {
              if (attribs[8] != null) {
                if (attribs[3] != null) {
                  if (attribs[3]) {
                    if (attribs[7] == null) {
                      $target$$2 = 6;
                    } else if (attribs[4] != null) {
                      if (attribs[4]) {
                        $target$$2 = 7;
                      } else {
                        $target$$2 = 9;
                      }
                    } else {
                      $target$$2 = 9;
                    }
                  } else if (attribs[4] != null) {
                    if (attribs[4]) {
                      $target$$2 = 7;
                    } else {
                      $target$$2 = 9;
                    }
                  } else {
                    $target$$2 = 9;
                  }
                } else if (attribs[4] != null) {
                  if (attribs[4]) {
                    $target$$2 = 7;
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 5;
              }
            } else if (attribs[4] != null) {
              if (attribs[4]) {
                $target$$2 = 7;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[3] != null) {
            if (attribs[3]) {
              if (attribs[6] == null) {
                if (attribs[7] == null) {
                  $target$$2 = 6;
                } else if (attribs[4] != null) {
                  if (attribs[4]) {
                    if (attribs[8] != null) {
                      if (attribs[8]) {
                        $target$$2 = 7;
                      } else {
                        $target$$2 = 9;
                      }
                    } else {
                      $target$$2 = 9;
                    }
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else if (attribs[4] != null) {
                if (attribs[4]) {
                  if (attribs[8] != null) {
                    if (attribs[8]) {
                      $target$$2 = 7;
                    } else {
                      $target$$2 = 9;
                    }
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else if (attribs[4] != null) {
              if (attribs[4]) {
                if (attribs[8] != null) {
                  if (attribs[8]) {
                    $target$$2 = 7;
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[4] != null) {
            if (attribs[4]) {
              if (attribs[8] != null) {
                if (attribs[8]) {
                  $target$$2 = 7;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[8] != null) {
          if (attribs[8]) {
            $target$$2 = 4;
          } else if (attribs[3] != null) {
            if (attribs[3]) {
              if (attribs[6] == null) {
                if (attribs[7] == null) {
                  $target$$2 = 6;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[3] != null) {
          if (attribs[3]) {
            if (attribs[6] == null) {
              if (attribs[7] == null) {
                $target$$2 = 6;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[5] != null) {
        if (attribs[5]) {
          if (attribs[6] == null) {
            if (attribs[8] != null) {
              if (attribs[3] != null) {
                if (attribs[3]) {
                  if (attribs[7] == null) {
                    $target$$2 = 6;
                  } else if (attribs[4] != null) {
                    if (attribs[4]) {
                      $target$$2 = 7;
                    } else {
                      $target$$2 = 9;
                    }
                  } else {
                    $target$$2 = 9;
                  }
                } else if (attribs[4] != null) {
                  if (attribs[4]) {
                    $target$$2 = 7;
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else if (attribs[4] != null) {
                if (attribs[4]) {
                  $target$$2 = 7;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 5;
            }
          } else if (attribs[4] != null) {
            if (attribs[4]) {
              $target$$2 = 7;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[3] != null) {
          if (attribs[3]) {
            if (attribs[6] == null) {
              if (attribs[7] == null) {
                $target$$2 = 6;
              } else if (attribs[4] != null) {
                if (attribs[4]) {
                  if (attribs[8] != null) {
                    if (attribs[8]) {
                      $target$$2 = 7;
                    } else {
                      $target$$2 = 9;
                    }
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else if (attribs[4] != null) {
              if (attribs[4]) {
                if (attribs[8] != null) {
                  if (attribs[8]) {
                    $target$$2 = 7;
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[4] != null) {
            if (attribs[4]) {
              if (attribs[8] != null) {
                if (attribs[8]) {
                  $target$$2 = 7;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[4] != null) {
          if (attribs[4]) {
            if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 7;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[3] != null) {
        if (attribs[3]) {
          if (attribs[6] == null) {
            if (attribs[7] == null) {
              $target$$2 = 6;
            } else if (attribs[4] != null) {
              if (attribs[4]) {
                if (attribs[8] != null) {
                  if (attribs[8]) {
                    $target$$2 = 7;
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[4] != null) {
            if (attribs[4]) {
              if (attribs[8] != null) {
                if (attribs[8]) {
                  $target$$2 = 7;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[4] != null) {
          if (attribs[4]) {
            if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 7;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[4] != null) {
        if (attribs[4]) {
          if (attribs[8] != null) {
            if (attribs[8]) {
              $target$$2 = 7;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 9;
      }
    } else if (attribs[4] != null) {
      if (attribs[4]) {
        $target$$2 = 8;
      } else if (attribs[5] != null) {
        if (attribs[5]) {
          $target$$2 = 8;
        } else if (attribs[8] != null) {
          if (attribs[8]) {
            $target$$2 = 8;
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[8] != null) {
        if (attribs[8]) {
          $target$$2 = 8;
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 9;
      }
    } else if (attribs[5] != null) {
      if (attribs[5]) {
        $target$$2 = 8;
      } else if (attribs[8] != null) {
        if (attribs[8]) {
          $target$$2 = 8;
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 9;
      }
    } else if (attribs[8] != null) {
      if (attribs[8]) {
        $target$$2 = 8;
      } else {
        $target$$2 = 9;
      }
    } else {
      $target$$2 = 9;
    }
  } else if (attribs[3] != null) {
    if (attribs[3]) {
      if (attribs[0]) {
        if (attribs[4] != null) {
          if (attribs[1]) {
            if (attribs[5] != null) {
              if (attribs[5]) {
                if (attribs[6] == null) {
                  if (attribs[8] != null) {
                    if (attribs[7] == null) {
                      $target$$2 = 6;
                    } else if (attribs[4]) {
                      $target$$2 = 7;
                    } else {
                      $target$$2 = 9;
                    }
                  } else {
                    $target$$2 = 5;
                  }
                } else if (attribs[4]) {
                  $target$$2 = 7;
                } else {
                  $target$$2 = 9;
                }
              } else if (attribs[6] == null) {
                if (attribs[7] == null) {
                  $target$$2 = 6;
                } else if (attribs[4]) {
                  if (attribs[8] != null) {
                    if (attribs[8]) {
                      $target$$2 = 7;
                    } else {
                      $target$$2 = 9;
                    }
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else if (attribs[4]) {
                if (attribs[8] != null) {
                  if (attribs[8]) {
                    $target$$2 = 7;
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 4;
              } else if (attribs[6] == null) {
                if (attribs[7] == null) {
                  $target$$2 = 6;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else if (attribs[6] == null) {
              if (attribs[7] == null) {
                $target$$2 = 6;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[5] != null) {
            if (attribs[5]) {
              if (attribs[6] == null) {
                if (attribs[8] != null) {
                  if (attribs[7] == null) {
                    $target$$2 = 6;
                  } else if (attribs[4]) {
                    $target$$2 = 7;
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 5;
                }
              } else if (attribs[4]) {
                $target$$2 = 7;
              } else {
                $target$$2 = 9;
              }
            } else if (attribs[6] == null) {
              if (attribs[7] == null) {
                $target$$2 = 6;
              } else if (attribs[4]) {
                if (attribs[8] != null) {
                  if (attribs[8]) {
                    $target$$2 = 7;
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else if (attribs[4]) {
              if (attribs[8] != null) {
                if (attribs[8]) {
                  $target$$2 = 7;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[6] == null) {
            if (attribs[7] == null) {
              $target$$2 = 6;
            } else if (attribs[4]) {
              if (attribs[8] != null) {
                if (attribs[8]) {
                  $target$$2 = 7;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[4]) {
            if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 7;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[5] != null) {
          if (attribs[5]) {
            if (attribs[6] == null) {
              if (attribs[8] == null) {
                $target$$2 = 5;
              } else if (attribs[7] == null) {
                $target$$2 = 6;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[6] == null) {
            if (attribs[7] == null) {
              $target$$2 = 6;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[6] != null) {
          if (attribs[6]) {
            if (attribs[7] == null) {
              if (attribs[8] != null) {
                if (attribs[8]) {
                  if (attribs[1]) {
                    $target$$2 = 4;
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 0;
              }
            } else if (attribs[1]) {
              if (attribs[8] != null) {
                if (attribs[8]) {
                  $target$$2 = 4;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[1]) {
            if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 4;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[7] == null) {
          if (attribs[1]) {
            if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 4;
              } else {
                $target$$2 = 6;
              }
            } else {
              $target$$2 = 6;
            }
          } else {
            $target$$2 = 6;
          }
        } else if (attribs[7]) {
          if (attribs[8] != null) {
            if (attribs[8]) {
              if (attribs[1]) {
                $target$$2 = 4;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 0;
          }
        } else if (attribs[1]) {
          if (attribs[8] != null) {
            if (attribs[8]) {
              $target$$2 = 4;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[4] != null) {
        if (attribs[4]) {
          $target$$2 = 8;
        } else if (attribs[5] != null) {
          if (attribs[5]) {
            $target$$2 = 8;
          } else if (attribs[8] != null) {
            if (attribs[8]) {
              $target$$2 = 8;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[8] != null) {
          if (attribs[8]) {
            $target$$2 = 8;
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[5] != null) {
        if (attribs[5]) {
          $target$$2 = 8;
        } else if (attribs[8] != null) {
          if (attribs[8]) {
            $target$$2 = 8;
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[8] != null) {
        if (attribs[8]) {
          $target$$2 = 8;
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 9;
      }
    } else if (attribs[0]) {
      if (attribs[1]) {
        if (attribs[5] != null) {
          if (attribs[5]) {
            if (attribs[6] == null) {
              if (attribs[8] != null) {
                if (attribs[4] != null) {
                  if (attribs[4]) {
                    $target$$2 = 7;
                  } else {
                    $target$$2 = 9;
                  }
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 5;
              }
            } else if (attribs[4] != null) {
              if (attribs[4]) {
                $target$$2 = 7;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[4] != null) {
            if (attribs[4]) {
              if (attribs[8] != null) {
                if (attribs[8]) {
                  $target$$2 = 7;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[8] != null) {
          if (attribs[8]) {
            $target$$2 = 4;
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[5] != null) {
        if (attribs[5]) {
          if (attribs[6] == null) {
            if (attribs[8] != null) {
              if (attribs[4] != null) {
                if (attribs[4]) {
                  $target$$2 = 7;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 5;
            }
          } else if (attribs[4] != null) {
            if (attribs[4]) {
              $target$$2 = 7;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[4] != null) {
          if (attribs[4]) {
            if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 7;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[4] != null) {
        if (attribs[4]) {
          if (attribs[8] != null) {
            if (attribs[8]) {
              $target$$2 = 7;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 9;
      }
    } else if (attribs[4] != null) {
      if (attribs[4]) {
        $target$$2 = 8;
      } else if (attribs[5] != null) {
        if (attribs[5]) {
          $target$$2 = 8;
        } else if (attribs[8] != null) {
          if (attribs[8]) {
            $target$$2 = 8;
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[8] != null) {
        if (attribs[8]) {
          $target$$2 = 8;
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 9;
      }
    } else if (attribs[5] != null) {
      if (attribs[5]) {
        $target$$2 = 8;
      } else if (attribs[8] != null) {
        if (attribs[8]) {
          $target$$2 = 8;
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 9;
      }
    } else if (attribs[8] != null) {
      if (attribs[8]) {
        $target$$2 = 8;
      } else {
        $target$$2 = 9;
      }
    } else {
      $target$$2 = 9;
    }
  } else if (attribs[4] != null) {
    if (attribs[4]) {
      if (attribs[0]) {
        if (attribs[5] != null) {
          if (attribs[5]) {
            if (attribs[6] == null) {
              if (attribs[8] != null) {
                $target$$2 = 7;
              } else {
                $target$$2 = 5;
              }
            } else {
              $target$$2 = 7;
            }
          } else if (attribs[8] != null) {
            if (attribs[8]) {
              $target$$2 = 7;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[6] == null) {
          if (attribs[7] == null) {
            if (attribs[8] != null) {
              if (attribs[8]) {
                if (attribs[1]) {
                  $target$$2 = 4;
                } else {
                  $target$$2 = 7;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 1;
            }
          } else if (attribs[1]) {
            if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 4;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[8] != null) {
            if (attribs[8]) {
              $target$$2 = 7;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[6]) {
          if (attribs[7] == null) {
            if (attribs[8] != null) {
              if (attribs[8]) {
                if (attribs[1]) {
                  $target$$2 = 4;
                } else {
                  $target$$2 = 7;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 1;
            }
          } else if (attribs[1]) {
            if (attribs[8] != null) {
              if (attribs[8]) {
                $target$$2 = 4;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[8] != null) {
            if (attribs[8]) {
              $target$$2 = 7;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[1]) {
          if (attribs[8] != null) {
            if (attribs[8]) {
              $target$$2 = 4;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[8] != null) {
          if (attribs[8]) {
            $target$$2 = 7;
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 8;
      }
    } else if (attribs[0]) {
      if (attribs[1]) {
        if (attribs[5] != null) {
          if (attribs[5]) {
            if (attribs[6] == null) {
              if (attribs[8] == null) {
                $target$$2 = 5;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[8] != null) {
          if (attribs[8]) {
            $target$$2 = 4;
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[5] != null) {
        if (attribs[5]) {
          if (attribs[6] == null) {
            if (attribs[8] == null) {
              $target$$2 = 5;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 9;
      }
    } else if (attribs[5] != null) {
      if (attribs[5]) {
        $target$$2 = 8;
      } else if (attribs[8] != null) {
        if (attribs[8]) {
          $target$$2 = 8;
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 9;
      }
    } else if (attribs[8] != null) {
      if (attribs[8]) {
        $target$$2 = 8;
      } else {
        $target$$2 = 9;
      }
    } else {
      $target$$2 = 9;
    }
  } else if (attribs[5] != null) {
    if (attribs[5]) {
      if (attribs[0]) {
        if (attribs[1]) {
          if (attribs[6] != null) {
            if (attribs[6]) {
              if (attribs[7] == null) {
                if (attribs[8] == null) {
                  $target$$2 = 2;
                } else {
                  $target$$2 = 9;
                }
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[7] != null) {
            if (attribs[7]) {
              if (attribs[8] == null) {
                $target$$2 = 2;
              } else {
                $target$$2 = 9;
              }
            } else if (attribs[8] == null) {
              $target$$2 = 5;
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[8] == null) {
            $target$$2 = 5;
          } else if (attribs[8]) {
            $target$$2 = 2;
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[6] == null) {
          if (attribs[7] != null) {
            if (attribs[7]) {
              if (attribs[8] == null) {
                $target$$2 = 2;
              } else {
                $target$$2 = 9;
              }
            } else if (attribs[8] == null) {
              $target$$2 = 5;
            } else {
              $target$$2 = 9;
            }
          } else if (attribs[8] == null) {
            $target$$2 = 5;
          } else {
            $target$$2 = 9;
          }
        } else if (attribs[6]) {
          if (attribs[7] == null) {
            if (attribs[8] == null) {
              $target$$2 = 2;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 8;
      }
    } else if (attribs[0]) {
      $target$$2 = 9;
    } else if (attribs[8] != null) {
      if (attribs[8]) {
        $target$$2 = 8;
      } else {
        $target$$2 = 9;
      }
    } else {
      $target$$2 = 9;
    }
  } else if (attribs[6] != null) {
    if (attribs[6]) {
      if (attribs[7] == null) {
        if (attribs[8] != null) {
          if (attribs[8]) {
            if (attribs[0]) {
              if (attribs[1]) {
                $target$$2 = 4;
              } else {
                $target$$2 = 9;
              }
            } else {
              $target$$2 = 8;
            }
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 2;
        }
      } else if (attribs[0]) {
        if (attribs[1]) {
          if (attribs[8] != null) {
            if (attribs[8]) {
              $target$$2 = 4;
            } else {
              $target$$2 = 9;
            }
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else if (attribs[8] != null) {
        if (attribs[8]) {
          $target$$2 = 8;
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 9;
      }
    } else if (attribs[0]) {
      if (attribs[1]) {
        if (attribs[8] != null) {
          if (attribs[8]) {
            $target$$2 = 4;
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 9;
      }
    } else if (attribs[8] != null) {
      if (attribs[8]) {
        $target$$2 = 8;
      } else {
        $target$$2 = 9;
      }
    } else {
      $target$$2 = 9;
    }
  } else if (attribs[7] == null) {
    if (attribs[8] != null) {
      if (attribs[8]) {
        if (attribs[0]) {
          if (attribs[1]) {
            $target$$2 = 4;
          } else {
            $target$$2 = 9;
          }
        } else {
          $target$$2 = 8;
        }
      } else {
        $target$$2 = 9;
      }
    } else {
      $target$$2 = 0;
    }
  } else if (attribs[0]) {
    if (attribs[1]) {
      if (attribs[8] != null) {
        if (attribs[8]) {
          $target$$2 = 4;
        } else {
          $target$$2 = 9;
        }
      } else {
        $target$$2 = 9;
      }
    } else {
      $target$$2 = 9;
    }
  } else if (attribs[8] != null) {
    if (attribs[8]) {
      $target$$2 = 8;
    } else {
      $target$$2 = 9;
    }
  } else {
    $target$$2 = 9;
  }

  switch ($target$$2) {
    case 1:
      {
        if (isTrueFSharpStructTycon(g$$58, tycon$$14)) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$augNoRefEqualsOnStruct)(), m$$47));
        }

        break;
      }

    case 3:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$augNoEqualityNeedsNoComparison)(), m$$47));
        break;
      }

    case 4:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$augStructCompNeedsStructEquality)(), m$$47));
        break;
      }

    case 5:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$augStructEqNeedsNoCompOrStructComp)(), m$$47));
        break;
      }

    case 6:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$augCustomEqNeedsNoCompOrCustomComp)(), m$$47));
        break;
      }

    case 7:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$augTypeCantHaveRefEqAndStructAttrs)(), m$$47));
        break;
      }

    case 8:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$augOnlyCertainTypesCanHaveAttrs)(), m$$47));
        break;
      }

    case 9:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$augInvalidAttrs)(), m$$47));
        break;
      }
  }

  const hasNominalInterface = function hasNominalInterface(tcref$$11) {
    const ty$$29 = (0, _TastOps.generalizedTyconRef)((0, _tast.mkLocalTyconRef)(tycon$$14));
    return (0, _infos.ExistsHeadTypeInEntireHierarchy)(g$$58, amap, (0, _tast.Entity$$get_Range)(tycon$$14), ty$$29, tcref$$11);
  };

  const hasExplicitICompare = hasNominalInterface((0, _TcGlobals.TcGlobals$$get_tcref_System_IStructuralComparable)(g$$58)) ? true : hasNominalInterface((0, _TcGlobals.TcGlobals$$get_tcref_System_IComparable)(g$$58));
  const hasExplicitIGenericCompare = hasNominalInterface((0, _TcGlobals.TcGlobals$$get_system_GenericIComparable_tcref)(g$$58));
  const hasExplicitEquals = (0, _TastOps.Entity$002EHasOverride)(tycon$$14, g$$58, "Equals", (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$58), (0, _Types.L)())) ? true : hasNominalInterface((0, _TcGlobals.TcGlobals$$get_tcref_System_IStructuralEquatable)(g$$58));
  const hasExplicitGenericEquals = hasNominalInterface((0, _TcGlobals.TcGlobals$$get_system_GenericIEquatable_tcref)(g$$58));
  var $target$$3;

  if (attribs[2] != null) {
    if (attribs[2]) {
      if (hasExplicitEquals ? true : hasExplicitGenericEquals) {
        $target$$3 = 0;
      } else {
        $target$$3 = 1;
      }
    } else {
      $target$$3 = 1;
    }
  } else {
    $target$$3 = 1;
  }

  switch ($target$$3) {
    case 0:
      {
        (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$augNoEqNeedsNoObjEquals)(), m$$47));
        break;
      }

    case 1:
      {
        var $target$$4;

        if (attribs[6] != null) {
          if (attribs[6]) {
            if (hasExplicitICompare ? true : hasExplicitIGenericCompare) {
              $target$$4 = 0;
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
              (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$augNoCompCantImpIComp)(), m$$47));
              break;
            }

          case 1:
            {
              var $target$$5;

              if (attribs[3] != null) {
                if (attribs[3]) {
                  if ((isImplementation ? !hasExplicitEquals : false) ? !hasExplicitGenericEquals : false) {
                    $target$$5 = 0;
                  } else {
                    $target$$5 = 1;
                  }
                } else {
                  $target$$5 = 1;
                }
              } else {
                $target$$5 = 1;
              }

              switch ($target$$5) {
                case 0:
                  {
                    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$augCustomEqNeedsObjEquals)(), m$$47));
                    break;
                  }

                case 1:
                  {
                    var $target$$6;

                    if (attribs[7] != null) {
                      if (attribs[7]) {
                        if ((isImplementation ? !hasExplicitICompare : false) ? !hasExplicitIGenericCompare : false) {
                          $target$$6 = 0;
                        } else {
                          $target$$6 = 1;
                        }
                      } else {
                        $target$$6 = 1;
                      }
                    } else {
                      $target$$6 = 1;
                    }

                    switch ($target$$6) {
                      case 0:
                        {
                          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$augCustomCompareNeedsIComp)(), m$$47));
                          break;
                        }

                      case 1:
                        {
                          var $target$$7;

                          if (attribs[4] != null) {
                            if (attribs[4]) {
                              if (hasExplicitEquals ? true : hasExplicitIGenericCompare) {
                                $target$$7 = 0;
                              } else {
                                $target$$7 = 1;
                              }
                            } else {
                              $target$$7 = 1;
                            }
                          } else {
                            $target$$7 = 1;
                          }

                          switch ($target$$7) {
                            case 0:
                              {
                                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$augRefEqCantHaveObjEquals)(), m$$47));
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

        break;
      }
  }
}

function TyconIsCandidateForAugmentationWithCompare(g$$59, tycon$$15) {
  const isUnit = (0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$59) ? (0, _tast.Entity$$get_DisplayName)(tycon$$15) === "Unit" : false;

  if (!isUnit ? !(0, _TastOps.TyconRefHasAttribute)(g$$59, (0, _tast.Entity$$get_Range)(tycon$$15), (0, _TcGlobals.TcGlobals$$get_attrib_IsByRefLikeAttribute)(g$$59), (0, _tast.mkLocalTyconRef)(tycon$$15)) : false) {
    const matchValue$$1 = getAugmentationAttribs(g$$59, tycon$$15);
    var $target$$8;

    if (matchValue$$1[0]) {
      if (matchValue$$1[1]) {
        if (matchValue$$1[2] == null) {
          if (matchValue$$1[3] == null) {
            if (matchValue$$1[4] == null) {
              if (matchValue$$1[5] != null) {
                if (matchValue$$1[5]) {
                  if (matchValue$$1[6] == null) {
                    if (matchValue$$1[7] == null) {
                      if (matchValue$$1[8] != null) {
                        if (matchValue$$1[8]) {
                          $target$$8 = 0;
                        } else {
                          $target$$8 = 1;
                        }
                      } else {
                        $target$$8 = 1;
                      }
                    } else {
                      $target$$8 = 1;
                    }
                  } else {
                    $target$$8 = 1;
                  }
                } else {
                  $target$$8 = 1;
                }
              } else if (matchValue$$1[6] == null) {
                if (matchValue$$1[7] == null) {
                  if (matchValue$$1[8] != null) {
                    if (matchValue$$1[8]) {
                      $target$$8 = 0;
                    } else {
                      $target$$8 = 1;
                    }
                  } else {
                    $target$$8 = 0;
                  }
                } else {
                  $target$$8 = 1;
                }
              } else {
                $target$$8 = 1;
              }
            } else {
              $target$$8 = 1;
            }
          } else {
            $target$$8 = 1;
          }
        } else {
          $target$$8 = 1;
        }
      } else {
        $target$$8 = 1;
      }
    } else {
      $target$$8 = 1;
    }

    switch ($target$$8) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return false;
        }
    }
  } else {
    return false;
  }
}

function TyconIsCandidateForAugmentationWithEquals(g$$60, tycon$$16) {
  const isUnit$$1 = (0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$60) ? (0, _tast.Entity$$get_DisplayName)(tycon$$16) === "Unit" : false;

  if (!isUnit$$1 ? !(0, _TastOps.TyconRefHasAttribute)(g$$60, (0, _tast.Entity$$get_Range)(tycon$$16), (0, _TcGlobals.TcGlobals$$get_attrib_IsByRefLikeAttribute)(g$$60), (0, _tast.mkLocalTyconRef)(tycon$$16)) : false) {
    const matchValue$$2 = getAugmentationAttribs(g$$60, tycon$$16);
    var $target$$9;

    if (matchValue$$2[0]) {
      if (matchValue$$2[2] == null) {
        if (matchValue$$2[3] == null) {
          if (matchValue$$2[4] == null) {
            if (matchValue$$2[5] != null) {
              if (matchValue$$2[5]) {
                $target$$9 = 0;
              } else {
                $target$$9 = 1;
              }
            } else {
              $target$$9 = 0;
            }
          } else {
            $target$$9 = 1;
          }
        } else {
          $target$$9 = 1;
        }
      } else {
        $target$$9 = 1;
      }
    } else {
      $target$$9 = 1;
    }

    switch ($target$$9) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return false;
        }
    }
  } else {
    return false;
  }
}

function TyconIsCandidateForAugmentationWithHash(g$$61, tycon$$17) {
  return TyconIsCandidateForAugmentationWithEquals(g$$61, tycon$$17);
}

function slotImplMethod(final$, c$$5, slotsig) {
  return new _tast.ValMemberInfo(c$$5, (0, _Types.L)(slotsig, (0, _Types.L)()), false, new _ast.MemberFlags(true, false, true, final$, new _ast.MemberKind(2, "Member")));
}

function nonVirtualMethod(c$$6) {
  return new _tast.ValMemberInfo(c$$6, (0, _Types.L)(), false, new _ast.MemberFlags(true, false, false, false, new _ast.MemberKind(2, "Member")));
}

const unitArg = _tast.ValReprInfoModule$$$unitArgData;
exports.unitArg = unitArg;
const unaryArg = (0, _Types.L)(_tast.ValReprInfoModule$$$unnamedTopArg, (0, _Types.L)());
exports.unaryArg = unaryArg;
const tupArg = (0, _Types.L)((0, _Types.L)(_tast.ValReprInfoModule$$$unnamedTopArg1, (0, _Types.L)(_tast.ValReprInfoModule$$$unnamedTopArg1, (0, _Types.L)())), (0, _Types.L)());
exports.tupArg = tupArg;

function mkValSpec(g$$62, tcref$$12, tmty, vis, slotsig$$1, methn, ty$$30, argData) {
  const m$$48 = (0, _tast.EntityRef$$get_Range)(tcref$$12);
  const tps = (0, _tast.EntityRef$$Typars$$4DB9192C)(tcref$$12, m$$48);
  const final$$$1 = ((0, _TastOps.isUnionTy)(g$$62, tmty) ? true : (0, _TastOps.isRecdTy)(g$$62, tmty)) ? true : (0, _TastOps.isStructTy)(g$$62, tmty);
  let membInfo;

  if (slotsig$$1 != null) {
    const slotsig$$2 = slotsig$$1;
    membInfo = slotImplMethod(final$$$1, tcref$$12, slotsig$$2);
  } else {
    membInfo = nonVirtualMethod(tcref$$12);
  }

  const inl = new _tast.ValInline(2, "Optional");
  const args = (0, _Types.L)(_tast.ValReprInfoModule$$$unnamedTopArg, argData);
  const topValInfo = new _tast.ValReprInfo(0, "ValReprInfo", (0, _tast.ValReprInfoModule$$$InferTyparInfo)(tps), args, _tast.ValReprInfoModule$$$unnamedRetVal);
  return (0, _tast.NewVal)(methn, m$$48, null, ty$$30, new _tast.ValMutability(0, "Immutable"), true, topValInfo, vis, new _tast.ValRecursiveScopeInfo(1, "ValNotInRecScope"), membInfo, new _tast.ValBaseOrThisInfo(2, "NormalVal"), (0, _Types.L)(), inl, (0, _ast.XmlDoc$$$get_Empty)(), true, false, false, false, false, false, null, new _tast.ParentRef(0, "Parent", tcref$$12));
}

function MakeValsForCompareAugmentation(g$$63, tcref$$13) {
  const m$$49 = (0, _tast.EntityRef$$get_Range)(tcref$$13);
  const patternInput$$62 = mkMinimalTy(g$$63, tcref$$13);
  const tps$$1 = (0, _tast.EntityRef$$Typars$$4DB9192C)(tcref$$13, m$$49);
  const vis$$1 = (0, _tast.EntityRef$$get_TypeReprAccessibility)(tcref$$13);
  return [mkValSpec(g$$63, tcref$$13, patternInput$$62[1], vis$$1, mkIComparableCompareToSlotSig(g$$63), "CompareTo", (0, _TastOps.op_PlusMinusGreater)(tps$$1, mkCompareObjTy(g$$63, patternInput$$62[1])), unaryArg), mkValSpec(g$$63, tcref$$13, patternInput$$62[1], vis$$1, mkGenericIComparableCompareToSlotSig(g$$63, patternInput$$62[1]), "CompareTo", (0, _TastOps.op_PlusMinusGreater)(tps$$1, mkCompareTy(g$$63, patternInput$$62[1])), unaryArg)];
}

function MakeValsForCompareWithComparerAugmentation(g$$64, tcref$$14) {
  const m$$50 = (0, _tast.EntityRef$$get_Range)(tcref$$14);
  const patternInput$$63 = mkMinimalTy(g$$64, tcref$$14);
  const tps$$2 = (0, _tast.EntityRef$$Typars$$4DB9192C)(tcref$$14, m$$50);
  const vis$$2 = (0, _tast.EntityRef$$get_TypeReprAccessibility)(tcref$$14);
  return mkValSpec(g$$64, tcref$$14, patternInput$$63[1], vis$$2, mkIStructuralComparableCompareToSlotSig(g$$64), "CompareTo", (0, _TastOps.op_PlusMinusGreater)(tps$$2, mkCompareWithComparerTy(g$$64, patternInput$$63[1])), tupArg);
}

function MakeValsForEqualsAugmentation(g$$65, tcref$$15) {
  const m$$51 = (0, _tast.EntityRef$$get_Range)(tcref$$15);
  const patternInput$$64 = mkMinimalTy(g$$65, tcref$$15);
  const vis$$3 = (0, _tast.EntityRef$$get_TypeReprAccessibility)(tcref$$15);
  const tps$$3 = (0, _tast.EntityRef$$Typars$$4DB9192C)(tcref$$15, m$$51);
  const objEqualsVal = mkValSpec(g$$65, tcref$$15, patternInput$$64[1], vis$$3, mkEqualsSlotSig(g$$65), "Equals", (0, _TastOps.op_PlusMinusGreater)(tps$$3, mkEqualsObjTy(g$$65, patternInput$$64[1])), unaryArg);
  const nocEqualsVal = mkValSpec(g$$65, tcref$$15, patternInput$$64[1], vis$$3, (0, _tast.Entity$$get_IsExceptionDecl)((0, _tast.EntityRef$$get_Deref)(tcref$$15)) ? null : mkGenericIEquatableEqualsSlotSig(g$$65, patternInput$$64[1]), "Equals", (0, _TastOps.op_PlusMinusGreater)(tps$$3, mkEqualsTy(g$$65, patternInput$$64[1])), unaryArg);
  return [objEqualsVal, nocEqualsVal];
}

function MakeValsForEqualityWithComparerAugmentation(g$$66, tcref$$16) {
  const patternInput$$65 = mkMinimalTy(g$$66, tcref$$16);
  const vis$$4 = (0, _tast.EntityRef$$get_TypeReprAccessibility)(tcref$$16);
  const tps$$4 = (0, _tast.EntityRef$$Typars$$4DB9192C)(tcref$$16, (0, _tast.EntityRef$$get_Range)(tcref$$16));
  const objGetHashCodeVal = mkValSpec(g$$66, tcref$$16, patternInput$$65[1], vis$$4, mkGetHashCodeSlotSig(g$$66), "GetHashCode", (0, _TastOps.op_PlusMinusGreater)(tps$$4, mkHashTy(g$$66, patternInput$$65[1])), unitArg);
  const withcGetHashCodeVal = mkValSpec(g$$66, tcref$$16, patternInput$$65[1], vis$$4, mkIStructuralEquatableGetHashCodeSlotSig(g$$66), "GetHashCode", (0, _TastOps.op_PlusMinusGreater)(tps$$4, mkHashWithComparerTy(g$$66, patternInput$$65[1])), unaryArg);
  const withcEqualsVal = mkValSpec(g$$66, tcref$$16, patternInput$$65[1], vis$$4, mkIStructuralEquatableEqualsSlotSig(g$$66), "Equals", (0, _TastOps.op_PlusMinusGreater)(tps$$4, mkEqualsWithComparerTy(g$$66, patternInput$$65[1])), tupArg);
  return [objGetHashCodeVal, withcGetHashCodeVal, withcEqualsVal];
}

function MakeBindingsForCompareAugmentation(g$$67, tycon$$18) {
  const tcref$$17 = (0, _tast.mkLocalTyconRef)(tycon$$18);
  const m$$52 = (0, _tast.Entity$$get_Range)(tycon$$18);
  const tps$$5 = (0, _tast.Entity$$Typars$$4DB9192C)(tycon$$18, (0, _tast.Entity$$get_Range)(tycon$$18));

  const mkCompare = function mkCompare(comparef) {
    const matchValue$$3 = (0, _tast.Entity$$get_GeneratedCompareToValues)(tycon$$18);

    if (matchValue$$3 != null) {
      const vref2 = matchValue$$3[1];
      const vref1 = matchValue$$3[0];
      const vspec1 = (0, _tast.ValRef$$get_Deref)(vref1);
      const vspec2 = (0, _tast.ValRef$$get_Deref)(vref2);
      let rhs1;
      const patternInput$$66 = mkMinimalTy(g$$67, tcref$$17);
      const patternInput$$67 = mkThisVar(g$$67, m$$52, patternInput$$66[1]);
      const patternInput$$68 = (0, _TastOps.mkCompGenLocal)(m$$52, "obj", (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$67));
      let comparee;

      if ((0, _TastOps.isUnitTy)(g$$67, patternInput$$66[1])) {
        comparee = (0, _TastOps.mkZero)(g$$67, m$$52);
      } else {
        const thate$$9 = (0, _TastOps.mkCoerceExpr)(patternInput$$68[1], patternInput$$66[1], m$$52, (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$67));
        comparee = (0, _TastOps.mkApps)(g$$67, [(0, _TastOps.exprForValRef)(m$$52, vref2), (0, _tast.ValRef$$get_Type)(vref2)], patternInput$$66[0].tail == null ? (0, _Types.L)() : (0, _Types.L)(patternInput$$66[0], (0, _Types.L)()), (0, _Types.L)(patternInput$$67[1], (0, _Types.L)(thate$$9, (0, _Types.L)())), m$$52);
      }

      rhs1 = (0, _TastOps.mkLambdas)(m$$52, tps$$5, (0, _Types.L)(patternInput$$67[0], (0, _Types.L)(patternInput$$68[0], (0, _Types.L)())), comparee, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$67));
      let rhs2;
      const patternInput$$69 = comparef(g$$67, tcref$$17, tycon$$18);
      rhs2 = (0, _TastOps.mkLambdas)(m$$52, tps$$5, (0, _Types.L)(patternInput$$69[0], (0, _Types.L)(patternInput$$69[1], (0, _Types.L)())), patternInput$$69[2], (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$67));
      return (0, _Types.L)((0, _TastOps.mkCompGenBind)(vspec2, rhs2), (0, _Types.L)((0, _TastOps.mkCompGenBind)(vspec1, rhs1), (0, _Types.L)()));
    } else {
      return (0, _Types.L)();
    }
  };

  if ((0, _tast.Entity$$get_IsUnionTycon)(tycon$$18)) {
    return mkCompare(mkUnionCompare);
  } else if ((0, _tast.Entity$$get_IsRecordTycon)(tycon$$18) ? true : (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$18)) {
    return mkCompare(mkRecdCompare);
  } else {
    return (0, _Types.L)();
  }
}

function MakeBindingsForCompareWithComparerAugmentation(g$$70, tycon$$21) {
  const tcref$$20 = (0, _tast.mkLocalTyconRef)(tycon$$21);
  const m$$53 = (0, _tast.Entity$$get_Range)(tycon$$21);
  const tps$$6 = (0, _tast.Entity$$Typars$$4DB9192C)(tycon$$21, (0, _tast.Entity$$get_Range)(tycon$$21));

  const mkCompare$$1 = function mkCompare$$1(comparef$$1) {
    const matchValue$$4 = (0, _tast.Entity$$get_GeneratedCompareToWithComparerValues)(tycon$$21);

    if (matchValue$$4 != null) {
      const vref = matchValue$$4;
      const vspec = (0, _tast.ValRef$$get_Deref)(vref);
      const patternInput$$70 = mkMinimalTy(g$$70, tcref$$20);
      const patternInput$$71 = (0, _TastOps.mkCompGenLocal)(m$$53, "comp", (0, _TcGlobals.TcGlobals$$get_IComparer_ty)(g$$70));
      const patternInput$$72 = mkThisVar(g$$70, m$$53, patternInput$$70[1]);
      const patternInput$$73 = (0, _TastOps.mkCompGenLocal)(m$$53, "obj", (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$70));
      const thate$$10 = (0, _TastOps.mkCoerceExpr)(patternInput$$73[1], patternInput$$70[1], m$$53, (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$70));
      let rhs;
      const comparee$$2 = comparef$$1(g$$70, tcref$$20, tycon$$21, [patternInput$$72[0], patternInput$$72[1]], [patternInput$$73[0], thate$$10], patternInput$$71[1]);
      const comparee$$3 = (0, _TastOps.isUnitTy)(g$$70, patternInput$$70[1]) ? (0, _TastOps.mkZero)(g$$70, m$$53) : comparee$$2;
      rhs = (0, _TastOps.mkMultiLambdas)(m$$53, tps$$6, (0, _Types.L)((0, _Types.L)(patternInput$$72[0], (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(patternInput$$73[0], (0, _Types.L)(patternInput$$71[0], (0, _Types.L)())), (0, _Types.L)())), comparee$$3, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$70));
      return (0, _Types.L)((0, _TastOps.mkCompGenBind)(vspec, rhs), (0, _Types.L)());
    } else {
      return (0, _Types.L)();
    }
  };

  if ((0, _tast.Entity$$get_IsUnionTycon)(tycon$$21)) {
    return mkCompare$$1(function (g$$71, tcref$$21, tycon$$22, tupledArg, tupledArg$$1, compe$$11) {
      return mkUnionCompareWithComparer(g$$71, tcref$$21, tycon$$22, tupledArg[0], tupledArg[1], tupledArg$$1[0], tupledArg$$1[1], compe$$11);
    });
  } else if ((0, _tast.Entity$$get_IsRecordTycon)(tycon$$21) ? true : (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$21)) {
    return mkCompare$$1(function (g$$72, tcref$$22, tycon$$23, tupledArg$$2, tupledArg$$3, compe$$12) {
      return mkRecdCompareWithComparer(g$$72, tcref$$22, tycon$$23, tupledArg$$2[0], tupledArg$$2[1], tupledArg$$3[0], tupledArg$$3[1], compe$$12);
    });
  } else {
    return (0, _Types.L)();
  }
}

function MakeBindingsForEqualityWithComparerAugmentation(g$$73, tycon$$24) {
  const tcref$$23 = (0, _tast.mkLocalTyconRef)(tycon$$24);
  const m$$54 = (0, _tast.Entity$$get_Range)(tycon$$24);
  const tps$$7 = (0, _tast.Entity$$Typars$$4DB9192C)(tycon$$24, (0, _tast.Entity$$get_Range)(tycon$$24));

  const mkStructuralEquatable = function mkStructuralEquatable(hashf, equalsf) {
    const matchValue$$5 = (0, _tast.Entity$$get_GeneratedHashAndEqualsWithComparerValues)(tycon$$24);

    if (matchValue$$5 != null) {
      const withcGetHashCodeVal$$1 = matchValue$$5[1];
      const withcEqualsVal$$1 = matchValue$$5[2];
      const objGetHashCodeVal$$1 = matchValue$$5[0];
      let withcGetHashCodeExpr;
      const patternInput$$74 = (0, _TastOps.mkCompGenLocal)(m$$54, "comp", (0, _TcGlobals.TcGlobals$$get_IEqualityComparer_ty)(g$$73));
      const patternInput$$75 = hashf(g$$73, tcref$$23, tycon$$24, patternInput$$74[1]);
      withcGetHashCodeExpr = (0, _TastOps.mkLambdas)(m$$54, tps$$7, (0, _Types.L)(patternInput$$75[0], (0, _Types.L)(patternInput$$74[0], (0, _Types.L)())), patternInput$$75[1], (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$73));
      let withcEqualsExpr;
      const patternInput$$76 = mkMinimalTy(g$$73, tcref$$23);
      const patternInput$$77 = mkThisVar(g$$73, m$$54, patternInput$$76[1]);
      const patternInput$$78 = (0, _TastOps.mkCompGenLocal)(m$$54, "obj", (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$73));
      const patternInput$$79 = (0, _TastOps.mkCompGenLocal)(m$$54, "that", patternInput$$76[1]);
      const patternInput$$80 = (0, _TastOps.mkCompGenLocal)(m$$54, "comp", (0, _TcGlobals.TcGlobals$$get_IEqualityComparer_ty)(g$$73));
      const equalse = equalsf(g$$73, tcref$$23, tycon$$24, [patternInput$$77[0], patternInput$$77[1]], patternInput$$78[1], [patternInput$$79[0], patternInput$$79[1]], patternInput$$80[1]);
      withcEqualsExpr = (0, _TastOps.mkMultiLambdas)(m$$54, tps$$7, (0, _Types.L)((0, _Types.L)(patternInput$$77[0], (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(patternInput$$78[0], (0, _Types.L)(patternInput$$80[0], (0, _Types.L)())), (0, _Types.L)())), equalse, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$73));
      let objGetHashCodeExpr;
      const patternInput$$81 = mkMinimalTy(g$$73, tcref$$23);
      const patternInput$$82 = mkThisVar(g$$73, m$$54, patternInput$$81[1]);
      const patternInput$$83 = (0, _TastOps.mkCompGenLocal)(m$$54, "unitArg", (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$73));
      let hashe$$1;

      if ((0, _TastOps.isUnitTy)(g$$73, patternInput$$81[1])) {
        hashe$$1 = (0, _TastOps.mkZero)(g$$73, m$$54);
      } else {
        const compe$$15 = mkILCallGetEqualityComparer(g$$73, m$$54);
        hashe$$1 = (0, _TastOps.mkApps)(g$$73, [(0, _TastOps.exprForValRef)(m$$54, withcGetHashCodeVal$$1), (0, _tast.ValRef$$get_Type)(withcGetHashCodeVal$$1)], patternInput$$81[0].tail == null ? (0, _Types.L)() : (0, _Types.L)(patternInput$$81[0], (0, _Types.L)()), (0, _Types.L)(patternInput$$82[1], (0, _Types.L)(compe$$15, (0, _Types.L)())), m$$54);
      }

      objGetHashCodeExpr = (0, _TastOps.mkLambdas)(m$$54, tps$$7, (0, _Types.L)(patternInput$$82[0], (0, _Types.L)(patternInput$$83[0], (0, _Types.L)())), hashe$$1, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$73));
      return (0, _Types.L)((0, _TastOps.mkCompGenBind)((0, _tast.ValRef$$get_Deref)(withcGetHashCodeVal$$1), withcGetHashCodeExpr), (0, _Types.L)((0, _TastOps.mkCompGenBind)((0, _tast.ValRef$$get_Deref)(objGetHashCodeVal$$1), objGetHashCodeExpr), (0, _Types.L)((0, _TastOps.mkCompGenBind)((0, _tast.ValRef$$get_Deref)(withcEqualsVal$$1), withcEqualsExpr), (0, _Types.L)())));
    } else {
      return (0, _Types.L)();
    }
  };

  if ((0, _tast.Entity$$get_IsUnionTycon)(tycon$$24)) {
    return mkStructuralEquatable(mkUnionHashWithComparer, function (g$$75, tcref$$25, tycon$$26, tupledArg$$4, thatobje$$6, tupledArg$$5, compe$$17) {
      return mkUnionEqualityWithComparer(g$$75, tcref$$25, tycon$$26, tupledArg$$4[0], tupledArg$$4[1], thatobje$$6, tupledArg$$5[0], tupledArg$$5[1], compe$$17);
    });
  } else if ((0, _tast.Entity$$get_IsRecordTycon)(tycon$$24) ? true : (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$24)) {
    return mkStructuralEquatable(mkRecdHashWithComparer, function (g$$77, tcref$$27, tycon$$28, tupledArg$$6, thatobje$$7, tupledArg$$7, compe$$19) {
      return mkRecdEqualityWithComparer(g$$77, tcref$$27, tycon$$28, tupledArg$$6[0], tupledArg$$6[1], thatobje$$7, tupledArg$$7[0], tupledArg$$7[1], compe$$19);
    });
  } else if ((0, _tast.Entity$$get_IsExceptionDecl)(tycon$$24)) {
    return mkStructuralEquatable(mkExnHashWithComparer, function (g$$79, exnref$$4, exnc$$5, tupledArg$$8, thatobje$$8, tupledArg$$9, compe$$21) {
      return mkExnEqualityWithComparer(g$$79, exnref$$4, exnc$$5, tupledArg$$8[0], tupledArg$$8[1], thatobje$$8, tupledArg$$9[0], tupledArg$$9[1], compe$$21);
    });
  } else {
    return (0, _Types.L)();
  }
}

function MakeBindingsForEqualsAugmentation(g$$80, tycon$$29) {
  const tcref$$28 = (0, _tast.mkLocalTyconRef)(tycon$$29);
  const m$$55 = (0, _tast.Entity$$get_Range)(tycon$$29);
  const tps$$8 = (0, _tast.Entity$$Typars$$4DB9192C)(tycon$$29, m$$55);

  const mkEquals = function mkEquals(equalsf$$1) {
    const matchValue$$6 = (0, _tast.Entity$$get_GeneratedHashAndEqualsValues)(tycon$$29);

    if (matchValue$$6 != null) {
      const objEqualsVal$$1 = matchValue$$6[0];
      const nocEqualsVal$$1 = matchValue$$6[1];
      let nocEqualsExpr;
      const patternInput$$84 = equalsf$$1(g$$80, tcref$$28, tycon$$29);
      nocEqualsExpr = (0, _TastOps.mkLambdas)(m$$55, tps$$8, (0, _Types.L)(patternInput$$84[0], (0, _Types.L)(patternInput$$84[1], (0, _Types.L)())), patternInput$$84[2], (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$80));
      let objEqualsExpr;
      const patternInput$$85 = mkMinimalTy(g$$80, tcref$$28);
      const patternInput$$86 = mkThisVar(g$$80, m$$55, patternInput$$85[1]);
      const patternInput$$87 = (0, _TastOps.mkCompGenLocal)(m$$55, "obj", (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$80));
      let equalse$$2;

      if ((0, _TastOps.isUnitTy)(g$$80, patternInput$$85[1])) {
        equalse$$2 = (0, _TastOps.mkTrue)(g$$80, m$$55);
      } else {
        const patternInput$$88 = (0, _TastOps.mkCompGenLocal)(m$$55, "that", patternInput$$85[1]);
        equalse$$2 = (0, _TastOps.mkIsInstConditional)(g$$80, m$$55, patternInput$$85[1], patternInput$$87[1], patternInput$$88[0], (0, _TastOps.mkApps)(g$$80, [(0, _TastOps.exprForValRef)(m$$55, nocEqualsVal$$1), (0, _tast.ValRef$$get_Type)(nocEqualsVal$$1)], patternInput$$85[0].tail == null ? (0, _Types.L)() : (0, _Types.L)(patternInput$$85[0], (0, _Types.L)()), (0, _Types.L)(patternInput$$86[1], (0, _Types.L)(patternInput$$88[1], (0, _Types.L)())), m$$55), (0, _TastOps.mkFalse)(g$$80, m$$55));
      }

      objEqualsExpr = (0, _TastOps.mkLambdas)(m$$55, tps$$8, (0, _Types.L)(patternInput$$86[0], (0, _Types.L)(patternInput$$87[0], (0, _Types.L)())), equalse$$2, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$80));
      return (0, _Types.L)((0, _TastOps.mkCompGenBind)((0, _tast.ValRef$$get_Deref)(nocEqualsVal$$1), nocEqualsExpr), (0, _Types.L)((0, _TastOps.mkCompGenBind)((0, _tast.ValRef$$get_Deref)(objEqualsVal$$1), objEqualsExpr), (0, _Types.L)()));
    } else {
      return (0, _Types.L)();
    }
  };

  if ((0, _tast.Entity$$get_IsExceptionDecl)(tycon$$29)) {
    return mkEquals(mkExnEquality);
  } else if ((0, _tast.Entity$$get_IsUnionTycon)(tycon$$29)) {
    return mkEquals(mkUnionEquality);
  } else if ((0, _tast.Entity$$get_IsRecordTycon)(tycon$$29) ? true : (0, _tast.Entity$$get_IsStructOrEnumTycon)(tycon$$29)) {
    return mkEquals(mkRecdEquality);
  } else {
    return (0, _Types.L)();
  }
}

function TypeDefinitelyHasEquality(g$$84, ty$$36) {
  if ((0, _TastOps.isAppTy)(g$$84, ty$$36) ? (0, _TastOps.HasFSharpAttribute)(g$$84, (0, _TcGlobals.TcGlobals$$get_attrib_NoEqualityAttribute)(g$$84), (0, _tast.EntityRef$$get_Attribs)((0, _TastOps.tcrefOfAppTy)(g$$84, ty$$36))) : false) {
    return false;
  } else if ((0, _TastOps.isTyparTy)(g$$84, ty$$36) ? (0, _List.exists)(function predicate$$1(_arg1$$6) {
    if (_arg1$$6.tag === 10) {
      return true;
    } else {
      return false;
    }
  }, (0, _tast.Typar$$get_Constraints)((0, _TastOps.destTyparTy)(g$$84, ty$$36))) : false) {
    return true;
  } else {
    const activePatternResult39369 = (0, _TastOps.$007CSpecialEquatableHeadType$007C_$007C)(g$$84, ty$$36);

    if (activePatternResult39369 != null) {
      const tinst$$13 = activePatternResult39369;
      return (0, _List.forAll)(function predicate$$2(arg10$0040$$1) {
        return TypeDefinitelyHasEquality(g$$84, arg10$0040$$1);
      }, tinst$$13);
    } else {
      if ((0, _TastOps.$007CSpecialNotEquatableHeadType$007C_$007C)(g$$84, ty$$36) != null) {
        return false;
      } else {
        if ((0, _TastOps.isAppTy)(g$$84, ty$$36)) {
          const patternInput$$89 = (0, _TastOps.destAppTy)(g$$84, ty$$36);

          if (!(TyconIsCandidateForAugmentationWithEquals(g$$84, (0, _tast.EntityRef$$get_Deref)(patternInput$$89[0])) ? (0, _tast.EntityRef$$get_GeneratedHashAndEqualsWithComparerValues)(patternInput$$89[0]) == null : false)) {
            return (0, _illib.List$$$lengthsEqAndForall2)(function p(ty$$37, tp) {
              if (!(0, _tast.Typar$$get_EqualityConditionalOn)(tp)) {
                return true;
              } else {
                return TypeDefinitelyHasEquality(g$$84, ty$$37);
              }
            }, patternInput$$89[1], (0, _tast.EntityRef$$get_TyparsNoRange)(patternInput$$89[0]));
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }
}