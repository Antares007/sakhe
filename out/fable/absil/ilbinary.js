"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableName$$$$002Ector$$Z524259A4 = TableName$$$$002Ector$$Z524259A4;
exports.TableName$$get_Index = TableName$$get_Index;
exports.TableName$$$FromIndex$$Z524259A4 = TableName$$$FromIndex$$Z524259A4;
exports.TypeDefOrRefTag$$$$002Ector$$Z524259A4 = TypeDefOrRefTag$$$$002Ector$$Z524259A4;
exports.TypeDefOrRefTag$$get_Tag = TypeDefOrRefTag$$get_Tag;
exports.mkTypeDefOrRefOrSpecTag = mkTypeDefOrRefOrSpecTag;
exports.HasConstantTag$$$$002Ector$$Z524259A4 = HasConstantTag$$$$002Ector$$Z524259A4;
exports.HasConstantTag$$get_Tag = HasConstantTag$$get_Tag;
exports.mkHasConstantTag = mkHasConstantTag;
exports.HasCustomAttributeTag$$$$002Ector$$Z524259A4 = HasCustomAttributeTag$$$$002Ector$$Z524259A4;
exports.HasCustomAttributeTag$$get_Tag = HasCustomAttributeTag$$get_Tag;
exports.mkHasCustomAttributeTag = mkHasCustomAttributeTag;
exports.HasFieldMarshalTag$$$$002Ector$$Z524259A4 = HasFieldMarshalTag$$$$002Ector$$Z524259A4;
exports.HasFieldMarshalTag$$get_Tag = HasFieldMarshalTag$$get_Tag;
exports.mkHasFieldMarshalTag = mkHasFieldMarshalTag;
exports.HasDeclSecurityTag$$$$002Ector$$Z524259A4 = HasDeclSecurityTag$$$$002Ector$$Z524259A4;
exports.HasDeclSecurityTag$$get_Tag = HasDeclSecurityTag$$get_Tag;
exports.mkHasDeclSecurityTag = mkHasDeclSecurityTag;
exports.MemberRefParentTag$$$$002Ector$$Z524259A4 = MemberRefParentTag$$$$002Ector$$Z524259A4;
exports.MemberRefParentTag$$get_Tag = MemberRefParentTag$$get_Tag;
exports.mkMemberRefParentTag = mkMemberRefParentTag;
exports.HasSemanticsTag$$$$002Ector$$Z524259A4 = HasSemanticsTag$$$$002Ector$$Z524259A4;
exports.HasSemanticsTag$$get_Tag = HasSemanticsTag$$get_Tag;
exports.mkHasSemanticsTag = mkHasSemanticsTag;
exports.MethodDefOrRefTag$$$$002Ector$$Z524259A4 = MethodDefOrRefTag$$$$002Ector$$Z524259A4;
exports.MethodDefOrRefTag$$get_Tag = MethodDefOrRefTag$$get_Tag;
exports.mkMethodDefOrRefTag = mkMethodDefOrRefTag;
exports.MemberForwardedTag$$$$002Ector$$Z524259A4 = MemberForwardedTag$$$$002Ector$$Z524259A4;
exports.MemberForwardedTag$$get_Tag = MemberForwardedTag$$get_Tag;
exports.mkMemberForwardedTag = mkMemberForwardedTag;
exports.ImplementationTag$$$$002Ector$$Z524259A4 = ImplementationTag$$$$002Ector$$Z524259A4;
exports.ImplementationTag$$get_Tag = ImplementationTag$$get_Tag;
exports.mkImplementationTag = mkImplementationTag;
exports.CustomAttributeTypeTag$$$$002Ector$$Z524259A4 = CustomAttributeTypeTag$$$$002Ector$$Z524259A4;
exports.CustomAttributeTypeTag$$get_Tag = CustomAttributeTypeTag$$get_Tag;
exports.mkILCustomAttributeTypeTag = mkILCustomAttributeTypeTag;
exports.ResolutionScopeTag$$$$002Ector$$Z524259A4 = ResolutionScopeTag$$$$002Ector$$Z524259A4;
exports.ResolutionScopeTag$$get_Tag = ResolutionScopeTag$$get_Tag;
exports.mkResolutionScopeTag = mkResolutionScopeTag;
exports.TypeOrMethodDefTag$$$$002Ector$$Z524259A4 = TypeOrMethodDefTag$$$$002Ector$$Z524259A4;
exports.TypeOrMethodDefTag$$get_Tag = TypeOrMethodDefTag$$get_Tag;
exports.mkTypeOrMethodDefTag = mkTypeOrMethodDefTag;
exports.mk_ldc = mk_ldc;
exports.isNoArgInstr = isNoArgInstr;
exports.mf_FieldDef = exports.MemberForwardedTag = exports.mdor_MethodSpec = exports.mdor_MemberRef = exports.mdor_MethodDef = exports.MethodDefOrRefTag = exports.hs_Property = exports.hs_Event = exports.HasSemanticsTag = exports.mrp_TypeSpec = exports.mrp_MethodDef = exports.mrp_ModuleRef = exports.mrp_TypeRef = exports.MemberRefParentTag = exports.hds_Assembly = exports.hds_MethodDef = exports.hds_TypeDef = exports.HasDeclSecurityTag = exports.hfm_ParamDef = exports.hfm_FieldDef = exports.HasFieldMarshalTag = exports.hca_MethodSpec = exports.hca_GenericParamConstraint = exports.hca_GenericParam = exports.hca_ManifestResource = exports.hca_ExportedType = exports.hca_File = exports.hca_AssemblyRef = exports.hca_Assembly = exports.hca_TypeSpec = exports.hca_ModuleRef = exports.hca_StandAloneSig = exports.hca_Event = exports.hca_Property = exports.hca_Permission = exports.hca_Module = exports.hca_MemberRef = exports.hca_InterfaceImpl = exports.hca_ParamDef = exports.hca_TypeDef = exports.hca_TypeRef = exports.hca_FieldDef = exports.hca_MethodDef = exports.HasCustomAttributeTag = exports.hc_Property = exports.hc_ParamDef = exports.hc_FieldDef = exports.HasConstantTag = exports.tdor_TypeSpec = exports.tdor_TypeRef = exports.tdor_TypeDef = exports.TypeDefOrRefTag = exports.sortedTableInfo = exports.TableNames$$$UserStrings = exports.TableNames$$$GenericParamConstraint = exports.TableNames$$$MethodSpec = exports.TableNames$$$GenericParam = exports.TableNames$$$Nested = exports.TableNames$$$ManifestResource = exports.TableNames$$$ExportedType = exports.TableNames$$$File = exports.TableNames$$$AssemblyRefOS = exports.TableNames$$$AssemblyRefProcessor = exports.TableNames$$$AssemblyRef = exports.TableNames$$$AssemblyOS = exports.TableNames$$$AssemblyProcessor = exports.TableNames$$$Assembly = exports.TableNames$$$ENCMap = exports.TableNames$$$ENCLog = exports.TableNames$$$FieldRVA = exports.TableNames$$$ImplMap = exports.TableNames$$$TypeSpec = exports.TableNames$$$ModuleRef = exports.TableNames$$$MethodImpl = exports.TableNames$$$MethodSemantics = exports.TableNames$$$Property = exports.TableNames$$$PropertyPtr = exports.TableNames$$$PropertyMap = exports.TableNames$$$Event = exports.TableNames$$$EventPtr = exports.TableNames$$$EventMap = exports.TableNames$$$StandAloneSig = exports.TableNames$$$FieldLayout = exports.TableNames$$$ClassLayout = exports.TableNames$$$Permission = exports.TableNames$$$FieldMarshal = exports.TableNames$$$CustomAttribute = exports.TableNames$$$Constant = exports.TableNames$$$MemberRef = exports.TableNames$$$InterfaceImpl = exports.TableNames$$$Param = exports.TableNames$$$ParamPtr = exports.TableNames$$$Method = exports.TableNames$$$MethodPtr = exports.TableNames$$$Field = exports.TableNames$$$FieldPtr = exports.TableNames$$$TypeDef = exports.TableNames$$$TypeRef = exports.TableNames$$$Module = exports.TableName = void 0;
exports.i_bne_un_s = exports.i_blt_s = exports.i_ble_s = exports.i_bgt_s = exports.i_bge_s = exports.i_beq_s = exports.i_brtrue_s = exports.i_brfalse_s = exports.i_br_s = exports.i_ret = exports.i_calli = exports.i_call = exports.i_jmp = exports.i_pop = exports.i_dup = exports.i_ldc_r8 = exports.i_ldc_r4 = exports.i_ldc_i8 = exports.i_ldc_i4 = exports.i_ldc_i4_s = exports.i_ldc_i4_8 = exports.i_ldc_i4_7 = exports.i_ldc_i4_6 = exports.i_ldc_i4_5 = exports.i_ldc_i4_4 = exports.i_ldc_i4_3 = exports.i_ldc_i4_2 = exports.i_ldc_i4_1 = exports.i_ldc_i4_0 = exports.i_ldc_i4_m1 = exports.i_ldnull = exports.i_stloc_s = exports.i_ldloca_s = exports.i_ldloc_s = exports.i_starg_s = exports.i_ldarga_s = exports.i_ldarg_s = exports.i_stloc_3 = exports.i_stloc_2 = exports.i_stloc_1 = exports.i_stloc_0 = exports.i_ldloc_3 = exports.i_ldloc_2 = exports.i_ldloc_1 = exports.i_ldloc_0 = exports.i_ldarg_3 = exports.i_ldarg_2 = exports.i_ldarg_1 = exports.i_ldarg_0 = exports.i_break = exports.i_nop = exports.et_PINNED = exports.et_SENTINEL = exports.et_CMOD_OPT = exports.et_CMOD_REQD = exports.et_MVAR = exports.et_SZARRAY = exports.et_OBJECT = exports.et_FNPTR = exports.et_U = exports.et_I = exports.et_TYPEDBYREF = exports.et_WITH = exports.et_ARRAY = exports.et_VAR = exports.et_CLASS = exports.et_VALUETYPE = exports.et_BYREF = exports.et_PTR = exports.et_STRING = exports.et_R8 = exports.et_R4 = exports.et_U8 = exports.et_I8 = exports.et_U4 = exports.et_I4 = exports.et_U2 = exports.et_I2 = exports.et_U1 = exports.et_I1 = exports.et_CHAR = exports.et_BOOLEAN = exports.et_VOID = exports.et_END = exports.tomd_MethodDef = exports.tomd_TypeDef = exports.TypeOrMethodDefTag = exports.rs_TypeRef = exports.rs_AssemblyRef = exports.rs_ModuleRef = exports.rs_Module = exports.ResolutionScopeTag = exports.cat_MemberRef = exports.cat_MethodDef = exports.CustomAttributeTypeTag = exports.i_ExportedType = exports.i_AssemblyRef = exports.i_File = exports.ImplementationTag = exports.mf_MethodDef = void 0;
exports.i_ldelem_r8 = exports.i_ldelem_r4 = exports.i_ldelem_i = exports.i_ldelem_i8 = exports.i_ldelem_u4 = exports.i_ldelem_i4 = exports.i_ldelem_u2 = exports.i_ldelem_i2 = exports.i_ldelem_u1 = exports.i_ldelem_i1 = exports.i_ldelema = exports.i_ldlen = exports.i_newarr = exports.i_box = exports.i_conv_ovf_u_un = exports.i_conv_ovf_i_un = exports.i_conv_ovf_u8_un = exports.i_conv_ovf_u4_un = exports.i_conv_ovf_u2_un = exports.i_conv_ovf_u1_un = exports.i_conv_ovf_i8_un = exports.i_conv_ovf_i4_un = exports.i_conv_ovf_i2_un = exports.i_conv_ovf_i1_un = exports.i_stobj = exports.i_stsfld = exports.i_ldsflda = exports.i_ldsfld = exports.i_stfld = exports.i_ldflda = exports.i_ldfld = exports.i_throw = exports.i_unbox = exports.i_conv_r_un = exports.i_isinst = exports.i_castclass = exports.i_newobj = exports.i_ldstr = exports.i_ldobj = exports.i_cpobj = exports.i_callvirt = exports.i_conv_u8 = exports.i_conv_u4 = exports.i_conv_r8 = exports.i_conv_r4 = exports.i_conv_i8 = exports.i_conv_i4 = exports.i_conv_i2 = exports.i_conv_i1 = exports.i_not = exports.i_neg = exports.i_shr_un = exports.i_shr = exports.i_shl = exports.i_xor = exports.i_or = exports.i_and = exports.i_rem_un = exports.i_rem = exports.i_div_un = exports.i_div = exports.i_mul = exports.i_sub = exports.i_add = exports.i_stind_r8 = exports.i_stind_r4 = exports.i_stind_i8 = exports.i_stind_i4 = exports.i_stind_i2 = exports.i_stind_i1 = exports.i_stind_ref = exports.i_ldind_ref = exports.i_ldind_r8 = exports.i_ldind_r4 = exports.i_ldind_i = exports.i_ldind_i8 = exports.i_ldind_u4 = exports.i_ldind_i4 = exports.i_ldind_u2 = exports.i_ldind_i2 = exports.i_ldind_u1 = exports.i_ldind_i1 = exports.i_switch = exports.i_blt_un = exports.i_ble_un = exports.i_bgt_un = exports.i_bge_un = exports.i_bne_un = exports.i_blt = exports.i_ble = exports.i_bgt = exports.i_bge = exports.i_beq = exports.i_brtrue = exports.i_brfalse = exports.i_br = exports.i_blt_un_s = exports.i_ble_un_s = exports.i_bgt_un_s = exports.i_bge_un_s = void 0;
exports.nt_FIXEDARRAY = exports.nt_SAFEARRAY = exports.nt_INTF = exports.nt_STRUCT = exports.nt_IDISPATCH = exports.nt_IUNKNOWN = exports.nt_OBJECTREF = exports.nt_FIXEDSYSSTRING = exports.nt_LPTSTR = exports.nt_LPWSTR = exports.nt_LPSTR = exports.nt_BSTR = exports.nt_DATE = exports.nt_DECIMAL = exports.nt_PTR = exports.nt_CURRENCY = exports.nt_VARIANT = exports.nt_SYSCHAR = exports.nt_R8 = exports.nt_R4 = exports.nt_U8 = exports.nt_I8 = exports.nt_U4 = exports.nt_I4 = exports.nt_U2 = exports.nt_I2 = exports.nt_U1 = exports.nt_I1 = exports.nt_BOOLEAN = exports.nt_VOID = exports.ILCmpInstrRevMap = exports.ILCmpInstrMap = exports.noArgInstrs = exports.i_unbox_any = exports.i_stelem_any = exports.i_ldelem_any = exports.i_refanytype = exports.i_sizeof = exports.i_rethrow = exports.i_initblk = exports.i_cpblk = exports.i_initobj = exports.i_tail = exports.i_readonly = exports.i_constrained = exports.i_volatile = exports.i_unaligned = exports.i_endfilter = exports.i_localloc = exports.i_stloc = exports.i_ldloca = exports.i_ldloc = exports.i_starg = exports.i_ldarga = exports.i_ldarg = exports.i_ldvirtftn = exports.i_ldftn = exports.i_clt_un = exports.i_clt = exports.i_cgt_un = exports.i_cgt = exports.i_ceq = exports.i_arglist = exports.i_conv_u = exports.i_stind_i = exports.i_leave_s = exports.i_leave = exports.i_endfinally = exports.i_sub_ovf_un = exports.i_sub_ovf = exports.i_mul_ovf_un = exports.i_mul_ovf = exports.i_add_ovf_un = exports.i_add_ovf = exports.i_conv_ovf_u = exports.i_conv_ovf_i = exports.i_conv_i = exports.i_conv_u1 = exports.i_conv_u2 = exports.i_ldtoken = exports.i_mkrefany = exports.i_ckfinite = exports.i_refanyval = exports.i_conv_ovf_u8 = exports.i_conv_ovf_i8 = exports.i_conv_ovf_u4 = exports.i_conv_ovf_i4 = exports.i_conv_ovf_u2 = exports.i_conv_ovf_i2 = exports.i_conv_ovf_u1 = exports.i_conv_ovf_i1 = exports.i_stelem_ref = exports.i_stelem_r8 = exports.i_stelem_r4 = exports.i_stelem_i8 = exports.i_stelem_i4 = exports.i_stelem_i2 = exports.i_stelem_i1 = exports.i_stelem_i = exports.i_ldelem_ref = void 0;
exports.e_IMAGE_CEE_CS_CALLCONV_INSTANCE_EXPLICIT = exports.e_IMAGE_CEE_CS_CALLCONV_INSTANCE = exports.e_IMAGE_CEE_CS_CALLCONV_GENERIC = exports.e_IMAGE_CEE_CS_CALLCONV_GENERICINST = exports.e_IMAGE_CEE_CS_CALLCONV_PROPERTY = exports.e_IMAGE_CEE_CS_CALLCONV_LOCAL_SIG = exports.e_IMAGE_CEE_CS_CALLCONV_FIELD = exports.e_IMAGE_CEE_CS_CALLCONV_VARARG = exports.e_IMAGE_CEE_CS_CALLCONV_CDECL = exports.e_IMAGE_CEE_CS_CALLCONV_THISCALL = exports.e_IMAGE_CEE_CS_CALLCONV_STDCALL = exports.e_IMAGE_CEE_CS_CALLCONV_FASTCALL = exports.e_COR_ILEXCEPTION_CLAUSE_FAULT = exports.e_COR_ILEXCEPTION_CLAUSE_FINALLY = exports.e_COR_ILEXCEPTION_CLAUSE_FILTER = exports.e_COR_ILEXCEPTION_CLAUSE_EXCEPTION = exports.e_CorILMethod_Sect_MoreSects = exports.e_CorILMethod_Sect_FatFormat = exports.e_CorILMethod_Sect_EHTable = exports.e_CorILMethod_InitLocals = exports.e_CorILMethod_MoreSects = exports.e_CorILMethod_FormatMask = exports.e_CorILMethod_FatFormat = exports.e_CorILMethod_TinyFormat = exports.ILSecurityActionRevMap = exports.ILSecurityActionMap = exports.ILVariantTypeRevMap = exports.ILVariantTypeMap = exports.ILNativeTypeRevMap = exports.ILNativeTypeMap = exports.vt_BYREF = exports.vt_ARRAY = exports.vt_VECTOR = exports.vt_CLSID = exports.vt_CF = exports.vt_BLOB_OBJECT = exports.vt_STORED_OBJECT = exports.vt_STREAMED_OBJECT = exports.vt_STORAGE = exports.vt_STREAM = exports.vt_BLOB = exports.vt_FILETIME = exports.vt_RECORD = exports.vt_LPWSTR = exports.vt_LPSTR = exports.vt_USERDEFINED = exports.vt_CARRAY = exports.vt_SAFEARRAY = exports.vt_PTR = exports.vt_HRESULT = exports.vt_VOID = exports.vt_UINT = exports.vt_INT = exports.vt_UI8 = exports.vt_I8 = exports.vt_UI4 = exports.vt_UI2 = exports.vt_UI1 = exports.vt_I1 = exports.vt_DECIMAL = exports.vt_UNKNOWN = exports.vt_VARIANT = exports.vt_BOOL = exports.vt_ERROR = exports.vt_DISPATCH = exports.vt_BSTR = exports.vt_DATE = exports.vt_CY = exports.vt_R8 = exports.vt_R4 = exports.vt_I4 = exports.vt_I2 = exports.vt_NULL = exports.vt_EMPTY = exports.nt_MAX = exports.nt_LPUTF8STR = exports.nt_ERROR = exports.nt_CUSTOMMARSHALER = exports.nt_LPSTRUCT = exports.nt_ARRAY = exports.nt_ASANY = exports.nt_FUNC = exports.nt_VARIANTBOOL = exports.nt_TBSTR = exports.nt_ANSIBSTR = exports.nt_BYVALSTR = exports.nt_NESTEDSTRUCT = exports.nt_UINT = exports.nt_INT = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _il = require("./il");

var _Util = require("../fable-core.2.0.3/Util");

var _FSharp = require("../fable-core.2.0.3/FSharp.Collections");

var _Map = require("../fable-core.2.0.3/Map");

var _illib = require("./illib");

var _List = require("../fable-core.2.0.3/List");

const TableName = (0, _Types.declare)(function TableName(idx) {
  const $this$$1 = this;
  $this$$1.idx = idx;
}, _Types.Record);
exports.TableName = TableName;

function TableName$$$$002Ector$$Z524259A4(idx) {
  return this != null ? TableName.call(this, idx) : new TableName(idx);
}

function TableName$$get_Index(x) {
  return x.idx;
}

function TableName$$$FromIndex$$Z524259A4(n) {
  return TableName$$$$002Ector$$Z524259A4(n);
}

const TableNames$$$Module = TableName$$$$002Ector$$Z524259A4(0);
exports.TableNames$$$Module = TableNames$$$Module;
const TableNames$$$TypeRef = TableName$$$$002Ector$$Z524259A4(1);
exports.TableNames$$$TypeRef = TableNames$$$TypeRef;
const TableNames$$$TypeDef = TableName$$$$002Ector$$Z524259A4(2);
exports.TableNames$$$TypeDef = TableNames$$$TypeDef;
const TableNames$$$FieldPtr = TableName$$$$002Ector$$Z524259A4(3);
exports.TableNames$$$FieldPtr = TableNames$$$FieldPtr;
const TableNames$$$Field = TableName$$$$002Ector$$Z524259A4(4);
exports.TableNames$$$Field = TableNames$$$Field;
const TableNames$$$MethodPtr = TableName$$$$002Ector$$Z524259A4(5);
exports.TableNames$$$MethodPtr = TableNames$$$MethodPtr;
const TableNames$$$Method = TableName$$$$002Ector$$Z524259A4(6);
exports.TableNames$$$Method = TableNames$$$Method;
const TableNames$$$ParamPtr = TableName$$$$002Ector$$Z524259A4(7);
exports.TableNames$$$ParamPtr = TableNames$$$ParamPtr;
const TableNames$$$Param = TableName$$$$002Ector$$Z524259A4(8);
exports.TableNames$$$Param = TableNames$$$Param;
const TableNames$$$InterfaceImpl = TableName$$$$002Ector$$Z524259A4(9);
exports.TableNames$$$InterfaceImpl = TableNames$$$InterfaceImpl;
const TableNames$$$MemberRef = TableName$$$$002Ector$$Z524259A4(10);
exports.TableNames$$$MemberRef = TableNames$$$MemberRef;
const TableNames$$$Constant = TableName$$$$002Ector$$Z524259A4(11);
exports.TableNames$$$Constant = TableNames$$$Constant;
const TableNames$$$CustomAttribute = TableName$$$$002Ector$$Z524259A4(12);
exports.TableNames$$$CustomAttribute = TableNames$$$CustomAttribute;
const TableNames$$$FieldMarshal = TableName$$$$002Ector$$Z524259A4(13);
exports.TableNames$$$FieldMarshal = TableNames$$$FieldMarshal;
const TableNames$$$Permission = TableName$$$$002Ector$$Z524259A4(14);
exports.TableNames$$$Permission = TableNames$$$Permission;
const TableNames$$$ClassLayout = TableName$$$$002Ector$$Z524259A4(15);
exports.TableNames$$$ClassLayout = TableNames$$$ClassLayout;
const TableNames$$$FieldLayout = TableName$$$$002Ector$$Z524259A4(16);
exports.TableNames$$$FieldLayout = TableNames$$$FieldLayout;
const TableNames$$$StandAloneSig = TableName$$$$002Ector$$Z524259A4(17);
exports.TableNames$$$StandAloneSig = TableNames$$$StandAloneSig;
const TableNames$$$EventMap = TableName$$$$002Ector$$Z524259A4(18);
exports.TableNames$$$EventMap = TableNames$$$EventMap;
const TableNames$$$EventPtr = TableName$$$$002Ector$$Z524259A4(19);
exports.TableNames$$$EventPtr = TableNames$$$EventPtr;
const TableNames$$$Event = TableName$$$$002Ector$$Z524259A4(20);
exports.TableNames$$$Event = TableNames$$$Event;
const TableNames$$$PropertyMap = TableName$$$$002Ector$$Z524259A4(21);
exports.TableNames$$$PropertyMap = TableNames$$$PropertyMap;
const TableNames$$$PropertyPtr = TableName$$$$002Ector$$Z524259A4(22);
exports.TableNames$$$PropertyPtr = TableNames$$$PropertyPtr;
const TableNames$$$Property = TableName$$$$002Ector$$Z524259A4(23);
exports.TableNames$$$Property = TableNames$$$Property;
const TableNames$$$MethodSemantics = TableName$$$$002Ector$$Z524259A4(24);
exports.TableNames$$$MethodSemantics = TableNames$$$MethodSemantics;
const TableNames$$$MethodImpl = TableName$$$$002Ector$$Z524259A4(25);
exports.TableNames$$$MethodImpl = TableNames$$$MethodImpl;
const TableNames$$$ModuleRef = TableName$$$$002Ector$$Z524259A4(26);
exports.TableNames$$$ModuleRef = TableNames$$$ModuleRef;
const TableNames$$$TypeSpec = TableName$$$$002Ector$$Z524259A4(27);
exports.TableNames$$$TypeSpec = TableNames$$$TypeSpec;
const TableNames$$$ImplMap = TableName$$$$002Ector$$Z524259A4(28);
exports.TableNames$$$ImplMap = TableNames$$$ImplMap;
const TableNames$$$FieldRVA = TableName$$$$002Ector$$Z524259A4(29);
exports.TableNames$$$FieldRVA = TableNames$$$FieldRVA;
const TableNames$$$ENCLog = TableName$$$$002Ector$$Z524259A4(30);
exports.TableNames$$$ENCLog = TableNames$$$ENCLog;
const TableNames$$$ENCMap = TableName$$$$002Ector$$Z524259A4(31);
exports.TableNames$$$ENCMap = TableNames$$$ENCMap;
const TableNames$$$Assembly = TableName$$$$002Ector$$Z524259A4(32);
exports.TableNames$$$Assembly = TableNames$$$Assembly;
const TableNames$$$AssemblyProcessor = TableName$$$$002Ector$$Z524259A4(33);
exports.TableNames$$$AssemblyProcessor = TableNames$$$AssemblyProcessor;
const TableNames$$$AssemblyOS = TableName$$$$002Ector$$Z524259A4(34);
exports.TableNames$$$AssemblyOS = TableNames$$$AssemblyOS;
const TableNames$$$AssemblyRef = TableName$$$$002Ector$$Z524259A4(35);
exports.TableNames$$$AssemblyRef = TableNames$$$AssemblyRef;
const TableNames$$$AssemblyRefProcessor = TableName$$$$002Ector$$Z524259A4(36);
exports.TableNames$$$AssemblyRefProcessor = TableNames$$$AssemblyRefProcessor;
const TableNames$$$AssemblyRefOS = TableName$$$$002Ector$$Z524259A4(37);
exports.TableNames$$$AssemblyRefOS = TableNames$$$AssemblyRefOS;
const TableNames$$$File = TableName$$$$002Ector$$Z524259A4(38);
exports.TableNames$$$File = TableNames$$$File;
const TableNames$$$ExportedType = TableName$$$$002Ector$$Z524259A4(39);
exports.TableNames$$$ExportedType = TableNames$$$ExportedType;
const TableNames$$$ManifestResource = TableName$$$$002Ector$$Z524259A4(40);
exports.TableNames$$$ManifestResource = TableNames$$$ManifestResource;
const TableNames$$$Nested = TableName$$$$002Ector$$Z524259A4(41);
exports.TableNames$$$Nested = TableNames$$$Nested;
const TableNames$$$GenericParam = TableName$$$$002Ector$$Z524259A4(42);
exports.TableNames$$$GenericParam = TableNames$$$GenericParam;
const TableNames$$$MethodSpec = TableName$$$$002Ector$$Z524259A4(43);
exports.TableNames$$$MethodSpec = TableNames$$$MethodSpec;
const TableNames$$$GenericParamConstraint = TableName$$$$002Ector$$Z524259A4(44);
exports.TableNames$$$GenericParamConstraint = TableNames$$$GenericParamConstraint;
const TableNames$$$UserStrings = TableName$$$$002Ector$$Z524259A4(112);
exports.TableNames$$$UserStrings = TableNames$$$UserStrings;
const sortedTableInfo = (0, _Types.L)([TableNames$$$InterfaceImpl, 0], (0, _Types.L)([TableNames$$$Constant, 1], (0, _Types.L)([TableNames$$$CustomAttribute, 0], (0, _Types.L)([TableNames$$$FieldMarshal, 0], (0, _Types.L)([TableNames$$$Permission, 1], (0, _Types.L)([TableNames$$$ClassLayout, 2], (0, _Types.L)([TableNames$$$FieldLayout, 1], (0, _Types.L)([TableNames$$$MethodSemantics, 2], (0, _Types.L)([TableNames$$$MethodImpl, 0], (0, _Types.L)([TableNames$$$ImplMap, 1], (0, _Types.L)([TableNames$$$FieldRVA, 1], (0, _Types.L)([TableNames$$$Nested, 0], (0, _Types.L)([TableNames$$$GenericParam, 2], (0, _Types.L)([TableNames$$$GenericParamConstraint, 0], (0, _Types.L)()))))))))))))));
exports.sortedTableInfo = sortedTableInfo;
const TypeDefOrRefTag = (0, _Types.declare)(function TypeDefOrRefTag(tag) {
  const $this$$2 = this;
  $this$$2.tag = tag;
}, _Types.Record);
exports.TypeDefOrRefTag = TypeDefOrRefTag;

function TypeDefOrRefTag$$$$002Ector$$Z524259A4(tag) {
  return this != null ? TypeDefOrRefTag.call(this, tag) : new TypeDefOrRefTag(tag);
}

function TypeDefOrRefTag$$get_Tag(x$$1) {
  return x$$1.tag;
}

const tdor_TypeDef = TypeDefOrRefTag$$$$002Ector$$Z524259A4(0);
exports.tdor_TypeDef = tdor_TypeDef;
const tdor_TypeRef = TypeDefOrRefTag$$$$002Ector$$Z524259A4(1);
exports.tdor_TypeRef = tdor_TypeRef;
const tdor_TypeSpec = TypeDefOrRefTag$$$$002Ector$$Z524259A4(2);
exports.tdor_TypeSpec = tdor_TypeSpec;

function mkTypeDefOrRefOrSpecTag(x$$2) {
  switch (x$$2) {
    case 0:
      {
        return tdor_TypeDef;
      }

    case 1:
      {
        return tdor_TypeRef;
      }

    case 2:
      {
        return tdor_TypeSpec;
      }

    default:
      {
        throw new Error("mkTypeDefOrRefOrSpecTag" + "\\nParameter name: " + "x");
      }
  }
}

const HasConstantTag = (0, _Types.declare)(function HasConstantTag(tag$$1) {
  const $this$$3 = this;
  $this$$3.tag = tag$$1;
}, _Types.Record);
exports.HasConstantTag = HasConstantTag;

function HasConstantTag$$$$002Ector$$Z524259A4(tag$$1) {
  return this != null ? HasConstantTag.call(this, tag$$1) : new HasConstantTag(tag$$1);
}

function HasConstantTag$$get_Tag(x$$3) {
  return x$$3.tag;
}

const hc_FieldDef = HasConstantTag$$$$002Ector$$Z524259A4(0);
exports.hc_FieldDef = hc_FieldDef;
const hc_ParamDef = HasConstantTag$$$$002Ector$$Z524259A4(1);
exports.hc_ParamDef = hc_ParamDef;
const hc_Property = HasConstantTag$$$$002Ector$$Z524259A4(2);
exports.hc_Property = hc_Property;

function mkHasConstantTag(x$$4) {
  switch (x$$4) {
    case 0:
      {
        return hc_FieldDef;
      }

    case 1:
      {
        return hc_ParamDef;
      }

    case 2:
      {
        return hc_Property;
      }

    default:
      {
        throw new Error("mkHasConstantTag" + "\\nParameter name: " + "x");
      }
  }
}

const HasCustomAttributeTag = (0, _Types.declare)(function HasCustomAttributeTag(tag$$2) {
  const $this$$4 = this;
  $this$$4.tag = tag$$2;
}, _Types.Record);
exports.HasCustomAttributeTag = HasCustomAttributeTag;

function HasCustomAttributeTag$$$$002Ector$$Z524259A4(tag$$2) {
  return this != null ? HasCustomAttributeTag.call(this, tag$$2) : new HasCustomAttributeTag(tag$$2);
}

function HasCustomAttributeTag$$get_Tag(x$$5) {
  return x$$5.tag;
}

const hca_MethodDef = HasCustomAttributeTag$$$$002Ector$$Z524259A4(0);
exports.hca_MethodDef = hca_MethodDef;
const hca_FieldDef = HasCustomAttributeTag$$$$002Ector$$Z524259A4(1);
exports.hca_FieldDef = hca_FieldDef;
const hca_TypeRef = HasCustomAttributeTag$$$$002Ector$$Z524259A4(2);
exports.hca_TypeRef = hca_TypeRef;
const hca_TypeDef = HasCustomAttributeTag$$$$002Ector$$Z524259A4(3);
exports.hca_TypeDef = hca_TypeDef;
const hca_ParamDef = HasCustomAttributeTag$$$$002Ector$$Z524259A4(4);
exports.hca_ParamDef = hca_ParamDef;
const hca_InterfaceImpl = HasCustomAttributeTag$$$$002Ector$$Z524259A4(5);
exports.hca_InterfaceImpl = hca_InterfaceImpl;
const hca_MemberRef = HasCustomAttributeTag$$$$002Ector$$Z524259A4(6);
exports.hca_MemberRef = hca_MemberRef;
const hca_Module = HasCustomAttributeTag$$$$002Ector$$Z524259A4(7);
exports.hca_Module = hca_Module;
const hca_Permission = HasCustomAttributeTag$$$$002Ector$$Z524259A4(8);
exports.hca_Permission = hca_Permission;
const hca_Property = HasCustomAttributeTag$$$$002Ector$$Z524259A4(9);
exports.hca_Property = hca_Property;
const hca_Event = HasCustomAttributeTag$$$$002Ector$$Z524259A4(10);
exports.hca_Event = hca_Event;
const hca_StandAloneSig = HasCustomAttributeTag$$$$002Ector$$Z524259A4(11);
exports.hca_StandAloneSig = hca_StandAloneSig;
const hca_ModuleRef = HasCustomAttributeTag$$$$002Ector$$Z524259A4(12);
exports.hca_ModuleRef = hca_ModuleRef;
const hca_TypeSpec = HasCustomAttributeTag$$$$002Ector$$Z524259A4(13);
exports.hca_TypeSpec = hca_TypeSpec;
const hca_Assembly = HasCustomAttributeTag$$$$002Ector$$Z524259A4(14);
exports.hca_Assembly = hca_Assembly;
const hca_AssemblyRef = HasCustomAttributeTag$$$$002Ector$$Z524259A4(15);
exports.hca_AssemblyRef = hca_AssemblyRef;
const hca_File = HasCustomAttributeTag$$$$002Ector$$Z524259A4(16);
exports.hca_File = hca_File;
const hca_ExportedType = HasCustomAttributeTag$$$$002Ector$$Z524259A4(17);
exports.hca_ExportedType = hca_ExportedType;
const hca_ManifestResource = HasCustomAttributeTag$$$$002Ector$$Z524259A4(18);
exports.hca_ManifestResource = hca_ManifestResource;
const hca_GenericParam = HasCustomAttributeTag$$$$002Ector$$Z524259A4(19);
exports.hca_GenericParam = hca_GenericParam;
const hca_GenericParamConstraint = HasCustomAttributeTag$$$$002Ector$$Z524259A4(20);
exports.hca_GenericParamConstraint = hca_GenericParamConstraint;
const hca_MethodSpec = HasCustomAttributeTag$$$$002Ector$$Z524259A4(21);
exports.hca_MethodSpec = hca_MethodSpec;

function mkHasCustomAttributeTag(x$$6) {
  switch (x$$6) {
    case 0:
      {
        return hca_MethodDef;
      }

    case 1:
      {
        return hca_FieldDef;
      }

    case 2:
      {
        return hca_TypeRef;
      }

    case 3:
      {
        return hca_TypeDef;
      }

    case 4:
      {
        return hca_ParamDef;
      }

    case 5:
      {
        return hca_InterfaceImpl;
      }

    case 6:
      {
        return hca_MemberRef;
      }

    case 7:
      {
        return hca_Module;
      }

    case 8:
      {
        return hca_Permission;
      }

    case 9:
      {
        return hca_Property;
      }

    case 10:
      {
        return hca_Event;
      }

    case 11:
      {
        return hca_StandAloneSig;
      }

    case 12:
      {
        return hca_ModuleRef;
      }

    case 13:
      {
        return hca_TypeSpec;
      }

    case 14:
      {
        return hca_Assembly;
      }

    case 15:
      {
        return hca_AssemblyRef;
      }

    case 16:
      {
        return hca_File;
      }

    case 17:
      {
        return hca_ExportedType;
      }

    case 18:
      {
        return hca_ManifestResource;
      }

    case 19:
      {
        return hca_GenericParam;
      }

    case 20:
      {
        return hca_GenericParamConstraint;
      }

    case 21:
      {
        return hca_MethodSpec;
      }

    default:
      {
        return HasCustomAttributeTag$$$$002Ector$$Z524259A4(x$$6);
      }
  }
}

const HasFieldMarshalTag = (0, _Types.declare)(function HasFieldMarshalTag(tag$$3) {
  const $this$$5 = this;
  $this$$5.tag = tag$$3;
}, _Types.Record);
exports.HasFieldMarshalTag = HasFieldMarshalTag;

function HasFieldMarshalTag$$$$002Ector$$Z524259A4(tag$$3) {
  return this != null ? HasFieldMarshalTag.call(this, tag$$3) : new HasFieldMarshalTag(tag$$3);
}

function HasFieldMarshalTag$$get_Tag(x$$7) {
  return x$$7.tag;
}

const hfm_FieldDef = HasFieldMarshalTag$$$$002Ector$$Z524259A4(0);
exports.hfm_FieldDef = hfm_FieldDef;
const hfm_ParamDef = HasFieldMarshalTag$$$$002Ector$$Z524259A4(1);
exports.hfm_ParamDef = hfm_ParamDef;

function mkHasFieldMarshalTag(x$$8) {
  switch (x$$8) {
    case 0:
      {
        return hfm_FieldDef;
      }

    case 1:
      {
        return hfm_ParamDef;
      }

    default:
      {
        return HasFieldMarshalTag$$$$002Ector$$Z524259A4(x$$8);
      }
  }
}

const HasDeclSecurityTag = (0, _Types.declare)(function HasDeclSecurityTag(tag$$4) {
  const $this$$6 = this;
  $this$$6.tag = tag$$4;
}, _Types.Record);
exports.HasDeclSecurityTag = HasDeclSecurityTag;

function HasDeclSecurityTag$$$$002Ector$$Z524259A4(tag$$4) {
  return this != null ? HasDeclSecurityTag.call(this, tag$$4) : new HasDeclSecurityTag(tag$$4);
}

function HasDeclSecurityTag$$get_Tag(x$$9) {
  return x$$9.tag;
}

const hds_TypeDef = HasDeclSecurityTag$$$$002Ector$$Z524259A4(0);
exports.hds_TypeDef = hds_TypeDef;
const hds_MethodDef = HasDeclSecurityTag$$$$002Ector$$Z524259A4(1);
exports.hds_MethodDef = hds_MethodDef;
const hds_Assembly = HasDeclSecurityTag$$$$002Ector$$Z524259A4(2);
exports.hds_Assembly = hds_Assembly;

function mkHasDeclSecurityTag(x$$10) {
  switch (x$$10) {
    case 0:
      {
        return hds_TypeDef;
      }

    case 1:
      {
        return hds_MethodDef;
      }

    case 2:
      {
        return hds_Assembly;
      }

    default:
      {
        return HasDeclSecurityTag$$$$002Ector$$Z524259A4(x$$10);
      }
  }
}

const MemberRefParentTag = (0, _Types.declare)(function MemberRefParentTag(tag$$5) {
  const $this$$7 = this;
  $this$$7.tag = tag$$5;
}, _Types.Record);
exports.MemberRefParentTag = MemberRefParentTag;

function MemberRefParentTag$$$$002Ector$$Z524259A4(tag$$5) {
  return this != null ? MemberRefParentTag.call(this, tag$$5) : new MemberRefParentTag(tag$$5);
}

function MemberRefParentTag$$get_Tag(x$$11) {
  return x$$11.tag;
}

const mrp_TypeRef = MemberRefParentTag$$$$002Ector$$Z524259A4(1);
exports.mrp_TypeRef = mrp_TypeRef;
const mrp_ModuleRef = MemberRefParentTag$$$$002Ector$$Z524259A4(2);
exports.mrp_ModuleRef = mrp_ModuleRef;
const mrp_MethodDef = MemberRefParentTag$$$$002Ector$$Z524259A4(3);
exports.mrp_MethodDef = mrp_MethodDef;
const mrp_TypeSpec = MemberRefParentTag$$$$002Ector$$Z524259A4(4);
exports.mrp_TypeSpec = mrp_TypeSpec;

function mkMemberRefParentTag(x$$12) {
  switch (x$$12) {
    case 1:
      {
        return mrp_TypeRef;
      }

    case 2:
      {
        return mrp_ModuleRef;
      }

    case 3:
      {
        return mrp_MethodDef;
      }

    case 4:
      {
        return mrp_TypeSpec;
      }

    default:
      {
        return MemberRefParentTag$$$$002Ector$$Z524259A4(x$$12);
      }
  }
}

const HasSemanticsTag = (0, _Types.declare)(function HasSemanticsTag(tag$$6) {
  const $this$$8 = this;
  $this$$8.tag = tag$$6;
}, _Types.Record);
exports.HasSemanticsTag = HasSemanticsTag;

function HasSemanticsTag$$$$002Ector$$Z524259A4(tag$$6) {
  return this != null ? HasSemanticsTag.call(this, tag$$6) : new HasSemanticsTag(tag$$6);
}

function HasSemanticsTag$$get_Tag(x$$13) {
  return x$$13.tag;
}

const hs_Event = HasSemanticsTag$$$$002Ector$$Z524259A4(0);
exports.hs_Event = hs_Event;
const hs_Property = HasSemanticsTag$$$$002Ector$$Z524259A4(1);
exports.hs_Property = hs_Property;

function mkHasSemanticsTag(x$$14) {
  switch (x$$14) {
    case 0:
      {
        return hs_Event;
      }

    case 1:
      {
        return hs_Property;
      }

    default:
      {
        return HasSemanticsTag$$$$002Ector$$Z524259A4(x$$14);
      }
  }
}

const MethodDefOrRefTag = (0, _Types.declare)(function MethodDefOrRefTag(tag$$7) {
  const $this$$9 = this;
  $this$$9.tag = tag$$7;
}, _Types.Record);
exports.MethodDefOrRefTag = MethodDefOrRefTag;

function MethodDefOrRefTag$$$$002Ector$$Z524259A4(tag$$7) {
  return this != null ? MethodDefOrRefTag.call(this, tag$$7) : new MethodDefOrRefTag(tag$$7);
}

function MethodDefOrRefTag$$get_Tag(x$$15) {
  return x$$15.tag;
}

const mdor_MethodDef = MethodDefOrRefTag$$$$002Ector$$Z524259A4(0);
exports.mdor_MethodDef = mdor_MethodDef;
const mdor_MemberRef = MethodDefOrRefTag$$$$002Ector$$Z524259A4(1);
exports.mdor_MemberRef = mdor_MemberRef;
const mdor_MethodSpec = MethodDefOrRefTag$$$$002Ector$$Z524259A4(2);
exports.mdor_MethodSpec = mdor_MethodSpec;

function mkMethodDefOrRefTag(x$$16) {
  switch (x$$16) {
    case 0:
      {
        return mdor_MethodDef;
      }

    case 1:
      {
        return mdor_MemberRef;
      }

    case 2:
      {
        return mdor_MethodSpec;
      }

    default:
      {
        return MethodDefOrRefTag$$$$002Ector$$Z524259A4(x$$16);
      }
  }
}

const MemberForwardedTag = (0, _Types.declare)(function MemberForwardedTag(tag$$8) {
  const $this$$10 = this;
  $this$$10.tag = tag$$8;
}, _Types.Record);
exports.MemberForwardedTag = MemberForwardedTag;

function MemberForwardedTag$$$$002Ector$$Z524259A4(tag$$8) {
  return this != null ? MemberForwardedTag.call(this, tag$$8) : new MemberForwardedTag(tag$$8);
}

function MemberForwardedTag$$get_Tag(x$$17) {
  return x$$17.tag;
}

const mf_FieldDef = MemberForwardedTag$$$$002Ector$$Z524259A4(0);
exports.mf_FieldDef = mf_FieldDef;
const mf_MethodDef = MemberForwardedTag$$$$002Ector$$Z524259A4(1);
exports.mf_MethodDef = mf_MethodDef;

function mkMemberForwardedTag(x$$18) {
  switch (x$$18) {
    case 0:
      {
        return mf_FieldDef;
      }

    case 1:
      {
        return mf_MethodDef;
      }

    default:
      {
        return MemberForwardedTag$$$$002Ector$$Z524259A4(x$$18);
      }
  }
}

const ImplementationTag = (0, _Types.declare)(function ImplementationTag(tag$$9) {
  const $this$$11 = this;
  $this$$11.tag = tag$$9;
}, _Types.Record);
exports.ImplementationTag = ImplementationTag;

function ImplementationTag$$$$002Ector$$Z524259A4(tag$$9) {
  return this != null ? ImplementationTag.call(this, tag$$9) : new ImplementationTag(tag$$9);
}

function ImplementationTag$$get_Tag(x$$19) {
  return x$$19.tag;
}

const i_File = ImplementationTag$$$$002Ector$$Z524259A4(0);
exports.i_File = i_File;
const i_AssemblyRef = ImplementationTag$$$$002Ector$$Z524259A4(1);
exports.i_AssemblyRef = i_AssemblyRef;
const i_ExportedType = ImplementationTag$$$$002Ector$$Z524259A4(2);
exports.i_ExportedType = i_ExportedType;

function mkImplementationTag(x$$20) {
  switch (x$$20) {
    case 0:
      {
        return i_File;
      }

    case 1:
      {
        return i_AssemblyRef;
      }

    case 2:
      {
        return i_ExportedType;
      }

    default:
      {
        return ImplementationTag$$$$002Ector$$Z524259A4(x$$20);
      }
  }
}

const CustomAttributeTypeTag = (0, _Types.declare)(function CustomAttributeTypeTag(tag$$10) {
  const $this$$12 = this;
  $this$$12.tag = tag$$10;
}, _Types.Record);
exports.CustomAttributeTypeTag = CustomAttributeTypeTag;

function CustomAttributeTypeTag$$$$002Ector$$Z524259A4(tag$$10) {
  return this != null ? CustomAttributeTypeTag.call(this, tag$$10) : new CustomAttributeTypeTag(tag$$10);
}

function CustomAttributeTypeTag$$get_Tag(x$$21) {
  return x$$21.tag;
}

const cat_MethodDef = CustomAttributeTypeTag$$$$002Ector$$Z524259A4(2);
exports.cat_MethodDef = cat_MethodDef;
const cat_MemberRef = CustomAttributeTypeTag$$$$002Ector$$Z524259A4(3);
exports.cat_MemberRef = cat_MemberRef;

function mkILCustomAttributeTypeTag(x$$22) {
  switch (x$$22) {
    case 2:
      {
        return cat_MethodDef;
      }

    case 3:
      {
        return cat_MemberRef;
      }

    default:
      {
        return CustomAttributeTypeTag$$$$002Ector$$Z524259A4(x$$22);
      }
  }
}

const ResolutionScopeTag = (0, _Types.declare)(function ResolutionScopeTag(tag$$11) {
  const $this$$13 = this;
  $this$$13.tag = tag$$11;
}, _Types.Record);
exports.ResolutionScopeTag = ResolutionScopeTag;

function ResolutionScopeTag$$$$002Ector$$Z524259A4(tag$$11) {
  return this != null ? ResolutionScopeTag.call(this, tag$$11) : new ResolutionScopeTag(tag$$11);
}

function ResolutionScopeTag$$get_Tag(x$$23) {
  return x$$23.tag;
}

const rs_Module = ResolutionScopeTag$$$$002Ector$$Z524259A4(0);
exports.rs_Module = rs_Module;
const rs_ModuleRef = ResolutionScopeTag$$$$002Ector$$Z524259A4(1);
exports.rs_ModuleRef = rs_ModuleRef;
const rs_AssemblyRef = ResolutionScopeTag$$$$002Ector$$Z524259A4(2);
exports.rs_AssemblyRef = rs_AssemblyRef;
const rs_TypeRef = ResolutionScopeTag$$$$002Ector$$Z524259A4(3);
exports.rs_TypeRef = rs_TypeRef;

function mkResolutionScopeTag(x$$24) {
  switch (x$$24) {
    case 0:
      {
        return rs_Module;
      }

    case 1:
      {
        return rs_ModuleRef;
      }

    case 2:
      {
        return rs_AssemblyRef;
      }

    case 3:
      {
        return rs_TypeRef;
      }

    default:
      {
        return ResolutionScopeTag$$$$002Ector$$Z524259A4(x$$24);
      }
  }
}

const TypeOrMethodDefTag = (0, _Types.declare)(function TypeOrMethodDefTag(tag$$12) {
  const $this$$14 = this;
  $this$$14.tag = tag$$12;
}, _Types.Record);
exports.TypeOrMethodDefTag = TypeOrMethodDefTag;

function TypeOrMethodDefTag$$$$002Ector$$Z524259A4(tag$$12) {
  return this != null ? TypeOrMethodDefTag.call(this, tag$$12) : new TypeOrMethodDefTag(tag$$12);
}

function TypeOrMethodDefTag$$get_Tag(x$$25) {
  return x$$25.tag;
}

const tomd_TypeDef = TypeOrMethodDefTag$$$$002Ector$$Z524259A4(0);
exports.tomd_TypeDef = tomd_TypeDef;
const tomd_MethodDef = TypeOrMethodDefTag$$$$002Ector$$Z524259A4(1);
exports.tomd_MethodDef = tomd_MethodDef;

function mkTypeOrMethodDefTag(x$$26) {
  switch (x$$26) {
    case 0:
      {
        return tomd_TypeDef;
      }

    case 1:
      {
        return tomd_MethodDef;
      }

    default:
      {
        return TypeOrMethodDefTag$$$$002Ector$$Z524259A4(x$$26);
      }
  }
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
const et_SENTINEL = 65;
exports.et_SENTINEL = et_SENTINEL;
const et_PINNED = 69;
exports.et_PINNED = et_PINNED;
const i_nop = 0;
exports.i_nop = i_nop;
const i_break = 1;
exports.i_break = i_break;
const i_ldarg_0 = 2;
exports.i_ldarg_0 = i_ldarg_0;
const i_ldarg_1 = 3;
exports.i_ldarg_1 = i_ldarg_1;
const i_ldarg_2 = 4;
exports.i_ldarg_2 = i_ldarg_2;
const i_ldarg_3 = 5;
exports.i_ldarg_3 = i_ldarg_3;
const i_ldloc_0 = 6;
exports.i_ldloc_0 = i_ldloc_0;
const i_ldloc_1 = 7;
exports.i_ldloc_1 = i_ldloc_1;
const i_ldloc_2 = 8;
exports.i_ldloc_2 = i_ldloc_2;
const i_ldloc_3 = 9;
exports.i_ldloc_3 = i_ldloc_3;
const i_stloc_0 = 10;
exports.i_stloc_0 = i_stloc_0;
const i_stloc_1 = 11;
exports.i_stloc_1 = i_stloc_1;
const i_stloc_2 = 12;
exports.i_stloc_2 = i_stloc_2;
const i_stloc_3 = 13;
exports.i_stloc_3 = i_stloc_3;
const i_ldarg_s = 14;
exports.i_ldarg_s = i_ldarg_s;
const i_ldarga_s = 15;
exports.i_ldarga_s = i_ldarga_s;
const i_starg_s = 16;
exports.i_starg_s = i_starg_s;
const i_ldloc_s = 17;
exports.i_ldloc_s = i_ldloc_s;
const i_ldloca_s = 18;
exports.i_ldloca_s = i_ldloca_s;
const i_stloc_s = 19;
exports.i_stloc_s = i_stloc_s;
const i_ldnull = 20;
exports.i_ldnull = i_ldnull;
const i_ldc_i4_m1 = 21;
exports.i_ldc_i4_m1 = i_ldc_i4_m1;
const i_ldc_i4_0 = 22;
exports.i_ldc_i4_0 = i_ldc_i4_0;
const i_ldc_i4_1 = 23;
exports.i_ldc_i4_1 = i_ldc_i4_1;
const i_ldc_i4_2 = 24;
exports.i_ldc_i4_2 = i_ldc_i4_2;
const i_ldc_i4_3 = 25;
exports.i_ldc_i4_3 = i_ldc_i4_3;
const i_ldc_i4_4 = 26;
exports.i_ldc_i4_4 = i_ldc_i4_4;
const i_ldc_i4_5 = 27;
exports.i_ldc_i4_5 = i_ldc_i4_5;
const i_ldc_i4_6 = 28;
exports.i_ldc_i4_6 = i_ldc_i4_6;
const i_ldc_i4_7 = 29;
exports.i_ldc_i4_7 = i_ldc_i4_7;
const i_ldc_i4_8 = 30;
exports.i_ldc_i4_8 = i_ldc_i4_8;
const i_ldc_i4_s = 31;
exports.i_ldc_i4_s = i_ldc_i4_s;
const i_ldc_i4 = 32;
exports.i_ldc_i4 = i_ldc_i4;
const i_ldc_i8 = 33;
exports.i_ldc_i8 = i_ldc_i8;
const i_ldc_r4 = 34;
exports.i_ldc_r4 = i_ldc_r4;
const i_ldc_r8 = 35;
exports.i_ldc_r8 = i_ldc_r8;
const i_dup = 37;
exports.i_dup = i_dup;
const i_pop = 38;
exports.i_pop = i_pop;
const i_jmp = 39;
exports.i_jmp = i_jmp;
const i_call = 40;
exports.i_call = i_call;
const i_calli = 41;
exports.i_calli = i_calli;
const i_ret = 42;
exports.i_ret = i_ret;
const i_br_s = 43;
exports.i_br_s = i_br_s;
const i_brfalse_s = 44;
exports.i_brfalse_s = i_brfalse_s;
const i_brtrue_s = 45;
exports.i_brtrue_s = i_brtrue_s;
const i_beq_s = 46;
exports.i_beq_s = i_beq_s;
const i_bge_s = 47;
exports.i_bge_s = i_bge_s;
const i_bgt_s = 48;
exports.i_bgt_s = i_bgt_s;
const i_ble_s = 49;
exports.i_ble_s = i_ble_s;
const i_blt_s = 50;
exports.i_blt_s = i_blt_s;
const i_bne_un_s = 51;
exports.i_bne_un_s = i_bne_un_s;
const i_bge_un_s = 52;
exports.i_bge_un_s = i_bge_un_s;
const i_bgt_un_s = 53;
exports.i_bgt_un_s = i_bgt_un_s;
const i_ble_un_s = 54;
exports.i_ble_un_s = i_ble_un_s;
const i_blt_un_s = 55;
exports.i_blt_un_s = i_blt_un_s;
const i_br = 56;
exports.i_br = i_br;
const i_brfalse = 57;
exports.i_brfalse = i_brfalse;
const i_brtrue = 58;
exports.i_brtrue = i_brtrue;
const i_beq = 59;
exports.i_beq = i_beq;
const i_bge = 60;
exports.i_bge = i_bge;
const i_bgt = 61;
exports.i_bgt = i_bgt;
const i_ble = 62;
exports.i_ble = i_ble;
const i_blt = 63;
exports.i_blt = i_blt;
const i_bne_un = 64;
exports.i_bne_un = i_bne_un;
const i_bge_un = 65;
exports.i_bge_un = i_bge_un;
const i_bgt_un = 66;
exports.i_bgt_un = i_bgt_un;
const i_ble_un = 67;
exports.i_ble_un = i_ble_un;
const i_blt_un = 68;
exports.i_blt_un = i_blt_un;
const i_switch = 69;
exports.i_switch = i_switch;
const i_ldind_i1 = 70;
exports.i_ldind_i1 = i_ldind_i1;
const i_ldind_u1 = 71;
exports.i_ldind_u1 = i_ldind_u1;
const i_ldind_i2 = 72;
exports.i_ldind_i2 = i_ldind_i2;
const i_ldind_u2 = 73;
exports.i_ldind_u2 = i_ldind_u2;
const i_ldind_i4 = 74;
exports.i_ldind_i4 = i_ldind_i4;
const i_ldind_u4 = 75;
exports.i_ldind_u4 = i_ldind_u4;
const i_ldind_i8 = 76;
exports.i_ldind_i8 = i_ldind_i8;
const i_ldind_i = 77;
exports.i_ldind_i = i_ldind_i;
const i_ldind_r4 = 78;
exports.i_ldind_r4 = i_ldind_r4;
const i_ldind_r8 = 79;
exports.i_ldind_r8 = i_ldind_r8;
const i_ldind_ref = 80;
exports.i_ldind_ref = i_ldind_ref;
const i_stind_ref = 81;
exports.i_stind_ref = i_stind_ref;
const i_stind_i1 = 82;
exports.i_stind_i1 = i_stind_i1;
const i_stind_i2 = 83;
exports.i_stind_i2 = i_stind_i2;
const i_stind_i4 = 84;
exports.i_stind_i4 = i_stind_i4;
const i_stind_i8 = 85;
exports.i_stind_i8 = i_stind_i8;
const i_stind_r4 = 86;
exports.i_stind_r4 = i_stind_r4;
const i_stind_r8 = 87;
exports.i_stind_r8 = i_stind_r8;
const i_add = 88;
exports.i_add = i_add;
const i_sub = 89;
exports.i_sub = i_sub;
const i_mul = 90;
exports.i_mul = i_mul;
const i_div = 91;
exports.i_div = i_div;
const i_div_un = 92;
exports.i_div_un = i_div_un;
const i_rem = 93;
exports.i_rem = i_rem;
const i_rem_un = 94;
exports.i_rem_un = i_rem_un;
const i_and = 95;
exports.i_and = i_and;
const i_or = 96;
exports.i_or = i_or;
const i_xor = 97;
exports.i_xor = i_xor;
const i_shl = 98;
exports.i_shl = i_shl;
const i_shr = 99;
exports.i_shr = i_shr;
const i_shr_un = 100;
exports.i_shr_un = i_shr_un;
const i_neg = 101;
exports.i_neg = i_neg;
const i_not = 102;
exports.i_not = i_not;
const i_conv_i1 = 103;
exports.i_conv_i1 = i_conv_i1;
const i_conv_i2 = 104;
exports.i_conv_i2 = i_conv_i2;
const i_conv_i4 = 105;
exports.i_conv_i4 = i_conv_i4;
const i_conv_i8 = 106;
exports.i_conv_i8 = i_conv_i8;
const i_conv_r4 = 107;
exports.i_conv_r4 = i_conv_r4;
const i_conv_r8 = 108;
exports.i_conv_r8 = i_conv_r8;
const i_conv_u4 = 109;
exports.i_conv_u4 = i_conv_u4;
const i_conv_u8 = 110;
exports.i_conv_u8 = i_conv_u8;
const i_callvirt = 111;
exports.i_callvirt = i_callvirt;
const i_cpobj = 112;
exports.i_cpobj = i_cpobj;
const i_ldobj = 113;
exports.i_ldobj = i_ldobj;
const i_ldstr = 114;
exports.i_ldstr = i_ldstr;
const i_newobj = 115;
exports.i_newobj = i_newobj;
const i_castclass = 116;
exports.i_castclass = i_castclass;
const i_isinst = 117;
exports.i_isinst = i_isinst;
const i_conv_r_un = 118;
exports.i_conv_r_un = i_conv_r_un;
const i_unbox = 121;
exports.i_unbox = i_unbox;
const i_throw = 122;
exports.i_throw = i_throw;
const i_ldfld = 123;
exports.i_ldfld = i_ldfld;
const i_ldflda = 124;
exports.i_ldflda = i_ldflda;
const i_stfld = 125;
exports.i_stfld = i_stfld;
const i_ldsfld = 126;
exports.i_ldsfld = i_ldsfld;
const i_ldsflda = 127;
exports.i_ldsflda = i_ldsflda;
const i_stsfld = 128;
exports.i_stsfld = i_stsfld;
const i_stobj = 129;
exports.i_stobj = i_stobj;
const i_conv_ovf_i1_un = 130;
exports.i_conv_ovf_i1_un = i_conv_ovf_i1_un;
const i_conv_ovf_i2_un = 131;
exports.i_conv_ovf_i2_un = i_conv_ovf_i2_un;
const i_conv_ovf_i4_un = 132;
exports.i_conv_ovf_i4_un = i_conv_ovf_i4_un;
const i_conv_ovf_i8_un = 133;
exports.i_conv_ovf_i8_un = i_conv_ovf_i8_un;
const i_conv_ovf_u1_un = 134;
exports.i_conv_ovf_u1_un = i_conv_ovf_u1_un;
const i_conv_ovf_u2_un = 135;
exports.i_conv_ovf_u2_un = i_conv_ovf_u2_un;
const i_conv_ovf_u4_un = 136;
exports.i_conv_ovf_u4_un = i_conv_ovf_u4_un;
const i_conv_ovf_u8_un = 137;
exports.i_conv_ovf_u8_un = i_conv_ovf_u8_un;
const i_conv_ovf_i_un = 138;
exports.i_conv_ovf_i_un = i_conv_ovf_i_un;
const i_conv_ovf_u_un = 139;
exports.i_conv_ovf_u_un = i_conv_ovf_u_un;
const i_box = 140;
exports.i_box = i_box;
const i_newarr = 141;
exports.i_newarr = i_newarr;
const i_ldlen = 142;
exports.i_ldlen = i_ldlen;
const i_ldelema = 143;
exports.i_ldelema = i_ldelema;
const i_ldelem_i1 = 144;
exports.i_ldelem_i1 = i_ldelem_i1;
const i_ldelem_u1 = 145;
exports.i_ldelem_u1 = i_ldelem_u1;
const i_ldelem_i2 = 146;
exports.i_ldelem_i2 = i_ldelem_i2;
const i_ldelem_u2 = 147;
exports.i_ldelem_u2 = i_ldelem_u2;
const i_ldelem_i4 = 148;
exports.i_ldelem_i4 = i_ldelem_i4;
const i_ldelem_u4 = 149;
exports.i_ldelem_u4 = i_ldelem_u4;
const i_ldelem_i8 = 150;
exports.i_ldelem_i8 = i_ldelem_i8;
const i_ldelem_i = 151;
exports.i_ldelem_i = i_ldelem_i;
const i_ldelem_r4 = 152;
exports.i_ldelem_r4 = i_ldelem_r4;
const i_ldelem_r8 = 153;
exports.i_ldelem_r8 = i_ldelem_r8;
const i_ldelem_ref = 154;
exports.i_ldelem_ref = i_ldelem_ref;
const i_stelem_i = 155;
exports.i_stelem_i = i_stelem_i;
const i_stelem_i1 = 156;
exports.i_stelem_i1 = i_stelem_i1;
const i_stelem_i2 = 157;
exports.i_stelem_i2 = i_stelem_i2;
const i_stelem_i4 = 158;
exports.i_stelem_i4 = i_stelem_i4;
const i_stelem_i8 = 159;
exports.i_stelem_i8 = i_stelem_i8;
const i_stelem_r4 = 160;
exports.i_stelem_r4 = i_stelem_r4;
const i_stelem_r8 = 161;
exports.i_stelem_r8 = i_stelem_r8;
const i_stelem_ref = 162;
exports.i_stelem_ref = i_stelem_ref;
const i_conv_ovf_i1 = 179;
exports.i_conv_ovf_i1 = i_conv_ovf_i1;
const i_conv_ovf_u1 = 180;
exports.i_conv_ovf_u1 = i_conv_ovf_u1;
const i_conv_ovf_i2 = 181;
exports.i_conv_ovf_i2 = i_conv_ovf_i2;
const i_conv_ovf_u2 = 182;
exports.i_conv_ovf_u2 = i_conv_ovf_u2;
const i_conv_ovf_i4 = 183;
exports.i_conv_ovf_i4 = i_conv_ovf_i4;
const i_conv_ovf_u4 = 184;
exports.i_conv_ovf_u4 = i_conv_ovf_u4;
const i_conv_ovf_i8 = 185;
exports.i_conv_ovf_i8 = i_conv_ovf_i8;
const i_conv_ovf_u8 = 186;
exports.i_conv_ovf_u8 = i_conv_ovf_u8;
const i_refanyval = 194;
exports.i_refanyval = i_refanyval;
const i_ckfinite = 195;
exports.i_ckfinite = i_ckfinite;
const i_mkrefany = 198;
exports.i_mkrefany = i_mkrefany;
const i_ldtoken = 208;
exports.i_ldtoken = i_ldtoken;
const i_conv_u2 = 209;
exports.i_conv_u2 = i_conv_u2;
const i_conv_u1 = 210;
exports.i_conv_u1 = i_conv_u1;
const i_conv_i = 211;
exports.i_conv_i = i_conv_i;
const i_conv_ovf_i = 212;
exports.i_conv_ovf_i = i_conv_ovf_i;
const i_conv_ovf_u = 213;
exports.i_conv_ovf_u = i_conv_ovf_u;
const i_add_ovf = 214;
exports.i_add_ovf = i_add_ovf;
const i_add_ovf_un = 215;
exports.i_add_ovf_un = i_add_ovf_un;
const i_mul_ovf = 216;
exports.i_mul_ovf = i_mul_ovf;
const i_mul_ovf_un = 217;
exports.i_mul_ovf_un = i_mul_ovf_un;
const i_sub_ovf = 218;
exports.i_sub_ovf = i_sub_ovf;
const i_sub_ovf_un = 219;
exports.i_sub_ovf_un = i_sub_ovf_un;
const i_endfinally = 220;
exports.i_endfinally = i_endfinally;
const i_leave = 221;
exports.i_leave = i_leave;
const i_leave_s = 222;
exports.i_leave_s = i_leave_s;
const i_stind_i = 223;
exports.i_stind_i = i_stind_i;
const i_conv_u = 224;
exports.i_conv_u = i_conv_u;
const i_arglist = 65024;
exports.i_arglist = i_arglist;
const i_ceq = 65025;
exports.i_ceq = i_ceq;
const i_cgt = 65026;
exports.i_cgt = i_cgt;
const i_cgt_un = 65027;
exports.i_cgt_un = i_cgt_un;
const i_clt = 65028;
exports.i_clt = i_clt;
const i_clt_un = 65029;
exports.i_clt_un = i_clt_un;
const i_ldftn = 65030;
exports.i_ldftn = i_ldftn;
const i_ldvirtftn = 65031;
exports.i_ldvirtftn = i_ldvirtftn;
const i_ldarg = 65033;
exports.i_ldarg = i_ldarg;
const i_ldarga = 65034;
exports.i_ldarga = i_ldarga;
const i_starg = 65035;
exports.i_starg = i_starg;
const i_ldloc = 65036;
exports.i_ldloc = i_ldloc;
const i_ldloca = 65037;
exports.i_ldloca = i_ldloca;
const i_stloc = 65038;
exports.i_stloc = i_stloc;
const i_localloc = 65039;
exports.i_localloc = i_localloc;
const i_endfilter = 65041;
exports.i_endfilter = i_endfilter;
const i_unaligned = 65042;
exports.i_unaligned = i_unaligned;
const i_volatile = 65043;
exports.i_volatile = i_volatile;
const i_constrained = 65046;
exports.i_constrained = i_constrained;
const i_readonly = 65054;
exports.i_readonly = i_readonly;
const i_tail = 65044;
exports.i_tail = i_tail;
const i_initobj = 65045;
exports.i_initobj = i_initobj;
const i_cpblk = 65047;
exports.i_cpblk = i_cpblk;
const i_initblk = 65048;
exports.i_initblk = i_initblk;
const i_rethrow = 65050;
exports.i_rethrow = i_rethrow;
const i_sizeof = 65052;
exports.i_sizeof = i_sizeof;
const i_refanytype = 65053;
exports.i_refanytype = i_refanytype;
const i_ldelem_any = 163;
exports.i_ldelem_any = i_ldelem_any;
const i_stelem_any = 164;
exports.i_stelem_any = i_stelem_any;
const i_unbox_any = 165;
exports.i_unbox_any = i_unbox_any;

function mk_ldc(i) {
  return (0, _il.mkLdcInt32)(i);
}

const noArgInstrs = new _Util.Lazy(function () {
  return (0, _Types.L)([i_ldc_i4_0, mk_ldc(0)], (0, _Types.L)([i_ldc_i4_1, mk_ldc(1)], (0, _Types.L)([i_ldc_i4_2, mk_ldc(2)], (0, _Types.L)([i_ldc_i4_3, mk_ldc(3)], (0, _Types.L)([i_ldc_i4_4, mk_ldc(4)], (0, _Types.L)([i_ldc_i4_5, mk_ldc(5)], (0, _Types.L)([i_ldc_i4_6, mk_ldc(6)], (0, _Types.L)([i_ldc_i4_7, mk_ldc(7)], (0, _Types.L)([i_ldc_i4_8, mk_ldc(8)], (0, _Types.L)([i_ldc_i4_m1, mk_ldc(-1)], (0, _Types.L)([10, (0, _il.mkStloc)(0)], (0, _Types.L)([11, (0, _il.mkStloc)(1)], (0, _Types.L)([12, (0, _il.mkStloc)(2)], (0, _Types.L)([13, (0, _il.mkStloc)(3)], (0, _Types.L)([6, (0, _il.mkLdloc)(0)], (0, _Types.L)([7, (0, _il.mkLdloc)(1)], (0, _Types.L)([8, (0, _il.mkLdloc)(2)], (0, _Types.L)([9, (0, _il.mkLdloc)(3)], (0, _Types.L)([2, (0, _il.mkLdarg)(0)], (0, _Types.L)([3, (0, _il.mkLdarg)(1)], (0, _Types.L)([4, (0, _il.mkLdarg)(2)], (0, _Types.L)([5, (0, _il.mkLdarg)(3)], (0, _Types.L)([42, new _il.ILInstr(47, "I_ret")], (0, _Types.L)([88, new _il.ILInstr(0, "AI_add")], (0, _Types.L)([214, new _il.ILInstr(1, "AI_add_ovf")], (0, _Types.L)([215, new _il.ILInstr(2, "AI_add_ovf_un")], (0, _Types.L)([95, new _il.ILInstr(3, "AI_and")], (0, _Types.L)([91, new _il.ILInstr(4, "AI_div")], (0, _Types.L)([92, new _il.ILInstr(5, "AI_div_un")], (0, _Types.L)([65025, new _il.ILInstr(6, "AI_ceq")], (0, _Types.L)([65026, new _il.ILInstr(7, "AI_cgt")], (0, _Types.L)([65027, new _il.ILInstr(8, "AI_cgt_un")], (0, _Types.L)([65028, new _il.ILInstr(9, "AI_clt")], (0, _Types.L)([65029, new _il.ILInstr(10, "AI_clt_un")], (0, _Types.L)([103, new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(1, "DT_I1"))], (0, _Types.L)([104, new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(3, "DT_I2"))], (0, _Types.L)([105, new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(5, "DT_I4"))], (0, _Types.L)([106, new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(7, "DT_I8"))], (0, _Types.L)([211, new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(11, "DT_I"))], (0, _Types.L)([107, new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(9, "DT_R4"))], (0, _Types.L)([108, new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(10, "DT_R8"))], (0, _Types.L)([210, new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(2, "DT_U1"))], (0, _Types.L)([209, new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(4, "DT_U2"))], (0, _Types.L)([109, new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(6, "DT_U4"))], (0, _Types.L)([110, new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(8, "DT_U8"))], (0, _Types.L)([224, new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(12, "DT_U"))], (0, _Types.L)([118, new _il.ILInstr(11, "AI_conv", new _il.ILBasicType(0, "DT_R"))], (0, _Types.L)([179, new _il.ILInstr(12, "AI_conv_ovf", new _il.ILBasicType(1, "DT_I1"))], (0, _Types.L)([181, new _il.ILInstr(12, "AI_conv_ovf", new _il.ILBasicType(3, "DT_I2"))], (0, _Types.L)([183, new _il.ILInstr(12, "AI_conv_ovf", new _il.ILBasicType(5, "DT_I4"))], (0, _Types.L)([185, new _il.ILInstr(12, "AI_conv_ovf", new _il.ILBasicType(7, "DT_I8"))], (0, _Types.L)([212, new _il.ILInstr(12, "AI_conv_ovf", new _il.ILBasicType(11, "DT_I"))], (0, _Types.L)([180, new _il.ILInstr(12, "AI_conv_ovf", new _il.ILBasicType(2, "DT_U1"))], (0, _Types.L)([182, new _il.ILInstr(12, "AI_conv_ovf", new _il.ILBasicType(4, "DT_U2"))], (0, _Types.L)([184, new _il.ILInstr(12, "AI_conv_ovf", new _il.ILBasicType(6, "DT_U4"))], (0, _Types.L)([186, new _il.ILInstr(12, "AI_conv_ovf", new _il.ILBasicType(8, "DT_U8"))], (0, _Types.L)([213, new _il.ILInstr(12, "AI_conv_ovf", new _il.ILBasicType(12, "DT_U"))], (0, _Types.L)([130, new _il.ILInstr(13, "AI_conv_ovf_un", new _il.ILBasicType(1, "DT_I1"))], (0, _Types.L)([131, new _il.ILInstr(13, "AI_conv_ovf_un", new _il.ILBasicType(3, "DT_I2"))], (0, _Types.L)([132, new _il.ILInstr(13, "AI_conv_ovf_un", new _il.ILBasicType(5, "DT_I4"))], (0, _Types.L)([133, new _il.ILInstr(13, "AI_conv_ovf_un", new _il.ILBasicType(7, "DT_I8"))], (0, _Types.L)([138, new _il.ILInstr(13, "AI_conv_ovf_un", new _il.ILBasicType(11, "DT_I"))], (0, _Types.L)([134, new _il.ILInstr(13, "AI_conv_ovf_un", new _il.ILBasicType(2, "DT_U1"))], (0, _Types.L)([135, new _il.ILInstr(13, "AI_conv_ovf_un", new _il.ILBasicType(4, "DT_U2"))], (0, _Types.L)([136, new _il.ILInstr(13, "AI_conv_ovf_un", new _il.ILBasicType(6, "DT_U4"))], (0, _Types.L)([137, new _il.ILInstr(13, "AI_conv_ovf_un", new _il.ILBasicType(8, "DT_U8"))], (0, _Types.L)([139, new _il.ILInstr(13, "AI_conv_ovf_un", new _il.ILBasicType(12, "DT_U"))], (0, _Types.L)([156, new _il.ILInstr(79, "I_stelem", new _il.ILBasicType(1, "DT_I1"))], (0, _Types.L)([157, new _il.ILInstr(79, "I_stelem", new _il.ILBasicType(3, "DT_I2"))], (0, _Types.L)([158, new _il.ILInstr(79, "I_stelem", new _il.ILBasicType(5, "DT_I4"))], (0, _Types.L)([159, new _il.ILInstr(79, "I_stelem", new _il.ILBasicType(7, "DT_I8"))], (0, _Types.L)([160, new _il.ILInstr(79, "I_stelem", new _il.ILBasicType(9, "DT_R4"))], (0, _Types.L)([161, new _il.ILInstr(79, "I_stelem", new _il.ILBasicType(10, "DT_R8"))], (0, _Types.L)([155, new _il.ILInstr(79, "I_stelem", new _il.ILBasicType(11, "DT_I"))], (0, _Types.L)([162, new _il.ILInstr(79, "I_stelem", new _il.ILBasicType(13, "DT_REF"))], (0, _Types.L)([144, new _il.ILInstr(78, "I_ldelem", new _il.ILBasicType(1, "DT_I1"))], (0, _Types.L)([146, new _il.ILInstr(78, "I_ldelem", new _il.ILBasicType(3, "DT_I2"))], (0, _Types.L)([148, new _il.ILInstr(78, "I_ldelem", new _il.ILBasicType(5, "DT_I4"))], (0, _Types.L)([150, new _il.ILInstr(78, "I_ldelem", new _il.ILBasicType(7, "DT_I8"))], (0, _Types.L)([145, new _il.ILInstr(78, "I_ldelem", new _il.ILBasicType(2, "DT_U1"))], (0, _Types.L)([147, new _il.ILInstr(78, "I_ldelem", new _il.ILBasicType(4, "DT_U2"))], (0, _Types.L)([149, new _il.ILInstr(78, "I_ldelem", new _il.ILBasicType(6, "DT_U4"))], (0, _Types.L)([152, new _il.ILInstr(78, "I_ldelem", new _il.ILBasicType(9, "DT_R4"))], (0, _Types.L)([153, new _il.ILInstr(78, "I_ldelem", new _il.ILBasicType(10, "DT_R8"))], (0, _Types.L)([151, new _il.ILInstr(78, "I_ldelem", new _il.ILBasicType(11, "DT_I"))], (0, _Types.L)([154, new _il.ILInstr(78, "I_ldelem", new _il.ILBasicType(13, "DT_REF"))], (0, _Types.L)([90, new _il.ILInstr(14, "AI_mul")], (0, _Types.L)([216, new _il.ILInstr(15, "AI_mul_ovf")], (0, _Types.L)([217, new _il.ILInstr(16, "AI_mul_ovf_un")], (0, _Types.L)([93, new _il.ILInstr(17, "AI_rem")], (0, _Types.L)([94, new _il.ILInstr(18, "AI_rem_un")], (0, _Types.L)([98, new _il.ILInstr(19, "AI_shl")], (0, _Types.L)([99, new _il.ILInstr(20, "AI_shr")], (0, _Types.L)([100, new _il.ILInstr(21, "AI_shr_un")], (0, _Types.L)([89, new _il.ILInstr(22, "AI_sub")], (0, _Types.L)([218, new _il.ILInstr(23, "AI_sub_ovf")], (0, _Types.L)([219, new _il.ILInstr(24, "AI_sub_ovf_un")], (0, _Types.L)([97, new _il.ILInstr(25, "AI_xor")], (0, _Types.L)([96, new _il.ILInstr(26, "AI_or")], (0, _Types.L)([101, new _il.ILInstr(27, "AI_neg")], (0, _Types.L)([102, new _il.ILInstr(28, "AI_not")], (0, _Types.L)([i_ldnull, new _il.ILInstr(29, "AI_ldnull")], (0, _Types.L)([i_dup, new _il.ILInstr(30, "AI_dup")], (0, _Types.L)([i_pop, new _il.ILInstr(31, "AI_pop")], (0, _Types.L)([i_ckfinite, new _il.ILInstr(32, "AI_ckfinite")], (0, _Types.L)([i_nop, new _il.ILInstr(33, "AI_nop")], (0, _Types.L)([i_break, new _il.ILInstr(88, "I_break")], (0, _Types.L)([i_arglist, new _il.ILInstr(90, "I_arglist")], (0, _Types.L)([i_endfilter, new _il.ILInstr(56, "I_endfilter")], (0, _Types.L)([i_endfinally, new _il.ILInstr(55, "I_endfinally")], (0, _Types.L)([i_refanytype, new _il.ILInstr(86, "I_refanytype")], (0, _Types.L)([i_localloc, new _il.ILInstr(91, "I_localloc")], (0, _Types.L)([i_throw, new _il.ILInstr(54, "I_throw")], (0, _Types.L)([i_ldlen, new _il.ILInstr(84, "I_ldlen")], (0, _Types.L)([i_rethrow, new _il.ILInstr(58, "I_rethrow")], (0, _Types.L)())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
});
exports.noArgInstrs = noArgInstrs;

function isNoArgInstr(i$$1) {
  var n$$3, n$$4, n$$5, n$$1;
  var $target$$15, n$$2;

  if (i$$1.tag === 34) {
    if (i$$1.fields[0].tag === 5) {
      if (i$$1.fields[1].tag === 0) {
        if (n$$1 = i$$1.fields[1].fields[0] | 0, -1 <= n$$1 ? n$$1 <= 8 : false) {
          $target$$15 = 0;
          n$$2 = i$$1.fields[1].fields[0];
        } else {
          $target$$15 = 1;
        }
      } else {
        $target$$15 = 1;
      }
    } else {
      $target$$15 = 1;
    }
  } else {
    $target$$15 = 1;
  }

  switch ($target$$15) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        var $target$$16, n$$6;

        if (i$$1.tag === 42) {
          if (n$$3 = i$$1.fields[0], n$$3 <= 3) {
            $target$$16 = 0;
            n$$6 = i$$1.fields[0];
          } else {
            $target$$16 = 1;
          }
        } else if (i$$1.tag === 38) {
          if (n$$4 = i$$1.fields[0], n$$4 <= 3) {
            $target$$16 = 0;
            n$$6 = i$$1.fields[0];
          } else {
            $target$$16 = 1;
          }
        } else if (i$$1.tag === 35) {
          if (n$$5 = i$$1.fields[0], n$$5 <= 3) {
            $target$$16 = 0;
            n$$6 = i$$1.fields[0];
          } else {
            $target$$16 = 1;
          }
        } else {
          $target$$16 = 1;
        }

        switch ($target$$16) {
          case 0:
            {
              return true;
            }

          case 1:
            {
              var $target$$17;

              if (i$$1.tag === 47) {
                $target$$17 = 0;
              } else if (i$$1.tag === 0) {
                $target$$17 = 0;
              } else if (i$$1.tag === 1) {
                $target$$17 = 0;
              } else if (i$$1.tag === 2) {
                $target$$17 = 0;
              } else if (i$$1.tag === 3) {
                $target$$17 = 0;
              } else if (i$$1.tag === 4) {
                $target$$17 = 0;
              } else if (i$$1.tag === 5) {
                $target$$17 = 0;
              } else if (i$$1.tag === 6) {
                $target$$17 = 0;
              } else if (i$$1.tag === 7) {
                $target$$17 = 0;
              } else if (i$$1.tag === 8) {
                $target$$17 = 0;
              } else if (i$$1.tag === 9) {
                $target$$17 = 0;
              } else if (i$$1.tag === 10) {
                $target$$17 = 0;
              } else if (i$$1.tag === 11) {
                if (i$$1.fields[0].tag === 1) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 3) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 5) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 7) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 11) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 9) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 10) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 2) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 4) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 6) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 8) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 12) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 0) {
                  $target$$17 = 0;
                } else {
                  $target$$17 = 1;
                }
              } else if (i$$1.tag === 12) {
                if (i$$1.fields[0].tag === 1) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 3) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 5) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 7) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 11) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 2) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 4) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 6) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 8) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 12) {
                  $target$$17 = 0;
                } else {
                  $target$$17 = 1;
                }
              } else if (i$$1.tag === 13) {
                if (i$$1.fields[0].tag === 1) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 3) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 5) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 7) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 11) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 2) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 4) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 6) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 8) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 12) {
                  $target$$17 = 0;
                } else {
                  $target$$17 = 1;
                }
              } else if (i$$1.tag === 79) {
                if (i$$1.fields[0].tag === 1) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 3) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 5) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 7) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 9) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 10) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 11) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 13) {
                  $target$$17 = 0;
                } else {
                  $target$$17 = 1;
                }
              } else if (i$$1.tag === 78) {
                if (i$$1.fields[0].tag === 1) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 3) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 5) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 7) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 2) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 4) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 6) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 9) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 10) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 11) {
                  $target$$17 = 0;
                } else if (i$$1.fields[0].tag === 13) {
                  $target$$17 = 0;
                } else {
                  $target$$17 = 1;
                }
              } else if (i$$1.tag === 14) {
                $target$$17 = 0;
              } else if (i$$1.tag === 15) {
                $target$$17 = 0;
              } else if (i$$1.tag === 16) {
                $target$$17 = 0;
              } else if (i$$1.tag === 17) {
                $target$$17 = 0;
              } else if (i$$1.tag === 18) {
                $target$$17 = 0;
              } else if (i$$1.tag === 19) {
                $target$$17 = 0;
              } else if (i$$1.tag === 20) {
                $target$$17 = 0;
              } else if (i$$1.tag === 21) {
                $target$$17 = 0;
              } else if (i$$1.tag === 22) {
                $target$$17 = 0;
              } else if (i$$1.tag === 23) {
                $target$$17 = 0;
              } else if (i$$1.tag === 24) {
                $target$$17 = 0;
              } else if (i$$1.tag === 25) {
                $target$$17 = 0;
              } else if (i$$1.tag === 26) {
                $target$$17 = 0;
              } else if (i$$1.tag === 27) {
                $target$$17 = 0;
              } else if (i$$1.tag === 28) {
                $target$$17 = 0;
              } else if (i$$1.tag === 29) {
                $target$$17 = 0;
              } else if (i$$1.tag === 30) {
                $target$$17 = 0;
              } else if (i$$1.tag === 31) {
                $target$$17 = 0;
              } else if (i$$1.tag === 32) {
                $target$$17 = 0;
              } else if (i$$1.tag === 33) {
                $target$$17 = 0;
              } else if (i$$1.tag === 88) {
                $target$$17 = 0;
              } else if (i$$1.tag === 90) {
                $target$$17 = 0;
              } else if (i$$1.tag === 56) {
                $target$$17 = 0;
              } else if (i$$1.tag === 55) {
                $target$$17 = 0;
              } else if (i$$1.tag === 86) {
                $target$$17 = 0;
              } else if (i$$1.tag === 91) {
                $target$$17 = 0;
              } else if (i$$1.tag === 54) {
                $target$$17 = 0;
              } else if (i$$1.tag === 84) {
                $target$$17 = 0;
              } else if (i$$1.tag === 58) {
                $target$$17 = 0;
              } else {
                $target$$17 = 1;
              }

              switch ($target$$17) {
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
        }
      }
  }
}

const ILCmpInstrMap = new _Util.Lazy(function () {
  const dict = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp.HashIdentity$$$Structural)()));
  dict.set(new _il.ILComparisonInstr(0, "BI_beq"), i_beq);
  dict.set(new _il.ILComparisonInstr(3, "BI_bgt"), i_bgt);
  dict.set(new _il.ILComparisonInstr(4, "BI_bgt_un"), i_bgt_un);
  dict.set(new _il.ILComparisonInstr(1, "BI_bge"), i_bge);
  dict.set(new _il.ILComparisonInstr(2, "BI_bge_un"), i_bge_un);
  dict.set(new _il.ILComparisonInstr(5, "BI_ble"), i_ble);
  dict.set(new _il.ILComparisonInstr(6, "BI_ble_un"), i_ble_un);
  dict.set(new _il.ILComparisonInstr(7, "BI_blt"), i_blt);
  dict.set(new _il.ILComparisonInstr(8, "BI_blt_un"), i_blt_un);
  dict.set(new _il.ILComparisonInstr(9, "BI_bne_un"), i_bne_un);
  dict.set(new _il.ILComparisonInstr(10, "BI_brfalse"), i_brfalse);
  dict.set(new _il.ILComparisonInstr(11, "BI_brtrue"), i_brtrue);
  return dict;
});
exports.ILCmpInstrMap = ILCmpInstrMap;
const ILCmpInstrRevMap = new _Util.Lazy(function () {
  const dict$$1 = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp.HashIdentity$$$Structural)()));
  dict$$1.set(new _il.ILComparisonInstr(0, "BI_beq"), i_beq_s);
  dict$$1.set(new _il.ILComparisonInstr(3, "BI_bgt"), i_bgt_s);
  dict$$1.set(new _il.ILComparisonInstr(4, "BI_bgt_un"), i_bgt_un_s);
  dict$$1.set(new _il.ILComparisonInstr(1, "BI_bge"), i_bge_s);
  dict$$1.set(new _il.ILComparisonInstr(2, "BI_bge_un"), i_bge_un_s);
  dict$$1.set(new _il.ILComparisonInstr(5, "BI_ble"), i_ble_s);
  dict$$1.set(new _il.ILComparisonInstr(6, "BI_ble_un"), i_ble_un_s);
  dict$$1.set(new _il.ILComparisonInstr(7, "BI_blt"), i_blt_s);
  dict$$1.set(new _il.ILComparisonInstr(8, "BI_blt_un"), i_blt_un_s);
  dict$$1.set(new _il.ILComparisonInstr(9, "BI_bne_un"), i_bne_un_s);
  dict$$1.set(new _il.ILComparisonInstr(10, "BI_brfalse"), i_brfalse_s);
  dict$$1.set(new _il.ILComparisonInstr(11, "BI_brtrue"), i_brtrue_s);
  return dict$$1;
});
exports.ILCmpInstrRevMap = ILCmpInstrRevMap;
const nt_VOID = 1;
exports.nt_VOID = nt_VOID;
const nt_BOOLEAN = 2;
exports.nt_BOOLEAN = nt_BOOLEAN;
const nt_I1 = 3;
exports.nt_I1 = nt_I1;
const nt_U1 = 4;
exports.nt_U1 = nt_U1;
const nt_I2 = 5;
exports.nt_I2 = nt_I2;
const nt_U2 = 6;
exports.nt_U2 = nt_U2;
const nt_I4 = 7;
exports.nt_I4 = nt_I4;
const nt_U4 = 8;
exports.nt_U4 = nt_U4;
const nt_I8 = 9;
exports.nt_I8 = nt_I8;
const nt_U8 = 10;
exports.nt_U8 = nt_U8;
const nt_R4 = 11;
exports.nt_R4 = nt_R4;
const nt_R8 = 12;
exports.nt_R8 = nt_R8;
const nt_SYSCHAR = 13;
exports.nt_SYSCHAR = nt_SYSCHAR;
const nt_VARIANT = 14;
exports.nt_VARIANT = nt_VARIANT;
const nt_CURRENCY = 15;
exports.nt_CURRENCY = nt_CURRENCY;
const nt_PTR = 16;
exports.nt_PTR = nt_PTR;
const nt_DECIMAL = 17;
exports.nt_DECIMAL = nt_DECIMAL;
const nt_DATE = 18;
exports.nt_DATE = nt_DATE;
const nt_BSTR = 19;
exports.nt_BSTR = nt_BSTR;
const nt_LPSTR = 20;
exports.nt_LPSTR = nt_LPSTR;
const nt_LPWSTR = 21;
exports.nt_LPWSTR = nt_LPWSTR;
const nt_LPTSTR = 22;
exports.nt_LPTSTR = nt_LPTSTR;
const nt_FIXEDSYSSTRING = 23;
exports.nt_FIXEDSYSSTRING = nt_FIXEDSYSSTRING;
const nt_OBJECTREF = 24;
exports.nt_OBJECTREF = nt_OBJECTREF;
const nt_IUNKNOWN = 25;
exports.nt_IUNKNOWN = nt_IUNKNOWN;
const nt_IDISPATCH = 26;
exports.nt_IDISPATCH = nt_IDISPATCH;
const nt_STRUCT = 27;
exports.nt_STRUCT = nt_STRUCT;
const nt_INTF = 28;
exports.nt_INTF = nt_INTF;
const nt_SAFEARRAY = 29;
exports.nt_SAFEARRAY = nt_SAFEARRAY;
const nt_FIXEDARRAY = 30;
exports.nt_FIXEDARRAY = nt_FIXEDARRAY;
const nt_INT = 31;
exports.nt_INT = nt_INT;
const nt_UINT = 32;
exports.nt_UINT = nt_UINT;
const nt_NESTEDSTRUCT = 33;
exports.nt_NESTEDSTRUCT = nt_NESTEDSTRUCT;
const nt_BYVALSTR = 34;
exports.nt_BYVALSTR = nt_BYVALSTR;
const nt_ANSIBSTR = 35;
exports.nt_ANSIBSTR = nt_ANSIBSTR;
const nt_TBSTR = 36;
exports.nt_TBSTR = nt_TBSTR;
const nt_VARIANTBOOL = 37;
exports.nt_VARIANTBOOL = nt_VARIANTBOOL;
const nt_FUNC = 38;
exports.nt_FUNC = nt_FUNC;
const nt_ASANY = 40;
exports.nt_ASANY = nt_ASANY;
const nt_ARRAY = 42;
exports.nt_ARRAY = nt_ARRAY;
const nt_LPSTRUCT = 43;
exports.nt_LPSTRUCT = nt_LPSTRUCT;
const nt_CUSTOMMARSHALER = 44;
exports.nt_CUSTOMMARSHALER = nt_CUSTOMMARSHALER;
const nt_ERROR = 45;
exports.nt_ERROR = nt_ERROR;
const nt_LPUTF8STR = 48;
exports.nt_LPUTF8STR = nt_LPUTF8STR;
const nt_MAX = 80;
exports.nt_MAX = nt_MAX;
const vt_EMPTY = 0;
exports.vt_EMPTY = vt_EMPTY;
const vt_NULL = 1;
exports.vt_NULL = vt_NULL;
const vt_I2 = 2;
exports.vt_I2 = vt_I2;
const vt_I4 = 3;
exports.vt_I4 = vt_I4;
const vt_R4 = 4;
exports.vt_R4 = vt_R4;
const vt_R8 = 5;
exports.vt_R8 = vt_R8;
const vt_CY = 6;
exports.vt_CY = vt_CY;
const vt_DATE = 7;
exports.vt_DATE = vt_DATE;
const vt_BSTR = 8;
exports.vt_BSTR = vt_BSTR;
const vt_DISPATCH = 9;
exports.vt_DISPATCH = vt_DISPATCH;
const vt_ERROR = 10;
exports.vt_ERROR = vt_ERROR;
const vt_BOOL = 11;
exports.vt_BOOL = vt_BOOL;
const vt_VARIANT = 12;
exports.vt_VARIANT = vt_VARIANT;
const vt_UNKNOWN = 13;
exports.vt_UNKNOWN = vt_UNKNOWN;
const vt_DECIMAL = 14;
exports.vt_DECIMAL = vt_DECIMAL;
const vt_I1 = 16;
exports.vt_I1 = vt_I1;
const vt_UI1 = 17;
exports.vt_UI1 = vt_UI1;
const vt_UI2 = 18;
exports.vt_UI2 = vt_UI2;
const vt_UI4 = 19;
exports.vt_UI4 = vt_UI4;
const vt_I8 = 20;
exports.vt_I8 = vt_I8;
const vt_UI8 = 21;
exports.vt_UI8 = vt_UI8;
const vt_INT = 22;
exports.vt_INT = vt_INT;
const vt_UINT = 23;
exports.vt_UINT = vt_UINT;
const vt_VOID = 24;
exports.vt_VOID = vt_VOID;
const vt_HRESULT = 25;
exports.vt_HRESULT = vt_HRESULT;
const vt_PTR = 26;
exports.vt_PTR = vt_PTR;
const vt_SAFEARRAY = 27;
exports.vt_SAFEARRAY = vt_SAFEARRAY;
const vt_CARRAY = 28;
exports.vt_CARRAY = vt_CARRAY;
const vt_USERDEFINED = 29;
exports.vt_USERDEFINED = vt_USERDEFINED;
const vt_LPSTR = 30;
exports.vt_LPSTR = vt_LPSTR;
const vt_LPWSTR = 31;
exports.vt_LPWSTR = vt_LPWSTR;
const vt_RECORD = 36;
exports.vt_RECORD = vt_RECORD;
const vt_FILETIME = 64;
exports.vt_FILETIME = vt_FILETIME;
const vt_BLOB = 65;
exports.vt_BLOB = vt_BLOB;
const vt_STREAM = 66;
exports.vt_STREAM = vt_STREAM;
const vt_STORAGE = 67;
exports.vt_STORAGE = vt_STORAGE;
const vt_STREAMED_OBJECT = 68;
exports.vt_STREAMED_OBJECT = vt_STREAMED_OBJECT;
const vt_STORED_OBJECT = 69;
exports.vt_STORED_OBJECT = vt_STORED_OBJECT;
const vt_BLOB_OBJECT = 70;
exports.vt_BLOB_OBJECT = vt_BLOB_OBJECT;
const vt_CF = 71;
exports.vt_CF = vt_CF;
const vt_CLSID = 72;
exports.vt_CLSID = vt_CLSID;
const vt_VECTOR = 4096;
exports.vt_VECTOR = vt_VECTOR;
const vt_ARRAY = 8192;
exports.vt_ARRAY = vt_ARRAY;
const vt_BYREF = 16384;
exports.vt_BYREF = vt_BYREF;
const ILNativeTypeMap = new _Util.Lazy(function () {
  return (0, _Types.L)([nt_CURRENCY, new _il.ILNativeType(4, "Currency")], (0, _Types.L)([nt_BSTR, new _il.ILNativeType(30, "BSTR")], (0, _Types.L)([nt_LPSTR, new _il.ILNativeType(5, "LPSTR")], (0, _Types.L)([nt_LPWSTR, new _il.ILNativeType(6, "LPWSTR")], (0, _Types.L)([nt_LPTSTR, new _il.ILNativeType(7, "LPTSTR")], (0, _Types.L)([nt_LPUTF8STR, new _il.ILNativeType(8, "LPUTF8STR")], (0, _Types.L)([nt_IUNKNOWN, new _il.ILNativeType(31, "IUnknown")], (0, _Types.L)([nt_IDISPATCH, new _il.ILNativeType(32, "IDispatch")], (0, _Types.L)([nt_BYVALSTR, new _il.ILNativeType(9, "ByValStr")], (0, _Types.L)([nt_TBSTR, new _il.ILNativeType(10, "TBSTR")], (0, _Types.L)([nt_LPSTRUCT, new _il.ILNativeType(11, "LPSTRUCT")], (0, _Types.L)([nt_INTF, new _il.ILNativeType(33, "Interface")], (0, _Types.L)([nt_STRUCT, new _il.ILNativeType(12, "Struct")], (0, _Types.L)([nt_ERROR, new _il.ILNativeType(34, "Error")], (0, _Types.L)([nt_VOID, new _il.ILNativeType(13, "Void")], (0, _Types.L)([nt_BOOLEAN, new _il.ILNativeType(14, "Bool")], (0, _Types.L)([nt_I1, new _il.ILNativeType(15, "Int8")], (0, _Types.L)([nt_I2, new _il.ILNativeType(16, "Int16")], (0, _Types.L)([nt_I4, new _il.ILNativeType(17, "Int32")], (0, _Types.L)([nt_I8, new _il.ILNativeType(18, "Int64")], (0, _Types.L)([nt_R4, new _il.ILNativeType(19, "Single")], (0, _Types.L)([nt_R8, new _il.ILNativeType(20, "Double")], (0, _Types.L)([nt_U1, new _il.ILNativeType(21, "Byte")], (0, _Types.L)([nt_U2, new _il.ILNativeType(22, "UInt16")], (0, _Types.L)([nt_U4, new _il.ILNativeType(23, "UInt32")], (0, _Types.L)([nt_U8, new _il.ILNativeType(24, "UInt64")], (0, _Types.L)([nt_INT, new _il.ILNativeType(26, "Int")], (0, _Types.L)([nt_UINT, new _il.ILNativeType(27, "UInt")], (0, _Types.L)([nt_ANSIBSTR, new _il.ILNativeType(36, "ANSIBSTR")], (0, _Types.L)([nt_VARIANTBOOL, new _il.ILNativeType(37, "VariantBool")], (0, _Types.L)([nt_FUNC, new _il.ILNativeType(28, "Method")], (0, _Types.L)([nt_ASANY, new _il.ILNativeType(29, "AsAny")], (0, _Types.L)()))))))))))))))))))))))))))))))));
});
exports.ILNativeTypeMap = ILNativeTypeMap;
const ILNativeTypeRevMap = new _Util.Lazy(function () {
  return (0, _List.map)(function (tupledArg) {
    return [tupledArg[1], tupledArg[0]];
  }, (0, _illib.Lazy$$$force)(ILNativeTypeMap));
});
exports.ILNativeTypeRevMap = ILNativeTypeRevMap;
const ILVariantTypeMap = new _Util.Lazy(function () {
  return (0, _Types.L)([new _il.ILNativeVariant(0, "Empty"), vt_EMPTY], (0, _Types.L)([new _il.ILNativeVariant(1, "Null"), vt_NULL], (0, _Types.L)([new _il.ILNativeVariant(2, "Variant"), vt_VARIANT], (0, _Types.L)([new _il.ILNativeVariant(3, "Currency"), vt_CY], (0, _Types.L)([new _il.ILNativeVariant(4, "Decimal"), vt_DECIMAL], (0, _Types.L)([new _il.ILNativeVariant(5, "Date"), vt_DATE], (0, _Types.L)([new _il.ILNativeVariant(6, "BSTR"), vt_BSTR], (0, _Types.L)([new _il.ILNativeVariant(7, "LPSTR"), vt_LPSTR], (0, _Types.L)([new _il.ILNativeVariant(8, "LPWSTR"), vt_LPWSTR], (0, _Types.L)([new _il.ILNativeVariant(9, "IUnknown"), vt_UNKNOWN], (0, _Types.L)([new _il.ILNativeVariant(10, "IDispatch"), vt_DISPATCH], (0, _Types.L)([new _il.ILNativeVariant(11, "SafeArray"), vt_SAFEARRAY], (0, _Types.L)([new _il.ILNativeVariant(12, "Error"), vt_ERROR], (0, _Types.L)([new _il.ILNativeVariant(13, "HRESULT"), vt_HRESULT], (0, _Types.L)([new _il.ILNativeVariant(14, "CArray"), vt_CARRAY], (0, _Types.L)([new _il.ILNativeVariant(15, "UserDefined"), vt_USERDEFINED], (0, _Types.L)([new _il.ILNativeVariant(16, "Record"), vt_RECORD], (0, _Types.L)([new _il.ILNativeVariant(17, "FileTime"), vt_FILETIME], (0, _Types.L)([new _il.ILNativeVariant(18, "Blob"), vt_BLOB], (0, _Types.L)([new _il.ILNativeVariant(19, "Stream"), vt_STREAM], (0, _Types.L)([new _il.ILNativeVariant(20, "Storage"), vt_STORAGE], (0, _Types.L)([new _il.ILNativeVariant(21, "StreamedObject"), vt_STREAMED_OBJECT], (0, _Types.L)([new _il.ILNativeVariant(22, "StoredObject"), vt_STORED_OBJECT], (0, _Types.L)([new _il.ILNativeVariant(23, "BlobObject"), vt_BLOB_OBJECT], (0, _Types.L)([new _il.ILNativeVariant(24, "CF"), vt_CF], (0, _Types.L)([new _il.ILNativeVariant(25, "CLSID"), vt_CLSID], (0, _Types.L)([new _il.ILNativeVariant(26, "Void"), vt_VOID], (0, _Types.L)([new _il.ILNativeVariant(27, "Bool"), vt_BOOL], (0, _Types.L)([new _il.ILNativeVariant(28, "Int8"), vt_I1], (0, _Types.L)([new _il.ILNativeVariant(29, "Int16"), vt_I2], (0, _Types.L)([new _il.ILNativeVariant(30, "Int32"), vt_I4], (0, _Types.L)([new _il.ILNativeVariant(31, "Int64"), vt_I8], (0, _Types.L)([new _il.ILNativeVariant(32, "Single"), vt_R4], (0, _Types.L)([new _il.ILNativeVariant(33, "Double"), vt_R8], (0, _Types.L)([new _il.ILNativeVariant(34, "UInt8"), vt_UI1], (0, _Types.L)([new _il.ILNativeVariant(35, "UInt16"), vt_UI2], (0, _Types.L)([new _il.ILNativeVariant(36, "UInt32"), vt_UI4], (0, _Types.L)([new _il.ILNativeVariant(37, "UInt64"), vt_UI8], (0, _Types.L)([new _il.ILNativeVariant(38, "PTR"), vt_PTR], (0, _Types.L)([new _il.ILNativeVariant(42, "Int"), vt_INT], (0, _Types.L)([new _il.ILNativeVariant(43, "UInt"), vt_UINT], (0, _Types.L)())))))))))))))))))))))))))))))))))))))))));
});
exports.ILVariantTypeMap = ILVariantTypeMap;
const ILVariantTypeRevMap = new _Util.Lazy(function () {
  return (0, _List.map)(function (tupledArg$$1) {
    return [tupledArg$$1[1], tupledArg$$1[0]];
  }, (0, _illib.Lazy$$$force)(ILVariantTypeMap));
});
exports.ILVariantTypeRevMap = ILVariantTypeRevMap;
const ILSecurityActionMap = new _Util.Lazy(function () {
  return (0, _Types.L)([new _il.ILSecurityAction(0, "Request"), 1], (0, _Types.L)([new _il.ILSecurityAction(1, "Demand"), 2], (0, _Types.L)([new _il.ILSecurityAction(2, "Assert"), 3], (0, _Types.L)([new _il.ILSecurityAction(3, "Deny"), 4], (0, _Types.L)([new _il.ILSecurityAction(4, "PermitOnly"), 5], (0, _Types.L)([new _il.ILSecurityAction(5, "LinkCheck"), 6], (0, _Types.L)([new _il.ILSecurityAction(6, "InheritCheck"), 7], (0, _Types.L)([new _il.ILSecurityAction(7, "ReqMin"), 8], (0, _Types.L)([new _il.ILSecurityAction(8, "ReqOpt"), 9], (0, _Types.L)([new _il.ILSecurityAction(9, "ReqRefuse"), 10], (0, _Types.L)([new _il.ILSecurityAction(10, "PreJitGrant"), 11], (0, _Types.L)([new _il.ILSecurityAction(11, "PreJitDeny"), 12], (0, _Types.L)([new _il.ILSecurityAction(12, "NonCasDemand"), 13], (0, _Types.L)([new _il.ILSecurityAction(13, "NonCasLinkDemand"), 14], (0, _Types.L)([new _il.ILSecurityAction(14, "NonCasInheritance"), 15], (0, _Types.L)([new _il.ILSecurityAction(15, "LinkDemandChoice"), 16], (0, _Types.L)([new _il.ILSecurityAction(16, "InheritanceDemandChoice"), 17], (0, _Types.L)([new _il.ILSecurityAction(17, "DemandChoice"), 18], (0, _Types.L)()))))))))))))))))));
});
exports.ILSecurityActionMap = ILSecurityActionMap;
const ILSecurityActionRevMap = new _Util.Lazy(function () {
  return (0, _List.map)(function (tupledArg$$2) {
    return [tupledArg$$2[1], tupledArg$$2[0]];
  }, (0, _illib.Lazy$$$force)(ILSecurityActionMap));
});
exports.ILSecurityActionRevMap = ILSecurityActionRevMap;
const e_CorILMethod_TinyFormat = 2;
exports.e_CorILMethod_TinyFormat = e_CorILMethod_TinyFormat;
const e_CorILMethod_FatFormat = 3;
exports.e_CorILMethod_FatFormat = e_CorILMethod_FatFormat;
const e_CorILMethod_FormatMask = 3;
exports.e_CorILMethod_FormatMask = e_CorILMethod_FormatMask;
const e_CorILMethod_MoreSects = 8;
exports.e_CorILMethod_MoreSects = e_CorILMethod_MoreSects;
const e_CorILMethod_InitLocals = 16;
exports.e_CorILMethod_InitLocals = e_CorILMethod_InitLocals;
const e_CorILMethod_Sect_EHTable = 1;
exports.e_CorILMethod_Sect_EHTable = e_CorILMethod_Sect_EHTable;
const e_CorILMethod_Sect_FatFormat = 64;
exports.e_CorILMethod_Sect_FatFormat = e_CorILMethod_Sect_FatFormat;
const e_CorILMethod_Sect_MoreSects = 128;
exports.e_CorILMethod_Sect_MoreSects = e_CorILMethod_Sect_MoreSects;
const e_COR_ILEXCEPTION_CLAUSE_EXCEPTION = 0;
exports.e_COR_ILEXCEPTION_CLAUSE_EXCEPTION = e_COR_ILEXCEPTION_CLAUSE_EXCEPTION;
const e_COR_ILEXCEPTION_CLAUSE_FILTER = 1;
exports.e_COR_ILEXCEPTION_CLAUSE_FILTER = e_COR_ILEXCEPTION_CLAUSE_FILTER;
const e_COR_ILEXCEPTION_CLAUSE_FINALLY = 2;
exports.e_COR_ILEXCEPTION_CLAUSE_FINALLY = e_COR_ILEXCEPTION_CLAUSE_FINALLY;
const e_COR_ILEXCEPTION_CLAUSE_FAULT = 4;
exports.e_COR_ILEXCEPTION_CLAUSE_FAULT = e_COR_ILEXCEPTION_CLAUSE_FAULT;
const e_IMAGE_CEE_CS_CALLCONV_FASTCALL = 4;
exports.e_IMAGE_CEE_CS_CALLCONV_FASTCALL = e_IMAGE_CEE_CS_CALLCONV_FASTCALL;
const e_IMAGE_CEE_CS_CALLCONV_STDCALL = 2;
exports.e_IMAGE_CEE_CS_CALLCONV_STDCALL = e_IMAGE_CEE_CS_CALLCONV_STDCALL;
const e_IMAGE_CEE_CS_CALLCONV_THISCALL = 3;
exports.e_IMAGE_CEE_CS_CALLCONV_THISCALL = e_IMAGE_CEE_CS_CALLCONV_THISCALL;
const e_IMAGE_CEE_CS_CALLCONV_CDECL = 1;
exports.e_IMAGE_CEE_CS_CALLCONV_CDECL = e_IMAGE_CEE_CS_CALLCONV_CDECL;
const e_IMAGE_CEE_CS_CALLCONV_VARARG = 5;
exports.e_IMAGE_CEE_CS_CALLCONV_VARARG = e_IMAGE_CEE_CS_CALLCONV_VARARG;
const e_IMAGE_CEE_CS_CALLCONV_FIELD = 6;
exports.e_IMAGE_CEE_CS_CALLCONV_FIELD = e_IMAGE_CEE_CS_CALLCONV_FIELD;
const e_IMAGE_CEE_CS_CALLCONV_LOCAL_SIG = 7;
exports.e_IMAGE_CEE_CS_CALLCONV_LOCAL_SIG = e_IMAGE_CEE_CS_CALLCONV_LOCAL_SIG;
const e_IMAGE_CEE_CS_CALLCONV_PROPERTY = 8;
exports.e_IMAGE_CEE_CS_CALLCONV_PROPERTY = e_IMAGE_CEE_CS_CALLCONV_PROPERTY;
const e_IMAGE_CEE_CS_CALLCONV_GENERICINST = 10;
exports.e_IMAGE_CEE_CS_CALLCONV_GENERICINST = e_IMAGE_CEE_CS_CALLCONV_GENERICINST;
const e_IMAGE_CEE_CS_CALLCONV_GENERIC = 16;
exports.e_IMAGE_CEE_CS_CALLCONV_GENERIC = e_IMAGE_CEE_CS_CALLCONV_GENERIC;
const e_IMAGE_CEE_CS_CALLCONV_INSTANCE = 32;
exports.e_IMAGE_CEE_CS_CALLCONV_INSTANCE = e_IMAGE_CEE_CS_CALLCONV_INSTANCE;
const e_IMAGE_CEE_CS_CALLCONV_INSTANCE_EXPLICIT = 64;
exports.e_IMAGE_CEE_CS_CALLCONV_INSTANCE_EXPLICIT = e_IMAGE_CEE_CS_CALLCONV_INSTANCE_EXPLICIT;