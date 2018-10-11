"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NameResolver$$$$002Ector$$Z19B36E82 = NameResolver$$$$002Ector$$Z19B36E82;
exports.NameResolver$$get_InstantiationGenerator = NameResolver$$get_InstantiationGenerator;
exports.NameResolver$$get_g = NameResolver$$get_g;
exports.NameResolver$$get_amap = NameResolver$$get_amap;
exports.NameResolver$$get_InfoReader = NameResolver$$get_InfoReader;
exports.UnionCaseRefsInTycon = UnionCaseRefsInTycon;
exports.UnionCaseRefsInModuleOrNamespace = UnionCaseRefsInModuleOrNamespace;
exports.TryFindTypeWithUnionCase = TryFindTypeWithUnionCase;
exports.TryFindTypeWithRecdField = TryFindTypeWithRecdField;
exports.ActivePatternElemsOfValRef = ActivePatternElemsOfValRef;
exports.TryMkValRefInModRef = TryMkValRefInModRef;
exports.ActivePatternElemsOfVal = ActivePatternElemsOfVal;
exports.ActivePatternElemsOfModuleOrNamespace = ActivePatternElemsOfModuleOrNamespace;
exports.$007CAbbrevOrAppTy$007C_$007C = $007CAbbrevOrAppTy$007C_$007C;
exports.Item$$$MakeMethGroup$$18D66E3A = Item$$$MakeMethGroup$$18D66E3A;
exports.Item$$$MakeCtorGroup$$18D66E3A = Item$$$MakeCtorGroup$$18D66E3A;
exports.Item$$get_DisplayName = Item$$get_DisplayName;
exports.valRefHash = valRefHash;
exports.ItemWithNoInst = ItemWithNoInst;
exports.$007CItemWithInst$007C = $007CItemWithInst$007C;
exports.ExtensionMember$$$Equality = ExtensionMember$$$Equality;
exports.ExtensionMember$$$Hash$$2BEFBA4C = ExtensionMember$$$Hash$$2BEFBA4C;
exports.ExtensionMember$$$Comparer$$2AE8EA0C = ExtensionMember$$$Comparer$$2AE8EA0C;
exports.ExtensionMember$$get_Priority = ExtensionMember$$get_Priority;
exports.NameResolutionEnv$$$Empty$$2AE8EA0C = NameResolutionEnv$$$Empty$$2AE8EA0C;
exports.NameResolutionEnv$$get_DisplayEnv = NameResolutionEnv$$get_DisplayEnv;
exports.NameResolutionEnv$$FindUnqualifiedItem$$Z721C83C5 = NameResolutionEnv$$FindUnqualifiedItem$$Z721C83C5;
exports.NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D = NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D;
exports.NameResolutionEnv$$TyconsByAccessNames$$5B75656D = NameResolutionEnv$$TyconsByAccessNames$$5B75656D;
exports.NameResolutionEnv$$ModulesAndNamespaces$$5B75656D = NameResolutionEnv$$ModulesAndNamespaces$$5B75656D;
exports.NextExtensionMethodPriority = NextExtensionMethodPriority;
exports.AddValRefsToItems = AddValRefsToItems;
exports.AddValRefToExtensionMembers = AddValRefToExtensionMembers;
exports.AddFakeNamedValRefToNameEnv = AddFakeNamedValRefToNameEnv;
exports.AddFakeNameToNameEnv = AddFakeNameToNameEnv;
exports.AddValRefsToActivePatternsNameEnv = AddValRefsToActivePatternsNameEnv;
exports.AddValRefsToNameEnvWithPriority = AddValRefsToNameEnvWithPriority;
exports.AddValRefToNameEnv = AddValRefToNameEnv;
exports.AddActivePatternResultTagsToNameEnv = AddActivePatternResultTagsToNameEnv;
exports.GeneralizeUnionCaseRef = GeneralizeUnionCaseRef;
exports.AddTyconsByDemangledNameAndArity = AddTyconsByDemangledNameAndArity;
exports.AddTyconByAccessNames = AddTyconByAccessNames;
exports.AddRecdField = AddRecdField;
exports.AddUnionCases1 = AddUnionCases1;
exports.AddUnionCases2 = AddUnionCases2;
exports.TryFindPatternByName = TryFindPatternByName;
exports.AddTyconRefsToNameEnv = AddTyconRefsToNameEnv;
exports.AddExceptionDeclsToNameEnv = AddExceptionDeclsToNameEnv;
exports.AddModuleAbbrevToNameEnv = AddModuleAbbrevToNameEnv;
exports.MakeNestedModuleRefs = MakeNestedModuleRefs;
exports.AddModuleOrNamespaceRefsToNameEnv = AddModuleOrNamespaceRefsToNameEnv;
exports.AddModuleOrNamespaceContentsToNameEnv = AddModuleOrNamespaceContentsToNameEnv;
exports.AddModulesAndNamespacesContentsToNameEnv = AddModulesAndNamespacesContentsToNameEnv;
exports.AddModuleOrNamespaceRefToNameEnv = AddModuleOrNamespaceRefToNameEnv;
exports.AddDeclaredTyparsToNameEnv = AddDeclaredTyparsToNameEnv;
exports.FreshenTycon = FreshenTycon;
exports.FreshenUnionCaseRef = FreshenUnionCaseRef;
exports.FreshenUnqualifiedItem = FreshenUnqualifiedItem;
exports.OneResult = OneResult;
exports.OneSuccess = OneSuccess;
exports.AddResults = AddResults;
exports.NoResultsOrUsefulErrors = NoResultsOrUsefulErrors;
exports.CollectResults = CollectResults;
exports.CollectAtMostOneResult = CollectAtMostOneResult;
exports.CollectResults2 = CollectResults2;
exports.MapResults = MapResults;
exports.AtMostOneResult = AtMostOneResult;
exports.AtMostOneResultQuery = AtMostOneResultQuery;
exports.TypeNameResolutionStaticArgsInfo$$$get_DefiniteEmpty = TypeNameResolutionStaticArgsInfo$$$get_DefiniteEmpty;
exports.TypeNameResolutionStaticArgsInfo$$$FromTyArgs$$Z524259A4 = TypeNameResolutionStaticArgsInfo$$$FromTyArgs$$Z524259A4;
exports.TypeNameResolutionStaticArgsInfo$$get_HasNoStaticArgsInfo = TypeNameResolutionStaticArgsInfo$$get_HasNoStaticArgsInfo;
exports.TypeNameResolutionStaticArgsInfo$$get_NumStaticArgs = TypeNameResolutionStaticArgsInfo$$get_NumStaticArgs;
exports.TypeNameResolutionStaticArgsInfo$$MangledNameForType$$Z721C83C5 = TypeNameResolutionStaticArgsInfo$$MangledNameForType$$Z721C83C5;
exports.TypeNameResolutionInfo$$$get_Default = TypeNameResolutionInfo$$$get_Default;
exports.TypeNameResolutionInfo$$$ResolveToTypeRefs$$ZAA5971B = TypeNameResolutionInfo$$$ResolveToTypeRefs$$ZAA5971B;
exports.TypeNameResolutionInfo$$get_StaticArgsInfo = TypeNameResolutionInfo$$get_StaticArgsInfo;
exports.TypeNameResolutionInfo$$get_ResolutionFlag = TypeNameResolutionInfo$$get_ResolutionFlag;
exports.TypeNameResolutionInfo$$get_DropStaticArgsInfo = TypeNameResolutionInfo$$get_DropStaticArgsInfo;
exports.LookupTypeNameInEntityHaveArity = LookupTypeNameInEntityHaveArity;
exports.LookupTypeNameInEnvHaveArity = LookupTypeNameInEnvHaveArity;
exports.LookupTypeNameNoArity = LookupTypeNameNoArity;
exports.LookupTypeNameInEnvNoArity = LookupTypeNameInEnvNoArity;
exports.LookupTypeNameInEntityNoArity = LookupTypeNameInEntityNoArity;
exports.LookupTypeNameInEnvMaybeHaveArity = LookupTypeNameInEnvMaybeHaveArity;
exports.LookupTypeNameInEntityMaybeHaveArity = LookupTypeNameInEntityMaybeHaveArity;
exports.MakeNestedType = MakeNestedType;
exports.GetNestedTypesOfType = GetNestedTypesOfType;
exports.OpenDeclaration$$$Create$$722A02CA = OpenDeclaration$$$Create$$722A02CA;
exports.$007CValRefOfProp$007C_$007C = $007CValRefOfProp$007C_$007C;
exports.$007CValRefOfMeth$007C_$007C = $007CValRefOfMeth$007C_$007C;
exports.$007CValRefOfEvent$007C_$007C = $007CValRefOfEvent$007C_$007C;
exports.$007CRecordFieldUse$007C_$007C = $007CRecordFieldUse$007C_$007C;
exports.$007CILFieldUse$007C_$007C = $007CILFieldUse$007C_$007C;
exports.$007CPropertyUse$007C_$007C = $007CPropertyUse$007C_$007C;
exports.$007CFSharpPropertyUse$007C_$007C = $007CFSharpPropertyUse$007C_$007C;
exports.$007CMethodUse$007C_$007C = $007CMethodUse$007C_$007C;
exports.$007CFSharpMethodUse$007C_$007C = $007CFSharpMethodUse$007C_$007C;
exports.$007CEntityUse$007C_$007C = $007CEntityUse$007C_$007C;
exports.$007CEventUse$007C_$007C = $007CEventUse$007C_$007C;
exports.$007CFSharpEventUse$007C_$007C = $007CFSharpEventUse$007C_$007C;
exports.$007CUnionCaseUse$007C_$007C = $007CUnionCaseUse$007C_$007C;
exports.$007CValUse$007C_$007C = $007CValUse$007C_$007C;
exports.$007CActivePatternCaseUse$007C_$007C = $007CActivePatternCaseUse$007C_$007C;
exports.tyconRefDefnHash = tyconRefDefnHash;
exports.tyconRefDefnEq = tyconRefDefnEq;
exports.valRefDefnHash = valRefDefnHash;
exports.valRefDefnEq = valRefDefnEq;
exports.unionCaseRefDefnEq = unionCaseRefDefnEq;
exports.ItemsAreEffectivelyEqual = ItemsAreEffectivelyEqual;
exports.ItemsAreEffectivelyEqualHash = ItemsAreEffectivelyEqualHash;
exports.CapturedNameResolution$$$$002Ector$$5BDACC40 = CapturedNameResolution$$$$002Ector$$5BDACC40;
exports.CapturedNameResolution$$get_Pos = CapturedNameResolution$$get_Pos;
exports.CapturedNameResolution$$get_Item = CapturedNameResolution$$get_Item;
exports.CapturedNameResolution$$get_ItemWithInst = CapturedNameResolution$$get_ItemWithInst;
exports.CapturedNameResolution$$get_ItemOccurence = CapturedNameResolution$$get_ItemOccurence;
exports.CapturedNameResolution$$get_DisplayEnv = CapturedNameResolution$$get_DisplayEnv;
exports.CapturedNameResolution$$get_NameResolutionEnv = CapturedNameResolution$$get_NameResolutionEnv;
exports.CapturedNameResolution$$get_AccessorDomain = CapturedNameResolution$$get_AccessorDomain;
exports.CapturedNameResolution$$get_Range = CapturedNameResolution$$get_Range;
exports.CapturedNameResolution$$DebugToString = CapturedNameResolution$$DebugToString;
exports.TcResolutions$$$$002Ector$$Z1EE1FE29 = TcResolutions$$$$002Ector$$Z1EE1FE29;
exports.TcResolutions$$get_CapturedEnvs = TcResolutions$$get_CapturedEnvs;
exports.TcResolutions$$get_CapturedExpressionTypings = TcResolutions$$get_CapturedExpressionTypings;
exports.TcResolutions$$get_CapturedNameResolutions = TcResolutions$$get_CapturedNameResolutions;
exports.TcResolutions$$get_CapturedMethodGroupResolutions = TcResolutions$$get_CapturedMethodGroupResolutions;
exports.TcResolutions$$$get_Empty = TcResolutions$$$get_Empty;
exports.TcSymbolUses$$$$002Ector$$Z766AEAAD = TcSymbolUses$$$$002Ector$$Z766AEAAD;
exports.TcSymbolUses$$GetUsesOfSymbol$$15FD5CB0 = TcSymbolUses$$GetUsesOfSymbol$$15FD5CB0;
exports.TcSymbolUses$$get_AllUsesOfSymbols = TcSymbolUses$$get_AllUsesOfSymbols;
exports.TcSymbolUses$$GetFormatSpecifierLocationsAndArity = TcSymbolUses$$GetFormatSpecifierLocationsAndArity;
exports.TcResultsSinkImpl$$$$002Ector$$Z556E795E = TcResultsSinkImpl$$$$002Ector$$Z556E795E;
exports.TcResultsSinkImpl$$GetResolutions = TcResultsSinkImpl$$GetResolutions;
exports.TcResultsSinkImpl$$GetSymbolUses = TcResultsSinkImpl$$GetSymbolUses;
exports.TcResultsSinkImpl$$GetOpenDeclarations = TcResultsSinkImpl$$GetOpenDeclarations;
exports.TcResultsSink$$$get_NoSink = TcResultsSink$$$get_NoSink;
exports.TcResultsSink$$$WithSink$$7FE138D7 = TcResultsSink$$$WithSink$$7FE138D7;
exports.WithNewTypecheckResultsSink = WithNewTypecheckResultsSink;
exports.TemporarilySuspendReportingTypecheckResultsToSink = TemporarilySuspendReportingTypecheckResultsToSink;
exports.CallEnvSink = CallEnvSink;
exports.CallNameResolutionSink = CallNameResolutionSink;
exports.CallNameResolutionSinkReplacing = CallNameResolutionSinkReplacing;
exports.CallExprHasTypeSink = CallExprHasTypeSink;
exports.CallOpenDeclarationSink = CallOpenDeclarationSink;
exports.CheckAllTyparsInferrable = CheckAllTyparsInferrable;
exports.ResolutionInfo$$$SendEntityPathToSink$$Z7B7DC02C = ResolutionInfo$$$SendEntityPathToSink$$Z7B7DC02C;
exports.ResolutionInfo$$$get_Empty = ResolutionInfo$$$get_Empty;
exports.ResolutionInfo$$AddEntity$$Z30807AE9 = ResolutionInfo$$AddEntity$$Z30807AE9;
exports.ResolutionInfo$$AddWarning$$18A9E779 = ResolutionInfo$$AddWarning$$18A9E779;
exports.CheckForTypeLegitimacyAndMultipleGenericTypeAmbiguities = CheckForTypeLegitimacyAndMultipleGenericTypeAmbiguities;
exports.ResolveLongIndentAsModuleOrNamespace = ResolveLongIndentAsModuleOrNamespace;
exports.ResolveLongIndentAsModuleOrNamespaceThen = ResolveLongIndentAsModuleOrNamespaceThen;
exports.ResolveObjectConstructor = ResolveObjectConstructor;
exports.IntrinsicPropInfosOfTypeInScope = IntrinsicPropInfosOfTypeInScope;
exports.SelectPropInfosFromExtMembers = SelectPropInfosFromExtMembers;
exports.ExtensionPropInfosOfTypeInScope = ExtensionPropInfosOfTypeInScope;
exports.AllPropInfosOfTypeInScope = AllPropInfosOfTypeInScope;
exports.IntrinsicMethInfosOfType = IntrinsicMethInfosOfType;
exports.SelectMethInfosFromExtMembers = SelectMethInfosFromExtMembers;
exports.ExtensionMethInfosOfTypeInScope = ExtensionMethInfosOfTypeInScope;
exports.AllMethInfosOfTypeInScope = AllMethInfosOfTypeInScope;
exports.TryFindUnionCaseOfType = TryFindUnionCaseOfType;
exports.CoreDisplayName = CoreDisplayName;
exports.DecodeFSharpEvent = DecodeFSharpEvent;
exports.GetRecordLabelsForType = GetRecordLabelsForType;
exports.ResolveLongIdentInTypePrim = ResolveLongIdentInTypePrim;
exports.ResolveLongIdentInNestedTypes = ResolveLongIdentInNestedTypes;
exports.ResolveLongIdentInType = ResolveLongIdentInType;
exports.$007CAccessibleEntityRef$007C_$007C = $007CAccessibleEntityRef$007C_$007C;
exports.ResolveExprLongIdentInModuleOrNamespace = ResolveExprLongIdentInModuleOrNamespace;
exports.ChooseTyconRefInExpr = ChooseTyconRefInExpr;
exports.ResolveExprLongIdentPrim = ResolveExprLongIdentPrim;
exports.ResolveExprLongIdent = ResolveExprLongIdent;
exports.ResolvePatternLongIdentInModuleOrNamespace = ResolvePatternLongIdentInModuleOrNamespace;
exports.ResolvePatternLongIdentPrim = ResolvePatternLongIdentPrim;
exports.ResolvePatternLongIdent = ResolvePatternLongIdent;
exports.ResolveNestedTypeThroughAbbreviation = ResolveNestedTypeThroughAbbreviation;
exports.ResolveTypeLongIdentInTyconRefPrim = ResolveTypeLongIdentInTyconRefPrim;
exports.ResolveTypeLongIdentInTyconRef = ResolveTypeLongIdentInTyconRef;
exports.SuggestTypeLongIdentInModuleOrNamespace = SuggestTypeLongIdentInModuleOrNamespace;
exports.ResolveTypeLongIdentPrim = ResolveTypeLongIdentPrim;
exports.ResolveTypeLongIdent = ResolveTypeLongIdent;
exports.ResolveFieldInModuleOrNamespace = ResolveFieldInModuleOrNamespace;
exports.SuggestOtherLabelsOfSameRecordType = SuggestOtherLabelsOfSameRecordType;
exports.SuggestLabelsOfRelatedRecords = SuggestLabelsOfRelatedRecords;
exports.ResolveFieldPrim = ResolveFieldPrim;
exports.ResolveField = ResolveField;
exports.FreshenRecdFieldRef = FreshenRecdFieldRef;
exports.ComputeItemRange = ComputeItemRange;
exports.FilterMethodGroups = FilterMethodGroups;
exports.NeedsWorkAfterResolution = NeedsWorkAfterResolution;
exports.ResolveLongIdentAsExprAndComputeRange = ResolveLongIdentAsExprAndComputeRange;
exports.$007CNonOverridable$007C_$007C = $007CNonOverridable$007C_$007C;
exports.ResolveExprDotLongIdentAndComputeRange = ResolveExprDotLongIdentAndComputeRange;
exports.FakeInstantiationGenerator = FakeInstantiationGenerator;
exports.ItemForModuleOrNamespaceRef = ItemForModuleOrNamespaceRef;
exports.ItemForPropInfo = ItemForPropInfo;
exports.IsTyconUnseenObsoleteSpec = IsTyconUnseenObsoleteSpec;
exports.IsTyconUnseen = IsTyconUnseen;
exports.IsValUnseen = IsValUnseen;
exports.IsUnionCaseUnseen = IsUnionCaseUnseen;
exports.ItemIsUnseen = ItemIsUnseen;
exports.ItemOfTyconRef = ItemOfTyconRef;
exports.ItemOfTy = ItemOfTy;
exports.IsInterestingModuleName = IsInterestingModuleName;
exports.PartialResolveLookupInModuleOrNamespaceAsModuleOrNamespaceThen = PartialResolveLookupInModuleOrNamespaceAsModuleOrNamespaceThen;
exports.PartialResolveLongIndentAsModuleOrNamespaceThen = PartialResolveLongIndentAsModuleOrNamespaceThen;
exports.ResolveRecordOrClassFieldsOfType = ResolveRecordOrClassFieldsOfType;
exports.ResolveCompletionTargets$$get_ResolveAll = ResolveCompletionTargets$$get_ResolveAll;
exports.ResolveCompletionsInType = ResolveCompletionsInType;
exports.ResolvePartialLongIdentInType = ResolvePartialLongIdentInType;
exports.InfosForTyconConstructors = InfosForTyconConstructors;
exports.notFakeContainerModule = notFakeContainerModule;
exports.ResolvePartialLongIdentInModuleOrNamespace = ResolvePartialLongIdentInModuleOrNamespace;
exports.TryToResolveLongIdentAsType = TryToResolveLongIdentAsType;
exports.ResolvePartialLongIdentPrim = ResolvePartialLongIdentPrim;
exports.ResolvePartialLongIdent = ResolvePartialLongIdent;
exports.ResolvePartialLongIdentInModuleOrNamespaceForRecordFields = ResolvePartialLongIdentInModuleOrNamespaceForRecordFields;
exports.ResolvePartialLongIdentToClassOrRecdFields = ResolvePartialLongIdentToClassOrRecdFields;
exports.ResolvePartialLongIdentToClassOrRecdFieldsImpl = ResolvePartialLongIdentToClassOrRecdFieldsImpl;
exports.ResolveCompletionsInTypeForItem = ResolveCompletionsInTypeForItem;
exports.ResolvePartialLongIdentInTypeForItem = ResolvePartialLongIdentInTypeForItem;
exports.ResolvePartialLongIdentInModuleOrNamespaceForItem = ResolvePartialLongIdentInModuleOrNamespaceForItem;
exports.PartialResolveLookupInModuleOrNamespaceAsModuleOrNamespaceThenLazy = PartialResolveLookupInModuleOrNamespaceAsModuleOrNamespaceThenLazy;
exports.PartialResolveLongIndentAsModuleOrNamespaceThenLazy = PartialResolveLongIndentAsModuleOrNamespaceThenLazy;
exports.GetCompletionForItem = GetCompletionForItem;
exports.IsItemResolvable = IsItemResolvable;
exports.GetVisibleNamespacesAndModulesAtPoint = GetVisibleNamespacesAndModulesAtPoint;
exports.ResolveCompletionTargets = exports.AfterResolution = exports.WarnOnUpperFlag = exports.UpperCaseIdentifierInPattern = exports.LookupKind = exports.IndeterminateType = exports.ResolutionInfo = exports.ResultTyparChecker = exports.TcResultsSink = exports.TcResultsSinkImpl = exports.TcSymbolUses = exports.TcSymbolUseData = exports.TcResolutions = exports.CapturedNameResolution = exports.FormatStringCheckContext = exports.OpenDeclaration = exports.ItemOccurence = exports.PermitDirectReferenceToGeneratedType = exports.TypeNameResolutionInfo = exports.TypeNameResolutionStaticArgsInfo = exports.TypeNameResolutionFlag = exports.ResultCollectionSettings = exports.CheckForDuplicateTyparFlag = exports.BulkAdd = exports.NameResolutionEnv = exports.FullyQualifiedFlag = exports.ExtensionMember = exports.FieldResolution = exports.ItemWithInst = exports.Item = exports.ArgumentContainer = exports.NameResolver = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _tast = require("./tast");

var _List = require("../fable-core.2.0.3/List");

var _Seq = require("../fable-core.2.0.3/Seq");

var _ast = require("./ast");

var _QueueList = require("./QueueList");

var _TastOps = require("./TastOps");

var _PrettyNaming = require("./PrettyNaming");

var _ErrorLogger = require("./ErrorLogger");

var _illib = require("../absil/illib");

var _Map = require("../fable-core.2.0.3/Map");

var _Option = require("../fable-core.2.0.3/Option");

var _infos = require("./infos");

var _FSharp = require("../fable-core.2.0.3/FSharp.Collections");

var _Long = require("../fable-core.2.0.3/Long");

var _import = require("./import");

var _TcGlobals = require("./TcGlobals");

var _AccessibilityLogic = require("./AccessibilityLogic");

var _InfoReader = require("./InfoReader");

var _AttributeChecking = require("./AttributeChecking");

var _il = require("../absil/il");

var _Array = require("../fable-core.2.0.3/Array");

var _Set = require("../fable-core.2.0.3/Set");

var _FSComp = require("../codegen/FSComp");

var _range = require("./range");

var _String = require("../fable-core.2.0.3/String");

var _zset = require("../absil/zset");

var _TaggedCollections = require("../utils/TaggedCollections");

var _NicePrint = require("./NicePrint");

var _lib = require("./lib");

var _AugmentWithHashCompare = require("./AugmentWithHashCompare");

const NameResolver = (0, _Types.declare)(function NameResolver(g, amap, infoReader, instantiationGenerator) {
  const $this$$1 = this;
  $this$$1["g@38"] = g;
  $this$$1["amap@39"] = amap;
  $this$$1.infoReader = infoReader;
  $this$$1.instantiationGenerator = instantiationGenerator;
});
exports.NameResolver = NameResolver;

function NameResolver$$$$002Ector$$Z19B36E82(g, amap, infoReader, instantiationGenerator) {
  return this != null ? NameResolver.call(this, g, amap, infoReader, instantiationGenerator) : new NameResolver(g, amap, infoReader, instantiationGenerator);
}

function NameResolver$$get_InstantiationGenerator(nr) {
  return (0, _Util.curry)(2, nr.instantiationGenerator);
}

function NameResolver$$get_g(nr$$1) {
  return nr$$1["g@38"];
}

function NameResolver$$get_amap(nr$$2) {
  return nr$$2["amap@39"];
}

function NameResolver$$get_InfoReader(nr$$3) {
  return nr$$3.infoReader;
}

function UnionCaseRefsInTycon(modref, tycon) {
  return (0, _List.map)(function mapping(uc) {
    return (0, _tast.mkModuleUnionCaseRef)(modref, tycon, uc);
  }, (0, _tast.Entity$$get_UnionCasesAsList)(tycon));
}

function UnionCaseRefsInModuleOrNamespace(modref$$1) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (x) {
      return UnionCaseRefsInTycon(modref$$1, x);
    }, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$1)));
  }));
}

function TryFindTypeWithUnionCase(modref$$2, id) {
  return (0, _QueueList.QueueListModule$$$tryFind)(function f(tycon$$1) {
    return (0, _tast.Entity$$GetUnionCaseByName$$Z721C83C5)(tycon$$1, (0, _ast.Ident$$get_idText)(id)) != null;
  }, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$2)));
}

function TryFindTypeWithRecdField(modref$$3, id$$1) {
  return (0, _QueueList.QueueListModule$$$tryFind)(function f$$1(tycon$$2) {
    return (0, _tast.Entity$$GetFieldByName$$Z721C83C5)(tycon$$2, (0, _ast.Ident$$get_idText)(id$$1)) != null;
  }, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$3)));
}

function ActivePatternElemsOfValRef(vref) {
  const matchValue = (0, _TastOps.TryGetActivePatternInfo)(vref);

  if (matchValue == null) {
    return (0, _Types.L)();
  } else {
    const apinfo = matchValue;
    return (0, _List.mapIndexed)(function mapping$$1(i, _arg1) {
      return new _tast.ActivePatternElemRef(0, "APElemRef", apinfo, vref, i);
    }, (0, _PrettyNaming.ActivePatternInfo$$get_ActiveTags)(apinfo));
  }
}

function TryMkValRefInModRef(modref$$4, vspec) {
  try {
    return function f$$2() {
      return (0, _tast.mkNestedValRef)(modref$$4, vspec);
    }();
  } catch (matchValue$$1) {
    if (matchValue$$1 instanceof _ErrorLogger.UnresolvedPathReferenceNoRange) {
      return null;
    } else {
      throw matchValue$$1;
    }
  }
}

function ActivePatternElemsOfVal(modref$$5, vspec$$1) {
  const matchValue$$2 = TryMkValRefInModRef(modref$$5, vspec$$1);

  if (matchValue$$2 != null) {
    const vref$$1 = matchValue$$2;
    return ActivePatternElemsOfValRef(vref$$1);
  } else {
    return (0, _Types.L)();
  }
}

function ActivePatternElemsOfModuleOrNamespace(modref$$6) {
  const mtyp = (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$6);
  const cache = (0, _tast.ModuleOrNamespaceType$$get_ActivePatternElemRefLookupTable)(mtyp);
  const matchValue$$3 = cache.contents;

  if (matchValue$$3 == null) {
    const res = function f$$3() {
      return (0, _Seq.fold)(function folder(acc, apref) {
        return (0, _illib.NameMapModule$$$add)((0, _TastOps.ActivePatternElemRef$002Eget_Name)(apref), apref, acc);
      }, (0, _Map.empty)({
        Compare: _Util.comparePrimitives
      }), (0, _Seq.collect)(function mapping$$2(vspec$$2) {
        return ActivePatternElemsOfVal(modref$$6, vspec$$2);
      }, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)(mtyp)));
    }();

    cache.contents = (0, _Option.some)(res);
    return res;
  } else {
    const v = (0, _Option.value)(matchValue$$3);
    return v;
  }
}

function $007CAbbrevOrAppTy$007C_$007C(ty) {
  const matchValue$$4 = (0, _tast.stripTyparEqns)(ty);

  if (matchValue$$4.tag === 1) {
    const tcref = matchValue$$4.fields[0];
    return tcref;
  } else {
    return null;
  }
}

const ArgumentContainer = (0, _Types.declare)(function ArgumentContainer(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ArgumentContainer = ArgumentContainer;
const Item = (0, _Types.declare)(function Item(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Item = Item;

function Item$$$MakeMethGroup$$18D66E3A(nm, minfos) {
  const minfos$$1 = (0, _List.sortBy)(function projection(minfo) {
    return (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo), {
      GetZero() {
        return 0;
      },

      Add($x$$4, $y$$5) {
        return $x$$4 + $y$$5;
      }

    });
  }, minfos, {
    Compare: _Util.comparePrimitives
  });
  return new Item(10, "MethodGroup", nm, minfos$$1, null);
}

function Item$$$MakeCtorGroup$$18D66E3A(nm$$1, minfos$$2) {
  const minfos$$3 = (0, _List.sortBy)(function projection$$1(minfo$$1) {
    return (0, _List.sum)((0, _infos.MethInfo$$get_NumArgs)(minfo$$1), {
      GetZero() {
        return 0;
      },

      Add($x$$8, $y$$9) {
        return $x$$8 + $y$$9;
      }

    });
  }, minfos$$2, {
    Compare: _Util.comparePrimitives
  });
  return new Item(11, "CtorGroup", nm$$1, minfos$$3);
}

function Item$$get_DisplayName(d) {
  var $target$$91, v$$1, apref$$1, uinfo, tcref$$1, rfinfo, id$$2, finfo, einfo, v$$2, nm$$2, v$$3, nm$$3, nm$$4, tcref$$2;

  if (d.tag === 0) {
    $target$$91 = 0;
    v$$1 = d.fields[0];
  } else if (d.tag === 3) {
    $target$$91 = 1;
    apref$$1 = d.fields[0];
  } else if (d.tag === 1) {
    $target$$91 = 2;
    uinfo = d.fields[0];
  } else if (d.tag === 4) {
    $target$$91 = 3;
    tcref$$1 = d.fields[0];
  } else if (d.tag === 5) {
    $target$$91 = 4;
    rfinfo = d.fields[0];
  } else if (d.tag === 6) {
    $target$$91 = 5;
    id$$2 = d.fields[0];
  } else if (d.tag === 7) {
    $target$$91 = 6;
    finfo = d.fields[0];
  } else if (d.tag === 8) {
    $target$$91 = 7;
    einfo = d.fields[0];
  } else if (d.tag === 9) {
    if (d.fields[1].tail != null) {
      if (d.fields[1].head.tag === 0) {
        if (d.fields[1].head.fields[2] != null) {
          $target$$91 = 8;
          v$$2 = d.fields[1].head.fields[2];
        } else if (d.fields[1].head.fields[3] != null) {
          $target$$91 = 8;
          v$$2 = d.fields[1].head.fields[3];
        } else {
          $target$$91 = 9;
          nm$$2 = d.fields[0];
        }
      } else {
        $target$$91 = 9;
        nm$$2 = d.fields[0];
      }
    } else {
      $target$$91 = 9;
      nm$$2 = d.fields[0];
    }
  } else if (d.tag === 10) {
    if (d.fields[1].tail != null) {
      if (d.fields[1].head.tag === 0) {
        $target$$91 = 10;
        v$$3 = d.fields[1].head.fields[2];
      } else {
        $target$$91 = 11;
        nm$$3 = d.fields[0];
      }
    } else {
      $target$$91 = 11;
      nm$$3 = d.fields[0];
    }
  } else if (d.tag === 11) {
    $target$$91 = 12;
    nm$$4 = d.fields[0];
  } else if (d.tag === 12) {
    const activePatternResult39429 = $007CAbbrevOrAppTy$007C_$007C(d.fields[0]);

    if (activePatternResult39429 != null) {
      $target$$91 = 13;
      tcref$$2 = activePatternResult39429;
    } else {
      $target$$91 = 14;
    }
  } else if (d.tag === 13) {
    const activePatternResult39430 = $007CAbbrevOrAppTy$007C_$007C(d.fields[0]);

    if (activePatternResult39430 != null) {
      $target$$91 = 13;
      tcref$$2 = activePatternResult39430;
    } else {
      $target$$91 = 14;
    }
  } else {
    $target$$91 = 14;
  }

  switch ($target$$91) {
    case 0:
      {
        return (0, _tast.ValRef$$get_DisplayName)(v$$1);
      }

    case 1:
      {
        return (0, _TastOps.ActivePatternElemRef$002Eget_Name)(apref$$1);
      }

    case 2:
      {
        return (0, _PrettyNaming.DecompileOpName)((0, _tast.UnionCase$$get_DisplayName)((0, _infos.UnionCaseInfo$$get_UnionCase)(uinfo)));
      }

    case 3:
      {
        return (0, _tast.EntityRef$$get_LogicalName)(tcref$$1);
      }

    case 4:
      {
        return (0, _PrettyNaming.DecompileOpName)((0, _tast.RecdField$$get_Name)((0, _infos.RecdFieldInfo$$get_RecdField)(rfinfo)));
      }

    case 5:
      {
        return (0, _ast.Ident$$get_idText)(id$$2);
      }

    case 6:
      {
        return (0, _infos.ILFieldInfo$$get_FieldName)(finfo);
      }

    case 7:
      {
        return (0, _infos.EventInfo$$get_EventName)(einfo);
      }

    case 8:
      {
        return (0, _tast.ValRef$$get_DisplayName)(v$$2);
      }

    case 9:
      {
        return (0, _PrettyNaming.DemangleOperatorName)(nm$$2);
      }

    case 10:
      {
        return (0, _tast.ValRef$$get_DisplayName)(v$$3);
      }

    case 11:
      {
        return (0, _PrettyNaming.DemangleOperatorName)(nm$$3);
      }

    case 12:
      {
        return (0, _PrettyNaming.DemangleGenericTypeName)(nm$$4);
      }

    case 13:
      {
        return (0, _PrettyNaming.DemangleGenericTypeName)((0, _tast.EntityRef$$get_DisplayName)(tcref$$2));
      }

    case 14:
      {
        var $target$$92, nm$$5, tcref$$3, nm$$6, modref$$7, id$$3, id$$4, customOpName, nm$$7;

        if (d.tag === 14) {
          $target$$92 = 0;
          nm$$5 = d.fields[0];
        } else if (d.tag === 22) {
          if (d.fields[0].tail != null) {
            $target$$92 = 1;
            tcref$$3 = d.fields[0].head;
          } else {
            $target$$92 = 8;
          }
        } else if (d.tag === 17) {
          $target$$92 = 2;
          nm$$6 = d.fields[0];
        } else if (d.tag === 18) {
          if (d.fields[0].tail != null) {
            $target$$92 = 3;
            modref$$7 = d.fields[0].head;
          } else {
            $target$$92 = 8;
          }
        } else if (d.tag === 20) {
          $target$$92 = 4;
          id$$3 = d.fields[0];
        } else if (d.tag === 21) {
          $target$$92 = 5;
          id$$4 = d.fields[0];
        } else if (d.tag === 15) {
          $target$$92 = 6;
          customOpName = d.fields[0];
        } else if (d.tag === 16) {
          $target$$92 = 7;
          nm$$7 = d.fields[0];
        } else {
          $target$$92 = 8;
        }

        switch ($target$$92) {
          case 0:
            {
              return (0, _PrettyNaming.DemangleGenericTypeName)(nm$$5);
            }

          case 1:
            {
              return (0, _tast.EntityRef$$get_DisplayName)(tcref$$3);
            }

          case 2:
            {
              return nm$$6;
            }

          case 3:
            {
              return (0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(modref$$7);
            }

          case 4:
            {
              return (0, _ast.Ident$$get_idText)(id$$3);
            }

          case 5:
            {
              return (0, _ast.Ident$$get_idText)(id$$4);
            }

          case 6:
            {
              return customOpName;
            }

          case 7:
            {
              return nm$$7;
            }

          case 8:
            {
              return "";
            }
        }
      }
  }
}

function valRefHash(vref$$2) {
  const matchValue$$5 = (0, _tast.ValRef$$get_TryDeref)(vref$$2);

  if (matchValue$$5.tag === 0) {
    const v$$4 = matchValue$$5.fields[0];
    return (0, _Util.identityHash)(v$$4) | 0;
  } else {
    return 0;
  }
}

const ItemWithInst = (0, _Types.declare)(function ItemWithInst(arg1, arg2) {
  this.Item = arg1;
  this.TyparInst = arg2;
}, _Types.Record);
exports.ItemWithInst = ItemWithInst;

function ItemWithNoInst(item) {
  return new ItemWithInst(item, _TastOps.emptyTyparInst);
}

function $007CItemWithInst$007C(x$$3) {
  return [x$$3.Item, x$$3.TyparInst];
}

const FieldResolution = (0, _Types.declare)(function FieldResolution(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FieldResolution = FieldResolution;
const ExtensionMember = (0, _Types.declare)(function ExtensionMember(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ExtensionMember = ExtensionMember;

function ExtensionMember$$$Equality(g$$1, e1, e2) {
  const matchValue$$6 = [e1, e2];
  var $target$$93, vref1, vref2, md1, md2;

  if (matchValue$$6[0].tag === 1) {
    if (matchValue$$6[1].tag === 1) {
      $target$$93 = 1;
      md1 = matchValue$$6[0].fields[1];
      md2 = matchValue$$6[1].fields[1];
    } else {
      $target$$93 = 2;
    }
  } else if (matchValue$$6[1].tag === 0) {
    $target$$93 = 0;
    vref1 = matchValue$$6[0].fields[0];
    vref2 = matchValue$$6[1].fields[0];
  } else {
    $target$$93 = 2;
  }

  switch ($target$$93) {
    case 0:
      {
        return (0, _TastOps.valRefEq)(g$$1, vref1, vref2);
      }

    case 1:
      {
        return (0, _infos.MethInfo$$$MethInfosUseIdenticalDefinitions)(md1, md2);
      }

    case 2:
      {
        return false;
      }
  }
}

function ExtensionMember$$$Hash$$2BEFBA4C(e1$$1) {
  if (e1$$1.tag === 1) {
    const m = e1$$1.fields[1];

    switch (m.tag) {
      case 1:
        {
          const ilmeth = m.fields[1];
          return (0, _Util.identityHash)((0, _infos.ILMethInfo$$get_RawMetadata)(ilmeth)) | 0;
        }

      case 0:
        {
          const vref$$4 = m.fields[2];
          return valRefHash(vref$$4) | 0;
        }

      default:
        {
          return 0;
        }
    }
  } else {
    const vref$$3 = e1$$1.fields[0];
    return valRefHash(vref$$3) | 0;
  }
}

function ExtensionMember$$$Comparer$$2AE8EA0C(g$$2) {
  return (0, _FSharp.HashIdentity$$$FromFunctions)(ExtensionMember$$$Hash$$2BEFBA4C, function (arg10$$1, arg20) {
    return ExtensionMember$$$Equality(g$$2, arg10$$1, arg20);
  });
}

function ExtensionMember$$get_Priority(x$$4) {
  if (x$$4.tag === 1) {
    const pri$$1 = x$$4.fields[2];
    return pri$$1;
  } else {
    const pri = x$$4.fields[1];
    return pri;
  }
}

const FullyQualifiedFlag = (0, _Types.declare)(function FullyQualifiedFlag(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FullyQualifiedFlag = FullyQualifiedFlag;
const NameResolutionEnv = (0, _Types.declare)(function NameResolutionEnv(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13) {
  this.eDisplayEnv = arg1;
  this.eUnqualifiedItems = arg2;
  this.ePatItems = arg3;
  this.eModulesAndNamespaces = arg4;
  this.eFullyQualifiedModulesAndNamespaces = arg5;
  this.eFieldLabels = arg6;
  this.eTyconsByAccessNames = arg7;
  this.eFullyQualifiedTyconsByAccessNames = arg8;
  this.eTyconsByDemangledNameAndArity = arg9;
  this.eFullyQualifiedTyconsByDemangledNameAndArity = arg10;
  this.eIndexedExtensionMembers = arg11;
  this.eUnindexedExtensionMembers = arg12;
  this.eTypars = arg13;
}, _Types.Record);
exports.NameResolutionEnv = NameResolutionEnv;

function NameResolutionEnv$$$Empty$$2AE8EA0C(g$$3) {
  return new NameResolutionEnv((0, _TastOps.DisplayEnv$$$Empty$$2AE8EA0C)(g$$3), (0, _illib.Map$00602$002Eget_Empty$002EStatic)(), (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }), (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }), (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }), (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }), (0, _illib.LayeredMultiMap$00602$$$get_Empty)(), (0, _illib.LayeredMultiMap$00602$$$get_Empty)(), (0, _illib.Map$00602$002Eget_Empty$002EStatic)(), (0, _illib.Map$00602$002Eget_Empty$002EStatic)(), (0, _TastOps.TyconRefMultiMap$00601$$$get_Empty)(), (0, _Types.L)(), (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }));
}

function NameResolutionEnv$$get_DisplayEnv(nenv) {
  return nenv.eDisplayEnv;
}

function NameResolutionEnv$$FindUnqualifiedItem$$Z721C83C5(nenv$$1, nm$$8) {
  return (0, _Map.FSharpMap$$get_Item$$2B595)(nenv$$1.eUnqualifiedItems, nm$$8);
}

function NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D(nenv$$2, fq) {
  if (fq.tag === 1) {
    return nenv$$2.eTyconsByDemangledNameAndArity;
  } else {
    return nenv$$2.eFullyQualifiedTyconsByDemangledNameAndArity;
  }
}

function NameResolutionEnv$$TyconsByAccessNames$$5B75656D(nenv$$3, fq$$1) {
  if (fq$$1.tag === 1) {
    return nenv$$3.eTyconsByAccessNames;
  } else {
    return nenv$$3.eFullyQualifiedTyconsByAccessNames;
  }
}

function NameResolutionEnv$$ModulesAndNamespaces$$5B75656D(nenv$$4, fq$$2) {
  if (fq$$2.tag === 1) {
    return nenv$$4.eModulesAndNamespaces;
  } else {
    return nenv$$4.eFullyQualifiedModulesAndNamespaces;
  }
}

function NextExtensionMethodPriority() {
  return (0, _Long.fromValue)((0, _tast.newStamp)(), true);
}

function GetCSharpStyleIndexedExtensionMembersForTyconRef(amap$$1, m$$1, tcrefOfStaticClass) {
  const g$$4 = (0, _import.ImportMap$$get_g)(amap$$1);

  if ((0, _tast.EntityRef$$Typars$$4DB9192C)(tcrefOfStaticClass, m$$1).tail == null ? (0, _TastOps.TyconRefHasAttribute)(g$$4, m$$1, (0, _TcGlobals.TcGlobals$$get_attrib_ExtensionAttribute)(g$$4), tcrefOfStaticClass) : false) {
    const pri$$2 = NextExtensionMethodPriority();
    const ty$$1 = (0, _TastOps.generalizedTyconRef)(tcrefOfStaticClass);
    const minfos$$4 = (0, _InfoReader.GetImmediateIntrinsicMethInfosOfType)(null, new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode"), g$$4, amap$$1, m$$1, ty$$1);
    return (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (minfo$$2) {
        var tcrefOfTypeExtended, tcref$$5;

        if ((((!(0, _infos.MethInfo$$get_IsInstance)(minfo$$2) ? !(0, _infos.MethInfo$$get_IsExtensionMember)(minfo$$2) : false) ? (0, _List.length)((0, _infos.MethInfo$$get_NumArgs)(minfo$$2)) === 1 : false) ? (0, _List.head)((0, _infos.MethInfo$$get_NumArgs)(minfo$$2)) >= 1 : false) ? (0, _AttributeChecking.MethInfoHasAttribute)(g$$4, m$$1, (0, _TcGlobals.TcGlobals$$get_attrib_ExtensionAttribute)(g$$4), minfo$$2) : false) {
          const ilExtMem = new ExtensionMember(1, "ILExtMem", tcrefOfStaticClass, minfo$$2, pri$$2);
          let thisTyconRef;

          try {
            let rs;
            const matchValue$$7 = [(0, _TastOps.metadataOfTycon)((0, _tast.EntityRef$$get_Deref)(tcrefOfStaticClass)), minfo$$2];
            var $target$$94, ilMethod, scoref;

            if (matchValue$$7[0].tag === 0) {
              if (matchValue$$7[1].tag === 1) {
                $target$$94 = 0;
                ilMethod = matchValue$$7[1].fields[1].fields[3];
                scoref = matchValue$$7[0].fields[0].fields[0];
              } else {
                $target$$94 = 1;
              }
            } else {
              $target$$94 = 1;
            }

            switch ($target$$94) {
              case 0:
                {
                  const matchValue$$8 = (0, _il.ILMethodDef$$get_ParameterTypes)(ilMethod);

                  if (matchValue$$8.tail != null) {
                    const firstTy = matchValue$$8.head;
                    var $target$$95, tspec;

                    switch (firstTy.tag) {
                      case 3:
                        $target$$95 = 0;
                        tspec = firstTy.fields[0];
                        break;

                      case 2:
                        $target$$95 = 0;
                        tspec = firstTy.fields[0];
                        break;

                      default:
                        $target$$95 = 1;
                    }

                    switch ($target$$95) {
                      case 0:
                        {
                          const tref = (0, _il.ILTypeSpec$$get_TypeRef)((0, _il.rescopeILTypeSpec)(scoref, tspec));

                          if ((0, _import.CanImportILTypeRef)(amap$$1, m$$1, tref)) {
                            const tcref$$4 = (0, _import.ImportILTypeRef)(amap$$1, m$$1, tref);
                            rs = ((0, _TastOps.isCompiledTupleTyconRef)(g$$4, tcref$$4) ? true : (0, _TastOps.tyconRefEq)(g$$4, tcref$$4, (0, _TcGlobals.TcGlobals$$get_fastFunc_tcr)(g$$4))) ? null : tcref$$4;
                          } else {
                            rs = null;
                          }

                          break;
                        }

                      case 1:
                        {
                          rs = null;
                          break;
                        }
                    }
                  } else {
                    rs = null;
                  }

                  break;
                }

              case 1:
                {
                  const thisTy = (0, _List.head)((0, _List.head)((0, _infos.MethInfo$$GetParamTypes$$Z5D984B3C)(minfo$$2, amap$$1, m$$1, (0, _TastOps.generalizeTypars)((0, _infos.MethInfo$$get_FormalMethodTypars)(minfo$$2)))));
                  var $target$$96, tcrefOfTypeExtended$$1;
                  const activePatternResult39478 = (0, _TastOps.$007CAppTy$007C_$007C)(g$$4, thisTy);

                  if (activePatternResult39478 != null) {
                    if (tcrefOfTypeExtended = activePatternResult39478[0], !(0, _TastOps.isByrefTy)(g$$4, thisTy)) {
                      $target$$96 = 0;
                      tcrefOfTypeExtended$$1 = activePatternResult39478[0];
                    } else {
                      $target$$96 = 1;
                    }
                  } else {
                    $target$$96 = 1;
                  }

                  switch ($target$$96) {
                    case 0:
                      {
                        rs = tcrefOfTypeExtended$$1;
                        break;
                      }

                    case 1:
                      {
                        rs = null;
                        break;
                      }
                  }

                  break;
                }
            }

            thisTyconRef = (0, _Option.some)(rs);
          } catch (e) {
            (0, _ErrorLogger.errorRecovery)(e, m$$1);
            thisTyconRef = null;
          }

          if (thisTyconRef != null) {
            return (0, _Option.value)(thisTyconRef) == null ? (0, _Seq.singleton)(new _Option.Choice(1, "Choice2Of2", ilExtMem)) : (tcref$$5 = (0, _Option.value)(thisTyconRef), (0, _Seq.singleton)(new _Option.Choice(0, "Choice1Of2", [tcref$$5, ilExtMem])));
          } else {
            return (0, _Seq.empty)();
          }
        } else {
          return (0, _Seq.empty)();
        }
      }, minfos$$4);
    }));
  } else {
    return (0, _Types.L)();
  }
}

const BulkAdd = (0, _Types.declare)(function BulkAdd(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.BulkAdd = BulkAdd;

function AddValRefsToItems(bulkAddMode, eUnqualifiedItems$$1, vrefs) {
  const vrefs$$1 = vrefs.filter(function predicate(vref$$5) {
    return !(0, _tast.ValRef$$get_IsMember)(vref$$5);
  });

  if (vrefs$$1.length === 0) {
    return eUnqualifiedItems$$1;
  } else {
    if (bulkAddMode.tag === 1) {
      const vref$$7 = vrefs$$1[0];
      return (0, _Map.FSharpMap$$Add$$5BDDA1)(eUnqualifiedItems$$1, (0, _tast.ValRef$$get_LogicalName)(vref$$7), new Item(0, "Value", vref$$7));
    } else {
      return (0, _illib.Map$00602$002EAddAndMarkAsCollapsible$$3209D872)(eUnqualifiedItems$$1, (0, _Array.map)(function mapping$$3(vref$$6) {
        return [(0, _tast.ValRef$$get_LogicalName)(vref$$6), new Item(0, "Value", vref$$6)];
      }, vrefs$$1, Array));
    }
  }
}

function AddValRefToExtensionMembers(pri$$3, eIndexedExtensionMembers, vref$$8) {
  if ((0, _tast.ValRef$$get_IsMember)(vref$$8) ? (0, _tast.ValRef$$get_IsExtensionMember)(vref$$8) : false) {
    return (0, _TastOps.TyconRefMultiMap$00601$$Add$$75CBEA41)(eIndexedExtensionMembers, (0, _tast.ValRef$$get_MemberApparentEntity)(vref$$8), new ExtensionMember(0, "FSExtMem", vref$$8, pri$$3));
  } else {
    return eIndexedExtensionMembers;
  }
}

function AddFakeNamedValRefToNameEnv(nm$$9, nenv$$5, vref$$9) {
  return new NameResolutionEnv(nenv$$5.eDisplayEnv, (0, _Map.FSharpMap$$Add$$5BDDA1)(nenv$$5.eUnqualifiedItems, nm$$9, new Item(0, "Value", vref$$9)), nenv$$5.ePatItems, nenv$$5.eModulesAndNamespaces, nenv$$5.eFullyQualifiedModulesAndNamespaces, nenv$$5.eFieldLabels, nenv$$5.eTyconsByAccessNames, nenv$$5.eFullyQualifiedTyconsByAccessNames, nenv$$5.eTyconsByDemangledNameAndArity, nenv$$5.eFullyQualifiedTyconsByDemangledNameAndArity, nenv$$5.eIndexedExtensionMembers, nenv$$5.eUnindexedExtensionMembers, nenv$$5.eTypars);
}

function AddFakeNameToNameEnv(nm$$10, nenv$$6, item$$1) {
  return new NameResolutionEnv(nenv$$6.eDisplayEnv, (0, _Map.FSharpMap$$Add$$5BDDA1)(nenv$$6.eUnqualifiedItems, nm$$10, item$$1), nenv$$6.ePatItems, nenv$$6.eModulesAndNamespaces, nenv$$6.eFullyQualifiedModulesAndNamespaces, nenv$$6.eFieldLabels, nenv$$6.eTyconsByAccessNames, nenv$$6.eFullyQualifiedTyconsByAccessNames, nenv$$6.eTyconsByDemangledNameAndArity, nenv$$6.eFullyQualifiedTyconsByDemangledNameAndArity, nenv$$6.eIndexedExtensionMembers, nenv$$6.eUnindexedExtensionMembers, nenv$$6.eTypars);
}

function AddValRefsToActivePatternsNameEnv(ePatItems$$1, vref$$10) {
  const ePatItems$$2 = (0, _List.foldBack)(function folder$$1(apref$$2, tab) {
    return (0, _illib.NameMapModule$$$add)((0, _TastOps.ActivePatternElemRef$002Eget_Name)(apref$$2), new Item(3, "ActivePatternCase", apref$$2), tab);
  }, ActivePatternElemsOfValRef(vref$$10), ePatItems$$1);
  const ePatItems$$3 = (0, _tast.ValRef$$get_LiteralValue)(vref$$10) != null ? (0, _illib.NameMapModule$$$add)((0, _tast.ValRef$$get_LogicalName)(vref$$10), new Item(0, "Value", vref$$10), ePatItems$$2) : ePatItems$$2;
  return ePatItems$$3;
}

function AddValRefsToNameEnvWithPriority(bulkAddMode$$1, pri$$4, nenv$$7, vrefs$$2) {
  if (vrefs$$2.length === 0) {
    return nenv$$7;
  } else {
    return new NameResolutionEnv(nenv$$7.eDisplayEnv, AddValRefsToItems(bulkAddMode$$1, nenv$$7.eUnqualifiedItems, vrefs$$2), (0, _Array.fold)(AddValRefsToActivePatternsNameEnv, nenv$$7.ePatItems, vrefs$$2), nenv$$7.eModulesAndNamespaces, nenv$$7.eFullyQualifiedModulesAndNamespaces, nenv$$7.eFieldLabels, nenv$$7.eTyconsByAccessNames, nenv$$7.eFullyQualifiedTyconsByAccessNames, nenv$$7.eTyconsByDemangledNameAndArity, nenv$$7.eFullyQualifiedTyconsByDemangledNameAndArity, (0, _Array.fold)(function folder$$2(eIndexedExtensionMembers$$1, vref$$11) {
      return AddValRefToExtensionMembers(pri$$4, eIndexedExtensionMembers$$1, vref$$11);
    }, nenv$$7.eIndexedExtensionMembers, vrefs$$2), nenv$$7.eUnindexedExtensionMembers, nenv$$7.eTypars);
  }
}

function AddValRefToNameEnv(nenv$$8, vref$$13) {
  const pri$$5 = NextExtensionMethodPriority();
  return new NameResolutionEnv(nenv$$8.eDisplayEnv, !(0, _tast.ValRef$$get_IsMember)(vref$$13) ? (0, _Map.FSharpMap$$Add$$5BDDA1)(nenv$$8.eUnqualifiedItems, (0, _tast.ValRef$$get_LogicalName)(vref$$13), new Item(0, "Value", vref$$13)) : nenv$$8.eUnqualifiedItems, AddValRefsToActivePatternsNameEnv(nenv$$8.ePatItems, vref$$13), nenv$$8.eModulesAndNamespaces, nenv$$8.eFullyQualifiedModulesAndNamespaces, nenv$$8.eFieldLabels, nenv$$8.eTyconsByAccessNames, nenv$$8.eFullyQualifiedTyconsByAccessNames, nenv$$8.eTyconsByDemangledNameAndArity, nenv$$8.eFullyQualifiedTyconsByDemangledNameAndArity, AddValRefToExtensionMembers(pri$$5, nenv$$8.eIndexedExtensionMembers, vref$$13), nenv$$8.eUnindexedExtensionMembers, nenv$$8.eTypars);
}

function AddActivePatternResultTagsToNameEnv(apinfo$$1, nenv$$9, ty$$2, m$$2) {
  if ((0, _TastOps.ActivePatternInfo$002Eget_Names)(apinfo$$1).tail == null) {
    return nenv$$9;
  } else {
    const apresl = (0, _List.indexed)((0, _TastOps.ActivePatternInfo$002Eget_Names)(apinfo$$1));
    return new NameResolutionEnv(nenv$$9.eDisplayEnv, (0, _List.foldBack)(function folder$$3(tupledArg, acc$$1) {
      return (0, _Map.FSharpMap$$Add$$5BDDA1)(acc$$1, tupledArg[1], new Item(2, "ActivePatternResult", apinfo$$1, ty$$2, tupledArg[0], m$$2));
    }, apresl, nenv$$9.eUnqualifiedItems), nenv$$9.ePatItems, nenv$$9.eModulesAndNamespaces, nenv$$9.eFullyQualifiedModulesAndNamespaces, nenv$$9.eFieldLabels, nenv$$9.eTyconsByAccessNames, nenv$$9.eFullyQualifiedTyconsByAccessNames, nenv$$9.eTyconsByDemangledNameAndArity, nenv$$9.eFullyQualifiedTyconsByDemangledNameAndArity, nenv$$9.eIndexedExtensionMembers, nenv$$9.eUnindexedExtensionMembers, nenv$$9.eTypars);
  }
}

function GeneralizeUnionCaseRef(ucref) {
  return new _infos.UnionCaseInfo(0, "UnionCaseInfo", (0, _TastOps.generalizeTyconRef)((0, _tast.UnionCaseRef$$get_TyconRef)(ucref))[0], ucref);
}

function AddTyconsByDemangledNameAndArity(bulkAddMode$$2, tcrefs, tab$$1) {
  if (tcrefs.length === 0) {
    return tab$$1;
  } else {
    const entries = (0, _Array.map)(function mapping$$4(tcref$$6) {
      return (0, _tast.KeyTyconByDemangledNameAndArity)((0, _tast.EntityRef$$get_LogicalName)(tcref$$6), (0, _tast.EntityRef$$get_TyparsNoRange)(tcref$$6), tcref$$6);
    }, tcrefs, Array);

    if (bulkAddMode$$2.tag === 1) {
      return (0, _Array.fold)(function folder$$4(tab$$2, _arg1$$1) {
        const activePatternResult39535 = _arg1$$1;
        return (0, _Map.FSharpMap$$Add$$5BDDA1)(tab$$2, activePatternResult39535[0], activePatternResult39535[1]);
      }, tab$$1, entries);
    } else {
      return (0, _illib.Map$00602$002EAddAndMarkAsCollapsible$$3209D872)(tab$$1, entries);
    }
  }
}

function AddTyconByAccessNames(bulkAddMode$$3, tcrefs$$1, tab$$3) {
  if (tcrefs$$1.length === 0) {
    return tab$$3;
  } else {
    const entries$$1 = (0, _Array.collect)(function mapping$$5(tcref$$7) {
      return (0, _tast.KeyTyconByAccessNames)((0, _tast.EntityRef$$get_LogicalName)(tcref$$7), tcref$$7);
    }, tcrefs$$1, Array);

    if (bulkAddMode$$3.tag === 1) {
      return (0, _Array.fold)(function folder$$5(tab$$4, _arg1$$2) {
        const activePatternResult39542 = _arg1$$2;
        return (0, _illib.LayeredMultiMap$00602$$Add$$5BDDA1)(tab$$4, activePatternResult39542[0], activePatternResult39542[1]);
      }, tab$$3, entries$$1);
    } else {
      return (0, _illib.LayeredMultiMap$00602$$AddAndMarkAsCollapsible$$Z1EDC52D)(tab$$3, entries$$1);
    }
  }
}

function AddRecdField(rfref, tab$$5) {
  return (0, _illib.NameMultiMapModule$$$add)((0, _tast.RecdFieldRef$$get_FieldName)(rfref), rfref, tab$$5);
}

function AddUnionCases1(tab$$6, ucrefs) {
  return (0, _List.fold)(function folder$$6(acc$$2, ucref$$1) {
    const item$$2 = new Item(1, "UnionCase", GeneralizeUnionCaseRef(ucref$$1), false);
    return (0, _Map.FSharpMap$$Add$$5BDDA1)(acc$$2, (0, _tast.UnionCaseRef$$get_CaseName)(ucref$$1), item$$2);
  }, tab$$6, ucrefs);
}

function AddUnionCases2(bulkAddMode$$4, eUnqualifiedItems$$7, ucrefs$$1) {
  if (bulkAddMode$$4.tag === 1) {
    return (0, _List.fold)(function folder$$7(acc$$3, ucref$$3) {
      const item$$4 = new Item(1, "UnionCase", GeneralizeUnionCaseRef(ucref$$3), false);
      return (0, _Map.FSharpMap$$Add$$5BDDA1)(acc$$3, (0, _tast.UnionCaseRef$$get_CaseName)(ucref$$3), item$$4);
    }, eUnqualifiedItems$$7, ucrefs$$1);
  } else {
    const items = (0, _Array.map)(function mapping$$6(ucref$$2) {
      const item$$3 = new Item(1, "UnionCase", GeneralizeUnionCaseRef(ucref$$2), false);
      return [(0, _tast.UnionCaseRef$$get_CaseName)(ucref$$2), item$$3];
    }, (0, _Array.ofList)(ucrefs$$1, Array), Array);
    return (0, _illib.Map$00602$002EAddAndMarkAsCollapsible$$3209D872)(eUnqualifiedItems$$7, items);
  }
}

function AddPartsOfTyconRefToNameEnv(bulkAddMode$$5, ownDefinition, g$$5, amap$$2, m$$3, nenv$$10, tcref$$8) {
  const isIL = (0, _tast.EntityRef$$get_IsILTycon)(tcref$$8);
  const ucrefs$$2 = isIL ? (0, _Types.L)() : (0, _List.map)(function mapping$$7(arg00$$3) {
    return (0, _tast.EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7)(tcref$$8, arg00$$3);
  }, (0, _tast.EntityRef$$get_UnionCasesAsList)(tcref$$8));
  const flds = isIL ? [] : (0, _tast.EntityRef$$get_AllFieldsArray)(tcref$$8);
  let patternInput;
  const ilStyleExtensionMeths = GetCSharpStyleIndexedExtensionMembersForTyconRef(amap$$2, m$$3, tcref$$8);
  patternInput = (0, _List.fold)(function folder$$8(tupledArg$$1, extMemInfo) {
    if (extMemInfo.tag === 1) {
      const extMemInfo$$2 = extMemInfo.fields[0];
      return [tupledArg$$1[0], (0, _Types.L)(extMemInfo$$2, tupledArg$$1[1])];
    } else {
      const tcref$$9 = extMemInfo.fields[0][0];
      const extMemInfo$$1 = extMemInfo.fields[0][1];
      return [(0, _TastOps.TyconRefMultiMap$00601$$Add$$75CBEA41)(tupledArg$$1[0], tcref$$9, extMemInfo$$1), tupledArg$$1[1]];
    }
  }, [nenv$$10.eIndexedExtensionMembers, nenv$$10.eUnindexedExtensionMembers], ilStyleExtensionMeths);
  const isILOrRequiredQualifiedAccess = isIL ? true : !ownDefinition ? (0, _TastOps.HasFSharpAttribute)(g$$5, (0, _TcGlobals.TcGlobals$$get_attrib_RequireQualifiedAccessAttribute)(g$$5), (0, _tast.EntityRef$$get_Attribs)(tcref$$8)) : false;
  const eFieldLabels$$1 = ((isILOrRequiredQualifiedAccess ? true : !(0, _tast.EntityRef$$get_IsRecordTycon)(tcref$$8)) ? true : flds.length === 0) ? nenv$$10.eFieldLabels : (0, _Array.fold)(function folder$$9(acc$$4, f$$4) {
    if ((0, _tast.RecdField$$get_IsStatic)(f$$4) ? true : (0, _tast.RecdField$$get_IsCompilerGenerated)(f$$4)) {
      return acc$$4;
    } else {
      return AddRecdField((0, _tast.EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14)(tcref$$8, f$$4), acc$$4);
    }
  }, nenv$$10.eFieldLabels, flds);
  let eUnqualifiedItems$$8;
  const tab$$7 = nenv$$10.eUnqualifiedItems;
  let tab$$8;
  let mayHaveConstruction;

  try {
    mayHaveConstruction = function f$$5() {
      const ty$$3 = (0, _TastOps.generalizedTyconRef)(tcref$$8);

      if ((0, _TastOps.isClassTy)(g$$5, ty$$3)) {
        return true;
      } else {
        return (0, _TastOps.isStructTy)(g$$5, ty$$3);
      }
    }();
  } catch (matchValue$$10) {
    if (matchValue$$10 instanceof _ErrorLogger.UnresolvedPathReferenceNoRange) {
      mayHaveConstruction = false;
    } else {
      throw matchValue$$10;
    }
  }

  tab$$8 = mayHaveConstruction ? (0, _illib.Map$00602$002ELinearTryModifyThenLaterFlatten$$Z723919C0)(tab$$7, (0, _tast.EntityRef$$get_DisplayName)(tcref$$8), function (prev) {
    return prev != null ? prev.tag === 22 ? new Item(22, "UnqualifiedType", (0, _Types.L)(tcref$$8, prev.fields[0])) : new Item(22, "UnqualifiedType", (0, _Types.L)(tcref$$8, (0, _Types.L)())) : new Item(22, "UnqualifiedType", (0, _Types.L)(tcref$$8, (0, _Types.L)()));
  }) : tab$$7;
  eUnqualifiedItems$$8 = (isILOrRequiredQualifiedAccess ? true : ucrefs$$2.tail == null) ? tab$$8 : AddUnionCases2(bulkAddMode$$5, tab$$8, ucrefs$$2);
  const ePatItems$$7 = (isILOrRequiredQualifiedAccess ? true : ucrefs$$2.tail == null) ? nenv$$10.ePatItems : AddUnionCases1(nenv$$10.ePatItems, ucrefs$$2);
  return new NameResolutionEnv(nenv$$10.eDisplayEnv, eUnqualifiedItems$$8, ePatItems$$7, nenv$$10.eModulesAndNamespaces, nenv$$10.eFullyQualifiedModulesAndNamespaces, eFieldLabels$$1, nenv$$10.eTyconsByAccessNames, nenv$$10.eFullyQualifiedTyconsByAccessNames, nenv$$10.eTyconsByDemangledNameAndArity, nenv$$10.eFullyQualifiedTyconsByDemangledNameAndArity, patternInput[0], patternInput[1], nenv$$10.eTypars);
}

function TryFindPatternByName(name, _arg1$$3) {
  const patternMap = _arg1$$3.ePatItems;
  return (0, _illib.NameMapModule$$$tryFind)(name, patternMap);
}

function AddTyconRefsToNameEnv(bulkAddMode$$6, ownDefinition$$1, g$$6, amap$$3, m$$4, root, nenv$$11, tcrefs$$3) {
  if (tcrefs$$3.tail == null) {
    return nenv$$11;
  } else {
    const env = (0, _List.fold)(function (nenv$$12, tcref$$10) {
      return AddPartsOfTyconRefToNameEnv(bulkAddMode$$6, ownDefinition$$1, g$$6, amap$$3, m$$4, nenv$$12, tcref$$10);
    }, nenv$$11, tcrefs$$3);
    const tcrefs$$4 = (0, _Array.ofList)(tcrefs$$3, Array);
    return new NameResolutionEnv(env.eDisplayEnv, env.eUnqualifiedItems, env.ePatItems, env.eModulesAndNamespaces, env.eFullyQualifiedModulesAndNamespaces, env.eFieldLabels, AddTyconByAccessNames(bulkAddMode$$6, tcrefs$$4, nenv$$11.eTyconsByAccessNames), root ? AddTyconByAccessNames(bulkAddMode$$6, tcrefs$$4, nenv$$11.eFullyQualifiedTyconsByAccessNames) : nenv$$11.eFullyQualifiedTyconsByAccessNames, AddTyconsByDemangledNameAndArity(bulkAddMode$$6, tcrefs$$4, nenv$$11.eTyconsByDemangledNameAndArity), root ? AddTyconsByDemangledNameAndArity(bulkAddMode$$6, tcrefs$$4, nenv$$11.eFullyQualifiedTyconsByDemangledNameAndArity) : nenv$$11.eFullyQualifiedTyconsByDemangledNameAndArity, env.eIndexedExtensionMembers, env.eUnindexedExtensionMembers, env.eTypars);
  }
}

function AddExceptionDeclsToNameEnv(bulkAddMode$$7, nenv$$13, ecref) {
  const item$$5 = new Item(4, "ExnCase", ecref);
  return new NameResolutionEnv(nenv$$13.eDisplayEnv, bulkAddMode$$7.tag === 1 ? (0, _Map.FSharpMap$$Add$$5BDDA1)(nenv$$13.eUnqualifiedItems, (0, _tast.EntityRef$$get_LogicalName)(ecref), item$$5) : (0, _illib.Map$00602$002EAddAndMarkAsCollapsible$$3209D872)(nenv$$13.eUnqualifiedItems, [[(0, _tast.EntityRef$$get_LogicalName)(ecref), item$$5]]), (0, _Map.FSharpMap$$Add$$5BDDA1)(nenv$$13.ePatItems, (0, _tast.EntityRef$$get_LogicalName)(ecref), item$$5), nenv$$13.eModulesAndNamespaces, nenv$$13.eFullyQualifiedModulesAndNamespaces, nenv$$13.eFieldLabels, nenv$$13.eTyconsByAccessNames, nenv$$13.eFullyQualifiedTyconsByAccessNames, nenv$$13.eTyconsByDemangledNameAndArity, nenv$$13.eFullyQualifiedTyconsByDemangledNameAndArity, nenv$$13.eIndexedExtensionMembers, nenv$$13.eUnindexedExtensionMembers, nenv$$13.eTypars);
}

function AddModuleAbbrevToNameEnv(id$$5, nenv$$14, modrefs) {
  var add;
  return new NameResolutionEnv(nenv$$14.eDisplayEnv, nenv$$14.eUnqualifiedItems, nenv$$14.ePatItems, (add = function add(old, nw) {
    return (0, _List.append)(nw, old);
  }, (0, _illib.NameMapModule$$$layerAdditive)(add, (0, _Map.add)((0, _ast.Ident$$get_idText)(id$$5), modrefs, (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  })), nenv$$14.eModulesAndNamespaces)), nenv$$14.eFullyQualifiedModulesAndNamespaces, nenv$$14.eFieldLabels, nenv$$14.eTyconsByAccessNames, nenv$$14.eFullyQualifiedTyconsByAccessNames, nenv$$14.eTyconsByDemangledNameAndArity, nenv$$14.eFullyQualifiedTyconsByDemangledNameAndArity, nenv$$14.eIndexedExtensionMembers, nenv$$14.eUnindexedExtensionMembers, nenv$$14.eTypars);
}

function MakeNestedModuleRefs(modref$$8) {
  return (0, _List.map)(function mapping$$8(arg00$$4) {
    return (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$8, arg00$$4);
  }, (0, _tast.ModuleOrNamespaceType$$get_ModuleAndNamespaceDefinitions)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$8)));
}

function AddModuleOrNamespaceRefsToNameEnv(g$$7, amap$$4, m$$5, root$$1, ad, nenv$$15, modrefs$$1) {
  if (modrefs$$1.tail == null) {
    return nenv$$15;
  } else {
    const modrefsMap = (0, _illib.NameMapModule$$$ofKeyedList)(function f$$6(modref$$9) {
      return (0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(modref$$9);
    }, modrefs$$1);

    const addModrefs = function addModrefs(tab$$9) {
      const add$$1 = function add$$1(old$$1, nw$$1) {
        if ((0, _AccessibilityLogic.IsEntityAccessible)(amap$$4, m$$5, ad, nw$$1)) {
          return (0, _Types.L)(nw$$1, old$$1);
        } else {
          return old$$1;
        }
      };

      return (0, _illib.NameMapModule$$$layerAdditive)(add$$1, modrefsMap, tab$$9);
    };

    const nenv$$16 = new NameResolutionEnv(nenv$$15.eDisplayEnv, nenv$$15.eUnqualifiedItems, nenv$$15.ePatItems, addModrefs(nenv$$15.eModulesAndNamespaces), root$$1 ? addModrefs(nenv$$15.eFullyQualifiedModulesAndNamespaces) : nenv$$15.eFullyQualifiedModulesAndNamespaces, nenv$$15.eFieldLabels, nenv$$15.eTyconsByAccessNames, nenv$$15.eFullyQualifiedTyconsByAccessNames, nenv$$15.eTyconsByDemangledNameAndArity, nenv$$15.eFullyQualifiedTyconsByDemangledNameAndArity, nenv$$15.eIndexedExtensionMembers, nenv$$15.eUnindexedExtensionMembers, nenv$$15.eTypars);
    const nenv$$18 = (0, _List.fold)(function folder$$10(nenv$$17, modref$$10) {
      if ((0, _tast.EntityRef$$get_IsModule)(modref$$10) ? (0, _Util.equals)((0, _TastOps.TryFindFSharpBoolAttribute)(g$$7, (0, _TcGlobals.TcGlobals$$get_attrib_AutoOpenAttribute)(g$$7), (0, _tast.EntityRef$$get_Attribs)(modref$$10)), true) : false) {
        return AddModuleOrNamespaceContentsToNameEnv(g$$7, amap$$4, ad, m$$5, false, nenv$$17, modref$$10);
      } else {
        return nenv$$17;
      }
    }, nenv$$16, modrefs$$1);
    return nenv$$18;
  }
}

function AddModuleOrNamespaceContentsToNameEnv(g$$8, amap$$5, ad$$1, m$$6, root$$2, nenv$$19, modref$$11) {
  const pri$$6 = NextExtensionMethodPriority();
  const mty = (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$11);
  let nenv$$20;
  let state$$12 = new NameResolutionEnv((0, _TastOps.DisplayEnv$$AddOpenModuleOrNamespace$$Z788D4AAC)(nenv$$19.eDisplayEnv, modref$$11), nenv$$19.eUnqualifiedItems, nenv$$19.ePatItems, nenv$$19.eModulesAndNamespaces, nenv$$19.eFullyQualifiedModulesAndNamespaces, nenv$$19.eFieldLabels, nenv$$19.eTyconsByAccessNames, nenv$$19.eFullyQualifiedTyconsByAccessNames, nenv$$19.eTyconsByDemangledNameAndArity, nenv$$19.eFullyQualifiedTyconsByDemangledNameAndArity, nenv$$19.eIndexedExtensionMembers, nenv$$19.eUnindexedExtensionMembers, nenv$$19.eTypars);
  (0, _Seq.iterate)(function (exnc) {
    const tcref$$11 = (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$11, exnc);

    if ((0, _AccessibilityLogic.IsEntityAccessible)(amap$$5, m$$6, ad$$1, tcref$$11)) {
      state$$12 = AddExceptionDeclsToNameEnv(new BulkAdd(0, "Yes"), state$$12, tcref$$11);
    }
  }, (0, _tast.ModuleOrNamespaceType$$get_ExceptionDefinitions)(mty));
  nenv$$20 = state$$12;
  const tcrefs$$5 = (0, _List.choose)(function chooser(tycon$$3) {
    const tcref$$12 = (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$11, tycon$$3);

    if ((0, _AccessibilityLogic.IsEntityAccessible)(amap$$5, m$$6, ad$$1, tcref$$12)) {
      return tcref$$12;
    } else {
      return null;
    }
  }, (0, _tast.ModuleOrNamespaceType$$get_TypeAndExceptionDefinitions)(mty));
  const nenv$$21 = AddTyconRefsToNameEnv(new BulkAdd(0, "Yes"), false, g$$8, amap$$5, m$$6, false, nenv$$20, tcrefs$$5);
  const vrefs$$3 = (0, _Array.ofList)((0, _List.choose)(function chooser$$1(x$$5) {
    if ((0, _AccessibilityLogic.IsAccessible)(ad$$1, (0, _tast.Val$$get_Accessibility)(x$$5))) {
      return TryMkValRefInModRef(modref$$11, x$$5);
    } else {
      return null;
    }
  }, (0, _QueueList.QueueList$00601$$ToList)((0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)(mty))), Array);
  const nenv$$22 = AddValRefsToNameEnvWithPriority(new BulkAdd(0, "Yes"), pri$$6, nenv$$21, vrefs$$3);
  const nestedModules = MakeNestedModuleRefs(modref$$11);
  const nenv$$23 = AddModuleOrNamespaceRefsToNameEnv(g$$8, amap$$5, m$$6, root$$2, ad$$1, nenv$$22, nestedModules);
  return nenv$$23;
}

function AddModulesAndNamespacesContentsToNameEnv(g$$9, amap$$6, ad$$2, m$$7, root$$3, nenv$$24, modrefs$$2) {
  return (0, _List.foldBack)(function folder$$11(modref$$12, acc$$5) {
    return AddModuleOrNamespaceContentsToNameEnv(g$$9, amap$$6, ad$$2, m$$7, root$$3, acc$$5, modref$$12);
  }, modrefs$$2, nenv$$24);
}

function AddModuleOrNamespaceRefToNameEnv(g$$10, amap$$7, m$$8, root$$4, ad$$3, nenv$$25, modref$$13) {
  return AddModuleOrNamespaceRefsToNameEnv(g$$10, amap$$7, m$$8, root$$4, ad$$3, nenv$$25, (0, _Types.L)(modref$$13, (0, _Types.L)()));
}

const CheckForDuplicateTyparFlag = (0, _Types.declare)(function CheckForDuplicateTyparFlag(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CheckForDuplicateTyparFlag = CheckForDuplicateTyparFlag;

function AddDeclaredTyparsToNameEnv(check, nenv$$26, typars) {
  const typarmap = (0, _List.foldBack)(function (tp, sofar) {
    if (check.tag === 1) {} else {
      if ((0, _Map.containsKey)((0, _tast.Typar$$get_Name)(tp), sofar)) {
        (0, _ErrorLogger.errorR)(new _tast.Duplicate("type parameter", (0, _tast.Typar$$get_DisplayName)(tp), (0, _tast.Typar$$get_Range)(tp)));
      }
    }

    return (0, _Map.add)((0, _tast.Typar$$get_Name)(tp), tp, sofar);
  }, typars, (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }));
  return new NameResolutionEnv(nenv$$26.eDisplayEnv, nenv$$26.eUnqualifiedItems, nenv$$26.ePatItems, nenv$$26.eModulesAndNamespaces, nenv$$26.eFullyQualifiedModulesAndNamespaces, nenv$$26.eFieldLabels, nenv$$26.eTyconsByAccessNames, nenv$$26.eFullyQualifiedTyconsByAccessNames, nenv$$26.eTyconsByDemangledNameAndArity, nenv$$26.eFullyQualifiedTyconsByDemangledNameAndArity, nenv$$26.eIndexedExtensionMembers, nenv$$26.eUnindexedExtensionMembers, (0, _illib.NameMapModule$$$layer)(typarmap, nenv$$26.eTypars));
}

function FreshenTycon(ncenv, m$$9, tcref$$13) {
  const tinst = NameResolver$$get_InstantiationGenerator(ncenv)(m$$9)((0, _tast.EntityRef$$Typars$$4DB9192C)(tcref$$13, m$$9));
  const improvedTy = (0, _TcGlobals.TcGlobals$$decompileType)(NameResolver$$get_g(ncenv), tcref$$13, tinst);
  return improvedTy;
}

function FreshenUnionCaseRef(ncenv$$1, m$$10, ucref$$4) {
  const tinst$$1 = NameResolver$$get_InstantiationGenerator(ncenv$$1)(m$$10)((0, _tast.EntityRef$$Typars$$4DB9192C)((0, _tast.UnionCaseRef$$get_TyconRef)(ucref$$4), m$$10));
  return new _infos.UnionCaseInfo(0, "UnionCaseInfo", tinst$$1, ucref$$4);
}

function FreshenUnqualifiedItem(ncenv$$2, m$$11, res$$1) {
  if (res$$1.tag === 1) {
    const ucref$$5 = res$$1.fields[0].fields[1];
    return new Item(1, "UnionCase", FreshenUnionCaseRef(ncenv$$2, m$$11, ucref$$5), false);
  } else {
    return res$$1;
  }
}

function OneResult(res$$2) {
  if (res$$2.tag === 1) {
    const e$$1 = res$$2.fields[0];
    return new _illib.ResultOrException$00601(1, "Exception", e$$1);
  } else {
    const x$$6 = res$$2.fields[0];
    return new _illib.ResultOrException$00601(0, "Result", (0, _Types.L)(x$$6, (0, _Types.L)()));
  }
}

function OneSuccess(x$$7) {
  return new _illib.ResultOrException$00601(0, "Result", (0, _Types.L)(x$$7, (0, _Types.L)()));
}

function AddResults(res1, res2) {
  var suggestions2, suggestions1, n2, n1, id2, id1, f$$7;
  const matchValue$$11 = [res1, res2];
  var $target$$97, l$$4, x$$8, l$$5, x$$9, f$$8, id1$$1, id2$$1, n1$$1, n2$$1, suggestions1$$1, suggestions2$$1;

  if (matchValue$$11[0].tag === 1) {
    if (matchValue$$11[1].tag === 1) {
      if (matchValue$$11[1].fields[0] instanceof _tast.UndefinedName) {
        if (matchValue$$11[0].fields[0] instanceof _tast.UndefinedName) {
          if (suggestions2 = matchValue$$11[1].fields[0].Data3, (suggestions1 = matchValue$$11[0].fields[0].Data3, (n2 = matchValue$$11[1].fields[0].Data0 | 0, (n1 = matchValue$$11[0].fields[0].Data0 | 0, (id2 = matchValue$$11[1].fields[0].Data2, (id1 = matchValue$$11[0].fields[0].Data2, (f$$7 = matchValue$$11[0].fields[0].Data1, (n1 === n2 ? (0, _ast.Ident$$get_idText)(id1) === (0, _ast.Ident$$get_idText)(id2) : false) ? (0, _Util.equals)((0, _ast.Ident$$get_idRange)(id1), (0, _ast.Ident$$get_idRange)(id2)) : false))))))) {
            $target$$97 = 5;
            f$$8 = matchValue$$11[0].fields[0].Data1;
            id1$$1 = matchValue$$11[0].fields[0].Data2;
            id2$$1 = matchValue$$11[1].fields[0].Data2;
            n1$$1 = matchValue$$11[0].fields[0].Data0;
            n2$$1 = matchValue$$11[1].fields[0].Data0;
            suggestions1$$1 = matchValue$$11[0].fields[0].Data3;
            suggestions2$$1 = matchValue$$11[1].fields[0].Data3;
          } else {
            $target$$97 = 6;
          }
        } else {
          $target$$97 = 6;
        }
      } else {
        $target$$97 = 6;
      }
    } else if (matchValue$$11[1].fields[0].tail == null) {
      $target$$97 = 1;
    } else {
      $target$$97 = 3;
      l$$5 = matchValue$$11[1].fields[0];
    }
  } else if (matchValue$$11[0].fields[0].tail == null) {
    $target$$97 = 0;
  } else if (matchValue$$11[1].tag === 1) {
    $target$$97 = 4;
    x$$9 = matchValue$$11[0].fields[0];
  } else if (matchValue$$11[1].fields[0].tail == null) {
    $target$$97 = 1;
  } else {
    $target$$97 = 2;
    l$$4 = matchValue$$11[1].fields[0];
    x$$8 = matchValue$$11[0].fields[0];
  }

  switch ($target$$97) {
    case 0:
      {
        return res2;
      }

    case 1:
      {
        return res1;
      }

    case 2:
      {
        return new _illib.ResultOrException$00601(0, "Result", (0, _List.append)(x$$8, l$$4));
      }

    case 3:
      {
        return new _illib.ResultOrException$00601(0, "Result", l$$5);
      }

    case 4:
      {
        return new _illib.ResultOrException$00601(0, "Result", x$$9);
      }

    case 5:
      {
        const suggestions = new Set(suggestions1$$1());
        (0, _Set.unionWith)(suggestions, suggestions2$$1());
        return new _illib.ResultOrException$00601(1, "Exception", new _tast.UndefinedName(n1$$1, f$$8, id1$$1, function () {
          return suggestions;
        }));
      }

    case 6:
      {
        var $target$$98, e1$$2, e2$$1, n1$$2, n2$$2, e1$$3, e2$$2, e1$$4;

        if (matchValue$$11[0].tag === 1) {
          if (matchValue$$11[0].fields[0] instanceof _tast.UndefinedName) {
            if (matchValue$$11[1].tag === 1) {
              if (matchValue$$11[1].fields[0] instanceof _tast.UndefinedName) {
                $target$$98 = 0;
                e1$$2 = matchValue$$11[0].fields[0];
                e2$$1 = matchValue$$11[1].fields[0];
                n1$$2 = matchValue$$11[0].fields[0].Data0;
                n2$$2 = matchValue$$11[1].fields[0].Data0;
              } else if (matchValue$$11[1].fields[0] instanceof _ErrorLogger.Error$) {
                $target$$98 = 1;
                e1$$3 = matchValue$$11[0].fields[0];
              } else {
                $target$$98 = 3;
                e1$$4 = matchValue$$11[0].fields[0];
              }
            } else {
              $target$$98 = 4;
            }
          } else if (matchValue$$11[0].fields[0] instanceof _ErrorLogger.Error$) {
            if (matchValue$$11[1].tag === 1) {
              if (matchValue$$11[1].fields[0] instanceof _tast.UndefinedName) {
                $target$$98 = 2;
                e2$$2 = matchValue$$11[1].fields[0];
              } else {
                $target$$98 = 3;
                e1$$4 = matchValue$$11[0].fields[0];
              }
            } else {
              $target$$98 = 4;
            }
          } else if (matchValue$$11[1].tag === 1) {
            $target$$98 = 3;
            e1$$4 = matchValue$$11[0].fields[0];
          } else {
            $target$$98 = 4;
          }
        } else {
          $target$$98 = 4;
        }

        switch ($target$$98) {
          case 0:
            {
              if (n1$$2 < n2$$2) {
                return new _illib.ResultOrException$00601(1, "Exception", e2$$1);
              } else {
                return new _illib.ResultOrException$00601(1, "Exception", e1$$2);
              }
            }

          case 1:
            {
              return new _illib.ResultOrException$00601(1, "Exception", e1$$3);
            }

          case 2:
            {
              return new _illib.ResultOrException$00601(1, "Exception", e2$$2);
            }

          case 3:
            {
              return new _illib.ResultOrException$00601(1, "Exception", e1$$4);
            }

          case 4:
            {
              throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/NameResolution.fs", 898, 10);
            }
        }
      }
  }
}

function NoResultsOrUsefulErrors() {
  return new _illib.ResultOrException$00601(0, "Result", (0, _Types.L)());
}

const ResultCollectionSettings = (0, _Types.declare)(function ResultCollectionSettings(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ResultCollectionSettings = ResultCollectionSettings;

function CollectResults(f$$9, _arg1$$4) {
  if (_arg1$$4.tail != null) {
    if (_arg1$$4.tail.tail == null) {
      return OneResult(f$$9(_arg1$$4.head));
    } else {
      return AddResults(OneResult(f$$9(_arg1$$4.head)), CollectResults(f$$9, _arg1$$4.tail));
    }
  } else {
    return NoResultsOrUsefulErrors();
  }
}

function CollectAtMostOneResult(f$$10, _arg1$$5) {
  if (_arg1$$5.tail != null) {
    if (_arg1$$5.tail.tail == null) {
      return OneResult(f$$10(_arg1$$5.head));
    } else {
      const matchValue$$12 = f$$10(_arg1$$5.head);

      if (matchValue$$12.tag === 1) {
        const e$$2 = matchValue$$12.fields[0];
        return AddResults(new _illib.ResultOrException$00601(1, "Exception", e$$2), CollectAtMostOneResult(f$$10, _arg1$$5.tail));
      } else {
        const r = matchValue$$12.fields[0];
        return new _illib.ResultOrException$00601(0, "Result", (0, _Types.L)(r, (0, _Types.L)()));
      }
    }
  } else {
    return NoResultsOrUsefulErrors();
  }
}

function CollectResults2(resultCollectionSettings, f$$11) {
  if (resultCollectionSettings.tag === 1) {
    return function (_arg1$$6) {
      return CollectAtMostOneResult(f$$11, _arg1$$6);
    };
  } else {
    return function (_arg1$$7) {
      return CollectResults(f$$11, _arg1$$7);
    };
  }
}

function MapResults(f$$12, _arg1$$8) {
  if (_arg1$$8.tag === 1) {
    const err = _arg1$$8.fields[0];
    return new _illib.ResultOrException$00601(1, "Exception", err);
  } else {
    const xs = _arg1$$8.fields[0];
    return new _illib.ResultOrException$00601(0, "Result", (0, _List.map)(f$$12, xs));
  }
}

function AtMostOneResult(m$$12, res$$3) {
  if (res$$3.tag === 0) {
    if (res$$3.fields[0].tail != null) {
      return (0, _illib.ResultOrExceptionModule$$$success)(res$$3.fields[0].head);
    } else {
      return (0, _illib.ResultOrExceptionModule$$$raze)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrInvalidModuleExprType)(), m$$12));
    }
  } else {
    return (0, _illib.ResultOrExceptionModule$$$raze)(res$$3.fields[0]);
  }
}

function AtMostOneResultQuery(query2, res1$$1) {
  if (res1$$1.tag === 0) {
    if (res1$$1.fields[0].tail == null) {
      return query2();
    } else {
      return res1$$1;
    }
  } else {
    return AddResults(res1$$1, query2());
  }
}

const TypeNameResolutionFlag = (0, _Types.declare)(function TypeNameResolutionFlag(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TypeNameResolutionFlag = TypeNameResolutionFlag;
const TypeNameResolutionStaticArgsInfo = (0, _Types.declare)(function TypeNameResolutionStaticArgsInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TypeNameResolutionStaticArgsInfo = TypeNameResolutionStaticArgsInfo;

function TypeNameResolutionStaticArgsInfo$$$get_DefiniteEmpty() {
  return new TypeNameResolutionStaticArgsInfo(1, "Definite", 0);
}

function TypeNameResolutionStaticArgsInfo$$$FromTyArgs$$Z524259A4(numTyArgs) {
  return new TypeNameResolutionStaticArgsInfo(1, "Definite", numTyArgs);
}

function TypeNameResolutionStaticArgsInfo$$get_HasNoStaticArgsInfo(x$$10) {
  if (x$$10.tag === 0) {
    return true;
  } else {
    return false;
  }
}

function TypeNameResolutionStaticArgsInfo$$get_NumStaticArgs(x$$11) {
  if (x$$11.tag === 1) {
    const n = x$$11.fields[0] | 0;
    return n | 0;
  } else {
    return 0;
  }
}

function TypeNameResolutionStaticArgsInfo$$MangledNameForType$$Z721C83C5(x$$12, nm$$12) {
  if ((0, _PrettyNaming.IsMangledGenericName)(nm$$12) ? true : TypeNameResolutionStaticArgsInfo$$get_NumStaticArgs(x$$12) === 0) {
    return nm$$12;
  } else {
    return nm$$12 + "`" + (0, _Util.int32ToString)(TypeNameResolutionStaticArgsInfo$$get_NumStaticArgs(x$$12));
  }
}

const TypeNameResolutionInfo = (0, _Types.declare)(function TypeNameResolutionInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TypeNameResolutionInfo = TypeNameResolutionInfo;

function TypeNameResolutionInfo$$$get_Default() {
  return new TypeNameResolutionInfo(0, "TypeNameResolutionInfo", new TypeNameResolutionFlag(0, "ResolveTypeNamesToCtors"), new TypeNameResolutionStaticArgsInfo(0, "Indefinite"));
}

function TypeNameResolutionInfo$$$ResolveToTypeRefs$$ZAA5971B(statResInfo) {
  return new TypeNameResolutionInfo(0, "TypeNameResolutionInfo", new TypeNameResolutionFlag(1, "ResolveTypeNamesToTypeRefs"), statResInfo);
}

function TypeNameResolutionInfo$$get_StaticArgsInfo(x$$13) {
  const staticResInfo = x$$13.fields[1];
  return staticResInfo;
}

function TypeNameResolutionInfo$$get_ResolutionFlag(x$$14) {
  const flag = x$$14.fields[0];
  return flag;
}

function TypeNameResolutionInfo$$get_DropStaticArgsInfo(x$$15) {
  const flag2 = x$$15.fields[0];
  return new TypeNameResolutionInfo(0, "TypeNameResolutionInfo", flag2, new TypeNameResolutionStaticArgsInfo(0, "Indefinite"));
}

function LookupTypeNameInEntityHaveArity(nm$$13, staticResInfo$$1, mty$$1) {
  const attempt1 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_TypesByMangledName)(mty$$1), TypeNameResolutionStaticArgsInfo$$MangledNameForType$$Z721C83C5(staticResInfo$$1, nm$$13));

  if (attempt1 == null) {
    return (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_TypesByMangledName)(mty$$1), nm$$13);
  } else {
    const r$$1 = attempt1;
    return r$$1;
  }
}

function LookupTypeNameInEnvHaveArity(fq$$3, nm$$14, numTyArgs$$1, nenv$$27) {
  const key = (0, _PrettyNaming.IsMangledGenericName)(nm$$14) ? (0, _PrettyNaming.DecodeGenericTypeName)(nm$$14) : new _PrettyNaming.NameArityPair(0, "NameArityPair", nm$$14, numTyArgs$$1);
  const matchValue$$13 = (0, _Map.FSharpMap$$TryFind$$2B595)(NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D(nenv$$27, fq$$3), key);

  if (matchValue$$13 == null) {
    return (0, _Option.defaultArg)((0, _illib.LayeredMultiMap$00602$$TryFind$$2B595)(NameResolutionEnv$$TyconsByAccessNames$$5B75656D(nenv$$27, fq$$3), nm$$14), null, _List.head);
  } else {
    const res$$5 = matchValue$$13;
    return res$$5;
  }
}

function LookupTypeNameNoArity(nm$$15, byDemangledNameAndArity, byAccessNames) {
  if ((0, _PrettyNaming.IsMangledGenericName)(nm$$15)) {
    const matchValue$$14 = (0, _Map.FSharpMap$$TryFind$$2B595)(byDemangledNameAndArity, (0, _PrettyNaming.DecodeGenericTypeName)(nm$$15));

    if (matchValue$$14 == null) {
      const matchValue$$15 = (0, _illib.LayeredMultiMap$00602$$TryFind$$2B595)(byAccessNames, nm$$15);

      if (matchValue$$15 == null) {
        return (0, _Types.L)();
      } else {
        const res$$7 = matchValue$$15;
        return res$$7;
      }
    } else {
      const res$$6 = (0, _Option.value)(matchValue$$14);
      return (0, _Types.L)(res$$6, (0, _Types.L)());
    }
  } else {
    return (0, _illib.LayeredMultiMap$00602$$get_Item$$2B595)(byAccessNames, nm$$15);
  }
}

function LookupTypeNameInEnvNoArity(fq$$4, nm$$16, nenv$$28) {
  return LookupTypeNameNoArity(nm$$16, NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D(nenv$$28, fq$$4), NameResolutionEnv$$TyconsByAccessNames$$5B75656D(nenv$$28, fq$$4));
}

function LookupTypeNameInEntityNoArity(m$$13, nm$$17, mtyp$$1) {
  return LookupTypeNameNoArity(nm$$17, (0, _tast.ModuleOrNamespaceType$$TypesByDemangledNameAndArity$$4DB9192C)(mtyp$$1, m$$13), (0, _tast.ModuleOrNamespaceType$$get_TypesByAccessNames)(mtyp$$1));
}

function LookupTypeNameInEnvMaybeHaveArity(fq$$5, nm$$18, typeNameResInfo, nenv$$29) {
  if (TypeNameResolutionStaticArgsInfo$$get_HasNoStaticArgsInfo(TypeNameResolutionInfo$$get_StaticArgsInfo(typeNameResInfo))) {
    return LookupTypeNameInEnvNoArity(fq$$5, nm$$18, nenv$$29);
  } else {
    return (0, _List.ofArray)((0, _Option.defaultArg)(LookupTypeNameInEnvHaveArity(fq$$5, nm$$18, TypeNameResolutionStaticArgsInfo$$get_NumStaticArgs(TypeNameResolutionInfo$$get_StaticArgsInfo(typeNameResInfo)), nenv$$29), [], function ($x$$26) {
      return [$x$$26];
    }));
  }
}

const PermitDirectReferenceToGeneratedType = (0, _Types.declare)(function PermitDirectReferenceToGeneratedType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.PermitDirectReferenceToGeneratedType = PermitDirectReferenceToGeneratedType;

function LookupTypeNameInEntityMaybeHaveArity(amap$$8, m$$14, ad$$4, nm$$19, staticResInfo$$2, modref$$14) {
  const mtyp$$2 = (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$14);
  let tcrefs$$6;

  if (staticResInfo$$2.tag === 1) {
    const matchValue$$16 = LookupTypeNameInEntityHaveArity(nm$$19, staticResInfo$$2, mtyp$$2);

    if (matchValue$$16 == null) {
      tcrefs$$6 = (0, _Types.L)();
    } else {
      const tycon$$4 = matchValue$$16;
      tcrefs$$6 = (0, _Types.L)((0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$14, tycon$$4), (0, _Types.L)());
    }
  } else {
    tcrefs$$6 = (0, _List.map)(function mapping$$10(arg00$$6) {
      return (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$14, arg00$$6);
    }, LookupTypeNameInEntityNoArity(m$$14, nm$$19, mtyp$$2));
  }

  amap$$8;
  const tcrefs$$7 = (0, _List.filter)(function predicate$$1(tcref$$14) {
    return (0, _AccessibilityLogic.IsEntityAccessible)(amap$$8, m$$14, ad$$4, tcref$$14);
  }, tcrefs$$6);
  return tcrefs$$7;
}

function MakeNestedType(ncenv$$3, tinst$$2, m$$15, tcrefNested) {
  const tps = (0, _illib.List$$$drop)((0, _List.length)(tinst$$2), (0, _tast.EntityRef$$Typars$$4DB9192C)(tcrefNested, m$$15));
  const tinstNested = NameResolver$$get_InstantiationGenerator(ncenv$$3)(m$$15)(tps);
  return (0, _TastOps.mkAppTy)(tcrefNested, (0, _List.append)(tinst$$2, tinstNested));
}

function GetNestedTypesOfType(ad$$5, ncenv$$4, optFilter, staticResInfo$$3, checkForGenerated, m$$16, ty$$4) {
  const g$$11 = NameResolver$$get_g(ncenv$$4);
  return (0, _List.collect)(function mapping$$12(ty$$5) {
    const activePatternResult39792 = (0, _TastOps.$007CAppTy$007C_$007C)(g$$11, ty$$5);

    if (activePatternResult39792 != null) {
      const tycon$$5 = (0, _tast.EntityRef$$get_Deref)(activePatternResult39792[0]);
      const mty$$2 = (0, _tast.Entity$$get_ModuleOrNamespaceType)(tycon$$5);
      checkForGenerated;

      if (optFilter == null) {
        return (0, _List.choose)(function chooser$$2(entity) {
          const ty$$6 = MakeNestedType(ncenv$$4, activePatternResult39792[1], m$$16, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(activePatternResult39792[0], entity));

          if ((0, _AccessibilityLogic.IsTypeAccessible)(g$$11, NameResolver$$get_amap(ncenv$$4), m$$16, ad$$5, ty$$6)) {
            return ty$$6;
          } else {
            return null;
          }
        }, (0, _illib.LayeredMultiMap$00602$$get_Values)((0, _tast.ModuleOrNamespaceType$$get_TypesByAccessNames)(mty$$2)));
      } else {
        const nm$$20 = optFilter;
        const tcrefs$$8 = LookupTypeNameInEntityMaybeHaveArity(NameResolver$$get_amap(ncenv$$4), m$$16, ad$$5, nm$$20, staticResInfo$$3, activePatternResult39792[0]);
        return (0, _List.map)(function mapping$$11(tcrefNested$$1) {
          return MakeNestedType(ncenv$$4, activePatternResult39792[1], m$$16, tcrefNested$$1);
        }, tcrefs$$8);
      }
    } else {
      return (0, _Types.L)();
    }
  }, (0, _InfoReader.InfoReader$$GetPrimaryTypeHierachy$$ZF03EB4A)(NameResolver$$get_InfoReader(ncenv$$4), new _infos.AllowMultiIntfInstantiations(0, "Yes"), m$$16, ty$$4));
}

const ItemOccurence = (0, _Types.declare)(function ItemOccurence(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ItemOccurence = ItemOccurence;
const OpenDeclaration = (0, _Types.declare)(function OpenDeclaration(arg1, arg2, arg3, arg4, arg5) {
  this.LongId = arg1;
  this.Range = arg2;
  this.Modules = arg3;
  this.AppliedScope = arg4;
  this.IsOwnNamespace = arg5;
}, _Types.Record);
exports.OpenDeclaration = OpenDeclaration;

function OpenDeclaration$$$Create$$722A02CA(longId, modules, appliedScope, isOwnNamespace) {
  var rest, first, last, copyOfStruct, copyOfStruct$$1;
  return new OpenDeclaration(longId, longId.tail != null ? (rest = longId.tail, (first = longId.head, (last = (0, _Option.defaultArg)((0, _List.tryLast)(rest), first), (0, _range.mkRange)((0, _range.range$$get_FileName)(appliedScope), (copyOfStruct = (0, _ast.Ident$$get_idRange)(first), (0, _range.range$$get_Start)(copyOfStruct)), (copyOfStruct$$1 = (0, _ast.Ident$$get_idRange)(last), (0, _range.range$$get_End)(copyOfStruct$$1)))))) : null, modules, appliedScope, isOwnNamespace);
}

const FormatStringCheckContext = (0, _Types.declare)(function FormatStringCheckContext(arg1, arg2) {
  this.NormalizedSource = arg1;
  this.LineEndPositions = arg2;
}, _Types.Record);
exports.FormatStringCheckContext = FormatStringCheckContext;

function $007CValRefOfProp$007C_$007C(pi) {
  return (0, _infos.PropInfo$$get_ArbitraryValRef)(pi);
}

function $007CValRefOfMeth$007C_$007C(mi) {
  return (0, _infos.MethInfo$$get_ArbitraryValRef)(mi);
}

function $007CValRefOfEvent$007C_$007C(evt) {
  return (0, _infos.EventInfo$$get_ArbitraryValRef)(evt);
}

function $007CRecordFieldUse$007C_$007C(item$$6) {
  var $target$$109, name$$1, tcref$$16, f$$13;

  if (item$$6.tag === 5) {
    $target$$109 = 0;
    name$$1 = item$$6.fields[0].fields[1].fields[1];
    tcref$$16 = item$$6.fields[0].fields[1].fields[0];
  } else if (item$$6.tag === 21) {
    const activePatternResult39833 = $007CRecordFieldUse$007C_$007C(item$$6.fields[1]);

    if (activePatternResult39833 != null) {
      $target$$109 = 1;
      f$$13 = activePatternResult39833;
    } else {
      $target$$109 = 2;
    }
  } else {
    $target$$109 = 2;
  }

  switch ($target$$109) {
    case 0:
      {
        return [name$$1, tcref$$16];
      }

    case 1:
      {
        return f$$13;
      }

    case 2:
      {
        return null;
      }
  }
}

function $007CILFieldUse$007C_$007C(item$$7) {
  var $target$$110, finfo$$1, f$$14;

  if (item$$7.tag === 7) {
    $target$$110 = 0;
    finfo$$1 = item$$7.fields[0];
  } else if (item$$7.tag === 21) {
    const activePatternResult39835 = $007CILFieldUse$007C_$007C(item$$7.fields[1]);

    if (activePatternResult39835 != null) {
      $target$$110 = 1;
      f$$14 = activePatternResult39835;
    } else {
      $target$$110 = 2;
    }
  } else {
    $target$$110 = 2;
  }

  switch ($target$$110) {
    case 0:
      {
        return finfo$$1;
      }

    case 1:
      {
        return f$$14;
      }

    case 2:
      {
        return null;
      }
  }
}

function $007CPropertyUse$007C_$007C(item$$8) {
  var $target$$111, pinfo, pinfo$$1;

  if (item$$8.tag === 9) {
    if (item$$8.fields[1].tail != null) {
      $target$$111 = 0;
      pinfo = item$$8.fields[1].head;
    } else {
      $target$$111 = 2;
    }
  } else if (item$$8.tag === 21) {
    const activePatternResult39837 = $007CPropertyUse$007C_$007C(item$$8.fields[1]);

    if (activePatternResult39837 != null) {
      $target$$111 = 1;
      pinfo$$1 = activePatternResult39837;
    } else {
      $target$$111 = 2;
    }
  } else {
    $target$$111 = 2;
  }

  switch ($target$$111) {
    case 0:
      {
        return pinfo;
      }

    case 1:
      {
        return pinfo$$1;
      }

    case 2:
      {
        return null;
      }
  }
}

function $007CFSharpPropertyUse$007C_$007C(item$$9) {
  var $target$$112, vref$$14;

  if (item$$9.tag === 9) {
    if (item$$9.fields[1].tail != null) {
      const activePatternResult39840 = $007CValRefOfProp$007C_$007C(item$$9.fields[1].head);

      if (activePatternResult39840 != null) {
        if (item$$9.fields[1].tail.tail == null) {
          $target$$112 = 0;
          vref$$14 = activePatternResult39840;
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
        return vref$$14;
      }

    case 1:
      {
        var $target$$113, propDef;

        if (item$$9.tag === 21) {
          const activePatternResult39839 = $007CFSharpPropertyUse$007C_$007C(item$$9.fields[1]);

          if (activePatternResult39839 != null) {
            $target$$113 = 0;
            propDef = activePatternResult39839;
          } else {
            $target$$113 = 1;
          }
        } else {
          $target$$113 = 1;
        }

        switch ($target$$113) {
          case 0:
            {
              return propDef;
            }

          case 1:
            {
              return null;
            }
        }
      }
  }
}

function $007CMethodUse$007C_$007C(item$$10) {
  var $target$$114, minfo$$3;

  if (item$$10.tag === 10) {
    if (item$$10.fields[1].tail != null) {
      if (item$$10.fields[1].tail.tail == null) {
        $target$$114 = 0;
        minfo$$3 = item$$10.fields[1].head;
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
        return minfo$$3;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CFSharpMethodUse$007C_$007C(item$$11) {
  var vref$$16;
  var $target$$115, vref$$15;

  if (item$$11.tag === 10) {
    if (item$$11.fields[1].tail != null) {
      const activePatternResult39843 = $007CValRefOfMeth$007C_$007C(item$$11.fields[1].head);

      if (activePatternResult39843 != null) {
        if (item$$11.fields[1].tail.tail == null) {
          $target$$115 = 0;
          vref$$15 = activePatternResult39843;
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
        return vref$$15;
      }

    case 1:
      {
        var $target$$116, vref$$17;

        if (item$$11.tag === 0) {
          if (vref$$16 = item$$11.fields[0], (0, _tast.ValRef$$get_IsMember)(vref$$16)) {
            $target$$116 = 0;
            vref$$17 = item$$11.fields[0];
          } else {
            $target$$116 = 1;
          }
        } else {
          $target$$116 = 1;
        }

        switch ($target$$116) {
          case 0:
            {
              return vref$$17;
            }

          case 1:
            {
              return null;
            }
        }
      }
  }
}

function $007CEntityUse$007C_$007C(item$$12) {
  var $target$$117, tcref$$17, tcref$$18, tcref$$19;

  if (item$$12.tag === 22) {
    if (item$$12.fields[0].tail != null) {
      $target$$117 = 0;
      tcref$$17 = item$$12.fields[0].head;
    } else {
      $target$$117 = 3;
    }
  } else if (item$$12.tag === 4) {
    $target$$117 = 1;
    tcref$$18 = item$$12.fields[0];
  } else if (item$$12.tag === 14) {
    if (item$$12.fields[1].tail != null) {
      const activePatternResult39846 = $007CAbbrevOrAppTy$007C_$007C(item$$12.fields[1].head);

      if (activePatternResult39846 != null) {
        if (item$$12.fields[1].tail.tail == null) {
          $target$$117 = 2;
          tcref$$19 = activePatternResult39846;
        } else {
          $target$$117 = 3;
        }
      } else {
        $target$$117 = 3;
      }
    } else {
      $target$$117 = 3;
    }
  } else if (item$$12.tag === 13) {
    const activePatternResult39847 = $007CAbbrevOrAppTy$007C_$007C(item$$12.fields[0]);

    if (activePatternResult39847 != null) {
      $target$$117 = 2;
      tcref$$19 = activePatternResult39847;
    } else {
      $target$$117 = 3;
    }
  } else if (item$$12.tag === 12) {
    const activePatternResult39848 = $007CAbbrevOrAppTy$007C_$007C(item$$12.fields[0]);

    if (activePatternResult39848 != null) {
      $target$$117 = 2;
      tcref$$19 = activePatternResult39848;
    } else {
      $target$$117 = 3;
    }
  } else {
    $target$$117 = 3;
  }

  switch ($target$$117) {
    case 0:
      {
        return tcref$$17;
      }

    case 1:
      {
        return tcref$$18;
      }

    case 2:
      {
        return tcref$$19;
      }

    case 3:
      {
        var $target$$118, ctor;

        if (item$$12.tag === 11) {
          if (item$$12.fields[1].tail != null) {
            $target$$118 = 0;
            ctor = item$$12.fields[1].head;
          } else {
            $target$$118 = 1;
          }
        } else {
          $target$$118 = 1;
        }

        switch ($target$$118) {
          case 0:
            {
              const activePatternResult39845 = $007CAbbrevOrAppTy$007C_$007C((0, _infos.MethInfo$$get_ApparentEnclosingType)(ctor));

              if (activePatternResult39845 != null) {
                const tcref$$20 = activePatternResult39845;
                return tcref$$20;
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
  }
}

function $007CEventUse$007C_$007C(item$$13) {
  if (item$$13.tag === 8) {
    const einfo$$1 = item$$13.fields[0];
    return einfo$$1;
  } else {
    return null;
  }
}

function $007CFSharpEventUse$007C_$007C(item$$14) {
  var $target$$119, vref$$18;

  if (item$$14.tag === 8) {
    const activePatternResult39851 = $007CValRefOfEvent$007C_$007C(item$$14.fields[0]);

    if (activePatternResult39851 != null) {
      $target$$119 = 0;
      vref$$18 = activePatternResult39851;
    } else {
      $target$$119 = 1;
    }
  } else {
    $target$$119 = 1;
  }

  switch ($target$$119) {
    case 0:
      {
        return vref$$18;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CUnionCaseUse$007C_$007C(item$$15) {
  if (item$$15.tag === 1) {
    const u1 = item$$15.fields[0].fields[1];
    return u1;
  } else {
    return null;
  }
}

function $007CValUse$007C_$007C(item$$16) {
  var $target$$120, vref$$19;

  if (item$$16.tag === 0) {
    $target$$120 = 0;
    vref$$19 = item$$16.fields[0];
  } else if (item$$16.tag === 16) {
    const activePatternResult39854 = $007CFSharpPropertyUse$007C_$007C(item$$16);

    if (activePatternResult39854 != null) {
      $target$$120 = 0;
      vref$$19 = activePatternResult39854;
    } else {
      const activePatternResult39855 = $007CFSharpMethodUse$007C_$007C(item$$16);

      if (activePatternResult39855 != null) {
        $target$$120 = 0;
        vref$$19 = activePatternResult39855;
      } else {
        const activePatternResult39856 = $007CFSharpEventUse$007C_$007C(item$$16);

        if (activePatternResult39856 != null) {
          $target$$120 = 0;
          vref$$19 = activePatternResult39856;
        } else {
          $target$$120 = 0;
          vref$$19 = item$$16.fields[1];
        }
      }
    }
  } else {
    const activePatternResult39857 = $007CFSharpPropertyUse$007C_$007C(item$$16);

    if (activePatternResult39857 != null) {
      $target$$120 = 0;
      vref$$19 = activePatternResult39857;
    } else {
      const activePatternResult39858 = $007CFSharpMethodUse$007C_$007C(item$$16);

      if (activePatternResult39858 != null) {
        $target$$120 = 0;
        vref$$19 = activePatternResult39858;
      } else {
        const activePatternResult39859 = $007CFSharpEventUse$007C_$007C(item$$16);

        if (activePatternResult39859 != null) {
          $target$$120 = 0;
          vref$$19 = activePatternResult39859;
        } else {
          $target$$120 = 1;
        }
      }
    }
  }

  switch ($target$$120) {
    case 0:
      {
        return vref$$19;
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CActivePatternCaseUse$007C_$007C(item$$17) {
  switch (item$$17.tag) {
    case 3:
      {
        const vref$$20 = item$$17.fields[0].fields[1];
        const idx = item$$17.fields[0].fields[2] | 0;
        return [(0, _tast.ValRef$$get_SigRange)(vref$$20), (0, _tast.ValRef$$get_DefinitionRange)(vref$$20), idx];
      }

    case 2:
      {
        const idx$$1 = item$$17.fields[2] | 0;
        const ap = item$$17.fields[0];
        return [(0, _PrettyNaming.ActivePatternInfo$$get_Range)(ap), (0, _PrettyNaming.ActivePatternInfo$$get_Range)(ap), idx$$1];
      }

    default:
      {
        return null;
      }
  }
}

function tyconRefDefnHash(_g, eref1) {
  return (0, _Util.structuralHash)((0, _tast.EntityRef$$get_LogicalName)(eref1));
}

function tyconRefDefnEq(g$$12, eref1$$1, eref2) {
  if ((0, _TastOps.tyconRefEq)(g$$12, eref1$$1, eref2)) {
    return true;
  } else if (((!(0, _Util.equals)((0, _tast.EntityRef$$get_DefinitionRange)(eref1$$1), _range.rangeStartup) ? !(0, _Util.equals)((0, _tast.EntityRef$$get_DefinitionRange)(eref1$$1), _range.range0) : false) ? !(0, _Util.equals)((0, _tast.EntityRef$$get_DefinitionRange)(eref1$$1), _range.rangeCmdArgs) : false) ? (0, _Util.equals)((0, _tast.EntityRef$$get_DefinitionRange)(eref1$$1), (0, _tast.EntityRef$$get_DefinitionRange)(eref2)) ? true : (0, _Util.equals)((0, _tast.EntityRef$$get_SigRange)(eref1$$1), (0, _tast.EntityRef$$get_SigRange)(eref2)) : false) {
    return (0, _tast.EntityRef$$get_LogicalName)(eref1$$1) === (0, _tast.EntityRef$$get_LogicalName)(eref2);
  } else {
    return false;
  }
}

function valRefDefnHash(_g$$1, vref1$$1) {
  return (0, _Util.structuralHash)((0, _tast.ValRef$$get_DisplayName)(vref1$$1));
}

function valRefDefnEq(g$$13, vref1$$2, vref2$$1) {
  if ((0, _TastOps.valRefEq)(g$$13, vref1$$2, vref2$$1)) {
    return true;
  } else if (((!(0, _Util.equals)((0, _tast.ValRef$$get_DefinitionRange)(vref1$$2), _range.rangeStartup) ? !(0, _Util.equals)((0, _tast.ValRef$$get_DefinitionRange)(vref1$$2), _range.range0) : false) ? !(0, _Util.equals)((0, _tast.ValRef$$get_DefinitionRange)(vref1$$2), _range.rangeCmdArgs) : false) ? (0, _Util.equals)((0, _tast.ValRef$$get_DefinitionRange)(vref1$$2), (0, _tast.ValRef$$get_DefinitionRange)(vref2$$1)) ? true : (0, _Util.equals)((0, _tast.ValRef$$get_SigRange)(vref1$$2), (0, _tast.ValRef$$get_SigRange)(vref2$$1)) : false) {
    return (0, _tast.ValRef$$get_LogicalName)(vref1$$2) === (0, _tast.ValRef$$get_LogicalName)(vref2$$1);
  } else {
    return false;
  }
}

function unionCaseRefDefnEq(g$$14, uc1, uc2) {
  if ((0, _tast.UnionCaseRef$$get_CaseName)(uc1) === (0, _tast.UnionCaseRef$$get_CaseName)(uc2)) {
    return tyconRefDefnEq(g$$14, (0, _tast.UnionCaseRef$$get_TyconRef)(uc1), (0, _tast.UnionCaseRef$$get_TyconRef)(uc2));
  } else {
    return false;
  }
}

function ItemsAreEffectivelyEqual(g$$15, orig, other) {
  const matchValue$$18 = [orig, other];
  var $target$$121, ty1, ty2;
  const activePatternResult39909 = $007CEntityUse$007C_$007C(matchValue$$18[0]);

  if (activePatternResult39909 != null) {
    const activePatternResult39910 = $007CEntityUse$007C_$007C(matchValue$$18[1]);

    if (activePatternResult39910 != null) {
      $target$$121 = 0;
      ty1 = activePatternResult39909;
      ty2 = activePatternResult39910;
    } else {
      $target$$121 = 1;
    }
  } else {
    $target$$121 = 1;
  }

  switch ($target$$121) {
    case 0:
      {
        return tyconRefDefnEq(g$$15, ty1, ty2);
      }

    case 1:
      {
        var $target$$122, nm1, nm2, tp1, tp2, vref1$$3, vref2$$2;

        if (matchValue$$18[0].tag === 17) {
          if (matchValue$$18[1].tag === 17) {
            $target$$122 = 0;
            nm1 = matchValue$$18[0].fields[0];
            nm2 = matchValue$$18[1].fields[0];
            tp1 = matchValue$$18[0].fields[1];
            tp2 = matchValue$$18[1].fields[1];
          } else {
            const activePatternResult39905 = $007CValUse$007C_$007C(matchValue$$18[0]);

            if (activePatternResult39905 != null) {
              const activePatternResult39906 = $007CValUse$007C_$007C(matchValue$$18[1]);

              if (activePatternResult39906 != null) {
                $target$$122 = 1;
                vref1$$3 = activePatternResult39905;
                vref2$$2 = activePatternResult39906;
              } else {
                $target$$122 = 2;
              }
            } else {
              $target$$122 = 2;
            }
          }
        } else {
          const activePatternResult39907 = $007CValUse$007C_$007C(matchValue$$18[0]);

          if (activePatternResult39907 != null) {
            const activePatternResult39908 = $007CValUse$007C_$007C(matchValue$$18[1]);

            if (activePatternResult39908 != null) {
              $target$$122 = 1;
              vref1$$3 = activePatternResult39907;
              vref2$$2 = activePatternResult39908;
            } else {
              $target$$122 = 2;
            }
          } else {
            $target$$122 = 2;
          }
        }

        switch ($target$$122) {
          case 0:
            {
              if (nm1 === nm2) {
                if ((0, _TastOps.typeEquiv)(g$$15, (0, _tast.mkTyparTy)(tp1), (0, _tast.mkTyparTy)(tp2))) {
                  return true;
                } else {
                  const matchValue$$19 = [(0, _tast.stripTyparEqns)((0, _tast.mkTyparTy)(tp1)), (0, _tast.stripTyparEqns)((0, _tast.mkTyparTy)(tp2))];
                  var $target$$123, tp1$$1, tp2$$1, tcref1, tcref2;

                  if (matchValue$$19[0].tag === 5) {
                    if (matchValue$$19[1].tag === 5) {
                      $target$$123 = 0;
                      tp1$$1 = matchValue$$19[0].fields[0];
                      tp2$$1 = matchValue$$19[1].fields[0];
                    } else {
                      const activePatternResult39875 = $007CAbbrevOrAppTy$007C_$007C(matchValue$$19[0]);

                      if (activePatternResult39875 != null) {
                        const activePatternResult39876 = $007CAbbrevOrAppTy$007C_$007C(matchValue$$19[1]);

                        if (activePatternResult39876 != null) {
                          $target$$123 = 1;
                          tcref1 = activePatternResult39875;
                          tcref2 = activePatternResult39876;
                        } else {
                          $target$$123 = 2;
                        }
                      } else {
                        $target$$123 = 2;
                      }
                    }
                  } else {
                    const activePatternResult39877 = $007CAbbrevOrAppTy$007C_$007C(matchValue$$19[0]);

                    if (activePatternResult39877 != null) {
                      const activePatternResult39878 = $007CAbbrevOrAppTy$007C_$007C(matchValue$$19[1]);

                      if (activePatternResult39878 != null) {
                        $target$$123 = 1;
                        tcref1 = activePatternResult39877;
                        tcref2 = activePatternResult39878;
                      } else {
                        $target$$123 = 2;
                      }
                    } else {
                      $target$$123 = 2;
                    }
                  }

                  switch ($target$$123) {
                    case 0:
                      {
                        if (((!(0, _tast.Typar$$get_IsCompilerGenerated)(tp1$$1) ? !(0, _tast.Typar$$get_IsFromError)(tp1$$1) : false) ? !(0, _tast.Typar$$get_IsCompilerGenerated)(tp2$$1) : false) ? !(0, _tast.Typar$$get_IsFromError)(tp2$$1) : false) {
                          return (0, _Util.equals)((0, _tast.Typar$$get_Range)(tp1$$1), (0, _tast.Typar$$get_Range)(tp2$$1));
                        } else {
                          return false;
                        }
                      }

                    case 1:
                      {
                        return tyconRefDefnEq(g$$15, tcref1, tcref2);
                      }

                    case 2:
                      {
                        return false;
                      }
                  }
                }
              } else {
                return false;
              }
            }

          case 1:
            {
              return valRefDefnEq(g$$15, vref1$$3, vref2$$2);
            }

          case 2:
            {
              var $target$$124, idx1, idx2, range1, range1i, range2, range2i;
              const activePatternResult39903 = $007CActivePatternCaseUse$007C_$007C(matchValue$$18[0]);

              if (activePatternResult39903 != null) {
                const activePatternResult39904 = $007CActivePatternCaseUse$007C_$007C(matchValue$$18[1]);

                if (activePatternResult39904 != null) {
                  $target$$124 = 0;
                  idx1 = activePatternResult39903[2];
                  idx2 = activePatternResult39904[2];
                  range1 = activePatternResult39903[0];
                  range1i = activePatternResult39903[1];
                  range2 = activePatternResult39904[0];
                  range2i = activePatternResult39904[1];
                } else {
                  $target$$124 = 1;
                }
              } else {
                $target$$124 = 1;
              }

              switch ($target$$124) {
                case 0:
                  {
                    if (idx1 === idx2) {
                      if ((0, _Util.equals)(range1, range2)) {
                        return true;
                      } else {
                        return (0, _Util.equals)(range1i, range2i);
                      }
                    } else {
                      return false;
                    }
                  }

                case 1:
                  {
                    var $target$$125, minfo1, minfo2;
                    const activePatternResult39901 = $007CMethodUse$007C_$007C(matchValue$$18[0]);

                    if (activePatternResult39901 != null) {
                      const activePatternResult39902 = $007CMethodUse$007C_$007C(matchValue$$18[1]);

                      if (activePatternResult39902 != null) {
                        $target$$125 = 0;
                        minfo1 = activePatternResult39901;
                        minfo2 = activePatternResult39902;
                      } else {
                        $target$$125 = 1;
                      }
                    } else {
                      $target$$125 = 1;
                    }

                    switch ($target$$125) {
                      case 0:
                        {
                          if ((0, _infos.MethInfo$$$MethInfosUseIdenticalDefinitions)(minfo1, minfo2)) {
                            return true;
                          } else {
                            const matchValue$$20 = [(0, _infos.MethInfo$$get_ArbitraryValRef)(minfo1), (0, _infos.MethInfo$$get_ArbitraryValRef)(minfo2)];
                            var $target$$126, vref1$$4, vref2$$3;

                            if (matchValue$$20[0] != null) {
                              if (matchValue$$20[1] != null) {
                                $target$$126 = 0;
                                vref1$$4 = matchValue$$20[0];
                                vref2$$3 = matchValue$$20[1];
                              } else {
                                $target$$126 = 1;
                              }
                            } else {
                              $target$$126 = 1;
                            }

                            switch ($target$$126) {
                              case 0:
                                {
                                  return valRefDefnEq(g$$15, vref1$$4, vref2$$3);
                                }

                              case 1:
                                {
                                  return false;
                                }
                            }
                          }
                        }

                      case 1:
                        {
                          var $target$$127, pinfo1, pinfo2;
                          const activePatternResult39899 = $007CPropertyUse$007C_$007C(matchValue$$18[0]);

                          if (activePatternResult39899 != null) {
                            const activePatternResult39900 = $007CPropertyUse$007C_$007C(matchValue$$18[1]);

                            if (activePatternResult39900 != null) {
                              $target$$127 = 0;
                              pinfo1 = activePatternResult39899;
                              pinfo2 = activePatternResult39900;
                            } else {
                              $target$$127 = 1;
                            }
                          } else {
                            $target$$127 = 1;
                          }

                          switch ($target$$127) {
                            case 0:
                              {
                                if ((0, _infos.PropInfo$$$PropInfosUseIdenticalDefinitions)(pinfo1, pinfo2)) {
                                  return true;
                                } else {
                                  const matchValue$$21 = [(0, _infos.PropInfo$$get_ArbitraryValRef)(pinfo1), (0, _infos.PropInfo$$get_ArbitraryValRef)(pinfo2)];
                                  var $target$$128, vref1$$5, vref2$$4;

                                  if (matchValue$$21[0] != null) {
                                    if (matchValue$$21[1] != null) {
                                      $target$$128 = 0;
                                      vref1$$5 = matchValue$$21[0];
                                      vref2$$4 = matchValue$$21[1];
                                    } else {
                                      $target$$128 = 1;
                                    }
                                  } else {
                                    $target$$128 = 1;
                                  }

                                  switch ($target$$128) {
                                    case 0:
                                      {
                                        return valRefDefnEq(g$$15, vref1$$5, vref2$$4);
                                      }

                                    case 1:
                                      {
                                        return false;
                                      }
                                  }
                                }
                              }

                            case 1:
                              {
                                var $target$$129, id1$$2, id2$$2, id$$6, vref$$21;

                                if (matchValue$$18[0].tag === 20) {
                                  if (matchValue$$18[1].tag === 20) {
                                    $target$$129 = 0;
                                    id1$$2 = matchValue$$18[0].fields[0];
                                    id2$$2 = matchValue$$18[1].fields[0];
                                  } else {
                                    const activePatternResult39897 = $007CValUse$007C_$007C(matchValue$$18[1]);

                                    if (activePatternResult39897 != null) {
                                      $target$$129 = 1;
                                      id$$6 = matchValue$$18[0].fields[0];
                                      vref$$21 = activePatternResult39897;
                                    } else {
                                      $target$$129 = 2;
                                    }
                                  }
                                } else {
                                  const activePatternResult39898 = $007CValUse$007C_$007C(matchValue$$18[0]);

                                  if (activePatternResult39898 != null) {
                                    if (matchValue$$18[1].tag === 20) {
                                      $target$$129 = 1;
                                      id$$6 = matchValue$$18[1].fields[0];
                                      vref$$21 = activePatternResult39898;
                                    } else {
                                      $target$$129 = 2;
                                    }
                                  } else {
                                    $target$$129 = 2;
                                  }
                                }

                                switch ($target$$129) {
                                  case 0:
                                    {
                                      if ((0, _ast.Ident$$get_idText)(id1$$2) === (0, _ast.Ident$$get_idText)(id2$$2)) {
                                        return (0, _Util.equals)((0, _ast.Ident$$get_idRange)(id1$$2), (0, _ast.Ident$$get_idRange)(id2$$2));
                                      } else {
                                        return false;
                                      }
                                    }

                                  case 1:
                                    {
                                      if ((0, _Util.equals)((0, _ast.Ident$$get_idRange)(id$$6), (0, _tast.ValRef$$get_DefinitionRange)(vref$$21)) ? true : (0, _Util.equals)((0, _ast.Ident$$get_idRange)(id$$6), (0, _tast.ValRef$$get_SigRange)(vref$$21))) {
                                        return (0, _ast.Ident$$get_idText)(id$$6) === (0, _tast.ValRef$$get_DisplayName)(vref$$21);
                                      } else {
                                        return false;
                                      }
                                    }

                                  case 2:
                                    {
                                      var $target$$130, f1, f2;
                                      const activePatternResult39895 = $007CILFieldUse$007C_$007C(matchValue$$18[0]);

                                      if (activePatternResult39895 != null) {
                                        const activePatternResult39896 = $007CILFieldUse$007C_$007C(matchValue$$18[1]);

                                        if (activePatternResult39896 != null) {
                                          $target$$130 = 0;
                                          f1 = activePatternResult39895;
                                          f2 = activePatternResult39896;
                                        } else {
                                          $target$$130 = 1;
                                        }
                                      } else {
                                        $target$$130 = 1;
                                      }

                                      switch ($target$$130) {
                                        case 0:
                                          {
                                            return (0, _infos.ILFieldInfo$$$ILFieldInfosUseIdenticalDefinitions)(f1, f2);
                                          }

                                        case 1:
                                          {
                                            var $target$$131, u1$$1, u2;
                                            const activePatternResult39893 = $007CUnionCaseUse$007C_$007C(matchValue$$18[0]);

                                            if (activePatternResult39893 != null) {
                                              const activePatternResult39894 = $007CUnionCaseUse$007C_$007C(matchValue$$18[1]);

                                              if (activePatternResult39894 != null) {
                                                $target$$131 = 0;
                                                u1$$1 = activePatternResult39893;
                                                u2 = activePatternResult39894;
                                              } else {
                                                $target$$131 = 1;
                                              }
                                            } else {
                                              $target$$131 = 1;
                                            }

                                            switch ($target$$131) {
                                              case 0:
                                                {
                                                  return unionCaseRefDefnEq(g$$15, u1$$1, u2);
                                                }

                                              case 1:
                                                {
                                                  var $target$$132, name1, name2, tcref1$$1, tcref2$$1;
                                                  const activePatternResult39891 = $007CRecordFieldUse$007C_$007C(matchValue$$18[0]);

                                                  if (activePatternResult39891 != null) {
                                                    const activePatternResult39892 = $007CRecordFieldUse$007C_$007C(matchValue$$18[1]);

                                                    if (activePatternResult39892 != null) {
                                                      $target$$132 = 0;
                                                      name1 = activePatternResult39891[0];
                                                      name2 = activePatternResult39892[0];
                                                      tcref1$$1 = activePatternResult39891[1];
                                                      tcref2$$1 = activePatternResult39892[1];
                                                    } else {
                                                      $target$$132 = 1;
                                                    }
                                                  } else {
                                                    $target$$132 = 1;
                                                  }

                                                  switch ($target$$132) {
                                                    case 0:
                                                      {
                                                        if (name1 === name2) {
                                                          return tyconRefDefnEq(g$$15, tcref1$$1, tcref2$$1);
                                                        } else {
                                                          return false;
                                                        }
                                                      }

                                                    case 1:
                                                      {
                                                        var $target$$133, evt1, evt2;
                                                        const activePatternResult39889 = $007CEventUse$007C_$007C(matchValue$$18[0]);

                                                        if (activePatternResult39889 != null) {
                                                          const activePatternResult39890 = $007CEventUse$007C_$007C(matchValue$$18[1]);

                                                          if (activePatternResult39890 != null) {
                                                            $target$$133 = 0;
                                                            evt1 = activePatternResult39889;
                                                            evt2 = activePatternResult39890;
                                                          } else {
                                                            $target$$133 = 1;
                                                          }
                                                        } else {
                                                          $target$$133 = 1;
                                                        }

                                                        switch ($target$$133) {
                                                          case 0:
                                                            {
                                                              if ((0, _infos.EventInfo$$$EventInfosUseIdenticalDefintions)(evt1, evt2)) {
                                                                return true;
                                                              } else {
                                                                const matchValue$$22 = [(0, _infos.EventInfo$$get_ArbitraryValRef)(evt1), (0, _infos.EventInfo$$get_ArbitraryValRef)(evt2)];
                                                                var $target$$134, vref1$$6, vref2$$5;

                                                                if (matchValue$$22[0] != null) {
                                                                  if (matchValue$$22[1] != null) {
                                                                    $target$$134 = 0;
                                                                    vref1$$6 = matchValue$$22[0];
                                                                    vref2$$5 = matchValue$$22[1];
                                                                  } else {
                                                                    $target$$134 = 1;
                                                                  }
                                                                } else {
                                                                  $target$$134 = 1;
                                                                }

                                                                switch ($target$$134) {
                                                                  case 0:
                                                                    {
                                                                      return valRefDefnEq(g$$15, vref1$$6, vref2$$5);
                                                                    }

                                                                  case 1:
                                                                    {
                                                                      return false;
                                                                    }
                                                                }
                                                              }
                                                            }

                                                          case 1:
                                                            {
                                                              var $target$$135, modrefs1, modrefs2;

                                                              if (matchValue$$18[0].tag === 18) {
                                                                if (matchValue$$18[1].tag === 18) {
                                                                  $target$$135 = 0;
                                                                  modrefs1 = matchValue$$18[0].fields[0];
                                                                  modrefs2 = matchValue$$18[1].fields[0];
                                                                } else {
                                                                  $target$$135 = 1;
                                                                }
                                                              } else {
                                                                $target$$135 = 1;
                                                              }

                                                              switch ($target$$135) {
                                                                case 0:
                                                                  {
                                                                    return (0, _List.exists)(function predicate$$3(modref1) {
                                                                      return (0, _List.exists)(function predicate$$2(r$$2) {
                                                                        if (tyconRefDefnEq(g$$15, modref1, r$$2)) {
                                                                          return true;
                                                                        } else {
                                                                          return (0, _TastOps.fullDisplayTextOfModRef)(modref1) === (0, _TastOps.fullDisplayTextOfModRef)(r$$2);
                                                                        }
                                                                      }, modrefs2);
                                                                    }, modrefs1);
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
                        }
                    }
                  }
              }
            }
        }
      }
  }
}

function ItemsAreEffectivelyEqualHash(g$$16, orig$$1) {
  const activePatternResult39922 = $007CEntityUse$007C_$007C(orig$$1);

  if (activePatternResult39922 != null) {
    const tcref$$21 = activePatternResult39922;
    return tyconRefDefnHash(g$$16, tcref$$21) | 0;
  } else {
    if (orig$$1.tag === 17) {
      return (0, _Util.structuralHash)(orig$$1.fields[0]) | 0;
    } else {
      const activePatternResult39921 = $007CValUse$007C_$007C(orig$$1);

      if (activePatternResult39921 != null) {
        const vref$$22 = activePatternResult39921;
        return valRefDefnHash(g$$16, vref$$22) | 0;
      } else {
        const activePatternResult39920 = $007CActivePatternCaseUse$007C_$007C(orig$$1);

        if (activePatternResult39920 != null) {
          return (0, _Util.structuralHash)(activePatternResult39920[2]) | 0;
        } else {
          const activePatternResult39919 = $007CMethodUse$007C_$007C(orig$$1);

          if (activePatternResult39919 != null) {
            const minfo$$4 = activePatternResult39919;
            return (0, _infos.MethInfo$$ComputeHashCode)(minfo$$4) | 0;
          } else {
            const activePatternResult39918 = $007CPropertyUse$007C_$007C(orig$$1);

            if (activePatternResult39918 != null) {
              const pinfo$$2 = activePatternResult39918;
              return (0, _infos.PropInfo$$ComputeHashCode)(pinfo$$2) | 0;
            } else {
              if (orig$$1.tag === 20) {
                return (0, _Util.structuralHash)((0, _ast.Ident$$get_idText)(orig$$1.fields[0])) | 0;
              } else {
                const activePatternResult39917 = $007CILFieldUse$007C_$007C(orig$$1);

                if (activePatternResult39917 != null) {
                  const ilfinfo = activePatternResult39917;
                  return (0, _infos.ILFieldInfo$$ComputeHashCode)(ilfinfo) | 0;
                } else {
                  const activePatternResult39916 = $007CUnionCaseUse$007C_$007C(orig$$1);

                  if (activePatternResult39916 != null) {
                    const ucase = activePatternResult39916;
                    return (0, _Util.structuralHash)((0, _tast.UnionCaseRef$$get_CaseName)(ucase)) | 0;
                  } else {
                    const activePatternResult39915 = $007CRecordFieldUse$007C_$007C(orig$$1);

                    if (activePatternResult39915 != null) {
                      return (0, _Util.structuralHash)(activePatternResult39915[0]) | 0;
                    } else {
                      const activePatternResult39914 = $007CEventUse$007C_$007C(orig$$1);

                      if (activePatternResult39914 != null) {
                        const einfo$$2 = activePatternResult39914;
                        return (0, _infos.EventInfo$$ComputeHashCode)(einfo$$2) | 0;
                      } else {
                        var $target$$136, mref;

                        if (orig$$1.tag === 18) {
                          if (orig$$1.fields[0].tail != null) {
                            $target$$136 = 0;
                            mref = orig$$1.fields[0].head;
                          } else {
                            $target$$136 = 1;
                          }
                        } else {
                          $target$$136 = 1;
                        }

                        switch ($target$$136) {
                          case 0:
                            {
                              return (0, _Util.structuralHash)((0, _tast.EntityRef$$get_DefinitionRange)(mref)) | 0;
                            }

                          case 1:
                            {
                              return 389329;
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

const CapturedNameResolution = (0, _Types.declare)(function CapturedNameResolution(p, i$$1, tpinst, io, de, nre, ad$$6, m$$17) {
  const $this$$27 = this;
  $this$$27.p = p;
  $this$$27.i = i$$1;
  $this$$27.tpinst = tpinst;
  $this$$27.io = io;
  $this$$27.de = de;
  $this$$27.nre = nre;
  $this$$27.ad = ad$$6;
  $this$$27.m = m$$17;
});
exports.CapturedNameResolution = CapturedNameResolution;

function CapturedNameResolution$$$$002Ector$$5BDACC40(p, i$$1, tpinst, io, de, nre, ad$$6, m$$17) {
  return this != null ? CapturedNameResolution.call(this, p, i$$1, tpinst, io, de, nre, ad$$6, m$$17) : new CapturedNameResolution(p, i$$1, tpinst, io, de, nre, ad$$6, m$$17);
}

function CapturedNameResolution$$get_Pos(this$) {
  return this$.p;
}

function CapturedNameResolution$$get_Item(this$$$1) {
  return this$$$1.i;
}

function CapturedNameResolution$$get_ItemWithInst(this$$$2) {
  return new ItemWithInst(this$$$2.i, this$$$2.tpinst);
}

function CapturedNameResolution$$get_ItemOccurence(this$$$3) {
  return this$$$3.io;
}

function CapturedNameResolution$$get_DisplayEnv(this$$$4) {
  return this$$$4.de;
}

function CapturedNameResolution$$get_NameResolutionEnv(this$$$5) {
  return this$$$5.nre;
}

function CapturedNameResolution$$get_AccessorDomain(this$$$6) {
  return this$$$6.ad;
}

function CapturedNameResolution$$get_Range(this$$$7) {
  return this$$$7.m;
}

function CapturedNameResolution$$DebugToString(this$$$8) {
  const tupledArg$$2 = [(0, _range.pos$$get_Line)(this$$$8.p), (0, _range.pos$$get_Column)(this$$$8.p)];
  return (0, _String.toText)((0, _String.printf)("%A: %+A"))([tupledArg$$2[0], tupledArg$$2[1]])(this$$$8.i);
}

const TcResolutions = (0, _Types.declare)(function TcResolutions(capturedEnvs, capturedExprTypes, capturedNameResolutions, capturedMethodGroupResolutions) {
  const $this$$28 = this;
  $this$$28.capturedEnvs = capturedEnvs;
  $this$$28.capturedExprTypes = capturedExprTypes;
  $this$$28.capturedNameResolutions = capturedNameResolutions;
  $this$$28.capturedMethodGroupResolutions = capturedMethodGroupResolutions;
});
exports.TcResolutions = TcResolutions;

function TcResolutions$$$$002Ector$$Z1EE1FE29(capturedEnvs, capturedExprTypes, capturedNameResolutions, capturedMethodGroupResolutions) {
  return this != null ? TcResolutions.call(this, capturedEnvs, capturedExprTypes, capturedNameResolutions, capturedMethodGroupResolutions) : new TcResolutions(capturedEnvs, capturedExprTypes, capturedNameResolutions, capturedMethodGroupResolutions);
}

(function TcResolutions$$$$002Ecctor() {
  TcResolutions.empty = TcResolutions$$$$002Ector$$Z1EE1FE29([], [], [], []);
})();

function TcResolutions$$get_CapturedEnvs(this$$$9) {
  return this$$$9.capturedEnvs;
}

function TcResolutions$$get_CapturedExpressionTypings(this$$$10) {
  return this$$$10.capturedExprTypes;
}

function TcResolutions$$get_CapturedNameResolutions(this$$$11) {
  return this$$$11.capturedNameResolutions;
}

function TcResolutions$$get_CapturedMethodGroupResolutions(this$$$12) {
  return this$$$12.capturedMethodGroupResolutions;
}

function TcResolutions$$$get_Empty() {
  return TcResolutions.empty;
}

const TcSymbolUseData = (0, _Types.declare)(function TcSymbolUseData(arg1, arg2, arg3, arg4) {
  this.Item = arg1;
  this.ItemOccurence = arg2;
  this.DisplayEnv = arg3;
  this.Range = arg4;
}, _Types.Record);
exports.TcSymbolUseData = TcSymbolUseData;
const TcSymbolUses = (0, _Types.declare)(function TcSymbolUses(g$$17, capturedNameResolutions$$1, formatSpecifierLocations) {
  const $this$$29 = this;
  $this$$29.g = g$$17;
  $this$$29.formatSpecifierLocations = formatSpecifierLocations;
  $this$$29.allUsesOfSymbols = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (cnr) {
      return new TcSymbolUseData(CapturedNameResolution$$get_Item(cnr), CapturedNameResolution$$get_ItemOccurence(cnr), CapturedNameResolution$$get_DisplayEnv(cnr), CapturedNameResolution$$get_Range(cnr));
    }, capturedNameResolutions$$1);
  }), Array);
  const capturedNameResolutions$$2 = null;
});
exports.TcSymbolUses = TcSymbolUses;

function TcSymbolUses$$$$002Ector$$Z766AEAAD(g$$17, capturedNameResolutions$$1, formatSpecifierLocations) {
  return this != null ? TcSymbolUses.call(this, g$$17, capturedNameResolutions$$1, formatSpecifierLocations) : new TcSymbolUses(g$$17, capturedNameResolutions$$1, formatSpecifierLocations);
}

function TcSymbolUses$$GetUsesOfSymbol$$15FD5CB0(this$$$13, item$$18) {
  return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (symbolUse) {
      return (() => {
        try {
          return function f$$15() {
            return ItemsAreEffectivelyEqual(this$$$13.g, item$$18, symbolUse.Item);
          }();
        } catch (matchValue$$23) {
          if (matchValue$$23 instanceof _ErrorLogger.UnresolvedPathReferenceNoRange) {
            return false;
          } else {
            throw matchValue$$23;
          }
        }
      })() ? (0, _Seq.singleton)(symbolUse) : (0, _Seq.empty)();
    }, this$$$13.allUsesOfSymbols);
  }), Array);
}

function TcSymbolUses$$get_AllUsesOfSymbols(this$$$14) {
  return this$$$14.allUsesOfSymbols;
}

function TcSymbolUses$$GetFormatSpecifierLocationsAndArity(this$$$15) {
  return this$$$15.formatSpecifierLocations;
}

const TcResultsSinkImpl = (0, _Types.declare)(function TcResultsSinkImpl(g$$18, source$$2) {
  const $this$$30 = this;
  $this$$30.g = g$$18;
  $this$$30.source = source$$2;
  $this$$30.capturedEnvs = [];
  $this$$30.capturedExprTypings = [];
  $this$$30.capturedNameResolutions = [];
  $this$$30.capturedFormatSpecifierLocations = [];
  $this$$30.capturedNameResolutionIdentifiers = (0, _Set.createMutable)([], (0, _Util.comparerFromEqualityComparer)({
    GetHashCode(_arg1$$9) {
      return (0, _range.pos$$get_Line)(_arg1$$9[0]) + 101 * (0, _range.pos$$get_Column)(_arg1$$9[0]) + (0, _Util.structuralHash)(_arg1$$9[1]);
    },

    Equals(_arg2, _arg3) {
      return (0, _range.posEq)(_arg2[0], _arg3[0]) ? _arg2[1] === _arg3[1] : false;
    }

  }));
  $this$$30.capturedModulesAndNamespaces = (0, _Set.createMutable)([], (0, _Util.comparerFromEqualityComparer)({
    GetHashCode(_arg4) {
      return (0, _Util.structuralHash)(_arg4[0]);
    },

    Equals(_arg5, _arg6) {
      return (0, _Util.equals)(_arg5[0], _arg6[0]) ? ItemsAreEffectivelyEqual($this$$30.g, _arg5[1], _arg6[1]) : false;
    }

  }));
  $this$$30.capturedMethodGroupResolutions = [];
  $this$$30.capturedOpenDeclarations = [];
  $this$$30.formatStringCheckContext = new _Util.Lazy(function () {
    return (0, _Option.defaultArg)($this$$30.source, null, function mapping$$14(source$$3) {
      const source$$4 = (0, _String.replace)((0, _String.replace)(source$$3, "\r\n", "\n"), "\r", "\n");
      const positions = (0, _Array.ofSeq)((0, _Seq.scan)(function folder$$12(x$$16, y) {
        return x$$16 + y;
      }, 0, (0, _Seq.map)(function mapping$$13(s) {
        return s.length + 1;
      }, source$$4.split("\n"))), Int32Array);
      return new FormatStringCheckContext(source$$4, positions);
    });
  });
});
exports.TcResultsSinkImpl = TcResultsSinkImpl;

function TcResultsSinkImpl$$$$002Ector$$Z556E795E(g$$18, source$$2) {
  return this != null ? TcResultsSinkImpl.call(this, g$$18, source$$2) : new TcResultsSinkImpl(g$$18, source$$2);
}

function TcResultsSinkImpl$$GetResolutions(this$$$16) {
  return TcResolutions$$$$002Ector$$Z1EE1FE29(this$$$16.capturedEnvs, this$$$16.capturedExprTypings, this$$$16.capturedNameResolutions, this$$$16.capturedMethodGroupResolutions);
}

function TcResultsSinkImpl$$GetSymbolUses(this$$$17) {
  return TcSymbolUses$$$$002Ector$$Z766AEAAD(this$$$17.g, this$$$17.capturedNameResolutions, this$$$17.capturedFormatSpecifierLocations.slice());
}

function TcResultsSinkImpl$$GetOpenDeclarations(this$$$18) {
  return (0, _Array.ofSeq)((0, _Set.distinctBy)(function projection$$2(x$$17) {
    return [x$$17.Range, x$$17.AppliedScope, x$$17.IsOwnNamespace];
  }, this$$$18.capturedOpenDeclarations, {
    Compare: _Util.compareArrays
  }), Array);
}

TcResultsSinkImpl.prototype.NotifyEnvWithScope = function (m$$19, nenv$$30, ad$$7) {
  const sink = this;

  if (TcResultsSinkImpl$$allowedRange$$4DB9192C(sink, m$$19)) {
    sink.capturedEnvs.push([m$$19, nenv$$30, ad$$7]);
  }
};

TcResultsSinkImpl.prototype.NotifyExprHasType = function (endPos, ty$$7, denv, nenv$$31, ad$$8, m$$20) {
  const sink$$1 = this;

  if (TcResultsSinkImpl$$allowedRange$$4DB9192C(sink$$1, m$$20)) {
    sink$$1.capturedExprTypings.push([endPos, ty$$7, denv, nenv$$31, ad$$8, m$$20]);
  }
};

TcResultsSinkImpl.prototype.NotifyNameResolution = function (endPos$$1, item$$19, itemMethodGroup, tpinst$$1, occurenceType, denv$$1, nenv$$32, ad$$9, m$$21, replace) {
  const sink$$2 = this;

  if (TcResultsSinkImpl$$allowedRange$$4DB9192C(sink$$2, m$$21)) {
    if (replace) {
      const r1 = (0, _Array.ofSeq)((0, _Seq.filter)(function (cnr$$1) {
        return !(0, _Util.equals)(CapturedNameResolution$$get_Range(cnr$$1), m$$21);
      }, sink$$2.capturedNameResolutions), Array);
      const r2 = (0, _Array.ofSeq)((0, _Seq.filter)(function (cnr$$2) {
        return !(0, _Util.equals)(CapturedNameResolution$$get_Range(cnr$$2), m$$21);
      }, sink$$2.capturedMethodGroupResolutions), Array);
      (0, _Util.clear)(sink$$2.capturedNameResolutions);
      (0, _Util.clear)(sink$$2.capturedMethodGroupResolutions);
      (0, _Array.addRangeInPlace)(r1, sink$$2.capturedNameResolutions);
      (0, _Array.addRangeInPlace)(r2, sink$$2.capturedMethodGroupResolutions);
    } else {
      let alreadyDone;

      if (item$$19.tag === 18) {
        alreadyDone = !(0, _Util.addToSet)([m$$21, item$$19], sink$$2.capturedModulesAndNamespaces);
      } else {
        let keyOpt;

        switch (item$$19.tag) {
          case 0:
            {
              const vref$$23 = item$$19.fields[0];
              keyOpt = [endPos$$1, (0, _tast.ValRef$$get_DisplayName)(vref$$23)];
              break;
            }

          case 20:
            {
              const id$$8 = item$$19.fields[0];
              keyOpt = [endPos$$1, (0, _ast.Ident$$get_idText)(id$$8)];
              break;
            }

          default:
            {
              keyOpt = null;
            }
        }

        if (keyOpt != null) {
          const key$$1 = keyOpt;
          alreadyDone = !(0, _Util.addToSet)(key$$1, sink$$2.capturedNameResolutionIdentifiers);
        } else {
          alreadyDone = false;
        }
      }

      if (!alreadyDone) {
        sink$$2.capturedNameResolutions.push(CapturedNameResolution$$$$002Ector$$5BDACC40(endPos$$1, item$$19, tpinst$$1, occurenceType, denv$$1, nenv$$32, ad$$9, m$$21));
        sink$$2.capturedMethodGroupResolutions.push(CapturedNameResolution$$$$002Ector$$5BDACC40(endPos$$1, itemMethodGroup, (0, _Types.L)(), occurenceType, denv$$1, nenv$$32, ad$$9, m$$21));
      }
    }
  }
};

TcResultsSinkImpl.prototype.NotifyFormatSpecifierLocation = function (m$$22, numArgs) {
  const sink$$3 = this;
  sink$$3.capturedFormatSpecifierLocations.push([m$$22, numArgs]);
};

TcResultsSinkImpl.prototype.NotifyOpenDeclaration = function (openDeclaration) {
  const sink$$4 = this;
  sink$$4.capturedOpenDeclarations.push(openDeclaration);
};

Object.defineProperty(TcResultsSinkImpl.prototype, "CurrentSource", {
  "get": function () {
    const sink$$5 = this;
    return sink$$5.source;
  }
});
Object.defineProperty(TcResultsSinkImpl.prototype, "FormatStringCheckContext", {
  "get": function () {
    const sink$$6 = this;
    return sink$$6.formatStringCheckContext.Value;
  }
});

function TcResultsSinkImpl$$allowedRange$$4DB9192C(this$$$19, m$$23) {
  return !(0, _range.range$$get_IsSynthetic)(m$$23);
}

const TcResultsSink = (0, _Types.declare)(function TcResultsSink(arg1) {
  this.CurrentSink = arg1;
}, _Types.Record);
exports.TcResultsSink = TcResultsSink;

function TcResultsSink$$$get_NoSink() {
  return new TcResultsSink(null);
}

function TcResultsSink$$$WithSink$$7FE138D7(sink$$7) {
  return new TcResultsSink(sink$$7);
}

function WithNewTypecheckResultsSink(newSink, sink$$8) {
  const old$$2 = sink$$8.CurrentSink;
  sink$$8.CurrentSink = newSink;
  return {
    Dispose() {
      sink$$8.CurrentSink = old$$2;
    }

  };
}

function TemporarilySuspendReportingTypecheckResultsToSink(sink$$9) {
  const old$$3 = sink$$9.CurrentSink;
  sink$$9.CurrentSink = null;
  return {
    Dispose() {
      sink$$9.CurrentSink = old$$3;
    }

  };
}

function CallEnvSink(sink$$10, scopem, nenv$$33, ad$$10) {
  const matchValue$$24 = sink$$10.CurrentSink;

  if (matchValue$$24 != null) {
    const sink$$11 = matchValue$$24;
    sink$$11.NotifyEnvWithScope(scopem, nenv$$33, ad$$10);
  }
}

function CallNameResolutionSink(sink$$12, m$$24, nenv$$34, item$$20, itemMethodGroup$$1, tpinst$$2, occurenceType$$1, denv$$2, ad$$11) {
  const matchValue$$25 = sink$$12.CurrentSink;

  if (matchValue$$25 != null) {
    const sink$$13 = matchValue$$25;
    sink$$13.NotifyNameResolution((0, _range.range$$get_End)(m$$24), item$$20, itemMethodGroup$$1, tpinst$$2, occurenceType$$1, denv$$2, nenv$$34, ad$$11, m$$24, false);
  }
}

function CallNameResolutionSinkReplacing(sink$$14, m$$25, nenv$$35, item$$21, itemMethodGroup$$2, tpinst$$3, occurenceType$$2, denv$$3, ad$$12) {
  const matchValue$$26 = sink$$14.CurrentSink;

  if (matchValue$$26 != null) {
    const sink$$15 = matchValue$$26;
    sink$$15.NotifyNameResolution((0, _range.range$$get_End)(m$$25), item$$21, itemMethodGroup$$2, tpinst$$3, occurenceType$$2, denv$$3, nenv$$35, ad$$12, m$$25, true);
  }
}

function CallExprHasTypeSink(sink$$16, m$$26, nenv$$36, ty$$8, denv$$4, ad$$13) {
  const matchValue$$27 = sink$$16.CurrentSink;

  if (matchValue$$27 != null) {
    const sink$$17 = matchValue$$27;
    sink$$17.NotifyExprHasType((0, _range.range$$get_End)(m$$26), ty$$8, denv$$4, nenv$$36, ad$$13, m$$26);
  }
}

function CallOpenDeclarationSink(sink$$18, openDeclaration$$1) {
  const matchValue$$28 = sink$$18.CurrentSink;

  if (matchValue$$28 != null) {
    const sink$$19 = matchValue$$28;
    sink$$19.NotifyOpenDeclaration(openDeclaration$$1);
  }
}

const ResultTyparChecker = (0, _Types.declare)(function ResultTyparChecker(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ResultTyparChecker = ResultTyparChecker;

function CheckAllTyparsInferrable(amap$$9, m$$27, item$$22) {
  var $target$$137;

  switch (item$$22.tag) {
    case 10:
      $target$$137 = 1;
      break;

    case 11:
    case 12:
    case 13:
    case 14:
    case 18:
    case 15:
    case 16:
    case 17:
    case 20:
    case 2:
    case 0:
    case 3:
    case 1:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 19:
    case 22:
    case 21:
      $target$$137 = 2;
      break;

    default:
      $target$$137 = 0;
  }

  switch ($target$$137) {
    case 0:
      {
        const pinfos = item$$22.fields[1];
        return (0, _List.forAll)(function predicate$$4(pinfo$$3) {
          if ((0, _infos.PropInfo$$get_IsExtensionMember)(pinfo$$3)) {
            return true;
          } else {
            const freeInDeclaringType = (0, _TastOps.freeInType)(_TastOps.CollectTyparsNoCaching, (0, _infos.PropInfo$$get_ApparentEnclosingType)(pinfo$$3));
            const freeInArgsAndRetType = (0, _TastOps.accFreeInTypes)(_TastOps.CollectTyparsNoCaching, (0, _infos.PropInfo$$GetParamTypes$$73F6E43C)(pinfo$$3, amap$$9, m$$27), (0, _TastOps.freeInType)(_TastOps.CollectTyparsNoCaching, (0, _infos.PropInfo$$GetPropertyType$$73F6E43C)(pinfo$$3, amap$$9, m$$27)));
            const free = (0, _zset.ZsetModule$$$diff)(freeInDeclaringType.FreeTypars, freeInArgsAndRetType.FreeTypars);
            return (0, _TaggedCollections.Set$00602$$get_IsEmpty)(free);
          }
        }, pinfos);
      }

    case 1:
      {
        const minfos$$5 = item$$22.fields[1];
        return (0, _List.forAll)(function predicate$$5(minfo$$5) {
          if ((0, _infos.MethInfo$$get_IsExtensionMember)(minfo$$5)) {
            return true;
          } else {
            const fminst = (0, _infos.MethInfo$$get_FormalMethodInst)(minfo$$5);
            const freeInDeclaringType$$1 = (0, _TastOps.freeInType)(_TastOps.CollectTyparsNoCaching, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$5));
            const freeInArgsAndRetType$$1 = (0, _List.foldBack)(function (arg10$0040$$4, arg20$0040$$1) {
              return (0, _TastOps.accFreeInTypes)(_TastOps.CollectTyparsNoCaching, arg10$0040$$4, arg20$0040$$1);
            }, (0, _infos.MethInfo$$GetParamTypes$$Z5D984B3C)(minfo$$5, amap$$9, m$$27, fminst), (0, _TastOps.accFreeInTypes)(_TastOps.CollectTyparsNoCaching, (0, _infos.MethInfo$$GetObjArgTypes$$Z5D984B3C)(minfo$$5, amap$$9, m$$27, fminst), (0, _TastOps.freeInType)(_TastOps.CollectTyparsNoCaching, (0, _infos.MethInfo$$GetFSharpReturnTy$$Z5D984B3C)(minfo$$5, amap$$9, m$$27, fminst))));
            const free$$1 = (0, _zset.ZsetModule$$$diff)(freeInDeclaringType$$1.FreeTypars, freeInArgsAndRetType$$1.FreeTypars);
            return (0, _TaggedCollections.Set$00602$$get_IsEmpty)(free$$1);
          }
        }, minfos$$5);
      }

    case 2:
      {
        return true;
      }
  }
}

const ResolutionInfo = (0, _Types.declare)(function ResolutionInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ResolutionInfo = ResolutionInfo;

function ResolutionInfo$$$SendEntityPathToSink$$Z7B7DC02C(sink$$20, ncenv$$5, nenv$$37, occ, ad$$14, _arg1$$10, typarChecker) {
  const warnings = _arg1$$10.fields[1];
  const entityPath = _arg1$$10.fields[0];
  (0, _List.iterate)(function action(tupledArg$$3) {
    (0, _ErrorLogger.CommitOperationResult)((0, _AttributeChecking.CheckEntityAttributes)(NameResolver$$get_g(ncenv$$5), tupledArg$$3[1], tupledArg$$3[0]));
    (0, _AccessibilityLogic.CheckTyconAccessible)(NameResolver$$get_amap(ncenv$$5), tupledArg$$3[0], ad$$14, tupledArg$$3[1]);
    const item$$23 = (0, _tast.EntityRef$$get_IsModuleOrNamespace)(tupledArg$$3[1]) ? new Item(18, "ModuleOrNamespaces", (0, _Types.L)(tupledArg$$3[1], (0, _Types.L)())) : new Item(14, "Types", (0, _tast.EntityRef$$get_DisplayName)(tupledArg$$3[1]), (0, _Types.L)(FreshenTycon(ncenv$$5, tupledArg$$3[0], tupledArg$$3[1]), (0, _Types.L)()));
    CallNameResolutionSink(sink$$20, tupledArg$$3[0], nenv$$37, item$$23, item$$23, _TastOps.emptyTyparInst, occ, nenv$$37.eDisplayEnv, ad$$14);
  }, entityPath);
  warnings(typarChecker);
}

function ResolutionInfo$$$get_Empty() {
  return new ResolutionInfo(0, "ResolutionInfo", (0, _Types.L)(), function (_arg1$$11) {});
}

function ResolutionInfo$$AddEntity$$Z30807AE9(x$$20, info) {
  const warnings$$1 = x$$20.fields[1];
  const entityPath$$1 = x$$20.fields[0];
  return new ResolutionInfo(0, "ResolutionInfo", (0, _Types.L)(info, entityPath$$1), warnings$$1);
}

function ResolutionInfo$$AddWarning$$18A9E779(x$$21, f$$16) {
  const warnings$$2 = x$$21.fields[1];
  const entityPath$$2 = x$$21.fields[0];
  return new ResolutionInfo(0, "ResolutionInfo", entityPath$$2, function (typarChecker$$1) {
    f$$16(typarChecker$$1);
    warnings$$2(typarChecker$$1);
  });
}

function CheckForTypeLegitimacyAndMultipleGenericTypeAmbiguities(tcrefs$$9, typeNameResInfo$$1, genOk, m$$29) {
  var tcref$$28, resInfo$$2, tcref$$24, _resInfo;

  const tcrefs$$10 = (0, _List.sortBy)(function projection$$4(tupledArg$$5) {
    return (0, _List.length)((0, _tast.EntityRef$$Typars$$4DB9192C)(tupledArg$$5[1], m$$29));
  }, (0, _List.distinctBy)(function projection$$3(tupledArg$$4) {
    return (0, _tast.EntityRef$$get_Stamp)(tupledArg$$4[1]);
  }, tcrefs$$9, {
    Equals: _Long.equals,
    GetHashCode: _Util.structuralHash
  }), {
    Compare: _Util.comparePrimitives
  });
  let tcrefs$$11;

  var $target$$140, _resInfo$$1, tcref$$26;

  if (tcrefs$$10.tail != null) {
    if (tcref$$24 = tcrefs$$10.head[1], (_resInfo = tcrefs$$10.head[0], (((0, _List.length)(tcrefs$$10) > 1 ? TypeNameResolutionStaticArgsInfo$$get_HasNoStaticArgsInfo(TypeNameResolutionInfo$$get_StaticArgsInfo(typeNameResInfo$$1)) : false) ? !((0, _tast.EntityRef$$Typars$$4DB9192C)(tcref$$24, m$$29).tail == null) : false) ? (0, _Seq.length)((0, _Set.distinctBy)(function projection$$5(tupledArg$$6) {
      return (0, _List.length)((0, _tast.EntityRef$$Typars$$4DB9192C)(tupledArg$$6[1], m$$29));
    }, tcrefs$$10, {
      Compare: _Util.comparePrimitives
    })) > 1 : false)) {
      $target$$140 = 0;
      _resInfo$$1 = tcrefs$$10.head[0];
      tcref$$26 = tcrefs$$10.head[1];
    } else {
      $target$$140 = 1;
    }
  } else {
    $target$$140 = 1;
  }

  switch ($target$$140) {
    case 0:
      {
        tcrefs$$11 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.collect)(function (matchValue$$29) {
            const resInfo$$1 = ResolutionInfo$$AddWarning$$18A9E779(matchValue$$29[0], function (_typarChecker) {
              (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrTypeInstantiationNeededToDisambiguateTypesWithSameName$$Z384F8060)((0, _tast.EntityRef$$get_DisplayName)(matchValue$$29[1]), (0, _tast.EntityRef$$get_DisplayNameWithStaticParametersAndUnderscoreTypars)(matchValue$$29[1])), m$$29));
            });
            return (0, _Seq.singleton)([resInfo$$1, matchValue$$29[1]]);
          }, tcrefs$$10);
        }));
        break;
      }

    case 1:
      {
        var $target$$141, resInfo$$3, tcref$$29;

        if (tcrefs$$10.tail != null) {
          if (tcrefs$$10.tail.tail == null) {
            if (tcref$$28 = tcrefs$$10.head[1], (resInfo$$2 = tcrefs$$10.head[0], (TypeNameResolutionStaticArgsInfo$$get_HasNoStaticArgsInfo(TypeNameResolutionInfo$$get_StaticArgsInfo(typeNameResInfo$$1)) ? !((0, _tast.EntityRef$$Typars$$4DB9192C)(tcref$$28, m$$29).tail == null) : false) ? (0, _Util.equals)(TypeNameResolutionInfo$$get_ResolutionFlag(typeNameResInfo$$1), new TypeNameResolutionFlag(1, "ResolveTypeNamesToTypeRefs")) : false)) {
              $target$$141 = 0;
              resInfo$$3 = tcrefs$$10.head[0];
              tcref$$29 = tcrefs$$10.head[1];
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
              const resInfo$$4 = ResolutionInfo$$AddWarning$$18A9E779(resInfo$$3, function (_arg5$$1) {
                const typarChecker$$2 = _arg5$$1.fields[0];

                if (!typarChecker$$2()) {
                  (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrTypeInstantiationIsMissingAndCouldNotBeInferred$$Z384F8060)((0, _tast.EntityRef$$get_DisplayName)(tcref$$29), (0, _tast.EntityRef$$get_DisplayNameWithStaticParametersAndUnderscoreTypars)(tcref$$29)), m$$29));
                }
              });
              tcrefs$$11 = (0, _Types.L)([resInfo$$4, tcref$$29], (0, _Types.L)());
              break;
            }

          case 1:
            {
              tcrefs$$11 = tcrefs$$10;
              break;
            }
        }

        break;
      }
  }

  genOk;
  return tcrefs$$11;
}

function ResolveLongIndentAsModuleOrNamespace(sink$$21, atMostOne, amap$$10, m$$30, first$$1, fullyQualified, nenv$$38, ad$$15, id$$9, rest$$1, isOpenDecl) {
  ResolveLongIndentAsModuleOrNamespace: while (true) {
    if (first$$1 ? (0, _ast.Ident$$get_idText)(id$$9) === "`global`" : false) {
      if (rest$$1.tail != null) {
        const rest2 = rest$$1.tail;
        const id2$$3 = rest$$1.head;
        sink$$21 = sink$$21;
        atMostOne = atMostOne;
        amap$$10 = amap$$10;
        m$$30 = m$$30;
        first$$1 = false;
        fullyQualified = new FullyQualifiedFlag(0, "FullyQualified");
        nenv$$38 = nenv$$38;
        ad$$15 = ad$$15;
        id$$9 = id2$$3;
        rest$$1 = rest2;
        isOpenDecl = isOpenDecl;
        continue ResolveLongIndentAsModuleOrNamespace;
      } else {
        return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrGlobalUsedOnlyAsFirstName)(), (0, _ast.Ident$$get_idRange)(id$$9)));
      }
    } else {
      const moduleOrNamespaces = NameResolutionEnv$$ModulesAndNamespaces$$5B75656D(nenv$$38, fullyQualified);
      const namespaceNotFound = new _Util.Lazy(function () {
        const suggestModulesAndNamespaces = function suggestModulesAndNamespaces() {
          return new Set((0, _Seq.collect)(function mapping$$16(e$$3) {
            return (0, _Types.L)((0, _tast.EntityRef$$get_DisplayName)(e$$3), (0, _Types.L)((0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(e$$3), (0, _Types.L)()));
          }, (0, _Seq.filter)(function predicate$$6(modref$$15) {
            return (0, _AccessibilityLogic.IsEntityAccessible)(amap$$10, m$$30, ad$$15, modref$$15);
          }, (0, _Seq.collect)(function mapping$$15(kv) {
            return kv[1];
          }, moduleOrNamespaces))));
        };

        return new _tast.UndefinedName(0, _FSComp.SR$$$undefinedNameNamespaceOrModule$$Z721C83C5, id$$9, suggestModulesAndNamespaces);
      });
      let moduleNotFoundErrorCache = null;

      const moduleNotFound = function moduleNotFound(modref$$16, mty$$3, id$$10, depth) {
        var oldId, error;
        var $target$$142, error$$1, oldId$$1;

        if (moduleNotFoundErrorCache != null) {
          if (oldId = moduleNotFoundErrorCache[0], (error = moduleNotFoundErrorCache[1], (0, _Util.equals)(oldId, (0, _ast.Ident$$get_idRange)(id$$10)))) {
            $target$$142 = 0;
            error$$1 = moduleNotFoundErrorCache[1];
            oldId$$1 = moduleNotFoundErrorCache[0];
          } else {
            $target$$142 = 1;
          }
        } else {
          $target$$142 = 1;
        }

        switch ($target$$142) {
          case 0:
            {
              return error$$1;
            }

          case 1:
            {
              const suggestNames = function suggestNames() {
                return new Set((0, _Seq.collect)(function mapping$$17(e$$4) {
                  return (0, _Types.L)((0, _tast.Entity$$get_DisplayName)(e$$4[1]), (0, _Types.L)((0, _tast.Entity$$get_DemangledModuleOrNamespaceName)(e$$4[1]), (0, _Types.L)()));
                }, (0, _Seq.filter)(function predicate$$7(kv$$1) {
                  return (0, _AccessibilityLogic.IsEntityAccessible)(amap$$10, m$$30, ad$$15, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$16, kv$$1[1]));
                }, (0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$3))));
              };

              const error$$2 = (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(depth, _FSComp.SR$$$undefinedNameNamespace$$Z721C83C5, id$$10, suggestNames));
              moduleNotFoundErrorCache = [(0, _ast.Ident$$get_idRange)(id$$10), error$$2];
              return error$$2;
            }
        }
      };

      const notifyNameResolution = function notifyNameResolution(modref$$17, m$$31) {
        const item$$24 = new Item(18, "ModuleOrNamespaces", (0, _Types.L)(modref$$17, (0, _Types.L)()));
        const occurence = isOpenDecl ? new ItemOccurence(7, "Open") : new ItemOccurence(1, "Use");
        CallNameResolutionSink(sink$$21, m$$31, nenv$$38, item$$24, item$$24, _TastOps.emptyTyparInst, occurence, NameResolutionEnv$$get_DisplayEnv(nenv$$38), ad$$15);
      };

      const matchValue$$30 = (0, _Map.FSharpMap$$TryFind$$2B595)(moduleOrNamespaces, (0, _ast.Ident$$get_idText)(id$$9));

      if (matchValue$$30 == null) {
        return (0, _illib.ResultOrExceptionModule$$$raze)(namespaceNotFound.Value);
      } else {
        const modrefs$$3 = matchValue$$30;

        const look = function look(depth$$1, modref$$18, mty$$4, lid) {
          look: while (true) {
            if (lid.tail != null) {
              const rest$$2 = lid.tail;
              const id$$11 = lid.head;
              const matchValue$$31 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$4), (0, _ast.Ident$$get_idText)(id$$11));

              if (matchValue$$31 != null) {
                const mspec = matchValue$$31;
                const subref = (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$18, mspec);

                if ((0, _AccessibilityLogic.IsEntityAccessible)(amap$$10, m$$30, ad$$15, subref)) {
                  notifyNameResolution(subref, (0, _ast.Ident$$get_idRange)(id$$11));
                  depth$$1 = depth$$1 + 1;
                  modref$$18 = subref;
                  mty$$4 = (0, _tast.Entity$$get_ModuleOrNamespaceType)(mspec);
                  lid = rest$$2;
                  continue look;
                } else {
                  return moduleNotFound(modref$$18, mty$$4, id$$11, depth$$1);
                }
              } else {
                return moduleNotFound(modref$$18, mty$$4, id$$11, depth$$1);
              }
            } else {
              return (0, _illib.ResultOrExceptionModule$$$success)([depth$$1, modref$$18, mty$$4]);
            }
          }
        };

        return CollectResults2(atMostOne, function (modref$$19) {
          if ((0, _AccessibilityLogic.IsEntityAccessible)(amap$$10, m$$30, ad$$15, modref$$19)) {
            notifyNameResolution(modref$$19, (0, _ast.Ident$$get_idRange)(id$$9));
            return look(1, modref$$19, (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$19), rest$$1);
          } else {
            return (0, _illib.ResultOrExceptionModule$$$raze)(namespaceNotFound.Value);
          }
        })(modrefs$$3);
      }
    }
  }
}

function ResolveLongIndentAsModuleOrNamespaceThen(sink$$22, atMostOne$$1, amap$$11, m$$32, fullyQualified$$1, nenv$$39, ad$$16, id$$12, rest$$3, isOpenDecl$$1, f$$17) {
  const matchValue$$32 = ResolveLongIndentAsModuleOrNamespace(sink$$22, new ResultCollectionSettings(0, "AllResults"), amap$$11, m$$32, true, fullyQualified$$1, nenv$$39, ad$$16, id$$12, (0, _Types.L)(), isOpenDecl$$1);

  if (matchValue$$32.tag === 1) {
    const err$$2 = matchValue$$32.fields[0];
    return new _illib.ResultOrException$00601(1, "Exception", err$$2);
  } else {
    const modrefs$$4 = matchValue$$32.fields[0];

    if (rest$$3.tail != null) {
      const rest2$$1 = rest$$3.tail;
      const id2$$4 = rest$$3.head;
      return CollectResults2(atMostOne$$1, function (tupledArg$$7) {
        const resInfo$$5 = ResolutionInfo$$AddEntity$$Z30807AE9(ResolutionInfo$$$get_Empty(), [(0, _ast.Ident$$get_idRange)(id$$12), tupledArg$$7[1]]);
        return f$$17(resInfo$$5, tupledArg$$7[0] + 1, (0, _ast.Ident$$get_idRange)(id$$12), tupledArg$$7[1], tupledArg$$7[2], id2$$4, rest2$$1);
      })(modrefs$$4);
    } else {
      return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrUnexpectedEmptyLongId)(), (0, _ast.Ident$$get_idRange)(id$$12)));
    }
  }
}

function ResolveObjectConstructorPrim(ncenv$$6, edenv, resInfo$$6, m$$33, ad$$17, ty$$9) {
  const g$$19 = NameResolver$$get_g(ncenv$$6);
  const amap$$12 = NameResolver$$get_amap(ncenv$$6);

  if ((0, _TastOps.isDelegateTy)(g$$19, ty$$9)) {
    return (0, _illib.ResultOrExceptionModule$$$success)([resInfo$$6, new Item(13, "DelegateCtor", ty$$9)]);
  } else {
    const ctorInfos = (0, _InfoReader.GetIntrinsicConstructorInfosOfType)(NameResolver$$get_InfoReader(ncenv$$6), m$$33, ty$$9);

    if (ctorInfos.tail == null ? (0, _TastOps.isInterfaceTy)(g$$19, ty$$9) : false) {
      return (0, _illib.ResultOrExceptionModule$$$success)([resInfo$$6, new Item(12, "FakeInterfaceCtor", ty$$9)]);
    } else {
      const defaultStructCtorInfo = (((!(0, _List.exists)(function predicate$$8(x$$22) {
        return (0, _infos.MethInfo$$get_IsNullary)(x$$22);
      }, ctorInfos) ? (0, _TastOps.isStructTy)(g$$19, ty$$9) : false) ? !(0, _TastOps.isRecdTy)(g$$19, ty$$9) : false) ? !(0, _TastOps.isUnionTy)(g$$19, ty$$9) : false) ? (0, _Types.L)(new _infos.MethInfo(2, "DefaultStructCtor", g$$19, ty$$9), (0, _Types.L)()) : (0, _Types.L)();

      if ((defaultStructCtorInfo.tail == null ? ctorInfos.tail == null : false) ? true : !(0, _TastOps.isAppTy)(g$$19, ty$$9) ? !(0, _TastOps.isAnyTupleTy)(g$$19, ty$$9) : false) {
        return (0, _illib.ResultOrExceptionModule$$$raze)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrNoConstructorsAvailableForType$$Z721C83C5)((0, _NicePrint.minimalStringOfType)(edenv, ty$$9)), m$$33));
      } else {
        const ctorInfos$$1 = (0, _List.filter)(function predicate$$9(minfo$$6) {
          return (0, _AccessibilityLogic.IsMethInfoAccessible)(amap$$12, m$$33, ad$$17, minfo$$6);
        }, ctorInfos);
        const metadataTy = (0, _TastOps.convertToTypeWithMetadataIfPossible)(g$$19, ty$$9);
        return (0, _illib.ResultOrExceptionModule$$$success)([resInfo$$6, Item$$$MakeCtorGroup$$18D66E3A((0, _tast.EntityRef$$get_LogicalName)((0, _TastOps.tcrefOfAppTy)(g$$19, metadataTy)), (0, _List.append)(defaultStructCtorInfo, ctorInfos$$1))]);
      }
    }
  }
}

function ResolveObjectConstructor(ncenv$$7, edenv$$1, m$$34, ad$$18, ty$$10) {
  return (0, _illib.ResultOrExceptionModule$$$op_BarQmarkGreater)(ResolveObjectConstructorPrim(ncenv$$7, edenv$$1, (0, _Types.L)(), m$$34, ad$$18, ty$$10), function (tupledArg$$8) {
    return tupledArg$$8[1];
  });
}

function IntrinsicPropInfosOfTypeInScope(infoReader$$1, optFilter$$1, ad$$19, findFlag, m$$35, ty$$11) {
  const g$$20 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$1);
  const amap$$13 = (0, _InfoReader.InfoReader$$get_amap)(infoReader$$1);
  const pinfos$$1 = (0, _InfoReader.GetIntrinsicPropInfoSetsOfType)(infoReader$$1, optFilter$$1, ad$$19, new _infos.AllowMultiIntfInstantiations(0, "Yes"), findFlag, m$$35, ty$$11);
  const pinfos$$3 = (0, _InfoReader.ExcludeHiddenOfPropInfos)(g$$20, amap$$13, m$$35, pinfos$$1);
  return pinfos$$3;
}

function SelectPropInfosFromExtMembers(infoReader$$2, ad$$20, optFilter$$2, declaringTy, m$$36, extMemInfos) {
  const g$$21 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$2);
  const amap$$14 = (0, _InfoReader.InfoReader$$get_amap)(infoReader$$2);
  const seen = (0, _Set.createMutable)([], (0, _Util.comparerFromEqualityComparer)(ExtensionMember$$$Comparer$$2AE8EA0C(g$$21)));
  const propCollector = (0, _InfoReader.PropertyCollector$$$$002Ector$$Z6F07ABE7)(g$$21, amap$$14, m$$36, declaringTy, optFilter$$2, ad$$20);
  (0, _Seq.iterate)(function (emem) {
    if ((0, _Util.addToSet)(emem, seen)) {
      if (emem.tag === 1) {} else {
        const vref$$24 = emem.fields[0];
        const _pri = emem.fields[1];
        const matchValue$$33 = (0, _tast.ValRef$$get_MemberInfo)(vref$$24);

        if (matchValue$$33 != null) {
          const membInfo = matchValue$$33;
          (0, _InfoReader.PropertyCollector$$Collect$$40A26F)(propCollector, membInfo, vref$$24);
        }
      }
    }
  }, extMemInfos);
  return (0, _InfoReader.PropertyCollector$$Close)(propCollector);
}

function ExtensionPropInfosOfTypeInScope(infoReader$$3, nenv$$40, optFilter$$3, ad$$21, m$$37, ty$$12) {
  const g$$22 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$3);
  const extMemsFromHierarchy = (0, _List.collect)(function mapping$$18(ty$$13) {
    if ((0, _TastOps.isAppTy)(g$$22, ty$$13)) {
      const tcref$$30 = (0, _TastOps.tcrefOfAppTy)(g$$22, ty$$13);
      const extMemInfos$$1 = (0, _TastOps.TyconRefMultiMap$00601$$Find$$Z788D4AAC)(nenv$$40.eIndexedExtensionMembers, tcref$$30);
      return SelectPropInfosFromExtMembers(infoReader$$3, ad$$21, optFilter$$3, ty$$13, m$$37, extMemInfos$$1);
    } else {
      return (0, _Types.L)();
    }
  }, (0, _InfoReader.InfoReader$$GetEntireTypeHierachy$$ZF03EB4A)(infoReader$$3, new _infos.AllowMultiIntfInstantiations(0, "Yes"), m$$37, ty$$12));
  const extMemsDangling = SelectPropInfosFromExtMembers(infoReader$$3, ad$$21, optFilter$$3, ty$$12, m$$37, nenv$$40.eUnindexedExtensionMembers);
  return (0, _List.append)(extMemsDangling, extMemsFromHierarchy);
}

function AllPropInfosOfTypeInScope(infoReader$$4, nenv$$41, optFilter$$4, ad$$22, findFlag$$1, m$$38, ty$$14) {
  return (0, _List.append)(IntrinsicPropInfosOfTypeInScope(infoReader$$4, optFilter$$4, ad$$22, findFlag$$1, m$$38, ty$$14), ExtensionPropInfosOfTypeInScope(infoReader$$4, nenv$$41, optFilter$$4, ad$$22, m$$38, ty$$14));
}

function IntrinsicMethInfosOfType(infoReader$$5, optFilter$$5, ad$$23, allowMultiIntfInst, findFlag$$2, m$$39, ty$$15) {
  const g$$23 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$5);
  const amap$$15 = (0, _InfoReader.InfoReader$$get_amap)(infoReader$$5);
  const minfos$$6 = (0, _InfoReader.GetIntrinsicMethInfoSetsOfType)(infoReader$$5, optFilter$$5, ad$$23, allowMultiIntfInst, findFlag$$2, m$$39, ty$$15);
  const minfos$$8 = (0, _InfoReader.ExcludeHiddenOfMethInfos)(g$$23, amap$$15, m$$39, minfos$$6);
  return minfos$$8;
}

function SelectMethInfosFromExtMembers(infoReader$$6, optFilter$$6, apparentTy, m$$40, extMemInfos$$2) {
  const g$$24 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$6);
  const seen$$1 = (0, _Set.createMutable)([], (0, _Util.comparerFromEqualityComparer)(ExtensionMember$$$Comparer$$2AE8EA0C(g$$24)));
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (emem$$1) {
      var pri$$7, minfo$$7, actualParent, nm$$22;

      if ((0, _Util.addToSet)(emem$$1, seen$$1)) {
        if (emem$$1.tag === 1) {
          if (pri$$7 = emem$$1.fields[2], (minfo$$7 = emem$$1.fields[1], (actualParent = emem$$1.fields[0], optFilter$$6 != null ? (nm$$22 = optFilter$$6, nm$$22 === (0, _infos.MethInfo$$get_LogicalName)(minfo$$7)) : true))) {
            if (emem$$1.fields[1].tag === 0) {
              const vref$$26 = emem$$1.fields[1].fields[2];
              const g$$25 = emem$$1.fields[1].fields[0];
              return (0, _Seq.singleton)(new _infos.MethInfo(0, "FSMeth", g$$25, apparentTy, vref$$26, emem$$1.fields[2]));
            } else if (emem$$1.fields[1].tag === 2) {
              return (0, _Seq.empty)();
            } else {
              const ilminfo = emem$$1.fields[1].fields[1];
              return (0, _Seq.singleton)((0, _infos.MethInfo$$$CreateILExtensionMeth$$Z447F6EC6)((0, _InfoReader.InfoReader$$get_amap)(infoReader$$6), m$$40, apparentTy, emem$$1.fields[0], emem$$1.fields[2], (0, _infos.ILMethInfo$$get_RawMetadata)(ilminfo)));
            }
          } else {
            return (0, _Seq.empty)();
          }
        } else {
          const matchValue$$34 = (0, _tast.ValRef$$get_MemberInfo)(emem$$1.fields[0]);

          if (matchValue$$34 != null) {
            const membInfo$$1 = matchValue$$34;
            const matchValue$$35 = (0, _InfoReader.TrySelectMemberVal)(g$$24, optFilter$$6, apparentTy, emem$$1.fields[1], membInfo$$1, emem$$1.fields[0]);

            if (matchValue$$35 != null) {
              const m$$41 = matchValue$$35;
              return (0, _Seq.singleton)(m$$41);
            } else {
              return (0, _Seq.empty)();
            }
          } else {
            return (0, _Seq.empty)();
          }
        }
      } else {
        return (0, _Seq.empty)();
      }
    }, extMemInfos$$2);
  }));
}

function ExtensionMethInfosOfTypeInScope(infoReader$$7, nenv$$42, optFilter$$7, m$$42, ty$$16) {
  const extMemsDangling$$1 = SelectMethInfosFromExtMembers(infoReader$$7, optFilter$$7, ty$$16, m$$42, nenv$$42.eUnindexedExtensionMembers);
  const extMemsFromHierarchy$$1 = (0, _List.collect)(function mapping$$19(ty$$17) {
    const g$$26 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$7);

    if ((0, _TastOps.isAppTy)(g$$26, ty$$17)) {
      const tcref$$31 = (0, _TastOps.tcrefOfAppTy)(g$$26, ty$$17);
      const extValRefs = (0, _TastOps.TyconRefMultiMap$00601$$Find$$Z788D4AAC)(nenv$$42.eIndexedExtensionMembers, tcref$$31);
      return SelectMethInfosFromExtMembers(infoReader$$7, optFilter$$7, ty$$17, m$$42, extValRefs);
    } else {
      return (0, _Types.L)();
    }
  }, (0, _InfoReader.InfoReader$$GetEntireTypeHierachy$$ZF03EB4A)(infoReader$$7, new _infos.AllowMultiIntfInstantiations(0, "Yes"), m$$42, ty$$16));
  return (0, _List.append)(extMemsDangling$$1, extMemsFromHierarchy$$1);
}

function AllMethInfosOfTypeInScope(infoReader$$8, nenv$$43, optFilter$$8, ad$$24, findFlag$$3, m$$43, ty$$18) {
  return (0, _List.append)(IntrinsicMethInfosOfType(infoReader$$8, optFilter$$8, ad$$24, new _infos.AllowMultiIntfInstantiations(0, "Yes"), findFlag$$3, m$$43, ty$$18), ExtensionMethInfosOfTypeInScope(infoReader$$8, nenv$$43, optFilter$$8, m$$43, ty$$18));
}

const IndeterminateType = (0, _Types.declare)(function IndeterminateType(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.IndeterminateType = IndeterminateType;
const LookupKind = (0, _Types.declare)(function LookupKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.LookupKind = LookupKind;

function TryFindUnionCaseOfType(g$$27, ty$$19, nm$$23) {
  if ((0, _TastOps.isAppTy)(g$$27, ty$$19)) {
    const patternInput$$1 = (0, _TastOps.destAppTy)(g$$27, ty$$19);
    const matchValue$$36 = (0, _tast.EntityRef$$GetUnionCaseByName$$Z721C83C5)(patternInput$$1[0], nm$$23);

    if (matchValue$$36 != null) {
      const ucase$$1 = matchValue$$36;
      return new _infos.UnionCaseInfo(0, "UnionCaseInfo", patternInput$$1[1], (0, _tast.EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7)(patternInput$$1[0], ucase$$1));
    } else {
      return null;
    }
  } else {
    return null;
  }
}

function CoreDisplayName(pinfo$$4) {
  if (pinfo$$4.tag === 1) {
    return (0, _il.ILPropertyDef$$get_Name)(pinfo$$4.fields[0].fields[1]);
  } else if (pinfo$$4.fields[3] != null) {
    const set = pinfo$$4.fields[3];
    return (0, _tast.ValRef$$get_CoreDisplayName)(set);
  } else if (pinfo$$4.fields[2] != null) {
    const get = pinfo$$4.fields[2];
    return (0, _tast.ValRef$$get_CoreDisplayName)(get);
  } else {
    throw new Error("unexpected (property must have either getter or setter)");
  }
}

function DecodeFSharpEvent(pinfos$$4, ad$$25, g$$28, ncenv$$8, m$$44) {
  var pinfo$$5;
  var $target$$154, pinfo$$6;

  if (pinfos$$4.tail != null) {
    if (pinfos$$4.tail.tail == null) {
      if (pinfo$$5 = pinfos$$4.head, (0, _infos.PropInfo$$get_IsFSharpEventProperty)(pinfo$$5)) {
        $target$$154 = 0;
        pinfo$$6 = pinfos$$4.head;
      } else {
        $target$$154 = 1;
      }
    } else {
      $target$$154 = 1;
    }
  } else {
    $target$$154 = 1;
  }

  switch ($target$$154) {
    case 0:
      {
        const nm$$24 = CoreDisplayName(pinfo$$6);
        const minfos1 = (0, _InfoReader.GetImmediateIntrinsicMethInfosOfType)("add_" + nm$$24, ad$$25, g$$28, NameResolver$$get_amap(ncenv$$8), m$$44, (0, _infos.PropInfo$$get_ApparentEnclosingType)(pinfo$$6));
        const minfos2 = (0, _InfoReader.GetImmediateIntrinsicMethInfosOfType)("remove_" + nm$$24, ad$$25, g$$28, NameResolver$$get_amap(ncenv$$8), m$$44, (0, _infos.PropInfo$$get_ApparentEnclosingType)(pinfo$$6));
        const matchValue$$37 = [minfos1, minfos2];
        var $target$$155, addValRef, removeValRef;

        if (matchValue$$37[0].tail != null) {
          if (matchValue$$37[0].head.tag === 0) {
            if (matchValue$$37[0].tail.tail == null) {
              if (matchValue$$37[1].tail != null) {
                if (matchValue$$37[1].head.tag === 0) {
                  if (matchValue$$37[1].tail.tail == null) {
                    $target$$155 = 0;
                    addValRef = matchValue$$37[0].head.fields[2];
                    removeValRef = matchValue$$37[1].head.fields[2];
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
        } else {
          $target$$155 = 1;
        }

        switch ($target$$155) {
          case 0:
            {
              return new Item(8, "Event", new _infos.EventInfo(0, "FSEvent", g$$28, pinfo$$6, addValRef, removeValRef));
            }

          case 1:
            {
              return new Item(9, "Property", nm$$24, pinfos$$4);
            }
        }
      }

    case 1:
      {
        if (pinfos$$4.tail != null) {
          const pinfo$$7 = pinfos$$4.head;
          const nm$$25 = CoreDisplayName(pinfo$$7);
          return new Item(9, "Property", nm$$25, pinfos$$4);
        } else {
          return null;
        }
      }
  }
}

function GetRecordLabelsForType(g$$29, nenv$$44, ty$$20) {
  const result = new Set([]);

  if ((0, _TastOps.isRecdTy)(g$$29, ty$$20)) {
    const typeName = (0, _NicePrint.minimalStringOfType)(nenv$$44.eDisplayEnv, ty$$20);
    (0, _Seq.iterate)(function (forLoopVar) {
      const activePatternResult40296 = forLoopVar;

      if ((0, _List.exists)(function predicate$$10(r$$3) {
        return (0, _tast.EntityRef$$get_DisplayName)((0, _tast.RecdFieldRef$$get_TyconRef)(r$$3)) === typeName;
      }, activePatternResult40296[1])) {
        (0, _Util.addToSet)(activePatternResult40296[0], result);
      }
    }, nenv$$44.eFieldLabels);
  }

  return result;
}

function ResolveLongIdentInTypePrim(ncenv$$9, nenv$$45, lookupKind, resInfo$$7, depth$$3, m$$45, ad$$26, id$$13, rest$$4, findFlag$$4, typeNameResInfo$$2, ty$$21) {
  var rfinfo$$1, einfo$$3, finfo$$2, msets, psets, res$$11, res$$9;
  const g$$30 = NameResolver$$get_g(ncenv$$9);
  const m$$46 = (0, _range.unionRanges)(m$$45, (0, _ast.Ident$$get_idRange)(id$$13));
  const nm$$26 = (0, _ast.Ident$$get_idText)(id$$13);
  const optFilter$$9 = nm$$26;
  let contentsSearchAccessible;
  const unionCaseSearch = lookupKind.tag === 2 ? TryFindUnionCaseOfType(g$$30, ty$$21, nm$$26) : lookupKind.tag === 1 ? TryFindUnionCaseOfType(g$$30, ty$$21, nm$$26) : null;

  if (unionCaseSearch == null) {
    const isLookUpExpr = (0, _Util.equals)(lookupKind, new LookupKind(2, "Expr"));
    const matchValue$$38 = (0, _InfoReader.TryFindIntrinsicNamedItemOfType)(NameResolver$$get_InfoReader(ncenv$$9), nm$$26, ad$$26, findFlag$$4, m$$46, ty$$21);
    var $target$$156, psets$$1;

    if (matchValue$$38 != null) {
      if (matchValue$$38.tag === 1) {
        if (psets = matchValue$$38.fields[0], isLookUpExpr) {
          $target$$156 = 0;
          psets$$1 = matchValue$$38.fields[0];
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
          const pinfos$$6 = (0, _InfoReader.ExcludeHiddenOfPropInfos)(g$$30, NameResolver$$get_amap(ncenv$$9), m$$46, psets$$1);
          const extensionPropInfos = ExtensionPropInfosOfTypeInScope(NameResolver$$get_InfoReader(ncenv$$9), nenv$$45, optFilter$$9, ad$$26, m$$46, ty$$21);
          const matchValue$$39 = DecodeFSharpEvent((0, _List.append)(pinfos$$6, extensionPropInfos), ad$$26, g$$30, ncenv$$9, m$$46);

          if (matchValue$$39 == null) {
            contentsSearchAccessible = (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(depth$$3, _FSComp.SR$$$undefinedNameFieldConstructorOrMember$$Z721C83C5, id$$13, function () {
              return (0, _ErrorLogger.NoSuggestions)();
            }));
          } else {
            const x$$23 = matchValue$$39;
            contentsSearchAccessible = (0, _illib.ResultOrExceptionModule$$$success)((0, _Types.L)([resInfo$$7, x$$23, rest$$4], (0, _Types.L)()));
          }

          break;
        }

      case 1:
        {
          var $target$$157, msets$$1;

          if (matchValue$$38 != null) {
            if (matchValue$$38.tag === 0) {
              if (msets = matchValue$$38.fields[0], isLookUpExpr) {
                $target$$157 = 0;
                msets$$1 = matchValue$$38.fields[0];
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
                const minfos$$10 = (0, _InfoReader.ExcludeHiddenOfMethInfos)(g$$30, NameResolver$$get_amap(ncenv$$9), m$$46, msets$$1);
                const extensionMethInfos = ExtensionMethInfosOfTypeInScope(NameResolver$$get_InfoReader(ncenv$$9), nenv$$45, optFilter$$9, m$$46, ty$$21);
                contentsSearchAccessible = (0, _illib.ResultOrExceptionModule$$$success)((0, _Types.L)([resInfo$$7, Item$$$MakeMethGroup$$18D66E3A(nm$$26, (0, _List.append)(minfos$$10, extensionMethInfos)), rest$$4], (0, _Types.L)()));
                break;
              }

            case 1:
              {
                var $target$$158, finfo$$3;

                if (matchValue$$38 != null) {
                  if (matchValue$$38.tag === 4) {
                    if (matchValue$$38.fields[0].tail != null) {
                      if (finfo$$2 = matchValue$$38.fields[0].head, lookupKind.tag === 2 ? true : lookupKind.tag === 1 ? true : false) {
                        $target$$158 = 0;
                        finfo$$3 = matchValue$$38.fields[0].head;
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
                      contentsSearchAccessible = (0, _illib.ResultOrExceptionModule$$$success)((0, _Types.L)([resInfo$$7, new Item(7, "ILField", finfo$$3), rest$$4], (0, _Types.L)()));
                      break;
                    }

                  case 1:
                    {
                      var $target$$159, einfo$$4;

                      if (matchValue$$38 != null) {
                        if (matchValue$$38.tag === 3) {
                          if (matchValue$$38.fields[0].tail != null) {
                            if (einfo$$3 = matchValue$$38.fields[0].head, isLookUpExpr) {
                              $target$$159 = 0;
                              einfo$$4 = matchValue$$38.fields[0].head;
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
                            contentsSearchAccessible = (0, _illib.ResultOrExceptionModule$$$success)((0, _Types.L)([resInfo$$7, new Item(8, "Event", einfo$$4), rest$$4], (0, _Types.L)()));
                            break;
                          }

                        case 1:
                          {
                            var $target$$160, rfinfo$$2;

                            if (matchValue$$38 != null) {
                              if (matchValue$$38.tag === 2) {
                                if (rfinfo$$1 = matchValue$$38.fields[0], lookupKind.tag === 2 ? true : lookupKind.tag === 0 ? true : lookupKind.tag === 1 ? true : false) {
                                  $target$$160 = 0;
                                  rfinfo$$2 = matchValue$$38.fields[0];
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
                                  contentsSearchAccessible = (0, _illib.ResultOrExceptionModule$$$success)((0, _Types.L)([resInfo$$7, new Item(5, "RecdField", rfinfo$$2), rest$$4], (0, _Types.L)()));
                                  break;
                                }

                              case 1:
                                {
                                  const pinfos$$7 = ExtensionPropInfosOfTypeInScope(NameResolver$$get_InfoReader(ncenv$$9), nenv$$45, optFilter$$9, ad$$26, m$$46, ty$$21);

                                  if (!(pinfos$$7.tail == null) ? isLookUpExpr : false) {
                                    contentsSearchAccessible = OneResult((0, _illib.ResultOrExceptionModule$$$success)([resInfo$$7, new Item(9, "Property", nm$$26, pinfos$$7), rest$$4]));
                                  } else {
                                    const minfos$$11 = ExtensionMethInfosOfTypeInScope(NameResolver$$get_InfoReader(ncenv$$9), nenv$$45, optFilter$$9, m$$46, ty$$21);
                                    contentsSearchAccessible = (!(minfos$$11.tail == null) ? isLookUpExpr : false) ? (0, _illib.ResultOrExceptionModule$$$success)((0, _Types.L)([resInfo$$7, Item$$$MakeMethGroup$$18D66E3A(nm$$26, minfos$$11), rest$$4], (0, _Types.L)())) : (0, _TastOps.isTyparTy)(g$$30, ty$$21) ? (0, _illib.ResultOrExceptionModule$$$raze)(new IndeterminateType((0, _range.unionRanges)(m$$46, (0, _ast.Ident$$get_idRange)(id$$13)))) : NoResultsOrUsefulErrors();
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
  } else {
    const ucase$$2 = unionCaseSearch;
    contentsSearchAccessible = OneResult((0, _illib.ResultOrExceptionModule$$$success)([resInfo$$7, new Item(1, "UnionCase", ucase$$2, false), rest$$4]));
  }

  var $target$$161, res$$10;

  if (contentsSearchAccessible.tag === 0) {
    if (res$$9 = contentsSearchAccessible.fields[0], !(res$$9.tail == null)) {
      $target$$161 = 0;
      res$$10 = contentsSearchAccessible.fields[0];
    } else {
      $target$$161 = 1;
    }
  } else {
    $target$$161 = 1;
  }

  switch ($target$$161) {
    case 0:
      {
        return contentsSearchAccessible;
      }

    case 1:
      {
        if (contentsSearchAccessible.tag === 1) {
          return contentsSearchAccessible;
        } else {
          let nestedSearchAccessible;

          if (rest$$4.tail != null) {
            const rest2$$2 = rest$$4.tail;
            const id2$$5 = rest$$4.head;
            const nestedTypes$$1 = GetNestedTypesOfType(ad$$26, ncenv$$9, nm$$26, new TypeNameResolutionStaticArgsInfo(0, "Indefinite"), true, m$$46, ty$$21);
            nestedSearchAccessible = ResolveLongIdentInNestedTypes(ncenv$$9, nenv$$45, lookupKind, resInfo$$7, depth$$3 + 1, id$$13, m$$46, ad$$26, id2$$5, rest2$$2, findFlag$$4, typeNameResInfo$$2, nestedTypes$$1);
          } else {
            const nestedTypes = GetNestedTypesOfType(ad$$26, ncenv$$9, nm$$26, TypeNameResolutionInfo$$get_StaticArgsInfo(typeNameResInfo$$2), true, m$$46, ty$$21);
            nestedSearchAccessible = nestedTypes.tail == null ? NoResultsOrUsefulErrors() : TypeNameResolutionInfo$$get_ResolutionFlag(typeNameResInfo$$2).tag === 1 ? OneSuccess([resInfo$$7, new Item(14, "Types", nm$$26, nestedTypes), rest$$4]) : MapResults(function f$$19(tupledArg$$9) {
              return [tupledArg$$9[0], tupledArg$$9[1], (0, _Types.L)()];
            }, CollectAtMostOneResult(function f$$18(ty$$22) {
              return ResolveObjectConstructorPrim(ncenv$$9, nenv$$45.eDisplayEnv, resInfo$$7, m$$46, ad$$26, ty$$22);
            }, nestedTypes));
          }

          var $target$$162, res$$12;

          if (nestedSearchAccessible.tag === 0) {
            if (res$$11 = nestedSearchAccessible.fields[0], !(res$$11.tail == null)) {
              $target$$162 = 0;
              res$$12 = nestedSearchAccessible.fields[0];
            } else {
              $target$$162 = 1;
            }
          } else {
            $target$$162 = 1;
          }

          switch ($target$$162) {
            case 0:
              {
                return nestedSearchAccessible;
              }

            case 1:
              {
                const suggestMembers = function suggestMembers() {
                  const suggestions1$$2 = (0, _List.map)(function mapping$$20(p$$2) {
                    return (0, _infos.PropInfo$$get_PropertyName)(p$$2);
                  }, ExtensionPropInfosOfTypeInScope(NameResolver$$get_InfoReader(ncenv$$9), nenv$$45, null, ad$$26, m$$46, ty$$21));
                  const suggestions2$$2 = (0, _List.map)(function mapping$$21(m$$47) {
                    return (0, _infos.MethInfo$$get_DisplayName)(m$$47);
                  }, ExtensionMethInfosOfTypeInScope(NameResolver$$get_InfoReader(ncenv$$9), nenv$$45, null, m$$46, ty$$21));
                  const suggestions3 = (0, _List.map)(function mapping$$22(p$$3) {
                    return (0, _infos.PropInfo$$get_PropertyName)(p$$3);
                  }, (0, _InfoReader.GetIntrinsicPropInfosOfType)(NameResolver$$get_InfoReader(ncenv$$9), null, ad$$26, new _infos.AllowMultiIntfInstantiations(1, "No"), findFlag$$4, m$$46, ty$$21));
                  const suggestions4 = (0, _List.map)(function mapping$$23(m$$49) {
                    return (0, _infos.MethInfo$$get_DisplayName)(m$$49);
                  }, (0, _List.filter)(function predicate$$11(m$$48) {
                    if (!(0, _infos.MethInfo$$get_IsClassConstructor)(m$$48)) {
                      return !(0, _infos.MethInfo$$get_IsConstructor)(m$$48);
                    } else {
                      return false;
                    }
                  }, (0, _InfoReader.GetIntrinsicMethInfosOfType)(NameResolver$$get_InfoReader(ncenv$$9), null, ad$$26, new _infos.AllowMultiIntfInstantiations(1, "No"), findFlag$$4, m$$46, ty$$21)));
                  const suggestions5 = GetRecordLabelsForType(g$$30, nenv$$45, ty$$21);
                  let suggestions6;
                  var $target$$163;

                  switch (lookupKind.tag) {
                    case 2:
                    case 1:
                      $target$$163 = 0;
                      break;

                    default:
                      $target$$163 = 1;
                  }

                  switch ($target$$163) {
                    case 0:
                      {
                        if ((0, _TastOps.isAppTy)(g$$30, ty$$21)) {
                          const patternInput$$2 = (0, _TastOps.destAppTy)(g$$30, ty$$21);
                          suggestions6 = (0, _Array.map)(function mapping$$24(uc$$1) {
                            return (0, _tast.UnionCase$$get_DisplayName)(uc$$1);
                          }, (0, _tast.EntityRef$$get_UnionCasesArray)(patternInput$$2[0]), Array);
                        } else {
                          suggestions6 = [];
                        }

                        break;
                      }

                    case 1:
                      {
                        suggestions6 = [];
                        break;
                      }
                  }

                  return new Set((0, _List.ofSeq)((0, _Seq.delay)(function () {
                    return (0, _Seq.append)(suggestions1$$2, (0, _Seq.delay)(function () {
                      return (0, _Seq.append)(suggestions2$$2, (0, _Seq.delay)(function () {
                        return (0, _Seq.append)(suggestions3, (0, _Seq.delay)(function () {
                          return (0, _Seq.append)(suggestions4, (0, _Seq.delay)(function () {
                            return (0, _Seq.append)(suggestions5, (0, _Seq.delay)(function () {
                              return suggestions6;
                            }));
                          }));
                        }));
                      }));
                    }));
                  })));
                };

                return (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(depth$$3, _FSComp.SR$$$undefinedNameFieldConstructorOrMember$$Z721C83C5, id$$13, suggestMembers));
              }
          }
        }
      }
  }
}

function ResolveLongIdentInNestedTypes(ncenv$$10, nenv$$46, lookupKind$$1, resInfo$$9, depth$$4, id$$14, m$$50, ad$$27, id2$$6, rest$$5, findFlag$$5, typeNameResInfo$$3, tys) {
  return CollectAtMostOneResult(function f$$20(ty$$23) {
    const resInfo$$10 = (0, _TastOps.isAppTy)(NameResolver$$get_g(ncenv$$10), ty$$23) ? ResolutionInfo$$AddEntity$$Z30807AE9(resInfo$$9, [(0, _ast.Ident$$get_idRange)(id$$14), (0, _TastOps.tcrefOfAppTy)(NameResolver$$get_g(ncenv$$10), ty$$23)]) : resInfo$$9;
    return AtMostOneResult(m$$50, ResolveLongIdentInTypePrim(ncenv$$10, nenv$$46, lookupKind$$1, resInfo$$10, depth$$4, m$$50, ad$$27, id2$$6, rest$$5, findFlag$$5, typeNameResInfo$$3, ty$$23));
  }, tys);
}

function ResolveLongIdentInType(sink$$23, ncenv$$11, nenv$$47, lookupKind$$2, m$$51, ad$$28, id$$15, findFlag$$6, typeNameResInfo$$4, ty$$24) {
  const patternInput$$3 = (0, _illib.ResultOrExceptionModule$$$ForceRaise)(AtMostOneResult(m$$51, ResolveLongIdentInTypePrim(ncenv$$11, nenv$$47, lookupKind$$2, ResolutionInfo$$$get_Empty(), 0, m$$51, ad$$28, id$$15, (0, _Types.L)(), findFlag$$6, typeNameResInfo$$4, ty$$24)));
  ResolutionInfo$$$SendEntityPathToSink$$Z7B7DC02C(sink$$23, ncenv$$11, nenv$$47, new ItemOccurence(2, "UseInType"), ad$$28, patternInput$$3[0], new ResultTyparChecker(0, "ResultTyparChecker", function () {
    return CheckAllTyparsInferrable(NameResolver$$get_amap(ncenv$$11), m$$51, patternInput$$3[1]);
  }));
  return [patternInput$$3[1], patternInput$$3[2]];
}

function ResolveLongIdentInTyconRef(ncenv$$12, nenv$$48, lookupKind$$3, resInfo$$12, depth$$5, m$$52, ad$$29, id$$16, rest$$7, typeNameResInfo$$5, tcref$$34) {
  const ty$$25 = FreshenTycon(ncenv$$12, m$$52, tcref$$34);
  return ResolveLongIdentInTypePrim(ncenv$$12, nenv$$48, lookupKind$$3, resInfo$$12, depth$$5, m$$52, ad$$29, id$$16, rest$$7, new _InfoReader.FindMemberFlag(0, "IgnoreOverrides"), typeNameResInfo$$5, ty$$25);
}

function ResolveLongIdentInTyconRefs(atMostOne$$2, ncenv$$13, nenv$$49, lookupKind$$4, depth$$6, m$$53, ad$$30, id$$17, rest$$8, typeNameResInfo$$6, idRange, tcrefs$$12) {
  return CollectResults2(atMostOne$$2, function (tupledArg$$10) {
    const resInfo$$14 = ResolutionInfo$$AddEntity$$Z30807AE9(tupledArg$$10[0], [idRange, tupledArg$$10[1]]);
    return AtMostOneResult(m$$53, ResolveLongIdentInTyconRef(ncenv$$13, nenv$$49, lookupKind$$4, resInfo$$14, depth$$6, m$$53, ad$$30, id$$17, rest$$8, typeNameResInfo$$6, tupledArg$$10[1]));
  })(tcrefs$$12);
}

function $007CAccessibleEntityRef$007C_$007C(amap$$18, m$$54, ad$$31, modref$$21, mspec$$1) {
  const eref$$1 = (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$21, mspec$$1);

  if ((0, _AccessibilityLogic.IsEntityAccessible)(amap$$18, m$$54, ad$$31, eref$$1)) {
    return eref$$1;
  } else {
    return null;
  }
}

function ResolveExprLongIdentInModuleOrNamespace(ncenv$$14, nenv$$50, typeNameResInfo$$7, ad$$32, resInfo$$15, depth$$7, m$$55, modref$$22, mty$$6, id$$18, rest$$9) {
  var tycon$$6, res$$17, excon, vspec$$3;
  const m$$56 = (0, _range.unionRanges)(m$$55, (0, _ast.Ident$$get_idRange)(id$$18));
  const matchValue$$41 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_AllValsByLogicalName)(mty$$6), (0, _ast.Ident$$get_idText)(id$$18));
  var $target$$164, vspec$$4;

  if (matchValue$$41 != null) {
    if (vspec$$3 = matchValue$$41, (0, _AccessibilityLogic.IsValAccessible)(ad$$32, (0, _tast.mkNestedValRef)(modref$$22, vspec$$3))) {
      $target$$164 = 0;
      vspec$$4 = matchValue$$41;
    } else {
      $target$$164 = 1;
    }
  } else {
    $target$$164 = 1;
  }

  switch ($target$$164) {
    case 0:
      {
        return (0, _illib.ResultOrExceptionModule$$$success)([resInfo$$15, new Item(0, "Value", (0, _tast.mkNestedValRef)(modref$$22, vspec$$4)), rest$$9]);
      }

    case 1:
      {
        const matchValue$$42 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_ExceptionDefinitionsByDemangledName)(mty$$6), (0, _ast.Ident$$get_idText)(id$$18));
        var $target$$165, excon$$1;

        if (matchValue$$42 != null) {
          if (excon = matchValue$$42, (0, _AccessibilityLogic.IsTyconReprAccessible)(NameResolver$$get_amap(ncenv$$14), m$$56, ad$$32, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$22, excon))) {
            $target$$165 = 0;
            excon$$1 = matchValue$$42;
          } else {
            $target$$165 = 1;
          }
        } else {
          $target$$165 = 1;
        }

        switch ($target$$165) {
          case 0:
            {
              return (0, _illib.ResultOrExceptionModule$$$success)([resInfo$$15, new Item(4, "ExnCase", (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$22, excon$$1)), rest$$9]);
            }

          case 1:
            {
              let patternInput$$4;
              const matchValue$$43 = TryFindTypeWithUnionCase(modref$$22, id$$18);
              var $target$$166, tycon$$7;

              if (matchValue$$43 != null) {
                if (tycon$$6 = matchValue$$43, (0, _AccessibilityLogic.IsTyconReprAccessible)(NameResolver$$get_amap(ncenv$$14), m$$56, ad$$32, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$22, tycon$$6))) {
                  $target$$166 = 0;
                  tycon$$7 = matchValue$$43;
                } else {
                  $target$$166 = 1;
                }
              } else {
                $target$$166 = 1;
              }

              switch ($target$$166) {
                case 0:
                  {
                    const ucref$$6 = (0, _tast.mkUnionCaseRef)((0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$22, tycon$$7), (0, _ast.Ident$$get_idText)(id$$18));
                    const ucinfo = FreshenUnionCaseRef(ncenv$$14, m$$56, ucref$$6);
                    const hasRequireQualifiedAccessAttribute = (0, _TastOps.HasFSharpAttribute)(NameResolver$$get_g(ncenv$$14), (0, _TcGlobals.TcGlobals$$get_attrib_RequireQualifiedAccessAttribute)(NameResolver$$get_g(ncenv$$14)), (0, _tast.Entity$$get_Attribs)(tycon$$7));
                    patternInput$$4 = [(0, _illib.ResultOrExceptionModule$$$success)((0, _Types.L)([resInfo$$15, new Item(1, "UnionCase", ucinfo, hasRequireQualifiedAccessAttribute), rest$$9], (0, _Types.L)())), hasRequireQualifiedAccessAttribute];
                    break;
                  }

                case 1:
                  {
                    patternInput$$4 = [NoResultsOrUsefulErrors(), false];
                    break;
                  }
              }

              var $target$$167, res$$18;

              if (patternInput$$4[0].tag === 0) {
                if (patternInput$$4[0].fields[0].tail != null) {
                  if (res$$17 = patternInput$$4[0].fields[0].head, !patternInput$$4[1]) {
                    $target$$167 = 0;
                    res$$18 = patternInput$$4[0].fields[0].head;
                  } else {
                    $target$$167 = 1;
                  }
                } else {
                  $target$$167 = 1;
                }
              } else {
                $target$$167 = 1;
              }

              switch ($target$$167) {
                case 0:
                  {
                    return (0, _illib.ResultOrExceptionModule$$$success)(res$$18);
                  }

                case 1:
                  {
                    let tyconSearch;
                    const tcrefs$$13 = LookupTypeNameInEntityMaybeHaveArity(NameResolver$$get_amap(ncenv$$14), (0, _ast.Ident$$get_idRange)(id$$18), ad$$32, (0, _ast.Ident$$get_idText)(id$$18), rest$$9.tail == null ? TypeNameResolutionInfo$$get_StaticArgsInfo(typeNameResInfo$$7) : new TypeNameResolutionStaticArgsInfo(0, "Indefinite"), modref$$22);

                    if (tcrefs$$13.tail == null) {
                      tyconSearch = NoResultsOrUsefulErrors();
                    } else {
                      const tcrefs$$14 = (0, _List.map)(function mapping$$25(tcref$$37) {
                        return [resInfo$$15, tcref$$37];
                      }, tcrefs$$13);

                      if (rest$$9.tail != null) {
                        const rest2$$3 = rest$$9.tail;
                        const id2$$7 = rest$$9.head;
                        const tcrefs$$15 = CheckForTypeLegitimacyAndMultipleGenericTypeAmbiguities(tcrefs$$14, new TypeNameResolutionInfo(0, "TypeNameResolutionInfo", new TypeNameResolutionFlag(1, "ResolveTypeNamesToTypeRefs"), new TypeNameResolutionStaticArgsInfo(0, "Indefinite")), new PermitDirectReferenceToGeneratedType(1, "No"), (0, _range.unionRanges)(m$$56, (0, _ast.Ident$$get_idRange)(id$$18)));
                        tyconSearch = ResolveLongIdentInTyconRefs(new ResultCollectionSettings(1, "AtMostOneResult"), ncenv$$14, nenv$$50, new LookupKind(2, "Expr"), depth$$7 + 1, m$$56, ad$$32, id2$$7, rest2$$3, typeNameResInfo$$7, (0, _ast.Ident$$get_idRange)(id$$18), tcrefs$$15);
                      } else {
                        const tcrefs$$16 = CheckForTypeLegitimacyAndMultipleGenericTypeAmbiguities(tcrefs$$14, typeNameResInfo$$7, new PermitDirectReferenceToGeneratedType(1, "No"), (0, _range.unionRanges)(m$$56, (0, _ast.Ident$$get_idRange)(id$$18)));
                        tyconSearch = TypeNameResolutionInfo$$get_ResolutionFlag(typeNameResInfo$$7).tag === 0 ? MapResults(function f$$22(tupledArg$$13) {
                          return [tupledArg$$13[0], tupledArg$$13[1], (0, _Types.L)()];
                        }, CollectAtMostOneResult(function f$$21(tupledArg$$12) {
                          return ResolveObjectConstructorPrim(ncenv$$14, nenv$$50.eDisplayEnv, tupledArg$$12[0], (0, _ast.Ident$$get_idRange)(id$$18), ad$$32, tupledArg$$12[1]);
                        }, (0, _List.map)(function mapping$$26(tupledArg$$11) {
                          return [tupledArg$$11[0], FreshenTycon(ncenv$$14, m$$56, tupledArg$$11[1])];
                        }, tcrefs$$16))) : (0, _illib.ResultOrExceptionModule$$$success)((0, _List.ofSeq)((0, _Seq.delay)(function () {
                          return (0, _Seq.collect)(function (matchValue$$45) {
                            const ty$$27 = FreshenTycon(ncenv$$14, m$$56, matchValue$$45[1]);
                            const item$$28 = [matchValue$$45[0], new Item(14, "Types", (0, _ast.Ident$$get_idText)(id$$18), (0, _Types.L)(ty$$27, (0, _Types.L)())), (0, _Types.L)()];
                            return (0, _Seq.singleton)(item$$28);
                          }, tcrefs$$16);
                        })));
                      }
                    }

                    const moduleSearch = function moduleSearch() {
                      if (rest$$9.tail != null) {
                        const rest2$$4 = rest$$9.tail;
                        const id2$$8 = rest$$9.head;
                        const matchValue$$46 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$6), (0, _ast.Ident$$get_idText)(id$$18));
                        var $target$$168, submodref;

                        if (matchValue$$46 != null) {
                          const activePatternResult40394 = $007CAccessibleEntityRef$007C_$007C(NameResolver$$get_amap(ncenv$$14), m$$56, ad$$32, modref$$22, matchValue$$46);

                          if (activePatternResult40394 != null) {
                            $target$$168 = 0;
                            submodref = activePatternResult40394;
                          } else {
                            $target$$168 = 1;
                          }
                        } else {
                          $target$$168 = 1;
                        }

                        switch ($target$$168) {
                          case 0:
                            {
                              const resInfo$$20 = ResolutionInfo$$AddEntity$$Z30807AE9(resInfo$$15, [(0, _ast.Ident$$get_idRange)(id$$18), submodref]);
                              return OneResult(ResolveExprLongIdentInModuleOrNamespace(ncenv$$14, nenv$$50, typeNameResInfo$$7, ad$$32, resInfo$$20, depth$$7 + 1, m$$56, submodref, (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(submodref), id2$$8, rest2$$4));
                            }

                          case 1:
                            {
                              return NoResultsOrUsefulErrors();
                            }
                        }
                      } else {
                        return NoResultsOrUsefulErrors();
                      }
                    };

                    const matchValue$$47 = AtMostOneResultQuery(function query2$$2() {
                      return patternInput$$4[0];
                    }, AtMostOneResultQuery(moduleSearch, tyconSearch));
                    var $target$$169, results;

                    if (matchValue$$47.tag === 0) {
                      if (matchValue$$47.fields[0].tail == null) {
                        $target$$169 = 0;
                      } else {
                        $target$$169 = 1;
                        results = matchValue$$47;
                      }
                    } else {
                      $target$$169 = 1;
                      results = matchValue$$47;
                    }

                    switch ($target$$169) {
                      case 0:
                        {
                          const suggestPossibleTypesAndNames = function suggestPossibleTypesAndNames() {
                            const types = (0, _Seq.map)(function mapping$$27(e$$6) {
                              return (0, _tast.Entity$$get_DisplayName)(e$$6);
                            }, (0, _Seq.filter)(function predicate$$12(e$$5) {
                              return (0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$14), m$$56, ad$$32, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$22, e$$5));
                            }, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$22))));
                            const submodules = (0, _Seq.map)(function mapping$$28(e$$7) {
                              return (0, _tast.Entity$$get_DisplayName)(e$$7[1]);
                            }, (0, _Seq.filter)(function predicate$$13(kv$$2) {
                              return (0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$14), m$$56, ad$$32, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$22, kv$$2[1]));
                            }, (0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$6)));
                            const unions = (0, _Seq.map)(function mapping$$30(uc$$2) {
                              return (0, _tast.UnionCase$$get_DisplayName)(uc$$2);
                            }, (0, _Seq.collect)(function mapping$$29(tycon$$8) {
                              const hasRequireQualifiedAccessAttribute$$2 = (0, _TastOps.HasFSharpAttribute)(NameResolver$$get_g(ncenv$$14), (0, _TcGlobals.TcGlobals$$get_attrib_RequireQualifiedAccessAttribute)(NameResolver$$get_g(ncenv$$14)), (0, _tast.Entity$$get_Attribs)(tycon$$8));

                              if (hasRequireQualifiedAccessAttribute$$2) {
                                return [];
                              } else {
                                return (0, _tast.Entity$$get_UnionCasesArray)(tycon$$8);
                              }
                            }, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$22))));
                            const vals = (0, _Seq.map)(function mapping$$31(e$$9) {
                              return (0, _tast.Val$$get_DisplayName)(e$$9[1]);
                            }, (0, _Seq.filter)(function predicate$$14(e$$8) {
                              return (0, _AccessibilityLogic.IsValAccessible)(ad$$32, (0, _tast.mkNestedValRef)(modref$$22, e$$8[1]));
                            }, (0, _tast.ModuleOrNamespaceType$$get_AllValsByLogicalName)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$22))));
                            const exns = (0, _Seq.map)(function mapping$$32(e$$11) {
                              return (0, _tast.Entity$$get_DisplayName)(e$$11[1]);
                            }, (0, _Seq.filter)(function predicate$$15(e$$10) {
                              return (0, _AccessibilityLogic.IsTyconReprAccessible)(NameResolver$$get_amap(ncenv$$14), m$$56, ad$$32, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$22, e$$10[1]));
                            }, (0, _tast.ModuleOrNamespaceType$$get_ExceptionDefinitionsByDemangledName)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$22))));
                            return new Set((0, _List.ofSeq)((0, _Seq.delay)(function () {
                              return (0, _Seq.append)(types, (0, _Seq.delay)(function () {
                                return (0, _Seq.append)(submodules, (0, _Seq.delay)(function () {
                                  return (0, _Seq.append)(unions, (0, _Seq.delay)(function () {
                                    return (0, _Seq.append)(vals, (0, _Seq.delay)(function () {
                                      return exns;
                                    }));
                                  }));
                                }));
                              }));
                            })));
                          };

                          return (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(depth$$7, _FSComp.SR$$$undefinedNameValueConstructorNamespaceOrType$$Z721C83C5, id$$18, suggestPossibleTypesAndNames));
                        }

                      case 1:
                        {
                          return AtMostOneResult((0, _ast.Ident$$get_idRange)(id$$18), results);
                        }
                    }
                  }
              }
            }
        }
      }
  }
}

function ChooseTyconRefInExpr(ncenv$$15, m$$57, ad$$33, nenv$$51, id$$19, typeNameResInfo$$8, resInfo$$21, tcrefs$$17) {
  const tcrefs$$18 = (0, _List.map)(function mapping$$33(tcref$$40) {
    return [resInfo$$21, tcref$$40];
  }, tcrefs$$17);
  const tcrefs$$19 = CheckForTypeLegitimacyAndMultipleGenericTypeAmbiguities(tcrefs$$18, typeNameResInfo$$8, new PermitDirectReferenceToGeneratedType(1, "No"), m$$57);

  if (TypeNameResolutionInfo$$get_ResolutionFlag(typeNameResInfo$$8).tag === 1) {
    const tys$$2 = (0, _List.map)(function mapping$$35(tupledArg$$17) {
      return [tupledArg$$17[0], FreshenTycon(ncenv$$15, m$$57, tupledArg$$17[1])];
    }, tcrefs$$19);
    return (0, _illib.ResultOrExceptionModule$$$success)((0, _List.map)(function mapping$$36(tupledArg$$18) {
      return [tupledArg$$18[0], new Item(14, "Types", (0, _ast.Ident$$get_idText)(id$$19), (0, _Types.L)(tupledArg$$18[1], (0, _Types.L)())), (0, _Types.L)()];
    }, tys$$2));
  } else {
    const tys$$1 = (0, _List.map)(function mapping$$34(tupledArg$$14) {
      return [tupledArg$$14[0], FreshenTycon(ncenv$$15, m$$57, tupledArg$$14[1])];
    }, tcrefs$$19);
    return MapResults(function f$$24(tupledArg$$16) {
      return [tupledArg$$16[0], tupledArg$$16[1], (0, _Types.L)()];
    }, CollectAtMostOneResult(function f$$23(tupledArg$$15) {
      return ResolveObjectConstructorPrim(ncenv$$15, nenv$$51.eDisplayEnv, tupledArg$$15[0], (0, _ast.Ident$$get_idRange)(id$$19), ad$$33, tupledArg$$15[1]);
    }, tys$$1));
  }
}

function ResolveExprLongIdentPrim(sink$$24, ncenv$$16, first$$2, fullyQualified$$2, m$$58, ad$$34, nenv$$52, typeNameResInfo$$9, id$$20, rest$$10, isOpenDecl$$2) {
  var suggestionsF, id1$$3;

  ResolveExprLongIdentPrim: while (true) {
    const resInfo$$27 = ResolutionInfo$$$get_Empty();

    if (first$$2 ? (0, _ast.Ident$$get_idText)(id$$20) === "`global`" : false) {
      if (rest$$10.tail != null) {
        if (rest$$10.tail.tail == null) {
          sink$$24 = sink$$24;
          ncenv$$16 = ncenv$$16;
          first$$2 = false;
          fullyQualified$$2 = fullyQualified$$2;
          m$$58 = m$$58;
          ad$$34 = ad$$34;
          nenv$$52 = nenv$$52;
          typeNameResInfo$$9 = typeNameResInfo$$9;
          id$$20 = rest$$10.head;
          rest$$10 = (0, _Types.L)();
          isOpenDecl$$2 = isOpenDecl$$2;
          continue ResolveExprLongIdentPrim;
        } else {
          sink$$24 = sink$$24;
          ncenv$$16 = ncenv$$16;
          first$$2 = false;
          fullyQualified$$2 = new FullyQualifiedFlag(0, "FullyQualified");
          m$$58 = m$$58;
          ad$$34 = ad$$34;
          nenv$$52 = nenv$$52;
          typeNameResInfo$$9 = typeNameResInfo$$9;
          id$$20 = rest$$10.head;
          rest$$10 = rest$$10.tail;
          isOpenDecl$$2 = isOpenDecl$$2;
          continue ResolveExprLongIdentPrim;
        }
      } else {
        return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrGlobalUsedOnlyAsFirstName)(), (0, _ast.Ident$$get_idRange)(id$$20)));
      }
    } else if (rest$$10.tail == null ? !(0, _Util.equals)(fullyQualified$$2, new FullyQualifiedFlag(0, "FullyQualified")) : false) {
      const typeError = new _Types.FSharpRef(null);
      let envSearch;
      const matchValue$$49 = (0, _Map.FSharpMap$$TryFind$$2B595)(nenv$$52.eUnqualifiedItems, (0, _ast.Ident$$get_idText)(id$$20));

      if (matchValue$$49 == null) {
        envSearch = null;
      } else if (matchValue$$49.tag === 22) {
        const tcrefs$$21 = (0, _List.filter)(function predicate$$16(tcref$$43) {
          if (TypeNameResolutionStaticArgsInfo$$get_HasNoStaticArgsInfo(TypeNameResolutionInfo$$get_StaticArgsInfo(typeNameResInfo$$9))) {
            return true;
          } else {
            return TypeNameResolutionStaticArgsInfo$$get_NumStaticArgs(TypeNameResolutionInfo$$get_StaticArgsInfo(typeNameResInfo$$9)) === (0, _List.length)((0, _tast.EntityRef$$Typars$$4DB9192C)(tcref$$43, m$$58));
          }
        }, matchValue$$49.fields[0]);
        const search = ChooseTyconRefInExpr(ncenv$$16, m$$58, ad$$34, nenv$$52, id$$20, typeNameResInfo$$9, resInfo$$27, tcrefs$$21);
        const matchValue$$50 = AtMostOneResult(m$$58, search);

        if (matchValue$$50.tag === 1) {
          const e$$12 = matchValue$$50.fields[0];
          typeError.contents = e$$12;
          envSearch = null;
        } else {
          const res$$19 = matchValue$$50;
          const patternInput$$5 = (0, _illib.ResultOrExceptionModule$$$ForceRaise)(res$$19);
          ResolutionInfo$$$SendEntityPathToSink$$Z7B7DC02C(sink$$24, ncenv$$16, nenv$$52, new ItemOccurence(1, "Use"), ad$$34, patternInput$$5[0], new ResultTyparChecker(0, "ResultTyparChecker", function () {
            return CheckAllTyparsInferrable(NameResolver$$get_amap(ncenv$$16), m$$58, patternInput$$5[1]);
          }));
          envSearch = [patternInput$$5[1], patternInput$$5[2]];
        }
      } else {
        const res$$20 = matchValue$$49;
        envSearch = [FreshenUnqualifiedItem(ncenv$$16, m$$58, res$$20), (0, _Types.L)()];
      }

      if (envSearch == null) {
        let innerSearch;
        let ctorSearch;
        const tcrefs$$22 = LookupTypeNameInEnvMaybeHaveArity(fullyQualified$$2, (0, _ast.Ident$$get_idText)(id$$20), typeNameResInfo$$9, nenv$$52);
        ctorSearch = ChooseTyconRefInExpr(ncenv$$16, m$$58, ad$$34, nenv$$52, id$$20, typeNameResInfo$$9, resInfo$$27, tcrefs$$22);

        const implicitOpSearch = function implicitOpSearch() {
          if ((0, _PrettyNaming.IsMangledOpName)((0, _ast.Ident$$get_idText)(id$$20))) {
            return (0, _illib.ResultOrExceptionModule$$$success)((0, _Types.L)([resInfo$$27, new Item(19, "ImplicitOp", id$$20, new _Types.FSharpRef(null)), (0, _Types.L)()], (0, _Types.L)()));
          } else {
            return NoResultsOrUsefulErrors();
          }
        };

        innerSearch = AtMostOneResultQuery(implicitOpSearch, ctorSearch);
        let patternInput$$6;
        const matchValue$$51 = AtMostOneResult(m$$58, innerSearch);

        if (matchValue$$51.tag === 0) {
          const res$$22 = matchValue$$51;
          patternInput$$6 = (0, _illib.ResultOrExceptionModule$$$ForceRaise)(res$$22);
        } else {
          let failingCase;
          const matchValue$$52 = typeError.contents;

          if (matchValue$$52 != null) {
            const e$$13 = matchValue$$52;
            failingCase = (0, _illib.ResultOrExceptionModule$$$raze)(e$$13);
          } else {
            const suggestNamesAndTypes = function suggestNamesAndTypes() {
              const suggestedNames = (0, _Seq.map)(function mapping$$37(e$$14) {
                return Item$$get_DisplayName(e$$14[1]);
              }, nenv$$52.eUnqualifiedItems);
              const suggestedTypes = (0, _Seq.map)(function mapping$$38(e$$16) {
                return (0, _tast.EntityRef$$get_DisplayName)(e$$16[1]);
              }, (0, _Seq.filter)(function predicate$$17(e$$15) {
                return (0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$16), m$$58, ad$$34, e$$15[1]);
              }, NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D(nenv$$52, fullyQualified$$2)));
              const suggestedModulesAndNamespaces = (0, _Seq.collect)(function mapping$$40(e$$17) {
                return (0, _Types.L)((0, _tast.EntityRef$$get_DisplayName)(e$$17), (0, _Types.L)((0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(e$$17), (0, _Types.L)()));
              }, (0, _Seq.filter)(function predicate$$18(modref$$23) {
                return (0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$16), m$$58, ad$$34, modref$$23);
              }, (0, _Seq.collect)(function mapping$$39(kv$$3) {
                return kv$$3[1];
              }, NameResolutionEnv$$ModulesAndNamespaces$$5B75656D(nenv$$52, fullyQualified$$2))));
              const unions$$1 = (0, _Seq.map)(function mapping$$41(t$$2) {
                return (0, _tast.EntityRef$$get_DisplayName)(t$$2) + "." + (0, _ast.Ident$$get_idText)(id$$20);
              }, (0, _Seq.choose)(function chooser$$3(e$$18) {
                const hasRequireQualifiedAccessAttribute$$3 = (0, _TastOps.HasFSharpAttribute)(NameResolver$$get_g(ncenv$$16), (0, _TcGlobals.TcGlobals$$get_attrib_RequireQualifiedAccessAttribute)(NameResolver$$get_g(ncenv$$16)), (0, _tast.EntityRef$$get_Attribs)(e$$18[1]));

                if (!hasRequireQualifiedAccessAttribute$$3) {
                  return null;
                } else if ((0, _tast.EntityRef$$get_IsUnionTycon)(e$$18[1]) ? (0, _tast.EntityRef$$get_UnionCasesArray)(e$$18[1]).some(function predicate$$19(c) {
                  return (0, _tast.UnionCase$$get_DisplayName)(c) === (0, _ast.Ident$$get_idText)(id$$20);
                }) : false) {
                  return e$$18[1];
                } else {
                  return null;
                }
              }, nenv$$52.eTyconsByDemangledNameAndArity));
              return new Set((0, _List.ofSeq)((0, _Seq.delay)(function () {
                return (0, _Seq.append)(suggestedNames, (0, _Seq.delay)(function () {
                  return (0, _Seq.append)(suggestedTypes, (0, _Seq.delay)(function () {
                    return (0, _Seq.append)(suggestedModulesAndNamespaces, (0, _Seq.delay)(function () {
                      return unions$$1;
                    }));
                  }));
                }));
              })));
            };

            failingCase = (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(0, _FSComp.SR$$$undefinedNameValueOfConstructor$$Z721C83C5, id$$20, suggestNamesAndTypes));
          }

          patternInput$$6 = (0, _illib.ResultOrExceptionModule$$$ForceRaise)(failingCase);
        }

        ResolutionInfo$$$SendEntityPathToSink$$Z7B7DC02C(sink$$24, ncenv$$16, nenv$$52, new ItemOccurence(1, "Use"), ad$$34, patternInput$$6[0], new ResultTyparChecker(0, "ResultTyparChecker", function () {
          return CheckAllTyparsInferrable(NameResolver$$get_amap(ncenv$$16), m$$58, patternInput$$6[1]);
        }));
        return [patternInput$$6[1], patternInput$$6[2]];
      } else {
        const res$$21 = envSearch;
        return res$$21;
      }
    } else {
      const m$$59 = (0, _range.unionRanges)(m$$58, (0, _ast.Ident$$get_idRange)(id$$20));

      const ValIsInEnv = function ValIsInEnv(nm$$27) {
        if (fullyQualified$$2.tag === 0) {
          return false;
        } else {
          const matchValue$$53 = (0, _Map.FSharpMap$$TryFind$$2B595)(nenv$$52.eUnqualifiedItems, nm$$27);
          var $target$$170;

          if (matchValue$$53 != null) {
            if (matchValue$$53.tag === 0) {
              $target$$170 = 0;
            } else {
              $target$$170 = 1;
            }
          } else {
            $target$$170 = 1;
          }

          switch ($target$$170) {
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
      };

      if (ValIsInEnv((0, _ast.Ident$$get_idText)(id$$20))) {
        return [(0, _Map.FSharpMap$$get_Item$$2B595)(nenv$$52.eUnqualifiedItems, (0, _ast.Ident$$get_idText)(id$$20)), rest$$10];
      } else {
        const moduleSearch$$1 = function moduleSearch$$1(ad$$35, unitVar1$$34) {
          return ResolveLongIndentAsModuleOrNamespaceThen(sink$$24, new ResultCollectionSettings(1, "AtMostOneResult"), NameResolver$$get_amap(ncenv$$16), m$$59, fullyQualified$$2, nenv$$52, ad$$35, id$$20, rest$$10, isOpenDecl$$2, function (resInfo$$30, depth$$8, m$$60, modref$$24, mty$$7, id$$21, rest$$13) {
            return ResolveExprLongIdentInModuleOrNamespace(ncenv$$16, nenv$$52, typeNameResInfo$$9, ad$$35, resInfo$$30, depth$$8, m$$60, modref$$24, mty$$7, id$$21, rest$$13);
          });
        };

        const tyconSearch$$1 = function tyconSearch$$1(ad$$36, unitVar1$$35) {
          const tcrefs$$23 = LookupTypeNameInEnvNoArity(fullyQualified$$2, (0, _ast.Ident$$get_idText)(id$$20), nenv$$52);

          if (tcrefs$$23.tail == null) {
            return NoResultsOrUsefulErrors();
          } else if (rest$$10.tail != null) {
            const rest2$$6 = rest$$10.tail;
            const id2$$10 = rest$$10.head;
            const tcrefs$$24 = (0, _List.map)(function mapping$$42(tcref$$44) {
              return [resInfo$$27, tcref$$44];
            }, tcrefs$$23);
            const tcrefs$$25 = CheckForTypeLegitimacyAndMultipleGenericTypeAmbiguities(tcrefs$$24, TypeNameResolutionInfo$$$ResolveToTypeRefs$$ZAA5971B(new TypeNameResolutionStaticArgsInfo(0, "Indefinite")), new PermitDirectReferenceToGeneratedType(1, "No"), (0, _range.unionRanges)(m$$59, (0, _ast.Ident$$get_idRange)(id$$20)));
            return ResolveLongIdentInTyconRefs(new ResultCollectionSettings(1, "AtMostOneResult"), ncenv$$16, nenv$$52, new LookupKind(2, "Expr"), 1, m$$59, ad$$36, id2$$10, rest2$$6, typeNameResInfo$$9, (0, _ast.Ident$$get_idRange)(id$$20), tcrefs$$25);
          } else {
            return NoResultsOrUsefulErrors();
          }
        };

        let search$$1;

        const envSearch$$1 = function envSearch$$1() {
          if (fullyQualified$$2.tag === 1) {
            const matchValue$$54 = (0, _Map.FSharpMap$$TryFind$$2B595)(nenv$$52.eUnqualifiedItems, (0, _ast.Ident$$get_idText)(id$$20));
            var $target$$171, res$$23;

            if (matchValue$$54 == null) {
              $target$$171 = 0;
            } else if (matchValue$$54.tag === 22) {
              $target$$171 = 0;
            } else {
              $target$$171 = 1;
              res$$23 = matchValue$$54;
            }

            switch ($target$$171) {
              case 0:
                {
                  return NoResultsOrUsefulErrors();
                }

              case 1:
                {
                  return OneSuccess([resInfo$$27, FreshenUnqualifiedItem(ncenv$$16, m$$59, res$$23), rest$$10]);
                }
            }
          } else {
            return NoResultsOrUsefulErrors();
          }
        };

        search$$1 = AtMostOneResultQuery(envSearch$$1, AtMostOneResultQuery((0, _Util.partialApply)(1, tyconSearch$$1, [ad$$34]), moduleSearch$$1(ad$$34, null)));
        let patternInput$$7;
        const matchValue$$55 = AtMostOneResult(m$$59, search$$1);

        if (matchValue$$55.tag === 0) {
          const res$$24 = matchValue$$55;
          patternInput$$7 = (0, _illib.ResultOrExceptionModule$$$ForceRaise)(res$$24);
        } else {
          const innerSearch$$1 = AtMostOneResultQuery((0, _Util.partialApply)(1, tyconSearch$$1, [new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode")]), AtMostOneResultQuery((0, _Util.partialApply)(1, moduleSearch$$1, [new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode")]), search$$1));

          const suggestEverythingInScope = function suggestEverythingInScope() {
            return new Set((0, _Seq.delay)(function () {
              return (0, _Seq.append)((0, _Seq.collect)(function mapping$$44(e$$19) {
                return (0, _Types.L)((0, _tast.EntityRef$$get_DisplayName)(e$$19), (0, _Types.L)((0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(e$$19), (0, _Types.L)()));
              }, (0, _Seq.filter)(function predicate$$20(modref$$25) {
                return (0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$16), m$$59, ad$$34, modref$$25);
              }, (0, _Seq.collect)(function mapping$$43(kv$$4) {
                return kv$$4[1];
              }, NameResolutionEnv$$ModulesAndNamespaces$$5B75656D(nenv$$52, fullyQualified$$2)))), (0, _Seq.delay)(function () {
                return (0, _Seq.append)((0, _Seq.map)(function mapping$$45(e$$21) {
                  return (0, _tast.EntityRef$$get_DisplayName)(e$$21[1]);
                }, (0, _Seq.filter)(function predicate$$21(e$$20) {
                  return (0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$16), m$$59, ad$$34, e$$20[1]);
                }, NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D(nenv$$52, fullyQualified$$2))), (0, _Seq.delay)(function () {
                  return (0, _Seq.map)(function mapping$$46(e$$22) {
                    return Item$$get_DisplayName(e$$22[1]);
                  }, nenv$$52.eUnqualifiedItems);
                }));
              }));
            }));
          };

          var $target$$172, id1$$4, suggestionsF$$1;

          if (innerSearch$$1.tag === 1) {
            if (innerSearch$$1.fields[0] instanceof _tast.UndefinedName) {
              if (innerSearch$$1.fields[0].Data0 === 0) {
                if (suggestionsF = innerSearch$$1.fields[0].Data3, (id1$$3 = innerSearch$$1.fields[0].Data2, (0, _Util.equals)((0, _ast.Ident$$get_idRange)(id$$20), (0, _ast.Ident$$get_idRange)(id1$$3)))) {
                  $target$$172 = 0;
                  id1$$4 = innerSearch$$1.fields[0].Data2;
                  suggestionsF$$1 = innerSearch$$1.fields[0].Data3;
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
                const mergeSuggestions = function mergeSuggestions() {
                  const res$$25 = suggestEverythingInScope();
                  (0, _Set.unionWith)(res$$25, suggestionsF$$1());
                  return res$$25;
                };

                const failingCase$$1 = (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(0, _FSComp.SR$$$undefinedNameValueNamespaceTypeOrModule$$Z721C83C5, id$$20, mergeSuggestions));
                patternInput$$7 = (0, _illib.ResultOrExceptionModule$$$ForceRaise)(failingCase$$1);
                break;
              }

            case 1:
              {
                if (innerSearch$$1.tag === 0) {
                  if (innerSearch$$1.fields[0].tail == null) {
                    const failingCase$$2 = (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(0, _FSComp.SR$$$undefinedNameValueNamespaceTypeOrModule$$Z721C83C5, id$$20, suggestEverythingInScope));
                    patternInput$$7 = (0, _illib.ResultOrExceptionModule$$$ForceRaise)(failingCase$$2);
                  } else {
                    patternInput$$7 = (0, _illib.ResultOrExceptionModule$$$ForceRaise)(new _illib.ResultOrException$00601(0, "Result", innerSearch$$1.fields[0].head));
                  }
                } else {
                  patternInput$$7 = (0, _illib.ResultOrExceptionModule$$$ForceRaise)(new _illib.ResultOrException$00601(1, "Exception", innerSearch$$1.fields[0]));
                }

                break;
              }
          }
        }

        ResolutionInfo$$$SendEntityPathToSink$$Z7B7DC02C(sink$$24, ncenv$$16, nenv$$52, new ItemOccurence(1, "Use"), ad$$34, patternInput$$7[0], new ResultTyparChecker(0, "ResultTyparChecker", function () {
          return CheckAllTyparsInferrable(NameResolver$$get_amap(ncenv$$16), m$$59, patternInput$$7[1]);
        }));
        return [patternInput$$7[1], patternInput$$7[2]];
      }
    }
  }
}

function ResolveExprLongIdent(sink$$25, ncenv$$17, m$$61, ad$$37, nenv$$53, typeNameResInfo$$10, lid$$1) {
  if (lid$$1.tail != null) {
    const rest$$15 = lid$$1.tail;
    const id$$22 = lid$$1.head;
    return ResolveExprLongIdentPrim(sink$$25, ncenv$$17, true, new FullyQualifiedFlag(1, "OpenQualified"), m$$61, ad$$37, nenv$$53, typeNameResInfo$$10, id$$22, rest$$15, false);
  } else {
    return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrInvalidExpression$$Z721C83C5)((0, _ast.textOfLid)(lid$$1)), m$$61));
  }
}

function ResolvePatternLongIdentInModuleOrNamespace(ncenv$$18, nenv$$54, numTyArgsOpt, ad$$38, resInfo$$32, depth$$9, m$$62, modref$$26, mty$$8, id$$23, rest$$16) {
  var vspec$$5, vref$$27, apref$$3, exnc$$1, tycon$$9;
  const m$$63 = (0, _range.unionRanges)(m$$62, (0, _ast.Ident$$get_idRange)(id$$23));
  const matchValue$$56 = TryFindTypeWithUnionCase(modref$$26, id$$23);
  var $target$$173, tycon$$10;

  if (matchValue$$56 != null) {
    if (tycon$$9 = matchValue$$56, (0, _AccessibilityLogic.IsTyconReprAccessible)(NameResolver$$get_amap(ncenv$$18), m$$63, ad$$38, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$26, tycon$$9))) {
      $target$$173 = 0;
      tycon$$10 = matchValue$$56;
    } else {
      $target$$173 = 1;
    }
  } else {
    $target$$173 = 1;
  }

  switch ($target$$173) {
    case 0:
      {
        const tcref$$45 = (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$26, tycon$$10);
        const ucref$$7 = (0, _tast.mkUnionCaseRef)(tcref$$45, (0, _ast.Ident$$get_idText)(id$$23));
        const showDeprecated = (0, _TastOps.HasFSharpAttribute)(NameResolver$$get_g(ncenv$$18), (0, _TcGlobals.TcGlobals$$get_attrib_RequireQualifiedAccessAttribute)(NameResolver$$get_g(ncenv$$18)), (0, _tast.Entity$$get_Attribs)(tycon$$10));
        const ucinfo$$1 = FreshenUnionCaseRef(ncenv$$18, m$$63, ucref$$7);
        return (0, _illib.ResultOrExceptionModule$$$success)([resInfo$$32, new Item(1, "UnionCase", ucinfo$$1, showDeprecated), rest$$16]);
      }

    case 1:
      {
        const matchValue$$57 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_ExceptionDefinitionsByDemangledName)(mty$$8), (0, _ast.Ident$$get_idText)(id$$23));
        var $target$$174, exnc$$2;

        if (matchValue$$57 != null) {
          if (exnc$$1 = matchValue$$57, (0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$18), m$$63, ad$$38, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$26, exnc$$1))) {
            $target$$174 = 0;
            exnc$$2 = matchValue$$57;
          } else {
            $target$$174 = 1;
          }
        } else {
          $target$$174 = 1;
        }

        switch ($target$$174) {
          case 0:
            {
              return (0, _illib.ResultOrExceptionModule$$$success)([resInfo$$32, new Item(4, "ExnCase", (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$26, exnc$$2)), rest$$16]);
            }

          case 1:
            {
              const matchValue$$58 = (0, _Map.FSharpMap$$TryFind$$2B595)(ActivePatternElemsOfModuleOrNamespace(modref$$26), (0, _ast.Ident$$get_idText)(id$$23));
              var $target$$175, apref$$4, vref$$28;

              if (matchValue$$58 != null) {
                if (vref$$27 = matchValue$$58.fields[1], (apref$$3 = matchValue$$58, (0, _AccessibilityLogic.IsValAccessible)(ad$$38, vref$$27))) {
                  $target$$175 = 0;
                  apref$$4 = matchValue$$58;
                  vref$$28 = matchValue$$58.fields[1];
                } else {
                  $target$$175 = 1;
                }
              } else {
                $target$$175 = 1;
              }

              switch ($target$$175) {
                case 0:
                  {
                    return (0, _illib.ResultOrExceptionModule$$$success)([resInfo$$32, new Item(3, "ActivePatternCase", apref$$4), rest$$16]);
                  }

                case 1:
                  {
                    const matchValue$$59 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_AllValsByLogicalName)(mty$$8), (0, _ast.Ident$$get_idText)(id$$23));
                    var $target$$176, vspec$$6;

                    if (matchValue$$59 != null) {
                      if (vspec$$5 = matchValue$$59, (0, _AccessibilityLogic.IsValAccessible)(ad$$38, (0, _tast.mkNestedValRef)(modref$$26, vspec$$5))) {
                        $target$$176 = 0;
                        vspec$$6 = matchValue$$59;
                      } else {
                        $target$$176 = 1;
                      }
                    } else {
                      $target$$176 = 1;
                    }

                    switch ($target$$176) {
                      case 0:
                        {
                          return (0, _illib.ResultOrExceptionModule$$$success)([resInfo$$32, new Item(0, "Value", (0, _tast.mkNestedValRef)(modref$$26, vspec$$6)), rest$$16]);
                        }

                      case 1:
                        {
                          const tcrefs$$26 = new _Util.Lazy(function () {
                            return (0, _List.map)(function mapping$$47(tcref$$46) {
                              return [resInfo$$32, tcref$$46];
                            }, LookupTypeNameInEntityMaybeHaveArity(NameResolver$$get_amap(ncenv$$18), (0, _ast.Ident$$get_idRange)(id$$23), ad$$38, (0, _ast.Ident$$get_idText)(id$$23), new TypeNameResolutionStaticArgsInfo(0, "Indefinite"), modref$$26));
                          });
                          let tyconSearch$$2;

                          if (rest$$16.tail != null) {
                            const rest2$$7 = rest$$16.tail;
                            const id2$$11 = rest$$16.head;
                            const tcrefs$$27 = tcrefs$$26.Value;
                            tyconSearch$$2 = ResolveLongIdentInTyconRefs(new ResultCollectionSettings(1, "AtMostOneResult"), ncenv$$18, nenv$$54, new LookupKind(1, "Pattern"), depth$$9 + 1, m$$63, ad$$38, id2$$11, rest2$$7, numTyArgsOpt, (0, _ast.Ident$$get_idRange)(id$$23), tcrefs$$27);
                          } else {
                            tyconSearch$$2 = NoResultsOrUsefulErrors();
                          }

                          const ctorSearch$$1 = function ctorSearch$$1() {
                            if (rest$$16.tail == null) {
                              return MapResults(function f$$26(tupledArg$$21) {
                                return [tupledArg$$21[0], tupledArg$$21[1], (0, _Types.L)()];
                              }, CollectAtMostOneResult(function f$$25(tupledArg$$20) {
                                return ResolveObjectConstructorPrim(ncenv$$18, nenv$$54.eDisplayEnv, tupledArg$$20[0], (0, _ast.Ident$$get_idRange)(id$$23), ad$$38, tupledArg$$20[1]);
                              }, (0, _List.map)(function mapping$$48(tupledArg$$19) {
                                return [tupledArg$$19[0], FreshenTycon(ncenv$$18, m$$63, tupledArg$$19[1])];
                              }, tcrefs$$26.Value)));
                            } else {
                              return NoResultsOrUsefulErrors();
                            }
                          };

                          const moduleSearch$$2 = function moduleSearch$$2() {
                            if (rest$$16.tail == null) {
                              return NoResultsOrUsefulErrors();
                            } else {
                              const rest2$$8 = rest$$16.tail;
                              const id2$$12 = rest$$16.head;
                              const matchValue$$60 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$8), (0, _ast.Ident$$get_idText)(id$$23));
                              var $target$$177, submodref$$1;

                              if (matchValue$$60 != null) {
                                const activePatternResult40503 = $007CAccessibleEntityRef$007C_$007C(NameResolver$$get_amap(ncenv$$18), m$$63, ad$$38, modref$$26, matchValue$$60);

                                if (activePatternResult40503 != null) {
                                  $target$$177 = 0;
                                  submodref$$1 = activePatternResult40503;
                                } else {
                                  $target$$177 = 1;
                                }
                              } else {
                                $target$$177 = 1;
                              }

                              switch ($target$$177) {
                                case 0:
                                  {
                                    const resInfo$$36 = ResolutionInfo$$AddEntity$$Z30807AE9(resInfo$$32, [(0, _ast.Ident$$get_idRange)(id$$23), submodref$$1]);
                                    return OneResult(ResolvePatternLongIdentInModuleOrNamespace(ncenv$$18, nenv$$54, numTyArgsOpt, ad$$38, resInfo$$36, depth$$9 + 1, m$$63, submodref$$1, (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(submodref$$1), id2$$12, rest2$$8));
                                  }

                                case 1:
                                  {
                                    return NoResultsOrUsefulErrors();
                                  }
                              }
                            }
                          };

                          const matchValue$$61 = AtMostOneResultQuery(moduleSearch$$2, AtMostOneResultQuery(ctorSearch$$1, tyconSearch$$2));
                          var $target$$178, results$$1;

                          if (matchValue$$61.tag === 0) {
                            if (matchValue$$61.fields[0].tail == null) {
                              $target$$178 = 0;
                            } else {
                              $target$$178 = 1;
                              results$$1 = matchValue$$61;
                            }
                          } else {
                            $target$$178 = 1;
                            results$$1 = matchValue$$61;
                          }

                          switch ($target$$178) {
                            case 0:
                              {
                                const suggestPossibleTypes = function suggestPossibleTypes() {
                                  const submodules$$1 = (0, _Seq.collect)(function mapping$$49(e$$23) {
                                    return (0, _Types.L)((0, _tast.Entity$$get_DisplayName)(e$$23[1]), (0, _Types.L)((0, _tast.Entity$$get_DemangledModuleOrNamespaceName)(e$$23[1]), (0, _Types.L)()));
                                  }, (0, _Seq.filter)(function predicate$$22(kv$$5) {
                                    return (0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$18), m$$63, ad$$38, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$26, kv$$5[1]));
                                  }, (0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$8)));
                                  const suggestedTypes$$1 = (0, _Seq.map)(function mapping$$50(e$$25) {
                                    return (0, _tast.EntityRef$$get_DisplayName)(e$$25[1]);
                                  }, (0, _Seq.filter)(function predicate$$23(e$$24) {
                                    return (0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$18), m$$63, ad$$38, e$$24[1]);
                                  }, NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D(nenv$$54, new FullyQualifiedFlag(1, "OpenQualified"))));
                                  return new Set((0, _List.ofSeq)((0, _Seq.delay)(function () {
                                    return (0, _Seq.append)(submodules$$1, (0, _Seq.delay)(function () {
                                      return suggestedTypes$$1;
                                    }));
                                  })));
                                };

                                return (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(depth$$9, _FSComp.SR$$$undefinedNameConstructorModuleOrNamespace$$Z721C83C5, id$$23, suggestPossibleTypes));
                              }

                            case 1:
                              {
                                return AtMostOneResult((0, _ast.Ident$$get_idRange)(id$$23), results$$1);
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

const UpperCaseIdentifierInPattern = (0, _Types.declare)(function UpperCaseIdentifierInPattern(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.UpperCaseIdentifierInPattern = UpperCaseIdentifierInPattern;
const WarnOnUpperFlag = (0, _Types.declare)(function WarnOnUpperFlag(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.WarnOnUpperFlag = WarnOnUpperFlag;

function ResolvePatternLongIdentPrim(sink$$26, ncenv$$19, fullyQualified$$3, warnOnUpper, newDef, m$$64, ad$$39, nenv$$55, numTyArgsOpt$$1, id$$24, rest$$17) {
  var res$$27;

  ResolvePatternLongIdentPrim: while (true) {
    if ((0, _ast.Ident$$get_idText)(id$$24) === "`global`") {
      if (rest$$17.tail != null) {
        const rest2$$9 = rest$$17.tail;
        const id2$$13 = rest$$17.head;
        sink$$26 = sink$$26;
        ncenv$$19 = ncenv$$19;
        fullyQualified$$3 = new FullyQualifiedFlag(0, "FullyQualified");
        warnOnUpper = warnOnUpper;
        newDef = newDef;
        m$$64 = m$$64;
        ad$$39 = ad$$39;
        nenv$$55 = nenv$$55;
        numTyArgsOpt$$1 = numTyArgsOpt$$1;
        id$$24 = id2$$13;
        rest$$17 = rest2$$9;
        continue ResolvePatternLongIdentPrim;
      } else {
        return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrGlobalUsedOnlyAsFirstName)(), (0, _ast.Ident$$get_idRange)(id$$24)));
      }
    } else if (rest$$17.tail == null ? !(0, _Util.equals)(fullyQualified$$3, new FullyQualifiedFlag(0, "FullyQualified")) : false) {
      const matchValue$$62 = (0, _Map.FSharpMap$$TryFind$$2B595)(nenv$$55.ePatItems, (0, _ast.Ident$$get_idText)(id$$24));
      var $target$$179, res$$28;

      if (matchValue$$62 != null) {
        if (res$$27 = matchValue$$62, !newDef) {
          $target$$179 = 0;
          res$$28 = matchValue$$62;
        } else {
          $target$$179 = 1;
        }
      } else {
        $target$$179 = 1;
      }

      switch ($target$$179) {
        case 0:
          {
            return FreshenUnqualifiedItem(ncenv$$19, m$$64, res$$28);
          }

        case 1:
          {
            if (((!newDef ? (0, _Util.equals)(warnOnUpper, new WarnOnUpperFlag(0, "WarnOnUpperCase")) : false) ? (0, _ast.Ident$$get_idText)(id$$24).length >= 3 : false) ? (0, _ast.Ident$$get_idText)(id$$24)[0].toLowerCase() !== (0, _ast.Ident$$get_idText)(id$$24)[0] : false) {
              (0, _ErrorLogger.warning)(new UpperCaseIdentifierInPattern(m$$64));
            }

            return new Item(6, "NewDef", id$$24);
          }
      }
    } else {
      const moduleSearch$$3 = function moduleSearch$$3(ad$$40, unitVar1$$36) {
        return ResolveLongIndentAsModuleOrNamespaceThen(sink$$26, new ResultCollectionSettings(1, "AtMostOneResult"), NameResolver$$get_amap(ncenv$$19), m$$64, fullyQualified$$3, nenv$$55, ad$$40, id$$24, rest$$17, false, function (resInfo$$37, depth$$10, m$$65, modref$$27, mty$$9, id$$25, rest$$18) {
          return ResolvePatternLongIdentInModuleOrNamespace(ncenv$$19, nenv$$55, numTyArgsOpt$$1, ad$$40, resInfo$$37, depth$$10, m$$65, modref$$27, mty$$9, id$$25, rest$$18);
        });
      };

      const tyconSearch$$3 = function tyconSearch$$3(ad$$41) {
        if (rest$$17.tail != null) {
          const rest2$$10 = rest$$17.tail;
          const id2$$14 = rest$$17.head;
          const tcrefs$$28 = LookupTypeNameInEnvNoArity(fullyQualified$$3, (0, _ast.Ident$$get_idText)(id$$24), nenv$$55);

          if (tcrefs$$28.tail == null) {
            return NoResultsOrUsefulErrors();
          } else {
            const tcrefs$$29 = (0, _List.map)(function mapping$$51(tcref$$48) {
              return [ResolutionInfo$$$get_Empty(), tcref$$48];
            }, tcrefs$$28);
            return ResolveLongIdentInTyconRefs(new ResultCollectionSettings(1, "AtMostOneResult"), ncenv$$19, nenv$$55, new LookupKind(1, "Pattern"), 1, (0, _ast.Ident$$get_idRange)(id$$24), ad$$41, id2$$14, rest2$$10, numTyArgsOpt$$1, (0, _ast.Ident$$get_idRange)(id$$24), tcrefs$$29);
          }
        } else {
          return NoResultsOrUsefulErrors();
        }
      };

      let patternInput$$8;
      const matchValue$$63 = AtMostOneResult(m$$64, AtMostOneResultQuery((0, _Util.partialApply)(1, moduleSearch$$3, [ad$$39]), tyconSearch$$3(ad$$39)));

      if (matchValue$$63.tag === 0) {
        const res$$29 = matchValue$$63;
        patternInput$$8 = (0, _illib.ResultOrExceptionModule$$$ForceRaise)(res$$29);
      } else {
        patternInput$$8 = (0, _illib.ResultOrExceptionModule$$$ForceRaise)(AtMostOneResult(m$$64, AtMostOneResultQuery((0, _Util.partialApply)(1, moduleSearch$$3, [new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode")]), tyconSearch$$3(new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode")))));
      }

      ResolutionInfo$$$SendEntityPathToSink$$Z7B7DC02C(sink$$26, ncenv$$19, nenv$$55, new ItemOccurence(1, "Use"), ad$$39, patternInput$$8[0], new ResultTyparChecker(0, "ResultTyparChecker", function () {
        return true;
      }));

      if (patternInput$$8[2].tail != null) {
        const element = patternInput$$8[2].head;
        return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrIsNotConstructorOrLiteral)(), (0, _ast.Ident$$get_idRange)(element)));
      } else {
        return patternInput$$8[1];
      }
    }
  }
}

function ResolvePatternLongIdent(sink$$27, ncenv$$20, warnOnUpper$$1, newDef$$1, m$$66, ad$$42, nenv$$56, numTyArgsOpt$$2, lid$$2) {
  if (lid$$2.tail != null) {
    const rest$$20 = lid$$2.tail;
    const id$$26 = lid$$2.head;
    return ResolvePatternLongIdentPrim(sink$$27, ncenv$$20, new FullyQualifiedFlag(1, "OpenQualified"), warnOnUpper$$1, newDef$$1, m$$66, ad$$42, nenv$$56, numTyArgsOpt$$2, id$$26, rest$$20);
  } else {
    return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrUnexpectedEmptyLongId)(), m$$66));
  }
}

function ResolveNestedTypeThroughAbbreviation(ncenv$$21, tcref$$49, m$$67) {
  if ((((0, _tast.EntityRef$$get_IsTypeAbbrev)(tcref$$49) ? (0, _tast.EntityRef$$Typars$$4DB9192C)(tcref$$49, m$$67).tail == null : false) ? (0, _TastOps.isAppTy)(NameResolver$$get_g(ncenv$$21), (0, _tast.EntityRef$$get_TypeAbbrev)(tcref$$49)) : false) ? (0, _TastOps.argsOfAppTy)(NameResolver$$get_g(ncenv$$21), (0, _tast.EntityRef$$get_TypeAbbrev)(tcref$$49)).tail == null : false) {
    return (0, _TastOps.tcrefOfAppTy)(NameResolver$$get_g(ncenv$$21), (0, _tast.EntityRef$$get_TypeAbbrev)(tcref$$49));
  } else {
    return tcref$$49;
  }
}

function ResolveTypeLongIdentInTyconRefPrim(ncenv$$22, typeNameResInfo$$11, ad$$43, resInfo$$39, genOk$$1, depth$$11, m$$68, tcref$$50, id$$27, rest$$21) {
  const tcref$$51 = ResolveNestedTypeThroughAbbreviation(ncenv$$22, tcref$$50, m$$68);

  if (rest$$21.tail != null) {
    const rest2$$11 = rest$$21.tail;
    const id2$$15 = rest$$21.head;
    const m$$70 = (0, _range.unionRanges)(m$$68, (0, _ast.Ident$$get_idRange)(id$$27));
    let tyconSearch$$4;
    const tcrefs$$33 = LookupTypeNameInEntityMaybeHaveArity(NameResolver$$get_amap(ncenv$$22), (0, _ast.Ident$$get_idRange)(id$$27), ad$$43, (0, _ast.Ident$$get_idText)(id$$27), new TypeNameResolutionStaticArgsInfo(0, "Indefinite"), tcref$$51);

    if (tcrefs$$33.tail == null) {
      tyconSearch$$4 = NoResultsOrUsefulErrors();
    } else {
      const tcrefs$$34 = (0, _List.map)(function mapping$$54(tcref$$54) {
        return [resInfo$$39, tcref$$54];
      }, tcrefs$$33);
      const tcrefs$$35 = CheckForTypeLegitimacyAndMultipleGenericTypeAmbiguities(tcrefs$$34, TypeNameResolutionInfo$$get_DropStaticArgsInfo(typeNameResInfo$$11), genOk$$1, m$$70);

      if (tcrefs$$35.tail == null) {
        const suggestTypes$$1 = function suggestTypes$$1() {
          return new Set((0, _Seq.map)(function mapping$$55(e$$27) {
            return (0, _tast.Entity$$get_DisplayName)(e$$27[1]);
          }, (0, _tast.ModuleOrNamespaceType$$TypesByDemangledNameAndArity$$4DB9192C)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(tcref$$51), (0, _ast.Ident$$get_idRange)(id$$27))));
        };

        tyconSearch$$4 = (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(depth$$11, _FSComp.SR$$$undefinedNameType$$Z721C83C5, id$$27, suggestTypes$$1));
      } else {
        tyconSearch$$4 = CollectAtMostOneResult(function f$$27(tupledArg$$22) {
          return ResolveTypeLongIdentInTyconRefPrim(ncenv$$22, typeNameResInfo$$11, ad$$43, tupledArg$$22[0], genOk$$1, depth$$11 + 1, m$$70, tupledArg$$22[1], id2$$15, rest2$$11);
        }, tcrefs$$35);
      }
    }

    return AtMostOneResult(m$$70, tyconSearch$$4);
  } else {
    const m$$69 = (0, _range.unionRanges)(m$$68, (0, _ast.Ident$$get_idRange)(id$$27));
    const tcrefs$$30 = LookupTypeNameInEntityMaybeHaveArity(NameResolver$$get_amap(ncenv$$22), (0, _ast.Ident$$get_idRange)(id$$27), ad$$43, (0, _ast.Ident$$get_idText)(id$$27), TypeNameResolutionInfo$$get_StaticArgsInfo(typeNameResInfo$$11), tcref$$51);
    const tcrefs$$31 = (0, _List.map)(function mapping$$52(tcref$$52) {
      return [resInfo$$39, tcref$$52];
    }, tcrefs$$30);
    const tcrefs$$32 = CheckForTypeLegitimacyAndMultipleGenericTypeAmbiguities(tcrefs$$31, typeNameResInfo$$11, genOk$$1, m$$69);

    if (tcrefs$$32.tail == null) {
      const suggestTypes = function suggestTypes() {
        return new Set((0, _Seq.map)(function mapping$$53(e$$26) {
          return (0, _tast.Entity$$get_DisplayName)(e$$26[1]);
        }, (0, _tast.ModuleOrNamespaceType$$TypesByDemangledNameAndArity$$4DB9192C)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(tcref$$51), (0, _ast.Ident$$get_idRange)(id$$27))));
      };

      return (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(depth$$11, _FSComp.SR$$$undefinedNameType$$Z721C83C5, id$$27, suggestTypes));
    } else {
      const tcref$$53 = tcrefs$$32.head;
      return (0, _illib.ResultOrExceptionModule$$$success)(tcref$$53);
    }
  }
}

function ResolveTypeLongIdentInTyconRef(sink$$28, ncenv$$23, nenv$$57, typeNameResInfo$$12, ad$$44, m$$71, tcref$$56, lid$$3) {
  let patternInput$$9;

  if (lid$$3.tail != null) {
    const rest$$22 = lid$$3.tail;
    const id$$28 = lid$$3.head;
    patternInput$$9 = (0, _illib.ResultOrExceptionModule$$$ForceRaise)(ResolveTypeLongIdentInTyconRefPrim(ncenv$$23, typeNameResInfo$$12, ad$$44, ResolutionInfo$$$get_Empty(), new PermitDirectReferenceToGeneratedType(1, "No"), 0, m$$71, tcref$$56, id$$28, rest$$22));
  } else {
    patternInput$$9 = (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrUnexpectedEmptyLongId)(), m$$71));
  }

  ResolutionInfo$$$SendEntityPathToSink$$Z7B7DC02C(sink$$28, ncenv$$23, nenv$$57, new ItemOccurence(1, "Use"), ad$$44, patternInput$$9[0], new ResultTyparChecker(0, "ResultTyparChecker", function () {
    return true;
  }));
  const item$$35 = new Item(14, "Types", (0, _tast.EntityRef$$get_DisplayName)(patternInput$$9[1]), (0, _Types.L)(FreshenTycon(ncenv$$23, m$$71, patternInput$$9[1]), (0, _Types.L)()));
  CallNameResolutionSink(sink$$28, (0, _ast.rangeOfLid)(lid$$3), nenv$$57, item$$35, item$$35, _TastOps.emptyTyparInst, new ItemOccurence(2, "UseInType"), nenv$$57.eDisplayEnv, ad$$44);
  return patternInput$$9[1];
}

function SuggestTypeLongIdentInModuleOrNamespace(depth$$12, modref$$28, amap$$19, ad$$45, m$$72, id$$29) {
  const suggestPossibleTypes$$1 = function suggestPossibleTypes$$1() {
    return new Set((0, _Seq.collect)(function mapping$$56(e$$29) {
      return (0, _Types.L)((0, _tast.Entity$$get_DisplayName)(e$$29), (0, _Types.L)((0, _tast.Entity$$get_DemangledModuleOrNamespaceName)(e$$29), (0, _Types.L)()));
    }, (0, _Seq.filter)(function predicate$$24(e$$28) {
      return (0, _AccessibilityLogic.IsEntityAccessible)(amap$$19, m$$72, ad$$45, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$28, e$$28));
    }, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$28)))));
  };

  const errorTextF = function errorTextF(s$$1) {
    return (0, _FSComp.SR$$$undefinedNameTypeIn$$Z384F8060)(s$$1, (0, _TastOps.fullDisplayTextOfModRef)(modref$$28));
  };

  return new _tast.UndefinedName(depth$$12, errorTextF, id$$29, suggestPossibleTypes$$1);
}

function ResolveTypeLongIdentInModuleOrNamespace(sink$$29, nenv$$58, ncenv$$24, typeNameResInfo$$13, ad$$46, genOk$$2, resInfo$$42, depth$$13, m$$73, modref$$29, _mty, id$$30, rest$$23) {
  if (rest$$23.tail != null) {
    const rest2$$12 = rest$$23.tail;
    const id2$$16 = rest$$23.head;
    const m$$74 = (0, _range.unionRanges)(m$$73, (0, _ast.Ident$$get_idRange)(id$$30));
    let modulSearch;
    const matchValue$$64 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$29)), (0, _ast.Ident$$get_idText)(id$$30));
    var $target$$180, submodref$$2;

    if (matchValue$$64 != null) {
      const activePatternResult40627 = $007CAccessibleEntityRef$007C_$007C(NameResolver$$get_amap(ncenv$$24), m$$74, ad$$46, modref$$29, matchValue$$64);

      if (activePatternResult40627 != null) {
        $target$$180 = 0;
        submodref$$2 = activePatternResult40627;
      } else {
        $target$$180 = 1;
      }
    } else {
      $target$$180 = 1;
    }

    switch ($target$$180) {
      case 0:
        {
          const item$$36 = new Item(18, "ModuleOrNamespaces", (0, _Types.L)(submodref$$2, (0, _Types.L)()));
          CallNameResolutionSink(sink$$29, (0, _ast.Ident$$get_idRange)(id$$30), nenv$$58, item$$36, item$$36, _TastOps.emptyTyparInst, new ItemOccurence(1, "Use"), NameResolutionEnv$$get_DisplayEnv(nenv$$58), ad$$46);
          const resInfo$$43 = ResolutionInfo$$AddEntity$$Z30807AE9(resInfo$$42, [(0, _ast.Ident$$get_idRange)(id$$30), submodref$$2]);
          modulSearch = ResolveTypeLongIdentInModuleOrNamespace(sink$$29, nenv$$58, ncenv$$24, typeNameResInfo$$13, ad$$46, genOk$$2, resInfo$$43, depth$$13 + 1, m$$74, submodref$$2, (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(submodref$$2), id2$$16, rest2$$12);
          break;
        }

      case 1:
        {
          const suggestPossibleModules = function suggestPossibleModules() {
            return new Set((0, _Seq.collect)(function mapping$$57(e$$30) {
              return (0, _Types.L)((0, _tast.Entity$$get_DisplayName)(e$$30[1]), (0, _Types.L)((0, _tast.Entity$$get_DemangledModuleOrNamespaceName)(e$$30[1]), (0, _Types.L)()));
            }, (0, _Seq.filter)(function predicate$$25(kv$$6) {
              return (0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$24), m$$74, ad$$46, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$29, kv$$6[1]));
            }, (0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$29)))));
          };

          modulSearch = (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(depth$$13, _FSComp.SR$$$undefinedNameNamespaceOrModule$$Z721C83C5, id$$30, suggestPossibleModules));
          break;
        }
    }

    let tyconSearch$$5;
    const tcrefs$$37 = LookupTypeNameInEntityMaybeHaveArity(NameResolver$$get_amap(ncenv$$24), (0, _ast.Ident$$get_idRange)(id$$30), ad$$46, (0, _ast.Ident$$get_idText)(id$$30), new TypeNameResolutionStaticArgsInfo(0, "Indefinite"), modref$$29);

    if (tcrefs$$37.tail == null) {
      const suggestTypes$$2 = function suggestTypes$$2() {
        return new Set((0, _Seq.map)(function mapping$$58(e$$31) {
          return (0, _tast.Entity$$get_DisplayName)(e$$31[1]);
        }, (0, _tast.ModuleOrNamespaceType$$TypesByDemangledNameAndArity$$4DB9192C)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$29), (0, _ast.Ident$$get_idRange)(id$$30))));
      };

      tyconSearch$$5 = (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(depth$$13, _FSComp.SR$$$undefinedNameType$$Z721C83C5, id$$30, suggestTypes$$2));
    } else {
      tyconSearch$$5 = CollectResults(function f$$29(tcref$$59) {
        return ResolveTypeLongIdentInTyconRefPrim(ncenv$$24, typeNameResInfo$$13, ad$$46, resInfo$$42, genOk$$2, depth$$13 + 1, m$$74, tcref$$59, id2$$16, rest2$$12);
      }, tcrefs$$37);
    }

    return AddResults(tyconSearch$$5, modulSearch);
  } else {
    const tcrefs$$36 = LookupTypeNameInEntityMaybeHaveArity(NameResolver$$get_amap(ncenv$$24), (0, _ast.Ident$$get_idRange)(id$$30), ad$$46, (0, _ast.Ident$$get_idText)(id$$30), TypeNameResolutionInfo$$get_StaticArgsInfo(typeNameResInfo$$13), modref$$29);

    if (tcrefs$$36.tail == null) {
      return (0, _illib.ResultOrExceptionModule$$$raze)(SuggestTypeLongIdentInModuleOrNamespace(depth$$13, modref$$29, NameResolver$$get_amap(ncenv$$24), ad$$46, m$$73, id$$30));
    } else {
      return CollectResults(function f$$28(tcref$$58) {
        return (0, _illib.ResultOrExceptionModule$$$success)([resInfo$$42, tcref$$58]);
      }, tcrefs$$36);
    }
  }
}

function ResolveTypeLongIdentPrim(sink$$30, ncenv$$25, occurence$$1, first$$3, fullyQualified$$4, m$$75, nenv$$59, ad$$47, id$$31, rest$$24, staticResInfo$$4, genOk$$3) {
  var tcref$$61;

  ResolveTypeLongIdentPrim: while (true) {
    const typeNameResInfo$$14 = TypeNameResolutionInfo$$$ResolveToTypeRefs$$ZAA5971B(staticResInfo$$4);

    if (first$$3 ? (0, _ast.Ident$$get_idText)(id$$31) === "`global`" : false) {
      if (rest$$24.tail != null) {
        const rest2$$13 = rest$$24.tail;
        const id2$$17 = rest$$24.head;
        sink$$30 = sink$$30;
        ncenv$$25 = ncenv$$25;
        occurence$$1 = occurence$$1;
        first$$3 = false;
        fullyQualified$$4 = new FullyQualifiedFlag(0, "FullyQualified");
        m$$75 = m$$75;
        nenv$$59 = nenv$$59;
        ad$$47 = ad$$47;
        id$$31 = id2$$17;
        rest$$24 = rest2$$13;
        staticResInfo$$4 = staticResInfo$$4;
        genOk$$3 = genOk$$3;
        continue ResolveTypeLongIdentPrim;
      } else {
        return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrGlobalUsedOnlyAsFirstName)(), (0, _ast.Ident$$get_idRange)(id$$31)));
      }
    } else {
      if (rest$$24.tail != null) {
        const rest2$$14 = rest$$24.tail;
        const id2$$18 = rest$$24.head;
        const m2$$1 = (0, _range.unionRanges)(m$$75, (0, _ast.Ident$$get_idRange)(id$$31));
        let tyconSearch$$6;

        if (fullyQualified$$4.tag === 1) {
          const matchValue$$66 = LookupTypeNameInEnvHaveArity(fullyQualified$$4, (0, _ast.Ident$$get_idText)(id$$31), TypeNameResolutionStaticArgsInfo$$get_NumStaticArgs(staticResInfo$$4), nenv$$59);
          var $target$$181, tcref$$62;

          if (matchValue$$66 != null) {
            if (tcref$$61 = matchValue$$66, (0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$25), m2$$1, ad$$47, tcref$$61)) {
              $target$$181 = 0;
              tcref$$62 = matchValue$$66;
            } else {
              $target$$181 = 1;
            }
          } else {
            $target$$181 = 1;
          }

          switch ($target$$181) {
            case 0:
              {
                const resInfo$$44 = ResolutionInfo$$AddEntity$$Z30807AE9(ResolutionInfo$$$get_Empty(), [(0, _ast.Ident$$get_idRange)(id$$31), tcref$$62]);
                tyconSearch$$6 = OneResult(ResolveTypeLongIdentInTyconRefPrim(ncenv$$25, typeNameResInfo$$14, ad$$47, resInfo$$44, genOk$$3, 1, m2$$1, tcref$$62, id2$$18, rest2$$14));
                break;
              }

            case 1:
              {
                tyconSearch$$6 = NoResultsOrUsefulErrors();
                break;
              }
          }
        } else {
          tyconSearch$$6 = NoResultsOrUsefulErrors();
        }

        const modulSearch$$1 = (0, _illib.ResultOrExceptionModule$$$op_BarQmarkGreater)(ResolveLongIndentAsModuleOrNamespaceThen(sink$$30, new ResultCollectionSettings(0, "AllResults"), NameResolver$$get_amap(ncenv$$25), m2$$1, fullyQualified$$4, nenv$$59, ad$$47, id$$31, rest$$24, false, function (resInfo$$45, depth$$14, m$$76, modref$$30, _mty$$1, id$$32, rest$$25) {
          return ResolveTypeLongIdentInModuleOrNamespace(sink$$30, nenv$$59, ncenv$$25, typeNameResInfo$$14, ad$$47, genOk$$3, resInfo$$45, depth$$14, m$$76, modref$$30, _mty$$1, id$$32, rest$$25);
        }), function (lists) {
          return (0, _List.concat)(lists);
        });

        const modulSearchFailed = function modulSearchFailed() {
          return (0, _illib.ResultOrExceptionModule$$$op_BarQmarkGreater)(ResolveLongIndentAsModuleOrNamespaceThen(sink$$30, new ResultCollectionSettings(0, "AllResults"), NameResolver$$get_amap(ncenv$$25), m2$$1, fullyQualified$$4, nenv$$59, new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode"), id$$31, rest$$24, false, function (resInfo$$46, depth$$15, m$$77, modref$$31, _mty$$2, id$$33, rest$$26) {
            return ResolveTypeLongIdentInModuleOrNamespace(sink$$30, nenv$$59, ncenv$$25, TypeNameResolutionInfo$$get_DropStaticArgsInfo(typeNameResInfo$$14), new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode"), genOk$$3, resInfo$$46, depth$$15, m$$77, modref$$31, _mty$$2, id$$33, rest$$26);
          }), function (lists$$1) {
            return (0, _List.concat)(lists$$1);
          });
        };

        const searchSoFar = AddResults(tyconSearch$$6, modulSearch$$1);

        if (searchSoFar.tag === 0) {
          const results$$2 = searchSoFar.fields[0];
          const tcrefs$$39 = CheckForTypeLegitimacyAndMultipleGenericTypeAmbiguities(results$$2, typeNameResInfo$$14, genOk$$3, m$$75);

          if (tcrefs$$39.tail == null) {
            const r$$4 = AddResults(searchSoFar, modulSearchFailed());
            return AtMostOneResult(m2$$1, (0, _illib.ResultOrExceptionModule$$$op_BarQmarkGreater)(r$$4, function (tcrefs$$40) {
              return CheckForTypeLegitimacyAndMultipleGenericTypeAmbiguities(tcrefs$$40, typeNameResInfo$$14, genOk$$3, m$$75);
            }));
          } else {
            const tcref$$63 = tcrefs$$39.head[1];
            const resInfo$$47 = tcrefs$$39.head[0];
            return (0, _illib.ResultOrExceptionModule$$$success)([resInfo$$47, tcref$$63]);
          }
        } else {
          const r$$5 = AddResults(searchSoFar, modulSearchFailed());
          return AtMostOneResult(m2$$1, (0, _illib.ResultOrExceptionModule$$$op_BarQmarkGreater)(r$$5, function (tcrefs$$41) {
            return CheckForTypeLegitimacyAndMultipleGenericTypeAmbiguities(tcrefs$$41, typeNameResInfo$$14, genOk$$3, m$$75);
          }));
        }
      } else {
        const matchValue$$65 = LookupTypeNameInEnvHaveArity(fullyQualified$$4, (0, _ast.Ident$$get_idText)(id$$31), TypeNameResolutionStaticArgsInfo$$get_NumStaticArgs(staticResInfo$$4), nenv$$59);

        if (matchValue$$65 == null) {
          const tcrefs$$38 = LookupTypeNameInEnvNoArity(fullyQualified$$4, (0, _ast.Ident$$get_idText)(id$$31), nenv$$59);

          if (tcrefs$$38.tail == null) {
            const suggestPossibleTypes$$2 = function suggestPossibleTypes$$2() {
              return new Set((0, _Seq.collect)(function mapping$$59(e$$32) {
                if (occurence$$1.tag === 3) {
                  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
                    return (0, _Seq.append)((0, _Seq.singleton)((0, _tast.EntityRef$$get_DisplayName)(e$$32[1])), (0, _Seq.delay)(function () {
                      return (0, _Seq.append)((0, _Seq.singleton)((0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(e$$32[1])), (0, _Seq.delay)(function () {
                        return (0, _String.endsWith)((0, _tast.EntityRef$$get_DisplayName)(e$$32[1]), "Attribute", 4) ? (0, _Seq.singleton)((0, _String.replace)((0, _tast.EntityRef$$get_DisplayName)(e$$32[1]), "Attribute", "")) : (0, _Seq.empty)();
                      }));
                    }));
                  }));
                } else {
                  return (0, _Types.L)((0, _tast.EntityRef$$get_DisplayName)(e$$32[1]), (0, _Types.L)((0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(e$$32[1]), (0, _Types.L)()));
                }
              }, (0, _Seq.filter)(function predicate$$26(kv$$7) {
                return (0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$25), m$$75, ad$$47, kv$$7[1]);
              }, NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D(nenv$$59, fullyQualified$$4))));
            };

            return (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(0, _FSComp.SR$$$undefinedNameType$$Z721C83C5, id$$31, suggestPossibleTypes$$2));
          } else {
            const tcref$$60 = tcrefs$$38.head;
            const _tcrefs = tcrefs$$38.tail;
            return (0, _illib.ResultOrExceptionModule$$$success)([ResolutionInfo$$$get_Empty(), tcref$$60]);
          }
        } else {
          const res$$33 = matchValue$$65;
          const res$$34 = CheckForTypeLegitimacyAndMultipleGenericTypeAmbiguities((0, _Types.L)([ResolutionInfo$$$get_Empty(), res$$33], (0, _Types.L)()), typeNameResInfo$$14, genOk$$3, (0, _range.unionRanges)(m$$75, (0, _ast.Ident$$get_idRange)(id$$31)));
          return (0, _illib.ResultOrExceptionModule$$$success)((0, _List.head)(res$$34));
        }
      }
    }
  }
}

function ResolveTypeLongIdent(sink$$31, ncenv$$26, occurence$$2, fullyQualified$$5, nenv$$60, ad$$49, lid$$4, staticResInfo$$5, genOk$$4) {
  const m$$78 = (0, _ast.rangeOfLid)(lid$$4);
  let res$$35;

  if (lid$$4.tail != null) {
    const rest$$27 = lid$$4.tail;
    const id$$34 = lid$$4.head;
    res$$35 = ResolveTypeLongIdentPrim(sink$$31, ncenv$$26, occurence$$2, true, fullyQualified$$5, m$$78, nenv$$60, ad$$49, id$$34, rest$$27, staticResInfo$$5, genOk$$4);
  } else {
    res$$35 = (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrUnexpectedEmptyLongId)(), m$$78));
  }

  if (res$$35.tag === 0) {
    const tcref$$64 = res$$35.fields[0][1];
    const resInfo$$48 = res$$35.fields[0][0];
    ResolutionInfo$$$SendEntityPathToSink$$Z7B7DC02C(sink$$31, ncenv$$26, nenv$$60, new ItemOccurence(2, "UseInType"), ad$$49, resInfo$$48, new ResultTyparChecker(0, "ResultTyparChecker", function () {
      return true;
    }));
    const item$$37 = new Item(14, "Types", (0, _tast.EntityRef$$get_DisplayName)(tcref$$64), (0, _Types.L)(FreshenTycon(ncenv$$26, m$$78, tcref$$64), (0, _Types.L)()));
    CallNameResolutionSink(sink$$31, m$$78, nenv$$60, item$$37, item$$37, _TastOps.emptyTyparInst, occurence$$2, nenv$$60.eDisplayEnv, ad$$49);
  }

  return (0, _illib.ResultOrExceptionModule$$$op_BarQmarkGreater)(res$$35, function (tuple) {
    return tuple[1];
  });
}

function ResolveFieldInModuleOrNamespace(ncenv$$27, nenv$$61, ad$$50, resInfo$$49, depth$$16, m$$79, modref$$32, _mty$$3, id$$35, rest$$28) {
  var tycon$$11;
  const typeNameResInfo$$16 = TypeNameResolutionInfo$$$get_Default();
  const m$$80 = (0, _range.unionRanges)(m$$79, (0, _ast.Ident$$get_idRange)(id$$35));
  let modulScopedFieldNames;
  const matchValue$$67 = TryFindTypeWithRecdField(modref$$32, id$$35);
  var $target$$182, tycon$$12;

  if (matchValue$$67 != null) {
    if (tycon$$11 = matchValue$$67, (0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$27), m$$80, ad$$50, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$32, tycon$$11))) {
      $target$$182 = 0;
      tycon$$12 = matchValue$$67;
    } else {
      $target$$182 = 1;
    }
  } else {
    $target$$182 = 1;
  }

  switch ($target$$182) {
    case 0:
      {
        const showDeprecated$$1 = (0, _TastOps.HasFSharpAttribute)(NameResolver$$get_g(ncenv$$27), (0, _TcGlobals.TcGlobals$$get_attrib_RequireQualifiedAccessAttribute)(NameResolver$$get_g(ncenv$$27)), (0, _tast.Entity$$get_Attribs)(tycon$$12));
        modulScopedFieldNames = (0, _illib.ResultOrExceptionModule$$$success)((0, _Types.L)([resInfo$$49, new FieldResolution(0, "FieldResolution", (0, _tast.EntityRef$$RecdFieldRefInNestedTycon)(modref$$32, tycon$$12, id$$35), showDeprecated$$1), rest$$28], (0, _Types.L)()));
        break;
      }

    case 1:
      {
        modulScopedFieldNames = (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(depth$$16, _FSComp.SR$$$undefinedNameRecordLabelOrNamespace$$Z721C83C5, id$$35, function () {
          return (0, _ErrorLogger.NoSuggestions)();
        }));
        break;
      }
  }

  const tyconSearch$$9 = function tyconSearch$$9() {
    if (rest$$28.tail != null) {
      const rest2$$15 = rest$$28.tail;
      const id2$$19 = rest$$28.head;
      const tcrefs$$42 = LookupTypeNameInEntityMaybeHaveArity(NameResolver$$get_amap(ncenv$$27), (0, _ast.Ident$$get_idRange)(id$$35), ad$$50, (0, _ast.Ident$$get_idText)(id$$35), new TypeNameResolutionStaticArgsInfo(0, "Indefinite"), modref$$32);

      if (tcrefs$$42.tail == null) {
        return NoResultsOrUsefulErrors();
      } else {
        const tcrefs$$43 = (0, _List.map)(function mapping$$60(tcref$$65) {
          return [ResolutionInfo$$$get_Empty(), tcref$$65];
        }, tcrefs$$42);
        const tyconSearch$$7 = ResolveLongIdentInTyconRefs(new ResultCollectionSettings(0, "AllResults"), ncenv$$27, nenv$$61, new LookupKind(0, "RecdField"), depth$$16 + 1, m$$80, ad$$50, id2$$19, rest2$$15, typeNameResInfo$$16, (0, _ast.Ident$$get_idRange)(id$$35), tcrefs$$43);
        const tyconSearch$$8 = (0, _illib.ResultOrExceptionModule$$$op_BarQmarkGreater)(tyconSearch$$7, function (list$$57) {
          return (0, _List.choose)(function chooser$$4(_arg1$$25) {
            if (_arg1$$25[1].tag === 5) {
              const rfref$$1 = _arg1$$25[1].fields[0].fields[1];
              return [_arg1$$25[0], new FieldResolution(0, "FieldResolution", rfref$$1, false), _arg1$$25[2]];
            } else {
              return null;
            }
          }, list$$57);
        });
        return tyconSearch$$8;
      }
    } else {
      return NoResultsOrUsefulErrors();
    }
  };

  const modulSearch$$2 = function modulSearch$$2() {
    if (rest$$28.tail != null) {
      const rest2$$16 = rest$$28.tail;
      const id2$$20 = rest$$28.head;
      const matchValue$$68 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)((0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$32)), (0, _ast.Ident$$get_idText)(id$$35));
      var $target$$183, submodref$$3;

      if (matchValue$$68 != null) {
        const activePatternResult40687 = $007CAccessibleEntityRef$007C_$007C(NameResolver$$get_amap(ncenv$$27), m$$80, ad$$50, modref$$32, matchValue$$68);

        if (activePatternResult40687 != null) {
          $target$$183 = 0;
          submodref$$3 = activePatternResult40687;
        } else {
          $target$$183 = 1;
        }
      } else {
        $target$$183 = 1;
      }

      switch ($target$$183) {
        case 0:
          {
            const resInfo$$51 = ResolutionInfo$$AddEntity$$Z30807AE9(resInfo$$49, [(0, _ast.Ident$$get_idRange)(id$$35), submodref$$3]);
            return OneResult(ResolveFieldInModuleOrNamespace(ncenv$$27, nenv$$61, ad$$50, resInfo$$51, depth$$16 + 1, m$$80, submodref$$3, (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(submodref$$3), id2$$20, rest2$$16));
          }

        case 1:
          {
            return (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(depth$$16, _FSComp.SR$$$undefinedNameRecordLabelOrNamespace$$Z721C83C5, id$$35, function () {
              return (0, _ErrorLogger.NoSuggestions)();
            }));
          }
      }
    } else {
      return (0, _illib.ResultOrExceptionModule$$$raze)(new _tast.UndefinedName(depth$$16, _FSComp.SR$$$undefinedNameRecordLabelOrNamespace$$Z721C83C5, id$$35, function () {
        return (0, _ErrorLogger.NoSuggestions)();
      }));
    }
  };

  return AtMostOneResult(m$$80, AtMostOneResultQuery(modulSearch$$2, AtMostOneResultQuery(tyconSearch$$9, modulScopedFieldNames)));
}

function SuggestOtherLabelsOfSameRecordType(g$$31, nenv$$62, ty$$32, id$$36, allFields) {
  const labelsOfPossibleRecord = GetRecordLabelsForType(g$$31, nenv$$62, ty$$32);
  const givenFields = (0, _List.filter)(function predicate$$27(y$$1) {
    return (0, _ast.Ident$$get_idText)(id$$36) !== y$$1;
  }, (0, _List.map)(function mapping$$61(fld) {
    return (0, _ast.Ident$$get_idText)(fld);
  }, allFields));
  (0, _Set.exceptWith)(labelsOfPossibleRecord, givenFields);
  return labelsOfPossibleRecord;
}

function SuggestLabelsOfRelatedRecords(g$$32, nenv$$63, id$$37, allFields$$1) {
  const suggestLabels = function suggestLabels() {
    const givenFields$$1 = new Set((0, _List.filter)(function predicate$$28(y$$2) {
      return (0, _ast.Ident$$get_idText)(id$$37) !== y$$2;
    }, (0, _List.map)(function mapping$$62(fld$$1) {
      return (0, _ast.Ident$$get_idText)(fld$$1);
    }, allFields$$1)));
    let fullyQualfied;

    if (givenFields$$1.size === 0) {
      const result$$1 = new Set((0, _lib.NameMapModule$$$domainL)(nenv$$63.eFieldLabels));
      result$$1.delete("contents");
      fullyQualfied = result$$1;
    } else {
      const possibleRecords = new Set((0, _List.map)(function mapping$$66(tuple$$3) {
        return tuple$$3[0];
      }, (0, _List.filter)(function predicate$$29(tupledArg$$24) {
        return (0, _Set.isSubsetOf)(givenFields$$1, tupledArg$$24[1], {
          Compare: _Util.comparePrimitives
        });
      }, (0, _List.map)(function mapping$$65(tupledArg$$23) {
        return [tupledArg$$23[0], (0, _List.map)(function mapping$$64(tuple$$2) {
          return tuple$$2[1];
        }, tupledArg$$23[1])];
      }, (0, _List.groupBy)(function projection$$6(tuple$$1) {
        return tuple$$1[0];
      }, (0, _List.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.collect)(function (fld$$2) {
          const matchValue$$69 = (0, _Map.tryFind)(fld$$2, nenv$$63.eFieldLabels);

          if (matchValue$$69 != null) {
            const recordTypes = matchValue$$69;
            return (0, _List.map)(function mapping$$63(r$$6) {
              return [(0, _tast.EntityRef$$get_DisplayName)((0, _tast.RecdFieldRef$$get_TyconRef)(r$$6)), fld$$2];
            }, recordTypes);
          } else {
            return (0, _Seq.empty)();
          }
        }, givenFields$$1);
      })), {
        Equals($x$$39, $y$$40) {
          return $x$$39 === $y$$40;
        },

        GetHashCode: _Util.structuralHash
      })))));
      const labelsOfPossibleRecords = new Set((0, _Seq.map)(function mapping$$68(kv$$9) {
        return kv$$9[0];
      }, (0, _Seq.filter)(function predicate$$31(kv$$8) {
        return (0, _List.exists)(function predicate$$30(arg00$$45) {
          return possibleRecords.has(arg00$$45);
        }, (0, _List.map)(function mapping$$67(r$$8) {
          return (0, _tast.EntityRef$$get_DisplayName)((0, _tast.RecdFieldRef$$get_TyconRef)(r$$8));
        }, kv$$8[1]));
      }, nenv$$63.eFieldLabels)));
      (0, _Set.exceptWith)(labelsOfPossibleRecords, givenFields$$1);
      fullyQualfied = labelsOfPossibleRecords;
    }

    if (fullyQualfied.size > 0) {
      return fullyQualfied;
    } else {
      return new Set((0, _Seq.map)(function mapping$$69(t$$3) {
        return (0, _tast.EntityRef$$get_DisplayName)(t$$3) + "." + (0, _ast.Ident$$get_idText)(id$$37);
      }, (0, _Seq.choose)(function chooser$$5(e$$33) {
        const hasRequireQualifiedAccessAttribute$$4 = (0, _TastOps.HasFSharpAttribute)(g$$32, (0, _TcGlobals.TcGlobals$$get_attrib_RequireQualifiedAccessAttribute)(g$$32), (0, _tast.EntityRef$$get_Attribs)(e$$33[1]));

        if (!hasRequireQualifiedAccessAttribute$$4) {
          return null;
        } else if ((0, _tast.EntityRef$$get_IsRecordTycon)(e$$33[1]) ? (0, _Seq.exists)(function predicate$$32(x$$27) {
          return (0, _tast.RecdField$$get_Name)(x$$27) === (0, _ast.Ident$$get_idText)(id$$37);
        }, (0, _tast.EntityRef$$get_AllFieldsArray)(e$$33[1])) : false) {
          return e$$33[1];
        } else {
          return null;
        }
      }, nenv$$63.eTyconsByDemangledNameAndArity)));
    }
  };

  return new _tast.UndefinedName(0, _FSComp.SR$$$undefinedNameRecordLabel$$Z721C83C5, id$$37, suggestLabels);
}

function ResolveFieldPrim(sink$$32, ncenv$$28, nenv$$64, ad$$51, ty$$33, mp, id$$38, allFields$$2) {
  var copyOfStruct$$2;
  const typeNameResInfo$$17 = TypeNameResolutionInfo$$$get_Default();
  const g$$33 = NameResolver$$get_g(ncenv$$28);
  const m$$81 = (0, _ast.Ident$$get_idRange)(id$$38);

  if (mp.tail == null) {
    const lookup = function lookup() {
      let frefs;

      try {
        frefs = (0, _Map.find)((0, _ast.Ident$$get_idText)(id$$38), nenv$$64.eFieldLabels);
      } catch (matchValue$$70) {
        if (false) {
          frefs = (0, _ErrorLogger.error)(SuggestLabelsOfRelatedRecords(g$$33, nenv$$64, id$$38, allFields$$2));
        } else {
          throw matchValue$$70;
        }
      }

      return (0, _List.map)(function mapping$$70(x$$28) {
        return [ResolutionInfo$$$get_Empty(), new FieldResolution(0, "FieldResolution", x$$28, false)];
      }, (0, _lib.ListSet$$$setify)(function f$$30(fref1, fref2) {
        return (0, _TastOps.tyconRefEq)(g$$33, (0, _tast.RecdFieldRef$$get_TyconRef)(fref1), (0, _tast.RecdFieldRef$$get_TyconRef)(fref2));
      }, frefs));
    };

    if ((0, _TastOps.isAppTy)(g$$33, ty$$33)) {
      const matchValue$$71 = (0, _InfoReader.InfoReader$$TryFindRecdOrClassFieldInfoOfType$$ZE7EC41B)(NameResolver$$get_InfoReader(ncenv$$28), (0, _ast.Ident$$get_idText)(id$$38), m$$81, ty$$33);

      if (matchValue$$71 == null) {
        if ((0, _TastOps.isRecdTy)(g$$33, ty$$33)) {
          const suggestLabels$$1 = function suggestLabels$$1() {
            return SuggestOtherLabelsOfSameRecordType(g$$33, nenv$$64, ty$$33, id$$38, allFields$$2);
          };

          const typeName$$1 = (0, _NicePrint.minimalStringOfType)(nenv$$64.eDisplayEnv, ty$$33);
          const errorText = (0, _FSComp.SR$$$nrRecordDoesNotContainSuchLabel$$Z384F8060)(typeName$$1, (0, _ast.Ident$$get_idText)(id$$38));
          return (0, _ErrorLogger.error)(new _ErrorLogger.ErrorWithSuggestions(errorText, m$$81, (0, _ast.Ident$$get_idText)(id$$38), suggestLabels$$1));
        } else {
          return lookup();
        }
      } else {
        const rfref$$2 = matchValue$$71.fields[1];
        return (0, _Types.L)([ResolutionInfo$$$get_Empty(), new FieldResolution(0, "FieldResolution", rfref$$2, false)], (0, _Types.L)());
      }
    } else {
      return lookup();
    }
  } else {
    const lid$$5 = (0, _List.append)(mp, (0, _Types.L)(id$$38, (0, _Types.L)()));

    const tyconSearch$$12 = function tyconSearch$$12(ad$$52, unitVar1$$37) {
      var $target$$184, id2$$21, rest2$$17, tn;

      if (lid$$5.tail != null) {
        if (lid$$5.tail.tail != null) {
          $target$$184 = 0;
          id2$$21 = lid$$5.tail.head;
          rest2$$17 = lid$$5.tail.tail;
          tn = lid$$5.head;
        } else {
          $target$$184 = 1;
        }
      } else {
        $target$$184 = 1;
      }

      switch ($target$$184) {
        case 0:
          {
            const m$$82 = (0, _ast.Ident$$get_idRange)(tn);
            const tcrefs$$44 = LookupTypeNameInEnvNoArity(new FullyQualifiedFlag(1, "OpenQualified"), (0, _ast.Ident$$get_idText)(tn), nenv$$64);

            if (tcrefs$$44.tail == null) {
              return NoResultsOrUsefulErrors();
            } else {
              const tcrefs$$45 = (0, _List.map)(function mapping$$71(tcref$$66) {
                return [ResolutionInfo$$$get_Empty(), tcref$$66];
              }, tcrefs$$44);
              const tyconSearch$$10 = ResolveLongIdentInTyconRefs(new ResultCollectionSettings(0, "AllResults"), ncenv$$28, nenv$$64, new LookupKind(0, "RecdField"), 1, m$$82, ad$$52, id2$$21, rest2$$17, typeNameResInfo$$17, (0, _ast.Ident$$get_idRange)(tn), tcrefs$$45);
              const tyconSearch$$11 = (0, _illib.ResultOrExceptionModule$$$op_BarQmarkGreater)(tyconSearch$$10, function (list$$72) {
                return (0, _List.choose)(function chooser$$6(_arg1$$27) {
                  if (_arg1$$27[1].tag === 5) {
                    const rfref$$3 = _arg1$$27[1].fields[0].fields[1];
                    return [_arg1$$27[0], new FieldResolution(0, "FieldResolution", rfref$$3, false), _arg1$$27[2]];
                  } else {
                    return null;
                  }
                }, list$$72);
              });
              return tyconSearch$$11;
            }
          }

        case 1:
          {
            return NoResultsOrUsefulErrors();
          }
      }
    };

    const modulSearch$$3 = function modulSearch$$3(ad$$53, unitVar1$$38) {
      if (lid$$5.tail != null) {
        const rest2$$18 = lid$$5.tail;
        const id2$$22 = lid$$5.head;
        return ResolveLongIndentAsModuleOrNamespaceThen(sink$$32, new ResultCollectionSettings(1, "AtMostOneResult"), NameResolver$$get_amap(ncenv$$28), m$$81, new FullyQualifiedFlag(1, "OpenQualified"), nenv$$64, ad$$53, id2$$22, rest2$$18, false, function (resInfo$$53, depth$$17, m$$83, modref$$33, _mty$$4, id$$39, rest$$31) {
          return ResolveFieldInModuleOrNamespace(ncenv$$28, nenv$$64, ad$$53, resInfo$$53, depth$$17, m$$83, modref$$33, _mty$$4, id$$39, rest$$31);
        });
      } else {
        return NoResultsOrUsefulErrors();
      }
    };

    const patternInput$$10 = (0, _illib.ResultOrExceptionModule$$$ForceRaise)(AtMostOneResult(m$$81, AtMostOneResultQuery((0, _Util.partialApply)(1, tyconSearch$$12, [new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode")]), AtMostOneResultQuery((0, _Util.partialApply)(1, modulSearch$$3, [new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode")]), AtMostOneResultQuery((0, _Util.partialApply)(1, tyconSearch$$12, [ad$$51]), modulSearch$$3(ad$$51, null))))));

    if (!(patternInput$$10[2].tail == null)) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$nrInvalidFieldLabel)(), (copyOfStruct$$2 = (0, _List.head)(patternInput$$10[2]), (0, _ast.Ident$$get_idRange)(copyOfStruct$$2))));
    }

    return (0, _Types.L)([patternInput$$10[0], patternInput$$10[1]], (0, _Types.L)());
  }
}

function ResolveField(sink$$33, ncenv$$29, nenv$$65, ad$$54, ty$$34, mp$$1, id$$40, allFields$$3) {
  const res$$40 = ResolveFieldPrim(sink$$33, ncenv$$29, nenv$$65, ad$$54, ty$$34, mp$$1, id$$40, allFields$$3);
  const checker = new ResultTyparChecker(0, "ResultTyparChecker", function () {
    return true;
  });
  return (0, _List.map)(function mapping$$72(tupledArg$$25) {
    ResolutionInfo$$$SendEntityPathToSink$$Z7B7DC02C(sink$$33, ncenv$$29, nenv$$65, new ItemOccurence(2, "UseInType"), ad$$54, tupledArg$$25[0], checker);
    return tupledArg$$25[1];
  }, res$$40);
}

function FreshenRecdFieldRef(ncenv$$30, m$$84, rfref$$5) {
  return new Item(5, "RecdField", new _infos.RecdFieldInfo(0, "RecdFieldInfo", NameResolver$$get_InstantiationGenerator(ncenv$$30)(m$$84)((0, _tast.Entity$$Typars$$4DB9192C)((0, _tast.RecdFieldRef$$get_Tycon)(rfref$$5), m$$84)), rfref$$5));
}

function ResolveExprDotLongIdent(ncenv$$31, m$$85, ad$$55, nenv$$66, ty$$35, id$$41, rest$$33, findFlag$$8) {
  const typeNameResInfo$$18 = TypeNameResolutionInfo$$$get_Default();
  const adhoctDotSearchAccessible = AtMostOneResult(m$$85, ResolveLongIdentInTypePrim(ncenv$$31, nenv$$66, new LookupKind(2, "Expr"), ResolutionInfo$$$get_Empty(), 1, m$$85, ad$$55, id$$41, rest$$33, findFlag$$8, typeNameResInfo$$18, ty$$35));

  if (adhoctDotSearchAccessible.tag === 1) {
    let dotFieldIdSearch;

    if ((0, _TastOps.isAppTy)(NameResolver$$get_g(ncenv$$31), ty$$35)) {
      dotFieldIdSearch = NoResultsOrUsefulErrors();
    } else {
      const matchValue$$72 = (0, _Map.tryFind)((0, _ast.Ident$$get_idText)(id$$41), nenv$$66.eFieldLabels);
      var $target$$185, rfref$$6;

      if (matchValue$$72 != null) {
        if (matchValue$$72.tail != null) {
          $target$$185 = 0;
          rfref$$6 = matchValue$$72.head;
        } else {
          $target$$185 = 1;
        }
      } else {
        $target$$185 = 1;
      }

      switch ($target$$185) {
        case 0:
          {
            const item$$39 = FreshenRecdFieldRef(ncenv$$31, m$$85, rfref$$6);
            dotFieldIdSearch = OneSuccess([ResolutionInfo$$$get_Empty(), item$$39, rest$$33]);
            break;
          }

        case 1:
          {
            dotFieldIdSearch = NoResultsOrUsefulErrors();
            break;
          }
      }
    }

    const adhocDotSearchAll = function adhocDotSearchAll() {
      return ResolveLongIdentInTypePrim(ncenv$$31, nenv$$66, new LookupKind(2, "Expr"), ResolutionInfo$$$get_Empty(), 1, m$$85, new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode"), id$$41, rest$$33, findFlag$$8, typeNameResInfo$$18, ty$$35);
    };

    return (0, _illib.ResultOrExceptionModule$$$ForceRaise)(AtMostOneResult(m$$85, AtMostOneResultQuery(adhocDotSearchAll, dotFieldIdSearch)));
  } else {
    return (0, _illib.ResultOrExceptionModule$$$ForceRaise)(adhoctDotSearchAccessible);
  }
}

function ComputeItemRange(wholem, lid$$6, rest$$34) {
  if (rest$$34.tail == null) {
    return wholem;
  } else {
    const ids = (0, _List.truncate)((0, _Util.max)(_Util.comparePrimitives, 0, (0, _List.length)(lid$$6) - (0, _List.length)(rest$$34)), lid$$6);

    if (ids.tail == null) {
      return wholem;
    } else {
      return (0, _ast.rangeOfLid)(ids);
    }
  }
}

function FilterMethodGroups(ncenv$$32, itemRange, item$$40, staticOnly) {
  if (item$$40.tag === 10) {
    const orig$$2 = item$$40.fields[2];
    const nm$$28 = item$$40.fields[0];
    const minfos$$12 = item$$40.fields[1];
    const minfos$$13 = (0, _List.filter)(function predicate$$33(minfo$$9) {
      return staticOnly === ((0, _infos.MethInfo$$GetObjArgTypes$$Z5D984B3C)(minfo$$9, NameResolver$$get_amap(ncenv$$32), itemRange, (0, _infos.MethInfo$$get_FormalMethodInst)(minfo$$9)).tail == null);
    }, minfos$$12);
    return new Item(10, "MethodGroup", nm$$28, minfos$$13, orig$$2);
  } else {
    const item$$41 = item$$40;
    return item$$41;
  }
}

function NeedsWorkAfterResolution(namedItem) {
  var $target$$186, minfos$$14, pinfos$$8, vref$$29, minfo$$11, apref$$5;

  if (namedItem.tag === 10) {
    $target$$186 = 0;
    minfos$$14 = namedItem.fields[1];
  } else if (namedItem.tag === 11) {
    $target$$186 = 0;
    minfos$$14 = namedItem.fields[1];
  } else if (namedItem.tag === 9) {
    $target$$186 = 1;
    pinfos$$8 = namedItem.fields[1];
  } else if (namedItem.tag === 19) {
    if (namedItem.fields[1].contents != null) {
      if (namedItem.fields[1].contents.tag === 0) {
        $target$$186 = 2;
        vref$$29 = namedItem.fields[1].contents.fields[1];
      } else {
        $target$$186 = 5;
      }
    } else {
      $target$$186 = 5;
    }
  } else if (namedItem.tag === 0) {
    $target$$186 = 2;
    vref$$29 = namedItem.fields[0];
  } else if (namedItem.tag === 16) {
    $target$$186 = 2;
    vref$$29 = namedItem.fields[1];
  } else if (namedItem.tag === 15) {
    if (namedItem.fields[2] != null) {
      $target$$186 = 3;
      minfo$$11 = namedItem.fields[2];
    } else {
      $target$$186 = 5;
    }
  } else if (namedItem.tag === 3) {
    $target$$186 = 4;
    apref$$5 = namedItem.fields[0];
  } else {
    $target$$186 = 5;
  }

  switch ($target$$186) {
    case 0:
      {
        if ((0, _List.length)(minfos$$14) > 1) {
          return true;
        } else {
          return (0, _List.exists)(function predicate$$34(minfo$$10) {
            return !((0, _infos.MethInfo$$get_FormalMethodInst)(minfo$$10).tail == null);
          }, minfos$$14);
        }
      }

    case 1:
      {
        return (0, _List.length)(pinfos$$8) > 1;
      }

    case 2:
      {
        return !((0, _tast.ValRef$$get_Typars)(vref$$29).tail == null);
      }

    case 3:
      {
        return !((0, _infos.MethInfo$$get_FormalMethodInst)(minfo$$11).tail == null);
      }

    case 4:
      {
        return !((0, _tast.ValRef$$get_Typars)((0, _tast.ActivePatternElemRef$$get_ActivePatternVal)(apref$$5)).tail == null);
      }

    case 5:
      {
        return false;
      }
  }
}

const AfterResolution = (0, _Types.declare)(function AfterResolution(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AfterResolution = AfterResolution;

function ResolveLongIdentAsExprAndComputeRange(sink$$34, ncenv$$33, wholem$$1, ad$$56, nenv$$67, typeNameResInfo$$19, lid$$7) {
  var name$$3, minfos1$$1;
  const patternInput$$11 = ResolveExprLongIdent(sink$$34, ncenv$$33, wholem$$1, ad$$56, nenv$$67, typeNameResInfo$$19, lid$$7);
  const itemRange$$1 = ComputeItemRange(wholem$$1, lid$$7, patternInput$$11[1]);
  const item$$42 = FilterMethodGroups(ncenv$$33, itemRange$$1, patternInput$$11[0], true);
  const matchValue$$73 = [patternInput$$11[0], item$$42];
  var $target$$187, minfos1$$2, name$$4;

  if (matchValue$$73[0].tag === 10) {
    if (matchValue$$73[1].tag === 10) {
      if (matchValue$$73[1].fields[1].tail == null) {
        if (name$$3 = matchValue$$73[0].fields[0], (minfos1$$1 = matchValue$$73[0].fields[1], !(minfos1$$1.tail == null))) {
          $target$$187 = 0;
          minfos1$$2 = matchValue$$73[0].fields[1];
          name$$4 = matchValue$$73[0].fields[0];
        } else {
          $target$$187 = 1;
        }
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
        (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$methodIsNotStatic$$Z721C83C5)(name$$4), wholem$$1));
        break;
      }
  }

  const isFakeIdents = lid$$7.tail != null ? lid$$7.tail.tail == null ? false : (0, _List.forAll)(function predicate$$35(id$$42) {
    return (0, _Util.equals)((0, _ast.Ident$$get_idRange)(id$$42), (0, _ast.Ident$$get_idRange)(lid$$7.head));
  }, lid$$7.tail) : false;

  const callSink = function callSink(tupledArg$$26) {
    if (!isFakeIdents) {
      const occurence$$3 = item$$42.tag === 2 ? new ItemOccurence(0, "Binding") : new ItemOccurence(1, "Use");
      CallNameResolutionSink(sink$$34, itemRange$$1, nenv$$67, tupledArg$$26[0], item$$42, tupledArg$$26[1], occurence$$3, NameResolutionEnv$$get_DisplayEnv(nenv$$67), ad$$56);
    }
  };

  const callSinkWithSpecificOverload = function callSinkWithSpecificOverload(tupledArg$$27) {
    let refinedItem$$1;
    var $target$$188;

    if (tupledArg$$27[1] == null) {
      if ((0, _infos.MethInfo$$get_IsConstructor)(tupledArg$$27[0])) {
        $target$$188 = 0;
      } else {
        $target$$188 = 1;
      }
    } else {
      $target$$188 = 1;
    }

    switch ($target$$188) {
      case 0:
        {
          refinedItem$$1 = new Item(11, "CtorGroup", (0, _infos.MethInfo$$get_LogicalName)(tupledArg$$27[0]), (0, _Types.L)(tupledArg$$27[0], (0, _Types.L)()));
          break;
        }

      case 1:
        {
          if (tupledArg$$27[1] != null) {
            const pinfo$$8 = tupledArg$$27[1];
            refinedItem$$1 = new Item(9, "Property", (0, _infos.PropInfo$$get_PropertyName)(pinfo$$8), (0, _Types.L)(pinfo$$8, (0, _Types.L)()));
          } else {
            refinedItem$$1 = new Item(10, "MethodGroup", (0, _infos.MethInfo$$get_LogicalName)(tupledArg$$27[0]), (0, _Types.L)(tupledArg$$27[0], (0, _Types.L)()), null);
          }

          break;
        }
    }

    callSink([refinedItem$$1, tupledArg$$27[2]]);
  };

  let afterResolution;

  if (sink$$34.CurrentSink != null) {
    if (NeedsWorkAfterResolution(item$$42)) {
      afterResolution = new AfterResolution(1, "RecordResolution", null, function (tpinst$$6) {
        callSink([item$$42, tpinst$$6]);
      }, callSinkWithSpecificOverload, function () {
        callSink([item$$42, _TastOps.emptyTyparInst]);
      });
    } else {
      callSink([item$$42, _TastOps.emptyTyparInst]);
      afterResolution = new AfterResolution(0, "DoNothing");
    }
  } else {
    afterResolution = new AfterResolution(0, "DoNothing");
  }

  return [item$$42, itemRange$$1, patternInput$$11[1], afterResolution];
}

function $007CNonOverridable$007C_$007C(namedItem$$1) {
  var pinfos$$9, minfos$$15;
  var $target$$189, minfos$$16;

  if (namedItem$$1.tag === 10) {
    if (minfos$$15 = namedItem$$1.fields[1], (0, _List.exists)(function predicate$$36(minfo$$13) {
      if ((0, _infos.MethInfo$$get_IsVirtual)(minfo$$13)) {
        return true;
      } else {
        return (0, _infos.MethInfo$$get_IsAbstract)(minfo$$13);
      }
    }, minfos$$15)) {
      $target$$189 = 0;
      minfos$$16 = namedItem$$1.fields[1];
    } else {
      $target$$189 = 1;
    }
  } else {
    $target$$189 = 1;
  }

  switch ($target$$189) {
    case 0:
      {
        return null;
      }

    case 1:
      {
        var $target$$190, pinfos$$10;

        if (namedItem$$1.tag === 9) {
          if (pinfos$$9 = namedItem$$1.fields[1], (0, _List.exists)(function predicate$$37(pinfo$$9) {
            return (0, _infos.PropInfo$$get_IsVirtualProperty)(pinfo$$9);
          }, pinfos$$9)) {
            $target$$190 = 0;
            pinfos$$10 = namedItem$$1.fields[1];
          } else {
            $target$$190 = 1;
          }
        } else {
          $target$$190 = 1;
        }

        switch ($target$$190) {
          case 0:
            {
              return null;
            }

          case 1:
            {
              return (0, _Option.some)(null);
            }
        }
      }
  }
}

function ResolveExprDotLongIdentAndComputeRange(sink$$35, ncenv$$34, wholem$$2, ad$$57, nenv$$68, ty$$36, lid$$8, findFlag$$9, thisIsActuallyATyAppNotAnExpr) {
  const resolveExpr = function resolveExpr(findFlag$$10) {
    let patternInput$$12;

    if (lid$$8.tail != null) {
      const rest$$36 = lid$$8.tail;
      const id$$43 = lid$$8.head;
      patternInput$$12 = ResolveExprDotLongIdent(ncenv$$34, wholem$$2, ad$$57, nenv$$68, ty$$36, id$$43, rest$$36, findFlag$$10);
    } else {
      patternInput$$12 = (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("ResolveExprDotLongIdentAndComputeRange", wholem$$2));
    }

    const itemRange$$2 = ComputeItemRange(wholem$$2, lid$$8, patternInput$$12[2]);
    return [patternInput$$12[0], patternInput$$12[1], patternInput$$12[2], itemRange$$2];
  };

  const patternInput$$13 = resolveExpr(findFlag$$9);
  ResolutionInfo$$$SendEntityPathToSink$$Z7B7DC02C(sink$$35, ncenv$$34, nenv$$68, new ItemOccurence(1, "Use"), ad$$57, patternInput$$13[0], new ResultTyparChecker(0, "ResultTyparChecker", function () {
    return CheckAllTyparsInferrable(NameResolver$$get_amap(ncenv$$34), patternInput$$13[3], patternInput$$13[1]);
  }));
  let afterResolution$$1;

  if (sink$$35.CurrentSink != null) {
    let patternInput$$15;
    const matchValue$$76 = [findFlag$$9, patternInput$$13[1]];
    var $target$$191;

    if (matchValue$$76[0].tag === 1) {
      $target$$191 = 0;
    } else if ($007CNonOverridable$007C_$007C(matchValue$$76[1]) != null) {
      $target$$191 = 0;
    } else {
      $target$$191 = 1;
    }

    switch ($target$$191) {
      case 0:
        {
          patternInput$$15 = [patternInput$$13[1], patternInput$$13[3], false];
          break;
        }

      case 1:
        {
          if (matchValue$$76[0].tag === 0) {
            const patternInput$$14 = resolveExpr(new _InfoReader.FindMemberFlag(1, "PreferOverrides"));
            patternInput$$15 = [patternInput$$14[1], patternInput$$14[3], true];
          } else {
            throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/NameResolution.fs", 3331, 22);
          }

          break;
        }
    }

    const callSink$$1 = function callSink$$1(tupledArg$$28) {
      const staticOnly$$1 = thisIsActuallyATyAppNotAnExpr;
      const refinedItem$$3 = FilterMethodGroups(ncenv$$34, patternInput$$15[1], tupledArg$$28[0], staticOnly$$1);
      const unrefinedItem$$1 = FilterMethodGroups(ncenv$$34, patternInput$$15[1], patternInput$$15[0], staticOnly$$1);
      CallNameResolutionSink(sink$$35, patternInput$$15[1], nenv$$68, refinedItem$$3, unrefinedItem$$1, tupledArg$$28[1], new ItemOccurence(1, "Use"), NameResolutionEnv$$get_DisplayEnv(nenv$$68), ad$$57);
    };

    const callSinkWithSpecificOverload$$1 = function callSinkWithSpecificOverload$$1(tupledArg$$29) {
      let refinedItem$$4;
      var $target$$192;

      if (tupledArg$$29[1] == null) {
        if ((0, _infos.MethInfo$$get_IsConstructor)(tupledArg$$29[0])) {
          $target$$192 = 0;
        } else {
          $target$$192 = 1;
        }
      } else {
        $target$$192 = 1;
      }

      switch ($target$$192) {
        case 0:
          {
            refinedItem$$4 = new Item(11, "CtorGroup", (0, _infos.MethInfo$$get_LogicalName)(tupledArg$$29[0]), (0, _Types.L)(tupledArg$$29[0], (0, _Types.L)()));
            break;
          }

        case 1:
          {
            if (tupledArg$$29[1] != null) {
              const pinfo$$10 = tupledArg$$29[1];
              refinedItem$$4 = new Item(9, "Property", (0, _infos.PropInfo$$get_PropertyName)(pinfo$$10), (0, _Types.L)(pinfo$$10, (0, _Types.L)()));
            } else {
              refinedItem$$4 = new Item(10, "MethodGroup", (0, _infos.MethInfo$$get_LogicalName)(tupledArg$$29[0]), (0, _Types.L)(tupledArg$$29[0], (0, _Types.L)()), null);
            }

            break;
          }
      }

      callSink$$1([refinedItem$$4, tupledArg$$29[2]]);
    };

    const matchValue$$77 = [patternInput$$15[2], NeedsWorkAfterResolution(patternInput$$15[0])];
    var $target$$193;

    if (matchValue$$77[0]) {
      if (matchValue$$77[1]) {
        $target$$193 = 1;
      } else {
        $target$$193 = 2;
      }
    } else if (matchValue$$77[1]) {
      $target$$193 = 0;
    } else {
      $target$$193 = 2;
    }

    switch ($target$$193) {
      case 0:
        {
          afterResolution$$1 = new AfterResolution(1, "RecordResolution", null, function (tpinst$$9) {
            callSink$$1([patternInput$$13[1], tpinst$$9]);
          }, callSinkWithSpecificOverload$$1, function () {
            callSink$$1([patternInput$$15[0], _TastOps.emptyTyparInst]);
          });
          break;
        }

      case 1:
        {
          afterResolution$$1 = new AfterResolution(1, "RecordResolution", patternInput$$15[0], function (tpinst$$10) {
            callSink$$1([patternInput$$13[1], tpinst$$10]);
          }, callSinkWithSpecificOverload$$1, function () {
            callSink$$1([patternInput$$15[0], _TastOps.emptyTyparInst]);
          });
          break;
        }

      case 2:
        {
          callSink$$1([patternInput$$15[0], _TastOps.emptyTyparInst]);
          afterResolution$$1 = new AfterResolution(0, "DoNothing");
          break;
        }
    }
  } else {
    afterResolution$$1 = new AfterResolution(0, "DoNothing");
  }

  return [patternInput$$13[1], patternInput$$13[3], patternInput$$13[2], afterResolution$$1];
}

function FakeInstantiationGenerator(_m, gps) {
  return (0, _List.map)(_tast.mkTyparTy, gps);
}

function ItemForModuleOrNamespaceRef(v$$8) {
  return new Item(18, "ModuleOrNamespaces", (0, _Types.L)(v$$8, (0, _Types.L)()));
}

function ItemForPropInfo(pinfo$$11) {
  return new Item(9, "Property", (0, _infos.PropInfo$$get_PropertyName)(pinfo$$11), (0, _Types.L)(pinfo$$11, (0, _Types.L)()));
}

function IsTyconUnseenObsoleteSpec(ad$$58, g$$34, amap$$20, m$$86, x$$29, allowObsolete) {
  if (!(0, _AccessibilityLogic.IsEntityAccessible)(amap$$20, m$$86, ad$$58, x$$29)) {
    return true;
  } else if (!allowObsolete) {
    if ((0, _tast.EntityRef$$get_IsILTycon)(x$$29)) {
      return (0, _AttributeChecking.CheckILAttributesForUnseen)(g$$34, (0, _il.ILTypeDef$$get_CustomAttrs)((0, _tast.EntityRef$$get_ILTyconRawMetadata)(x$$29)), m$$86);
    } else {
      return (0, _AttributeChecking.CheckFSharpAttributesForUnseen)(g$$34, (0, _tast.EntityRef$$get_Attribs)(x$$29), m$$86);
    }
  } else {
    return false;
  }
}

function IsTyconUnseen(ad$$59, g$$35, amap$$21, m$$87, x$$30) {
  return IsTyconUnseenObsoleteSpec(ad$$59, g$$35, amap$$21, m$$87, x$$30, false);
}

function IsValUnseen(ad$$60, g$$36, m$$88, v$$9) {
  if (((0, _tast.ValRef$$get_IsCompilerGenerated)(v$$9) ? true : (0, _tast.Val$$get_IsClassConstructor)((0, _tast.ValRef$$get_Deref)(v$$9))) ? true : !(0, _AccessibilityLogic.IsValAccessible)(ad$$60, v$$9)) {
    return true;
  } else {
    return (0, _AttributeChecking.CheckFSharpAttributesForUnseen)(g$$36, (0, _tast.ValRef$$get_Attribs)(v$$9), m$$88);
  }
}

function IsUnionCaseUnseen(ad$$61, g$$37, amap$$22, m$$89, ucref$$8) {
  if (!(0, _AccessibilityLogic.IsUnionCaseAccessible)(amap$$22, m$$89, ad$$61, ucref$$8) ? true : IsTyconUnseen(ad$$61, g$$37, amap$$22, m$$89, (0, _tast.UnionCaseRef$$get_TyconRef)(ucref$$8))) {
    return true;
  } else {
    return (0, _AttributeChecking.CheckFSharpAttributesForUnseen)(g$$37, (0, _tast.UnionCaseRef$$get_Attribs)(ucref$$8), m$$89);
  }
}

function ItemIsUnseen(ad$$62, g$$38, amap$$23, m$$90, item$$46) {
  switch (item$$46.tag) {
    case 0:
      {
        const x$$31 = item$$46.fields[0];
        return IsValUnseen(ad$$62, g$$38, m$$90, x$$31);
      }

    case 1:
      {
        const x$$32 = item$$46.fields[0];
        return IsUnionCaseUnseen(ad$$62, g$$38, amap$$23, m$$90, (0, _infos.UnionCaseInfo$$get_UnionCaseRef)(x$$32));
      }

    case 4:
      {
        const x$$33 = item$$46.fields[0];
        return IsTyconUnseen(ad$$62, g$$38, amap$$23, m$$90, x$$33);
      }

    default:
      {
        return false;
      }
  }
}

function ItemOfTyconRef(ncenv$$35, m$$91, x$$34) {
  return new Item(14, "Types", (0, _tast.EntityRef$$get_DisplayName)(x$$34), (0, _Types.L)(FreshenTycon(ncenv$$35, m$$91, x$$34), (0, _Types.L)()));
}

function ItemOfTy(g$$39, x$$35) {
  const nm$$29 = (0, _TastOps.isAppTy)(g$$39, x$$35) ? (0, _tast.EntityRef$$get_DisplayName)((0, _TastOps.tcrefOfAppTy)(g$$39, x$$35)) : "?";
  return new Item(14, "Types", nm$$29, (0, _Types.L)(x$$35, (0, _Types.L)()));
}

function IsInterestingModuleName(nm$$30) {
  if (nm$$30.length >= 1) {
    return (0, _illib.String$$$sub)(nm$$30, 0, 1) !== "<";
  } else {
    return false;
  }
}

function PartialResolveLookupInModuleOrNamespaceAsModuleOrNamespaceThen($arg$$194, $arg$$195, $arg$$196) {
  PartialResolveLookupInModuleOrNamespaceAsModuleOrNamespaceThen: while (true) {
    const f$$31 = $arg$$194,
          plid = $arg$$195,
          modref$$34 = $arg$$196;
    const mty$$10 = (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$34);

    if (plid.tail != null) {
      const rest$$39 = plid.tail;
      const id$$44 = plid.head;
      const matchValue$$78 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$10), id$$44);

      if (matchValue$$78 == null) {
        return (0, _Types.L)();
      } else {
        const mty$$11 = matchValue$$78;
        $arg$$194 = f$$31;
        $arg$$195 = rest$$39;
        $arg$$196 = (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$34, mty$$11);
        continue PartialResolveLookupInModuleOrNamespaceAsModuleOrNamespaceThen;
      }
    } else {
      return f$$31(modref$$34);
    }
  }
}

function PartialResolveLongIndentAsModuleOrNamespaceThen(nenv$$69, plid$$1, f$$32) {
  if (plid$$1.tail == null) {
    return (0, _Types.L)();
  } else {
    const rest$$40 = plid$$1.tail;
    const id$$45 = plid$$1.head;
    const matchValue$$79 = (0, _Map.tryFind)(id$$45, nenv$$69.eModulesAndNamespaces);

    if (matchValue$$79 == null) {
      return (0, _Types.L)();
    } else {
      const modrefs$$5 = matchValue$$79;
      return (0, _List.collect)(function (modref$$35) {
        return PartialResolveLookupInModuleOrNamespaceAsModuleOrNamespaceThen(f$$32, rest$$40, modref$$35);
      }, modrefs$$5);
    }
  }
}

function ResolveRecordOrClassFieldsOfType(ncenv$$36, m$$92, ad$$63, ty$$37, statics) {
  return (0, _List.map)(function mapping$$73(arg0) {
    return new Item(5, "RecdField", arg0);
  }, (0, _List.filter)(function predicate$$38(rfref$$7) {
    if ((0, _infos.RecdFieldInfo$$get_IsStatic)(rfref$$7) === statics) {
      return (0, _AccessibilityLogic.IsFieldInfoAccessible)(ad$$63, rfref$$7);
    } else {
      return false;
    }
  }, (0, _InfoReader.InfoReader$$GetRecordOrClassFieldsOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$36), null, ad$$63, m$$92, ty$$37)));
}

const ResolveCompletionTargets = (0, _Types.declare)(function ResolveCompletionTargets(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ResolveCompletionTargets = ResolveCompletionTargets;

function ResolveCompletionTargets$$get_ResolveAll(this$$$20) {
  if (this$$$20.tag === 1) {
    return false;
  } else {
    return true;
  }
}

function ResolveCompletionsInType(ncenv$$37, nenv$$70, completionTargets, m$$93, ad$$64, statics$$1, ty$$38) {
  try {
    return function () {
      const g$$40 = NameResolver$$get_g(ncenv$$37);
      const amap$$24 = NameResolver$$get_amap(ncenv$$37);
      const rfinfos = (0, _List.filter)(function predicate$$39(rfref$$8) {
        if ((0, _infos.RecdFieldInfo$$get_IsStatic)(rfref$$8) === statics$$1) {
          return (0, _AccessibilityLogic.IsFieldInfoAccessible)(ad$$64, rfref$$8);
        } else {
          return false;
        }
      }, (0, _InfoReader.InfoReader$$GetRecordOrClassFieldsOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$37), null, ad$$64, m$$93, ty$$38));
      let ucinfos;

      if ((ResolveCompletionTargets$$get_ResolveAll(completionTargets) ? statics$$1 : false) ? (0, _TastOps.isAppTy)(g$$40, ty$$38) : false) {
        const patternInput$$16 = (0, _TastOps.destAppTy)(g$$40, ty$$38);
        ucinfos = (0, _List.map)(function mapping$$74(ucref$$10) {
          return new Item(1, "UnionCase", new _infos.UnionCaseInfo(0, "UnionCaseInfo", patternInput$$16[1], ucref$$10), false);
        }, (0, _List.filter)(function predicate$$40($arg$$45) {
          return !IsUnionCaseUnseen(ad$$64, g$$40, NameResolver$$get_amap(ncenv$$37), m$$93, $arg$$45);
        }, (0, _tast.EntityRef$$get_UnionCasesAsRefList)(patternInput$$16[0])));
      } else {
        ucinfos = (0, _Types.L)();
      }

      const einfos = ResolveCompletionTargets$$get_ResolveAll(completionTargets) ? (0, _List.filter)(function predicate$$41(x$$36) {
        if ((0, _InfoReader.IsStandardEventInfo)(NameResolver$$get_InfoReader(ncenv$$37), m$$93, ad$$64, x$$36)) {
          return (0, _infos.EventInfo$$get_IsStatic)(x$$36) === statics$$1;
        } else {
          return false;
        }
      }, (0, _InfoReader.InfoReader$$GetEventInfosOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$37), null, ad$$64, m$$93, ty$$38)) : (0, _Types.L)();
      const nestedTypes$$2 = (ResolveCompletionTargets$$get_ResolveAll(completionTargets) ? statics$$1 : false) ? GetNestedTypesOfType(ad$$64, ncenv$$37, null, new TypeNameResolutionStaticArgsInfo(0, "Indefinite"), false, m$$93, ty$$38) : (0, _Types.L)();
      const finfos = (0, _List.filter)(function predicate$$42(x$$37) {
        if (!(0, _infos.ILFieldInfo$$get_IsSpecialName)(x$$37) ? (0, _infos.ILFieldInfo$$get_IsStatic)(x$$37) === statics$$1 : false) {
          return (0, _AccessibilityLogic.IsILFieldInfoAccessible)(g$$40, amap$$24, m$$93, ad$$64, x$$37);
        } else {
          return false;
        }
      }, (0, _InfoReader.InfoReader$$GetILFieldInfosOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$37), null, ad$$64, m$$93, ty$$38));
      const pinfosIncludingUnseen = (0, _List.filter)(function predicate$$43(x$$38) {
        if ((0, _infos.PropInfo$$get_IsStatic)(x$$38) === statics$$1) {
          return (0, _AccessibilityLogic.IsPropInfoAccessible)(g$$40, amap$$24, m$$93, ad$$64, x$$38);
        } else {
          return false;
        }
      }, AllPropInfosOfTypeInScope(NameResolver$$get_InfoReader(ncenv$$37), nenv$$70, null, ad$$64, new _InfoReader.FindMemberFlag(1, "PreferOverrides"), m$$93, ty$$38));
      const pinfoMethNames = (0, _List.append)((0, _List.map)(function mapping$$75(pinfo$$13) {
        return (0, _infos.MethInfo$$get_LogicalName)((0, _infos.PropInfo$$get_GetterMethod)(pinfo$$13));
      }, (0, _List.filter)(function predicate$$44(pinfo$$12) {
        return (0, _infos.PropInfo$$get_HasGetter)(pinfo$$12);
      }, pinfosIncludingUnseen)), (0, _List.map)(function mapping$$76(pinfo$$15) {
        return (0, _infos.MethInfo$$get_LogicalName)((0, _infos.PropInfo$$get_SetterMethod)(pinfo$$15));
      }, (0, _List.filter)(function predicate$$45(pinfo$$14) {
        return (0, _infos.PropInfo$$get_HasSetter)(pinfo$$14);
      }, pinfosIncludingUnseen)));
      const einfoMethNames = ResolveCompletionTargets$$get_ResolveAll(completionTargets) ? (0, _List.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.collect)(function (einfo$$5) {
          const delegateType = (0, _infos.EventInfo$$GetDelegateType$$73F6E43C)(einfo$$5, amap$$24, m$$93);
          const invokeMethInfo = (0, _InfoReader.GetSigOfFunctionForDelegate)(NameResolver$$get_InfoReader(ncenv$$37), delegateType, m$$93, ad$$64).fields[0];
          return (0, _TastOps.slotSigHasVoidReturnTy)((0, _infos.MethInfo$$GetSlotSig$$73F6E43C)(invokeMethInfo, amap$$24, m$$93)) ? (0, _Seq.append)((0, _Seq.singleton)((0, _infos.MethInfo$$get_DisplayName)((0, _infos.EventInfo$$get_AddMethod)(einfo$$5))), (0, _Seq.delay)(function () {
            return (0, _Seq.singleton)((0, _infos.MethInfo$$get_DisplayName)((0, _infos.EventInfo$$get_RemoveMethod)(einfo$$5)));
          })) : (0, _Seq.empty)();
        }, einfos);
      })) : (0, _Types.L)();
      const suppressedMethNames = (0, _lib.Zset$$$ofList)(_illib.String$$$order, (0, _List.append)(pinfoMethNames, einfoMethNames));
      const pinfos$$11 = (0, _List.filter)(function predicate$$46(x$$39) {
        return !(0, _AttributeChecking.PropInfoIsUnseen)(m$$93, x$$39);
      }, pinfosIncludingUnseen);

      const minfoFilter = function minfoFilter(minfo$$15) {
        let isApplicableMeth;

        if (completionTargets.tag === 0) {
          const x$$40 = completionTargets.fields[0];
          isApplicableMeth = (0, _Util.curry)(2, x$$40);
        } else {
          throw new Error("internal error: expected completionTargets = ResolveCompletionTargets.All");
        }

        let isUnseenDueToBasicObjRules;

        if (!(0, _TastOps.isObjTy)(g$$40, ty$$38) ? !(0, _infos.MethInfo$$get_IsExtensionMember)(minfo$$15) : false) {
          const matchValue$$81 = (0, _infos.MethInfo$$get_LogicalName)(minfo$$15);

          switch (matchValue$$81) {
            case "GetType":
              {
                isUnseenDueToBasicObjRules = false;
                break;
              }

            case "GetHashCode":
              {
                isUnseenDueToBasicObjRules = (0, _TastOps.isObjTy)(g$$40, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$15)) ? !(0, _AugmentWithHashCompare.TypeDefinitelyHasEquality)(g$$40, ty$$38) : false;
                break;
              }

            case "ToString":
              {
                isUnseenDueToBasicObjRules = false;
                break;
              }

            case "Equals":
              {
                isUnseenDueToBasicObjRules = !(0, _TastOps.isObjTy)(g$$40, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$15)) ? false : (0, _infos.MethInfo$$get_IsInstance)(minfo$$15) ? !(0, _AugmentWithHashCompare.TypeDefinitelyHasEquality)(g$$40, ty$$38) : true;
                break;
              }

            default:
              {
                isUnseenDueToBasicObjRules = (0, _TastOps.isObjTy)(g$$40, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$15));
              }
          }
        } else {
          isUnseenDueToBasicObjRules = false;
        }

        const result$$2 = ((((((((!isUnseenDueToBasicObjRules ? !(0, _infos.MethInfo$$get_IsInstance)(minfo$$15) === statics$$1 : false) ? (0, _AccessibilityLogic.IsMethInfoAccessible)(amap$$24, m$$93, ad$$64, minfo$$15) : false) ? !(0, _AttributeChecking.MethInfoIsUnseen)(g$$40, m$$93, ty$$38, minfo$$15) : false) ? !(0, _infos.MethInfo$$get_IsConstructor)(minfo$$15) : false) ? !(0, _infos.MethInfo$$get_IsClassConstructor)(minfo$$15) : false) ? !((0, _infos.MethInfo$$get_LogicalName)(minfo$$15) === ".cctor") : false) ? !((0, _infos.MethInfo$$get_LogicalName)(minfo$$15) === ".ctor") : false) ? isApplicableMeth(minfo$$15)(ty$$38) : false) ? !(0, _TaggedCollections.Set$00602$$Contains$$2B595)(suppressedMethNames, (0, _infos.MethInfo$$get_LogicalName)(minfo$$15)) : false;
        return result$$2;
      };

      let pinfoItems;
      const pinfos$$12 = completionTargets.tag === 1 ? (0, _List.filter)(function predicate$$47(p$$4) {
        return (0, _infos.PropInfo$$get_HasSetter)(p$$4);
      }, pinfos$$11) : pinfos$$11;
      pinfoItems = (0, _List.choose)(function chooser$$7(pinfo$$16) {
        const pinfoOpt$$2 = DecodeFSharpEvent((0, _Types.L)(pinfo$$16, (0, _Types.L)()), ad$$64, g$$40, ncenv$$37, m$$93);
        const matchValue$$82 = [pinfoOpt$$2, completionTargets];
        var $target$$200, einfo$$6;

        if (matchValue$$82[0] != null) {
          if (matchValue$$82[0].tag === 8) {
            if (matchValue$$82[1].tag === 0) {
              $target$$200 = 0;
              einfo$$6 = matchValue$$82[0].fields[0];
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
              if ((0, _InfoReader.IsStandardEventInfo)(NameResolver$$get_InfoReader(ncenv$$37), m$$93, ad$$64, einfo$$6)) {
                return pinfoOpt$$2;
              } else {
                return null;
              }
            }

          case 1:
            {
              return pinfoOpt$$2;
            }
        }
      }, pinfos$$12);
      let minfos$$19;

      if (ResolveCompletionTargets$$get_ResolveAll(completionTargets)) {
        const minfos$$17 = (0, _List.filter)(minfoFilter, AllMethInfosOfTypeInScope(NameResolver$$get_InfoReader(ncenv$$37), nenv$$70, null, ad$$64, new _InfoReader.FindMemberFlag(1, "PreferOverrides"), m$$93, ty$$38));
        let minfos$$18;
        const addersAndRemovers = (0, _Set.ofSeq)((0, _List.collect)(function mapping$$77(_arg1$$28) {
          var $target$$201, addValRef$$1, removeValRef$$1;

          if (_arg1$$28.tag === 8) {
            if (_arg1$$28.fields[0].tag === 0) {
              $target$$201 = 0;
              addValRef$$1 = _arg1$$28.fields[0].fields[2];
              removeValRef$$1 = _arg1$$28.fields[0].fields[3];
            } else {
              $target$$201 = 1;
            }
          } else {
            $target$$201 = 1;
          }

          switch ($target$$201) {
            case 0:
              {
                return (0, _Types.L)((0, _tast.ValRef$$get_LogicalName)(addValRef$$1), (0, _Types.L)((0, _tast.ValRef$$get_LogicalName)(removeValRef$$1), (0, _Types.L)()));
              }

            case 1:
              {
                return (0, _Types.L)();
              }
          }
        }, pinfoItems), {
          Compare: _Util.comparePrimitives
        });
        minfos$$18 = (0, _Set.FSharpSet$$get_IsEmpty)(addersAndRemovers) ? minfos$$17 : (0, _List.filter)(function predicate$$48(minfo$$16) {
          return !(0, _Set.FSharpSet$$Contains$$2B595)(addersAndRemovers, (0, _infos.MethInfo$$get_LogicalName)(minfo$$16));
        }, minfos$$17);
        minfos$$19 = minfos$$18;
      } else {
        minfos$$19 = (0, _Types.L)();
      }

      const partitionl = function partitionl(l$$31, acc$$6) {
        partitionl: while (true) {
          if (l$$31.tail != null) {
            const t$$4 = l$$31.tail;
            const h$$4 = l$$31.head;
            const nm$$31 = (0, _infos.MethInfo$$get_LogicalName)(h$$4);
            l$$31 = t$$4;
            acc$$6 = (0, _illib.NameMultiMapModule$$$add)(nm$$31, h$$4, acc$$6);
            continue partitionl;
          } else {
            return acc$$6;
          }
        }
      };

      return (0, _List.append)(ucinfos, (0, _List.append)((0, _List.map)(function (arg0$$1) {
        return new Item(5, "RecdField", arg0$$1);
      }, rfinfos), (0, _List.append)(pinfoItems, (0, _List.append)((0, _List.map)(function (arg0$$2) {
        return new Item(7, "ILField", arg0$$2);
      }, finfos), (0, _List.append)((0, _List.map)(function (arg0$$3) {
        return new Item(8, "Event", arg0$$3);
      }, einfos), (0, _List.append)((0, _List.map)(function (x$$41) {
        return ItemOfTy(g$$40, x$$41);
      }, nestedTypes$$2), (0, _List.map)(function (tupledArg$$30) {
        return Item$$$MakeMethGroup$$18D66E3A(tupledArg$$30[0], tupledArg$$30[1]);
      }, (0, _illib.NameMapModule$$$toList)(partitionl(minfos$$19, (0, _Map.empty)({
        Compare: _Util.comparePrimitives
      }))))))))));
    }();
  } catch (matchValue$$80) {
    if (matchValue$$80 instanceof _ErrorLogger.UnresolvedPathReferenceNoRange) {
      return (0, _Types.L)();
    } else {
      throw matchValue$$80;
    }
  }
}

function ResolvePartialLongIdentInType(ncenv$$38, nenv$$71, isApplicableMeth$$1, m$$94, ad$$65, statics$$2, plid$$2, ty$$40) {
  var FullTypeOfPinfo;
  const g$$41 = NameResolver$$get_g(ncenv$$38);
  const amap$$26 = NameResolver$$get_amap(ncenv$$38);

  if (plid$$2.tail != null) {
    const rest$$41 = plid$$2.tail;
    const id$$46 = plid$$2.head;
    const rfinfos$$1 = (0, _List.filter)(function predicate$$50(fref$$1) {
      return (0, _tast.RecdField$$get_IsStatic)((0, _infos.RecdFieldInfo$$get_RecdField)(fref$$1)) === statics$$2;
    }, (0, _List.filter)(function predicate$$49(fref) {
      return (0, _AccessibilityLogic.IsRecdFieldAccessible)(NameResolver$$get_amap(ncenv$$38), m$$94, ad$$65, (0, _infos.RecdFieldInfo$$get_RecdFieldRef)(fref));
    }, (0, _InfoReader.InfoReader$$GetRecordOrClassFieldsOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$38), null, ad$$65, m$$94, ty$$40)));
    const nestedTypes$$3 = GetNestedTypesOfType(ad$$65, ncenv$$38, id$$46, new TypeNameResolutionStaticArgsInfo(0, "Indefinite"), false, m$$94, ty$$40);
    return (0, _List.append)((0, _List.collect)(function mapping$$78(x$$43) {
      return ResolvePartialLongIdentInType(ncenv$$38, nenv$$71, isApplicableMeth$$1, m$$94, ad$$65, false, rest$$41, (0, _infos.RecdFieldInfo$$get_FieldType)(x$$43));
    }, (0, _List.filter)(function predicate$$51(x$$42) {
      return (0, _infos.RecdFieldInfo$$get_Name)(x$$42) === id$$46;
    }, rfinfos$$1)), (FullTypeOfPinfo = function FullTypeOfPinfo(pinfo$$17) {
      const rty = (0, _infos.PropInfo$$GetPropertyType$$73F6E43C)(pinfo$$17, amap$$26, m$$94);
      const rty$$1 = (0, _infos.PropInfo$$get_IsIndexer)(pinfo$$17) ? (0, _TastOps.op_MinusMinusGreater)((0, _TastOps.mkRefTupledTy)(g$$41, (0, _infos.PropInfo$$GetParamTypes$$73F6E43C)(pinfo$$17, amap$$26, m$$94)), rty) : rty;
      return rty$$1;
    }, (0, _List.append)((0, _List.collect)(function mapping$$79(pinfo$$18) {
      return ResolvePartialLongIdentInType(ncenv$$38, nenv$$71, isApplicableMeth$$1, m$$94, ad$$65, false, rest$$41, FullTypeOfPinfo(pinfo$$18));
    }, (0, _List.filter)(function predicate$$53(_arg1$$29) {
      return (0, _AccessibilityLogic.IsPropInfoAccessible)(g$$41, amap$$26, m$$94, ad$$65, _arg1$$29);
    }, (0, _List.filter)(function predicate$$52(x$$44) {
      return (0, _infos.PropInfo$$get_IsStatic)(x$$44) === statics$$2;
    }, AllPropInfosOfTypeInScope(NameResolver$$get_InfoReader(ncenv$$38), nenv$$71, id$$46, ad$$65, new _InfoReader.FindMemberFlag(0, "IgnoreOverrides"), m$$94, ty$$40)))), (0, _List.append)((0, _List.collect)(function mapping$$80($arg$$50) {
      return ResolvePartialLongIdentInType(ncenv$$38, nenv$$71, isApplicableMeth$$1, m$$94, ad$$65, false, rest$$41, (0, _InfoReader.PropTypOfEventInfo)(NameResolver$$get_InfoReader(ncenv$$38), m$$94, ad$$65, $arg$$50));
    }, (0, _InfoReader.InfoReader$$GetEventInfosOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$38), id$$46, ad$$65, m$$94, ty$$40)), (0, _List.append)((0, _List.collect)(function mapping$$81(ty$$45) {
      return ResolvePartialLongIdentInType(ncenv$$38, nenv$$71, isApplicableMeth$$1, m$$94, ad$$65, statics$$2, rest$$41, ty$$45);
    }, nestedTypes$$3), (0, _List.collect)(function mapping$$82(x$$46) {
      return ResolvePartialLongIdentInType(ncenv$$38, nenv$$71, isApplicableMeth$$1, m$$94, ad$$65, false, rest$$41, (0, _infos.ILFieldInfo$$FieldType$$73F6E43C)(x$$46, amap$$26, m$$94));
    }, (0, _List.filter)(function predicate$$54(x$$45) {
      if (!(0, _infos.ILFieldInfo$$get_IsSpecialName)(x$$45) ? (0, _infos.ILFieldInfo$$get_IsStatic)(x$$45) === statics$$2 : false) {
        return (0, _AccessibilityLogic.IsILFieldInfoAccessible)(g$$41, amap$$26, m$$94, ad$$65, x$$45);
      } else {
        return false;
      }
    }, (0, _InfoReader.InfoReader$$GetILFieldInfosOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$38), id$$46, ad$$65, m$$94, ty$$40))))))));
  } else {
    return ResolveCompletionsInType(ncenv$$38, nenv$$71, isApplicableMeth$$1, m$$94, ad$$65, statics$$2, ty$$40);
  }
}

function InfosForTyconConstructors(ncenv$$39, m$$95, ad$$66, tcref$$67) {
  const g$$42 = NameResolver$$get_g(ncenv$$39);
  const amap$$27 = NameResolver$$get_amap(ncenv$$39);

  if ((0, _tast.EntityRef$$get_IsTypeAbbrev)(tcref$$67)) {
    return (0, _Types.L)();
  } else {
    const ty$$47 = FreshenTycon(ncenv$$39, m$$95, tcref$$67);
    const matchValue$$83 = ResolveObjectConstructor(ncenv$$39, (0, _TastOps.DisplayEnv$$$Empty$$2AE8EA0C)(g$$42), m$$95, ad$$66, ty$$47);

    if (matchValue$$83.tag === 1) {
      return (0, _Types.L)();
    } else {
      const item$$47 = matchValue$$83.fields[0];

      switch (item$$47.tag) {
        case 12:
          {
            return (0, _Types.L)();
          }

        case 11:
          {
            const nm$$32 = item$$47.fields[0];
            const ctorInfos$$2 = item$$47.fields[1];
            const ctors = (0, _List.filter)(function predicate$$56($arg$$51) {
              return !(0, _AttributeChecking.MethInfoIsUnseen)(g$$42, m$$95, ty$$47, $arg$$51);
            }, (0, _List.filter)(function predicate$$55(minfo$$17) {
              return (0, _AccessibilityLogic.IsMethInfoAccessible)(amap$$27, m$$95, ad$$66, minfo$$17);
            }, ctorInfos$$2));

            if (ctors.tail == null) {
              return (0, _Types.L)();
            } else {
              return (0, _Types.L)(Item$$$MakeCtorGroup$$18D66E3A(nm$$32, ctors), (0, _Types.L)());
            }
          }

        default:
          {
            const item$$48 = item$$47;
            return (0, _Types.L)(item$$48, (0, _Types.L)());
          }
      }
    }
  }
}

function notFakeContainerModule(tyconNames, nm$$33) {
  return !(0, _Set.contains)(nm$$33, tyconNames);
}

function EntityRefContainsSomethingAccessible(ncenv$$40, m$$96, ad$$67, modref$$36) {
  const g$$43 = NameResolver$$get_g(ncenv$$40);
  const mty$$12 = (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$36);

  if ((0, _Seq.exists)(function predicate$$57(v$$10) {
    try {
      return function f$$35() {
        const vref$$30 = (0, _tast.mkNestedValRef)(modref$$36, v$$10);

        if (!(0, _tast.ValRef$$get_IsCompilerGenerated)(vref$$30) ? !IsValUnseen(ad$$67, g$$43, m$$96, vref$$30) : false) {
          if ((0, _tast.ValRef$$get_IsExtensionMember)(vref$$30)) {
            return true;
          } else {
            return !(0, _tast.ValRef$$get_IsMember)(vref$$30);
          }
        } else {
          return false;
        }
      }();
    } catch (matchValue$$84) {
      return matchValue$$84 instanceof _ErrorLogger.UnresolvedPathReferenceNoRange ? true : false;
    }
  }, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)(mty$$12)) ? true : (0, _QueueList.QueueListModule$$$exists)(function f$$36(tc$$1) {
    if (!(0, _tast.Entity$$get_IsModuleOrNamespace)(tc$$1)) {
      return !IsTyconUnseen(ad$$67, g$$43, NameResolver$$get_amap(ncenv$$40), m$$96, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$36, tc$$1));
    } else {
      return false;
    }
  }, (0, _tast.ModuleOrNamespaceType$$get_AllEntities)(mty$$12))) {
    return true;
  } else {
    return (0, _illib.NameMapModule$$$exists)(function f$$37(_arg1$$30, submod) {
      const submodref$$4 = (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$36, submod);
      return EntityRefContainsSomethingAccessible(ncenv$$40, m$$96, ad$$67, submodref$$4);
    }, (0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$12));
  }
}

function ResolvePartialLongIdentInModuleOrNamespace(ncenv$$41, nenv$$72, isApplicableMeth$$2, m$$98, ad$$68, modref$$37, plid$$3, allowObsolete$$1) {
  var matchValue$$85, mspec$$2, mspec$$3, allowObsolete$$2;
  const g$$44 = NameResolver$$get_g(ncenv$$41);
  const mty$$13 = (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$37);

  if (plid$$3.tail != null) {
    const rest$$42 = plid$$3.tail;
    const id$$47 = plid$$3.head;
    return (0, _List.append)((matchValue$$85 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$13), id$$47), matchValue$$85 != null ? (mspec$$2 = matchValue$$85, !IsTyconUnseenObsoleteSpec(ad$$68, g$$44, NameResolver$$get_amap(ncenv$$41), m$$98, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$37, mspec$$2), allowObsolete$$1)) ? (mspec$$3 = matchValue$$85, (allowObsolete$$2 = !(0, _Util.equals)(rest$$42, (0, _Types.L)()) ? allowObsolete$$1 : false, ResolvePartialLongIdentInModuleOrNamespace(ncenv$$41, nenv$$72, isApplicableMeth$$2, m$$98, ad$$68, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$37, mspec$$3), rest$$42, allowObsolete$$2))) : (0, _Types.L)() : (0, _Types.L)()), (0, _List.collect)(function mapping$$91(tycon$$15) {
      const tcref$$70 = (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$37, tycon$$15);

      if (!IsTyconUnseenObsoleteSpec(ad$$68, g$$44, NameResolver$$get_amap(ncenv$$41), m$$98, tcref$$70, allowObsolete$$1)) {
        return ResolvePartialLongIdentInType(ncenv$$41, nenv$$72, isApplicableMeth$$2, m$$98, ad$$68, true, rest$$42, (0, _TastOps.generalizedTyconRef)(tcref$$70));
      } else {
        return (0, _Types.L)();
      }
    }, LookupTypeNameInEntityNoArity(m$$98, id$$47, (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$37))));
  } else {
    const tycons = (0, _List.filter)(function predicate$$59(tycon$$13) {
      return !IsTyconUnseen(ad$$68, g$$44, NameResolver$$get_amap(ncenv$$41), m$$98, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$37, tycon$$13));
    }, (0, _List.filter)(function predicate$$58(tcref$$68) {
      return !((0, _tast.Entity$$get_LogicalName)(tcref$$68).indexOf(",") >= 0);
    }, (0, _tast.ModuleOrNamespaceType$$get_TypeDefinitions)(mty$$13)));
    const ilTyconNames = (0, _Set.ofList)((0, _List.choose)(function chooser$$8(tycon$$14) {
      if ((0, _tast.Entity$$get_IsILTycon)(tycon$$14)) {
        return (0, _tast.Entity$$get_DisplayName)(tycon$$14);
      } else {
        return null;
      }
    }, (0, _illib.LayeredMultiMap$00602$$get_Values)((0, _tast.ModuleOrNamespaceType$$get_TypesByAccessNames)(mty$$13))), {
      Compare: _Util.comparePrimitives
    });
    return (0, _List.append)((0, _List.map)(function mapping$$83(arg0$$4) {
      return new Item(0, "Value", arg0$$4);
    }, (0, _List.filter)(function predicate$$61($arg$$54) {
      return !IsValUnseen(ad$$68, g$$44, m$$98, $arg$$54);
    }, (0, _List.filter)(function predicate$$60(v$$11) {
      return !(0, _tast.ValRef$$get_IsMember)(v$$11);
    }, (0, _List.choose)(function chooser$$9(vspec$$7) {
      return TryMkValRefInModRef(modref$$37, vspec$$7);
    }, (0, _List.ofSeq)((0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)(mty$$13)))))), (0, _List.append)((0, _List.map)(function mapping$$84(x$$48) {
      return new Item(1, "UnionCase", GeneralizeUnionCaseRef(x$$48), false);
    }, (0, _List.filter)(function predicate$$62($arg$$55) {
      return !IsUnionCaseUnseen(ad$$68, g$$44, NameResolver$$get_amap(ncenv$$41), m$$98, $arg$$55);
    }, UnionCaseRefsInModuleOrNamespace(modref$$37))), (0, _List.append)((0, _List.map)(function mapping$$85(arg0$$5) {
      return new Item(3, "ActivePatternCase", arg0$$5);
    }, (0, _List.filter)(function predicate$$63(apref$$6) {
      return !IsValUnseen(ad$$68, g$$44, m$$98, (0, _tast.ActivePatternElemRef$$get_ActivePatternVal)(apref$$6));
    }, (0, _illib.NameMapModule$$$range)(ActivePatternElemsOfModuleOrNamespace(modref$$37)))), (0, _List.append)((0, _List.map)(function mapping$$87(arg0$$6) {
      return new Item(4, "ExnCase", arg0$$6);
    }, (0, _List.filter)(function predicate$$64($arg$$56) {
      return !IsTyconUnseen(ad$$68, g$$44, NameResolver$$get_amap(ncenv$$41), m$$98, $arg$$56);
    }, (0, _List.map)(function mapping$$86(arg00$$50) {
      return (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$37, arg00$$50);
    }, (0, _illib.NameMapModule$$$range)((0, _tast.ModuleOrNamespaceType$$get_ExceptionDefinitionsByDemangledName)(mty$$13))))), (0, _List.append)((0, _List.map)(ItemForModuleOrNamespaceRef, (0, _List.filter)(function predicate$$67(modref$$38) {
      return EntityRefContainsSomethingAccessible(ncenv$$41, m$$98, ad$$68, modref$$38);
    }, (0, _List.filter)(function predicate$$66($arg$$57) {
      return !IsTyconUnseen(ad$$68, g$$44, NameResolver$$get_amap(ncenv$$41), m$$98, $arg$$57);
    }, (0, _List.map)(function mapping$$88(arg00$$51) {
      return (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$37, arg00$$51);
    }, (0, _List.filter)(function predicate$$65(x$$50) {
      const demangledName = (0, _tast.Entity$$get_DemangledModuleOrNamespaceName)(x$$50);

      if (notFakeContainerModule(ilTyconNames, demangledName)) {
        return IsInterestingModuleName(demangledName);
      } else {
        return false;
      }
    }, (0, _illib.NameMapModule$$$range)((0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$13))))))), (0, _List.append)((0, _List.map)(function mapping$$89($arg$$58) {
      return ItemOfTyconRef(ncenv$$41, m$$98, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$37, $arg$$58));
    }, tycons), (0, _List.collect)(function mapping$$90($arg$$59) {
      return InfosForTyconConstructors(ncenv$$41, m$$98, ad$$68, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$37, $arg$$59));
    }, tycons)))))));
  }
}

function TryToResolveLongIdentAsType(ncenv$$42, nenv$$73, m$$102, plid$$4) {
  const g$$45 = NameResolver$$get_g(ncenv$$42);
  const matchValue$$86 = (0, _List.tryLast)(plid$$4);

  if (matchValue$$86 != null) {
    const id$$48 = matchValue$$86;
    let patternInput$$18;
    const matchValue$$87 = (0, _Map.tryFind)(id$$48, nenv$$73.eUnqualifiedItems);

    if (matchValue$$87 == null) {
      patternInput$$18 = [null, false];
    } else {
      const v$$15 = matchValue$$87;

      if (v$$15.tag === 0) {
        const x$$53 = v$$15.fields[0];
        const ty$$49 = (0, _tast.ValRef$$get_Type)(x$$53);
        const ty$$50 = ((0, _Util.equals)((0, _tast.ValRef$$get_BaseOrThisInfo)(x$$53), new _tast.ValBaseOrThisInfo(0, "CtorThisVal")) ? (0, _TastOps.isRefCellTy)(g$$45, ty$$49) : false) ? (0, _TastOps.destRefCellTy)(g$$45, ty$$49) : ty$$49;
        patternInput$$18 = [ty$$50, true];
      } else {
        patternInput$$18 = [null, false];
      }
    }

    if (patternInput$$18[1]) {
      return patternInput$$18[0];
    } else {
      return (0, _List.fold)(function folder$$13(resTy, tcref$$71) {
        const tcref$$72 = ResolveNestedTypeThroughAbbreviation(ncenv$$42, tcref$$71, m$$102);
        const ty$$52 = FreshenTycon(ncenv$$42, m$$102, tcref$$72);
        const resTy$$1 = resTy == null ? ty$$52 : resTy;
        return resTy$$1;
      }, patternInput$$18[0], LookupTypeNameInEnvNoArity(new FullyQualifiedFlag(1, "OpenQualified"), id$$48, nenv$$73));
    }
  } else {
    return null;
  }
}

function ResolvePartialLongIdentPrim(ncenv$$43, nenv$$74, isApplicableMeth$$3, fullyQualified$$6, m$$103, ad$$69, plid$$5, allowObsolete$$3) {
  var plid$$6, id$$49;

  ResolvePartialLongIdentPrim: while (true) {
    const g$$46 = NameResolver$$get_g(ncenv$$43);
    var $target$$202, id$$50, plid$$7;

    if (plid$$5.tail != null) {
      if (plid$$6 = plid$$5.tail, (id$$49 = plid$$5.head, id$$49 === "global")) {
        $target$$202 = 0;
        id$$50 = plid$$5.head;
        plid$$7 = plid$$5.tail;
      } else {
        $target$$202 = 1;
      }
    } else {
      $target$$202 = 1;
    }

    switch ($target$$202) {
      case 0:
        {
          ncenv$$43 = ncenv$$43;
          nenv$$74 = nenv$$74;
          isApplicableMeth$$3 = isApplicableMeth$$3;
          fullyQualified$$6 = new FullyQualifiedFlag(0, "FullyQualified");
          m$$103 = m$$103;
          ad$$69 = ad$$69;
          plid$$5 = plid$$7;
          allowObsolete$$3 = allowObsolete$$3;
          continue ResolvePartialLongIdentPrim;
        }

      case 1:
        {
          if (plid$$5.tail != null) {
            const rest$$43 = plid$$5.tail;
            const id$$51 = plid$$5.head;
            const namespaces = PartialResolveLongIndentAsModuleOrNamespaceThen(nenv$$74, (0, _Types.L)(id$$51, (0, _Types.L)()), function (modref$$40) {
              const allowObsolete$$4 = !(0, _Util.equals)(rest$$43, (0, _Types.L)()) ? allowObsolete$$3 : false;
              return EntityRefContainsSomethingAccessible(ncenv$$43, m$$103, ad$$69, modref$$40) ? ResolvePartialLongIdentInModuleOrNamespace(ncenv$$43, nenv$$74, isApplicableMeth$$3, m$$103, ad$$69, modref$$40, rest$$43, allowObsolete$$4) : (0, _Types.L)();
            });
            let patternInput$$19;
            const matchValue$$88 = (0, _Map.tryFind)(id$$51, nenv$$74.eUnqualifiedItems);

            if (matchValue$$88 == null) {
              patternInput$$19 = [(0, _Types.L)(), false];
            } else {
              const v$$18 = matchValue$$88;

              if (v$$18.tag === 0) {
                const x$$59 = v$$18.fields[0];
                const ty$$53 = (0, _tast.ValRef$$get_Type)(x$$59);
                const ty$$54 = ((0, _Util.equals)((0, _tast.ValRef$$get_BaseOrThisInfo)(x$$59), new _tast.ValBaseOrThisInfo(0, "CtorThisVal")) ? (0, _TastOps.isRefCellTy)(g$$46, ty$$53) : false) ? (0, _TastOps.destRefCellTy)(g$$46, ty$$53) : ty$$53;
                patternInput$$19 = [ResolvePartialLongIdentInType(ncenv$$43, nenv$$74, isApplicableMeth$$3, m$$103, ad$$69, false, rest$$43, ty$$54), true];
              } else {
                patternInput$$19 = [(0, _Types.L)(), false];
              }
            }

            const staticSometingInType = (0, _List.ofSeq)((0, _Seq.delay)(function () {
              return !patternInput$$19[1] ? (0, _Seq.collect)(function (tcref$$76) {
                const tcref$$77 = ResolveNestedTypeThroughAbbreviation(ncenv$$43, tcref$$76, m$$103);
                const ty$$55 = FreshenTycon(ncenv$$43, m$$103, tcref$$77);
                return ResolvePartialLongIdentInType(ncenv$$43, nenv$$74, isApplicableMeth$$3, m$$103, ad$$69, true, rest$$43, ty$$55);
              }, LookupTypeNameInEnvNoArity(new FullyQualifiedFlag(1, "OpenQualified"), id$$51, nenv$$74)) : (0, _Seq.empty)();
            }));
            return (0, _List.append)(namespaces, (0, _List.append)(patternInput$$19[0], staticSometingInType));
          } else {
            const ilTyconNames$$1 = (0, _Set.ofList)((0, _List.choose)(function chooser$$10(tyconRef) {
              if ((0, _tast.EntityRef$$get_IsILTycon)(tyconRef)) {
                return (0, _tast.EntityRef$$get_DisplayName)(tyconRef);
              } else {
                return null;
              }
            }, (0, _illib.LayeredMultiMap$00602$$get_Values)(NameResolutionEnv$$TyconsByAccessNames$$5B75656D(nenv$$74, fullyQualified$$6))), {
              Compare: _Util.comparePrimitives
            });
            const unqualifiedItems = fullyQualified$$6.tag === 1 ? (0, _List.filter)(function predicate$$69($arg$$62) {
              return !ItemIsUnseen(ad$$69, g$$46, NameResolver$$get_amap(ncenv$$43), m$$103, $arg$$62);
            }, (0, _List.filter)(function predicate$$68(_arg1$$31) {
              switch (_arg1$$31.tag) {
                case 22:
                  {
                    return false;
                  }

                case 0:
                  {
                    const v$$16 = _arg1$$31.fields[0];
                    return !(0, _tast.ValRef$$get_IsMember)(v$$16);
                  }

                default:
                  {
                    return true;
                  }
              }
            }, (0, _illib.Map$00602$002Eget_Values)(nenv$$74.eUnqualifiedItems))) : (0, _Types.L)();
            const activePatternItems = fullyQualified$$6.tag === 1 ? (0, _List.filter)(function predicate$$70(_arg2$$2) {
              if (_arg2$$2.tag === 3) {
                const _v = _arg2$$2.fields[0];
                return true;
              } else {
                return false;
              }
            }, (0, _illib.NameMapModule$$$range)(nenv$$74.ePatItems)) : (0, _Types.L)();
            const moduleAndNamespaceItems = (0, _List.map)(ItemForModuleOrNamespaceRef, (0, _List.filter)(function predicate$$73($arg$$63) {
              return !IsTyconUnseen(ad$$69, g$$46, NameResolver$$get_amap(ncenv$$43), m$$103, $arg$$63);
            }, (0, _List.filter)(function predicate$$72(modref$$39) {
              return EntityRefContainsSomethingAccessible(ncenv$$43, m$$103, ad$$69, modref$$39);
            }, (0, _List.filter)(function predicate$$71(x$$54) {
              const demangledName$$1 = (0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(x$$54);

              if (IsInterestingModuleName(demangledName$$1)) {
                return notFakeContainerModule(ilTyconNames$$1, demangledName$$1);
              } else {
                return false;
              }
            }, (0, _illib.NameMultiMapModule$$$range)(NameResolutionEnv$$ModulesAndNamespaces$$5B75656D(nenv$$74, fullyQualified$$6))))));
            const tycons$$1 = (0, _List.map)(function mapping$$92(x$$57) {
              return ItemOfTyconRef(ncenv$$43, m$$103, x$$57);
            }, (0, _List.filter)(function predicate$$76($arg$$64) {
              return !IsTyconUnseen(ad$$69, g$$46, NameResolver$$get_amap(ncenv$$43), m$$103, $arg$$64);
            }, (0, _List.filter)(function predicate$$75(tcref$$74) {
              return !(0, _tast.EntityRef$$get_IsExceptionDecl)(tcref$$74);
            }, (0, _List.filter)(function predicate$$74(tcref$$73) {
              return !((0, _tast.EntityRef$$get_LogicalName)(tcref$$73).indexOf(",") >= 0);
            }, (0, _illib.Map$00602$002Eget_Values)(NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D(nenv$$74, fullyQualified$$6))))));
            const constructors = (0, _List.collect)(function mapping$$93(tcref$$75) {
              return InfosForTyconConstructors(ncenv$$43, m$$103, ad$$69, tcref$$75);
            }, (0, _List.filter)(function predicate$$77($arg$$65) {
              return !IsTyconUnseen(ad$$69, g$$46, NameResolver$$get_amap(ncenv$$43), m$$103, $arg$$65);
            }, (0, _illib.Map$00602$002Eget_Values)(NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D(nenv$$74, fullyQualified$$6))));
            return (0, _List.append)(unqualifiedItems, (0, _List.append)(activePatternItems, (0, _List.append)(moduleAndNamespaceItems, (0, _List.append)(tycons$$1, constructors))));
          }
        }
    }
  }
}

function ResolvePartialLongIdent(ncenv$$44, nenv$$75, isApplicableMeth$$4, m$$106, ad$$70, plid$$8, allowObsolete$$5) {
  return ResolvePartialLongIdentPrim(ncenv$$44, nenv$$75, new ResolveCompletionTargets(0, "All", isApplicableMeth$$4), new FullyQualifiedFlag(1, "OpenQualified"), m$$106, ad$$70, plid$$8, allowObsolete$$5);
}

function ResolvePartialLongIdentInModuleOrNamespaceForRecordFields(ncenv$$45, nenv$$76, m$$107, ad$$71, modref$$41, plid$$9, allowObsolete$$6) {
  var matchValue$$89, mspec$$4, mspec$$5, allowObsolete$$7, tycons$$3;
  const g$$47 = NameResolver$$get_g(ncenv$$45);
  const mty$$14 = (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$41);

  if (plid$$9.tail != null) {
    const rest$$44 = plid$$9.tail;
    const id$$52 = plid$$9.head;
    return (0, _List.append)((matchValue$$89 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$14), id$$52), matchValue$$89 != null ? (mspec$$4 = matchValue$$89, !IsTyconUnseenObsoleteSpec(ad$$71, g$$47, NameResolver$$get_amap(ncenv$$45), m$$107, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$41, mspec$$4), allowObsolete$$6)) ? (mspec$$5 = matchValue$$89, (allowObsolete$$7 = !(0, _Util.equals)(rest$$44, (0, _Types.L)()) ? allowObsolete$$6 : false, ResolvePartialLongIdentInModuleOrNamespaceForRecordFields(ncenv$$45, nenv$$76, m$$107, ad$$71, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$41, mspec$$5), rest$$44, allowObsolete$$7))) : (0, _Types.L)() : (0, _Types.L)()), rest$$44.tail == null ? (tycons$$3 = LookupTypeNameInEntityNoArity(m$$107, id$$52, (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$41)), (0, _List.map)(function mapping$$98(arg0$$8) {
      return new Item(5, "RecdField", arg0$$8);
    }, (0, _List.collect)(function mapping$$97(tycon$$20) {
      const tcref$$79 = (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$41, tycon$$20);
      const ttype$$1 = FreshenTycon(ncenv$$45, m$$107, tcref$$79);
      return (0, _InfoReader.InfoReader$$GetRecordOrClassFieldsOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$45), null, ad$$71, m$$107, ttype$$1);
    }, (0, _List.filter)(function predicate$$84(tc$$2) {
      return (0, _tast.Entity$$get_IsRecordTycon)(tc$$2);
    }, tycons$$3)))) : (0, _Types.L)());
  } else {
    const tycons$$2 = (0, _List.filter)(function predicate$$80(tycon$$17) {
      return !IsTyconUnseen(ad$$71, g$$47, NameResolver$$get_amap(ncenv$$45), m$$107, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$41, tycon$$17));
    }, (0, _List.filter)(function predicate$$79(tycon$$16) {
      return (0, _tast.Entity$$get_IsRecordTycon)(tycon$$16);
    }, (0, _List.filter)(function predicate$$78(tcref$$78) {
      return !((0, _tast.Entity$$get_LogicalName)(tcref$$78).indexOf(",") >= 0);
    }, (0, _tast.ModuleOrNamespaceType$$get_TypeDefinitions)(mty$$14))));
    const ilTyconNames$$2 = (0, _Set.ofList)((0, _List.choose)(function chooser$$11(tycon$$18) {
      if ((0, _tast.Entity$$get_IsILTycon)(tycon$$18)) {
        return (0, _tast.Entity$$get_DisplayName)(tycon$$18);
      } else {
        return null;
      }
    }, (0, _illib.LayeredMultiMap$00602$$get_Values)((0, _tast.ModuleOrNamespaceType$$get_TypesByAccessNames)(mty$$14))), {
      Compare: _Util.comparePrimitives
    });
    return (0, _List.append)((0, _List.map)(ItemForModuleOrNamespaceRef, (0, _List.filter)(function predicate$$83(modref$$42) {
      return EntityRefContainsSomethingAccessible(ncenv$$45, m$$107, ad$$71, modref$$42);
    }, (0, _List.filter)(function predicate$$82($arg$$68) {
      return !IsTyconUnseen(ad$$71, g$$47, NameResolver$$get_amap(ncenv$$45), m$$107, $arg$$68);
    }, (0, _List.map)(function mapping$$94(arg00$$54) {
      return (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$41, arg00$$54);
    }, (0, _List.filter)(function predicate$$81(x$$60) {
      const demangledName$$2 = (0, _tast.Entity$$get_DemangledModuleOrNamespaceName)(x$$60);

      if (notFakeContainerModule(ilTyconNames$$2, demangledName$$2)) {
        return IsInterestingModuleName(demangledName$$2);
      } else {
        return false;
      }
    }, (0, _illib.NameMapModule$$$range)((0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$14))))))), (0, _List.append)((0, _List.map)(function mapping$$95($arg$$69) {
      return ItemOfTyconRef(ncenv$$45, m$$107, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$41, $arg$$69));
    }, tycons$$2), (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (tycon$$19) {
        if ((0, _AccessibilityLogic.IsEntityAccessible)(NameResolver$$get_amap(ncenv$$45), m$$107, ad$$71, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$41, tycon$$19))) {
          const ttype = FreshenTycon(ncenv$$45, m$$107, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$41, tycon$$19));
          return (0, _List.map)(function mapping$$96(arg0$$7) {
            return new Item(5, "RecdField", arg0$$7);
          }, (0, _InfoReader.InfoReader$$GetRecordOrClassFieldsOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$45), null, ad$$71, m$$107, ttype));
        } else {
          return (0, _Seq.empty)();
        }
      }, tycons$$2);
    }))));
  }
}

function ResolvePartialLongIdentToClassOrRecdFields(ncenv$$46, nenv$$77, m$$109, ad$$72, plid$$10, allowObsolete$$8) {
  return ResolvePartialLongIdentToClassOrRecdFieldsImpl(ncenv$$46, nenv$$77, new FullyQualifiedFlag(1, "OpenQualified"), m$$109, ad$$72, plid$$10, allowObsolete$$8);
}

function ResolvePartialLongIdentToClassOrRecdFieldsImpl(ncenv$$47, nenv$$78, fullyQualified$$7, m$$110, ad$$73, plid$$11, allowObsolete$$9) {
  var plid$$12, id$$53;

  ResolvePartialLongIdentToClassOrRecdFieldsImpl: while (true) {
    const g$$48 = NameResolver$$get_g(ncenv$$47);
    var $target$$210, id$$54, plid$$13;

    if (plid$$11.tail != null) {
      if (plid$$12 = plid$$11.tail, (id$$53 = plid$$11.head, id$$53 === "global")) {
        $target$$210 = 0;
        id$$54 = plid$$11.head;
        plid$$13 = plid$$11.tail;
      } else {
        $target$$210 = 1;
      }
    } else {
      $target$$210 = 1;
    }

    switch ($target$$210) {
      case 0:
        {
          ncenv$$47 = ncenv$$47;
          nenv$$78 = nenv$$78;
          fullyQualified$$7 = new FullyQualifiedFlag(0, "FullyQualified");
          m$$110 = m$$110;
          ad$$73 = ad$$73;
          plid$$11 = plid$$13;
          allowObsolete$$9 = allowObsolete$$9;
          continue ResolvePartialLongIdentToClassOrRecdFieldsImpl;
        }

      case 1:
        {
          if (plid$$11.tail != null) {
            const rest$$45 = plid$$11.tail;
            const id$$55 = plid$$11.head;
            const modsOrNs = PartialResolveLongIndentAsModuleOrNamespaceThen(nenv$$78, (0, _Types.L)(id$$55, (0, _Types.L)()), function (modref$$44) {
              const allowObsolete$$10 = !(0, _Util.equals)(rest$$45, (0, _Types.L)()) ? allowObsolete$$9 : false;
              return EntityRefContainsSomethingAccessible(ncenv$$47, m$$110, ad$$73, modref$$44) ? ResolvePartialLongIdentInModuleOrNamespaceForRecordFields(ncenv$$47, nenv$$78, m$$110, ad$$73, modref$$44, rest$$45, allowObsolete$$10) : (0, _Types.L)();
            });
            let qualifiedFields;

            if (rest$$45.tail == null) {
              const tycons$$4 = LookupTypeNameInEnvNoArity(new FullyQualifiedFlag(1, "OpenQualified"), id$$55, nenv$$78);
              qualifiedFields = (0, _List.map)(function mapping$$104(arg0$$9) {
                return new Item(5, "RecdField", arg0$$9);
              }, (0, _List.collect)(function mapping$$103(tcref$$82) {
                const ttype$$2 = FreshenTycon(ncenv$$47, m$$110, tcref$$82);
                return (0, _InfoReader.InfoReader$$GetRecordOrClassFieldsOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$47), null, ad$$73, m$$110, ttype$$2);
              }, tycons$$4));
            } else {
              qualifiedFields = (0, _Types.L)();
            }

            return (0, _List.append)(modsOrNs, qualifiedFields);
          } else {
            const iltyconNames = (0, _Set.ofList)((0, _List.choose)(function chooser$$12(tyconRef$$1) {
              if ((0, _tast.EntityRef$$get_IsILTycon)(tyconRef$$1)) {
                return (0, _tast.EntityRef$$get_DisplayName)(tyconRef$$1);
              } else {
                return null;
              }
            }, (0, _illib.LayeredMultiMap$00602$$get_Values)(NameResolutionEnv$$TyconsByAccessNames$$5B75656D(nenv$$78, fullyQualified$$7))), {
              Compare: _Util.comparePrimitives
            });
            const mods = (0, _List.map)(ItemForModuleOrNamespaceRef, (0, _List.filter)(function predicate$$87($arg$$72) {
              return !IsTyconUnseen(ad$$73, g$$48, NameResolver$$get_amap(ncenv$$47), m$$110, $arg$$72);
            }, (0, _List.filter)(function predicate$$86(modref$$43) {
              return EntityRefContainsSomethingAccessible(ncenv$$47, m$$110, ad$$73, modref$$43);
            }, (0, _List.filter)(function predicate$$85(x$$63) {
              const demangledName$$3 = (0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(x$$63);

              if (IsInterestingModuleName(demangledName$$3)) {
                return notFakeContainerModule(iltyconNames, demangledName$$3);
              } else {
                return false;
              }
            }, (0, _illib.NameMultiMapModule$$$range)(NameResolutionEnv$$ModulesAndNamespaces$$5B75656D(nenv$$78, fullyQualified$$7))))));
            const recdTyCons = (0, _List.map)(function mapping$$99(x$$66) {
              return ItemOfTyconRef(ncenv$$47, m$$110, x$$66);
            }, (0, _List.filter)(function predicate$$90($arg$$73) {
              return !IsTyconUnseen(ad$$73, g$$48, NameResolver$$get_amap(ncenv$$47), m$$110, $arg$$73);
            }, (0, _List.filter)(function predicate$$89(tcref$$81) {
              return (0, _tast.EntityRef$$get_IsRecordTycon)(tcref$$81);
            }, (0, _List.filter)(function predicate$$88(tcref$$80) {
              return !((0, _tast.EntityRef$$get_LogicalName)(tcref$$80).indexOf(",") >= 0);
            }, (0, _illib.Map$00602$002Eget_Values)(NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D(nenv$$78, fullyQualified$$7))))));
            const recdFields = (0, _List.ofSeq)((0, _Seq.map)(function mapping$$102(fref$$2) {
              const typeInsts = (0, _List.map)(function mapping$$101(tyar) {
                return (0, _tast.Typar$$get_AsType)(tyar);
              }, (0, _tast.EntityRef$$get_TyparsNoRange)((0, _tast.RecdFieldRef$$get_TyconRef)(fref$$2)));
              return new Item(5, "RecdField", new _infos.RecdFieldInfo(0, "RecdFieldInfo", typeInsts, fref$$2));
            }, (0, _Seq.collect)(function mapping$$100(_arg1$$32) {
              const activePatternResult41018 = _arg1$$32;
              return activePatternResult41018[1];
            }, nenv$$78.eFieldLabels)));
            return (0, _List.append)(mods, (0, _List.append)(recdTyCons, recdFields));
          }
        }
    }
  }
}

function ResolveCompletionsInTypeForItem(ncenv$$48, nenv$$79, m$$112, ad$$74, statics$$8, ty$$56, item$$50) {
  return (0, _Seq.delay)(function () {
    const g$$49 = NameResolver$$get_g(ncenv$$48);
    const amap$$38 = NameResolver$$get_amap(ncenv$$48);

    switch (item$$50.tag) {
      case 5:
        {
          return (0, _List.map)(function mapping$$105(arg0$$10) {
            return new Item(5, "RecdField", arg0$$10);
          }, (0, _List.filter)(function predicate$$91(rfref$$9) {
            if ((0, _infos.RecdFieldInfo$$get_IsStatic)(rfref$$9) === statics$$8) {
              return (0, _AccessibilityLogic.IsFieldInfoAccessible)(ad$$74, rfref$$9);
            } else {
              return false;
            }
          }, (0, _InfoReader.InfoReader$$GetRecordOrClassFieldsOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$48), null, ad$$74, m$$112, ty$$56)));
        }

      case 1:
        {
          if (statics$$8 ? (0, _TastOps.isAppTy)(g$$49, ty$$56) : false) {
            const patternInput$$20 = (0, _TastOps.destAppTy)(g$$49, ty$$56);
            return (0, _List.map)(function mapping$$106(ucref$$13) {
              return new Item(1, "UnionCase", new _infos.UnionCaseInfo(0, "UnionCaseInfo", patternInput$$20[1], ucref$$13), false);
            }, (0, _List.filter)(function predicate$$92($arg$$74) {
              return !IsUnionCaseUnseen(ad$$74, g$$49, NameResolver$$get_amap(ncenv$$48), m$$112, $arg$$74);
            }, (0, _tast.EntityRef$$get_UnionCasesAsRefList)(patternInput$$20[0])));
          } else {
            return (0, _Seq.empty)();
          }
        }

      case 8:
        {
          return (0, _List.map)(function mapping$$107(arg0$$11) {
            return new Item(8, "Event", arg0$$11);
          }, (0, _List.filter)(function predicate$$93(x$$67) {
            if ((0, _InfoReader.IsStandardEventInfo)(NameResolver$$get_InfoReader(ncenv$$48), m$$112, ad$$74, x$$67)) {
              return (0, _infos.EventInfo$$get_IsStatic)(x$$67) === statics$$8;
            } else {
              return false;
            }
          }, (0, _InfoReader.InfoReader$$GetEventInfosOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$48), null, ad$$74, m$$112, ty$$56)));
        }

      case 7:
        {
          return (0, _List.map)(function mapping$$108(arg0$$12) {
            return new Item(7, "ILField", arg0$$12);
          }, (0, _List.filter)(function predicate$$94(x$$68) {
            if (!(0, _infos.ILFieldInfo$$get_IsSpecialName)(x$$68) ? (0, _infos.ILFieldInfo$$get_IsStatic)(x$$68) === statics$$8 : false) {
              return (0, _AccessibilityLogic.IsILFieldInfoAccessible)(g$$49, amap$$38, m$$112, ad$$74, x$$68);
            } else {
              return false;
            }
          }, (0, _InfoReader.InfoReader$$GetILFieldInfosOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$48), null, ad$$74, m$$112, ty$$56)));
        }

      case 14:
        {
          return statics$$8 ? (0, _List.map)(function mapping$$109(x$$69) {
            return ItemOfTy(g$$49, x$$69);
          }, GetNestedTypesOfType(ad$$74, ncenv$$48, null, new TypeNameResolutionStaticArgsInfo(0, "Indefinite"), false, m$$112, ty$$56)) : (0, _Seq.empty)();
        }

      default:
        {
          const pinfosIncludingUnseen$$1 = (0, _List.filter)(function predicate$$95(x$$70) {
            if ((0, _infos.PropInfo$$get_IsStatic)(x$$70) === statics$$8) {
              return (0, _AccessibilityLogic.IsPropInfoAccessible)(g$$49, amap$$38, m$$112, ad$$74, x$$70);
            } else {
              return false;
            }
          }, AllPropInfosOfTypeInScope(NameResolver$$get_InfoReader(ncenv$$48), nenv$$79, null, ad$$74, new _InfoReader.FindMemberFlag(1, "PreferOverrides"), m$$112, ty$$56));
          const pinfoMethNames$$1 = (0, _List.append)((0, _List.map)(function mapping$$110(pinfo$$20) {
            return (0, _infos.MethInfo$$get_LogicalName)((0, _infos.PropInfo$$get_GetterMethod)(pinfo$$20));
          }, (0, _List.filter)(function predicate$$96(pinfo$$19) {
            return (0, _infos.PropInfo$$get_HasGetter)(pinfo$$19);
          }, pinfosIncludingUnseen$$1)), (0, _List.map)(function mapping$$111(pinfo$$22) {
            return (0, _infos.MethInfo$$get_LogicalName)((0, _infos.PropInfo$$get_SetterMethod)(pinfo$$22));
          }, (0, _List.filter)(function predicate$$97(pinfo$$21) {
            return (0, _infos.PropInfo$$get_HasSetter)(pinfo$$21);
          }, pinfosIncludingUnseen$$1)));
          let einfoMethNames$$1;
          const einfos$$1 = (0, _List.filter)(function predicate$$98(x$$71) {
            if ((0, _InfoReader.IsStandardEventInfo)(NameResolver$$get_InfoReader(ncenv$$48), m$$112, ad$$74, x$$71)) {
              return (0, _infos.EventInfo$$get_IsStatic)(x$$71) === statics$$8;
            } else {
              return false;
            }
          }, (0, _InfoReader.InfoReader$$GetEventInfosOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$48), null, ad$$74, m$$112, ty$$56));
          einfoMethNames$$1 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
            return (0, _Seq.collect)(function (einfo$$8) {
              const delegateType$$1 = (0, _infos.EventInfo$$GetDelegateType$$73F6E43C)(einfo$$8, amap$$38, m$$112);
              const invokeMethInfo$$1 = (0, _InfoReader.GetSigOfFunctionForDelegate)(NameResolver$$get_InfoReader(ncenv$$48), delegateType$$1, m$$112, ad$$74).fields[0];
              return (0, _TastOps.slotSigHasVoidReturnTy)((0, _infos.MethInfo$$GetSlotSig$$73F6E43C)(invokeMethInfo$$1, amap$$38, m$$112)) ? (0, _Seq.append)((0, _Seq.singleton)((0, _infos.MethInfo$$get_DisplayName)((0, _infos.EventInfo$$get_AddMethod)(einfo$$8))), (0, _Seq.delay)(function () {
                return (0, _Seq.singleton)((0, _infos.MethInfo$$get_DisplayName)((0, _infos.EventInfo$$get_RemoveMethod)(einfo$$8)));
              })) : (0, _Seq.empty)();
            }, einfos$$1);
          }));
          const suppressedMethNames$$1 = (0, _lib.Zset$$$ofList)(_illib.String$$$order, (0, _List.append)(pinfoMethNames$$1, einfoMethNames$$1));
          const pinfos$$13 = (0, _List.filter)(function predicate$$99(x$$72) {
            return !(0, _AttributeChecking.PropInfoIsUnseen)(m$$112, x$$72);
          }, pinfosIncludingUnseen$$1);

          const minfoFilter$$1 = function minfoFilter$$1(minfo$$19) {
            let isUnseenDueToBasicObjRules$$1;

            if (!(0, _TastOps.isObjTy)(g$$49, ty$$56) ? !(0, _infos.MethInfo$$get_IsExtensionMember)(minfo$$19) : false) {
              const matchValue$$90 = (0, _infos.MethInfo$$get_LogicalName)(minfo$$19);

              switch (matchValue$$90) {
                case "GetType":
                  {
                    isUnseenDueToBasicObjRules$$1 = false;
                    break;
                  }

                case "GetHashCode":
                  {
                    isUnseenDueToBasicObjRules$$1 = (0, _TastOps.isObjTy)(g$$49, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$19)) ? !(0, _AugmentWithHashCompare.TypeDefinitelyHasEquality)(g$$49, ty$$56) : false;
                    break;
                  }

                case "ToString":
                  {
                    isUnseenDueToBasicObjRules$$1 = false;
                    break;
                  }

                case "Equals":
                  {
                    isUnseenDueToBasicObjRules$$1 = !(0, _TastOps.isObjTy)(g$$49, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$19)) ? false : (0, _infos.MethInfo$$get_IsInstance)(minfo$$19) ? !(0, _AugmentWithHashCompare.TypeDefinitelyHasEquality)(g$$49, ty$$56) : true;
                    break;
                  }

                default:
                  {
                    isUnseenDueToBasicObjRules$$1 = (0, _TastOps.isObjTy)(g$$49, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$19));
                  }
              }
            } else {
              isUnseenDueToBasicObjRules$$1 = false;
            }

            const result$$3 = (((((((!isUnseenDueToBasicObjRules$$1 ? !(0, _infos.MethInfo$$get_IsInstance)(minfo$$19) === statics$$8 : false) ? (0, _AccessibilityLogic.IsMethInfoAccessible)(amap$$38, m$$112, ad$$74, minfo$$19) : false) ? !(0, _AttributeChecking.MethInfoIsUnseen)(g$$49, m$$112, ty$$56, minfo$$19) : false) ? !(0, _infos.MethInfo$$get_IsConstructor)(minfo$$19) : false) ? !(0, _infos.MethInfo$$get_IsClassConstructor)(minfo$$19) : false) ? !((0, _infos.MethInfo$$get_LogicalName)(minfo$$19) === ".cctor") : false) ? !((0, _infos.MethInfo$$get_LogicalName)(minfo$$19) === ".ctor") : false) ? !(0, _TaggedCollections.Set$00602$$Contains$$2B595)(suppressedMethNames$$1, (0, _infos.MethInfo$$get_LogicalName)(minfo$$19)) : false;
            return result$$3;
          };

          const pinfoItems$$1 = (0, _List.choose)(function chooser$$13(pinfo$$23) {
            const pinfoOpt$$3 = DecodeFSharpEvent((0, _Types.L)(pinfo$$23, (0, _Types.L)()), ad$$74, g$$49, ncenv$$48, m$$112);
            var $target$$211, einfo$$9;

            if (pinfoOpt$$3 != null) {
              if (pinfoOpt$$3.tag === 8) {
                $target$$211 = 0;
                einfo$$9 = pinfoOpt$$3.fields[0];
              } else {
                $target$$211 = 1;
              }
            } else {
              $target$$211 = 1;
            }

            switch ($target$$211) {
              case 0:
                {
                  if ((0, _InfoReader.IsStandardEventInfo)(NameResolver$$get_InfoReader(ncenv$$48), m$$112, ad$$74, einfo$$9)) {
                    return pinfoOpt$$3;
                  } else {
                    return null;
                  }
                }

              case 1:
                {
                  return pinfoOpt$$3;
                }
            }
          }, pinfos$$13);
          return (0, _Seq.append)(pinfoItems$$1, (0, _Seq.delay)(function () {
            if (item$$50.tag === 10) {
              let minfos$$22;
              const minfos$$20 = (0, _List.filter)(minfoFilter$$1, AllMethInfosOfTypeInScope(NameResolver$$get_InfoReader(ncenv$$48), nenv$$79, null, ad$$74, new _InfoReader.FindMemberFlag(1, "PreferOverrides"), m$$112, ty$$56));
              let minfos$$21;
              const addersAndRemovers$$1 = (0, _Set.ofSeq)((0, _List.collect)(function mapping$$112(_arg1$$33) {
                var $target$$212, addValRef$$2, removeValRef$$2;

                if (_arg1$$33.tag === 8) {
                  if (_arg1$$33.fields[0].tag === 0) {
                    $target$$212 = 0;
                    addValRef$$2 = _arg1$$33.fields[0].fields[2];
                    removeValRef$$2 = _arg1$$33.fields[0].fields[3];
                  } else {
                    $target$$212 = 1;
                  }
                } else {
                  $target$$212 = 1;
                }

                switch ($target$$212) {
                  case 0:
                    {
                      return (0, _Types.L)((0, _tast.ValRef$$get_LogicalName)(addValRef$$2), (0, _Types.L)((0, _tast.ValRef$$get_LogicalName)(removeValRef$$2), (0, _Types.L)()));
                    }

                  case 1:
                    {
                      return (0, _Types.L)();
                    }
                }
              }, pinfoItems$$1), {
                Compare: _Util.comparePrimitives
              });
              minfos$$21 = (0, _Set.FSharpSet$$get_IsEmpty)(addersAndRemovers$$1) ? minfos$$20 : (0, _List.filter)(function predicate$$100(minfo$$20) {
                return !(0, _Set.FSharpSet$$Contains$$2B595)(addersAndRemovers$$1, (0, _infos.MethInfo$$get_LogicalName)(minfo$$20));
              }, minfos$$20);
              minfos$$22 = minfos$$21;

              const partitionl$$1 = function partitionl$$1(l$$32, acc$$7) {
                partitionl$$1: while (true) {
                  if (l$$32.tail != null) {
                    const t$$5 = l$$32.tail;
                    const h$$5 = l$$32.head;
                    const nm$$34 = (0, _infos.MethInfo$$get_LogicalName)(h$$5);
                    l$$32 = t$$5;
                    acc$$7 = (0, _illib.NameMultiMapModule$$$add)(nm$$34, h$$5, acc$$7);
                    continue partitionl$$1;
                  } else {
                    return acc$$7;
                  }
                }
              };

              return (0, _List.map)(function (tupledArg$$31) {
                return Item$$$MakeMethGroup$$18D66E3A(tupledArg$$31[0], tupledArg$$31[1]);
              }, (0, _illib.NameMapModule$$$toList)(partitionl$$1(minfos$$22, (0, _Map.empty)({
                Compare: _Util.comparePrimitives
              }))));
            } else {
              return (0, _Seq.empty)();
            }
          }));
        }
    }
  });
}

function ResolvePartialLongIdentInTypeForItem(ncenv$$49, nenv$$80, m$$113, ad$$75, statics$$9, plid$$14, item$$51, ty$$58) {
  return (0, _Seq.delay)(function () {
    const g$$50 = NameResolver$$get_g(ncenv$$49);
    const amap$$40 = NameResolver$$get_amap(ncenv$$49);

    if (plid$$14.tail != null) {
      const rest$$46 = plid$$14.tail;
      const id$$56 = plid$$14.head;
      const rfinfos$$2 = (0, _List.filter)(function predicate$$102(fref$$4) {
        return (0, _tast.RecdField$$get_IsStatic)((0, _infos.RecdFieldInfo$$get_RecdField)(fref$$4)) === statics$$9;
      }, (0, _List.filter)(function predicate$$101(fref$$3) {
        return (0, _AccessibilityLogic.IsRecdFieldAccessible)(NameResolver$$get_amap(ncenv$$49), m$$113, ad$$75, (0, _infos.RecdFieldInfo$$get_RecdFieldRef)(fref$$3));
      }, (0, _InfoReader.InfoReader$$GetRecordOrClassFieldsOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$49), null, ad$$75, m$$113, ty$$58)));
      const nestedTypes$$4 = GetNestedTypesOfType(ad$$75, ncenv$$49, id$$56, new TypeNameResolutionStaticArgsInfo(0, "Indefinite"), false, m$$113, ty$$58);
      return (0, _Seq.append)((0, _Seq.collect)(function (rfinfo$$3) {
        return (0, _infos.RecdFieldInfo$$get_Name)(rfinfo$$3) === id$$56 ? ResolvePartialLongIdentInTypeForItem(ncenv$$49, nenv$$80, m$$113, ad$$75, false, rest$$46, item$$51, (0, _infos.RecdFieldInfo$$get_FieldType)(rfinfo$$3)) : (0, _Seq.empty)();
      }, rfinfos$$2), (0, _Seq.delay)(function () {
        const fullTypeOfPinfo = function fullTypeOfPinfo(pinfo$$24) {
          const rty$$2 = (0, _infos.PropInfo$$GetPropertyType$$73F6E43C)(pinfo$$24, amap$$40, m$$113);
          const rty$$3 = (0, _infos.PropInfo$$get_IsIndexer)(pinfo$$24) ? (0, _TastOps.op_MinusMinusGreater)((0, _TastOps.mkRefTupledTy)(g$$50, (0, _infos.PropInfo$$GetParamTypes$$73F6E43C)(pinfo$$24, amap$$40, m$$113)), rty$$2) : rty$$2;
          return rty$$3;
        };

        const pinfos$$14 = (0, _List.filter)(function predicate$$104(_arg1$$34) {
          return (0, _AccessibilityLogic.IsPropInfoAccessible)(g$$50, amap$$40, m$$113, ad$$75, _arg1$$34);
        }, (0, _List.filter)(function predicate$$103(x$$73) {
          return (0, _infos.PropInfo$$get_IsStatic)(x$$73) === statics$$9;
        }, AllPropInfosOfTypeInScope(NameResolver$$get_InfoReader(ncenv$$49), nenv$$80, id$$56, ad$$75, new _InfoReader.FindMemberFlag(0, "IgnoreOverrides"), m$$113, ty$$58)));
        return (0, _Seq.append)((0, _Seq.collect)(function (pinfo$$25) {
          return ResolvePartialLongIdentInTypeForItem(ncenv$$49, nenv$$80, m$$113, ad$$75, false, rest$$46, item$$51, fullTypeOfPinfo(pinfo$$25));
        }, pinfos$$14), (0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Seq.collect)(function (einfo$$10) {
            const tyinfo = (0, _InfoReader.PropTypOfEventInfo)(NameResolver$$get_InfoReader(ncenv$$49), m$$113, ad$$75, einfo$$10);
            return ResolvePartialLongIdentInTypeForItem(ncenv$$49, nenv$$80, m$$113, ad$$75, false, rest$$46, item$$51, tyinfo);
          }, (0, _InfoReader.InfoReader$$GetEventInfosOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$49), id$$56, ad$$75, m$$113, ty$$58)), (0, _Seq.delay)(function () {
            return (0, _Seq.append)((0, _Seq.collect)(function (ty$$61) {
              return ResolvePartialLongIdentInTypeForItem(ncenv$$49, nenv$$80, m$$113, ad$$75, statics$$9, rest$$46, item$$51, ty$$61);
            }, nestedTypes$$4), (0, _Seq.delay)(function () {
              return (0, _Seq.collect)(function (finfo$$4) {
                return ((!(0, _infos.ILFieldInfo$$get_IsSpecialName)(finfo$$4) ? (0, _infos.ILFieldInfo$$get_IsStatic)(finfo$$4) === statics$$9 : false) ? (0, _AccessibilityLogic.IsILFieldInfoAccessible)(g$$50, amap$$40, m$$113, ad$$75, finfo$$4) : false) ? ResolvePartialLongIdentInTypeForItem(ncenv$$49, nenv$$80, m$$113, ad$$75, false, rest$$46, item$$51, (0, _infos.ILFieldInfo$$FieldType$$73F6E43C)(finfo$$4, amap$$40, m$$113)) : (0, _Seq.empty)();
              }, (0, _InfoReader.InfoReader$$GetILFieldInfosOfType$$Z5B2D1E7B)(NameResolver$$get_InfoReader(ncenv$$49), id$$56, ad$$75, m$$113, ty$$58));
            }));
          }));
        }));
      }));
    } else {
      return ResolveCompletionsInTypeForItem(ncenv$$49, nenv$$80, m$$113, ad$$75, statics$$9, ty$$58, item$$51);
    }
  });
}

function ResolvePartialLongIdentInModuleOrNamespaceForItem(ncenv$$50, nenv$$81, m$$114, ad$$76, modref$$45, plid$$15, item$$52) {
  const g$$51 = NameResolver$$get_g(ncenv$$50);
  const mty$$15 = (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$45);
  return (0, _Seq.delay)(function () {
    var matchValue$$91, mspec$$6, mspec$$7;

    if (plid$$15.tail != null) {
      const rest$$47 = plid$$15.tail;
      const id$$57 = plid$$15.head;
      return (0, _Seq.append)((matchValue$$91 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$15), id$$57), matchValue$$91 != null ? (mspec$$6 = matchValue$$91, !IsTyconUnseenObsoleteSpec(ad$$76, g$$51, NameResolver$$get_amap(ncenv$$50), m$$114, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$45, mspec$$6), true)) ? (mspec$$7 = matchValue$$91, ResolvePartialLongIdentInModuleOrNamespaceForItem(ncenv$$50, nenv$$81, m$$114, ad$$76, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$45, mspec$$7), rest$$47, item$$52)) : (null, (0, _Seq.empty)()) : (null, (0, _Seq.empty)())), (0, _Seq.delay)(function () {
        return (0, _Seq.collect)(function (tycon$$23) {
          const tcref$$85 = (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$45, tycon$$23);
          return !IsTyconUnseenObsoleteSpec(ad$$76, g$$51, NameResolver$$get_amap(ncenv$$50), m$$114, tcref$$85, true) ? ResolvePartialLongIdentInTypeForItem(ncenv$$50, nenv$$81, m$$114, ad$$76, true, rest$$47, item$$52, (0, _TastOps.generalizedTyconRef)(tcref$$85)) : (0, _Seq.empty)();
        }, LookupTypeNameInEntityNoArity(m$$114, id$$57, (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$45)));
      }));
    } else {
      switch (item$$52.tag) {
        case 0:
          {
            return (0, _List.map)(function mapping$$113(arg0$$13) {
              return new Item(0, "Value", arg0$$13);
            }, (0, _List.filter)(function predicate$$106($arg$$79) {
              return !IsValUnseen(ad$$76, g$$51, m$$114, $arg$$79);
            }, (0, _List.filter)(function predicate$$105(v$$22) {
              return !(0, _tast.ValRef$$get_IsMember)(v$$22);
            }, (0, _List.choose)(function chooser$$14(vspec$$8) {
              return TryMkValRefInModRef(modref$$45, vspec$$8);
            }, (0, _List.ofSeq)((0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)(mty$$15))))));
          }

        case 1:
          {
            return (0, _List.map)(function mapping$$114(x$$74) {
              return new Item(1, "UnionCase", GeneralizeUnionCaseRef(x$$74), false);
            }, (0, _List.filter)(function predicate$$107($arg$$80) {
              return !IsUnionCaseUnseen(ad$$76, g$$51, NameResolver$$get_amap(ncenv$$50), m$$114, $arg$$80);
            }, UnionCaseRefsInModuleOrNamespace(modref$$45)));
          }

        case 3:
          {
            return (0, _List.map)(function mapping$$115(arg0$$14) {
              return new Item(3, "ActivePatternCase", arg0$$14);
            }, (0, _List.filter)(function predicate$$108(apref$$7) {
              return !IsValUnseen(ad$$76, g$$51, m$$114, (0, _tast.ActivePatternElemRef$$get_ActivePatternVal)(apref$$7));
            }, (0, _illib.NameMapModule$$$range)(ActivePatternElemsOfModuleOrNamespace(modref$$45))));
          }

        case 4:
          {
            return (0, _List.map)(function mapping$$117(arg0$$15) {
              return new Item(4, "ExnCase", arg0$$15);
            }, (0, _List.filter)(function predicate$$109($arg$$81) {
              return !IsTyconUnseen(ad$$76, g$$51, NameResolver$$get_amap(ncenv$$50), m$$114, $arg$$81);
            }, (0, _List.map)(function mapping$$116(arg00$$57) {
              return (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$45, arg00$$57);
            }, (0, _illib.NameMapModule$$$range)((0, _tast.ModuleOrNamespaceType$$get_ExceptionDefinitionsByDemangledName)(mty$$15)))));
          }

        default:
          {
            const ilTyconNames$$3 = (0, _Set.ofList)((0, _List.choose)(function chooser$$15(tycon$$21) {
              if ((0, _tast.Entity$$get_IsILTycon)(tycon$$21)) {
                return (0, _tast.Entity$$get_DisplayName)(tycon$$21);
              } else {
                return null;
              }
            }, (0, _illib.LayeredMultiMap$00602$$get_Values)((0, _tast.ModuleOrNamespaceType$$get_TypesByAccessNames)(mty$$15))), {
              Compare: _Util.comparePrimitives
            });
            return (0, _Seq.append)((0, _List.map)(ItemForModuleOrNamespaceRef, (0, _List.filter)(function predicate$$112(modref$$46) {
              return EntityRefContainsSomethingAccessible(ncenv$$50, m$$114, ad$$76, modref$$46);
            }, (0, _List.filter)(function predicate$$111($arg$$84) {
              return !IsTyconUnseen(ad$$76, g$$51, NameResolver$$get_amap(ncenv$$50), m$$114, $arg$$84);
            }, (0, _List.map)(function mapping$$118(arg00$$58) {
              return (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$45, arg00$$58);
            }, (0, _List.filter)(function predicate$$110(x$$76) {
              const demangledName$$4 = (0, _tast.Entity$$get_DemangledModuleOrNamespaceName)(x$$76);

              if (notFakeContainerModule(ilTyconNames$$3, demangledName$$4)) {
                return IsInterestingModuleName(demangledName$$4);
              } else {
                return false;
              }
            }, (0, _illib.NameMapModule$$$range)((0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$15))))))), (0, _Seq.delay)(function () {
              const tycons$$5 = (0, _List.filter)(function predicate$$114(tycon$$22) {
                return !IsTyconUnseen(ad$$76, g$$51, NameResolver$$get_amap(ncenv$$50), m$$114, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$45, tycon$$22));
              }, (0, _List.filter)(function predicate$$113(tcref$$83) {
                return !((0, _tast.Entity$$get_LogicalName)(tcref$$83).indexOf(",") >= 0);
              }, (0, _tast.ModuleOrNamespaceType$$get_TypeDefinitions)(mty$$15)));
              return (0, _Seq.append)((0, _List.map)(function mapping$$119($arg$$85) {
                return ItemOfTyconRef(ncenv$$50, m$$114, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$45, $arg$$85));
              }, tycons$$5), (0, _Seq.delay)(function () {
                return (0, _List.collect)(function mapping$$120($arg$$86) {
                  return InfosForTyconConstructors(ncenv$$50, m$$114, ad$$76, (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$45, $arg$$86));
                }, tycons$$5);
              }));
            }));
          }
      }
    }
  });
}

function PartialResolveLookupInModuleOrNamespaceAsModuleOrNamespaceThenLazy($arg$$213, $arg$$214, $arg$$215) {
  PartialResolveLookupInModuleOrNamespaceAsModuleOrNamespaceThenLazy: while (true) {
    const f$$38 = $arg$$213,
          plid$$16 = $arg$$214,
          modref$$47 = $arg$$215;
    const mty$$16 = (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(modref$$47);

    if (plid$$16.tail != null) {
      const rest$$48 = plid$$16.tail;
      const id$$58 = plid$$16.head;
      const matchValue$$92 = (0, _Map.FSharpMap$$TryFind$$2B595)((0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(mty$$16), id$$58);

      if (matchValue$$92 == null) {
        return (0, _Seq.empty)();
      } else {
        const mty$$17 = matchValue$$92;
        $arg$$213 = f$$38;
        $arg$$214 = rest$$48;
        $arg$$215 = (0, _tast.EntityRef$$NestedTyconRef$$Z52A308BB)(modref$$47, mty$$17);
        continue PartialResolveLookupInModuleOrNamespaceAsModuleOrNamespaceThenLazy;
      }
    } else {
      return f$$38(modref$$47);
    }
  }
}

function PartialResolveLongIndentAsModuleOrNamespaceThenLazy(nenv$$82, plid$$17, f$$39) {
  return (0, _Seq.delay)(function () {
    if (plid$$17.tail == null) {
      return (0, _Seq.empty)();
    } else {
      const rest$$49 = plid$$17.tail;
      const id$$59 = plid$$17.head;
      const matchValue$$93 = (0, _Map.tryFind)(id$$59, nenv$$82.eModulesAndNamespaces);

      if (matchValue$$93 == null) {
        return (0, _Seq.empty)();
      } else {
        const modrefs$$6 = matchValue$$93;
        return (0, _Seq.collect)(function (modref$$48) {
          return PartialResolveLookupInModuleOrNamespaceAsModuleOrNamespaceThenLazy(f$$39, rest$$49, modref$$48);
        }, modrefs$$6);
      }
    }
  });
}

function GetCompletionForItem(ncenv$$51, nenv$$83, m$$118, ad$$77, plid$$18, item$$53) {
  return (0, _Seq.delay)(function () {
    const g$$52 = NameResolver$$get_g(ncenv$$51);
    return plid$$18.tail == null ? (0, _Seq.append)((0, _Seq.collect)(function (uitem) {
      if (uitem.tag === 22) {
        return (0, _Seq.empty)();
      } else if (!ItemIsUnseen(ad$$77, g$$52, NameResolver$$get_amap(ncenv$$51), m$$118, uitem)) {
        return (0, _Seq.singleton)(uitem);
      } else {
        return (0, _Seq.empty)();
      }
    }, (0, _illib.Map$00602$002Eget_Values)(nenv$$83.eUnqualifiedItems)), (0, _Seq.delay)(function () {
      var $target$$219;

      switch (item$$53.tag) {
        case 18:
          $target$$219 = 0;
          break;

        case 14:
          $target$$219 = 1;
          break;

        case 3:
          $target$$219 = 2;
          break;

        case 13:
        case 12:
        case 11:
        case 22:
          $target$$219 = 3;
          break;

        default:
          $target$$219 = 4;
      }

      switch ($target$$219) {
        case 0:
          {
            const ilTyconNames$$4 = (0, _Set.ofList)((0, _List.choose)(function chooser$$16(tyconRef$$2) {
              if ((0, _tast.EntityRef$$get_IsILTycon)(tyconRef$$2)) {
                return (0, _tast.EntityRef$$get_DisplayName)(tyconRef$$2);
              } else {
                return null;
              }
            }, (0, _illib.LayeredMultiMap$00602$$get_Values)(NameResolutionEnv$$TyconsByAccessNames$$5B75656D(nenv$$83, new FullyQualifiedFlag(1, "OpenQualified")))), {
              Compare: _Util.comparePrimitives
            });
            return (0, _Seq.collect)(function (ns) {
              const demangledName$$5 = (0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(ns);
              return (((IsInterestingModuleName(demangledName$$5) ? notFakeContainerModule(ilTyconNames$$4, demangledName$$5) : false) ? EntityRefContainsSomethingAccessible(ncenv$$51, m$$118, ad$$77, ns) : false) ? !IsTyconUnseen(ad$$77, g$$52, NameResolver$$get_amap(ncenv$$51), m$$118, ns) : false) ? (0, _Seq.singleton)(ItemForModuleOrNamespaceRef(ns)) : (0, _Seq.empty)();
            }, (0, _illib.NameMultiMapModule$$$range)(NameResolutionEnv$$ModulesAndNamespaces$$5B75656D(nenv$$83, new FullyQualifiedFlag(1, "OpenQualified"))));
          }

        case 1:
          {
            return (0, _Seq.collect)(function (tcref$$86) {
              return ((!(0, _tast.EntityRef$$get_IsExceptionDecl)(tcref$$86) ? !((0, _tast.EntityRef$$get_LogicalName)(tcref$$86).indexOf(",") >= 0) : false) ? !IsTyconUnseen(ad$$77, g$$52, NameResolver$$get_amap(ncenv$$51), m$$118, tcref$$86) : false) ? (0, _Seq.singleton)(ItemOfTyconRef(ncenv$$51, m$$118, tcref$$86)) : (0, _Seq.empty)();
            }, (0, _illib.Map$00602$002Eget_Values)(NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D(nenv$$83, new FullyQualifiedFlag(1, "OpenQualified"))));
          }

        case 2:
          {
            return (0, _Seq.collect)(function (pitem) {
              if (pitem.tag === 3) {
                return (0, _Seq.singleton)(pitem);
              } else {
                return (0, _Seq.empty)();
              }
            }, (0, _illib.NameMapModule$$$range)(nenv$$83.ePatItems));
          }

        case 3:
          {
            return (0, _Seq.collect)(function (tcref$$87) {
              return !IsTyconUnseen(ad$$77, g$$52, NameResolver$$get_amap(ncenv$$51), m$$118, tcref$$87) ? InfosForTyconConstructors(ncenv$$51, m$$118, ad$$77, tcref$$87) : (0, _Seq.empty)();
            }, (0, _illib.Map$00602$002Eget_Values)(NameResolutionEnv$$TyconsByDemangledNameAndArity$$5B75656D(nenv$$83, new FullyQualifiedFlag(1, "OpenQualified"))));
          }

        case 4:
          {
            return (0, _Seq.empty)();
          }
      }
    })) : plid$$18.head === "global" ? GetCompletionForItem(ncenv$$51, nenv$$83, m$$118, ad$$77, plid$$18.tail, item$$53) : (0, _Seq.append)(PartialResolveLongIndentAsModuleOrNamespaceThenLazy(nenv$$83, (0, _Types.L)(plid$$18.head, (0, _Types.L)()), function (modref$$49) {
      return EntityRefContainsSomethingAccessible(ncenv$$51, m$$118, ad$$77, modref$$49) ? ResolvePartialLongIdentInModuleOrNamespaceForItem(ncenv$$51, nenv$$83, m$$118, ad$$77, modref$$49, plid$$18.tail, item$$53) : (0, _Seq.empty)();
    }), (0, _Seq.delay)(function () {
      const matchValue$$94 = (0, _Map.tryFind)(plid$$18.head, nenv$$83.eUnqualifiedItems);
      var $target$$220, x$$79;

      if (matchValue$$94 != null) {
        if (matchValue$$94.tag === 0) {
          $target$$220 = 0;
          x$$79 = matchValue$$94.fields[0];
        } else {
          $target$$220 = 1;
        }
      } else {
        $target$$220 = 1;
      }

      switch ($target$$220) {
        case 0:
          {
            const ty$$64 = (0, _tast.ValRef$$get_Type)(x$$79);
            const ty$$65 = ((0, _Util.equals)((0, _tast.ValRef$$get_BaseOrThisInfo)(x$$79), new _tast.ValBaseOrThisInfo(0, "CtorThisVal")) ? (0, _TastOps.isRefCellTy)(g$$52, ty$$64) : false) ? (0, _TastOps.destRefCellTy)(g$$52, ty$$64) : ty$$64;
            return ResolvePartialLongIdentInTypeForItem(ncenv$$51, nenv$$83, m$$118, ad$$77, false, plid$$18.tail, item$$53, ty$$65);
          }

        case 1:
          {
            return (0, _Seq.collect)(function (tcref$$88) {
              const tcref$$89 = ResolveNestedTypeThroughAbbreviation(ncenv$$51, tcref$$88, m$$118);
              const ty$$66 = FreshenTycon(ncenv$$51, m$$118, tcref$$89);
              return ResolvePartialLongIdentInTypeForItem(ncenv$$51, nenv$$83, m$$118, ad$$77, true, plid$$18.tail, item$$53, ty$$66);
            }, LookupTypeNameInEnvNoArity(new FullyQualifiedFlag(1, "OpenQualified"), plid$$18.head, nenv$$83));
          }
      }
    }));
  });
}

function IsItemResolvable(ncenv$$52, nenv$$84, m$$119, ad$$78, plid$$20, item$$54) {
  try {
    return function () {
      return (0, _Seq.exists)(function predicate$$115(arg20$0040$$4) {
        return ItemsAreEffectivelyEqual(NameResolver$$get_g(ncenv$$52), item$$54, arg20$0040$$4);
      }, GetCompletionForItem(ncenv$$52, nenv$$84, m$$119, ad$$78, plid$$20, item$$54));
    }();
  } catch (matchValue$$95) {
    if (matchValue$$95 instanceof _ErrorLogger.UnresolvedPathReferenceNoRange) {
      return false;
    } else {
      throw matchValue$$95;
    }
  }
}

function GetVisibleNamespacesAndModulesAtPoint(ncenv$$53, nenv$$85, m$$120, ad$$79) {
  try {
    return function () {
      const ilTyconNames$$5 = (0, _Set.ofList)((0, _List.choose)(function chooser$$17(tyconRef$$3) {
        if ((0, _tast.EntityRef$$get_IsILTycon)(tyconRef$$3)) {
          return (0, _tast.EntityRef$$get_DisplayName)(tyconRef$$3);
        } else {
          return null;
        }
      }, (0, _illib.LayeredMultiMap$00602$$get_Values)(NameResolutionEnv$$TyconsByAccessNames$$5B75656D(nenv$$85, new FullyQualifiedFlag(1, "OpenQualified")))), {
        Compare: _Util.comparePrimitives
      });
      return (0, _List.filter)(function predicate$$116(x$$80) {
        const demangledName$$6 = (0, _tast.EntityRef$$get_DemangledModuleOrNamespaceName)(x$$80);

        if ((IsInterestingModuleName(demangledName$$6) ? notFakeContainerModule(ilTyconNames$$5, demangledName$$6) : false) ? EntityRefContainsSomethingAccessible(ncenv$$53, m$$120, ad$$79, x$$80) : false) {
          return !IsTyconUnseen(ad$$79, NameResolver$$get_g(ncenv$$53), NameResolver$$get_amap(ncenv$$53), m$$120, x$$80);
        } else {
          return false;
        }
      }, (0, _illib.NameMultiMapModule$$$range)(NameResolutionEnv$$ModulesAndNamespaces$$5B75656D(nenv$$85, new FullyQualifiedFlag(1, "OpenQualified"))));
    }();
  } catch (matchValue$$96) {
    if (matchValue$$96 instanceof _ErrorLogger.UnresolvedPathReferenceNoRange) {
      return (0, _Types.L)();
    } else {
      throw matchValue$$96;
    }
  }
}