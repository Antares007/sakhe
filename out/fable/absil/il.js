"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notlazy = notlazy;
exports.lazyMap = lazyMap;
exports.PrimaryAssembly$$get_Name = PrimaryAssembly$$get_Name;
exports.PrimaryAssembly$$$IsSomePrimaryAssembly$$Z721C83C5 = PrimaryAssembly$$$IsSomePrimaryAssembly$$Z721C83C5;
exports.splitNameAt = splitNameAt;
exports.splitNamespaceAux = splitNamespaceAux;
exports.splitNamespace = splitNamespace;
exports.splitNamespaceMemoized = splitNamespaceMemoized;
exports.splitNamespaceToArray = splitNamespaceToArray;
exports.splitILTypeName = splitILTypeName;
exports.splitILTypeNameWithPossibleStaticArguments = splitILTypeNameWithPossibleStaticArguments;
exports.unsplitTypeName = unsplitTypeName;
exports.splitTypeNameRightAux = splitTypeNameRightAux;
exports.splitTypeNameRight = splitTypeNameRight;
exports.LazyOrderedMultiMap$00602$$$$002Ector$$48A8A99B = LazyOrderedMultiMap$00602$$$$002Ector$$48A8A99B;
exports.LazyOrderedMultiMap$00602$$Entries = LazyOrderedMultiMap$00602$$Entries;
exports.LazyOrderedMultiMap$00602$$Add$$2B594 = LazyOrderedMultiMap$00602$$Add$$2B594;
exports.LazyOrderedMultiMap$00602$$Filter$$Z3AD716D8 = LazyOrderedMultiMap$00602$$Filter$$Z3AD716D8;
exports.LazyOrderedMultiMap$00602$$get_Item$$2B595 = LazyOrderedMultiMap$00602$$get_Item$$2B595;
exports.b0 = b0;
exports.b1 = b1;
exports.b2 = b2;
exports.b3 = b3;
exports.SHA1$$$f = SHA1$$$f;
exports.SHA1$$$k = SHA1$$$k;
exports.SHA1$$$rotLeft32 = SHA1$$$rotLeft32;
exports.SHA1$$$shaAfterEof = SHA1$$$shaAfterEof;
exports.SHA1$$$shaRead8 = SHA1$$$shaRead8;
exports.SHA1$$$shaRead32 = SHA1$$$shaRead32;
exports.SHA1$$$sha1Hash = SHA1$$$sha1Hash;
exports.SHA1$$$sha1HashBytes = SHA1$$$sha1HashBytes;
exports.sha1HashBytes = sha1HashBytes;
exports.PublicKey$$get_IsKey = PublicKey$$get_IsKey;
exports.PublicKey$$get_IsKeyToken = PublicKey$$get_IsKeyToken;
exports.PublicKey$$get_Key = PublicKey$$get_Key;
exports.PublicKey$$get_KeyToken = PublicKey$$get_KeyToken;
exports.PublicKey$$ToToken = PublicKey$$ToToken;
exports.PublicKey$$$KeyAsToken$$6C95DA22 = PublicKey$$$KeyAsToken$$6C95DA22;
exports.isMscorlib = isMscorlib;
exports.ILAssemblyRef$$$$002Ector$$272E701D = ILAssemblyRef$$$$002Ector$$272E701D;
exports.ILAssemblyRef$$get_Name = ILAssemblyRef$$get_Name;
exports.ILAssemblyRef$$get_Hash = ILAssemblyRef$$get_Hash;
exports.ILAssemblyRef$$get_PublicKey = ILAssemblyRef$$get_PublicKey;
exports.ILAssemblyRef$$get_Retargetable = ILAssemblyRef$$get_Retargetable;
exports.ILAssemblyRef$$get_Version = ILAssemblyRef$$get_Version;
exports.ILAssemblyRef$$get_Locale = ILAssemblyRef$$get_Locale;
exports.ILAssemblyRef$$get_UniqueStamp = ILAssemblyRef$$get_UniqueStamp;
exports.ILAssemblyRef$$$Create$$2BC8E713 = ILAssemblyRef$$$Create$$2BC8E713;
exports.ILAssemblyRef$$get_QualifiedName = ILAssemblyRef$$get_QualifiedName;
exports.ILModuleRef$$$Create$$10F6F906 = ILModuleRef$$$Create$$10F6F906;
exports.ILModuleRef$$get_Name = ILModuleRef$$get_Name;
exports.ILModuleRef$$get_HasMetadata = ILModuleRef$$get_HasMetadata;
exports.ILModuleRef$$get_Hash = ILModuleRef$$get_Hash;
exports.ILScopeRef$$get_IsLocalRef = ILScopeRef$$get_IsLocalRef;
exports.ILScopeRef$$get_IsModuleRef = ILScopeRef$$get_IsModuleRef;
exports.ILScopeRef$$get_IsAssemblyRef = ILScopeRef$$get_IsAssemblyRef;
exports.ILScopeRef$$get_ModuleRef = ILScopeRef$$get_ModuleRef;
exports.ILScopeRef$$get_AssemblyRef = ILScopeRef$$get_AssemblyRef;
exports.ILScopeRef$$get_QualifiedName = ILScopeRef$$get_QualifiedName;
exports.ILArrayShape$$get_Rank = ILArrayShape$$get_Rank;
exports.ILArrayShape$$$get_SingleDimensional = ILArrayShape$$$get_SingleDimensional;
exports.ILArrayShape$$$FromRank$$Z524259A4 = ILArrayShape$$$FromRank$$Z524259A4;
exports.ILArrayShapeStatics$$$$002Ector = ILArrayShapeStatics$$$$002Ector;
exports.ILArrayShapeStatics$$$get_SingleDimensional = ILArrayShapeStatics$$$get_SingleDimensional;
exports.ILCallingConv$$get_ThisConv = ILCallingConv$$get_ThisConv;
exports.ILCallingConv$$get_BasicConv = ILCallingConv$$get_BasicConv;
exports.ILCallingConv$$get_IsInstance = ILCallingConv$$get_IsInstance;
exports.ILCallingConv$$get_IsInstanceExplicit = ILCallingConv$$get_IsInstanceExplicit;
exports.ILCallingConv$$get_IsStatic = ILCallingConv$$get_IsStatic;
exports.ILCallingConv$$$get_Instance = ILCallingConv$$$get_Instance;
exports.ILCallingConv$$$get_Static = ILCallingConv$$$get_Static;
exports.ILCallingConvStatics$$$$002Ector = ILCallingConvStatics$$$$002Ector;
exports.ILCallingConvStatics$$$get_Instance = ILCallingConvStatics$$$get_Instance;
exports.ILCallingConvStatics$$$get_Static = ILCallingConvStatics$$$get_Static;
exports.ILTypeRef$$$Create$$113F1D6 = ILTypeRef$$$Create$$113F1D6;
exports.ILTypeRef$$get_Scope = ILTypeRef$$get_Scope;
exports.ILTypeRef$$get_Enclosing = ILTypeRef$$get_Enclosing;
exports.ILTypeRef$$get_Name = ILTypeRef$$get_Name;
exports.ILTypeRef$$get_ApproxId = ILTypeRef$$get_ApproxId;
exports.ILTypeRef$$AsBoxedType$$Z41A1D4C6 = ILTypeRef$$AsBoxedType$$Z41A1D4C6;
exports.ILTypeRef$$get_FullName = ILTypeRef$$get_FullName;
exports.ILTypeRef$$get_BasicQualifiedName = ILTypeRef$$get_BasicQualifiedName;
exports.ILTypeRef$$AddQualifiedNameExtension$$Z721C83C5 = ILTypeRef$$AddQualifiedNameExtension$$Z721C83C5;
exports.ILTypeRef$$get_QualifiedName = ILTypeRef$$get_QualifiedName;
exports.ILTypeRef$$get_DebugText = ILTypeRef$$get_DebugText;
exports.ILTypeSpec$$get_TypeRef = ILTypeSpec$$get_TypeRef;
exports.ILTypeSpec$$get_Scope = ILTypeSpec$$get_Scope;
exports.ILTypeSpec$$get_Enclosing = ILTypeSpec$$get_Enclosing;
exports.ILTypeSpec$$get_Name = ILTypeSpec$$get_Name;
exports.ILTypeSpec$$get_GenericArgs = ILTypeSpec$$get_GenericArgs;
exports.ILTypeSpec$$$Create$$7469E1FB = ILTypeSpec$$$Create$$7469E1FB;
exports.ILTypeSpec$$get_BasicQualifiedName = ILTypeSpec$$get_BasicQualifiedName;
exports.ILTypeSpec$$AddQualifiedNameExtension$$Z721C83C5 = ILTypeSpec$$AddQualifiedNameExtension$$Z721C83C5;
exports.ILTypeSpec$$get_FullName = ILTypeSpec$$get_FullName;
exports.ILTypeSpec$$get_DebugText = ILTypeSpec$$get_DebugText;
exports.ILType$$get_BasicQualifiedName = ILType$$get_BasicQualifiedName;
exports.ILType$$AddQualifiedNameExtension$$Z721C83C5 = ILType$$AddQualifiedNameExtension$$Z721C83C5;
exports.ILType$$get_QualifiedName = ILType$$get_QualifiedName;
exports.ILType$$get_TypeSpec = ILType$$get_TypeSpec;
exports.ILType$$get_Boxity = ILType$$get_Boxity;
exports.ILType$$get_TypeRef = ILType$$get_TypeRef;
exports.ILType$$get_IsNominal = ILType$$get_IsNominal;
exports.ILType$$get_GenericArgs = ILType$$get_GenericArgs;
exports.ILType$$get_IsTyvar = ILType$$get_IsTyvar;
exports.ILType$$get_DebugText = ILType$$get_DebugText;
exports.mkILCallSig = mkILCallSig;
exports.mkILBoxedType = mkILBoxedType;
exports.ILMethodRef$$get_DeclaringTypeRef = ILMethodRef$$get_DeclaringTypeRef;
exports.ILMethodRef$$get_CallingConv = ILMethodRef$$get_CallingConv;
exports.ILMethodRef$$get_Name = ILMethodRef$$get_Name;
exports.ILMethodRef$$get_GenericArity = ILMethodRef$$get_GenericArity;
exports.ILMethodRef$$get_ArgCount = ILMethodRef$$get_ArgCount;
exports.ILMethodRef$$get_ArgTypes = ILMethodRef$$get_ArgTypes;
exports.ILMethodRef$$get_ReturnType = ILMethodRef$$get_ReturnType;
exports.ILMethodRef$$get_CallingSignature = ILMethodRef$$get_CallingSignature;
exports.ILMethodRef$$$Create$$Z6DE7B28E = ILMethodRef$$$Create$$Z6DE7B28E;
exports.ILMethodRef$$get_DebugText = ILMethodRef$$get_DebugText;
exports.ILFieldRef$$get_DebugText = ILFieldRef$$get_DebugText;
exports.ILMethodSpec$$$Create$$4D2FDCE3 = ILMethodSpec$$$Create$$4D2FDCE3;
exports.ILMethodSpec$$get_MethodRef = ILMethodSpec$$get_MethodRef;
exports.ILMethodSpec$$get_DeclaringType = ILMethodSpec$$get_DeclaringType;
exports.ILMethodSpec$$get_GenericArgs = ILMethodSpec$$get_GenericArgs;
exports.ILMethodSpec$$get_Name = ILMethodSpec$$get_Name;
exports.ILMethodSpec$$get_CallingConv = ILMethodSpec$$get_CallingConv;
exports.ILMethodSpec$$get_GenericArity = ILMethodSpec$$get_GenericArity;
exports.ILMethodSpec$$get_FormalArgTypes = ILMethodSpec$$get_FormalArgTypes;
exports.ILMethodSpec$$get_FormalReturnType = ILMethodSpec$$get_FormalReturnType;
exports.ILMethodSpec$$get_DebugText = ILMethodSpec$$get_DebugText;
exports.ILFieldSpec$$get_FormalType = ILFieldSpec$$get_FormalType;
exports.ILFieldSpec$$get_Name = ILFieldSpec$$get_Name;
exports.ILFieldSpec$$get_DeclaringTypeRef = ILFieldSpec$$get_DeclaringTypeRef;
exports.ILFieldSpec$$get_DebugText = ILFieldSpec$$get_DebugText;
exports.ILSourceDocument$$$Create$$Z127DAF94 = ILSourceDocument$$$Create$$Z127DAF94;
exports.ILSourceDocument$$get_Language = ILSourceDocument$$get_Language;
exports.ILSourceDocument$$get_Vendor = ILSourceDocument$$get_Vendor;
exports.ILSourceDocument$$get_DocumentType = ILSourceDocument$$get_DocumentType;
exports.ILSourceDocument$$get_File = ILSourceDocument$$get_File;
exports.ILSourceMarker$$$Create$$50F496D5 = ILSourceMarker$$$Create$$50F496D5;
exports.ILSourceMarker$$get_Document = ILSourceMarker$$get_Document;
exports.ILSourceMarker$$get_Line = ILSourceMarker$$get_Line;
exports.ILSourceMarker$$get_Column = ILSourceMarker$$get_Column;
exports.ILSourceMarker$$get_EndLine = ILSourceMarker$$get_EndLine;
exports.ILSourceMarker$$get_EndColumn = ILSourceMarker$$get_EndColumn;
exports.ILSourceMarker$$get_DebugText = ILSourceMarker$$get_DebugText;
exports.ILAttribute$$get_DebugText = ILAttribute$$get_DebugText;
exports.ILAttributes$$$$002Ector$$Z529E0E03 = ILAttributes$$$$002Ector$$Z529E0E03;
exports.ILAttributes$$get_AsArray = ILAttributes$$get_AsArray;
exports.ILAttributes$$get_AsList = ILAttributes$$get_AsList;
exports.ILAttributesStored$$GetCustomAttrs$$Z524259A4 = ILAttributesStored$$GetCustomAttrs$$Z524259A4;
exports.mkILCustomAttrsFromArray = mkILCustomAttrsFromArray;
exports.mkILCustomAttrs = mkILCustomAttrs;
exports.storeILCustomAttrs = storeILCustomAttrs;
exports.mkILCustomAttrsReader = mkILCustomAttrsReader;
exports.ILSecurityDecls$$$$002Ector$$Z761CFD87 = ILSecurityDecls$$$$002Ector$$Z761CFD87;
exports.ILSecurityDecls$$get_AsArray = ILSecurityDecls$$get_AsArray;
exports.ILSecurityDecls$$get_AsList = ILSecurityDecls$$get_AsList;
exports.ILSecurityDeclsStored$$GetSecurityDecls$$Z524259A4 = ILSecurityDeclsStored$$GetSecurityDecls$$Z524259A4;
exports.mkILSecurityDecls = mkILSecurityDecls;
exports.storeILSecurityDecls = storeILSecurityDecls;
exports.mkILSecurityDeclsReader = mkILSecurityDeclsReader;
exports.ILParameter$$get_CustomAttrs = ILParameter$$get_CustomAttrs;
exports.ILReturn$$get_CustomAttrs = ILReturn$$get_CustomAttrs;
exports.ILReturn$$WithCustomAttrs$$6A1A3D88 = ILReturn$$WithCustomAttrs$$6A1A3D88;
exports.ILOverridesSpec$$get_MethodRef = ILOverridesSpec$$get_MethodRef;
exports.ILOverridesSpec$$get_DeclaringType = ILOverridesSpec$$get_DeclaringType;
exports.ILLazyMethodBody$$get_Contents = ILLazyMethodBody$$get_Contents;
exports.mkMethBodyAux = mkMethBodyAux;
exports.mkMethBodyLazyAux = mkMethBodyLazyAux;
exports.typesOfILParams = typesOfILParams;
exports.ILGenericParameterDef$$get_CustomAttrs = ILGenericParameterDef$$get_CustomAttrs;
exports.ILGenericParameterDef$$get_DebugText = ILGenericParameterDef$$get_DebugText;
exports.memberAccessOfFlags = memberAccessOfFlags;
exports.convertMemberAccess = convertMemberAccess;
exports.ILMethodDef$$$$002Ector$$5F38DB7D = ILMethodDef$$$$002Ector$$5F38DB7D;
exports.ILMethodDef$$$CreateStored$$5F38DB7D = ILMethodDef$$$CreateStored$$5F38DB7D;
exports.ILMethodDef$$$Create$$Z54D6B21F = ILMethodDef$$$Create$$Z54D6B21F;
exports.ILMethodDef$$get_Name = ILMethodDef$$get_Name;
exports.ILMethodDef$$get_Attributes = ILMethodDef$$get_Attributes;
exports.ILMethodDef$$get_ImplAttributes = ILMethodDef$$get_ImplAttributes;
exports.ILMethodDef$$get_CallingConv = ILMethodDef$$get_CallingConv;
exports.ILMethodDef$$get_Parameters = ILMethodDef$$get_Parameters;
exports.ILMethodDef$$get_Return = ILMethodDef$$get_Return;
exports.ILMethodDef$$get_Body = ILMethodDef$$get_Body;
exports.ILMethodDef$$get_SecurityDeclsStored = ILMethodDef$$get_SecurityDeclsStored;
exports.ILMethodDef$$get_IsEntryPoint = ILMethodDef$$get_IsEntryPoint;
exports.ILMethodDef$$get_GenericParams = ILMethodDef$$get_GenericParams;
exports.ILMethodDef$$get_CustomAttrsStored = ILMethodDef$$get_CustomAttrsStored;
exports.ILMethodDef$$get_MetadataIndex = ILMethodDef$$get_MetadataIndex;
exports.ILMethodDef$$With$$Z3726C02C = ILMethodDef$$With$$Z3726C02C;
exports.ILMethodDef$$get_CustomAttrs = ILMethodDef$$get_CustomAttrs;
exports.ILMethodDef$$get_SecurityDecls = ILMethodDef$$get_SecurityDecls;
exports.ILMethodDef$$get_ParameterTypes = ILMethodDef$$get_ParameterTypes;
exports.ILMethodDef$$get_Code = ILMethodDef$$get_Code;
exports.ILMethodDef$$get_IsIL = ILMethodDef$$get_IsIL;
exports.ILMethodDef$$get_Locals = ILMethodDef$$get_Locals;
exports.ILMethodDef$$get_MethodBody = ILMethodDef$$get_MethodBody;
exports.ILMethodDef$$get_SourceMarker = ILMethodDef$$get_SourceMarker;
exports.ILMethodDef$$get_MaxStack = ILMethodDef$$get_MaxStack;
exports.ILMethodDef$$get_IsZeroInit = ILMethodDef$$get_IsZeroInit;
exports.ILMethodDef$$get_CallingSignature = ILMethodDef$$get_CallingSignature;
exports.ILMethodDef$$get_IsClassInitializer = ILMethodDef$$get_IsClassInitializer;
exports.ILMethodDef$$get_IsConstructor = ILMethodDef$$get_IsConstructor;
exports.ILMethodDef$$get_Access = ILMethodDef$$get_Access;
exports.ILMethodDef$$get_IsStatic = ILMethodDef$$get_IsStatic;
exports.ILMethodDef$$get_IsNonVirtualInstance = ILMethodDef$$get_IsNonVirtualInstance;
exports.ILMethodDef$$get_IsVirtual = ILMethodDef$$get_IsVirtual;
exports.ILMethodDef$$get_IsFinal = ILMethodDef$$get_IsFinal;
exports.ILMethodDef$$get_IsNewSlot = ILMethodDef$$get_IsNewSlot;
exports.ILMethodDef$$get_IsCheckAccessOnOverride = ILMethodDef$$get_IsCheckAccessOnOverride;
exports.ILMethodDef$$get_IsAbstract = ILMethodDef$$get_IsAbstract;
exports.ILMethodDef$$get_IsHideBySig = ILMethodDef$$get_IsHideBySig;
exports.ILMethodDef$$get_IsSpecialName = ILMethodDef$$get_IsSpecialName;
exports.ILMethodDef$$get_IsUnmanagedExport = ILMethodDef$$get_IsUnmanagedExport;
exports.ILMethodDef$$get_IsReqSecObj = ILMethodDef$$get_IsReqSecObj;
exports.ILMethodDef$$get_HasSecurity = ILMethodDef$$get_HasSecurity;
exports.ILMethodDef$$get_IsManaged = ILMethodDef$$get_IsManaged;
exports.ILMethodDef$$get_IsForwardRef = ILMethodDef$$get_IsForwardRef;
exports.ILMethodDef$$get_IsInternalCall = ILMethodDef$$get_IsInternalCall;
exports.ILMethodDef$$get_IsPreserveSig = ILMethodDef$$get_IsPreserveSig;
exports.ILMethodDef$$get_IsSynchronized = ILMethodDef$$get_IsSynchronized;
exports.ILMethodDef$$get_IsNoInline = ILMethodDef$$get_IsNoInline;
exports.ILMethodDef$$get_IsAggressiveInline = ILMethodDef$$get_IsAggressiveInline;
exports.ILMethodDef$$get_IsMustRun = ILMethodDef$$get_IsMustRun;
exports.ILMethodDef$$get_WithSpecialName = ILMethodDef$$get_WithSpecialName;
exports.ILMethodDef$$WithHideBySig = ILMethodDef$$WithHideBySig;
exports.ILMethodDef$$WithHideBySig$$Z1FBCCD16 = ILMethodDef$$WithHideBySig$$Z1FBCCD16;
exports.ILMethodDef$$WithFinal$$Z1FBCCD16 = ILMethodDef$$WithFinal$$Z1FBCCD16;
exports.ILMethodDef$$WithAbstract$$Z1FBCCD16 = ILMethodDef$$WithAbstract$$Z1FBCCD16;
exports.ILMethodDef$$WithAccess$$4BB0D833 = ILMethodDef$$WithAccess$$4BB0D833;
exports.ILMethodDef$$get_WithNewSlot = ILMethodDef$$get_WithNewSlot;
exports.ILMethodDef$$WithSecurity$$Z1FBCCD16 = ILMethodDef$$WithSecurity$$Z1FBCCD16;
exports.ILMethodDef$$WithPInvoke$$Z1FBCCD16 = ILMethodDef$$WithPInvoke$$Z1FBCCD16;
exports.ILMethodDef$$WithPreserveSig$$Z1FBCCD16 = ILMethodDef$$WithPreserveSig$$Z1FBCCD16;
exports.ILMethodDef$$WithSynchronized$$Z1FBCCD16 = ILMethodDef$$WithSynchronized$$Z1FBCCD16;
exports.ILMethodDef$$WithNoInlining$$Z1FBCCD16 = ILMethodDef$$WithNoInlining$$Z1FBCCD16;
exports.ILMethodDef$$WithAggressiveInlining$$Z1FBCCD16 = ILMethodDef$$WithAggressiveInlining$$Z1FBCCD16;
exports.ILMethodDef$$WithRuntime$$Z1FBCCD16 = ILMethodDef$$WithRuntime$$Z1FBCCD16;
exports.ILMethodDefs$$$$002Ector$$4309F733 = ILMethodDefs$$$$002Ector$$4309F733;
exports.ILMethodDefs$$get_AsArray = ILMethodDefs$$get_AsArray;
exports.ILMethodDefs$$get_AsList = ILMethodDefs$$get_AsList;
exports.ILMethodDefs$$FindByName$$Z721C83C5 = ILMethodDefs$$FindByName$$Z721C83C5;
exports.ILMethodDefs$$FindByNameAndArity$$Z18115A39 = ILMethodDefs$$FindByNameAndArity$$Z18115A39;
exports.ILEventDef$$$$002Ector$$Z970C03B = ILEventDef$$$$002Ector$$Z970C03B;
exports.ILEventDef$$$CreateStored$$Z970C03B = ILEventDef$$$CreateStored$$Z970C03B;
exports.ILEventDef$$$Create$$2E001362 = ILEventDef$$$Create$$2E001362;
exports.ILEventDef$$get_EventType = ILEventDef$$get_EventType;
exports.ILEventDef$$get_Name = ILEventDef$$get_Name;
exports.ILEventDef$$get_Attributes = ILEventDef$$get_Attributes;
exports.ILEventDef$$get_AddMethod = ILEventDef$$get_AddMethod;
exports.ILEventDef$$get_RemoveMethod = ILEventDef$$get_RemoveMethod;
exports.ILEventDef$$get_FireMethod = ILEventDef$$get_FireMethod;
exports.ILEventDef$$get_OtherMethods = ILEventDef$$get_OtherMethods;
exports.ILEventDef$$get_CustomAttrsStored = ILEventDef$$get_CustomAttrsStored;
exports.ILEventDef$$get_MetadataIndex = ILEventDef$$get_MetadataIndex;
exports.ILEventDef$$get_CustomAttrs = ILEventDef$$get_CustomAttrs;
exports.ILEventDef$$With$$ZAE8B55E = ILEventDef$$With$$ZAE8B55E;
exports.ILEventDef$$get_IsSpecialName = ILEventDef$$get_IsSpecialName;
exports.ILEventDef$$get_IsRTSpecialName = ILEventDef$$get_IsRTSpecialName;
exports.ILEventDef$$get_DebugText = ILEventDef$$get_DebugText;
exports.ILEventDefs$$get_AsList = ILEventDefs$$get_AsList;
exports.ILEventDefs$$LookupByName$$Z721C83C5 = ILEventDefs$$LookupByName$$Z721C83C5;
exports.ILPropertyDef$$$$002Ector$$ZEE27C7 = ILPropertyDef$$$$002Ector$$ZEE27C7;
exports.ILPropertyDef$$$CreateStored$$ZEE27C7 = ILPropertyDef$$$CreateStored$$ZEE27C7;
exports.ILPropertyDef$$$Create$$Z7C56322 = ILPropertyDef$$$Create$$Z7C56322;
exports.ILPropertyDef$$get_Name = ILPropertyDef$$get_Name;
exports.ILPropertyDef$$get_Attributes = ILPropertyDef$$get_Attributes;
exports.ILPropertyDef$$get_GetMethod = ILPropertyDef$$get_GetMethod;
exports.ILPropertyDef$$get_SetMethod = ILPropertyDef$$get_SetMethod;
exports.ILPropertyDef$$get_CallingConv = ILPropertyDef$$get_CallingConv;
exports.ILPropertyDef$$get_PropertyType = ILPropertyDef$$get_PropertyType;
exports.ILPropertyDef$$get_Init = ILPropertyDef$$get_Init;
exports.ILPropertyDef$$get_Args = ILPropertyDef$$get_Args;
exports.ILPropertyDef$$get_CustomAttrsStored = ILPropertyDef$$get_CustomAttrsStored;
exports.ILPropertyDef$$get_CustomAttrs = ILPropertyDef$$get_CustomAttrs;
exports.ILPropertyDef$$get_MetadataIndex = ILPropertyDef$$get_MetadataIndex;
exports.ILPropertyDef$$With$$2CBB49EB = ILPropertyDef$$With$$2CBB49EB;
exports.ILPropertyDef$$get_IsSpecialName = ILPropertyDef$$get_IsSpecialName;
exports.ILPropertyDef$$get_IsRTSpecialName = ILPropertyDef$$get_IsRTSpecialName;
exports.ILPropertyDef$$get_DebugText = ILPropertyDef$$get_DebugText;
exports.ILPropertyDefs$$get_AsList = ILPropertyDefs$$get_AsList;
exports.ILPropertyDefs$$LookupByName$$Z721C83C5 = ILPropertyDefs$$LookupByName$$Z721C83C5;
exports.convertFieldAccess = convertFieldAccess;
exports.ILFieldDef$$$$002Ector$$Z4E5D7682 = ILFieldDef$$$$002Ector$$Z4E5D7682;
exports.ILFieldDef$$$CreateStored$$Z4E5D7682 = ILFieldDef$$$CreateStored$$Z4E5D7682;
exports.ILFieldDef$$$Create$$Z60727407 = ILFieldDef$$$Create$$Z60727407;
exports.ILFieldDef$$get_Name = ILFieldDef$$get_Name;
exports.ILFieldDef$$get_FieldType = ILFieldDef$$get_FieldType;
exports.ILFieldDef$$get_Attributes = ILFieldDef$$get_Attributes;
exports.ILFieldDef$$get_Data = ILFieldDef$$get_Data;
exports.ILFieldDef$$get_LiteralValue = ILFieldDef$$get_LiteralValue;
exports.ILFieldDef$$get_Offset = ILFieldDef$$get_Offset;
exports.ILFieldDef$$get_Marshal = ILFieldDef$$get_Marshal;
exports.ILFieldDef$$get_CustomAttrsStored = ILFieldDef$$get_CustomAttrsStored;
exports.ILFieldDef$$get_CustomAttrs = ILFieldDef$$get_CustomAttrs;
exports.ILFieldDef$$get_MetadataIndex = ILFieldDef$$get_MetadataIndex;
exports.ILFieldDef$$With$$Z1EED4EE7 = ILFieldDef$$With$$Z1EED4EE7;
exports.ILFieldDef$$get_IsStatic = ILFieldDef$$get_IsStatic;
exports.ILFieldDef$$get_IsSpecialName = ILFieldDef$$get_IsSpecialName;
exports.ILFieldDef$$get_IsLiteral = ILFieldDef$$get_IsLiteral;
exports.ILFieldDef$$get_NotSerialized = ILFieldDef$$get_NotSerialized;
exports.ILFieldDef$$get_IsInitOnly = ILFieldDef$$get_IsInitOnly;
exports.ILFieldDef$$get_Access = ILFieldDef$$get_Access;
exports.ILFieldDef$$WithAccess$$4BB0D833 = ILFieldDef$$WithAccess$$4BB0D833;
exports.ILFieldDef$$WithInitOnly$$Z1FBCCD16 = ILFieldDef$$WithInitOnly$$Z1FBCCD16;
exports.ILFieldDef$$WithStatic$$Z1FBCCD16 = ILFieldDef$$WithStatic$$Z1FBCCD16;
exports.ILFieldDef$$WithSpecialName$$Z1FBCCD16 = ILFieldDef$$WithSpecialName$$Z1FBCCD16;
exports.ILFieldDef$$WithNotSerialized$$Z1FBCCD16 = ILFieldDef$$WithNotSerialized$$Z1FBCCD16;
exports.ILFieldDef$$WithLiteralDefaultValue$$5B6598A = ILFieldDef$$WithLiteralDefaultValue$$5B6598A;
exports.ILFieldDef$$WithFieldMarshal$$Z704B1275 = ILFieldDef$$WithFieldMarshal$$Z704B1275;
exports.ILFieldDefs$$get_AsList = ILFieldDefs$$get_AsList;
exports.ILFieldDefs$$LookupByName$$Z721C83C5 = ILFieldDefs$$LookupByName$$Z721C83C5;
exports.ILMethodImplDefs$$get_AsList = ILMethodImplDefs$$get_AsList;
exports.typeAccessOfFlags = typeAccessOfFlags;
exports.typeEncodingOfFlags = typeEncodingOfFlags;
exports.typeKindOfFlags = typeKindOfFlags;
exports.convertTypeAccessFlags = convertTypeAccessFlags;
exports.convertTypeKind = convertTypeKind;
exports.convertLayout = convertLayout;
exports.convertEncoding = convertEncoding;
exports.convertToNestedTypeAccess = convertToNestedTypeAccess;
exports.convertInitSemantics = convertInitSemantics;
exports.ILTypeDef$$$$002Ector$$Z51F7F1CB = ILTypeDef$$$$002Ector$$Z51F7F1CB;
exports.ILTypeDef$$$CreateStored$$Z51F7F1CB = ILTypeDef$$$CreateStored$$Z51F7F1CB;
exports.ILTypeDef$$$Create$$659DAD29 = ILTypeDef$$$Create$$659DAD29;
exports.ILTypeDef$$get_Name = ILTypeDef$$get_Name;
exports.ILTypeDef$$get_Attributes = ILTypeDef$$get_Attributes;
exports.ILTypeDef$$get_GenericParams = ILTypeDef$$get_GenericParams;
exports.ILTypeDef$$get_Layout = ILTypeDef$$get_Layout;
exports.ILTypeDef$$get_NestedTypes = ILTypeDef$$get_NestedTypes;
exports.ILTypeDef$$get_Implements = ILTypeDef$$get_Implements;
exports.ILTypeDef$$get_Extends = ILTypeDef$$get_Extends;
exports.ILTypeDef$$get_Methods = ILTypeDef$$get_Methods;
exports.ILTypeDef$$get_SecurityDeclsStored = ILTypeDef$$get_SecurityDeclsStored;
exports.ILTypeDef$$get_Fields = ILTypeDef$$get_Fields;
exports.ILTypeDef$$get_MethodImpls = ILTypeDef$$get_MethodImpls;
exports.ILTypeDef$$get_Events = ILTypeDef$$get_Events;
exports.ILTypeDef$$get_Properties = ILTypeDef$$get_Properties;
exports.ILTypeDef$$get_CustomAttrsStored = ILTypeDef$$get_CustomAttrsStored;
exports.ILTypeDef$$get_MetadataIndex = ILTypeDef$$get_MetadataIndex;
exports.ILTypeDef$$With$$4DED7EA9 = ILTypeDef$$With$$4DED7EA9;
exports.ILTypeDef$$get_CustomAttrs = ILTypeDef$$get_CustomAttrs;
exports.ILTypeDef$$get_SecurityDecls = ILTypeDef$$get_SecurityDecls;
exports.ILTypeDef$$get_IsClass = ILTypeDef$$get_IsClass;
exports.ILTypeDef$$get_IsStruct = ILTypeDef$$get_IsStruct;
exports.ILTypeDef$$get_IsInterface = ILTypeDef$$get_IsInterface;
exports.ILTypeDef$$get_IsEnum = ILTypeDef$$get_IsEnum;
exports.ILTypeDef$$get_IsDelegate = ILTypeDef$$get_IsDelegate;
exports.ILTypeDef$$get_Access = ILTypeDef$$get_Access;
exports.ILTypeDef$$get_IsAbstract = ILTypeDef$$get_IsAbstract;
exports.ILTypeDef$$get_IsSealed = ILTypeDef$$get_IsSealed;
exports.ILTypeDef$$get_IsSerializable = ILTypeDef$$get_IsSerializable;
exports.ILTypeDef$$get_IsComInterop = ILTypeDef$$get_IsComInterop;
exports.ILTypeDef$$get_IsSpecialName = ILTypeDef$$get_IsSpecialName;
exports.ILTypeDef$$get_HasSecurity = ILTypeDef$$get_HasSecurity;
exports.ILTypeDef$$get_Encoding = ILTypeDef$$get_Encoding;
exports.ILTypeDef$$get_IsStructOrEnum = ILTypeDef$$get_IsStructOrEnum;
exports.ILTypeDef$$WithAccess$$322A849C = ILTypeDef$$WithAccess$$322A849C;
exports.ILTypeDef$$WithNestedAccess$$4BB0D833 = ILTypeDef$$WithNestedAccess$$4BB0D833;
exports.ILTypeDef$$WithSealed$$Z1FBCCD16 = ILTypeDef$$WithSealed$$Z1FBCCD16;
exports.ILTypeDef$$WithSerializable$$Z1FBCCD16 = ILTypeDef$$WithSerializable$$Z1FBCCD16;
exports.ILTypeDef$$WithAbstract$$Z1FBCCD16 = ILTypeDef$$WithAbstract$$Z1FBCCD16;
exports.ILTypeDef$$WithImport$$Z1FBCCD16 = ILTypeDef$$WithImport$$Z1FBCCD16;
exports.ILTypeDef$$WithHasSecurity$$Z1FBCCD16 = ILTypeDef$$WithHasSecurity$$Z1FBCCD16;
exports.ILTypeDef$$WithLayout$$2AFF1722 = ILTypeDef$$WithLayout$$2AFF1722;
exports.ILTypeDef$$WithKind$$Z60D3BEB0 = ILTypeDef$$WithKind$$Z60D3BEB0;
exports.ILTypeDef$$WithEncoding$$Z475EF4F1 = ILTypeDef$$WithEncoding$$Z475EF4F1;
exports.ILTypeDef$$WithSpecialName$$Z1FBCCD16 = ILTypeDef$$WithSpecialName$$Z1FBCCD16;
exports.ILTypeDef$$WithInitSemantics$$Z419EA49B = ILTypeDef$$WithInitSemantics$$Z419EA49B;
exports.ILTypeDefs$$$$002Ector$$2EB73C53 = ILTypeDefs$$$$002Ector$$2EB73C53;
exports.ILTypeDefs$$get_AsArray = ILTypeDefs$$get_AsArray;
exports.ILTypeDefs$$get_AsList = ILTypeDefs$$get_AsList;
exports.ILTypeDefs$$get_AsArrayOfPreTypeDefs = ILTypeDefs$$get_AsArrayOfPreTypeDefs;
exports.ILTypeDefs$$FindByName$$Z721C83C5 = ILTypeDefs$$FindByName$$Z721C83C5;
exports.ILPreTypeDef$$$$002Ector$$56F8E735 = ILPreTypeDef$$$$002Ector$$56F8E735;
exports.ILPreTypeDef$$get_Namespace = ILPreTypeDef$$get_Namespace;
exports.ILPreTypeDef$$get_Name = ILPreTypeDef$$get_Name;
exports.ILPreTypeDef$$get_MetadataIndex = ILPreTypeDef$$get_MetadataIndex;
exports.ILPreTypeDef$$GetTypeDef = ILPreTypeDef$$GetTypeDef;
exports.mkILTypeDefReader = mkILTypeDefReader;
exports.ILNestedExportedType$$get_CustomAttrs = ILNestedExportedType$$get_CustomAttrs;
exports.ILNestedExportedTypes$$get_AsList = ILNestedExportedTypes$$get_AsList;
exports.ILExportedTypeOrForwarder$$get_Access = ILExportedTypeOrForwarder$$get_Access;
exports.ILExportedTypeOrForwarder$$get_IsForwarder = ILExportedTypeOrForwarder$$get_IsForwarder;
exports.ILExportedTypeOrForwarder$$get_CustomAttrs = ILExportedTypeOrForwarder$$get_CustomAttrs;
exports.ILExportedTypesAndForwarders$$get_AsList = ILExportedTypesAndForwarders$$get_AsList;
exports.ILResource$$GetBytes = ILResource$$GetBytes;
exports.ILResource$$get_CustomAttrs = ILResource$$get_CustomAttrs;
exports.ILResources$$get_AsList = ILResources$$get_AsList;
exports.ILAssemblyManifest$$get_CustomAttrs = ILAssemblyManifest$$get_CustomAttrs;
exports.ILAssemblyManifest$$get_SecurityDecls = ILAssemblyManifest$$get_SecurityDecls;
exports.ILModuleDef$$get_ManifestOfAssembly = ILModuleDef$$get_ManifestOfAssembly;
exports.ILModuleDef$$get_HasManifest = ILModuleDef$$get_HasManifest;
exports.ILModuleDef$$get_CustomAttrs = ILModuleDef$$get_CustomAttrs;
exports.mkILNestedTyRef = mkILNestedTyRef;
exports.mkILTyRef = mkILTyRef;
exports.mkILTySpec = mkILTySpec;
exports.mkILNonGenericTySpec = mkILNonGenericTySpec;
exports.mkILTyRefInTyRef = mkILTyRefInTyRef;
exports.mkILTy = mkILTy;
exports.mkILNamedTy = mkILNamedTy;
exports.mkILValueTy = mkILValueTy;
exports.mkILBoxedTy = mkILBoxedTy;
exports.mkILNonGenericValueTy = mkILNonGenericValueTy;
exports.mkILNonGenericBoxedTy = mkILNonGenericBoxedTy;
exports.mkSimpleAssRef = mkSimpleAssRef;
exports.mkSimpleModRef = mkSimpleModRef;
exports.mkILTypeForGlobalFunctions = mkILTypeForGlobalFunctions;
exports.isTypeNameForGlobalFunctions = isTypeNameForGlobalFunctions;
exports.mkILMethRef = mkILMethRef;
exports.mkILMethSpecForMethRefInTy = mkILMethSpecForMethRefInTy;
exports.mkILMethSpec = mkILMethSpec;
exports.mkILMethSpecInTypeRef = mkILMethSpecInTypeRef;
exports.mkILMethSpecInTy = mkILMethSpecInTy;
exports.mkILNonGenericMethSpecInTy = mkILNonGenericMethSpecInTy;
exports.mkILInstanceMethSpecInTy = mkILInstanceMethSpecInTy;
exports.mkILNonGenericInstanceMethSpecInTy = mkILNonGenericInstanceMethSpecInTy;
exports.mkILStaticMethSpecInTy = mkILStaticMethSpecInTy;
exports.mkILNonGenericStaticMethSpecInTy = mkILNonGenericStaticMethSpecInTy;
exports.mkILCtorMethSpec = mkILCtorMethSpec;
exports.mkILCtorMethSpecForTy = mkILCtorMethSpecForTy;
exports.mkILNonGenericCtorMethSpec = mkILNonGenericCtorMethSpec;
exports.mkILFieldRef = mkILFieldRef;
exports.mkILFieldSpec = mkILFieldSpec;
exports.mkILFieldSpecInTy = mkILFieldSpecInTy;
exports.andTailness = andTailness;
exports.formatCodeLabel = formatCodeLabel;
exports.generateCodeLabel = generateCodeLabel;
exports.instrIsRet = instrIsRet;
exports.nonBranchingInstrsToCode = nonBranchingInstrsToCode;
exports.mkILTyvarTy = mkILTyvarTy;
exports.mkILSimpleTypar = mkILSimpleTypar;
exports.gparam_of_gactual = gparam_of_gactual;
exports.mkILFormalTypars = mkILFormalTypars;
exports.mkILFormalGenericArgs = mkILFormalGenericArgs;
exports.mkILFormalBoxedTy = mkILFormalBoxedTy;
exports.mkILFormalNamedTy = mkILFormalNamedTy;
exports.mkRefForNestedILTypeDef = mkRefForNestedILTypeDef;
exports.mkILPreTypeDef = mkILPreTypeDef;
exports.mkILPreTypeDefComputed = mkILPreTypeDefComputed;
exports.mkILPreTypeDefRead = mkILPreTypeDefRead;
exports.addILTypeDef = addILTypeDef;
exports.mkILTypeDefsFromArray = mkILTypeDefsFromArray;
exports.mkILTypeDefs = mkILTypeDefs;
exports.mkILTypeDefsComputed = mkILTypeDefsComputed;
exports.mkILMethodsFromArray = mkILMethodsFromArray;
exports.mkILMethods = mkILMethods;
exports.mkILMethodsComputed = mkILMethodsComputed;
exports.filterILMethodDefs = filterILMethodDefs;
exports.mkILArrTy = mkILArrTy;
exports.mkILArr1DTy = mkILArr1DTy;
exports.isILArrTy = isILArrTy;
exports.destILArrTy = destILArrTy;
exports.ILGlobals$$$$002Ector$$Z19479CC4 = ILGlobals$$$$002Ector$$Z19479CC4;
exports.ILGlobals$$get_primaryAssemblyScopeRef = ILGlobals$$get_primaryAssemblyScopeRef;
exports.ILGlobals$$get_primaryAssemblyName = ILGlobals$$get_primaryAssemblyName;
exports.ILGlobals$$get_typ_Object = ILGlobals$$get_typ_Object;
exports.ILGlobals$$get_typ_String = ILGlobals$$get_typ_String;
exports.ILGlobals$$get_typ_Array = ILGlobals$$get_typ_Array;
exports.ILGlobals$$get_typ_Type = ILGlobals$$get_typ_Type;
exports.ILGlobals$$get_typ_IntPtr = ILGlobals$$get_typ_IntPtr;
exports.ILGlobals$$get_typ_UIntPtr = ILGlobals$$get_typ_UIntPtr;
exports.ILGlobals$$get_typ_Byte = ILGlobals$$get_typ_Byte;
exports.ILGlobals$$get_typ_Int16 = ILGlobals$$get_typ_Int16;
exports.ILGlobals$$get_typ_Int32 = ILGlobals$$get_typ_Int32;
exports.ILGlobals$$get_typ_Int64 = ILGlobals$$get_typ_Int64;
exports.ILGlobals$$get_typ_SByte = ILGlobals$$get_typ_SByte;
exports.ILGlobals$$get_typ_UInt16 = ILGlobals$$get_typ_UInt16;
exports.ILGlobals$$get_typ_UInt32 = ILGlobals$$get_typ_UInt32;
exports.ILGlobals$$get_typ_UInt64 = ILGlobals$$get_typ_UInt64;
exports.ILGlobals$$get_typ_Single = ILGlobals$$get_typ_Single;
exports.ILGlobals$$get_typ_Double = ILGlobals$$get_typ_Double;
exports.ILGlobals$$get_typ_Bool = ILGlobals$$get_typ_Bool;
exports.ILGlobals$$get_typ_Char = ILGlobals$$get_typ_Char;
exports.ILGlobals$$get_DebugText = ILGlobals$$get_DebugText;
exports.mkILGlobals = mkILGlobals;
exports.mkNormalCall = mkNormalCall;
exports.mkNormalCallvirt = mkNormalCallvirt;
exports.mkNormalCallconstraint = mkNormalCallconstraint;
exports.mkNormalNewobj = mkNormalNewobj;
exports.mkLdarg = mkLdarg;
exports.mkLdloc = mkLdloc;
exports.mkStloc = mkStloc;
exports.mkLdcInt32 = mkLdcInt32;
exports.isILBoxedTy = isILBoxedTy;
exports.isILValueTy = isILValueTy;
exports.isPrimaryAssemblyTySpec = isPrimaryAssemblyTySpec;
exports.isILBoxedPrimaryAssemblyTy = isILBoxedPrimaryAssemblyTy;
exports.isILValuePrimaryAssemblyTy = isILValuePrimaryAssemblyTy;
exports.isILObjectTy = isILObjectTy;
exports.isILStringTy = isILStringTy;
exports.isILTypedReferenceTy = isILTypedReferenceTy;
exports.isILSByteTy = isILSByteTy;
exports.isILByteTy = isILByteTy;
exports.isILInt16Ty = isILInt16Ty;
exports.isILUInt16Ty = isILUInt16Ty;
exports.isILInt32Ty = isILInt32Ty;
exports.isILUInt32Ty = isILUInt32Ty;
exports.isILInt64Ty = isILInt64Ty;
exports.isILUInt64Ty = isILUInt64Ty;
exports.isILIntPtrTy = isILIntPtrTy;
exports.isILUIntPtrTy = isILUIntPtrTy;
exports.isILBoolTy = isILBoolTy;
exports.isILCharTy = isILCharTy;
exports.isILSingleTy = isILSingleTy;
exports.isILDoubleTy = isILDoubleTy;
exports.rescopeILScopeRef = rescopeILScopeRef;
exports.rescopeILTypeRef = rescopeILTypeRef;
exports.rescopeILTypeSpec = rescopeILTypeSpec;
exports.rescopeILType = rescopeILType;
exports.rescopeILTypes = rescopeILTypes;
exports.rescopeILCallSig = rescopeILCallSig;
exports.rescopeILMethodRef = rescopeILMethodRef;
exports.rescopeILFieldRef = rescopeILFieldRef;
exports.instILTypeSpecAux = instILTypeSpecAux;
exports.instILTypeAux = instILTypeAux;
exports.instILGenericArgsAux = instILGenericArgsAux;
exports.instILCallSigAux = instILCallSigAux;
exports.instILType = instILType;
exports.mkILParam = mkILParam;
exports.mkILParamNamed = mkILParamNamed;
exports.mkILParamAnon = mkILParamAnon;
exports.mkILReturn = mkILReturn;
exports.mkILLocal = mkILLocal;
exports.ILFieldSpec$$get_ActualType = ILFieldSpec$$get_ActualType;
exports.mkILMethodBody = mkILMethodBody;
exports.mkMethodBody = mkMethodBody;
exports.mkILCtor = mkILCtor;
exports.mkCallBaseConstructor = mkCallBaseConstructor;
exports.mkNormalStfld = mkNormalStfld;
exports.mkNormalStsfld = mkNormalStsfld;
exports.mkNormalLdsfld = mkNormalLdsfld;
exports.mkNormalLdfld = mkNormalLdfld;
exports.mkNormalLdflda = mkNormalLdflda;
exports.mkNormalLdobj = mkNormalLdobj;
exports.mkNormalStobj = mkNormalStobj;
exports.mkILNonGenericEmptyCtor = mkILNonGenericEmptyCtor;
exports.mkILStaticMethod = mkILStaticMethod;
exports.mkILNonGenericStaticMethod = mkILNonGenericStaticMethod;
exports.mkILClassCtor = mkILClassCtor;
exports.mk_ospec = mk_ospec;
exports.mkILGenericVirtualMethod = mkILGenericVirtualMethod;
exports.mkILNonGenericVirtualMethod = mkILNonGenericVirtualMethod;
exports.mkILGenericNonVirtualMethod = mkILGenericNonVirtualMethod;
exports.mkILNonGenericInstanceMethod = mkILNonGenericInstanceMethod;
exports.ilmbody_code2code = ilmbody_code2code;
exports.mdef_code2code = mdef_code2code;
exports.prependInstrsToCode = prependInstrsToCode;
exports.prependInstrsToMethod = prependInstrsToMethod;
exports.cdef_cctorCode2CodeOrCreate = cdef_cctorCode2CodeOrCreate;
exports.code_of_mdef = code_of_mdef;
exports.mkRefToILMethod = mkRefToILMethod;
exports.mkRefToILField = mkRefToILField;
exports.mkRefForILMethod = mkRefForILMethod;
exports.mkRefForILField = mkRefForILField;
exports.prependInstrsToClassCtor = prependInstrsToClassCtor;
exports.mkILField = mkILField;
exports.mkILInstanceField = mkILInstanceField;
exports.mkILStaticField = mkILStaticField;
exports.mkILLiteralField = mkILLiteralField;
exports.ILLocalsAllocator$$$$002Ector$$Z524259A4 = ILLocalsAllocator$$$$002Ector$$Z524259A4;
exports.ILLocalsAllocator$$AllocLocal$$6306688A = ILLocalsAllocator$$AllocLocal$$6306688A;
exports.ILLocalsAllocator$$Close = ILLocalsAllocator$$Close;
exports.mkILFieldsLazy = mkILFieldsLazy;
exports.mkILFields = mkILFields;
exports.mkILEventsLazy = mkILEventsLazy;
exports.mkILEvents = mkILEvents;
exports.mkILPropertiesLazy = mkILPropertiesLazy;
exports.mkILProperties = mkILProperties;
exports.addExportedTypeToTable = addExportedTypeToTable;
exports.mkILExportedTypes = mkILExportedTypes;
exports.mkILExportedTypesLazy = mkILExportedTypesLazy;
exports.addNestedExportedTypeToTable = addNestedExportedTypeToTable;
exports.mkTypeForwarder = mkTypeForwarder;
exports.mkILNestedExportedTypes = mkILNestedExportedTypes;
exports.mkILNestedExportedTypesLazy = mkILNestedExportedTypesLazy;
exports.mkILResources = mkILResources;
exports.addMethodImplToTable = addMethodImplToTable;
exports.mkILMethodImpls = mkILMethodImpls;
exports.mkILMethodImplsLazy = mkILMethodImplsLazy;
exports.mkILStorageCtorWithParamNames = mkILStorageCtorWithParamNames;
exports.mkILSimpleStorageCtorWithParamNames = mkILSimpleStorageCtorWithParamNames;
exports.addParamNames = addParamNames;
exports.mkILSimpleStorageCtor = mkILSimpleStorageCtor;
exports.mkILStorageCtor = mkILStorageCtor;
exports.mkILGenericClass = mkILGenericClass;
exports.mkRawDataValueTypeDef = mkRawDataValueTypeDef;
exports.mkILSimpleClass = mkILSimpleClass;
exports.mkILTypeDefForGlobalFunctions = mkILTypeDefForGlobalFunctions;
exports.destTypeDefsWithGlobalFunctionsFirst = destTypeDefsWithGlobalFunctionsFirst;
exports.mkILSimpleModule = mkILSimpleModule;
exports.buildILCode = buildILCode;
exports.mkILDelegateMethods = mkILDelegateMethods;
exports.mkCtorMethSpecForDelegate = mkCtorMethSpecForDelegate;
exports.getTyOfILEnumInfo = getTyOfILEnumInfo;
exports.computeILEnumInfo = computeILEnumInfo;
exports.sigptr_get_byte = sigptr_get_byte;
exports.sigptr_get_bool = sigptr_get_bool;
exports.sigptr_get_u8 = sigptr_get_u8;
exports.sigptr_get_i8 = sigptr_get_i8;
exports.sigptr_get_u16 = sigptr_get_u16;
exports.sigptr_get_i16 = sigptr_get_i16;
exports.sigptr_get_i32 = sigptr_get_i32;
exports.sigptr_get_u32 = sigptr_get_u32;
exports.sigptr_get_i64 = sigptr_get_i64;
exports.sigptr_get_u64 = sigptr_get_u64;
exports.float32_of_bits = float32_of_bits;
exports.float_of_bits = float_of_bits;
exports.sigptr_get_ieee32 = sigptr_get_ieee32;
exports.sigptr_get_ieee64 = sigptr_get_ieee64;
exports.sigptr_get_intarray = sigptr_get_intarray;
exports.sigptr_get_string = sigptr_get_string;
exports.sigptr_get_z_i32 = sigptr_get_z_i32;
exports.sigptr_get_serstring = sigptr_get_serstring;
exports.sigptr_get_serstring_possibly_null = sigptr_get_serstring_possibly_null;
exports.mkRefToILAssembly = mkRefToILAssembly;
exports.z_unsigned_int_size = z_unsigned_int_size;
exports.z_unsigned_int = z_unsigned_int;
exports.string_as_utf8_bytes = string_as_utf8_bytes;
exports.dw7 = dw7;
exports.dw6 = dw6;
exports.dw5 = dw5;
exports.dw4 = dw4;
exports.dw3 = dw3;
exports.dw2 = dw2;
exports.dw1 = dw1;
exports.dw0 = dw0;
exports.u8AsBytes = u8AsBytes;
exports.u16AsBytes = u16AsBytes;
exports.i32AsBytes = i32AsBytes;
exports.i64AsBytes = i64AsBytes;
exports.i8AsBytes = i8AsBytes;
exports.i16AsBytes = i16AsBytes;
exports.u32AsBytes = u32AsBytes;
exports.u64AsBytes = u64AsBytes;
exports.bits_of_float32 = bits_of_float32;
exports.bits_of_float = bits_of_float;
exports.ieee32AsBytes = ieee32AsBytes;
exports.ieee64AsBytes = ieee64AsBytes;
exports.formatILVersion = formatILVersion;
exports.encodeCustomAttrString = encodeCustomAttrString;
exports.encodeCustomAttrElemType = encodeCustomAttrElemType;
exports.encodeCustomAttrElemTypeForObject = encodeCustomAttrElemTypeForObject;
exports.decodeCustomAttrElemType = decodeCustomAttrElemType;
exports.encodeCustomAttrPrimValue = encodeCustomAttrPrimValue;
exports.encodeCustomAttrValue = encodeCustomAttrValue;
exports.encodeCustomAttrNamedArg = encodeCustomAttrNamedArg;
exports.mkILCustomAttribMethRef = mkILCustomAttribMethRef;
exports.mkILCustomAttribute = mkILCustomAttribute;
exports.mkPermissionSet = mkPermissionSet;
exports.ILTypeSigParser$$$$002Ector$$Z721C83C5 = ILTypeSigParser$$$$002Ector$$Z721C83C5;
exports.ILTypeSigParser$$ParseTypeSpec = ILTypeSigParser$$ParseTypeSpec;
exports.decodeILAttribData = decodeILAttribData;
exports.refs_of_assref = refs_of_assref;
exports.refs_of_modref = refs_of_modref;
exports.refs_of_scoref = refs_of_scoref;
exports.refs_of_tref = refs_of_tref;
exports.refs_of_typ = refs_of_typ;
exports.refs_of_inst = refs_of_inst;
exports.refs_of_tspec = refs_of_tspec;
exports.refs_of_callsig = refs_of_callsig;
exports.refs_of_genparam = refs_of_genparam;
exports.refs_of_genparams = refs_of_genparams;
exports.refs_of_dloc = refs_of_dloc;
exports.refs_of_mref = refs_of_mref;
exports.refs_of_fref = refs_of_fref;
exports.refs_of_ospec = refs_of_ospec;
exports.refs_of_mspec = refs_of_mspec;
exports.refs_of_fspec = refs_of_fspec;
exports.refs_of_tys = refs_of_tys;
exports.refs_of_token = refs_of_token;
exports.refs_of_custom_attr = refs_of_custom_attr;
exports.refs_of_custom_attrs = refs_of_custom_attrs;
exports.refs_of_varargs = refs_of_varargs;
exports.refs_of_instr = refs_of_instr;
exports.refs_of_il_code = refs_of_il_code;
exports.refs_of_ilmbody = refs_of_ilmbody;
exports.refs_of_local = refs_of_local;
exports.refs_of_mbody = refs_of_mbody;
exports.refs_of_mdef = refs_of_mdef;
exports.refs_of_param = refs_of_param;
exports.refs_of_return = refs_of_return;
exports.refs_of_mdefs = refs_of_mdefs;
exports.refs_of_event_def = refs_of_event_def;
exports.refs_of_events = refs_of_events;
exports.refs_of_property_def = refs_of_property_def;
exports.refs_of_properties = refs_of_properties;
exports.refs_of_fdef = refs_of_fdef;
exports.refs_of_fields = refs_of_fields;
exports.refs_of_method_impls = refs_of_method_impls;
exports.refs_of_method_impl = refs_of_method_impl;
exports.refs_of_tdef_kind = refs_of_tdef_kind;
exports.refs_of_tdef = refs_of_tdef;
exports.refs_of_string = refs_of_string;
exports.refs_of_types = refs_of_types;
exports.refs_of_exported_type = refs_of_exported_type;
exports.refs_of_exported_types = refs_of_exported_types;
exports.refs_of_resource_where = refs_of_resource_where;
exports.refs_of_resource = refs_of_resource;
exports.refs_of_resources = refs_of_resources;
exports.refs_of_modul = refs_of_modul;
exports.refs_of_manifest = refs_of_manifest;
exports.computeILRefs = computeILRefs;
exports.parseILVersion = parseILVersion;
exports.compareILVersions = compareILVersions;
exports.unscopeILTypeRef = unscopeILTypeRef;
exports.unscopeILTypeSpec = unscopeILTypeSpec;
exports.unscopeILType = unscopeILType;
exports.unscopeILTypes = unscopeILTypes;
exports.unscopeILCallSig = unscopeILCallSig;
exports.resolveILMethodRefWithRescope = resolveILMethodRefWithRescope;
exports.resolveILMethodRef = resolveILMethodRef;
exports.mkRefToILModule = mkRefToILModule;
exports.ungenericizeTypeName = ungenericizeTypeName;
exports.ILEventRef$$$Create$$33BE2BB5 = ILEventRef$$$Create$$33BE2BB5;
exports.ILEventRef$$get_DeclaringTypeRef = ILEventRef$$get_DeclaringTypeRef;
exports.ILEventRef$$get_Name = ILEventRef$$get_Name;
exports.ILPropertyRef$$$Create$$33BE2BB5 = ILPropertyRef$$$Create$$33BE2BB5;
exports.ILPropertyRef$$get_DeclaringTypeRef = ILPropertyRef$$get_DeclaringTypeRef;
exports.ILPropertyRef$$get_Name = ILPropertyRef$$get_Name;
exports.ILTypeDef = exports.ILTypeDefStored = exports.ILTypeDefKind = exports.ILTypeDefAccess = exports.ILDefaultPInvokeEncoding = exports.ILTypeInit = exports.ILTypeDefLayoutInfo = exports.ILTypeDefLayout = exports.ILMethodImplDefs = exports.ILMethodImplDef = exports.ILFieldDefs = exports.ILFieldDef = exports.ILPropertyDefs = exports.ILPropertyDef = exports.ILEventDefs = exports.ILEventDef = exports.ILMethodDefs = exports.ILMethodDef = exports.NoMetadataIdx = exports.ILGenericParameterDef = exports.ILGenericVariance = exports.MethodCodeKind = exports.ILLazyMethodBody = exports.MethodBody = exports.MethodKind = exports.ILMethodVirtualInfo = exports.ILOverridesSpec = exports.ILReturn = exports.ILParameter = exports.PInvokeMethod = exports.PInvokeCharEncoding = exports.PInvokeCallingConvention = exports.PInvokeThrowOnUnmappableChar = exports.PInvokeCharBestFit = exports.emptyILSecurityDeclsStored = exports.emptyILSecurityDecls = exports.ILSecurityDeclsStored = exports.ILSecurityDecls = exports.ILSecurityDecl = exports.ILSecurityAction = exports.ILNativeVariant = exports.ILNativeType = exports.ILFieldInit = exports.ILMemberAccess = exports.ILMethodBody = exports.ILLocal = exports.ILCode = exports.ILLocalDebugInfo = exports.ILLocalDebugMapping = exports.ILExceptionSpec = exports.ILExceptionClause = exports.ILInstr = exports.ILComparisonInstr = exports.ILReadonly = exports.ILVolatility = exports.ILAlignment = exports.ILTailcall = exports.ILConst = exports.ILToken = exports.ILBasicType = exports.emptyILCustomAttrsStored = exports.emptyILCustomAttrs = exports.ILAttributesStored = exports.ILAttributes = exports.ILAttribute = exports.ILAttribElem = exports.ILSourceMarker = exports.ILSourceDocument = exports.ILPlatform = exports.ILFieldSpec = exports.ILMethodSpec = exports.ILFieldRef = exports.ILMethodRef = exports.ILCallingSignature = exports.ILType = exports.ILTypeSpec = exports.ILTypeRef = exports.ILBoxity = exports.ILCallingConvStatics = exports.ILCallingConv = exports.ILThisConvention = exports.ILArgConvention = exports.ILArrayShapeStatics = exports.ILArrayShape = exports.ILScopeRef = exports.ILModuleRef = exports.ILAssemblyRef = exports.AssemblyRefUniqueStampGenerator = exports.AssemblyRefData = exports.PublicKey = exports.SHA1$002ESHAStream = exports.LazyOrderedMultiMap$00602 = exports.emptyStringArray = exports.memoizeNamespaceArrayTable = exports.memoizeNamespaceRightTable = exports.memoizeNamespaceTable = exports.PrimaryAssembly = exports.int_order = exports.runningOnMono = exports.logging = void 0;
exports.ILPropertyRef = exports.ILEventRef = exports.tspan = exports.emptyILRefs = exports.ILReferencesAccumulator = exports.ILReferences = exports.ILTypeSigParser = exports.EcmaMscorlibILGlobals = exports.MscorlibScopeRef = exports.et_CMOD_OPT = exports.et_CMOD_REQD = exports.et_MVAR = exports.et_SZARRAY = exports.et_OBJECT = exports.et_FNPTR = exports.et_U = exports.et_I = exports.et_TYPEDBYREF = exports.et_WITH = exports.et_ARRAY = exports.et_VAR = exports.et_CLASS = exports.et_VALUETYPE = exports.et_BYREF = exports.et_PTR = exports.et_STRING = exports.et_R8 = exports.et_R4 = exports.et_U8 = exports.et_I8 = exports.et_U4 = exports.et_I4 = exports.et_U2 = exports.et_I2 = exports.et_U1 = exports.et_I1 = exports.et_CHAR = exports.et_BOOLEAN = exports.et_VOID = exports.et_END = exports.ILEnumInfo = exports.emptyILMethodImpls = exports.emptyILProperties = exports.emptyILEvents = exports.emptyILFields = exports.ILLocalsAllocator = exports.methBodyNative = exports.methBodyAbstract = exports.methBodyNotAvailable = exports.mkILVoidReturn = exports.ecmaPublicKey = exports.tname_DebuggableAttribute = exports.tname_CompilerGeneratedAttribute = exports.ldi32s = exports.stlocs = exports.ldlocs = exports.mkLdarg0 = exports.ldargs = exports.ILGlobals = exports.defaultImageBase = exports.defaultVirtAlignment = exports.defaultPhysAlignment = exports.defaultSubSystem = exports.emptyILMethods = exports.emptyILTypeDefs = exports.codeLabelCount = exports.typeNameForGlobalFunctions = exports.emptyILGenericArgsList = exports.mkILEmptyGenericParams = exports.ILModuleDef = exports.ILNativeResource = exports.ILAssemblyManifest = exports.ILAssemblyLongevity = exports.ILResources = exports.ILResource = exports.ILResourceLocation = exports.ILResourceAccess = exports.ILExportedTypesAndForwarders = exports.ILExportedTypeOrForwarder = exports.ILNestedExportedTypes = exports.ILNestedExportedType = exports.ILPreTypeDef = exports.ILTypeDefs = void 0;

var _ildiag = require("./ildiag");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

var _Util = require("../fable-core.2.0.3/Util");

var _Types = require("../fable-core.2.0.3/Types");

var _adapters = require("../fcs-fable/adapters");

var _Array = require("../fable-core.2.0.3/Array");

var _String = require("../fable-core.2.0.3/String");

var _illib = require("./illib");

var _FSharp2 = require("../fable-core.2.0.3/FSharp.Collections");

var _Map = require("../fable-core.2.0.3/Map");

var _List = require("../fable-core.2.0.3/List");

var _Long = require("../fable-core.2.0.3/Long");

var _System = require("../fable-core.2.0.3/System.Text");

var _Option = require("../fable-core.2.0.3/Option");

var _Seq = require("../fable-core.2.0.3/Seq");

var _bytes = require("./bytes");

var _ResizeArray = require("../utils/ResizeArray");

var _BitConverter = require("../fable-core.2.0.3/BitConverter");

var _Encoding = require("../fable-core.2.0.3/Encoding");

var _Int = require("../fable-core.2.0.3/Int32");

var _Set = require("../fable-core.2.0.3/Set");

var _Date = require("../fable-core.2.0.3/Date");

var _TimeSpan = require("../fable-core.2.0.3/TimeSpan");

const logging = false;
exports.logging = logging;
const runningOnMono = false;
exports.runningOnMono = runningOnMono;

if (logging) {
  (0, _ildiag.dprintn)("* warning: Il.logging is on");
}

const int_order = (0, _FSharp.LanguagePrimitives$$$FastGenericComparer)();
exports.int_order = int_order;

function notlazy(v) {
  return (0, _Util.lazyFromValue)(v);
}

function lazyMap(f, x) {
  if (x.IsValueCreated) {
    return notlazy(f(x.Value));
  } else {
    return new _Util.Lazy(function () {
      return f(x.Value);
    });
  }
}

const PrimaryAssembly = (0, _Types.declare)(function PrimaryAssembly(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.PrimaryAssembly = PrimaryAssembly;

function PrimaryAssembly$$get_Name(this$) {
  switch (this$.tag) {
    case 1:
      {
        return "System.Runtime";
      }

    case 2:
      {
        return "netstandard";
      }

    default:
      {
        return "mscorlib";
      }
  }
}

function PrimaryAssembly$$$IsSomePrimaryAssembly$$Z721C83C5(n) {
  if (n === PrimaryAssembly$$get_Name(new PrimaryAssembly(0, "Mscorlib")) ? true : n === PrimaryAssembly$$get_Name(new PrimaryAssembly(1, "System_Runtime"))) {
    return true;
  } else {
    return n === PrimaryAssembly$$get_Name(new PrimaryAssembly(2, "NetStandard"));
  }
}

function splitNameAt(nm, idx) {
  if (idx < 0) {
    throw new Error("splitNameAt: idx < 0");
  }

  const last = nm.length - 1 | 0;

  if (idx > last) {
    throw new Error("splitNameAt: idx > last");
  }

  return [nm.substr(0, idx), idx < last ? nm.substr(idx + 1, last - idx) : ""];
}

function splitNamespaceAux(nm$$1) {
  const matchValue = nm$$1.indexOf(".") | 0;

  if (matchValue === -1) {
    return (0, _Types.L)(nm$$1, (0, _Types.L)());
  } else {
    const idx$$1 = matchValue | 0;
    const patternInput = splitNameAt(nm$$1, idx$$1);
    return (0, _Types.L)(patternInput[0], splitNamespaceAux(patternInput[1]));
  }
}

const memoizeNamespaceTable = (0, _adapters.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector)();
exports.memoizeNamespaceTable = memoizeNamespaceTable;
const memoizeNamespaceRightTable = (0, _adapters.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector)();
exports.memoizeNamespaceRightTable = memoizeNamespaceRightTable;

function splitNamespace(nm$$2) {
  return (0, _adapters.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$GetOrAdd$$Z1F9F2CFE)(memoizeNamespaceTable, nm$$2, splitNamespaceAux);
}

function splitNamespaceMemoized(nm$$4) {
  return splitNamespace(nm$$4);
}

const memoizeNamespaceArrayTable = (0, _adapters.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector)();
exports.memoizeNamespaceArrayTable = memoizeNamespaceArrayTable;

function splitNamespaceToArray(nm$$5) {
  return (0, _adapters.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$GetOrAdd$$Z1F9F2CFE)(memoizeNamespaceArrayTable, nm$$5, function (nm$$6) {
    const x$$1 = (0, _Array.ofList)(splitNamespace(nm$$6), Array);
    return x$$1;
  });
}

function splitILTypeName(nm$$7) {
  const matchValue$$1 = nm$$7.lastIndexOf(".") | 0;

  if (matchValue$$1 === -1) {
    return [(0, _Types.L)(), nm$$7];
  } else {
    const idx$$2 = matchValue$$1 | 0;
    const patternInput$$1 = splitNameAt(nm$$7, idx$$2);
    return [splitNamespace(patternInput$$1[0]), patternInput$$1[1]];
  }
}

const emptyStringArray = [];
exports.emptyStringArray = emptyStringArray;

function splitILTypeNameWithPossibleStaticArguments(nm$$8) {
  var s;
  let patternInput$$3;
  const matchValue$$2 = nm$$8.indexOf(",") | 0;

  if (matchValue$$2 === -1) {
    patternInput$$3 = [nm$$8, null];
  } else {
    const idx$$3 = matchValue$$2 | 0;
    const patternInput$$2 = splitNameAt(nm$$8, idx$$3);
    patternInput$$3 = [patternInput$$2[0], patternInput$$2[1]];
  }

  let patternInput$$5;
  const matchValue$$3 = patternInput$$3[0].lastIndexOf(".") | 0;

  if (matchValue$$3 === -1) {
    patternInput$$5 = [emptyStringArray, patternInput$$3[0]];
  } else {
    const idx$$4 = matchValue$$3 | 0;
    const patternInput$$4 = splitNameAt(patternInput$$3[0], idx$$4);
    patternInput$$5 = [splitNamespaceToArray(patternInput$$4[0]), patternInput$$4[1]];
  }

  return [patternInput$$5[0], patternInput$$3[1] != null ? (s = patternInput$$3[1], patternInput$$5[1] + "," + s) : patternInput$$5[1]];
}

function unsplitTypeName(ns, n$$1) {
  if (ns.tail == null) {
    return (0, _String.join)(".", ...ns) + "." + n$$1;
  } else {
    return n$$1;
  }
}

function splitTypeNameRightAux(nm$$11) {
  if ((0, _illib.String$$$contains)(nm$$11, ".")) {
    const idx$$5 = (0, _illib.String$$$rindex)(nm$$11, ".") | 0;
    const patternInput$$6 = splitNameAt(nm$$11, idx$$5);
    return [patternInput$$6[0], patternInput$$6[1]];
  } else {
    return [null, nm$$11];
  }
}

function splitTypeNameRight(nm$$12) {
  return (0, _adapters.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$GetOrAdd$$Z1F9F2CFE)(memoizeNamespaceRightTable, nm$$12, splitTypeNameRightAux);
}

const LazyOrderedMultiMap$00602 = (0, _Types.declare)(function LazyOrderedMultiMap$00602(keyf, lazyItems) {
  const $this$$1 = this;
  $this$$1.keyf = keyf;
  $this$$1.lazyItems = lazyItems;
  $this$$1.quickMap = lazyMap(function f$$1(entries) {
    const t = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp2.HashIdentity$$$Structural)()));
    (0, _List.iterate)(function action(y) {
      const key = $this$$1.keyf(y);
      let v$$2;
      const matchValue$$4 = (0, _Util.tryGetValue)(t, key, null);
      v$$2 = matchValue$$4[0] ? matchValue$$4[1] : (0, _Types.L)();
      t.set(key, (0, _Types.L)(y, v$$2));
    }, entries);
    return t;
  }, $this$$1.lazyItems);
});
exports.LazyOrderedMultiMap$00602 = LazyOrderedMultiMap$00602;

function LazyOrderedMultiMap$00602$$$$002Ector$$48A8A99B(keyf, lazyItems) {
  return this != null ? LazyOrderedMultiMap$00602.call(this, keyf, lazyItems) : new LazyOrderedMultiMap$00602(keyf, lazyItems);
}

function LazyOrderedMultiMap$00602$$Entries(self$) {
  return self$.lazyItems.Value;
}

function LazyOrderedMultiMap$00602$$Add$$2B594(self$$$1, y$$1) {
  return LazyOrderedMultiMap$00602$$$$002Ector$$48A8A99B(self$$$1.keyf, lazyMap(function f$$2(x$$3) {
    return (0, _Types.L)(y$$1, x$$3);
  }, self$$$1.lazyItems));
}

function LazyOrderedMultiMap$00602$$Filter$$Z3AD716D8(self$$$2, f$$3) {
  return LazyOrderedMultiMap$00602$$$$002Ector$$48A8A99B(self$$$2.keyf, lazyMap(function f$$4(list$$1) {
    return (0, _List.filter)(f$$3, list$$1);
  }, self$$$2.lazyItems));
}

function LazyOrderedMultiMap$00602$$get_Item$$2B595(self$$$3, x$$6) {
  const matchValue$$5 = (0, _Util.tryGetValue)(self$$$3.quickMap.Value, x$$6, null);

  if (matchValue$$5[0]) {
    return matchValue$$5[1];
  } else {
    return (0, _Types.L)();
  }
}

function b0(n$$2) {
  return n$$2 & 255;
}

function b1(n$$3) {
  return n$$3 >> 8 & 255;
}

function b2(n$$4) {
  return n$$4 >> 16 & 255;
}

function b3(n$$5) {
  return n$$5 >> 24 & 255;
}

function SHA1$$$f(t$$1, b, c, d) {
  if (t$$1 < 20) {
    return b & c | ~b & d | 0;
  } else if (t$$1 < 40) {
    return b ^ (c ^ d) | 0;
  } else if (t$$1 < 60) {
    return b & c | b & d | c & d | 0;
  } else {
    return b ^ (c ^ d) | 0;
  }
}

function SHA1$$$k(t$$2) {
  if (t$$2 < 20) {
    return 1518500249;
  } else if (t$$2 < 40) {
    return 1859775393;
  } else if (t$$2 < 60) {
    return -1894007588 | 0;
  } else {
    return -899497514 | 0;
  }
}

const SHA1$002ESHAStream = (0, _Types.declare)(function SHA1$002ESHAStream(arg1, arg2, arg3) {
  this.stream = arg1;
  this.pos = arg2 | 0;
  this.eof = arg3;
}, _Types.Record);
exports.SHA1$002ESHAStream = SHA1$002ESHAStream;

function SHA1$$$rotLeft32(x$$7, n$$6) {
  return x$$7 << n$$6 | ~~(x$$7 >>> 0 >>> 32 - n$$6);
}

function SHA1$$$shaAfterEof(sha) {
  const n$$7 = sha.pos | 0;
  const len = sha.stream.length | 0;

  if (n$$7 === len) {
    return 128;
  } else {
    const padded_len = ~~((len + 9 + 63) / 64) * 64 - 8 | 0;

    if (n$$7 < padded_len - 8) {
      return 0;
    } else if ((n$$7 & 63) === 56) {
      return ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_Multiply)((0, _Long.fromInteger)(len, false, 2), (0, _Long.fromInteger)(8, false, 2)), 56)) & 255 | 0;
    } else if ((n$$7 & 63) === 57) {
      return ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_Multiply)((0, _Long.fromInteger)(len, false, 2), (0, _Long.fromInteger)(8, false, 2)), 48)) & 255 | 0;
    } else if ((n$$7 & 63) === 58) {
      return ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_Multiply)((0, _Long.fromInteger)(len, false, 2), (0, _Long.fromInteger)(8, false, 2)), 40)) & 255 | 0;
    } else if ((n$$7 & 63) === 59) {
      return ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_Multiply)((0, _Long.fromInteger)(len, false, 2), (0, _Long.fromInteger)(8, false, 2)), 32)) & 255 | 0;
    } else if ((n$$7 & 63) === 60) {
      return ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_Multiply)((0, _Long.fromInteger)(len, false, 2), (0, _Long.fromInteger)(8, false, 2)), 24)) & 255 | 0;
    } else if ((n$$7 & 63) === 61) {
      return ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_Multiply)((0, _Long.fromInteger)(len, false, 2), (0, _Long.fromInteger)(8, false, 2)), 16)) & 255 | 0;
    } else if ((n$$7 & 63) === 62) {
      return ~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)((0, _Long.op_Multiply)((0, _Long.fromInteger)(len, false, 2), (0, _Long.fromInteger)(8, false, 2)), 8)) & 255 | 0;
    } else if ((n$$7 & 63) === 63) {
      sha.eof = true;
      return ~~(0, _Long.toIntNumber)((0, _Long.op_Multiply)((0, _Long.fromInteger)(len, false, 2), (0, _Long.fromInteger)(8, false, 2))) & 255 | 0;
    } else {
      return 0;
    }
  }
}

function SHA1$$$shaRead8(sha$$1) {
  const s$$1 = sha$$1.stream;
  const b$$1 = (sha$$1.pos >= s$$1.length ? SHA1$$$shaAfterEof(sha$$1) : ~~s$$1[sha$$1.pos]) | 0;
  sha$$1.pos = sha$$1.pos + 1;
  return b$$1 | 0;
}

function SHA1$$$shaRead32(sha$$2) {
  const b0$$1 = SHA1$$$shaRead8(sha$$2) | 0;
  const b1$$1 = SHA1$$$shaRead8(sha$$2) | 0;
  const b2$$1 = SHA1$$$shaRead8(sha$$2) | 0;
  const b3$$1 = SHA1$$$shaRead8(sha$$2) | 0;
  const res = b0$$1 << 24 | b1$$1 << 16 | b2$$1 << 8 | b3$$1 | 0;
  return res | 0;
}

function SHA1$$$sha1Hash(sha$$3) {
  let h0 = 1732584193;
  let h1 = -271733879 | 0;
  let h2 = -1732584194 | 0;
  let h3 = 271733878;
  let h4 = -1009589776 | 0;
  let a = 0;
  let b$$2 = 0;
  let c$$1 = 0;
  let d$$1 = 0;
  let e = 0;
  const w = (0, _Array.fill)(new Int32Array(80), 0, 80, 0);

  while (!sha$$3.eof) {
    for (let i = 0; i <= 15; i++) {
      w[i] = SHA1$$$shaRead32(sha$$3);
    }

    for (let t$$3 = 16; t$$3 <= 79; t$$3++) {
      w[t$$3] = SHA1$$$rotLeft32(w[t$$3 - 3] ^ (w[t$$3 - 8] ^ (w[t$$3 - 14] ^ w[t$$3 - 16])), 1);
    }

    a = h0;
    b$$2 = h1;
    c$$1 = h2;
    d$$1 = h3;
    e = h4;

    for (let t$$4 = 0; t$$4 <= 79; t$$4++) {
      const temp = SHA1$$$rotLeft32(a, 5) + SHA1$$$f(t$$4, b$$2, c$$1, d$$1) + e + w[t$$4] + SHA1$$$k(t$$4) | 0;
      e = d$$1;
      d$$1 = c$$1;
      c$$1 = SHA1$$$rotLeft32(b$$2, 30);
      b$$2 = a;
      a = temp;
    }

    h0 = h0 + a;
    h1 = h1 + b$$2;
    h2 = h2 + c$$1;
    h3 = h3 + d$$1;
    h4 = h4 + e;
  }

  return [h0, h1, h2, h3, h4];
}

function SHA1$$$sha1HashBytes(s$$2) {
  const patternInput$$7 = SHA1$$$sha1Hash(new SHA1$002ESHAStream(s$$2, 0, false));
  return (0, _Array.map)(function (value) {
    return value & 0xFF;
  }, new Int32Array([b0(patternInput$$7[4]), b1(patternInput$$7[4]), b2(patternInput$$7[4]), b3(patternInput$$7[4]), b0(patternInput$$7[3]), b1(patternInput$$7[3]), b2(patternInput$$7[3]), b3(patternInput$$7[3])]), Uint8Array);
}

function sha1HashBytes(s$$3) {
  return SHA1$$$sha1HashBytes(s$$3);
}

const PublicKey = (0, _Types.declare)(function PublicKey(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.PublicKey = PublicKey;

function PublicKey$$get_IsKey(x$$9) {
  if (x$$9.tag === 0) {
    return true;
  } else {
    return false;
  }
}

function PublicKey$$get_IsKeyToken(x$$10) {
  if (x$$10.tag === 1) {
    return true;
  } else {
    return false;
  }
}

function PublicKey$$get_Key(x$$11) {
  if (x$$11.tag === 0) {
    const b$$3 = x$$11.fields[0];
    return b$$3;
  } else {
    throw new Error("not a key");
  }
}

function PublicKey$$get_KeyToken(x$$12) {
  if (x$$12.tag === 1) {
    const b$$4 = x$$12.fields[0];
    return b$$4;
  } else {
    throw new Error("not a key token");
  }
}

function PublicKey$$ToToken(x$$13) {
  if (x$$13.tag === 1) {
    const token = x$$13.fields[0];
    return token;
  } else {
    const bytes = x$$13.fields[0];
    return SHA1$$$sha1HashBytes(bytes);
  }
}

function PublicKey$$$KeyAsToken$$6C95DA22(k) {
  return new PublicKey(1, "PublicKeyToken", PublicKey$$ToToken(new PublicKey(0, "PublicKey", k)));
}

const AssemblyRefData = (0, _Types.declare)(function AssemblyRefData(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.assemRefName = arg1;
  this.assemRefHash = arg2;
  this.assemRefPublicKeyInfo = arg3;
  this.assemRefRetargetable = arg4;
  this.assemRefVersion = arg5;
  this.assemRefLocale = arg6;
}, _Types.Record);
exports.AssemblyRefData = AssemblyRefData;
const AssemblyRefUniqueStampGenerator = (0, _illib.UniqueStampGenerator$00601$$$$002Ector)();
exports.AssemblyRefUniqueStampGenerator = AssemblyRefUniqueStampGenerator;

function isMscorlib(data) {
  return data.assemRefName === "mscorlib";
}

const ILAssemblyRef = (0, _Types.declare)(function ILAssemblyRef(data$$1) {
  const $this$$2 = this;
  $this$$2.data = data$$1;
  $this$$2.uniqueStamp = (0, _illib.UniqueStampGenerator$00601$$Encode$$2B595)(AssemblyRefUniqueStampGenerator, $this$$2.data);
});
exports.ILAssemblyRef = ILAssemblyRef;

function ILAssemblyRef$$$$002Ector$$272E701D(data$$1) {
  return this != null ? ILAssemblyRef.call(this, data$$1) : new ILAssemblyRef(data$$1);
}

function ILAssemblyRef$$get_Name(x$$14) {
  return x$$14.data.assemRefName;
}

function ILAssemblyRef$$get_Hash(x$$15) {
  return x$$15.data.assemRefHash;
}

function ILAssemblyRef$$get_PublicKey(x$$16) {
  return x$$16.data.assemRefPublicKeyInfo;
}

function ILAssemblyRef$$get_Retargetable(x$$17) {
  return x$$17.data.assemRefRetargetable;
}

function ILAssemblyRef$$get_Version(x$$18) {
  return x$$18.data.assemRefVersion;
}

function ILAssemblyRef$$get_Locale(x$$19) {
  return x$$19.data.assemRefLocale;
}

function ILAssemblyRef$$get_UniqueStamp(x$$20) {
  return x$$20.uniqueStamp;
}

ILAssemblyRef.prototype.GetHashCode = function () {
  const x$$21 = this;
  return x$$21.uniqueStamp | 0;
};

ILAssemblyRef.prototype.Equals = function (yobj) {
  const x$$22 = this;
  return ILAssemblyRef$$get_UniqueStamp(yobj) === x$$22.uniqueStamp;
};

function ILAssemblyRef$$$Create$$2BC8E713(name, hash, publicKey, retargetable, version, locale) {
  return ILAssemblyRef$$$$002Ector$$272E701D(new AssemblyRefData(name, hash, publicKey, retargetable, version, locale));
}

function ILAssemblyRef$$get_QualifiedName(aref) {
  const b$$5 = (0, _System.StringBuilder$$$$002Ector$$Z524259A4)(100);

  const add = function add(s$$4) {
    (0, _System.StringBuilder$$Append$$Z721C83C5)(b$$5, s$$4);
  };

  const addC = function addC(s$$5) {
    (0, _System.StringBuilder$$Append$$Z721C83C5)(b$$5, s$$5);
  };

  add(ILAssemblyRef$$get_Name(aref));
  const matchValue$$6 = ILAssemblyRef$$get_Version(aref);

  if (matchValue$$6 != null) {
    const d$$2 = matchValue$$6[3];
    const c$$2 = matchValue$$6[2];
    const b$$6 = matchValue$$6[1];
    const a$$1 = matchValue$$6[0];
    add(", Version=");
    add((0, _Util.int32ToString)(~~a$$1));
    add(".");
    add((0, _Util.int32ToString)(~~b$$6));
    add(".");
    add((0, _Util.int32ToString)(~~c$$2));
    add(".");
    add((0, _Util.int32ToString)(~~d$$2));
    add(", Culture=");
    const matchValue$$7 = ILAssemblyRef$$get_Locale(aref);

    if (matchValue$$7 != null) {
      const b$$7 = matchValue$$7;
      add(b$$7);
    } else {
      add("neutral");
    }

    add(", PublicKeyToken=");
    const matchValue$$8 = ILAssemblyRef$$get_PublicKey(aref);

    if (matchValue$$8 != null) {
      const pki = matchValue$$8;
      const pkt = PublicKey$$ToToken(pki);

      const convDigit = function convDigit(digit) {
        const digitc = (digit < 10 ? "0".charCodeAt(0) + digit : "a".charCodeAt(0) + (digit - 10)) | 0;
        return String.fromCharCode(digitc);
      };

      for (let i$$1 = 0; i$$1 <= pkt.length - 1; i$$1++) {
        const v$$4 = pkt[i$$1];
        addC(convDigit(~~(~~v$$4 / 16)));
        addC(convDigit(~~v$$4 % 16));
      }
    } else {
      add("null");
    }

    if (ILAssemblyRef$$get_Retargetable(aref)) {
      add(", Retargetable=Yes");
    }
  }

  return (0, _Util.toString)(b$$5);
}

ILAssemblyRef.prototype.CompareTo = function (yobj$$1) {
  const x$$23 = this;
  return (0, _Util.comparePrimitives)(ILAssemblyRef$$get_UniqueStamp(yobj$$1), x$$23.uniqueStamp) | 0;
};

const ILModuleRef = (0, _Types.declare)(function ILModuleRef(arg1, arg2, arg3) {
  this.name = arg1;
  this.hasMetadata = arg2;
  this.hash = arg3;
}, _Types.Record);
exports.ILModuleRef = ILModuleRef;

function ILModuleRef$$$Create$$10F6F906(name$$1, hasMetadata, hash$$1) {
  return new ILModuleRef(name$$1, hasMetadata, hash$$1);
}

function ILModuleRef$$get_Name(x$$24) {
  return x$$24.name;
}

function ILModuleRef$$get_HasMetadata(x$$25) {
  return x$$25.hasMetadata;
}

function ILModuleRef$$get_Hash(x$$26) {
  return x$$26.hash;
}

const ILScopeRef = (0, _Types.declare)(function ILScopeRef(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILScopeRef = ILScopeRef;

function ILScopeRef$$get_IsLocalRef(x$$27) {
  if (x$$27.tag === 0) {
    return true;
  } else {
    return false;
  }
}

function ILScopeRef$$get_IsModuleRef(x$$28) {
  if (x$$28.tag === 1) {
    return true;
  } else {
    return false;
  }
}

function ILScopeRef$$get_IsAssemblyRef(x$$29) {
  if (x$$29.tag === 2) {
    return true;
  } else {
    return false;
  }
}

function ILScopeRef$$get_ModuleRef(x$$30) {
  if (x$$30.tag === 1) {
    const x$$31 = x$$30.fields[0];
    return x$$31;
  } else {
    throw new Error("not a module reference");
  }
}

function ILScopeRef$$get_AssemblyRef(x$$32) {
  if (x$$32.tag === 2) {
    const x$$33 = x$$32.fields[0];
    return x$$33;
  } else {
    throw new Error("not an assembly reference");
  }
}

function ILScopeRef$$get_QualifiedName(x$$34) {
  switch (x$$34.tag) {
    case 1:
      {
        const mref = x$$34.fields[0];
        return "module " + ILModuleRef$$get_Name(mref);
      }

    case 2:
      {
        const aref$$1 = x$$34.fields[0];
        return ILAssemblyRef$$get_QualifiedName(aref$$1);
      }

    default:
      {
        return "";
      }
  }
}

const ILArrayShape = (0, _Types.declare)(function ILArrayShape(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILArrayShape = ILArrayShape;

function ILArrayShape$$get_Rank(x$$35) {
  const l = x$$35.fields[0];
  return (0, _List.length)(l) | 0;
}

function ILArrayShape$$$get_SingleDimensional() {
  return ILArrayShapeStatics$$$get_SingleDimensional();
}

function ILArrayShape$$$FromRank$$Z524259A4(n$$8) {
  if (n$$8 === 1) {
    return ILArrayShape$$$get_SingleDimensional();
  } else {
    return new ILArrayShape(0, "ILArrayShape", (0, _List.replicate)(n$$8, [0, null]));
  }
}

const ILArrayShapeStatics = (0, _Types.declare)(function ILArrayShapeStatics() {});
exports.ILArrayShapeStatics = ILArrayShapeStatics;

function ILArrayShapeStatics$$$$002Ector() {
  return this != null ? ILArrayShapeStatics.call(this) : new ILArrayShapeStatics();
}

(function ILArrayShapeStatics$$$$002Ecctor() {
  ILArrayShapeStatics.singleDimensional = new ILArrayShape(0, "ILArrayShape", (0, _Types.L)([0, null], (0, _Types.L)()));
})();

function ILArrayShapeStatics$$$get_SingleDimensional() {
  return ILArrayShapeStatics.singleDimensional;
}

const ILArgConvention = (0, _Types.declare)(function ILArgConvention(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILArgConvention = ILArgConvention;
const ILThisConvention = (0, _Types.declare)(function ILThisConvention(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILThisConvention = ILThisConvention;
const ILCallingConv = (0, _Types.declare)(function ILCallingConv(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILCallingConv = ILCallingConv;

function ILCallingConv$$get_ThisConv(x$$36) {
  const a$$2 = x$$36.fields[0];
  const _b = x$$36.fields[1];
  return a$$2;
}

function ILCallingConv$$get_BasicConv(x$$37) {
  const b$$8 = x$$37.fields[1];
  const _a = x$$37.fields[0];
  return b$$8;
}

function ILCallingConv$$get_IsInstance(x$$38) {
  if (ILCallingConv$$get_ThisConv(x$$38).tag === 0) {
    return true;
  } else {
    return false;
  }
}

function ILCallingConv$$get_IsInstanceExplicit(x$$39) {
  if (ILCallingConv$$get_ThisConv(x$$39).tag === 1) {
    return true;
  } else {
    return false;
  }
}

function ILCallingConv$$get_IsStatic(x$$40) {
  if (ILCallingConv$$get_ThisConv(x$$40).tag === 2) {
    return true;
  } else {
    return false;
  }
}

function ILCallingConv$$$get_Instance() {
  return ILCallingConvStatics$$$get_Instance();
}

function ILCallingConv$$$get_Static() {
  return ILCallingConvStatics$$$get_Static();
}

const ILCallingConvStatics = (0, _Types.declare)(function ILCallingConvStatics() {});
exports.ILCallingConvStatics = ILCallingConvStatics;

function ILCallingConvStatics$$$$002Ector() {
  return this != null ? ILCallingConvStatics.call(this) : new ILCallingConvStatics();
}

(function ILCallingConvStatics$$$$002Ecctor() {
  ILCallingConvStatics.instanceCallConv = new ILCallingConv(0, "Callconv", new ILThisConvention(0, "Instance"), new ILArgConvention(0, "Default"));
  ILCallingConvStatics.staticCallConv = new ILCallingConv(0, "Callconv", new ILThisConvention(2, "Static"), new ILArgConvention(0, "Default"));
})();

function ILCallingConvStatics$$$get_Instance() {
  return ILCallingConvStatics.instanceCallConv;
}

function ILCallingConvStatics$$$get_Static() {
  return ILCallingConvStatics.staticCallConv;
}

const ILBoxity = (0, _Types.declare)(function ILBoxity(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILBoxity = ILBoxity;
const ILTypeRef = (0, _Types.declare)(function ILTypeRef(arg1, arg2, arg3, arg4, arg5) {
  this.trefScope = arg1;
  this.trefEnclosing = arg2;
  this.trefName = arg3;
  this.hashCode = arg4 | 0;
  this.asBoxedType = arg5;
}, _Types.Record);
exports.ILTypeRef = ILTypeRef;
const ILTypeSpec = (0, _Types.declare)(function ILTypeSpec(arg1, arg2) {
  this.tspecTypeRef = arg1;
  this.tspecInst = arg2;
}, _Types.Record);
exports.ILTypeSpec = ILTypeSpec;
const ILType = (0, _Types.declare)(function ILType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILType = ILType;
const ILCallingSignature = (0, _Types.declare)(function ILCallingSignature(arg1, arg2, arg3) {
  this.CallingConv = arg1;
  this.ArgTypes = arg2;
  this.ReturnType = arg3;
}, _Types.Record);
exports.ILCallingSignature = ILCallingSignature;

function ILTypeRef$$$Create$$113F1D6(scope, enclosing, name$$2) {
  const hashCode = (0, _Util.structuralHash)(scope) * 17 ^ ((0, _Util.structuralHash)(enclosing) * 101 << 1 ^ (0, _Util.structuralHash)(name$$2) * 47 << 2) | 0;
  return new ILTypeRef(scope, enclosing, name$$2, hashCode, null);
}

function ILTypeRef$$get_Scope(x$$41) {
  return x$$41.trefScope;
}

function ILTypeRef$$get_Enclosing(x$$42) {
  return x$$42.trefEnclosing;
}

function ILTypeRef$$get_Name(x$$43) {
  return x$$43.trefName;
}

function ILTypeRef$$get_ApproxId(x$$44) {
  return x$$44.hashCode;
}

function ILTypeRef$$AsBoxedType$$Z41A1D4C6(x$$45, tspec) {
  if (tspec.tspecInst.tail == null) {
    const v$$5 = x$$45.asBoxedType;

    if ((0, _Util.equals)(v$$5, null)) {
      const r = new ILType(3, "Boxed", tspec);
      x$$45.asBoxedType = r;
      return r;
    } else {
      return v$$5;
    }
  } else {
    return new ILType(3, "Boxed", tspec);
  }
}

ILTypeRef.prototype.GetHashCode = function () {
  const x$$46 = this;
  return x$$46.hashCode | 0;
};

ILTypeRef.prototype.Equals = function (yobj$$2) {
  const x$$47 = this;
  const y$$3 = yobj$$2;
  return ((ILTypeRef$$get_ApproxId(x$$47) === ILTypeRef$$get_ApproxId(y$$3) ? (0, _Util.equals)(ILTypeRef$$get_Scope(x$$47), ILTypeRef$$get_Scope(y$$3)) : false) ? ILTypeRef$$get_Name(x$$47) === ILTypeRef$$get_Name(y$$3) : false) ? (0, _Util.equals)(ILTypeRef$$get_Enclosing(x$$47), ILTypeRef$$get_Enclosing(y$$3)) : false;
};

function ILTypeRef$$get_FullName(tref) {
  return (0, _String.join)(".", ...(0, _List.append)(ILTypeRef$$get_Enclosing(tref), (0, _Types.L)(ILTypeRef$$get_Name(tref), (0, _Types.L)())));
}

function ILTypeRef$$get_BasicQualifiedName(tref$$1) {
  return (0, _String.replace)((0, _String.join)("+", ...(0, _List.append)(ILTypeRef$$get_Enclosing(tref$$1), (0, _Types.L)(ILTypeRef$$get_Name(tref$$1), (0, _Types.L)()))), ",", "\\,");
}

function ILTypeRef$$AddQualifiedNameExtension$$Z721C83C5(tref$$2, basic) {
  const sco = ILScopeRef$$get_QualifiedName(ILTypeRef$$get_Scope(tref$$2));

  if (sco === "") {
    return basic;
  } else {
    return (0, _String.join)(", ", ...[basic, sco]);
  }
}

function ILTypeRef$$get_QualifiedName(tref$$3) {
  return ILTypeRef$$AddQualifiedNameExtension$$Z721C83C5(tref$$3, ILTypeRef$$get_BasicQualifiedName(tref$$3));
}

function ILTypeRef$$get_DebugText(x$$48) {
  return x$$48.toString();
}

ILTypeRef.prototype.toString = function () {
  const x$$49 = this;
  return ILTypeRef$$get_FullName(x$$49);
};

ILTypeRef.prototype.CompareTo = function (yobj$$3) {
  const x$$50 = this;
  const y$$4 = yobj$$3;
  const c$$3 = (0, _Util.comparePrimitives)(ILTypeRef$$get_ApproxId(x$$50), ILTypeRef$$get_ApproxId(y$$4)) | 0;

  if (c$$3 !== 0) {
    return c$$3 | 0;
  } else {
    const c$$4 = ILTypeRef$$get_Scope(x$$50).CompareTo(ILTypeRef$$get_Scope(y$$4)) | 0;

    if (c$$4 !== 0) {
      return c$$4 | 0;
    } else {
      const c$$5 = (0, _Util.comparePrimitives)(ILTypeRef$$get_Name(x$$50), ILTypeRef$$get_Name(y$$4)) | 0;
      return (c$$5 !== 0 ? c$$5 : (0, _Util.compare)(ILTypeRef$$get_Enclosing(x$$50), ILTypeRef$$get_Enclosing(y$$4))) | 0;
    }
  }
};

function ILTypeSpec$$get_TypeRef(x$$51) {
  return x$$51.tspecTypeRef;
}

function ILTypeSpec$$get_Scope(x$$52) {
  return ILTypeRef$$get_Scope(ILTypeSpec$$get_TypeRef(x$$52));
}

function ILTypeSpec$$get_Enclosing(x$$53) {
  return ILTypeRef$$get_Enclosing(ILTypeSpec$$get_TypeRef(x$$53));
}

function ILTypeSpec$$get_Name(x$$54) {
  return ILTypeRef$$get_Name(ILTypeSpec$$get_TypeRef(x$$54));
}

function ILTypeSpec$$get_GenericArgs(x$$55) {
  return x$$55.tspecInst;
}

function ILTypeSpec$$$Create$$7469E1FB(tref$$4, inst) {
  return new ILTypeSpec(tref$$4, inst);
}

function ILTypeSpec$$get_BasicQualifiedName(x$$56) {
  const tc = ILTypeRef$$get_BasicQualifiedName(ILTypeSpec$$get_TypeRef(x$$56));

  if (ILTypeSpec$$get_GenericArgs(x$$56).tail == null) {
    return tc;
  } else {
    return tc + "[" + (0, _String.join)(",", ...(0, _List.map)(function mapping(arg) {
      return "[" + ILType$$get_QualifiedName(arg) + "]";
    }, ILTypeSpec$$get_GenericArgs(x$$56))) + "]";
  }
}

function ILTypeSpec$$AddQualifiedNameExtension$$Z721C83C5(x$$57, basic$$1) {
  return ILTypeRef$$AddQualifiedNameExtension$$Z721C83C5(ILTypeSpec$$get_TypeRef(x$$57), basic$$1);
}

function ILTypeSpec$$get_FullName(x$$58) {
  return ILTypeRef$$get_FullName(ILTypeSpec$$get_TypeRef(x$$58));
}

function ILTypeSpec$$get_DebugText(x$$59) {
  return x$$59.toString();
}

ILTypeSpec.prototype.toString = function () {
  const x$$60 = this;
  return ILTypeSpec$$get_TypeRef(x$$60).toString() + (ILTypeSpec$$get_GenericArgs(x$$60).tail == null ? "" : "<...>");
};

function ILType$$get_BasicQualifiedName(x$$61) {
  var $target$$41, tr;

  switch (x$$61.tag) {
    case 8:
      $target$$41 = 1;
      break;

    case 1:
      $target$$41 = 2;
      break;

    case 2:
      $target$$41 = 3;
      tr = x$$61.fields[0];
      break;

    case 3:
      $target$$41 = 3;
      tr = x$$61.fields[0];
      break;

    case 0:
      $target$$41 = 4;
      break;

    case 4:
      $target$$41 = 5;
      break;

    case 5:
      $target$$41 = 6;
      break;

    case 6:
      $target$$41 = 7;
      break;

    default:
      $target$$41 = 0;
  }

  switch ($target$$41) {
    case 0:
      {
        const n$$9 = x$$61.fields[0];
        return "!" + n$$9.toString();
      }

    case 1:
      {
        const ty2 = x$$61.fields[2];
        const _ty1 = x$$61.fields[1];
        return ILType$$get_BasicQualifiedName(ty2);
      }

    case 2:
      {
        const ty = x$$61.fields[1];
        const s$$6 = x$$61.fields[0].fields[0];
        return ILType$$get_BasicQualifiedName(ty) + "[" + Array((0, _List.length)(s$$6) - 1 + 1).join(",") + "]";
      }

    case 3:
      {
        return ILTypeSpec$$get_BasicQualifiedName(tr);
      }

    case 4:
      {
        return "void";
      }

    case 5:
      {
        const _ty = x$$61.fields[0];
        throw new Error("unexpected pointer type");
      }

    case 6:
      {
        const _ty$$1 = x$$61.fields[0];
        throw new Error("unexpected byref type");
      }

    case 7:
      {
        const _mref = x$$61.fields[0];
        throw new Error("unexpected function pointer type");
      }
  }
}

function ILType$$AddQualifiedNameExtension$$Z721C83C5(x$$62, basic$$2) {
  ILType$$AddQualifiedNameExtension$$Z721C83C5: while (true) {
    var $target$$42, tr$$1;

    switch (x$$62.tag) {
      case 8:
        $target$$42 = 1;
        break;

      case 1:
        $target$$42 = 2;
        break;

      case 2:
        $target$$42 = 3;
        tr$$1 = x$$62.fields[0];
        break;

      case 3:
        $target$$42 = 3;
        tr$$1 = x$$62.fields[0];
        break;

      case 0:
        $target$$42 = 4;
        break;

      case 4:
        $target$$42 = 5;
        break;

      case 5:
        $target$$42 = 6;
        break;

      case 6:
        $target$$42 = 7;
        break;

      default:
        $target$$42 = 0;
    }

    switch ($target$$42) {
      case 0:
        {
          const _n = x$$62.fields[0];
          return basic$$2;
        }

      case 1:
        {
          const ty2$$1 = x$$62.fields[2];
          const _ty1$$1 = x$$62.fields[1];
          x$$62 = ty2$$1;
          basic$$2 = basic$$2;
          continue ILType$$AddQualifiedNameExtension$$Z721C83C5;
        }

      case 2:
        {
          const ty$$1 = x$$62.fields[1];
          const _s = x$$62.fields[0].fields[0];
          x$$62 = ty$$1;
          basic$$2 = basic$$2;
          continue ILType$$AddQualifiedNameExtension$$Z721C83C5;
        }

      case 3:
        {
          return ILTypeSpec$$AddQualifiedNameExtension$$Z721C83C5(tr$$1, basic$$2);
        }

      case 4:
        {
          throw new Error("void");
        }

      case 5:
        {
          const _ty$$2 = x$$62.fields[0];
          throw new Error("unexpected pointer type");
        }

      case 6:
        {
          const _ty$$3 = x$$62.fields[0];
          throw new Error("unexpected byref type");
        }

      case 7:
        {
          const _mref$$1 = x$$62.fields[0];
          throw new Error("unexpected function pointer type");
        }
    }
  }
}

function ILType$$get_QualifiedName(x$$63) {
  return ILType$$AddQualifiedNameExtension$$Z721C83C5(x$$63, ILType$$get_BasicQualifiedName(x$$63));
}

function ILType$$get_TypeSpec(x$$64) {
  var $target$$43, tr$$2;

  switch (x$$64.tag) {
    case 3:
      $target$$43 = 0;
      tr$$2 = x$$64.fields[0];
      break;

    case 2:
      $target$$43 = 0;
      tr$$2 = x$$64.fields[0];
      break;

    default:
      $target$$43 = 1;
  }

  switch ($target$$43) {
    case 0:
      {
        return tr$$2;
      }

    case 1:
      {
        throw new Error("not a nominal type");
      }
  }
}

function ILType$$get_Boxity(x$$65) {
  switch (x$$65.tag) {
    case 3:
      {
        return new ILBoxity(0, "AsObject");
      }

    case 2:
      {
        return new ILBoxity(1, "AsValue");
      }

    default:
      {
        throw new Error("not a nominal type");
      }
  }
}

function ILType$$get_TypeRef(x$$66) {
  var $target$$44, tspec$$1;

  switch (x$$66.tag) {
    case 3:
      $target$$44 = 0;
      tspec$$1 = x$$66.fields[0];
      break;

    case 2:
      $target$$44 = 0;
      tspec$$1 = x$$66.fields[0];
      break;

    default:
      $target$$44 = 1;
  }

  switch ($target$$44) {
    case 0:
      {
        return ILTypeSpec$$get_TypeRef(tspec$$1);
      }

    case 1:
      {
        throw new Error("not a nominal type");
      }
  }
}

function ILType$$get_IsNominal(x$$67) {
  var $target$$45;

  switch (x$$67.tag) {
    case 3:
    case 2:
      $target$$45 = 0;
      break;

    default:
      $target$$45 = 1;
  }

  switch ($target$$45) {
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

function ILType$$get_GenericArgs(x$$68) {
  var $target$$46, tspec$$2;

  switch (x$$68.tag) {
    case 3:
      $target$$46 = 0;
      tspec$$2 = x$$68.fields[0];
      break;

    case 2:
      $target$$46 = 0;
      tspec$$2 = x$$68.fields[0];
      break;

    default:
      $target$$46 = 1;
  }

  switch ($target$$46) {
    case 0:
      {
        return ILTypeSpec$$get_GenericArgs(tspec$$2);
      }

    case 1:
      {
        return (0, _Types.L)();
      }
  }
}

function ILType$$get_IsTyvar(x$$69) {
  if (x$$69.tag === 7) {
    return true;
  } else {
    return false;
  }
}

function ILType$$get_DebugText(x$$70) {
  return x$$70.toString();
}

ILType.prototype.toString = function () {
  const x$$71 = this;
  return ILType$$get_QualifiedName(x$$71);
};

function mkILCallSig(cc, args, ret) {
  return new ILCallingSignature(cc, args, ret);
}

function mkILBoxedType(tspec$$3) {
  return ILTypeRef$$AsBoxedType$$Z41A1D4C6(ILTypeSpec$$get_TypeRef(tspec$$3), tspec$$3);
}

const ILMethodRef = (0, _Types.declare)(function ILMethodRef(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.mrefParent = arg1;
  this.mrefCallconv = arg2;
  this.mrefGenericArity = arg3 | 0;
  this.mrefName = arg4;
  this.mrefArgs = arg5;
  this.mrefReturn = arg6;
}, _Types.Record);
exports.ILMethodRef = ILMethodRef;

function ILMethodRef$$get_DeclaringTypeRef(x$$72) {
  return x$$72.mrefParent;
}

function ILMethodRef$$get_CallingConv(x$$73) {
  return x$$73.mrefCallconv;
}

function ILMethodRef$$get_Name(x$$74) {
  return x$$74.mrefName;
}

function ILMethodRef$$get_GenericArity(x$$75) {
  return x$$75.mrefGenericArity;
}

function ILMethodRef$$get_ArgCount(x$$76) {
  return (0, _List.length)(x$$76.mrefArgs);
}

function ILMethodRef$$get_ArgTypes(x$$77) {
  return x$$77.mrefArgs;
}

function ILMethodRef$$get_ReturnType(x$$78) {
  return x$$78.mrefReturn;
}

function ILMethodRef$$get_CallingSignature(x$$79) {
  return mkILCallSig(ILMethodRef$$get_CallingConv(x$$79), ILMethodRef$$get_ArgTypes(x$$79), ILMethodRef$$get_ReturnType(x$$79));
}

function ILMethodRef$$$Create$$Z6DE7B28E(a$$3, b$$9, c$$6, d$$3, e$$1, f$$5) {
  return new ILMethodRef(a$$3, b$$9, d$$3, c$$6, e$$1, f$$5);
}

function ILMethodRef$$get_DebugText(x$$80) {
  return x$$80.toString();
}

ILMethodRef.prototype.toString = function () {
  const x$$81 = this;
  return ILMethodRef$$get_DeclaringTypeRef(x$$81).toString() + "::" + ILMethodRef$$get_Name(x$$81) + "(...)";
};

const ILFieldRef = (0, _Types.declare)(function ILFieldRef(arg1, arg2, arg3) {
  this.DeclaringTypeRef = arg1;
  this.Name = arg2;
  this.Type = arg3;
}, _Types.Record);
exports.ILFieldRef = ILFieldRef;

function ILFieldRef$$get_DebugText(x$$82) {
  return x$$82.toString();
}

ILFieldRef.prototype.toString = function () {
  const x$$83 = this;
  return x$$83.DeclaringTypeRef.toString() + "::" + x$$83.Name;
};

const ILMethodSpec = (0, _Types.declare)(function ILMethodSpec(arg1, arg2, arg3) {
  this.mspecMethodRef = arg1;
  this.mspecDeclaringType = arg2;
  this.mspecMethodInst = arg3;
}, _Types.Record);
exports.ILMethodSpec = ILMethodSpec;

function ILMethodSpec$$$Create$$4D2FDCE3(a$$4, b$$10, c$$7) {
  return new ILMethodSpec(b$$10, a$$4, c$$7);
}

function ILMethodSpec$$get_MethodRef(x$$84) {
  return x$$84.mspecMethodRef;
}

function ILMethodSpec$$get_DeclaringType(x$$85) {
  return x$$85.mspecDeclaringType;
}

function ILMethodSpec$$get_GenericArgs(x$$86) {
  return x$$86.mspecMethodInst;
}

function ILMethodSpec$$get_Name(x$$87) {
  return ILMethodRef$$get_Name(ILMethodSpec$$get_MethodRef(x$$87));
}

function ILMethodSpec$$get_CallingConv(x$$88) {
  return ILMethodRef$$get_CallingConv(ILMethodSpec$$get_MethodRef(x$$88));
}

function ILMethodSpec$$get_GenericArity(x$$89) {
  return ILMethodRef$$get_GenericArity(ILMethodSpec$$get_MethodRef(x$$89));
}

function ILMethodSpec$$get_FormalArgTypes(x$$90) {
  return ILMethodRef$$get_ArgTypes(ILMethodSpec$$get_MethodRef(x$$90));
}

function ILMethodSpec$$get_FormalReturnType(x$$91) {
  return ILMethodRef$$get_ReturnType(ILMethodSpec$$get_MethodRef(x$$91));
}

function ILMethodSpec$$get_DebugText(x$$92) {
  return x$$92.toString();
}

ILMethodSpec.prototype.toString = function () {
  const x$$93 = this;
  return ILMethodSpec$$get_MethodRef(x$$93).toString() + "(...)";
};

const ILFieldSpec = (0, _Types.declare)(function ILFieldSpec(arg1, arg2) {
  this.FieldRef = arg1;
  this.DeclaringType = arg2;
}, _Types.Record);
exports.ILFieldSpec = ILFieldSpec;

function ILFieldSpec$$get_FormalType(x$$94) {
  return x$$94.FieldRef.Type;
}

function ILFieldSpec$$get_Name(x$$95) {
  return x$$95.FieldRef.Name;
}

function ILFieldSpec$$get_DeclaringTypeRef(x$$96) {
  return x$$96.FieldRef.DeclaringTypeRef;
}

function ILFieldSpec$$get_DebugText(x$$97) {
  return x$$97.toString();
}

ILFieldSpec.prototype.toString = function () {
  const x$$98 = this;
  return x$$98.FieldRef.toString();
};

const ILPlatform = (0, _Types.declare)(function ILPlatform(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILPlatform = ILPlatform;
const ILSourceDocument = (0, _Types.declare)(function ILSourceDocument(arg1, arg2, arg3, arg4) {
  this.sourceLanguage = arg1;
  this.sourceVendor = arg2;
  this.sourceDocType = arg3;
  this.sourceFile = arg4;
}, _Types.Record);
exports.ILSourceDocument = ILSourceDocument;

function ILSourceDocument$$$Create$$Z127DAF94(language, vendor, docType, file) {
  return new ILSourceDocument(language, vendor, docType, file);
}

function ILSourceDocument$$get_Language(x$$99) {
  return x$$99.sourceLanguage;
}

function ILSourceDocument$$get_Vendor(x$$100) {
  return x$$100.sourceVendor;
}

function ILSourceDocument$$get_DocumentType(x$$101) {
  return x$$101.sourceDocType;
}

function ILSourceDocument$$get_File(x$$102) {
  return x$$102.sourceFile;
}

const ILSourceMarker = (0, _Types.declare)(function ILSourceMarker(arg1, arg2, arg3, arg4, arg5) {
  this.sourceDocument = arg1;
  this.sourceLine = arg2 | 0;
  this.sourceColumn = arg3 | 0;
  this.sourceEndLine = arg4 | 0;
  this.sourceEndColumn = arg5 | 0;
}, _Types.Record);
exports.ILSourceMarker = ILSourceMarker;

function ILSourceMarker$$$Create$$50F496D5(document, line, column, endLine, endColumn) {
  return new ILSourceMarker(document, line, column, endLine, endColumn);
}

function ILSourceMarker$$get_Document(x$$103) {
  return x$$103.sourceDocument;
}

function ILSourceMarker$$get_Line(x$$104) {
  return x$$104.sourceLine;
}

function ILSourceMarker$$get_Column(x$$105) {
  return x$$105.sourceColumn;
}

function ILSourceMarker$$get_EndLine(x$$106) {
  return x$$106.sourceEndLine;
}

function ILSourceMarker$$get_EndColumn(x$$107) {
  return x$$107.sourceEndColumn;
}

function ILSourceMarker$$get_DebugText(x$$108) {
  return x$$108.toString();
}

ILSourceMarker.prototype.toString = function () {
  const x$$109 = this;
  return (0, _String.toText)((0, _String.printf)("(%d, %d)-(%d, %d)"))(ILSourceMarker$$get_Line(x$$109))(ILSourceMarker$$get_Column(x$$109))(ILSourceMarker$$get_EndLine(x$$109))(ILSourceMarker$$get_EndColumn(x$$109));
};

const ILAttribElem = (0, _Types.declare)(function ILAttribElem(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILAttribElem = ILAttribElem;
const ILAttribute = (0, _Types.declare)(function ILAttribute(arg1, arg2, arg3) {
  this.Method = arg1;
  this.Data = arg2;
  this.Elements = arg3;
}, _Types.Record);
exports.ILAttribute = ILAttribute;

function ILAttribute$$get_DebugText(x$$110) {
  return x$$110.toString();
}

ILAttribute.prototype.toString = function () {
  const x$$111 = this;
  return x$$111.Method.toString() + "(...)";
};

const ILAttributes = (0, _Types.declare)(function ILAttributes(array) {
  const $this$$5 = this;
  $this$$5.array = array;
}, _Types.Record);
exports.ILAttributes = ILAttributes;

function ILAttributes$$$$002Ector$$Z529E0E03(array) {
  return this != null ? ILAttributes.call(this, array) : new ILAttributes(array);
}

function ILAttributes$$get_AsArray(x$$112) {
  return x$$112.array;
}

function ILAttributes$$get_AsList(x$$113) {
  return (0, _Array.toList)(ILAttributes$$get_AsArray(x$$113));
}

const ILAttributesStored = (0, _Types.declare)(function ILAttributesStored(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILAttributesStored = ILAttributesStored;

function ILAttributesStored$$GetCustomAttrs$$Z524259A4(x$$114, metadataIndex) {
  if (x$$114.tag === 1) {
    const attrs = x$$114.fields[0];
    return attrs;
  } else {
    const f$$6 = x$$114.fields[0];
    return ILAttributes$$$$002Ector$$Z529E0E03(f$$6(metadataIndex));
  }
}

const emptyILCustomAttrs = ILAttributes$$$$002Ector$$Z529E0E03([]);
exports.emptyILCustomAttrs = emptyILCustomAttrs;

function mkILCustomAttrsFromArray(attrs$$1) {
  if (attrs$$1.length === 0) {
    return emptyILCustomAttrs;
  } else {
    return ILAttributes$$$$002Ector$$Z529E0E03(attrs$$1);
  }
}

function mkILCustomAttrs(l$$4) {
  if (l$$4.tail == null) {
    return emptyILCustomAttrs;
  } else {
    return mkILCustomAttrsFromArray((0, _Array.ofList)(l$$4, Array));
  }
}

const emptyILCustomAttrsStored = new ILAttributesStored(1, "Given", emptyILCustomAttrs);
exports.emptyILCustomAttrsStored = emptyILCustomAttrsStored;

function storeILCustomAttrs(attrs$$2) {
  if (ILAttributes$$get_AsArray(attrs$$2).length === 0) {
    return emptyILCustomAttrsStored;
  } else {
    return new ILAttributesStored(1, "Given", attrs$$2);
  }
}

function mkILCustomAttrsReader(f$$7) {
  return new ILAttributesStored(0, "Reader", f$$7);
}

const ILBasicType = (0, _Types.declare)(function ILBasicType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILBasicType = ILBasicType;
const ILToken = (0, _Types.declare)(function ILToken(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILToken = ILToken;
const ILConst = (0, _Types.declare)(function ILConst(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILConst = ILConst;
const ILTailcall = (0, _Types.declare)(function ILTailcall(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILTailcall = ILTailcall;
const ILAlignment = (0, _Types.declare)(function ILAlignment(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILAlignment = ILAlignment;
const ILVolatility = (0, _Types.declare)(function ILVolatility(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILVolatility = ILVolatility;
const ILReadonly = (0, _Types.declare)(function ILReadonly(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILReadonly = ILReadonly;
const ILComparisonInstr = (0, _Types.declare)(function ILComparisonInstr(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILComparisonInstr = ILComparisonInstr;
const ILInstr = (0, _Types.declare)(function ILInstr(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILInstr = ILInstr;
const ILExceptionClause = (0, _Types.declare)(function ILExceptionClause(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILExceptionClause = ILExceptionClause;
const ILExceptionSpec = (0, _Types.declare)(function ILExceptionSpec(arg1, arg2) {
  this.Range = arg1;
  this.Clause = arg2;
}, _Types.Record);
exports.ILExceptionSpec = ILExceptionSpec;
const ILLocalDebugMapping = (0, _Types.declare)(function ILLocalDebugMapping(arg1, arg2) {
  this.LocalIndex = arg1 | 0;
  this.LocalName = arg2;
}, _Types.Record);
exports.ILLocalDebugMapping = ILLocalDebugMapping;
const ILLocalDebugInfo = (0, _Types.declare)(function ILLocalDebugInfo(arg1, arg2) {
  this.Range = arg1;
  this.DebugMappings = arg2;
}, _Types.Record);
exports.ILLocalDebugInfo = ILLocalDebugInfo;
const ILCode = (0, _Types.declare)(function ILCode(arg1, arg2, arg3, arg4) {
  this.Labels = arg1;
  this.Instrs = arg2;
  this.Exceptions = arg3;
  this.Locals = arg4;
}, _Types.Record);
exports.ILCode = ILCode;
const ILLocal = (0, _Types.declare)(function ILLocal(arg1, arg2, arg3) {
  this.Type = arg1;
  this.IsPinned = arg2;
  this.DebugInfo = arg3;
}, _Types.Record);
exports.ILLocal = ILLocal;
const ILMethodBody = (0, _Types.declare)(function ILMethodBody(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.IsZeroInit = arg1;
  this.MaxStack = arg2 | 0;
  this.NoInlining = arg3;
  this.AggressiveInlining = arg4;
  this.Locals = arg5;
  this.Code = arg6;
  this.SourceMarker = arg7;
}, _Types.Record);
exports.ILMethodBody = ILMethodBody;
const ILMemberAccess = (0, _Types.declare)(function ILMemberAccess(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILMemberAccess = ILMemberAccess;
const ILFieldInit = (0, _Types.declare)(function ILFieldInit(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILFieldInit = ILFieldInit;
const ILNativeType = (0, _Types.declare)(function ILNativeType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILNativeType = ILNativeType;
const ILNativeVariant = (0, _Types.declare)(function ILNativeVariant(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILNativeVariant = ILNativeVariant;
const ILSecurityAction = (0, _Types.declare)(function ILSecurityAction(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILSecurityAction = ILSecurityAction;
const ILSecurityDecl = (0, _Types.declare)(function ILSecurityDecl(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILSecurityDecl = ILSecurityDecl;
const ILSecurityDecls = (0, _Types.declare)(function ILSecurityDecls(array$$2) {
  const $this$$6 = this;
  $this$$6.array = array$$2;
}, _Types.Record);
exports.ILSecurityDecls = ILSecurityDecls;

function ILSecurityDecls$$$$002Ector$$Z761CFD87(array$$2) {
  return this != null ? ILSecurityDecls.call(this, array$$2) : new ILSecurityDecls(array$$2);
}

function ILSecurityDecls$$get_AsArray(x$$115) {
  return x$$115.array;
}

function ILSecurityDecls$$get_AsList(x$$116) {
  return (0, _Array.toList)(ILSecurityDecls$$get_AsArray(x$$116));
}

const ILSecurityDeclsStored = (0, _Types.declare)(function ILSecurityDeclsStored(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILSecurityDeclsStored = ILSecurityDeclsStored;

function ILSecurityDeclsStored$$GetSecurityDecls$$Z524259A4(x$$117, metadataIndex$$1) {
  if (x$$117.tag === 1) {
    const attrs$$3 = x$$117.fields[0];
    return attrs$$3;
  } else {
    const f$$8 = x$$117.fields[0];
    return ILSecurityDecls$$$$002Ector$$Z761CFD87(f$$8(metadataIndex$$1));
  }
}

const emptyILSecurityDecls = ILSecurityDecls$$$$002Ector$$Z761CFD87([]);
exports.emptyILSecurityDecls = emptyILSecurityDecls;
const emptyILSecurityDeclsStored = new ILSecurityDeclsStored(1, "Given", emptyILSecurityDecls);
exports.emptyILSecurityDeclsStored = emptyILSecurityDeclsStored;

function mkILSecurityDecls(l$$5) {
  if (l$$5.tail == null) {
    return emptyILSecurityDecls;
  } else {
    return ILSecurityDecls$$$$002Ector$$Z761CFD87((0, _Array.ofList)(l$$5, Array));
  }
}

function storeILSecurityDecls(x$$118) {
  if (ILSecurityDecls$$get_AsArray(x$$118).length === 0) {
    return emptyILSecurityDeclsStored;
  } else {
    return new ILSecurityDeclsStored(1, "Given", x$$118);
  }
}

function mkILSecurityDeclsReader(f$$9) {
  return new ILSecurityDeclsStored(0, "Reader", f$$9);
}

const PInvokeCharBestFit = (0, _Types.declare)(function PInvokeCharBestFit(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.PInvokeCharBestFit = PInvokeCharBestFit;
const PInvokeThrowOnUnmappableChar = (0, _Types.declare)(function PInvokeThrowOnUnmappableChar(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.PInvokeThrowOnUnmappableChar = PInvokeThrowOnUnmappableChar;
const PInvokeCallingConvention = (0, _Types.declare)(function PInvokeCallingConvention(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.PInvokeCallingConvention = PInvokeCallingConvention;
const PInvokeCharEncoding = (0, _Types.declare)(function PInvokeCharEncoding(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.PInvokeCharEncoding = PInvokeCharEncoding;
const PInvokeMethod = (0, _Types.declare)(function PInvokeMethod(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this.Where = arg1;
  this.Name = arg2;
  this.CallingConv = arg3;
  this.CharEncoding = arg4;
  this.NoMangle = arg5;
  this.LastError = arg6;
  this.ThrowOnUnmappableChar = arg7;
  this.CharBestFit = arg8;
}, _Types.Record);
exports.PInvokeMethod = PInvokeMethod;
const ILParameter = (0, _Types.declare)(function ILParameter(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.Name = arg1;
  this.Type = arg2;
  this.Default = arg3;
  this.Marshal = arg4;
  this.IsIn = arg5;
  this.IsOut = arg6;
  this.IsOptional = arg7;
  this.CustomAttrsStored = arg8;
  this.MetadataIndex = arg9 | 0;
}, _Types.Record);
exports.ILParameter = ILParameter;

function ILParameter$$get_CustomAttrs(x$$119) {
  return ILAttributesStored$$GetCustomAttrs$$Z524259A4(x$$119.CustomAttrsStored, x$$119.MetadataIndex);
}

const ILReturn = (0, _Types.declare)(function ILReturn(arg1, arg2, arg3, arg4) {
  this.Marshal = arg1;
  this.Type = arg2;
  this.CustomAttrsStored = arg3;
  this.MetadataIndex = arg4 | 0;
}, _Types.Record);
exports.ILReturn = ILReturn;

function ILReturn$$get_CustomAttrs(x$$120) {
  return ILAttributesStored$$GetCustomAttrs$$Z524259A4(x$$120.CustomAttrsStored, x$$120.MetadataIndex);
}

function ILReturn$$WithCustomAttrs$$6A1A3D88(x$$121, customAttrs) {
  return new ILReturn(x$$121.Marshal, x$$121.Type, storeILCustomAttrs(customAttrs), x$$121.MetadataIndex);
}

const ILOverridesSpec = (0, _Types.declare)(function ILOverridesSpec(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILOverridesSpec = ILOverridesSpec;

function ILOverridesSpec$$get_MethodRef(x$$122) {
  const mr = x$$122.fields[0];
  const _ty$$4 = x$$122.fields[1];
  return mr;
}

function ILOverridesSpec$$get_DeclaringType(x$$123) {
  const ty$$2 = x$$123.fields[1];
  const _mr = x$$123.fields[0];
  return ty$$2;
}

const ILMethodVirtualInfo = (0, _Types.declare)(function ILMethodVirtualInfo(arg1, arg2, arg3, arg4) {
  this.IsFinal = arg1;
  this.IsNewSlot = arg2;
  this.IsCheckAccessOnOverride = arg3;
  this.IsAbstract = arg4;
}, _Types.Record);
exports.ILMethodVirtualInfo = ILMethodVirtualInfo;
const MethodKind = (0, _Types.declare)(function MethodKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.MethodKind = MethodKind;
const MethodBody = (0, _Types.declare)(function MethodBody(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.MethodBody = MethodBody;
const ILLazyMethodBody = (0, _Types.declare)(function ILLazyMethodBody(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILLazyMethodBody = ILLazyMethodBody;

function ILLazyMethodBody$$get_Contents(x$$124) {
  const mb = x$$124.fields[0];
  return mb.Value;
}

const MethodCodeKind = (0, _Types.declare)(function MethodCodeKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.MethodCodeKind = MethodCodeKind;

function mkMethBodyAux(mb$$1) {
  return new ILLazyMethodBody(0, "ILLazyMethodBody", notlazy(mb$$1));
}

function mkMethBodyLazyAux(mb$$2) {
  return new ILLazyMethodBody(0, "ILLazyMethodBody", mb$$2);
}

function typesOfILParams(ps) {
  return (0, _List.map)(function mapping$$1(p) {
    return p.Type;
  }, ps);
}

const ILGenericVariance = (0, _Types.declare)(function ILGenericVariance(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILGenericVariance = ILGenericVariance;
const ILGenericParameterDef = (0, _Types.declare)(function ILGenericParameterDef(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this.Name = arg1;
  this.Constraints = arg2;
  this.Variance = arg3;
  this.HasReferenceTypeConstraint = arg4;
  this.HasNotNullableValueTypeConstraint = arg5;
  this.HasDefaultConstructorConstraint = arg6;
  this.CustomAttrsStored = arg7;
  this.MetadataIndex = arg8 | 0;
}, _Types.Record);
exports.ILGenericParameterDef = ILGenericParameterDef;

function ILGenericParameterDef$$get_CustomAttrs(x$$125) {
  return ILAttributesStored$$GetCustomAttrs$$Z524259A4(x$$125.CustomAttrsStored, x$$125.MetadataIndex);
}

function ILGenericParameterDef$$get_DebugText(x$$126) {
  return x$$126.toString();
}

ILGenericParameterDef.prototype.toString = function () {
  const x$$127 = this;
  return x$$127.Name;
};

function memberAccessOfFlags(flags) {
  const f$$10 = flags & 7 | 0;

  if (f$$10 === 1) {
    return new ILMemberAccess(5, "Private");
  } else if (f$$10 === 6) {
    return new ILMemberAccess(6, "Public");
  } else if (f$$10 === 4) {
    return new ILMemberAccess(4, "Family");
  } else if (f$$10 === 2) {
    return new ILMemberAccess(2, "FamilyAndAssembly");
  } else if (f$$10 === 5) {
    return new ILMemberAccess(3, "FamilyOrAssembly");
  } else if (f$$10 === 3) {
    return new ILMemberAccess(0, "Assembly");
  } else {
    return new ILMemberAccess(1, "CompilerControlled");
  }
}

function convertMemberAccess(ilMemberAccess) {
  switch (ilMemberAccess.tag) {
    case 5:
      {
        return 1;
      }

    case 0:
      {
        return 3;
      }

    case 2:
      {
        return 2;
      }

    case 1:
      {
        return 0;
      }

    case 3:
      {
        return 5;
      }

    case 4:
      {
        return 4;
      }

    default:
      {
        return 6;
      }
  }
}

const NoMetadataIdx = -1;
exports.NoMetadataIdx = NoMetadataIdx;
const ILMethodDef = (0, _Types.declare)(function ILMethodDef(name$$3, attributes, implAttributes, callingConv, parameters, ret$$1, body, isEntryPoint, genericParams, securityDeclsStored, customAttrsStored, metadataIndex$$2) {
  const $this$$7 = this;
  $this$$7.name = name$$3;
  $this$$7.attributes = attributes;
  $this$$7.implAttributes = implAttributes;
  $this$$7.callingConv = callingConv;
  $this$$7.parameters = parameters;
  $this$$7.ret = ret$$1;
  $this$$7.body = body;
  $this$$7.isEntryPoint = isEntryPoint;
  $this$$7.genericParams = genericParams;
  $this$$7.securityDeclsStored = securityDeclsStored;
  $this$$7.customAttrsStored = customAttrsStored;
  $this$$7.metadataIndex = metadataIndex$$2;
});
exports.ILMethodDef = ILMethodDef;

function ILMethodDef$$$$002Ector$$5F38DB7D(name$$3, attributes, implAttributes, callingConv, parameters, ret$$1, body, isEntryPoint, genericParams, securityDeclsStored, customAttrsStored, metadataIndex$$2) {
  return this != null ? ILMethodDef.call(this, name$$3, attributes, implAttributes, callingConv, parameters, ret$$1, body, isEntryPoint, genericParams, securityDeclsStored, customAttrsStored, metadataIndex$$2) : new ILMethodDef(name$$3, attributes, implAttributes, callingConv, parameters, ret$$1, body, isEntryPoint, genericParams, securityDeclsStored, customAttrsStored, metadataIndex$$2);
}

function ILMethodDef$$$CreateStored$$5F38DB7D(name$$4, attributes$$1, implAttributes$$1, callingConv$$1, parameters$$1, ret$$2, body$$1, isEntryPoint$$1, genericParams$$1, securityDeclsStored$$1, customAttrsStored$$1, metadataIndex$$3) {
  return ILMethodDef$$$$002Ector$$5F38DB7D(name$$4, attributes$$1, implAttributes$$1, callingConv$$1, parameters$$1, ret$$2, body$$1, isEntryPoint$$1, genericParams$$1, securityDeclsStored$$1, customAttrsStored$$1, metadataIndex$$3);
}

function ILMethodDef$$$Create$$Z54D6B21F(name$$5, attributes$$2, implAttributes$$2, callingConv$$2, parameters$$2, ret$$3, body$$2, isEntryPoint$$2, genericParams$$2, securityDecls, customAttrs$$1) {
  return ILMethodDef$$$$002Ector$$5F38DB7D(name$$5, attributes$$2, implAttributes$$2, callingConv$$2, parameters$$2, ret$$3, body$$2, isEntryPoint$$2, genericParams$$2, storeILSecurityDecls(securityDecls), storeILCustomAttrs(customAttrs$$1), NoMetadataIdx);
}

function ILMethodDef$$get_Name(__) {
  return __.name;
}

function ILMethodDef$$get_Attributes(__$$1) {
  return __$$1.attributes;
}

function ILMethodDef$$get_ImplAttributes(__$$2) {
  return __$$2.implAttributes;
}

function ILMethodDef$$get_CallingConv(__$$3) {
  return __$$3.callingConv;
}

function ILMethodDef$$get_Parameters(__$$4) {
  return __$$4.parameters;
}

function ILMethodDef$$get_Return(__$$5) {
  return __$$5.ret;
}

function ILMethodDef$$get_Body(__$$6) {
  return __$$6.body;
}

function ILMethodDef$$get_SecurityDeclsStored(__$$7) {
  return __$$7.securityDeclsStored;
}

function ILMethodDef$$get_IsEntryPoint(__$$8) {
  return __$$8.isEntryPoint;
}

function ILMethodDef$$get_GenericParams(__$$9) {
  return __$$9.genericParams;
}

function ILMethodDef$$get_CustomAttrsStored(__$$10) {
  return __$$10.customAttrsStored;
}

function ILMethodDef$$get_MetadataIndex(__$$11) {
  return __$$11.metadataIndex;
}

function ILMethodDef$$With$$Z3726C02C(x$$128, name$$6, attributes$$3, implAttributes$$3, callingConv$$3, parameters$$3, ret$$4, body$$3, securityDecls$$1, isEntryPoint$$3, genericParams$$3, customAttrs$$2) {
  var attrs$$4, attrs$$5;
  return ILMethodDef$$$Create$$Z54D6B21F((0, _Option.defaultArg)(name$$6, ILMethodDef$$get_Name(x$$128)), (0, _Option.defaultArg)(attributes$$3, ILMethodDef$$get_Attributes(x$$128)), (0, _Option.defaultArg)(implAttributes$$3, ILMethodDef$$get_ImplAttributes(x$$128)), (0, _Option.defaultArg)(callingConv$$3, ILMethodDef$$get_CallingConv(x$$128)), (0, _Option.defaultArg)(parameters$$3, ILMethodDef$$get_Parameters(x$$128)), (0, _Option.defaultArg)(ret$$4, ILMethodDef$$get_Return(x$$128)), (0, _Option.defaultArg)(body$$3, ILMethodDef$$get_Body(x$$128)), (0, _Option.defaultArg)(isEntryPoint$$3, ILMethodDef$$get_IsEntryPoint(x$$128)), (0, _Option.defaultArg)(genericParams$$3, ILMethodDef$$get_GenericParams(x$$128)), securityDecls$$1 != null ? (attrs$$4 = securityDecls$$1, attrs$$4) : ILMethodDef$$get_SecurityDecls(x$$128), customAttrs$$2 != null ? (attrs$$5 = customAttrs$$2, attrs$$5) : ILMethodDef$$get_CustomAttrs(x$$128));
}

function ILMethodDef$$get_CustomAttrs(x$$129) {
  return ILAttributesStored$$GetCustomAttrs$$Z524259A4(ILMethodDef$$get_CustomAttrsStored(x$$129), x$$129.metadataIndex);
}

function ILMethodDef$$get_SecurityDecls(x$$130) {
  return ILSecurityDeclsStored$$GetSecurityDecls$$Z524259A4(ILMethodDef$$get_SecurityDeclsStored(x$$130), ILMethodDef$$get_MetadataIndex(x$$130));
}

function ILMethodDef$$get_ParameterTypes(x$$131) {
  return typesOfILParams(ILMethodDef$$get_Parameters(x$$131));
}

function ILMethodDef$$get_Code(md) {
  const matchValue$$13 = ILLazyMethodBody$$get_Contents(ILMethodDef$$get_Body(md));

  if (matchValue$$13.tag === 0) {
    const il = matchValue$$13.fields[0];
    return il.Code;
  } else {
    return null;
  }
}

function ILMethodDef$$get_IsIL(x$$132) {
  if (ILLazyMethodBody$$get_Contents(ILMethodDef$$get_Body(x$$132)).tag === 0) {
    return true;
  } else {
    return false;
  }
}

function ILMethodDef$$get_Locals(x$$133) {
  const matchValue$$15 = ILLazyMethodBody$$get_Contents(ILMethodDef$$get_Body(x$$133));

  if (matchValue$$15.tag === 0) {
    const il$$1 = matchValue$$15.fields[0];
    return il$$1.Locals;
  } else {
    return (0, _Types.L)();
  }
}

function ILMethodDef$$get_MethodBody(x$$134) {
  const matchValue$$16 = ILLazyMethodBody$$get_Contents(ILMethodDef$$get_Body(x$$134));

  if (matchValue$$16.tag === 0) {
    const il$$2 = matchValue$$16.fields[0];
    return il$$2;
  } else {
    throw new Error("not IL");
  }
}

function ILMethodDef$$get_SourceMarker(x$$135) {
  return ILMethodDef$$get_MethodBody(x$$135).SourceMarker;
}

function ILMethodDef$$get_MaxStack(x$$136) {
  return ILMethodDef$$get_MethodBody(x$$136).MaxStack;
}

function ILMethodDef$$get_IsZeroInit(x$$137) {
  return ILMethodDef$$get_MethodBody(x$$137).IsZeroInit;
}

function ILMethodDef$$get_CallingSignature(md$$1) {
  return mkILCallSig(ILMethodDef$$get_CallingConv(md$$1), ILMethodDef$$get_ParameterTypes(md$$1), ILMethodDef$$get_Return(md$$1).Type);
}

function ILMethodDef$$get_IsClassInitializer(x$$138) {
  return ILMethodDef$$get_Name(x$$138) === ".cctor";
}

function ILMethodDef$$get_IsConstructor(x$$139) {
  return ILMethodDef$$get_Name(x$$139) === ".ctor";
}

function ILMethodDef$$get_Access(x$$140) {
  return memberAccessOfFlags(ILMethodDef$$get_Attributes(x$$140));
}

function ILMethodDef$$get_IsStatic(x$$141) {
  return (ILMethodDef$$get_Attributes(x$$141) & 16) !== 0;
}

function ILMethodDef$$get_IsNonVirtualInstance(x$$142) {
  if (!ILMethodDef$$get_IsStatic(x$$142)) {
    return !ILMethodDef$$get_IsVirtual(x$$142);
  } else {
    return false;
  }
}

function ILMethodDef$$get_IsVirtual(x$$143) {
  return (ILMethodDef$$get_Attributes(x$$143) & 64) !== 0;
}

function ILMethodDef$$get_IsFinal(x$$144) {
  return (ILMethodDef$$get_Attributes(x$$144) & 32) !== 0;
}

function ILMethodDef$$get_IsNewSlot(x$$145) {
  return (ILMethodDef$$get_Attributes(x$$145) & 256) !== 0;
}

function ILMethodDef$$get_IsCheckAccessOnOverride(x$$146) {
  return (ILMethodDef$$get_Attributes(x$$146) & 512) !== 0;
}

function ILMethodDef$$get_IsAbstract(x$$147) {
  return (ILMethodDef$$get_Attributes(x$$147) & 1024) !== 0;
}

function ILMethodDef$$get_IsHideBySig(x$$148) {
  return (ILMethodDef$$get_Attributes(x$$148) & 128) !== 0;
}

function ILMethodDef$$get_IsSpecialName(x$$149) {
  return (ILMethodDef$$get_Attributes(x$$149) & 2048) !== 0;
}

function ILMethodDef$$get_IsUnmanagedExport(x$$150) {
  return (ILMethodDef$$get_Attributes(x$$150) & 8) !== 0;
}

function ILMethodDef$$get_IsReqSecObj(x$$151) {
  return (ILMethodDef$$get_Attributes(x$$151) & 32768) !== 0;
}

function ILMethodDef$$get_HasSecurity(x$$152) {
  return (ILMethodDef$$get_Attributes(x$$152) & 16384) !== 0;
}

function ILMethodDef$$get_IsManaged(x$$153) {
  return (ILMethodDef$$get_ImplAttributes(x$$153) & 0) !== 0;
}

function ILMethodDef$$get_IsForwardRef(x$$154) {
  return (ILMethodDef$$get_ImplAttributes(x$$154) & 16) !== 0;
}

function ILMethodDef$$get_IsInternalCall(x$$155) {
  return (ILMethodDef$$get_ImplAttributes(x$$155) & 4096) !== 0;
}

function ILMethodDef$$get_IsPreserveSig(x$$156) {
  return (ILMethodDef$$get_ImplAttributes(x$$156) & 128) !== 0;
}

function ILMethodDef$$get_IsSynchronized(x$$157) {
  return (ILMethodDef$$get_ImplAttributes(x$$157) & 32) !== 0;
}

function ILMethodDef$$get_IsNoInline(x$$158) {
  return (ILMethodDef$$get_ImplAttributes(x$$158) & 8) !== 0;
}

function ILMethodDef$$get_IsAggressiveInline(x$$159) {
  return (ILMethodDef$$get_ImplAttributes(x$$159) & 256) !== 0;
}

function ILMethodDef$$get_IsMustRun(x$$160) {
  return (ILMethodDef$$get_ImplAttributes(x$$160) & 64) !== 0;
}

function ILMethodDef$$get_WithSpecialName(x$$161) {
  return ILMethodDef$$With$$Z3726C02C(x$$161, null, ILMethodDef$$get_Attributes(x$$161) | 2048);
}

function ILMethodDef$$WithHideBySig(x$$162) {
  return ILMethodDef$$With$$Z3726C02C(x$$162, null, ILMethodDef$$get_IsVirtual(x$$162) ? ILMethodDef$$get_Attributes(x$$162) & ~512 | 128 : (() => {
    throw new Error("WithHideBySig");
  })());
}

function ILMethodDef$$WithHideBySig$$Z1FBCCD16(x$$163, condition) {
  var source;
  return ILMethodDef$$With$$Z3726C02C(x$$163, null, (source = ILMethodDef$$get_Attributes(x$$163) | 0, condition ? source | 128 : source & ~128));
}

function ILMethodDef$$WithFinal$$Z1FBCCD16(x$$164, condition$$2) {
  var source$$2;
  return ILMethodDef$$With$$Z3726C02C(x$$164, null, (source$$2 = ILMethodDef$$get_Attributes(x$$164) | 0, condition$$2 ? source$$2 | 32 : source$$2 & ~32));
}

function ILMethodDef$$WithAbstract$$Z1FBCCD16(x$$165, condition$$4) {
  var source$$4;
  return ILMethodDef$$With$$Z3726C02C(x$$165, null, (source$$4 = ILMethodDef$$get_Attributes(x$$165) | 0, condition$$4 ? source$$4 | 1024 : source$$4 & ~1024));
}

function ILMethodDef$$WithAccess$$4BB0D833(x$$166, access) {
  return ILMethodDef$$With$$Z3726C02C(x$$166, null, ILMethodDef$$get_Attributes(x$$166) & ~7 | convertMemberAccess(access));
}

function ILMethodDef$$get_WithNewSlot(x$$167) {
  return ILMethodDef$$With$$Z3726C02C(x$$167, null, ILMethodDef$$get_Attributes(x$$167) | 256);
}

function ILMethodDef$$WithSecurity$$Z1FBCCD16(x$$168, condition$$6) {
  var source$$6;
  return ILMethodDef$$With$$Z3726C02C(x$$168, null, (source$$6 = ILMethodDef$$get_Attributes(x$$168) | 0, condition$$6 ? source$$6 | 16384 : source$$6 & ~16384));
}

function ILMethodDef$$WithPInvoke$$Z1FBCCD16(x$$169, condition$$8) {
  var source$$8;
  return ILMethodDef$$With$$Z3726C02C(x$$169, null, (source$$8 = ILMethodDef$$get_Attributes(x$$169) | 0, condition$$8 ? source$$8 | 8192 : source$$8 & ~8192));
}

function ILMethodDef$$WithPreserveSig$$Z1FBCCD16(x$$170, condition$$10) {
  var source$$10;
  return ILMethodDef$$With$$Z3726C02C(x$$170, null, null, (source$$10 = ILMethodDef$$get_ImplAttributes(x$$170) | 0, condition$$10 ? source$$10 | 128 : source$$10 & ~128));
}

function ILMethodDef$$WithSynchronized$$Z1FBCCD16(x$$171, condition$$12) {
  var source$$12;
  return ILMethodDef$$With$$Z3726C02C(x$$171, null, null, (source$$12 = ILMethodDef$$get_ImplAttributes(x$$171) | 0, condition$$12 ? source$$12 | 32 : source$$12 & ~32));
}

function ILMethodDef$$WithNoInlining$$Z1FBCCD16(x$$172, condition$$14) {
  var source$$14;
  return ILMethodDef$$With$$Z3726C02C(x$$172, null, null, (source$$14 = ILMethodDef$$get_ImplAttributes(x$$172) | 0, condition$$14 ? source$$14 | 8 : source$$14 & ~8));
}

function ILMethodDef$$WithAggressiveInlining$$Z1FBCCD16(x$$173, condition$$16) {
  var source$$16;
  return ILMethodDef$$With$$Z3726C02C(x$$173, null, null, (source$$16 = ILMethodDef$$get_ImplAttributes(x$$173) | 0, condition$$16 ? source$$16 | 256 : source$$16 & ~256));
}

function ILMethodDef$$WithRuntime$$Z1FBCCD16(x$$174, condition$$18) {
  var source$$18;
  return ILMethodDef$$With$$Z3726C02C(x$$174, null, null, (source$$18 = ILMethodDef$$get_ImplAttributes(x$$174) | 0, condition$$18 ? source$$18 | 3 : source$$18 & ~3));
}

const ILMethodDefs = (0, _Types.declare)(function ILMethodDefs(f$$11) {
  const $this$$8 = this;
  $this$$8.array = (0, _illib.InlineDelayInit$00601$$$$002Ector$$9CB17FF)(f$$11);
  $this$$8.dict = (0, _illib.InlineDelayInit$00601$$$$002Ector$$9CB17FF)(function () {
    const arr = (0, _illib.InlineDelayInit$00601$$get_Value)($this$$8.array);
    const t$$5 = new Map([]);

    for (let i$$2 = arr.length - 1; i$$2 >= 0; i$$2--) {
      const y$$5 = arr[i$$2];
      const key$$1 = ILMethodDef$$get_Name(y$$5);
      const matchValue$$17 = (0, _Util.tryGetValue)(t$$5, key$$1, null);

      if (matchValue$$17[0]) {
        t$$5.set(key$$1, (0, _Types.L)(y$$5, matchValue$$17[1]));
      } else {
        t$$5.set(key$$1, (0, _Types.L)(y$$5, (0, _Types.L)()));
      }
    }

    return t$$5;
  });
});
exports.ILMethodDefs = ILMethodDefs;

function ILMethodDefs$$$$002Ector$$4309F733(f$$11) {
  return this != null ? ILMethodDefs.call(this, f$$11) : new ILMethodDefs(f$$11);
}

function ILMethodDefs$$get_AsArray(x$$175) {
  return (0, _illib.InlineDelayInit$00601$$get_Value)(x$$175.array);
}

function ILMethodDefs$$get_AsList(x$$176) {
  return (0, _Array.toList)((0, _illib.InlineDelayInit$00601$$get_Value)(x$$176.array));
}

function ILMethodDefs$$FindByName$$Z721C83C5(x$$177, nm$$14) {
  const matchValue$$18 = (0, _Util.tryGetValue)((0, _illib.InlineDelayInit$00601$$get_Value)(x$$177.dict), nm$$14, null);

  if (matchValue$$18[0]) {
    return matchValue$$18[1];
  } else {
    return (0, _Types.L)();
  }
}

function ILMethodDefs$$FindByNameAndArity$$Z18115A39(x$$178, nm$$15, arity) {
  return (0, _List.filter)(function predicate(x$$179) {
    return (0, _List.length)(ILMethodDef$$get_Parameters(x$$179)) === arity;
  }, ILMethodDefs$$FindByName$$Z721C83C5(x$$178, nm$$15));
}

ILMethodDefs.prototype[Symbol.iterator] = function () {
  const x$$180 = this;
  return (0, _Seq.toIterator)((0, _Seq.getEnumerator)((0, _illib.InlineDelayInit$00601$$get_Value)(x$$180.array)));
};

const ILEventDef = (0, _Types.declare)(function ILEventDef(eventType, name$$7, attributes$$4, addMethod, removeMethod, fireMethod, otherMethods, customAttrsStored$$2, metadataIndex$$4) {
  const $this$$9 = this;
  $this$$9.eventType = eventType;
  $this$$9.name = name$$7;
  $this$$9.attributes = attributes$$4;
  $this$$9.addMethod = addMethod;
  $this$$9.removeMethod = removeMethod;
  $this$$9.fireMethod = fireMethod;
  $this$$9.otherMethods = otherMethods;
  $this$$9.customAttrsStored = customAttrsStored$$2;
  $this$$9.metadataIndex = metadataIndex$$4;
});
exports.ILEventDef = ILEventDef;

function ILEventDef$$$$002Ector$$Z970C03B(eventType, name$$7, attributes$$4, addMethod, removeMethod, fireMethod, otherMethods, customAttrsStored$$2, metadataIndex$$4) {
  return this != null ? ILEventDef.call(this, eventType, name$$7, attributes$$4, addMethod, removeMethod, fireMethod, otherMethods, customAttrsStored$$2, metadataIndex$$4) : new ILEventDef(eventType, name$$7, attributes$$4, addMethod, removeMethod, fireMethod, otherMethods, customAttrsStored$$2, metadataIndex$$4);
}

function ILEventDef$$$CreateStored$$Z970C03B(eventType$$1, name$$8, attributes$$5, addMethod$$1, removeMethod$$1, fireMethod$$1, otherMethods$$1, customAttrsStored$$3, metadataIndex$$5) {
  return ILEventDef$$$$002Ector$$Z970C03B(eventType$$1, name$$8, attributes$$5, addMethod$$1, removeMethod$$1, fireMethod$$1, otherMethods$$1, customAttrsStored$$3, metadataIndex$$5);
}

function ILEventDef$$$Create$$2E001362(eventType$$2, name$$9, attributes$$6, addMethod$$2, removeMethod$$2, fireMethod$$2, otherMethods$$2, customAttrs$$3) {
  return ILEventDef$$$$002Ector$$Z970C03B(eventType$$2, name$$9, attributes$$6, addMethod$$2, removeMethod$$2, fireMethod$$2, otherMethods$$2, storeILCustomAttrs(customAttrs$$3), NoMetadataIdx);
}

function ILEventDef$$get_EventType(__$$12) {
  return __$$12.eventType;
}

function ILEventDef$$get_Name(__$$13) {
  return __$$13.name;
}

function ILEventDef$$get_Attributes(__$$14) {
  return __$$14.attributes;
}

function ILEventDef$$get_AddMethod(__$$15) {
  return __$$15.addMethod;
}

function ILEventDef$$get_RemoveMethod(__$$16) {
  return __$$16.removeMethod;
}

function ILEventDef$$get_FireMethod(__$$17) {
  return __$$17.fireMethod;
}

function ILEventDef$$get_OtherMethods(__$$18) {
  return __$$18.otherMethods;
}

function ILEventDef$$get_CustomAttrsStored(__$$19) {
  return __$$19.customAttrsStored;
}

function ILEventDef$$get_MetadataIndex(__$$20) {
  return __$$20.metadataIndex;
}

function ILEventDef$$get_CustomAttrs(x$$181) {
  return ILAttributesStored$$GetCustomAttrs$$Z524259A4(x$$181.customAttrsStored, ILEventDef$$get_MetadataIndex(x$$181));
}

function ILEventDef$$With$$ZAE8B55E(x$$182, eventType$$3, name$$10, attributes$$7, addMethod$$3, removeMethod$$3, fireMethod$$3, otherMethods$$3, customAttrs$$4) {
  var attrs$$6;
  return ILEventDef$$$Create$$2E001362((0, _Option.defaultArg)(eventType$$3, ILEventDef$$get_EventType(x$$182)), (0, _Option.defaultArg)(name$$10, ILEventDef$$get_Name(x$$182)), (0, _Option.defaultArg)(attributes$$7, ILEventDef$$get_Attributes(x$$182)), (0, _Option.defaultArg)(addMethod$$3, ILEventDef$$get_AddMethod(x$$182)), (0, _Option.defaultArg)(removeMethod$$3, ILEventDef$$get_RemoveMethod(x$$182)), (0, _Option.defaultArg)(fireMethod$$3, ILEventDef$$get_FireMethod(x$$182)), (0, _Option.defaultArg)(otherMethods$$3, ILEventDef$$get_OtherMethods(x$$182)), customAttrs$$4 != null ? (attrs$$6 = customAttrs$$4, attrs$$6) : ILEventDef$$get_CustomAttrs(x$$182));
}

function ILEventDef$$get_IsSpecialName(x$$183) {
  return (ILEventDef$$get_Attributes(x$$183) & 512) !== 0;
}

function ILEventDef$$get_IsRTSpecialName(x$$184) {
  return (ILEventDef$$get_Attributes(x$$184) & 1024) !== 0;
}

function ILEventDef$$get_DebugText(x$$185) {
  return (0, _Util.toString)(x$$185);
}

ILEventDef.prototype.toString = function () {
  const x$$186 = this;
  return "event " + ILEventDef$$get_Name(x$$186);
};

const ILEventDefs = (0, _Types.declare)(function ILEventDefs(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILEventDefs = ILEventDefs;

function ILEventDefs$$get_AsList(x$$187) {
  const t$$6 = x$$187.fields[0];
  return LazyOrderedMultiMap$00602$$Entries(t$$6);
}

function ILEventDefs$$LookupByName$$Z721C83C5(x$$188, s$$7) {
  const t$$7 = x$$188.fields[0];
  return LazyOrderedMultiMap$00602$$get_Item$$2B595(t$$7, s$$7);
}

const ILPropertyDef = (0, _Types.declare)(function ILPropertyDef(name$$11, attributes$$8, setMethod, getMethod, callingConv$$4, propertyType, init, args$$1, customAttrsStored$$4, metadataIndex$$6) {
  const $this$$10 = this;
  $this$$10.name = name$$11;
  $this$$10.attributes = attributes$$8;
  $this$$10.setMethod = setMethod;
  $this$$10.getMethod = getMethod;
  $this$$10.callingConv = callingConv$$4;
  $this$$10.propertyType = propertyType;
  $this$$10.init = init;
  $this$$10.args = args$$1;
  $this$$10.customAttrsStored = customAttrsStored$$4;
  $this$$10.metadataIndex = metadataIndex$$6;
});
exports.ILPropertyDef = ILPropertyDef;

function ILPropertyDef$$$$002Ector$$ZEE27C7(name$$11, attributes$$8, setMethod, getMethod, callingConv$$4, propertyType, init, args$$1, customAttrsStored$$4, metadataIndex$$6) {
  return this != null ? ILPropertyDef.call(this, name$$11, attributes$$8, setMethod, getMethod, callingConv$$4, propertyType, init, args$$1, customAttrsStored$$4, metadataIndex$$6) : new ILPropertyDef(name$$11, attributes$$8, setMethod, getMethod, callingConv$$4, propertyType, init, args$$1, customAttrsStored$$4, metadataIndex$$6);
}

function ILPropertyDef$$$CreateStored$$ZEE27C7(name$$12, attributes$$9, setMethod$$1, getMethod$$1, callingConv$$5, propertyType$$1, init$$1, args$$2, customAttrsStored$$5, metadataIndex$$7) {
  return ILPropertyDef$$$$002Ector$$ZEE27C7(name$$12, attributes$$9, setMethod$$1, getMethod$$1, callingConv$$5, propertyType$$1, init$$1, args$$2, customAttrsStored$$5, metadataIndex$$7);
}

function ILPropertyDef$$$Create$$Z7C56322(name$$13, attributes$$10, setMethod$$2, getMethod$$2, callingConv$$6, propertyType$$2, init$$2, args$$3, customAttrs$$5) {
  return ILPropertyDef$$$$002Ector$$ZEE27C7(name$$13, attributes$$10, setMethod$$2, getMethod$$2, callingConv$$6, propertyType$$2, init$$2, args$$3, storeILCustomAttrs(customAttrs$$5), NoMetadataIdx);
}

function ILPropertyDef$$get_Name(x$$189) {
  return x$$189.name;
}

function ILPropertyDef$$get_Attributes(x$$190) {
  return x$$190.attributes;
}

function ILPropertyDef$$get_GetMethod(x$$191) {
  return x$$191.getMethod;
}

function ILPropertyDef$$get_SetMethod(x$$192) {
  return x$$192.setMethod;
}

function ILPropertyDef$$get_CallingConv(x$$193) {
  return x$$193.callingConv;
}

function ILPropertyDef$$get_PropertyType(x$$194) {
  return x$$194.propertyType;
}

function ILPropertyDef$$get_Init(x$$195) {
  return x$$195.init;
}

function ILPropertyDef$$get_Args(x$$196) {
  return x$$196.args;
}

function ILPropertyDef$$get_CustomAttrsStored(x$$197) {
  return x$$197.customAttrsStored;
}

function ILPropertyDef$$get_CustomAttrs(x$$198) {
  return ILAttributesStored$$GetCustomAttrs$$Z524259A4(x$$198.customAttrsStored, ILPropertyDef$$get_MetadataIndex(x$$198));
}

function ILPropertyDef$$get_MetadataIndex(x$$199) {
  return x$$199.metadataIndex;
}

function ILPropertyDef$$With$$2CBB49EB(x$$200, name$$14, attributes$$11, setMethod$$3, getMethod$$3, callingConv$$7, propertyType$$3, init$$3, args$$4, customAttrs$$6) {
  var attrs$$7;
  return ILPropertyDef$$$Create$$Z7C56322((0, _Option.defaultArg)(name$$14, ILPropertyDef$$get_Name(x$$200)), (0, _Option.defaultArg)(attributes$$11, ILPropertyDef$$get_Attributes(x$$200)), (0, _Option.defaultArg)(setMethod$$3, ILPropertyDef$$get_SetMethod(x$$200)), (0, _Option.defaultArg)(getMethod$$3, ILPropertyDef$$get_GetMethod(x$$200)), (0, _Option.defaultArg)(callingConv$$7, ILPropertyDef$$get_CallingConv(x$$200)), (0, _Option.defaultArg)(propertyType$$3, ILPropertyDef$$get_PropertyType(x$$200)), (0, _Option.defaultArg)(init$$3, ILPropertyDef$$get_Init(x$$200)), (0, _Option.defaultArg)(args$$4, ILPropertyDef$$get_Args(x$$200)), customAttrs$$6 != null ? (attrs$$7 = customAttrs$$6, attrs$$7) : ILPropertyDef$$get_CustomAttrs(x$$200));
}

function ILPropertyDef$$get_IsSpecialName(x$$201) {
  return (ILPropertyDef$$get_Attributes(x$$201) & 512) !== 0;
}

function ILPropertyDef$$get_IsRTSpecialName(x$$202) {
  return (ILPropertyDef$$get_Attributes(x$$202) & 1024) !== 0;
}

function ILPropertyDef$$get_DebugText(x$$203) {
  return (0, _Util.toString)(x$$203);
}

ILPropertyDef.prototype.toString = function () {
  const x$$204 = this;
  return "property " + ILPropertyDef$$get_Name(x$$204);
};

const ILPropertyDefs = (0, _Types.declare)(function ILPropertyDefs(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILPropertyDefs = ILPropertyDefs;

function ILPropertyDefs$$get_AsList(x$$205) {
  const t$$8 = x$$205.fields[0];
  return LazyOrderedMultiMap$00602$$Entries(t$$8);
}

function ILPropertyDefs$$LookupByName$$Z721C83C5(x$$206, s$$8) {
  const t$$9 = x$$206.fields[0];
  return LazyOrderedMultiMap$00602$$get_Item$$2B595(t$$9, s$$8);
}

function convertFieldAccess(ilMemberAccess$$1) {
  switch (ilMemberAccess$$1.tag) {
    case 1:
      {
        return 0;
      }

    case 2:
      {
        return 2;
      }

    case 3:
      {
        return 5;
      }

    case 4:
      {
        return 4;
      }

    case 5:
      {
        return 1;
      }

    case 6:
      {
        return 6;
      }

    default:
      {
        return 3;
      }
  }
}

const ILFieldDef = (0, _Types.declare)(function ILFieldDef(name$$15, fieldType, attributes$$12, data$$2, literalValue, offset, marshal, customAttrsStored$$6, metadataIndex$$8) {
  const $this$$11 = this;
  $this$$11.name = name$$15;
  $this$$11.fieldType = fieldType;
  $this$$11.attributes = attributes$$12;
  $this$$11.data = data$$2;
  $this$$11.literalValue = literalValue;
  $this$$11.offset = offset;
  $this$$11.marshal = marshal;
  $this$$11.customAttrsStored = customAttrsStored$$6;
  $this$$11.metadataIndex = metadataIndex$$8;
});
exports.ILFieldDef = ILFieldDef;

function ILFieldDef$$$$002Ector$$Z4E5D7682(name$$15, fieldType, attributes$$12, data$$2, literalValue, offset, marshal, customAttrsStored$$6, metadataIndex$$8) {
  return this != null ? ILFieldDef.call(this, name$$15, fieldType, attributes$$12, data$$2, literalValue, offset, marshal, customAttrsStored$$6, metadataIndex$$8) : new ILFieldDef(name$$15, fieldType, attributes$$12, data$$2, literalValue, offset, marshal, customAttrsStored$$6, metadataIndex$$8);
}

function ILFieldDef$$$CreateStored$$Z4E5D7682(name$$16, fieldType$$1, attributes$$13, data$$3, literalValue$$1, offset$$1, marshal$$1, customAttrsStored$$7, metadataIndex$$9) {
  return ILFieldDef$$$$002Ector$$Z4E5D7682(name$$16, fieldType$$1, attributes$$13, data$$3, literalValue$$1, offset$$1, marshal$$1, customAttrsStored$$7, metadataIndex$$9);
}

function ILFieldDef$$$Create$$Z60727407(name$$17, fieldType$$2, attributes$$14, data$$4, literalValue$$2, offset$$2, marshal$$2, customAttrs$$7) {
  return ILFieldDef$$$$002Ector$$Z4E5D7682(name$$17, fieldType$$2, attributes$$14, data$$4, literalValue$$2, offset$$2, marshal$$2, storeILCustomAttrs(customAttrs$$7), NoMetadataIdx);
}

function ILFieldDef$$get_Name(__$$21) {
  return __$$21.name;
}

function ILFieldDef$$get_FieldType(__$$22) {
  return __$$22.fieldType;
}

function ILFieldDef$$get_Attributes(__$$23) {
  return __$$23.attributes;
}

function ILFieldDef$$get_Data(__$$24) {
  return __$$24.data;
}

function ILFieldDef$$get_LiteralValue(__$$25) {
  return __$$25.literalValue;
}

function ILFieldDef$$get_Offset(__$$26) {
  return __$$26.offset;
}

function ILFieldDef$$get_Marshal(__$$27) {
  return __$$27.marshal;
}

function ILFieldDef$$get_CustomAttrsStored(x$$207) {
  return x$$207.customAttrsStored;
}

function ILFieldDef$$get_CustomAttrs(x$$208) {
  return ILAttributesStored$$GetCustomAttrs$$Z524259A4(x$$208.customAttrsStored, ILFieldDef$$get_MetadataIndex(x$$208));
}

function ILFieldDef$$get_MetadataIndex(x$$209) {
  return x$$209.metadataIndex;
}

function ILFieldDef$$With$$Z1EED4EE7(x$$210, name$$18, fieldType$$3, attributes$$15, data$$5, literalValue$$3, offset$$3, marshal$$3, customAttrs$$8) {
  return ILFieldDef$$$Create$$Z60727407((0, _Option.defaultArg)(name$$18, ILFieldDef$$get_Name(x$$210)), (0, _Option.defaultArg)(fieldType$$3, ILFieldDef$$get_FieldType(x$$210)), (0, _Option.defaultArg)(attributes$$15, ILFieldDef$$get_Attributes(x$$210)), (0, _Option.defaultArg)(data$$5, ILFieldDef$$get_Data(x$$210)), (0, _Option.defaultArg)(literalValue$$3, ILFieldDef$$get_LiteralValue(x$$210)), (0, _Option.defaultArg)(offset$$3, ILFieldDef$$get_Offset(x$$210)), (0, _Option.defaultArg)(marshal$$3, ILFieldDef$$get_Marshal(x$$210)), (0, _Option.defaultArg)(customAttrs$$8, ILFieldDef$$get_CustomAttrs(x$$210)));
}

function ILFieldDef$$get_IsStatic(x$$211) {
  return (ILFieldDef$$get_Attributes(x$$211) & 16) !== 0;
}

function ILFieldDef$$get_IsSpecialName(x$$212) {
  return (ILFieldDef$$get_Attributes(x$$212) & 512) !== 0;
}

function ILFieldDef$$get_IsLiteral(x$$213) {
  return (ILFieldDef$$get_Attributes(x$$213) & 64) !== 0;
}

function ILFieldDef$$get_NotSerialized(x$$214) {
  return (ILFieldDef$$get_Attributes(x$$214) & 128) !== 0;
}

function ILFieldDef$$get_IsInitOnly(x$$215) {
  return (ILFieldDef$$get_Attributes(x$$215) & 32) !== 0;
}

function ILFieldDef$$get_Access(x$$216) {
  return memberAccessOfFlags(ILFieldDef$$get_Attributes(x$$216));
}

function ILFieldDef$$WithAccess$$4BB0D833(x$$217, access$$1) {
  return ILFieldDef$$With$$Z1EED4EE7(x$$217, null, null, ILFieldDef$$get_Attributes(x$$217) & ~7 | convertFieldAccess(access$$1));
}

function ILFieldDef$$WithInitOnly$$Z1FBCCD16(x$$218, condition$$20) {
  var source$$20;
  return ILFieldDef$$With$$Z1EED4EE7(x$$218, null, null, (source$$20 = ILFieldDef$$get_Attributes(x$$218) | 0, condition$$20 ? source$$20 | 32 : source$$20 & ~32));
}

function ILFieldDef$$WithStatic$$Z1FBCCD16(x$$219, condition$$22) {
  var source$$22;
  return ILFieldDef$$With$$Z1EED4EE7(x$$219, null, null, (source$$22 = ILFieldDef$$get_Attributes(x$$219) | 0, condition$$22 ? source$$22 | 16 : source$$22 & ~16));
}

function ILFieldDef$$WithSpecialName$$Z1FBCCD16(x$$220, condition$$24) {
  var flagToAdd$$24;
  return ILFieldDef$$With$$Z1EED4EE7(x$$220, null, null, (flagToAdd$$24 = 512 | 1024 | 0, function (source$$24) {
    return condition$$24 ? source$$24 | flagToAdd$$24 : source$$24 & ~flagToAdd$$24;
  })(ILFieldDef$$get_Attributes(x$$220)));
}

function ILFieldDef$$WithNotSerialized$$Z1FBCCD16(x$$221, condition$$26) {
  var source$$26;
  return ILFieldDef$$With$$Z1EED4EE7(x$$221, null, null, (source$$26 = ILFieldDef$$get_Attributes(x$$221) | 0, condition$$26 ? source$$26 | 128 : source$$26 & ~128));
}

function ILFieldDef$$WithLiteralDefaultValue$$5B6598A(x$$222, literal) {
  var flagToAdd$$28;
  return ILFieldDef$$With$$Z1EED4EE7(x$$222, null, null, (flagToAdd$$28 = 64 | 32768 | 0, function (source$$28) {
    return literal != null ? source$$28 | flagToAdd$$28 : source$$28 & ~flagToAdd$$28;
  })(ILFieldDef$$get_Attributes(x$$222)), null, (0, _Option.some)(literal));
}

function ILFieldDef$$WithFieldMarshal$$Z704B1275(x$$223, marshal$$4) {
  var source$$30;
  return ILFieldDef$$With$$Z1EED4EE7(x$$223, null, null, (source$$30 = ILFieldDef$$get_Attributes(x$$223) | 0, marshal$$4 != null ? source$$30 | 4096 : source$$30 & ~4096), null, null, null, (0, _Option.some)(marshal$$4));
}

const ILFieldDefs = (0, _Types.declare)(function ILFieldDefs(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILFieldDefs = ILFieldDefs;

function ILFieldDefs$$get_AsList(x$$224) {
  const t$$10 = x$$224.fields[0];
  return LazyOrderedMultiMap$00602$$Entries(t$$10);
}

function ILFieldDefs$$LookupByName$$Z721C83C5(x$$225, s$$9) {
  const t$$11 = x$$225.fields[0];
  return LazyOrderedMultiMap$00602$$get_Item$$2B595(t$$11, s$$9);
}

const ILMethodImplDef = (0, _Types.declare)(function ILMethodImplDef(arg1, arg2) {
  this.Overrides = arg1;
  this.OverrideBy = arg2;
}, _Types.Record);
exports.ILMethodImplDef = ILMethodImplDef;
const ILMethodImplDefs = (0, _Types.declare)(function ILMethodImplDefs(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILMethodImplDefs = ILMethodImplDefs;

function ILMethodImplDefs$$get_AsList(x$$226) {
  const ltab = x$$226.fields[0];
  return (0, _Map.foldBack)(function (_x, y$$6, r$$1) {
    return (0, _List.append)(y$$6, r$$1);
  }, ltab.Value, (0, _Types.L)());
}

const ILTypeDefLayout = (0, _Types.declare)(function ILTypeDefLayout(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILTypeDefLayout = ILTypeDefLayout;
const ILTypeDefLayoutInfo = (0, _Types.declare)(function ILTypeDefLayoutInfo(arg1, arg2) {
  this.Size = arg1;
  this.Pack = arg2;
}, _Types.Record);
exports.ILTypeDefLayoutInfo = ILTypeDefLayoutInfo;
const ILTypeInit = (0, _Types.declare)(function ILTypeInit(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILTypeInit = ILTypeInit;
const ILDefaultPInvokeEncoding = (0, _Types.declare)(function ILDefaultPInvokeEncoding(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILDefaultPInvokeEncoding = ILDefaultPInvokeEncoding;
const ILTypeDefAccess = (0, _Types.declare)(function ILTypeDefAccess(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILTypeDefAccess = ILTypeDefAccess;

function typeAccessOfFlags(flags$$1) {
  const f$$12 = flags$$1 & 7 | 0;

  if (f$$12 === 1) {
    return new ILTypeDefAccess(0, "Public");
  } else if (f$$12 === 2) {
    return new ILTypeDefAccess(2, "Nested", new ILMemberAccess(6, "Public"));
  } else if (f$$12 === 3) {
    return new ILTypeDefAccess(2, "Nested", new ILMemberAccess(5, "Private"));
  } else if (f$$12 === 4) {
    return new ILTypeDefAccess(2, "Nested", new ILMemberAccess(4, "Family"));
  } else if (f$$12 === 6) {
    return new ILTypeDefAccess(2, "Nested", new ILMemberAccess(2, "FamilyAndAssembly"));
  } else if (f$$12 === 7) {
    return new ILTypeDefAccess(2, "Nested", new ILMemberAccess(3, "FamilyOrAssembly"));
  } else if (f$$12 === 5) {
    return new ILTypeDefAccess(2, "Nested", new ILMemberAccess(0, "Assembly"));
  } else {
    return new ILTypeDefAccess(1, "Private");
  }
}

function typeEncodingOfFlags(flags$$2) {
  const f$$13 = flags$$2 & 196608 | 0;

  if (f$$13 === 131072) {
    return new ILDefaultPInvokeEncoding(1, "Auto");
  } else if (f$$13 === 65536) {
    return new ILDefaultPInvokeEncoding(2, "Unicode");
  } else {
    return new ILDefaultPInvokeEncoding(0, "Ansi");
  }
}

const ILTypeDefKind = (0, _Types.declare)(function ILTypeDefKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILTypeDefKind = ILTypeDefKind;

function typeKindOfFlags(nm$$16, _mdefs, _fdefs, super$, flags$$3) {
  if ((flags$$3 & 32) !== 0) {
    return new ILTypeDefKind(2, "Interface");
  } else {
    let patternInput$$8;

    if (super$ != null) {
      const ty$$3 = super$;
      patternInput$$8 = [ILTypeSpec$$get_Name(ILType$$get_TypeSpec(ty$$3)) === "System.Enum", ILTypeSpec$$get_Name(ILType$$get_TypeSpec(ty$$3)) === "System.Delegate", ILTypeSpec$$get_Name(ILType$$get_TypeSpec(ty$$3)) === "System.MulticastDelegate", ILTypeSpec$$get_Name(ILType$$get_TypeSpec(ty$$3)) === "System.ValueType" ? nm$$16 !== "System.Enum" : false];
    } else {
      patternInput$$8 = [false, false, false, false];
    }

    const selfIsMulticastDelegate = nm$$16 === "System.MulticastDelegate";

    if (patternInput$$8[0]) {
      return new ILTypeDefKind(3, "Enum");
    } else if ((patternInput$$8[1] ? !selfIsMulticastDelegate : false) ? true : patternInput$$8[2]) {
      return new ILTypeDefKind(4, "Delegate");
    } else if (patternInput$$8[3]) {
      return new ILTypeDefKind(1, "ValueType");
    } else {
      return new ILTypeDefKind(0, "Class");
    }
  }
}

function convertTypeAccessFlags(access$$2) {
  if (access$$2.tag === 1) {
    return 0;
  } else if (access$$2.tag === 2) {
    if (access$$2.fields[0].tag === 5) {
      return 3;
    } else if (access$$2.fields[0].tag === 4) {
      return 4;
    } else if (access$$2.fields[0].tag === 1) {
      return 3;
    } else if (access$$2.fields[0].tag === 2) {
      return 6;
    } else if (access$$2.fields[0].tag === 3) {
      return 7;
    } else if (access$$2.fields[0].tag === 0) {
      return 5;
    } else {
      return 2;
    }
  } else {
    return 1;
  }
}

function convertTypeKind(kind) {
  switch (kind.tag) {
    case 1:
      {
        return 0;
      }

    case 2:
      {
        return 128 | 32 | 0;
      }

    case 3:
      {
        return 0;
      }

    case 4:
      {
        return 0;
      }

    default:
      {
        return 0;
      }
  }
}

function convertLayout(layout) {
  switch (layout.tag) {
    case 1:
      {
        return 8;
      }

    case 2:
      {
        return 16;
      }

    default:
      {
        return 0;
      }
  }
}

function convertEncoding(encoding) {
  switch (encoding.tag) {
    case 0:
      {
        return 0;
      }

    case 2:
      {
        return 65536;
      }

    default:
      {
        return 131072;
      }
  }
}

function convertToNestedTypeAccess(ilMemberAccess$$2) {
  switch (ilMemberAccess$$2.tag) {
    case 1:
      {
        throw new Error("Method access compiler controlled.");
      }

    case 2:
      {
        return 6;
      }

    case 3:
      {
        return 7;
      }

    case 4:
      {
        return 4;
      }

    case 5:
      {
        return 3;
      }

    case 6:
      {
        return 2;
      }

    default:
      {
        return 5;
      }
  }
}

function convertInitSemantics(init$$4) {
  if (init$$4.tag === 1) {
    return 0;
  } else {
    return 1048576;
  }
}

const ILTypeDefStored = (0, _Types.declare)(function ILTypeDefStored(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILTypeDefStored = ILTypeDefStored;
const ILTypeDef = (0, _Types.declare)(function ILTypeDef(name$$19, attributes$$16, layout$$1, implements$, genericParams$$4, extends$, methods, nestedTypes, fields, methodImpls, events, properties, securityDeclsStored$$2, customAttrsStored$$8, metadataIndex$$10) {
  const $this$$12 = this;
  $this$$12.name = name$$19;
  $this$$12.attributes = attributes$$16;
  $this$$12.layout = layout$$1;
  $this$$12.implements = implements$;
  $this$$12.genericParams = genericParams$$4;
  $this$$12.extends = extends$;
  $this$$12.methods = methods;
  $this$$12.nestedTypes = nestedTypes;
  $this$$12.fields = fields;
  $this$$12.methodImpls = methodImpls;
  $this$$12.events = events;
  $this$$12.properties = properties;
  $this$$12.securityDeclsStored = securityDeclsStored$$2;
  $this$$12.metadataIndex = metadataIndex$$10;
  $this$$12["customAttrsStored@2021"] = customAttrsStored$$8;
});
exports.ILTypeDef = ILTypeDef;

function ILTypeDef$$$$002Ector$$Z51F7F1CB(name$$19, attributes$$16, layout$$1, implements$, genericParams$$4, extends$, methods, nestedTypes, fields, methodImpls, events, properties, securityDeclsStored$$2, customAttrsStored$$8, metadataIndex$$10) {
  return this != null ? ILTypeDef.call(this, name$$19, attributes$$16, layout$$1, implements$, genericParams$$4, extends$, methods, nestedTypes, fields, methodImpls, events, properties, securityDeclsStored$$2, customAttrsStored$$8, metadataIndex$$10) : new ILTypeDef(name$$19, attributes$$16, layout$$1, implements$, genericParams$$4, extends$, methods, nestedTypes, fields, methodImpls, events, properties, securityDeclsStored$$2, customAttrsStored$$8, metadataIndex$$10);
}

function ILTypeDef$$$CreateStored$$Z51F7F1CB(name$$20, attributes$$17, layout$$2, implements$$$1, genericParams$$5, extends$$$1, methods$$1, nestedTypes$$1, fields$$1, methodImpls$$1, events$$1, properties$$1, securityDeclsStored$$3, customAttrsStored$$9, metadataIndex$$11) {
  return ILTypeDef$$$$002Ector$$Z51F7F1CB(name$$20, attributes$$17, layout$$2, implements$$$1, genericParams$$5, extends$$$1, methods$$1, nestedTypes$$1, fields$$1, methodImpls$$1, events$$1, properties$$1, securityDeclsStored$$3, customAttrsStored$$9, metadataIndex$$11);
}

function ILTypeDef$$$Create$$659DAD29(name$$21, attributes$$18, layout$$3, implements$$$2, genericParams$$6, extends$$$2, methods$$2, nestedTypes$$2, fields$$2, methodImpls$$2, events$$2, properties$$2, securityDecls$$2, customAttrs$$9) {
  return ILTypeDef$$$$002Ector$$Z51F7F1CB(name$$21, attributes$$18, layout$$3, implements$$$2, genericParams$$6, extends$$$2, methods$$2, nestedTypes$$2, fields$$2, methodImpls$$2, events$$2, properties$$2, storeILSecurityDecls(securityDecls$$2), storeILCustomAttrs(customAttrs$$9), NoMetadataIdx);
}

function ILTypeDef$$get_Name(__$$28) {
  return __$$28.name;
}

function ILTypeDef$$get_Attributes(__$$29) {
  return __$$29.attributes;
}

function ILTypeDef$$get_GenericParams(__$$30) {
  return __$$30.genericParams;
}

function ILTypeDef$$get_Layout(__$$31) {
  return __$$31.layout;
}

function ILTypeDef$$get_NestedTypes(__$$32) {
  return __$$32.nestedTypes;
}

function ILTypeDef$$get_Implements(__$$33) {
  return __$$33.implements;
}

function ILTypeDef$$get_Extends(__$$34) {
  return __$$34.extends;
}

function ILTypeDef$$get_Methods(__$$35) {
  return __$$35.methods;
}

function ILTypeDef$$get_SecurityDeclsStored(__$$36) {
  return __$$36.securityDeclsStored;
}

function ILTypeDef$$get_Fields(__$$37) {
  return __$$37.fields;
}

function ILTypeDef$$get_MethodImpls(__$$38) {
  return __$$38.methodImpls;
}

function ILTypeDef$$get_Events(__$$39) {
  return __$$39.events;
}

function ILTypeDef$$get_Properties(__$$40) {
  return __$$40.properties;
}

function ILTypeDef$$get_CustomAttrsStored(__$$41) {
  return __$$41["customAttrsStored@2021"];
}

function ILTypeDef$$get_MetadataIndex(__$$42) {
  return __$$42.metadataIndex;
}

function ILTypeDef$$With$$4DED7EA9(x$$227, name$$22, attributes$$19, layout$$4, implements$$$3, genericParams$$7, extends$$$3, methods$$3, nestedTypes$$3, fields$$3, methodImpls$$3, events$$3, properties$$3, customAttrs$$10, securityDecls$$3) {
  return ILTypeDef$$$Create$$659DAD29((0, _Option.defaultArg)(name$$22, ILTypeDef$$get_Name(x$$227)), (0, _Option.defaultArg)(attributes$$19, ILTypeDef$$get_Attributes(x$$227)), (0, _Option.defaultArg)(layout$$4, ILTypeDef$$get_Layout(x$$227)), (0, _Option.defaultArg)(implements$$$3, ILTypeDef$$get_Implements(x$$227)), (0, _Option.defaultArg)(genericParams$$7, ILTypeDef$$get_GenericParams(x$$227)), (0, _Option.defaultArg)(extends$$$3, ILTypeDef$$get_Extends(x$$227)), (0, _Option.defaultArg)(methods$$3, ILTypeDef$$get_Methods(x$$227)), (0, _Option.defaultArg)(nestedTypes$$3, ILTypeDef$$get_NestedTypes(x$$227)), (0, _Option.defaultArg)(fields$$3, ILTypeDef$$get_Fields(x$$227)), (0, _Option.defaultArg)(methodImpls$$3, ILTypeDef$$get_MethodImpls(x$$227)), (0, _Option.defaultArg)(events$$3, ILTypeDef$$get_Events(x$$227)), (0, _Option.defaultArg)(properties$$3, ILTypeDef$$get_Properties(x$$227)), (0, _Option.defaultArg)(securityDecls$$3, ILTypeDef$$get_SecurityDecls(x$$227)), (0, _Option.defaultArg)(customAttrs$$10, ILTypeDef$$get_CustomAttrs(x$$227)));
}

function ILTypeDef$$get_CustomAttrs(x$$228) {
  const matchValue$$19 = x$$228["customAttrsStored@2021"];

  if (matchValue$$19.tag === 1) {
    const res$$2 = matchValue$$19.fields[0];
    return res$$2;
  } else {
    const f$$14 = matchValue$$19.fields[0];
    const res$$1 = ILAttributes$$$$002Ector$$Z529E0E03(f$$14(ILTypeDef$$get_MetadataIndex(x$$228)));
    x$$228["customAttrsStored@2021"] = new ILAttributesStored(1, "Given", res$$1);
    return res$$1;
  }
}

function ILTypeDef$$get_SecurityDecls(x$$229) {
  return ILSecurityDeclsStored$$GetSecurityDecls$$Z524259A4(ILTypeDef$$get_SecurityDeclsStored(x$$229), ILTypeDef$$get_MetadataIndex(x$$229));
}

function ILTypeDef$$get_IsClass(x$$230) {
  return (0, _Util.equals)(typeKindOfFlags(ILTypeDef$$get_Name(x$$230), ILTypeDef$$get_Methods(x$$230), ILTypeDef$$get_Fields(x$$230), ILTypeDef$$get_Extends(x$$230), ILTypeDef$$get_Attributes(x$$230)), new ILTypeDefKind(0, "Class"));
}

function ILTypeDef$$get_IsStruct(x$$231) {
  return (0, _Util.equals)(typeKindOfFlags(ILTypeDef$$get_Name(x$$231), ILTypeDef$$get_Methods(x$$231), ILTypeDef$$get_Fields(x$$231), ILTypeDef$$get_Extends(x$$231), ILTypeDef$$get_Attributes(x$$231)), new ILTypeDefKind(1, "ValueType"));
}

function ILTypeDef$$get_IsInterface(x$$232) {
  return (0, _Util.equals)(typeKindOfFlags(ILTypeDef$$get_Name(x$$232), ILTypeDef$$get_Methods(x$$232), ILTypeDef$$get_Fields(x$$232), ILTypeDef$$get_Extends(x$$232), ILTypeDef$$get_Attributes(x$$232)), new ILTypeDefKind(2, "Interface"));
}

function ILTypeDef$$get_IsEnum(x$$233) {
  return (0, _Util.equals)(typeKindOfFlags(ILTypeDef$$get_Name(x$$233), ILTypeDef$$get_Methods(x$$233), ILTypeDef$$get_Fields(x$$233), ILTypeDef$$get_Extends(x$$233), ILTypeDef$$get_Attributes(x$$233)), new ILTypeDefKind(3, "Enum"));
}

function ILTypeDef$$get_IsDelegate(x$$234) {
  return (0, _Util.equals)(typeKindOfFlags(ILTypeDef$$get_Name(x$$234), ILTypeDef$$get_Methods(x$$234), ILTypeDef$$get_Fields(x$$234), ILTypeDef$$get_Extends(x$$234), ILTypeDef$$get_Attributes(x$$234)), new ILTypeDefKind(4, "Delegate"));
}

function ILTypeDef$$get_Access(x$$235) {
  return typeAccessOfFlags(ILTypeDef$$get_Attributes(x$$235));
}

function ILTypeDef$$get_IsAbstract(x$$236) {
  return (ILTypeDef$$get_Attributes(x$$236) & 128) !== 0;
}

function ILTypeDef$$get_IsSealed(x$$237) {
  return (ILTypeDef$$get_Attributes(x$$237) & 256) !== 0;
}

function ILTypeDef$$get_IsSerializable(x$$238) {
  return (ILTypeDef$$get_Attributes(x$$238) & 8192) !== 0;
}

function ILTypeDef$$get_IsComInterop(x$$239) {
  return (ILTypeDef$$get_Attributes(x$$239) & 4096) !== 0;
}

function ILTypeDef$$get_IsSpecialName(x$$240) {
  return (ILTypeDef$$get_Attributes(x$$240) & 1024) !== 0;
}

function ILTypeDef$$get_HasSecurity(x$$241) {
  return (ILTypeDef$$get_Attributes(x$$241) & 262144) !== 0;
}

function ILTypeDef$$get_Encoding(x$$242) {
  return typeEncodingOfFlags(ILTypeDef$$get_Attributes(x$$242));
}

function ILTypeDef$$get_IsStructOrEnum(x$$243) {
  if (ILTypeDef$$get_IsStruct(x$$243)) {
    return true;
  } else {
    return ILTypeDef$$get_IsEnum(x$$243);
  }
}

function ILTypeDef$$WithAccess$$322A849C(x$$244, access$$3) {
  return ILTypeDef$$With$$4DED7EA9(x$$244, null, ILTypeDef$$get_Attributes(x$$244) & ~7 | convertTypeAccessFlags(access$$3));
}

function ILTypeDef$$WithNestedAccess$$4BB0D833(x$$245, access$$4) {
  return ILTypeDef$$With$$4DED7EA9(x$$245, null, ILTypeDef$$get_Attributes(x$$245) & ~7 | convertToNestedTypeAccess(access$$4));
}

function ILTypeDef$$WithSealed$$Z1FBCCD16(x$$246, condition$$32) {
  var source$$32;
  return ILTypeDef$$With$$4DED7EA9(x$$246, null, (source$$32 = ILTypeDef$$get_Attributes(x$$246) | 0, condition$$32 ? source$$32 | 256 : source$$32 & ~256));
}

function ILTypeDef$$WithSerializable$$Z1FBCCD16(x$$247, condition$$34) {
  var source$$34;
  return ILTypeDef$$With$$4DED7EA9(x$$247, null, (source$$34 = ILTypeDef$$get_Attributes(x$$247) | 0, condition$$34 ? source$$34 | 8192 : source$$34 & ~8192));
}

function ILTypeDef$$WithAbstract$$Z1FBCCD16(x$$248, condition$$36) {
  var source$$36;
  return ILTypeDef$$With$$4DED7EA9(x$$248, null, (source$$36 = ILTypeDef$$get_Attributes(x$$248) | 0, condition$$36 ? source$$36 | 128 : source$$36 & ~128));
}

function ILTypeDef$$WithImport$$Z1FBCCD16(x$$249, condition$$38) {
  var source$$38;
  return ILTypeDef$$With$$4DED7EA9(x$$249, null, (source$$38 = ILTypeDef$$get_Attributes(x$$249) | 0, condition$$38 ? source$$38 | 4096 : source$$38 & ~4096));
}

function ILTypeDef$$WithHasSecurity$$Z1FBCCD16(x$$250, condition$$40) {
  var source$$40;
  return ILTypeDef$$With$$4DED7EA9(x$$250, null, (source$$40 = ILTypeDef$$get_Attributes(x$$250) | 0, condition$$40 ? source$$40 | 262144 : source$$40 & ~262144));
}

function ILTypeDef$$WithLayout$$2AFF1722(x$$251, layout$$5) {
  return ILTypeDef$$With$$4DED7EA9(x$$251, null, ILTypeDef$$get_Attributes(x$$251) | convertLayout(layout$$5), layout$$5);
}

function ILTypeDef$$WithKind$$Z60D3BEB0(x$$252, kind$$1) {
  return ILTypeDef$$With$$4DED7EA9(x$$252, null, ILTypeDef$$get_Attributes(x$$252) | convertTypeKind(kind$$1), null, null, null, (0, _Option.some)(kind$$1.tag === 2 ? null : ILTypeDef$$get_Extends(x$$252)));
}

function ILTypeDef$$WithEncoding$$Z475EF4F1(x$$253, encoding$$1) {
  return ILTypeDef$$With$$4DED7EA9(x$$253, null, ILTypeDef$$get_Attributes(x$$253) & ~196608 | convertEncoding(encoding$$1));
}

function ILTypeDef$$WithSpecialName$$Z1FBCCD16(x$$254, condition$$42) {
  var source$$42;
  return ILTypeDef$$With$$4DED7EA9(x$$254, null, (source$$42 = ILTypeDef$$get_Attributes(x$$254) | 0, condition$$42 ? source$$42 | 1024 : source$$42 & ~1024));
}

function ILTypeDef$$WithInitSemantics$$Z419EA49B(x$$255, init$$5) {
  return ILTypeDef$$With$$4DED7EA9(x$$255, null, ILTypeDef$$get_Attributes(x$$255) | convertInitSemantics(init$$5));
}

const ILTypeDefs = (0, _Types.declare)(function ILTypeDefs(f$$15) {
  const $this$$13 = this;
  $this$$13.array = (0, _illib.InlineDelayInit$00601$$$$002Ector$$9CB17FF)(f$$15);
  $this$$13.dict = (0, _illib.InlineDelayInit$00601$$$$002Ector$$9CB17FF)(function () {
    const arr$$1 = (0, _illib.InlineDelayInit$00601$$get_Value)($this$$13.array);
    const t$$12 = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp2.HashIdentity$$$Structural)()));

    for (let idx$$6 = 0; idx$$6 <= arr$$1.length - 1; idx$$6++) {
      const pre = arr$$1[idx$$6];
      const key$$2 = [ILPreTypeDef$$get_Namespace(pre), ILPreTypeDef$$get_Name(pre)];
      t$$12.set(key$$2, pre);
    }

    return t$$12;
  });
});
exports.ILTypeDefs = ILTypeDefs;

function ILTypeDefs$$$$002Ector$$2EB73C53(f$$15) {
  return this != null ? ILTypeDefs.call(this, f$$15) : new ILTypeDefs(f$$15);
}

function ILTypeDefs$$get_AsArray(x$$256) {
  return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (pre$$1) {
      return ILPreTypeDef$$GetTypeDef(pre$$1);
    }, (0, _illib.InlineDelayInit$00601$$get_Value)(x$$256.array));
  }), Array);
}

function ILTypeDefs$$get_AsList(x$$257) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (pre$$2) {
      return ILPreTypeDef$$GetTypeDef(pre$$2);
    }, (0, _illib.InlineDelayInit$00601$$get_Value)(x$$257.array));
  }));
}

function ILTypeDefs$$get_AsArrayOfPreTypeDefs(x$$258) {
  return (0, _illib.InlineDelayInit$00601$$get_Value)(x$$258.array);
}

function ILTypeDefs$$FindByName$$Z721C83C5(x$$259, nm$$17) {
  const patternInput$$9 = splitILTypeName(nm$$17);
  return ILPreTypeDef$$GetTypeDef((0, _illib.InlineDelayInit$00601$$get_Value)(x$$259.dict).get([patternInput$$9[0], patternInput$$9[1]]));
}

ILTypeDefs.prototype[Symbol.iterator] = function () {
  const x$$260 = this;
  return (0, _Seq.toIterator)((0, _Seq.getEnumerator)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (pre$$3) {
      return ILPreTypeDef$$GetTypeDef(pre$$3);
    }, (0, _illib.InlineDelayInit$00601$$get_Value)(x$$260.array));
  })));
};

const ILPreTypeDef = (0, _Types.declare)(function ILPreTypeDef(nameSpace, name$$23, metadataIndex$$12, storage) {
  const $this$$14 = this;
  $this$$14.nameSpace = nameSpace;
  $this$$14.name = name$$23;
  $this$$14.metadataIndex = metadataIndex$$12;
  $this$$14.storage = storage;
  $this$$14.store = null;
});
exports.ILPreTypeDef = ILPreTypeDef;

function ILPreTypeDef$$$$002Ector$$56F8E735(nameSpace, name$$23, metadataIndex$$12, storage) {
  return this != null ? ILPreTypeDef.call(this, nameSpace, name$$23, metadataIndex$$12, storage) : new ILPreTypeDef(nameSpace, name$$23, metadataIndex$$12, storage);
}

function ILPreTypeDef$$get_Namespace(__$$43) {
  return __$$43.nameSpace;
}

function ILPreTypeDef$$get_Name(__$$44) {
  return __$$44.name;
}

function ILPreTypeDef$$get_MetadataIndex(__$$45) {
  return __$$45.metadataIndex;
}

function ILPreTypeDef$$GetTypeDef(x$$261) {
  if ((0, _Util.equals)(x$$261.store, null)) {
    if (x$$261.storage.tag === 2) {
      const f$$16 = x$$261.storage.fields[0];
      x$$261.store = f$$16();
      return x$$261.store;
    } else if (x$$261.storage.tag === 1) {
      const f$$17 = x$$261.storage.fields[0];
      x$$261.store = f$$17(ILPreTypeDef$$get_MetadataIndex(x$$261));
      return x$$261.store;
    } else {
      const td = x$$261.storage.fields[0];
      x$$261.store = td;
      return td;
    }
  } else {
    return x$$261.store;
  }
}

function mkILTypeDefReader(f$$18) {
  return new ILTypeDefStored(1, "Reader", f$$18);
}

const ILNestedExportedType = (0, _Types.declare)(function ILNestedExportedType(arg1, arg2, arg3, arg4, arg5) {
  this.Name = arg1;
  this.Access = arg2;
  this.Nested = arg3;
  this.CustomAttrsStored = arg4;
  this.MetadataIndex = arg5 | 0;
}, _Types.Record);
exports.ILNestedExportedType = ILNestedExportedType;
const ILNestedExportedTypes = (0, _Types.declare)(function ILNestedExportedTypes(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILNestedExportedTypes = ILNestedExportedTypes;
const ILExportedTypeOrForwarder = (0, _Types.declare)(function ILExportedTypeOrForwarder(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.ScopeRef = arg1;
  this.Name = arg2;
  this.Attributes = arg3;
  this.Nested = arg4;
  this.CustomAttrsStored = arg5;
  this.MetadataIndex = arg6 | 0;
}, _Types.Record);
exports.ILExportedTypeOrForwarder = ILExportedTypeOrForwarder;
const ILExportedTypesAndForwarders = (0, _Types.declare)(function ILExportedTypesAndForwarders(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILExportedTypesAndForwarders = ILExportedTypesAndForwarders;

function ILNestedExportedType$$get_CustomAttrs(x$$262) {
  return ILAttributesStored$$GetCustomAttrs$$Z524259A4(x$$262.CustomAttrsStored, x$$262.MetadataIndex);
}

function ILNestedExportedTypes$$get_AsList(x$$263) {
  const ltab$$1 = x$$263.fields[0];
  return (0, _Map.foldBack)(function (_x$$1, y$$7, r$$2) {
    return (0, _Types.L)(y$$7, r$$2);
  }, ltab$$1.Value, (0, _Types.L)());
}

function ILExportedTypeOrForwarder$$get_Access(x$$264) {
  return typeAccessOfFlags(x$$264.Attributes);
}

function ILExportedTypeOrForwarder$$get_IsForwarder(x$$265) {
  return (x$$265.Attributes & 2097152) !== 0;
}

function ILExportedTypeOrForwarder$$get_CustomAttrs(x$$266) {
  return ILAttributesStored$$GetCustomAttrs$$Z524259A4(x$$266.CustomAttrsStored, x$$266.MetadataIndex);
}

function ILExportedTypesAndForwarders$$get_AsList(x$$267) {
  const ltab$$2 = x$$267.fields[0];
  return (0, _Map.foldBack)(function (_x$$2, y$$8, r$$3) {
    return (0, _Types.L)(y$$8, r$$3);
  }, ltab$$2.Value, (0, _Types.L)());
}

const ILResourceAccess = (0, _Types.declare)(function ILResourceAccess(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILResourceAccess = ILResourceAccess;
const ILResourceLocation = (0, _Types.declare)(function ILResourceLocation(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILResourceLocation = ILResourceLocation;
const ILResource = (0, _Types.declare)(function ILResource(arg1, arg2, arg3, arg4, arg5) {
  this.Name = arg1;
  this.Location = arg2;
  this.Access = arg3;
  this.CustomAttrsStored = arg4;
  this.MetadataIndex = arg5 | 0;
}, _Types.Record);
exports.ILResource = ILResource;

function ILResource$$GetBytes(r$$4) {
  if (r$$4.Location.tag === 1) {
    const bytes$$1 = r$$4.Location.fields[0];
    return bytes$$1;
  } else {
    throw new Error("GetBytes");
  }
}

function ILResource$$get_CustomAttrs(x$$268) {
  return ILAttributesStored$$GetCustomAttrs$$Z524259A4(x$$268.CustomAttrsStored, x$$268.MetadataIndex);
}

const ILResources = (0, _Types.declare)(function ILResources(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILResources = ILResources;

function ILResources$$get_AsList(x$$269) {
  const ltab$$3 = x$$269.fields[0];
  return ltab$$3;
}

const ILAssemblyLongevity = (0, _Types.declare)(function ILAssemblyLongevity(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILAssemblyLongevity = ILAssemblyLongevity;
const ILAssemblyManifest = (0, _Types.declare)(function ILAssemblyManifest(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
  this.Name = arg1;
  this.AuxModuleHashAlgorithm = arg2 | 0;
  this.SecurityDeclsStored = arg3;
  this.PublicKey = arg4;
  this.Version = arg5;
  this.Locale = arg6;
  this.CustomAttrsStored = arg7;
  this.AssemblyLongevity = arg8;
  this.DisableJitOptimizations = arg9;
  this.JitTracking = arg10;
  this.IgnoreSymbolStoreSequencePoints = arg11;
  this.Retargetable = arg12;
  this.ExportedTypes = arg13;
  this.EntrypointElsewhere = arg14;
  this.MetadataIndex = arg15 | 0;
}, _Types.Record);
exports.ILAssemblyManifest = ILAssemblyManifest;

function ILAssemblyManifest$$get_CustomAttrs(x$$270) {
  return ILAttributesStored$$GetCustomAttrs$$Z524259A4(x$$270.CustomAttrsStored, x$$270.MetadataIndex);
}

function ILAssemblyManifest$$get_SecurityDecls(x$$271) {
  return ILSecurityDeclsStored$$GetSecurityDecls$$Z524259A4(x$$271.SecurityDeclsStored, x$$271.MetadataIndex);
}

const ILNativeResource = (0, _Types.declare)(function ILNativeResource(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ILNativeResource = ILNativeResource;
const ILModuleDef = (0, _Types.declare)(function ILModuleDef(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21) {
  this.Manifest = arg1;
  this.Name = arg2;
  this.TypeDefs = arg3;
  this.SubsystemVersion = arg4;
  this.UseHighEntropyVA = arg5;
  this.SubSystemFlags = arg6 | 0;
  this.IsDLL = arg7;
  this.IsILOnly = arg8;
  this.Platform = arg9;
  this.StackReserveSize = arg10;
  this.Is32Bit = arg11;
  this.Is32BitPreferred = arg12;
  this.Is64Bit = arg13;
  this.VirtualAlignment = arg14 | 0;
  this.PhysicalAlignment = arg15 | 0;
  this.ImageBase = arg16 | 0;
  this.MetadataVersion = arg17;
  this.Resources = arg18;
  this.NativeResources = arg19;
  this.CustomAttrsStored = arg20;
  this.MetadataIndex = arg21 | 0;
}, _Types.Record);
exports.ILModuleDef = ILModuleDef;

function ILModuleDef$$get_ManifestOfAssembly(x$$272) {
  if (x$$272.Manifest == null) {
    throw new Error("no manifest.  It is possible you are using an auxiliary module of an assembly in a context where the main module of an assembly is expected.  Typically the main module of an assembly must be specified first within a list of the modules in an assembly.");
  } else {
    const m$$2 = x$$272.Manifest;
    return m$$2;
  }
}

function ILModuleDef$$get_HasManifest(m$$3) {
  if (m$$3.Manifest == null) {
    return false;
  } else {
    return true;
  }
}

function ILModuleDef$$get_CustomAttrs(x$$273) {
  return ILAttributesStored$$GetCustomAttrs$$Z524259A4(x$$273.CustomAttrsStored, x$$273.MetadataIndex);
}

const mkILEmptyGenericParams = (0, _Types.L)();
exports.mkILEmptyGenericParams = mkILEmptyGenericParams;
const emptyILGenericArgsList = (0, _Types.L)();
exports.emptyILGenericArgsList = emptyILGenericArgsList;

function mkILNestedTyRef(scope$$1, l$$6, nm$$18) {
  return ILTypeRef$$$Create$$113F1D6(scope$$1, l$$6, nm$$18);
}

function mkILTyRef(scope$$2, nm$$19) {
  return mkILNestedTyRef(scope$$2, (0, _Types.L)(), nm$$19);
}

function mkILTySpec(tref$$5, inst$$1) {
  return ILTypeSpec$$$Create$$7469E1FB(tref$$5, inst$$1);
}

function mkILNonGenericTySpec(tref$$6) {
  return mkILTySpec(tref$$6, (0, _Types.L)());
}

function mkILTyRefInTyRef(tref$$7, nm$$20) {
  return mkILNestedTyRef(ILTypeRef$$get_Scope(tref$$7), (0, _List.append)(ILTypeRef$$get_Enclosing(tref$$7), (0, _Types.L)(ILTypeRef$$get_Name(tref$$7), (0, _Types.L)())), nm$$20);
}

function mkILTy(boxed, tspec$$4) {
  if (boxed.tag === 0) {
    return mkILBoxedType(tspec$$4);
  } else {
    return new ILType(2, "Value", tspec$$4);
  }
}

function mkILNamedTy(vc, tref$$8, tinst) {
  return mkILTy(vc, ILTypeSpec$$$Create$$7469E1FB(tref$$8, tinst));
}

function mkILValueTy(tref$$9, tinst$$1) {
  return mkILNamedTy(new ILBoxity(1, "AsValue"), tref$$9, tinst$$1);
}

function mkILBoxedTy(tref$$10, tinst$$2) {
  return mkILNamedTy(new ILBoxity(0, "AsObject"), tref$$10, tinst$$2);
}

function mkILNonGenericValueTy(tref$$11) {
  return mkILNamedTy(new ILBoxity(1, "AsValue"), tref$$11, (0, _Types.L)());
}

function mkILNonGenericBoxedTy(tref$$12) {
  return mkILNamedTy(new ILBoxity(0, "AsObject"), tref$$12, (0, _Types.L)());
}

function mkSimpleAssRef(n$$11) {
  return ILAssemblyRef$$$Create$$2BC8E713(n$$11, null, null, false, null, null);
}

function mkSimpleModRef(n$$12) {
  return ILModuleRef$$$Create$$10F6F906(n$$12, true, null);
}

const typeNameForGlobalFunctions = "<Module>";
exports.typeNameForGlobalFunctions = typeNameForGlobalFunctions;

function mkILTypeForGlobalFunctions(scoref) {
  return mkILBoxedType(mkILNonGenericTySpec(ILTypeRef$$$Create$$113F1D6(scoref, (0, _Types.L)(), typeNameForGlobalFunctions)));
}

function isTypeNameForGlobalFunctions(d$$4) {
  return d$$4 === typeNameForGlobalFunctions;
}

function mkILMethRef(tref$$13, callconv, nm$$21, gparams, args$$5, rty) {
  return new ILMethodRef(tref$$13, callconv, gparams, nm$$21, args$$5, rty);
}

function mkILMethSpecForMethRefInTy(mref$$1, ty$$4, minst) {
  return new ILMethodSpec(mref$$1, ty$$4, minst);
}

function mkILMethSpec(mref$$2, vc$$1, tinst$$3, minst$$1) {
  return mkILMethSpecForMethRefInTy(mref$$2, mkILNamedTy(vc$$1, ILMethodRef$$get_DeclaringTypeRef(mref$$2), tinst$$3), minst$$1);
}

function mkILMethSpecInTypeRef(tref$$14, vc$$2, cc$$1, nm$$22, args$$6, rty$$1, tinst$$4, minst$$2) {
  return mkILMethSpec(mkILMethRef(tref$$14, cc$$1, nm$$22, (0, _List.length)(minst$$2), args$$6, rty$$1), vc$$2, tinst$$4, minst$$2);
}

function mkILMethSpecInTy(ty$$5, cc$$2, nm$$23, args$$7, rty$$2, minst$$3) {
  return mkILMethSpecForMethRefInTy(mkILMethRef(ILType$$get_TypeRef(ty$$5), cc$$2, nm$$23, (0, _List.length)(minst$$3), args$$7, rty$$2), ty$$5, minst$$3);
}

function mkILNonGenericMethSpecInTy(ty$$6, cc$$3, nm$$24, args$$8, rty$$3) {
  return mkILMethSpecInTy(ty$$6, cc$$3, nm$$24, args$$8, rty$$3, (0, _Types.L)());
}

function mkILInstanceMethSpecInTy(ty$$7, nm$$25, args$$9, rty$$4, minst$$4) {
  return mkILMethSpecInTy(ty$$7, ILCallingConv$$$get_Instance(), nm$$25, args$$9, rty$$4, minst$$4);
}

function mkILNonGenericInstanceMethSpecInTy(ty$$8, nm$$26, args$$10, rty$$5) {
  return mkILInstanceMethSpecInTy(ty$$8, nm$$26, args$$10, rty$$5, (0, _Types.L)());
}

function mkILStaticMethSpecInTy(ty$$9, nm$$27, args$$11, rty$$6, minst$$5) {
  return mkILMethSpecInTy(ty$$9, ILCallingConv$$$get_Static(), nm$$27, args$$11, rty$$6, minst$$5);
}

function mkILNonGenericStaticMethSpecInTy(ty$$10, nm$$28, args$$12, rty$$7) {
  return mkILStaticMethSpecInTy(ty$$10, nm$$28, args$$12, rty$$7, (0, _Types.L)());
}

function mkILCtorMethSpec(tref$$15, args$$13, cinst) {
  return mkILMethSpecInTypeRef(tref$$15, new ILBoxity(0, "AsObject"), ILCallingConv$$$get_Instance(), ".ctor", args$$13, new ILType(0, "Void"), cinst, (0, _Types.L)());
}

function mkILCtorMethSpecForTy(ty$$11, args$$14) {
  return mkILMethSpecInTy(ty$$11, ILCallingConv$$$get_Instance(), ".ctor", args$$14, new ILType(0, "Void"), (0, _Types.L)());
}

function mkILNonGenericCtorMethSpec(tref$$16, args$$15) {
  return mkILCtorMethSpec(tref$$16, args$$15, (0, _Types.L)());
}

function mkILFieldRef(tref$$17, nm$$29, ty$$12) {
  return new ILFieldRef(tref$$17, nm$$29, ty$$12);
}

function mkILFieldSpec(tref$$18, ty$$13) {
  return new ILFieldSpec(tref$$18, ty$$13);
}

function mkILFieldSpecInTy(ty$$14, nm$$30, fty) {
  return mkILFieldSpec(mkILFieldRef(ILType$$get_TypeRef(ty$$14), nm$$30, fty), ty$$14);
}

function andTailness(x$$274, y$$9) {
  var $target$$50;

  if (x$$274.tag === 0) {
    if (y$$9) {
      $target$$50 = 0;
    } else {
      $target$$50 = 1;
    }
  } else {
    $target$$50 = 1;
  }

  switch ($target$$50) {
    case 0:
      {
        return new ILTailcall(0, "Tailcall");
      }

    case 1:
      {
        return new ILTailcall(1, "Normalcall");
      }
  }
}

function formatCodeLabel(x$$275) {
  return "L" + (0, _Util.int32ToString)(x$$275);
}

const codeLabelCount = new _Types.FSharpRef(0);
exports.codeLabelCount = codeLabelCount;

function generateCodeLabel() {
  codeLabelCount.contents = codeLabelCount.contents + 1;
  return codeLabelCount.contents | 0;
}

function instrIsRet(i$$3) {
  if (i$$3.tag === 47) {
    return true;
  } else {
    return false;
  }
}

function nonBranchingInstrsToCode(instrs) {
  const instrs$$1 = (0, _Array.ofList)(instrs, Array);
  const instrs$$2 = (instrs$$1.length !== 0 ? instrIsRet((0, _Array.last)(instrs$$1)) : false) ? instrs$$1 : (0, _Array.append)(instrs$$1, [new ILInstr(47, "I_ret")], Array);
  return new ILCode(new Map([]), instrs$$2, (0, _Types.L)(), (0, _Types.L)());
}

function mkILTyvarTy(tv) {
  return new ILType(7, "TypeVar", tv);
}

function mkILSimpleTypar(nm$$31) {
  return new ILGenericParameterDef(nm$$31, (0, _Types.L)(), new ILGenericVariance(0, "NonVariant"), false, false, false, storeILCustomAttrs(emptyILCustomAttrs), NoMetadataIdx);
}

function gparam_of_gactual(_ga) {
  return mkILSimpleTypar("T");
}

function mkILFormalTypars(x$$276) {
  return (0, _List.map)(gparam_of_gactual, x$$276);
}

function mkILFormalGenericArgs(numtypars, gparams$$1) {
  return (0, _List.mapIndexed)(function (n$$13, _gf) {
    return mkILTyvarTy(numtypars + n$$13 & 0xFFFF);
  }, gparams$$1);
}

function mkILFormalBoxedTy(tref$$19, gparams$$2) {
  return mkILBoxedTy(tref$$19, mkILFormalGenericArgs(0, gparams$$2));
}

function mkILFormalNamedTy(bx, tref$$20, gparams$$3) {
  return mkILNamedTy(bx, tref$$20, mkILFormalGenericArgs(0, gparams$$3));
}

function mkRefForNestedILTypeDef(scope$$3, enc, td$$1) {
  return mkILNestedTyRef(scope$$3, (0, _List.map)(function mapping$$2(etd) {
    return ILTypeDef$$get_Name(etd);
  }, enc), ILTypeDef$$get_Name(td$$1));
}

function mkILPreTypeDef(td$$2) {
  const patternInput$$10 = splitILTypeName(ILTypeDef$$get_Name(td$$2));
  return ILPreTypeDef$$$$002Ector$$56F8E735(patternInput$$10[0], patternInput$$10[1], NoMetadataIdx, new ILTypeDefStored(0, "Given", td$$2));
}

function mkILPreTypeDefComputed(ns$$3, n$$15, f$$19) {
  return ILPreTypeDef$$$$002Ector$$56F8E735(ns$$3, n$$15, NoMetadataIdx, new ILTypeDefStored(2, "Computed", f$$19));
}

function mkILPreTypeDefRead(ns$$4, n$$16, idx$$7, f$$20) {
  return ILPreTypeDef$$$$002Ector$$56F8E735(ns$$4, n$$16, idx$$7, f$$20);
}

function addILTypeDef(td$$3, tdefs) {
  return ILTypeDefs$$$$002Ector$$2EB73C53(function () {
    return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.append)((0, _Seq.singleton)(mkILPreTypeDef(td$$3)), (0, _Seq.delay)(function () {
        return ILTypeDefs$$get_AsArrayOfPreTypeDefs(tdefs);
      }));
    }), Array);
  });
}

function mkILTypeDefsFromArray(l$$7) {
  return ILTypeDefs$$$$002Ector$$2EB73C53(function () {
    return (0, _Array.map)(mkILPreTypeDef, l$$7, Array);
  });
}

function mkILTypeDefs(l$$8) {
  return mkILTypeDefsFromArray((0, _Array.ofList)(l$$8, Array));
}

function mkILTypeDefsComputed(f$$21) {
  return ILTypeDefs$$$$002Ector$$2EB73C53(f$$21);
}

const emptyILTypeDefs = mkILTypeDefsFromArray([]);
exports.emptyILTypeDefs = emptyILTypeDefs;

function mkILMethodsFromArray(xs) {
  return ILMethodDefs$$$$002Ector$$4309F733(function () {
    return xs;
  });
}

function mkILMethods(xs$$1) {
  return mkILMethodsFromArray((0, _Array.ofList)(xs$$1, Array));
}

function mkILMethodsComputed(f$$22) {
  return ILMethodDefs$$$$002Ector$$4309F733(f$$22);
}

const emptyILMethods = mkILMethodsFromArray([]);
exports.emptyILMethods = emptyILMethods;

function filterILMethodDefs(f$$23, mdefs) {
  return ILMethodDefs$$$$002Ector$$4309F733(function () {
    return ILMethodDefs$$get_AsArray(mdefs).filter(f$$23);
  });
}

const defaultSubSystem = 3;
exports.defaultSubSystem = defaultSubSystem;
const defaultPhysAlignment = 512;
exports.defaultPhysAlignment = defaultPhysAlignment;
const defaultVirtAlignment = 8192;
exports.defaultVirtAlignment = defaultVirtAlignment;
const defaultImageBase = 55508992;
exports.defaultImageBase = defaultImageBase;

function mkILArrTy(ty$$15, shape) {
  return new ILType(1, "Array", shape, ty$$15);
}

function mkILArr1DTy(ty$$16) {
  return mkILArrTy(ty$$16, ILArrayShape$$$get_SingleDimensional());
}

function isILArrTy(ty$$17) {
  if (ty$$17.tag === 1) {
    return true;
  } else {
    return false;
  }
}

function destILArrTy(ty$$18) {
  if (ty$$18.tag === 1) {
    const ty$$19 = ty$$18.fields[1];
    const shape$$1 = ty$$18.fields[0];
    return [shape$$1, ty$$19];
  } else {
    throw new Error("destILArrTy");
  }
}

const ILGlobals = (0, _Types.declare)(function ILGlobals(primaryScopeRef) {
  const $this$$15 = this;
  $this$$15.primaryScopeRef = primaryScopeRef;
  $this$$15.m_typ_Object = mkILBoxedType(mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.Object")));
  $this$$15.m_typ_String = mkILBoxedType(mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.String")));
  $this$$15.m_typ_Array = mkILBoxedType(mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.Array")));
  $this$$15.m_typ_Type = mkILBoxedType(mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.Type")));
  $this$$15.m_typ_SByte = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.SByte")));
  $this$$15.m_typ_Int16 = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.Int16")));
  $this$$15.m_typ_Int32 = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.Int32")));
  $this$$15.m_typ_Int64 = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.Int64")));
  $this$$15.m_typ_Byte = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.Byte")));
  $this$$15.m_typ_UInt16 = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.UInt16")));
  $this$$15.m_typ_UInt32 = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.UInt32")));
  $this$$15.m_typ_UInt64 = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.UInt64")));
  $this$$15.m_typ_Single = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.Single")));
  $this$$15.m_typ_Double = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.Double")));
  $this$$15.m_typ_Bool = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.Boolean")));
  $this$$15.m_typ_Char = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.Char")));
  $this$$15.m_typ_IntPtr = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.IntPtr")));
  $this$$15.m_typ_UIntPtr = new ILType(2, "Value", mkILNonGenericTySpec(ILGlobals$$m_mkSysILTypeRef$$Z721C83C5($this$$15, "System.UIntPtr")));
});
exports.ILGlobals = ILGlobals;

function ILGlobals$$$$002Ector$$Z19479CC4(primaryScopeRef) {
  return this != null ? ILGlobals.call(this, primaryScopeRef) : new ILGlobals(primaryScopeRef);
}

function ILGlobals$$get_primaryAssemblyScopeRef(x$$277) {
  return ILTypeRef$$get_Scope(ILType$$get_TypeRef(x$$277.m_typ_Object));
}

function ILGlobals$$get_primaryAssemblyName(x$$278) {
  return ILAssemblyRef$$get_Name(ILScopeRef$$get_AssemblyRef(ILTypeRef$$get_Scope(ILType$$get_TypeRef(x$$278.m_typ_Object))));
}

function ILGlobals$$get_typ_Object(x$$279) {
  return x$$279.m_typ_Object;
}

function ILGlobals$$get_typ_String(x$$280) {
  return x$$280.m_typ_String;
}

function ILGlobals$$get_typ_Array(x$$281) {
  return x$$281.m_typ_Array;
}

function ILGlobals$$get_typ_Type(x$$282) {
  return x$$282.m_typ_Type;
}

function ILGlobals$$get_typ_IntPtr(x$$283) {
  return x$$283.m_typ_IntPtr;
}

function ILGlobals$$get_typ_UIntPtr(x$$284) {
  return x$$284.m_typ_UIntPtr;
}

function ILGlobals$$get_typ_Byte(x$$285) {
  return x$$285.m_typ_Byte;
}

function ILGlobals$$get_typ_Int16(x$$286) {
  return x$$286.m_typ_Int16;
}

function ILGlobals$$get_typ_Int32(x$$287) {
  return x$$287.m_typ_Int32;
}

function ILGlobals$$get_typ_Int64(x$$288) {
  return x$$288.m_typ_Int64;
}

function ILGlobals$$get_typ_SByte(x$$289) {
  return x$$289.m_typ_SByte;
}

function ILGlobals$$get_typ_UInt16(x$$290) {
  return x$$290.m_typ_UInt16;
}

function ILGlobals$$get_typ_UInt32(x$$291) {
  return x$$291.m_typ_UInt32;
}

function ILGlobals$$get_typ_UInt64(x$$292) {
  return x$$292.m_typ_UInt64;
}

function ILGlobals$$get_typ_Single(x$$293) {
  return x$$293.m_typ_Single;
}

function ILGlobals$$get_typ_Double(x$$294) {
  return x$$294.m_typ_Double;
}

function ILGlobals$$get_typ_Bool(x$$295) {
  return x$$295.m_typ_Bool;
}

function ILGlobals$$get_typ_Char(x$$296) {
  return x$$296.m_typ_Char;
}

function ILGlobals$$get_DebugText(x$$297) {
  return (0, _Util.toString)(x$$297);
}

ILGlobals.prototype.toString = function () {
  return "<ILGlobals>";
};

function ILGlobals$$m_mkSysILTypeRef$$Z721C83C5(this$$$1, nm$$50) {
  return mkILTyRef(this$$$1.primaryScopeRef, nm$$50);
}

function mkILGlobals(primaryScopeRef$$1) {
  return ILGlobals$$$$002Ector$$Z19479CC4(primaryScopeRef$$1);
}

function mkNormalCall(mspec) {
  return new ILInstr(48, "I_call", new ILTailcall(1, "Normalcall"), mspec, null);
}

function mkNormalCallvirt(mspec$$1) {
  return new ILInstr(49, "I_callvirt", new ILTailcall(1, "Normalcall"), mspec$$1, null);
}

function mkNormalCallconstraint(ty$$20, mspec$$2) {
  return new ILInstr(50, "I_callconstraint", new ILTailcall(1, "Normalcall"), ty$$20, mspec$$2, null);
}

function mkNormalNewobj(mspec$$3) {
  return new ILInstr(53, "I_newobj", mspec$$3, null);
}

const ldargs = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
  return (0, _Seq.map)(function (i$$4) {
    return new ILInstr(35, "I_ldarg", i$$4 & 0xFFFF);
  }, (0, _Seq.rangeNumber)(0, 1, 128));
}), Array);
exports.ldargs = ldargs;

function mkLdarg(i$$5) {
  if (0 < i$$5 ? i$$5 < (ldargs.length & 0xFFFF) : false) {
    return ldargs[~~i$$5];
  } else {
    return new ILInstr(35, "I_ldarg", i$$5);
  }
}

const mkLdarg0 = mkLdarg(0);
exports.mkLdarg0 = mkLdarg0;
const ldlocs = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
  return (0, _Seq.map)(function (i$$6) {
    return new ILInstr(38, "I_ldloc", i$$6 & 0xFFFF);
  }, (0, _Seq.rangeNumber)(0, 1, 512));
}), Array);
exports.ldlocs = ldlocs;

function mkLdloc(i$$7) {
  if (0 < i$$7 ? i$$7 < (ldlocs.length & 0xFFFF) : false) {
    return ldlocs[~~i$$7];
  } else {
    return new ILInstr(38, "I_ldloc", i$$7);
  }
}

const stlocs = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
  return (0, _Seq.map)(function (i$$8) {
    return new ILInstr(42, "I_stloc", i$$8 & 0xFFFF);
  }, (0, _Seq.rangeNumber)(0, 1, 512));
}), Array);
exports.stlocs = stlocs;

function mkStloc(i$$9) {
  if (0 < i$$9 ? i$$9 < (stlocs.length & 0xFFFF) : false) {
    return stlocs[~~i$$9];
  } else {
    return new ILInstr(42, "I_stloc", i$$9);
  }
}

const ldi32s = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
  return (0, _Seq.map)(function (i$$10) {
    return new ILInstr(34, "AI_ldc", new ILBasicType(5, "DT_I4"), new ILConst(0, "I4", i$$10));
  }, (0, _Seq.rangeNumber)(0, 1, 256));
}), Array);
exports.ldi32s = ldi32s;

function mkLdcInt32(i$$11) {
  if (0 < i$$11 ? i$$11 < ldi32s.length : false) {
    return ldi32s[i$$11];
  } else {
    return new ILInstr(34, "AI_ldc", new ILBasicType(5, "DT_I4"), new ILConst(0, "I4", i$$11));
  }
}

const tname_CompilerGeneratedAttribute = "System.Runtime.CompilerServices.CompilerGeneratedAttribute";
exports.tname_CompilerGeneratedAttribute = tname_CompilerGeneratedAttribute;
const tname_DebuggableAttribute = "System.Diagnostics.DebuggableAttribute";
exports.tname_DebuggableAttribute = tname_DebuggableAttribute;
const ecmaPublicKey = new PublicKey(1, "PublicKeyToken", (0, _bytes.Bytes$$$ofInt32Array)(new Int32Array([222, 173, 190, 239, 202, 254, 250, 206])));
exports.ecmaPublicKey = ecmaPublicKey;

function isILBoxedTy(_arg1) {
  if (_arg1.tag === 3) {
    return true;
  } else {
    return false;
  }
}

function isILValueTy(_arg1$$1) {
  if (_arg1$$1.tag === 2) {
    return true;
  } else {
    return false;
  }
}

function isPrimaryAssemblyTySpec(tspec$$5, n$$17) {
  const tref$$21 = ILTypeSpec$$get_TypeRef(tspec$$5);
  const scoref$$1 = ILTypeRef$$get_Scope(tref$$21);

  if (ILTypeRef$$get_Name(tref$$21) === n$$17) {
    switch (scoref$$1.tag) {
      case 1:
        {
          return false;
        }

      case 0:
        {
          return true;
        }

      default:
        {
          const n$$18 = scoref$$1.fields[0];
          return PrimaryAssembly$$$IsSomePrimaryAssembly$$Z721C83C5(ILAssemblyRef$$get_Name(n$$18));
        }
    }
  } else {
    return false;
  }
}

function isILBoxedPrimaryAssemblyTy(ty$$21, n$$19) {
  if (isILBoxedTy(ty$$21)) {
    return isPrimaryAssemblyTySpec(ILType$$get_TypeSpec(ty$$21), n$$19);
  } else {
    return false;
  }
}

function isILValuePrimaryAssemblyTy(ty$$22, n$$20) {
  if (isILValueTy(ty$$22)) {
    return isPrimaryAssemblyTySpec(ILType$$get_TypeSpec(ty$$22), n$$20);
  } else {
    return false;
  }
}

function isILObjectTy(ty$$23) {
  return isILBoxedPrimaryAssemblyTy(ty$$23, "System.Object");
}

function isILStringTy(ty$$24) {
  return isILBoxedPrimaryAssemblyTy(ty$$24, "System.String");
}

function isILTypedReferenceTy(ty$$25) {
  return isILValuePrimaryAssemblyTy(ty$$25, "System.TypedReference");
}

function isILSByteTy(ty$$26) {
  return isILValuePrimaryAssemblyTy(ty$$26, "System.SByte");
}

function isILByteTy(ty$$27) {
  return isILValuePrimaryAssemblyTy(ty$$27, "System.Byte");
}

function isILInt16Ty(ty$$28) {
  return isILValuePrimaryAssemblyTy(ty$$28, "System.Int16");
}

function isILUInt16Ty(ty$$29) {
  return isILValuePrimaryAssemblyTy(ty$$29, "System.UInt16");
}

function isILInt32Ty(ty$$30) {
  return isILValuePrimaryAssemblyTy(ty$$30, "System.Int32");
}

function isILUInt32Ty(ty$$31) {
  return isILValuePrimaryAssemblyTy(ty$$31, "System.UInt32");
}

function isILInt64Ty(ty$$32) {
  return isILValuePrimaryAssemblyTy(ty$$32, "System.Int64");
}

function isILUInt64Ty(ty$$33) {
  return isILValuePrimaryAssemblyTy(ty$$33, "System.UInt64");
}

function isILIntPtrTy(ty$$34) {
  return isILValuePrimaryAssemblyTy(ty$$34, "System.IntPtr");
}

function isILUIntPtrTy(ty$$35) {
  return isILValuePrimaryAssemblyTy(ty$$35, "System.UIntPtr");
}

function isILBoolTy(ty$$36) {
  return isILValuePrimaryAssemblyTy(ty$$36, "System.Boolean");
}

function isILCharTy(ty$$37) {
  return isILValuePrimaryAssemblyTy(ty$$37, "System.Char");
}

function isILSingleTy(ty$$38) {
  return isILValuePrimaryAssemblyTy(ty$$38, "System.Single");
}

function isILDoubleTy(ty$$39) {
  return isILValuePrimaryAssemblyTy(ty$$39, "System.Double");
}

function rescopeILScopeRef(scoref$$2, scoref1) {
  const matchValue$$25 = [scoref$$2, scoref1];
  var $target$$58;

  if (matchValue$$25[1].tag === 0) {
    $target$$58 = 0;
  } else if (matchValue$$25[1].tag === 1) {
    if (matchValue$$25[0].tag === 0) {
      $target$$58 = 1;
    } else if (matchValue$$25[0].tag === 1) {
      $target$$58 = 2;
    } else {
      $target$$58 = 2;
    }
  } else if (matchValue$$25[0].tag === 0) {
    $target$$58 = 1;
  } else if (matchValue$$25[0].tag === 1) {
    $target$$58 = 3;
  } else {
    $target$$58 = 4;
  }

  switch ($target$$58) {
    case 0:
      {
        return scoref$$2;
      }

    case 1:
      {
        return scoref1;
      }

    case 2:
      {
        return scoref$$2;
      }

    case 3:
      {
        return scoref1;
      }

    case 4:
      {
        return scoref1;
      }
  }
}

function rescopeILTypeRef(scoref$$3, tref1) {
  const scoref1$$1 = ILTypeRef$$get_Scope(tref1);
  const scoref2 = rescopeILScopeRef(scoref$$3, scoref1$$1);

  if (scoref1$$1 === scoref2) {
    return tref1;
  } else {
    return ILTypeRef$$$Create$$113F1D6(scoref2, ILTypeRef$$get_Enclosing(tref1), ILTypeRef$$get_Name(tref1));
  }
}

function rescopeILTypeSpec(scoref$$4, tspec1) {
  const tref1$$1 = ILTypeSpec$$get_TypeRef(tspec1);
  const tinst1 = ILTypeSpec$$get_GenericArgs(tspec1);
  const tref2 = rescopeILTypeRef(scoref$$4, tref1$$1);

  if (tref1$$1 === tref2) {
    if (tinst1.tail == null) {
      return tspec1;
    } else {
      const tinst2 = rescopeILTypes(scoref$$4, tinst1);

      if (tinst1 === tinst2) {
        return tspec1;
      } else {
        return ILTypeSpec$$$Create$$7469E1FB(tref2, tinst2);
      }
    }
  } else {
    const tinst2$$1 = rescopeILTypes(scoref$$4, tinst1);
    return ILTypeSpec$$$Create$$7469E1FB(tref2, tinst2$$1);
  }
}

function rescopeILType(scoref$$5, ty$$40) {
  switch (ty$$40.tag) {
    case 4:
      {
        const t$$13 = ty$$40.fields[0];
        return new ILType(4, "Ptr", rescopeILType(scoref$$5, t$$13));
      }

    case 6:
      {
        const t$$14 = ty$$40.fields[0];
        return new ILType(6, "FunctionPointer", rescopeILCallSig(scoref$$5, t$$14));
      }

    case 5:
      {
        const t$$15 = ty$$40.fields[0];
        return new ILType(5, "Byref", rescopeILType(scoref$$5, t$$15));
      }

    case 3:
      {
        const cr1 = ty$$40.fields[0];
        const cr2 = rescopeILTypeSpec(scoref$$5, cr1);

        if (cr1 === cr2) {
          return ty$$40;
        } else {
          return mkILBoxedType(cr2);
        }
      }

    case 1:
      {
        const s$$10 = ty$$40.fields[0];
        const ety1 = ty$$40.fields[1];
        const ety2 = rescopeILType(scoref$$5, ety1);

        if (ety1 === ety2) {
          return ty$$40;
        } else {
          return new ILType(1, "Array", s$$10, ety2);
        }
      }

    case 2:
      {
        const cr1$$1 = ty$$40.fields[0];
        const cr2$$1 = rescopeILTypeSpec(scoref$$5, cr1$$1);

        if (cr1$$1 === cr2$$1) {
          return ty$$40;
        } else {
          return new ILType(2, "Value", cr2$$1);
        }
      }

    case 8:
      {
        const ty$$41 = ty$$40.fields[2];
        const tref$$22 = ty$$40.fields[1];
        const b$$11 = ty$$40.fields[0];
        return new ILType(8, "Modified", b$$11, rescopeILTypeRef(scoref$$5, tref$$22), rescopeILType(scoref$$5, ty$$41));
      }

    default:
      {
        const x$$305 = ty$$40;
        return x$$305;
      }
  }
}

function rescopeILTypes(scoref$$6, i$$12) {
  if (i$$12.tail == null) {
    return i$$12;
  } else {
    return (0, _illib.List$$$mapq)(function (arg10$0040) {
      return rescopeILType(scoref$$6, arg10$0040);
    }, i$$12);
  }
}

function rescopeILCallSig(scoref$$7, csig) {
  return mkILCallSig(csig.CallingConv, rescopeILTypes(scoref$$7, csig.ArgTypes), rescopeILType(scoref$$7, csig.ReturnType));
}

function rescopeILMethodRef(scoref$$8, x$$306) {
  return new ILMethodRef(rescopeILTypeRef(scoref$$8, ILMethodRef$$get_DeclaringTypeRef(x$$306)), x$$306.mrefCallconv, x$$306.mrefGenericArity, x$$306.mrefName, rescopeILTypes(scoref$$8, x$$306.mrefArgs), rescopeILType(scoref$$8, x$$306.mrefReturn));
}

function rescopeILFieldRef(scoref$$9, x$$307) {
  return new ILFieldRef(rescopeILTypeRef(scoref$$9, x$$307.DeclaringTypeRef), x$$307.Name, rescopeILType(scoref$$9, x$$307.Type));
}

function instILTypeSpecAux(numFree, inst$$2, tspec$$6) {
  return ILTypeSpec$$$Create$$7469E1FB(ILTypeSpec$$get_TypeRef(tspec$$6), instILGenericArgsAux(numFree, inst$$2, ILTypeSpec$$get_GenericArgs(tspec$$6)));
}

function instILTypeAux(numFree$$1, inst$$3, ty$$42) {
  switch (ty$$42.tag) {
    case 4:
      {
        const t$$16 = ty$$42.fields[0];
        return new ILType(4, "Ptr", instILTypeAux(numFree$$1, inst$$3, t$$16));
      }

    case 6:
      {
        const t$$17 = ty$$42.fields[0];
        return new ILType(6, "FunctionPointer", instILCallSigAux(numFree$$1, inst$$3, t$$17));
      }

    case 1:
      {
        const t$$18 = ty$$42.fields[1];
        const a$$5 = ty$$42.fields[0];
        return new ILType(1, "Array", a$$5, instILTypeAux(numFree$$1, inst$$3, t$$18));
      }

    case 5:
      {
        const t$$19 = ty$$42.fields[0];
        return new ILType(5, "Byref", instILTypeAux(numFree$$1, inst$$3, t$$19));
      }

    case 3:
      {
        const cr = ty$$42.fields[0];
        return mkILBoxedType(instILTypeSpecAux(numFree$$1, inst$$3, cr));
      }

    case 2:
      {
        const cr$$1 = ty$$42.fields[0];
        return new ILType(2, "Value", instILTypeSpecAux(numFree$$1, inst$$3, cr$$1));
      }

    case 7:
      {
        const v$$6 = ty$$42.fields[0];
        const v$$7 = ~~v$$6 | 0;
        const top = (0, _List.length)(inst$$3) | 0;

        if (v$$7 < numFree$$1) {
          return ty$$42;
        } else if (v$$7 - numFree$$1 >= top) {
          return new ILType(7, "TypeVar", v$$7 - top & 0xFFFF);
        } else {
          return (0, _List.item)(v$$7 - numFree$$1, inst$$3);
        }
      }

    default:
      {
        const x$$308 = ty$$42;
        return x$$308;
      }
  }
}

function instILGenericArgsAux(numFree$$2, inst$$4, i$$13) {
  return (0, _List.map)(function (arg20$0040) {
    return instILTypeAux(numFree$$2, inst$$4, arg20$0040);
  }, i$$13);
}

function instILCallSigAux(numFree$$3, inst$$5, csig$$1) {
  return mkILCallSig(csig$$1.CallingConv, (0, _List.map)(function (arg20$0040$$1) {
    return instILTypeAux(numFree$$3, inst$$5, arg20$0040$$1);
  }, csig$$1.ArgTypes), instILTypeAux(numFree$$3, inst$$5, csig$$1.ReturnType));
}

function instILType(i$$14, t$$20) {
  return instILTypeAux(0, i$$14, t$$20);
}

function mkILParam(name$$24, ty$$43) {
  return new ILParameter(name$$24, ty$$43, null, null, false, false, false, storeILCustomAttrs(emptyILCustomAttrs), NoMetadataIdx);
}

function mkILParamNamed(s$$11, ty$$44) {
  return mkILParam(s$$11, ty$$44);
}

function mkILParamAnon(ty$$45) {
  return mkILParam(null, ty$$45);
}

function mkILReturn(ty$$46) {
  return new ILReturn(null, ty$$46, storeILCustomAttrs(emptyILCustomAttrs), NoMetadataIdx);
}

function mkILLocal(ty$$47, dbgInfo) {
  return new ILLocal(ty$$47, false, dbgInfo);
}

function ILFieldSpec$$get_ActualType(fr) {
  const env = ILType$$get_GenericArgs(fr.DeclaringType);
  return instILType(env, ILFieldSpec$$get_FormalType(fr));
}

function mkILMethodBody(zeroinit, locals, maxstack, code, tag) {
  return new ILMethodBody(zeroinit, maxstack, false, false, locals, code, tag);
}

function mkMethodBody(zeroinit$$1, locals$$1, maxstack$$1, code$$1, tag$$1) {
  return new MethodBody(0, "IL", mkILMethodBody(zeroinit$$1, locals$$1, maxstack$$1, code$$1, tag$$1));
}

const mkILVoidReturn = mkILReturn(new ILType(0, "Void"));
exports.mkILVoidReturn = mkILVoidReturn;
const methBodyNotAvailable = mkMethBodyAux(new MethodBody(4, "NotAvailable"));
exports.methBodyNotAvailable = methBodyNotAvailable;
const methBodyAbstract = mkMethBodyAux(new MethodBody(2, "Abstract"));
exports.methBodyAbstract = methBodyAbstract;
const methBodyNative = mkMethBodyAux(new MethodBody(3, "Native"));
exports.methBodyNative = methBodyNative;

function mkILCtor(access$$5, args$$16, impl) {
  return ILMethodDef$$$Create$$Z54D6B21F(".ctor", convertMemberAccess(access$$5) | 2048 | 4096, 0, ILCallingConv$$$get_Instance(), args$$16, mkILVoidReturn, mkMethBodyAux(impl), false, mkILEmptyGenericParams, emptyILSecurityDecls, emptyILCustomAttrs);
}

function mkCallBaseConstructor(ty$$48, args$$17) {
  return (0, _List.append)((0, _Types.L)(mkLdarg0, (0, _Types.L)()), (0, _List.append)((0, _List.mapIndexed)(function (i$$15, _arg1$$2) {
    return mkLdarg(i$$15 + 1 & 0xFFFF);
  }, args$$17), (0, _Types.L)(mkNormalCall(mkILCtorMethSpecForTy(ty$$48, (0, _Types.L)())), (0, _Types.L)())));
}

function mkNormalStfld(fspec) {
  return new ILInstr(64, "I_stfld", new ILAlignment(0, "Aligned"), new ILVolatility(1, "Nonvolatile"), fspec);
}

function mkNormalStsfld(fspec$$1) {
  return new ILInstr(63, "I_stsfld", new ILVolatility(1, "Nonvolatile"), fspec$$1);
}

function mkNormalLdsfld(fspec$$2) {
  return new ILInstr(59, "I_ldsfld", new ILVolatility(1, "Nonvolatile"), fspec$$2);
}

function mkNormalLdfld(fspec$$3) {
  return new ILInstr(60, "I_ldfld", new ILAlignment(0, "Aligned"), new ILVolatility(1, "Nonvolatile"), fspec$$3);
}

function mkNormalLdflda(fspec$$4) {
  return new ILInstr(62, "I_ldflda", fspec$$4);
}

function mkNormalLdobj(dt) {
  return new ILInstr(72, "I_ldobj", new ILAlignment(0, "Aligned"), new ILVolatility(1, "Nonvolatile"), dt);
}

function mkNormalStobj(dt$$1) {
  return new ILInstr(73, "I_stobj", new ILAlignment(0, "Aligned"), new ILVolatility(1, "Nonvolatile"), dt$$1);
}

function mkILNonGenericEmptyCtor(tag$$2, superTy) {
  const ctor = mkCallBaseConstructor(superTy, (0, _Types.L)());
  return mkILCtor(new ILMemberAccess(6, "Public"), (0, _Types.L)(), mkMethodBody(false, (0, _Types.L)(), 8, nonBranchingInstrsToCode(ctor), tag$$2));
}

function mkILStaticMethod(genparams, nm$$51, access$$6, args$$18, ret$$5, impl$$1) {
  return ILMethodDef$$$Create$$Z54D6B21F(nm$$51, convertMemberAccess(access$$6) | 16, 0, ILCallingConv$$$get_Static(), args$$18, ret$$5, mkMethBodyAux(impl$$1), false, genparams, emptyILSecurityDecls, emptyILCustomAttrs);
}

function mkILNonGenericStaticMethod(nm$$52, access$$7, args$$19, ret$$6, impl$$2) {
  return mkILStaticMethod(mkILEmptyGenericParams, nm$$52, access$$7, args$$19, ret$$6, impl$$2);
}

function mkILClassCtor(impl$$3) {
  return ILMethodDef$$$Create$$Z54D6B21F(".cctor", 1 | 16 | 2048 | 4096, 0, ILCallingConv$$$get_Static(), (0, _Types.L)(), mkILVoidReturn, mkMethBodyAux(impl$$3), false, mkILEmptyGenericParams, emptyILSecurityDecls, emptyILCustomAttrs);
}

function mk_ospec(ty$$49, callconv$$1, nm$$53, genparams$$1, formal_args, formal_ret) {
  return new ILOverridesSpec(0, "OverridesSpec", mkILMethRef(ILType$$get_TypeRef(ty$$49), callconv$$1, nm$$53, genparams$$1, formal_args, formal_ret), ty$$49);
}

function mkILGenericVirtualMethod(nm$$54, access$$8, genparams$$2, actual_args, actual_ret, impl$$4) {
  return ILMethodDef$$$Create$$Z54D6B21F(nm$$54, convertMemberAccess(access$$8) | 512 | (impl$$4.tag === 2 ? 1024 | 64 : 64), 0, ILCallingConv$$$get_Instance(), actual_args, actual_ret, mkMethBodyAux(impl$$4), false, genparams$$2, emptyILSecurityDecls, emptyILCustomAttrs);
}

function mkILNonGenericVirtualMethod(nm$$55, access$$9, args$$20, ret$$7, impl$$5) {
  return mkILGenericVirtualMethod(nm$$55, access$$9, mkILEmptyGenericParams, args$$20, ret$$7, impl$$5);
}

function mkILGenericNonVirtualMethod(nm$$56, access$$10, genparams$$3, actual_args$$1, actual_ret$$1, impl$$6) {
  return ILMethodDef$$$Create$$Z54D6B21F(nm$$56, convertMemberAccess(access$$10) | 128, 0, ILCallingConv$$$get_Instance(), actual_args$$1, actual_ret$$1, mkMethBodyAux(impl$$6), false, genparams$$3, emptyILSecurityDecls, emptyILCustomAttrs);
}

function mkILNonGenericInstanceMethod(nm$$57, access$$11, args$$21, ret$$8, impl$$7) {
  return mkILGenericNonVirtualMethod(nm$$57, access$$11, mkILEmptyGenericParams, args$$21, ret$$8, impl$$7);
}

function ilmbody_code2code(f$$24, il$$3) {
  return new ILMethodBody(il$$3.IsZeroInit, il$$3.MaxStack, il$$3.NoInlining, il$$3.AggressiveInlining, il$$3.Locals, f$$24(il$$3.Code), il$$3.SourceMarker);
}

function mdef_code2code(f$$25, md$$2) {
  let il$$5;
  const matchValue$$26 = ILLazyMethodBody$$get_Contents(ILMethodDef$$get_Body(md$$2));

  if (matchValue$$26.tag === 0) {
    const il$$4 = matchValue$$26.fields[0];
    il$$5 = il$$4;
  } else {
    throw new Error("mdef_code2code - method not IL");
  }

  const b$$12 = new MethodBody(0, "IL", ilmbody_code2code(f$$25, il$$5));
  return ILMethodDef$$With$$Z3726C02C(md$$2, null, null, null, null, null, null, mkMethBodyAux(b$$12));
}

function prependInstrsToCode(instrs$$3, c2) {
  const instrs$$4 = (0, _Array.ofList)(instrs$$3, Array);
  const n$$21 = instrs$$4.length | 0;
  const matchValue$$27 = c2.Instrs[0];

  if (matchValue$$27.tag === 89) {
    const i0 = matchValue$$27;
    let labels;
    let dict;
    const size = c2.Labels.size | 0;
    dict = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp2.HashIdentity$$$Structural)()));
    (0, _Seq.iterate)(function (kvp) {
      dict.set(kvp[0], kvp[1] === 0 ? 0 : kvp[1] + n$$21);
    }, c2.Labels);
    labels = dict;
    return new ILCode(labels, (0, _Array.concat)([[i0], instrs$$4, c2.Instrs.slice(1, c2.Instrs.length)], Array), c2.Exceptions, c2.Locals);
  } else {
    let labels$$1;
    let dict$$1;
    const size$$1 = c2.Labels.size | 0;
    dict$$1 = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp2.HashIdentity$$$Structural)()));
    (0, _Seq.iterate)(function (kvp$$1) {
      dict$$1.set(kvp$$1[0], kvp$$1[1] + n$$21);
    }, c2.Labels);
    labels$$1 = dict$$1;
    return new ILCode(labels$$1, (0, _Array.append)(instrs$$4, c2.Instrs, Array), c2.Exceptions, c2.Locals);
  }
}

function prependInstrsToMethod(new_code, md$$3) {
  return mdef_code2code(function (arg10$0040$$1) {
    return prependInstrsToCode(new_code, arg10$0040$$1);
  }, md$$3);
}

function cdef_cctorCode2CodeOrCreate(tag$$3, f$$26, cd) {
  const mdefs$$1 = ILTypeDef$$get_Methods(cd);
  let cctor;
  const matchValue$$28 = ILMethodDefs$$FindByName$$Z721C83C5(mdefs$$1, ".cctor");

  if (matchValue$$28.tail == null) {
    cctor = mkILClassCtor(mkMethodBody(false, (0, _Types.L)(), 1, nonBranchingInstrsToCode((0, _Types.L)()), tag$$3));
  } else if (matchValue$$28.tail.tail == null) {
    cctor = matchValue$$28.head;
  } else {
    throw new Error("bad method table: more than one .cctor found");
  }

  const methods$$4 = ILMethodDefs$$$$002Ector$$4309F733(function () {
    return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.append)((0, _Seq.singleton)(f$$26(cctor)), (0, _Seq.delay)(function () {
        return (0, _Seq.collect)(function (md$$4) {
          return ILMethodDef$$get_Name(md$$4) !== ".cctor" ? (0, _Seq.singleton)(md$$4) : (0, _Seq.empty)();
        }, mdefs$$1);
      }));
    }), Array);
  });
  return ILTypeDef$$With$$4DED7EA9(cd, null, null, null, null, null, null, methods$$4);
}

function code_of_mdef(md$$5) {
  const matchValue$$29 = ILMethodDef$$get_Code(md$$5);

  if (matchValue$$29 == null) {
    throw new Error("code_of_mdef: not IL");
  } else {
    const x$$309 = matchValue$$29;
    return x$$309;
  }
}

function mkRefToILMethod(tref$$23, md$$6) {
  return mkILMethRef(tref$$23, ILMethodDef$$get_CallingConv(md$$6), ILMethodDef$$get_Name(md$$6), (0, _List.length)(ILMethodDef$$get_GenericParams(md$$6)), ILMethodDef$$get_ParameterTypes(md$$6), ILMethodDef$$get_Return(md$$6).Type);
}

function mkRefToILField(tref$$24, fdef) {
  return mkILFieldRef(tref$$24, ILFieldDef$$get_Name(fdef), ILFieldDef$$get_FieldType(fdef));
}

function mkRefForILMethod(scope$$4, tdefs$$1, tdef, mdef$$1) {
  return mkRefToILMethod(mkRefForNestedILTypeDef(scope$$4, tdefs$$1, tdef), mdef$$1);
}

function mkRefForILField(scope$$5, tdefs$$2, tdef$$1, fdef$$1) {
  return mkILFieldRef(mkRefForNestedILTypeDef(scope$$5, tdefs$$2, tdef$$1), ILFieldDef$$get_Name(fdef$$1), ILFieldDef$$get_FieldType(fdef$$1));
}

function prependInstrsToClassCtor(instrs$$5, tag$$4, cd$$1) {
  return cdef_cctorCode2CodeOrCreate(tag$$4, function (arg10$0040$$2) {
    return prependInstrsToMethod(instrs$$5, arg10$0040$$2);
  }, cd$$1);
}

function mkILField(isStatic, nm$$58, ty$$50, init$$6, at, access$$12, isLiteral) {
  return ILFieldDef$$$Create$$Z60727407(nm$$58, ty$$50, convertFieldAccess(access$$12) | (isStatic ? 16 : 0) | (isLiteral ? 64 : 0) | (init$$6 != null ? 32768 : 0) | (at != null ? 256 : 0), at, init$$6, null, null, emptyILCustomAttrs);
}

function mkILInstanceField(nm$$59, ty$$51, init$$7, access$$13) {
  return mkILField(false, nm$$59, ty$$51, init$$7, null, access$$13, false);
}

function mkILStaticField(nm$$60, ty$$52, init$$8, at$$1, access$$14) {
  return mkILField(true, nm$$60, ty$$52, init$$8, at$$1, access$$14, false);
}

function mkILLiteralField(nm$$61, ty$$53, init$$9, at$$2, access$$15) {
  return mkILField(true, nm$$61, ty$$53, init$$9, at$$2, access$$15, true);
}

const ILLocalsAllocator = (0, _Types.declare)(function ILLocalsAllocator(numPrealloc) {
  const $this$$16 = this;
  $this$$16.numPrealloc = numPrealloc;
  $this$$16.newLocals = [];
});
exports.ILLocalsAllocator = ILLocalsAllocator;

function ILLocalsAllocator$$$$002Ector$$Z524259A4(numPrealloc) {
  return this != null ? ILLocalsAllocator.call(this, numPrealloc) : new ILLocalsAllocator(numPrealloc);
}

function ILLocalsAllocator$$AllocLocal$$6306688A(tmps, loc) {
  const locn = tmps.numPrealloc + (0, _Util.count)(tmps.newLocals) & 0xFFFF;
  tmps.newLocals.push(loc);
  return locn;
}

function ILLocalsAllocator$$Close(tmps$$1) {
  return (0, _ResizeArray.toList)(tmps$$1.newLocals);
}

function mkILFieldsLazy(l$$11) {
  return new ILFieldDefs(0, "ILFields", LazyOrderedMultiMap$00602$$$$002Ector$$48A8A99B(function (f$$27) {
    return ILFieldDef$$get_Name(f$$27);
  }, l$$11));
}

function mkILFields(l$$12) {
  return mkILFieldsLazy(notlazy(l$$12));
}

const emptyILFields = mkILFields((0, _Types.L)());
exports.emptyILFields = emptyILFields;

function mkILEventsLazy(l$$13) {
  return new ILEventDefs(0, "ILEvents", LazyOrderedMultiMap$00602$$$$002Ector$$48A8A99B(function (e$$2) {
    return ILEventDef$$get_Name(e$$2);
  }, l$$13));
}

function mkILEvents(l$$14) {
  return mkILEventsLazy(notlazy(l$$14));
}

const emptyILEvents = mkILEvents((0, _Types.L)());
exports.emptyILEvents = emptyILEvents;

function mkILPropertiesLazy(l$$15) {
  return new ILPropertyDefs(0, "ILProperties", LazyOrderedMultiMap$00602$$$$002Ector$$48A8A99B(function (p$$1) {
    return ILPropertyDef$$get_Name(p$$1);
  }, l$$15));
}

function mkILProperties(l$$16) {
  return mkILPropertiesLazy(notlazy(l$$16));
}

const emptyILProperties = mkILProperties((0, _Types.L)());
exports.emptyILProperties = emptyILProperties;

function addExportedTypeToTable(y$$16, tab) {
  return (0, _Map.add)(y$$16.Name, y$$16, tab);
}

function mkILExportedTypes(l$$17) {
  return new ILExportedTypesAndForwarders(0, "ILExportedTypesAndForwarders", notlazy((0, _List.foldBack)(addExportedTypeToTable, l$$17, (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }))));
}

function mkILExportedTypesLazy(l$$18) {
  return new ILExportedTypesAndForwarders(0, "ILExportedTypesAndForwarders", new _Util.Lazy(function () {
    return (0, _List.foldBack)(addExportedTypeToTable, l$$18.Value, (0, _Map.empty)({
      Compare: _Util.comparePrimitives
    }));
  }));
}

function addNestedExportedTypeToTable(y$$19, tab$$3) {
  return (0, _Map.add)(y$$19.Name, y$$19, tab$$3);
}

function mkTypeForwarder(scopeRef, name$$25, nested, customAttrs$$11, access$$16) {
  return new ILExportedTypeOrForwarder(scopeRef, name$$25, 2097152 | convertTypeAccessFlags(access$$16), nested, storeILCustomAttrs(customAttrs$$11), NoMetadataIdx);
}

function mkILNestedExportedTypes(l$$19) {
  return new ILNestedExportedTypes(0, "ILNestedExportedTypes", notlazy((0, _List.foldBack)(addNestedExportedTypeToTable, l$$19, (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }))));
}

function mkILNestedExportedTypesLazy(l$$20) {
  return new ILNestedExportedTypes(0, "ILNestedExportedTypes", new _Util.Lazy(function () {
    return (0, _List.foldBack)(addNestedExportedTypeToTable, l$$20.Value, (0, _Map.empty)({
      Compare: _Util.comparePrimitives
    }));
  }));
}

function mkILResources(l$$21) {
  return new ILResources(0, "ILResources", l$$21);
}

function addMethodImplToTable(y$$22, tab$$6) {
  const key$$3 = [ILMethodRef$$get_Name(ILOverridesSpec$$get_MethodRef(y$$22.Overrides)), (0, _List.length)(ILMethodRef$$get_ArgTypes(ILOverridesSpec$$get_MethodRef(y$$22.Overrides)))];
  const prev = (0, _illib.Map$$$tryFindMulti)(key$$3, tab$$6);
  return (0, _Map.add)(key$$3, (0, _Types.L)(y$$22, prev), tab$$6);
}

function mkILMethodImpls(l$$22) {
  return new ILMethodImplDefs(0, "ILMethodImpls", notlazy((0, _List.foldBack)(addMethodImplToTable, l$$22, (0, _Map.empty)({
    Compare: _Util.compareArrays
  }))));
}

function mkILMethodImplsLazy(l$$23) {
  return new ILMethodImplDefs(0, "ILMethodImpls", new _Util.Lazy(function () {
    return (0, _List.foldBack)(addMethodImplToTable, (0, _illib.Lazy$$$force)(l$$23), (0, _Map.empty)({
      Compare: _Util.compareArrays
    }));
  }));
}

const emptyILMethodImpls = mkILMethodImpls((0, _Types.L)());
exports.emptyILMethodImpls = emptyILMethodImpls;

function mkILStorageCtorWithParamNames(tag$$5, preblock, ty$$54, extraParams, flds, access$$17) {
  var x$$310;
  return mkILCtor(access$$17, (0, _List.append)((0, _List.map)(function mapping$$3(tupledArg) {
    return mkILParamNamed(tupledArg[0], tupledArg[2]);
  }, flds), extraParams), mkMethodBody(false, (0, _Types.L)(), 2, nonBranchingInstrsToCode((0, _List.append)(tag$$5 == null ? (0, _Types.L)() : (x$$310 = tag$$5, (0, _Types.L)(new ILInstr(89, "I_seqpoint", x$$310), (0, _Types.L)())), (0, _List.append)(preblock, (0, _List.concat)((0, _List.mapIndexed)(function (n$$22, tupledArg$$1) {
    return (0, _Types.L)(mkLdarg0, (0, _Types.L)(mkLdarg(n$$22 + 1 & 0xFFFF), (0, _Types.L)(mkNormalStfld(mkILFieldSpecInTy(ty$$54, tupledArg$$1[1], tupledArg$$1[2])), (0, _Types.L)())));
  }, flds))))), tag$$5));
}

function mkILSimpleStorageCtorWithParamNames(tag$$6, baseTySpec, ty$$56, extraParams$$1, flds$$1, access$$18) {
  let preblock$$1;

  if (baseTySpec != null) {
    const tspec$$7 = baseTySpec;
    preblock$$1 = (0, _Types.L)(mkLdarg0, (0, _Types.L)(mkNormalCall(mkILCtorMethSpecForTy(mkILBoxedType(tspec$$7), (0, _Types.L)())), (0, _Types.L)()));
  } else {
    preblock$$1 = (0, _Types.L)();
  }

  return mkILStorageCtorWithParamNames(tag$$6, preblock$$1, ty$$56, extraParams$$1, flds$$1, access$$18);
}

function addParamNames(flds$$2) {
  return (0, _List.map)(function mapping$$4(tupledArg$$2) {
    return [tupledArg$$2[0], tupledArg$$2[0], tupledArg$$2[1]];
  }, flds$$2);
}

function mkILSimpleStorageCtor(tag$$7, baseTySpec$$1, ty$$58, extraParams$$2, flds$$3, access$$19) {
  return mkILSimpleStorageCtorWithParamNames(tag$$7, baseTySpec$$1, ty$$58, extraParams$$2, addParamNames(flds$$3), access$$19);
}

function mkILStorageCtor(tag$$8, preblock$$2, ty$$59, flds$$4, access$$20) {
  return mkILStorageCtorWithParamNames(tag$$8, preblock$$2, ty$$59, (0, _Types.L)(), addParamNames(flds$$4), access$$20);
}

function mkILGenericClass(nm$$64, access$$21, genparams$$4, extends$$$4, impl$$8, methods$$5, fields$$4, nestedTypes$$4, props, events$$4, attrs$$8, init$$10) {
  return ILTypeDef$$$Create$$659DAD29(nm$$64, convertTypeAccessFlags(access$$21) | 0 | 0 | (init$$10.tag === 0 ? 1048576 : 0) | 0, new ILTypeDefLayout(0, "Auto"), impl$$8, genparams$$4, extends$$$4, methods$$5, nestedTypes$$4, fields$$4, emptyILMethodImpls, events$$4, props, emptyILSecurityDecls, attrs$$8);
}

function mkRawDataValueTypeDef(iltyp_ValueType, nm$$65, size$$2, pack) {
  return ILTypeDef$$$Create$$659DAD29(nm$$65, 0 | 256 | 16 | 1048576 | 0, new ILTypeDefLayout(2, "Explicit", new ILTypeDefLayoutInfo(size$$2, pack)), (0, _Types.L)(), (0, _Types.L)(), iltyp_ValueType, emptyILMethods, emptyILTypeDefs, emptyILFields, emptyILMethodImpls, emptyILEvents, emptyILProperties, emptyILSecurityDecls, emptyILCustomAttrs);
}

function mkILSimpleClass(ilg, nm$$66, access$$22, methods$$6, fields$$5, nestedTypes$$5, props$$1, events$$5, attrs$$9, init$$11) {
  return mkILGenericClass(nm$$66, access$$22, mkILEmptyGenericParams, ILGlobals$$get_typ_Object(ilg), (0, _Types.L)(), methods$$6, fields$$5, nestedTypes$$5, props$$1, events$$5, attrs$$9, init$$11);
}

function mkILTypeDefForGlobalFunctions(ilg$$1, methods$$7, fields$$6) {
  return mkILSimpleClass(ilg$$1, typeNameForGlobalFunctions, new ILTypeDefAccess(0, "Public"), methods$$7, fields$$6, emptyILTypeDefs, emptyILProperties, emptyILEvents, emptyILCustomAttrs, new ILTypeInit(0, "BeforeField"));
}

function destTypeDefsWithGlobalFunctionsFirst(ilg$$2, tdefs$$3) {
  const l$$24 = ILTypeDefs$$get_AsList(tdefs$$3);
  const patternInput$$11 = (0, _List.partition)(function predicate$$1(td$$4) {
    return ILTypeDef$$get_Name(td$$4) === typeNameForGlobalFunctions;
  }, l$$24);
  const top2 = patternInput$$11[0].tail == null ? (0, _Types.L)(mkILTypeDefForGlobalFunctions(ilg$$2, emptyILMethods, emptyILFields), (0, _Types.L)()) : patternInput$$11[0];
  return (0, _List.append)(top2, patternInput$$11[1]);
}

function mkILSimpleModule(assname, modname, dll, subsystemVersion, useHighEntropyVA, tdefs$$4, hashalg, locale$$1, flags$$4, exportedTypes, metadataVersion) {
  var alg;
  const manifest = new ILAssemblyManifest(assname, hashalg != null ? (alg = hashalg | 0, alg) : 32772, emptyILSecurityDeclsStored, null, null, locale$$1, storeILCustomAttrs(emptyILCustomAttrs), new ILAssemblyLongevity(0, "Unspecified"), 0 !== (flags$$4 & 16384), 0 !== (flags$$4 & 32768), 0 !== (flags$$4 & 8192), 0 !== (flags$$4 & 256), exportedTypes, null, NoMetadataIdx);
  return new ILModuleDef(manifest, modname, tdefs$$4, subsystemVersion, useHighEntropyVA, defaultSubSystem, dll, true, null, null, false, false, false, defaultVirtAlignment, defaultPhysAlignment, defaultImageBase, metadataVersion, mkILResources((0, _Types.L)()), (0, _Types.L)(), storeILCustomAttrs(emptyILCustomAttrs), NoMetadataIdx);
}

function buildILCode(_methName, lab2pc, instrs$$6, tryspecs, localspecs) {
  return new ILCode(lab2pc, instrs$$6, tryspecs, localspecs);
}

function mkILDelegateMethods(access$$23, ilg$$3, iltyp_AsyncCallback, iltyp_IAsyncResult, parms, rtv) {
  const rty$$8 = rtv.Type;

  const one = function one(nm$$67, args$$22, ret$$9) {
    const mdef$$2 = mkILNonGenericVirtualMethod(nm$$67, access$$23, args$$22, mkILReturn(ret$$9), new MethodBody(2, "Abstract"));
    return ILMethodDef$$WithRuntime$$Z1FBCCD16(ILMethodDef$$WithHideBySig$$Z1FBCCD16(ILMethodDef$$WithAbstract$$Z1FBCCD16(mdef$$2, false), true), true);
  };

  const ctor$$1 = mkILCtor(access$$23, (0, _Types.L)(mkILParamNamed("object", ILGlobals$$get_typ_Object(ilg$$3)), (0, _Types.L)(mkILParamNamed("method", ILGlobals$$get_typ_IntPtr(ilg$$3)), (0, _Types.L)())), new MethodBody(2, "Abstract"));
  const ctor$$2 = ILMethodDef$$WithHideBySig$$Z1FBCCD16(ILMethodDef$$WithRuntime$$Z1FBCCD16(ctor$$1, true), true);
  return (0, _Types.L)(ctor$$2, (0, _Types.L)(one("Invoke", parms, rty$$8), (0, _Types.L)(one("BeginInvoke", (0, _List.append)(parms, (0, _Types.L)(mkILParamNamed("callback", iltyp_AsyncCallback), (0, _Types.L)(mkILParamNamed("objects", ILGlobals$$get_typ_Object(ilg$$3)), (0, _Types.L)()))), iltyp_IAsyncResult), (0, _Types.L)(one("EndInvoke", (0, _Types.L)(mkILParamNamed("result", iltyp_IAsyncResult), (0, _Types.L)()), rty$$8), (0, _Types.L)()))));
}

function mkCtorMethSpecForDelegate(ilg$$4, ty$$60, useUIntPtr) {
  const scoref$$10 = ILTypeRef$$get_Scope(ILType$$get_TypeRef(ty$$60));
  return mkILInstanceMethSpecInTy(ty$$60, ".ctor", (0, _Types.L)(rescopeILType(scoref$$10, ILGlobals$$get_typ_Object(ilg$$4)), (0, _Types.L)(rescopeILType(scoref$$10, useUIntPtr ? ILGlobals$$get_typ_UIntPtr(ilg$$4) : ILGlobals$$get_typ_IntPtr(ilg$$4)), (0, _Types.L)())), new ILType(0, "Void"), emptyILGenericArgsList);
}

const ILEnumInfo = (0, _Types.declare)(function ILEnumInfo(arg1, arg2) {
  this.enumValues = arg1;
  this.enumType = arg2;
}, _Types.Record);
exports.ILEnumInfo = ILEnumInfo;

function getTyOfILEnumInfo(info) {
  return info.enumType;
}

function computeILEnumInfo(mdName, mdFields) {
  const matchValue$$30 = (0, _List.partition)(function (fd) {
    return ILFieldDef$$get_IsStatic(fd);
  }, ILFieldDefs$$get_AsList(mdFields));

  if (matchValue$$30[1].tail == null) {
    throw new Error("info_of_enum_tdef: badly formed enum " + mdName + ": no non-static field found");
  } else if (matchValue$$30[1].tail.tail == null) {
    return new ILEnumInfo((0, _List.map)(function mapping$$5(fd$$1) {
      var matchValue$$31, i$$16;
      return [ILFieldDef$$get_Name(fd$$1), (matchValue$$31 = ILFieldDef$$get_LiteralValue(fd$$1), matchValue$$31 == null ? (() => {
        throw new Error("info_of_enum_tdef: badly formed enum " + mdName + ": static field does not have an default value");
      })() : (i$$16 = matchValue$$31, i$$16))];
    }, matchValue$$30[0]), ILFieldDef$$get_FieldType(matchValue$$30[1].head));
  } else {
    throw new Error("info_of_enum_tdef: badly formed enum " + mdName + ": more than one non-static field found");
  }
}

function sigptr_get_byte(bytes$$2, sigptr) {
  return [(0, _bytes.Bytes$$$get)(bytes$$2, sigptr), sigptr + 1];
}

function sigptr_get_bool(bytes$$3, sigptr$$1) {
  const patternInput$$12 = sigptr_get_byte(bytes$$3, sigptr$$1);
  return [patternInput$$12[0] === 1, patternInput$$12[1]];
}

function sigptr_get_u8(bytes$$4, sigptr$$3) {
  const patternInput$$13 = sigptr_get_byte(bytes$$4, sigptr$$3);
  return [patternInput$$13[0] & 0xFF, patternInput$$13[1]];
}

function sigptr_get_i8(bytes$$5, sigptr$$5) {
  const patternInput$$14 = sigptr_get_u8(bytes$$5, sigptr$$5);
  return [(patternInput$$14[0] + 0x80 & 0xFF) - 0x80, patternInput$$14[1]];
}

function sigptr_get_u16(bytes$$6, sigptr$$7) {
  const patternInput$$15 = sigptr_get_byte(bytes$$6, sigptr$$7);
  const patternInput$$16 = sigptr_get_byte(bytes$$6, patternInput$$15[1]);
  return [(patternInput$$15[0] | patternInput$$16[0] << 8) & 0xFFFF, patternInput$$16[1]];
}

function sigptr_get_i16(bytes$$7, sigptr$$10) {
  const patternInput$$17 = sigptr_get_u16(bytes$$7, sigptr$$10);
  return [(patternInput$$17[0] + 0x8000 & 0xFFFF) - 0x8000, patternInput$$17[1]];
}

function sigptr_get_i32(bytes$$8, sigptr$$12) {
  const patternInput$$18 = sigptr_get_byte(bytes$$8, sigptr$$12);
  const patternInput$$19 = sigptr_get_byte(bytes$$8, patternInput$$18[1]);
  const patternInput$$20 = sigptr_get_byte(bytes$$8, patternInput$$19[1]);
  const patternInput$$21 = sigptr_get_byte(bytes$$8, patternInput$$20[1]);
  return [patternInput$$18[0] | patternInput$$19[0] << 8 | patternInput$$20[0] << 16 | patternInput$$21[0] << 24, patternInput$$21[1]];
}

function sigptr_get_u32(bytes$$9, sigptr$$17) {
  const patternInput$$22 = sigptr_get_i32(bytes$$9, sigptr$$17);
  return [patternInput$$22[0] >>> 0, patternInput$$22[1]];
}

function sigptr_get_i64(bytes$$10, sigptr$$19) {
  const patternInput$$23 = sigptr_get_byte(bytes$$10, sigptr$$19);
  const patternInput$$24 = sigptr_get_byte(bytes$$10, patternInput$$23[1]);
  const patternInput$$25 = sigptr_get_byte(bytes$$10, patternInput$$24[1]);
  const patternInput$$26 = sigptr_get_byte(bytes$$10, patternInput$$25[1]);
  const patternInput$$27 = sigptr_get_byte(bytes$$10, patternInput$$26[1]);
  const patternInput$$28 = sigptr_get_byte(bytes$$10, patternInput$$27[1]);
  const patternInput$$29 = sigptr_get_byte(bytes$$10, patternInput$$28[1]);
  const patternInput$$30 = sigptr_get_byte(bytes$$10, patternInput$$29[1]);
  return [(0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.op_BitwiseOr)((0, _Long.fromInteger)(patternInput$$23[0], false, 2), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(patternInput$$24[0], false, 2), 8)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(patternInput$$25[0], false, 2), 16)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(patternInput$$26[0], false, 2), 24)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(patternInput$$27[0], false, 2), 32)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(patternInput$$28[0], false, 2), 40)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(patternInput$$29[0], false, 2), 48)), (0, _Long.op_LeftShift)((0, _Long.fromInteger)(patternInput$$30[0], false, 2), 56)), patternInput$$30[1]];
}

function sigptr_get_u64(bytes$$11, sigptr$$28) {
  const patternInput$$31 = sigptr_get_i64(bytes$$11, sigptr$$28);
  return [(0, _Long.fromValue)(patternInput$$31[0], true), patternInput$$31[1]];
}

function float32_of_bits(x$$311) {
  return (0, _BitConverter.toSingle)((0, _BitConverter.getBytesInt32)(x$$311), 0);
}

function float_of_bits(x$$312) {
  return (0, _BitConverter.int64BitsToDouble)(x$$312);
}

function sigptr_get_ieee32(bytes$$12, sigptr$$30) {
  const patternInput$$32 = sigptr_get_i32(bytes$$12, sigptr$$30);
  return [float32_of_bits(patternInput$$32[0]), patternInput$$32[1]];
}

function sigptr_get_ieee64(bytes$$13, sigptr$$32) {
  const patternInput$$33 = sigptr_get_i64(bytes$$13, sigptr$$32);
  return [float_of_bits(patternInput$$33[0]), patternInput$$33[1]];
}

function sigptr_get_intarray(n$$23, bytes$$14, sigptr$$34) {
  const res$$3 = (0, _bytes.Bytes$$$zeroCreate)(n$$23);

  for (let i$$18 = 0; i$$18 <= n$$23 - 1; i$$18++) {
    res$$3[i$$18] = bytes$$14[sigptr$$34 + i$$18];
  }

  return [res$$3, sigptr$$34 + n$$23];
}

function sigptr_get_string(n$$24, bytes$$15, sigptr$$35) {
  const patternInput$$34 = sigptr_get_intarray(n$$24, bytes$$15, sigptr$$35);
  return [(0, _Encoding.get_UTF8)().getString(patternInput$$34[0], 0, patternInput$$34[0].length), patternInput$$34[1]];
}

function sigptr_get_z_i32(bytes$$16, sigptr$$37) {
  const patternInput$$35 = sigptr_get_byte(bytes$$16, sigptr$$37);

  if (patternInput$$35[0] <= 127) {
    return [patternInput$$35[0], patternInput$$35[1]];
  } else if (patternInput$$35[0] <= 191) {
    const b0$$8 = patternInput$$35[0] & 127 | 0;
    const patternInput$$36 = sigptr_get_byte(bytes$$16, patternInput$$35[1]);
    return [b0$$8 << 8 | patternInput$$36[0], patternInput$$36[1]];
  } else {
    const b0$$9 = patternInput$$35[0] & 63 | 0;
    const patternInput$$37 = sigptr_get_byte(bytes$$16, patternInput$$35[1]);
    const patternInput$$38 = sigptr_get_byte(bytes$$16, patternInput$$37[1]);
    const patternInput$$39 = sigptr_get_byte(bytes$$16, patternInput$$38[1]);
    return [b0$$9 << 24 | patternInput$$37[0] << 16 | patternInput$$38[0] << 8 | patternInput$$39[0], patternInput$$39[1]];
  }
}

function sigptr_get_serstring(bytes$$17, sigptr$$43) {
  const patternInput$$40 = sigptr_get_z_i32(bytes$$17, sigptr$$43);
  return sigptr_get_string(patternInput$$40[0], bytes$$17, patternInput$$40[1]);
}

function sigptr_get_serstring_possibly_null(bytes$$18, sigptr$$45) {
  const patternInput$$41 = sigptr_get_byte(bytes$$18, sigptr$$45);

  if (patternInput$$41[0] === 255) {
    return [null, patternInput$$41[1]];
  } else {
    const patternInput$$42 = sigptr_get_z_i32(bytes$$18, sigptr$$45);
    const patternInput$$43 = sigptr_get_string(patternInput$$42[0], bytes$$18, patternInput$$42[1]);
    return [patternInput$$43[0], patternInput$$43[1]];
  }
}

function mkRefToILAssembly(m$$4) {
  var k$$1;
  return ILAssemblyRef$$$Create$$2BC8E713(m$$4.Name, null, m$$4.PublicKey == null ? null : (k$$1 = m$$4.PublicKey, PublicKey$$$KeyAsToken$$6C95DA22(k$$1)), m$$4.Retargetable, m$$4.Version, m$$4.Locale);
}

function z_unsigned_int_size(n$$25) {
  if (n$$25 <= 127) {
    return 1;
  } else if (n$$25 <= 16383) {
    return 2;
  } else {
    return 3;
  }
}

function z_unsigned_int(n$$26) {
  if (n$$26 >= 0 ? n$$26 <= 127 : false) {
    return new Uint8Array([n$$26 & 0xFF]);
  } else if (n$$26 >= 128 ? n$$26 <= 16383 : false) {
    return new Uint8Array([(128 | (0, _illib.op_GreaterGreaterGreaterAmp)(n$$26, 8)) & 0xFF, n$$26 & 255 & 0xFF]);
  } else {
    return new Uint8Array([(192 | (0, _illib.op_GreaterGreaterGreaterAmp)(n$$26, 24)) & 0xFF, (0, _illib.op_GreaterGreaterGreaterAmp)(n$$26, 16) & 255 & 0xFF, (0, _illib.op_GreaterGreaterGreaterAmp)(n$$26, 8) & 255 & 0xFF, n$$26 & 255 & 0xFF]);
  }
}

function string_as_utf8_bytes(s$$13) {
  return (0, _Encoding.get_UTF8)().getBytes(s$$13);
}

function dw7(n$$27) {
  return (0, _Long.toIntNumber)((0, _Long.op_BitwiseAnd)((0, _Long.op_RightShift)(n$$27, 56), (0, _Long.fromBits)(255, 0, false))) & 0xFF;
}

function dw6(n$$28) {
  return (0, _Long.toIntNumber)((0, _Long.op_BitwiseAnd)((0, _Long.op_RightShift)(n$$28, 48), (0, _Long.fromBits)(255, 0, false))) & 0xFF;
}

function dw5(n$$29) {
  return (0, _Long.toIntNumber)((0, _Long.op_BitwiseAnd)((0, _Long.op_RightShift)(n$$29, 40), (0, _Long.fromBits)(255, 0, false))) & 0xFF;
}

function dw4(n$$30) {
  return (0, _Long.toIntNumber)((0, _Long.op_BitwiseAnd)((0, _Long.op_RightShift)(n$$30, 32), (0, _Long.fromBits)(255, 0, false))) & 0xFF;
}

function dw3(n$$31) {
  return (0, _Long.toIntNumber)((0, _Long.op_BitwiseAnd)((0, _Long.op_RightShift)(n$$31, 24), (0, _Long.fromBits)(255, 0, false))) & 0xFF;
}

function dw2(n$$32) {
  return (0, _Long.toIntNumber)((0, _Long.op_BitwiseAnd)((0, _Long.op_RightShift)(n$$32, 16), (0, _Long.fromBits)(255, 0, false))) & 0xFF;
}

function dw1(n$$33) {
  return (0, _Long.toIntNumber)((0, _Long.op_BitwiseAnd)((0, _Long.op_RightShift)(n$$33, 8), (0, _Long.fromBits)(255, 0, false))) & 0xFF;
}

function dw0(n$$34) {
  return (0, _Long.toIntNumber)((0, _Long.op_BitwiseAnd)(n$$34, (0, _Long.fromBits)(255, 0, false))) & 0xFF;
}

function u8AsBytes(i$$19) {
  return new Uint8Array([i$$19]);
}

function u16AsBytes(x$$313) {
  const n$$35 = ~~x$$313 | 0;
  return new Uint8Array([b0(n$$35) & 0xFF, b1(n$$35) & 0xFF]);
}

function i32AsBytes(i$$20) {
  return new Uint8Array([b0(i$$20) & 0xFF, b1(i$$20) & 0xFF, b2(i$$20) & 0xFF, b3(i$$20) & 0xFF]);
}

function i64AsBytes(i$$21) {
  return new Uint8Array([dw0(i$$21), dw1(i$$21), dw2(i$$21), dw3(i$$21), dw4(i$$21), dw5(i$$21), dw6(i$$21), dw7(i$$21)]);
}

function i8AsBytes(i$$22) {
  return u8AsBytes(i$$22 & 0xFF);
}

function i16AsBytes(i$$23) {
  return u16AsBytes(i$$23 & 0xFFFF);
}

function u32AsBytes(i$$24) {
  return i32AsBytes(~~i$$24);
}

function u64AsBytes(i$$25) {
  return i64AsBytes((0, _Long.fromValue)(i$$25, false));
}

function bits_of_float32(x$$314) {
  return (0, _BitConverter.toInt32)((0, _BitConverter.getBytesSingle)(x$$314), 0);
}

function bits_of_float(x$$315) {
  return (0, _BitConverter.doubleToInt64Bits)(x$$315);
}

function ieee32AsBytes(i$$26) {
  return i32AsBytes(bits_of_float32(i$$26));
}

function ieee64AsBytes(i$$27) {
  return i64AsBytes(bits_of_float(i$$27));
}

const et_END = 0;
exports.et_END = et_END;
const et_VOID = 1;
exports.et_VOID = et_VOID;
const et_BOOLEAN = 2;
exports.et_BOOLEAN = et_BOOLEAN;
const et_CHAR = 3;
exports.et_CHAR = et_CHAR;
const et_I1 = 4;
exports.et_I1 = et_I1;
const et_U1 = 5;
exports.et_U1 = et_U1;
const et_I2 = 6;
exports.et_I2 = et_I2;
const et_U2 = 7;
exports.et_U2 = et_U2;
const et_I4 = 8;
exports.et_I4 = et_I4;
const et_U4 = 9;
exports.et_U4 = et_U4;
const et_I8 = 10;
exports.et_I8 = et_I8;
const et_U8 = 11;
exports.et_U8 = et_U8;
const et_R4 = 12;
exports.et_R4 = et_R4;
const et_R8 = 13;
exports.et_R8 = et_R8;
const et_STRING = 14;
exports.et_STRING = et_STRING;
const et_PTR = 15;
exports.et_PTR = et_PTR;
const et_BYREF = 16;
exports.et_BYREF = et_BYREF;
const et_VALUETYPE = 17;
exports.et_VALUETYPE = et_VALUETYPE;
const et_CLASS = 18;
exports.et_CLASS = et_CLASS;
const et_VAR = 19;
exports.et_VAR = et_VAR;
const et_ARRAY = 20;
exports.et_ARRAY = et_ARRAY;
const et_WITH = 21;
exports.et_WITH = et_WITH;
const et_TYPEDBYREF = 22;
exports.et_TYPEDBYREF = et_TYPEDBYREF;
const et_I = 24;
exports.et_I = et_I;
const et_U = 25;
exports.et_U = et_U;
const et_FNPTR = 27;
exports.et_FNPTR = et_FNPTR;
const et_OBJECT = 28;
exports.et_OBJECT = et_OBJECT;
const et_SZARRAY = 29;
exports.et_SZARRAY = et_SZARRAY;
const et_MVAR = 30;
exports.et_MVAR = et_MVAR;
const et_CMOD_REQD = 31;
exports.et_CMOD_REQD = et_CMOD_REQD;
const et_CMOD_OPT = 32;
exports.et_CMOD_OPT = et_CMOD_OPT;

function formatILVersion(_arg1$$4) {
  return (0, _String.toText)((0, _String.printf)("%d.%d.%d.%d"))(~~_arg1$$4[0])(~~_arg1$$4[1])(~~_arg1$$4[2])(~~_arg1$$4[3]);
}

function encodeCustomAttrString(s$$14) {
  const arr$$2 = string_as_utf8_bytes(s$$14);
  return (0, _Array.concat)([z_unsigned_int(arr$$2.length), arr$$2], Uint8Array);
}

function encodeCustomAttrElemType(x$$316) {
  var shape$$2, elemType, tspec$$36, tspec$$34, tspec$$32, tspec$$30, tspec$$28, tspec$$26, tspec$$24, tspec$$22, tspec$$20, tspec$$18, tspec$$16, tspec$$14, tspec$$12, tspec$$10, tspec$$8;
  var $target$$66, tspec$$9;

  if (x$$316.tag === 2) {
    if (tspec$$8 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$8) === "System.SByte") {
      $target$$66 = 0;
      tspec$$9 = x$$316.fields[0];
    } else {
      $target$$66 = 1;
    }
  } else {
    $target$$66 = 1;
  }

  switch ($target$$66) {
    case 0:
      {
        return new Uint8Array([et_I1]);
      }

    case 1:
      {
        var $target$$67, tspec$$11;

        if (x$$316.tag === 2) {
          if (tspec$$10 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$10) === "System.Byte") {
            $target$$67 = 0;
            tspec$$11 = x$$316.fields[0];
          } else {
            $target$$67 = 1;
          }
        } else {
          $target$$67 = 1;
        }

        switch ($target$$67) {
          case 0:
            {
              return new Uint8Array([et_U1]);
            }

          case 1:
            {
              var $target$$68, tspec$$13;

              if (x$$316.tag === 2) {
                if (tspec$$12 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$12) === "System.Int16") {
                  $target$$68 = 0;
                  tspec$$13 = x$$316.fields[0];
                } else {
                  $target$$68 = 1;
                }
              } else {
                $target$$68 = 1;
              }

              switch ($target$$68) {
                case 0:
                  {
                    return new Uint8Array([et_I2]);
                  }

                case 1:
                  {
                    var $target$$69, tspec$$15;

                    if (x$$316.tag === 2) {
                      if (tspec$$14 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$14) === "System.UInt16") {
                        $target$$69 = 0;
                        tspec$$15 = x$$316.fields[0];
                      } else {
                        $target$$69 = 1;
                      }
                    } else {
                      $target$$69 = 1;
                    }

                    switch ($target$$69) {
                      case 0:
                        {
                          return new Uint8Array([et_U2]);
                        }

                      case 1:
                        {
                          var $target$$70, tspec$$17;

                          if (x$$316.tag === 2) {
                            if (tspec$$16 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$16) === "System.Int32") {
                              $target$$70 = 0;
                              tspec$$17 = x$$316.fields[0];
                            } else {
                              $target$$70 = 1;
                            }
                          } else {
                            $target$$70 = 1;
                          }

                          switch ($target$$70) {
                            case 0:
                              {
                                return new Uint8Array([et_I4]);
                              }

                            case 1:
                              {
                                var $target$$71, tspec$$19;

                                if (x$$316.tag === 2) {
                                  if (tspec$$18 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$18) === "System.UInt32") {
                                    $target$$71 = 0;
                                    tspec$$19 = x$$316.fields[0];
                                  } else {
                                    $target$$71 = 1;
                                  }
                                } else {
                                  $target$$71 = 1;
                                }

                                switch ($target$$71) {
                                  case 0:
                                    {
                                      return new Uint8Array([et_U4]);
                                    }

                                  case 1:
                                    {
                                      var $target$$72, tspec$$21;

                                      if (x$$316.tag === 2) {
                                        if (tspec$$20 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$20) === "System.Int64") {
                                          $target$$72 = 0;
                                          tspec$$21 = x$$316.fields[0];
                                        } else {
                                          $target$$72 = 1;
                                        }
                                      } else {
                                        $target$$72 = 1;
                                      }

                                      switch ($target$$72) {
                                        case 0:
                                          {
                                            return new Uint8Array([et_I8]);
                                          }

                                        case 1:
                                          {
                                            var $target$$73, tspec$$23;

                                            if (x$$316.tag === 2) {
                                              if (tspec$$22 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$22) === "System.UInt64") {
                                                $target$$73 = 0;
                                                tspec$$23 = x$$316.fields[0];
                                              } else {
                                                $target$$73 = 1;
                                              }
                                            } else {
                                              $target$$73 = 1;
                                            }

                                            switch ($target$$73) {
                                              case 0:
                                                {
                                                  return new Uint8Array([et_U8]);
                                                }

                                              case 1:
                                                {
                                                  var $target$$74, tspec$$25;

                                                  if (x$$316.tag === 2) {
                                                    if (tspec$$24 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$24) === "System.Double") {
                                                      $target$$74 = 0;
                                                      tspec$$25 = x$$316.fields[0];
                                                    } else {
                                                      $target$$74 = 1;
                                                    }
                                                  } else {
                                                    $target$$74 = 1;
                                                  }

                                                  switch ($target$$74) {
                                                    case 0:
                                                      {
                                                        return new Uint8Array([et_R8]);
                                                      }

                                                    case 1:
                                                      {
                                                        var $target$$75, tspec$$27;

                                                        if (x$$316.tag === 2) {
                                                          if (tspec$$26 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$26) === "System.Single") {
                                                            $target$$75 = 0;
                                                            tspec$$27 = x$$316.fields[0];
                                                          } else {
                                                            $target$$75 = 1;
                                                          }
                                                        } else {
                                                          $target$$75 = 1;
                                                        }

                                                        switch ($target$$75) {
                                                          case 0:
                                                            {
                                                              return new Uint8Array([et_R4]);
                                                            }

                                                          case 1:
                                                            {
                                                              var $target$$76, tspec$$29;

                                                              if (x$$316.tag === 2) {
                                                                if (tspec$$28 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$28) === "System.Char") {
                                                                  $target$$76 = 0;
                                                                  tspec$$29 = x$$316.fields[0];
                                                                } else {
                                                                  $target$$76 = 1;
                                                                }
                                                              } else {
                                                                $target$$76 = 1;
                                                              }

                                                              switch ($target$$76) {
                                                                case 0:
                                                                  {
                                                                    return new Uint8Array([et_CHAR]);
                                                                  }

                                                                case 1:
                                                                  {
                                                                    var $target$$77, tspec$$31;

                                                                    if (x$$316.tag === 2) {
                                                                      if (tspec$$30 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$30) === "System.Boolean") {
                                                                        $target$$77 = 0;
                                                                        tspec$$31 = x$$316.fields[0];
                                                                      } else {
                                                                        $target$$77 = 1;
                                                                      }
                                                                    } else {
                                                                      $target$$77 = 1;
                                                                    }

                                                                    switch ($target$$77) {
                                                                      case 0:
                                                                        {
                                                                          return new Uint8Array([et_BOOLEAN]);
                                                                        }

                                                                      case 1:
                                                                        {
                                                                          var $target$$78, tspec$$33;

                                                                          if (x$$316.tag === 3) {
                                                                            if (tspec$$32 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$32) === "System.String") {
                                                                              $target$$78 = 0;
                                                                              tspec$$33 = x$$316.fields[0];
                                                                            } else {
                                                                              $target$$78 = 1;
                                                                            }
                                                                          } else {
                                                                            $target$$78 = 1;
                                                                          }

                                                                          switch ($target$$78) {
                                                                            case 0:
                                                                              {
                                                                                return new Uint8Array([et_STRING]);
                                                                              }

                                                                            case 1:
                                                                              {
                                                                                var $target$$79, tspec$$35;

                                                                                if (x$$316.tag === 3) {
                                                                                  if (tspec$$34 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$34) === "System.Object") {
                                                                                    $target$$79 = 0;
                                                                                    tspec$$35 = x$$316.fields[0];
                                                                                  } else {
                                                                                    $target$$79 = 1;
                                                                                  }
                                                                                } else {
                                                                                  $target$$79 = 1;
                                                                                }

                                                                                switch ($target$$79) {
                                                                                  case 0:
                                                                                    {
                                                                                      return new Uint8Array([81]);
                                                                                    }

                                                                                  case 1:
                                                                                    {
                                                                                      var $target$$80, tspec$$37;

                                                                                      if (x$$316.tag === 3) {
                                                                                        if (tspec$$36 = x$$316.fields[0], ILTypeSpec$$get_Name(tspec$$36) === "System.Type") {
                                                                                          $target$$80 = 0;
                                                                                          tspec$$37 = x$$316.fields[0];
                                                                                        } else {
                                                                                          $target$$80 = 1;
                                                                                        }
                                                                                      } else {
                                                                                        $target$$80 = 1;
                                                                                      }

                                                                                      switch ($target$$80) {
                                                                                        case 0:
                                                                                          {
                                                                                            return new Uint8Array([80]);
                                                                                          }

                                                                                        case 1:
                                                                                          {
                                                                                            var $target$$81, tspec$$38, elemType$$1, shape$$3;

                                                                                            if (x$$316.tag === 2) {
                                                                                              $target$$81 = 0;
                                                                                              tspec$$38 = x$$316.fields[0];
                                                                                            } else if (x$$316.tag === 1) {
                                                                                              if (shape$$2 = x$$316.fields[0], (elemType = x$$316.fields[1], (0, _Util.equals)(shape$$2, ILArrayShape$$$get_SingleDimensional()))) {
                                                                                                $target$$81 = 1;
                                                                                                elemType$$1 = x$$316.fields[1];
                                                                                                shape$$3 = x$$316.fields[0];
                                                                                              } else {
                                                                                                $target$$81 = 2;
                                                                                              }
                                                                                            } else {
                                                                                              $target$$81 = 2;
                                                                                            }

                                                                                            switch ($target$$81) {
                                                                                              case 0:
                                                                                                {
                                                                                                  return (0, _Array.append)(new Uint8Array([85]), encodeCustomAttrString(ILTypeRef$$get_QualifiedName(ILTypeSpec$$get_TypeRef(tspec$$38))), Uint8Array);
                                                                                                }

                                                                                              case 1:
                                                                                                {
                                                                                                  return (0, _Array.append)(new Uint8Array([et_SZARRAY]), encodeCustomAttrElemType(elemType$$1), Uint8Array);
                                                                                                }

                                                                                              case 2:
                                                                                                {
                                                                                                  throw new Error("encodeCustomAttrElemType: unrecognized custom element type");
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

function encodeCustomAttrElemTypeForObject(x$$317) {
  switch (x$$317.tag) {
    case 1:
      {
        return new Uint8Array([et_BOOLEAN]);
      }

    case 2:
      {
        return new Uint8Array([et_CHAR]);
      }

    case 3:
      {
        return new Uint8Array([et_I1]);
      }

    case 4:
      {
        return new Uint8Array([et_I2]);
      }

    case 5:
      {
        return new Uint8Array([et_I4]);
      }

    case 6:
      {
        return new Uint8Array([et_I8]);
      }

    case 7:
      {
        return new Uint8Array([et_U1]);
      }

    case 8:
      {
        return new Uint8Array([et_U2]);
      }

    case 9:
      {
        return new Uint8Array([et_U4]);
      }

    case 10:
      {
        return new Uint8Array([et_U8]);
      }

    case 14:
      {
        return new Uint8Array([80]);
      }

    case 15:
      {
        return new Uint8Array([80]);
      }

    case 13:
      {
        return new Uint8Array([et_STRING]);
      }

    case 11:
      {
        return new Uint8Array([et_R4]);
      }

    case 12:
      {
        return new Uint8Array([et_R8]);
      }

    case 16:
      {
        const elemTy = x$$317.fields[0];
        return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Seq.singleton)(et_SZARRAY), (0, _Seq.delay)(function () {
            return encodeCustomAttrElemType(elemTy);
          }));
        }), Uint8Array);
      }

    default:
      {
        return new Uint8Array([et_STRING]);
      }
  }
}

function decodeCustomAttrElemType(ilg$$5, bytes$$19, sigptr$$48, x$$318) {
  var x$$319, x$$321, x$$323, x$$325, x$$327, x$$329, x$$331, x$$333, x$$335, x$$337, x$$339, x$$341, x$$343, x$$345, x$$347, x$$349;

  if (x$$319 = x$$318, x$$319 === et_I1) {
    const x$$320 = x$$318;
    return [ILGlobals$$get_typ_SByte(ilg$$5), sigptr$$48];
  } else if (x$$321 = x$$318, x$$321 === et_U1) {
    const x$$322 = x$$318;
    return [ILGlobals$$get_typ_Byte(ilg$$5), sigptr$$48];
  } else if (x$$323 = x$$318, x$$323 === et_I2) {
    const x$$324 = x$$318;
    return [ILGlobals$$get_typ_Int16(ilg$$5), sigptr$$48];
  } else if (x$$325 = x$$318, x$$325 === et_U2) {
    const x$$326 = x$$318;
    return [ILGlobals$$get_typ_UInt16(ilg$$5), sigptr$$48];
  } else if (x$$327 = x$$318, x$$327 === et_I4) {
    const x$$328 = x$$318;
    return [ILGlobals$$get_typ_Int32(ilg$$5), sigptr$$48];
  } else if (x$$329 = x$$318, x$$329 === et_U4) {
    const x$$330 = x$$318;
    return [ILGlobals$$get_typ_UInt32(ilg$$5), sigptr$$48];
  } else if (x$$331 = x$$318, x$$331 === et_I8) {
    const x$$332 = x$$318;
    return [ILGlobals$$get_typ_Int64(ilg$$5), sigptr$$48];
  } else if (x$$333 = x$$318, x$$333 === et_U8) {
    const x$$334 = x$$318;
    return [ILGlobals$$get_typ_UInt64(ilg$$5), sigptr$$48];
  } else if (x$$335 = x$$318, x$$335 === et_R8) {
    const x$$336 = x$$318;
    return [ILGlobals$$get_typ_Double(ilg$$5), sigptr$$48];
  } else if (x$$337 = x$$318, x$$337 === et_R4) {
    const x$$338 = x$$318;
    return [ILGlobals$$get_typ_Single(ilg$$5), sigptr$$48];
  } else if (x$$339 = x$$318, x$$339 === et_CHAR) {
    const x$$340 = x$$318;
    return [ILGlobals$$get_typ_Char(ilg$$5), sigptr$$48];
  } else if (x$$341 = x$$318, x$$341 === et_BOOLEAN) {
    const x$$342 = x$$318;
    return [ILGlobals$$get_typ_Bool(ilg$$5), sigptr$$48];
  } else if (x$$343 = x$$318, x$$343 === et_STRING) {
    const x$$344 = x$$318;
    return [ILGlobals$$get_typ_String(ilg$$5), sigptr$$48];
  } else if (x$$345 = x$$318, x$$345 === et_OBJECT) {
    const x$$346 = x$$318;
    return [ILGlobals$$get_typ_Object(ilg$$5), sigptr$$48];
  } else if (x$$347 = x$$318, x$$347 === et_SZARRAY) {
    const x$$348 = x$$318;
    const patternInput$$44 = sigptr_get_u8(bytes$$19, sigptr$$48);
    const patternInput$$45 = decodeCustomAttrElemType(ilg$$5, bytes$$19, patternInput$$44[1], patternInput$$44[0]);
    return [mkILArr1DTy(patternInput$$45[0]), patternInput$$45[1]];
  } else if (x$$349 = x$$318, x$$349 === 80) {
    const x$$350 = x$$318;
    return [ILGlobals$$get_typ_Type(ilg$$5), sigptr$$48];
  } else {
    return (0, _String.toFail)((0, _String.printf)("decodeCustomAttrElemType ilg: unrecognized custom element type: %A"))(x$$318);
  }
}

function encodeCustomAttrPrimValue(ilg$$6, c$$9) {
  var $target$$82, b$$14, s$$15, x$$351, x$$352, x$$353, x$$354, x$$355, x$$356, x$$357, x$$358, x$$359, x$$360, x$$361, ty$$61, tref$$25, elems;

  if (c$$9.tag === 0) {
    if (c$$9.fields[0] != null) {
      $target$$82 = 2;
      s$$15 = c$$9.fields[0];
    } else {
      $target$$82 = 1;
    }
  } else if (c$$9.tag === 14) {
    if (c$$9.fields[0] != null) {
      $target$$82 = 14;
      ty$$61 = c$$9.fields[0];
    } else {
      $target$$82 = 1;
    }
  } else if (c$$9.tag === 15) {
    if (c$$9.fields[0] != null) {
      $target$$82 = 15;
      tref$$25 = c$$9.fields[0];
    } else {
      $target$$82 = 1;
    }
  } else if (c$$9.tag === 13) {
    $target$$82 = 1;
  } else if (c$$9.tag === 2) {
    $target$$82 = 3;
    x$$351 = c$$9.fields[0];
  } else if (c$$9.tag === 3) {
    $target$$82 = 4;
    x$$352 = c$$9.fields[0];
  } else if (c$$9.tag === 4) {
    $target$$82 = 5;
    x$$353 = c$$9.fields[0];
  } else if (c$$9.tag === 5) {
    $target$$82 = 6;
    x$$354 = c$$9.fields[0];
  } else if (c$$9.tag === 6) {
    $target$$82 = 7;
    x$$355 = c$$9.fields[0];
  } else if (c$$9.tag === 7) {
    $target$$82 = 8;
    x$$356 = c$$9.fields[0];
  } else if (c$$9.tag === 8) {
    $target$$82 = 9;
    x$$357 = c$$9.fields[0];
  } else if (c$$9.tag === 9) {
    $target$$82 = 10;
    x$$358 = c$$9.fields[0];
  } else if (c$$9.tag === 10) {
    $target$$82 = 11;
    x$$359 = c$$9.fields[0];
  } else if (c$$9.tag === 11) {
    $target$$82 = 12;
    x$$360 = c$$9.fields[0];
  } else if (c$$9.tag === 12) {
    $target$$82 = 13;
    x$$361 = c$$9.fields[0];
  } else if (c$$9.tag === 16) {
    $target$$82 = 16;
    elems = c$$9.fields[1];
  } else {
    $target$$82 = 0;
    b$$14 = c$$9.fields[0];
  }

  switch ($target$$82) {
    case 0:
      {
        return new Uint8Array([b$$14 ? 1 : 0]);
      }

    case 1:
      {
        return new Uint8Array([255]);
      }

    case 2:
      {
        return encodeCustomAttrString(s$$15);
      }

    case 3:
      {
        return u16AsBytes(x$$351.charCodeAt(0));
      }

    case 4:
      {
        return i8AsBytes(x$$352);
      }

    case 5:
      {
        return i16AsBytes(x$$353);
      }

    case 6:
      {
        return i32AsBytes(x$$354);
      }

    case 7:
      {
        return i64AsBytes(x$$355);
      }

    case 8:
      {
        return u8AsBytes(x$$356);
      }

    case 9:
      {
        return u16AsBytes(x$$357);
      }

    case 10:
      {
        return u32AsBytes(x$$358);
      }

    case 11:
      {
        return u64AsBytes(x$$359);
      }

    case 12:
      {
        return ieee32AsBytes(x$$360);
      }

    case 13:
      {
        return ieee64AsBytes(x$$361);
      }

    case 14:
      {
        return encodeCustomAttrString(ILType$$get_QualifiedName(ty$$61));
      }

    case 15:
      {
        return encodeCustomAttrString(ILTypeRef$$get_QualifiedName(tref$$25));
      }

    case 16:
      {
        return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.append)(i32AsBytes((0, _List.length)(elems)), (0, _Seq.delay)(function () {
            return (0, _Seq.collect)(function (elem) {
              return encodeCustomAttrPrimValue(ilg$$6, elem);
            }, elems);
          }));
        }), Uint8Array);
      }
  }
}

function encodeCustomAttrValue(ilg$$7, ty$$62, c$$10) {
  var shape$$6, elems$$1, elemType$$2, shape$$4, tspec$$39;
  const matchValue$$33 = [ty$$62, c$$10];
  var $target$$83, tspec$$40;

  if (matchValue$$33[0].tag === 3) {
    if (tspec$$39 = matchValue$$33[0].fields[0], ILTypeSpec$$get_Name(tspec$$39) === "System.Object") {
      $target$$83 = 0;
      tspec$$40 = matchValue$$33[0].fields[0];
    } else {
      $target$$83 = 1;
    }
  } else {
    $target$$83 = 1;
  }

  switch ($target$$83) {
    case 0:
      {
        return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.append)(encodeCustomAttrElemTypeForObject(c$$10), (0, _Seq.delay)(function () {
            return encodeCustomAttrPrimValue(ilg$$7, c$$10);
          }));
        }), Uint8Array);
      }

    case 1:
      {
        var $target$$84, shape$$5;

        if (matchValue$$33[0].tag === 1) {
          if (matchValue$$33[1].tag === 13) {
            if (shape$$4 = matchValue$$33[0].fields[0], (0, _Util.equals)(shape$$4, ILArrayShape$$$get_SingleDimensional())) {
              $target$$84 = 0;
              shape$$5 = matchValue$$33[0].fields[0];
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
              return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
                return i32AsBytes(-1);
              }), Uint8Array);
            }

          case 1:
            {
              var $target$$85, elemType$$3, elems$$2, shape$$7;

              if (matchValue$$33[0].tag === 1) {
                if (matchValue$$33[1].tag === 16) {
                  if (shape$$6 = matchValue$$33[0].fields[0], (elems$$1 = matchValue$$33[1].fields[1], (elemType$$2 = matchValue$$33[0].fields[1], (0, _Util.equals)(shape$$6, ILArrayShape$$$get_SingleDimensional())))) {
                    $target$$85 = 0;
                    elemType$$3 = matchValue$$33[0].fields[1];
                    elems$$2 = matchValue$$33[1].fields[1];
                    shape$$7 = matchValue$$33[0].fields[0];
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
                    return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
                      return (0, _Seq.append)(i32AsBytes((0, _List.length)(elems$$2)), (0, _Seq.delay)(function () {
                        return (0, _Seq.collect)(function (elem$$1) {
                          return encodeCustomAttrValue(ilg$$7, elemType$$3, elem$$1);
                        }, elems$$2);
                      }));
                    }), Uint8Array);
                  }

                case 1:
                  {
                    return encodeCustomAttrPrimValue(ilg$$7, c$$10);
                  }
              }
            }
        }
      }
  }
}

function encodeCustomAttrNamedArg(ilg$$8, nm$$68, ty$$63, prop, elem$$2) {
  return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.append)((0, _Seq.singleton)(prop ? 84 : 83), (0, _Seq.delay)(function () {
      return (0, _Seq.append)(encodeCustomAttrElemType(ty$$63), (0, _Seq.delay)(function () {
        return (0, _Seq.append)(encodeCustomAttrString(nm$$68), (0, _Seq.delay)(function () {
          return encodeCustomAttrValue(ilg$$8, ty$$63, elem$$2);
        }));
      }));
    }));
  }), Uint8Array);
}

function mkILCustomAttribMethRef(ilg$$9, mspec$$4, fixedArgs, namedArgs) {
  const argtys = ILMethodRef$$get_ArgTypes(ILMethodSpec$$get_MethodRef(mspec$$4));
  const args$$23 = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.append)(new Uint8Array([1, 0]), (0, _Seq.delay)(function () {
      return (0, _Seq.append)((0, _Seq.collect)(function (matchValue$$34) {
        return encodeCustomAttrValue(ilg$$9, matchValue$$34[0], matchValue$$34[1]);
      }, (0, _Seq.zip)(argtys, fixedArgs)), (0, _Seq.delay)(function () {
        return (0, _Seq.append)(u16AsBytes((0, _List.length)(namedArgs) & 0xFFFF), (0, _Seq.delay)(function () {
          return (0, _Seq.collect)(function (namedArg) {
            return encodeCustomAttrNamedArg(ilg$$9, namedArg[0], namedArg[1], namedArg[2], namedArg[3]);
          }, namedArgs);
        }));
      }));
    }));
  }), Uint8Array);
  return new ILAttribute(mspec$$4, args$$23, (0, _List.append)(fixedArgs, (0, _List.map)(function mapping$$6(tupledArg$$3) {
    return tupledArg$$3[3];
  }, namedArgs)));
}

function mkILCustomAttribute(ilg$$10, tref$$26, argtys$$1, argvs, propvs) {
  return mkILCustomAttribMethRef(ilg$$10, mkILNonGenericCtorMethSpec(tref$$26, argtys$$1), argvs, propvs);
}

const MscorlibScopeRef = new ILScopeRef(2, "Assembly", ILAssemblyRef$$$Create$$2BC8E713("mscorlib", null, ecmaPublicKey, true, null, null));
exports.MscorlibScopeRef = MscorlibScopeRef;
const EcmaMscorlibILGlobals = mkILGlobals(MscorlibScopeRef);
exports.EcmaMscorlibILGlobals = EcmaMscorlibILGlobals;

function mkPermissionSet(ilg$$11, action$$1, attributes$$20) {
  const bytes$$21 = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.append)((0, _Seq.singleton)(".".charCodeAt(0)), (0, _Seq.delay)(function () {
      return (0, _Seq.append)(z_unsigned_int((0, _List.length)(attributes$$20)), (0, _Seq.delay)(function () {
        return (0, _Seq.collect)(function (matchValue$$35) {
          return (0, _Seq.append)(encodeCustomAttrString(ILTypeRef$$get_QualifiedName(matchValue$$35[0])), (0, _Seq.delay)(function () {
            const bytes$$20 = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
              return (0, _Seq.append)(z_unsigned_int((0, _List.length)(matchValue$$35[1])), (0, _Seq.delay)(function () {
                return (0, _Seq.collect)(function (matchValue$$36) {
                  return encodeCustomAttrNamedArg(ilg$$11, matchValue$$36[0], matchValue$$36[1], true, matchValue$$36[2]);
                }, matchValue$$35[1]);
              }));
            }), Uint8Array);
            return (0, _Seq.append)(z_unsigned_int(bytes$$20.length), (0, _Seq.delay)(function () {
              return bytes$$20;
            }));
          }));
        }, attributes$$20);
      }));
    }));
  }), Uint8Array);
  return new ILSecurityDecl(0, "ILSecurityDecl", action$$1, bytes$$21);
}

const ILTypeSigParser = (0, _Types.declare)(function ILTypeSigParser(tstring) {
  const $this$$29 = this;
  $this$$29.tstring = tstring;
  $this$$29.startPos = 0;
  $this$$29.currentPos = 0;
  $this$$29.nil = "\r";
});
exports.ILTypeSigParser = ILTypeSigParser;

function ILTypeSigParser$$$$002Ector$$Z721C83C5(tstring) {
  return this != null ? ILTypeSigParser.call(this, tstring) : new ILTypeSigParser(tstring);
}

function ILTypeSigParser$$ParseType(x$$362) {
  if (ILTypeSigParser$$here(x$$362) === "[") {
    ILTypeSigParser$$drop(x$$362);
  }

  let typeName;

  while ((((ILTypeSigParser$$peek(x$$362) !== "`" ? ILTypeSigParser$$peek(x$$362) !== "[" : false) ? ILTypeSigParser$$peek(x$$362) !== "]" : false) ? ILTypeSigParser$$peek(x$$362) !== "," : false) ? ILTypeSigParser$$peek(x$$362) !== x$$362.nil : false) {
    ILTypeSigParser$$step(x$$362);
  }

  typeName = ILTypeSigParser$$take(x$$362);
  let patternInput$$46;

  if (ILTypeSigParser$$here(x$$362) === "`") {
    ILTypeSigParser$$drop(x$$362);
    let arity$$1;

    while (((ILTypeSigParser$$here(x$$362).charCodeAt(0) >= "0".charCodeAt(0) ? ILTypeSigParser$$here(x$$362).charCodeAt(0) <= "9".charCodeAt(0) : false) ? ILTypeSigParser$$peek(x$$362).charCodeAt(0) >= "0".charCodeAt(0) : false) ? ILTypeSigParser$$peek(x$$362).charCodeAt(0) <= "9".charCodeAt(0) : false) {
      ILTypeSigParser$$step(x$$362);
    }

    arity$$1 = (0, _Int.parse)(ILTypeSigParser$$take(x$$362), 10);
    ILTypeSigParser$$drop(x$$362);
    patternInput$$46 = [typeName + "`" + (0, _Util.int32ToString)(arity$$1), (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.map)(function (_i) {
        return ILTypeSigParser$$ParseType(x$$362);
      }, (0, _Seq.rangeNumber)(0, 1, arity$$1 - 1));
    }))];
  } else {
    patternInput$$46 = [typeName, null];
  }

  let rank$$1;

  if (ILTypeSigParser$$here(x$$362) === "[") {
    let rank = 0;

    while (ILTypeSigParser$$here(x$$362) !== "]") {
      rank = rank + 1;
      ILTypeSigParser$$step(x$$362);
    }

    ILTypeSigParser$$drop(x$$362);
    rank$$1 = new ILArrayShape(0, "ILArrayShape", (0, _List.replicate)(rank, [0, null]));
  } else {
    rank$$1 = null;
  }

  let scope$$7;

  if ((ILTypeSigParser$$here(x$$362) === "," ? true : ILTypeSigParser$$here(x$$362) === " ") ? ILTypeSigParser$$peek(x$$362) !== "[" ? ILTypeSigParser$$peekN$$Z524259A4(x$$362, 2) !== "[" : false : false) {
    const grabScopeComponent = function grabScopeComponent() {
      if (ILTypeSigParser$$here(x$$362) === ",") {
        ILTypeSigParser$$drop(x$$362);
      }

      if (ILTypeSigParser$$here(x$$362) === " ") {
        ILTypeSigParser$$drop(x$$362);
      }

      while ((ILTypeSigParser$$peek(x$$362) !== "," ? ILTypeSigParser$$peek(x$$362) !== "]" : false) ? ILTypeSigParser$$peek(x$$362) !== x$$362.nil : false) {
        ILTypeSigParser$$step(x$$362);
      }

      return ILTypeSigParser$$take(x$$362);
    };

    const scope$$6 = (0, _String.join)(",", ...(0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.append)((0, _Seq.singleton)(grabScopeComponent()), (0, _Seq.delay)(function () {
        return (0, _Seq.append)((0, _Seq.singleton)(grabScopeComponent()), (0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Seq.singleton)(grabScopeComponent()), (0, _Seq.delay)(function () {
            return (0, _Seq.singleton)(grabScopeComponent());
          }));
        }));
      }));
    })));
    scope$$7 = new ILScopeRef(2, "Assembly", mkSimpleAssRef(scope$$6));
  } else {
    scope$$7 = new ILScopeRef(0, "Local");
  }

  if (ILTypeSigParser$$here(x$$362) === "]") {
    ILTypeSigParser$$drop(x$$362);
  }

  if (ILTypeSigParser$$here(x$$362) === ",") {
    ILTypeSigParser$$drop(x$$362);
  }

  const tref$$28 = mkILTyRef(scope$$7, patternInput$$46[0]);
  let genericArgs$$1;

  if (patternInput$$46[1] != null) {
    const genericArgs = patternInput$$46[1];
    genericArgs$$1 = genericArgs;
  } else {
    genericArgs$$1 = (0, _Types.L)();
  }

  const tspec$$41 = ILTypeSpec$$$Create$$7469E1FB(tref$$28, genericArgs$$1);
  let ilty;
  const matchValue$$37 = ILTypeSpec$$get_Name(tspec$$41);
  var $target$$86;

  switch (matchValue$$37) {
    case "System.SByte":
    case "System.Byte":
    case "System.Int16":
    case "System.UInt16":
    case "System.Int32":
    case "System.UInt32":
    case "System.Int64":
    case "System.UInt64":
    case "System.Char":
    case "System.Double":
    case "System.Single":
    case "System.Boolean":
      $target$$86 = 0;
      break;

    default:
      $target$$86 = 1;
  }

  switch ($target$$86) {
    case 0:
      {
        ilty = new ILType(2, "Value", tspec$$41);
        break;
      }

    case 1:
      {
        ilty = new ILType(3, "Boxed", tspec$$41);
        break;
      }
  }

  if (rank$$1 != null) {
    const r$$5 = rank$$1;
    return new ILType(1, "Array", r$$5, ilty);
  } else {
    return ilty;
  }
}

function ILTypeSigParser$$ParseTypeSpec(x$$363) {
  ILTypeSigParser$$reset(x$$363);
  const ilty$$1 = ILTypeSigParser$$ParseType(x$$363);
  return new ILAttribElem(14, "Type", ilty$$1);
}

function ILTypeSigParser$$reset(this$$$2) {
  this$$$2.startPos = 0;
  this$$$2.currentPos = 0;
}

function ILTypeSigParser$$peek(this$$$3) {
  if (this$$$3.currentPos < this$$$3.tstring.length - 1) {
    return this$$$3.tstring[this$$$3.currentPos + 1];
  } else {
    return this$$$3.nil;
  }
}

function ILTypeSigParser$$peekN$$Z524259A4(this$$$4, skip$$2) {
  if (this$$$4.currentPos < this$$$4.tstring.length - skip$$2) {
    return this$$$4.tstring[this$$$4.currentPos + skip$$2];
  } else {
    return this$$$4.nil;
  }
}

function ILTypeSigParser$$here(this$$$5) {
  if (this$$$5.currentPos < this$$$5.tstring.length) {
    return this$$$5.tstring[this$$$5.currentPos];
  } else {
    return this$$$5.nil;
  }
}

function ILTypeSigParser$$step(this$$$6) {
  this$$$6.currentPos = this$$$6.currentPos + 1;
}

function ILTypeSigParser$$skip(this$$$7) {
  this$$$7.startPos = this$$$7.currentPos;
}

function ILTypeSigParser$$drop(this$$$8) {
  ILTypeSigParser$$skip(this$$$8);
  ILTypeSigParser$$step(this$$$8);
  ILTypeSigParser$$skip(this$$$8);
}

function ILTypeSigParser$$take(this$$$9) {
  const s$$16 = this$$$9.currentPos < this$$$9.tstring.length ? this$$$9.tstring.slice(this$$$9.startPos, this$$$9.currentPos + 1) : "";
  ILTypeSigParser$$drop(this$$$9);
  return s$$16;
}

function decodeILAttribData(ilg$$12, ca) {
  const bytes$$22 = ca.Data;
  const sigptr$$51 = 0;
  const patternInput$$47 = sigptr_get_byte(bytes$$22, sigptr$$51);
  const patternInput$$48 = sigptr_get_byte(bytes$$22, patternInput$$47[1]);

  if (!(patternInput$$47[0] === 1 ? patternInput$$48[0] === 0 : false)) {
    throw new Error("decodeILAttribData: invalid data");
  }

  const parseVal = function parseVal(argty$$1, sigptr$$54) {
    var shape$$8, elemTy$$2, tspec$$70, tspec$$68, tspec$$66, tspec$$64, tspec$$62, tspec$$60, tspec$$58, tspec$$56, tspec$$54, tspec$$52, tspec$$50, tspec$$48, tspec$$46, tspec$$44, tspec$$42;

    parseVal: while (true) {
      var $target$$87, tspec$$43;

      if (argty$$1.tag === 2) {
        if (tspec$$42 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$42) === "System.SByte") {
          $target$$87 = 0;
          tspec$$43 = argty$$1.fields[0];
        } else {
          $target$$87 = 1;
        }
      } else {
        $target$$87 = 1;
      }

      switch ($target$$87) {
        case 0:
          {
            const patternInput$$49 = sigptr_get_i8(bytes$$22, sigptr$$54);
            return [new ILAttribElem(3, "SByte", patternInput$$49[0]), patternInput$$49[1]];
          }

        case 1:
          {
            var $target$$88, tspec$$45;

            if (argty$$1.tag === 2) {
              if (tspec$$44 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$44) === "System.Byte") {
                $target$$88 = 0;
                tspec$$45 = argty$$1.fields[0];
              } else {
                $target$$88 = 1;
              }
            } else {
              $target$$88 = 1;
            }

            switch ($target$$88) {
              case 0:
                {
                  const patternInput$$50 = sigptr_get_u8(bytes$$22, sigptr$$54);
                  return [new ILAttribElem(7, "Byte", patternInput$$50[0]), patternInput$$50[1]];
                }

              case 1:
                {
                  var $target$$89, tspec$$47;

                  if (argty$$1.tag === 2) {
                    if (tspec$$46 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$46) === "System.Int16") {
                      $target$$89 = 0;
                      tspec$$47 = argty$$1.fields[0];
                    } else {
                      $target$$89 = 1;
                    }
                  } else {
                    $target$$89 = 1;
                  }

                  switch ($target$$89) {
                    case 0:
                      {
                        const patternInput$$51 = sigptr_get_i16(bytes$$22, sigptr$$54);
                        return [new ILAttribElem(4, "Int16", patternInput$$51[0]), patternInput$$51[1]];
                      }

                    case 1:
                      {
                        var $target$$90, tspec$$49;

                        if (argty$$1.tag === 2) {
                          if (tspec$$48 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$48) === "System.UInt16") {
                            $target$$90 = 0;
                            tspec$$49 = argty$$1.fields[0];
                          } else {
                            $target$$90 = 1;
                          }
                        } else {
                          $target$$90 = 1;
                        }

                        switch ($target$$90) {
                          case 0:
                            {
                              const patternInput$$52 = sigptr_get_u16(bytes$$22, sigptr$$54);
                              return [new ILAttribElem(8, "UInt16", patternInput$$52[0]), patternInput$$52[1]];
                            }

                          case 1:
                            {
                              var $target$$91, tspec$$51;

                              if (argty$$1.tag === 2) {
                                if (tspec$$50 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$50) === "System.Int32") {
                                  $target$$91 = 0;
                                  tspec$$51 = argty$$1.fields[0];
                                } else {
                                  $target$$91 = 1;
                                }
                              } else {
                                $target$$91 = 1;
                              }

                              switch ($target$$91) {
                                case 0:
                                  {
                                    const patternInput$$53 = sigptr_get_i32(bytes$$22, sigptr$$54);
                                    return [new ILAttribElem(5, "Int32", patternInput$$53[0]), patternInput$$53[1]];
                                  }

                                case 1:
                                  {
                                    var $target$$92, tspec$$53;

                                    if (argty$$1.tag === 2) {
                                      if (tspec$$52 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$52) === "System.UInt32") {
                                        $target$$92 = 0;
                                        tspec$$53 = argty$$1.fields[0];
                                      } else {
                                        $target$$92 = 1;
                                      }
                                    } else {
                                      $target$$92 = 1;
                                    }

                                    switch ($target$$92) {
                                      case 0:
                                        {
                                          const patternInput$$54 = sigptr_get_u32(bytes$$22, sigptr$$54);
                                          return [new ILAttribElem(9, "UInt32", patternInput$$54[0]), patternInput$$54[1]];
                                        }

                                      case 1:
                                        {
                                          var $target$$93, tspec$$55;

                                          if (argty$$1.tag === 2) {
                                            if (tspec$$54 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$54) === "System.Int64") {
                                              $target$$93 = 0;
                                              tspec$$55 = argty$$1.fields[0];
                                            } else {
                                              $target$$93 = 1;
                                            }
                                          } else {
                                            $target$$93 = 1;
                                          }

                                          switch ($target$$93) {
                                            case 0:
                                              {
                                                const patternInput$$55 = sigptr_get_i64(bytes$$22, sigptr$$54);
                                                return [new ILAttribElem(6, "Int64", patternInput$$55[0]), patternInput$$55[1]];
                                              }

                                            case 1:
                                              {
                                                var $target$$94, tspec$$57;

                                                if (argty$$1.tag === 2) {
                                                  if (tspec$$56 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$56) === "System.UInt64") {
                                                    $target$$94 = 0;
                                                    tspec$$57 = argty$$1.fields[0];
                                                  } else {
                                                    $target$$94 = 1;
                                                  }
                                                } else {
                                                  $target$$94 = 1;
                                                }

                                                switch ($target$$94) {
                                                  case 0:
                                                    {
                                                      const patternInput$$56 = sigptr_get_u64(bytes$$22, sigptr$$54);
                                                      return [new ILAttribElem(10, "UInt64", patternInput$$56[0]), patternInput$$56[1]];
                                                    }

                                                  case 1:
                                                    {
                                                      var $target$$95, tspec$$59;

                                                      if (argty$$1.tag === 2) {
                                                        if (tspec$$58 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$58) === "System.Double") {
                                                          $target$$95 = 0;
                                                          tspec$$59 = argty$$1.fields[0];
                                                        } else {
                                                          $target$$95 = 1;
                                                        }
                                                      } else {
                                                        $target$$95 = 1;
                                                      }

                                                      switch ($target$$95) {
                                                        case 0:
                                                          {
                                                            const patternInput$$57 = sigptr_get_ieee64(bytes$$22, sigptr$$54);
                                                            return [new ILAttribElem(12, "Double", patternInput$$57[0]), patternInput$$57[1]];
                                                          }

                                                        case 1:
                                                          {
                                                            var $target$$96, tspec$$61;

                                                            if (argty$$1.tag === 2) {
                                                              if (tspec$$60 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$60) === "System.Single") {
                                                                $target$$96 = 0;
                                                                tspec$$61 = argty$$1.fields[0];
                                                              } else {
                                                                $target$$96 = 1;
                                                              }
                                                            } else {
                                                              $target$$96 = 1;
                                                            }

                                                            switch ($target$$96) {
                                                              case 0:
                                                                {
                                                                  const patternInput$$58 = sigptr_get_ieee32(bytes$$22, sigptr$$54);
                                                                  return [new ILAttribElem(11, "Single", patternInput$$58[0]), patternInput$$58[1]];
                                                                }

                                                              case 1:
                                                                {
                                                                  var $target$$97, tspec$$63;

                                                                  if (argty$$1.tag === 2) {
                                                                    if (tspec$$62 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$62) === "System.Char") {
                                                                      $target$$97 = 0;
                                                                      tspec$$63 = argty$$1.fields[0];
                                                                    } else {
                                                                      $target$$97 = 1;
                                                                    }
                                                                  } else {
                                                                    $target$$97 = 1;
                                                                  }

                                                                  switch ($target$$97) {
                                                                    case 0:
                                                                      {
                                                                        const patternInput$$59 = sigptr_get_u16(bytes$$22, sigptr$$54);
                                                                        return [new ILAttribElem(2, "Char", String.fromCharCode(~~patternInput$$59[0])), patternInput$$59[1]];
                                                                      }

                                                                    case 1:
                                                                      {
                                                                        var $target$$98, tspec$$65;

                                                                        if (argty$$1.tag === 2) {
                                                                          if (tspec$$64 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$64) === "System.Boolean") {
                                                                            $target$$98 = 0;
                                                                            tspec$$65 = argty$$1.fields[0];
                                                                          } else {
                                                                            $target$$98 = 1;
                                                                          }
                                                                        } else {
                                                                          $target$$98 = 1;
                                                                        }

                                                                        switch ($target$$98) {
                                                                          case 0:
                                                                            {
                                                                              const patternInput$$60 = sigptr_get_byte(bytes$$22, sigptr$$54);
                                                                              return [new ILAttribElem(1, "Bool", !(patternInput$$60[0] === 0)), patternInput$$60[1]];
                                                                            }

                                                                          case 1:
                                                                            {
                                                                              var $target$$99, tspec$$67;

                                                                              if (argty$$1.tag === 3) {
                                                                                if (tspec$$66 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$66) === "System.String") {
                                                                                  $target$$99 = 0;
                                                                                  tspec$$67 = argty$$1.fields[0];
                                                                                } else {
                                                                                  $target$$99 = 1;
                                                                                }
                                                                              } else {
                                                                                $target$$99 = 1;
                                                                              }

                                                                              switch ($target$$99) {
                                                                                case 0:
                                                                                  {
                                                                                    const patternInput$$61 = sigptr_get_serstring_possibly_null(bytes$$22, sigptr$$54);
                                                                                    return [new ILAttribElem(0, "String", patternInput$$61[0]), patternInput$$61[1]];
                                                                                  }

                                                                                case 1:
                                                                                  {
                                                                                    var $target$$100, tspec$$69;

                                                                                    if (argty$$1.tag === 3) {
                                                                                      if (tspec$$68 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$68) === "System.Type") {
                                                                                        $target$$100 = 0;
                                                                                        tspec$$69 = argty$$1.fields[0];
                                                                                      } else {
                                                                                        $target$$100 = 1;
                                                                                      }
                                                                                    } else {
                                                                                      $target$$100 = 1;
                                                                                    }

                                                                                    switch ($target$$100) {
                                                                                      case 0:
                                                                                        {
                                                                                          const patternInput$$62 = sigptr_get_serstring_possibly_null(bytes$$22, sigptr$$54);

                                                                                          if (patternInput$$62[0] != null) {
                                                                                            const n$$49 = patternInput$$62[0];

                                                                                            try {
                                                                                              const parser = ILTypeSigParser$$$$002Ector$$Z721C83C5(n$$49);
                                                                                              return [ILTypeSigParser$$ParseTypeSpec(parser), patternInput$$62[1]];
                                                                                            } catch (e$$4) {
                                                                                              throw new Error((0, _String.toText)((0, _String.printf)("decodeILAttribData: error parsing type in custom attribute blob: %s"))(e$$4.message));
                                                                                            }
                                                                                          } else {
                                                                                            return [new ILAttribElem(15, "TypeRef", null), patternInput$$62[1]];
                                                                                          }
                                                                                        }

                                                                                      case 1:
                                                                                        {
                                                                                          var $target$$101, tspec$$71;

                                                                                          if (argty$$1.tag === 3) {
                                                                                            if (tspec$$70 = argty$$1.fields[0], ILTypeSpec$$get_Name(tspec$$70) === "System.Object") {
                                                                                              $target$$101 = 0;
                                                                                              tspec$$71 = argty$$1.fields[0];
                                                                                            } else {
                                                                                              $target$$101 = 1;
                                                                                            }
                                                                                          } else {
                                                                                            $target$$101 = 1;
                                                                                          }

                                                                                          switch ($target$$101) {
                                                                                            case 0:
                                                                                              {
                                                                                                const patternInput$$63 = sigptr_get_u8(bytes$$22, sigptr$$54);

                                                                                                if (patternInput$$63[0] === 255) {
                                                                                                  return [new ILAttribElem(13, "Null"), patternInput$$63[1]];
                                                                                                } else {
                                                                                                  const patternInput$$64 = decodeCustomAttrElemType(ilg$$12, bytes$$22, patternInput$$63[1], patternInput$$63[0]);
                                                                                                  argty$$1 = patternInput$$64[0];
                                                                                                  sigptr$$54 = patternInput$$64[1];
                                                                                                  continue parseVal;
                                                                                                }
                                                                                              }

                                                                                            case 1:
                                                                                              {
                                                                                                var $target$$102, elemTy$$3, shape$$9;

                                                                                                if (argty$$1.tag === 1) {
                                                                                                  if (shape$$8 = argty$$1.fields[0], (elemTy$$2 = argty$$1.fields[1], (0, _Util.equals)(shape$$8, ILArrayShape$$$get_SingleDimensional()))) {
                                                                                                    $target$$102 = 0;
                                                                                                    elemTy$$3 = argty$$1.fields[1];
                                                                                                    shape$$9 = argty$$1.fields[0];
                                                                                                  } else {
                                                                                                    $target$$102 = 1;
                                                                                                  }
                                                                                                } else {
                                                                                                  $target$$102 = 1;
                                                                                                }

                                                                                                switch ($target$$102) {
                                                                                                  case 0:
                                                                                                    {
                                                                                                      const patternInput$$65 = sigptr_get_i32(bytes$$22, sigptr$$54);

                                                                                                      if (patternInput$$65[0] === -1) {
                                                                                                        return [new ILAttribElem(13, "Null"), patternInput$$65[1]];
                                                                                                      } else {
                                                                                                        const parseElems = function parseElems(acc, n$$51, sigptr$$72) {
                                                                                                          parseElems: while (true) {
                                                                                                            if (n$$51 === 0) {
                                                                                                              return [(0, _List.reverse)(acc), sigptr$$72];
                                                                                                            } else {
                                                                                                              const patternInput$$66 = parseVal(elemTy$$3, sigptr$$72);
                                                                                                              acc = (0, _Types.L)(patternInput$$66[0], acc);
                                                                                                              n$$51 = n$$51 - 1;
                                                                                                              sigptr$$72 = patternInput$$66[1];
                                                                                                              continue parseElems;
                                                                                                            }
                                                                                                          }
                                                                                                        };

                                                                                                        const patternInput$$67 = parseElems((0, _Types.L)(), patternInput$$65[0], patternInput$$65[1]);
                                                                                                        return [new ILAttribElem(16, "Array", elemTy$$3, patternInput$$67[0]), patternInput$$67[1]];
                                                                                                      }
                                                                                                    }

                                                                                                  case 1:
                                                                                                    {
                                                                                                      if (argty$$1.tag === 2) {
                                                                                                        const patternInput$$68 = sigptr_get_i32(bytes$$22, sigptr$$54);
                                                                                                        return [new ILAttribElem(5, "Int32", patternInput$$68[0]), patternInput$$68[1]];
                                                                                                      } else {
                                                                                                        throw new Error("decodeILAttribData: attribute data involves an enum or System.Type value");
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
  };

  const parseFixed = function parseFixed(argtys$$2, sigptr$$76) {
    if (argtys$$2.tail != null) {
      const t$$21 = argtys$$2.tail;
      const h = argtys$$2.head;
      const patternInput$$69 = parseVal(h, sigptr$$76);
      const patternInput$$70 = parseFixed(t$$21, patternInput$$69[1]);
      return [(0, _Types.L)(patternInput$$69[0], patternInput$$70[0]), patternInput$$70[1]];
    } else {
      return [(0, _Types.L)(), sigptr$$76];
    }
  };

  const patternInput$$71 = parseFixed(ILMethodSpec$$get_FormalArgTypes(ca.Method), patternInput$$48[1]);
  const patternInput$$72 = sigptr_get_u16(bytes$$22, patternInput$$71[1]);

  const parseNamed = function parseNamed(acc$$1, n$$53, sigptr$$81) {
    parseNamed: while (true) {
      if (n$$53 === 0) {
        return (0, _List.reverse)(acc$$1);
      } else {
        const patternInput$$73 = sigptr_get_u8(bytes$$22, sigptr$$81);
        const isProp = ~~patternInput$$73[0] === 84;
        const patternInput$$74 = sigptr_get_u8(bytes$$22, patternInput$$73[1]);
        let patternInput$$77;

        if (85 === ~~patternInput$$74[0]) {
          const patternInput$$75 = sigptr_get_serstring(bytes$$22, patternInput$$74[1]);
          let patternInput$$76;
          const pieces = patternInput$$75[0].split(",");
          patternInput$$76 = pieces.length > 1 ? [pieces[0], (0, _String.join)(",", ...pieces.slice(1, pieces.length))] : [pieces[0], null];
          let scoref$$11;

          if (patternInput$$76[1] == null) {
            scoref$$11 = ILGlobals$$get_primaryAssemblyScopeRef(ilg$$12);
          } else {
            const aname = patternInput$$76[1];
            scoref$$11 = new ILScopeRef(2, "Assembly", mkSimpleAssRef(aname));
          }

          const tref$$29 = mkILTyRef(scoref$$11, patternInput$$76[0]);
          const tspec$$72 = mkILNonGenericTySpec(tref$$29);
          patternInput$$77 = [new ILType(2, "Value", tspec$$72), patternInput$$75[1]];
        } else {
          patternInput$$77 = decodeCustomAttrElemType(ilg$$12, bytes$$22, patternInput$$74[1], patternInput$$74[0]);
        }

        const patternInput$$78 = sigptr_get_serstring(bytes$$22, patternInput$$77[1]);
        const patternInput$$79 = parseVal(patternInput$$77[0], patternInput$$78[1]);
        acc$$1 = (0, _Types.L)([patternInput$$78[0], patternInput$$77[0], isProp, patternInput$$79[0]], acc$$1);
        n$$53 = n$$53 - 1;
        sigptr$$81 = patternInput$$79[1];
        continue parseNamed;
      }
    }
  };

  const named = parseNamed((0, _Types.L)(), ~~patternInput$$72[0], patternInput$$72[1]);
  return [patternInput$$71[0], named];
}

const ILReferences = (0, _Types.declare)(function ILReferences(arg1, arg2) {
  this.AssemblyReferences = arg1;
  this.ModuleReferences = arg2;
}, _Types.Record);
exports.ILReferences = ILReferences;
const ILReferencesAccumulator = (0, _Types.declare)(function ILReferencesAccumulator(arg1, arg2) {
  this.refsA = arg1;
  this.refsM = arg2;
}, _Types.Record);
exports.ILReferencesAccumulator = ILReferencesAccumulator;
const emptyILRefs = new ILReferences((0, _Types.L)(), (0, _Types.L)());
exports.emptyILRefs = emptyILRefs;

function refs_of_assref(s$$17, x$$364) {
  (0, _Util.addToSet)(x$$364, s$$17.refsA);
}

function refs_of_modref(s$$18, x$$365) {
  (0, _Util.addToSet)(x$$365, s$$18.refsM);
}

function refs_of_scoref(s$$19, x$$366) {
  switch (x$$366.tag) {
    case 2:
      {
        const assref = x$$366.fields[0];
        refs_of_assref(s$$19, assref);
        break;
      }

    case 1:
      {
        const modref = x$$366.fields[0];
        refs_of_modref(s$$19, modref);
        break;
      }

    default:
      {}
  }
}

function refs_of_tref(s$$20, x$$367) {
  refs_of_scoref(s$$20, ILTypeRef$$get_Scope(x$$367));
}

function refs_of_typ(s$$21, x$$368) {
  var $target$$103, ty$$68, tr$$3;

  switch (x$$368.tag) {
    case 7:
      $target$$103 = 0;
      break;

    case 8:
      $target$$103 = 1;
      break;

    case 1:
      $target$$103 = 2;
      ty$$68 = x$$368.fields[1];
      break;

    case 4:
      $target$$103 = 2;
      ty$$68 = x$$368.fields[0];
      break;

    case 5:
      $target$$103 = 2;
      ty$$68 = x$$368.fields[0];
      break;

    case 2:
      $target$$103 = 3;
      tr$$3 = x$$368.fields[0];
      break;

    case 3:
      $target$$103 = 3;
      tr$$3 = x$$368.fields[0];
      break;

    case 6:
      $target$$103 = 4;
      break;

    default:
      $target$$103 = 0;
  }

  switch ($target$$103) {
    case 1:
      {
        const ty2$$2 = x$$368.fields[2];
        const ty1 = x$$368.fields[1];
        refs_of_tref(s$$21, ty1);
        refs_of_typ(s$$21, ty2$$2);
        break;
      }

    case 2:
      {
        refs_of_typ(s$$21, ty$$68);
        break;
      }

    case 3:
      {
        refs_of_tspec(s$$21, tr$$3);
        break;
      }

    case 4:
      {
        const mref$$3 = x$$368.fields[0];
        refs_of_callsig(s$$21, mref$$3);
        break;
      }
  }
}

function refs_of_inst(s$$22, i$$28) {
  refs_of_tys(s$$22, i$$28);
}

function refs_of_tspec(s$$23, x$$369) {
  refs_of_tref(s$$23, ILTypeSpec$$get_TypeRef(x$$369));
  refs_of_inst(s$$23, ILTypeSpec$$get_GenericArgs(x$$369));
}

function refs_of_callsig(s$$24, csig$$2) {
  refs_of_tys(s$$24, csig$$2.ArgTypes);
  refs_of_typ(s$$24, csig$$2.ReturnType);
}

function refs_of_genparam(s$$25, x$$370) {
  refs_of_tys(s$$25, x$$370.Constraints);
}

function refs_of_genparams(s$$26, b$$15) {
  (0, _List.iterate)(function (x$$371) {
    refs_of_genparam(s$$26, x$$371);
  }, b$$15);
}

function refs_of_dloc(s$$27, ts) {
  refs_of_tref(s$$27, ts);
}

function refs_of_mref(s$$28, x$$372) {
  refs_of_dloc(s$$28, ILMethodRef$$get_DeclaringTypeRef(x$$372));
  refs_of_tys(s$$28, x$$372.mrefArgs);
  refs_of_typ(s$$28, x$$372.mrefReturn);
}

function refs_of_fref(s$$29, x$$373) {
  refs_of_tref(s$$29, x$$373.DeclaringTypeRef);
  refs_of_typ(s$$29, x$$373.Type);
}

function refs_of_ospec(s$$30, _arg1$$6) {
  const ty$$69 = _arg1$$6.fields[1];
  const mref$$4 = _arg1$$6.fields[0];
  refs_of_mref(s$$30, mref$$4);
  refs_of_typ(s$$30, ty$$69);
}

function refs_of_mspec(s$$31, x$$374) {
  refs_of_mref(s$$31, ILMethodSpec$$get_MethodRef(x$$374));
  refs_of_typ(s$$31, ILMethodSpec$$get_DeclaringType(x$$374));
  refs_of_inst(s$$31, ILMethodSpec$$get_GenericArgs(x$$374));
}

function refs_of_fspec(s$$32, x$$375) {
  refs_of_fref(s$$32, x$$375.FieldRef);
  refs_of_typ(s$$32, x$$375.DeclaringType);
}

function refs_of_tys(s$$33, l$$26) {
  (0, _List.iterate)(function (x$$376) {
    refs_of_typ(s$$33, x$$376);
  }, l$$26);
}

function refs_of_token(s$$34, x$$377) {
  switch (x$$377.tag) {
    case 1:
      {
        const mr$$1 = x$$377.fields[0];
        refs_of_mspec(s$$34, mr$$1);
        break;
      }

    case 2:
      {
        const fr$$1 = x$$377.fields[0];
        refs_of_fspec(s$$34, fr$$1);
        break;
      }

    default:
      {
        const ty$$70 = x$$377.fields[0];
        refs_of_typ(s$$34, ty$$70);
      }
  }
}

function refs_of_custom_attr(s$$35, x$$378) {
  refs_of_mspec(s$$35, x$$378.Method);
}

function refs_of_custom_attrs(s$$36, cas) {
  (0, _List.iterate)(function (x$$379) {
    refs_of_custom_attr(s$$36, x$$379);
  }, ILAttributes$$get_AsList(cas));
}

function refs_of_varargs(s$$37, tyso) {
  (0, _Seq.iterate)(function (l$$27) {
    refs_of_tys(s$$37, l$$27);
  }, (0, _Option.defaultArg)(tyso, [], function ($x$$30) {
    return [$x$$30];
  }));
}

function refs_of_instr(s$$38, x$$380) {
  var $target$$104, mr$$2, varargs, mr$$4, fr$$2, ty$$71;

  switch (x$$380.tag) {
    case 53:
      $target$$104 = 0;
      mr$$2 = x$$380.fields[0];
      varargs = x$$380.fields[1];
      break;

    case 49:
      $target$$104 = 0;
      mr$$2 = x$$380.fields[1];
      varargs = x$$380.fields[2];
      break;

    case 50:
      $target$$104 = 1;
      break;

    case 51:
      $target$$104 = 2;
      break;

    case 44:
      $target$$104 = 3;
      mr$$4 = x$$380.fields[0];
      break;

    case 52:
      $target$$104 = 3;
      mr$$4 = x$$380.fields[0];
      break;

    case 69:
      $target$$104 = 3;
      mr$$4 = x$$380.fields[0];
      break;

    case 59:
      $target$$104 = 4;
      fr$$2 = x$$380.fields[1];
      break;

    case 60:
      $target$$104 = 4;
      fr$$2 = x$$380.fields[2];
      break;

    case 61:
      $target$$104 = 4;
      fr$$2 = x$$380.fields[0];
      break;

    case 62:
      $target$$104 = 4;
      fr$$2 = x$$380.fields[0];
      break;

    case 63:
      $target$$104 = 4;
      fr$$2 = x$$380.fields[1];
      break;

    case 64:
      $target$$104 = 4;
      fr$$2 = x$$380.fields[2];
      break;

    case 66:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[0];
      break;

    case 67:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[0];
      break;

    case 70:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[0];
      break;

    case 71:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[0];
      break;

    case 72:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[2];
      break;

    case 73:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[2];
      break;

    case 74:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[0];
      break;

    case 75:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[0];
      break;

    case 76:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[0];
      break;

    case 77:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[0];
      break;

    case 81:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[1];
      break;

    case 80:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[3];
      break;

    case 82:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[1];
      break;

    case 83:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[1];
      break;

    case 85:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[0];
      break;

    case 87:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[0];
      break;

    case 94:
      $target$$104 = 5;
      ty$$71 = x$$380.fields[0];
      break;

    case 68:
      $target$$104 = 6;
      break;

    case 79:
    case 78:
    case 65:
    case 46:
    case 42:
    case 41:
    case 40:
    case 39:
    case 38:
    case 37:
    case 36:
    case 35:
    case 57:
    case 43:
    case 45:
    case 58:
    case 86:
    case 84:
    case 54:
    case 93:
    case 92:
    case 91:
    case 47:
    case 56:
    case 55:
    case 90:
    case 88:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 89:
    case 95:
      $target$$104 = 7;
      break;

    default:
      $target$$104 = 0;
      mr$$2 = x$$380.fields[1];
      varargs = x$$380.fields[2];
  }

  switch ($target$$104) {
    case 0:
      {
        refs_of_mspec(s$$38, mr$$2);
        refs_of_varargs(s$$38, varargs);
        break;
      }

    case 1:
      {
        const varargs$$1 = x$$380.fields[3];
        const tr$$4 = x$$380.fields[1];
        const mr$$3 = x$$380.fields[2];
        refs_of_typ(s$$38, tr$$4);
        refs_of_mspec(s$$38, mr$$3);
        refs_of_varargs(s$$38, varargs$$1);
        break;
      }

    case 2:
      {
        const varargs$$2 = x$$380.fields[2];
        const callsig = x$$380.fields[1];
        refs_of_callsig(s$$38, callsig);
        refs_of_varargs(s$$38, varargs$$2);
        break;
      }

    case 3:
      {
        refs_of_mspec(s$$38, mr$$4);
        break;
      }

    case 4:
      {
        refs_of_fspec(s$$38, fr$$2);
        break;
      }

    case 5:
      {
        refs_of_typ(s$$38, ty$$71);
        break;
      }

    case 6:
      {
        const token$$1 = x$$380.fields[0];
        refs_of_token(s$$38, token$$1);
        break;
      }
  }
}

function refs_of_il_code(s$$39, c$$11) {
  c$$11.Instrs.forEach(function action$$2(x$$381) {
    refs_of_instr(s$$39, x$$381);
  });
  (0, _List.iterate)(function action$$3(e$$5) {
    if (e$$5.Clause.tag === 3) {
      const ilty$$2 = e$$5.Clause.fields[0];
      refs_of_typ(s$$39, ilty$$2);
    }
  }, c$$11.Exceptions);
}

function refs_of_ilmbody(s$$40, il$$6) {
  (0, _List.iterate)(function (loc$$1) {
    refs_of_local(s$$40, loc$$1);
  }, il$$6.Locals);
  refs_of_il_code(s$$40, il$$6.Code);
}

function refs_of_local(s$$41, loc$$2) {
  refs_of_typ(s$$41, loc$$2.Type);
}

function refs_of_mbody(s$$42, x$$382) {
  switch (x$$382.tag) {
    case 0:
      {
        const il$$7 = x$$382.fields[0];
        refs_of_ilmbody(s$$42, il$$7);
        break;
      }

    case 1:
      {
        const attr = x$$382.fields[0];
        refs_of_modref(s$$42, attr.Where);
        break;
      }

    default:
      {}
  }
}

function refs_of_mdef(s$$43, md$$7) {
  (0, _List.iterate)(function (p$$2) {
    refs_of_param(s$$43, p$$2);
  }, ILMethodDef$$get_Parameters(md$$7));
  refs_of_return(s$$43, ILMethodDef$$get_Return(md$$7));
  refs_of_mbody(s$$43, ILLazyMethodBody$$get_Contents(ILMethodDef$$get_Body(md$$7)));
  refs_of_custom_attrs(s$$43, ILMethodDef$$get_CustomAttrs(md$$7));
  refs_of_genparams(s$$43, ILMethodDef$$get_GenericParams(md$$7));
}

function refs_of_param(s$$44, p$$3) {
  refs_of_typ(s$$44, p$$3.Type);
}

function refs_of_return(s$$45, rt) {
  refs_of_typ(s$$45, rt.Type);
}

function refs_of_mdefs(s$$46, x$$383) {
  (0, _Seq.iterate)(function (md$$8) {
    refs_of_mdef(s$$46, md$$8);
  }, x$$383);
}

function refs_of_event_def(s$$47, ed) {
  (0, _Seq.iterate)(function (x$$384) {
    refs_of_typ(s$$47, x$$384);
  }, (0, _Option.defaultArg)(ILEventDef$$get_EventType(ed), [], function ($x$$31) {
    return [$x$$31];
  }));
  refs_of_mref(s$$47, ILEventDef$$get_AddMethod(ed));
  refs_of_mref(s$$47, ILEventDef$$get_RemoveMethod(ed));
  (0, _Seq.iterate)(function (x$$385) {
    refs_of_mref(s$$47, x$$385);
  }, (0, _Option.defaultArg)(ILEventDef$$get_FireMethod(ed), [], function ($x$$32) {
    return [$x$$32];
  }));
  (0, _List.iterate)(function (x$$386) {
    refs_of_mref(s$$47, x$$386);
  }, ILEventDef$$get_OtherMethods(ed));
  refs_of_custom_attrs(s$$47, ILEventDef$$get_CustomAttrs(ed));
}

function refs_of_events(s$$48, x$$387) {
  (0, _List.iterate)(function (ed$$1) {
    refs_of_event_def(s$$48, ed$$1);
  }, ILEventDefs$$get_AsList(x$$387));
}

function refs_of_property_def(s$$49, pd) {
  (0, _Seq.iterate)(function (x$$388) {
    refs_of_mref(s$$49, x$$388);
  }, (0, _Option.defaultArg)(ILPropertyDef$$get_SetMethod(pd), [], function ($x$$33) {
    return [$x$$33];
  }));
  (0, _Seq.iterate)(function (x$$389) {
    refs_of_mref(s$$49, x$$389);
  }, (0, _Option.defaultArg)(ILPropertyDef$$get_GetMethod(pd), [], function ($x$$34) {
    return [$x$$34];
  }));
  refs_of_typ(s$$49, ILPropertyDef$$get_PropertyType(pd));
  refs_of_tys(s$$49, ILPropertyDef$$get_Args(pd));
  refs_of_custom_attrs(s$$49, ILPropertyDef$$get_CustomAttrs(pd));
}

function refs_of_properties(s$$50, x$$390) {
  (0, _List.iterate)(function (pd$$1) {
    refs_of_property_def(s$$50, pd$$1);
  }, ILPropertyDefs$$get_AsList(x$$390));
}

function refs_of_fdef(s$$51, fd$$2) {
  refs_of_typ(s$$51, ILFieldDef$$get_FieldType(fd$$2));
  refs_of_custom_attrs(s$$51, ILFieldDef$$get_CustomAttrs(fd$$2));
}

function refs_of_fields(s$$52, fields$$7) {
  (0, _List.iterate)(function (fd$$3) {
    refs_of_fdef(s$$52, fd$$3);
  }, fields$$7);
}

function refs_of_method_impls(s$$53, mimpls) {
  (0, _List.iterate)(function (m$$5) {
    refs_of_method_impl(s$$53, m$$5);
  }, mimpls);
}

function refs_of_method_impl(s$$54, m$$6) {
  refs_of_ospec(s$$54, m$$6.Overrides);
  refs_of_mspec(s$$54, m$$6.OverrideBy);
}

function refs_of_tdef_kind(_s$$1, _k) {}

function refs_of_tdef(s$$55, td$$5) {
  refs_of_types(s$$55, ILTypeDef$$get_NestedTypes(td$$5));
  refs_of_genparams(s$$55, ILTypeDef$$get_GenericParams(td$$5));
  refs_of_tys(s$$55, ILTypeDef$$get_Implements(td$$5));
  (0, _Seq.iterate)(function (x$$391) {
    refs_of_typ(s$$55, x$$391);
  }, (0, _Option.defaultArg)(ILTypeDef$$get_Extends(td$$5), [], function ($x$$35) {
    return [$x$$35];
  }));
  refs_of_mdefs(s$$55, ILTypeDef$$get_Methods(td$$5));
  refs_of_fields(s$$55, ILFieldDefs$$get_AsList(ILTypeDef$$get_Fields(td$$5)));
  refs_of_method_impls(s$$55, ILMethodImplDefs$$get_AsList(ILTypeDef$$get_MethodImpls(td$$5)));
  refs_of_events(s$$55, ILTypeDef$$get_Events(td$$5));
  refs_of_tdef_kind(s$$55, td$$5);
  refs_of_custom_attrs(s$$55, ILTypeDef$$get_CustomAttrs(td$$5));
  refs_of_properties(s$$55, ILTypeDef$$get_Properties(td$$5));
}

function refs_of_string(_s$$2, _arg2$$1) {}

function refs_of_types(s$$56, types) {
  (0, _Seq.iterate)(function (td$$6) {
    refs_of_tdef(s$$56, td$$6);
  }, types);
}

function refs_of_exported_type(s$$57, c$$12) {
  refs_of_custom_attrs(s$$57, ILExportedTypeOrForwarder$$get_CustomAttrs(c$$12));
}

function refs_of_exported_types(s$$58, tab$$9) {
  (0, _List.iterate)(function (c$$13) {
    refs_of_exported_type(s$$58, c$$13);
  }, ILExportedTypesAndForwarders$$get_AsList(tab$$9));
}

function refs_of_resource_where(s$$59, x$$392) {
  switch (x$$392.tag) {
    case 1:
      {
        break;
      }

    case 2:
      {
        const mref$$5 = x$$392.fields[0];
        refs_of_modref(s$$59, mref$$5);
        break;
      }

    case 3:
      {
        const aref$$2 = x$$392.fields[0];
        refs_of_assref(s$$59, aref$$2);
        break;
      }

    default:
      {}
  }
}

function refs_of_resource(s$$60, x$$393) {
  refs_of_resource_where(s$$60, x$$393.Location);
  refs_of_custom_attrs(s$$60, ILResource$$get_CustomAttrs(x$$393));
}

function refs_of_resources(s$$61, tab$$10) {
  (0, _List.iterate)(function (x$$394) {
    refs_of_resource(s$$61, x$$394);
  }, ILResources$$get_AsList(tab$$10));
}

function refs_of_modul(s$$62, m$$7) {
  refs_of_types(s$$62, m$$7.TypeDefs);
  refs_of_resources(s$$62, m$$7.Resources);
  (0, _Seq.iterate)(function (m$$8) {
    refs_of_manifest(s$$62, m$$8);
  }, (0, _Option.defaultArg)(m$$7.Manifest, [], function ($x$$36) {
    return [$x$$36];
  }));
}

function refs_of_manifest(s$$63, m$$9) {
  refs_of_custom_attrs(s$$63, ILAssemblyManifest$$get_CustomAttrs(m$$9));
  refs_of_exported_types(s$$63, m$$9.ExportedTypes);
}

function computeILRefs(modul) {
  const s$$64 = new ILReferencesAccumulator((0, _Set.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp2.HashIdentity$$$Structural)())), (0, _Set.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp2.HashIdentity$$$Structural)())));
  refs_of_modul(s$$64, modul);
  return new ILReferences((0, _Seq.fold)(function (acc$$2, x$$395) {
    return (0, _Types.L)(x$$395, acc$$2);
  }, (0, _Types.L)(), s$$64.refsA), (0, _Seq.fold)(function (acc$$3, x$$396) {
    return (0, _Types.L)(x$$396, acc$$3);
  }, (0, _Types.L)(), s$$64.refsM));
}

const tspan = (0, _TimeSpan.create)((0, _Long.op_Subtraction)((() => {
  let copyOfStruct = (0, _Date.utcNow)();
  return (0, _Date.getTicks)(copyOfStruct);
})(), (() => {
  let copyOfStruct$$1 = (0, _Date.create)(2000, 1, 1);
  return (0, _Date.getTicks)(copyOfStruct$$1);
})()));
exports.tspan = tspan;

function parseILVersion(vstr) {
  var copyOfStruct$$3, copyOfStruct$$2;
  let vstr$$1 = (0, _String.trimStart)(vstr, "v");
  const versionComponents = vstr$$1.split(".");

  if (versionComponents.length > 2) {
    const defaultBuild = ((0, _TimeSpan.days)(tspan) & 0xFFFF) % 65535 - 1;
    const defaultRevision = ((copyOfStruct$$3 = (copyOfStruct$$2 = (0, _Date.utcNow)(), (0, _Date.timeOfDay)(copyOfStruct$$2)), (0, _TimeSpan.totalSeconds)(copyOfStruct$$3)) / 2 & 0xFFFF) % 65535 - 1;

    if (versionComponents[2] === "*") {
      if (versionComponents.length > 3) {
        throw new Error("Invalid version format");
      } else {
        versionComponents[2] = defaultBuild.toString();
        vstr$$1 = (0, _String.join)(".", ...versionComponents) + "." + defaultRevision.toString();
      }
    } else if (versionComponents.length > 3 ? versionComponents[3] === "*" : false) {
      versionComponents[3] = defaultRevision.toString();
      vstr$$1 = (0, _String.join)(".", ...versionComponents);
    }
  }

  const parts = vstr$$1.split(".");
  const versions = (0, _Array.append)((0, _Array.map)(_Int.parse, parts, Uint16Array), new Uint16Array([0, 0, 0, 0]), Uint16Array);
  return [versions[0], versions[1], versions[2], versions[3]];
}

function compareILVersions(tupledArg$$4, _arg1$$7) {
  const c$$14 = (0, _Util.comparePrimitives)(tupledArg$$4[0], _arg1$$7[0]) | 0;

  if (c$$14 !== 0) {
    return c$$14 | 0;
  } else {
    const c$$15 = (0, _Util.comparePrimitives)(tupledArg$$4[1], _arg1$$7[1]) | 0;

    if (c$$15 !== 0) {
      return c$$15 | 0;
    } else {
      const c$$16 = (0, _Util.comparePrimitives)(tupledArg$$4[2], _arg1$$7[2]) | 0;

      if (c$$16 !== 0) {
        return c$$16 | 0;
      } else {
        const c$$17 = (0, _Util.comparePrimitives)(tupledArg$$4[3], _arg1$$7[3]) | 0;

        if (c$$17 !== 0) {
          return c$$17 | 0;
        } else {
          return 0;
        }
      }
    }
  }
}

function unscopeILTypeRef(x$$397) {
  return ILTypeRef$$$Create$$113F1D6(new ILScopeRef(0, "Local"), ILTypeRef$$get_Enclosing(x$$397), ILTypeRef$$get_Name(x$$397));
}

function unscopeILTypeSpec(tspec$$73) {
  const tref$$30 = ILTypeSpec$$get_TypeRef(tspec$$73);
  const tinst$$5 = ILTypeSpec$$get_GenericArgs(tspec$$73);
  const tref$$31 = unscopeILTypeRef(tref$$30);
  return ILTypeSpec$$$Create$$7469E1FB(tref$$31, unscopeILTypes(tinst$$5));
}

function unscopeILType(ty$$72) {
  switch (ty$$72.tag) {
    case 4:
      {
        const t$$22 = ty$$72.fields[0];
        return new ILType(4, "Ptr", unscopeILType(t$$22));
      }

    case 6:
      {
        const t$$23 = ty$$72.fields[0];
        return new ILType(6, "FunctionPointer", unscopeILCallSig(t$$23));
      }

    case 5:
      {
        const t$$24 = ty$$72.fields[0];
        return new ILType(5, "Byref", unscopeILType(t$$24));
      }

    case 3:
      {
        const cr$$2 = ty$$72.fields[0];
        return mkILBoxedType(unscopeILTypeSpec(cr$$2));
      }

    case 1:
      {
        const ty$$73 = ty$$72.fields[1];
        const s$$65 = ty$$72.fields[0];
        return new ILType(1, "Array", s$$65, unscopeILType(ty$$73));
      }

    case 2:
      {
        const cr$$3 = ty$$72.fields[0];
        return new ILType(2, "Value", unscopeILTypeSpec(cr$$3));
      }

    case 8:
      {
        const ty$$74 = ty$$72.fields[2];
        const tref$$32 = ty$$72.fields[1];
        const b$$16 = ty$$72.fields[0];
        return new ILType(8, "Modified", b$$16, unscopeILTypeRef(tref$$32), unscopeILType(ty$$74));
      }

    default:
      {
        const x$$398 = ty$$72;
        return x$$398;
      }
  }
}

function unscopeILTypes(i$$29) {
  if (i$$29.tail == null) {
    return i$$29;
  } else {
    return (0, _List.map)(unscopeILType, i$$29);
  }
}

function unscopeILCallSig(csig$$3) {
  return mkILCallSig(csig$$3.CallingConv, unscopeILTypes(csig$$3.ArgTypes), unscopeILType(csig$$3.ReturnType));
}

function resolveILMethodRefWithRescope(r$$6, td$$7, mref$$6) {
  const args$$24 = ILMethodRef$$get_ArgTypes(mref$$6);
  const nargs = (0, _List.length)(args$$24) | 0;
  const nm$$72 = ILMethodRef$$get_Name(mref$$6);
  const possibles = ILMethodDefs$$FindByNameAndArity$$Z18115A39(ILTypeDef$$get_Methods(td$$7), nm$$72, nargs);

  if (possibles.tail == null) {
    throw new Error("no method named " + nm$$72 + " found in type " + ILTypeDef$$get_Name(td$$7));
  }

  const argTypes = (0, _List.map)(r$$6, ILMethodRef$$get_ArgTypes(mref$$6));
  const retType = r$$6(ILMethodRef$$get_ReturnType(mref$$6));
  const matchValue$$38 = (0, _List.filter)(function predicate$$2(md$$9) {
    if ((0, _Util.equals)(ILMethodRef$$get_CallingConv(mref$$6), ILMethodDef$$get_CallingConv(md$$9)) ? (0, _illib.List$$$lengthsEqAndForall2)(function p$$4(p1, p2) {
      return (0, _Util.equals)(r$$6(p1.Type), p2);
    }, ILMethodDef$$get_Parameters(md$$9), argTypes) : false) {
      return (0, _Util.equals)(r$$6(ILMethodDef$$get_Return(md$$9).Type), retType);
    } else {
      return false;
    }
  }, possibles);

  if (matchValue$$38.tail != null) {
    if (matchValue$$38.tail.tail == null) {
      return matchValue$$38.head;
    } else {
      throw new Error("multiple methods named " + nm$$72 + " appear with identical argument types in type " + ILTypeDef$$get_Name(td$$7));
    }
  } else {
    throw new Error("no method named " + nm$$72 + " with appropriate argument types found in type " + ILTypeDef$$get_Name(td$$7));
  }
}

function resolveILMethodRef(td$$8, mref$$7) {
  return resolveILMethodRefWithRescope(function (x$$399) {
    return x$$399;
  }, td$$8, mref$$7);
}

function mkRefToILModule(m$$10) {
  return ILModuleRef$$$Create$$10F6F906(m$$10.Name, true, null);
}

function ungenericizeTypeName(n$$54) {
  var m$$11, res$$4;
  const sym = "`";

  if ((0, _illib.String$$$contains)(n$$54, sym) ? (m$$11 = (0, _illib.String$$$rindex)(n$$54, sym) | 0, (res$$4 = new _Types.FSharpRef(m$$11 < n$$54.length - 1), ((() => {
    for (let i$$30 = m$$11 + 1; i$$30 <= n$$54.length - 1; i$$30++) {
      res$$4.contents = (res$$4.contents ? n$$54[i$$30] >= "0" : false) ? n$$54[i$$30] <= "9" : false;
    }
  })(), res$$4.contents))) : false) {
    const pos = (0, _illib.String$$$rindex)(n$$54, sym) | 0;
    return (0, _illib.String$$$sub)(n$$54, 0, pos);
  } else {
    return n$$54;
  }
}

const ILEventRef = (0, _Types.declare)(function ILEventRef(arg1, arg2) {
  this.erA = arg1;
  this.erB = arg2;
}, _Types.Record);
exports.ILEventRef = ILEventRef;

function ILEventRef$$$Create$$33BE2BB5(a$$7, b$$17) {
  return new ILEventRef(a$$7, b$$17);
}

function ILEventRef$$get_DeclaringTypeRef(x$$400) {
  return x$$400.erA;
}

function ILEventRef$$get_Name(x$$401) {
  return x$$401.erB;
}

const ILPropertyRef = (0, _Types.declare)(function ILPropertyRef(arg1, arg2) {
  this.prA = arg1;
  this.prB = arg2;
}, _Types.Record);
exports.ILPropertyRef = ILPropertyRef;

function ILPropertyRef$$$Create$$33BE2BB5(a$$8, b$$18) {
  return new ILPropertyRef(a$$8, b$$18);
}

function ILPropertyRef$$get_DeclaringTypeRef(x$$402) {
  return x$$402.prA;
}

function ILPropertyRef$$get_Name(x$$403) {
  return x$$403.prB;
}