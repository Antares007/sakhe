"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeCheckInfo$$$$002Ector$$4E917080 = TypeCheckInfo$$$$002Ector$$4E917080;
exports.TypeCheckInfo$$GetBestDisplayEnvForPos$$Z72E1C3A1 = TypeCheckInfo$$GetBestDisplayEnvForPos$$Z72E1C3A1;
exports.TypeCheckInfo$$GetVisibleNamespacesAndModulesAtPosition$$Z72E1C3A1 = TypeCheckInfo$$GetVisibleNamespacesAndModulesAtPosition$$Z72E1C3A1;
exports.TypeCheckInfo$$IsRelativeNameResolvable$$Z77F343C2 = TypeCheckInfo$$IsRelativeNameResolvable$$Z77F343C2;
exports.TypeCheckInfo$$IsRelativeNameResolvableFromSymbol$$Z3954C13C = TypeCheckInfo$$IsRelativeNameResolvableFromSymbol$$Z3954C13C;
exports.TypeCheckInfo$$GetDeclarations$$74446B08 = TypeCheckInfo$$GetDeclarations$$74446B08;
exports.TypeCheckInfo$$GetDeclarationListSymbols$$74446B08 = TypeCheckInfo$$GetDeclarationListSymbols$$74446B08;
exports.TypeCheckInfo$$GetReferenceResolutionStructuredToolTipText$$62A2208D = TypeCheckInfo$$GetReferenceResolutionStructuredToolTipText$$62A2208D;
exports.TypeCheckInfo$$GetStructuredToolTipText$$Z1FAAFC39 = TypeCheckInfo$$GetStructuredToolTipText$$Z1FAAFC39;
exports.TypeCheckInfo$$GetF1Keyword$$Z1FAAFC39 = TypeCheckInfo$$GetF1Keyword$$Z1FAAFC39;
exports.TypeCheckInfo$$GetMethods$$Z46B519EE = TypeCheckInfo$$GetMethods$$Z46B519EE;
exports.TypeCheckInfo$$GetMethodsAsSymbols$$Z1FAAFC39 = TypeCheckInfo$$GetMethodsAsSymbols$$Z1FAAFC39;
exports.TypeCheckInfo$$GetDeclarationLocation$$Z66EB2048 = TypeCheckInfo$$GetDeclarationLocation$$Z66EB2048;
exports.TypeCheckInfo$$GetSymbolUseAtLocation$$Z1FAAFC39 = TypeCheckInfo$$GetSymbolUseAtLocation$$Z1FAAFC39;
exports.TypeCheckInfo$$get_PartialAssemblySignatureForFile = TypeCheckInfo$$get_PartialAssemblySignatureForFile;
exports.TypeCheckInfo$$get_AccessRights = TypeCheckInfo$$get_AccessRights;
exports.TypeCheckInfo$$GetReferencedAssemblies = TypeCheckInfo$$GetReferencedAssemblies;
exports.TypeCheckInfo$$GetFormatSpecifierLocationsAndArity = TypeCheckInfo$$GetFormatSpecifierLocationsAndArity;
exports.TypeCheckInfo$$GetSemanticClassification$$4DDEF99 = TypeCheckInfo$$GetSemanticClassification$$4DDEF99;
exports.TypeCheckInfo$$get_ScopeResolutions = TypeCheckInfo$$get_ScopeResolutions;
exports.TypeCheckInfo$$get_ScopeSymbolUses = TypeCheckInfo$$get_ScopeSymbolUses;
exports.TypeCheckInfo$$get_TcGlobals = TypeCheckInfo$$get_TcGlobals;
exports.TypeCheckInfo$$get_TcImports = TypeCheckInfo$$get_TcImports;
exports.TypeCheckInfo$$get_CcuSigForFile = TypeCheckInfo$$get_CcuSigForFile;
exports.TypeCheckInfo$$get_ThisCcu = TypeCheckInfo$$get_ThisCcu;
exports.TypeCheckInfo$$get_ImplementationFile = TypeCheckInfo$$get_ImplementationFile;
exports.TypeCheckInfo$$get_OpenDeclarations = TypeCheckInfo$$get_OpenDeclarations;
exports.TypeCheckInfo$$get_SymbolEnv = TypeCheckInfo$$get_SymbolEnv;
exports.FSharpParsingOptions$$get_LastFileName = FSharpParsingOptions$$get_LastFileName;
exports.FSharpParsingOptions$$$get_Default = FSharpParsingOptions$$$get_Default;
exports.FSharpParsingOptions$$$FromTcConfig$$5BB1913B = FSharpParsingOptions$$$FromTcConfig$$5BB1913B;
exports.Parser$$$GetFileInfoForLastLineErrors = Parser$$$GetFileInfoForLastLineErrors;
exports.Parser$002EErrorHandler$$$$002Ector$$7638032F = Parser$002EErrorHandler$$$$002Ector$$7638032F;
exports.Parser$002EErrorHandler$$get_ErrorLogger = Parser$002EErrorHandler$$get_ErrorLogger;
exports.Parser$002EErrorHandler$$get_CollectedDiagnostics = Parser$002EErrorHandler$$get_CollectedDiagnostics;
exports.Parser$002EErrorHandler$$get_ErrorCount = Parser$002EErrorHandler$$get_ErrorCount;
exports.Parser$002EErrorHandler$$set_ErrorSeverityOptions$$Z94A7D5B = Parser$002EErrorHandler$$set_ErrorSeverityOptions$$Z94A7D5B;
exports.Parser$002EErrorHandler$$get_AnyErrors = Parser$002EErrorHandler$$get_AnyErrors;
exports.Parser$$$getLightSyntaxStatus = Parser$$$getLightSyntaxStatus;
exports.Parser$$$createLexerFunction = Parser$$$createLexerFunction;
exports.Parser$$$addNewLine = Parser$$$addNewLine;
exports.Parser$$$matchBraces = Parser$$$matchBraces;
exports.Parser$$$parseFile = Parser$$$parseFile;
exports.Parser$$$CheckOneFile = Parser$$$CheckOneFile;
exports.FSharpProjectOptions$$get_ProjectOptions = FSharpProjectOptions$$get_ProjectOptions;
exports.FSharpProjectOptions$$$UseSameProject$$6AB17D60 = FSharpProjectOptions$$$UseSameProject$$6AB17D60;
exports.FSharpProjectOptions$$$AreSameForChecking$$6AB17D60 = FSharpProjectOptions$$$AreSameForChecking$$6AB17D60;
exports.FSharpProjectOptions$$get_ProjectDirectory = FSharpProjectOptions$$get_ProjectDirectory;
exports.FSharpProjectContext$$$$002Ector$$46B4C30A = FSharpProjectContext$$$$002Ector$$46B4C30A;
exports.FSharpProjectContext$$GetReferencedAssemblies = FSharpProjectContext$$GetReferencedAssemblies;
exports.FSharpProjectContext$$get_AccessibilityRights = FSharpProjectContext$$get_AccessibilityRights;
exports.FSharpCheckProjectResults$$$$002Ector$$1F668A04 = FSharpCheckProjectResults$$$$002Ector$$1F668A04;
exports.FSharpCheckProjectResults$$get_Errors = FSharpCheckProjectResults$$get_Errors;
exports.FSharpCheckProjectResults$$get_HasCriticalErrors = FSharpCheckProjectResults$$get_HasCriticalErrors;
exports.FSharpCheckProjectResults$$get_AssemblySignature = FSharpCheckProjectResults$$get_AssemblySignature;
exports.FSharpCheckProjectResults$$get_TypedImplementionFiles = FSharpCheckProjectResults$$get_TypedImplementionFiles;
exports.FSharpCheckProjectResults$$get_AssemblyContents = FSharpCheckProjectResults$$get_AssemblyContents;
exports.FSharpCheckProjectResults$$GetOptimizedAssemblyContents = FSharpCheckProjectResults$$GetOptimizedAssemblyContents;
exports.FSharpCheckProjectResults$$GetUsesOfSymbol$$5B5ADE4A = FSharpCheckProjectResults$$GetUsesOfSymbol$$5B5ADE4A;
exports.FSharpCheckProjectResults$$GetAllUsesOfAllSymbols = FSharpCheckProjectResults$$GetAllUsesOfAllSymbols;
exports.FSharpCheckProjectResults$$get_ProjectContext = FSharpCheckProjectResults$$get_ProjectContext;
exports.FSharpCheckProjectResults$$get_RawFSharpAssemblyData = FSharpCheckProjectResults$$get_RawFSharpAssemblyData;
exports.FSharpCheckProjectResults$$get_DependencyFiles = FSharpCheckProjectResults$$get_DependencyFiles;
exports.FSharpCheckProjectResults$$get_AssemblyFullName = FSharpCheckProjectResults$$get_AssemblyFullName;
exports.FSharpCheckFileResults$$$$002Ector$$Z664E4DC4 = FSharpCheckFileResults$$$$002Ector$$Z664E4DC4;
exports.FSharpCheckFileResults$$get_Errors = FSharpCheckFileResults$$get_Errors;
exports.FSharpCheckFileResults$$get_HasFullTypeCheckInfo = FSharpCheckFileResults$$get_HasFullTypeCheckInfo;
exports.FSharpCheckFileResults$$GetDeclarationListInfo$$52CF53AB = FSharpCheckFileResults$$GetDeclarationListInfo$$52CF53AB;
exports.FSharpCheckFileResults$$GetDeclarationListSymbols$$52CF53AB = FSharpCheckFileResults$$GetDeclarationListSymbols$$52CF53AB;
exports.FSharpCheckFileResults$$GetStructuredToolTipText$$Z49C39EE8 = FSharpCheckFileResults$$GetStructuredToolTipText$$Z49C39EE8;
exports.FSharpCheckFileResults$$GetToolTipText$$Z49C39EE8 = FSharpCheckFileResults$$GetToolTipText$$Z49C39EE8;
exports.FSharpCheckFileResults$$GetF1Keyword$$10821604 = FSharpCheckFileResults$$GetF1Keyword$$10821604;
exports.FSharpCheckFileResults$$GetMethods$$Z3AE572CF = FSharpCheckFileResults$$GetMethods$$Z3AE572CF;
exports.FSharpCheckFileResults$$GetDeclarationLocation$$Z5D1F4C05 = FSharpCheckFileResults$$GetDeclarationLocation$$Z5D1F4C05;
exports.FSharpCheckFileResults$$GetSymbolUseAtLocation$$10821604 = FSharpCheckFileResults$$GetSymbolUseAtLocation$$10821604;
exports.FSharpCheckFileResults$$GetMethodsAsSymbols$$10821604 = FSharpCheckFileResults$$GetMethodsAsSymbols$$10821604;
exports.FSharpCheckFileResults$$GetSymbolAtLocation$$10821604 = FSharpCheckFileResults$$GetSymbolAtLocation$$10821604;
exports.FSharpCheckFileResults$$GetFormatSpecifierLocations = FSharpCheckFileResults$$GetFormatSpecifierLocations;
exports.FSharpCheckFileResults$$GetFormatSpecifierLocationsAndArity = FSharpCheckFileResults$$GetFormatSpecifierLocationsAndArity;
exports.FSharpCheckFileResults$$GetSemanticClassification$$4DDEF99 = FSharpCheckFileResults$$GetSemanticClassification$$4DDEF99;
exports.FSharpCheckFileResults$$get_PartialAssemblySignature = FSharpCheckFileResults$$get_PartialAssemblySignature;
exports.FSharpCheckFileResults$$get_ProjectContext = FSharpCheckFileResults$$get_ProjectContext;
exports.FSharpCheckFileResults$$get_DependencyFiles = FSharpCheckFileResults$$get_DependencyFiles;
exports.FSharpCheckFileResults$$GetAllUsesOfAllSymbolsInFile = FSharpCheckFileResults$$GetAllUsesOfAllSymbolsInFile;
exports.FSharpCheckFileResults$$GetUsesOfSymbolInFile$$5B5ADE4A = FSharpCheckFileResults$$GetUsesOfSymbolInFile$$5B5ADE4A;
exports.FSharpCheckFileResults$$GetVisibleNamespacesAndModulesAtPoint$$Z72E1C3A1 = FSharpCheckFileResults$$GetVisibleNamespacesAndModulesAtPoint$$Z72E1C3A1;
exports.FSharpCheckFileResults$$IsRelativeNameResolvable$$Z54CC1130 = FSharpCheckFileResults$$IsRelativeNameResolvable$$Z54CC1130;
exports.FSharpCheckFileResults$$IsRelativeNameResolvableFromSymbol$$Z417B4596 = FSharpCheckFileResults$$IsRelativeNameResolvableFromSymbol$$Z417B4596;
exports.FSharpCheckFileResults$$GetDisplayEnvForPos$$Z72E1C3A1 = FSharpCheckFileResults$$GetDisplayEnvForPos$$Z72E1C3A1;
exports.FSharpCheckFileResults$$get_ImplementationFile = FSharpCheckFileResults$$get_ImplementationFile;
exports.FSharpCheckFileResults$$get_OpenDeclarations = FSharpCheckFileResults$$get_OpenDeclarations;
exports.FSharpCheckFileResults = exports.FSharpCheckProjectResults = exports.FSharpProjectContext = exports.FSharpProjectOptions = exports.UnresolvedReferencesSet = exports.Parser$002ETypeCheckAborted = exports.Parser$002EErrorHandler = exports.FSharpParsingOptions = exports.TypeCheckInfo = exports.SemanticClassificationType = exports.GetPreciseCompletionListFromExprTypingsResult = exports.ResolveOverloads = exports.NameResResult = exports.FSharpFindDeclResult = exports.FSharpFindDeclFailureReason = exports.EnvMisc$$$maxTimeShareMilliseconds = exports.EnvMisc$$$maxMBDefault = exports.EnvMisc$$$frameworkTcImportsCacheStrongSize = exports.EnvMisc$$$projectCacheSizeDefault = exports.EnvMisc$$$checkFileInProjectCacheSize = exports.EnvMisc$$$parseFileCacheSize = exports.EnvMisc$$$braceMatchCacheSize = exports.EnvMisc$$$maxTypeCheckErrorsOutOfProjectContext = exports.EnvMisc$$$getToolTipTextSize = void 0;

var _lib = require("../fsharp/lib");

var _Long = require("../fable-core.2.0.3/Long");

var _Types = require("../fable-core.2.0.3/Types");

var _Option = require("../fable-core.2.0.3/Option");

var _Util = require("../fable-core.2.0.3/Util");

var _InternalCollections = require("../fsharp/InternalCollections");

var _CompileOps = require("../fsharp/CompileOps");

var _InfoReader = require("../fsharp/InfoReader");

var _NameResolution = require("../fsharp/NameResolution");

var _Symbols = require("../symbols/Symbols");

var _range = require("../fsharp/range");

var _String = require("../fable-core.2.0.3/String");

var _adapters = require("../fcs-fable/adapters");

var _SymbolHelpers = require("../symbols/SymbolHelpers");

var _ServiceUntypedParse = require("./ServiceUntypedParse");

var _List = require("../fable-core.2.0.3/List");

var _ServiceDeclarationLists = require("./ServiceDeclarationLists");

var _tast = require("../fsharp/tast");

var _infos = require("../fsharp/infos");

var _PrettyNaming = require("../fsharp/PrettyNaming");

var _illib = require("../absil/illib");

var _layout = require("../fsharp/layout");

var _il = require("../absil/il");

var _Array = require("../fable-core.2.0.3/Array");

var _ExternalSymbol = require("./ExternalSymbol");

var _TastOps = require("../fsharp/TastOps");

var _filename = require("../utils/filename");

var _Seq = require("../fable-core.2.0.3/Seq");

var _TcGlobals = require("../fsharp/TcGlobals");

var _ErrorLogger = require("../fsharp/ErrorLogger");

var _ResizeArray = require("../utils/ResizeArray");

var _AccessibilityLogic = require("../fsharp/AccessibilityLogic");

var _Map = require("../fable-core.2.0.3/Map");

var _ConstraintSolver = require("../fsharp/ConstraintSolver");

var _TypeRelations = require("../fsharp/TypeRelations");

var _Char = require("../fable-core.2.0.3/Char");

var _lexhelp = require("../fsharp/lexhelp");

var _lex = require("../codegen/lex");

var _LexFilter = require("../fsharp/LexFilter");

var _UnicodeLexing = require("../fsharp/UnicodeLexing");

var _ast = require("../fsharp/ast");

var _Logger = require("../fsharp/Logger");

var _TypeChecker = require("../fsharp/TypeChecker");

var _Date = require("../fable-core.2.0.3/Date");

var _Exprs = require("../symbols/Exprs");

var _CompileOptions = require("../fsharp/CompileOptions");

var _Set = require("../fable-core.2.0.3/Set");

var _AsyncBuilder = require("../fable-core.2.0.3/AsyncBuilder");

var _IncrementalBuild = require("./IncrementalBuild");

var _pars = require("../codegen/pars");

const EnvMisc$$$getToolTipTextSize = (0, _lib.GetEnvInteger)("FCS_GetToolTipTextCacheSize", 5);
exports.EnvMisc$$$getToolTipTextSize = EnvMisc$$$getToolTipTextSize;
const EnvMisc$$$maxTypeCheckErrorsOutOfProjectContext = (0, _lib.GetEnvInteger)("FCS_MaxErrorsOutOfProjectContext", 3);
exports.EnvMisc$$$maxTypeCheckErrorsOutOfProjectContext = EnvMisc$$$maxTypeCheckErrorsOutOfProjectContext;
const EnvMisc$$$braceMatchCacheSize = (0, _lib.GetEnvInteger)("FCS_BraceMatchCacheSize", 5);
exports.EnvMisc$$$braceMatchCacheSize = EnvMisc$$$braceMatchCacheSize;
const EnvMisc$$$parseFileCacheSize = (0, _lib.GetEnvInteger)("FCS_ParseFileCacheSize", 2);
exports.EnvMisc$$$parseFileCacheSize = EnvMisc$$$parseFileCacheSize;
const EnvMisc$$$checkFileInProjectCacheSize = (0, _lib.GetEnvInteger)("FCS_CheckFileInProjectCacheSize", 10);
exports.EnvMisc$$$checkFileInProjectCacheSize = EnvMisc$$$checkFileInProjectCacheSize;
const EnvMisc$$$projectCacheSizeDefault = (0, _lib.GetEnvInteger)("FCS_ProjectCacheSizeDefault", 3);
exports.EnvMisc$$$projectCacheSizeDefault = EnvMisc$$$projectCacheSizeDefault;
const EnvMisc$$$frameworkTcImportsCacheStrongSize = (0, _lib.GetEnvInteger)("FCS_frameworkTcImportsCacheStrongSizeDefault", 8);
exports.EnvMisc$$$frameworkTcImportsCacheStrongSize = EnvMisc$$$frameworkTcImportsCacheStrongSize;
const EnvMisc$$$maxMBDefault = (0, _lib.GetEnvInteger)("FCS_MaxMB", 1000000);
exports.EnvMisc$$$maxMBDefault = EnvMisc$$$maxMBDefault;
const EnvMisc$$$maxTimeShareMilliseconds = (0, _Long.fromInteger)((0, _lib.GetEnvInteger)("FCS_MaxTimeShare", 100), false, 2);
exports.EnvMisc$$$maxTimeShareMilliseconds = EnvMisc$$$maxTimeShareMilliseconds;
const FSharpFindDeclFailureReason = (0, _Types.declare)(function FSharpFindDeclFailureReason(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FSharpFindDeclFailureReason = FSharpFindDeclFailureReason;
const FSharpFindDeclResult = (0, _Types.declare)(function FSharpFindDeclResult(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FSharpFindDeclResult = FSharpFindDeclResult;
const NameResResult = (0, _Types.declare)(function NameResResult(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.NameResResult = NameResResult;
const ResolveOverloads = (0, _Types.declare)(function ResolveOverloads(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ResolveOverloads = ResolveOverloads;
const GetPreciseCompletionListFromExprTypingsResult = (0, _Types.declare)(function GetPreciseCompletionListFromExprTypingsResult(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.GetPreciseCompletionListFromExprTypingsResult = GetPreciseCompletionListFromExprTypingsResult;
const SemanticClassificationType = (0, _Types.declare)(function SemanticClassificationType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SemanticClassificationType = SemanticClassificationType;
const TypeCheckInfo = (0, _Types.declare)(function TypeCheckInfo(_sTcConfig, g, ccuSigForFile, thisCcu, tcImports, tcAccessRights, projectFileName, mainInputFileName, sResolutions, sSymbolUses, sFallback, loadClosure, reactorOps, checkAlive, textSnapshotInfo, implFileOpt, openDeclarations) {
  const $this$$1 = this;
  $this$$1.g = g;
  $this$$1.ccuSigForFile = ccuSigForFile;
  $this$$1.thisCcu = thisCcu;
  $this$$1.tcImports = tcImports;
  $this$$1.tcAccessRights = tcAccessRights;
  $this$$1.projectFileName = projectFileName;
  $this$$1.mainInputFileName = mainInputFileName;
  $this$$1.sResolutions = sResolutions;
  $this$$1.sSymbolUses = sSymbolUses;
  $this$$1.sFallback = sFallback;
  $this$$1.loadClosure = loadClosure;
  $this$$1.reactorOps = reactorOps;
  $this$$1.checkAlive = checkAlive;
  $this$$1.implFileOpt = implFileOpt;
  $this$$1.openDeclarations = openDeclarations;
  $this$$1["textSnapshotInfo@172"] = (0, _Option.defaultArg)(textSnapshotInfo, null);
  $this$$1.getToolTipTextCache = (0, _InternalCollections.AgedLookup$00603$$$$002Ector$$6CA80EF0)(EnvMisc$$$getToolTipTextSize, function (tupledArg) {
    return (0, _Util.equalArrays)(tupledArg[0], tupledArg[1]);
  });
  $this$$1.amap = (0, _CompileOps.TcImports$$GetImportMap)($this$$1.tcImports);
  $this$$1.infoReader = (0, _InfoReader.InfoReader$$$$002Ector$$Z11454F64)($this$$1.g, $this$$1.amap);
  $this$$1.ncenv = (0, _NameResolution.NameResolver$$$$002Ector$$Z19B36E82)($this$$1.g, $this$$1.amap, $this$$1.infoReader, _NameResolution.FakeInstantiationGenerator);
  $this$$1.cenv = (0, _Symbols.SymbolEnv$$$$002Ector$$71497408)($this$$1.g, $this$$1.thisCcu, $this$$1.ccuSigForFile, $this$$1.tcImports, $this$$1.amap, $this$$1.infoReader);
});
exports.TypeCheckInfo = TypeCheckInfo;

function TypeCheckInfo$$$$002Ector$$4E917080(_sTcConfig, g, ccuSigForFile, thisCcu, tcImports, tcAccessRights, projectFileName, mainInputFileName, sResolutions, sSymbolUses, sFallback, loadClosure, reactorOps, checkAlive, textSnapshotInfo, implFileOpt, openDeclarations) {
  return this != null ? TypeCheckInfo.call(this, _sTcConfig, g, ccuSigForFile, thisCcu, tcImports, tcAccessRights, projectFileName, mainInputFileName, sResolutions, sSymbolUses, sFallback, loadClosure, reactorOps, checkAlive, textSnapshotInfo, implFileOpt, openDeclarations) : new TypeCheckInfo(_sTcConfig, g, ccuSigForFile, thisCcu, tcImports, tcAccessRights, projectFileName, mainInputFileName, sResolutions, sSymbolUses, sFallback, loadClosure, reactorOps, checkAlive, textSnapshotInfo, implFileOpt, openDeclarations);
}

function TypeCheckInfo$$GetBestDisplayEnvForPos$$Z72E1C3A1(__, cursorPos) {
  return TypeCheckInfo$$GetBestEnvForPos$$Z72E1C3A1(__, cursorPos);
}

function TypeCheckInfo$$GetVisibleNamespacesAndModulesAtPosition$$Z72E1C3A1(__$$1, cursorPos$$1) {
  const patternInput = TypeCheckInfo$$GetBestEnvForPos$$Z72E1C3A1(__$$1, cursorPos$$1);
  const nenv = patternInput[0][0];
  const ad = patternInput[0][1];
  return (0, _NameResolution.GetVisibleNamespacesAndModulesAtPoint)(__$$1.ncenv, nenv, patternInput[1], ad);
}

function TypeCheckInfo$$IsRelativeNameResolvable$$Z77F343C2(__$$2, cursorPos$$2, plid, item) {
  return (0, _SymbolHelpers.ErrorScope$$$Protect)(_range.range0, function () {
    const patternInput$$1 = TypeCheckInfo$$GetBestEnvForPos$$Z72E1C3A1(__$$2, cursorPos$$2);
    const nenv$$1 = patternInput$$1[0][0];
    const ad$$1 = patternInput$$1[0][1];
    return (0, _NameResolution.IsItemResolvable)(__$$2.ncenv, nenv$$1, patternInput$$1[1], ad$$1, plid, item);
  }, function (msg) {
    (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("FCS: recovering from error in IsRelativeNameResolvable: '%s'"))(msg));
    return false;
  });
}

function TypeCheckInfo$$IsRelativeNameResolvableFromSymbol$$Z3954C13C(scope, cursorPos$$3, plid$$1, symbol) {
  return TypeCheckInfo$$IsRelativeNameResolvable$$Z77F343C2(scope, cursorPos$$3, plid$$1, (0, _Symbols.FSharpSymbol$$get_Item)(symbol));
}

function TypeCheckInfo$$GetDeclarations$$74446B08(__$$3, ctok, parseResultsOpt, line, lineStr, partialName, getAllEntities, hasTextChangedSinceLastTypecheck) {
  const isInterfaceFile = (0, _ServiceUntypedParse.SourceFileImpl$$$IsInterfaceFile)(__$$3.mainInputFileName);
  return (0, _SymbolHelpers.ErrorScope$$$Protect)(_range.range0, function () {
    const matchValue = TypeCheckInfo$$GetDeclItemsForNamesAtPosition$$Z51745532(__$$3, ctok, parseResultsOpt, partialName.QualifyingIdents, partialName.PartialIdent, partialName.LastDotPos, line, lineStr, partialName.EndColumn + 1, new _NameResolution.TypeNameResolutionFlag(0, "ResolveTypeNamesToCtors"), new ResolveOverloads(0, "Yes"), getAllEntities, hasTextChangedSinceLastTypecheck);

    if (matchValue != null) {
      const m$$2 = matchValue[3];
      const items = matchValue[0];
      const denv = matchValue[1];
      const ctx = matchValue[2];
      const items$$1 = isInterfaceFile ? (0, _List.filter)(function predicate(x$$1) {
        return TypeCheckInfo$$IsValidSignatureFileItem$$15FD5CB0(__$$3, (0, _SymbolHelpers.CompletionItem$$get_Item)(x$$1));
      }, items) : items;

      const getAccessibility = function getAccessibility(item$$2) {
        return (0, _Symbols.FSharpSymbol$$$GetAccessibility$$5B5ADE4A)((0, _Symbols.FSharpSymbol$$$Create$$Z5DC96FA7)(__$$3.cenv, item$$2));
      };

      const currentNamespaceOrModule = (0, _Option.defaultArg)((0, _Option.defaultArg)(parseResultsOpt, null, function binder(x$$2) {
        return (0, _ServiceUntypedParse.FSharpParseFileResults$$get_ParseTree)(x$$2);
      }), null, function mapping(parsedInput) {
        return (0, _ServiceUntypedParse.UntypedParseImpl$$$GetFullNameOfSmallestModuleOrNamespaceAtPoint)(parsedInput, (0, _range.mkPos)(line, 0));
      });
      const isAttributeApplication = (0, _Util.equals)(ctx, new _ServiceUntypedParse.CompletionContext(5, "AttributeApplication"));
      return (0, _ServiceDeclarationLists.FSharpDeclarationListInfo$$$Create$$Z76BB07D2)(__$$3.infoReader, m$$2, denv, getAccessibility, items$$1, __$$3.reactorOps, currentNamespaceOrModule, isAttributeApplication, __$$3.checkAlive);
    } else {
      return (0, _ServiceDeclarationLists.FSharpDeclarationListInfo$$$get_Empty)();
    }
  }, function (msg$$1) {
    (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("FCS: recovering from error in GetDeclarations: '%s'"))(msg$$1));
    return (0, _ServiceDeclarationLists.FSharpDeclarationListInfo$$$Error$$Z721C83C5)(msg$$1);
  });
}

function TypeCheckInfo$$GetDeclarationListSymbols$$74446B08(__$$4, ctok$$1, parseResultsOpt$$1, line$$1, lineStr$$1, partialName$$1, getAllEntities$$1, hasTextChangedSinceLastTypecheck$$1) {
  const isInterfaceFile$$1 = (0, _ServiceUntypedParse.SourceFileImpl$$$IsInterfaceFile)(__$$4.mainInputFileName);
  return (0, _SymbolHelpers.ErrorScope$$$Protect)(_range.range0, function () {
    const matchValue$$1 = TypeCheckInfo$$GetDeclItemsForNamesAtPosition$$Z51745532(__$$4, ctok$$1, parseResultsOpt$$1, partialName$$1.QualifyingIdents, partialName$$1.PartialIdent, partialName$$1.LastDotPos, line$$1, lineStr$$1, partialName$$1.EndColumn + 1, new _NameResolution.TypeNameResolutionFlag(0, "ResolveTypeNamesToCtors"), new ResolveOverloads(0, "Yes"), getAllEntities$$1, hasTextChangedSinceLastTypecheck$$1);

    if (matchValue$$1 != null) {
      const m$$3 = matchValue$$1[3];
      const items$$2 = matchValue$$1[0];
      const denv$$1 = matchValue$$1[1];
      const items$$3 = isInterfaceFile$$1 ? (0, _List.filter)(function predicate$$1(x$$3) {
        return TypeCheckInfo$$IsValidSignatureFileItem$$15FD5CB0(__$$4, (0, _SymbolHelpers.CompletionItem$$get_Item)(x$$3));
      }, items$$2) : items$$2;
      const items$$4 = (0, _SymbolHelpers.SymbolHelpers$$$RemoveExplicitlySuppressedCompletionItems)(__$$4.g, items$$3);
      const items$$5 = (0, _List.sortBy)(function projection(d) {
        let n;
        const matchValue$$2 = (0, _SymbolHelpers.CompletionItem$$get_Item)(d);
        var $target$$43, tcref, tcref$$1, cinfo;

        if (matchValue$$2.tag === 14) {
          if (matchValue$$2.fields[1].tail != null) {
            if (matchValue$$2.fields[1].head.tag === 1) {
              $target$$43 = 0;
              tcref = matchValue$$2.fields[1].head.fields[0];
            } else {
              $target$$43 = 3;
            }
          } else {
            $target$$43 = 3;
          }
        } else if (matchValue$$2.tag === 12) {
          if (matchValue$$2.fields[0].tag === 1) {
            $target$$43 = 1;
            tcref$$1 = matchValue$$2.fields[0].fields[0];
          } else {
            $target$$43 = 3;
          }
        } else if (matchValue$$2.tag === 13) {
          if (matchValue$$2.fields[0].tag === 1) {
            $target$$43 = 1;
            tcref$$1 = matchValue$$2.fields[0].fields[0];
          } else {
            $target$$43 = 3;
          }
        } else if (matchValue$$2.tag === 11) {
          if (matchValue$$2.fields[1].tail != null) {
            $target$$43 = 2;
            cinfo = matchValue$$2.fields[1].head;
          } else {
            $target$$43 = 3;
          }
        } else {
          $target$$43 = 3;
        }

        switch ($target$$43) {
          case 0:
            {
              n = 1 + (0, _List.length)((0, _tast.EntityRef$$get_TyparsNoRange)(tcref));
              break;
            }

          case 1:
            {
              n = 1000 + (0, _List.length)((0, _tast.EntityRef$$get_TyparsNoRange)(tcref$$1));
              break;
            }

          case 2:
            {
              n = 1000 + 10 * (0, _List.length)((0, _tast.EntityRef$$get_TyparsNoRange)((0, _infos.MethInfo$$get_DeclaringTyconRef)(cinfo)));
              break;
            }

          case 3:
            {
              n = 0;
              break;
            }
        }

        return [(0, _NameResolution.Item$$get_DisplayName)((0, _SymbolHelpers.CompletionItem$$get_Item)(d)), n];
      }, items$$4, {
        Compare: _Util.compareArrays
      });
      const items$$6 = (0, _SymbolHelpers.SymbolHelpers$$$RemoveDuplicateCompletionItems)(__$$4.g, items$$5);
      const items$$7 = (0, _List.groupBy)(function projection$$1(d$$1) {
        const matchValue$$3 = (0, _SymbolHelpers.CompletionItem$$get_Item)(d$$1);
        var $target$$44, tcref$$2, tcref$$3, cinfo$$1;

        if (matchValue$$3.tag === 14) {
          if (matchValue$$3.fields[1].tail != null) {
            if (matchValue$$3.fields[1].head.tag === 1) {
              $target$$44 = 0;
              tcref$$2 = matchValue$$3.fields[1].head.fields[0];
            } else {
              $target$$44 = 3;
            }
          } else {
            $target$$44 = 3;
          }
        } else if (matchValue$$3.tag === 4) {
          $target$$44 = 0;
          tcref$$2 = matchValue$$3.fields[0];
        } else if (matchValue$$3.tag === 22) {
          if (matchValue$$3.fields[0].tail != null) {
            $target$$44 = 1;
            tcref$$3 = matchValue$$3.fields[0].head;
          } else {
            $target$$44 = 3;
          }
        } else if (matchValue$$3.tag === 12) {
          if (matchValue$$3.fields[0].tag === 1) {
            $target$$44 = 1;
            tcref$$3 = matchValue$$3.fields[0].fields[0];
          } else {
            $target$$44 = 3;
          }
        } else if (matchValue$$3.tag === 13) {
          if (matchValue$$3.fields[0].tag === 1) {
            $target$$44 = 1;
            tcref$$3 = matchValue$$3.fields[0].fields[0];
          } else {
            $target$$44 = 3;
          }
        } else if (matchValue$$3.tag === 11) {
          if (matchValue$$3.fields[1].tail != null) {
            $target$$44 = 2;
            cinfo$$1 = matchValue$$3.fields[1].head;
          } else {
            $target$$44 = 3;
          }
        } else {
          $target$$44 = 3;
        }

        switch ($target$$44) {
          case 0:
            {
              return (0, _tast.EntityRef$$get_LogicalName)(tcref$$2);
            }

          case 1:
            {
              return (0, _tast.EntityRef$$get_CompiledName)(tcref$$3);
            }

          case 2:
            {
              return (0, _tast.EntityRef$$get_CompiledName)((0, _infos.MethInfo$$get_ApparentEnclosingTyconRef)(cinfo$$1));
            }

          case 3:
            {
              return (0, _NameResolution.Item$$get_DisplayName)((0, _SymbolHelpers.CompletionItem$$get_Item)(d$$1));
            }
        }
      }, items$$6, {
        Equals($x$$4, $y$$5) {
          return $x$$4 === $y$$5;
        },

        GetHashCode: _Util.structuralHash
      });
      let items$$9;

      const isOpItem = function isOpItem(tupledArg$$1) {
        const matchValue$$4 = (0, _List.map)(function mapping$$1(x$$4) {
          return (0, _SymbolHelpers.CompletionItem$$get_Item)(x$$4);
        }, tupledArg$$1[1]);
        var $target$$45;

        if (matchValue$$4.tail != null) {
          if (matchValue$$4.head.tag === 0) {
            if (matchValue$$4.tail.tail == null) {
              $target$$45 = 0;
            } else {
              $target$$45 = 2;
            }
          } else if (matchValue$$4.head.tag === 10) {
            if (matchValue$$4.head.fields[1].tail != null) {
              if (matchValue$$4.head.fields[1].tail.tail == null) {
                if (matchValue$$4.tail.tail == null) {
                  $target$$45 = 0;
                } else {
                  $target$$45 = 2;
                }
              } else {
                $target$$45 = 2;
              }
            } else {
              $target$$45 = 2;
            }
          } else if (matchValue$$4.head.tag === 1) {
            if (matchValue$$4.tail.tail == null) {
              $target$$45 = 1;
            } else {
              $target$$45 = 2;
            }
          } else {
            $target$$45 = 2;
          }
        } else {
          $target$$45 = 2;
        }

        switch ($target$$45) {
          case 0:
            {
              return (0, _PrettyNaming.IsOperatorName)(tupledArg$$1[0]);
            }

          case 1:
            {
              return (0, _PrettyNaming.IsOperatorName)(tupledArg$$1[0]);
            }

          case 2:
            {
              return false;
            }
        }
      };

      const isFSharpList = function isFSharpList(nm$$1) {
        return nm$$1 === "[]";
      };

      items$$9 = (0, _List.filter)(function predicate$$2(tupledArg$$2) {
        if (!isOpItem([tupledArg$$2[0], tupledArg$$2[1]])) {
          return !isFSharpList(tupledArg$$2[0]);
        } else {
          return false;
        }
      }, items$$7);
      const items$$11 = (0, _List.map)(function mapping$$3(tupledArg$$3) {
        if (tupledArg$$3[1].tail == null) {
          throw new Error("Unexpected empty bag");
        } else {
          const items$$10 = tupledArg$$3[1];
          return (0, _List.map)(function mapping$$2(item$$5) {
            const symbol$$1 = (0, _Symbols.FSharpSymbol$$$Create$$Z5DC96FA7)(__$$4.cenv, (0, _SymbolHelpers.CompletionItem$$get_Item)(item$$5));
            return (0, _Symbols.FSharpSymbolUse$$$$002Ector$$1376C06A)(__$$4.g, denv$$1, symbol$$1, new _NameResolution.ItemOccurence(1, "Use"), m$$3);
          }, items$$10);
        }
      }, items$$9);
      return items$$11;
    } else {
      return (0, _Types.L)();
    }
  }, function (msg$$2) {
    (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("FCS: recovering from error in GetDeclarationListSymbols: '%s'"))(msg$$2));
    return (0, _Types.L)();
  });
}

function TypeCheckInfo$$GetReferenceResolutionStructuredToolTipText$$62A2208D(__$$5, ctok$$2, line$$2, col) {
  (0, _illib.RequireCompilationThread)(ctok$$2);
  const pos = (0, _range.mkPos)(line$$2, col);

  const isPosMatch = function isPosMatch(tupledArg$$4) {
    const isRangeMatch = (0, _range.rangeContainsPos)((0, _CompileOps.AssemblyReference$$get_Range)(tupledArg$$4[1]), tupledArg$$4[0]);
    const isNotSpecialRange = (!(0, _Util.equals)((0, _CompileOps.AssemblyReference$$get_Range)(tupledArg$$4[1]), _range.rangeStartup) ? !(0, _Util.equals)((0, _CompileOps.AssemblyReference$$get_Range)(tupledArg$$4[1]), _range.range0) : false) ? !(0, _Util.equals)((0, _CompileOps.AssemblyReference$$get_Range)(tupledArg$$4[1]), _range.rangeCmdArgs) : false;
    const isMatch = isRangeMatch ? isNotSpecialRange : false;
    return isMatch;
  };

  const dataTipOfReferences = function dataTipOfReferences() {
    let matches;

    if (__$$5.loadClosure != null) {
      const loadClosure$$1 = __$$5.loadClosure;
      matches = (0, _List.filter)(function predicate$$3(ar$$1) {
        return isPosMatch([pos, ar$$1.originalReference]);
      }, (0, _List.concat)((0, _List.map)(function mapping$$4(tuple) {
        return tuple[1];
      }, loadClosure$$1.References)));
    } else {
      matches = (0, _Types.L)();
    }

    if (matches.tail == null) {
      return new _SymbolHelpers.FSharpToolTipText$00601(0, "FSharpToolTipText", (0, _Types.L)());
    } else {
      const resolved = matches.head;
      const tip = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagStringLiteral)((0, _String.trimEnd)(resolved.prepareToolTip(), "\n")));
      return new _SymbolHelpers.FSharpToolTipText$00601(0, "FSharpToolTipText", (0, _Types.L)((0, _SymbolHelpers.FSharpToolTipElement$00601$$$Single$$51614AC)(tip, new _SymbolHelpers.FSharpXmlDoc(0, "None")), (0, _Types.L)()));
    }
  };

  return (0, _SymbolHelpers.ErrorScope$$$Protect)(_range.range0, dataTipOfReferences, function (err) {
    (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("FCS: recovering from error in GetReferenceResolutionStructuredToolTipText: '%s'"))(err));
    return new _SymbolHelpers.FSharpToolTipText$00601(0, "FSharpToolTipText", (0, _Types.L)(new _SymbolHelpers.FSharpToolTipElement$00601(2, "CompositionError", err), (0, _Types.L)()));
  });
}

function TypeCheckInfo$$GetStructuredToolTipText$$Z1FAAFC39(__$$6, ctok$$3, line$$3, lineStr$$2, colAtEndOfNames, names) {
  const Compute = function Compute() {
    return (0, _SymbolHelpers.ErrorScope$$$Protect)(_range.range0, function () {
      const matchValue$$6 = TypeCheckInfo$$GetDeclItemsForNamesAtPosition$$Z51745532(__$$6, ctok$$3, null, names, null, null, line$$3, lineStr$$2, colAtEndOfNames, new _NameResolution.TypeNameResolutionFlag(0, "ResolveTypeNamesToCtors"), new ResolveOverloads(0, "Yes"), function getAllSymbols() {
        return (0, _Types.L)();
      }, function hasTextChangedSinceLastTypecheck$$2(_arg22) {
        return false;
      });

      if (matchValue$$6 != null) {
        const m$$4 = matchValue$$6[3];
        const items$$12 = matchValue$$6[0];
        const denv$$2 = matchValue$$6[1];
        return new _SymbolHelpers.FSharpToolTipText$00601(0, "FSharpToolTipText", (0, _List.map)(function mapping$$5(x$$5) {
          return (0, _SymbolHelpers.SymbolHelpers$$$FormatStructuredDescriptionOfItem)(false, __$$6.infoReader, m$$4, denv$$2, x$$5.ItemWithInst);
        }, items$$12));
      } else {
        return new _SymbolHelpers.FSharpToolTipText$00601(0, "FSharpToolTipText", (0, _Types.L)());
      }
    }, function (err$$1) {
      (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("FCS: recovering from error in GetStructuredToolTipText: '%s'"))(err$$1));
      return new _SymbolHelpers.FSharpToolTipText$00601(0, "FSharpToolTipText", (0, _Types.L)(new _SymbolHelpers.FSharpToolTipElement$00601(2, "CompositionError", err$$1), (0, _Types.L)()));
    });
  };

  const key = [line$$3, colAtEndOfNames, lineStr$$2];
  const matchValue$$7 = (0, _InternalCollections.AgedLookup$00603$$TryGet$$5BDDA1)(__$$6.getToolTipTextCache, ctok$$3, key);

  if (matchValue$$7 == null) {
    const res$$1 = Compute();
    (0, _InternalCollections.AgedLookup$00603$$Put$$BD52456)(__$$6.getToolTipTextCache, ctok$$3, key, res$$1);
    return res$$1;
  } else {
    const res = matchValue$$7;
    return res;
  }
}

function TypeCheckInfo$$GetF1Keyword$$Z1FAAFC39(__$$7, ctok$$4, line$$4, lineStr$$3, colAtEndOfNames$$1, names$$1) {
  return (0, _SymbolHelpers.ErrorScope$$$Protect)(_range.range0, function () {
    const matchValue$$8 = TypeCheckInfo$$GetDeclItemsForNamesAtPosition$$Z51745532(__$$7, ctok$$4, null, names$$1, null, null, line$$4, lineStr$$3, colAtEndOfNames$$1, new _NameResolution.TypeNameResolutionFlag(0, "ResolveTypeNamesToCtors"), new ResolveOverloads(1, "No"), function getAllSymbols$$1() {
      return (0, _Types.L)();
    }, function hasTextChangedSinceLastTypecheck$$3(_arg23) {
      return false;
    });

    if (matchValue$$8 != null) {
      const items$$13 = matchValue$$8[0];

      if (items$$13.tail != null) {
        if (items$$13.tail.tail == null) {
          return (0, _SymbolHelpers.SymbolHelpers$$$GetF1Keyword)(__$$7.g, (0, _SymbolHelpers.CompletionItem$$get_Item)(items$$13.head));
        } else {
          const patternInput$$2 = (0, _List.fold)(function (tupledArg$$5, item$$7) {
            const matchValue$$9 = [(0, _SymbolHelpers.CompletionItem$$get_Item)(item$$7), tupledArg$$5[1], tupledArg$$5[2]];
            var $target$$46, t;

            if (matchValue$$9[0].tag === 14) {
              if (matchValue$$9[2] == null) {
                $target$$46 = 0;
                t = matchValue$$9[0];
              } else {
                $target$$46 = 1;
              }
            } else if (matchValue$$9[0].tag === 11) {
              if (matchValue$$9[1] == null) {
                $target$$46 = 2;
              } else {
                $target$$46 = 3;
              }
            } else {
              $target$$46 = 3;
            }

            switch ($target$$46) {
              case 0:
                {
                  return [tupledArg$$5[0], tupledArg$$5[1], t];
                }

              case 1:
                {
                  return [tupledArg$$5[0], tupledArg$$5[1], tupledArg$$5[2]];
                }

              case 2:
                {
                  return [tupledArg$$5[0], (0, _SymbolHelpers.CompletionItem$$get_Item)(item$$7), tupledArg$$5[2]];
                }

              case 3:
                {
                  return [false, null, null];
                }
            }
          }, [true, null, null], items$$13);
          const matchValue$$10 = [patternInput$$2[0], patternInput$$2[1], patternInput$$2[2]];
          var $target$$47, item$$8, ty$$2;

          if (matchValue$$10[0]) {
            if (matchValue$$10[1] != null) {
              if (matchValue$$10[1].tag === 11) {
                $target$$47 = 0;
                item$$8 = matchValue$$10[1];
              } else if (matchValue$$10[2] != null) {
                $target$$47 = 1;
                ty$$2 = matchValue$$10[2];
              } else {
                $target$$47 = 2;
              }
            } else if (matchValue$$10[2] != null) {
              $target$$47 = 1;
              ty$$2 = matchValue$$10[2];
            } else {
              $target$$47 = 2;
            }
          } else {
            $target$$47 = 2;
          }

          switch ($target$$47) {
            case 0:
              {
                return (0, _SymbolHelpers.SymbolHelpers$$$GetF1Keyword)(__$$7.g, item$$8);
              }

            case 1:
              {
                return (0, _SymbolHelpers.SymbolHelpers$$$GetF1Keyword)(__$$7.g, ty$$2);
              }

            case 2:
              {
                return null;
              }
          }
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  }, function (msg$$3) {
    (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("FCS: recovering from error in GetF1Keyword: '%s'"))(msg$$3));
    return null;
  });
}

function TypeCheckInfo$$GetMethods$$Z46B519EE(__$$8, ctok$$5, line$$5, lineStr$$4, colAtEndOfNames$$2, namesOpt) {
  return (0, _SymbolHelpers.ErrorScope$$$Protect)(_range.range0, function () {
    const matchValue$$11 = TypeCheckInfo$$GetDeclItemsForNamesAtPosition$$Z51745532(__$$8, ctok$$5, null, namesOpt, null, null, line$$5, lineStr$$4, colAtEndOfNames$$2, new _NameResolution.TypeNameResolutionFlag(0, "ResolveTypeNamesToCtors"), new ResolveOverloads(1, "No"), function getAllSymbols$$2() {
      return (0, _Types.L)();
    }, function hasTextChangedSinceLastTypecheck$$4(_arg24) {
      return false;
    });

    if (matchValue$$11 != null) {
      const m$$5 = matchValue$$11[3];
      const items$$14 = matchValue$$11[0];
      const denv$$3 = matchValue$$11[1];
      const ctors = (0, _List.filter)(function predicate$$4(x$$6) {
        if ((0, _SymbolHelpers.CompletionItem$$get_Item)(x$$6).tag === 11) {
          return true;
        } else {
          return false;
        }
      }, items$$14);
      let items$$15;

      if (ctors.tail == null) {
        items$$15 = items$$14;
      } else {
        const ctors$$1 = ctors;
        items$$15 = ctors$$1;
      }

      return (0, _ServiceDeclarationLists.FSharpMethodGroup$$$Create$$Z19558353)(__$$8.infoReader, m$$5, denv$$3, (0, _List.map)(function mapping$$6(x$$7) {
        return x$$7.ItemWithInst;
      }, items$$15));
    } else {
      return (0, _ServiceDeclarationLists.FSharpMethodGroup$$$$002Ector$$5F5A1124)("", []);
    }
  }, function (msg$$4) {
    (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("FCS: recovering from error in GetMethods: '%s'"))(msg$$4));
    return (0, _ServiceDeclarationLists.FSharpMethodGroup$$$$002Ector$$5F5A1124)(msg$$4, []);
  });
}

function TypeCheckInfo$$GetMethodsAsSymbols$$Z1FAAFC39(__$$9, ctok$$6, line$$6, lineStr$$5, colAtEndOfNames$$3, names$$2) {
  return (0, _SymbolHelpers.ErrorScope$$$Protect)(_range.range0, function () {
    const matchValue$$13 = TypeCheckInfo$$GetDeclItemsForNamesAtPosition$$Z51745532(__$$9, ctok$$6, null, names$$2, null, null, line$$6, lineStr$$5, colAtEndOfNames$$3, new _NameResolution.TypeNameResolutionFlag(0, "ResolveTypeNamesToCtors"), new ResolveOverloads(1, "No"), function getAllSymbols$$3() {
      return (0, _Types.L)();
    }, function hasTextChangedSinceLastTypecheck$$5(_arg25) {
      return false;
    });
    var $target$$48, denv$$4, items$$16, m$$6;

    if (matchValue$$13 != null) {
      if (matchValue$$13[0].tail == null) {
        $target$$48 = 0;
      } else {
        $target$$48 = 1;
        denv$$4 = matchValue$$13[1];
        items$$16 = matchValue$$13[0];
        m$$6 = matchValue$$13[3];
      }
    } else {
      $target$$48 = 0;
    }

    switch ($target$$48) {
      case 0:
        {
          return null;
        }

      case 1:
        {
          const allItems = (0, _List.collect)(function mapping$$7(item$$9) {
            return (0, _SymbolHelpers.SymbolHelpers$$$FlattenItems)(__$$9.g, m$$6, (0, _SymbolHelpers.CompletionItem$$get_Item)(item$$9));
          }, items$$16);
          const symbols = (0, _List.map)(function mapping$$8(item$$10) {
            return (0, _Symbols.FSharpSymbol$$$Create$$Z5DC96FA7)(__$$9.cenv, item$$10);
          }, allItems);
          return [symbols, denv$$4, m$$6];
        }
    }
  }, function (msg$$5) {
    (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("FCS: recovering from error in GetMethodsAsSymbols: '%s'"))(msg$$5));
    return null;
  });
}

function TypeCheckInfo$$GetDeclarationLocation$$Z66EB2048(__$$10, ctok$$7, line$$7, lineStr$$6, colAtEndOfNames$$4, names$$3, preferFlag) {
  return (0, _SymbolHelpers.ErrorScope$$$Protect)(_range.range0, function () {
    var tr$$2, tr, typeInfo$$2, eventDef, typeInfo, fieldDef, matchValue$$23;
    const matchValue$$14 = TypeCheckInfo$$GetDeclItemsForNamesAtPosition$$Z51745532(__$$10, ctok$$7, null, names$$3, null, null, line$$7, lineStr$$6, colAtEndOfNames$$4, new _NameResolution.TypeNameResolutionFlag(0, "ResolveTypeNamesToCtors"), new ResolveOverloads(0, "Yes"), function getAllSymbols$$4() {
      return (0, _Types.L)();
    }, function hasTextChangedSinceLastTypecheck$$6(_arg26) {
      return false;
    });
    var $target$$49, item$$11;

    if (matchValue$$14 != null) {
      if (matchValue$$14[0].tail != null) {
        $target$$49 = 1;
        item$$11 = matchValue$$14[0].head;
      } else {
        $target$$49 = 0;
      }
    } else {
      $target$$49 = 0;
    }

    switch ($target$$49) {
      case 0:
        {
          return new FSharpFindDeclResult(0, "DeclNotFound", new FSharpFindDeclFailureReason(0, "Unknown", ""));
        }

      case 1:
        {
          const getTypeVarNames = function getTypeVarNames(ilinfo) {
            const classTypeParams = (0, _List.map)(function mapping$$9(paramDef) {
              return paramDef.Name;
            }, (0, _il.ILTypeDef$$get_GenericParams)((0, _tast.EntityRef$$get_ILTyconRawMetadata)((0, _infos.ILMethInfo$$get_DeclaringTyconRef)(ilinfo))));
            const methodTypeParams = (0, _List.map)(function mapping$$10(ty$$3) {
              return (0, _tast.Typar$$get_Name)(ty$$3);
            }, (0, _infos.ILMethInfo$$get_FormalMethodTypars)(ilinfo));
            return (0, _Array.ofList)((0, _List.append)(classTypeParams, methodTypeParams), Array);
          };

          let result;
          const matchValue$$15 = (0, _SymbolHelpers.CompletionItem$$get_Item)(item$$11);
          var $target$$50, ilinfo$$1, ilinfo$$2, name, name$$1, propInfo, fieldDef$$1, typeInfo$$1;

          if (matchValue$$15.tag === 11) {
            if (matchValue$$15.fields[1].tail != null) {
              if (matchValue$$15.fields[1].head.tag === 1) {
                $target$$50 = 0;
                ilinfo$$1 = matchValue$$15.fields[1].head.fields[1];
              } else {
                $target$$50 = 4;
              }
            } else {
              $target$$50 = 4;
            }
          } else if (matchValue$$15.tag === 10) {
            if (matchValue$$15.fields[1].tail != null) {
              if (matchValue$$15.fields[1].head.tag === 1) {
                $target$$50 = 1;
                ilinfo$$2 = matchValue$$15.fields[1].head.fields[1];
                name = matchValue$$15.fields[0];
              } else {
                $target$$50 = 4;
              }
            } else {
              $target$$50 = 4;
            }
          } else if (matchValue$$15.tag === 9) {
            if (matchValue$$15.fields[1].tail != null) {
              if (matchValue$$15.fields[1].head.tag === 1) {
                $target$$50 = 2;
                name$$1 = matchValue$$15.fields[0];
                propInfo = matchValue$$15.fields[1].head.fields[0];
              } else {
                $target$$50 = 4;
              }
            } else {
              $target$$50 = 4;
            }
          } else if (matchValue$$15.tag === 7) {
            if (typeInfo = matchValue$$15.fields[0].fields[0], (fieldDef = matchValue$$15.fields[0].fields[1], !(0, _tast.EntityRef$$get_IsLocalRef)((0, _infos.ILTypeInfo$$get_TyconRefOfRawMetadata)(typeInfo)))) {
              $target$$50 = 3;
              fieldDef$$1 = matchValue$$15.fields[0].fields[1];
              typeInfo$$1 = matchValue$$15.fields[0].fields[0];
            } else {
              $target$$50 = 4;
            }
          } else {
            $target$$50 = 4;
          }

          switch ($target$$50) {
            case 0:
              {
                const matchValue$$16 = (0, _infos.ILMethInfo$$get_MetadataScope)(ilinfo$$1);

                if (matchValue$$16.tag === 2) {
                  const assref = matchValue$$16.fields[0];
                  const typeVarNames = getTypeVarNames(ilinfo$$1);
                  result = (0, _Option.defaultArg)((0, _ExternalSymbol.ParamTypeSymbolModule$$$tryOfILTypes)(typeVarNames, (0, _il.ILMethodRef$$get_ArgTypes)((0, _infos.ILMethInfo$$get_ILMethodRef)(ilinfo$$1))), null, function mapping$$11(args) {
                    const externalSym = new _ExternalSymbol.ExternalSymbol(1, "Constructor", (0, _il.ILTypeRef$$get_FullName)((0, _il.ILMethodRef$$get_DeclaringTypeRef)((0, _infos.ILMethInfo$$get_ILMethodRef)(ilinfo$$1))), args);
                    return new FSharpFindDeclResult(2, "ExternalDecl", (0, _il.ILAssemblyRef$$get_Name)(assref), externalSym);
                  });
                } else {
                  result = null;
                }

                break;
              }

            case 1:
              {
                const matchValue$$17 = (0, _infos.ILMethInfo$$get_MetadataScope)(ilinfo$$2);

                if (matchValue$$17.tag === 2) {
                  const assref$$1 = matchValue$$17.fields[0];
                  const typeVarNames$$1 = getTypeVarNames(ilinfo$$2);
                  result = (0, _Option.defaultArg)((0, _ExternalSymbol.ParamTypeSymbolModule$$$tryOfILTypes)(typeVarNames$$1, (0, _il.ILMethodRef$$get_ArgTypes)((0, _infos.ILMethInfo$$get_ILMethodRef)(ilinfo$$2))), null, function mapping$$12(args$$1) {
                    const externalSym$$1 = new _ExternalSymbol.ExternalSymbol(2, "Method", (0, _il.ILTypeRef$$get_FullName)((0, _il.ILMethodRef$$get_DeclaringTypeRef)((0, _infos.ILMethInfo$$get_ILMethodRef)(ilinfo$$2))), name, args$$1, (0, _il.ILMethodRef$$get_GenericArity)((0, _infos.ILMethInfo$$get_ILMethodRef)(ilinfo$$2)));
                    return new FSharpFindDeclResult(2, "ExternalDecl", (0, _il.ILAssemblyRef$$get_Name)(assref$$1), externalSym$$1);
                  });
                } else {
                  result = null;
                }

                break;
              }

            case 2:
              {
                const methInfo = (0, _infos.ILPropInfo$$get_HasGetter)(propInfo) ? (0, _infos.ILPropInfo$$get_GetterMethod)(propInfo) : (0, _infos.ILPropInfo$$get_HasSetter)(propInfo) ? (0, _infos.ILPropInfo$$get_SetterMethod)(propInfo) : null;

                if (methInfo == null) {
                  result = null;
                } else {
                  const methInfo$$1 = methInfo;
                  const matchValue$$18 = (0, _infos.ILMethInfo$$get_MetadataScope)(methInfo$$1);

                  if (matchValue$$18.tag === 2) {
                    const assref$$2 = matchValue$$18.fields[0];
                    const externalSym$$2 = new _ExternalSymbol.ExternalSymbol(5, "Property", (0, _il.ILTypeRef$$get_FullName)((0, _il.ILMethodRef$$get_DeclaringTypeRef)((0, _infos.ILMethInfo$$get_ILMethodRef)(methInfo$$1))), name$$1);
                    result = new FSharpFindDeclResult(2, "ExternalDecl", (0, _il.ILAssemblyRef$$get_Name)(assref$$2), externalSym$$2);
                  } else {
                    result = null;
                  }
                }

                break;
              }

            case 3:
              {
                const matchValue$$19 = (0, _infos.ILTypeInfo$$get_ILScopeRef)(typeInfo$$1);

                if (matchValue$$19.tag === 2) {
                  const assref$$3 = matchValue$$19.fields[0];
                  const externalSym$$3 = new _ExternalSymbol.ExternalSymbol(3, "Field", (0, _il.ILTypeRef$$get_FullName)((0, _infos.ILTypeInfo$$get_ILTypeRef)(typeInfo$$1)), (0, _il.ILFieldDef$$get_Name)(fieldDef$$1));
                  result = new FSharpFindDeclResult(2, "ExternalDecl", (0, _il.ILAssemblyRef$$get_Name)(assref$$3), externalSym$$3);
                } else {
                  result = null;
                }

                break;
              }

            case 4:
              {
                var $target$$51, eventDef$$1, typeInfo$$3;

                if (matchValue$$15.tag === 8) {
                  if (matchValue$$15.fields[0].tag === 1) {
                    if (typeInfo$$2 = matchValue$$15.fields[0].fields[0].fields[0], (eventDef = matchValue$$15.fields[0].fields[0].fields[1], !(0, _tast.EntityRef$$get_IsLocalRef)((0, _infos.ILTypeInfo$$get_TyconRefOfRawMetadata)(typeInfo$$2)))) {
                      $target$$51 = 0;
                      eventDef$$1 = matchValue$$15.fields[0].fields[0].fields[1];
                      typeInfo$$3 = matchValue$$15.fields[0].fields[0].fields[0];
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
                      const matchValue$$20 = (0, _infos.ILTypeInfo$$get_ILScopeRef)(typeInfo$$3);

                      if (matchValue$$20.tag === 2) {
                        const assref$$4 = matchValue$$20.fields[0];
                        const externalSym$$4 = new _ExternalSymbol.ExternalSymbol(4, "Event", (0, _il.ILTypeRef$$get_FullName)((0, _infos.ILTypeInfo$$get_ILTypeRef)(typeInfo$$3)), (0, _il.ILEventDef$$get_Name)(eventDef$$1));
                        result = new FSharpFindDeclResult(2, "ExternalDecl", (0, _il.ILAssemblyRef$$get_Name)(assref$$4), externalSym$$4);
                      } else {
                        result = null;
                      }

                      break;
                    }

                  case 1:
                    {
                      var $target$$52, _vref, tr$$1;

                      if (matchValue$$15.tag === 19) {
                        if (matchValue$$15.fields[1].contents != null) {
                          if (matchValue$$15.fields[1].contents.tag === 0) {
                            $target$$52 = 0;
                            _vref = matchValue$$15.fields[1].contents.fields[1];
                          } else {
                            $target$$52 = 2;
                          }
                        } else {
                          $target$$52 = 2;
                        }
                      } else if (matchValue$$15.tag === 14) {
                        if (matchValue$$15.fields[1].tail != null) {
                          if (matchValue$$15.fields[1].head.tag === 1) {
                            if (tr = matchValue$$15.fields[1].head.fields[0], (0, _tast.EntityRef$$get_IsLocalRef)(tr) ? (0, _tast.EntityRef$$get_IsTypeAbbrev)(tr) : false) {
                              $target$$52 = 1;
                              tr$$1 = matchValue$$15.fields[1].head.fields[0];
                            } else {
                              $target$$52 = 2;
                            }
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
                            result = null;
                            break;
                          }

                        case 1:
                          {
                            result = null;
                            break;
                          }

                        case 2:
                          {
                            var $target$$53, tr$$3;

                            if (matchValue$$15.tag === 14) {
                              if (matchValue$$15.fields[1].tail != null) {
                                const activePatternResult61870 = (0, _TastOps.$007CAppTy$007C_$007C)(__$$10.g, matchValue$$15.fields[1].head);

                                if (activePatternResult61870 != null) {
                                  if (matchValue$$15.fields[1].tail.tail == null) {
                                    if (tr$$2 = activePatternResult61870[0], !(0, _tast.EntityRef$$get_IsLocalRef)(tr$$2)) {
                                      $target$$53 = 0;
                                      tr$$3 = activePatternResult61870[0];
                                    } else {
                                      $target$$53 = 1;
                                    }
                                  } else {
                                    $target$$53 = 1;
                                  }
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
                                  const matchValue$$21 = [(0, _tast.EntityRef$$get_TypeReprInfo)(tr$$3), (0, _tast.EntityRef$$get_PublicPath)(tr$$3)];
                                  var $target$$54, assref$$5, parts;

                                  if (matchValue$$21[0].tag === 3) {
                                    if (matchValue$$21[0].fields[0].fields[0].tag === 2) {
                                      if (matchValue$$21[1] != null) {
                                        $target$$54 = 0;
                                        assref$$5 = matchValue$$21[0].fields[0].fields[0].fields[0];
                                        parts = matchValue$$21[1].fields[0];
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
                                        const fullName = (0, _String.join)(".", ...parts);
                                        result = new FSharpFindDeclResult(2, "ExternalDecl", (0, _il.ILAssemblyRef$$get_Name)(assref$$5), new _ExternalSymbol.ExternalSymbol(0, "Type", fullName));
                                        break;
                                      }

                                    case 1:
                                      {
                                        result = null;
                                        break;
                                      }
                                  }

                                  break;
                                }

                              case 1:
                                {
                                  result = null;
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

          if (result == null) {
            const matchValue$$22 = (0, _SymbolHelpers.SymbolHelpers$$$rangeOfItem)(__$$10.g, preferFlag, (0, _SymbolHelpers.CompletionItem$$get_Item)(item$$11));

            if (matchValue$$22 == null) {
              return new FSharpFindDeclResult(0, "DeclNotFound", (matchValue$$23 = (0, _SymbolHelpers.CompletionItem$$get_Item)(item$$11), new FSharpFindDeclFailureReason(0, "Unknown", "")));
            } else {
              const itemRange = matchValue$$22;
              const projectDir = (0, _filename.directoryName)(__$$10.projectFileName === "" ? __$$10.mainInputFileName : __$$10.projectFileName);
              const range = (0, _SymbolHelpers.SymbolHelpers$$$fileNameOfItem)(__$$10.g, projectDir, itemRange, (0, _SymbolHelpers.CompletionItem$$get_Item)(item$$11));
              return new FSharpFindDeclResult(1, "DeclFound", (0, _range.mkRange)(range, (0, _range.range$$get_Start)(itemRange), (0, _range.range$$get_End)(itemRange)));
            }
          } else {
            const x$$8 = result;
            return x$$8;
          }
        }
    }
  }, function (msg$$6) {
    (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("FCS: recovering from error in GetDeclarationLocation: '%s'"))(msg$$6));
    return new FSharpFindDeclResult(0, "DeclNotFound", new FSharpFindDeclFailureReason(0, "Unknown", msg$$6));
  });
}

function TypeCheckInfo$$GetSymbolUseAtLocation$$Z1FAAFC39(__$$11, ctok$$8, line$$8, lineStr$$7, colAtEndOfNames$$5, names$$4) {
  return (0, _SymbolHelpers.ErrorScope$$$Protect)(_range.range0, function () {
    const matchValue$$24 = TypeCheckInfo$$GetDeclItemsForNamesAtPosition$$Z51745532(__$$11, ctok$$8, null, names$$4, null, null, line$$8, lineStr$$7, colAtEndOfNames$$5, new _NameResolution.TypeNameResolutionFlag(0, "ResolveTypeNamesToCtors"), new ResolveOverloads(0, "Yes"), function getAllSymbols$$5() {
      return (0, _Types.L)();
    }, function hasTextChangedSinceLastTypecheck$$7(_arg27) {
      return false;
    });
    var $target$$55, denv$$5, item$$12, m$$7;

    if (matchValue$$24 != null) {
      if (matchValue$$24[0].tail != null) {
        $target$$55 = 1;
        denv$$5 = matchValue$$24[1];
        item$$12 = matchValue$$24[0].head;
        m$$7 = matchValue$$24[3];
      } else {
        $target$$55 = 0;
      }
    } else {
      $target$$55 = 0;
    }

    switch ($target$$55) {
      case 0:
        {
          return null;
        }

      case 1:
        {
          const symbol$$2 = (0, _Symbols.FSharpSymbol$$$Create$$Z5DC96FA7)(__$$11.cenv, (0, _SymbolHelpers.CompletionItem$$get_Item)(item$$12));
          return [symbol$$2, denv$$5, m$$7];
        }
    }
  }, function (msg$$7) {
    (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("FCS: recovering from error in GetSymbolUseAtLocation: '%s'"))(msg$$7));
    return null;
  });
}

function TypeCheckInfo$$get_PartialAssemblySignatureForFile(__$$12) {
  return (0, _Symbols.FSharpAssemblySignature$$$$002Ector$$5A9A6713)(__$$12.g, __$$12.thisCcu, __$$12.ccuSigForFile, __$$12.tcImports, null, __$$12.ccuSigForFile);
}

function TypeCheckInfo$$get_AccessRights(__$$13) {
  return __$$13.tcAccessRights;
}

function TypeCheckInfo$$GetReferencedAssemblies(__$$14) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (x$$9) {
      return (0, _Symbols.FSharpAssembly$$$$002Ector$$7E046483)(__$$14.g, __$$14.tcImports, x$$9.FSharpViewOfMetadata);
    }, (0, _CompileOps.TcImports$$GetImportedAssemblies)(__$$14.tcImports));
  }));
}

function TypeCheckInfo$$GetFormatSpecifierLocationsAndArity(__$$15) {
  return (0, _NameResolution.TcSymbolUses$$GetFormatSpecifierLocationsAndArity)(__$$15.sSymbolUses);
}

function TypeCheckInfo$$GetSemanticClassification$$4DDEF99(__$$16, range$$1) {
  return (0, _SymbolHelpers.ErrorScope$$$Protect)(_range.range0, function () {
    const $007CLegitTypeOccurence$007C_$007C = function $007CLegitTypeOccurence$007C_$007C(_arg3) {
      var $target$$56;

      switch (_arg3.tag) {
        case 2:
        case 3:
        case 1:
        case 0:
        case 4:
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

    const $007COptionalArgumentAttribute$007C_$007C = function $007COptionalArgumentAttribute$007C_$007C(ttype) {
      var tref;
      var $target$$57, tref$$1;

      if (ttype.tag === 1) {
        if (tref = ttype.fields[0], (0, _Long.equals)((0, _tast.EntityRef$$get_Stamp)(tref), (0, _tast.EntityRef$$get_Stamp)((0, _TcGlobals.BuiltinAttribInfo$$get_TyconRef)((0, _TcGlobals.TcGlobals$$get_attrib_OptionalArgumentAttribute)(__$$16.g))))) {
          $target$$57 = 0;
          tref$$1 = ttype.fields[0];
        } else {
          $target$$57 = 1;
        }
      } else {
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

    const $007CKeywordIntrinsicValue$007C_$007C = function $007CKeywordIntrinsicValue$007C_$007C(vref) {
      if (((((0, _TastOps.valRefEq)(__$$16.g, (0, _TcGlobals.TcGlobals$$get_raise_vref)(__$$16.g), vref) ? true : (0, _TastOps.valRefEq)(__$$16.g, (0, _TcGlobals.TcGlobals$$get_reraise_vref)(__$$16.g), vref)) ? true : (0, _TastOps.valRefEq)(__$$16.g, (0, _TcGlobals.TcGlobals$$get_typeof_vref)(__$$16.g), vref)) ? true : (0, _TastOps.valRefEq)(__$$16.g, (0, _TcGlobals.TcGlobals$$get_typedefof_vref)(__$$16.g), vref)) ? true : (0, _TastOps.valRefEq)(__$$16.g, (0, _TcGlobals.TcGlobals$$get_sizeof_vref)(__$$16.g), vref)) {
        return (0, _Option.some)(null);
      } else {
        return null;
      }
    };

    const $007CEnumCaseFieldInfo$007C_$007C = function $007CEnumCaseFieldInfo$007C_$007C(rfinfo) {
      const matchValue$$25 = (0, _tast.EntityRef$$get_TypeReprInfo)((0, _infos.RecdFieldInfo$$get_TyconRef)(rfinfo));

      if (matchValue$$25.tag === 0) {
        const x$$10 = matchValue$$25.fields[0];

        if (x$$10.fsobjmodel_kind.tag === 4) {
          return (0, _Option.some)(null);
        } else {
          return null;
        }
      } else {
        return null;
      }
    };

    let resolutions;

    if (range$$1 == null) {
      resolutions = (0, _NameResolution.TcResolutions$$get_CapturedNameResolutions)(__$$16.sResolutions);
    } else {
      const range$$2 = range$$1;
      resolutions = (0, _Seq.filter)(function predicate$$5(cnr) {
        var copyOfStruct, copyOfStruct$$1;

        if ((0, _range.rangeContainsPos)(range$$2, (copyOfStruct = (0, _NameResolution.CapturedNameResolution$$get_Range)(cnr), (0, _range.range$$get_Start)(copyOfStruct)))) {
          return true;
        } else {
          return (0, _range.rangeContainsPos)(range$$2, (copyOfStruct$$1 = (0, _NameResolution.CapturedNameResolution$$get_Range)(cnr), (0, _range.range$$get_End)(copyOfStruct$$1)));
        }
      }, (0, _NameResolution.TcResolutions$$get_CapturedNameResolutions)(__$$16.sResolutions));
    }

    const isDisposableTy = function isDisposableTy(ty$$4) {
      try {
        return function f() {
          return (0, _infos.ExistsHeadTypeInEntireHierarchy)(__$$16.g, __$$16.amap, _range.range0, ty$$4, (0, _TcGlobals.TcGlobals$$get_tcref_System_IDisposable)(__$$16.g));
        }();
      } catch (matchValue$$27) {
        return matchValue$$27 instanceof _ErrorLogger.UnresolvedPathReferenceNoRange ? false : false;
      }
    };

    const isStructTyconRef = function isStructTyconRef(tyconRef) {
      const ty$$5 = (0, _TastOps.generalizedTyconRef)(tyconRef);
      const underlyingTy = (0, _TastOps.stripTyEqnsAndMeasureEqns)(__$$16.g, ty$$5);
      return (0, _TastOps.isStructTy)(__$$16.g, underlyingTy);
    };

    return (0, _Array.append)((0, _Array.map)(function mapping$$13(m$$9) {
      return [m$$9[0], new SemanticClassificationType(7, "Printf")];
    }, (0, _NameResolution.TcSymbolUses$$GetFormatSpecifierLocationsAndArity)(__$$16.sSymbolUses), Array), (0, _Array.ofSeq)((0, _Seq.choose)(function chooser(cnr$$1) {
      var refs, types$$4, tyconRef$$1, types$$2, types, rfinfo$$3, rfinfo$$1, vref$$5, vref$$3, vref$$1;
      const m$$8 = (0, _NameResolution.CapturedNameResolution$$get_Range)(cnr$$1);
      const matchValue$$28 = [(0, _NameResolution.CapturedNameResolution$$get_Item)(cnr$$1), (0, _NameResolution.CapturedNameResolution$$get_ItemOccurence)(cnr$$1)];
      var $target$$58, vref$$2;

      if (matchValue$$28[0].tag === 0) {
        if (matchValue$$28[1].tag === 1) {
          if (vref$$1 = matchValue$$28[0].fields[0], (0, _TastOps.valRefEq)(__$$16.g, (0, _TcGlobals.TcGlobals$$get_seq_vref)(__$$16.g), vref$$1)) {
            $target$$58 = 0;
            vref$$2 = matchValue$$28[0].fields[0];
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
            return [m$$8, new SemanticClassificationType(8, "ComputationExpression")];
          }

        case 1:
          {
            var $target$$59, vref$$4;

            if (matchValue$$28[0].tag === 0) {
              if (vref$$3 = matchValue$$28[0].fields[0], (0, _tast.ValRef$$get_IsMutable)(vref$$3) ? true : (0, _TastOps.isRefCellTy)(__$$16.g, (0, _tast.ValRef$$get_Type)(vref$$3))) {
                $target$$59 = 0;
                vref$$4 = matchValue$$28[0].fields[0];
              } else {
                $target$$59 = 1;
              }
            } else {
              $target$$59 = 1;
            }

            switch ($target$$59) {
              case 0:
                {
                  return [m$$8, new SemanticClassificationType(5, "MutableVar")];
                }

              case 1:
                {
                  var $target$$60;

                  if (matchValue$$28[0].tag === 0) {
                    if ($007CKeywordIntrinsicValue$007C_$007C(matchValue$$28[0].fields[0]) != null) {
                      if (matchValue$$28[1].tag === 1) {
                        $target$$60 = 0;
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
                        return [m$$8, new SemanticClassificationType(9, "IntrinsicFunction")];
                      }

                    case 1:
                      {
                        var $target$$61, vref$$6;

                        if (matchValue$$28[0].tag === 0) {
                          if (vref$$5 = matchValue$$28[0].fields[0], (0, _SymbolHelpers.SymbolHelpers$$$isFunction)(__$$16.g, (0, _tast.ValRef$$get_Type)(vref$$5))) {
                            $target$$61 = 0;
                            vref$$6 = matchValue$$28[0].fields[0];
                          } else {
                            $target$$61 = 1;
                          }
                        } else {
                          $target$$61 = 1;
                        }

                        switch ($target$$61) {
                          case 0:
                            {
                              if ((0, _TastOps.valRefEq)(__$$16.g, (0, _TcGlobals.TcGlobals$$get_range_op_vref)(__$$16.g), vref$$6) ? true : (0, _TastOps.valRefEq)(__$$16.g, (0, _TcGlobals.TcGlobals$$get_range_step_op_vref)(__$$16.g), vref$$6)) {
                                return null;
                              } else if ((0, _tast.ValRef$$get_IsPropertyGetterMethod)(vref$$6) ? true : (0, _tast.ValRef$$get_IsPropertySetterMethod)(vref$$6)) {
                                return [m$$8, new SemanticClassificationType(4, "Property")];
                              } else if ((0, _PrettyNaming.IsOperatorName)((0, _tast.ValRef$$get_DisplayName)(vref$$6))) {
                                return [m$$8, new SemanticClassificationType(13, "Operator")];
                              } else {
                                return [m$$8, new SemanticClassificationType(3, "Function")];
                              }
                            }

                          case 1:
                            {
                              var $target$$62, rfinfo$$2;

                              if (matchValue$$28[0].tag === 5) {
                                if (rfinfo$$1 = matchValue$$28[0].fields[0], (0, _tast.RecdField$$get_IsMutable)((0, _infos.RecdFieldInfo$$get_RecdField)(rfinfo$$1)) ? (0, _infos.RecdFieldInfo$$get_LiteralValue)(rfinfo$$1) == null : false) {
                                  $target$$62 = 0;
                                  rfinfo$$2 = matchValue$$28[0].fields[0];
                                } else {
                                  $target$$62 = 1;
                                }
                              } else {
                                $target$$62 = 1;
                              }

                              switch ($target$$62) {
                                case 0:
                                  {
                                    return [m$$8, new SemanticClassificationType(5, "MutableVar")];
                                  }

                                case 1:
                                  {
                                    var $target$$63, rfinfo$$4;

                                    if (matchValue$$28[0].tag === 5) {
                                      if (rfinfo$$3 = matchValue$$28[0].fields[0], (0, _SymbolHelpers.SymbolHelpers$$$isFunction)(__$$16.g, (0, _infos.RecdFieldInfo$$get_FieldType)(rfinfo$$3))) {
                                        $target$$63 = 0;
                                        rfinfo$$4 = matchValue$$28[0].fields[0];
                                      } else {
                                        $target$$63 = 1;
                                      }
                                    } else {
                                      $target$$63 = 1;
                                    }

                                    switch ($target$$63) {
                                      case 0:
                                        {
                                          return [m$$8, new SemanticClassificationType(3, "Function")];
                                        }

                                      case 1:
                                        {
                                          var $target$$64;

                                          if (matchValue$$28[0].tag === 5) {
                                            if ($007CEnumCaseFieldInfo$007C_$007C(matchValue$$28[0].fields[0]) != null) {
                                              $target$$64 = 0;
                                            } else {
                                              $target$$64 = 1;
                                            }
                                          } else {
                                            $target$$64 = 1;
                                          }

                                          switch ($target$$64) {
                                            case 0:
                                              {
                                                return [m$$8, new SemanticClassificationType(10, "Enumeration")];
                                              }

                                            case 1:
                                              {
                                                var $target$$65;

                                                if (matchValue$$28[0].tag === 10) {
                                                  $target$$65 = 0;
                                                } else if (matchValue$$28[0].tag === 16) {
                                                  if (matchValue$$28[1].tag === 1) {
                                                    $target$$65 = 1;
                                                  } else {
                                                    $target$$65 = 3;
                                                  }
                                                } else if (matchValue$$28[0].tag === 15) {
                                                  if (matchValue$$28[1].tag === 1) {
                                                    $target$$65 = 1;
                                                  } else {
                                                    $target$$65 = 3;
                                                  }
                                                } else if (matchValue$$28[0].tag === 14) {
                                                  if (matchValue$$28[0].fields[1].tail != null) {
                                                    if ($007COptionalArgumentAttribute$007C_$007C(matchValue$$28[0].fields[1].head) != null) {
                                                      if (matchValue$$28[0].fields[1].tail.tail == null) {
                                                        if ($007CLegitTypeOccurence$007C_$007C(matchValue$$28[1]) != null) {
                                                          $target$$65 = 2;
                                                        } else {
                                                          $target$$65 = 3;
                                                        }
                                                      } else {
                                                        $target$$65 = 3;
                                                      }
                                                    } else {
                                                      $target$$65 = 3;
                                                    }
                                                  } else {
                                                    $target$$65 = 3;
                                                  }
                                                } else {
                                                  $target$$65 = 3;
                                                }

                                                switch ($target$$65) {
                                                  case 0:
                                                    {
                                                      return [m$$8, new SemanticClassificationType(3, "Function")];
                                                    }

                                                  case 1:
                                                    {
                                                      return [m$$8, new SemanticClassificationType(8, "ComputationExpression")];
                                                    }

                                                  case 2:
                                                    {
                                                      return null;
                                                    }

                                                  case 3:
                                                    {
                                                      var $target$$66;

                                                      if (matchValue$$28[0].tag === 11) {
                                                        if (matchValue$$28[0].fields[1].tail != null) {
                                                          if (matchValue$$28[0].fields[1].head.tag === 0) {
                                                            if ($007COptionalArgumentAttribute$007C_$007C(matchValue$$28[0].fields[1].head.fields[1]) != null) {
                                                              if (matchValue$$28[0].fields[1].tail.tail == null) {
                                                                if ($007CLegitTypeOccurence$007C_$007C(matchValue$$28[1]) != null) {
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
                                                            return null;
                                                          }

                                                        case 1:
                                                          {
                                                            var $target$$67, types$$1;

                                                            if (matchValue$$28[0].tag === 14) {
                                                              if ($007CLegitTypeOccurence$007C_$007C(matchValue$$28[1]) != null) {
                                                                if (types = matchValue$$28[0].fields[1], (0, _List.exists)(function predicate$$6(arg10$0040$$4) {
                                                                  return (0, _TastOps.isInterfaceTy)(__$$16.g, arg10$0040$$4);
                                                                }, types)) {
                                                                  $target$$67 = 0;
                                                                  types$$1 = matchValue$$28[0].fields[1];
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
                                                                  return [m$$8, new SemanticClassificationType(11, "Interface")];
                                                                }

                                                              case 1:
                                                                {
                                                                  var $target$$68, types$$3;

                                                                  if (matchValue$$28[0].tag === 14) {
                                                                    if ($007CLegitTypeOccurence$007C_$007C(matchValue$$28[1]) != null) {
                                                                      if (types$$2 = matchValue$$28[0].fields[1], (0, _List.exists)(function predicate$$7(arg10$0040$$5) {
                                                                        return (0, _TastOps.isStructTy)(__$$16.g, arg10$0040$$5);
                                                                      }, types$$2)) {
                                                                        $target$$68 = 0;
                                                                        types$$3 = matchValue$$28[0].fields[1];
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
                                                                        return [m$$8, new SemanticClassificationType(1, "ValueType")];
                                                                      }

                                                                    case 1:
                                                                      {
                                                                        var $target$$69, tyconRef$$2;

                                                                        if (matchValue$$28[0].tag === 14) {
                                                                          if (matchValue$$28[0].fields[1].tail != null) {
                                                                            if (matchValue$$28[0].fields[1].head.tag === 1) {
                                                                              if (matchValue$$28[0].fields[1].head.fields[1].tail != null) {
                                                                                if (matchValue$$28[0].fields[1].head.fields[1].head.tag === 6) {
                                                                                  if ($007CLegitTypeOccurence$007C_$007C(matchValue$$28[1]) != null) {
                                                                                    if (tyconRef$$1 = matchValue$$28[0].fields[1].head.fields[0], isStructTyconRef(tyconRef$$1)) {
                                                                                      $target$$69 = 0;
                                                                                      tyconRef$$2 = matchValue$$28[0].fields[1].head.fields[0];
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
                                                                        } else {
                                                                          $target$$69 = 1;
                                                                        }

                                                                        switch ($target$$69) {
                                                                          case 0:
                                                                            {
                                                                              return [m$$8, new SemanticClassificationType(1, "ValueType")];
                                                                            }

                                                                          case 1:
                                                                            {
                                                                              var $target$$70, types$$5;

                                                                              if (matchValue$$28[0].tag === 14) {
                                                                                if ($007CLegitTypeOccurence$007C_$007C(matchValue$$28[1]) != null) {
                                                                                  if (types$$4 = matchValue$$28[0].fields[1], (0, _List.exists)(isDisposableTy, types$$4)) {
                                                                                    $target$$70 = 0;
                                                                                    types$$5 = matchValue$$28[0].fields[1];
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
                                                                                    return [m$$8, new SemanticClassificationType(14, "Disposable")];
                                                                                  }

                                                                                case 1:
                                                                                  {
                                                                                    var $target$$71;

                                                                                    if (matchValue$$28[0].tag === 14) {
                                                                                      if ($007CLegitTypeOccurence$007C_$007C(matchValue$$28[1]) != null) {
                                                                                        $target$$71 = 0;
                                                                                      } else {
                                                                                        $target$$71 = 1;
                                                                                      }
                                                                                    } else {
                                                                                      $target$$71 = 1;
                                                                                    }

                                                                                    switch ($target$$71) {
                                                                                      case 0:
                                                                                        {
                                                                                          return [m$$8, new SemanticClassificationType(0, "ReferenceType")];
                                                                                        }

                                                                                      case 1:
                                                                                        {
                                                                                          var $target$$72;

                                                                                          if (matchValue$$28[0].tag === 17) {
                                                                                            if ($007CLegitTypeOccurence$007C_$007C(matchValue$$28[1]) != null) {
                                                                                              $target$$72 = 0;
                                                                                            } else {
                                                                                              $target$$72 = 1;
                                                                                            }
                                                                                          } else {
                                                                                            $target$$72 = 1;
                                                                                          }

                                                                                          switch ($target$$72) {
                                                                                            case 0:
                                                                                              {
                                                                                                return [m$$8, new SemanticClassificationType(12, "TypeArgument")];
                                                                                              }

                                                                                            case 1:
                                                                                              {
                                                                                                var $target$$73, tyconRefs;

                                                                                                if (matchValue$$28[0].tag === 22) {
                                                                                                  if ($007CLegitTypeOccurence$007C_$007C(matchValue$$28[1]) != null) {
                                                                                                    $target$$73 = 0;
                                                                                                    tyconRefs = matchValue$$28[0].fields[0];
                                                                                                  } else {
                                                                                                    $target$$73 = 1;
                                                                                                  }
                                                                                                } else {
                                                                                                  $target$$73 = 1;
                                                                                                }

                                                                                                switch ($target$$73) {
                                                                                                  case 0:
                                                                                                    {
                                                                                                      if ((0, _List.exists)(function predicate$$8(tyconRef$$3) {
                                                                                                        return (0, _tast.Entity$$get_IsStructOrEnumTycon)((0, _tast.EntityRef$$get_Deref)(tyconRef$$3));
                                                                                                      }, tyconRefs)) {
                                                                                                        return [m$$8, new SemanticClassificationType(1, "ValueType")];
                                                                                                      } else {
                                                                                                        return [m$$8, new SemanticClassificationType(0, "ReferenceType")];
                                                                                                      }
                                                                                                    }

                                                                                                  case 1:
                                                                                                    {
                                                                                                      var $target$$74, minfos;

                                                                                                      if (matchValue$$28[0].tag === 11) {
                                                                                                        if ($007CLegitTypeOccurence$007C_$007C(matchValue$$28[1]) != null) {
                                                                                                          $target$$74 = 0;
                                                                                                          minfos = matchValue$$28[0].fields[1];
                                                                                                        } else {
                                                                                                          $target$$74 = 1;
                                                                                                        }
                                                                                                      } else {
                                                                                                        $target$$74 = 1;
                                                                                                      }

                                                                                                      switch ($target$$74) {
                                                                                                        case 0:
                                                                                                          {
                                                                                                            if ((0, _List.exists)(function predicate$$9(minfo) {
                                                                                                              return (0, _TastOps.isStructTy)(__$$16.g, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo));
                                                                                                            }, minfos)) {
                                                                                                              return [m$$8, new SemanticClassificationType(1, "ValueType")];
                                                                                                            } else {
                                                                                                              return [m$$8, new SemanticClassificationType(0, "ReferenceType")];
                                                                                                            }
                                                                                                          }

                                                                                                        case 1:
                                                                                                          {
                                                                                                            var $target$$75;

                                                                                                            if (matchValue$$28[0].tag === 4) {
                                                                                                              if ($007CLegitTypeOccurence$007C_$007C(matchValue$$28[1]) != null) {
                                                                                                                $target$$75 = 0;
                                                                                                              } else {
                                                                                                                $target$$75 = 1;
                                                                                                              }
                                                                                                            } else {
                                                                                                              $target$$75 = 1;
                                                                                                            }

                                                                                                            switch ($target$$75) {
                                                                                                              case 0:
                                                                                                                {
                                                                                                                  return [m$$8, new SemanticClassificationType(0, "ReferenceType")];
                                                                                                                }

                                                                                                              case 1:
                                                                                                                {
                                                                                                                  var $target$$76, refs$$1;

                                                                                                                  if (matchValue$$28[0].tag === 18) {
                                                                                                                    if ($007CLegitTypeOccurence$007C_$007C(matchValue$$28[1]) != null) {
                                                                                                                      if (refs = matchValue$$28[0].fields[0], (0, _List.exists)(function predicate$$10(x$$11) {
                                                                                                                        return (0, _tast.EntityRef$$get_IsModule)(x$$11);
                                                                                                                      }, refs)) {
                                                                                                                        $target$$76 = 0;
                                                                                                                        refs$$1 = matchValue$$28[0].fields[0];
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
                                                                                                                        return [m$$8, new SemanticClassificationType(6, "Module")];
                                                                                                                      }

                                                                                                                    case 1:
                                                                                                                      {
                                                                                                                        var $target$$77;

                                                                                                                        if (matchValue$$28[0].tag === 3) {
                                                                                                                          $target$$77 = 0;
                                                                                                                        } else if (matchValue$$28[0].tag === 1) {
                                                                                                                          $target$$77 = 0;
                                                                                                                        } else if (matchValue$$28[0].tag === 2) {
                                                                                                                          $target$$77 = 0;
                                                                                                                        } else {
                                                                                                                          $target$$77 = 1;
                                                                                                                        }

                                                                                                                        switch ($target$$77) {
                                                                                                                          case 0:
                                                                                                                            {
                                                                                                                              return [m$$8, new SemanticClassificationType(2, "UnionCase")];
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
                        }
                      }
                  }
                }
            }
          }
      }
    }, resolutions), Array), Array);
  }, function (msg$$8) {
    (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("FCS: recovering from error in GetSemanticClassification: '%s'"))(msg$$8));
    return new Array(0);
  });
}

function TypeCheckInfo$$get_ScopeResolutions(__$$17) {
  return __$$17.sResolutions;
}

function TypeCheckInfo$$get_ScopeSymbolUses(__$$18) {
  return __$$18.sSymbolUses;
}

function TypeCheckInfo$$get_TcGlobals(__$$19) {
  return __$$19.g;
}

function TypeCheckInfo$$get_TcImports(__$$20) {
  return __$$20.tcImports;
}

function TypeCheckInfo$$get_CcuSigForFile(__$$21) {
  return __$$21.ccuSigForFile;
}

function TypeCheckInfo$$get_ThisCcu(__$$22) {
  return __$$22.thisCcu;
}

function TypeCheckInfo$$get_ImplementationFile(__$$23) {
  return __$$23.implFileOpt;
}

function TypeCheckInfo$$get_OpenDeclarations(__$$24) {
  return __$$24.openDeclarations;
}

function TypeCheckInfo$$get_SymbolEnv(__$$25) {
  return __$$25.cenv;
}

TypeCheckInfo.prototype.toString = function () {
  const __$$26 = this;
  return "TypeCheckInfo(" + __$$26.mainInputFileName + ")";
};

function TypeCheckInfo$$$007CCNR$007C$$Z2B1E11D4(this$, cnr$$2) {
  return [(0, _NameResolution.CapturedNameResolution$$get_Pos)(cnr$$2), (0, _NameResolution.CapturedNameResolution$$get_Item)(cnr$$2), (0, _NameResolution.CapturedNameResolution$$get_ItemOccurence)(cnr$$2), (0, _NameResolution.CapturedNameResolution$$get_DisplayEnv)(cnr$$2), (0, _NameResolution.CapturedNameResolution$$get_NameResolutionEnv)(cnr$$2), (0, _NameResolution.CapturedNameResolution$$get_AccessorDomain)(cnr$$2), (0, _NameResolution.CapturedNameResolution$$get_Range)(cnr$$2)];
}

function TypeCheckInfo$$GetBestEnvForPos$$Z72E1C3A1(this$$$1, cursorPos$$4) {
  var mostDeeplyNestedEnv, almostIncludedEnv, ad$$4;
  let bestSoFar = null;
  (0, _ResizeArray.iter)(function arg00$0040$$6(tupledArg$$6) {
    if ((0, _range.rangeContainsPos)(tupledArg$$6[0], cursorPos$$4)) {
      if (bestSoFar == null) {
        bestSoFar = [tupledArg$$6[0], tupledArg$$6[1], tupledArg$$6[2]];
      } else {
        const bestm = bestSoFar[0];

        if ((0, _range.rangeContainsRange)(bestm, tupledArg$$6[0])) {
          bestSoFar = [tupledArg$$6[0], tupledArg$$6[1], tupledArg$$6[2]];
        }
      }
    }
  }, (0, _NameResolution.TcResolutions$$get_CapturedEnvs)(this$$$1.sResolutions));
  const mostDeeplyNestedEnclosingScope = bestSoFar;
  const bestAlmostIncludedSoFar = new _Types.FSharpRef(null);
  (0, _ResizeArray.iter)(function arg00$0040$$7(tupledArg$$7) {
    if ((0, _range.rangeBeforePos)(tupledArg$$7[0], cursorPos$$4) ? !(0, _range.posEq)((0, _range.range$$get_End)(tupledArg$$7[0]), cursorPos$$4) : false) {
      let contained;

      if (mostDeeplyNestedEnclosingScope == null) {
        contained = true;
      } else {
        const bestm$$1 = mostDeeplyNestedEnclosingScope[0];
        contained = (0, _range.rangeContainsRange)(bestm$$1, tupledArg$$7[0]);
      }

      if (contained) {
        const matchValue$$29 = bestAlmostIncludedSoFar.contents;

        if (matchValue$$29 != null) {
          const rightm = matchValue$$29[0];

          if ((0, _range.posGt)((0, _range.range$$get_End)(tupledArg$$7[0]), (0, _range.range$$get_End)(rightm)) ? true : (0, _range.posEq)((0, _range.range$$get_End)(tupledArg$$7[0]), (0, _range.range$$get_End)(rightm)) ? (0, _range.posGt)((0, _range.range$$get_Start)(tupledArg$$7[0]), (0, _range.range$$get_Start)(rightm)) : false) {
            bestAlmostIncludedSoFar.contents = [tupledArg$$7[0], tupledArg$$7[1], tupledArg$$7[2]];
          }
        } else {
          bestAlmostIncludedSoFar.contents = [tupledArg$$7[0], tupledArg$$7[1], tupledArg$$7[2]];
        }
      }
    }
  }, (0, _NameResolution.TcResolutions$$get_CapturedEnvs)(this$$$1.sResolutions));
  let resEnv;
  const matchValue$$30 = [bestAlmostIncludedSoFar.contents, mostDeeplyNestedEnclosingScope];
  var $target$$78, ad$$5, env$$2, ad$$6, almostIncludedEnv$$1, mostDeeplyNestedEnv$$1;

  if (matchValue$$30[0] != null) {
    if (matchValue$$30[1] != null) {
      if (mostDeeplyNestedEnv = matchValue$$30[1][1], (almostIncludedEnv = matchValue$$30[0][1], (ad$$4 = matchValue$$30[0][2], (0, _Map.FSharpMap$$get_Count)(almostIncludedEnv.eFieldLabels) >= (0, _Map.FSharpMap$$get_Count)(mostDeeplyNestedEnv.eFieldLabels)))) {
        $target$$78 = 1;
        ad$$6 = matchValue$$30[0][2];
        almostIncludedEnv$$1 = matchValue$$30[0][1];
        mostDeeplyNestedEnv$$1 = matchValue$$30[1][1];
      } else {
        $target$$78 = 2;
      }
    } else {
      $target$$78 = 0;
      ad$$5 = matchValue$$30[0][2];
      env$$2 = matchValue$$30[0][1];
    }
  } else {
    $target$$78 = 2;
  }

  switch ($target$$78) {
    case 0:
      {
        resEnv = [env$$2, ad$$5];
        break;
      }

    case 1:
      {
        resEnv = [almostIncludedEnv$$1, ad$$6];
        break;
      }

    case 2:
      {
        if (mostDeeplyNestedEnclosingScope == null) {
          resEnv = [this$$$1.sFallback, new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode")];
        } else {
          const env$$3 = mostDeeplyNestedEnclosingScope[1];
          const ad$$7 = mostDeeplyNestedEnclosingScope[2];
          resEnv = [env$$3, ad$$7];
        }

        break;
      }
  }

  const pm = (0, _range.mkRange)(this$$$1.mainInputFileName, cursorPos$$4, cursorPos$$4);
  return [resEnv, pm];
}

function TypeCheckInfo$$FilterItemsForCtors(this$$$2, filterCtors$$8, items$$17) {
  const items$$18 = (0, _List.filter)(function predicate$$11(item$$13) {
    var $target$$79;

    if (item$$13.Item.tag === 11) {
      if ((0, _Util.equals)(filterCtors$$8, new _NameResolution.TypeNameResolutionFlag(1, "ResolveTypeNamesToTypeRefs"))) {
        $target$$79 = 0;
      } else {
        $target$$79 = 1;
      }
    } else {
      $target$$79 = 1;
    }

    switch ($target$$79) {
      case 0:
        {
          return false;
        }

      case 1:
        {
          return true;
        }
    }
  }, items$$17);
  return items$$18;
}

function TypeCheckInfo$$ReturnItemsOfType(this$$$3, items$$19, g$$1, denv$$6, m$$10, filterCtors$$9, hasTextChangedSinceLastTypecheck$$8) {
  const items$$21 = TypeCheckInfo$$FilterItemsForCtors(this$$$3, filterCtors$$9, (0, _SymbolHelpers.SymbolHelpers$$$RemoveExplicitlySuppressed)(g$$1, (0, _SymbolHelpers.SymbolHelpers$$$RemoveDuplicateItems)(g$$1, items$$19)));

  if (!(items$$21.tail == null)) {
    if (hasTextChangedSinceLastTypecheck$$8([this$$$3["textSnapshotInfo@172"], m$$10])) {
      return new NameResResult(3, "TypecheckStaleAndTextChanged");
    } else {
      return new NameResResult(0, "Members", [items$$21, denv$$6, m$$10]);
    }
  } else {
    return new NameResResult(2, "Empty");
  }
}

function TypeCheckInfo$$GetCapturedNameResolutions(this$$$4, endOfNamesPos, resolveOverloads$$8) {
  const quals = resolveOverloads$$8.tag === 1 ? (0, _NameResolution.TcResolutions$$get_CapturedMethodGroupResolutions)(this$$$4.sResolutions) : (0, _NameResolution.TcResolutions$$get_CapturedNameResolutions)(this$$$4.sResolutions);
  const quals$$1 = (0, _ResizeArray.filter)(function arg00$0040$$8(cnr$$3) {
    return (0, _range.posEq)((0, _NameResolution.CapturedNameResolution$$get_Pos)(cnr$$3), endOfNamesPos);
  }, quals);
  return quals$$1;
}

function TypeCheckInfo$$GetPreciseItemsFromNameResolution$$Z57E11749(this$$$5, line$$9, colAtEndOfNames$$6, membersByResidue, filterCtors$$10, resolveOverloads$$9, hasTextChangedSinceLastTypecheck$$9) {
  const endOfNamesPos$$1 = (0, _range.mkPos)(line$$9, colAtEndOfNames$$6);
  const cnrs = (0, _List.reverse)((0, _ResizeArray.toList)(TypeCheckInfo$$GetCapturedNameResolutions(this$$$5, endOfNamesPos$$1, resolveOverloads$$9)));
  const matchValue$$32 = [cnrs, membersByResidue];
  var $target$$94, ad$$8, denv$$7, m$$11, nenv$$2, ty$$6, ad$$9, denv$$8, m$$12, nenv$$3, occurence, vref$$7, denv$$9, m$$13;

  if (matchValue$$32[0].tail != null) {
    const activePatternResult61672 = TypeCheckInfo$$$007CCNR$007C$$Z2B1E11D4(this$$$5, matchValue$$32[0].head);

    if (activePatternResult61672[1].tag === 14) {
      if (activePatternResult61672[1].fields[1].tail != null) {
        if (matchValue$$32[1] == null) {
          $target$$94 = 2;
          denv$$9 = activePatternResult61672[3];
          m$$13 = activePatternResult61672[6];
        } else {
          $target$$94 = 0;
          ad$$8 = activePatternResult61672[5];
          denv$$7 = activePatternResult61672[3];
          m$$11 = activePatternResult61672[6];
          nenv$$2 = activePatternResult61672[4];
          ty$$6 = activePatternResult61672[1].fields[1].head;
        }
      } else if (matchValue$$32[1] == null) {
        $target$$94 = 2;
        denv$$9 = activePatternResult61672[3];
        m$$13 = activePatternResult61672[6];
      } else {
        $target$$94 = 3;
      }
    } else if (activePatternResult61672[1].tag === 0) {
      if (matchValue$$32[1] == null) {
        $target$$94 = 2;
        denv$$9 = activePatternResult61672[3];
        m$$13 = activePatternResult61672[6];
      } else {
        $target$$94 = 1;
        ad$$9 = activePatternResult61672[5];
        denv$$8 = activePatternResult61672[3];
        m$$12 = activePatternResult61672[6];
        nenv$$3 = activePatternResult61672[4];
        occurence = activePatternResult61672[2];
        vref$$7 = activePatternResult61672[1].fields[0];
      }
    } else if (matchValue$$32[1] == null) {
      $target$$94 = 2;
      denv$$9 = activePatternResult61672[3];
      m$$13 = activePatternResult61672[6];
    } else {
      $target$$94 = 3;
    }
  } else {
    $target$$94 = 3;
  }

  switch ($target$$94) {
    case 0:
      {
        const items$$22 = (0, _NameResolution.ResolveCompletionsInType)(this$$$5.ncenv, nenv$$2, new _NameResolution.ResolveCompletionTargets(0, "All", function (arg30$0040, arg40$0040) {
          return (0, _ConstraintSolver.IsApplicableMethApprox)(this$$$5.g, this$$$5.amap, m$$11, arg30$0040, arg40$0040);
        }), m$$11, ad$$8, true, ty$$6);
        const items$$23 = (0, _List.map)(_NameResolution.ItemWithNoInst, items$$22);
        return TypeCheckInfo$$ReturnItemsOfType(this$$$5, items$$23, this$$$5.g, denv$$7, m$$11, filterCtors$$10, hasTextChangedSinceLastTypecheck$$9);
      }

    case 1:
      {
        if ((0, _Util.equals)(occurence, new _NameResolution.ItemOccurence(0, "Binding")) ? true : (0, _Util.equals)(occurence, new _NameResolution.ItemOccurence(4, "Pattern"))) {
          return new NameResResult(1, "Cancel", denv$$8, m$$12);
        } else {
          const ty$$7 = (0, _TastOps.StripSelfRefCell)(this$$$5.g, (0, _tast.ValRef$$get_BaseOrThisInfo)(vref$$7), (0, _tast.ValRef$$get_TauType)(vref$$7));
          let ad$$10;
          const matchValue$$33 = [(0, _tast.ValRef$$get_BaseOrThisInfo)(vref$$7), ad$$9];
          var $target$$95, paths, tcref$$4;

          if (matchValue$$33[0].tag === 2) {
            if (matchValue$$33[1].tag === 0) {
              if (matchValue$$33[1].fields[1] != null) {
                $target$$95 = 0;
                paths = matchValue$$33[1].fields[0];
                tcref$$4 = matchValue$$33[1].fields[1];
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
                const tcref$$5 = (0, _TastOps.generalizedTyconRef)(tcref$$4);
                ad$$10 = (0, _TypeRelations.TypeFeasiblySubsumesType)(0, this$$$5.g, this$$$5.amap, m$$12, tcref$$5, new _TypeRelations.CanCoerce(0, "CanCoerce"), ty$$7) ? ad$$9 : new _AccessibilityLogic.AccessorDomain(0, "AccessibleFrom", paths, null);
                break;
              }

            case 1:
              {
                ad$$10 = ad$$9;
                break;
              }
          }

          const items$$24 = (0, _NameResolution.ResolveCompletionsInType)(this$$$5.ncenv, nenv$$3, new _NameResolution.ResolveCompletionTargets(0, "All", function (arg30$0040$$1, arg40$0040$$1) {
            return (0, _ConstraintSolver.IsApplicableMethApprox)(this$$$5.g, this$$$5.amap, m$$12, arg30$0040$$1, arg40$0040$$1);
          }), m$$12, ad$$10, false, ty$$7);
          const items$$25 = (0, _List.map)(_NameResolution.ItemWithNoInst, items$$24);
          return TypeCheckInfo$$ReturnItemsOfType(this$$$5, items$$25, this$$$5.g, denv$$8, m$$12, filterCtors$$10, hasTextChangedSinceLastTypecheck$$9);
        }
      }

    case 2:
      {
        const items$$26 = (0, _List.filter)(function predicate$$12(item$$14) {
          var $target$$96;

          if (item$$14.Item.tag === 15) {
            if (item$$14.Item.fields[0] === "into") {
              $target$$96 = 0;
            } else {
              $target$$96 = 1;
            }
          } else {
            $target$$96 = 1;
          }

          switch ($target$$96) {
            case 0:
              {
                return false;
              }

            case 1:
              {
                return true;
              }
          }
        }, (0, _List.map)(function mapping$$14(cnr$$5) {
          return (0, _NameResolution.CapturedNameResolution$$get_ItemWithInst)(cnr$$5);
        }, cnrs));
        return TypeCheckInfo$$ReturnItemsOfType(this$$$5, items$$26, this$$$5.g, denv$$9, m$$13, filterCtors$$10, hasTextChangedSinceLastTypecheck$$9);
      }

    case 3:
      {
        return new NameResResult(2, "Empty");
      }
  }
}

function TypeCheckInfo$$TryGetTypeFromNameResolution$$C29FE4B(this$$$6, line$$10, colAtEndOfNames$$7, membersByResidue$$1, resolveOverloads$$10) {
  const endOfNamesPos$$2 = (0, _range.mkPos)(line$$10, colAtEndOfNames$$7);
  const items$$27 = (0, _List.reverse)((0, _ResizeArray.toList)(TypeCheckInfo$$GetCapturedNameResolutions(this$$$6, endOfNamesPos$$2, resolveOverloads$$10)));
  const matchValue$$35 = [items$$27, membersByResidue$$1];
  var $target$$97, ty$$8, occurence$$1, vref$$8;

  if (matchValue$$35[0].tail != null) {
    const activePatternResult61675 = TypeCheckInfo$$$007CCNR$007C$$Z2B1E11D4(this$$$6, matchValue$$35[0].head);

    if (activePatternResult61675[1].tag === 14) {
      if (activePatternResult61675[1].fields[1].tail != null) {
        if (matchValue$$35[1] != null) {
          $target$$97 = 0;
          ty$$8 = activePatternResult61675[1].fields[1].head;
        } else {
          $target$$97 = 2;
        }
      } else {
        $target$$97 = 2;
      }
    } else if (activePatternResult61675[1].tag === 0) {
      if (matchValue$$35[1] != null) {
        $target$$97 = 1;
        occurence$$1 = activePatternResult61675[2];
        vref$$8 = activePatternResult61675[1].fields[0];
      } else {
        $target$$97 = 2;
      }
    } else {
      $target$$97 = 2;
    }
  } else {
    $target$$97 = 2;
  }

  switch ($target$$97) {
    case 0:
      {
        return ty$$8;
      }

    case 1:
      {
        if ((0, _Util.equals)(occurence$$1, new _NameResolution.ItemOccurence(0, "Binding")) ? true : (0, _Util.equals)(occurence$$1, new _NameResolution.ItemOccurence(4, "Pattern"))) {
          return null;
        } else {
          return (0, _TastOps.StripSelfRefCell)(this$$$6.g, (0, _tast.ValRef$$get_BaseOrThisInfo)(vref$$8), (0, _tast.ValRef$$get_TauType)(vref$$8));
        }
      }

    case 2:
      {
        return null;
      }
  }
}

function TypeCheckInfo$$CollectParameters(this$$$7, methods, amap, m$$14) {
  return (0, _List.collect)(function mapping$$15(meth) {
    const matchValue$$36 = (0, _infos.MethInfo$$GetParamDatas$$Z5D984B3C)(meth, amap, m$$14, (0, _infos.MethInfo$$get_FormalMethodInst)(meth));

    if (matchValue$$36.tail != null) {
      const x$$12 = matchValue$$36.head;
      return (0, _List.choose)(function chooser$$1(_arg1) {
        const ty$$9 = _arg1.fields[7];
        const name$$2 = _arg1.fields[5];
        const _optArgInfo = _arg1.fields[3];
        const _isParamArray = _arg1.fields[0];
        const _isOutArg = _arg1.fields[2];
        const _isInArg = _arg1.fields[1];
        const _callerInfo = _arg1.fields[4];

        if (name$$2 == null) {
          return null;
        } else {
          const n$$1 = name$$2;
          return new _NameResolution.Item(20, "ArgName", n$$1, ty$$9, new _NameResolution.ArgumentContainer(0, "Method", meth));
        }
      }, x$$12);
    } else {
      return (0, _Types.L)();
    }
  }, methods);
}

function TypeCheckInfo$$GetNamedParametersAndSettableFields(this$$$8, endOfExprPos, hasTextChangedSinceLastTypecheck$$12) {
  const cnrs$$1 = (0, _List.reverse)((0, _ResizeArray.toList)(TypeCheckInfo$$GetCapturedNameResolutions(this$$$8, endOfExprPos, new ResolveOverloads(1, "No"))));
  let result$$1;
  var $target$$101, ad$$11, ctor, ctors$$2, denv$$10, m$$15, nenv$$4, ad$$12, denv$$11, m$$16, methods$$1, nenv$$5;

  if (cnrs$$1.tail != null) {
    const activePatternResult61684 = TypeCheckInfo$$$007CCNR$007C$$Z2B1E11D4(this$$$8, cnrs$$1.head);

    if (activePatternResult61684[1].tag === 11) {
      if (activePatternResult61684[1].fields[1].tail != null) {
        $target$$101 = 0;
        ad$$11 = activePatternResult61684[5];
        ctor = activePatternResult61684[1].fields[1].head;
        ctors$$2 = activePatternResult61684[1].fields[1];
        denv$$10 = activePatternResult61684[3];
        m$$15 = activePatternResult61684[6];
        nenv$$4 = activePatternResult61684[4];
      } else {
        $target$$101 = 2;
      }
    } else if (activePatternResult61684[1].tag === 10) {
      $target$$101 = 1;
      ad$$12 = activePatternResult61684[5];
      denv$$11 = activePatternResult61684[3];
      m$$16 = activePatternResult61684[6];
      methods$$1 = activePatternResult61684[1].fields[1];
      nenv$$5 = activePatternResult61684[4];
    } else {
      $target$$101 = 2;
    }
  } else {
    $target$$101 = 2;
  }

  switch ($target$$101) {
    case 0:
      {
        const props = (0, _NameResolution.ResolveCompletionsInType)(this$$$8.ncenv, nenv$$4, new _NameResolution.ResolveCompletionTargets(1, "SettablePropertiesAndFields"), m$$15, ad$$11, false, (0, _infos.MethInfo$$get_ApparentEnclosingType)(ctor));
        const parameters = TypeCheckInfo$$CollectParameters(this$$$8, ctors$$2, this$$$8.amap, m$$15);
        const items$$28 = (0, _List.append)(props, parameters);
        result$$1 = [denv$$10, m$$15, items$$28];
        break;
      }

    case 1:
      {
        const props$$1 = (0, _List.collect)(function mapping$$16(meth$$1) {
          const retTy = (0, _infos.MethInfo$$GetFSharpReturnTy$$Z5D984B3C)(meth$$1, this$$$8.amap, m$$16, (0, _infos.MethInfo$$get_FormalMethodInst)(meth$$1));
          return (0, _NameResolution.ResolveCompletionsInType)(this$$$8.ncenv, nenv$$5, new _NameResolution.ResolveCompletionTargets(1, "SettablePropertiesAndFields"), m$$16, ad$$12, false, retTy);
        }, methods$$1);
        const parameters$$1 = TypeCheckInfo$$CollectParameters(this$$$8, methods$$1, this$$$8.amap, m$$16);
        const items$$29 = (0, _List.append)(props$$1, parameters$$1);
        result$$1 = [denv$$11, m$$16, items$$29];
        break;
      }

    case 2:
      {
        result$$1 = null;
        break;
      }
  }

  if (result$$1 != null) {
    const m$$17 = result$$1[1];
    const items$$30 = result$$1[2];
    const denv$$12 = result$$1[0];
    const items$$31 = (0, _List.map)(_NameResolution.ItemWithNoInst, items$$30);
    return TypeCheckInfo$$ReturnItemsOfType(this$$$8, items$$31, this$$$8.g, denv$$12, m$$17, new _NameResolution.TypeNameResolutionFlag(1, "ResolveTypeNamesToTypeRefs"), hasTextChangedSinceLastTypecheck$$12);
  } else {
    return new NameResResult(2, "Empty");
  }
}

function TypeCheckInfo$$GetExprTypingForPosition$$Z72E1C3A1(this$$$9, endOfExprPos$$1) {
  const quals$$2 = (0, _Array.ofSeq)((0, _Seq.filter)(function predicate$$13(tupledArg$$8) {
    const isLocationWeCareAbout = (0, _range.posEq)(tupledArg$$8[0], endOfExprPos$$1);
    const isFunction = (0, _TastOps.isFunTy)(tupledArg$$8[2].g, tupledArg$$8[1]);

    if (isLocationWeCareAbout) {
      return !isFunction;
    } else {
      return false;
    }
  }, (0, _NameResolution.TcResolutions$$get_CapturedExpressionTypings)(this$$$9.sResolutions)), Array);
  const thereWereSomeQuals = !(quals$$2.length === 0);
  const quals$$3 = quals$$2.filter(function predicate$$14(tupledArg$$9) {
    return !((0, _TastOps.isTyparTy)(tupledArg$$9[2].g, tupledArg$$9[1]) ? (0, _tast.Typar$$get_IsFromError)((0, _TastOps.destTyparTy)(tupledArg$$9[2].g, tupledArg$$9[1])) : false);
  });
  return [thereWereSomeQuals, quals$$3];
}

function TypeCheckInfo$$GetRecdFieldsForExpr$$4DB9192C(this$$$10, r) {
  var ty$$12, m$$18, denv$$15, ad$$13, _nenv;

  const patternInput$$3 = TypeCheckInfo$$GetExprTypingForPosition$$Z72E1C3A1(this$$$10, (0, _range.range$$get_End)(r));
  let bestQual;

  if (!(0, _Array.equalsWith)(_Util.compareArrays, patternInput$$3[1], null) ? patternInput$$3[1].length === 0 : false) {
    bestQual = null;
  } else {
    const quals$$5 = patternInput$$3[1];
    bestQual = (0, _Array.tryFind)(function predicate$$15(tupledArg$$10) {
      r;
      return (0, _range.posEq)((0, _range.range$$get_Start)(r), (0, _range.range$$get_Start)(tupledArg$$10[5]));
    }, quals$$5);
  }

  var $target$$102, _nenv$$1, ad$$14, denv$$16, m$$19, ty$$13;

  if (bestQual != null) {
    if (ty$$12 = bestQual[1], (m$$18 = bestQual[5], (denv$$15 = bestQual[2], (ad$$13 = bestQual[4], (_nenv = bestQual[3], (0, _TastOps.isRecdTy)(denv$$15.g, ty$$12)))))) {
      $target$$102 = 0;
      _nenv$$1 = bestQual[3];
      ad$$14 = bestQual[4];
      denv$$16 = bestQual[2];
      m$$19 = bestQual[5];
      ty$$13 = bestQual[1];
    } else {
      $target$$102 = 1;
    }
  } else {
    $target$$102 = 1;
  }

  switch ($target$$102) {
    case 0:
      {
        const items$$32 = (0, _NameResolution.ResolveRecordOrClassFieldsOfType)(this$$$10.ncenv, m$$19, ad$$14, ty$$13, false);
        return [items$$32, denv$$16, m$$19];
      }

    case 1:
      {
        return null;
      }
  }
}

function TypeCheckInfo$$GetPreciseCompletionListFromExprTypings$$Z73839B1A(this$$$11, parseResults, endOfExprPos$$3, filterCtors$$12, hasTextChangedSinceLastTypecheck$$13) {
  const patternInput$$4 = TypeCheckInfo$$GetExprTypingForPosition$$Z72E1C3A1(this$$$11, endOfExprPos$$3);

  if (!(0, _Array.equalsWith)(_Util.compareArrays, patternInput$$4[1], null) ? patternInput$$4[1].length === 0 : false) {
    if (patternInput$$4[0]) {
      return new GetPreciseCompletionListFromExprTypingsResult(1, "NoneBecauseThereWereTypeErrors");
    } else {
      return new GetPreciseCompletionListFromExprTypingsResult(2, "None");
    }
  } else {
    let patternInput$$5;
    const matchValue$$37 = (0, _ServiceUntypedParse.FSharpParseFileResults$$get_ParseTree)(parseResults);

    if (matchValue$$37 != null) {
      const input = matchValue$$37;
      const matchValue$$38 = (0, _ServiceUntypedParse.UntypedParseImpl$$$GetRangeOfExprLeftOfDot)(endOfExprPos$$3, input);

      if (matchValue$$38 == null) {
        patternInput$$5 = [null, false];
      } else {
        const exprRange = matchValue$$38;

        if (hasTextChangedSinceLastTypecheck$$13([this$$$11["textSnapshotInfo@172"], exprRange])) {
          patternInput$$5 = [null, true];
        } else {
          const qual = (0, _Array.tryFind)(function predicate$$16(tupledArg$$11) {
            tupledArg$$11[5];
            return (0, _range.posEq)((0, _range.range$$get_Start)(exprRange), (0, _range.range$$get_Start)(tupledArg$$11[5]));
          }, patternInput$$4[1]);
          patternInput$$5 = [qual, false];
        }
      }
    } else {
      patternInput$$5 = [null, false];
    }

    if (patternInput$$5[0] == null) {
      if (patternInput$$5[1]) {
        return new GetPreciseCompletionListFromExprTypingsResult(0, "NoneBecauseTypecheckIsStaleAndTextChanged");
      } else {
        return new GetPreciseCompletionListFromExprTypingsResult(2, "None");
      }
    } else {
      const bestQual$$2 = patternInput$$5[0];
      const ty$$14 = bestQual$$2[1];
      const nenv$$6 = bestQual$$2[3];
      const m$$20 = bestQual$$2[5];
      const denv$$17 = bestQual$$2[2];
      const ad$$15 = bestQual$$2[4];
      const items$$33 = (0, _NameResolution.ResolveCompletionsInType)(this$$$11.ncenv, nenv$$6, new _NameResolution.ResolveCompletionTargets(0, "All", function (arg30$0040$$2, arg40$0040$$2) {
        return (0, _ConstraintSolver.IsApplicableMethApprox)(this$$$11.g, this$$$11.amap, m$$20, arg30$0040$$2, arg40$0040$$2);
      }), m$$20, ad$$15, false, ty$$14);
      const items$$34 = (0, _List.map)(_NameResolution.ItemWithNoInst, items$$33);
      const items$$35 = (0, _SymbolHelpers.SymbolHelpers$$$RemoveDuplicateItems)(this$$$11.g, items$$34);
      const items$$36 = (0, _SymbolHelpers.SymbolHelpers$$$RemoveExplicitlySuppressed)(this$$$11.g, items$$35);
      const items$$38 = TypeCheckInfo$$FilterItemsForCtors(this$$$11, filterCtors$$12, items$$36);
      return new GetPreciseCompletionListFromExprTypingsResult(3, "Some", [items$$38, denv$$17, m$$20], ty$$14);
    }
  }
}

function TypeCheckInfo$$GetEnvironmentLookupResolutions$$Z55A6DFB5(this$$$12, nenv$$7, ad$$16, m$$21, plid$$2, filterCtors$$13, showObsolete) {
  const items$$39 = (0, _NameResolution.ResolvePartialLongIdent)(this$$$12.ncenv, nenv$$7, function (arg30$0040$$3, arg40$0040$$3) {
    return (0, _ConstraintSolver.IsApplicableMethApprox)(this$$$12.g, this$$$12.amap, m$$21, arg30$0040$$3, arg40$0040$$3);
  }, m$$21, ad$$16, plid$$2, showObsolete);
  const items$$40 = (0, _List.map)(_NameResolution.ItemWithNoInst, items$$39);
  const items$$41 = (0, _SymbolHelpers.SymbolHelpers$$$RemoveDuplicateItems)(this$$$12.g, items$$40);
  const items$$42 = (0, _SymbolHelpers.SymbolHelpers$$$RemoveExplicitlySuppressed)(this$$$12.g, items$$41);
  const items$$44 = TypeCheckInfo$$FilterItemsForCtors(this$$$12, filterCtors$$13, items$$42);
  return [items$$44, (0, _NameResolution.NameResolutionEnv$$get_DisplayEnv)(nenv$$7), m$$21];
}

function TypeCheckInfo$$GetEnvironmentLookupResolutionsAtPosition$$Z76025D44(this$$$13, cursorPos$$5, plid$$3, filterCtors$$14, showObsolete$$1) {
  const patternInput$$6 = TypeCheckInfo$$GetBestEnvForPos$$Z72E1C3A1(this$$$13, cursorPos$$5);
  const nenv$$8 = patternInput$$6[0][0];
  const ad$$17 = patternInput$$6[0][1];
  return TypeCheckInfo$$GetEnvironmentLookupResolutions$$Z55A6DFB5(this$$$13, nenv$$8, ad$$17, patternInput$$6[1], plid$$3, filterCtors$$14, showObsolete$$1);
}

function TypeCheckInfo$$GetClassOrRecordFieldsEnvironmentLookupResolutions$$23D106CE(this$$$14, cursorPos$$6, plid$$4) {
  const patternInput$$7 = TypeCheckInfo$$GetBestEnvForPos$$Z72E1C3A1(this$$$14, cursorPos$$6);
  const nenv$$9 = patternInput$$7[0][0];
  const ad$$18 = patternInput$$7[0][1];
  const items$$45 = (0, _NameResolution.ResolvePartialLongIdentToClassOrRecdFields)(this$$$14.ncenv, nenv$$9, patternInput$$7[1], ad$$18, plid$$4, false);
  const items$$46 = (0, _List.map)(_NameResolution.ItemWithNoInst, items$$45);
  const items$$47 = (0, _SymbolHelpers.SymbolHelpers$$$RemoveDuplicateItems)(this$$$14.g, items$$46);
  const items$$48 = (0, _SymbolHelpers.SymbolHelpers$$$RemoveExplicitlySuppressed)(this$$$14.g, items$$47);
  return [items$$48, (0, _NameResolution.NameResolutionEnv$$get_DisplayEnv)(nenv$$9), patternInput$$7[1]];
}

function TypeCheckInfo$$GetBaseClassCandidates$$15FD5CB0(this$$$15, _arg1$$1) {
  var ty$$15;
  var $target$$108, ty$$16;

  if (_arg1$$1.tag === 18) {
    $target$$108 = 0;
  } else if (_arg1$$1.tag === 14) {
    if (_arg1$$1.fields[1].tail != null) {
      if (ty$$15 = _arg1$$1.fields[1].head, (0, _TastOps.isClassTy)(this$$$15.g, ty$$15) ? !(0, _TastOps.isSealedTy)(this$$$15.g, ty$$15) : false) {
        $target$$108 = 1;
        ty$$16 = _arg1$$1.fields[1].head;
      } else {
        $target$$108 = 2;
      }
    } else {
      $target$$108 = 2;
    }
  } else {
    $target$$108 = 2;
  }

  switch ($target$$108) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return true;
      }

    case 2:
      {
        return false;
      }
  }
}

function TypeCheckInfo$$GetInterfaceCandidates$$15FD5CB0(this$$$16, _arg2$$1) {
  var ty$$17;
  var $target$$109, ty$$18;

  if (_arg2$$1.tag === 18) {
    $target$$109 = 0;
  } else if (_arg2$$1.tag === 14) {
    if (_arg2$$1.fields[1].tail != null) {
      if (ty$$17 = _arg2$$1.fields[1].head, (0, _TastOps.isInterfaceTy)(this$$$16.g, ty$$17)) {
        $target$$109 = 1;
        ty$$18 = _arg2$$1.fields[1].head;
      } else {
        $target$$109 = 2;
      }
    } else {
      $target$$109 = 2;
    }
  } else {
    $target$$109 = 2;
  }

  switch ($target$$109) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return true;
      }

    case 2:
      {
        return false;
      }
  }
}

function TypeCheckInfo$$FilterDeclItemsByResidue(this$$$17, getItem$$1, residue, items$$49) {
  const attributedResidue = residue + "Attribute";

  const nameMatchesResidue = function nameMatchesResidue(name$$3) {
    if (residue === name$$3) {
      return true;
    } else {
      return attributedResidue === name$$3;
    }
  };

  return (0, _List.filter)(function predicate$$18(x$$13) {
    const item$$15 = getItem$$1(x$$13);
    const n1 = (0, _NameResolution.Item$$get_DisplayName)(item$$15);

    switch (item$$15.tag) {
      case 14:
        {
          return nameMatchesResidue(n1);
        }

      case 11:
        {
          const meths = item$$15.fields[1];

          if (nameMatchesResidue(n1)) {
            return true;
          } else {
            return (0, _List.exists)(function predicate$$17(meth$$2) {
              const tcref$$6 = (0, _infos.MethInfo$$get_ApparentEnclosingTyconRef)(meth$$2);
              return nameMatchesResidue((0, _tast.EntityRef$$get_DisplayName)(tcref$$6));
            }, meths);
          }
        }

      default:
        {
          return residue === n1;
        }
    }
  }, items$$49);
}

function TypeCheckInfo$$FilterRelevantItemsBy(this$$$18, getItem$$2, exactMatchResidueOpt, check, items$$50, denv$$18, m$$24) {
  const safeCheck = function safeCheck(item$$16) {
    try {
      return check(item$$16);
    } catch (matchValue$$39) {
      return false;
    }
  };

  if (!(items$$50.tail == null) ? exactMatchResidueOpt != null : false) {
    const items$$52 = (0, _List.filter)(safeCheck, TypeCheckInfo$$FilterDeclItemsByResidue(this$$$18, getItem$$2, exactMatchResidueOpt, items$$50));

    if (!(items$$52.tail == null)) {
      return [items$$52, denv$$18, m$$24];
    } else {
      return null;
    }
  } else {
    const items$$53 = (0, _List.filter)(safeCheck, items$$50);
    return [items$$53, denv$$18, m$$24];
  }
}

function TypeCheckInfo$$$007CFilterRelevantItems$007C_$007C(this$$$19, getItem$$3, exactMatchResidueOpt$$1, orig_0, orig_1, orig_2) {
  const orig = [orig_0, orig_1, orig_2];
  return TypeCheckInfo$$FilterRelevantItemsBy(this$$$19, getItem$$3, exactMatchResidueOpt$$1, function check$$1(_arg19) {
    return true;
  }, orig[0], orig[1], orig[2]);
}

function TypeCheckInfo$$FindFirstNonWhitespacePosition(this$$$20, lineStr$$8, i) {
  if (i >= lineStr$$8.length) {
    return null;
  } else {
    let p = i | 0;

    while (p >= 0 ? (0, _Char.isWhiteSpace)(lineStr$$8[p]) : false) {
      p = p - 1;
    }

    if (p >= 0) {
      return p;
    } else {
      return null;
    }
  }
}

function TypeCheckInfo$$CompletionItem(this$$$21, ty$$19, assemblySymbol, item$$17) {
  const kind = item$$17.Item.tag === 10 ? item$$17.Item.fields[1].tail != null ? new _SymbolHelpers.CompletionItemKind(2, "Method", (0, _infos.MethInfo$$get_IsExtensionMember)(item$$17.Item.fields[1].head)) : new _SymbolHelpers.CompletionItemKind(6, "Other") : item$$17.Item.tag === 5 ? new _SymbolHelpers.CompletionItemKind(1, "Property") : item$$17.Item.tag === 9 ? new _SymbolHelpers.CompletionItemKind(1, "Property") : item$$17.Item.tag === 8 ? new _SymbolHelpers.CompletionItemKind(3, "Event") : item$$17.Item.tag === 7 ? new _SymbolHelpers.CompletionItemKind(0, "Field") : item$$17.Item.tag === 0 ? new _SymbolHelpers.CompletionItemKind(0, "Field") : item$$17.Item.tag === 15 ? new _SymbolHelpers.CompletionItemKind(5, "CustomOperation") : new _SymbolHelpers.CompletionItemKind(6, "Other");
  return new _SymbolHelpers.CompletionItem(item$$17, kind, false, 0, ty$$19, (0, _Option.defaultArg)(assemblySymbol, null, function mapping$$17(x$$14) {
    return x$$14.UnresolvedSymbol;
  }));
}

function TypeCheckInfo$$DefaultCompletionItem$$7FA11D2(this$$$22, item$$18) {
  return TypeCheckInfo$$CompletionItem(this$$$22, null, null, item$$18);
}

function TypeCheckInfo$$getItem$$7FA11D2(this$$$23, x$$15) {
  return x$$15.Item;
}

function TypeCheckInfo$$GetDeclaredItems$$FE806ED(this$$$24, parseResultsOpt$$8, lineStr$$9, origLongIdentOpt$$7, colAtEndOfNamesAndResidue$$2, residueOpt$$8, lastDotPos$$8, line$$11, loc, filterCtors$$15, resolveOverloads$$12, hasTextChangedSinceLastTypecheck$$14, isInRangeOperator, allSymbols) {
  var x$$16, p$$1, m$$34, items$$60, denv$$27, m$$32, items$$58, denv$$25, m$$39, globalItemsFiltered, denv$$30, ty$$22, m$$29, items$$56, denv$$22;
  let isLikeRangeOp;
  const matchValue$$41 = TypeCheckInfo$$FindFirstNonWhitespacePosition(this$$$24, lineStr$$9, colAtEndOfNamesAndResidue$$2 - 1);
  var $target$$141, x$$17;

  if (matchValue$$41 != null) {
    if (x$$16 = matchValue$$41 | 0, (x$$16 >= 1 ? lineStr$$9[x$$16] === "." : false) ? lineStr$$9[x$$16 - 1] === "." : false) {
      $target$$141 = 0;
      x$$17 = matchValue$$41;
    } else {
      $target$$141 = 1;
    }
  } else {
    $target$$141 = 1;
  }

  switch ($target$$141) {
    case 0:
      {
        isLikeRangeOp = true;
        break;
      }

    case 1:
      {
        isLikeRangeOp = false;
        break;
      }
  }

  if (isLikeRangeOp ? !isInRangeOperator : false) {
    return null;
  } else {
    let nameResItems;

    if (residueOpt$$8 != null) {
      const residue$$2 = (0, _Option.value)(residueOpt$$8);
      const matchValue$$42 = (0, _Option.defaultArgWith)(lastDotPos$$8, function ifNoneThunk() {
        return TypeCheckInfo$$FindFirstNonWhitespacePosition(this$$$24, lineStr$$9, colAtEndOfNamesAndResidue$$2 - 1);
      });
      var $target$$142, p$$2;

      if (matchValue$$42 != null) {
        if (p$$1 = matchValue$$42 | 0, lineStr$$9[p$$1] === ".") {
          $target$$142 = 0;
          p$$2 = matchValue$$42;
        } else {
          $target$$142 = 1;
        }
      } else {
        $target$$142 = 1;
      }

      switch ($target$$142) {
        case 0:
          {
            const matchValue$$43 = TypeCheckInfo$$FindFirstNonWhitespacePosition(this$$$24, lineStr$$9, p$$2 - 1);

            if (matchValue$$43 == null) {
              nameResItems = new NameResResult(2, "Empty");
            } else {
              const colAtEndOfNames$$8 = matchValue$$43 | 0;
              const colAtEndOfNames$$9 = colAtEndOfNames$$8 + 1 | 0;
              nameResItems = TypeCheckInfo$$GetPreciseItemsFromNameResolution$$Z57E11749(this$$$24, line$$11, colAtEndOfNames$$9, (0, _Option.some)(residue$$2), filterCtors$$15, resolveOverloads$$12, hasTextChangedSinceLastTypecheck$$14);
            }

            break;
          }

        case 1:
          {
            nameResItems = new NameResResult(2, "Empty");
            break;
          }
      }
    } else {
      nameResItems = TypeCheckInfo$$GetPreciseItemsFromNameResolution$$Z57E11749(this$$$24, line$$11, colAtEndOfNamesAndResidue$$2, null, filterCtors$$15, resolveOverloads$$12, hasTextChangedSinceLastTypecheck$$14);
    }

    let patternInput$$9;
    const matchValue$$44 = [origLongIdentOpt$$7, residueOpt$$8];

    if (matchValue$$44[0] != null) {
      if (matchValue$$44[1] == null) {
        const origLongIdent$$1 = matchValue$$44[0];
        const patternInput$$8 = (0, _illib.List$$$frontAndBack)(origLongIdent$$1);
        patternInput$$9 = [patternInput$$8[0], patternInput$$8[1]];
      } else {
        const origLongIdent = matchValue$$44[0];
        patternInput$$9 = [origLongIdent, null];
      }
    } else {
      patternInput$$9 = [(0, _Types.L)(), null];
    }

    const pos$$3 = (0, _range.mkPos)(line$$11, loc);
    const patternInput$$10 = TypeCheckInfo$$GetBestEnvForPos$$Z72E1C3A1(this$$$24, pos$$3);
    const nenv$$10 = patternInput$$10[0][0];
    const ad$$19 = patternInput$$10[0][1];

    const getType = function getType() {
      var p$$3;
      let tref$$2;
      const matchValue$$45 = (0, _NameResolution.TryToResolveLongIdentAsType)(this$$$24.ncenv, nenv$$10, patternInput$$10[1], patternInput$$9[0]);

      if (matchValue$$45 == null) {
        const matchValue$$46 = (0, _Option.defaultArgWith)(lastDotPos$$8, function ifNoneThunk$$1() {
          return TypeCheckInfo$$FindFirstNonWhitespacePosition(this$$$24, lineStr$$9, colAtEndOfNamesAndResidue$$2 - 1);
        });
        var $target$$143, p$$4;

        if (matchValue$$46 != null) {
          if (p$$3 = matchValue$$46 | 0, lineStr$$9[p$$3] === ".") {
            $target$$143 = 0;
            p$$4 = matchValue$$46;
          } else {
            $target$$143 = 1;
          }
        } else {
          $target$$143 = 1;
        }

        switch ($target$$143) {
          case 0:
            {
              const matchValue$$47 = TypeCheckInfo$$FindFirstNonWhitespacePosition(this$$$24, lineStr$$9, p$$4 - 1);

              if (matchValue$$47 == null) {
                tref$$2 = null;
              } else {
                const colAtEndOfNames$$10 = matchValue$$47 | 0;
                const colAtEndOfNames$$11 = colAtEndOfNames$$10 + 1 | 0;
                const tyconRef$$4 = TypeCheckInfo$$TryGetTypeFromNameResolution$$C29FE4B(this$$$24, line$$11, colAtEndOfNames$$11, residueOpt$$8, resolveOverloads$$12);
                tref$$2 = tyconRef$$4;
              }

              break;
            }

          case 1:
            {
              tref$$2 = null;
              break;
            }
        }
      } else {
        const x$$18 = matchValue$$45;
        tref$$2 = x$$18;
      }

      return (0, _Option.defaultArg)(tref$$2, null, function binder$$1(arg10$0040$$21) {
        return (0, _TastOps.tryDestAppTy)(this$$$24.g, arg10$0040$$21);
      });
    };

    var $target$$144, denv$$20, m$$27, denv$$21, items$$55, m$$28;

    if (nameResItems.tag === 3) {
      $target$$144 = 0;
    } else if (nameResItems.tag === 1) {
      $target$$144 = 1;
      denv$$20 = nameResItems.fields[0];
      m$$27 = nameResItems.fields[1];
    } else if (nameResItems.tag === 0) {
      const activePatternResult61747 = TypeCheckInfo$$$007CFilterRelevantItems$007C_$007C(this$$$24, function getItem$$4(x$$19) {
        return TypeCheckInfo$$getItem$$7FA11D2(this$$$24, x$$19);
      }, patternInput$$9[1], nameResItems.fields[0][0], nameResItems.fields[0][1], nameResItems.fields[0][2]);

      if (activePatternResult61747 != null) {
        $target$$144 = 2;
        denv$$21 = activePatternResult61747[1];
        items$$55 = activePatternResult61747[0];
        m$$28 = activePatternResult61747[2];
      } else {
        $target$$144 = 3;
      }
    } else {
      $target$$144 = 3;
    }

    switch ($target$$144) {
      case 0:
        {
          return null;
        }

      case 1:
        {
          return [(0, _Types.L)(), denv$$20, m$$27];
        }

      case 2:
        {
          return [(0, _List.map)(function mapping$$18(item$$19) {
            return TypeCheckInfo$$CompletionItem(this$$$24, getType(), null, item$$19);
          }, items$$55), denv$$21, m$$28];
        }

      case 3:
        {
          if (origLongIdentOpt$$7 != null) {
            let patternInput$$11;

            if (parseResultsOpt$$8 != null) {
              const parseResults$$1 = parseResultsOpt$$8;
              const matchValue$$48 = (0, _ServiceUntypedParse.UntypedParseImpl$$$TryFindExpressionASTLeftOfDotLeftOfCursor)((0, _range.mkPos)(line$$11, colAtEndOfNamesAndResidue$$2), (0, _ServiceUntypedParse.FSharpParseFileResults$$get_ParseTree)(parseResults$$1));

              if (matchValue$$48 == null) {
                patternInput$$11 = [new GetPreciseCompletionListFromExprTypingsResult(2, "None"), false];
              } else {
                const pos$$4 = matchValue$$48[0];
                patternInput$$11 = [TypeCheckInfo$$GetPreciseCompletionListFromExprTypings$$Z73839B1A(this$$$24, parseResults$$1, pos$$4, filterCtors$$15, hasTextChangedSinceLastTypecheck$$14), true];
              }
            } else {
              patternInput$$11 = [new GetPreciseCompletionListFromExprTypingsResult(2, "None"), false];
            }

            const matchValue$$49 = [patternInput$$11[0], patternInput$$11[1]];
            var $target$$145, denv$$23, items$$57, m$$30, ty$$23;

            if (matchValue$$49[0].tag === 3) {
              const activePatternResult61745 = TypeCheckInfo$$$007CFilterRelevantItems$007C_$007C(this$$$24, function getItem$$5(x$$20) {
                return TypeCheckInfo$$getItem$$7FA11D2(this$$$24, x$$20);
              }, patternInput$$9[1], matchValue$$49[0].fields[0][0], matchValue$$49[0].fields[0][1], matchValue$$49[0].fields[0][2]);

              if (activePatternResult61745 != null) {
                if (ty$$22 = matchValue$$49[0].fields[1], (m$$29 = activePatternResult61745[2], (items$$56 = activePatternResult61745[0], (denv$$22 = activePatternResult61745[1], patternInput$$9[0].tail == null ? true : false)))) {
                  $target$$145 = 0;
                  denv$$23 = activePatternResult61745[1];
                  items$$57 = activePatternResult61745[0];
                  m$$30 = activePatternResult61745[2];
                  ty$$23 = matchValue$$49[0].fields[1];
                } else {
                  $target$$145 = 1;
                }
              } else {
                $target$$145 = 1;
              }
            } else {
              $target$$145 = 1;
            }

            switch ($target$$145) {
              case 0:
                {
                  return [(0, _List.map)(function mapping$$19(item$$20) {
                    return TypeCheckInfo$$CompletionItem(this$$$24, (0, _TastOps.tryDestAppTy)(this$$$24.g, ty$$23), null, item$$20);
                  }, items$$57), denv$$23, m$$30];
                }

              case 1:
                {
                  var $target$$146;

                  if (matchValue$$49[0].tag === 1) {
                    $target$$146 = 0;
                  } else if (matchValue$$49[0].tag === 0) {
                    $target$$146 = 1;
                  } else if (matchValue$$49[1]) {
                    if (patternInput$$9[0].tail == null ? true : false) {
                      $target$$146 = 2;
                    } else {
                      $target$$146 = 3;
                    }
                  } else {
                    $target$$146 = 3;
                  }

                  switch ($target$$146) {
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
                        return null;
                      }

                    case 3:
                      {
                        const patternInput$$12 = TypeCheckInfo$$GetEnvironmentLookupResolutions$$Z55A6DFB5(this$$$24, nenv$$10, ad$$19, patternInput$$10[1], patternInput$$9[0], filterCtors$$15, residueOpt$$8 != null);
                        let envResult;
                        const matchValue$$50 = [nameResItems, [patternInput$$12[0], patternInput$$12[1], patternInput$$12[2]], patternInput$$11[0]];
                        var $target$$147, denv$$26, items$$59, m$$33;

                        if (matchValue$$50[0].tag === 0) {
                          if (m$$32 = matchValue$$50[0].fields[0][2], (items$$58 = matchValue$$50[0].fields[0][0], (denv$$25 = matchValue$$50[0].fields[0][1], !(items$$58.tail == null)))) {
                            $target$$147 = 0;
                            denv$$26 = matchValue$$50[0].fields[0][1];
                            items$$59 = matchValue$$50[0].fields[0][0];
                            m$$33 = matchValue$$50[0].fields[0][2];
                          } else {
                            $target$$147 = 1;
                          }
                        } else {
                          $target$$147 = 1;
                        }

                        switch ($target$$147) {
                          case 0:
                            {
                              envResult = [(0, _List.map)(function mapping$$20(item$$21) {
                                return TypeCheckInfo$$CompletionItem(this$$$24, getType(), null, item$$21);
                              }, items$$59), denv$$26, m$$33];
                              break;
                            }

                          case 1:
                            {
                              var $target$$148, denv$$28, items$$61, m$$35;
                              const activePatternResult61736 = TypeCheckInfo$$$007CFilterRelevantItems$007C_$007C(this$$$24, function getItem$$6(x$$21) {
                                return TypeCheckInfo$$getItem$$7FA11D2(this$$$24, x$$21);
                              }, patternInput$$9[1], matchValue$$50[1][0], matchValue$$50[1][1], matchValue$$50[1][2]);

                              if (activePatternResult61736 != null) {
                                if (m$$34 = activePatternResult61736[2], (items$$60 = activePatternResult61736[0], (denv$$27 = activePatternResult61736[1], !(items$$60.tail == null)))) {
                                  $target$$148 = 0;
                                  denv$$28 = activePatternResult61736[1];
                                  items$$61 = activePatternResult61736[0];
                                  m$$35 = activePatternResult61736[2];
                                } else {
                                  $target$$148 = 1;
                                }
                              } else {
                                $target$$148 = 1;
                              }

                              switch ($target$$148) {
                                case 0:
                                  {
                                    envResult = [(0, _List.map)(function mapping$$21(item$$22) {
                                      return TypeCheckInfo$$CompletionItem(this$$$24, getType(), null, item$$22);
                                    }, items$$61), denv$$28, m$$35];
                                    break;
                                  }

                                case 1:
                                  {
                                    var $target$$149, denv$$29, items$$62, m$$36, ty$$27;

                                    if (matchValue$$50[2].tag === 3) {
                                      const activePatternResult61734 = TypeCheckInfo$$$007CFilterRelevantItems$007C_$007C(this$$$24, function getItem$$7(x$$22) {
                                        return TypeCheckInfo$$getItem$$7FA11D2(this$$$24, x$$22);
                                      }, patternInput$$9[1], matchValue$$50[2].fields[0][0], matchValue$$50[2].fields[0][1], matchValue$$50[2].fields[0][2]);

                                      if (activePatternResult61734 != null) {
                                        $target$$149 = 0;
                                        denv$$29 = activePatternResult61734[1];
                                        items$$62 = activePatternResult61734[0];
                                        m$$36 = activePatternResult61734[2];
                                        ty$$27 = matchValue$$50[2].fields[1];
                                      } else {
                                        $target$$149 = 1;
                                      }
                                    } else {
                                      $target$$149 = 1;
                                    }

                                    switch ($target$$149) {
                                      case 0:
                                        {
                                          envResult = [(0, _List.map)(function mapping$$22(item$$23) {
                                            return TypeCheckInfo$$CompletionItem(this$$$24, (0, _TastOps.tryDestAppTy)(this$$$24.g, ty$$27), null, item$$23);
                                          }, items$$62), denv$$29, m$$36];
                                          break;
                                        }

                                      case 1:
                                        {
                                          envResult = null;
                                          break;
                                        }
                                    }

                                    break;
                                  }
                              }

                              break;
                            }
                        }

                        let globalResult;
                        var $target$$150;

                        if (origLongIdentOpt$$7 != null) {
                          if (origLongIdentOpt$$7.tail == null) {
                            $target$$150 = 0;
                          } else {
                            $target$$150 = 1;
                          }
                        } else {
                          $target$$150 = 0;
                        }

                        switch ($target$$150) {
                          case 0:
                            {
                              const globalItems = (0, _List.filter)(function predicate$$20(x$$24) {
                                var m$$37;
                                var $target$$151, m$$38;

                                if (x$$24.Symbol instanceof _Symbols.FSharpMemberOrFunctionOrValue) {
                                  if (m$$37 = x$$24.Symbol, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsConstructor)(m$$37) ? (0, _Util.equals)(filterCtors$$15, new _NameResolution.TypeNameResolutionFlag(1, "ResolveTypeNamesToTypeRefs")) : false) {
                                    $target$$151 = 0;
                                    m$$38 = x$$24.Symbol;
                                  } else {
                                    $target$$151 = 1;
                                  }
                                } else {
                                  $target$$151 = 1;
                                }

                                switch ($target$$151) {
                                  case 0:
                                    {
                                      return false;
                                    }

                                  case 1:
                                    {
                                      return true;
                                    }
                                }
                              }, (0, _List.filter)(function predicate$$19(x$$23) {
                                return !(0, _Symbols.FSharpSymbol$$get_IsExplicitlySuppressed)(x$$23.Symbol);
                              }, allSymbols()));

                              const getItem$$8 = function getItem$$8(x$$25) {
                                return (0, _Symbols.FSharpSymbol$$get_Item)(x$$25.Symbol);
                              };

                              const matchValue$$52 = [globalItems, patternInput$$12[1], patternInput$$12[2]];
                              var $target$$152, denv$$31, globalItemsFiltered$$1, m$$40;
                              const activePatternResult61743 = TypeCheckInfo$$$007CFilterRelevantItems$007C_$007C(this$$$24, getItem$$8, patternInput$$9[1], matchValue$$52[0], matchValue$$52[1], matchValue$$52[2]);

                              if (activePatternResult61743 != null) {
                                if (m$$39 = activePatternResult61743[2], (globalItemsFiltered = activePatternResult61743[0], (denv$$30 = activePatternResult61743[1], !(globalItemsFiltered.tail == null)))) {
                                  $target$$152 = 0;
                                  denv$$31 = activePatternResult61743[1];
                                  globalItemsFiltered$$1 = activePatternResult61743[0];
                                  m$$40 = activePatternResult61743[2];
                                } else {
                                  $target$$152 = 1;
                                }
                              } else {
                                $target$$152 = 1;
                              }

                              switch ($target$$152) {
                                case 0:
                                  {
                                    globalResult = [(0, _List.map)(function mapping$$23(globalItem) {
                                      return TypeCheckInfo$$CompletionItem(this$$$24, getType(), globalItem, (0, _NameResolution.ItemWithNoInst)((0, _Symbols.FSharpSymbol$$get_Item)(globalItem.Symbol)));
                                    }, globalItemsFiltered$$1), denv$$31, m$$40];
                                    break;
                                  }

                                case 1:
                                  {
                                    globalResult = null;
                                    break;
                                  }
                              }

                              break;
                            }

                          case 1:
                            {
                              globalResult = null;
                              break;
                            }
                        }

                        const matchValue$$53 = [envResult, globalResult];

                        if (matchValue$$53[0] == null) {
                          if (matchValue$$53[1] == null) {
                            return null;
                          } else {
                            const y$$1 = matchValue$$53[1];
                            return y$$1;
                          }
                        } else if (matchValue$$53[1] == null) {
                          const x$$26 = matchValue$$53[0];
                          return x$$26;
                        } else {
                          return [(0, _List.append)(matchValue$$53[0][0], matchValue$$53[1][0]), matchValue$$53[0][1], matchValue$$53[0][2]];
                        }
                      }
                  }
                }
            }
          } else {
            return null;
          }
        }
    }
  }
}

function TypeCheckInfo$$toCompletionItems$$3697C441(this$$$25, items$$64, denv$$33, m$$42) {
  return [(0, _List.map)(function mapping$$24(item$$25) {
    return TypeCheckInfo$$DefaultCompletionItem$$7FA11D2(this$$$25, item$$25);
  }, items$$64), denv$$33, m$$42];
}

function TypeCheckInfo$$GetDeclItemsForNamesAtPosition$$Z51745532(this$$$26, ctok$$9, parseResultsOpt$$9, origLongIdentOpt$$8, residueOpt$$9, lastDotPos$$9, line$$12, lineStr$$10, colAtEndOfNamesAndResidue$$3, filterCtors$$16, resolveOverloads$$13, getAllSymbols$$6, hasTextChangedSinceLastTypecheck$$17) {
  var pastEndOfLine, atDot, atStart, tupledArg$$17, tupledArg$$19, tupledArg$$21;
  (0, _illib.RequireCompilationThread)(ctok$$9);
  let loc$$1;

  if (pastEndOfLine = colAtEndOfNamesAndResidue$$3 | 0, pastEndOfLine >= lineStr$$10.length) {
    const pastEndOfLine$$1 = colAtEndOfNamesAndResidue$$3 | 0;
    loc$$1 = lineStr$$10.length;
  } else if (atDot = colAtEndOfNamesAndResidue$$3 | 0, lineStr$$10[atDot] === ".") {
    const atDot$$1 = colAtEndOfNamesAndResidue$$3 | 0;
    loc$$1 = atDot$$1 + 1;
  } else if (atStart = colAtEndOfNamesAndResidue$$3 | 0, atStart === 0) {
    const atStart$$1 = colAtEndOfNamesAndResidue$$3 | 0;
    loc$$1 = 0;
  } else {
    const otherwise = colAtEndOfNamesAndResidue$$3 | 0;
    loc$$1 = otherwise - 1;
  }

  const completionContext = (0, _Option.defaultArg)((0, _Option.defaultArg)(parseResultsOpt$$9, null, function binder$$2(x$$27) {
    return (0, _ServiceUntypedParse.FSharpParseFileResults$$get_ParseTree)(x$$27);
  }), null, function binder$$3(parseTree) {
    return (0, _ServiceUntypedParse.UntypedParseImpl$$$TryGetCompletionContext)((0, _range.mkPos)(line$$12, colAtEndOfNamesAndResidue$$3), parseTree, lineStr$$10);
  });
  let res$$2;
  var $target$$166, plid$$7, plid$$8, plid$$9, plid$$10, plid$$11, r$$3, typeName, endPos, fields, cc;

  if (completionContext != null) {
    if (completionContext.tag === 0) {
      $target$$166 = 0;
    } else if (completionContext.tag === 1) {
      if (completionContext.fields[0].tag === 1) {
        $target$$166 = 2;
        plid$$8 = completionContext.fields[1][0];
      } else if (completionContext.fields[0].tag === 2) {
        $target$$166 = 3;
        plid$$9 = completionContext.fields[1][0];
      } else {
        $target$$166 = 1;
        plid$$7 = completionContext.fields[1][0];
      }
    } else if (completionContext.tag === 2) {
      if (completionContext.fields[0].tag === 0) {
        $target$$166 = 5;
        plid$$11 = completionContext.fields[0].fields[1][0];
        r$$3 = completionContext.fields[0].fields[0];
      } else if (completionContext.fields[0].tag === 1) {
        $target$$166 = 6;
        typeName = completionContext.fields[0].fields[0];
      } else {
        $target$$166 = 4;
        plid$$10 = completionContext.fields[0].fields[0][0];
      }
    } else if (completionContext.tag === 4) {
      $target$$166 = 7;
      endPos = completionContext.fields[0];
      fields = completionContext.fields[1];
    } else if (completionContext.tag === 5) {
      $target$$166 = 8;
    } else if (completionContext.tag === 6) {
      $target$$166 = 9;
    } else if (completionContext.tag === 7) {
      $target$$166 = 10;
    } else {
      $target$$166 = 11;
      cc = completionContext;
    }
  } else {
    $target$$166 = 11;
    cc = completionContext;
  }

  switch ($target$$166) {
    case 0:
      {
        res$$2 = null;
        break;
      }

    case 1:
      {
        res$$2 = (0, _Option.defaultArg)((tupledArg$$17 = TypeCheckInfo$$GetEnvironmentLookupResolutionsAtPosition$$Z76025D44(this$$$26, (0, _range.mkPos)(line$$12, loc$$1), plid$$7, filterCtors$$16, false), TypeCheckInfo$$FilterRelevantItemsBy(this$$$26, function getItem$$9(x$$28) {
          return TypeCheckInfo$$getItem$$7FA11D2(this$$$26, x$$28);
        }, null, function check$$2($arg$$10) {
          return TypeCheckInfo$$GetBaseClassCandidates$$15FD5CB0(this$$$26, TypeCheckInfo$$getItem$$7FA11D2(this$$$26, $arg$$10));
        }, tupledArg$$17[0], tupledArg$$17[1], tupledArg$$17[2])), null, function mapping$$25(tupledArg$$18) {
          return TypeCheckInfo$$toCompletionItems$$3697C441(this$$$26, tupledArg$$18[0], tupledArg$$18[1], tupledArg$$18[2]);
        });
        break;
      }

    case 2:
      {
        res$$2 = (0, _Option.defaultArg)((tupledArg$$19 = TypeCheckInfo$$GetEnvironmentLookupResolutionsAtPosition$$Z76025D44(this$$$26, (0, _range.mkPos)(line$$12, loc$$1), plid$$8, filterCtors$$16, false), TypeCheckInfo$$FilterRelevantItemsBy(this$$$26, function getItem$$10(x$$30) {
          return TypeCheckInfo$$getItem$$7FA11D2(this$$$26, x$$30);
        }, null, function check$$3($arg$$11) {
          return TypeCheckInfo$$GetInterfaceCandidates$$15FD5CB0(this$$$26, TypeCheckInfo$$getItem$$7FA11D2(this$$$26, $arg$$11));
        }, tupledArg$$19[0], tupledArg$$19[1], tupledArg$$19[2])), null, function mapping$$26(tupledArg$$20) {
          return TypeCheckInfo$$toCompletionItems$$3697C441(this$$$26, tupledArg$$20[0], tupledArg$$20[1], tupledArg$$20[2]);
        });
        break;
      }

    case 3:
      {
        res$$2 = (0, _Option.defaultArg)((tupledArg$$21 = TypeCheckInfo$$GetEnvironmentLookupResolutionsAtPosition$$Z76025D44(this$$$26, (0, _range.mkPos)(line$$12, loc$$1), plid$$9, filterCtors$$16, false), TypeCheckInfo$$FilterRelevantItemsBy(this$$$26, function getItem$$11(x$$32) {
          return TypeCheckInfo$$getItem$$7FA11D2(this$$$26, x$$32);
        }, null, function check$$4($arg$$12) {
          const t$$1 = TypeCheckInfo$$getItem$$7FA11D2(this$$$26, $arg$$12);

          if (TypeCheckInfo$$GetBaseClassCandidates$$15FD5CB0(this$$$26, t$$1)) {
            return true;
          } else {
            return TypeCheckInfo$$GetInterfaceCandidates$$15FD5CB0(this$$$26, t$$1);
          }
        }, tupledArg$$21[0], tupledArg$$21[1], tupledArg$$21[2])), null, function mapping$$27(tupledArg$$22) {
          return TypeCheckInfo$$toCompletionItems$$3697C441(this$$$26, tupledArg$$22[0], tupledArg$$22[1], tupledArg$$22[2]);
        });
        break;
      }

    case 4:
      {
        let matchValue$$54;
        const tupledArg$$23 = TypeCheckInfo$$GetClassOrRecordFieldsEnvironmentLookupResolutions$$23D106CE(this$$$26, (0, _range.mkPos)(line$$12, loc$$1), plid$$10);
        matchValue$$54 = TypeCheckInfo$$toCompletionItems$$3697C441(this$$$26, tupledArg$$23[0], tupledArg$$23[1], tupledArg$$23[2]);

        if (matchValue$$54[0].tail == null) {
          res$$2 = TypeCheckInfo$$GetDeclaredItems$$FE806ED(this$$$26, parseResultsOpt$$9, lineStr$$10, origLongIdentOpt$$8, colAtEndOfNamesAndResidue$$3, residueOpt$$9, lastDotPos$$9, line$$12, loc$$1, filterCtors$$16, resolveOverloads$$13, hasTextChangedSinceLastTypecheck$$17, false, function allSymbols$$1() {
            return (0, _Types.L)();
          });
        } else {
          const result$$2 = matchValue$$54;
          res$$2 = result$$2;
        }

        break;
      }

    case 5:
      {
        const matchValue$$55 = TypeCheckInfo$$GetRecdFieldsForExpr$$4DB9192C(this$$$26, r$$3);

        if (matchValue$$55 != null) {
          const m$$51 = matchValue$$55[2];
          const items$$73 = matchValue$$55[0];
          const denv$$42 = matchValue$$55[1];
          res$$2 = (0, _Option.defaultArg)([(0, _List.map)(_NameResolution.ItemWithNoInst, items$$73), denv$$42, m$$51], null, function mapping$$29(tupledArg$$25) {
            return TypeCheckInfo$$toCompletionItems$$3697C441(this$$$26, tupledArg$$25[0], tupledArg$$25[1], tupledArg$$25[2]);
          });
        } else {
          res$$2 = (0, _Option.defaultArg)(TypeCheckInfo$$GetClassOrRecordFieldsEnvironmentLookupResolutions$$23D106CE(this$$$26, (0, _range.mkPos)(line$$12, loc$$1), plid$$11), null, function mapping$$28(tupledArg$$24) {
            return TypeCheckInfo$$toCompletionItems$$3697C441(this$$$26, tupledArg$$24[0], tupledArg$$24[1], tupledArg$$24[2]);
          });
        }

        break;
      }

    case 6:
      {
        res$$2 = (0, _Option.defaultArg)(TypeCheckInfo$$GetClassOrRecordFieldsEnvironmentLookupResolutions$$23D106CE(this$$$26, (0, _range.mkPos)(line$$12, loc$$1), (0, _Types.L)(typeName, (0, _Types.L)())), null, function mapping$$30(tupledArg$$26) {
          return TypeCheckInfo$$toCompletionItems$$3697C441(this$$$26, tupledArg$$26[0], tupledArg$$26[1], tupledArg$$26[2]);
        });
        break;
      }

    case 7:
      {
        const results = TypeCheckInfo$$GetNamedParametersAndSettableFields(this$$$26, endPos, hasTextChangedSinceLastTypecheck$$17);
        const declaredItems = TypeCheckInfo$$GetDeclaredItems$$FE806ED(this$$$26, parseResultsOpt$$9, lineStr$$10, origLongIdentOpt$$8, colAtEndOfNamesAndResidue$$3, residueOpt$$9, lastDotPos$$9, line$$12, loc$$1, filterCtors$$16, resolveOverloads$$13, hasTextChangedSinceLastTypecheck$$17, false, getAllSymbols$$6);

        if (results.tag === 0) {
          const m$$54 = results.fields[0][2];
          const items$$76 = results.fields[0][0];
          const denv$$45 = results.fields[0][1];
          const filtered = (0, _List.map)(function mapping$$31(item$$27) {
            return new _SymbolHelpers.CompletionItem(item$$27, new _SymbolHelpers.CompletionItemKind(4, "Argument"), false, 0, null, null);
          }, (0, _List.filter)(function predicate$$21(item$$26) {
            return !fields.has((0, _NameResolution.Item$$get_DisplayName)(item$$26.Item));
          }, (0, _SymbolHelpers.SymbolHelpers$$$RemoveExplicitlySuppressed)(this$$$26.g, (0, _SymbolHelpers.SymbolHelpers$$$RemoveDuplicateItems)(this$$$26.g, items$$76))));

          if (declaredItems != null) {
            const declaredRange = declaredItems[2];
            const declaredDisplayEnv = declaredItems[1];
            const declItems = declaredItems[0];
            res$$2 = [(0, _List.append)(filtered, declItems), declaredDisplayEnv, declaredRange];
          } else {
            res$$2 = TypeCheckInfo$$toCompletionItems$$3697C441(this$$$26, items$$76, denv$$45, m$$54);
          }
        } else {
          res$$2 = declaredItems;
        }

        break;
      }

    case 8:
      {
        res$$2 = (0, _Option.defaultArg)(TypeCheckInfo$$GetDeclaredItems$$FE806ED(this$$$26, parseResultsOpt$$9, lineStr$$10, origLongIdentOpt$$8, colAtEndOfNamesAndResidue$$3, residueOpt$$9, lastDotPos$$9, line$$12, loc$$1, filterCtors$$16, resolveOverloads$$13, hasTextChangedSinceLastTypecheck$$17, false, getAllSymbols$$6), null, function mapping$$32(tupledArg$$27) {
          return [(0, _List.filter)(function predicate$$22(cItem) {
            if ((0, _SymbolHelpers.CompletionItem$$get_Item)(cItem).tag === 18) {
              return true;
            } else if ((0, _SymbolHelpers.SymbolHelpers$$$IsAttribute)(this$$$26.infoReader, (0, _SymbolHelpers.CompletionItem$$get_Item)(cItem))) {
              return true;
            } else {
              return false;
            }
          }, tupledArg$$27[0]), tupledArg$$27[1], tupledArg$$27[2]];
        });
        break;
      }

    case 9:
      {
        res$$2 = (0, _Option.defaultArg)(TypeCheckInfo$$GetDeclaredItems$$FE806ED(this$$$26, parseResultsOpt$$9, lineStr$$10, origLongIdentOpt$$8, colAtEndOfNamesAndResidue$$3, residueOpt$$9, lastDotPos$$9, line$$12, loc$$1, filterCtors$$16, resolveOverloads$$13, hasTextChangedSinceLastTypecheck$$17, false, getAllSymbols$$6), null, function mapping$$33(tupledArg$$28) {
          return [(0, _List.filter)(function predicate$$23(x$$34) {
            if ((0, _SymbolHelpers.CompletionItem$$get_Item)(x$$34).tag === 18) {
              return true;
            } else {
              return false;
            }
          }, tupledArg$$28[0]), tupledArg$$28[1], tupledArg$$28[2]];
        });
        break;
      }

    case 10:
      {
        res$$2 = (0, _Option.defaultArg)(TypeCheckInfo$$GetDeclaredItems$$FE806ED(this$$$26, parseResultsOpt$$9, lineStr$$10, origLongIdentOpt$$8, colAtEndOfNamesAndResidue$$3, residueOpt$$9, lastDotPos$$9, line$$12, loc$$1, filterCtors$$16, resolveOverloads$$13, hasTextChangedSinceLastTypecheck$$17, false, getAllSymbols$$6), null, function mapping$$34(tupledArg$$29) {
          return [(0, _List.filter)(function predicate$$24(cItem$$1) {
            const matchValue$$58 = (0, _SymbolHelpers.CompletionItem$$get_Item)(cItem$$1);
            var $target$$167;

            switch (matchValue$$58.tag) {
              case 18:
              case 14:
              case 22:
              case 4:
                $target$$167 = 0;
                break;

              default:
                $target$$167 = 1;
            }

            switch ($target$$167) {
              case 0:
                {
                  return true;
                }

              case 1:
                {
                  return false;
                }
            }
          }, tupledArg$$29[0]), tupledArg$$29[1], tupledArg$$29[2]];
        });
        break;
      }

    case 11:
      {
        const matchValue$$59 = (0, _Option.defaultArg)(residueOpt$$9, null, function binder$$4(source$$5) {
          return (0, _Seq.tryHead)(source$$5.split(""));
        });
        var $target$$168;

        if (matchValue$$59 != null) {
          if (matchValue$$59 === "'") {
            $target$$168 = 0;
          } else {
            $target$$168 = 1;
          }
        } else {
          $target$$168 = 1;
        }

        switch ($target$$168) {
          case 0:
            {
              res$$2 = null;
              break;
            }

          case 1:
            {
              const isInRangeOperator$$6 = cc != null ? cc.tag === 3 ? true : false : false;
              res$$2 = TypeCheckInfo$$GetDeclaredItems$$FE806ED(this$$$26, parseResultsOpt$$9, lineStr$$10, origLongIdentOpt$$8, colAtEndOfNamesAndResidue$$3, residueOpt$$9, lastDotPos$$9, line$$12, loc$$1, filterCtors$$16, resolveOverloads$$13, hasTextChangedSinceLastTypecheck$$17, isInRangeOperator$$6, getAllSymbols$$6);
              break;
            }
        }

        break;
      }
  }

  return (0, _Option.defaultArg)(res$$2, null, function mapping$$35(tupledArg$$30) {
    return [tupledArg$$30[0], tupledArg$$30[1], completionContext, tupledArg$$30[2]];
  });
}

function TypeCheckInfo$$IsValidSignatureFileItem$$15FD5CB0(this$$$27, item$$28) {
  var $target$$169;

  switch (item$$28.tag) {
    case 14:
    case 18:
      $target$$169 = 0;
      break;

    default:
      $target$$169 = 1;
  }

  switch ($target$$169) {
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

const FSharpParsingOptions = (0, _Types.declare)(function FSharpParsingOptions(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.SourceFiles = arg1;
  this.ConditionalCompilationDefines = arg2;
  this.ErrorSeverityOptions = arg3;
  this.IsInteractive = arg4;
  this.LightSyntax = arg5;
  this.CompilingFsLib = arg6;
  this.IsExe = arg7;
}, _Types.Record);
exports.FSharpParsingOptions = FSharpParsingOptions;

function FSharpParsingOptions$$get_LastFileName(x$$35) {
  return (0, _Array.last)(x$$35.SourceFiles);
}

function FSharpParsingOptions$$$get_Default() {
  return new FSharpParsingOptions(new Array(0), (0, _Types.L)(), (0, _ErrorLogger.FSharpErrorSeverityOptions$$$get_Default)(), false, null, false, false);
}

function FSharpParsingOptions$$$FromTcConfig$$5BB1913B(tcConfig, sourceFiles, isInteractive) {
  return new FSharpParsingOptions(sourceFiles, (0, _CompileOps.TcConfig$$get_conditionalCompilationDefines)(tcConfig), (0, _CompileOps.TcConfig$$get_errorSeverityOptions)(tcConfig), isInteractive, (0, _CompileOps.TcConfig$$get_light)(tcConfig), (0, _CompileOps.TcConfig$$get_compilingFslib)(tcConfig), (0, _CompileOps.CompilerTarget$$get_IsExe)((0, _CompileOps.TcConfig$$get_target)(tcConfig)));
}

function Parser$$$GetFileInfoForLastLineErrors(source$$6) {
  const lastLine = (0, _Seq.sumBy)(function projection$$2(c) {
    if (c === "\n") {
      return 1;
    } else {
      return 0;
    }
  }, source$$6.split(""), {
    GetZero() {
      return 0;
    },

    Add($x$$13, $y$$14) {
      return $x$$13 + $y$$14;
    }

  }) + 1 | 0;
  const lastLineLength = source$$6.length - source$$6.lastIndexOf("\n") - 1 | 0;
  return [lastLine, lastLineLength];
}

const Parser$002EErrorHandler = (0, _Types.declare)(function Parser$002EErrorHandler(reportErrors, mainInputFileName$$1, errorSeverityOptions, source$$8) {
  const $this$$15 = this;
  $this$$15.reportErrors = reportErrors;
  $this$$15.mainInputFileName = mainInputFileName$$1;
  $this$$15.options = errorSeverityOptions;
  $this$$15.errorsAndWarningsCollector = [];
  $this$$15.errorCount = 0;
  $this$$15.fileInfo = Parser$$$GetFileInfoForLastLineErrors(source$$8);
  $this$$15.errorLogger = (0, _Util.extend)((0, _ErrorLogger.ErrorLogger$$$$002Ector$$Z721C83C5)("ErrorHandler"), {
    DiagnosticSink(exn, isError) {
      Parser$002EErrorHandler$$diagnosticSink($this$$15, isError ? new _SymbolHelpers.FSharpErrorSeverity(1, "Error") : new _SymbolHelpers.FSharpErrorSeverity(0, "Warning"), exn);
    },

    get ErrorCount() {
      return $this$$15.errorCount;
    }

  });
});
exports.Parser$002EErrorHandler = Parser$002EErrorHandler;

function Parser$002EErrorHandler$$$$002Ector$$7638032F(reportErrors, mainInputFileName$$1, errorSeverityOptions, source$$8) {
  return this != null ? Parser$002EErrorHandler.call(this, reportErrors, mainInputFileName$$1, errorSeverityOptions, source$$8) : new Parser$002EErrorHandler(reportErrors, mainInputFileName$$1, errorSeverityOptions, source$$8);
}

function Parser$002EErrorHandler$$get_ErrorLogger(x$$38) {
  return x$$38.errorLogger;
}

function Parser$002EErrorHandler$$get_CollectedDiagnostics(x$$39) {
  return x$$39.errorsAndWarningsCollector.slice();
}

function Parser$002EErrorHandler$$get_ErrorCount(x$$40) {
  return x$$40.errorCount;
}

function Parser$002EErrorHandler$$set_ErrorSeverityOptions$$Z94A7D5B(x$$41, opts) {
  x$$41.options = opts;
}

function Parser$002EErrorHandler$$get_AnyErrors(x$$42) {
  return x$$42.errorCount > 0;
}

function Parser$002EErrorHandler$$diagnosticSink(this$$$28, sev$$1, exn$$1) {
  let exn$$2;

  if (!(0, _ErrorLogger.PhasedDiagnostic$$IsPhaseInCompile)(exn$$1)) {
    (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)((0, _String.toText)((0, _String.printf)("The subcategory '%s' seen in an error should not be seen by the language service"))((0, _ErrorLogger.PhasedDiagnostic$$Subcategory)(exn$$1)));
    exn$$2 = new _ErrorLogger.PhasedDiagnostic(exn$$1.Exception, new _ErrorLogger.BuildPhase(4, "TypeCheck"));
  } else {
    exn$$2 = exn$$1;
  }

  if (this$$$28.reportErrors) {
    const report = function report(exn$$3) {
      (0, _Seq.iterate)(function (ei) {
        this$$$28.errorsAndWarningsCollector.push(ei);

        if ((0, _Util.equals)(sev$$1, new _SymbolHelpers.FSharpErrorSeverity(1, "Error"))) {
          this$$$28.errorCount = this$$$28.errorCount + 1;
        }
      }, (0, _SymbolHelpers.ErrorHelpers$$$ReportError)(this$$$28.options, false, this$$$28.mainInputFileName, this$$$28.fileInfo, [exn$$3, sev$$1]));
    };

    const e = exn$$2;
    report(e);
  }
}

function Parser$$$getLightSyntaxStatus(fileName, options) {
  const lower = (0, _illib.String$$$lowercase)(fileName);
  const lightOnByDefault = (0, _List.exists)(function (arg10$0040$$24) {
    return (0, _filename.checkSuffix)(lower, arg10$0040$$24);
  }, _CompileOps.FSharpLightSyntaxFileSuffixes);
  const lightSyntaxStatus = lightOnByDefault ? !(0, _Util.equals)(options.LightSyntax, false) : (0, _Util.equals)(options.LightSyntax, true);
  return (0, _lexhelp.LightSyntaxStatus$$$$002Ector$$8EAA2C0)(lightSyntaxStatus, true);
}

function Parser$$$createLexerFunction(fileName$$1, options$$1, lexbuf, errHandler) {
  const lightSyntaxStatus$$1 = Parser$$$getLightSyntaxStatus(fileName$$1, options$$1);
  const defines = (0, _List.append)((0, _ServiceUntypedParse.SourceFileImpl$$$AdditionalDefinesForUseInEditor)(options$$1.IsInteractive), options$$1.ConditionalCompilationDefines);
  const lexResourceManager = (0, _lexhelp.LexResourceManager$$$$002Ector)();
  const lexargs = (0, _lexhelp.mkLexargs)(fileName$$1, defines, lightSyntaxStatus$$1, lexResourceManager, new _Types.FSharpRef((0, _Types.L)()), Parser$002EErrorHandler$$get_ErrorLogger(errHandler));
  const lexargs$$1 = new _lexhelp.lexargs(lexargs.defines, lexargs.ifdefStack, lexargs.resourceManager, lexargs.lightSyntaxStatus, lexargs.errorLogger, false);
  const tokenizer = (0, _LexFilter.LexFilter$$$$002Ector$$74BB6F03)(lightSyntaxStatus$$1, options$$1.CompilingFsLib, function (lexbuf$$1) {
    return (0, _lex.token)(lexargs$$1, true, lexbuf$$1);
  }, lexbuf);
  return function (arg00$$11) {
    return (0, _LexFilter.LexFilter$$Lexer$$1505)(tokenizer, arg00$$11);
  };
}

function Parser$$$addNewLine(source$$9) {
  if (source$$9.length === 0 ? true : !(source$$9[source$$9.length - 1] === "\n")) {
    return source$$9 + "\n";
  } else {
    return source$$9;
  }
}

function Parser$$$matchBraces(source$$10, fileName$$2, options$$2, userOpName) {
  const delayedLogger = (0, _ErrorLogger.CapturingErrorLogger$$$$002Ector$$Z721C83C5)("matchBraces");

  const _unwindEL = (0, _ErrorLogger.PushErrorLoggerPhaseUntilUnwind)(function (_arg1$$3) {
    return delayedLogger;
  });

  try {
    const _unwindBP = (0, _ErrorLogger.PushThreadBuildPhaseUntilUnwind)(new _ErrorLogger.BuildPhase(3, "Parse"));

    try {
      (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)(["FCS: {0}.{1} ({2})", userOpName, "matchBraces", fileName$$2]);
      const delayedLogger$$1 = (0, _ErrorLogger.CapturingErrorLogger$$$$002Ector$$Z721C83C5)("matchBraces");

      const _unwindEL$$1 = (0, _ErrorLogger.PushErrorLoggerPhaseUntilUnwind)(function (_arg2$$3) {
        return delayedLogger$$1;
      });

      try {
        const _unwindBP$$1 = (0, _ErrorLogger.PushThreadBuildPhaseUntilUnwind)(new _ErrorLogger.BuildPhase(3, "Parse"));

        try {
          const matchingBraces = [];
          (0, _lexhelp.usingLexbufForParsing)((0, _UnicodeLexing.StringAsLexbuf)(Parser$$$addNewLine(source$$10)), fileName$$2, function (lexbuf$$2) {
            const errHandler$$1 = Parser$002EErrorHandler$$$$002Ector$$7638032F(false, fileName$$2, options$$2.ErrorSeverityOptions, source$$10);
            const lexfun = Parser$$$createLexerFunction(fileName$$2, options$$2, lexbuf$$2, errHandler$$1);

            const parenTokensBalance = function parenTokensBalance(t1, t2) {
              const matchValue$$60 = [t1, t2];
              var $target$$170, q1, q2;

              if (matchValue$$60[0].tag === 92) {
                if (matchValue$$60[1].tag === 93) {
                  $target$$170 = 0;
                } else if (matchValue$$60[1].tag === 95) {
                  $target$$170 = 0;
                } else {
                  $target$$170 = 2;
                }
              } else if (matchValue$$60[0].tag === 74) {
                if (matchValue$$60[1].tag === 59) {
                  $target$$170 = 0;
                } else if (matchValue$$60[1].tag === 61) {
                  $target$$170 = 0;
                } else {
                  $target$$170 = 2;
                }
              } else if (matchValue$$60[0].tag === 56) {
                if (matchValue$$60[1].tag === 142) {
                  $target$$170 = 0;
                } else {
                  $target$$170 = 2;
                }
              } else if (matchValue$$60[0].tag === 55) {
                if (matchValue$$60[1].tag === 142) {
                  $target$$170 = 0;
                } else {
                  $target$$170 = 2;
                }
              } else if (matchValue$$60[0].tag === 72) {
                if (matchValue$$60[1].tag === 65) {
                  $target$$170 = 0;
                } else {
                  $target$$170 = 2;
                }
              } else if (matchValue$$60[0].tag === 71) {
                if (matchValue$$60[1].tag === 58) {
                  $target$$170 = 0;
                } else {
                  $target$$170 = 2;
                }
              } else if (matchValue$$60[0].tag === 73) {
                if (matchValue$$60[1].tag === 54) {
                  $target$$170 = 0;
                } else {
                  $target$$170 = 2;
                }
              } else if (matchValue$$60[0].tag === 136) {
                if (matchValue$$60[1].tag === 142) {
                  $target$$170 = 0;
                } else {
                  $target$$170 = 2;
                }
              } else if (matchValue$$60[0].tag === 154) {
                if (matchValue$$60[1].tag === 155) {
                  $target$$170 = 1;
                  q1 = matchValue$$60[0].fields[0];
                  q2 = matchValue$$60[1].fields[0];
                } else {
                  $target$$170 = 2;
                }
              } else {
                $target$$170 = 2;
              }

              switch ($target$$170) {
                case 0:
                  {
                    return true;
                  }

                case 1:
                  {
                    return (0, _Util.equalArrays)(q1, q2);
                  }

                case 2:
                  {
                    return false;
                  }
              }
            };

            const matchBraces = function matchBraces(stack) {
              var tok1, stack$0027, m1;
              const matchValue$$61 = [lexfun(lexbuf$$2), stack];
              var $target$$171, m1$$1, stack$0027$$1, tok1$$1, tok2$$1;

              if (matchValue$$61[1].tail != null) {
                if (tok1 = matchValue$$61[1].head[0], (stack$0027 = matchValue$$61[1].tail, (m1 = matchValue$$61[1].head[1], parenTokensBalance(tok1, matchValue$$61[0])))) {
                  $target$$171 = 0;
                  m1$$1 = matchValue$$61[1].head[1];
                  stack$0027$$1 = matchValue$$61[1].tail;
                  tok1$$1 = matchValue$$61[1].head[0];
                  tok2$$1 = matchValue$$61[0];
                } else {
                  $target$$171 = 1;
                }
              } else {
                $target$$171 = 1;
              }

              switch ($target$$171) {
                case 0:
                  {
                    matchingBraces.push([m1$$1, (0, _ast.LexBuffer$00601$002Eget_LexemeRange)(lexbuf$$2)]);
                    matchBraces(stack$0027$$1);
                    break;
                  }

                case 1:
                  {
                    var $target$$172, tok;

                    if (matchValue$$61[0].tag === 92) {
                      $target$$172 = 0;
                      tok = matchValue$$61[0];
                    } else if (matchValue$$61[0].tag === 74) {
                      $target$$172 = 0;
                      tok = matchValue$$61[0];
                    } else if (matchValue$$61[0].tag === 71) {
                      $target$$172 = 0;
                      tok = matchValue$$61[0];
                    } else if (matchValue$$61[0].tag === 72) {
                      $target$$172 = 0;
                      tok = matchValue$$61[0];
                    } else if (matchValue$$61[0].tag === 154) {
                      $target$$172 = 0;
                      tok = matchValue$$61[0];
                    } else if (matchValue$$61[0].tag === 73) {
                      $target$$172 = 0;
                      tok = matchValue$$61[0];
                    } else if (matchValue$$61[0].tag === 10) {
                      $target$$172 = 1;
                    } else if (matchValue$$61[0].tag === 11) {
                      $target$$172 = 1;
                    } else {
                      $target$$172 = 2;
                    }

                    switch ($target$$172) {
                      case 0:
                        {
                          matchBraces((0, _Types.L)([tok, (0, _ast.LexBuffer$00601$002Eget_LexemeRange)(lexbuf$$2)], stack));
                          break;
                        }

                      case 2:
                        {
                          matchBraces(stack);
                          break;
                        }
                    }

                    break;
                  }
              }
            };

            matchBraces((0, _Types.L)());
          });
          return matchingBraces.slice();
        } finally {
          if ((0, _Util.isDisposable)(_unwindBP$$1)) {
            _unwindBP$$1.Dispose();
          }
        }
      } finally {
        if ((0, _Util.isDisposable)(_unwindEL$$1)) {
          _unwindEL$$1.Dispose();
        }
      }
    } finally {
      if ((0, _Util.isDisposable)(_unwindBP)) {
        _unwindBP.Dispose();
      }
    }
  } finally {
    if ((0, _Util.isDisposable)(_unwindEL)) {
      _unwindEL.Dispose();
    }
  }
}

function Parser$$$parseFile(source$$11, fileName$$3, options$$3, userOpName$$1) {
  (0, _adapters.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505)(["FCS: {0}.{1} ({2})", userOpName$$1, "parseFile", fileName$$3]);
  const errHandler$$2 = Parser$002EErrorHandler$$$$002Ector$$7638032F(true, fileName$$3, options$$3.ErrorSeverityOptions, source$$11);
  const unwindEL = (0, _ErrorLogger.PushErrorLoggerPhaseUntilUnwind)(function (_oldLogger) {
    return Parser$002EErrorHandler$$get_ErrorLogger(errHandler$$2);
  });

  try {
    const unwindBP = (0, _ErrorLogger.PushThreadBuildPhaseUntilUnwind)(new _ErrorLogger.BuildPhase(3, "Parse"));

    try {
      const parseResult = (0, _lexhelp.usingLexbufForParsing)((0, _UnicodeLexing.StringAsLexbuf)(Parser$$$addNewLine(source$$11)), fileName$$3, function (lexbuf$$3) {
        const lexfun$$1 = Parser$$$createLexerFunction(fileName$$3, options$$3, lexbuf$$3, errHandler$$2);
        const isLastCompiland = (0, _String.compare)(fileName$$3, FSharpParsingOptions$$get_LastFileName(options$$3), 5) === 0 ? true : (0, _CompileOps.IsScript)(fileName$$3);
        const isExe = options$$3.IsExe;

        try {
          return (0, _CompileOps.ParseInput)(lexfun$$1, Parser$002EErrorHandler$$get_ErrorLogger(errHandler$$2), lexbuf$$3, null, fileName$$3, [isLastCompiland, isExe]);
        } catch (e$$1) {
          (0, _ErrorLogger.ErrorLogger$002EErrorR$$229D3F39)(Parser$002EErrorHandler$$get_ErrorLogger(errHandler$$2), e$$1);
          return null;
        }
      });
      return [Parser$002EErrorHandler$$get_CollectedDiagnostics(errHandler$$2), parseResult, Parser$002EErrorHandler$$get_AnyErrors(errHandler$$2)];
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

const Parser$002ETypeCheckAborted = (0, _Types.declare)(function Parser$002ETypeCheckAborted(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Parser$002ETypeCheckAborted = Parser$002ETypeCheckAborted;

function Parser$$$CheckOneFile(parseResults$$2, source$$12, mainInputFileName$$2, projectFileName$$1, tcConfig$$1, tcGlobals, tcImports$$1, tcState, loadClosure$$2, backgroundDiagnostics, reactorOps$$1, checkAlive$$1, textSnapshotInfo$$1, userOpName$$2) {
  const _logBlock = (0, _Logger.Logger$$$LogBlock)(2);

  try {
    const matchValue$$62 = (0, _ServiceUntypedParse.FSharpParseFileResults$$get_ParseTree)(parseResults$$2);

    if (matchValue$$62 != null) {
      const parsedMainInput = matchValue$$62;
      const errHandler$$3 = Parser$002EErrorHandler$$$$002Ector$$7638032F(true, mainInputFileName$$2, (0, _CompileOps.TcConfig$$get_errorSeverityOptions)(tcConfig$$1), source$$12);

      const _unwindEL$$2 = (0, _ErrorLogger.PushErrorLoggerPhaseUntilUnwind)(function (_oldLogger$$1) {
        return Parser$002EErrorHandler$$get_ErrorLogger(errHandler$$3);
      });

      try {
        const _unwindBP$$2 = (0, _ErrorLogger.PushThreadBuildPhaseUntilUnwind)(new _ErrorLogger.BuildPhase(4, "TypeCheck"));

        try {
          Parser$002EErrorHandler$$set_ErrorSeverityOptions$$Z94A7D5B(errHandler$$3, (0, _CompileOps.TcConfig$$get_errorSeverityOptions)(tcConfig$$1));

          for (let idx = 0; idx <= backgroundDiagnostics.length - 1; idx++) {
            const forLoopVar = backgroundDiagnostics[idx];
            (0, _ErrorLogger.diagnosticSink)(forLoopVar[0], (0, _Util.equals)(forLoopVar[1], new _SymbolHelpers.FSharpErrorSeverity(1, "Error")));
          }

          (0, _ast.NiceNameGenerator$$Reset)((0, _CompileOps.TcState$$get_NiceNameGenerator)(tcState));
          const sink = (0, _NameResolution.TcResultsSinkImpl$$$$002Ector$$Z556E795E)(tcGlobals, source$$12);
          userOpName$$2;
          let resOpt;

          try {
            const ctok$$10 = (0, _illib.AssumeCompilationThreadWithoutEvidence)();

            const checkForErrors = function checkForErrors() {
              if ((0, _ServiceUntypedParse.FSharpParseFileResults$$get_ParseHadErrors)(parseResults$$2)) {
                return true;
              } else {
                return Parser$002EErrorHandler$$get_ErrorCount(errHandler$$3) > 0;
              }
            };

            const patternInput$$13 = (0, _illib.EventuallyModule$$$force)(ctok$$10, (0, _CompileOps.TypeCheckOneInputAndFinishEventually)(checkForErrors, tcConfig$$1, tcImports$$1, tcGlobals, null, (0, _NameResolution.TcResultsSink$$$WithSink$$7FE138D7)(sink), tcState, parsedMainInput));
            const tcEnvAtEnd = patternInput$$13[0][0];
            const implFiles = patternInput$$13[0][2];
            const ccuSigsForFiles = patternInput$$13[0][3];
            resOpt = [tcEnvAtEnd, implFiles, ccuSigsForFiles, patternInput$$13[1]];
          } catch (e$$3) {
            (0, _ErrorLogger.errorR)(e$$3);
            resOpt = [(0, _CompileOps.TcState$$get_TcEnvFromSignatures)(tcState), (0, _Types.L)(), (0, _Types.L)((0, _tast.NewEmptyModuleOrNamespaceType)(new _tast.ModuleOrNamespaceKind(2, "Namespace")), (0, _Types.L)()), tcState];
          }

          const errors = Parser$002EErrorHandler$$get_CollectedDiagnostics(errHandler$$3);

          if (resOpt == null) {
            return [errors, new Parser$002ETypeCheckAborted(0, "Yes")];
          } else {
            const tcState$$2 = resOpt[3];
            const tcEnvAtEnd$$1 = resOpt[0];
            const implFiles$$1 = resOpt[1];
            const ccuSigsForFiles$$1 = resOpt[2];
            const scope$$1 = TypeCheckInfo$$$$002Ector$$4E917080(tcConfig$$1, tcGlobals, (0, _List.head)(ccuSigsForFiles$$1), (0, _CompileOps.TcState$$get_Ccu)(tcState$$2), tcImports$$1, (0, _TypeChecker.TcEnv$$get_AccessRights)(tcEnvAtEnd$$1), projectFileName$$1, mainInputFileName$$2, (0, _NameResolution.TcResultsSinkImpl$$GetResolutions)(sink), (0, _NameResolution.TcResultsSinkImpl$$GetSymbolUses)(sink), (0, _TypeChecker.TcEnv$$get_NameEnv)(tcEnvAtEnd$$1), loadClosure$$2, reactorOps$$1, checkAlive$$1, textSnapshotInfo$$1, (0, _List.tryHead)(implFiles$$1), (0, _NameResolution.TcResultsSinkImpl$$GetOpenDeclarations)(sink));
            return [errors, new Parser$002ETypeCheckAborted(1, "No", scope$$1)];
          }
        } finally {
          if ((0, _Util.isDisposable)(_unwindBP$$2)) {
            _unwindBP$$2.Dispose();
          }
        }
      } finally {
        if ((0, _Util.isDisposable)(_unwindEL$$2)) {
          _unwindEL$$2.Dispose();
        }
      }
    } else {
      return [[], new Parser$002ETypeCheckAborted(0, "Yes")];
    }
  } finally {
    if ((0, _Util.isDisposable)(_logBlock)) {
      _logBlock.Dispose();
    }
  }
}

const UnresolvedReferencesSet = (0, _Types.declare)(function UnresolvedReferencesSet(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.UnresolvedReferencesSet = UnresolvedReferencesSet;
const FSharpProjectOptions = (0, _Types.declare)(function FSharpProjectOptions(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12) {
  this.ProjectFileName = arg1;
  this.ProjectId = arg2;
  this.SourceFiles = arg3;
  this.OtherOptions = arg4;
  this.ReferencedProjects = arg5;
  this.IsIncompleteTypeCheckEnvironment = arg6;
  this.UseScriptResolutionRules = arg7;
  this.LoadTime = arg8;
  this.UnresolvedReferences = arg9;
  this.OriginalLoadReferences = arg10;
  this.ExtraProjectInfo = arg11;
  this.Stamp = arg12;
}, _Types.Record);
exports.FSharpProjectOptions = FSharpProjectOptions;

function FSharpProjectOptions$$get_ProjectOptions(x$$43) {
  return x$$43.OtherOptions;
}

function FSharpProjectOptions$$$UseSameProject$$6AB17D60(options1, options2) {
  var projectId2, projectId1;
  const matchValue$$63 = [options1.ProjectId, options2.ProjectId];
  var $target$$187, projectId1$$1, projectId2$$1;

  if (matchValue$$63[0] != null) {
    if (matchValue$$63[1] != null) {
      if (projectId2 = matchValue$$63[1], (projectId1 = matchValue$$63[0], !(0, _String.isNullOrWhiteSpace)(projectId1) ? !(0, _String.isNullOrWhiteSpace)(projectId2) : false)) {
        $target$$187 = 0;
        projectId1$$1 = matchValue$$63[0];
        projectId2$$1 = matchValue$$63[1];
      } else {
        $target$$187 = 1;
      }
    } else {
      $target$$187 = 1;
    }
  } else {
    $target$$187 = 1;
  }

  switch ($target$$187) {
    case 0:
      {
        return projectId1$$1 === projectId2$$1;
      }

    case 1:
      {
        var $target$$188;

        if (matchValue$$63[0] == null) {
          if (matchValue$$63[1] == null) {
            $target$$188 = 0;
          } else {
            $target$$188 = 1;
          }
        } else if (matchValue$$63[1] != null) {
          $target$$188 = 0;
        } else {
          $target$$188 = 1;
        }

        switch ($target$$188) {
          case 0:
            {
              return options1.ProjectFileName === options2.ProjectFileName;
            }

          case 1:
            {
              return false;
            }
        }
      }
  }
}

function FSharpProjectOptions$$$AreSameForChecking$$6AB17D60(options1$$1, options2$$1) {
  const matchValue$$64 = [options1$$1.Stamp, options2$$1.Stamp];
  var $target$$189, x$$44, y$$2;

  if (matchValue$$64[0] != null) {
    if (matchValue$$64[1] != null) {
      $target$$189 = 0;
      x$$44 = matchValue$$64[0];
      y$$2 = matchValue$$64[1];
    } else {
      $target$$189 = 1;
    }
  } else {
    $target$$189 = 1;
  }

  switch ($target$$189) {
    case 0:
      {
        return (0, _Long.equals)(x$$44, y$$2);
      }

    case 1:
      {
        if ((((((FSharpProjectOptions$$$UseSameProject$$6AB17D60(options1$$1, options2$$1) ? (0, _Array.equalsWith)(_Util.comparePrimitives, options1$$1.SourceFiles, options2$$1.SourceFiles) : false) ? (0, _Array.equalsWith)(_Util.comparePrimitives, options1$$1.OtherOptions, options2$$1.OtherOptions) : false) ? (0, _Util.equals)(options1$$1.UnresolvedReferences, options2$$1.UnresolvedReferences) : false) ? (0, _Util.equals)(options1$$1.OriginalLoadReferences, options2$$1.OriginalLoadReferences) : false) ? options1$$1.ReferencedProjects.length === options2$$1.ReferencedProjects.length : false) ? (0, _Array.forAll2)(function (tupledArg$$31, tupledArg$$32) {
          return tupledArg$$31[0] === tupledArg$$32[0] ? FSharpProjectOptions$$$AreSameForChecking$$6AB17D60(tupledArg$$31[1], tupledArg$$32[1]) : false;
        }, options1$$1.ReferencedProjects, options2$$1.ReferencedProjects) : false) {
          return (0, _Date.equals)(options1$$1.LoadTime, options2$$1.LoadTime);
        } else {
          return false;
        }
      }
  }
}

function FSharpProjectOptions$$get_ProjectDirectory(po) {
  return (0, _adapters.System$002EIO$002EPath$$$GetDirectoryName)(po.ProjectFileName);
}

FSharpProjectOptions.prototype.toString = function () {
  const this$$$29 = this;
  return "FSharpProjectOptions(" + this$$$29.ProjectFileName + ")";
};

const FSharpProjectContext = (0, _Types.declare)(function FSharpProjectContext(thisCcu$$1, assemblies, ad$$20) {
  const $this$$20 = this;
  $this$$20.thisCcu = thisCcu$$1;
  $this$$20.assemblies = assemblies;
  $this$$20.ad = ad$$20;
});
exports.FSharpProjectContext = FSharpProjectContext;

function FSharpProjectContext$$$$002Ector$$46B4C30A(thisCcu$$1, assemblies, ad$$20) {
  return this != null ? FSharpProjectContext.call(this, thisCcu$$1, assemblies, ad$$20) : new FSharpProjectContext(thisCcu$$1, assemblies, ad$$20);
}

function FSharpProjectContext$$GetReferencedAssemblies(__$$27) {
  return __$$27.assemblies;
}

function FSharpProjectContext$$get_AccessibilityRights(__$$28) {
  return (0, _Symbols.FSharpAccessibilityRights$$$$002Ector$$6D6624D2)(__$$28.thisCcu, __$$28.ad);
}

const FSharpCheckProjectResults = (0, _Types.declare)(function FSharpCheckProjectResults(projectFileName$$2, tcConfigOption, keepAssemblyContents, errors$$1, details) {
  const $this$$21 = this;
  $this$$21.projectFileName = projectFileName$$2;
  $this$$21.tcConfigOption = tcConfigOption;
  $this$$21.keepAssemblyContents = keepAssemblyContents;
  $this$$21.errors = errors$$1;
  $this$$21.details = details;
});
exports.FSharpCheckProjectResults = FSharpCheckProjectResults;

function FSharpCheckProjectResults$$$$002Ector$$1F668A04(projectFileName$$2, tcConfigOption, keepAssemblyContents, errors$$1, details) {
  return this != null ? FSharpCheckProjectResults.call(this, projectFileName$$2, tcConfigOption, keepAssemblyContents, errors$$1, details) : new FSharpCheckProjectResults(projectFileName$$2, tcConfigOption, keepAssemblyContents, errors$$1, details);
}

function FSharpCheckProjectResults$$get_Errors(info) {
  return info.errors;
}

function FSharpCheckProjectResults$$get_HasCriticalErrors(info$$1) {
  return info$$1.details == null;
}

function FSharpCheckProjectResults$$get_AssemblySignature(info$$2) {
  const patternInput$$14 = FSharpCheckProjectResults$$getDetails(info$$2);
  return (0, _Symbols.FSharpAssemblySignature$$$$002Ector$$5A9A6713)(patternInput$$14[0], patternInput$$14[2], patternInput$$14[3], patternInput$$14[1], patternInput$$14[5], patternInput$$14[3]);
}

function FSharpCheckProjectResults$$get_TypedImplementionFiles(info$$3) {
  if (!info$$3.keepAssemblyContents) {
    throw new Error("The 'keepAssemblyContents' flag must be set to true on the FSharpChecker in order to access the checked contents of assemblies");
  }

  const patternInput$$15 = FSharpCheckProjectResults$$getDetails(info$$3);
  let mimpls$$1;

  if (patternInput$$15[9] != null) {
    const mimpls = patternInput$$15[9];
    mimpls$$1 = mimpls;
  } else {
    mimpls$$1 = (0, _Types.L)();
  }

  return [patternInput$$15[0], patternInput$$15[2], patternInput$$15[1], mimpls$$1];
}

function FSharpCheckProjectResults$$get_AssemblyContents(info$$4) {
  if (!info$$4.keepAssemblyContents) {
    throw new Error("The 'keepAssemblyContents' flag must be set to true on the FSharpChecker in order to access the checked contents of assemblies");
  }

  const patternInput$$16 = FSharpCheckProjectResults$$getDetails(info$$4);
  let mimpls$$3;

  if (patternInput$$16[9] != null) {
    const mimpls$$2 = patternInput$$16[9];
    mimpls$$3 = mimpls$$2;
  } else {
    mimpls$$3 = (0, _Types.L)();
  }

  return (0, _Exprs.FSharpAssemblyContents$$$$002Ector$$2BF0DF82)(patternInput$$16[0], patternInput$$16[2], patternInput$$16[3], patternInput$$16[1], mimpls$$3);
}

function FSharpCheckProjectResults$$GetOptimizedAssemblyContents(info$$5) {
  if (!info$$5.keepAssemblyContents) {
    throw new Error("The 'keepAssemblyContents' flag must be set to true on the FSharpChecker in order to access the checked contents of assemblies");
  }

  const patternInput$$17 = FSharpCheckProjectResults$$getDetails(info$$5);
  let mimpls$$5;

  if (patternInput$$17[9] != null) {
    const mimpls$$4 = patternInput$$17[9];
    mimpls$$5 = mimpls$$4;
  } else {
    mimpls$$5 = (0, _Types.L)();
  }

  const outfile = "";
  const importMap = (0, _CompileOps.TcImports$$GetImportMap)(patternInput$$17[1]);
  const optEnv0 = (0, _CompileOptions.GetInitialOptimizationEnv)(patternInput$$17[1], patternInput$$17[0]);
  const tcConfig$$2 = FSharpCheckProjectResults$$getTcConfig(info$$5);
  const patternInput$$18 = (0, _CompileOptions.ApplyAllOptimizations)(tcConfig$$2, patternInput$$17[0], function (vref$$9, vrefFlags, vrefTypeInst, m$$59) {
    return (0, _TypeChecker.LightweightTcValForUsingInBuildMethodCall)(patternInput$$17[0], vref$$9, vrefFlags, vrefTypeInst, m$$59);
  }, outfile, importMap, false, optEnv0, patternInput$$17[2], mimpls$$5);
  let mimpls$$6;
  const files = patternInput$$18[0].fields[0];
  mimpls$$6 = (0, _List.map)(function mapping$$36(tuple$$1) {
    return tuple$$1[0];
  }, files);
  return (0, _Exprs.FSharpAssemblyContents$$$$002Ector$$2BF0DF82)(patternInput$$17[0], patternInput$$17[2], patternInput$$17[3], patternInput$$17[1], mimpls$$6);
}

function FSharpCheckProjectResults$$GetUsesOfSymbol$$5B5ADE4A(info$$6, symbol$$3) {
  const patternInput$$19 = FSharpCheckProjectResults$$getDetails(info$$6);
  return _AsyncBuilder.singleton.Return((0, _Array.ofSeq)((0, _Seq.map)(function mapping$$38(symbolUse$$2) {
    return (0, _Symbols.FSharpSymbolUse$$$$002Ector$$1376C06A)(patternInput$$19[0], symbolUse$$2.DisplayEnv, symbol$$3, symbolUse$$2.ItemOccurence, symbolUse$$2.Range);
  }, (0, _Seq.filter)(function predicate$$25(symbolUse$$1) {
    return !(0, _Util.equals)(symbolUse$$1.ItemOccurence, new _NameResolution.ItemOccurence(6, "RelatedText"));
  }, (0, _Set.distinctBy)(function projection$$3(symbolUse) {
    return [symbolUse.ItemOccurence, symbolUse.Range];
  }, (0, _Seq.collect)(function mapping$$37(r$$4) {
    return (0, _NameResolution.TcSymbolUses$$GetUsesOfSymbol$$15FD5CB0)(r$$4, (0, _Symbols.FSharpSymbol$$get_Item)(symbol$$3));
  }, patternInput$$19[4]), {
    Compare: _Util.compareArrays
  }))), Array));
}

function FSharpCheckProjectResults$$GetAllUsesOfAllSymbols(__$$29) {
  const patternInput$$20 = FSharpCheckProjectResults$$getDetails(__$$29);
  const cenv = (0, _Symbols.SymbolEnv$$$$002Ector$$Z4628ED4C)(patternInput$$20[0], patternInput$$20[2], patternInput$$20[3], patternInput$$20[1]);
  return _AsyncBuilder.singleton.Return((0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (r$$5) {
      return (0, _Seq.collect)(function (symbolUse$$3) {
        if (!(0, _Util.equals)(symbolUse$$3.ItemOccurence, new _NameResolution.ItemOccurence(6, "RelatedText"))) {
          const symbol$$4 = (0, _Symbols.FSharpSymbol$$$Create$$Z5DC96FA7)(cenv, symbolUse$$3.Item);
          return (0, _Seq.singleton)((0, _Symbols.FSharpSymbolUse$$$$002Ector$$1376C06A)(patternInput$$20[0], symbolUse$$3.DisplayEnv, symbol$$4, symbolUse$$3.ItemOccurence, symbolUse$$3.Range));
        } else {
          return (0, _Seq.empty)();
        }
      }, (0, _NameResolution.TcSymbolUses$$get_AllUsesOfSymbols)(r$$5));
    }, patternInput$$20[4]);
  }), Array));
}

function FSharpCheckProjectResults$$get_ProjectContext(__$$30) {
  const patternInput$$21 = FSharpCheckProjectResults$$getDetails(__$$30);
  const assemblies$$1 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (x$$45) {
      return (0, _Symbols.FSharpAssembly$$$$002Ector$$7E046483)(patternInput$$21[0], patternInput$$21[1], x$$45.FSharpViewOfMetadata);
    }, (0, _CompileOps.TcImports$$GetImportedAssemblies)(patternInput$$21[1]));
  }));
  return FSharpProjectContext$$$$002Ector$$46B4C30A(patternInput$$21[2], assemblies$$1, patternInput$$21[8]);
}

function FSharpCheckProjectResults$$get_RawFSharpAssemblyData(__$$31) {
  const patternInput$$22 = FSharpCheckProjectResults$$getDetails(__$$31);
  return patternInput$$22[6];
}

function FSharpCheckProjectResults$$get_DependencyFiles(__$$32) {
  const patternInput$$23 = FSharpCheckProjectResults$$getDetails(__$$32);
  return patternInput$$23[10];
}

function FSharpCheckProjectResults$$get_AssemblyFullName(__$$33) {
  const patternInput$$24 = FSharpCheckProjectResults$$getDetails(__$$33);
  return (0, _il.ILAssemblyRef$$get_QualifiedName)(patternInput$$24[7]);
}

FSharpCheckProjectResults.prototype.toString = function () {
  const info$$7 = this;
  return "FSharpCheckProjectResults(" + info$$7.projectFileName + ")";
};

function FSharpCheckProjectResults$$getDetails(this$$$30) {
  if (this$$$30.details != null) {
    const d$$2 = this$$$30.details;
    return d$$2;
  } else {
    throw new Error("The project has no results due to critical errors in the project options. Check the HasCriticalErrors before accessing the detailed results. Errors: " + (0, _String.join)("\n", ...(0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.map)(function (e$$4) {
        return (0, _SymbolHelpers.FSharpErrorInfo$$get_Message)(e$$4);
      }, this$$$30.errors);
    }))));
  }
}

function FSharpCheckProjectResults$$getTcConfig(this$$$31) {
  if (this$$$31.tcConfigOption != null) {
    const d$$3 = this$$$31.tcConfigOption;
    return d$$3;
  } else {
    throw new Error("The project has no results due to critical errors in the project options. Check the HasCriticalErrors before accessing the detailed results. Errors: " + (0, _String.join)("\n", ...(0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.map)(function (e$$5) {
        return (0, _SymbolHelpers.FSharpErrorInfo$$get_Message)(e$$5);
      }, this$$$31.errors);
    }))));
  }
}

const FSharpCheckFileResults = (0, _Types.declare)(function FSharpCheckFileResults(filename, errors$$2, scopeOptX, dependencyFiles$$1, builderX, reactorOpsX, keepAssemblyContents$$1) {
  const $this$$24 = this;
  $this$$24.filename = filename;
  $this$$24.errors = errors$$2;
  $this$$24.scopeOptX = scopeOptX;
  $this$$24.dependencyFiles = dependencyFiles$$1;
  $this$$24.keepAssemblyContents = keepAssemblyContents$$1;

  if ($this$$24.scopeOptX != null) {
    const scopeX = $this$$24.scopeOptX;
    $this$$24.details = [scopeX, builderX, reactorOpsX];
  } else {
    $this$$24.details = null;
  }

  const matchValue$$68 = $this$$24.details;

  if (matchValue$$68 != null) {
    const builderOpt = matchValue$$68[1];
    $this$$24.decrementer = (0, _IncrementalBuild.IncrementalBuilder$$$KeepBuilderAlive$$3463A03A)(builderOpt);
  } else {
    $this$$24.decrementer = {
      Dispose() {}

    };
  }

  $this$$24.disposed = false;
});
exports.FSharpCheckFileResults = FSharpCheckFileResults;

function FSharpCheckFileResults$$$$002Ector$$Z664E4DC4(filename, errors$$2, scopeOptX, dependencyFiles$$1, builderX, reactorOpsX, keepAssemblyContents$$1) {
  return this != null ? FSharpCheckFileResults.call(this, filename, errors$$2, scopeOptX, dependencyFiles$$1, builderX, reactorOpsX, keepAssemblyContents$$1) : new FSharpCheckFileResults(filename, errors$$2, scopeOptX, dependencyFiles$$1, builderX, reactorOpsX, keepAssemblyContents$$1);
}

FSharpCheckFileResults.prototype.Finalize = function () {
  const info$$8 = this;
  FSharpCheckFileResults$$dispose(info$$8);
};

function FSharpCheckFileResults$$get_Errors(info$$9) {
  return info$$9.errors;
}

function FSharpCheckFileResults$$get_HasFullTypeCheckInfo(info$$10) {
  return info$$10.details != null;
}

function FSharpCheckFileResults$$GetDeclarationListInfo$$52CF53AB(info$$11, parseResultsOpt$$10, line$$13, lineStr$$11, partialName$$2, getAllEntities$$2, hasTextChangedSinceLastTypecheck$$25, userOpName$$3) {
  const userOpName$$4 = (0, _Option.defaultArg)(userOpName$$3, "Unknown");
  const getAllEntities$$3 = (0, _Option.defaultArg)(getAllEntities$$2, function () {
    return (0, _Types.L)();
  });
  const hasTextChangedSinceLastTypecheck$$26 = (0, _Option.defaultArg)(hasTextChangedSinceLastTypecheck$$25, function (_arg1$$4) {
    return false;
  });
  return FSharpCheckFileResults$$reactorOp(info$$11, userOpName$$4, "GetDeclarations", (0, _ServiceDeclarationLists.FSharpDeclarationListInfo$$$get_Empty)(), function f$$1(ctok$$11, scope$$2) {
    return TypeCheckInfo$$GetDeclarations$$74446B08(scope$$2, ctok$$11, parseResultsOpt$$10, line$$13, lineStr$$11, partialName$$2, getAllEntities$$3, hasTextChangedSinceLastTypecheck$$26);
  });
}

function FSharpCheckFileResults$$GetDeclarationListSymbols$$52CF53AB(info$$12, parseResultsOpt$$11, line$$14, lineStr$$12, partialName$$3, getAllEntities$$4, hasTextChangedSinceLastTypecheck$$27, userOpName$$5) {
  const userOpName$$6 = (0, _Option.defaultArg)(userOpName$$5, "Unknown");
  const hasTextChangedSinceLastTypecheck$$28 = (0, _Option.defaultArg)(hasTextChangedSinceLastTypecheck$$27, function (_arg2$$4) {
    return false;
  });
  const getAllEntities$$5 = (0, _Option.defaultArg)(getAllEntities$$4, function () {
    return (0, _Types.L)();
  });
  return FSharpCheckFileResults$$reactorOp(info$$12, userOpName$$6, "GetDeclarationListSymbols", (0, _Types.L)(), function f$$2(ctok$$12, scope$$3) {
    return TypeCheckInfo$$GetDeclarationListSymbols$$74446B08(scope$$3, ctok$$12, parseResultsOpt$$11, line$$14, lineStr$$12, partialName$$3, getAllEntities$$5, hasTextChangedSinceLastTypecheck$$28);
  });
}

function FSharpCheckFileResults$$GetStructuredToolTipText$$Z49C39EE8(info$$13, line$$15, colAtEndOfNames$$12, lineStr$$13, names$$5, tokenTag, userOpName$$7) {
  const userOpName$$8 = (0, _Option.defaultArg)(userOpName$$7, "Unknown");
  const dflt$$2 = new _SymbolHelpers.FSharpToolTipText$00601(0, "FSharpToolTipText", (0, _Types.L)());
  const matchValue$$69 = (0, _pars.tokenTagToTokenId)(tokenTag);
  var $target$$190;

  switch (matchValue$$69.tag) {
    case 190:
      $target$$190 = 0;
      break;

    case 192:
    case 9:
      $target$$190 = 1;
      break;

    default:
      $target$$190 = 2;
  }

  switch ($target$$190) {
    case 0:
      {
        return FSharpCheckFileResults$$reactorOp(info$$13, userOpName$$8, "GetStructuredToolTipText", dflt$$2, function f$$3(ctok$$13, scope$$4) {
          return TypeCheckInfo$$GetStructuredToolTipText$$Z1FAAFC39(scope$$4, ctok$$13, line$$15, lineStr$$13, colAtEndOfNames$$12, names$$5);
        });
      }

    case 1:
      {
        return FSharpCheckFileResults$$reactorOp(info$$13, userOpName$$8, "GetReferenceResolutionToolTipText", dflt$$2, function f$$4(ctok$$14, scope$$5) {
          return TypeCheckInfo$$GetReferenceResolutionStructuredToolTipText$$62A2208D(scope$$5, ctok$$14, line$$15, colAtEndOfNames$$12);
        });
      }

    case 2:
      {
        return _AsyncBuilder.singleton.Return(dflt$$2);
      }
  }
}

function FSharpCheckFileResults$$GetToolTipText$$Z49C39EE8(info$$14, line$$16, colAtEndOfNames$$13, lineStr$$14, names$$6, tokenTag$$1, userOpName$$9) {
  return (0, _SymbolHelpers.Tooltips$$$Map)(_SymbolHelpers.Tooltips$$$ToFSharpToolTipText, FSharpCheckFileResults$$GetStructuredToolTipText$$Z49C39EE8(info$$14, line$$16, colAtEndOfNames$$13, lineStr$$14, names$$6, tokenTag$$1, userOpName$$9));
}

function FSharpCheckFileResults$$GetF1Keyword$$10821604(info$$15, line$$17, colAtEndOfNames$$14, lineStr$$15, names$$7, userOpName$$10) {
  const userOpName$$11 = (0, _Option.defaultArg)(userOpName$$10, "Unknown");
  return FSharpCheckFileResults$$reactorOp(info$$15, userOpName$$11, "GetF1Keyword", null, function f$$5(ctok$$15, scope$$6) {
    return TypeCheckInfo$$GetF1Keyword$$Z1FAAFC39(scope$$6, ctok$$15, line$$17, lineStr$$15, colAtEndOfNames$$14, names$$7);
  });
}

function FSharpCheckFileResults$$GetMethods$$Z3AE572CF(info$$16, line$$18, colAtEndOfNames$$15, lineStr$$16, names$$8, userOpName$$12) {
  const userOpName$$13 = (0, _Option.defaultArg)(userOpName$$12, "Unknown");
  const dflt$$6 = (0, _ServiceDeclarationLists.FSharpMethodGroup$$$$002Ector$$5F5A1124)("", []);
  return FSharpCheckFileResults$$reactorOp(info$$16, userOpName$$13, "GetMethods", dflt$$6, function f$$6(ctok$$16, scope$$7) {
    return TypeCheckInfo$$GetMethods$$Z46B519EE(scope$$7, ctok$$16, line$$18, lineStr$$16, colAtEndOfNames$$15, names$$8);
  });
}

function FSharpCheckFileResults$$GetDeclarationLocation$$Z5D1F4C05(info$$17, line$$19, colAtEndOfNames$$16, lineStr$$17, names$$9, preferFlag$$1, userOpName$$14) {
  const userOpName$$15 = (0, _Option.defaultArg)(userOpName$$14, "Unknown");
  const dflt$$7 = new FSharpFindDeclResult(0, "DeclNotFound", new FSharpFindDeclFailureReason(0, "Unknown", ""));
  return FSharpCheckFileResults$$reactorOp(info$$17, userOpName$$15, "GetDeclarationLocation", dflt$$7, function f$$7(ctok$$17, scope$$8) {
    return TypeCheckInfo$$GetDeclarationLocation$$Z66EB2048(scope$$8, ctok$$17, line$$19, lineStr$$17, colAtEndOfNames$$16, names$$9, preferFlag$$1);
  });
}

function FSharpCheckFileResults$$GetSymbolUseAtLocation$$10821604(info$$18, line$$20, colAtEndOfNames$$17, lineStr$$18, names$$10, userOpName$$16) {
  const userOpName$$17 = (0, _Option.defaultArg)(userOpName$$16, "Unknown");
  return FSharpCheckFileResults$$reactorOp(info$$18, userOpName$$17, "GetSymbolUseAtLocation", null, function f$$8(ctok$$18, scope$$9) {
    return (0, _Option.defaultArg)(TypeCheckInfo$$GetSymbolUseAtLocation$$Z1FAAFC39(scope$$9, ctok$$18, line$$20, lineStr$$18, colAtEndOfNames$$17, names$$10), null, function mapping$$39(tupledArg$$33) {
      return (0, _Symbols.FSharpSymbolUse$$$$002Ector$$1376C06A)(TypeCheckInfo$$get_TcGlobals(scope$$9), tupledArg$$33[1], tupledArg$$33[0], new _NameResolution.ItemOccurence(1, "Use"), tupledArg$$33[2]);
    });
  });
}

function FSharpCheckFileResults$$GetMethodsAsSymbols$$10821604(info$$19, line$$21, colAtEndOfNames$$18, lineStr$$19, names$$11, userOpName$$18) {
  const userOpName$$19 = (0, _Option.defaultArg)(userOpName$$18, "Unknown");
  return FSharpCheckFileResults$$reactorOp(info$$19, userOpName$$19, "GetMethodsAsSymbols", null, function f$$9(ctok$$19, scope$$10) {
    return (0, _Option.defaultArg)(TypeCheckInfo$$GetMethodsAsSymbols$$Z1FAAFC39(scope$$10, ctok$$19, line$$21, lineStr$$19, colAtEndOfNames$$18, names$$11), null, function mapping$$41(tupledArg$$34) {
      return (0, _List.map)(function mapping$$40(sym$$1) {
        return (0, _Symbols.FSharpSymbolUse$$$$002Ector$$1376C06A)(TypeCheckInfo$$get_TcGlobals(scope$$10), tupledArg$$34[1], sym$$1, new _NameResolution.ItemOccurence(1, "Use"), tupledArg$$34[2]);
      }, tupledArg$$34[0]);
    });
  });
}

function FSharpCheckFileResults$$GetSymbolAtLocation$$10821604(info$$20, line$$22, colAtEndOfNames$$19, lineStr$$20, names$$12, userOpName$$20) {
  const userOpName$$21 = (0, _Option.defaultArg)(userOpName$$20, "Unknown");
  return FSharpCheckFileResults$$reactorOp(info$$20, userOpName$$21, "GetSymbolAtLocation", null, function f$$10(ctok$$20, scope$$11) {
    return (0, _Option.defaultArg)(TypeCheckInfo$$GetSymbolUseAtLocation$$Z1FAAFC39(scope$$11, ctok$$20, line$$22, lineStr$$20, colAtEndOfNames$$19, names$$12), null, function mapping$$42(tupledArg$$35) {
      return tupledArg$$35[0];
    });
  });
}

function FSharpCheckFileResults$$GetFormatSpecifierLocations(info$$21) {
  return (0, _Array.map)(function mapping$$43(tuple$$2) {
    return tuple$$2[0];
  }, FSharpCheckFileResults$$GetFormatSpecifierLocationsAndArity(info$$21), Array);
}

function FSharpCheckFileResults$$GetFormatSpecifierLocationsAndArity(info$$22) {
  return FSharpCheckFileResults$$threadSafeOp(info$$22, function dflt$$11() {
    return [];
  }, function f$$11(scope$$12) {
    return TypeCheckInfo$$GetFormatSpecifierLocationsAndArity(scope$$12);
  });
}

function FSharpCheckFileResults$$GetSemanticClassification$$4DDEF99(__$$34, range$$3) {
  return FSharpCheckFileResults$$threadSafeOp(__$$34, function dflt$$12() {
    return [];
  }, function f$$12(scope$$13) {
    return TypeCheckInfo$$GetSemanticClassification$$4DDEF99(scope$$13, range$$3);
  });
}

function FSharpCheckFileResults$$get_PartialAssemblySignature(__$$35) {
  return FSharpCheckFileResults$$threadSafeOp(__$$35, function dflt$$13() {
    throw new Error("not available");
  }, function f$$13(scope$$14) {
    return TypeCheckInfo$$get_PartialAssemblySignatureForFile(scope$$14);
  });
}

function FSharpCheckFileResults$$get_ProjectContext(__$$36) {
  return FSharpCheckFileResults$$threadSafeOp(__$$36, function dflt$$14() {
    throw new Error("not available");
  }, function f$$14(scope$$15) {
    return FSharpProjectContext$$$$002Ector$$46B4C30A(TypeCheckInfo$$get_ThisCcu(scope$$15), TypeCheckInfo$$GetReferencedAssemblies(scope$$15), TypeCheckInfo$$get_AccessRights(scope$$15));
  });
}

function FSharpCheckFileResults$$get_DependencyFiles(__$$37) {
  return __$$37.dependencyFiles;
}

function FSharpCheckFileResults$$GetAllUsesOfAllSymbolsInFile(info$$23) {
  return _AsyncBuilder.singleton.Return(FSharpCheckFileResults$$threadSafeOp(info$$23, function dflt$$15() {
    return [];
  }, function f$$15(scope$$16) {
    const cenv$$1 = TypeCheckInfo$$get_SymbolEnv(scope$$16);
    return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (symbolUse$$4) {
        if (!(0, _Util.equals)(symbolUse$$4.ItemOccurence, new _NameResolution.ItemOccurence(6, "RelatedText"))) {
          const symbol$$5 = (0, _Symbols.FSharpSymbol$$$Create$$Z5DC96FA7)(cenv$$1, symbolUse$$4.Item);
          return (0, _Seq.singleton)((0, _Symbols.FSharpSymbolUse$$$$002Ector$$1376C06A)(TypeCheckInfo$$get_TcGlobals(scope$$16), symbolUse$$4.DisplayEnv, symbol$$5, symbolUse$$4.ItemOccurence, symbolUse$$4.Range));
        } else {
          return (0, _Seq.empty)();
        }
      }, (0, _NameResolution.TcSymbolUses$$get_AllUsesOfSymbols)(TypeCheckInfo$$get_ScopeSymbolUses(scope$$16)));
    }), Array);
  }));
}

function FSharpCheckFileResults$$GetUsesOfSymbolInFile$$5B5ADE4A(info$$24, symbol$$6) {
  return _AsyncBuilder.singleton.Return(FSharpCheckFileResults$$threadSafeOp(info$$24, function dflt$$16() {
    return [];
  }, function f$$16(scope$$17) {
    return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (symbolUse$$5) {
        return !(0, _Util.equals)(symbolUse$$5.ItemOccurence, new _NameResolution.ItemOccurence(6, "RelatedText")) ? (0, _Seq.singleton)((0, _Symbols.FSharpSymbolUse$$$$002Ector$$1376C06A)(TypeCheckInfo$$get_TcGlobals(scope$$17), symbolUse$$5.DisplayEnv, symbol$$6, symbolUse$$5.ItemOccurence, symbolUse$$5.Range)) : (0, _Seq.empty)();
      }, (0, _Set.distinctBy)(function projection$$4(symbolUse$$6) {
        return [symbolUse$$6.ItemOccurence, symbolUse$$6.Range];
      }, (0, _NameResolution.TcSymbolUses$$GetUsesOfSymbol$$15FD5CB0)(TypeCheckInfo$$get_ScopeSymbolUses(scope$$17), (0, _Symbols.FSharpSymbol$$get_Item)(symbol$$6)), {
        Compare: _Util.compareArrays
      }));
    }), Array);
  }));
}

function FSharpCheckFileResults$$GetVisibleNamespacesAndModulesAtPoint$$Z72E1C3A1(info$$25, pos$$5) {
  return _AsyncBuilder.singleton.Return(FSharpCheckFileResults$$threadSafeOp(info$$25, function dflt$$17() {
    return [];
  }, function f$$17(scope$$18) {
    return (0, _Array.ofList)(TypeCheckInfo$$GetVisibleNamespacesAndModulesAtPosition$$Z72E1C3A1(scope$$18, pos$$5), Array);
  }));
}

function FSharpCheckFileResults$$IsRelativeNameResolvable$$Z54CC1130(info$$26, pos$$6, plid$$13, item$$29, userOpName$$22) {
  const userOpName$$23 = (0, _Option.defaultArg)(userOpName$$22, "Unknown");
  return FSharpCheckFileResults$$reactorOp(info$$26, userOpName$$23, "IsRelativeNameResolvable", true, function f$$18(ctok$$21, scope$$19) {
    (0, _illib.RequireCompilationThread)(ctok$$21);
    return TypeCheckInfo$$IsRelativeNameResolvable$$Z77F343C2(scope$$19, pos$$6, plid$$13, item$$29);
  });
}

function FSharpCheckFileResults$$IsRelativeNameResolvableFromSymbol$$Z417B4596(info$$27, pos$$7, plid$$14, symbol$$7, userOpName$$24) {
  const userOpName$$25 = (0, _Option.defaultArg)(userOpName$$24, "Unknown");
  return FSharpCheckFileResults$$reactorOp(info$$27, userOpName$$25, "IsRelativeNameResolvableFromSymbol", true, function f$$19(ctok$$22, scope$$20) {
    (0, _illib.RequireCompilationThread)(ctok$$22);
    return TypeCheckInfo$$IsRelativeNameResolvableFromSymbol$$Z3954C13C(scope$$20, pos$$7, plid$$14, symbol$$7);
  });
}

function FSharpCheckFileResults$$GetDisplayEnvForPos$$Z72E1C3A1(info$$28, pos$$8) {
  const userOpName$$26 = "CodeLens";
  return FSharpCheckFileResults$$reactorOp(info$$28, userOpName$$26, "GetDisplayContextAtPos", null, function f$$20(ctok$$23, scope$$21) {
    (0, _illib.DoesNotRequireCompilerThreadTokenAndCouldPossiblyBeMadeConcurrent)(ctok$$23);
    const patternInput$$25 = TypeCheckInfo$$GetBestDisplayEnvForPos$$Z72E1C3A1(scope$$21, pos$$8);
    const nenv$$11 = patternInput$$25[0][0];
    return (0, _NameResolution.NameResolutionEnv$$get_DisplayEnv)(nenv$$11);
  });
}

function FSharpCheckFileResults$$get_ImplementationFile(info$$29) {
  if (!info$$29.keepAssemblyContents) {
    throw new Error("The 'keepAssemblyContents' flag must be set to true on the FSharpChecker in order to access the checked contents of assemblies");
  }

  return (0, _Option.defaultArg)((0, _Option.defaultArg)(info$$29.scopeOptX, null, function mapping$$45(scope$$22) {
    const cenv$$2 = (0, _Symbols.SymbolEnv$$$$002Ector$$Z4628ED4C)(TypeCheckInfo$$get_TcGlobals(scope$$22), TypeCheckInfo$$get_ThisCcu(scope$$22), TypeCheckInfo$$get_CcuSigForFile(scope$$22), TypeCheckInfo$$get_TcImports(scope$$22));
    return (0, _Option.defaultArg)(TypeCheckInfo$$get_ImplementationFile(scope$$22), null, function mapping$$44(implFile) {
      return (0, _Exprs.FSharpImplementationFileContents$$$$002Ector$$Z172BEBAB)(cenv$$2, implFile);
    });
  }), null);
}

function FSharpCheckFileResults$$get_OpenDeclarations(info$$30) {
  return (0, _Option.defaultArg)((0, _Option.defaultArg)(info$$30.scopeOptX, null, function mapping$$48(scope$$23) {
    const cenv$$3 = TypeCheckInfo$$get_SymbolEnv(scope$$23);
    return (0, _Array.map)(function mapping$$47(x$$47) {
      return (0, _Symbols.FSharpOpenDeclaration$$$$002Ector$$594F51B0)(x$$47.LongId, x$$47.Range, (0, _List.map)(function mapping$$46(x$$48) {
        return (0, _Symbols.FSharpEntity$$$$002Ector$$30B979BD)(cenv$$3, x$$48);
      }, x$$47.Modules), x$$47.AppliedScope, x$$47.IsOwnNamespace);
    }, TypeCheckInfo$$get_OpenDeclarations(scope$$23), Array);
  }), []);
}

FSharpCheckFileResults.prototype.toString = function () {
  const info$$31 = this;
  return "FSharpCheckFileResults(" + info$$31.filename + ")";
};

function FSharpCheckFileResults$$dispose(this$$$32) {
  if (!this$$$32.disposed) {
    this$$$32.disposed = true;
    const matchValue$$70 = this$$$32.details;

    if (matchValue$$70 != null) {
      const reactor = matchValue$$70[2];
      this$$$32.details = null;
      reactor.EnqueueOp("GCFinalizer", "FSharpCheckFileResults.DecrementUsageCountOnIncrementalBuilder", this$$$32.filename, function (ctok$$24) {
        (0, _illib.RequireCompilationThread)(ctok$$24);
        this$$$32.decrementer.Dispose();
      });
    }
  }
}

function FSharpCheckFileResults$$reactorOp(this$$$33, userOpName$$27, opName$$13, dflt$$21, f$$21) {
  const builder$0040 = _AsyncBuilder.singleton;
  return builder$0040.Delay(function () {
    var builder;
    const matchValue$$71 = this$$$33.details;
    var $target$$196, builder$$1;

    if (matchValue$$71 != null) {
      if (matchValue$$71[1] != null) {
        if (builder = matchValue$$71[1], !(0, _IncrementalBuild.IncrementalBuilder$$get_IsAlive)(builder)) {
          $target$$196 = 1;
          builder$$1 = matchValue$$71[1];
        } else {
          $target$$196 = 2;
        }
      } else {
        $target$$196 = 2;
      }
    } else {
      $target$$196 = 0;
    }

    switch ($target$$196) {
      case 0:
        {
          return builder$0040.Return(dflt$$21);
        }

      case 1:
        {
          return builder$0040.Return(dflt$$21);
        }

      case 2:
        {
          if (matchValue$$71 != null) {
            const scope$$24 = matchValue$$71[0];
            const reactor$$1 = matchValue$$71[2];
            const builderOpt$$1 = matchValue$$71[1];
            return builder$0040.Using((0, _IncrementalBuild.IncrementalBuilder$$$KeepBuilderAlive$$3463A03A)(builderOpt$$1), function (_arg1$$5) {
              const _unwind = _arg1$$5;
              return builder$0040.Bind(reactor$$1.EnqueueAndAwaitOpAsync(userOpName$$27, opName$$13, this$$$33.filename, function (ctok$$25) {
                return (0, _illib.CancellableBuilder$$Return$$1505)(_illib.cancellable, f$$21(ctok$$25, scope$$24));
              }), function (_arg2$$5) {
                const res$$3 = _arg2$$5;
                return builder$0040.Return(res$$3);
              });
            });
          } else {
            throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/service/service.fs", 2015, 14);
          }
        }
    }
  });
}

function FSharpCheckFileResults$$threadSafeOp(this$$$34, dflt$$22, f$$22) {
  const matchValue$$72 = this$$$34.details;

  if (matchValue$$72 != null) {
    const scope$$25 = matchValue$$72[0];
    const _ops = matchValue$$72[2];
    const _builderOpt = matchValue$$72[1];
    return f$$22(scope$$25);
  } else {
    return dflt$$22();
  }
}