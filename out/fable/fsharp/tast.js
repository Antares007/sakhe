"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValInline$$get_MustInline = ValInline$$get_MustInline;
exports.ValFlags$$$$002Ector$$Z524259C1 = ValFlags$$$$002Ector$$Z524259C1;
exports.ValFlags$$$$002Ector$$2001ECD3 = ValFlags$$$$002Ector$$2001ECD3;
exports.ValFlags$$get_BaseOrThisInfo = ValFlags$$get_BaseOrThisInfo;
exports.ValFlags$$get_IsCompilerGenerated = ValFlags$$get_IsCompilerGenerated;
exports.ValFlags$$SetIsCompilerGenerated$$Z1FBCCD16 = ValFlags$$SetIsCompilerGenerated$$Z1FBCCD16;
exports.ValFlags$$get_InlineInfo = ValFlags$$get_InlineInfo;
exports.ValFlags$$get_MutabilityInfo = ValFlags$$get_MutabilityInfo;
exports.ValFlags$$get_IsMemberOrModuleBinding = ValFlags$$get_IsMemberOrModuleBinding;
exports.ValFlags$$get_WithIsMemberOrModuleBinding = ValFlags$$get_WithIsMemberOrModuleBinding;
exports.ValFlags$$get_IsExtensionMember = ValFlags$$get_IsExtensionMember;
exports.ValFlags$$get_IsIncrClassSpecialMember = ValFlags$$get_IsIncrClassSpecialMember;
exports.ValFlags$$get_IsTypeFunction = ValFlags$$get_IsTypeFunction;
exports.ValFlags$$get_RecursiveValInfo = ValFlags$$get_RecursiveValInfo;
exports.ValFlags$$WithRecursiveValInfo$$342B737B = ValFlags$$WithRecursiveValInfo$$342B737B;
exports.ValFlags$$get_MakesNoCriticalTailcalls = ValFlags$$get_MakesNoCriticalTailcalls;
exports.ValFlags$$get_WithMakesNoCriticalTailcalls = ValFlags$$get_WithMakesNoCriticalTailcalls;
exports.ValFlags$$get_PermitsExplicitTypeInstantiation = ValFlags$$get_PermitsExplicitTypeInstantiation;
exports.ValFlags$$get_HasBeenReferenced = ValFlags$$get_HasBeenReferenced;
exports.ValFlags$$get_WithHasBeenReferenced = ValFlags$$get_WithHasBeenReferenced;
exports.ValFlags$$get_IsCompiledAsStaticPropertyWithoutField = ValFlags$$get_IsCompiledAsStaticPropertyWithoutField;
exports.ValFlags$$get_WithIsCompiledAsStaticPropertyWithoutField = ValFlags$$get_WithIsCompiledAsStaticPropertyWithoutField;
exports.ValFlags$$get_IsGeneratedEventVal = ValFlags$$get_IsGeneratedEventVal;
exports.ValFlags$$get_IsFixed = ValFlags$$get_IsFixed;
exports.ValFlags$$get_WithIsFixed = ValFlags$$get_WithIsFixed;
exports.ValFlags$$get_PickledBits = ValFlags$$get_PickledBits;
exports.TyparKind$$get_AttrName = TyparKind$$get_AttrName;
exports.TyparKind$$get_DebugText = TyparKind$$get_DebugText;
exports.TyparRigidity$$get_ErrorIfUnified = TyparRigidity$$get_ErrorIfUnified;
exports.TyparRigidity$$get_WarnIfUnified = TyparRigidity$$get_WarnIfUnified;
exports.TyparRigidity$$get_WarnIfMissingConstraint = TyparRigidity$$get_WarnIfMissingConstraint;
exports.TyparFlags$$$$002Ector$$Z524259A4 = TyparFlags$$$$002Ector$$Z524259A4;
exports.TyparFlags$$$$002Ector$$Z7882EFDC = TyparFlags$$$$002Ector$$Z7882EFDC;
exports.TyparFlags$$get_IsFromError = TyparFlags$$get_IsFromError;
exports.TyparFlags$$get_IsCompilerGenerated = TyparFlags$$get_IsCompilerGenerated;
exports.TyparFlags$$get_StaticReq = TyparFlags$$get_StaticReq;
exports.TyparFlags$$get_Rigidity = TyparFlags$$get_Rigidity;
exports.TyparFlags$$get_Kind = TyparFlags$$get_Kind;
exports.TyparFlags$$get_ComparisonConditionalOn = TyparFlags$$get_ComparisonConditionalOn;
exports.TyparFlags$$get_DynamicReq = TyparFlags$$get_DynamicReq;
exports.TyparFlags$$get_EqualityConditionalOn = TyparFlags$$get_EqualityConditionalOn;
exports.TyparFlags$$get_IsCompatFlex = TyparFlags$$get_IsCompatFlex;
exports.TyparFlags$$WithCompatFlex$$Z1FBCCD16 = TyparFlags$$WithCompatFlex$$Z1FBCCD16;
exports.TyparFlags$$get_PickledBits = TyparFlags$$get_PickledBits;
exports.EntityFlags$$$$002Ector$$Z524259C1 = EntityFlags$$$$002Ector$$Z524259C1;
exports.EntityFlags$$$$002Ector$$Z5A892296 = EntityFlags$$$$002Ector$$Z5A892296;
exports.EntityFlags$$get_IsModuleOrNamespace = EntityFlags$$get_IsModuleOrNamespace;
exports.EntityFlags$$get_IsPrefixDisplay = EntityFlags$$get_IsPrefixDisplay;
exports.EntityFlags$$get_PreEstablishedHasDefaultConstructor = EntityFlags$$get_PreEstablishedHasDefaultConstructor;
exports.EntityFlags$$get_HasSelfReferentialConstructor = EntityFlags$$get_HasSelfReferentialConstructor;
exports.EntityFlags$$$get_ReservedBitForPickleFormatTyconReprFlag = EntityFlags$$$get_ReservedBitForPickleFormatTyconReprFlag;
exports.EntityFlags$$get_IsStructRecordOrUnionType = EntityFlags$$get_IsStructRecordOrUnionType;
exports.EntityFlags$$get_TryIsByRefLike = EntityFlags$$get_TryIsByRefLike;
exports.EntityFlags$$WithIsByRefLike$$Z1FBCCD16 = EntityFlags$$WithIsByRefLike$$Z1FBCCD16;
exports.EntityFlags$$get_TryIsReadOnly = EntityFlags$$get_TryIsReadOnly;
exports.EntityFlags$$WithIsReadOnly$$Z1FBCCD16 = EntityFlags$$WithIsReadOnly$$Z1FBCCD16;
exports.EntityFlags$$get_PickledBits = EntityFlags$$get_PickledBits;
exports.KeyTyconByDemangledNameAndArity = KeyTyconByDemangledNameAndArity;
exports.KeyTyconByAccessNames = KeyTyconByAccessNames;
exports.getNameOfScopeRef = getNameOfScopeRef;
exports.PublicPath$$get_EnclosingPath = PublicPath$$get_EnclosingPath;
exports.CompilationPath$$get_ILScopeRef = CompilationPath$$get_ILScopeRef;
exports.CompilationPath$$get_AccessPath = CompilationPath$$get_AccessPath;
exports.CompilationPath$$get_MangledPath = CompilationPath$$get_MangledPath;
exports.CompilationPath$$NestedPublicPath$$31D53C78 = CompilationPath$$NestedPublicPath$$31D53C78;
exports.CompilationPath$$get_ParentCompPath = CompilationPath$$get_ParentCompPath;
exports.CompilationPath$$NestedCompPath = CompilationPath$$NestedCompPath;
exports.CompilationPath$$get_DemangledPath = CompilationPath$$get_DemangledPath;
exports.CompilationPath$$$DemangleEntityName = CompilationPath$$$DemangleEntityName;
exports.EntityOptionalData$$get_DebugText = EntityOptionalData$$get_DebugText;
exports.Entity$$$get_EmptyEntityOptData = Entity$$$get_EmptyEntityOptData;
exports.Entity$$get_LogicalName = Entity$$get_LogicalName;
exports.Entity$$get_CompiledName = Entity$$get_CompiledName;
exports.Entity$$get_EntityCompiledName = Entity$$get_EntityCompiledName;
exports.Entity$$SetCompiledName$$2297AD2E = Entity$$SetCompiledName$$2297AD2E;
exports.Entity$$get_DisplayName = Entity$$get_DisplayName;
exports.Entity$$get_DisplayNameWithStaticParametersAndUnderscoreTypars = Entity$$get_DisplayNameWithStaticParametersAndUnderscoreTypars;
exports.Entity$$get_DisplayNameWithStaticParameters = Entity$$get_DisplayNameWithStaticParameters;
exports.Entity$$GetDisplayName$$8EAA2C0 = Entity$$GetDisplayName$$8EAA2C0;
exports.Entity$$get_Range = Entity$$get_Range;
exports.Entity$$get_DefinitionRange = Entity$$get_DefinitionRange;
exports.Entity$$get_SigRange = Entity$$get_SigRange;
exports.Entity$$SetOtherRange$$56F61A9 = Entity$$SetOtherRange$$56F61A9;
exports.Entity$$get_Stamp = Entity$$get_Stamp;
exports.Entity$$get_Attribs = Entity$$get_Attribs;
exports.Entity$$get_XmlDoc = Entity$$get_XmlDoc;
exports.Entity$$get_XmlDocSig = Entity$$get_XmlDocSig;
exports.Entity$$set_XmlDocSig$$Z721C83C5 = Entity$$set_XmlDocSig$$Z721C83C5;
exports.Entity$$get_ModuleOrNamespaceType = Entity$$get_ModuleOrNamespaceType;
exports.Entity$$get_TypeContents = Entity$$get_TypeContents;
exports.Entity$$get_TypeOrMeasureKind = Entity$$get_TypeOrMeasureKind;
exports.Entity$$SetTypeOrMeasureKind$$Z53708FA8 = Entity$$SetTypeOrMeasureKind$$Z53708FA8;
exports.Entity$$get_Id = Entity$$get_Id;
exports.Entity$$get_TypeReprInfo = Entity$$get_TypeReprInfo;
exports.Entity$$get_ExceptionInfo = Entity$$get_ExceptionInfo;
exports.Entity$$SetExceptionInfo$$762AAD87 = Entity$$SetExceptionInfo$$762AAD87;
exports.Entity$$get_IsExceptionDecl = Entity$$get_IsExceptionDecl;
exports.Entity$$get_DemangledModuleOrNamespaceName = Entity$$get_DemangledModuleOrNamespaceName;
exports.Entity$$Typars$$4DB9192C = Entity$$Typars$$4DB9192C;
exports.Entity$$get_TyparsNoRange = Entity$$get_TyparsNoRange;
exports.Entity$$get_TypeAbbrev = Entity$$get_TypeAbbrev;
exports.Entity$$SetTypeAbbrev$$5268D4C7 = Entity$$SetTypeAbbrev$$5268D4C7;
exports.Entity$$get_IsTypeAbbrev = Entity$$get_IsTypeAbbrev;
exports.Entity$$get_TypeReprAccessibility = Entity$$get_TypeReprAccessibility;
exports.Entity$$get_CompiledReprCache = Entity$$get_CompiledReprCache;
exports.Entity$$get_PublicPath = Entity$$get_PublicPath;
exports.Entity$$get_Accessibility = Entity$$get_Accessibility;
exports.Entity$$get_IsPrefixDisplay = Entity$$get_IsPrefixDisplay;
exports.Entity$$get_IsModuleOrNamespace = Entity$$get_IsModuleOrNamespace;
exports.Entity$$get_IsNamespace = Entity$$get_IsNamespace;
exports.Entity$$get_IsModule = Entity$$get_IsModule;
exports.Entity$$get_IsErased = Entity$$get_IsErased;
exports.Entity$$get_CompilationPathOpt = Entity$$get_CompilationPathOpt;
exports.Entity$$get_CompilationPath = Entity$$get_CompilationPath;
exports.Entity$$get_AllFieldTable = Entity$$get_AllFieldTable;
exports.Entity$$get_AllFieldsArray = Entity$$get_AllFieldsArray;
exports.Entity$$get_AllFieldsAsList = Entity$$get_AllFieldsAsList;
exports.Entity$$get_AllInstanceFieldsAsList = Entity$$get_AllInstanceFieldsAsList;
exports.Entity$$get_TrueFieldsAsList = Entity$$get_TrueFieldsAsList;
exports.Entity$$get_TrueInstanceFieldsAsList = Entity$$get_TrueInstanceFieldsAsList;
exports.Entity$$GetFieldByIndex$$Z524259A4 = Entity$$GetFieldByIndex$$Z524259A4;
exports.Entity$$GetFieldByName$$Z721C83C5 = Entity$$GetFieldByName$$Z721C83C5;
exports.Entity$$get_IsUnionTycon = Entity$$get_IsUnionTycon;
exports.Entity$$get_UnionTypeInfo = Entity$$get_UnionTypeInfo;
exports.Entity$$get_UnionCasesArray = Entity$$get_UnionCasesArray;
exports.Entity$$get_UnionCasesAsList = Entity$$get_UnionCasesAsList;
exports.Entity$$GetUnionCaseByName$$Z721C83C5 = Entity$$GetUnionCaseByName$$Z721C83C5;
exports.Entity$$$NewUnlinked = Entity$$$NewUnlinked;
exports.Entity$$$New = Entity$$$New;
exports.Entity$$Link$$Z52A308BB = Entity$$Link$$Z52A308BB;
exports.Entity$$get_IsLinked = Entity$$get_IsLinked;
exports.Entity$$get_FSharpObjectModelTypeInfo = Entity$$get_FSharpObjectModelTypeInfo;
exports.Entity$$get_IsILTycon = Entity$$get_IsILTycon;
exports.Entity$$get_ILTyconInfo = Entity$$get_ILTyconInfo;
exports.Entity$$get_ILTyconRawMetadata = Entity$$get_ILTyconRawMetadata;
exports.Entity$$get_IsRecordTycon = Entity$$get_IsRecordTycon;
exports.Entity$$get_IsStructRecordOrUnionTycon = Entity$$get_IsStructRecordOrUnionTycon;
exports.Entity$$get_TryIsByRefLike = Entity$$get_TryIsByRefLike;
exports.Entity$$SetIsByRefLike$$Z1FBCCD16 = Entity$$SetIsByRefLike$$Z1FBCCD16;
exports.Entity$$get_TryIsReadOnly = Entity$$get_TryIsReadOnly;
exports.Entity$$SetIsReadOnly$$Z1FBCCD16 = Entity$$SetIsReadOnly$$Z1FBCCD16;
exports.Entity$$get_IsFSharpObjectModelTycon = Entity$$get_IsFSharpObjectModelTycon;
exports.Entity$$get_IsAsmReprTycon = Entity$$get_IsAsmReprTycon;
exports.Entity$$get_IsMeasureableReprTycon = Entity$$get_IsMeasureableReprTycon;
exports.Entity$$get_IsHiddenReprTycon = Entity$$get_IsHiddenReprTycon;
exports.Entity$$get_IsFSharpInterfaceTycon = Entity$$get_IsFSharpInterfaceTycon;
exports.Entity$$get_IsFSharpDelegateTycon = Entity$$get_IsFSharpDelegateTycon;
exports.Entity$$get_IsFSharpEnumTycon = Entity$$get_IsFSharpEnumTycon;
exports.Entity$$get_IsFSharpClassTycon = Entity$$get_IsFSharpClassTycon;
exports.Entity$$get_IsILEnumTycon = Entity$$get_IsILEnumTycon;
exports.Entity$$get_IsEnumTycon = Entity$$get_IsEnumTycon;
exports.Entity$$get_IsFSharpStructOrEnumTycon = Entity$$get_IsFSharpStructOrEnumTycon;
exports.Entity$$get_IsILStructOrEnumTycon = Entity$$get_IsILStructOrEnumTycon;
exports.Entity$$get_IsStructOrEnumTycon = Entity$$get_IsStructOrEnumTycon;
exports.Entity$$get_ImmediateInterfacesOfFSharpTycon = Entity$$get_ImmediateInterfacesOfFSharpTycon;
exports.Entity$$get_ImmediateInterfaceTypesOfFSharpTycon = Entity$$get_ImmediateInterfaceTypesOfFSharpTycon;
exports.Entity$$get_MembersOfFSharpTyconSorted = Entity$$get_MembersOfFSharpTyconSorted;
exports.Entity$$get_MembersOfFSharpTyconByName = Entity$$get_MembersOfFSharpTyconByName;
exports.Entity$$get_GeneratedHashAndEqualsWithComparerValues = Entity$$get_GeneratedHashAndEqualsWithComparerValues;
exports.Entity$$get_GeneratedCompareToWithComparerValues = Entity$$get_GeneratedCompareToWithComparerValues;
exports.Entity$$get_GeneratedCompareToValues = Entity$$get_GeneratedCompareToValues;
exports.Entity$$get_GeneratedHashAndEqualsValues = Entity$$get_GeneratedHashAndEqualsValues;
exports.Entity$$get_AllGeneratedValues = Entity$$get_AllGeneratedValues;
exports.Entity$$get_CompiledRepresentation = Entity$$get_CompiledRepresentation;
exports.Entity$$get_CompiledRepresentationForNamedType = Entity$$get_CompiledRepresentationForNamedType;
exports.Entity$$get_PreEstablishedHasDefaultConstructor = Entity$$get_PreEstablishedHasDefaultConstructor;
exports.Entity$$get_HasSelfReferentialConstructor = Entity$$get_HasSelfReferentialConstructor;
exports.Entity$$SetAttribs$$A32CD4C = Entity$$SetAttribs$$A32CD4C;
exports.Entity$$SetIsStructRecordOrUnion$$Z1FBCCD16 = Entity$$SetIsStructRecordOrUnion$$Z1FBCCD16;
exports.Entity$$get_DebugText = Entity$$get_DebugText;
exports.MaybeLazy$00601$$get_Value = MaybeLazy$00601$$get_Value;
exports.MaybeLazy$00601$$Force = MaybeLazy$00601$$Force;
exports.TyconAugmentation$$SetCompare$$2880AC4F = TyconAugmentation$$SetCompare$$2880AC4F;
exports.TyconAugmentation$$SetCompareWith$$7D2DE7B4 = TyconAugmentation$$SetCompareWith$$7D2DE7B4;
exports.TyconAugmentation$$SetEquals$$2880AC4F = TyconAugmentation$$SetEquals$$2880AC4F;
exports.TyconAugmentation$$SetHashAndEqualsWith$$329E5074 = TyconAugmentation$$SetHashAndEqualsWith$$329E5074;
exports.TyconAugmentation$$SetHasObjectGetHashCode$$Z1FBCCD16 = TyconAugmentation$$SetHasObjectGetHashCode$$Z1FBCCD16;
exports.TyconAugmentation$$$Create = TyconAugmentation$$$Create;
exports.TyconAugmentation$$get_DebugText = TyconAugmentation$$get_DebugText;
exports.TyconRepresentation$$get_DebugText = TyconRepresentation$$get_DebugText;
exports.TILObjectReprData$$get_DebugText = TILObjectReprData$$get_DebugText;
exports.TyconObjModelKind$$get_IsValueType = TyconObjModelKind$$get_IsValueType;
exports.TyconObjModelData$$get_DebugText = TyconObjModelData$$get_DebugText;
exports.TyconRecdFields$$FieldByIndex$$Z524259A4 = TyconRecdFields$$FieldByIndex$$Z524259A4;
exports.TyconRecdFields$$FieldByName$$Z721C83C5 = TyconRecdFields$$FieldByName$$Z721C83C5;
exports.TyconRecdFields$$get_AllFieldsAsList = TyconRecdFields$$get_AllFieldsAsList;
exports.TyconRecdFields$$get_TrueFieldsAsList = TyconRecdFields$$get_TrueFieldsAsList;
exports.TyconRecdFields$$get_TrueInstanceFieldsAsList = TyconRecdFields$$get_TrueInstanceFieldsAsList;
exports.TyconRecdFields$$get_DebugText = TyconRecdFields$$get_DebugText;
exports.TyconUnionCases$$GetUnionCaseByIndex$$Z524259A4 = TyconUnionCases$$GetUnionCaseByIndex$$Z524259A4;
exports.TyconUnionCases$$get_UnionCasesAsList = TyconUnionCases$$get_UnionCasesAsList;
exports.TyconUnionCases$$get_DebugText = TyconUnionCases$$get_DebugText;
exports.TyconUnionData$$get_UnionCasesAsList = TyconUnionData$$get_UnionCasesAsList;
exports.TyconUnionData$$get_DebugText = TyconUnionData$$get_DebugText;
exports.UnionCase$$get_Range = UnionCase$$get_Range;
exports.UnionCase$$get_DefinitionRange = UnionCase$$get_DefinitionRange;
exports.UnionCase$$get_SigRange = UnionCase$$get_SigRange;
exports.UnionCase$$get_DisplayName = UnionCase$$get_DisplayName;
exports.UnionCase$$get_RecdFieldsArray = UnionCase$$get_RecdFieldsArray;
exports.UnionCase$$get_RecdFields = UnionCase$$get_RecdFields;
exports.UnionCase$$GetFieldByName$$Z721C83C5 = UnionCase$$GetFieldByName$$Z721C83C5;
exports.UnionCase$$get_IsNullary = UnionCase$$get_IsNullary;
exports.UnionCase$$get_DebugText = UnionCase$$get_DebugText;
exports.RecdField$$get_Accessibility = RecdField$$get_Accessibility;
exports.RecdField$$get_PropertyAttribs = RecdField$$get_PropertyAttribs;
exports.RecdField$$get_FieldAttribs = RecdField$$get_FieldAttribs;
exports.RecdField$$get_Range = RecdField$$get_Range;
exports.RecdField$$get_DefinitionRange = RecdField$$get_DefinitionRange;
exports.RecdField$$get_SigRange = RecdField$$get_SigRange;
exports.RecdField$$get_Id = RecdField$$get_Id;
exports.RecdField$$get_Name = RecdField$$get_Name;
exports.RecdField$$get_IsCompilerGenerated = RecdField$$get_IsCompilerGenerated;
exports.RecdField$$get_IsMutable = RecdField$$get_IsMutable;
exports.RecdField$$get_IsStatic = RecdField$$get_IsStatic;
exports.RecdField$$get_IsVolatile = RecdField$$get_IsVolatile;
exports.RecdField$$get_FormalType = RecdField$$get_FormalType;
exports.RecdField$$get_XmlDoc = RecdField$$get_XmlDoc;
exports.RecdField$$get_XmlDocSig = RecdField$$get_XmlDocSig;
exports.RecdField$$set_XmlDocSig$$Z721C83C5 = RecdField$$set_XmlDocSig$$Z721C83C5;
exports.RecdField$$get_LiteralValue = RecdField$$get_LiteralValue;
exports.RecdField$$get_IsZeroInit = RecdField$$get_IsZeroInit;
exports.RecdField$$get_DebugText = RecdField$$get_DebugText;
exports.ExceptionInfo$$get_DebugText = ExceptionInfo$$get_DebugText;
exports.ModuleOrNamespaceType$$$$002Ector$$Z36FEFB0E = ModuleOrNamespaceType$$$$002Ector$$Z36FEFB0E;
exports.ModuleOrNamespaceType$$get_ModuleOrNamespaceKind = ModuleOrNamespaceType$$get_ModuleOrNamespaceKind;
exports.ModuleOrNamespaceType$$get_AllValsAndMembers = ModuleOrNamespaceType$$get_AllValsAndMembers;
exports.ModuleOrNamespaceType$$get_AllEntities = ModuleOrNamespaceType$$get_AllEntities;
exports.ModuleOrNamespaceType$$AddModuleOrNamespaceByMutation$$Z52A308BB = ModuleOrNamespaceType$$AddModuleOrNamespaceByMutation$$Z52A308BB;
exports.ModuleOrNamespaceType$$AddEntity$$Z52A308BB = ModuleOrNamespaceType$$AddEntity$$Z52A308BB;
exports.ModuleOrNamespaceType$$AddVal$$7D0CFEA5 = ModuleOrNamespaceType$$AddVal$$7D0CFEA5;
exports.ModuleOrNamespaceType$$get_ActivePatternElemRefLookupTable = ModuleOrNamespaceType$$get_ActivePatternElemRefLookupTable;
exports.ModuleOrNamespaceType$$get_TypeDefinitions = ModuleOrNamespaceType$$get_TypeDefinitions;
exports.ModuleOrNamespaceType$$get_ExceptionDefinitions = ModuleOrNamespaceType$$get_ExceptionDefinitions;
exports.ModuleOrNamespaceType$$get_ModuleAndNamespaceDefinitions = ModuleOrNamespaceType$$get_ModuleAndNamespaceDefinitions;
exports.ModuleOrNamespaceType$$get_TypeAndExceptionDefinitions = ModuleOrNamespaceType$$get_TypeAndExceptionDefinitions;
exports.ModuleOrNamespaceType$$TypesByDemangledNameAndArity$$4DB9192C = ModuleOrNamespaceType$$TypesByDemangledNameAndArity$$4DB9192C;
exports.ModuleOrNamespaceType$$get_TypesByAccessNames = ModuleOrNamespaceType$$get_TypesByAccessNames;
exports.ModuleOrNamespaceType$$get_TypesByMangledName = ModuleOrNamespaceType$$get_TypesByMangledName;
exports.ModuleOrNamespaceType$$get_AllEntitiesByCompiledAndLogicalMangledNames = ModuleOrNamespaceType$$get_AllEntitiesByCompiledAndLogicalMangledNames;
exports.ModuleOrNamespaceType$$get_AllEntitiesByLogicalMangledName = ModuleOrNamespaceType$$get_AllEntitiesByLogicalMangledName;
exports.ModuleOrNamespaceType$$get_AllValsAndMembersByPartialLinkageKey = ModuleOrNamespaceType$$get_AllValsAndMembersByPartialLinkageKey;
exports.ModuleOrNamespaceType$$TryLinkVal$$Z70BACEDB = ModuleOrNamespaceType$$TryLinkVal$$Z70BACEDB;
exports.ModuleOrNamespaceType$$get_AllValsByLogicalName = ModuleOrNamespaceType$$get_AllValsByLogicalName;
exports.ModuleOrNamespaceType$$get_AllValsAndMembersByLogicalNameUncached = ModuleOrNamespaceType$$get_AllValsAndMembersByLogicalNameUncached;
exports.ModuleOrNamespaceType$$get_ExceptionDefinitionsByDemangledName = ModuleOrNamespaceType$$get_ExceptionDefinitionsByDemangledName;
exports.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName = ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName;
exports.ModuleOrNamespaceType$$get_DebugText = ModuleOrNamespaceType$$get_DebugText;
exports.Construct$$$NewModuleOrNamespaceType = Construct$$$NewModuleOrNamespaceType;
exports.Construct$$$NewEmptyModuleOrNamespaceType$$67DB27D2 = Construct$$$NewEmptyModuleOrNamespaceType$$67DB27D2;
exports.Construct$$$NewModuleOrNamespace = Construct$$$NewModuleOrNamespace;
exports.Accessibility$$get_DebugText = Accessibility$$get_DebugText;
exports.TyparOptionalData$$get_DebugText = TyparOptionalData$$get_DebugText;
exports.Typar$$get_Name = Typar$$get_Name;
exports.Typar$$get_Range = Typar$$get_Range;
exports.Typar$$get_Id = Typar$$get_Id;
exports.Typar$$get_Stamp = Typar$$get_Stamp;
exports.Typar$$get_Solution = Typar$$get_Solution;
exports.Typar$$get_Constraints = Typar$$get_Constraints;
exports.Typar$$get_IsCompilerGenerated = Typar$$get_IsCompilerGenerated;
exports.Typar$$get_Rigidity = Typar$$get_Rigidity;
exports.Typar$$get_DynamicReq = Typar$$get_DynamicReq;
exports.Typar$$get_EqualityConditionalOn = Typar$$get_EqualityConditionalOn;
exports.Typar$$get_ComparisonConditionalOn = Typar$$get_ComparisonConditionalOn;
exports.Typar$$get_StaticReq = Typar$$get_StaticReq;
exports.Typar$$get_IsFromError = Typar$$get_IsFromError;
exports.Typar$$get_IsCompatFlex = Typar$$get_IsCompatFlex;
exports.Typar$$SetIsCompatFlex$$Z1FBCCD16 = Typar$$SetIsCompatFlex$$Z1FBCCD16;
exports.Typar$$get_Kind = Typar$$get_Kind;
exports.Typar$$get_IsErased = Typar$$get_IsErased;
exports.Typar$$get_Attribs = Typar$$get_Attribs;
exports.Typar$$SetAttribs$$A32CD4C = Typar$$SetAttribs$$A32CD4C;
exports.Typar$$get_XmlDoc = Typar$$get_XmlDoc;
exports.Typar$$get_ILName = Typar$$get_ILName;
exports.Typar$$SetILName$$2297AD2E = Typar$$SetILName$$2297AD2E;
exports.Typar$$get_DisplayName = Typar$$get_DisplayName;
exports.Typar$$SetConstraints$$Z10399A1 = Typar$$SetConstraints$$Z10399A1;
exports.Typar$$$NewUnlinked = Typar$$$NewUnlinked;
exports.Typar$$$New$$ZB4A2630 = Typar$$$New$$ZB4A2630;
exports.Typar$$Link$$ZB4A2630 = Typar$$Link$$ZB4A2630;
exports.Typar$$get_AsType = Typar$$get_AsType;
exports.Typar$$get_IsLinked = Typar$$get_IsLinked;
exports.Typar$$get_IsSolved = Typar$$get_IsSolved;
exports.Typar$$SetIdent$$31D53C78 = Typar$$SetIdent$$31D53C78;
exports.Typar$$SetRigidity$$Z10E5307B = Typar$$SetRigidity$$Z10E5307B;
exports.Typar$$SetCompilerGenerated$$Z1FBCCD16 = Typar$$SetCompilerGenerated$$Z1FBCCD16;
exports.Typar$$SetStaticReq$$2FFF90DA = Typar$$SetStaticReq$$2FFF90DA;
exports.Typar$$SetDynamicReq$$41762FA3 = Typar$$SetDynamicReq$$41762FA3;
exports.Typar$$SetEqualityDependsOn$$Z1FBCCD16 = Typar$$SetEqualityDependsOn$$Z1FBCCD16;
exports.Typar$$SetComparisonDependsOn$$Z1FBCCD16 = Typar$$SetComparisonDependsOn$$Z1FBCCD16;
exports.Typar$$get_DebugText = Typar$$get_DebugText;
exports.TraitConstraintInfo$$get_MemberName = TraitConstraintInfo$$get_MemberName;
exports.TraitConstraintInfo$$get_ReturnType = TraitConstraintInfo$$get_ReturnType;
exports.TraitConstraintInfo$$get_Solution = TraitConstraintInfo$$get_Solution;
exports.TraitConstraintInfo$$set_Solution$$762D8F45 = TraitConstraintInfo$$set_Solution$$762D8F45;
exports.TraitConstraintInfo$$get_DebugText = TraitConstraintInfo$$get_DebugText;
exports.TraitConstraintSln$$get_DebugText = TraitConstraintSln$$get_DebugText;
exports.ValLinkagePartialKey$$get_DebugText = ValLinkagePartialKey$$get_DebugText;
exports.ValLinkageFullKey$$$$002Ector$$72991465 = ValLinkageFullKey$$$$002Ector$$72991465;
exports.ValLinkageFullKey$$get_PartialKey = ValLinkageFullKey$$get_PartialKey;
exports.ValLinkageFullKey$$get_TypeForLinkage = ValLinkageFullKey$$get_TypeForLinkage;
exports.ValLinkageFullKey$$get_DebugText = ValLinkageFullKey$$get_DebugText;
exports.ValOptionalData$$get_DebugText = ValOptionalData$$get_DebugText;
exports.Val$$$get_EmptyValOptData = Val$$$get_EmptyValOptData;
exports.Val$$get_DefinitionRange = Val$$get_DefinitionRange;
exports.Val$$get_SigRange = Val$$get_SigRange;
exports.Val$$get_Range = Val$$get_Range;
exports.Val$$get_Stamp = Val$$get_Stamp;
exports.Val$$get_Type = Val$$get_Type;
exports.Val$$get_Accessibility = Val$$get_Accessibility;
exports.Val$$get_LiteralValue = Val$$get_LiteralValue;
exports.Val$$get_ValReprInfo = Val$$get_ValReprInfo;
exports.Val$$get_Id = Val$$get_Id;
exports.Val$$get_IsCompiledAsTopLevel = Val$$get_IsCompiledAsTopLevel;
exports.Val$$GetLinkagePartialKey = Val$$GetLinkagePartialKey;
exports.Val$$GetLinkageFullKey = Val$$GetLinkageFullKey;
exports.Val$$get_IsMemberOrModuleBinding = Val$$get_IsMemberOrModuleBinding;
exports.Val$$get_IsExtensionMember = Val$$get_IsExtensionMember;
exports.Val$$get_ReflectedDefinition = Val$$get_ReflectedDefinition;
exports.Val$$get_MemberInfo = Val$$get_MemberInfo;
exports.Val$$get_IsMember = Val$$get_IsMember;
exports.Val$$get_IsIntrinsicMember = Val$$get_IsIntrinsicMember;
exports.Val$$get_IsModuleBinding = Val$$get_IsModuleBinding;
exports.Val$$get_IsCompiledIntoModule = Val$$get_IsCompiledIntoModule;
exports.Val$$get_IsInstanceMember = Val$$get_IsInstanceMember;
exports.Val$$get_IsConstructor = Val$$get_IsConstructor;
exports.Val$$get_IsClassConstructor = Val$$get_IsClassConstructor;
exports.Val$$get_IsOverrideOrExplicitImpl = Val$$get_IsOverrideOrExplicitImpl;
exports.Val$$get_IsMutable = Val$$get_IsMutable;
exports.Val$$get_MakesNoCriticalTailcalls = Val$$get_MakesNoCriticalTailcalls;
exports.Val$$get_HasBeenReferenced = Val$$get_HasBeenReferenced;
exports.Val$$get_IsCompiledAsStaticPropertyWithoutField = Val$$get_IsCompiledAsStaticPropertyWithoutField;
exports.Val$$get_IsFixed = Val$$get_IsFixed;
exports.Val$$get_PermitsExplicitTypeInstantiation = Val$$get_PermitsExplicitTypeInstantiation;
exports.Val$$get_IsIncrClassGeneratedMember = Val$$get_IsIncrClassGeneratedMember;
exports.Val$$get_IsIncrClassConstructor = Val$$get_IsIncrClassConstructor;
exports.Val$$get_RecursiveValInfo = Val$$get_RecursiveValInfo;
exports.Val$$get_BaseOrThisInfo = Val$$get_BaseOrThisInfo;
exports.Val$$get_IsTypeFunction = Val$$get_IsTypeFunction;
exports.Val$$get_InlineInfo = Val$$get_InlineInfo;
exports.Val$$get_MustInline = Val$$get_MustInline;
exports.Val$$get_IsCompilerGenerated = Val$$get_IsCompilerGenerated;
exports.Val$$get_Attribs = Val$$get_Attribs;
exports.Val$$get_XmlDoc = Val$$get_XmlDoc;
exports.Val$$get_XmlDocSig = Val$$get_XmlDocSig;
exports.Val$$set_XmlDocSig$$Z721C83C5 = Val$$set_XmlDocSig$$Z721C83C5;
exports.Val$$get_DeclaringEntity = Val$$get_DeclaringEntity;
exports.Val$$get_TopValDeclaringEntity = Val$$get_TopValDeclaringEntity;
exports.Val$$get_HasDeclaringEntity = Val$$get_HasDeclaringEntity;
exports.Val$$get_MemberApparentEntity = Val$$get_MemberApparentEntity;
exports.Val$$get_NumObjArgs = Val$$get_NumObjArgs;
exports.Val$$get_ApparentEnclosingEntity = Val$$get_ApparentEnclosingEntity;
exports.Val$$get_PublicPath = Val$$get_PublicPath;
exports.Val$$get_IsDispatchSlot = Val$$get_IsDispatchSlot;
exports.Val$$get_TypeScheme = Val$$get_TypeScheme;
exports.Val$$get_TauType = Val$$get_TauType;
exports.Val$$get_Typars = Val$$get_Typars;
exports.Val$$get_LogicalName = Val$$get_LogicalName;
exports.Val$$get_ValCompiledName = Val$$get_ValCompiledName;
exports.Val$$get_CompiledName = Val$$get_CompiledName;
exports.Val$$get_PropertyName = Val$$get_PropertyName;
exports.Val$$get_CoreDisplayName = Val$$get_CoreDisplayName;
exports.Val$$get_DisplayName = Val$$get_DisplayName;
exports.Val$$SetValRec$$342B737B = Val$$SetValRec$$342B737B;
exports.Val$$SetIsMemberOrModuleBinding = Val$$SetIsMemberOrModuleBinding;
exports.Val$$SetMakesNoCriticalTailcalls = Val$$SetMakesNoCriticalTailcalls;
exports.Val$$SetHasBeenReferenced = Val$$SetHasBeenReferenced;
exports.Val$$SetIsCompiledAsStaticPropertyWithoutField = Val$$SetIsCompiledAsStaticPropertyWithoutField;
exports.Val$$SetIsFixed = Val$$SetIsFixed;
exports.Val$$SetValReprInfo$$Z35BE7615 = Val$$SetValReprInfo$$Z35BE7615;
exports.Val$$SetType$$ZB53B58E = Val$$SetType$$ZB53B58E;
exports.Val$$SetOtherRange$$56F61A9 = Val$$SetOtherRange$$56F61A9;
exports.Val$$SetDeclaringEntity$$Z12FB10AD = Val$$SetDeclaringEntity$$Z12FB10AD;
exports.Val$$SetAttribs$$A32CD4C = Val$$SetAttribs$$A32CD4C;
exports.Val$$SetMemberInfo$$499E767B = Val$$SetMemberInfo$$499E767B;
exports.Val$$SetValDefn$$1EB7EF41 = Val$$SetValDefn$$1EB7EF41;
exports.Val$$$NewUnlinked = Val$$$NewUnlinked;
exports.Val$$$New$$7D0CFEA5 = Val$$$New$$7D0CFEA5;
exports.Val$$Link$$7D0CFEA5 = Val$$Link$$7D0CFEA5;
exports.Val$$SetData$$7D0CFEA5 = Val$$SetData$$7D0CFEA5;
exports.Val$$get_IsLinked = Val$$get_IsLinked;
exports.Val$$get_DebugText = Val$$get_DebugText;
exports.ValMemberInfo$$get_DebugText = ValMemberInfo$$get_DebugText;
exports.NonLocalValOrMemberRef$$get_Ccu = NonLocalValOrMemberRef$$get_Ccu;
exports.NonLocalValOrMemberRef$$get_AssemblyName = NonLocalValOrMemberRef$$get_AssemblyName;
exports.NonLocalValOrMemberRef$$get_DebugText = NonLocalValOrMemberRef$$get_DebugText;
exports.ValPublicPath$$get_DebugText = ValPublicPath$$get_DebugText;
exports.NonLocalEntityRef$$$TryDerefEntityPath$$Z1F81631D = NonLocalEntityRef$$$TryDerefEntityPath$$Z1F81631D;
exports.NonLocalEntityRef$$TryDeref$$Z1FBCCD16 = NonLocalEntityRef$$TryDeref$$Z1FBCCD16;
exports.NonLocalEntityRef$$get_Ccu = NonLocalEntityRef$$get_Ccu;
exports.NonLocalEntityRef$$get_Path = NonLocalEntityRef$$get_Path;
exports.NonLocalEntityRef$$get_DisplayName = NonLocalEntityRef$$get_DisplayName;
exports.NonLocalEntityRef$$get_LastItemMangledName = NonLocalEntityRef$$get_LastItemMangledName;
exports.NonLocalEntityRef$$get_EnclosingMangledPath = NonLocalEntityRef$$get_EnclosingMangledPath;
exports.NonLocalEntityRef$$get_AssemblyName = NonLocalEntityRef$$get_AssemblyName;
exports.NonLocalEntityRef$$get_Deref = NonLocalEntityRef$$get_Deref;
exports.NonLocalEntityRef$$get_ModuleOrNamespaceType = NonLocalEntityRef$$get_ModuleOrNamespaceType;
exports.NonLocalEntityRef$$get_DebugText = NonLocalEntityRef$$get_DebugText;
exports.EntityRef$$get_IsLocalRef = EntityRef$$get_IsLocalRef;
exports.EntityRef$$get_IsResolved = EntityRef$$get_IsResolved;
exports.EntityRef$$get_PrivateTarget = EntityRef$$get_PrivateTarget;
exports.EntityRef$$get_ResolvedTarget = EntityRef$$get_ResolvedTarget;
exports.EntityRef$$get_Deref = EntityRef$$get_Deref;
exports.EntityRef$$get_TryDeref = EntityRef$$get_TryDeref;
exports.EntityRef$$get_CanDeref = EntityRef$$get_CanDeref;
exports.EntityRef$$get_CompiledRepresentation = EntityRef$$get_CompiledRepresentation;
exports.EntityRef$$get_CompiledRepresentationForNamedType = EntityRef$$get_CompiledRepresentationForNamedType;
exports.EntityRef$$get_DefinitionRange = EntityRef$$get_DefinitionRange;
exports.EntityRef$$get_SigRange = EntityRef$$get_SigRange;
exports.EntityRef$$get_LogicalName = EntityRef$$get_LogicalName;
exports.EntityRef$$get_CompiledName = EntityRef$$get_CompiledName;
exports.EntityRef$$get_DisplayName = EntityRef$$get_DisplayName;
exports.EntityRef$$get_DisplayNameWithStaticParametersAndUnderscoreTypars = EntityRef$$get_DisplayNameWithStaticParametersAndUnderscoreTypars;
exports.EntityRef$$get_DisplayNameWithStaticParameters = EntityRef$$get_DisplayNameWithStaticParameters;
exports.EntityRef$$get_Range = EntityRef$$get_Range;
exports.EntityRef$$get_Stamp = EntityRef$$get_Stamp;
exports.EntityRef$$get_Attribs = EntityRef$$get_Attribs;
exports.EntityRef$$get_XmlDoc = EntityRef$$get_XmlDoc;
exports.EntityRef$$get_XmlDocSig = EntityRef$$get_XmlDocSig;
exports.EntityRef$$get_ModuleOrNamespaceType = EntityRef$$get_ModuleOrNamespaceType;
exports.EntityRef$$get_DemangledModuleOrNamespaceName = EntityRef$$get_DemangledModuleOrNamespaceName;
exports.EntityRef$$get_TypeContents = EntityRef$$get_TypeContents;
exports.EntityRef$$get_TypeOrMeasureKind = EntityRef$$get_TypeOrMeasureKind;
exports.EntityRef$$get_Id = EntityRef$$get_Id;
exports.EntityRef$$get_TypeReprInfo = EntityRef$$get_TypeReprInfo;
exports.EntityRef$$get_ExceptionInfo = EntityRef$$get_ExceptionInfo;
exports.EntityRef$$get_IsExceptionDecl = EntityRef$$get_IsExceptionDecl;
exports.EntityRef$$Typars$$4DB9192C = EntityRef$$Typars$$4DB9192C;
exports.EntityRef$$get_TyparsNoRange = EntityRef$$get_TyparsNoRange;
exports.EntityRef$$get_TypeAbbrev = EntityRef$$get_TypeAbbrev;
exports.EntityRef$$get_IsTypeAbbrev = EntityRef$$get_IsTypeAbbrev;
exports.EntityRef$$get_TypeReprAccessibility = EntityRef$$get_TypeReprAccessibility;
exports.EntityRef$$get_CompiledReprCache = EntityRef$$get_CompiledReprCache;
exports.EntityRef$$get_PublicPath = EntityRef$$get_PublicPath;
exports.EntityRef$$get_Accessibility = EntityRef$$get_Accessibility;
exports.EntityRef$$get_IsPrefixDisplay = EntityRef$$get_IsPrefixDisplay;
exports.EntityRef$$get_IsModuleOrNamespace = EntityRef$$get_IsModuleOrNamespace;
exports.EntityRef$$get_IsNamespace = EntityRef$$get_IsNamespace;
exports.EntityRef$$get_IsModule = EntityRef$$get_IsModule;
exports.EntityRef$$get_CompilationPathOpt = EntityRef$$get_CompilationPathOpt;
exports.EntityRef$$get_CompilationPath = EntityRef$$get_CompilationPath;
exports.EntityRef$$get_AllFieldTable = EntityRef$$get_AllFieldTable;
exports.EntityRef$$get_AllFieldsArray = EntityRef$$get_AllFieldsArray;
exports.EntityRef$$get_AllFieldsAsList = EntityRef$$get_AllFieldsAsList;
exports.EntityRef$$get_TrueFieldsAsList = EntityRef$$get_TrueFieldsAsList;
exports.EntityRef$$get_TrueInstanceFieldsAsList = EntityRef$$get_TrueInstanceFieldsAsList;
exports.EntityRef$$get_AllInstanceFieldsAsList = EntityRef$$get_AllInstanceFieldsAsList;
exports.EntityRef$$GetFieldByIndex$$Z524259A4 = EntityRef$$GetFieldByIndex$$Z524259A4;
exports.EntityRef$$GetFieldByName$$Z721C83C5 = EntityRef$$GetFieldByName$$Z721C83C5;
exports.EntityRef$$get_UnionTypeInfo = EntityRef$$get_UnionTypeInfo;
exports.EntityRef$$get_UnionCasesArray = EntityRef$$get_UnionCasesArray;
exports.EntityRef$$get_UnionCasesAsList = EntityRef$$get_UnionCasesAsList;
exports.EntityRef$$GetUnionCaseByName$$Z721C83C5 = EntityRef$$GetUnionCaseByName$$Z721C83C5;
exports.EntityRef$$get_FSharpObjectModelTypeInfo = EntityRef$$get_FSharpObjectModelTypeInfo;
exports.EntityRef$$get_ImmediateInterfacesOfFSharpTycon = EntityRef$$get_ImmediateInterfacesOfFSharpTycon;
exports.EntityRef$$get_ImmediateInterfaceTypesOfFSharpTycon = EntityRef$$get_ImmediateInterfaceTypesOfFSharpTycon;
exports.EntityRef$$get_MembersOfFSharpTyconSorted = EntityRef$$get_MembersOfFSharpTyconSorted;
exports.EntityRef$$get_MembersOfFSharpTyconByName = EntityRef$$get_MembersOfFSharpTyconByName;
exports.EntityRef$$get_IsStructOrEnumTycon = EntityRef$$get_IsStructOrEnumTycon;
exports.EntityRef$$get_IsAsmReprTycon = EntityRef$$get_IsAsmReprTycon;
exports.EntityRef$$get_IsMeasureableReprTycon = EntityRef$$get_IsMeasureableReprTycon;
exports.EntityRef$$get_IsErased = EntityRef$$get_IsErased;
exports.EntityRef$$get_GeneratedHashAndEqualsWithComparerValues = EntityRef$$get_GeneratedHashAndEqualsWithComparerValues;
exports.EntityRef$$get_GeneratedCompareToWithComparerValues = EntityRef$$get_GeneratedCompareToWithComparerValues;
exports.EntityRef$$get_GeneratedCompareToValues = EntityRef$$get_GeneratedCompareToValues;
exports.EntityRef$$get_GeneratedHashAndEqualsValues = EntityRef$$get_GeneratedHashAndEqualsValues;
exports.EntityRef$$get_IsILTycon = EntityRef$$get_IsILTycon;
exports.EntityRef$$get_ILTyconInfo = EntityRef$$get_ILTyconInfo;
exports.EntityRef$$get_ILTyconRawMetadata = EntityRef$$get_ILTyconRawMetadata;
exports.EntityRef$$get_IsUnionTycon = EntityRef$$get_IsUnionTycon;
exports.EntityRef$$get_IsRecordTycon = EntityRef$$get_IsRecordTycon;
exports.EntityRef$$get_IsFSharpObjectModelTycon = EntityRef$$get_IsFSharpObjectModelTycon;
exports.EntityRef$$get_TryIsByRefLike = EntityRef$$get_TryIsByRefLike;
exports.EntityRef$$SetIsByRefLike$$Z1FBCCD16 = EntityRef$$SetIsByRefLike$$Z1FBCCD16;
exports.EntityRef$$get_TryIsReadOnly = EntityRef$$get_TryIsReadOnly;
exports.EntityRef$$SetIsReadOnly$$Z1FBCCD16 = EntityRef$$SetIsReadOnly$$Z1FBCCD16;
exports.EntityRef$$get_IsHiddenReprTycon = EntityRef$$get_IsHiddenReprTycon;
exports.EntityRef$$get_IsFSharpInterfaceTycon = EntityRef$$get_IsFSharpInterfaceTycon;
exports.EntityRef$$get_IsFSharpDelegateTycon = EntityRef$$get_IsFSharpDelegateTycon;
exports.EntityRef$$get_IsFSharpEnumTycon = EntityRef$$get_IsFSharpEnumTycon;
exports.EntityRef$$get_IsILEnumTycon = EntityRef$$get_IsILEnumTycon;
exports.EntityRef$$get_IsEnumTycon = EntityRef$$get_IsEnumTycon;
exports.EntityRef$$get_IsFSharpStructOrEnumTycon = EntityRef$$get_IsFSharpStructOrEnumTycon;
exports.EntityRef$$get_IsILStructOrEnumTycon = EntityRef$$get_IsILStructOrEnumTycon;
exports.EntityRef$$get_PreEstablishedHasDefaultConstructor = EntityRef$$get_PreEstablishedHasDefaultConstructor;
exports.EntityRef$$get_HasSelfReferentialConstructor = EntityRef$$get_HasSelfReferentialConstructor;
exports.EntityRef$$get_UnionCasesAsRefList = EntityRef$$get_UnionCasesAsRefList;
exports.EntityRef$$get_TrueInstanceFieldsAsRefList = EntityRef$$get_TrueInstanceFieldsAsRefList;
exports.EntityRef$$get_AllFieldAsRefList = EntityRef$$get_AllFieldAsRefList;
exports.EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14 = EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14;
exports.EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7 = EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7;
exports.EntityRef$$get_DebugText = EntityRef$$get_DebugText;
exports.ValRef$$get_IsLocalRef = ValRef$$get_IsLocalRef;
exports.ValRef$$get_IsResolved = ValRef$$get_IsResolved;
exports.ValRef$$get_PrivateTarget = ValRef$$get_PrivateTarget;
exports.ValRef$$get_ResolvedTarget = ValRef$$get_ResolvedTarget;
exports.ValRef$$get_Deref = ValRef$$get_Deref;
exports.ValRef$$get_TryDeref = ValRef$$get_TryDeref;
exports.ValRef$$get_Type = ValRef$$get_Type;
exports.ValRef$$get_TypeScheme = ValRef$$get_TypeScheme;
exports.ValRef$$get_TauType = ValRef$$get_TauType;
exports.ValRef$$get_Typars = ValRef$$get_Typars;
exports.ValRef$$get_LogicalName = ValRef$$get_LogicalName;
exports.ValRef$$get_DisplayName = ValRef$$get_DisplayName;
exports.ValRef$$get_CoreDisplayName = ValRef$$get_CoreDisplayName;
exports.ValRef$$get_Range = ValRef$$get_Range;
exports.ValRef$$get_Accessibility = ValRef$$get_Accessibility;
exports.ValRef$$get_DeclaringEntity = ValRef$$get_DeclaringEntity;
exports.ValRef$$get_ApparentEnclosingEntity = ValRef$$get_ApparentEnclosingEntity;
exports.ValRef$$get_DefinitionRange = ValRef$$get_DefinitionRange;
exports.ValRef$$get_SigRange = ValRef$$get_SigRange;
exports.ValRef$$get_LiteralValue = ValRef$$get_LiteralValue;
exports.ValRef$$get_Id = ValRef$$get_Id;
exports.ValRef$$get_PropertyName = ValRef$$get_PropertyName;
exports.ValRef$$get_IsPropertyGetterMethod = ValRef$$get_IsPropertyGetterMethod;
exports.ValRef$$get_IsPropertySetterMethod = ValRef$$get_IsPropertySetterMethod;
exports.ValRef$$get_Stamp = ValRef$$get_Stamp;
exports.ValRef$$get_IsCompiledAsTopLevel = ValRef$$get_IsCompiledAsTopLevel;
exports.ValRef$$get_IsDispatchSlot = ValRef$$get_IsDispatchSlot;
exports.ValRef$$get_CompiledName = ValRef$$get_CompiledName;
exports.ValRef$$get_PublicPath = ValRef$$get_PublicPath;
exports.ValRef$$get_ReflectedDefinition = ValRef$$get_ReflectedDefinition;
exports.ValRef$$get_IsConstructor = ValRef$$get_IsConstructor;
exports.ValRef$$get_IsOverrideOrExplicitImpl = ValRef$$get_IsOverrideOrExplicitImpl;
exports.ValRef$$get_MemberInfo = ValRef$$get_MemberInfo;
exports.ValRef$$get_IsMember = ValRef$$get_IsMember;
exports.ValRef$$get_IsModuleBinding = ValRef$$get_IsModuleBinding;
exports.ValRef$$get_IsInstanceMember = ValRef$$get_IsInstanceMember;
exports.ValRef$$get_IsMutable = ValRef$$get_IsMutable;
exports.ValRef$$get_PermitsExplicitTypeInstantiation = ValRef$$get_PermitsExplicitTypeInstantiation;
exports.ValRef$$get_MakesNoCriticalTailcalls = ValRef$$get_MakesNoCriticalTailcalls;
exports.ValRef$$get_IsMemberOrModuleBinding = ValRef$$get_IsMemberOrModuleBinding;
exports.ValRef$$get_IsExtensionMember = ValRef$$get_IsExtensionMember;
exports.ValRef$$get_IsIncrClassConstructor = ValRef$$get_IsIncrClassConstructor;
exports.ValRef$$get_IsIncrClassGeneratedMember = ValRef$$get_IsIncrClassGeneratedMember;
exports.ValRef$$get_RecursiveValInfo = ValRef$$get_RecursiveValInfo;
exports.ValRef$$get_BaseOrThisInfo = ValRef$$get_BaseOrThisInfo;
exports.ValRef$$get_IsTypeFunction = ValRef$$get_IsTypeFunction;
exports.ValRef$$get_ValReprInfo = ValRef$$get_ValReprInfo;
exports.ValRef$$get_InlineInfo = ValRef$$get_InlineInfo;
exports.ValRef$$get_MustInline = ValRef$$get_MustInline;
exports.ValRef$$get_IsCompilerGenerated = ValRef$$get_IsCompilerGenerated;
exports.ValRef$$get_Attribs = ValRef$$get_Attribs;
exports.ValRef$$get_XmlDoc = ValRef$$get_XmlDoc;
exports.ValRef$$get_XmlDocSig = ValRef$$get_XmlDocSig;
exports.ValRef$$get_TopValDeclaringEntity = ValRef$$get_TopValDeclaringEntity;
exports.ValRef$$get_HasDeclaringEntity = ValRef$$get_HasDeclaringEntity;
exports.ValRef$$get_MemberApparentEntity = ValRef$$get_MemberApparentEntity;
exports.ValRef$$get_NumObjArgs = ValRef$$get_NumObjArgs;
exports.ValRef$$get_DebugText = ValRef$$get_DebugText;
exports.UnionCaseRef$$get_TyconRef = UnionCaseRef$$get_TyconRef;
exports.UnionCaseRef$$get_CaseName = UnionCaseRef$$get_CaseName;
exports.UnionCaseRef$$get_Tycon = UnionCaseRef$$get_Tycon;
exports.UnionCaseRef$$get_UnionCase = UnionCaseRef$$get_UnionCase;
exports.UnionCaseRef$$get_TryUnionCase = UnionCaseRef$$get_TryUnionCase;
exports.UnionCaseRef$$get_Attribs = UnionCaseRef$$get_Attribs;
exports.UnionCaseRef$$get_Range = UnionCaseRef$$get_Range;
exports.UnionCaseRef$$get_DefinitionRange = UnionCaseRef$$get_DefinitionRange;
exports.UnionCaseRef$$get_SigRange = UnionCaseRef$$get_SigRange;
exports.UnionCaseRef$$get_Index = UnionCaseRef$$get_Index;
exports.UnionCaseRef$$get_AllFieldsAsList = UnionCaseRef$$get_AllFieldsAsList;
exports.UnionCaseRef$$get_ReturnType = UnionCaseRef$$get_ReturnType;
exports.UnionCaseRef$$FieldByIndex$$Z524259A4 = UnionCaseRef$$FieldByIndex$$Z524259A4;
exports.UnionCaseRef$$get_DebugText = UnionCaseRef$$get_DebugText;
exports.RecdFieldRef$$get_TyconRef = RecdFieldRef$$get_TyconRef;
exports.RecdFieldRef$$get_FieldName = RecdFieldRef$$get_FieldName;
exports.RecdFieldRef$$get_Tycon = RecdFieldRef$$get_Tycon;
exports.RecdFieldRef$$get_RecdField = RecdFieldRef$$get_RecdField;
exports.RecdFieldRef$$get_TryRecdField = RecdFieldRef$$get_TryRecdField;
exports.RecdFieldRef$$get_PropertyAttribs = RecdFieldRef$$get_PropertyAttribs;
exports.RecdFieldRef$$get_Range = RecdFieldRef$$get_Range;
exports.RecdFieldRef$$get_DefinitionRange = RecdFieldRef$$get_DefinitionRange;
exports.RecdFieldRef$$get_SigRange = RecdFieldRef$$get_SigRange;
exports.RecdFieldRef$$get_Index = RecdFieldRef$$get_Index;
exports.RecdFieldRef$$get_DebugText = RecdFieldRef$$get_DebugText;
exports.TType$$GetAssemblyName = TType$$GetAssemblyName;
exports.TType$$get_DebugText = TType$$get_DebugText;
exports.CcuData$$get_DebugText = CcuData$$get_DebugText;
exports.CcuThunk$$get_Deref = CcuThunk$$get_Deref;
exports.CcuThunk$$get_IsUnresolvedReference = CcuThunk$$get_IsUnresolvedReference;
exports.CcuThunk$$EnsureDerefable$$Z6B4C8463 = CcuThunk$$EnsureDerefable$$Z6B4C8463;
exports.CcuThunk$$get_UsesFSharp20PlusQuotations = CcuThunk$$get_UsesFSharp20PlusQuotations;
exports.CcuThunk$$set_UsesFSharp20PlusQuotations$$Z1FBCCD16 = CcuThunk$$set_UsesFSharp20PlusQuotations$$Z1FBCCD16;
exports.CcuThunk$$get_AssemblyName = CcuThunk$$get_AssemblyName;
exports.CcuThunk$$get_ILScopeRef = CcuThunk$$get_ILScopeRef;
exports.CcuThunk$$get_Stamp = CcuThunk$$get_Stamp;
exports.CcuThunk$$get_FileName = CcuThunk$$get_FileName;
exports.CcuThunk$$TryGetILModuleDef = CcuThunk$$TryGetILModuleDef;
exports.CcuThunk$$get_QualifiedName = CcuThunk$$get_QualifiedName;
exports.CcuThunk$$get_SourceCodeDirectory = CcuThunk$$get_SourceCodeDirectory;
exports.CcuThunk$$get_IsFSharp = CcuThunk$$get_IsFSharp;
exports.CcuThunk$$get_Contents = CcuThunk$$get_Contents;
exports.CcuThunk$$get_TypeForwarders = CcuThunk$$get_TypeForwarders;
exports.CcuThunk$$get_RootModulesAndNamespaces = CcuThunk$$get_RootModulesAndNamespaces;
exports.CcuThunk$$get_RootTypeAndExceptionDefinitions = CcuThunk$$get_RootTypeAndExceptionDefinitions;
exports.CcuThunk$$$Create$$Z68F5F4C0 = CcuThunk$$$Create$$Z68F5F4C0;
exports.CcuThunk$$$CreateDelayed$$Z721C83C5 = CcuThunk$$$CreateDelayed$$Z721C83C5;
exports.CcuThunk$$Fixup$$Z7669BDF9 = CcuThunk$$Fixup$$Z7669BDF9;
exports.CcuThunk$$FixupOrphaned = CcuThunk$$FixupOrphaned;
exports.CcuThunk$$TryForward$$Z593E6CFA = CcuThunk$$TryForward$$Z593E6CFA;
exports.CcuThunk$$MemberSignatureEquality$$7E99D2C0 = CcuThunk$$MemberSignatureEquality$$7E99D2C0;
exports.CcuThunk$$get_DebugText = CcuThunk$$get_DebugText;
exports.CcuResolutionResult$$get_DebugText = CcuResolutionResult$$get_DebugText;
exports.PickledCcuInfo$$get_DebugText = PickledCcuInfo$$get_DebugText;
exports.AttribKind$$get_DebugText = AttribKind$$get_DebugText;
exports.Attrib$$get_DebugText = Attrib$$get_DebugText;
exports.Attrib$$get_TyconRef = Attrib$$get_TyconRef;
exports.AttribExpr$$get_DebugText = AttribExpr$$get_DebugText;
exports.AttribNamedArg$$get_DebugText = AttribNamedArg$$get_DebugText;
exports.DecisionTree$$get_DebugText = DecisionTree$$get_DebugText;
exports.DecisionTreeCase$$get_Discriminator = DecisionTreeCase$$get_Discriminator;
exports.DecisionTreeCase$$get_CaseTree = DecisionTreeCase$$get_CaseTree;
exports.DecisionTreeCase$$get_DebugText = DecisionTreeCase$$get_DebugText;
exports.DecisionTreeTest$$get_DebugText = DecisionTreeTest$$get_DebugText;
exports.DecisionTreeTarget$$get_DebugText = DecisionTreeTarget$$get_DebugText;
exports.Binding$$get_Var = Binding$$get_Var;
exports.Binding$$get_Expr = Binding$$get_Expr;
exports.Binding$$get_SequencePointInfo = Binding$$get_SequencePointInfo;
exports.Binding$$get_DebugText = Binding$$get_DebugText;
exports.ActivePatternElemRef$$get_ActivePatternInfo = ActivePatternElemRef$$get_ActivePatternInfo;
exports.ActivePatternElemRef$$get_ActivePatternVal = ActivePatternElemRef$$get_ActivePatternVal;
exports.ActivePatternElemRef$$get_CaseIndex = ActivePatternElemRef$$get_CaseIndex;
exports.ActivePatternElemRef$$get_DebugText = ActivePatternElemRef$$get_DebugText;
exports.ValReprInfo$$get_ArgInfos = ValReprInfo$$get_ArgInfos;
exports.ValReprInfo$$get_NumCurriedArgs = ValReprInfo$$get_NumCurriedArgs;
exports.ValReprInfo$$get_NumTypars = ValReprInfo$$get_NumTypars;
exports.ValReprInfo$$get_HasNoArgs = ValReprInfo$$get_HasNoArgs;
exports.ValReprInfo$$get_AritiesOfArgs = ValReprInfo$$get_AritiesOfArgs;
exports.ValReprInfo$$get_KindsOfTypars = ValReprInfo$$get_KindsOfTypars;
exports.ValReprInfo$$get_TotalArgCount = ValReprInfo$$get_TotalArgCount;
exports.ValReprInfo$$get_DebugText = ValReprInfo$$get_DebugText;
exports.ArgReprInfo$$get_DebugText = ArgReprInfo$$get_DebugText;
exports.ObjExprMethod$$get_Id = ObjExprMethod$$get_Id;
exports.ObjExprMethod$$get_DebugText = ObjExprMethod$$get_DebugText;
exports.SlotSig$$get_Name = SlotSig$$get_Name;
exports.SlotSig$$get_ImplementedType = SlotSig$$get_ImplementedType;
exports.SlotSig$$get_ClassTypars = SlotSig$$get_ClassTypars;
exports.SlotSig$$get_MethodTypars = SlotSig$$get_MethodTypars;
exports.SlotSig$$get_FormalParams = SlotSig$$get_FormalParams;
exports.SlotSig$$get_FormalReturnType = SlotSig$$get_FormalReturnType;
exports.SlotSig$$get_DebugText = SlotSig$$get_DebugText;
exports.SlotParam$$get_Type = SlotParam$$get_Type;
exports.SlotParam$$get_DebugText = SlotParam$$get_DebugText;
exports.ModuleOrNamespaceExprWithSig$$get_Type = ModuleOrNamespaceExprWithSig$$get_Type;
exports.ModuleOrNamespaceExprWithSig$$get_DebugText = ModuleOrNamespaceExprWithSig$$get_DebugText;
exports.ModuleOrNamespaceExpr$$get_DebugText = ModuleOrNamespaceExpr$$get_DebugText;
exports.ModuleOrNamespaceBinding$$get_DebugText = ModuleOrNamespaceBinding$$get_DebugText;
exports.TypedImplFile$$get_DebugText = TypedImplFile$$get_DebugText;
exports.TypedAssemblyAfterOptimization$$get_DebugText = TypedAssemblyAfterOptimization$$get_DebugText;
exports.FreeTyvars$$get_DebugText = FreeTyvars$$get_DebugText;
exports.FreeVars$$get_DebugText = FreeVars$$get_DebugText;
exports.CompiledTypeRepr$$get_DebugText = CompiledTypeRepr$$get_DebugText;
exports.ValReprInfoModule$$$InferTyparInfo = ValReprInfoModule$$$InferTyparInfo;
exports.ValReprInfoModule$$$InferArgReprInfo = ValReprInfoModule$$$InferArgReprInfo;
exports.ValReprInfoModule$$$InferArgReprInfos = ValReprInfoModule$$$InferArgReprInfos;
exports.ValReprInfoModule$$$HasNoArgs = ValReprInfoModule$$$HasNoArgs;
exports.typeOfVal = typeOfVal;
exports.typesOfVals = typesOfVals;
exports.nameOfVal = nameOfVal;
exports.arityOfVal = arityOfVal;
exports.mkRawRefTupleTy = mkRawRefTupleTy;
exports.mkRawStructTupleTy = mkRawStructTupleTy;
exports.mapTImplFile = mapTImplFile;
exports.mapAccImplFile = mapAccImplFile;
exports.foldTImplFile = foldTImplFile;
exports.typarEq = typarEq;
exports.typarRefEq = typarRefEq;
exports.valEq = valEq;
exports.ccuEq = ccuEq;
exports.$007CValDeref$007C = $007CValDeref$007C;
exports.mkRecdFieldRef = mkRecdFieldRef;
exports.mkUnionCaseRef = mkUnionCaseRef;
exports.ERefLocal = ERefLocal;
exports.ERefNonLocal = ERefNonLocal;
exports.ERefNonLocalPreResolved = ERefNonLocalPreResolved;
exports.$007CERefLocal$007CERefNonLocal$007C = $007CERefLocal$007CERefNonLocal$007C;
exports.mkLocalTyconRef = mkLocalTyconRef;
exports.mkNonLocalEntityRef = mkNonLocalEntityRef;
exports.mkNestedNonLocalEntityRef = mkNestedNonLocalEntityRef;
exports.mkNonLocalTyconRef = mkNonLocalTyconRef;
exports.mkNonLocalTyconRefPreResolved = mkNonLocalTyconRefPreResolved;
exports.EntityRef$$NestedTyconRef$$Z52A308BB = EntityRef$$NestedTyconRef$$Z52A308BB;
exports.EntityRef$$RecdFieldRefInNestedTycon = EntityRef$$RecdFieldRefInNestedTycon;
exports.mkModuleUnionCaseRef = mkModuleUnionCaseRef;
exports.VRefLocal = VRefLocal;
exports.VRefNonLocal = VRefNonLocal;
exports.VRefNonLocalPreResolved = VRefNonLocalPreResolved;
exports.$007CVRefLocal$007CVRefNonLocal$007C = $007CVRefLocal$007CVRefNonLocal$007C;
exports.mkNonLocalValRef = mkNonLocalValRef;
exports.mkNonLocalValRefPreResolved = mkNonLocalValRefPreResolved;
exports.ccuOfValRef = ccuOfValRef;
exports.ccuOfTyconRef = ccuOfTyconRef;
exports.mkTyparTy = mkTyparTy;
exports.copyTypar = copyTypar;
exports.copyTypars = copyTypars;
exports.tryShortcutSolvedUnitPar = tryShortcutSolvedUnitPar;
exports.stripUnitEqnsAux = stripUnitEqnsAux;
exports.stripTyparEqnsAux = stripTyparEqnsAux;
exports.stripTyparEqns = stripTyparEqns;
exports.stripUnitEqns = stripUnitEqns;
exports.mkLocalValRef = mkLocalValRef;
exports.mkLocalModRef = mkLocalModRef;
exports.mkLocalEntityRef = mkLocalEntityRef;
exports.mkNonLocalCcuRootEntityRef = mkNonLocalCcuRootEntityRef;
exports.mkNestedValRef = mkNestedValRef;
exports.rescopePubPathToParent = rescopePubPathToParent;
exports.rescopePubPath = rescopePubPath;
exports.valRefInThisAssembly = valRefInThisAssembly;
exports.tyconRefUsesLocalXmlDoc = tyconRefUsesLocalXmlDoc;
exports.entityRefInThisAssembly = entityRefInThisAssembly;
exports.arrayPathEq = arrayPathEq;
exports.nonLocalRefEq = nonLocalRefEq;
exports.nonLocalRefDefinitelyNotEq = nonLocalRefDefinitelyNotEq;
exports.pubPathEq = pubPathEq;
exports.fslibRefEq = fslibRefEq;
exports.fslibEntityRefEq = fslibEntityRefEq;
exports.fslibValRefEq = fslibValRefEq;
exports.primEntityRefEq = primEntityRefEq;
exports.primUnionCaseRefEq = primUnionCaseRefEq;
exports.primValRefEq = primValRefEq;
exports.fullCompPathOfModuleOrNamespace = fullCompPathOfModuleOrNamespace;
exports.canAccessFromOneOf = canAccessFromOneOf;
exports.canAccessFrom = canAccessFrom;
exports.canAccessFromEverywhere = canAccessFromEverywhere;
exports.canAccessFromSomewhere = canAccessFromSomewhere;
exports.isLessAccessible = isLessAccessible;
exports.accessSubstPaths = accessSubstPaths;
exports.compPathOfCcu = compPathOfCcu;
exports.taccessPrivate = taccessPrivate;
exports.combineAccess = combineAccess;
exports.NewFreeVarsCache = NewFreeVarsCache;
exports.MakeUnionCasesTable = MakeUnionCasesTable;
exports.MakeRecdFieldsTable = MakeRecdFieldsTable;
exports.MakeUnionCases = MakeUnionCases;
exports.MakeUnionRepr = MakeUnionRepr;
exports.NewTypar = NewTypar;
exports.NewRigidTypar = NewRigidTypar;
exports.NewUnionCase = NewUnionCase;
exports.NewModuleOrNamespaceType = NewModuleOrNamespaceType;
exports.NewEmptyModuleOrNamespaceType = NewEmptyModuleOrNamespaceType;
exports.NewExn = NewExn;
exports.NewRecdField = NewRecdField;
exports.NewTycon = NewTycon;
exports.NewILTycon = NewILTycon;
exports.NewModuleOrNamespace = NewModuleOrNamespace;
exports.NewVal = NewVal;
exports.NewCcuContents = NewCcuContents;
exports.NewModifiedTycon = NewModifiedTycon;
exports.NewModifiedModuleOrNamespace = NewModifiedModuleOrNamespace;
exports.NewModifiedVal = NewModifiedVal;
exports.NewClonedModuleOrNamespace = NewClonedModuleOrNamespace;
exports.NewClonedTycon = NewClonedTycon;
exports.CombineCcuContentFragments = CombineCcuContentFragments;
exports.ValReprInfoModule$$$unnamedRetVal = exports.ValReprInfoModule$$$unitArgData = exports.ValReprInfoModule$$$unnamedTopArg = exports.ValReprInfoModule$$$unnamedTopArg1 = exports.ValLinkageFullKey = exports.ModuleOrNamespaceType = exports.CompiledTypeRepr = exports.FreeVars = exports.FreeTyvars = exports.TypedAssemblyAfterOptimization = exports.TypedImplFile = exports.ModuleOrNamespaceBinding = exports.ModuleOrNamespaceExpr = exports.ModuleOrNamespaceExprWithSig = exports.SlotParam = exports.SlotSig = exports.ObjExprMethod = exports.StaticOptimization = exports.ValUseFlag = exports.SequentialOpKind = exports.LValueOperation = exports.ForLoopStyle = exports.SpecialWhileLoopMarker = exports.RecordConstructionInfo = exports.TOp = exports.Expr = exports.TyparReprInfo = exports.ArgReprInfo = exports.ValReprInfo = exports.ActivePatternElemRef = exports.Binding = exports.DecisionTreeTarget = exports.DecisionTreeTest = exports.DecisionTreeCase = exports.DecisionTree = exports.Const = exports.AttribNamedArg = exports.AttribExpr = exports.Attrib = exports.AttribKind = exports.PickledCcuInfo = exports.CcuResolutionResult = exports.CcuThunk = exports.CcuData = exports.Measure = exports.TupInfo = exports.TType = exports.RecdFieldRef = exports.UnionCaseRef = exports.ValRef = exports.EntityRef = exports.NonLocalEntityRef = exports.ValPublicPath = exports.NonLocalValOrMemberRef = exports.ValMemberInfo = exports.Val = exports.ValOptionalData = exports.ValLinkagePartialKey = exports.TraitConstraintSln = exports.TraitConstraintInfo = exports.TyparConstraint = exports.Typar = exports.TyparOptionalData = exports.Accessibility = exports.Construct = exports.ExceptionInfo = exports.RecdField = exports.UnionCase = exports.TyconUnionData = exports.TyconUnionCases = exports.TyconRecdFields = exports.TyconObjModelData = exports.TyconObjModelKind = exports.TILObjectReprData = exports.TyconRepresentation = exports.TyconAugmentation = exports.ParentRef = exports.MaybeLazy$00601 = exports.Entity = exports.EntityOptionalData = exports.CompilationPath = exports.PublicPath = exports.ModuleOrNamespaceKind = exports.InternalUndefinedItemRef = exports.UndefinedName = exports.unassignedTyparName = exports.EntityFlags = exports.TyparFlags = exports.TyparRigidity = exports.TyparKind = exports.ValFlags = exports.ValBaseOrThisInfo = exports.TyparDynamicReq = exports.ValMutability = exports.ValRecursiveScopeInfo = exports.ValInline = exports.globalStableNameGenerator = exports.globalNng = exports.newStamp = exports.newUnique = void 0;
exports.FSharpSignatureDataResourceName2 = exports.FSharpOptimizationDataResourceName2 = exports.FSharpSignatureDataResourceName = exports.FSharpOptimizationDataResourceName = exports.FullAbstraction = exports.NameClash = exports.Duplicate = exports.taccessInternal = exports.compPathInternal = exports.taccessPublic = exports.structnessDefault = exports.tupInfoStruct = exports.tupInfoRef = exports.ValReprInfoModule$$$emptyValData = exports.ValReprInfoModule$$$selfMetadata = void 0;

var _Long = require("../fable-core.2.0.3/Long");

var _Types = require("../fable-core.2.0.3/Types");

var _ast = require("./ast");

var _PrettyNaming = require("./PrettyNaming");

var _List = require("../fable-core.2.0.3/List");

var _il = require("../absil/il");

var _Array = require("../fable-core.2.0.3/Array");

var _illib = require("../absil/illib");

var _String = require("../fable-core.2.0.3/String");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _Util = require("../fable-core.2.0.3/Util");

var _Seq = require("../fable-core.2.0.3/Seq");

var _lib = require("./lib");

var _Map = require("../fable-core.2.0.3/Map");

var _QueueList = require("./QueueList");

var _Option = require("../fable-core.2.0.3/Option");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

const newUnique = (() => {
  const i = new _Types.FSharpRef((0, _Long.fromBits)(0, 0, false));
  return function () {
    i.contents = (0, _Long.op_Addition)(i.contents, (0, _Long.fromBits)(1, 0, false));
    return i.contents;
  };
})();

exports.newUnique = newUnique;

const newStamp = (() => {
  const i$$1 = new _Types.FSharpRef((0, _Long.fromBits)(0, 0, false));
  return function () {
    i$$1.contents = (0, _Long.op_Addition)(i$$1.contents, (0, _Long.fromBits)(1, 0, false));
    return i$$1.contents;
  };
})();

exports.newStamp = newStamp;
const globalNng = (0, _ast.NiceNameGenerator$$$$002Ector)();
exports.globalNng = globalNng;
const globalStableNameGenerator = (0, _ast.StableNiceNameGenerator$$$$002Ector)();
exports.globalStableNameGenerator = globalStableNameGenerator;
const ValInline = (0, _Types.declare)(function ValInline(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ValInline = ValInline;

function ValInline$$get_MustInline(x) {
  var $target$$30;

  switch (x.tag) {
    case 1:
      $target$$30 = 0;
      break;

    case 2:
    case 3:
      $target$$30 = 1;
      break;

    default:
      $target$$30 = 0;
  }

  switch ($target$$30) {
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

const ValRecursiveScopeInfo = (0, _Types.declare)(function ValRecursiveScopeInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ValRecursiveScopeInfo = ValRecursiveScopeInfo;
const ValMutability = (0, _Types.declare)(function ValMutability(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ValMutability = ValMutability;
const TyparDynamicReq = (0, _Types.declare)(function TyparDynamicReq(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TyparDynamicReq = TyparDynamicReq;
const ValBaseOrThisInfo = (0, _Types.declare)(function ValBaseOrThisInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ValBaseOrThisInfo = ValBaseOrThisInfo;
const ValFlags = (0, _Types.declare)(function ValFlags(flags) {
  const $this$$1 = this;
  $this$$1.flags = flags;
}, _Types.Record);
exports.ValFlags = ValFlags;

function ValFlags$$$$002Ector$$Z524259C1(flags) {
  return this != null ? ValFlags.call(this, flags) : new ValFlags(flags);
}

function ValFlags$$$$002Ector$$2001ECD3(recValInfo, baseOrThis, isCompGen, inlineInfo, isMutable, isModuleOrMemberBinding, isExtensionMember, isIncrClassSpecialMember, isTyFunc, allowTypeInst, isGeneratedEventVal) {
  const flags$$1 = (0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)(baseOrThis.tag === 0 ? (0, _Long.fromBits)(2, 0, false) : baseOrThis.tag === 2 ? (0, _Long.fromBits)(4, 0, false) : baseOrThis.tag === 3 ? (0, _Long.fromBits)(6, 0, false) : (0, _Long.fromBits)(0, 0, false), isCompGen ? (0, _Long.fromBits)(8, 0, false) : (0, _Long.fromBits)(0, 0, false)), inlineInfo.tag === 1 ? (0, _Long.fromBits)(16, 0, false) : inlineInfo.tag === 2 ? (0, _Long.fromBits)(32, 0, false) : inlineInfo.tag === 3 ? (0, _Long.fromBits)(48, 0, false) : (0, _Long.fromBits)(0, 0, false)), isMutable.tag === 1 ? (0, _Long.fromBits)(64, 0, false) : (0, _Long.fromBits)(0, 0, false)), isModuleOrMemberBinding ? (0, _Long.fromBits)(128, 0, false) : (0, _Long.fromBits)(0, 0, false)), isExtensionMember ? (0, _Long.fromBits)(256, 0, false) : (0, _Long.fromBits)(0, 0, false)), isIncrClassSpecialMember ? (0, _Long.fromBits)(512, 0, false) : (0, _Long.fromBits)(0, 0, false)), isTyFunc ? (0, _Long.fromBits)(1024, 0, false) : (0, _Long.fromBits)(0, 0, false)), recValInfo.tag === 0 ? recValInfo.fields[0] ? (0, _Long.fromBits)(2048, 0, false) : (0, _Long.fromBits)(4096, 0, false) : (0, _Long.fromBits)(0, 0, false)), allowTypeInst ? (0, _Long.fromBits)(16384, 0, false) : (0, _Long.fromBits)(0, 0, false)), isGeneratedEventVal ? (0, _Long.fromBits)(131072, 0, false) : (0, _Long.fromBits)(0, 0, false));
  return ValFlags$$$$002Ector$$Z524259C1.call(this, flags$$1);
}

function ValFlags$$get_BaseOrThisInfo(x$$1) {
  const matchValue = (0, _Long.op_BitwiseAnd)(x$$1.flags, (0, _Long.fromBits)(6, 0, false));

  if ((0, _Long.equals)(matchValue, (0, _Long.fromBits)(0, 0, false))) {
    return new ValBaseOrThisInfo(1, "BaseVal");
  } else if ((0, _Long.equals)(matchValue, (0, _Long.fromBits)(2, 0, false))) {
    return new ValBaseOrThisInfo(0, "CtorThisVal");
  } else if ((0, _Long.equals)(matchValue, (0, _Long.fromBits)(4, 0, false))) {
    return new ValBaseOrThisInfo(2, "NormalVal");
  } else if ((0, _Long.equals)(matchValue, (0, _Long.fromBits)(6, 0, false))) {
    return new ValBaseOrThisInfo(3, "MemberThisVal");
  } else {
    throw new Error("unreachable");
  }
}

function ValFlags$$get_IsCompilerGenerated(x$$2) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$2.flags, (0, _Long.fromBits)(8, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function ValFlags$$SetIsCompilerGenerated$$Z1FBCCD16(x$$3, isCompGen$$1) {
  const flags$$2 = (0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseAnd)(x$$3.flags, (0, _Long.op_LogicalNot)((0, _Long.fromBits)(8, 0, false))), isCompGen$$1 ? (0, _Long.fromBits)(8, 0, false) : (0, _Long.fromBits)(0, 0, false));
  return ValFlags$$$$002Ector$$Z524259C1(flags$$2);
}

function ValFlags$$get_InlineInfo(x$$4) {
  const matchValue$$1 = (0, _Long.op_BitwiseAnd)(x$$4.flags, (0, _Long.fromBits)(48, 0, false));

  if ((0, _Long.equals)(matchValue$$1, (0, _Long.fromBits)(0, 0, false))) {
    return new ValInline(0, "PseudoVal");
  } else if ((0, _Long.equals)(matchValue$$1, (0, _Long.fromBits)(16, 0, false))) {
    return new ValInline(1, "Always");
  } else if ((0, _Long.equals)(matchValue$$1, (0, _Long.fromBits)(32, 0, false))) {
    return new ValInline(2, "Optional");
  } else if ((0, _Long.equals)(matchValue$$1, (0, _Long.fromBits)(48, 0, false))) {
    return new ValInline(3, "Never");
  } else {
    throw new Error("unreachable");
  }
}

function ValFlags$$get_MutabilityInfo(x$$5) {
  const matchValue$$2 = (0, _Long.op_BitwiseAnd)(x$$5.flags, (0, _Long.fromBits)(64, 0, false));

  if ((0, _Long.equals)(matchValue$$2, (0, _Long.fromBits)(0, 0, false))) {
    return new ValMutability(0, "Immutable");
  } else if ((0, _Long.equals)(matchValue$$2, (0, _Long.fromBits)(64, 0, false))) {
    return new ValMutability(1, "Mutable");
  } else {
    throw new Error("unreachable");
  }
}

function ValFlags$$get_IsMemberOrModuleBinding(x$$6) {
  const matchValue$$3 = (0, _Long.op_BitwiseAnd)(x$$6.flags, (0, _Long.fromBits)(128, 0, false));

  if ((0, _Long.equals)(matchValue$$3, (0, _Long.fromBits)(0, 0, false))) {
    return false;
  } else if ((0, _Long.equals)(matchValue$$3, (0, _Long.fromBits)(128, 0, false))) {
    return true;
  } else {
    throw new Error("unreachable");
  }
}

function ValFlags$$get_WithIsMemberOrModuleBinding(x$$7) {
  return ValFlags$$$$002Ector$$Z524259C1((0, _Long.op_BitwiseOr)(x$$7.flags, (0, _Long.fromBits)(128, 0, false)));
}

function ValFlags$$get_IsExtensionMember(x$$8) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$8.flags, (0, _Long.fromBits)(256, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function ValFlags$$get_IsIncrClassSpecialMember(x$$9) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$9.flags, (0, _Long.fromBits)(512, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function ValFlags$$get_IsTypeFunction(x$$10) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$10.flags, (0, _Long.fromBits)(1024, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function ValFlags$$get_RecursiveValInfo(x$$11) {
  const matchValue$$4 = (0, _Long.op_BitwiseAnd)(x$$11.flags, (0, _Long.fromBits)(6144, 0, false));

  if ((0, _Long.equals)(matchValue$$4, (0, _Long.fromBits)(0, 0, false))) {
    return new ValRecursiveScopeInfo(1, "ValNotInRecScope");
  } else if ((0, _Long.equals)(matchValue$$4, (0, _Long.fromBits)(2048, 0, false))) {
    return new ValRecursiveScopeInfo(0, "ValInRecScope", true);
  } else if ((0, _Long.equals)(matchValue$$4, (0, _Long.fromBits)(4096, 0, false))) {
    return new ValRecursiveScopeInfo(0, "ValInRecScope", false);
  } else {
    throw new Error("unreachable");
  }
}

function ValFlags$$WithRecursiveValInfo$$342B737B(x$$12, recValInfo$$1) {
  const flags$$3 = (0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseAnd)(x$$12.flags, (0, _Long.op_LogicalNot)((0, _Long.fromBits)(6144, 0, false))), recValInfo$$1.tag === 0 ? recValInfo$$1.fields[0] ? (0, _Long.fromBits)(2048, 0, false) : (0, _Long.fromBits)(4096, 0, false) : (0, _Long.fromBits)(0, 0, false));
  return ValFlags$$$$002Ector$$Z524259C1(flags$$3);
}

function ValFlags$$get_MakesNoCriticalTailcalls(x$$13) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$13.flags, (0, _Long.fromBits)(8192, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function ValFlags$$get_WithMakesNoCriticalTailcalls(x$$14) {
  return ValFlags$$$$002Ector$$Z524259C1((0, _Long.op_BitwiseOr)(x$$14.flags, (0, _Long.fromBits)(8192, 0, false)));
}

function ValFlags$$get_PermitsExplicitTypeInstantiation(x$$15) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$15.flags, (0, _Long.fromBits)(16384, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function ValFlags$$get_HasBeenReferenced(x$$16) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$16.flags, (0, _Long.fromBits)(32768, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function ValFlags$$get_WithHasBeenReferenced(x$$17) {
  return ValFlags$$$$002Ector$$Z524259C1((0, _Long.op_BitwiseOr)(x$$17.flags, (0, _Long.fromBits)(32768, 0, false)));
}

function ValFlags$$get_IsCompiledAsStaticPropertyWithoutField(x$$18) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$18.flags, (0, _Long.fromBits)(65536, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function ValFlags$$get_WithIsCompiledAsStaticPropertyWithoutField(x$$19) {
  return ValFlags$$$$002Ector$$Z524259C1((0, _Long.op_BitwiseOr)(x$$19.flags, (0, _Long.fromBits)(65536, 0, false)));
}

function ValFlags$$get_IsGeneratedEventVal(x$$20) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$20.flags, (0, _Long.fromBits)(131072, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function ValFlags$$get_IsFixed(x$$21) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$21.flags, (0, _Long.fromBits)(262144, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function ValFlags$$get_WithIsFixed(x$$22) {
  return ValFlags$$$$002Ector$$Z524259C1((0, _Long.op_BitwiseOr)(x$$22.flags, (0, _Long.fromBits)(262144, 0, false)));
}

function ValFlags$$get_PickledBits(x$$23) {
  return (0, _Long.op_BitwiseAnd)(x$$23.flags, (0, _Long.op_LogicalNot)((0, _Long.fromBits)(104448, 0, false)));
}

const TyparKind = (0, _Types.declare)(function TyparKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TyparKind = TyparKind;

function TyparKind$$get_AttrName(x$$24) {
  if (x$$24.tag === 1) {
    return "Measure";
  } else {
    return null;
  }
}

function TyparKind$$get_DebugText(x$$25) {
  return x$$25.toString();
}

TyparKind.prototype.toString = function () {
  const x$$26 = this;
  return x$$26.tag === 1 ? "measure" : "type";
};

const TyparRigidity = (0, _Types.declare)(function TyparRigidity(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TyparRigidity = TyparRigidity;

function TyparRigidity$$get_ErrorIfUnified(x$$27) {
  if (x$$27.tag === 0) {
    return true;
  } else {
    return false;
  }
}

function TyparRigidity$$get_WarnIfUnified(x$$28) {
  var $target$$31;

  switch (x$$28.tag) {
    case 1:
    case 2:
      $target$$31 = 0;
      break;

    default:
      $target$$31 = 1;
  }

  switch ($target$$31) {
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

function TyparRigidity$$get_WarnIfMissingConstraint(x$$29) {
  if (x$$29.tag === 1) {
    return true;
  } else {
    return false;
  }
}

const TyparFlags = (0, _Types.declare)(function TyparFlags(flags$$4) {
  const $this$$2 = this;
  $this$$2.flags = flags$$4;
}, _Types.Record);
exports.TyparFlags = TyparFlags;

function TyparFlags$$$$002Ector$$Z524259A4(flags$$4) {
  return this != null ? TyparFlags.call(this, flags$$4) : new TyparFlags(flags$$4);
}

function TyparFlags$$$$002Ector$$Z7882EFDC(kind, rigidity, isFromError, isCompGen$$2, staticReq, dynamicReq, equalityDependsOn, comparisonDependsOn) {
  return TyparFlags$$$$002Ector$$Z524259A4.call(this, (isFromError ? 2 : 0) | (isCompGen$$2 ? 4 : 0) | (staticReq.tag === 1 ? 8 : 0) | (rigidity.tag === 1 ? 32 : rigidity.tag === 2 ? 64 : rigidity.tag === 3 ? 96 : rigidity.tag === 4 ? 128 : 0) | (kind.tag === 1 ? 256 : 0) | (comparisonDependsOn ? 512 : 0) | (dynamicReq.tag === 1 ? 1024 : 0) | (equalityDependsOn ? 2048 : 0));
}

function TyparFlags$$get_IsFromError(x$$30) {
  return (x$$30.flags & 2) !== 0;
}

function TyparFlags$$get_IsCompilerGenerated(x$$31) {
  return (x$$31.flags & 4) !== 0;
}

function TyparFlags$$get_StaticReq(x$$32) {
  const matchValue$$5 = x$$32.flags & 8 | 0;

  switch (matchValue$$5) {
    case 0:
      {
        return new _ast.TyparStaticReq(0, "NoStaticReq");
      }

    case 8:
      {
        return new _ast.TyparStaticReq(1, "HeadTypeStaticReq");
      }

    default:
      {
        throw new Error("unreachable");
      }
  }
}

function TyparFlags$$get_Rigidity(x$$33) {
  const matchValue$$6 = x$$33.flags & 224 | 0;

  switch (matchValue$$6) {
    case 0:
      {
        return new TyparRigidity(0, "Rigid");
      }

    case 32:
      {
        return new TyparRigidity(1, "WillBeRigid");
      }

    case 64:
      {
        return new TyparRigidity(2, "WarnIfNotRigid");
      }

    case 96:
      {
        return new TyparRigidity(3, "Flexible");
      }

    case 128:
      {
        return new TyparRigidity(4, "Anon");
      }

    default:
      {
        throw new Error("unreachable");
      }
  }
}

function TyparFlags$$get_Kind(x$$34) {
  const matchValue$$7 = x$$34.flags & 4352 | 0;

  switch (matchValue$$7) {
    case 0:
      {
        return new TyparKind(0, "Type");
      }

    case 256:
      {
        return new TyparKind(1, "Measure");
      }

    default:
      {
        throw new Error("unreachable");
      }
  }
}

function TyparFlags$$get_ComparisonConditionalOn(x$$35) {
  return (x$$35.flags & 512) !== 0;
}

function TyparFlags$$get_DynamicReq(x$$36) {
  const matchValue$$8 = x$$36.flags & 1024 | 0;

  switch (matchValue$$8) {
    case 0:
      {
        return new TyparDynamicReq(0, "No");
      }

    case 1024:
      {
        return new TyparDynamicReq(1, "Yes");
      }

    default:
      {
        throw new Error("unreachable");
      }
  }
}

function TyparFlags$$get_EqualityConditionalOn(x$$37) {
  return (x$$37.flags & 2048) !== 0;
}

function TyparFlags$$get_IsCompatFlex(x$$38) {
  return (x$$38.flags & 8192) !== 0;
}

function TyparFlags$$WithCompatFlex$$Z1FBCCD16(x$$39, b) {
  if (b) {
    return TyparFlags$$$$002Ector$$Z524259A4(x$$39.flags | 8192);
  } else {
    return TyparFlags$$$$002Ector$$Z524259A4(x$$39.flags & ~8192);
  }
}

function TyparFlags$$get_PickledBits(x$$40) {
  return x$$40.flags;
}

const EntityFlags = (0, _Types.declare)(function EntityFlags(flags$$5) {
  const $this$$3 = this;
  $this$$3.flags = flags$$5;
}, _Types.Record);
exports.EntityFlags = EntityFlags;

function EntityFlags$$$$002Ector$$Z524259C1(flags$$5) {
  return this != null ? EntityFlags.call(this, flags$$5) : new EntityFlags(flags$$5);
}

function EntityFlags$$$$002Ector$$Z5A892296(usesPrefixDisplay, isModuleOrNamespace, preEstablishedHasDefaultCtor, hasSelfReferentialCtor, isStructRecordOrUnionType) {
  return EntityFlags$$$$002Ector$$Z524259C1.call(this, (0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)(isModuleOrNamespace ? (0, _Long.fromBits)(1, 0, false) : (0, _Long.fromBits)(0, 0, false), usesPrefixDisplay ? (0, _Long.fromBits)(2, 0, false) : (0, _Long.fromBits)(0, 0, false)), preEstablishedHasDefaultCtor ? (0, _Long.fromBits)(4, 0, false) : (0, _Long.fromBits)(0, 0, false)), hasSelfReferentialCtor ? (0, _Long.fromBits)(8, 0, false) : (0, _Long.fromBits)(0, 0, false)), isStructRecordOrUnionType ? (0, _Long.fromBits)(32, 0, false) : (0, _Long.fromBits)(0, 0, false)));
}

function EntityFlags$$get_IsModuleOrNamespace(x$$41) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$41.flags, (0, _Long.fromBits)(1, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function EntityFlags$$get_IsPrefixDisplay(x$$42) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$42.flags, (0, _Long.fromBits)(2, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function EntityFlags$$get_PreEstablishedHasDefaultConstructor(x$$43) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$43.flags, (0, _Long.fromBits)(4, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function EntityFlags$$get_HasSelfReferentialConstructor(x$$44) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$44.flags, (0, _Long.fromBits)(8, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function EntityFlags$$$get_ReservedBitForPickleFormatTyconReprFlag() {
  return (0, _Long.fromBits)(16, 0, false);
}

function EntityFlags$$get_IsStructRecordOrUnionType(x$$45) {
  return !(0, _Long.equals)((0, _Long.op_BitwiseAnd)(x$$45.flags, (0, _Long.fromBits)(32, 0, false)), (0, _Long.fromBits)(0, 0, false));
}

function EntityFlags$$get_TryIsByRefLike(x$$46) {
  const _arg1 = (0, _Long.op_BitwiseAnd)(x$$46.flags, (0, _Long.fromBits)(192, 0, false));

  if ((0, _Long.equals)(_arg1, (0, _Long.fromBits)(192, 0, false))) {
    return true;
  } else if ((0, _Long.equals)(_arg1, (0, _Long.fromBits)(128, 0, false))) {
    return false;
  } else {
    return null;
  }
}

function EntityFlags$$WithIsByRefLike$$Z1FBCCD16(x$$47, flag) {
  const flags$$6 = (0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseAnd)(x$$47.flags, (0, _Long.op_LogicalNot)((0, _Long.fromBits)(192, 0, false))), flag ? (0, _Long.fromBits)(192, 0, false) : (0, _Long.fromBits)(128, 0, false));
  return EntityFlags$$$$002Ector$$Z524259C1(flags$$6);
}

function EntityFlags$$get_TryIsReadOnly(x$$48) {
  const _arg2 = (0, _Long.op_BitwiseAnd)(x$$48.flags, (0, _Long.fromBits)(768, 0, false));

  if ((0, _Long.equals)(_arg2, (0, _Long.fromBits)(768, 0, false))) {
    return true;
  } else if ((0, _Long.equals)(_arg2, (0, _Long.fromBits)(512, 0, false))) {
    return false;
  } else {
    return null;
  }
}

function EntityFlags$$WithIsReadOnly$$Z1FBCCD16(x$$49, flag$$1) {
  const flags$$7 = (0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseAnd)(x$$49.flags, (0, _Long.op_LogicalNot)((0, _Long.fromBits)(768, 0, false))), flag$$1 ? (0, _Long.fromBits)(768, 0, false) : (0, _Long.fromBits)(512, 0, false));
  return EntityFlags$$$$002Ector$$Z524259C1(flags$$7);
}

function EntityFlags$$get_PickledBits(x$$50) {
  return (0, _Long.op_BitwiseAnd)(x$$50.flags, (0, _Long.op_LogicalNot)((0, _Long.fromBits)(964, 0, false)));
}

const unassignedTyparName = "?";
exports.unassignedTyparName = unassignedTyparName;
const UndefinedName = (0, _Types.declare)(function UndefinedName(arg1, arg2, arg3, arg4) {
  this.Data0 = arg1 | 0;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
}, _Types.FSharpException);
exports.UndefinedName = UndefinedName;
const InternalUndefinedItemRef = (0, _Types.declare)(function InternalUndefinedItemRef(arg1, arg2, arg3, arg4) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
}, _Types.FSharpException);
exports.InternalUndefinedItemRef = InternalUndefinedItemRef;

function KeyTyconByDemangledNameAndArity(nm, typars, x$$51) {
  return [new _PrettyNaming.NameArityPair(0, "NameArityPair", (0, _PrettyNaming.DemangleGenericTypeName)(nm), (0, _List.length)(typars)), x$$51];
}

function KeyTyconByAccessNames(nm$$1, x$$52) {
  if ((0, _PrettyNaming.IsMangledGenericName)(nm$$1)) {
    const dnm = (0, _PrettyNaming.DemangleGenericTypeName)(nm$$1);
    return [[nm$$1, x$$52], [dnm, x$$52]];
  } else {
    return [[nm$$1, x$$52]];
  }
}

const ModuleOrNamespaceKind = (0, _Types.declare)(function ModuleOrNamespaceKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ModuleOrNamespaceKind = ModuleOrNamespaceKind;

function getNameOfScopeRef(sref) {
  switch (sref.tag) {
    case 1:
      {
        const mref = sref.fields[0];
        return (0, _il.ILModuleRef$$get_Name)(mref);
      }

    case 2:
      {
        const aref = sref.fields[0];
        return (0, _il.ILAssemblyRef$$get_Name)(aref);
      }

    default:
      {
        return "<local>";
      }
  }
}

const PublicPath = (0, _Types.declare)(function PublicPath(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.PublicPath = PublicPath;

function PublicPath$$get_EnclosingPath(x$$53) {
  const pp = x$$53.fields[0];
  return pp.slice(0, pp.length - 2 + 1);
}

const CompilationPath = (0, _Types.declare)(function CompilationPath(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CompilationPath = CompilationPath;

function CompilationPath$$get_ILScopeRef(x$$54) {
  const scoref = x$$54.fields[0];
  return scoref;
}

function CompilationPath$$get_AccessPath(x$$55) {
  const p = x$$55.fields[1];
  return p;
}

function CompilationPath$$get_MangledPath(x$$56) {
  return (0, _List.map)(function (tuple) {
    return tuple[0];
  }, CompilationPath$$get_AccessPath(x$$56));
}

function CompilationPath$$NestedPublicPath$$31D53C78(x$$57, id) {
  return new PublicPath(0, "PubPath", (0, _Array.append)((0, _Array.ofList)(CompilationPath$$get_MangledPath(x$$57), Array), [(0, _ast.Ident$$get_idText)(id)], Array));
}

function CompilationPath$$get_ParentCompPath(x$$58) {
  const patternInput = (0, _illib.List$$$frontAndBack)(CompilationPath$$get_AccessPath(x$$58));
  return new CompilationPath(0, "CompPath", CompilationPath$$get_ILScopeRef(x$$58), patternInput[0]);
}

function CompilationPath$$NestedCompPath(x$$59, n, modKind) {
  return new CompilationPath(0, "CompPath", CompilationPath$$get_ILScopeRef(x$$59), (0, _List.append)(CompilationPath$$get_AccessPath(x$$59), (0, _Types.L)([n, modKind], (0, _Types.L)())));
}

function CompilationPath$$get_DemangledPath(x$$60) {
  return (0, _List.map)(function mapping(tupledArg) {
    return CompilationPath$$$DemangleEntityName(tupledArg[0], tupledArg[1]);
  }, CompilationPath$$get_AccessPath(x$$60));
}

function CompilationPath$$$DemangleEntityName(nm$$3, k$$1) {
  if (k$$1.tag === 0) {
    return (0, _illib.String$$$dropSuffix)(nm$$3, "Module");
  } else {
    return nm$$3;
  }
}

const EntityOptionalData = (0, _Types.declare)(function EntityOptionalData(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.entity_compiled_name = arg1;
  this.entity_other_range = arg2;
  this.entity_kind = arg3;
  this.entity_xmldoc = arg4;
  this.entity_xmldocsig = arg5;
  this.entity_tycon_abbrev = arg6;
  this.entity_tycon_repr_accessibility = arg7;
  this.entity_accessiblity = arg8;
  this.entity_exn_info = arg9;
}, _Types.Record);
exports.EntityOptionalData = EntityOptionalData;
const Entity = (0, _Types.declare)(function Entity(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13) {
  this.entity_typars = arg1;
  this.entity_flags = arg2;
  this.entity_stamp = arg3;
  this.entity_logical_name = arg4;
  this.entity_range = arg5;
  this.entity_attribs = arg6;
  this.entity_tycon_repr = arg7;
  this.entity_tycon_tcaug = arg8;
  this.entity_modul_contents = arg9;
  this.entity_pubpath = arg10;
  this.entity_cpath = arg11;
  this.entity_il_repr_cache = arg12;
  this.entity_opt_data = arg13;
}, _Types.Record);
exports.Entity = Entity;
const MaybeLazy$00601 = (0, _Types.declare)(function MaybeLazy$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.MaybeLazy$00601 = MaybeLazy$00601;
const ParentRef = (0, _Types.declare)(function ParentRef(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParentRef = ParentRef;
const TyconAugmentation = (0, _Types.declare)(function TyconAugmentation(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
  this.tcaug_compare = arg1;
  this.tcaug_compare_withc = arg2;
  this.tcaug_equals = arg3;
  this.tcaug_hash_and_equals_withc = arg4;
  this.tcaug_hasObjectGetHashCode = arg5;
  this.tcaug_adhoc_list = arg6;
  this.tcaug_adhoc = arg7;
  this.tcaug_interfaces = arg8;
  this.tcaug_super = arg9;
  this.tcaug_closed = arg10;
  this.tcaug_abstract = arg11;
}, _Types.Record);
exports.TyconAugmentation = TyconAugmentation;
const TyconRepresentation = (0, _Types.declare)(function TyconRepresentation(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TyconRepresentation = TyconRepresentation;
const TILObjectReprData = (0, _Types.declare)(function TILObjectReprData(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TILObjectReprData = TILObjectReprData;
const TyconObjModelKind = (0, _Types.declare)(function TyconObjModelKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TyconObjModelKind = TyconObjModelKind;
const TyconObjModelData = (0, _Types.declare)(function TyconObjModelData(arg1, arg2, arg3) {
  this.fsobjmodel_kind = arg1;
  this.fsobjmodel_vslots = arg2;
  this.fsobjmodel_rfields = arg3;
}, _Types.Record);
exports.TyconObjModelData = TyconObjModelData;
const TyconRecdFields = (0, _Types.declare)(function TyconRecdFields(arg1, arg2) {
  this.FieldsByIndex = arg1;
  this.FieldsByName = arg2;
}, _Types.Record);
exports.TyconRecdFields = TyconRecdFields;
const TyconUnionCases = (0, _Types.declare)(function TyconUnionCases(arg1, arg2) {
  this.CasesByIndex = arg1;
  this.CasesByName = arg2;
}, _Types.Record);
exports.TyconUnionCases = TyconUnionCases;
const TyconUnionData = (0, _Types.declare)(function TyconUnionData(arg1, arg2) {
  this.CasesTable = arg1;
  this.CompiledRepresentation = arg2;
}, _Types.Record);
exports.TyconUnionData = TyconUnionData;
const UnionCase = (0, _Types.declare)(function UnionCase(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.FieldTable = arg1;
  this.ReturnType = arg2;
  this.CompiledName = arg3;
  this.XmlDoc = arg4;
  this.XmlDocSig = arg5;
  this.Id = arg6;
  this.OtherRangeOpt = arg7;
  this.Accessibility = arg8;
  this.Attribs = arg9;
}, _Types.Record);
exports.UnionCase = UnionCase;
const RecdField = (0, _Types.declare)(function RecdField(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {
  this.rfield_mutable = arg1;
  this.rfield_xmldoc = arg2;
  this.rfield_xmldocsig = arg3;
  this.rfield_type = arg4;
  this.rfield_static = arg5;
  this.rfield_volatile = arg6;
  this.rfield_secret = arg7;
  this.rfield_const = arg8;
  this.rfield_access = arg9;
  this.rfield_pattribs = arg10;
  this.rfield_fattribs = arg11;
  this.rfield_id = arg12;
  this.rfield_name_generated = arg13;
  this.rfield_other_range = arg14;
}, _Types.Record);
exports.RecdField = RecdField;
const ExceptionInfo = (0, _Types.declare)(function ExceptionInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ExceptionInfo = ExceptionInfo;
const Construct = (0, _Types.declare)(function Construct() {});
exports.Construct = Construct;
const Accessibility = (0, _Types.declare)(function Accessibility(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Accessibility = Accessibility;
const TyparOptionalData = (0, _Types.declare)(function TyparOptionalData(arg1, arg2, arg3, arg4) {
  this.typar_il_name = arg1;
  this.typar_xmldoc = arg2;
  this.typar_constraints = arg3;
  this.typar_attribs = arg4;
}, _Types.Record);
exports.TyparOptionalData = TyparOptionalData;
const Typar = (0, _Types.declare)(function Typar(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.typar_id = arg1;
  this.typar_flags = arg2;
  this.typar_stamp = arg3;
  this.typar_solution = arg4;
  this.typar_astype = arg5;
  this.typar_opt_data = arg6;
}, _Types.Record);
exports.Typar = Typar;
const TyparConstraint = (0, _Types.declare)(function TyparConstraint(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TyparConstraint = TyparConstraint;
const TraitConstraintInfo = (0, _Types.declare)(function TraitConstraintInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TraitConstraintInfo = TraitConstraintInfo;
const TraitConstraintSln = (0, _Types.declare)(function TraitConstraintSln(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TraitConstraintSln = TraitConstraintSln;
const ValLinkagePartialKey = (0, _Types.declare)(function ValLinkagePartialKey(arg1, arg2, arg3, arg4) {
  this.MemberParentMangledName = arg1;
  this.MemberIsOverride = arg2;
  this.LogicalName = arg3;
  this.TotalArgCount = arg4 | 0;
}, _Types.Record);
exports.ValLinkagePartialKey = ValLinkagePartialKey;
const ValOptionalData = (0, _Types.declare)(function ValOptionalData(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
  this.val_compiled_name = arg1;
  this.val_other_range = arg2;
  this.val_const = arg3;
  this.val_defn = arg4;
  this.val_repr_info = arg5;
  this.val_access = arg6;
  this.val_xmldoc = arg7;
  this.val_member_info = arg8;
  this.val_declaring_entity = arg9;
  this.val_xmldocsig = arg10;
  this.val_attribs = arg11;
}, _Types.Record);
exports.ValOptionalData = ValOptionalData;
const Val = (0, _Types.declare)(function Val(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.val_logical_name = arg1;
  this.val_range = arg2;
  this.val_type = arg3;
  this.val_stamp = arg4;
  this.val_flags = arg5;
  this.val_opt_data = arg6;
}, _Types.Record);
exports.Val = Val;
const ValMemberInfo = (0, _Types.declare)(function ValMemberInfo(arg1, arg2, arg3, arg4) {
  this.ApparentEnclosingEntity = arg1;
  this.ImplementedSlotSigs = arg2;
  this.IsImplemented = arg3;
  this.MemberFlags = arg4;
}, _Types.Record);
exports.ValMemberInfo = ValMemberInfo;
const NonLocalValOrMemberRef = (0, _Types.declare)(function NonLocalValOrMemberRef(arg1, arg2) {
  this.EnclosingEntity = arg1;
  this.ItemKey = arg2;
}, _Types.Record);
exports.NonLocalValOrMemberRef = NonLocalValOrMemberRef;
const ValPublicPath = (0, _Types.declare)(function ValPublicPath(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ValPublicPath = ValPublicPath;
const NonLocalEntityRef = (0, _Types.declare)(function NonLocalEntityRef(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.NonLocalEntityRef = NonLocalEntityRef;
const EntityRef = (0, _Types.declare)(function EntityRef(arg1, arg2) {
  this.binding = arg1;
  this.nlr = arg2;
}, _Types.Record);
exports.EntityRef = EntityRef;
const ValRef = (0, _Types.declare)(function ValRef(arg1, arg2) {
  this.binding = arg1;
  this.nlr = arg2;
}, _Types.Record);
exports.ValRef = ValRef;
const UnionCaseRef = (0, _Types.declare)(function UnionCaseRef(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.UnionCaseRef = UnionCaseRef;
const RecdFieldRef = (0, _Types.declare)(function RecdFieldRef(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.RecdFieldRef = RecdFieldRef;
const TType = (0, _Types.declare)(function TType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TType = TType;
const TupInfo = (0, _Types.declare)(function TupInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TupInfo = TupInfo;
const Measure = (0, _Types.declare)(function Measure(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Measure = Measure;
const CcuData = (0, _Types.declare)(function CcuData(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
  this.FileName = arg1;
  this.ILScopeRef = arg2;
  this.Stamp = arg3;
  this.QualifiedName = arg4;
  this.SourceCodeDirectory = arg5;
  this.IsFSharp = arg6;
  this.UsesFSharp20PlusQuotations = arg7;
  this.Contents = arg8;
  this.TryGetILModuleDef = arg9;
  this.MemberSignatureEquality = arg10;
  this.TypeForwarders = arg11;
}, _Types.Record);
exports.CcuData = CcuData;
const CcuThunk = (0, _Types.declare)(function CcuThunk(arg1, arg2, arg3) {
  this.target = arg1;
  this.orphanfixup = arg2;
  this.name = arg3;
}, _Types.Record);
exports.CcuThunk = CcuThunk;
const CcuResolutionResult = (0, _Types.declare)(function CcuResolutionResult(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CcuResolutionResult = CcuResolutionResult;
const PickledCcuInfo = (0, _Types.declare)(function PickledCcuInfo(arg1, arg2, arg3) {
  this.mspec = arg1;
  this.compileTimeWorkingDir = arg2;
  this.usesQuotations = arg3;
}, _Types.Record);
exports.PickledCcuInfo = PickledCcuInfo;
const AttribKind = (0, _Types.declare)(function AttribKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AttribKind = AttribKind;
const Attrib = (0, _Types.declare)(function Attrib(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Attrib = Attrib;
const AttribExpr = (0, _Types.declare)(function AttribExpr(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AttribExpr = AttribExpr;
const AttribNamedArg = (0, _Types.declare)(function AttribNamedArg(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AttribNamedArg = AttribNamedArg;
const Const = (0, _Types.declare)(function Const(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Const = Const;
const DecisionTree = (0, _Types.declare)(function DecisionTree(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.DecisionTree = DecisionTree;
const DecisionTreeCase = (0, _Types.declare)(function DecisionTreeCase(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.DecisionTreeCase = DecisionTreeCase;
const DecisionTreeTest = (0, _Types.declare)(function DecisionTreeTest(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.DecisionTreeTest = DecisionTreeTest;
const DecisionTreeTarget = (0, _Types.declare)(function DecisionTreeTarget(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.DecisionTreeTarget = DecisionTreeTarget;
const Binding = (0, _Types.declare)(function Binding(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Binding = Binding;
const ActivePatternElemRef = (0, _Types.declare)(function ActivePatternElemRef(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ActivePatternElemRef = ActivePatternElemRef;
const ValReprInfo = (0, _Types.declare)(function ValReprInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ValReprInfo = ValReprInfo;
const ArgReprInfo = (0, _Types.declare)(function ArgReprInfo(arg1, arg2) {
  this.Attribs = arg1;
  this.Name = arg2;
}, _Types.Record);
exports.ArgReprInfo = ArgReprInfo;
const TyparReprInfo = (0, _Types.declare)(function TyparReprInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TyparReprInfo = TyparReprInfo;
const Expr = (0, _Types.declare)(function Expr(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Expr = Expr;
const TOp = (0, _Types.declare)(function TOp(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TOp = TOp;
const RecordConstructionInfo = (0, _Types.declare)(function RecordConstructionInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.RecordConstructionInfo = RecordConstructionInfo;
const SpecialWhileLoopMarker = (0, _Types.declare)(function SpecialWhileLoopMarker(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SpecialWhileLoopMarker = SpecialWhileLoopMarker;
const ForLoopStyle = (0, _Types.declare)(function ForLoopStyle(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ForLoopStyle = ForLoopStyle;
const LValueOperation = (0, _Types.declare)(function LValueOperation(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.LValueOperation = LValueOperation;
const SequentialOpKind = (0, _Types.declare)(function SequentialOpKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SequentialOpKind = SequentialOpKind;
const ValUseFlag = (0, _Types.declare)(function ValUseFlag(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ValUseFlag = ValUseFlag;
const StaticOptimization = (0, _Types.declare)(function StaticOptimization(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.StaticOptimization = StaticOptimization;
const ObjExprMethod = (0, _Types.declare)(function ObjExprMethod(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ObjExprMethod = ObjExprMethod;
const SlotSig = (0, _Types.declare)(function SlotSig(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SlotSig = SlotSig;
const SlotParam = (0, _Types.declare)(function SlotParam(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SlotParam = SlotParam;
const ModuleOrNamespaceExprWithSig = (0, _Types.declare)(function ModuleOrNamespaceExprWithSig(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ModuleOrNamespaceExprWithSig = ModuleOrNamespaceExprWithSig;
const ModuleOrNamespaceExpr = (0, _Types.declare)(function ModuleOrNamespaceExpr(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ModuleOrNamespaceExpr = ModuleOrNamespaceExpr;
const ModuleOrNamespaceBinding = (0, _Types.declare)(function ModuleOrNamespaceBinding(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ModuleOrNamespaceBinding = ModuleOrNamespaceBinding;
const TypedImplFile = (0, _Types.declare)(function TypedImplFile(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TypedImplFile = TypedImplFile;
const TypedAssemblyAfterOptimization = (0, _Types.declare)(function TypedAssemblyAfterOptimization(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TypedAssemblyAfterOptimization = TypedAssemblyAfterOptimization;
const FreeTyvars = (0, _Types.declare)(function FreeTyvars(arg1, arg2, arg3) {
  this.FreeTycons = arg1;
  this.FreeTraitSolutions = arg2;
  this.FreeTypars = arg3;
}, _Types.Record);
exports.FreeTyvars = FreeTyvars;
const FreeVars = (0, _Types.declare)(function FreeVars(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.FreeLocals = arg1;
  this.UsesMethodLocalConstructs = arg2;
  this.UsesUnboundRethrow = arg3;
  this.FreeLocalTyconReprs = arg4;
  this.FreeRecdFields = arg5;
  this.FreeUnionCases = arg6;
  this.FreeTyvars = arg7;
}, _Types.Record);
exports.FreeVars = FreeVars;
const CompiledTypeRepr = (0, _Types.declare)(function CompiledTypeRepr(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CompiledTypeRepr = CompiledTypeRepr;

function EntityOptionalData$$get_DebugText(x$$61) {
  return x$$61.toString();
}

EntityOptionalData.prototype.toString = function () {
  return "EntityOptionalData(...)";
};

function Entity$$$get_EmptyEntityOptData() {
  return new EntityOptionalData(null, null, new TyparKind(0, "Type"), (0, _ast.XmlDoc$$$get_Empty)(), "", null, new Accessibility(0, "TAccess", (0, _Types.L)()), new Accessibility(0, "TAccess", (0, _Types.L)()), new ExceptionInfo(3, "TExnNone"));
}

function Entity$$get_LogicalName(x$$63) {
  return x$$63.entity_logical_name;
}

function Entity$$get_CompiledName(x$$64) {
  const matchValue$$9 = x$$64.entity_opt_data;
  var $target$$32, s;

  if (matchValue$$9 != null) {
    if (matchValue$$9.entity_compiled_name != null) {
      $target$$32 = 0;
      s = matchValue$$9.entity_compiled_name;
    } else {
      $target$$32 = 1;
    }
  } else {
    $target$$32 = 1;
  }

  switch ($target$$32) {
    case 0:
      {
        return s;
      }

    case 1:
      {
        return Entity$$get_LogicalName(x$$64);
      }
  }
}

function Entity$$get_EntityCompiledName(x$$65) {
  const matchValue$$10 = x$$65.entity_opt_data;

  if (matchValue$$10 != null) {
    const optData = matchValue$$10;
    return optData.entity_compiled_name;
  } else {
    return null;
  }
}

function Entity$$SetCompiledName$$2297AD2E(x$$66, name) {
  var inputRecord;
  const matchValue$$11 = x$$66.entity_opt_data;

  if (matchValue$$11 != null) {
    const optData$$1 = matchValue$$11;
    optData$$1.entity_compiled_name = name;
  } else {
    x$$66.entity_opt_data = (inputRecord = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(name, inputRecord.entity_other_range, inputRecord.entity_kind, inputRecord.entity_xmldoc, inputRecord.entity_xmldocsig, inputRecord.entity_tycon_abbrev, inputRecord.entity_tycon_repr_accessibility, inputRecord.entity_accessiblity, inputRecord.entity_exn_info));
  }
}

function Entity$$get_DisplayName(x$$67) {
  return Entity$$GetDisplayName$$8EAA2C0(x$$67, false, false);
}

function Entity$$get_DisplayNameWithStaticParametersAndUnderscoreTypars(x$$68) {
  return Entity$$GetDisplayName$$8EAA2C0(x$$68, true, true);
}

function Entity$$get_DisplayNameWithStaticParameters(x$$69) {
  return Entity$$GetDisplayName$$8EAA2C0(x$$69, true, false);
}

function Entity$$GetDisplayName$$8EAA2C0(x$$70, withStaticParameters, withUnderscoreTypars) {
  const nm$$4 = Entity$$get_LogicalName(x$$70);

  const getName = function getName() {
    const matchValue$$12 = Entity$$get_TyparsNoRange(x$$70);

    if (matchValue$$12.tail == null) {
      return nm$$4;
    } else {
      const tps = matchValue$$12;
      const nm$$5 = (0, _PrettyNaming.DemangleGenericTypeName)(nm$$4);

      if (withUnderscoreTypars ? !(tps.tail == null) : false) {
        return nm$$5 + "<" + (0, _String.join)(",", ...(0, _Array.fill)(new Array((0, _List.length)(tps)), 0, (0, _List.length)(tps), "_")) + ">";
      } else {
        return nm$$5;
      }
    }
  };

  withStaticParameters;
  return getName();
}

function Entity$$get_Range(x$$71) {
  return x$$71.entity_range;
}

function Entity$$get_DefinitionRange(x$$72) {
  const matchValue$$13 = x$$72.entity_opt_data;
  var $target$$33, r;

  if (matchValue$$13 != null) {
    if (matchValue$$13.entity_other_range != null) {
      if (matchValue$$13.entity_other_range[1]) {
        $target$$33 = 0;
        r = matchValue$$13.entity_other_range[0];
      } else {
        $target$$33 = 1;
      }
    } else {
      $target$$33 = 1;
    }
  } else {
    $target$$33 = 1;
  }

  switch ($target$$33) {
    case 0:
      {
        return r;
      }

    case 1:
      {
        return Entity$$get_Range(x$$72);
      }
  }
}

function Entity$$get_SigRange(x$$73) {
  const matchValue$$14 = x$$73.entity_opt_data;
  var $target$$34, r$$1;

  if (matchValue$$14 != null) {
    if (matchValue$$14.entity_other_range != null) {
      if (matchValue$$14.entity_other_range[1]) {
        $target$$34 = 1;
      } else {
        $target$$34 = 0;
        r$$1 = matchValue$$14.entity_other_range[0];
      }
    } else {
      $target$$34 = 1;
    }
  } else {
    $target$$34 = 1;
  }

  switch ($target$$34) {
    case 0:
      {
        return r$$1;
      }

    case 1:
      {
        return Entity$$get_Range(x$$73);
      }
  }
}

function Entity$$SetOtherRange$$56F61A9(x$$74, m) {
  var inputRecord$$1;
  const matchValue$$15 = x$$74.entity_opt_data;

  if (matchValue$$15 != null) {
    const optData$$2 = matchValue$$15;
    optData$$2.entity_other_range = m;
  } else {
    x$$74.entity_opt_data = (inputRecord$$1 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$1.entity_compiled_name, m, inputRecord$$1.entity_kind, inputRecord$$1.entity_xmldoc, inputRecord$$1.entity_xmldocsig, inputRecord$$1.entity_tycon_abbrev, inputRecord$$1.entity_tycon_repr_accessibility, inputRecord$$1.entity_accessiblity, inputRecord$$1.entity_exn_info));
  }
}

function Entity$$get_Stamp(x$$75) {
  return x$$75.entity_stamp;
}

function Entity$$get_Attribs(x$$76) {
  return x$$76.entity_attribs;
}

function Entity$$get_XmlDoc(x$$77) {
  const matchValue$$16 = x$$77.entity_opt_data;

  if (matchValue$$16 != null) {
    const optData$$3 = matchValue$$16;
    return optData$$3.entity_xmldoc;
  } else {
    return (0, _ast.XmlDoc$$$get_Empty)();
  }
}

function Entity$$get_XmlDocSig(x$$78) {
  const matchValue$$17 = x$$78.entity_opt_data;

  if (matchValue$$17 != null) {
    const optData$$4 = matchValue$$17;
    return optData$$4.entity_xmldocsig;
  } else {
    return "";
  }
}

function Entity$$set_XmlDocSig$$Z721C83C5(x$$79, v) {
  var inputRecord$$2;
  const matchValue$$18 = x$$79.entity_opt_data;

  if (matchValue$$18 != null) {
    const optData$$5 = matchValue$$18;
    optData$$5.entity_xmldocsig = v;
  } else {
    x$$79.entity_opt_data = (inputRecord$$2 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$2.entity_compiled_name, inputRecord$$2.entity_other_range, inputRecord$$2.entity_kind, inputRecord$$2.entity_xmldoc, v, inputRecord$$2.entity_tycon_abbrev, inputRecord$$2.entity_tycon_repr_accessibility, inputRecord$$2.entity_accessiblity, inputRecord$$2.entity_exn_info));
  }
}

function Entity$$get_ModuleOrNamespaceType(x$$80) {
  return MaybeLazy$00601$$Force(x$$80.entity_modul_contents);
}

function Entity$$get_TypeContents(x$$81) {
  return x$$81.entity_tycon_tcaug;
}

function Entity$$get_TypeOrMeasureKind(x$$82) {
  const matchValue$$19 = x$$82.entity_opt_data;

  if (matchValue$$19 != null) {
    const optData$$6 = matchValue$$19;
    return optData$$6.entity_kind;
  } else {
    return new TyparKind(0, "Type");
  }
}

function Entity$$SetTypeOrMeasureKind$$Z53708FA8(x$$83, kind$$1) {
  var inputRecord$$3;
  const matchValue$$20 = x$$83.entity_opt_data;

  if (matchValue$$20 != null) {
    const optData$$7 = matchValue$$20;
    optData$$7.entity_kind = kind$$1;
  } else {
    x$$83.entity_opt_data = (inputRecord$$3 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$3.entity_compiled_name, inputRecord$$3.entity_other_range, kind$$1, inputRecord$$3.entity_xmldoc, inputRecord$$3.entity_xmldocsig, inputRecord$$3.entity_tycon_abbrev, inputRecord$$3.entity_tycon_repr_accessibility, inputRecord$$3.entity_accessiblity, inputRecord$$3.entity_exn_info));
  }
}

function Entity$$get_Id(x$$84) {
  return (0, _ast.ident)(Entity$$get_LogicalName(x$$84), Entity$$get_Range(x$$84));
}

function Entity$$get_TypeReprInfo(x$$85) {
  return x$$85.entity_tycon_repr;
}

function Entity$$get_ExceptionInfo(x$$86) {
  const matchValue$$21 = x$$86.entity_opt_data;

  if (matchValue$$21 != null) {
    const optData$$8 = matchValue$$21;
    return optData$$8.entity_exn_info;
  } else {
    return new ExceptionInfo(3, "TExnNone");
  }
}

function Entity$$SetExceptionInfo$$762AAD87(x$$87, exn_info) {
  var inputRecord$$4;
  const matchValue$$22 = x$$87.entity_opt_data;

  if (matchValue$$22 != null) {
    const optData$$9 = matchValue$$22;
    optData$$9.entity_exn_info = exn_info;
  } else {
    x$$87.entity_opt_data = (inputRecord$$4 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$4.entity_compiled_name, inputRecord$$4.entity_other_range, inputRecord$$4.entity_kind, inputRecord$$4.entity_xmldoc, inputRecord$$4.entity_xmldocsig, inputRecord$$4.entity_tycon_abbrev, inputRecord$$4.entity_tycon_repr_accessibility, inputRecord$$4.entity_accessiblity, exn_info));
  }
}

function Entity$$get_IsExceptionDecl(x$$88) {
  if (Entity$$get_ExceptionInfo(x$$88).tag === 3) {
    return false;
  } else {
    return true;
  }
}

function Entity$$get_DemangledModuleOrNamespaceName(x$$89) {
  return CompilationPath$$$DemangleEntityName(Entity$$get_LogicalName(x$$89), ModuleOrNamespaceType$$get_ModuleOrNamespaceKind(Entity$$get_ModuleOrNamespaceType(x$$89)));
}

function Entity$$Typars$$4DB9192C(x$$90, m$$1) {
  return (0, _illib.LazyWithContext$00602$$Force$$2B594)(x$$90.entity_typars, m$$1);
}

function Entity$$get_TyparsNoRange(x$$91) {
  return Entity$$Typars$$4DB9192C(x$$91, Entity$$get_Range(x$$91));
}

function Entity$$get_TypeAbbrev(x$$92) {
  const matchValue$$24 = x$$92.entity_opt_data;

  if (matchValue$$24 != null) {
    const optData$$10 = matchValue$$24;
    return optData$$10.entity_tycon_abbrev;
  } else {
    return null;
  }
}

function Entity$$SetTypeAbbrev$$5268D4C7(x$$93, tycon_abbrev) {
  var inputRecord$$5;
  const matchValue$$25 = x$$93.entity_opt_data;

  if (matchValue$$25 != null) {
    const optData$$11 = matchValue$$25;
    optData$$11.entity_tycon_abbrev = tycon_abbrev;
  } else {
    x$$93.entity_opt_data = (inputRecord$$5 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$5.entity_compiled_name, inputRecord$$5.entity_other_range, inputRecord$$5.entity_kind, inputRecord$$5.entity_xmldoc, inputRecord$$5.entity_xmldocsig, tycon_abbrev, inputRecord$$5.entity_tycon_repr_accessibility, inputRecord$$5.entity_accessiblity, inputRecord$$5.entity_exn_info));
  }
}

function Entity$$get_IsTypeAbbrev(x$$94) {
  return Entity$$get_TypeAbbrev(x$$94) != null;
}

function Entity$$get_TypeReprAccessibility(x$$95) {
  const matchValue$$26 = x$$95.entity_opt_data;

  if (matchValue$$26 != null) {
    const optData$$12 = matchValue$$26;
    return optData$$12.entity_tycon_repr_accessibility;
  } else {
    return new Accessibility(0, "TAccess", (0, _Types.L)());
  }
}

function Entity$$get_CompiledReprCache(x$$96) {
  return x$$96.entity_il_repr_cache;
}

function Entity$$get_PublicPath(x$$97) {
  return x$$97.entity_pubpath;
}

function Entity$$get_Accessibility(x$$98) {
  const matchValue$$27 = x$$98.entity_opt_data;

  if (matchValue$$27 != null) {
    const optData$$13 = matchValue$$27;
    return optData$$13.entity_accessiblity;
  } else {
    return new Accessibility(0, "TAccess", (0, _Types.L)());
  }
}

function Entity$$get_IsPrefixDisplay(x$$99) {
  return EntityFlags$$get_IsPrefixDisplay(x$$99.entity_flags);
}

function Entity$$get_IsModuleOrNamespace(x$$100) {
  return EntityFlags$$get_IsModuleOrNamespace(x$$100.entity_flags);
}

function Entity$$get_IsNamespace(x$$101) {
  if (Entity$$get_IsModuleOrNamespace(x$$101)) {
    if (ModuleOrNamespaceType$$get_ModuleOrNamespaceKind(Entity$$get_ModuleOrNamespaceType(x$$101)).tag === 2) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function Entity$$get_IsModule(x$$102) {
  if (Entity$$get_IsModuleOrNamespace(x$$102)) {
    if (ModuleOrNamespaceType$$get_ModuleOrNamespaceKind(Entity$$get_ModuleOrNamespaceType(x$$102)).tag === 2) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function Entity$$get_IsErased(x$$103) {
  return Entity$$get_IsMeasureableReprTycon(x$$103);
}

function Entity$$get_CompilationPathOpt(x$$104) {
  return x$$104.entity_cpath;
}

function Entity$$get_CompilationPath(x$$105) {
  const matchValue$$30 = Entity$$get_CompilationPathOpt(x$$105);

  if (matchValue$$30 == null) {
    return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastTypeOrModuleNotConcrete$$Z721C83C5)(Entity$$get_LogicalName(x$$105)), Entity$$get_Range(x$$105)));
  } else {
    const cpath = matchValue$$30;
    return cpath;
  }
}

function Entity$$get_AllFieldTable(x$$106) {
  const matchValue$$31 = Entity$$get_TypeReprInfo(x$$106);
  var $target$$35, x$$107;

  switch (matchValue$$31.tag) {
    case 1:
      $target$$35 = 0;
      x$$107 = matchValue$$31.fields[0];
      break;

    case 0:
      $target$$35 = 0;
      x$$107 = matchValue$$31.fields[0].fsobjmodel_rfields;
      break;

    default:
      $target$$35 = 1;
  }

  switch ($target$$35) {
    case 0:
      {
        return x$$107;
      }

    case 1:
      {
        const matchValue$$32 = Entity$$get_ExceptionInfo(x$$106);

        if (matchValue$$32.tag === 2) {
          const x$$108 = matchValue$$32.fields[0];
          return x$$108;
        } else {
          return new TyconRecdFields([], (0, _illib.NameMapModule$$$empty)());
        }
      }
  }
}

function Entity$$get_AllFieldsArray(x$$109) {
  return Entity$$get_AllFieldTable(x$$109).FieldsByIndex;
}

function Entity$$get_AllFieldsAsList(x$$110) {
  return (0, _Array.toList)(Entity$$get_AllFieldsArray(x$$110));
}

function Entity$$get_AllInstanceFieldsAsList(x$$111) {
  return (0, _List.filter)(function predicate(f) {
    return !RecdField$$get_IsStatic(f);
  }, Entity$$get_AllFieldsAsList(x$$111));
}

function Entity$$get_TrueFieldsAsList(x$$112) {
  return (0, _List.filter)(function predicate$$1(f$$1) {
    return !RecdField$$get_IsCompilerGenerated(f$$1);
  }, Entity$$get_AllFieldsAsList(x$$112));
}

function Entity$$get_TrueInstanceFieldsAsList(x$$113) {
  return (0, _List.filter)(function predicate$$2(f$$2) {
    if (!RecdField$$get_IsStatic(f$$2)) {
      return !RecdField$$get_IsCompilerGenerated(f$$2);
    } else {
      return false;
    }
  }, Entity$$get_AllFieldsAsList(x$$113));
}

function Entity$$GetFieldByIndex$$Z524259A4(x$$114, n$$1) {
  return TyconRecdFields$$FieldByIndex$$Z524259A4(Entity$$get_AllFieldTable(x$$114), n$$1);
}

function Entity$$GetFieldByName$$Z721C83C5(x$$115, n$$2) {
  return TyconRecdFields$$FieldByName$$Z721C83C5(Entity$$get_AllFieldTable(x$$115), n$$2);
}

function Entity$$get_IsUnionTycon(x$$116) {
  if (Entity$$get_TypeReprInfo(x$$116).tag === 2) {
    return true;
  } else {
    return false;
  }
}

function Entity$$get_UnionTypeInfo(x$$117) {
  const matchValue$$34 = Entity$$get_TypeReprInfo(x$$117);

  if (matchValue$$34.tag === 2) {
    const x$$118 = matchValue$$34.fields[0];
    return x$$118;
  } else {
    return null;
  }
}

function Entity$$get_UnionCasesArray(x$$119) {
  const matchValue$$35 = Entity$$get_UnionTypeInfo(x$$119);

  if (matchValue$$35 == null) {
    return [];
  } else {
    const x$$120 = matchValue$$35;
    return x$$120.CasesTable.CasesByIndex;
  }
}

function Entity$$get_UnionCasesAsList(x$$121) {
  return (0, _Array.toList)(Entity$$get_UnionCasesArray(x$$121));
}

function Entity$$GetUnionCaseByName$$Z721C83C5(x$$122, n$$3) {
  const matchValue$$36 = Entity$$get_UnionTypeInfo(x$$122);

  if (matchValue$$36 == null) {
    return null;
  } else {
    const x$$123 = matchValue$$36;
    return (0, _illib.NameMapModule$$$tryFind)(n$$3, x$$123.CasesTable.CasesByName);
  }
}

function Entity$$$NewUnlinked() {
  return new Entity(null, null, null, null, null, null, null, null, null, null, null, null, null);
}

function Entity$$$New(_reason, data) {
  return data;
}

function Entity$$Link$$Z52A308BB(x$$124, tg) {
  x$$124.entity_typars = tg.entity_typars;
  x$$124.entity_flags = tg.entity_flags;
  x$$124.entity_stamp = tg.entity_stamp;
  x$$124.entity_logical_name = tg.entity_logical_name;
  x$$124.entity_range = tg.entity_range;
  x$$124.entity_attribs = tg.entity_attribs;
  x$$124.entity_tycon_repr = tg.entity_tycon_repr;
  x$$124.entity_tycon_tcaug = tg.entity_tycon_tcaug;
  x$$124.entity_modul_contents = tg.entity_modul_contents;
  x$$124.entity_pubpath = tg.entity_pubpath;
  x$$124.entity_cpath = tg.entity_cpath;
  x$$124.entity_il_repr_cache = tg.entity_il_repr_cache;
  const matchValue$$37 = tg.entity_opt_data;

  if (matchValue$$37 == null) {} else {
    const tg$$1 = matchValue$$37;
    x$$124.entity_opt_data = new EntityOptionalData(tg$$1.entity_compiled_name, tg$$1.entity_other_range, tg$$1.entity_kind, tg$$1.entity_xmldoc, tg$$1.entity_xmldocsig, tg$$1.entity_tycon_abbrev, tg$$1.entity_tycon_repr_accessibility, tg$$1.entity_accessiblity, tg$$1.entity_exn_info);
  }
}

function Entity$$get_IsLinked(x$$125) {
  if ((0, _Util.equals)(x$$125.entity_attribs, null)) {
    return false;
  } else {
    return true;
  }
}

function Entity$$get_FSharpObjectModelTypeInfo(x$$126) {
  const matchValue$$39 = Entity$$get_TypeReprInfo(x$$126);

  if (matchValue$$39.tag === 0) {
    const x$$127 = matchValue$$39.fields[0];
    return x$$127;
  } else {
    throw new Error("not an F# object model type definition");
  }
}

function Entity$$get_IsILTycon(x$$128) {
  if (Entity$$get_TypeReprInfo(x$$128).tag === 3) {
    return true;
  } else {
    return false;
  }
}

function Entity$$get_ILTyconInfo(x$$129) {
  const matchValue$$41 = Entity$$get_TypeReprInfo(x$$129);

  if (matchValue$$41.tag === 3) {
    const data$$1 = matchValue$$41.fields[0];
    return data$$1;
  } else {
    throw new Error("not a .NET type definition");
  }
}

function Entity$$get_ILTyconRawMetadata(x$$130) {
  const td = Entity$$get_ILTyconInfo(x$$130).fields[2];
  return td;
}

function Entity$$get_IsRecordTycon(x$$131) {
  if (Entity$$get_TypeReprInfo(x$$131).tag === 1) {
    return true;
  } else {
    return false;
  }
}

function Entity$$get_IsStructRecordOrUnionTycon(x$$132) {
  const matchValue$$43 = Entity$$get_TypeReprInfo(x$$132);
  var $target$$36;

  switch (matchValue$$43.tag) {
    case 1:
    case 2:
      $target$$36 = 0;
      break;

    default:
      $target$$36 = 1;
  }

  switch ($target$$36) {
    case 0:
      {
        return EntityFlags$$get_IsStructRecordOrUnionType(x$$132.entity_flags);
      }

    case 1:
      {
        return false;
      }
  }
}

function Entity$$get_TryIsByRefLike(x$$133) {
  return EntityFlags$$get_TryIsByRefLike(x$$133.entity_flags);
}

function Entity$$SetIsByRefLike$$Z1FBCCD16(x$$134, b$$1) {
  x$$134.entity_flags = EntityFlags$$WithIsByRefLike$$Z1FBCCD16(x$$134.entity_flags, b$$1);
}

function Entity$$get_TryIsReadOnly(x$$135) {
  return EntityFlags$$get_TryIsReadOnly(x$$135.entity_flags);
}

function Entity$$SetIsReadOnly$$Z1FBCCD16(x$$136, b$$2) {
  x$$136.entity_flags = EntityFlags$$WithIsReadOnly$$Z1FBCCD16(x$$136.entity_flags, b$$2);
}

function Entity$$get_IsFSharpObjectModelTycon(x$$137) {
  if (Entity$$get_TypeReprInfo(x$$137).tag === 0) {
    return true;
  } else {
    return false;
  }
}

function Entity$$get_IsAsmReprTycon(x$$138) {
  if (Entity$$get_TypeReprInfo(x$$138).tag === 4) {
    return true;
  } else {
    return false;
  }
}

function Entity$$get_IsMeasureableReprTycon(x$$139) {
  if (Entity$$get_TypeReprInfo(x$$139).tag === 5) {
    return true;
  } else {
    return false;
  }
}

function Entity$$get_IsHiddenReprTycon(x$$140) {
  const matchValue$$47 = [Entity$$get_TypeAbbrev(x$$140), Entity$$get_TypeReprInfo(x$$140)];
  var $target$$37;

  if (matchValue$$47[0] == null) {
    if (matchValue$$47[1].tag === 6) {
      $target$$37 = 0;
    } else {
      $target$$37 = 1;
    }
  } else {
    $target$$37 = 1;
  }

  switch ($target$$37) {
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

function Entity$$get_IsFSharpInterfaceTycon(x$$141) {
  if (Entity$$get_IsFSharpObjectModelTycon(x$$141)) {
    if (Entity$$get_FSharpObjectModelTypeInfo(x$$141).fsobjmodel_kind.tag === 1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function Entity$$get_IsFSharpDelegateTycon(x$$142) {
  if (Entity$$get_IsFSharpObjectModelTycon(x$$142)) {
    if (Entity$$get_FSharpObjectModelTypeInfo(x$$142).fsobjmodel_kind.tag === 3) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function Entity$$get_IsFSharpEnumTycon(x$$143) {
  if (Entity$$get_IsFSharpObjectModelTycon(x$$143)) {
    if (Entity$$get_FSharpObjectModelTypeInfo(x$$143).fsobjmodel_kind.tag === 4) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function Entity$$get_IsFSharpClassTycon(x$$144) {
  if (Entity$$get_IsFSharpObjectModelTycon(x$$144)) {
    if (Entity$$get_FSharpObjectModelTypeInfo(x$$144).fsobjmodel_kind.tag === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function Entity$$get_IsILEnumTycon(x$$145) {
  if (Entity$$get_IsILTycon(x$$145)) {
    return (0, _il.ILTypeDef$$get_IsEnum)(Entity$$get_ILTyconRawMetadata(x$$145));
  } else {
    return false;
  }
}

function Entity$$get_IsEnumTycon(x$$146) {
  if (Entity$$get_IsILEnumTycon(x$$146)) {
    return true;
  } else {
    return Entity$$get_IsFSharpEnumTycon(x$$146);
  }
}

function Entity$$get_IsFSharpStructOrEnumTycon(x$$147) {
  const matchValue$$52 = Entity$$get_TypeReprInfo(x$$147);

  switch (matchValue$$52.tag) {
    case 1:
      {
        return Entity$$get_IsStructRecordOrUnionTycon(x$$147);
      }

    case 2:
      {
        return Entity$$get_IsStructRecordOrUnionTycon(x$$147);
      }

    case 0:
      {
        const info = matchValue$$52.fields[0];
        var $target$$38;

        if (info.fsobjmodel_kind.tag === 1) {
          $target$$38 = 0;
        } else if (info.fsobjmodel_kind.tag === 3) {
          $target$$38 = 0;
        } else if (info.fsobjmodel_kind.tag === 2) {
          $target$$38 = 1;
        } else if (info.fsobjmodel_kind.tag === 4) {
          $target$$38 = 1;
        } else {
          $target$$38 = 0;
        }

        switch ($target$$38) {
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

    default:
      {
        return false;
      }
  }
}

function Entity$$get_IsILStructOrEnumTycon(x$$148) {
  if (Entity$$get_IsILTycon(x$$148)) {
    return (0, _il.ILTypeDef$$get_IsStructOrEnum)(Entity$$get_ILTyconRawMetadata(x$$148));
  } else {
    return false;
  }
}

function Entity$$get_IsStructOrEnumTycon(x$$149) {
  if (Entity$$get_IsILStructOrEnumTycon(x$$149)) {
    return true;
  } else {
    return Entity$$get_IsFSharpStructOrEnumTycon(x$$149);
  }
}

function Entity$$get_ImmediateInterfacesOfFSharpTycon(x$$150) {
  return Entity$$get_TypeContents(x$$150).tcaug_interfaces;
}

function Entity$$get_ImmediateInterfaceTypesOfFSharpTycon(x$$151) {
  return (0, _List.map)(function mapping$$1(tupledArg$$1) {
    return tupledArg$$1[0];
  }, Entity$$get_ImmediateInterfacesOfFSharpTycon(x$$151));
}

function Entity$$get_MembersOfFSharpTyconSorted(x$$153) {
  return (0, _List.filter)(function predicate$$3(v$$1) {
    return !ValRef$$get_IsCompilerGenerated(v$$1);
  }, (0, _illib.NameMultiMapModule$$$rangeReversingEachBucket)(Entity$$get_TypeContents(x$$153).tcaug_adhoc));
}

function Entity$$get_MembersOfFSharpTyconByName(x$$154) {
  return Entity$$get_TypeContents(x$$154).tcaug_adhoc;
}

function Entity$$get_GeneratedHashAndEqualsWithComparerValues(x$$155) {
  return Entity$$get_TypeContents(x$$155).tcaug_hash_and_equals_withc;
}

function Entity$$get_GeneratedCompareToWithComparerValues(x$$156) {
  return Entity$$get_TypeContents(x$$156).tcaug_compare_withc;
}

function Entity$$get_GeneratedCompareToValues(x$$157) {
  return Entity$$get_TypeContents(x$$157).tcaug_compare;
}

function Entity$$get_GeneratedHashAndEqualsValues(x$$158) {
  return Entity$$get_TypeContents(x$$158).tcaug_equals;
}

function Entity$$get_AllGeneratedValues(x$$159) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    var matchValue$$54, v2, v1;
    return (0, _Seq.append)((matchValue$$54 = Entity$$get_GeneratedCompareToValues(x$$159), matchValue$$54 != null ? (v2 = matchValue$$54[1], (v1 = matchValue$$54[0], (0, _Seq.append)((0, _Seq.singleton)(v1), (0, _Seq.delay)(function () {
      return (0, _Seq.singleton)(v2);
    })))) : (null, (0, _Seq.empty)())), (0, _Seq.delay)(function () {
      var matchValue$$55, v$$2;
      return (0, _Seq.append)((matchValue$$55 = Entity$$get_GeneratedCompareToWithComparerValues(x$$159), matchValue$$55 != null ? (v$$2 = matchValue$$55, (0, _Seq.singleton)(v$$2)) : (null, (0, _Seq.empty)())), (0, _Seq.delay)(function () {
        var matchValue$$56, v2$$1, v1$$1;
        return (0, _Seq.append)((matchValue$$56 = Entity$$get_GeneratedHashAndEqualsValues(x$$159), matchValue$$56 != null ? (v2$$1 = matchValue$$56[1], (v1$$1 = matchValue$$56[0], (0, _Seq.append)((0, _Seq.singleton)(v1$$1), (0, _Seq.delay)(function () {
          return (0, _Seq.singleton)(v2$$1);
        })))) : (null, (0, _Seq.empty)())), (0, _Seq.delay)(function () {
          const matchValue$$57 = Entity$$get_GeneratedHashAndEqualsWithComparerValues(x$$159);

          if (matchValue$$57 != null) {
            const v3 = matchValue$$57[2];
            const v2$$2 = matchValue$$57[1];
            const v1$$2 = matchValue$$57[0];
            return (0, _Seq.append)((0, _Seq.singleton)(v1$$2), (0, _Seq.delay)(function () {
              return (0, _Seq.append)((0, _Seq.singleton)(v2$$2), (0, _Seq.delay)(function () {
                return (0, _Seq.singleton)(v3);
              }));
            }));
          } else {
            return (0, _Seq.empty)();
          }
        }));
      }));
    }));
  }));
}

function Entity$$get_CompiledRepresentation(x$$160) {
  const ilTypeRefForCompilationPath = function ilTypeRefForCompilationPath(_arg1$$2, item) {
    const sref$$1 = _arg1$$2.fields[0];
    const p$$1 = _arg1$$2.fields[1];

    const top = function top(racc, p$$2) {
      top: while (true) {
        if (p$$2.tail != null) {
          const t = p$$2.tail;
          const istype = p$$2.head[1];
          const h = p$$2.head[0];
          var $target$$39;

          switch (istype.tag) {
            case 0:
            case 1:
              $target$$39 = 0;
              break;

            default:
              $target$$39 = 1;
          }

          switch ($target$$39) {
            case 0:
              {
                const outerTypeName = (0, _ast.textOfPath)((0, _List.reverse)((0, _Types.L)(h, racc)));
                return (0, _il.ILTypeRef$$$Create$$113F1D6)(sref$$1, (0, _Types.L)(outerTypeName, (0, _List.map)(function (tupledArg$$2) {
                  return tupledArg$$2[0];
                }, t)), item);
              }

            case 1:
              {
                racc = (0, _Types.L)(h, racc);
                p$$2 = t;
                continue top;
              }
          }
        } else {
          return (0, _il.ILTypeRef$$$Create$$113F1D6)(sref$$1, (0, _Types.L)(), (0, _ast.textOfPath)((0, _List.reverse)((0, _Types.L)(item, racc))));
        }
      }
    };

    return top((0, _Types.L)(), p$$1);
  };

  const cache = Entity$$get_CompiledReprCache(x$$160);

  if ((0, _Util.equals)(cache.cacheVal, null)) {
    const res = function resf() {
      const matchValue$$58 = Entity$$get_ExceptionInfo(x$$160);

      switch (matchValue$$58.tag) {
        case 0:
          {
            const ecref2 = matchValue$$58.fields[0];
            return EntityRef$$get_CompiledRepresentation(ecref2);
          }

        case 1:
          {
            const tref = matchValue$$58.fields[0];
            return new CompiledTypeRepr(0, "ILAsmNamed", tref, new _il.ILBoxity(0, "AsObject"), (0, _il.mkILTy)(new _il.ILBoxity(0, "AsObject"), (0, _il.mkILTySpec)(tref, (0, _Types.L)())));
          }

        default:
          {
            const matchValue$$59 = Entity$$get_TypeReprInfo(x$$160);

            if (matchValue$$59.tag === 4) {
              const ty = matchValue$$59.fields[0];
              return new CompiledTypeRepr(1, "ILAsmOpen", ty);
            } else {
              const boxity = Entity$$get_IsStructOrEnumTycon(x$$160) ? new _il.ILBoxity(1, "AsValue") : new _il.ILBoxity(0, "AsObject");
              let ilTypeRef;
              const matchValue$$60 = Entity$$get_TypeReprInfo(x$$160);

              if (matchValue$$60.tag === 3) {
                const ilTypeDef = matchValue$$60.fields[0].fields[2];
                const ilScopeRef = matchValue$$60.fields[0].fields[0];
                const ilEnclosingTypeDefs = matchValue$$60.fields[0].fields[1];
                ilTypeRef = (0, _il.mkRefForNestedILTypeDef)(ilScopeRef, ilEnclosingTypeDefs, ilTypeDef);
              } else {
                ilTypeRef = ilTypeRefForCompilationPath(Entity$$get_CompilationPath(x$$160), Entity$$get_CompiledName(x$$160));
              }

              const ilTypeOpt = Entity$$get_TyparsNoRange(x$$160).tail == null ? (0, _il.mkILTy)(boxity, (0, _il.mkILTySpec)(ilTypeRef, (0, _Types.L)())) : null;
              return new CompiledTypeRepr(0, "ILAsmNamed", ilTypeRef, boxity, ilTypeOpt);
            }
          }
      }
    }();

    cache.cacheVal = (0, _lib.nullableSlotFull)(res);
    return res;
  } else {
    return cache.cacheVal;
  }
}

function Entity$$get_CompiledRepresentationForNamedType(x$$161) {
  const matchValue$$63 = Entity$$get_CompiledRepresentation(x$$161);

  if (matchValue$$63.tag === 1) {
    throw new Error((0, _FSComp.SR$$$tastTypeHasAssemblyCodeRepresentation$$Z721C83C5)(Entity$$get_DisplayNameWithStaticParametersAndUnderscoreTypars(x$$161)));
  } else {
    const tref$$1 = matchValue$$63.fields[0];
    return tref$$1;
  }
}

function Entity$$get_PreEstablishedHasDefaultConstructor(x$$162) {
  return EntityFlags$$get_PreEstablishedHasDefaultConstructor(x$$162.entity_flags);
}

function Entity$$get_HasSelfReferentialConstructor(x$$163) {
  return EntityFlags$$get_HasSelfReferentialConstructor(x$$163.entity_flags);
}

function Entity$$SetAttribs$$A32CD4C(x$$164, attribs) {
  x$$164.entity_attribs = attribs;
}

function Entity$$SetIsStructRecordOrUnion$$Z1FBCCD16(x$$165, b$$3) {
  const flags$$8 = x$$165.entity_flags;
  x$$165.entity_flags = EntityFlags$$$$002Ector$$Z5A892296(EntityFlags$$get_IsPrefixDisplay(flags$$8), EntityFlags$$get_IsModuleOrNamespace(flags$$8), EntityFlags$$get_PreEstablishedHasDefaultConstructor(flags$$8), EntityFlags$$get_HasSelfReferentialConstructor(flags$$8), b$$3);
}

function Entity$$get_DebugText(x$$166) {
  return x$$166.toString();
}

Entity.prototype.toString = function () {
  const x$$167 = this;
  return Entity$$get_LogicalName(x$$167);
};

function MaybeLazy$00601$$get_Value(this$) {
  if (this$.tag === 1) {
    const x$$169 = this$.fields[0];
    return x$$169.Value;
  } else {
    const x$$168 = this$.fields[0];
    return x$$168;
  }
}

function MaybeLazy$00601$$Force(this$$$1) {
  if (this$$$1.tag === 1) {
    const x$$171 = this$$$1.fields[0];
    return x$$171.Value;
  } else {
    const x$$170 = this$$$1.fields[0];
    return x$$170;
  }
}

function TyconAugmentation$$SetCompare$$2880AC4F(tcaug, x$$172) {
  tcaug.tcaug_compare = x$$172;
}

function TyconAugmentation$$SetCompareWith$$7D2DE7B4(tcaug$$1, x$$173) {
  tcaug$$1.tcaug_compare_withc = x$$173;
}

function TyconAugmentation$$SetEquals$$2880AC4F(tcaug$$2, x$$174) {
  tcaug$$2.tcaug_equals = x$$174;
}

function TyconAugmentation$$SetHashAndEqualsWith$$329E5074(tcaug$$3, x$$175) {
  tcaug$$3.tcaug_hash_and_equals_withc = x$$175;
}

function TyconAugmentation$$SetHasObjectGetHashCode$$Z1FBCCD16(tcaug$$4, b$$4) {
  tcaug$$4.tcaug_hasObjectGetHashCode = b$$4;
}

function TyconAugmentation$$$Create() {
  return new TyconAugmentation(null, null, null, null, false, [], (0, _illib.NameMultiMapModule$$$empty)(), (0, _Types.L)(), null, false, false);
}

function TyconAugmentation$$get_DebugText(x$$176) {
  return x$$176.toString();
}

TyconAugmentation.prototype.toString = function () {
  return "TyconAugmentation(...)";
};

function TyconRepresentation$$get_DebugText(x$$178) {
  return x$$178.toString();
}

TyconRepresentation.prototype.toString = function () {
  return "TyconRepresentation(...)";
};

function TILObjectReprData$$get_DebugText(x$$180) {
  return x$$180.toString();
}

TILObjectReprData.prototype.toString = function () {
  return "TILObjectReprData(...)";
};

function TyconObjModelKind$$get_IsValueType(x$$182) {
  var $target$$40;

  switch (x$$182.tag) {
    case 1:
    case 3:
      $target$$40 = 0;
      break;

    case 2:
    case 4:
      $target$$40 = 1;
      break;

    default:
      $target$$40 = 0;
  }

  switch ($target$$40) {
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

function TyconObjModelData$$get_DebugText(x$$183) {
  return x$$183.toString();
}

TyconObjModelData.prototype.toString = function () {
  return "TyconObjModelData(...)";
};

function TyconRecdFields$$FieldByIndex$$Z524259A4(x$$185, n$$4) {
  if (n$$4 >= 0 ? n$$4 < x$$185.FieldsByIndex.length : false) {
    return x$$185.FieldsByIndex[n$$4];
  } else {
    throw new Error("FieldByIndex");
  }
}

function TyconRecdFields$$FieldByName$$Z721C83C5(x$$186, n$$5) {
  return (0, _Map.FSharpMap$$TryFind$$2B595)(x$$186.FieldsByName, n$$5);
}

function TyconRecdFields$$get_AllFieldsAsList(x$$187) {
  return (0, _Array.toList)(x$$187.FieldsByIndex);
}

function TyconRecdFields$$get_TrueFieldsAsList(x$$188) {
  return (0, _List.filter)(function predicate$$4(f$$3) {
    return !RecdField$$get_IsCompilerGenerated(f$$3);
  }, TyconRecdFields$$get_AllFieldsAsList(x$$188));
}

function TyconRecdFields$$get_TrueInstanceFieldsAsList(x$$189) {
  return (0, _List.filter)(function predicate$$5(f$$4) {
    if (!RecdField$$get_IsStatic(f$$4)) {
      return !RecdField$$get_IsCompilerGenerated(f$$4);
    } else {
      return false;
    }
  }, TyconRecdFields$$get_AllFieldsAsList(x$$189));
}

function TyconRecdFields$$get_DebugText(x$$190) {
  return x$$190.toString();
}

TyconRecdFields.prototype.toString = function () {
  return "TyconRecdFields(...)";
};

function TyconUnionCases$$GetUnionCaseByIndex$$Z524259A4(x$$192, n$$6) {
  if (n$$6 >= 0 ? n$$6 < x$$192.CasesByIndex.length : false) {
    return x$$192.CasesByIndex[n$$6];
  } else {
    throw new Error("GetUnionCaseByIndex" + "\\nParameter name: " + "n");
  }
}

function TyconUnionCases$$get_UnionCasesAsList(x$$193) {
  return (0, _Array.toList)(x$$193.CasesByIndex);
}

function TyconUnionCases$$get_DebugText(x$$194) {
  return x$$194.toString();
}

TyconUnionCases.prototype.toString = function () {
  return "TyconUnionCases(...)";
};

function TyconUnionData$$get_UnionCasesAsList(x$$196) {
  return (0, _Array.toList)(x$$196.CasesTable.CasesByIndex);
}

function TyconUnionData$$get_DebugText(x$$197) {
  return x$$197.toString();
}

TyconUnionData.prototype.toString = function () {
  return "TyconUnionData(...)";
};

function UnionCase$$get_Range(uc) {
  return (0, _ast.Ident$$get_idRange)(uc.Id);
}

function UnionCase$$get_DefinitionRange(uc$$1) {
  const matchValue$$64 = uc$$1.OtherRangeOpt;
  var $target$$41, m$$3;

  if (matchValue$$64 != null) {
    if (matchValue$$64[1]) {
      $target$$41 = 0;
      m$$3 = matchValue$$64[0];
    } else {
      $target$$41 = 1;
    }
  } else {
    $target$$41 = 1;
  }

  switch ($target$$41) {
    case 0:
      {
        return m$$3;
      }

    case 1:
      {
        return UnionCase$$get_Range(uc$$1);
      }
  }
}

function UnionCase$$get_SigRange(uc$$2) {
  const matchValue$$65 = uc$$2.OtherRangeOpt;
  var $target$$42, m$$4;

  if (matchValue$$65 != null) {
    if (matchValue$$65[1]) {
      $target$$42 = 1;
    } else {
      $target$$42 = 0;
      m$$4 = matchValue$$65[0];
    }
  } else {
    $target$$42 = 1;
  }

  switch ($target$$42) {
    case 0:
      {
        return m$$4;
      }

    case 1:
      {
        return UnionCase$$get_Range(uc$$2);
      }
  }
}

function UnionCase$$get_DisplayName(uc$$3) {
  return (0, _ast.Ident$$get_idText)(uc$$3.Id);
}

function UnionCase$$get_RecdFieldsArray(uc$$4) {
  return uc$$4.FieldTable.FieldsByIndex;
}

function UnionCase$$get_RecdFields(uc$$5) {
  return (0, _Array.toList)(uc$$5.FieldTable.FieldsByIndex);
}

function UnionCase$$GetFieldByName$$Z721C83C5(uc$$6, nm$$7) {
  return TyconRecdFields$$FieldByName$$Z721C83C5(uc$$6.FieldTable, nm$$7);
}

function UnionCase$$get_IsNullary(uc$$7) {
  return uc$$7.FieldTable.FieldsByIndex.length === 0;
}

function UnionCase$$get_DebugText(x$$199) {
  return x$$199.toString();
}

UnionCase.prototype.toString = function () {
  const x$$200 = this;
  return "UnionCase(" + UnionCase$$get_DisplayName(x$$200) + ")";
};

function RecdField$$get_Accessibility(v$$3) {
  return v$$3.rfield_access;
}

function RecdField$$get_PropertyAttribs(v$$4) {
  return v$$4.rfield_pattribs;
}

function RecdField$$get_FieldAttribs(v$$5) {
  return v$$5.rfield_fattribs;
}

function RecdField$$get_Range(v$$6) {
  return (0, _ast.Ident$$get_idRange)(v$$6.rfield_id);
}

function RecdField$$get_DefinitionRange(v$$7) {
  const matchValue$$66 = v$$7.rfield_other_range;
  var $target$$43, m$$5;

  if (matchValue$$66 != null) {
    if (matchValue$$66[1]) {
      $target$$43 = 0;
      m$$5 = matchValue$$66[0];
    } else {
      $target$$43 = 1;
    }
  } else {
    $target$$43 = 1;
  }

  switch ($target$$43) {
    case 0:
      {
        return m$$5;
      }

    case 1:
      {
        return RecdField$$get_Range(v$$7);
      }
  }
}

function RecdField$$get_SigRange(v$$8) {
  const matchValue$$67 = v$$8.rfield_other_range;
  var $target$$44, m$$6;

  if (matchValue$$67 != null) {
    if (matchValue$$67[1]) {
      $target$$44 = 1;
    } else {
      $target$$44 = 0;
      m$$6 = matchValue$$67[0];
    }
  } else {
    $target$$44 = 1;
  }

  switch ($target$$44) {
    case 0:
      {
        return m$$6;
      }

    case 1:
      {
        return RecdField$$get_Range(v$$8);
      }
  }
}

function RecdField$$get_Id(v$$9) {
  return v$$9.rfield_id;
}

function RecdField$$get_Name(v$$10) {
  return (0, _ast.Ident$$get_idText)(v$$10.rfield_id);
}

function RecdField$$get_IsCompilerGenerated(v$$11) {
  return v$$11.rfield_secret;
}

function RecdField$$get_IsMutable(v$$12) {
  return v$$12.rfield_mutable;
}

function RecdField$$get_IsStatic(v$$13) {
  return v$$13.rfield_static;
}

function RecdField$$get_IsVolatile(v$$14) {
  return v$$14.rfield_volatile;
}

function RecdField$$get_FormalType(v$$15) {
  return v$$15.rfield_type;
}

function RecdField$$get_XmlDoc(v$$16) {
  return v$$16.rfield_xmldoc;
}

function RecdField$$get_XmlDocSig(v$$17) {
  return v$$17.rfield_xmldocsig;
}

function RecdField$$set_XmlDocSig$$Z721C83C5(v$$18, x$$201) {
  v$$18.rfield_xmldocsig = x$$201;
}

function RecdField$$get_LiteralValue(v$$19) {
  if (v$$19.rfield_const != null) {
    if (v$$19.rfield_const.tag === 17) {
      return null;
    } else {
      const k$$2 = v$$19.rfield_const;
      return k$$2;
    }
  } else {
    return null;
  }
}

function RecdField$$get_IsZeroInit(v$$20) {
  if (v$$20.rfield_const != null) {
    if (v$$20.rfield_const.tag === 17) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function RecdField$$get_DebugText(x$$202) {
  return x$$202.toString();
}

RecdField.prototype.toString = function () {
  const x$$203 = this;
  return RecdField$$get_Name(x$$203);
};

function ExceptionInfo$$get_DebugText(x$$204) {
  return x$$204.toString();
}

ExceptionInfo.prototype.toString = function () {
  return "ExceptionInfo(...)";
};

const ModuleOrNamespaceType = (0, _Types.declare)(function ModuleOrNamespaceType(kind$$2, vals, entities) {
  const $this$$4 = this;
  $this$$4.kind = kind$$2;
  $this$$4.vals = vals;
  $this$$4["entities@1788"] = entities;
  $this$$4.activePatternElemRefCache = new _Types.FSharpRef(null);
  $this$$4.modulesByDemangledNameCache = new _Types.FSharpRef(null);
  $this$$4.exconsByDemangledNameCache = new _Types.FSharpRef(null);
  $this$$4.tyconsByDemangledNameAndArityCache = new _Types.FSharpRef(null);
  $this$$4.tyconsByAccessNamesCache = new _Types.FSharpRef(null);
  $this$$4.tyconsByMangledNameCache = new _Types.FSharpRef(null);
  $this$$4.allEntitiesByMangledNameCache = new _Types.FSharpRef(null);
  $this$$4.allValsAndMembersByPartialLinkageKeyCache = new _Types.FSharpRef(null);
  $this$$4.allValsByLogicalNameCache = new _Types.FSharpRef(null);
});
exports.ModuleOrNamespaceType = ModuleOrNamespaceType;

function ModuleOrNamespaceType$$$$002Ector$$Z36FEFB0E(kind$$2, vals, entities) {
  return this != null ? ModuleOrNamespaceType.call(this, kind$$2, vals, entities) : new ModuleOrNamespaceType(kind$$2, vals, entities);
}

function ModuleOrNamespaceType$$get_ModuleOrNamespaceKind(mtyp) {
  return mtyp.kind;
}

function ModuleOrNamespaceType$$get_AllValsAndMembers(mtyp$$1) {
  return mtyp$$1.vals;
}

function ModuleOrNamespaceType$$get_AllEntities(mtyp$$2) {
  return mtyp$$2["entities@1788"];
}

function ModuleOrNamespaceType$$AddModuleOrNamespaceByMutation$$Z52A308BB(mtyp$$3, modul) {
  mtyp$$3["entities@1788"] = (0, _QueueList.QueueListModule$$$appendOne)(mtyp$$3["entities@1788"], modul);
  mtyp$$3.modulesByDemangledNameCache.contents = null;
  mtyp$$3.allEntitiesByMangledNameCache.contents = null;
}

function ModuleOrNamespaceType$$AddEntity$$Z52A308BB(mtyp$$4, tycon) {
  return ModuleOrNamespaceType$$$$002Ector$$Z36FEFB0E(mtyp$$4.kind, mtyp$$4.vals, (0, _QueueList.QueueList$00601$$AppendOne$$2B595)(mtyp$$4["entities@1788"], tycon));
}

function ModuleOrNamespaceType$$AddVal$$7D0CFEA5(mtyp$$5, vspec) {
  return ModuleOrNamespaceType$$$$002Ector$$Z36FEFB0E(mtyp$$5.kind, (0, _QueueList.QueueList$00601$$AppendOne$$2B595)(mtyp$$5.vals, vspec), mtyp$$5["entities@1788"]);
}

function ModuleOrNamespaceType$$get_ActivePatternElemRefLookupTable(mtyp$$6) {
  return mtyp$$6.activePatternElemRefCache;
}

function ModuleOrNamespaceType$$get_TypeDefinitions(mtyp$$7) {
  return (0, _List.ofSeq)((0, _Seq.filter)(function predicate$$6(x$$206) {
    if (!Entity$$get_IsExceptionDecl(x$$206)) {
      return !Entity$$get_IsModuleOrNamespace(x$$206);
    } else {
      return false;
    }
  }, mtyp$$7["entities@1788"]));
}

function ModuleOrNamespaceType$$get_ExceptionDefinitions(mtyp$$8) {
  return (0, _List.ofSeq)((0, _Seq.filter)(function predicate$$7(x$$207) {
    return Entity$$get_IsExceptionDecl(x$$207);
  }, mtyp$$8["entities@1788"]));
}

function ModuleOrNamespaceType$$get_ModuleAndNamespaceDefinitions(mtyp$$9) {
  return (0, _List.ofSeq)((0, _Seq.filter)(function predicate$$8(x$$208) {
    return Entity$$get_IsModuleOrNamespace(x$$208);
  }, mtyp$$9["entities@1788"]));
}

function ModuleOrNamespaceType$$get_TypeAndExceptionDefinitions(mtyp$$10) {
  return (0, _List.ofSeq)((0, _Seq.filter)(function predicate$$9(x$$209) {
    return !Entity$$get_IsModuleOrNamespace(x$$209);
  }, mtyp$$10["entities@1788"]));
}

function ModuleOrNamespaceType$$TypesByDemangledNameAndArity$$4DB9192C(mtyp$$11, m$$7) {
  const matchValue$$70 = mtyp$$11.tyconsByDemangledNameAndArityCache.contents;

  if (matchValue$$70 == null) {
    const res$$1 = function f$$5() {
      return (0, _illib.Map$00602$002EAddAndMarkAsCollapsible$$3209D872)((0, _illib.Map$00602$002Eget_Empty$002EStatic)(), (0, _Array.ofList)((0, _List.map)(function mapping$$2(tc) {
        return KeyTyconByDemangledNameAndArity(Entity$$get_LogicalName(tc), Entity$$Typars$$4DB9192C(tc, m$$7), tc);
      }, ModuleOrNamespaceType$$get_TypeAndExceptionDefinitions(mtyp$$11)), Array));
    }();

    mtyp$$11.tyconsByDemangledNameAndArityCache.contents = (0, _Option.some)(res$$1);
    return res$$1;
  } else {
    const v$$21 = (0, _Option.value)(matchValue$$70);
    return v$$21;
  }
}

function ModuleOrNamespaceType$$get_TypesByAccessNames(mtyp$$12) {
  const matchValue$$71 = mtyp$$12.tyconsByAccessNamesCache.contents;

  if (matchValue$$71 == null) {
    const res$$2 = function f$$6() {
      return (0, _illib.LayeredMultiMap$00602$$AddAndMarkAsCollapsible$$Z1EDC52D)((0, _illib.LayeredMultiMap$00602$$$get_Empty)(), (0, _Array.collect)(function mapping$$3(tc$$1) {
        return KeyTyconByAccessNames(Entity$$get_LogicalName(tc$$1), tc$$1);
      }, (0, _Array.ofList)(ModuleOrNamespaceType$$get_TypeAndExceptionDefinitions(mtyp$$12), Array), Array));
    }();

    mtyp$$12.tyconsByAccessNamesCache.contents = (0, _Option.some)(res$$2);
    return res$$2;
  } else {
    const v$$22 = (0, _Option.value)(matchValue$$71);
    return v$$22;
  }
}

function ModuleOrNamespaceType$$get_TypesByMangledName(mtyp$$13) {
  const addTyconByMangledName = function addTyconByMangledName(x$$210, tab) {
    return (0, _illib.NameMapModule$$$add)(Entity$$get_LogicalName(x$$210), x$$210, tab);
  };

  const matchValue$$72 = mtyp$$13.tyconsByMangledNameCache.contents;

  if (matchValue$$72 == null) {
    const res$$3 = function f$$7() {
      return (0, _List.foldBack)(addTyconByMangledName, ModuleOrNamespaceType$$get_TypeAndExceptionDefinitions(mtyp$$13), (0, _Map.empty)({
        Compare: _Util.comparePrimitives
      }));
    }();

    mtyp$$13.tyconsByMangledNameCache.contents = (0, _Option.some)(res$$3);
    return res$$3;
  } else {
    const v$$23 = (0, _Option.value)(matchValue$$72);
    return v$$23;
  }
}

function ModuleOrNamespaceType$$get_AllEntitiesByCompiledAndLogicalMangledNames(mtyp$$14) {
  const addEntityByMangledName = function addEntityByMangledName(x$$211, tab$$1) {
    const name1 = Entity$$get_LogicalName(x$$211);
    const name2 = Entity$$get_CompiledName(x$$211);
    const tab$$2 = (0, _illib.NameMapModule$$$add)(name1, x$$211, tab$$1);

    if (name1 === name2) {
      return tab$$2;
    } else {
      return (0, _illib.NameMapModule$$$add)(name2, x$$211, tab$$2);
    }
  };

  const matchValue$$73 = mtyp$$14.allEntitiesByMangledNameCache.contents;

  if (matchValue$$73 == null) {
    const res$$4 = function f$$8() {
      return (0, _QueueList.QueueListModule$$$foldBack)(addEntityByMangledName, mtyp$$14["entities@1788"], (0, _Map.empty)({
        Compare: _Util.comparePrimitives
      }));
    }();

    mtyp$$14.allEntitiesByMangledNameCache.contents = (0, _Option.some)(res$$4);
    return res$$4;
  } else {
    const v$$24 = (0, _Option.value)(matchValue$$73);
    return v$$24;
  }
}

function ModuleOrNamespaceType$$get_AllEntitiesByLogicalMangledName(mtyp$$15) {
  const addEntityByMangledName$$1 = function addEntityByMangledName$$1(x$$212, tab$$3) {
    return (0, _illib.NameMapModule$$$add)(Entity$$get_LogicalName(x$$212), x$$212, tab$$3);
  };

  return (0, _QueueList.QueueListModule$$$foldBack)(addEntityByMangledName$$1, mtyp$$15["entities@1788"], (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }));
}

function ModuleOrNamespaceType$$get_AllValsAndMembersByPartialLinkageKey(mtyp$$16) {
  const addValByMangledName = function addValByMangledName(x$$213, tab$$4) {
    if (Val$$get_IsCompiledAsTopLevel(x$$213)) {
      const key = Val$$GetLinkagePartialKey(x$$213);
      return (0, _illib.MultiMapModule$$$add)(key, x$$213, tab$$4);
    } else {
      return tab$$4;
    }
  };

  const matchValue$$74 = mtyp$$16.allValsAndMembersByPartialLinkageKeyCache.contents;

  if (matchValue$$74 == null) {
    const res$$5 = function f$$9() {
      return (0, _QueueList.QueueListModule$$$foldBack)(addValByMangledName, mtyp$$16.vals, (0, _illib.MultiMapModule$$$empty)());
    }();

    mtyp$$16.allValsAndMembersByPartialLinkageKeyCache.contents = (0, _Option.some)(res$$5);
    return res$$5;
  } else {
    const v$$25 = (0, _Option.value)(matchValue$$74);
    return v$$25;
  }
}

function ModuleOrNamespaceType$$TryLinkVal$$Z70BACEDB(mtyp$$17, ccu, key$$1) {
  const x$$214 = (0, _List.tryFind)(function predicate$$10(v$$27) {
    const matchValue$$75 = ValLinkageFullKey$$get_TypeForLinkage(key$$1);

    if (matchValue$$75 != null) {
      const keyTy = matchValue$$75;
      return CcuThunk$$MemberSignatureEquality$$7E99D2C0(ccu, keyTy, Val$$get_Type(v$$27));
    } else {
      return true;
    }
  }, (0, _illib.MultiMapModule$$$find)(ValLinkageFullKey$$get_PartialKey(key$$1), ModuleOrNamespaceType$$get_AllValsAndMembersByPartialLinkageKey(mtyp$$17)));

  if (x$$214 == null) {
    return new _illib.ValueOption$00601(1, "ValueNone");
  } else {
    const x$$216 = (0, _Option.value)(x$$214);
    return new _illib.ValueOption$00601(0, "ValueSome", x$$216);
  }
}

function ModuleOrNamespaceType$$get_AllValsByLogicalName(mtyp$$18) {
  const addValByName = function addValByName(x$$217, tab$$5) {
    if (!Val$$get_IsMember(x$$217) ? !Val$$get_IsCompilerGenerated(x$$217) : false) {
      return (0, _illib.NameMapModule$$$add)(Val$$get_LogicalName(x$$217), x$$217, tab$$5);
    } else {
      return tab$$5;
    }
  };

  const matchValue$$76 = mtyp$$18.allValsByLogicalNameCache.contents;

  if (matchValue$$76 == null) {
    const res$$6 = function f$$10() {
      return (0, _QueueList.QueueListModule$$$foldBack)(addValByName, mtyp$$18.vals, (0, _Map.empty)({
        Compare: _Util.comparePrimitives
      }));
    }();

    mtyp$$18.allValsByLogicalNameCache.contents = (0, _Option.some)(res$$6);
    return res$$6;
  } else {
    const v$$28 = (0, _Option.value)(matchValue$$76);
    return v$$28;
  }
}

function ModuleOrNamespaceType$$get_AllValsAndMembersByLogicalNameUncached(mtyp$$19) {
  const addValByName$$1 = function addValByName$$1(x$$218, tab$$6) {
    if (!Val$$get_IsCompilerGenerated(x$$218)) {
      return (0, _illib.MultiMapModule$$$add)(Val$$get_LogicalName(x$$218), x$$218, tab$$6);
    } else {
      return tab$$6;
    }
  };

  return (0, _QueueList.QueueListModule$$$foldBack)(addValByName$$1, mtyp$$19.vals, (0, _illib.MultiMapModule$$$empty)());
}

function ModuleOrNamespaceType$$get_ExceptionDefinitionsByDemangledName(mtyp$$20) {
  const add = function add(tycon$$1, acc) {
    return (0, _illib.NameMapModule$$$add)(Entity$$get_LogicalName(tycon$$1), tycon$$1, acc);
  };

  const matchValue$$77 = mtyp$$20.exconsByDemangledNameCache.contents;

  if (matchValue$$77 == null) {
    const res$$7 = function f$$11() {
      return (0, _List.foldBack)(add, ModuleOrNamespaceType$$get_ExceptionDefinitions(mtyp$$20), (0, _Map.empty)({
        Compare: _Util.comparePrimitives
      }));
    }();

    mtyp$$20.exconsByDemangledNameCache.contents = (0, _Option.some)(res$$7);
    return res$$7;
  } else {
    const v$$29 = (0, _Option.value)(matchValue$$77);
    return v$$29;
  }
}

function ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName(mtyp$$21) {
  const add$$1 = function add$$1(entity, acc$$1) {
    if (Entity$$get_IsModuleOrNamespace(entity)) {
      return (0, _illib.NameMapModule$$$add)(Entity$$get_DemangledModuleOrNamespaceName(entity), entity, acc$$1);
    } else {
      return acc$$1;
    }
  };

  const matchValue$$78 = mtyp$$21.modulesByDemangledNameCache.contents;

  if (matchValue$$78 == null) {
    const res$$8 = function f$$12() {
      return (0, _QueueList.QueueListModule$$$foldBack)(add$$1, mtyp$$21["entities@1788"], (0, _Map.empty)({
        Compare: _Util.comparePrimitives
      }));
    }();

    mtyp$$21.modulesByDemangledNameCache.contents = (0, _Option.some)(res$$8);
    return res$$8;
  } else {
    const v$$30 = (0, _Option.value)(matchValue$$78);
    return v$$30;
  }
}

function ModuleOrNamespaceType$$get_DebugText(x$$219) {
  return (0, _Util.toString)(x$$219);
}

ModuleOrNamespaceType.prototype.toString = function () {
  return "ModuleOrNamespaceType(...)";
};

function Construct$$$NewModuleOrNamespaceType(mkind, tycons, vals$$1) {
  return ModuleOrNamespaceType$$$$002Ector$$Z36FEFB0E(mkind, (0, _QueueList.QueueListModule$$$ofList)(vals$$1), (0, _QueueList.QueueListModule$$$ofList)(tycons));
}

function Construct$$$NewEmptyModuleOrNamespaceType$$67DB27D2(mkind$$1) {
  return Construct$$$NewModuleOrNamespaceType(mkind$$1, (0, _Types.L)(), (0, _Types.L)());
}

function Construct$$$NewModuleOrNamespace(cpath$$1, access, id$$1, xml, attribs$$1, mtype) {
  var matchValue$$79, inputRecord$$6;
  const stamp = newStamp();
  return Entity$$$New("mspec", new Entity((0, _illib.LazyWithContext$00602$$$NotLazy$$2B595)((0, _Types.L)()), EntityFlags$$$$002Ector$$Z5A892296(false, true, false, false, false), stamp, (0, _ast.Ident$$get_idText)(id$$1), (0, _ast.Ident$$get_idRange)(id$$1), attribs$$1, new TyconRepresentation(6, "TNoRepr"), TyconAugmentation$$$Create(), mtype, (0, _Option.defaultArg)(cpath$$1, null, function mapping$$4(cp) {
    return CompilationPath$$NestedPublicPath$$31D53C78(cp, id$$1);
  }), cpath$$1, (0, _lib.newCache)(), (matchValue$$79 = [xml, access], (!(0, _Array.equalsWith)(_Util.comparePrimitives, matchValue$$79[0].fields[0], null) ? matchValue$$79[0].fields[0].length === 0 : false) ? matchValue$$79[1].fields[0].tail == null ? null : (inputRecord$$6 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$6.entity_compiled_name, inputRecord$$6.entity_other_range, inputRecord$$6.entity_kind, xml, inputRecord$$6.entity_xmldocsig, inputRecord$$6.entity_tycon_abbrev, access, access, inputRecord$$6.entity_exn_info)) : (inputRecord$$6 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$6.entity_compiled_name, inputRecord$$6.entity_other_range, inputRecord$$6.entity_kind, xml, inputRecord$$6.entity_xmldocsig, inputRecord$$6.entity_tycon_abbrev, access, access, inputRecord$$6.entity_exn_info)))));
}

function Accessibility$$get_DebugText(x$$221) {
  return x$$221.toString();
}

Accessibility.prototype.toString = function () {
  return "Accessibility(...)";
};

function TyparOptionalData$$get_DebugText(x$$223) {
  return x$$223.toString();
}

TyparOptionalData.prototype.toString = function () {
  return (0, _String.toText)((0, _String.printf)("TyparOptionalData(...)"));
};

function Typar$$get_Name(x$$224) {
  return (0, _ast.Ident$$get_idText)(x$$224.typar_id);
}

function Typar$$get_Range(x$$225) {
  return (0, _ast.Ident$$get_idRange)(x$$225.typar_id);
}

function Typar$$get_Id(x$$226) {
  return x$$226.typar_id;
}

function Typar$$get_Stamp(x$$227) {
  return x$$227.typar_stamp;
}

function Typar$$get_Solution(x$$228) {
  return x$$228.typar_solution;
}

function Typar$$get_Constraints(x$$229) {
  const matchValue$$80 = x$$229.typar_opt_data;

  if (matchValue$$80 != null) {
    const optData$$14 = matchValue$$80;
    return optData$$14.typar_constraints;
  } else {
    return (0, _Types.L)();
  }
}

function Typar$$get_IsCompilerGenerated(x$$230) {
  return TyparFlags$$get_IsCompilerGenerated(x$$230.typar_flags);
}

function Typar$$get_Rigidity(x$$231) {
  return TyparFlags$$get_Rigidity(x$$231.typar_flags);
}

function Typar$$get_DynamicReq(x$$232) {
  return TyparFlags$$get_DynamicReq(x$$232.typar_flags);
}

function Typar$$get_EqualityConditionalOn(x$$233) {
  return TyparFlags$$get_EqualityConditionalOn(x$$233.typar_flags);
}

function Typar$$get_ComparisonConditionalOn(x$$234) {
  return TyparFlags$$get_ComparisonConditionalOn(x$$234.typar_flags);
}

function Typar$$get_StaticReq(x$$235) {
  return TyparFlags$$get_StaticReq(x$$235.typar_flags);
}

function Typar$$get_IsFromError(x$$236) {
  return TyparFlags$$get_IsFromError(x$$236.typar_flags);
}

function Typar$$get_IsCompatFlex(x$$237) {
  return TyparFlags$$get_IsCompatFlex(x$$237.typar_flags);
}

function Typar$$SetIsCompatFlex$$Z1FBCCD16(x$$238, b$$5) {
  x$$238.typar_flags = TyparFlags$$WithCompatFlex$$Z1FBCCD16(x$$238.typar_flags, b$$5);
}

function Typar$$get_Kind(x$$239) {
  return TyparFlags$$get_Kind(x$$239.typar_flags);
}

function Typar$$get_IsErased(x$$240) {
  if (Typar$$get_Kind(x$$240).tag === 0) {
    return false;
  } else {
    return true;
  }
}

function Typar$$get_Attribs(x$$241) {
  const matchValue$$82 = x$$241.typar_opt_data;

  if (matchValue$$82 != null) {
    const optData$$15 = matchValue$$82;
    return optData$$15.typar_attribs;
  } else {
    return (0, _Types.L)();
  }
}

function Typar$$SetAttribs$$A32CD4C(x$$242, attribs$$2) {
  const matchValue$$83 = [attribs$$2, x$$242.typar_opt_data];
  var $target$$45, optData$$16;

  if (matchValue$$83[0].tail == null) {
    if (matchValue$$83[1] != null) {
      if (matchValue$$83[1].typar_il_name == null) {
        if (!(0, _Array.equalsWith)(_Util.comparePrimitives, matchValue$$83[1].typar_xmldoc.fields[0], null) ? matchValue$$83[1].typar_xmldoc.fields[0].length === 0 : false) {
          if (matchValue$$83[1].typar_constraints.tail == null) {
            $target$$45 = 1;
          } else {
            $target$$45 = 2;
            optData$$16 = matchValue$$83[1];
          }
        } else {
          $target$$45 = 2;
          optData$$16 = matchValue$$83[1];
        }
      } else {
        $target$$45 = 2;
        optData$$16 = matchValue$$83[1];
      }
    } else {
      $target$$45 = 0;
    }
  } else if (matchValue$$83[1] != null) {
    $target$$45 = 2;
    optData$$16 = matchValue$$83[1];
  } else {
    $target$$45 = 3;
  }

  switch ($target$$45) {
    case 1:
      {
        x$$242.typar_opt_data = null;
        break;
      }

    case 2:
      {
        optData$$16.typar_attribs = attribs$$2;
        break;
      }

    case 3:
      {
        x$$242.typar_opt_data = new TyparOptionalData(null, (0, _ast.XmlDoc$$$get_Empty)(), (0, _Types.L)(), attribs$$2);
        break;
      }
  }
}

function Typar$$get_XmlDoc(x$$243) {
  const matchValue$$84 = x$$243.typar_opt_data;

  if (matchValue$$84 != null) {
    const optData$$17 = matchValue$$84;
    return optData$$17.typar_xmldoc;
  } else {
    return (0, _ast.XmlDoc$$$get_Empty)();
  }
}

function Typar$$get_ILName(x$$244) {
  const matchValue$$85 = x$$244.typar_opt_data;

  if (matchValue$$85 != null) {
    const optData$$18 = matchValue$$85;
    return optData$$18.typar_il_name;
  } else {
    return null;
  }
}

function Typar$$SetILName$$2297AD2E(x$$245, il_name) {
  const matchValue$$86 = x$$245.typar_opt_data;

  if (matchValue$$86 != null) {
    const optData$$19 = matchValue$$86;
    optData$$19.typar_il_name = il_name;
  } else {
    x$$245.typar_opt_data = new TyparOptionalData(il_name, (0, _ast.XmlDoc$$$get_Empty)(), (0, _Types.L)(), (0, _Types.L)());
  }
}

function Typar$$get_DisplayName(x$$246) {
  if (Typar$$get_Name(x$$246) === "?") {
    return "?" + (0, _Long.toString)(Typar$$get_Stamp(x$$246));
  } else {
    return Typar$$get_Name(x$$246);
  }
}

function Typar$$SetConstraints$$Z10399A1(x$$247, cs) {
  const matchValue$$87 = [cs, x$$247.typar_opt_data];
  var $target$$46, optData$$20;

  if (matchValue$$87[0].tail == null) {
    if (matchValue$$87[1] != null) {
      if (matchValue$$87[1].typar_il_name == null) {
        if (!(0, _Array.equalsWith)(_Util.comparePrimitives, matchValue$$87[1].typar_xmldoc.fields[0], null) ? matchValue$$87[1].typar_xmldoc.fields[0].length === 0 : false) {
          if (matchValue$$87[1].typar_attribs.tail == null) {
            $target$$46 = 1;
          } else {
            $target$$46 = 2;
            optData$$20 = matchValue$$87[1];
          }
        } else {
          $target$$46 = 2;
          optData$$20 = matchValue$$87[1];
        }
      } else {
        $target$$46 = 2;
        optData$$20 = matchValue$$87[1];
      }
    } else {
      $target$$46 = 0;
    }
  } else if (matchValue$$87[1] != null) {
    $target$$46 = 2;
    optData$$20 = matchValue$$87[1];
  } else {
    $target$$46 = 3;
  }

  switch ($target$$46) {
    case 1:
      {
        x$$247.typar_opt_data = null;
        break;
      }

    case 2:
      {
        optData$$20.typar_constraints = cs;
        break;
      }

    case 3:
      {
        x$$247.typar_opt_data = new TyparOptionalData(null, (0, _ast.XmlDoc$$$get_Empty)(), cs, (0, _Types.L)());
        break;
      }
  }
}

function Typar$$$NewUnlinked() {
  return new Typar(null, null, (0, _Long.fromBits)(4294967295, 4294967295, false), null, null, null);
}

function Typar$$$New$$ZB4A2630(data$$2) {
  return data$$2;
}

function Typar$$Link$$ZB4A2630(x$$248, tg$$2) {
  x$$248.typar_id = tg$$2.typar_id;
  x$$248.typar_flags = tg$$2.typar_flags;
  x$$248.typar_stamp = tg$$2.typar_stamp;
  x$$248.typar_solution = tg$$2.typar_solution;
  const matchValue$$88 = tg$$2.typar_opt_data;

  if (matchValue$$88 == null) {} else {
    const tg$$3 = matchValue$$88;
    const optData$$21 = new TyparOptionalData(tg$$3.typar_il_name, tg$$3.typar_xmldoc, tg$$3.typar_constraints, tg$$3.typar_attribs);
    x$$248.typar_opt_data = optData$$21;
  }
}

function Typar$$get_AsType(x$$249) {
  const ty$$1 = x$$249.typar_astype;

  if ((0, _Util.equals)(ty$$1, null)) {
    const ty2 = new TType(5, "TType_var", x$$249);
    x$$249.typar_astype = ty2;
    return ty2;
  } else {
    return ty$$1;
  }
}

function Typar$$get_IsLinked(x$$250) {
  return !(0, _Long.equals)(x$$250.typar_stamp, (0, _Long.fromBits)(4294967295, 4294967295, false));
}

function Typar$$get_IsSolved(x$$251) {
  if (Typar$$get_Solution(x$$251) == null) {
    return false;
  } else {
    return true;
  }
}

function Typar$$SetIdent$$31D53C78(x$$252, id$$2) {
  x$$252.typar_id = id$$2;
}

function Typar$$SetRigidity$$Z10E5307B(x$$253, b$$6) {
  const flags$$9 = x$$253.typar_flags;
  x$$253.typar_flags = TyparFlags$$$$002Ector$$Z7882EFDC(TyparFlags$$get_Kind(flags$$9), b$$6, TyparFlags$$get_IsFromError(flags$$9), TyparFlags$$get_IsCompilerGenerated(flags$$9), TyparFlags$$get_StaticReq(flags$$9), TyparFlags$$get_DynamicReq(flags$$9), TyparFlags$$get_EqualityConditionalOn(flags$$9), TyparFlags$$get_ComparisonConditionalOn(flags$$9));
}

function Typar$$SetCompilerGenerated$$Z1FBCCD16(x$$254, b$$7) {
  const flags$$10 = x$$254.typar_flags;
  x$$254.typar_flags = TyparFlags$$$$002Ector$$Z7882EFDC(TyparFlags$$get_Kind(flags$$10), TyparFlags$$get_Rigidity(flags$$10), TyparFlags$$get_IsFromError(flags$$10), b$$7, TyparFlags$$get_StaticReq(flags$$10), TyparFlags$$get_DynamicReq(flags$$10), TyparFlags$$get_EqualityConditionalOn(flags$$10), TyparFlags$$get_ComparisonConditionalOn(flags$$10));
}

function Typar$$SetStaticReq$$2FFF90DA(x$$255, b$$8) {
  const flags$$11 = x$$255.typar_flags;
  x$$255.typar_flags = TyparFlags$$$$002Ector$$Z7882EFDC(TyparFlags$$get_Kind(flags$$11), TyparFlags$$get_Rigidity(flags$$11), TyparFlags$$get_IsFromError(flags$$11), TyparFlags$$get_IsCompilerGenerated(flags$$11), b$$8, TyparFlags$$get_DynamicReq(flags$$11), TyparFlags$$get_EqualityConditionalOn(flags$$11), TyparFlags$$get_ComparisonConditionalOn(flags$$11));
}

function Typar$$SetDynamicReq$$41762FA3(x$$256, b$$9) {
  const flags$$12 = x$$256.typar_flags;
  x$$256.typar_flags = TyparFlags$$$$002Ector$$Z7882EFDC(TyparFlags$$get_Kind(flags$$12), TyparFlags$$get_Rigidity(flags$$12), TyparFlags$$get_IsFromError(flags$$12), TyparFlags$$get_IsCompilerGenerated(flags$$12), TyparFlags$$get_StaticReq(flags$$12), b$$9, TyparFlags$$get_EqualityConditionalOn(flags$$12), TyparFlags$$get_ComparisonConditionalOn(flags$$12));
}

function Typar$$SetEqualityDependsOn$$Z1FBCCD16(x$$257, b$$10) {
  const flags$$13 = x$$257.typar_flags;
  x$$257.typar_flags = TyparFlags$$$$002Ector$$Z7882EFDC(TyparFlags$$get_Kind(flags$$13), TyparFlags$$get_Rigidity(flags$$13), TyparFlags$$get_IsFromError(flags$$13), TyparFlags$$get_IsCompilerGenerated(flags$$13), TyparFlags$$get_StaticReq(flags$$13), TyparFlags$$get_DynamicReq(flags$$13), b$$10, TyparFlags$$get_ComparisonConditionalOn(flags$$13));
}

function Typar$$SetComparisonDependsOn$$Z1FBCCD16(x$$258, b$$11) {
  const flags$$14 = x$$258.typar_flags;
  x$$258.typar_flags = TyparFlags$$$$002Ector$$Z7882EFDC(TyparFlags$$get_Kind(flags$$14), TyparFlags$$get_Rigidity(flags$$14), TyparFlags$$get_IsFromError(flags$$14), TyparFlags$$get_IsCompilerGenerated(flags$$14), TyparFlags$$get_StaticReq(flags$$14), TyparFlags$$get_DynamicReq(flags$$14), TyparFlags$$get_EqualityConditionalOn(flags$$14), b$$11);
}

function Typar$$get_DebugText(x$$259) {
  return x$$259.toString();
}

Typar.prototype.toString = function () {
  const x$$260 = this;
  return Typar$$get_Name(x$$260);
};

function TraitConstraintInfo$$get_MemberName(x$$261) {
  const nm$$8 = x$$261.fields[1];
  return nm$$8;
}

function TraitConstraintInfo$$get_ReturnType(x$$262) {
  const ty$$2 = x$$262.fields[4];
  return ty$$2;
}

function TraitConstraintInfo$$get_Solution(x$$263) {
  const sln = x$$263.fields[5];
  return sln.contents;
}

function TraitConstraintInfo$$set_Solution$$762D8F45(x$$264, v$$31) {
  const sln$$1 = x$$264.fields[5];
  sln$$1.contents = v$$31;
}

function TraitConstraintInfo$$get_DebugText(x$$265) {
  return x$$265.toString();
}

TraitConstraintInfo.prototype.toString = function () {
  const x$$266 = this;
  return "TTrait(" + TraitConstraintInfo$$get_MemberName(x$$266) + ")";
};

function TraitConstraintSln$$get_DebugText(x$$267) {
  return x$$267.toString();
}

TraitConstraintSln.prototype.toString = function () {
  return "TraitConstraintSln(...)";
};

function ValLinkagePartialKey$$get_DebugText(x$$269) {
  return x$$269.toString();
}

ValLinkagePartialKey.prototype.toString = function () {
  const x$$270 = this;
  return "ValLinkagePartialKey(" + x$$270.LogicalName + ")";
};

const ValLinkageFullKey = (0, _Types.declare)(function ValLinkageFullKey(partialKey, typeForLinkage) {
  const $this$$23 = this;
  $this$$23.partialKey = partialKey;
  $this$$23.typeForLinkage = typeForLinkage;
});
exports.ValLinkageFullKey = ValLinkageFullKey;

function ValLinkageFullKey$$$$002Ector$$72991465(partialKey, typeForLinkage) {
  return this != null ? ValLinkageFullKey.call(this, partialKey, typeForLinkage) : new ValLinkageFullKey(partialKey, typeForLinkage);
}

function ValLinkageFullKey$$get_PartialKey(x$$271) {
  return x$$271.partialKey;
}

function ValLinkageFullKey$$get_TypeForLinkage(x$$272) {
  return x$$272.typeForLinkage;
}

function ValLinkageFullKey$$get_DebugText(x$$273) {
  return (0, _Util.toString)(x$$273);
}

ValLinkageFullKey.prototype.toString = function () {
  const x$$274 = this;
  return "ValLinkageFullKey(" + x$$274.partialKey.LogicalName + ")";
};

function ValOptionalData$$get_DebugText(x$$275) {
  return x$$275.toString();
}

ValOptionalData.prototype.toString = function () {
  return "ValOptionalData(...)";
};

function Val$$$get_EmptyValOptData() {
  return new ValOptionalData(null, null, null, null, null, new Accessibility(0, "TAccess", (0, _Types.L)()), (0, _ast.XmlDoc$$$get_Empty)(), null, new ParentRef(1, "ParentNone"), "", (0, _Types.L)());
}

function Val$$get_DefinitionRange(x$$277) {
  const matchValue$$91 = x$$277.val_opt_data;
  var $target$$47, m$$9;

  if (matchValue$$91 != null) {
    if (matchValue$$91.val_other_range != null) {
      if (matchValue$$91.val_other_range[1]) {
        $target$$47 = 0;
        m$$9 = matchValue$$91.val_other_range[0];
      } else {
        $target$$47 = 1;
      }
    } else {
      $target$$47 = 1;
    }
  } else {
    $target$$47 = 1;
  }

  switch ($target$$47) {
    case 0:
      {
        return m$$9;
      }

    case 1:
      {
        return x$$277.val_range;
      }
  }
}

function Val$$get_SigRange(x$$278) {
  const matchValue$$92 = x$$278.val_opt_data;
  var $target$$48, m$$10;

  if (matchValue$$92 != null) {
    if (matchValue$$92.val_other_range != null) {
      if (matchValue$$92.val_other_range[1]) {
        $target$$48 = 1;
      } else {
        $target$$48 = 0;
        m$$10 = matchValue$$92.val_other_range[0];
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
        return m$$10;
      }

    case 1:
      {
        return x$$278.val_range;
      }
  }
}

function Val$$get_Range(x$$279) {
  return x$$279.val_range;
}

function Val$$get_Stamp(x$$280) {
  return x$$280.val_stamp;
}

function Val$$get_Type(x$$281) {
  return x$$281.val_type;
}

function Val$$get_Accessibility(x$$282) {
  const matchValue$$93 = x$$282.val_opt_data;

  if (matchValue$$93 != null) {
    const optData$$22 = matchValue$$93;
    return optData$$22.val_access;
  } else {
    return new Accessibility(0, "TAccess", (0, _Types.L)());
  }
}

function Val$$get_LiteralValue(x$$283) {
  const matchValue$$94 = x$$283.val_opt_data;

  if (matchValue$$94 != null) {
    const optData$$23 = matchValue$$94;
    return optData$$23.val_const;
  } else {
    return null;
  }
}

function Val$$get_ValReprInfo(x$$284) {
  const matchValue$$95 = x$$284.val_opt_data;

  if (matchValue$$95 != null) {
    const optData$$24 = matchValue$$95;
    return optData$$24.val_repr_info;
  } else {
    return null;
  }
}

function Val$$get_Id(x$$285) {
  return (0, _ast.ident)(Val$$get_LogicalName(x$$285), Val$$get_Range(x$$285));
}

function Val$$get_IsCompiledAsTopLevel(x$$286) {
  return Val$$get_ValReprInfo(x$$286) != null;
}

function Val$$GetLinkagePartialKey(x$$287) {
  return new ValLinkagePartialKey(Val$$get_IsMember(x$$287) ? EntityRef$$get_LogicalName(Val$$get_MemberApparentEntity(x$$287)) : null, Val$$get_IsOverrideOrExplicitImpl(x$$287), Val$$get_LogicalName(x$$287), Val$$get_IsMember(x$$287) ? ValReprInfo$$get_TotalArgCount(Val$$get_ValReprInfo(x$$287)) : 0);
}

function Val$$GetLinkageFullKey(x$$288) {
  const key$$2 = Val$$GetLinkagePartialKey(x$$288);
  return ValLinkageFullKey$$$$002Ector$$72991465(key$$2, Val$$get_IsMember(x$$288) ? Val$$get_Type(x$$288) : null);
}

function Val$$get_IsMemberOrModuleBinding(x$$289) {
  return ValFlags$$get_IsMemberOrModuleBinding(x$$289.val_flags);
}

function Val$$get_IsExtensionMember(x$$290) {
  return ValFlags$$get_IsExtensionMember(x$$290.val_flags);
}

function Val$$get_ReflectedDefinition(x$$291) {
  const matchValue$$96 = x$$291.val_opt_data;

  if (matchValue$$96 != null) {
    const optData$$25 = matchValue$$96;
    return optData$$25.val_defn;
  } else {
    return null;
  }
}

function Val$$get_MemberInfo(x$$292) {
  const matchValue$$97 = x$$292.val_opt_data;

  if (matchValue$$97 != null) {
    const optData$$26 = matchValue$$97;
    return optData$$26.val_member_info;
  } else {
    return null;
  }
}

function Val$$get_IsMember(x$$293) {
  return Val$$get_MemberInfo(x$$293) != null;
}

function Val$$get_IsIntrinsicMember(x$$294) {
  if (Val$$get_IsMember(x$$294)) {
    return !Val$$get_IsExtensionMember(x$$294);
  } else {
    return false;
  }
}

function Val$$get_IsModuleBinding(x$$295) {
  if (Val$$get_IsMemberOrModuleBinding(x$$295)) {
    return !Val$$get_IsMember(x$$295);
  } else {
    return false;
  }
}

function Val$$get_IsCompiledIntoModule(x$$296) {
  if (Val$$get_IsExtensionMember(x$$296)) {
    return true;
  } else {
    return Val$$get_IsModuleBinding(x$$296);
  }
}

function Val$$get_IsInstanceMember(x$$297) {
  if (Val$$get_IsMember(x$$297)) {
    return Val$$get_MemberInfo(x$$297).MemberFlags.IsInstance;
  } else {
    return false;
  }
}

function Val$$get_IsConstructor(x$$298) {
  var memberInfo;
  const matchValue$$98 = Val$$get_MemberInfo(x$$298);
  var $target$$49, memberInfo$$1;

  if (matchValue$$98 != null) {
    if (memberInfo = matchValue$$98, !Val$$get_IsExtensionMember(x$$298) ? (0, _Util.equals)(memberInfo.MemberFlags.MemberKind, new _ast.MemberKind(1, "Constructor")) : false) {
      $target$$49 = 0;
      memberInfo$$1 = matchValue$$98;
    } else {
      $target$$49 = 1;
    }
  } else {
    $target$$49 = 1;
  }

  switch ($target$$49) {
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

function Val$$get_IsClassConstructor(x$$299) {
  var memberInfo$$2;
  const matchValue$$99 = Val$$get_MemberInfo(x$$299);
  var $target$$50, memberInfo$$3;

  if (matchValue$$99 != null) {
    if (memberInfo$$2 = matchValue$$99, !Val$$get_IsExtensionMember(x$$299) ? (0, _Util.equals)(memberInfo$$2.MemberFlags.MemberKind, new _ast.MemberKind(0, "ClassConstructor")) : false) {
      $target$$50 = 0;
      memberInfo$$3 = matchValue$$99;
    } else {
      $target$$50 = 1;
    }
  } else {
    $target$$50 = 1;
  }

  switch ($target$$50) {
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

function Val$$get_IsOverrideOrExplicitImpl(x$$300) {
  var memberInfo$$4;
  const matchValue$$100 = Val$$get_MemberInfo(x$$300);
  var $target$$51, memberInfo$$5;

  if (matchValue$$100 != null) {
    if (memberInfo$$4 = matchValue$$100, memberInfo$$4.MemberFlags.IsOverrideOrExplicitImpl) {
      $target$$51 = 0;
      memberInfo$$5 = matchValue$$100;
    } else {
      $target$$51 = 1;
    }
  } else {
    $target$$51 = 1;
  }

  switch ($target$$51) {
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

function Val$$get_IsMutable(x$$301) {
  if (ValFlags$$get_MutabilityInfo(x$$301.val_flags).tag === 1) {
    return true;
  } else {
    return false;
  }
}

function Val$$get_MakesNoCriticalTailcalls(x$$302) {
  return ValFlags$$get_MakesNoCriticalTailcalls(x$$302.val_flags);
}

function Val$$get_HasBeenReferenced(x$$303) {
  return ValFlags$$get_HasBeenReferenced(x$$303.val_flags);
}

function Val$$get_IsCompiledAsStaticPropertyWithoutField(x$$304) {
  const hasValueAsStaticProperty = (0, _List.exists)(function predicate$$11(_arg4) {
    const tc$$2 = _arg4.fields[0];
    return EntityRef$$get_CompiledName(tc$$2) === "ValueAsStaticPropertyAttribute";
  }, Val$$get_Attribs(x$$304));

  if (ValFlags$$get_IsCompiledAsStaticPropertyWithoutField(x$$304.val_flags)) {
    return true;
  } else {
    return hasValueAsStaticProperty;
  }
}

function Val$$get_IsFixed(x$$305) {
  return ValFlags$$get_IsFixed(x$$305.val_flags);
}

function Val$$get_PermitsExplicitTypeInstantiation(x$$306) {
  return ValFlags$$get_PermitsExplicitTypeInstantiation(x$$306.val_flags);
}

function Val$$get_IsIncrClassGeneratedMember(x$$307) {
  if (Val$$get_IsCompilerGenerated(x$$307)) {
    return ValFlags$$get_IsIncrClassSpecialMember(x$$307.val_flags);
  } else {
    return false;
  }
}

function Val$$get_IsIncrClassConstructor(x$$308) {
  if (Val$$get_IsConstructor(x$$308)) {
    return ValFlags$$get_IsIncrClassSpecialMember(x$$308.val_flags);
  } else {
    return false;
  }
}

function Val$$get_RecursiveValInfo(x$$309) {
  return ValFlags$$get_RecursiveValInfo(x$$309.val_flags);
}

function Val$$get_BaseOrThisInfo(x$$310) {
  return ValFlags$$get_BaseOrThisInfo(x$$310.val_flags);
}

function Val$$get_IsTypeFunction(x$$311) {
  return ValFlags$$get_IsTypeFunction(x$$311.val_flags);
}

function Val$$get_InlineInfo(x$$312) {
  return ValFlags$$get_InlineInfo(x$$312.val_flags);
}

function Val$$get_MustInline(x$$313) {
  return ValInline$$get_MustInline(Val$$get_InlineInfo(x$$313));
}

function Val$$get_IsCompilerGenerated(x$$314) {
  return ValFlags$$get_IsCompilerGenerated(x$$314.val_flags);
}

function Val$$get_Attribs(x$$315) {
  const matchValue$$102 = x$$315.val_opt_data;

  if (matchValue$$102 != null) {
    const optData$$27 = matchValue$$102;
    return optData$$27.val_attribs;
  } else {
    return (0, _Types.L)();
  }
}

function Val$$get_XmlDoc(x$$316) {
  const matchValue$$103 = x$$316.val_opt_data;

  if (matchValue$$103 != null) {
    const optData$$28 = matchValue$$103;
    return optData$$28.val_xmldoc;
  } else {
    return (0, _ast.XmlDoc$$$get_Empty)();
  }
}

function Val$$get_XmlDocSig(x$$317) {
  const matchValue$$104 = x$$317.val_opt_data;

  if (matchValue$$104 != null) {
    const optData$$29 = matchValue$$104;
    return optData$$29.val_xmldocsig;
  } else {
    return "";
  }
}

function Val$$set_XmlDocSig$$Z721C83C5(x$$318, v$$32) {
  var inputRecord$$7;
  const matchValue$$105 = x$$318.val_opt_data;

  if (matchValue$$105 != null) {
    const optData$$30 = matchValue$$105;
    optData$$30.val_xmldocsig = v$$32;
  } else {
    x$$318.val_opt_data = (inputRecord$$7 = Val$$$get_EmptyValOptData(), new ValOptionalData(inputRecord$$7.val_compiled_name, inputRecord$$7.val_other_range, inputRecord$$7.val_const, inputRecord$$7.val_defn, inputRecord$$7.val_repr_info, inputRecord$$7.val_access, inputRecord$$7.val_xmldoc, inputRecord$$7.val_member_info, inputRecord$$7.val_declaring_entity, v$$32, inputRecord$$7.val_attribs));
  }
}

function Val$$get_DeclaringEntity(x$$319) {
  const matchValue$$106 = x$$319.val_opt_data;

  if (matchValue$$106 != null) {
    const optData$$31 = matchValue$$106;
    return optData$$31.val_declaring_entity;
  } else {
    return new ParentRef(1, "ParentNone");
  }
}

function Val$$get_TopValDeclaringEntity(x$$320) {
  const matchValue$$107 = Val$$get_DeclaringEntity(x$$320);

  if (matchValue$$107.tag === 1) {
    return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("TopValDeclaringEntity: does not have a parent", Val$$get_Range(x$$320)));
  } else {
    const tcref = matchValue$$107.fields[0];
    return tcref;
  }
}

function Val$$get_HasDeclaringEntity(x$$321) {
  if (Val$$get_DeclaringEntity(x$$321).tag === 1) {
    return false;
  } else {
    return true;
  }
}

function Val$$get_MemberApparentEntity(x$$322) {
  const matchValue$$109 = Val$$get_MemberInfo(x$$322);

  if (matchValue$$109 == null) {
    return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("MemberApparentEntity", Val$$get_Range(x$$322)));
  } else {
    const membInfo = matchValue$$109;
    return membInfo.ApparentEnclosingEntity;
  }
}

function Val$$get_NumObjArgs(v$$33) {
  const matchValue$$110 = Val$$get_MemberInfo(v$$33);

  if (matchValue$$110 == null) {
    return 0;
  } else {
    const membInfo$$1 = matchValue$$110;

    if (membInfo$$1.MemberFlags.IsInstance) {
      return 1;
    } else {
      return 0;
    }
  }
}

function Val$$get_ApparentEnclosingEntity(x$$323) {
  const matchValue$$111 = Val$$get_MemberInfo(x$$323);

  if (matchValue$$111 == null) {
    return Val$$get_DeclaringEntity(x$$323);
  } else {
    const membInfo$$2 = matchValue$$111;
    return new ParentRef(0, "Parent", membInfo$$2.ApparentEnclosingEntity);
  }
}

function Val$$get_PublicPath(x$$324) {
  const matchValue$$112 = Val$$get_DeclaringEntity(x$$324);

  if (matchValue$$112.tag === 1) {
    return null;
  } else {
    const eref = matchValue$$112.fields[0];
    const matchValue$$113 = EntityRef$$get_PublicPath(eref);

    if (matchValue$$113 != null) {
      const p$$3 = matchValue$$113;
      return new ValPublicPath(0, "ValPubPath", p$$3, Val$$GetLinkageFullKey(x$$324));
    } else {
      return null;
    }
  }
}

function Val$$get_IsDispatchSlot(x$$325) {
  const matchValue$$114 = Val$$get_MemberInfo(x$$325);

  if (matchValue$$114 != null) {
    const membInfo$$3 = matchValue$$114;
    return membInfo$$3.MemberFlags.IsDispatchSlot;
  } else {
    return false;
  }
}

function Val$$get_TypeScheme(x$$326) {
  const matchValue$$115 = Val$$get_Type(x$$326);

  if (matchValue$$115.tag === 0) {
    const tps$$1 = matchValue$$115.fields[0];
    const tau = matchValue$$115.fields[1];
    return [tps$$1, tau];
  } else {
    const ty$$3 = matchValue$$115;
    return [(0, _Types.L)(), ty$$3];
  }
}

function Val$$get_TauType(x$$327) {
  const matchValue$$116 = Val$$get_Type(x$$327);

  if (matchValue$$116.tag === 0) {
    const tau$$1 = matchValue$$116.fields[1];
    return tau$$1;
  } else {
    const ty$$4 = matchValue$$116;
    return ty$$4;
  }
}

function Val$$get_Typars(x$$328) {
  const matchValue$$117 = Val$$get_Type(x$$328);

  if (matchValue$$117.tag === 0) {
    const tps$$2 = matchValue$$117.fields[0];
    return tps$$2;
  } else {
    return (0, _Types.L)();
  }
}

function Val$$get_LogicalName(x$$329) {
  const matchValue$$118 = Val$$get_MemberInfo(x$$329);

  if (matchValue$$118 != null) {
    const membInfo$$4 = matchValue$$118;
    const matchValue$$119 = membInfo$$4.ImplementedSlotSigs;

    if (matchValue$$119.tail != null) {
      const slotsig = matchValue$$119.head;
      return SlotSig$$get_Name(slotsig);
    } else {
      return x$$329.val_logical_name;
    }
  } else {
    return x$$329.val_logical_name;
  }
}

function Val$$get_ValCompiledName(x$$330) {
  const matchValue$$120 = x$$330.val_opt_data;

  if (matchValue$$120 != null) {
    const optData$$32 = matchValue$$120;
    return optData$$32.val_compiled_name;
  } else {
    return null;
  }
}

function Val$$get_CompiledName(x$$331) {
  let givenName;
  const matchValue$$121 = x$$331.val_opt_data;
  var $target$$52, n$$7;

  if (matchValue$$121 != null) {
    if (matchValue$$121.val_compiled_name != null) {
      $target$$52 = 0;
      n$$7 = matchValue$$121.val_compiled_name;
    } else {
      $target$$52 = 1;
    }
  } else {
    $target$$52 = 1;
  }

  switch ($target$$52) {
    case 0:
      {
        givenName = n$$7;
        break;
      }

    case 1:
      {
        givenName = Val$$get_LogicalName(x$$331);
        break;
      }
  }

  if ((Val$$get_IsCompiledAsTopLevel(x$$331) ? !Val$$get_IsMember(x$$331) : false) ? Val$$get_IsCompilerGenerated(x$$331) ? true : !Val$$get_IsMemberOrModuleBinding(x$$331) : false) {
    return (0, _ast.StableNiceNameGenerator$$GetUniqueCompilerGeneratedName$$Z576F2858)(globalStableNameGenerator, givenName, Val$$get_Range(x$$331), Val$$get_Stamp(x$$331));
  } else {
    return givenName;
  }
}

function Val$$get_PropertyName(x$$332) {
  const logicalName = Val$$get_LogicalName(x$$332);
  return (0, _PrettyNaming.ChopPropertyName)(logicalName);
}

function Val$$get_CoreDisplayName(x$$333) {
  const matchValue$$122 = Val$$get_MemberInfo(x$$333);

  if (matchValue$$122 == null) {
    return Val$$get_LogicalName(x$$333);
  } else {
    const membInfo$$5 = matchValue$$122;
    var $target$$53;

    if (membInfo$$5.MemberFlags.MemberKind.tag === 1) {
      $target$$53 = 0;
    } else if (membInfo$$5.MemberFlags.MemberKind.tag === 2) {
      $target$$53 = 0;
    } else if (membInfo$$5.MemberFlags.MemberKind.tag === 5) {
      $target$$53 = 1;
    } else if (membInfo$$5.MemberFlags.MemberKind.tag === 4) {
      $target$$53 = 1;
    } else if (membInfo$$5.MemberFlags.MemberKind.tag === 3) {
      $target$$53 = 1;
    } else {
      $target$$53 = 0;
    }

    switch ($target$$53) {
      case 0:
        {
          return Val$$get_LogicalName(x$$333);
        }

      case 1:
        {
          return Val$$get_PropertyName(x$$333);
        }
    }
  }
}

function Val$$get_DisplayName(x$$334) {
  return (0, _PrettyNaming.DemangleOperatorName)(Val$$get_CoreDisplayName(x$$334));
}

function Val$$SetValRec$$342B737B(x$$335, b$$12) {
  x$$335.val_flags = ValFlags$$WithRecursiveValInfo$$342B737B(x$$335.val_flags, b$$12);
}

function Val$$SetIsMemberOrModuleBinding(x$$336) {
  x$$336.val_flags = ValFlags$$get_WithIsMemberOrModuleBinding(x$$336.val_flags);
}

function Val$$SetMakesNoCriticalTailcalls(x$$337) {
  x$$337.val_flags = ValFlags$$get_WithMakesNoCriticalTailcalls(x$$337.val_flags);
}

function Val$$SetHasBeenReferenced(x$$338) {
  x$$338.val_flags = ValFlags$$get_WithHasBeenReferenced(x$$338.val_flags);
}

function Val$$SetIsCompiledAsStaticPropertyWithoutField(x$$339) {
  x$$339.val_flags = ValFlags$$get_WithIsCompiledAsStaticPropertyWithoutField(x$$339.val_flags);
}

function Val$$SetIsFixed(x$$340) {
  x$$340.val_flags = ValFlags$$get_WithIsFixed(x$$340.val_flags);
}

function Val$$SetValReprInfo$$Z35BE7615(x$$341, info$$1) {
  var inputRecord$$8;
  const matchValue$$124 = x$$341.val_opt_data;

  if (matchValue$$124 != null) {
    const optData$$33 = matchValue$$124;
    optData$$33.val_repr_info = info$$1;
  } else {
    x$$341.val_opt_data = (inputRecord$$8 = Val$$$get_EmptyValOptData(), new ValOptionalData(inputRecord$$8.val_compiled_name, inputRecord$$8.val_other_range, inputRecord$$8.val_const, inputRecord$$8.val_defn, info$$1, inputRecord$$8.val_access, inputRecord$$8.val_xmldoc, inputRecord$$8.val_member_info, inputRecord$$8.val_declaring_entity, inputRecord$$8.val_xmldocsig, inputRecord$$8.val_attribs));
  }
}

function Val$$SetType$$ZB53B58E(x$$342, ty$$5) {
  x$$342.val_type = ty$$5;
}

function Val$$SetOtherRange$$56F61A9(x$$343, m$$11) {
  var inputRecord$$9;
  const matchValue$$125 = x$$343.val_opt_data;

  if (matchValue$$125 != null) {
    const optData$$34 = matchValue$$125;
    optData$$34.val_other_range = m$$11;
  } else {
    x$$343.val_opt_data = (inputRecord$$9 = Val$$$get_EmptyValOptData(), new ValOptionalData(inputRecord$$9.val_compiled_name, m$$11, inputRecord$$9.val_const, inputRecord$$9.val_defn, inputRecord$$9.val_repr_info, inputRecord$$9.val_access, inputRecord$$9.val_xmldoc, inputRecord$$9.val_member_info, inputRecord$$9.val_declaring_entity, inputRecord$$9.val_xmldocsig, inputRecord$$9.val_attribs));
  }
}

function Val$$SetDeclaringEntity$$Z12FB10AD(x$$344, parent) {
  var inputRecord$$10;
  const matchValue$$126 = x$$344.val_opt_data;

  if (matchValue$$126 != null) {
    const optData$$35 = matchValue$$126;
    optData$$35.val_declaring_entity = parent;
  } else {
    x$$344.val_opt_data = (inputRecord$$10 = Val$$$get_EmptyValOptData(), new ValOptionalData(inputRecord$$10.val_compiled_name, inputRecord$$10.val_other_range, inputRecord$$10.val_const, inputRecord$$10.val_defn, inputRecord$$10.val_repr_info, inputRecord$$10.val_access, inputRecord$$10.val_xmldoc, inputRecord$$10.val_member_info, parent, inputRecord$$10.val_xmldocsig, inputRecord$$10.val_attribs));
  }
}

function Val$$SetAttribs$$A32CD4C(x$$345, attribs$$3) {
  var inputRecord$$11;
  const matchValue$$127 = x$$345.val_opt_data;

  if (matchValue$$127 != null) {
    const optData$$36 = matchValue$$127;
    optData$$36.val_attribs = attribs$$3;
  } else {
    x$$345.val_opt_data = (inputRecord$$11 = Val$$$get_EmptyValOptData(), new ValOptionalData(inputRecord$$11.val_compiled_name, inputRecord$$11.val_other_range, inputRecord$$11.val_const, inputRecord$$11.val_defn, inputRecord$$11.val_repr_info, inputRecord$$11.val_access, inputRecord$$11.val_xmldoc, inputRecord$$11.val_member_info, inputRecord$$11.val_declaring_entity, inputRecord$$11.val_xmldocsig, attribs$$3));
  }
}

function Val$$SetMemberInfo$$499E767B(x$$346, member_info) {
  var inputRecord$$12;
  const matchValue$$128 = x$$346.val_opt_data;

  if (matchValue$$128 != null) {
    const optData$$37 = matchValue$$128;
    optData$$37.val_member_info = member_info;
  } else {
    x$$346.val_opt_data = (inputRecord$$12 = Val$$$get_EmptyValOptData(), new ValOptionalData(inputRecord$$12.val_compiled_name, inputRecord$$12.val_other_range, inputRecord$$12.val_const, inputRecord$$12.val_defn, inputRecord$$12.val_repr_info, inputRecord$$12.val_access, inputRecord$$12.val_xmldoc, member_info, inputRecord$$12.val_declaring_entity, inputRecord$$12.val_xmldocsig, inputRecord$$12.val_attribs));
  }
}

function Val$$SetValDefn$$1EB7EF41(x$$347, val_defn) {
  var inputRecord$$13;
  const matchValue$$129 = x$$347.val_opt_data;

  if (matchValue$$129 != null) {
    const optData$$38 = matchValue$$129;
    optData$$38.val_defn = val_defn;
  } else {
    x$$347.val_opt_data = (inputRecord$$13 = Val$$$get_EmptyValOptData(), new ValOptionalData(inputRecord$$13.val_compiled_name, inputRecord$$13.val_other_range, inputRecord$$13.val_const, val_defn, inputRecord$$13.val_repr_info, inputRecord$$13.val_access, inputRecord$$13.val_xmldoc, inputRecord$$13.val_member_info, inputRecord$$13.val_declaring_entity, inputRecord$$13.val_xmldocsig, inputRecord$$13.val_attribs));
  }
}

function Val$$$NewUnlinked() {
  return new Val(null, null, null, null, null, null);
}

function Val$$$New$$7D0CFEA5(data$$3) {
  return data$$3;
}

function Val$$Link$$7D0CFEA5(x$$348, tg$$4) {
  Val$$SetData$$7D0CFEA5(x$$348, tg$$4);
}

function Val$$SetData$$7D0CFEA5(x$$349, tg$$5) {
  x$$349.val_logical_name = tg$$5.val_logical_name;
  x$$349.val_range = tg$$5.val_range;
  x$$349.val_type = tg$$5.val_type;
  x$$349.val_stamp = tg$$5.val_stamp;
  x$$349.val_flags = tg$$5.val_flags;
  const matchValue$$130 = tg$$5.val_opt_data;

  if (matchValue$$130 == null) {} else {
    const tg$$6 = matchValue$$130;
    x$$349.val_opt_data = new ValOptionalData(tg$$6.val_compiled_name, tg$$6.val_other_range, tg$$6.val_const, tg$$6.val_defn, tg$$6.val_repr_info, tg$$6.val_access, tg$$6.val_xmldoc, tg$$6.val_member_info, tg$$6.val_declaring_entity, tg$$6.val_xmldocsig, tg$$6.val_attribs);
  }
}

function Val$$get_IsLinked(x$$350) {
  if ((0, _Util.equals)(x$$350.val_logical_name, null)) {
    return false;
  } else {
    return true;
  }
}

function Val$$get_DebugText(x$$351) {
  return x$$351.toString();
}

Val.prototype.toString = function () {
  const x$$352 = this;
  return Val$$get_LogicalName(x$$352);
};

function ValMemberInfo$$get_DebugText(x$$353) {
  return x$$353.toString();
}

ValMemberInfo.prototype.toString = function () {
  return "ValMemberInfo(...)";
};

function NonLocalValOrMemberRef$$get_Ccu(x$$355) {
  return NonLocalEntityRef$$get_Ccu(x$$355.EnclosingEntity.nlr);
}

function NonLocalValOrMemberRef$$get_AssemblyName(x$$356) {
  return NonLocalEntityRef$$get_AssemblyName(x$$356.EnclosingEntity.nlr);
}

function NonLocalValOrMemberRef$$get_DebugText(x$$357) {
  return x$$357.toString();
}

NonLocalValOrMemberRef.prototype.toString = function () {
  const x$$358 = this;
  return x$$358.EnclosingEntity.nlr.toString() + "::" + ValLinkageFullKey$$get_PartialKey(x$$358.ItemKey).LogicalName;
};

function ValPublicPath$$get_DebugText(x$$359) {
  return x$$359.toString();
}

ValPublicPath.prototype.toString = function () {
  return (0, _String.toText)((0, _String.printf)("ValPubPath(...)"));
};

function NonLocalEntityRef$$$TryDerefEntityPath$$Z1F81631D(ccu$$1, path, i$$2, entity$$1) {
  NonLocalEntityRef$$$TryDerefEntityPath$$Z1F81631D: while (true) {
    if (i$$2 >= path.length) {
      return new _illib.ValueOption$00601(0, "ValueSome", entity$$1);
    } else {
      const next = (0, _Map.FSharpMap$$TryFind$$2B595)(ModuleOrNamespaceType$$get_AllEntitiesByCompiledAndLogicalMangledNames(Entity$$get_ModuleOrNamespaceType(entity$$1)), path[i$$2]);

      if (next == null) {
        return new _illib.ValueOption$00601(1, "ValueNone");
      } else {
        const res$$9 = next;
        ccu$$1 = ccu$$1;
        path = path;
        i$$2 = i$$2 + 1;
        entity$$1 = res$$9;
        continue NonLocalEntityRef$$$TryDerefEntityPath$$Z1F81631D;
      }
    }
  }
}

function NonLocalEntityRef$$TryDeref$$Z1FBCCD16(nleref, canError) {
  const path$$1 = nleref.fields[1];
  const ccu$$2 = nleref.fields[0];

  if (canError) {
    CcuThunk$$EnsureDerefable$$Z6B4C8463(ccu$$2, path$$1);
  }

  if (CcuThunk$$get_IsUnresolvedReference(ccu$$2)) {
    return new _illib.ValueOption$00601(1, "ValueNone");
  } else {
    const matchValue$$132 = NonLocalEntityRef$$$TryDerefEntityPath$$Z1F81631D(ccu$$2, path$$1, 0, CcuThunk$$get_Contents(ccu$$2));

    if (matchValue$$132.tag === 1) {
      const tryForwardPrefixPath = function tryForwardPrefixPath(i$$3) {
        tryForwardPrefixPath: while (true) {
          if (i$$3 < path$$1.length) {
            const matchValue$$133 = CcuThunk$$TryForward$$Z593E6CFA(ccu$$2, path$$1.slice(0, i$$3 - 1 + 1), path$$1[i$$3]);

            if (matchValue$$133 == null) {
              i$$3 = i$$3 + 1;
              continue tryForwardPrefixPath;
            } else {
              const tcref$$1 = matchValue$$133;
              return NonLocalEntityRef$$$TryDerefEntityPath$$Z1F81631D(ccu$$2, path$$1, i$$3 + 1, EntityRef$$get_Deref(tcref$$1));
            }
          } else {
            return new _illib.ValueOption$00601(1, "ValueNone");
          }
        }
      };

      return tryForwardPrefixPath(0);
    } else {
      const r$$2 = matchValue$$132;
      return r$$2;
    }
  }
}

function NonLocalEntityRef$$get_Ccu(nleref$$1) {
  const ccu$$3 = nleref$$1.fields[0];
  return ccu$$3;
}

function NonLocalEntityRef$$get_Path(nleref$$2) {
  const p$$4 = nleref$$2.fields[1];
  return p$$4;
}

function NonLocalEntityRef$$get_DisplayName(nleref$$3) {
  return (0, _String.join)(".", ...NonLocalEntityRef$$get_Path(nleref$$3));
}

function NonLocalEntityRef$$get_LastItemMangledName(nleref$$4) {
  const p$$5 = NonLocalEntityRef$$get_Path(nleref$$4);
  return p$$5[p$$5.length - 1];
}

function NonLocalEntityRef$$get_EnclosingMangledPath(nleref$$5) {
  const p$$6 = NonLocalEntityRef$$get_Path(nleref$$5);
  return p$$6.slice(0, p$$6.length - 2 + 1);
}

function NonLocalEntityRef$$get_AssemblyName(nleref$$6) {
  return CcuThunk$$get_AssemblyName(NonLocalEntityRef$$get_Ccu(nleref$$6));
}

function NonLocalEntityRef$$get_Deref(nleref$$7) {
  const matchValue$$134 = NonLocalEntityRef$$TryDeref$$Z1FBCCD16(nleref$$7, true);

  if (matchValue$$134.tag === 1) {
    (0, _ErrorLogger.errorR)(new InternalUndefinedItemRef(function (tupledArg$$3) {
      return (0, _FSComp.SR$$$tastUndefinedItemRefModuleNamespace$$30230F9B)(tupledArg$$3[0], tupledArg$$3[1], tupledArg$$3[2]);
    }, NonLocalEntityRef$$get_DisplayName(nleref$$7), NonLocalEntityRef$$get_AssemblyName(nleref$$7), "<some module on this path>"));
    throw new Error();
  } else {
    const res$$10 = matchValue$$134.fields[0];
    return res$$10;
  }
}

function NonLocalEntityRef$$get_ModuleOrNamespaceType(nleref$$8) {
  return Entity$$get_ModuleOrNamespaceType(NonLocalEntityRef$$get_Deref(nleref$$8));
}

function NonLocalEntityRef$$get_DebugText(x$$360) {
  return x$$360.toString();
}

NonLocalEntityRef.prototype.toString = function () {
  const x$$361 = this;
  return NonLocalEntityRef$$get_DisplayName(x$$361);
};

function EntityRef$$get_IsLocalRef(x$$362) {
  if ((0, _Util.equals)(x$$362.nlr, null)) {
    return true;
  } else {
    return false;
  }
}

function EntityRef$$get_IsResolved(x$$363) {
  if ((0, _Util.equals)(x$$363.binding, null)) {
    return false;
  } else {
    return true;
  }
}

function EntityRef$$get_PrivateTarget(x$$364) {
  return x$$364.binding;
}

function EntityRef$$get_ResolvedTarget(x$$365) {
  return x$$365.binding;
}

function EntityRef$$Resolve$$Z1FBCCD16(tcr, canError$$1) {
  const res$$11 = NonLocalEntityRef$$TryDeref$$Z1FBCCD16(tcr.nlr, canError$$1);

  if (res$$11.tag === 1) {} else {
    const r$$3 = res$$11.fields[0];
    tcr.binding = (0, _lib.nullableSlotFull)(r$$3);
  }
}

function EntityRef$$get_Deref(tcr$$1) {
  if ((0, _Util.equals)(tcr$$1.binding, null)) {
    EntityRef$$Resolve$$Z1FBCCD16(tcr$$1, true);

    if ((0, _Util.equals)(tcr$$1.binding, null)) {
      return (0, _ErrorLogger.error)(new InternalUndefinedItemRef(function (tupledArg$$4) {
        return (0, _FSComp.SR$$$tastUndefinedItemRefModuleNamespaceType$$30230F9B)(tupledArg$$4[0], tupledArg$$4[1], tupledArg$$4[2]);
      }, (0, _String.join)(".", ...NonLocalEntityRef$$get_EnclosingMangledPath(tcr$$1.nlr)), NonLocalEntityRef$$get_AssemblyName(tcr$$1.nlr), NonLocalEntityRef$$get_LastItemMangledName(tcr$$1.nlr)));
    } else {
      return tcr$$1.binding;
    }
  } else {
    return tcr$$1.binding;
  }
}

function EntityRef$$get_TryDeref(tcr$$2) {
  if ((0, _Util.equals)(tcr$$2.binding, null)) {
    EntityRef$$Resolve$$Z1FBCCD16(tcr$$2, false);

    if ((0, _Util.equals)(tcr$$2.binding, null)) {
      return new _illib.ValueOption$00601(1, "ValueNone");
    } else {
      return new _illib.ValueOption$00601(0, "ValueSome", tcr$$2.binding);
    }
  } else {
    return new _illib.ValueOption$00601(0, "ValueSome", tcr$$2.binding);
  }
}

function EntityRef$$get_CanDeref(tcr$$3) {
  let copyOfStruct = EntityRef$$get_TryDeref(tcr$$3);
  return (0, _illib.ValueOption$00601$$get_IsSome)(copyOfStruct);
}

function EntityRef$$get_CompiledRepresentation(x$$366) {
  return Entity$$get_CompiledRepresentation(EntityRef$$get_Deref(x$$366));
}

function EntityRef$$get_CompiledRepresentationForNamedType(x$$367) {
  return Entity$$get_CompiledRepresentationForNamedType(EntityRef$$get_Deref(x$$367));
}

function EntityRef$$get_DefinitionRange(x$$368) {
  return Entity$$get_DefinitionRange(EntityRef$$get_Deref(x$$368));
}

function EntityRef$$get_SigRange(x$$369) {
  return Entity$$get_SigRange(EntityRef$$get_Deref(x$$369));
}

function EntityRef$$get_LogicalName(x$$370) {
  return Entity$$get_LogicalName(EntityRef$$get_Deref(x$$370));
}

function EntityRef$$get_CompiledName(x$$371) {
  return Entity$$get_CompiledName(EntityRef$$get_Deref(x$$371));
}

function EntityRef$$get_DisplayName(x$$372) {
  return Entity$$get_DisplayName(EntityRef$$get_Deref(x$$372));
}

function EntityRef$$get_DisplayNameWithStaticParametersAndUnderscoreTypars(x$$373) {
  return Entity$$get_DisplayNameWithStaticParametersAndUnderscoreTypars(EntityRef$$get_Deref(x$$373));
}

function EntityRef$$get_DisplayNameWithStaticParameters(x$$374) {
  return Entity$$get_DisplayNameWithStaticParameters(EntityRef$$get_Deref(x$$374));
}

function EntityRef$$get_Range(x$$375) {
  return Entity$$get_Range(EntityRef$$get_Deref(x$$375));
}

function EntityRef$$get_Stamp(x$$376) {
  return Entity$$get_Stamp(EntityRef$$get_Deref(x$$376));
}

function EntityRef$$get_Attribs(x$$377) {
  return Entity$$get_Attribs(EntityRef$$get_Deref(x$$377));
}

function EntityRef$$get_XmlDoc(x$$378) {
  return Entity$$get_XmlDoc(EntityRef$$get_Deref(x$$378));
}

function EntityRef$$get_XmlDocSig(x$$379) {
  return Entity$$get_XmlDocSig(EntityRef$$get_Deref(x$$379));
}

function EntityRef$$get_ModuleOrNamespaceType(x$$380) {
  return Entity$$get_ModuleOrNamespaceType(EntityRef$$get_Deref(x$$380));
}

function EntityRef$$get_DemangledModuleOrNamespaceName(x$$381) {
  return Entity$$get_DemangledModuleOrNamespaceName(EntityRef$$get_Deref(x$$381));
}

function EntityRef$$get_TypeContents(x$$382) {
  return Entity$$get_TypeContents(EntityRef$$get_Deref(x$$382));
}

function EntityRef$$get_TypeOrMeasureKind(x$$383) {
  return Entity$$get_TypeOrMeasureKind(EntityRef$$get_Deref(x$$383));
}

function EntityRef$$get_Id(x$$384) {
  return Entity$$get_Id(EntityRef$$get_Deref(x$$384));
}

function EntityRef$$get_TypeReprInfo(x$$385) {
  return Entity$$get_TypeReprInfo(EntityRef$$get_Deref(x$$385));
}

function EntityRef$$get_ExceptionInfo(x$$386) {
  return Entity$$get_ExceptionInfo(EntityRef$$get_Deref(x$$386));
}

function EntityRef$$get_IsExceptionDecl(x$$387) {
  return Entity$$get_IsExceptionDecl(EntityRef$$get_Deref(x$$387));
}

function EntityRef$$Typars$$4DB9192C(x$$388, m$$12) {
  return Entity$$Typars$$4DB9192C(EntityRef$$get_Deref(x$$388), m$$12);
}

function EntityRef$$get_TyparsNoRange(x$$389) {
  return Entity$$get_TyparsNoRange(EntityRef$$get_Deref(x$$389));
}

function EntityRef$$get_TypeAbbrev(x$$390) {
  return Entity$$get_TypeAbbrev(EntityRef$$get_Deref(x$$390));
}

function EntityRef$$get_IsTypeAbbrev(x$$391) {
  return Entity$$get_IsTypeAbbrev(EntityRef$$get_Deref(x$$391));
}

function EntityRef$$get_TypeReprAccessibility(x$$392) {
  return Entity$$get_TypeReprAccessibility(EntityRef$$get_Deref(x$$392));
}

function EntityRef$$get_CompiledReprCache(x$$393) {
  return Entity$$get_CompiledReprCache(EntityRef$$get_Deref(x$$393));
}

function EntityRef$$get_PublicPath(x$$394) {
  return Entity$$get_PublicPath(EntityRef$$get_Deref(x$$394));
}

function EntityRef$$get_Accessibility(x$$395) {
  return Entity$$get_Accessibility(EntityRef$$get_Deref(x$$395));
}

function EntityRef$$get_IsPrefixDisplay(x$$396) {
  return Entity$$get_IsPrefixDisplay(EntityRef$$get_Deref(x$$396));
}

function EntityRef$$get_IsModuleOrNamespace(x$$397) {
  return Entity$$get_IsModuleOrNamespace(EntityRef$$get_Deref(x$$397));
}

function EntityRef$$get_IsNamespace(x$$398) {
  return Entity$$get_IsNamespace(EntityRef$$get_Deref(x$$398));
}

function EntityRef$$get_IsModule(x$$399) {
  return Entity$$get_IsModule(EntityRef$$get_Deref(x$$399));
}

function EntityRef$$get_CompilationPathOpt(x$$400) {
  return Entity$$get_CompilationPathOpt(EntityRef$$get_Deref(x$$400));
}

function EntityRef$$get_CompilationPath(x$$401) {
  return Entity$$get_CompilationPath(EntityRef$$get_Deref(x$$401));
}

function EntityRef$$get_AllFieldTable(x$$402) {
  return Entity$$get_AllFieldTable(EntityRef$$get_Deref(x$$402));
}

function EntityRef$$get_AllFieldsArray(x$$403) {
  return Entity$$get_AllFieldsArray(EntityRef$$get_Deref(x$$403));
}

function EntityRef$$get_AllFieldsAsList(x$$404) {
  return Entity$$get_AllFieldsAsList(EntityRef$$get_Deref(x$$404));
}

function EntityRef$$get_TrueFieldsAsList(x$$405) {
  return Entity$$get_TrueFieldsAsList(EntityRef$$get_Deref(x$$405));
}

function EntityRef$$get_TrueInstanceFieldsAsList(x$$406) {
  return Entity$$get_TrueInstanceFieldsAsList(EntityRef$$get_Deref(x$$406));
}

function EntityRef$$get_AllInstanceFieldsAsList(x$$407) {
  return Entity$$get_AllInstanceFieldsAsList(EntityRef$$get_Deref(x$$407));
}

function EntityRef$$GetFieldByIndex$$Z524259A4(x$$408, n$$8) {
  return Entity$$GetFieldByIndex$$Z524259A4(EntityRef$$get_Deref(x$$408), n$$8);
}

function EntityRef$$GetFieldByName$$Z721C83C5(x$$409, n$$9) {
  return Entity$$GetFieldByName$$Z721C83C5(EntityRef$$get_Deref(x$$409), n$$9);
}

function EntityRef$$get_UnionTypeInfo(x$$410) {
  return Entity$$get_UnionTypeInfo(EntityRef$$get_Deref(x$$410));
}

function EntityRef$$get_UnionCasesArray(x$$411) {
  return Entity$$get_UnionCasesArray(EntityRef$$get_Deref(x$$411));
}

function EntityRef$$get_UnionCasesAsList(x$$412) {
  return Entity$$get_UnionCasesAsList(EntityRef$$get_Deref(x$$412));
}

function EntityRef$$GetUnionCaseByName$$Z721C83C5(x$$413, n$$10) {
  return Entity$$GetUnionCaseByName$$Z721C83C5(EntityRef$$get_Deref(x$$413), n$$10);
}

function EntityRef$$get_FSharpObjectModelTypeInfo(x$$414) {
  return Entity$$get_FSharpObjectModelTypeInfo(EntityRef$$get_Deref(x$$414));
}

function EntityRef$$get_ImmediateInterfacesOfFSharpTycon(x$$415) {
  return Entity$$get_ImmediateInterfacesOfFSharpTycon(EntityRef$$get_Deref(x$$415));
}

function EntityRef$$get_ImmediateInterfaceTypesOfFSharpTycon(x$$416) {
  return Entity$$get_ImmediateInterfaceTypesOfFSharpTycon(EntityRef$$get_Deref(x$$416));
}

function EntityRef$$get_MembersOfFSharpTyconSorted(x$$417) {
  return Entity$$get_MembersOfFSharpTyconSorted(EntityRef$$get_Deref(x$$417));
}

function EntityRef$$get_MembersOfFSharpTyconByName(x$$418) {
  return Entity$$get_MembersOfFSharpTyconByName(EntityRef$$get_Deref(x$$418));
}

function EntityRef$$get_IsStructOrEnumTycon(x$$419) {
  return Entity$$get_IsStructOrEnumTycon(EntityRef$$get_Deref(x$$419));
}

function EntityRef$$get_IsAsmReprTycon(x$$420) {
  return Entity$$get_IsAsmReprTycon(EntityRef$$get_Deref(x$$420));
}

function EntityRef$$get_IsMeasureableReprTycon(x$$421) {
  return Entity$$get_IsMeasureableReprTycon(EntityRef$$get_Deref(x$$421));
}

function EntityRef$$get_IsErased(x$$422) {
  return Entity$$get_IsErased(EntityRef$$get_Deref(x$$422));
}

function EntityRef$$get_GeneratedHashAndEqualsWithComparerValues(x$$423) {
  return Entity$$get_GeneratedHashAndEqualsWithComparerValues(EntityRef$$get_Deref(x$$423));
}

function EntityRef$$get_GeneratedCompareToWithComparerValues(x$$424) {
  return Entity$$get_GeneratedCompareToWithComparerValues(EntityRef$$get_Deref(x$$424));
}

function EntityRef$$get_GeneratedCompareToValues(x$$425) {
  return Entity$$get_GeneratedCompareToValues(EntityRef$$get_Deref(x$$425));
}

function EntityRef$$get_GeneratedHashAndEqualsValues(x$$426) {
  return Entity$$get_GeneratedHashAndEqualsValues(EntityRef$$get_Deref(x$$426));
}

function EntityRef$$get_IsILTycon(x$$427) {
  return Entity$$get_IsILTycon(EntityRef$$get_Deref(x$$427));
}

function EntityRef$$get_ILTyconInfo(x$$428) {
  return Entity$$get_ILTyconInfo(EntityRef$$get_Deref(x$$428));
}

function EntityRef$$get_ILTyconRawMetadata(x$$429) {
  return Entity$$get_ILTyconRawMetadata(EntityRef$$get_Deref(x$$429));
}

function EntityRef$$get_IsUnionTycon(x$$430) {
  return Entity$$get_IsUnionTycon(EntityRef$$get_Deref(x$$430));
}

function EntityRef$$get_IsRecordTycon(x$$431) {
  return Entity$$get_IsRecordTycon(EntityRef$$get_Deref(x$$431));
}

function EntityRef$$get_IsFSharpObjectModelTycon(x$$432) {
  return Entity$$get_IsFSharpObjectModelTycon(EntityRef$$get_Deref(x$$432));
}

function EntityRef$$get_TryIsByRefLike(x$$433) {
  return Entity$$get_TryIsByRefLike(EntityRef$$get_Deref(x$$433));
}

function EntityRef$$SetIsByRefLike$$Z1FBCCD16(x$$434, b$$13) {
  Entity$$SetIsByRefLike$$Z1FBCCD16(EntityRef$$get_Deref(x$$434), b$$13);
}

function EntityRef$$get_TryIsReadOnly(x$$435) {
  return Entity$$get_TryIsReadOnly(EntityRef$$get_Deref(x$$435));
}

function EntityRef$$SetIsReadOnly$$Z1FBCCD16(x$$436, b$$14) {
  Entity$$SetIsReadOnly$$Z1FBCCD16(EntityRef$$get_Deref(x$$436), b$$14);
}

function EntityRef$$get_IsHiddenReprTycon(x$$437) {
  return Entity$$get_IsHiddenReprTycon(EntityRef$$get_Deref(x$$437));
}

function EntityRef$$get_IsFSharpInterfaceTycon(x$$438) {
  return Entity$$get_IsFSharpInterfaceTycon(EntityRef$$get_Deref(x$$438));
}

function EntityRef$$get_IsFSharpDelegateTycon(x$$439) {
  return Entity$$get_IsFSharpDelegateTycon(EntityRef$$get_Deref(x$$439));
}

function EntityRef$$get_IsFSharpEnumTycon(x$$440) {
  return Entity$$get_IsFSharpEnumTycon(EntityRef$$get_Deref(x$$440));
}

function EntityRef$$get_IsILEnumTycon(x$$441) {
  return Entity$$get_IsILEnumTycon(EntityRef$$get_Deref(x$$441));
}

function EntityRef$$get_IsEnumTycon(x$$442) {
  return Entity$$get_IsEnumTycon(EntityRef$$get_Deref(x$$442));
}

function EntityRef$$get_IsFSharpStructOrEnumTycon(x$$443) {
  return Entity$$get_IsFSharpStructOrEnumTycon(EntityRef$$get_Deref(x$$443));
}

function EntityRef$$get_IsILStructOrEnumTycon(x$$444) {
  return Entity$$get_IsILStructOrEnumTycon(EntityRef$$get_Deref(x$$444));
}

function EntityRef$$get_PreEstablishedHasDefaultConstructor(x$$445) {
  return Entity$$get_PreEstablishedHasDefaultConstructor(EntityRef$$get_Deref(x$$445));
}

function EntityRef$$get_HasSelfReferentialConstructor(x$$446) {
  return Entity$$get_HasSelfReferentialConstructor(EntityRef$$get_Deref(x$$446));
}

function EntityRef$$get_UnionCasesAsRefList(x$$447) {
  return (0, _List.map)(function mapping$$5(arg00$$6) {
    return EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7(x$$447, arg00$$6);
  }, EntityRef$$get_UnionCasesAsList(x$$447));
}

function EntityRef$$get_TrueInstanceFieldsAsRefList(x$$448) {
  return (0, _List.map)(function mapping$$6(arg00$$7) {
    return EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14(x$$448, arg00$$7);
  }, EntityRef$$get_TrueInstanceFieldsAsList(x$$448));
}

function EntityRef$$get_AllFieldAsRefList(x$$449) {
  return (0, _List.map)(function mapping$$7(arg00$$8) {
    return EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14(x$$449, arg00$$8);
  }, EntityRef$$get_AllFieldsAsList(x$$449));
}

function EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14(x$$450, rf) {
  return new RecdFieldRef(0, "RFRef", x$$450, RecdField$$get_Name(rf));
}

function EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7(x$$451, uc$$8) {
  return new UnionCaseRef(0, "UCRef", x$$451, (0, _ast.Ident$$get_idText)(uc$$8.Id));
}

function EntityRef$$get_DebugText(x$$452) {
  return x$$452.toString();
}

EntityRef.prototype.toString = function () {
  const x$$453 = this;
  return EntityRef$$get_IsLocalRef(x$$453) ? Entity$$get_DisplayName(EntityRef$$get_ResolvedTarget(x$$453)) : NonLocalEntityRef$$get_DisplayName(x$$453.nlr);
};

function ValRef$$get_IsLocalRef(x$$454) {
  return x$$454.nlr === null;
}

function ValRef$$get_IsResolved(x$$455) {
  return !(x$$455.binding === null);
}

function ValRef$$get_PrivateTarget(x$$456) {
  return x$$456.binding;
}

function ValRef$$get_ResolvedTarget(x$$457) {
  return x$$457.binding;
}

function ValRef$$get_Deref(vr) {
  if (vr.binding === null) {
    let res$$12;
    const nlr = vr.nlr;
    const e = EntityRef$$get_Deref(nlr.EnclosingEntity);
    const possible = ModuleOrNamespaceType$$TryLinkVal$$Z70BACEDB(Entity$$get_ModuleOrNamespaceType(e), NonLocalEntityRef$$get_Ccu(nlr.EnclosingEntity.nlr), nlr.ItemKey);

    if (possible.tag === 0) {
      const h$$1 = possible.fields[0];
      res$$12 = h$$1;
    } else {
      res$$12 = (0, _ErrorLogger.error)(new InternalUndefinedItemRef(function (tupledArg$$5) {
        return (0, _FSComp.SR$$$tastUndefinedItemRefVal$$30230F9B)(tupledArg$$5[0], tupledArg$$5[1], tupledArg$$5[2]);
      }, Entity$$get_DisplayNameWithStaticParameters(e), NonLocalValOrMemberRef$$get_AssemblyName(nlr), (0, _String.toText)((0, _String.printf)("%+A"))(ValLinkageFullKey$$get_PartialKey(nlr.ItemKey))));
    }

    vr.binding = (0, _lib.nullableSlotFull)(res$$12);
    return res$$12;
  } else {
    return vr.binding;
  }
}

function ValRef$$get_TryDeref(vr$$1) {
  if (vr$$1.binding === null) {
    let resOpt;
    const matchValue$$141 = EntityRef$$get_TryDeref(vr$$1.nlr.EnclosingEntity);

    if (matchValue$$141.tag === 0) {
      const e$$1 = matchValue$$141.fields[0];
      resOpt = ModuleOrNamespaceType$$TryLinkVal$$Z70BACEDB(Entity$$get_ModuleOrNamespaceType(e$$1), NonLocalEntityRef$$get_Ccu(vr$$1.nlr.EnclosingEntity.nlr), vr$$1.nlr.ItemKey);
    } else {
      resOpt = new _illib.ValueOption$00601(1, "ValueNone");
    }

    if (resOpt.tag === 0) {
      const res$$13 = resOpt.fields[0];
      vr$$1.binding = (0, _lib.nullableSlotFull)(res$$13);
    }

    return resOpt;
  } else {
    return new _illib.ValueOption$00601(0, "ValueSome", vr$$1.binding);
  }
}

function ValRef$$get_Type(x$$458) {
  return Val$$get_Type(ValRef$$get_Deref(x$$458));
}

function ValRef$$get_TypeScheme(x$$459) {
  return Val$$get_TypeScheme(ValRef$$get_Deref(x$$459));
}

function ValRef$$get_TauType(x$$460) {
  return Val$$get_TauType(ValRef$$get_Deref(x$$460));
}

function ValRef$$get_Typars(x$$461) {
  return Val$$get_Typars(ValRef$$get_Deref(x$$461));
}

function ValRef$$get_LogicalName(x$$462) {
  return Val$$get_LogicalName(ValRef$$get_Deref(x$$462));
}

function ValRef$$get_DisplayName(x$$463) {
  return Val$$get_DisplayName(ValRef$$get_Deref(x$$463));
}

function ValRef$$get_CoreDisplayName(x$$464) {
  return Val$$get_CoreDisplayName(ValRef$$get_Deref(x$$464));
}

function ValRef$$get_Range(x$$465) {
  return Val$$get_Range(ValRef$$get_Deref(x$$465));
}

function ValRef$$get_Accessibility(x$$466) {
  return Val$$get_Accessibility(ValRef$$get_Deref(x$$466));
}

function ValRef$$get_DeclaringEntity(x$$467) {
  return Val$$get_DeclaringEntity(ValRef$$get_Deref(x$$467));
}

function ValRef$$get_ApparentEnclosingEntity(x$$468) {
  return Val$$get_ApparentEnclosingEntity(ValRef$$get_Deref(x$$468));
}

function ValRef$$get_DefinitionRange(x$$469) {
  return Val$$get_DefinitionRange(ValRef$$get_Deref(x$$469));
}

function ValRef$$get_SigRange(x$$470) {
  return Val$$get_SigRange(ValRef$$get_Deref(x$$470));
}

function ValRef$$get_LiteralValue(x$$471) {
  return Val$$get_LiteralValue(ValRef$$get_Deref(x$$471));
}

function ValRef$$get_Id(x$$472) {
  return Val$$get_Id(ValRef$$get_Deref(x$$472));
}

function ValRef$$get_PropertyName(x$$473) {
  return Val$$get_PropertyName(ValRef$$get_Deref(x$$473));
}

function ValRef$$get_IsPropertyGetterMethod(x$$474) {
  const matchValue$$142 = ValRef$$get_MemberInfo(x$$474);

  if (matchValue$$142 != null) {
    const memInfo = matchValue$$142;

    if ((0, _Util.equals)(memInfo.MemberFlags.MemberKind, new _ast.MemberKind(3, "PropertyGet"))) {
      return true;
    } else {
      return (0, _Util.equals)(memInfo.MemberFlags.MemberKind, new _ast.MemberKind(5, "PropertyGetSet"));
    }
  } else {
    return false;
  }
}

function ValRef$$get_IsPropertySetterMethod(x$$475) {
  const matchValue$$143 = ValRef$$get_MemberInfo(x$$475);

  if (matchValue$$143 != null) {
    const memInfo$$1 = matchValue$$143;

    if ((0, _Util.equals)(memInfo$$1.MemberFlags.MemberKind, new _ast.MemberKind(4, "PropertySet"))) {
      return true;
    } else {
      return (0, _Util.equals)(memInfo$$1.MemberFlags.MemberKind, new _ast.MemberKind(5, "PropertyGetSet"));
    }
  } else {
    return false;
  }
}

function ValRef$$get_Stamp(x$$476) {
  return Val$$get_Stamp(ValRef$$get_Deref(x$$476));
}

function ValRef$$get_IsCompiledAsTopLevel(x$$477) {
  return Val$$get_IsCompiledAsTopLevel(ValRef$$get_Deref(x$$477));
}

function ValRef$$get_IsDispatchSlot(x$$478) {
  return Val$$get_IsDispatchSlot(ValRef$$get_Deref(x$$478));
}

function ValRef$$get_CompiledName(x$$479) {
  return Val$$get_CompiledName(ValRef$$get_Deref(x$$479));
}

function ValRef$$get_PublicPath(x$$480) {
  return Val$$get_PublicPath(ValRef$$get_Deref(x$$480));
}

function ValRef$$get_ReflectedDefinition(x$$481) {
  return Val$$get_ReflectedDefinition(ValRef$$get_Deref(x$$481));
}

function ValRef$$get_IsConstructor(x$$482) {
  return Val$$get_IsConstructor(ValRef$$get_Deref(x$$482));
}

function ValRef$$get_IsOverrideOrExplicitImpl(x$$483) {
  return Val$$get_IsOverrideOrExplicitImpl(ValRef$$get_Deref(x$$483));
}

function ValRef$$get_MemberInfo(x$$484) {
  return Val$$get_MemberInfo(ValRef$$get_Deref(x$$484));
}

function ValRef$$get_IsMember(x$$485) {
  return Val$$get_IsMember(ValRef$$get_Deref(x$$485));
}

function ValRef$$get_IsModuleBinding(x$$486) {
  return Val$$get_IsModuleBinding(ValRef$$get_Deref(x$$486));
}

function ValRef$$get_IsInstanceMember(x$$487) {
  return Val$$get_IsInstanceMember(ValRef$$get_Deref(x$$487));
}

function ValRef$$get_IsMutable(x$$488) {
  return Val$$get_IsMutable(ValRef$$get_Deref(x$$488));
}

function ValRef$$get_PermitsExplicitTypeInstantiation(x$$489) {
  return Val$$get_PermitsExplicitTypeInstantiation(ValRef$$get_Deref(x$$489));
}

function ValRef$$get_MakesNoCriticalTailcalls(x$$490) {
  return Val$$get_MakesNoCriticalTailcalls(ValRef$$get_Deref(x$$490));
}

function ValRef$$get_IsMemberOrModuleBinding(x$$491) {
  return Val$$get_IsMemberOrModuleBinding(ValRef$$get_Deref(x$$491));
}

function ValRef$$get_IsExtensionMember(x$$492) {
  return Val$$get_IsExtensionMember(ValRef$$get_Deref(x$$492));
}

function ValRef$$get_IsIncrClassConstructor(x$$493) {
  return Val$$get_IsIncrClassConstructor(ValRef$$get_Deref(x$$493));
}

function ValRef$$get_IsIncrClassGeneratedMember(x$$494) {
  return Val$$get_IsIncrClassGeneratedMember(ValRef$$get_Deref(x$$494));
}

function ValRef$$get_RecursiveValInfo(x$$495) {
  return Val$$get_RecursiveValInfo(ValRef$$get_Deref(x$$495));
}

function ValRef$$get_BaseOrThisInfo(x$$496) {
  return Val$$get_BaseOrThisInfo(ValRef$$get_Deref(x$$496));
}

function ValRef$$get_IsTypeFunction(x$$497) {
  return Val$$get_IsTypeFunction(ValRef$$get_Deref(x$$497));
}

function ValRef$$get_ValReprInfo(x$$498) {
  return Val$$get_ValReprInfo(ValRef$$get_Deref(x$$498));
}

function ValRef$$get_InlineInfo(x$$499) {
  return Val$$get_InlineInfo(ValRef$$get_Deref(x$$499));
}

function ValRef$$get_MustInline(x$$500) {
  return Val$$get_MustInline(ValRef$$get_Deref(x$$500));
}

function ValRef$$get_IsCompilerGenerated(x$$501) {
  return Val$$get_IsCompilerGenerated(ValRef$$get_Deref(x$$501));
}

function ValRef$$get_Attribs(x$$502) {
  return Val$$get_Attribs(ValRef$$get_Deref(x$$502));
}

function ValRef$$get_XmlDoc(x$$503) {
  return Val$$get_XmlDoc(ValRef$$get_Deref(x$$503));
}

function ValRef$$get_XmlDocSig(x$$504) {
  return Val$$get_XmlDocSig(ValRef$$get_Deref(x$$504));
}

function ValRef$$get_TopValDeclaringEntity(x$$505) {
  return Val$$get_TopValDeclaringEntity(ValRef$$get_Deref(x$$505));
}

function ValRef$$get_HasDeclaringEntity(x$$506) {
  return Val$$get_HasDeclaringEntity(ValRef$$get_Deref(x$$506));
}

function ValRef$$get_MemberApparentEntity(x$$507) {
  return Val$$get_MemberApparentEntity(ValRef$$get_Deref(x$$507));
}

function ValRef$$get_NumObjArgs(x$$508) {
  return Val$$get_NumObjArgs(ValRef$$get_Deref(x$$508));
}

function ValRef$$get_DebugText(x$$509) {
  return x$$509.toString();
}

ValRef.prototype.toString = function () {
  const x$$510 = this;
  return ValRef$$get_IsLocalRef(x$$510) ? Val$$get_DisplayName(ValRef$$get_ResolvedTarget(x$$510)) : x$$510.nlr.toString();
};

function UnionCaseRef$$get_TyconRef(x$$511) {
  const tcref$$2 = x$$511.fields[0];
  return tcref$$2;
}

function UnionCaseRef$$get_CaseName(x$$512) {
  const nm$$9 = x$$512.fields[1];
  return nm$$9;
}

function UnionCaseRef$$get_Tycon(x$$513) {
  return EntityRef$$get_Deref(UnionCaseRef$$get_TyconRef(x$$513));
}

function UnionCaseRef$$get_UnionCase(x$$514) {
  const matchValue$$144 = EntityRef$$GetUnionCaseByName$$Z721C83C5(UnionCaseRef$$get_TyconRef(x$$514), UnionCaseRef$$get_CaseName(x$$514));

  if (matchValue$$144 == null) {
    return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError((0, _String.toText)((0, _String.printf)("union case %s not found in type %s"))(UnionCaseRef$$get_CaseName(x$$514))(EntityRef$$get_LogicalName(UnionCaseRef$$get_TyconRef(x$$514))), EntityRef$$get_Range(UnionCaseRef$$get_TyconRef(x$$514))));
  } else {
    const res$$14 = matchValue$$144;
    return res$$14;
  }
}

function UnionCaseRef$$get_TryUnionCase(x$$515) {
  const x$$519 = EntityRef$$get_TryDeref(UnionCaseRef$$get_TyconRef(x$$515));

  if (x$$519.tag === 1) {
    return new _illib.ValueOption$00601(1, "ValueNone");
  } else {
    const x$$521 = x$$519.fields[0];
    return function f$$13(tcref$$3) {
      const x$$516 = Entity$$GetUnionCaseByName$$Z721C83C5(tcref$$3, UnionCaseRef$$get_CaseName(x$$515));

      if (x$$516 == null) {
        return new _illib.ValueOption$00601(1, "ValueNone");
      } else {
        const x$$518 = (0, _Option.value)(x$$516);
        return new _illib.ValueOption$00601(0, "ValueSome", x$$518);
      }
    }(x$$521);
  }
}

function UnionCaseRef$$get_Attribs(x$$522) {
  return UnionCaseRef$$get_UnionCase(x$$522).Attribs;
}

function UnionCaseRef$$get_Range(x$$523) {
  return UnionCase$$get_Range(UnionCaseRef$$get_UnionCase(x$$523));
}

function UnionCaseRef$$get_DefinitionRange(x$$524) {
  return UnionCase$$get_DefinitionRange(UnionCaseRef$$get_UnionCase(x$$524));
}

function UnionCaseRef$$get_SigRange(x$$525) {
  return UnionCase$$get_SigRange(UnionCaseRef$$get_UnionCase(x$$525));
}

function UnionCaseRef$$get_Index(x$$526) {
  try {
    return EntityRef$$get_UnionCasesArray(UnionCaseRef$$get_TyconRef(x$$526)).findIndex(function predicate$$12(ucspec) {
      return UnionCase$$get_DisplayName(ucspec) === UnionCaseRef$$get_CaseName(x$$526);
    }) | 0;
  } catch (matchValue$$145) {
    if (false) {
      return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError((0, _String.toText)((0, _String.printf)("union case %s not found in type %s"))(UnionCaseRef$$get_CaseName(x$$526))(EntityRef$$get_LogicalName(UnionCaseRef$$get_TyconRef(x$$526))), EntityRef$$get_Range(UnionCaseRef$$get_TyconRef(x$$526)))) | 0;
    } else {
      throw matchValue$$145;
    }
  }
}

function UnionCaseRef$$get_AllFieldsAsList(x$$527) {
  return TyconRecdFields$$get_AllFieldsAsList(UnionCaseRef$$get_UnionCase(x$$527).FieldTable);
}

function UnionCaseRef$$get_ReturnType(x$$528) {
  return UnionCaseRef$$get_UnionCase(x$$528).ReturnType;
}

function UnionCaseRef$$FieldByIndex$$Z524259A4(x$$529, n$$11) {
  return TyconRecdFields$$FieldByIndex$$Z524259A4(UnionCaseRef$$get_UnionCase(x$$529).FieldTable, n$$11);
}

function UnionCaseRef$$get_DebugText(x$$530) {
  return x$$530.toString();
}

UnionCaseRef.prototype.toString = function () {
  const x$$531 = this;
  return UnionCaseRef$$get_CaseName(x$$531);
};

function RecdFieldRef$$get_TyconRef(x$$532) {
  const tcref$$4 = x$$532.fields[0];
  return tcref$$4;
}

function RecdFieldRef$$get_FieldName(x$$533) {
  const id$$3 = x$$533.fields[1];
  return id$$3;
}

function RecdFieldRef$$get_Tycon(x$$534) {
  return EntityRef$$get_Deref(RecdFieldRef$$get_TyconRef(x$$534));
}

function RecdFieldRef$$get_RecdField(x$$535) {
  const tcref$$5 = x$$535.fields[0];
  const id$$4 = x$$535.fields[1];
  const matchValue$$146 = EntityRef$$GetFieldByName$$Z721C83C5(tcref$$5, id$$4);

  if (matchValue$$146 == null) {
    return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError((0, _String.toText)((0, _String.printf)("field %s not found in type %s"))(id$$4)(EntityRef$$get_LogicalName(tcref$$5)), EntityRef$$get_Range(tcref$$5)));
  } else {
    const res$$15 = matchValue$$146;
    return res$$15;
  }
}

function RecdFieldRef$$get_TryRecdField(x$$536) {
  const x$$540 = EntityRef$$get_TryDeref(RecdFieldRef$$get_TyconRef(x$$536));

  if (x$$540.tag === 1) {
    return new _illib.ValueOption$00601(1, "ValueNone");
  } else {
    const x$$542 = x$$540.fields[0];
    return function f$$15(tcref$$6) {
      const x$$537 = Entity$$GetFieldByName$$Z721C83C5(tcref$$6, RecdFieldRef$$get_FieldName(x$$536));

      if (x$$537 == null) {
        return new _illib.ValueOption$00601(1, "ValueNone");
      } else {
        const x$$539 = (0, _Option.value)(x$$537);
        return new _illib.ValueOption$00601(0, "ValueSome", x$$539);
      }
    }(x$$542);
  }
}

function RecdFieldRef$$get_PropertyAttribs(x$$543) {
  return RecdField$$get_PropertyAttribs(RecdFieldRef$$get_RecdField(x$$543));
}

function RecdFieldRef$$get_Range(x$$544) {
  return RecdField$$get_Range(RecdFieldRef$$get_RecdField(x$$544));
}

function RecdFieldRef$$get_DefinitionRange(x$$545) {
  return RecdField$$get_DefinitionRange(RecdFieldRef$$get_RecdField(x$$545));
}

function RecdFieldRef$$get_SigRange(x$$546) {
  return RecdField$$get_SigRange(RecdFieldRef$$get_RecdField(x$$546));
}

function RecdFieldRef$$get_Index(x$$547) {
  const tcref$$7 = x$$547.fields[0];
  const id$$5 = x$$547.fields[1];

  try {
    return EntityRef$$get_AllFieldsArray(tcref$$7).findIndex(function predicate$$13(rfspec) {
      return RecdField$$get_Name(rfspec) === id$$5;
    }) | 0;
  } catch (matchValue$$147) {
    if (false) {
      return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError((0, _String.toText)((0, _String.printf)("field %s not found in type %s"))(id$$5)(EntityRef$$get_LogicalName(tcref$$7)), EntityRef$$get_Range(tcref$$7))) | 0;
    } else {
      throw matchValue$$147;
    }
  }
}

function RecdFieldRef$$get_DebugText(x$$548) {
  return x$$548.toString();
}

RecdFieldRef.prototype.toString = function () {
  const x$$549 = this;
  return RecdFieldRef$$get_FieldName(x$$549);
};

function TType$$GetAssemblyName(x$$550) {
  switch (x$$550.tag) {
    case 1:
      {
        const tcref$$8 = x$$550.fields[0];
        const _tinst = x$$550.fields[1];
        return (0, _il.ILScopeRef$$get_QualifiedName)(CompilationPath$$get_ILScopeRef(EntityRef$$get_CompilationPath(tcref$$8)));
      }

    case 2:
      {
        const _tupInfo = x$$550.fields[0];
        const _tinst$$1 = x$$550.fields[1];
        return "";
      }

    case 3:
      {
        const _r = x$$550.fields[1];
        const _d = x$$550.fields[0];
        return "";
      }

    case 6:
      {
        const _ms = x$$550.fields[0];
        return "";
      }

    case 5:
      {
        const tp = x$$550.fields[0];

        const _arg2$$2 = Typar$$get_Solution(tp);

        if (_arg2$$2 == null) {
          return "";
        } else {
          const sln$$2 = _arg2$$2;
          return TType$$GetAssemblyName(sln$$2);
        }
      }

    case 4:
      {
        const _uc = x$$550.fields[0];
        const _tinst$$2 = x$$550.fields[1];
        const patternInput$$2 = Entity$$get_ILTyconInfo(UnionCaseRef$$get_Tycon(_uc));
        const scope = patternInput$$2.fields[0];
        const _nesting = patternInput$$2.fields[1];
        const _definition = patternInput$$2.fields[2];
        return (0, _il.ILScopeRef$$get_QualifiedName)(scope);
      }

    default:
      {
        const ty$$6 = x$$550.fields[1];
        const _tps = x$$550.fields[0];
        return TType$$GetAssemblyName(ty$$6);
      }
  }
}

function TType$$get_DebugText(x$$551) {
  return x$$551.toString();
}

TType.prototype.toString = function () {
  var tys, tys$$1;
  const x$$552 = this;

  switch (x$$552.tag) {
    case 1:
      {
        const tinst = x$$552.fields[1];
        const tcref$$9 = x$$552.fields[0];
        return EntityRef$$get_DisplayName(tcref$$9) + (tinst.tail == null ? "" : (tys = tinst, "<" + (0, _String.join)(",", ...(0, _List.map)(function (value) {
          return value.toString();
        }, tys)) + ">"));
      }

    case 2:
      {
        const tupInfo = x$$552.fields[0];
        const tinst$$1 = x$$552.fields[1];
        return (tupInfo.fields[0] ? "struct " : "") + (0, _String.join)(",", ...(0, _List.map)(function (value$$1) {
          return value$$1.toString();
        }, tinst$$1)) + ")";
      }

    case 3:
      {
        const r$$4 = x$$552.fields[1];
        const d = x$$552.fields[0];
        return "(" + d.toString() + " -> " + r$$4.toString() + ")";
      }

    case 4:
      {
        const uc$$9 = x$$552.fields[0];
        const tinst$$2 = x$$552.fields[1];
        return "ucase " + UnionCaseRef$$get_CaseName(uc$$9) + (tinst$$2.tail == null ? "" : (tys$$1 = tinst$$2, "<" + (0, _String.join)(",", ...(0, _List.map)(function (value$$2) {
          return value$$2.toString();
        }, tys$$1)) + ">"));
      }

    case 5:
      {
        const tp$$1 = x$$552.fields[0];
        return Typar$$get_Solution(tp$$1) != null ? Typar$$get_DisplayName(tp$$1) + " (solved)" : Typar$$get_DisplayName(tp$$1);
      }

    case 6:
      {
        const ms = x$$552.fields[0];
        return ms.toString();
      }

    default:
      {
        const ty$$7 = x$$552.fields[1];
        const _tps$$1 = x$$552.fields[0];
        return "forall ...  " + ty$$7.toString();
      }
  }
};

function CcuData$$get_DebugText(x$$553) {
  return x$$553.toString();
}

CcuData.prototype.toString = function () {
  const x$$554 = this;
  return (0, _String.toText)((0, _String.printf)("CcuData(%A)"))(x$$554.FileName);
};

function CcuThunk$$get_Deref(ccu$$4) {
  if (ccu$$4.target == null ? true : ccu$$4.orphanfixup) {
    throw new _ErrorLogger.UnresolvedReferenceNoRange(ccu$$4.name);
  }

  return ccu$$4.target;
}

function CcuThunk$$get_IsUnresolvedReference(ccu$$5) {
  if (ccu$$5.target == null) {
    return true;
  } else {
    return ccu$$5.orphanfixup;
  }
}

function CcuThunk$$EnsureDerefable$$Z6B4C8463(ccu$$6, requiringPath) {
  if (CcuThunk$$get_IsUnresolvedReference(ccu$$6)) {
    const path$$2 = (0, _String.join)(".", ...requiringPath);
    throw new _ErrorLogger.UnresolvedPathReferenceNoRange(ccu$$6.name, path$$2);
  }
}

function CcuThunk$$get_UsesFSharp20PlusQuotations(ccu$$7) {
  return CcuThunk$$get_Deref(ccu$$7).UsesFSharp20PlusQuotations;
}

function CcuThunk$$set_UsesFSharp20PlusQuotations$$Z1FBCCD16(ccu$$8, v$$34) {
  CcuThunk$$get_Deref(ccu$$8).UsesFSharp20PlusQuotations = v$$34;
}

function CcuThunk$$get_AssemblyName(ccu$$9) {
  return ccu$$9.name;
}

function CcuThunk$$get_ILScopeRef(ccu$$10) {
  return CcuThunk$$get_Deref(ccu$$10).ILScopeRef;
}

function CcuThunk$$get_Stamp(ccu$$11) {
  return CcuThunk$$get_Deref(ccu$$11).Stamp;
}

function CcuThunk$$get_FileName(ccu$$12) {
  return CcuThunk$$get_Deref(ccu$$12).FileName;
}

function CcuThunk$$TryGetILModuleDef(ccu$$13) {
  return CcuThunk$$get_Deref(ccu$$13).TryGetILModuleDef();
}

function CcuThunk$$get_QualifiedName(ccu$$14) {
  return CcuThunk$$get_Deref(ccu$$14).QualifiedName;
}

function CcuThunk$$get_SourceCodeDirectory(ccu$$15) {
  return CcuThunk$$get_Deref(ccu$$15).SourceCodeDirectory;
}

function CcuThunk$$get_IsFSharp(ccu$$16) {
  return CcuThunk$$get_Deref(ccu$$16).IsFSharp;
}

function CcuThunk$$get_Contents(ccu$$17) {
  return CcuThunk$$get_Deref(ccu$$17).Contents;
}

function CcuThunk$$get_TypeForwarders(ccu$$18) {
  return CcuThunk$$get_Deref(ccu$$18).TypeForwarders;
}

function CcuThunk$$get_RootModulesAndNamespaces(ccu$$19) {
  return ModuleOrNamespaceType$$get_ModuleAndNamespaceDefinitions(Entity$$get_ModuleOrNamespaceType(CcuThunk$$get_Contents(ccu$$19)));
}

function CcuThunk$$get_RootTypeAndExceptionDefinitions(ccu$$20) {
  return ModuleOrNamespaceType$$get_TypeAndExceptionDefinitions(Entity$$get_ModuleOrNamespaceType(CcuThunk$$get_Contents(ccu$$20)));
}

function CcuThunk$$$Create$$Z68F5F4C0(nm$$10, x$$555) {
  return new CcuThunk(x$$555, false, nm$$10);
}

function CcuThunk$$$CreateDelayed$$Z721C83C5(nm$$11) {
  return new CcuThunk(null, false, nm$$11);
}

function CcuThunk$$Fixup$$Z7669BDF9(x$$556, avail) {
  if ((0, _Util.equals)(x$$556.target, null)) {} else if (CcuThunk$$get_AssemblyName(x$$556) !== "FSharp.Core") {
    (0, _ErrorLogger.errorR)((0, _FSharp.Operators$$$Failure)("internal error: Fixup: the ccu thunk for assembly " + CcuThunk$$get_AssemblyName(x$$556) + " not delayed!"));
  }

  x$$556.target = (0, _Util.equals)(avail.target, null) ? (0, _ErrorLogger.error)((0, _FSharp.Operators$$$Failure)("internal error: ccu thunk '" + avail.name + "' not fixed up!")) : avail.target;
}

function CcuThunk$$FixupOrphaned(x$$557) {
  if ((0, _Util.equals)(x$$557.target, null)) {
    x$$557.orphanfixup = true;
  } else {
    (0, _ErrorLogger.errorR)((0, _FSharp.Operators$$$Failure)("internal error: FixupOrphaned: the ccu thunk for assembly " + CcuThunk$$get_AssemblyName(x$$557) + " not delayed!"));
  }
}

function CcuThunk$$TryForward$$Z593E6CFA(ccu$$21, nlpath, item$$1) {
  CcuThunk$$EnsureDerefable$$Z6B4C8463(ccu$$21, nlpath);
  const matchValue$$152 = (0, _Map.FSharpMap$$TryFind$$2B595)(CcuThunk$$get_TypeForwarders(ccu$$21), [nlpath, item$$1]);

  if (matchValue$$152 == null) {
    return null;
  } else {
    const entity$$2 = matchValue$$152;
    return entity$$2.Value;
  }
}

function CcuThunk$$MemberSignatureEquality$$7E99D2C0(ccu$$22, ty1, ty2$$1) {
  return CcuThunk$$get_Deref(ccu$$22).MemberSignatureEquality(ty1, ty2$$1);
}

function CcuThunk$$get_DebugText(x$$558) {
  return x$$558.toString();
}

CcuThunk.prototype.toString = function () {
  const ccu$$23 = this;
  return CcuThunk$$get_AssemblyName(ccu$$23);
};

function CcuResolutionResult$$get_DebugText(x$$559) {
  return x$$559.toString();
}

CcuResolutionResult.prototype.toString = function () {
  const x$$560 = this;

  if (x$$560.tag === 1) {
    const s$$1 = x$$560.fields[0];
    return "unresolved " + s$$1;
  } else {
    const ccu$$24 = x$$560.fields[0];
    return ccu$$24.toString();
  }
};

function PickledCcuInfo$$get_DebugText(x$$561) {
  return x$$561.toString();
}

PickledCcuInfo.prototype.toString = function () {
  return "PickledCcuInfo(...)";
};

function AttribKind$$get_DebugText(x$$562) {
  return x$$562.toString();
}

AttribKind.prototype.toString = function () {
  return (0, _String.toText)((0, _String.printf)("AttribKind(...)"));
};

function Attrib$$get_DebugText(x$$564) {
  return x$$564.toString();
}

function Attrib$$get_TyconRef(x$$565) {
  const tcref$$10 = x$$565.fields[0];
  return tcref$$10;
}

Attrib.prototype.toString = function () {
  const x$$566 = this;
  return "attrib" + Attrib$$get_TyconRef(x$$566).toString();
};

function AttribExpr$$get_DebugText(x$$567) {
  return x$$567.toString();
}

AttribExpr.prototype.toString = function () {
  return (0, _String.toText)((0, _String.printf)("AttribExpr(...)"));
};

function AttribNamedArg$$get_DebugText(x$$569) {
  return x$$569.toString();
}

AttribNamedArg.prototype.toString = function () {
  return (0, _String.toText)((0, _String.printf)("AttribNamedArg(...)"));
};

function DecisionTree$$get_DebugText(x$$571) {
  return x$$571.toString();
}

DecisionTree.prototype.toString = function () {
  return (0, _String.toText)((0, _String.printf)("DecisionTree(...)"));
};

function DecisionTreeCase$$get_Discriminator(x$$573) {
  const d$$1 = x$$573.fields[0];
  return d$$1;
}

function DecisionTreeCase$$get_CaseTree(x$$574) {
  const d$$2 = x$$574.fields[1];
  return d$$2;
}

function DecisionTreeCase$$get_DebugText(x$$575) {
  return x$$575.toString();
}

DecisionTreeCase.prototype.toString = function () {
  return (0, _String.toText)((0, _String.printf)("DecisionTreeCase(...)"));
};

function DecisionTreeTest$$get_DebugText(x$$577) {
  return x$$577.toString();
}

DecisionTreeTest.prototype.toString = function () {
  return (0, _String.toText)((0, _String.printf)("DecisionTreeTest(...)"));
};

function DecisionTreeTarget$$get_DebugText(x$$579) {
  return x$$579.toString();
}

DecisionTreeTarget.prototype.toString = function () {
  return (0, _String.toText)((0, _String.printf)("DecisionTreeTarget(...)"));
};

function Binding$$get_Var(x$$581) {
  const v$$35 = x$$581.fields[0];
  return v$$35;
}

function Binding$$get_Expr(x$$582) {
  const e$$2 = x$$582.fields[1];
  return e$$2;
}

function Binding$$get_SequencePointInfo(x$$583) {
  const sp = x$$583.fields[2];
  return sp;
}

function Binding$$get_DebugText(x$$584) {
  return x$$584.toString();
}

Binding.prototype.toString = function () {
  const x$$585 = this;
  return (0, _String.toText)((0, _String.printf)("TBind(%s, ...)"))(Val$$get_CompiledName(Binding$$get_Var(x$$585)));
};

function ActivePatternElemRef$$get_ActivePatternInfo(x$$586) {
  const info$$2 = x$$586.fields[0];
  return info$$2;
}

function ActivePatternElemRef$$get_ActivePatternVal(x$$587) {
  const vref = x$$587.fields[1];
  return vref;
}

function ActivePatternElemRef$$get_CaseIndex(x$$588) {
  const n$$12 = x$$588.fields[2] | 0;
  return n$$12 | 0;
}

function ActivePatternElemRef$$get_DebugText(x$$589) {
  return x$$589.toString();
}

ActivePatternElemRef.prototype.toString = function () {
  return "ActivePatternElemRef(...)";
};

function ValReprInfo$$get_ArgInfos(x$$590) {
  const args = x$$590.fields[1];
  return args;
}

function ValReprInfo$$get_NumCurriedArgs(x$$591) {
  const args$$1 = x$$591.fields[1];
  return (0, _List.length)(args$$1) | 0;
}

function ValReprInfo$$get_NumTypars(x$$592) {
  const n$$13 = x$$592.fields[0];
  return (0, _List.length)(n$$13) | 0;
}

function ValReprInfo$$get_HasNoArgs(x$$593) {
  const n$$14 = x$$593.fields[0];
  const args$$2 = x$$593.fields[1];

  if (n$$14.tail == null) {
    return args$$2.tail == null;
  } else {
    return false;
  }
}

function ValReprInfo$$get_AritiesOfArgs(x$$594) {
  const args$$3 = x$$594.fields[1];
  return (0, _List.map)(_List.length, args$$3);
}

function ValReprInfo$$get_KindsOfTypars(x$$595) {
  const n$$15 = x$$595.fields[0];
  return (0, _List.map)(function mapping$$8(_arg5) {
    const k$$3 = _arg5.fields[1];
    return k$$3;
  }, n$$15);
}

function ValReprInfo$$get_TotalArgCount(x$$596) {
  const args$$4 = x$$596.fields[1];

  const loop = function loop(args$$5, acc$$2) {
    loop: while (true) {
      if (args$$5.tail != null) {
        if (args$$5.head.tail != null) {
          if (args$$5.head.tail.tail != null) {
            const $var$$54 = args$$5.tail;
            acc$$2 = acc$$2 + (0, _List.length)(args$$5.head.tail.tail) + 2;
            args$$5 = $var$$54;
            continue loop;
          } else {
            args$$5 = args$$5.tail;
            acc$$2 = acc$$2 + 1;
            continue loop;
          }
        } else {
          args$$5 = args$$5.tail;
          acc$$2 = acc$$2;
          continue loop;
        }
      } else {
        return acc$$2 | 0;
      }
    }
  };

  return loop(args$$4, 0) | 0;
}

function ValReprInfo$$get_DebugText(x$$597) {
  return x$$597.toString();
}

ValReprInfo.prototype.toString = function () {
  return "ValReprInfo(...)";
};

function ArgReprInfo$$get_DebugText(x$$598) {
  return x$$598.toString();
}

ArgReprInfo.prototype.toString = function () {
  return "ArgReprInfo(...)";
};

function ObjExprMethod$$get_Id(x$$599) {
  const slotsig$$1 = x$$599.fields[0];
  const m$$13 = x$$599.fields[5];
  return (0, _ast.mkSynId)(m$$13, SlotSig$$get_Name(slotsig$$1));
}

function ObjExprMethod$$get_DebugText(x$$600) {
  return x$$600.toString();
}

ObjExprMethod.prototype.toString = function () {
  var copyOfStruct$$1;
  const x$$601 = this;
  return (0, _String.toText)((0, _String.printf)("TObjExprMethod(%s, ...)"))((copyOfStruct$$1 = ObjExprMethod$$get_Id(x$$601), (0, _ast.Ident$$get_idText)(copyOfStruct$$1)));
};

function SlotSig$$get_Name(ss) {
  const nm$$12 = ss.fields[0];
  return nm$$12;
}

function SlotSig$$get_ImplementedType(ss$$1) {
  const ty$$8 = ss$$1.fields[1];
  return ty$$8;
}

function SlotSig$$get_ClassTypars(ss$$2) {
  const ctps = ss$$2.fields[2];
  return ctps;
}

function SlotSig$$get_MethodTypars(ss$$3) {
  const mtps = ss$$3.fields[3];
  return mtps;
}

function SlotSig$$get_FormalParams(ss$$4) {
  const ps = ss$$4.fields[4];
  return ps;
}

function SlotSig$$get_FormalReturnType(ss$$5) {
  const rt = ss$$5.fields[5];
  return rt;
}

function SlotSig$$get_DebugText(x$$602) {
  return x$$602.toString();
}

SlotSig.prototype.toString = function () {
  const ss$$6 = this;
  return (0, _String.toText)((0, _String.printf)("TSlotSig(%s, ...)"))(SlotSig$$get_Name(ss$$6));
};

function SlotParam$$get_Type(x$$603) {
  const ty$$9 = x$$603.fields[1];
  return ty$$9;
}

function SlotParam$$get_DebugText(x$$604) {
  return x$$604.toString();
}

SlotParam.prototype.toString = function () {
  return "TSlotParam(...)";
};

function ModuleOrNamespaceExprWithSig$$get_Type(x$$606) {
  const mtyp$$22 = x$$606.fields[0];
  return mtyp$$22;
}

function ModuleOrNamespaceExprWithSig$$get_DebugText(x$$607) {
  return x$$607.toString();
}

ModuleOrNamespaceExprWithSig.prototype.toString = function () {
  return "ModuleOrNamespaceExprWithSig(...)";
};

function ModuleOrNamespaceExpr$$get_DebugText(x$$609) {
  return x$$609.toString();
}

ModuleOrNamespaceExpr.prototype.toString = function () {
  return "ModuleOrNamespaceExpr(...)";
};

function ModuleOrNamespaceBinding$$get_DebugText(x$$611) {
  return x$$611.toString();
}

ModuleOrNamespaceBinding.prototype.toString = function () {
  return "ModuleOrNamespaceBinding(...)";
};

function TypedImplFile$$get_DebugText(x$$612) {
  return x$$612.toString();
}

TypedImplFile.prototype.toString = function () {
  return "TImplFile(...)";
};

function TypedAssemblyAfterOptimization$$get_DebugText(x$$614) {
  return x$$614.toString();
}

TypedAssemblyAfterOptimization.prototype.toString = function () {
  return "TypedAssemblyAfterOptimization(...)";
};

function FreeTyvars$$get_DebugText(x$$616) {
  return x$$616.toString();
}

FreeTyvars.prototype.toString = function () {
  return "FreeTyvars(...)";
};

function FreeVars$$get_DebugText(x$$618) {
  return x$$618.toString();
}

FreeVars.prototype.toString = function () {
  return "FreeVars(...)";
};

function CompiledTypeRepr$$get_DebugText(x$$620) {
  return x$$620.toString();
}

CompiledTypeRepr.prototype.toString = function () {
  return "CompiledTypeRepr(...)";
};

const ValReprInfoModule$$$unnamedTopArg1 = new ArgReprInfo((0, _Types.L)(), null);
exports.ValReprInfoModule$$$unnamedTopArg1 = ValReprInfoModule$$$unnamedTopArg1;
const ValReprInfoModule$$$unnamedTopArg = (0, _Types.L)(ValReprInfoModule$$$unnamedTopArg1, (0, _Types.L)());
exports.ValReprInfoModule$$$unnamedTopArg = ValReprInfoModule$$$unnamedTopArg;
const ValReprInfoModule$$$unitArgData = (0, _Types.L)((0, _Types.L)(), (0, _Types.L)());
exports.ValReprInfoModule$$$unitArgData = ValReprInfoModule$$$unitArgData;
const ValReprInfoModule$$$unnamedRetVal = new ArgReprInfo((0, _Types.L)(), null);
exports.ValReprInfoModule$$$unnamedRetVal = ValReprInfoModule$$$unnamedRetVal;
const ValReprInfoModule$$$selfMetadata = ValReprInfoModule$$$unnamedTopArg;
exports.ValReprInfoModule$$$selfMetadata = ValReprInfoModule$$$selfMetadata;
const ValReprInfoModule$$$emptyValData = new ValReprInfo(0, "ValReprInfo", (0, _Types.L)(), (0, _Types.L)(), ValReprInfoModule$$$unnamedRetVal);
exports.ValReprInfoModule$$$emptyValData = ValReprInfoModule$$$emptyValData;

function ValReprInfoModule$$$InferTyparInfo(tps$$3) {
  return (0, _List.map)(function mapping$$9(tp$$2) {
    return new TyparReprInfo(0, "TyparReprInfo", Typar$$get_Id(tp$$2), Typar$$get_Kind(tp$$2));
  }, tps$$3);
}

function ValReprInfoModule$$$InferArgReprInfo(v$$36) {
  return new ArgReprInfo((0, _Types.L)(), Val$$get_Id(v$$36));
}

function ValReprInfoModule$$$InferArgReprInfos(vs) {
  return new ValReprInfo(0, "ValReprInfo", (0, _Types.L)(), (0, _illib.List$$$mapSquared)(ValReprInfoModule$$$InferArgReprInfo, vs), ValReprInfoModule$$$unnamedRetVal);
}

function ValReprInfoModule$$$HasNoArgs(_arg1$$3) {
  const n$$16 = _arg1$$3.fields[0];
  const args$$6 = _arg1$$3.fields[1];

  if (n$$16.tail == null) {
    return args$$6.tail == null;
  } else {
    return false;
  }
}

function typeOfVal(v$$38) {
  return Val$$get_Type(v$$38);
}

function typesOfVals(v$$39) {
  return (0, _List.map)(function mapping$$10(v$$40) {
    return Val$$get_Type(v$$40);
  }, v$$39);
}

function nameOfVal(v$$41) {
  return Val$$get_LogicalName(v$$41);
}

function arityOfVal(v$$42) {
  const matchValue$$153 = Val$$get_ValReprInfo(v$$42);

  if (matchValue$$153 != null) {
    const arities = matchValue$$153;
    return arities;
  } else {
    return ValReprInfoModule$$$emptyValData;
  }
}

const tupInfoRef = new TupInfo(0, "Const", false);
exports.tupInfoRef = tupInfoRef;
const tupInfoStruct = new TupInfo(0, "Const", true);
exports.tupInfoStruct = tupInfoStruct;
const structnessDefault = false;
exports.structnessDefault = structnessDefault;

function mkRawRefTupleTy(tys$$2) {
  return new TType(2, "TType_tuple", tupInfoRef, tys$$2);
}

function mkRawStructTupleTy(tys$$3) {
  return new TType(2, "TType_tuple", tupInfoStruct, tys$$3);
}

function mapTImplFile(f$$17, _arg1$$4) {
  const pragmas = _arg1$$4.fields[1];
  const moduleExpr = _arg1$$4.fields[2];
  const isScript = _arg1$$4.fields[4];
  const hasExplicitEntryPoint = _arg1$$4.fields[3];
  const fragName = _arg1$$4.fields[0];
  return new TypedImplFile(0, "TImplFile", fragName, pragmas, f$$17(moduleExpr), hasExplicitEntryPoint, isScript);
}

function mapAccImplFile(f$$18, z, _arg1$$5) {
  const pragmas$$1 = _arg1$$5.fields[1];
  const moduleExpr$$1 = _arg1$$5.fields[2];
  const isScript$$1 = _arg1$$5.fields[4];
  const hasExplicitEntryPoint$$1 = _arg1$$5.fields[3];
  const fragName$$1 = _arg1$$5.fields[0];
  const patternInput$$3 = f$$18(z, moduleExpr$$1);
  return [new TypedImplFile(0, "TImplFile", fragName$$1, pragmas$$1, patternInput$$3[0], hasExplicitEntryPoint$$1, isScript$$1), patternInput$$3[1]];
}

function foldTImplFile(f$$19, z$$2, _arg1$$6) {
  const moduleExpr$$3 = _arg1$$6.fields[2];
  return f$$19(z$$2, moduleExpr$$3);
}

function typarEq(lv1, lv2) {
  return (0, _Long.equals)(Typar$$get_Stamp(lv1), Typar$$get_Stamp(lv2));
}

function typarRefEq(tp1, tp2) {
  return tp1 === tp2;
}

function valEq(lv1$$1, lv2$$1) {
  return lv1$$1 === lv2$$1;
}

function ccuEq(mv1, mv2) {
  if (mv1 === mv2) {
    return true;
  } else if (CcuThunk$$get_IsUnresolvedReference(mv1) ? true : CcuThunk$$get_IsUnresolvedReference(mv2)) {
    return CcuThunk$$get_AssemblyName(mv1) === CcuThunk$$get_AssemblyName(mv2);
  } else {
    return CcuThunk$$get_Contents(mv1) === CcuThunk$$get_Contents(mv2);
  }
}

function $007CValDeref$007C(vr$$2) {
  return ValRef$$get_Deref(vr$$2);
}

function mkRecdFieldRef(tcref$$11, f$$20) {
  return new RecdFieldRef(0, "RFRef", tcref$$11, f$$20);
}

function mkUnionCaseRef(tcref$$12, c) {
  return new UnionCaseRef(0, "UCRef", tcref$$12, c);
}

function ERefLocal(x$$626) {
  return new EntityRef(x$$626, null);
}

function ERefNonLocal(x$$627) {
  return new EntityRef(null, x$$627);
}

function ERefNonLocalPreResolved(x$$628, xref) {
  return new EntityRef(x$$628, xref);
}

function $007CERefLocal$007CERefNonLocal$007C(x$$629) {
  if ((0, _Util.equals)(x$$629.nlr, null)) {
    return new _Option.Choice(0, "Choice1Of2", x$$629.binding);
  } else {
    return new _Option.Choice(1, "Choice2Of2", x$$629.nlr);
  }
}

function mkLocalTyconRef(x$$630) {
  return ERefLocal(x$$630);
}

function mkNonLocalEntityRef(ccu$$25, mp) {
  return new NonLocalEntityRef(0, "NonLocalEntityRef", ccu$$25, mp);
}

function mkNestedNonLocalEntityRef(nleref$$9, id$$6) {
  return mkNonLocalEntityRef(NonLocalEntityRef$$get_Ccu(nleref$$9), (0, _Array.append)(NonLocalEntityRef$$get_Path(nleref$$9), [id$$6], Array));
}

function mkNonLocalTyconRef(nleref$$10, id$$7) {
  return ERefNonLocal(mkNestedNonLocalEntityRef(nleref$$10, id$$7));
}

function mkNonLocalTyconRefPreResolved(x$$631, nleref$$11, id$$8) {
  return ERefNonLocalPreResolved(x$$631, mkNestedNonLocalEntityRef(nleref$$11, id$$8));
}

function EntityRef$$NestedTyconRef$$Z52A308BB(tcref$$13, x$$632) {
  const activePatternResult26510 = $007CERefLocal$007CERefNonLocal$007C(tcref$$13);

  if (activePatternResult26510.tag === 1) {
    return mkNonLocalTyconRefPreResolved(x$$632, activePatternResult26510.fields[0], Entity$$get_LogicalName(x$$632));
  } else {
    return mkLocalTyconRef(x$$632);
  }
}

function EntityRef$$RecdFieldRefInNestedTycon(tcref$$14, tycon$$2, id$$9) {
  return new RecdFieldRef(0, "RFRef", EntityRef$$NestedTyconRef$$Z52A308BB(tcref$$14, tycon$$2), (0, _ast.Ident$$get_idText)(id$$9));
}

function mkModuleUnionCaseRef(modref, tycon$$3, uc$$10) {
  return EntityRef$$MakeNestedUnionCaseRef$$Z32D482E7(EntityRef$$NestedTyconRef$$Z52A308BB(modref, tycon$$3), uc$$10);
}

function VRefLocal(x$$633) {
  return new ValRef(x$$633, null);
}

function VRefNonLocal(x$$634) {
  return new ValRef(null, x$$634);
}

function VRefNonLocalPreResolved(x$$635, xref$$1) {
  return new ValRef(x$$635, xref$$1);
}

function $007CVRefLocal$007CVRefNonLocal$007C(x$$636) {
  if ((0, _Util.equals)(x$$636.nlr, null)) {
    return new _Option.Choice(0, "Choice1Of2", x$$636.binding);
  } else {
    return new _Option.Choice(1, "Choice2Of2", x$$636.nlr);
  }
}

function mkNonLocalValRef(mp$$1, id$$10) {
  return VRefNonLocal(new NonLocalValOrMemberRef(ERefNonLocal(mp$$1), id$$10));
}

function mkNonLocalValRefPreResolved(x$$637, mp$$2, id$$11) {
  return VRefNonLocalPreResolved(x$$637, new NonLocalValOrMemberRef(ERefNonLocal(mp$$2), id$$11));
}

function ccuOfValRef(vref$$1) {
  const activePatternResult26529 = $007CVRefLocal$007CVRefNonLocal$007C(vref$$1);

  if (activePatternResult26529.tag === 1) {
    return NonLocalValOrMemberRef$$get_Ccu(activePatternResult26529.fields[0]);
  } else {
    return null;
  }
}

function ccuOfTyconRef(eref$$1) {
  const activePatternResult26531 = $007CERefLocal$007CERefNonLocal$007C(eref$$1);

  if (activePatternResult26531.tag === 1) {
    return NonLocalEntityRef$$get_Ccu(activePatternResult26531.fields[0]);
  } else {
    return null;
  }
}

function mkTyparTy(tp$$3) {
  if (Typar$$get_Kind(tp$$3).tag === 1) {
    return new TType(6, "TType_measure", new Measure(0, "Var", tp$$3));
  } else {
    return Typar$$get_AsType(tp$$3);
  }
}

function copyTypar(tp$$4) {
  const optData$$39 = (0, _Option.defaultArg)(tp$$4.typar_opt_data, null, function mapping$$11(tg$$7) {
    return new TyparOptionalData(tg$$7.typar_il_name, tg$$7.typar_xmldoc, tg$$7.typar_constraints, tg$$7.typar_attribs);
  });
  return Typar$$$New$$ZB4A2630(new Typar(tp$$4.typar_id, tp$$4.typar_flags, newStamp(), tp$$4.typar_solution, null, optData$$39));
}

function copyTypars(tps$$4) {
  return (0, _List.map)(copyTypar, tps$$4);
}

function tryShortcutSolvedUnitPar(canShortcut, r$$5) {
  if ((0, _Util.equals)(Typar$$get_Kind(r$$5), new TyparKind(0, "Type"))) {
    throw new Error("tryShortcutSolvedUnitPar: kind=type");
  }

  const matchValue$$157 = Typar$$get_Solution(r$$5);
  var $target$$63, unt;

  if (matchValue$$157 != null) {
    if (matchValue$$157.tag === 6) {
      $target$$63 = 0;
      unt = matchValue$$157.fields[0];
    } else {
      $target$$63 = 1;
    }
  } else {
    $target$$63 = 1;
  }

  switch ($target$$63) {
    case 0:
      {
        if (canShortcut) {
          if (unt.tag === 0) {
            const r2 = unt.fields[0];
            const matchValue$$158 = Typar$$get_Solution(r2);

            if (matchValue$$158 != null) {
              const soln = matchValue$$158;
              r$$5.typar_solution = soln;
            }
          }
        }

        return unt;
      }

    case 1:
      {
        throw new Error("tryShortcutSolvedUnitPar: unsolved");
      }
  }
}

function stripUnitEqnsAux(canShortcut$$1, unt$$1) {
  var r$$6;

  stripUnitEqnsAux: while (true) {
    var $target$$64, r$$7;

    if (unt$$1.tag === 0) {
      if (r$$6 = unt$$1.fields[0], Typar$$get_IsSolved(r$$6)) {
        $target$$64 = 0;
        r$$7 = unt$$1.fields[0];
      } else {
        $target$$64 = 1;
      }
    } else {
      $target$$64 = 1;
    }

    switch ($target$$64) {
      case 0:
        {
          const $var$$65 = canShortcut$$1;
          unt$$1 = tryShortcutSolvedUnitPar(canShortcut$$1, r$$7);
          canShortcut$$1 = $var$$65;
          continue stripUnitEqnsAux;
        }

      case 1:
        {
          return unt$$1;
        }
    }
  }
}

function stripTyparEqnsAux(canShortcut$$2, ty$$10) {
  var r2$$1;

  stripTyparEqnsAux: while (true) {
    switch (ty$$10.tag) {
      case 5:
        {
          const r$$8 = ty$$10.fields[0];
          const matchValue$$159 = Typar$$get_Solution(r$$8);

          if (matchValue$$159 == null) {
            return ty$$10;
          } else {
            const soln$$1 = matchValue$$159;

            if (canShortcut$$2) {
              var $target$$66, r2$$2;

              if (soln$$1.tag === 5) {
                if (r2$$1 = soln$$1.fields[0], Typar$$get_Constraints(r2$$1).tail == null) {
                  $target$$66 = 0;
                  r2$$2 = soln$$1.fields[0];
                } else {
                  $target$$66 = 1;
                }
              } else {
                $target$$66 = 1;
              }

              switch ($target$$66) {
                case 0:
                  {
                    const matchValue$$160 = Typar$$get_Solution(r2$$2);

                    if (matchValue$$160 != null) {
                      const soln2 = matchValue$$160;
                      r$$8.typar_solution = soln2;
                    }

                    break;
                  }
              }
            }

            canShortcut$$2 = canShortcut$$2;
            ty$$10 = soln$$1;
            continue stripTyparEqnsAux;
          }
        }

      case 6:
        {
          const unt$$2 = ty$$10.fields[0];
          return new TType(6, "TType_measure", stripUnitEqnsAux(canShortcut$$2, unt$$2));
        }

      default:
        {
          return ty$$10;
        }
    }
  }
}

function stripTyparEqns(ty$$11) {
  return stripTyparEqnsAux(false, ty$$11);
}

function stripUnitEqns(unt$$3) {
  return stripUnitEqnsAux(false, unt$$3);
}

function mkLocalValRef(v$$43) {
  return VRefLocal(v$$43);
}

function mkLocalModRef(v$$44) {
  return ERefLocal(v$$44);
}

function mkLocalEntityRef(v$$45) {
  return ERefLocal(v$$45);
}

function mkNonLocalCcuRootEntityRef(ccu$$26, x$$638) {
  return mkNonLocalTyconRefPreResolved(x$$638, mkNonLocalEntityRef(ccu$$26, []), Entity$$get_LogicalName(x$$638));
}

function mkNestedValRef(cref, v$$46) {
  const activePatternResult26550 = $007CERefLocal$007CERefNonLocal$007C(cref);

  if (activePatternResult26550.tag === 1) {
    const key$$3 = Val$$GetLinkageFullKey(v$$46);
    return mkNonLocalValRefPreResolved(v$$46, activePatternResult26550.fields[0], key$$3);
  } else {
    return mkLocalValRef(v$$46);
  }
}

function rescopePubPathToParent(viewedCcu, _arg1$$7) {
  const p$$7 = _arg1$$7.fields[0];
  return new NonLocalEntityRef(0, "NonLocalEntityRef", viewedCcu, p$$7.slice(0, p$$7.length - 2 + 1));
}

function rescopePubPath(viewedCcu$$1, _arg1$$8) {
  const p$$8 = _arg1$$8.fields[0];
  return new NonLocalEntityRef(0, "NonLocalEntityRef", viewedCcu$$1, p$$8);
}

function valRefInThisAssembly(compilingFslib, x$$639) {
  if ($007CVRefLocal$007CVRefNonLocal$007C(x$$639).tag === 1) {
    return compilingFslib;
  } else {
    return true;
  }
}

function tyconRefUsesLocalXmlDoc(compilingFslib$$1, x$$640) {
  if ($007CERefLocal$007CERefNonLocal$007C(x$$640).tag === 1) {
    return compilingFslib$$1;
  } else {
    return true;
  }
}

function entityRefInThisAssembly(compilingFslib$$2, x$$641) {
  if ($007CERefLocal$007CERefNonLocal$007C(x$$641).tag === 1) {
    return compilingFslib$$2;
  } else {
    return true;
  }
}

function arrayPathEq(y1, y2) {
  const len1 = y1.length | 0;
  const len2 = y2.length | 0;

  if (len1 === len2) {
    const loop$$1 = function loop$$1(i$$4) {
      loop$$1: while (true) {
        if (i$$4 >= len1) {
          return true;
        } else if (y1[i$$4] === y2[i$$4]) {
          i$$4 = i$$4 + 1;
          continue loop$$1;
        } else {
          return false;
        }
      }
    };

    return loop$$1(0);
  } else {
    return false;
  }
}

function nonLocalRefEq(_arg2$$3, _arg1$$9) {
  const smr1 = _arg2$$3;
  const y1$$1 = smr1.fields[1];
  const x1 = smr1.fields[0];
  const smr2 = _arg1$$9;
  const y2$$1 = smr2.fields[1];
  const x2 = smr2.fields[0];

  if (smr1 === smr2) {
    return true;
  } else if (ccuEq(x1, x2)) {
    return arrayPathEq(y1$$1, y2$$1);
  } else {
    return false;
  }
}

function nonLocalRefDefinitelyNotEq(_arg2$$4, _arg1$$10) {
  const y1$$2 = _arg2$$4.fields[1];
  const y2$$2 = _arg1$$10.fields[1];
  return !arrayPathEq(y1$$2, y2$$2);
}

function pubPathEq(_arg2$$5, _arg1$$11) {
  const path1 = _arg2$$5.fields[0];
  const path2 = _arg1$$11.fields[0];
  return arrayPathEq(path1, path2);
}

function fslibRefEq(nlr1, _arg1$$12) {
  const path2$$1 = _arg1$$12.fields[0];
  return arrayPathEq(NonLocalEntityRef$$get_Path(nlr1), path2$$1);
}

function fslibEntityRefEq(fslibCcu, eref1, eref2) {
  const matchValue$$161 = [eref1, eref2];
  var $target$$67, nlr1$$1, x2$$1, e1, e2;
  const activePatternResult26577 = $007CERefLocal$007CERefNonLocal$007C(matchValue$$161[0]);

  if (activePatternResult26577.tag === 0) {
    const activePatternResult26579 = $007CERefLocal$007CERefNonLocal$007C(matchValue$$161[1]);

    if (activePatternResult26579.tag === 0) {
      $target$$67 = 1;
      e1 = activePatternResult26577.fields[0];
      e2 = activePatternResult26579.fields[0];
    } else {
      $target$$67 = 0;
      nlr1$$1 = activePatternResult26579.fields[0];
      x2$$1 = activePatternResult26577.fields[0];
    }
  } else {
    const activePatternResult26578 = $007CERefLocal$007CERefNonLocal$007C(matchValue$$161[1]);

    if (activePatternResult26578.tag === 0) {
      $target$$67 = 0;
      nlr1$$1 = activePatternResult26577.fields[0];
      x2$$1 = activePatternResult26578.fields[0];
    } else {
      $target$$67 = 2;
    }
  }

  switch ($target$$67) {
    case 0:
      {
        if (ccuEq(NonLocalEntityRef$$get_Ccu(nlr1$$1), fslibCcu)) {
          const matchValue$$162 = Entity$$get_PublicPath(x2$$1);

          if (matchValue$$162 == null) {
            return false;
          } else {
            const pp2 = matchValue$$162;
            return fslibRefEq(nlr1$$1, pp2);
          }
        } else {
          return false;
        }
      }

    case 1:
      {
        const matchValue$$163 = [Entity$$get_PublicPath(e1), Entity$$get_PublicPath(e2)];
        var $target$$68, pp1, pp2$$1;

        if (matchValue$$163[0] != null) {
          if (matchValue$$163[1] != null) {
            $target$$68 = 0;
            pp1 = matchValue$$163[0];
            pp2$$1 = matchValue$$163[1];
          } else {
            $target$$68 = 1;
          }
        } else {
          $target$$68 = 1;
        }

        switch ($target$$68) {
          case 0:
            {
              return pubPathEq(pp1, pp2$$1);
            }

          case 1:
            {
              return false;
            }
        }
      }

    case 2:
      {
        return false;
      }
  }
}

function fslibValRefEq(fslibCcu$$1, vref1, vref2) {
  const matchValue$$164 = [vref1, vref2];
  var $target$$69, nlr1$$2, x2$$2, e1$$1, e2$$1;
  const activePatternResult26583 = $007CVRefLocal$007CVRefNonLocal$007C(matchValue$$164[0]);

  if (activePatternResult26583.tag === 0) {
    const activePatternResult26585 = $007CVRefLocal$007CVRefNonLocal$007C(matchValue$$164[1]);

    if (activePatternResult26585.tag === 0) {
      $target$$69 = 1;
      e1$$1 = activePatternResult26583.fields[0];
      e2$$1 = activePatternResult26585.fields[0];
    } else {
      $target$$69 = 0;
      nlr1$$2 = activePatternResult26585.fields[0];
      x2$$2 = activePatternResult26583.fields[0];
    }
  } else {
    const activePatternResult26584 = $007CVRefLocal$007CVRefNonLocal$007C(matchValue$$164[1]);

    if (activePatternResult26584.tag === 0) {
      $target$$69 = 0;
      nlr1$$2 = activePatternResult26583.fields[0];
      x2$$2 = activePatternResult26584.fields[0];
    } else {
      $target$$69 = 2;
    }
  }

  switch ($target$$69) {
    case 0:
      {
        if (ccuEq(NonLocalValOrMemberRef$$get_Ccu(nlr1$$2), fslibCcu$$1)) {
          const matchValue$$165 = Val$$get_PublicPath(x2$$2);

          if (matchValue$$165 == null) {
            return false;
          } else {
            const pp2$$2 = matchValue$$165.fields[0];
            const nm2 = matchValue$$165.fields[1];

            if ((0, _Util.equals)(ValLinkageFullKey$$get_PartialKey(nlr1$$2.ItemKey), ValLinkageFullKey$$get_PartialKey(nm2))) {
              return fslibRefEq(nlr1$$2.EnclosingEntity.nlr, pp2$$2);
            } else {
              return false;
            }
          }
        } else {
          return false;
        }
      }

    case 1:
      {
        const matchValue$$166 = [Val$$get_PublicPath(e1$$1), Val$$get_PublicPath(e2$$1)];
        var $target$$70, nm1, nm2$$1, pp1$$1, pp2$$3;

        if (matchValue$$166[0] != null) {
          if (matchValue$$166[1] != null) {
            $target$$70 = 0;
            nm1 = matchValue$$166[0].fields[1];
            nm2$$1 = matchValue$$166[1].fields[1];
            pp1$$1 = matchValue$$166[0].fields[0];
            pp2$$3 = matchValue$$166[1].fields[0];
          } else {
            $target$$70 = 1;
          }
        } else {
          $target$$70 = 1;
        }

        switch ($target$$70) {
          case 0:
            {
              if (pubPathEq(pp1$$1, pp2$$3)) {
                return (0, _Util.equals)(nm1, nm2$$1);
              } else {
                return false;
              }
            }

          case 1:
            {
              return false;
            }
        }
      }

    case 2:
      {
        return false;
      }
  }
}

function primEntityRefEq(compilingFslib$$3, fslibCcu$$2, x$$643, y$$5) {
  var v1$$3, v2$$3;

  if (x$$643 === y$$5) {
    return true;
  } else if ((EntityRef$$get_IsResolved(x$$643) ? EntityRef$$get_IsResolved(y$$5) : false) ? !compilingFslib$$3 : false) {
    return EntityRef$$get_ResolvedTarget(x$$643) === EntityRef$$get_ResolvedTarget(y$$5);
  } else if ((!EntityRef$$get_IsLocalRef(x$$643) ? !EntityRef$$get_IsLocalRef(y$$5) : false) ? nonLocalRefEq(x$$643.nlr, y$$5.nlr) ? true : !nonLocalRefDefinitelyNotEq(x$$643.nlr, y$$5.nlr) ? (v1$$3 = EntityRef$$get_TryDeref(x$$643), (v2$$3 = EntityRef$$get_TryDeref(y$$5), ((0, _illib.ValueOption$00601$$get_IsSome)(v1$$3) ? (0, _illib.ValueOption$00601$$get_IsSome)(v2$$3) : false) ? (0, _illib.ValueOption$00601$$get_Value)(v1$$3) === (0, _illib.ValueOption$00601$$get_Value)(v2$$3) : false)) : false : false) {
    return true;
  } else if (compilingFslib$$3) {
    return fslibEntityRefEq(fslibCcu$$2, x$$643, y$$5);
  } else {
    return false;
  }
}

function primUnionCaseRefEq(compilingFslib$$4, fslibCcu$$3, _arg2$$6, _arg1$$13) {
  const uc1 = _arg2$$6;
  const tcr1 = uc1.fields[0];
  const c1 = uc1.fields[1];
  const uc2 = _arg1$$13;
  const tcr2 = uc2.fields[0];
  const c2 = uc2.fields[1];

  if (uc1 === uc2) {
    return true;
  } else if (primEntityRefEq(compilingFslib$$4, fslibCcu$$3, tcr1, tcr2)) {
    return c1 === c2;
  } else {
    return false;
  }
}

function primValRefEq(compilingFslib$$5, fslibCcu$$4, x$$648, y$$10) {
  var v1$$4, v2$$4;

  if (x$$648 === y$$10) {
    return true;
  } else if (((ValRef$$get_IsResolved(x$$648) ? ValRef$$get_IsResolved(y$$10) : false) ? ValRef$$get_ResolvedTarget(x$$648) === ValRef$$get_ResolvedTarget(y$$10) : false) ? true : (ValRef$$get_IsLocalRef(x$$648) ? ValRef$$get_IsLocalRef(y$$10) : false) ? valEq(ValRef$$get_PrivateTarget(x$$648), ValRef$$get_PrivateTarget(y$$10)) : false) {
    return true;
  } else if (v1$$4 = ValRef$$get_TryDeref(x$$648), (v2$$4 = ValRef$$get_TryDeref(y$$10), ((0, _illib.ValueOption$00601$$get_IsSome)(v1$$4) ? (0, _illib.ValueOption$00601$$get_IsSome)(v2$$4) : false) ? (0, _illib.ValueOption$00601$$get_Value)(v1$$4) === (0, _illib.ValueOption$00601$$get_Value)(v2$$4) : false)) {
    return true;
  } else if (compilingFslib$$5) {
    return fslibValRefEq(fslibCcu$$4, x$$648, y$$10);
  } else {
    return false;
  }
}

function fullCompPathOfModuleOrNamespace(m$$14) {
  const patternInput$$4 = Entity$$get_CompilationPath(m$$14);
  const scoref$$1 = patternInput$$4.fields[0];
  const cpath$$2 = patternInput$$4.fields[1];
  return new CompilationPath(0, "CompPath", scoref$$1, (0, _List.append)(cpath$$2, (0, _Types.L)([Entity$$get_LogicalName(m$$14), ModuleOrNamespaceType$$get_ModuleOrNamespaceKind(Entity$$get_ModuleOrNamespaceType(m$$14))], (0, _Types.L)())));
}

function canAccessFromOneOf(cpaths, cpathTest) {
  return (0, _List.exists)(function predicate$$14(cpath$$3) {
    const scoref1 = cpath$$3.fields[0];
    const cpath1 = cpath$$3.fields[1];
    const scoref2 = cpathTest.fields[0];
    const cpath2 = cpathTest.fields[1];

    const loop$$2 = function loop$$2(p1, p2) {
      loop$$2: while (true) {
        const matchValue$$167 = [p1, p2];

        if (matchValue$$167[0].tail == null) {
          return true;
        } else if (matchValue$$167[1].tail != null) {
          if ((0, _Util.equals)(matchValue$$167[0].head[0], matchValue$$167[1].head[0]) ? (0, _Util.equals)(matchValue$$167[0].head[1], matchValue$$167[1].head[1]) : false) {
            p1 = matchValue$$167[0].tail;
            p2 = matchValue$$167[1].tail;
            continue loop$$2;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    };

    if (loop$$2(cpath1, cpath2)) {
      return (0, _Util.equals)(scoref1, scoref2);
    } else {
      return false;
    }
  }, cpaths);
}

function canAccessFrom(_arg1$$15, cpath$$4) {
  const x$$652 = _arg1$$15.fields[0];
  return (0, _List.forAll)(function predicate$$15(cpath1$$1) {
    const scoref1$$1 = cpath1$$1.fields[0];
    const cpath1$$2 = cpath1$$1.fields[1];
    const scoref2$$1 = cpath$$4.fields[0];
    const cpath2$$1 = cpath$$4.fields[1];

    const loop$$3 = function loop$$3(p1$$1, p2$$1) {
      loop$$3: while (true) {
        const matchValue$$168 = [p1$$1, p2$$1];

        if (matchValue$$168[0].tail == null) {
          return true;
        } else if (matchValue$$168[1].tail != null) {
          if ((0, _Util.equals)(matchValue$$168[0].head[0], matchValue$$168[1].head[0]) ? (0, _Util.equals)(matchValue$$168[0].head[1], matchValue$$168[1].head[1]) : false) {
            p1$$1 = matchValue$$168[0].tail;
            p2$$1 = matchValue$$168[1].tail;
            continue loop$$3;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    };

    if (loop$$3(cpath1$$2, cpath2$$1)) {
      return (0, _Util.equals)(scoref1$$1, scoref2$$1);
    } else {
      return false;
    }
  }, x$$652);
}

function canAccessFromEverywhere(_arg1$$17) {
  const x$$653 = _arg1$$17.fields[0];
  return x$$653.tail == null;
}

function canAccessFromSomewhere(_arg1$$18) {
  return true;
}

function isLessAccessible(_arg2$$9, _arg1$$19) {
  const aa = _arg2$$9.fields[0];
  const bb = _arg1$$19.fields[0];
  return !(0, _List.forAll)(function predicate$$17(a$$1) {
    return (0, _List.exists)(function predicate$$16(b$$15) {
      const scoref1$$2 = a$$1.fields[0];
      const cpath1$$3 = a$$1.fields[1];
      const scoref2$$2 = b$$15.fields[0];
      const cpath2$$2 = b$$15.fields[1];

      const loop$$4 = function loop$$4(p1$$2, p2$$2) {
        loop$$4: while (true) {
          const matchValue$$169 = [p1$$2, p2$$2];

          if (matchValue$$169[0].tail == null) {
            return true;
          } else if (matchValue$$169[1].tail != null) {
            if ((0, _Util.equals)(matchValue$$169[0].head[0], matchValue$$169[1].head[0]) ? (0, _Util.equals)(matchValue$$169[0].head[1], matchValue$$169[1].head[1]) : false) {
              p1$$2 = matchValue$$169[0].tail;
              p2$$2 = matchValue$$169[1].tail;
              continue loop$$4;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      };

      if (loop$$4(cpath1$$3, cpath2$$2)) {
        return (0, _Util.equals)(scoref1$$2, scoref2$$2);
      } else {
        return false;
      }
    }, bb);
  }, aa);
}

function accessSubstPaths(newPath, oldPath, _arg1$$21) {
  const paths = _arg1$$21.fields[0];

  const subst = function subst(cpath$$5) {
    if ((0, _Util.equals)(cpath$$5, oldPath)) {
      return newPath;
    } else {
      return cpath$$5;
    }
  };

  return new Accessibility(0, "TAccess", (0, _List.map)(subst, paths));
}

function compPathOfCcu(ccu$$27) {
  return new CompilationPath(0, "CompPath", CcuThunk$$get_ILScopeRef(ccu$$27), (0, _Types.L)());
}

const taccessPublic = new Accessibility(0, "TAccess", (0, _Types.L)());
exports.taccessPublic = taccessPublic;

function taccessPrivate(accessPath) {
  return new Accessibility(0, "TAccess", (0, _Types.L)(accessPath, (0, _Types.L)()));
}

const compPathInternal = new CompilationPath(0, "CompPath", new _il.ILScopeRef(0, "Local"), (0, _Types.L)());
exports.compPathInternal = compPathInternal;
const taccessInternal = new Accessibility(0, "TAccess", (0, _Types.L)(compPathInternal, (0, _Types.L)()));
exports.taccessInternal = taccessInternal;

function combineAccess(_arg2$$11, _arg1$$22) {
  const a1$$3 = _arg2$$11.fields[0];
  const a2$$3 = _arg1$$22.fields[0];
  return new Accessibility(0, "TAccess", (0, _List.append)(a1$$3, a2$$3));
}

function NewFreeVarsCache() {
  return (0, _lib.newCache)();
}

function MakeUnionCasesTable(ucs) {
  return new TyconUnionCases((0, _Array.ofList)(ucs, Array), (0, _illib.NameMapModule$$$ofKeyedList)(function (uc$$11) {
    return UnionCase$$get_DisplayName(uc$$11);
  }, ucs));
}

function MakeRecdFieldsTable(ucs$$1) {
  return new TyconRecdFields((0, _Array.ofList)(ucs$$1, Array), (0, _illib.NameMapModule$$$ofKeyedList)(function f$$21(rfld) {
    return RecdField$$get_Name(rfld);
  }, ucs$$1));
}

function MakeUnionCases(ucs$$2) {
  return new TyconUnionData(MakeUnionCasesTable(ucs$$2), (0, _lib.newCache)());
}

function MakeUnionRepr(ucs$$3) {
  return new TyconRepresentation(2, "TUnionRepr", MakeUnionCases(ucs$$3));
}

function NewTypar(kind$$3, rigid, _arg1$$23, isFromError$$1, dynamicReq$$1, attribs$$4, eqDep, compDep) {
  const staticReq$$1 = _arg1$$23.fields[1];
  const isCompGen$$3 = _arg1$$23.fields[2];
  const id$$12 = _arg1$$23.fields[0];
  return Typar$$$New$$ZB4A2630(new Typar(id$$12, TyparFlags$$$$002Ector$$Z7882EFDC(kind$$3, rigid, isFromError$$1, isCompGen$$3, staticReq$$1, dynamicReq$$1, eqDep, compDep), newStamp(), null, null, attribs$$4.tail == null ? null : new TyparOptionalData(null, (0, _ast.XmlDoc$$$get_Empty)(), (0, _Types.L)(), attribs$$4)));
}

function NewRigidTypar(nm$$13, m$$15) {
  return NewTypar(new TyparKind(0, "Type"), new TyparRigidity(0, "Rigid"), new _ast.SynTypar(0, "Typar", (0, _ast.mkSynId)(m$$15, nm$$13), new _ast.TyparStaticReq(0, "NoStaticReq"), true), false, new TyparDynamicReq(1, "Yes"), (0, _Types.L)(), false, false);
}

function NewUnionCase(id$$13, nm$$14, tys$$4, rty, attribs$$5, docOption, access$$1) {
  return new UnionCase(MakeRecdFieldsTable(tys$$4), rty, nm$$14, docOption, "", id$$13, null, access$$1, attribs$$5);
}

function NewModuleOrNamespaceType(mkind$$2, tycons$$1, vals$$2) {
  return ModuleOrNamespaceType$$$$002Ector$$Z36FEFB0E(mkind$$2, (0, _QueueList.QueueListModule$$$ofList)(vals$$2), (0, _QueueList.QueueListModule$$$ofList)(tycons$$1));
}

function NewEmptyModuleOrNamespaceType(mkind$$3) {
  return NewModuleOrNamespaceType(mkind$$3, (0, _Types.L)(), (0, _Types.L)());
}

function NewExn(cpath$$6, id$$14, access$$2, repr, attribs$$6, doc) {
  var matchValue$$170, inputRecord$$14;
  return Entity$$$New("exnc", new Entity((0, _illib.LazyWithContext$00602$$$NotLazy$$2B595)((0, _Types.L)()), EntityFlags$$$$002Ector$$Z5A892296(false, false, false, false, false), newStamp(), (0, _ast.Ident$$get_idText)(id$$14), (0, _ast.Ident$$get_idRange)(id$$14), attribs$$6, new TyconRepresentation(6, "TNoRepr"), TyconAugmentation$$$Create(), new MaybeLazy$00601(0, "Strict", NewEmptyModuleOrNamespaceType(new ModuleOrNamespaceKind(1, "ModuleOrType"))), (0, _Option.defaultArg)(cpath$$6, null, function mapping$$12(cp$$1) {
    return CompilationPath$$NestedPublicPath$$31D53C78(cp$$1, id$$14);
  }), cpath$$6, (0, _lib.newCache)(), (matchValue$$170 = [doc, access$$2, repr], (!(0, _Array.equalsWith)(_Util.comparePrimitives, matchValue$$170[0].fields[0], null) ? matchValue$$170[0].fields[0].length === 0 : false) ? matchValue$$170[1].fields[0].tail == null ? matchValue$$170[2].tag === 3 ? null : (inputRecord$$14 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$14.entity_compiled_name, inputRecord$$14.entity_other_range, inputRecord$$14.entity_kind, doc, inputRecord$$14.entity_xmldocsig, inputRecord$$14.entity_tycon_abbrev, access$$2, access$$2, repr)) : (inputRecord$$14 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$14.entity_compiled_name, inputRecord$$14.entity_other_range, inputRecord$$14.entity_kind, doc, inputRecord$$14.entity_xmldocsig, inputRecord$$14.entity_tycon_abbrev, access$$2, access$$2, repr)) : (inputRecord$$14 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$14.entity_compiled_name, inputRecord$$14.entity_other_range, inputRecord$$14.entity_kind, doc, inputRecord$$14.entity_xmldocsig, inputRecord$$14.entity_tycon_abbrev, access$$2, access$$2, repr)))));
}

function NewRecdField(stat, konst, id$$15, nameGenerated, ty$$12, isMutable$$1, isVolatile, pattribs, fattribs, docOption$$1, access$$3, secret) {
  return new RecdField(isMutable$$1, docOption$$1, "", ty$$12, stat, isVolatile, secret, konst, access$$3, pattribs, fattribs, id$$15, nameGenerated, null);
}

function NewTycon(cpath$$7, nm$$15, m$$16, access$$4, reprAccess, kind$$4, typars$$1, docOption$$2, usesPrefixDisplay$$1, preEstablishedHasDefaultCtor$$1, hasSelfReferentialCtor$$1, mtyp$$23) {
  var matchValue$$171, inputRecord$$15;
  const stamp$$1 = newStamp();
  return Entity$$$New("tycon", new Entity(typars$$1, EntityFlags$$$$002Ector$$Z5A892296(usesPrefixDisplay$$1, false, preEstablishedHasDefaultCtor$$1, hasSelfReferentialCtor$$1, false), stamp$$1, nm$$15, m$$16, (0, _Types.L)(), new TyconRepresentation(6, "TNoRepr"), TyconAugmentation$$$Create(), mtyp$$23, (0, _Option.defaultArg)(cpath$$7, null, function mapping$$13(cp$$2) {
    return CompilationPath$$NestedPublicPath$$31D53C78(cp$$2, (0, _ast.mkSynId)(m$$16, nm$$15));
  }), cpath$$7, (0, _lib.newCache)(), (matchValue$$171 = [kind$$4, docOption$$2, reprAccess, access$$4], matchValue$$171[0].tag === 0 ? (!(0, _Array.equalsWith)(_Util.comparePrimitives, matchValue$$171[1].fields[0], null) ? matchValue$$171[1].fields[0].length === 0 : false) ? matchValue$$171[2].fields[0].tail == null ? matchValue$$171[3].fields[0].tail == null ? null : (inputRecord$$15 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$15.entity_compiled_name, inputRecord$$15.entity_other_range, kind$$4, docOption$$2, inputRecord$$15.entity_xmldocsig, inputRecord$$15.entity_tycon_abbrev, reprAccess, access$$4, inputRecord$$15.entity_exn_info)) : (inputRecord$$15 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$15.entity_compiled_name, inputRecord$$15.entity_other_range, kind$$4, docOption$$2, inputRecord$$15.entity_xmldocsig, inputRecord$$15.entity_tycon_abbrev, reprAccess, access$$4, inputRecord$$15.entity_exn_info)) : (inputRecord$$15 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$15.entity_compiled_name, inputRecord$$15.entity_other_range, kind$$4, docOption$$2, inputRecord$$15.entity_xmldocsig, inputRecord$$15.entity_tycon_abbrev, reprAccess, access$$4, inputRecord$$15.entity_exn_info)) : (inputRecord$$15 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$15.entity_compiled_name, inputRecord$$15.entity_other_range, kind$$4, docOption$$2, inputRecord$$15.entity_xmldocsig, inputRecord$$15.entity_tycon_abbrev, reprAccess, access$$4, inputRecord$$15.entity_exn_info)))));
}

function NewILTycon(nlpath$$1, nm$$16, m$$17, tps$$5, scoref$$2, enc, tdef, mtyp$$24) {
  const hasSelfReferentialCtor$$2 = (0, _il.ILTypeDef$$get_IsClass)(tdef) ? !(0, _il.ILScopeRef$$get_IsAssemblyRef)(scoref$$2) ? (0, _il.ILAssemblyRef$$get_Name)((0, _il.ILScopeRef$$get_AssemblyRef)(scoref$$2)) === "mscorlib" : false : false;
  const tycon$$4 = NewTycon(nlpath$$1, nm$$16, m$$17, taccessPublic, taccessPublic, new TyparKind(0, "Type"), tps$$5, (0, _ast.XmlDoc$$$get_Empty)(), true, false, hasSelfReferentialCtor$$2, mtyp$$24);
  tycon$$4.entity_tycon_repr = new TyconRepresentation(3, "TILObjectRepr", new TILObjectReprData(0, "TILObjectReprData", scoref$$2, enc, tdef));
  Entity$$get_TypeContents(tycon$$4).tcaug_closed = true;
  return tycon$$4;
}

const Duplicate = (0, _Types.declare)(function Duplicate(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.Duplicate = Duplicate;
const NameClash = (0, _Types.declare)(function NameClash(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
  this.Data4 = arg5;
  this.Data5 = arg6;
  this.Data6 = arg7;
}, _Types.FSharpException);
exports.NameClash = NameClash;
const FullAbstraction = (0, _Types.declare)(function FullAbstraction(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.FullAbstraction = FullAbstraction;

function NewModuleOrNamespace(cpath$$8, access$$5, id$$16, xml$$1, attribs$$7, mtype$$1) {
  return Construct$$$NewModuleOrNamespace(cpath$$8, access$$5, id$$16, xml$$1, attribs$$7, mtype$$1);
}

function NewVal(logicalName$$1, m$$18, compiledName, ty$$13, isMutable$$2, isCompGen$$4, arity, access$$6, recValInfo$$2, specialRepr, baseOrThis$$1, attribs$$8, inlineInfo$$1, doc$$1, isModuleOrMemberBinding$$1, isExtensionMember$$1, isIncrClassSpecialMember$$1, isTyFunc$$1, allowTypeInst$$1, isGeneratedEventVal$$1, konst$$1, actualParent) {
  var matchValue$$172, inputRecord$$16, v$$47, v$$48;
  const stamp$$2 = newStamp();
  return Val$$$New$$7D0CFEA5(new Val(logicalName$$1, m$$18, ty$$13, stamp$$2, ValFlags$$$$002Ector$$2001ECD3(recValInfo$$2, baseOrThis$$1, isCompGen$$4, inlineInfo$$1, isMutable$$2, isModuleOrMemberBinding$$1, isExtensionMember$$1, isIncrClassSpecialMember$$1, isTyFunc$$1, allowTypeInst$$1, isGeneratedEventVal$$1), (matchValue$$172 = [compiledName, arity, konst$$1, access$$6, doc$$1, specialRepr, actualParent, attribs$$8], matchValue$$172[0] == null ? matchValue$$172[1] == null ? matchValue$$172[2] == null ? matchValue$$172[3].fields[0].tail == null ? (!(0, _Array.equalsWith)(_Util.comparePrimitives, matchValue$$172[4].fields[0], null) ? matchValue$$172[4].fields[0].length === 0 : false) ? matchValue$$172[5] == null ? matchValue$$172[6].tag === 1 ? matchValue$$172[7].tail == null ? null : (inputRecord$$16 = Val$$$get_EmptyValOptData(), new ValOptionalData(compiledName != null ? (v$$47 = compiledName, v$$47 !== logicalName$$1) ? (v$$48 = compiledName, compiledName) : null : null, inputRecord$$16.val_other_range, konst$$1, inputRecord$$16.val_defn, arity, access$$6, doc$$1, specialRepr, actualParent, inputRecord$$16.val_xmldocsig, attribs$$8)) : (inputRecord$$16 = Val$$$get_EmptyValOptData(), new ValOptionalData(compiledName != null ? (v$$47 = compiledName, v$$47 !== logicalName$$1) ? (v$$48 = compiledName, compiledName) : null : null, inputRecord$$16.val_other_range, konst$$1, inputRecord$$16.val_defn, arity, access$$6, doc$$1, specialRepr, actualParent, inputRecord$$16.val_xmldocsig, attribs$$8)) : (inputRecord$$16 = Val$$$get_EmptyValOptData(), new ValOptionalData(compiledName != null ? (v$$47 = compiledName, v$$47 !== logicalName$$1) ? (v$$48 = compiledName, compiledName) : null : null, inputRecord$$16.val_other_range, konst$$1, inputRecord$$16.val_defn, arity, access$$6, doc$$1, specialRepr, actualParent, inputRecord$$16.val_xmldocsig, attribs$$8)) : (inputRecord$$16 = Val$$$get_EmptyValOptData(), new ValOptionalData(compiledName != null ? (v$$47 = compiledName, v$$47 !== logicalName$$1) ? (v$$48 = compiledName, compiledName) : null : null, inputRecord$$16.val_other_range, konst$$1, inputRecord$$16.val_defn, arity, access$$6, doc$$1, specialRepr, actualParent, inputRecord$$16.val_xmldocsig, attribs$$8)) : (inputRecord$$16 = Val$$$get_EmptyValOptData(), new ValOptionalData(compiledName != null ? (v$$47 = compiledName, v$$47 !== logicalName$$1) ? (v$$48 = compiledName, compiledName) : null : null, inputRecord$$16.val_other_range, konst$$1, inputRecord$$16.val_defn, arity, access$$6, doc$$1, specialRepr, actualParent, inputRecord$$16.val_xmldocsig, attribs$$8)) : (inputRecord$$16 = Val$$$get_EmptyValOptData(), new ValOptionalData(compiledName != null ? (v$$47 = compiledName, v$$47 !== logicalName$$1) ? (v$$48 = compiledName, compiledName) : null : null, inputRecord$$16.val_other_range, konst$$1, inputRecord$$16.val_defn, arity, access$$6, doc$$1, specialRepr, actualParent, inputRecord$$16.val_xmldocsig, attribs$$8)) : (inputRecord$$16 = Val$$$get_EmptyValOptData(), new ValOptionalData(compiledName != null ? (v$$47 = compiledName, v$$47 !== logicalName$$1) ? (v$$48 = compiledName, compiledName) : null : null, inputRecord$$16.val_other_range, konst$$1, inputRecord$$16.val_defn, arity, access$$6, doc$$1, specialRepr, actualParent, inputRecord$$16.val_xmldocsig, attribs$$8)) : (inputRecord$$16 = Val$$$get_EmptyValOptData(), new ValOptionalData(compiledName != null ? (v$$47 = compiledName, v$$47 !== logicalName$$1) ? (v$$48 = compiledName, compiledName) : null : null, inputRecord$$16.val_other_range, konst$$1, inputRecord$$16.val_defn, arity, access$$6, doc$$1, specialRepr, actualParent, inputRecord$$16.val_xmldocsig, attribs$$8)))));
}

function NewCcuContents(sref$$2, m$$19, nm$$17, mty) {
  return NewModuleOrNamespace(new CompilationPath(0, "CompPath", sref$$2, (0, _Types.L)()), taccessPublic, (0, _ast.ident)(nm$$17, m$$19), (0, _ast.XmlDoc$$$get_Empty)(), (0, _Types.L)(), new MaybeLazy$00601(0, "Strict", mty));
}

function NewModifiedTycon(f$$22, orig) {
  const data$$4 = new Entity(orig.entity_typars, orig.entity_flags, newStamp(), orig.entity_logical_name, orig.entity_range, orig.entity_attribs, orig.entity_tycon_repr, orig.entity_tycon_tcaug, orig.entity_modul_contents, orig.entity_pubpath, orig.entity_cpath, orig.entity_il_repr_cache, orig.entity_opt_data);
  return Entity$$$New("NewModifiedTycon", f$$22(data$$4));
}

function NewModifiedModuleOrNamespace(f$$23, orig$$1) {
  return NewModifiedTycon(function f$$24(d$$3) {
    return new Entity(d$$3.entity_typars, d$$3.entity_flags, d$$3.entity_stamp, d$$3.entity_logical_name, d$$3.entity_range, d$$3.entity_attribs, d$$3.entity_tycon_repr, d$$3.entity_tycon_tcaug, new MaybeLazy$00601(0, "Strict", f$$23(MaybeLazy$00601$$Force(d$$3.entity_modul_contents))), d$$3.entity_pubpath, d$$3.entity_cpath, d$$3.entity_il_repr_cache, d$$3.entity_opt_data);
  }, orig$$1);
}

function NewModifiedVal(f$$25, orig$$3) {
  const stamp$$3 = newStamp();
  const data$0027 = f$$25(new Val(orig$$3.val_logical_name, orig$$3.val_range, orig$$3.val_type, stamp$$3, orig$$3.val_flags, orig$$3.val_opt_data));
  return Val$$$New$$7D0CFEA5(data$0027);
}

function NewClonedModuleOrNamespace(orig$$4) {
  return NewModifiedModuleOrNamespace(function (mty$$1) {
    return mty$$1;
  }, orig$$4);
}

function NewClonedTycon(orig$$5) {
  return NewModifiedTycon(function (d$$4) {
    return d$$4;
  }, orig$$5);
}

function CombineCcuContentFragments(m$$20, l$$1) {
  const CombineModuleOrNamespaceTypes = function CombineModuleOrNamespaceTypes(path$$3) {
    return function (m$$21) {
      return function (mty1) {
        return function (mty2) {
          const matchValue$$173 = [ModuleOrNamespaceType$$get_ModuleOrNamespaceKind(mty1), ModuleOrNamespaceType$$get_ModuleOrNamespaceKind(mty2)];
          var $target$$77;

          if (matchValue$$173[0].tag === 2) {
            if (matchValue$$173[1].tag === 2) {
              $target$$77 = 0;
            } else {
              $target$$77 = 1;
            }
          } else if (matchValue$$173[1].tag === 2) {
            $target$$77 = 1;
          } else {
            $target$$77 = 2;
          }

          switch ($target$$77) {
            case 0:
              {
                const kind$$5 = ModuleOrNamespaceType$$get_ModuleOrNamespaceKind(mty1);
                const tab1 = ModuleOrNamespaceType$$get_AllEntitiesByLogicalMangledName(mty1);
                const tab2 = ModuleOrNamespaceType$$get_AllEntitiesByLogicalMangledName(mty2);
                const entities$$1 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
                  return (0, _Seq.append)((0, _Seq.collect)(function (e1$$2) {
                    const matchValue$$174 = (0, _Map.FSharpMap$$TryFind$$2B595)(tab2, Entity$$get_LogicalName(e1$$2));

                    if (matchValue$$174 == null) {
                      return (0, _Seq.singleton)(e1$$2);
                    } else {
                      const e2$$2 = matchValue$$174;
                      return (0, _Seq.singleton)(CombineEntites(path$$3)(e1$$2)(e2$$2));
                    }
                  }, ModuleOrNamespaceType$$get_AllEntities(mty1)), (0, _Seq.delay)(function () {
                    return (0, _Seq.collect)(function (e2$$3) {
                      if ((0, _Map.FSharpMap$$TryFind$$2B595)(tab1, Entity$$get_LogicalName(e2$$3)) == null) {
                        return (0, _Seq.singleton)(e2$$3);
                      } else {
                        return (0, _Seq.empty)();
                      }
                    }, ModuleOrNamespaceType$$get_AllEntities(mty2));
                  }));
                }));
                const vals$$3 = (0, _QueueList.QueueListModule$$$append)(ModuleOrNamespaceType$$get_AllValsAndMembers(mty1), ModuleOrNamespaceType$$get_AllValsAndMembers(mty2));
                return ModuleOrNamespaceType$$$$002Ector$$Z36FEFB0E(kind$$5, vals$$3, (0, _QueueList.QueueListModule$$$ofList)(entities$$1));
              }

            case 1:
              {
                return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastNamespaceAndModuleWithSameNameInAssembly$$Z721C83C5)((0, _ast.textOfPath)(path$$3)), m$$21));
              }

            case 2:
              {
                return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastTwoModulesWithSameNameInAssembly$$Z721C83C5)((0, _ast.textOfPath)(path$$3)), m$$21));
              }
          }
        };
      };
    };
  };

  const CombineEntites = function CombineEntites(path$$4) {
    return function (entity1) {
      return function (entity2) {
        const matchValue$$176 = [Entity$$get_IsModuleOrNamespace(entity1), Entity$$get_IsModuleOrNamespace(entity2)];
        var $target$$78;

        if (matchValue$$176[0]) {
          if (matchValue$$176[1]) {
            $target$$78 = 0;
          } else {
            $target$$78 = 2;
          }
        } else if (matchValue$$176[1]) {
          $target$$78 = 2;
        } else {
          $target$$78 = 1;
        }

        switch ($target$$78) {
          case 0:
            {
              return NewModifiedTycon(function f$$26(data1) {
                var matchValue$$177, optData$$40, inputRecord$$17;
                const xml$$2 = (0, _ast.XmlDoc$$$Merge)(Entity$$get_XmlDoc(entity1), Entity$$get_XmlDoc(entity2));
                return new Entity(data1.entity_typars, data1.entity_flags, data1.entity_stamp, data1.entity_logical_name, data1.entity_range, (0, _List.append)(Entity$$get_Attribs(entity1), Entity$$get_Attribs(entity2)), data1.entity_tycon_repr, data1.entity_tycon_tcaug, new MaybeLazy$00601(1, "Lazy", new _Util.Lazy(function () {
                  return CombineModuleOrNamespaceTypes((0, _List.append)(path$$4, (0, _Types.L)(Entity$$get_DemangledModuleOrNamespaceName(entity2), (0, _Types.L)())))(Entity$$get_Range(entity2))(Entity$$get_ModuleOrNamespaceType(entity1))(Entity$$get_ModuleOrNamespaceType(entity2));
                })), data1.entity_pubpath, data1.entity_cpath, data1.entity_il_repr_cache, (matchValue$$177 = data1.entity_opt_data, matchValue$$177 != null ? (optData$$40 = matchValue$$177, new EntityOptionalData(optData$$40.entity_compiled_name, optData$$40.entity_other_range, optData$$40.entity_kind, xml$$2, optData$$40.entity_xmldocsig, optData$$40.entity_tycon_abbrev, optData$$40.entity_tycon_repr_accessibility, optData$$40.entity_accessiblity, optData$$40.entity_exn_info)) : (inputRecord$$17 = Entity$$$get_EmptyEntityOptData(), new EntityOptionalData(inputRecord$$17.entity_compiled_name, inputRecord$$17.entity_other_range, inputRecord$$17.entity_kind, xml$$2, inputRecord$$17.entity_xmldocsig, inputRecord$$17.entity_tycon_abbrev, inputRecord$$17.entity_tycon_repr_accessibility, inputRecord$$17.entity_accessiblity, inputRecord$$17.entity_exn_info))));
              }, entity1);
            }

          case 1:
            {
              return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastDuplicateTypeDefinitionInAssembly$$Z384F8060)(Entity$$get_LogicalName(entity2), (0, _ast.textOfPath)(path$$4)), Entity$$get_Range(entity2)));
            }

          case 2:
            {
              return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastConflictingModuleAndTypeDefinitionInAssembly$$Z384F8060)(Entity$$get_LogicalName(entity2), (0, _ast.textOfPath)(path$$4)), Entity$$get_Range(entity2)));
            }
        }
      };
    };
  };

  const CombineModuleOrNamespaceTypeList = function CombineModuleOrNamespaceTypeList(path$$5) {
    return function (m$$22) {
      return function (l$$2) {
        if (l$$2.tail != null) {
          const t$$4 = l$$2.tail;
          const h$$3 = l$$2.head;
          return (0, _List.fold)((0, _Util.uncurry)(2, CombineModuleOrNamespaceTypes(path$$5)(m$$22)), h$$3, t$$4);
        } else {
          throw new Error("CombineModuleOrNamespaceTypeList");
        }
      };
    };
  };

  return CombineModuleOrNamespaceTypeList((0, _Types.L)())(m$$20)(l$$1);
}

const FSharpOptimizationDataResourceName = "FSharpOptimizationData.";
exports.FSharpOptimizationDataResourceName = FSharpOptimizationDataResourceName;
const FSharpSignatureDataResourceName = "FSharpSignatureData.";
exports.FSharpSignatureDataResourceName = FSharpSignatureDataResourceName;
const FSharpOptimizationDataResourceName2 = "FSharpOptimizationInfo.";
exports.FSharpOptimizationDataResourceName2 = FSharpOptimizationDataResourceName2;
const FSharpSignatureDataResourceName2 = "FSharpSignatureInfo.";
exports.FSharpSignatureDataResourceName2 = FSharpSignatureDataResourceName2;