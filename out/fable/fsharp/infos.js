"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportILType = ImportILType;
exports.CanImportILType = CanImportILType;
exports.isExnDeclTy = isExnDeclTy;
exports.GetSuperTypeOfType = GetSuperTypeOfType;
exports.mkSystemCollectionsGenericIListTy = mkSystemCollectionsGenericIListTy;
exports.GetImmediateInterfacesOfType = GetImmediateInterfacesOfType;
exports.FoldPrimaryHierarchyOfType = FoldPrimaryHierarchyOfType;
exports.FoldEntireHierarchyOfType = FoldEntireHierarchyOfType;
exports.IterateEntireHierarchyOfType = IterateEntireHierarchyOfType;
exports.ExistsInEntireHierarchyOfType = ExistsInEntireHierarchyOfType;
exports.SearchEntireHierarchyOfType = SearchEntireHierarchyOfType;
exports.AllSuperTypesOfType = AllSuperTypesOfType;
exports.AllInterfacesOfType = AllInterfacesOfType;
exports.HaveSameHeadType = HaveSameHeadType;
exports.HasHeadType = HasHeadType;
exports.ExistsSameHeadTypeInHierarchy = ExistsSameHeadTypeInHierarchy;
exports.ExistsHeadTypeInEntireHierarchy = ExistsHeadTypeInEntireHierarchy;
exports.ImportILTypeFromMetadata = ImportILTypeFromMetadata;
exports.ImportReturnTypeFromMetaData = ImportReturnTypeFromMetaData;
exports.CopyTyparConstraints = CopyTyparConstraints;
exports.FixupNewTypars = FixupNewTypars;
exports.ValRef$002EIsFSharpEventProperty$$2AE8EA0C = ValRef$002EIsFSharpEventProperty$$2AE8EA0C;
exports.ValRef$002Eget_IsVirtualMember = ValRef$002Eget_IsVirtualMember;
exports.ValRef$002Eget_IsDispatchSlotMember = ValRef$002Eget_IsDispatchSlotMember;
exports.ValRef$002Eget_IsDefiniteFSharpOverrideMember = ValRef$002Eget_IsDefiniteFSharpOverrideMember;
exports.ValRef$002EIsFSharpExplicitInterfaceImplementation$$2AE8EA0C = ValRef$002EIsFSharpExplicitInterfaceImplementation$$2AE8EA0C;
exports.ValRef$002Eget_ImplementedSlotSignatures = ValRef$002Eget_ImplementedSlotSignatures;
exports.ReparentSlotSigToUseMethodTypars = ReparentSlotSigToUseMethodTypars;
exports.MakeSlotParam = MakeSlotParam;
exports.MakeSlotSig = MakeSlotSig;
exports.OptionalArgInfo$$get_IsOptional = OptionalArgInfo$$get_IsOptional;
exports.OptionalArgInfo$$$FromILParameter = OptionalArgInfo$$$FromILParameter;
exports.OptionalArgInfo$$$ValueOfDefaultParameterValueAttrib$$Z49F0139A = OptionalArgInfo$$$ValueOfDefaultParameterValueAttrib$$Z49F0139A;
exports.OptionalArgInfo$$$FieldInitForDefaultParameterValueAttrib$$Z49F0139A = OptionalArgInfo$$$FieldInitForDefaultParameterValueAttrib$$Z49F0139A;
exports.ReflectedArgInfo$$get_AutoQuote = ReflectedArgInfo$$get_AutoQuote;
exports.ParamNameAndType$$$FromArgInfo$$Z2D9B2ABD = ParamNameAndType$$$FromArgInfo$$Z2D9B2ABD;
exports.ParamNameAndType$$$FromMember = ParamNameAndType$$$FromMember;
exports.ParamNameAndType$$$Instantiate = ParamNameAndType$$$Instantiate;
exports.ParamNameAndType$$$InstantiateCurried = ParamNameAndType$$$InstantiateCurried;
exports.ILTypeInfo$$get_TcGlobals = ILTypeInfo$$get_TcGlobals;
exports.ILTypeInfo$$get_ILTypeRef = ILTypeInfo$$get_ILTypeRef;
exports.ILTypeInfo$$get_RawMetadata = ILTypeInfo$$get_RawMetadata;
exports.ILTypeInfo$$get_ToType = ILTypeInfo$$get_ToType;
exports.ILTypeInfo$$get_ToAppType = ILTypeInfo$$get_ToAppType;
exports.ILTypeInfo$$get_TyconRefOfRawMetadata = ILTypeInfo$$get_TyconRefOfRawMetadata;
exports.ILTypeInfo$$get_TypeInstOfRawMetadata = ILTypeInfo$$get_TypeInstOfRawMetadata;
exports.ILTypeInfo$$get_ILScopeRef = ILTypeInfo$$get_ILScopeRef;
exports.ILTypeInfo$$get_Name = ILTypeInfo$$get_Name;
exports.ILTypeInfo$$get_IsValueType = ILTypeInfo$$get_IsValueType;
exports.ILTypeInfo$$Instantiate$$Z794F4A39 = ILTypeInfo$$Instantiate$$Z794F4A39;
exports.ILTypeInfo$$$FromType = ILTypeInfo$$$FromType;
exports.ILMethInfo$$get_TcGlobals = ILMethInfo$$get_TcGlobals;
exports.ILMethInfo$$get_ApparentEnclosingType = ILMethInfo$$get_ApparentEnclosingType;
exports.ILMethInfo$$get_ApparentEnclosingAppType = ILMethInfo$$get_ApparentEnclosingAppType;
exports.ILMethInfo$$get_ILExtensionMethodDeclaringTyconRef = ILMethInfo$$get_ILExtensionMethodDeclaringTyconRef;
exports.ILMethInfo$$get_RawMetadata = ILMethInfo$$get_RawMetadata;
exports.ILMethInfo$$get_FormalMethodTypars = ILMethInfo$$get_FormalMethodTypars;
exports.ILMethInfo$$get_ILName = ILMethInfo$$get_ILName;
exports.ILMethInfo$$get_IsILExtensionMethod = ILMethInfo$$get_IsILExtensionMethod;
exports.ILMethInfo$$get_DeclaringTyconRef = ILMethInfo$$get_DeclaringTyconRef;
exports.ILMethInfo$$get_DeclaringTypeInst = ILMethInfo$$get_DeclaringTypeInst;
exports.ILMethInfo$$get_MetadataScope = ILMethInfo$$get_MetadataScope;
exports.ILMethInfo$$get_ParamMetadata = ILMethInfo$$get_ParamMetadata;
exports.ILMethInfo$$get_NumParams = ILMethInfo$$get_NumParams;
exports.ILMethInfo$$get_IsConstructor = ILMethInfo$$get_IsConstructor;
exports.ILMethInfo$$get_IsClassConstructor = ILMethInfo$$get_IsClassConstructor;
exports.ILMethInfo$$get_IsProtectedAccessibility = ILMethInfo$$get_IsProtectedAccessibility;
exports.ILMethInfo$$get_IsVirtual = ILMethInfo$$get_IsVirtual;
exports.ILMethInfo$$get_IsFinal = ILMethInfo$$get_IsFinal;
exports.ILMethInfo$$get_IsAbstract = ILMethInfo$$get_IsAbstract;
exports.ILMethInfo$$get_IsStatic = ILMethInfo$$get_IsStatic;
exports.ILMethInfo$$get_IsNewSlot = ILMethInfo$$get_IsNewSlot;
exports.ILMethInfo$$get_IsInstance = ILMethInfo$$get_IsInstance;
exports.ILMethInfo$$GetParamTypes$$Z5D984B3C = ILMethInfo$$GetParamTypes$$Z5D984B3C;
exports.ILMethInfo$$GetRawArgTypes$$Z5D984B3C = ILMethInfo$$GetRawArgTypes$$Z5D984B3C;
exports.ILMethInfo$$GetParamNamesAndTypes$$Z5D984B3C = ILMethInfo$$GetParamNamesAndTypes$$Z5D984B3C;
exports.ILMethInfo$$get_ILMethodRef = ILMethInfo$$get_ILMethodRef;
exports.ILMethInfo$$IsDllImport$$2AE8EA0C = ILMethInfo$$IsDllImport$$2AE8EA0C;
exports.ILMethInfo$$GetObjArgTypes$$Z5D984B3C = ILMethInfo$$GetObjArgTypes$$Z5D984B3C;
exports.ILMethInfo$$GetCompiledReturnTy$$Z5D984B3C = ILMethInfo$$GetCompiledReturnTy$$Z5D984B3C;
exports.ILMethInfo$$GetFSharpReturnTy$$Z5D984B3C = ILMethInfo$$GetFSharpReturnTy$$Z5D984B3C;
exports.MethInfo$$get_ApparentEnclosingType = MethInfo$$get_ApparentEnclosingType;
exports.MethInfo$$get_ApparentEnclosingAppType = MethInfo$$get_ApparentEnclosingAppType;
exports.MethInfo$$get_ApparentEnclosingTyconRef = MethInfo$$get_ApparentEnclosingTyconRef;
exports.MethInfo$$get_DeclaringTyconRef = MethInfo$$get_DeclaringTyconRef;
exports.MethInfo$$get_ProvidedStaticParameterInfo = MethInfo$$get_ProvidedStaticParameterInfo;
exports.MethInfo$$get_ExtensionMemberPriorityOption = MethInfo$$get_ExtensionMemberPriorityOption;
exports.MethInfo$$get_ExtensionMemberPriority = MethInfo$$get_ExtensionMemberPriority;
exports.MethInfo$$get_LogicalName = MethInfo$$get_LogicalName;
exports.MethInfo$$get_DisplayName = MethInfo$$get_DisplayName;
exports.MethInfo$$get_HasDirectXmlComment = MethInfo$$get_HasDirectXmlComment;
exports.MethInfo$$get_DeclaringTypeInst = MethInfo$$get_DeclaringTypeInst;
exports.MethInfo$$get_TcGlobals = MethInfo$$get_TcGlobals;
exports.MethInfo$$get_FormalMethodTypars = MethInfo$$get_FormalMethodTypars;
exports.MethInfo$$get_FormalMethodInst = MethInfo$$get_FormalMethodInst;
exports.MethInfo$$get_FormalMethodTyparInst = MethInfo$$get_FormalMethodTyparInst;
exports.MethInfo$$get_XmlDoc = MethInfo$$get_XmlDoc;
exports.MethInfo$$get_ArbitraryValRef = MethInfo$$get_ArbitraryValRef;
exports.MethInfo$$get_NumArgs = MethInfo$$get_NumArgs;
exports.MethInfo$$get_IsCurried = MethInfo$$get_IsCurried;
exports.MethInfo$$get_IsInstance = MethInfo$$get_IsInstance;
exports.MethInfo$$get_GenericArity = MethInfo$$get_GenericArity;
exports.MethInfo$$get_IsProtectedAccessiblity = MethInfo$$get_IsProtectedAccessiblity;
exports.MethInfo$$get_IsVirtual = MethInfo$$get_IsVirtual;
exports.MethInfo$$get_IsConstructor = MethInfo$$get_IsConstructor;
exports.MethInfo$$get_IsClassConstructor = MethInfo$$get_IsClassConstructor;
exports.MethInfo$$get_IsDispatchSlot = MethInfo$$get_IsDispatchSlot;
exports.MethInfo$$get_IsFinal = MethInfo$$get_IsFinal;
exports.MethInfo$$get_IsAbstract = MethInfo$$get_IsAbstract;
exports.MethInfo$$get_IsNewSlot = MethInfo$$get_IsNewSlot;
exports.MethInfo$$get_IsFSharpExplicitInterfaceImplementation = MethInfo$$get_IsFSharpExplicitInterfaceImplementation;
exports.MethInfo$$get_IsDefiniteFSharpOverride = MethInfo$$get_IsDefiniteFSharpOverride;
exports.MethInfo$$get_ImplementedSlotSignatures = MethInfo$$get_ImplementedSlotSignatures;
exports.MethInfo$$get_IsExtensionMember = MethInfo$$get_IsExtensionMember;
exports.MethInfo$$ObjArgNeedsAddress$$73F6E43C = MethInfo$$ObjArgNeedsAddress$$73F6E43C;
exports.MethInfo$$get_IsFSharpStyleExtensionMember = MethInfo$$get_IsFSharpStyleExtensionMember;
exports.MethInfo$$get_IsCSharpStyleExtensionMember = MethInfo$$get_IsCSharpStyleExtensionMember;
exports.MethInfo$$AdjustUserTypeInstForFSharpStyleIndexedExtensionMembers$$50B4DF78 = MethInfo$$AdjustUserTypeInstForFSharpStyleIndexedExtensionMembers$$50B4DF78;
exports.MethInfo$$get_IsFSharpEventPropertyMethod = MethInfo$$get_IsFSharpEventPropertyMethod;
exports.MethInfo$$get_IsNullary = MethInfo$$get_IsNullary;
exports.MethInfo$$get_IsStruct = MethInfo$$get_IsStruct;
exports.MethInfo$$$CreateILMeth$$Z136523CF = MethInfo$$$CreateILMeth$$Z136523CF;
exports.MethInfo$$$CreateILExtensionMeth$$Z447F6EC6 = MethInfo$$$CreateILExtensionMeth$$Z447F6EC6;
exports.MethInfo$$$MethInfosUseIdenticalDefinitions = MethInfo$$$MethInfosUseIdenticalDefinitions;
exports.MethInfo$$ComputeHashCode = MethInfo$$ComputeHashCode;
exports.MethInfo$$Instantiate$$7463DE7B = MethInfo$$Instantiate$$7463DE7B;
exports.MethInfo$$GetCompiledReturnTy$$Z5D984B3C = MethInfo$$GetCompiledReturnTy$$Z5D984B3C;
exports.MethInfo$$GetFSharpReturnTy$$Z5D984B3C = MethInfo$$GetFSharpReturnTy$$Z5D984B3C;
exports.MethInfo$$GetParamTypes$$Z5D984B3C = MethInfo$$GetParamTypes$$Z5D984B3C;
exports.MethInfo$$GetObjArgTypes$$Z5D984B3C = MethInfo$$GetObjArgTypes$$Z5D984B3C;
exports.MethInfo$$GetParamAttribs$$73F6E43C = MethInfo$$GetParamAttribs$$73F6E43C;
exports.MethInfo$$GetSlotSig$$73F6E43C = MethInfo$$GetSlotSig$$73F6E43C;
exports.MethInfo$$GetParamDatas$$Z5D984B3C = MethInfo$$GetParamDatas$$Z5D984B3C;
exports.MethInfo$$HasParamArrayArg$$Z5D984B3C = MethInfo$$HasParamArrayArg$$Z5D984B3C;
exports.MethInfo$$GetFormalTyparsOfDeclaringType$$4DB9192C = MethInfo$$GetFormalTyparsOfDeclaringType$$4DB9192C;
exports.ILFieldInfo$$get_ApparentEnclosingType = ILFieldInfo$$get_ApparentEnclosingType;
exports.ILFieldInfo$$get_ApparentEnclosingAppType = ILFieldInfo$$get_ApparentEnclosingAppType;
exports.ILFieldInfo$$get_ApparentEnclosingTyconRef = ILFieldInfo$$get_ApparentEnclosingTyconRef;
exports.ILFieldInfo$$get_DeclaringTyconRef = ILFieldInfo$$get_DeclaringTyconRef;
exports.ILFieldInfo$$get_TcGlobals = ILFieldInfo$$get_TcGlobals;
exports.ILFieldInfo$$get_ILTypeRef = ILFieldInfo$$get_ILTypeRef;
exports.ILFieldInfo$$get_ScopeRef = ILFieldInfo$$get_ScopeRef;
exports.ILFieldInfo$$get_TypeInst = ILFieldInfo$$get_TypeInst;
exports.ILFieldInfo$$get_FieldName = ILFieldInfo$$get_FieldName;
exports.ILFieldInfo$$get_IsInitOnly = ILFieldInfo$$get_IsInitOnly;
exports.ILFieldInfo$$get_IsValueType = ILFieldInfo$$get_IsValueType;
exports.ILFieldInfo$$get_IsStatic = ILFieldInfo$$get_IsStatic;
exports.ILFieldInfo$$get_IsSpecialName = ILFieldInfo$$get_IsSpecialName;
exports.ILFieldInfo$$get_LiteralValue = ILFieldInfo$$get_LiteralValue;
exports.ILFieldInfo$$get_ILFieldType = ILFieldInfo$$get_ILFieldType;
exports.ILFieldInfo$$FieldType$$73F6E43C = ILFieldInfo$$FieldType$$73F6E43C;
exports.ILFieldInfo$$$ILFieldInfosUseIdenticalDefinitions = ILFieldInfo$$$ILFieldInfosUseIdenticalDefinitions;
exports.ILFieldInfo$$get_ILFieldRef = ILFieldInfo$$get_ILFieldRef;
exports.ILFieldInfo$$ComputeHashCode = ILFieldInfo$$ComputeHashCode;
exports.RecdFieldInfo$$get_TypeInst = RecdFieldInfo$$get_TypeInst;
exports.RecdFieldInfo$$get_RecdFieldRef = RecdFieldInfo$$get_RecdFieldRef;
exports.RecdFieldInfo$$get_RecdField = RecdFieldInfo$$get_RecdField;
exports.RecdFieldInfo$$get_IsStatic = RecdFieldInfo$$get_IsStatic;
exports.RecdFieldInfo$$get_LiteralValue = RecdFieldInfo$$get_LiteralValue;
exports.RecdFieldInfo$$get_TyconRef = RecdFieldInfo$$get_TyconRef;
exports.RecdFieldInfo$$get_Tycon = RecdFieldInfo$$get_Tycon;
exports.RecdFieldInfo$$get_Name = RecdFieldInfo$$get_Name;
exports.RecdFieldInfo$$get_FieldType = RecdFieldInfo$$get_FieldType;
exports.RecdFieldInfo$$get_DeclaringType = RecdFieldInfo$$get_DeclaringType;
exports.UnionCaseInfo$$get_TypeInst = UnionCaseInfo$$get_TypeInst;
exports.UnionCaseInfo$$get_UnionCaseRef = UnionCaseInfo$$get_UnionCaseRef;
exports.UnionCaseInfo$$get_UnionCase = UnionCaseInfo$$get_UnionCase;
exports.UnionCaseInfo$$get_TyconRef = UnionCaseInfo$$get_TyconRef;
exports.UnionCaseInfo$$get_Tycon = UnionCaseInfo$$get_Tycon;
exports.UnionCaseInfo$$get_Name = UnionCaseInfo$$get_Name;
exports.UnionCaseInfo$$GetTyparInst$$4DB9192C = UnionCaseInfo$$GetTyparInst$$4DB9192C;
exports.ILPropInfo$$get_TcGlobals = ILPropInfo$$get_TcGlobals;
exports.ILPropInfo$$get_ILTypeInfo = ILPropInfo$$get_ILTypeInfo;
exports.ILPropInfo$$get_ApparentEnclosingType = ILPropInfo$$get_ApparentEnclosingType;
exports.ILPropInfo$$get_ApparentEnclosingAppType = ILPropInfo$$get_ApparentEnclosingAppType;
exports.ILPropInfo$$get_RawMetadata = ILPropInfo$$get_RawMetadata;
exports.ILPropInfo$$get_PropertyName = ILPropInfo$$get_PropertyName;
exports.ILPropInfo$$get_GetterMethod = ILPropInfo$$get_GetterMethod;
exports.ILPropInfo$$get_SetterMethod = ILPropInfo$$get_SetterMethod;
exports.ILPropInfo$$get_HasGetter = ILPropInfo$$get_HasGetter;
exports.ILPropInfo$$get_HasSetter = ILPropInfo$$get_HasSetter;
exports.ILPropInfo$$get_IsStatic = ILPropInfo$$get_IsStatic;
exports.ILPropInfo$$get_IsVirtual = ILPropInfo$$get_IsVirtual;
exports.ILPropInfo$$get_IsNewSlot = ILPropInfo$$get_IsNewSlot;
exports.ILPropInfo$$GetParamNamesAndTypes$$73F6E43C = ILPropInfo$$GetParamNamesAndTypes$$73F6E43C;
exports.ILPropInfo$$GetParamTypes$$73F6E43C = ILPropInfo$$GetParamTypes$$73F6E43C;
exports.ILPropInfo$$GetPropertyType$$73F6E43C = ILPropInfo$$GetPropertyType$$73F6E43C;
exports.PropInfo$$get_ApparentEnclosingType = PropInfo$$get_ApparentEnclosingType;
exports.PropInfo$$get_ApparentEnclosingAppType = PropInfo$$get_ApparentEnclosingAppType;
exports.PropInfo$$get_ApparentEnclosingTyconRef = PropInfo$$get_ApparentEnclosingTyconRef;
exports.PropInfo$$get_DeclaringTyconRef = PropInfo$$get_DeclaringTyconRef;
exports.PropInfo$$get_ArbitraryValRef = PropInfo$$get_ArbitraryValRef;
exports.PropInfo$$get_HasDirectXmlComment = PropInfo$$get_HasDirectXmlComment;
exports.PropInfo$$get_PropertyName = PropInfo$$get_PropertyName;
exports.PropInfo$$get_HasGetter = PropInfo$$get_HasGetter;
exports.PropInfo$$get_HasSetter = PropInfo$$get_HasSetter;
exports.PropInfo$$get_IsExtensionMember = PropInfo$$get_IsExtensionMember;
exports.PropInfo$$get_IsVirtualProperty = PropInfo$$get_IsVirtualProperty;
exports.PropInfo$$get_IsNewSlot = PropInfo$$get_IsNewSlot;
exports.PropInfo$$get_IsDispatchSlot = PropInfo$$get_IsDispatchSlot;
exports.PropInfo$$get_IsStatic = PropInfo$$get_IsStatic;
exports.PropInfo$$get_IsDefiniteFSharpOverride = PropInfo$$get_IsDefiniteFSharpOverride;
exports.PropInfo$$get_ImplementedSlotSignatures = PropInfo$$get_ImplementedSlotSignatures;
exports.PropInfo$$get_IsFSharpExplicitInterfaceImplementation = PropInfo$$get_IsFSharpExplicitInterfaceImplementation;
exports.PropInfo$$get_IsIndexer = PropInfo$$get_IsIndexer;
exports.PropInfo$$get_IsFSharpEventProperty = PropInfo$$get_IsFSharpEventProperty;
exports.PropInfo$$get_DropSetter = PropInfo$$get_DropSetter;
exports.PropInfo$$get_DropGetter = PropInfo$$get_DropGetter;
exports.PropInfo$$get_XmlDoc = PropInfo$$get_XmlDoc;
exports.PropInfo$$get_TcGlobals = PropInfo$$get_TcGlobals;
exports.PropInfo$$get_IsValueType = PropInfo$$get_IsValueType;
exports.PropInfo$$GetPropertyType$$73F6E43C = PropInfo$$GetPropertyType$$73F6E43C;
exports.PropInfo$$GetParamNamesAndTypes$$73F6E43C = PropInfo$$GetParamNamesAndTypes$$73F6E43C;
exports.PropInfo$$GetParamDatas$$73F6E43C = PropInfo$$GetParamDatas$$73F6E43C;
exports.PropInfo$$GetParamTypes$$73F6E43C = PropInfo$$GetParamTypes$$73F6E43C;
exports.PropInfo$$get_GetterMethod = PropInfo$$get_GetterMethod;
exports.PropInfo$$get_SetterMethod = PropInfo$$get_SetterMethod;
exports.PropInfo$$$PropInfosUseIdenticalDefinitions = PropInfo$$$PropInfosUseIdenticalDefinitions;
exports.PropInfo$$ComputeHashCode = PropInfo$$ComputeHashCode;
exports.ILEventInfo$$get_ApparentEnclosingType = ILEventInfo$$get_ApparentEnclosingType;
exports.ILEventInfo$$get_ApparentEnclosingAppType = ILEventInfo$$get_ApparentEnclosingAppType;
exports.ILEventInfo$$get_DeclaringTyconRef = ILEventInfo$$get_DeclaringTyconRef;
exports.ILEventInfo$$get_TcGlobals = ILEventInfo$$get_TcGlobals;
exports.ILEventInfo$$get_RawMetadata = ILEventInfo$$get_RawMetadata;
exports.ILEventInfo$$get_ILTypeInfo = ILEventInfo$$get_ILTypeInfo;
exports.ILEventInfo$$get_AddMethod = ILEventInfo$$get_AddMethod;
exports.ILEventInfo$$get_RemoveMethod = ILEventInfo$$get_RemoveMethod;
exports.ILEventInfo$$get_TypeRef = ILEventInfo$$get_TypeRef;
exports.ILEventInfo$$get_Name = ILEventInfo$$get_Name;
exports.ILEventInfo$$get_IsStatic = ILEventInfo$$get_IsStatic;
exports.nonStandardEventError = nonStandardEventError;
exports.FindDelegateTypeOfPropertyEvent = FindDelegateTypeOfPropertyEvent;
exports.EventInfo$$get_ApparentEnclosingType = EventInfo$$get_ApparentEnclosingType;
exports.EventInfo$$get_ApparentEnclosingAppType = EventInfo$$get_ApparentEnclosingAppType;
exports.EventInfo$$get_ApparentEnclosingTyconRef = EventInfo$$get_ApparentEnclosingTyconRef;
exports.EventInfo$$get_DeclaringTyconRef = EventInfo$$get_DeclaringTyconRef;
exports.EventInfo$$get_HasDirectXmlComment = EventInfo$$get_HasDirectXmlComment;
exports.EventInfo$$get_XmlDoc = EventInfo$$get_XmlDoc;
exports.EventInfo$$get_EventName = EventInfo$$get_EventName;
exports.EventInfo$$get_IsStatic = EventInfo$$get_IsStatic;
exports.EventInfo$$get_IsExtensionMember = EventInfo$$get_IsExtensionMember;
exports.EventInfo$$get_TcGlobals = EventInfo$$get_TcGlobals;
exports.EventInfo$$get_IsValueType = EventInfo$$get_IsValueType;
exports.EventInfo$$get_AddMethod = EventInfo$$get_AddMethod;
exports.EventInfo$$get_RemoveMethod = EventInfo$$get_RemoveMethod;
exports.EventInfo$$get_ArbitraryValRef = EventInfo$$get_ArbitraryValRef;
exports.EventInfo$$GetDelegateType$$73F6E43C = EventInfo$$GetDelegateType$$73F6E43C;
exports.EventInfo$$$EventInfosUseIdenticalDefintions = EventInfo$$$EventInfosUseIdenticalDefintions;
exports.EventInfo$$ComputeHashCode = EventInfo$$ComputeHashCode;
exports.CompiledSigOfMeth = CompiledSigOfMeth;
exports.MethInfosEquivByNameAndPartialSig = MethInfosEquivByNameAndPartialSig;
exports.PropInfosEquivByNameAndPartialSig = PropInfosEquivByNameAndPartialSig;
exports.MethInfosEquivByNameAndSig = MethInfosEquivByNameAndSig;
exports.PropInfosEquivByNameAndSig = PropInfosEquivByNameAndSig;
exports.SettersOfPropInfos = SettersOfPropInfos;
exports.GettersOfPropInfos = GettersOfPropInfos;
exports.CompiledSig = exports.EventInfo = exports.BadEventTransformation = exports.ILEventInfo = exports.PropInfo = exports.ILPropInfo = exports.UnionCaseInfo = exports.RecdFieldInfo = exports.ILFieldInfo = exports.MethInfo = exports.ILMethInfo = exports.ILTypeInfo = exports.ParamData = exports.ParamNameAndType = exports.ReflectedArgInfo = exports.CallerInfo = exports.OptionalArgInfo = exports.OptionalArgCallerSideValue = exports.AllowMultiIntfInstantiations = exports.SkipUnrefInterfaces = void 0;

var _il = require("../absil/il");

var _import = require("./import");

var _TastOps = require("./TastOps");

var _tast = require("./tast");

var _TcGlobals = require("./TcGlobals");

var _Types = require("../fable-core.2.0.3/Types");

var _Seq = require("../fable-core.2.0.3/Seq");

var _List = require("../fable-core.2.0.3/List");

var _Util = require("../fable-core.2.0.3/Util");

var _Set = require("../fable-core.2.0.3/Set");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _Option = require("../fable-core.2.0.3/Option");

var _Long = require("../fable-core.2.0.3/Long");

var _lib = require("./lib");

var _ast = require("./ast");

var _String = require("../fable-core.2.0.3/String");

var _illib = require("../absil/illib");

function ImportILType(scoref, amap, m, importInst, ilty) {
  return (0, _import.ImportILType)(amap, m, importInst, (0, _il.rescopeILType)(scoref, ilty));
}

function CanImportILType(scoref$$1, amap$$1, m$$1, ilty$$1) {
  return (0, _import.CanImportILType)(amap$$1, m$$1, (0, _il.rescopeILType)(scoref$$1, ilty$$1));
}

function isExnDeclTy(g, ty) {
  if ((0, _TastOps.isAppTy)(g, ty)) {
    return (0, _tast.EntityRef$$get_IsExceptionDecl)((0, _TastOps.tcrefOfAppTy)(g, ty));
  } else {
    return false;
  }
}

function GetSuperTypeOfType(g$$1, amap$$2, m$$2, ty$$1) {
  const ty$$2 = (0, _TastOps.stripTyEqnsAndMeasureEqns)(g$$1, ty$$1);
  const matchValue = (0, _TastOps.metadataOfTy)(g$$1, ty$$2);

  if (matchValue.tag === 1) {
    if ((0, _TastOps.isFSharpObjModelTy)(g$$1, ty$$2) ? true : isExnDeclTy(g$$1, ty$$2)) {
      const patternInput$$1 = (0, _TastOps.destAppTy)(g$$1, ty$$2);
      return (0, _TastOps.instType)((0, _TastOps.mkInstForAppTy)(g$$1, ty$$2), (0, _TastOps.superOfTycon)(g$$1, (0, _tast.EntityRef$$get_Deref)(patternInput$$1[0])));
    } else if ((0, _TastOps.isArrayTy)(g$$1, ty$$2)) {
      return (0, _TcGlobals.TcGlobals$$get_system_Array_ty)(g$$1);
    } else if ((0, _TastOps.isRefTy)(g$$1, ty$$2) ? !(0, _TastOps.isObjTy)(g$$1, ty$$2) : false) {
      return (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$1);
    } else if ((0, _TastOps.isStructTupleTy)(g$$1, ty$$2)) {
      return (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$1);
    } else if ((0, _TastOps.isFSharpStructOrEnumTy)(g$$1, ty$$2)) {
      if ((0, _TastOps.isFSharpEnumTy)(g$$1, ty$$2)) {
        return (0, _TcGlobals.TcGlobals$$get_system_Enum_ty)(g$$1);
      } else {
        return (0, _TcGlobals.TcGlobals$$get_system_Value_ty)(g$$1);
      }
    } else if ((0, _TastOps.isRecdTy)(g$$1, ty$$2) ? true : (0, _TastOps.isUnionTy)(g$$1, ty$$2)) {
      return (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$1);
    } else {
      return null;
    }
  } else {
    const tdef = matchValue.fields[0].fields[2];
    const scoref$$2 = matchValue.fields[0].fields[0];
    const patternInput = (0, _TastOps.destAppTy)(g$$1, ty$$2);
    const matchValue$$1 = (0, _il.ILTypeDef$$get_Extends)(tdef);

    if (matchValue$$1 != null) {
      const ilty$$2 = matchValue$$1;
      return ImportILType(scoref$$2, amap$$2, m$$2, patternInput[1], ilty$$2);
    } else {
      return null;
    }
  }
}

function mkSystemCollectionsGenericIListTy(g$$2, ty$$3) {
  return new _tast.TType(1, "TType_app", (0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_Generic_IList)(g$$2), (0, _Types.L)(ty$$3, (0, _Types.L)()));
}

const SkipUnrefInterfaces = (0, _Types.declare)(function SkipUnrefInterfaces(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SkipUnrefInterfaces = SkipUnrefInterfaces;

function GetImmediateInterfacesOfType(skipUnref, g$$3, amap$$3, m$$3, ty$$4) {
  let itys;

  if ((0, _TastOps.isAppTy)(g$$3, ty$$4)) {
    const patternInput$$2 = (0, _TastOps.destAppTy)(g$$3, ty$$4);

    if ((0, _tast.EntityRef$$get_IsMeasureableReprTycon)(patternInput$$2[0])) {
      itys = (0, _List.ofSeq)((0, _Seq.delay)(function () {
        var matchValue$$2, reprTy;
        return (0, _Seq.append)((matchValue$$2 = (0, _tast.EntityRef$$get_TypeReprInfo)(patternInput$$2[0]), matchValue$$2.tag === 5 ? (reprTy = matchValue$$2.fields[0], (0, _Seq.collect)(function (ity) {
          if ((0, _TastOps.isAppTy)(g$$3, ity)) {
            const itcref = (0, _TastOps.tcrefOfAppTy)(g$$3, ity);
            return (!(0, _TastOps.tyconRefEq)(g$$3, itcref, (0, _TcGlobals.TcGlobals$$get_system_GenericIComparable_tcref)(g$$3)) ? !(0, _TastOps.tyconRefEq)(g$$3, itcref, (0, _TcGlobals.TcGlobals$$get_system_GenericIEquatable_tcref)(g$$3)) : false) ? (0, _Seq.singleton)(ity) : (0, _Seq.empty)();
          } else {
            return (0, _Seq.empty)();
          }
        }, GetImmediateInterfacesOfType(skipUnref, g$$3, amap$$3, m$$3, reprTy))) : (null, (0, _Seq.empty)())), (0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Seq.singleton)((0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_system_GenericIComparable_tcref)(g$$3), (0, _Types.L)(ty$$4, (0, _Types.L)()))), (0, _Seq.delay)(function () {
            return (0, _Seq.singleton)((0, _TastOps.mkAppTy)((0, _TcGlobals.TcGlobals$$get_system_GenericIEquatable_tcref)(g$$3), (0, _Types.L)(ty$$4, (0, _Types.L)())));
          }));
        }));
      }));
    } else {
      const matchValue$$3 = (0, _TastOps.metadataOfTy)(g$$3, ty$$4);

      if (matchValue$$3.tag === 1) {
        itys = (0, _List.map)(function mapping(arg10$0040$$2) {
          return (0, _TastOps.instType)((0, _TastOps.mkInstForAppTy)(g$$3, ty$$4), arg10$0040$$2);
        }, (0, _tast.EntityRef$$get_ImmediateInterfaceTypesOfFSharpTycon)(patternInput$$2[0]));
      } else {
        const tdef$$1 = matchValue$$3.fields[0].fields[2];
        const scoref$$3 = matchValue$$3.fields[0].fields[0];
        itys = (0, _List.choose)(function chooser(ity$$1) {
          if ((0, _Util.equals)(skipUnref, new SkipUnrefInterfaces(1, "No")) ? true : CanImportILType(scoref$$3, amap$$3, m$$3, ity$$1)) {
            return ImportILType(scoref$$3, amap$$3, m$$3, patternInput$$2[1], ity$$1);
          } else {
            return null;
          }
        }, (0, _il.ILTypeDef$$get_Implements)(tdef$$1));
      }
    }
  } else {
    itys = (0, _Types.L)();
  }

  const itys$$1 = (0, _TastOps.isArray1DTy)(g$$3, ty$$4) ? (0, _Types.L)(mkSystemCollectionsGenericIListTy(g$$3, (0, _TastOps.destArrayTy)(g$$3, ty$$4)), itys) : itys;
  return itys$$1;
}

const AllowMultiIntfInstantiations = (0, _Types.declare)(function AllowMultiIntfInstantiations(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AllowMultiIntfInstantiations = AllowMultiIntfInstantiations;

function FoldHierarchyOfTypeAux(followInterfaces, allowMultiIntfInst, skipUnref$$1, visitor, g$$4, amap$$4, m$$4, ty$$5, acc) {
  const loop = function loop(ndeep, ty$$6, _arg1) {
    const state = _arg1;
    const visitedTycon = state[0];
    const visited = state[1];
    const acc$$1 = state[2];
    const seenThisTycon = (0, _TastOps.isAppTy)(g$$4, ty$$6) ? (0, _Set.contains)((0, _tast.EntityRef$$get_Stamp)((0, _TastOps.tcrefOfAppTy)(g$$4, ty$$6)), visitedTycon) : false;

    if (seenThisTycon ? (0, _List.exists)(function (arg20$0040$$1) {
      return (0, _TastOps.typeEquiv)(g$$4, ty$$6, arg20$0040$$1);
    }, (0, _TastOps.TyconRefMultiMap$00601$$Find$$Z788D4AAC)(visited, (0, _TastOps.tcrefOfAppTy)(g$$4, ty$$6))) : false) {
      return state;
    } else if (seenThisTycon ? (0, _Util.equals)(allowMultiIntfInst, new AllowMultiIntfInstantiations(1, "No")) : false) {
      return state;
    } else {
      let state$$1;

      if ((0, _TastOps.isAppTy)(g$$4, ty$$6)) {
        const tcref$$2 = (0, _TastOps.tcrefOfAppTy)(g$$4, ty$$6);
        const visitedTycon$$1 = (0, _Set.add)((0, _tast.EntityRef$$get_Stamp)(tcref$$2), visitedTycon);
        state$$1 = [visitedTycon$$1, (0, _TastOps.TyconRefMultiMap$00601$$Add$$75CBEA41)(visited, tcref$$2, ty$$6), acc$$1];
      } else {
        state$$1 = state;
      }

      if (ndeep > 100) {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$recursiveClassHierarchy$$Z721C83C5)((0, _TastOps.DebugPrint$$$showType)(ty$$6)), m$$4));
        return [visitedTycon, visited, acc$$1];
      } else {
        let patternInput$$3;

        if ((0, _TastOps.isInterfaceTy)(g$$4, ty$$6)) {
          patternInput$$3 = (0, _List.foldBack)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, loop, [ndeep + 1])), GetImmediateInterfacesOfType(skipUnref$$1, g$$4, amap$$4, m$$4, ty$$6), loop(ndeep, (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$4), state$$1));
        } else {
          const matchValue$$4 = (0, _TastOps.tryDestTyparTy)(g$$4, ty$$6);

          if (matchValue$$4 == null) {
            const state$$3 = followInterfaces ? (0, _List.foldBack)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, loop, [ndeep + 1])), GetImmediateInterfacesOfType(skipUnref$$1, g$$4, amap$$4, m$$4, ty$$6), state$$1) : state$$1;
            const state$$4 = (0, _Seq.foldBack)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, loop, [ndeep + 1])), (0, _Option.defaultArg)(GetSuperTypeOfType(g$$4, amap$$4, m$$4, ty$$6), [], function ($x$$1) {
              return [$x$$1];
            }), state$$3);
            patternInput$$3 = state$$4;
          } else {
            const tp = matchValue$$4;
            const state$$2 = loop(ndeep + 1, (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$4), state$$1);
            patternInput$$3 = (0, _List.foldBack)(function (x, vacc) {
              var $target$$15;

              switch (x.tag) {
                case 1:
                case 9:
                case 10:
                case 8:
                case 11:
                case 2:
                case 4:
                case 12:
                case 5:
                case 6:
                case 7:
                  $target$$15 = 0;
                  break;

                case 0:
                  $target$$15 = 1;
                  break;

                default:
                  $target$$15 = 0;
              }

              switch ($target$$15) {
                case 0:
                  {
                    return vacc;
                  }

                case 1:
                  {
                    const cty = x.fields[0];
                    return loop(ndeep + 1, cty, vacc);
                  }
              }
            }, (0, _tast.Typar$$get_Constraints)(tp), state$$2);
          }
        }

        const acc$$3 = visitor(ty$$6, patternInput$$3[2]);
        return [patternInput$$3[0], patternInput$$3[1], acc$$3];
      }
    }
  };

  const tupledArg = loop(0, ty$$5, [(0, _Set.empty)({
    Compare: _Long.compare
  }), (0, _TastOps.TyconRefMultiMap$00601$$$get_Empty)(), acc]);
  return (0, _lib.p33)(tupledArg[0], tupledArg[1], tupledArg[2]);
}

function FoldPrimaryHierarchyOfType(f, g$$5, amap$$5, m$$5, allowMultiIntfInst$$1, ty$$7, acc$$4) {
  return FoldHierarchyOfTypeAux(false, allowMultiIntfInst$$1, new SkipUnrefInterfaces(1, "No"), f, g$$5, amap$$5, m$$5, ty$$7, acc$$4);
}

function FoldEntireHierarchyOfType(f$$1, g$$6, amap$$6, m$$6, allowMultiIntfInst$$2, ty$$8, acc$$5) {
  return FoldHierarchyOfTypeAux(true, allowMultiIntfInst$$2, new SkipUnrefInterfaces(0, "Yes"), f$$1, g$$6, amap$$6, m$$6, ty$$8, acc$$5);
}

function IterateEntireHierarchyOfType(f$$2, g$$7, amap$$7, m$$7, allowMultiIntfInst$$3, ty$$9) {
  FoldHierarchyOfTypeAux(true, allowMultiIntfInst$$3, new SkipUnrefInterfaces(0, "Yes"), function (ty$$10, unitVar1) {
    f$$2(ty$$10);
  }, g$$7, amap$$7, m$$7, ty$$9, null);
}

function ExistsInEntireHierarchyOfType(f$$3, g$$8, amap$$8, m$$8, allowMultiIntfInst$$4, ty$$11) {
  return FoldHierarchyOfTypeAux(true, allowMultiIntfInst$$4, new SkipUnrefInterfaces(0, "Yes"), function (ty$$12, acc$$6) {
    return acc$$6 ? true : f$$3(ty$$12);
  }, g$$8, amap$$8, m$$8, ty$$11, false);
}

function SearchEntireHierarchyOfType(f$$4, g$$9, amap$$9, m$$9, ty$$13) {
  return FoldHierarchyOfTypeAux(true, new AllowMultiIntfInstantiations(0, "Yes"), new SkipUnrefInterfaces(0, "Yes"), function (ty$$14, acc$$7) {
    return acc$$7 != null ? acc$$7 : f$$4(ty$$14) ? ty$$14 : null;
  }, g$$9, amap$$9, m$$9, ty$$13, null);
}

function AllSuperTypesOfType(g$$10, amap$$10, m$$10, allowMultiIntfInst$$5, ty$$15) {
  return FoldHierarchyOfTypeAux(true, allowMultiIntfInst$$5, new SkipUnrefInterfaces(1, "No"), function (x$$1, l) {
    return (0, _lib.ListSet$$$insert)(function f$$5(arg10$0040$$3, arg20$0040$$2) {
      return (0, _TastOps.typeEquiv)(g$$10, arg10$0040$$3, arg20$0040$$2);
    }, x$$1, l);
  }, g$$10, amap$$10, m$$10, ty$$15, (0, _Types.L)());
}

function AllInterfacesOfType(g$$11, amap$$11, m$$11, allowMultiIntfInst$$6, ty$$16) {
  return (0, _List.filter)(function predicate(arg10$0040$$4) {
    return (0, _TastOps.isInterfaceTy)(g$$11, arg10$0040$$4);
  }, AllSuperTypesOfType(g$$11, amap$$11, m$$11, allowMultiIntfInst$$6, ty$$16));
}

function HaveSameHeadType(g$$12, ty1, ty2) {
  if ((0, _TastOps.isAppTy)(g$$12, ty1) ? (0, _TastOps.isAppTy)(g$$12, ty2) : false) {
    return (0, _TastOps.tyconRefEq)(g$$12, (0, _TastOps.tcrefOfAppTy)(g$$12, ty1), (0, _TastOps.tcrefOfAppTy)(g$$12, ty2));
  } else {
    return false;
  }
}

function HasHeadType(g$$13, tcref$$3, ty2$$1) {
  if ((0, _TastOps.isAppTy)(g$$13, ty2$$1)) {
    return (0, _TastOps.tyconRefEq)(g$$13, tcref$$3, (0, _TastOps.tcrefOfAppTy)(g$$13, ty2$$1));
  } else {
    return false;
  }
}

function ExistsSameHeadTypeInHierarchy(g$$14, amap$$12, m$$12, typeToSearchFrom, typeToLookFor) {
  return ExistsInEntireHierarchyOfType(function (ty2$$2) {
    return HaveSameHeadType(g$$14, typeToLookFor, ty2$$2);
  }, g$$14, amap$$12, m$$12, new AllowMultiIntfInstantiations(0, "Yes"), typeToSearchFrom);
}

function ExistsHeadTypeInEntireHierarchy(g$$15, amap$$13, m$$13, typeToSearchFrom$$1, tcrefToLookFor) {
  return ExistsInEntireHierarchyOfType(function (ty2$$3) {
    return HasHeadType(g$$15, tcrefToLookFor, ty2$$3);
  }, g$$15, amap$$13, m$$13, new AllowMultiIntfInstantiations(0, "Yes"), typeToSearchFrom$$1);
}

function ImportILTypeFromMetadata(amap$$14, m$$14, scoref$$4, tinst$$2, minst, ilty$$3) {
  return ImportILType(scoref$$4, amap$$14, m$$14, (0, _List.append)(tinst$$2, minst), ilty$$3);
}

function ImportReturnTypeFromMetaData(amap$$15, m$$15, ty$$17, scoref$$5, tinst$$3, minst$$1) {
  if (ty$$17.tag === 0) {
    return null;
  } else {
    const retTy = ty$$17;
    return ImportILTypeFromMetadata(amap$$15, m$$15, scoref$$5, tinst$$3, minst$$1, retTy);
  }
}

function CopyTyparConstraints(m$$16, tprefInst, tporig) {
  return (0, _List.map)(function mapping$$1(tpc) {
    switch (tpc.tag) {
      case 1:
        {
          const ty$$19 = tpc.fields[1];
          const priority = tpc.fields[0] | 0;
          return new _tast.TyparConstraint(1, "DefaultsTo", priority, (0, _TastOps.instType)(tprefInst, ty$$19), m$$16);
        }

      case 2:
        {
          return new _tast.TyparConstraint(2, "SupportsNull", m$$16);
        }

      case 8:
        {
          const uty = tpc.fields[0];
          return new _tast.TyparConstraint(8, "IsEnum", (0, _TastOps.instType)(tprefInst, uty), m$$16);
        }

      case 9:
        {
          return new _tast.TyparConstraint(9, "SupportsComparison", m$$16);
        }

      case 10:
        {
          return new _tast.TyparConstraint(10, "SupportsEquality", m$$16);
        }

      case 11:
        {
          const bty = tpc.fields[1];
          const aty = tpc.fields[0];
          return new _tast.TyparConstraint(11, "IsDelegate", (0, _TastOps.instType)(tprefInst, aty), (0, _TastOps.instType)(tprefInst, bty), m$$16);
        }

      case 4:
        {
          return new _tast.TyparConstraint(4, "IsNonNullableStruct", m$$16);
        }

      case 12:
        {
          return new _tast.TyparConstraint(12, "IsUnmanaged", m$$16);
        }

      case 5:
        {
          return new _tast.TyparConstraint(5, "IsReferenceType", m$$16);
        }

      case 6:
        {
          const tys = tpc.fields[0];
          return new _tast.TyparConstraint(6, "SimpleChoice", (0, _List.map)(function (arg10$0040$$5) {
            return (0, _TastOps.instType)(tprefInst, arg10$0040$$5);
          }, tys), m$$16);
        }

      case 7:
        {
          return new _tast.TyparConstraint(7, "RequiresDefaultConstructor", m$$16);
        }

      case 3:
        {
          const traitInfo = tpc.fields[0];
          return new _tast.TyparConstraint(3, "MayResolveMember", (0, _TastOps.instTrait)(tprefInst, traitInfo), m$$16);
        }

      default:
        {
          const ty$$18 = tpc.fields[0];
          return new _tast.TyparConstraint(0, "CoercesTo", (0, _TastOps.instType)(tprefInst, ty$$18), m$$16);
        }
    }
  }, (0, _tast.Typar$$get_Constraints)(tporig));
}

function FixupNewTypars(m$$17, formalEnclosingTypars, tinst$$4, tpsorig, tps) {
  const n0 = (0, _List.length)(formalEnclosingTypars) | 0;
  const n1 = (0, _List.length)(tinst$$4) | 0;
  const n2 = (0, _List.length)(tpsorig) | 0;
  const n3 = (0, _List.length)(tps) | 0;

  if (n0 !== n1) {
    (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcInvalidTypeArgumentCount$$Z37302880)(n0, n1), m$$17));
  }

  if (n2 !== n3) {
    (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcInvalidTypeArgumentCount$$Z37302880)(n2, n3), m$$17));
  }

  const patternInput$$4 = (0, _TastOps.mkTyparToTyparRenaming)(tpsorig, tps);
  const tprefInst$$1 = (0, _List.append)((0, _TastOps.mkTyparInst)(formalEnclosingTypars, tinst$$4), patternInput$$4[0]);
  (0, _List.iterate2)(function action(tporig$$1, tp$$1) {
    (0, _tast.Typar$$SetConstraints$$Z10399A1)(tp$$1, CopyTyparConstraints(m$$17, tprefInst$$1, tporig$$1));
  }, tpsorig, tps);
  return [patternInput$$4[0], patternInput$$4[1]];
}

function ValRef$002EIsFSharpEventProperty$$2AE8EA0C(x$$2, g$$16) {
  if ((0, _tast.ValRef$$get_IsMember)(x$$2) ? (0, _TastOps.CompileAsEvent)(g$$16, (0, _tast.ValRef$$get_Attribs)(x$$2)) : false) {
    return !(0, _tast.ValRef$$get_IsExtensionMember)(x$$2);
  } else {
    return false;
  }
}

function ValRef$002Eget_IsVirtualMember(vref) {
  const flags = (0, _tast.ValRef$$get_MemberInfo)(vref).MemberFlags;

  if (flags.IsDispatchSlot) {
    return true;
  } else {
    return flags.IsOverrideOrExplicitImpl;
  }
}

function ValRef$002Eget_IsDispatchSlotMember(vref$$1) {
  const membInfo = (0, _tast.ValRef$$get_MemberInfo)(vref$$1);
  return membInfo.MemberFlags.IsDispatchSlot;
}

function ValRef$002Eget_IsDefiniteFSharpOverrideMember(vref$$2) {
  const membInfo$$1 = (0, _tast.ValRef$$get_MemberInfo)(vref$$2);
  const flags$$1 = membInfo$$1.MemberFlags;

  if (!flags$$1.IsDispatchSlot) {
    if (flags$$1.IsOverrideOrExplicitImpl) {
      return true;
    } else {
      return !(membInfo$$1.ImplementedSlotSigs.tail == null);
    }
  } else {
    return false;
  }
}

function ValRef$002EIsFSharpExplicitInterfaceImplementation$$2AE8EA0C(vref$$3, g$$17) {
  const matchValue$$5 = (0, _tast.ValRef$$get_MemberInfo)(vref$$3);

  if (matchValue$$5 != null) {
    const membInfo$$2 = matchValue$$5;

    if (!membInfo$$2.MemberFlags.IsDispatchSlot) {
      const matchValue$$6 = membInfo$$2.ImplementedSlotSigs;

      if (matchValue$$6.tail == null) {
        return false;
      } else {
        const oty = matchValue$$6.head.fields[1];
        return (0, _TastOps.isInterfaceTy)(g$$17, oty);
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function ValRef$002Eget_ImplementedSlotSignatures(vref$$4) {
  const matchValue$$7 = (0, _tast.ValRef$$get_MemberInfo)(vref$$4);

  if (matchValue$$7 != null) {
    const membInfo$$3 = matchValue$$7;
    return membInfo$$3.ImplementedSlotSigs;
  } else {
    return (0, _Types.L)();
  }
}

function ReparentSlotSigToUseMethodTypars(g$$18, m$$18, ovByMethValRef, slotsig) {
  const matchValue$$8 = (0, _TastOps.PartitionValRefTypars)(g$$18, ovByMethValRef);

  if (matchValue$$8 == null) {
    return slotsig;
  } else {
    const enclosingTypars = matchValue$$8[1];
    const patternInput$$5 = (0, _TastOps.mkTyparToTyparRenaming)((0, _tast.EntityRef$$Typars$$4DB9192C)((0, _tast.ValRef$$get_MemberApparentEntity)(ovByMethValRef), m$$18), enclosingTypars);
    const res = (0, _TastOps.instSlotSig)(patternInput$$5[0], slotsig);
    return res;
  }
}

function MakeSlotParam(ty$$20, argInfo) {
  return new _tast.SlotParam(0, "TSlotParam", (0, _Option.defaultArg)(argInfo.Name, null, _ast.textOfId), ty$$20, false, false, false, argInfo.Attribs);
}

function MakeSlotSig(nm, ty$$21, ctps, mtps, paraml, retTy$$1) {
  return (0, _TastOps.copySlotSig)(new _tast.SlotSig(0, "TSlotSig", nm, ty$$21, ctps, mtps, paraml, retTy$$1));
}

function AnalyzeTypeOfMemberVal(isCSharpExt, g$$19, ty$$22, vref$$5) {
  const patternInput$$6 = (0, _TastOps.GetTypeOfMemberInMemberForm)(g$$19, vref$$5);

  if (isCSharpExt ? true : (0, _tast.ValRef$$get_IsExtensionMember)(vref$$5)) {
    return [(0, _Types.L)(), patternInput$$6[0], patternInput$$6[2], (0, _Types.L)()];
  } else {
    const parentTyArgs = (0, _TastOps.argsOfAppTy)(g$$19, ty$$22);
    const patternInput$$7 = (0, _List.splitAt)((0, _List.length)(parentTyArgs), patternInput$$6[0]);
    return [patternInput$$7[0], patternInput$$7[1], patternInput$$6[2], parentTyArgs];
  }
}

function GetObjTypeOfInstanceExtensionMethod(g$$20, vref$$6) {
  const patternInput$$8 = (0, _TastOps.GetTopValTypeInCompiledForm)(g$$20, (0, _tast.ValRef$$get_ValReprInfo)(vref$$6), (0, _tast.ValRef$$get_Type)(vref$$6), (0, _tast.ValRef$$get_Range)(vref$$6));
  return (0, _List.head)((0, _List.head)(patternInput$$8[1]))[0];
}

function GetArgInfosOfMember(isCSharpExt$$1, g$$21, vref$$7) {
  if (isCSharpExt$$1) {
    const patternInput$$9 = (0, _TastOps.GetTopValTypeInCompiledForm)(g$$21, (0, _tast.ValRef$$get_ValReprInfo)(vref$$7), (0, _tast.ValRef$$get_Type)(vref$$7), (0, _tast.ValRef$$get_Range)(vref$$7));
    return (0, _Types.L)((0, _List.tail)((0, _List.head)(patternInput$$9[1])), (0, _Types.L)());
  } else {
    return (0, _TastOps.ArgInfosOfMember)(g$$21, vref$$7);
  }
}

function CombineMethInsts(ttps, mtps$$1, tinst$$5, minst$$2) {
  return (0, _List.append)((0, _TastOps.mkTyparInst)(ttps, tinst$$5), (0, _TastOps.mkTyparInst)(mtps$$1, minst$$2));
}

function GetInstantiationForMemberVal(g$$22, isCSharpExt$$2, ty$$23, vref$$8, methTyArgs) {
  const patternInput$$10 = AnalyzeTypeOfMemberVal(isCSharpExt$$2, g$$22, ty$$23, vref$$8);
  const methTyArgsFixedUp = (0, _List.length)(methTyArgs) < (0, _List.length)(patternInput$$10[1]) ? (0, _List.append)(methTyArgs, (0, _TastOps.generalizeTypars)((0, _List.skip)((0, _List.length)(methTyArgs), patternInput$$10[1]))) : methTyArgs;
  return CombineMethInsts(patternInput$$10[0], patternInput$$10[1], patternInput$$10[3], methTyArgsFixedUp);
}

function GetInstantiationForPropertyVal(g$$23, ty$$24, vref$$9) {
  const patternInput$$11 = AnalyzeTypeOfMemberVal(false, g$$23, ty$$24, vref$$9);
  return CombineMethInsts(patternInput$$11[0], patternInput$$11[1], patternInput$$11[3], (0, _TastOps.generalizeTypars)(patternInput$$11[1]));
}

const OptionalArgCallerSideValue = (0, _Types.declare)(function OptionalArgCallerSideValue(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.OptionalArgCallerSideValue = OptionalArgCallerSideValue;
const OptionalArgInfo = (0, _Types.declare)(function OptionalArgInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.OptionalArgInfo = OptionalArgInfo;

function OptionalArgInfo$$get_IsOptional(x$$3) {
  var $target$$47;

  switch (x$$3.tag) {
    case 2:
      $target$$47 = 0;
      break;

    case 0:
      $target$$47 = 1;
      break;

    default:
      $target$$47 = 0;
  }

  switch ($target$$47) {
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

function OptionalArgInfo$$$FromILParameter(g$$24, amap$$16, m$$19, ilScope, ilTypeInst, ilParam) {
  if (ilParam.IsOptional) {
    if (ilParam.Default != null) {
      const v = ilParam.Default;
      return new OptionalArgInfo(2, "CallerSide", new OptionalArgCallerSideValue(0, "Constant", v));
    } else {
      const analyze = function analyze(ty$$25) {
        if ((0, _TastOps.isByrefTy)(g$$24, ty$$25)) {
          const ty$$26 = (0, _TastOps.destByrefTy)(g$$24, ty$$25);
          return new OptionalArgCallerSideValue(5, "PassByRef", ty$$26, analyze(ty$$26));
        } else if ((0, _TastOps.isObjTy)(g$$24, ty$$25)) {
          var $target$$48;

          if (ilParam.Marshal != null) {
            if (ilParam.Marshal.tag === 31) {
              $target$$48 = 0;
            } else if (ilParam.Marshal.tag === 32) {
              $target$$48 = 0;
            } else if (ilParam.Marshal.tag === 33) {
              $target$$48 = 0;
            } else {
              $target$$48 = 1;
            }
          } else {
            $target$$48 = 1;
          }

          switch ($target$$48) {
            case 0:
              {
                return new OptionalArgCallerSideValue(0, "Constant", new _il.ILFieldInit(13, "Null"));
              }

            case 1:
              {
                if ((0, _TastOps.TryFindILAttributeOpt)((0, _TcGlobals.TcGlobals$$get_attrib_IUnknownConstantAttribute)(g$$24), (0, _il.ILParameter$$get_CustomAttrs)(ilParam))) {
                  return new OptionalArgCallerSideValue(4, "WrapperForIUnknown");
                } else if ((0, _TastOps.TryFindILAttributeOpt)((0, _TcGlobals.TcGlobals$$get_attrib_IDispatchConstantAttribute)(g$$24), (0, _il.ILParameter$$get_CustomAttrs)(ilParam))) {
                  return new OptionalArgCallerSideValue(3, "WrapperForIDispatch");
                } else {
                  return new OptionalArgCallerSideValue(2, "MissingValue");
                }
              }
          }
        } else {
          return new OptionalArgCallerSideValue(1, "DefaultValue");
        }
      };

      return new OptionalArgInfo(2, "CallerSide", analyze(ImportILTypeFromMetadata(amap$$16, m$$19, ilScope, ilTypeInst, (0, _Types.L)(), ilParam.Type)));
    }
  } else {
    return new OptionalArgInfo(0, "NotOptional");
  }
}

function OptionalArgInfo$$$ValueOfDefaultParameterValueAttrib$$Z49F0139A(_arg1$$1) {
  const exprs = _arg1$$1.fields[2];
  const defaultValueExpr = (0, _List.head)(exprs).fields[1];

  if (defaultValueExpr.tag === 0) {
    return defaultValueExpr;
  } else {
    return null;
  }
}

function OptionalArgInfo$$$FieldInitForDefaultParameterValueAttrib$$Z49F0139A(attrib) {
  const matchValue$$11 = OptionalArgInfo$$$ValueOfDefaultParameterValueAttrib$$Z49F0139A(attrib);
  var $target$$49, fi;

  if (matchValue$$11 != null) {
    if (matchValue$$11.tag === 0) {
      const activePatternResult36882 = (0, _TastOps.$007CConstToILFieldInit$007C_$007C)(matchValue$$11.fields[0]);

      if (activePatternResult36882 != null) {
        $target$$49 = 0;
        fi = activePatternResult36882;
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
        return fi;
      }

    case 1:
      {
        return null;
      }
  }
}

const CallerInfo = (0, _Types.declare)(function CallerInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CallerInfo = CallerInfo;

CallerInfo.prototype.toString = function () {
  const x$$4 = this;
  return (0, _String.toText)((0, _String.printf)("%+A"))(x$$4);
};

const ReflectedArgInfo = (0, _Types.declare)(function ReflectedArgInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ReflectedArgInfo = ReflectedArgInfo;

function ReflectedArgInfo$$get_AutoQuote(x$$5) {
  if (x$$5.tag === 1) {
    return true;
  } else {
    return false;
  }
}

const ParamNameAndType = (0, _Types.declare)(function ParamNameAndType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParamNameAndType = ParamNameAndType;

function ParamNameAndType$$$FromArgInfo$$Z2D9B2ABD(ty$$27, argInfo$$1) {
  return new ParamNameAndType(0, "ParamNameAndType", argInfo$$1.Name, ty$$27);
}

function ParamNameAndType$$$FromMember(isCSharpExtMem, g$$25, vref$$10) {
  return (0, _illib.List$$$mapSquared)(function f$$6(tupledArg$$1) {
    return ParamNameAndType$$$FromArgInfo$$Z2D9B2ABD(tupledArg$$1[0], tupledArg$$1[1]);
  }, GetArgInfosOfMember(isCSharpExtMem, g$$25, vref$$10));
}

function ParamNameAndType$$$Instantiate(inst, p) {
  const ty$$28 = p.fields[1];
  const nm$$1 = p.fields[0];
  return new ParamNameAndType(0, "ParamNameAndType", nm$$1, (0, _TastOps.instType)(inst, ty$$28));
}

function ParamNameAndType$$$InstantiateCurried(inst$$1, paramTypes) {
  return (0, _illib.List$$$mapSquared)(function (arg10$$1) {
    return ParamNameAndType$$$Instantiate(inst$$1, arg10$$1);
  }, paramTypes);
}

const ParamData = (0, _Types.declare)(function ParamData(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParamData = ParamData;
const ILTypeInfo = (0, _Types.declare)(function ILTypeInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILTypeInfo = ILTypeInfo;

function ILTypeInfo$$get_TcGlobals(x$$6) {
  const g$$26 = x$$6.fields[0];
  return g$$26;
}

function ILTypeInfo$$get_ILTypeRef(x$$7) {
  const tref = x$$7.fields[2];
  return tref;
}

function ILTypeInfo$$get_RawMetadata(x$$8) {
  const tdef$$2 = x$$8.fields[3];
  return tdef$$2;
}

function ILTypeInfo$$get_ToType(x$$9) {
  const ty$$29 = x$$9.fields[1];
  return ty$$29;
}

function ILTypeInfo$$get_ToAppType(x$$10) {
  return (0, _TastOps.convertToTypeWithMetadataIfPossible)(ILTypeInfo$$get_TcGlobals(x$$10), ILTypeInfo$$get_ToType(x$$10));
}

function ILTypeInfo$$get_TyconRefOfRawMetadata(x$$11) {
  return (0, _TastOps.tcrefOfAppTy)(ILTypeInfo$$get_TcGlobals(x$$11), ILTypeInfo$$get_ToAppType(x$$11));
}

function ILTypeInfo$$get_TypeInstOfRawMetadata(x$$12) {
  return (0, _TastOps.argsOfAppTy)(ILTypeInfo$$get_TcGlobals(x$$12), ILTypeInfo$$get_ToAppType(x$$12));
}

function ILTypeInfo$$get_ILScopeRef(x$$13) {
  return (0, _il.ILTypeRef$$get_Scope)(ILTypeInfo$$get_ILTypeRef(x$$13));
}

function ILTypeInfo$$get_Name(x$$14) {
  return (0, _il.ILTypeRef$$get_Name)(ILTypeInfo$$get_ILTypeRef(x$$14));
}

function ILTypeInfo$$get_IsValueType(x$$15) {
  return (0, _il.ILTypeDef$$get_IsStructOrEnum)(ILTypeInfo$$get_RawMetadata(x$$15));
}

function ILTypeInfo$$Instantiate$$Z794F4A39(x$$16, inst$$2) {
  const ty$$30 = x$$16.fields[1];
  const tref$$1 = x$$16.fields[2];
  const tdef$$3 = x$$16.fields[3];
  const g$$27 = x$$16.fields[0];
  return new ILTypeInfo(0, "ILTypeInfo", g$$27, (0, _TastOps.instType)(inst$$2, ty$$30), tref$$1, tdef$$3);
}

function ILTypeInfo$$$FromType(g$$28, ty$$31) {
  if ((0, _TastOps.isAnyTupleTy)(g$$28, ty$$31)) {
    const metadataTy = (0, _TastOps.convertToTypeWithMetadataIfPossible)(g$$28, ty$$31);
    const metadataTyconRef = (0, _TastOps.tcrefOfAppTy)(g$$28, metadataTy);
    const patternInput$$13 = (0, _tast.EntityRef$$get_ILTyconInfo)(metadataTyconRef);
    const tdef$$4 = patternInput$$13.fields[2];
    const scoref$$6 = patternInput$$13.fields[0];
    const enc = patternInput$$13.fields[1];
    const metadataILTypeRef = (0, _il.mkRefForNestedILTypeDef)(scoref$$6, enc, tdef$$4);
    return new ILTypeInfo(0, "ILTypeInfo", g$$28, ty$$31, metadataILTypeRef, tdef$$4);
  } else if ((0, _TastOps.isILAppTy)(g$$28, ty$$31)) {
    const tcref$$4 = (0, _TastOps.tcrefOfAppTy)(g$$28, ty$$31);
    const patternInput$$14 = (0, _tast.EntityRef$$get_ILTyconInfo)(tcref$$4);
    const tdef$$5 = patternInput$$14.fields[2];
    const scoref$$7 = patternInput$$14.fields[0];
    const enc$$1 = patternInput$$14.fields[1];
    const tref$$2 = (0, _il.mkRefForNestedILTypeDef)(scoref$$7, enc$$1, tdef$$5);
    return new ILTypeInfo(0, "ILTypeInfo", g$$28, ty$$31, tref$$2, tdef$$5);
  } else {
    throw new Error("ILTypeInfo.FromType - no IL metadata for type");
  }
}

const ILMethInfo = (0, _Types.declare)(function ILMethInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILMethInfo = ILMethInfo;

function ILMethInfo$$get_TcGlobals(x$$17) {
  const g$$29 = x$$17.fields[0];
  return g$$29;
}

function ILMethInfo$$get_ApparentEnclosingType(x$$18) {
  const ty$$32 = x$$18.fields[1];
  return ty$$32;
}

function ILMethInfo$$get_ApparentEnclosingAppType(x$$19) {
  return (0, _TastOps.convertToTypeWithMetadataIfPossible)(ILMethInfo$$get_TcGlobals(x$$19), ILMethInfo$$get_ApparentEnclosingType(x$$19));
}

function ILMethInfo$$get_ILExtensionMethodDeclaringTyconRef(x$$20) {
  const tcrefOpt = x$$20.fields[2];
  return tcrefOpt;
}

function ILMethInfo$$get_RawMetadata(x$$21) {
  const md = x$$21.fields[3];
  return md;
}

function ILMethInfo$$get_FormalMethodTypars(x$$22) {
  const fmtps = x$$22.fields[4];
  return fmtps;
}

function ILMethInfo$$get_ILName(x$$23) {
  return (0, _il.ILMethodDef$$get_Name)(ILMethInfo$$get_RawMetadata(x$$23));
}

function ILMethInfo$$get_IsILExtensionMethod(x$$24) {
  return ILMethInfo$$get_ILExtensionMethodDeclaringTyconRef(x$$24) != null;
}

function ILMethInfo$$get_DeclaringTyconRef(x$$25) {
  const matchValue$$12 = ILMethInfo$$get_ILExtensionMethodDeclaringTyconRef(x$$25);

  if (matchValue$$12 == null) {
    return (0, _TastOps.tcrefOfAppTy)(ILMethInfo$$get_TcGlobals(x$$25), ILMethInfo$$get_ApparentEnclosingAppType(x$$25));
  } else {
    const tcref$$5 = matchValue$$12;
    return tcref$$5;
  }
}

function ILMethInfo$$get_DeclaringTypeInst(x$$26) {
  if (ILMethInfo$$get_IsILExtensionMethod(x$$26)) {
    return (0, _Types.L)();
  } else {
    return (0, _TastOps.argsOfAppTy)(ILMethInfo$$get_TcGlobals(x$$26), ILMethInfo$$get_ApparentEnclosingAppType(x$$26));
  }
}

function ILMethInfo$$get_MetadataScope(x$$27) {
  return (0, _il.ILTypeRef$$get_Scope)((0, _tast.EntityRef$$get_CompiledRepresentationForNamedType)(ILMethInfo$$get_DeclaringTyconRef(x$$27)));
}

function ILMethInfo$$get_ParamMetadata(x$$28) {
  const ps = (0, _il.ILMethodDef$$get_Parameters)(ILMethInfo$$get_RawMetadata(x$$28));

  if (ILMethInfo$$get_IsILExtensionMethod(x$$28)) {
    return (0, _List.tail)(ps);
  } else {
    return ps;
  }
}

function ILMethInfo$$get_NumParams(x$$29) {
  return (0, _List.length)(ILMethInfo$$get_ParamMetadata(x$$29));
}

function ILMethInfo$$get_IsConstructor(x$$30) {
  return (0, _il.ILMethodDef$$get_IsConstructor)(ILMethInfo$$get_RawMetadata(x$$30));
}

function ILMethInfo$$get_IsClassConstructor(x$$31) {
  return (0, _il.ILMethodDef$$get_IsClassInitializer)(ILMethInfo$$get_RawMetadata(x$$31));
}

function ILMethInfo$$get_IsProtectedAccessibility(x$$32) {
  const md$$1 = ILMethInfo$$get_RawMetadata(x$$32);

  if (!(0, _il.ILMethodDef$$get_IsConstructor)(md$$1) ? !(0, _il.ILMethodDef$$get_IsClassInitializer)(md$$1) : false) {
    if ((0, _Util.equals)((0, _il.ILMethodDef$$get_Access)(md$$1), new _il.ILMemberAccess(4, "Family"))) {
      return true;
    } else {
      return (0, _Util.equals)((0, _il.ILMethodDef$$get_Access)(md$$1), new _il.ILMemberAccess(3, "FamilyOrAssembly"));
    }
  } else {
    return false;
  }
}

function ILMethInfo$$get_IsVirtual(x$$33) {
  return (0, _il.ILMethodDef$$get_IsVirtual)(ILMethInfo$$get_RawMetadata(x$$33));
}

function ILMethInfo$$get_IsFinal(x$$34) {
  return (0, _il.ILMethodDef$$get_IsFinal)(ILMethInfo$$get_RawMetadata(x$$34));
}

function ILMethInfo$$get_IsAbstract(x$$35) {
  return (0, _il.ILMethodDef$$get_IsAbstract)(ILMethInfo$$get_RawMetadata(x$$35));
}

function ILMethInfo$$get_IsStatic(x$$36) {
  if (!ILMethInfo$$get_IsILExtensionMethod(x$$36)) {
    return (0, _il.ILCallingConv$$get_IsStatic)((0, _il.ILMethodDef$$get_CallingConv)(ILMethInfo$$get_RawMetadata(x$$36)));
  } else {
    return false;
  }
}

function ILMethInfo$$get_IsNewSlot(x$$37) {
  return (0, _il.ILMethodDef$$get_IsNewSlot)(ILMethInfo$$get_RawMetadata(x$$37));
}

function ILMethInfo$$get_IsInstance(x$$38) {
  if (!ILMethInfo$$get_IsConstructor(x$$38)) {
    return !ILMethInfo$$get_IsStatic(x$$38);
  } else {
    return false;
  }
}

function ILMethInfo$$GetParamTypes$$Z5D984B3C(x$$39, amap$$17, m$$20, minst$$3) {
  return (0, _List.map)(function mapping$$2(p$$1) {
    return ImportILTypeFromMetadata(amap$$17, m$$20, ILMethInfo$$get_MetadataScope(x$$39), ILMethInfo$$get_DeclaringTypeInst(x$$39), minst$$3, p$$1.Type);
  }, ILMethInfo$$get_ParamMetadata(x$$39));
}

function ILMethInfo$$GetRawArgTypes$$Z5D984B3C(x$$40, amap$$18, m$$21, minst$$4) {
  return (0, _List.map)(function mapping$$3(p$$2) {
    return ImportILTypeFromMetadata(amap$$18, m$$21, ILMethInfo$$get_MetadataScope(x$$40), ILMethInfo$$get_DeclaringTypeInst(x$$40), minst$$4, p$$2.Type);
  }, (0, _il.ILMethodDef$$get_Parameters)(ILMethInfo$$get_RawMetadata(x$$40)));
}

function ILMethInfo$$GetParamNamesAndTypes$$Z5D984B3C(x$$41, amap$$19, m$$22, minst$$5) {
  return (0, _List.map)(function mapping$$4(p$$3) {
    return new ParamNameAndType(0, "ParamNameAndType", (0, _Option.defaultArg)(p$$3.Name, null, function (s) {
      return (0, _ast.mkSynId)(m$$22, s);
    }), ImportILTypeFromMetadata(amap$$19, m$$22, ILMethInfo$$get_MetadataScope(x$$41), ILMethInfo$$get_DeclaringTypeInst(x$$41), minst$$5, p$$3.Type));
  }, ILMethInfo$$get_ParamMetadata(x$$41));
}

function ILMethInfo$$get_ILMethodRef(x$$42) {
  const mref = (0, _il.mkRefToILMethod)((0, _tast.EntityRef$$get_CompiledRepresentationForNamedType)(ILMethInfo$$get_DeclaringTyconRef(x$$42)), ILMethInfo$$get_RawMetadata(x$$42));
  return (0, _il.rescopeILMethodRef)(ILMethInfo$$get_MetadataScope(x$$42), mref);
}

function ILMethInfo$$IsDllImport$$2AE8EA0C(x$$43, g$$30) {
  const matchValue$$13 = (0, _TcGlobals.TcGlobals$$get_attrib_DllImportAttribute)(g$$30);

  if (matchValue$$13 != null) {
    const tref$$3 = matchValue$$13.fields[0];
    return (0, _TastOps.TryDecodeILAttribute)(g$$30, tref$$3, (0, _il.ILMethodDef$$get_CustomAttrs)(ILMethInfo$$get_RawMetadata(x$$43))) != null;
  } else {
    return false;
  }
}

function ILMethInfo$$GetObjArgTypes$$Z5D984B3C(x$$44, amap$$20, m$$23, minst$$6) {
  if (ILMethInfo$$get_IsILExtensionMethod(x$$44)) {
    return (0, _Types.L)(ImportILTypeFromMetadata(amap$$20, m$$23, ILMethInfo$$get_MetadataScope(x$$44), ILMethInfo$$get_DeclaringTypeInst(x$$44), minst$$6, (0, _List.head)((0, _il.ILMethodDef$$get_Parameters)(ILMethInfo$$get_RawMetadata(x$$44))).Type), (0, _Types.L)());
  } else if (ILMethInfo$$get_IsInstance(x$$44)) {
    return (0, _Types.L)(ILMethInfo$$get_ApparentEnclosingType(x$$44), (0, _Types.L)());
  } else {
    return (0, _Types.L)();
  }
}

function ILMethInfo$$GetCompiledReturnTy$$Z5D984B3C(x$$45, amap$$21, m$$24, minst$$7) {
  return ImportReturnTypeFromMetaData(amap$$21, m$$24, (0, _il.ILMethodDef$$get_Return)(ILMethInfo$$get_RawMetadata(x$$45)).Type, ILMethInfo$$get_MetadataScope(x$$45), ILMethInfo$$get_DeclaringTypeInst(x$$45), minst$$7);
}

function ILMethInfo$$GetFSharpReturnTy$$Z5D984B3C(x$$46, amap$$22, m$$25, minst$$8) {
  return (0, _TastOps.GetFSharpViewOfReturnType)((0, _import.ImportMap$$get_g)(amap$$22), ILMethInfo$$GetCompiledReturnTy$$Z5D984B3C(x$$46, amap$$22, m$$25, minst$$8));
}

const MethInfo = (0, _Types.declare)(function MethInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.MethInfo = MethInfo;

function MethInfo$$get_ApparentEnclosingType(x$$47) {
  switch (x$$47.tag) {
    case 0:
      {
        const ty$$33 = x$$47.fields[1];
        return ty$$33;
      }

    case 2:
      {
        const ty$$34 = x$$47.fields[1];
        return ty$$34;
      }

    default:
      {
        const ilminfo = x$$47.fields[1];
        return ILMethInfo$$get_ApparentEnclosingType(ilminfo);
      }
  }
}

function MethInfo$$get_ApparentEnclosingAppType(x$$48) {
  return (0, _TastOps.convertToTypeWithMetadataIfPossible)(MethInfo$$get_TcGlobals(x$$48), MethInfo$$get_ApparentEnclosingType(x$$48));
}

function MethInfo$$get_ApparentEnclosingTyconRef(x$$49) {
  return (0, _TastOps.tcrefOfAppTy)(MethInfo$$get_TcGlobals(x$$49), MethInfo$$get_ApparentEnclosingAppType(x$$49));
}

function MethInfo$$get_DeclaringTyconRef(x$$50) {
  var vref$$11, ilminfo$$1;
  var $target$$50, ilminfo$$2;

  if (x$$50.tag === 1) {
    if (ilminfo$$1 = x$$50.fields[1], MethInfo$$get_IsExtensionMember(x$$50)) {
      $target$$50 = 0;
      ilminfo$$2 = x$$50.fields[1];
    } else {
      $target$$50 = 1;
    }
  } else {
    $target$$50 = 1;
  }

  switch ($target$$50) {
    case 0:
      {
        return ILMethInfo$$get_DeclaringTyconRef(ilminfo$$2);
      }

    case 1:
      {
        var $target$$51, vref$$12;

        if (x$$50.tag === 0) {
          if (vref$$11 = x$$50.fields[2], MethInfo$$get_IsExtensionMember(x$$50) ? (0, _tast.ValRef$$get_HasDeclaringEntity)(vref$$11) : false) {
            $target$$51 = 0;
            vref$$12 = x$$50.fields[2];
          } else {
            $target$$51 = 1;
          }
        } else {
          $target$$51 = 1;
        }

        switch ($target$$51) {
          case 0:
            {
              return (0, _tast.ValRef$$get_TopValDeclaringEntity)(vref$$12);
            }

          case 1:
            {
              return MethInfo$$get_ApparentEnclosingTyconRef(x$$50);
            }
        }
      }
  }
}

function MethInfo$$get_ProvidedStaticParameterInfo(x$$51) {
  switch (x$$51.tag) {
    case 0:
      {
        return null;
      }

    case 2:
      {
        return null;
      }

    default:
      {
        return null;
      }
  }
}

function MethInfo$$get_ExtensionMemberPriorityOption(x$$52) {
  switch (x$$52.tag) {
    case 0:
      {
        const pri$$1 = x$$52.fields[3];
        return pri$$1;
      }

    case 2:
      {
        return null;
      }

    default:
      {
        const pri = x$$52.fields[2];
        return pri;
      }
  }
}

function MethInfo$$get_ExtensionMemberPriority(x$$53) {
  return (0, _Option.defaultArg)(MethInfo$$get_ExtensionMemberPriorityOption(x$$53), (0, _Long.fromBits)(4294967295, 4294967295, true));
}

function MethInfo$$get_LogicalName(x$$54) {
  switch (x$$54.tag) {
    case 0:
      {
        const vref$$13 = x$$54.fields[2];
        return (0, _tast.ValRef$$get_LogicalName)(vref$$13);
      }

    case 2:
      {
        return ".ctor";
      }

    default:
      {
        const y = x$$54.fields[1];
        return ILMethInfo$$get_ILName(y);
      }
  }
}

function MethInfo$$get_DisplayName(x$$55) {
  if (x$$55.tag === 0) {
    const vref$$14 = x$$55.fields[2];
    return (0, _tast.ValRef$$get_DisplayName)(vref$$14);
  } else {
    return MethInfo$$get_LogicalName(x$$55);
  }
}

function MethInfo$$get_HasDirectXmlComment(x$$56) {
  if (x$$56.tag === 0) {
    const vref$$15 = x$$56.fields[2];
    const g$$31 = x$$56.fields[0];
    return (0, _tast.valRefInThisAssembly)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$31), vref$$15);
  } else {
    return false;
  }
}

MethInfo.prototype.toString = function () {
  const x$$57 = this;
  return MethInfo$$get_ApparentEnclosingType(x$$57).toString() + MethInfo$$get_LogicalName(x$$57);
};

function MethInfo$$get_DeclaringTypeInst(x$$58) {
  if (MethInfo$$get_IsExtensionMember(x$$58)) {
    return (0, _Types.L)();
  } else {
    return (0, _TastOps.argsOfAppTy)(MethInfo$$get_TcGlobals(x$$58), MethInfo$$get_ApparentEnclosingAppType(x$$58));
  }
}

function MethInfo$$get_TcGlobals(x$$59) {
  switch (x$$59.tag) {
    case 0:
      {
        const g$$33 = x$$59.fields[0];
        return g$$33;
      }

    case 2:
      {
        const g$$34 = x$$59.fields[0];
        return g$$34;
      }

    default:
      {
        const g$$32 = x$$59.fields[0];
        return g$$32;
      }
  }
}

function MethInfo$$get_FormalMethodTypars(x$$60) {
  switch (x$$60.tag) {
    case 0:
      {
        const vref$$16 = x$$60.fields[2];
        const g$$35 = x$$60.fields[0];
        const ty$$35 = MethInfo$$get_ApparentEnclosingAppType(x$$60);
        const patternInput$$15 = AnalyzeTypeOfMemberVal(MethInfo$$get_IsCSharpStyleExtensionMember(x$$60), g$$35, ty$$35, vref$$16);
        return patternInput$$15[1];
      }

    case 2:
      {
        return (0, _Types.L)();
      }

    default:
      {
        const ilmeth = x$$60.fields[1];
        return ILMethInfo$$get_FormalMethodTypars(ilmeth);
      }
  }
}

function MethInfo$$get_FormalMethodInst(x$$61) {
  return (0, _TastOps.generalizeTypars)(MethInfo$$get_FormalMethodTypars(x$$61));
}

function MethInfo$$get_FormalMethodTyparInst(x$$62) {
  return (0, _TastOps.mkTyparInst)(MethInfo$$get_FormalMethodTypars(x$$62), MethInfo$$get_FormalMethodInst(x$$62));
}

function MethInfo$$get_XmlDoc(x$$63) {
  switch (x$$63.tag) {
    case 0:
      {
        const vref$$17 = x$$63.fields[2];
        return (0, _tast.ValRef$$get_XmlDoc)(vref$$17);
      }

    case 2:
      {
        return (0, _ast.XmlDoc$$$get_Empty)();
      }

    default:
      {
        return (0, _ast.XmlDoc$$$get_Empty)();
      }
  }
}

function MethInfo$$get_ArbitraryValRef(x$$64) {
  if (x$$64.tag === 0) {
    const vref$$18 = x$$64.fields[2];
    const _g = x$$64.fields[0];
    return vref$$18;
  } else {
    return null;
  }
}

function MethInfo$$get_NumArgs(x$$65) {
  switch (x$$65.tag) {
    case 0:
      {
        const vref$$19 = x$$65.fields[2];
        const g$$36 = x$$65.fields[0];
        return (0, _List.map)(_List.length, GetArgInfosOfMember(MethInfo$$get_IsCSharpStyleExtensionMember(x$$65), g$$36, vref$$19));
      }

    case 2:
      {
        return (0, _Types.L)(0, (0, _Types.L)());
      }

    default:
      {
        const ilminfo$$3 = x$$65.fields[1];
        return (0, _Types.L)(ILMethInfo$$get_NumParams(ilminfo$$3), (0, _Types.L)());
      }
  }
}

function MethInfo$$get_IsCurried(x$$66) {
  return (0, _List.length)(MethInfo$$get_NumArgs(x$$66)) > 1;
}

function MethInfo$$get_IsInstance(x$$67) {
  switch (x$$67.tag) {
    case 0:
      {
        const vref$$20 = x$$67.fields[2];

        if ((0, _tast.ValRef$$get_IsInstanceMember)(vref$$20)) {
          return true;
        } else {
          return MethInfo$$get_IsCSharpStyleExtensionMember(x$$67);
        }
      }

    case 2:
      {
        return false;
      }

    default:
      {
        const ilmeth$$1 = x$$67.fields[1];
        return ILMethInfo$$get_IsInstance(ilmeth$$1);
      }
  }
}

function MethInfo$$get_GenericArity(x$$68) {
  return (0, _List.length)(MethInfo$$get_FormalMethodTypars(x$$68));
}

function MethInfo$$get_IsProtectedAccessiblity(x$$69) {
  switch (x$$69.tag) {
    case 0:
      {
        return false;
      }

    case 2:
      {
        return false;
      }

    default:
      {
        const ilmeth$$2 = x$$69.fields[1];
        return ILMethInfo$$get_IsProtectedAccessibility(ilmeth$$2);
      }
  }
}

function MethInfo$$get_IsVirtual(x$$70) {
  switch (x$$70.tag) {
    case 0:
      {
        const vref$$21 = x$$70.fields[2];
        return ValRef$002Eget_IsVirtualMember(vref$$21);
      }

    case 2:
      {
        return false;
      }

    default:
      {
        const ilmeth$$3 = x$$70.fields[1];
        return ILMethInfo$$get_IsVirtual(ilmeth$$3);
      }
  }
}

function MethInfo$$get_IsConstructor(x$$71) {
  switch (x$$71.tag) {
    case 0:
      {
        const vref$$22 = x$$71.fields[2];
        const _g$$1 = x$$71.fields[0];
        return (0, _Util.equals)((0, _tast.ValRef$$get_MemberInfo)(vref$$22).MemberFlags.MemberKind, new _ast.MemberKind(1, "Constructor"));
      }

    case 2:
      {
        return true;
      }

    default:
      {
        const ilmeth$$4 = x$$71.fields[1];
        return ILMethInfo$$get_IsConstructor(ilmeth$$4);
      }
  }
}

function MethInfo$$get_IsClassConstructor(x$$72) {
  switch (x$$72.tag) {
    case 0:
      {
        const vref$$23 = x$$72.fields[2];
        const matchValue$$14 = (0, _tast.ValRef$$get_TryDeref)(vref$$23);

        if (matchValue$$14.tag === 0) {
          const x$$73 = matchValue$$14.fields[0];
          return (0, _tast.Val$$get_IsClassConstructor)(x$$73);
        } else {
          return false;
        }
      }

    case 2:
      {
        return false;
      }

    default:
      {
        const ilmeth$$5 = x$$72.fields[1];
        return ILMethInfo$$get_IsClassConstructor(ilmeth$$5);
      }
  }
}

function MethInfo$$get_IsDispatchSlot(x$$74) {
  switch (x$$74.tag) {
    case 0:
      {
        const x$$75 = x$$74;
        const vref$$24 = x$$74.fields[2];
        const g$$37 = x$$74.fields[0];

        if ((0, _TastOps.isInterfaceTy)(g$$37, MethInfo$$get_ApparentEnclosingType(x$$75))) {
          return true;
        } else {
          return (0, _tast.ValRef$$get_MemberInfo)(vref$$24).MemberFlags.IsDispatchSlot;
        }
      }

    case 2:
      {
        return false;
      }

    default:
      {
        const ilmeth$$6 = x$$74.fields[1];
        const _g$$2 = x$$74.fields[0];
        return ILMethInfo$$get_IsVirtual(ilmeth$$6);
      }
  }
}

function MethInfo$$get_IsFinal(x$$76) {
  if (!MethInfo$$get_IsVirtual(x$$76)) {
    return true;
  } else {
    switch (x$$76.tag) {
      case 0:
        {
          const _vref = x$$76.fields[2];
          const _g$$3 = x$$76.fields[0];
          return false;
        }

      case 2:
        {
          return true;
        }

      default:
        {
          const ilmeth$$7 = x$$76.fields[1];
          return ILMethInfo$$get_IsFinal(ilmeth$$7);
        }
    }
  }
}

function MethInfo$$get_IsAbstract(minfo) {
  switch (minfo.tag) {
    case 0:
      {
        const vref$$25 = minfo.fields[2];
        const g$$38 = minfo.fields[0];

        if ((0, _TastOps.isInterfaceTy)(g$$38, MethInfo$$get_ApparentEnclosingType(minfo))) {
          return true;
        } else {
          return ValRef$002Eget_IsDispatchSlotMember(vref$$25);
        }
      }

    case 2:
      {
        return false;
      }

    default:
      {
        const ilmeth$$8 = minfo.fields[1];
        return ILMethInfo$$get_IsAbstract(ilmeth$$8);
      }
  }
}

function MethInfo$$get_IsNewSlot(x$$77) {
  if ((0, _TastOps.isInterfaceTy)(MethInfo$$get_TcGlobals(x$$77), MethInfo$$get_ApparentEnclosingType(x$$77))) {
    return true;
  } else if (MethInfo$$get_IsVirtual(x$$77)) {
    switch (x$$77.tag) {
      case 0:
        {
          const vref$$26 = x$$77.fields[2];
          return ValRef$002Eget_IsDispatchSlotMember(vref$$26);
        }

      case 2:
        {
          return false;
        }

      default:
        {
          const x$$78 = x$$77.fields[1];
          return ILMethInfo$$get_IsNewSlot(x$$78);
        }
    }
  } else {
    return false;
  }
}

function MethInfo$$get_IsFSharpExplicitInterfaceImplementation(x$$79) {
  switch (x$$79.tag) {
    case 0:
      {
        const vref$$27 = x$$79.fields[2];
        const g$$39 = x$$79.fields[0];
        return ValRef$002EIsFSharpExplicitInterfaceImplementation$$2AE8EA0C(vref$$27, g$$39);
      }

    case 2:
      {
        return false;
      }

    default:
      {
        return false;
      }
  }
}

function MethInfo$$get_IsDefiniteFSharpOverride(x$$80) {
  switch (x$$80.tag) {
    case 0:
      {
        const vref$$28 = x$$80.fields[2];
        return ValRef$002Eget_IsDefiniteFSharpOverrideMember(vref$$28);
      }

    case 2:
      {
        return false;
      }

    default:
      {
        return false;
      }
  }
}

function MethInfo$$get_ImplementedSlotSignatures(x$$81) {
  if (x$$81.tag === 0) {
    const vref$$29 = x$$81.fields[2];
    return ValRef$002Eget_ImplementedSlotSignatures(vref$$29);
  } else {
    throw new Error("not supported");
  }
}

function MethInfo$$get_IsExtensionMember(x$$82) {
  var $target$$52, pri$$2, vref$$30;

  if (x$$82.tag === 0) {
    $target$$52 = 0;
    pri$$2 = x$$82.fields[3];
    vref$$30 = x$$82.fields[2];
  } else if (x$$82.tag === 1) {
    if (x$$82.fields[2] != null) {
      $target$$52 = 1;
    } else {
      $target$$52 = 2;
    }
  } else {
    $target$$52 = 2;
  }

  switch ($target$$52) {
    case 0:
      {
        if (pri$$2 != null) {
          return true;
        } else {
          return (0, _tast.ValRef$$get_IsExtensionMember)(vref$$30);
        }
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

function MethInfo$$ObjArgNeedsAddress$$73F6E43C(x$$83, amap$$23, m$$26) {
  if (MethInfo$$get_IsStruct(x$$83) ? !MethInfo$$get_IsExtensionMember(x$$83) : false) {
    return true;
  } else {
    const matchValue$$15 = MethInfo$$GetObjArgTypes$$Z5D984B3C(x$$83, amap$$23, m$$26, MethInfo$$get_FormalMethodInst(x$$83));
    var $target$$53, h;

    if (matchValue$$15.tail != null) {
      if (matchValue$$15.tail.tail == null) {
        $target$$53 = 0;
        h = matchValue$$15.head;
      } else {
        $target$$53 = 1;
      }
    } else {
      $target$$53 = 1;
    }

    switch ($target$$53) {
      case 0:
        {
          return (0, _TastOps.isByrefTy)((0, _import.ImportMap$$get_g)(amap$$23), h);
        }

      case 1:
        {
          return false;
        }
    }
  }
}

function MethInfo$$get_IsFSharpStyleExtensionMember(x$$84) {
  if (x$$84.tag === 0) {
    const vref$$31 = x$$84.fields[2];
    return (0, _tast.ValRef$$get_IsExtensionMember)(vref$$31);
  } else {
    return false;
  }
}

function MethInfo$$get_IsCSharpStyleExtensionMember(x$$85) {
  var $target$$54, vref$$32;

  if (x$$85.tag === 0) {
    if (x$$85.fields[3] != null) {
      $target$$54 = 0;
      vref$$32 = x$$85.fields[2];
    } else {
      $target$$54 = 2;
    }
  } else if (x$$85.tag === 1) {
    if (x$$85.fields[2] != null) {
      $target$$54 = 1;
    } else {
      $target$$54 = 2;
    }
  } else {
    $target$$54 = 2;
  }

  switch ($target$$54) {
    case 0:
      {
        return !(0, _tast.ValRef$$get_IsExtensionMember)(vref$$32);
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

function MethInfo$$AdjustUserTypeInstForFSharpStyleIndexedExtensionMembers$$50B4DF78(x$$86, tyargs) {
  return (0, _List.append)(MethInfo$$get_IsFSharpStyleExtensionMember(x$$86) ? (0, _TastOps.argsOfAppTy)(MethInfo$$get_TcGlobals(x$$86), MethInfo$$get_ApparentEnclosingAppType(x$$86)) : (0, _Types.L)(), tyargs);
}

function MethInfo$$get_IsFSharpEventPropertyMethod(x$$87) {
  if (x$$87.tag === 0) {
    const vref$$33 = x$$87.fields[2];
    const g$$40 = x$$87.fields[0];
    return ValRef$002EIsFSharpEventProperty$$2AE8EA0C(vref$$33, g$$40);
  } else {
    return false;
  }
}

function MethInfo$$get_IsNullary(x$$88) {
  return (0, _Util.equals)(MethInfo$$get_NumArgs(x$$88), (0, _Types.L)(0, (0, _Types.L)()));
}

function MethInfo$$get_IsStruct(x$$89) {
  return (0, _TastOps.isStructTy)(MethInfo$$get_TcGlobals(x$$89), MethInfo$$get_ApparentEnclosingType(x$$89));
}

function MethInfo$$$CreateILMeth$$Z136523CF(amap$$24, m$$27, ty$$36, md$$2) {
  const tinfo = ILTypeInfo$$$FromType((0, _import.ImportMap$$get_g)(amap$$24), ty$$36);
  const mtps$$2 = (0, _import.ImportILGenericParameters)(function () {
    return amap$$24;
  }, m$$27, ILTypeInfo$$get_ILScopeRef(tinfo), ILTypeInfo$$get_TypeInstOfRawMetadata(tinfo), (0, _il.ILMethodDef$$get_GenericParams)(md$$2));
  return new MethInfo(1, "ILMeth", (0, _import.ImportMap$$get_g)(amap$$24), new ILMethInfo(0, "ILMethInfo", (0, _import.ImportMap$$get_g)(amap$$24), ty$$36, null, md$$2, mtps$$2), null);
}

function MethInfo$$$CreateILExtensionMeth$$Z447F6EC6(amap$$25, m$$28, apparentTy, declaringTyconRef, extMethPri, md$$3) {
  const scoref$$8 = (0, _il.ILTypeRef$$get_Scope)((0, _tast.EntityRef$$get_CompiledRepresentationForNamedType)(declaringTyconRef));
  const mtps$$3 = (0, _import.ImportILGenericParameters)(function () {
    return amap$$25;
  }, m$$28, scoref$$8, (0, _Types.L)(), (0, _il.ILMethodDef$$get_GenericParams)(md$$3));
  return new MethInfo(1, "ILMeth", (0, _import.ImportMap$$get_g)(amap$$25), new ILMethInfo(0, "ILMethInfo", (0, _import.ImportMap$$get_g)(amap$$25), apparentTy, declaringTyconRef, md$$3, mtps$$3), extMethPri);
}

function MethInfo$$$MethInfosUseIdenticalDefinitions(x1, x2) {
  const matchValue$$16 = [x1, x2];
  var $target$$55, x1$$1, x2$$1, g$$41, vref1, vref2;

  if (matchValue$$16[0].tag === 0) {
    if (matchValue$$16[1].tag === 0) {
      $target$$55 = 1;
      g$$41 = matchValue$$16[0].fields[0];
      vref1 = matchValue$$16[0].fields[2];
      vref2 = matchValue$$16[1].fields[2];
    } else {
      $target$$55 = 3;
    }
  } else if (matchValue$$16[0].tag === 2) {
    if (matchValue$$16[1].tag === 2) {
      $target$$55 = 2;
    } else {
      $target$$55 = 3;
    }
  } else if (matchValue$$16[1].tag === 1) {
    $target$$55 = 0;
    x1$$1 = matchValue$$16[0].fields[1];
    x2$$1 = matchValue$$16[1].fields[1];
  } else {
    $target$$55 = 3;
  }

  switch ($target$$55) {
    case 0:
      {
        return ILMethInfo$$get_RawMetadata(x1$$1) === ILMethInfo$$get_RawMetadata(x2$$1);
      }

    case 1:
      {
        return (0, _TastOps.valRefEq)(g$$41, vref1, vref2);
      }

    case 2:
      {
        return (0, _TastOps.tyconRefEq)(MethInfo$$get_TcGlobals(x1), MethInfo$$get_DeclaringTyconRef(x1), MethInfo$$get_DeclaringTyconRef(x2));
      }

    case 3:
      {
        return false;
      }
  }
}

function MethInfo$$ComputeHashCode(x$$91) {
  switch (x$$91.tag) {
    case 0:
      {
        const vref$$34 = x$$91.fields[2];
        return (0, _Util.structuralHash)((0, _tast.ValRef$$get_LogicalName)(vref$$34)) | 0;
      }

    case 2:
      {
        const _ty = x$$91.fields[1];
        return 34892;
      }

    default:
      {
        const x1$$2 = x$$91.fields[1];
        return (0, _Util.structuralHash)((0, _il.ILMethodDef$$get_Name)(ILMethInfo$$get_RawMetadata(x1$$2))) | 0;
      }
  }
}

function MethInfo$$Instantiate$$7463DE7B(x$$92, amap$$26, m$$29, inst$$3) {
  switch (x$$92.tag) {
    case 0:
      {
        const vref$$35 = x$$92.fields[2];
        const ty$$39 = x$$92.fields[1];
        const pri$$4 = x$$92.fields[3];
        const g$$42 = x$$92.fields[0];
        return new MethInfo(0, "FSMeth", g$$42, (0, _TastOps.instType)(inst$$3, ty$$39), vref$$35, pri$$4);
      }

    case 2:
      {
        const ty$$40 = x$$92.fields[1];
        const g$$43 = x$$92.fields[0];
        return new MethInfo(2, "DefaultStructCtor", g$$43, (0, _TastOps.instType)(inst$$3, ty$$40));
      }

    default:
      {
        const pri$$3 = x$$92.fields[2];
        const ilminfo$$4 = x$$92.fields[1];
        const _g$$4 = x$$92.fields[0];

        if (ilminfo$$4.fields[2] != null) {
          const ty$$38 = ilminfo$$4.fields[1];
          const md$$5 = ilminfo$$4.fields[3];
          const declaringTyconRef$$1 = ilminfo$$4.fields[2];
          return MethInfo$$$CreateILExtensionMeth$$Z447F6EC6(amap$$26, m$$29, (0, _TastOps.instType)(inst$$3, ty$$38), declaringTyconRef$$1, pri$$3, md$$5);
        } else {
          const ty$$37 = ilminfo$$4.fields[1];
          const md$$4 = ilminfo$$4.fields[3];
          return MethInfo$$$CreateILMeth$$Z136523CF(amap$$26, m$$29, (0, _TastOps.instType)(inst$$3, ty$$37), md$$4);
        }
      }
  }
}

function MethInfo$$GetCompiledReturnTy$$Z5D984B3C(x$$93, amap$$27, m$$30, minst$$9) {
  switch (x$$93.tag) {
    case 0:
      {
        const vref$$36 = x$$93.fields[2];
        const g$$44 = x$$93.fields[0];
        const ty$$41 = MethInfo$$get_ApparentEnclosingAppType(x$$93);
        const inst$$4 = GetInstantiationForMemberVal(g$$44, MethInfo$$get_IsCSharpStyleExtensionMember(x$$93), ty$$41, vref$$36, minst$$9);
        const patternInput$$16 = AnalyzeTypeOfMemberVal(MethInfo$$get_IsCSharpStyleExtensionMember(x$$93), g$$44, ty$$41, vref$$36);
        return (0, _Option.defaultArg)(patternInput$$16[2], null, function mapping$$6(arg10$0040$$7) {
          return (0, _TastOps.instType)(inst$$4, arg10$0040$$7);
        });
      }

    case 2:
      {
        return null;
      }

    default:
      {
        const ilminfo$$5 = x$$93.fields[1];
        const _g$$5 = x$$93.fields[0];
        return ILMethInfo$$GetCompiledReturnTy$$Z5D984B3C(ilminfo$$5, amap$$27, m$$30, minst$$9);
      }
  }
}

function MethInfo$$GetFSharpReturnTy$$Z5D984B3C(x$$94, amap$$28, m$$31, minst$$10) {
  return (0, _TastOps.GetFSharpViewOfReturnType)((0, _import.ImportMap$$get_g)(amap$$28), MethInfo$$GetCompiledReturnTy$$Z5D984B3C(x$$94, amap$$28, m$$31, minst$$10));
}

function MethInfo$$GetParamTypes$$Z5D984B3C(x$$95, amap$$29, m$$32, minst$$11) {
  switch (x$$95.tag) {
    case 0:
      {
        const vref$$37 = x$$95.fields[2];
        const ty$$42 = x$$95.fields[1];
        const g$$45 = x$$95.fields[0];
        const paramTypes$$1 = ParamNameAndType$$$FromMember(MethInfo$$get_IsCSharpStyleExtensionMember(x$$95), g$$45, vref$$37);
        const inst$$5 = GetInstantiationForMemberVal(g$$45, MethInfo$$get_IsCSharpStyleExtensionMember(x$$95), ty$$42, vref$$37, minst$$11);
        return (0, _illib.List$$$mapSquared)(function f$$8(_arg1$$2) {
          const ty$$43 = _arg1$$2.fields[1];
          return (0, _TastOps.instType)(inst$$5, ty$$43);
        }, paramTypes$$1);
      }

    case 2:
      {
        return (0, _Types.L)();
      }

    default:
      {
        const ilminfo$$6 = x$$95.fields[1];
        const _g$$6 = x$$95.fields[0];
        return (0, _Types.L)(ILMethInfo$$GetParamTypes$$Z5D984B3C(ilminfo$$6, amap$$29, m$$32, minst$$11), (0, _Types.L)());
      }
  }
}

function MethInfo$$GetObjArgTypes$$Z5D984B3C(x$$96, amap$$30, m$$33, minst$$12) {
  switch (x$$96.tag) {
    case 0:
      {
        const vref$$38 = x$$96.fields[2];
        const g$$46 = x$$96.fields[0];

        if (MethInfo$$get_IsInstance(x$$96)) {
          const ty$$44 = MethInfo$$get_ApparentEnclosingAppType(x$$96);

          if (MethInfo$$get_IsExtensionMember(x$$96)) {
            const inst$$6 = GetInstantiationForMemberVal(g$$46, MethInfo$$get_IsCSharpStyleExtensionMember(x$$96), ty$$44, vref$$38, minst$$12);
            const rawObjTy = GetObjTypeOfInstanceExtensionMethod(g$$46, vref$$38);
            return (0, _Types.L)((0, _TastOps.instType)(inst$$6, rawObjTy), (0, _Types.L)());
          } else {
            return (0, _Types.L)(ty$$44, (0, _Types.L)());
          }
        } else {
          return (0, _Types.L)();
        }
      }

    case 2:
      {
        return (0, _Types.L)();
      }

    default:
      {
        const ilminfo$$7 = x$$96.fields[1];
        return ILMethInfo$$GetObjArgTypes$$Z5D984B3C(ilminfo$$7, amap$$30, m$$33, minst$$12);
      }
  }
}

function MethInfo$$GetParamAttribs$$73F6E43C(x$$97, amap$$31, m$$34) {
  switch (x$$97.tag) {
    case 0:
      {
        const vref$$39 = x$$97.fields[2];
        const g$$48 = x$$97.fields[0];
        return (0, _illib.List$$$mapSquared)(function f$$9(tupledArg$$2) {
          var ty2$$4, m$$35, copyOfStruct, optTy;
          const isParamArrayArg$$1 = (0, _TastOps.HasFSharpAttribute)(g$$48, (0, _TcGlobals.TcGlobals$$get_attrib_ParamArrayAttribute)(g$$48), tupledArg$$2[1].Attribs);
          let reflArgInfo$$1;
          const matchValue$$19 = (0, _TastOps.TryFindFSharpBoolAttributeAssumeFalse)(g$$48, (0, _TcGlobals.TcGlobals$$get_attrib_ReflectedDefinitionAttribute)(g$$48), tupledArg$$2[1].Attribs);

          if (matchValue$$19 == null) {
            reflArgInfo$$1 = new ReflectedArgInfo(0, "None");
          } else {
            const b$$1 = matchValue$$19;
            reflArgInfo$$1 = new ReflectedArgInfo(1, "Quote", b$$1);
          }

          const isOutArg$$1 = ((0, _TastOps.HasFSharpAttribute)(g$$48, (0, _TcGlobals.TcGlobals$$get_attrib_OutAttribute)(g$$48), tupledArg$$2[1].Attribs) ? (0, _TastOps.isByrefTy)(g$$48, tupledArg$$2[0]) : false) ? true : (0, _TastOps.isOutByrefTy)(g$$48, tupledArg$$2[0]);
          const isInArg$$1 = ((0, _TastOps.HasFSharpAttribute)(g$$48, (0, _TcGlobals.TcGlobals$$get_attrib_InAttribute)(g$$48), tupledArg$$2[1].Attribs) ? (0, _TastOps.isByrefTy)(g$$48, tupledArg$$2[0]) : false) ? true : (0, _TastOps.isInByrefTy)(g$$48, tupledArg$$2[0]);
          const isCalleeSideOptArg = (0, _TastOps.HasFSharpAttribute)(g$$48, (0, _TcGlobals.TcGlobals$$get_attrib_OptionalArgumentAttribute)(g$$48), tupledArg$$2[1].Attribs);
          const isCallerSideOptArg = (0, _TastOps.HasFSharpAttributeOpt)(g$$48, (0, _TcGlobals.TcGlobals$$get_attrib_OptionalAttribute)(g$$48), tupledArg$$2[1].Attribs);
          let optArgInfo$$1;

          if (isCalleeSideOptArg) {
            optArgInfo$$1 = new OptionalArgInfo(1, "CalleeSide");
          } else if (isCallerSideOptArg) {
            const defaultParameterValueAttribute = (0, _TastOps.TryFindFSharpAttributeOpt)(g$$48, (0, _TcGlobals.TcGlobals$$get_attrib_DefaultParameterValueAttribute)(g$$48), tupledArg$$2[1].Attribs);

            if (defaultParameterValueAttribute != null) {
              const attr = defaultParameterValueAttribute;
              const defaultValue = OptionalArgInfo$$$ValueOfDefaultParameterValueAttrib$$Z49F0139A(attr);
              var $target$$56, m$$36, ty2$$5;

              if (defaultValue != null) {
                if (defaultValue.tag === 0) {
                  if (ty2$$4 = defaultValue.fields[2], (m$$35 = defaultValue.fields[1], !(0, _TastOps.typeEquiv)(g$$48, ty2$$4, tupledArg$$2[0]))) {
                    $target$$56 = 0;
                    m$$36 = defaultValue.fields[1];
                    ty2$$5 = defaultValue.fields[2];
                  } else {
                    $target$$56 = 1;
                  }
                } else {
                  $target$$56 = 1;
                }
              } else {
                $target$$56 = 1;
              }

              switch ($target$$56) {
                case 0:
                  {
                    (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefaultParameterValueNotAppropriateForArgument)(), m$$36));
                    optArgInfo$$1 = new OptionalArgInfo(0, "NotOptional");
                    break;
                  }

                case 1:
                  {
                    var $target$$57, fi$$1;

                    if (defaultValue != null) {
                      if (defaultValue.tag === 0) {
                        const activePatternResult37132 = (0, _TastOps.$007CConstToILFieldInit$007C_$007C)(defaultValue.fields[0]);

                        if (activePatternResult37132 != null) {
                          $target$$57 = 0;
                          fi$$1 = activePatternResult37132;
                        } else {
                          $target$$57 = 1;
                        }
                      } else {
                        $target$$57 = 1;
                      }
                    } else {
                      $target$$57 = 1;
                    }

                    switch ($target$$57) {
                      case 0:
                        {
                          optArgInfo$$1 = new OptionalArgInfo(2, "CallerSide", new OptionalArgCallerSideValue(0, "Constant", fi$$1));
                          break;
                        }

                      case 1:
                        {
                          optArgInfo$$1 = new OptionalArgInfo(0, "NotOptional");
                          break;
                        }
                    }

                    break;
                  }
              }
            } else {
              optArgInfo$$1 = new OptionalArgInfo(2, "CallerSide", (0, _TastOps.isObjTy)(g$$48, tupledArg$$2[0]) ? new OptionalArgCallerSideValue(2, "MissingValue") : new OptionalArgCallerSideValue(1, "DefaultValue"));
            }
          } else {
            optArgInfo$$1 = new OptionalArgInfo(0, "NotOptional");
          }

          const isCallerLineNumberArg$$1 = (0, _TastOps.HasFSharpAttribute)(g$$48, (0, _TcGlobals.TcGlobals$$get_attrib_CallerLineNumberAttribute)(g$$48), tupledArg$$2[1].Attribs);
          const isCallerFilePathArg$$1 = (0, _TastOps.HasFSharpAttribute)(g$$48, (0, _TcGlobals.TcGlobals$$get_attrib_CallerFilePathAttribute)(g$$48), tupledArg$$2[1].Attribs);
          const isCallerMemberNameArg$$1 = (0, _TastOps.HasFSharpAttribute)(g$$48, (0, _TcGlobals.TcGlobals$$get_attrib_CallerMemberNameAttribute)(g$$48), tupledArg$$2[1].Attribs);
          let callerInfo$$1;
          const matchValue$$20 = [isCallerLineNumberArg$$1, isCallerFilePathArg$$1, isCallerMemberNameArg$$1];
          var $target$$58;

          if (matchValue$$20[0]) {
            if (matchValue$$20[1]) {
              $target$$58 = 5;
            } else if (matchValue$$20[2]) {
              $target$$58 = 5;
            } else {
              $target$$58 = 1;
            }
          } else if (matchValue$$20[1]) {
            if (matchValue$$20[2]) {
              $target$$58 = 4;
            } else {
              $target$$58 = 2;
            }
          } else if (matchValue$$20[2]) {
            $target$$58 = 3;
          } else {
            $target$$58 = 0;
          }

          switch ($target$$58) {
            case 0:
              {
                callerInfo$$1 = new CallerInfo(0, "NoCallerInfo");
                break;
              }

            case 1:
              {
                callerInfo$$1 = new CallerInfo(1, "CallerLineNumber");
                break;
              }

            case 2:
              {
                callerInfo$$1 = new CallerInfo(3, "CallerFilePath");
                break;
              }

            case 3:
              {
                callerInfo$$1 = new CallerInfo(2, "CallerMemberName");
                break;
              }

            case 4:
              {
                const matchValue$$21 = (0, _TastOps.TryFindFSharpAttribute)(g$$48, (0, _TcGlobals.TcGlobals$$get_attrib_CallerMemberNameAttribute)(g$$48), tupledArg$$2[1].Attribs);

                if (matchValue$$21 != null) {
                  const callerMemberNameAttributeRange = matchValue$$21.fields[6];
                  (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$CallerMemberNameIsOverriden$$Z721C83C5)((copyOfStruct = tupledArg$$2[1].Name, (0, _ast.Ident$$get_idText)(copyOfStruct))), callerMemberNameAttributeRange));
                  callerInfo$$1 = new CallerInfo(3, "CallerFilePath");
                } else {
                  throw new Error("Impossible");
                }

                break;
              }

            case 5:
              {
                const matchValue$$22 = (0, _TastOps.tryDestOptionTy)(g$$48, tupledArg$$2[0]);
                var $target$$59, optTy$$1;

                if (matchValue$$22 != null) {
                  if (optTy = matchValue$$22, (0, _TastOps.typeEquiv)(g$$48, (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$48), optTy)) {
                    $target$$59 = 0;
                    optTy$$1 = matchValue$$22;
                  } else {
                    $target$$59 = 1;
                  }
                } else {
                  $target$$59 = 1;
                }

                switch ($target$$59) {
                  case 0:
                    {
                      callerInfo$$1 = new CallerInfo(3, "CallerFilePath");
                      break;
                    }

                  case 1:
                    {
                      callerInfo$$1 = new CallerInfo(1, "CallerLineNumber");
                      break;
                    }
                }

                break;
              }
          }

          return [isParamArrayArg$$1, isInArg$$1, isOutArg$$1, optArgInfo$$1, callerInfo$$1, reflArgInfo$$1];
        }, GetArgInfosOfMember(MethInfo$$get_IsCSharpStyleExtensionMember(x$$97), g$$48, vref$$39));
      }

    case 2:
      {
        return (0, _Types.L)((0, _Types.L)(), (0, _Types.L)());
      }

    default:
      {
        const ilMethInfo = x$$97.fields[1];
        const g$$47 = x$$97.fields[0];
        return (0, _Types.L)((0, _List.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.collect)(function (p$$4) {
            const isParamArrayArg = (0, _TastOps.TryFindILAttribute)((0, _TcGlobals.TcGlobals$$get_attrib_ParamArrayAttribute)(g$$47), (0, _il.ILParameter$$get_CustomAttrs)(p$$4));
            let reflArgInfo;
            const matchValue$$17 = (0, _TastOps.TryDecodeILAttribute)(g$$47, (0, _TcGlobals.BuiltinAttribInfo$$get_TypeRef)((0, _TcGlobals.TcGlobals$$get_attrib_ReflectedDefinitionAttribute)(g$$47)), (0, _il.ILParameter$$get_CustomAttrs)(p$$4));
            var $target$$60, b;

            if (matchValue$$17 != null) {
              if (matchValue$$17[0].tail != null) {
                if (matchValue$$17[0].head.tag === 1) {
                  if (matchValue$$17[0].tail.tail == null) {
                    $target$$60 = 0;
                    b = matchValue$$17[0].head.fields[0];
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
              $target$$60 = 2;
            }

            switch ($target$$60) {
              case 0:
                {
                  reflArgInfo = new ReflectedArgInfo(1, "Quote", b);
                  break;
                }

              case 1:
                {
                  reflArgInfo = new ReflectedArgInfo(1, "Quote", false);
                  break;
                }

              case 2:
                {
                  reflArgInfo = new ReflectedArgInfo(0, "None");
                  break;
                }
            }

            const isOutArg = p$$4.IsOut ? !p$$4.IsIn : false;
            const isInArg = p$$4.IsIn ? !p$$4.IsOut : false;
            const optArgInfo = OptionalArgInfo$$$FromILParameter(g$$47, amap$$31, m$$34, ILMethInfo$$get_MetadataScope(ilMethInfo), ILMethInfo$$get_DeclaringTypeInst(ilMethInfo), p$$4);
            const isCallerLineNumberArg = (0, _TastOps.TryFindILAttribute)((0, _TcGlobals.TcGlobals$$get_attrib_CallerLineNumberAttribute)(g$$47), (0, _il.ILParameter$$get_CustomAttrs)(p$$4));
            const isCallerFilePathArg = (0, _TastOps.TryFindILAttribute)((0, _TcGlobals.TcGlobals$$get_attrib_CallerFilePathAttribute)(g$$47), (0, _il.ILParameter$$get_CustomAttrs)(p$$4));
            const isCallerMemberNameArg = (0, _TastOps.TryFindILAttribute)((0, _TcGlobals.TcGlobals$$get_attrib_CallerMemberNameAttribute)(g$$47), (0, _il.ILParameter$$get_CustomAttrs)(p$$4));
            let callerInfo;
            const matchValue$$18 = [isCallerLineNumberArg, isCallerFilePathArg, isCallerMemberNameArg];
            var $target$$61;

            if (matchValue$$18[0]) {
              if (matchValue$$18[1]) {
                $target$$61 = 4;
              } else if (matchValue$$18[2]) {
                $target$$61 = 4;
              } else {
                $target$$61 = 1;
              }
            } else if (matchValue$$18[1]) {
              if (matchValue$$18[2]) {
                $target$$61 = 4;
              } else {
                $target$$61 = 2;
              }
            } else if (matchValue$$18[2]) {
              $target$$61 = 3;
            } else {
              $target$$61 = 0;
            }

            switch ($target$$61) {
              case 0:
                {
                  callerInfo = new CallerInfo(0, "NoCallerInfo");
                  break;
                }

              case 1:
                {
                  callerInfo = new CallerInfo(1, "CallerLineNumber");
                  break;
                }

              case 2:
                {
                  callerInfo = new CallerInfo(3, "CallerFilePath");
                  break;
                }

              case 3:
                {
                  callerInfo = new CallerInfo(2, "CallerMemberName");
                  break;
                }

              case 4:
                {
                  callerInfo = (0, _il.ILTypeRef$$get_FullName)((0, _il.ILType$$get_TypeRef)(p$$4.Type)) === "System.Int32" ? new CallerInfo(3, "CallerFilePath") : new CallerInfo(1, "CallerLineNumber");
                  break;
                }
            }

            return (0, _Seq.singleton)([isParamArrayArg, isInArg, isOutArg, optArgInfo, callerInfo, reflArgInfo]);
          }, ILMethInfo$$get_ParamMetadata(ilMethInfo));
        })), (0, _Types.L)());
      }
  }
}

function MethInfo$$GetSlotSig$$73F6E43C(x$$98, amap$$32, m$$37) {
  switch (x$$98.tag) {
    case 0:
      {
        const vref$$40 = x$$98.fields[2];
        const g$$49 = x$$98.fields[0];
        const matchValue$$23 = (0, _tast.ValRef$$get_RecursiveValInfo)(vref$$40);
        var $target$$62;

        if (matchValue$$23.tag === 0) {
          if (matchValue$$23.fields[0]) {
            $target$$62 = 1;
          } else {
            $target$$62 = 0;
          }
        } else {
          $target$$62 = 1;
        }

        switch ($target$$62) {
          case 0:
            {
              (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$InvalidRecursiveReferenceToAbstractSlot)(), m$$37));
              break;
            }
        }

        const patternInput$$17 = (0, _TastOps.GetTypeOfMemberInMemberForm)(g$$49, vref$$40);
        const formalEnclosingTypars$$1 = (0, _tast.EntityRef$$Typars$$4DB9192C)(MethInfo$$get_ApparentEnclosingTyconRef(x$$98), m$$37);
        const patternInput$$18 = (0, _List.splitAt)((0, _List.length)(formalEnclosingTypars$$1), patternInput$$17[0]);
        const patternInput$$19 = (0, _TastOps.mkTyparToTyparRenaming)(patternInput$$18[0], formalEnclosingTypars$$1);
        const formalParams = (0, _illib.List$$$mapSquared)(function f$$11($arg$$4) {
          const tupledArg$$4 = (0, _lib.map1Of2)(function f$$10(arg10$0040$$10) {
            return (0, _TastOps.instType)(patternInput$$19[0], arg10$0040$$10);
          }, $arg$$4[0], $arg$$4[1]);
          return MakeSlotParam(tupledArg$$4[0], tupledArg$$4[1]);
        }, GetArgInfosOfMember(MethInfo$$get_IsCSharpStyleExtensionMember(x$$98), g$$49, vref$$40));
        const formalRetTy = (0, _Option.defaultArg)(patternInput$$17[2], null, function (arg10$0040$$11) {
          return (0, _TastOps.instType)(patternInput$$19[0], arg10$0040$$11);
        });
        return MakeSlotSig(MethInfo$$get_LogicalName(x$$98), MethInfo$$get_ApparentEnclosingType(x$$98), formalEnclosingTypars$$1, patternInput$$18[1], formalParams, formalRetTy);
      }

    case 2:
      {
        return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("no slotsig for DefaultStructCtor", m$$37));
      }

    default:
      {
        const g$$50 = MethInfo$$get_TcGlobals(x$$98);
        const tcref$$6 = (0, _TastOps.tcrefOfAppTy)(g$$50, MethInfo$$get_ApparentEnclosingAppType(x$$98));
        const formalEnclosingTyparsOrig = (0, _tast.EntityRef$$Typars$$4DB9192C)(tcref$$6, m$$37);
        const formalEnclosingTypars$$2 = (0, _tast.copyTypars)(formalEnclosingTyparsOrig);
        const patternInput$$20 = FixupNewTypars(m$$37, (0, _Types.L)(), (0, _Types.L)(), formalEnclosingTyparsOrig, formalEnclosingTypars$$2);
        const formalMethTypars$$1 = (0, _tast.copyTypars)(MethInfo$$get_FormalMethodTypars(x$$98));
        const patternInput$$21 = FixupNewTypars(m$$37, formalEnclosingTypars$$2, patternInput$$20[1], MethInfo$$get_FormalMethodTypars(x$$98), formalMethTypars$$1);
        let patternInput$$22;

        if (x$$98.tag === 1) {
          const ilminfo$$8 = x$$98.fields[1];
          const ftinfo = ILTypeInfo$$$FromType(g$$50, new _tast.TType(1, "TType_app", tcref$$6, patternInput$$20[1]));
          const formalRetTy$$1 = ImportReturnTypeFromMetaData(amap$$32, m$$37, (0, _il.ILMethodDef$$get_Return)(ILMethInfo$$get_RawMetadata(ilminfo$$8)).Type, ILTypeInfo$$get_ILScopeRef(ftinfo), ILTypeInfo$$get_TypeInstOfRawMetadata(ftinfo), patternInput$$21[1]);
          const formalParams$$1 = (0, _Types.L)((0, _List.ofSeq)((0, _Seq.delay)(function () {
            return (0, _Seq.collect)(function (p$$5) {
              const paramType = ImportILTypeFromMetadata(amap$$32, m$$37, ILTypeInfo$$get_ILScopeRef(ftinfo), ILTypeInfo$$get_TypeInstOfRawMetadata(ftinfo), patternInput$$21[1], p$$5.Type);
              return (0, _Seq.singleton)(new _tast.SlotParam(0, "TSlotParam", p$$5.Name, paramType, p$$5.IsIn, p$$5.IsOut, p$$5.IsOptional, (0, _Types.L)()));
            }, (0, _il.ILMethodDef$$get_Parameters)(ILMethInfo$$get_RawMetadata(ilminfo$$8)));
          })), (0, _Types.L)());
          patternInput$$22 = [formalRetTy$$1, formalParams$$1];
        } else {
          throw new Error("unreachable");
        }

        return MakeSlotSig(MethInfo$$get_LogicalName(x$$98), MethInfo$$get_ApparentEnclosingType(x$$98), formalEnclosingTypars$$2, formalMethTypars$$1, patternInput$$22[1], patternInput$$22[0]);
      }
  }
}

function MethInfo$$GetParamDatas$$Z5D984B3C(x$$99, amap$$33, m$$38, minst$$13) {
  let paramNamesAndTypes;

  switch (x$$99.tag) {
    case 0:
      {
        const vref$$41 = x$$99.fields[2];
        const g$$51 = x$$99.fields[0];
        const ty$$47 = MethInfo$$get_ApparentEnclosingAppType(x$$99);
        const items = ParamNameAndType$$$FromMember(MethInfo$$get_IsCSharpStyleExtensionMember(x$$99), g$$51, vref$$41);
        const inst$$7 = GetInstantiationForMemberVal(g$$51, MethInfo$$get_IsCSharpStyleExtensionMember(x$$99), ty$$47, vref$$41, minst$$13);
        paramNamesAndTypes = ParamNameAndType$$$InstantiateCurried(inst$$7, items);
        break;
      }

    case 2:
      {
        paramNamesAndTypes = (0, _Types.L)((0, _Types.L)(), (0, _Types.L)());
        break;
      }

    default:
      {
        const ilminfo$$9 = x$$99.fields[1];
        const _g$$7 = x$$99.fields[0];
        paramNamesAndTypes = (0, _Types.L)(ILMethInfo$$GetParamNamesAndTypes$$Z5D984B3C(ilminfo$$9, amap$$33, m$$38, minst$$13), (0, _Types.L)());
      }
  }

  const paramAttribs = MethInfo$$GetParamAttribs$$73F6E43C(x$$99, amap$$33, m$$38);
  return (0, _List.map2)(function mapping$$8(list1$$1, list2$$1) {
    return (0, _List.map2)(function mapping$$7(tupledArg$$5, _arg2) {
      const pty = _arg2.fields[1];
      const nmOpt = _arg2.fields[0];
      return new ParamData(0, "ParamData", tupledArg$$5[0], tupledArg$$5[1], tupledArg$$5[2], tupledArg$$5[3], tupledArg$$5[4], nmOpt, tupledArg$$5[5], pty);
    }, list1$$1, list2$$1);
  }, paramAttribs, paramNamesAndTypes);
}

function MethInfo$$HasParamArrayArg$$Z5D984B3C(x$$100, amap$$34, m$$39, minst$$14) {
  return (0, _illib.List$$$existsSquared)(function f$$12(_arg3) {
    const isParamArrayArg$$3 = _arg3.fields[0];
    return isParamArrayArg$$3;
  }, MethInfo$$GetParamDatas$$Z5D984B3C(x$$100, amap$$34, m$$39, minst$$14));
}

function MethInfo$$GetFormalTyparsOfDeclaringType$$4DB9192C(x$$101, m$$40) {
  if (MethInfo$$get_IsExtensionMember(x$$101)) {
    return (0, _Types.L)();
  } else if (x$$101.tag === 0) {
    const vref$$42 = x$$101.fields[2];
    const g$$52 = x$$101.fields[0];
    const ty$$48 = MethInfo$$get_ApparentEnclosingAppType(x$$101);
    const patternInput$$23 = AnalyzeTypeOfMemberVal(false, g$$52, ty$$48, vref$$42);
    return patternInput$$23[0];
  } else {
    return (0, _tast.EntityRef$$Typars$$4DB9192C)(MethInfo$$get_DeclaringTyconRef(x$$101), m$$40);
  }
}

const ILFieldInfo = (0, _Types.declare)(function ILFieldInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILFieldInfo = ILFieldInfo;

function ILFieldInfo$$get_ApparentEnclosingType(x$$102) {
  const tinfo$$1 = x$$102.fields[0];
  return ILTypeInfo$$get_ToType(tinfo$$1);
}

function ILFieldInfo$$get_ApparentEnclosingAppType(x$$103) {
  return ILFieldInfo$$get_ApparentEnclosingType(x$$103);
}

function ILFieldInfo$$get_ApparentEnclosingTyconRef(x$$104) {
  return (0, _TastOps.tcrefOfAppTy)(ILFieldInfo$$get_TcGlobals(x$$104), ILFieldInfo$$get_ApparentEnclosingAppType(x$$104));
}

function ILFieldInfo$$get_DeclaringTyconRef(x$$105) {
  return ILFieldInfo$$get_ApparentEnclosingTyconRef(x$$105);
}

function ILFieldInfo$$get_TcGlobals(x$$106) {
  const tinfo$$2 = x$$106.fields[0];
  return ILTypeInfo$$get_TcGlobals(tinfo$$2);
}

function ILFieldInfo$$get_ILTypeRef(x$$107) {
  const tinfo$$3 = x$$107.fields[0];
  return ILTypeInfo$$get_ILTypeRef(tinfo$$3);
}

function ILFieldInfo$$get_ScopeRef(x$$108) {
  return (0, _il.ILTypeRef$$get_Scope)(ILFieldInfo$$get_ILTypeRef(x$$108));
}

function ILFieldInfo$$get_TypeInst(x$$109) {
  const tinfo$$4 = x$$109.fields[0];
  return ILTypeInfo$$get_TypeInstOfRawMetadata(tinfo$$4);
}

function ILFieldInfo$$get_FieldName(x$$110) {
  const pd = x$$110.fields[1];
  return (0, _il.ILFieldDef$$get_Name)(pd);
}

function ILFieldInfo$$get_IsInitOnly(x$$111) {
  const pd$$1 = x$$111.fields[1];
  return (0, _il.ILFieldDef$$get_IsInitOnly)(pd$$1);
}

function ILFieldInfo$$get_IsValueType(x$$112) {
  const tinfo$$5 = x$$112.fields[0];
  return ILTypeInfo$$get_IsValueType(tinfo$$5);
}

function ILFieldInfo$$get_IsStatic(x$$113) {
  const pd$$2 = x$$113.fields[1];
  return (0, _il.ILFieldDef$$get_IsStatic)(pd$$2);
}

function ILFieldInfo$$get_IsSpecialName(x$$114) {
  const pd$$3 = x$$114.fields[1];
  return (0, _il.ILFieldDef$$get_IsSpecialName)(pd$$3);
}

function ILFieldInfo$$get_LiteralValue(x$$115) {
  const pd$$4 = x$$115.fields[1];

  if ((0, _il.ILFieldDef$$get_IsLiteral)(pd$$4)) {
    return (0, _il.ILFieldDef$$get_LiteralValue)(pd$$4);
  } else {
    return null;
  }
}

function ILFieldInfo$$get_ILFieldType(x$$116) {
  const fdef = x$$116.fields[1];
  return (0, _il.ILFieldDef$$get_FieldType)(fdef);
}

function ILFieldInfo$$FieldType$$73F6E43C(x$$117, amap$$35, m$$41) {
  const tinfo$$6 = x$$117.fields[0];
  const fdef$$1 = x$$117.fields[1];
  return ImportILTypeFromMetadata(amap$$35, m$$41, ILTypeInfo$$get_ILScopeRef(tinfo$$6), ILTypeInfo$$get_TypeInstOfRawMetadata(tinfo$$6), (0, _Types.L)(), (0, _il.ILFieldDef$$get_FieldType)(fdef$$1));
}

function ILFieldInfo$$$ILFieldInfosUseIdenticalDefinitions(x1$$3, x2$$2) {
  const matchValue$$24 = [x1$$3, x2$$2];
  const x2$$3 = matchValue$$24[1].fields[1];
  const x1$$4 = matchValue$$24[0].fields[1];
  return x1$$4 === x2$$3;
}

function ILFieldInfo$$get_ILFieldRef(x$$119) {
  return (0, _il.rescopeILFieldRef)(ILFieldInfo$$get_ScopeRef(x$$119), (0, _il.mkILFieldRef)(ILFieldInfo$$get_ILTypeRef(x$$119), ILFieldInfo$$get_FieldName(x$$119), ILFieldInfo$$get_ILFieldType(x$$119)));
}

function ILFieldInfo$$ComputeHashCode(x$$120) {
  return (0, _Util.structuralHash)(ILFieldInfo$$get_FieldName(x$$120));
}

ILFieldInfo.prototype.toString = function () {
  const x$$121 = this;
  return ILFieldInfo$$get_FieldName(x$$121);
};

const RecdFieldInfo = (0, _Types.declare)(function RecdFieldInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.RecdFieldInfo = RecdFieldInfo;

function RecdFieldInfo$$get_TypeInst(x$$122) {
  const tinst$$6 = x$$122.fields[0];
  return tinst$$6;
}

function RecdFieldInfo$$get_RecdFieldRef(x$$123) {
  const rfref = x$$123.fields[1];
  return rfref;
}

function RecdFieldInfo$$get_RecdField(x$$124) {
  return (0, _tast.RecdFieldRef$$get_RecdField)(RecdFieldInfo$$get_RecdFieldRef(x$$124));
}

function RecdFieldInfo$$get_IsStatic(x$$125) {
  return (0, _tast.RecdField$$get_IsStatic)(RecdFieldInfo$$get_RecdField(x$$125));
}

function RecdFieldInfo$$get_LiteralValue(x$$126) {
  return (0, _tast.RecdField$$get_LiteralValue)(RecdFieldInfo$$get_RecdField(x$$126));
}

function RecdFieldInfo$$get_TyconRef(x$$127) {
  return (0, _tast.RecdFieldRef$$get_TyconRef)(RecdFieldInfo$$get_RecdFieldRef(x$$127));
}

function RecdFieldInfo$$get_Tycon(x$$128) {
  return (0, _tast.RecdFieldRef$$get_Tycon)(RecdFieldInfo$$get_RecdFieldRef(x$$128));
}

function RecdFieldInfo$$get_Name(x$$129) {
  return (0, _tast.RecdField$$get_Name)(RecdFieldInfo$$get_RecdField(x$$129));
}

function RecdFieldInfo$$get_FieldType(x$$130) {
  return (0, _TastOps.actualTyOfRecdFieldRef)(RecdFieldInfo$$get_RecdFieldRef(x$$130), RecdFieldInfo$$get_TypeInst(x$$130));
}

function RecdFieldInfo$$get_DeclaringType(x$$131) {
  return new _tast.TType(1, "TType_app", (0, _tast.RecdFieldRef$$get_TyconRef)(RecdFieldInfo$$get_RecdFieldRef(x$$131)), RecdFieldInfo$$get_TypeInst(x$$131));
}

RecdFieldInfo.prototype.toString = function () {
  const x$$132 = this;
  return RecdFieldInfo$$get_TyconRef(x$$132).toString() + "::" + RecdFieldInfo$$get_Name(x$$132);
};

const UnionCaseInfo = (0, _Types.declare)(function UnionCaseInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.UnionCaseInfo = UnionCaseInfo;

function UnionCaseInfo$$get_TypeInst(x$$133) {
  const tinst$$7 = x$$133.fields[0];
  return tinst$$7;
}

function UnionCaseInfo$$get_UnionCaseRef(x$$134) {
  const ucref = x$$134.fields[1];
  return ucref;
}

function UnionCaseInfo$$get_UnionCase(x$$135) {
  return (0, _tast.UnionCaseRef$$get_UnionCase)(UnionCaseInfo$$get_UnionCaseRef(x$$135));
}

function UnionCaseInfo$$get_TyconRef(x$$136) {
  return (0, _tast.UnionCaseRef$$get_TyconRef)(UnionCaseInfo$$get_UnionCaseRef(x$$136));
}

function UnionCaseInfo$$get_Tycon(x$$137) {
  return (0, _tast.UnionCaseRef$$get_Tycon)(UnionCaseInfo$$get_UnionCaseRef(x$$137));
}

function UnionCaseInfo$$get_Name(x$$138) {
  return (0, _tast.UnionCase$$get_DisplayName)(UnionCaseInfo$$get_UnionCase(x$$138));
}

function UnionCaseInfo$$GetTyparInst$$4DB9192C(x$$139, m$$42) {
  return (0, _TastOps.mkTyparInst)((0, _tast.EntityRef$$Typars$$4DB9192C)(UnionCaseInfo$$get_TyconRef(x$$139), m$$42), UnionCaseInfo$$get_TypeInst(x$$139));
}

UnionCaseInfo.prototype.toString = function () {
  const x$$140 = this;
  return UnionCaseInfo$$get_TyconRef(x$$140).toString() + "::" + UnionCaseInfo$$get_Name(x$$140);
};

const ILPropInfo = (0, _Types.declare)(function ILPropInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILPropInfo = ILPropInfo;

function ILPropInfo$$get_TcGlobals(x$$141) {
  const tinfo$$7 = x$$141.fields[0];
  return ILTypeInfo$$get_TcGlobals(tinfo$$7);
}

function ILPropInfo$$get_ILTypeInfo(x$$142) {
  const tinfo$$8 = x$$142.fields[0];
  return tinfo$$8;
}

function ILPropInfo$$get_ApparentEnclosingType(x$$143) {
  const tinfo$$9 = x$$143.fields[0];
  return ILTypeInfo$$get_ToType(tinfo$$9);
}

function ILPropInfo$$get_ApparentEnclosingAppType(x$$144) {
  return (0, _TastOps.convertToTypeWithMetadataIfPossible)(ILPropInfo$$get_TcGlobals(x$$144), ILPropInfo$$get_ApparentEnclosingType(x$$144));
}

function ILPropInfo$$get_RawMetadata(x$$145) {
  const pd$$5 = x$$145.fields[1];
  return pd$$5;
}

function ILPropInfo$$get_PropertyName(x$$146) {
  return (0, _il.ILPropertyDef$$get_Name)(ILPropInfo$$get_RawMetadata(x$$146));
}

function ILPropInfo$$get_GetterMethod(x$$147) {
  const mdef = (0, _il.resolveILMethodRef)(ILTypeInfo$$get_RawMetadata(ILPropInfo$$get_ILTypeInfo(x$$147)), (0, _il.ILPropertyDef$$get_GetMethod)(ILPropInfo$$get_RawMetadata(x$$147)));
  return new ILMethInfo(0, "ILMethInfo", ILPropInfo$$get_TcGlobals(x$$147), ILTypeInfo$$get_ToType(ILPropInfo$$get_ILTypeInfo(x$$147)), null, mdef, (0, _Types.L)());
}

function ILPropInfo$$get_SetterMethod(x$$148) {
  const mdef$$1 = (0, _il.resolveILMethodRef)(ILTypeInfo$$get_RawMetadata(ILPropInfo$$get_ILTypeInfo(x$$148)), (0, _il.ILPropertyDef$$get_SetMethod)(ILPropInfo$$get_RawMetadata(x$$148)));
  return new ILMethInfo(0, "ILMethInfo", ILPropInfo$$get_TcGlobals(x$$148), ILTypeInfo$$get_ToType(ILPropInfo$$get_ILTypeInfo(x$$148)), null, mdef$$1, (0, _Types.L)());
}

function ILPropInfo$$get_HasGetter(x$$149) {
  return (0, _il.ILPropertyDef$$get_GetMethod)(ILPropInfo$$get_RawMetadata(x$$149)) != null;
}

function ILPropInfo$$get_HasSetter(x$$150) {
  return (0, _il.ILPropertyDef$$get_SetMethod)(ILPropInfo$$get_RawMetadata(x$$150)) != null;
}

function ILPropInfo$$get_IsStatic(x$$151) {
  return (0, _Util.equals)((0, _il.ILPropertyDef$$get_CallingConv)(ILPropInfo$$get_RawMetadata(x$$151)), new _il.ILThisConvention(2, "Static"));
}

function ILPropInfo$$get_IsVirtual(x$$152) {
  if (ILPropInfo$$get_HasGetter(x$$152) ? ILMethInfo$$get_IsVirtual(ILPropInfo$$get_GetterMethod(x$$152)) : false) {
    return true;
  } else if (ILPropInfo$$get_HasSetter(x$$152)) {
    return ILMethInfo$$get_IsVirtual(ILPropInfo$$get_SetterMethod(x$$152));
  } else {
    return false;
  }
}

function ILPropInfo$$get_IsNewSlot(x$$153) {
  if (ILPropInfo$$get_HasGetter(x$$153) ? ILMethInfo$$get_IsNewSlot(ILPropInfo$$get_GetterMethod(x$$153)) : false) {
    return true;
  } else if (ILPropInfo$$get_HasSetter(x$$153)) {
    return ILMethInfo$$get_IsNewSlot(ILPropInfo$$get_SetterMethod(x$$153));
  } else {
    return false;
  }
}

function ILPropInfo$$GetParamNamesAndTypes$$73F6E43C(x$$154, amap$$36, m$$43) {
  const tinfo$$10 = x$$154.fields[0];
  const pdef = x$$154.fields[1];
  return (0, _List.map)(function mapping$$9(ty$$49) {
    return new ParamNameAndType(0, "ParamNameAndType", null, ImportILTypeFromMetadata(amap$$36, m$$43, ILTypeInfo$$get_ILScopeRef(tinfo$$10), ILTypeInfo$$get_TypeInstOfRawMetadata(tinfo$$10), (0, _Types.L)(), ty$$49));
  }, (0, _il.ILPropertyDef$$get_Args)(pdef));
}

function ILPropInfo$$GetParamTypes$$73F6E43C(x$$155, amap$$37, m$$44) {
  const tinfo$$11 = x$$155.fields[0];
  const pdef$$1 = x$$155.fields[1];
  return (0, _List.map)(function mapping$$10(ty$$50) {
    return ImportILTypeFromMetadata(amap$$37, m$$44, ILTypeInfo$$get_ILScopeRef(tinfo$$11), ILTypeInfo$$get_TypeInstOfRawMetadata(tinfo$$11), (0, _Types.L)(), ty$$50);
  }, (0, _il.ILPropertyDef$$get_Args)(pdef$$1));
}

function ILPropInfo$$GetPropertyType$$73F6E43C(x$$156, amap$$38, m$$45) {
  const tinfo$$12 = x$$156.fields[0];
  const pdef$$2 = x$$156.fields[1];
  return ImportILTypeFromMetadata(amap$$38, m$$45, ILTypeInfo$$get_ILScopeRef(tinfo$$12), ILTypeInfo$$get_TypeInstOfRawMetadata(tinfo$$12), (0, _Types.L)(), (0, _il.ILPropertyDef$$get_PropertyType)(pdef$$2));
}

ILPropInfo.prototype.toString = function () {
  const x$$157 = this;
  return ILPropInfo$$get_ILTypeInfo(x$$157).toString() + "::" + ILPropInfo$$get_PropertyName(x$$157);
};

const PropInfo = (0, _Types.declare)(function PropInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.PropInfo = PropInfo;

function PropInfo$$get_ApparentEnclosingType(x$$158) {
  if (x$$158.tag === 0) {
    const ty$$51 = x$$158.fields[1];
    return ty$$51;
  } else {
    const ilpinfo = x$$158.fields[0];
    return ILTypeInfo$$get_ToType(ILPropInfo$$get_ILTypeInfo(ilpinfo));
  }
}

function PropInfo$$get_ApparentEnclosingAppType(x$$159) {
  if (x$$159.tag === 1) {
    const ilpinfo$$1 = x$$159.fields[0];
    return ILPropInfo$$get_ApparentEnclosingAppType(ilpinfo$$1);
  } else {
    return PropInfo$$get_ApparentEnclosingType(x$$159);
  }
}

function PropInfo$$get_ApparentEnclosingTyconRef(x$$160) {
  return (0, _TastOps.tcrefOfAppTy)(PropInfo$$get_TcGlobals(x$$160), PropInfo$$get_ApparentEnclosingAppType(x$$160));
}

function PropInfo$$get_DeclaringTyconRef(x$$161) {
  var vref$$43;
  const matchValue$$25 = PropInfo$$get_ArbitraryValRef(x$$161);
  var $target$$63, vref$$44;

  if (matchValue$$25 != null) {
    if (vref$$43 = matchValue$$25, PropInfo$$get_IsExtensionMember(x$$161) ? (0, _tast.ValRef$$get_HasDeclaringEntity)(vref$$43) : false) {
      $target$$63 = 0;
      vref$$44 = matchValue$$25;
    } else {
      $target$$63 = 1;
    }
  } else {
    $target$$63 = 1;
  }

  switch ($target$$63) {
    case 0:
      {
        return (0, _tast.ValRef$$get_TopValDeclaringEntity)(vref$$44);
      }

    case 1:
      {
        return PropInfo$$get_ApparentEnclosingTyconRef(x$$161);
      }
  }
}

function PropInfo$$get_ArbitraryValRef(x$$162) {
  var $target$$64, vref$$45;

  if (x$$162.tag === 0) {
    if (x$$162.fields[2] == null) {
      if (x$$162.fields[3] == null) {
        $target$$64 = 1;
      } else {
        $target$$64 = 0;
        vref$$45 = x$$162.fields[3];
      }
    } else {
      $target$$64 = 0;
      vref$$45 = x$$162.fields[2];
    }
  } else {
    $target$$64 = 2;
  }

  switch ($target$$64) {
    case 0:
      {
        return vref$$45;
      }

    case 1:
      {
        throw new Error("unreachable");
      }

    case 2:
      {
        return null;
      }
  }
}

function PropInfo$$get_HasDirectXmlComment(x$$163) {
  var $target$$65, g$$53, vref$$46;

  if (x$$163.tag === 0) {
    if (x$$163.fields[2] != null) {
      $target$$65 = 0;
      g$$53 = x$$163.fields[0];
      vref$$46 = x$$163.fields[2];
    } else if (x$$163.fields[3] != null) {
      $target$$65 = 0;
      g$$53 = x$$163.fields[0];
      vref$$46 = x$$163.fields[3];
    } else {
      $target$$65 = 1;
    }
  } else {
    $target$$65 = 1;
  }

  switch ($target$$65) {
    case 0:
      {
        return (0, _tast.valRefInThisAssembly)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$53), vref$$46);
      }

    case 1:
      {
        return false;
      }
  }
}

function PropInfo$$get_PropertyName(x$$164) {
  var $target$$66, ilpinfo$$2, vref$$47;

  if (x$$164.tag === 0) {
    if (x$$164.fields[2] != null) {
      $target$$66 = 1;
      vref$$47 = x$$164.fields[2];
    } else if (x$$164.fields[3] != null) {
      $target$$66 = 1;
      vref$$47 = x$$164.fields[3];
    } else {
      $target$$66 = 2;
    }
  } else {
    $target$$66 = 0;
    ilpinfo$$2 = x$$164.fields[0];
  }

  switch ($target$$66) {
    case 0:
      {
        return ILPropInfo$$get_PropertyName(ilpinfo$$2);
      }

    case 1:
      {
        return (0, _tast.ValRef$$get_PropertyName)(vref$$47);
      }

    case 2:
      {
        throw new Error("unreachable");
      }
  }
}

function PropInfo$$get_HasGetter(x$$165) {
  if (x$$165.tag === 0) {
    const x$$166 = x$$165.fields[2];
    return x$$166 != null;
  } else {
    const ilpinfo$$3 = x$$165.fields[0];
    return ILPropInfo$$get_HasGetter(ilpinfo$$3);
  }
}

function PropInfo$$get_HasSetter(x$$167) {
  if (x$$167.tag === 0) {
    const x$$168 = x$$167.fields[3];
    return x$$168 != null;
  } else {
    const ilpinfo$$4 = x$$167.fields[0];
    return ILPropInfo$$get_HasSetter(ilpinfo$$4);
  }
}

function PropInfo$$get_IsExtensionMember(x$$169) {
  const matchValue$$26 = PropInfo$$get_ArbitraryValRef(x$$169);

  if (matchValue$$26 != null) {
    const vref$$48 = matchValue$$26;
    return (0, _tast.ValRef$$get_IsExtensionMember)(vref$$48);
  } else {
    return false;
  }
}

function PropInfo$$get_IsVirtualProperty(x$$170) {
  var $target$$67, ilpinfo$$5, vref$$49;

  if (x$$170.tag === 0) {
    if (x$$170.fields[2] != null) {
      $target$$67 = 1;
      vref$$49 = x$$170.fields[2];
    } else if (x$$170.fields[3] != null) {
      $target$$67 = 1;
      vref$$49 = x$$170.fields[3];
    } else {
      $target$$67 = 2;
    }
  } else {
    $target$$67 = 0;
    ilpinfo$$5 = x$$170.fields[0];
  }

  switch ($target$$67) {
    case 0:
      {
        return ILPropInfo$$get_IsVirtual(ilpinfo$$5);
      }

    case 1:
      {
        return ValRef$002Eget_IsVirtualMember(vref$$49);
      }

    case 2:
      {
        throw new Error("unreachable");
      }
  }
}

function PropInfo$$get_IsNewSlot(x$$171) {
  var $target$$68, ilpinfo$$6, vref$$50;

  if (x$$171.tag === 0) {
    if (x$$171.fields[2] == null) {
      if (x$$171.fields[3] == null) {
        $target$$68 = 2;
      } else {
        $target$$68 = 1;
        vref$$50 = x$$171.fields[3];
      }
    } else {
      $target$$68 = 1;
      vref$$50 = x$$171.fields[2];
    }
  } else {
    $target$$68 = 0;
    ilpinfo$$6 = x$$171.fields[0];
  }

  switch ($target$$68) {
    case 0:
      {
        return ILPropInfo$$get_IsNewSlot(ilpinfo$$6);
      }

    case 1:
      {
        return ValRef$002Eget_IsDispatchSlotMember(vref$$50);
      }

    case 2:
      {
        throw new Error("unreachable");
      }
  }
}

function PropInfo$$get_IsDispatchSlot(x$$172) {
  var $target$$69, ilpinfo$$7, g$$54, ty$$52, vref$$51;

  if (x$$172.tag === 0) {
    if (x$$172.fields[2] != null) {
      $target$$69 = 1;
      g$$54 = x$$172.fields[0];
      ty$$52 = x$$172.fields[1];
      vref$$51 = x$$172.fields[2];
    } else if (x$$172.fields[3] != null) {
      $target$$69 = 1;
      g$$54 = x$$172.fields[0];
      ty$$52 = x$$172.fields[1];
      vref$$51 = x$$172.fields[3];
    } else {
      $target$$69 = 2;
    }
  } else {
    $target$$69 = 0;
    ilpinfo$$7 = x$$172.fields[0];
  }

  switch ($target$$69) {
    case 0:
      {
        return ILPropInfo$$get_IsVirtual(ilpinfo$$7);
      }

    case 1:
      {
        if ((0, _TastOps.isInterfaceTy)(g$$54, ty$$52)) {
          return true;
        } else {
          return (0, _tast.ValRef$$get_MemberInfo)(vref$$51).MemberFlags.IsDispatchSlot;
        }
      }

    case 2:
      {
        throw new Error("unreachable");
      }
  }
}

function PropInfo$$get_IsStatic(x$$173) {
  var $target$$70, ilpinfo$$8, vref$$52;

  if (x$$173.tag === 0) {
    if (x$$173.fields[2] == null) {
      if (x$$173.fields[3] == null) {
        $target$$70 = 2;
      } else {
        $target$$70 = 1;
        vref$$52 = x$$173.fields[3];
      }
    } else {
      $target$$70 = 1;
      vref$$52 = x$$173.fields[2];
    }
  } else {
    $target$$70 = 0;
    ilpinfo$$8 = x$$173.fields[0];
  }

  switch ($target$$70) {
    case 0:
      {
        return ILPropInfo$$get_IsStatic(ilpinfo$$8);
      }

    case 1:
      {
        return !(0, _tast.ValRef$$get_IsInstanceMember)(vref$$52);
      }

    case 2:
      {
        throw new Error("unreachable");
      }
  }
}

function PropInfo$$get_IsDefiniteFSharpOverride(x$$174) {
  const matchValue$$27 = PropInfo$$get_ArbitraryValRef(x$$174);

  if (matchValue$$27 == null) {
    return false;
  } else {
    const vref$$53 = matchValue$$27;
    return ValRef$002Eget_IsDefiniteFSharpOverrideMember(vref$$53);
  }
}

function PropInfo$$get_ImplementedSlotSignatures(x$$175) {
  return ValRef$002Eget_ImplementedSlotSignatures(PropInfo$$get_ArbitraryValRef(x$$175));
}

function PropInfo$$get_IsFSharpExplicitInterfaceImplementation(x$$176) {
  const matchValue$$28 = PropInfo$$get_ArbitraryValRef(x$$176);

  if (matchValue$$28 == null) {
    return false;
  } else {
    const vref$$54 = matchValue$$28;
    return ValRef$002EIsFSharpExplicitInterfaceImplementation$$2AE8EA0C(vref$$54, PropInfo$$get_TcGlobals(x$$176));
  }
}

function PropInfo$$get_IsIndexer(x$$177) {
  if (x$$177.tag === 0) {
    if (x$$177.fields[2] == null) {
      if (x$$177.fields[3] == null) {
        throw new Error("unreachable");
      } else {
        const vref$$56 = x$$177.fields[3];
        const arginfos$$1 = (0, _TastOps.ArgInfosOfMember)(x$$177.fields[0], vref$$56);

        if ((0, _List.length)(arginfos$$1) === 1) {
          return (0, _List.length)((0, _List.head)(arginfos$$1)) >= 2;
        } else {
          return false;
        }
      }
    } else {
      const vref$$55 = x$$177.fields[2];
      const arginfos = (0, _TastOps.ArgInfosOfMember)(x$$177.fields[0], vref$$55);

      if ((0, _List.length)(arginfos) === 1) {
        return (0, _List.length)((0, _List.head)(arginfos)) >= 1;
      } else {
        return false;
      }
    }
  } else {
    return (0, _List.length)((0, _il.ILPropertyDef$$get_Args)(x$$177.fields[0].fields[1])) !== 0;
  }
}

function PropInfo$$get_IsFSharpEventProperty(x$$178) {
  var $target$$71, g$$57, vref$$57;

  if (x$$178.tag === 0) {
    if (x$$178.fields[2] != null) {
      if (x$$178.fields[3] == null) {
        $target$$71 = 0;
        g$$57 = x$$178.fields[0];
        vref$$57 = x$$178.fields[2];
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
        return ValRef$002EIsFSharpEventProperty$$2AE8EA0C(vref$$57, g$$57);
      }

    case 1:
      {
        return false;
      }
  }
}

function PropInfo$$get_DropSetter(x$$179) {
  var $target$$72, g$$58, ty$$53, vref$$58;

  if (x$$179.tag === 0) {
    if (x$$179.fields[2] != null) {
      $target$$72 = 0;
      g$$58 = x$$179.fields[0];
      ty$$53 = x$$179.fields[1];
      vref$$58 = x$$179.fields[2];
    } else {
      $target$$72 = 1;
    }
  } else {
    $target$$72 = 1;
  }

  switch ($target$$72) {
    case 0:
      {
        return new PropInfo(0, "FSProp", g$$58, ty$$53, vref$$58, null);
      }

    case 1:
      {
        return x$$179;
      }
  }
}

function PropInfo$$get_DropGetter(x$$180) {
  var $target$$73, g$$59, ty$$54, vref$$59;

  if (x$$180.tag === 0) {
    if (x$$180.fields[3] != null) {
      $target$$73 = 0;
      g$$59 = x$$180.fields[0];
      ty$$54 = x$$180.fields[1];
      vref$$59 = x$$180.fields[3];
    } else {
      $target$$73 = 1;
    }
  } else {
    $target$$73 = 1;
  }

  switch ($target$$73) {
    case 0:
      {
        return new PropInfo(0, "FSProp", g$$59, ty$$54, null, vref$$59);
      }

    case 1:
      {
        return x$$180;
      }
  }
}

function PropInfo$$get_XmlDoc(x$$181) {
  var $target$$74, vref$$60;

  if (x$$181.tag === 0) {
    if (x$$181.fields[2] == null) {
      if (x$$181.fields[3] == null) {
        $target$$74 = 2;
      } else {
        $target$$74 = 1;
        vref$$60 = x$$181.fields[3];
      }
    } else {
      $target$$74 = 1;
      vref$$60 = x$$181.fields[2];
    }
  } else {
    $target$$74 = 0;
  }

  switch ($target$$74) {
    case 0:
      {
        return (0, _ast.XmlDoc$$$get_Empty)();
      }

    case 1:
      {
        return (0, _tast.ValRef$$get_XmlDoc)(vref$$60);
      }

    case 2:
      {
        throw new Error("unreachable");
      }
  }
}

function PropInfo$$get_TcGlobals(x$$182) {
  if (x$$182.tag === 0) {
    const g$$60 = x$$182.fields[0];
    return g$$60;
  } else {
    const ilpinfo$$9 = x$$182.fields[0];
    return ILPropInfo$$get_TcGlobals(ilpinfo$$9);
  }
}

function PropInfo$$get_IsValueType(x$$183) {
  return (0, _TastOps.isStructTy)(PropInfo$$get_TcGlobals(x$$183), PropInfo$$get_ApparentEnclosingType(x$$183));
}

function PropInfo$$GetPropertyType$$73F6E43C(x$$184, amap$$39, m$$46) {
  var $target$$75, ilpinfo$$10, g$$61, vref$$61;

  if (x$$184.tag === 0) {
    if (x$$184.fields[2] != null) {
      $target$$75 = 1;
      g$$61 = x$$184.fields[0];
      vref$$61 = x$$184.fields[2];
    } else if (x$$184.fields[3] != null) {
      $target$$75 = 1;
      g$$61 = x$$184.fields[0];
      vref$$61 = x$$184.fields[3];
    } else {
      $target$$75 = 2;
    }
  } else {
    $target$$75 = 0;
    ilpinfo$$10 = x$$184.fields[0];
  }

  switch ($target$$75) {
    case 0:
      {
        return ILPropInfo$$GetPropertyType$$73F6E43C(ilpinfo$$10, amap$$39, m$$46);
      }

    case 1:
      {
        const ty$$55 = PropInfo$$get_ApparentEnclosingAppType(x$$184);
        const inst$$8 = GetInstantiationForPropertyVal(g$$61, ty$$55, vref$$61);
        return (0, _TastOps.instType)(inst$$8, (0, _TastOps.ReturnTypeOfPropertyVal)(g$$61, (0, _tast.ValRef$$get_Deref)(vref$$61)));
      }

    case 2:
      {
        throw new Error("unreachable");
      }
  }
}

function PropInfo$$GetParamNamesAndTypes$$73F6E43C(x$$185, amap$$40, m$$47) {
  var $target$$76, ilpinfo$$11, g$$62, ty$$56, vref$$62;

  if (x$$185.tag === 0) {
    if (x$$185.fields[2] != null) {
      $target$$76 = 1;
      g$$62 = x$$185.fields[0];
      ty$$56 = x$$185.fields[1];
      vref$$62 = x$$185.fields[2];
    } else if (x$$185.fields[3] != null) {
      $target$$76 = 1;
      g$$62 = x$$185.fields[0];
      ty$$56 = x$$185.fields[1];
      vref$$62 = x$$185.fields[3];
    } else {
      $target$$76 = 2;
    }
  } else {
    $target$$76 = 0;
    ilpinfo$$11 = x$$185.fields[0];
  }

  switch ($target$$76) {
    case 0:
      {
        return ILPropInfo$$GetParamNamesAndTypes$$73F6E43C(ilpinfo$$11, amap$$40, m$$47);
      }

    case 1:
      {
        const inst$$9 = GetInstantiationForPropertyVal(g$$62, ty$$56, vref$$62);
        return (0, _List.map)(function mapping$$11($arg$$5) {
          return ParamNameAndType$$$Instantiate(inst$$9, ParamNameAndType$$$FromArgInfo$$Z2D9B2ABD($arg$$5[0], $arg$$5[1]));
        }, (0, _TastOps.ArgInfosOfPropertyVal)(g$$62, (0, _tast.ValRef$$get_Deref)(vref$$62)));
      }

    case 2:
      {
        throw new Error("unreachable");
      }
  }
}

function PropInfo$$GetParamDatas$$73F6E43C(x$$186, amap$$41, m$$48) {
  return (0, _List.map)(function mapping$$12(_arg4) {
    const pty$$1 = _arg4.fields[1];
    const nmOpt$$1 = _arg4.fields[0];
    return new ParamData(0, "ParamData", false, false, false, new OptionalArgInfo(0, "NotOptional"), new CallerInfo(0, "NoCallerInfo"), nmOpt$$1, new ReflectedArgInfo(0, "None"), pty$$1);
  }, PropInfo$$GetParamNamesAndTypes$$73F6E43C(x$$186, amap$$41, m$$48));
}

function PropInfo$$GetParamTypes$$73F6E43C(x$$187, amap$$42, m$$49) {
  return (0, _List.map)(function mapping$$13(_arg5) {
    const ty$$57 = _arg5.fields[1];
    return ty$$57;
  }, PropInfo$$GetParamNamesAndTypes$$73F6E43C(x$$187, amap$$42, m$$49));
}

function PropInfo$$get_GetterMethod(x$$188) {
  if (x$$188.tag === 0) {
    if (x$$188.fields[2] != null) {
      const vref$$63 = x$$188.fields[2];
      return new MethInfo(0, "FSMeth", x$$188.fields[0], x$$188.fields[1], vref$$63, null);
    } else {
      throw new Error("no getter method");
    }
  } else {
    return new MethInfo(1, "ILMeth", PropInfo$$get_TcGlobals(x$$188), ILPropInfo$$get_GetterMethod(x$$188.fields[0]), null);
  }
}

function PropInfo$$get_SetterMethod(x$$189) {
  if (x$$189.tag === 0) {
    if (x$$189.fields[3] != null) {
      const vref$$64 = x$$189.fields[3];
      return new MethInfo(0, "FSMeth", x$$189.fields[0], x$$189.fields[1], vref$$64, null);
    } else {
      throw new Error("no setter method");
    }
  } else {
    return new MethInfo(1, "ILMeth", PropInfo$$get_TcGlobals(x$$189), ILPropInfo$$get_SetterMethod(x$$189.fields[0]), null);
  }
}

function PropInfo$$$PropInfosUseIdenticalDefinitions(x1$$5, x2$$4) {
  const optVrefEq = function optVrefEq(g$$65, _arg1$$3) {
    var $target$$77, v1, v2;

    if (_arg1$$3[0] == null) {
      if (_arg1$$3[1] == null) {
        $target$$77 = 1;
      } else {
        $target$$77 = 2;
      }
    } else if (_arg1$$3[1] != null) {
      $target$$77 = 0;
      v1 = _arg1$$3[0];
      v2 = _arg1$$3[1];
    } else {
      $target$$77 = 2;
    }

    switch ($target$$77) {
      case 0:
        {
          return (0, _TastOps.valRefEq)(g$$65, v1, v2);
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
  };

  const matchValue$$29 = [x1$$5, x2$$4];
  var $target$$78, ilpinfo1, ilpinfo2, g$$66, vrefa1, vrefa2, vrefb1, vrefb2;

  if (matchValue$$29[0].tag === 0) {
    if (matchValue$$29[1].tag === 0) {
      $target$$78 = 1;
      g$$66 = matchValue$$29[0].fields[0];
      vrefa1 = matchValue$$29[0].fields[2];
      vrefa2 = matchValue$$29[1].fields[2];
      vrefb1 = matchValue$$29[0].fields[3];
      vrefb2 = matchValue$$29[1].fields[3];
    } else {
      $target$$78 = 2;
    }
  } else if (matchValue$$29[1].tag === 1) {
    $target$$78 = 0;
    ilpinfo1 = matchValue$$29[0].fields[0];
    ilpinfo2 = matchValue$$29[1].fields[0];
  } else {
    $target$$78 = 2;
  }

  switch ($target$$78) {
    case 0:
      {
        return ILPropInfo$$get_RawMetadata(ilpinfo1) === ILPropInfo$$get_RawMetadata(ilpinfo2);
      }

    case 1:
      {
        if (optVrefEq(g$$66, [vrefa1, vrefa2])) {
          return optVrefEq(g$$66, [vrefb1, vrefb2]);
        } else {
          return false;
        }
      }

    case 2:
      {
        return false;
      }
  }
}

function PropInfo$$ComputeHashCode(pi) {
  if (pi.tag === 0) {
    const vrefOpt2 = pi.fields[3];
    const vrefOpt1 = pi.fields[2];
    const vth = [(0, _Option.defaultArg)(vrefOpt1, null, function mapping$$14(vr) {
      return (0, _tast.ValRef$$get_LogicalName)(vr);
    }), (0, _Option.defaultArg)(vrefOpt2, null, function mapping$$15(vr$$1) {
      return (0, _tast.ValRef$$get_LogicalName)(vr$$1);
    })];
    return (0, _Util.structuralHash)(vth) | 0;
  } else {
    const ilpinfo$$14 = pi.fields[0];
    return (0, _Util.structuralHash)((0, _il.ILPropertyDef$$get_Name)(ILPropInfo$$get_RawMetadata(ilpinfo$$14))) | 0;
  }
}

const ILEventInfo = (0, _Types.declare)(function ILEventInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILEventInfo = ILEventInfo;

function ILEventInfo$$get_ApparentEnclosingType(x$$191) {
  const tinfo$$13 = x$$191.fields[0];
  return ILTypeInfo$$get_ToType(tinfo$$13);
}

function ILEventInfo$$get_ApparentEnclosingAppType(x$$192) {
  return ILEventInfo$$get_ApparentEnclosingType(x$$192);
}

function ILEventInfo$$get_DeclaringTyconRef(x$$193) {
  return (0, _TastOps.tcrefOfAppTy)(ILEventInfo$$get_TcGlobals(x$$193), ILEventInfo$$get_ApparentEnclosingAppType(x$$193));
}

function ILEventInfo$$get_TcGlobals(x$$194) {
  const tinfo$$14 = x$$194.fields[0];
  return ILTypeInfo$$get_TcGlobals(tinfo$$14);
}

function ILEventInfo$$get_RawMetadata(x$$195) {
  const ed = x$$195.fields[1];
  return ed;
}

function ILEventInfo$$get_ILTypeInfo(x$$196) {
  const tinfo$$15 = x$$196.fields[0];
  return tinfo$$15;
}

function ILEventInfo$$get_AddMethod(x$$197) {
  const mdef$$2 = (0, _il.resolveILMethodRef)(ILTypeInfo$$get_RawMetadata(ILEventInfo$$get_ILTypeInfo(x$$197)), (0, _il.ILEventDef$$get_AddMethod)(ILEventInfo$$get_RawMetadata(x$$197)));
  return new ILMethInfo(0, "ILMethInfo", ILEventInfo$$get_TcGlobals(x$$197), ILTypeInfo$$get_ToType(ILEventInfo$$get_ILTypeInfo(x$$197)), null, mdef$$2, (0, _Types.L)());
}

function ILEventInfo$$get_RemoveMethod(x$$198) {
  const mdef$$3 = (0, _il.resolveILMethodRef)(ILTypeInfo$$get_RawMetadata(ILEventInfo$$get_ILTypeInfo(x$$198)), (0, _il.ILEventDef$$get_RemoveMethod)(ILEventInfo$$get_RawMetadata(x$$198)));
  return new ILMethInfo(0, "ILMethInfo", ILEventInfo$$get_TcGlobals(x$$198), ILTypeInfo$$get_ToType(ILEventInfo$$get_ILTypeInfo(x$$198)), null, mdef$$3, (0, _Types.L)());
}

function ILEventInfo$$get_TypeRef(x$$199) {
  return ILTypeInfo$$get_ILTypeRef(ILEventInfo$$get_ILTypeInfo(x$$199));
}

function ILEventInfo$$get_Name(x$$200) {
  return (0, _il.ILEventDef$$get_Name)(ILEventInfo$$get_RawMetadata(x$$200));
}

function ILEventInfo$$get_IsStatic(x$$201) {
  return ILMethInfo$$get_IsStatic(ILEventInfo$$get_AddMethod(x$$201));
}

ILEventInfo.prototype.toString = function () {
  const x$$202 = this;
  return ILEventInfo$$get_ILTypeInfo(x$$202).toString() + "::" + ILEventInfo$$get_Name(x$$202);
};

const BadEventTransformation = (0, _Types.declare)(function BadEventTransformation(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.BadEventTransformation = BadEventTransformation;

function tyConformsToIDelegateEvent(g$$67, ty$$60) {
  if ((0, _TastOps.isIDelegateEventType)(g$$67, ty$$60)) {
    return (0, _TastOps.isDelegateTy)(g$$67, (0, _TastOps.destIDelegateEventType)(g$$67, ty$$60));
  } else {
    return false;
  }
}

function nonStandardEventError(nm$$2, m$$50) {
  return new _ErrorLogger.Error$((0, _FSComp.SR$$$eventHasNonStandardType$$30230F9B)(nm$$2, "add_" + nm$$2, "remove_" + nm$$2), m$$50);
}

function FindDelegateTypeOfPropertyEvent(g$$68, amap$$43, nm$$3, m$$51, ty$$61) {
  const matchValue$$30 = SearchEntireHierarchyOfType(function (ty$$62) {
    return tyConformsToIDelegateEvent(g$$68, ty$$62);
  }, g$$68, amap$$43, m$$51, ty$$61);

  if (matchValue$$30 != null) {
    const ty$$63 = matchValue$$30;
    return (0, _TastOps.destIDelegateEventType)(g$$68, ty$$63);
  } else {
    return (0, _ErrorLogger.error)(nonStandardEventError(nm$$3, m$$51));
  }
}

const EventInfo = (0, _Types.declare)(function EventInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.EventInfo = EventInfo;

function EventInfo$$get_ApparentEnclosingType(x$$203) {
  if (x$$203.tag === 0) {
    const p$$6 = x$$203.fields[1];
    return PropInfo$$get_ApparentEnclosingType(p$$6);
  } else {
    const ileinfo = x$$203.fields[0];
    return ILEventInfo$$get_ApparentEnclosingType(ileinfo);
  }
}

function EventInfo$$get_ApparentEnclosingAppType(x$$204) {
  if (x$$204.tag === 1) {
    const ileinfo$$1 = x$$204.fields[0];
    return ILEventInfo$$get_ApparentEnclosingAppType(ileinfo$$1);
  } else {
    return EventInfo$$get_ApparentEnclosingType(x$$204);
  }
}

function EventInfo$$get_ApparentEnclosingTyconRef(x$$205) {
  return (0, _TastOps.tcrefOfAppTy)(EventInfo$$get_TcGlobals(x$$205), EventInfo$$get_ApparentEnclosingAppType(x$$205));
}

function EventInfo$$get_DeclaringTyconRef(x$$206) {
  var vref$$65;
  const matchValue$$31 = EventInfo$$get_ArbitraryValRef(x$$206);
  var $target$$79, vref$$66;

  if (matchValue$$31 != null) {
    if (vref$$65 = matchValue$$31, EventInfo$$get_IsExtensionMember(x$$206) ? (0, _tast.ValRef$$get_HasDeclaringEntity)(vref$$65) : false) {
      $target$$79 = 0;
      vref$$66 = matchValue$$31;
    } else {
      $target$$79 = 1;
    }
  } else {
    $target$$79 = 1;
  }

  switch ($target$$79) {
    case 0:
      {
        return (0, _tast.ValRef$$get_TopValDeclaringEntity)(vref$$66);
      }

    case 1:
      {
        return EventInfo$$get_ApparentEnclosingTyconRef(x$$206);
      }
  }
}

function EventInfo$$get_HasDirectXmlComment(x$$207) {
  if (x$$207.tag === 0) {
    const p$$7 = x$$207.fields[1];
    return PropInfo$$get_HasDirectXmlComment(p$$7);
  } else {
    return false;
  }
}

function EventInfo$$get_XmlDoc(x$$208) {
  if (x$$208.tag === 0) {
    const p$$8 = x$$208.fields[1];
    return PropInfo$$get_XmlDoc(p$$8);
  } else {
    return (0, _ast.XmlDoc$$$get_Empty)();
  }
}

function EventInfo$$get_EventName(x$$209) {
  if (x$$209.tag === 0) {
    const p$$9 = x$$209.fields[1];
    return PropInfo$$get_PropertyName(p$$9);
  } else {
    const ileinfo$$2 = x$$209.fields[0];
    return ILEventInfo$$get_Name(ileinfo$$2);
  }
}

function EventInfo$$get_IsStatic(x$$210) {
  if (x$$210.tag === 0) {
    const p$$10 = x$$210.fields[1];
    return PropInfo$$get_IsStatic(p$$10);
  } else {
    const ileinfo$$3 = x$$210.fields[0];
    return ILEventInfo$$get_IsStatic(ileinfo$$3);
  }
}

function EventInfo$$get_IsExtensionMember(x$$211) {
  if (x$$211.tag === 0) {
    const p$$11 = x$$211.fields[1];
    return PropInfo$$get_IsExtensionMember(p$$11);
  } else {
    return false;
  }
}

function EventInfo$$get_TcGlobals(x$$212) {
  if (x$$212.tag === 0) {
    const g$$69 = x$$212.fields[0];
    return g$$69;
  } else {
    const ileinfo$$4 = x$$212.fields[0];
    return ILEventInfo$$get_TcGlobals(ileinfo$$4);
  }
}

function EventInfo$$get_IsValueType(x$$213) {
  return (0, _TastOps.isStructTy)(EventInfo$$get_TcGlobals(x$$213), EventInfo$$get_ApparentEnclosingType(x$$213));
}

function EventInfo$$get_AddMethod(x$$214) {
  if (x$$214.tag === 0) {
    const p$$12 = x$$214.fields[1];
    const g$$70 = x$$214.fields[0];
    const addValRef = x$$214.fields[2];
    return new MethInfo(0, "FSMeth", g$$70, PropInfo$$get_ApparentEnclosingType(p$$12), addValRef, null);
  } else {
    const ileinfo$$5 = x$$214.fields[0];
    return new MethInfo(1, "ILMeth", ILEventInfo$$get_TcGlobals(ileinfo$$5), ILEventInfo$$get_AddMethod(ileinfo$$5), null);
  }
}

function EventInfo$$get_RemoveMethod(x$$215) {
  if (x$$215.tag === 0) {
    const removeValRef = x$$215.fields[3];
    const p$$13 = x$$215.fields[1];
    const g$$71 = x$$215.fields[0];
    return new MethInfo(0, "FSMeth", g$$71, PropInfo$$get_ApparentEnclosingType(p$$13), removeValRef, null);
  } else {
    const ileinfo$$6 = x$$215.fields[0];
    return new MethInfo(1, "ILMeth", EventInfo$$get_TcGlobals(x$$215), ILEventInfo$$get_RemoveMethod(ileinfo$$6), null);
  }
}

function EventInfo$$get_ArbitraryValRef(x$$216) {
  if (x$$216.tag === 0) {
    const addValRef$$1 = x$$216.fields[2];
    return addValRef$$1;
  } else {
    return null;
  }
}

function EventInfo$$GetDelegateType$$73F6E43C(x$$217, amap$$44, m$$52) {
  if (x$$217.tag === 0) {
    const p$$14 = x$$217.fields[1];
    const g$$72 = x$$217.fields[0];
    return FindDelegateTypeOfPropertyEvent(g$$72, amap$$44, EventInfo$$get_EventName(x$$217), m$$52, PropInfo$$GetPropertyType$$73F6E43C(p$$14, amap$$44, m$$52));
  } else {
    const tinfo$$16 = x$$217.fields[0].fields[0];
    const edef = x$$217.fields[0].fields[1];

    if ((0, _il.ILEventDef$$get_EventType)(edef) == null) {
      (0, _ErrorLogger.error)(nonStandardEventError(EventInfo$$get_EventName(x$$217), m$$52));
    }

    return ImportILTypeFromMetadata(amap$$44, m$$52, ILTypeInfo$$get_ILScopeRef(tinfo$$16), ILTypeInfo$$get_TypeInstOfRawMetadata(tinfo$$16), (0, _Types.L)(), (0, _il.ILEventDef$$get_EventType)(edef));
  }
}

function EventInfo$$$EventInfosUseIdenticalDefintions(x1$$6, x2$$5) {
  const matchValue$$32 = [x1$$6, x2$$5];
  var $target$$80, g$$73, pi1, pi2, vrefa1$$1, vrefa2$$1, vrefb1$$1, vrefb2$$1, ileinfo1, ileinfo2;

  if (matchValue$$32[0].tag === 1) {
    if (matchValue$$32[1].tag === 1) {
      $target$$80 = 1;
      ileinfo1 = matchValue$$32[0].fields[0];
      ileinfo2 = matchValue$$32[1].fields[0];
    } else {
      $target$$80 = 2;
    }
  } else if (matchValue$$32[1].tag === 0) {
    $target$$80 = 0;
    g$$73 = matchValue$$32[0].fields[0];
    pi1 = matchValue$$32[0].fields[1];
    pi2 = matchValue$$32[1].fields[1];
    vrefa1$$1 = matchValue$$32[0].fields[2];
    vrefa2$$1 = matchValue$$32[1].fields[2];
    vrefb1$$1 = matchValue$$32[0].fields[3];
    vrefb2$$1 = matchValue$$32[1].fields[3];
  } else {
    $target$$80 = 2;
  }

  switch ($target$$80) {
    case 0:
      {
        if (PropInfo$$$PropInfosUseIdenticalDefinitions(pi1, pi2) ? (0, _TastOps.valRefEq)(g$$73, vrefa1$$1, vrefa2$$1) : false) {
          return (0, _TastOps.valRefEq)(g$$73, vrefb1$$1, vrefb2$$1);
        } else {
          return false;
        }
      }

    case 1:
      {
        return ILEventInfo$$get_RawMetadata(ileinfo1) === ILEventInfo$$get_RawMetadata(ileinfo2);
      }

    case 2:
      {
        return false;
      }
  }
}

function EventInfo$$ComputeHashCode(ei) {
  if (ei.tag === 0) {
    const vref2$$1 = ei.fields[3];
    const vref1$$1 = ei.fields[2];
    const pi$$1 = ei.fields[1];
    return (0, _Util.structuralHash)([PropInfo$$ComputeHashCode(pi$$1), (0, _tast.ValRef$$get_LogicalName)(vref1$$1), (0, _tast.ValRef$$get_LogicalName)(vref2$$1)]) | 0;
  } else {
    const ileinfo$$7 = ei.fields[0];
    return (0, _Util.structuralHash)((0, _il.ILEventDef$$get_Name)(ILEventInfo$$get_RawMetadata(ileinfo$$7))) | 0;
  }
}

const CompiledSig = (0, _Types.declare)(function CompiledSig(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CompiledSig = CompiledSig;

function CompiledSigOfMeth(g$$74, amap$$45, m$$53, minfo$$1) {
  const formalMethTypars$$2 = MethInfo$$get_FormalMethodTypars(minfo$$1);
  const fminst = (0, _TastOps.generalizeTypars)(formalMethTypars$$2);
  const vargtys = MethInfo$$GetParamTypes$$Z5D984B3C(minfo$$1, amap$$45, m$$53, fminst);
  const vrty = MethInfo$$GetCompiledReturnTy$$Z5D984B3C(minfo$$1, amap$$45, m$$53, fminst);
  let fmtpinst;
  const parentTyArgs$$3 = (0, _TastOps.argsOfAppTy)(g$$74, MethInfo$$get_ApparentEnclosingAppType(minfo$$1));
  const memberParentTypars$$4 = MethInfo$$GetFormalTyparsOfDeclaringType$$4DB9192C(minfo$$1, m$$53);
  fmtpinst = (0, _TastOps.mkTyparInst)(memberParentTypars$$4, parentTyArgs$$3);
  return new CompiledSig(0, "CompiledSig", vargtys, vrty, formalMethTypars$$2, fmtpinst);
}

function MethInfosEquivByNameAndPartialSig(erasureFlag, ignoreFinal, g$$75, amap$$46, m$$54, minfo$$2, minfo2) {
  if ((MethInfo$$get_LogicalName(minfo$$2) === MethInfo$$get_LogicalName(minfo2) ? MethInfo$$get_GenericArity(minfo$$2) === MethInfo$$get_GenericArity(minfo2) : false) ? ignoreFinal ? true : MethInfo$$get_IsFinal(minfo$$2) === MethInfo$$get_IsFinal(minfo2) : false) {
    const formalMethTypars$$3 = MethInfo$$get_FormalMethodTypars(minfo$$2);
    const fminst$$1 = (0, _TastOps.generalizeTypars)(formalMethTypars$$3);
    const formalMethTypars2 = MethInfo$$get_FormalMethodTypars(minfo2);
    const fminst2 = (0, _TastOps.generalizeTypars)(formalMethTypars2);
    const argtys = MethInfo$$GetParamTypes$$Z5D984B3C(minfo$$2, amap$$46, m$$54, fminst$$1);
    const argtys2 = MethInfo$$GetParamTypes$$Z5D984B3C(minfo2, amap$$46, m$$54, fminst2);
    return (0, _illib.List$$$lengthsEqAndForall2)(function p$$16(l1, l2) {
      return (0, _illib.List$$$lengthsEqAndForall2)(function p$$15(arg30$0040$$1, arg40$0040) {
        return (0, _TastOps.typeAEquivAux)(erasureFlag, g$$75, (0, _TastOps.TypeEquivEnv$$$FromEquivTypars)(formalMethTypars$$3, formalMethTypars2), arg30$0040$$1, arg40$0040);
      }, l1, l2);
    }, argtys, argtys2);
  } else {
    return false;
  }
}

function PropInfosEquivByNameAndPartialSig(erasureFlag$$1, g$$76, amap$$47, m$$55, pinfo, pinfo2) {
  if (PropInfo$$get_PropertyName(pinfo) === PropInfo$$get_PropertyName(pinfo2)) {
    const argtys$$1 = PropInfo$$GetParamTypes$$73F6E43C(pinfo, amap$$47, m$$55);
    const argtys2$$1 = PropInfo$$GetParamTypes$$73F6E43C(pinfo2, amap$$47, m$$55);
    return (0, _illib.List$$$lengthsEqAndForall2)(function (arg20$0040$$5, arg30$0040$$2) {
      return (0, _TastOps.typeEquivAux)(erasureFlag$$1, g$$76, arg20$0040$$5, arg30$0040$$2);
    }, argtys$$1, argtys2$$1);
  } else {
    return false;
  }
}

function MethInfosEquivByNameAndSig(erasureFlag$$2, ignoreFinal$$1, g$$77, amap$$48, m$$56, minfo$$3, minfo2$$1) {
  if (MethInfosEquivByNameAndPartialSig(erasureFlag$$2, ignoreFinal$$1, g$$77, amap$$48, m$$56, minfo$$3, minfo2$$1)) {
    const patternInput$$24 = CompiledSigOfMeth(g$$77, amap$$48, m$$56, minfo$$3);
    const retTy$$5 = patternInput$$24.fields[1];
    const formalMethTypars$$4 = patternInput$$24.fields[2];
    const patternInput$$25 = CompiledSigOfMeth(g$$77, amap$$48, m$$56, minfo2$$1);
    const retTy2 = patternInput$$25.fields[1];
    const formalMethTypars2$$1 = patternInput$$25.fields[2];
    const matchValue$$33 = [retTy$$5, retTy2];
    var $target$$81, retTy$$6, retTy2$$1;

    if (matchValue$$33[0] != null) {
      if (matchValue$$33[1] != null) {
        $target$$81 = 1;
        retTy$$6 = matchValue$$33[0];
        retTy2$$1 = matchValue$$33[1];
      } else {
        $target$$81 = 2;
      }
    } else if (matchValue$$33[1] == null) {
      $target$$81 = 0;
    } else {
      $target$$81 = 2;
    }

    switch ($target$$81) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return (0, _TastOps.typeAEquivAux)(erasureFlag$$2, g$$77, (0, _TastOps.TypeEquivEnv$$$FromEquivTypars)(formalMethTypars$$4, formalMethTypars2$$1), retTy$$6, retTy2$$1);
        }

      case 2:
        {
          return false;
        }
    }
  } else {
    return false;
  }
}

function PropInfosEquivByNameAndSig(erasureFlag$$3, g$$78, amap$$49, m$$57, pinfo$$1, pinfo2$$1) {
  if (PropInfosEquivByNameAndPartialSig(erasureFlag$$3, g$$78, amap$$49, m$$57, pinfo$$1, pinfo2$$1)) {
    const retTy$$7 = PropInfo$$GetPropertyType$$73F6E43C(pinfo$$1, amap$$49, m$$57);
    const retTy2$$2 = PropInfo$$GetPropertyType$$73F6E43C(pinfo2$$1, amap$$49, m$$57);
    return (0, _TastOps.typeEquivAux)(erasureFlag$$3, g$$78, retTy$$7, retTy2$$2);
  } else {
    return false;
  }
}

function SettersOfPropInfos(pinfos) {
  return (0, _List.choose)(function chooser$$1(pinfo$$2) {
    if (PropInfo$$get_HasSetter(pinfo$$2)) {
      return [PropInfo$$get_SetterMethod(pinfo$$2), pinfo$$2];
    } else {
      return null;
    }
  }, pinfos);
}

function GettersOfPropInfos(pinfos$$1) {
  return (0, _List.choose)(function chooser$$2(pinfo$$3) {
    if (PropInfo$$get_HasGetter(pinfo$$3)) {
      return [PropInfo$$get_GetterMethod(pinfo$$3), pinfo$$3];
    } else {
      return null;
    }
  }, pinfos$$1);
}