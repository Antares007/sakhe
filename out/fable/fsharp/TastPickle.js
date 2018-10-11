"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ffailwith = ffailwith;
exports.PickledDataWithReferences$00601$$Fixup$$Z80199B6 = PickledDataWithReferences$00601$$Fixup$$Z80199B6;
exports.PickledDataWithReferences$00601$$OptionalFixup$$74A145F = PickledDataWithReferences$00601$$OptionalFixup$$74A145F;
exports.Table$00601$$get_AsArray = Table$00601$$get_AsArray;
exports.Table$00601$$get_Size = Table$00601$$get_Size;
exports.Table$00601$$Add$$2B595 = Table$00601$$Add$$2B595;
exports.Table$00601$$FindOrAdd$$2B595 = Table$00601$$FindOrAdd$$2B595;
exports.Table$00601$$$Create$$Z721C83C5 = Table$00601$$$Create$$Z721C83C5;
exports.new_itbl = new_itbl;
exports.NodeOutTable$00602$$get_Size = NodeOutTable$00602$$get_Size;
exports.pfailwith = pfailwith;
exports.NodeInTable$00602$$Get$$Z524259A4 = NodeInTable$00602$$Get$$Z524259A4;
exports.NodeInTable$00602$$get_Count = NodeInTable$00602$$get_Count;
exports.NodeInTable$00602$$$Create$$5A06A0ED = NodeInTable$00602$$$Create$$5A06A0ED;
exports.ufailwith = ufailwith;
exports.p_byte = p_byte;
exports.p_bool = p_bool;
exports.prim_p_int32 = prim_p_int32;
exports.p_int32 = p_int32;
exports.p_space = p_space;
exports.p_used_space1 = p_used_space1;
exports.p_bytes = p_bytes;
exports.p_prim_string = p_prim_string;
exports.p_int = p_int;
exports.p_int8 = p_int8;
exports.p_uint8 = p_uint8;
exports.p_int16 = p_int16;
exports.p_uint16 = p_uint16;
exports.p_uint32 = p_uint32;
exports.p_int64 = p_int64;
exports.p_uint64 = p_uint64;
exports.bits_of_float32 = bits_of_float32;
exports.bits_of_float = bits_of_float;
exports.p_single = p_single;
exports.p_double = p_double;
exports.p_ieee64 = p_ieee64;
exports.p_char = p_char;
exports.u_byte = u_byte;
exports.u_bool = u_bool;
exports.prim_u_int32 = prim_u_int32;
exports.u_int32 = u_int32;
exports.u_bytes = u_bytes;
exports.u_prim_string = u_prim_string;
exports.u_int = u_int;
exports.u_int8 = u_int8;
exports.u_uint8 = u_uint8;
exports.u_int16 = u_int16;
exports.u_uint16 = u_uint16;
exports.u_uint32 = u_uint32;
exports.u_int64 = u_int64;
exports.u_uint64 = u_uint64;
exports.float32_of_bits = float32_of_bits;
exports.float_of_bits = float_of_bits;
exports.u_single = u_single;
exports.u_double = u_double;
exports.u_ieee64 = u_ieee64;
exports.u_char = u_char;
exports.u_space = u_space;
exports.u_used_space1 = u_used_space1;
exports.p_osgn_ref = p_osgn_ref;
exports.p_osgn_decl = p_osgn_decl;
exports.u_osgn_ref = u_osgn_ref;
exports.u_osgn_decl = u_osgn_decl;
exports.encode_uniq = encode_uniq;
exports.lookup_uniq = lookup_uniq;
exports.p_array_core = p_array_core;
exports.p_array = p_array;
exports.p_array_ext = p_array_ext;
exports.p_list = p_list;
exports.p_list_ext = p_list_ext;
exports.p_List = p_List;
exports.p_wrap = p_wrap;
exports.p_option = p_option;
exports.p_lazy = p_lazy;
exports.p_maybe_lazy = p_maybe_lazy;
exports.p_hole = p_hole;
exports.p_hole2 = p_hole2;
exports.u_array_core = u_array_core;
exports.u_array = u_array;
exports.u_array_ext = u_array_ext;
exports.u_list = u_list;
exports.u_list_ext = u_list_ext;
exports.u_List = u_List;
exports.u_array_revi = u_array_revi;
exports.u_list_revi = u_list_revi;
exports.u_wrap = u_wrap;
exports.u_option = u_option;
exports.u_lazy = u_lazy;
exports.u_hole = u_hole;
exports.encode_string = encode_string;
exports.decode_string = decode_string;
exports.lookup_string = lookup_string;
exports.u_encoded_string = u_encoded_string;
exports.u_string = u_string;
exports.u_strings = u_strings;
exports.u_ints = u_ints;
exports.p_encoded_string = p_encoded_string;
exports.p_string = p_string;
exports.p_strings = p_strings;
exports.p_ints = p_ints;
exports.encode_ccuref = encode_ccuref;
exports.decode_ccuref = decode_ccuref;
exports.lookup_ccuref = lookup_ccuref;
exports.u_encoded_ccuref = u_encoded_ccuref;
exports.u_ccuref = u_ccuref;
exports.p_encoded_ccuref = p_encoded_ccuref;
exports.p_ccuref = p_ccuref;
exports.decode_pubpath = decode_pubpath;
exports.lookup_pubpath = lookup_pubpath;
exports.u_pubpath = u_pubpath;
exports.encode_pubpath = encode_pubpath;
exports.p_pubpath = p_pubpath;
exports.decode_nleref = decode_nleref;
exports.lookup_nleref = lookup_nleref;
exports.u_encoded_nleref = u_encoded_nleref;
exports.u_nleref = u_nleref;
exports.encode_nleref = encode_nleref;
exports.p_encoded_nleref = p_encoded_nleref;
exports.p_nleref = p_nleref;
exports.decode_simpletyp = decode_simpletyp;
exports.lookup_simpletyp = lookup_simpletyp;
exports.u_encoded_simpletyp = u_encoded_simpletyp;
exports.u_simpletyp = u_simpletyp;
exports.encode_simpletyp = encode_simpletyp;
exports.p_encoded_simpletyp = p_encoded_simpletyp;
exports.p_simpletyp = p_simpletyp;
exports.pickleObjWithDanglingCcus = pickleObjWithDanglingCcus;
exports.check = check;
exports.unpickleObjWithDanglingCcus = unpickleObjWithDanglingCcus;
exports.p_ILPublicKey = p_ILPublicKey;
exports.p_ILVersion = p_ILVersion;
exports.p_ILModuleRef = p_ILModuleRef;
exports.p_ILAssemblyRef = p_ILAssemblyRef;
exports.p_ILScopeRef = p_ILScopeRef;
exports.u_ILPublicKey = u_ILPublicKey;
exports.u_ILVersion = u_ILVersion;
exports.u_ILModuleRef = u_ILModuleRef;
exports.u_ILAssemblyRef = u_ILAssemblyRef;
exports.u_ILScopeRef = u_ILScopeRef;
exports.p_ILHasThis = p_ILHasThis;
exports.p_ILArrayShape = p_ILArrayShape;
exports.p_ILType = p_ILType;
exports.p_ILTypes = p_ILTypes;
exports.p_ILBasicCallConv = p_ILBasicCallConv;
exports.p_ILCallConv = p_ILCallConv;
exports.p_ILCallSig = p_ILCallSig;
exports.p_ILTypeRef = p_ILTypeRef;
exports.p_ILTypeSpec = p_ILTypeSpec;
exports.u_ILBasicCallConv = u_ILBasicCallConv;
exports.u_ILHasThis = u_ILHasThis;
exports.u_ILCallConv = u_ILCallConv;
exports.u_ILTypeRef = u_ILTypeRef;
exports.u_ILArrayShape = u_ILArrayShape;
exports.u_ILType = u_ILType;
exports.u_ILTypes = u_ILTypes;
exports.u_ILCallSig = u_ILCallSig;
exports.u_ILTypeSpec = u_ILTypeSpec;
exports.p_ILMethodRef = p_ILMethodRef;
exports.p_ILFieldRef = p_ILFieldRef;
exports.p_ILMethodSpec = p_ILMethodSpec;
exports.p_ILFieldSpec = p_ILFieldSpec;
exports.p_ILBasicType = p_ILBasicType;
exports.p_ILVolatility = p_ILVolatility;
exports.p_ILReadonly = p_ILReadonly;
exports.u_ILMethodRef = u_ILMethodRef;
exports.u_ILFieldRef = u_ILFieldRef;
exports.u_ILMethodSpec = u_ILMethodSpec;
exports.u_ILFieldSpec = u_ILFieldSpec;
exports.u_ILBasicType = u_ILBasicType;
exports.u_ILVolatility = u_ILVolatility;
exports.u_ILReadonly = u_ILReadonly;
exports.encode_instr = encode_instr;
exports.isNoArgInstr = isNoArgInstr;
exports.p_ILInstr = p_ILInstr;
exports.u_ILInstr = u_ILInstr;
exports.p_Map = p_Map;
exports.p_qlist = p_qlist;
exports.p_namemap = p_namemap;
exports.u_Map = u_Map;
exports.u_qlist = u_qlist;
exports.u_namemap = u_namemap;
exports.p_pos = p_pos;
exports.p_range = p_range;
exports.p_dummy_range = p_dummy_range;
exports.p_ident = p_ident;
exports.p_xmldoc = p_xmldoc;
exports.u_pos = u_pos;
exports.u_range = u_range;
exports.u_dummy_range = u_dummy_range;
exports.u_ident = u_ident;
exports.u_xmldoc = u_xmldoc;
exports.p_local_item_ref = p_local_item_ref;
exports.p_tcref = p_tcref;
exports.p_ucref = p_ucref;
exports.p_rfref = p_rfref;
exports.p_tpref = p_tpref;
exports.u_local_item_ref = u_local_item_ref;
exports.u_tcref = u_tcref;
exports.u_ucref = u_ucref;
exports.u_rfref = u_rfref;
exports.u_tpref = u_tpref;
exports.p_tys = p_tys;
exports.checkForInRefStructThisArg = checkForInRefStructThisArg;
exports.p_nonlocal_val_ref = p_nonlocal_val_ref;
exports.p_vref = p_vref;
exports.p_vrefs = p_vrefs;
exports.u_tys = u_tys;
exports.u_nonlocal_val_ref = u_nonlocal_val_ref;
exports.u_vref = u_vref;
exports.u_vrefs = u_vrefs;
exports.p_kind = p_kind;
exports.p_member_kind = p_member_kind;
exports.u_kind = u_kind;
exports.u_member_kind = u_member_kind;
exports.p_MemberFlags = p_MemberFlags;
exports.u_MemberFlags = u_MemberFlags;
exports.p_trait_sln = p_trait_sln;
exports.p_trait = p_trait;
exports.u_trait_sln = u_trait_sln;
exports.u_trait = u_trait;
exports.p_rational = p_rational;
exports.p_measure_con = p_measure_con;
exports.p_measure_var = p_measure_var;
exports.p_measure_one = p_measure_one;
exports.p_measure_varcon = p_measure_varcon;
exports.p_measure_pospower = p_measure_pospower;
exports.p_measure_intpower = p_measure_intpower;
exports.p_measure_power = p_measure_power;
exports.p_normalized_measure = p_normalized_measure;
exports.p_measure_expr = p_measure_expr;
exports.u_rational = u_rational;
exports.u_measure_expr = u_measure_expr;
exports.p_tyar_constraint = p_tyar_constraint;
exports.p_tyar_constraints = p_tyar_constraints;
exports.u_tyar_constraint = u_tyar_constraint;
exports.u_tyar_constraints = u_tyar_constraints;
exports.p_tyar_spec_data = p_tyar_spec_data;
exports.p_tyar_spec = p_tyar_spec;
exports.p_tyar_specs = p_tyar_specs;
exports.u_tyar_spec_data = u_tyar_spec_data;
exports.u_tyar_spec = u_tyar_spec;
exports.u_tyar_specs = u_tyar_specs;
exports.p_ArgReprInfo = p_ArgReprInfo;
exports.p_TyparReprInfo = p_TyparReprInfo;
exports.p_ValReprInfo = p_ValReprInfo;
exports.u_ArgReprInfo = u_ArgReprInfo;
exports.u_TyparReprInfo = u_TyparReprInfo;
exports.u_ValReprInfo = u_ValReprInfo;
exports.p_ranges = p_ranges;
exports.p_istype = p_istype;
exports.p_cpath = p_cpath;
exports.u_ranges = u_ranges;
exports.u_istype = u_istype;
exports.u_cpath = u_cpath;
exports.dummy = dummy;
exports.p_tycon_repr = p_tycon_repr;
exports.p_tycon_objmodel_data = p_tycon_objmodel_data;
exports.p_attribs_ext = p_attribs_ext;
exports.p_unioncase_spec = p_unioncase_spec;
exports.p_exnc_spec_data = p_exnc_spec_data;
exports.p_exnc_repr = p_exnc_repr;
exports.p_exnc_spec = p_exnc_spec;
exports.p_access = p_access;
exports.p_recdfield_spec = p_recdfield_spec;
exports.p_rfield_table = p_rfield_table;
exports.p_entity_spec_data = p_entity_spec_data;
exports.p_tcaug = p_tcaug;
exports.p_tycon_spec = p_tycon_spec;
exports.p_parentref = p_parentref;
exports.p_attribkind = p_attribkind;
exports.p_attrib = p_attrib;
exports.p_attrib_expr = p_attrib_expr;
exports.p_attrib_arg = p_attrib_arg;
exports.p_member_info = p_member_info;
exports.p_tycon_objmodel_kind = p_tycon_objmodel_kind;
exports.p_mustinline = p_mustinline;
exports.p_basethis = p_basethis;
exports.p_vrefFlags = p_vrefFlags;
exports.p_ValData = p_ValData;
exports.p_Val = p_Val;
exports.p_modul_typ = p_modul_typ;
exports.u_tycon_repr = u_tycon_repr;
exports.u_tycon_objmodel_data = u_tycon_objmodel_data;
exports.u_attribs_ext = u_attribs_ext;
exports.u_unioncase_spec = u_unioncase_spec;
exports.u_exnc_spec_data = u_exnc_spec_data;
exports.u_exnc_repr = u_exnc_repr;
exports.u_exnc_spec = u_exnc_spec;
exports.u_access = u_access;
exports.u_recdfield_spec = u_recdfield_spec;
exports.u_rfield_table = u_rfield_table;
exports.u_entity_spec_data = u_entity_spec_data;
exports.u_tcaug = u_tcaug;
exports.u_tycon_spec = u_tycon_spec;
exports.u_parentref = u_parentref;
exports.u_attribkind = u_attribkind;
exports.u_attrib = u_attrib;
exports.u_attrib_expr = u_attrib_expr;
exports.u_attrib_arg = u_attrib_arg;
exports.u_member_info = u_member_info;
exports.u_tycon_objmodel_kind = u_tycon_objmodel_kind;
exports.u_mustinline = u_mustinline;
exports.u_basethis = u_basethis;
exports.u_vrefFlags = u_vrefFlags;
exports.u_ValData = u_ValData;
exports.u_Val = u_Val;
exports.u_modul_typ = u_modul_typ;
exports.p_const = p_const;
exports.u_const = u_const;
exports.p_dtree = p_dtree;
exports.p_dtree_case = p_dtree_case;
exports.p_dtree_discrim = p_dtree_discrim;
exports.p_target = p_target;
exports.p_bind = p_bind;
exports.p_lval_op_kind = p_lval_op_kind;
exports.p_recdInfo = p_recdInfo;
exports.u_dtree = u_dtree;
exports.u_dtree_case = u_dtree_case;
exports.u_dtree_discrim = u_dtree_discrim;
exports.u_target = u_target;
exports.u_bind = u_bind;
exports.u_lval_op_kind = u_lval_op_kind;
exports.p_op = p_op;
exports.u_op = u_op;
exports.p_expr = p_expr;
exports.u_expr = u_expr;
exports.p_static_optimization_constraint = p_static_optimization_constraint;
exports.p_slotparam = p_slotparam;
exports.p_slotsig = p_slotsig;
exports.p_method = p_method;
exports.p_methods = p_methods;
exports.p_intf = p_intf;
exports.p_intfs = p_intfs;
exports.u_static_optimization_constraint = u_static_optimization_constraint;
exports.u_slotparam = u_slotparam;
exports.u_slotsig = u_slotsig;
exports.u_method = u_method;
exports.u_methods = u_methods;
exports.u_intf = u_intf;
exports.u_intfs = u_intfs;
exports.pickleModuleOrNamespace = pickleModuleOrNamespace;
exports.pickleCcuInfo = pickleCcuInfo;
exports.unpickleModuleOrNamespace = unpickleModuleOrNamespace;
exports.unpickleCcuInfo = unpickleCcuInfo;
exports.fill_u_Vals = exports.u_Vals = exports.fill_u_constraints = exports.u_constraints = exports.fill_u_Exprs = exports.u_Exprs = exports.fill_u_targets = exports.u_targets = exports.fill_u_binds = exports.u_binds = exports.fill_p_Vals = exports.p_Vals = exports.fill_p_constraints = exports.p_constraints = exports.fill_p_Exprs = exports.p_Exprs = exports.fill_p_targets = exports.p_targets = exports.fill_p_binds = exports.p_binds = exports.fill_p_Expr_hole = exports.p_expr_fwd = exports.fill_u_Expr_hole = exports.u_expr_fwd = exports.fill_u_attribs = exports.u_attribs = exports.fill_u_ty = exports.u_ty = exports.fill_p_attribs = exports.p_attribs = exports.p_ty = exports.fill_p_ty2 = exports.p_ty2 = exports.decode_tab = exports.decoders = exports.encode_table = exports.simple_instrs = exports.p_encoded_pubpath = exports.u_encoded_pubpath = exports.space = exports.ReaderState = exports.NodeInTable$00602 = exports.WriterState = exports.NodeOutTable$00602 = exports.InputTable$00601 = exports.Table$00601 = exports.PickledDataWithReferences$00601 = exports.verbose = void 0;

var _FSComp = require("../codegen/FSComp");

var _Types = require("../fable-core.2.0.3/Types");

var _tast = require("./tast");

var _List = require("../fable-core.2.0.3/List");

var _Array = require("../fable-core.2.0.3/Array");

var _Util = require("../fable-core.2.0.3/Util");

var _FSharp = require("../fable-core.2.0.3/FSharp.Collections");

var _Map = require("../fable-core.2.0.3/Map");

var _bytes = require("../absil/bytes");

var _lib = require("./lib");

var _Encoding = require("../fable-core.2.0.3/Encoding");

var _Long = require("../fable-core.2.0.3/Long");

var _BitConverter = require("../fable-core.2.0.3/BitConverter");

var _ErrorLogger = require("./ErrorLogger");

var _range = require("./range");

var _Option = require("../fable-core.2.0.3/Option");

var _illib = require("../absil/illib");

var _il = require("../absil/il");

var _String = require("../fable-core.2.0.3/String");

var _QueueList = require("./QueueList");

var _ast = require("./ast");

var _TastOps = require("./TastOps");

var _rational = require("./rational");

var _FSharp2 = require("../fable-core.2.0.3/FSharp.Core");

var _ResizeArray = require("../utils/ResizeArray");

var _adapters = require("../fcs-fable/adapters");

const verbose = false;
exports.verbose = verbose;

function ffailwith(fileName, str) {
  const msg = (0, _FSComp.SR$$$pickleErrorReadingWritingMetadata$$Z384F8060)(fileName, str);
  throw new Error(msg);
}

const PickledDataWithReferences$00601 = (0, _Types.declare)(function PickledDataWithReferences$00601(arg1, arg2) {
  this.RawData = arg1;
  this.FixupThunks = arg2;
}, _Types.Record);
exports.PickledDataWithReferences$00601 = PickledDataWithReferences$00601;

function PickledDataWithReferences$00601$$Fixup$$Z80199B6(x, loader) {
  (0, _List.iterate)(function action(reqd) {
    (0, _tast.CcuThunk$$Fixup$$Z7669BDF9)(reqd, loader((0, _tast.CcuThunk$$get_AssemblyName)(reqd)));
  }, x.FixupThunks);
  return x.RawData;
}

function PickledDataWithReferences$00601$$OptionalFixup$$74A145F(x$$1, loader$$1) {
  (0, _List.iterate)(function action$$1(reqd$$1) {
    const matchValue = loader$$1((0, _tast.CcuThunk$$get_AssemblyName)(reqd$$1));

    if (matchValue == null) {
      (0, _tast.CcuThunk$$FixupOrphaned)(reqd$$1);
    } else {
      const loaded = matchValue;
      (0, _tast.CcuThunk$$Fixup$$Z7669BDF9)(reqd$$1, loaded);
    }
  }, x$$1.FixupThunks);
  return x$$1.RawData;
}

const Table$00601 = (0, _Types.declare)(function Table$00601(arg1, arg2, arg3, arg4) {
  this.name = arg1;
  this.tbl = arg2;
  this.rows = arg3;
  this.count = arg4 | 0;
}, _Types.Record);
exports.Table$00601 = Table$00601;

function Table$00601$$get_AsArray(tbl) {
  return (0, _Array.ofSeq)(tbl.rows, Array);
}

function Table$00601$$get_Size(tbl$$1) {
  return (0, _Util.count)(tbl$$1.rows);
}

function Table$00601$$Add$$2B595(tbl$$2, x$$2) {
  const n = tbl$$2.count | 0;
  tbl$$2.count = tbl$$2.count + 1;
  tbl$$2.tbl.set(x$$2, n);
  tbl$$2.rows.push(x$$2);
  return n | 0;
}

function Table$00601$$FindOrAdd$$2B595(tbl$$3, x$$3) {
  const patternInput = (0, _Util.tryGetValue)(tbl$$3.tbl, x$$3, 0);

  if (patternInput[0]) {
    return patternInput[1] | 0;
  } else {
    return Table$00601$$Add$$2B595(tbl$$3, x$$3) | 0;
  }
}

function Table$00601$$$Create$$Z721C83C5(n$$1) {
  return new Table$00601(n$$1, (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp.HashIdentity$$$Structural)())), [], 0);
}

const InputTable$00601 = (0, _Types.declare)(function InputTable$00601(arg1, arg2) {
  this.itbl_name = arg1;
  this.itbl_rows = arg2;
}, _Types.Record);
exports.InputTable$00601 = InputTable$00601;

function new_itbl(n$$2, r) {
  return new InputTable$00601(n$$2, r);
}

const NodeOutTable$00602 = (0, _Types.declare)(function NodeOutTable$00602(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.NodeStamp = arg1;
  this.NodeName = arg2;
  this.GetRange = arg3;
  this.Deref = arg4;
  this.Name = arg5;
  this.Table = arg6;
}, _Types.Record);
exports.NodeOutTable$00602 = NodeOutTable$00602;

function NodeOutTable$00602$$get_Size(x$$4) {
  return Table$00601$$get_Size(x$$4.Table);
}

const WriterState = (0, _Types.declare)(function WriterState(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13) {
  this.os = arg1;
  this.oscope = arg2;
  this.occus = arg3;
  this.otycons = arg4;
  this.otypars = arg5;
  this.ovals = arg6;
  this.ostrings = arg7;
  this.opubpaths = arg8;
  this.onlerefs = arg9;
  this.osimpletys = arg10;
  this.oglobals = arg11;
  this.ofile = arg12;
  this.oInMem = arg13;
}, _Types.Record);
exports.WriterState = WriterState;

function pfailwith(st, str$$1) {
  return ffailwith(st.ofile, str$$1);
}

const NodeInTable$00602 = (0, _Types.declare)(function NodeInTable$00602(arg1, arg2, arg3, arg4) {
  this.LinkNode = arg1;
  this.IsLinked = arg2;
  this.Name = arg3;
  this.Nodes = arg4;
}, _Types.Record);
exports.NodeInTable$00602 = NodeInTable$00602;

function NodeInTable$00602$$Get$$Z524259A4(x$$5, n$$3) {
  return x$$5.Nodes[n$$3];
}

function NodeInTable$00602$$get_Count(x$$6) {
  return x$$6.Nodes.length;
}

function NodeInTable$00602$$$Create$$5A06A0ED(mkEmpty, lnk, isLinked, nm, n$$4) {
  return new NodeInTable$00602(lnk, isLinked, nm, (0, _Array.initialize)(n$$4, function (_i) {
    return mkEmpty();
  }, Array));
}

const ReaderState = (0, _Types.declare)(function ReaderState(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12) {
  this.is = arg1;
  this.iilscope = arg2;
  this.iccus = arg3;
  this.itycons = arg4;
  this.itypars = arg5;
  this.ivals = arg6;
  this.istrings = arg7;
  this.ipubpaths = arg8;
  this.inlerefs = arg9;
  this.isimpletys = arg10;
  this.ifile = arg11;
  this.iILModule = arg12;
}, _Types.Record);
exports.ReaderState = ReaderState;

function ufailwith(st$$1, str$$2) {
  return ffailwith(st$$1.ifile, str$$2);
}

function p_byte(b, st$$2) {
  (0, _bytes.ByteBuffer$$EmitIntAsByte$$Z524259A4)(st$$2.os, b);
}

function p_bool(b$$1, st$$3) {
  p_byte(b$$1 ? 1 : 0, st$$3);
}

function prim_p_int32(i, st$$4) {
  p_byte((0, _lib.Bits$$$b0)(i), st$$4);
  p_byte((0, _lib.Bits$$$b1)(i), st$$4);
  p_byte((0, _lib.Bits$$$b2)(i), st$$4);
  p_byte((0, _lib.Bits$$$b3)(i), st$$4);
}

function p_int32(n$$5, st$$5) {
  if (n$$5 >= 0 ? n$$5 <= 127 : false) {
    p_byte((0, _lib.Bits$$$b0)(n$$5), st$$5);
  } else if (n$$5 >= 128 ? n$$5 <= 16383 : false) {
    p_byte(128 | n$$5 >> 8, st$$5);
    p_byte(n$$5 & 255, st$$5);
  } else {
    p_byte(255, st$$5);
    prim_p_int32(n$$5, st$$5);
  }
}

const space = null;
exports.space = space;

function p_space(n$$6, unitVar1$$4, st$$6) {
  for (let i$$1 = 0; i$$1 <= n$$6 - 1; i$$1++) {
    p_byte(0, st$$6);
  }
}

function p_used_space1(f, st$$7) {
  p_byte(1, st$$7);
  f(st$$7);
  p_space(1, space, st$$7);
}

function p_bytes(s, st$$8) {
  const len = s.length | 0;
  p_int32(len, st$$8);
  (0, _bytes.ByteBuffer$$EmitBytes$$6C95DA22)(st$$8.os, s);
}

function p_prim_string(s$$1, st$$9) {
  const bytes = (0, _Encoding.get_UTF8)().getBytes(s$$1);
  const len$$1 = bytes.length | 0;
  p_int32(len$$1, st$$9);
  (0, _bytes.ByteBuffer$$EmitBytes$$6C95DA22)(st$$9.os, bytes);
}

function p_int(c, st$$10) {
  p_int32(c, st$$10);
}

function p_int8(i$$2, st$$11) {
  p_int32(i$$2, st$$11);
}

function p_uint8(i$$3, st$$12) {
  p_byte(~~i$$3, st$$12);
}

function p_int16(i$$4, st$$13) {
  p_int32(i$$4, st$$13);
}

function p_uint16(x$$7, st$$14) {
  p_int32(~~x$$7, st$$14);
}

function p_uint32(x$$8, st$$15) {
  p_int32(~~x$$8, st$$15);
}

function p_int64(i$$5, st$$16) {
  p_int32(~~(0, _Long.toIntNumber)((0, _Long.op_BitwiseAnd)(i$$5, (0, _Long.fromBits)(4294967295, 0, false))), st$$16);
  p_int32(~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)(i$$5, 32)), st$$16);
}

function p_uint64(x$$9, st$$17) {
  p_int64((0, _Long.fromValue)(x$$9, false), st$$17);
}

function bits_of_float32(x$$10) {
  return (0, _BitConverter.toInt32)((0, _BitConverter.getBytesSingle)(x$$10), 0);
}

function bits_of_float(x$$11) {
  return (0, _BitConverter.doubleToInt64Bits)(x$$11);
}

function p_single(i$$6, st$$18) {
  p_int32(bits_of_float32(i$$6), st$$18);
}

function p_double(i$$7, st$$19) {
  p_int64(bits_of_float(i$$7), st$$19);
}

function p_ieee64(i$$8, st$$20) {
  p_int64(bits_of_float(i$$8), st$$20);
}

function p_char(i$$9, st$$21) {
  p_uint16(i$$9.charCodeAt(0) & 0xFFFF, st$$21);
}

function u_byte(st$$22) {
  return ~~(0, _bytes.ByteStream$$ReadByte)(st$$22.is);
}

function u_bool(st$$23) {
  const b$$2 = u_byte(st$$23) | 0;
  return b$$2 === 1;
}

function prim_u_int32(st$$24) {
  const b0 = u_byte(st$$24) | 0;
  const b1 = u_byte(st$$24) | 0;
  const b2 = u_byte(st$$24) | 0;
  const b3 = u_byte(st$$24) | 0;
  return b0 | b1 << 8 | b2 << 16 | b3 << 24 | 0;
}

function u_int32(st$$25) {
  const b0$$1 = u_byte(st$$25) | 0;

  if (b0$$1 <= 127) {
    return b0$$1 | 0;
  } else if (b0$$1 <= 191) {
    const b0$$2 = b0$$1 & 127 | 0;
    const b1$$1 = u_byte(st$$25) | 0;
    return b0$$2 << 8 | b1$$1 | 0;
  } else {
    return prim_u_int32(st$$25) | 0;
  }
}

function u_bytes(st$$26) {
  const n$$7 = u_int32(st$$26) | 0;
  return (0, _bytes.ByteStream$$ReadBytes$$Z524259A4)(st$$26.is, n$$7);
}

function u_prim_string(st$$27) {
  const len$$2 = u_int32(st$$27) | 0;
  return (0, _bytes.ByteStream$$ReadUtf8String$$Z524259A4)(st$$27.is, len$$2);
}

function u_int(st$$28) {
  return u_int32(st$$28);
}

function u_int8(st$$29) {
  return (u_int32(st$$29) + 0x80 & 0xFF) - 0x80;
}

function u_uint8(st$$30) {
  return u_byte(st$$30) & 0xFF;
}

function u_int16(st$$31) {
  return (u_int32(st$$31) + 0x8000 & 0xFFFF) - 0x8000;
}

function u_uint16(st$$32) {
  return u_int32(st$$32) & 0xFFFF;
}

function u_uint32(st$$33) {
  return u_int32(st$$33) >>> 0;
}

function u_int64(st$$34) {
  const b1$$2 = (0, _Long.op_BitwiseAnd)((0, _Long.fromInteger)(u_int32(st$$34), false, 2), (0, _Long.fromBits)(4294967295, 0, false));
  const b2$$1 = (0, _Long.fromInteger)(u_int32(st$$34), false, 2);
  return (0, _Long.op_BitwiseOr)(b1$$2, (0, _Long.op_LeftShift)(b2$$1, 32));
}

function u_uint64(st$$35) {
  return (0, _Long.fromValue)(u_int64(st$$35), true);
}

function float32_of_bits(x$$12) {
  return (0, _BitConverter.toSingle)((0, _BitConverter.getBytesInt32)(x$$12), 0);
}

function float_of_bits(x$$13) {
  return (0, _BitConverter.int64BitsToDouble)(x$$13);
}

function u_single(st$$36) {
  return float32_of_bits(u_int32(st$$36));
}

function u_double(st$$37) {
  return float_of_bits(u_int64(st$$37));
}

function u_ieee64(st$$38) {
  return float_of_bits(u_int64(st$$38));
}

function u_char(st$$39) {
  return String.fromCharCode(~~u_uint16(st$$39));
}

function u_space(n$$8, st$$40) {
  for (let i$$10 = 0; i$$10 <= n$$8 - 1; i$$10++) {
    const b$$3 = u_byte(st$$40) | 0;

    if (b$$3 !== 0) {
      (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$pickleUnexpectedNonZero$$Z721C83C5)(st$$40.ifile), _range.range0));
    }
  }
}

function u_used_space1(f$$1, st$$41) {
  const b$$4 = u_byte(st$$41) | 0;

  switch (b$$4) {
    case 0:
      {
        return null;
      }

    case 1:
      {
        const x$$14 = f$$1(st$$41);
        u_space(1, st$$41);
        return (0, _Option.some)(x$$14);
      }

    default:
      {
        (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$pickleUnexpectedNonZero$$Z721C83C5)(st$$41.ifile), _range.range0));
        return null;
      }
  }
}

function p_osgn_ref(_ctxt, outMap, x$$15, st$$42) {
  const idx = Table$00601$$FindOrAdd$$2B595(outMap.Table, outMap.NodeStamp(x$$15)) | 0;
  p_int(idx, st$$42);
}

function p_osgn_decl(outMap$$1, p, x$$16, st$$43) {
  var tupledArg;
  const stamp = outMap$$1.NodeStamp(x$$16);
  const idx$$1 = Table$00601$$FindOrAdd$$2B595(outMap$$1.Table, stamp) | 0;
  (tupledArg = [idx$$1, outMap$$1.Deref(x$$16)], function (st$$44) {
    p_int(tupledArg[0], st$$44);
    p(tupledArg[1], st$$44);
  })(st$$43);
}

function u_osgn_ref(inMap, st$$45) {
  const n$$9 = u_int(st$$45) | 0;

  if (n$$9 < 0 ? true : n$$9 >= NodeInTable$00602$$get_Count(inMap)) {
    ufailwith(st$$45, "u_osgn_ref: out of range, table = " + inMap.Name + ", n = " + (0, _Util.int32ToString)(n$$9));
  }

  return NodeInTable$00602$$Get$$Z524259A4(inMap, n$$9);
}

function u_osgn_decl(inMap$$1, u, st$$46) {
  let patternInput$$1;
  const a$$1 = u_int(st$$46) | 0;
  const b$$6 = u(st$$46);
  patternInput$$1 = [a$$1, b$$6];
  const res$$1 = NodeInTable$00602$$Get$$Z524259A4(inMap$$1, patternInput$$1[0]);
  inMap$$1.LinkNode(res$$1, patternInput$$1[1]);
  return res$$1;
}

function encode_uniq(tbl$$4, key) {
  return Table$00601$$FindOrAdd$$2B595(tbl$$4, key);
}

function lookup_uniq(st$$48, tbl$$5, n$$10) {
  const arr = tbl$$5.itbl_rows;

  if (n$$10 < 0 ? true : n$$10 >= arr.length) {
    ufailwith(st$$48, "lookup_uniq in table " + tbl$$5.itbl_name + " out of range, n = " + (0, _Util.int32ToString)(n$$10) + ", sizeof(tab) = " + (0, _Util.int32ToString)(arr.length));
  }

  return arr[n$$10];
}

function p_array_core(f$$2, x$$17, st$$49) {
  for (let i$$11 = 0; i$$11 <= x$$17.length - 1; i$$11++) {
    f$$2(x$$17[i$$11], st$$49);
  }
}

function p_array(f$$3) {
  return function (x$$18) {
    return function (st$$50) {
      p_int(x$$18.length, st$$50);
      p_array_core(f$$3, x$$18, st$$50);
    };
  };
}

function p_array_ext(extraf, f$$4, x$$19, st$$51) {
  const n$$11 = x$$19.length | 0;
  const n$$12 = (extraf != null ? n$$11 | -2147483648 : n$$11) | 0;
  p_int(n$$12, st$$51);

  if (extraf != null) {
    const f$$5 = extraf;
    f$$5(st$$51);
  }

  p_array_core(f$$4, x$$19, st$$51);
}

function p_list(f$$6, x$$20, st$$52) {
  p_array(f$$6)((0, _Array.ofList)(x$$20, Array))(st$$52);
}

function p_list_ext(extraf$$1, f$$7, x$$21, st$$53) {
  p_array_ext(extraf$$1, f$$7, (0, _Array.ofList)(x$$21, Array), st$$53);
}

function p_List(f$$8, x$$22, st$$54) {
  p_list(f$$8, x$$22, st$$54);
}

function p_wrap(f$$9, p$$1, x$$23, st$$55) {
  p$$1(f$$9(x$$23), st$$55);
}

function p_option(f$$10, x$$24, st$$56) {
  if (x$$24 != null) {
    const h = (0, _Option.value)(x$$24);
    p_byte(1, st$$56);
    f$$10(h, st$$56);
  } else {
    p_byte(0, st$$56);
  }
}

function p_lazy_impl(p$$2, v, st$$57) {
  const fixupPos1 = (0, _bytes.ByteBuffer$$get_Position)(st$$57.os) | 0;
  prim_p_int32(0, st$$57);
  const fixupPos2 = (0, _bytes.ByteBuffer$$get_Position)(st$$57.os) | 0;
  prim_p_int32(0, st$$57);
  const fixupPos3 = (0, _bytes.ByteBuffer$$get_Position)(st$$57.os) | 0;
  prim_p_int32(0, st$$57);
  const fixupPos4 = (0, _bytes.ByteBuffer$$get_Position)(st$$57.os) | 0;
  prim_p_int32(0, st$$57);
  const fixupPos5 = (0, _bytes.ByteBuffer$$get_Position)(st$$57.os) | 0;
  prim_p_int32(0, st$$57);
  const fixupPos6 = (0, _bytes.ByteBuffer$$get_Position)(st$$57.os) | 0;
  prim_p_int32(0, st$$57);
  const fixupPos7 = (0, _bytes.ByteBuffer$$get_Position)(st$$57.os) | 0;
  prim_p_int32(0, st$$57);
  const idx1 = (0, _bytes.ByteBuffer$$get_Position)(st$$57.os) | 0;
  const otyconsIdx1 = NodeOutTable$00602$$get_Size(st$$57.otycons) | 0;
  const otyparsIdx1 = NodeOutTable$00602$$get_Size(st$$57.otypars) | 0;
  const ovalsIdx1 = NodeOutTable$00602$$get_Size(st$$57.ovals) | 0;
  p$$2(v, st$$57);
  const idx2 = (0, _bytes.ByteBuffer$$get_Position)(st$$57.os) | 0;
  (0, _bytes.ByteBuffer$$FixupInt32)(st$$57.os, fixupPos1, idx2 - idx1);
  const otyconsIdx2 = NodeOutTable$00602$$get_Size(st$$57.otycons) | 0;
  const otyparsIdx2 = NodeOutTable$00602$$get_Size(st$$57.otypars) | 0;
  const ovalsIdx2 = NodeOutTable$00602$$get_Size(st$$57.ovals) | 0;
  (0, _bytes.ByteBuffer$$FixupInt32)(st$$57.os, fixupPos2, otyconsIdx1);
  (0, _bytes.ByteBuffer$$FixupInt32)(st$$57.os, fixupPos3, otyconsIdx2);
  (0, _bytes.ByteBuffer$$FixupInt32)(st$$57.os, fixupPos4, otyparsIdx1);
  (0, _bytes.ByteBuffer$$FixupInt32)(st$$57.os, fixupPos5, otyparsIdx2);
  (0, _bytes.ByteBuffer$$FixupInt32)(st$$57.os, fixupPos6, ovalsIdx1);
  (0, _bytes.ByteBuffer$$FixupInt32)(st$$57.os, fixupPos7, ovalsIdx2);
}

function p_lazy(p$$3) {
  return function (x$$25) {
    return function (st$$58) {
      p_lazy_impl(p$$3, (0, _illib.Lazy$$$force)(x$$25), st$$58);
    };
  };
}

function p_maybe_lazy(p$$4, x$$26, st$$59) {
  p_lazy_impl(p$$4, (0, _tast.MaybeLazy$00601$$get_Value)(x$$26), st$$59);
}

function p_hole() {
  const h$$1 = new _Types.FSharpRef(null);
  return [function (f$$11) {
    h$$1.contents = (0, _Util.curry)(2, f$$11);
  }, function (x$$27) {
    return function (st$$60) {
      const matchValue$$1 = h$$1.contents;

      if (matchValue$$1 == null) {
        pfailwith(st$$60, "p_hole: unfilled hole");
      } else {
        const f$$12 = matchValue$$1;
        f$$12(x$$27)(st$$60);
      }
    };
  }];
}

function p_hole2() {
  const h$$2 = new _Types.FSharpRef(null);
  return [function (f$$13) {
    h$$2.contents = (0, _Util.curry)(3, f$$13);
  }, function (arg) {
    return function (x$$28) {
      return function (st$$61) {
        const matchValue$$2 = h$$2.contents;

        if (matchValue$$2 == null) {
          pfailwith(st$$61, "p_hole2: unfilled hole");
        } else {
          const f$$14 = matchValue$$2;
          f$$14(arg)(x$$28)(st$$61);
        }
      };
    };
  }];
}

function u_array_core(f$$15, n$$13, st$$62) {
  const res$$2 = (0, _Array.fill)(new Array(n$$13), 0, n$$13, null);

  for (let i$$12 = 0; i$$12 <= n$$13 - 1; i$$12++) {
    res$$2[i$$12] = f$$15(st$$62);
  }

  return res$$2;
}

function u_array(f$$16) {
  return function (st$$63) {
    const n$$14 = u_int(st$$63) | 0;
    return u_array_core(f$$16, n$$14, st$$63);
  };
}

function u_array_ext(extraf$$2, f$$17, st$$64) {
  const n$$15 = u_int(st$$64) | 0;
  const extraItem = (n$$15 & -2147483648) === -2147483648 ? (0, _Option.some)(extraf$$2(st$$64)) : null;
  const arr$$1 = u_array_core(f$$17, n$$15 & 2147483647, st$$64);
  return [extraItem, arr$$1];
}

function u_list(f$$18, st$$65) {
  return (0, _Array.toList)(u_array(f$$18)(st$$65));
}

function u_list_ext(extra, f$$19, st$$66) {
  const patternInput$$2 = u_array_ext(extra, f$$19, st$$66);
  return [patternInput$$2[0], (0, _Array.toList)(patternInput$$2[1])];
}

function u_List(f$$20, st$$67) {
  return u_list(f$$20, st$$67);
}

function u_array_revi(f$$21, st$$68) {
  const n$$16 = u_int(st$$68) | 0;
  const res$$4 = (0, _Array.fill)(new Array(n$$16), 0, n$$16, null);

  for (let i$$13 = 0; i$$13 <= n$$16 - 1; i$$13++) {
    res$$4[i$$13] = f$$21(st$$68, n$$16 - 1 - i$$13);
  }

  return res$$4;
}

function u_list_revi(f$$22, st$$69) {
  return (0, _Array.toList)(u_array_revi(f$$22, st$$69));
}

function u_wrap(f$$23, u$$1, st$$70) {
  return f$$23(u$$1(st$$70));
}

function u_option(f$$24, st$$71) {
  const tag = u_byte(st$$71) | 0;

  switch (tag) {
    case 0:
      {
        return null;
      }

    case 1:
      {
        return (0, _Option.some)(f$$24(st$$71));
      }

    default:
      {
        const n$$17 = tag | 0;
        return ufailwith(st$$71, "u_option: found number " + (0, _Util.int32ToString)(n$$17));
      }
  }
}

function u_lazy(u$$2) {
  return function (st$$72) {
    const len$$3 = prim_u_int32(st$$72) | 0;
    const otyconsIdx1$$1 = prim_u_int32(st$$72) | 0;
    const otyconsIdx2$$1 = prim_u_int32(st$$72) | 0;
    const otyparsIdx1$$1 = prim_u_int32(st$$72) | 0;
    const otyparsIdx2$$1 = prim_u_int32(st$$72) | 0;
    const ovalsIdx1$$1 = prim_u_int32(st$$72) | 0;
    const ovalsIdx2$$1 = prim_u_int32(st$$72) | 0;
    [len$$3, otyconsIdx1$$1, otyconsIdx2$$1, otyparsIdx1$$1, otyparsIdx2$$1, ovalsIdx1$$1, ovalsIdx2$$1];
    return (0, _Util.lazyFromValue)(u$$2(st$$72));
  };
}

function u_hole() {
  const h$$3 = new _Types.FSharpRef(null);
  return [function (f$$25) {
    h$$3.contents = f$$25;
  }, function (st$$73) {
    const matchValue$$3 = h$$3.contents;

    if (matchValue$$3 == null) {
      return ufailwith(st$$73, "u_hole: unfilled hole");
    } else {
      const f$$26 = matchValue$$3;
      return f$$26(st$$73);
    }
  }];
}

function encode_string(stringTab, x$$29) {
  return encode_uniq(stringTab, x$$29);
}

function decode_string(x$$30) {
  return x$$30;
}

function lookup_string(st$$74, stringTab$$1, x$$31) {
  return lookup_uniq(st$$74, stringTab$$1, x$$31);
}

function u_encoded_string(st$$75) {
  return u_prim_string(st$$75);
}

function u_string(st$$76) {
  return lookup_uniq(st$$76, st$$76.istrings, u_int(st$$76));
}

function u_strings(st$$77) {
  return u_list(u_string, st$$77);
}

function u_ints(st$$78) {
  return u_list(u_int, st$$78);
}

function p_encoded_string(s$$2) {
  return function (st$$79) {
    p_prim_string(s$$2, st$$79);
  };
}

function p_string(s$$3, st$$80) {
  p_int(encode_string(st$$80.ostrings, s$$3), st$$80);
}

function p_strings(x$$32) {
  return function (st$$81) {
    p_list(p_string, x$$32, st$$81);
  };
}

function p_ints(x$$33) {
  return function (st$$82) {
    p_list(p_int, x$$33, st$$82);
  };
}

function encode_ccuref(ccuTab, x$$34) {
  return encode_uniq(ccuTab, (0, _tast.CcuThunk$$get_AssemblyName)(x$$34));
}

function decode_ccuref(x$$35) {
  return x$$35;
}

function lookup_ccuref(st$$83, ccuTab$$1, x$$36) {
  return lookup_uniq(st$$83, ccuTab$$1, x$$36);
}

function u_encoded_ccuref(st$$84) {
  const matchValue$$4 = u_byte(st$$84) | 0;

  if (matchValue$$4 === 0) {
    return u_prim_string(st$$84);
  } else {
    const n$$18 = matchValue$$4 | 0;
    return ufailwith(st$$84, "u_encoded_ccuref: found number " + (0, _Util.int32ToString)(n$$18));
  }
}

function u_ccuref(st$$85) {
  return lookup_uniq(st$$85, st$$85.iccus, u_int(st$$85));
}

function p_encoded_ccuref(x$$37, st$$86) {
  p_byte(0, st$$86);
  p_prim_string(x$$37, st$$86);
}

function p_ccuref(s$$4, st$$87) {
  p_int(encode_ccuref(st$$87.occus, s$$4), st$$87);
}

function decode_pubpath(st$$88, stringTab$$2, a$$2) {
  return new _tast.PublicPath(0, "PubPath", (0, _Array.map)(function (x$$38) {
    return lookup_string(st$$88, stringTab$$2, x$$38);
  }, a$$2, Array));
}

function lookup_pubpath(st$$89, pubpathTab, x$$39) {
  return lookup_uniq(st$$89, pubpathTab, x$$39);
}

const u_encoded_pubpath = u_array(u_int);
exports.u_encoded_pubpath = u_encoded_pubpath;

function u_pubpath(st$$90) {
  return lookup_uniq(st$$90, st$$90.ipubpaths, u_int(st$$90));
}

function encode_pubpath(stringTab$$3, pubpathTab$$1, _arg1) {
  const a$$3 = _arg1.fields[0];
  return encode_uniq(pubpathTab$$1, (0, _Array.map)(function (x$$40) {
    return encode_string(stringTab$$3, x$$40);
  }, a$$3, Int32Array)) | 0;
}

const p_encoded_pubpath = p_array(p_int);
exports.p_encoded_pubpath = p_encoded_pubpath;

function p_pubpath(x$$41, st$$91) {
  p_int(encode_pubpath(st$$91.ostrings, st$$91.opubpaths, x$$41), st$$91);
}

function decode_nleref(st$$92, ccuTab$$2, stringTab$$4, a$$4, b$$7) {
  return (0, _tast.mkNonLocalEntityRef)(lookup_ccuref(st$$92, ccuTab$$2, a$$4), (0, _Array.map)(function (x$$42) {
    return lookup_string(st$$92, stringTab$$4, x$$42);
  }, b$$7, Array));
}

function lookup_nleref(st$$93, nlerefTab, x$$43) {
  return lookup_uniq(st$$93, nlerefTab, x$$43);
}

function u_encoded_nleref(st$$94) {
  const a$$5 = u_int(st$$94) | 0;
  const b$$8 = u_array(u_int)(st$$94);
  return [a$$5, b$$8];
}

function u_nleref(st$$95) {
  return lookup_uniq(st$$95, st$$95.inlerefs, u_int(st$$95));
}

function encode_nleref(ccuTab$$3, stringTab$$5, nlerefTab$$1, thisCcu, nleref) {
  thisCcu;
  const b$$9 = nleref.fields[1];
  const a$$6 = nleref.fields[0];
  return encode_uniq(nlerefTab$$1, [encode_ccuref(ccuTab$$3, a$$6), (0, _Array.map)(function (x$$44) {
    return encode_string(stringTab$$5, x$$44);
  }, b$$9, Int32Array)]) | 0;
}

function p_encoded_nleref(tupledArg$$1) {
  return function (st$$96) {
    p_int(tupledArg$$1[0], st$$96);
    p_array(p_int)(tupledArg$$1[1])(st$$96);
  };
}

function p_nleref(x$$45, st$$97) {
  p_int(encode_nleref(st$$97.occus, st$$97.ostrings, st$$97.onlerefs, st$$97.oscope, x$$45), st$$97);
}

function decode_simpletyp(st$$98, _ccuTab, _stringTab, nlerefTab$$2, a$$8) {
  return new _tast.TType(1, "TType_app", (0, _tast.ERefNonLocal)(lookup_nleref(st$$98, nlerefTab$$2, a$$8)), (0, _Types.L)());
}

function lookup_simpletyp(st$$99, simpleTyTab, x$$46) {
  return lookup_uniq(st$$99, simpleTyTab, x$$46);
}

function u_encoded_simpletyp(st$$100) {
  return u_int(st$$100);
}

function u_simpletyp(st$$101) {
  return lookup_uniq(st$$101, st$$101.isimpletys, u_int(st$$101));
}

function encode_simpletyp(ccuTab$$4, stringTab$$6, nlerefTab$$3, simpleTyTab$$1, thisCcu$$1, a$$9) {
  return encode_uniq(simpleTyTab$$1, encode_nleref(ccuTab$$4, stringTab$$6, nlerefTab$$3, thisCcu$$1, a$$9));
}

function p_encoded_simpletyp(x$$47, st$$102) {
  p_int(x$$47, st$$102);
}

function p_simpletyp(x$$48, st$$103) {
  p_int(encode_simpletyp(st$$103.occus, st$$103.ostrings, st$$103.onlerefs, st$$103.osimpletys, st$$103.oscope, x$$48), st$$103);
}

function pickleObjWithDanglingCcus(inMem, file, g, scope, p$$5, x$$49) {
  let patternInput$$3;
  const st1 = new WriterState((0, _bytes.ByteBuffer$$$Create$$Z524259A4)(100000), scope, Table$00601$$$Create$$Z721C83C5("occus"), new NodeOutTable$00602(function stampF(tc) {
    return (0, _tast.Entity$$get_Stamp)(tc);
  }, function nameF(tc$$1) {
    return (0, _tast.Entity$$get_LogicalName)(tc$$1);
  }, function rangeF(tc$$2) {
    return (0, _tast.Entity$$get_Range)(tc$$2);
  }, function derefF(osgn) {
    return osgn;
  }, "otycons", Table$00601$$$Create$$Z721C83C5("otycons")), new NodeOutTable$00602(function stampF$$1(tp) {
    return (0, _tast.Typar$$get_Stamp)(tp);
  }, function nameF$$1(tp$$1) {
    return (0, _tast.Typar$$get_DisplayName)(tp$$1);
  }, function rangeF$$1(tp$$2) {
    return (0, _tast.Typar$$get_Range)(tp$$2);
  }, function derefF$$1(osgn$$1) {
    return osgn$$1;
  }, "otypars", Table$00601$$$Create$$Z721C83C5("otypars")), new NodeOutTable$00602(function stampF$$2(v$$2) {
    return (0, _tast.Val$$get_Stamp)(v$$2);
  }, function nameF$$2(v$$3) {
    return (0, _tast.Val$$get_LogicalName)(v$$3);
  }, function rangeF$$2(v$$4) {
    return (0, _tast.Val$$get_Range)(v$$4);
  }, function derefF$$2(osgn$$2) {
    return osgn$$2;
  }, "ovals", Table$00601$$$Create$$Z721C83C5("ovals")), Table$00601$$$Create$$Z721C83C5("ostrings"), Table$00601$$$Create$$Z721C83C5("opubpaths"), Table$00601$$$Create$$Z721C83C5("onlerefs"), Table$00601$$$Create$$Z721C83C5("osimpletys"), g, file, inMem);
  p$$5(x$$49, st1);
  const sizes$$1 = [NodeOutTable$00602$$get_Size(st1.otycons), NodeOutTable$00602$$get_Size(st1.otypars), NodeOutTable$00602$$get_Size(st1.ovals)];
  patternInput$$3 = [st1.occus, sizes$$1, st1.ostrings, st1.opubpaths, st1.onlerefs, st1.osimpletys, (0, _bytes.ByteBuffer$$Close)(st1.os)];
  const phase2data = [Table$00601$$get_AsArray(patternInput$$3[0]), patternInput$$3[1], Table$00601$$get_AsArray(patternInput$$3[2]), Table$00601$$get_AsArray(patternInput$$3[3]), Table$00601$$get_AsArray(patternInput$$3[4]), Table$00601$$get_AsArray(patternInput$$3[5]), patternInput$$3[6]];
  let phase2bytes;
  const st2 = new WriterState((0, _bytes.ByteBuffer$$$Create$$Z524259A4)(100000), scope, Table$00601$$$Create$$Z721C83C5("occus (fake)"), new NodeOutTable$00602(function stampF$$3(tc$$3) {
    return (0, _tast.Entity$$get_Stamp)(tc$$3);
  }, function nameF$$3(tc$$4) {
    return (0, _tast.Entity$$get_LogicalName)(tc$$4);
  }, function rangeF$$3(tc$$5) {
    return (0, _tast.Entity$$get_Range)(tc$$5);
  }, function derefF$$3(osgn$$3) {
    return osgn$$3;
  }, "otycons", Table$00601$$$Create$$Z721C83C5("otycons")), new NodeOutTable$00602(function stampF$$4(tp$$3) {
    return (0, _tast.Typar$$get_Stamp)(tp$$3);
  }, function nameF$$4(tp$$4) {
    return (0, _tast.Typar$$get_DisplayName)(tp$$4);
  }, function rangeF$$4(tp$$5) {
    return (0, _tast.Typar$$get_Range)(tp$$5);
  }, function derefF$$4(osgn$$4) {
    return osgn$$4;
  }, "otypars", Table$00601$$$Create$$Z721C83C5("otypars")), new NodeOutTable$00602(function stampF$$5(v$$5) {
    return (0, _tast.Val$$get_Stamp)(v$$5);
  }, function nameF$$5(v$$6) {
    return (0, _tast.Val$$get_LogicalName)(v$$6);
  }, function rangeF$$5(v$$7) {
    return (0, _tast.Val$$get_Range)(v$$7);
  }, function derefF$$5(osgn$$5) {
    return osgn$$5;
  }, "ovals", Table$00601$$$Create$$Z721C83C5("ovals")), Table$00601$$$Create$$Z721C83C5("ostrings (fake)"), Table$00601$$$Create$$Z721C83C5("opubpaths (fake)"), Table$00601$$$Create$$Z721C83C5("onlerefs (fake)"), Table$00601$$$Create$$Z721C83C5("osimpletys (fake)"), g, file, inMem);
  const b$$12 = phase2data[1];
  const b$$13 = b$$12;
  p_array(p_encoded_ccuref)(phase2data[0])(st2);

  (function p2$$5(tupledArg$$2, st$$105) {
    p_int(tupledArg$$2[0], st$$105);
    p_int(tupledArg$$2[1], st$$105);
    p_int(tupledArg$$2[2], st$$105);
  })(b$$13, st2);

  p_array((0, _Util.uncurry)(2, p_encoded_string))(phase2data[2])(st2);
  p_array((0, _Util.uncurry)(2, p_encoded_pubpath))(phase2data[3])(st2);
  p_array((0, _Util.uncurry)(2, p_encoded_nleref))(phase2data[4])(st2);
  p_array(p_encoded_simpletyp)(phase2data[5])(st2);
  p_bytes(phase2data[6], st2);
  phase2bytes = (0, _bytes.ByteBuffer$$Close)(st2.os);
  return phase2bytes;
}

function check(ilscope, inMap$$2) {
  for (let i$$14 = 0; i$$14 <= NodeInTable$00602$$get_Count(inMap$$2) - 1; i$$14++) {
    const n$$19 = NodeInTable$00602$$Get$$Z524259A4(inMap$$2, i$$14);

    if (!inMap$$2.IsLinked(n$$19)) {
      (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$pickleMissingDefinition$$7751B6FC)(i$$14, inMap$$2.Name, (0, _il.ILScopeRef$$get_QualifiedName)(ilscope)), _range.range0));
    }
  }
}

function unpickleObjWithDanglingCcus(file$$1, ilscope$$1, iILModule, u$$3, phase2bytes$$1) {
  const st2$$1 = new ReaderState((0, _bytes.ByteStream$$$FromBytes$$1D3E19A2)(phase2bytes$$1, 0, phase2bytes$$1.length), ilscope$$1, new_itbl("iccus (fake)", []), NodeInTable$00602$$$Create$$5A06A0ED(function () {
    return (0, _tast.Entity$$$NewUnlinked)();
  }, function (osgn$$6, tg) {
    (0, _tast.Entity$$Link$$Z52A308BB)(osgn$$6, tg);
  }, function (osgn$$7) {
    return (0, _tast.Entity$$get_IsLinked)(osgn$$7);
  }, "itycons", 0), NodeInTable$00602$$$Create$$5A06A0ED(function () {
    return (0, _tast.Typar$$$NewUnlinked)();
  }, function (osgn$$8, tg$$1) {
    (0, _tast.Typar$$Link$$ZB4A2630)(osgn$$8, tg$$1);
  }, function (osgn$$9) {
    return (0, _tast.Typar$$get_IsLinked)(osgn$$9);
  }, "itypars", 0), NodeInTable$00602$$$Create$$5A06A0ED(function () {
    return (0, _tast.Val$$$NewUnlinked)();
  }, function (osgn$$10, tg$$2) {
    (0, _tast.Val$$Link$$7D0CFEA5)(osgn$$10, tg$$2);
  }, function (osgn$$11) {
    return (0, _tast.Val$$get_IsLinked)(osgn$$11);
  }, "ivals", 0), new_itbl("istrings (fake)", []), new_itbl("ipubpaths (fake)", []), new_itbl("inlerefs (fake)", []), new_itbl("isimpletys (fake)", []), file$$1, iILModule);
  let phase2data$$1;
  const a$$14 = u_array(u_encoded_ccuref)(st2$$1);

  const b$$15 = function p2$$8(st$$110) {
    const a$$13 = u_int(st$$110) | 0;
    const b$$14 = u_int(st$$110) | 0;
    const c$$4 = u_int(st$$110) | 0;
    return [a$$13, b$$14, c$$4];
  }(st2$$1);

  const c$$5 = u_array(u_encoded_string)(st2$$1);
  const d$$2 = u_array(u_encoded_pubpath)(st2$$1);
  const e$$2 = u_array(u_encoded_nleref)(st2$$1);
  const f$$29 = u_array(u_encoded_simpletyp)(st2$$1);
  const x7$$2 = u_bytes(st2$$1);
  phase2data$$1 = [a$$14, b$$15, c$$5, d$$2, e$$2, f$$29, x7$$2];
  const stringTab$$8 = phase2data$$1[2];
  const sizes$$3 = phase2data$$1[1];
  const simpleTyTab$$3 = phase2data$$1[5];
  const pubpathTab$$3 = phase2data$$1[3];
  const phase1bytes$$1 = phase2data$$1[6];
  const nlerefTab$$5 = phase2data$$1[4];
  const ccuNameTab$$1 = phase2data$$1[0];
  const ccuTab$$5 = new_itbl("iccus", (0, _Array.map)(_tast.CcuThunk$$$CreateDelayed$$Z721C83C5, ccuNameTab$$1, Array));
  const stringTab$$9 = new_itbl("istrings", (0, _Array.map)(decode_string, stringTab$$8, Array));
  const pubpathTab$$4 = new_itbl("ipubpaths", (0, _Array.map)(function (a$$15) {
    return decode_pubpath(st2$$1, stringTab$$9, a$$15);
  }, pubpathTab$$3, Array));
  const nlerefTab$$6 = new_itbl("inlerefs", (0, _Array.map)(function (tupledArg$$3) {
    return decode_nleref(st2$$1, ccuTab$$5, stringTab$$9, tupledArg$$3[0], tupledArg$$3[1]);
  }, nlerefTab$$5, Array));
  const simpleTyTab$$4 = new_itbl("isimpletys", (0, _Array.map)(function (a$$17) {
    return decode_simpletyp(st2$$1, ccuTab$$5, stringTab$$9, nlerefTab$$6, a$$17);
  }, simpleTyTab$$3, Array));
  const nvals = sizes$$3[2] | 0;
  const ntypars = sizes$$3[1] | 0;
  const ntycons = sizes$$3[0] | 0;
  let data$$1;
  const st1$$1 = new ReaderState((0, _bytes.ByteStream$$$FromBytes$$1D3E19A2)(phase1bytes$$1, 0, phase1bytes$$1.length), ilscope$$1, ccuTab$$5, NodeInTable$00602$$$Create$$5A06A0ED(function () {
    return (0, _tast.Entity$$$NewUnlinked)();
  }, function (osgn$$12, tg$$3) {
    (0, _tast.Entity$$Link$$Z52A308BB)(osgn$$12, tg$$3);
  }, function (osgn$$13) {
    return (0, _tast.Entity$$get_IsLinked)(osgn$$13);
  }, "itycons", ntycons), NodeInTable$00602$$$Create$$5A06A0ED(function () {
    return (0, _tast.Typar$$$NewUnlinked)();
  }, function (osgn$$14, tg$$4) {
    (0, _tast.Typar$$Link$$ZB4A2630)(osgn$$14, tg$$4);
  }, function (osgn$$15) {
    return (0, _tast.Typar$$get_IsLinked)(osgn$$15);
  }, "itypars", ntypars), NodeInTable$00602$$$Create$$5A06A0ED(function () {
    return (0, _tast.Val$$$NewUnlinked)();
  }, function (osgn$$16, tg$$5) {
    (0, _tast.Val$$Link$$7D0CFEA5)(osgn$$16, tg$$5);
  }, function (osgn$$17) {
    return (0, _tast.Val$$get_IsLinked)(osgn$$17);
  }, "ivals", nvals), stringTab$$9, pubpathTab$$4, nlerefTab$$6, simpleTyTab$$4, file$$1, iILModule);
  const res$$5 = u$$3(st1$$1);
  check(ilscope$$1, st1$$1.itycons);
  check(ilscope$$1, st1$$1.ivals);
  check(ilscope$$1, st1$$1.itypars);
  data$$1 = res$$5;
  return new PickledDataWithReferences$00601(data$$1, (0, _Array.toList)(ccuTab$$5.itbl_rows));
}

function p_ILPublicKey(x$$53, st$$114) {
  if (x$$53.tag === 1) {
    const b$$18 = x$$53.fields[0];
    p_byte(1, st$$114);
    p_bytes(b$$18, st$$114);
  } else {
    const b$$17 = x$$53.fields[0];
    p_byte(0, st$$114);
    p_bytes(b$$17, st$$114);
  }
}

function p_ILVersion(x_0, x_1, x_2, x_3, st$$115) {
  const x$$54 = [x_0, x_1, x_2, x_3];
  p_uint16(x$$54[0], st$$115);
  p_uint16(x$$54[1], st$$115);
  p_uint16(x$$54[2], st$$115);
  p_uint16(x$$54[3], st$$115);
}

function p_ILModuleRef(x$$59, st$$121) {
  var tupledArg$$5;
  (tupledArg$$5 = [(0, _il.ILModuleRef$$get_Name)(x$$59), (0, _il.ILModuleRef$$get_HasMetadata)(x$$59), (0, _il.ILModuleRef$$get_Hash)(x$$59)], function (st$$124) {
    p_string(tupledArg$$5[0], st$$124);
    p_bool(tupledArg$$5[1], st$$124);

    (function p3$$6(x$$60, st$$122) {
      p_option(p_bytes, x$$60, st$$122);
    })(tupledArg$$5[2], st$$124);
  })(st$$121);
}

function p_ILAssemblyRef(x$$61, st$$125) {
  p_byte(0, st$$125);
  p_string((0, _il.ILAssemblyRef$$get_Name)(x$$61), st$$125);

  (function p2$$11(x$$62, st$$126) {
    p_option(p_bytes, x$$62, st$$126);
  })((0, _il.ILAssemblyRef$$get_Hash)(x$$61), st$$125);

  (function p3$$7(x$$63, st$$128) {
    p_option(p_ILPublicKey, x$$63, st$$128);
  })((0, _il.ILAssemblyRef$$get_PublicKey)(x$$61), st$$125);

  p_bool((0, _il.ILAssemblyRef$$get_Retargetable)(x$$61), st$$125);

  (function p5$$3(x$$65, st$$130) {
    p_option(function (tupledArg$$6, st$$131) {
      p_ILVersion(tupledArg$$6[0], tupledArg$$6[1], tupledArg$$6[2], tupledArg$$6[3], st$$131);
    }, x$$65, st$$130);
  })((0, _il.ILAssemblyRef$$get_Version)(x$$61), st$$125);

  (function p6$$3(x$$66, st$$132) {
    p_option(p_string, x$$66, st$$132);
  })((0, _il.ILAssemblyRef$$get_Locale)(x$$61), st$$125);
}

function p_ILScopeRef(x$$67, st$$134) {
  switch (x$$67.tag) {
    case 1:
      {
        const mref = x$$67.fields[0];
        p_byte(1, st$$134);
        p_ILModuleRef(mref, st$$134);
        break;
      }

    case 2:
      {
        const aref = x$$67.fields[0];
        p_byte(2, st$$134);
        p_ILAssemblyRef(aref, st$$134);
        break;
      }

    default:
      {
        p_byte(0, st$$134);
      }
  }
}

function u_ILPublicKey(st$$135) {
  const tag$$1 = u_byte(st$$135) | 0;

  switch (tag$$1) {
    case 0:
      {
        return new _il.PublicKey(0, "PublicKey", u_bytes(st$$135));
      }

    case 1:
      {
        return new _il.PublicKey(1, "PublicKeyToken", u_bytes(st$$135));
      }

    default:
      {
        return ufailwith(st$$135, "u_ILPublicKey");
      }
  }
}

function u_ILVersion(st$$136) {
  const a$$21 = u_uint16(st$$136);
  const b$$22 = u_uint16(st$$136);
  const c$$9 = u_uint16(st$$136);
  const d$$5 = u_uint16(st$$136);
  return [a$$21, b$$22, c$$9, d$$5];
}

function u_ILModuleRef(st$$142) {
  let patternInput$$4;
  const a$$22 = u_string(st$$142);
  const b$$23 = u_bool(st$$142);

  const c$$10 = function p3$$9(st$$143) {
    return u_option(u_bytes, st$$143);
  }(st$$142);

  patternInput$$4 = [a$$22, b$$23, c$$10];
  return (0, _il.ILModuleRef$$$Create$$10F6F906)(patternInput$$4[0], patternInput$$4[1], patternInput$$4[2]);
}

function u_ILAssemblyRef(st$$146) {
  const tag$$2 = u_byte(st$$146) | 0;

  if (tag$$2 === 0) {
    let patternInput$$5;
    const a$$24 = u_string(st$$146);

    const b$$25 = function p2$$14(st$$147) {
      return u_option(u_bytes, st$$147);
    }(st$$146);

    const c$$12 = function p3$$10(st$$149) {
      return u_option(u_ILPublicKey, st$$149);
    }(st$$146);

    const d$$6 = u_bool(st$$146);

    const e$$4 = function p5$$4(st$$151) {
      return u_option(u_ILVersion, st$$151);
    }(st$$146);

    const f$$31 = function p6$$4(st$$153) {
      return u_option(u_string, st$$153);
    }(st$$146);

    patternInput$$5 = [a$$24, b$$25, c$$12, d$$6, e$$4, f$$31];
    return (0, _il.ILAssemblyRef$$$Create$$2BC8E713)(patternInput$$5[0], patternInput$$5[1], patternInput$$5[2], patternInput$$5[3], patternInput$$5[4], patternInput$$5[5]);
  } else {
    return ufailwith(st$$146, "u_ILAssemblyRef");
  }
}

function u_ILScopeRef(st$$155) {
  let res$$6;
  const tag$$3 = u_byte(st$$155) | 0;

  switch (tag$$3) {
    case 0:
      {
        res$$6 = new _il.ILScopeRef(0, "Local");
        break;
      }

    case 1:
      {
        res$$6 = new _il.ILScopeRef(1, "Module", u_ILModuleRef(st$$155));
        break;
      }

    case 2:
      {
        res$$6 = new _il.ILScopeRef(2, "Assembly", u_ILAssemblyRef(st$$155));
        break;
      }

    default:
      {
        res$$6 = ufailwith(st$$155, "u_ILScopeRef");
      }
  }

  const res$$7 = (0, _il.rescopeILScopeRef)(st$$155.iilscope, res$$6);
  return res$$7;
}

function p_ILHasThis(x$$68, st$$156) {
  p_byte(x$$68.tag === 1 ? 1 : x$$68.tag === 2 ? 2 : 0, st$$156);
}

function p_ILArrayShape(x$$73) {
  return function (st$$163) {
    p_wrap(function f$$33(_arg1$$1) {
      const x$$69 = _arg1$$1.fields[0];
      return x$$69;
    }, function p$$6(x$$72, st$$162) {
      p_list(function f$$34(tupledArg$$7, st$$161) {
        (function p1$$15(x$$70, st$$157) {
          p_option(p_int32, x$$70, st$$157);
        })(tupledArg$$7[0], st$$161);

        (function p2$$15(x$$71, st$$159) {
          p_option(p_int32, x$$71, st$$159);
        })(tupledArg$$7[1], st$$161);
      }, x$$72, st$$162);
    }, x$$73, st$$163);
  };
}

function p_ILType(ty, st$$164) {
  switch (ty.tag) {
    case 1:
      {
        const ty$$1 = ty.fields[1];
        const shape = ty.fields[0];
        p_byte(1, st$$164);
        p_ILArrayShape(shape)(st$$164);
        p_ILType(ty$$1, st$$164);
        break;
      }

    case 2:
      {
        const tspec = ty.fields[0];
        p_byte(2, st$$164);
        p_ILTypeSpec(tspec, st$$164);
        break;
      }

    case 3:
      {
        const tspec$$1 = ty.fields[0];
        p_byte(3, st$$164);
        p_ILTypeSpec(tspec$$1, st$$164);
        break;
      }

    case 4:
      {
        const ty$$3 = ty.fields[0];
        p_byte(4, st$$164);
        p_ILType(ty$$3, st$$164);
        break;
      }

    case 5:
      {
        const ty$$4 = ty.fields[0];
        p_byte(5, st$$164);
        p_ILType(ty$$4, st$$164);
        break;
      }

    case 6:
      {
        const csig = ty.fields[0];
        p_byte(6, st$$164);
        p_ILCallSig(csig, st$$164);
        break;
      }

    case 7:
      {
        const n$$22 = ty.fields[0];
        p_byte(7, st$$164);
        p_uint16(n$$22, st$$164);
        break;
      }

    case 8:
      {
        const ty$$5 = ty.fields[2];
        const tref = ty.fields[1];
        const req = ty.fields[0];
        p_byte(8, st$$164);
        p_bool(req, st$$164);
        p_ILTypeRef(tref, st$$164);
        p_ILType(ty$$5, st$$164);
        break;
      }

    default:
      {
        p_byte(0, st$$164);
      }
  }
}

function p_ILTypes(tys) {
  return function (st$$171) {
    p_list(p_ILType, tys, st$$171);
  };
}

function p_ILBasicCallConv(x$$75, st$$172) {
  p_byte(x$$75.tag === 1 ? 1 : x$$75.tag === 2 ? 2 : x$$75.tag === 3 ? 3 : x$$75.tag === 4 ? 4 : x$$75.tag === 5 ? 5 : 0, st$$172);
}

function p_ILCallConv(_arg1$$2, st$$173) {
  const y = _arg1$$2.fields[1];
  const x$$76 = _arg1$$2.fields[0];
  p_ILHasThis(x$$76, st$$173);
  p_ILBasicCallConv(y, st$$173);
}

function p_ILCallSig(x$$79, st$$177) {
  p_ILCallConv(x$$79.CallingConv, st$$177);
  p_ILTypes(x$$79.ArgTypes)(st$$177);
  p_ILType(x$$79.ReturnType, st$$177);
}

function p_ILTypeRef(x$$80, st$$181) {
  var tupledArg$$12;
  (tupledArg$$12 = [(0, _il.ILTypeRef$$get_Scope)(x$$80), (0, _il.ILTypeRef$$get_Enclosing)(x$$80), (0, _il.ILTypeRef$$get_Name)(x$$80)], function (st$$183) {
    p_ILScopeRef(tupledArg$$12[0], st$$183);
    p_strings(tupledArg$$12[1])(st$$183);
    p_string(tupledArg$$12[2], st$$183);
  })(st$$181);
}

function p_ILTypeSpec(a$$32, st$$184) {
  var tupledArg$$13;
  (tupledArg$$13 = [(0, _il.ILTypeSpec$$get_TypeRef)(a$$32), (0, _il.ILTypeSpec$$get_GenericArgs)(a$$32)], function (st$$186) {
    p_ILTypeRef(tupledArg$$13[0], st$$186);
    p_ILTypes(tupledArg$$13[1])(st$$186);
  })(st$$184);
}

function u_ILBasicCallConv(st$$187) {
  const matchValue$$5 = u_byte(st$$187) | 0;

  switch (matchValue$$5) {
    case 0:
      {
        return new _il.ILArgConvention(0, "Default");
      }

    case 1:
      {
        return new _il.ILArgConvention(1, "CDecl");
      }

    case 2:
      {
        return new _il.ILArgConvention(2, "StdCall");
      }

    case 3:
      {
        return new _il.ILArgConvention(3, "ThisCall");
      }

    case 4:
      {
        return new _il.ILArgConvention(4, "FastCall");
      }

    case 5:
      {
        return new _il.ILArgConvention(5, "VarArg");
      }

    default:
      {
        return ufailwith(st$$187, "u_ILBasicCallConv");
      }
  }
}

function u_ILHasThis(st$$188) {
  const matchValue$$6 = u_byte(st$$188) | 0;

  switch (matchValue$$6) {
    case 0:
      {
        return new _il.ILThisConvention(0, "Instance");
      }

    case 1:
      {
        return new _il.ILThisConvention(1, "InstanceExplicit");
      }

    case 2:
      {
        return new _il.ILThisConvention(2, "Static");
      }

    default:
      {
        return ufailwith(st$$188, "u_ILHasThis");
      }
  }
}

function u_ILCallConv(st$$189) {
  let patternInput$$6;
  const a$$34 = u_ILHasThis(st$$189);
  const b$$34 = u_ILBasicCallConv(st$$189);
  patternInput$$6 = [a$$34, b$$34];
  return new _il.ILCallingConv(0, "Callconv", patternInput$$6[0], patternInput$$6[1]);
}

function u_ILTypeRef(st$$193) {
  let patternInput$$7;
  const a$$36 = u_ILScopeRef(st$$193);
  const b$$36 = u_strings(st$$193);
  const c$$17 = u_string(st$$193);
  patternInput$$7 = [a$$36, b$$36, c$$17];
  return (0, _il.ILTypeRef$$$Create$$113F1D6)(patternInput$$7[0], patternInput$$7[1], patternInput$$7[2]);
}

function u_ILArrayShape(st$$202) {
  return u_wrap(function f$$36(x$$83) {
    return new _il.ILArrayShape(0, "ILArrayShape", x$$83);
  }, function u$$4(st$$201) {
    return u_list(function f$$37(st$$200) {
      const a$$38 = function p1$$24(st$$196) {
        return u_option(u_int32, st$$196);
      }(st$$200);

      const b$$38 = function p2$$24(st$$198) {
        return u_option(u_int32, st$$198);
      }(st$$200);

      return [a$$38, b$$38];
    }, st$$201);
  }, st$$202);
}

function u_ILType(st$$203) {
  const tag$$4 = u_byte(st$$203) | 0;

  switch (tag$$4) {
    case 0:
      {
        return new _il.ILType(0, "Void");
      }

    case 1:
      {
        let tupledArg$$14;
        const a$$39 = u_ILArrayShape(st$$203);
        const b$$39 = u_ILType(st$$203);
        tupledArg$$14 = [a$$39, b$$39];
        return new _il.ILType(1, "Array", tupledArg$$14[0], tupledArg$$14[1]);
      }

    case 2:
      {
        return new _il.ILType(2, "Value", u_ILTypeSpec(st$$203));
      }

    case 3:
      {
        return (0, _il.mkILBoxedType)(u_ILTypeSpec(st$$203));
      }

    case 4:
      {
        return new _il.ILType(4, "Ptr", u_ILType(st$$203));
      }

    case 5:
      {
        return new _il.ILType(5, "Byref", u_ILType(st$$203));
      }

    case 6:
      {
        return new _il.ILType(6, "FunctionPointer", u_ILCallSig(st$$203));
      }

    case 7:
      {
        return (0, _il.mkILTyvarTy)(u_uint16(st$$203));
      }

    case 8:
      {
        let tupledArg$$15;
        const a$$40 = u_bool(st$$203);
        const b$$40 = u_ILTypeRef(st$$203);
        const c$$19 = u_ILType(st$$203);
        tupledArg$$15 = [a$$40, b$$40, c$$19];
        return new _il.ILType(8, "Modified", tupledArg$$15[0], tupledArg$$15[1], tupledArg$$15[2]);
      }

    default:
      {
        return ufailwith(st$$203, "u_ILType");
      }
  }
}

function u_ILTypes(st$$209) {
  return u_list(u_ILType, st$$209);
}

function u_ILCallSig(st$$215) {
  return u_wrap(function f$$38(tupledArg$$16) {
    return new _il.ILCallingSignature(tupledArg$$16[0], tupledArg$$16[1], tupledArg$$16[2]);
  }, function u$$5(st$$214) {
    const a$$42 = u_ILCallConv(st$$214);
    const b$$42 = u_ILTypes(st$$214);
    const c$$21 = u_ILType(st$$214);
    return [a$$42, b$$42, c$$21];
  }, st$$215);
}

function u_ILTypeSpec(st$$216) {
  let patternInput$$8;
  const a$$43 = u_ILTypeRef(st$$216);
  const b$$43 = u_ILTypes(st$$216);
  patternInput$$8 = [a$$43, b$$43];
  return (0, _il.ILTypeSpec$$$Create$$7469E1FB)(patternInput$$8[0], patternInput$$8[1]);
}

function p_ILMethodRef(x$$84, st$$220) {
  p_ILTypeRef((0, _il.ILMethodRef$$get_DeclaringTypeRef)(x$$84), st$$220);
  p_ILCallConv((0, _il.ILMethodRef$$get_CallingConv)(x$$84), st$$220);
  p_int((0, _il.ILMethodRef$$get_GenericArity)(x$$84), st$$220);
  p_string((0, _il.ILMethodRef$$get_Name)(x$$84), st$$220);
  p_ILTypes((0, _il.ILMethodRef$$get_ArgTypes)(x$$84))(st$$220);
  p_ILType((0, _il.ILMethodRef$$get_ReturnType)(x$$84), st$$220);
}

function p_ILFieldRef(x$$86, st$$225) {
  p_ILTypeRef(x$$86.DeclaringTypeRef, st$$225);
  p_string(x$$86.Name, st$$225);
  p_ILType(x$$86.Type, st$$225);
}

function p_ILMethodSpec(x$$88, st$$229) {
  var tupledArg$$18;
  (tupledArg$$18 = [(0, _il.ILMethodSpec$$get_MethodRef)(x$$88), (0, _il.ILMethodSpec$$get_DeclaringType)(x$$88), (0, _il.ILMethodSpec$$get_GenericArgs)(x$$88)], function (st$$232) {
    p_ILMethodRef(tupledArg$$18[0], st$$232);
    p_ILType(tupledArg$$18[1], st$$232);
    p_ILTypes(tupledArg$$18[2])(st$$232);
  })(st$$229);
}

function p_ILFieldSpec(x$$90, st$$233) {
  p_ILFieldRef(x$$90.FieldRef, st$$233);
  p_ILType(x$$90.DeclaringType, st$$233);
}

function p_ILBasicType(x$$92, st$$237) {
  p_int(x$$92.tag === 1 ? 1 : x$$92.tag === 2 ? 2 : x$$92.tag === 3 ? 3 : x$$92.tag === 4 ? 4 : x$$92.tag === 5 ? 5 : x$$92.tag === 6 ? 6 : x$$92.tag === 7 ? 7 : x$$92.tag === 8 ? 8 : x$$92.tag === 9 ? 9 : x$$92.tag === 10 ? 10 : x$$92.tag === 11 ? 11 : x$$92.tag === 12 ? 12 : x$$92.tag === 13 ? 13 : 0, st$$237);
}

function p_ILVolatility(x$$93, st$$238) {
  p_int(x$$93.tag === 1 ? 1 : 0, st$$238);
}

function p_ILReadonly(x$$94, st$$239) {
  p_int(x$$94.tag === 1 ? 1 : 0, st$$239);
}

function u_ILMethodRef(st$$240) {
  let patternInput$$9;
  const a$$49 = u_ILTypeRef(st$$240);
  const b$$49 = u_ILCallConv(st$$240);
  const c$$25 = u_int(st$$240) | 0;
  const d$$9 = u_string(st$$240);
  const e$$7 = u_ILTypes(st$$240);
  const f$$40 = u_ILType(st$$240);
  patternInput$$9 = [a$$49, b$$49, c$$25, d$$9, e$$7, f$$40];
  return (0, _il.ILMethodRef$$$Create$$Z6DE7B28E)(patternInput$$9[0], patternInput$$9[1], patternInput$$9[3], patternInput$$9[2], patternInput$$9[4], patternInput$$9[5]);
}

function u_ILFieldRef(st$$246) {
  let patternInput$$10;
  const a$$50 = u_ILTypeRef(st$$246);
  const b$$50 = u_string(st$$246);
  const c$$26 = u_ILType(st$$246);
  patternInput$$10 = [a$$50, b$$50, c$$26];
  return new _il.ILFieldRef(patternInput$$10[0], patternInput$$10[1], patternInput$$10[2]);
}

function u_ILMethodSpec(st$$250) {
  let patternInput$$11;
  const a$$51 = u_ILMethodRef(st$$250);
  const b$$51 = u_ILType(st$$250);
  const c$$27 = u_ILTypes(st$$250);
  patternInput$$11 = [a$$51, b$$51, c$$27];
  return (0, _il.ILMethodSpec$$$Create$$4D2FDCE3)(patternInput$$11[1], patternInput$$11[0], patternInput$$11[2]);
}

function u_ILFieldSpec(st$$255) {
  let patternInput$$12;
  const a$$52 = u_ILFieldRef(st$$255);
  const b$$52 = u_ILType(st$$255);
  patternInput$$12 = [a$$52, b$$52];
  return new _il.ILFieldSpec(patternInput$$12[0], patternInput$$12[1]);
}

function u_ILBasicType(st$$259) {
  const matchValue$$7 = u_int(st$$259) | 0;

  switch (matchValue$$7) {
    case 0:
      {
        return new _il.ILBasicType(0, "DT_R");
      }

    case 1:
      {
        return new _il.ILBasicType(1, "DT_I1");
      }

    case 2:
      {
        return new _il.ILBasicType(2, "DT_U1");
      }

    case 3:
      {
        return new _il.ILBasicType(3, "DT_I2");
      }

    case 4:
      {
        return new _il.ILBasicType(4, "DT_U2");
      }

    case 5:
      {
        return new _il.ILBasicType(5, "DT_I4");
      }

    case 6:
      {
        return new _il.ILBasicType(6, "DT_U4");
      }

    case 7:
      {
        return new _il.ILBasicType(7, "DT_I8");
      }

    case 8:
      {
        return new _il.ILBasicType(8, "DT_U8");
      }

    case 9:
      {
        return new _il.ILBasicType(9, "DT_R4");
      }

    case 10:
      {
        return new _il.ILBasicType(10, "DT_R8");
      }

    case 11:
      {
        return new _il.ILBasicType(11, "DT_I");
      }

    case 12:
      {
        return new _il.ILBasicType(12, "DT_U");
      }

    case 13:
      {
        return new _il.ILBasicType(13, "DT_REF");
      }

    default:
      {
        return ufailwith(st$$259, "u_ILBasicType");
      }
  }
}

function u_ILVolatility(st$$260) {
  const matchValue$$8 = u_int(st$$260) | 0;

  switch (matchValue$$8) {
    case 0:
      {
        return new _il.ILVolatility(0, "Volatile");
      }

    case 1:
      {
        return new _il.ILVolatility(1, "Nonvolatile");
      }

    default:
      {
        return ufailwith(st$$260, "u_ILVolatility");
      }
  }
}

function u_ILReadonly(st$$261) {
  const matchValue$$9 = u_int(st$$261) | 0;

  switch (matchValue$$9) {
    case 0:
      {
        return new _il.ILReadonly(0, "ReadonlyAddress");
      }

    case 1:
      {
        return new _il.ILReadonly(1, "NormalAddress");
      }

    default:
      {
        return ufailwith(st$$261, "u_ILReadonly");
      }
  }
}

const simple_instrs = (0, _Types.L)([5, new _il.ILInstr(0, "AI_add")], (0, _Types.L)([44, new _il.ILInstr(1, "AI_add_ovf")], (0, _Types.L)([45, new _il.ILInstr(2, "AI_add_ovf_un")], (0, _Types.L)([12, new _il.ILInstr(3, "AI_and")], (0, _Types.L)([8, new _il.ILInstr(4, "AI_div")], (0, _Types.L)([9, new _il.ILInstr(5, "AI_div_un")], (0, _Types.L)([50, new _il.ILInstr(6, "AI_ceq")], (0, _Types.L)([51, new _il.ILInstr(7, "AI_cgt")], (0, _Types.L)([52, new _il.ILInstr(8, "AI_cgt_un")], (0, _Types.L)([53, new _il.ILInstr(9, "AI_clt")], (0, _Types.L)([54, new _il.ILInstr(10, "AI_clt_un")], (0, _Types.L)([7, new _il.ILInstr(14, "AI_mul")], (0, _Types.L)([46, new _il.ILInstr(15, "AI_mul_ovf")], (0, _Types.L)([47, new _il.ILInstr(16, "AI_mul_ovf_un")], (0, _Types.L)([10, new _il.ILInstr(17, "AI_rem")], (0, _Types.L)([11, new _il.ILInstr(18, "AI_rem_un")], (0, _Types.L)([15, new _il.ILInstr(19, "AI_shl")], (0, _Types.L)([16, new _il.ILInstr(20, "AI_shr")], (0, _Types.L)([17, new _il.ILInstr(21, "AI_shr_un")], (0, _Types.L)([6, new _il.ILInstr(22, "AI_sub")], (0, _Types.L)([48, new _il.ILInstr(23, "AI_sub_ovf")], (0, _Types.L)([49, new _il.ILInstr(24, "AI_sub_ovf_un")], (0, _Types.L)([14, new _il.ILInstr(25, "AI_xor")], (0, _Types.L)([13, new _il.ILInstr(26, "AI_or")], (0, _Types.L)([18, new _il.ILInstr(27, "AI_neg")], (0, _Types.L)([19, new _il.ILInstr(28, "AI_not")], (0, _Types.L)([2, new _il.ILInstr(29, "AI_ldnull")], (0, _Types.L)([42, new _il.ILInstr(32, "AI_ckfinite")], (0, _Types.L)([0, new _il.ILInstr(33, "AI_nop")], (0, _Types.L)([56, new _il.ILInstr(91, "I_localloc")], (0, _Types.L)([30, new _il.ILInstr(54, "I_throw")], (0, _Types.L)([40, new _il.ILInstr(84, "I_ldlen")], (0, _Types.L)([57, new _il.ILInstr(58, "I_rethrow")], (0, _Types.L)([57, new _il.ILInstr(58, "I_rethrow")], (0, _Types.L)([64, new _il.ILInstr(93, "I_initblk", new _il.ILAlignment(0, "Aligned"), new _il.ILVolatility(1, "Nonvolatile"))], (0, _Types.L)([66, new _il.ILInstr(92, "I_cpblk", new _il.ILAlignment(0, "Aligned"), new _il.ILVolatility(1, "Nonvolatile"))], (0, _Types.L)()))))))))))))))))))))))))))))))))))));
exports.simple_instrs = simple_instrs;
const encode_table = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp.HashIdentity$$$Structural)()));
exports.encode_table = encode_table;
(0, _List.iterate)(function (tupledArg$$20) {
  encode_table.set(tupledArg$$20[1], tupledArg$$20[0]);
}, simple_instrs);

function encode_instr(si) {
  return encode_table.get(si);
}

function isNoArgInstr(s$$8) {
  return encode_table.has(s$$8);
}

const decoders = (0, _Types.L)([1, function ($arg$$1) {
  return (0, _il.mkLdarg)(u_uint16($arg$$1));
}], (0, _Types.L)([4, function ($arg$$2) {
  return new _il.ILInstr(48, "I_call", new _il.ILTailcall(1, "Normalcall"), u_ILMethodSpec($arg$$2), null);
}], (0, _Types.L)([24, function ($arg$$3) {
  return new _il.ILInstr(49, "I_callvirt", new _il.ILTailcall(1, "Normalcall"), u_ILMethodSpec($arg$$3), null);
}], (0, _Types.L)([55, function ($arg$$4) {
  return new _il.ILInstr(69, "I_ldvirtftn", u_ILMethodSpec($arg$$4));
}], (0, _Types.L)([20, function ($arg$$5) {
  return new _il.ILInstr(11, "AI_conv", u_ILBasicType($arg$$5));
}], (0, _Types.L)([22, function ($arg$$6) {
  return new _il.ILInstr(12, "AI_conv_ovf", u_ILBasicType($arg$$6));
}], (0, _Types.L)([23, function ($arg$$7) {
  return new _il.ILInstr(13, "AI_conv_ovf_un", u_ILBasicType($arg$$7));
}], (0, _Types.L)([31, function ($arg$$8) {
  let tupledArg$$21;
  const a$$58 = u_ILVolatility($arg$$8);
  const b$$53 = u_ILFieldSpec($arg$$8);
  tupledArg$$21 = [a$$58, b$$53];
  return new _il.ILInstr(60, "I_ldfld", new _il.ILAlignment(0, "Aligned"), tupledArg$$21[0], tupledArg$$21[1]);
}], (0, _Types.L)([32, function ($arg$$9) {
  return new _il.ILInstr(62, "I_ldflda", u_ILFieldSpec($arg$$9));
}], (0, _Types.L)([34, function ($arg$$10) {
  let tupledArg$$22;
  const a$$59 = u_ILVolatility($arg$$10);
  const b$$55 = u_ILFieldSpec($arg$$10);
  tupledArg$$22 = [a$$59, b$$55];
  return new _il.ILInstr(59, "I_ldsfld", tupledArg$$22[0], tupledArg$$22[1]);
}], (0, _Types.L)([35, function ($arg$$11) {
  return new _il.ILInstr(61, "I_ldsflda", u_ILFieldSpec($arg$$11));
}], (0, _Types.L)([33, function ($arg$$12) {
  let tupledArg$$23;
  const a$$61 = u_ILVolatility($arg$$12);
  const b$$57 = u_ILFieldSpec($arg$$12);
  tupledArg$$23 = [a$$61, b$$57];
  return new _il.ILInstr(64, "I_stfld", new _il.ILAlignment(0, "Aligned"), tupledArg$$23[0], tupledArg$$23[1]);
}], (0, _Types.L)([36, function ($arg$$13) {
  let tupledArg$$24;
  const a$$62 = u_ILVolatility($arg$$13);
  const b$$59 = u_ILFieldSpec($arg$$13);
  tupledArg$$24 = [a$$62, b$$59];
  return new _il.ILInstr(63, "I_stsfld", tupledArg$$24[0], tupledArg$$24[1]);
}], (0, _Types.L)([43, function ($arg$$14) {
  return new _il.ILInstr(68, "I_ldtoken", new _il.ILToken(0, "ILType", u_ILType($arg$$14)));
}], (0, _Types.L)([26, function ($arg$$15) {
  return new _il.ILInstr(65, "I_ldstr", u_string($arg$$15));
}], (0, _Types.L)([38, function ($arg$$16) {
  return new _il.ILInstr(74, "I_box", u_ILType($arg$$16));
}], (0, _Types.L)([29, function ($arg$$17) {
  return new _il.ILInstr(75, "I_unbox", u_ILType($arg$$17));
}], (0, _Types.L)([61, function ($arg$$18) {
  return new _il.ILInstr(76, "I_unbox_any", u_ILType($arg$$18));
}], (0, _Types.L)([39, function ($arg$$19) {
  let tupledArg$$25;
  const a$$65 = u_ILArrayShape($arg$$19);
  const b$$61 = u_ILType($arg$$19);
  tupledArg$$25 = [a$$65, b$$61];
  return new _il.ILInstr(83, "I_newarr", tupledArg$$25[0], tupledArg$$25[1]);
}], (0, _Types.L)([60, function ($arg$$20) {
  let tupledArg$$26;
  const a$$67 = u_ILArrayShape($arg$$20);
  const b$$63 = u_ILType($arg$$20);
  tupledArg$$26 = [a$$67, b$$63];
  return new _il.ILInstr(82, "I_stelem_any", tupledArg$$26[0], tupledArg$$26[1]);
}], (0, _Types.L)([59, function ($arg$$21) {
  let tupledArg$$27;
  const a$$69 = u_ILArrayShape($arg$$21);
  const b$$65 = u_ILType($arg$$21);
  tupledArg$$27 = [a$$69, b$$65];
  return new _il.ILInstr(81, "I_ldelem_any", tupledArg$$27[0], tupledArg$$27[1]);
}], (0, _Types.L)([41, function ($arg$$22) {
  let tupledArg$$28;
  const a$$71 = u_ILReadonly($arg$$22);
  const b$$67 = u_ILArrayShape($arg$$22);
  const c$$30 = u_ILType($arg$$22);
  tupledArg$$28 = [a$$71, b$$67, c$$30];
  return new _il.ILInstr(80, "I_ldelema", tupledArg$$28[0], false, tupledArg$$28[1], tupledArg$$28[2]);
}], (0, _Types.L)([27, function ($arg$$23) {
  return new _il.ILInstr(67, "I_castclass", u_ILType($arg$$23));
}], (0, _Types.L)([28, function ($arg$$24) {
  return new _il.ILInstr(66, "I_isinst", u_ILType($arg$$24));
}], (0, _Types.L)([25, function ($arg$$25) {
  return new _il.ILInstr(72, "I_ldobj", new _il.ILAlignment(0, "Aligned"), new _il.ILVolatility(1, "Nonvolatile"), u_ILType($arg$$25));
}], (0, _Types.L)([37, function ($arg$$26) {
  return new _il.ILInstr(73, "I_stobj", new _il.ILAlignment(0, "Aligned"), new _il.ILVolatility(1, "Nonvolatile"), u_ILType($arg$$26));
}], (0, _Types.L)([58, function ($arg$$27) {
  return new _il.ILInstr(77, "I_sizeof", u_ILType($arg$$27));
}], (0, _Types.L)([62, function ($arg$$28) {
  let tupledArg$$29;
  const a$$73 = u_int32($arg$$28) | 0;
  const b$$69 = u_int32($arg$$28) | 0;
  tupledArg$$29 = [a$$73, b$$69];
  return new _il.ILInstr(95, "EI_ldlen_multi", tupledArg$$29[0], tupledArg$$29[1]);
}], (0, _Types.L)([3, function ($arg$$29) {
  return new _il.ILInstr(94, "EI_ilzero", u_ILType($arg$$29));
}], (0, _Types.L)([3, function ($arg$$30) {
  return new _il.ILInstr(94, "EI_ilzero", u_ILType($arg$$30));
}], (0, _Types.L)([63, function ($arg$$31) {
  return new _il.ILInstr(71, "I_initobj", u_ILType($arg$$31));
}], (0, _Types.L)([65, function ($arg$$32) {
  return new _il.ILInstr(70, "I_cpobj", u_ILType($arg$$32));
}], (0, _Types.L)()))))))))))))))))))))))))))))))));
exports.decoders = decoders;

const decode_tab = (() => {
  const tab = (0, _Array.initialize)(256, function (n$$23) {
    return function (st$$308) {
      return ufailwith(st$$308, "no decoder for instruction " + (0, _Util.int32ToString)(n$$23));
    };
  }, Array);

  const add_instr = function add_instr(tupledArg$$30) {
    tab[tupledArg$$30[0]] = tupledArg$$30[1];
  };

  (0, _List.iterate)(add_instr, decoders);
  (0, _List.iterate)(function (tupledArg$$31) {
    add_instr([tupledArg$$31[0], function (_arg1$$3) {
      return tupledArg$$31[1];
    }]);
  }, simple_instrs);
  return tab;
})();

exports.decode_tab = decode_tab;

function p_ILInstr(x$$95, st$$309) {
  var si$$1;

  if (si$$1 = x$$95, isNoArgInstr(si$$1)) {
    const si$$2 = x$$95;
    p_byte(encode_instr(si$$2), st$$309);
  } else {
    var $target$$124, mspec, mspec$$1, mspec$$2, x$$96, a$$75, a$$76, a$$77, b$$71, c$$34, a$$79, b$$73, b$$75, c$$35, a$$82, b$$77, c$$36, a$$84, ty$$13, s$$9, ty$$14, ty$$15, ty$$16, a$$85, b$$79, a$$87, b$$81, a$$89, b$$83, a$$91, b$$85, c$$37, ty$$21, ty$$22, c$$39, c$$40, ty$$23, m, n$$24, a$$94, c$$41, c$$42, i$$16;

    if (x$$95.tag === 48) {
      if (x$$95.fields[0].tag === 1) {
        if (x$$95.fields[2] == null) {
          $target$$124 = 0;
          mspec = x$$95.fields[1];
        } else {
          $target$$124 = 31;
          i$$16 = x$$95;
        }
      } else {
        $target$$124 = 31;
        i$$16 = x$$95;
      }
    } else if (x$$95.tag === 49) {
      if (x$$95.fields[0].tag === 1) {
        if (x$$95.fields[2] == null) {
          $target$$124 = 1;
          mspec$$1 = x$$95.fields[1];
        } else {
          $target$$124 = 31;
          i$$16 = x$$95;
        }
      } else {
        $target$$124 = 31;
        i$$16 = x$$95;
      }
    } else if (x$$95.tag === 69) {
      $target$$124 = 2;
      mspec$$2 = x$$95.fields[0];
    } else if (x$$95.tag === 35) {
      $target$$124 = 3;
      x$$96 = x$$95.fields[0];
    } else if (x$$95.tag === 11) {
      $target$$124 = 4;
      a$$75 = x$$95.fields[0];
    } else if (x$$95.tag === 12) {
      $target$$124 = 5;
      a$$76 = x$$95.fields[0];
    } else if (x$$95.tag === 13) {
      $target$$124 = 6;
      a$$77 = x$$95.fields[0];
    } else if (x$$95.tag === 60) {
      if (x$$95.fields[0].tag === 0) {
        $target$$124 = 7;
        b$$71 = x$$95.fields[1];
        c$$34 = x$$95.fields[2];
      } else {
        $target$$124 = 31;
        i$$16 = x$$95;
      }
    } else if (x$$95.tag === 59) {
      $target$$124 = 8;
      a$$79 = x$$95.fields[0];
      b$$73 = x$$95.fields[1];
    } else if (x$$95.tag === 64) {
      if (x$$95.fields[0].tag === 0) {
        $target$$124 = 9;
        b$$75 = x$$95.fields[1];
        c$$35 = x$$95.fields[2];
      } else {
        $target$$124 = 31;
        i$$16 = x$$95;
      }
    } else if (x$$95.tag === 63) {
      $target$$124 = 10;
      a$$82 = x$$95.fields[0];
      b$$77 = x$$95.fields[1];
    } else if (x$$95.tag === 62) {
      $target$$124 = 11;
      c$$36 = x$$95.fields[0];
    } else if (x$$95.tag === 61) {
      $target$$124 = 12;
      a$$84 = x$$95.fields[0];
    } else if (x$$95.tag === 68) {
      if (x$$95.fields[0].tag === 0) {
        $target$$124 = 13;
        ty$$13 = x$$95.fields[0].fields[0];
      } else {
        $target$$124 = 31;
        i$$16 = x$$95;
      }
    } else if (x$$95.tag === 65) {
      $target$$124 = 14;
      s$$9 = x$$95.fields[0];
    } else if (x$$95.tag === 74) {
      $target$$124 = 15;
      ty$$14 = x$$95.fields[0];
    } else if (x$$95.tag === 75) {
      $target$$124 = 16;
      ty$$15 = x$$95.fields[0];
    } else if (x$$95.tag === 76) {
      $target$$124 = 17;
      ty$$16 = x$$95.fields[0];
    } else if (x$$95.tag === 83) {
      $target$$124 = 18;
      a$$85 = x$$95.fields[0];
      b$$79 = x$$95.fields[1];
    } else if (x$$95.tag === 82) {
      $target$$124 = 19;
      a$$87 = x$$95.fields[0];
      b$$81 = x$$95.fields[1];
    } else if (x$$95.tag === 81) {
      $target$$124 = 20;
      a$$89 = x$$95.fields[0];
      b$$83 = x$$95.fields[1];
    } else if (x$$95.tag === 80) {
      $target$$124 = 21;
      a$$91 = x$$95.fields[0];
      b$$85 = x$$95.fields[2];
      c$$37 = x$$95.fields[3];
    } else if (x$$95.tag === 67) {
      $target$$124 = 22;
      ty$$21 = x$$95.fields[0];
    } else if (x$$95.tag === 66) {
      $target$$124 = 23;
      ty$$22 = x$$95.fields[0];
    } else if (x$$95.tag === 72) {
      if (x$$95.fields[0].tag === 0) {
        if (x$$95.fields[1].tag === 1) {
          $target$$124 = 24;
          c$$39 = x$$95.fields[2];
        } else {
          $target$$124 = 31;
          i$$16 = x$$95;
        }
      } else {
        $target$$124 = 31;
        i$$16 = x$$95;
      }
    } else if (x$$95.tag === 73) {
      if (x$$95.fields[0].tag === 0) {
        if (x$$95.fields[1].tag === 1) {
          $target$$124 = 25;
          c$$40 = x$$95.fields[2];
        } else {
          $target$$124 = 31;
          i$$16 = x$$95;
        }
      } else {
        $target$$124 = 31;
        i$$16 = x$$95;
      }
    } else if (x$$95.tag === 77) {
      $target$$124 = 26;
      ty$$23 = x$$95.fields[0];
    } else if (x$$95.tag === 95) {
      $target$$124 = 27;
      m = x$$95.fields[1];
      n$$24 = x$$95.fields[0];
    } else if (x$$95.tag === 94) {
      $target$$124 = 28;
      a$$94 = x$$95.fields[0];
    } else if (x$$95.tag === 71) {
      $target$$124 = 29;
      c$$41 = x$$95.fields[0];
    } else if (x$$95.tag === 70) {
      $target$$124 = 30;
      c$$42 = x$$95.fields[0];
    } else {
      $target$$124 = 31;
      i$$16 = x$$95;
    }

    switch ($target$$124) {
      case 0:
        {
          p_byte(4, st$$309);
          p_ILMethodSpec(mspec, st$$309);
          break;
        }

      case 1:
        {
          p_byte(24, st$$309);
          p_ILMethodSpec(mspec$$1, st$$309);
          break;
        }

      case 2:
        {
          p_byte(55, st$$309);
          p_ILMethodSpec(mspec$$2, st$$309);
          break;
        }

      case 3:
        {
          p_byte(1, st$$309);
          p_uint16(x$$96, st$$309);
          break;
        }

      case 4:
        {
          p_byte(20, st$$309);
          p_ILBasicType(a$$75, st$$309);
          break;
        }

      case 5:
        {
          p_byte(22, st$$309);
          p_ILBasicType(a$$76, st$$309);
          break;
        }

      case 6:
        {
          p_byte(23, st$$309);
          p_ILBasicType(a$$77, st$$309);
          break;
        }

      case 7:
        {
          p_byte(31, st$$309);
          p_ILVolatility(b$$71, st$$309);
          p_ILFieldSpec(c$$34, st$$309);
          break;
        }

      case 8:
        {
          p_byte(34, st$$309);
          p_ILVolatility(a$$79, st$$309);
          p_ILFieldSpec(b$$73, st$$309);
          break;
        }

      case 9:
        {
          p_byte(33, st$$309);
          p_ILVolatility(b$$75, st$$309);
          p_ILFieldSpec(c$$35, st$$309);
          break;
        }

      case 10:
        {
          p_byte(36, st$$309);
          p_ILVolatility(a$$82, st$$309);
          p_ILFieldSpec(b$$77, st$$309);
          break;
        }

      case 11:
        {
          p_byte(32, st$$309);
          p_ILFieldSpec(c$$36, st$$309);
          break;
        }

      case 12:
        {
          p_byte(35, st$$309);
          p_ILFieldSpec(a$$84, st$$309);
          break;
        }

      case 13:
        {
          p_byte(43, st$$309);
          p_ILType(ty$$13, st$$309);
          break;
        }

      case 14:
        {
          p_byte(26, st$$309);
          p_string(s$$9, st$$309);
          break;
        }

      case 15:
        {
          p_byte(38, st$$309);
          p_ILType(ty$$14, st$$309);
          break;
        }

      case 16:
        {
          p_byte(29, st$$309);
          p_ILType(ty$$15, st$$309);
          break;
        }

      case 17:
        {
          p_byte(61, st$$309);
          p_ILType(ty$$16, st$$309);
          break;
        }

      case 18:
        {
          p_byte(39, st$$309);
          p_ILArrayShape(a$$85)(st$$309);
          p_ILType(b$$79, st$$309);
          break;
        }

      case 19:
        {
          p_byte(60, st$$309);
          p_ILArrayShape(a$$87)(st$$309);
          p_ILType(b$$81, st$$309);
          break;
        }

      case 20:
        {
          p_byte(59, st$$309);
          p_ILArrayShape(a$$89)(st$$309);
          p_ILType(b$$83, st$$309);
          break;
        }

      case 21:
        {
          p_byte(41, st$$309);
          p_ILReadonly(a$$91, st$$309);
          p_ILArrayShape(b$$85)(st$$309);
          p_ILType(c$$37, st$$309);
          break;
        }

      case 22:
        {
          p_byte(27, st$$309);
          p_ILType(ty$$21, st$$309);
          break;
        }

      case 23:
        {
          p_byte(28, st$$309);
          p_ILType(ty$$22, st$$309);
          break;
        }

      case 24:
        {
          p_byte(25, st$$309);
          p_ILType(c$$39, st$$309);
          break;
        }

      case 25:
        {
          p_byte(37, st$$309);
          p_ILType(c$$40, st$$309);
          break;
        }

      case 26:
        {
          p_byte(58, st$$309);
          p_ILType(ty$$23, st$$309);
          break;
        }

      case 27:
        {
          p_byte(62, st$$309);
          p_int32(n$$24, st$$309);
          p_int32(m, st$$309);
          break;
        }

      case 28:
        {
          p_byte(3, st$$309);
          p_ILType(a$$94, st$$309);
          break;
        }

      case 29:
        {
          p_byte(63, st$$309);
          p_ILType(c$$41, st$$309);
          break;
        }

      case 30:
        {
          p_byte(65, st$$309);
          p_ILType(c$$42, st$$309);
          break;
        }

      case 31:
        {
          pfailwith(st$$309, (0, _String.toText)((0, _String.printf)("the IL instruction '%+A' cannot be emitted"))(i$$16));
          break;
        }
    }
  }
}

function u_ILInstr(st$$334) {
  const n$$27 = u_byte(st$$334) | 0;
  return decode_tab[n$$27](st$$334);
}

function p_Map(pk, pv) {
  return function (x$$107) {
    return function (st$$337) {
      p_wrap(_Map.toList, function p$$7(x$$106, st$$336) {
        p_list(function f$$43(tupledArg$$41, st$$335) {
          pk(tupledArg$$41[0], st$$335);
          pv(tupledArg$$41[1], st$$335);
        }, x$$106, st$$336);
      }, x$$107, st$$337);
    };
  };
}

function p_qlist(pv$$1) {
  return function (x$$110) {
    return function (st$$339) {
      p_wrap(_QueueList.QueueListModule$$$toList, function p$$8(x$$109, st$$338) {
        p_list(pv$$1, x$$109, st$$338);
      }, x$$110, st$$339);
    };
  };
}

function p_namemap(p$$9) {
  return p_Map(p_string, p$$9);
}

function u_Map(uk, uv) {
  return function (st$$342) {
    return u_wrap(function f$$45(elements) {
      return (0, _Map.ofList)(elements, {
        Compare: _Util.compare
      });
    }, function u$$6(st$$341) {
      return u_list(function f$$46(st$$340) {
        const a$$96 = uk(st$$340);
        const b$$89 = uv(st$$340);
        return [a$$96, b$$89];
      }, st$$341);
    }, st$$342);
  };
}

function u_qlist(uv$$1) {
  return function (st$$344) {
    return u_wrap(_QueueList.QueueListModule$$$ofList, function u$$7(st$$343) {
      return u_list(uv$$1, st$$343);
    }, st$$344);
  };
}

function u_namemap(u$$8) {
  return u_Map(u_string, u$$8);
}

function p_pos(x$$112, st$$345) {
  var tupledArg$$42;
  (tupledArg$$42 = [(0, _range.pos$$get_Line)(x$$112), (0, _range.pos$$get_Column)(x$$112)], function (st$$346) {
    p_int(tupledArg$$42[0], st$$346);
    p_int(tupledArg$$42[1], st$$346);
  })(st$$345);
}

function p_range(x$$113, st$$347) {
  var tupledArg$$43;
  (tupledArg$$43 = [(0, _range.range$$get_FileName)(x$$113), (0, _range.range$$get_Start)(x$$113), (0, _range.range$$get_End)(x$$113)], function (st$$350) {
    p_string(tupledArg$$43[0], st$$350);
    p_pos(tupledArg$$43[1], st$$350);
    p_pos(tupledArg$$43[2], st$$350);
  })(st$$347);
}

function p_dummy_range(_x, _st) {}

function p_ident(x$$116, st$$351) {
  var tupledArg$$44;
  (tupledArg$$44 = [(0, _ast.Ident$$get_idText)(x$$116), (0, _ast.Ident$$get_idRange)(x$$116)], function (st$$353) {
    p_string(tupledArg$$44[0], st$$353);
    p_range(tupledArg$$44[1], st$$353);
  })(st$$351);
}

function p_xmldoc(_arg1$$4, st$$354) {
  const x$$118 = _arg1$$4.fields[0];
  p_array(p_string)(x$$118)(st$$354);
}

function u_pos(st$$355) {
  const a$$100 = u_int(st$$355) | 0;
  const b$$93 = u_int(st$$355) | 0;
  return (0, _range.mkPos)(a$$100, b$$93);
}

function u_range(st$$356) {
  const a$$101 = u_string(st$$356);
  const b$$94 = u_pos(st$$356);
  const c$$44 = u_pos(st$$356);
  return (0, _range.mkRange)(a$$101, b$$94, c$$44);
}

function u_dummy_range(_st$$1) {
  return _range.range0;
}

function u_ident(st$$357) {
  const a$$102 = u_string(st$$357);
  const b$$95 = u_range(st$$357);
  return (0, _ast.ident)(a$$102, b$$95);
}

function u_xmldoc(st$$358) {
  return new _ast.XmlDoc(0, "XmlDoc", u_array(u_string)(st$$358));
}

function p_local_item_ref(ctxt, tab$$1, st$$359) {
  return function (st$$360) {
    p_osgn_ref(ctxt, tab$$1, st$$359, st$$360);
  };
}

function p_tcref(ctxt$$1) {
  return function (x$$119) {
    return function (st$$361) {
      const activePatternResult36179 = (0, _tast.$007CERefLocal$007CERefNonLocal$007C)(x$$119);

      if (activePatternResult36179.tag === 1) {
        p_byte(1, st$$361);
        p_nleref(activePatternResult36179.fields[0], st$$361);
      } else {
        p_byte(0, st$$361);
        p_local_item_ref(ctxt$$1, st$$361.otycons, activePatternResult36179.fields[0])(st$$361);
      }
    };
  };
}

function p_ucref(_arg1$$5) {
  return function (st$$362) {
    const b$$96 = _arg1$$5.fields[1];
    const a$$103 = _arg1$$5.fields[0];
    p_tcref("ucref")(a$$103)(st$$362);
    p_string(b$$96, st$$362);
  };
}

function p_rfref(_arg1$$6, st$$364) {
  const b$$98 = _arg1$$6.fields[1];
  const a$$105 = _arg1$$6.fields[0];
  p_tcref("rfref")(a$$105)(st$$364);
  p_string(b$$98, st$$364);
}

function p_tpref(x$$122, st$$366) {
  p_local_item_ref("typar", st$$366.otypars, x$$122)(st$$366);
}

function u_local_item_ref(tab$$2, st$$367) {
  return u_osgn_ref(tab$$2, st$$367);
}

function u_tcref(st$$368) {
  const tag$$5 = u_byte(st$$368) | 0;

  switch (tag$$5) {
    case 0:
      {
        return (0, _tast.ERefLocal)(u_local_item_ref(st$$368.itycons, st$$368));
      }

    case 1:
      {
        return (0, _tast.ERefNonLocal)(u_nleref(st$$368));
      }

    default:
      {
        return ufailwith(st$$368, "u_item_ref");
      }
  }
}

function u_ucref(st$$369) {
  let patternInput$$13;
  const a$$107 = u_tcref(st$$369);
  const b$$100 = u_string(st$$369);
  patternInput$$13 = [a$$107, b$$100];
  return new _tast.UnionCaseRef(0, "UCRef", patternInput$$13[0], patternInput$$13[1]);
}

function u_rfref(st$$371) {
  let patternInput$$14;
  const a$$109 = u_tcref(st$$371);
  const b$$102 = u_string(st$$371);
  patternInput$$14 = [a$$109, b$$102];
  return new _tast.RecdFieldRef(0, "RFRef", patternInput$$14[0], patternInput$$14[1]);
}

function u_tpref(st$$373) {
  return u_local_item_ref(st$$373.itypars, st$$373);
}

const patternInput$00401278 = p_hole2();
const p_ty2 = patternInput$00401278[1];
exports.p_ty2 = p_ty2;
const fill_p_ty2 = patternInput$00401278[0];
exports.fill_p_ty2 = fill_p_ty2;
const p_ty = p_ty2(false);
exports.p_ty = p_ty;

function p_tys(x$$125) {
  return function (st$$374) {
    p_list((0, _Util.uncurry)(2, p_ty), x$$125, st$$374);
  };
}

const patternInput$00401283$002D1 = p_hole();
const p_attribs = patternInput$00401283$002D1[1];
exports.p_attribs = p_attribs;
const fill_p_attribs = patternInput$00401283$002D1[0];
exports.fill_p_attribs = fill_p_attribs;

function checkForInRefStructThisArg(st$$375, ty$$24) {
  const g$$1 = st$$375.oglobals;
  const patternInput$$15 = (0, _TastOps.tryDestForallTy)(g$$1, ty$$24);

  if ((0, _TastOps.isFunTy)(g$$1, patternInput$$15[1]) ? (0, _TastOps.isFunTy)(g$$1, (0, _TastOps.rangeOfFunTy)(g$$1, patternInput$$15[1])) : false) {
    return (0, _TastOps.isInByrefTy)(g$$1, (0, _TastOps.domainOfFunTy)(g$$1, patternInput$$15[1]));
  } else {
    return false;
  }
}

function p_nonlocal_val_ref(nlv, st$$376) {
  const a$$111 = nlv.EnclosingEntity;
  const key$$1 = nlv.ItemKey;
  const pkey = (0, _tast.ValLinkageFullKey$$get_PartialKey)(key$$1);
  p_tcref("nlvref")(a$$111)(st$$376);
  p_option(p_string, pkey.MemberParentMangledName, st$$376);
  p_bool(pkey.MemberIsOverride, st$$376);
  p_string(pkey.LogicalName, st$$376);
  p_int(pkey.TotalArgCount, st$$376);
  let isStructThisArgPos;
  const matchValue$$10 = (0, _tast.ValLinkageFullKey$$get_TypeForLinkage)(key$$1);

  if (matchValue$$10 != null) {
    const ty$$25 = matchValue$$10;
    isStructThisArgPos = checkForInRefStructThisArg(st$$376, ty$$25);
  } else {
    isStructThisArgPos = false;
  }

  p_option((0, _Util.uncurry)(2, p_ty2(isStructThisArgPos)), (0, _tast.ValLinkageFullKey$$get_TypeForLinkage)(key$$1), st$$376);
}

function p_vref(ctxt$$2) {
  return function (x$$126) {
    return function (st$$377) {
      const activePatternResult36200 = (0, _tast.$007CVRefLocal$007CVRefNonLocal$007C)(x$$126);

      if (activePatternResult36200.tag === 1) {
        p_byte(1, st$$377);
        p_nonlocal_val_ref(activePatternResult36200.fields[0], st$$377);
      } else {
        p_byte(0, st$$377);
        p_local_item_ref(ctxt$$2, st$$377.ovals, activePatternResult36200.fields[0])(st$$377);
      }
    };
  };
}

function p_vrefs(ctxt$$3) {
  return function (x$$129) {
    return function (st$$378) {
      p_list((0, _Util.uncurry)(2, p_vref(ctxt$$3)), x$$129, st$$378);
    };
  };
}

const patternInput$00401314$002D2 = u_hole();
const u_ty = patternInput$00401314$002D2[1];
exports.u_ty = u_ty;
const fill_u_ty = patternInput$00401314$002D2[0];
exports.fill_u_ty = fill_u_ty;

function u_tys(st$$379) {
  return u_list(u_ty, st$$379);
}

const patternInput$00401316$002D3 = u_hole();
const u_attribs = patternInput$00401316$002D3[1];
exports.u_attribs = u_attribs;
const fill_u_attribs = patternInput$00401316$002D3[0];
exports.fill_u_attribs = fill_u_attribs;

function u_nonlocal_val_ref(st$$380) {
  const a$$112 = u_tcref(st$$380);
  const b1$$3 = u_option(u_string, st$$380);
  const b2$$2 = u_bool(st$$380);
  const b3$$1 = u_string(st$$380);
  const c$$45 = u_int(st$$380) | 0;
  const d$$10 = u_option(u_ty, st$$380);
  return new _tast.NonLocalValOrMemberRef(a$$112, (0, _tast.ValLinkageFullKey$$$$002Ector$$72991465)(new _tast.ValLinkagePartialKey(b1$$3, b2$$2, b3$$1, c$$45), d$$10));
}

function u_vref(st$$381) {
  const tag$$6 = u_byte(st$$381) | 0;

  switch (tag$$6) {
    case 0:
      {
        return (0, _tast.VRefLocal)(u_local_item_ref(st$$381.ivals, st$$381));
      }

    case 1:
      {
        return (0, _tast.VRefNonLocal)(u_nonlocal_val_ref(st$$381));
      }

    default:
      {
        return ufailwith(st$$381, "u_item_ref");
      }
  }
}

function u_vrefs(st$$382) {
  return u_list(u_vref, st$$382);
}

function p_kind(x$$132, st$$383) {
  p_byte(x$$132.tag === 1 ? 1 : 0, st$$383);
}

function p_member_kind(x$$133, st$$384) {
  p_byte(x$$133.tag === 3 ? 1 : x$$133.tag === 4 ? 2 : x$$133.tag === 1 ? 3 : x$$133.tag === 0 ? 4 : x$$133.tag === 5 ? pfailwith(st$$384, "pickling: MemberKind.PropertyGetSet only expected in parse trees") : 0, st$$384);
}

function u_kind(st$$385) {
  const matchValue$$11 = u_byte(st$$385) | 0;

  switch (matchValue$$11) {
    case 0:
      {
        return new _tast.TyparKind(0, "Type");
      }

    case 1:
      {
        return new _tast.TyparKind(1, "Measure");
      }

    default:
      {
        return ufailwith(st$$385, "u_kind");
      }
  }
}

function u_member_kind(st$$386) {
  const matchValue$$12 = u_byte(st$$386) | 0;

  switch (matchValue$$12) {
    case 0:
      {
        return new _ast.MemberKind(2, "Member");
      }

    case 1:
      {
        return new _ast.MemberKind(3, "PropertyGet");
      }

    case 2:
      {
        return new _ast.MemberKind(4, "PropertySet");
      }

    case 3:
      {
        return new _ast.MemberKind(1, "Constructor");
      }

    case 4:
      {
        return new _ast.MemberKind(0, "ClassConstructor");
      }

    default:
      {
        return ufailwith(st$$386, "u_member_kind");
      }
  }
}

function p_MemberFlags(x$$134, st$$387) {
  p_bool(x$$134.IsInstance, st$$387);
  p_bool(false, st$$387);
  p_bool(x$$134.IsDispatchSlot, st$$387);
  p_bool(x$$134.IsOverrideOrExplicitImpl, st$$387);
  p_bool(x$$134.IsFinal, st$$387);
  p_member_kind(x$$134.MemberKind, st$$387);
}

function u_MemberFlags(st$$390) {
  let patternInput$$16;
  const a$$114 = u_bool(st$$390);
  const b$$105 = u_bool(st$$390);
  const c$$47 = u_bool(st$$390);
  const d$$12 = u_bool(st$$390);
  const e$$9 = u_bool(st$$390);
  const f$$50 = u_member_kind(st$$390);
  patternInput$$16 = [a$$114, b$$105, c$$47, d$$12, e$$9, f$$50];
  return new _ast.MemberFlags(patternInput$$16[0], patternInput$$16[2], patternInput$$16[3], patternInput$$16[4], patternInput$$16[5]);
}

const patternInput$00401382$002D4 = u_hole();
const u_expr_fwd = patternInput$00401382$002D4[1];
exports.u_expr_fwd = u_expr_fwd;
const fill_u_Expr_hole = patternInput$00401382$002D4[0];
exports.fill_u_Expr_hole = fill_u_Expr_hole;
const patternInput$00401383$002D5 = p_hole();
const p_expr_fwd = patternInput$00401383$002D5[1];
exports.p_expr_fwd = p_expr_fwd;
const fill_p_Expr_hole = patternInput$00401383$002D5[0];
exports.fill_p_Expr_hole = fill_p_Expr_hole;

function p_trait_sln(sln, st$$393) {
  switch (sln.tag) {
    case 0:
      {
        const c$$50 = sln.fields[2];
        const b$$108 = sln.fields[1];
        const a$$117 = sln.fields[0];
        p_byte(1, st$$393);
        p_ty(a$$117)(st$$393);
        p_vref("trait")(b$$108)(st$$393);
        p_tys(c$$50)(st$$393);
        break;
      }

    case 4:
      {
        p_byte(2, st$$393);
        break;
      }

    case 3:
      {
        const expr = sln.fields[0];
        p_byte(3, st$$393);
        p_expr_fwd(expr)(st$$393);
        break;
      }

    case 1:
      {
        const c$$52 = sln.fields[2];
        const b$$110 = sln.fields[1];
        const a$$119 = sln.fields[0];
        p_byte(4, st$$393);
        p_tys(a$$119)(st$$393);
        p_rfref(b$$110, st$$393);
        p_bool(c$$52, st$$393);
        break;
      }

    default:
      {
        const d$$13 = sln.fields[3];
        const c$$48 = sln.fields[2];
        const b$$106 = sln.fields[1];
        const a$$115 = sln.fields[0];
        p_byte(0, st$$393);
        p_ty(a$$115)(st$$393);

        (function p2$$66(x$$136, st$$394) {
          p_option(p_ILTypeRef, x$$136, st$$394);
        })(b$$106, st$$393);

        p_ILMethodRef(c$$48, st$$393);
        p_tys(d$$13)(st$$393);
      }
  }
}

function p_trait(_arg1$$7, st$$401) {
  const f$$51 = _arg1$$7.fields[5];
  const e$$10 = _arg1$$7.fields[4];
  const d$$15 = _arg1$$7.fields[3];
  const c$$54 = _arg1$$7.fields[2];
  const b$$112 = _arg1$$7.fields[1];
  const a$$121 = _arg1$$7.fields[0];
  p_tys(a$$121)(st$$401);
  p_string(b$$112, st$$401);
  p_MemberFlags(c$$54, st$$401);
  p_tys(d$$15)(st$$401);

  (function p5$$9(x$$140, st$$403) {
    p_option((0, _Util.uncurry)(2, p_ty), x$$140, st$$403);
  })(e$$10, st$$401);

  (function p6$$9(x$$141, st$$404) {
    p_option(p_trait_sln, x$$141, st$$404);
  })(f$$51.contents, st$$401);
}

function u_trait_sln(st$$407) {
  const tag$$7 = u_byte(st$$407) | 0;

  switch (tag$$7) {
    case 0:
      {
        let patternInput$$17;
        const a$$123 = u_ty(st$$407);

        const b$$114 = function p2$$70(st$$408) {
          return u_option(u_ILTypeRef, st$$408);
        }(st$$407);

        const c$$56 = u_ILMethodRef(st$$407);
        const d$$17 = u_tys(st$$407);
        patternInput$$17 = [a$$123, b$$114, c$$56, d$$17];
        return new _tast.TraitConstraintSln(2, "ILMethSln", patternInput$$17[0], patternInput$$17[1], patternInput$$17[2], patternInput$$17[3]);
      }

    case 1:
      {
        let patternInput$$18;
        const a$$125 = u_ty(st$$407);
        const b$$116 = u_vref(st$$407);
        const c$$58 = u_tys(st$$407);
        patternInput$$18 = [a$$125, b$$116, c$$58];
        return new _tast.TraitConstraintSln(0, "FSMethSln", patternInput$$18[0], patternInput$$18[1], patternInput$$18[2]);
      }

    case 2:
      {
        return new _tast.TraitConstraintSln(4, "BuiltInSln");
      }

    case 3:
      {
        return new _tast.TraitConstraintSln(3, "ClosedExprSln", u_expr_fwd(st$$407));
      }

    case 4:
      {
        let patternInput$$19;
        const a$$127 = u_tys(st$$407);
        const b$$118 = u_rfref(st$$407);
        const c$$60 = u_bool(st$$407);
        patternInput$$19 = [a$$127, b$$118, c$$60];
        return new _tast.TraitConstraintSln(1, "FSRecdFieldSln", patternInput$$19[0], patternInput$$19[1], patternInput$$19[2]);
      }

    default:
      {
        return ufailwith(st$$407, "u_trait_sln");
      }
  }
}

function u_trait(st$$415) {
  let patternInput$$20;
  const a$$129 = u_tys(st$$415);
  const b$$120 = u_string(st$$415);
  const c$$62 = u_MemberFlags(st$$415);
  const d$$19 = u_tys(st$$415);

  const e$$12 = function p5$$10(st$$417) {
    return u_option(u_ty, st$$417);
  }(st$$415);

  const f$$53 = function p6$$10(st$$418) {
    return u_option(u_trait_sln, st$$418);
  }(st$$415);

  patternInput$$20 = [a$$129, b$$120, c$$62, d$$19, e$$12, f$$53];
  return new _tast.TraitConstraintInfo(0, "TTrait", patternInput$$20[0], patternInput$$20[1], patternInput$$20[2], patternInput$$20[3], patternInput$$20[4], new _Types.FSharpRef(patternInput$$20[5]));
}

function p_rational(q, st$$421) {
  p_int32((0, _rational.GetNumerator)(q), st$$421);
  p_int32((0, _rational.GetDenominator)(q), st$$421);
}

function p_measure_con(tcref, st$$422) {
  p_byte(0, st$$422);
  p_tcref("measure")(tcref)(st$$422);
}

function p_measure_var(v$$8, st$$423) {
  p_byte(3, st$$423);
  p_tpref(v$$8, st$$423);
}

function p_measure_one(arg10$0040$$35) {
  p_byte(4, arg10$0040$$35);
}

function p_measure_varcon(unt, st$$424) {
  switch (unt.tag) {
    case 1:
      {
        const tcref$$1 = unt.fields[0];
        p_measure_con(tcref$$1, st$$424);
        break;
      }

    case 0:
      {
        const v$$9 = unt.fields[0];
        p_measure_var(v$$9, st$$424);
        break;
      }

    default:
      {
        pfailwith(st$$424, "p_measure_varcon: expected measure variable or constructor");
      }
  }
}

function p_measure_pospower(unt$$1, n$$28, st$$425) {
  if (n$$28 === 1) {
    p_measure_varcon(unt$$1, st$$425);
  } else {
    p_byte(2, st$$425);
    p_measure_varcon(unt$$1, st$$425);
    p_measure_pospower(unt$$1, n$$28 - 1, st$$425);
  }
}

function p_measure_intpower(unt$$2, n$$29, st$$426) {
  if (n$$29 < 0) {
    p_byte(1, st$$426);
    p_measure_pospower(unt$$2, -n$$29, st$$426);
  } else {
    p_measure_pospower(unt$$2, n$$29, st$$426);
  }
}

function p_measure_power(unt$$3, q$$1, st$$427) {
  if ((0, _Util.equals)(q$$1, _rational.ZeroRational)) {
    p_measure_one(st$$427);
  } else if ((0, _rational.GetDenominator)(q$$1) === 1) {
    p_measure_intpower(unt$$3, (0, _rational.GetNumerator)(q$$1), st$$427);
  } else {
    p_byte(5, st$$427);
    p_measure_varcon(unt$$3, st$$427);
    p_rational(q$$1, st$$427);
  }
}

function p_normalized_measure(unt$$4, st$$428) {
  const unt$$5 = (0, _tast.stripUnitEqnsAux)(false, unt$$4);

  switch (unt$$5.tag) {
    case 3:
      {
        const x$$142 = unt$$5.fields[0];
        p_byte(1, st$$428);
        p_normalized_measure(x$$142, st$$428);
        break;
      }

    case 2:
      {
        const x2$$5 = unt$$5.fields[1];
        const x1$$4 = unt$$5.fields[0];
        p_byte(2, st$$428);
        p_normalized_measure(x1$$4, st$$428);
        p_normalized_measure(x2$$5, st$$428);
        break;
      }

    case 0:
      {
        const v$$10 = unt$$5.fields[0];
        p_measure_var(v$$10, st$$428);
        break;
      }

    case 4:
      {
        p_measure_one(st$$428);
        break;
      }

    case 5:
      {
        const x$$143 = unt$$5.fields[0];
        const q$$2 = unt$$5.fields[1];
        p_measure_power(x$$143, q$$2, st$$428);
        break;
      }

    default:
      {
        const tcref$$2 = unt$$5.fields[0];
        p_measure_con(tcref$$2, st$$428);
      }
  }
}

function p_measure_expr(unt$$6, st$$429) {
  p_normalized_measure((0, _TastOps.normalizeMeasure)(st$$429.oglobals, unt$$6), st$$429);
}

function u_rational(st$$430) {
  let patternInput$$21;
  const a$$131 = u_int32(st$$430) | 0;
  const b$$122 = u_int32(st$$430) | 0;
  patternInput$$21 = [a$$131, b$$122];
  return (0, _rational.DivRational)((0, _rational.intToRational)(patternInput$$21[0]), (0, _rational.intToRational)(patternInput$$21[1]));
}

function u_measure_expr(st$$434) {
  const tag$$8 = u_byte(st$$434) | 0;

  switch (tag$$8) {
    case 0:
      {
        const a$$133 = u_tcref(st$$434);
        return new _tast.Measure(1, "Con", a$$133);
      }

    case 1:
      {
        const a$$134 = u_measure_expr(st$$434);
        return new _tast.Measure(3, "Inv", a$$134);
      }

    case 2:
      {
        let patternInput$$22;
        const a$$135 = u_measure_expr(st$$434);
        const b$$124 = u_measure_expr(st$$434);
        patternInput$$22 = [a$$135, b$$124];
        return new _tast.Measure(2, "Prod", patternInput$$22[0], patternInput$$22[1]);
      }

    case 3:
      {
        const a$$137 = u_tpref(st$$434);
        return new _tast.Measure(0, "Var", a$$137);
      }

    case 4:
      {
        return new _tast.Measure(4, "One");
      }

    case 5:
      {
        const a$$138 = u_measure_expr(st$$434);
        const b$$126 = u_rational(st$$434);
        return new _tast.Measure(5, "RationalPower", a$$138, b$$126);
      }

    default:
      {
        return ufailwith(st$$434, "u_measure_expr");
      }
  }
}

function p_tyar_constraint(x$$144, st$$438) {
  switch (x$$144.tag) {
    case 3:
      {
        const traitInfo = x$$144.fields[0];
        p_byte(1, st$$438);
        p_trait(traitInfo, st$$438);
        break;
      }

    case 1:
      {
        const rty = x$$144.fields[1];
        p_byte(2, st$$438);
        p_ty(rty)(st$$438);
        break;
      }

    case 2:
      {
        p_byte(3, st$$438);
        break;
      }

    case 4:
      {
        p_byte(4, st$$438);
        break;
      }

    case 5:
      {
        p_byte(5, st$$438);
        break;
      }

    case 7:
      {
        p_byte(6, st$$438);
        break;
      }

    case 6:
      {
        const tys$$5 = x$$144.fields[0];
        p_byte(7, st$$438);
        p_tys(tys$$5)(st$$438);
        break;
      }

    case 8:
      {
        const ty$$26 = x$$144.fields[0];
        p_byte(8, st$$438);
        p_ty(ty$$26)(st$$438);
        break;
      }

    case 11:
      {
        const bty = x$$144.fields[1];
        const aty = x$$144.fields[0];
        p_byte(9, st$$438);
        p_ty(aty)(st$$438);
        p_ty(bty)(st$$438);
        break;
      }

    case 9:
      {
        p_byte(10, st$$438);
        break;
      }

    case 10:
      {
        p_byte(11, st$$438);
        break;
      }

    case 12:
      {
        p_byte(12, st$$438);
        break;
      }

    default:
      {
        const a$$139 = x$$144.fields[0];
        p_byte(0, st$$438);
        p_ty(a$$139)(st$$438);
      }
  }
}

function p_tyar_constraints(x$$145) {
  return function (st$$439) {
    p_list(p_tyar_constraint, x$$145, st$$439);
  };
}

function u_tyar_constraint(st$$441) {
  const tag$$9 = u_byte(st$$441) | 0;

  switch (tag$$9) {
    case 0:
      {
        return function (_arg1$$8) {
          return new _tast.TyparConstraint(0, "CoercesTo", u_ty(st$$441), _range.range0);
        };
      }

    case 1:
      {
        return function (_arg2) {
          return new _tast.TyparConstraint(3, "MayResolveMember", u_trait(st$$441), _range.range0);
        };
      }

    case 2:
      {
        return function (ridx) {
          return new _tast.TyparConstraint(1, "DefaultsTo", ridx, u_ty(st$$441), _range.range0);
        };
      }

    case 3:
      {
        return function (_arg3) {
          return new _tast.TyparConstraint(2, "SupportsNull", _range.range0);
        };
      }

    case 4:
      {
        return function (_arg4) {
          return new _tast.TyparConstraint(4, "IsNonNullableStruct", _range.range0);
        };
      }

    case 5:
      {
        return function (_arg5) {
          return new _tast.TyparConstraint(5, "IsReferenceType", _range.range0);
        };
      }

    case 6:
      {
        return function (_arg6) {
          return new _tast.TyparConstraint(7, "RequiresDefaultConstructor", _range.range0);
        };
      }

    case 7:
      {
        return function (_arg7) {
          return new _tast.TyparConstraint(6, "SimpleChoice", u_tys(st$$441), _range.range0);
        };
      }

    case 8:
      {
        return function (_arg8) {
          return new _tast.TyparConstraint(8, "IsEnum", u_ty(st$$441), _range.range0);
        };
      }

    case 9:
      {
        let tupledArg$$50;
        const a$$145 = u_ty(st$$441);
        const b$$127 = u_ty(st$$441);
        tupledArg$$50 = [a$$145, b$$127];
        return function (_arg9) {
          return new _tast.TyparConstraint(11, "IsDelegate", tupledArg$$50[0], tupledArg$$50[1], _range.range0);
        };
      }

    case 10:
      {
        return function (_arg10) {
          return new _tast.TyparConstraint(9, "SupportsComparison", _range.range0);
        };
      }

    case 11:
      {
        return function (_arg11) {
          return new _tast.TyparConstraint(10, "SupportsEquality", _range.range0);
        };
      }

    case 12:
      {
        return function (_arg12) {
          return new _tast.TyparConstraint(12, "IsUnmanaged", _range.range0);
        };
      }

    default:
      {
        return ufailwith(st$$441, "u_tyar_constraint");
      }
  }
}

function u_tyar_constraints(st$$443) {
  return u_list_revi((0, _Util.uncurry)(2, u_tyar_constraint), st$$443);
}

function p_tyar_spec_data(x$$147, st$$445) {
  p_ident(x$$147.typar_id, st$$445);
  p_attribs((0, _tast.Typar$$get_Attribs)(x$$147))(st$$445);
  p_int64((0, _Long.fromInteger)((0, _tast.TyparFlags$$get_PickledBits)(x$$147.typar_flags), false, 2), st$$445);
  p_tyar_constraints((0, _tast.Typar$$get_Constraints)(x$$147))(st$$445);
  p_xmldoc((0, _tast.Typar$$get_XmlDoc)(x$$147), st$$445);
}

function p_tyar_spec(x$$149, st$$450) {
  if ((0, _tast.Typar$$get_IsFromError)(x$$149)) {
    (0, _ErrorLogger.warning)(new _ErrorLogger.Error$([0, "p_tyar_spec: from error"], (0, _tast.Typar$$get_Range)(x$$149)));
  }

  p_osgn_decl(st$$450.otypars, p_tyar_spec_data, x$$149, st$$450);
}

function p_tyar_specs(x$$151) {
  return function (st$$452) {
    p_list(p_tyar_spec, x$$151, st$$452);
  };
}

function u_tyar_spec_data(st$$454) {
  var matchValue$$13;
  let patternInput$$23;
  const a$$148 = u_ident(st$$454);
  const b$$130 = u_attribs(st$$454);
  const c$$65 = u_int64(st$$454);
  const d$$22 = u_tyar_constraints(st$$454);
  const e$$15 = u_xmldoc(st$$454);
  patternInput$$23 = [a$$148, b$$130, c$$65, d$$22, e$$15];
  return new _tast.Typar(patternInput$$23[0], (0, _tast.TyparFlags$$$$002Ector$$Z524259A4)(~~(0, _Long.toIntNumber)(patternInput$$23[2])), (0, _tast.newStamp)(), null, null, (matchValue$$13 = [patternInput$$23[4], patternInput$$23[3], patternInput$$23[1]], (!(0, _Array.equalsWith)(_Util.comparePrimitives, matchValue$$13[0].fields[0], null) ? matchValue$$13[0].fields[0].length === 0 : false) ? matchValue$$13[1].tail == null ? matchValue$$13[2].tail == null ? null : new _tast.TyparOptionalData(null, patternInput$$23[4], patternInput$$23[3], patternInput$$23[1]) : new _tast.TyparOptionalData(null, patternInput$$23[4], patternInput$$23[3], patternInput$$23[1]) : new _tast.TyparOptionalData(null, patternInput$$23[4], patternInput$$23[3], patternInput$$23[1])));
}

function u_tyar_spec(st$$459) {
  return u_osgn_decl(st$$459.itypars, u_tyar_spec_data, st$$459);
}

function u_tyar_specs(st$$461) {
  return u_list(u_tyar_spec, st$$461);
}

fill_p_ty2(function (isStructThisArgPos$$1) {
  return function (ty$$27) {
    return function (st$$463) {
      const ty$$28 = (0, _tast.stripTyparEqns)(ty$$27);
      const ty$$29 = ((0, _TastOps.isInByrefTy)(st$$463.oglobals, ty$$28) ? isStructThisArgPos$$1 : false) ? (0, _TastOps.mkByrefTy)(st$$463.oglobals, (0, _TastOps.destByrefTy)(st$$463.oglobals, ty$$28)) : ty$$28;
      var $target$$133, l, tupInfo, nleref$$1, tc$$6, tinst, d$$24, r$$1, r$$2, r$$3, tps, unt$$7, tinst$$1, uc;

      if (ty$$29.tag === 1) {
        const activePatternResult36275 = (0, _tast.$007CERefLocal$007CERefNonLocal$007C)(ty$$29.fields[0]);

        if (activePatternResult36275.tag === 1) {
          if (ty$$29.fields[1].tail == null) {
            $target$$133 = 1;
            nleref$$1 = activePatternResult36275.fields[0];
          } else {
            $target$$133 = 2;
            tc$$6 = ty$$29.fields[0];
            tinst = ty$$29.fields[1];
          }
        } else {
          $target$$133 = 2;
          tc$$6 = ty$$29.fields[0];
          tinst = ty$$29.fields[1];
        }
      } else if (ty$$29.tag === 3) {
        $target$$133 = 3;
        d$$24 = ty$$29.fields[0];
        r$$1 = ty$$29.fields[1];
      } else if (ty$$29.tag === 5) {
        $target$$133 = 4;
        r$$2 = ty$$29.fields[0];
      } else if (ty$$29.tag === 0) {
        $target$$133 = 5;
        r$$3 = ty$$29.fields[1];
        tps = ty$$29.fields[0];
      } else if (ty$$29.tag === 6) {
        $target$$133 = 6;
        unt$$7 = ty$$29.fields[0];
      } else if (ty$$29.tag === 4) {
        $target$$133 = 7;
        tinst$$1 = ty$$29.fields[1];
        uc = ty$$29.fields[0];
      } else {
        $target$$133 = 0;
        l = ty$$29.fields[1];
        tupInfo = ty$$29.fields[0];
      }

      switch ($target$$133) {
        case 0:
          {
            if ((0, _TastOps.evalTupInfoIsStruct)(tupInfo)) {
              p_byte(8, st$$463);
              p_tys(l)(st$$463);
            } else {
              p_byte(0, st$$463);
              p_tys(l)(st$$463);
            }

            break;
          }

        case 1:
          {
            p_byte(1, st$$463);
            p_simpletyp(nleref$$1, st$$463);
            break;
          }

        case 2:
          {
            p_byte(2, st$$463);
            p_tcref("typ")(tc$$6)(st$$463);
            p_tys(tinst)(st$$463);
            break;
          }

        case 3:
          {
            p_byte(3, st$$463);
            p_ty2(isStructThisArgPos$$1)(d$$24)(st$$463);
            p_ty(r$$1)(st$$463);
            break;
          }

        case 4:
          {
            p_byte(4, st$$463);
            p_tpref(r$$2, st$$463);
            break;
          }

        case 5:
          {
            p_byte(5, st$$463);
            p_tyar_specs(tps)(st$$463);
            p_ty2(isStructThisArgPos$$1)(r$$3)(st$$463);
            break;
          }

        case 6:
          {
            p_byte(6, st$$463);
            p_measure_expr(unt$$7, st$$463);
            break;
          }

        case 7:
          {
            p_byte(7, st$$463);
            p_ucref(uc)(st$$463);
            p_tys(tinst$$1)(st$$463);
            break;
          }
      }
    };
  };
});
fill_u_ty(function (st$$466) {
  const tag$$10 = u_byte(st$$466) | 0;

  switch (tag$$10) {
    case 0:
      {
        const l$$1 = u_tys(st$$466);
        return new _tast.TType(2, "TType_tuple", _tast.tupInfoRef, l$$1);
      }

    case 1:
      {
        return u_simpletyp(st$$466);
      }

    case 2:
      {
        const tc$$7 = u_tcref(st$$466);
        const tinst$$2 = u_tys(st$$466);
        return new _tast.TType(1, "TType_app", tc$$7, tinst$$2);
      }

    case 3:
      {
        const d$$25 = u_ty(st$$466);
        const r$$4 = u_ty(st$$466);
        return new _tast.TType(3, "TType_fun", d$$25, r$$4);
      }

    case 4:
      {
        const r$$5 = u_tpref(st$$466);
        return (0, _tast.Typar$$get_AsType)(r$$5);
      }

    case 5:
      {
        const tps$$1 = u_tyar_specs(st$$466);
        const r$$6 = u_ty(st$$466);
        return new _tast.TType(0, "TType_forall", tps$$1, r$$6);
      }

    case 6:
      {
        const unt$$8 = u_measure_expr(st$$466);
        return new _tast.TType(6, "TType_measure", unt$$8);
      }

    case 7:
      {
        const uc$$1 = u_ucref(st$$466);
        const tinst$$3 = u_tys(st$$466);
        return new _tast.TType(4, "TType_ucase", uc$$1, tinst$$3);
      }

    case 8:
      {
        const l$$2 = u_tys(st$$466);
        return new _tast.TType(2, "TType_tuple", _tast.tupInfoStruct, l$$2);
      }

    default:
      {
        return ufailwith(st$$466, "u_ty");
      }
  }
});
const patternInput$00401613$002D6 = p_hole();
const p_binds = patternInput$00401613$002D6[1];
exports.p_binds = p_binds;
const fill_p_binds = patternInput$00401613$002D6[0];
exports.fill_p_binds = fill_p_binds;
const patternInput$00401614$002D7 = p_hole();
const p_targets = patternInput$00401614$002D7[1];
exports.p_targets = p_targets;
const fill_p_targets = patternInput$00401614$002D7[0];
exports.fill_p_targets = fill_p_targets;
const patternInput$00401615$002D8 = p_hole();
const p_Exprs = patternInput$00401615$002D8[1];
exports.p_Exprs = p_Exprs;
const fill_p_Exprs = patternInput$00401615$002D8[0];
exports.fill_p_Exprs = fill_p_Exprs;
const patternInput$00401616$002D9 = p_hole();
const p_constraints = patternInput$00401616$002D9[1];
exports.p_constraints = p_constraints;
const fill_p_constraints = patternInput$00401616$002D9[0];
exports.fill_p_constraints = fill_p_constraints;
const patternInput$00401617$002D10 = p_hole();
const p_Vals = patternInput$00401617$002D10[1];
exports.p_Vals = p_Vals;
const fill_p_Vals = patternInput$00401617$002D10[0];
exports.fill_p_Vals = fill_p_Vals;
const patternInput$00401619$002D11 = u_hole();
const u_binds = patternInput$00401619$002D11[1];
exports.u_binds = u_binds;
const fill_u_binds = patternInput$00401619$002D11[0];
exports.fill_u_binds = fill_u_binds;
const patternInput$00401620$002D12 = u_hole();
const u_targets = patternInput$00401620$002D12[1];
exports.u_targets = u_targets;
const fill_u_targets = patternInput$00401620$002D12[0];
exports.fill_u_targets = fill_u_targets;
const patternInput$00401621$002D13 = u_hole();
const u_Exprs = patternInput$00401621$002D13[1];
exports.u_Exprs = u_Exprs;
const fill_u_Exprs = patternInput$00401621$002D13[0];
exports.fill_u_Exprs = fill_u_Exprs;
const patternInput$00401622$002D14 = u_hole();
const u_constraints = patternInput$00401622$002D14[1];
exports.u_constraints = u_constraints;
const fill_u_constraints = patternInput$00401622$002D14[0];
exports.fill_u_constraints = fill_u_constraints;
const patternInput$00401623$002D15 = u_hole();
const u_Vals = patternInput$00401623$002D15[1];
exports.u_Vals = u_Vals;
const fill_u_Vals = patternInput$00401623$002D15[0];
exports.fill_u_Vals = fill_u_Vals;

function p_ArgReprInfo(x$$153, st$$467) {
  p_attribs(x$$153.Attribs)(st$$467);
  p_option(p_ident, x$$153.Name, st$$467);
}

function p_TyparReprInfo(_arg1$$9, st$$469) {
  const b$$133 = _arg1$$9.fields[1];
  const a$$152 = _arg1$$9.fields[0];
  p_ident(a$$152, st$$469);
  p_kind(b$$133, st$$469);
}

function p_ValReprInfo(_arg1$$10, st$$470) {
  const ret = _arg1$$10.fields[2];
  const args = _arg1$$10.fields[1];
  const a$$153 = _arg1$$10.fields[0];
  p_list(p_TyparReprInfo, a$$153, st$$470);
  p_list(function (x$$155, st$$472) {
    p_list(p_ArgReprInfo, x$$155, st$$472);
  }, args, st$$470);
  p_ArgReprInfo(ret, st$$470);
}

function u_ArgReprInfo(st$$474) {
  const a$$154 = u_attribs(st$$474);
  const b$$134 = u_option(u_ident, st$$474);
  const matchValue$$14 = [a$$154, b$$134];
  var $target$$134;

  if (matchValue$$14[0].tail == null) {
    if (matchValue$$14[1] == null) {
      $target$$134 = 0;
    } else {
      $target$$134 = 1;
    }
  } else {
    $target$$134 = 1;
  }

  switch ($target$$134) {
    case 0:
      {
        return _tast.ValReprInfoModule$$$unnamedTopArg1;
      }

    case 1:
      {
        return new _tast.ArgReprInfo(a$$154, b$$134);
      }
  }
}

function u_TyparReprInfo(st$$476) {
  const a$$155 = u_ident(st$$476);
  const b$$135 = u_kind(st$$476);
  return new _tast.TyparReprInfo(0, "TyparReprInfo", a$$155, b$$135);
}

function u_ValReprInfo(st$$477) {
  const a$$156 = u_list(u_TyparReprInfo, st$$477);
  const b$$136 = u_list(function (st$$479) {
    return u_list(u_ArgReprInfo, st$$479);
  }, st$$477);
  const c$$67 = u_ArgReprInfo(st$$477);
  return new _tast.ValReprInfo(0, "ValReprInfo", a$$156, b$$136, c$$67);
}

function p_ranges(x$$157, st$$481) {
  p_option(function (tupledArg$$53, st$$484) {
    p_range(tupledArg$$53[0], st$$484);
    p_range(tupledArg$$53[1], st$$484);
  }, x$$157, st$$481);
}

function p_istype(x$$160, st$$485) {
  switch (x$$160.tag) {
    case 1:
      {
        p_byte(1, st$$485);
        break;
      }

    case 2:
      {
        p_byte(2, st$$485);
        break;
      }

    default:
      {
        p_byte(0, st$$485);
      }
  }
}

function p_cpath(_arg1$$11, st$$486) {
  const b$$138 = _arg1$$11.fields[1];
  const a$$158 = _arg1$$11.fields[0];
  p_ILScopeRef(a$$158, st$$486);

  (function p2$$83(x$$163, st$$490) {
    p_list(function f$$55(tupledArg$$54, st$$489) {
      p_string(tupledArg$$54[0], st$$489);
      p_istype(tupledArg$$54[1], st$$489);
    }, x$$163, st$$490);
  })(b$$138, st$$486);
}

function u_ranges(st$$492) {
  return u_option(function (st$$495) {
    const a$$161 = u_range(st$$495);
    const b$$141 = u_range(st$$495);
    return [a$$161, b$$141];
  }, st$$492);
}

function u_istype(st$$496) {
  const tag$$11 = u_byte(st$$496) | 0;

  switch (tag$$11) {
    case 0:
      {
        return new _tast.ModuleOrNamespaceKind(0, "FSharpModuleWithSuffix");
      }

    case 1:
      {
        return new _tast.ModuleOrNamespaceKind(1, "ModuleOrType");
      }

    case 2:
      {
        return new _tast.ModuleOrNamespaceKind(2, "Namespace");
      }

    default:
      {
        return ufailwith(st$$496, "u_istype");
      }
  }
}

function u_cpath(st$$497) {
  let patternInput$$24;
  const a$$163 = u_ILScopeRef(st$$497);

  const b$$143 = function p2$$86(st$$501) {
    return u_list(function f$$56(st$$500) {
      const a$$162 = u_string(st$$500);
      const b$$142 = u_istype(st$$500);
      return [a$$162, b$$142];
    }, st$$501);
  }(st$$497);

  patternInput$$24 = [a$$163, b$$143];
  return new _tast.CompilationPath(0, "CompPath", patternInput$$24[0], patternInput$$24[1]);
}

function dummy(x$$164) {
  return x$$164;
}

function p_tycon_repr(x$$165, st$$503) {
  switch (x$$165.tag) {
    case 2:
      {
        const x$$166 = x$$165.fields[0];
        p_byte(1, st$$503);
        p_byte(1, st$$503);
        p_list(p_unioncase_spec, (0, _Array.toList)(x$$166.CasesTable.CasesByIndex), st$$503);
        return false;
      }

    case 4:
      {
        const ilty = x$$165.fields[0];
        p_byte(1, st$$503);
        p_byte(2, st$$503);
        p_ILType(ilty, st$$503);
        return false;
      }

    case 0:
      {
        const r$$7 = x$$165.fields[0];
        p_byte(1, st$$503);
        p_byte(3, st$$503);
        p_tycon_objmodel_data(r$$7, st$$503);
        return false;
      }

    case 5:
      {
        const ty$$30 = x$$165.fields[0];
        p_byte(1, st$$503);
        p_byte(4, st$$503);
        p_ty(ty$$30)(st$$503);
        return false;
      }

    case 6:
      {
        p_byte(0, st$$503);
        return false;
      }

    case 3:
      {
        const td = x$$165.fields[0].fields[2];
        return (0, _ErrorLogger.error)((0, _FSharp2.Operators$$$Failure)("Unexpected IL type definition" + (0, _il.ILTypeDef$$get_Name)(td)));
      }

    default:
      {
        const fs = x$$165.fields[0];
        p_byte(1, st$$503);
        p_byte(0, st$$503);
        p_rfield_table(fs, st$$503);
        return false;
      }
  }
}

function p_tycon_objmodel_data(x$$168, st$$505) {
  p_tycon_objmodel_kind(x$$168.fsobjmodel_kind, st$$505);
  p_vrefs("vslots")(x$$168.fsobjmodel_vslots)(st$$505);
  p_rfield_table(x$$168.fsobjmodel_rfields, st$$505);
}

function p_attribs_ext(f$$57, x$$171, st$$509) {
  p_list_ext(f$$57, p_attrib, x$$171, st$$509);
}

function p_unioncase_spec(x$$172, st$$511) {
  p_rfield_table(x$$172.FieldTable, st$$511);
  p_ty(x$$172.ReturnType)(st$$511);
  p_string(x$$172.CompiledName, st$$511);
  p_ident(x$$172.Id, st$$511);
  p_attribs_ext(st$$511.oInMem ? function (st$$512) {
    p_xmldoc(x$$172.XmlDoc, st$$512);
  } : null, x$$172.Attribs, st$$511);
  p_string(x$$172.XmlDocSig, st$$511);
  p_access(x$$172.Accessibility, st$$511);
}

function p_exnc_spec_data(x$$173, st$$513) {
  p_entity_spec_data(x$$173, st$$513);
}

function p_exnc_repr(x$$174, st$$514) {
  switch (x$$174.tag) {
    case 1:
      {
        const x$$176 = x$$174.fields[0];
        p_byte(1, st$$514);
        p_ILTypeRef(x$$176, st$$514);
        break;
      }

    case 2:
      {
        const x$$177 = x$$174.fields[0];
        p_byte(2, st$$514);
        p_rfield_table(x$$177, st$$514);
        break;
      }

    case 3:
      {
        p_byte(3, st$$514);
        break;
      }

    default:
      {
        const x$$175 = x$$174.fields[0];
        p_byte(0, st$$514);
        p_tcref("exn abbrev")(x$$175)(st$$514);
      }
  }
}

function p_exnc_spec(x$$178, st$$515) {
  p_tycon_spec(x$$178, st$$515);
}

function p_access(_arg1$$12, st$$516) {
  const n$$30 = _arg1$$12.fields[0];
  p_list(p_cpath, n$$30, st$$516);
}

function p_recdfield_spec(x$$179, st$$518) {
  p_bool(x$$179.rfield_mutable, st$$518);
  p_bool(x$$179.rfield_volatile, st$$518);
  p_ty(x$$179.rfield_type)(st$$518);
  p_bool(x$$179.rfield_static, st$$518);
  p_bool(x$$179.rfield_secret, st$$518);
  p_option((0, _Util.uncurry)(2, p_const), x$$179.rfield_const, st$$518);
  p_ident(x$$179.rfield_id, st$$518);
  p_attribs_ext(st$$518.oInMem ? function (st$$519) {
    p_xmldoc((0, _tast.RecdField$$get_XmlDoc)(x$$179), st$$519);
  } : null, x$$179.rfield_pattribs, st$$518);
  p_attribs(x$$179.rfield_fattribs)(st$$518);
  p_string(x$$179.rfield_xmldocsig, st$$518);
  p_access(x$$179.rfield_access, st$$518);
}

function p_rfield_table(x$$180, st$$520) {
  p_list(p_recdfield_spec, (0, _Array.toList)(x$$180.FieldsByIndex), st$$520);
}

function p_entity_spec_data(x$$182, st$$522) {
  p_tyar_specs((0, _illib.LazyWithContext$00602$$Force$$2B594)(x$$182.entity_typars, x$$182.entity_range))(st$$522);
  p_string(x$$182.entity_logical_name, st$$522);
  p_option(p_string, (0, _tast.Entity$$get_EntityCompiledName)(x$$182), st$$522);
  p_range(x$$182.entity_range, st$$522);
  p_option(p_pubpath, x$$182.entity_pubpath, st$$522);
  p_access((0, _tast.Entity$$get_Accessibility)(x$$182), st$$522);
  p_access((0, _tast.Entity$$get_TypeReprAccessibility)(x$$182), st$$522);
  p_attribs(x$$182.entity_attribs)(st$$522);
  const flagBit = p_tycon_repr(x$$182.entity_tycon_repr, st$$522);
  p_option((0, _Util.uncurry)(2, p_ty), (0, _tast.Entity$$get_TypeAbbrev)(x$$182), st$$522);
  p_tcaug(x$$182.entity_tycon_tcaug, st$$522);
  p_string("", st$$522);
  p_kind((0, _tast.Entity$$get_TypeOrMeasureKind)(x$$182), st$$522);
  p_int64((0, _Long.op_BitwiseOr)((0, _tast.EntityFlags$$get_PickledBits)(x$$182.entity_flags), flagBit ? (0, _tast.EntityFlags$$$get_ReservedBitForPickleFormatTyconReprFlag)() : (0, _Long.fromBits)(0, 0, false)), st$$522);
  p_option(p_cpath, x$$182.entity_cpath, st$$522);
  p_maybe_lazy(p_modul_typ, x$$182.entity_modul_contents, st$$522);
  p_exnc_repr((0, _tast.Entity$$get_ExceptionInfo)(x$$182), st$$522);

  if (st$$522.oInMem) {
    p_used_space1(function (st$$526) {
      p_xmldoc((0, _tast.Entity$$get_XmlDoc)(x$$182), st$$526);
    }, st$$522);
  } else {
    p_space(1, null, st$$522);
  }
}

function p_tcaug(p$$10, st$$527) {
  (function p1$$93(x$$185, st$$529) {
    p_option(function f$$58(tupledArg$$57, st$$528) {
      p_vref("compare_obj")(tupledArg$$57[0])(st$$528);
      p_vref("compare")(tupledArg$$57[1])(st$$528);
    }, x$$185, st$$529);
  })(p$$10.tcaug_compare, st$$527);

  (function p2$$93(x$$186, st$$530) {
    p_option((0, _Util.uncurry)(2, p_vref("compare_withc")), x$$186, st$$530);
  })(p$$10.tcaug_compare_withc, st$$527);

  (function p3$$41(x$$187, st$$532) {
    p_option(function f$$60(tupledArg$$58, st$$531) {
      p_vref("hash_obj")(tupledArg$$58[0])(st$$531);
      p_vref("hash_withc")(tupledArg$$58[1])(st$$531);
      p_vref("equals_withc")(tupledArg$$58[2])(st$$531);
    }, x$$187, st$$532);
  })(p$$10.tcaug_hash_and_equals_withc, st$$527);

  (function p4$$17(x$$188, st$$534) {
    p_option(function f$$61(tupledArg$$59, st$$533) {
      p_vref("hash")(tupledArg$$59[0])(st$$533);
      p_vref("equals")(tupledArg$$59[1])(st$$533);
    }, x$$188, st$$534);
  })(p$$10.tcaug_equals, st$$527);

  (function p5$$13(x$$189, st$$536) {
    p_list(function f$$62(tupledArg$$60, st$$535) {
      p_string(tupledArg$$60[0], st$$535);
      p_vref("adhoc")(tupledArg$$60[1])(st$$535);
    }, x$$189, st$$536);
  })((0, _List.map)(function mapping(tupledArg$$63) {
    return [(0, _tast.ValRef$$get_LogicalName)(tupledArg$$63[1]), tupledArg$$63[1]];
  }, (0, _List.filter)(function predicate(tupledArg$$62) {
    return !tupledArg$$62[0];
  }, (0, _ResizeArray.toList)(p$$10.tcaug_adhoc_list))), st$$527);

  (function p6$$11(x$$190, st$$538) {
    p_list(function f$$63(tupledArg$$61, st$$537) {
      p_ty(tupledArg$$61[0])(st$$537);
      p_bool(tupledArg$$61[1], st$$537);
      p_dummy_range(tupledArg$$61[2], st$$537);
    }, x$$190, st$$538);
  })(p$$10.tcaug_interfaces, st$$527);

  (function p7$$2(x$$191, st$$539) {
    p_option((0, _Util.uncurry)(2, p_ty), x$$191, st$$539);
  })(p$$10.tcaug_super, st$$527);

  p_bool(p$$10.tcaug_abstract, st$$527);

  (function p9(arg10$0040$$41, st$$540) {
    p_space(1, null, st$$540);
  })(null, st$$527);
}

function p_tycon_spec(x$$192, st$$542) {
  p_osgn_decl(st$$542.otycons, p_entity_spec_data, x$$192, st$$542);
}

function p_parentref(x$$194, st$$544) {
  if (x$$194.tag === 0) {
    const x$$195 = x$$194.fields[0];
    p_byte(1, st$$544);
    p_tcref("parent tycon")(x$$195)(st$$544);
  } else {
    p_byte(0, st$$544);
  }
}

function p_attribkind(x$$196, st$$545) {
  if (x$$196.tag === 1) {
    const x$$198 = x$$196.fields[0];
    p_byte(1, st$$545);
    p_vref("attrib")(x$$198)(st$$545);
  } else {
    const x$$197 = x$$196.fields[0];
    p_byte(0, st$$545);
    p_ILMethodRef(x$$197, st$$545);
  }
}

function p_attrib(_arg2$$2, st$$546) {
  const f$$65 = _arg2$$2.fields[6];
  const e$$18 = _arg2$$2.fields[4];
  const d$$27 = _arg2$$2.fields[3];
  const c$$72 = _arg2$$2.fields[2];
  const b$$152 = _arg2$$2.fields[1];
  const a$$172 = _arg2$$2.fields[0];
  const _targets = _arg2$$2.fields[5];
  p_tcref("attrib")(a$$172)(st$$546);
  p_attribkind(b$$152, st$$546);

  (function p3$$42(x$$200, st$$548) {
    p_list(p_attrib_expr, x$$200, st$$548);
  })(c$$72, st$$546);

  (function p4$$18(x$$201, st$$550) {
    p_list(p_attrib_arg, x$$201, st$$550);
  })(d$$27, st$$546);

  p_bool(e$$18, st$$546);
  p_dummy_range(f$$65, st$$546);
}

function p_attrib_expr(_arg3$$1, st$$553) {
  const e2 = _arg3$$1.fields[1];
  const e1 = _arg3$$1.fields[0];
  p_expr(e1)(st$$553);
  p_expr(e2)(st$$553);
}

function p_attrib_arg(_arg4$$1, st$$555) {
  const d$$29 = _arg4$$1.fields[0][3];
  const c$$74 = _arg4$$1.fields[0][2];
  const b$$155 = _arg4$$1.fields[0][1];
  const a$$175 = _arg4$$1.fields[0][0];
  p_string(a$$175, st$$555);
  p_ty(b$$155)(st$$555);
  p_bool(c$$74, st$$555);
  p_attrib_expr(d$$29, st$$555);
}

function p_member_info(x$$202, st$$558) {
  var tupledArg$$66;
  (tupledArg$$66 = [x$$202.ApparentEnclosingEntity, x$$202.MemberFlags, x$$202.ImplementedSlotSigs, x$$202.IsImplemented], function (st$$562) {
    p_tcref("member_info")(tupledArg$$66[0])(st$$562);
    p_MemberFlags(tupledArg$$66[1], st$$562);

    (function p3$$44(x$$204, st$$560) {
      p_list(p_slotsig, x$$204, st$$560);
    })(tupledArg$$66[2], st$$562);

    p_bool(tupledArg$$66[3], st$$562);
  })(st$$558);
}

function p_tycon_objmodel_kind(x$$205, st$$563) {
  switch (x$$205.tag) {
    case 1:
      {
        p_byte(1, st$$563);
        break;
      }

    case 2:
      {
        p_byte(2, st$$563);
        break;
      }

    case 3:
      {
        const ss = x$$205.fields[0];
        p_byte(3, st$$563);
        p_slotsig(ss, st$$563);
        break;
      }

    case 4:
      {
        p_byte(4, st$$563);
        break;
      }

    default:
      {
        p_byte(0, st$$563);
      }
  }
}

function p_mustinline(x$$206, st$$564) {
  p_byte(x$$206.tag === 1 ? 1 : x$$206.tag === 2 ? 2 : x$$206.tag === 3 ? 3 : 0, st$$564);
}

function p_basethis(x$$207, st$$565) {
  p_byte(x$$207.tag === 0 ? 1 : x$$207.tag === 2 ? 2 : x$$207.tag === 3 ? 3 : 0, st$$565);
}

function p_vrefFlags(x$$208, st$$566) {
  switch (x$$208.tag) {
    case 2:
      {
        p_byte(1, st$$566);
        break;
      }

    case 3:
      {
        p_byte(2, st$$566);
        break;
      }

    case 0:
      {
        const ty$$31 = x$$208.fields[0];
        p_byte(3, st$$566);
        p_ty(ty$$31)(st$$566);
        break;
      }

    case 4:
      {
        p_byte(4, st$$566);
        break;
      }

    default:
      {
        p_byte(0, st$$566);
      }
  }
}

function p_ValData(x$$209, st$$567) {
  p_string(x$$209.val_logical_name, st$$567);
  p_option(p_string, (0, _tast.Val$$get_ValCompiledName)(x$$209), st$$567);
  p_ranges((0, _Option.defaultArg)((0, _tast.Val$$get_ValReprInfo)(x$$209), null, function mapping$$1(_arg3$$2) {
    return [x$$209.val_range, (0, _tast.Val$$get_DefinitionRange)(x$$209)];
  }), st$$567);
  const isStructThisArgPos$$2 = (0, _tast.Val$$get_IsMember)(x$$209) ? checkForInRefStructThisArg(st$$567, (0, _tast.Val$$get_Type)(x$$209)) : false;
  p_ty2(isStructThisArgPos$$2)(x$$209.val_type)(st$$567);
  p_int64((0, _tast.ValFlags$$get_PickledBits)(x$$209.val_flags), st$$567);
  p_option(p_member_info, (0, _tast.Val$$get_MemberInfo)(x$$209), st$$567);
  p_attribs((0, _tast.Val$$get_Attribs)(x$$209))(st$$567);
  p_option(p_ValReprInfo, (0, _tast.Val$$get_ValReprInfo)(x$$209), st$$567);
  p_string((0, _tast.Val$$get_XmlDocSig)(x$$209), st$$567);
  p_access((0, _tast.Val$$get_Accessibility)(x$$209), st$$567);
  p_parentref((0, _tast.Val$$get_DeclaringEntity)(x$$209), st$$567);
  p_option((0, _Util.uncurry)(2, p_const), (0, _tast.Val$$get_LiteralValue)(x$$209), st$$567);

  if (st$$567.oInMem) {
    p_used_space1(function (st$$570) {
      p_xmldoc((0, _tast.Val$$get_XmlDoc)(x$$209), st$$570);
    }, st$$567);
  } else {
    p_space(1, null, st$$567);
  }
}

function p_Val(x$$211, st$$571) {
  p_osgn_decl(st$$571.ovals, p_ValData, x$$211, st$$571);
}

function p_modul_typ(x$$213, st$$573) {
  var tupledArg$$67;
  (tupledArg$$67 = [(0, _tast.ModuleOrNamespaceType$$get_ModuleOrNamespaceKind)(x$$213), (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)(x$$213), (0, _tast.ModuleOrNamespaceType$$get_AllEntities)(x$$213)], function (st$$577) {
    p_istype(tupledArg$$67[0], st$$577);
    p_qlist(p_Val)(tupledArg$$67[1])(st$$577);
    p_qlist(p_tycon_spec)(tupledArg$$67[2])(st$$577);
  })(st$$573);
}

function u_tycon_repr(st$$578) {
  const tag1 = u_byte(st$$578) | 0;

  switch (tag1) {
    case 0:
      {
        return function (_flagBit) {
          return new _tast.TyconRepresentation(6, "TNoRepr");
        };
      }

    case 1:
      {
        const tag2 = u_byte(st$$578) | 0;

        switch (tag2) {
          case 0:
            {
              const v$$11 = u_rfield_table(st$$578);
              return function (_flagBit$$1) {
                return new _tast.TyconRepresentation(1, "TRecdRepr", v$$11);
              };
            }

          case 1:
            {
              const v$$12 = u_list(u_unioncase_spec, st$$578);
              return function (_flagBit$$2) {
                return (0, _tast.MakeUnionRepr)(v$$12);
              };
            }

          case 2:
            {
              const v$$13 = u_ILType(st$$578);
              return function (flagBit$$1) {
                if (flagBit$$1) {
                  const iltref = (0, _il.ILType$$get_TypeRef)(v$$13);

                  if (st$$578.iILModule != null) {
                    const iILModule$$1 = st$$578.iILModule;

                    try {
                      const find = function find(acc, enclosingTypeNames, tdefs) {
                        find: while (true) {
                          if (enclosingTypeNames.tail != null) {
                            const t = enclosingTypeNames.tail;
                            const h$$4 = enclosingTypeNames.head;
                            const nestedTypeDef = (0, _il.ILTypeDefs$$FindByName$$Z721C83C5)(tdefs, h$$4);
                            acc = (0, _Types.L)((0, _il.ILTypeDefs$$FindByName$$Z721C83C5)(tdefs, h$$4), acc);
                            enclosingTypeNames = t;
                            tdefs = (0, _il.ILTypeDef$$get_NestedTypes)(nestedTypeDef);
                            continue find;
                          } else {
                            return [(0, _List.reverse)(acc), (0, _il.ILTypeDefs$$FindByName$$Z721C83C5)(tdefs, (0, _il.ILTypeRef$$get_Name)(iltref))];
                          }
                        }
                      };

                      const patternInput$$25 = find((0, _Types.L)(), (0, _il.ILTypeRef$$get_Enclosing)(iltref), iILModule$$1.TypeDefs);
                      return new _tast.TyconRepresentation(3, "TILObjectRepr", new _tast.TILObjectReprData(0, "TILObjectReprData", st$$578.iilscope, patternInput$$25[0], patternInput$$25[1]));
                    } catch (matchValue$$16) {
                      return new _tast.TyconRepresentation(6, "TNoRepr");
                    }
                  } else {
                    return new _tast.TyconRepresentation(6, "TNoRepr");
                  }
                } else {
                  return new _tast.TyconRepresentation(4, "TAsmRepr", v$$13);
                }
              };
            }

          case 3:
            {
              const v$$14 = u_tycon_objmodel_data(st$$578);
              return function (_flagBit$$3) {
                return new _tast.TyconRepresentation(0, "TFSharpObjectRepr", v$$14);
              };
            }

          case 4:
            {
              const v$$15 = u_ty(st$$578);
              return function (_flagBit$$4) {
                return new _tast.TyconRepresentation(5, "TMeasureableRepr", v$$15);
              };
            }

          default:
            {
              return ufailwith(st$$578, "u_tycon_repr");
            }
        }
      }

    default:
      {
        return ufailwith(st$$578, "u_tycon_repr");
      }
  }
}

function u_tycon_objmodel_data(st$$580) {
  let patternInput$$26;
  const a$$179 = u_tycon_objmodel_kind(st$$580);
  const b$$159 = u_vrefs(st$$580);
  const c$$78 = u_rfield_table(st$$580);
  patternInput$$26 = [a$$179, b$$159, c$$78];
  return new _tast.TyconObjModelData(patternInput$$26[0], patternInput$$26[1], patternInput$$26[2]);
}

function u_attribs_ext(extraf$$3, st$$584) {
  return u_list_ext(extraf$$3, u_attrib, st$$584);
}

function u_unioncase_spec(st$$586) {
  const a$$180 = u_rfield_table(st$$586);
  const b$$160 = u_ty(st$$586);
  const c$$79 = u_string(st$$586);
  const d$$32 = u_ident(st$$586);
  const patternInput$$27 = u_attribs_ext(u_xmldoc, st$$586);
  const f$$67 = u_string(st$$586);
  const i$$18 = u_access(st$$586);
  return new _tast.UnionCase(a$$180, b$$160, c$$79, (0, _Option.defaultArg)(patternInput$$27[0], (0, _ast.XmlDoc$$$get_Empty)()), f$$67, d$$32, null, i$$18, patternInput$$27[1]);
}

function u_exnc_spec_data(st$$588) {
  return u_entity_spec_data(st$$588);
}

function u_exnc_repr(st$$589) {
  const tag$$12 = u_byte(st$$589) | 0;

  switch (tag$$12) {
    case 0:
      {
        return new _tast.ExceptionInfo(0, "TExnAbbrevRepr", u_tcref(st$$589));
      }

    case 1:
      {
        return new _tast.ExceptionInfo(1, "TExnAsmRepr", u_ILTypeRef(st$$589));
      }

    case 2:
      {
        return new _tast.ExceptionInfo(2, "TExnFresh", u_rfield_table(st$$589));
      }

    case 3:
      {
        return new _tast.ExceptionInfo(3, "TExnNone");
      }

    default:
      {
        return ufailwith(st$$589, "u_exnc_repr");
      }
  }
}

function u_exnc_spec(st$$590) {
  return u_tycon_spec(st$$590);
}

function u_access(st$$591) {
  const matchValue$$17 = u_list(u_cpath, st$$591);

  if (matchValue$$17.tail == null) {
    return _tast.taccessPublic;
  } else {
    const res$$8 = matchValue$$17;
    return new _tast.Accessibility(0, "TAccess", res$$8);
  }
}

function u_recdfield_spec(st$$593) {
  const a$$181 = u_bool(st$$593);
  const b$$161 = u_bool(st$$593);
  const c1 = u_ty(st$$593);
  const c2 = u_bool(st$$593);
  const c2b = u_bool(st$$593);
  const c3 = u_option(u_const, st$$593);
  const d$$33 = u_ident(st$$593);
  const patternInput$$28 = u_attribs_ext(u_xmldoc, st$$593);
  const e2$$1 = u_attribs(st$$593);
  const f$$68 = u_string(st$$593);
  const g$$3 = u_access(st$$593);
  return new _tast.RecdField(a$$181, (0, _Option.defaultArg)(patternInput$$28[0], (0, _ast.XmlDoc$$$get_Empty)()), f$$68, c1, c2, b$$161, c2b, c3, g$$3, patternInput$$28[1], e2$$1, d$$33, false, null);
}

function u_rfield_table(st$$595) {
  return (0, _tast.MakeRecdFieldsTable)(u_list(u_recdfield_spec, st$$595));
}

function u_entity_spec_data(st$$597) {
  var matchValue$$18;
  let patternInput$$29;
  const a$$183 = u_tyar_specs(st$$597);
  const b$$163 = u_string(st$$597);

  const c$$80 = function p3$$47(st$$598) {
    return u_option(u_string, st$$598);
  }(st$$597);

  const d$$34 = u_range(st$$597);

  const e$$21 = function p5$$15(st$$600) {
    return u_option(u_pubpath, st$$600);
  }(st$$597);

  const f$$69 = function p6$$13(st$$604) {
    const a$$182 = u_access(st$$604);
    const b$$162 = u_access(st$$604);
    return [a$$182, b$$162];
  }(st$$597);

  const x7$$5 = u_attribs(st$$597);
  const x8$$1 = u_tycon_repr(st$$597);

  const x9$$1 = function p9$$1(st$$606) {
    return u_option(u_ty, st$$606);
  }(st$$597);

  const x10 = u_tcaug(st$$597);
  const x11 = u_string(st$$597);
  const x12 = u_kind(st$$597);
  const x13 = u_int64(st$$597);

  const x14 = function p14(st$$610) {
    return u_option(u_cpath, st$$610);
  }(st$$597);

  const x15 = u_lazy(u_modul_typ)(st$$597);
  const x16 = u_exnc_repr(st$$597);

  const x17 = function p17(st$$614) {
    return u_used_space1(u_xmldoc, st$$614);
  }(st$$597);

  patternInput$$29 = [a$$183, b$$163, c$$80, d$$34, e$$21, f$$69, x7$$5, x8$$1, x9$$1, x10, x11, x12, x13, x14, x15, x16, x17];
  const x4b = patternInput$$29[5][1];
  const x4a = patternInput$$29[5][0];
  const x7$$6 = patternInput$$29[7](!(0, _Long.equals)((0, _Long.op_BitwiseAnd)(patternInput$$29[12], (0, _tast.EntityFlags$$$get_ReservedBitForPickleFormatTyconReprFlag)()), (0, _Long.fromBits)(0, 0, false)));
  const x11$$2 = (0, _Long.op_BitwiseAnd)(patternInput$$29[12], (0, _Long.op_LogicalNot)((0, _tast.EntityFlags$$$get_ReservedBitForPickleFormatTyconReprFlag)()));
  return new _tast.Entity((0, _illib.LazyWithContext$00602$$$NotLazy$$2B595)(patternInput$$29[0]), (0, _tast.EntityFlags$$$$002Ector$$Z524259C1)(x11$$2), (0, _tast.newStamp)(), patternInput$$29[1], patternInput$$29[3], patternInput$$29[6], x7$$6, patternInput$$29[9], new _tast.MaybeLazy$00601(1, "Lazy", patternInput$$29[14]), patternInput$$29[4], patternInput$$29[13], (0, _lib.newCache)(), (matchValue$$18 = [patternInput$$29[2], patternInput$$29[11], patternInput$$29[16], patternInput$$29[8], x4a, x4b, patternInput$$29[15]], matchValue$$18[0] == null ? matchValue$$18[1].tag === 0 ? matchValue$$18[2] == null ? matchValue$$18[3] == null ? matchValue$$18[4].fields[0].tail == null ? matchValue$$18[5].fields[0].tail == null ? matchValue$$18[6].tag === 3 ? null : new _tast.EntityOptionalData(patternInput$$29[2], (0, _tast.Entity$$$get_EmptyEntityOptData)().entity_other_range, patternInput$$29[11], (0, _Option.defaultArg)(patternInput$$29[16], (0, _ast.XmlDoc$$$get_Empty)()), "", patternInput$$29[8], x4b, x4a, patternInput$$29[15]) : new _tast.EntityOptionalData(patternInput$$29[2], (0, _tast.Entity$$$get_EmptyEntityOptData)().entity_other_range, patternInput$$29[11], (0, _Option.defaultArg)(patternInput$$29[16], (0, _ast.XmlDoc$$$get_Empty)()), "", patternInput$$29[8], x4b, x4a, patternInput$$29[15]) : new _tast.EntityOptionalData(patternInput$$29[2], (0, _tast.Entity$$$get_EmptyEntityOptData)().entity_other_range, patternInput$$29[11], (0, _Option.defaultArg)(patternInput$$29[16], (0, _ast.XmlDoc$$$get_Empty)()), "", patternInput$$29[8], x4b, x4a, patternInput$$29[15]) : new _tast.EntityOptionalData(patternInput$$29[2], (0, _tast.Entity$$$get_EmptyEntityOptData)().entity_other_range, patternInput$$29[11], (0, _Option.defaultArg)(patternInput$$29[16], (0, _ast.XmlDoc$$$get_Empty)()), "", patternInput$$29[8], x4b, x4a, patternInput$$29[15]) : new _tast.EntityOptionalData(patternInput$$29[2], (0, _tast.Entity$$$get_EmptyEntityOptData)().entity_other_range, patternInput$$29[11], (0, _Option.defaultArg)(patternInput$$29[16], (0, _ast.XmlDoc$$$get_Empty)()), "", patternInput$$29[8], x4b, x4a, patternInput$$29[15]) : new _tast.EntityOptionalData(patternInput$$29[2], (0, _tast.Entity$$$get_EmptyEntityOptData)().entity_other_range, patternInput$$29[11], (0, _Option.defaultArg)(patternInput$$29[16], (0, _ast.XmlDoc$$$get_Empty)()), "", patternInput$$29[8], x4b, x4a, patternInput$$29[15]) : new _tast.EntityOptionalData(patternInput$$29[2], (0, _tast.Entity$$$get_EmptyEntityOptData)().entity_other_range, patternInput$$29[11], (0, _Option.defaultArg)(patternInput$$29[16], (0, _ast.XmlDoc$$$get_Empty)()), "", patternInput$$29[8], x4b, x4a, patternInput$$29[15])));
}

function u_tcaug(st$$617) {
  let patternInput$$30;

  const a$$189 = function p1$$107(st$$619) {
    return u_option(function f$$70(st$$618) {
      const a$$184 = u_vref(st$$618);
      const b$$164 = u_vref(st$$618);
      return [a$$184, b$$164];
    }, st$$619);
  }(st$$617);

  const b$$169 = function p2$$107(st$$620) {
    return u_option(u_vref, st$$620);
  }(st$$617);

  const c$$83 = function p3$$50(st$$622) {
    return u_option(function f$$71(st$$621) {
      const a$$185 = u_vref(st$$621);
      const b$$165 = u_vref(st$$621);
      const c$$81 = u_vref(st$$621);
      return [a$$185, b$$165, c$$81];
    }, st$$622);
  }(st$$617);

  const d$$35 = function p4$$22(st$$624) {
    return u_option(function f$$72(st$$623) {
      const a$$186 = u_vref(st$$623);
      const b$$166 = u_vref(st$$623);
      return [a$$186, b$$166];
    }, st$$624);
  }(st$$617);

  const e$$22 = function p5$$16(st$$626) {
    return u_list(function f$$73(st$$625) {
      const a$$187 = u_string(st$$625);
      const b$$167 = u_vref(st$$625);
      return [a$$187, b$$167];
    }, st$$626);
  }(st$$617);

  const f$$75 = function p6$$14(st$$628) {
    return u_list(function f$$74(st$$627) {
      const a$$188 = u_ty(st$$627);
      const b$$168 = u_bool(st$$627);
      const c$$82 = u_dummy_range(st$$627);
      return [a$$188, b$$168, c$$82];
    }, st$$628);
  }(st$$617);

  const x7$$7 = function p7$$4(st$$629) {
    return u_option(u_ty, st$$629);
  }(st$$617);

  const x8$$3 = u_bool(st$$617);

  const x9$$3 = function p9$$2(st$$630) {
    u_space(1, st$$630);
  }(st$$617);

  patternInput$$30 = [a$$189, b$$169, c$$83, d$$35, e$$22, f$$75, x7$$7, x8$$3, null];
  return new _tast.TyconAugmentation(patternInput$$30[0], patternInput$$30[1], patternInput$$30[3], patternInput$$30[2], false, Array.from((0, _List.map)(function mapping$$2(tupledArg$$68) {
    return [false, tupledArg$$68[1]];
  }, patternInput$$30[4])), (0, _illib.NameMultiMapModule$$$ofList)(patternInput$$30[4]), patternInput$$30[5], patternInput$$30[6], true, patternInput$$30[7]);
}

function u_tycon_spec(st$$632) {
  return u_osgn_decl(st$$632.itycons, u_entity_spec_data, st$$632);
}

function u_parentref(st$$634) {
  const tag$$13 = u_byte(st$$634) | 0;

  switch (tag$$13) {
    case 0:
      {
        return new _tast.ParentRef(1, "ParentNone");
      }

    case 1:
      {
        return new _tast.ParentRef(0, "Parent", u_tcref(st$$634));
      }

    default:
      {
        return ufailwith(st$$634, "u_attribkind");
      }
  }
}

function u_attribkind(st$$635) {
  const tag$$14 = u_byte(st$$635) | 0;

  switch (tag$$14) {
    case 0:
      {
        return new _tast.AttribKind(0, "ILAttrib", u_ILMethodRef(st$$635));
      }

    case 1:
      {
        return new _tast.AttribKind(1, "FSAttrib", u_vref(st$$635));
      }

    default:
      {
        return ufailwith(st$$635, "u_attribkind");
      }
  }
}

function u_attrib(st$$636) {
  let patternInput$$31;
  const a$$190 = u_tcref(st$$636);
  const b$$170 = u_attribkind(st$$636);

  const c$$85 = function p3$$51(st$$638) {
    return u_list(u_attrib_expr, st$$638);
  }(st$$636);

  const d$$37 = function p4$$23(st$$640) {
    return u_list(u_attrib_arg, st$$640);
  }(st$$636);

  const e$$24 = u_bool(st$$636);
  const f$$76 = u_dummy_range(st$$636);
  patternInput$$31 = [a$$190, b$$170, c$$85, d$$37, e$$24, f$$76];
  return new _tast.Attrib(0, "Attrib", patternInput$$31[0], patternInput$$31[1], patternInput$$31[2], patternInput$$31[3], patternInput$$31[4], null, patternInput$$31[5]);
}

function u_attrib_expr(st$$643) {
  let patternInput$$32;
  const a$$192 = u_expr(st$$643);
  const b$$172 = u_expr(st$$643);
  patternInput$$32 = [a$$192, b$$172];
  return new _tast.AttribExpr(0, "AttribExpr", patternInput$$32[0], patternInput$$32[1]);
}

function u_attrib_arg(st$$645) {
  let patternInput$$33;
  const a$$194 = u_string(st$$645);
  const b$$174 = u_ty(st$$645);
  const c$$87 = u_bool(st$$645);
  const d$$39 = u_attrib_expr(st$$645);
  patternInput$$33 = [a$$194, b$$174, c$$87, d$$39];
  return new _tast.AttribNamedArg(0, "AttribNamedArg", [patternInput$$33[0], patternInput$$33[1], patternInput$$33[2], patternInput$$33[3]]);
}

function u_member_info(st$$648) {
  let patternInput$$34;
  const a$$196 = u_tcref(st$$648);
  const b$$176 = u_MemberFlags(st$$648);

  const c$$89 = function p3$$53(st$$650) {
    return u_list(u_slotsig, st$$650);
  }(st$$648);

  const d$$41 = u_bool(st$$648);
  patternInput$$34 = [a$$196, b$$176, c$$89, d$$41];
  return new _tast.ValMemberInfo(patternInput$$34[0], patternInput$$34[2], patternInput$$34[3], patternInput$$34[1]);
}

function u_tycon_objmodel_kind(st$$653) {
  const tag$$15 = u_byte(st$$653) | 0;

  switch (tag$$15) {
    case 0:
      {
        return new _tast.TyconObjModelKind(0, "TTyconClass");
      }

    case 1:
      {
        return new _tast.TyconObjModelKind(1, "TTyconInterface");
      }

    case 2:
      {
        return new _tast.TyconObjModelKind(2, "TTyconStruct");
      }

    case 3:
      {
        return new _tast.TyconObjModelKind(3, "TTyconDelegate", u_slotsig(st$$653));
      }

    case 4:
      {
        return new _tast.TyconObjModelKind(4, "TTyconEnum");
      }

    default:
      {
        return ufailwith(st$$653, "u_tycon_objmodel_kind");
      }
  }
}

function u_mustinline(st$$654) {
  const matchValue$$19 = u_byte(st$$654) | 0;

  switch (matchValue$$19) {
    case 0:
      {
        return new _tast.ValInline(0, "PseudoVal");
      }

    case 1:
      {
        return new _tast.ValInline(1, "Always");
      }

    case 2:
      {
        return new _tast.ValInline(2, "Optional");
      }

    case 3:
      {
        return new _tast.ValInline(3, "Never");
      }

    default:
      {
        return ufailwith(st$$654, "u_mustinline");
      }
  }
}

function u_basethis(st$$655) {
  const matchValue$$20 = u_byte(st$$655) | 0;

  switch (matchValue$$20) {
    case 0:
      {
        return new _tast.ValBaseOrThisInfo(1, "BaseVal");
      }

    case 1:
      {
        return new _tast.ValBaseOrThisInfo(0, "CtorThisVal");
      }

    case 2:
      {
        return new _tast.ValBaseOrThisInfo(2, "NormalVal");
      }

    case 3:
      {
        return new _tast.ValBaseOrThisInfo(3, "MemberThisVal");
      }

    default:
      {
        return ufailwith(st$$655, "u_basethis");
      }
  }
}

function u_vrefFlags(st$$656) {
  const matchValue$$21 = u_byte(st$$656) | 0;

  switch (matchValue$$21) {
    case 0:
      {
        return new _tast.ValUseFlag(1, "NormalValUse");
      }

    case 1:
      {
        return new _tast.ValUseFlag(2, "CtorValUsedAsSuperInit");
      }

    case 2:
      {
        return new _tast.ValUseFlag(3, "CtorValUsedAsSelfInit");
      }

    case 3:
      {
        return new _tast.ValUseFlag(0, "PossibleConstrainedCall", u_ty(st$$656));
      }

    case 4:
      {
        return new _tast.ValUseFlag(4, "VSlotDirectCall");
      }

    default:
      {
        return ufailwith(st$$656, "u_vrefFlags");
      }
  }
}

function u_ValData(st$$657) {
  var a$$198, matchValue$$22, b$$178;
  let patternInput$$35;
  const a$$197 = u_string(st$$657);

  const b$$177 = function p2$$112(st$$658) {
    return u_option(u_string, st$$658);
  }(st$$657);

  const c$$90 = u_ranges(st$$657);
  const d$$42 = u_ty(st$$657);
  const e$$26 = u_int64(st$$657);

  const f$$78 = function p6$$16(st$$661) {
    return u_option(u_member_info, st$$661);
  }(st$$657);

  const x7$$8 = u_attribs(st$$657);

  const x8$$4 = function p8$$3(st$$663) {
    return u_option(u_ValReprInfo, st$$663);
  }(st$$657);

  const x9$$4 = u_string(st$$657);
  const x10$$1 = u_access(st$$657);
  const x11$$3 = u_parentref(st$$657);

  const x12$$2 = function p12$$1(st$$667) {
    return u_option(u_const, st$$667);
  }(st$$657);

  const x13$$2 = function p13$$1(st$$668) {
    return u_used_space1(u_xmldoc, st$$668);
  }(st$$657);

  patternInput$$35 = [a$$197, b$$177, c$$90, d$$42, e$$26, f$$78, x7$$8, x8$$4, x9$$4, x10$$1, x11$$3, x12$$2, x13$$2];
  return new _tast.Val(patternInput$$35[0], patternInput$$35[2] != null ? (a$$198 = patternInput$$35[2][0], a$$198) : _range.range0, patternInput$$35[3], (0, _tast.newStamp)(), (0, _tast.ValFlags$$$$002Ector$$Z524259C1)(patternInput$$35[4]), (matchValue$$22 = [patternInput$$35[1], patternInput$$35[2], patternInput$$35[7], patternInput$$35[11], patternInput$$35[9], patternInput$$35[12], patternInput$$35[5], patternInput$$35[10], patternInput$$35[8], patternInput$$35[6]], matchValue$$22[0] == null ? matchValue$$22[1] == null ? matchValue$$22[2] == null ? matchValue$$22[3] == null ? matchValue$$22[4].fields[0].tail == null ? matchValue$$22[5] == null ? matchValue$$22[6] == null ? matchValue$$22[7].tag === 1 ? matchValue$$22[8] === "" ? matchValue$$22[9].tail == null ? null : new _tast.ValOptionalData(patternInput$$35[1], patternInput$$35[2] != null ? (b$$178 = patternInput$$35[2][1], [b$$178, true]) : null, patternInput$$35[11], null, patternInput$$35[7], patternInput$$35[9], (0, _Option.defaultArg)(patternInput$$35[12], (0, _ast.XmlDoc$$$get_Empty)()), patternInput$$35[5], patternInput$$35[10], patternInput$$35[8], patternInput$$35[6]) : new _tast.ValOptionalData(patternInput$$35[1], patternInput$$35[2] != null ? (b$$178 = patternInput$$35[2][1], [b$$178, true]) : null, patternInput$$35[11], null, patternInput$$35[7], patternInput$$35[9], (0, _Option.defaultArg)(patternInput$$35[12], (0, _ast.XmlDoc$$$get_Empty)()), patternInput$$35[5], patternInput$$35[10], patternInput$$35[8], patternInput$$35[6]) : new _tast.ValOptionalData(patternInput$$35[1], patternInput$$35[2] != null ? (b$$178 = patternInput$$35[2][1], [b$$178, true]) : null, patternInput$$35[11], null, patternInput$$35[7], patternInput$$35[9], (0, _Option.defaultArg)(patternInput$$35[12], (0, _ast.XmlDoc$$$get_Empty)()), patternInput$$35[5], patternInput$$35[10], patternInput$$35[8], patternInput$$35[6]) : new _tast.ValOptionalData(patternInput$$35[1], patternInput$$35[2] != null ? (b$$178 = patternInput$$35[2][1], [b$$178, true]) : null, patternInput$$35[11], null, patternInput$$35[7], patternInput$$35[9], (0, _Option.defaultArg)(patternInput$$35[12], (0, _ast.XmlDoc$$$get_Empty)()), patternInput$$35[5], patternInput$$35[10], patternInput$$35[8], patternInput$$35[6]) : new _tast.ValOptionalData(patternInput$$35[1], patternInput$$35[2] != null ? (b$$178 = patternInput$$35[2][1], [b$$178, true]) : null, patternInput$$35[11], null, patternInput$$35[7], patternInput$$35[9], (0, _Option.defaultArg)(patternInput$$35[12], (0, _ast.XmlDoc$$$get_Empty)()), patternInput$$35[5], patternInput$$35[10], patternInput$$35[8], patternInput$$35[6]) : new _tast.ValOptionalData(patternInput$$35[1], patternInput$$35[2] != null ? (b$$178 = patternInput$$35[2][1], [b$$178, true]) : null, patternInput$$35[11], null, patternInput$$35[7], patternInput$$35[9], (0, _Option.defaultArg)(patternInput$$35[12], (0, _ast.XmlDoc$$$get_Empty)()), patternInput$$35[5], patternInput$$35[10], patternInput$$35[8], patternInput$$35[6]) : new _tast.ValOptionalData(patternInput$$35[1], patternInput$$35[2] != null ? (b$$178 = patternInput$$35[2][1], [b$$178, true]) : null, patternInput$$35[11], null, patternInput$$35[7], patternInput$$35[9], (0, _Option.defaultArg)(patternInput$$35[12], (0, _ast.XmlDoc$$$get_Empty)()), patternInput$$35[5], patternInput$$35[10], patternInput$$35[8], patternInput$$35[6]) : new _tast.ValOptionalData(patternInput$$35[1], patternInput$$35[2] != null ? (b$$178 = patternInput$$35[2][1], [b$$178, true]) : null, patternInput$$35[11], null, patternInput$$35[7], patternInput$$35[9], (0, _Option.defaultArg)(patternInput$$35[12], (0, _ast.XmlDoc$$$get_Empty)()), patternInput$$35[5], patternInput$$35[10], patternInput$$35[8], patternInput$$35[6]) : new _tast.ValOptionalData(patternInput$$35[1], patternInput$$35[2] != null ? (b$$178 = patternInput$$35[2][1], [b$$178, true]) : null, patternInput$$35[11], null, patternInput$$35[7], patternInput$$35[9], (0, _Option.defaultArg)(patternInput$$35[12], (0, _ast.XmlDoc$$$get_Empty)()), patternInput$$35[5], patternInput$$35[10], patternInput$$35[8], patternInput$$35[6]) : new _tast.ValOptionalData(patternInput$$35[1], patternInput$$35[2] != null ? (b$$178 = patternInput$$35[2][1], [b$$178, true]) : null, patternInput$$35[11], null, patternInput$$35[7], patternInput$$35[9], (0, _Option.defaultArg)(patternInput$$35[12], (0, _ast.XmlDoc$$$get_Empty)()), patternInput$$35[5], patternInput$$35[10], patternInput$$35[8], patternInput$$35[6])));
}

function u_Val(st$$671) {
  return u_osgn_decl(st$$671.ivals, u_ValData, st$$671);
}

function u_modul_typ(st$$673) {
  let patternInput$$36;
  const a$$199 = u_istype(st$$673);
  const b$$179 = u_qlist(u_Val)(st$$673);
  const c$$91 = u_qlist(u_tycon_spec)(st$$673);
  patternInput$$36 = [a$$199, b$$179, c$$91];
  return (0, _tast.ModuleOrNamespaceType$$$$002Ector$$Z36FEFB0E)(patternInput$$36[0], patternInput$$36[1], patternInput$$36[2]);
}

function p_const(x$$217) {
  return function (st$$678) {
    switch (x$$217.tag) {
      case 1:
        {
          const x$$219 = x$$217.fields[0] | 0;
          p_byte(1, st$$678);
          p_int8(x$$219, st$$678);
          break;
        }

      case 2:
        {
          const x$$220 = x$$217.fields[0];
          p_byte(2, st$$678);
          p_uint8(x$$220, st$$678);
          break;
        }

      case 3:
        {
          const x$$221 = x$$217.fields[0] | 0;
          p_byte(3, st$$678);
          p_int16(x$$221, st$$678);
          break;
        }

      case 4:
        {
          const x$$222 = x$$217.fields[0];
          p_byte(4, st$$678);
          p_uint16(x$$222, st$$678);
          break;
        }

      case 5:
        {
          const x$$223 = x$$217.fields[0] | 0;
          p_byte(5, st$$678);
          p_int32(x$$223, st$$678);
          break;
        }

      case 6:
        {
          const x$$224 = x$$217.fields[0];
          p_byte(6, st$$678);
          p_uint32(x$$224, st$$678);
          break;
        }

      case 7:
        {
          const x$$225 = x$$217.fields[0];
          p_byte(7, st$$678);
          p_int64(x$$225, st$$678);
          break;
        }

      case 8:
        {
          const x$$226 = x$$217.fields[0];
          p_byte(8, st$$678);
          p_uint64(x$$226, st$$678);
          break;
        }

      case 9:
        {
          const x$$227 = x$$217.fields[0];
          p_byte(9, st$$678);
          p_int64(x$$227, st$$678);
          break;
        }

      case 10:
        {
          const x$$228 = x$$217.fields[0];
          p_byte(10, st$$678);
          p_uint64(x$$228, st$$678);
          break;
        }

      case 11:
        {
          const x$$229 = x$$217.fields[0];
          p_byte(11, st$$678);
          p_single(x$$229, st$$678);
          break;
        }

      case 12:
        {
          const x$$230 = x$$217.fields[0];
          p_byte(12, st$$678);
          p_int64(bits_of_float(x$$230), st$$678);
          break;
        }

      case 13:
        {
          const c$$92 = x$$217.fields[0];
          p_byte(13, st$$678);
          p_char(c$$92, st$$678);
          break;
        }

      case 14:
        {
          const s$$10 = x$$217.fields[0];
          p_byte(14, st$$678);
          p_string(s$$10, st$$678);
          break;
        }

      case 16:
        {
          p_byte(15, st$$678);
          break;
        }

      case 17:
        {
          p_byte(16, st$$678);
          break;
        }

      case 15:
        {
          const s$$11 = x$$217.fields[0];
          p_byte(17, st$$678);
          p_array(p_int32)((0, _adapters.System$002EDecimal$$$GetBits)(s$$11))(st$$678);
          break;
        }

      default:
        {
          const x$$218 = x$$217.fields[0];
          p_byte(0, st$$678);
          p_bool(x$$218, st$$678);
        }
    }
  };
}

function u_const(st$$680) {
  const tag$$16 = u_byte(st$$680) | 0;

  switch (tag$$16) {
    case 0:
      {
        return new _tast.Const(0, "Bool", u_bool(st$$680));
      }

    case 1:
      {
        return new _tast.Const(1, "SByte", u_int8(st$$680));
      }

    case 2:
      {
        return new _tast.Const(2, "Byte", u_uint8(st$$680));
      }

    case 3:
      {
        return new _tast.Const(3, "Int16", u_int16(st$$680));
      }

    case 4:
      {
        return new _tast.Const(4, "UInt16", u_uint16(st$$680));
      }

    case 5:
      {
        return new _tast.Const(5, "Int32", u_int32(st$$680));
      }

    case 6:
      {
        return new _tast.Const(6, "UInt32", u_uint32(st$$680));
      }

    case 7:
      {
        return new _tast.Const(7, "Int64", u_int64(st$$680));
      }

    case 8:
      {
        return new _tast.Const(8, "UInt64", u_uint64(st$$680));
      }

    case 9:
      {
        return new _tast.Const(9, "IntPtr", u_int64(st$$680));
      }

    case 10:
      {
        return new _tast.Const(10, "UIntPtr", u_uint64(st$$680));
      }

    case 11:
      {
        return new _tast.Const(11, "Single", u_single(st$$680));
      }

    case 12:
      {
        return new _tast.Const(12, "Double", float_of_bits(u_int64(st$$680)));
      }

    case 13:
      {
        return new _tast.Const(13, "Char", u_char(st$$680));
      }

    case 14:
      {
        return new _tast.Const(14, "String", u_string(st$$680));
      }

    case 15:
      {
        return new _tast.Const(16, "Unit");
      }

    case 16:
      {
        return new _tast.Const(17, "Zero");
      }

    case 17:
      {
        return new _tast.Const(15, "Decimal", u_array(u_int32)(st$$680));
      }

    default:
      {
        return ufailwith(st$$680, "u_const");
      }
  }
}

function p_dtree(x$$232, st$$682) {
  switch (x$$232.tag) {
    case 1:
      {
        const b$$182 = x$$232.fields[1] | 0;
        const a$$202 = x$$232.fields[0];
        p_byte(1, st$$682);
        p_Exprs(a$$202)(st$$682);
        p_int(b$$182, st$$682);
        break;
      }

    case 2:
      {
        const b$$184 = x$$232.fields[1];
        const a$$204 = x$$232.fields[0];
        p_byte(2, st$$682);
        p_bind(a$$204, st$$682);
        p_dtree(b$$184, st$$682);
        break;
      }

    default:
      {
        const d$$43 = x$$232.fields[3];
        const c$$93 = x$$232.fields[2];
        const b$$180 = x$$232.fields[1];
        const a$$200 = x$$232.fields[0];
        p_byte(0, st$$682);
        p_expr(a$$200)(st$$682);

        (function p2$$114(x$$233, st$$683) {
          p_list(p_dtree_case, x$$233, st$$683);
        })(b$$180, st$$682);

        (function p3$$56(x$$234, st$$685) {
          p_option(p_dtree, x$$234, st$$685);
        })(c$$93, st$$682);

        p_dummy_range(d$$43, st$$682);
      }
  }
}

function p_dtree_case(_arg5$$1, st$$692) {
  const b$$186 = _arg5$$1.fields[1];
  const a$$206 = _arg5$$1.fields[0];
  p_dtree_discrim(a$$206, st$$692);
  p_dtree(b$$186, st$$692);
}

function p_dtree_discrim(x$$239, st$$696) {
  switch (x$$239.tag) {
    case 2:
      {
        const c$$95 = x$$239.fields[0];
        p_byte(1, st$$696);
        p_const(c$$95)(st$$696);
        break;
      }

    case 3:
      {
        p_byte(2, st$$696);
        break;
      }

    case 4:
      {
        const tgty = x$$239.fields[1];
        const srcty = x$$239.fields[0];
        p_byte(3, st$$696);
        p_ty(srcty)(st$$696);
        p_ty(tgty)(st$$696);
        break;
      }

    case 1:
      {
        const ty$$32 = x$$239.fields[1];
        const n$$34 = x$$239.fields[0] | 0;
        p_byte(4, st$$696);
        p_int(n$$34, st$$696);
        p_ty(ty$$32)(st$$696);
        break;
      }

    case 5:
      {
        pfailwith(st$$696, "DecisionTreeTest.ActivePatternCase: only used during pattern match compilation");
        break;
      }

    default:
      {
        const ucref = x$$239.fields[0];
        const tinst$$4 = x$$239.fields[1];
        p_byte(0, st$$696);
        p_ucref(ucref)(st$$696);
        p_tys(tinst$$4)(st$$696);
      }
  }
}

function p_target(_arg6$$1, st$$699) {
  const b$$190 = _arg6$$1.fields[1];
  const a$$210 = _arg6$$1.fields[0];
  p_Vals(a$$210)(st$$699);
  p_expr(b$$190)(st$$699);
}

function p_bind(_arg7$$1, st$$701) {
  const b$$192 = _arg7$$1.fields[1];
  const a$$212 = _arg7$$1.fields[0];
  p_Val(a$$212, st$$701);
  p_expr(b$$192)(st$$701);
}

function p_lval_op_kind(x$$241, st$$704) {
  p_byte(x$$241.tag === 1 ? 1 : x$$241.tag === 2 ? 2 : x$$241.tag === 3 ? 3 : 0, st$$704);
}

function p_recdInfo(x$$242, st$$705) {
  if (x$$242.tag === 0) {
    pfailwith(st$$705, "explicit object constructors can't be inlined and should not have optimization information");
  }
}

function u_dtree(st$$706) {
  const tag$$17 = u_byte(st$$706) | 0;

  switch (tag$$17) {
    case 0:
      {
        let tupledArg$$77;
        const a$$214 = u_expr(st$$706);

        const b$$194 = function p2$$122(st$$707) {
          return u_list(u_dtree_case, st$$707);
        }(st$$706);

        const c$$96 = function p3$$57(st$$709) {
          return u_option(u_dtree, st$$709);
        }(st$$706);

        const d$$45 = u_dummy_range(st$$706);
        tupledArg$$77 = [a$$214, b$$194, c$$96, d$$45];
        return new _tast.DecisionTree(0, "TDSwitch", tupledArg$$77[0], tupledArg$$77[1], tupledArg$$77[2], tupledArg$$77[3]);
      }

    case 1:
      {
        let tupledArg$$78;
        const a$$215 = u_Exprs(st$$706);
        const b$$195 = u_int(st$$706) | 0;
        tupledArg$$78 = [a$$215, b$$195];
        return new _tast.DecisionTree(1, "TDSuccess", tupledArg$$78[0], tupledArg$$78[1]);
      }

    case 2:
      {
        let tupledArg$$79;
        const a$$216 = u_bind(st$$706);
        const b$$196 = u_dtree(st$$706);
        tupledArg$$79 = [a$$216, b$$196];
        return new _tast.DecisionTree(2, "TDBind", tupledArg$$79[0], tupledArg$$79[1]);
      }

    default:
      {
        return ufailwith(st$$706, "u_dtree");
      }
  }
}

function u_dtree_case(st$$716) {
  let patternInput$$37;
  const a$$217 = u_dtree_discrim(st$$716);
  const b$$197 = u_dtree(st$$716);
  patternInput$$37 = [a$$217, b$$197];
  return new _tast.DecisionTreeCase(0, "TCase", patternInput$$37[0], patternInput$$37[1]);
}

function u_dtree_discrim(st$$720) {
  const tag$$18 = u_byte(st$$720) | 0;

  switch (tag$$18) {
    case 0:
      {
        let tupledArg$$80;
        const a$$219 = u_ucref(st$$720);
        const b$$199 = u_tys(st$$720);
        tupledArg$$80 = [a$$219, b$$199];
        return new _tast.DecisionTreeTest(0, "UnionCase", tupledArg$$80[0], tupledArg$$80[1]);
      }

    case 1:
      {
        return new _tast.DecisionTreeTest(2, "Const", u_const(st$$720));
      }

    case 2:
      {
        return new _tast.DecisionTreeTest(3, "IsNull");
      }

    case 3:
      {
        let tupledArg$$81;
        const a$$220 = u_ty(st$$720);
        const b$$200 = u_ty(st$$720);
        tupledArg$$81 = [a$$220, b$$200];
        return new _tast.DecisionTreeTest(4, "IsInst", tupledArg$$81[0], tupledArg$$81[1]);
      }

    case 4:
      {
        let tupledArg$$82;
        const a$$221 = u_int(st$$720) | 0;
        const b$$201 = u_ty(st$$720);
        tupledArg$$82 = [a$$221, b$$201];
        return new _tast.DecisionTreeTest(1, "ArrayLength", tupledArg$$82[0], tupledArg$$82[1]);
      }

    default:
      {
        return ufailwith(st$$720, "u_dtree_discrim");
      }
  }
}

function u_target(st$$724) {
  let patternInput$$38;
  const a$$222 = u_Vals(st$$724);
  const b$$202 = u_expr(st$$724);
  patternInput$$38 = [a$$222, b$$202];
  return new _tast.DecisionTreeTarget(0, "TTarget", patternInput$$38[0], patternInput$$38[1], new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
}

function u_bind(st$$726) {
  const a$$224 = u_Val(st$$726);
  const b$$204 = u_expr(st$$726);
  return new _tast.Binding(0, "TBind", a$$224, b$$204, new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"));
}

function u_lval_op_kind(st$$727) {
  const matchValue$$23 = u_byte(st$$727) | 0;

  switch (matchValue$$23) {
    case 0:
      {
        return new _tast.LValueOperation(0, "LAddrOf", false);
      }

    case 1:
      {
        return new _tast.LValueOperation(1, "LByrefGet");
      }

    case 2:
      {
        return new _tast.LValueOperation(2, "LSet");
      }

    case 3:
      {
        return new _tast.LValueOperation(3, "LByrefSet");
      }

    default:
      {
        return ufailwith(st$$727, "uval_op_kind");
      }
  }
}

function p_op(x$$243, st$$728) {
  var $target$$137;

  switch (x$$243.tag) {
    case 1:
      $target$$137 = 1;
      break;

    case 2:
      $target$$137 = 2;
      break;

    case 10:
      $target$$137 = 3;
      break;

    case 11:
      $target$$137 = 4;
      break;

    case 12:
      $target$$137 = 5;
      break;

    case 14:
      $target$$137 = 6;
      break;

    case 16:
      $target$$137 = 7;
      break;

    case 18:
      $target$$137 = 8;
      break;

    case 19:
      $target$$137 = 9;
      break;

    case 20:
      $target$$137 = 10;
      break;

    case 21:
      $target$$137 = 11;
      break;

    case 22:
      $target$$137 = 12;
      break;

    case 23:
      $target$$137 = 13;
      break;

    case 15:
      $target$$137 = 14;
      break;

    case 24:
      $target$$137 = 15;
      break;

    case 29:
      $target$$137 = 16;
      break;

    case 30:
      $target$$137 = 17;
      break;

    case 31:
      $target$$137 = 18;
      break;

    case 3:
      $target$$137 = 19;
      break;

    case 6:
      $target$$137 = 20;
      break;

    case 7:
      $target$$137 = 21;
      break;

    case 4:
      $target$$137 = 22;
      break;

    case 8:
      $target$$137 = 23;
      break;

    case 9:
      $target$$137 = 24;
      break;

    case 13:
      $target$$137 = 25;
      break;

    case 5:
      $target$$137 = 26;
      break;

    case 25:
      $target$$137 = 27;
      break;

    case 17:
      $target$$137 = 28;
      break;

    case 27:
    case 28:
    case 26:
      $target$$137 = 29;
      break;

    default:
      $target$$137 = 0;
  }

  switch ($target$$137) {
    case 0:
      {
        const c$$97 = x$$243.fields[0];
        p_byte(0, st$$728);
        p_ucref(c$$97)(st$$728);
        break;
      }

    case 1:
      {
        const c$$98 = x$$243.fields[0];
        p_byte(1, st$$728);
        p_tcref("op")(c$$98)(st$$728);
        break;
      }

    case 2:
      {
        const tupInfo$$1 = x$$243.fields[0];

        if ((0, _TastOps.evalTupInfoIsStruct)(tupInfo$$1)) {
          p_byte(29, st$$728);
        } else {
          p_byte(2, st$$728);
        }

        break;
      }

    case 3:
      {
        const b$$205 = x$$243.fields[1];
        const a$$225 = x$$243.fields[0];
        p_byte(3, st$$728);
        p_recdInfo(a$$225, st$$728);
        p_tcref("recd op")(b$$205)(st$$728);
        break;
      }

    case 4:
      {
        const a$$227 = x$$243.fields[0];
        p_byte(4, st$$728);
        p_rfref(a$$227, st$$728);
        break;
      }

    case 5:
      {
        const a$$228 = x$$243.fields[0];
        p_byte(5, st$$728);
        p_rfref(a$$228, st$$728);
        break;
      }

    case 6:
      {
        const a$$229 = x$$243.fields[0];
        p_byte(6, st$$728);
        p_tcref("cnstr op")(a$$229)(st$$728);
        break;
      }

    case 7:
      {
        const b$$207 = x$$243.fields[1] | 0;
        const a$$230 = x$$243.fields[0];
        p_byte(7, st$$728);
        p_ucref(a$$230)(st$$728);
        p_int(b$$207, st$$728);
        break;
      }

    case 8:
      {
        const b$$209 = x$$243.fields[1] | 0;
        const a$$232 = x$$243.fields[0];
        p_byte(8, st$$728);
        p_ucref(a$$232)(st$$728);
        p_int(b$$209, st$$728);
        break;
      }

    case 9:
      {
        const b$$211 = x$$243.fields[1] | 0;
        const a$$234 = x$$243.fields[0];
        p_byte(9, st$$728);
        p_tcref("exn op")(a$$234)(st$$728);
        p_int(b$$211, st$$728);
        break;
      }

    case 10:
      {
        const b$$213 = x$$243.fields[1] | 0;
        const a$$236 = x$$243.fields[0];
        p_byte(10, st$$728);
        p_tcref("exn op")(a$$236)(st$$728);
        p_int(b$$213, st$$728);
        break;
      }

    case 11:
      {
        const tupInfo$$2 = x$$243.fields[0];
        const a$$238 = x$$243.fields[1] | 0;

        if ((0, _TastOps.evalTupInfoIsStruct)(tupInfo$$2)) {
          p_byte(30, st$$728);
          p_int(a$$238, st$$728);
        } else {
          p_byte(11, st$$728);
          p_int(a$$238, st$$728);
        }

        break;
      }

    case 12:
      {
        const b$$215 = x$$243.fields[1];
        const a$$239 = x$$243.fields[0];
        p_byte(12, st$$728);

        (function p1$$135(x$$245, st$$735) {
          p_list(p_ILInstr, x$$245, st$$735);
        })(a$$239, st$$728);

        p_tys(b$$215)(st$$728);
        break;
      }

    case 13:
      {
        p_byte(13, st$$728);
        break;
      }

    case 14:
      {
        const a$$241 = x$$243.fields[0];
        p_byte(14, st$$728);
        p_ucref(a$$241)(st$$728);
        break;
      }

    case 15:
      {
        p_byte(15, st$$728);
        break;
      }

    case 16:
      {
        const b$$217 = x$$243.fields[0];
        p_byte(16, st$$728);
        p_trait(b$$217, st$$728);
        break;
      }

    case 17:
      {
        const b$$218 = x$$243.fields[1];
        const a$$242 = x$$243.fields[0];
        p_byte(17, st$$728);
        p_lval_op_kind(a$$242, st$$728);
        p_vref("lval")(b$$218)(st$$728);
        break;
      }

    case 18:
      {
        const d$$46 = x$$243.fields[10];
        const c$$99 = x$$243.fields[9];
        const b$$220 = x$$243.fields[8];
        const a9 = x$$243.fields[7];
        const a8 = x$$243.fields[6];
        const a7 = x$$243.fields[5];
        const a5 = x$$243.fields[4];
        const a4 = x$$243.fields[3];
        const a3$$1 = x$$243.fields[2];
        const a2$$1 = x$$243.fields[1];
        const a1$$1 = x$$243.fields[0];
        p_byte(18, st$$728);
        p_bool(a1$$1, st$$728);
        p_bool(a2$$1, st$$728);
        p_bool(a3$$1, st$$728);
        p_bool(a4, st$$728);
        p_vrefFlags(a5, st$$728);
        p_bool(a7, st$$728);
        p_bool(a8, st$$728);
        p_ILMethodRef(a9, st$$728);
        p_tys(b$$220)(st$$728);
        p_tys(c$$99)(st$$728);
        p_tys(d$$46)(st$$728);
        break;
      }

    case 19:
      {
        p_byte(19, st$$728);
        break;
      }

    case 20:
      {
        p_byte(20, st$$728);
        break;
      }

    case 21:
      {
        const dir = x$$243.fields[1];
        p_byte(21, st$$728);
        p_int(dir.tag === 2 ? 1 : dir.tag === 1 ? 2 : 0, st$$728);
        break;
      }

    case 22:
      {
        const bytes$$1 = x$$243.fields[0];
        p_byte(22, st$$728);
        p_bytes(bytes$$1, st$$728);
        break;
      }

    case 23:
      {
        p_byte(23, st$$728);
        break;
      }

    case 24:
      {
        p_byte(24, st$$728);
        break;
      }

    case 25:
      {
        const a$$245 = x$$243.fields[0];
        p_byte(25, st$$728);
        p_rfref(a$$245, st$$728);
        break;
      }

    case 26:
      {
        const arr$$2 = x$$243.fields[0];
        p_byte(26, st$$728);
        p_array(p_uint16)(arr$$2)(st$$728);
        break;
      }

    case 27:
      {
        p_byte(27, st$$728);
        break;
      }

    case 28:
      {
        const b$$222 = x$$243.fields[1] | 0;
        const a$$246 = x$$243.fields[0];
        p_byte(28, st$$728);
        p_ucref(a$$246)(st$$728);
        p_int(b$$222, st$$728);
        break;
      }

    case 29:
      {
        throw new Error("unexpected backend construct in pickled TAST");
        break;
      }
  }
}

function u_op(st$$745) {
  const tag$$19 = u_byte(st$$745) | 0;

  switch (tag$$19) {
    case 0:
      {
        const a$$248 = u_ucref(st$$745);
        return new _tast.TOp(0, "UnionCase", a$$248);
      }

    case 1:
      {
        const a$$249 = u_tcref(st$$745);
        return new _tast.TOp(1, "ExnConstr", a$$249);
      }

    case 2:
      {
        return new _tast.TOp(2, "Tuple", _tast.tupInfoRef);
      }

    case 3:
      {
        const b$$224 = u_tcref(st$$745);
        return new _tast.TOp(10, "Recd", new _tast.RecordConstructionInfo(1, "RecdExpr"), b$$224);
      }

    case 4:
      {
        const a$$250 = u_rfref(st$$745);
        return new _tast.TOp(11, "ValFieldSet", a$$250);
      }

    case 5:
      {
        const a$$251 = u_rfref(st$$745);
        return new _tast.TOp(12, "ValFieldGet", a$$251);
      }

    case 6:
      {
        const a$$252 = u_tcref(st$$745);
        return new _tast.TOp(14, "UnionCaseTagGet", a$$252);
      }

    case 7:
      {
        const a$$253 = u_ucref(st$$745);
        const b$$225 = u_int(st$$745) | 0;
        return new _tast.TOp(16, "UnionCaseFieldGet", a$$253, b$$225);
      }

    case 8:
      {
        const a$$254 = u_ucref(st$$745);
        const b$$226 = u_int(st$$745) | 0;
        return new _tast.TOp(18, "UnionCaseFieldSet", a$$254, b$$226);
      }

    case 9:
      {
        const a$$255 = u_tcref(st$$745);
        const b$$227 = u_int(st$$745) | 0;
        return new _tast.TOp(19, "ExnFieldGet", a$$255, b$$227);
      }

    case 10:
      {
        const a$$256 = u_tcref(st$$745);
        const b$$228 = u_int(st$$745) | 0;
        return new _tast.TOp(20, "ExnFieldSet", a$$256, b$$228);
      }

    case 11:
      {
        const a$$257 = u_int(st$$745) | 0;
        return new _tast.TOp(21, "TupleFieldGet", _tast.tupInfoRef, a$$257);
      }

    case 12:
      {
        const a$$258 = u_list(u_ILInstr, st$$745);
        const b$$229 = u_tys(st$$745);
        return new _tast.TOp(22, "ILAsm", a$$258, b$$229);
      }

    case 13:
      {
        return new _tast.TOp(23, "RefAddrGet", false);
      }

    case 14:
      {
        const a$$259 = u_ucref(st$$745);
        return new _tast.TOp(15, "UnionCaseProof", a$$259);
      }

    case 15:
      {
        return new _tast.TOp(24, "Coerce");
      }

    case 16:
      {
        const a$$260 = u_trait(st$$745);
        return new _tast.TOp(29, "TraitCall", a$$260);
      }

    case 17:
      {
        const a$$261 = u_lval_op_kind(st$$745);
        const b$$230 = u_vref(st$$745);
        return new _tast.TOp(30, "LValueOp", a$$261, b$$230);
      }

    case 18:
      {
        let patternInput$$39;
        const a$$262 = u_bool(st$$745);
        const b$$231 = u_bool(st$$745);
        const c$$101 = u_bool(st$$745);
        const d$$48 = u_bool(st$$745);
        const e$$28 = u_vrefFlags(st$$745);
        const f$$80 = u_bool(st$$745);
        const x7$$10 = u_bool(st$$745);
        const x8$$7 = u_ILMethodRef(st$$745);
        patternInput$$39 = [a$$262, b$$231, c$$101, d$$48, e$$28, f$$80, x7$$10, x8$$7];
        const b$$232 = u_tys(st$$745);
        const c$$102 = u_tys(st$$745);
        const d$$49 = u_tys(st$$745);
        return new _tast.TOp(31, "ILCall", patternInput$$39[0], patternInput$$39[1], patternInput$$39[2], patternInput$$39[3], patternInput$$39[4], patternInput$$39[5], patternInput$$39[6], patternInput$$39[7], b$$232, c$$102, d$$49);
      }

    case 19:
      {
        return new _tast.TOp(3, "Array");
      }

    case 20:
      {
        return new _tast.TOp(6, "While", new _ast.SequencePointInfoForWhileLoop(1, "NoSequencePointAtWhileLoop"), new _tast.SpecialWhileLoopMarker(0, "NoSpecialWhileLoopMarker"));
      }

    case 21:
      {
        let dir$$1;
        const matchValue$$24 = u_int(st$$745) | 0;

        switch (matchValue$$24) {
          case 0:
            {
              dir$$1 = new _tast.ForLoopStyle(0, "FSharpForLoopUp");
              break;
            }

          case 1:
            {
              dir$$1 = new _tast.ForLoopStyle(2, "CSharpForLoopUp");
              break;
            }

          case 2:
            {
              dir$$1 = new _tast.ForLoopStyle(1, "FSharpForLoopDown");
              break;
            }

          default:
            {
              throw new Error("unknown for loop");
            }
        }

        return new _tast.TOp(7, "For", new _ast.SequencePointInfoForForLoop(1, "NoSequencePointAtForLoop"), dir$$1);
      }

    case 22:
      {
        return new _tast.TOp(4, "Bytes", u_bytes(st$$745));
      }

    case 23:
      {
        return new _tast.TOp(8, "TryCatch", new _ast.SequencePointInfoForTry(2, "NoSequencePointAtTry"), new _ast.SequencePointInfoForWith(1, "NoSequencePointAtWith"));
      }

    case 24:
      {
        return new _tast.TOp(9, "TryFinally", new _ast.SequencePointInfoForTry(2, "NoSequencePointAtTry"), new _ast.SequencePointInfoForFinally(1, "NoSequencePointAtFinally"));
      }

    case 25:
      {
        const a$$263 = u_rfref(st$$745);
        return new _tast.TOp(13, "ValFieldGetAddr", a$$263, false);
      }

    case 26:
      {
        return new _tast.TOp(5, "UInt16s", u_array(u_uint16)(st$$745));
      }

    case 27:
      {
        return new _tast.TOp(25, "Reraise");
      }

    case 28:
      {
        const a$$264 = u_ucref(st$$745);
        const b$$233 = u_int(st$$745) | 0;
        return new _tast.TOp(17, "UnionCaseFieldGetAddr", a$$264, b$$233, false);
      }

    case 29:
      {
        return new _tast.TOp(2, "Tuple", _tast.tupInfoStruct);
      }

    case 30:
      {
        const a$$265 = u_int(st$$745) | 0;
        return new _tast.TOp(21, "TupleFieldGet", _tast.tupInfoStruct, a$$265);
      }

    default:
      {
        return ufailwith(st$$745, "u_op");
      }
  }
}

function p_expr(expr$$1) {
  return function (st$$751) {
    var tupledArg$$94;

    switch (expr$$1.tag) {
      case 0:
        {
          const x$$251 = expr$$1.fields[0];
          const ty$$33 = expr$$1.fields[2];
          const m$$1 = expr$$1.fields[1];
          p_byte(0, st$$751);
          p_const(x$$251)(st$$751);
          p_dummy_range(m$$1, st$$751);
          p_ty(ty$$33)(st$$751);
          break;
        }

      case 1:
        {
          const m$$2 = expr$$1.fields[2];
          const b$$235 = expr$$1.fields[1];
          const a$$267 = expr$$1.fields[0];
          p_byte(1, st$$751);
          p_vref("val")(a$$267)(st$$751);
          p_vrefFlags(b$$235, st$$751);
          p_dummy_range(m$$2, st$$751);
          break;
        }

      case 11:
        {
          const d$$50 = expr$$1.fields[3];
          const c$$105 = expr$$1.fields[2];
          const b$$237 = expr$$1.fields[1];
          const a$$269 = expr$$1.fields[0];
          p_byte(2, st$$751);
          p_op(a$$269, st$$751);
          p_tys(b$$237)(st$$751);
          p_Exprs(c$$105)(st$$751);
          p_dummy_range(d$$50, st$$751);
          break;
        }

      case 2:
        {
          const d$$52 = expr$$1.fields[4];
          const c$$107 = expr$$1.fields[2];
          const b$$239 = expr$$1.fields[1];
          const a$$271 = expr$$1.fields[0];
          p_byte(3, st$$751);
          (tupledArg$$94 = [a$$271, b$$239, c$$107.tag === 1 ? 1 : 0, d$$52], function (st$$757) {
            p_expr(tupledArg$$94[0])(st$$757);
            p_expr(tupledArg$$94[1])(st$$757);
            p_int(tupledArg$$94[2], st$$757);
            p_dummy_range(tupledArg$$94[3], st$$757);
          })(st$$751);
          break;
        }

      case 3:
        {
          const e$$30 = expr$$1.fields[6];
          const d$$54 = expr$$1.fields[5];
          const c$$109 = expr$$1.fields[4];
          const b1$$4 = expr$$1.fields[3];
          const b0$$3 = expr$$1.fields[2];
          const a1$$3 = expr$$1.fields[1];
          p_byte(4, st$$751);

          (function p1$$144(x$$254, st$$758) {
            p_option(p_Val, x$$254, st$$758);
          })(a1$$3, st$$751);

          (function p2$$144(x$$256, st$$760) {
            p_option(p_Val, x$$256, st$$760);
          })(b0$$3, st$$751);

          p_Vals(b1$$4)(st$$751);
          p_expr(c$$109)(st$$751);
          p_dummy_range(d$$54, st$$751);
          p_ty(e$$30)(st$$751);
          break;
        }

      case 4:
        {
          const e$$32 = expr$$1.fields[4];
          const d$$56 = expr$$1.fields[3];
          const c$$111 = expr$$1.fields[2];
          const b$$242 = expr$$1.fields[1];
          p_byte(5, st$$751);
          p_tyar_specs(b$$242)(st$$751);
          p_expr(c$$111)(st$$751);
          p_dummy_range(d$$56, st$$751);
          p_ty(e$$32)(st$$751);
          break;
        }

      case 5:
        {
          const d$$58 = expr$$1.fields[4];
          const c$$113 = expr$$1.fields[3];
          const b$$244 = expr$$1.fields[2];
          const a2$$3 = expr$$1.fields[1];
          const a1$$4 = expr$$1.fields[0];
          p_byte(6, st$$751);
          p_expr(a1$$4)(st$$751);
          p_ty(a2$$3)(st$$751);
          p_tys(b$$244)(st$$751);
          p_Exprs(c$$113)(st$$751);
          p_dummy_range(d$$58, st$$751);
          break;
        }

      case 6:
        {
          const c$$115 = expr$$1.fields[2];
          const b$$246 = expr$$1.fields[1];
          const a$$276 = expr$$1.fields[0];
          p_byte(7, st$$751);
          p_binds(a$$276)(st$$751);
          p_expr(b$$246)(st$$751);
          p_dummy_range(c$$115, st$$751);
          break;
        }

      case 7:
        {
          const c$$117 = expr$$1.fields[2];
          const b$$248 = expr$$1.fields[1];
          const a$$278 = expr$$1.fields[0];
          p_byte(8, st$$751);
          p_bind(a$$278, st$$751);
          p_expr(b$$248)(st$$751);
          p_dummy_range(c$$117, st$$751);
          break;
        }

      case 9:
        {
          const e$$34 = expr$$1.fields[5];
          const d$$60 = expr$$1.fields[4];
          const c$$119 = expr$$1.fields[3];
          const b$$250 = expr$$1.fields[2];
          const a$$280 = expr$$1.fields[1];
          p_byte(9, st$$751);
          p_dummy_range(a$$280, st$$751);
          p_dtree(b$$250, st$$751);
          p_targets(c$$119)(st$$751);
          p_dummy_range(d$$60, st$$751);
          p_ty(e$$34)(st$$751);
          break;
        }

      case 8:
        {
          const g$$5 = expr$$1.fields[6];
          const f$$82 = expr$$1.fields[5];
          const e$$36 = expr$$1.fields[4];
          const d$$62 = expr$$1.fields[3];
          const c$$121 = expr$$1.fields[2];
          const b$$252 = expr$$1.fields[1];
          p_byte(10, st$$751);
          p_ty(b$$252)(st$$751);

          (function p2$$150(x$$259, st$$770) {
            p_option(p_Val, x$$259, st$$770);
          })(c$$121, st$$751);

          p_expr(d$$62)(st$$751);
          p_methods(e$$36, st$$751);
          p_intfs(f$$82, st$$751);
          p_dummy_range(g$$5, st$$751);
          break;
        }

      case 10:
        {
          const d$$64 = expr$$1.fields[3];
          const c$$123 = expr$$1.fields[2];
          const b$$254 = expr$$1.fields[1];
          const a$$283 = expr$$1.fields[0];
          p_byte(11, st$$751);
          p_constraints(a$$283)(st$$751);
          p_expr(b$$254)(st$$751);
          p_expr(c$$123)(st$$751);
          p_dummy_range(d$$64, st$$751);
          break;
        }

      case 13:
        {
          const c$$125 = expr$$1.fields[2];
          const b$$256 = expr$$1.fields[1];
          const a$$285 = expr$$1.fields[0];
          p_byte(12, st$$751);
          p_tyar_specs(a$$285)(st$$751);
          p_expr(b$$256)(st$$751);
          p_dummy_range(c$$125, st$$751);
          break;
        }

      case 12:
        {
          const ty$$34 = expr$$1.fields[4];
          const m$$3 = expr$$1.fields[3];
          const ast = expr$$1.fields[0];
          p_byte(13, st$$751);
          p_expr(ast)(st$$751);
          p_dummy_range(m$$3, st$$751);
          p_ty(ty$$34)(st$$751);
          break;
        }

      default:
        {
          const e$$29 = expr$$1.fields[0];
          p_expr(e$$29.contents)(st$$751);
        }
    }
  };
}

function u_expr(st$$778) {
  const tag$$20 = u_byte(st$$778) | 0;

  switch (tag$$20) {
    case 0:
      {
        const a$$288 = u_const(st$$778);
        const b$$259 = u_dummy_range(st$$778);
        const c$$128 = u_ty(st$$778);
        return new _tast.Expr(0, "Const", a$$288, b$$259, c$$128);
      }

    case 1:
      {
        const a$$289 = u_vref(st$$778);
        const b$$260 = u_vrefFlags(st$$778);
        const c$$129 = u_dummy_range(st$$778);
        return new _tast.Expr(1, "Val", a$$289, b$$260, c$$129);
      }

    case 2:
      {
        const a$$290 = u_op(st$$778);
        const b$$261 = u_tys(st$$778);
        const c$$130 = u_Exprs(st$$778);
        const d$$66 = u_dummy_range(st$$778);
        return new _tast.Expr(11, "Op", a$$290, b$$261, c$$130, d$$66);
      }

    case 3:
      {
        const a$$291 = u_expr(st$$778);
        const b$$262 = u_expr(st$$778);
        const c$$131 = u_int(st$$778) | 0;
        const d$$67 = u_dummy_range(st$$778);
        return new _tast.Expr(2, "Sequential", a$$291, b$$262, c$$131 === 0 ? new _tast.SequentialOpKind(0, "NormalSeq") : c$$131 === 1 ? new _tast.SequentialOpKind(1, "ThenDoSeq") : ufailwith(st$$778, "specialSeqFlag"), new _ast.SequencePointInfoForSeq(1, "SuppressSequencePointOnExprOfSequential"), d$$67);
      }

    case 4:
      {
        const a0 = u_option(u_Val, st$$778);
        const b0$$4 = u_option(u_Val, st$$778);
        const b1$$5 = u_Vals(st$$778);
        const c$$132 = u_expr(st$$778);
        const d$$68 = u_dummy_range(st$$778);
        const e$$38 = u_ty(st$$778);
        return new _tast.Expr(3, "Lambda", (0, _tast.newUnique)(), a0, b0$$4, b1$$5, c$$132, d$$68, e$$38);
      }

    case 5:
      {
        const b$$263 = u_tyar_specs(st$$778);
        const c$$133 = u_expr(st$$778);
        const d$$69 = u_dummy_range(st$$778);
        const e$$39 = u_ty(st$$778);
        return new _tast.Expr(4, "TyLambda", (0, _tast.newUnique)(), b$$263, c$$133, d$$69, e$$39);
      }

    case 6:
      {
        const a1$$5 = u_expr(st$$778);
        const a2$$4 = u_ty(st$$778);
        const b$$264 = u_tys(st$$778);
        const c$$134 = u_Exprs(st$$778);
        const d$$70 = u_dummy_range(st$$778);
        return new _tast.Expr(5, "App", a1$$5, a2$$4, b$$264, c$$134, d$$70);
      }

    case 7:
      {
        const a$$292 = u_binds(st$$778);
        const b$$265 = u_expr(st$$778);
        const c$$135 = u_dummy_range(st$$778);
        return new _tast.Expr(6, "LetRec", a$$292, b$$265, c$$135, (0, _tast.NewFreeVarsCache)());
      }

    case 8:
      {
        const a$$293 = u_bind(st$$778);
        const b$$266 = u_expr(st$$778);
        const c$$136 = u_dummy_range(st$$778);
        return new _tast.Expr(7, "Let", a$$293, b$$266, c$$136, (0, _tast.NewFreeVarsCache)());
      }

    case 9:
      {
        const a$$294 = u_dummy_range(st$$778);
        const b$$267 = u_dtree(st$$778);
        const c$$137 = u_targets(st$$778);
        const d$$71 = u_dummy_range(st$$778);
        const e$$40 = u_ty(st$$778);
        return new _tast.Expr(9, "Match", new _ast.SequencePointInfoForBinding(3, "NoSequencePointAtStickyBinding"), a$$294, b$$267, c$$137, d$$71, e$$40);
      }

    case 10:
      {
        const b$$268 = u_ty(st$$778);
        const c$$138 = u_option(u_Val, st$$778);
        const d$$72 = u_expr(st$$778);
        const e$$41 = u_methods(st$$778);
        const f$$84 = u_intfs(st$$778);
        const g$$6 = u_dummy_range(st$$778);
        return new _tast.Expr(8, "Obj", (0, _tast.newUnique)(), b$$268, c$$138, d$$72, e$$41, f$$84, g$$6);
      }

    case 11:
      {
        const a$$295 = u_constraints(st$$778);
        const b$$269 = u_expr(st$$778);
        const c$$139 = u_expr(st$$778);
        const d$$73 = u_dummy_range(st$$778);
        return new _tast.Expr(10, "StaticOptimization", a$$295, b$$269, c$$139, d$$73);
      }

    case 12:
      {
        const a$$296 = u_tyar_specs(st$$778);
        const b$$270 = u_expr(st$$778);
        const c$$140 = u_dummy_range(st$$778);
        return new _tast.Expr(13, "TyChoose", a$$296, b$$270, c$$140);
      }

    case 13:
      {
        const b$$271 = u_expr(st$$778);
        const c$$141 = u_dummy_range(st$$778);
        const d$$74 = u_ty(st$$778);
        return new _tast.Expr(12, "Quote", b$$271, new _Types.FSharpRef(null), false, c$$141, d$$74);
      }

    default:
      {
        return ufailwith(st$$778, "u_expr");
      }
  }
}

function p_static_optimization_constraint(x$$263, st$$782) {
  if (x$$263.tag === 1) {
    const a$$299 = x$$263.fields[0];
    p_byte(1, st$$782);
    p_ty(a$$299)(st$$782);
  } else {
    const b$$272 = x$$263.fields[1];
    const a$$297 = x$$263.fields[0];
    p_byte(0, st$$782);
    p_ty(a$$297)(st$$782);
    p_ty(b$$272)(st$$782);
  }
}

function p_slotparam(_arg8$$1, st$$784) {
  const f$$85 = _arg8$$1.fields[5];
  const e$$42 = _arg8$$1.fields[4];
  const d$$75 = _arg8$$1.fields[3];
  const c$$142 = _arg8$$1.fields[2];
  const b$$274 = _arg8$$1.fields[1];
  const a$$300 = _arg8$$1.fields[0];

  (function p1$$155(x$$264, st$$785) {
    p_option(p_string, x$$264, st$$785);
  })(a$$300, st$$784);

  p_ty(b$$274)(st$$784);
  p_bool(c$$142, st$$784);
  p_bool(d$$75, st$$784);
  p_bool(e$$42, st$$784);
  p_attribs(f$$85)(st$$784);
}

function p_slotsig(_arg9$$1, st$$787) {
  const f$$87 = _arg9$$1.fields[5];
  const e$$44 = _arg9$$1.fields[4];
  const d$$77 = _arg9$$1.fields[3];
  const c$$144 = _arg9$$1.fields[2];
  const b$$276 = _arg9$$1.fields[1];
  const a$$302 = _arg9$$1.fields[0];
  p_string(a$$302, st$$787);
  p_ty(b$$276)(st$$787);
  p_tyar_specs(c$$144)(st$$787);
  p_tyar_specs(d$$77)(st$$787);

  (function p5$$26(x$$266, st$$790) {
    p_list(function f$$88(x$$265, st$$788) {
      p_list(p_slotparam, x$$265, st$$788);
    }, x$$266, st$$790);
  })(e$$44, st$$787);

  (function p6$$22(x$$267, st$$791) {
    p_option((0, _Util.uncurry)(2, p_ty), x$$267, st$$791);
  })(f$$87, st$$787);
}

function p_method(_arg10$$1, st$$793) {
  const f$$90 = _arg10$$1.fields[5];
  const e$$46 = _arg10$$1.fields[4];
  const d$$79 = _arg10$$1.fields[3];
  const c$$146 = _arg10$$1.fields[2];
  const b$$278 = _arg10$$1.fields[1];
  const a$$304 = _arg10$$1.fields[0];
  p_slotsig(a$$304, st$$793);
  p_attribs(b$$278)(st$$793);
  p_tyar_specs(c$$146)(st$$793);

  (function p4$$41(x$$268, st$$795) {
    p_list((0, _Util.uncurry)(2, p_Vals), x$$268, st$$795);
  })(d$$79, st$$793);

  p_expr(e$$46)(st$$793);
  p_dummy_range(f$$90, st$$793);
}

function p_methods(x$$269, st$$797) {
  p_list(p_method, x$$269, st$$797);
}

function p_intf(x_0$$1, x_1$$1, st$$799) {
  const x$$270 = [x_0$$1, x_1$$1];
  p_ty(x$$270[0])(st$$799);
  p_methods(x$$270[1], st$$799);
}

function p_intfs(x$$272, st$$802) {
  p_list(function (tupledArg$$103, st$$803) {
    p_intf(tupledArg$$103[0], tupledArg$$103[1], st$$803);
  }, x$$272, st$$802);
}

function u_static_optimization_constraint(st$$804) {
  const tag$$21 = u_byte(st$$804) | 0;

  switch (tag$$21) {
    case 0:
      {
        let tupledArg$$104;
        const a$$307 = u_ty(st$$804);
        const b$$281 = u_ty(st$$804);
        tupledArg$$104 = [a$$307, b$$281];
        return new _tast.StaticOptimization(0, "TTyconEqualsTycon", tupledArg$$104[0], tupledArg$$104[1]);
      }

    case 1:
      {
        return new _tast.StaticOptimization(1, "TTyconIsStruct", u_ty(st$$804));
      }

    default:
      {
        return ufailwith(st$$804, "u_static_optimization_constraint");
      }
  }
}

function u_slotparam(st$$806) {
  let patternInput$$40;

  const a$$308 = function p1$$160(st$$807) {
    return u_option(u_string, st$$807);
  }(st$$806);

  const b$$282 = u_ty(st$$806);
  const c$$148 = u_bool(st$$806);
  const d$$81 = u_bool(st$$806);
  const e$$48 = u_bool(st$$806);
  const f$$92 = u_attribs(st$$806);
  patternInput$$40 = [a$$308, b$$282, c$$148, d$$81, e$$48, f$$92];
  return new _tast.SlotParam(0, "TSlotParam", patternInput$$40[0], patternInput$$40[1], patternInput$$40[2], patternInput$$40[3], patternInput$$40[4], patternInput$$40[5]);
}

function u_slotsig(st$$809) {
  let patternInput$$41;
  const a$$310 = u_string(st$$809);
  const b$$284 = u_ty(st$$809);
  const c$$150 = u_tyar_specs(st$$809);
  const d$$83 = u_tyar_specs(st$$809);

  const e$$50 = function p5$$29(st$$812) {
    return u_list(function f$$94(st$$810) {
      return u_list(u_slotparam, st$$810);
    }, st$$812);
  }(st$$809);

  const f$$95 = function p6$$25(st$$813) {
    return u_option(u_ty, st$$813);
  }(st$$809);

  patternInput$$41 = [a$$310, b$$284, c$$150, d$$83, e$$50, f$$95];
  return new _tast.SlotSig(0, "TSlotSig", patternInput$$41[0], patternInput$$41[1], patternInput$$41[2], patternInput$$41[3], patternInput$$41[4], patternInput$$41[5]);
}

function u_method(st$$815) {
  let patternInput$$42;
  const a$$312 = u_slotsig(st$$815);
  const b$$286 = u_attribs(st$$815);
  const c$$152 = u_tyar_specs(st$$815);

  const d$$85 = function p4$$44(st$$817) {
    return u_list(u_Vals, st$$817);
  }(st$$815);

  const e$$52 = u_expr(st$$815);
  const f$$97 = u_dummy_range(st$$815);
  patternInput$$42 = [a$$312, b$$286, c$$152, d$$85, e$$52, f$$97];
  return new _tast.ObjExprMethod(0, "TObjExprMethod", patternInput$$42[0], patternInput$$42[1], patternInput$$42[2], patternInput$$42[3], patternInput$$42[4], patternInput$$42[5]);
}

function u_methods(st$$819) {
  return u_list(u_method, st$$819);
}

function u_intf(st$$821) {
  const a$$314 = u_ty(st$$821);
  const b$$288 = u_methods(st$$821);
  return [a$$314, b$$288];
}

function u_intfs(st$$824) {
  return u_list(u_intf, st$$824);
}

fill_p_binds(function (x$$273) {
  return function (st$$826) {
    p_List(p_bind, x$$273, st$$826);
  };
});
fill_p_targets(p_array(p_target));
fill_p_constraints(function (x$$274) {
  return function (st$$829) {
    p_list(p_static_optimization_constraint, x$$274, st$$829);
  };
});
fill_p_Exprs(function (x$$276) {
  return function (st$$831) {
    p_list((0, _Util.uncurry)(2, p_expr), x$$276, st$$831);
  };
});
fill_p_Expr_hole(p_expr);
fill_p_Exprs(function (x$$277) {
  return function (st$$832) {
    p_List((0, _Util.uncurry)(2, p_expr), x$$277, st$$832);
  };
});
fill_p_attribs(function (x$$278) {
  return function (st$$833) {
    p_list(p_attrib, x$$278, st$$833);
  };
});
fill_p_Vals(function (x$$279) {
  return function (st$$835) {
    p_list(p_Val, x$$279, st$$835);
  };
});
fill_u_binds(function (st$$837) {
  return u_List(u_bind, st$$837);
});
fill_u_targets(u_array(u_target));
fill_u_constraints(function (st$$840) {
  return u_list(u_static_optimization_constraint, st$$840);
});
fill_u_Exprs(function (st$$842) {
  return u_list(u_expr, st$$842);
});
fill_u_Expr_hole(u_expr);
fill_u_attribs(function (st$$843) {
  return u_list(u_attrib, st$$843);
});
fill_u_Vals(function (st$$845) {
  return u_list(u_Val, st$$845);
});

function pickleModuleOrNamespace(mspec$$3, st$$847) {
  p_tycon_spec(mspec$$3, st$$847);
}

function pickleCcuInfo(minfo) {
  return function (st$$848) {
    pickleModuleOrNamespace(minfo.mspec, st$$848);
    p_string(minfo.compileTimeWorkingDir, st$$848);
    p_bool(minfo.usesQuotations, st$$848);

    (function p4$$45(arg10$0040$$68, st$$850) {
      p_space(3, null, st$$850);
    })(null, st$$848);
  };
}

function unpickleModuleOrNamespace(st$$852) {
  return u_tycon_spec(st$$852);
}

function unpickleCcuInfo(st$$853) {
  let patternInput$$43;
  const a$$316 = unpickleModuleOrNamespace(st$$853);
  const b$$290 = u_string(st$$853);
  const c$$155 = u_bool(st$$853);

  const d$$88 = function p4$$46(st$$855) {
    u_space(3, st$$855);
  }(st$$853);

  patternInput$$43 = [a$$316, b$$290, c$$155, null];
  return new _tast.PickledCcuInfo(patternInput$$43[0], patternInput$$43[1], patternInput$$43[2]);
}