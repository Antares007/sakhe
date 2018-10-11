"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewCompGenTypar = NewCompGenTypar;
exports.anon_id = anon_id;
exports.NewAnonTypar = NewAnonTypar;
exports.NewNamedInferenceMeasureVar = NewNamedInferenceMeasureVar;
exports.NewInferenceMeasurePar = NewInferenceMeasurePar;
exports.NewErrorTypar = NewErrorTypar;
exports.NewErrorMeasureVar = NewErrorMeasureVar;
exports.NewInferenceType = NewInferenceType;
exports.NewErrorType = NewErrorType;
exports.NewErrorMeasure = NewErrorMeasure;
exports.NewByRefKindInferenceType = NewByRefKindInferenceType;
exports.NewInferenceTypes = NewInferenceTypes;
exports.FreshenAndFixupTypars = FreshenAndFixupTypars;
exports.FreshenTypeInst = FreshenTypeInst;
exports.FreshMethInst = FreshMethInst;
exports.FreshenTypars = FreshenTypars;
exports.FreshenMethInfo = FreshenMethInfo;
exports.GetPossibleOverloads = GetPossibleOverloads;
exports.ConstraintSolverState$$$New$$1E2891C6 = ConstraintSolverState$$$New$$1E2891C6;
exports.ConstraintSolverEnv$$get_InfoReader = ConstraintSolverEnv$$get_InfoReader;
exports.ConstraintSolverEnv$$get_g = ConstraintSolverEnv$$get_g;
exports.ConstraintSolverEnv$$get_amap = ConstraintSolverEnv$$get_amap;
exports.MakeConstraintSolverEnv = MakeConstraintSolverEnv;
exports.occursCheck = occursCheck;
exports.isNativeIntegerTy = isNativeIntegerTy;
exports.isSignedIntegerTy = isSignedIntegerTy;
exports.isUnsignedIntegerTy = isUnsignedIntegerTy;
exports.isIntegerOrIntegerEnumTy = isIntegerOrIntegerEnumTy;
exports.isIntegerTy = isIntegerTy;
exports.isStringTy = isStringTy;
exports.isCharTy = isCharTy;
exports.isBoolTy = isBoolTy;
exports.isFpTy = isFpTy;
exports.isDecimalTy = isDecimalTy;
exports.IsNonDecimalNumericOrIntegralEnumType = IsNonDecimalNumericOrIntegralEnumType;
exports.IsNumericOrIntegralEnumType = IsNumericOrIntegralEnumType;
exports.IsNonDecimalNumericType = IsNonDecimalNumericType;
exports.IsNumericType = IsNumericType;
exports.IsRelationalType = IsRelationalType;
exports.GetMeasureOfType = GetMeasureOfType;
exports.Trace$$$New = Trace$$$New;
exports.Trace$$Undo = Trace$$Undo;
exports.Trace$$Push = Trace$$Push;
exports.OptionalTrace$$get_HasTrace = OptionalTrace$$get_HasTrace;
exports.OptionalTrace$$Exec = OptionalTrace$$Exec;
exports.OptionalTrace$$AddFromReplay$$74A155B9 = OptionalTrace$$AddFromReplay$$74A155B9;
exports.OptionalTrace$$CollectThenUndoOrCommit = OptionalTrace$$CollectThenUndoOrCommit;
exports.CollectThenUndo = CollectThenUndo;
exports.FilterEachThenUndo = FilterEachThenUndo;
exports.ShowAccessDomain = ShowAccessDomain;
exports.PreferUnifyTypar = PreferUnifyTypar;
exports.FindPreferredTypar = FindPreferredTypar;
exports.SubstMeasure = SubstMeasure;
exports.TransactStaticReq = TransactStaticReq;
exports.SolveTypStaticReqTypar = SolveTypStaticReqTypar;
exports.SolveTypStaticReq = SolveTypStaticReq;
exports.TransactDynamicReq = TransactDynamicReq;
exports.SolveTypDynamicReq = SolveTypDynamicReq;
exports.TransactIsCompatFlex = TransactIsCompatFlex;
exports.SolveTypIsCompatFlex = SolveTypIsCompatFlex;
exports.SubstMeasureWarnIfRigid = SubstMeasureWarnIfRigid;
exports.UnifyMeasureWithOne = UnifyMeasureWithOne;
exports.UnifyMeasures = UnifyMeasures;
exports.SimplifyMeasure = SimplifyMeasure;
exports.SimplifyMeasuresInType = SimplifyMeasuresInType;
exports.SimplifyMeasuresInTypes = SimplifyMeasuresInTypes;
exports.SimplifyMeasuresInConstraint = SimplifyMeasuresInConstraint;
exports.SimplifyMeasuresInConstraints = SimplifyMeasuresInConstraints;
exports.GetMeasureVarGcdInType = GetMeasureVarGcdInType;
exports.GetMeasureVarGcdInTypes = GetMeasureVarGcdInTypes;
exports.NormalizeExponentsInTypeScheme = NormalizeExponentsInTypeScheme;
exports.SimplifyMeasuresInTypeScheme = SimplifyMeasuresInTypeScheme;
exports.freshMeasure = freshMeasure;
exports.CheckWarnIfRigid = CheckWarnIfRigid;
exports.SolveTyparEqualsType = SolveTyparEqualsType;
exports.solveTypMeetsTyparConstraints = solveTypMeetsTyparConstraints;
exports.SolveTypeEqualsType = SolveTypeEqualsType;
exports.SolveTypeEqualsTypeKeepAbbrevs = SolveTypeEqualsTypeKeepAbbrevs;
exports.SolveTypeEqualsTypeEqns = SolveTypeEqualsTypeEqns;
exports.SolveFunTypeEqn = SolveFunTypeEqn;
exports.SolveTypeSubsumesType = SolveTypeSubsumesType;
exports.SolveTypeSubsumesTypeKeepAbbrevs = SolveTypeSubsumesTypeKeepAbbrevs;
exports.SolveTyparSubtypeOfType = SolveTyparSubtypeOfType;
exports.DepthCheck = DepthCheck;
exports.SolveDimensionlessNumericType = SolveDimensionlessNumericType;
exports.SolveMemberConstraint = SolveMemberConstraint;
exports.RecordMemberConstraintSolution = RecordMemberConstraintSolution;
exports.MemberConstraintSolutionOfMethInfo = MemberConstraintSolutionOfMethInfo;
exports.MemberConstraintSolutionOfRecdFieldInfo = MemberConstraintSolutionOfRecdFieldInfo;
exports.TransactMemberConstraintSolution = TransactMemberConstraintSolution;
exports.GetRelevantMethodsForTrait = GetRelevantMethodsForTrait;
exports.GetSupportOfMemberConstraint = GetSupportOfMemberConstraint;
exports.GetFreeTyparsOfMemberConstraint = GetFreeTyparsOfMemberConstraint;
exports.SolveRelevantMemberConstraints = SolveRelevantMemberConstraints;
exports.SolveRelevantMemberConstraintsForTypar = SolveRelevantMemberConstraintsForTypar;
exports.CanonicalizeRelevantMemberConstraints = CanonicalizeRelevantMemberConstraints;
exports.AddMemberConstraint = AddMemberConstraint;
exports.AddConstraint = AddConstraint;
exports.SolveTypeSupportsNull = SolveTypeSupportsNull;
exports.SolveTypeSupportsComparison = SolveTypeSupportsComparison;
exports.SolveTypeSupportsEquality = SolveTypeSupportsEquality;
exports.SolveTypeIsEnum = SolveTypeIsEnum;
exports.SolveTypeIsDelegate = SolveTypeIsDelegate;
exports.SolveTypeIsNonNullableValueType = SolveTypeIsNonNullableValueType;
exports.SolveTypeIsUnmanaged = SolveTypeIsUnmanaged;
exports.SolveTypeChoice = SolveTypeChoice;
exports.SolveTypeIsReferenceType = SolveTypeIsReferenceType;
exports.SolveTypeRequiresDefaultConstructor = SolveTypeRequiresDefaultConstructor;
exports.CanMemberSigsMatchUpToCheck = CanMemberSigsMatchUpToCheck;
exports.ArgsMustSubsumeOrConvert = ArgsMustSubsumeOrConvert;
exports.MustUnify = MustUnify;
exports.MustUnifyInsideUndo = MustUnifyInsideUndo;
exports.ArgsMustSubsumeOrConvertInsideUndo = ArgsMustSubsumeOrConvertInsideUndo;
exports.TypesMustSubsumeOrConvertInsideUndo = TypesMustSubsumeOrConvertInsideUndo;
exports.ArgsEquivInsideUndo = ArgsEquivInsideUndo;
exports.ReportNoCandidatesError = ReportNoCandidatesError;
exports.ReportNoCandidatesErrorExpr = ReportNoCandidatesErrorExpr;
exports.ReportNoCandidatesErrorSynExpr = ReportNoCandidatesErrorSynExpr;
exports.ResolveOverloading = ResolveOverloading;
exports.UnifyUniqueOverloading = UnifyUniqueOverloading;
exports.EliminateConstraintsForGeneralizedTypars = EliminateConstraintsForGeneralizedTypars;
exports.AddCxTypeEqualsType = AddCxTypeEqualsType;
exports.UndoIfFailed = UndoIfFailed;
exports.AddCxTypeEqualsTypeUndoIfFailed = AddCxTypeEqualsTypeUndoIfFailed;
exports.AddCxTypeEqualsTypeMatchingOnlyUndoIfFailed = AddCxTypeEqualsTypeMatchingOnlyUndoIfFailed;
exports.AddCxTypeMustSubsumeTypeUndoIfFailed = AddCxTypeMustSubsumeTypeUndoIfFailed;
exports.AddCxTypeMustSubsumeTypeMatchingOnlyUndoIfFailed = AddCxTypeMustSubsumeTypeMatchingOnlyUndoIfFailed;
exports.AddCxTypeMustSubsumeType = AddCxTypeMustSubsumeType;
exports.AddCxMethodConstraint = AddCxMethodConstraint;
exports.AddCxTypeMustSupportNull = AddCxTypeMustSupportNull;
exports.AddCxTypeMustSupportComparison = AddCxTypeMustSupportComparison;
exports.AddCxTypeMustSupportEquality = AddCxTypeMustSupportEquality;
exports.AddCxTypeMustSupportDefaultCtor = AddCxTypeMustSupportDefaultCtor;
exports.AddCxTypeIsReferenceType = AddCxTypeIsReferenceType;
exports.AddCxTypeIsValueType = AddCxTypeIsValueType;
exports.AddCxTypeIsUnmanaged = AddCxTypeIsUnmanaged;
exports.AddCxTypeIsEnum = AddCxTypeIsEnum;
exports.AddCxTypeIsDelegate = AddCxTypeIsDelegate;
exports.CodegenWitnessThatTypeSupportsTraitConstraint = CodegenWitnessThatTypeSupportsTraitConstraint;
exports.ChooseTyparSolutionAndSolve = ChooseTyparSolutionAndSolve;
exports.CheckDeclaredTypars = CheckDeclaredTypars;
exports.IsApplicableMethApprox = IsApplicableMethApprox;
exports.localAbortD = exports.LocallyAbortOperationThatLosesAbbrevs = exports.LocallyAbortOperationThatFailsToResolveOverload = exports.NonRigidTypar = exports.OptionalTrace = exports.Trace = exports.BakedInTraitConstraintNames = exports.TraitConstraintSolution = exports.ConstraintSolverEnv = exports.ConstraintSolverState = exports.UnresolvedConversionOperator = exports.UnresolvedOverloading = exports.PossibleOverload = exports.ErrorFromAddingConstraint = exports.ErrorsFromAddingSubsumptionConstraint = exports.ErrorFromAddingTypeEquation = exports.ErrorFromApplyingDefault = exports.ConstraintSolverRelatedInformation = exports.ConstraintSolverError = exports.ConstraintSolverMissingConstraint = exports.ConstraintSolverTypesNotInSubsumptionRelation = exports.ConstraintSolverTypesNotInEqualityRelation = exports.ConstraintSolverInfiniteTypes = exports.ConstraintSolverTupleDiffLengths = exports.ContextInfo = exports.compgenId = void 0;

var _range = require("./range");

var _tast = require("./tast");

var _ast = require("./ast");

var _Types = require("../fable-core.2.0.3/Types");

var _TcGlobals = require("./TcGlobals");

var _List = require("../fable-core.2.0.3/List");

var _Util = require("../fable-core.2.0.3/Util");

var _infos = require("./infos");

var _MethodCalls = require("./MethodCalls");

var _NicePrint = require("./NicePrint");

var _FSharp = require("../fable-core.2.0.3/FSharp.Collections");

var _HashMultiMap = require("../utils/HashMultiMap");

var _TastOps = require("./TastOps");

var _Set = require("../fable-core.2.0.3/Set");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _rational = require("./rational");

var _lib = require("./lib");

var _TypeRelations = require("./TypeRelations");

var _illib = require("../absil/illib");

var _String = require("../fable-core.2.0.3/String");

var _AccessibilityLogic = require("./AccessibilityLogic");

var _InfoReader = require("./InfoReader");

var _PrettyNaming = require("./PrettyNaming");

var _AttributeChecking = require("./AttributeChecking");

var _il = require("../absil/il");

var _Option = require("../fable-core.2.0.3/Option");

var _AugmentWithHashCompare = require("./AugmentWithHashCompare");

var _Array = require("../fable-core.2.0.3/Array");

var _Long = require("../fable-core.2.0.3/Long");

var _import = require("./import");

const compgenId = (0, _ast.mkSynId)(_range.range0, _tast.unassignedTyparName);
exports.compgenId = compgenId;

function NewCompGenTypar(kind, rigid, staticReq, dynamicReq, error) {
  return (0, _tast.NewTypar)(kind, rigid, new _ast.SynTypar(0, "Typar", compgenId, staticReq, true), error, dynamicReq, (0, _Types.L)(), false, false);
}

function anon_id(m) {
  return (0, _ast.mkSynId)(m, _tast.unassignedTyparName);
}

function NewAnonTypar(kind$$1, m$$1, rigid$$1, var$, dyn) {
  return (0, _tast.NewTypar)(kind$$1, rigid$$1, new _ast.SynTypar(0, "Typar", anon_id(m$$1), var$, true), false, dyn, (0, _Types.L)(), false, false);
}

function NewNamedInferenceMeasureVar(_m, rigid$$2, var$$$1, id) {
  return (0, _tast.NewTypar)(new _tast.TyparKind(1, "Measure"), rigid$$2, new _ast.SynTypar(0, "Typar", id, var$$$1, false), false, new _tast.TyparDynamicReq(0, "No"), (0, _Types.L)(), false, false);
}

function NewInferenceMeasurePar() {
  return NewCompGenTypar(new _tast.TyparKind(1, "Measure"), new _tast.TyparRigidity(3, "Flexible"), new _ast.TyparStaticReq(0, "NoStaticReq"), new _tast.TyparDynamicReq(0, "No"), false);
}

function NewErrorTypar() {
  return NewCompGenTypar(new _tast.TyparKind(0, "Type"), new _tast.TyparRigidity(3, "Flexible"), new _ast.TyparStaticReq(0, "NoStaticReq"), new _tast.TyparDynamicReq(0, "No"), true);
}

function NewErrorMeasureVar() {
  return NewCompGenTypar(new _tast.TyparKind(1, "Measure"), new _tast.TyparRigidity(3, "Flexible"), new _ast.TyparStaticReq(0, "NoStaticReq"), new _tast.TyparDynamicReq(0, "No"), true);
}

function NewInferenceType() {
  return (0, _tast.mkTyparTy)((0, _tast.NewTypar)(new _tast.TyparKind(0, "Type"), new _tast.TyparRigidity(3, "Flexible"), new _ast.SynTypar(0, "Typar", compgenId, new _ast.TyparStaticReq(0, "NoStaticReq"), true), false, new _tast.TyparDynamicReq(0, "No"), (0, _Types.L)(), false, false));
}

function NewErrorType() {
  return (0, _tast.mkTyparTy)(NewErrorTypar());
}

function NewErrorMeasure() {
  return new _tast.Measure(0, "Var", NewErrorMeasureVar());
}

function NewByRefKindInferenceType(g, m$$2) {
  const tp = (0, _tast.NewTypar)(new _tast.TyparKind(0, "Type"), new _tast.TyparRigidity(3, "Flexible"), new _ast.SynTypar(0, "Typar", compgenId, new _ast.TyparStaticReq(1, "HeadTypeStaticReq"), true), false, new _tast.TyparDynamicReq(0, "No"), (0, _Types.L)(), false, false);

  if ((0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_byrefkind_InOut_tcr)(g))) {
    (0, _tast.Typar$$SetConstraints$$Z10399A1)(tp, (0, _Types.L)(new _tast.TyparConstraint(1, "DefaultsTo", 10, new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_byrefkind_InOut_tcr)(g), (0, _Types.L)()), m$$2), (0, _Types.L)()));
  }

  return (0, _tast.mkTyparTy)(tp);
}

function NewInferenceTypes(l) {
  return (0, _List.map)(function mapping(_arg1) {
    return NewInferenceType();
  }, l);
}

function FreshenAndFixupTypars(m$$3, rigid$$3, fctps, tinst, tpsorig) {
  const copy_tyvar = function copy_tyvar(tp$$1) {
    return NewCompGenTypar((0, _tast.Typar$$get_Kind)(tp$$1), rigid$$3, (0, _tast.Typar$$get_StaticReq)(tp$$1), (0, _Util.equals)(rigid$$3, new _tast.TyparRigidity(0, "Rigid")) ? new _tast.TyparDynamicReq(1, "Yes") : new _tast.TyparDynamicReq(0, "No"), false);
  };

  const tps = (0, _List.map)(copy_tyvar, tpsorig);
  const patternInput = (0, _infos.FixupNewTypars)(m$$3, fctps, tinst, tpsorig, tps);
  return [tps, patternInput[0], patternInput[1]];
}

function FreshenTypeInst(m$$4, tpsorig$$1) {
  return FreshenAndFixupTypars(m$$4, new _tast.TyparRigidity(3, "Flexible"), (0, _Types.L)(), (0, _Types.L)(), tpsorig$$1);
}

function FreshMethInst(m$$5, fctps$$1, tinst$$2, tpsorig$$2) {
  return FreshenAndFixupTypars(m$$5, new _tast.TyparRigidity(3, "Flexible"), fctps$$1, tinst$$2, tpsorig$$2);
}

function FreshenTypars(m$$6, tpsorig$$3) {
  if (tpsorig$$3.tail == null) {
    return (0, _Types.L)();
  } else {
    const patternInput$$1 = FreshenTypeInst(m$$6, tpsorig$$3);
    return patternInput$$1[2];
  }
}

function FreshenMethInfo(m$$7, minfo) {
  const patternInput$$2 = FreshMethInst(m$$7, (0, _infos.MethInfo$$GetFormalTyparsOfDeclaringType$$4DB9192C)(minfo, m$$7), (0, _infos.MethInfo$$get_DeclaringTypeInst)(minfo), (0, _infos.MethInfo$$get_FormalMethodTypars)(minfo));
  return patternInput$$2[2];
}

const ContextInfo = (0, _Types.declare)(function ContextInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ContextInfo = ContextInfo;
const ConstraintSolverTupleDiffLengths = (0, _Types.declare)(function ConstraintSolverTupleDiffLengths(arg1, arg2, arg3, arg4, arg5) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
  this.Data4 = arg5;
}, _Types.FSharpException);
exports.ConstraintSolverTupleDiffLengths = ConstraintSolverTupleDiffLengths;
const ConstraintSolverInfiniteTypes = (0, _Types.declare)(function ConstraintSolverInfiniteTypes(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
  this.Data4 = arg5;
  this.Data5 = arg6;
}, _Types.FSharpException);
exports.ConstraintSolverInfiniteTypes = ConstraintSolverInfiniteTypes;
const ConstraintSolverTypesNotInEqualityRelation = (0, _Types.declare)(function ConstraintSolverTypesNotInEqualityRelation(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
  this.Data4 = arg5;
  this.Data5 = arg6;
}, _Types.FSharpException);
exports.ConstraintSolverTypesNotInEqualityRelation = ConstraintSolverTypesNotInEqualityRelation;
const ConstraintSolverTypesNotInSubsumptionRelation = (0, _Types.declare)(function ConstraintSolverTypesNotInSubsumptionRelation(arg1, arg2, arg3, arg4, arg5) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
  this.Data4 = arg5;
}, _Types.FSharpException);
exports.ConstraintSolverTypesNotInSubsumptionRelation = ConstraintSolverTypesNotInSubsumptionRelation;
const ConstraintSolverMissingConstraint = (0, _Types.declare)(function ConstraintSolverMissingConstraint(arg1, arg2, arg3, arg4, arg5) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
  this.Data4 = arg5;
}, _Types.FSharpException);
exports.ConstraintSolverMissingConstraint = ConstraintSolverMissingConstraint;
const ConstraintSolverError = (0, _Types.declare)(function ConstraintSolverError(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.ConstraintSolverError = ConstraintSolverError;
const ConstraintSolverRelatedInformation = (0, _Types.declare)(function ConstraintSolverRelatedInformation(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.ConstraintSolverRelatedInformation = ConstraintSolverRelatedInformation;
const ErrorFromApplyingDefault = (0, _Types.declare)(function ErrorFromApplyingDefault(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
  this.Data4 = arg5;
  this.Data5 = arg6;
}, _Types.FSharpException);
exports.ErrorFromApplyingDefault = ErrorFromApplyingDefault;
const ErrorFromAddingTypeEquation = (0, _Types.declare)(function ErrorFromAddingTypeEquation(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
  this.Data4 = arg5;
  this.Data5 = arg6;
}, _Types.FSharpException);
exports.ErrorFromAddingTypeEquation = ErrorFromAddingTypeEquation;
const ErrorsFromAddingSubsumptionConstraint = (0, _Types.declare)(function ErrorsFromAddingSubsumptionConstraint(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
  this.Data4 = arg5;
  this.Data5 = arg6;
  this.Data6 = arg7;
}, _Types.FSharpException);
exports.ErrorsFromAddingSubsumptionConstraint = ErrorsFromAddingSubsumptionConstraint;
const ErrorFromAddingConstraint = (0, _Types.declare)(function ErrorFromAddingConstraint(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.ErrorFromAddingConstraint = ErrorFromAddingConstraint;
const PossibleOverload = (0, _Types.declare)(function PossibleOverload(arg1, arg2, arg3, arg4) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
}, _Types.FSharpException);
exports.PossibleOverload = PossibleOverload;
const UnresolvedOverloading = (0, _Types.declare)(function UnresolvedOverloading(arg1, arg2, arg3, arg4) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
}, _Types.FSharpException);
exports.UnresolvedOverloading = UnresolvedOverloading;
const UnresolvedConversionOperator = (0, _Types.declare)(function UnresolvedConversionOperator(arg1, arg2, arg3, arg4) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
}, _Types.FSharpException);
exports.UnresolvedConversionOperator = UnresolvedConversionOperator;

function GetPossibleOverloads(amap, m$$8, denv, calledMethGroup) {
  return (0, _List.map)(function mapping$$1(tupledArg) {
    return new PossibleOverload(denv, (0, _NicePrint.stringOfMethInfo)(amap, m$$8, denv, (0, _MethodCalls.CalledMeth$00601$$get_Method)(tupledArg[0])), tupledArg[1], m$$8);
  }, calledMethGroup);
}

const ConstraintSolverState = (0, _Types.declare)(function ConstraintSolverState(arg1, arg2, arg3, arg4, arg5) {
  this.g = arg1;
  this.amap = arg2;
  this.InfoReader = arg3;
  this.TcVal = arg4;
  this.ExtraCxs = arg5;
}, _Types.Record);
exports.ConstraintSolverState = ConstraintSolverState;

function ConstraintSolverState$$$New$$1E2891C6(g$$1, amap$$1, infoReader, tcVal) {
  return new ConstraintSolverState(g$$1, amap$$1, infoReader, tcVal, (0, _HashMultiMap.HashMultiMap$00602$$$$002Ector$$Z1C047C8B)(10, (0, _FSharp.HashIdentity$$$Structural)()));
}

const ConstraintSolverEnv = (0, _Types.declare)(function ConstraintSolverEnv(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.SolverState = arg1;
  this.eContextInfo = arg2;
  this.MatchingOnly = arg3;
  this.m = arg4;
  this.EquivEnv = arg5;
  this.DisplayEnv = arg6;
}, _Types.Record);
exports.ConstraintSolverEnv = ConstraintSolverEnv;

function ConstraintSolverEnv$$get_InfoReader(csenv) {
  return csenv.SolverState.InfoReader;
}

function ConstraintSolverEnv$$get_g(csenv$$1) {
  return csenv$$1.SolverState.g;
}

function ConstraintSolverEnv$$get_amap(csenv$$2) {
  return csenv$$2.SolverState.amap;
}

function MakeConstraintSolverEnv(contextInfo, css, m$$9, denv$$1) {
  return new ConstraintSolverEnv(css, contextInfo, false, m$$9, (0, _TastOps.TypeEquivEnv$$$get_Empty)(), denv$$1);
}

function occursCheck(g$$3, un, ty) {
  occursCheck: while (true) {
    const matchValue = (0, _TastOps.stripTyEqns)(g$$3, ty);
    var $target$$17, l$$1;

    switch (matchValue.tag) {
      case 4:
        $target$$17 = 0;
        l$$1 = matchValue.fields[1];
        break;

      case 1:
        $target$$17 = 0;
        l$$1 = matchValue.fields[1];
        break;

      case 2:
        $target$$17 = 0;
        l$$1 = matchValue.fields[1];
        break;

      case 3:
        $target$$17 = 1;
        break;

      case 5:
        $target$$17 = 2;
        break;

      case 0:
        $target$$17 = 3;
        break;

      default:
        $target$$17 = 4;
    }

    switch ($target$$17) {
      case 0:
        {
          return (0, _List.exists)(function (ty$$1) {
            return occursCheck(g$$3, un, ty$$1);
          }, l$$1);
        }

      case 1:
        {
          const r = matchValue.fields[1];
          const d = matchValue.fields[0];

          if (occursCheck(g$$3, un, d)) {
            return true;
          } else {
            g$$3 = g$$3;
            un = un;
            ty = r;
            continue occursCheck;
          }
        }

      case 2:
        {
          const r$$1 = matchValue.fields[0];
          return (0, _tast.typarEq)(un, r$$1);
        }

      case 3:
        {
          const tau = matchValue.fields[1];
          g$$3 = g$$3;
          un = un;
          ty = tau;
          continue occursCheck;
        }

      case 4:
        {
          return false;
        }
    }
  }
}

function isNativeIntegerTy(g$$4, ty$$2) {
  isNativeIntegerTy: while (true) {
    if ((0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$4, (0, _TcGlobals.TcGlobals$$get_nativeint_ty)(g$$4), ty$$2) ? true : (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$4, (0, _TcGlobals.TcGlobals$$get_unativeint_ty)(g$$4), ty$$2)) {
      return true;
    } else if ((0, _TastOps.isEnumTy)(g$$4, ty$$2)) {
      const $var$$18 = g$$4;
      ty$$2 = (0, _TastOps.underlyingTypeOfEnumTy)(g$$4, ty$$2);
      g$$4 = $var$$18;
      continue isNativeIntegerTy;
    } else {
      return false;
    }
  }
}

function isSignedIntegerTy(g$$5, ty$$3) {
  if ((((0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$5, (0, _TcGlobals.TcGlobals$$get_sbyte_ty)(g$$5), ty$$3) ? true : (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$5, (0, _TcGlobals.TcGlobals$$get_int16_ty)(g$$5), ty$$3)) ? true : (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$5, (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$5), ty$$3)) ? true : (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$5, (0, _TcGlobals.TcGlobals$$get_nativeint_ty)(g$$5), ty$$3)) {
    return true;
  } else {
    return (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$5, (0, _TcGlobals.TcGlobals$$get_int64_ty)(g$$5), ty$$3);
  }
}

function isUnsignedIntegerTy(g$$6, ty$$4) {
  if ((((0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$6, (0, _TcGlobals.TcGlobals$$get_byte_ty)(g$$6), ty$$4) ? true : (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$6, (0, _TcGlobals.TcGlobals$$get_uint16_ty)(g$$6), ty$$4)) ? true : (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$6, (0, _TcGlobals.TcGlobals$$get_uint32_ty)(g$$6), ty$$4)) ? true : (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$6, (0, _TcGlobals.TcGlobals$$get_unativeint_ty)(g$$6), ty$$4)) {
    return true;
  } else {
    return (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$6, (0, _TcGlobals.TcGlobals$$get_uint64_ty)(g$$6), ty$$4);
  }
}

function isIntegerOrIntegerEnumTy(g$$7, ty$$5) {
  isIntegerOrIntegerEnumTy: while (true) {
    if (isSignedIntegerTy(g$$7, ty$$5) ? true : isUnsignedIntegerTy(g$$7, ty$$5)) {
      return true;
    } else if ((0, _TastOps.isEnumTy)(g$$7, ty$$5)) {
      const $var$$19 = g$$7;
      ty$$5 = (0, _TastOps.underlyingTypeOfEnumTy)(g$$7, ty$$5);
      g$$7 = $var$$19;
      continue isIntegerOrIntegerEnumTy;
    } else {
      return false;
    }
  }
}

function isIntegerTy(g$$8, ty$$6) {
  if (isSignedIntegerTy(g$$8, ty$$6)) {
    return true;
  } else {
    return isUnsignedIntegerTy(g$$8, ty$$6);
  }
}

function isStringTy(g$$9, ty$$7) {
  return (0, _TastOps.typeEquiv)(g$$9, (0, _TcGlobals.TcGlobals$$get_string_ty)(g$$9), ty$$7);
}

function isCharTy(g$$10, ty$$8) {
  return (0, _TastOps.typeEquiv)(g$$10, (0, _TcGlobals.TcGlobals$$get_char_ty)(g$$10), ty$$8);
}

function isBoolTy(g$$11, ty$$9) {
  return (0, _TastOps.typeEquiv)(g$$11, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$11), ty$$9);
}

function isFpTy(g$$12, ty$$10) {
  if ((0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$12, (0, _TcGlobals.TcGlobals$$get_float_ty)(g$$12), ty$$10)) {
    return true;
  } else {
    return (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$12, (0, _TcGlobals.TcGlobals$$get_float32_ty)(g$$12), ty$$10);
  }
}

function isDecimalTy(g$$13, ty$$11) {
  return (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$13, (0, _TcGlobals.TcGlobals$$get_decimal_ty)(g$$13), ty$$11);
}

function IsNonDecimalNumericOrIntegralEnumType(g$$14, ty$$12) {
  if (isIntegerOrIntegerEnumTy(g$$14, ty$$12)) {
    return true;
  } else {
    return isFpTy(g$$14, ty$$12);
  }
}

function IsNumericOrIntegralEnumType(g$$15, ty$$13) {
  if (IsNonDecimalNumericOrIntegralEnumType(g$$15, ty$$13)) {
    return true;
  } else {
    return isDecimalTy(g$$15, ty$$13);
  }
}

function IsNonDecimalNumericType(g$$16, ty$$14) {
  if (isIntegerTy(g$$16, ty$$14)) {
    return true;
  } else {
    return isFpTy(g$$16, ty$$14);
  }
}

function IsNumericType(g$$17, ty$$15) {
  if (IsNonDecimalNumericType(g$$17, ty$$15)) {
    return true;
  } else {
    return isDecimalTy(g$$17, ty$$15);
  }
}

function IsRelationalType(g$$18, ty$$16) {
  if ((IsNumericType(g$$18, ty$$16) ? true : isStringTy(g$$18, ty$$16)) ? true : isCharTy(g$$18, ty$$16)) {
    return true;
  } else {
    return isBoolTy(g$$18, ty$$16);
  }
}

function GetMeasureOfType(g$$19, ty$$17) {
  var ms;
  var $target$$20, tcref, tyarg;
  const activePatternResult43390 = (0, _TastOps.$007CAppTy$007C_$007C)(g$$19, ty$$17);

  if (activePatternResult43390 != null) {
    if (activePatternResult43390[1].tail != null) {
      if (activePatternResult43390[1].tail.tail == null) {
        $target$$20 = 0;
        tcref = activePatternResult43390[0];
        tyarg = activePatternResult43390[1].head;
      } else {
        $target$$20 = 1;
      }
    } else {
      $target$$20 = 1;
    }
  } else {
    $target$$20 = 1;
  }

  switch ($target$$20) {
    case 0:
      {
        const matchValue$$1 = (0, _TastOps.stripTyEqns)(g$$19, tyarg);
        var $target$$21, ms$$1;

        if (matchValue$$1.tag === 6) {
          if (ms = matchValue$$1.fields[0], !(0, _TastOps.measureEquiv)(g$$19, ms, new _tast.Measure(4, "One"))) {
            $target$$21 = 0;
            ms$$1 = matchValue$$1.fields[0];
          } else {
            $target$$21 = 1;
          }
        } else {
          $target$$21 = 1;
        }

        switch ($target$$21) {
          case 0:
            {
              return [tcref, ms$$1];
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

const TraitConstraintSolution = (0, _Types.declare)(function TraitConstraintSolution(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TraitConstraintSolution = TraitConstraintSolution;
const BakedInTraitConstraintNames = (0, _Set.ofSeq)(["op_Division", "op_Multiply", "op_Addition", "op_Equality", "op_Inequality", "op_GreaterThan", "op_LessThan", "op_LessThanOrEqual", "op_GreaterThanOrEqual", "op_Subtraction", "op_Modulus", "get_Zero", "get_One", "DivideByInt", "get_Item", "set_Item", "op_BitwiseAnd", "op_BitwiseOr", "op_ExclusiveOr", "op_LeftShift", "op_RightShift", "op_UnaryPlus", "op_UnaryNegation", "get_Sign", "op_LogicalNot", "op_OnesComplement", "Abs", "Sqrt", "Sin", "Cos", "Tan", "Sinh", "Cosh", "Tanh", "Atan", "Acos", "Asin", "Exp", "Ceiling", "Floor", "Round", "Log10", "Log", "Sqrt", "Truncate", "op_Explicit", "Pow", "Atan2"], {
  Compare: _Util.comparePrimitives
});
exports.BakedInTraitConstraintNames = BakedInTraitConstraintNames;
const Trace = (0, _Types.declare)(function Trace(arg1) {
  this.actions = arg1;
}, _Types.Record);
exports.Trace = Trace;

function Trace$$$New() {
  return new Trace((0, _Types.L)());
}

function Trace$$Undo(t) {
  (0, _List.iterate)(function (tupledArg$$1) {
    tupledArg$$1[1]();
  }, t.actions);
}

function Trace$$Push(t$$1, f, undo) {
  t$$1.actions = (0, _Types.L)([f, undo], t$$1.actions);
}

const OptionalTrace = (0, _Types.declare)(function OptionalTrace(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.OptionalTrace = OptionalTrace;

function OptionalTrace$$get_HasTrace(x) {
  if (x.tag === 1) {
    return true;
  } else {
    return false;
  }
}

function OptionalTrace$$Exec(t$$2, f$$1, undo$$1) {
  if (t$$2.tag === 0) {
    f$$1();
  } else {
    const trace = t$$2.fields[0];
    Trace$$Push(trace, f$$1, undo$$1);
    f$$1();
  }
}

function OptionalTrace$$AddFromReplay$$74A155B9(t$$3, source) {
  var trace$$1;
  (t$$3.tag === 0 ? function (list$$5) {
    (0, _List.iterate)(function action$$3(tupledArg$$3) {
      tupledArg$$3[0]();
    }, list$$5);
  } : (trace$$1 = t$$3.fields[0], function (list$$4) {
    (0, _List.iterate)(function action$$1(tupledArg$$2) {
      Trace$$Push(trace$$1, tupledArg$$2[0], tupledArg$$2[1]);
      tupledArg$$2[0]();
    }, list$$4);
  }))((0, _List.reverse)(source.actions));
}

function OptionalTrace$$CollectThenUndoOrCommit(t$$4, predicate, f$$2) {
  const newTrace = Trace$$$New();
  const res = f$$2(newTrace);
  const matchValue$$2 = [predicate(res), t$$4];

  if (matchValue$$2[0]) {
    if (matchValue$$2[1].tag === 0) {} else {
      const t$$5 = matchValue$$2[1].fields[0];
      t$$5.actions = (0, _List.append)(newTrace.actions, t$$5.actions);
    }
  } else {
    Trace$$Undo(newTrace);
  }

  return res;
}

function CollectThenUndo(f$$3) {
  const trace$$2 = Trace$$$New();
  const res$$1 = f$$3(trace$$2);
  Trace$$Undo(trace$$2);
  return res$$1;
}

function FilterEachThenUndo(f$$4, meths) {
  return (0, _List.choose)(function chooser(calledMeth) {
    const trace$$3 = Trace$$$New();
    const res$$2 = f$$4(trace$$3, calledMeth);
    Trace$$Undo(trace$$3);
    const matchValue$$3 = (0, _ErrorLogger.CheckNoErrorsAndGetWarnings)(res$$2);

    if (matchValue$$3 != null) {
      const warns = matchValue$$3;
      return [calledMeth, warns, trace$$3];
    } else {
      return null;
    }
  }, meths);
}

function ShowAccessDomain(ad) {
  switch (ad.tag) {
    case 0:
      {
        return "accessible";
      }

    case 2:
      {
        return "public, protected or internal";
      }

    case 3:
      {
        return "";
      }

    default:
      {
        return "public";
      }
  }
}

const NonRigidTypar = (0, _Types.declare)(function NonRigidTypar(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
  this.Data4 = arg5;
  this.Data5 = arg6;
}, _Types.FSharpException);
exports.NonRigidTypar = NonRigidTypar;
const LocallyAbortOperationThatFailsToResolveOverload = (0, _Types.declare)(function LocallyAbortOperationThatFailsToResolveOverload() {}, _Types.FSharpException);
exports.LocallyAbortOperationThatFailsToResolveOverload = LocallyAbortOperationThatFailsToResolveOverload;
const LocallyAbortOperationThatLosesAbbrevs = (0, _Types.declare)(function LocallyAbortOperationThatLosesAbbrevs() {}, _Types.FSharpException);
exports.LocallyAbortOperationThatLosesAbbrevs = LocallyAbortOperationThatLosesAbbrevs;
const localAbortD = (0, _ErrorLogger.ErrorD)(new LocallyAbortOperationThatLosesAbbrevs());
exports.localAbortD = localAbortD;

function PreferUnifyTypar(v1, v2) {
  const matchValue$$4 = [(0, _tast.Typar$$get_Rigidity)(v1), (0, _tast.Typar$$get_Rigidity)(v2)];

  if (matchValue$$4[0].tag === 1) {
    if (matchValue$$4[1].tag === 1) {
      return true;
    } else if (matchValue$$4[1].tag === 2) {
      return false;
    } else if (matchValue$$4[1].tag === 4) {
      return false;
    } else if (matchValue$$4[1].tag === 3) {
      return false;
    } else {
      return true;
    }
  } else if (matchValue$$4[0].tag === 2) {
    if (matchValue$$4[1].tag === 1) {
      return true;
    } else if (matchValue$$4[1].tag === 2) {
      return true;
    } else if (matchValue$$4[1].tag === 4) {
      return false;
    } else if (matchValue$$4[1].tag === 3) {
      return false;
    } else {
      return true;
    }
  } else if (matchValue$$4[0].tag === 4) {
    if (matchValue$$4[1].tag === 1) {
      return true;
    } else if (matchValue$$4[1].tag === 2) {
      return true;
    } else if (matchValue$$4[1].tag === 4) {
      return true;
    } else if (matchValue$$4[1].tag === 3) {
      return false;
    } else {
      return true;
    }
  } else if (matchValue$$4[0].tag === 3) {
    if (matchValue$$4[1].tag === 1) {
      return true;
    } else if (matchValue$$4[1].tag === 2) {
      return true;
    } else if (matchValue$$4[1].tag === 4) {
      return true;
    } else if (matchValue$$4[1].tag === 3) {
      const matchValue$$5 = [(0, _tast.Typar$$get_IsCompilerGenerated)(v1), (0, _tast.Typar$$get_IsCompilerGenerated)(v2)];
      var $target$$34;

      if (matchValue$$5[0]) {
        if (matchValue$$5[1]) {
          $target$$34 = 2;
        } else {
          $target$$34 = 0;
        }
      } else if (matchValue$$5[1]) {
        $target$$34 = 1;
      } else {
        $target$$34 = 2;
      }

      switch ($target$$34) {
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
            const matchValue$$6 = [(0, _tast.Typar$$get_IsFromError)(v1), (0, _tast.Typar$$get_IsFromError)(v2)];
            var $target$$35;

            if (matchValue$$6[0]) {
              if (matchValue$$6[1]) {
                $target$$35 = 1;
              } else {
                $target$$35 = 0;
              }
            } else {
              $target$$35 = 1;
            }

            switch ($target$$35) {
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
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function FindPreferredTypar(vs) {
  const find = function find(vs$$1) {
    if (vs$$1.tail != null) {
      const vs$$2 = vs$$1.tail;
      const v = vs$$1.head[0];
      const e$$1 = vs$$1.head[1];
      const matchValue$$7 = find(vs$$2);

      if (matchValue$$7.tail != null) {
        const vs$0027 = matchValue$$7.tail;
        const v$0027 = matchValue$$7.head[0];
        const e$0027 = matchValue$$7.head[1];

        if (PreferUnifyTypar(v, v$0027)) {
          return (0, _Types.L)([v, e$$1], vs$$2);
        } else {
          return (0, _Types.L)([v$0027, e$0027], (0, _Types.L)([v, e$$1], vs$0027));
        }
      } else {
        return (0, _Types.L)([v, e$$1], (0, _Types.L)());
      }
    } else {
      return vs$$1;
    }
  };

  return find(vs);
}

function SubstMeasure(r$$2, ms$$2) {
  if ((0, _Util.equals)((0, _tast.Typar$$get_Rigidity)(r$$2), new _tast.TyparRigidity(0, "Rigid"))) {
    (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("SubstMeasure: rigid", (0, _tast.Typar$$get_Range)(r$$2)));
  }

  if ((0, _Util.equals)((0, _tast.Typar$$get_Kind)(r$$2), new _tast.TyparKind(0, "Type"))) {
    (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("SubstMeasure: kind=type", (0, _tast.Typar$$get_Range)(r$$2)));
  }

  if (r$$2.typar_solution != null) {
    (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("already solved", (0, _tast.Typar$$get_Range)(r$$2)));
  } else {
    r$$2.typar_solution = new _tast.TType(6, "TType_measure", ms$$2);
  }
}

function TransactStaticReq(csenv$$3, trace$$4, tpr, req) {
  const m$$10 = csenv$$3.m;

  if ((0, _tast.TyparRigidity$$get_ErrorIfUnified)((0, _tast.Typar$$get_Rigidity)(tpr)) ? !(0, _Util.equals)((0, _tast.Typar$$get_StaticReq)(tpr), req) : false) {
    return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeCannotBeResolvedAtCompileTime$$Z721C83C5)((0, _tast.Typar$$get_Name)(tpr)), m$$10, m$$10));
  } else {
    const orig = (0, _tast.Typar$$get_StaticReq)(tpr);
    OptionalTrace$$Exec(trace$$4, function () {
      (0, _tast.Typar$$SetStaticReq$$2FFF90DA)(tpr, req);
    }, function () {
      (0, _tast.Typar$$SetStaticReq$$2FFF90DA)(tpr, orig);
    });
    return _ErrorLogger.CompleteD;
  }
}

function SolveTypStaticReqTypar(csenv$$4, trace$$5, req$$1, tpr$$1) {
  const orig$$1 = (0, _tast.Typar$$get_StaticReq)(tpr$$1);
  const req2 = (0, _TastOps.JoinTyparStaticReq)(req$$1, orig$$1);

  if (!(0, _Util.equals)(orig$$1, req2)) {
    return TransactStaticReq(csenv$$4, trace$$5, tpr$$1, req2);
  } else {
    return _ErrorLogger.CompleteD;
  }
}

function SolveTypStaticReq(csenv$$5, trace$$6, req$$2, ty$$18) {
  if (req$$2.tag === 1) {
    const matchValue$$9 = (0, _tast.stripTyparEqns)(ty$$18);

    if (matchValue$$9.tag === 6) {
      const ms$$3 = matchValue$$9.fields[0];
      const vs$$3 = (0, _TastOps.ListMeasureVarOccsWithNonZeroExponents)(ms$$3);
      return (0, _ErrorLogger.IterateD)(function (tupledArg$$4) {
        return SolveTypStaticReqTypar(csenv$$5, trace$$6, req$$2, tupledArg$$4[0]);
      }, vs$$3);
    } else {
      const matchValue$$10 = (0, _TastOps.tryAnyParTy)(ConstraintSolverEnv$$get_g(csenv$$5), ty$$18);

      if (matchValue$$10 == null) {
        return _ErrorLogger.CompleteD;
      } else {
        const tpr$$3 = matchValue$$10;
        return SolveTypStaticReqTypar(csenv$$5, trace$$6, req$$2, tpr$$3);
      }
    }
  } else {
    return _ErrorLogger.CompleteD;
  }
}

function TransactDynamicReq(trace$$7, tpr$$4, req$$3) {
  const orig$$2 = (0, _tast.Typar$$get_DynamicReq)(tpr$$4);
  OptionalTrace$$Exec(trace$$7, function () {
    (0, _tast.Typar$$SetDynamicReq$$41762FA3)(tpr$$4, req$$3);
  }, function () {
    (0, _tast.Typar$$SetDynamicReq$$41762FA3)(tpr$$4, orig$$2);
  });
  return _ErrorLogger.CompleteD;
}

function SolveTypDynamicReq(csenv$$6, trace$$8, req$$4, ty$$19) {
  var tpr$$5;

  if (req$$4.tag === 1) {
    const matchValue$$11 = (0, _TastOps.tryAnyParTy)(ConstraintSolverEnv$$get_g(csenv$$6), ty$$19);
    var $target$$36, tpr$$6;

    if (matchValue$$11 != null) {
      if (tpr$$5 = matchValue$$11, !(0, _Util.equals)((0, _tast.Typar$$get_DynamicReq)(tpr$$5), new _tast.TyparDynamicReq(1, "Yes"))) {
        $target$$36 = 0;
        tpr$$6 = matchValue$$11;
      } else {
        $target$$36 = 1;
      }
    } else {
      $target$$36 = 1;
    }

    switch ($target$$36) {
      case 0:
        {
          return TransactDynamicReq(trace$$8, tpr$$6, new _tast.TyparDynamicReq(1, "Yes"));
        }

      case 1:
        {
          return _ErrorLogger.CompleteD;
        }
    }
  } else {
    return _ErrorLogger.CompleteD;
  }
}

function TransactIsCompatFlex(trace$$9, tpr$$7, req$$5) {
  const orig$$3 = (0, _tast.Typar$$get_IsCompatFlex)(tpr$$7);
  OptionalTrace$$Exec(trace$$9, function () {
    (0, _tast.Typar$$SetIsCompatFlex$$Z1FBCCD16)(tpr$$7, req$$5);
  }, function () {
    (0, _tast.Typar$$SetIsCompatFlex$$Z1FBCCD16)(tpr$$7, orig$$3);
  });
  return _ErrorLogger.CompleteD;
}

function SolveTypIsCompatFlex(csenv$$7, trace$$10, req$$6, ty$$20) {
  var tpr$$8;

  if (req$$6) {
    const matchValue$$12 = (0, _TastOps.tryAnyParTy)(ConstraintSolverEnv$$get_g(csenv$$7), ty$$20);
    var $target$$37, tpr$$9;

    if (matchValue$$12 != null) {
      if (tpr$$8 = matchValue$$12, !(0, _tast.Typar$$get_IsCompatFlex)(tpr$$8)) {
        $target$$37 = 0;
        tpr$$9 = matchValue$$12;
      } else {
        $target$$37 = 1;
      }
    } else {
      $target$$37 = 1;
    }

    switch ($target$$37) {
      case 0:
        {
          return TransactIsCompatFlex(trace$$10, tpr$$9, req$$6);
        }

      case 1:
        {
          return _ErrorLogger.CompleteD;
        }
    }
  } else {
    return _ErrorLogger.CompleteD;
  }
}

function SubstMeasureWarnIfRigid(csenv$$8, trace$$11, v$$1, ms$$4) {
  if ((0, _tast.TyparRigidity$$get_WarnIfUnified)((0, _tast.Typar$$get_Rigidity)(v$$1)) ? !(0, _TastOps.isAnyParTy)(ConstraintSolverEnv$$get_g(csenv$$8), new _tast.TType(6, "TType_measure", ms$$4)) : false) {
    const tpnmOpt = (0, _tast.Typar$$get_IsCompilerGenerated)(v$$1) ? null : (0, _tast.Typar$$get_Name)(v$$1);
    return (0, _ErrorLogger.op_PlusPlus)(SolveTypStaticReq(csenv$$8, trace$$11, (0, _tast.Typar$$get_StaticReq)(v$$1), new _tast.TType(6, "TType_measure", ms$$4)), function () {
      SubstMeasure(v$$1, ms$$4);
      return (0, _ErrorLogger.WarnD)(new NonRigidTypar(csenv$$8.DisplayEnv, tpnmOpt, (0, _tast.Typar$$get_Range)(v$$1), new _tast.TType(6, "TType_measure", new _tast.Measure(0, "Var", v$$1)), new _tast.TType(6, "TType_measure", ms$$4), csenv$$8.m));
    });
  } else {
    return (0, _ErrorLogger.op_PlusPlus)(SolveTypStaticReq(csenv$$8, trace$$11, (0, _tast.Typar$$get_StaticReq)(v$$1), new _tast.TType(6, "TType_measure", ms$$4)), function () {
      SubstMeasure(v$$1, ms$$4);
      return ((0, _Util.equals)((0, _tast.Typar$$get_Rigidity)(v$$1), new _tast.TyparRigidity(4, "Anon")) ? (0, _TastOps.measureEquiv)(ConstraintSolverEnv$$get_g(csenv$$8), ms$$4, new _tast.Measure(4, "One")) : false) ? (0, _ErrorLogger.WarnD)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csCodeLessGeneric)(), (0, _tast.Typar$$get_Range)(v$$1))) : _ErrorLogger.CompleteD;
    });
  }
}

function UnifyMeasureWithOne(csenv$$9, trace$$12, ms$$5) {
  const patternInput$$3 = (0, _List.partition)(function predicate$$1(tupledArg$$5) {
    return (0, _Util.equals)((0, _tast.Typar$$get_Rigidity)(tupledArg$$5[0]), new _tast.TyparRigidity(0, "Rigid"));
  }, (0, _TastOps.ListMeasureVarOccsWithNonZeroExponents)(ms$$5));
  const matchValue$$13 = FindPreferredTypar(patternInput$$3[1]);

  if (matchValue$$13.tail == null) {
    if ((0, _TastOps.measureEquiv)(ConstraintSolverEnv$$get_g(csenv$$9), ms$$5, new _tast.Measure(4, "One"))) {
      return _ErrorLogger.CompleteD;
    } else {
      return localAbortD;
    }
  } else {
    const vs$$4 = matchValue$$13.tail;
    const v$$3 = matchValue$$13.head[0];
    const e$$2 = matchValue$$13.head[1];
    const unexpandedCons = (0, _TastOps.ListMeasureConOccsWithNonZeroExponents)(ConstraintSolverEnv$$get_g(csenv$$9), false, ms$$5);
    const newms = (0, _TastOps.ProdMeasures)((0, _List.append)((0, _List.map)(function (tupledArg$$6) {
      return new _tast.Measure(5, "RationalPower", new _tast.Measure(1, "Con", tupledArg$$6[0]), (0, _rational.NegRational)((0, _rational.DivRational)(tupledArg$$6[1], e$$2)));
    }, unexpandedCons), (0, _List.map)(function (tupledArg$$7) {
      return new _tast.Measure(5, "RationalPower", new _tast.Measure(0, "Var", tupledArg$$7[0]), (0, _rational.NegRational)((0, _rational.DivRational)(tupledArg$$7[1], e$$2)));
    }, (0, _List.append)(vs$$4, patternInput$$3[0]))));
    return SubstMeasureWarnIfRigid(csenv$$9, trace$$12, v$$3, newms);
  }
}

function UnifyMeasures(csenv$$10, trace$$13, ms1, ms2) {
  return UnifyMeasureWithOne(csenv$$10, trace$$13, new _tast.Measure(2, "Prod", ms1, new _tast.Measure(3, "Inv", ms2)));
}

function SimplifyMeasure(g$$20, vars, ms$$6) {
  const simp = function simp(vars$$1) {
    simp: while (true) {
      const matchValue$$14 = FindPreferredTypar((0, _List.filter)(function (tupledArg$$8) {
        return (0, _rational.SignRational)(tupledArg$$8[1]) !== 0;
      }, (0, _List.map)(function (v$$5) {
        return [v$$5, (0, _TastOps.MeasureVarExponent)(v$$5, ms$$6)];
      }, vars$$1)));

      if (matchValue$$14.tail != null) {
        const vs$$5 = matchValue$$14.tail;
        const v$$6 = matchValue$$14.head[0];
        const e$$4 = matchValue$$14.head[1];
        const newvar = (0, _tast.Typar$$get_IsCompilerGenerated)(v$$6) ? NewAnonTypar(new _tast.TyparKind(1, "Measure"), (0, _tast.Typar$$get_Range)(v$$6), new _tast.TyparRigidity(3, "Flexible"), (0, _tast.Typar$$get_StaticReq)(v$$6), (0, _tast.Typar$$get_DynamicReq)(v$$6)) : NewNamedInferenceMeasureVar((0, _tast.Typar$$get_Range)(v$$6), new _tast.TyparRigidity(3, "Flexible"), (0, _tast.Typar$$get_StaticReq)(v$$6), (0, _tast.Typar$$get_Id)(v$$6));
        const remainingvars = (0, _lib.ListSet$$$remove)(_tast.typarEq, v$$6, vars$$1);
        const newvarExpr = (0, _rational.SignRational)(e$$4) < 0 ? new _tast.Measure(3, "Inv", new _tast.Measure(0, "Var", newvar)) : new _tast.Measure(0, "Var", newvar);
        const newms$$1 = (0, _TastOps.ProdMeasures)((0, _List.append)((0, _List.map)(function (tupledArg$$9) {
          return new _tast.Measure(5, "RationalPower", new _tast.Measure(1, "Con", tupledArg$$9[0]), (0, _rational.NegRational)((0, _rational.DivRational)(tupledArg$$9[1], e$$4)));
        }, (0, _TastOps.ListMeasureConOccsWithNonZeroExponents)(g$$20, false, ms$$6)), (0, _List.map)(function (tupledArg$$10) {
          return (0, _tast.typarEq)(v$$6, tupledArg$$10[0]) ? newvarExpr : new _tast.Measure(5, "RationalPower", new _tast.Measure(0, "Var", tupledArg$$10[0]), (0, _rational.NegRational)((0, _rational.DivRational)(tupledArg$$10[1], e$$4)));
        }, (0, _TastOps.ListMeasureVarOccsWithNonZeroExponents)(ms$$6))));
        SubstMeasure(v$$6, newms$$1);

        if (vs$$5.tail == null) {
          return [remainingvars, newvar];
        } else {
          vars$$1 = (0, _Types.L)(newvar, remainingvars);
          continue simp;
        }
      } else {
        return [vars$$1, null];
      }
    }
  };

  return simp(vars);
}

function SimplifyMeasuresInType(g$$21, resultFirst, _arg1_0, _arg1_1, ty$$21) {
  SimplifyMeasuresInType: while (true) {
    const _arg1$$5 = [_arg1_0, _arg1_1];
    const param = _arg1$$5;
    const generalized = param[1];
    const generalizable = param[0];
    const matchValue$$15 = (0, _tast.stripTyparEqns)(ty$$21);
    var $target$$38, l$$2;

    switch (matchValue$$15.tag) {
      case 1:
        $target$$38 = 0;
        l$$2 = matchValue$$15.fields[1];
        break;

      case 2:
        $target$$38 = 0;
        l$$2 = matchValue$$15.fields[1];
        break;

      case 3:
        $target$$38 = 1;
        break;

      case 5:
        $target$$38 = 2;
        break;

      case 0:
        $target$$38 = 3;
        break;

      case 6:
        $target$$38 = 4;
        break;

      default:
        $target$$38 = 0;
        l$$2 = matchValue$$15.fields[1];
    }

    switch ($target$$38) {
      case 0:
        {
          return SimplifyMeasuresInTypes(g$$21, param[0], param[1], l$$2);
        }

      case 1:
        {
          const r$$3 = matchValue$$15.fields[1];
          const d$$1 = matchValue$$15.fields[0];

          if (resultFirst) {
            return SimplifyMeasuresInTypes(g$$21, param[0], param[1], (0, _Types.L)(r$$3, (0, _Types.L)(d$$1, (0, _Types.L)())));
          } else {
            return SimplifyMeasuresInTypes(g$$21, param[0], param[1], (0, _Types.L)(d$$1, (0, _Types.L)(r$$3, (0, _Types.L)())));
          }
        }

      case 2:
        {
          return param;
        }

      case 3:
        {
          const tau$$1 = matchValue$$15.fields[1];
          g$$21 = g$$21;
          resultFirst = resultFirst;
          _arg1_0 = param[0];
          _arg1_1 = param[1];
          ty$$21 = tau$$1;
          continue SimplifyMeasuresInType;
        }

      case 4:
        {
          const unt = matchValue$$15.fields[0];
          const patternInput$$4 = SimplifyMeasure(g$$21, generalizable, unt);

          if (patternInput$$4[1] != null) {
            const v$$7 = patternInput$$4[1];
            return [patternInput$$4[0], (0, _Types.L)(v$$7, generalized)];
          } else {
            return [patternInput$$4[0], generalized];
          }
        }
    }
  }
}

function SimplifyMeasuresInTypes(g$$22, param_0, param_1, tys$$2) {
  SimplifyMeasuresInTypes: while (true) {
    const param$$1 = [param_0, param_1];

    if (tys$$2.tail != null) {
      const tys$$3 = tys$$2.tail;
      const ty$$22 = tys$$2.head;
      const param$0027 = SimplifyMeasuresInType(g$$22, false, param$$1[0], param$$1[1], ty$$22);
      g$$22 = g$$22;
      param_0 = param$0027[0];
      param_1 = param$0027[1];
      tys$$2 = tys$$3;
      continue SimplifyMeasuresInTypes;
    } else {
      return param$$1;
    }
  }
}

function SimplifyMeasuresInConstraint(g$$23, param_0$$1, param_1$$1, c$$2) {
  const param$$2 = [param_0$$1, param_1$$1];
  var $target$$39, ty$$23;

  switch (c$$2.tag) {
    case 1:
      $target$$39 = 0;
      ty$$23 = c$$2.fields[1];
      break;

    case 0:
      $target$$39 = 0;
      ty$$23 = c$$2.fields[0];
      break;

    case 6:
      $target$$39 = 1;
      break;

    case 11:
      $target$$39 = 2;
      break;

    default:
      $target$$39 = 3;
  }

  switch ($target$$39) {
    case 0:
      {
        return SimplifyMeasuresInType(g$$23, false, param$$2[0], param$$2[1], ty$$23);
      }

    case 1:
      {
        const tys$$4 = c$$2.fields[0];
        return SimplifyMeasuresInTypes(g$$23, param$$2[0], param$$2[1], tys$$4);
      }

    case 2:
      {
        const ty2 = c$$2.fields[1];
        const ty1 = c$$2.fields[0];
        return SimplifyMeasuresInTypes(g$$23, param$$2[0], param$$2[1], (0, _Types.L)(ty1, (0, _Types.L)(ty2, (0, _Types.L)())));
      }

    case 3:
      {
        return param$$2;
      }
  }
}

function SimplifyMeasuresInConstraints(g$$24, param_0$$2, param_1$$2, cs) {
  SimplifyMeasuresInConstraints: while (true) {
    const param$$3 = [param_0$$2, param_1$$2];

    if (cs.tail != null) {
      const cs$$1 = cs.tail;
      const c$$3 = cs.head;
      const param$0027$$1 = SimplifyMeasuresInConstraint(g$$24, param$$3[0], param$$3[1], c$$3);
      g$$24 = g$$24;
      param_0$$2 = param$0027$$1[0];
      param_1$$2 = param$0027$$1[1];
      cs = cs$$1;
      continue SimplifyMeasuresInConstraints;
    } else {
      return param$$3;
    }
  }
}

function GetMeasureVarGcdInType(v$$8, ty$$24) {
  GetMeasureVarGcdInType: while (true) {
    const matchValue$$16 = (0, _tast.stripTyparEqns)(ty$$24);
    var $target$$40, l$$3;

    switch (matchValue$$16.tag) {
      case 1:
        $target$$40 = 0;
        l$$3 = matchValue$$16.fields[1];
        break;

      case 2:
        $target$$40 = 0;
        l$$3 = matchValue$$16.fields[1];
        break;

      case 3:
        $target$$40 = 1;
        break;

      case 5:
        $target$$40 = 2;
        break;

      case 0:
        $target$$40 = 3;
        break;

      case 6:
        $target$$40 = 4;
        break;

      default:
        $target$$40 = 0;
        l$$3 = matchValue$$16.fields[1];
    }

    switch ($target$$40) {
      case 0:
        {
          return GetMeasureVarGcdInTypes(v$$8, l$$3);
        }

      case 1:
        {
          const r$$4 = matchValue$$16.fields[1];
          const d$$2 = matchValue$$16.fields[0];
          return (0, _rational.GcdRational)(GetMeasureVarGcdInType(v$$8, d$$2), GetMeasureVarGcdInType(v$$8, r$$4));
        }

      case 2:
        {
          return _rational.ZeroRational;
        }

      case 3:
        {
          const tau$$2 = matchValue$$16.fields[1];
          v$$8 = v$$8;
          ty$$24 = tau$$2;
          continue GetMeasureVarGcdInType;
        }

      case 4:
        {
          const unt$$1 = matchValue$$16.fields[0];
          return (0, _TastOps.MeasureVarExponent)(v$$8, unt$$1);
        }
    }
  }
}

function GetMeasureVarGcdInTypes(v$$9, tys$$6) {
  if (tys$$6.tail != null) {
    const tys$$7 = tys$$6.tail;
    const ty$$25 = tys$$6.head;
    return (0, _rational.GcdRational)(GetMeasureVarGcdInType(v$$9, ty$$25), GetMeasureVarGcdInTypes(v$$9, tys$$7));
  } else {
    return _rational.ZeroRational;
  }
}

function NormalizeExponentsInTypeScheme(uvars, ty$$26) {
  return (0, _List.map)(function mapping$$2(v$$10) {
    const expGcd = (0, _rational.AbsRational)(GetMeasureVarGcdInType(v$$10, ty$$26));

    if ((0, _Util.equals)(expGcd, _rational.OneRational) ? true : (0, _Util.equals)(expGcd, _rational.ZeroRational)) {
      return v$$10;
    } else {
      const v$0027$$2 = NewAnonTypar(new _tast.TyparKind(1, "Measure"), (0, _tast.Typar$$get_Range)(v$$10), new _tast.TyparRigidity(3, "Flexible"), (0, _tast.Typar$$get_StaticReq)(v$$10), (0, _tast.Typar$$get_DynamicReq)(v$$10));
      SubstMeasure(v$$10, new _tast.Measure(5, "RationalPower", new _tast.Measure(0, "Var", v$0027$$2), (0, _rational.DivRational)(_rational.OneRational, expGcd)));
      return v$0027$$2;
    }
  }, uvars);
}

function SimplifyMeasuresInTypeScheme(g$$25, resultFirst$$3, generalizable$$1, ty$$27, constraints) {
  const patternInput$$5 = (0, _List.partition)(function predicate$$2(v$$11) {
    if ((0, _Util.equals)((0, _tast.Typar$$get_Kind)(v$$11), new _tast.TyparKind(1, "Measure"))) {
      return !(0, _Util.equals)((0, _tast.Typar$$get_Rigidity)(v$$11), new _tast.TyparRigidity(0, "Rigid"));
    } else {
      return false;
    }
  }, generalizable$$1);

  if (patternInput$$5[0].tail != null) {
    let patternInput$$6;
    const tupledArg$$11 = SimplifyMeasuresInConstraints(g$$25, patternInput$$5[0], (0, _Types.L)(), constraints);
    patternInput$$6 = SimplifyMeasuresInType(g$$25, resultFirst$$3, tupledArg$$11[0], tupledArg$$11[1], ty$$27);
    const generalized$0027 = NormalizeExponentsInTypeScheme(patternInput$$6[1], ty$$27);
    return (0, _List.append)(patternInput$$5[1], (0, _List.reverse)(generalized$0027));
  } else {
    return generalizable$$1;
  }
}

function freshMeasure() {
  return new _tast.Measure(0, "Var", NewInferenceMeasurePar());
}

function CheckWarnIfRigid(csenv$$11, ty1$$1, r$$5, ty$$28) {
  const g$$26 = ConstraintSolverEnv$$get_g(csenv$$11);
  const denv$$2 = csenv$$11.DisplayEnv;

  if (!(0, _tast.TyparRigidity$$get_WarnIfUnified)((0, _tast.Typar$$get_Rigidity)(r$$5))) {
    return _ErrorLogger.CompleteD;
  } else {
    let needsWarning;
    const matchValue$$17 = (0, _TastOps.tryAnyParTy)(g$$26, ty$$28);

    if (matchValue$$17 != null) {
      const tp2 = matchValue$$17;
      needsWarning = !(0, _tast.Typar$$get_IsCompilerGenerated)(tp2) ? (0, _tast.Typar$$get_IsCompilerGenerated)(r$$5) ? true : (0, _tast.Typar$$get_DisplayName)(r$$5) !== (0, _tast.Typar$$get_DisplayName)(tp2) : false;
    } else {
      needsWarning = true;
    }

    if (needsWarning) {
      const tpnmOpt$$1 = (0, _tast.Typar$$get_IsCompilerGenerated)(r$$5) ? null : (0, _tast.Typar$$get_Name)(r$$5);
      return (0, _ErrorLogger.WarnD)(new NonRigidTypar(denv$$2, tpnmOpt$$1, (0, _tast.Typar$$get_Range)(r$$5), ty1$$1, ty$$28, csenv$$11.m));
    } else {
      return _ErrorLogger.CompleteD;
    }
  }
}

function SolveTyparEqualsType(csenv$$12, ndeep, m2, trace$$14, ty1$$2, ty$$29) {
  const m$$11 = csenv$$12.m;
  return (0, _ErrorLogger.op_PlusPlus)(DepthCheck(ndeep, m$$11), function () {
    var $target$$41, r$$6;

    if (ty1$$2.tag === 5) {
      $target$$41 = 0;
      r$$6 = ty1$$2.fields[0];
    } else if (ty1$$2.tag === 6) {
      if (ty1$$2.fields[0].tag === 0) {
        $target$$41 = 0;
        r$$6 = ty1$$2.fields[0].fields[0];
      } else {
        $target$$41 = 1;
      }
    } else {
      $target$$41 = 1;
    }

    switch ($target$$41) {
      case 0:
        {
          return (0, _TastOps.typeEquiv)(ConstraintSolverEnv$$get_g(csenv$$12), ty1$$2, ty$$29) ? _ErrorLogger.CompleteD : occursCheck(ConstraintSolverEnv$$get_g(csenv$$12), r$$6, ty$$29) ? (0, _ErrorLogger.ErrorD)(new ConstraintSolverInfiniteTypes(csenv$$12.eContextInfo, csenv$$12.DisplayEnv, ty1$$2, ty$$29, m$$11, m2)) : (0, _ErrorLogger.op_PlusPlus)(CheckWarnIfRigid(csenv$$12, ty1$$2, r$$6, ty$$29), function () {
            OptionalTrace$$Exec(trace$$14, function () {
              r$$6.typar_solution = ty$$29;
            }, function () {
              r$$6.typar_solution = null;
            });
            return (0, _tast.Typar$$get_IsFromError)(r$$6) ? _ErrorLogger.CompleteD : (0, _ErrorLogger.op_PlusPlus)((0, _HashMultiMap.HashMultiMap$00602$$ContainsKey$$2B595)(csenv$$12.SolverState.ExtraCxs, (0, _tast.Typar$$get_Stamp)(r$$6)) ? (0, _ErrorLogger.RepeatWhileD)(ndeep, function (ndeep$$1) {
              return SolveRelevantMemberConstraintsForTypar(csenv$$12, ndeep$$1, false, trace$$14, r$$6);
            }) : _ErrorLogger.CompleteD, function () {
              return solveTypMeetsTyparConstraints(csenv$$12, ndeep, m2, trace$$14, ty$$29, r$$6);
            });
          });
        }

      case 1:
        {
          throw new Error("SolveTyparEqualsType");
        }
    }
  });
}

function solveTypMeetsTyparConstraints(csenv$$13, ndeep$$2, m2$$1, trace$$15, ty$$30, r$$7) {
  const g$$27 = ConstraintSolverEnv$$get_g(csenv$$13);
  return (0, _ErrorLogger.op_PlusPlus)(SolveTypIsCompatFlex(csenv$$13, trace$$15, (0, _tast.Typar$$get_IsCompatFlex)(r$$7), ty$$30), function () {
    return (0, _ErrorLogger.op_PlusPlus)(SolveTypDynamicReq(csenv$$13, trace$$15, (0, _tast.Typar$$get_DynamicReq)(r$$7), ty$$30), function () {
      return (0, _ErrorLogger.op_PlusPlus)(SolveTypStaticReq(csenv$$13, trace$$15, (0, _tast.Typar$$get_StaticReq)(r$$7), ty$$30), function () {
        return (0, _ErrorLogger.IterateD)(function f$$5(_arg7) {
          switch (_arg7.tag) {
            case 2:
              {
                const m2$$2 = _arg7.fields[0];
                return SolveTypeSupportsNull(csenv$$13, ndeep$$2, m2$$2, trace$$15, ty$$30);
              }

            case 8:
              {
                const underlying = _arg7.fields[0];
                const m2$$3 = _arg7.fields[1];
                return SolveTypeIsEnum(csenv$$13, ndeep$$2, m2$$3, trace$$15, ty$$30, underlying);
              }

            case 9:
              {
                const m2$$4 = _arg7.fields[0];
                return SolveTypeSupportsComparison(csenv$$13, ndeep$$2, m2$$4, trace$$15, ty$$30);
              }

            case 10:
              {
                const m2$$5 = _arg7.fields[0];
                return SolveTypeSupportsEquality(csenv$$13, ndeep$$2, m2$$5, trace$$15, ty$$30);
              }

            case 11:
              {
                const m2$$6 = _arg7.fields[2];
                const bty = _arg7.fields[1];
                const aty = _arg7.fields[0];
                return SolveTypeIsDelegate(csenv$$13, ndeep$$2, m2$$6, trace$$15, ty$$30, aty, bty);
              }

            case 4:
              {
                const m2$$7 = _arg7.fields[0];
                return SolveTypeIsNonNullableValueType(csenv$$13, ndeep$$2, m2$$7, trace$$15, ty$$30);
              }

            case 12:
              {
                const m2$$8 = _arg7.fields[0];
                return SolveTypeIsUnmanaged(csenv$$13, ndeep$$2, m2$$8, trace$$15, ty$$30);
              }

            case 5:
              {
                const m2$$9 = _arg7.fields[0];
                return SolveTypeIsReferenceType(csenv$$13, ndeep$$2, m2$$9, trace$$15, ty$$30);
              }

            case 7:
              {
                const m2$$10 = _arg7.fields[0];
                return SolveTypeRequiresDefaultConstructor(csenv$$13, ndeep$$2, m2$$10, trace$$15, ty$$30);
              }

            case 6:
              {
                const tys$$8 = _arg7.fields[0];
                const m2$$11 = _arg7.fields[1];
                return SolveTypeChoice(csenv$$13, ndeep$$2, m2$$11, trace$$15, ty$$30, tys$$8);
              }

            case 0:
              {
                const ty2$$1 = _arg7.fields[0];
                const m2$$12 = _arg7.fields[1];
                return SolveTypeSubsumesTypeKeepAbbrevs(csenv$$13, ndeep$$2, m2$$12, trace$$15, null, ty2$$1, ty$$30);
              }

            case 3:
              {
                const traitInfo = _arg7.fields[0];
                const m2$$13 = _arg7.fields[1];
                return (0, _ErrorLogger.op_PlusPlus)(SolveMemberConstraint(csenv$$13, false, false, ndeep$$2, m2$$13, trace$$15, traitInfo), function (_arg2$$1) {
                  return _ErrorLogger.CompleteD;
                });
              }

            default:
              {
                const priority = _arg7.fields[0] | 0;
                const m$$12 = _arg7.fields[2];
                const dty = _arg7.fields[1];

                if ((0, _TastOps.typeEquiv)(g$$27, ty$$30, dty)) {
                  return _ErrorLogger.CompleteD;
                } else {
                  const matchValue$$18 = (0, _TastOps.tryDestTyparTy)(g$$27, ty$$30);

                  if (matchValue$$18 != null) {
                    const destTypar = matchValue$$18;
                    return AddConstraint(csenv$$13, ndeep$$2, m2$$1, trace$$15, destTypar, new _tast.TyparConstraint(1, "DefaultsTo", priority, dty, m$$12));
                  } else {
                    return _ErrorLogger.CompleteD;
                  }
                }
              }
          }
        }, (0, _tast.Typar$$get_Constraints)(r$$7));
      });
    });
  });
}

function SolveTypeEqualsType(csenv$$14, ndeep$$3, m2$$14, trace$$16, cxsln, ty1$$3, ty2$$2) {
  var traitSln, traitInfo$$1, uc2, uc1, l2$$2, l1$$2, tc2$$4, tc1, l2, l1, tc2$$2, ms$$9, tc2, ms$$7, r$$10, r$$8, tp2$$5, tp1$$4, tp2$$3, tp1$$2, tp2$$1, tp1, matchValue$$20, v$$12, v$$13;

  SolveTypeEqualsType: while (true) {
    const ndeep$$4 = ndeep$$3 + 1 | 0;
    const aenv = csenv$$14.EquivEnv;
    const g$$28 = ConstraintSolverEnv$$get_g(csenv$$14);
    var $target$$42, traitInfo$$2, traitSln$$1;

    if (cxsln != null) {
      if (traitSln = cxsln[1], (traitInfo$$1 = cxsln[0], (0, _tast.TraitConstraintInfo$$get_Solution)(traitInfo$$1) == null)) {
        $target$$42 = 0;
        traitInfo$$2 = cxsln[0];
        traitSln$$1 = cxsln[1];
      } else {
        $target$$42 = 1;
      }
    } else {
      $target$$42 = 1;
    }

    switch ($target$$42) {
      case 0:
        {
          TransactMemberConstraintSolution(traitInfo$$2, trace$$16, traitSln$$1);
          break;
        }
    }

    if (ty1$$3 === ty2$$2) {
      return _ErrorLogger.CompleteD;
    } else {
      const canShortcut = !OptionalTrace$$get_HasTrace(trace$$16);
      const sty1 = (0, _TastOps.stripTyEqnsA)(ConstraintSolverEnv$$get_g(csenv$$14), canShortcut, ty1$$3);
      const sty2 = (0, _TastOps.stripTyEqnsA)(ConstraintSolverEnv$$get_g(csenv$$14), canShortcut, ty2$$2);
      const matchValue$$19 = [sty1, sty2];
      var $target$$43, tp1$$1, tp2$$2;

      if (matchValue$$19[0].tag === 5) {
        if (matchValue$$19[1].tag === 5) {
          if (tp2$$1 = matchValue$$19[1].fields[0], (tp1 = matchValue$$19[0].fields[0], (0, _tast.typarEq)(tp1, tp2$$1) ? true : (matchValue$$20 = (0, _TastOps.TyparMap$00601$$TryFind$$ZB4A2630)(aenv.EquivTypars, tp1), matchValue$$20 != null ? (v$$12 = matchValue$$20, (0, _TastOps.typeEquiv)(g$$28, v$$12, ty2$$2)) ? (v$$13 = matchValue$$20, true) : false : false))) {
            $target$$43 = 0;
            tp1$$1 = matchValue$$19[0].fields[0];
            tp2$$2 = matchValue$$19[1].fields[0];
          } else {
            $target$$43 = 1;
          }
        } else {
          $target$$43 = 1;
        }
      } else {
        $target$$43 = 1;
      }

      switch ($target$$43) {
        case 0:
          {
            return _ErrorLogger.CompleteD;
          }

        case 1:
          {
            var $target$$44, tp1$$3, tp2$$4;

            if (matchValue$$19[0].tag === 5) {
              if (matchValue$$19[1].tag === 5) {
                if (tp2$$3 = matchValue$$19[1].fields[0], (tp1$$2 = matchValue$$19[0].fields[0], PreferUnifyTypar(tp1$$2, tp2$$3))) {
                  $target$$44 = 0;
                  tp1$$3 = matchValue$$19[0].fields[0];
                  tp2$$4 = matchValue$$19[1].fields[0];
                } else {
                  $target$$44 = 1;
                }
              } else {
                $target$$44 = 1;
              }
            } else {
              $target$$44 = 1;
            }

            switch ($target$$44) {
              case 0:
                {
                  return SolveTyparEqualsType(csenv$$14, ndeep$$4, m2$$14, trace$$16, sty1, ty2$$2);
                }

              case 1:
                {
                  var $target$$45, tp1$$5, tp2$$6;

                  if (matchValue$$19[0].tag === 5) {
                    if (matchValue$$19[1].tag === 5) {
                      if (tp2$$5 = matchValue$$19[1].fields[0], (tp1$$4 = matchValue$$19[0].fields[0], !csenv$$14.MatchingOnly ? PreferUnifyTypar(tp2$$5, tp1$$4) : false)) {
                        $target$$45 = 0;
                        tp1$$5 = matchValue$$19[0].fields[0];
                        tp2$$6 = matchValue$$19[1].fields[0];
                      } else {
                        $target$$45 = 1;
                      }
                    } else {
                      $target$$45 = 1;
                    }
                  } else {
                    $target$$45 = 1;
                  }

                  switch ($target$$45) {
                    case 0:
                      {
                        return SolveTyparEqualsType(csenv$$14, ndeep$$4, m2$$14, trace$$16, sty2, ty1$$3);
                      }

                    case 1:
                      {
                        var $target$$46, r$$9;

                        if (matchValue$$19[0].tag === 5) {
                          if (r$$8 = matchValue$$19[0].fields[0], !(0, _Util.equals)((0, _tast.Typar$$get_Rigidity)(r$$8), new _tast.TyparRigidity(0, "Rigid"))) {
                            $target$$46 = 0;
                            r$$9 = matchValue$$19[0].fields[0];
                          } else {
                            $target$$46 = 1;
                          }
                        } else {
                          $target$$46 = 1;
                        }

                        switch ($target$$46) {
                          case 0:
                            {
                              return SolveTyparEqualsType(csenv$$14, ndeep$$4, m2$$14, trace$$16, sty1, ty2$$2);
                            }

                          case 1:
                            {
                              var $target$$47, r$$11;

                              if (matchValue$$19[1].tag === 5) {
                                if (r$$10 = matchValue$$19[1].fields[0], !(0, _Util.equals)((0, _tast.Typar$$get_Rigidity)(r$$10), new _tast.TyparRigidity(0, "Rigid")) ? !csenv$$14.MatchingOnly : false) {
                                  $target$$47 = 0;
                                  r$$11 = matchValue$$19[1].fields[0];
                                } else {
                                  $target$$47 = 1;
                                }
                              } else {
                                $target$$47 = 1;
                              }

                              switch ($target$$47) {
                                case 0:
                                  {
                                    return SolveTyparEqualsType(csenv$$14, ndeep$$4, m2$$14, trace$$16, sty2, ty1$$3);
                                  }

                                case 1:
                                  {
                                    var $target$$48, ms$$8, tc2$$1;

                                    if (matchValue$$19[1].tag === 1) {
                                      if (matchValue$$19[1].fields[1].tail != null) {
                                        if (matchValue$$19[1].fields[1].tail.tail == null) {
                                          if (tc2 = matchValue$$19[1].fields[0], (ms$$7 = matchValue$$19[1].fields[1].head, (0, _tast.EntityRef$$get_IsMeasureableReprTycon)(tc2) ? (0, _TastOps.typeEquiv)(ConstraintSolverEnv$$get_g(csenv$$14), sty1, (0, _TastOps.reduceTyconRefMeasureableOrProvided)(ConstraintSolverEnv$$get_g(csenv$$14), tc2, (0, _Types.L)(ms$$7, (0, _Types.L)()))) : false)) {
                                            $target$$48 = 0;
                                            ms$$8 = matchValue$$19[1].fields[1].head;
                                            tc2$$1 = matchValue$$19[1].fields[0];
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
                                          csenv$$14 = csenv$$14;
                                          ndeep$$3 = ndeep$$4;
                                          m2$$14 = m2$$14;
                                          trace$$16 = trace$$16;
                                          cxsln = null;
                                          ty1$$3 = ms$$8;
                                          ty2$$2 = new _tast.TType(6, "TType_measure", new _tast.Measure(4, "One"));
                                          continue SolveTypeEqualsType;
                                        }

                                      case 1:
                                        {
                                          var $target$$49, ms$$10, tc2$$3;

                                          if (matchValue$$19[0].tag === 1) {
                                            if (matchValue$$19[0].fields[1].tail != null) {
                                              if (matchValue$$19[0].fields[1].tail.tail == null) {
                                                if (tc2$$2 = matchValue$$19[0].fields[0], (ms$$9 = matchValue$$19[0].fields[1].head, (0, _tast.EntityRef$$get_IsMeasureableReprTycon)(tc2$$2) ? (0, _TastOps.typeEquiv)(ConstraintSolverEnv$$get_g(csenv$$14), sty2, (0, _TastOps.reduceTyconRefMeasureableOrProvided)(ConstraintSolverEnv$$get_g(csenv$$14), tc2$$2, (0, _Types.L)(ms$$9, (0, _Types.L)()))) : false)) {
                                                  $target$$49 = 0;
                                                  ms$$10 = matchValue$$19[0].fields[1].head;
                                                  tc2$$3 = matchValue$$19[0].fields[0];
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
                                                csenv$$14 = csenv$$14;
                                                ndeep$$3 = ndeep$$4;
                                                m2$$14 = m2$$14;
                                                trace$$16 = trace$$16;
                                                cxsln = null;
                                                ty1$$3 = ms$$10;
                                                ty2$$2 = new _tast.TType(6, "TType_measure", new _tast.Measure(4, "One"));
                                                continue SolveTypeEqualsType;
                                              }

                                            case 1:
                                              {
                                                var $target$$50, l1$$1, l2$$1, tc1$$1, tc2$$5;

                                                if (matchValue$$19[0].tag === 1) {
                                                  if (matchValue$$19[1].tag === 1) {
                                                    if (tc2$$4 = matchValue$$19[1].fields[0], (tc1 = matchValue$$19[0].fields[0], (l2 = matchValue$$19[1].fields[1], (l1 = matchValue$$19[0].fields[1], (0, _TastOps.tyconRefEq)(g$$28, tc1, tc2$$4))))) {
                                                      $target$$50 = 0;
                                                      l1$$1 = matchValue$$19[0].fields[1];
                                                      l2$$1 = matchValue$$19[1].fields[1];
                                                      tc1$$1 = matchValue$$19[0].fields[0];
                                                      tc2$$5 = matchValue$$19[1].fields[0];
                                                    } else {
                                                      $target$$50 = 1;
                                                    }
                                                  } else {
                                                    $target$$50 = 1;
                                                  }
                                                } else {
                                                  $target$$50 = 1;
                                                }

                                                switch ($target$$50) {
                                                  case 0:
                                                    {
                                                      return SolveTypeEqualsTypeEqns(csenv$$14, ndeep$$4, m2$$14, trace$$16, null, l1$$1, l2$$1);
                                                    }

                                                  case 1:
                                                    {
                                                      var $target$$51, l1$$3, l2$$3, tupInfo1, tupInfo2, d1, d2, r1, r2, ms1$$1, ms2$$1, rty1, rty2, tps1, tps2, l1$$4, l2$$4, uc1$$1, uc2$$1;

                                                      if (matchValue$$19[0].tag === 1) {
                                                        if (matchValue$$19[1].tag === 1) {
                                                          $target$$51 = 0;
                                                        } else {
                                                          $target$$51 = 6;
                                                        }
                                                      } else if (matchValue$$19[0].tag === 2) {
                                                        if (matchValue$$19[1].tag === 2) {
                                                          $target$$51 = 1;
                                                          l1$$3 = matchValue$$19[0].fields[1];
                                                          l2$$3 = matchValue$$19[1].fields[1];
                                                          tupInfo1 = matchValue$$19[0].fields[0];
                                                          tupInfo2 = matchValue$$19[1].fields[0];
                                                        } else {
                                                          $target$$51 = 6;
                                                        }
                                                      } else if (matchValue$$19[0].tag === 3) {
                                                        if (matchValue$$19[1].tag === 3) {
                                                          $target$$51 = 2;
                                                          d1 = matchValue$$19[0].fields[0];
                                                          d2 = matchValue$$19[1].fields[0];
                                                          r1 = matchValue$$19[0].fields[1];
                                                          r2 = matchValue$$19[1].fields[1];
                                                        } else {
                                                          $target$$51 = 6;
                                                        }
                                                      } else if (matchValue$$19[0].tag === 6) {
                                                        if (matchValue$$19[1].tag === 6) {
                                                          $target$$51 = 3;
                                                          ms1$$1 = matchValue$$19[0].fields[0];
                                                          ms2$$1 = matchValue$$19[1].fields[0];
                                                        } else {
                                                          $target$$51 = 6;
                                                        }
                                                      } else if (matchValue$$19[0].tag === 0) {
                                                        if (matchValue$$19[1].tag === 0) {
                                                          $target$$51 = 4;
                                                          rty1 = matchValue$$19[0].fields[1];
                                                          rty2 = matchValue$$19[1].fields[1];
                                                          tps1 = matchValue$$19[0].fields[0];
                                                          tps2 = matchValue$$19[1].fields[0];
                                                        } else {
                                                          $target$$51 = 6;
                                                        }
                                                      } else if (matchValue$$19[0].tag === 4) {
                                                        if (matchValue$$19[1].tag === 4) {
                                                          if (uc2 = matchValue$$19[1].fields[0], (uc1 = matchValue$$19[0].fields[0], (l2$$2 = matchValue$$19[1].fields[1], (l1$$2 = matchValue$$19[0].fields[1], (0, _TcGlobals.TcGlobals$$unionCaseRefEq)(g$$28, uc1, uc2))))) {
                                                            $target$$51 = 5;
                                                            l1$$4 = matchValue$$19[0].fields[1];
                                                            l2$$4 = matchValue$$19[1].fields[1];
                                                            uc1$$1 = matchValue$$19[0].fields[0];
                                                            uc2$$1 = matchValue$$19[1].fields[0];
                                                          } else {
                                                            $target$$51 = 6;
                                                          }
                                                        } else {
                                                          $target$$51 = 6;
                                                        }
                                                      } else {
                                                        $target$$51 = 6;
                                                      }

                                                      switch ($target$$51) {
                                                        case 0:
                                                          {
                                                            return localAbortD;
                                                          }

                                                        case 1:
                                                          {
                                                            if ((0, _TastOps.evalTupInfoIsStruct)(tupInfo1) !== (0, _TastOps.evalTupInfoIsStruct)(tupInfo2)) {
                                                              return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$tcTupleStructMismatch)(), csenv$$14.m, m2$$14));
                                                            } else {
                                                              return SolveTypeEqualsTypeEqns(csenv$$14, ndeep$$4, m2$$14, trace$$16, null, l1$$3, l2$$3);
                                                            }
                                                          }

                                                        case 2:
                                                          {
                                                            return SolveFunTypeEqn(csenv$$14, ndeep$$4, m2$$14, trace$$16, null, d1, d2, r1, r2);
                                                          }

                                                        case 3:
                                                          {
                                                            return UnifyMeasures(csenv$$14, trace$$16, ms1$$1, ms2$$1);
                                                          }

                                                        case 4:
                                                          {
                                                            if ((0, _List.length)(tps1) !== (0, _List.length)(tps2)) {
                                                              return localAbortD;
                                                            } else {
                                                              const aenv$$1 = (0, _TastOps.TypeEquivEnv$$BindEquivTypars)(aenv, tps1, tps2);
                                                              const csenv$$15 = new ConstraintSolverEnv(csenv$$14.SolverState, csenv$$14.eContextInfo, csenv$$14.MatchingOnly, csenv$$14.m, aenv$$1, csenv$$14.DisplayEnv);

                                                              if (!(0, _TastOps.typarsAEquiv)(g$$28, aenv$$1, tps1, tps2)) {
                                                                return localAbortD;
                                                              } else {
                                                                return SolveTypeEqualsTypeKeepAbbrevs(csenv$$15, ndeep$$4, m2$$14, trace$$16, rty1, rty2);
                                                              }
                                                            }
                                                          }

                                                        case 5:
                                                          {
                                                            return SolveTypeEqualsTypeEqns(csenv$$14, ndeep$$4, m2$$14, trace$$16, null, l1$$4, l2$$4);
                                                          }

                                                        case 6:
                                                          {
                                                            return localAbortD;
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

function SolveTypeEqualsTypeKeepAbbrevs(csenv$$16, ndeep$$5, m2$$15, trace$$17, ty1$$4, ty2$$3) {
  return SolveTypeEqualsTypeKeepAbbrevsWithCxsln(csenv$$16, ndeep$$5, m2$$15, trace$$17, null, ty1$$4, ty2$$3);
}

function SolveTypeEqualsTypeKeepAbbrevsWithCxsln(csenv$$17, ndeep$$6, m2$$16, trace$$18, cxsln$$1, ty1$$5, ty2$$4) {
  return (0, _ErrorLogger.TryD)(function () {
    return SolveTypeEqualsType(csenv$$17, ndeep$$6, m2$$16, trace$$18, cxsln$$1, ty1$$5, ty2$$4);
  }, function (_arg8) {
    return _arg8 instanceof LocallyAbortOperationThatLosesAbbrevs ? (0, _ErrorLogger.ErrorD)(new ConstraintSolverTypesNotInEqualityRelation(csenv$$17.DisplayEnv, ty1$$5, ty2$$4, csenv$$17.m, m2$$16, csenv$$17.eContextInfo)) : (0, _ErrorLogger.ErrorD)(_arg8);
  });
}

function SolveTypeEqualsTypeEqns(csenv$$18, ndeep$$7, m2$$17, trace$$19, cxsln$$2, origl1, origl2) {
  const matchValue$$21 = [origl1, origl2];
  var $target$$52;

  if (matchValue$$21[0].tail == null) {
    if (matchValue$$21[1].tail == null) {
      $target$$52 = 0;
    } else {
      $target$$52 = 1;
    }
  } else {
    $target$$52 = 1;
  }

  switch ($target$$52) {
    case 0:
      {
        return _ErrorLogger.CompleteD;
      }

    case 1:
      {
        const loop = function loop(l1$$5, l2$$5) {
          const matchValue$$22 = [l1$$5, l2$$5];
          var $target$$53, h1, h2, t1, t2;

          if (matchValue$$22[0].tail != null) {
            if (matchValue$$22[1].tail != null) {
              $target$$53 = 1;
              h1 = matchValue$$22[0].head;
              h2 = matchValue$$22[1].head;
              t1 = matchValue$$22[0].tail;
              t2 = matchValue$$22[1].tail;
            } else {
              $target$$53 = 2;
            }
          } else if (matchValue$$22[1].tail == null) {
            $target$$53 = 0;
          } else {
            $target$$53 = 2;
          }

          switch ($target$$53) {
            case 0:
              {
                return _ErrorLogger.CompleteD;
              }

            case 1:
              {
                return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevsWithCxsln(csenv$$18, ndeep$$7, m2$$17, trace$$19, cxsln$$2, h1, h2), function () {
                  return loop(t1, t2);
                });
              }

            case 2:
              {
                return (0, _ErrorLogger.ErrorD)(new ConstraintSolverTupleDiffLengths(csenv$$18.DisplayEnv, origl1, origl2, csenv$$18.m, m2$$17));
              }
          }
        };

        return loop(origl1, origl2);
      }
  }
}

function SolveFunTypeEqn(csenv$$19, ndeep$$8, m2$$18, trace$$20, cxsln$$3, d1$$1, d2$$1, r1$$1, r2$$1) {
  return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevsWithCxsln(csenv$$19, ndeep$$8, m2$$18, trace$$20, cxsln$$3, d1$$1, d2$$1), function () {
    return SolveTypeEqualsTypeKeepAbbrevsWithCxsln(csenv$$19, ndeep$$8, m2$$18, trace$$20, cxsln$$3, r1$$1, r2$$1);
  });
}

function SolveTypeSubsumesType(csenv$$20, ndeep$$9, m2$$19, trace$$21, cxsln$$4, ty1$$6, ty2$$5) {
  var r$$13, r2$$2, tinst$$3, tcr1, uc2$$2, uc1$$2, l2$$11, l1$$11, tc2$$15, tc1$$4, l2$$9, l1$$9, tc2$$13, tc1$$2, l2$$7, l1$$7, tc2$$11, ms$$16, tc2$$6, ms$$11, tc2$$7, ms$$12, tc2$$8, ms$$13, tc2$$9, ms$$14, r$$12;

  SolveTypeSubsumesType: while (true) {
    const ndeep$$10 = ndeep$$9 + 1 | 0;
    const g$$29 = ConstraintSolverEnv$$get_g(csenv$$20);

    if ((0, _TastOps.isObjTy)(g$$29, ty1$$6)) {
      return _ErrorLogger.CompleteD;
    } else {
      const canShortcut$$1 = !OptionalTrace$$get_HasTrace(trace$$21);
      const sty1$$1 = (0, _TastOps.stripTyEqnsA)(ConstraintSolverEnv$$get_g(csenv$$20), canShortcut$$1, ty1$$6);
      const sty2$$1 = (0, _TastOps.stripTyEqnsA)(ConstraintSolverEnv$$get_g(csenv$$20), canShortcut$$1, ty2$$5);
      const amap$$2 = ConstraintSolverEnv$$get_amap(csenv$$20);
      const aenv$$2 = csenv$$20.EquivEnv;
      const denv$$3 = csenv$$20.DisplayEnv;
      const matchValue$$23 = [sty1$$1, sty2$$1];
      var $target$$54, tp1$$6, r$$15;

      if (matchValue$$23[0].tag === 5) {
        $target$$54 = 0;
        tp1$$6 = matchValue$$23[0].fields[0];
      } else if (matchValue$$23[1].tag === 5) {
        if (r$$12 = matchValue$$23[1].fields[0], !csenv$$20.MatchingOnly) {
          $target$$54 = 1;
          r$$15 = matchValue$$23[1].fields[0];
        } else {
          $target$$54 = 2;
        }
      } else {
        $target$$54 = 2;
      }

      switch ($target$$54) {
        case 0:
          {
            const matchValue$$24 = (0, _TastOps.TyparMap$00601$$TryFind$$ZB4A2630)(aenv$$2.EquivTypars, tp1$$6);

            if (matchValue$$24 != null) {
              const v$$14 = matchValue$$24;
              csenv$$20 = csenv$$20;
              ndeep$$9 = ndeep$$10;
              m2$$19 = m2$$19;
              trace$$21 = trace$$21;
              cxsln$$4 = cxsln$$4;
              ty1$$6 = v$$14;
              ty2$$5 = ty2$$5;
              continue SolveTypeSubsumesType;
            } else {
              var $target$$55, r2$$3;

              if (sty2$$1.tag === 5) {
                if (r2$$2 = sty2$$1.fields[0], (0, _tast.typarEq)(tp1$$6, r2$$2)) {
                  $target$$55 = 0;
                  r2$$3 = sty2$$1.fields[0];
                } else {
                  $target$$55 = 1;
                }
              } else {
                $target$$55 = 1;
              }

              switch ($target$$55) {
                case 0:
                  {
                    return _ErrorLogger.CompleteD;
                  }

                case 1:
                  {
                    var $target$$56, r$$14;

                    if (sty2$$1.tag === 5) {
                      if (r$$13 = sty2$$1.fields[0], !csenv$$20.MatchingOnly) {
                        $target$$56 = 0;
                        r$$14 = sty2$$1.fields[0];
                      } else {
                        $target$$56 = 1;
                      }
                    } else {
                      $target$$56 = 1;
                    }

                    switch ($target$$56) {
                      case 0:
                        {
                          return SolveTyparSubtypeOfType(csenv$$20, ndeep$$10, m2$$19, trace$$21, r$$14, ty1$$6);
                        }

                      case 1:
                        {
                          return SolveTypeEqualsTypeKeepAbbrevsWithCxsln(csenv$$20, ndeep$$10, m2$$19, trace$$21, cxsln$$4, ty1$$6, ty2$$5);
                        }
                    }
                  }
              }
            }
          }

        case 1:
          {
            return SolveTyparSubtypeOfType(csenv$$20, ndeep$$10, m2$$19, trace$$21, r$$15, ty1$$6);
          }

        case 2:
          {
            var $target$$57, l1$$6, l2$$6, tupInfo1$$1, tupInfo2$$1, d1$$2, d2$$2, r1$$2, r2$$4, ms1$$2, ms2$$2, ms$$15, tc2$$10;

            if (matchValue$$23[0].tag === 2) {
              if (matchValue$$23[1].tag === 2) {
                $target$$57 = 0;
                l1$$6 = matchValue$$23[0].fields[1];
                l2$$6 = matchValue$$23[1].fields[1];
                tupInfo1$$1 = matchValue$$23[0].fields[0];
                tupInfo2$$1 = matchValue$$23[1].fields[0];
              } else if (matchValue$$23[1].tag === 1) {
                if (matchValue$$23[1].fields[1].tail != null) {
                  if (matchValue$$23[1].fields[1].tail.tail == null) {
                    if (tc2$$6 = matchValue$$23[1].fields[0], (ms$$11 = matchValue$$23[1].fields[1].head, (0, _tast.EntityRef$$get_IsMeasureableReprTycon)(tc2$$6) ? (0, _TastOps.typeEquiv)(ConstraintSolverEnv$$get_g(csenv$$20), sty1$$1, (0, _TastOps.reduceTyconRefMeasureableOrProvided)(ConstraintSolverEnv$$get_g(csenv$$20), tc2$$6, (0, _Types.L)(ms$$11, (0, _Types.L)()))) : false)) {
                      $target$$57 = 3;
                      ms$$15 = matchValue$$23[1].fields[1].head;
                      tc2$$10 = matchValue$$23[1].fields[0];
                    } else {
                      $target$$57 = 4;
                    }
                  } else {
                    $target$$57 = 4;
                  }
                } else {
                  $target$$57 = 4;
                }
              } else {
                $target$$57 = 4;
              }
            } else if (matchValue$$23[0].tag === 3) {
              if (matchValue$$23[1].tag === 3) {
                $target$$57 = 1;
                d1$$2 = matchValue$$23[0].fields[0];
                d2$$2 = matchValue$$23[1].fields[0];
                r1$$2 = matchValue$$23[0].fields[1];
                r2$$4 = matchValue$$23[1].fields[1];
              } else if (matchValue$$23[1].tag === 1) {
                if (matchValue$$23[1].fields[1].tail != null) {
                  if (matchValue$$23[1].fields[1].tail.tail == null) {
                    if (tc2$$7 = matchValue$$23[1].fields[0], (ms$$12 = matchValue$$23[1].fields[1].head, (0, _tast.EntityRef$$get_IsMeasureableReprTycon)(tc2$$7) ? (0, _TastOps.typeEquiv)(ConstraintSolverEnv$$get_g(csenv$$20), sty1$$1, (0, _TastOps.reduceTyconRefMeasureableOrProvided)(ConstraintSolverEnv$$get_g(csenv$$20), tc2$$7, (0, _Types.L)(ms$$12, (0, _Types.L)()))) : false)) {
                      $target$$57 = 3;
                      ms$$15 = matchValue$$23[1].fields[1].head;
                      tc2$$10 = matchValue$$23[1].fields[0];
                    } else {
                      $target$$57 = 4;
                    }
                  } else {
                    $target$$57 = 4;
                  }
                } else {
                  $target$$57 = 4;
                }
              } else {
                $target$$57 = 4;
              }
            } else if (matchValue$$23[0].tag === 6) {
              if (matchValue$$23[1].tag === 6) {
                $target$$57 = 2;
                ms1$$2 = matchValue$$23[0].fields[0];
                ms2$$2 = matchValue$$23[1].fields[0];
              } else if (matchValue$$23[1].tag === 1) {
                if (matchValue$$23[1].fields[1].tail != null) {
                  if (matchValue$$23[1].fields[1].tail.tail == null) {
                    if (tc2$$8 = matchValue$$23[1].fields[0], (ms$$13 = matchValue$$23[1].fields[1].head, (0, _tast.EntityRef$$get_IsMeasureableReprTycon)(tc2$$8) ? (0, _TastOps.typeEquiv)(ConstraintSolverEnv$$get_g(csenv$$20), sty1$$1, (0, _TastOps.reduceTyconRefMeasureableOrProvided)(ConstraintSolverEnv$$get_g(csenv$$20), tc2$$8, (0, _Types.L)(ms$$13, (0, _Types.L)()))) : false)) {
                      $target$$57 = 3;
                      ms$$15 = matchValue$$23[1].fields[1].head;
                      tc2$$10 = matchValue$$23[1].fields[0];
                    } else {
                      $target$$57 = 4;
                    }
                  } else {
                    $target$$57 = 4;
                  }
                } else {
                  $target$$57 = 4;
                }
              } else {
                $target$$57 = 4;
              }
            } else if (matchValue$$23[1].tag === 1) {
              if (matchValue$$23[1].fields[1].tail != null) {
                if (matchValue$$23[1].fields[1].tail.tail == null) {
                  if (tc2$$9 = matchValue$$23[1].fields[0], (ms$$14 = matchValue$$23[1].fields[1].head, (0, _tast.EntityRef$$get_IsMeasureableReprTycon)(tc2$$9) ? (0, _TastOps.typeEquiv)(ConstraintSolverEnv$$get_g(csenv$$20), sty1$$1, (0, _TastOps.reduceTyconRefMeasureableOrProvided)(ConstraintSolverEnv$$get_g(csenv$$20), tc2$$9, (0, _Types.L)(ms$$14, (0, _Types.L)()))) : false)) {
                    $target$$57 = 3;
                    ms$$15 = matchValue$$23[1].fields[1].head;
                    tc2$$10 = matchValue$$23[1].fields[0];
                  } else {
                    $target$$57 = 4;
                  }
                } else {
                  $target$$57 = 4;
                }
              } else {
                $target$$57 = 4;
              }
            } else {
              $target$$57 = 4;
            }

            switch ($target$$57) {
              case 0:
                {
                  if ((0, _TastOps.evalTupInfoIsStruct)(tupInfo1$$1) !== (0, _TastOps.evalTupInfoIsStruct)(tupInfo2$$1)) {
                    return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$tcTupleStructMismatch)(), csenv$$20.m, m2$$19));
                  } else {
                    return SolveTypeEqualsTypeEqns(csenv$$20, ndeep$$10, m2$$19, trace$$21, cxsln$$4, l1$$6, l2$$6);
                  }
                }

              case 1:
                {
                  return SolveFunTypeEqn(csenv$$20, ndeep$$10, m2$$19, trace$$21, cxsln$$4, d1$$2, d2$$2, r1$$2, r2$$4);
                }

              case 2:
                {
                  return UnifyMeasures(csenv$$20, trace$$21, ms1$$2, ms2$$2);
                }

              case 3:
                {
                  return SolveTypeEqualsTypeKeepAbbrevsWithCxsln(csenv$$20, ndeep$$10, m2$$19, trace$$21, cxsln$$4, ms$$15, new _tast.TType(6, "TType_measure", new _tast.Measure(4, "One")));
                }

              case 4:
                {
                  var $target$$58, ms$$17, tc2$$12;

                  if (matchValue$$23[0].tag === 1) {
                    if (matchValue$$23[0].fields[1].tail != null) {
                      if (matchValue$$23[0].fields[1].tail.tail == null) {
                        if (tc2$$11 = matchValue$$23[0].fields[0], (ms$$16 = matchValue$$23[0].fields[1].head, (0, _tast.EntityRef$$get_IsMeasureableReprTycon)(tc2$$11) ? (0, _TastOps.typeEquiv)(ConstraintSolverEnv$$get_g(csenv$$20), sty2$$1, (0, _TastOps.reduceTyconRefMeasureableOrProvided)(ConstraintSolverEnv$$get_g(csenv$$20), tc2$$11, (0, _Types.L)(ms$$16, (0, _Types.L)()))) : false)) {
                          $target$$58 = 0;
                          ms$$17 = matchValue$$23[0].fields[1].head;
                          tc2$$12 = matchValue$$23[0].fields[0];
                        } else {
                          $target$$58 = 1;
                        }
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
                        return SolveTypeEqualsTypeKeepAbbrevsWithCxsln(csenv$$20, ndeep$$10, m2$$19, trace$$21, cxsln$$4, ms$$17, new _tast.TType(6, "TType_measure", new _tast.Measure(4, "One")));
                      }

                    case 1:
                      {
                        var $target$$59, l1$$8, l2$$8, tc1$$3, tc2$$14;

                        if (matchValue$$23[0].tag === 1) {
                          if (matchValue$$23[1].tag === 1) {
                            if (tc2$$13 = matchValue$$23[1].fields[0], (tc1$$2 = matchValue$$23[0].fields[0], (l2$$7 = matchValue$$23[1].fields[1], (l1$$7 = matchValue$$23[0].fields[1], ((0, _TastOps.tyconRefEq)(g$$29, tc1$$2, tc2$$13) ? (0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$29)) : false) ? (0, _TastOps.tyconRefEq)(g$$29, (0, _TcGlobals.TcGlobals$$get_byref2_tcr)(g$$29), tc1$$2) : false)))) {
                              $target$$59 = 0;
                              l1$$8 = matchValue$$23[0].fields[1];
                              l2$$8 = matchValue$$23[1].fields[1];
                              tc1$$3 = matchValue$$23[0].fields[0];
                              tc2$$14 = matchValue$$23[1].fields[0];
                            } else {
                              $target$$59 = 1;
                            }
                          } else {
                            $target$$59 = 1;
                          }
                        } else {
                          $target$$59 = 1;
                        }

                        switch ($target$$59) {
                          case 0:
                            {
                              const matchValue$$25 = [l1$$8, l2$$8];
                              var $target$$60, h1$$1, h2$$1, tag1, tag2;

                              if (matchValue$$25[0].tail != null) {
                                if (matchValue$$25[0].tail.tail != null) {
                                  if (matchValue$$25[0].tail.tail.tail == null) {
                                    if (matchValue$$25[1].tail != null) {
                                      if (matchValue$$25[1].tail.tail != null) {
                                        if (matchValue$$25[1].tail.tail.tail == null) {
                                          $target$$60 = 0;
                                          h1$$1 = matchValue$$25[0].head;
                                          h2$$1 = matchValue$$25[1].head;
                                          tag1 = matchValue$$25[0].tail.head;
                                          tag2 = matchValue$$25[1].tail.head;
                                        } else {
                                          $target$$60 = 1;
                                        }
                                      } else {
                                        $target$$60 = 1;
                                      }
                                    } else {
                                      $target$$60 = 1;
                                    }
                                  } else {
                                    $target$$60 = 1;
                                  }
                                } else {
                                  $target$$60 = 1;
                                }
                              } else {
                                $target$$60 = 1;
                              }

                              switch ($target$$60) {
                                case 0:
                                  {
                                    return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsType(csenv$$20, ndeep$$10, m2$$19, trace$$21, null, h1$$1, h2$$1), function () {
                                      var tagc2, tagc1;
                                      const matchValue$$26 = [(0, _TastOps.stripTyEqnsA)(ConstraintSolverEnv$$get_g(csenv$$20), canShortcut$$1, tag1), (0, _TastOps.stripTyEqnsA)(ConstraintSolverEnv$$get_g(csenv$$20), canShortcut$$1, tag2)];
                                      var $target$$61, tagc1$$1, tagc2$$1;

                                      if (matchValue$$26[0].tag === 1) {
                                        if (matchValue$$26[0].fields[1].tail == null) {
                                          if (matchValue$$26[1].tag === 1) {
                                            if (matchValue$$26[1].fields[1].tail == null) {
                                              if (tagc2 = matchValue$$26[1].fields[0], (tagc1 = matchValue$$26[0].fields[0], (0, _TastOps.tyconRefEq)(g$$29, tagc2, (0, _TcGlobals.TcGlobals$$get_byrefkind_InOut_tcr)(g$$29)) ? (0, _TastOps.tyconRefEq)(g$$29, tagc1, (0, _TcGlobals.TcGlobals$$get_byrefkind_In_tcr)(g$$29)) ? true : (0, _TastOps.tyconRefEq)(g$$29, tagc1, (0, _TcGlobals.TcGlobals$$get_byrefkind_Out_tcr)(g$$29)) : false)) {
                                                $target$$61 = 0;
                                                tagc1$$1 = matchValue$$26[0].fields[0];
                                                tagc2$$1 = matchValue$$26[1].fields[0];
                                              } else {
                                                $target$$61 = 1;
                                              }
                                            } else {
                                              $target$$61 = 1;
                                            }
                                          } else {
                                            $target$$61 = 1;
                                          }
                                        } else {
                                          $target$$61 = 1;
                                        }
                                      } else {
                                        $target$$61 = 1;
                                      }

                                      switch ($target$$61) {
                                        case 0:
                                          {
                                            return _ErrorLogger.CompleteD;
                                          }

                                        case 1:
                                          {
                                            return SolveTypeEqualsType(csenv$$20, ndeep$$10, m2$$19, trace$$21, cxsln$$4, tag1, tag2);
                                          }
                                      }
                                    });
                                  }

                                case 1:
                                  {
                                    return SolveTypeEqualsTypeEqns(csenv$$20, ndeep$$10, m2$$19, trace$$21, cxsln$$4, l1$$8, l2$$8);
                                  }
                              }
                            }

                          case 1:
                            {
                              var $target$$62, l1$$10, l2$$10, tc1$$5, tc2$$16;

                              if (matchValue$$23[0].tag === 1) {
                                if (matchValue$$23[1].tag === 1) {
                                  if (tc2$$15 = matchValue$$23[1].fields[0], (tc1$$4 = matchValue$$23[0].fields[0], (l2$$9 = matchValue$$23[1].fields[1], (l1$$9 = matchValue$$23[0].fields[1], (0, _TastOps.tyconRefEq)(g$$29, tc1$$4, tc2$$15))))) {
                                    $target$$62 = 0;
                                    l1$$10 = matchValue$$23[0].fields[1];
                                    l2$$10 = matchValue$$23[1].fields[1];
                                    tc1$$5 = matchValue$$23[0].fields[0];
                                    tc2$$16 = matchValue$$23[1].fields[0];
                                  } else {
                                    $target$$62 = 1;
                                  }
                                } else {
                                  $target$$62 = 1;
                                }
                              } else {
                                $target$$62 = 1;
                              }

                              switch ($target$$62) {
                                case 0:
                                  {
                                    return SolveTypeEqualsTypeEqns(csenv$$20, ndeep$$10, m2$$19, trace$$21, cxsln$$4, l1$$10, l2$$10);
                                  }

                                case 1:
                                  {
                                    var $target$$63, l1$$12, l2$$12, uc1$$3, uc2$$3;

                                    if (matchValue$$23[0].tag === 4) {
                                      if (matchValue$$23[1].tag === 4) {
                                        if (uc2$$2 = matchValue$$23[1].fields[0], (uc1$$2 = matchValue$$23[0].fields[0], (l2$$11 = matchValue$$23[1].fields[1], (l1$$11 = matchValue$$23[0].fields[1], (0, _TcGlobals.TcGlobals$$unionCaseRefEq)(g$$29, uc1$$2, uc2$$2))))) {
                                          $target$$63 = 0;
                                          l1$$12 = matchValue$$23[0].fields[1];
                                          l2$$12 = matchValue$$23[1].fields[1];
                                          uc1$$3 = matchValue$$23[0].fields[0];
                                          uc2$$3 = matchValue$$23[1].fields[0];
                                        } else {
                                          $target$$63 = 1;
                                        }
                                      } else {
                                        $target$$63 = 1;
                                      }
                                    } else {
                                      $target$$63 = 1;
                                    }

                                    switch ($target$$63) {
                                      case 0:
                                        {
                                          return SolveTypeEqualsTypeEqns(csenv$$20, ndeep$$10, m2$$19, trace$$21, cxsln$$4, l1$$12, l2$$12);
                                        }

                                      case 1:
                                        {
                                          if ((0, _TastOps.isObjTy)(g$$29, ty1$$6)) {
                                            return _ErrorLogger.CompleteD;
                                          } else {
                                            const m$$13 = csenv$$20.m;
                                            var $target$$64, tcr1$$1, tinst$$4;
                                            const activePatternResult43621 = (0, _TastOps.$007CAppTy$007C_$007C)(g$$29, ty1$$6);

                                            if (activePatternResult43621 != null) {
                                              if (tinst$$3 = activePatternResult43621[1], (tcr1 = activePatternResult43621[0], (0, _TastOps.isArray1DTy)(g$$29, ty2$$5) ? ((((0, _TastOps.tyconRefEq)(g$$29, tcr1, (0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_Generic_IList)(g$$29)) ? true : (0, _TastOps.tyconRefEq)(g$$29, tcr1, (0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_Generic_ICollection)(g$$29))) ? true : (0, _TastOps.tyconRefEq)(g$$29, tcr1, (0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_Generic_IReadOnlyList)(g$$29))) ? true : (0, _TastOps.tyconRefEq)(g$$29, tcr1, (0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_Generic_IReadOnlyCollection)(g$$29))) ? true : (0, _TastOps.tyconRefEq)(g$$29, tcr1, (0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_Generic_IEnumerable)(g$$29)) : false)) {
                                                $target$$64 = 0;
                                                tcr1$$1 = activePatternResult43621[0];
                                                tinst$$4 = activePatternResult43621[1];
                                              } else {
                                                $target$$64 = 1;
                                              }
                                            } else {
                                              $target$$64 = 1;
                                            }

                                            switch ($target$$64) {
                                              case 0:
                                                {
                                                  var $target$$65, ty1arg;

                                                  if (tinst$$4.tail != null) {
                                                    if (tinst$$4.tail.tail == null) {
                                                      $target$$65 = 0;
                                                      ty1arg = tinst$$4.head;
                                                    } else {
                                                      $target$$65 = 1;
                                                    }
                                                  } else {
                                                    $target$$65 = 1;
                                                  }

                                                  switch ($target$$65) {
                                                    case 0:
                                                      {
                                                        const ty2arg = (0, _TastOps.destArrayTy)(g$$29, ty2$$5);
                                                        return SolveTypeEqualsTypeKeepAbbrevsWithCxsln(csenv$$20, ndeep$$10, m2$$19, trace$$21, cxsln$$4, ty1arg, ty2arg);
                                                      }

                                                    case 1:
                                                      {
                                                        return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("destArrayTy", m$$13));
                                                      }
                                                  }
                                                }

                                              case 1:
                                                {
                                                  const matchValue$$27 = (0, _TypeRelations.FindUniqueFeasibleSupertype)(g$$29, amap$$2, m$$13, ty1$$6, ty2$$5);

                                                  if (matchValue$$27 != null) {
                                                    const t$$6 = matchValue$$27;
                                                    csenv$$20 = csenv$$20;
                                                    ndeep$$9 = ndeep$$10;
                                                    m2$$19 = m2$$19;
                                                    trace$$21 = trace$$21;
                                                    cxsln$$4 = cxsln$$4;
                                                    ty1$$6 = ty1$$6;
                                                    ty2$$5 = t$$6;
                                                    continue SolveTypeSubsumesType;
                                                  } else {
                                                    return (0, _ErrorLogger.ErrorD)(new ConstraintSolverTypesNotInSubsumptionRelation(denv$$3, ty1$$6, ty2$$5, m$$13, m2$$19));
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

function SolveTypeSubsumesTypeKeepAbbrevs(csenv$$21, ndeep$$11, m2$$20, trace$$22, cxsln$$5, ty1$$7, ty2$$6) {
  const denv$$4 = csenv$$21.DisplayEnv;
  return (0, _ErrorLogger.TryD)(function () {
    return SolveTypeSubsumesType(csenv$$21, ndeep$$11, m2$$20, trace$$22, cxsln$$5, ty1$$7, ty2$$6);
  }, function (_arg9) {
    return _arg9 instanceof LocallyAbortOperationThatLosesAbbrevs ? (0, _ErrorLogger.ErrorD)(new ConstraintSolverTypesNotInSubsumptionRelation(denv$$4, ty1$$7, ty2$$6, csenv$$21.m, m2$$20)) : (0, _ErrorLogger.ErrorD)(_arg9);
  });
}

function SolveTyparSubtypeOfType(csenv$$22, ndeep$$12, m2$$21, trace$$23, tp$$2, ty1$$8) {
  const g$$30 = ConstraintSolverEnv$$get_g(csenv$$22);

  if ((0, _TastOps.isObjTy)(g$$30, ty1$$8)) {
    return _ErrorLogger.CompleteD;
  } else if ((0, _TastOps.typeEquiv)(g$$30, ty1$$8, (0, _tast.mkTyparTy)(tp$$2))) {
    return _ErrorLogger.CompleteD;
  } else if ((0, _TastOps.isSealedTy)(g$$30, ty1$$8)) {
    return SolveTypeEqualsTypeKeepAbbrevs(csenv$$22, ndeep$$12, m2$$21, trace$$23, (0, _tast.mkTyparTy)(tp$$2), ty1$$8);
  } else {
    return AddConstraint(csenv$$22, ndeep$$12, m2$$21, trace$$23, tp$$2, new _tast.TyparConstraint(0, "CoercesTo", ty1$$8, csenv$$22.m));
  }
}

function DepthCheck(ndeep$$13, m$$14) {
  if (ndeep$$13 > 300) {
    return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csTypeInferenceMaxDepth)(), m$$14));
  } else {
    return _ErrorLogger.CompleteD;
  }
}

function SolveDimensionlessNumericType(csenv$$23, ndeep$$14, m2$$22, trace$$24, ty$$31) {
  const matchValue$$28 = GetMeasureOfType(ConstraintSolverEnv$$get_g(csenv$$23), ty$$31);

  if (matchValue$$28 == null) {
    return _ErrorLogger.CompleteD;
  } else {
    const tcref$$1 = matchValue$$28[0];
    return SolveTypeEqualsTypeKeepAbbrevs(csenv$$23, ndeep$$14, m2$$22, trace$$24, ty$$31, (0, _TastOps.mkAppTy)(tcref$$1, (0, _Types.L)(new _tast.TType(6, "TType_measure", new _tast.Measure(4, "One")), (0, _Types.L)())));
  }
}

function SolveMemberConstraint(csenv$$24, ignoreUnresolvedOverload, permitWeakResolution, ndeep$$15, m2$$23, trace$$25, _arg1$$7) {
  const tys$$9 = _arg1$$7.fields[0];
  const sln = _arg1$$7.fields[5];
  const rty = _arg1$$7.fields[4];
  const nm = _arg1$$7.fields[1];
  const memFlags = _arg1$$7.fields[2];
  const argtys = _arg1$$7.fields[3];

  if (sln.contents != null) {
    return (0, _ErrorLogger.ResultD)(true);
  } else {
    const g$$31 = ConstraintSolverEnv$$get_g(csenv$$24);
    const m$$15 = csenv$$24.m;
    const amap$$3 = ConstraintSolverEnv$$get_amap(csenv$$24);
    const aenv$$3 = csenv$$24.EquivEnv;
    const denv$$5 = csenv$$24.DisplayEnv;
    const ndeep$$16 = ndeep$$15 + 1 | 0;
    return (0, _ErrorLogger.op_PlusPlus)(DepthCheck(ndeep$$16, m$$15), function () {
      var matchValue$$29;
      const tys$$10 = (0, _lib.ListSet$$$setify)(function (arg20$0040$$4, arg30$0040) {
        return (0, _TastOps.typeAEquiv)(g$$31, aenv$$3, arg20$0040$$4, arg30$0040);
      }, tys$$9);
      const traitInfo$$3 = new _tast.TraitConstraintInfo(0, "TTrait", tys$$10, nm, memFlags, argtys, rty, sln);
      const rty$$1 = (0, _TastOps.GetFSharpViewOfReturnType)(g$$31, rty);
      return (0, _ErrorLogger.op_PlusPlus)((0, _ErrorLogger.op_PlusPlus)((0, _ErrorLogger.op_PlusPlus)(memFlags.IsInstance ? (matchValue$$29 = [tys$$10, argtys], matchValue$$29[0].tail != null ? matchValue$$29[0].tail.tail == null ? matchValue$$29[1].tail != null ? SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, matchValue$$29[1].head, matchValue$$29[0].head) : (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csExpectedArguments)(), m$$15, m2$$23)) : (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csExpectedArguments)(), m$$15, m2$$23)) : (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csExpectedArguments)(), m$$15, m2$$23))) : _ErrorLogger.CompleteD, function () {
        return (0, _ErrorLogger.IterateD)(function f$$6(ty$$33) {
          return SolveTypStaticReq(csenv$$24, trace$$25, new _ast.TyparStaticReq(1, "HeadTypeStaticReq"), ty$$33);
        }, tys$$10);
      }), function () {
        var argty2$$27, argty1$$31, argty2$$25, argty1$$29, argty$$32, argty$$30, argty$$12, argty$$13, argty$$14, argty$$15, argty$$16, argty$$17, argty$$18, argty$$19, argty$$20, argty$$21, argty$$22, argty$$23, argty$$24, argty$$25, argty$$26, argty$$27, argty$$28, argty1$$27, argty$$10, argty$$7, argty$$8, argty$$6, argty$$4, argty$$2, argty2$$22, argty1$$24, argty2$$23, argty1$$25, argty2$$18, argty1$$20, argty2$$19, argty1$$21, argty2$$20, argty1$$22, ty$$42, ty$$40, ty$$38, argty1$$18, argty2$$16, argty1$$16, ty$$36, ty$$34, argty2$$9, argty1$$9, argty2$$10, argty1$$10, argty2$$11, argty1$$11, argty2$$12, argty1$$12, argty2$$13, argty1$$13, argty2$$14, argty1$$14, argty2$$5, argty1$$5, argty2$$6, argty1$$6, argty2$$7, argty1$$7, argty2, argty1, checkRuleAppliesInPreferenceToMethods, argty2$$2, argty1$$2, checkRuleAppliesInPreferenceToMethods$$1;
        const argtys$$1 = memFlags.IsInstance ? (0, _List.tail)(argtys) : argtys;
        const minfos = GetRelevantMethodsForTrait(csenv$$24, permitWeakResolution, nm, traitInfo$$3);
        const matchValue$$30 = [minfos, tys$$10, memFlags.IsInstance, nm, argtys$$1];
        var $target$$66, argty1$$4, argty2$$4;

        if (matchValue$$30[2]) {
          $target$$66 = 1;
        } else if (matchValue$$30[3] === "op_Division") {
          if (matchValue$$30[4].tail != null) {
            if (matchValue$$30[4].tail.tail != null) {
              if (matchValue$$30[4].tail.tail.tail == null) {
                if (argty2 = matchValue$$30[4].tail.head, (argty1 = matchValue$$30[4].head, (checkRuleAppliesInPreferenceToMethods = function checkRuleAppliesInPreferenceToMethods(argty1$$1, argty2$$1) {
                  if (IsNumericOrIntegralEnumType(g$$31, argty1$$1) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$1) : false) {
                    if (minfos.tail == null) {
                      return true;
                    } else if (GetMeasureOfType(g$$31, argty1$$1) != null) {
                      return isDecimalTy(g$$31, argty2$$1);
                    } else {
                      return false;
                    }
                  } else {
                    return false;
                  }
                }, checkRuleAppliesInPreferenceToMethods(argty1, argty2) ? true : checkRuleAppliesInPreferenceToMethods(argty2, argty1)))) {
                  $target$$66 = 0;
                  argty1$$4 = matchValue$$30[4].head;
                  argty2$$4 = matchValue$$30[4].tail.head;
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
        } else if (matchValue$$30[3] === "op_Multiply") {
          if (matchValue$$30[4].tail != null) {
            if (matchValue$$30[4].tail.tail != null) {
              if (matchValue$$30[4].tail.tail.tail == null) {
                if (argty2$$2 = matchValue$$30[4].tail.head, (argty1$$2 = matchValue$$30[4].head, (checkRuleAppliesInPreferenceToMethods$$1 = function checkRuleAppliesInPreferenceToMethods$$1(argty1$$3, argty2$$3) {
                  if (IsNumericOrIntegralEnumType(g$$31, argty1$$3) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$3) : false) {
                    if (minfos.tail == null) {
                      return true;
                    } else if (GetMeasureOfType(g$$31, argty1$$3) != null) {
                      return isDecimalTy(g$$31, argty2$$3);
                    } else {
                      return false;
                    }
                  } else {
                    return false;
                  }
                }, checkRuleAppliesInPreferenceToMethods$$1(argty1$$2, argty2$$2) ? true : checkRuleAppliesInPreferenceToMethods$$1(argty2$$2, argty1$$2)))) {
                  $target$$66 = 0;
                  argty1$$4 = matchValue$$30[4].head;
                  argty2$$4 = matchValue$$30[4].tail.head;
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
              const matchValue$$31 = GetMeasureOfType(g$$31, argty1$$4);

              if (matchValue$$31 != null) {
                const tcref$$2 = matchValue$$31[0];
                const ms1$$3 = matchValue$$31[1];
                const ms2$$3 = freshMeasure();
                return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty2$$4, (0, _TastOps.mkAppTy)(tcref$$2, (0, _Types.L)(new _tast.TType(6, "TType_measure", ms2$$3), (0, _Types.L)()))), function () {
                  return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, (0, _TastOps.mkAppTy)(tcref$$2, (0, _Types.L)(new _tast.TType(6, "TType_measure", new _tast.Measure(2, "Prod", ms1$$3, nm === "op_Multiply" ? ms2$$3 : new _tast.Measure(3, "Inv", ms2$$3))), (0, _Types.L)()))), function () {
                    return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                  });
                });
              } else {
                const matchValue$$32 = GetMeasureOfType(g$$31, argty2$$4);

                if (matchValue$$32 != null) {
                  const tcref$$3 = matchValue$$32[0];
                  const ms2$$4 = matchValue$$32[1];
                  const ms1$$4 = freshMeasure();
                  return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty1$$4, (0, _TastOps.mkAppTy)(tcref$$3, (0, _Types.L)(new _tast.TType(6, "TType_measure", ms1$$4), (0, _Types.L)()))), function () {
                    return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, (0, _TastOps.mkAppTy)(tcref$$3, (0, _Types.L)(new _tast.TType(6, "TType_measure", new _tast.Measure(2, "Prod", ms1$$4, nm === "op_Multiply" ? ms2$$4 : new _tast.Measure(3, "Inv", ms2$$4))), (0, _Types.L)()))), function () {
                      return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                    });
                  });
                } else {
                  return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty2$$4, argty1$$4), function () {
                    return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, argty1$$4), function () {
                      return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                    });
                  });
                }
              }
            }

          case 1:
            {
              var $target$$67, argty1$$8, argty2$$8;

              if (matchValue$$30[2]) {
                $target$$67 = 1;
              } else if (matchValue$$30[3] === "op_Addition") {
                if (matchValue$$30[4].tail != null) {
                  if (matchValue$$30[4].tail.tail != null) {
                    if (matchValue$$30[4].tail.tail.tail == null) {
                      if (argty2$$5 = matchValue$$30[4].tail.head, (argty1$$5 = matchValue$$30[4].head, (0, _List.forAll)(function predicate$$3(minfo$$1) {
                        return isIntegerTy(g$$31, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$1));
                      }, minfos) ? ((IsNumericOrIntegralEnumType(g$$31, argty1$$5) ? true : nm === "op_Addition" ? isCharTy(g$$31, argty1$$5) ? true : isStringTy(g$$31, argty1$$5) : false) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$5) : false) ? true : (IsNumericOrIntegralEnumType(g$$31, argty2$$5) ? true : nm === "op_Addition" ? isCharTy(g$$31, argty2$$5) ? true : isStringTy(g$$31, argty2$$5) : false) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty1$$5) : false : false)) {
                        $target$$67 = 0;
                        argty1$$8 = matchValue$$30[4].head;
                        argty2$$8 = matchValue$$30[4].tail.head;
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
              } else if (matchValue$$30[3] === "op_Subtraction") {
                if (matchValue$$30[4].tail != null) {
                  if (matchValue$$30[4].tail.tail != null) {
                    if (matchValue$$30[4].tail.tail.tail == null) {
                      if (argty2$$6 = matchValue$$30[4].tail.head, (argty1$$6 = matchValue$$30[4].head, (0, _List.forAll)(function predicate$$4(minfo$$2) {
                        return isIntegerTy(g$$31, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$2));
                      }, minfos) ? ((IsNumericOrIntegralEnumType(g$$31, argty1$$6) ? true : nm === "op_Addition" ? isCharTy(g$$31, argty1$$6) ? true : isStringTy(g$$31, argty1$$6) : false) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$6) : false) ? true : (IsNumericOrIntegralEnumType(g$$31, argty2$$6) ? true : nm === "op_Addition" ? isCharTy(g$$31, argty2$$6) ? true : isStringTy(g$$31, argty2$$6) : false) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty1$$6) : false : false)) {
                        $target$$67 = 0;
                        argty1$$8 = matchValue$$30[4].head;
                        argty2$$8 = matchValue$$30[4].tail.head;
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
              } else if (matchValue$$30[3] === "op_Modulus") {
                if (matchValue$$30[4].tail != null) {
                  if (matchValue$$30[4].tail.tail != null) {
                    if (matchValue$$30[4].tail.tail.tail == null) {
                      if (argty2$$7 = matchValue$$30[4].tail.head, (argty1$$7 = matchValue$$30[4].head, (0, _List.forAll)(function predicate$$5(minfo$$3) {
                        return isIntegerTy(g$$31, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$3));
                      }, minfos) ? ((IsNumericOrIntegralEnumType(g$$31, argty1$$7) ? true : nm === "op_Addition" ? isCharTy(g$$31, argty1$$7) ? true : isStringTy(g$$31, argty1$$7) : false) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$7) : false) ? true : (IsNumericOrIntegralEnumType(g$$31, argty2$$7) ? true : nm === "op_Addition" ? isCharTy(g$$31, argty2$$7) ? true : isStringTy(g$$31, argty2$$7) : false) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty1$$7) : false : false)) {
                        $target$$67 = 0;
                        argty1$$8 = matchValue$$30[4].head;
                        argty2$$8 = matchValue$$30[4].tail.head;
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
                    return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty2$$8, argty1$$8), function () {
                      return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, argty1$$8), function () {
                        return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                      });
                    });
                  }

                case 1:
                  {
                    var $target$$68, argty1$$15, argty2$$15;

                    if (matchValue$$30[2]) {
                      $target$$68 = 1;
                    } else if (matchValue$$30[3] === "op_LessThan") {
                      if (matchValue$$30[4].tail != null) {
                        if (matchValue$$30[4].tail.tail != null) {
                          if (matchValue$$30[4].tail.tail.tail == null) {
                            if (argty2$$9 = matchValue$$30[4].tail.head, (argty1$$9 = matchValue$$30[4].head, (0, _List.forAll)(function predicate$$6(minfo$$4) {
                              return isIntegerTy(g$$31, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$4));
                            }, minfos) ? (IsRelationalType(g$$31, argty1$$9) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$9) : false) ? true : IsRelationalType(g$$31, argty2$$9) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty1$$9) : false : false)) {
                              $target$$68 = 0;
                              argty1$$15 = matchValue$$30[4].head;
                              argty2$$15 = matchValue$$30[4].tail.head;
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
                    } else if (matchValue$$30[3] === "op_LessThanOrEqual") {
                      if (matchValue$$30[4].tail != null) {
                        if (matchValue$$30[4].tail.tail != null) {
                          if (matchValue$$30[4].tail.tail.tail == null) {
                            if (argty2$$10 = matchValue$$30[4].tail.head, (argty1$$10 = matchValue$$30[4].head, (0, _List.forAll)(function predicate$$7(minfo$$5) {
                              return isIntegerTy(g$$31, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$5));
                            }, minfos) ? (IsRelationalType(g$$31, argty1$$10) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$10) : false) ? true : IsRelationalType(g$$31, argty2$$10) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty1$$10) : false : false)) {
                              $target$$68 = 0;
                              argty1$$15 = matchValue$$30[4].head;
                              argty2$$15 = matchValue$$30[4].tail.head;
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
                    } else if (matchValue$$30[3] === "op_GreaterThan") {
                      if (matchValue$$30[4].tail != null) {
                        if (matchValue$$30[4].tail.tail != null) {
                          if (matchValue$$30[4].tail.tail.tail == null) {
                            if (argty2$$11 = matchValue$$30[4].tail.head, (argty1$$11 = matchValue$$30[4].head, (0, _List.forAll)(function predicate$$8(minfo$$6) {
                              return isIntegerTy(g$$31, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$6));
                            }, minfos) ? (IsRelationalType(g$$31, argty1$$11) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$11) : false) ? true : IsRelationalType(g$$31, argty2$$11) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty1$$11) : false : false)) {
                              $target$$68 = 0;
                              argty1$$15 = matchValue$$30[4].head;
                              argty2$$15 = matchValue$$30[4].tail.head;
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
                    } else if (matchValue$$30[3] === "op_GreaterThanOrEqual") {
                      if (matchValue$$30[4].tail != null) {
                        if (matchValue$$30[4].tail.tail != null) {
                          if (matchValue$$30[4].tail.tail.tail == null) {
                            if (argty2$$12 = matchValue$$30[4].tail.head, (argty1$$12 = matchValue$$30[4].head, (0, _List.forAll)(function predicate$$9(minfo$$7) {
                              return isIntegerTy(g$$31, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$7));
                            }, minfos) ? (IsRelationalType(g$$31, argty1$$12) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$12) : false) ? true : IsRelationalType(g$$31, argty2$$12) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty1$$12) : false : false)) {
                              $target$$68 = 0;
                              argty1$$15 = matchValue$$30[4].head;
                              argty2$$15 = matchValue$$30[4].tail.head;
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
                    } else if (matchValue$$30[3] === "op_Equality") {
                      if (matchValue$$30[4].tail != null) {
                        if (matchValue$$30[4].tail.tail != null) {
                          if (matchValue$$30[4].tail.tail.tail == null) {
                            if (argty2$$13 = matchValue$$30[4].tail.head, (argty1$$13 = matchValue$$30[4].head, (0, _List.forAll)(function predicate$$10(minfo$$8) {
                              return isIntegerTy(g$$31, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$8));
                            }, minfos) ? (IsRelationalType(g$$31, argty1$$13) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$13) : false) ? true : IsRelationalType(g$$31, argty2$$13) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty1$$13) : false : false)) {
                              $target$$68 = 0;
                              argty1$$15 = matchValue$$30[4].head;
                              argty2$$15 = matchValue$$30[4].tail.head;
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
                    } else if (matchValue$$30[3] === "op_Inequality") {
                      if (matchValue$$30[4].tail != null) {
                        if (matchValue$$30[4].tail.tail != null) {
                          if (matchValue$$30[4].tail.tail.tail == null) {
                            if (argty2$$14 = matchValue$$30[4].tail.head, (argty1$$14 = matchValue$$30[4].head, (0, _List.forAll)(function predicate$$11(minfo$$9) {
                              return isIntegerTy(g$$31, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$9));
                            }, minfos) ? (IsRelationalType(g$$31, argty1$$14) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$14) : false) ? true : IsRelationalType(g$$31, argty2$$14) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty1$$14) : false : false)) {
                              $target$$68 = 0;
                              argty1$$15 = matchValue$$30[4].head;
                              argty2$$15 = matchValue$$30[4].tail.head;
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
                          return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty2$$15, argty1$$15), function () {
                            return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$31)), function () {
                              return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                            });
                          });
                        }

                      case 1:
                        {
                          var $target$$69, ty$$35;

                          if (matchValue$$30[0].tail == null) {
                            if (matchValue$$30[1].tail != null) {
                              if (matchValue$$30[1].tail.tail == null) {
                                if (matchValue$$30[2]) {
                                  $target$$69 = 1;
                                } else if (matchValue$$30[3] === "get_Zero") {
                                  if (matchValue$$30[4].tail == null) {
                                    if (ty$$34 = matchValue$$30[1].head, IsNumericType(g$$31, ty$$34)) {
                                      $target$$69 = 0;
                                      ty$$35 = matchValue$$30[1].head;
                                    } else {
                                      $target$$69 = 1;
                                    }
                                  } else {
                                    $target$$69 = 1;
                                  }
                                } else {
                                  $target$$69 = 1;
                                }
                              } else {
                                $target$$69 = 1;
                              }
                            } else {
                              $target$$69 = 1;
                            }
                          } else {
                            $target$$69 = 1;
                          }

                          switch ($target$$69) {
                            case 0:
                              {
                                return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, ty$$35), function () {
                                  return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                });
                              }

                            case 1:
                              {
                                var $target$$70, ty$$37;

                                if (matchValue$$30[0].tail == null) {
                                  if (matchValue$$30[1].tail != null) {
                                    if (matchValue$$30[1].tail.tail == null) {
                                      if (matchValue$$30[2]) {
                                        $target$$70 = 1;
                                      } else if (matchValue$$30[3] === "get_One") {
                                        if (matchValue$$30[4].tail == null) {
                                          if (ty$$36 = matchValue$$30[1].head, IsNumericType(g$$31, ty$$36) ? true : isCharTy(g$$31, ty$$36)) {
                                            $target$$70 = 0;
                                            ty$$37 = matchValue$$30[1].head;
                                          } else {
                                            $target$$70 = 1;
                                          }
                                        } else {
                                          $target$$70 = 1;
                                        }
                                      } else {
                                        $target$$70 = 1;
                                      }
                                    } else {
                                      $target$$70 = 1;
                                    }
                                  } else {
                                    $target$$70 = 1;
                                  }
                                } else {
                                  $target$$70 = 1;
                                }

                                switch ($target$$70) {
                                  case 0:
                                    {
                                      return (0, _ErrorLogger.op_PlusPlus)(SolveDimensionlessNumericType(csenv$$24, ndeep$$16, m2$$23, trace$$25, ty$$37), function () {
                                        return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, ty$$37), function () {
                                          return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                        });
                                      });
                                    }

                                  case 1:
                                    {
                                      var $target$$71, argty1$$17, argty2$$17;

                                      if (matchValue$$30[0].tail == null) {
                                        if (matchValue$$30[2]) {
                                          $target$$71 = 1;
                                        } else if (matchValue$$30[3] === "DivideByInt") {
                                          if (matchValue$$30[4].tail != null) {
                                            if (matchValue$$30[4].tail.tail != null) {
                                              if (matchValue$$30[4].tail.tail.tail == null) {
                                                if (argty2$$16 = matchValue$$30[4].tail.head, (argty1$$16 = matchValue$$30[4].head, isFpTy(g$$31, argty1$$16) ? true : isDecimalTy(g$$31, argty1$$16))) {
                                                  $target$$71 = 0;
                                                  argty1$$17 = matchValue$$30[4].head;
                                                  argty2$$17 = matchValue$$30[4].tail.head;
                                                } else {
                                                  $target$$71 = 1;
                                                }
                                              } else {
                                                $target$$71 = 1;
                                              }
                                            } else {
                                              $target$$71 = 1;
                                            }
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
                                            return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty2$$17, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$31)), function () {
                                              return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, argty1$$17), function () {
                                                return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                              });
                                            });
                                          }

                                        case 1:
                                          {
                                            var $target$$72, argty1$$19, ty$$39;

                                            if (matchValue$$30[0].tail == null) {
                                              if (matchValue$$30[1].tail != null) {
                                                if (matchValue$$30[1].tail.tail == null) {
                                                  if (matchValue$$30[2]) {
                                                    if (matchValue$$30[3] === "get_Item") {
                                                      if (matchValue$$30[4].tail != null) {
                                                        if (matchValue$$30[4].tail.tail == null) {
                                                          if (ty$$38 = matchValue$$30[1].head, (argty1$$18 = matchValue$$30[4].head, isStringTy(g$$31, ty$$38))) {
                                                            $target$$72 = 0;
                                                            argty1$$19 = matchValue$$30[4].head;
                                                            ty$$39 = matchValue$$30[1].head;
                                                          } else {
                                                            $target$$72 = 1;
                                                          }
                                                        } else {
                                                          $target$$72 = 1;
                                                        }
                                                      } else {
                                                        $target$$72 = 1;
                                                      }
                                                    } else {
                                                      $target$$72 = 1;
                                                    }
                                                  } else {
                                                    $target$$72 = 1;
                                                  }
                                                } else {
                                                  $target$$72 = 1;
                                                }
                                              } else {
                                                $target$$72 = 1;
                                              }
                                            } else {
                                              $target$$72 = 1;
                                            }

                                            switch ($target$$72) {
                                              case 0:
                                                {
                                                  return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty1$$19, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$31)), function () {
                                                    return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, (0, _TcGlobals.TcGlobals$$get_char_ty)(g$$31)), function () {
                                                      return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                    });
                                                  });
                                                }

                                              case 1:
                                                {
                                                  var $target$$73, argtys$$3, ty$$41;

                                                  if (matchValue$$30[0].tail == null) {
                                                    if (matchValue$$30[1].tail != null) {
                                                      if (matchValue$$30[1].tail.tail == null) {
                                                        if (matchValue$$30[2]) {
                                                          if (matchValue$$30[3] === "get_Item") {
                                                            if (ty$$40 = matchValue$$30[1].head, (0, _TastOps.isArrayTy)(g$$31, ty$$40)) {
                                                              $target$$73 = 0;
                                                              argtys$$3 = matchValue$$30[4];
                                                              ty$$41 = matchValue$$30[1].head;
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
                                                  } else {
                                                    $target$$73 = 1;
                                                  }

                                                  switch ($target$$73) {
                                                    case 0:
                                                      {
                                                        return (0, _ErrorLogger.op_PlusPlus)((0, _TastOps.rankOfArrayTy)(g$$31, ty$$41) !== (0, _List.length)(argtys$$3) ? (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csIndexArgumentMismatch$$Z37302880)((0, _TastOps.rankOfArrayTy)(g$$31, ty$$41), (0, _List.length)(argtys$$3)), m$$15, m2$$23)) : _ErrorLogger.CompleteD, function () {
                                                          return (0, _ErrorLogger.op_PlusPlus)((0, _ErrorLogger.IterateD)(function f$$7(argty) {
                                                            return SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$31));
                                                          }, argtys$$3), function () {
                                                            const ety = (0, _TastOps.destArrayTy)(g$$31, ty$$41);
                                                            return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, ety), function () {
                                                              return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                            });
                                                          });
                                                        });
                                                      }

                                                    case 1:
                                                      {
                                                        var $target$$74, argtys$$5, ty$$43;

                                                        if (matchValue$$30[0].tail == null) {
                                                          if (matchValue$$30[1].tail != null) {
                                                            if (matchValue$$30[1].tail.tail == null) {
                                                              if (matchValue$$30[2]) {
                                                                if (matchValue$$30[3] === "set_Item") {
                                                                  if (ty$$42 = matchValue$$30[1].head, (0, _TastOps.isArrayTy)(g$$31, ty$$42)) {
                                                                    $target$$74 = 0;
                                                                    argtys$$5 = matchValue$$30[4];
                                                                    ty$$43 = matchValue$$30[1].head;
                                                                  } else {
                                                                    $target$$74 = 1;
                                                                  }
                                                                } else {
                                                                  $target$$74 = 1;
                                                                }
                                                              } else {
                                                                $target$$74 = 1;
                                                              }
                                                            } else {
                                                              $target$$74 = 1;
                                                            }
                                                          } else {
                                                            $target$$74 = 1;
                                                          }
                                                        } else {
                                                          $target$$74 = 1;
                                                        }

                                                        switch ($target$$74) {
                                                          case 0:
                                                            {
                                                              return (0, _ErrorLogger.op_PlusPlus)((0, _TastOps.rankOfArrayTy)(g$$31, ty$$43) !== (0, _List.length)(argtys$$5) - 1 ? (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csIndexArgumentMismatch$$Z37302880)((0, _TastOps.rankOfArrayTy)(g$$31, ty$$43), (0, _List.length)(argtys$$5) - 1), m$$15, m2$$23)) : _ErrorLogger.CompleteD, function () {
                                                                const patternInput$$7 = (0, _illib.List$$$frontAndBack)(argtys$$5);
                                                                return (0, _ErrorLogger.op_PlusPlus)((0, _ErrorLogger.IterateD)(function f$$8(argty$$1) {
                                                                  return SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty$$1, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$31));
                                                                }, patternInput$$7[0]), function () {
                                                                  const etys = (0, _TastOps.destArrayTy)(g$$31, ty$$43);
                                                                  return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, patternInput$$7[1], etys), function () {
                                                                    return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                  });
                                                                });
                                                              });
                                                            }

                                                          case 1:
                                                            {
                                                              var $target$$75, argty1$$23, argty2$$21;

                                                              if (matchValue$$30[0].tail == null) {
                                                                if (matchValue$$30[2]) {
                                                                  $target$$75 = 1;
                                                                } else if (matchValue$$30[3] === "op_BitwiseAnd") {
                                                                  if (matchValue$$30[4].tail != null) {
                                                                    if (matchValue$$30[4].tail.tail != null) {
                                                                      if (matchValue$$30[4].tail.tail.tail == null) {
                                                                        if (argty2$$18 = matchValue$$30[4].tail.head, (argty1$$20 = matchValue$$30[4].head, ((isIntegerOrIntegerEnumTy(g$$31, argty1$$20) ? true : (0, _TastOps.isEnumTy)(g$$31, argty1$$20)) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$18) : false) ? true : (isIntegerOrIntegerEnumTy(g$$31, argty2$$18) ? true : (0, _TastOps.isEnumTy)(g$$31, argty2$$18)) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty1$$20) : false)) {
                                                                          $target$$75 = 0;
                                                                          argty1$$23 = matchValue$$30[4].head;
                                                                          argty2$$21 = matchValue$$30[4].tail.head;
                                                                        } else {
                                                                          $target$$75 = 1;
                                                                        }
                                                                      } else {
                                                                        $target$$75 = 1;
                                                                      }
                                                                    } else {
                                                                      $target$$75 = 1;
                                                                    }
                                                                  } else {
                                                                    $target$$75 = 1;
                                                                  }
                                                                } else if (matchValue$$30[3] === "op_BitwiseOr") {
                                                                  if (matchValue$$30[4].tail != null) {
                                                                    if (matchValue$$30[4].tail.tail != null) {
                                                                      if (matchValue$$30[4].tail.tail.tail == null) {
                                                                        if (argty2$$19 = matchValue$$30[4].tail.head, (argty1$$21 = matchValue$$30[4].head, ((isIntegerOrIntegerEnumTy(g$$31, argty1$$21) ? true : (0, _TastOps.isEnumTy)(g$$31, argty1$$21)) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$19) : false) ? true : (isIntegerOrIntegerEnumTy(g$$31, argty2$$19) ? true : (0, _TastOps.isEnumTy)(g$$31, argty2$$19)) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty1$$21) : false)) {
                                                                          $target$$75 = 0;
                                                                          argty1$$23 = matchValue$$30[4].head;
                                                                          argty2$$21 = matchValue$$30[4].tail.head;
                                                                        } else {
                                                                          $target$$75 = 1;
                                                                        }
                                                                      } else {
                                                                        $target$$75 = 1;
                                                                      }
                                                                    } else {
                                                                      $target$$75 = 1;
                                                                    }
                                                                  } else {
                                                                    $target$$75 = 1;
                                                                  }
                                                                } else if (matchValue$$30[3] === "op_ExclusiveOr") {
                                                                  if (matchValue$$30[4].tail != null) {
                                                                    if (matchValue$$30[4].tail.tail != null) {
                                                                      if (matchValue$$30[4].tail.tail.tail == null) {
                                                                        if (argty2$$20 = matchValue$$30[4].tail.head, (argty1$$22 = matchValue$$30[4].head, ((isIntegerOrIntegerEnumTy(g$$31, argty1$$22) ? true : (0, _TastOps.isEnumTy)(g$$31, argty1$$22)) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty2$$20) : false) ? true : (isIntegerOrIntegerEnumTy(g$$31, argty2$$20) ? true : (0, _TastOps.isEnumTy)(g$$31, argty2$$20)) ? permitWeakResolution ? true : !(0, _TastOps.isTyparTy)(g$$31, argty1$$22) : false)) {
                                                                          $target$$75 = 0;
                                                                          argty1$$23 = matchValue$$30[4].head;
                                                                          argty2$$21 = matchValue$$30[4].tail.head;
                                                                        } else {
                                                                          $target$$75 = 1;
                                                                        }
                                                                      } else {
                                                                        $target$$75 = 1;
                                                                      }
                                                                    } else {
                                                                      $target$$75 = 1;
                                                                    }
                                                                  } else {
                                                                    $target$$75 = 1;
                                                                  }
                                                                } else {
                                                                  $target$$75 = 1;
                                                                }
                                                              } else {
                                                                $target$$75 = 1;
                                                              }

                                                              switch ($target$$75) {
                                                                case 0:
                                                                  {
                                                                    return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty2$$21, argty1$$23), function () {
                                                                      return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, argty1$$23), function () {
                                                                        return (0, _ErrorLogger.op_PlusPlus)(SolveDimensionlessNumericType(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty1$$23), function () {
                                                                          return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                        });
                                                                      });
                                                                    });
                                                                  }

                                                                case 1:
                                                                  {
                                                                    var $target$$76, argty1$$26, argty2$$24;

                                                                    if (matchValue$$30[0].tail == null) {
                                                                      if (matchValue$$30[2]) {
                                                                        $target$$76 = 1;
                                                                      } else if (matchValue$$30[3] === "op_LeftShift") {
                                                                        if (matchValue$$30[4].tail != null) {
                                                                          if (matchValue$$30[4].tail.tail != null) {
                                                                            if (matchValue$$30[4].tail.tail.tail == null) {
                                                                              if (argty2$$22 = matchValue$$30[4].tail.head, (argty1$$24 = matchValue$$30[4].head, isIntegerOrIntegerEnumTy(g$$31, argty1$$24))) {
                                                                                $target$$76 = 0;
                                                                                argty1$$26 = matchValue$$30[4].head;
                                                                                argty2$$24 = matchValue$$30[4].tail.head;
                                                                              } else {
                                                                                $target$$76 = 1;
                                                                              }
                                                                            } else {
                                                                              $target$$76 = 1;
                                                                            }
                                                                          } else {
                                                                            $target$$76 = 1;
                                                                          }
                                                                        } else {
                                                                          $target$$76 = 1;
                                                                        }
                                                                      } else if (matchValue$$30[3] === "op_RightShift") {
                                                                        if (matchValue$$30[4].tail != null) {
                                                                          if (matchValue$$30[4].tail.tail != null) {
                                                                            if (matchValue$$30[4].tail.tail.tail == null) {
                                                                              if (argty2$$23 = matchValue$$30[4].tail.head, (argty1$$25 = matchValue$$30[4].head, isIntegerOrIntegerEnumTy(g$$31, argty1$$25))) {
                                                                                $target$$76 = 0;
                                                                                argty1$$26 = matchValue$$30[4].head;
                                                                                argty2$$24 = matchValue$$30[4].tail.head;
                                                                              } else {
                                                                                $target$$76 = 1;
                                                                              }
                                                                            } else {
                                                                              $target$$76 = 1;
                                                                            }
                                                                          } else {
                                                                            $target$$76 = 1;
                                                                          }
                                                                        } else {
                                                                          $target$$76 = 1;
                                                                        }
                                                                      } else {
                                                                        $target$$76 = 1;
                                                                      }
                                                                    } else {
                                                                      $target$$76 = 1;
                                                                    }

                                                                    switch ($target$$76) {
                                                                      case 0:
                                                                        {
                                                                          return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty2$$24, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$31)), function () {
                                                                            return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, argty1$$26), function () {
                                                                              return (0, _ErrorLogger.op_PlusPlus)(SolveDimensionlessNumericType(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty1$$26), function () {
                                                                                return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                              });
                                                                            });
                                                                          });
                                                                        }

                                                                      case 1:
                                                                        {
                                                                          var $target$$77, argty$$3;

                                                                          if (matchValue$$30[2]) {
                                                                            $target$$77 = 1;
                                                                          } else if (matchValue$$30[3] === "op_UnaryPlus") {
                                                                            if (matchValue$$30[4].tail != null) {
                                                                              if (matchValue$$30[4].tail.tail == null) {
                                                                                if (argty$$2 = matchValue$$30[4].head, IsNumericOrIntegralEnumType(g$$31, argty$$2)) {
                                                                                  $target$$77 = 0;
                                                                                  argty$$3 = matchValue$$30[4].head;
                                                                                } else {
                                                                                  $target$$77 = 1;
                                                                                }
                                                                              } else {
                                                                                $target$$77 = 1;
                                                                              }
                                                                            } else {
                                                                              $target$$77 = 1;
                                                                            }
                                                                          } else {
                                                                            $target$$77 = 1;
                                                                          }

                                                                          switch ($target$$77) {
                                                                            case 0:
                                                                              {
                                                                                return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, argty$$3), function () {
                                                                                  return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                                });
                                                                              }

                                                                            case 1:
                                                                              {
                                                                                var $target$$78, argty$$5;

                                                                                if (matchValue$$30[2]) {
                                                                                  $target$$78 = 1;
                                                                                } else if (matchValue$$30[3] === "op_UnaryNegation") {
                                                                                  if (matchValue$$30[4].tail != null) {
                                                                                    if (matchValue$$30[4].tail.tail == null) {
                                                                                      if (argty$$4 = matchValue$$30[4].head, (isSignedIntegerTy(g$$31, argty$$4) ? true : isFpTy(g$$31, argty$$4)) ? true : isDecimalTy(g$$31, argty$$4)) {
                                                                                        $target$$78 = 0;
                                                                                        argty$$5 = matchValue$$30[4].head;
                                                                                      } else {
                                                                                        $target$$78 = 1;
                                                                                      }
                                                                                    } else {
                                                                                      $target$$78 = 1;
                                                                                    }
                                                                                  } else {
                                                                                    $target$$78 = 1;
                                                                                  }
                                                                                } else {
                                                                                  $target$$78 = 1;
                                                                                }

                                                                                switch ($target$$78) {
                                                                                  case 0:
                                                                                    {
                                                                                      return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, argty$$5), function () {
                                                                                        return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                                      });
                                                                                    }

                                                                                  case 1:
                                                                                    {
                                                                                      var $target$$79;

                                                                                      if (matchValue$$30[2]) {
                                                                                        if (matchValue$$30[3] === "get_Sign") {
                                                                                          if (matchValue$$30[4].tail == null) {
                                                                                            if (argty$$6 = (0, _List.head)(tys$$10), (isSignedIntegerTy(g$$31, argty$$6) ? true : isFpTy(g$$31, argty$$6)) ? true : isDecimalTy(g$$31, argty$$6)) {
                                                                                              $target$$79 = 0;
                                                                                            } else {
                                                                                              $target$$79 = 1;
                                                                                            }
                                                                                          } else {
                                                                                            $target$$79 = 1;
                                                                                          }
                                                                                        } else {
                                                                                          $target$$79 = 1;
                                                                                        }
                                                                                      } else {
                                                                                        $target$$79 = 1;
                                                                                      }

                                                                                      switch ($target$$79) {
                                                                                        case 0:
                                                                                          {
                                                                                            return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$31)), function () {
                                                                                              return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                                            });
                                                                                          }

                                                                                        case 1:
                                                                                          {
                                                                                            var $target$$80, argty$$9;

                                                                                            if (matchValue$$30[2]) {
                                                                                              $target$$80 = 1;
                                                                                            } else if (matchValue$$30[3] === "op_LogicalNot") {
                                                                                              if (matchValue$$30[4].tail != null) {
                                                                                                if (matchValue$$30[4].tail.tail == null) {
                                                                                                  if (argty$$7 = matchValue$$30[4].head, isIntegerOrIntegerEnumTy(g$$31, argty$$7)) {
                                                                                                    $target$$80 = 0;
                                                                                                    argty$$9 = matchValue$$30[4].head;
                                                                                                  } else {
                                                                                                    $target$$80 = 1;
                                                                                                  }
                                                                                                } else {
                                                                                                  $target$$80 = 1;
                                                                                                }
                                                                                              } else {
                                                                                                $target$$80 = 1;
                                                                                              }
                                                                                            } else if (matchValue$$30[3] === "op_OnesComplement") {
                                                                                              if (matchValue$$30[4].tail != null) {
                                                                                                if (matchValue$$30[4].tail.tail == null) {
                                                                                                  if (argty$$8 = matchValue$$30[4].head, isIntegerOrIntegerEnumTy(g$$31, argty$$8)) {
                                                                                                    $target$$80 = 0;
                                                                                                    argty$$9 = matchValue$$30[4].head;
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
                                                                                                  return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, argty$$9), function () {
                                                                                                    return (0, _ErrorLogger.op_PlusPlus)(SolveDimensionlessNumericType(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty$$9), function () {
                                                                                                      return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                                                    });
                                                                                                  });
                                                                                                }

                                                                                              case 1:
                                                                                                {
                                                                                                  var $target$$81, argty$$11;

                                                                                                  if (matchValue$$30[2]) {
                                                                                                    $target$$81 = 1;
                                                                                                  } else if (matchValue$$30[3] === "Abs") {
                                                                                                    if (matchValue$$30[4].tail != null) {
                                                                                                      if (matchValue$$30[4].tail.tail == null) {
                                                                                                        if (argty$$10 = matchValue$$30[4].head, (isSignedIntegerTy(g$$31, argty$$10) ? true : isFpTy(g$$31, argty$$10)) ? true : isDecimalTy(g$$31, argty$$10)) {
                                                                                                          $target$$81 = 0;
                                                                                                          argty$$11 = matchValue$$30[4].head;
                                                                                                        } else {
                                                                                                          $target$$81 = 1;
                                                                                                        }
                                                                                                      } else {
                                                                                                        $target$$81 = 1;
                                                                                                      }
                                                                                                    } else {
                                                                                                      $target$$81 = 1;
                                                                                                    }
                                                                                                  } else {
                                                                                                    $target$$81 = 1;
                                                                                                  }

                                                                                                  switch ($target$$81) {
                                                                                                    case 0:
                                                                                                      {
                                                                                                        return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, argty$$11), function () {
                                                                                                          return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                                                        });
                                                                                                      }

                                                                                                    case 1:
                                                                                                      {
                                                                                                        var $target$$82, argty1$$28;

                                                                                                        if (matchValue$$30[2]) {
                                                                                                          $target$$82 = 1;
                                                                                                        } else if (matchValue$$30[3] === "Sqrt") {
                                                                                                          if (matchValue$$30[4].tail != null) {
                                                                                                            if (matchValue$$30[4].tail.tail == null) {
                                                                                                              if (argty1$$27 = matchValue$$30[4].head, isFpTy(g$$31, argty1$$27)) {
                                                                                                                $target$$82 = 0;
                                                                                                                argty1$$28 = matchValue$$30[4].head;
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
                                                                                                              const matchValue$$33 = GetMeasureOfType(g$$31, argty1$$28);

                                                                                                              if (matchValue$$33 == null) {
                                                                                                                return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, argty1$$28), function () {
                                                                                                                  return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                                                                });
                                                                                                              } else {
                                                                                                                const tcref$$4 = matchValue$$33[0];
                                                                                                                const ms1$$5 = freshMeasure();
                                                                                                                return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty1$$28, (0, _TastOps.mkAppTy)(tcref$$4, (0, _Types.L)(new _tast.TType(6, "TType_measure", new _tast.Measure(2, "Prod", ms1$$5, ms1$$5)), (0, _Types.L)()))), function () {
                                                                                                                  return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, (0, _TastOps.mkAppTy)(tcref$$4, (0, _Types.L)(new _tast.TType(6, "TType_measure", ms1$$5), (0, _Types.L)()))), function () {
                                                                                                                    return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                                                                  });
                                                                                                                });
                                                                                                              }
                                                                                                            }

                                                                                                          case 1:
                                                                                                            {
                                                                                                              var $target$$83, argty$$29;

                                                                                                              if (matchValue$$30[2]) {
                                                                                                                $target$$83 = 1;
                                                                                                              } else if (matchValue$$30[3] === "Sin") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$12 = matchValue$$30[4].head, isFpTy(g$$31, argty$$12)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Cos") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$13 = matchValue$$30[4].head, isFpTy(g$$31, argty$$13)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Tan") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$14 = matchValue$$30[4].head, isFpTy(g$$31, argty$$14)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Sinh") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$15 = matchValue$$30[4].head, isFpTy(g$$31, argty$$15)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Cosh") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$16 = matchValue$$30[4].head, isFpTy(g$$31, argty$$16)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Tanh") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$17 = matchValue$$30[4].head, isFpTy(g$$31, argty$$17)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Atan") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$18 = matchValue$$30[4].head, isFpTy(g$$31, argty$$18)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Acos") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$19 = matchValue$$30[4].head, isFpTy(g$$31, argty$$19)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Asin") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$20 = matchValue$$30[4].head, isFpTy(g$$31, argty$$20)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Exp") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$21 = matchValue$$30[4].head, isFpTy(g$$31, argty$$21)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Ceiling") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$22 = matchValue$$30[4].head, isFpTy(g$$31, argty$$22)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Floor") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$23 = matchValue$$30[4].head, isFpTy(g$$31, argty$$23)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Round") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$24 = matchValue$$30[4].head, isFpTy(g$$31, argty$$24)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Truncate") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$25 = matchValue$$30[4].head, isFpTy(g$$31, argty$$25)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Log10") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$26 = matchValue$$30[4].head, isFpTy(g$$31, argty$$26)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Log") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$27 = matchValue$$30[4].head, isFpTy(g$$31, argty$$27)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else if (matchValue$$30[3] === "Sqrt") {
                                                                                                                if (matchValue$$30[4].tail != null) {
                                                                                                                  if (matchValue$$30[4].tail.tail == null) {
                                                                                                                    if (argty$$28 = matchValue$$30[4].head, isFpTy(g$$31, argty$$28)) {
                                                                                                                      $target$$83 = 0;
                                                                                                                      argty$$29 = matchValue$$30[4].head;
                                                                                                                    } else {
                                                                                                                      $target$$83 = 1;
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    $target$$83 = 1;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  $target$$83 = 1;
                                                                                                                }
                                                                                                              } else {
                                                                                                                $target$$83 = 1;
                                                                                                              }

                                                                                                              switch ($target$$83) {
                                                                                                                case 0:
                                                                                                                  {
                                                                                                                    return (0, _ErrorLogger.op_PlusPlus)(SolveDimensionlessNumericType(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty$$29), function () {
                                                                                                                      return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, argty$$29), function () {
                                                                                                                        return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                                                                      });
                                                                                                                    });
                                                                                                                  }

                                                                                                                case 1:
                                                                                                                  {
                                                                                                                    var $target$$84, argty$$31;

                                                                                                                    if (matchValue$$30[2]) {
                                                                                                                      $target$$84 = 1;
                                                                                                                    } else if (matchValue$$30[3] === "op_Explicit") {
                                                                                                                      if (matchValue$$30[4].tail != null) {
                                                                                                                        if (matchValue$$30[4].tail.tail == null) {
                                                                                                                          if (argty$$30 = matchValue$$30[4].head, ((((IsNonDecimalNumericOrIntegralEnumType(g$$31, argty$$30) ? true : isStringTy(g$$31, argty$$30)) ? true : isCharTy(g$$31, argty$$30)) ? IsNonDecimalNumericOrIntegralEnumType(g$$31, rty$$1) ? true : isCharTy(g$$31, rty$$1) : false) ? !(isStringTy(g$$31, argty$$30) ? isNativeIntegerTy(g$$31, rty$$1) : false) : false) ? !(isCharTy(g$$31, argty$$30) ? isDecimalTy(g$$31, rty$$1) : false) : false) {
                                                                                                                            $target$$84 = 0;
                                                                                                                            argty$$31 = matchValue$$30[4].head;
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
                                                                                                                          return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                                                                        }

                                                                                                                      case 1:
                                                                                                                        {
                                                                                                                          var $target$$85, argty$$33;

                                                                                                                          if (matchValue$$30[2]) {
                                                                                                                            $target$$85 = 1;
                                                                                                                          } else if (matchValue$$30[3] === "op_Explicit") {
                                                                                                                            if (matchValue$$30[4].tail != null) {
                                                                                                                              if (matchValue$$30[4].tail.tail == null) {
                                                                                                                                if (argty$$32 = matchValue$$30[4].head, (IsNumericOrIntegralEnumType(g$$31, argty$$32) ? true : isStringTy(g$$31, argty$$32)) ? isDecimalTy(g$$31, rty$$1) : false) {
                                                                                                                                  $target$$85 = 0;
                                                                                                                                  argty$$33 = matchValue$$30[4].head;
                                                                                                                                } else {
                                                                                                                                  $target$$85 = 1;
                                                                                                                                }
                                                                                                                              } else {
                                                                                                                                $target$$85 = 1;
                                                                                                                              }
                                                                                                                            } else {
                                                                                                                              $target$$85 = 1;
                                                                                                                            }
                                                                                                                          } else {
                                                                                                                            $target$$85 = 1;
                                                                                                                          }

                                                                                                                          switch ($target$$85) {
                                                                                                                            case 0:
                                                                                                                              {
                                                                                                                                return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                                                                              }

                                                                                                                            case 1:
                                                                                                                              {
                                                                                                                                var $target$$86, argty1$$30, argty2$$26;

                                                                                                                                if (matchValue$$30[0].tail == null) {
                                                                                                                                  if (matchValue$$30[2]) {
                                                                                                                                    $target$$86 = 1;
                                                                                                                                  } else if (matchValue$$30[3] === "Pow") {
                                                                                                                                    if (matchValue$$30[4].tail != null) {
                                                                                                                                      if (matchValue$$30[4].tail.tail != null) {
                                                                                                                                        if (matchValue$$30[4].tail.tail.tail == null) {
                                                                                                                                          if (argty2$$25 = matchValue$$30[4].tail.head, (argty1$$29 = matchValue$$30[4].head, isFpTy(g$$31, argty1$$29))) {
                                                                                                                                            $target$$86 = 0;
                                                                                                                                            argty1$$30 = matchValue$$30[4].head;
                                                                                                                                            argty2$$26 = matchValue$$30[4].tail.head;
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
                                                                                                                                      return (0, _ErrorLogger.op_PlusPlus)(SolveDimensionlessNumericType(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty1$$30), function () {
                                                                                                                                        return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty2$$26, argty1$$30), function () {
                                                                                                                                          return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, argty1$$30), function () {
                                                                                                                                            return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                                                                                          });
                                                                                                                                        });
                                                                                                                                      });
                                                                                                                                    }

                                                                                                                                  case 1:
                                                                                                                                    {
                                                                                                                                      var $target$$87, argty1$$32, argty2$$28;

                                                                                                                                      if (matchValue$$30[2]) {
                                                                                                                                        $target$$87 = 1;
                                                                                                                                      } else if (matchValue$$30[3] === "Atan2") {
                                                                                                                                        if (matchValue$$30[4].tail != null) {
                                                                                                                                          if (matchValue$$30[4].tail.tail != null) {
                                                                                                                                            if (matchValue$$30[4].tail.tail.tail == null) {
                                                                                                                                              if (argty2$$27 = matchValue$$30[4].tail.head, (argty1$$31 = matchValue$$30[4].head, isFpTy(g$$31, argty1$$31))) {
                                                                                                                                                $target$$87 = 0;
                                                                                                                                                argty1$$32 = matchValue$$30[4].head;
                                                                                                                                                argty2$$28 = matchValue$$30[4].tail.head;
                                                                                                                                              } else {
                                                                                                                                                $target$$87 = 1;
                                                                                                                                              }
                                                                                                                                            } else {
                                                                                                                                              $target$$87 = 1;
                                                                                                                                            }
                                                                                                                                          } else {
                                                                                                                                            $target$$87 = 1;
                                                                                                                                          }
                                                                                                                                        } else {
                                                                                                                                          $target$$87 = 1;
                                                                                                                                        }
                                                                                                                                      } else {
                                                                                                                                        $target$$87 = 1;
                                                                                                                                      }

                                                                                                                                      switch ($target$$87) {
                                                                                                                                        case 0:
                                                                                                                                          {
                                                                                                                                            return (0, _ErrorLogger.op_PlusPlus)((0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, argty2$$28, argty1$$32), function () {
                                                                                                                                              const matchValue$$34 = GetMeasureOfType(g$$31, argty1$$32);

                                                                                                                                              if (matchValue$$34 != null) {
                                                                                                                                                const tcref$$5 = matchValue$$34[0];
                                                                                                                                                return SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, (0, _TastOps.mkAppTy)(tcref$$5, (0, _Types.L)(new _tast.TType(6, "TType_measure", new _tast.Measure(4, "One")), (0, _Types.L)())));
                                                                                                                                              } else {
                                                                                                                                                return SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, argty1$$32);
                                                                                                                                              }
                                                                                                                                            }), function () {
                                                                                                                                              return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(1, "TTraitBuiltIn"));
                                                                                                                                            });
                                                                                                                                          }

                                                                                                                                        case 1:
                                                                                                                                          {
                                                                                                                                            let recdPropSearch;
                                                                                                                                            const isGetProp = (0, _String.startsWith)(nm, "get_", 4);
                                                                                                                                            const isSetProp = (0, _String.startsWith)(nm, "set_", 4);

                                                                                                                                            if ((argtys$$1.tail == null ? isGetProp : false) ? true : isSetProp) {
                                                                                                                                              const propName = nm.slice(4, nm.length);
                                                                                                                                              const props = (0, _List.choose)(function chooser$$1(ty$$44) {
                                                                                                                                                var rfinfo;
                                                                                                                                                const matchValue$$35 = (0, _InfoReader.TryFindIntrinsicNamedItemOfType)(ConstraintSolverEnv$$get_InfoReader(csenv$$24), propName, new _AccessibilityLogic.AccessorDomain(1, "AccessibleFromEverywhere"), new _InfoReader.FindMemberFlag(0, "IgnoreOverrides"), m$$15, ty$$44);
                                                                                                                                                var $target$$88, rfinfo$$1;

                                                                                                                                                if (matchValue$$35 != null) {
                                                                                                                                                  if (matchValue$$35.tag === 2) {
                                                                                                                                                    if (rfinfo = matchValue$$35.fields[0], ((((isGetProp ? true : (0, _tast.RecdField$$get_IsMutable)((0, _infos.RecdFieldInfo$$get_RecdField)(rfinfo))) ? (0, _infos.RecdFieldInfo$$get_IsStatic)(rfinfo) === !memFlags.IsInstance : false) ? (0, _AccessibilityLogic.IsRecdFieldAccessible)(amap$$3, m$$15, new _AccessibilityLogic.AccessorDomain(1, "AccessibleFromEverywhere"), (0, _infos.RecdFieldInfo$$get_RecdFieldRef)(rfinfo)) : false) ? !((0, _infos.RecdFieldInfo$$get_LiteralValue)(rfinfo) != null) : false) ? !(0, _tast.RecdField$$get_IsCompilerGenerated)((0, _infos.RecdFieldInfo$$get_RecdField)(rfinfo)) : false) {
                                                                                                                                                      $target$$88 = 0;
                                                                                                                                                      rfinfo$$1 = matchValue$$35.fields[0];
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
                                                                                                                                                      return [rfinfo$$1, isSetProp];
                                                                                                                                                    }

                                                                                                                                                  case 1:
                                                                                                                                                    {
                                                                                                                                                      return null;
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                              }, tys$$10);
                                                                                                                                              var $target$$89, prop;

                                                                                                                                              if (props.tail != null) {
                                                                                                                                                if (props.tail.tail == null) {
                                                                                                                                                  $target$$89 = 0;
                                                                                                                                                  prop = props.head;
                                                                                                                                                } else {
                                                                                                                                                  $target$$89 = 1;
                                                                                                                                                }
                                                                                                                                              } else {
                                                                                                                                                $target$$89 = 1;
                                                                                                                                              }

                                                                                                                                              switch ($target$$89) {
                                                                                                                                                case 0:
                                                                                                                                                  {
                                                                                                                                                    recdPropSearch = prop;
                                                                                                                                                    break;
                                                                                                                                                  }

                                                                                                                                                case 1:
                                                                                                                                                  {
                                                                                                                                                    recdPropSearch = null;
                                                                                                                                                    break;
                                                                                                                                                  }
                                                                                                                                              }
                                                                                                                                            } else {
                                                                                                                                              recdPropSearch = null;
                                                                                                                                            }

                                                                                                                                            const matchValue$$36 = [minfos, recdPropSearch];
                                                                                                                                            var $target$$90;

                                                                                                                                            if (matchValue$$36[0].tail == null) {
                                                                                                                                              if (matchValue$$36[1] == null) {
                                                                                                                                                if (!(0, _List.exists)(function predicate$$12(arg10$0040$$10) {
                                                                                                                                                  return (0, _TastOps.isAnyParTy)(g$$31, arg10$0040$$10);
                                                                                                                                                }, tys$$10)) {
                                                                                                                                                  $target$$90 = 0;
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
                                                                                                                                                  if ((0, _List.exists)(function predicate$$13(arg10$0040$$11) {
                                                                                                                                                    return (0, _TastOps.isFunTy)(g$$31, arg10$0040$$11);
                                                                                                                                                  }, tys$$10)) {
                                                                                                                                                    return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csExpectTypeWithOperatorButGivenFunction$$Z721C83C5)((0, _PrettyNaming.DecompileOpName)(nm)), m$$15, m2$$23));
                                                                                                                                                  } else if ((0, _List.exists)(function predicate$$14(arg10$0040$$12) {
                                                                                                                                                    return (0, _TastOps.isAnyTupleTy)(g$$31, arg10$0040$$12);
                                                                                                                                                  }, tys$$10)) {
                                                                                                                                                    return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csExpectTypeWithOperatorButGivenTuple$$Z721C83C5)((0, _PrettyNaming.DecompileOpName)(nm)), m$$15, m2$$23));
                                                                                                                                                  } else {
                                                                                                                                                    const matchValue$$37 = [nm, argtys$$1];
                                                                                                                                                    var $target$$91, argty$$34;

                                                                                                                                                    if (matchValue$$37[0] === "op_Explicit") {
                                                                                                                                                      if (matchValue$$37[1].tail != null) {
                                                                                                                                                        if (matchValue$$37[1].tail.tail == null) {
                                                                                                                                                          $target$$91 = 0;
                                                                                                                                                          argty$$34 = matchValue$$37[1].head;
                                                                                                                                                        } else {
                                                                                                                                                          $target$$91 = 1;
                                                                                                                                                        }
                                                                                                                                                      } else {
                                                                                                                                                        $target$$91 = 1;
                                                                                                                                                      }
                                                                                                                                                    } else {
                                                                                                                                                      $target$$91 = 1;
                                                                                                                                                    }

                                                                                                                                                    switch ($target$$91) {
                                                                                                                                                      case 0:
                                                                                                                                                        {
                                                                                                                                                          return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeDoesNotSupportConversion$$Z384F8060)((0, _NicePrint.prettyStringOfTy)(denv$$5, argty$$34), (0, _NicePrint.prettyStringOfTy)(denv$$5, rty$$1)), m$$15, m2$$23));
                                                                                                                                                        }

                                                                                                                                                      case 1:
                                                                                                                                                        {
                                                                                                                                                          const tyString = tys$$10.tail != null ? tys$$10.tail.tail == null ? (0, _NicePrint.minimalStringOfType)(denv$$5, tys$$10.head) : (0, _String.join)(", ", ...(0, _List.map)(function mapping$$3(ty$$46) {
                                                                                                                                                            return (0, _NicePrint.minimalStringOfType)(denv$$5, ty$$46);
                                                                                                                                                          }, tys$$10)) : (0, _String.join)(", ", ...(0, _List.map)(function mapping$$3(ty$$46) {
                                                                                                                                                            return (0, _NicePrint.minimalStringOfType)(denv$$5, ty$$46);
                                                                                                                                                          }, tys$$10));
                                                                                                                                                          const opName = (0, _PrettyNaming.DecompileOpName)(nm);
                                                                                                                                                          const err$$2 = opName === "?>=" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "?>" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "?<=" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "?<" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "?=" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "?<>" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === ">=?" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === ">?" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "<=?" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "<?" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "=?" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "<>?" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "?>=?" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "?>?" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "?<=?" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "?<?" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "?=?" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : opName === "?<>?" ? (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperatorNullable$$Z384F8060)(tyString, opName) : (0, _List.length)(tys$$10) === 1 ? (0, _FSComp.SR$$$csTypeDoesNotSupportOperator$$Z384F8060)(tyString, opName) : (0, _FSComp.SR$$$csTypesDoNotSupportOperator$$Z384F8060)(tyString, opName);
                                                                                                                                                          return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError(err$$2, m$$15, m2$$23));
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }

                                                                                                                                              case 1:
                                                                                                                                                {
                                                                                                                                                  const dummyExpr = (0, _TastOps.mkUnit)(g$$31, m$$15);
                                                                                                                                                  const calledMethGroup$$1 = (0, _List.choose)(function chooser$$2(minfo$$10) {
                                                                                                                                                    if ((0, _infos.MethInfo$$get_IsCurried)(minfo$$10)) {
                                                                                                                                                      return null;
                                                                                                                                                    } else {
                                                                                                                                                      const callerArgs = (0, _List.map)(function mapping$$4(argty$$35) {
                                                                                                                                                        return new _MethodCalls.CallerArg$00601(0, "CallerArg", argty$$35, m$$15, false, dummyExpr);
                                                                                                                                                      }, argtys$$1);
                                                                                                                                                      const minst = FreshenMethInfo(m$$15, minfo$$10);
                                                                                                                                                      const objtys = (0, _infos.MethInfo$$GetObjArgTypes$$Z5D984B3C)(minfo$$10, amap$$3, m$$15, minst);
                                                                                                                                                      return (0, _MethodCalls.CalledMeth$00601$$$$002Ector$$Z3D1385F)(ConstraintSolverEnv$$get_InfoReader(csenv$$24), null, false, FreshenMethInfo, m$$15, new _AccessibilityLogic.AccessorDomain(1, "AccessibleFromEverywhere"), minfo$$10, minst, minst, null, objtys, (0, _Types.L)([callerArgs, (0, _Types.L)()], (0, _Types.L)()), false, false, null);
                                                                                                                                                    }
                                                                                                                                                  }, minfos);
                                                                                                                                                  const patternInput$$8 = OptionalTrace$$CollectThenUndoOrCommit(trace$$25, function (tupledArg$$12) {
                                                                                                                                                    return tupledArg$$12[0] != null;
                                                                                                                                                  }, function (trace$$26) {
                                                                                                                                                    return ResolveOverloading(csenv$$24, new OptionalTrace(1, "WithTrace", trace$$26), nm, ndeep$$16, traitInfo$$3, 0, 0, new _AccessibilityLogic.AccessorDomain(1, "AccessibleFromEverywhere"), calledMethGroup$$1, false, rty$$1);
                                                                                                                                                  });
                                                                                                                                                  const matchValue$$38 = [recdPropSearch, patternInput$$8[0]];
                                                                                                                                                  var $target$$92, isSetProp$$1, rfinfo$$2, calledMeth$$1;

                                                                                                                                                  if (matchValue$$38[0] == null) {
                                                                                                                                                    if (matchValue$$38[1] != null) {
                                                                                                                                                      $target$$92 = 1;
                                                                                                                                                      calledMeth$$1 = matchValue$$38[1];
                                                                                                                                                    } else {
                                                                                                                                                      $target$$92 = 2;
                                                                                                                                                    }
                                                                                                                                                  } else if (matchValue$$38[1] == null) {
                                                                                                                                                    $target$$92 = 0;
                                                                                                                                                    isSetProp$$1 = matchValue$$38[0][1];
                                                                                                                                                    rfinfo$$2 = matchValue$$38[0][0];
                                                                                                                                                  } else {
                                                                                                                                                    $target$$92 = 2;
                                                                                                                                                  }

                                                                                                                                                  switch ($target$$92) {
                                                                                                                                                    case 0:
                                                                                                                                                      {
                                                                                                                                                        const rty2$$1 = isSetProp$$1 ? (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$31) : (0, _infos.RecdFieldInfo$$get_FieldType)(rfinfo$$2);
                                                                                                                                                        return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$24, ndeep$$16, m2$$23, trace$$25, rty$$1, rty2$$1), function () {
                                                                                                                                                          return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(3, "TTraitSolvedRecdProp", rfinfo$$2, isSetProp$$1));
                                                                                                                                                        });
                                                                                                                                                      }

                                                                                                                                                    case 1:
                                                                                                                                                      {
                                                                                                                                                        const minfo$$11 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(calledMeth$$1);
                                                                                                                                                        return (0, _ErrorLogger.op_PlusPlus)(patternInput$$8[1], function () {
                                                                                                                                                          const isInstance = (0, _infos.MethInfo$$get_IsInstance)(minfo$$11);
                                                                                                                                                          return isInstance !== memFlags.IsInstance ? isInstance ? (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csMethodFoundButIsNotStatic$$30230F9B)((0, _NicePrint.minimalStringOfType)(denv$$5, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$11)), (0, _PrettyNaming.DecompileOpName)(nm), nm), m$$15, m2$$23)) : (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csMethodFoundButIsStatic$$30230F9B)((0, _NicePrint.minimalStringOfType)(denv$$5, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$11)), (0, _PrettyNaming.DecompileOpName)(nm), nm), m$$15, m2$$23)) : (0, _ErrorLogger.op_PlusPlus)((0, _AttributeChecking.CheckMethInfoAttributes)(g$$31, m$$15, null, minfo$$11), function () {
                                                                                                                                                            return (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(2, "TTraitSolved", minfo$$11, (0, _MethodCalls.CalledMeth$00601$$get_CalledTyArgs)(calledMeth$$1)));
                                                                                                                                                          });
                                                                                                                                                        });
                                                                                                                                                      }

                                                                                                                                                    case 2:
                                                                                                                                                      {
                                                                                                                                                        const support = GetSupportOfMemberConstraint(csenv$$24, traitInfo$$3);
                                                                                                                                                        const frees = GetFreeTyparsOfMemberConstraint(csenv$$24, traitInfo$$3);
                                                                                                                                                        return (0, _ErrorLogger.op_PlusPlus)(((permitWeakResolution ? support.tail == null : false) ? true : frees.tail == null) ? patternInput$$8[1] : AddMemberConstraint(csenv$$24, ndeep$$16, m2$$23, trace$$25, traitInfo$$3, support, frees), function () {
                                                                                                                                                          return patternInput$$8[1].tag === 1 ? patternInput$$8[1].fields[1] instanceof UnresolvedOverloading ? (!ignoreUnresolvedOverload ? !(nm === "op_Explicit" ? true : nm === "op_Implicit") : false) ? (0, _ErrorLogger.ErrorD)(new LocallyAbortOperationThatFailsToResolveOverload()) : (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(0, "TTraitUnsolved")) : (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(0, "TTraitUnsolved")) : (0, _ErrorLogger.ResultD)(new TraitConstraintSolution(0, "TTraitUnsolved"));
                                                                                                                                                        });
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
      }), function (res$$3) {
        return RecordMemberConstraintSolution(csenv$$24.SolverState, m$$15, trace$$25, traitInfo$$3, res$$3);
      });
    });
  }
}

function RecordMemberConstraintSolution(css$$1, m$$16, trace$$27, traitInfo$$4, res$$4) {
  switch (res$$4.tag) {
    case 2:
      {
        const minst$$1 = res$$4.fields[1];
        const minfo$$12 = res$$4.fields[0];
        const sln$$1 = MemberConstraintSolutionOfMethInfo(css$$1, m$$16, minfo$$12, minst$$1);
        TransactMemberConstraintSolution(traitInfo$$4, trace$$27, sln$$1);
        return (0, _ErrorLogger.ResultD)(true);
      }

    case 1:
      {
        TransactMemberConstraintSolution(traitInfo$$4, trace$$27, new _tast.TraitConstraintSln(4, "BuiltInSln"));
        return (0, _ErrorLogger.ResultD)(true);
      }

    case 3:
      {
        const rfinfo$$3 = res$$4.fields[0];
        const isSetProp$$2 = res$$4.fields[1];
        const sln$$2 = MemberConstraintSolutionOfRecdFieldInfo(rfinfo$$3, isSetProp$$2);
        TransactMemberConstraintSolution(traitInfo$$4, trace$$27, sln$$2);
        return (0, _ErrorLogger.ResultD)(true);
      }

    default:
      {
        return (0, _ErrorLogger.ResultD)(false);
      }
  }
}

function MemberConstraintSolutionOfMethInfo(css$$2, m$$17, minfo$$13, minst$$2) {
  css$$2;

  switch (minfo$$13.tag) {
    case 0:
      {
        const vref = minfo$$13.fields[2];
        const ty$$47 = minfo$$13.fields[1];
        return new _tast.TraitConstraintSln(0, "FSMethSln", ty$$47, vref, minst$$2);
      }

    case 2:
      {
        return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("the default struct constructor was the unexpected solution to a trait constraint", m$$17));
      }

    default:
      {
        const ilMeth = minfo$$13.fields[1];
        const mref = (0, _il.mkRefToILMethod)((0, _tast.EntityRef$$get_CompiledRepresentationForNamedType)((0, _infos.ILMethInfo$$get_DeclaringTyconRef)(ilMeth)), (0, _infos.ILMethInfo$$get_RawMetadata)(ilMeth));
        const iltref = (0, _Option.defaultArg)((0, _infos.ILMethInfo$$get_ILExtensionMethodDeclaringTyconRef)(ilMeth), null, function mapping$$5(tcref$$6) {
          return (0, _tast.EntityRef$$get_CompiledRepresentationForNamedType)(tcref$$6);
        });
        return new _tast.TraitConstraintSln(2, "ILMethSln", (0, _infos.ILMethInfo$$get_ApparentEnclosingType)(ilMeth), iltref, mref, minst$$2);
      }
  }
}

function MemberConstraintSolutionOfRecdFieldInfo(rfinfo$$4, isSet) {
  return new _tast.TraitConstraintSln(1, "FSRecdFieldSln", (0, _infos.RecdFieldInfo$$get_TypeInst)(rfinfo$$4), (0, _infos.RecdFieldInfo$$get_RecdFieldRef)(rfinfo$$4), isSet);
}

function TransactMemberConstraintSolution(traitInfo$$5, trace$$28, sln$$3) {
  const prev = (0, _tast.TraitConstraintInfo$$get_Solution)(traitInfo$$5);
  OptionalTrace$$Exec(trace$$28, function () {
    (0, _tast.TraitConstraintInfo$$set_Solution$$762D8F45)(traitInfo$$5, sln$$3);
  }, function () {
    (0, _tast.TraitConstraintInfo$$set_Solution$$762D8F45)(traitInfo$$5, prev);
  });
}

function GetRelevantMethodsForTrait(csenv$$25, permitWeakResolution$$1, nm$$1, _arg2$$2) {
  const traitInfo$$6 = _arg2$$2;
  const tys$$11 = traitInfo$$6.fields[0];
  const soln = traitInfo$$6.fields[5];
  const rty$$2 = traitInfo$$6.fields[4];
  const memFlags$$1 = traitInfo$$6.fields[2];
  const argtys$$7 = traitInfo$$6.fields[3];
  let results;

  if (permitWeakResolution$$1 ? true : GetSupportOfMemberConstraint(csenv$$25, traitInfo$$6).tail == null) {
    const m$$18 = csenv$$25.m;
    const minfos$$1 = memFlags$$1.MemberKind.tag === 1 ? (0, _List.map)(function mapping$$6(ty$$48) {
      return (0, _InfoReader.GetIntrinsicConstructorInfosOfType)(csenv$$25.SolverState.InfoReader, m$$18, ty$$48);
    }, tys$$11) : (0, _List.map)(function mapping$$7(ty$$49) {
      return (0, _InfoReader.GetIntrinsicMethInfosOfType)(csenv$$25.SolverState.InfoReader, nm$$1, new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode"), new _infos.AllowMultiIntfInstantiations(0, "Yes"), new _InfoReader.FindMemberFlag(0, "IgnoreOverrides"), m$$18, ty$$49);
    }, tys$$11);
    const minfos$$2 = (0, _List.reduce)(function (l1$$13, l2$$13) {
      return (0, _lib.ListSet$$$unionFavourLeft)(_infos.MethInfo$$$MethInfosUseIdenticalDefinitions, l1$$13, l2$$13);
    }, minfos$$1);
    results = minfos$$2;
  } else {
    results = (0, _Types.L)();
  }

  if (nm$$1 === "op_Explicit") {
    return (0, _List.append)(results, GetRelevantMethodsForTrait(csenv$$25, permitWeakResolution$$1, "op_Implicit", new _tast.TraitConstraintInfo(0, "TTrait", tys$$11, "op_Implicit", memFlags$$1, argtys$$7, rty$$2, soln)));
  } else {
    return results;
  }
}

function GetSupportOfMemberConstraint(csenv$$26, _arg3$$1) {
  const tys$$12 = _arg3$$1.fields[0];
  return (0, _List.choose)(function chooser$$3(arg10$0040$$14) {
    return (0, _TastOps.tryAnyParTy)(ConstraintSolverEnv$$get_g(csenv$$26), arg10$0040$$14);
  }, tys$$12);
}

function GetFreeTyparsOfMemberConstraint(csenv$$27, _arg4) {
  const tys$$13 = _arg4.fields[0];
  const rty$$3 = _arg4.fields[4];
  const argtys$$8 = _arg4.fields[3];
  return (0, _TastOps.freeInTypesLeftToRightSkippingConstraints)(ConstraintSolverEnv$$get_g(csenv$$27), (0, _List.append)(tys$$13, (0, _List.append)(argtys$$8, (0, _List.ofArray)((0, _Option.defaultArg)(rty$$3, [], function ($x$$3) {
    return [$x$$3];
  })))));
}

function SolveRelevantMemberConstraints(csenv$$28, ndeep$$17, permitWeakResolution$$2, trace$$29, tps$$1) {
  return (0, _ErrorLogger.RepeatWhileD)(ndeep$$17, function (ndeep$$18) {
    return (0, _ErrorLogger.AtLeastOneD)(function f$$10(tp$$3) {
      const ty$$50 = (0, _tast.mkTyparTy)(tp$$3);
      const matchValue$$40 = (0, _TastOps.tryAnyParTy)(ConstraintSolverEnv$$get_g(csenv$$28), ty$$50);

      if (matchValue$$40 == null) {
        return (0, _ErrorLogger.ResultD)(false);
      } else {
        const tp$$4 = matchValue$$40;
        return SolveRelevantMemberConstraintsForTypar(csenv$$28, ndeep$$18, permitWeakResolution$$2, trace$$29, tp$$4);
      }
    }, tps$$1);
  });
}

function SolveRelevantMemberConstraintsForTypar(csenv$$29, ndeep$$19, permitWeakResolution$$3, trace$$30, tp$$5) {
  const cxst = csenv$$29.SolverState.ExtraCxs;
  const tpn = (0, _tast.Typar$$get_Stamp)(tp$$5);
  const cxs = (0, _HashMultiMap.HashMultiMap$00602$$FindAll$$2B595)(cxst, tpn);

  if (cxs.tail == null) {
    return (0, _ErrorLogger.ResultD)(false);
  } else {
    OptionalTrace$$Exec(trace$$30, function () {
      (0, _List.iterate)(function action$$4(_arg4$$1) {
        (0, _HashMultiMap.HashMultiMap$00602$$Remove$$2B595)(cxst, tpn);
      }, cxs);
    }, function () {
      (0, _List.iterate)(function action$$5(cx) {
        (0, _HashMultiMap.HashMultiMap$00602$$Add$$5BDDA1)(cxst, tpn, cx);
      }, cxs);
    });
    return (0, _ErrorLogger.AtLeastOneD)(function f$$11(tupledArg$$13) {
      const csenv$$30 = new ConstraintSolverEnv(csenv$$29.SolverState, csenv$$29.eContextInfo, csenv$$29.MatchingOnly, tupledArg$$13[1], csenv$$29.EquivEnv, csenv$$29.DisplayEnv);
      return SolveMemberConstraint(csenv$$30, true, permitWeakResolution$$3, ndeep$$19 + 1, tupledArg$$13[1], trace$$30, tupledArg$$13[0]);
    }, cxs);
  }
}

function CanonicalizeRelevantMemberConstraints(csenv$$31, ndeep$$20, trace$$31, tps$$2) {
  return SolveRelevantMemberConstraints(csenv$$31, ndeep$$20, true, trace$$31, tps$$2);
}

function AddMemberConstraint(csenv$$32, ndeep$$21, m2$$25, trace$$32, traitInfo$$8, support$$1, frees$$1) {
  const g$$32 = ConstraintSolverEnv$$get_g(csenv$$32);
  const aenv$$4 = csenv$$32.EquivEnv;
  const cxst$$1 = csenv$$32.SolverState.ExtraCxs;
  (0, _List.iterate)(function action$$6(tp$$6) {
    const tpn$$1 = (0, _tast.Typar$$get_Stamp)(tp$$6);
    const cxs$$1 = (0, _HashMultiMap.HashMultiMap$00602$$FindAll$$2B595)(cxst$$1, tpn$$1);

    if (!(0, _List.exists)(function predicate$$15(tupledArg$$14) {
      return (0, _TastOps.traitsAEquiv)(g$$32, aenv$$4, traitInfo$$8, tupledArg$$14[0]);
    }, cxs$$1)) {
      OptionalTrace$$Exec(trace$$32, function () {
        (0, _HashMultiMap.HashMultiMap$00602$$Add$$5BDDA1)(csenv$$32.SolverState.ExtraCxs, tpn$$1, [traitInfo$$8, m2$$25]);
      }, function () {
        (0, _HashMultiMap.HashMultiMap$00602$$Remove$$2B595)(csenv$$32.SolverState.ExtraCxs, tpn$$1);
      });
    }
  }, frees$$1);
  return (0, _ErrorLogger.IterateD)(function f$$12(tp$$7) {
    return AddConstraint(csenv$$32, ndeep$$21, m2$$25, trace$$32, tp$$7, new _tast.TyparConstraint(3, "MayResolveMember", traitInfo$$8, m2$$25));
  }, support$$1);
}

function AddConstraint(csenv$$33, ndeep$$22, m2$$26, trace$$33, tp$$8, newConstraint) {
  var enforceMutualConsistency;
  const g$$33 = ConstraintSolverEnv$$get_g(csenv$$33);
  const aenv$$5 = csenv$$33.EquivEnv;
  const amap$$4 = ConstraintSolverEnv$$get_amap(csenv$$33);
  const denv$$6 = csenv$$33.DisplayEnv;
  const m$$19 = csenv$$33.m;

  const consistent = function consistent(tpc1, tpc2) {
    var tys2, tys1, rty2$$2, rty1$$1, nm2, nm1, memFlags2, memFlags1, argtys2, argtys1;
    const matchValue$$41 = [tpc1, tpc2];
    var $target$$93, argtys1$$1, argtys2$$1, memFlags1$$1, memFlags2$$1, nm1$$1, nm2$$1, rty1$$2, rty2$$3, tys1$$1, tys2$$1;

    if (matchValue$$41[0].tag === 3) {
      if (matchValue$$41[1].tag === 3) {
        if (tys2 = matchValue$$41[1].fields[0].fields[0], (tys1 = matchValue$$41[0].fields[0].fields[0], (rty2$$2 = matchValue$$41[1].fields[0].fields[4], (rty1$$1 = matchValue$$41[0].fields[0].fields[4], (nm2 = matchValue$$41[1].fields[0].fields[1], (nm1 = matchValue$$41[0].fields[0].fields[1], (memFlags2 = matchValue$$41[1].fields[0].fields[2], (memFlags1 = matchValue$$41[0].fields[0].fields[2], (argtys2 = matchValue$$41[1].fields[0].fields[3], (argtys1 = matchValue$$41[0].fields[0].fields[3], ((((0, _Util.equals)(memFlags1, memFlags2) ? nm1 === nm2 : false) ? !(nm1 === "op_Explicit" ? true : nm1 === "op_Implicit") : false) ? (0, _List.length)(argtys1) === (0, _List.length)(argtys2) : false) ? (0, _illib.List$$$lengthsEqAndForall2)(function (arg10$0040$$15, arg20$0040$$5) {
          return (0, _TastOps.typeEquiv)(g$$33, arg10$0040$$15, arg20$0040$$5);
        }, tys1, tys2) : false)))))))))) {
          $target$$93 = 0;
          argtys1$$1 = matchValue$$41[0].fields[0].fields[3];
          argtys2$$1 = matchValue$$41[1].fields[0].fields[3];
          memFlags1$$1 = matchValue$$41[0].fields[0].fields[2];
          memFlags2$$1 = matchValue$$41[1].fields[0].fields[2];
          nm1$$1 = matchValue$$41[0].fields[0].fields[1];
          nm2$$1 = matchValue$$41[1].fields[0].fields[1];
          rty1$$2 = matchValue$$41[0].fields[0].fields[4];
          rty2$$3 = matchValue$$41[1].fields[0].fields[4];
          tys1$$1 = matchValue$$41[0].fields[0].fields[0];
          tys2$$1 = matchValue$$41[1].fields[0].fields[0];
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
          const rty1$$3 = (0, _TastOps.GetFSharpViewOfReturnType)(g$$33, rty1$$2);
          const rty2$$4 = (0, _TastOps.GetFSharpViewOfReturnType)(g$$33, rty2$$3);
          return (0, _ErrorLogger.op_PlusPlus)((0, _ErrorLogger.Iterate2D)(function (arg40$0040, arg50$0040) {
            return SolveTypeEqualsTypeKeepAbbrevs(csenv$$33, ndeep$$22, m2$$26, trace$$33, arg40$0040, arg50$0040);
          }, argtys1$$1, argtys2$$1), function () {
            return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$33, ndeep$$22, m2$$26, trace$$33, rty1$$3, rty2$$4), function () {
              return _ErrorLogger.CompleteD;
            });
          });
        }

      case 1:
        {
          var $target$$94, ty1$$9, ty2$$7, m2$$27, u1, u2, aty1, aty2, bty1, bty2, m2$$28;

          if (matchValue$$41[0].tag === 0) {
            if (matchValue$$41[1].tag === 0) {
              $target$$94 = 0;
              ty1$$9 = matchValue$$41[0].fields[0];
              ty2$$7 = matchValue$$41[1].fields[0];
            } else {
              $target$$94 = 5;
            }
          } else if (matchValue$$41[0].tag === 8) {
            if (matchValue$$41[1].tag === 8) {
              $target$$94 = 1;
              m2$$27 = matchValue$$41[1].fields[1];
              u1 = matchValue$$41[0].fields[0];
              u2 = matchValue$$41[1].fields[0];
            } else {
              $target$$94 = 5;
            }
          } else if (matchValue$$41[0].tag === 11) {
            if (matchValue$$41[1].tag === 11) {
              $target$$94 = 2;
              aty1 = matchValue$$41[0].fields[0];
              aty2 = matchValue$$41[1].fields[0];
              bty1 = matchValue$$41[0].fields[1];
              bty2 = matchValue$$41[1].fields[1];
              m2$$28 = matchValue$$41[1].fields[2];
            } else if (matchValue$$41[1].tag === 9) {
              $target$$94 = 3;
            } else {
              $target$$94 = 5;
            }
          } else if (matchValue$$41[0].tag === 9) {
            if (matchValue$$41[1].tag === 11) {
              $target$$94 = 3;
            } else if (matchValue$$41[1].tag === 9) {
              $target$$94 = 4;
            } else {
              $target$$94 = 5;
            }
          } else if (matchValue$$41[0].tag === 4) {
            if (matchValue$$41[1].tag === 5) {
              $target$$94 = 3;
            } else if (matchValue$$41[1].tag === 4) {
              $target$$94 = 4;
            } else {
              $target$$94 = 5;
            }
          } else if (matchValue$$41[0].tag === 5) {
            if (matchValue$$41[1].tag === 4) {
              $target$$94 = 3;
            } else if (matchValue$$41[1].tag === 5) {
              $target$$94 = 4;
            } else {
              $target$$94 = 5;
            }
          } else if (matchValue$$41[0].tag === 10) {
            if (matchValue$$41[1].tag === 10) {
              $target$$94 = 4;
            } else {
              $target$$94 = 5;
            }
          } else if (matchValue$$41[0].tag === 2) {
            if (matchValue$$41[1].tag === 2) {
              $target$$94 = 4;
            } else {
              $target$$94 = 5;
            }
          } else if (matchValue$$41[0].tag === 12) {
            if (matchValue$$41[1].tag === 12) {
              $target$$94 = 4;
            } else {
              $target$$94 = 5;
            }
          } else if (matchValue$$41[0].tag === 7) {
            if (matchValue$$41[1].tag === 7) {
              $target$$94 = 4;
            } else {
              $target$$94 = 5;
            }
          } else if (matchValue$$41[0].tag === 6) {
            if (matchValue$$41[1].tag === 6) {
              $target$$94 = 4;
            } else {
              $target$$94 = 5;
            }
          } else {
            $target$$94 = 5;
          }

          switch ($target$$94) {
            case 0:
              {
                const collect = function collect(ty$$51) {
                  const res$$5 = new _Types.FSharpRef((0, _Types.L)());
                  (0, _infos.IterateEntireHierarchyOfType)(function (x$$4) {
                    res$$5.contents = (0, _Types.L)(x$$4, res$$5.contents);
                  }, g$$33, amap$$4, m$$19, new _infos.AllowMultiIntfInstantiations(1, "No"), ty$$51);
                  return (0, _List.reverse)(res$$5.contents);
                };

                const parents1 = collect(ty1$$9);
                const parents2 = collect(ty2$$7);
                return (0, _ErrorLogger.IterateD)(function f$$14(ty1Parent) {
                  return (0, _ErrorLogger.IterateD)(function f$$13(ty2Parent) {
                    if (!(0, _infos.HaveSameHeadType)(g$$33, ty1Parent, ty2Parent)) {
                      return _ErrorLogger.CompleteD;
                    } else {
                      return SolveTypeEqualsTypeKeepAbbrevs(csenv$$33, ndeep$$22, m2$$26, trace$$33, ty1Parent, ty2Parent);
                    }
                  }, parents2);
                }, parents1);
              }

            case 1:
              {
                return SolveTypeEqualsTypeKeepAbbrevs(csenv$$33, ndeep$$22, m2$$27, trace$$33, u1, u2);
              }

            case 2:
              {
                return (0, _ErrorLogger.op_PlusPlus)(SolveTypeEqualsTypeKeepAbbrevs(csenv$$33, ndeep$$22, m2$$28, trace$$33, aty1, aty2), function () {
                  return SolveTypeEqualsTypeKeepAbbrevs(csenv$$33, ndeep$$22, m2$$28, trace$$33, bty1, bty2);
                });
              }

            case 3:
              {
                return (0, _ErrorLogger.ErrorD)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csStructConstraintInconsistent)(), m$$19));
              }

            case 4:
              {
                return _ErrorLogger.CompleteD;
              }

            case 5:
              {
                return _ErrorLogger.CompleteD;
              }
          }
        }
    }
  };

  const implies = function implies(tpc1$$1, tpc2$$1) {
    const matchValue$$42 = [tpc1$$1, tpc2$$1];
    var $target$$95, trait1, trait2, ty1$$10, ty2$$8, u1$$1, u2$$1, aty1$$1, aty2$$1, bty1$$1, bty2$$1, tys1$$2, tys2$$2, dty1, dty2, priority1, priority2;

    if (matchValue$$42[0].tag === 0) {
      if (matchValue$$42[1].tag === 0) {
        $target$$95 = 1;
        ty1$$10 = matchValue$$42[0].fields[0];
        ty2$$8 = matchValue$$42[1].fields[0];
      } else {
        $target$$95 = 7;
      }
    } else if (matchValue$$42[0].tag === 8) {
      if (matchValue$$42[1].tag === 8) {
        $target$$95 = 2;
        u1$$1 = matchValue$$42[0].fields[0];
        u2$$1 = matchValue$$42[1].fields[0];
      } else {
        $target$$95 = 7;
      }
    } else if (matchValue$$42[0].tag === 11) {
      if (matchValue$$42[1].tag === 11) {
        $target$$95 = 3;
        aty1$$1 = matchValue$$42[0].fields[0];
        aty2$$1 = matchValue$$42[1].fields[0];
        bty1$$1 = matchValue$$42[0].fields[1];
        bty2$$1 = matchValue$$42[1].fields[1];
      } else {
        $target$$95 = 7;
      }
    } else if (matchValue$$42[0].tag === 9) {
      if (matchValue$$42[1].tag === 9) {
        $target$$95 = 4;
      } else if (matchValue$$42[1].tag === 10) {
        $target$$95 = 4;
      } else {
        $target$$95 = 7;
      }
    } else if (matchValue$$42[0].tag === 10) {
      if (matchValue$$42[1].tag === 10) {
        $target$$95 = 4;
      } else {
        $target$$95 = 7;
      }
    } else if (matchValue$$42[0].tag === 2) {
      if (matchValue$$42[1].tag === 2) {
        $target$$95 = 4;
      } else {
        $target$$95 = 7;
      }
    } else if (matchValue$$42[0].tag === 4) {
      if (matchValue$$42[1].tag === 4) {
        $target$$95 = 4;
      } else {
        $target$$95 = 7;
      }
    } else if (matchValue$$42[0].tag === 12) {
      if (matchValue$$42[1].tag === 12) {
        $target$$95 = 4;
      } else {
        $target$$95 = 7;
      }
    } else if (matchValue$$42[0].tag === 5) {
      if (matchValue$$42[1].tag === 5) {
        $target$$95 = 4;
      } else {
        $target$$95 = 7;
      }
    } else if (matchValue$$42[0].tag === 7) {
      if (matchValue$$42[1].tag === 7) {
        $target$$95 = 4;
      } else {
        $target$$95 = 7;
      }
    } else if (matchValue$$42[0].tag === 6) {
      if (matchValue$$42[1].tag === 6) {
        $target$$95 = 5;
        tys1$$2 = matchValue$$42[0].fields[0];
        tys2$$2 = matchValue$$42[1].fields[0];
      } else {
        $target$$95 = 7;
      }
    } else if (matchValue$$42[0].tag === 1) {
      if (matchValue$$42[1].tag === 1) {
        $target$$95 = 6;
        dty1 = matchValue$$42[0].fields[1];
        dty2 = matchValue$$42[1].fields[1];
        priority1 = matchValue$$42[0].fields[0];
        priority2 = matchValue$$42[1].fields[0];
      } else {
        $target$$95 = 7;
      }
    } else if (matchValue$$42[1].tag === 3) {
      $target$$95 = 0;
      trait1 = matchValue$$42[0].fields[0];
      trait2 = matchValue$$42[1].fields[0];
    } else {
      $target$$95 = 7;
    }

    switch ($target$$95) {
      case 0:
        {
          return (0, _TastOps.traitsAEquiv)(g$$33, aenv$$5, trait1, trait2);
        }

      case 1:
        {
          return (0, _infos.ExistsSameHeadTypeInHierarchy)(g$$33, amap$$4, m$$19, ty1$$10, ty2$$8);
        }

      case 2:
        {
          return (0, _TastOps.typeEquiv)(g$$33, u1$$1, u2$$1);
        }

      case 3:
        {
          if ((0, _TastOps.typeEquiv)(g$$33, aty1$$1, aty2$$1)) {
            return (0, _TastOps.typeEquiv)(g$$33, bty1$$1, bty2$$1);
          } else {
            return false;
          }
        }

      case 4:
        {
          return true;
        }

      case 5:
        {
          return (0, _lib.ListSet$$$isSubsetOf)(function (arg10$0040$$16, arg20$0040$$6) {
            return (0, _TastOps.typeEquiv)(g$$33, arg10$0040$$16, arg20$0040$$6);
          }, tys1$$2, tys2$$2);
        }

      case 6:
        {
          if (priority1 === priority2) {
            return (0, _TastOps.typeEquiv)(g$$33, dty1, dty2);
          } else {
            return false;
          }
        }

      case 7:
        {
          return false;
        }
    }
  };

  const existingConstraints = (0, _tast.Typar$$get_Constraints)(tp$$8);
  const allCxs = (0, _Types.L)(newConstraint, (0, _List.reverse)(existingConstraints));
  return (0, _ErrorLogger.op_PlusPlus)((enforceMutualConsistency = function enforceMutualConsistency(i, cxs$$2) {
    if (cxs$$2.tail != null) {
      const rest = cxs$$2.tail;
      const cx$$1 = cxs$$2.head;
      return (0, _ErrorLogger.op_PlusPlus)((0, _ErrorLogger.IterateIdxD)(function (j, cx2) {
        return i === j ? _ErrorLogger.CompleteD : consistent(cx$$1, cx2);
      }, allCxs), function () {
        return enforceMutualConsistency(i + 1, rest);
      });
    } else {
      return _ErrorLogger.CompleteD;
    }
  }, enforceMutualConsistency(0, allCxs)), function () {
    var matchValue$$43;
    const impliedByExistingConstraints = (0, _List.exists)(function predicate$$16(tpc2$$2) {
      return implies(tpc2$$2, newConstraint);
    }, existingConstraints);
    return impliedByExistingConstraints ? _ErrorLogger.CompleteD : (matchValue$$43 = [(0, _tast.Typar$$get_Rigidity)(tp$$8), newConstraint], matchValue$$43[0].tag === 0 ? matchValue$$43[1].tag === 1 ? true : false : matchValue$$43[0].tag === 1 ? matchValue$$43[1].tag === 1 ? true : false : false) ? _ErrorLogger.CompleteD : (0, _Util.equals)((0, _tast.Typar$$get_Rigidity)(tp$$8), new _tast.TyparRigidity(0, "Rigid")) ? (0, _ErrorLogger.ErrorD)(new ConstraintSolverMissingConstraint(denv$$6, tp$$8, newConstraint, m$$19, m2$$26)) : (0, _ErrorLogger.op_PlusPlus)((0, _tast.TyparRigidity$$get_WarnIfMissingConstraint)((0, _tast.Typar$$get_Rigidity)(tp$$8)) ? (0, _ErrorLogger.WarnD)(new ConstraintSolverMissingConstraint(denv$$6, tp$$8, newConstraint, m$$19, m2$$26)) : _ErrorLogger.CompleteD, function () {
      let newConstraints;

      const eliminateRedundant = function eliminateRedundant(cxs$$3, acc) {
        eliminateRedundant: while (true) {
          if (cxs$$3.tail != null) {
            const rest$$1 = cxs$$3.tail;
            const cx$$2 = cxs$$3.head;
            cxs$$3 = rest$$1;
            acc = (0, _List.exists)(function (cx2$$1) {
              return implies(cx2$$1, cx$$2);
            }, acc) ? acc : (0, _Types.L)(cx$$2, acc);
            continue eliminateRedundant;
          } else {
            return acc;
          }
        }
      };

      newConstraints = eliminateRedundant(allCxs, (0, _Types.L)());
      const orig$$4 = (0, _tast.Typar$$get_Constraints)(tp$$8);
      OptionalTrace$$Exec(trace$$33, function () {
        (0, _tast.Typar$$SetConstraints$$Z10399A1)(tp$$8, newConstraints);
      }, function () {
        (0, _tast.Typar$$SetConstraints$$Z10399A1)(tp$$8, orig$$4);
      });
      return _ErrorLogger.CompleteD;
    });
  });
}

function SolveTypeSupportsNull(csenv$$34, ndeep$$23, m2$$29, trace$$34, ty$$52) {
  const g$$34 = ConstraintSolverEnv$$get_g(csenv$$34);
  const m$$20 = csenv$$34.m;
  const denv$$7 = csenv$$34.DisplayEnv;
  const matchValue$$44 = (0, _TastOps.tryDestTyparTy)(g$$34, ty$$52);

  if (matchValue$$44 == null) {
    if ((0, _TastOps.TypeSatisfiesNullConstraint)(g$$34, m$$20, ty$$52)) {
      return _ErrorLogger.CompleteD;
    } else {
      if ((0, _TastOps.$007CNullableTy$007C_$007C)(g$$34, ty$$52) != null) {
        return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csNullableTypeDoesNotHaveNull$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$7, ty$$52)), m$$20, m2$$29));
      } else {
        return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeDoesNotHaveNull$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$7, ty$$52)), m$$20, m2$$29));
      }
    }
  } else {
    const destTypar$$1 = matchValue$$44;
    return AddConstraint(csenv$$34, ndeep$$23, m2$$29, trace$$34, destTypar$$1, new _tast.TyparConstraint(2, "SupportsNull", m$$20));
  }
}

function SolveTypeSupportsComparison(csenv$$35, ndeep$$24, m2$$30, trace$$35, ty$$53) {
  var tcref$$10, tcref$$7;
  const g$$35 = ConstraintSolverEnv$$get_g(csenv$$35);
  const m$$21 = csenv$$35.m;
  const amap$$5 = ConstraintSolverEnv$$get_amap(csenv$$35);
  const denv$$8 = csenv$$35.DisplayEnv;
  const matchValue$$45 = (0, _TastOps.tryDestTyparTy)(g$$35, ty$$53);

  if (matchValue$$45 == null) {
    const matchValue$$46 = (0, _TastOps.tryDestAppTy)(g$$35, ty$$53);
    var $target$$96, tcref$$8;

    if (matchValue$$46 != null) {
      if (tcref$$7 = matchValue$$46, (0, _TastOps.HasFSharpAttribute)(g$$35, (0, _TcGlobals.TcGlobals$$get_attrib_NoComparisonAttribute)(g$$35), (0, _tast.EntityRef$$get_Attribs)(tcref$$7))) {
        $target$$96 = 0;
        tcref$$8 = matchValue$$46;
      } else {
        $target$$96 = 1;
      }
    } else {
      $target$$96 = 1;
    }

    switch ($target$$96) {
      case 0:
        {
          return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeDoesNotSupportComparison1$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$8, ty$$53)), m$$21, m2$$30));
        }

      case 1:
        {
          const activePatternResult43834 = (0, _TastOps.$007CSpecialComparableHeadType$007C_$007C)(g$$35, ty$$53);

          if (activePatternResult43834 != null) {
            const tinst$$5 = activePatternResult43834;
            return (0, _ErrorLogger.IterateD)(function f$$15(ty$$54) {
              return SolveTypeSupportsComparison(csenv$$35, ndeep$$24, m2$$30, trace$$35, ty$$54);
            }, tinst$$5);
          } else {
            if ((0, _infos.ExistsSameHeadTypeInHierarchy)(g$$35, amap$$5, m2$$30, ty$$53, (0, _TcGlobals.TcGlobals$$get_mk_IComparable_ty)(g$$35)) ? true : (0, _infos.ExistsSameHeadTypeInHierarchy)(g$$35, amap$$5, m2$$30, ty$$53, (0, _TcGlobals.TcGlobals$$get_mk_IStructuralComparable_ty)(g$$35))) {
              const activePatternResult43832 = (0, _TastOps.$007CAppTy$007C_$007C)(g$$35, ty$$53);

              if (activePatternResult43832 != null) {
                return (0, _ErrorLogger.Iterate2D)(function f$$16(ty$$55, tp$$9) {
                  if ((0, _tast.Typar$$get_ComparisonConditionalOn)(tp$$9)) {
                    return SolveTypeSupportsComparison(csenv$$35, ndeep$$24, m2$$30, trace$$35, ty$$55);
                  } else {
                    return _ErrorLogger.CompleteD;
                  }
                }, activePatternResult43832[1], (0, _tast.EntityRef$$get_TyparsNoRange)(activePatternResult43832[0]));
              } else {
                return _ErrorLogger.CompleteD;
              }
            } else if ((0, _TastOps.isAppTy)(g$$35, ty$$53) ? (tcref$$10 = (0, _TastOps.tcrefOfAppTy)(g$$35, ty$$53), (0, _AugmentWithHashCompare.TyconIsCandidateForAugmentationWithCompare)(g$$35, (0, _tast.EntityRef$$get_Deref)(tcref$$10)) ? (0, _tast.EntityRef$$get_GeneratedCompareToWithComparerValues)(tcref$$10) == null : false) : false) {
              return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeDoesNotSupportComparison3$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$8, ty$$53)), m$$21, m2$$30));
            } else {
              return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeDoesNotSupportComparison2$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$8, ty$$53)), m$$21, m2$$30));
            }
          }
        }
    }
  } else {
    const destTypar$$2 = matchValue$$45;
    return AddConstraint(csenv$$35, ndeep$$24, m2$$30, trace$$35, destTypar$$2, new _tast.TyparConstraint(9, "SupportsComparison", m$$21));
  }
}

function SolveTypeSupportsEquality(csenv$$36, ndeep$$25, m2$$31, trace$$36, ty$$56) {
  var tcref$$11;
  const g$$36 = ConstraintSolverEnv$$get_g(csenv$$36);
  const m$$22 = csenv$$36.m;
  const denv$$9 = csenv$$36.DisplayEnv;
  const matchValue$$47 = (0, _TastOps.tryDestTyparTy)(g$$36, ty$$56);

  if (matchValue$$47 == null) {
    const matchValue$$48 = (0, _TastOps.tryDestAppTy)(g$$36, ty$$56);
    var $target$$97, tcref$$12;

    if (matchValue$$48 != null) {
      if (tcref$$11 = matchValue$$48, (0, _TastOps.HasFSharpAttribute)(g$$36, (0, _TcGlobals.TcGlobals$$get_attrib_NoEqualityAttribute)(g$$36), (0, _tast.EntityRef$$get_Attribs)(tcref$$11))) {
        $target$$97 = 0;
        tcref$$12 = matchValue$$48;
      } else {
        $target$$97 = 1;
      }
    } else {
      $target$$97 = 1;
    }

    switch ($target$$97) {
      case 0:
        {
          return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeDoesNotSupportEquality1$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$9, ty$$56)), m$$22, m2$$31));
        }

      case 1:
        {
          const activePatternResult43847 = (0, _TastOps.$007CSpecialEquatableHeadType$007C_$007C)(g$$36, ty$$56);

          if (activePatternResult43847 != null) {
            const tinst$$7 = activePatternResult43847;
            return (0, _ErrorLogger.IterateD)(function f$$17(ty$$57) {
              return SolveTypeSupportsEquality(csenv$$36, ndeep$$25, m2$$31, trace$$36, ty$$57);
            }, tinst$$7);
          } else {
            if ((0, _TastOps.$007CSpecialNotEquatableHeadType$007C_$007C)(g$$36, ty$$56) != null) {
              return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeDoesNotSupportEquality2$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$9, ty$$56)), m$$22, m2$$31));
            } else {
              const activePatternResult43843 = (0, _TastOps.$007CAppTy$007C_$007C)(g$$36, ty$$56);

              if (activePatternResult43843 != null) {
                if ((0, _AugmentWithHashCompare.TyconIsCandidateForAugmentationWithEquals)(g$$36, (0, _tast.EntityRef$$get_Deref)(activePatternResult43843[0])) ? (0, _tast.EntityRef$$get_GeneratedHashAndEqualsWithComparerValues)(activePatternResult43843[0]) == null : false) {
                  return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeDoesNotSupportEquality3$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$9, ty$$56)), m$$22, m2$$31));
                } else {
                  return (0, _ErrorLogger.Iterate2D)(function f$$18(ty$$58, tp$$10) {
                    if ((0, _tast.Typar$$get_EqualityConditionalOn)(tp$$10)) {
                      return SolveTypeSupportsEquality(csenv$$36, ndeep$$25, m2$$31, trace$$36, ty$$58);
                    } else {
                      return _ErrorLogger.CompleteD;
                    }
                  }, activePatternResult43843[1], (0, _tast.EntityRef$$get_TyparsNoRange)(activePatternResult43843[0]));
                }
              } else {
                return _ErrorLogger.CompleteD;
              }
            }
          }
        }
    }
  } else {
    const destTypar$$3 = matchValue$$47;
    return AddConstraint(csenv$$36, ndeep$$25, m2$$31, trace$$36, destTypar$$3, new _tast.TyparConstraint(10, "SupportsEquality", m$$22));
  }
}

function SolveTypeIsEnum(csenv$$37, ndeep$$26, m2$$32, trace$$37, ty$$59, underlying$$1) {
  const builder$0040 = _ErrorLogger.trackErrors;
  return (0, _ErrorLogger.TrackErrorsBuilder$$Run$$FCFD9EF)(builder$0040, (0, _ErrorLogger.TrackErrorsBuilder$$Delay$$FCFD9EF)(builder$0040, function () {
    const g$$37 = ConstraintSolverEnv$$get_g(csenv$$37);
    const m$$23 = csenv$$37.m;
    const denv$$10 = csenv$$37.DisplayEnv;
    const matchValue$$49 = (0, _TastOps.tryDestTyparTy)(g$$37, ty$$59);

    if (matchValue$$49 == null) {
      return (0, _TastOps.isEnumTy)(g$$37, ty$$59) ? (0, _ErrorLogger.TrackErrorsBuilder$$Bind$$1B0356D3)(builder$0040, SolveTypeEqualsTypeKeepAbbrevs(csenv$$37, ndeep$$26, m2$$32, trace$$37, underlying$$1, (0, _TastOps.underlyingTypeOfEnumTy)(g$$37, ty$$59)), function () {
        return (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040, _ErrorLogger.CompleteD);
      }) : (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040, (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeIsNotEnumType$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$10, ty$$59)), m$$23, m2$$32)));
    } else {
      const destTypar$$4 = matchValue$$49;
      return (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040, AddConstraint(csenv$$37, ndeep$$26, m2$$32, trace$$37, destTypar$$4, new _tast.TyparConstraint(8, "IsEnum", underlying$$1, m$$23)));
    }
  }));
}

function SolveTypeIsDelegate(csenv$$38, ndeep$$27, m2$$33, trace$$38, ty$$60, aty$$1, bty$$1) {
  const builder$0040$$1 = _ErrorLogger.trackErrors;
  return (0, _ErrorLogger.TrackErrorsBuilder$$Run$$FCFD9EF)(builder$0040$$1, (0, _ErrorLogger.TrackErrorsBuilder$$Delay$$FCFD9EF)(builder$0040$$1, function () {
    const g$$38 = ConstraintSolverEnv$$get_g(csenv$$38);
    const m$$24 = csenv$$38.m;
    const denv$$11 = csenv$$38.DisplayEnv;
    const matchValue$$50 = (0, _TastOps.tryDestTyparTy)(g$$38, ty$$60);

    if (matchValue$$50 == null) {
      if ((0, _TastOps.isDelegateTy)(g$$38, ty$$60)) {
        const matchValue$$51 = (0, _InfoReader.TryDestStandardDelegateType)(ConstraintSolverEnv$$get_InfoReader(csenv$$38), m$$24, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"), ty$$60);

        if (matchValue$$51 == null) {
          return (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040$$1, (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeHasNonStandardDelegateType$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$11, ty$$60)), m$$24, m2$$33)));
        } else {
          const tupledArgTy = matchValue$$51[0];
          const rty$$4 = matchValue$$51[1];
          return (0, _ErrorLogger.TrackErrorsBuilder$$Bind$$1B0356D3)(builder$0040$$1, SolveTypeEqualsTypeKeepAbbrevs(csenv$$38, ndeep$$27, m2$$33, trace$$38, aty$$1, tupledArgTy), function () {
            return (0, _ErrorLogger.TrackErrorsBuilder$$Bind$$1B0356D3)(builder$0040$$1, SolveTypeEqualsTypeKeepAbbrevs(csenv$$38, ndeep$$27, m2$$33, trace$$38, bty$$1, rty$$4), function () {
              return (0, _ErrorLogger.TrackErrorsBuilder$$Return$$1505)(builder$0040$$1);
            });
          });
        }
      } else {
        return (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040$$1, (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeIsNotDelegateType$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$11, ty$$60)), m$$24, m2$$33)));
      }
    } else {
      const destTypar$$5 = matchValue$$50;
      return (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040$$1, AddConstraint(csenv$$38, ndeep$$27, m2$$33, trace$$38, destTypar$$5, new _tast.TyparConstraint(11, "IsDelegate", aty$$1, bty$$1, m$$24)));
    }
  }));
}

function SolveTypeIsNonNullableValueType(csenv$$39, ndeep$$28, m2$$34, trace$$39, ty$$61) {
  const builder$0040$$2 = _ErrorLogger.trackErrors;
  return (0, _ErrorLogger.TrackErrorsBuilder$$Run$$FCFD9EF)(builder$0040$$2, (0, _ErrorLogger.TrackErrorsBuilder$$Delay$$FCFD9EF)(builder$0040$$2, function () {
    const g$$39 = ConstraintSolverEnv$$get_g(csenv$$39);
    const m$$25 = csenv$$39.m;
    const denv$$12 = csenv$$39.DisplayEnv;
    const matchValue$$52 = (0, _TastOps.tryDestTyparTy)(g$$39, ty$$61);

    if (matchValue$$52 == null) {
      const underlyingTy = (0, _TastOps.stripTyEqnsAndMeasureEqns)(g$$39, ty$$61);
      return (0, _TastOps.isStructTy)(g$$39, underlyingTy) ? (0, _TastOps.tyconRefEq)(g$$39, (0, _TcGlobals.TcGlobals$$get_system_Nullable_tcref)(g$$39), (0, _TastOps.tcrefOfAppTy)(g$$39, underlyingTy)) ? (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040$$2, (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeParameterCannotBeNullable)(), m$$25, m$$25))) : (0, _ErrorLogger.TrackErrorsBuilder$$Zero)(builder$0040$$2) : (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040$$2, (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csGenericConstructRequiresStructType$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$12, ty$$61)), m$$25, m2$$34)));
    } else {
      const destTypar$$6 = matchValue$$52;
      return (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040$$2, AddConstraint(csenv$$39, ndeep$$28, m2$$34, trace$$39, destTypar$$6, new _tast.TyparConstraint(4, "IsNonNullableStruct", m$$25)));
    }
  }));
}

function SolveTypeIsUnmanaged(csenv$$40, ndeep$$29, m2$$35, trace$$40, ty$$62) {
  const g$$40 = ConstraintSolverEnv$$get_g(csenv$$40);
  const m$$26 = csenv$$40.m;
  const denv$$13 = csenv$$40.DisplayEnv;
  const matchValue$$53 = (0, _TastOps.tryDestTyparTy)(g$$40, ty$$62);

  if (matchValue$$53 == null) {
    if ((0, _TastOps.isUnmanagedTy)(g$$40, ty$$62)) {
      return _ErrorLogger.CompleteD;
    } else {
      return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csGenericConstructRequiresUnmanagedType$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$13, ty$$62)), m$$26, m2$$35));
    }
  } else {
    const destTypar$$7 = matchValue$$53;
    return AddConstraint(csenv$$40, ndeep$$29, m2$$35, trace$$40, destTypar$$7, new _tast.TyparConstraint(12, "IsUnmanaged", m$$26));
  }
}

function SolveTypeChoice(csenv$$41, ndeep$$30, m2$$36, trace$$41, ty$$63, tys$$14) {
  const g$$41 = ConstraintSolverEnv$$get_g(csenv$$41);
  const m$$27 = csenv$$41.m;
  const denv$$14 = csenv$$41.DisplayEnv;
  const matchValue$$54 = (0, _TastOps.tryDestTyparTy)(g$$41, ty$$63);

  if (matchValue$$54 == null) {
    if ((0, _List.exists)(function (arg30$0040$$1) {
      return (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(1, "EraseMeasures"), g$$41, ty$$63, arg30$0040$$1);
    }, tys$$14)) {
      return _ErrorLogger.CompleteD;
    } else {
      return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csTypeNotCompatibleBecauseOfPrintf$$Z384F8060)((0, _NicePrint.minimalStringOfType)(denv$$14, ty$$63), (0, _String.join)(",", ...(0, _List.map)(function (x$$5) {
        return (0, _NicePrint.prettyStringOfTy)(denv$$14, x$$5);
      }, tys$$14))), m$$27, m2$$36));
    }
  } else {
    const destTypar$$8 = matchValue$$54;
    return AddConstraint(csenv$$41, ndeep$$30, m2$$36, trace$$41, destTypar$$8, new _tast.TyparConstraint(6, "SimpleChoice", tys$$14, m$$27));
  }
}

function SolveTypeIsReferenceType(csenv$$42, ndeep$$31, m2$$37, trace$$42, ty$$64) {
  const g$$42 = ConstraintSolverEnv$$get_g(csenv$$42);
  const m$$28 = csenv$$42.m;
  const denv$$15 = csenv$$42.DisplayEnv;
  const matchValue$$55 = (0, _TastOps.tryDestTyparTy)(g$$42, ty$$64);

  if (matchValue$$55 == null) {
    if ((0, _TastOps.isRefTy)(g$$42, ty$$64)) {
      return _ErrorLogger.CompleteD;
    } else {
      return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csGenericConstructRequiresReferenceSemantics$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$15, ty$$64)), m$$28, m$$28));
    }
  } else {
    const destTypar$$9 = matchValue$$55;
    return AddConstraint(csenv$$42, ndeep$$31, m2$$37, trace$$42, destTypar$$9, new _tast.TyparConstraint(5, "IsReferenceType", m$$28));
  }
}

function SolveTypeRequiresDefaultConstructor(csenv$$43, ndeep$$32, m2$$38, trace$$43, origTy) {
  var tcref$$14, tcref$$16;
  const g$$43 = ConstraintSolverEnv$$get_g(csenv$$43);
  const amap$$6 = ConstraintSolverEnv$$get_amap(csenv$$43);
  const m$$29 = csenv$$43.m;
  const denv$$16 = csenv$$43.DisplayEnv;
  const ty$$65 = (0, _TastOps.stripTyEqnsAndMeasureEqns)(g$$43, origTy);
  const matchValue$$56 = (0, _TastOps.tryDestTyparTy)(g$$43, ty$$65);

  if (matchValue$$56 == null) {
    if ((0, _TastOps.isStructTy)(g$$43, ty$$65) ? (0, _TastOps.TypeHasDefaultValue)(g$$43, m$$29, ty$$65) : false) {
      return _ErrorLogger.CompleteD;
    } else if ((0, _List.exists)(function predicate$$17(x$$6) {
      if ((0, _infos.MethInfo$$get_IsNullary)(x$$6)) {
        return (0, _AccessibilityLogic.IsMethInfoAccessible)(amap$$6, m$$29, new _AccessibilityLogic.AccessorDomain(1, "AccessibleFromEverywhere"), x$$6);
      } else {
        return false;
      }
    }, (0, _InfoReader.GetIntrinsicConstructorInfosOfType)(ConstraintSolverEnv$$get_InfoReader(csenv$$43), m$$29, ty$$65))) {
      const matchValue$$57 = (0, _TastOps.tryDestAppTy)(g$$43, ty$$65);
      var $target$$98, tcref$$15;

      if (matchValue$$57 != null) {
        if (tcref$$14 = matchValue$$57, (0, _TastOps.HasFSharpAttribute)(g$$43, (0, _TcGlobals.TcGlobals$$get_attrib_AbstractClassAttribute)(g$$43), (0, _tast.EntityRef$$get_Attribs)(tcref$$14))) {
          $target$$98 = 0;
          tcref$$15 = matchValue$$57;
        } else {
          $target$$98 = 1;
        }
      } else {
        $target$$98 = 1;
      }

      switch ($target$$98) {
        case 0:
          {
            return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csGenericConstructRequiresNonAbstract$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$16, origTy)), m$$29, m2$$38));
          }

        case 1:
          {
            return _ErrorLogger.CompleteD;
          }
      }
    } else {
      const matchValue$$58 = (0, _TastOps.tryDestAppTy)(g$$43, ty$$65);
      var $target$$99, tcref$$17;

      if (matchValue$$58 != null) {
        if (tcref$$16 = matchValue$$58, (0, _tast.EntityRef$$get_PreEstablishedHasDefaultConstructor)(tcref$$16) ? true : (0, _tast.EntityRef$$get_IsRecordTycon)(tcref$$16) ? (0, _TastOps.HasFSharpAttribute)(g$$43, (0, _TcGlobals.TcGlobals$$get_attrib_CLIMutableAttribute)(g$$43), (0, _tast.EntityRef$$get_Attribs)(tcref$$16)) : false) {
          $target$$99 = 0;
          tcref$$17 = matchValue$$58;
        } else {
          $target$$99 = 1;
        }
      } else {
        $target$$99 = 1;
      }

      switch ($target$$99) {
        case 0:
          {
            return _ErrorLogger.CompleteD;
          }

        case 1:
          {
            return (0, _ErrorLogger.ErrorD)(new ConstraintSolverError((0, _FSComp.SR$$$csGenericConstructRequiresPublicDefaultConstructor$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(denv$$16, origTy)), m$$29, m2$$38));
          }
      }
    }
  } else {
    const destTypar$$10 = matchValue$$56;
    return AddConstraint(csenv$$43, ndeep$$32, m2$$38, trace$$43, destTypar$$10, new _tast.TyparConstraint(7, "RequiresDefaultConstructor", m$$29));
  }
}

function CanMemberSigsMatchUpToCheck(csenv$$44, permitOptArgs, alwaysCheckReturn, unifyTypes, subsumeTypes, subsumeArg, reqdRetTyOpt, calledMeth$$2) {
  const builder$0040$$3 = _ErrorLogger.trackErrors;
  return (0, _ErrorLogger.TrackErrorsBuilder$$Run$$FCFD9EF)(builder$0040$$3, (0, _ErrorLogger.TrackErrorsBuilder$$Delay$$FCFD9EF)(builder$0040$$3, function () {
    const g$$44 = ConstraintSolverEnv$$get_g(csenv$$44);
    const amap$$7 = ConstraintSolverEnv$$get_amap(csenv$$44);
    const m$$30 = csenv$$44.m;
    const minfo$$14 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(calledMeth$$2);
    const minst$$3 = (0, _MethodCalls.CalledMeth$00601$$get_CalledTyArgs)(calledMeth$$2);
    const uminst = (0, _MethodCalls.CalledMeth$00601$$get_CallerTyArgs)(calledMeth$$2);
    const callerObjArgTys = (0, _MethodCalls.CalledMeth$00601$$get_CallerObjArgTys)(calledMeth$$2);
    const assignedItemSetters = (0, _MethodCalls.CalledMeth$00601$$get_AssignedItemSetters)(calledMeth$$2);
    const unnamedCalledOptArgs = (0, _MethodCalls.CalledMeth$00601$$get_UnnamedCalledOptArgs)(calledMeth$$2);
    const unnamedCalledOutArgs = (0, _MethodCalls.CalledMeth$00601$$get_UnnamedCalledOutArgs)(calledMeth$$2);
    return (0, _List.length)(minst$$3) !== (0, _List.length)(uminst) ? (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040$$3, (0, _ErrorLogger.ErrorD)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csTypeInstantiationLengthMismatch)(), m$$30))) : (0, _ErrorLogger.TrackErrorsBuilder$$Bind$$1B0356D3)(builder$0040$$3, (0, _ErrorLogger.Iterate2D)(unifyTypes, minst$$3, uminst), function () {
      var calledObjArgTys;
      return (0, _ErrorLogger.TrackErrorsBuilder$$Combine$$1B0356D3)(builder$0040$$3, !(permitOptArgs ? true : unnamedCalledOptArgs.tail == null) ? (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040$$3, (0, _ErrorLogger.ErrorD)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csOptionalArgumentNotPermittedHere)(), m$$30))) : (calledObjArgTys = (0, _MethodCalls.CalledMeth$00601$$CalledObjArgTys$$4DB9192C)(calledMeth$$2, m$$30), (0, _List.length)(calledObjArgTys) !== (0, _List.length)(callerObjArgTys) ? (0, _List.length)(calledObjArgTys) !== 0 ? (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040$$3, (0, _ErrorLogger.ErrorD)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberIsNotStatic$$Z721C83C5)((0, _infos.MethInfo$$get_LogicalName)(minfo$$14)), m$$30))) : (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040$$3, (0, _ErrorLogger.ErrorD)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberIsNotInstance$$Z721C83C5)((0, _infos.MethInfo$$get_LogicalName)(minfo$$14)), m$$30))) : (0, _ErrorLogger.TrackErrorsBuilder$$Bind$$1B0356D3)(builder$0040$$3, (0, _ErrorLogger.Iterate2D)(subsumeTypes, calledObjArgTys, callerObjArgTys), function () {
        return (0, _ErrorLogger.TrackErrorsBuilder$$Return$$1505)(builder$0040$$3);
      })), (0, _ErrorLogger.TrackErrorsBuilder$$Delay$$FCFD9EF)(builder$0040$$3, function () {
        return (0, _ErrorLogger.TrackErrorsBuilder$$Combine$$1B0356D3)(builder$0040$$3, (0, _ErrorLogger.TrackErrorsBuilder$$For$$Z3A8746F8)(builder$0040$$3, (0, _MethodCalls.CalledMeth$00601$$get_ArgSets)(calledMeth$$2), function (_arg15) {
          const argSet = _arg15;
          return (0, _List.length)(argSet.UnnamedCalledArgs) !== (0, _List.length)(argSet.UnnamedCallerArgs) ? (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040$$3, (0, _ErrorLogger.ErrorD)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csArgumentLengthMismatch)(), m$$30))) : (0, _ErrorLogger.TrackErrorsBuilder$$Bind$$1B0356D3)(builder$0040$$3, (0, _ErrorLogger.Iterate2D)(subsumeArg, argSet.UnnamedCalledArgs, argSet.UnnamedCallerArgs), function () {
            return (0, _ErrorLogger.TrackErrorsBuilder$$Return$$1505)(builder$0040$$3);
          });
        }), (0, _ErrorLogger.TrackErrorsBuilder$$Delay$$FCFD9EF)(builder$0040$$3, function () {
          var matchValue$$59, calledArg, paramArrayElemTy, reflArgInfo, matchValue$$60, args;
          return (0, _ErrorLogger.TrackErrorsBuilder$$Combine$$1B0356D3)(builder$0040$$3, (matchValue$$59 = (0, _MethodCalls.CalledMeth$00601$$get_ParamArrayCalledArgOpt)(calledMeth$$2), matchValue$$59 != null ? (calledArg = matchValue$$59, (0, _TastOps.isArray1DTy)(g$$44, calledArg.CalledArgumentType) ? (paramArrayElemTy = (0, _TastOps.destArrayTy)(g$$44, calledArg.CalledArgumentType), (reflArgInfo = calledArg.ReflArgInfo, (matchValue$$60 = (0, _MethodCalls.CalledMeth$00601$$get_ParamArrayCallerArgs)(calledMeth$$2), matchValue$$60 != null ? (args = matchValue$$60, (0, _ErrorLogger.TrackErrorsBuilder$$For$$Z3A8746F8)(builder$0040$$3, args, function (_arg17) {
            const callerArg = _arg17;
            return (0, _ErrorLogger.TrackErrorsBuilder$$Bind$$1B0356D3)(builder$0040$$3, subsumeArg((0, _MethodCalls.GetCalledArg)([0, 0], false, new _infos.OptionalArgInfo(0, "NotOptional"), new _infos.CallerInfo(0, "NoCallerInfo"), false, false, null, reflArgInfo, paramArrayElemTy), callerArg), function () {
              return (0, _ErrorLogger.TrackErrorsBuilder$$Return$$1505)(builder$0040$$3);
            });
          })) : (null, (0, _ErrorLogger.TrackErrorsBuilder$$Zero)(builder$0040$$3))))) : (0, _ErrorLogger.TrackErrorsBuilder$$Zero)(builder$0040$$3)) : (null, (0, _ErrorLogger.TrackErrorsBuilder$$Zero)(builder$0040$$3))), (0, _ErrorLogger.TrackErrorsBuilder$$Delay$$FCFD9EF)(builder$0040$$3, function () {
            return (0, _ErrorLogger.TrackErrorsBuilder$$Combine$$1B0356D3)(builder$0040$$3, (0, _ErrorLogger.TrackErrorsBuilder$$For$$Z3A8746F8)(builder$0040$$3, (0, _MethodCalls.CalledMeth$00601$$get_ArgSets)(calledMeth$$2), function (_arg19) {
              const argSet$$1 = _arg19;
              return (0, _ErrorLogger.TrackErrorsBuilder$$For$$Z3A8746F8)(builder$0040$$3, argSet$$1.AssignedNamedArgs, function (_arg20) {
                const arg = _arg20;
                return (0, _ErrorLogger.TrackErrorsBuilder$$Bind$$1B0356D3)(builder$0040$$3, subsumeArg(arg.CalledArg, arg.CallerArg), function () {
                  return (0, _ErrorLogger.TrackErrorsBuilder$$Return$$1505)(builder$0040$$3);
                });
              });
            }), (0, _ErrorLogger.TrackErrorsBuilder$$Delay$$FCFD9EF)(builder$0040$$3, function () {
              return (0, _ErrorLogger.TrackErrorsBuilder$$Combine$$1B0356D3)(builder$0040$$3, (0, _ErrorLogger.TrackErrorsBuilder$$For$$Z3A8746F8)(builder$0040$$3, assignedItemSetters, function (_arg22) {
                const item = _arg22.fields[1];
                const caller = _arg22.fields[2];
                let patternInput$$9;

                switch (item.tag) {
                  case 1:
                    {
                      const finfo = item.fields[0];
                      const calledArgTy$$1 = (0, _infos.ILFieldInfo$$FieldType$$73F6E43C)(finfo, amap$$7, m$$30);
                      patternInput$$9 = [(0, _infos.ILFieldInfo$$get_FieldName)(finfo), calledArgTy$$1];
                      break;
                    }

                  case 2:
                    {
                      const rfinfo$$5 = item.fields[0];
                      const calledArgTy$$2 = (0, _infos.RecdFieldInfo$$get_FieldType)(rfinfo$$5);
                      patternInput$$9 = [(0, _infos.RecdFieldInfo$$get_Name)(rfinfo$$5), calledArgTy$$2];
                      break;
                    }

                  default:
                    {
                      const pminst = item.fields[2];
                      const pminfo = item.fields[1];
                      const calledArgTy = (0, _List.head)((0, _List.head)((0, _infos.MethInfo$$GetParamTypes$$Z5D984B3C)(pminfo, amap$$7, m$$30, pminst)));
                      patternInput$$9 = [(0, _infos.MethInfo$$get_LogicalName)(pminfo), calledArgTy];
                    }
                }

                return (0, _ErrorLogger.TrackErrorsBuilder$$Bind$$1B0356D3)(builder$0040$$3, subsumeArg((0, _MethodCalls.GetCalledArg)([-1, 0], false, new _infos.OptionalArgInfo(0, "NotOptional"), new _infos.CallerInfo(0, "NoCallerInfo"), false, false, (0, _ast.mkSynId)(m$$30, patternInput$$9[0]), new _infos.ReflectedArgInfo(0, "None"), patternInput$$9[1]), caller), function () {
                  return (0, _ErrorLogger.TrackErrorsBuilder$$Return$$1505)(builder$0040$$3);
                });
              }), (0, _ErrorLogger.TrackErrorsBuilder$$Delay$$FCFD9EF)(builder$0040$$3, function () {
                var $target$$108;

                if (reqdRetTyOpt != null) {
                  if ((0, _infos.MethInfo$$get_IsConstructor)(minfo$$14) ? true : !alwaysCheckReturn ? unnamedCalledOutArgs.tail == null : false) {
                    $target$$108 = 0;
                  } else {
                    $target$$108 = 1;
                  }
                } else {
                  $target$$108 = 1;
                }

                switch ($target$$108) {
                  case 0:
                    {
                      return (0, _ErrorLogger.TrackErrorsBuilder$$Zero)(builder$0040$$3);
                    }

                  case 1:
                    {
                      if (reqdRetTyOpt != null) {
                        const reqdRetTy = reqdRetTyOpt;
                        const methodRetTy = (0, _MethodCalls.CalledMeth$00601$$get_CalledReturnTypeAfterOutArgTupling)(calledMeth$$2);
                        return (0, _ErrorLogger.TrackErrorsBuilder$$ReturnFrom$$1505)(builder$0040$$3, unifyTypes(reqdRetTy, methodRetTy));
                      } else {
                        return (0, _ErrorLogger.TrackErrorsBuilder$$Zero)(builder$0040$$3);
                      }
                    }
                }
              }));
            }));
          }));
        }));
      }));
    });
  }));
}

function SolveTypeSubsumesTypeWithReport(csenv$$45, ndeep$$33, m$$31, trace$$44, cxsln$$6, ty1$$11, ty2$$9) {
  return (0, _ErrorLogger.TryD)(function () {
    return SolveTypeSubsumesTypeKeepAbbrevs(csenv$$45, ndeep$$33, m$$31, trace$$44, cxsln$$6, ty1$$11, ty2$$9);
  }, function (_arg24) {
    if (_arg24 instanceof LocallyAbortOperationThatFailsToResolveOverload) {
      return _ErrorLogger.CompleteD;
    } else {
      if (csenv$$45.eContextInfo.tag === 9) {
        const isOperator = csenv$$45.eContextInfo.fields[0];
        return CollectThenUndo(function (newTrace$$1) {
          return SolveTypeSubsumesTypeKeepAbbrevs(csenv$$45, ndeep$$33, m$$31, new OptionalTrace(1, "WithTrace", newTrace$$1), cxsln$$6, ty2$$9, ty1$$11);
        }).tag === 0 ? (0, _ErrorLogger.ErrorD)(new ErrorsFromAddingSubsumptionConstraint(ConstraintSolverEnv$$get_g(csenv$$45), csenv$$45.DisplayEnv, ty1$$11, ty2$$9, _arg24, new ContextInfo(10, "DowncastUsedInsteadOfUpcast", isOperator), m$$31)) : (0, _ErrorLogger.ErrorD)(new ErrorsFromAddingSubsumptionConstraint(ConstraintSolverEnv$$get_g(csenv$$45), csenv$$45.DisplayEnv, ty1$$11, ty2$$9, _arg24, new ContextInfo(0, "NoContext"), m$$31));
      } else {
        return (0, _ErrorLogger.ErrorD)(new ErrorsFromAddingSubsumptionConstraint(ConstraintSolverEnv$$get_g(csenv$$45), csenv$$45.DisplayEnv, ty1$$11, ty2$$9, _arg24, csenv$$45.eContextInfo, m$$31));
      }
    }
  });
}

function SolveTypeEqualsTypeWithReport(csenv$$46, ndeep$$34, m$$32, trace$$45, cxsln$$7, actual, expected) {
  return (0, _ErrorLogger.TryD)(function () {
    return SolveTypeEqualsTypeKeepAbbrevsWithCxsln(csenv$$46, ndeep$$34, m$$32, trace$$45, cxsln$$7, actual, expected);
  }, function (_arg25) {
    return _arg25 instanceof LocallyAbortOperationThatFailsToResolveOverload ? _ErrorLogger.CompleteD : (0, _ErrorLogger.ErrorD)(new ErrorFromAddingTypeEquation(ConstraintSolverEnv$$get_g(csenv$$46), csenv$$46.DisplayEnv, actual, expected, _arg25, m$$32));
  });
}

function ArgsMustSubsumeOrConvert(csenv$$47, ndeep$$35, trace$$46, cxsln$$8, isConstraint, calledArg$$1, callerArg$$1) {
  const g$$45 = ConstraintSolverEnv$$get_g(csenv$$47);
  const m$$33 = (0, _MethodCalls.CallerArg$00601$$get_Range)(callerArg$$1);
  const calledArgTy$$4 = (0, _MethodCalls.AdjustCalledArgType)(ConstraintSolverEnv$$get_InfoReader(csenv$$47), isConstraint, calledArg$$1, callerArg$$1);
  return (0, _ErrorLogger.op_PlusPlus)(SolveTypeSubsumesTypeWithReport(csenv$$47, ndeep$$35, m$$33, trace$$46, cxsln$$8, calledArgTy$$4, (0, _MethodCalls.CallerArg$00601$$get_Type)(callerArg$$1)), function () {
    return ((calledArg$$1.IsParamArray ? (0, _TastOps.isArray1DTy)(g$$45, calledArgTy$$4) : false) ? !(0, _TastOps.isArray1DTy)(g$$45, (0, _MethodCalls.CallerArg$00601$$get_Type)(callerArg$$1)) : false) ? (0, _ErrorLogger.ErrorD)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csMethodExpectsParams)(), m$$33)) : _ErrorLogger.CompleteD;
  });
}

function MustUnify(csenv$$48, ndeep$$36, trace$$47, cxsln$$9, ty1$$12, ty2$$10) {
  return SolveTypeEqualsTypeWithReport(csenv$$48, ndeep$$36, csenv$$48.m, trace$$47, cxsln$$9, ty1$$12, ty2$$10);
}

function MustUnifyInsideUndo(csenv$$49, ndeep$$37, trace$$48, cxsln$$10, ty1$$13, ty2$$11) {
  return SolveTypeEqualsTypeWithReport(csenv$$49, ndeep$$37, csenv$$49.m, new OptionalTrace(1, "WithTrace", trace$$48), cxsln$$10, ty1$$13, ty2$$11);
}

function ArgsMustSubsumeOrConvertInsideUndo(csenv$$50, ndeep$$38, trace$$49, cxsln$$11, isConstraint$$1, calledArg$$2, _arg5$$1) {
  const callerArg$$2 = _arg5$$1;
  const m$$34 = callerArg$$2.fields[1];
  const callerArgTy = callerArg$$2.fields[0];
  const calledArgTy$$5 = (0, _MethodCalls.AdjustCalledArgType)(ConstraintSolverEnv$$get_InfoReader(csenv$$50), isConstraint$$1, calledArg$$2, callerArg$$2);
  return SolveTypeSubsumesTypeWithReport(csenv$$50, ndeep$$38, m$$34, new OptionalTrace(1, "WithTrace", trace$$49), cxsln$$11, calledArgTy$$5, callerArgTy);
}

function TypesMustSubsumeOrConvertInsideUndo(csenv$$51, ndeep$$39, trace$$50, cxsln$$12, m$$35, calledArgTy$$6, callerArgTy$$1) {
  return SolveTypeSubsumesTypeWithReport(csenv$$51, ndeep$$39, m$$35, trace$$50, cxsln$$12, calledArgTy$$6, callerArgTy$$1);
}

function ArgsEquivInsideUndo(csenv$$52, isConstraint$$2, calledArg$$3, _arg6) {
  const callerArg$$3 = _arg6;
  const m$$36 = callerArg$$3.fields[1];
  const callerArgTy$$2 = callerArg$$3.fields[0];
  const calledArgTy$$7 = (0, _MethodCalls.AdjustCalledArgType)(ConstraintSolverEnv$$get_InfoReader(csenv$$52), isConstraint$$2, calledArg$$3, callerArg$$3);

  if ((0, _TastOps.typeEquiv)(ConstraintSolverEnv$$get_g(csenv$$52), calledArgTy$$7, callerArgTy$$2)) {
    return _ErrorLogger.CompleteD;
  } else {
    return (0, _ErrorLogger.ErrorD)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csArgumentTypesDoNotMatch)(), m$$36));
  }
}

function ReportNoCandidatesError(csenv$$53, nUnnamedCallerArgs, nNamedCallerArgs, methodName, ad$$2, calledMethGroup$$2, isSequential) {
  var matchValue$$63, minfo$$16, patternInput$$10, matchValue$$64, id$$1, predictFields, cmeth$$5, minfo$$17, nReqd, nActual, signature, nreqdTyArgs, nactualTyArgs, nReqdNamed, couldBeNameArgs, diff, missingArgs, matchValue$$65, names, str, cmeths2, cmeth$$14, cmeth$$16, msg, minfo$$18, msg$$1, s, sample, cmeth$$6, cmeth$$7, cmeth$$8, cmeth$$9, cmeth$$10;
  const amap$$8 = ConstraintSolverEnv$$get_amap(csenv$$53);
  const m$$37 = csenv$$53.m;
  const denv$$17 = csenv$$53.DisplayEnv;
  return (0, _ErrorLogger.ErrorD)((matchValue$$63 = [(0, _List.partition)(function predicate$$18($arg$$4) {
    return (0, _AccessibilityLogic.IsMethInfoAccessible)(amap$$8, m$$37, ad$$2, (0, _MethodCalls.CalledMeth$00601$$$GetMethod$$1BF99E32)($arg$$4));
  }, calledMethGroup$$2), (0, _List.partition)(function predicate$$19(cmeth$$1) {
    return (0, _MethodCalls.CalledMeth$00601$$HasCorrectObjArgs$$4DB9192C)(cmeth$$1, m$$37);
  }, calledMethGroup$$2), (0, _List.partition)(function predicate$$20(cmeth$$2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$2);
  }, calledMethGroup$$2), (0, _List.partition)(function predicate$$21(cmeth$$3) {
    return (0, _MethodCalls.CalledMeth$00601$$get_HasCorrectGenericArity)(cmeth$$3);
  }, calledMethGroup$$2), (0, _List.partition)(function predicate$$22(cmeth$$4) {
    return (0, _MethodCalls.CalledMeth$00601$$get_AssignsAllNamedArgs)(cmeth$$4);
  }, calledMethGroup$$2)], matchValue$$63[0][0].tail == null ? matchValue$$63[0][1].tail == null ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberIsNotAccessible$$Z384F8060)(methodName, ShowAccessDomain(ad$$2)), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberIsNotAccessible2$$Z384F8060)(methodName, ShowAccessDomain(ad$$2)), m$$37) : matchValue$$63[1][0].tail == null ? matchValue$$63[1][1].tail != null ? (0, _List.length)((0, _MethodCalls.CalledMeth$00601$$CalledObjArgTys$$4DB9192C)(matchValue$$63[1][1].head, m$$37)) !== 0 ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMethodIsNotAStaticMethod$$Z721C83C5)(methodName), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMethodIsNotAnInstanceMethod$$Z721C83C5)(methodName), m$$37) : matchValue$$63[4][0].tail == null ? matchValue$$63[4][1].tail != null ? matchValue$$63[4][1].tail.tail == null ? (minfo$$16 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[4][1].head), (patternInput$$10 = (0, _FSComp.SR$$$csRequiredSignatureIs$$Z721C83C5)((0, _NicePrint.stringOfMethInfo)(amap$$8, m$$37, denv$$17, minfo$$16)), (matchValue$$64 = (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(matchValue$$63[4][1].head), matchValue$$64.tail == null ? new _ErrorLogger.Error$([patternInput$$10[0], patternInput$$10[1]], m$$37) : (id$$1 = matchValue$$64.head.fields[0], (0, _infos.MethInfo$$get_IsConstructor)(minfo$$16) ? (predictFields = function predictFields() {
    return new Set((0, _List.map)(function mapping$$8(p) {
      return (0, _String.replace)((0, _tast.RecdField$$get_Name)(p), "@", "");
    }, (0, _tast.EntityRef$$get_AllInstanceFieldsAsList)((0, _infos.MethInfo$$get_DeclaringTyconRef)(minfo$$16))));
  }, new _ErrorLogger.ErrorWithSuggestions([patternInput$$10[0], (0, _FSComp.SR$$$csCtorHasNoArgumentOrReturnProperty$$30230F9B)(methodName, (0, _ast.Ident$$get_idText)(id$$1), patternInput$$10[1])], (0, _ast.Ident$$get_idRange)(id$$1), (0, _ast.Ident$$get_idText)(id$$1), predictFields)) : new _ErrorLogger.Error$([patternInput$$10[0], (0, _FSComp.SR$$$csMemberHasNoArgumentOrReturnProperty$$30230F9B)(methodName, (0, _ast.Ident$$get_idText)(id$$1), patternInput$$10[1])], (0, _ast.Ident$$get_idRange)(id$$1)))))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? matchValue$$63[2][1].tail.tail == null ? (cmeth$$5 = matchValue$$63[2][1].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$5)) ? (minfo$$17 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), (nReqd = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[2][1].head) | 0, (nActual = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head) | 0, (signature = (0, _NicePrint.stringOfMethInfo)(amap$$8, m$$37, denv$$17, minfo$$17), nActual === nReqd ? (nreqdTyArgs = (0, _MethodCalls.CalledMeth$00601$$get_NumCalledTyArgs)(matchValue$$63[2][1].head) | 0, (nactualTyArgs = (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(matchValue$$63[2][1].head) | 0, new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArityType$$Z2A429BA0)(methodName, nreqdTyArgs, nactualTyArgs, signature), m$$37))) : (nReqdNamed = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumAssignedNamedArgs)(matchValue$$63[2][1].head) | 0, (nReqdNamed === 0 ? (0, _MethodCalls.CalledMeth$00601$$get_NumAssignedProps)(matchValue$$63[2][1].head) === 0 : false) ? (0, _infos.MethInfo$$get_IsConstructor)(minfo$$17) ? (couldBeNameArgs = (0, _List.exists)(function predicate$$24(argSet$$2) {
    return (0, _List.exists)(function predicate$$23(c$$4) {
      return isSequential((0, _MethodCalls.CallerArg$00601$$get_Expr)(c$$4));
    }, argSet$$2.UnnamedCallerArgs);
  }, (0, _MethodCalls.CalledMeth$00601$$get_ArgSets)(matchValue$$63[2][1].head)), couldBeNameArgs ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csCtorSignatureMismatchArityProp$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csCtorSignatureMismatchArity$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37)) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArity$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37) : nReqd > nActual ? (diff = nReqd - nActual | 0, (missingArgs = (0, _illib.List$$$drop)(nReqd, (0, _MethodCalls.CalledMeth$00601$$get_AllUnnamedCalledArgs)(matchValue$$63[2][1].head)), (matchValue$$65 = (0, _MethodCalls.NamesOfCalledArgs)(missingArgs), matchValue$$65.tail == null ? nActual === 0 ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch$$6820229C)(methodName, diff, signature), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch2$$6820229C)(methodName, diff, signature), m$$37) : (names = matchValue$$65, (str = (0, _String.join)(";", ...(0, _ast.pathOfLid)(names)), nActual === 0 ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch3$$Z1E38F5D9)(methodName, diff, signature, str), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch4$$Z1E38F5D9)(methodName, diff, signature, str), m$$37)))))) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArityNamed$$3FB802DC)(methodName, nReqd + nReqdNamed, nActual, nReqdNamed, signature), m$$37)))))) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? matchValue$$63[2][1].tail.tail == null ? (cmeth$$6 = matchValue$$63[2][1].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$6)) ? (minfo$$17 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), (nReqd = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[2][1].head) | 0, (nActual = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head) | 0, (signature = (0, _NicePrint.stringOfMethInfo)(amap$$8, m$$37, denv$$17, minfo$$17), nActual === nReqd ? (nreqdTyArgs = (0, _MethodCalls.CalledMeth$00601$$get_NumCalledTyArgs)(matchValue$$63[2][1].head) | 0, (nactualTyArgs = (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(matchValue$$63[2][1].head) | 0, new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArityType$$Z2A429BA0)(methodName, nreqdTyArgs, nactualTyArgs, signature), m$$37))) : (nReqdNamed = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumAssignedNamedArgs)(matchValue$$63[2][1].head) | 0, (nReqdNamed === 0 ? (0, _MethodCalls.CalledMeth$00601$$get_NumAssignedProps)(matchValue$$63[2][1].head) === 0 : false) ? (0, _infos.MethInfo$$get_IsConstructor)(minfo$$17) ? (couldBeNameArgs = (0, _List.exists)(function predicate$$24(argSet$$2) {
    return (0, _List.exists)(function predicate$$23(c$$4) {
      return isSequential((0, _MethodCalls.CallerArg$00601$$get_Expr)(c$$4));
    }, argSet$$2.UnnamedCallerArgs);
  }, (0, _MethodCalls.CalledMeth$00601$$get_ArgSets)(matchValue$$63[2][1].head)), couldBeNameArgs ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csCtorSignatureMismatchArityProp$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csCtorSignatureMismatchArity$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37)) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArity$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37) : nReqd > nActual ? (diff = nReqd - nActual | 0, (missingArgs = (0, _illib.List$$$drop)(nReqd, (0, _MethodCalls.CalledMeth$00601$$get_AllUnnamedCalledArgs)(matchValue$$63[2][1].head)), (matchValue$$65 = (0, _MethodCalls.NamesOfCalledArgs)(missingArgs), matchValue$$65.tail == null ? nActual === 0 ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch$$6820229C)(methodName, diff, signature), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch2$$6820229C)(methodName, diff, signature), m$$37) : (names = matchValue$$65, (str = (0, _String.join)(";", ...(0, _ast.pathOfLid)(names)), nActual === 0 ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch3$$Z1E38F5D9)(methodName, diff, signature, str), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch4$$Z1E38F5D9)(methodName, diff, signature, str), m$$37)))))) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArityNamed$$3FB802DC)(methodName, nReqd + nReqdNamed, nActual, nReqdNamed, signature), m$$37)))))) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? matchValue$$63[2][1].tail.tail == null ? (cmeth$$7 = matchValue$$63[2][1].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$7)) ? (minfo$$17 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), (nReqd = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[2][1].head) | 0, (nActual = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head) | 0, (signature = (0, _NicePrint.stringOfMethInfo)(amap$$8, m$$37, denv$$17, minfo$$17), nActual === nReqd ? (nreqdTyArgs = (0, _MethodCalls.CalledMeth$00601$$get_NumCalledTyArgs)(matchValue$$63[2][1].head) | 0, (nactualTyArgs = (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(matchValue$$63[2][1].head) | 0, new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArityType$$Z2A429BA0)(methodName, nreqdTyArgs, nactualTyArgs, signature), m$$37))) : (nReqdNamed = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumAssignedNamedArgs)(matchValue$$63[2][1].head) | 0, (nReqdNamed === 0 ? (0, _MethodCalls.CalledMeth$00601$$get_NumAssignedProps)(matchValue$$63[2][1].head) === 0 : false) ? (0, _infos.MethInfo$$get_IsConstructor)(minfo$$17) ? (couldBeNameArgs = (0, _List.exists)(function predicate$$24(argSet$$2) {
    return (0, _List.exists)(function predicate$$23(c$$4) {
      return isSequential((0, _MethodCalls.CallerArg$00601$$get_Expr)(c$$4));
    }, argSet$$2.UnnamedCallerArgs);
  }, (0, _MethodCalls.CalledMeth$00601$$get_ArgSets)(matchValue$$63[2][1].head)), couldBeNameArgs ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csCtorSignatureMismatchArityProp$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csCtorSignatureMismatchArity$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37)) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArity$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37) : nReqd > nActual ? (diff = nReqd - nActual | 0, (missingArgs = (0, _illib.List$$$drop)(nReqd, (0, _MethodCalls.CalledMeth$00601$$get_AllUnnamedCalledArgs)(matchValue$$63[2][1].head)), (matchValue$$65 = (0, _MethodCalls.NamesOfCalledArgs)(missingArgs), matchValue$$65.tail == null ? nActual === 0 ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch$$6820229C)(methodName, diff, signature), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch2$$6820229C)(methodName, diff, signature), m$$37) : (names = matchValue$$65, (str = (0, _String.join)(";", ...(0, _ast.pathOfLid)(names)), nActual === 0 ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch3$$Z1E38F5D9)(methodName, diff, signature, str), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch4$$Z1E38F5D9)(methodName, diff, signature, str), m$$37)))))) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArityNamed$$3FB802DC)(methodName, nReqd + nReqdNamed, nActual, nReqdNamed, signature), m$$37)))))) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[4][0].tail == null ? matchValue$$63[4][1].tail != null ? matchValue$$63[4][1].tail.tail == null ? (minfo$$16 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[4][1].head), (patternInput$$10 = (0, _FSComp.SR$$$csRequiredSignatureIs$$Z721C83C5)((0, _NicePrint.stringOfMethInfo)(amap$$8, m$$37, denv$$17, minfo$$16)), (matchValue$$64 = (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(matchValue$$63[4][1].head), matchValue$$64.tail == null ? new _ErrorLogger.Error$([patternInput$$10[0], patternInput$$10[1]], m$$37) : (id$$1 = matchValue$$64.head.fields[0], (0, _infos.MethInfo$$get_IsConstructor)(minfo$$16) ? (predictFields = function predictFields() {
    return new Set((0, _List.map)(function mapping$$8(p) {
      return (0, _String.replace)((0, _tast.RecdField$$get_Name)(p), "@", "");
    }, (0, _tast.EntityRef$$get_AllInstanceFieldsAsList)((0, _infos.MethInfo$$get_DeclaringTyconRef)(minfo$$16))));
  }, new _ErrorLogger.ErrorWithSuggestions([patternInput$$10[0], (0, _FSComp.SR$$$csCtorHasNoArgumentOrReturnProperty$$30230F9B)(methodName, (0, _ast.Ident$$get_idText)(id$$1), patternInput$$10[1])], (0, _ast.Ident$$get_idRange)(id$$1), (0, _ast.Ident$$get_idText)(id$$1), predictFields)) : new _ErrorLogger.Error$([patternInput$$10[0], (0, _FSComp.SR$$$csMemberHasNoArgumentOrReturnProperty$$30230F9B)(methodName, (0, _ast.Ident$$get_idText)(id$$1), patternInput$$10[1])], (0, _ast.Ident$$get_idRange)(id$$1)))))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? matchValue$$63[2][1].tail.tail == null ? (cmeth$$8 = matchValue$$63[2][1].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$8)) ? (minfo$$17 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), (nReqd = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[2][1].head) | 0, (nActual = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head) | 0, (signature = (0, _NicePrint.stringOfMethInfo)(amap$$8, m$$37, denv$$17, minfo$$17), nActual === nReqd ? (nreqdTyArgs = (0, _MethodCalls.CalledMeth$00601$$get_NumCalledTyArgs)(matchValue$$63[2][1].head) | 0, (nactualTyArgs = (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(matchValue$$63[2][1].head) | 0, new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArityType$$Z2A429BA0)(methodName, nreqdTyArgs, nactualTyArgs, signature), m$$37))) : (nReqdNamed = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumAssignedNamedArgs)(matchValue$$63[2][1].head) | 0, (nReqdNamed === 0 ? (0, _MethodCalls.CalledMeth$00601$$get_NumAssignedProps)(matchValue$$63[2][1].head) === 0 : false) ? (0, _infos.MethInfo$$get_IsConstructor)(minfo$$17) ? (couldBeNameArgs = (0, _List.exists)(function predicate$$24(argSet$$2) {
    return (0, _List.exists)(function predicate$$23(c$$4) {
      return isSequential((0, _MethodCalls.CallerArg$00601$$get_Expr)(c$$4));
    }, argSet$$2.UnnamedCallerArgs);
  }, (0, _MethodCalls.CalledMeth$00601$$get_ArgSets)(matchValue$$63[2][1].head)), couldBeNameArgs ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csCtorSignatureMismatchArityProp$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csCtorSignatureMismatchArity$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37)) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArity$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37) : nReqd > nActual ? (diff = nReqd - nActual | 0, (missingArgs = (0, _illib.List$$$drop)(nReqd, (0, _MethodCalls.CalledMeth$00601$$get_AllUnnamedCalledArgs)(matchValue$$63[2][1].head)), (matchValue$$65 = (0, _MethodCalls.NamesOfCalledArgs)(missingArgs), matchValue$$65.tail == null ? nActual === 0 ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch$$6820229C)(methodName, diff, signature), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch2$$6820229C)(methodName, diff, signature), m$$37) : (names = matchValue$$65, (str = (0, _String.join)(";", ...(0, _ast.pathOfLid)(names)), nActual === 0 ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch3$$Z1E38F5D9)(methodName, diff, signature, str), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch4$$Z1E38F5D9)(methodName, diff, signature, str), m$$37)))))) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArityNamed$$3FB802DC)(methodName, nReqd + nReqdNamed, nActual, nReqdNamed, signature), m$$37)))))) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? matchValue$$63[2][1].tail.tail == null ? (cmeth$$9 = matchValue$$63[2][1].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$9)) ? (minfo$$17 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), (nReqd = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[2][1].head) | 0, (nActual = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head) | 0, (signature = (0, _NicePrint.stringOfMethInfo)(amap$$8, m$$37, denv$$17, minfo$$17), nActual === nReqd ? (nreqdTyArgs = (0, _MethodCalls.CalledMeth$00601$$get_NumCalledTyArgs)(matchValue$$63[2][1].head) | 0, (nactualTyArgs = (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(matchValue$$63[2][1].head) | 0, new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArityType$$Z2A429BA0)(methodName, nreqdTyArgs, nactualTyArgs, signature), m$$37))) : (nReqdNamed = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumAssignedNamedArgs)(matchValue$$63[2][1].head) | 0, (nReqdNamed === 0 ? (0, _MethodCalls.CalledMeth$00601$$get_NumAssignedProps)(matchValue$$63[2][1].head) === 0 : false) ? (0, _infos.MethInfo$$get_IsConstructor)(minfo$$17) ? (couldBeNameArgs = (0, _List.exists)(function predicate$$24(argSet$$2) {
    return (0, _List.exists)(function predicate$$23(c$$4) {
      return isSequential((0, _MethodCalls.CallerArg$00601$$get_Expr)(c$$4));
    }, argSet$$2.UnnamedCallerArgs);
  }, (0, _MethodCalls.CalledMeth$00601$$get_ArgSets)(matchValue$$63[2][1].head)), couldBeNameArgs ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csCtorSignatureMismatchArityProp$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csCtorSignatureMismatchArity$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37)) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArity$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37) : nReqd > nActual ? (diff = nReqd - nActual | 0, (missingArgs = (0, _illib.List$$$drop)(nReqd, (0, _MethodCalls.CalledMeth$00601$$get_AllUnnamedCalledArgs)(matchValue$$63[2][1].head)), (matchValue$$65 = (0, _MethodCalls.NamesOfCalledArgs)(missingArgs), matchValue$$65.tail == null ? nActual === 0 ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch$$6820229C)(methodName, diff, signature), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch2$$6820229C)(methodName, diff, signature), m$$37) : (names = matchValue$$65, (str = (0, _String.join)(";", ...(0, _ast.pathOfLid)(names)), nActual === 0 ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch3$$Z1E38F5D9)(methodName, diff, signature, str), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch4$$Z1E38F5D9)(methodName, diff, signature, str), m$$37)))))) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArityNamed$$3FB802DC)(methodName, nReqd + nReqdNamed, nActual, nReqdNamed, signature), m$$37)))))) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? matchValue$$63[2][1].tail.tail == null ? (cmeth$$10 = matchValue$$63[2][1].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$10)) ? (minfo$$17 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), (nReqd = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[2][1].head) | 0, (nActual = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head) | 0, (signature = (0, _NicePrint.stringOfMethInfo)(amap$$8, m$$37, denv$$17, minfo$$17), nActual === nReqd ? (nreqdTyArgs = (0, _MethodCalls.CalledMeth$00601$$get_NumCalledTyArgs)(matchValue$$63[2][1].head) | 0, (nactualTyArgs = (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(matchValue$$63[2][1].head) | 0, new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArityType$$Z2A429BA0)(methodName, nreqdTyArgs, nactualTyArgs, signature), m$$37))) : (nReqdNamed = (0, _MethodCalls.CalledMeth$00601$$get_TotalNumAssignedNamedArgs)(matchValue$$63[2][1].head) | 0, (nReqdNamed === 0 ? (0, _MethodCalls.CalledMeth$00601$$get_NumAssignedProps)(matchValue$$63[2][1].head) === 0 : false) ? (0, _infos.MethInfo$$get_IsConstructor)(minfo$$17) ? (couldBeNameArgs = (0, _List.exists)(function predicate$$24(argSet$$2) {
    return (0, _List.exists)(function predicate$$23(c$$4) {
      return isSequential((0, _MethodCalls.CallerArg$00601$$get_Expr)(c$$4));
    }, argSet$$2.UnnamedCallerArgs);
  }, (0, _MethodCalls.CalledMeth$00601$$get_ArgSets)(matchValue$$63[2][1].head)), couldBeNameArgs ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csCtorSignatureMismatchArityProp$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csCtorSignatureMismatchArity$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37)) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArity$$Z2A429BA0)(methodName, nReqd, nActual, signature), m$$37) : nReqd > nActual ? (diff = nReqd - nActual | 0, (missingArgs = (0, _illib.List$$$drop)(nReqd, (0, _MethodCalls.CalledMeth$00601$$get_AllUnnamedCalledArgs)(matchValue$$63[2][1].head)), (matchValue$$65 = (0, _MethodCalls.NamesOfCalledArgs)(missingArgs), matchValue$$65.tail == null ? nActual === 0 ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch$$6820229C)(methodName, diff, signature), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch2$$6820229C)(methodName, diff, signature), m$$37) : (names = matchValue$$65, (str = (0, _String.join)(";", ...(0, _ast.pathOfLid)(names)), nActual === 0 ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch3$$Z1E38F5D9)(methodName, diff, signature, str), m$$37) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatch4$$Z1E38F5D9)(methodName, diff, signature, str), m$$37)))))) : new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberSignatureMismatchArityNamed$$3FB802DC)(methodName, nReqd + nReqdNamed, nActual, nReqdNamed, signature), m$$37)))))) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[0][0].tail != null ? (cmeths2 = matchValue$$63[0][0].tail, (cmeth$$14 = matchValue$$63[0][0].head, !(0, _MethodCalls.CalledMeth$00601$$get_HasCorrectArity)(cmeth$$14) ? (0, _List.forAll)(function predicate$$25(cmeth2) {
    return (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth$$14) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(cmeth2);
  }, cmeths2) : false)) ? new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberNotAccessible$$Z3E662FC0)(methodName, nUnnamedCallerArgs, methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(matchValue$$63[0][0].head)), m$$37) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[3][0].tail == null ? matchValue$$63[3][1].tail != null ? (cmeth$$16 = matchValue$$63[3][1].head, (msg = (0, _FSComp.SR$$$csIncorrectGenericInstantiation$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, (0, _MethodCalls.CalledMeth$00601$$get_NumCallerTyArgs)(cmeth$$16)), new _ErrorLogger.Error$(msg, m$$37))) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : matchValue$$63[2][0].tail == null ? matchValue$$63[2][1].tail != null ? (minfo$$18 = (0, _MethodCalls.CalledMeth$00601$$get_Method)(matchValue$$63[2][1].head), new _ErrorLogger.Error$((0, _FSComp.SR$$$csMemberOverloadArityMismatch$$487EF8FB)(methodName, (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs)(matchValue$$63[2][1].head), (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$18), {
    GetZero() {
      return 0;
    },

    Add($x$$5, $y$$6) {
      return $x$$5 + $y$$6;
    }

  })), m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37)) : (msg$$1 = nNamedCallerArgs === 0 ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments$$107DD5FC)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs) : (s = (0, _Set.intersectMany)((0, _List.map)(function mapping$$10(cmeth$$18) {
    return (0, _Set.ofList)((0, _List.map)(function mapping$$9(na) {
      return (0, _MethodCalls.CallerNamedArg$00601$$get_Name)(na);
    }, (0, _MethodCalls.CalledMeth$00601$$get_UnassignedNamedArgs)(cmeth$$18)), {
      Compare: _Util.comparePrimitives
    });
  }, calledMethGroup$$2)), (0, _Set.FSharpSet$$get_IsEmpty)(s) ? (0, _FSComp.SR$$$csNoMemberTakesTheseArguments2$$Z727ACCE0)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, nNamedCallerArgs) : (sample = (0, _Set.FSharpSet$$get_MinimumElement)(s), (0, _FSComp.SR$$$csNoMemberTakesTheseArguments3$$Z522416B9)(ShowAccessDomain(ad$$2), methodName, nUnnamedCallerArgs, sample))), new _ErrorLogger.Error$(msg$$1, m$$37))));
}

function ReportNoCandidatesErrorExpr(csenv$$54, callerArgCounts_0, callerArgCounts_1, methodName$$1, ad$$3, calledMethGroup$$3) {
  const callerArgCounts = [callerArgCounts_0, callerArgCounts_1];

  const isSequential$$1 = function isSequential$$1(e$$5) {
    if (e$$5.tag === 2) {
      return true;
    } else {
      return false;
    }
  };

  return ReportNoCandidatesError(csenv$$54, callerArgCounts[0], callerArgCounts[1], methodName$$1, ad$$3, calledMethGroup$$3, isSequential$$1);
}

function ReportNoCandidatesErrorSynExpr(csenv$$55, callerArgCounts_0$$1, callerArgCounts_1$$1, methodName$$2, ad$$4, calledMethGroup$$4) {
  const callerArgCounts$$1 = [callerArgCounts_0$$1, callerArgCounts_1$$1];

  const isSequential$$2 = function isSequential$$2(e$$6) {
    if (e$$6.tag === 26) {
      return true;
    } else {
      return false;
    }
  };

  return ReportNoCandidatesError(csenv$$55, callerArgCounts$$1[0], callerArgCounts$$1[1], methodName$$2, ad$$4, calledMethGroup$$4, isSequential$$2);
}

function ResolveOverloading(csenv$$56, trace$$51, methodName$$3, ndeep$$40, cx$$3, callerArgCounts_0$$2, callerArgCounts_1$$2, ad$$5, calledMethGroup$$5, permitOptArgs$$1, reqdRetTyOpt$$1) {
  var calledMeth$$3;
  const callerArgCounts$$2 = [callerArgCounts_0$$2, callerArgCounts_1$$2];
  const g$$46 = ConstraintSolverEnv$$get_g(csenv$$56);
  const amap$$9 = ConstraintSolverEnv$$get_amap(csenv$$56);
  const m$$38 = csenv$$56.m;
  const denv$$18 = csenv$$56.DisplayEnv;
  const isOpConversion = methodName$$3 === "op_Explicit" ? true : methodName$$3 === "op_Implicit";
  const candidates = (0, _List.filter)(function predicate$$26(cmeth$$19) {
    return (0, _MethodCalls.CalledMeth$00601$$IsCandidate$$Z2A1B6767)(cmeth$$19, m$$38, ad$$5);
  }, calledMethGroup$$5);
  let patternInput$$11;
  const matchValue$$66 = [calledMethGroup$$5, candidates];
  var $target$$116, calledMeth$$4;

  if (matchValue$$66[1].tail != null) {
    if (matchValue$$66[1].tail.tail == null) {
      if (calledMeth$$3 = matchValue$$66[1].head, !isOpConversion) {
        $target$$116 = 0;
        calledMeth$$4 = matchValue$$66[1].head;
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
        patternInput$$11 = [calledMeth$$4, _ErrorLogger.CompleteD, new OptionalTrace(0, "NoTrace")];
        break;
      }

    case 1:
      {
        var $target$$117;

        if (matchValue$$66[0].tail == null) {
          if (!isOpConversion) {
            $target$$117 = 0;
          } else {
            $target$$117 = 1;
          }
        } else {
          $target$$117 = 1;
        }

        switch ($target$$117) {
          case 0:
            {
              patternInput$$11 = [null, (0, _ErrorLogger.ErrorD)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csMethodNotFound$$Z721C83C5)(methodName$$3), m$$38)), new OptionalTrace(0, "NoTrace")];
              break;
            }

          case 1:
            {
              var $target$$118;

              if (matchValue$$66[1].tail == null) {
                if (!isOpConversion) {
                  $target$$118 = 0;
                } else {
                  $target$$118 = 1;
                }
              } else {
                $target$$118 = 1;
              }

              switch ($target$$118) {
                case 0:
                  {
                    patternInput$$11 = [null, ReportNoCandidatesErrorExpr(csenv$$56, callerArgCounts$$2[0], callerArgCounts$$2[1], methodName$$3, ad$$5, calledMethGroup$$5), new OptionalTrace(0, "NoTrace")];
                    break;
                  }

                case 1:
                  {
                    const alwaysCheckReturn$$1 = isOpConversion ? true : (0, _List.exists)(function predicate$$27(cmeth$$20) {
                      return (0, _MethodCalls.CalledMeth$00601$$get_HasOutArgs)(cmeth$$20);
                    }, candidates);
                    const matchValue$$67 = FilterEachThenUndo(function f$$19(newTrace$$2, calledMeth$$5) {
                      const cxsln$$13 = (0, _Option.defaultArg)(cx$$3, null, function (traitInfo$$9) {
                        return [traitInfo$$9, MemberConstraintSolutionOfMethInfo(csenv$$56.SolverState, m$$38, (0, _MethodCalls.CalledMeth$00601$$get_Method)(calledMeth$$5), (0, _MethodCalls.CalledMeth$00601$$get_CalledTyArgs)(calledMeth$$5))];
                      });
                      return CanMemberSigsMatchUpToCheck(csenv$$56, permitOptArgs$$1, alwaysCheckReturn$$1, function (ty1$$14, ty2$$12) {
                        return MustUnifyInsideUndo(csenv$$56, ndeep$$40, newTrace$$2, cxsln$$13, ty1$$14, ty2$$12);
                      }, function (calledArgTy$$8, callerArgTy$$3) {
                        return TypesMustSubsumeOrConvertInsideUndo(csenv$$56, ndeep$$40, new OptionalTrace(1, "WithTrace", newTrace$$2), cxsln$$13, m$$38, calledArgTy$$8, callerArgTy$$3);
                      }, function (calledArg$$4, arg30$0040$$2) {
                        return ArgsEquivInsideUndo(csenv$$56, cx$$3 != null, calledArg$$4, arg30$0040$$2);
                      }, reqdRetTyOpt$$1, calledMeth$$5);
                    }, candidates);
                    var $target$$119, calledMeth$$6, warns$$1;

                    if (matchValue$$67.tail != null) {
                      if (matchValue$$67.tail.tail == null) {
                        $target$$119 = 0;
                        calledMeth$$6 = matchValue$$67.head[0];
                        warns$$1 = matchValue$$67.head[1];
                      } else {
                        $target$$119 = 1;
                      }
                    } else {
                      $target$$119 = 1;
                    }

                    switch ($target$$119) {
                      case 0:
                        {
                          patternInput$$11 = [calledMeth$$6, new _ErrorLogger.OperationResult$00601(0, "OkResult", warns$$1, null), new OptionalTrace(0, "NoTrace")];
                          break;
                        }

                      case 1:
                        {
                          const applicable = FilterEachThenUndo(function f$$20(newTrace$$3, candidate) {
                            const cxsln$$14 = (0, _Option.defaultArg)(cx$$3, null, function (traitInfo$$10) {
                              return [traitInfo$$10, MemberConstraintSolutionOfMethInfo(csenv$$56.SolverState, m$$38, (0, _MethodCalls.CalledMeth$00601$$get_Method)(candidate), (0, _MethodCalls.CalledMeth$00601$$get_CalledTyArgs)(candidate))];
                            });
                            return CanMemberSigsMatchUpToCheck(csenv$$56, permitOptArgs$$1, alwaysCheckReturn$$1, function (ty1$$15, ty2$$13) {
                              return MustUnifyInsideUndo(csenv$$56, ndeep$$40, newTrace$$3, cxsln$$14, ty1$$15, ty2$$13);
                            }, function (calledArgTy$$9, callerArgTy$$4) {
                              return TypesMustSubsumeOrConvertInsideUndo(csenv$$56, ndeep$$40, new OptionalTrace(1, "WithTrace", newTrace$$3), cxsln$$14, m$$38, calledArgTy$$9, callerArgTy$$4);
                            }, function (calledArg$$5, arg60$0040) {
                              return ArgsMustSubsumeOrConvertInsideUndo(csenv$$56, ndeep$$40, newTrace$$3, cxsln$$14, cx$$3 != null, calledArg$$5, arg60$0040);
                            }, reqdRetTyOpt$$1, candidate);
                          }, candidates);

                          const failOverloading = function failOverloading(msg$$2, errors$$1) {
                            let convOpData;

                            if (isOpConversion) {
                              const matchValue$$68 = [calledMethGroup$$5, reqdRetTyOpt$$1];
                              var $target$$120, h$$1, rty$$5;

                              if (matchValue$$68[0].tail != null) {
                                if (matchValue$$68[1] != null) {
                                  $target$$120 = 0;
                                  h$$1 = matchValue$$68[0].head;
                                  rty$$5 = matchValue$$68[1];
                                } else {
                                  $target$$120 = 1;
                                }
                              } else {
                                $target$$120 = 1;
                              }

                              switch ($target$$120) {
                                case 0:
                                  {
                                    convOpData = [(0, _infos.MethInfo$$get_ApparentEnclosingType)((0, _MethodCalls.CalledMeth$00601$$get_Method)(h$$1)), rty$$5];
                                    break;
                                  }

                                case 1:
                                  {
                                    convOpData = null;
                                    break;
                                  }
                              }
                            } else {
                              convOpData = null;
                            }

                            if (convOpData == null) {
                              const overloads = GetPossibleOverloads(amap$$9, m$$38, denv$$18, errors$$1);
                              const msg$$3 = overloads.tail == null ? msg$$2 : (0, _String.toText)((0, _String.printf)("%s %s"))(msg$$2)((0, _FSComp.SR$$$csSeeAvailableOverloads)());
                              return new UnresolvedOverloading(denv$$18, overloads, msg$$3, m$$38);
                            } else {
                              const toTy = convOpData[1];
                              const fromTy = convOpData[0];
                              return new UnresolvedConversionOperator(denv$$18, fromTy, toTy, m$$38);
                            }
                          };

                          if (applicable.tail != null) {
                            if (applicable.tail.tail == null) {
                              patternInput$$11 = [applicable.head[0], new _ErrorLogger.OperationResult$00601(0, "OkResult", applicable.head[1], null), new OptionalTrace(1, "WithTrace", applicable.head[2])];
                            } else {
                              const compareCond = function compareCond(p$$1, x1, x2) {
                                return (0, _Util.comparePrimitives)(p$$1(x1, x2), p$$1(x2, x1));
                              };

                              const compareTypes = function compareTypes(ty1$$17, ty2$$15) {
                                return compareCond(function (x1$$1, x2$$1) {
                                  return (0, _TypeRelations.TypeFeasiblySubsumesType)(ndeep$$40, ConstraintSolverEnv$$get_g(csenv$$56), ConstraintSolverEnv$$get_amap(csenv$$56), m$$38, x2$$1, new _TypeRelations.CanCoerce(0, "CanCoerce"), x1$$1);
                                }, ty1$$17, ty2$$15);
                              };

                              const compareArg = function compareArg(calledArg1, calledArg2) {
                                const c$$5 = compareTypes(calledArg1.CalledArgumentType, calledArg2.CalledArgumentType) | 0;

                                if (c$$5 !== 0) {
                                  return c$$5 | 0;
                                } else {
                                  const c$$6 = compareCond(function (ty1$$18, ty2$$16) {
                                    var tcref1, matchValue$$71, p$$2;
                                    const matchValue$$70 = (0, _TastOps.tryDestAppTy)(ConstraintSolverEnv$$get_g(csenv$$56), ty1$$18);
                                    var $target$$124, tcref1$$1;

                                    if (matchValue$$70 != null) {
                                      if (tcref1 = matchValue$$70, (((0, _tast.EntityRef$$get_DisplayName)(tcref1) === "Func" ? (matchValue$$71 = (0, _tast.EntityRef$$get_PublicPath)(tcref1), matchValue$$71 != null ? (p$$2 = matchValue$$71, (0, _Array.equalsWith)(_Util.comparePrimitives, (0, _tast.PublicPath$$get_EnclosingPath)(p$$2), ["System"])) : false) : false) ? (0, _TastOps.isDelegateTy)(g$$46, ty1$$18) : false) ? (0, _TastOps.isDelegateTy)(g$$46, ty2$$16) : false) {
                                        $target$$124 = 0;
                                        tcref1$$1 = matchValue$$70;
                                      } else {
                                        $target$$124 = 1;
                                      }
                                    } else {
                                      $target$$124 = 1;
                                    }

                                    switch ($target$$124) {
                                      case 0:
                                        {
                                          return true;
                                        }

                                      case 1:
                                        {
                                          return ((0, _TastOps.isInByrefTy)(ConstraintSolverEnv$$get_g(csenv$$56), ty2$$16) ? (0, _TastOps.typeEquiv)(ConstraintSolverEnv$$get_g(csenv$$56), ty1$$18, (0, _TastOps.destByrefTy)(ConstraintSolverEnv$$get_g(csenv$$56), ty2$$16)) : false) ? true : false;
                                        }
                                    }
                                  }, calledArg1.CalledArgumentType, calledArg2.CalledArgumentType) | 0;

                                  if (c$$6 !== 0) {
                                    return c$$6 | 0;
                                  } else {
                                    return 0;
                                  }
                                }
                              };

                              const better = function better(tupledArg$$15, tupledArg$$16) {
                                var objArgTys1, objArgTys2;
                                const candidateWarnCount = (0, _List.length)(tupledArg$$15[1]) | 0;
                                const otherWarnCount = (0, _List.length)(tupledArg$$16[1]) | 0;
                                const c$$7 = (0, _Util.comparePrimitives)(candidateWarnCount === 0, otherWarnCount === 0) | 0;

                                if (c$$7 !== 0) {
                                  return c$$7 | 0;
                                } else {
                                  const c$$8 = (0, _Util.comparePrimitives)(!(0, _MethodCalls.CalledMeth$00601$$get_UsesParamArrayConversion)(tupledArg$$15[0]), !(0, _MethodCalls.CalledMeth$00601$$get_UsesParamArrayConversion)(tupledArg$$16[0])) | 0;

                                  if (c$$8 !== 0) {
                                    return c$$8 | 0;
                                  } else {
                                    const c$$9 = (((0, _MethodCalls.CalledMeth$00601$$get_UsesParamArrayConversion)(tupledArg$$15[0]) ? (0, _MethodCalls.CalledMeth$00601$$get_UsesParamArrayConversion)(tupledArg$$16[0]) : false) ? compareTypes((0, _MethodCalls.CalledMeth$00601$$get_ParamArrayElementType)(tupledArg$$15[0]), (0, _MethodCalls.CalledMeth$00601$$get_ParamArrayElementType)(tupledArg$$16[0])) : 0) | 0;

                                    if (c$$9 !== 0) {
                                      return c$$9 | 0;
                                    } else {
                                      const c$$10 = (0, _Util.comparePrimitives)(!(0, _MethodCalls.CalledMeth$00601$$get_HasOutArgs)(tupledArg$$15[0]), !(0, _MethodCalls.CalledMeth$00601$$get_HasOutArgs)(tupledArg$$16[0])) | 0;

                                      if (c$$10 !== 0) {
                                        return c$$10 | 0;
                                      } else {
                                        const c$$11 = (0, _Util.comparePrimitives)(!(0, _MethodCalls.CalledMeth$00601$$get_HasOptArgs)(tupledArg$$15[0]), !(0, _MethodCalls.CalledMeth$00601$$get_HasOptArgs)(tupledArg$$16[0])) | 0;

                                        if (c$$11 !== 0) {
                                          return c$$11 | 0;
                                        } else {
                                          let c$$12;

                                          if ((0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(tupledArg$$15[0]) === (0, _MethodCalls.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs)(tupledArg$$16[0])) {
                                            const cs$$2 = (0, _List.append)(((0, _infos.MethInfo$$get_IsExtensionMember)((0, _MethodCalls.CalledMeth$00601$$get_Method)(tupledArg$$15[0])) ? (0, _infos.MethInfo$$get_IsExtensionMember)((0, _MethodCalls.CalledMeth$00601$$get_Method)(tupledArg$$16[0])) : false) ? (objArgTys1 = (0, _MethodCalls.CalledMeth$00601$$CalledObjArgTys$$4DB9192C)(tupledArg$$15[0], m$$38), (objArgTys2 = (0, _MethodCalls.CalledMeth$00601$$CalledObjArgTys$$4DB9192C)(tupledArg$$16[0], m$$38), (0, _List.length)(objArgTys1) === (0, _List.length)(objArgTys2) ? (0, _List.map2)(compareTypes, objArgTys1, objArgTys2) : (0, _Types.L)())) : (0, _Types.L)(), (0, _List.map2)(compareArg, (0, _MethodCalls.CalledMeth$00601$$get_AllUnnamedCalledArgs)(tupledArg$$15[0]), (0, _MethodCalls.CalledMeth$00601$$get_AllUnnamedCalledArgs)(tupledArg$$16[0])));
                                            c$$12 = ((0, _List.forAll)(function predicate$$28(x$$7) {
                                              return x$$7 >= 0;
                                            }, cs$$2) ? (0, _List.exists)(function predicate$$29(x$$8) {
                                              return x$$8 > 0;
                                            }, cs$$2) : false) ? 1 : ((0, _List.forAll)(function predicate$$30(x$$9) {
                                              return x$$9 <= 0;
                                            }, cs$$2) ? (0, _List.exists)(function predicate$$31(x$$10) {
                                              return x$$10 < 0;
                                            }, cs$$2) : false) ? -1 : 0;
                                          } else {
                                            c$$12 = 0;
                                          }

                                          if (c$$12 !== 0) {
                                            return c$$12 | 0;
                                          } else {
                                            const c$$13 = (0, _Util.comparePrimitives)(!(0, _infos.MethInfo$$get_IsExtensionMember)((0, _MethodCalls.CalledMeth$00601$$get_Method)(tupledArg$$15[0])), !(0, _infos.MethInfo$$get_IsExtensionMember)((0, _MethodCalls.CalledMeth$00601$$get_Method)(tupledArg$$16[0]))) | 0;

                                            if (c$$13 !== 0) {
                                              return c$$13 | 0;
                                            } else {
                                              const c$$14 = (((0, _infos.MethInfo$$get_IsExtensionMember)((0, _MethodCalls.CalledMeth$00601$$get_Method)(tupledArg$$15[0])) ? (0, _infos.MethInfo$$get_IsExtensionMember)((0, _MethodCalls.CalledMeth$00601$$get_Method)(tupledArg$$16[0])) : false) ? (0, _Long.compare)((0, _infos.MethInfo$$get_ExtensionMemberPriority)((0, _MethodCalls.CalledMeth$00601$$get_Method)(tupledArg$$15[0])), (0, _infos.MethInfo$$get_ExtensionMemberPriority)((0, _MethodCalls.CalledMeth$00601$$get_Method)(tupledArg$$16[0]))) : 0) | 0;

                                              if (c$$14 !== 0) {
                                                return c$$14 | 0;
                                              } else {
                                                const c$$15 = (0, _Util.comparePrimitives)((0, _MethodCalls.CalledMeth$00601$$get_CalledTyArgs)(tupledArg$$15[0]).tail == null, (0, _MethodCalls.CalledMeth$00601$$get_CalledTyArgs)(tupledArg$$16[0]).tail == null) | 0;

                                                if (c$$15 !== 0) {
                                                  return c$$15 | 0;
                                                } else {
                                                  return 0;
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

                              let bestMethods;
                              const indexedApplicableMeths = (0, _List.indexed)(applicable);
                              bestMethods = (0, _List.choose)(function chooser$$5(tupledArg$$17) {
                                if ((0, _List.forAll)(function predicate$$32(tupledArg$$18) {
                                  if (tupledArg$$17[0] === tupledArg$$18[0]) {
                                    return true;
                                  } else {
                                    const res$$8 = better(tupledArg$$17[1], tupledArg$$18[1]) | 0;
                                    return res$$8 > 0;
                                  }
                                }, indexedApplicableMeths)) {
                                  return tupledArg$$17[1];
                                } else {
                                  return null;
                                }
                              }, indexedApplicableMeths);
                              var $target$$125, calledMeth$$9, t$$8, warns$$3, bestMethods$$1;

                              if (bestMethods.tail != null) {
                                if (bestMethods.tail.tail == null) {
                                  $target$$125 = 0;
                                  calledMeth$$9 = bestMethods.head[0];
                                  t$$8 = bestMethods.head[2];
                                  warns$$3 = bestMethods.head[1];
                                } else {
                                  $target$$125 = 1;
                                  bestMethods$$1 = bestMethods;
                                }
                              } else {
                                $target$$125 = 1;
                                bestMethods$$1 = bestMethods;
                              }

                              switch ($target$$125) {
                                case 0:
                                  {
                                    patternInput$$11 = [calledMeth$$9, new _ErrorLogger.OperationResult$00601(0, "OkResult", warns$$3, null), new OptionalTrace(1, "WithTrace", t$$8)];
                                    break;
                                  }

                                case 1:
                                  {
                                    let methodNames;
                                    let methods;

                                    if (bestMethods$$1.tail == null) {
                                      if (applicable.tail == null) {
                                        methods = candidates;
                                      } else {
                                        const m$$39 = applicable;
                                        methods = (0, _List.map)(function mapping$$11(tupledArg$$19) {
                                          return tupledArg$$19[0];
                                        }, m$$39);
                                      }
                                    } else {
                                      const m$$40 = bestMethods$$1;
                                      methods = (0, _List.map)(function mapping$$12(tupledArg$$20) {
                                        return tupledArg$$20[0];
                                      }, m$$40);
                                    }

                                    methodNames = (0, _List.sort)((0, _List.map)(function mapping$$13(cmeth$$21) {
                                      return (0, _NicePrint.stringOfMethInfo)(amap$$9, m$$38, denv$$18, (0, _MethodCalls.CalledMeth$00601$$get_Method)(cmeth$$21));
                                    }, methods), {
                                      Compare: _Util.comparePrimitives
                                    });
                                    const msg$$4 = (0, _FSComp.SR$$$csMethodIsOverloaded$$Z721C83C5)(methodName$$3);
                                    let msg$$5;

                                    if (methodNames.tail == null) {
                                      msg$$5 = msg$$4;
                                    } else {
                                      const names$$1 = methodNames;
                                      msg$$5 = (0, _String.toText)((0, _String.printf)("%s %s"))(msg$$4)((0, _FSComp.SR$$$csCandidates$$Z721C83C5)((0, _String.join)(", ", ...names$$1)));
                                    }

                                    patternInput$$11 = [null, (0, _ErrorLogger.ErrorD)(failOverloading(msg$$5, (0, _Types.L)())), new OptionalTrace(0, "NoTrace")];
                                    break;
                                  }
                              }
                            }
                          } else {
                            const errors$$2 = (0, _List.choose)(function chooser$$4(calledMeth$$7) {
                              const matchValue$$69 = CollectThenUndo(function (newTrace$$4) {
                                const cxsln$$15 = (0, _Option.defaultArg)(cx$$3, null, function (traitInfo$$11) {
                                  return [traitInfo$$11, MemberConstraintSolutionOfMethInfo(csenv$$56.SolverState, m$$38, (0, _MethodCalls.CalledMeth$00601$$get_Method)(calledMeth$$7), (0, _MethodCalls.CalledMeth$00601$$get_CalledTyArgs)(calledMeth$$7))];
                                });
                                return CanMemberSigsMatchUpToCheck(csenv$$56, permitOptArgs$$1, alwaysCheckReturn$$1, function (ty1$$16, ty2$$14) {
                                  return MustUnifyInsideUndo(csenv$$56, ndeep$$40, newTrace$$4, cxsln$$15, ty1$$16, ty2$$14);
                                }, function (calledArgTy$$10, callerArgTy$$5) {
                                  return TypesMustSubsumeOrConvertInsideUndo(csenv$$56, ndeep$$40, new OptionalTrace(1, "WithTrace", newTrace$$4), cxsln$$15, m$$38, calledArgTy$$10, callerArgTy$$5);
                                }, function (calledArg$$6, arg60$0040$$1) {
                                  return ArgsMustSubsumeOrConvertInsideUndo(csenv$$56, ndeep$$40, newTrace$$4, cxsln$$15, cx$$3 != null, calledArg$$6, arg60$0040$$1);
                                }, reqdRetTyOpt$$1, calledMeth$$7);
                              });

                              if (matchValue$$69.tag === 1) {
                                const exn = matchValue$$69.fields[1];
                                return [calledMeth$$7, exn];
                              } else {
                                return null;
                              }
                            }, candidates);
                            patternInput$$11 = [null, (0, _ErrorLogger.ErrorD)(failOverloading((0, _FSComp.SR$$$csNoOverloadsFound$$Z721C83C5)(methodName$$3), errors$$2)), new OptionalTrace(0, "NoTrace")];
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

  if (patternInput$$11[0] == null) {
    return [null, patternInput$$11[1]];
  } else {
    const calledMeth$$10 = patternInput$$11[0];
    return [patternInput$$11[0], (0, _ErrorLogger.op_PlusPlus)(patternInput$$11[1], function () {
      const cxsln$$16 = (0, _Option.defaultArg)(cx$$3, null, function (traitInfo$$12) {
        return [traitInfo$$12, MemberConstraintSolutionOfMethInfo(csenv$$56.SolverState, m$$38, (0, _MethodCalls.CalledMeth$00601$$get_Method)(calledMeth$$10), (0, _MethodCalls.CalledMeth$00601$$get_CalledTyArgs)(calledMeth$$10))];
      });

      if (patternInput$$11[2].tag === 1) {
        const calledMethTrc = patternInput$$11[2].fields[0];
        OptionalTrace$$AddFromReplay$$74A155B9(trace$$51, calledMethTrc);

        if (reqdRetTyOpt$$1 != null) {
          if ((0, _infos.MethInfo$$get_IsConstructor)((0, _MethodCalls.CalledMeth$00601$$get_Method)(calledMeth$$10))) {
            return _ErrorLogger.CompleteD;
          } else {
            if (reqdRetTyOpt$$1 != null) {
              const reqdRetTy$$1 = reqdRetTyOpt$$1;
              const actualRetTy = (0, _MethodCalls.CalledMeth$00601$$get_CalledReturnTypeAfterOutArgTupling)(calledMeth$$10);
              return (0, _TastOps.isByrefTy)(g$$46, reqdRetTy$$1) ? (0, _ErrorLogger.ErrorD)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcByrefReturnImplicitlyDereferenced)(), m$$38)) : MustUnify(csenv$$56, ndeep$$40, trace$$51, cxsln$$16, reqdRetTy$$1, actualRetTy);
            } else {
              throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/ConstraintSolver.fs", 2490, 34);
            }
          }
        } else {
          return _ErrorLogger.CompleteD;
        }
      } else {
        return CanMemberSigsMatchUpToCheck(csenv$$56, permitOptArgs$$1, true, function (ty1$$19, ty2$$17) {
          return MustUnify(csenv$$56, ndeep$$40, trace$$51, cxsln$$16, ty1$$19, ty2$$17);
        }, function (calledArgTy$$11, callerArgTy$$6) {
          return TypesMustSubsumeOrConvertInsideUndo(csenv$$56, ndeep$$40, trace$$51, cxsln$$16, m$$38, calledArgTy$$11, callerArgTy$$6);
        }, function (calledArg$$7, callerArg$$4) {
          return ArgsMustSubsumeOrConvert(csenv$$56, ndeep$$40, trace$$51, cxsln$$16, cx$$3 != null, calledArg$$7, callerArg$$4);
        }, reqdRetTyOpt$$1, calledMeth$$10);
      }
    })];
  }
}

function UnifyUniqueOverloading(csenv$$57, callerArgCounts_0$$3, callerArgCounts_1$$3, methodName$$4, ad$$6, calledMethGroup$$6, reqdRetTy$$2) {
  const callerArgCounts$$3 = [callerArgCounts_0$$3, callerArgCounts_1$$3];
  const m$$41 = csenv$$57.m;
  const candidates$$1 = (0, _List.filter)(function predicate$$33(cmeth$$22) {
    return (0, _MethodCalls.CalledMeth$00601$$IsCandidate$$Z2A1B6767)(cmeth$$22, m$$41, ad$$6);
  }, calledMethGroup$$6);
  const ndeep$$41 = 0;
  const matchValue$$72 = [calledMethGroup$$6, candidates$$1];
  var $target$$126, calledMeth$$11;

  if (matchValue$$72[1].tail == null) {
    if (matchValue$$72[0].tail == null) {
      $target$$126 = 1;
    } else {
      $target$$126 = 2;
    }
  } else if (matchValue$$72[1].tail.tail == null) {
    $target$$126 = 0;
    calledMeth$$11 = matchValue$$72[1].head;
  } else if (matchValue$$72[0].tail == null) {
    $target$$126 = 1;
  } else {
    $target$$126 = 3;
  }

  switch ($target$$126) {
    case 0:
      {
        return (0, _ErrorLogger.op_PlusPlus)(CanMemberSigsMatchUpToCheck(csenv$$57, true, true, function (ty1$$20, ty2$$18) {
          return MustUnify(csenv$$57, ndeep$$41, new OptionalTrace(0, "NoTrace"), null, ty1$$20, ty2$$18);
        }, function (calledArgTy$$12, callerArgTy$$7) {
          return TypesMustSubsumeOrConvertInsideUndo(csenv$$57, ndeep$$41, new OptionalTrace(0, "NoTrace"), null, m$$41, calledArgTy$$12, callerArgTy$$7);
        }, function (calledArg$$8, callerArg$$5) {
          return ArgsMustSubsumeOrConvert(csenv$$57, ndeep$$41, new OptionalTrace(0, "NoTrace"), null, false, calledArg$$8, callerArg$$5);
        }, reqdRetTy$$2, calledMeth$$11), function () {
          return (0, _ErrorLogger.ResultD)(true);
        });
      }

    case 1:
      {
        return (0, _ErrorLogger.ErrorD)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csMethodNotFound$$Z721C83C5)(methodName$$4), m$$41));
      }

    case 2:
      {
        return (0, _ErrorLogger.op_PlusPlus)(ReportNoCandidatesErrorSynExpr(csenv$$57, callerArgCounts$$3[0], callerArgCounts$$3[1], methodName$$4, ad$$6, calledMethGroup$$6), function () {
          return (0, _ErrorLogger.ResultD)(false);
        });
      }

    case 3:
      {
        return (0, _ErrorLogger.ResultD)(false);
      }
  }
}

function EliminateConstraintsForGeneralizedTypars(csenv$$58, trace$$58, generalizedTypars) {
  (0, _List.iterate)(function action$$8(tp$$11) {
    const tpn$$2 = (0, _tast.Typar$$get_Stamp)(tp$$11);
    const cxst$$2 = csenv$$58.SolverState.ExtraCxs;
    const cxs$$4 = (0, _HashMultiMap.HashMultiMap$00602$$FindAll$$2B595)(cxst$$2, tpn$$2);
    (0, _List.iterate)(function action$$7(cx$$4) {
      OptionalTrace$$Exec(trace$$58, function () {
        (0, _HashMultiMap.HashMultiMap$00602$$Remove$$2B595)(cxst$$2, tpn$$2);
      }, function () {
        (0, _HashMultiMap.HashMultiMap$00602$$Add$$5BDDA1)(csenv$$58.SolverState.ExtraCxs, tpn$$2, cx$$4);
      });
    }, cxs$$4);
  }, generalizedTypars);
}

function AddCxTypeEqualsType(contextInfo$$1, denv$$19, css$$3, m$$42, actual$$1, expected$$1) {
  (0, _ErrorLogger.RaiseOperationResult)(SolveTypeEqualsTypeWithReport(MakeConstraintSolverEnv(contextInfo$$1, css$$3, m$$42, denv$$19), 0, m$$42, new OptionalTrace(0, "NoTrace"), null, actual$$1, expected$$1));
}

function UndoIfFailed(f$$21) {
  const trace$$59 = Trace$$$New();
  let res$$11;

  try {
    res$$11 = (0, _ErrorLogger.CheckNoErrorsAndGetWarnings)(f$$21(trace$$59));
  } catch (e$$7) {
    res$$11 = null;
  }

  if (res$$11 != null) {
    const warns$$4 = res$$11;
    (0, _ErrorLogger.ReportWarnings)(warns$$4);
    return true;
  } else {
    Trace$$Undo(trace$$59);
    return false;
  }
}

function AddCxTypeEqualsTypeUndoIfFailed(denv$$20, css$$4, m$$43, ty1$$21, ty2$$19) {
  return UndoIfFailed(function (trace$$60) {
    return SolveTypeEqualsTypeKeepAbbrevs(MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$4, m$$43, denv$$20), 0, m$$43, new OptionalTrace(1, "WithTrace", trace$$60), ty1$$21, ty2$$19);
  });
}

function AddCxTypeEqualsTypeMatchingOnlyUndoIfFailed(denv$$21, css$$5, m$$44, ty1$$22, ty2$$20) {
  let csenv$$59;
  const inputRecord = MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$5, m$$44, denv$$21);
  csenv$$59 = new ConstraintSolverEnv(inputRecord.SolverState, inputRecord.eContextInfo, true, inputRecord.m, inputRecord.EquivEnv, inputRecord.DisplayEnv);
  return UndoIfFailed(function (trace$$61) {
    return SolveTypeEqualsTypeKeepAbbrevs(csenv$$59, 0, m$$44, new OptionalTrace(1, "WithTrace", trace$$61), ty1$$22, ty2$$20);
  });
}

function AddCxTypeMustSubsumeTypeUndoIfFailed(denv$$22, css$$6, m$$45, ty1$$23, ty2$$21) {
  return UndoIfFailed(function (trace$$62) {
    return SolveTypeSubsumesTypeKeepAbbrevs(MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$6, m$$45, denv$$22), 0, m$$45, new OptionalTrace(1, "WithTrace", trace$$62), null, ty1$$23, ty2$$21);
  });
}

function AddCxTypeMustSubsumeTypeMatchingOnlyUndoIfFailed(denv$$23, css$$7, m$$46, ty1$$24, ty2$$22) {
  const csenv$$60 = MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$7, m$$46, denv$$23);
  const csenv$$61 = new ConstraintSolverEnv(csenv$$60.SolverState, csenv$$60.eContextInfo, true, csenv$$60.m, csenv$$60.EquivEnv, csenv$$60.DisplayEnv);
  return UndoIfFailed(function (trace$$63) {
    return SolveTypeSubsumesTypeKeepAbbrevs(csenv$$61, 0, m$$46, new OptionalTrace(1, "WithTrace", trace$$63), null, ty1$$24, ty2$$22);
  });
}

function AddCxTypeMustSubsumeType(contextInfo$$2, denv$$24, css$$8, m$$47, trace$$64, ty1$$25, ty2$$23) {
  (0, _ErrorLogger.RaiseOperationResult)(SolveTypeSubsumesTypeWithReport(MakeConstraintSolverEnv(contextInfo$$2, css$$8, m$$47, denv$$24), 0, m$$47, trace$$64, null, ty1$$25, ty2$$23));
}

function AddCxMethodConstraint(denv$$25, css$$9, m$$48, trace$$65, traitInfo$$13) {
  (0, _ErrorLogger.RaiseOperationResult)((0, _ErrorLogger.TryD)(function () {
    return (0, _ErrorLogger.op_PlusPlus)(SolveMemberConstraint(MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$9, m$$48, denv$$25), true, false, 0, m$$48, trace$$65, traitInfo$$13), function (_arg1$$8) {
      return _ErrorLogger.CompleteD;
    });
  }, function (res$$13) {
    return (0, _ErrorLogger.ErrorD)(new ErrorFromAddingConstraint(denv$$25, res$$13, m$$48));
  }));
}

function AddCxTypeMustSupportNull(denv$$26, css$$10, m$$49, trace$$66, ty$$66) {
  (0, _ErrorLogger.RaiseOperationResult)((0, _ErrorLogger.TryD)(function () {
    return SolveTypeSupportsNull(MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$10, m$$49, denv$$26), 0, m$$49, trace$$66, ty$$66);
  }, function (res$$15) {
    return (0, _ErrorLogger.ErrorD)(new ErrorFromAddingConstraint(denv$$26, res$$15, m$$49));
  }));
}

function AddCxTypeMustSupportComparison(denv$$27, css$$11, m$$50, trace$$67, ty$$67) {
  (0, _ErrorLogger.RaiseOperationResult)((0, _ErrorLogger.TryD)(function () {
    return SolveTypeSupportsComparison(MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$11, m$$50, denv$$27), 0, m$$50, trace$$67, ty$$67);
  }, function (res$$17) {
    return (0, _ErrorLogger.ErrorD)(new ErrorFromAddingConstraint(denv$$27, res$$17, m$$50));
  }));
}

function AddCxTypeMustSupportEquality(denv$$28, css$$12, m$$51, trace$$68, ty$$68) {
  (0, _ErrorLogger.RaiseOperationResult)((0, _ErrorLogger.TryD)(function () {
    return SolveTypeSupportsEquality(MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$12, m$$51, denv$$28), 0, m$$51, trace$$68, ty$$68);
  }, function (res$$19) {
    return (0, _ErrorLogger.ErrorD)(new ErrorFromAddingConstraint(denv$$28, res$$19, m$$51));
  }));
}

function AddCxTypeMustSupportDefaultCtor(denv$$29, css$$13, m$$52, trace$$69, ty$$69) {
  (0, _ErrorLogger.RaiseOperationResult)((0, _ErrorLogger.TryD)(function () {
    return SolveTypeRequiresDefaultConstructor(MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$13, m$$52, denv$$29), 0, m$$52, trace$$69, ty$$69);
  }, function (res$$21) {
    return (0, _ErrorLogger.ErrorD)(new ErrorFromAddingConstraint(denv$$29, res$$21, m$$52));
  }));
}

function AddCxTypeIsReferenceType(denv$$30, css$$14, m$$53, trace$$70, ty$$70) {
  (0, _ErrorLogger.RaiseOperationResult)((0, _ErrorLogger.TryD)(function () {
    return SolveTypeIsReferenceType(MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$14, m$$53, denv$$30), 0, m$$53, trace$$70, ty$$70);
  }, function (res$$23) {
    return (0, _ErrorLogger.ErrorD)(new ErrorFromAddingConstraint(denv$$30, res$$23, m$$53));
  }));
}

function AddCxTypeIsValueType(denv$$31, css$$15, m$$54, trace$$71, ty$$71) {
  (0, _ErrorLogger.RaiseOperationResult)((0, _ErrorLogger.TryD)(function () {
    return SolveTypeIsNonNullableValueType(MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$15, m$$54, denv$$31), 0, m$$54, trace$$71, ty$$71);
  }, function (res$$25) {
    return (0, _ErrorLogger.ErrorD)(new ErrorFromAddingConstraint(denv$$31, res$$25, m$$54));
  }));
}

function AddCxTypeIsUnmanaged(denv$$32, css$$16, m$$55, trace$$72, ty$$72) {
  (0, _ErrorLogger.RaiseOperationResult)((0, _ErrorLogger.TryD)(function () {
    return SolveTypeIsUnmanaged(MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$16, m$$55, denv$$32), 0, m$$55, trace$$72, ty$$72);
  }, function (res$$27) {
    return (0, _ErrorLogger.ErrorD)(new ErrorFromAddingConstraint(denv$$32, res$$27, m$$55));
  }));
}

function AddCxTypeIsEnum(denv$$33, css$$17, m$$56, trace$$73, ty$$73, underlying$$2) {
  (0, _ErrorLogger.RaiseOperationResult)((0, _ErrorLogger.TryD)(function () {
    return SolveTypeIsEnum(MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$17, m$$56, denv$$33), 0, m$$56, trace$$73, ty$$73, underlying$$2);
  }, function (res$$29) {
    return (0, _ErrorLogger.ErrorD)(new ErrorFromAddingConstraint(denv$$33, res$$29, m$$56));
  }));
}

function AddCxTypeIsDelegate(denv$$34, css$$18, m$$57, trace$$74, ty$$74, aty$$2, bty$$2) {
  (0, _ErrorLogger.RaiseOperationResult)((0, _ErrorLogger.TryD)(function () {
    return SolveTypeIsDelegate(MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$18, m$$57, denv$$34), 0, m$$57, trace$$74, ty$$74, aty$$2, bty$$2);
  }, function (res$$31) {
    return (0, _ErrorLogger.ErrorD)(new ErrorFromAddingConstraint(denv$$34, res$$31, m$$57));
  }));
}

function CodegenWitnessThatTypeSupportsTraitConstraint(tcVal$$1, g$$47, amap$$10, m$$58, traitInfo$$14, argExprs) {
  const css$$19 = new ConstraintSolverState(g$$47, amap$$10, (0, _InfoReader.InfoReader$$$$002Ector$$Z11454F64)(g$$47, amap$$10), tcVal$$1, (0, _HashMultiMap.HashMultiMap$00602$$$$002Ector$$Z1C047C8B)(10, (0, _FSharp.HashIdentity$$$Structural)()));
  const csenv$$62 = MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$19, m$$58, (0, _TastOps.DisplayEnv$$$Empty$$2AE8EA0C)(g$$47));
  return (0, _ErrorLogger.op_PlusPlus)(SolveMemberConstraint(csenv$$62, true, true, 0, m$$58, new OptionalTrace(0, "NoTrace"), traitInfo$$14), function (_res) {
    var h$$3;
    let sln$$5;
    const matchValue$$73 = (0, _tast.TraitConstraintInfo$$get_Solution)(traitInfo$$14);

    if (matchValue$$73 != null) {
      const sln$$4 = matchValue$$73;

      switch (sln$$4.tag) {
        case 0:
          {
            const vref$$1 = sln$$4.fields[1];
            const ty$$75 = sln$$4.fields[0];
            const minst$$5 = sln$$4.fields[2];
            sln$$5 = new _Option.Choice(0, "Choice1Of4", [new _infos.MethInfo(0, "FSMeth", g$$47, ty$$75, vref$$1, null), minst$$5]);
            break;
          }

        case 1:
          {
            const tinst$$9 = sln$$4.fields[0];
            const rfref = sln$$4.fields[1];
            const isSetProp$$3 = sln$$4.fields[2];
            sln$$5 = new _Option.Choice(1, "Choice2Of4", [tinst$$9, rfref, isSetProp$$3]);
            break;
          }

        case 4:
          {
            sln$$5 = new _Option.Choice(3, "Choice4Of4", null);
            break;
          }

        case 3:
          {
            const expr = sln$$4.fields[0];
            sln$$5 = new _Option.Choice(2, "Choice3Of4", expr);
            break;
          }

        default:
          {
            const origTy$$1 = sln$$4.fields[0];
            const mref$$1 = sln$$4.fields[2];
            const minst$$4 = sln$$4.fields[3];
            const extOpt = sln$$4.fields[1];
            const metadataTy = (0, _TastOps.convertToTypeWithMetadataIfPossible)(g$$47, origTy$$1);
            const patternInput$$12 = (0, _TastOps.destAppTy)(g$$47, metadataTy);
            const mdef = (0, _il.resolveILMethodRef)((0, _tast.EntityRef$$get_ILTyconRawMetadata)(patternInput$$12[0]), mref$$1);
            let ilMethInfo;

            if (extOpt != null) {
              const ilActualTypeRef = extOpt;
              const actualTyconRef = (0, _import.ImportILTypeRef)(amap$$10, m$$58, ilActualTypeRef);
              ilMethInfo = (0, _infos.MethInfo$$$CreateILExtensionMeth$$Z447F6EC6)(amap$$10, m$$58, origTy$$1, actualTyconRef, null, mdef);
            } else {
              ilMethInfo = (0, _infos.MethInfo$$$CreateILMeth$$Z136523CF)(amap$$10, m$$58, origTy$$1, mdef);
            }

            sln$$5 = new _Option.Choice(0, "Choice1Of4", [ilMethInfo, minst$$4]);
          }
      }
    } else {
      sln$$5 = new _Option.Choice(3, "Choice4Of4", null);
    }

    switch (sln$$5.tag) {
      case 1:
        {
          const tinst$$10 = sln$$5.fields[0][0];
          const rfref$$1 = sln$$5.fields[0][1];
          const isSet$$1 = sln$$5.fields[0][2];
          let res$$33;
          const matchValue$$74 = [isSet$$1, (0, _tast.RecdField$$get_IsStatic)((0, _tast.RecdFieldRef$$get_RecdField)(rfref$$1)), (0, _List.length)(argExprs)];
          var $target$$134;

          if (matchValue$$74[0]) {
            if (matchValue$$74[1]) {
              if (matchValue$$74[2] === 1) {
                $target$$134 = 0;
              } else {
                $target$$134 = 4;
              }
            } else if (matchValue$$74[2] === 2) {
              $target$$134 = 1;
            } else {
              $target$$134 = 4;
            }
          } else if (matchValue$$74[1]) {
            if (matchValue$$74[2] === 0) {
              $target$$134 = 2;
            } else {
              $target$$134 = 4;
            }
          } else if (matchValue$$74[2] === 1) {
            $target$$134 = 3;
          } else {
            $target$$134 = 4;
          }

          switch ($target$$134) {
            case 0:
              {
                res$$33 = (0, _TastOps.mkStaticRecdFieldSet)(rfref$$1, tinst$$10, (0, _List.item)(0, argExprs), m$$58);
                break;
              }

            case 1:
              {
                if ((0, _tast.Entity$$get_IsStructOrEnumTycon)((0, _tast.RecdFieldRef$$get_Tycon)(rfref$$1)) ? !(0, _TastOps.isByrefTy)(g$$47, (0, _TastOps.tyOfExpr)(g$$47, (0, _List.item)(0, argExprs))) : false) {
                  const h$$5 = (0, _List.head)(argExprs);
                  const patternInput$$16 = (0, _TastOps.mkExprAddrOfExpr)(g$$47, true, false, new _TastOps.Mutates(1, "DefinitelyMutates"), h$$5, null, m$$58);
                  res$$33 = patternInput$$16[0]((0, _TastOps.mkRecdFieldSetViaExprAddr)(patternInput$$16[1], rfref$$1, tinst$$10, (0, _List.item)(1, argExprs), m$$58));
                } else {
                  res$$33 = (0, _TastOps.mkRecdFieldSetViaExprAddr)((0, _List.item)(0, argExprs), rfref$$1, tinst$$10, (0, _List.item)(1, argExprs), m$$58);
                }

                break;
              }

            case 2:
              {
                res$$33 = (0, _TastOps.mkStaticRecdFieldGet)(rfref$$1, tinst$$10, m$$58);
                break;
              }

            case 3:
              {
                res$$33 = ((0, _tast.Entity$$get_IsStructOrEnumTycon)((0, _tast.RecdFieldRef$$get_Tycon)(rfref$$1)) ? (0, _TastOps.isByrefTy)(g$$47, (0, _TastOps.tyOfExpr)(g$$47, (0, _List.item)(0, argExprs))) : false) ? (0, _TastOps.mkRecdFieldGetViaExprAddr)((0, _List.item)(0, argExprs), rfref$$1, tinst$$10, m$$58) : (0, _TastOps.mkRecdFieldGet)(g$$47, (0, _List.item)(0, argExprs), rfref$$1, tinst$$10, m$$58);
                break;
              }

            case 4:
              {
                res$$33 = null;
                break;
              }
          }

          return (0, _ErrorLogger.ResultD)(res$$33);
        }

      case 2:
        {
          const expr$$2 = sln$$5.fields[0];
          return (0, _ErrorLogger.ResultD)((0, _TastOps.MakeApplicationAndBetaReduce)(g$$47, expr$$2, (0, _TastOps.tyOfExpr)(g$$47, expr$$2), (0, _Types.L)(), argExprs, m$$58));
        }

      case 3:
        {
          return (0, _ErrorLogger.ResultD)(null);
        }

      default:
        {
          const minfo$$19 = sln$$5.fields[0][0];
          const methArgTys = sln$$5.fields[0][1];
          let argExprs$$3;
          const argTypes = (0, _List.concat)((0, _infos.MethInfo$$GetParamTypes$$Z5D984B3C)(minfo$$19, amap$$10, m$$58, methArgTys));
          let patternInput$$13;

          if ((0, _infos.MethInfo$$get_IsInstance)(minfo$$19)) {
            if (argExprs.tail != null) {
              const t$$9 = argExprs.tail;
              const h$$2 = argExprs.head;
              patternInput$$13 = [h$$2, t$$9];
            } else {
              const argExprs$$1 = argExprs;
              patternInput$$13 = [null, argExprs$$1];
            }
          } else {
            patternInput$$13 = [null, argExprs];
          }

          const convertedArgs = (0, _List.map2)(function mapping$$14(expr$$1, expectedTy) {
            return (0, _TastOps.mkCoerceIfNeeded)(g$$47, expectedTy, (0, _TastOps.tyOfExpr)(g$$47, expr$$1), expr$$1);
          }, patternInput$$13[1], argTypes);

          if (patternInput$$13[0] == null) {
            argExprs$$3 = convertedArgs;
          } else {
            const r$$16 = patternInput$$13[0];
            argExprs$$3 = (0, _Types.L)(r$$16, convertedArgs);
          }

          if (((0, _infos.MethInfo$$get_IsStruct)(minfo$$19) ? (0, _infos.MethInfo$$get_IsInstance)(minfo$$19) : false) ? argExprs$$3.tail != null ? (h$$3 = argExprs$$3.head, !(0, _TastOps.isByrefTy)(g$$47, (0, _TastOps.tyOfExpr)(g$$47, h$$3))) : false : false) {
            const patternInput$$14 = (0, _illib.List$$$headAndTail)(argExprs$$3);
            const patternInput$$15 = (0, _TastOps.mkExprAddrOfExpr)(g$$47, true, false, new _TastOps.Mutates(2, "PossiblyMutates"), patternInput$$14[0], null, m$$58);
            return (0, _ErrorLogger.ResultD)(patternInput$$15[0](new _tast.Expr(11, "Op", new _tast.TOp(29, "TraitCall", traitInfo$$14), (0, _Types.L)(), (0, _Types.L)(patternInput$$15[1], patternInput$$14[1]), m$$58)));
          } else {
            return (0, _ErrorLogger.ResultD)((0, _MethodCalls.MakeMethInfoCall)(amap$$10, m$$58, minfo$$19, methArgTys, argExprs$$3));
          }
        }
    }
  });
}

function ChooseTyparSolutionAndSolve(css$$20, denv$$35, tp$$12) {
  const g$$49 = css$$20.g;
  const amap$$11 = css$$20.amap;
  const patternInput$$17 = (0, _TypeRelations.ChooseTyparSolutionAndRange)(g$$49, amap$$11, tp$$12);
  const csenv$$63 = MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$20, patternInput$$17[1], denv$$35);
  (0, _ErrorLogger.RaiseOperationResult)((0, _ErrorLogger.TryD)(function () {
    return SolveTyparEqualsType(csenv$$63, 0, patternInput$$17[1], new OptionalTrace(0, "NoTrace"), (0, _tast.mkTyparTy)(tp$$12), patternInput$$17[0]);
  }, function (err$$4) {
    return (0, _ErrorLogger.ErrorD)(new ErrorFromApplyingDefault(g$$49, denv$$35, tp$$12, patternInput$$17[0], err$$4, patternInput$$17[1]));
  }));
}

function CheckDeclaredTypars(denv$$36, css$$21, m$$60, typars1, typars2) {
  (0, _ErrorLogger.RaiseOperationResult)((0, _ErrorLogger.TryD)(function () {
    return CollectThenUndo(function (trace$$75) {
      return SolveTypeEqualsTypeEqns(MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$21, m$$60, denv$$36), 0, m$$60, new OptionalTrace(1, "WithTrace", trace$$75), null, (0, _List.map)(_tast.mkTyparTy, typars1), (0, _List.map)(_tast.mkTyparTy, typars2));
    });
  }, function (res$$35) {
    return (0, _ErrorLogger.ErrorD)(new ErrorFromAddingConstraint(denv$$36, res$$35, m$$60));
  }));
}

function IsApplicableMethApprox(g$$50, amap$$12, m$$61, minfo$$20, availObjTy) {
  if ((0, _infos.MethInfo$$get_IsExtensionMember)(minfo$$20)) {
    const css$$22 = new ConstraintSolverState(g$$50, amap$$12, (0, _InfoReader.InfoReader$$$$002Ector$$Z11454F64)(g$$50, amap$$12), (0, _Util.uncurry)(4, function TcVal(_arg1$$9) {
      throw new Error("should not be called");
    }), (0, _HashMultiMap.HashMultiMap$00602$$$$002Ector$$Z1C047C8B)(10, (0, _FSharp.HashIdentity$$$Structural)()));
    const csenv$$64 = MakeConstraintSolverEnv(new ContextInfo(0, "NoContext"), css$$22, m$$61, (0, _TastOps.DisplayEnv$$$Empty$$2AE8EA0C)(g$$50));
    const minst$$6 = FreshenMethInfo(m$$61, minfo$$20);
    const matchValue$$75 = (0, _infos.MethInfo$$GetObjArgTypes$$Z5D984B3C)(minfo$$20, amap$$12, m$$61, minst$$6);
    var $target$$135, reqdObjTy;

    if (matchValue$$75.tail != null) {
      if (matchValue$$75.tail.tail == null) {
        $target$$135 = 0;
        reqdObjTy = matchValue$$75.head;
      } else {
        $target$$135 = 1;
      }
    } else {
      $target$$135 = 1;
    }

    switch ($target$$135) {
      case 0:
        {
          return (0, _ErrorLogger.CommitOperationResult)((0, _ErrorLogger.TryD)(function () {
            return (0, _ErrorLogger.op_PlusPlus)(SolveTypeSubsumesType(csenv$$64, 0, m$$61, new OptionalTrace(0, "NoTrace"), null, reqdObjTy, availObjTy), function () {
              return (0, _ErrorLogger.ResultD)(true);
            });
          }, function (_err) {
            return (0, _ErrorLogger.ResultD)(false);
          }));
        }

      case 1:
        {
          return true;
        }
    }
  } else {
    return true;
  }
}