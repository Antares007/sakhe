"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetRangeOfDiagnostic = GetRangeOfDiagnostic;
exports.GetDiagnosticNumber = GetDiagnosticNumber;
exports.GetWarningLevel = GetWarningLevel;
exports.warningOn = warningOn;
exports.SplitRelatedDiagnostics = SplitRelatedDiagnostics;
exports.DeclareMesssage = DeclareMesssage;
exports.SeeAlsoE = SeeAlsoE;
exports.ConstraintSolverTupleDiffLengthsE = ConstraintSolverTupleDiffLengthsE;
exports.ConstraintSolverInfiniteTypesE = ConstraintSolverInfiniteTypesE;
exports.ConstraintSolverMissingConstraintE = ConstraintSolverMissingConstraintE;
exports.ConstraintSolverTypesNotInEqualityRelation1E = ConstraintSolverTypesNotInEqualityRelation1E;
exports.ConstraintSolverTypesNotInEqualityRelation2E = ConstraintSolverTypesNotInEqualityRelation2E;
exports.ConstraintSolverTypesNotInSubsumptionRelationE = ConstraintSolverTypesNotInSubsumptionRelationE;
exports.ErrorFromAddingTypeEquation1E = ErrorFromAddingTypeEquation1E;
exports.ErrorFromAddingTypeEquation2E = ErrorFromAddingTypeEquation2E;
exports.ErrorFromApplyingDefault1E = ErrorFromApplyingDefault1E;
exports.ErrorFromApplyingDefault2E = ErrorFromApplyingDefault2E;
exports.ErrorsFromAddingSubsumptionConstraintE = ErrorsFromAddingSubsumptionConstraintE;
exports.UpperCaseIdentifierInPatternE = UpperCaseIdentifierInPatternE;
exports.NotUpperCaseConstructorE = NotUpperCaseConstructorE;
exports.PossibleOverloadE = PossibleOverloadE;
exports.FunctionExpectedE = FunctionExpectedE;
exports.BakedInMemberConstraintNameE = BakedInMemberConstraintNameE;
exports.BadEventTransformationE = BadEventTransformationE;
exports.ParameterlessStructCtorE = ParameterlessStructCtorE;
exports.InterfaceNotRevealedE = InterfaceNotRevealedE;
exports.TyconBadArgsE = TyconBadArgsE;
exports.IndeterminateTypeE = IndeterminateTypeE;
exports.NameClash1E = NameClash1E;
exports.NameClash2E = NameClash2E;
exports.Duplicate1E = Duplicate1E;
exports.Duplicate2E = Duplicate2E;
exports.UndefinedName2E = UndefinedName2E;
exports.FieldNotMutableE = FieldNotMutableE;
exports.FieldsFromDifferentTypesE = FieldsFromDifferentTypesE;
exports.VarBoundTwiceE = VarBoundTwiceE;
exports.RecursionE = RecursionE;
exports.InvalidRuntimeCoercionE = InvalidRuntimeCoercionE;
exports.IndeterminateRuntimeCoercionE = IndeterminateRuntimeCoercionE;
exports.IndeterminateStaticCoercionE = IndeterminateStaticCoercionE;
exports.StaticCoercionShouldUseBoxE = StaticCoercionShouldUseBoxE;
exports.TypeIsImplicitlyAbstractE = TypeIsImplicitlyAbstractE;
exports.NonRigidTypar1E = NonRigidTypar1E;
exports.NonRigidTypar2E = NonRigidTypar2E;
exports.NonRigidTypar3E = NonRigidTypar3E;
exports.OBlockEndSentenceE = OBlockEndSentenceE;
exports.UnexpectedEndOfInputE = UnexpectedEndOfInputE;
exports.UnexpectedE = UnexpectedE;
exports.NONTERM_interactionE = NONTERM_interactionE;
exports.NONTERM_hashDirectiveE = NONTERM_hashDirectiveE;
exports.NONTERM_fieldDeclE = NONTERM_fieldDeclE;
exports.NONTERM_unionCaseReprE = NONTERM_unionCaseReprE;
exports.NONTERM_localBindingE = NONTERM_localBindingE;
exports.NONTERM_hardwhiteLetBindingsE = NONTERM_hardwhiteLetBindingsE;
exports.NONTERM_classDefnMemberE = NONTERM_classDefnMemberE;
exports.NONTERM_defnBindingsE = NONTERM_defnBindingsE;
exports.NONTERM_classMemberSpfnE = NONTERM_classMemberSpfnE;
exports.NONTERM_valSpfnE = NONTERM_valSpfnE;
exports.NONTERM_tyconSpfnE = NONTERM_tyconSpfnE;
exports.NONTERM_anonLambdaExprE = NONTERM_anonLambdaExprE;
exports.NONTERM_attrUnionCaseDeclE = NONTERM_attrUnionCaseDeclE;
exports.NONTERM_cPrototypeE = NONTERM_cPrototypeE;
exports.NONTERM_objectImplementationMembersE = NONTERM_objectImplementationMembersE;
exports.NONTERM_ifExprCasesE = NONTERM_ifExprCasesE;
exports.NONTERM_openDeclE = NONTERM_openDeclE;
exports.NONTERM_fileModuleSpecE = NONTERM_fileModuleSpecE;
exports.NONTERM_patternClausesE = NONTERM_patternClausesE;
exports.NONTERM_beginEndExprE = NONTERM_beginEndExprE;
exports.NONTERM_recdExprE = NONTERM_recdExprE;
exports.NONTERM_tyconDefnE = NONTERM_tyconDefnE;
exports.NONTERM_exconCoreE = NONTERM_exconCoreE;
exports.NONTERM_typeNameInfoE = NONTERM_typeNameInfoE;
exports.NONTERM_attributeListE = NONTERM_attributeListE;
exports.NONTERM_quoteExprE = NONTERM_quoteExprE;
exports.NONTERM_typeConstraintE = NONTERM_typeConstraintE;
exports.NONTERM_Category_ImplementationFileE = NONTERM_Category_ImplementationFileE;
exports.NONTERM_Category_DefinitionE = NONTERM_Category_DefinitionE;
exports.NONTERM_Category_SignatureFileE = NONTERM_Category_SignatureFileE;
exports.NONTERM_Category_PatternE = NONTERM_Category_PatternE;
exports.NONTERM_Category_ExprE = NONTERM_Category_ExprE;
exports.NONTERM_Category_TypeE = NONTERM_Category_TypeE;
exports.NONTERM_typeArgsActualE = NONTERM_typeArgsActualE;
exports.TokenName1E = TokenName1E;
exports.TokenName1TokenName2E = TokenName1TokenName2E;
exports.TokenName1TokenName2TokenName3E = TokenName1TokenName2TokenName3E;
exports.RuntimeCoercionSourceSealed1E = RuntimeCoercionSourceSealed1E;
exports.RuntimeCoercionSourceSealed2E = RuntimeCoercionSourceSealed2E;
exports.CoercionTargetSealedE = CoercionTargetSealedE;
exports.UpcastUnnecessaryE = UpcastUnnecessaryE;
exports.TypeTestUnnecessaryE = TypeTestUnnecessaryE;
exports.OverrideDoesntOverride1E = OverrideDoesntOverride1E;
exports.OverrideDoesntOverride2E = OverrideDoesntOverride2E;
exports.OverrideDoesntOverride3E = OverrideDoesntOverride3E;
exports.OverrideDoesntOverride4E = OverrideDoesntOverride4E;
exports.UnionCaseWrongArgumentsE = UnionCaseWrongArgumentsE;
exports.UnionPatternsBindDifferentNamesE = UnionPatternsBindDifferentNamesE;
exports.RequiredButNotSpecifiedE = RequiredButNotSpecifiedE;
exports.UseOfAddressOfOperatorE = UseOfAddressOfOperatorE;
exports.DefensiveCopyWarningE = DefensiveCopyWarningE;
exports.DeprecatedThreadStaticBindingWarningE = DeprecatedThreadStaticBindingWarningE;
exports.FunctionValueUnexpectedE = FunctionValueUnexpectedE;
exports.UnitTypeExpectedE = UnitTypeExpectedE;
exports.UnitTypeExpectedWithEqualityE = UnitTypeExpectedWithEqualityE;
exports.UnitTypeExpectedWithPossiblePropertySetterE = UnitTypeExpectedWithPossiblePropertySetterE;
exports.UnitTypeExpectedWithPossibleAssignmentE = UnitTypeExpectedWithPossibleAssignmentE;
exports.UnitTypeExpectedWithPossibleAssignmentToMutableE = UnitTypeExpectedWithPossibleAssignmentToMutableE;
exports.RecursiveUseCheckedAtRuntimeE = RecursiveUseCheckedAtRuntimeE;
exports.LetRecUnsound1E = LetRecUnsound1E;
exports.LetRecUnsound2E = LetRecUnsound2E;
exports.LetRecUnsoundInnerE = LetRecUnsoundInnerE;
exports.LetRecEvaluatedOutOfOrderE = LetRecEvaluatedOutOfOrderE;
exports.LetRecCheckedAtRuntimeE = LetRecCheckedAtRuntimeE;
exports.SelfRefObjCtor1E = SelfRefObjCtor1E;
exports.SelfRefObjCtor2E = SelfRefObjCtor2E;
exports.VirtualAugmentationOnNullValuedTypeE = VirtualAugmentationOnNullValuedTypeE;
exports.NonVirtualAugmentationOnNullValuedTypeE = NonVirtualAugmentationOnNullValuedTypeE;
exports.NonUniqueInferredAbstractSlot1E = NonUniqueInferredAbstractSlot1E;
exports.NonUniqueInferredAbstractSlot2E = NonUniqueInferredAbstractSlot2E;
exports.NonUniqueInferredAbstractSlot3E = NonUniqueInferredAbstractSlot3E;
exports.NonUniqueInferredAbstractSlot4E = NonUniqueInferredAbstractSlot4E;
exports.Failure3E = Failure3E;
exports.Failure4E = Failure4E;
exports.FullAbstractionE = FullAbstractionE;
exports.MatchIncomplete1E = MatchIncomplete1E;
exports.MatchIncomplete2E = MatchIncomplete2E;
exports.MatchIncomplete3E = MatchIncomplete3E;
exports.MatchIncomplete4E = MatchIncomplete4E;
exports.RuleNeverMatchedE = RuleNeverMatchedE;
exports.EnumMatchIncomplete1E = EnumMatchIncomplete1E;
exports.ValNotMutableE = ValNotMutableE;
exports.ValNotLocalE = ValNotLocalE;
exports.Obsolete1E = Obsolete1E;
exports.Obsolete2E = Obsolete2E;
exports.ExperimentalE = ExperimentalE;
exports.PossibleUnverifiableCodeE = PossibleUnverifiableCodeE;
exports.DeprecatedE = DeprecatedE;
exports.LibraryUseOnlyE = LibraryUseOnlyE;
exports.MissingFieldsE = MissingFieldsE;
exports.ValueRestriction1E = ValueRestriction1E;
exports.ValueRestriction2E = ValueRestriction2E;
exports.ValueRestriction3E = ValueRestriction3E;
exports.ValueRestriction4E = ValueRestriction4E;
exports.ValueRestriction5E = ValueRestriction5E;
exports.RecoverableParseErrorE = RecoverableParseErrorE;
exports.ReservedKeywordE = ReservedKeywordE;
exports.IndentationProblemE = IndentationProblemE;
exports.OverrideInIntrinsicAugmentationE = OverrideInIntrinsicAugmentationE;
exports.OverrideInExtrinsicAugmentationE = OverrideInExtrinsicAugmentationE;
exports.IntfImplInIntrinsicAugmentationE = IntfImplInIntrinsicAugmentationE;
exports.IntfImplInExtrinsicAugmentationE = IntfImplInExtrinsicAugmentationE;
exports.UnresolvedReferenceNoRangeE = UnresolvedReferenceNoRangeE;
exports.UnresolvedPathReferenceNoRangeE = UnresolvedPathReferenceNoRangeE;
exports.HashIncludeNotAllowedInNonScriptE = HashIncludeNotAllowedInNonScriptE;
exports.HashReferenceNotAllowedInNonScriptE = HashReferenceNotAllowedInNonScriptE;
exports.HashDirectiveNotAllowedInNonScriptE = HashDirectiveNotAllowedInNonScriptE;
exports.FileNameNotResolvedE = FileNameNotResolvedE;
exports.AssemblyNotResolvedE = AssemblyNotResolvedE;
exports.HashLoadedSourceHasIssues1E = HashLoadedSourceHasIssues1E;
exports.HashLoadedSourceHasIssues2E = HashLoadedSourceHasIssues2E;
exports.HashLoadedScriptConsideredSourceE = HashLoadedScriptConsideredSourceE;
exports.InvalidInternalsVisibleToAssemblyName1E = InvalidInternalsVisibleToAssemblyName1E;
exports.InvalidInternalsVisibleToAssemblyName2E = InvalidInternalsVisibleToAssemblyName2E;
exports.LoadedSourceNotFoundIgnoringE = LoadedSourceNotFoundIgnoringE;
exports.MSBuildReferenceResolutionErrorE = MSBuildReferenceResolutionErrorE;
exports.TargetInvocationExceptionWrapperE = TargetInvocationExceptionWrapperE;
exports.getErrorString = getErrorString;
exports.$007CInvalidArgument$007C_$007C = $007CInvalidArgument$007C_$007C;
exports.StringBuilder$$$$002Ector = StringBuilder$$$$002Ector;
exports.StringBuilder$$Append$$Z721C83C5 = StringBuilder$$Append$$Z721C83C5;
exports.Printf$$$bprintf = Printf$$$bprintf;
exports.OutputPhasedErrorR = OutputPhasedErrorR;
exports.OutputPhasedDiagnostic = OutputPhasedDiagnostic;
exports.SanitizeFileName = SanitizeFileName;
exports.GetWarningNumber = GetWarningNumber;
exports.ComputeMakePathAbsolute = ComputeMakePathAbsolute;
exports.CompilerTarget$$get_IsExe = CompilerTarget$$get_IsExe;
exports.TimeStampCache$$$$002Ector$$7F9DDECF = TimeStampCache$$$$002Ector$$7F9DDECF;
exports.TimeStampCache$$GetFileTimeStamp$$Z721C83C5 = TimeStampCache$$GetFileTimeStamp$$Z721C83C5;
exports.TimeStampCache$$GetProjectReferenceTimeStamp$$Z5776D575 = TimeStampCache$$GetProjectReferenceTimeStamp$$Z5776D575;
exports.AssemblyReference$$get_Range = AssemblyReference$$get_Range;
exports.AssemblyReference$$get_Text = AssemblyReference$$get_Text;
exports.AssemblyReference$$get_ProjectReference = AssemblyReference$$get_ProjectReference;
exports.AssemblyReference$$SimpleAssemblyNameIs$$Z721C83C5 = AssemblyReference$$SimpleAssemblyNameIs$$Z721C83C5;
exports.ReportWarning = ReportWarning;
exports.ReportWarningAsError = ReportWarningAsError;
exports.GetScopedPragmasForHashDirective = GetScopedPragmasForHashDirective;
exports.GetScopedPragmasForInput = GetScopedPragmasForInput;
exports.ErrorLoggerFilteringByScopedPragmas$$$$002Ector$$617428A0 = ErrorLoggerFilteringByScopedPragmas$$$$002Ector$$617428A0;
exports.GetErrorLoggerFilteringByScopedPragmas = GetErrorLoggerFilteringByScopedPragmas;
exports.CanonicalizeFilename = CanonicalizeFilename;
exports.IsScript = IsScript;
exports.QualFileNameOfModuleName = QualFileNameOfModuleName;
exports.QualFileNameOfFilename = QualFileNameOfFilename;
exports.ComputeQualifiedNameOfFileFromUniquePath = ComputeQualifiedNameOfFileFromUniquePath;
exports.QualFileNameOfSpecs = QualFileNameOfSpecs;
exports.QualFileNameOfImpls = QualFileNameOfImpls;
exports.PrepandPathToQualFileName = PrepandPathToQualFileName;
exports.PrepandPathToImpl = PrepandPathToImpl;
exports.PrepandPathToSpec = PrepandPathToSpec;
exports.PrependPathToInput = PrependPathToInput;
exports.ComputeAnonModuleName = ComputeAnonModuleName;
exports.PostParseModuleImpl = PostParseModuleImpl;
exports.PostParseModuleSpec = PostParseModuleSpec;
exports.PostParseModuleImpls = PostParseModuleImpls;
exports.PostParseModuleSpecs = PostParseModuleSpecs;
exports.DeduplicateModuleName = DeduplicateModuleName;
exports.DeduplicateParsedInputModuleName = DeduplicateParsedInputModuleName;
exports.ParseInput = ParseInput;
exports.IsSignatureDataResource = IsSignatureDataResource;
exports.IsOptimizationDataResource = IsOptimizationDataResource;
exports.GetSignatureDataResourceName = GetSignatureDataResourceName;
exports.GetOptimizationDataResourceName = GetOptimizationDataResourceName;
exports.TcConfig$$$$002Ector$$Z462A125 = TcConfig$$$$002Ector$$Z462A125;
exports.TcConfig$$get_primaryAssembly = TcConfig$$get_primaryAssembly;
exports.TcConfig$$get_implicitIncludeDir = TcConfig$$get_implicitIncludeDir;
exports.TcConfig$$get_compilingFslib = TcConfig$$get_compilingFslib;
exports.TcConfig$$get_isInteractive = TcConfig$$get_isInteractive;
exports.TcConfig$$get_mlCompatibility = TcConfig$$get_mlCompatibility;
exports.TcConfig$$get_noDebugData = TcConfig$$get_noDebugData;
exports.TcConfig$$get_conditionalCompilationDefines = TcConfig$$get_conditionalCompilationDefines;
exports.TcConfig$$get_emitDebugInfoInQuotations = TcConfig$$get_emitDebugInfoInQuotations;
exports.TcConfig$$get_errorSeverityOptions = TcConfig$$get_errorSeverityOptions;
exports.TcConfig$$get_light = TcConfig$$get_light;
exports.TcConfig$$get_target = TcConfig$$get_target;
exports.TcConfig$$get_extraOptimizationIterations = TcConfig$$get_extraOptimizationIterations;
exports.TcConfig$$get_doDetuple = TcConfig$$get_doDetuple;
exports.TcConfig$$get_doTLR = TcConfig$$get_doTLR;
exports.TcConfig$$get_doFinalSimplify = TcConfig$$get_doFinalSimplify;
exports.TcConfig$$get_optSettings = TcConfig$$get_optSettings;
exports.TcConfig$$get_emitTailcalls = TcConfig$$get_emitTailcalls;
exports.TcConfig$$get_internalTestSpanStackReferring = TcConfig$$get_internalTestSpanStackReferring;
exports.TcImports$$$$002Ector = TcImports$$$$002Ector;
exports.TcImports$$FindCcu$$Z721E3662 = TcImports$$FindCcu$$Z721E3662;
exports.TcImports$$SetTcGlobals$$2AE8EA0C = TcImports$$SetTcGlobals$$2AE8EA0C;
exports.TcImports$$GetTcGlobals = TcImports$$GetTcGlobals;
exports.TcImports$$SetCcuMap$$28CF8636 = TcImports$$SetCcuMap$$28CF8636;
exports.TcImports$$GetImportedAssemblies = TcImports$$GetImportedAssemblies;
exports.TcImports$$GetImportMap = TcImports$$GetImportMap;
exports.TcState$$get_NiceNameGenerator = TcState$$get_NiceNameGenerator;
exports.TcState$$get_TcEnvFromSignatures = TcState$$get_TcEnvFromSignatures;
exports.TcState$$get_TcEnvFromImpls = TcState$$get_TcEnvFromImpls;
exports.TcState$$get_Ccu = TcState$$get_Ccu;
exports.TcState$$get_CreatesGeneratedProvidedTypes = TcState$$get_CreatesGeneratedProvidedTypes;
exports.TcState$$get_CcuType = TcState$$get_CcuType;
exports.TcState$$get_CcuSig = TcState$$get_CcuSig;
exports.TcState$$NextStateAfterIncrementalFragment$$6F0188EF = TcState$$NextStateAfterIncrementalFragment$$6F0188EF;
exports.GetInitialTcState = GetInitialTcState;
exports.TypeCheckOneInputEventually = TypeCheckOneInputEventually;
exports.TypeCheckOneInput = TypeCheckOneInput;
exports.TypeCheckMultipleInputsFinish = TypeCheckMultipleInputsFinish;
exports.TypeCheckOneInputAndFinishEventually = TypeCheckOneInputAndFinishEventually;
exports.TypeCheckClosedInputSetFinish = TypeCheckClosedInputSetFinish;
exports.TypeCheckClosedInputSet = TypeCheckClosedInputSet;
exports.TcState = exports.qnameOrder = exports.TcImports = exports.TcConfig = exports.LoadClosure = exports.AssemblyResolution = exports.ErrorLoggerFilteringByScopedPragmas = exports.AvailableImportedAssembly = exports.ImportedAssembly = exports.ImportedBinary = exports.UnresolvedAssemblyReference = exports.AssemblyReference = exports.TimeStampCache = exports.CopyFSharpCoreFlag = exports.ResolveAssemblyReferenceMode = exports.CompilerTarget = exports.StringBuilder = exports.HashLoadedScriptConsideredSource = exports.HashLoadedSourceHasIssues = exports.InternalCommandLineOption = exports.DeprecatedCommandLineOptionNoDescription = exports.DeprecatedCommandLineOptionSuggestAlternative = exports.DeprecatedCommandLineOptionForHtmlDoc = exports.DeprecatedCommandLineOptionFull = exports.MSBuildReferenceResolutionError = exports.MSBuildReferenceResolutionWarning = exports.LoadedSourceNotFoundIgnoring = exports.AssemblyNotResolved = exports.FileNameNotResolved = exports.HashDirectiveNotAllowedInNonScript = exports.HashReferenceNotAllowedInNonScript = exports.HashIncludeNotAllowedInNonScript = exports.FSharpLightSyntaxFileSuffixes = exports.doNotRequireNamespaceOrModuleSuffixes = exports.FSharpScriptFileSuffixes = exports.resSuffixes = exports.FSharpImplFileSuffixes = exports.mlCompatSuffixes = exports.FSharpSigFileSuffixes = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _List = require("../fable-core.2.0.3/List");

var _tast = require("./tast");

var _ast = require("./ast");

var _range = require("./range");

var _ConstraintSolver = require("./ConstraintSolver");

var _lexhelp = require("./lexhelp");

var _TypeChecker = require("./TypeChecker");

var _infos = require("./infos");

var _MethodCalls = require("./MethodCalls");

var _QuotationTranslator = require("./QuotationTranslator");

var _MethodOverrides = require("./MethodOverrides");

var _SignatureConformance = require("./SignatureConformance");

var _TastOps = require("./TastOps");

var _NameResolution = require("./NameResolution");

var _ErrorLogger = require("./ErrorLogger");

var _PatternMatchCompilation = require("./PatternMatchCompilation");

var _AttributeChecking = require("./AttributeChecking");

var _filename = require("../utils/filename");

var _FSComp = require("../codegen/FSComp");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

var _Util = require("../fable-core.2.0.3/Util");

var _adapters = require("../fcs-fable/adapters");

var _System = require("../fable-core.2.0.3/System.Text");

var _NicePrint = require("./NicePrint");

var _String = require("../fable-core.2.0.3/String");

var _Option = require("../fable-core.2.0.3/Option");

var _Seq = require("../fable-core.2.0.3/Seq");

var _PrettyNaming = require("./PrettyNaming");

var _ErrorResolutionHints = require("./ErrorResolutionHints");

var _primParsing = require("../utils/prim-parsing");

var _pars = require("../codegen/pars");

var _Set = require("../fable-core.2.0.3/Set");

var _illib = require("../absil/illib");

var _Char = require("../fable-core.2.0.3/Char");

var _Int = require("../fable-core.2.0.3/Int32");

var _FSharp2 = require("../fable-core.2.0.3/FSharp.Collections");

var _Map = require("../fable-core.2.0.3/Map");

var _il = require("../absil/il");

var _Optimizer = require("./Optimizer");

var _import = require("./import");

var _TcGlobals = require("./TcGlobals");

var _zmap = require("../absil/zmap");

var _zset = require("../absil/zset");

var _TaggedCollections = require("../utils/TaggedCollections");

var _Logger = require("./Logger");

const FSharpSigFileSuffixes = (0, _Types.L)(".mli", (0, _Types.L)(".fsi", (0, _Types.L)()));
exports.FSharpSigFileSuffixes = FSharpSigFileSuffixes;
const mlCompatSuffixes = (0, _Types.L)(".mli", (0, _Types.L)(".ml", (0, _Types.L)()));
exports.mlCompatSuffixes = mlCompatSuffixes;
const FSharpImplFileSuffixes = (0, _Types.L)(".ml", (0, _Types.L)(".fs", (0, _Types.L)(".fsscript", (0, _Types.L)(".fsx", (0, _Types.L)()))));
exports.FSharpImplFileSuffixes = FSharpImplFileSuffixes;
const resSuffixes = (0, _Types.L)(".resx", (0, _Types.L)());
exports.resSuffixes = resSuffixes;
const FSharpScriptFileSuffixes = (0, _Types.L)(".fsscript", (0, _Types.L)(".fsx", (0, _Types.L)()));
exports.FSharpScriptFileSuffixes = FSharpScriptFileSuffixes;
const doNotRequireNamespaceOrModuleSuffixes = (0, _List.append)((0, _Types.L)(".mli", (0, _Types.L)(".ml", (0, _Types.L)())), FSharpScriptFileSuffixes);
exports.doNotRequireNamespaceOrModuleSuffixes = doNotRequireNamespaceOrModuleSuffixes;
const FSharpLightSyntaxFileSuffixes = (0, _Types.L)(".fs", (0, _Types.L)(".fsscript", (0, _Types.L)(".fsx", (0, _Types.L)(".fsi", (0, _Types.L)()))));
exports.FSharpLightSyntaxFileSuffixes = FSharpLightSyntaxFileSuffixes;
const HashIncludeNotAllowedInNonScript = (0, _Types.declare)(function HashIncludeNotAllowedInNonScript(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.HashIncludeNotAllowedInNonScript = HashIncludeNotAllowedInNonScript;
const HashReferenceNotAllowedInNonScript = (0, _Types.declare)(function HashReferenceNotAllowedInNonScript(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.HashReferenceNotAllowedInNonScript = HashReferenceNotAllowedInNonScript;
const HashDirectiveNotAllowedInNonScript = (0, _Types.declare)(function HashDirectiveNotAllowedInNonScript(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.HashDirectiveNotAllowedInNonScript = HashDirectiveNotAllowedInNonScript;
const FileNameNotResolved = (0, _Types.declare)(function FileNameNotResolved(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.FileNameNotResolved = FileNameNotResolved;
const AssemblyNotResolved = (0, _Types.declare)(function AssemblyNotResolved(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.AssemblyNotResolved = AssemblyNotResolved;
const LoadedSourceNotFoundIgnoring = (0, _Types.declare)(function LoadedSourceNotFoundIgnoring(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.LoadedSourceNotFoundIgnoring = LoadedSourceNotFoundIgnoring;
const MSBuildReferenceResolutionWarning = (0, _Types.declare)(function MSBuildReferenceResolutionWarning(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.MSBuildReferenceResolutionWarning = MSBuildReferenceResolutionWarning;
const MSBuildReferenceResolutionError = (0, _Types.declare)(function MSBuildReferenceResolutionError(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.MSBuildReferenceResolutionError = MSBuildReferenceResolutionError;
const DeprecatedCommandLineOptionFull = (0, _Types.declare)(function DeprecatedCommandLineOptionFull(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.DeprecatedCommandLineOptionFull = DeprecatedCommandLineOptionFull;
const DeprecatedCommandLineOptionForHtmlDoc = (0, _Types.declare)(function DeprecatedCommandLineOptionForHtmlDoc(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.DeprecatedCommandLineOptionForHtmlDoc = DeprecatedCommandLineOptionForHtmlDoc;
const DeprecatedCommandLineOptionSuggestAlternative = (0, _Types.declare)(function DeprecatedCommandLineOptionSuggestAlternative(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.DeprecatedCommandLineOptionSuggestAlternative = DeprecatedCommandLineOptionSuggestAlternative;
const DeprecatedCommandLineOptionNoDescription = (0, _Types.declare)(function DeprecatedCommandLineOptionNoDescription(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.DeprecatedCommandLineOptionNoDescription = DeprecatedCommandLineOptionNoDescription;
const InternalCommandLineOption = (0, _Types.declare)(function InternalCommandLineOption(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.InternalCommandLineOption = InternalCommandLineOption;
const HashLoadedSourceHasIssues = (0, _Types.declare)(function HashLoadedSourceHasIssues(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.HashLoadedSourceHasIssues = HashLoadedSourceHasIssues;
const HashLoadedScriptConsideredSource = (0, _Types.declare)(function HashLoadedScriptConsideredSource(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.HashLoadedScriptConsideredSource = HashLoadedScriptConsideredSource;

function GetRangeOfDiagnostic(err) {
  const RangeFromException = function RangeFromException(_arg1) {
    RangeFromException: while (true) {
      var $target$$29, err2, m, arf, aval, aval$$1, aexnc, id, m$$1, mfun, mfun$$1, m$$2;

      if (_arg1 instanceof _ConstraintSolver.ErrorFromAddingConstraint) {
        $target$$29 = 0;
        err2 = _arg1.Data1;
      } else if (_arg1 instanceof _lexhelp.ReservedKeyword) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _lexhelp.IndentationProblem) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _ConstraintSolver.ErrorFromAddingTypeEquation) {
        $target$$29 = 1;
        m = _arg1.Data5;
      } else if (_arg1 instanceof _ConstraintSolver.ErrorFromApplyingDefault) {
        $target$$29 = 1;
        m = _arg1.Data5;
      } else if (_arg1 instanceof _ConstraintSolver.ErrorsFromAddingSubsumptionConstraint) {
        $target$$29 = 1;
        m = _arg1.Data6;
      } else if (_arg1 instanceof _TypeChecker.FunctionExpected) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _TypeChecker.BakedInMemberConstraintName) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _TypeChecker.StandardOperatorRedefinitionWarning) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _infos.BadEventTransformation) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.ParameterlessStructCtor) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _MethodCalls.FieldNotMutable) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _TypeChecker.Recursion) {
        $target$$29 = 1;
        m = _arg1.Data4;
      } else if (_arg1 instanceof _TypeChecker.InvalidRuntimeCoercion) {
        $target$$29 = 1;
        m = _arg1.Data3;
      } else if (_arg1 instanceof _TypeChecker.IndeterminateRuntimeCoercion) {
        $target$$29 = 1;
        m = _arg1.Data3;
      } else if (_arg1 instanceof _TypeChecker.IndeterminateStaticCoercion) {
        $target$$29 = 1;
        m = _arg1.Data3;
      } else if (_arg1 instanceof _TypeChecker.StaticCoercionShouldUseBox) {
        $target$$29 = 1;
        m = _arg1.Data3;
      } else if (_arg1 instanceof _TypeChecker.CoercionTargetSealed) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _TypeChecker.UpcastUnnecessary) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _QuotationTranslator.IgnoringPartOfQuotedTermWarning) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _TypeChecker.TypeTestUnnecessary) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.RuntimeCoercionSourceSealed) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _MethodOverrides.OverrideDoesntOverride) {
        $target$$29 = 1;
        m = _arg1.Data5;
      } else if (_arg1 instanceof _TypeChecker.UnionPatternsBindDifferentNames) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.UnionCaseWrongArguments) {
        $target$$29 = 1;
        m = _arg1.Data3;
      } else if (_arg1 instanceof _MethodOverrides.TypeIsImplicitlyAbstract) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _SignatureConformance.RequiredButNotSpecified) {
        $target$$29 = 1;
        m = _arg1.Data4;
      } else if (_arg1 instanceof _TypeChecker.FunctionValueUnexpected) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _TypeChecker.UnitTypeExpected) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _TypeChecker.UnitTypeExpectedWithEquality) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _TypeChecker.UnitTypeExpectedWithPossiblePropertySetter) {
        $target$$29 = 1;
        m = _arg1.Data4;
      } else if (_arg1 instanceof _TypeChecker.UnitTypeExpectedWithPossibleAssignment) {
        $target$$29 = 1;
        m = _arg1.Data4;
      } else if (_arg1 instanceof _TypeChecker.UseOfAddressOfOperator) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.DeprecatedThreadStaticBindingWarning) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.NonUniqueInferredAbstractSlot) {
        $target$$29 = 1;
        m = _arg1.Data5;
      } else if (_arg1 instanceof _TastOps.DefensiveCopyWarning) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _TypeChecker.LetRecCheckedAtRuntime) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _NameResolution.UpperCaseIdentifierInPattern) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.NotUpperCaseConstructor) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.RecursiveUseCheckedAtRuntime) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _TypeChecker.LetRecEvaluatedOutOfOrder) {
        $target$$29 = 1;
        m = _arg1.Data3;
      } else if (_arg1 instanceof _ErrorLogger.Error$) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _ErrorLogger.ErrorWithSuggestions) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _ErrorLogger.NumberedError) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _ast.SyntaxError) {
        $target$$29 = 1;
        m = _arg1.range;
      } else if (_arg1 instanceof _ErrorLogger.InternalError) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _tast.FullAbstraction) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _SignatureConformance.InterfaceNotRevealed) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _ErrorLogger.WrappedError) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _PatternMatchCompilation.MatchIncomplete) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _PatternMatchCompilation.EnumMatchIncomplete) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _PatternMatchCompilation.RuleNeverMatched) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.ValNotMutable) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _TypeChecker.ValNotLocal) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _TypeChecker.MissingFields) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _TypeChecker.OverrideInIntrinsicAugmentation) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.IntfImplInIntrinsicAugmentation) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.OverrideInExtrinsicAugmentation) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.IntfImplInExtrinsicAugmentation) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.ValueRestriction) {
        $target$$29 = 1;
        m = _arg1.Data4;
      } else if (_arg1 instanceof _TypeChecker.LetRecUnsound) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _AttributeChecking.ObsoleteError) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _AttributeChecking.ObsoleteWarning) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _ErrorLogger.Experimental) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _ErrorLogger.PossibleUnverifiableCode) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _ErrorLogger.UserCompilerMessage) {
        $target$$29 = 1;
        m = _arg1.Data2;
      } else if (_arg1 instanceof _ErrorLogger.Deprecated) {
        $target$$29 = 1;
        m = _arg1.Data1;
      } else if (_arg1 instanceof _ErrorLogger.LibraryUseOnly) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.FieldsFromDifferentTypes) {
        $target$$29 = 1;
        m = _arg1.Data3;
      } else if (_arg1 instanceof _NameResolution.IndeterminateType) {
        $target$$29 = 1;
        m = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.TyconBadArgs) {
        $target$$29 = 1;
        m = _arg1.Data3;
      } else if (_arg1 instanceof _SignatureConformance.FieldNotContained) {
        $target$$29 = 2;
        arf = _arg1.Data1;
      } else if (_arg1 instanceof _SignatureConformance.ValueNotContained) {
        $target$$29 = 3;
        aval = _arg1.Data2;
      } else if (_arg1 instanceof _SignatureConformance.ConstrNotContained) {
        $target$$29 = 4;
        aval$$1 = _arg1.Data1;
      } else if (_arg1 instanceof _SignatureConformance.ExnconstrNotContained) {
        $target$$29 = 5;
        aexnc = _arg1.Data1;
      } else if (_arg1 instanceof _TypeChecker.VarBoundTwice) {
        $target$$29 = 6;
        id = _arg1.Data0;
      } else if (_arg1 instanceof _tast.UndefinedName) {
        $target$$29 = 6;
        id = _arg1.Data2;
      } else if (_arg1 instanceof _tast.Duplicate) {
        $target$$29 = 7;
        m$$1 = _arg1.Data2;
      } else if (_arg1 instanceof _tast.NameClash) {
        $target$$29 = 7;
        m$$1 = _arg1.Data3;
      } else if (_arg1 instanceof _ConstraintSolver.UnresolvedOverloading) {
        $target$$29 = 7;
        m$$1 = _arg1.Data3;
      } else if (_arg1 instanceof _ConstraintSolver.UnresolvedConversionOperator) {
        $target$$29 = 7;
        m$$1 = _arg1.Data3;
      } else if (_arg1 instanceof _ConstraintSolver.PossibleOverload) {
        $target$$29 = 7;
        m$$1 = _arg1.Data3;
      } else if (_arg1 instanceof _TypeChecker.VirtualAugmentationOnNullValuedType) {
        $target$$29 = 7;
        m$$1 = _arg1.Data0;
      } else if (_arg1 instanceof _TypeChecker.NonVirtualAugmentationOnNullValuedType) {
        $target$$29 = 7;
        m$$1 = _arg1.Data0;
      } else if (_arg1 instanceof _ConstraintSolver.NonRigidTypar) {
        $target$$29 = 7;
        m$$1 = _arg1.Data5;
      } else if (_arg1 instanceof _ConstraintSolver.ConstraintSolverTupleDiffLengths) {
        $target$$29 = 7;
        m$$1 = _arg1.Data3;
      } else if (_arg1 instanceof _ConstraintSolver.ConstraintSolverInfiniteTypes) {
        $target$$29 = 7;
        m$$1 = _arg1.Data4;
      } else if (_arg1 instanceof _ConstraintSolver.ConstraintSolverMissingConstraint) {
        $target$$29 = 7;
        m$$1 = _arg1.Data3;
      } else if (_arg1 instanceof _ConstraintSolver.ConstraintSolverTypesNotInEqualityRelation) {
        $target$$29 = 7;
        m$$1 = _arg1.Data3;
      } else if (_arg1 instanceof _ConstraintSolver.ConstraintSolverError) {
        $target$$29 = 7;
        m$$1 = _arg1.Data1;
      } else if (_arg1 instanceof _ConstraintSolver.ConstraintSolverTypesNotInSubsumptionRelation) {
        $target$$29 = 7;
        m$$1 = _arg1.Data3;
      } else if (_arg1 instanceof _ConstraintSolver.ConstraintSolverRelatedInformation) {
        $target$$29 = 7;
        m$$1 = _arg1.Data1;
      } else if (_arg1 instanceof _TypeChecker.SelfRefObjCtor) {
        $target$$29 = 7;
        m$$1 = _arg1.Data1;
      } else if (_arg1 instanceof _TypeChecker.NotAFunction) {
        $target$$29 = 8;
        mfun = _arg1.Data2;
      } else if (_arg1 instanceof _TypeChecker.NotAFunctionButIndexer) {
        $target$$29 = 9;
        mfun$$1 = _arg1.Data3;
      } else if (_arg1 instanceof _filename.IllegalFileNameChar) {
        $target$$29 = 10;
      } else if (_arg1 instanceof _ErrorLogger.UnresolvedReferenceError) {
        $target$$29 = 11;
        m$$2 = _arg1.Data1;
      } else if (_arg1 instanceof _ErrorLogger.UnresolvedPathReference) {
        $target$$29 = 11;
        m$$2 = _arg1.Data2;
      } else if (_arg1 instanceof DeprecatedCommandLineOptionFull) {
        $target$$29 = 11;
        m$$2 = _arg1.Data1;
      } else if (_arg1 instanceof DeprecatedCommandLineOptionForHtmlDoc) {
        $target$$29 = 11;
        m$$2 = _arg1.Data1;
      } else if (_arg1 instanceof DeprecatedCommandLineOptionSuggestAlternative) {
        $target$$29 = 11;
        m$$2 = _arg1.Data2;
      } else if (_arg1 instanceof DeprecatedCommandLineOptionNoDescription) {
        $target$$29 = 11;
        m$$2 = _arg1.Data1;
      } else if (_arg1 instanceof InternalCommandLineOption) {
        $target$$29 = 11;
        m$$2 = _arg1.Data1;
      } else if (_arg1 instanceof HashIncludeNotAllowedInNonScript) {
        $target$$29 = 11;
        m$$2 = _arg1.Data0;
      } else if (_arg1 instanceof HashReferenceNotAllowedInNonScript) {
        $target$$29 = 11;
        m$$2 = _arg1.Data0;
      } else if (_arg1 instanceof HashDirectiveNotAllowedInNonScript) {
        $target$$29 = 11;
        m$$2 = _arg1.Data0;
      } else if (_arg1 instanceof FileNameNotResolved) {
        $target$$29 = 11;
        m$$2 = _arg1.Data2;
      } else if (_arg1 instanceof LoadedSourceNotFoundIgnoring) {
        $target$$29 = 11;
        m$$2 = _arg1.Data1;
      } else if (_arg1 instanceof MSBuildReferenceResolutionWarning) {
        $target$$29 = 11;
        m$$2 = _arg1.Data2;
      } else if (_arg1 instanceof MSBuildReferenceResolutionError) {
        $target$$29 = 11;
        m$$2 = _arg1.Data2;
      } else if (_arg1 instanceof AssemblyNotResolved) {
        $target$$29 = 11;
        m$$2 = _arg1.Data1;
      } else if (_arg1 instanceof HashLoadedSourceHasIssues) {
        $target$$29 = 11;
        m$$2 = _arg1.Data2;
      } else if (_arg1 instanceof HashLoadedScriptConsideredSource) {
        $target$$29 = 11;
        m$$2 = _arg1.Data0;
      } else {
        $target$$29 = 12;
      }

      switch ($target$$29) {
        case 0:
          {
            _arg1 = err2;
            continue RangeFromException;
          }

        case 1:
          {
            return m;
          }

        case 2:
          {
            return (0, _tast.RecdField$$get_Range)(arf);
          }

        case 3:
          {
            return (0, _tast.Val$$get_Range)(aval);
          }

        case 4:
          {
            return (0, _ast.Ident$$get_idRange)(aval$$1.Id);
          }

        case 5:
          {
            return (0, _tast.Entity$$get_Range)(aexnc);
          }

        case 6:
          {
            return (0, _ast.Ident$$get_idRange)(id);
          }

        case 7:
          {
            return m$$1;
          }

        case 8:
          {
            return mfun;
          }

        case 9:
          {
            return mfun$$1;
          }

        case 10:
          {
            return _range.rangeCmdArgs;
          }

        case 11:
          {
            return m$$2;
          }

        case 12:
          {
            return null;
          }
      }
    }
  };

  return RangeFromException(err.Exception);
}

function GetDiagnosticNumber(err$$1) {
  const GetFromException = function GetFromException(e) {
    GetFromException: while (true) {
      var $target$$30, n, e$$1, n$$1, n$$2;

      if (e instanceof _ConstraintSolver.ErrorFromAddingTypeEquation) {
        $target$$30 = 0;
      } else if (e instanceof _TypeChecker.FunctionExpected) {
        $target$$30 = 1;
      } else if (e instanceof _TypeChecker.NotAFunctionButIndexer) {
        $target$$30 = 2;
      } else if (e instanceof _TypeChecker.NotAFunction) {
        $target$$30 = 3;
      } else if (e instanceof _MethodCalls.FieldNotMutable) {
        $target$$30 = 4;
      } else if (e instanceof _TypeChecker.Recursion) {
        $target$$30 = 5;
      } else if (e instanceof _TypeChecker.InvalidRuntimeCoercion) {
        $target$$30 = 6;
      } else if (e instanceof _TypeChecker.IndeterminateRuntimeCoercion) {
        $target$$30 = 7;
      } else if (e instanceof _ErrorLogger.PossibleUnverifiableCode) {
        $target$$30 = 8;
      } else if (e instanceof _ast.SyntaxError) {
        $target$$30 = 9;
      } else if (e instanceof _TypeChecker.IndeterminateStaticCoercion) {
        $target$$30 = 10;
      } else if (e instanceof _TypeChecker.StaticCoercionShouldUseBox) {
        $target$$30 = 11;
      } else if (e instanceof _TypeChecker.RuntimeCoercionSourceSealed) {
        $target$$30 = 12;
      } else if (e instanceof _MethodOverrides.OverrideDoesntOverride) {
        $target$$30 = 13;
      } else if (e instanceof _TypeChecker.UnionPatternsBindDifferentNames) {
        $target$$30 = 14;
      } else if (e instanceof _TypeChecker.UnionCaseWrongArguments) {
        $target$$30 = 15;
      } else if (e instanceof _TypeChecker.UnitTypeExpected) {
        $target$$30 = 16;
      } else if (e instanceof _TypeChecker.UnitTypeExpectedWithEquality) {
        $target$$30 = 17;
      } else if (e instanceof _TypeChecker.UnitTypeExpectedWithPossiblePropertySetter) {
        $target$$30 = 18;
      } else if (e instanceof _TypeChecker.UnitTypeExpectedWithPossibleAssignment) {
        $target$$30 = 19;
      } else if (e instanceof _TypeChecker.RecursiveUseCheckedAtRuntime) {
        $target$$30 = 20;
      } else if (e instanceof _TypeChecker.LetRecEvaluatedOutOfOrder) {
        $target$$30 = 21;
      } else if (e instanceof _tast.NameClash) {
        $target$$30 = 22;
      } else if (e instanceof _PatternMatchCompilation.MatchIncomplete) {
        $target$$30 = 23;
      } else if (e instanceof _PatternMatchCompilation.RuleNeverMatched) {
        $target$$30 = 24;
      } else if (e instanceof _TypeChecker.ValNotMutable) {
        $target$$30 = 25;
      } else if (e instanceof _TypeChecker.ValNotLocal) {
        $target$$30 = 26;
      } else if (e instanceof _TypeChecker.MissingFields) {
        $target$$30 = 27;
      } else if (e instanceof _TypeChecker.ValueRestriction) {
        $target$$30 = 28;
      } else if (e instanceof _TypeChecker.LetRecUnsound) {
        $target$$30 = 29;
      } else if (e instanceof _TypeChecker.FieldsFromDifferentTypes) {
        $target$$30 = 30;
      } else if (e instanceof _TypeChecker.TyconBadArgs) {
        $target$$30 = 31;
      } else if (e instanceof _SignatureConformance.ValueNotContained) {
        $target$$30 = 32;
      } else if (e instanceof _ErrorLogger.Deprecated) {
        $target$$30 = 33;
      } else if (e instanceof _SignatureConformance.ConstrNotContained) {
        $target$$30 = 34;
      } else if (e instanceof _tast.Duplicate) {
        $target$$30 = 35;
      } else if (e instanceof _TypeChecker.VarBoundTwice) {
        $target$$30 = 36;
      } else if (e instanceof _tast.UndefinedName) {
        $target$$30 = 37;
      } else if (e instanceof _TypeChecker.LetRecCheckedAtRuntime) {
        $target$$30 = 38;
      } else if (e instanceof _ConstraintSolver.UnresolvedOverloading) {
        $target$$30 = 39;
      } else if (e instanceof _ErrorLogger.LibraryUseOnly) {
        $target$$30 = 40;
      } else if (e instanceof _ConstraintSolver.ErrorFromAddingConstraint) {
        $target$$30 = 41;
      } else if (e instanceof _AttributeChecking.ObsoleteWarning) {
        $target$$30 = 42;
      } else if (e instanceof _tast.FullAbstraction) {
        $target$$30 = 43;
      } else if (e instanceof _lexhelp.ReservedKeyword) {
        $target$$30 = 44;
      } else if (e instanceof _TypeChecker.SelfRefObjCtor) {
        $target$$30 = 45;
      } else if (e instanceof _TypeChecker.VirtualAugmentationOnNullValuedType) {
        $target$$30 = 46;
      } else if (e instanceof _NameResolution.UpperCaseIdentifierInPattern) {
        $target$$30 = 47;
      } else if (e instanceof _SignatureConformance.InterfaceNotRevealed) {
        $target$$30 = 48;
      } else if (e instanceof _TypeChecker.UseOfAddressOfOperator) {
        $target$$30 = 49;
      } else if (e instanceof _TastOps.DefensiveCopyWarning) {
        $target$$30 = 50;
      } else if (e instanceof _TypeChecker.NotUpperCaseConstructor) {
        $target$$30 = 51;
      } else if (e instanceof _MethodOverrides.TypeIsImplicitlyAbstract) {
        $target$$30 = 52;
      } else if (e instanceof _TypeChecker.DeprecatedThreadStaticBindingWarning) {
        $target$$30 = 53;
      } else if (e instanceof _ErrorLogger.Experimental) {
        $target$$30 = 54;
      } else if (e instanceof _lexhelp.IndentationProblem) {
        $target$$30 = 55;
      } else if (e instanceof _TypeChecker.CoercionTargetSealed) {
        $target$$30 = 56;
      } else if (e instanceof _TypeChecker.OverrideInIntrinsicAugmentation) {
        $target$$30 = 57;
      } else if (e instanceof _TypeChecker.NonVirtualAugmentationOnNullValuedType) {
        $target$$30 = 58;
      } else if (e instanceof _ErrorLogger.UserCompilerMessage) {
        $target$$30 = 59;
        n = e.Data1;
      } else if (e instanceof _SignatureConformance.ExnconstrNotContained) {
        $target$$30 = 60;
      } else if (e instanceof _ConstraintSolver.NonRigidTypar) {
        $target$$30 = 61;
      } else if (e instanceof _TypeChecker.UpcastUnnecessary) {
        $target$$30 = 62;
      } else if (e instanceof _TypeChecker.TypeTestUnnecessary) {
        $target$$30 = 63;
      } else if (e instanceof _QuotationTranslator.IgnoringPartOfQuotedTermWarning) {
        $target$$30 = 64;
      } else if (e instanceof _TypeChecker.IntfImplInIntrinsicAugmentation) {
        $target$$30 = 65;
      } else if (e instanceof _TypeChecker.NonUniqueInferredAbstractSlot) {
        $target$$30 = 66;
      } else if (e instanceof _ConstraintSolver.ErrorFromApplyingDefault) {
        $target$$30 = 67;
      } else if (e instanceof _NameResolution.IndeterminateType) {
        $target$$30 = 68;
      } else if (e instanceof _ErrorLogger.InternalError) {
        $target$$30 = 69;
      } else if (e instanceof _ErrorLogger.UnresolvedReferenceNoRange) {
        $target$$30 = 70;
      } else if (e instanceof _ErrorLogger.UnresolvedReferenceError) {
        $target$$30 = 70;
      } else if (e instanceof _ErrorLogger.UnresolvedPathReferenceNoRange) {
        $target$$30 = 70;
      } else if (e instanceof _ErrorLogger.UnresolvedPathReference) {
        $target$$30 = 70;
      } else if (e instanceof DeprecatedCommandLineOptionFull) {
        $target$$30 = 71;
      } else if (e instanceof DeprecatedCommandLineOptionForHtmlDoc) {
        $target$$30 = 71;
      } else if (e instanceof DeprecatedCommandLineOptionSuggestAlternative) {
        $target$$30 = 71;
      } else if (e instanceof DeprecatedCommandLineOptionNoDescription) {
        $target$$30 = 71;
      } else if (e instanceof InternalCommandLineOption) {
        $target$$30 = 71;
      } else if (e instanceof HashIncludeNotAllowedInNonScript) {
        $target$$30 = 72;
      } else if (e instanceof HashReferenceNotAllowedInNonScript) {
        $target$$30 = 72;
      } else if (e instanceof HashDirectiveNotAllowedInNonScript) {
        $target$$30 = 72;
      } else if (e instanceof _TypeChecker.BakedInMemberConstraintName) {
        $target$$30 = 73;
      } else if (e instanceof FileNameNotResolved) {
        $target$$30 = 74;
      } else if (e instanceof LoadedSourceNotFoundIgnoring) {
        $target$$30 = 75;
      } else if (e instanceof _TypeChecker.ParameterlessStructCtor) {
        $target$$30 = 76;
      } else if (e instanceof MSBuildReferenceResolutionWarning) {
        $target$$30 = 77;
      } else if (e instanceof MSBuildReferenceResolutionError) {
        $target$$30 = 78;
      } else if (e instanceof AssemblyNotResolved) {
        $target$$30 = 79;
      } else if (e instanceof HashLoadedSourceHasIssues) {
        $target$$30 = 80;
      } else if (e instanceof _TypeChecker.StandardOperatorRedefinitionWarning) {
        $target$$30 = 81;
      } else if (e instanceof _TypeChecker.InvalidInternalsVisibleToAssemblyName) {
        $target$$30 = 82;
      } else if (e instanceof _TypeChecker.OverrideInExtrinsicAugmentation) {
        $target$$30 = 83;
      } else if (e instanceof _TypeChecker.IntfImplInExtrinsicAugmentation) {
        $target$$30 = 84;
      } else if (e instanceof _infos.BadEventTransformation) {
        $target$$30 = 85;
      } else if (e instanceof HashLoadedScriptConsideredSource) {
        $target$$30 = 86;
      } else if (e instanceof _ConstraintSolver.UnresolvedConversionOperator) {
        $target$$30 = 87;
      } else if (e instanceof _AttributeChecking.ObsoleteError) {
        $target$$30 = 88;
      } else if (e instanceof _PatternMatchCompilation.EnumMatchIncomplete) {
        $target$$30 = 89;
      } else if (e instanceof _ErrorLogger.WrappedError) {
        $target$$30 = 90;
        e$$1 = e.Data0;
      } else if (e instanceof _ErrorLogger.Error$) {
        $target$$30 = 91;
        n$$1 = e.Data0[0];
      } else if (e instanceof _ErrorLogger.ErrorWithSuggestions) {
        $target$$30 = 92;
        n$$2 = e.Data0[0];
      } else if ((0, _FSharp.Operators$$$FailurePattern)(e) != null) {
        $target$$30 = 93;
      } else {
        $target$$30 = 94;
      }

      switch ($target$$30) {
        case 0:
          {
            return 1;
          }

        case 1:
          {
            return 2;
          }

        case 2:
          {
            return 3217;
          }

        case 3:
          {
            return 3;
          }

        case 4:
          {
            return 5;
          }

        case 5:
          {
            return 6;
          }

        case 6:
          {
            return 7;
          }

        case 7:
          {
            return 8;
          }

        case 8:
          {
            return 9;
          }

        case 9:
          {
            return 10;
          }

        case 10:
          {
            return 13;
          }

        case 11:
          {
            return 14;
          }

        case 12:
          {
            return 16;
          }

        case 13:
          {
            return 17;
          }

        case 14:
          {
            return 18;
          }

        case 15:
          {
            return 19;
          }

        case 16:
          {
            return 20;
          }

        case 17:
          {
            return 20;
          }

        case 18:
          {
            return 20;
          }

        case 19:
          {
            return 20;
          }

        case 20:
          {
            return 21;
          }

        case 21:
          {
            return 22;
          }

        case 22:
          {
            return 23;
          }

        case 23:
          {
            return 25;
          }

        case 24:
          {
            return 26;
          }

        case 25:
          {
            return 27;
          }

        case 26:
          {
            return 28;
          }

        case 27:
          {
            return 29;
          }

        case 28:
          {
            return 30;
          }

        case 29:
          {
            return 31;
          }

        case 30:
          {
            return 32;
          }

        case 31:
          {
            return 33;
          }

        case 32:
          {
            return 34;
          }

        case 33:
          {
            return 35;
          }

        case 34:
          {
            return 36;
          }

        case 35:
          {
            return 37;
          }

        case 36:
          {
            return 38;
          }

        case 37:
          {
            return 39;
          }

        case 38:
          {
            return 40;
          }

        case 39:
          {
            return 41;
          }

        case 40:
          {
            return 42;
          }

        case 41:
          {
            return 43;
          }

        case 42:
          {
            return 44;
          }

        case 43:
          {
            return 45;
          }

        case 44:
          {
            return 46;
          }

        case 45:
          {
            return 47;
          }

        case 46:
          {
            return 48;
          }

        case 47:
          {
            return 49;
          }

        case 48:
          {
            return 50;
          }

        case 49:
          {
            return 51;
          }

        case 50:
          {
            return 52;
          }

        case 51:
          {
            return 53;
          }

        case 52:
          {
            return 54;
          }

        case 53:
          {
            return 56;
          }

        case 54:
          {
            return 57;
          }

        case 55:
          {
            return 58;
          }

        case 56:
          {
            return 59;
          }

        case 57:
          {
            return 60;
          }

        case 58:
          {
            return 61;
          }

        case 59:
          {
            return n | 0;
          }

        case 60:
          {
            return 63;
          }

        case 61:
          {
            return 64;
          }

        case 62:
          {
            return 66;
          }

        case 63:
          {
            return 67;
          }

        case 64:
          {
            return 68;
          }

        case 65:
          {
            return 69;
          }

        case 66:
          {
            return 70;
          }

        case 67:
          {
            return 71;
          }

        case 68:
          {
            return 72;
          }

        case 69:
          {
            return 73;
          }

        case 70:
          {
            return 74;
          }

        case 71:
          {
            return 75;
          }

        case 72:
          {
            return 76;
          }

        case 73:
          {
            return 77;
          }

        case 74:
          {
            return 78;
          }

        case 75:
          {
            return 79;
          }

        case 76:
          {
            return 81;
          }

        case 77:
          {
            return 82;
          }

        case 78:
          {
            return 83;
          }

        case 79:
          {
            return 84;
          }

        case 80:
          {
            return 85;
          }

        case 81:
          {
            return 86;
          }

        case 82:
          {
            return 87;
          }

        case 83:
          {
            return 89;
          }

        case 84:
          {
            return 90;
          }

        case 85:
          {
            return 91;
          }

        case 86:
          {
            return 92;
          }

        case 87:
          {
            return 93;
          }

        case 88:
          {
            return 101;
          }

        case 89:
          {
            return 104;
          }

        case 90:
          {
            e = e$$1;
            continue GetFromException;
          }

        case 91:
          {
            return n$$1 | 0;
          }

        case 92:
          {
            return n$$2 | 0;
          }

        case 93:
          {
            return 192;
          }

        case 94:
          {
            var $target$$31, n$$3, fileName, invalidChar;

            if (e instanceof _ErrorLogger.NumberedError) {
              $target$$31 = 0;
              n$$3 = e.Data0[0];
            } else if (e instanceof _filename.IllegalFileNameChar) {
              $target$$31 = 1;
              fileName = e.Data0;
              invalidChar = e.Data1;
            } else if (e instanceof _ConstraintSolver.ErrorsFromAddingSubsumptionConstraint) {
              if (e.Data5.tag === 10) {
                $target$$31 = 2;
              } else {
                $target$$31 = 3;
              }
            } else {
              $target$$31 = 3;
            }

            switch ($target$$31) {
              case 0:
                {
                  return n$$3 | 0;
                }

              case 1:
                {
                  return (0, _FSComp.SR$$$buildUnexpectedFileNameCharacter$$Z384F8060)(fileName, invalidChar)[0] | 0;
                }

              case 2:
                {
                  return (0, _FSComp.SR$$$considerUpcast$$Z384F8060)("", "")[0] | 0;
                }

              case 3:
                {
                  return 193;
                }
            }
          }
      }
    }
  };

  return GetFromException(err$$1.Exception) | 0;
}

function GetWarningLevel(err$$2) {
  var $target$$32, n$$4;

  if (err$$2.Exception instanceof _TypeChecker.RecursiveUseCheckedAtRuntime) {
    $target$$32 = 0;
  } else if (err$$2.Exception instanceof _TypeChecker.LetRecEvaluatedOutOfOrder) {
    $target$$32 = 0;
  } else if (err$$2.Exception instanceof _TastOps.DefensiveCopyWarning) {
    $target$$32 = 0;
  } else if (err$$2.Exception instanceof _tast.FullAbstraction) {
    $target$$32 = 0;
  } else if (err$$2.Exception instanceof _ErrorLogger.NumberedError) {
    $target$$32 = 1;
    n$$4 = err$$2.Exception.Data0[0];
  } else if (err$$2.Exception instanceof _ErrorLogger.ErrorWithSuggestions) {
    $target$$32 = 1;
    n$$4 = err$$2.Exception.Data0[0];
  } else if (err$$2.Exception instanceof _ErrorLogger.Error$) {
    $target$$32 = 1;
    n$$4 = err$$2.Exception.Data0[0];
  } else {
    $target$$32 = 2;
  }

  switch ($target$$32) {
    case 0:
      {
        return 5;
      }

    case 1:
      {
        if (n$$4 === 1178) {
          return 5;
        } else {
          return 2;
        }
      }

    case 2:
      {
        return 2;
      }
  }
}

function warningOn(err$$3, level, specificWarnOn) {
  const n$$5 = GetDiagnosticNumber(err$$3) | 0;

  if ((0, _List.contains)(n$$5, specificWarnOn, {
    Equals($x$$1, $y$$2) {
      return $x$$1 === $y$$2;
    },

    GetHashCode: _Util.structuralHash
  })) {
    return true;
  } else {
    switch (n$$5) {
      case 1182:
        {
          return false;
        }

      case 3180:
        {
          return false;
        }

      case 3218:
        {
          return false;
        }

      default:
        {
          return level >= GetWarningLevel(err$$3);
        }
    }
  }
}

function SplitRelatedDiagnostics(err$$4) {
  const ToPhased = function ToPhased(e$$2) {
    return new _ErrorLogger.PhasedDiagnostic(e$$2, err$$4.Phase);
  };

  const SplitRelatedException = function SplitRelatedException(_arg1$$1) {
    if (_arg1$$1 instanceof _ConstraintSolver.UnresolvedOverloading) {
      const related = (0, _List.map)(ToPhased, _arg1$$1.Data1);
      return [ToPhased(new _ConstraintSolver.UnresolvedOverloading(_arg1$$1.Data0, (0, _Types.L)(), _arg1$$1.Data2, _arg1$$1.Data3)), related];
    } else if (_arg1$$1 instanceof _ConstraintSolver.ConstraintSolverRelatedInformation) {
      const patternInput = SplitRelatedException(_arg1$$1.Data2);
      return [ToPhased(new _ConstraintSolver.ConstraintSolverRelatedInformation(_arg1$$1.Data0, _arg1$$1.Data1, patternInput[0].Exception)), patternInput[1]];
    } else if (_arg1$$1 instanceof _ConstraintSolver.ErrorFromAddingTypeEquation) {
      const patternInput$$1 = SplitRelatedException(_arg1$$1.Data4);
      return [ToPhased(new _ConstraintSolver.ErrorFromAddingTypeEquation(_arg1$$1.Data0, _arg1$$1.Data1, _arg1$$1.Data2, _arg1$$1.Data3, patternInput$$1[0].Exception, _arg1$$1.Data5)), patternInput$$1[1]];
    } else if (_arg1$$1 instanceof _ConstraintSolver.ErrorFromApplyingDefault) {
      const patternInput$$2 = SplitRelatedException(_arg1$$1.Data4);
      return [ToPhased(new _ConstraintSolver.ErrorFromApplyingDefault(_arg1$$1.Data0, _arg1$$1.Data1, _arg1$$1.Data2, _arg1$$1.Data3, patternInput$$2[0].Exception, _arg1$$1.Data5)), patternInput$$2[1]];
    } else if (_arg1$$1 instanceof _ConstraintSolver.ErrorsFromAddingSubsumptionConstraint) {
      const patternInput$$3 = SplitRelatedException(_arg1$$1.Data4);
      return [ToPhased(new _ConstraintSolver.ErrorsFromAddingSubsumptionConstraint(_arg1$$1.Data0, _arg1$$1.Data1, _arg1$$1.Data2, _arg1$$1.Data3, patternInput$$3[0].Exception, _arg1$$1.Data5, _arg1$$1.Data6)), patternInput$$3[1]];
    } else if (_arg1$$1 instanceof _ConstraintSolver.ErrorFromAddingConstraint) {
      const patternInput$$4 = SplitRelatedException(_arg1$$1.Data1);
      return [ToPhased(new _ConstraintSolver.ErrorFromAddingConstraint(_arg1$$1.Data0, patternInput$$4[0].Exception, _arg1$$1.Data2)), patternInput$$4[1]];
    } else if (_arg1$$1 instanceof _ErrorLogger.WrappedError) {
      const patternInput$$5 = SplitRelatedException(_arg1$$1.Data0);
      return [ToPhased(new _ErrorLogger.WrappedError(patternInput$$5[0].Exception, _arg1$$1.Data1)), patternInput$$5[1]];
    } else {
      return [ToPhased(_arg1$$1), (0, _Types.L)()];
    }
  };

  return SplitRelatedException(err$$4.Exception);
}

function DeclareMesssage() {
  return function (tupledArg) {
    return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)(tupledArg[0], tupledArg[1]);
  };
}

function SeeAlsoE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("SeeAlso", "%s");
}

function ConstraintSolverTupleDiffLengthsE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ConstraintSolverTupleDiffLengths", "%d%d");
}

function ConstraintSolverInfiniteTypesE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ConstraintSolverInfiniteTypes", "%s%s");
}

function ConstraintSolverMissingConstraintE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ConstraintSolverMissingConstraint", "%s");
}

function ConstraintSolverTypesNotInEqualityRelation1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ConstraintSolverTypesNotInEqualityRelation1", "%s%s");
}

function ConstraintSolverTypesNotInEqualityRelation2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ConstraintSolverTypesNotInEqualityRelation2", "%s%s");
}

function ConstraintSolverTypesNotInSubsumptionRelationE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ConstraintSolverTypesNotInSubsumptionRelation", "%s%s%s");
}

function ErrorFromAddingTypeEquation1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ErrorFromAddingTypeEquation1", "%s%s%s");
}

function ErrorFromAddingTypeEquation2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ErrorFromAddingTypeEquation2", "%s%s%s");
}

function ErrorFromApplyingDefault1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ErrorFromApplyingDefault1", "%s");
}

function ErrorFromApplyingDefault2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ErrorFromApplyingDefault2", "");
}

function ErrorsFromAddingSubsumptionConstraintE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ErrorsFromAddingSubsumptionConstraint", "%s%s%s");
}

function UpperCaseIdentifierInPatternE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UpperCaseIdentifierInPattern", "");
}

function NotUpperCaseConstructorE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NotUpperCaseConstructor", "");
}

function PossibleOverloadE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("PossibleOverload", "%s%s");
}

function FunctionExpectedE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("FunctionExpected", "");
}

function BakedInMemberConstraintNameE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("BakedInMemberConstraintName", "%s");
}

function BadEventTransformationE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("BadEventTransformation", "");
}

function ParameterlessStructCtorE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ParameterlessStructCtor", "");
}

function InterfaceNotRevealedE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("InterfaceNotRevealed", "%s");
}

function TyconBadArgsE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("TyconBadArgs", "%s%d%d");
}

function IndeterminateTypeE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("IndeterminateType", "");
}

function NameClash1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NameClash1", "%s%s");
}

function NameClash2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NameClash2", "%s%s%s%s%s");
}

function Duplicate1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("Duplicate1", "%s");
}

function Duplicate2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("Duplicate2", "%s%s");
}

function UndefinedName2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UndefinedName2", "");
}

function FieldNotMutableE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("FieldNotMutable", "");
}

function FieldsFromDifferentTypesE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("FieldsFromDifferentTypes", "%s%s");
}

function VarBoundTwiceE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("VarBoundTwice", "%s");
}

function RecursionE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("Recursion", "%s%s%s%s");
}

function InvalidRuntimeCoercionE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("InvalidRuntimeCoercion", "%s%s%s");
}

function IndeterminateRuntimeCoercionE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("IndeterminateRuntimeCoercion", "%s%s");
}

function IndeterminateStaticCoercionE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("IndeterminateStaticCoercion", "%s%s");
}

function StaticCoercionShouldUseBoxE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("StaticCoercionShouldUseBox", "%s%s");
}

function TypeIsImplicitlyAbstractE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("TypeIsImplicitlyAbstract", "");
}

function NonRigidTypar1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NonRigidTypar1", "%s%s");
}

function NonRigidTypar2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NonRigidTypar2", "%s%s");
}

function NonRigidTypar3E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NonRigidTypar3", "%s%s");
}

function OBlockEndSentenceE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("BlockEndSentence", "");
}

function UnexpectedEndOfInputE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UnexpectedEndOfInput", "");
}

function UnexpectedE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("Unexpected", "%s");
}

function NONTERM_interactionE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.interaction", "");
}

function NONTERM_hashDirectiveE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.hashDirective", "");
}

function NONTERM_fieldDeclE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.fieldDecl", "");
}

function NONTERM_unionCaseReprE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.unionCaseRepr", "");
}

function NONTERM_localBindingE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.localBinding", "");
}

function NONTERM_hardwhiteLetBindingsE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.hardwhiteLetBindings", "");
}

function NONTERM_classDefnMemberE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.classDefnMember", "");
}

function NONTERM_defnBindingsE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.defnBindings", "");
}

function NONTERM_classMemberSpfnE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.classMemberSpfn", "");
}

function NONTERM_valSpfnE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.valSpfn", "");
}

function NONTERM_tyconSpfnE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.tyconSpfn", "");
}

function NONTERM_anonLambdaExprE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.anonLambdaExpr", "");
}

function NONTERM_attrUnionCaseDeclE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.attrUnionCaseDecl", "");
}

function NONTERM_cPrototypeE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.cPrototype", "");
}

function NONTERM_objectImplementationMembersE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.objectImplementationMembers", "");
}

function NONTERM_ifExprCasesE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.ifExprCases", "");
}

function NONTERM_openDeclE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.openDecl", "");
}

function NONTERM_fileModuleSpecE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.fileModuleSpec", "");
}

function NONTERM_patternClausesE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.patternClauses", "");
}

function NONTERM_beginEndExprE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.beginEndExpr", "");
}

function NONTERM_recdExprE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.recdExpr", "");
}

function NONTERM_tyconDefnE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.tyconDefn", "");
}

function NONTERM_exconCoreE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.exconCore", "");
}

function NONTERM_typeNameInfoE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.typeNameInfo", "");
}

function NONTERM_attributeListE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.attributeList", "");
}

function NONTERM_quoteExprE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.quoteExpr", "");
}

function NONTERM_typeConstraintE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.typeConstraint", "");
}

function NONTERM_Category_ImplementationFileE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.Category.ImplementationFile", "");
}

function NONTERM_Category_DefinitionE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.Category.Definition", "");
}

function NONTERM_Category_SignatureFileE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.Category.SignatureFile", "");
}

function NONTERM_Category_PatternE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.Category.Pattern", "");
}

function NONTERM_Category_ExprE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.Category.Expr", "");
}

function NONTERM_Category_TypeE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.Category.Type", "");
}

function NONTERM_typeArgsActualE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NONTERM.typeArgsActual", "");
}

function TokenName1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("TokenName1", "%s");
}

function TokenName1TokenName2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("TokenName1TokenName2", "%s%s");
}

function TokenName1TokenName2TokenName3E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("TokenName1TokenName2TokenName3", "%s%s%s");
}

function RuntimeCoercionSourceSealed1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("RuntimeCoercionSourceSealed1", "%s");
}

function RuntimeCoercionSourceSealed2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("RuntimeCoercionSourceSealed2", "%s");
}

function CoercionTargetSealedE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("CoercionTargetSealed", "%s");
}

function UpcastUnnecessaryE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UpcastUnnecessary", "");
}

function TypeTestUnnecessaryE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("TypeTestUnnecessary", "");
}

function OverrideDoesntOverride1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("OverrideDoesntOverride1", "%s");
}

function OverrideDoesntOverride2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("OverrideDoesntOverride2", "%s");
}

function OverrideDoesntOverride3E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("OverrideDoesntOverride3", "%s");
}

function OverrideDoesntOverride4E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("OverrideDoesntOverride4", "%s");
}

function UnionCaseWrongArgumentsE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UnionCaseWrongArguments", "%d%d");
}

function UnionPatternsBindDifferentNamesE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UnionPatternsBindDifferentNames", "");
}

function RequiredButNotSpecifiedE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("RequiredButNotSpecified", "%s%s%s");
}

function UseOfAddressOfOperatorE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UseOfAddressOfOperator", "");
}

function DefensiveCopyWarningE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("DefensiveCopyWarning", "%s");
}

function DeprecatedThreadStaticBindingWarningE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("DeprecatedThreadStaticBindingWarning", "");
}

function FunctionValueUnexpectedE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("FunctionValueUnexpected", "%s");
}

function UnitTypeExpectedE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UnitTypeExpected", "%s");
}

function UnitTypeExpectedWithEqualityE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UnitTypeExpectedWithEquality", "%s");
}

function UnitTypeExpectedWithPossiblePropertySetterE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UnitTypeExpectedWithPossiblePropertySetter", "%s%s%s");
}

function UnitTypeExpectedWithPossibleAssignmentE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UnitTypeExpectedWithPossibleAssignment", "%s%s");
}

function UnitTypeExpectedWithPossibleAssignmentToMutableE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UnitTypeExpectedWithPossibleAssignmentToMutable", "%s%s");
}

function RecursiveUseCheckedAtRuntimeE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("RecursiveUseCheckedAtRuntime", "");
}

function LetRecUnsound1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("LetRecUnsound1", "%s");
}

function LetRecUnsound2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("LetRecUnsound2", "%s%s");
}

function LetRecUnsoundInnerE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("LetRecUnsoundInner", "%s");
}

function LetRecEvaluatedOutOfOrderE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("LetRecEvaluatedOutOfOrder", "");
}

function LetRecCheckedAtRuntimeE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("LetRecCheckedAtRuntime", "");
}

function SelfRefObjCtor1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("SelfRefObjCtor1", "");
}

function SelfRefObjCtor2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("SelfRefObjCtor2", "");
}

function VirtualAugmentationOnNullValuedTypeE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("VirtualAugmentationOnNullValuedType", "");
}

function NonVirtualAugmentationOnNullValuedTypeE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NonVirtualAugmentationOnNullValuedType", "");
}

function NonUniqueInferredAbstractSlot1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NonUniqueInferredAbstractSlot1", "%s");
}

function NonUniqueInferredAbstractSlot2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NonUniqueInferredAbstractSlot2", "");
}

function NonUniqueInferredAbstractSlot3E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NonUniqueInferredAbstractSlot3", "%s%s");
}

function NonUniqueInferredAbstractSlot4E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("NonUniqueInferredAbstractSlot4", "");
}

function Failure3E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("Failure3", "%s");
}

function Failure4E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("Failure4", "%s");
}

function FullAbstractionE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("FullAbstraction", "%s");
}

function MatchIncomplete1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("MatchIncomplete1", "");
}

function MatchIncomplete2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("MatchIncomplete2", "%s");
}

function MatchIncomplete3E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("MatchIncomplete3", "%s");
}

function MatchIncomplete4E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("MatchIncomplete4", "");
}

function RuleNeverMatchedE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("RuleNeverMatched", "");
}

function EnumMatchIncomplete1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("EnumMatchIncomplete1", "");
}

function ValNotMutableE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ValNotMutable", "%s");
}

function ValNotLocalE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ValNotLocal", "");
}

function Obsolete1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("Obsolete1", "");
}

function Obsolete2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("Obsolete2", "%s");
}

function ExperimentalE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("Experimental", "%s");
}

function PossibleUnverifiableCodeE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("PossibleUnverifiableCode", "");
}

function DeprecatedE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("Deprecated", "%s");
}

function LibraryUseOnlyE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("LibraryUseOnly", "");
}

function MissingFieldsE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("MissingFields", "%s");
}

function ValueRestriction1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ValueRestriction1", "%s%s%s");
}

function ValueRestriction2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ValueRestriction2", "%s%s%s");
}

function ValueRestriction3E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ValueRestriction3", "%s");
}

function ValueRestriction4E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ValueRestriction4", "%s%s%s");
}

function ValueRestriction5E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ValueRestriction5", "%s%s%s");
}

function RecoverableParseErrorE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("RecoverableParseError", "");
}

function ReservedKeywordE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("ReservedKeyword", "%s");
}

function IndentationProblemE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("IndentationProblem", "%s");
}

function OverrideInIntrinsicAugmentationE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("OverrideInIntrinsicAugmentation", "");
}

function OverrideInExtrinsicAugmentationE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("OverrideInExtrinsicAugmentation", "");
}

function IntfImplInIntrinsicAugmentationE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("IntfImplInIntrinsicAugmentation", "");
}

function IntfImplInExtrinsicAugmentationE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("IntfImplInExtrinsicAugmentation", "");
}

function UnresolvedReferenceNoRangeE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UnresolvedReferenceNoRange", "%s");
}

function UnresolvedPathReferenceNoRangeE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("UnresolvedPathReferenceNoRange", "%s%s");
}

function HashIncludeNotAllowedInNonScriptE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("HashIncludeNotAllowedInNonScript", "");
}

function HashReferenceNotAllowedInNonScriptE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("HashReferenceNotAllowedInNonScript", "");
}

function HashDirectiveNotAllowedInNonScriptE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("HashDirectiveNotAllowedInNonScript", "");
}

function FileNameNotResolvedE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("FileNameNotResolved", "%s%s");
}

function AssemblyNotResolvedE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("AssemblyNotResolved", "%s");
}

function HashLoadedSourceHasIssues1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("HashLoadedSourceHasIssues1", "");
}

function HashLoadedSourceHasIssues2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("HashLoadedSourceHasIssues2", "");
}

function HashLoadedScriptConsideredSourceE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("HashLoadedScriptConsideredSource", "");
}

function InvalidInternalsVisibleToAssemblyName1E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("InvalidInternalsVisibleToAssemblyName1", "%s%s");
}

function InvalidInternalsVisibleToAssemblyName2E() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("InvalidInternalsVisibleToAssemblyName2", "%s");
}

function LoadedSourceNotFoundIgnoringE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("LoadedSourceNotFoundIgnoring", "%s");
}

function MSBuildReferenceResolutionErrorE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("MSBuildReferenceResolutionError", "%s%s");
}

function TargetInvocationExceptionWrapperE() {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString)("TargetInvocationExceptionWrapper", "%s");
}

function getErrorString(key) {
  return (0, _adapters.Microsoft$002EFSharp$002ECompiler$002ESR$$$GetString)(key);
}

function $007CInvalidArgument$007C_$007C(exn) {
  if (false) {
    return exn.message;
  } else {
    return null;
  }
}

const StringBuilder = (0, _Types.declare)(function StringBuilder() {
  const $this$$3 = this;
  $this$$3.buf = (0, _System.StringBuilder$$$$002Ector)();
});
exports.StringBuilder = StringBuilder;

function StringBuilder$$$$002Ector() {
  return this != null ? StringBuilder.call(this) : new StringBuilder();
}

function StringBuilder$$Append$$Z721C83C5(x$$1, s) {
  (0, _System.StringBuilder$$Append$$Z721C83C5)(x$$1.buf, s);
  return x$$1;
}

StringBuilder.prototype.toString = function () {
  const x$$2 = this;
  return (0, _Util.toString)(x$$2.buf);
};

function Printf$$$bprintf(sb) {
  const f = function f(s$$1) {
    StringBuilder$$Append$$Z721C83C5(sb, s$$1);
  };

  return function (format) {
    return format.cont(f);
  };
}

function OutputPhasedErrorR(os, err$$5) {
  const OutputExceptionR = function OutputExceptionR(os$$1, error) {
    var range$$10, range$$8, range$$6, range$$4, range$$2, isArray, range, range$$22, range$$20, range$$18, range$$16, range$$14, isArray$$2, range$$12, types$$1, t$$1, f$$6, f$$8, membInfo, e$$18, contextInfo$$5, t2$0027, t2$$2, t1$0027, t1$$2, m$$8, g$$3, denv$$3, contextInfo$$1;
    var $target$$33, m$$9, m2$$1, tl1, tl2, contextInfo$$2, denv$$4, m$$10, m2$$2, t1$$3, t2$$3, denv$$5, m$$11, m2$$3, tpc, tpr, denv$$6, m$$12, m2$$4, t1$$5, t2$$5, contextInfo$$3, denv$$7, m$$13, m2$$5, t1$$7, t2$$7, denv$$8, m$$14, m2$$6, t1$$9, t2$$9, m$$15, m2$$7, msg, e$$17, fopt$$1, contextInfo$$4, denv$$9, g$$4, m$$16, t1$$11, t1$0027$$1, t2$$11, t2$0027$$1;

    if (error instanceof _ConstraintSolver.ConstraintSolverTupleDiffLengths) {
      $target$$33 = 0;
      m$$9 = error.Data3;
      m2$$1 = error.Data4;
      tl1 = error.Data1;
      tl2 = error.Data2;
    } else if (error instanceof _ConstraintSolver.ConstraintSolverInfiniteTypes) {
      $target$$33 = 1;
      contextInfo$$2 = error.Data0;
      denv$$4 = error.Data1;
      m$$10 = error.Data4;
      m2$$2 = error.Data5;
      t1$$3 = error.Data2;
      t2$$3 = error.Data3;
    } else if (error instanceof _ConstraintSolver.ConstraintSolverMissingConstraint) {
      $target$$33 = 2;
      denv$$5 = error.Data0;
      m$$11 = error.Data3;
      m2$$3 = error.Data4;
      tpc = error.Data2;
      tpr = error.Data1;
    } else if (error instanceof _ConstraintSolver.ConstraintSolverTypesNotInEqualityRelation) {
      if (error.Data1.tag === 6) {
        if (error.Data2.tag === 6) {
          $target$$33 = 3;
          denv$$6 = error.Data0;
          m$$12 = error.Data3;
          m2$$4 = error.Data4;
          t1$$5 = error.Data1;
          t2$$5 = error.Data2;
        } else {
          $target$$33 = 4;
          contextInfo$$3 = error.Data5;
          denv$$7 = error.Data0;
          m$$13 = error.Data3;
          m2$$5 = error.Data4;
          t1$$7 = error.Data1;
          t2$$7 = error.Data2;
        }
      } else {
        $target$$33 = 4;
        contextInfo$$3 = error.Data5;
        denv$$7 = error.Data0;
        m$$13 = error.Data3;
        m2$$5 = error.Data4;
        t1$$7 = error.Data1;
        t2$$7 = error.Data2;
      }
    } else if (error instanceof _ConstraintSolver.ConstraintSolverTypesNotInSubsumptionRelation) {
      $target$$33 = 5;
      denv$$8 = error.Data0;
      m$$14 = error.Data3;
      m2$$6 = error.Data4;
      t1$$9 = error.Data1;
      t2$$9 = error.Data2;
    } else if (error instanceof _ConstraintSolver.ConstraintSolverError) {
      $target$$33 = 6;
      m$$15 = error.Data1;
      m2$$7 = error.Data2;
      msg = error.Data0;
    } else if (error instanceof _ConstraintSolver.ConstraintSolverRelatedInformation) {
      $target$$33 = 7;
      e$$17 = error.Data2;
      fopt$$1 = error.Data0;
    } else if (error instanceof _ConstraintSolver.ErrorFromAddingTypeEquation) {
      if (error.Data4 instanceof _ConstraintSolver.ConstraintSolverTypesNotInEqualityRelation) {
        if (t2$0027 = error.Data4.Data2, (t2$$2 = error.Data3, (t1$0027 = error.Data4.Data1, (t1$$2 = error.Data2, (m$$8 = error.Data4.Data3, (g$$3 = error.Data0, (denv$$3 = error.Data1, (contextInfo$$1 = error.Data4.Data5, (0, _TastOps.typeEquiv)(g$$3, t1$$2, t1$0027) ? (0, _TastOps.typeEquiv)(g$$3, t2$$2, t2$0027) : false)))))))) {
          $target$$33 = 8;
          contextInfo$$4 = error.Data4.Data5;
          denv$$9 = error.Data1;
          g$$4 = error.Data0;
          m$$16 = error.Data4.Data3;
          t1$$11 = error.Data2;
          t1$0027$$1 = error.Data4.Data1;
          t2$$11 = error.Data3;
          t2$0027$$1 = error.Data4.Data2;
        } else {
          $target$$33 = 9;
        }
      } else {
        $target$$33 = 9;
      }
    } else {
      $target$$33 = 9;
    }

    switch ($target$$33) {
      case 0:
        {
          StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ConstraintSolverTupleDiffLengthsE())((0, _List.length)(tl1))((0, _List.length)(tl2)));

          if ((0, _range.range$$get_StartLine)(m$$9) !== (0, _range.range$$get_StartLine)(m2$$1)) {
            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(SeeAlsoE())((0, _range.stringOfRange)(m$$9)));
          }

          break;
        }

      case 1:
        {
          const patternInput$$6 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$4, t1$$3, t2$$3);
          StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ConstraintSolverInfiniteTypesE())(patternInput$$6[0])(patternInput$$6[1]));

          switch (contextInfo$$2.tag) {
            case 7:
              {
                StringBuilder$$Append$$Z721C83C5(os$$1, " " + (0, _FSComp.SR$$$returnUsedInsteadOfReturnBang)());
                break;
              }

            case 8:
              {
                StringBuilder$$Append$$Z721C83C5(os$$1, " " + (0, _FSComp.SR$$$yieldUsedInsteadOfYieldBang)());
                break;
              }

            default:
              {}
          }

          if ((0, _range.range$$get_StartLine)(m$$10) !== (0, _range.range$$get_StartLine)(m2$$2)) {
            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(SeeAlsoE())((0, _range.stringOfRange)(m$$10)));
          }

          break;
        }

      case 2:
        {
          StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ConstraintSolverMissingConstraintE())((0, _NicePrint.stringOfTyparConstraint)(denv$$5, tpr, tpc)));

          if ((0, _range.range$$get_StartLine)(m$$11) !== (0, _range.range$$get_StartLine)(m2$$3)) {
            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(SeeAlsoE())((0, _range.stringOfRange)(m$$11)));
          }

          break;
        }

      case 3:
        {
          const patternInput$$7 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$6, t1$$5, t2$$5);
          StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ConstraintSolverTypesNotInEqualityRelation1E())(patternInput$$7[0])(patternInput$$7[1]));

          if ((0, _range.range$$get_StartLine)(m$$12) !== (0, _range.range$$get_StartLine)(m2$$4)) {
            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(SeeAlsoE())((0, _range.stringOfRange)(m$$12)));
          }

          break;
        }

      case 4:
        {
          const patternInput$$8 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$7, t1$$7, t2$$7);
          var $target$$34, range$$1;

          if (contextInfo$$3.tag === 1) {
            if (range = contextInfo$$3.fields[0], (0, _Util.equals)(range, m$$13)) {
              $target$$34 = 0;
              range$$1 = contextInfo$$3.fields[0];
            } else {
              $target$$34 = 1;
            }
          } else {
            $target$$34 = 1;
          }

          switch ($target$$34) {
            case 0:
              {
                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$ifExpression$$Z384F8060)(patternInput$$8[0], patternInput$$8[1]));
                break;
              }

            case 1:
              {
                var $target$$35, isArray$$1, range$$3;

                if (contextInfo$$3.tag === 6) {
                  if (range$$2 = contextInfo$$3.fields[1], (isArray = contextInfo$$3.fields[0], (0, _Util.equals)(range$$2, m$$13))) {
                    $target$$35 = 0;
                    isArray$$1 = contextInfo$$3.fields[0];
                    range$$3 = contextInfo$$3.fields[1];
                  } else {
                    $target$$35 = 1;
                  }
                } else {
                  $target$$35 = 1;
                }

                switch ($target$$35) {
                  case 0:
                    {
                      if (isArray$$1) {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$arrayElementHasWrongType$$Z384F8060)(patternInput$$8[0], patternInput$$8[1]));
                      } else {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$listElementHasWrongType$$Z384F8060)(patternInput$$8[0], patternInput$$8[1]));
                      }

                      break;
                    }

                  case 1:
                    {
                      var $target$$36, range$$5;

                      if (contextInfo$$3.tag === 2) {
                        if (range$$4 = contextInfo$$3.fields[0], (0, _Util.equals)(range$$4, m$$13)) {
                          $target$$36 = 0;
                          range$$5 = contextInfo$$3.fields[0];
                        } else {
                          $target$$36 = 1;
                        }
                      } else {
                        $target$$36 = 1;
                      }

                      switch ($target$$36) {
                        case 0:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$missingElseBranch$$Z721C83C5)(patternInput$$8[1]));
                            break;
                          }

                        case 1:
                          {
                            var $target$$37, range$$7;

                            if (contextInfo$$3.tag === 3) {
                              if (range$$6 = contextInfo$$3.fields[0], (0, _Util.equals)(range$$6, m$$13)) {
                                $target$$37 = 0;
                                range$$7 = contextInfo$$3.fields[0];
                              } else {
                                $target$$37 = 1;
                              }
                            } else {
                              $target$$37 = 1;
                            }

                            switch ($target$$37) {
                              case 0:
                                {
                                  StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$elseBranchHasWrongType$$Z384F8060)(patternInput$$8[0], patternInput$$8[1]));
                                  break;
                                }

                              case 1:
                                {
                                  var $target$$38, range$$9;

                                  if (contextInfo$$3.tag === 11) {
                                    if (range$$8 = contextInfo$$3.fields[0], (0, _Util.equals)(range$$8, m$$13)) {
                                      $target$$38 = 0;
                                      range$$9 = contextInfo$$3.fields[0];
                                    } else {
                                      $target$$38 = 1;
                                    }
                                  } else {
                                    $target$$38 = 1;
                                  }

                                  switch ($target$$38) {
                                    case 0:
                                      {
                                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$followingPatternMatchClauseHasWrongType$$Z384F8060)(patternInput$$8[0], patternInput$$8[1]));
                                        break;
                                      }

                                    case 1:
                                      {
                                        var $target$$39, range$$11;

                                        if (contextInfo$$3.tag === 12) {
                                          if (range$$10 = contextInfo$$3.fields[0], (0, _Util.equals)(range$$10, m$$13)) {
                                            $target$$39 = 0;
                                            range$$11 = contextInfo$$3.fields[0];
                                          } else {
                                            $target$$39 = 1;
                                          }
                                        } else {
                                          $target$$39 = 1;
                                        }

                                        switch ($target$$39) {
                                          case 0:
                                            {
                                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$patternMatchGuardIsNotBool$$Z721C83C5)(patternInput$$8[1]));
                                              break;
                                            }

                                          case 1:
                                            {
                                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ConstraintSolverTypesNotInEqualityRelation2E())(patternInput$$8[0])(patternInput$$8[1]));
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

                break;
              }
          }

          if ((0, _range.range$$get_StartLine)(m$$13) !== (0, _range.range$$get_StartLine)(m2$$5)) {
            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(SeeAlsoE())((0, _range.stringOfRange)(m$$13)));
          }

          break;
        }

      case 5:
        {
          const patternInput$$9 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$8, t1$$9, t2$$9);
          StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ConstraintSolverTypesNotInSubsumptionRelationE())(patternInput$$9[1])(patternInput$$9[0])(patternInput$$9[2]));

          if ((0, _range.range$$get_StartLine)(m$$14) !== (0, _range.range$$get_StartLine)(m2$$6)) {
            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(SeeAlsoE())((0, _range.stringOfRange)(m2$$6)));
          }

          break;
        }

      case 6:
        {
          StringBuilder$$Append$$Z721C83C5(os$$1, msg);

          if ((0, _range.range$$get_StartLine)(m$$15) !== (0, _range.range$$get_StartLine)(m2$$7)) {
            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(SeeAlsoE())((0, _range.stringOfRange)(m2$$7)));
          }

          break;
        }

      case 7:
        {
          if (e$$17 instanceof _ConstraintSolver.ConstraintSolverError) {
            OutputExceptionR(os$$1, e$$17);
          }

          (0, _Seq.iterate)(function (arg20) {
            Printf$$$bprintf(os$$1)((0, _String.printf)(" %s"))(arg20);
          }, (0, _Option.defaultArg)(fopt$$1, [], function ($x$$4) {
            return [$x$$4];
          }));
          break;
        }

      case 8:
        {
          const patternInput$$10 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$9, t1$$11, t2$$11);
          var $target$$40, range$$13;

          if (contextInfo$$4.tag === 1) {
            if (range$$12 = contextInfo$$4.fields[0], (0, _Util.equals)(range$$12, m$$16)) {
              $target$$40 = 0;
              range$$13 = contextInfo$$4.fields[0];
            } else {
              $target$$40 = 1;
            }
          } else {
            $target$$40 = 1;
          }

          switch ($target$$40) {
            case 0:
              {
                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$ifExpression$$Z384F8060)(patternInput$$10[0], patternInput$$10[1]));
                break;
              }

            case 1:
              {
                var $target$$41, isArray$$3, range$$15;

                if (contextInfo$$4.tag === 6) {
                  if (range$$14 = contextInfo$$4.fields[1], (isArray$$2 = contextInfo$$4.fields[0], (0, _Util.equals)(range$$14, m$$16))) {
                    $target$$41 = 0;
                    isArray$$3 = contextInfo$$4.fields[0];
                    range$$15 = contextInfo$$4.fields[1];
                  } else {
                    $target$$41 = 1;
                  }
                } else {
                  $target$$41 = 1;
                }

                switch ($target$$41) {
                  case 0:
                    {
                      if (isArray$$3) {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$arrayElementHasWrongType$$Z384F8060)(patternInput$$10[0], patternInput$$10[1]));
                      } else {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$listElementHasWrongType$$Z384F8060)(patternInput$$10[0], patternInput$$10[1]));
                      }

                      break;
                    }

                  case 1:
                    {
                      var $target$$42, range$$17;

                      if (contextInfo$$4.tag === 2) {
                        if (range$$16 = contextInfo$$4.fields[0], (0, _Util.equals)(range$$16, m$$16)) {
                          $target$$42 = 0;
                          range$$17 = contextInfo$$4.fields[0];
                        } else {
                          $target$$42 = 1;
                        }
                      } else {
                        $target$$42 = 1;
                      }

                      switch ($target$$42) {
                        case 0:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$missingElseBranch$$Z721C83C5)(patternInput$$10[1]));
                            break;
                          }

                        case 1:
                          {
                            var $target$$43, range$$19;

                            if (contextInfo$$4.tag === 3) {
                              if (range$$18 = contextInfo$$4.fields[0], (0, _Util.equals)(range$$18, m$$16)) {
                                $target$$43 = 0;
                                range$$19 = contextInfo$$4.fields[0];
                              } else {
                                $target$$43 = 1;
                              }
                            } else {
                              $target$$43 = 1;
                            }

                            switch ($target$$43) {
                              case 0:
                                {
                                  StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$elseBranchHasWrongType$$Z384F8060)(patternInput$$10[0], patternInput$$10[1]));
                                  break;
                                }

                              case 1:
                                {
                                  var $target$$44, range$$21;

                                  if (contextInfo$$4.tag === 11) {
                                    if (range$$20 = contextInfo$$4.fields[0], (0, _Util.equals)(range$$20, m$$16)) {
                                      $target$$44 = 0;
                                      range$$21 = contextInfo$$4.fields[0];
                                    } else {
                                      $target$$44 = 1;
                                    }
                                  } else {
                                    $target$$44 = 1;
                                  }

                                  switch ($target$$44) {
                                    case 0:
                                      {
                                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$followingPatternMatchClauseHasWrongType$$Z384F8060)(patternInput$$10[0], patternInput$$10[1]));
                                        break;
                                      }

                                    case 1:
                                      {
                                        var $target$$45, range$$23;

                                        if (contextInfo$$4.tag === 12) {
                                          if (range$$22 = contextInfo$$4.fields[0], (0, _Util.equals)(range$$22, m$$16)) {
                                            $target$$45 = 0;
                                            range$$23 = contextInfo$$4.fields[0];
                                          } else {
                                            $target$$45 = 1;
                                          }
                                        } else {
                                          $target$$45 = 1;
                                        }

                                        switch ($target$$45) {
                                          case 0:
                                            {
                                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$patternMatchGuardIsNotBool$$Z721C83C5)(patternInput$$10[1]));
                                              break;
                                            }

                                          case 1:
                                            {
                                              if (contextInfo$$4.tag === 5) {
                                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ErrorFromAddingTypeEquation1E())(patternInput$$10[1])(patternInput$$10[0])(patternInput$$10[2]));
                                                StringBuilder$$Append$$Z721C83C5(os$$1, "\n" + (0, _FSComp.SR$$$commaInsteadOfSemicolonInRecord)());
                                              } else if (patternInput$$10[1] === "bool" ? (0, _String.endsWith)(patternInput$$10[0], " ref", 4) : false) {
                                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ErrorFromAddingTypeEquation1E())(patternInput$$10[1])(patternInput$$10[0])(patternInput$$10[2]));
                                                StringBuilder$$Append$$Z721C83C5(os$$1, "\n" + (0, _FSComp.SR$$$derefInsteadOfNot)());
                                              } else {
                                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ErrorFromAddingTypeEquation1E())(patternInput$$10[1])(patternInput$$10[0])(patternInput$$10[2]));
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

                      break;
                    }
                }

                break;
              }
          }

          break;
        }

      case 9:
        {
          var $target$$46, contextInfo$$6, e$$19;

          if (error instanceof _ConstraintSolver.ErrorFromAddingTypeEquation) {
            if (error.Data4 instanceof _ConstraintSolver.ConstraintSolverTypesNotInEqualityRelation) {
              if (e$$18 = error.Data4, (contextInfo$$5 = error.Data4.Data5, contextInfo$$5.tag === 0 ? false : true)) {
                $target$$46 = 0;
                contextInfo$$6 = error.Data4.Data5;
                e$$19 = error.Data4;
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
                OutputExceptionR(os$$1, e$$19);
                break;
              }

            case 1:
              {
                var $target$$47, e$$20, denv$$10, e$$21, g$$5, t1$$13, t2$$13, defaultType$$1, denv$$11, e$$22, contextInfo$$7, denv$$12, e$$23, g$$6, t1$$15, t2$$15, e$$24, mtext, denv$$13, fromTy, toTy, minfo, originalError, nm, msg$$1, denv$$14, ity, name, marg, d, tcref, k1, k2, nm$$1, nm1, nm2, k, s$$2, id$$1, k$$1, suggestionsF, ccuName, f$$1, s$$3, smr, fref1, fref2, id$$2, denv$$15, id$$3, ty1, ty2, denv$$16, ty1$$1, ty2$$1, denv$$17, ty1$$2, ty2$$2, denv$$18, ty1$$3, ty2$$3, denv$$19, ty1$$4, ty2$$4, denv$$20, tpnmOpt, ty, ty1$$5, typarRange, ctxt, denv$$21, ty$$2, denv$$22, ty$$4, msg$$2, amap, denv$$23, g$$7, impl, m$$17, minfoVirtOpt, n1, n2, denv$$24, f$$2, implVal, mref, sigVal, denv$$25, f$$3, v1, v2, denv$$26, f$$4, v1$$1, v2$$1, denv$$27, f$$5, v1$$2, v2$$2, k$$2, mref$$1, name$$2, s$$5, denv$$28, ty$$6, denv$$29, ty$$8, denv$$30, ty$$10, bindingName, denv$$31, propertyName, ty$$12, bindingName$$1, denv$$32, isAlreadyMutable, ty$$14, v, path, bindnm, bvirt1, bvirt2, denv$$33, s$$6, idText, s$$7, suggestionF, s$$8, exn$$1, s$$9;

                if (error instanceof _ConstraintSolver.ErrorFromAddingTypeEquation) {
                  if (error.Data4 instanceof _ConstraintSolver.ConstraintSolverTypesNotInSubsumptionRelation) {
                    $target$$47 = 0;
                    e$$20 = error.Data4;
                  } else if (error.Data4 instanceof _ConstraintSolver.ConstraintSolverError) {
                    $target$$47 = 0;
                    e$$20 = error.Data4;
                  } else {
                    $target$$47 = 1;
                    denv$$10 = error.Data1;
                    e$$21 = error.Data4;
                    g$$5 = error.Data0;
                    t1$$13 = error.Data2;
                    t2$$13 = error.Data3;
                  }
                } else if (error instanceof _ConstraintSolver.ErrorFromApplyingDefault) {
                  $target$$47 = 2;
                  defaultType$$1 = error.Data3;
                  denv$$11 = error.Data1;
                  e$$22 = error.Data4;
                } else if (error instanceof _ConstraintSolver.ErrorsFromAddingSubsumptionConstraint) {
                  $target$$47 = 3;
                  contextInfo$$7 = error.Data5;
                  denv$$12 = error.Data1;
                  e$$23 = error.Data4;
                  g$$6 = error.Data0;
                  t1$$15 = error.Data2;
                  t2$$15 = error.Data3;
                } else if (error instanceof _NameResolution.UpperCaseIdentifierInPattern) {
                  $target$$47 = 4;
                } else if (error instanceof _TypeChecker.NotUpperCaseConstructor) {
                  $target$$47 = 5;
                } else if (error instanceof _ConstraintSolver.ErrorFromAddingConstraint) {
                  $target$$47 = 6;
                  e$$24 = error.Data1;
                } else if (error instanceof _ConstraintSolver.UnresolvedOverloading) {
                  $target$$47 = 7;
                  mtext = error.Data2;
                } else if (error instanceof _ConstraintSolver.UnresolvedConversionOperator) {
                  $target$$47 = 8;
                  denv$$13 = error.Data0;
                  fromTy = error.Data1;
                  toTy = error.Data2;
                } else if (error instanceof _ConstraintSolver.PossibleOverload) {
                  $target$$47 = 9;
                  minfo = error.Data1;
                  originalError = error.Data2;
                } else if (error instanceof _TypeChecker.FunctionExpected) {
                  $target$$47 = 10;
                } else if (error instanceof _TypeChecker.BakedInMemberConstraintName) {
                  $target$$47 = 11;
                  nm = error.Data0;
                } else if (error instanceof _TypeChecker.StandardOperatorRedefinitionWarning) {
                  $target$$47 = 12;
                  msg$$1 = error.Data0;
                } else if (error instanceof _infos.BadEventTransformation) {
                  $target$$47 = 13;
                } else if (error instanceof _TypeChecker.ParameterlessStructCtor) {
                  $target$$47 = 14;
                } else if (error instanceof _SignatureConformance.InterfaceNotRevealed) {
                  $target$$47 = 15;
                  denv$$14 = error.Data0;
                  ity = error.Data1;
                } else if (error instanceof _TypeChecker.NotAFunctionButIndexer) {
                  $target$$47 = 16;
                  name = error.Data2;
                } else if (error instanceof _TypeChecker.NotAFunction) {
                  $target$$47 = 17;
                  marg = error.Data3;
                } else if (error instanceof _TypeChecker.TyconBadArgs) {
                  $target$$47 = 18;
                  d = error.Data2;
                  tcref = error.Data1;
                } else if (error instanceof _NameResolution.IndeterminateType) {
                  $target$$47 = 19;
                } else if (error instanceof _tast.NameClash) {
                  $target$$47 = 20;
                  k1 = error.Data1;
                  k2 = error.Data4;
                  nm$$1 = error.Data0;
                  nm1 = error.Data2;
                  nm2 = error.Data5;
                } else if (error instanceof _tast.Duplicate) {
                  $target$$47 = 21;
                  k = error.Data0;
                  s$$2 = error.Data1;
                } else if (error instanceof _tast.UndefinedName) {
                  $target$$47 = 22;
                  id$$1 = error.Data2;
                  k$$1 = error.Data1;
                  suggestionsF = error.Data3;
                } else if (error instanceof _tast.InternalUndefinedItemRef) {
                  $target$$47 = 23;
                  ccuName = error.Data2;
                  f$$1 = error.Data0;
                  s$$3 = error.Data3;
                  smr = error.Data1;
                } else if (error instanceof _MethodCalls.FieldNotMutable) {
                  $target$$47 = 24;
                } else if (error instanceof _TypeChecker.FieldsFromDifferentTypes) {
                  $target$$47 = 25;
                  fref1 = error.Data1;
                  fref2 = error.Data2;
                } else if (error instanceof _TypeChecker.VarBoundTwice) {
                  $target$$47 = 26;
                  id$$2 = error.Data0;
                } else if (error instanceof _TypeChecker.Recursion) {
                  $target$$47 = 27;
                  denv$$15 = error.Data0;
                  id$$3 = error.Data1;
                  ty1 = error.Data2;
                  ty2 = error.Data3;
                } else if (error instanceof _TypeChecker.InvalidRuntimeCoercion) {
                  $target$$47 = 28;
                  denv$$16 = error.Data0;
                  ty1$$1 = error.Data1;
                  ty2$$1 = error.Data2;
                } else if (error instanceof _TypeChecker.IndeterminateRuntimeCoercion) {
                  $target$$47 = 29;
                  denv$$17 = error.Data0;
                  ty1$$2 = error.Data1;
                  ty2$$2 = error.Data2;
                } else if (error instanceof _TypeChecker.IndeterminateStaticCoercion) {
                  $target$$47 = 30;
                  denv$$18 = error.Data0;
                  ty1$$3 = error.Data1;
                  ty2$$3 = error.Data2;
                } else if (error instanceof _TypeChecker.StaticCoercionShouldUseBox) {
                  $target$$47 = 31;
                  denv$$19 = error.Data0;
                  ty1$$4 = error.Data1;
                  ty2$$4 = error.Data2;
                } else if (error instanceof _MethodOverrides.TypeIsImplicitlyAbstract) {
                  $target$$47 = 32;
                } else if (error instanceof _ConstraintSolver.NonRigidTypar) {
                  $target$$47 = 33;
                  denv$$20 = error.Data0;
                  tpnmOpt = error.Data1;
                  ty = error.Data4;
                  ty1$$5 = error.Data3;
                  typarRange = error.Data2;
                } else if (error instanceof _ast.SyntaxError) {
                  $target$$47 = 34;
                  ctxt = error.Data0;
                } else if (error instanceof _TypeChecker.RuntimeCoercionSourceSealed) {
                  $target$$47 = 35;
                  denv$$21 = error.Data0;
                  ty$$2 = error.Data1;
                } else if (error instanceof _TypeChecker.CoercionTargetSealed) {
                  $target$$47 = 36;
                  denv$$22 = error.Data0;
                  ty$$4 = error.Data1;
                } else if (error instanceof _TypeChecker.UpcastUnnecessary) {
                  $target$$47 = 37;
                } else if (error instanceof _TypeChecker.TypeTestUnnecessary) {
                  $target$$47 = 38;
                } else if (error instanceof _QuotationTranslator.IgnoringPartOfQuotedTermWarning) {
                  $target$$47 = 39;
                  msg$$2 = error.Data0;
                } else if (error instanceof _MethodOverrides.OverrideDoesntOverride) {
                  $target$$47 = 40;
                  amap = error.Data4;
                  denv$$23 = error.Data0;
                  g$$7 = error.Data3;
                  impl = error.Data1;
                  m$$17 = error.Data5;
                  minfoVirtOpt = error.Data2;
                } else if (error instanceof _TypeChecker.UnionCaseWrongArguments) {
                  $target$$47 = 41;
                  n1 = error.Data1;
                  n2 = error.Data2;
                } else if (error instanceof _TypeChecker.UnionPatternsBindDifferentNames) {
                  $target$$47 = 42;
                } else if (error instanceof _SignatureConformance.ValueNotContained) {
                  $target$$47 = 43;
                  denv$$24 = error.Data0;
                  f$$2 = error.Data4;
                  implVal = error.Data2;
                  mref = error.Data1;
                  sigVal = error.Data3;
                } else if (error instanceof _SignatureConformance.ConstrNotContained) {
                  $target$$47 = 44;
                  denv$$25 = error.Data0;
                  f$$3 = error.Data3;
                  v1 = error.Data1;
                  v2 = error.Data2;
                } else if (error instanceof _SignatureConformance.ExnconstrNotContained) {
                  $target$$47 = 45;
                  denv$$26 = error.Data0;
                  f$$4 = error.Data3;
                  v1$$1 = error.Data1;
                  v2$$1 = error.Data2;
                } else if (error instanceof _SignatureConformance.FieldNotContained) {
                  $target$$47 = 46;
                  denv$$27 = error.Data0;
                  f$$5 = error.Data3;
                  v1$$2 = error.Data1;
                  v2$$2 = error.Data2;
                } else if (error instanceof _SignatureConformance.RequiredButNotSpecified) {
                  $target$$47 = 47;
                  k$$2 = error.Data2;
                  mref$$1 = error.Data1;
                  name$$2 = error.Data3;
                } else if (error instanceof _TypeChecker.UseOfAddressOfOperator) {
                  $target$$47 = 48;
                } else if (error instanceof _TastOps.DefensiveCopyWarning) {
                  $target$$47 = 49;
                  s$$5 = error.Data0;
                } else if (error instanceof _TypeChecker.DeprecatedThreadStaticBindingWarning) {
                  $target$$47 = 50;
                } else if (error instanceof _TypeChecker.FunctionValueUnexpected) {
                  $target$$47 = 51;
                  denv$$28 = error.Data0;
                  ty$$6 = error.Data1;
                } else if (error instanceof _TypeChecker.UnitTypeExpected) {
                  $target$$47 = 52;
                  denv$$29 = error.Data0;
                  ty$$8 = error.Data1;
                } else if (error instanceof _TypeChecker.UnitTypeExpectedWithEquality) {
                  $target$$47 = 53;
                  denv$$30 = error.Data0;
                  ty$$10 = error.Data1;
                } else if (error instanceof _TypeChecker.UnitTypeExpectedWithPossiblePropertySetter) {
                  $target$$47 = 54;
                  bindingName = error.Data2;
                  denv$$31 = error.Data0;
                  propertyName = error.Data3;
                  ty$$12 = error.Data1;
                } else if (error instanceof _TypeChecker.UnitTypeExpectedWithPossibleAssignment) {
                  $target$$47 = 55;
                  bindingName$$1 = error.Data3;
                  denv$$32 = error.Data0;
                  isAlreadyMutable = error.Data2;
                  ty$$14 = error.Data1;
                } else if (error instanceof _TypeChecker.RecursiveUseCheckedAtRuntime) {
                  $target$$47 = 56;
                } else if (error instanceof _TypeChecker.LetRecUnsound) {
                  if (error.Data1.tail != null) {
                    if (error.Data1.tail.tail == null) {
                      $target$$47 = 57;
                      v = error.Data1.head;
                    } else {
                      $target$$47 = 58;
                      path = error.Data1;
                    }
                  } else {
                    $target$$47 = 58;
                    path = error.Data1;
                  }
                } else if (error instanceof _TypeChecker.LetRecEvaluatedOutOfOrder) {
                  $target$$47 = 59;
                } else if (error instanceof _TypeChecker.LetRecCheckedAtRuntime) {
                  $target$$47 = 60;
                } else if (error instanceof _TypeChecker.SelfRefObjCtor) {
                  if (error.Data0) {
                    $target$$47 = 62;
                  } else {
                    $target$$47 = 61;
                  }
                } else if (error instanceof _TypeChecker.VirtualAugmentationOnNullValuedType) {
                  $target$$47 = 63;
                } else if (error instanceof _TypeChecker.NonVirtualAugmentationOnNullValuedType) {
                  $target$$47 = 64;
                } else if (error instanceof _TypeChecker.NonUniqueInferredAbstractSlot) {
                  $target$$47 = 65;
                  bindnm = error.Data2;
                  bvirt1 = error.Data3;
                  bvirt2 = error.Data4;
                  denv$$33 = error.Data1;
                } else if (error instanceof _ErrorLogger.Error$) {
                  $target$$47 = 66;
                  s$$6 = error.Data0[1];
                } else if (error instanceof _ErrorLogger.ErrorWithSuggestions) {
                  $target$$47 = 67;
                  idText = error.Data2;
                  s$$7 = error.Data0[1];
                  suggestionF = error.Data3;
                } else if (error instanceof _ErrorLogger.NumberedError) {
                  $target$$47 = 68;
                  s$$8 = error.Data0[1];
                } else if (error instanceof _ErrorLogger.InternalError) {
                  $target$$47 = 69;
                  exn$$1 = error;
                  s$$9 = error.msg;
                } else {
                  const activePatternResult54633 = $007CInvalidArgument$007C_$007C(error);

                  if (activePatternResult54633 != null) {
                    $target$$47 = 69;
                    exn$$1 = error;
                    s$$9 = activePatternResult54633;
                  } else {
                    const activePatternResult54634 = (0, _FSharp.Operators$$$FailurePattern)(error);

                    if (activePatternResult54634 != null) {
                      $target$$47 = 69;
                      exn$$1 = error;
                      s$$9 = activePatternResult54634;
                    } else {
                      $target$$47 = 70;
                    }
                  }
                }

                switch ($target$$47) {
                  case 0:
                    {
                      OutputExceptionR(os$$1, e$$20);
                      break;
                    }

                  case 1:
                    {
                      if (!(0, _TastOps.typeEquiv)(g$$5, t1$$13, t2$$13)) {
                        const patternInput$$11 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$10, t1$$13, t2$$13);

                        if (patternInput$$11[0] !== patternInput$$11[1] + patternInput$$11[2]) {
                          StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ErrorFromAddingTypeEquation2E())(patternInput$$11[0])(patternInput$$11[1])(patternInput$$11[2]));
                        }
                      }

                      OutputExceptionR(os$$1, e$$21);
                      break;
                    }

                  case 2:
                    {
                      const defaultType$$2 = (0, _NicePrint.minimalStringOfType)(denv$$11, defaultType$$1);
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ErrorFromApplyingDefault1E())(defaultType$$2));
                      OutputExceptionR(os$$1, e$$22);
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ErrorFromApplyingDefault2E()));
                      break;
                    }

                  case 3:
                    {
                      if (contextInfo$$7.tag === 10) {
                        const isOperator = contextInfo$$7.fields[0];
                        const patternInput$$12 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$12, t1$$15, t2$$15);

                        if (isOperator) {
                          StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$considerUpcastOperator$$Z384F8060)(patternInput$$12[0], patternInput$$12[1])[1]);
                        } else {
                          StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$considerUpcast$$Z384F8060)(patternInput$$12[0], patternInput$$12[1])[1]);
                        }
                      } else if (!(0, _TastOps.typeEquiv)(g$$6, t1$$15, t2$$15)) {
                        const patternInput$$13 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$12, t1$$15, t2$$15);

                        if (patternInput$$13[0] !== patternInput$$13[1] + patternInput$$13[2]) {
                          StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ErrorsFromAddingSubsumptionConstraintE())(patternInput$$13[1])(patternInput$$13[0])(patternInput$$13[2]));
                        } else {
                          OutputExceptionR(os$$1, e$$23);
                        }
                      } else {
                        OutputExceptionR(os$$1, e$$23);
                      }

                      break;
                    }

                  case 4:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UpperCaseIdentifierInPatternE()));
                      break;
                    }

                  case 5:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NotUpperCaseConstructorE()));
                      break;
                    }

                  case 6:
                    {
                      OutputExceptionR(os$$1, e$$24);
                      break;
                    }

                  case 7:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, mtext);
                      break;
                    }

                  case 8:
                    {
                      const patternInput$$14 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$13, fromTy, toTy);
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$csTypeDoesNotSupportConversion$$Z384F8060)(patternInput$$14[0], patternInput$$14[1]));
                      break;
                    }

                  case 9:
                    {
                      const buf = StringBuilder$$$$002Ector();
                      OutputExceptionR(buf, originalError);
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(PossibleOverloadE())(minfo)((0, _Util.toString)(buf)));
                      break;
                    }

                  case 10:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(FunctionExpectedE()));
                      break;
                    }

                  case 11:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(BakedInMemberConstraintNameE())(nm));
                      break;
                    }

                  case 12:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, msg$$1);
                      break;
                    }

                  case 13:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(BadEventTransformationE()));
                      break;
                    }

                  case 14:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ParameterlessStructCtorE()));
                      break;
                    }

                  case 15:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(InterfaceNotRevealedE())((0, _NicePrint.minimalStringOfType)(denv$$14, ity)));
                      break;
                    }

                  case 16:
                    {
                      if (name != null) {
                        const name$$1 = name;
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$notAFunctionButMaybeIndexerWithName$$Z721C83C5)(name$$1));
                      } else {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$notAFunctionButMaybeIndexer)());
                      }

                      break;
                    }

                  case 17:
                    {
                      if ((0, _range.range$$get_StartColumn)(marg) === 0) {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$notAFunctionButMaybeDeclaration)());
                      } else {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$notAFunction)());
                      }

                      break;
                    }

                  case 18:
                    {
                      const exp = (0, _List.length)((0, _tast.EntityRef$$get_TyparsNoRange)(tcref)) | 0;

                      if (exp === 0) {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$buildUnexpectedTypeArgs$$Z18115A39)((0, _TastOps.fullDisplayTextOfTyconRef)(tcref), d));
                      } else {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(TyconBadArgsE())((0, _TastOps.fullDisplayTextOfTyconRef)(tcref))(exp)(d));
                      }

                      break;
                    }

                  case 19:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(IndeterminateTypeE()));
                      break;
                    }

                  case 20:
                    {
                      if ((nm$$1 === nm1 ? nm1 === nm2 : false) ? k1 === k2 : false) {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NameClash1E())(k1)(nm1));
                      } else {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NameClash2E())(k1)(nm1)(nm$$1)(k2)(nm2));
                      }

                      break;
                    }

                  case 21:
                    {
                      if (k === "member") {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(Duplicate1E())((0, _PrettyNaming.DecompileOpName)(s$$2)));
                      } else {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(Duplicate2E())(k)((0, _PrettyNaming.DecompileOpName)(s$$2)));
                      }

                      break;
                    }

                  case 22:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, k$$1((0, _PrettyNaming.DecompileOpName)((0, _ast.Ident$$get_idText)(id$$1))));
                      const filtered = (0, _ErrorResolutionHints.FilterPredictions)((0, _ast.Ident$$get_idText)(id$$1), suggestionsF);

                      if (!(filtered.tail == null)) {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _ErrorResolutionHints.FormatPredictions)(_PrettyNaming.DecompileOpName, filtered));
                      }

                      break;
                    }

                  case 23:
                    {
                      const patternInput$$15 = f$$1([smr, ccuName, s$$3]);
                      StringBuilder$$Append$$Z721C83C5(os$$1, patternInput$$15[1]);
                      break;
                    }

                  case 24:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(FieldNotMutableE()));
                      break;
                    }

                  case 25:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(FieldsFromDifferentTypesE())((0, _tast.RecdFieldRef$$get_FieldName)(fref1))((0, _tast.RecdFieldRef$$get_FieldName)(fref2)));
                      break;
                    }

                  case 26:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(VarBoundTwiceE())((0, _PrettyNaming.DecompileOpName)((0, _ast.Ident$$get_idText)(id$$2))));
                      break;
                    }

                  case 27:
                    {
                      const patternInput$$16 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$15, ty1, ty2);
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(RecursionE())((0, _PrettyNaming.DecompileOpName)((0, _ast.Ident$$get_idText)(id$$3)))(patternInput$$16[0])(patternInput$$16[1])(patternInput$$16[2]));
                      break;
                    }

                  case 28:
                    {
                      const patternInput$$17 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$16, ty1$$1, ty2$$1);
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(InvalidRuntimeCoercionE())(patternInput$$17[0])(patternInput$$17[1])(patternInput$$17[2]));
                      break;
                    }

                  case 29:
                    {
                      const patternInput$$18 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$17, ty1$$2, ty2$$2);
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(IndeterminateRuntimeCoercionE())(patternInput$$18[0])(patternInput$$18[1]));
                      break;
                    }

                  case 30:
                    {
                      const patternInput$$19 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$18, ty1$$3, ty2$$3);
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(IndeterminateStaticCoercionE())(patternInput$$19[0])(patternInput$$19[1]));
                      break;
                    }

                  case 31:
                    {
                      const patternInput$$20 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$19, ty1$$4, ty2$$4);
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(StaticCoercionShouldUseBoxE())(patternInput$$20[0])(patternInput$$20[1]));
                      break;
                    }

                  case 32:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(TypeIsImplicitlyAbstractE()));
                      break;
                    }

                  case 33:
                    {
                      const patternInput$$21 = (0, _TastOps.PrettyTypes$$$PrettifyTypePair)(denv$$20.g, ty1$$5, ty);
                      const ty1$$6 = patternInput$$21[0][0];
                      const ty$$1 = patternInput$$21[0][1];

                      if (tpnmOpt != null) {
                        const tpnm = tpnmOpt;

                        if (ty1$$6.tag === 6) {
                          StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NonRigidTypar2E())(tpnm)((0, _NicePrint.stringOfTy)(denv$$20, ty$$1)));
                        } else {
                          StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NonRigidTypar3E())(tpnm)((0, _NicePrint.stringOfTy)(denv$$20, ty$$1)));
                        }
                      } else {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NonRigidTypar1E())((0, _range.stringOfRange)(typarRange))((0, _NicePrint.stringOfTy)(denv$$20, ty$$1)));
                      }

                      break;
                    }

                  case 34:
                    {
                      const ctxt$$1 = ctxt;

                      const $007CEndOfStructuredConstructToken$007C_$007C = function $007CEndOfStructuredConstructToken$007C_$007C(token) {
                        var $target$$48;

                        switch (token.tag) {
                          case 19:
                          case 21:
                          case 20:
                          case 18:
                          case 15:
                          case 16:
                          case 17:
                            $target$$48 = 0;
                            break;

                          default:
                            $target$$48 = 1;
                        }

                        switch ($target$$48) {
                          case 0:
                            {
                              return (0, _Option.some)(null);
                            }

                          case 1:
                            {
                              return null;
                            }
                        }
                      };

                      const tokenIdToText = function tokenIdToText(tid) {
                        var $target$$49;

                        if (tid.tag === 190) {
                          $target$$49 = 0;
                        } else if (tid.tag === 164) {
                          $target$$49 = 1;
                        } else if (tid.tag === 179) {
                          $target$$49 = 1;
                        } else if (tid.tag === 174) {
                          $target$$49 = 1;
                        } else if (tid.tag === 178) {
                          $target$$49 = 1;
                        } else if (tid.tag === 173) {
                          $target$$49 = 1;
                        } else if (tid.tag === 176) {
                          $target$$49 = 1;
                        } else if (tid.tag === 172) {
                          $target$$49 = 1;
                        } else if (tid.tag === 175) {
                          $target$$49 = 1;
                        } else if (tid.tag === 171) {
                          $target$$49 = 1;
                        } else if (tid.tag === 170) {
                          $target$$49 = 1;
                        } else if (tid.tag === 169) {
                          $target$$49 = 1;
                        } else if (tid.tag === 168) {
                          $target$$49 = 2;
                        } else if (tid.tag === 167) {
                          $target$$49 = 2;
                        } else if (tid.tag === 165) {
                          $target$$49 = 3;
                        } else if (tid.tag === 166) {
                          $target$$49 = 4;
                        } else if (tid.tag === 153) {
                          $target$$49 = 5;
                        } else if (tid.tag === 100) {
                          $target$$49 = 6;
                        } else if (tid.tag === 63) {
                          $target$$49 = 7;
                        } else if (tid.tag === 189) {
                          $target$$49 = 8;
                        } else if (tid.tag === 188) {
                          $target$$49 = 9;
                        } else if (tid.tag === 80) {
                          $target$$49 = 10;
                        } else if (tid.tag === 79) {
                          $target$$49 = 11;
                        } else if (tid.tag === 157) {
                          $target$$49 = 12;
                        } else if (tid.tag === 187) {
                          $target$$49 = 13;
                        } else if (tid.tag === 186) {
                          $target$$49 = 14;
                        } else if (tid.tag === 182) {
                          $target$$49 = 15;
                        } else if (tid.tag === 185) {
                          $target$$49 = 16;
                        } else if (tid.tag === 81) {
                          $target$$49 = 17;
                        } else if (tid.tag === 184) {
                          $target$$49 = 18;
                        } else if (tid.tag === 183) {
                          $target$$49 = 19;
                        } else if (tid.tag === 89) {
                          $target$$49 = 20;
                        } else if (tid.tag === 90) {
                          $target$$49 = 21;
                        } else if (tid.tag === 144) {
                          $target$$49 = 22;
                        } else if (tid.tag === 159) {
                          $target$$49 = 23;
                        } else if (tid.tag === 160) {
                          $target$$49 = 24;
                        } else if (tid.tag === 75) {
                          $target$$49 = 25;
                        } else if (tid.tag === 76) {
                          $target$$49 = 26;
                        } else if (tid.tag === 82) {
                          $target$$49 = 27;
                        } else if (tid.tag === 177) {
                          $target$$49 = 28;
                        } else if (tid.tag === 143) {
                          $target$$49 = 29;
                        } else if (tid.tag === 91) {
                          $target$$49 = 30;
                        } else if (tid.tag === 96) {
                          $target$$49 = 31;
                        } else if (tid.tag === 33) {
                          $target$$49 = 32;
                        } else if (tid.tag === 78) {
                          $target$$49 = 33;
                        } else if (tid.tag === 83) {
                          $target$$49 = 34;
                        } else if (tid.tag === 69) {
                          $target$$49 = 35;
                        } else if (tid.tag === 70) {
                          $target$$49 = 36;
                        } else if (tid.tag === 99) {
                          $target$$49 = 37;
                        } else if (tid.tag === 62) {
                          $target$$49 = 38;
                        } else if (tid.tag === 181) {
                          $target$$49 = 39;
                        } else if (tid.tag === 180) {
                          $target$$49 = 40;
                        } else if (tid.tag === 97) {
                          $target$$49 = 41;
                        } else if (tid.tag === 77) {
                          $target$$49 = 42;
                        } else if (tid.tag === 57) {
                          $target$$49 = 43;
                        } else if (tid.tag === 88) {
                          $target$$49 = 44;
                        } else if (tid.tag === 67) {
                          $target$$49 = 45;
                        } else if (tid.tag === 84) {
                          $target$$49 = 46;
                        } else if (tid.tag === 68) {
                          $target$$49 = 47;
                        } else if (tid.tag === 92) {
                          $target$$49 = 48;
                        } else if (tid.tag === 93) {
                          $target$$49 = 49;
                        } else if (tid.tag === 94) {
                          $target$$49 = 49;
                        } else if (tid.tag === 95) {
                          $target$$49 = 49;
                        } else if (tid.tag === 154) {
                          $target$$49 = 50;
                        } else if (tid.tag === 71) {
                          $target$$49 = 51;
                        } else if (tid.tag === 72) {
                          $target$$49 = 52;
                        } else if (tid.tag === 73) {
                          $target$$49 = 53;
                        } else if (tid.tag === 74) {
                          $target$$49 = 54;
                        } else if (tid.tag === 64) {
                          $target$$49 = 55;
                        } else if (tid.tag === 65) {
                          $target$$49 = 56;
                        } else if (tid.tag === 66) {
                          $target$$49 = 57;
                        } else if (tid.tag === 54) {
                          $target$$49 = 58;
                        } else if (tid.tag === 156) {
                          $target$$49 = 59;
                        } else if (tid.tag === 155) {
                          $target$$49 = 59;
                        } else if (tid.tag === 58) {
                          $target$$49 = 60;
                        } else if (tid.tag === 59) {
                          $target$$49 = 61;
                        } else if (tid.tag === 60) {
                          $target$$49 = 61;
                        } else if (tid.tag === 61) {
                          $target$$49 = 61;
                        } else if (tid.tag === 42) {
                          $target$$49 = 62;
                        } else if (tid.tag === 43) {
                          $target$$49 = 63;
                        } else if (tid.tag === 44) {
                          $target$$49 = 64;
                        } else if (tid.tag === 152) {
                          $target$$49 = 65;
                        } else if (tid.tag === 112) {
                          $target$$49 = 66;
                        } else if (tid.tag === 151) {
                          $target$$49 = 67;
                        } else if (tid.tag === 53) {
                          $target$$49 = 68;
                        } else if (tid.tag === 52) {
                          $target$$49 = 69;
                        } else if (tid.tag === 51) {
                          $target$$49 = 70;
                        } else if (tid.tag === 50) {
                          $target$$49 = 71;
                        } else if (tid.tag === 49) {
                          $target$$49 = 72;
                        } else if (tid.tag === 48) {
                          $target$$49 = 73;
                        } else if (tid.tag === 47) {
                          $target$$49 = 74;
                        } else if (tid.tag === 46) {
                          $target$$49 = 75;
                        } else if (tid.tag === 150) {
                          $target$$49 = 76;
                        } else if (tid.tag === 22) {
                          $target$$49 = 77;
                        } else if ($007CEndOfStructuredConstructToken$007C_$007C(tid) != null) {
                          $target$$49 = 78;
                        } else {
                          $target$$49 = 79;
                        }

                        switch ($target$$49) {
                          case 0:
                            {
                              return getErrorString("Parser.TOKEN.IDENT");
                            }

                          case 1:
                            {
                              return getErrorString("Parser.TOKEN.INT");
                            }

                          case 2:
                            {
                              return getErrorString("Parser.TOKEN.FLOAT");
                            }

                          case 3:
                            {
                              return getErrorString("Parser.TOKEN.DECIMAL");
                            }

                          case 4:
                            {
                              return getErrorString("Parser.TOKEN.CHAR");
                            }

                          case 5:
                            {
                              return getErrorString("Parser.TOKEN.BASE");
                            }

                          case 6:
                            {
                              return getErrorString("Parser.TOKEN.LPAREN.STAR.RPAREN");
                            }

                          case 7:
                            {
                              return getErrorString("Parser.TOKEN.DOLLAR");
                            }

                          case 8:
                            {
                              return getErrorString("Parser.TOKEN.INFIX.STAR.STAR.OP");
                            }

                          case 9:
                            {
                              return getErrorString("Parser.TOKEN.INFIX.COMPARE.OP");
                            }

                          case 10:
                            {
                              return getErrorString("Parser.TOKEN.COLON.GREATER");
                            }

                          case 11:
                            {
                              return getErrorString("Parser.TOKEN.COLON.COLON");
                            }

                          case 12:
                            {
                              return getErrorString("Parser.TOKEN.PERCENT.OP");
                            }

                          case 13:
                            {
                              return getErrorString("Parser.TOKEN.INFIX.AT.HAT.OP");
                            }

                          case 14:
                            {
                              return getErrorString("Parser.TOKEN.INFIX.BAR.OP");
                            }

                          case 15:
                            {
                              return getErrorString("Parser.TOKEN.PLUS.MINUS.OP");
                            }

                          case 16:
                            {
                              return getErrorString("Parser.TOKEN.PREFIX.OP");
                            }

                          case 17:
                            {
                              return getErrorString("Parser.TOKEN.COLON.QMARK.GREATER");
                            }

                          case 18:
                            {
                              return getErrorString("Parser.TOKEN.INFIX.STAR.DIV.MOD.OP");
                            }

                          case 19:
                            {
                              return getErrorString("Parser.TOKEN.INFIX.AMP.OP");
                            }

                          case 20:
                            {
                              return getErrorString("Parser.TOKEN.AMP");
                            }

                          case 21:
                            {
                              return getErrorString("Parser.TOKEN.AMP.AMP");
                            }

                          case 22:
                            {
                              return getErrorString("Parser.TOKEN.BAR.BAR");
                            }

                          case 23:
                            {
                              return getErrorString("Parser.TOKEN.LESS");
                            }

                          case 24:
                            {
                              return getErrorString("Parser.TOKEN.GREATER");
                            }

                          case 25:
                            {
                              return getErrorString("Parser.TOKEN.QMARK");
                            }

                          case 26:
                            {
                              return getErrorString("Parser.TOKEN.QMARK.QMARK");
                            }

                          case 27:
                            {
                              return getErrorString("Parser.TOKEN.COLON.QMARK");
                            }

                          case 28:
                            {
                              return getErrorString("Parser.TOKEN.INT32.DOT.DOT");
                            }

                          case 29:
                            {
                              return getErrorString("Parser.TOKEN.DOT.DOT");
                            }

                          case 30:
                            {
                              return getErrorString("Parser.TOKEN.QUOTE");
                            }

                          case 31:
                            {
                              return getErrorString("Parser.TOKEN.STAR");
                            }

                          case 32:
                            {
                              return getErrorString("Parser.TOKEN.HIGH.PRECEDENCE.TYAPP");
                            }

                          case 33:
                            {
                              return getErrorString("Parser.TOKEN.COLON");
                            }

                          case 34:
                            {
                              return getErrorString("Parser.TOKEN.COLON.EQUALS");
                            }

                          case 35:
                            {
                              return getErrorString("Parser.TOKEN.LARROW");
                            }

                          case 36:
                            {
                              return getErrorString("Parser.TOKEN.EQUALS");
                            }

                          case 37:
                            {
                              return getErrorString("Parser.TOKEN.GREATER.BAR.RBRACK");
                            }

                          case 38:
                            {
                              return getErrorString("Parser.TOKEN.MINUS");
                            }

                          case 39:
                            {
                              return getErrorString("Parser.TOKEN.ADJACENT.PREFIX.OP");
                            }

                          case 40:
                            {
                              return getErrorString("Parser.TOKEN.FUNKY.OPERATOR.NAME");
                            }

                          case 41:
                            {
                              return getErrorString("Parser.TOKEN.COMMA");
                            }

                          case 42:
                            {
                              return getErrorString("Parser.TOKEN.DOT");
                            }

                          case 43:
                            {
                              return getErrorString("Parser.TOKEN.BAR");
                            }

                          case 44:
                            {
                              return getErrorString("Parser.TOKEN.HASH");
                            }

                          case 45:
                            {
                              return getErrorString("Parser.TOKEN.UNDERSCORE");
                            }

                          case 46:
                            {
                              return getErrorString("Parser.TOKEN.SEMICOLON");
                            }

                          case 47:
                            {
                              return getErrorString("Parser.TOKEN.SEMICOLON.SEMICOLON");
                            }

                          case 48:
                            {
                              return getErrorString("Parser.TOKEN.LPAREN");
                            }

                          case 49:
                            {
                              return getErrorString("Parser.TOKEN.RPAREN");
                            }

                          case 50:
                            {
                              return getErrorString("Parser.TOKEN.LQUOTE");
                            }

                          case 51:
                            {
                              return getErrorString("Parser.TOKEN.LBRACK");
                            }

                          case 52:
                            {
                              return getErrorString("Parser.TOKEN.LBRACK.BAR");
                            }

                          case 53:
                            {
                              return getErrorString("Parser.TOKEN.LBRACK.LESS");
                            }

                          case 54:
                            {
                              return getErrorString("Parser.TOKEN.LBRACE");
                            }

                          case 55:
                            {
                              return getErrorString("Parser.TOKEN.LBRACE.LESS");
                            }

                          case 56:
                            {
                              return getErrorString("Parser.TOKEN.BAR.RBRACK");
                            }

                          case 57:
                            {
                              return getErrorString("Parser.TOKEN.GREATER.RBRACE");
                            }

                          case 58:
                            {
                              return getErrorString("Parser.TOKEN.GREATER.RBRACK");
                            }

                          case 59:
                            {
                              return getErrorString("Parser.TOKEN.RQUOTE");
                            }

                          case 60:
                            {
                              return getErrorString("Parser.TOKEN.RBRACK");
                            }

                          case 61:
                            {
                              return getErrorString("Parser.TOKEN.RBRACE");
                            }

                          case 62:
                            {
                              return getErrorString("Parser.TOKEN.PUBLIC");
                            }

                          case 63:
                            {
                              return getErrorString("Parser.TOKEN.PRIVATE");
                            }

                          case 64:
                            {
                              return getErrorString("Parser.TOKEN.INTERNAL");
                            }

                          case 65:
                            {
                              return getErrorString("Parser.TOKEN.CONSTRAINT");
                            }

                          case 66:
                            {
                              return getErrorString("Parser.TOKEN.INSTANCE");
                            }

                          case 67:
                            {
                              return getErrorString("Parser.TOKEN.DELEGATE");
                            }

                          case 68:
                            {
                              return getErrorString("Parser.TOKEN.INHERIT");
                            }

                          case 69:
                            {
                              return getErrorString("Parser.TOKEN.CONSTRUCTOR");
                            }

                          case 70:
                            {
                              return getErrorString("Parser.TOKEN.DEFAULT");
                            }

                          case 71:
                            {
                              return getErrorString("Parser.TOKEN.OVERRIDE");
                            }

                          case 72:
                            {
                              return getErrorString("Parser.TOKEN.ABSTRACT");
                            }

                          case 73:
                            {
                              return getErrorString("Parser.TOKEN.CLASS");
                            }

                          case 74:
                            {
                              return getErrorString("Parser.TOKEN.MEMBER");
                            }

                          case 75:
                            {
                              return getErrorString("Parser.TOKEN.STATIC");
                            }

                          case 76:
                            {
                              return getErrorString("Parser.TOKEN.NAMESPACE");
                            }

                          case 77:
                            {
                              return getErrorString("Parser.TOKEN.OBLOCKBEGIN");
                            }

                          case 78:
                            {
                              return getErrorString("Parser.TOKEN.OBLOCKEND");
                            }

                          case 79:
                            {
                              var $target$$50;

                              switch (tid.tag) {
                                case 104:
                                case 28:
                                  $target$$50 = 0;
                                  break;

                                case 140:
                                case 27:
                                  $target$$50 = 1;
                                  break;

                                case 161:
                                case 32:
                                  $target$$50 = 2;
                                  break;

                                case 31:
                                case 158:
                                  $target$$50 = 3;
                                  break;

                                case 30:
                                  $target$$50 = 4;
                                  break;

                                case 26:
                                  $target$$50 = 5;
                                  break;

                                case 25:
                                  $target$$50 = 6;
                                  break;

                                case 24:
                                  $target$$50 = 7;
                                  break;

                                case 23:
                                  $target$$50 = 8;
                                  break;

                                case 12:
                                  $target$$50 = 9;
                                  break;

                                case 130:
                                case 29:
                                  $target$$50 = 10;
                                  break;

                                case 162:
                                  $target$$50 = 11;
                                  break;

                                case 163:
                                  $target$$50 = 12;
                                  break;

                                case 14:
                                  $target$$50 = 13;
                                  break;

                                case 141:
                                  $target$$50 = 14;
                                  break;

                                case 98:
                                  $target$$50 = 15;
                                  break;

                                case 56:
                                  $target$$50 = 16;
                                  break;

                                case 55:
                                  $target$$50 = 17;
                                  break;

                                case 145:
                                  $target$$50 = 18;
                                  break;

                                case 146:
                                  $target$$50 = 19;
                                  break;

                                case 147:
                                  $target$$50 = 20;
                                  break;

                                case 148:
                                  $target$$50 = 21;
                                  break;

                                case 149:
                                case 38:
                                case 39:
                                  $target$$50 = 22;
                                  break;

                                case 131:
                                  $target$$50 = 23;
                                  break;

                                case 132:
                                  $target$$50 = 24;
                                  break;

                                case 133:
                                  $target$$50 = 25;
                                  break;

                                case 134:
                                  $target$$50 = 26;
                                  break;

                                case 135:
                                  $target$$50 = 27;
                                  break;

                                case 139:
                                  $target$$50 = 28;
                                  break;

                                case 121:
                                  $target$$50 = 29;
                                  break;

                                case 122:
                                  $target$$50 = 30;
                                  break;

                                case 123:
                                  $target$$50 = 31;
                                  break;

                                case 124:
                                  $target$$50 = 32;
                                  break;

                                case 125:
                                  $target$$50 = 33;
                                  break;

                                case 129:
                                  $target$$50 = 34;
                                  break;

                                case 114:
                                  $target$$50 = 35;
                                  break;

                                case 115:
                                  $target$$50 = 36;
                                  break;

                                case 116:
                                  $target$$50 = 37;
                                  break;

                                case 117:
                                  $target$$50 = 38;
                                  break;

                                case 118:
                                  $target$$50 = 39;
                                  break;

                                case 119:
                                  $target$$50 = 40;
                                  break;

                                case 120:
                                  $target$$50 = 41;
                                  break;

                                case 101:
                                  $target$$50 = 42;
                                  break;

                                case 102:
                                  $target$$50 = 43;
                                  break;

                                case 41:
                                  $target$$50 = 44;
                                  break;

                                case 40:
                                  $target$$50 = 45;
                                  break;

                                case 111:
                                  $target$$50 = 46;
                                  break;

                                case 103:
                                  $target$$50 = 47;
                                  break;

                                case 105:
                                  $target$$50 = 48;
                                  break;

                                case 106:
                                  $target$$50 = 49;
                                  break;

                                case 107:
                                  $target$$50 = 50;
                                  break;

                                case 108:
                                case 36:
                                case 37:
                                  $target$$50 = 51;
                                  break;

                                case 109:
                                  $target$$50 = 52;
                                  break;

                                case 110:
                                  $target$$50 = 53;
                                  break;

                                case 85:
                                  $target$$50 = 54;
                                  break;

                                case 86:
                                  $target$$50 = 55;
                                  break;

                                case 87:
                                  $target$$50 = 56;
                                  break;

                                case 126:
                                  $target$$50 = 57;
                                  break;

                                case 137:
                                  $target$$50 = 58;
                                  break;

                                case 45:
                                  $target$$50 = 59;
                                  break;

                                case 138:
                                  $target$$50 = 60;
                                  break;

                                case 127:
                                case 128:
                                  $target$$50 = 61;
                                  break;

                                case 34:
                                  $target$$50 = 62;
                                  break;

                                case 35:
                                  $target$$50 = 63;
                                  break;

                                case 136:
                                  $target$$50 = 64;
                                  break;

                                case 142:
                                  $target$$50 = 65;
                                  break;

                                case 6:
                                case 5:
                                case 0:
                                case 1:
                                case 2:
                                  $target$$50 = 66;
                                  break;

                                case 7:
                                  $target$$50 = 67;
                                  break;

                                case 11:
                                  $target$$50 = 68;
                                  break;

                                case 4:
                                  $target$$50 = 69;
                                  break;

                                case 3:
                                  $target$$50 = 70;
                                  break;

                                case 8:
                                  $target$$50 = 71;
                                  break;

                                case 9:
                                  $target$$50 = 72;
                                  break;

                                case 193:
                                  $target$$50 = 73;
                                  break;

                                case 192:
                                  $target$$50 = 74;
                                  break;

                                case 191:
                                  $target$$50 = 75;
                                  break;

                                case 10:
                                  $target$$50 = 76;
                                  break;

                                case 113:
                                  $target$$50 = 77;
                                  break;

                                case 13:
                                  $target$$50 = 78;
                                  break;

                                default:
                                  $target$$50 = 79;
                              }

                              switch ($target$$50) {
                                case 0:
                                  {
                                    return getErrorString("Parser.TOKEN.OTHEN");
                                  }

                                case 1:
                                  {
                                    return getErrorString("Parser.TOKEN.OELSE");
                                  }

                                case 2:
                                  {
                                    return getErrorString("Parser.TOKEN.OLET");
                                  }

                                case 3:
                                  {
                                    return getErrorString("Parser.TOKEN.BINDER");
                                  }

                                case 4:
                                  {
                                    return getErrorString("Parser.TOKEN.ODO");
                                  }

                                case 5:
                                  {
                                    return getErrorString("Parser.TOKEN.OWITH");
                                  }

                                case 6:
                                  {
                                    return getErrorString("Parser.TOKEN.OFUNCTION");
                                  }

                                case 7:
                                  {
                                    return getErrorString("Parser.TOKEN.OFUN");
                                  }

                                case 8:
                                  {
                                    return getErrorString("Parser.TOKEN.ORESET");
                                  }

                                case 9:
                                  {
                                    return getErrorString("Parser.TOKEN.ODUMMY");
                                  }

                                case 10:
                                  {
                                    return getErrorString("Parser.TOKEN.ODO.BANG");
                                  }

                                case 11:
                                  {
                                    return getErrorString("Parser.TOKEN.YIELD");
                                  }

                                case 12:
                                  {
                                    return getErrorString("Parser.TOKEN.YIELD.BANG");
                                  }

                                case 13:
                                  {
                                    return getErrorString("Parser.TOKEN.OINTERFACE.MEMBER");
                                  }

                                case 14:
                                  {
                                    return getErrorString("Parser.TOKEN.ELIF");
                                  }

                                case 15:
                                  {
                                    return getErrorString("Parser.TOKEN.RARROW");
                                  }

                                case 16:
                                  {
                                    return getErrorString("Parser.TOKEN.SIG");
                                  }

                                case 17:
                                  {
                                    return getErrorString("Parser.TOKEN.STRUCT");
                                  }

                                case 18:
                                  {
                                    return getErrorString("Parser.TOKEN.UPCAST");
                                  }

                                case 19:
                                  {
                                    return getErrorString("Parser.TOKEN.DOWNCAST");
                                  }

                                case 20:
                                  {
                                    return getErrorString("Parser.TOKEN.NULL");
                                  }

                                case 21:
                                  {
                                    return getErrorString("Parser.TOKEN.RESERVED");
                                  }

                                case 22:
                                  {
                                    return getErrorString("Parser.TOKEN.MODULE");
                                  }

                                case 23:
                                  {
                                    return getErrorString("Parser.TOKEN.AND");
                                  }

                                case 24:
                                  {
                                    return getErrorString("Parser.TOKEN.AS");
                                  }

                                case 25:
                                  {
                                    return getErrorString("Parser.TOKEN.ASSERT");
                                  }

                                case 26:
                                  {
                                    return getErrorString("Parser.TOKEN.ASSERT");
                                  }

                                case 27:
                                  {
                                    return getErrorString("Parser.TOKEN.ASR");
                                  }

                                case 28:
                                  {
                                    return getErrorString("Parser.TOKEN.DOWNTO");
                                  }

                                case 29:
                                  {
                                    return getErrorString("Parser.TOKEN.EXCEPTION");
                                  }

                                case 30:
                                  {
                                    return getErrorString("Parser.TOKEN.FALSE");
                                  }

                                case 31:
                                  {
                                    return getErrorString("Parser.TOKEN.FOR");
                                  }

                                case 32:
                                  {
                                    return getErrorString("Parser.TOKEN.FUN");
                                  }

                                case 33:
                                  {
                                    return getErrorString("Parser.TOKEN.FUNCTION");
                                  }

                                case 34:
                                  {
                                    return getErrorString("Parser.TOKEN.FINALLY");
                                  }

                                case 35:
                                  {
                                    return getErrorString("Parser.TOKEN.LAZY");
                                  }

                                case 36:
                                  {
                                    return getErrorString("Parser.TOKEN.LAZY");
                                  }

                                case 37:
                                  {
                                    return getErrorString("Parser.TOKEN.MATCH");
                                  }

                                case 38:
                                  {
                                    return getErrorString("Parser.TOKEN.MATCH.BANG");
                                  }

                                case 39:
                                  {
                                    return getErrorString("Parser.TOKEN.MUTABLE");
                                  }

                                case 40:
                                  {
                                    return getErrorString("Parser.TOKEN.NEW");
                                  }

                                case 41:
                                  {
                                    return getErrorString("Parser.TOKEN.OF");
                                  }

                                case 42:
                                  {
                                    return getErrorString("Parser.TOKEN.OPEN");
                                  }

                                case 43:
                                  {
                                    return getErrorString("Parser.TOKEN.OR");
                                  }

                                case 44:
                                  {
                                    return getErrorString("Parser.TOKEN.VOID");
                                  }

                                case 45:
                                  {
                                    return getErrorString("Parser.TOKEN.EXTERN");
                                  }

                                case 46:
                                  {
                                    return getErrorString("Parser.TOKEN.INTERFACE");
                                  }

                                case 47:
                                  {
                                    return getErrorString("Parser.TOKEN.REC");
                                  }

                                case 48:
                                  {
                                    return getErrorString("Parser.TOKEN.TO");
                                  }

                                case 49:
                                  {
                                    return getErrorString("Parser.TOKEN.TRUE");
                                  }

                                case 50:
                                  {
                                    return getErrorString("Parser.TOKEN.TRY");
                                  }

                                case 51:
                                  {
                                    return getErrorString("Parser.TOKEN.TYPE");
                                  }

                                case 52:
                                  {
                                    return getErrorString("Parser.TOKEN.VAL");
                                  }

                                case 53:
                                  {
                                    return getErrorString("Parser.TOKEN.INLINE");
                                  }

                                case 54:
                                  {
                                    return getErrorString("Parser.TOKEN.WHEN");
                                  }

                                case 55:
                                  {
                                    return getErrorString("Parser.TOKEN.WHILE");
                                  }

                                case 56:
                                  {
                                    return getErrorString("Parser.TOKEN.WITH");
                                  }

                                case 57:
                                  {
                                    return getErrorString("Parser.TOKEN.IF");
                                  }

                                case 58:
                                  {
                                    return getErrorString("Parser.TOKEN.DO");
                                  }

                                case 59:
                                  {
                                    return getErrorString("Parser.TOKEN.GLOBAL");
                                  }

                                case 60:
                                  {
                                    return getErrorString("Parser.TOKEN.DONE");
                                  }

                                case 61:
                                  {
                                    return getErrorString("Parser.TOKEN.IN");
                                  }

                                case 62:
                                  {
                                    return getErrorString("Parser.TOKEN.HIGH.PRECEDENCE.PAREN.APP");
                                  }

                                case 63:
                                  {
                                    return getErrorString("Parser.TOKEN.HIGH.PRECEDENCE.BRACK.APP");
                                  }

                                case 64:
                                  {
                                    return getErrorString("Parser.TOKEN.BEGIN");
                                  }

                                case 65:
                                  {
                                    return getErrorString("Parser.TOKEN.END");
                                  }

                                case 66:
                                  {
                                    return getErrorString("Parser.TOKEN.HASH.ENDIF");
                                  }

                                case 67:
                                  {
                                    return getErrorString("Parser.TOKEN.INACTIVECODE");
                                  }

                                case 68:
                                  {
                                    return getErrorString("Parser.TOKEN.LEX.FAILURE");
                                  }

                                case 69:
                                  {
                                    return getErrorString("Parser.TOKEN.WHITESPACE");
                                  }

                                case 70:
                                  {
                                    return getErrorString("Parser.TOKEN.COMMENT");
                                  }

                                case 71:
                                  {
                                    return getErrorString("Parser.TOKEN.LINE.COMMENT");
                                  }

                                case 72:
                                  {
                                    return getErrorString("Parser.TOKEN.STRING.TEXT");
                                  }

                                case 73:
                                  {
                                    return getErrorString("Parser.TOKEN.BYTEARRAY");
                                  }

                                case 74:
                                  {
                                    return getErrorString("Parser.TOKEN.STRING");
                                  }

                                case 75:
                                  {
                                    return getErrorString("Parser.TOKEN.KEYWORD_STRING");
                                  }

                                case 76:
                                  {
                                    return getErrorString("Parser.TOKEN.EOF");
                                  }

                                case 77:
                                  {
                                    return getErrorString("Parser.TOKEN.CONST");
                                  }

                                case 78:
                                  {
                                    return getErrorString("Parser.TOKEN.FIXED");
                                  }

                                case 79:
                                  {
                                    const unknown = tid;
                                    const result = (0, _String.toText)((0, _String.printf)("%+A"))(unknown);
                                    return result;
                                  }
                              }
                            }
                        }
                      };

                      const matchValue$$1 = (0, _primParsing.ParseErrorContext$00601$$get_CurrentToken)(ctxt$$1);

                      if (matchValue$$1 != null) {
                        const token$$1 = matchValue$$1;
                        const matchValue$$2 = [(0, _pars.tokenTagToTokenId)((0, _pars.tagOfToken)(token$$1)), token$$1];

                        if ($007CEndOfStructuredConstructToken$007C_$007C(matchValue$$2[0]) != null) {
                          StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(OBlockEndSentenceE()));
                        } else {
                          var $target$$51, token$$2;

                          if (matchValue$$2[0].tag === 11) {
                            if (matchValue$$2[1].tag === 11) {
                              $target$$51 = 0;
                            } else {
                              $target$$51 = 1;
                              token$$2 = matchValue$$2[0];
                            }
                          } else {
                            $target$$51 = 1;
                            token$$2 = matchValue$$2[0];
                          }

                          switch ($target$$51) {
                            case 0:
                              {
                                const str = matchValue$$2[1].fields[0];
                                Printf$$$bprintf(os$$1)((0, _String.printf)("%s"))(str);
                                break;
                              }

                            case 1:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UnexpectedE())(tokenIdToText(token$$2)));
                                break;
                              }
                          }
                        }

                        let foundInContext;

                        const $007CNONTERM_Category_Expr$007C_$007C = function $007CNONTERM_Category_Expr$007C_$007C(_arg1$$2) {
                          var $target$$52;

                          switch (_arg1$$2.tag) {
                            case 208:
                            case 206:
                            case 217:
                            case 209:
                            case 207:
                            case 205:
                            case 194:
                            case 221:
                            case 187:
                            case 9:
                              $target$$52 = 0;
                              break;

                            default:
                              $target$$52 = 1;
                          }

                          switch ($target$$52) {
                            case 0:
                              {
                                return (0, _Option.some)(null);
                              }

                            case 1:
                              {
                                return null;
                              }
                          }
                        };

                        const $007CNONTERM_Category_Pattern$007C_$007C = function $007CNONTERM_Category_Pattern$007C_$007C(_arg2) {
                          var $target$$53;

                          switch (_arg2.tag) {
                            case 175:
                            case 180:
                            case 178:
                              $target$$53 = 0;
                              break;

                            default:
                              $target$$53 = 1;
                          }

                          switch ($target$$53) {
                            case 0:
                              {
                                return (0, _Option.some)(null);
                              }

                            case 1:
                              {
                                return null;
                              }
                          }
                        };

                        const $007CNONTERM_Category_IfThenElse$007C_$007C = function $007CNONTERM_Category_IfThenElse$007C_$007C(_arg3) {
                          var $target$$54;

                          switch (_arg3.tag) {
                            case 203:
                            case 204:
                            case 202:
                              $target$$54 = 0;
                              break;

                            default:
                              $target$$54 = 1;
                          }

                          switch ($target$$54) {
                            case 0:
                              {
                                return (0, _Option.some)(null);
                              }

                            case 1:
                              {
                                return null;
                              }
                          }
                        };

                        const $007CNONTERM_Category_SignatureFile$007C_$007C = function $007CNONTERM_Category_SignatureFile$007C_$007C(_arg4) {
                          var $target$$55;

                          switch (_arg4.tag) {
                            case 16:
                            case 26:
                            case 25:
                              $target$$55 = 0;
                              break;

                            default:
                              $target$$55 = 1;
                          }

                          switch ($target$$55) {
                            case 0:
                              {
                                return (0, _Option.some)(null);
                              }

                            case 1:
                              {
                                return null;
                              }
                          }
                        };

                        const $007CNONTERM_Category_ImplementationFile$007C_$007C = function $007CNONTERM_Category_ImplementationFile$007C_$007C(_arg5) {
                          var $target$$56;

                          switch (_arg5.tag) {
                            case 46:
                            case 49:
                            case 47:
                              $target$$56 = 0;
                              break;

                            default:
                              $target$$56 = 1;
                          }

                          switch ($target$$56) {
                            case 0:
                              {
                                return (0, _Option.some)(null);
                              }

                            case 1:
                              {
                                return null;
                              }
                          }
                        };

                        const $007CNONTERM_Category_Definition$007C_$007C = function $007CNONTERM_Category_Definition$007C_$007C(_arg6) {
                          var $target$$57;

                          switch (_arg6.tag) {
                            case 50:
                            case 56:
                            case 8:
                            case 54:
                            case 53:
                              $target$$57 = 0;
                              break;

                            default:
                              $target$$57 = 1;
                          }

                          switch ($target$$57) {
                            case 0:
                              {
                                return (0, _Option.some)(null);
                              }

                            case 1:
                              {
                                return null;
                              }
                          }
                        };

                        const $007CNONTERM_Category_Type$007C_$007C = function $007CNONTERM_Category_Type$007C_$007C(_arg7) {
                          var $target$$58;

                          switch (_arg7.tag) {
                            case 257:
                            case 259:
                              $target$$58 = 0;
                              break;

                            default:
                              $target$$58 = 1;
                          }

                          switch ($target$$58) {
                            case 0:
                              {
                                return (0, _Option.some)(null);
                              }

                            case 1:
                              {
                                return null;
                              }
                          }
                        };

                        const $007CNONTERM_Category_Interaction$007C_$007C = function $007CNONTERM_Category_Interaction$007C_$007C(_arg8) {
                          var $target$$59;

                          switch (_arg8.tag) {
                            case 7:
                            case 5:
                            case 2:
                              $target$$59 = 0;
                              break;

                            default:
                              $target$$59 = 1;
                          }

                          switch ($target$$59) {
                            case 0:
                              {
                                return (0, _Option.some)(null);
                              }

                            case 1:
                              {
                                return null;
                              }
                          }
                        };

                        foundInContext = (0, _List.exists)(function predicate(prods) {
                          const matchValue$$3 = (0, _Set.toList)((0, _Set.ofList)((0, _List.map)(function mapping$$1(_arg9) {
                            if ($007CNONTERM_Category_Type$007C_$007C(_arg9) != null) {
                              return new _pars.nonTerminalId(257, "NONTERM_typ");
                            } else {
                              if ($007CNONTERM_Category_Expr$007C_$007C(_arg9) != null) {
                                return new _pars.nonTerminalId(194, "NONTERM_declExpr");
                              } else {
                                if ($007CNONTERM_Category_Pattern$007C_$007C(_arg9) != null) {
                                  return new _pars.nonTerminalId(178, "NONTERM_atomicPattern");
                                } else {
                                  if ($007CNONTERM_Category_IfThenElse$007C_$007C(_arg9) != null) {
                                    return new _pars.nonTerminalId(203, "NONTERM_ifExprThen");
                                  } else {
                                    if ($007CNONTERM_Category_SignatureFile$007C_$007C(_arg9) != null) {
                                      return new _pars.nonTerminalId(16, "NONTERM_signatureFile");
                                    } else {
                                      if ($007CNONTERM_Category_ImplementationFile$007C_$007C(_arg9) != null) {
                                        return new _pars.nonTerminalId(46, "NONTERM_implementationFile");
                                      } else {
                                        if ($007CNONTERM_Category_Definition$007C_$007C(_arg9) != null) {
                                          return new _pars.nonTerminalId(56, "NONTERM_moduleDefn");
                                        } else {
                                          if ($007CNONTERM_Category_Interaction$007C_$007C(_arg9) != null) {
                                            return new _pars.nonTerminalId(5, "NONTERM_interaction");
                                          } else {
                                            const nt = _arg9;
                                            return nt;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }, (0, _List.map)(_pars.prodIdxToNonTerminal, prods)), {
                            Compare($x$$5, $y$$6) {
                              return $x$$5.CompareTo($y$$6);
                            }

                          }));
                          var $target$$60;

                          if (matchValue$$3.tail != null) {
                            if (matchValue$$3.head.tag === 5) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 0;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 13) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 1;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 132) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 2;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 129) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 3;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 154) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 4;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 141) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 5;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 83) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 6;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 139) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 7;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 40) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 8;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 27) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 9;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 32) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 10;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 248) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 11;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 123) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 12;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 145) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 13;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 240) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 14;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 99) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 14;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 203) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 15;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 204) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 15;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 202) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 15;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 138) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 16;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 22) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 17;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 199) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 18;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 214) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 19;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 234) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 20;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 70) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 21;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 135) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 22;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 68) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 23;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 63) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 24;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 215) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 25;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if (matchValue$$3.head.tag === 118) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 26;
                              } else {
                                $target$$60 = 28;
                              }
                            } else if ($007CNONTERM_Category_ImplementationFile$007C_$007C(matchValue$$3.head) != null) {
                              if (matchValue$$3.tail.tail == null) {
                                $target$$60 = 27;
                              } else {
                                $target$$60 = 28;
                              }
                            } else {
                              $target$$60 = 28;
                            }
                          } else {
                            $target$$60 = 28;
                          }

                          switch ($target$$60) {
                            case 0:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_interactionE()));
                                return true;
                              }

                            case 1:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_hashDirectiveE()));
                                return true;
                              }

                            case 2:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_fieldDeclE()));
                                return true;
                              }

                            case 3:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_unionCaseReprE()));
                                return true;
                              }

                            case 4:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_localBindingE()));
                                return true;
                              }

                            case 5:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_hardwhiteLetBindingsE()));
                                return true;
                              }

                            case 6:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_classDefnMemberE()));
                                return true;
                              }

                            case 7:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_defnBindingsE()));
                                return true;
                              }

                            case 8:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_classMemberSpfnE()));
                                return true;
                              }

                            case 9:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_valSpfnE()));
                                return true;
                              }

                            case 10:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_tyconSpfnE()));
                                return true;
                              }

                            case 11:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_anonLambdaExprE()));
                                return true;
                              }

                            case 12:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_attrUnionCaseDeclE()));
                                return true;
                              }

                            case 13:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_cPrototypeE()));
                                return true;
                              }

                            case 14:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_objectImplementationMembersE()));
                                return true;
                              }

                            case 15:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_ifExprCasesE()));
                                return true;
                              }

                            case 16:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_openDeclE()));
                                return true;
                              }

                            case 17:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_fileModuleSpecE()));
                                return true;
                              }

                            case 18:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_patternClausesE()));
                                return true;
                              }

                            case 19:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_beginEndExprE()));
                                return true;
                              }

                            case 20:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_recdExprE()));
                                return true;
                              }

                            case 21:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_tyconDefnE()));
                                return true;
                              }

                            case 22:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_exconCoreE()));
                                return true;
                              }

                            case 23:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_typeNameInfoE()));
                                return true;
                              }

                            case 24:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_attributeListE()));
                                return true;
                              }

                            case 25:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_quoteExprE()));
                                return true;
                              }

                            case 26:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_typeConstraintE()));
                                return true;
                              }

                            case 27:
                              {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_Category_ImplementationFileE()));
                                return true;
                              }

                            case 28:
                              {
                                var $target$$61;

                                if (matchValue$$3.tail != null) {
                                  if ($007CNONTERM_Category_Definition$007C_$007C(matchValue$$3.head) != null) {
                                    if (matchValue$$3.tail.tail == null) {
                                      $target$$61 = 0;
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
                                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_Category_DefinitionE()));
                                      return true;
                                    }

                                  case 1:
                                    {
                                      var $target$$62;

                                      if (matchValue$$3.tail != null) {
                                        if ($007CNONTERM_Category_SignatureFile$007C_$007C(matchValue$$3.head) != null) {
                                          if (matchValue$$3.tail.tail == null) {
                                            $target$$62 = 0;
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
                                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_Category_SignatureFileE()));
                                            return true;
                                          }

                                        case 1:
                                          {
                                            var $target$$63;

                                            if (matchValue$$3.tail != null) {
                                              if ($007CNONTERM_Category_Pattern$007C_$007C(matchValue$$3.head) != null) {
                                                if (matchValue$$3.tail.tail == null) {
                                                  $target$$63 = 0;
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
                                                  StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_Category_PatternE()));
                                                  return true;
                                                }

                                              case 1:
                                                {
                                                  var $target$$64;

                                                  if (matchValue$$3.tail != null) {
                                                    if ($007CNONTERM_Category_Expr$007C_$007C(matchValue$$3.head) != null) {
                                                      if (matchValue$$3.tail.tail == null) {
                                                        $target$$64 = 0;
                                                      } else {
                                                        $target$$64 = 1;
                                                      }
                                                    } else {
                                                      $target$$64 = 1;
                                                    }
                                                  } else {
                                                    $target$$64 = 1;
                                                  }

                                                  switch ($target$$64) {
                                                    case 0:
                                                      {
                                                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_Category_ExprE()));
                                                        return true;
                                                      }

                                                    case 1:
                                                      {
                                                        var $target$$65;

                                                        if (matchValue$$3.tail != null) {
                                                          if ($007CNONTERM_Category_Type$007C_$007C(matchValue$$3.head) != null) {
                                                            if (matchValue$$3.tail.tail == null) {
                                                              $target$$65 = 0;
                                                            } else {
                                                              $target$$65 = 1;
                                                            }
                                                          } else {
                                                            $target$$65 = 1;
                                                          }
                                                        } else {
                                                          $target$$65 = 1;
                                                        }

                                                        switch ($target$$65) {
                                                          case 0:
                                                            {
                                                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_Category_TypeE()));
                                                              return true;
                                                            }

                                                          case 1:
                                                            {
                                                              var $target$$66;

                                                              if (matchValue$$3.tail != null) {
                                                                if (matchValue$$3.head.tag === 273) {
                                                                  if (matchValue$$3.tail.tail == null) {
                                                                    $target$$66 = 0;
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
                                                                    StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NONTERM_typeArgsActualE()));
                                                                    return true;
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
                                                }
                                            }
                                          }
                                      }
                                    }
                                }
                              }
                          }
                        }, (0, _primParsing.ParseErrorContext$00601$$get_ReducibleProductions)(ctxt$$1));
                        foundInContext;

                        const fix = function fix(s$$4) {
                          return (0, _String.replace)((0, _String.replace)((0, _String.replace)(s$$4, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002ESR$$$GetString)("FixKeyword"), ""), (0, _adapters.Microsoft$002EFSharp$002ECompiler$002ESR$$$GetString)("FixSymbol"), ""), (0, _adapters.Microsoft$002EFSharp$002ECompiler$002ESR$$$GetString)("FixReplace"), "");
                        };

                        const matchValue$$4 = (0, _Set.toList)((0, _Set.ofList)((0, _List.map)(tokenIdToText, (0, _List.filter)(function predicate$$1(_arg10) {
                          var $target$$67;

                          switch (_arg10.tag) {
                            case 195:
                            case 10:
                              $target$$67 = 0;
                              break;

                            default:
                              $target$$67 = 1;
                          }

                          switch ($target$$67) {
                            case 0:
                              {
                                return false;
                              }

                            case 1:
                              {
                                return true;
                              }
                          }
                        }, (0, _List.map)(_pars.tokenTagToTokenId, (0, _primParsing.ParseErrorContext$00601$$get_ShiftTokens)(ctxt$$1)))), {
                          Compare: _Util.comparePrimitives
                        }));
                        var $target$$68, tokenName1, tokenName1$$1, tokenName2, tokenName1$$2, tokenName2$$1, tokenName3;

                        if (matchValue$$4.tail != null) {
                          if (matchValue$$4.tail.tail != null) {
                            if (matchValue$$4.tail.tail.tail != null) {
                              if (matchValue$$4.tail.tail.tail.tail == null) {
                                $target$$68 = 2;
                                tokenName1$$2 = matchValue$$4.head;
                                tokenName2$$1 = matchValue$$4.tail.head;
                                tokenName3 = matchValue$$4.tail.tail.head;
                              } else {
                                $target$$68 = 3;
                              }
                            } else {
                              $target$$68 = 1;
                              tokenName1$$1 = matchValue$$4.head;
                              tokenName2 = matchValue$$4.tail.head;
                            }
                          } else {
                            $target$$68 = 0;
                            tokenName1 = matchValue$$4.head;
                          }
                        } else {
                          $target$$68 = 3;
                        }

                        switch ($target$$68) {
                          case 0:
                            {
                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(TokenName1E())(fix(tokenName1)));
                              break;
                            }

                          case 1:
                            {
                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(TokenName1TokenName2E())(fix(tokenName1$$1))(fix(tokenName2)));
                              break;
                            }

                          case 2:
                            {
                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(TokenName1TokenName2TokenName3E())(fix(tokenName1$$2))(fix(tokenName2$$1))(fix(tokenName3)));
                              break;
                            }
                        }
                      } else {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UnexpectedEndOfInputE()));
                      }

                      break;
                    }

                  case 35:
                    {
                      const patternInput$$22 = (0, _TastOps.PrettyTypes$$$PrettifyType)(denv$$21.g, ty$$2);

                      if ((0, _TastOps.isTyparTy)(denv$$21.g, patternInput$$22[0])) {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(RuntimeCoercionSourceSealed1E())((0, _NicePrint.stringOfTy)(denv$$21, patternInput$$22[0])));
                      } else {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(RuntimeCoercionSourceSealed2E())((0, _NicePrint.stringOfTy)(denv$$21, patternInput$$22[0])));
                      }

                      break;
                    }

                  case 36:
                    {
                      const patternInput$$23 = (0, _TastOps.PrettyTypes$$$PrettifyType)(denv$$22.g, ty$$4);
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(CoercionTargetSealedE())((0, _NicePrint.stringOfTy)(denv$$22, patternInput$$23[0])));
                      break;
                    }

                  case 37:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UpcastUnnecessaryE()));
                      break;
                    }

                  case 38:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(TypeTestUnnecessaryE()));
                      break;
                    }

                  case 39:
                    {
                      Printf$$$bprintf(os$$1)((0, _String.printf)("%s"))(msg$$2);
                      break;
                    }

                  case 40:
                    {
                      const sig1 = (0, _MethodOverrides.DispatchSlotChecking$$$FormatOverride)(denv$$23, impl);

                      if (minfoVirtOpt != null) {
                        const minfoVirt = minfoVirtOpt;

                        const hasUnitTType_app = function hasUnitTType_app(types) {
                          var ttype;

                          hasUnitTType_app: while (true) {
                            var $target$$69, maybeUnit, ts, ts$$1;

                            if (types.tail == null) {
                              $target$$69 = 2;
                            } else if (types.head.tag === 1) {
                              if (types.head.fields[1].tail == null) {
                                $target$$69 = 0;
                                maybeUnit = types.head.fields[0];
                                ts = types.tail;
                              } else {
                                $target$$69 = 1;
                                ts$$1 = types.tail;
                              }
                            } else {
                              $target$$69 = 1;
                              ts$$1 = types.tail;
                            }

                            switch ($target$$69) {
                              case 0:
                                {
                                  const matchValue$$5 = (0, _tast.EntityRef$$get_TypeAbbrev)(maybeUnit);
                                  var $target$$70, ttype$$1;

                                  if (matchValue$$5 != null) {
                                    if (ttype = matchValue$$5, (0, _TastOps.isUnitTy)(g$$7, ttype)) {
                                      $target$$70 = 0;
                                      ttype$$1 = matchValue$$5;
                                    } else {
                                      $target$$70 = 1;
                                    }
                                  } else {
                                    $target$$70 = 1;
                                  }

                                  switch ($target$$70) {
                                    case 0:
                                      {
                                        return true;
                                      }

                                    case 1:
                                      {
                                        types = ts;
                                        continue hasUnitTType_app;
                                      }
                                  }
                                }

                              case 1:
                                {
                                  types = ts$$1;
                                  continue hasUnitTType_app;
                                }

                              case 2:
                                {
                                  return false;
                                }
                            }
                          }
                        };

                        const matchValue$$6 = (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfoVirt);
                        var $target$$71, t$$2, types$$2;

                        if (matchValue$$6.tag === 1) {
                          if (types$$1 = matchValue$$6.fields[1], (t$$1 = matchValue$$6.fields[0], (0, _tast.EntityRef$$get_IsFSharpInterfaceTycon)(t$$1) ? hasUnitTType_app(types$$1) : false)) {
                            $target$$71 = 0;
                            t$$2 = matchValue$$6.fields[0];
                            types$$2 = matchValue$$6.fields[1];
                          } else {
                            $target$$71 = 1;
                          }
                        } else {
                          $target$$71 = 1;
                        }

                        switch ($target$$71) {
                          case 0:
                            {
                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(OverrideDoesntOverride4E())(sig1));
                              break;
                            }

                          case 1:
                            {
                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(OverrideDoesntOverride2E())(sig1));
                              const sig2 = (0, _MethodOverrides.DispatchSlotChecking$$$FormatMethInfoSig)(g$$7, amap, m$$17, denv$$23, minfoVirt);

                              if (sig1 !== sig2) {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(OverrideDoesntOverride3E())(sig2));
                              }

                              break;
                            }
                        }
                      } else {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(OverrideDoesntOverride1E())(sig1));
                      }

                      break;
                    }

                  case 41:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UnionCaseWrongArgumentsE())(n2)(n1));
                      break;
                    }

                  case 42:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UnionPatternsBindDifferentNamesE()));
                      break;
                    }

                  case 43:
                    {
                      const patternInput$$24 = (0, _NicePrint.minimalStringsOfTwoValues)(denv$$24, implVal, sigVal);
                      StringBuilder$$Append$$Z721C83C5(os$$1, f$$2([(0, _TastOps.fullDisplayTextOfModRef)(mref), patternInput$$24[0], patternInput$$24[1]]));
                      break;
                    }

                  case 44:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, f$$3([(0, _NicePrint.stringOfUnionCase)(denv$$25, v1), (0, _NicePrint.stringOfUnionCase)(denv$$25, v2)]));
                      break;
                    }

                  case 45:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, f$$4([(0, _NicePrint.stringOfExnDef)(denv$$26, v1$$1), (0, _NicePrint.stringOfExnDef)(denv$$26, v2$$1)]));
                      break;
                    }

                  case 46:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, f$$5([(0, _NicePrint.stringOfRecdField)(denv$$27, v1$$2), (0, _NicePrint.stringOfRecdField)(denv$$27, v2$$2)]));
                      break;
                    }

                  case 47:
                    {
                      const nsb = (0, _System.StringBuilder$$$$002Ector)();
                      name$$2(nsb);
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(RequiredButNotSpecifiedE())((0, _TastOps.fullDisplayTextOfModRef)(mref$$1))(k$$2)((0, _Util.toString)(nsb)));
                      break;
                    }

                  case 48:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UseOfAddressOfOperatorE()));
                      break;
                    }

                  case 49:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(DefensiveCopyWarningE())(s$$5));
                      break;
                    }

                  case 50:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(DeprecatedThreadStaticBindingWarningE()));
                      break;
                    }

                  case 51:
                    {
                      const patternInput$$25 = (0, _TastOps.PrettyTypes$$$PrettifyType)(denv$$28.g, ty$$6);
                      const errorText = (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(FunctionValueUnexpectedE())((0, _NicePrint.stringOfTy)(denv$$28, patternInput$$25[0]));
                      StringBuilder$$Append$$Z721C83C5(os$$1, errorText);
                      break;
                    }

                  case 52:
                    {
                      const patternInput$$26 = (0, _TastOps.PrettyTypes$$$PrettifyType)(denv$$29.g, ty$$8);
                      const warningText = (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UnitTypeExpectedE())((0, _NicePrint.stringOfTy)(denv$$29, patternInput$$26[0]));
                      StringBuilder$$Append$$Z721C83C5(os$$1, warningText);
                      break;
                    }

                  case 53:
                    {
                      const patternInput$$27 = (0, _TastOps.PrettyTypes$$$PrettifyType)(denv$$30.g, ty$$10);
                      const warningText$$1 = (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UnitTypeExpectedWithEqualityE())((0, _NicePrint.stringOfTy)(denv$$30, patternInput$$27[0]));
                      StringBuilder$$Append$$Z721C83C5(os$$1, warningText$$1);
                      break;
                    }

                  case 54:
                    {
                      const patternInput$$28 = (0, _TastOps.PrettyTypes$$$PrettifyType)(denv$$31.g, ty$$12);
                      const warningText$$2 = (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UnitTypeExpectedWithPossiblePropertySetterE())((0, _NicePrint.stringOfTy)(denv$$31, patternInput$$28[0]))(bindingName)(propertyName);
                      StringBuilder$$Append$$Z721C83C5(os$$1, warningText$$2);
                      break;
                    }

                  case 55:
                    {
                      const patternInput$$29 = (0, _TastOps.PrettyTypes$$$PrettifyType)(denv$$32.g, ty$$14);
                      const warningText$$3 = isAlreadyMutable ? (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UnitTypeExpectedWithPossibleAssignmentToMutableE())((0, _NicePrint.stringOfTy)(denv$$32, patternInput$$29[0]))(bindingName$$1) : (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UnitTypeExpectedWithPossibleAssignmentE())((0, _NicePrint.stringOfTy)(denv$$32, patternInput$$29[0]))(bindingName$$1);
                      StringBuilder$$Append$$Z721C83C5(os$$1, warningText$$3);
                      break;
                    }

                  case 56:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(RecursiveUseCheckedAtRuntimeE()));
                      break;
                    }

                  case 57:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(LetRecUnsound1E())((0, _tast.ValRef$$get_DisplayName)(v)));
                      break;
                    }

                  case 58:
                    {
                      const bos = StringBuilder$$$$002Ector();
                      (0, _List.iterate)(function action$$1(v$$1) {
                        StringBuilder$$Append$$Z721C83C5(bos, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(LetRecUnsoundInnerE())((0, _tast.ValRef$$get_DisplayName)(v$$1)));
                      }, (0, _List.append)((0, _List.tail)(path), (0, _Types.L)((0, _List.head)(path), (0, _Types.L)())));
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(LetRecUnsound2E())((0, _tast.ValRef$$get_DisplayName)((0, _List.head)(path)))((0, _Util.toString)(bos)));
                      break;
                    }

                  case 59:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(LetRecEvaluatedOutOfOrderE()));
                      break;
                    }

                  case 60:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(LetRecCheckedAtRuntimeE()));
                      break;
                    }

                  case 61:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(SelfRefObjCtor1E()));
                      break;
                    }

                  case 62:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(SelfRefObjCtor2E()));
                      break;
                    }

                  case 63:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(VirtualAugmentationOnNullValuedTypeE()));
                      break;
                    }

                  case 64:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NonVirtualAugmentationOnNullValuedTypeE()));
                      break;
                    }

                  case 65:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NonUniqueInferredAbstractSlot1E())(bindnm));
                      const ty1$$7 = (0, _infos.MethInfo$$get_ApparentEnclosingType)(bvirt1);
                      const ty2$$5 = (0, _infos.MethInfo$$get_ApparentEnclosingType)(bvirt2);
                      const patternInput$$30 = (0, _NicePrint.minimalStringsOfTwoTypes)(denv$$33, ty1$$7, ty2$$5);
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NonUniqueInferredAbstractSlot2E()));

                      if (patternInput$$30[0] !== patternInput$$30[1]) {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NonUniqueInferredAbstractSlot3E())(patternInput$$30[0])(patternInput$$30[1]));
                      }

                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(NonUniqueInferredAbstractSlot4E()));
                      break;
                    }

                  case 66:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, s$$6);
                      break;
                    }

                  case 67:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _PrettyNaming.DecompileOpName)(s$$7));
                      const filtered$$1 = (0, _ErrorResolutionHints.FilterPredictions)(idText, suggestionF);

                      if (!(filtered$$1.tail == null)) {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _ErrorResolutionHints.FormatPredictions)(_PrettyNaming.DecompileOpName, filtered$$1));
                      }

                      break;
                    }

                  case 68:
                    {
                      StringBuilder$$Append$$Z721C83C5(os$$1, s$$8);
                      break;
                    }

                  case 69:
                    {
                      exn$$1;
                      const f1 = (0, _adapters.Microsoft$002EFSharp$002ECompiler$002ESR$$$GetString)("Failure1");
                      const f2 = (0, _adapters.Microsoft$002EFSharp$002ECompiler$002ESR$$$GetString)("Failure2");

                      if (f$$6 = s$$9, f$$6 === f1) {
                        const f$$7 = s$$9;
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(Failure3E())(s$$9));
                      } else if (f$$8 = s$$9, f$$8 === f2) {
                        const f$$9 = s$$9;
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(Failure3E())(s$$9));
                      } else {
                        StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(Failure4E())(s$$9));
                      }

                      break;
                    }

                  case 70:
                    {
                      var $target$$72, s$$10, exn$$2, cexOpt, isComp, cexOpt$$1, isComp$$1, valRef, s$$11, s$$12, msg$$3, s$$13, sl, denv$$34, hassig, v$$2, s$$14, s$$15, assemblyname, assemblyname$$1, pathname, fullText, optionName, altOption, optionName$$1, optionName$$2, optionName$$3, filename, locations, originalName, fileName$$1, invalidChar$$1, errors, warnings, badName, fileNameOption, filename$$1, code, message, e$$25;

                      if (error instanceof _tast.FullAbstraction) {
                        $target$$72 = 0;
                        s$$10 = error.Data0;
                      } else if (error instanceof _ErrorLogger.WrappedError) {
                        $target$$72 = 1;
                        exn$$2 = error.Data0;
                      } else if (error instanceof _PatternMatchCompilation.MatchIncomplete) {
                        $target$$72 = 2;
                        cexOpt = error.Data1;
                        isComp = error.Data0;
                      } else if (error instanceof _PatternMatchCompilation.EnumMatchIncomplete) {
                        $target$$72 = 3;
                        cexOpt$$1 = error.Data1;
                        isComp$$1 = error.Data0;
                      } else if (error instanceof _PatternMatchCompilation.RuleNeverMatched) {
                        $target$$72 = 4;
                      } else if (error instanceof _TypeChecker.ValNotMutable) {
                        $target$$72 = 5;
                        valRef = error.Data1;
                      } else if (error instanceof _TypeChecker.ValNotLocal) {
                        $target$$72 = 6;
                      } else if (error instanceof _AttributeChecking.ObsoleteError) {
                        $target$$72 = 7;
                        s$$11 = error.Data0;
                      } else if (error instanceof _AttributeChecking.ObsoleteWarning) {
                        $target$$72 = 7;
                        s$$11 = error.Data0;
                      } else if (error instanceof _ErrorLogger.Experimental) {
                        $target$$72 = 8;
                        s$$12 = error.Data0;
                      } else if (error instanceof _ErrorLogger.PossibleUnverifiableCode) {
                        $target$$72 = 9;
                      } else if (error instanceof _ErrorLogger.UserCompilerMessage) {
                        $target$$72 = 10;
                        msg$$3 = error.Data0;
                      } else if (error instanceof _ErrorLogger.Deprecated) {
                        $target$$72 = 11;
                        s$$13 = error.Data0;
                      } else if (error instanceof _ErrorLogger.LibraryUseOnly) {
                        $target$$72 = 12;
                      } else if (error instanceof _TypeChecker.MissingFields) {
                        $target$$72 = 13;
                        sl = error.Data0;
                      } else if (error instanceof _TypeChecker.ValueRestriction) {
                        $target$$72 = 14;
                        denv$$34 = error.Data0;
                        hassig = error.Data1;
                        v$$2 = error.Data2;
                      } else if (error instanceof _primParsing.RecoverableParseError) {
                        $target$$72 = 15;
                      } else if (error instanceof _lexhelp.ReservedKeyword) {
                        $target$$72 = 16;
                        s$$14 = error.Data0;
                      } else if (error instanceof _lexhelp.IndentationProblem) {
                        $target$$72 = 17;
                        s$$15 = error.Data0;
                      } else if (error instanceof _TypeChecker.OverrideInIntrinsicAugmentation) {
                        $target$$72 = 18;
                      } else if (error instanceof _TypeChecker.OverrideInExtrinsicAugmentation) {
                        $target$$72 = 19;
                      } else if (error instanceof _TypeChecker.IntfImplInIntrinsicAugmentation) {
                        $target$$72 = 20;
                      } else if (error instanceof _TypeChecker.IntfImplInExtrinsicAugmentation) {
                        $target$$72 = 21;
                      } else if (error instanceof _ErrorLogger.UnresolvedReferenceError) {
                        $target$$72 = 22;
                        assemblyname = error.Data0;
                      } else if (error instanceof _ErrorLogger.UnresolvedReferenceNoRange) {
                        $target$$72 = 22;
                        assemblyname = error.Data0;
                      } else if (error instanceof _ErrorLogger.UnresolvedPathReference) {
                        $target$$72 = 23;
                        assemblyname$$1 = error.Data0;
                        pathname = error.Data1;
                      } else if (error instanceof _ErrorLogger.UnresolvedPathReferenceNoRange) {
                        $target$$72 = 23;
                        assemblyname$$1 = error.Data0;
                        pathname = error.Data1;
                      } else if (error instanceof DeprecatedCommandLineOptionFull) {
                        $target$$72 = 24;
                        fullText = error.Data0;
                      } else if (error instanceof DeprecatedCommandLineOptionForHtmlDoc) {
                        $target$$72 = 25;
                        optionName = error.Data0;
                      } else if (error instanceof DeprecatedCommandLineOptionSuggestAlternative) {
                        $target$$72 = 26;
                        altOption = error.Data1;
                        optionName$$1 = error.Data0;
                      } else if (error instanceof InternalCommandLineOption) {
                        $target$$72 = 27;
                        optionName$$2 = error.Data0;
                      } else if (error instanceof DeprecatedCommandLineOptionNoDescription) {
                        $target$$72 = 28;
                        optionName$$3 = error.Data0;
                      } else if (error instanceof HashIncludeNotAllowedInNonScript) {
                        $target$$72 = 29;
                      } else if (error instanceof HashReferenceNotAllowedInNonScript) {
                        $target$$72 = 30;
                      } else if (error instanceof HashDirectiveNotAllowedInNonScript) {
                        $target$$72 = 31;
                      } else if (error instanceof FileNameNotResolved) {
                        $target$$72 = 32;
                        filename = error.Data0;
                        locations = error.Data1;
                      } else if (error instanceof AssemblyNotResolved) {
                        $target$$72 = 33;
                        originalName = error.Data0;
                      } else if (error instanceof _filename.IllegalFileNameChar) {
                        $target$$72 = 34;
                        fileName$$1 = error.Data0;
                        invalidChar$$1 = error.Data1;
                      } else if (error instanceof HashLoadedSourceHasIssues) {
                        $target$$72 = 35;
                        errors = error.Data1;
                        warnings = error.Data0;
                      } else if (error instanceof HashLoadedScriptConsideredSource) {
                        $target$$72 = 36;
                      } else if (error instanceof _TypeChecker.InvalidInternalsVisibleToAssemblyName) {
                        $target$$72 = 37;
                        badName = error.Data0;
                        fileNameOption = error.Data1;
                      } else if (error instanceof LoadedSourceNotFoundIgnoring) {
                        $target$$72 = 38;
                        filename$$1 = error.Data0;
                      } else if (error instanceof MSBuildReferenceResolutionWarning) {
                        $target$$72 = 39;
                        code = error.Data0;
                        message = error.Data1;
                      } else if (error instanceof MSBuildReferenceResolutionError) {
                        $target$$72 = 39;
                        code = error.Data0;
                        message = error.Data1;
                      } else {
                        $target$$72 = 40;
                        e$$25 = error;
                      }

                      switch ($target$$72) {
                        case 0:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(FullAbstractionE())(s$$10));
                            break;
                          }

                        case 1:
                          {
                            OutputExceptionR(os$$1, exn$$2);
                            break;
                          }

                        case 2:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(MatchIncomplete1E()));

                            if (cexOpt != null) {
                              if (cexOpt[1]) {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(MatchIncomplete3E())(cexOpt[0]));
                              } else {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(MatchIncomplete2E())(cexOpt[0]));
                              }
                            }

                            if (isComp) {
                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(MatchIncomplete4E()));
                            }

                            break;
                          }

                        case 3:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(EnumMatchIncomplete1E()));

                            if (cexOpt$$1 != null) {
                              if (cexOpt$$1[1]) {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(MatchIncomplete3E())(cexOpt$$1[0]));
                              } else {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(MatchIncomplete2E())(cexOpt$$1[0]));
                              }
                            }

                            if (isComp$$1) {
                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(MatchIncomplete4E()));
                            }

                            break;
                          }

                        case 4:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(RuleNeverMatchedE()));
                            break;
                          }

                        case 5:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ValNotMutableE())((0, _tast.ValRef$$get_DisplayName)(valRef)));
                            break;
                          }

                        case 6:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ValNotLocalE()));
                            break;
                          }

                        case 7:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(Obsolete1E()));

                            if (s$$11 !== "") {
                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(Obsolete2E())(s$$11));
                            }

                            break;
                          }

                        case 8:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ExperimentalE())(s$$12));
                            break;
                          }

                        case 9:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(PossibleUnverifiableCodeE()));
                            break;
                          }

                        case 10:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, msg$$3);
                            break;
                          }

                        case 11:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(DeprecatedE())(s$$13));
                            break;
                          }

                        case 12:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(LibraryUseOnlyE()));
                            break;
                          }

                        case 13:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(MissingFieldsE())((0, _String.join)(",", ...sl) + "."));
                            break;
                          }

                        case 14:
                          {
                            const denv$$35 = new _TastOps.DisplayEnv(denv$$34.includeStaticParametersInTypeNames, denv$$34.openTopPathsSorted, denv$$34.openTopPathsRaw, denv$$34.shortTypeNames, denv$$34.suppressNestedTypes, denv$$34.maxMembers, denv$$34.showObsoleteMembers, denv$$34.showHiddenMembers, denv$$34.showTyparBinding, true, denv$$34.suppressInlineKeyword, denv$$34.suppressMutableKeyword, denv$$34.showMemberContainers, denv$$34.shortConstraints, denv$$34.useColonForReturnType, denv$$34.showAttributes, denv$$34.showOverrides, denv$$34.showConstraintTyparAnnotations, denv$$34.abbreviateAdditionalConstraints, denv$$34.showTyparDefaultConstraints, denv$$34.g, denv$$34.contextAccessibility, denv$$34.generatedValueLayout);
                            const tau = (0, _tast.Val$$get_TauType)(v$$2);

                            if (hassig) {
                              if ((0, _TastOps.isFunTy)(denv$$35.g, tau) ? (0, _tast.ValReprInfo$$get_HasNoArgs)((0, _tast.arityOfVal)(v$$2)) : false) {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ValueRestriction1E())((0, _tast.Val$$get_DisplayName)(v$$2))((0, _NicePrint.stringOfQualifiedValOrMember)(denv$$35, v$$2))((0, _tast.Val$$get_DisplayName)(v$$2)));
                              } else {
                                StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ValueRestriction2E())((0, _tast.Val$$get_DisplayName)(v$$2))((0, _NicePrint.stringOfQualifiedValOrMember)(denv$$35, v$$2))((0, _tast.Val$$get_DisplayName)(v$$2)));
                              }
                            } else {
                              const matchValue$$7 = (0, _tast.Val$$get_MemberInfo)(v$$2);
                              var $target$$73, membInfo$$1;

                              if (matchValue$$7 != null) {
                                if (membInfo = matchValue$$7, membInfo.MemberFlags.MemberKind.tag === 3 ? true : membInfo.MemberFlags.MemberKind.tag === 4 ? true : membInfo.MemberFlags.MemberKind.tag === 1 ? true : false) {
                                  $target$$73 = 0;
                                  membInfo$$1 = matchValue$$7;
                                } else {
                                  $target$$73 = 1;
                                }
                              } else {
                                $target$$73 = 1;
                              }

                              switch ($target$$73) {
                                case 0:
                                  {
                                    StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ValueRestriction3E())((0, _NicePrint.stringOfQualifiedValOrMember)(denv$$35, v$$2)));
                                    break;
                                  }

                                case 1:
                                  {
                                    if ((0, _TastOps.isFunTy)(denv$$35.g, tau) ? (0, _tast.ValReprInfo$$get_HasNoArgs)((0, _tast.arityOfVal)(v$$2)) : false) {
                                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ValueRestriction4E())((0, _tast.Val$$get_DisplayName)(v$$2))((0, _NicePrint.stringOfQualifiedValOrMember)(denv$$35, v$$2))((0, _tast.Val$$get_DisplayName)(v$$2)));
                                    } else {
                                      StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ValueRestriction5E())((0, _tast.Val$$get_DisplayName)(v$$2))((0, _NicePrint.stringOfQualifiedValOrMember)(denv$$35, v$$2))((0, _tast.Val$$get_DisplayName)(v$$2)));
                                    }

                                    break;
                                  }
                              }
                            }

                            break;
                          }

                        case 15:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(RecoverableParseErrorE()));
                            break;
                          }

                        case 16:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(ReservedKeywordE())(s$$14));
                            break;
                          }

                        case 17:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(IndentationProblemE())(s$$15));
                            break;
                          }

                        case 18:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(OverrideInIntrinsicAugmentationE()));
                            break;
                          }

                        case 19:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(OverrideInExtrinsicAugmentationE()));
                            break;
                          }

                        case 20:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(IntfImplInIntrinsicAugmentationE()));
                            break;
                          }

                        case 21:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(IntfImplInExtrinsicAugmentationE()));
                            break;
                          }

                        case 22:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UnresolvedReferenceNoRangeE())(assemblyname));
                            break;
                          }

                        case 23:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(UnresolvedPathReferenceNoRangeE())(pathname)(assemblyname$$1));
                            break;
                          }

                        case 24:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, fullText);
                            break;
                          }

                        case 25:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$optsDCLOHtmlDoc$$Z721C83C5)(optionName));
                            break;
                          }

                        case 26:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$optsDCLODeprecatedSuggestAlternative$$Z384F8060)(optionName$$1, altOption));
                            break;
                          }

                        case 27:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$optsInternalNoDescription$$Z721C83C5)(optionName$$2));
                            break;
                          }

                        case 28:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$optsDCLONoDescription$$Z721C83C5)(optionName$$3));
                            break;
                          }

                        case 29:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(HashIncludeNotAllowedInNonScriptE()));
                            break;
                          }

                        case 30:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(HashReferenceNotAllowedInNonScriptE()));
                            break;
                          }

                        case 31:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(HashDirectiveNotAllowedInNonScriptE()));
                            break;
                          }

                        case 32:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(FileNameNotResolvedE())(filename)(locations));
                            break;
                          }

                        case 33:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(AssemblyNotResolvedE())(originalName));
                            break;
                          }

                        case 34:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _FSComp.SR$$$buildUnexpectedFileNameCharacter$$Z384F8060)(fileName$$1, invalidChar$$1)[1]);
                            break;
                          }

                        case 35:
                          {
                            const Emit = function Emit(l) {
                              OutputExceptionR(os$$1, (0, _List.head)(l));
                            };

                            if ((0, _Util.equals)(errors, (0, _Types.L)())) {
                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(HashLoadedSourceHasIssues1E()));
                              Emit(warnings);
                            } else {
                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(HashLoadedSourceHasIssues2E()));
                              Emit(errors);
                            }

                            break;
                          }

                        case 36:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(HashLoadedScriptConsideredSourceE()));
                            break;
                          }

                        case 37:
                          {
                            if (fileNameOption == null) {
                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(InvalidInternalsVisibleToAssemblyName2E())(badName));
                            } else {
                              const file = fileNameOption;
                              StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(InvalidInternalsVisibleToAssemblyName1E())(badName)(file));
                            }

                            break;
                          }

                        case 38:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(LoadedSourceNotFoundIgnoringE())(filename$$1));
                            break;
                          }

                        case 39:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(MSBuildReferenceResolutionErrorE())(message)(code));
                            break;
                          }

                        case 40:
                          {
                            StringBuilder$$Append$$Z721C83C5(os$$1, (0, _adapters.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format)(TargetInvocationExceptionWrapperE())(e$$25.message));
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
  };

  OutputExceptionR(os, err$$5.Exception);
}

function OutputPhasedDiagnostic(os$$2, err$$6, flattenErrors) {
  const buf$$1 = StringBuilder$$$$002Ector();
  OutputPhasedErrorR(buf$$1, err$$6);
  const s$$16 = flattenErrors ? (0, _ErrorLogger.NormalizeErrorString)((0, _Util.toString)(buf$$1)) : (0, _Util.toString)(buf$$1);
  (0, _System.StringBuilder$$Append$$Z721C83C5)(os$$2, s$$16);
}

function SanitizeFileName(fileName$$2, implicitIncludeDir) {
  try {
    const fullPath = (0, _illib.Shim$$$FileSystem)().GetFullPathShim(fileName$$2);
    const currentDir = implicitIncludeDir;
    return !(0, _String.startsWith)(fullPath, currentDir, 4) ? fullPath : (0, _String.replace)(fullPath, currentDir + "\\", "");
  } catch (matchValue$$9) {
    return fileName$$2;
  }
}

function GetWarningNumber(m$$18, s$$17) {
  try {
    if ((0, _Char.isDigit)(s$$17[0])) {
      return (0, _Int.parse)(s$$17);
    } else if ((0, _String.startsWith)(s$$17, "FS", 4) === true) {
      throw new Error();
    } else {
      return null;
    }
  } catch (err$$7) {
    (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$buildInvalidWarningNumber$$Z721C83C5)(s$$17), m$$18));
    return null;
  }
}

function ComputeMakePathAbsolute(implicitIncludeDir$$1, path$$1) {
  try {
    const path$$2 = (0, _String.replace)(path$$1, "\"", "");
    return !(0, _illib.Shim$$$FileSystem)().IsPathRootedShim(path$$2) ? (0, _adapters.System$002EIO$002EPath$$$Combine)(implicitIncludeDir$$1, path$$2) : path$$2;
  } catch (matchValue$$10) {
    if (false) {
      return path$$1;
    } else {
      throw matchValue$$10;
    }
  }
}

const CompilerTarget = (0, _Types.declare)(function CompilerTarget(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CompilerTarget = CompilerTarget;

function CompilerTarget$$get_IsExe(x$$6) {
  var $target$$74;

  switch (x$$6.tag) {
    case 1:
    case 0:
      $target$$74 = 0;
      break;

    default:
      $target$$74 = 1;
  }

  switch ($target$$74) {
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

const ResolveAssemblyReferenceMode = (0, _Types.declare)(function ResolveAssemblyReferenceMode(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ResolveAssemblyReferenceMode = ResolveAssemblyReferenceMode;
const CopyFSharpCoreFlag = (0, _Types.declare)(function CopyFSharpCoreFlag(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CopyFSharpCoreFlag = CopyFSharpCoreFlag;
const TimeStampCache = (0, _Types.declare)(function TimeStampCache(defaultTimeStamp) {
  const $this$$9 = this;
  $this$$9.defaultTimeStamp = defaultTimeStamp;
  $this$$9.files = new Map([]);
  $this$$9.projects = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp2.HashIdentity$$$Reference)()));
});
exports.TimeStampCache = TimeStampCache;

function TimeStampCache$$$$002Ector$$7F9DDECF(defaultTimeStamp) {
  return this != null ? TimeStampCache.call(this, defaultTimeStamp) : new TimeStampCache(defaultTimeStamp);
}

function TimeStampCache$$GetFileTimeStamp$$Z721C83C5(cache, fileName$$3) {
  const patternInput$$31 = (0, _Util.tryGetValue)(cache.files, fileName$$3, null);

  if (patternInput$$31[0]) {
    return patternInput$$31[1];
  } else {
    const v$$4 = cache.defaultTimeStamp;
    cache.files.set(fileName$$3, v$$4);
    return v$$4;
  }
}

function TimeStampCache$$GetProjectReferenceTimeStamp$$Z5776D575(cache$$1, pr, ctok) {
  const patternInput$$32 = (0, _Util.tryGetValue)(cache$$1.projects, pr, null);

  if (patternInput$$32[0]) {
    return patternInput$$32[1];
  } else {
    const v$$6 = (0, _Option.defaultArg)(pr.TryGetLogicalTimeStamp(cache$$1, ctok), cache$$1.defaultTimeStamp);
    cache$$1.projects.set(pr, v$$6);
    return v$$6;
  }
}

const AssemblyReference = (0, _Types.declare)(function AssemblyReference(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AssemblyReference = AssemblyReference;

function AssemblyReference$$get_Range(x$$7) {
  const m$$19 = x$$7.fields[0];
  return m$$19;
}

function AssemblyReference$$get_Text(x$$8) {
  const text = x$$8.fields[1];
  return text;
}

function AssemblyReference$$get_ProjectReference(x$$9) {
  const contents = x$$9.fields[2];
  return contents;
}

function AssemblyReference$$SimpleAssemblyNameIs$$Z721C83C5(x$$10, name$$3) {
  if ((0, _String.compare)((0, _filename.fileNameWithoutExtensionWithValidate)(false, AssemblyReference$$get_Text(x$$10)), name$$3, 5) === 0) {
    return true;
  } else {
    const text$$1 = AssemblyReference$$get_Text(x$$10).toLowerCase();

    if (((!(text$$1.indexOf("/") >= 0) ? !(text$$1.indexOf("\\") >= 0) : false) ? !(text$$1.indexOf(".dll") >= 0) : false) ? !(text$$1.indexOf(".exe") >= 0) : false) {
      try {
        const aname = (0, _adapters.System$002EReflection$002EAssemblyName$$$$002Ector$$Z721C83C5)(AssemblyReference$$get_Text(x$$10));
        return (0, _adapters.System$002EReflection$002EAssemblyName$$get_Name)(aname) === name$$3;
      } catch (matchValue$$11) {
        return false;
      }
    } else {
      return false;
    }
  }
}

AssemblyReference.prototype.toString = function () {
  const x$$11 = this;
  return (0, _String.toText)((0, _String.printf)("AssemblyReference(%s)"))(AssemblyReference$$get_Text(x$$11));
};

const UnresolvedAssemblyReference = (0, _Types.declare)(function UnresolvedAssemblyReference(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.UnresolvedAssemblyReference = UnresolvedAssemblyReference;
const ImportedBinary = (0, _Types.declare)(function ImportedBinary(arg1, arg2, arg3, arg4) {
  this.FileName = arg1;
  this.RawMetadata = arg2;
  this.ILAssemblyRefs = arg3;
  this.ILScopeRef = arg4;
}, _Types.Record);
exports.ImportedBinary = ImportedBinary;
const ImportedAssembly = (0, _Types.declare)(function ImportedAssembly(arg1, arg2, arg3, arg4, arg5) {
  this.ILScopeRef = arg1;
  this.FSharpViewOfMetadata = arg2;
  this.AssemblyAutoOpenAttributes = arg3;
  this.AssemblyInternalsVisibleToAttributes = arg4;
  this.FSharpOptimizationData = arg5;
}, _Types.Record);
exports.ImportedAssembly = ImportedAssembly;
const AvailableImportedAssembly = (0, _Types.declare)(function AvailableImportedAssembly(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AvailableImportedAssembly = AvailableImportedAssembly;

function ReportWarning(options, err$$8) {
  if (warningOn(err$$8, options.WarnLevel, options.WarnOn)) {
    return !(0, _List.contains)(GetDiagnosticNumber(err$$8), options.WarnOff, {
      Equals($x$$10, $y$$11) {
        return $x$$10 === $y$$11;
      },

      GetHashCode: _Util.structuralHash
    });
  } else {
    return false;
  }
}

function ReportWarningAsError(options$$1, err$$9) {
  if (warningOn(err$$9, options$$1.WarnLevel, options$$1.WarnOn) ? !(0, _List.contains)(GetDiagnosticNumber(err$$9), options$$1.WarnAsWarn, {
    Equals($x$$12, $y$$13) {
      return $x$$12 === $y$$13;
    },

    GetHashCode: _Util.structuralHash
  }) : false) {
    if (options$$1.GlobalWarnAsError ? !(0, _List.contains)(GetDiagnosticNumber(err$$9), options$$1.WarnOff, {
      Equals($x$$14, $y$$15) {
        return $x$$14 === $y$$15;
      },

      GetHashCode: _Util.structuralHash
    }) : false) {
      return true;
    } else {
      return (0, _List.contains)(GetDiagnosticNumber(err$$9), options$$1.WarnAsError, {
        Equals($x$$16, $y$$17) {
          return $x$$16 === $y$$17;
        },

        GetHashCode: _Util.structuralHash
      });
    }
  } else {
    return false;
  }
}

function GetScopedPragmasForHashDirective(hd) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    if (hd.fields[0] === "nowarn") {
      const numbers = hd.fields[1];
      const m$$20 = hd.fields[2];
      return (0, _Seq.collect)(function (s$$18) {
        const matchValue$$12 = GetWarningNumber(m$$20, s$$18);

        if (matchValue$$12 != null) {
          const n$$6 = matchValue$$12 | 0;
          return (0, _Seq.singleton)(new _ast.ScopedPragma(0, "WarningOff", m$$20, n$$6));
        } else {
          return (0, _Seq.empty)();
        }
      }, numbers);
    } else {
      return (0, _Seq.empty)();
    }
  }));
}

function GetScopedPragmasForInput(input) {
  if (input.tag === 0) {
    const pragmas$$1 = input.fields[0].fields[3];
    return pragmas$$1;
  } else {
    const pragmas = input.fields[0].fields[2];
    return pragmas;
  }
}

const ErrorLoggerFilteringByScopedPragmas = (0, _Types.declare)(function ErrorLoggerFilteringByScopedPragmas(checkFile, scopedPragmas, errorLogger) {
  const $this$$18 = this;

  _ErrorLogger.ErrorLogger$$$$002Ector$$Z721C83C5.call($this$$18, "ErrorLoggerFilteringByScopedPragmas");

  $this$$18.checkFile = checkFile;
  $this$$18.scopedPragmas = scopedPragmas;
  $this$$18.errorLogger = errorLogger;
}, _ErrorLogger.ErrorLogger);
exports.ErrorLoggerFilteringByScopedPragmas = ErrorLoggerFilteringByScopedPragmas;

function ErrorLoggerFilteringByScopedPragmas$$$$002Ector$$617428A0(checkFile, scopedPragmas, errorLogger) {
  return this != null ? ErrorLoggerFilteringByScopedPragmas.call(this, checkFile, scopedPragmas, errorLogger) : new ErrorLoggerFilteringByScopedPragmas(checkFile, scopedPragmas, errorLogger);
}

ErrorLoggerFilteringByScopedPragmas.prototype.DiagnosticSink = function (phasedError, isError) {
  const x$$12 = this;

  if (isError) {
    x$$12.errorLogger.DiagnosticSink(phasedError, isError);
  } else {
    let report;
    const warningNum = GetDiagnosticNumber(phasedError) | 0;
    const matchValue$$13 = GetRangeOfDiagnostic(phasedError);

    if (matchValue$$13 == null) {
      report = true;
    } else {
      const m$$21 = matchValue$$13;
      report = !(0, _List.exists)(function predicate$$2(pragma) {
        const warningNumFromPragma = pragma.fields[1] | 0;
        const pragmaRange = pragma.fields[0];

        if (warningNum === warningNumFromPragma ? !x$$12.checkFile ? true : (0, _range.range$$get_FileIndex)(m$$21) === (0, _range.range$$get_FileIndex)(pragmaRange) : false) {
          return (0, _range.posGeq)((0, _range.range$$get_Start)(m$$21), (0, _range.range$$get_Start)(pragmaRange));
        } else {
          return false;
        }
      }, x$$12.scopedPragmas);
    }

    if (report) {
      x$$12.errorLogger.DiagnosticSink(phasedError, false);
    }
  }
};

Object.defineProperty(ErrorLoggerFilteringByScopedPragmas.prototype, "ErrorCount", {
  "get": function () {
    const x$$13 = this;
    return x$$13.errorLogger.ErrorCount | 0;
  }
});

function GetErrorLoggerFilteringByScopedPragmas(checkFile$$1, scopedPragmas$$1, errorLogger$$1) {
  return ErrorLoggerFilteringByScopedPragmas$$$$002Ector$$617428A0(checkFile$$1, scopedPragmas$$1, errorLogger$$1);
}

function CanonicalizeFilename(filename$$2) {
  const basic = (0, _filename.fileNameOfPath)(filename$$2);
  return (0, _illib.String$$$capitalize)((() => {
    try {
      return (0, _filename.chopExtension)(basic);
    } catch (matchValue$$14) {
      return basic;
    }
  })());
}

function IsScript(filename$$3) {
  const lower = (0, _illib.String$$$lowercase)(filename$$3);
  return (0, _List.exists)(function predicate$$3(arg10$0040) {
    return (0, _filename.checkSuffix)(lower, arg10$0040);
  }, FSharpScriptFileSuffixes);
}

function QualFileNameOfModuleName(m$$22, filename$$4, modname) {
  return new _ast.QualifiedNameOfFile(0, "QualifiedNameOfFile", (0, _ast.mkSynId)(m$$22, (0, _ast.textOfLid)(modname) + (IsScript(filename$$4) ? "$fsx" : "")));
}

function QualFileNameOfFilename(m$$23, filename$$5) {
  return new _ast.QualifiedNameOfFile(0, "QualifiedNameOfFile", (0, _ast.mkSynId)(m$$23, CanonicalizeFilename(filename$$5) + (IsScript(filename$$5) ? "$fsx" : "")));
}

function ComputeQualifiedNameOfFileFromUniquePath(m$$24, p) {
  return new _ast.QualifiedNameOfFile(0, "QualifiedNameOfFile", (0, _ast.mkSynId)(m$$24, (0, _String.join)("_", ...p)));
}

function QualFileNameOfSpecs(filename$$6, specs) {
  var $target$$75, m$$25, modname$$1, m$$26;

  if (specs.tail != null) {
    if (specs.head.fields[2]) {
      if (specs.tail.tail == null) {
        $target$$75 = 0;
        m$$25 = specs.head.fields[7];
        modname$$1 = specs.head.fields[0];
      } else {
        $target$$75 = 2;
      }
    } else if (specs.tail.tail == null) {
      $target$$75 = 1;
      m$$26 = specs.head.fields[7];
    } else {
      $target$$75 = 2;
    }
  } else {
    $target$$75 = 2;
  }

  switch ($target$$75) {
    case 0:
      {
        return QualFileNameOfModuleName(m$$25, filename$$6, modname$$1);
      }

    case 1:
      {
        return QualFileNameOfFilename(m$$26, filename$$6);
      }

    case 2:
      {
        return QualFileNameOfFilename((0, _range.mkRange)(filename$$6, _range.pos0, _range.pos0), filename$$6);
      }
  }
}

function QualFileNameOfImpls(filename$$7, specs$$1) {
  var $target$$76, m$$27, modname$$2, m$$28;

  if (specs$$1.tail != null) {
    if (specs$$1.head.fields[2]) {
      if (specs$$1.tail.tail == null) {
        $target$$76 = 0;
        m$$27 = specs$$1.head.fields[7];
        modname$$2 = specs$$1.head.fields[0];
      } else {
        $target$$76 = 2;
      }
    } else if (specs$$1.tail.tail == null) {
      $target$$76 = 1;
      m$$28 = specs$$1.head.fields[7];
    } else {
      $target$$76 = 2;
    }
  } else {
    $target$$76 = 2;
  }

  switch ($target$$76) {
    case 0:
      {
        return QualFileNameOfModuleName(m$$27, filename$$7, modname$$2);
      }

    case 1:
      {
        return QualFileNameOfFilename(m$$28, filename$$7);
      }

    case 2:
      {
        return QualFileNameOfFilename((0, _range.mkRange)(filename$$7, _range.pos0, _range.pos0), filename$$7);
      }
  }
}

function PrepandPathToQualFileName(x$$14, _arg1$$3) {
  const q = _arg1$$3.fields[0];
  return ComputeQualifiedNameOfFileFromUniquePath((0, _ast.Ident$$get_idRange)(q), (0, _List.append)((0, _ast.pathOfLid)(x$$14), (0, _Types.L)((0, _ast.Ident$$get_idText)(q), (0, _Types.L)())));
}

function PrepandPathToImpl(x$$15, _arg1$$4) {
  const p$$1 = _arg1$$4.fields[0];
  const h = _arg1$$4.fields[7];
  const g$$8 = _arg1$$4.fields[6];
  const f$$10 = _arg1$$4.fields[5];
  const e$$26 = _arg1$$4.fields[4];
  const d$$1 = _arg1$$4.fields[3];
  const c$$1 = _arg1$$4.fields[2];
  const b$$1 = _arg1$$4.fields[1];
  return new _ast.SynModuleOrNamespace(0, "SynModuleOrNamespace", (0, _List.append)(x$$15, p$$1), b$$1, c$$1, d$$1, e$$26, f$$10, g$$8, h);
}

function PrepandPathToSpec(x$$16, _arg1$$5) {
  const p$$2 = _arg1$$5.fields[0];
  const h$$1 = _arg1$$5.fields[7];
  const g$$9 = _arg1$$5.fields[6];
  const f$$11 = _arg1$$5.fields[5];
  const e$$27 = _arg1$$5.fields[4];
  const d$$2 = _arg1$$5.fields[3];
  const c$$2 = _arg1$$5.fields[2];
  const b$$2 = _arg1$$5.fields[1];
  return new _ast.SynModuleOrNamespaceSig(0, "SynModuleOrNamespaceSig", (0, _List.append)(x$$16, p$$2), b$$2, c$$2, d$$2, e$$27, f$$11, g$$9, h$$1);
}

function PrependPathToInput(x$$17, inp) {
  if (inp.tag === 1) {
    const specs$$2 = inp.fields[0].fields[4];
    const q$$2 = inp.fields[0].fields[1];
    const hd$$2 = inp.fields[0].fields[3];
    const d$$4 = inp.fields[0].fields[2];
    const b$$4 = inp.fields[0].fields[0];
    return new _ast.ParsedInput(1, "SigFile", new _ast.ParsedSigFileInput(0, "ParsedSigFileInput", b$$4, PrepandPathToQualFileName(x$$17, q$$2), d$$4, hd$$2, (0, _List.map)(function (arg10$0040$$2) {
      return PrepandPathToSpec(x$$17, arg10$0040$$2);
    }, specs$$2)));
  } else {
    const q$$1 = inp.fields[0].fields[2];
    const impls = inp.fields[0].fields[5];
    const hd$$1 = inp.fields[0].fields[4];
    const e$$28 = inp.fields[0].fields[6];
    const d$$3 = inp.fields[0].fields[3];
    const c$$3 = inp.fields[0].fields[1];
    const b$$3 = inp.fields[0].fields[0];
    return new _ast.ParsedInput(0, "ImplFile", new _ast.ParsedImplFileInput(0, "ParsedImplFileInput", b$$3, c$$3, PrepandPathToQualFileName(x$$17, q$$1), d$$3, hd$$1, (0, _List.map)(function (arg10$0040$$1) {
      return PrepandPathToImpl(x$$17, arg10$0040$$1);
    }, impls), e$$28));
  }
}

function ComputeAnonModuleName(check, defaultNamespace, filename$$8, m$$29) {
  const modname$$3 = CanonicalizeFilename(filename$$8);

  if (check ? !(0, _Seq.forAll)(function predicate$$4(c$$4) {
    if ((0, _Char.isLetterOrDigit)(c$$4)) {
      return true;
    } else {
      return c$$4 === "_";
    }
  }, modname$$3.split("")) : false) {
    if (!((0, _String.endsWith)(filename$$8, "fsx", 5) ? true : (0, _String.endsWith)(filename$$8, "fsscript", 5))) {
      (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$buildImplicitModuleIsNotLegalIdentifier$$Z384F8060)(modname$$3, (0, _filename.fileNameOfPath)(filename$$8)), m$$29));
    }
  }

  let combined;

  if (defaultNamespace != null) {
    const ns = defaultNamespace;
    combined = (0, _ast.textOfPath)([ns, modname$$3]);
  } else {
    combined = modname$$3;
  }

  let anonymousModuleNameRange;
  const filename$$9 = (0, _range.range$$get_FileName)(m$$29);
  anonymousModuleNameRange = (0, _range.mkRange)(filename$$9, _range.pos0, _range.pos0);
  return (0, _ast.pathToSynLid)(anonymousModuleNameRange, (0, _il.splitNamespace)(combined));
}

function PostParseModuleImpl(_i, defaultNamespace$$1, isLastCompiland, filename$$10, impl$$1) {
  var rest$$2, id$$8, id$$4, rest, id$$6;

  switch (impl$$1.tag) {
    case 0:
      {
        const m$$31 = impl$$1.fields[1];
        const defs = impl$$1.fields[0];
        const isLast = isLastCompiland[0];
        const isExe = isLastCompiland[1];
        const lower$$1 = (0, _illib.String$$$lowercase)(filename$$10);

        if (!(isLast ? isExe : false) ? !(0, _List.exists)(function predicate$$5(arg10$0040$$3) {
          return (0, _filename.checkSuffix)(lower$$1, arg10$0040$$3);
        }, doNotRequireNamespaceOrModuleSuffixes) : false) {
          var $target$$77;

          if (defs.tail != null) {
            if (defs.head.tag === 1) {
              $target$$77 = 0;
            } else {
              $target$$77 = 1;
            }
          } else {
            $target$$77 = 1;
          }

          switch ($target$$77) {
            case 0:
              {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$noEqualSignAfterModule)(), (0, _range.trimRangeToLine)(m$$31)));
                break;
              }

            case 1:
              {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$buildMultiFileRequiresNamespaceOrModule)(), (0, _range.trimRangeToLine)(m$$31)));
                break;
              }
          }
        }

        const modname$$4 = ComputeAnonModuleName(!(defs.tail == null), defaultNamespace$$1, filename$$10, (0, _range.trimRangeToLine)(m$$31));
        return new _ast.SynModuleOrNamespace(0, "SynModuleOrNamespace", modname$$4, false, true, defs, (0, _ast.PreXmlDoc$$$get_Empty)(), (0, _Types.L)(), null, m$$31);
      }

    case 2:
      {
        const m$$32 = impl$$1.fields[6];
        const lid$$2 = impl$$1.fields[0];
        const e$$29 = impl$$1.fields[5];
        const d$$5 = impl$$1.fields[4];
        const c$$5 = impl$$1.fields[3];
        const b$$5 = impl$$1.fields[2];
        const a$$1 = impl$$1.fields[1];
        const lid$$3 = lid$$2.tail != null ? (rest$$2 = lid$$2.tail, (id$$8 = lid$$2.head, (0, _ast.Ident$$get_idText)(id$$8) === "`global`")) ? lid$$2.tail : lid$$2 : lid$$2;
        return new _ast.SynModuleOrNamespace(0, "SynModuleOrNamespace", lid$$3, a$$1, b$$5, c$$5, d$$5, e$$29, null, m$$32);
      }

    default:
      {
        const xmlDoc = impl$$1.fields[0].fields[4];
        const m$$30 = impl$$1.fields[0].fields[7];
        const lid = impl$$1.fields[0].fields[0];
        const isRec = impl$$1.fields[0].fields[1];
        const isModule = impl$$1.fields[0].fields[2];
        const decls = impl$$1.fields[0].fields[3];
        const attribs = impl$$1.fields[0].fields[5];
        const access = impl$$1.fields[0].fields[6];
        const lid$$1 = lid.tail != null ? lid.tail.tail == null ? (id$$4 = lid.head, isModule ? (0, _ast.Ident$$get_idText)(id$$4) === "`global`" : false) ? (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$buildInvalidModuleOrNamespaceName)(), (0, _ast.Ident$$get_idRange)(lid.head))) : lid.tail != null ? (rest = lid.tail, (id$$6 = lid.head, (0, _ast.Ident$$get_idText)(id$$6) === "`global`")) ? lid.tail : lid : lid : lid.tail != null ? (rest = lid.tail, (id$$6 = lid.head, (0, _ast.Ident$$get_idText)(id$$6) === "`global`")) ? lid.tail : lid : lid : lid.tail != null ? (rest = lid.tail, (id$$6 = lid.head, (0, _ast.Ident$$get_idText)(id$$6) === "`global`")) ? lid.tail : lid : lid;
        return new _ast.SynModuleOrNamespace(0, "SynModuleOrNamespace", lid$$1, isRec, isModule, decls, xmlDoc, attribs, access, m$$30);
      }
  }
}

function PostParseModuleSpec(_i$$1, defaultNamespace$$2, isLastCompiland$$1, filename$$11, intf) {
  var rest$$6, id$$14, id$$10, rest$$4, id$$12;

  switch (intf.tag) {
    case 0:
      {
        const m$$34 = intf.fields[1];
        const defs$$1 = intf.fields[0];
        const isLast$$1 = isLastCompiland$$1[0];
        const isExe$$1 = isLastCompiland$$1[1];
        const lower$$2 = (0, _illib.String$$$lowercase)(filename$$11);

        if (!(isLast$$1 ? isExe$$1 : false) ? !(0, _List.exists)(function predicate$$6(arg10$0040$$4) {
          return (0, _filename.checkSuffix)(lower$$2, arg10$0040$$4);
        }, doNotRequireNamespaceOrModuleSuffixes) : false) {
          var $target$$78;

          if (defs$$1.tail != null) {
            if (defs$$1.head.tag === 1) {
              $target$$78 = 0;
            } else {
              $target$$78 = 1;
            }
          } else {
            $target$$78 = 1;
          }

          switch ($target$$78) {
            case 0:
              {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$noEqualSignAfterModule)(), m$$34));
                break;
              }

            case 1:
              {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$buildMultiFileRequiresNamespaceOrModule)(), m$$34));
                break;
              }
          }
        }

        const modname$$5 = ComputeAnonModuleName(!(defs$$1.tail == null), defaultNamespace$$2, filename$$11, (0, _range.trimRangeToLine)(m$$34));
        return new _ast.SynModuleOrNamespaceSig(0, "SynModuleOrNamespaceSig", modname$$5, false, true, defs$$1, (0, _ast.PreXmlDoc$$$get_Empty)(), (0, _Types.L)(), null, m$$34);
      }

    case 2:
      {
        const m$$35 = intf.fields[6];
        const lid$$6 = intf.fields[0];
        const e$$30 = intf.fields[5];
        const d$$6 = intf.fields[4];
        const c$$6 = intf.fields[3];
        const b$$6 = intf.fields[2];
        const a$$2 = intf.fields[1];
        const lid$$7 = lid$$6.tail != null ? (rest$$6 = lid$$6.tail, (id$$14 = lid$$6.head, (0, _ast.Ident$$get_idText)(id$$14) === "`global`")) ? lid$$6.tail : lid$$6 : lid$$6;
        return new _ast.SynModuleOrNamespaceSig(0, "SynModuleOrNamespaceSig", lid$$7, a$$2, b$$6, c$$6, d$$6, e$$30, null, m$$35);
      }

    default:
      {
        const xmlDoc$$1 = intf.fields[0].fields[4];
        const m$$33 = intf.fields[0].fields[7];
        const lid$$4 = intf.fields[0].fields[0];
        const isRec$$1 = intf.fields[0].fields[1];
        const isModule$$1 = intf.fields[0].fields[2];
        const decls$$1 = intf.fields[0].fields[3];
        const attribs$$1 = intf.fields[0].fields[5];
        const access$$1 = intf.fields[0].fields[6];
        const lid$$5 = lid$$4.tail != null ? lid$$4.tail.tail == null ? (id$$10 = lid$$4.head, isModule$$1 ? (0, _ast.Ident$$get_idText)(id$$10) === "`global`" : false) ? (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$buildInvalidModuleOrNamespaceName)(), (0, _ast.Ident$$get_idRange)(lid$$4.head))) : lid$$4.tail != null ? (rest$$4 = lid$$4.tail, (id$$12 = lid$$4.head, (0, _ast.Ident$$get_idText)(id$$12) === "`global`")) ? lid$$4.tail : lid$$4 : lid$$4 : lid$$4.tail != null ? (rest$$4 = lid$$4.tail, (id$$12 = lid$$4.head, (0, _ast.Ident$$get_idText)(id$$12) === "`global`")) ? lid$$4.tail : lid$$4 : lid$$4 : lid$$4.tail != null ? (rest$$4 = lid$$4.tail, (id$$12 = lid$$4.head, (0, _ast.Ident$$get_idText)(id$$12) === "`global`")) ? lid$$4.tail : lid$$4 : lid$$4;
        return new _ast.SynModuleOrNamespaceSig(0, "SynModuleOrNamespaceSig", lid$$5, isRec$$1, isModule$$1, decls$$1, xmlDoc$$1, attribs$$1, access$$1, m$$33);
      }
  }
}

function PostParseModuleImpls(defaultNamespace$$3, filename$$12, isLastCompiland$$2, _arg1$$6) {
  var lid$$9;
  const impls$$1 = _arg1$$6.fields[1];
  const hashDirectives = _arg1$$6.fields[0];
  const matchValue$$15 = (0, _List.tryPick)(function chooser(_arg2$$1) {
    if (_arg2$$1.tag === 1) {
      const lid$$8 = _arg2$$1.fields[0].fields[0];
      return lid$$8;
    } else {
      return null;
    }
  }, (0, _List.reverse)(impls$$1));
  var $target$$79, lid$$10;

  if (matchValue$$15 != null) {
    if (lid$$9 = matchValue$$15, (0, _List.length)(impls$$1) > 1) {
      $target$$79 = 0;
      lid$$10 = matchValue$$15;
    } else {
      $target$$79 = 1;
    }
  } else {
    $target$$79 = 1;
  }

  switch ($target$$79) {
    case 0:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$buildMultipleToplevelModules)(), (0, _ast.rangeOfLid)(lid$$10)));
        break;
      }
  }

  const impls$$2 = (0, _List.mapIndexed)(function mapping$$2(i, x$$18) {
    return PostParseModuleImpl(i, defaultNamespace$$3, isLastCompiland$$2, filename$$12, x$$18);
  }, impls$$1);
  const qualName = QualFileNameOfImpls(filename$$12, impls$$2);
  const isScript = IsScript(filename$$12);
  const scopedPragmas$$2 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.append)((0, _Seq.collect)(function (matchValue$$16) {
      const decls$$2 = matchValue$$16.fields[3];
      return (0, _Seq.collect)(function (d$$7) {
        if (d$$7.tag === 8) {
          const hd$$3 = d$$7.fields[0];
          return GetScopedPragmasForHashDirective(hd$$3);
        } else {
          return (0, _Seq.empty)();
        }
      }, decls$$2);
    }, impls$$2), (0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (hd$$4) {
        return GetScopedPragmasForHashDirective(hd$$4);
      }, hashDirectives);
    }));
  }));
  return new _ast.ParsedInput(0, "ImplFile", new _ast.ParsedImplFileInput(0, "ParsedImplFileInput", filename$$12, isScript, qualName, scopedPragmas$$2, hashDirectives, impls$$2, isLastCompiland$$2));
}

function PostParseModuleSpecs(defaultNamespace$$4, filename$$13, isLastCompiland$$3, _arg1$$7) {
  var lid$$12;
  const specs$$3 = _arg1$$7.fields[1];
  const hashDirectives$$1 = _arg1$$7.fields[0];
  const matchValue$$17 = (0, _List.tryPick)(function chooser$$1(_arg2$$2) {
    if (_arg2$$2.tag === 1) {
      const lid$$11 = _arg2$$2.fields[0].fields[0];
      return lid$$11;
    } else {
      return null;
    }
  }, (0, _List.reverse)(specs$$3));
  var $target$$80, lid$$13;

  if (matchValue$$17 != null) {
    if (lid$$12 = matchValue$$17, (0, _List.length)(specs$$3) > 1) {
      $target$$80 = 0;
      lid$$13 = matchValue$$17;
    } else {
      $target$$80 = 1;
    }
  } else {
    $target$$80 = 1;
  }

  switch ($target$$80) {
    case 0:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$buildMultipleToplevelModules)(), (0, _ast.rangeOfLid)(lid$$13)));
        break;
      }
  }

  const specs$$4 = (0, _List.mapIndexed)(function mapping$$3(i$$1, x$$19) {
    return PostParseModuleSpec(i$$1, defaultNamespace$$4, isLastCompiland$$3, filename$$13, x$$19);
  }, specs$$3);
  const qualName$$1 = QualFileNameOfSpecs(filename$$13, specs$$4);
  const scopedPragmas$$3 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.append)((0, _Seq.collect)(function (matchValue$$18) {
      const decls$$3 = matchValue$$18.fields[3];
      return (0, _Seq.collect)(function (d$$8) {
        if (d$$8.tag === 6) {
          const hd$$5 = d$$8.fields[0];
          return GetScopedPragmasForHashDirective(hd$$5);
        } else {
          return (0, _Seq.empty)();
        }
      }, decls$$3);
    }, specs$$4), (0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (hd$$6) {
        return GetScopedPragmasForHashDirective(hd$$6);
      }, hashDirectives$$1);
    }));
  }));
  return new _ast.ParsedInput(1, "SigFile", new _ast.ParsedSigFileInput(0, "ParsedSigFileInput", filename$$13, qualName$$1, scopedPragmas$$3, hashDirectives$$1, specs$$4));
}

function DeduplicateModuleName(moduleNamesDict, paths, path$$3, qualifiedNameOfFile) {
  const count = ((0, _Set.FSharpSet$$Contains$$2B595)(paths, path$$3) ? (0, _Set.FSharpSet$$get_Count)(paths) : (0, _Set.FSharpSet$$get_Count)(paths) + 1) | 0;
  moduleNamesDict.set((0, _ast.QualifiedNameOfFile$$get_Text)(qualifiedNameOfFile), (0, _Set.add)(path$$3, paths));
  const id$$16 = (0, _ast.QualifiedNameOfFile$$get_Id)(qualifiedNameOfFile);

  if (count === 1) {
    return qualifiedNameOfFile;
  } else {
    return new _ast.QualifiedNameOfFile(0, "QualifiedNameOfFile", (0, _ast.Ident$$$$002Ector$$7EA1AB7)((0, _ast.Ident$$get_idText)(id$$16) + "___" + (0, _Util.int32ToString)(count), (0, _ast.Ident$$get_idRange)(id$$16)));
  }
}

function DeduplicateParsedInputModuleName(moduleNamesDict$$1, input$$1) {
  if (input$$1.tag === 1) {
    const scopedPragmas$$5 = input$$1.fields[0].fields[2];
    const qualifiedNameOfFile$$3 = input$$1.fields[0].fields[1];
    const modules$$1 = input$$1.fields[0].fields[4];
    const hashDirectives$$3 = input$$1.fields[0].fields[3];
    const fileName$$5 = input$$1.fields[0].fields[0];
    const path$$5 = (0, _adapters.System$002EIO$002EPath$$$GetDirectoryName)(fileName$$5);
    const matchValue$$20 = (0, _Util.tryGetValue)(moduleNamesDict$$1, (0, _ast.QualifiedNameOfFile$$get_Text)(qualifiedNameOfFile$$3), null);

    if (matchValue$$20[0]) {
      const qualifiedNameOfFile$$4 = DeduplicateModuleName(moduleNamesDict$$1, matchValue$$20[1], path$$5, qualifiedNameOfFile$$3);
      return new _ast.ParsedInput(1, "SigFile", new _ast.ParsedSigFileInput(0, "ParsedSigFileInput", fileName$$5, qualifiedNameOfFile$$4, scopedPragmas$$5, hashDirectives$$3, modules$$1));
    } else {
      moduleNamesDict$$1.set((0, _ast.QualifiedNameOfFile$$get_Text)(qualifiedNameOfFile$$3), (0, _Set.singleton)(path$$5, {
        Compare: _Util.comparePrimitives
      }));
      return input$$1;
    }
  } else {
    const scopedPragmas$$4 = input$$1.fields[0].fields[3];
    const qualifiedNameOfFile$$1 = input$$1.fields[0].fields[2];
    const modules = input$$1.fields[0].fields[5];
    const isScript$$1 = input$$1.fields[0].fields[1];
    const isLastCompiland$$4 = input$$1.fields[0].fields[6][0];
    const isExe$$2 = input$$1.fields[0].fields[6][1];
    const hashDirectives$$2 = input$$1.fields[0].fields[4];
    const fileName$$4 = input$$1.fields[0].fields[0];
    const path$$4 = (0, _adapters.System$002EIO$002EPath$$$GetDirectoryName)(fileName$$4);
    const matchValue$$19 = (0, _Util.tryGetValue)(moduleNamesDict$$1, (0, _ast.QualifiedNameOfFile$$get_Text)(qualifiedNameOfFile$$1), null);

    if (matchValue$$19[0]) {
      const qualifiedNameOfFile$$2 = DeduplicateModuleName(moduleNamesDict$$1, matchValue$$19[1], path$$4, qualifiedNameOfFile$$1);
      return new _ast.ParsedInput(0, "ImplFile", new _ast.ParsedImplFileInput(0, "ParsedImplFileInput", fileName$$4, isScript$$1, qualifiedNameOfFile$$2, scopedPragmas$$4, hashDirectives$$2, modules, [isLastCompiland$$4, isExe$$2]));
    } else {
      moduleNamesDict$$1.set((0, _ast.QualifiedNameOfFile$$get_Text)(qualifiedNameOfFile$$1), (0, _Set.singleton)(path$$4, {
        Compare: _Util.comparePrimitives
      }));
      return input$$1;
    }
  }
}

function ParseInput(lexer, errorLogger$$2, lexbuf, defaultNamespace$$5, filename$$14, isLastCompiland$$5) {
  const lower$$3 = (0, _illib.String$$$lowercase)(filename$$14);
  const delayLogger = (0, _ErrorLogger.CapturingErrorLogger$$$$002Ector$$Z721C83C5)("Parsing");
  const unwindEL = (0, _ErrorLogger.PushErrorLoggerPhaseUntilUnwind)(function (_arg1$$8) {
    return delayLogger;
  });

  try {
    const unwindBP = (0, _ErrorLogger.PushThreadBuildPhaseUntilUnwind)(new _ErrorLogger.BuildPhase(3, "Parse"));

    try {
      let scopedPragmas$$6 = (0, _Types.L)();

      try {
        let input$$2;

        if ((0, _List.exists)(function predicate$$7(arg10$0040$$5) {
          return (0, _filename.checkSuffix)(lower$$3, arg10$0040$$5);
        }, mlCompatSuffixes)) {
          (0, _ErrorLogger.mlCompatWarning)((0, _FSComp.SR$$$buildCompilingExtensionIsForML)(), _range.rangeStartup);
        }

        if ((0, _List.exists)(function predicate$$8(arg10$0040$$6) {
          return (0, _filename.checkSuffix)(lower$$3, arg10$0040$$6);
        }, FSharpImplFileSuffixes)) {
          const impl$$2 = (0, _pars.implementationFile)(lexer, lexbuf);
          input$$2 = PostParseModuleImpls(defaultNamespace$$5, filename$$14, isLastCompiland$$5, impl$$2);
        } else if ((0, _List.exists)(function predicate$$9(arg10$0040$$7) {
          return (0, _filename.checkSuffix)(lower$$3, arg10$0040$$7);
        }, FSharpSigFileSuffixes)) {
          const intfs = (0, _pars.signatureFile)(lexer, lexbuf);
          input$$2 = PostParseModuleSpecs(defaultNamespace$$5, filename$$14, isLastCompiland$$5, intfs);
        } else {
          input$$2 = (0, _ErrorLogger.ErrorLogger$002EError$$229D3F39)(delayLogger, new _ErrorLogger.Error$((0, _FSComp.SR$$$buildInvalidSourceFileExtension$$Z721C83C5)(filename$$14), _range.rangeStartup));
        }

        scopedPragmas$$6 = GetScopedPragmasForInput(input$$2);
        return input$$2;
      } finally {
        const filteringErrorLogger = ErrorLoggerFilteringByScopedPragmas$$$$002Ector$$617428A0(false, scopedPragmas$$6, errorLogger$$2);
        (0, _ErrorLogger.CapturingErrorLogger$$CommitDelayedDiagnostics$$7616EECC)(delayLogger, filteringErrorLogger);
      }
    } finally {
      if ((0, _Util.isDisposable)(unwindBP)) {
        unwindBP.Dispose();
      }
    }
  } finally {
    if ((0, _Util.isDisposable)(unwindEL)) {
      unwindEL.Dispose();
    }
  }
}

function IsSignatureDataResource(r) {
  if ((0, _String.startsWith)(r.Name, _tast.FSharpSignatureDataResourceName, 4)) {
    return true;
  } else {
    return (0, _String.startsWith)(r.Name, _tast.FSharpSignatureDataResourceName2, 4);
  }
}

function IsOptimizationDataResource(r$$1) {
  if ((0, _String.startsWith)(r$$1.Name, _tast.FSharpOptimizationDataResourceName, 4)) {
    return true;
  } else {
    return (0, _String.startsWith)(r$$1.Name, _tast.FSharpOptimizationDataResourceName2, 4);
  }
}

function GetSignatureDataResourceName(r$$2) {
  if ((0, _String.startsWith)(r$$2.Name, _tast.FSharpSignatureDataResourceName, 4)) {
    return (0, _illib.String$$$dropPrefix)(r$$2.Name, _tast.FSharpSignatureDataResourceName);
  } else if ((0, _String.startsWith)(r$$2.Name, _tast.FSharpSignatureDataResourceName2, 4)) {
    return (0, _illib.String$$$dropPrefix)(r$$2.Name, _tast.FSharpSignatureDataResourceName2);
  } else {
    throw new Error("GetSignatureDataResourceName");
  }
}

function GetOptimizationDataResourceName(r$$3) {
  if ((0, _String.startsWith)(r$$3.Name, _tast.FSharpOptimizationDataResourceName, 4)) {
    return (0, _illib.String$$$dropPrefix)(r$$3.Name, _tast.FSharpOptimizationDataResourceName);
  } else if ((0, _String.startsWith)(r$$3.Name, _tast.FSharpOptimizationDataResourceName2, 4)) {
    return (0, _illib.String$$$dropPrefix)(r$$3.Name, _tast.FSharpOptimizationDataResourceName2);
  } else {
    throw new Error("GetOptimizationDataResourceName");
  }
}

const AssemblyResolution = (0, _Types.declare)(function AssemblyResolution(arg1, arg2, arg3, arg4, arg5) {
  this.originalReference = arg1;
  this.resolvedPath = arg2;
  this.prepareToolTip = arg3;
  this.sysdir = arg4;
  this.ilAssemblyRef = arg5;
}, _Types.Record);
exports.AssemblyResolution = AssemblyResolution;
const LoadClosure = (0, _Types.declare)(function LoadClosure(arg1, arg2) {
  this.SourceFiles = arg1;
  this.References = arg2;
}, _Types.Record);
exports.LoadClosure = LoadClosure;
const TcConfig = (0, _Types.declare)(function TcConfig(optimize, defines) {
  const $this$$23 = this;
  $this$$23.optimize = optimize;
  $this$$23.defines = defines;
});
exports.TcConfig = TcConfig;

function TcConfig$$$$002Ector$$Z462A125(optimize, defines) {
  return this != null ? TcConfig.call(this, optimize, defines) : new TcConfig(optimize, defines);
}

function TcConfig$$get_primaryAssembly(x$$28) {
  return new _il.PrimaryAssembly(0, "Mscorlib");
}

function TcConfig$$get_implicitIncludeDir(x$$29) {
  return "";
}

function TcConfig$$get_compilingFslib(x$$30) {
  return false;
}

function TcConfig$$get_isInteractive(x$$31) {
  return false;
}

function TcConfig$$get_mlCompatibility(x$$32) {
  return false;
}

function TcConfig$$get_noDebugData(x$$33) {
  return false;
}

function TcConfig$$get_conditionalCompilationDefines(x$$34) {
  return x$$34.defines;
}

function TcConfig$$get_emitDebugInfoInQuotations(x$$35) {
  return false;
}

function TcConfig$$get_errorSeverityOptions(x$$36) {
  return (0, _ErrorLogger.FSharpErrorSeverityOptions$$$get_Default)();
}

function TcConfig$$get_light(x$$37) {
  return true;
}

function TcConfig$$get_target(x$$38) {
  return new CompilerTarget(0, "WinExe");
}

function TcConfig$$get_extraOptimizationIterations(x$$39) {
  if (x$$39.optimize) {
    return 0;
  } else {
    return 0;
  }
}

function TcConfig$$get_doDetuple(x$$40) {
  return x$$40.optimize;
}

function TcConfig$$get_doTLR(x$$41) {
  return x$$41.optimize;
}

function TcConfig$$get_doFinalSimplify(x$$42) {
  return x$$42.optimize;
}

function TcConfig$$get_optSettings(x$$43) {
  const inputRecord = (0, _Optimizer.OptimizationSettings$$$get_Defaults)();
  return new _Optimizer.OptimizationSettings(inputRecord.abstractBigTargets, x$$43.optimize, x$$43.optimize, x$$43.optimize, inputRecord.bigTargetSize, inputRecord.veryBigExprSize, x$$43.optimize ? 6 : 0, inputRecord.reportingPhase, inputRecord.reportNoNeedToTailcall, inputRecord.reportFunctionSizes, inputRecord.reportHasEffect, inputRecord.reportTotalSizes);
}

function TcConfig$$get_emitTailcalls(x$$44) {
  return true;
}

function TcConfig$$get_internalTestSpanStackReferring(x$$45) {
  return false;
}

const TcImports = (0, _Types.declare)(function TcImports() {
  const $this$$24 = this;
  $this$$24.tcGlobalsOpt = null;
  $this$$24.ccuMap = (0, _Map.ofSeq)([], {
    Compare: _Util.comparePrimitives
  });
});
exports.TcImports = TcImports;

function TcImports$$$$002Ector() {
  return this != null ? TcImports.call(this) : new TcImports();
}

function TcImports$$FindCcu$$Z721E3662(x$$46, _arg1$$9, assemblyName) {
  const matchValue$$21 = (0, _Map.tryFind)(assemblyName, x$$46.ccuMap);

  if (matchValue$$21 == null) {
    return null;
  } else {
    const ccuInfo = matchValue$$21;
    return ccuInfo.FSharpViewOfMetadata;
  }
}

function TcImports$$SetTcGlobals$$2AE8EA0C(x$$47, g$$10) {
  x$$47.tcGlobalsOpt = g$$10;
}

function TcImports$$GetTcGlobals(x$$48) {
  return x$$48.tcGlobalsOpt;
}

function TcImports$$SetCcuMap$$28CF8636(x$$49, m$$36) {
  x$$49.ccuMap = m$$36;
}

function TcImports$$GetImportedAssemblies(x$$50) {
  return (0, _illib.Map$00602$002Eget_Values)(x$$50.ccuMap);
}

function TcImports$$GetImportMap(x$$51) {
  const loaderInterface = {
    FindCcuFromAssemblyRef(_ctok, m$$37, ilAssemblyRef) {
      return TcImports$$FindCcuInfo$$Z721E3662(x$$51, m$$37, (0, _il.ILAssemblyRef$$get_Name)(ilAssemblyRef));
    }

  };
  return (0, _import.ImportMap$$$$002Ector$$Z7170FEEE)(x$$51.tcGlobalsOpt, loaderInterface);
}

function TcImports$$FindCcuInfo$$Z721E3662(this$, _arg2$$3, assemblyName$$2) {
  const matchValue$$22 = (0, _Map.tryFind)(assemblyName$$2, this$.ccuMap);

  if (matchValue$$22 == null) {
    return new _tast.CcuResolutionResult(1, "UnresolvedCcu", assemblyName$$2);
  } else {
    const ccuInfo$$1 = matchValue$$22;
    return new _tast.CcuResolutionResult(0, "ResolvedCcu", ccuInfo$$1.FSharpViewOfMetadata);
  }
}

const qnameOrder = (0, _illib.Order$$$orderBy)(function (q$$3) {
  return (0, _ast.QualifiedNameOfFile$$get_Text)(q$$3);
});
exports.qnameOrder = qnameOrder;
const TcState = (0, _Types.declare)(function TcState(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.tcsCcu = arg1;
  this.tcsCcuType = arg2;
  this.tcsNiceNameGen = arg3;
  this.tcsTcSigEnv = arg4;
  this.tcsTcImplEnv = arg5;
  this.tcsCreatesGeneratedProvidedTypes = arg6;
  this.tcsRootSigs = arg7;
  this.tcsRootImpls = arg8;
  this.tcsCcuSig = arg9;
}, _Types.Record);
exports.TcState = TcState;

function TcState$$get_NiceNameGenerator(x$$53) {
  return x$$53.tcsNiceNameGen;
}

function TcState$$get_TcEnvFromSignatures(x$$54) {
  return x$$54.tcsTcSigEnv;
}

function TcState$$get_TcEnvFromImpls(x$$55) {
  return x$$55.tcsTcImplEnv;
}

function TcState$$get_Ccu(x$$56) {
  return x$$56.tcsCcu;
}

function TcState$$get_CreatesGeneratedProvidedTypes(x$$57) {
  return x$$57.tcsCreatesGeneratedProvidedTypes;
}

function TcState$$get_CcuType(x$$58) {
  return x$$58.tcsCcuType;
}

function TcState$$get_CcuSig(x$$59) {
  return x$$59.tcsCcuSig;
}

function TcState$$NextStateAfterIncrementalFragment$$6F0188EF(x$$60, tcEnvAtEndOfLastInput) {
  return new TcState(x$$60.tcsCcu, x$$60.tcsCcuType, x$$60.tcsNiceNameGen, tcEnvAtEndOfLastInput, tcEnvAtEndOfLastInput, x$$60.tcsCreatesGeneratedProvidedTypes, x$$60.tcsRootSigs, x$$60.tcsRootImpls, x$$60.tcsCcuSig);
}

function GetInitialTcState(m$$38, ccuName$$1, tcConfig, tcGlobals, tcImports, niceNameGen, tcEnv0) {
  tcImports;
  const ccuType = (0, _tast.NewCcuContents)(new _il.ILScopeRef(0, "Local"), m$$38, ccuName$$1, (0, _tast.NewEmptyModuleOrNamespaceType)(new _tast.ModuleOrNamespaceKind(2, "Namespace")));
  const ccuData = new _tast.CcuData(null, new _il.ILScopeRef(0, "Local"), (0, _tast.newStamp)(), null, TcConfig$$get_implicitIncludeDir(tcConfig), true, false, ccuType, function TryGetILModuleDef() {
    return null;
  }, function (arg20$0040, arg30$0040) {
    return (0, _TastOps.typeEquivAux)(new _TastOps.Erasure(0, "EraseAll"), tcGlobals, arg20$0040, arg30$0040);
  }, (0, _Map.empty)({
    Compare: _Util.compareArrays
  }));
  const ccu = (0, _tast.CcuThunk$$$Create$$Z68F5F4C0)(ccuName$$1, ccuData);

  if (TcConfig$$get_compilingFslib(tcConfig)) {
    (0, _tast.CcuThunk$$Fixup$$Z7669BDF9)((0, _TcGlobals.TcGlobals$$get_fslibCcu)(tcGlobals), ccu);
  }

  return new TcState(ccu, ccuType, niceNameGen, tcEnv0, tcEnv0, false, (0, _zmap.ZmapModule$$$empty)(qnameOrder), (0, _zset.ZsetModule$$$empty)(qnameOrder), (0, _tast.NewEmptyModuleOrNamespaceType)(new _tast.ModuleOrNamespaceKind(2, "Namespace")));
}

function TypeCheckOneInputEventually(checkForErrors, tcConfig$$1, tcImports$$1, tcGlobals$$1, prefixPathOpt, tcSink, tcState, inp$$1) {
  const builder$0040 = _illib.eventually;
  return (0, _illib.EventuallyBuilder$$Delay$$5AC0008B)(builder$0040, function () {
    return (0, _illib.EventuallyBuilder$$TryWith$$2B3CF8F)(builder$0040, (0, _illib.EventuallyBuilder$$Delay$$5AC0008B)(builder$0040, function () {
      return (0, _illib.EventuallyBuilder$$Bind$$11F6F5F3)(builder$0040, _illib.EventuallyModule$$$token, function (_arg1$$10) {
        const ctok$$1 = _arg1$$10;
        (0, _illib.RequireCompilationThread)(ctok$$1);
        const m$$39 = (0, _ast.ParsedInput$$get_Range)(inp$$1);
        const amap$$1 = TcImports$$GetImportMap(tcImports$$1);

        if (inp$$1.tag === 0) {
          const qualNameOfFile$$1 = inp$$1.fields[0].fields[2];
          const file$$2 = inp$$1.fields[0];
          const rootSigOpt = (0, _TaggedCollections.Map$00603$$TryFind$$2B595)(tcState.tcsRootSigs, qualNameOfFile$$1);
          return (0, _illib.EventuallyBuilder$$Combine$$7DDFD27F)(builder$0040, (0, _zset.ZsetModule$$$contains)(qualNameOfFile$$1, tcState.tcsRootImpls) ? ((0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$buildImplementationAlreadyGiven$$Z721C83C5)((0, _ast.QualifiedNameOfFile$$get_Text)(qualNameOfFile$$1)), m$$39)), (0, _illib.EventuallyBuilder$$Zero)(builder$0040)) : (0, _illib.EventuallyBuilder$$Zero)(builder$0040), (0, _illib.EventuallyBuilder$$Delay$$5AC0008B)(builder$0040, function () {
            const tcImplEnv = tcState.tcsTcImplEnv;
            return (0, _illib.EventuallyBuilder$$Bind$$11F6F5F3)(builder$0040, (0, _TypeChecker.TypeCheckOneImplFile)(tcGlobals$$1, tcState.tcsNiceNameGen, amap$$1, tcState.tcsCcu, checkForErrors, TcConfig$$get_conditionalCompilationDefines(tcConfig$$1), tcSink, TcConfig$$get_internalTestSpanStackReferring(tcConfig$$1), tcImplEnv, rootSigOpt, file$$2), function (_arg3$$1) {
              var prefixPath$$2, prefixPath$$3;
              const hadSig = rootSigOpt != null;
              const implFileSigType = (0, _TastOps.SigTypeOfImplFile)(_arg3$$1[1]);
              const rootImpls = (0, _zset.ZsetModule$$$add)(qualNameOfFile$$1, tcState.tcsRootImpls);
              const m$$41 = (0, _ast.QualifiedNameOfFile$$get_Range)(qualNameOfFile$$1);
              const tcImplEnv$$1 = (0, _TypeChecker.AddLocalRootModuleOrNamespace)((0, _NameResolution.TcResultsSink$$$get_NoSink)(), tcGlobals$$1, amap$$1, m$$41, tcImplEnv, implFileSigType);
              const tcSigEnv = hadSig ? tcState.tcsTcSigEnv : (0, _TypeChecker.AddLocalRootModuleOrNamespace)((0, _NameResolution.TcResultsSink$$$get_NoSink)(), tcGlobals$$1, amap$$1, m$$41, tcState.tcsTcSigEnv, implFileSigType);
              let tcImplEnv$$2;

              if (prefixPathOpt != null) {
                const prefixPath$$1 = prefixPathOpt;
                tcImplEnv$$2 = (0, _TypeChecker.TcOpenDecl)(tcSink, tcGlobals$$1, amap$$1, m$$41, m$$41, tcImplEnv$$1, prefixPath$$1);
              } else {
                tcImplEnv$$2 = tcImplEnv$$1;
              }

              const tcSigEnv$$1 = prefixPathOpt != null ? (prefixPath$$2 = prefixPathOpt, !hadSig) ? (prefixPath$$3 = prefixPathOpt, (0, _TypeChecker.TcOpenDecl)(tcSink, tcGlobals$$1, amap$$1, m$$41, m$$41, tcSigEnv, prefixPath$$3)) : tcSigEnv : tcSigEnv;
              const ccuSig = (0, _tast.CombineCcuContentFragments)(m$$41, (0, _Types.L)(implFileSigType, (0, _Types.L)(tcState.tcsCcuSig, (0, _Types.L)())));
              const ccuSigForFile$$1 = (0, _tast.CombineCcuContentFragments)(m$$41, (0, _Types.L)(implFileSigType, (0, _Types.L)(tcState.tcsCcuSig, (0, _Types.L)())));
              const tcState$$2 = new TcState(tcState.tcsCcu, tcState.tcsCcuType, tcState.tcsNiceNameGen, tcSigEnv$$1, tcImplEnv$$2, tcState.tcsCreatesGeneratedProvidedTypes ? true : _arg3$$1[4], tcState.tcsRootSigs, rootImpls, ccuSig);
              return (0, _illib.EventuallyBuilder$$Return$$1505)(builder$0040, [[_arg3$$1[3], _arg3$$1[0], _arg3$$1[1], ccuSigForFile$$1], tcState$$2]);
            });
          }));
        } else {
          const qualNameOfFile = inp$$1.fields[0].fields[1];
          const file$$1 = inp$$1.fields[0];
          return (0, _illib.EventuallyBuilder$$Combine$$7DDFD27F)(builder$0040, (0, _zmap.ZmapModule$$$mem)(qualNameOfFile, tcState.tcsRootSigs) ? ((0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$buildSignatureAlreadySpecified$$Z721C83C5)((0, _ast.QualifiedNameOfFile$$get_Text)(qualNameOfFile)), (0, _range.range$$get_StartRange)(m$$39))), (0, _illib.EventuallyBuilder$$Zero)(builder$0040)) : (0, _illib.EventuallyBuilder$$Zero)(builder$0040), (0, _illib.EventuallyBuilder$$Delay$$5AC0008B)(builder$0040, function () {
            return (0, _illib.EventuallyBuilder$$Combine$$7DDFD27F)(builder$0040, (0, _zset.ZsetModule$$$contains)(qualNameOfFile, tcState.tcsRootImpls) ? ((0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$buildImplementationAlreadyGivenDetail$$Z721C83C5)((0, _ast.QualifiedNameOfFile$$get_Text)(qualNameOfFile)), m$$39)), (0, _illib.EventuallyBuilder$$Zero)(builder$0040)) : (0, _illib.EventuallyBuilder$$Zero)(builder$0040), (0, _illib.EventuallyBuilder$$Delay$$5AC0008B)(builder$0040, function () {
              return (0, _illib.EventuallyBuilder$$Bind$$11F6F5F3)(builder$0040, (0, _TypeChecker.TypeCheckOneSigFile)(tcGlobals$$1, tcState.tcsNiceNameGen, amap$$1, tcState.tcsCcu, checkForErrors, TcConfig$$get_conditionalCompilationDefines(tcConfig$$1), tcSink, TcConfig$$get_internalTestSpanStackReferring(tcConfig$$1), tcState.tcsTcSigEnv, file$$1), function (_arg2$$4) {
                const rootSigs = (0, _zmap.ZmapModule$$$add)(qualNameOfFile, _arg2$$4[1], tcState.tcsRootSigs);
                const ccuSigForFile = (0, _tast.CombineCcuContentFragments)(m$$39, (0, _Types.L)(_arg2$$4[1], (0, _Types.L)(tcState.tcsCcuSig, (0, _Types.L)())));
                let tcEnv$$1;

                if (prefixPathOpt != null) {
                  const prefixPath = prefixPathOpt;
                  const m$$40 = (0, _ast.QualifiedNameOfFile$$get_Range)(qualNameOfFile);
                  tcEnv$$1 = (0, _TypeChecker.TcOpenDecl)(tcSink, tcGlobals$$1, amap$$1, m$$40, m$$40, _arg2$$4[0], prefixPath);
                } else {
                  tcEnv$$1 = _arg2$$4[0];
                }

                const tcState$$1 = new TcState(tcState.tcsCcu, tcState.tcsCcuType, tcState.tcsNiceNameGen, tcEnv$$1, tcState.tcsTcImplEnv, tcState.tcsCreatesGeneratedProvidedTypes ? true : _arg2$$4[2], rootSigs, tcState.tcsRootImpls, tcState.tcsCcuSig);
                return (0, _illib.EventuallyBuilder$$Return$$1505)(builder$0040, [[tcEnv$$1, _TypeChecker.EmptyTopAttrs, null, ccuSigForFile], tcState$$1]);
              });
            }));
          }));
        }
      });
    }), function (_arg4$$1) {
      const e$$31 = _arg4$$1;
      (0, _ErrorLogger.errorRecovery)(e$$31, _range.range0);
      return (0, _illib.EventuallyBuilder$$Return$$1505)(builder$0040, [[TcState$$get_TcEnvFromSignatures(tcState), _TypeChecker.EmptyTopAttrs, null, tcState.tcsCcuSig], tcState]);
    });
  });
}

function TypeCheckOneInput(ctok$$2, checkForErrors$$1, tcConfig$$2, tcImports$$2, tcGlobals$$2, prefixPathOpt$$1, tcState$$3, inp$$2) {
  const unwindEL$$1 = (0, _ErrorLogger.PushErrorLoggerPhaseUntilUnwind)(function (oldLogger) {
    return GetErrorLoggerFilteringByScopedPragmas(false, GetScopedPragmasForInput(inp$$2), oldLogger);
  });

  try {
    const unwindBP$$1 = (0, _ErrorLogger.PushThreadBuildPhaseUntilUnwind)(new _ErrorLogger.BuildPhase(4, "TypeCheck"));

    try {
      return (0, _illib.EventuallyModule$$$force)(ctok$$2, TypeCheckOneInputEventually(checkForErrors$$1, tcConfig$$2, tcImports$$2, tcGlobals$$2, prefixPathOpt$$1, (0, _NameResolution.TcResultsSink$$$get_NoSink)(), tcState$$3, inp$$2));
    } finally {
      if ((0, _Util.isDisposable)(unwindBP$$1)) {
        unwindBP$$1.Dispose();
      }
    }
  } finally {
    if ((0, _Util.isDisposable)(unwindEL$$1)) {
      unwindEL$$1.Dispose();
    }
  }
}

function TypeCheckMultipleInputsFinish(results, tcState$$4) {
  const patternInput$$33 = (0, _illib.List$$$unzip4)(results);
  const topAttrs$$2 = (0, _List.foldBack)(_TypeChecker.CombineTopAttrs, patternInput$$33[1], _TypeChecker.EmptyTopAttrs);
  const implFiles$$1 = (0, _List.choose)(function (x$$61) {
    return x$$61;
  }, patternInput$$33[2]);
  let tcEnvAtEndOfLastFile;

  if (patternInput$$33[0].tail != null) {
    const h$$2 = patternInput$$33[0].head;
    tcEnvAtEndOfLastFile = h$$2;
  } else {
    tcEnvAtEndOfLastFile = TcState$$get_TcEnvFromSignatures(tcState$$4);
  }

  return [[tcEnvAtEndOfLastFile, topAttrs$$2, implFiles$$1, patternInput$$33[3]], tcState$$4];
}

function TypeCheckOneInputAndFinishEventually(checkForErrors$$2, tcConfig$$3, tcImports$$3, tcGlobals$$3, prefixPathOpt$$2, tcSink$$1, tcState$$5, input$$3) {
  const builder$0040$$1 = _illib.eventually;
  return (0, _illib.EventuallyBuilder$$Delay$$5AC0008B)(builder$0040$$1, function () {
    (0, _Logger.Logger$$$LogBlockStart)(5);
    return (0, _illib.EventuallyBuilder$$Bind$$11F6F5F3)(builder$0040$$1, TypeCheckOneInputEventually(checkForErrors$$2, tcConfig$$3, tcImports$$3, tcGlobals$$3, prefixPathOpt$$2, tcSink$$1, tcState$$5, input$$3), function (_arg1$$11) {
      const result$$1 = TypeCheckMultipleInputsFinish((0, _Types.L)(_arg1$$11[0], (0, _Types.L)()), _arg1$$11[1]);
      (0, _Logger.Logger$$$LogBlockStop)(5);
      return (0, _illib.EventuallyBuilder$$Return$$1505)(builder$0040$$1, result$$1);
    });
  });
}

function TypeCheckClosedInputSetFinish(declaredImpls, tcState$$7) {
  (0, _tast.CcuThunk$$get_Deref)(tcState$$7.tcsCcu).Contents = (0, _tast.NewCcuContents)(new _il.ILScopeRef(0, "Local"), _range.range0, (0, _tast.CcuThunk$$get_AssemblyName)(tcState$$7.tcsCcu), tcState$$7.tcsCcuSig);
  (0, _zmap.ZmapModule$$$iter)(function action$$2(qualNameOfFile$$2, _arg1$$12) {
    if (!(0, _zset.ZsetModule$$$contains)(qualNameOfFile$$2, tcState$$7.tcsRootImpls)) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$buildSignatureWithoutImplementation$$Z721C83C5)((0, _ast.QualifiedNameOfFile$$get_Text)(qualNameOfFile$$2)), (0, _ast.QualifiedNameOfFile$$get_Range)(qualNameOfFile$$2)));
    }
  }, tcState$$7.tcsRootSigs);
  return [tcState$$7, declaredImpls];
}

function TypeCheckClosedInputSet(ctok$$3, checkForErrors$$3, tcConfig$$4, tcImports$$4, tcGlobals$$4, prefixPathOpt$$3, tcState$$8, inputs) {
  const patternInput$$34 = (0, _List.mapFold)(function mapping$$4(tcState$$9, inp$$3) {
    return TypeCheckOneInput(ctok$$3, checkForErrors$$3, tcConfig$$4, tcImports$$4, tcGlobals$$4, prefixPathOpt$$3, tcState$$9, inp$$3);
  }, tcState$$8, inputs);
  const patternInput$$35 = TypeCheckMultipleInputsFinish(patternInput$$34[0], patternInput$$34[1]);
  const topAttrs$$3 = patternInput$$35[0][1];
  const tcEnvAtEndOfLastFile$$1 = patternInput$$35[0][0];
  const implFiles$$2 = patternInput$$35[0][2];
  const patternInput$$36 = TypeCheckClosedInputSetFinish(implFiles$$2, patternInput$$35[1]);
  return [patternInput$$36[0], topAttrs$$3, patternInput$$36[1], tcEnvAtEndOfLastFile$$1];
}