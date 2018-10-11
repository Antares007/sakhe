"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntrinsicValRef$$get_Name = IntrinsicValRef$$get_Name;
exports.IntrinsicValRef$$get_DebugText = IntrinsicValRef$$get_DebugText;
exports.ValRefForIntrinsic = ValRefForIntrinsic;
exports.mkNonLocalTyconRef2 = mkNonLocalTyconRef2;
exports.mk_MFCore_tcref = mk_MFCore_tcref;
exports.mk_MFQuotations_tcref = mk_MFQuotations_tcref;
exports.mk_MFLinq_tcref = mk_MFLinq_tcref;
exports.mk_MFCollections_tcref = mk_MFCollections_tcref;
exports.mk_MFCompilerServices_tcref = mk_MFCompilerServices_tcref;
exports.mk_MFRuntimeHelpers_tcref = mk_MFRuntimeHelpers_tcref;
exports.mk_MFControl_tcref = mk_MFControl_tcref;
exports.BuiltinAttribInfo$$get_TyconRef = BuiltinAttribInfo$$get_TyconRef;
exports.BuiltinAttribInfo$$get_TypeRef = BuiltinAttribInfo$$get_TypeRef;
exports.BuiltinAttribInfo$$get_DebugText = BuiltinAttribInfo$$get_DebugText;
exports.TcGlobals$$$$002Ector$$36FDBAF1 = TcGlobals$$$$002Ector$$36FDBAF1;
exports.TcGlobals$$get_ilg = TcGlobals$$get_ilg;
exports.TcGlobals$$get_knownIntrinsics = TcGlobals$$get_knownIntrinsics;
exports.TcGlobals$$get_knownFSharpCoreModules = TcGlobals$$get_knownFSharpCoreModules;
exports.TcGlobals$$get_compilingFslib = TcGlobals$$get_compilingFslib;
exports.TcGlobals$$get_mlCompatibility = TcGlobals$$get_mlCompatibility;
exports.TcGlobals$$get_emitDebugInfoInQuotations = TcGlobals$$get_emitDebugInfoInQuotations;
exports.TcGlobals$$get_directoryToResolveRelativePaths = TcGlobals$$get_directoryToResolveRelativePaths;
exports.TcGlobals$$unionCaseRefEq = TcGlobals$$unionCaseRefEq;
exports.TcGlobals$$valRefEq = TcGlobals$$valRefEq;
exports.TcGlobals$$get_fslibCcu = TcGlobals$$get_fslibCcu;
exports.TcGlobals$$get_refcell_tcr_canon = TcGlobals$$get_refcell_tcr_canon;
exports.TcGlobals$$get_option_tcr_canon = TcGlobals$$get_option_tcr_canon;
exports.TcGlobals$$get_list_tcr_canon = TcGlobals$$get_list_tcr_canon;
exports.TcGlobals$$get_set_tcr_canon = TcGlobals$$get_set_tcr_canon;
exports.TcGlobals$$get_map_tcr_canon = TcGlobals$$get_map_tcr_canon;
exports.TcGlobals$$get_lazy_tcr_canon = TcGlobals$$get_lazy_tcr_canon;
exports.TcGlobals$$get_refcell_tcr_nice = TcGlobals$$get_refcell_tcr_nice;
exports.TcGlobals$$get_array_tcr_nice = TcGlobals$$get_array_tcr_nice;
exports.TcGlobals$$get_option_tcr_nice = TcGlobals$$get_option_tcr_nice;
exports.TcGlobals$$get_list_tcr_nice = TcGlobals$$get_list_tcr_nice;
exports.TcGlobals$$get_lazy_tcr_nice = TcGlobals$$get_lazy_tcr_nice;
exports.TcGlobals$$get_format_tcr = TcGlobals$$get_format_tcr;
exports.TcGlobals$$get_expr_tcr = TcGlobals$$get_expr_tcr;
exports.TcGlobals$$get_raw_expr_tcr = TcGlobals$$get_raw_expr_tcr;
exports.TcGlobals$$get_nativeint_tcr = TcGlobals$$get_nativeint_tcr;
exports.TcGlobals$$get_unativeint_tcr = TcGlobals$$get_unativeint_tcr;
exports.TcGlobals$$get_int_tcr = TcGlobals$$get_int_tcr;
exports.TcGlobals$$get_int32_tcr = TcGlobals$$get_int32_tcr;
exports.TcGlobals$$get_int16_tcr = TcGlobals$$get_int16_tcr;
exports.TcGlobals$$get_int64_tcr = TcGlobals$$get_int64_tcr;
exports.TcGlobals$$get_uint16_tcr = TcGlobals$$get_uint16_tcr;
exports.TcGlobals$$get_uint32_tcr = TcGlobals$$get_uint32_tcr;
exports.TcGlobals$$get_uint64_tcr = TcGlobals$$get_uint64_tcr;
exports.TcGlobals$$get_sbyte_tcr = TcGlobals$$get_sbyte_tcr;
exports.TcGlobals$$get_decimal_tcr = TcGlobals$$get_decimal_tcr;
exports.TcGlobals$$get_date_tcr = TcGlobals$$get_date_tcr;
exports.TcGlobals$$get_pdecimal_tcr = TcGlobals$$get_pdecimal_tcr;
exports.TcGlobals$$get_byte_tcr = TcGlobals$$get_byte_tcr;
exports.TcGlobals$$get_bool_tcr = TcGlobals$$get_bool_tcr;
exports.TcGlobals$$get_unit_tcr_canon = TcGlobals$$get_unit_tcr_canon;
exports.TcGlobals$$get_unit_tcr_nice = TcGlobals$$get_unit_tcr_nice;
exports.TcGlobals$$get_exn_tcr = TcGlobals$$get_exn_tcr;
exports.TcGlobals$$get_char_tcr = TcGlobals$$get_char_tcr;
exports.TcGlobals$$get_float_tcr = TcGlobals$$get_float_tcr;
exports.TcGlobals$$get_float32_tcr = TcGlobals$$get_float32_tcr;
exports.TcGlobals$$get_pfloat_tcr = TcGlobals$$get_pfloat_tcr;
exports.TcGlobals$$get_pfloat32_tcr = TcGlobals$$get_pfloat32_tcr;
exports.TcGlobals$$get_pint_tcr = TcGlobals$$get_pint_tcr;
exports.TcGlobals$$get_pint8_tcr = TcGlobals$$get_pint8_tcr;
exports.TcGlobals$$get_pint16_tcr = TcGlobals$$get_pint16_tcr;
exports.TcGlobals$$get_pint64_tcr = TcGlobals$$get_pint64_tcr;
exports.TcGlobals$$get_byref_tcr = TcGlobals$$get_byref_tcr;
exports.TcGlobals$$get_byref2_tcr = TcGlobals$$get_byref2_tcr;
exports.TcGlobals$$get_outref_tcr = TcGlobals$$get_outref_tcr;
exports.TcGlobals$$get_inref_tcr = TcGlobals$$get_inref_tcr;
exports.TcGlobals$$get_nativeptr_tcr = TcGlobals$$get_nativeptr_tcr;
exports.TcGlobals$$get_voidptr_tcr = TcGlobals$$get_voidptr_tcr;
exports.TcGlobals$$get_ilsigptr_tcr = TcGlobals$$get_ilsigptr_tcr;
exports.TcGlobals$$get_fastFunc_tcr = TcGlobals$$get_fastFunc_tcr;
exports.TcGlobals$$get_tcref_IQueryable = TcGlobals$$get_tcref_IQueryable;
exports.TcGlobals$$get_tcref_IObservable = TcGlobals$$get_tcref_IObservable;
exports.TcGlobals$$get_tcref_IObserver = TcGlobals$$get_tcref_IObserver;
exports.TcGlobals$$get_fslib_IEvent2_tcr = TcGlobals$$get_fslib_IEvent2_tcr;
exports.TcGlobals$$get_fslib_IDelegateEvent_tcr = TcGlobals$$get_fslib_IDelegateEvent_tcr;
exports.TcGlobals$$get_seq_tcr = TcGlobals$$get_seq_tcr;
exports.TcGlobals$$get_seq_base_tcr = TcGlobals$$get_seq_base_tcr;
exports.TcGlobals$$get_byrefkind_In_tcr = TcGlobals$$get_byrefkind_In_tcr;
exports.TcGlobals$$get_byrefkind_Out_tcr = TcGlobals$$get_byrefkind_Out_tcr;
exports.TcGlobals$$get_byrefkind_InOut_tcr = TcGlobals$$get_byrefkind_InOut_tcr;
exports.TcGlobals$$get_measureproduct_tcr = TcGlobals$$get_measureproduct_tcr;
exports.TcGlobals$$get_measureinverse_tcr = TcGlobals$$get_measureinverse_tcr;
exports.TcGlobals$$get_measureone_tcr = TcGlobals$$get_measureone_tcr;
exports.TcGlobals$$get_il_arr_tcr_map = TcGlobals$$get_il_arr_tcr_map;
exports.TcGlobals$$get_ref_tuple1_tcr = TcGlobals$$get_ref_tuple1_tcr;
exports.TcGlobals$$get_ref_tuple2_tcr = TcGlobals$$get_ref_tuple2_tcr;
exports.TcGlobals$$get_ref_tuple3_tcr = TcGlobals$$get_ref_tuple3_tcr;
exports.TcGlobals$$get_ref_tuple4_tcr = TcGlobals$$get_ref_tuple4_tcr;
exports.TcGlobals$$get_ref_tuple5_tcr = TcGlobals$$get_ref_tuple5_tcr;
exports.TcGlobals$$get_ref_tuple6_tcr = TcGlobals$$get_ref_tuple6_tcr;
exports.TcGlobals$$get_ref_tuple7_tcr = TcGlobals$$get_ref_tuple7_tcr;
exports.TcGlobals$$get_ref_tuple8_tcr = TcGlobals$$get_ref_tuple8_tcr;
exports.TcGlobals$$get_struct_tuple1_tcr = TcGlobals$$get_struct_tuple1_tcr;
exports.TcGlobals$$get_struct_tuple2_tcr = TcGlobals$$get_struct_tuple2_tcr;
exports.TcGlobals$$get_struct_tuple3_tcr = TcGlobals$$get_struct_tuple3_tcr;
exports.TcGlobals$$get_struct_tuple4_tcr = TcGlobals$$get_struct_tuple4_tcr;
exports.TcGlobals$$get_struct_tuple5_tcr = TcGlobals$$get_struct_tuple5_tcr;
exports.TcGlobals$$get_struct_tuple6_tcr = TcGlobals$$get_struct_tuple6_tcr;
exports.TcGlobals$$get_struct_tuple7_tcr = TcGlobals$$get_struct_tuple7_tcr;
exports.TcGlobals$$get_struct_tuple8_tcr = TcGlobals$$get_struct_tuple8_tcr;
exports.TcGlobals$$get_choice2_tcr = TcGlobals$$get_choice2_tcr;
exports.TcGlobals$$get_choice3_tcr = TcGlobals$$get_choice3_tcr;
exports.TcGlobals$$get_choice4_tcr = TcGlobals$$get_choice4_tcr;
exports.TcGlobals$$get_choice5_tcr = TcGlobals$$get_choice5_tcr;
exports.TcGlobals$$get_choice6_tcr = TcGlobals$$get_choice6_tcr;
exports.TcGlobals$$get_choice7_tcr = TcGlobals$$get_choice7_tcr;
exports.TcGlobals$$get_nativeint_ty = TcGlobals$$get_nativeint_ty;
exports.TcGlobals$$get_unativeint_ty = TcGlobals$$get_unativeint_ty;
exports.TcGlobals$$get_int32_ty = TcGlobals$$get_int32_ty;
exports.TcGlobals$$get_int16_ty = TcGlobals$$get_int16_ty;
exports.TcGlobals$$get_int64_ty = TcGlobals$$get_int64_ty;
exports.TcGlobals$$get_uint16_ty = TcGlobals$$get_uint16_ty;
exports.TcGlobals$$get_uint32_ty = TcGlobals$$get_uint32_ty;
exports.TcGlobals$$get_uint64_ty = TcGlobals$$get_uint64_ty;
exports.TcGlobals$$get_sbyte_ty = TcGlobals$$get_sbyte_ty;
exports.TcGlobals$$get_byte_ty = TcGlobals$$get_byte_ty;
exports.TcGlobals$$get_bool_ty = TcGlobals$$get_bool_ty;
exports.TcGlobals$$get_int_ty = TcGlobals$$get_int_ty;
exports.TcGlobals$$get_string_ty = TcGlobals$$get_string_ty;
exports.TcGlobals$$get_unit_ty = TcGlobals$$get_unit_ty;
exports.TcGlobals$$get_obj_ty = TcGlobals$$get_obj_ty;
exports.TcGlobals$$get_char_ty = TcGlobals$$get_char_ty;
exports.TcGlobals$$get_decimal_ty = TcGlobals$$get_decimal_ty;
exports.TcGlobals$$get_exn_ty = TcGlobals$$get_exn_ty;
exports.TcGlobals$$get_float_ty = TcGlobals$$get_float_ty;
exports.TcGlobals$$get_float32_ty = TcGlobals$$get_float32_ty;
exports.TcGlobals$$memoize_file$$Z524259A4 = TcGlobals$$memoize_file$$Z524259A4;
exports.TcGlobals$$get_system_Array_ty = TcGlobals$$get_system_Array_ty;
exports.TcGlobals$$get_system_Object_ty = TcGlobals$$get_system_Object_ty;
exports.TcGlobals$$get_system_IDisposable_ty = TcGlobals$$get_system_IDisposable_ty;
exports.TcGlobals$$get_system_RuntimeHelpers_ty = TcGlobals$$get_system_RuntimeHelpers_ty;
exports.TcGlobals$$get_system_Value_ty = TcGlobals$$get_system_Value_ty;
exports.TcGlobals$$get_system_Delegate_ty = TcGlobals$$get_system_Delegate_ty;
exports.TcGlobals$$get_system_MulticastDelegate_ty = TcGlobals$$get_system_MulticastDelegate_ty;
exports.TcGlobals$$get_system_Enum_ty = TcGlobals$$get_system_Enum_ty;
exports.TcGlobals$$get_system_Exception_ty = TcGlobals$$get_system_Exception_ty;
exports.TcGlobals$$get_system_String_typ = TcGlobals$$get_system_String_typ;
exports.TcGlobals$$get_system_String_tcref = TcGlobals$$get_system_String_tcref;
exports.TcGlobals$$get_system_Int32_ty = TcGlobals$$get_system_Int32_ty;
exports.TcGlobals$$get_system_Type_ty = TcGlobals$$get_system_Type_ty;
exports.TcGlobals$$get_system_TypedReference_tcref = TcGlobals$$get_system_TypedReference_tcref;
exports.TcGlobals$$get_system_ArgIterator_tcref = TcGlobals$$get_system_ArgIterator_tcref;
exports.TcGlobals$$get_system_RuntimeArgumentHandle_tcref = TcGlobals$$get_system_RuntimeArgumentHandle_tcref;
exports.TcGlobals$$get_system_SByte_tcref = TcGlobals$$get_system_SByte_tcref;
exports.TcGlobals$$get_system_Decimal_tcref = TcGlobals$$get_system_Decimal_tcref;
exports.TcGlobals$$get_system_Int16_tcref = TcGlobals$$get_system_Int16_tcref;
exports.TcGlobals$$get_system_Int32_tcref = TcGlobals$$get_system_Int32_tcref;
exports.TcGlobals$$get_system_Int64_tcref = TcGlobals$$get_system_Int64_tcref;
exports.TcGlobals$$get_system_IntPtr_tcref = TcGlobals$$get_system_IntPtr_tcref;
exports.TcGlobals$$get_system_Bool_tcref = TcGlobals$$get_system_Bool_tcref;
exports.TcGlobals$$get_system_Byte_tcref = TcGlobals$$get_system_Byte_tcref;
exports.TcGlobals$$get_system_UInt16_tcref = TcGlobals$$get_system_UInt16_tcref;
exports.TcGlobals$$get_system_Char_tcref = TcGlobals$$get_system_Char_tcref;
exports.TcGlobals$$get_system_UInt32_tcref = TcGlobals$$get_system_UInt32_tcref;
exports.TcGlobals$$get_system_UInt64_tcref = TcGlobals$$get_system_UInt64_tcref;
exports.TcGlobals$$get_system_UIntPtr_tcref = TcGlobals$$get_system_UIntPtr_tcref;
exports.TcGlobals$$get_system_Single_tcref = TcGlobals$$get_system_Single_tcref;
exports.TcGlobals$$get_system_Double_tcref = TcGlobals$$get_system_Double_tcref;
exports.TcGlobals$$get_system_RuntimeTypeHandle_ty = TcGlobals$$get_system_RuntimeTypeHandle_ty;
exports.TcGlobals$$get_system_RuntimeMethodHandle_ty = TcGlobals$$get_system_RuntimeMethodHandle_ty;
exports.TcGlobals$$get_system_MarshalByRefObject_tcref = TcGlobals$$get_system_MarshalByRefObject_tcref;
exports.TcGlobals$$get_system_MarshalByRefObject_ty = TcGlobals$$get_system_MarshalByRefObject_ty;
exports.TcGlobals$$get_system_Reflection_MethodInfo_ty = TcGlobals$$get_system_Reflection_MethodInfo_ty;
exports.TcGlobals$$get_system_Array_tcref = TcGlobals$$get_system_Array_tcref;
exports.TcGlobals$$get_system_Object_tcref = TcGlobals$$get_system_Object_tcref;
exports.TcGlobals$$get_system_Void_tcref = TcGlobals$$get_system_Void_tcref;
exports.TcGlobals$$get_system_IndexOutOfRangeException_tcref = TcGlobals$$get_system_IndexOutOfRangeException_tcref;
exports.TcGlobals$$get_system_Nullable_tcref = TcGlobals$$get_system_Nullable_tcref;
exports.TcGlobals$$get_system_GenericIComparable_tcref = TcGlobals$$get_system_GenericIComparable_tcref;
exports.TcGlobals$$get_system_GenericIEquatable_tcref = TcGlobals$$get_system_GenericIEquatable_tcref;
exports.TcGlobals$$get_mk_IComparable_ty = TcGlobals$$get_mk_IComparable_ty;
exports.TcGlobals$$get_system_LinqExpression_tcref = TcGlobals$$get_system_LinqExpression_tcref;
exports.TcGlobals$$get_mk_IStructuralComparable_ty = TcGlobals$$get_mk_IStructuralComparable_ty;
exports.TcGlobals$$get_mk_IStructuralEquatable_ty = TcGlobals$$get_mk_IStructuralEquatable_ty;
exports.TcGlobals$$get_IComparer_ty = TcGlobals$$get_IComparer_ty;
exports.TcGlobals$$get_IEqualityComparer_ty = TcGlobals$$get_IEqualityComparer_ty;
exports.TcGlobals$$get_tcref_System_Collections_IComparer = TcGlobals$$get_tcref_System_Collections_IComparer;
exports.TcGlobals$$get_tcref_System_Collections_IEqualityComparer = TcGlobals$$get_tcref_System_Collections_IEqualityComparer;
exports.TcGlobals$$get_tcref_System_Collections_Generic_IEqualityComparer = TcGlobals$$get_tcref_System_Collections_Generic_IEqualityComparer;
exports.TcGlobals$$get_tcref_System_Collections_Generic_Dictionary = TcGlobals$$get_tcref_System_Collections_Generic_Dictionary;
exports.TcGlobals$$get_tcref_System_Collections_Generic_IDictionary = TcGlobals$$get_tcref_System_Collections_Generic_IDictionary;
exports.TcGlobals$$get_tcref_System_IComparable = TcGlobals$$get_tcref_System_IComparable;
exports.TcGlobals$$get_tcref_System_IStructuralComparable = TcGlobals$$get_tcref_System_IStructuralComparable;
exports.TcGlobals$$get_tcref_System_IStructuralEquatable = TcGlobals$$get_tcref_System_IStructuralEquatable;
exports.TcGlobals$$get_tcref_System_IDisposable = TcGlobals$$get_tcref_System_IDisposable;
exports.TcGlobals$$get_tcref_LanguagePrimitives = TcGlobals$$get_tcref_LanguagePrimitives;
exports.TcGlobals$$get_tcref_System_Collections_Generic_List = TcGlobals$$get_tcref_System_Collections_Generic_List;
exports.TcGlobals$$get_tcref_System_Collections_Generic_IList = TcGlobals$$get_tcref_System_Collections_Generic_IList;
exports.TcGlobals$$get_tcref_System_Collections_Generic_IReadOnlyList = TcGlobals$$get_tcref_System_Collections_Generic_IReadOnlyList;
exports.TcGlobals$$get_tcref_System_Collections_Generic_ICollection = TcGlobals$$get_tcref_System_Collections_Generic_ICollection;
exports.TcGlobals$$get_tcref_System_Collections_Generic_IReadOnlyCollection = TcGlobals$$get_tcref_System_Collections_Generic_IReadOnlyCollection;
exports.TcGlobals$$get_tcref_System_Collections_IEnumerable = TcGlobals$$get_tcref_System_Collections_IEnumerable;
exports.TcGlobals$$get_tcref_System_Collections_Generic_IEnumerable = TcGlobals$$get_tcref_System_Collections_Generic_IEnumerable;
exports.TcGlobals$$get_tcref_System_Collections_Generic_IEnumerator = TcGlobals$$get_tcref_System_Collections_Generic_IEnumerator;
exports.TcGlobals$$get_tcref_System_Attribute = TcGlobals$$get_tcref_System_Attribute;
exports.TcGlobals$$get_iltyp_TypedReference = TcGlobals$$get_iltyp_TypedReference;
exports.TcGlobals$$get_iltyp_StreamingContext = TcGlobals$$get_iltyp_StreamingContext;
exports.TcGlobals$$get_iltyp_SerializationInfo = TcGlobals$$get_iltyp_SerializationInfo;
exports.TcGlobals$$get_iltyp_Missing = TcGlobals$$get_iltyp_Missing;
exports.TcGlobals$$get_iltyp_AsyncCallback = TcGlobals$$get_iltyp_AsyncCallback;
exports.TcGlobals$$get_iltyp_IAsyncResult = TcGlobals$$get_iltyp_IAsyncResult;
exports.TcGlobals$$get_iltyp_IComparable = TcGlobals$$get_iltyp_IComparable;
exports.TcGlobals$$get_iltyp_Exception = TcGlobals$$get_iltyp_Exception;
exports.TcGlobals$$get_iltyp_ValueType = TcGlobals$$get_iltyp_ValueType;
exports.TcGlobals$$get_iltyp_RuntimeFieldHandle = TcGlobals$$get_iltyp_RuntimeFieldHandle;
exports.TcGlobals$$get_iltyp_RuntimeMethodHandle = TcGlobals$$get_iltyp_RuntimeMethodHandle;
exports.TcGlobals$$get_iltyp_RuntimeTypeHandle = TcGlobals$$get_iltyp_RuntimeTypeHandle;
exports.TcGlobals$$get_attrib_AttributeUsageAttribute = TcGlobals$$get_attrib_AttributeUsageAttribute;
exports.TcGlobals$$get_attrib_ParamArrayAttribute = TcGlobals$$get_attrib_ParamArrayAttribute;
exports.TcGlobals$$get_attrib_IDispatchConstantAttribute = TcGlobals$$get_attrib_IDispatchConstantAttribute;
exports.TcGlobals$$get_attrib_IUnknownConstantAttribute = TcGlobals$$get_attrib_IUnknownConstantAttribute;
exports.TcGlobals$$get_attrib_IsByRefLikeAttribute = TcGlobals$$get_attrib_IsByRefLikeAttribute;
exports.TcGlobals$$get_attrib_IsReadOnlyAttribute = TcGlobals$$get_attrib_IsReadOnlyAttribute;
exports.TcGlobals$$get_attrib_SystemObsolete = TcGlobals$$get_attrib_SystemObsolete;
exports.TcGlobals$$get_attrib_DllImportAttribute = TcGlobals$$get_attrib_DllImportAttribute;
exports.TcGlobals$$get_attrib_StructLayoutAttribute = TcGlobals$$get_attrib_StructLayoutAttribute;
exports.TcGlobals$$get_attrib_TypeForwardedToAttribute = TcGlobals$$get_attrib_TypeForwardedToAttribute;
exports.TcGlobals$$get_attrib_ComVisibleAttribute = TcGlobals$$get_attrib_ComVisibleAttribute;
exports.TcGlobals$$get_attrib_ComImportAttribute = TcGlobals$$get_attrib_ComImportAttribute;
exports.TcGlobals$$get_attrib_FieldOffsetAttribute = TcGlobals$$get_attrib_FieldOffsetAttribute;
exports.TcGlobals$$get_attrib_MarshalAsAttribute = TcGlobals$$get_attrib_MarshalAsAttribute;
exports.TcGlobals$$get_attrib_InAttribute = TcGlobals$$get_attrib_InAttribute;
exports.TcGlobals$$get_attrib_OutAttribute = TcGlobals$$get_attrib_OutAttribute;
exports.TcGlobals$$get_attrib_OptionalAttribute = TcGlobals$$get_attrib_OptionalAttribute;
exports.TcGlobals$$get_attrib_DefaultParameterValueAttribute = TcGlobals$$get_attrib_DefaultParameterValueAttribute;
exports.TcGlobals$$get_attrib_ThreadStaticAttribute = TcGlobals$$get_attrib_ThreadStaticAttribute;
exports.TcGlobals$$get_attrib_SpecialNameAttribute = TcGlobals$$get_attrib_SpecialNameAttribute;
exports.TcGlobals$$get_attrib_VolatileFieldAttribute = TcGlobals$$get_attrib_VolatileFieldAttribute;
exports.TcGlobals$$get_attrib_ContextStaticAttribute = TcGlobals$$get_attrib_ContextStaticAttribute;
exports.TcGlobals$$get_attrib_FlagsAttribute = TcGlobals$$get_attrib_FlagsAttribute;
exports.TcGlobals$$get_attrib_DefaultMemberAttribute = TcGlobals$$get_attrib_DefaultMemberAttribute;
exports.TcGlobals$$get_attrib_DebuggerDisplayAttribute = TcGlobals$$get_attrib_DebuggerDisplayAttribute;
exports.TcGlobals$$get_attrib_DebuggerTypeProxyAttribute = TcGlobals$$get_attrib_DebuggerTypeProxyAttribute;
exports.TcGlobals$$get_attrib_PreserveSigAttribute = TcGlobals$$get_attrib_PreserveSigAttribute;
exports.TcGlobals$$get_attrib_MethodImplAttribute = TcGlobals$$get_attrib_MethodImplAttribute;
exports.TcGlobals$$get_attrib_ExtensionAttribute = TcGlobals$$get_attrib_ExtensionAttribute;
exports.TcGlobals$$get_attrib_CallerLineNumberAttribute = TcGlobals$$get_attrib_CallerLineNumberAttribute;
exports.TcGlobals$$get_attrib_CallerFilePathAttribute = TcGlobals$$get_attrib_CallerFilePathAttribute;
exports.TcGlobals$$get_attrib_CallerMemberNameAttribute = TcGlobals$$get_attrib_CallerMemberNameAttribute;
exports.TcGlobals$$get_attrib_ProjectionParameterAttribute = TcGlobals$$get_attrib_ProjectionParameterAttribute;
exports.TcGlobals$$get_attrib_CustomOperationAttribute = TcGlobals$$get_attrib_CustomOperationAttribute;
exports.TcGlobals$$get_attrib_NonSerializedAttribute = TcGlobals$$get_attrib_NonSerializedAttribute;
exports.TcGlobals$$get_attrib_AutoSerializableAttribute = TcGlobals$$get_attrib_AutoSerializableAttribute;
exports.TcGlobals$$get_attrib_RequireQualifiedAccessAttribute = TcGlobals$$get_attrib_RequireQualifiedAccessAttribute;
exports.TcGlobals$$get_attrib_EntryPointAttribute = TcGlobals$$get_attrib_EntryPointAttribute;
exports.TcGlobals$$get_attrib_DefaultAugmentationAttribute = TcGlobals$$get_attrib_DefaultAugmentationAttribute;
exports.TcGlobals$$get_attrib_CompilerMessageAttribute = TcGlobals$$get_attrib_CompilerMessageAttribute;
exports.TcGlobals$$get_attrib_ExperimentalAttribute = TcGlobals$$get_attrib_ExperimentalAttribute;
exports.TcGlobals$$get_attrib_UnverifiableAttribute = TcGlobals$$get_attrib_UnverifiableAttribute;
exports.TcGlobals$$get_attrib_LiteralAttribute = TcGlobals$$get_attrib_LiteralAttribute;
exports.TcGlobals$$get_attrib_ConditionalAttribute = TcGlobals$$get_attrib_ConditionalAttribute;
exports.TcGlobals$$get_attrib_OptionalArgumentAttribute = TcGlobals$$get_attrib_OptionalArgumentAttribute;
exports.TcGlobals$$get_attrib_RequiresExplicitTypeArgumentsAttribute = TcGlobals$$get_attrib_RequiresExplicitTypeArgumentsAttribute;
exports.TcGlobals$$get_attrib_DefaultValueAttribute = TcGlobals$$get_attrib_DefaultValueAttribute;
exports.TcGlobals$$get_attrib_ClassAttribute = TcGlobals$$get_attrib_ClassAttribute;
exports.TcGlobals$$get_attrib_InterfaceAttribute = TcGlobals$$get_attrib_InterfaceAttribute;
exports.TcGlobals$$get_attrib_StructAttribute = TcGlobals$$get_attrib_StructAttribute;
exports.TcGlobals$$get_attrib_ReflectedDefinitionAttribute = TcGlobals$$get_attrib_ReflectedDefinitionAttribute;
exports.TcGlobals$$get_attrib_CompiledNameAttribute = TcGlobals$$get_attrib_CompiledNameAttribute;
exports.TcGlobals$$get_attrib_AutoOpenAttribute = TcGlobals$$get_attrib_AutoOpenAttribute;
exports.TcGlobals$$get_attrib_InternalsVisibleToAttribute = TcGlobals$$get_attrib_InternalsVisibleToAttribute;
exports.TcGlobals$$get_attrib_CompilationRepresentationAttribute = TcGlobals$$get_attrib_CompilationRepresentationAttribute;
exports.TcGlobals$$get_attrib_CompilationArgumentCountsAttribute = TcGlobals$$get_attrib_CompilationArgumentCountsAttribute;
exports.TcGlobals$$get_attrib_CompilationMappingAttribute = TcGlobals$$get_attrib_CompilationMappingAttribute;
exports.TcGlobals$$get_attrib_CLIEventAttribute = TcGlobals$$get_attrib_CLIEventAttribute;
exports.TcGlobals$$get_attrib_CLIMutableAttribute = TcGlobals$$get_attrib_CLIMutableAttribute;
exports.TcGlobals$$get_attrib_AllowNullLiteralAttribute = TcGlobals$$get_attrib_AllowNullLiteralAttribute;
exports.TcGlobals$$get_attrib_NoEqualityAttribute = TcGlobals$$get_attrib_NoEqualityAttribute;
exports.TcGlobals$$get_attrib_NoComparisonAttribute = TcGlobals$$get_attrib_NoComparisonAttribute;
exports.TcGlobals$$get_attrib_CustomEqualityAttribute = TcGlobals$$get_attrib_CustomEqualityAttribute;
exports.TcGlobals$$get_attrib_CustomComparisonAttribute = TcGlobals$$get_attrib_CustomComparisonAttribute;
exports.TcGlobals$$get_attrib_EqualityConditionalOnAttribute = TcGlobals$$get_attrib_EqualityConditionalOnAttribute;
exports.TcGlobals$$get_attrib_ComparisonConditionalOnAttribute = TcGlobals$$get_attrib_ComparisonConditionalOnAttribute;
exports.TcGlobals$$get_attrib_ReferenceEqualityAttribute = TcGlobals$$get_attrib_ReferenceEqualityAttribute;
exports.TcGlobals$$get_attrib_StructuralEqualityAttribute = TcGlobals$$get_attrib_StructuralEqualityAttribute;
exports.TcGlobals$$get_attrib_StructuralComparisonAttribute = TcGlobals$$get_attrib_StructuralComparisonAttribute;
exports.TcGlobals$$get_attrib_SealedAttribute = TcGlobals$$get_attrib_SealedAttribute;
exports.TcGlobals$$get_attrib_AbstractClassAttribute = TcGlobals$$get_attrib_AbstractClassAttribute;
exports.TcGlobals$$get_attrib_GeneralizableValueAttribute = TcGlobals$$get_attrib_GeneralizableValueAttribute;
exports.TcGlobals$$get_attrib_MeasureAttribute = TcGlobals$$get_attrib_MeasureAttribute;
exports.TcGlobals$$get_attrib_MeasureableAttribute = TcGlobals$$get_attrib_MeasureableAttribute;
exports.TcGlobals$$get_attrib_NoDynamicInvocationAttribute = TcGlobals$$get_attrib_NoDynamicInvocationAttribute;
exports.TcGlobals$$get_attrib_SecurityAttribute = TcGlobals$$get_attrib_SecurityAttribute;
exports.TcGlobals$$get_attrib_SecurityCriticalAttribute = TcGlobals$$get_attrib_SecurityCriticalAttribute;
exports.TcGlobals$$get_attrib_SecuritySafeCriticalAttribute = TcGlobals$$get_attrib_SecuritySafeCriticalAttribute;
exports.TcGlobals$$get_attrib_ComponentModelEditorBrowsableAttribute = TcGlobals$$get_attrib_ComponentModelEditorBrowsableAttribute;
exports.TcGlobals$$improveType = TcGlobals$$improveType;
exports.TcGlobals$$decompileType = TcGlobals$$decompileType;
exports.TcGlobals$$get_new_decimal_info = TcGlobals$$get_new_decimal_info;
exports.TcGlobals$$get_seq_info = TcGlobals$$get_seq_info;
exports.TcGlobals$$get_seq_vref = TcGlobals$$get_seq_vref;
exports.TcGlobals$$get_fsharpref_vref = TcGlobals$$get_fsharpref_vref;
exports.TcGlobals$$get_and_vref = TcGlobals$$get_and_vref;
exports.TcGlobals$$get_and2_vref = TcGlobals$$get_and2_vref;
exports.TcGlobals$$get_addrof_vref = TcGlobals$$get_addrof_vref;
exports.TcGlobals$$get_addrof2_vref = TcGlobals$$get_addrof2_vref;
exports.TcGlobals$$get_or_vref = TcGlobals$$get_or_vref;
exports.TcGlobals$$get_splice_expr_vref = TcGlobals$$get_splice_expr_vref;
exports.TcGlobals$$get_splice_raw_expr_vref = TcGlobals$$get_splice_raw_expr_vref;
exports.TcGlobals$$get_or2_vref = TcGlobals$$get_or2_vref;
exports.TcGlobals$$get_generic_equality_er_inner_vref = TcGlobals$$get_generic_equality_er_inner_vref;
exports.TcGlobals$$get_generic_equality_per_inner_vref = TcGlobals$$get_generic_equality_per_inner_vref;
exports.TcGlobals$$get_generic_equality_withc_inner_vref = TcGlobals$$get_generic_equality_withc_inner_vref;
exports.TcGlobals$$get_generic_comparison_inner_vref = TcGlobals$$get_generic_comparison_inner_vref;
exports.TcGlobals$$get_generic_comparison_withc_inner_vref = TcGlobals$$get_generic_comparison_withc_inner_vref;
exports.TcGlobals$$get_generic_comparison_withc_outer_info = TcGlobals$$get_generic_comparison_withc_outer_info;
exports.TcGlobals$$get_generic_equality_er_outer_info = TcGlobals$$get_generic_equality_er_outer_info;
exports.TcGlobals$$get_generic_equality_withc_outer_info = TcGlobals$$get_generic_equality_withc_outer_info;
exports.TcGlobals$$get_generic_hash_withc_outer_info = TcGlobals$$get_generic_hash_withc_outer_info;
exports.TcGlobals$$get_generic_hash_inner_vref = TcGlobals$$get_generic_hash_inner_vref;
exports.TcGlobals$$get_generic_hash_withc_inner_vref = TcGlobals$$get_generic_hash_withc_inner_vref;
exports.TcGlobals$$get_reference_equality_inner_vref = TcGlobals$$get_reference_equality_inner_vref;
exports.TcGlobals$$get_bitwise_or_vref = TcGlobals$$get_bitwise_or_vref;
exports.TcGlobals$$get_bitwise_and_vref = TcGlobals$$get_bitwise_and_vref;
exports.TcGlobals$$get_bitwise_xor_vref = TcGlobals$$get_bitwise_xor_vref;
exports.TcGlobals$$get_bitwise_unary_not_vref = TcGlobals$$get_bitwise_unary_not_vref;
exports.TcGlobals$$get_bitwise_shift_left_vref = TcGlobals$$get_bitwise_shift_left_vref;
exports.TcGlobals$$get_bitwise_shift_right_vref = TcGlobals$$get_bitwise_shift_right_vref;
exports.TcGlobals$$get_unchecked_addition_vref = TcGlobals$$get_unchecked_addition_vref;
exports.TcGlobals$$get_unchecked_unary_plus_vref = TcGlobals$$get_unchecked_unary_plus_vref;
exports.TcGlobals$$get_unchecked_unary_minus_vref = TcGlobals$$get_unchecked_unary_minus_vref;
exports.TcGlobals$$get_unchecked_unary_not_vref = TcGlobals$$get_unchecked_unary_not_vref;
exports.TcGlobals$$get_unchecked_subtraction_vref = TcGlobals$$get_unchecked_subtraction_vref;
exports.TcGlobals$$get_unchecked_multiply_vref = TcGlobals$$get_unchecked_multiply_vref;
exports.TcGlobals$$get_unchecked_defaultof_vref = TcGlobals$$get_unchecked_defaultof_vref;
exports.TcGlobals$$get_bitwise_or_info = TcGlobals$$get_bitwise_or_info;
exports.TcGlobals$$get_bitwise_and_info = TcGlobals$$get_bitwise_and_info;
exports.TcGlobals$$get_bitwise_xor_info = TcGlobals$$get_bitwise_xor_info;
exports.TcGlobals$$get_bitwise_unary_not_info = TcGlobals$$get_bitwise_unary_not_info;
exports.TcGlobals$$get_bitwise_shift_left_info = TcGlobals$$get_bitwise_shift_left_info;
exports.TcGlobals$$get_bitwise_shift_right_info = TcGlobals$$get_bitwise_shift_right_info;
exports.TcGlobals$$get_unchecked_addition_info = TcGlobals$$get_unchecked_addition_info;
exports.TcGlobals$$get_unchecked_subtraction_info = TcGlobals$$get_unchecked_subtraction_info;
exports.TcGlobals$$get_unchecked_multiply_info = TcGlobals$$get_unchecked_multiply_info;
exports.TcGlobals$$get_unchecked_division_info = TcGlobals$$get_unchecked_division_info;
exports.TcGlobals$$get_unchecked_modulus_info = TcGlobals$$get_unchecked_modulus_info;
exports.TcGlobals$$get_unchecked_unary_plus_info = TcGlobals$$get_unchecked_unary_plus_info;
exports.TcGlobals$$get_unchecked_unary_minus_info = TcGlobals$$get_unchecked_unary_minus_info;
exports.TcGlobals$$get_unchecked_unary_not_info = TcGlobals$$get_unchecked_unary_not_info;
exports.TcGlobals$$get_checked_addition_info = TcGlobals$$get_checked_addition_info;
exports.TcGlobals$$get_checked_subtraction_info = TcGlobals$$get_checked_subtraction_info;
exports.TcGlobals$$get_checked_multiply_info = TcGlobals$$get_checked_multiply_info;
exports.TcGlobals$$get_checked_unary_minus_info = TcGlobals$$get_checked_unary_minus_info;
exports.TcGlobals$$get_byte_checked_info = TcGlobals$$get_byte_checked_info;
exports.TcGlobals$$get_sbyte_checked_info = TcGlobals$$get_sbyte_checked_info;
exports.TcGlobals$$get_int16_checked_info = TcGlobals$$get_int16_checked_info;
exports.TcGlobals$$get_uint16_checked_info = TcGlobals$$get_uint16_checked_info;
exports.TcGlobals$$get_int_checked_info = TcGlobals$$get_int_checked_info;
exports.TcGlobals$$get_int32_checked_info = TcGlobals$$get_int32_checked_info;
exports.TcGlobals$$get_uint32_checked_info = TcGlobals$$get_uint32_checked_info;
exports.TcGlobals$$get_int64_checked_info = TcGlobals$$get_int64_checked_info;
exports.TcGlobals$$get_uint64_checked_info = TcGlobals$$get_uint64_checked_info;
exports.TcGlobals$$get_nativeint_checked_info = TcGlobals$$get_nativeint_checked_info;
exports.TcGlobals$$get_unativeint_checked_info = TcGlobals$$get_unativeint_checked_info;
exports.TcGlobals$$get_byte_operator_info = TcGlobals$$get_byte_operator_info;
exports.TcGlobals$$get_sbyte_operator_info = TcGlobals$$get_sbyte_operator_info;
exports.TcGlobals$$get_int16_operator_info = TcGlobals$$get_int16_operator_info;
exports.TcGlobals$$get_uint16_operator_info = TcGlobals$$get_uint16_operator_info;
exports.TcGlobals$$get_int_operator_info = TcGlobals$$get_int_operator_info;
exports.TcGlobals$$get_int32_operator_info = TcGlobals$$get_int32_operator_info;
exports.TcGlobals$$get_uint32_operator_info = TcGlobals$$get_uint32_operator_info;
exports.TcGlobals$$get_int64_operator_info = TcGlobals$$get_int64_operator_info;
exports.TcGlobals$$get_uint64_operator_info = TcGlobals$$get_uint64_operator_info;
exports.TcGlobals$$get_float32_operator_info = TcGlobals$$get_float32_operator_info;
exports.TcGlobals$$get_float_operator_info = TcGlobals$$get_float_operator_info;
exports.TcGlobals$$get_nativeint_operator_info = TcGlobals$$get_nativeint_operator_info;
exports.TcGlobals$$get_unativeint_operator_info = TcGlobals$$get_unativeint_operator_info;
exports.TcGlobals$$get_char_operator_info = TcGlobals$$get_char_operator_info;
exports.TcGlobals$$get_enum_operator_info = TcGlobals$$get_enum_operator_info;
exports.TcGlobals$$get_compare_operator_vref = TcGlobals$$get_compare_operator_vref;
exports.TcGlobals$$get_equals_operator_vref = TcGlobals$$get_equals_operator_vref;
exports.TcGlobals$$get_equals_nullable_operator_vref = TcGlobals$$get_equals_nullable_operator_vref;
exports.TcGlobals$$get_nullable_equals_nullable_operator_vref = TcGlobals$$get_nullable_equals_nullable_operator_vref;
exports.TcGlobals$$get_nullable_equals_operator_vref = TcGlobals$$get_nullable_equals_operator_vref;
exports.TcGlobals$$get_not_equals_operator_vref = TcGlobals$$get_not_equals_operator_vref;
exports.TcGlobals$$get_less_than_operator_vref = TcGlobals$$get_less_than_operator_vref;
exports.TcGlobals$$get_less_than_or_equals_operator_vref = TcGlobals$$get_less_than_or_equals_operator_vref;
exports.TcGlobals$$get_greater_than_operator_vref = TcGlobals$$get_greater_than_operator_vref;
exports.TcGlobals$$get_greater_than_or_equals_operator_vref = TcGlobals$$get_greater_than_or_equals_operator_vref;
exports.TcGlobals$$get_raise_vref = TcGlobals$$get_raise_vref;
exports.TcGlobals$$get_failwith_vref = TcGlobals$$get_failwith_vref;
exports.TcGlobals$$get_invalid_arg_vref = TcGlobals$$get_invalid_arg_vref;
exports.TcGlobals$$get_null_arg_vref = TcGlobals$$get_null_arg_vref;
exports.TcGlobals$$get_invalid_op_vref = TcGlobals$$get_invalid_op_vref;
exports.TcGlobals$$get_failwithf_vref = TcGlobals$$get_failwithf_vref;
exports.TcGlobals$$get_equals_operator_info = TcGlobals$$get_equals_operator_info;
exports.TcGlobals$$get_not_equals_operator = TcGlobals$$get_not_equals_operator;
exports.TcGlobals$$get_less_than_operator = TcGlobals$$get_less_than_operator;
exports.TcGlobals$$get_less_than_or_equals_operator = TcGlobals$$get_less_than_or_equals_operator;
exports.TcGlobals$$get_greater_than_operator = TcGlobals$$get_greater_than_operator;
exports.TcGlobals$$get_greater_than_or_equals_operator = TcGlobals$$get_greater_than_or_equals_operator;
exports.TcGlobals$$get_hash_info = TcGlobals$$get_hash_info;
exports.TcGlobals$$get_box_info = TcGlobals$$get_box_info;
exports.TcGlobals$$get_isnull_info = TcGlobals$$get_isnull_info;
exports.TcGlobals$$get_isnotnull_info = TcGlobals$$get_isnotnull_info;
exports.TcGlobals$$get_raise_info = TcGlobals$$get_raise_info;
exports.TcGlobals$$get_failwith_info = TcGlobals$$get_failwith_info;
exports.TcGlobals$$get_invalid_arg_info = TcGlobals$$get_invalid_arg_info;
exports.TcGlobals$$get_null_arg_info = TcGlobals$$get_null_arg_info;
exports.TcGlobals$$get_invalid_op_info = TcGlobals$$get_invalid_op_info;
exports.TcGlobals$$get_failwithf_info = TcGlobals$$get_failwithf_info;
exports.TcGlobals$$get_reraise_info = TcGlobals$$get_reraise_info;
exports.TcGlobals$$get_methodhandleof_info = TcGlobals$$get_methodhandleof_info;
exports.TcGlobals$$get_typeof_info = TcGlobals$$get_typeof_info;
exports.TcGlobals$$get_typedefof_info = TcGlobals$$get_typedefof_info;
exports.TcGlobals$$get_reraise_vref = TcGlobals$$get_reraise_vref;
exports.TcGlobals$$get_methodhandleof_vref = TcGlobals$$get_methodhandleof_vref;
exports.TcGlobals$$get_typeof_vref = TcGlobals$$get_typeof_vref;
exports.TcGlobals$$get_sizeof_vref = TcGlobals$$get_sizeof_vref;
exports.TcGlobals$$get_typedefof_vref = TcGlobals$$get_typedefof_vref;
exports.TcGlobals$$get_enum_vref = TcGlobals$$get_enum_vref;
exports.TcGlobals$$get_enumOfValue_vref = TcGlobals$$get_enumOfValue_vref;
exports.TcGlobals$$get_range_op_vref = TcGlobals$$get_range_op_vref;
exports.TcGlobals$$get_range_step_op_vref = TcGlobals$$get_range_step_op_vref;
exports.TcGlobals$$get_range_int32_op_vref = TcGlobals$$get_range_int32_op_vref;
exports.TcGlobals$$get_array_get_vref = TcGlobals$$get_array_get_vref;
exports.TcGlobals$$get_array2D_get_vref = TcGlobals$$get_array2D_get_vref;
exports.TcGlobals$$get_array3D_get_vref = TcGlobals$$get_array3D_get_vref;
exports.TcGlobals$$get_array4D_get_vref = TcGlobals$$get_array4D_get_vref;
exports.TcGlobals$$get_seq_singleton_vref = TcGlobals$$get_seq_singleton_vref;
exports.TcGlobals$$get_seq_collect_vref = TcGlobals$$get_seq_collect_vref;
exports.TcGlobals$$get_nativeptr_tobyref_vref = TcGlobals$$get_nativeptr_tobyref_vref;
exports.TcGlobals$$get_seq_using_vref = TcGlobals$$get_seq_using_vref;
exports.TcGlobals$$get_seq_delay_vref = TcGlobals$$get_seq_delay_vref;
exports.TcGlobals$$get_seq_append_vref = TcGlobals$$get_seq_append_vref;
exports.TcGlobals$$get_seq_generated_vref = TcGlobals$$get_seq_generated_vref;
exports.TcGlobals$$get_seq_finally_vref = TcGlobals$$get_seq_finally_vref;
exports.TcGlobals$$get_seq_of_functions_vref = TcGlobals$$get_seq_of_functions_vref;
exports.TcGlobals$$get_seq_map_vref = TcGlobals$$get_seq_map_vref;
exports.TcGlobals$$get_seq_empty_vref = TcGlobals$$get_seq_empty_vref;
exports.TcGlobals$$get_new_format_vref = TcGlobals$$get_new_format_vref;
exports.TcGlobals$$get_sprintf_vref = TcGlobals$$get_sprintf_vref;
exports.TcGlobals$$get_unbox_vref = TcGlobals$$get_unbox_vref;
exports.TcGlobals$$get_unbox_fast_vref = TcGlobals$$get_unbox_fast_vref;
exports.TcGlobals$$get_istype_vref = TcGlobals$$get_istype_vref;
exports.TcGlobals$$get_istype_fast_vref = TcGlobals$$get_istype_fast_vref;
exports.TcGlobals$$get_query_source_vref = TcGlobals$$get_query_source_vref;
exports.TcGlobals$$get_query_value_vref = TcGlobals$$get_query_value_vref;
exports.TcGlobals$$get_query_run_value_vref = TcGlobals$$get_query_run_value_vref;
exports.TcGlobals$$get_query_run_enumerable_vref = TcGlobals$$get_query_run_enumerable_vref;
exports.TcGlobals$$get_query_for_vref = TcGlobals$$get_query_for_vref;
exports.TcGlobals$$get_query_yield_vref = TcGlobals$$get_query_yield_vref;
exports.TcGlobals$$get_query_yield_from_vref = TcGlobals$$get_query_yield_from_vref;
exports.TcGlobals$$get_query_select_vref = TcGlobals$$get_query_select_vref;
exports.TcGlobals$$get_query_where_vref = TcGlobals$$get_query_where_vref;
exports.TcGlobals$$get_query_zero_vref = TcGlobals$$get_query_zero_vref;
exports.TcGlobals$$get_seq_collect_info = TcGlobals$$get_seq_collect_info;
exports.TcGlobals$$get_seq_using_info = TcGlobals$$get_seq_using_info;
exports.TcGlobals$$get_seq_delay_info = TcGlobals$$get_seq_delay_info;
exports.TcGlobals$$get_seq_append_info = TcGlobals$$get_seq_append_info;
exports.TcGlobals$$get_seq_generated_info = TcGlobals$$get_seq_generated_info;
exports.TcGlobals$$get_seq_finally_info = TcGlobals$$get_seq_finally_info;
exports.TcGlobals$$get_seq_of_functions_info = TcGlobals$$get_seq_of_functions_info;
exports.TcGlobals$$get_seq_map_info = TcGlobals$$get_seq_map_info;
exports.TcGlobals$$get_seq_singleton_info = TcGlobals$$get_seq_singleton_info;
exports.TcGlobals$$get_seq_empty_info = TcGlobals$$get_seq_empty_info;
exports.TcGlobals$$get_new_format_info = TcGlobals$$get_new_format_info;
exports.TcGlobals$$get_unbox_info = TcGlobals$$get_unbox_info;
exports.TcGlobals$$get_get_generic_comparer_info = TcGlobals$$get_get_generic_comparer_info;
exports.TcGlobals$$get_get_generic_er_equality_comparer_info = TcGlobals$$get_get_generic_er_equality_comparer_info;
exports.TcGlobals$$get_get_generic_per_equality_comparer_info = TcGlobals$$get_get_generic_per_equality_comparer_info;
exports.TcGlobals$$get_dispose_info = TcGlobals$$get_dispose_info;
exports.TcGlobals$$get_getstring_info = TcGlobals$$get_getstring_info;
exports.TcGlobals$$get_unbox_fast_info = TcGlobals$$get_unbox_fast_info;
exports.TcGlobals$$get_istype_info = TcGlobals$$get_istype_info;
exports.TcGlobals$$get_istype_fast_info = TcGlobals$$get_istype_fast_info;
exports.TcGlobals$$get_lazy_force_info = TcGlobals$$get_lazy_force_info;
exports.TcGlobals$$get_lazy_create_info = TcGlobals$$get_lazy_create_info;
exports.TcGlobals$$get_create_instance_info = TcGlobals$$get_create_instance_info;
exports.TcGlobals$$get_create_event_info = TcGlobals$$get_create_event_info;
exports.TcGlobals$$get_seq_to_list_info = TcGlobals$$get_seq_to_list_info;
exports.TcGlobals$$get_seq_to_array_info = TcGlobals$$get_seq_to_array_info;
exports.TcGlobals$$get_array_length_info = TcGlobals$$get_array_length_info;
exports.TcGlobals$$get_array_get_info = TcGlobals$$get_array_get_info;
exports.TcGlobals$$get_array2D_get_info = TcGlobals$$get_array2D_get_info;
exports.TcGlobals$$get_array3D_get_info = TcGlobals$$get_array3D_get_info;
exports.TcGlobals$$get_array4D_get_info = TcGlobals$$get_array4D_get_info;
exports.TcGlobals$$get_array_set_info = TcGlobals$$get_array_set_info;
exports.TcGlobals$$get_array2D_set_info = TcGlobals$$get_array2D_set_info;
exports.TcGlobals$$get_array3D_set_info = TcGlobals$$get_array3D_set_info;
exports.TcGlobals$$get_array4D_set_info = TcGlobals$$get_array4D_set_info;
exports.TcGlobals$$get_deserialize_quoted_FSharp_20_plus_info = TcGlobals$$get_deserialize_quoted_FSharp_20_plus_info;
exports.TcGlobals$$get_deserialize_quoted_FSharp_40_plus_info = TcGlobals$$get_deserialize_quoted_FSharp_40_plus_info;
exports.TcGlobals$$get_cast_quotation_info = TcGlobals$$get_cast_quotation_info;
exports.TcGlobals$$get_lift_value_info = TcGlobals$$get_lift_value_info;
exports.TcGlobals$$get_lift_value_with_name_info = TcGlobals$$get_lift_value_with_name_info;
exports.TcGlobals$$get_lift_value_with_defn_info = TcGlobals$$get_lift_value_with_defn_info;
exports.TcGlobals$$get_query_source_as_enum_info = TcGlobals$$get_query_source_as_enum_info;
exports.TcGlobals$$get_new_query_source_info = TcGlobals$$get_new_query_source_info;
exports.TcGlobals$$get_query_builder_tcref = TcGlobals$$get_query_builder_tcref;
exports.TcGlobals$$get_fail_init_info = TcGlobals$$get_fail_init_info;
exports.TcGlobals$$get_fail_static_init_info = TcGlobals$$get_fail_static_init_info;
exports.TcGlobals$$get_check_this_info = TcGlobals$$get_check_this_info;
exports.TcGlobals$$get_quote_to_linq_lambda_info = TcGlobals$$get_quote_to_linq_lambda_info;
exports.TcGlobals$$get_generic_hash_withc_tuple2_vref = TcGlobals$$get_generic_hash_withc_tuple2_vref;
exports.TcGlobals$$get_generic_hash_withc_tuple3_vref = TcGlobals$$get_generic_hash_withc_tuple3_vref;
exports.TcGlobals$$get_generic_hash_withc_tuple4_vref = TcGlobals$$get_generic_hash_withc_tuple4_vref;
exports.TcGlobals$$get_generic_hash_withc_tuple5_vref = TcGlobals$$get_generic_hash_withc_tuple5_vref;
exports.TcGlobals$$get_generic_equals_withc_tuple2_vref = TcGlobals$$get_generic_equals_withc_tuple2_vref;
exports.TcGlobals$$get_generic_equals_withc_tuple3_vref = TcGlobals$$get_generic_equals_withc_tuple3_vref;
exports.TcGlobals$$get_generic_equals_withc_tuple4_vref = TcGlobals$$get_generic_equals_withc_tuple4_vref;
exports.TcGlobals$$get_generic_equals_withc_tuple5_vref = TcGlobals$$get_generic_equals_withc_tuple5_vref;
exports.TcGlobals$$get_generic_compare_withc_tuple2_vref = TcGlobals$$get_generic_compare_withc_tuple2_vref;
exports.TcGlobals$$get_generic_compare_withc_tuple3_vref = TcGlobals$$get_generic_compare_withc_tuple3_vref;
exports.TcGlobals$$get_generic_compare_withc_tuple4_vref = TcGlobals$$get_generic_compare_withc_tuple4_vref;
exports.TcGlobals$$get_generic_compare_withc_tuple5_vref = TcGlobals$$get_generic_compare_withc_tuple5_vref;
exports.TcGlobals$$get_generic_equality_withc_outer_vref = TcGlobals$$get_generic_equality_withc_outer_vref;
exports.TcGlobals$$get_cons_ucref = TcGlobals$$get_cons_ucref;
exports.TcGlobals$$get_nil_ucref = TcGlobals$$get_nil_ucref;
exports.TcGlobals$$get_suppressed_types = TcGlobals$$get_suppressed_types;
exports.TcGlobals$$get_isInteractive = TcGlobals$$get_isInteractive;
exports.TcGlobals$$FindSysTyconRef = TcGlobals$$FindSysTyconRef;
exports.TcGlobals$$TryFindSysTyconRef = TcGlobals$$TryFindSysTyconRef;
exports.TcGlobals$$FindSysILTypeRef$$Z721C83C5 = TcGlobals$$FindSysILTypeRef$$Z721C83C5;
exports.TcGlobals$$TryFindSysILTypeRef$$Z721C83C5 = TcGlobals$$TryFindSysILTypeRef$$Z721C83C5;
exports.TcGlobals$$FindSysAttrib$$Z721C83C5 = TcGlobals$$FindSysAttrib$$Z721C83C5;
exports.TcGlobals$$TryFindSysAttrib$$Z721C83C5 = TcGlobals$$TryFindSysAttrib$$Z721C83C5;
exports.TcGlobals$$get_ilxPubCloEnv = TcGlobals$$get_ilxPubCloEnv;
exports.TcGlobals$$AddMethodGeneratedAttributes$$3AF987BF = TcGlobals$$AddMethodGeneratedAttributes$$3AF987BF;
exports.TcGlobals$$AddFieldGeneratedAttrs$$58456522 = TcGlobals$$AddFieldGeneratedAttrs$$58456522;
exports.TcGlobals$$AddFieldNeverAttrs$$58456522 = TcGlobals$$AddFieldNeverAttrs$$58456522;
exports.TcGlobals$$mkDebuggerHiddenAttribute = TcGlobals$$mkDebuggerHiddenAttribute;
exports.TcGlobals$$mkDebuggerDisplayAttribute$$Z721C83C5 = TcGlobals$$mkDebuggerDisplayAttribute$$Z721C83C5;
exports.TcGlobals$$get_DebuggerBrowsableNeverAttribute = TcGlobals$$get_DebuggerBrowsableNeverAttribute;
exports.TcGlobals$$mkDebuggerStepThroughAttribute = TcGlobals$$mkDebuggerStepThroughAttribute;
exports.TcGlobals$$mkDebuggableAttribute$$Z1FBCCD16 = TcGlobals$$mkDebuggableAttribute$$Z1FBCCD16;
exports.TcGlobals$$mkDebuggableAttributeV2$$7675FF80 = TcGlobals$$mkDebuggableAttributeV2$$7675FF80;
exports.TcGlobals$$get_CompilerGeneratedAttribute = TcGlobals$$get_CompilerGeneratedAttribute;
exports.TcGlobals$$get_eraseClassUnionDef = TcGlobals$$get_eraseClassUnionDef;
exports.TcGlobals = exports.BuiltinAttribInfo = exports.FSharpLib$$$CollectionsPathArray = exports.FSharpLib$$$ControlPathArray = exports.FSharpLib$$$LinqPathArray = exports.FSharpLib$$$CorePathArray = exports.FSharpLib$$$RootPathArray = exports.FSharpLib$$$QuotationsPath = exports.FSharpLib$$$RuntimeHelpersPath = exports.FSharpLib$$$LinqRuntimeHelpersPath = exports.FSharpLib$$$CompilerServicesPath = exports.FSharpLib$$$NativeInteropPath = exports.FSharpLib$$$CollectionsPath = exports.FSharpLib$$$LinqPath = exports.FSharpLib$$$ControlPath = exports.FSharpLib$$$QuotationsName = exports.FSharpLib$$$NativeInteropName = exports.FSharpLib$$$ExtraTopLevelOperatorsName = exports.FSharpLib$$$RuntimeHelpersName = exports.FSharpLib$$$LinqRuntimeHelpersName = exports.FSharpLib$$$CompilerServicesName = exports.FSharpLib$$$LanguagePrimitivesName = exports.FSharpLib$$$CollectionsName = exports.FSharpLib$$$LinqName = exports.FSharpLib$$$ControlName = exports.FSharpLib$$$CoreOperatorsCheckedName = exports.IntrinsicValRef = exports.DummyFileNameForRangesWithoutASpecificLocation = void 0;

var _range = require("./range");

var _Types = require("../fable-core.2.0.3/Types");

var _tast = require("./tast");

var _ast = require("./ast");

var _il = require("../absil/il");

var _Array = require("../fable-core.2.0.3/Array");

var _String = require("../fable-core.2.0.3/String");

var _FSharp = require("../fable-core.2.0.3/FSharp.Collections");

var _Util = require("../fable-core.2.0.3/Util");

var _Map = require("../fable-core.2.0.3/Map");

var _Seq = require("../fable-core.2.0.3/Seq");

var _List = require("../fable-core.2.0.3/List");

var _lib = require("./lib");

var _illib = require("../absil/illib");

var _PrettyNaming = require("./PrettyNaming");

var _Option = require("../fable-core.2.0.3/Option");

var _EraseClosures = require("../ilx/EraseClosures");

var _EraseUnions = require("../ilx/EraseUnions");

var _FSComp = require("../codegen/FSComp");

var _ilxsettings = require("../ilx/ilxsettings");

const DummyFileNameForRangesWithoutASpecificLocation = "startup";
exports.DummyFileNameForRangesWithoutASpecificLocation = DummyFileNameForRangesWithoutASpecificLocation;
const envRange = (0, _range.rangeN)(DummyFileNameForRangesWithoutASpecificLocation, 0);
const IntrinsicValRef = (0, _Types.declare)(function IntrinsicValRef(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.IntrinsicValRef = IntrinsicValRef;

function IntrinsicValRef$$get_Name(x) {
  const nm = x.fields[1];
  return nm;
}

function IntrinsicValRef$$get_DebugText(x$$1) {
  return x$$1.toString();
}

IntrinsicValRef.prototype.toString = function () {
  const x$$2 = this;
  return IntrinsicValRef$$get_Name(x$$2);
};

function ValRefForIntrinsic(_arg1) {
  const mvr = _arg1.fields[0];
  const key = _arg1.fields[4];
  return (0, _tast.mkNonLocalValRef)(mvr, key);
}

const FSharpLib$$$CoreOperatorsCheckedName = _ast.FSharpLib$$$Root + ".Core.Operators.Checked";
exports.FSharpLib$$$CoreOperatorsCheckedName = FSharpLib$$$CoreOperatorsCheckedName;
const FSharpLib$$$ControlName = _ast.FSharpLib$$$Root + ".Control";
exports.FSharpLib$$$ControlName = FSharpLib$$$ControlName;
const FSharpLib$$$LinqName = _ast.FSharpLib$$$Root + ".Linq";
exports.FSharpLib$$$LinqName = FSharpLib$$$LinqName;
const FSharpLib$$$CollectionsName = _ast.FSharpLib$$$Root + ".Collections";
exports.FSharpLib$$$CollectionsName = FSharpLib$$$CollectionsName;
const FSharpLib$$$LanguagePrimitivesName = _ast.FSharpLib$$$Root + ".Core.LanguagePrimitives";
exports.FSharpLib$$$LanguagePrimitivesName = FSharpLib$$$LanguagePrimitivesName;
const FSharpLib$$$CompilerServicesName = _ast.FSharpLib$$$Root + ".Core.CompilerServices";
exports.FSharpLib$$$CompilerServicesName = FSharpLib$$$CompilerServicesName;
const FSharpLib$$$LinqRuntimeHelpersName = _ast.FSharpLib$$$Root + ".Linq.RuntimeHelpers";
exports.FSharpLib$$$LinqRuntimeHelpersName = FSharpLib$$$LinqRuntimeHelpersName;
const FSharpLib$$$RuntimeHelpersName = _ast.FSharpLib$$$Root + ".Core.CompilerServices.RuntimeHelpers";
exports.FSharpLib$$$RuntimeHelpersName = FSharpLib$$$RuntimeHelpersName;
const FSharpLib$$$ExtraTopLevelOperatorsName = _ast.FSharpLib$$$Root + ".Core.ExtraTopLevelOperators";
exports.FSharpLib$$$ExtraTopLevelOperatorsName = FSharpLib$$$ExtraTopLevelOperatorsName;
const FSharpLib$$$NativeInteropName = _ast.FSharpLib$$$Root + ".NativeInterop";
exports.FSharpLib$$$NativeInteropName = FSharpLib$$$NativeInteropName;
const FSharpLib$$$QuotationsName = _ast.FSharpLib$$$Root + ".Quotations";
exports.FSharpLib$$$QuotationsName = FSharpLib$$$QuotationsName;
const FSharpLib$$$ControlPath = (0, _il.splitNamespace)(FSharpLib$$$ControlName);
exports.FSharpLib$$$ControlPath = FSharpLib$$$ControlPath;
const FSharpLib$$$LinqPath = (0, _il.splitNamespace)(FSharpLib$$$LinqName);
exports.FSharpLib$$$LinqPath = FSharpLib$$$LinqPath;
const FSharpLib$$$CollectionsPath = (0, _il.splitNamespace)(FSharpLib$$$CollectionsName);
exports.FSharpLib$$$CollectionsPath = FSharpLib$$$CollectionsPath;
const FSharpLib$$$NativeInteropPath = (0, _Array.ofList)((0, _il.splitNamespace)(FSharpLib$$$NativeInteropName), Array);
exports.FSharpLib$$$NativeInteropPath = FSharpLib$$$NativeInteropPath;
const FSharpLib$$$CompilerServicesPath = (0, _Array.ofList)((0, _il.splitNamespace)(FSharpLib$$$CompilerServicesName), Array);
exports.FSharpLib$$$CompilerServicesPath = FSharpLib$$$CompilerServicesPath;
const FSharpLib$$$LinqRuntimeHelpersPath = (0, _Array.ofList)((0, _il.splitNamespace)(FSharpLib$$$LinqRuntimeHelpersName), Array);
exports.FSharpLib$$$LinqRuntimeHelpersPath = FSharpLib$$$LinqRuntimeHelpersPath;
const FSharpLib$$$RuntimeHelpersPath = (0, _Array.ofList)((0, _il.splitNamespace)(FSharpLib$$$RuntimeHelpersName), Array);
exports.FSharpLib$$$RuntimeHelpersPath = FSharpLib$$$RuntimeHelpersPath;
const FSharpLib$$$QuotationsPath = (0, _Array.ofList)((0, _il.splitNamespace)(FSharpLib$$$QuotationsName), Array);
exports.FSharpLib$$$QuotationsPath = FSharpLib$$$QuotationsPath;
const FSharpLib$$$RootPathArray = (0, _Array.ofList)(_ast.FSharpLib$$$RootPath, Array);
exports.FSharpLib$$$RootPathArray = FSharpLib$$$RootPathArray;
const FSharpLib$$$CorePathArray = (0, _Array.ofList)(_ast.FSharpLib$$$CorePath, Array);
exports.FSharpLib$$$CorePathArray = FSharpLib$$$CorePathArray;
const FSharpLib$$$LinqPathArray = (0, _Array.ofList)(FSharpLib$$$LinqPath, Array);
exports.FSharpLib$$$LinqPathArray = FSharpLib$$$LinqPathArray;
const FSharpLib$$$ControlPathArray = (0, _Array.ofList)(FSharpLib$$$ControlPath, Array);
exports.FSharpLib$$$ControlPathArray = FSharpLib$$$ControlPathArray;
const FSharpLib$$$CollectionsPathArray = (0, _Array.ofList)(FSharpLib$$$CollectionsPath, Array);
exports.FSharpLib$$$CollectionsPathArray = FSharpLib$$$CollectionsPathArray;

function mkNonGenericTy(tcref) {
  return new _tast.TType(1, "TType_app", tcref, (0, _Types.L)());
}

function mkNonLocalTyconRef2(ccu, path, n) {
  return (0, _tast.mkNonLocalTyconRef)((0, _tast.mkNonLocalEntityRef)(ccu, path), n);
}

function mk_MFCore_tcref(ccu$$1, n$$1) {
  return mkNonLocalTyconRef2(ccu$$1, FSharpLib$$$CorePathArray, n$$1);
}

function mk_MFQuotations_tcref(ccu$$2, n$$2) {
  return mkNonLocalTyconRef2(ccu$$2, FSharpLib$$$QuotationsPath, n$$2);
}

function mk_MFLinq_tcref(ccu$$3, n$$3) {
  return mkNonLocalTyconRef2(ccu$$3, FSharpLib$$$LinqPathArray, n$$3);
}

function mk_MFCollections_tcref(ccu$$4, n$$4) {
  return mkNonLocalTyconRef2(ccu$$4, FSharpLib$$$CollectionsPathArray, n$$4);
}

function mk_MFCompilerServices_tcref(ccu$$5, n$$5) {
  return mkNonLocalTyconRef2(ccu$$5, FSharpLib$$$CompilerServicesPath, n$$5);
}

function mk_MFRuntimeHelpers_tcref(ccu$$6, n$$6) {
  return mkNonLocalTyconRef2(ccu$$6, FSharpLib$$$RuntimeHelpersPath, n$$6);
}

function mk_MFControl_tcref(ccu$$7, n$$7) {
  return mkNonLocalTyconRef2(ccu$$7, FSharpLib$$$ControlPathArray, n$$7);
}

const BuiltinAttribInfo = (0, _Types.declare)(function BuiltinAttribInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.BuiltinAttribInfo = BuiltinAttribInfo;

function BuiltinAttribInfo$$get_TyconRef(this$) {
  const tcref$$1 = this$.fields[1];
  return tcref$$1;
}

function BuiltinAttribInfo$$get_TypeRef(this$$$1) {
  const tref = this$$$1.fields[0];
  return tref;
}

function BuiltinAttribInfo$$get_DebugText(x$$3) {
  return x$$3.toString();
}

BuiltinAttribInfo.prototype.toString = function () {
  const x$$4 = this;
  return BuiltinAttribInfo$$get_TyconRef(x$$4).toString();
};

const TcGlobals = (0, _Types.declare)(function TcGlobals(compilingFslib, ilg, fslibCcu, directoryToResolveRelativePaths, mlCompatibility, isInteractive, tryFindSysTypeCcu, emitDebugInfoInQuotations, noDebugData) {
  const $this$$1 = this;
  $this$$1["compilingFslib@180"] = compilingFslib;
  $this$$1["ilg@180"] = ilg;
  $this$$1["fslibCcu@180"] = fslibCcu;
  $this$$1["directoryToResolveRelativePaths@180"] = directoryToResolveRelativePaths;
  $this$$1["mlCompatibility@181"] = mlCompatibility;
  $this$$1["isInteractive@181"] = isInteractive;
  $this$$1.tryFindSysTypeCcu = tryFindSysTypeCcu;
  $this$$1["emitDebugInfoInQuotations@184"] = emitDebugInfoInQuotations;
  $this$$1.noDebugData = noDebugData;
  const vara = (0, _tast.NewRigidTypar)("a", envRange);
  const varb = (0, _tast.NewRigidTypar)("b", envRange);
  const varc = (0, _tast.NewRigidTypar)("c", envRange);
  const vard = (0, _tast.NewRigidTypar)("d", envRange);
  const vare = (0, _tast.NewRigidTypar)("e", envRange);
  const varaTy = (0, _tast.mkTyparTy)(vara);
  const varbTy = (0, _tast.mkTyparTy)(varb);
  const varcTy = (0, _tast.mkTyparTy)(varc);
  const vardTy = (0, _tast.mkTyparTy)(vard);
  const vareTy = (0, _tast.mkTyparTy)(vare);
  $this$$1.v_int_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "int");
  $this$$1.v_nativeint_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "nativeint");
  $this$$1.v_unativeint_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "unativeint");
  $this$$1.v_int32_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "int32");
  $this$$1.v_int16_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "int16");
  $this$$1.v_int64_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "int64");
  $this$$1.v_uint16_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "uint16");
  $this$$1.v_uint32_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "uint32");
  $this$$1.v_uint64_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "uint64");
  $this$$1.v_sbyte_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "sbyte");
  $this$$1.v_decimal_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "decimal");
  $this$$1.v_pdecimal_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "decimal`1");
  $this$$1.v_byte_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "byte");
  $this$$1.v_bool_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "bool");
  const v_string_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "string");
  const v_obj_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "obj");
  $this$$1.v_unit_tcr_canon = mk_MFCore_tcref($this$$1["fslibCcu@180"], "Unit");
  $this$$1.v_unit_tcr_nice = mk_MFCore_tcref($this$$1["fslibCcu@180"], "unit");
  $this$$1.v_exn_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "exn");
  $this$$1.v_char_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "char");
  $this$$1.v_float_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "float");
  $this$$1.v_float32_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "float32");
  $this$$1.v_pfloat_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "float`1");
  $this$$1.v_pfloat32_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "float32`1");
  $this$$1.v_pint_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "int`1");
  $this$$1.v_pint8_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "sbyte`1");
  $this$$1.v_pint16_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "int16`1");
  $this$$1.v_pint64_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "int64`1");
  $this$$1.v_byref_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "byref`1");
  $this$$1.v_byref2_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "byref`2");
  $this$$1.v_outref_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "outref`1");
  $this$$1.v_inref_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "inref`1");
  $this$$1.v_nativeptr_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "nativeptr`1");
  $this$$1.v_voidptr_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "voidptr");
  $this$$1.v_ilsigptr_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "ilsigptr`1");
  $this$$1.v_fastFunc_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "FSharpFunc`2");
  $this$$1.v_refcell_tcr_canon = mk_MFCore_tcref($this$$1["fslibCcu@180"], "Ref`1");
  const v_refcell_tcr_nice = mk_MFCore_tcref($this$$1["fslibCcu@180"], "ref`1");
  const sys = (0, _Types.L)("System", (0, _Types.L)());
  const sysLinq = (0, _Types.L)("System", (0, _Types.L)("Linq", (0, _Types.L)()));
  const sysCollections = (0, _Types.L)("System", (0, _Types.L)("Collections", (0, _Types.L)()));
  const sysGenerics = (0, _Types.L)("System", (0, _Types.L)("Collections", (0, _Types.L)("Generic", (0, _Types.L)())));
  const sysCompilerServices = (0, _Types.L)("System", (0, _Types.L)("Runtime", (0, _Types.L)("CompilerServices", (0, _Types.L)())));
  $this$$1.lazy_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "Lazy`1");
  $this$$1.v_fslib_IEvent2_tcr = mk_MFControl_tcref($this$$1["fslibCcu@180"], "IEvent`2");
  $this$$1.v_tcref_IQueryable = TcGlobals$$findSysTyconRef($this$$1, sysLinq, "IQueryable`1");
  $this$$1.v_tcref_IObservable = TcGlobals$$findSysTyconRef($this$$1, sys, "IObservable`1");
  $this$$1.v_tcref_IObserver = TcGlobals$$findSysTyconRef($this$$1, sys, "IObserver`1");
  $this$$1.v_fslib_IDelegateEvent_tcr = mk_MFControl_tcref($this$$1["fslibCcu@180"], "IDelegateEvent`1");
  $this$$1.v_option_tcr_nice = mk_MFCore_tcref($this$$1["fslibCcu@180"], "option`1");
  $this$$1.v_list_tcr_canon = mk_MFCollections_tcref($this$$1["fslibCcu@180"], "List`1");
  $this$$1.v_list_tcr_nice = mk_MFCollections_tcref($this$$1["fslibCcu@180"], "list`1");
  $this$$1.v_lazy_tcr_nice = mk_MFControl_tcref($this$$1["fslibCcu@180"], "Lazy`1");
  $this$$1.v_seq_tcr = mk_MFCollections_tcref($this$$1["fslibCcu@180"], "seq`1");
  $this$$1.v_format_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "PrintfFormat`5");
  $this$$1.v_format4_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "PrintfFormat`4");
  $this$$1.v_date_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "DateTime");
  $this$$1.v_IEnumerable_tcr = TcGlobals$$findSysTyconRef($this$$1, sysGenerics, "IEnumerable`1");
  $this$$1.v_IEnumerator_tcr = TcGlobals$$findSysTyconRef($this$$1, sysGenerics, "IEnumerator`1");
  $this$$1.v_System_Attribute_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "Attribute");
  $this$$1.v_expr_tcr = mk_MFQuotations_tcref($this$$1["fslibCcu@180"], "Expr`1");
  $this$$1.v_raw_expr_tcr = mk_MFQuotations_tcref($this$$1["fslibCcu@180"], "Expr");
  $this$$1.v_query_builder_tcref = mk_MFLinq_tcref($this$$1["fslibCcu@180"], "QueryBuilder");
  $this$$1.v_querySource_tcr = mk_MFLinq_tcref($this$$1["fslibCcu@180"], "QuerySource`2");
  $this$$1.v_linqExpression_tcr = TcGlobals$$findSysTyconRef($this$$1, (0, _Types.L)("System", (0, _Types.L)("Linq", (0, _Types.L)("Expressions", (0, _Types.L)()))), "Expression`1");
  $this$$1.v_il_arr_tcr_map = (0, _Array.initialize)(32, function (idx) {
    let type_sig;
    const rank = idx + 1 | 0;
    type_sig = rank === 1 ? "[]`1" : "[" + (0, _String.replicate)(rank - 1, ",") + "]`1";
    return mk_MFCore_tcref($this$$1["fslibCcu@180"], type_sig);
  }, Array);
  $this$$1.v_byte_ty = mkNonGenericTy($this$$1.v_byte_tcr);
  const v_sbyte_ty = mkNonGenericTy($this$$1.v_sbyte_tcr);
  const v_int16_ty = mkNonGenericTy($this$$1.v_int16_tcr);
  const v_uint16_ty = mkNonGenericTy($this$$1.v_uint16_tcr);
  $this$$1.v_int_ty = mkNonGenericTy($this$$1.v_int_tcr);
  const v_int32_ty = mkNonGenericTy($this$$1.v_int32_tcr);
  const v_uint32_ty = mkNonGenericTy($this$$1.v_uint32_tcr);
  const v_int64_ty = mkNonGenericTy($this$$1.v_int64_tcr);
  const v_uint64_ty = mkNonGenericTy($this$$1.v_uint64_tcr);
  const v_float32_ty = mkNonGenericTy($this$$1.v_float32_tcr);
  const v_float_ty = mkNonGenericTy($this$$1.v_float_tcr);
  const v_nativeint_ty = mkNonGenericTy($this$$1.v_nativeint_tcr);
  const v_unativeint_ty = mkNonGenericTy($this$$1.v_unativeint_tcr);
  const v_enum_ty = mkNonGenericTy($this$$1.v_int_tcr);
  $this$$1.v_bool_ty = mkNonGenericTy($this$$1.v_bool_tcr);
  $this$$1.v_char_ty = mkNonGenericTy($this$$1.v_char_tcr);
  $this$$1.v_obj_ty = mkNonGenericTy(v_obj_tcr);
  $this$$1.v_string_ty = mkNonGenericTy(v_string_tcr);
  $this$$1.v_decimal_ty = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "Decimal");
  $this$$1.v_unit_ty = mkNonGenericTy($this$$1.v_unit_tcr_nice);
  $this$$1.v_system_Type_ty = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "Type");
  $this$$1.v_system_Reflection_MethodInfo_ty = TcGlobals$$mkSysNonGenericTy($this$$1, (0, _Types.L)("System", (0, _Types.L)("Reflection", (0, _Types.L)())), "MethodInfo");
  $this$$1.v_nullable_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "Nullable`1");
  $this$$1.v_knownIntrinsics = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp.HashIdentity$$$Structural)()));
  $this$$1.v_IComparer_ty = TcGlobals$$mkSysNonGenericTy($this$$1, sysCollections, "IComparer");
  $this$$1.v_IEqualityComparer_ty = TcGlobals$$mkSysNonGenericTy($this$$1, sysCollections, "IEqualityComparer");
  $this$$1.v_system_RuntimeMethodHandle_ty = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "RuntimeMethodHandle");
  $this$$1.v_tcref_System_Collections_IEnumerable = TcGlobals$$findSysTyconRef($this$$1, sysCollections, "IEnumerable");
  const mkRawQuotedExprTy = new _tast.TType(1, "TType_app", $this$$1.v_raw_expr_tcr, (0, _Types.L)());
  const mkQueryBuilderTy = new _tast.TType(1, "TType_app", $this$$1.v_query_builder_tcref, (0, _Types.L)());
  $this$$1.v_cons_ucref = (0, _tast.mkUnionCaseRef)($this$$1.v_list_tcr_canon, "op_ColonColon");
  $this$$1.v_nil_ucref = (0, _tast.mkUnionCaseRef)($this$$1.v_list_tcr_canon, "op_Nil");
  const fslib_MF_nleref = (0, _tast.mkNonLocalEntityRef)($this$$1["fslibCcu@180"], FSharpLib$$$RootPathArray);
  const fslib_MFCore_nleref = (0, _tast.mkNonLocalEntityRef)($this$$1["fslibCcu@180"], FSharpLib$$$CorePathArray);
  const fslib_MFLinq_nleref = (0, _tast.mkNonLocalEntityRef)($this$$1["fslibCcu@180"], FSharpLib$$$LinqPathArray);
  const fslib_MFCollections_nleref = (0, _tast.mkNonLocalEntityRef)($this$$1["fslibCcu@180"], FSharpLib$$$CollectionsPathArray);
  const fslib_MFCompilerServices_nleref = (0, _tast.mkNonLocalEntityRef)($this$$1["fslibCcu@180"], FSharpLib$$$CompilerServicesPath);
  const fslib_MFLinqRuntimeHelpers_nleref = (0, _tast.mkNonLocalEntityRef)($this$$1["fslibCcu@180"], FSharpLib$$$LinqRuntimeHelpersPath);
  const fslib_MFControl_nleref = (0, _tast.mkNonLocalEntityRef)($this$$1["fslibCcu@180"], FSharpLib$$$ControlPathArray);
  const fslib_MFNativeInterop_nleref = (0, _tast.mkNonLocalEntityRef)($this$$1["fslibCcu@180"], FSharpLib$$$NativeInteropPath);
  const fslib_MFLanguagePrimitives_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCore_nleref, "LanguagePrimitives");
  const fslib_MFIntrinsicOperators_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFLanguagePrimitives_nleref, "IntrinsicOperators");
  const fslib_MFIntrinsicFunctions_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFLanguagePrimitives_nleref, "IntrinsicFunctions");
  const fslib_MFHashCompare_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFLanguagePrimitives_nleref, "HashCompare");
  const fslib_MFOperators_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCore_nleref, "Operators");
  const fslib_MFByRefKinds_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCore_nleref, "ByRefKinds");
  const fslib_MFOperatorIntrinsics_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFOperators_nleref, "OperatorIntrinsics");
  const fslib_MFOperatorsUnchecked_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFOperators_nleref, "Unchecked");
  const fslib_MFOperatorsChecked_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFOperators_nleref, "Checked");
  const fslib_MFExtraTopLevelOperators_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCore_nleref, "ExtraTopLevelOperators");
  const fslib_MFNullableOperators_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFLinq_nleref, "NullableOperators");
  const fslib_MFQueryRunExtensions_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFLinq_nleref, "QueryRunExtensions");
  const fslib_MFQueryRunExtensionsLowPriority_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFQueryRunExtensions_nleref, "LowPriority");
  const fslib_MFQueryRunExtensionsHighPriority_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFQueryRunExtensions_nleref, "HighPriority");
  const fslib_MFSeqModule_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCollections_nleref, "SeqModule");
  const fslib_MFListModule_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCollections_nleref, "ListModule");
  const fslib_MFArrayModule_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCollections_nleref, "ArrayModule");
  const fslib_MFArray2DModule_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCollections_nleref, "Array2DModule");
  const fslib_MFArray3DModule_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCollections_nleref, "Array3DModule");
  const fslib_MFArray4DModule_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCollections_nleref, "Array4DModule");
  const fslib_MFSetModule_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCollections_nleref, "SetModule");
  const fslib_MFMapModule_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCollections_nleref, "MapModule");
  const fslib_MFStringModule_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCollections_nleref, "StringModule");
  const fslib_MFNativePtrModule_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFNativeInterop_nleref, "NativePtrModule");
  const fslib_MFOptionModule_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCore_nleref, "OptionModule");
  const fslib_MFRuntimeHelpers_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFCompilerServices_nleref, "RuntimeHelpers");
  const fslib_MFQuotations_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MF_nleref, "Quotations");
  const fslib_MFLinqRuntimeHelpersQuotationConverter_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFLinqRuntimeHelpers_nleref, "LeafExpressionConverter");
  const fslib_MFLazyExtensions_nleref = (0, _tast.mkNestedNonLocalEntityRef)(fslib_MFControl_nleref, "LazyExtensions");
  $this$$1.v_ref_tuple1_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "Tuple`1");
  $this$$1.v_ref_tuple2_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "Tuple`2");
  $this$$1.v_ref_tuple3_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "Tuple`3");
  $this$$1.v_ref_tuple4_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "Tuple`4");
  $this$$1.v_ref_tuple5_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "Tuple`5");
  $this$$1.v_ref_tuple6_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "Tuple`6");
  $this$$1.v_ref_tuple7_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "Tuple`7");
  $this$$1.v_ref_tuple8_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "Tuple`8");
  $this$$1.v_struct_tuple1_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "ValueTuple`1");
  $this$$1.v_struct_tuple2_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "ValueTuple`2");
  $this$$1.v_struct_tuple3_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "ValueTuple`3");
  $this$$1.v_struct_tuple4_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "ValueTuple`4");
  $this$$1.v_struct_tuple5_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "ValueTuple`5");
  $this$$1.v_struct_tuple6_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "ValueTuple`6");
  $this$$1.v_struct_tuple7_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "ValueTuple`7");
  $this$$1.v_struct_tuple8_tcr = TcGlobals$$findSysTyconRef($this$$1, sys, "ValueTuple`8");
  $this$$1.v_choice2_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "Choice`2");
  $this$$1.v_choice3_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "Choice`3");
  $this$$1.v_choice4_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "Choice`4");
  $this$$1.v_choice5_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "Choice`5");
  $this$$1.v_choice6_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "Choice`6");
  $this$$1.v_choice7_tcr = mk_MFCore_tcref($this$$1["fslibCcu@180"], "Choice`7");
  $this$$1.v_suppressed_types = (0, _Types.L)(mk_MFCore_tcref($this$$1["fslibCcu@180"], "Option`1"), (0, _Types.L)(mk_MFCore_tcref($this$$1["fslibCcu@180"], "Ref`1"), (0, _Types.L)(mk_MFCore_tcref($this$$1["fslibCcu@180"], "FSharpTypeFunc"), (0, _Types.L)(mk_MFCore_tcref($this$$1["fslibCcu@180"], "FSharpFunc`2"), (0, _Types.L)(mk_MFCore_tcref($this$$1["fslibCcu@180"], "Unit"), (0, _Types.L)())))));
  $this$$1.v_knownFSharpCoreModules = new Map((0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (nleref) {
      return [(0, _tast.NonLocalEntityRef$$get_LastItemMangledName)(nleref), (0, _tast.ERefNonLocal)(nleref)];
    }, [fslib_MFLanguagePrimitives_nleref, fslib_MFIntrinsicOperators_nleref, fslib_MFIntrinsicFunctions_nleref, fslib_MFHashCompare_nleref, fslib_MFOperators_nleref, fslib_MFOperatorIntrinsics_nleref, fslib_MFOperatorsUnchecked_nleref, fslib_MFOperatorsChecked_nleref, fslib_MFExtraTopLevelOperators_nleref, fslib_MFNullableOperators_nleref, fslib_MFQueryRunExtensions_nleref, fslib_MFQueryRunExtensionsLowPriority_nleref, fslib_MFQueryRunExtensionsHighPriority_nleref, fslib_MFSeqModule_nleref, fslib_MFListModule_nleref, fslib_MFArrayModule_nleref, fslib_MFArray2DModule_nleref, fslib_MFArray3DModule_nleref, fslib_MFArray4DModule_nleref, fslib_MFSetModule_nleref, fslib_MFMapModule_nleref, fslib_MFStringModule_nleref, fslib_MFNativePtrModule_nleref, fslib_MFOptionModule_nleref, fslib_MFRuntimeHelpers_nleref]);
  })));
  $this$$1.v_memoize_file = (0, _illib.MemoizationTable$00602$$$$002Ector$$Z1CDD427E)(function ($arg$$3) {
    return TcGlobals$$mk_doc$$Z721C83C5($this$$1, (0, _lib.Filename$$$fullpath)($this$$1["directoryToResolveRelativePaths@180"], (0, _range.fileOfFileIndex)($arg$$3)));
  }, (0, _FSharp.HashIdentity$$$Structural)());
  let v_and_info;

  const _arg1$$1 = TcGlobals$$mk_rel_sig$$1505($this$$1, $this$$1.v_bool_ty);

  v_and_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicOperators_nleref, (0, _PrettyNaming.CompileOpName)("&"), null, null, (0, _Types.L)(), _arg1$$1);
  let v_addrof_info;
  const _arg1$$2 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), TcGlobals$$mkByrefTy$$ZB53B58E($this$$1, varaTy)];
  v_addrof_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicOperators_nleref, (0, _PrettyNaming.CompileOpName)("~&"), null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$2);
  let v_addrof2_info;
  const _arg1$$3 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), TcGlobals$$mkNativePtrTy$$ZB53B58E($this$$1, varaTy)];
  v_addrof2_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicOperators_nleref, (0, _PrettyNaming.CompileOpName)("~&&"), null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$3);
  let v_and2_info;

  const _arg1$$4 = TcGlobals$$mk_rel_sig$$1505($this$$1, $this$$1.v_bool_ty);

  v_and2_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicOperators_nleref, (0, _PrettyNaming.CompileOpName)("&&"), null, null, (0, _Types.L)(), _arg1$$4);
  let v_or_info;

  const _arg1$$5 = TcGlobals$$mk_rel_sig$$1505($this$$1, $this$$1.v_bool_ty);

  v_or_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicOperators_nleref, "or", null, "Or", (0, _Types.L)(), _arg1$$5);
  let v_or2_info;

  const _arg1$$6 = TcGlobals$$mk_rel_sig$$1505($this$$1, $this$$1.v_bool_ty);

  v_or2_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicOperators_nleref, (0, _PrettyNaming.CompileOpName)("||"), null, null, (0, _Types.L)(), _arg1$$6);
  let v_compare_operator_info;

  const _arg1$$7 = TcGlobals$$mk_compare_sig$$1505($this$$1, varaTy);

  v_compare_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "compare", null, "Compare", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$7);

  const _arg1$$8 = TcGlobals$$mk_rel_sig$$1505($this$$1, varaTy);

  $this$$1.v_equals_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, (0, _PrettyNaming.CompileOpName)("="), null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$8);
  let v_equals_nullable_operator_info;
  const _arg1$$9 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$mkNullableTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)())), $this$$1.v_bool_ty];
  v_equals_nullable_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFNullableOperators_nleref, (0, _PrettyNaming.CompileOpName)("=?"), null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$9);
  let v_nullable_equals_operator_info;
  const _arg1$$10 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkNullableTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)())), $this$$1.v_bool_ty];
  v_nullable_equals_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFNullableOperators_nleref, (0, _PrettyNaming.CompileOpName)("?="), null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$10);
  let v_nullable_equals_nullable_operator_info;
  const _arg1$$11 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkNullableTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$mkNullableTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)())), $this$$1.v_bool_ty];
  v_nullable_equals_nullable_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFNullableOperators_nleref, (0, _PrettyNaming.CompileOpName)("?=?"), null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$11);

  const _arg1$$12 = TcGlobals$$mk_rel_sig$$1505($this$$1, varaTy);

  $this$$1.v_not_equals_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, (0, _PrettyNaming.CompileOpName)("<>"), null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$12);

  const _arg1$$13 = TcGlobals$$mk_rel_sig$$1505($this$$1, varaTy);

  $this$$1.v_less_than_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, (0, _PrettyNaming.CompileOpName)("<"), null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$13);

  const _arg1$$14 = TcGlobals$$mk_rel_sig$$1505($this$$1, varaTy);

  $this$$1.v_less_than_or_equals_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, (0, _PrettyNaming.CompileOpName)("<="), null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$14);

  const _arg1$$15 = TcGlobals$$mk_rel_sig$$1505($this$$1, varaTy);

  $this$$1.v_greater_than_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, (0, _PrettyNaming.CompileOpName)(">"), null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$15);

  const _arg1$$16 = TcGlobals$$mk_rel_sig$$1505($this$$1, varaTy);

  $this$$1.v_greater_than_or_equals_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, (0, _PrettyNaming.CompileOpName)(">="), null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$16);
  let v_enumOfValue_info;
  const _arg1$$17 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), varbTy];
  v_enumOfValue_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLanguagePrimitives_nleref, "EnumOfValue", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)())), _arg1$$17);

  const _arg1$$18 = TcGlobals$$mk_compare_withc_sig$$ZB53B58E($this$$1, varaTy);

  $this$$1.v_generic_comparison_withc_outer_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLanguagePrimitives_nleref, "GenericComparisonWithComparer", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$18);
  let v_generic_hash_withc_tuple2_info;

  const _arg1$$19 = TcGlobals$$mk_hash_withc_sig$$ZB53B58E($this$$1, TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, (0, _Types.L)(varaTy, (0, _Types.L)(varbTy, (0, _Types.L)()))));

  v_generic_hash_withc_tuple2_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "FastHashTuple2", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)())), _arg1$$19);
  let v_generic_hash_withc_tuple3_info;

  const _arg1$$20 = TcGlobals$$mk_hash_withc_sig$$ZB53B58E($this$$1, TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, (0, _Types.L)(varaTy, (0, _Types.L)(varbTy, (0, _Types.L)(varcTy, (0, _Types.L)())))));

  v_generic_hash_withc_tuple3_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "FastHashTuple3", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)()))), _arg1$$20);
  let v_generic_hash_withc_tuple4_info;

  const _arg1$$21 = TcGlobals$$mk_hash_withc_sig$$ZB53B58E($this$$1, TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, (0, _Types.L)(varaTy, (0, _Types.L)(varbTy, (0, _Types.L)(varcTy, (0, _Types.L)(vardTy, (0, _Types.L)()))))));

  v_generic_hash_withc_tuple4_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "FastHashTuple4", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)(vard, (0, _Types.L)())))), _arg1$$21);
  let v_generic_hash_withc_tuple5_info;

  const _arg1$$22 = TcGlobals$$mk_hash_withc_sig$$ZB53B58E($this$$1, TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, (0, _Types.L)(varaTy, (0, _Types.L)(varbTy, (0, _Types.L)(varcTy, (0, _Types.L)(vardTy, (0, _Types.L)(vareTy, (0, _Types.L)())))))));

  v_generic_hash_withc_tuple5_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "FastHashTuple5", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)(vard, (0, _Types.L)(vare, (0, _Types.L)()))))), _arg1$$22);
  let v_generic_equals_withc_tuple2_info;

  const _arg1$$23 = TcGlobals$$mk_equality_withc_sig$$ZB53B58E($this$$1, TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, (0, _Types.L)(varaTy, (0, _Types.L)(varbTy, (0, _Types.L)()))));

  v_generic_equals_withc_tuple2_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "FastEqualsTuple2", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)())), _arg1$$23);
  let v_generic_equals_withc_tuple3_info;

  const _arg1$$24 = TcGlobals$$mk_equality_withc_sig$$ZB53B58E($this$$1, TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, (0, _Types.L)(varaTy, (0, _Types.L)(varbTy, (0, _Types.L)(varcTy, (0, _Types.L)())))));

  v_generic_equals_withc_tuple3_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "FastEqualsTuple3", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)()))), _arg1$$24);
  let v_generic_equals_withc_tuple4_info;

  const _arg1$$25 = TcGlobals$$mk_equality_withc_sig$$ZB53B58E($this$$1, TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, (0, _Types.L)(varaTy, (0, _Types.L)(varbTy, (0, _Types.L)(varcTy, (0, _Types.L)(vardTy, (0, _Types.L)()))))));

  v_generic_equals_withc_tuple4_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "FastEqualsTuple4", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)(vard, (0, _Types.L)())))), _arg1$$25);
  let v_generic_equals_withc_tuple5_info;

  const _arg1$$26 = TcGlobals$$mk_equality_withc_sig$$ZB53B58E($this$$1, TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, (0, _Types.L)(varaTy, (0, _Types.L)(varbTy, (0, _Types.L)(varcTy, (0, _Types.L)(vardTy, (0, _Types.L)(vareTy, (0, _Types.L)())))))));

  v_generic_equals_withc_tuple5_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "FastEqualsTuple5", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)(vard, (0, _Types.L)(vare, (0, _Types.L)()))))), _arg1$$26);
  let v_generic_compare_withc_tuple2_info;

  const _arg1$$27 = TcGlobals$$mk_compare_withc_sig$$ZB53B58E($this$$1, TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, (0, _Types.L)(varaTy, (0, _Types.L)(varbTy, (0, _Types.L)()))));

  v_generic_compare_withc_tuple2_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "FastCompareTuple2", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)())), _arg1$$27);
  let v_generic_compare_withc_tuple3_info;

  const _arg1$$28 = TcGlobals$$mk_compare_withc_sig$$ZB53B58E($this$$1, TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, (0, _Types.L)(varaTy, (0, _Types.L)(varbTy, (0, _Types.L)(varcTy, (0, _Types.L)())))));

  v_generic_compare_withc_tuple3_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "FastCompareTuple3", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)()))), _arg1$$28);
  let v_generic_compare_withc_tuple4_info;

  const _arg1$$29 = TcGlobals$$mk_compare_withc_sig$$ZB53B58E($this$$1, TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, (0, _Types.L)(varaTy, (0, _Types.L)(varbTy, (0, _Types.L)(varcTy, (0, _Types.L)(vardTy, (0, _Types.L)()))))));

  v_generic_compare_withc_tuple4_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "FastCompareTuple4", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)(vard, (0, _Types.L)())))), _arg1$$29);
  let v_generic_compare_withc_tuple5_info;

  const _arg1$$30 = TcGlobals$$mk_compare_withc_sig$$ZB53B58E($this$$1, TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, (0, _Types.L)(varaTy, (0, _Types.L)(varbTy, (0, _Types.L)(varcTy, (0, _Types.L)(vardTy, (0, _Types.L)(vareTy, (0, _Types.L)())))))));

  v_generic_compare_withc_tuple5_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "FastCompareTuple5", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)(vard, (0, _Types.L)(vare, (0, _Types.L)()))))), _arg1$$30);

  const _arg1$$31 = TcGlobals$$mk_rel_sig$$1505($this$$1, varaTy);

  $this$$1.v_generic_equality_er_outer_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLanguagePrimitives_nleref, "GenericEqualityER", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$31);
  const _arg1$$32 = [(0, _Types.L)(), $this$$1.v_IComparer_ty];
  $this$$1.v_get_generic_comparer_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLanguagePrimitives_nleref, "GenericComparer", null, null, (0, _Types.L)(), _arg1$$32);
  const _arg1$$33 = [(0, _Types.L)(), $this$$1.v_IEqualityComparer_ty];
  $this$$1.v_get_generic_er_equality_comparer_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLanguagePrimitives_nleref, "GenericEqualityERComparer", null, null, (0, _Types.L)(), _arg1$$33);
  const _arg1$$34 = [(0, _Types.L)(), $this$$1.v_IEqualityComparer_ty];
  $this$$1.v_get_generic_per_equality_comparer_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLanguagePrimitives_nleref, "GenericEqualityComparer", null, null, (0, _Types.L)(), _arg1$$34);

  const _arg1$$35 = TcGlobals$$mk_equality_withc_sig$$ZB53B58E($this$$1, varaTy);

  $this$$1.v_generic_equality_withc_outer_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLanguagePrimitives_nleref, "GenericEqualityWithComparer", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$35);

  const _arg1$$36 = TcGlobals$$mk_hash_withc_sig$$ZB53B58E($this$$1, varaTy);

  $this$$1.v_generic_hash_withc_outer_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLanguagePrimitives_nleref, "GenericHashWithComparer", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$36);
  let v_generic_equality_er_inner_info;

  const _arg1$$37 = TcGlobals$$mk_rel_sig$$1505($this$$1, varaTy);

  v_generic_equality_er_inner_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "GenericEqualityERIntrinsic", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$37);
  let v_generic_equality_per_inner_info;

  const _arg1$$38 = TcGlobals$$mk_rel_sig$$1505($this$$1, varaTy);

  v_generic_equality_per_inner_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "GenericEqualityIntrinsic", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$38);
  let v_generic_equality_withc_inner_info;

  const _arg1$$39 = TcGlobals$$mk_equality_withc_sig$$ZB53B58E($this$$1, varaTy);

  v_generic_equality_withc_inner_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "GenericEqualityWithComparerIntrinsic", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$39);
  let v_generic_comparison_inner_info;

  const _arg1$$40 = TcGlobals$$mk_compare_sig$$1505($this$$1, varaTy);

  v_generic_comparison_inner_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "GenericComparisonIntrinsic", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$40);
  let v_generic_comparison_withc_inner_info;

  const _arg1$$41 = TcGlobals$$mk_compare_withc_sig$$ZB53B58E($this$$1, varaTy);

  v_generic_comparison_withc_inner_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "GenericComparisonWithComparerIntrinsic", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$41);
  let v_generic_hash_inner_info;

  const _arg1$$42 = TcGlobals$$mk_hash_sig$$1505($this$$1, varaTy);

  v_generic_hash_inner_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "GenericHashIntrinsic", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$42);
  let v_generic_hash_withc_inner_info;

  const _arg1$$43 = TcGlobals$$mk_hash_withc_sig$$ZB53B58E($this$$1, varaTy);

  v_generic_hash_withc_inner_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "GenericHashWithComparerIntrinsic", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$43);
  const _arg1$$44 = [(0, _Types.L)((0, _Types.L)($this$$1.v_unit_ty, (0, _Types.L)()), (0, _Types.L)()), varaTy];
  $this$$1.v_create_instance_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "CreateInstance", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$44);
  const _arg1$$45 = [(0, _Types.L)((0, _Types.L)($this$$1.v_obj_ty, (0, _Types.L)()), (0, _Types.L)()), varaTy];
  $this$$1.v_unbox_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "UnboxGeneric", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$45);
  const _arg1$$46 = [(0, _Types.L)((0, _Types.L)($this$$1.v_obj_ty, (0, _Types.L)()), (0, _Types.L)()), varaTy];
  $this$$1.v_unbox_fast_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "UnboxFast", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$46);
  const _arg1$$47 = [(0, _Types.L)((0, _Types.L)($this$$1.v_obj_ty, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_bool_ty];
  $this$$1.v_istype_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "TypeTestGeneric", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$47);
  const _arg1$$48 = [(0, _Types.L)((0, _Types.L)($this$$1.v_obj_ty, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_bool_ty];
  $this$$1.v_istype_fast_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "TypeTestFast", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$48);
  const _arg1$$49 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_unit_ty];
  $this$$1.v_dispose_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "Dispose", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$49);
  const _arg1$$50 = [(0, _Types.L)((0, _Types.L)($this$$1.v_string_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)())), $this$$1.v_char_ty];
  $this$$1.v_getstring_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "GetString", null, null, (0, _Types.L)(), _arg1$$50);
  let v_reference_equality_inner_info;

  const _arg1$$51 = TcGlobals$$mk_rel_sig$$1505($this$$1, varaTy);

  v_reference_equality_inner_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFHashCompare_nleref, "PhysicalEqualityIntrinsic", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$51);

  const _arg1$$52 = TcGlobals$$mk_binop_ty$$1505($this$$1, varaTy);

  $this$$1.v_bitwise_or_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_BitwiseOr", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$52);

  const _arg1$$53 = TcGlobals$$mk_binop_ty$$1505($this$$1, varaTy);

  $this$$1.v_bitwise_and_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_BitwiseAnd", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$53);

  const _arg1$$54 = TcGlobals$$mk_binop_ty$$1505($this$$1, varaTy);

  $this$$1.v_bitwise_xor_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_ExclusiveOr", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$54);

  const _arg1$$55 = TcGlobals$$mk_unop_ty$$1505($this$$1, varaTy);

  $this$$1.v_bitwise_unary_not_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_LogicalNot", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$55);

  const _arg1$$56 = TcGlobals$$mk_shiftop_ty$$ZB53B58E($this$$1, varaTy);

  $this$$1.v_bitwise_shift_left_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_LeftShift", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$56);

  const _arg1$$57 = TcGlobals$$mk_shiftop_ty$$ZB53B58E($this$$1, varaTy);

  $this$$1.v_bitwise_shift_right_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_RightShift", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$57);

  const _arg1$$58 = TcGlobals$$mk_binop_ty3($this$$1, varaTy, varbTy, varcTy);

  $this$$1.v_unchecked_addition_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_Addition", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)()))), _arg1$$58);

  const _arg1$$59 = TcGlobals$$mk_binop_ty3($this$$1, varaTy, varbTy, varcTy);

  $this$$1.v_unchecked_subtraction_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_Subtraction", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)()))), _arg1$$59);

  const _arg1$$60 = TcGlobals$$mk_binop_ty3($this$$1, varaTy, varbTy, varcTy);

  $this$$1.v_unchecked_multiply_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_Multiply", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)()))), _arg1$$60);

  const _arg1$$61 = TcGlobals$$mk_binop_ty3($this$$1, varaTy, varbTy, varcTy);

  $this$$1.v_unchecked_division_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_Division", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)()))), _arg1$$61);

  const _arg1$$62 = TcGlobals$$mk_binop_ty3($this$$1, varaTy, varbTy, varcTy);

  $this$$1.v_unchecked_modulus_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_Modulus", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)()))), _arg1$$62);

  const _arg1$$63 = TcGlobals$$mk_unop_ty$$1505($this$$1, varaTy);

  $this$$1.v_unchecked_unary_plus_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_UnaryPlus", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$63);

  const _arg1$$64 = TcGlobals$$mk_unop_ty$$1505($this$$1, varaTy);

  $this$$1.v_unchecked_unary_minus_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_UnaryNegation", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$64);

  const _arg1$$65 = TcGlobals$$mk_unop_ty$$1505($this$$1, $this$$1.v_bool_ty);

  $this$$1.v_unchecked_unary_not_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "not", null, "Not", (0, _Types.L)(), _arg1$$65);

  const _arg1$$66 = TcGlobals$$mk_binop_ty3($this$$1, varaTy, varbTy, varcTy);

  $this$$1.v_checked_addition_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "op_Addition", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)()))), _arg1$$66);

  const _arg1$$67 = TcGlobals$$mk_binop_ty3($this$$1, varaTy, varbTy, varcTy);

  $this$$1.v_checked_subtraction_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "op_Subtraction", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)()))), _arg1$$67);

  const _arg1$$68 = TcGlobals$$mk_binop_ty3($this$$1, varaTy, varbTy, varcTy);

  $this$$1.v_checked_multiply_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "op_Multiply", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)()))), _arg1$$68);

  const _arg1$$69 = TcGlobals$$mk_unop_ty$$1505($this$$1, varaTy);

  $this$$1.v_checked_unary_minus_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "op_UnaryNegation", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$69);
  const _arg1$$70 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_byte_ty];
  $this$$1.v_byte_checked_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "byte", null, "ToByte", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$70);
  const _arg1$$71 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_sbyte_ty];
  $this$$1.v_sbyte_checked_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "sbyte", null, "ToSByte", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$71);
  const _arg1$$72 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_int16_ty];
  $this$$1.v_int16_checked_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "int16", null, "ToInt16", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$72);
  const _arg1$$73 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_uint16_ty];
  $this$$1.v_uint16_checked_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "uint16", null, "ToUInt16", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$73);
  const _arg1$$74 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_int_ty];
  $this$$1.v_int_checked_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "int", null, "ToInt", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$74);
  const _arg1$$75 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_int32_ty];
  $this$$1.v_int32_checked_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "int32", null, "ToInt32", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$75);
  const _arg1$$76 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_uint32_ty];
  $this$$1.v_uint32_checked_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "uint32", null, "ToUInt32", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$76);
  const _arg1$$77 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_int64_ty];
  $this$$1.v_int64_checked_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "int64", null, "ToInt64", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$77);
  const _arg1$$78 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_uint64_ty];
  $this$$1.v_uint64_checked_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "uint64", null, "ToUInt64", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$78);
  const _arg1$$79 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_nativeint_ty];
  $this$$1.v_nativeint_checked_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "nativeint", null, "ToIntPtr", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$79);
  const _arg1$$80 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_unativeint_ty];
  $this$$1.v_unativeint_checked_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsChecked_nleref, "unativeint", null, "ToUIntPtr", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$80);
  const _arg1$$81 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_byte_ty];
  $this$$1.v_byte_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "byte", null, "ToByte", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$81);
  const _arg1$$82 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_sbyte_ty];
  $this$$1.v_sbyte_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "sbyte", null, "ToSByte", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$82);
  const _arg1$$83 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_int16_ty];
  $this$$1.v_int16_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "int16", null, "ToInt16", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$83);
  const _arg1$$84 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_uint16_ty];
  $this$$1.v_uint16_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "uint16", null, "ToUInt16", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$84);
  const _arg1$$85 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_int_ty];
  $this$$1.v_int_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "int", null, "ToInt", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$85);
  const _arg1$$86 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_int32_ty];
  $this$$1.v_int32_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "int32", null, "ToInt32", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$86);
  const _arg1$$87 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_uint32_ty];
  $this$$1.v_uint32_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "uint32", null, "ToUInt32", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$87);
  const _arg1$$88 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_int64_ty];
  $this$$1.v_int64_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "int64", null, "ToInt64", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$88);
  const _arg1$$89 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_uint64_ty];
  $this$$1.v_uint64_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "uint64", null, "ToUInt64", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$89);
  const _arg1$$90 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_float32_ty];
  $this$$1.v_float32_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "float32", null, "ToSingle", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$90);
  const _arg1$$91 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_float_ty];
  $this$$1.v_float_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "float", null, "ToDouble", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$91);
  const _arg1$$92 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_nativeint_ty];
  $this$$1.v_nativeint_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "nativeint", null, "ToIntPtr", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$92);
  const _arg1$$93 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_unativeint_ty];
  $this$$1.v_unativeint_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "unativeint", null, "ToUIntPtr", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$93);
  const _arg1$$94 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_char_ty];
  $this$$1.v_char_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "char", null, "ToChar", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$94);
  const _arg1$$95 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), v_enum_ty];
  $this$$1.v_enum_operator_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "enum", null, "ToEnum", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$95);
  const _arg1$$96 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_int_ty];
  $this$$1.v_hash_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "hash", null, "Hash", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$96);
  const _arg1$$97 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_obj_ty];
  $this$$1.v_box_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "box", null, "Box", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$97);
  const _arg1$$98 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_bool_ty];
  $this$$1.v_isnull_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "isNull", null, "IsNull", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$98);
  const _arg1$$99 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_bool_ty];
  $this$$1.v_isnotnull_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "isNotNull", null, "IsNotNull", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$99);
  const _arg1$$100 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkSysNonGenericTy($this$$1, sys, "Exception"), (0, _Types.L)()), (0, _Types.L)()), varaTy];
  $this$$1.v_raise_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "raise", null, "Raise", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$100);
  const _arg1$$101 = [(0, _Types.L)((0, _Types.L)($this$$1.v_string_ty, (0, _Types.L)()), (0, _Types.L)()), varaTy];
  $this$$1.v_failwith_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "failwith", null, "FailWith", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$101);
  const _arg1$$102 = [(0, _Types.L)((0, _Types.L)($this$$1.v_string_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_string_ty, (0, _Types.L)()), (0, _Types.L)())), varaTy];
  $this$$1.v_invalid_arg_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "invalidArg", null, "InvalidArg", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$102);
  const _arg1$$103 = [(0, _Types.L)((0, _Types.L)($this$$1.v_string_ty, (0, _Types.L)()), (0, _Types.L)()), varaTy];
  $this$$1.v_null_arg_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "nullArg", null, "NullArg", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$103);
  const _arg1$$104 = [(0, _Types.L)((0, _Types.L)($this$$1.v_string_ty, (0, _Types.L)()), (0, _Types.L)()), varaTy];
  $this$$1.v_invalid_op_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "invalidOp", null, "InvalidOp", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$104);
  const _arg1$$105 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mk_format4_ty($this$$1, varaTy, $this$$1.v_unit_ty, $this$$1.v_string_ty, $this$$1.v_string_ty), (0, _Types.L)()), (0, _Types.L)()), varaTy];
  $this$$1.v_failwithf_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFExtraTopLevelOperators_nleref, "failwithf", null, "PrintFormatToStringThenFail", (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)())), _arg1$$105);
  const _arg1$$106 = [(0, _Types.L)((0, _Types.L)($this$$1.v_unit_ty, (0, _Types.L)()), (0, _Types.L)()), varaTy];
  $this$$1.v_reraise_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "reraise", null, "Reraise", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$106);
  const _arg1$$107 = [(0, _Types.L)(), $this$$1.v_system_Type_ty];
  $this$$1.v_typeof_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "typeof", null, "TypeOf", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$107);
  const _arg1$$108 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, varaTy, varbTy), (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_system_RuntimeMethodHandle_ty];
  $this$$1.v_methodhandleof_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "methodhandleof", null, "MethodHandleOf", (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)())), _arg1$$108);
  let v_sizeof_info;
  const _arg1$$109 = [(0, _Types.L)(), $this$$1.v_int_ty];
  v_sizeof_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "sizeof", null, "SizeOf", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$109);
  let v_unchecked_defaultof_info;
  const _arg1$$110 = [(0, _Types.L)(), varaTy];
  v_unchecked_defaultof_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorsUnchecked_nleref, "defaultof", null, "DefaultOf", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$110);
  const _arg1$$111 = [(0, _Types.L)(), $this$$1.v_system_Type_ty];
  $this$$1.v_typedefof_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "typedefof", null, "TypeDefOf", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$111);
  let v_range_op_info;
  const _arg1$$112 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)())), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varaTy)];
  v_range_op_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_Range", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$112);
  let v_range_step_op_info;
  const _arg1$$113 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(varbTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()))), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varaTy)];
  v_range_step_op_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "op_RangeStep", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)())), _arg1$$113);
  let v_range_int32_op_info;
  const _arg1$$114 = [(0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)()))), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, $this$$1.v_int_ty)];
  v_range_int32_op_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperatorIntrinsics_nleref, "RangeInt32", null, null, (0, _Types.L)(), _arg1$$114);
  const _arg1$$115 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 1, varaTy), (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_int_ty];
  $this$$1.v_array_length_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFArrayModule_nleref, "length", null, "Length", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$115);
  const _arg1$$116 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 1, varaTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)())), varaTy];
  $this$$1.v_array_get_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "GetArray", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$116);
  const _arg1$$117 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 2, varaTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)()))), varaTy];
  $this$$1.v_array2D_get_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "GetArray2D", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$117);
  const _arg1$$118 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 3, varaTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)())))), varaTy];
  $this$$1.v_array3D_get_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "GetArray3D", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$118);
  const _arg1$$119 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 4, varaTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)()))))), varaTy];
  $this$$1.v_array4D_get_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "GetArray4D", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$119);
  const _arg1$$120 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 1, varaTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()))), $this$$1.v_unit_ty];
  $this$$1.v_array_set_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "SetArray", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$120);
  const _arg1$$121 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 2, varaTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)())))), $this$$1.v_unit_ty];
  $this$$1.v_array2D_set_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "SetArray2D", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$121);
  const _arg1$$122 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 3, varaTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()))))), $this$$1.v_unit_ty];
  $this$$1.v_array3D_set_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "SetArray3D", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$122);
  const _arg1$$123 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 4, varaTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)())))))), $this$$1.v_unit_ty];
  $this$$1.v_array4D_set_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "SetArray4D", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$123);
  let v_nativeptr_tobyref_info;
  const _arg1$$124 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkNativePtrTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)()), TcGlobals$$mkByrefTy$$ZB53B58E($this$$1, varaTy)];
  v_nativeptr_tobyref_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFNativePtrModule_nleref, "toByRef", null, "ToByRefInlined", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$124);
  const _arg1$$125 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, varaTy, varbTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)())), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varcTy)];
  $this$$1.v_seq_collect_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFSeqModule_nleref, "collect", null, "Collect", (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)()))), _arg1$$125);
  const _arg1$$126 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, $this$$1.v_unit_ty, TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varbTy)), (0, _Types.L)()), (0, _Types.L)()), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varbTy)];
  $this$$1.v_seq_delay_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFSeqModule_nleref, "delay", null, "Delay", (0, _Types.L)(varb, (0, _Types.L)()), _arg1$$126);
  const _arg1$$127 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varbTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varbTy), (0, _Types.L)()), (0, _Types.L)())), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varbTy)];
  $this$$1.v_seq_append_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFSeqModule_nleref, "append", null, "Append", (0, _Types.L)(varb, (0, _Types.L)()), _arg1$$127);
  const _arg1$$128 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, varaTy, varbTy), (0, _Types.L)()), (0, _Types.L)())), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varcTy)];
  $this$$1.v_seq_using_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFRuntimeHelpers_nleref, "EnumerateUsing", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)()))), _arg1$$128);
  const _arg1$$129 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, $this$$1.v_unit_ty, $this$$1.v_bool_ty), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varbTy), (0, _Types.L)()), (0, _Types.L)())), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varbTy)];
  $this$$1.v_seq_generated_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFRuntimeHelpers_nleref, "EnumerateWhile", null, null, (0, _Types.L)(varb, (0, _Types.L)()), _arg1$$129);
  const _arg1$$130 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varbTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, $this$$1.v_unit_ty, $this$$1.v_unit_ty), (0, _Types.L)()), (0, _Types.L)())), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varbTy)];
  $this$$1.v_seq_finally_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFRuntimeHelpers_nleref, "EnumerateThenFinally", null, null, (0, _Types.L)(varb, (0, _Types.L)()), _arg1$$130);
  const _arg1$$131 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, $this$$1.v_unit_ty, varaTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, varaTy, $this$$1.v_bool_ty), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, varaTy, varbTy), (0, _Types.L)()), (0, _Types.L)()))), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varbTy)];
  $this$$1.v_seq_of_functions_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFRuntimeHelpers_nleref, "EnumerateFromFunctions", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)())), _arg1$$131);
  const _arg1$$132 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, varaTy, $this$$1.v_unit_ty), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, varaTy, $this$$1.v_unit_ty), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, TcGlobals$$op_MinusMinusGreater($this$$1, $this$$1.v_obj_ty, TcGlobals$$op_MinusMinusGreater($this$$1, varbTy, $this$$1.v_unit_ty)), varaTy), (0, _Types.L)()), (0, _Types.L)()))), new _tast.TType(1, "TType_app", $this$$1.v_fslib_IEvent2_tcr, (0, _Types.L)(varaTy, (0, _Types.L)(varbTy, (0, _Types.L)())))];
  $this$$1.v_create_event_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFRuntimeHelpers_nleref, "CreateEvent", null, null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)())), _arg1$$132);
  const _arg1$$133 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varbTy), (0, _Types.L)()), (0, _Types.L)()), TcGlobals$$mkArrayType($this$$1, 1, varbTy)];
  $this$$1.v_seq_to_array_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFSeqModule_nleref, "toArray", null, "ToArray", (0, _Types.L)(varb, (0, _Types.L)()), _arg1$$133);
  const _arg1$$134 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varbTy), (0, _Types.L)()), (0, _Types.L)()), TcGlobals$$mkListTy$$ZB53B58E($this$$1, varbTy)];
  $this$$1.v_seq_to_list_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFSeqModule_nleref, "toList", null, "ToList", (0, _Types.L)(varb, (0, _Types.L)()), _arg1$$134);
  const _arg1$$135 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, varaTy, varbTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)())), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varbTy)];
  $this$$1.v_seq_map_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFSeqModule_nleref, "map", null, "Map", (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)())), _arg1$$135);
  const _arg1$$136 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varaTy)];
  $this$$1.v_seq_singleton_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFSeqModule_nleref, "singleton", null, "Singleton", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$136);
  const _arg1$$137 = [(0, _Types.L)(), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varaTy)];
  $this$$1.v_seq_empty_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFSeqModule_nleref, "empty", null, "Empty", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$137);
  const _arg1$$138 = [(0, _Types.L)((0, _Types.L)($this$$1.v_string_ty, (0, _Types.L)()), (0, _Types.L)()), TcGlobals$$mkPrintfFormatTy($this$$1, varaTy, varbTy, varcTy, vardTy, vareTy)];
  $this$$1.v_new_format_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFCore_nleref, ".ctor", "PrintfFormat`5", null, (0, _Types.L)(vara, (0, _Types.L)(varb, (0, _Types.L)(varc, (0, _Types.L)(vard, (0, _Types.L)(vare, (0, _Types.L)()))))), _arg1$$138);
  let v_sprintf_info;
  const _arg1$$139 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mk_format4_ty($this$$1, varaTy, $this$$1.v_unit_ty, $this$$1.v_string_ty, $this$$1.v_string_ty), (0, _Types.L)()), (0, _Types.L)()), varaTy];
  v_sprintf_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFExtraTopLevelOperators_nleref, "sprintf", null, "PrintFormatToStringThen", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$139);
  const _arg1$$140 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkLazyTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(), (0, _Types.L)())), varaTy];
  $this$$1.v_lazy_force_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLazyExtensions_nleref, "Force", "Lazy`1", null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$140);
  const _arg1$$141 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, $this$$1.v_unit_ty, varaTy), (0, _Types.L)()), (0, _Types.L)()), TcGlobals$$mkLazyTy$$ZB53B58E($this$$1, varaTy)];
  $this$$1.v_lazy_create_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLazyExtensions_nleref, "Create", "Lazy`1", null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$141);
  const _arg1$$142 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)()), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varaTy)];
  $this$$1.v_seq_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFOperators_nleref, "seq", null, "CreateSequence", (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$142);
  let v_refcell_info;
  const _arg1$$143 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkRefCellTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(), (0, _Types.L)())), varaTy];
  v_refcell_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFCore_nleref, "ref", "FSharpRef`1", null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$143);
  let v_splice_expr_info;
  const _arg1$$144 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkQuotedExprTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)()), varaTy];
  v_splice_expr_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFExtraTopLevelOperators_nleref, "op_Splice", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$144);
  let v_splice_raw_expr_info;
  const _arg1$$145 = [(0, _Types.L)((0, _Types.L)(mkRawQuotedExprTy, (0, _Types.L)()), (0, _Types.L)()), varaTy];
  v_splice_raw_expr_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFExtraTopLevelOperators_nleref, "op_SpliceUntyped", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$145);
  const _arg1$$146 = [(0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_int_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_bool_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)($this$$1.v_byte_ty, (0, _Types.L)()), (0, _Types.L)()))))), $this$$1.v_decimal_ty];
  $this$$1.v_new_decimal_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "MakeDecimal", null, null, (0, _Types.L)(), _arg1$$146);
  const _arg1$$147 = [(0, _Types.L)((0, _Types.L)($this$$1.v_system_Type_ty, (0, _Types.L)(TcGlobals$$mkListTy$$ZB53B58E($this$$1, $this$$1.v_system_Type_ty), (0, _Types.L)(TcGlobals$$mkListTy$$ZB53B58E($this$$1, mkRawQuotedExprTy), (0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 1, $this$$1.v_byte_ty), (0, _Types.L)())))), (0, _Types.L)()), mkRawQuotedExprTy];
  $this$$1.v_deserialize_quoted_FSharp_20_plus_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFQuotations_nleref, "Deserialize", "Expr", null, (0, _Types.L)(), _arg1$$147);
  const _arg1$$148 = [(0, _Types.L)((0, _Types.L)($this$$1.v_system_Type_ty, (0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 1, $this$$1.v_system_Type_ty), (0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 1, $this$$1.v_system_Type_ty), (0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 1, mkRawQuotedExprTy), (0, _Types.L)(TcGlobals$$mkArrayType($this$$1, 1, $this$$1.v_byte_ty), (0, _Types.L)()))))), (0, _Types.L)()), mkRawQuotedExprTy];
  $this$$1.v_deserialize_quoted_FSharp_40_plus_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFQuotations_nleref, "Deserialize40", "Expr", null, (0, _Types.L)(), _arg1$$148);
  const _arg1$$149 = [(0, _Types.L)((0, _Types.L)(mkRawQuotedExprTy, (0, _Types.L)()), (0, _Types.L)()), TcGlobals$$mkQuotedExprTy$$ZB53B58E($this$$1, varaTy)];
  $this$$1.v_cast_quotation_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFQuotations_nleref, "Cast", "Expr", null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$149);
  const _arg1$$150 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), mkRawQuotedExprTy];
  $this$$1.v_lift_value_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFQuotations_nleref, "Value", "Expr", null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$150);
  const _arg1$$151 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)($this$$1.v_string_ty, (0, _Types.L)())), (0, _Types.L)()), mkRawQuotedExprTy];
  $this$$1.v_lift_value_with_name_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFQuotations_nleref, "ValueWithName", "Expr", null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$151);
  const _arg1$$152 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)(TcGlobals$$mkQuotedExprTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)())), (0, _Types.L)()), TcGlobals$$mkQuotedExprTy$$ZB53B58E($this$$1, varaTy)];
  $this$$1.v_lift_value_with_defn_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFQuotations_nleref, "WithValue", "Expr", null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$152);
  let v_query_value_info;
  const _arg1$$153 = [(0, _Types.L)(), mkQueryBuilderTy];
  v_query_value_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFExtraTopLevelOperators_nleref, "query", null, null, (0, _Types.L)(), _arg1$$153);
  let v_query_run_value_info;
  const _arg1$$154 = [(0, _Types.L)((0, _Types.L)(mkQueryBuilderTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$mkQuotedExprTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)())), varaTy];
  v_query_run_value_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFQueryRunExtensionsLowPriority_nleref, "Run", "QueryBuilder", null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$154);
  let v_query_run_enumerable_info;
  const _arg1$$155 = [(0, _Types.L)((0, _Types.L)(mkQueryBuilderTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$mkQuotedExprTy$$ZB53B58E($this$$1, TcGlobals$$mkQuerySourceTy($this$$1, varaTy, mkNonGenericTy($this$$1.v_tcref_System_Collections_IEnumerable))), (0, _Types.L)()), (0, _Types.L)())), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varaTy)];
  v_query_run_enumerable_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFQueryRunExtensionsHighPriority_nleref, "Run", "QueryBuilder", null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$155);
  let v_query_for_value_info;
  const _arg1$$156 = [(0, _Types.L)((0, _Types.L)(mkQueryBuilderTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$mkQuerySourceTy($this$$1, varaTy, vardTy), (0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, varaTy, TcGlobals$$mkQuerySourceTy($this$$1, varbTy, vareTy)), (0, _Types.L)())), (0, _Types.L)())), TcGlobals$$mkQuerySourceTy($this$$1, varbTy, vardTy)];
  v_query_for_value_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLinq_nleref, "For", "QueryBuilder", null, (0, _Types.L)(vara, (0, _Types.L)(vard, (0, _Types.L)(varb, (0, _Types.L)(vare, (0, _Types.L)())))), _arg1$$156);
  let v_query_select_value_info;
  const _arg1$$157 = [(0, _Types.L)((0, _Types.L)(mkQueryBuilderTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$mkQuerySourceTy($this$$1, varaTy, vareTy), (0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, varaTy, varbTy), (0, _Types.L)())), (0, _Types.L)())), TcGlobals$$mkQuerySourceTy($this$$1, varbTy, vareTy)];
  v_query_select_value_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLinq_nleref, "Select", "QueryBuilder", null, (0, _Types.L)(vara, (0, _Types.L)(vare, (0, _Types.L)(varb, (0, _Types.L)()))), _arg1$$157);
  let v_query_yield_value_info;
  const _arg1$$158 = [(0, _Types.L)((0, _Types.L)(mkQueryBuilderTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)())), TcGlobals$$mkQuerySourceTy($this$$1, varaTy, vareTy)];
  v_query_yield_value_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLinq_nleref, "Yield", "QueryBuilder", null, (0, _Types.L)(vara, (0, _Types.L)(vare, (0, _Types.L)())), _arg1$$158);
  let v_query_yield_from_value_info;
  const _arg1$$159 = [(0, _Types.L)((0, _Types.L)(mkQueryBuilderTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$mkQuerySourceTy($this$$1, varaTy, vareTy), (0, _Types.L)()), (0, _Types.L)())), TcGlobals$$mkQuerySourceTy($this$$1, varaTy, vareTy)];
  v_query_yield_from_value_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLinq_nleref, "YieldFrom", "QueryBuilder", null, (0, _Types.L)(vara, (0, _Types.L)(vare, (0, _Types.L)())), _arg1$$159);
  let v_query_source_info;
  const _arg1$$160 = [(0, _Types.L)((0, _Types.L)(mkQueryBuilderTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)())), TcGlobals$$mkQuerySourceTy($this$$1, varaTy, mkNonGenericTy($this$$1.v_tcref_System_Collections_IEnumerable))];
  v_query_source_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLinq_nleref, "Source", "QueryBuilder", null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$160);
  const _arg1$$161 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkQuerySourceTy($this$$1, varaTy, vareTy), (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(), (0, _Types.L)())), TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varaTy)];
  $this$$1.v_query_source_as_enum_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLinq_nleref, "get_Source", "QuerySource`2", null, (0, _Types.L)(vara, (0, _Types.L)(vare, (0, _Types.L)())), _arg1$$161);
  const _arg1$$162 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkSeqTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)()), TcGlobals$$mkQuerySourceTy($this$$1, varaTy, vareTy)];
  $this$$1.v_new_query_source_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLinq_nleref, ".ctor", "QuerySource`2", null, (0, _Types.L)(vara, (0, _Types.L)(vare, (0, _Types.L)())), _arg1$$162);
  let v_query_where_value_info;
  const _arg1$$163 = [(0, _Types.L)((0, _Types.L)(mkQueryBuilderTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(TcGlobals$$mkQuerySourceTy($this$$1, varaTy, vareTy), (0, _Types.L)(TcGlobals$$op_MinusMinusGreater($this$$1, varaTy, $this$$1.v_bool_ty), (0, _Types.L)())), (0, _Types.L)())), TcGlobals$$mkQuerySourceTy($this$$1, varaTy, vareTy)];
  v_query_where_value_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLinq_nleref, "Where", "QueryBuilder", null, (0, _Types.L)(vara, (0, _Types.L)(vare, (0, _Types.L)())), _arg1$$163);
  let v_query_zero_value_info;
  const _arg1$$164 = [(0, _Types.L)((0, _Types.L)(mkQueryBuilderTy, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(), (0, _Types.L)())), TcGlobals$$mkQuerySourceTy($this$$1, varaTy, vareTy)];
  v_query_zero_value_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLinq_nleref, "Zero", "QueryBuilder", null, (0, _Types.L)(vara, (0, _Types.L)(vare, (0, _Types.L)())), _arg1$$164);
  const _arg1$$165 = [(0, _Types.L)((0, _Types.L)($this$$1.v_unit_ty, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_unit_ty];
  $this$$1.v_fail_init_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "FailInit", null, null, (0, _Types.L)(), _arg1$$165);
  const _arg1$$166 = [(0, _Types.L)((0, _Types.L)($this$$1.v_unit_ty, (0, _Types.L)()), (0, _Types.L)()), $this$$1.v_unit_ty];
  $this$$1.v_fail_static_init_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "FailStaticInit", null, null, (0, _Types.L)(), _arg1$$166);
  const _arg1$$167 = [(0, _Types.L)((0, _Types.L)(varaTy, (0, _Types.L)()), (0, _Types.L)()), varaTy];
  $this$$1.v_check_this_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFIntrinsicFunctions_nleref, "CheckThis", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$167);
  const _arg1$$168 = [(0, _Types.L)((0, _Types.L)(TcGlobals$$mkQuotedExprTy$$ZB53B58E($this$$1, varaTy), (0, _Types.L)()), (0, _Types.L)()), TcGlobals$$mkLinqExpressionTy$$ZB53B58E($this$$1, varaTy)];
  $this$$1.v_quote_to_linq_lambda_info = TcGlobals$$makeIntrinsicValRef$$72DFE8B8($this$$1, fslib_MFLinqRuntimeHelpersQuotationConverter_nleref, "QuotationToLambdaExpression", null, null, (0, _Types.L)(vara, (0, _Types.L)()), _arg1$$168);
  $this$$1.tref_DebuggableAttribute = TcGlobals$$findSysILTypeRef$$Z721C83C5($this$$1, "System.Diagnostics.DebuggableAttribute");
  $this$$1.tref_CompilerGeneratedAttribute = TcGlobals$$findSysILTypeRef$$Z721C83C5($this$$1, "System.Runtime.CompilerServices.CompilerGeneratedAttribute");
  $this$$1.generatedAttribsCache = (0, _Types.L)();
  $this$$1.debuggerBrowsableNeverAttributeCache = null;
  const betterTyconEntries = (0, _Array.map)(function mapping(tupledArg) {
    const ty$$22 = mkNonGenericTy(tupledArg[1]);
    return [tupledArg[0], TcGlobals$$findSysTyconRef($this$$1, sys, tupledArg[0]), function (_arg1$$169) {
      return ty$$22;
    }];
  }, [["Int32", $this$$1.v_int_tcr], ["IntPtr", $this$$1.v_nativeint_tcr], ["UIntPtr", $this$$1.v_unativeint_tcr], ["Int16", $this$$1.v_int16_tcr], ["Int64", $this$$1.v_int64_tcr], ["UInt16", $this$$1.v_uint16_tcr], ["UInt32", $this$$1.v_uint32_tcr], ["UInt64", $this$$1.v_uint64_tcr], ["SByte", $this$$1.v_sbyte_tcr], ["Decimal", $this$$1.v_decimal_tcr], ["Byte", $this$$1.v_byte_tcr], ["Boolean", $this$$1.v_bool_tcr], ["String", v_string_tcr], ["Object", v_obj_tcr], ["Exception", $this$$1.v_exn_tcr], ["Char", $this$$1.v_char_tcr], ["Double", $this$$1.v_float_tcr], ["Single", $this$$1.v_float32_tcr]], Array);
  $this$$1.decompileTyconEntries = [["FSharpFunc`2", $this$$1.v_fastFunc_tcr, function (tinst) {
    return TcGlobals$$mkFunTy($this$$1, (0, _List.item)(0, tinst), (0, _List.item)(1, tinst));
  }], ["Tuple`2", $this$$1.v_ref_tuple2_tcr, function (l$$12) {
    return TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, l$$12);
  }], ["Tuple`3", $this$$1.v_ref_tuple3_tcr, function (l$$13) {
    return TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, l$$13);
  }], ["Tuple`4", $this$$1.v_ref_tuple4_tcr, function (l$$14) {
    return TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, l$$14);
  }], ["Tuple`5", $this$$1.v_ref_tuple5_tcr, function (l$$15) {
    return TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, l$$15);
  }], ["Tuple`6", $this$$1.v_ref_tuple6_tcr, function (l$$16) {
    return TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, l$$16);
  }], ["Tuple`7", $this$$1.v_ref_tuple7_tcr, function (l$$17) {
    return TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoRef, l$$17);
  }], ["Tuple`8", $this$$1.v_ref_tuple8_tcr, function (l$$18) {
    return TcGlobals$$decodeTupleTyIfPossible($this$$1, $this$$1.v_ref_tuple8_tcr, _tast.tupInfoRef, l$$18);
  }], ["ValueTuple`2", $this$$1.v_struct_tuple2_tcr, function (l$$19) {
    return TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoStruct, l$$19);
  }], ["ValueTuple`3", $this$$1.v_struct_tuple3_tcr, function (l$$20) {
    return TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoStruct, l$$20);
  }], ["ValueTuple`4", $this$$1.v_struct_tuple4_tcr, function (l$$21) {
    return TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoStruct, l$$21);
  }], ["ValueTuple`5", $this$$1.v_struct_tuple5_tcr, function (l$$22) {
    return TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoStruct, l$$22);
  }], ["ValueTuple`6", $this$$1.v_struct_tuple6_tcr, function (l$$23) {
    return TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoStruct, l$$23);
  }], ["ValueTuple`7", $this$$1.v_struct_tuple7_tcr, function (l$$24) {
    return TcGlobals$$decodeTupleTy($this$$1, _tast.tupInfoStruct, l$$24);
  }], ["ValueTuple`8", $this$$1.v_struct_tuple8_tcr, function (l$$25) {
    return TcGlobals$$decodeTupleTyIfPossible($this$$1, $this$$1.v_struct_tuple8_tcr, _tast.tupInfoStruct, l$$25);
  }]];
  $this$$1.betterEntries = (0, _Array.append)(betterTyconEntries, $this$$1.decompileTyconEntries, Array);
  $this$$1.decompileTypeDict = null;
  $this$$1.betterTypeDict1 = null;
  $this$$1.betterTypeDict2 = null;
  $this$$1["refcell_tcr_canon@"] = $this$$1.v_refcell_tcr_canon;
  $this$$1["option_tcr_canon@"] = mk_MFCore_tcref($this$$1["fslibCcu@180"], "Option`1");
  $this$$1["set_tcr_canon@"] = mk_MFCollections_tcref($this$$1["fslibCcu@180"], "Set`1");
  $this$$1["map_tcr_canon@"] = mk_MFCollections_tcref($this$$1["fslibCcu@180"], "Map`2");
  $this$$1["refcell_tcr_nice@"] = v_refcell_tcr_nice;
  $this$$1["array_tcr_nice@"] = $this$$1.v_il_arr_tcr_map[0];
  $this$$1["seq_base_tcr@"] = mk_MFCompilerServices_tcref($this$$1["fslibCcu@180"], "GeneratedSequenceBase`1");
  $this$$1["byrefkind_In_tcr@"] = (0, _tast.mkNonLocalTyconRef)(fslib_MFByRefKinds_nleref, "In");
  $this$$1["byrefkind_Out_tcr@"] = (0, _tast.mkNonLocalTyconRef)(fslib_MFByRefKinds_nleref, "Out");
  $this$$1["byrefkind_InOut_tcr@"] = (0, _tast.mkNonLocalTyconRef)(fslib_MFByRefKinds_nleref, "InOut");
  $this$$1["measureproduct_tcr@"] = mk_MFCompilerServices_tcref($this$$1["fslibCcu@180"], "MeasureProduct`2");
  $this$$1["measureinverse_tcr@"] = mk_MFCompilerServices_tcref($this$$1["fslibCcu@180"], "MeasureInverse`1");
  $this$$1["measureone_tcr@"] = mk_MFCompilerServices_tcref($this$$1["fslibCcu@180"], "MeasureOne");
  $this$$1["nativeint_ty@"] = v_nativeint_ty;
  $this$$1["unativeint_ty@"] = v_unativeint_ty;
  $this$$1["int32_ty@"] = v_int32_ty;
  $this$$1["int16_ty@"] = v_int16_ty;
  $this$$1["int64_ty@"] = v_int64_ty;
  $this$$1["uint16_ty@"] = v_uint16_ty;
  $this$$1["uint32_ty@"] = v_uint32_ty;
  $this$$1["uint64_ty@"] = v_uint64_ty;
  $this$$1["sbyte_ty@"] = v_sbyte_ty;
  $this$$1["exn_ty@"] = mkNonGenericTy($this$$1.v_exn_tcr);
  $this$$1["float_ty@"] = v_float_ty;
  $this$$1["float32_ty@"] = v_float32_ty;
  $this$$1["system_Array_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "Array");
  $this$$1["system_Object_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "Object");
  $this$$1["system_IDisposable_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "IDisposable");
  $this$$1["system_RuntimeHelpers_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sysCompilerServices, "RuntimeHelpers");
  $this$$1["system_Value_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "ValueType");
  $this$$1["system_Delegate_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "Delegate");
  $this$$1["system_MulticastDelegate_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "MulticastDelegate");
  $this$$1["system_Enum_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "Enum");
  $this$$1["system_Exception_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "Exception");
  $this$$1["system_String_typ@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "String");
  $this$$1["system_String_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "String");
  $this$$1["system_Int32_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "Int32");
  $this$$1["system_TypedReference_tcref@"] = TcGlobals$$tryFindSysTyconRef($this$$1, sys, "TypedReference");
  $this$$1["system_ArgIterator_tcref@"] = TcGlobals$$tryFindSysTyconRef($this$$1, sys, "ArgIterator");
  $this$$1["system_RuntimeArgumentHandle_tcref@"] = TcGlobals$$tryFindSysTyconRef($this$$1, sys, "RuntimeArgumentHandle");
  $this$$1["system_SByte_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "SByte");
  $this$$1["system_Decimal_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "Decimal");
  $this$$1["system_Int16_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "Int16");
  $this$$1["system_Int32_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "Int32");
  $this$$1["system_Int64_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "Int64");
  $this$$1["system_IntPtr_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "IntPtr");
  $this$$1["system_Bool_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "Boolean");
  $this$$1["system_Byte_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "Byte");
  $this$$1["system_UInt16_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "UInt16");
  $this$$1["system_Char_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "Char");
  $this$$1["system_UInt32_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "UInt32");
  $this$$1["system_UInt64_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "UInt64");
  $this$$1["system_UIntPtr_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "UIntPtr");
  $this$$1["system_Single_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "Single");
  $this$$1["system_Double_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "Double");
  $this$$1["system_RuntimeTypeHandle_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "RuntimeTypeHandle");
  $this$$1["system_MarshalByRefObject_tcref@"] = TcGlobals$$tryFindSysTyconRef($this$$1, sys, "MarshalByRefObject");
  $this$$1["system_MarshalByRefObject_ty@"] = TcGlobals$$tryMkSysNonGenericTy($this$$1, sys, "MarshalByRefObject");
  $this$$1["system_Array_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "Array");
  $this$$1["system_Object_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "Object");
  $this$$1["system_Void_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "Void");
  $this$$1["system_IndexOutOfRangeException_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "IndexOutOfRangeException");
  $this$$1["system_Nullable_tcref@"] = $this$$1.v_nullable_tcr;
  $this$$1["system_GenericIComparable_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "IComparable`1");
  $this$$1["system_GenericIEquatable_tcref@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "IEquatable`1");
  $this$$1["mk_IComparable_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sys, "IComparable");
  $this$$1["system_LinqExpression_tcref@"] = $this$$1.v_linqExpression_tcr;
  $this$$1["mk_IStructuralComparable_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sysCollections, "IStructuralComparable");
  $this$$1["mk_IStructuralEquatable_ty@"] = TcGlobals$$mkSysNonGenericTy($this$$1, sysCollections, "IStructuralEquatable");
  $this$$1["tcref_System_Collections_IComparer@"] = TcGlobals$$findSysTyconRef($this$$1, sysCollections, "IComparer");
  $this$$1["tcref_System_Collections_IEqualityComparer@"] = TcGlobals$$findSysTyconRef($this$$1, sysCollections, "IEqualityComparer");
  $this$$1["tcref_System_Collections_Generic_IEqualityComparer@"] = TcGlobals$$findSysTyconRef($this$$1, sysGenerics, "IEqualityComparer`1");
  $this$$1["tcref_System_Collections_Generic_Dictionary@"] = TcGlobals$$findSysTyconRef($this$$1, sysGenerics, "Dictionary`2");
  $this$$1["tcref_System_Collections_Generic_IDictionary@"] = TcGlobals$$findSysTyconRef($this$$1, sysGenerics, "IDictionary`2");
  $this$$1["tcref_System_IComparable@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "IComparable");
  $this$$1["tcref_System_IStructuralComparable@"] = TcGlobals$$findSysTyconRef($this$$1, sysCollections, "IStructuralComparable");
  $this$$1["tcref_System_IStructuralEquatable@"] = TcGlobals$$findSysTyconRef($this$$1, sysCollections, "IStructuralEquatable");
  $this$$1["tcref_System_IDisposable@"] = TcGlobals$$findSysTyconRef($this$$1, sys, "IDisposable");
  $this$$1["tcref_LanguagePrimitives@"] = mk_MFCore_tcref($this$$1["fslibCcu@180"], "LanguagePrimitives");
  $this$$1["tcref_System_Collections_Generic_List@"] = TcGlobals$$findSysTyconRef($this$$1, sysGenerics, "List`1");
  $this$$1["tcref_System_Collections_Generic_IList@"] = TcGlobals$$findSysTyconRef($this$$1, sysGenerics, "IList`1");
  $this$$1["tcref_System_Collections_Generic_IReadOnlyList@"] = TcGlobals$$findSysTyconRef($this$$1, sysGenerics, "IReadOnlyList`1");
  $this$$1["tcref_System_Collections_Generic_ICollection@"] = TcGlobals$$findSysTyconRef($this$$1, sysGenerics, "ICollection`1");
  $this$$1["tcref_System_Collections_Generic_IReadOnlyCollection@"] = TcGlobals$$findSysTyconRef($this$$1, sysGenerics, "IReadOnlyCollection`1");
  $this$$1["iltyp_TypedReference@"] = (0, _Option.defaultArg)(TcGlobals$$tryFindSysILTypeRef$$Z721C83C5($this$$1, "System.TypedReference"), null, _il.mkILNonGenericValueTy);
  $this$$1["iltyp_StreamingContext@"] = (0, _Option.defaultArg)(TcGlobals$$tryFindSysILTypeRef$$Z721C83C5($this$$1, "System.Runtime.Serialization.StreamingContext"), null, _il.mkILNonGenericValueTy);
  $this$$1["iltyp_SerializationInfo@"] = (0, _Option.defaultArg)(TcGlobals$$tryFindSysILTypeRef$$Z721C83C5($this$$1, "System.Runtime.Serialization.SerializationInfo"), null, _il.mkILNonGenericBoxedTy);
  $this$$1["iltyp_Missing@"] = (0, _il.mkILNonGenericBoxedTy)(TcGlobals$$findSysILTypeRef$$Z721C83C5($this$$1, "System.Reflection.Missing"));
  $this$$1["iltyp_AsyncCallback@"] = (0, _il.mkILNonGenericBoxedTy)(TcGlobals$$findSysILTypeRef$$Z721C83C5($this$$1, "System.AsyncCallback"));
  $this$$1["iltyp_IAsyncResult@"] = (0, _il.mkILNonGenericBoxedTy)(TcGlobals$$findSysILTypeRef$$Z721C83C5($this$$1, "System.IAsyncResult"));
  $this$$1["iltyp_IComparable@"] = (0, _il.mkILNonGenericBoxedTy)(TcGlobals$$findSysILTypeRef$$Z721C83C5($this$$1, "System.IComparable"));
  $this$$1["iltyp_Exception@"] = (0, _il.mkILNonGenericBoxedTy)(TcGlobals$$findSysILTypeRef$$Z721C83C5($this$$1, "System.Exception"));
  $this$$1["iltyp_ValueType@"] = (0, _il.mkILNonGenericBoxedTy)(TcGlobals$$findSysILTypeRef$$Z721C83C5($this$$1, "System.ValueType"));
  $this$$1["iltyp_RuntimeFieldHandle@"] = (0, _il.mkILNonGenericValueTy)(TcGlobals$$findSysILTypeRef$$Z721C83C5($this$$1, "System.RuntimeFieldHandle"));
  $this$$1["iltyp_RuntimeMethodHandle@"] = (0, _il.mkILNonGenericValueTy)(TcGlobals$$findSysILTypeRef$$Z721C83C5($this$$1, "System.RuntimeMethodHandle"));
  $this$$1["iltyp_RuntimeTypeHandle@"] = (0, _il.mkILNonGenericValueTy)(TcGlobals$$findSysILTypeRef$$Z721C83C5($this$$1, "System.RuntimeTypeHandle"));
  $this$$1["attrib_AttributeUsageAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.AttributeUsageAttribute");
  $this$$1["attrib_ParamArrayAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.ParamArrayAttribute");
  $this$$1["attrib_IDispatchConstantAttribute@"] = TcGlobals$$tryFindSysAttrib$$Z721C83C5($this$$1, "System.Runtime.CompilerServices.IDispatchConstantAttribute");
  $this$$1["attrib_IUnknownConstantAttribute@"] = TcGlobals$$tryFindSysAttrib$$Z721C83C5($this$$1, "System.Runtime.CompilerServices.IUnknownConstantAttribute");
  $this$$1["attrib_IsByRefLikeAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.CompilerServices.IsByRefLikeAttribute");
  $this$$1["attrib_IsReadOnlyAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.CompilerServices.IsReadOnlyAttribute");
  $this$$1["attrib_SystemObsolete@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.ObsoleteAttribute");
  $this$$1["attrib_DllImportAttribute@"] = TcGlobals$$tryFindSysAttrib$$Z721C83C5($this$$1, "System.Runtime.InteropServices.DllImportAttribute");
  $this$$1["attrib_StructLayoutAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.InteropServices.StructLayoutAttribute");
  $this$$1["attrib_TypeForwardedToAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.CompilerServices.TypeForwardedToAttribute");
  $this$$1["attrib_ComVisibleAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.InteropServices.ComVisibleAttribute");
  $this$$1["attrib_ComImportAttribute@"] = TcGlobals$$tryFindSysAttrib$$Z721C83C5($this$$1, "System.Runtime.InteropServices.ComImportAttribute");
  $this$$1["attrib_FieldOffsetAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.InteropServices.FieldOffsetAttribute");
  $this$$1["attrib_MarshalAsAttribute@"] = TcGlobals$$tryFindSysAttrib$$Z721C83C5($this$$1, "System.Runtime.InteropServices.MarshalAsAttribute");
  $this$$1["attrib_InAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.InteropServices.InAttribute");
  $this$$1["attrib_OutAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.InteropServices.OutAttribute");
  $this$$1["attrib_OptionalAttribute@"] = TcGlobals$$tryFindSysAttrib$$Z721C83C5($this$$1, "System.Runtime.InteropServices.OptionalAttribute");
  $this$$1["attrib_DefaultParameterValueAttribute@"] = TcGlobals$$tryFindSysAttrib$$Z721C83C5($this$$1, "System.Runtime.InteropServices.DefaultParameterValueAttribute");
  $this$$1["attrib_ThreadStaticAttribute@"] = TcGlobals$$tryFindSysAttrib$$Z721C83C5($this$$1, "System.ThreadStaticAttribute");
  $this$$1["attrib_SpecialNameAttribute@"] = TcGlobals$$tryFindSysAttrib$$Z721C83C5($this$$1, "System.Runtime.CompilerServices.SpecialNameAttribute");
  $this$$1["attrib_VolatileFieldAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "VolatileFieldAttribute");
  $this$$1["attrib_ContextStaticAttribute@"] = TcGlobals$$tryFindSysAttrib$$Z721C83C5($this$$1, "System.ContextStaticAttribute");
  $this$$1["attrib_FlagsAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.FlagsAttribute");
  $this$$1["attrib_DefaultMemberAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Reflection.DefaultMemberAttribute");
  $this$$1["attrib_DebuggerDisplayAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Diagnostics.DebuggerDisplayAttribute");
  $this$$1["attrib_DebuggerTypeProxyAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Diagnostics.DebuggerTypeProxyAttribute");
  $this$$1["attrib_PreserveSigAttribute@"] = TcGlobals$$tryFindSysAttrib$$Z721C83C5($this$$1, "System.Runtime.InteropServices.PreserveSigAttribute");
  $this$$1["attrib_MethodImplAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.CompilerServices.MethodImplAttribute");
  $this$$1["attrib_ExtensionAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.CompilerServices.ExtensionAttribute");
  $this$$1["attrib_CallerLineNumberAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.CompilerServices.CallerLineNumberAttribute");
  $this$$1["attrib_CallerFilePathAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.CompilerServices.CallerFilePathAttribute");
  $this$$1["attrib_CallerMemberNameAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.CompilerServices.CallerMemberNameAttribute");
  $this$$1["attrib_ProjectionParameterAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "ProjectionParameterAttribute");
  $this$$1["attrib_CustomOperationAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "CustomOperationAttribute");
  $this$$1["attrib_NonSerializedAttribute@"] = TcGlobals$$tryFindSysAttrib$$Z721C83C5($this$$1, "System.NonSerializedAttribute");
  $this$$1["attrib_AutoSerializableAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "AutoSerializableAttribute");
  $this$$1["attrib_RequireQualifiedAccessAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "RequireQualifiedAccessAttribute");
  $this$$1["attrib_EntryPointAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "EntryPointAttribute");
  $this$$1["attrib_DefaultAugmentationAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "DefaultAugmentationAttribute");
  $this$$1["attrib_CompilerMessageAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "CompilerMessageAttribute");
  $this$$1["attrib_ExperimentalAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "ExperimentalAttribute");
  $this$$1["attrib_UnverifiableAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "UnverifiableAttribute");
  $this$$1["attrib_LiteralAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "LiteralAttribute");
  $this$$1["attrib_ConditionalAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Diagnostics.ConditionalAttribute");
  $this$$1["attrib_OptionalArgumentAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "OptionalArgumentAttribute");
  $this$$1["attrib_RequiresExplicitTypeArgumentsAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "RequiresExplicitTypeArgumentsAttribute");
  $this$$1["attrib_DefaultValueAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "DefaultValueAttribute");
  $this$$1["attrib_ClassAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "ClassAttribute");
  $this$$1["attrib_InterfaceAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "InterfaceAttribute");
  $this$$1["attrib_StructAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "StructAttribute");
  $this$$1["attrib_ReflectedDefinitionAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "ReflectedDefinitionAttribute");
  $this$$1["attrib_CompiledNameAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "CompiledNameAttribute");
  $this$$1["attrib_AutoOpenAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "AutoOpenAttribute");
  $this$$1["attrib_InternalsVisibleToAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Runtime.CompilerServices.InternalsVisibleToAttribute");
  $this$$1["attrib_CompilationRepresentationAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "CompilationRepresentationAttribute");
  $this$$1["attrib_CompilationArgumentCountsAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "CompilationArgumentCountsAttribute");
  $this$$1["attrib_CompilationMappingAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "CompilationMappingAttribute");
  $this$$1["attrib_CLIEventAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "CLIEventAttribute");
  $this$$1["attrib_CLIMutableAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "CLIMutableAttribute");
  $this$$1["attrib_AllowNullLiteralAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "AllowNullLiteralAttribute");
  $this$$1["attrib_NoEqualityAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "NoEqualityAttribute");
  $this$$1["attrib_NoComparisonAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "NoComparisonAttribute");
  $this$$1["attrib_CustomEqualityAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "CustomEqualityAttribute");
  $this$$1["attrib_CustomComparisonAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "CustomComparisonAttribute");
  $this$$1["attrib_EqualityConditionalOnAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "EqualityConditionalOnAttribute");
  $this$$1["attrib_ComparisonConditionalOnAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "ComparisonConditionalOnAttribute");
  $this$$1["attrib_ReferenceEqualityAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "ReferenceEqualityAttribute");
  $this$$1["attrib_StructuralEqualityAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "StructuralEqualityAttribute");
  $this$$1["attrib_StructuralComparisonAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "StructuralComparisonAttribute");
  $this$$1["attrib_SealedAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "SealedAttribute");
  $this$$1["attrib_AbstractClassAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "AbstractClassAttribute");
  $this$$1["attrib_GeneralizableValueAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "GeneralizableValueAttribute");
  $this$$1["attrib_MeasureAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "MeasureAttribute");
  $this$$1["attrib_MeasureableAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "MeasureAnnotatedAbbreviationAttribute");
  $this$$1["attrib_NoDynamicInvocationAttribute@"] = TcGlobals$$mk_MFCore_attrib$$Z721C83C5($this$$1, "NoDynamicInvocationAttribute");
  $this$$1["attrib_SecurityAttribute@"] = TcGlobals$$tryFindSysAttrib$$Z721C83C5($this$$1, "System.Security.Permissions.SecurityAttribute");
  $this$$1["attrib_SecurityCriticalAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Security.SecurityCriticalAttribute");
  $this$$1["attrib_SecuritySafeCriticalAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.Security.SecuritySafeCriticalAttribute");
  $this$$1["attrib_ComponentModelEditorBrowsableAttribute@"] = TcGlobals$$findSysAttrib$$Z721C83C5($this$$1, "System.ComponentModel.EditorBrowsableAttribute");
  $this$$1["seq_vref@"] = ValRefForIntrinsic($this$$1.v_seq_info);
  $this$$1["fsharpref_vref@"] = ValRefForIntrinsic(v_refcell_info);
  $this$$1["and_vref@"] = ValRefForIntrinsic(v_and_info);
  $this$$1["and2_vref@"] = ValRefForIntrinsic(v_and2_info);
  $this$$1["addrof_vref@"] = ValRefForIntrinsic(v_addrof_info);
  $this$$1["addrof2_vref@"] = ValRefForIntrinsic(v_addrof2_info);
  $this$$1["or_vref@"] = ValRefForIntrinsic(v_or_info);
  $this$$1["splice_expr_vref@"] = ValRefForIntrinsic(v_splice_expr_info);
  $this$$1["splice_raw_expr_vref@"] = ValRefForIntrinsic(v_splice_raw_expr_info);
  $this$$1["or2_vref@"] = ValRefForIntrinsic(v_or2_info);
  $this$$1["generic_equality_er_inner_vref@"] = ValRefForIntrinsic(v_generic_equality_er_inner_info);
  $this$$1["generic_equality_per_inner_vref@"] = ValRefForIntrinsic(v_generic_equality_per_inner_info);
  $this$$1["generic_equality_withc_inner_vref@"] = ValRefForIntrinsic(v_generic_equality_withc_inner_info);
  $this$$1["generic_comparison_inner_vref@"] = ValRefForIntrinsic(v_generic_comparison_inner_info);
  $this$$1["generic_comparison_withc_inner_vref@"] = ValRefForIntrinsic(v_generic_comparison_withc_inner_info);
  $this$$1["generic_hash_inner_vref@"] = ValRefForIntrinsic(v_generic_hash_inner_info);
  $this$$1["generic_hash_withc_inner_vref@"] = ValRefForIntrinsic(v_generic_hash_withc_inner_info);
  $this$$1["reference_equality_inner_vref@"] = ValRefForIntrinsic(v_reference_equality_inner_info);
  $this$$1["bitwise_or_vref@"] = ValRefForIntrinsic($this$$1.v_bitwise_or_info);
  $this$$1["bitwise_and_vref@"] = ValRefForIntrinsic($this$$1.v_bitwise_and_info);
  $this$$1["bitwise_xor_vref@"] = ValRefForIntrinsic($this$$1.v_bitwise_xor_info);
  $this$$1["bitwise_unary_not_vref@"] = ValRefForIntrinsic($this$$1.v_bitwise_unary_not_info);
  $this$$1["bitwise_shift_left_vref@"] = ValRefForIntrinsic($this$$1.v_bitwise_shift_left_info);
  $this$$1["bitwise_shift_right_vref@"] = ValRefForIntrinsic($this$$1.v_bitwise_shift_right_info);
  $this$$1["unchecked_addition_vref@"] = ValRefForIntrinsic($this$$1.v_unchecked_addition_info);
  $this$$1["unchecked_unary_plus_vref@"] = ValRefForIntrinsic($this$$1.v_unchecked_unary_plus_info);
  $this$$1["unchecked_unary_minus_vref@"] = ValRefForIntrinsic($this$$1.v_unchecked_unary_minus_info);
  $this$$1["unchecked_unary_not_vref@"] = ValRefForIntrinsic($this$$1.v_unchecked_unary_not_info);
  $this$$1["unchecked_subtraction_vref@"] = ValRefForIntrinsic($this$$1.v_unchecked_subtraction_info);
  $this$$1["unchecked_multiply_vref@"] = ValRefForIntrinsic($this$$1.v_unchecked_multiply_info);
  $this$$1["unchecked_defaultof_vref@"] = ValRefForIntrinsic(v_unchecked_defaultof_info);
  $this$$1["compare_operator_vref@"] = ValRefForIntrinsic(v_compare_operator_info);
  $this$$1["equals_operator_vref@"] = ValRefForIntrinsic($this$$1.v_equals_operator_info);
  $this$$1["equals_nullable_operator_vref@"] = ValRefForIntrinsic(v_equals_nullable_operator_info);
  $this$$1["nullable_equals_nullable_operator_vref@"] = ValRefForIntrinsic(v_nullable_equals_nullable_operator_info);
  $this$$1["nullable_equals_operator_vref@"] = ValRefForIntrinsic(v_nullable_equals_operator_info);
  $this$$1["not_equals_operator_vref@"] = ValRefForIntrinsic($this$$1.v_not_equals_operator_info);
  $this$$1["less_than_operator_vref@"] = ValRefForIntrinsic($this$$1.v_less_than_operator_info);
  $this$$1["less_than_or_equals_operator_vref@"] = ValRefForIntrinsic($this$$1.v_less_than_or_equals_operator_info);
  $this$$1["greater_than_operator_vref@"] = ValRefForIntrinsic($this$$1.v_greater_than_operator_info);
  $this$$1["greater_than_or_equals_operator_vref@"] = ValRefForIntrinsic($this$$1.v_greater_than_or_equals_operator_info);
  $this$$1["raise_vref@"] = ValRefForIntrinsic($this$$1.v_raise_info);
  $this$$1["failwith_vref@"] = ValRefForIntrinsic($this$$1.v_failwith_info);
  $this$$1["invalid_arg_vref@"] = ValRefForIntrinsic($this$$1.v_invalid_arg_info);
  $this$$1["null_arg_vref@"] = ValRefForIntrinsic($this$$1.v_null_arg_info);
  $this$$1["invalid_op_vref@"] = ValRefForIntrinsic($this$$1.v_invalid_op_info);
  $this$$1["failwithf_vref@"] = ValRefForIntrinsic($this$$1.v_failwithf_info);
  $this$$1["reraise_vref@"] = ValRefForIntrinsic($this$$1.v_reraise_info);
  $this$$1["methodhandleof_vref@"] = ValRefForIntrinsic($this$$1.v_methodhandleof_info);
  $this$$1["typeof_vref@"] = ValRefForIntrinsic($this$$1.v_typeof_info);
  $this$$1["sizeof_vref@"] = ValRefForIntrinsic(v_sizeof_info);
  $this$$1["typedefof_vref@"] = ValRefForIntrinsic($this$$1.v_typedefof_info);
  $this$$1["enum_vref@"] = ValRefForIntrinsic($this$$1.v_enum_operator_info);
  $this$$1["enumOfValue_vref@"] = ValRefForIntrinsic(v_enumOfValue_info);
  $this$$1["range_op_vref@"] = ValRefForIntrinsic(v_range_op_info);
  $this$$1["range_step_op_vref@"] = ValRefForIntrinsic(v_range_step_op_info);
  $this$$1["range_int32_op_vref@"] = ValRefForIntrinsic(v_range_int32_op_info);
  $this$$1["array_get_vref@"] = ValRefForIntrinsic($this$$1.v_array_get_info);
  $this$$1["array2D_get_vref@"] = ValRefForIntrinsic($this$$1.v_array2D_get_info);
  $this$$1["array3D_get_vref@"] = ValRefForIntrinsic($this$$1.v_array3D_get_info);
  $this$$1["array4D_get_vref@"] = ValRefForIntrinsic($this$$1.v_array4D_get_info);
  $this$$1["seq_singleton_vref@"] = ValRefForIntrinsic($this$$1.v_seq_singleton_info);
  $this$$1["seq_collect_vref@"] = ValRefForIntrinsic($this$$1.v_seq_collect_info);
  $this$$1["nativeptr_tobyref_vref@"] = ValRefForIntrinsic(v_nativeptr_tobyref_info);
  $this$$1["seq_using_vref@"] = ValRefForIntrinsic($this$$1.v_seq_using_info);
  $this$$1["seq_delay_vref@"] = ValRefForIntrinsic($this$$1.v_seq_delay_info);
  $this$$1["seq_append_vref@"] = ValRefForIntrinsic($this$$1.v_seq_append_info);
  $this$$1["seq_generated_vref@"] = ValRefForIntrinsic($this$$1.v_seq_generated_info);
  $this$$1["seq_finally_vref@"] = ValRefForIntrinsic($this$$1.v_seq_finally_info);
  $this$$1["seq_of_functions_vref@"] = ValRefForIntrinsic($this$$1.v_seq_of_functions_info);
  $this$$1["seq_map_vref@"] = ValRefForIntrinsic($this$$1.v_seq_map_info);
  $this$$1["seq_empty_vref@"] = ValRefForIntrinsic($this$$1.v_seq_empty_info);
  $this$$1["new_format_vref@"] = ValRefForIntrinsic($this$$1.v_new_format_info);
  $this$$1["sprintf_vref@"] = ValRefForIntrinsic(v_sprintf_info);
  $this$$1["unbox_vref@"] = ValRefForIntrinsic($this$$1.v_unbox_info);
  $this$$1["unbox_fast_vref@"] = ValRefForIntrinsic($this$$1.v_unbox_fast_info);
  $this$$1["istype_vref@"] = ValRefForIntrinsic($this$$1.v_istype_info);
  $this$$1["istype_fast_vref@"] = ValRefForIntrinsic($this$$1.v_istype_fast_info);
  $this$$1["query_source_vref@"] = ValRefForIntrinsic(v_query_source_info);
  $this$$1["query_value_vref@"] = ValRefForIntrinsic(v_query_value_info);
  $this$$1["query_run_value_vref@"] = ValRefForIntrinsic(v_query_run_value_info);
  $this$$1["query_run_enumerable_vref@"] = ValRefForIntrinsic(v_query_run_enumerable_info);
  $this$$1["query_for_vref@"] = ValRefForIntrinsic(v_query_for_value_info);
  $this$$1["query_yield_vref@"] = ValRefForIntrinsic(v_query_yield_value_info);
  $this$$1["query_yield_from_vref@"] = ValRefForIntrinsic(v_query_yield_from_value_info);
  $this$$1["query_select_vref@"] = ValRefForIntrinsic(v_query_select_value_info);
  $this$$1["query_where_vref@"] = ValRefForIntrinsic(v_query_where_value_info);
  $this$$1["query_zero_vref@"] = ValRefForIntrinsic(v_query_zero_value_info);
  $this$$1["generic_hash_withc_tuple2_vref@"] = ValRefForIntrinsic(v_generic_hash_withc_tuple2_info);
  $this$$1["generic_hash_withc_tuple3_vref@"] = ValRefForIntrinsic(v_generic_hash_withc_tuple3_info);
  $this$$1["generic_hash_withc_tuple4_vref@"] = ValRefForIntrinsic(v_generic_hash_withc_tuple4_info);
  $this$$1["generic_hash_withc_tuple5_vref@"] = ValRefForIntrinsic(v_generic_hash_withc_tuple5_info);
  $this$$1["generic_equals_withc_tuple2_vref@"] = ValRefForIntrinsic(v_generic_equals_withc_tuple2_info);
  $this$$1["generic_equals_withc_tuple3_vref@"] = ValRefForIntrinsic(v_generic_equals_withc_tuple3_info);
  $this$$1["generic_equals_withc_tuple4_vref@"] = ValRefForIntrinsic(v_generic_equals_withc_tuple4_info);
  $this$$1["generic_equals_withc_tuple5_vref@"] = ValRefForIntrinsic(v_generic_equals_withc_tuple5_info);
  $this$$1["generic_compare_withc_tuple2_vref@"] = ValRefForIntrinsic(v_generic_compare_withc_tuple2_info);
  $this$$1["generic_compare_withc_tuple3_vref@"] = ValRefForIntrinsic(v_generic_compare_withc_tuple3_info);
  $this$$1["generic_compare_withc_tuple4_vref@"] = ValRefForIntrinsic(v_generic_compare_withc_tuple4_info);
  $this$$1["generic_compare_withc_tuple5_vref@"] = ValRefForIntrinsic(v_generic_compare_withc_tuple5_info);
  $this$$1["generic_equality_withc_outer_vref@"] = ValRefForIntrinsic($this$$1.v_generic_equality_withc_outer_info);
  $this$$1["ilxPubCloEnv@"] = (0, _EraseClosures.newIlxPubCloEnv)($this$$1["ilg@180"], function (mdef) {
    return TcGlobals$$addMethodGeneratedAttrs$$3AF987BF($this$$1, mdef);
  }, function (fdef) {
    return TcGlobals$$addFieldGeneratedAttrs$$58456522($this$$1, fdef);
  }, function (fdef$$1) {
    return TcGlobals$$addFieldNeverAttrs$$58456522($this$$1, fdef$$1);
  });
});
exports.TcGlobals = TcGlobals;

function TcGlobals$$$$002Ector$$36FDBAF1(compilingFslib, ilg, fslibCcu, directoryToResolveRelativePaths, mlCompatibility, isInteractive, tryFindSysTypeCcu, emitDebugInfoInQuotations, noDebugData) {
  return this != null ? TcGlobals.call(this, compilingFslib, ilg, fslibCcu, directoryToResolveRelativePaths, mlCompatibility, isInteractive, tryFindSysTypeCcu, emitDebugInfoInQuotations, noDebugData) : new TcGlobals(compilingFslib, ilg, fslibCcu, directoryToResolveRelativePaths, mlCompatibility, isInteractive, tryFindSysTypeCcu, emitDebugInfoInQuotations, noDebugData);
}

TcGlobals.prototype.toString = function () {
  return "<TcGlobals>";
};

function TcGlobals$$get_ilg(__) {
  return __["ilg@180"];
}

function TcGlobals$$get_knownIntrinsics(__$$1) {
  return __$$1.v_knownIntrinsics;
}

function TcGlobals$$get_knownFSharpCoreModules(__$$2) {
  return __$$2.v_knownFSharpCoreModules;
}

function TcGlobals$$get_compilingFslib(__$$3) {
  return __$$3["compilingFslib@180"];
}

function TcGlobals$$get_mlCompatibility(__$$4) {
  return __$$4["mlCompatibility@181"];
}

function TcGlobals$$get_emitDebugInfoInQuotations(__$$5) {
  return __$$5["emitDebugInfoInQuotations@184"];
}

function TcGlobals$$get_directoryToResolveRelativePaths(__$$6) {
  return __$$6["directoryToResolveRelativePaths@180"];
}

function TcGlobals$$unionCaseRefEq(__$$7, x$$6, y) {
  return (0, _tast.primUnionCaseRefEq)(__$$7["compilingFslib@180"], __$$7["fslibCcu@180"], x$$6, y);
}

function TcGlobals$$valRefEq(__$$8, x$$7, y$$1) {
  return (0, _tast.primValRefEq)(__$$8["compilingFslib@180"], __$$8["fslibCcu@180"], x$$7, y$$1);
}

function TcGlobals$$get_fslibCcu(__$$9) {
  return __$$9["fslibCcu@180"];
}

function TcGlobals$$get_refcell_tcr_canon(__$$10) {
  return __$$10["refcell_tcr_canon@"];
}

function TcGlobals$$get_option_tcr_canon(__$$11) {
  return __$$11["option_tcr_canon@"];
}

function TcGlobals$$get_list_tcr_canon(__$$12) {
  return __$$12.v_list_tcr_canon;
}

function TcGlobals$$get_set_tcr_canon(__$$13) {
  return __$$13["set_tcr_canon@"];
}

function TcGlobals$$get_map_tcr_canon(__$$14) {
  return __$$14["map_tcr_canon@"];
}

function TcGlobals$$get_lazy_tcr_canon(__$$15) {
  return __$$15.lazy_tcr;
}

function TcGlobals$$get_refcell_tcr_nice(__$$16) {
  return __$$16["refcell_tcr_nice@"];
}

function TcGlobals$$get_array_tcr_nice(__$$17) {
  return __$$17["array_tcr_nice@"];
}

function TcGlobals$$get_option_tcr_nice(__$$18) {
  return __$$18.v_option_tcr_nice;
}

function TcGlobals$$get_list_tcr_nice(__$$19) {
  return __$$19.v_list_tcr_nice;
}

function TcGlobals$$get_lazy_tcr_nice(__$$20) {
  return __$$20.v_lazy_tcr_nice;
}

function TcGlobals$$get_format_tcr(__$$21) {
  return __$$21.v_format_tcr;
}

function TcGlobals$$get_expr_tcr(__$$22) {
  return __$$22.v_expr_tcr;
}

function TcGlobals$$get_raw_expr_tcr(__$$23) {
  return __$$23.v_raw_expr_tcr;
}

function TcGlobals$$get_nativeint_tcr(__$$24) {
  return __$$24.v_nativeint_tcr;
}

function TcGlobals$$get_unativeint_tcr(__$$25) {
  return __$$25.v_unativeint_tcr;
}

function TcGlobals$$get_int_tcr(__$$26) {
  return __$$26.v_int_tcr;
}

function TcGlobals$$get_int32_tcr(__$$27) {
  return __$$27.v_int32_tcr;
}

function TcGlobals$$get_int16_tcr(__$$28) {
  return __$$28.v_int16_tcr;
}

function TcGlobals$$get_int64_tcr(__$$29) {
  return __$$29.v_int64_tcr;
}

function TcGlobals$$get_uint16_tcr(__$$30) {
  return __$$30.v_uint16_tcr;
}

function TcGlobals$$get_uint32_tcr(__$$31) {
  return __$$31.v_uint32_tcr;
}

function TcGlobals$$get_uint64_tcr(__$$32) {
  return __$$32.v_uint64_tcr;
}

function TcGlobals$$get_sbyte_tcr(__$$33) {
  return __$$33.v_sbyte_tcr;
}

function TcGlobals$$get_decimal_tcr(__$$34) {
  return __$$34.v_decimal_tcr;
}

function TcGlobals$$get_date_tcr(__$$35) {
  return __$$35.v_date_tcr;
}

function TcGlobals$$get_pdecimal_tcr(__$$36) {
  return __$$36.v_pdecimal_tcr;
}

function TcGlobals$$get_byte_tcr(__$$37) {
  return __$$37.v_byte_tcr;
}

function TcGlobals$$get_bool_tcr(__$$38) {
  return __$$38.v_bool_tcr;
}

function TcGlobals$$get_unit_tcr_canon(__$$39) {
  return __$$39.v_unit_tcr_canon;
}

function TcGlobals$$get_unit_tcr_nice(__$$40) {
  return __$$40.v_unit_tcr_nice;
}

function TcGlobals$$get_exn_tcr(__$$41) {
  return __$$41.v_exn_tcr;
}

function TcGlobals$$get_char_tcr(__$$42) {
  return __$$42.v_char_tcr;
}

function TcGlobals$$get_float_tcr(__$$43) {
  return __$$43.v_float_tcr;
}

function TcGlobals$$get_float32_tcr(__$$44) {
  return __$$44.v_float32_tcr;
}

function TcGlobals$$get_pfloat_tcr(__$$45) {
  return __$$45.v_pfloat_tcr;
}

function TcGlobals$$get_pfloat32_tcr(__$$46) {
  return __$$46.v_pfloat32_tcr;
}

function TcGlobals$$get_pint_tcr(__$$47) {
  return __$$47.v_pint_tcr;
}

function TcGlobals$$get_pint8_tcr(__$$48) {
  return __$$48.v_pint8_tcr;
}

function TcGlobals$$get_pint16_tcr(__$$49) {
  return __$$49.v_pint16_tcr;
}

function TcGlobals$$get_pint64_tcr(__$$50) {
  return __$$50.v_pint64_tcr;
}

function TcGlobals$$get_byref_tcr(__$$51) {
  return __$$51.v_byref_tcr;
}

function TcGlobals$$get_byref2_tcr(__$$52) {
  return __$$52.v_byref2_tcr;
}

function TcGlobals$$get_outref_tcr(__$$53) {
  return __$$53.v_outref_tcr;
}

function TcGlobals$$get_inref_tcr(__$$54) {
  return __$$54.v_inref_tcr;
}

function TcGlobals$$get_nativeptr_tcr(__$$55) {
  return __$$55.v_nativeptr_tcr;
}

function TcGlobals$$get_voidptr_tcr(__$$56) {
  return __$$56.v_voidptr_tcr;
}

function TcGlobals$$get_ilsigptr_tcr(__$$57) {
  return __$$57.v_ilsigptr_tcr;
}

function TcGlobals$$get_fastFunc_tcr(__$$58) {
  return __$$58.v_fastFunc_tcr;
}

function TcGlobals$$get_tcref_IQueryable(__$$59) {
  return __$$59.v_tcref_IQueryable;
}

function TcGlobals$$get_tcref_IObservable(__$$60) {
  return __$$60.v_tcref_IObservable;
}

function TcGlobals$$get_tcref_IObserver(__$$61) {
  return __$$61.v_tcref_IObserver;
}

function TcGlobals$$get_fslib_IEvent2_tcr(__$$62) {
  return __$$62.v_fslib_IEvent2_tcr;
}

function TcGlobals$$get_fslib_IDelegateEvent_tcr(__$$63) {
  return __$$63.v_fslib_IDelegateEvent_tcr;
}

function TcGlobals$$get_seq_tcr(__$$64) {
  return __$$64.v_seq_tcr;
}

function TcGlobals$$get_seq_base_tcr(__$$65) {
  return __$$65["seq_base_tcr@"];
}

function TcGlobals$$get_byrefkind_In_tcr(__$$66) {
  return __$$66["byrefkind_In_tcr@"];
}

function TcGlobals$$get_byrefkind_Out_tcr(__$$67) {
  return __$$67["byrefkind_Out_tcr@"];
}

function TcGlobals$$get_byrefkind_InOut_tcr(__$$68) {
  return __$$68["byrefkind_InOut_tcr@"];
}

function TcGlobals$$get_measureproduct_tcr(__$$69) {
  return __$$69["measureproduct_tcr@"];
}

function TcGlobals$$get_measureinverse_tcr(__$$70) {
  return __$$70["measureinverse_tcr@"];
}

function TcGlobals$$get_measureone_tcr(__$$71) {
  return __$$71["measureone_tcr@"];
}

function TcGlobals$$get_il_arr_tcr_map(__$$72) {
  return __$$72.v_il_arr_tcr_map;
}

function TcGlobals$$get_ref_tuple1_tcr(__$$73) {
  return __$$73.v_ref_tuple1_tcr;
}

function TcGlobals$$get_ref_tuple2_tcr(__$$74) {
  return __$$74.v_ref_tuple2_tcr;
}

function TcGlobals$$get_ref_tuple3_tcr(__$$75) {
  return __$$75.v_ref_tuple3_tcr;
}

function TcGlobals$$get_ref_tuple4_tcr(__$$76) {
  return __$$76.v_ref_tuple4_tcr;
}

function TcGlobals$$get_ref_tuple5_tcr(__$$77) {
  return __$$77.v_ref_tuple5_tcr;
}

function TcGlobals$$get_ref_tuple6_tcr(__$$78) {
  return __$$78.v_ref_tuple6_tcr;
}

function TcGlobals$$get_ref_tuple7_tcr(__$$79) {
  return __$$79.v_ref_tuple7_tcr;
}

function TcGlobals$$get_ref_tuple8_tcr(__$$80) {
  return __$$80.v_ref_tuple8_tcr;
}

function TcGlobals$$get_struct_tuple1_tcr(__$$81) {
  return __$$81.v_struct_tuple1_tcr;
}

function TcGlobals$$get_struct_tuple2_tcr(__$$82) {
  return __$$82.v_struct_tuple2_tcr;
}

function TcGlobals$$get_struct_tuple3_tcr(__$$83) {
  return __$$83.v_struct_tuple3_tcr;
}

function TcGlobals$$get_struct_tuple4_tcr(__$$84) {
  return __$$84.v_struct_tuple4_tcr;
}

function TcGlobals$$get_struct_tuple5_tcr(__$$85) {
  return __$$85.v_struct_tuple5_tcr;
}

function TcGlobals$$get_struct_tuple6_tcr(__$$86) {
  return __$$86.v_struct_tuple6_tcr;
}

function TcGlobals$$get_struct_tuple7_tcr(__$$87) {
  return __$$87.v_struct_tuple7_tcr;
}

function TcGlobals$$get_struct_tuple8_tcr(__$$88) {
  return __$$88.v_struct_tuple8_tcr;
}

function TcGlobals$$get_choice2_tcr(__$$89) {
  return __$$89.v_choice2_tcr;
}

function TcGlobals$$get_choice3_tcr(__$$90) {
  return __$$90.v_choice3_tcr;
}

function TcGlobals$$get_choice4_tcr(__$$91) {
  return __$$91.v_choice4_tcr;
}

function TcGlobals$$get_choice5_tcr(__$$92) {
  return __$$92.v_choice5_tcr;
}

function TcGlobals$$get_choice6_tcr(__$$93) {
  return __$$93.v_choice6_tcr;
}

function TcGlobals$$get_choice7_tcr(__$$94) {
  return __$$94.v_choice7_tcr;
}

function TcGlobals$$get_nativeint_ty(__$$95) {
  return __$$95["nativeint_ty@"];
}

function TcGlobals$$get_unativeint_ty(__$$96) {
  return __$$96["unativeint_ty@"];
}

function TcGlobals$$get_int32_ty(__$$97) {
  return __$$97["int32_ty@"];
}

function TcGlobals$$get_int16_ty(__$$98) {
  return __$$98["int16_ty@"];
}

function TcGlobals$$get_int64_ty(__$$99) {
  return __$$99["int64_ty@"];
}

function TcGlobals$$get_uint16_ty(__$$100) {
  return __$$100["uint16_ty@"];
}

function TcGlobals$$get_uint32_ty(__$$101) {
  return __$$101["uint32_ty@"];
}

function TcGlobals$$get_uint64_ty(__$$102) {
  return __$$102["uint64_ty@"];
}

function TcGlobals$$get_sbyte_ty(__$$103) {
  return __$$103["sbyte_ty@"];
}

function TcGlobals$$get_byte_ty(__$$104) {
  return __$$104.v_byte_ty;
}

function TcGlobals$$get_bool_ty(__$$105) {
  return __$$105.v_bool_ty;
}

function TcGlobals$$get_int_ty(__$$106) {
  return __$$106.v_int_ty;
}

function TcGlobals$$get_string_ty(__$$107) {
  return __$$107.v_string_ty;
}

function TcGlobals$$get_unit_ty(__$$108) {
  return __$$108.v_unit_ty;
}

function TcGlobals$$get_obj_ty(__$$109) {
  return __$$109.v_obj_ty;
}

function TcGlobals$$get_char_ty(__$$110) {
  return __$$110.v_char_ty;
}

function TcGlobals$$get_decimal_ty(__$$111) {
  return __$$111.v_decimal_ty;
}

function TcGlobals$$get_exn_ty(__$$112) {
  return __$$112["exn_ty@"];
}

function TcGlobals$$get_float_ty(__$$113) {
  return __$$113["float_ty@"];
}

function TcGlobals$$get_float32_ty(__$$114) {
  return __$$114["float32_ty@"];
}

function TcGlobals$$memoize_file$$Z524259A4(__$$115, x$$8) {
  return (0, _illib.MemoizationTable$00602$$Apply$$2B595)(__$$115.v_memoize_file, x$$8);
}

function TcGlobals$$get_system_Array_ty(__$$116) {
  return __$$116["system_Array_ty@"];
}

function TcGlobals$$get_system_Object_ty(__$$117) {
  return __$$117["system_Object_ty@"];
}

function TcGlobals$$get_system_IDisposable_ty(__$$118) {
  return __$$118["system_IDisposable_ty@"];
}

function TcGlobals$$get_system_RuntimeHelpers_ty(__$$119) {
  return __$$119["system_RuntimeHelpers_ty@"];
}

function TcGlobals$$get_system_Value_ty(__$$120) {
  return __$$120["system_Value_ty@"];
}

function TcGlobals$$get_system_Delegate_ty(__$$121) {
  return __$$121["system_Delegate_ty@"];
}

function TcGlobals$$get_system_MulticastDelegate_ty(__$$122) {
  return __$$122["system_MulticastDelegate_ty@"];
}

function TcGlobals$$get_system_Enum_ty(__$$123) {
  return __$$123["system_Enum_ty@"];
}

function TcGlobals$$get_system_Exception_ty(__$$124) {
  return __$$124["system_Exception_ty@"];
}

function TcGlobals$$get_system_String_typ(__$$125) {
  return __$$125["system_String_typ@"];
}

function TcGlobals$$get_system_String_tcref(__$$126) {
  return __$$126["system_String_tcref@"];
}

function TcGlobals$$get_system_Int32_ty(__$$127) {
  return __$$127["system_Int32_ty@"];
}

function TcGlobals$$get_system_Type_ty(__$$128) {
  return __$$128.v_system_Type_ty;
}

function TcGlobals$$get_system_TypedReference_tcref(__$$129) {
  return __$$129["system_TypedReference_tcref@"];
}

function TcGlobals$$get_system_ArgIterator_tcref(__$$130) {
  return __$$130["system_ArgIterator_tcref@"];
}

function TcGlobals$$get_system_RuntimeArgumentHandle_tcref(__$$131) {
  return __$$131["system_RuntimeArgumentHandle_tcref@"];
}

function TcGlobals$$get_system_SByte_tcref(__$$132) {
  return __$$132["system_SByte_tcref@"];
}

function TcGlobals$$get_system_Decimal_tcref(__$$133) {
  return __$$133["system_Decimal_tcref@"];
}

function TcGlobals$$get_system_Int16_tcref(__$$134) {
  return __$$134["system_Int16_tcref@"];
}

function TcGlobals$$get_system_Int32_tcref(__$$135) {
  return __$$135["system_Int32_tcref@"];
}

function TcGlobals$$get_system_Int64_tcref(__$$136) {
  return __$$136["system_Int64_tcref@"];
}

function TcGlobals$$get_system_IntPtr_tcref(__$$137) {
  return __$$137["system_IntPtr_tcref@"];
}

function TcGlobals$$get_system_Bool_tcref(__$$138) {
  return __$$138["system_Bool_tcref@"];
}

function TcGlobals$$get_system_Byte_tcref(__$$139) {
  return __$$139["system_Byte_tcref@"];
}

function TcGlobals$$get_system_UInt16_tcref(__$$140) {
  return __$$140["system_UInt16_tcref@"];
}

function TcGlobals$$get_system_Char_tcref(__$$141) {
  return __$$141["system_Char_tcref@"];
}

function TcGlobals$$get_system_UInt32_tcref(__$$142) {
  return __$$142["system_UInt32_tcref@"];
}

function TcGlobals$$get_system_UInt64_tcref(__$$143) {
  return __$$143["system_UInt64_tcref@"];
}

function TcGlobals$$get_system_UIntPtr_tcref(__$$144) {
  return __$$144["system_UIntPtr_tcref@"];
}

function TcGlobals$$get_system_Single_tcref(__$$145) {
  return __$$145["system_Single_tcref@"];
}

function TcGlobals$$get_system_Double_tcref(__$$146) {
  return __$$146["system_Double_tcref@"];
}

function TcGlobals$$get_system_RuntimeTypeHandle_ty(__$$147) {
  return __$$147["system_RuntimeTypeHandle_ty@"];
}

function TcGlobals$$get_system_RuntimeMethodHandle_ty(__$$148) {
  return __$$148.v_system_RuntimeMethodHandle_ty;
}

function TcGlobals$$get_system_MarshalByRefObject_tcref(__$$149) {
  return __$$149["system_MarshalByRefObject_tcref@"];
}

function TcGlobals$$get_system_MarshalByRefObject_ty(__$$150) {
  return __$$150["system_MarshalByRefObject_ty@"];
}

function TcGlobals$$get_system_Reflection_MethodInfo_ty(__$$151) {
  return __$$151.v_system_Reflection_MethodInfo_ty;
}

function TcGlobals$$get_system_Array_tcref(__$$152) {
  return __$$152["system_Array_tcref@"];
}

function TcGlobals$$get_system_Object_tcref(__$$153) {
  return __$$153["system_Object_tcref@"];
}

function TcGlobals$$get_system_Void_tcref(__$$154) {
  return __$$154["system_Void_tcref@"];
}

function TcGlobals$$get_system_IndexOutOfRangeException_tcref(__$$155) {
  return __$$155["system_IndexOutOfRangeException_tcref@"];
}

function TcGlobals$$get_system_Nullable_tcref(__$$156) {
  return __$$156["system_Nullable_tcref@"];
}

function TcGlobals$$get_system_GenericIComparable_tcref(__$$157) {
  return __$$157["system_GenericIComparable_tcref@"];
}

function TcGlobals$$get_system_GenericIEquatable_tcref(__$$158) {
  return __$$158["system_GenericIEquatable_tcref@"];
}

function TcGlobals$$get_mk_IComparable_ty(__$$159) {
  return __$$159["mk_IComparable_ty@"];
}

function TcGlobals$$get_system_LinqExpression_tcref(__$$160) {
  return __$$160["system_LinqExpression_tcref@"];
}

function TcGlobals$$get_mk_IStructuralComparable_ty(__$$161) {
  return __$$161["mk_IStructuralComparable_ty@"];
}

function TcGlobals$$get_mk_IStructuralEquatable_ty(__$$162) {
  return __$$162["mk_IStructuralEquatable_ty@"];
}

function TcGlobals$$get_IComparer_ty(__$$163) {
  return __$$163.v_IComparer_ty;
}

function TcGlobals$$get_IEqualityComparer_ty(__$$164) {
  return __$$164.v_IEqualityComparer_ty;
}

function TcGlobals$$get_tcref_System_Collections_IComparer(__$$165) {
  return __$$165["tcref_System_Collections_IComparer@"];
}

function TcGlobals$$get_tcref_System_Collections_IEqualityComparer(__$$166) {
  return __$$166["tcref_System_Collections_IEqualityComparer@"];
}

function TcGlobals$$get_tcref_System_Collections_Generic_IEqualityComparer(__$$167) {
  return __$$167["tcref_System_Collections_Generic_IEqualityComparer@"];
}

function TcGlobals$$get_tcref_System_Collections_Generic_Dictionary(__$$168) {
  return __$$168["tcref_System_Collections_Generic_Dictionary@"];
}

function TcGlobals$$get_tcref_System_Collections_Generic_IDictionary(__$$169) {
  return __$$169["tcref_System_Collections_Generic_IDictionary@"];
}

function TcGlobals$$get_tcref_System_IComparable(__$$170) {
  return __$$170["tcref_System_IComparable@"];
}

function TcGlobals$$get_tcref_System_IStructuralComparable(__$$171) {
  return __$$171["tcref_System_IStructuralComparable@"];
}

function TcGlobals$$get_tcref_System_IStructuralEquatable(__$$172) {
  return __$$172["tcref_System_IStructuralEquatable@"];
}

function TcGlobals$$get_tcref_System_IDisposable(__$$173) {
  return __$$173["tcref_System_IDisposable@"];
}

function TcGlobals$$get_tcref_LanguagePrimitives(__$$174) {
  return __$$174["tcref_LanguagePrimitives@"];
}

function TcGlobals$$get_tcref_System_Collections_Generic_List(__$$175) {
  return __$$175["tcref_System_Collections_Generic_List@"];
}

function TcGlobals$$get_tcref_System_Collections_Generic_IList(__$$176) {
  return __$$176["tcref_System_Collections_Generic_IList@"];
}

function TcGlobals$$get_tcref_System_Collections_Generic_IReadOnlyList(__$$177) {
  return __$$177["tcref_System_Collections_Generic_IReadOnlyList@"];
}

function TcGlobals$$get_tcref_System_Collections_Generic_ICollection(__$$178) {
  return __$$178["tcref_System_Collections_Generic_ICollection@"];
}

function TcGlobals$$get_tcref_System_Collections_Generic_IReadOnlyCollection(__$$179) {
  return __$$179["tcref_System_Collections_Generic_IReadOnlyCollection@"];
}

function TcGlobals$$get_tcref_System_Collections_IEnumerable(__$$180) {
  return __$$180.v_tcref_System_Collections_IEnumerable;
}

function TcGlobals$$get_tcref_System_Collections_Generic_IEnumerable(__$$181) {
  return __$$181.v_IEnumerable_tcr;
}

function TcGlobals$$get_tcref_System_Collections_Generic_IEnumerator(__$$182) {
  return __$$182.v_IEnumerator_tcr;
}

function TcGlobals$$get_tcref_System_Attribute(__$$183) {
  return __$$183.v_System_Attribute_tcr;
}

function TcGlobals$$get_iltyp_TypedReference(__$$184) {
  return __$$184["iltyp_TypedReference@"];
}

function TcGlobals$$get_iltyp_StreamingContext(__$$185) {
  return __$$185["iltyp_StreamingContext@"];
}

function TcGlobals$$get_iltyp_SerializationInfo(__$$186) {
  return __$$186["iltyp_SerializationInfo@"];
}

function TcGlobals$$get_iltyp_Missing(__$$187) {
  return __$$187["iltyp_Missing@"];
}

function TcGlobals$$get_iltyp_AsyncCallback(__$$188) {
  return __$$188["iltyp_AsyncCallback@"];
}

function TcGlobals$$get_iltyp_IAsyncResult(__$$189) {
  return __$$189["iltyp_IAsyncResult@"];
}

function TcGlobals$$get_iltyp_IComparable(__$$190) {
  return __$$190["iltyp_IComparable@"];
}

function TcGlobals$$get_iltyp_Exception(__$$191) {
  return __$$191["iltyp_Exception@"];
}

function TcGlobals$$get_iltyp_ValueType(__$$192) {
  return __$$192["iltyp_ValueType@"];
}

function TcGlobals$$get_iltyp_RuntimeFieldHandle(__$$193) {
  return __$$193["iltyp_RuntimeFieldHandle@"];
}

function TcGlobals$$get_iltyp_RuntimeMethodHandle(__$$194) {
  return __$$194["iltyp_RuntimeMethodHandle@"];
}

function TcGlobals$$get_iltyp_RuntimeTypeHandle(__$$195) {
  return __$$195["iltyp_RuntimeTypeHandle@"];
}

function TcGlobals$$get_attrib_AttributeUsageAttribute(__$$196) {
  return __$$196["attrib_AttributeUsageAttribute@"];
}

function TcGlobals$$get_attrib_ParamArrayAttribute(__$$197) {
  return __$$197["attrib_ParamArrayAttribute@"];
}

function TcGlobals$$get_attrib_IDispatchConstantAttribute(__$$198) {
  return __$$198["attrib_IDispatchConstantAttribute@"];
}

function TcGlobals$$get_attrib_IUnknownConstantAttribute(__$$199) {
  return __$$199["attrib_IUnknownConstantAttribute@"];
}

function TcGlobals$$get_attrib_IsByRefLikeAttribute(__$$200) {
  return __$$200["attrib_IsByRefLikeAttribute@"];
}

function TcGlobals$$get_attrib_IsReadOnlyAttribute(__$$201) {
  return __$$201["attrib_IsReadOnlyAttribute@"];
}

function TcGlobals$$get_attrib_SystemObsolete(__$$202) {
  return __$$202["attrib_SystemObsolete@"];
}

function TcGlobals$$get_attrib_DllImportAttribute(__$$203) {
  return __$$203["attrib_DllImportAttribute@"];
}

function TcGlobals$$get_attrib_StructLayoutAttribute(__$$204) {
  return __$$204["attrib_StructLayoutAttribute@"];
}

function TcGlobals$$get_attrib_TypeForwardedToAttribute(__$$205) {
  return __$$205["attrib_TypeForwardedToAttribute@"];
}

function TcGlobals$$get_attrib_ComVisibleAttribute(__$$206) {
  return __$$206["attrib_ComVisibleAttribute@"];
}

function TcGlobals$$get_attrib_ComImportAttribute(__$$207) {
  return __$$207["attrib_ComImportAttribute@"];
}

function TcGlobals$$get_attrib_FieldOffsetAttribute(__$$208) {
  return __$$208["attrib_FieldOffsetAttribute@"];
}

function TcGlobals$$get_attrib_MarshalAsAttribute(__$$209) {
  return __$$209["attrib_MarshalAsAttribute@"];
}

function TcGlobals$$get_attrib_InAttribute(__$$210) {
  return __$$210["attrib_InAttribute@"];
}

function TcGlobals$$get_attrib_OutAttribute(__$$211) {
  return __$$211["attrib_OutAttribute@"];
}

function TcGlobals$$get_attrib_OptionalAttribute(__$$212) {
  return __$$212["attrib_OptionalAttribute@"];
}

function TcGlobals$$get_attrib_DefaultParameterValueAttribute(__$$213) {
  return __$$213["attrib_DefaultParameterValueAttribute@"];
}

function TcGlobals$$get_attrib_ThreadStaticAttribute(__$$214) {
  return __$$214["attrib_ThreadStaticAttribute@"];
}

function TcGlobals$$get_attrib_SpecialNameAttribute(__$$215) {
  return __$$215["attrib_SpecialNameAttribute@"];
}

function TcGlobals$$get_attrib_VolatileFieldAttribute(__$$216) {
  return __$$216["attrib_VolatileFieldAttribute@"];
}

function TcGlobals$$get_attrib_ContextStaticAttribute(__$$217) {
  return __$$217["attrib_ContextStaticAttribute@"];
}

function TcGlobals$$get_attrib_FlagsAttribute(__$$218) {
  return __$$218["attrib_FlagsAttribute@"];
}

function TcGlobals$$get_attrib_DefaultMemberAttribute(__$$219) {
  return __$$219["attrib_DefaultMemberAttribute@"];
}

function TcGlobals$$get_attrib_DebuggerDisplayAttribute(__$$220) {
  return __$$220["attrib_DebuggerDisplayAttribute@"];
}

function TcGlobals$$get_attrib_DebuggerTypeProxyAttribute(__$$221) {
  return __$$221["attrib_DebuggerTypeProxyAttribute@"];
}

function TcGlobals$$get_attrib_PreserveSigAttribute(__$$222) {
  return __$$222["attrib_PreserveSigAttribute@"];
}

function TcGlobals$$get_attrib_MethodImplAttribute(__$$223) {
  return __$$223["attrib_MethodImplAttribute@"];
}

function TcGlobals$$get_attrib_ExtensionAttribute(__$$224) {
  return __$$224["attrib_ExtensionAttribute@"];
}

function TcGlobals$$get_attrib_CallerLineNumberAttribute(__$$225) {
  return __$$225["attrib_CallerLineNumberAttribute@"];
}

function TcGlobals$$get_attrib_CallerFilePathAttribute(__$$226) {
  return __$$226["attrib_CallerFilePathAttribute@"];
}

function TcGlobals$$get_attrib_CallerMemberNameAttribute(__$$227) {
  return __$$227["attrib_CallerMemberNameAttribute@"];
}

function TcGlobals$$get_attrib_ProjectionParameterAttribute(__$$228) {
  return __$$228["attrib_ProjectionParameterAttribute@"];
}

function TcGlobals$$get_attrib_CustomOperationAttribute(__$$229) {
  return __$$229["attrib_CustomOperationAttribute@"];
}

function TcGlobals$$get_attrib_NonSerializedAttribute(__$$230) {
  return __$$230["attrib_NonSerializedAttribute@"];
}

function TcGlobals$$get_attrib_AutoSerializableAttribute(__$$231) {
  return __$$231["attrib_AutoSerializableAttribute@"];
}

function TcGlobals$$get_attrib_RequireQualifiedAccessAttribute(__$$232) {
  return __$$232["attrib_RequireQualifiedAccessAttribute@"];
}

function TcGlobals$$get_attrib_EntryPointAttribute(__$$233) {
  return __$$233["attrib_EntryPointAttribute@"];
}

function TcGlobals$$get_attrib_DefaultAugmentationAttribute(__$$234) {
  return __$$234["attrib_DefaultAugmentationAttribute@"];
}

function TcGlobals$$get_attrib_CompilerMessageAttribute(__$$235) {
  return __$$235["attrib_CompilerMessageAttribute@"];
}

function TcGlobals$$get_attrib_ExperimentalAttribute(__$$236) {
  return __$$236["attrib_ExperimentalAttribute@"];
}

function TcGlobals$$get_attrib_UnverifiableAttribute(__$$237) {
  return __$$237["attrib_UnverifiableAttribute@"];
}

function TcGlobals$$get_attrib_LiteralAttribute(__$$238) {
  return __$$238["attrib_LiteralAttribute@"];
}

function TcGlobals$$get_attrib_ConditionalAttribute(__$$239) {
  return __$$239["attrib_ConditionalAttribute@"];
}

function TcGlobals$$get_attrib_OptionalArgumentAttribute(__$$240) {
  return __$$240["attrib_OptionalArgumentAttribute@"];
}

function TcGlobals$$get_attrib_RequiresExplicitTypeArgumentsAttribute(__$$241) {
  return __$$241["attrib_RequiresExplicitTypeArgumentsAttribute@"];
}

function TcGlobals$$get_attrib_DefaultValueAttribute(__$$242) {
  return __$$242["attrib_DefaultValueAttribute@"];
}

function TcGlobals$$get_attrib_ClassAttribute(__$$243) {
  return __$$243["attrib_ClassAttribute@"];
}

function TcGlobals$$get_attrib_InterfaceAttribute(__$$244) {
  return __$$244["attrib_InterfaceAttribute@"];
}

function TcGlobals$$get_attrib_StructAttribute(__$$245) {
  return __$$245["attrib_StructAttribute@"];
}

function TcGlobals$$get_attrib_ReflectedDefinitionAttribute(__$$246) {
  return __$$246["attrib_ReflectedDefinitionAttribute@"];
}

function TcGlobals$$get_attrib_CompiledNameAttribute(__$$247) {
  return __$$247["attrib_CompiledNameAttribute@"];
}

function TcGlobals$$get_attrib_AutoOpenAttribute(__$$248) {
  return __$$248["attrib_AutoOpenAttribute@"];
}

function TcGlobals$$get_attrib_InternalsVisibleToAttribute(__$$249) {
  return __$$249["attrib_InternalsVisibleToAttribute@"];
}

function TcGlobals$$get_attrib_CompilationRepresentationAttribute(__$$250) {
  return __$$250["attrib_CompilationRepresentationAttribute@"];
}

function TcGlobals$$get_attrib_CompilationArgumentCountsAttribute(__$$251) {
  return __$$251["attrib_CompilationArgumentCountsAttribute@"];
}

function TcGlobals$$get_attrib_CompilationMappingAttribute(__$$252) {
  return __$$252["attrib_CompilationMappingAttribute@"];
}

function TcGlobals$$get_attrib_CLIEventAttribute(__$$253) {
  return __$$253["attrib_CLIEventAttribute@"];
}

function TcGlobals$$get_attrib_CLIMutableAttribute(__$$254) {
  return __$$254["attrib_CLIMutableAttribute@"];
}

function TcGlobals$$get_attrib_AllowNullLiteralAttribute(__$$255) {
  return __$$255["attrib_AllowNullLiteralAttribute@"];
}

function TcGlobals$$get_attrib_NoEqualityAttribute(__$$256) {
  return __$$256["attrib_NoEqualityAttribute@"];
}

function TcGlobals$$get_attrib_NoComparisonAttribute(__$$257) {
  return __$$257["attrib_NoComparisonAttribute@"];
}

function TcGlobals$$get_attrib_CustomEqualityAttribute(__$$258) {
  return __$$258["attrib_CustomEqualityAttribute@"];
}

function TcGlobals$$get_attrib_CustomComparisonAttribute(__$$259) {
  return __$$259["attrib_CustomComparisonAttribute@"];
}

function TcGlobals$$get_attrib_EqualityConditionalOnAttribute(__$$260) {
  return __$$260["attrib_EqualityConditionalOnAttribute@"];
}

function TcGlobals$$get_attrib_ComparisonConditionalOnAttribute(__$$261) {
  return __$$261["attrib_ComparisonConditionalOnAttribute@"];
}

function TcGlobals$$get_attrib_ReferenceEqualityAttribute(__$$262) {
  return __$$262["attrib_ReferenceEqualityAttribute@"];
}

function TcGlobals$$get_attrib_StructuralEqualityAttribute(__$$263) {
  return __$$263["attrib_StructuralEqualityAttribute@"];
}

function TcGlobals$$get_attrib_StructuralComparisonAttribute(__$$264) {
  return __$$264["attrib_StructuralComparisonAttribute@"];
}

function TcGlobals$$get_attrib_SealedAttribute(__$$265) {
  return __$$265["attrib_SealedAttribute@"];
}

function TcGlobals$$get_attrib_AbstractClassAttribute(__$$266) {
  return __$$266["attrib_AbstractClassAttribute@"];
}

function TcGlobals$$get_attrib_GeneralizableValueAttribute(__$$267) {
  return __$$267["attrib_GeneralizableValueAttribute@"];
}

function TcGlobals$$get_attrib_MeasureAttribute(__$$268) {
  return __$$268["attrib_MeasureAttribute@"];
}

function TcGlobals$$get_attrib_MeasureableAttribute(__$$269) {
  return __$$269["attrib_MeasureableAttribute@"];
}

function TcGlobals$$get_attrib_NoDynamicInvocationAttribute(__$$270) {
  return __$$270["attrib_NoDynamicInvocationAttribute@"];
}

function TcGlobals$$get_attrib_SecurityAttribute(__$$271) {
  return __$$271["attrib_SecurityAttribute@"];
}

function TcGlobals$$get_attrib_SecurityCriticalAttribute(__$$272) {
  return __$$272["attrib_SecurityCriticalAttribute@"];
}

function TcGlobals$$get_attrib_SecuritySafeCriticalAttribute(__$$273) {
  return __$$273["attrib_SecuritySafeCriticalAttribute@"];
}

function TcGlobals$$get_attrib_ComponentModelEditorBrowsableAttribute(__$$274) {
  return __$$274["attrib_ComponentModelEditorBrowsableAttribute@"];
}

function TcGlobals$$improveType(g, tcref$$4, tinst$$1) {
  return TcGlobals$$improveTy(g, tcref$$4, tinst$$1);
}

function TcGlobals$$decompileType(g$$1, tcref$$5, tinst$$2) {
  return TcGlobals$$decompileTy(g$$1, tcref$$5, tinst$$2);
}

function TcGlobals$$get_new_decimal_info(__$$275) {
  return __$$275.v_new_decimal_info;
}

function TcGlobals$$get_seq_info(__$$276) {
  return __$$276.v_seq_info;
}

function TcGlobals$$get_seq_vref(__$$277) {
  return __$$277["seq_vref@"];
}

function TcGlobals$$get_fsharpref_vref(__$$278) {
  return __$$278["fsharpref_vref@"];
}

function TcGlobals$$get_and_vref(__$$279) {
  return __$$279["and_vref@"];
}

function TcGlobals$$get_and2_vref(__$$280) {
  return __$$280["and2_vref@"];
}

function TcGlobals$$get_addrof_vref(__$$281) {
  return __$$281["addrof_vref@"];
}

function TcGlobals$$get_addrof2_vref(__$$282) {
  return __$$282["addrof2_vref@"];
}

function TcGlobals$$get_or_vref(__$$283) {
  return __$$283["or_vref@"];
}

function TcGlobals$$get_splice_expr_vref(__$$284) {
  return __$$284["splice_expr_vref@"];
}

function TcGlobals$$get_splice_raw_expr_vref(__$$285) {
  return __$$285["splice_raw_expr_vref@"];
}

function TcGlobals$$get_or2_vref(__$$286) {
  return __$$286["or2_vref@"];
}

function TcGlobals$$get_generic_equality_er_inner_vref(__$$287) {
  return __$$287["generic_equality_er_inner_vref@"];
}

function TcGlobals$$get_generic_equality_per_inner_vref(__$$288) {
  return __$$288["generic_equality_per_inner_vref@"];
}

function TcGlobals$$get_generic_equality_withc_inner_vref(__$$289) {
  return __$$289["generic_equality_withc_inner_vref@"];
}

function TcGlobals$$get_generic_comparison_inner_vref(__$$290) {
  return __$$290["generic_comparison_inner_vref@"];
}

function TcGlobals$$get_generic_comparison_withc_inner_vref(__$$291) {
  return __$$291["generic_comparison_withc_inner_vref@"];
}

function TcGlobals$$get_generic_comparison_withc_outer_info(__$$292) {
  return __$$292.v_generic_comparison_withc_outer_info;
}

function TcGlobals$$get_generic_equality_er_outer_info(__$$293) {
  return __$$293.v_generic_equality_er_outer_info;
}

function TcGlobals$$get_generic_equality_withc_outer_info(__$$294) {
  return __$$294.v_generic_equality_withc_outer_info;
}

function TcGlobals$$get_generic_hash_withc_outer_info(__$$295) {
  return __$$295.v_generic_hash_withc_outer_info;
}

function TcGlobals$$get_generic_hash_inner_vref(__$$296) {
  return __$$296["generic_hash_inner_vref@"];
}

function TcGlobals$$get_generic_hash_withc_inner_vref(__$$297) {
  return __$$297["generic_hash_withc_inner_vref@"];
}

function TcGlobals$$get_reference_equality_inner_vref(__$$298) {
  return __$$298["reference_equality_inner_vref@"];
}

function TcGlobals$$get_bitwise_or_vref(__$$299) {
  return __$$299["bitwise_or_vref@"];
}

function TcGlobals$$get_bitwise_and_vref(__$$300) {
  return __$$300["bitwise_and_vref@"];
}

function TcGlobals$$get_bitwise_xor_vref(__$$301) {
  return __$$301["bitwise_xor_vref@"];
}

function TcGlobals$$get_bitwise_unary_not_vref(__$$302) {
  return __$$302["bitwise_unary_not_vref@"];
}

function TcGlobals$$get_bitwise_shift_left_vref(__$$303) {
  return __$$303["bitwise_shift_left_vref@"];
}

function TcGlobals$$get_bitwise_shift_right_vref(__$$304) {
  return __$$304["bitwise_shift_right_vref@"];
}

function TcGlobals$$get_unchecked_addition_vref(__$$305) {
  return __$$305["unchecked_addition_vref@"];
}

function TcGlobals$$get_unchecked_unary_plus_vref(__$$306) {
  return __$$306["unchecked_unary_plus_vref@"];
}

function TcGlobals$$get_unchecked_unary_minus_vref(__$$307) {
  return __$$307["unchecked_unary_minus_vref@"];
}

function TcGlobals$$get_unchecked_unary_not_vref(__$$308) {
  return __$$308["unchecked_unary_not_vref@"];
}

function TcGlobals$$get_unchecked_subtraction_vref(__$$309) {
  return __$$309["unchecked_subtraction_vref@"];
}

function TcGlobals$$get_unchecked_multiply_vref(__$$310) {
  return __$$310["unchecked_multiply_vref@"];
}

function TcGlobals$$get_unchecked_defaultof_vref(__$$311) {
  return __$$311["unchecked_defaultof_vref@"];
}

function TcGlobals$$get_bitwise_or_info(__$$312) {
  return __$$312.v_bitwise_or_info;
}

function TcGlobals$$get_bitwise_and_info(__$$313) {
  return __$$313.v_bitwise_and_info;
}

function TcGlobals$$get_bitwise_xor_info(__$$314) {
  return __$$314.v_bitwise_xor_info;
}

function TcGlobals$$get_bitwise_unary_not_info(__$$315) {
  return __$$315.v_bitwise_unary_not_info;
}

function TcGlobals$$get_bitwise_shift_left_info(__$$316) {
  return __$$316.v_bitwise_shift_left_info;
}

function TcGlobals$$get_bitwise_shift_right_info(__$$317) {
  return __$$317.v_bitwise_shift_right_info;
}

function TcGlobals$$get_unchecked_addition_info(__$$318) {
  return __$$318.v_unchecked_addition_info;
}

function TcGlobals$$get_unchecked_subtraction_info(__$$319) {
  return __$$319.v_unchecked_subtraction_info;
}

function TcGlobals$$get_unchecked_multiply_info(__$$320) {
  return __$$320.v_unchecked_multiply_info;
}

function TcGlobals$$get_unchecked_division_info(__$$321) {
  return __$$321.v_unchecked_division_info;
}

function TcGlobals$$get_unchecked_modulus_info(__$$322) {
  return __$$322.v_unchecked_modulus_info;
}

function TcGlobals$$get_unchecked_unary_plus_info(__$$323) {
  return __$$323.v_unchecked_unary_plus_info;
}

function TcGlobals$$get_unchecked_unary_minus_info(__$$324) {
  return __$$324.v_unchecked_unary_minus_info;
}

function TcGlobals$$get_unchecked_unary_not_info(__$$325) {
  return __$$325.v_unchecked_unary_not_info;
}

function TcGlobals$$get_checked_addition_info(__$$326) {
  return __$$326.v_checked_addition_info;
}

function TcGlobals$$get_checked_subtraction_info(__$$327) {
  return __$$327.v_checked_subtraction_info;
}

function TcGlobals$$get_checked_multiply_info(__$$328) {
  return __$$328.v_checked_multiply_info;
}

function TcGlobals$$get_checked_unary_minus_info(__$$329) {
  return __$$329.v_checked_unary_minus_info;
}

function TcGlobals$$get_byte_checked_info(__$$330) {
  return __$$330.v_byte_checked_info;
}

function TcGlobals$$get_sbyte_checked_info(__$$331) {
  return __$$331.v_sbyte_checked_info;
}

function TcGlobals$$get_int16_checked_info(__$$332) {
  return __$$332.v_int16_checked_info;
}

function TcGlobals$$get_uint16_checked_info(__$$333) {
  return __$$333.v_uint16_checked_info;
}

function TcGlobals$$get_int_checked_info(__$$334) {
  return __$$334.v_int_checked_info;
}

function TcGlobals$$get_int32_checked_info(__$$335) {
  return __$$335.v_int32_checked_info;
}

function TcGlobals$$get_uint32_checked_info(__$$336) {
  return __$$336.v_uint32_checked_info;
}

function TcGlobals$$get_int64_checked_info(__$$337) {
  return __$$337.v_int64_checked_info;
}

function TcGlobals$$get_uint64_checked_info(__$$338) {
  return __$$338.v_uint64_checked_info;
}

function TcGlobals$$get_nativeint_checked_info(__$$339) {
  return __$$339.v_nativeint_checked_info;
}

function TcGlobals$$get_unativeint_checked_info(__$$340) {
  return __$$340.v_unativeint_checked_info;
}

function TcGlobals$$get_byte_operator_info(__$$341) {
  return __$$341.v_byte_operator_info;
}

function TcGlobals$$get_sbyte_operator_info(__$$342) {
  return __$$342.v_sbyte_operator_info;
}

function TcGlobals$$get_int16_operator_info(__$$343) {
  return __$$343.v_int16_operator_info;
}

function TcGlobals$$get_uint16_operator_info(__$$344) {
  return __$$344.v_uint16_operator_info;
}

function TcGlobals$$get_int_operator_info(__$$345) {
  return __$$345.v_int_operator_info;
}

function TcGlobals$$get_int32_operator_info(__$$346) {
  return __$$346.v_int32_operator_info;
}

function TcGlobals$$get_uint32_operator_info(__$$347) {
  return __$$347.v_uint32_operator_info;
}

function TcGlobals$$get_int64_operator_info(__$$348) {
  return __$$348.v_int64_operator_info;
}

function TcGlobals$$get_uint64_operator_info(__$$349) {
  return __$$349.v_uint64_operator_info;
}

function TcGlobals$$get_float32_operator_info(__$$350) {
  return __$$350.v_float32_operator_info;
}

function TcGlobals$$get_float_operator_info(__$$351) {
  return __$$351.v_float_operator_info;
}

function TcGlobals$$get_nativeint_operator_info(__$$352) {
  return __$$352.v_nativeint_operator_info;
}

function TcGlobals$$get_unativeint_operator_info(__$$353) {
  return __$$353.v_unativeint_operator_info;
}

function TcGlobals$$get_char_operator_info(__$$354) {
  return __$$354.v_char_operator_info;
}

function TcGlobals$$get_enum_operator_info(__$$355) {
  return __$$355.v_enum_operator_info;
}

function TcGlobals$$get_compare_operator_vref(__$$356) {
  return __$$356["compare_operator_vref@"];
}

function TcGlobals$$get_equals_operator_vref(__$$357) {
  return __$$357["equals_operator_vref@"];
}

function TcGlobals$$get_equals_nullable_operator_vref(__$$358) {
  return __$$358["equals_nullable_operator_vref@"];
}

function TcGlobals$$get_nullable_equals_nullable_operator_vref(__$$359) {
  return __$$359["nullable_equals_nullable_operator_vref@"];
}

function TcGlobals$$get_nullable_equals_operator_vref(__$$360) {
  return __$$360["nullable_equals_operator_vref@"];
}

function TcGlobals$$get_not_equals_operator_vref(__$$361) {
  return __$$361["not_equals_operator_vref@"];
}

function TcGlobals$$get_less_than_operator_vref(__$$362) {
  return __$$362["less_than_operator_vref@"];
}

function TcGlobals$$get_less_than_or_equals_operator_vref(__$$363) {
  return __$$363["less_than_or_equals_operator_vref@"];
}

function TcGlobals$$get_greater_than_operator_vref(__$$364) {
  return __$$364["greater_than_operator_vref@"];
}

function TcGlobals$$get_greater_than_or_equals_operator_vref(__$$365) {
  return __$$365["greater_than_or_equals_operator_vref@"];
}

function TcGlobals$$get_raise_vref(__$$366) {
  return __$$366["raise_vref@"];
}

function TcGlobals$$get_failwith_vref(__$$367) {
  return __$$367["failwith_vref@"];
}

function TcGlobals$$get_invalid_arg_vref(__$$368) {
  return __$$368["invalid_arg_vref@"];
}

function TcGlobals$$get_null_arg_vref(__$$369) {
  return __$$369["null_arg_vref@"];
}

function TcGlobals$$get_invalid_op_vref(__$$370) {
  return __$$370["invalid_op_vref@"];
}

function TcGlobals$$get_failwithf_vref(__$$371) {
  return __$$371["failwithf_vref@"];
}

function TcGlobals$$get_equals_operator_info(__$$372) {
  return __$$372.v_equals_operator_info;
}

function TcGlobals$$get_not_equals_operator(__$$373) {
  return __$$373.v_not_equals_operator_info;
}

function TcGlobals$$get_less_than_operator(__$$374) {
  return __$$374.v_less_than_operator_info;
}

function TcGlobals$$get_less_than_or_equals_operator(__$$375) {
  return __$$375.v_less_than_or_equals_operator_info;
}

function TcGlobals$$get_greater_than_operator(__$$376) {
  return __$$376.v_greater_than_operator_info;
}

function TcGlobals$$get_greater_than_or_equals_operator(__$$377) {
  return __$$377.v_greater_than_or_equals_operator_info;
}

function TcGlobals$$get_hash_info(__$$378) {
  return __$$378.v_hash_info;
}

function TcGlobals$$get_box_info(__$$379) {
  return __$$379.v_box_info;
}

function TcGlobals$$get_isnull_info(__$$380) {
  return __$$380.v_isnull_info;
}

function TcGlobals$$get_isnotnull_info(__$$381) {
  return __$$381.v_isnotnull_info;
}

function TcGlobals$$get_raise_info(__$$382) {
  return __$$382.v_raise_info;
}

function TcGlobals$$get_failwith_info(__$$383) {
  return __$$383.v_failwith_info;
}

function TcGlobals$$get_invalid_arg_info(__$$384) {
  return __$$384.v_invalid_arg_info;
}

function TcGlobals$$get_null_arg_info(__$$385) {
  return __$$385.v_null_arg_info;
}

function TcGlobals$$get_invalid_op_info(__$$386) {
  return __$$386.v_invalid_op_info;
}

function TcGlobals$$get_failwithf_info(__$$387) {
  return __$$387.v_failwithf_info;
}

function TcGlobals$$get_reraise_info(__$$388) {
  return __$$388.v_reraise_info;
}

function TcGlobals$$get_methodhandleof_info(__$$389) {
  return __$$389.v_methodhandleof_info;
}

function TcGlobals$$get_typeof_info(__$$390) {
  return __$$390.v_typeof_info;
}

function TcGlobals$$get_typedefof_info(__$$391) {
  return __$$391.v_typedefof_info;
}

function TcGlobals$$get_reraise_vref(__$$392) {
  return __$$392["reraise_vref@"];
}

function TcGlobals$$get_methodhandleof_vref(__$$393) {
  return __$$393["methodhandleof_vref@"];
}

function TcGlobals$$get_typeof_vref(__$$394) {
  return __$$394["typeof_vref@"];
}

function TcGlobals$$get_sizeof_vref(__$$395) {
  return __$$395["sizeof_vref@"];
}

function TcGlobals$$get_typedefof_vref(__$$396) {
  return __$$396["typedefof_vref@"];
}

function TcGlobals$$get_enum_vref(__$$397) {
  return __$$397["enum_vref@"];
}

function TcGlobals$$get_enumOfValue_vref(__$$398) {
  return __$$398["enumOfValue_vref@"];
}

function TcGlobals$$get_range_op_vref(__$$399) {
  return __$$399["range_op_vref@"];
}

function TcGlobals$$get_range_step_op_vref(__$$400) {
  return __$$400["range_step_op_vref@"];
}

function TcGlobals$$get_range_int32_op_vref(__$$401) {
  return __$$401["range_int32_op_vref@"];
}

function TcGlobals$$get_array_get_vref(__$$402) {
  return __$$402["array_get_vref@"];
}

function TcGlobals$$get_array2D_get_vref(__$$403) {
  return __$$403["array2D_get_vref@"];
}

function TcGlobals$$get_array3D_get_vref(__$$404) {
  return __$$404["array3D_get_vref@"];
}

function TcGlobals$$get_array4D_get_vref(__$$405) {
  return __$$405["array4D_get_vref@"];
}

function TcGlobals$$get_seq_singleton_vref(__$$406) {
  return __$$406["seq_singleton_vref@"];
}

function TcGlobals$$get_seq_collect_vref(__$$407) {
  return __$$407["seq_collect_vref@"];
}

function TcGlobals$$get_nativeptr_tobyref_vref(__$$408) {
  return __$$408["nativeptr_tobyref_vref@"];
}

function TcGlobals$$get_seq_using_vref(__$$409) {
  return __$$409["seq_using_vref@"];
}

function TcGlobals$$get_seq_delay_vref(__$$410) {
  return __$$410["seq_delay_vref@"];
}

function TcGlobals$$get_seq_append_vref(__$$411) {
  return __$$411["seq_append_vref@"];
}

function TcGlobals$$get_seq_generated_vref(__$$412) {
  return __$$412["seq_generated_vref@"];
}

function TcGlobals$$get_seq_finally_vref(__$$413) {
  return __$$413["seq_finally_vref@"];
}

function TcGlobals$$get_seq_of_functions_vref(__$$414) {
  return __$$414["seq_of_functions_vref@"];
}

function TcGlobals$$get_seq_map_vref(__$$415) {
  return __$$415["seq_map_vref@"];
}

function TcGlobals$$get_seq_empty_vref(__$$416) {
  return __$$416["seq_empty_vref@"];
}

function TcGlobals$$get_new_format_vref(__$$417) {
  return __$$417["new_format_vref@"];
}

function TcGlobals$$get_sprintf_vref(__$$418) {
  return __$$418["sprintf_vref@"];
}

function TcGlobals$$get_unbox_vref(__$$419) {
  return __$$419["unbox_vref@"];
}

function TcGlobals$$get_unbox_fast_vref(__$$420) {
  return __$$420["unbox_fast_vref@"];
}

function TcGlobals$$get_istype_vref(__$$421) {
  return __$$421["istype_vref@"];
}

function TcGlobals$$get_istype_fast_vref(__$$422) {
  return __$$422["istype_fast_vref@"];
}

function TcGlobals$$get_query_source_vref(__$$423) {
  return __$$423["query_source_vref@"];
}

function TcGlobals$$get_query_value_vref(__$$424) {
  return __$$424["query_value_vref@"];
}

function TcGlobals$$get_query_run_value_vref(__$$425) {
  return __$$425["query_run_value_vref@"];
}

function TcGlobals$$get_query_run_enumerable_vref(__$$426) {
  return __$$426["query_run_enumerable_vref@"];
}

function TcGlobals$$get_query_for_vref(__$$427) {
  return __$$427["query_for_vref@"];
}

function TcGlobals$$get_query_yield_vref(__$$428) {
  return __$$428["query_yield_vref@"];
}

function TcGlobals$$get_query_yield_from_vref(__$$429) {
  return __$$429["query_yield_from_vref@"];
}

function TcGlobals$$get_query_select_vref(__$$430) {
  return __$$430["query_select_vref@"];
}

function TcGlobals$$get_query_where_vref(__$$431) {
  return __$$431["query_where_vref@"];
}

function TcGlobals$$get_query_zero_vref(__$$432) {
  return __$$432["query_zero_vref@"];
}

function TcGlobals$$get_seq_collect_info(__$$433) {
  return __$$433.v_seq_collect_info;
}

function TcGlobals$$get_seq_using_info(__$$434) {
  return __$$434.v_seq_using_info;
}

function TcGlobals$$get_seq_delay_info(__$$435) {
  return __$$435.v_seq_delay_info;
}

function TcGlobals$$get_seq_append_info(__$$436) {
  return __$$436.v_seq_append_info;
}

function TcGlobals$$get_seq_generated_info(__$$437) {
  return __$$437.v_seq_generated_info;
}

function TcGlobals$$get_seq_finally_info(__$$438) {
  return __$$438.v_seq_finally_info;
}

function TcGlobals$$get_seq_of_functions_info(__$$439) {
  return __$$439.v_seq_of_functions_info;
}

function TcGlobals$$get_seq_map_info(__$$440) {
  return __$$440.v_seq_map_info;
}

function TcGlobals$$get_seq_singleton_info(__$$441) {
  return __$$441.v_seq_singleton_info;
}

function TcGlobals$$get_seq_empty_info(__$$442) {
  return __$$442.v_seq_empty_info;
}

function TcGlobals$$get_new_format_info(__$$443) {
  return __$$443.v_new_format_info;
}

function TcGlobals$$get_unbox_info(__$$444) {
  return __$$444.v_unbox_info;
}

function TcGlobals$$get_get_generic_comparer_info(__$$445) {
  return __$$445.v_get_generic_comparer_info;
}

function TcGlobals$$get_get_generic_er_equality_comparer_info(__$$446) {
  return __$$446.v_get_generic_er_equality_comparer_info;
}

function TcGlobals$$get_get_generic_per_equality_comparer_info(__$$447) {
  return __$$447.v_get_generic_per_equality_comparer_info;
}

function TcGlobals$$get_dispose_info(__$$448) {
  return __$$448.v_dispose_info;
}

function TcGlobals$$get_getstring_info(__$$449) {
  return __$$449.v_getstring_info;
}

function TcGlobals$$get_unbox_fast_info(__$$450) {
  return __$$450.v_unbox_fast_info;
}

function TcGlobals$$get_istype_info(__$$451) {
  return __$$451.v_istype_info;
}

function TcGlobals$$get_istype_fast_info(__$$452) {
  return __$$452.v_istype_fast_info;
}

function TcGlobals$$get_lazy_force_info(__$$453) {
  return __$$453.v_lazy_force_info;
}

function TcGlobals$$get_lazy_create_info(__$$454) {
  return __$$454.v_lazy_create_info;
}

function TcGlobals$$get_create_instance_info(__$$455) {
  return __$$455.v_create_instance_info;
}

function TcGlobals$$get_create_event_info(__$$456) {
  return __$$456.v_create_event_info;
}

function TcGlobals$$get_seq_to_list_info(__$$457) {
  return __$$457.v_seq_to_list_info;
}

function TcGlobals$$get_seq_to_array_info(__$$458) {
  return __$$458.v_seq_to_array_info;
}

function TcGlobals$$get_array_length_info(__$$459) {
  return __$$459.v_array_length_info;
}

function TcGlobals$$get_array_get_info(__$$460) {
  return __$$460.v_array_get_info;
}

function TcGlobals$$get_array2D_get_info(__$$461) {
  return __$$461.v_array2D_get_info;
}

function TcGlobals$$get_array3D_get_info(__$$462) {
  return __$$462.v_array3D_get_info;
}

function TcGlobals$$get_array4D_get_info(__$$463) {
  return __$$463.v_array4D_get_info;
}

function TcGlobals$$get_array_set_info(__$$464) {
  return __$$464.v_array_set_info;
}

function TcGlobals$$get_array2D_set_info(__$$465) {
  return __$$465.v_array2D_set_info;
}

function TcGlobals$$get_array3D_set_info(__$$466) {
  return __$$466.v_array3D_set_info;
}

function TcGlobals$$get_array4D_set_info(__$$467) {
  return __$$467.v_array4D_set_info;
}

function TcGlobals$$get_deserialize_quoted_FSharp_20_plus_info(__$$468) {
  return __$$468.v_deserialize_quoted_FSharp_20_plus_info;
}

function TcGlobals$$get_deserialize_quoted_FSharp_40_plus_info(__$$469) {
  return __$$469.v_deserialize_quoted_FSharp_40_plus_info;
}

function TcGlobals$$get_cast_quotation_info(__$$470) {
  return __$$470.v_cast_quotation_info;
}

function TcGlobals$$get_lift_value_info(__$$471) {
  return __$$471.v_lift_value_info;
}

function TcGlobals$$get_lift_value_with_name_info(__$$472) {
  return __$$472.v_lift_value_with_name_info;
}

function TcGlobals$$get_lift_value_with_defn_info(__$$473) {
  return __$$473.v_lift_value_with_defn_info;
}

function TcGlobals$$get_query_source_as_enum_info(__$$474) {
  return __$$474.v_query_source_as_enum_info;
}

function TcGlobals$$get_new_query_source_info(__$$475) {
  return __$$475.v_new_query_source_info;
}

function TcGlobals$$get_query_builder_tcref(__$$476) {
  return __$$476.v_query_builder_tcref;
}

function TcGlobals$$get_fail_init_info(__$$477) {
  return __$$477.v_fail_init_info;
}

function TcGlobals$$get_fail_static_init_info(__$$478) {
  return __$$478.v_fail_static_init_info;
}

function TcGlobals$$get_check_this_info(__$$479) {
  return __$$479.v_check_this_info;
}

function TcGlobals$$get_quote_to_linq_lambda_info(__$$480) {
  return __$$480.v_quote_to_linq_lambda_info;
}

function TcGlobals$$get_generic_hash_withc_tuple2_vref(__$$481) {
  return __$$481["generic_hash_withc_tuple2_vref@"];
}

function TcGlobals$$get_generic_hash_withc_tuple3_vref(__$$482) {
  return __$$482["generic_hash_withc_tuple3_vref@"];
}

function TcGlobals$$get_generic_hash_withc_tuple4_vref(__$$483) {
  return __$$483["generic_hash_withc_tuple4_vref@"];
}

function TcGlobals$$get_generic_hash_withc_tuple5_vref(__$$484) {
  return __$$484["generic_hash_withc_tuple5_vref@"];
}

function TcGlobals$$get_generic_equals_withc_tuple2_vref(__$$485) {
  return __$$485["generic_equals_withc_tuple2_vref@"];
}

function TcGlobals$$get_generic_equals_withc_tuple3_vref(__$$486) {
  return __$$486["generic_equals_withc_tuple3_vref@"];
}

function TcGlobals$$get_generic_equals_withc_tuple4_vref(__$$487) {
  return __$$487["generic_equals_withc_tuple4_vref@"];
}

function TcGlobals$$get_generic_equals_withc_tuple5_vref(__$$488) {
  return __$$488["generic_equals_withc_tuple5_vref@"];
}

function TcGlobals$$get_generic_compare_withc_tuple2_vref(__$$489) {
  return __$$489["generic_compare_withc_tuple2_vref@"];
}

function TcGlobals$$get_generic_compare_withc_tuple3_vref(__$$490) {
  return __$$490["generic_compare_withc_tuple3_vref@"];
}

function TcGlobals$$get_generic_compare_withc_tuple4_vref(__$$491) {
  return __$$491["generic_compare_withc_tuple4_vref@"];
}

function TcGlobals$$get_generic_compare_withc_tuple5_vref(__$$492) {
  return __$$492["generic_compare_withc_tuple5_vref@"];
}

function TcGlobals$$get_generic_equality_withc_outer_vref(__$$493) {
  return __$$493["generic_equality_withc_outer_vref@"];
}

function TcGlobals$$get_cons_ucref(__$$494) {
  return __$$494.v_cons_ucref;
}

function TcGlobals$$get_nil_ucref(__$$495) {
  return __$$495.v_nil_ucref;
}

function TcGlobals$$get_suppressed_types(__$$496) {
  return __$$496.v_suppressed_types;
}

function TcGlobals$$get_isInteractive(__$$497) {
  return __$$497["isInteractive@181"];
}

function TcGlobals$$FindSysTyconRef(__$$498, path$$3, nm$$163) {
  return TcGlobals$$findSysTyconRef(__$$498, path$$3, nm$$163);
}

function TcGlobals$$TryFindSysTyconRef(__$$499, path$$4, nm$$164) {
  return TcGlobals$$tryFindSysTyconRef(__$$499, path$$4, nm$$164);
}

function TcGlobals$$FindSysILTypeRef$$Z721C83C5(__$$500, nm$$165) {
  return TcGlobals$$findSysILTypeRef$$Z721C83C5(__$$500, nm$$165);
}

function TcGlobals$$TryFindSysILTypeRef$$Z721C83C5(__$$501, nm$$166) {
  return TcGlobals$$tryFindSysILTypeRef$$Z721C83C5(__$$501, nm$$166);
}

function TcGlobals$$FindSysAttrib$$Z721C83C5(__$$502, nm$$167) {
  return TcGlobals$$findSysAttrib$$Z721C83C5(__$$502, nm$$167);
}

function TcGlobals$$TryFindSysAttrib$$Z721C83C5(__$$503, nm$$168) {
  return TcGlobals$$tryFindSysAttrib$$Z721C83C5(__$$503, nm$$168);
}

function TcGlobals$$get_ilxPubCloEnv(__$$504) {
  return __$$504["ilxPubCloEnv@"];
}

function TcGlobals$$AddMethodGeneratedAttributes$$3AF987BF(__$$505, mdef$$1) {
  return TcGlobals$$addMethodGeneratedAttrs$$3AF987BF(__$$505, mdef$$1);
}

function TcGlobals$$AddFieldGeneratedAttrs$$58456522(__$$506, mdef$$2) {
  return TcGlobals$$addFieldGeneratedAttrs$$58456522(__$$506, mdef$$2);
}

function TcGlobals$$AddFieldNeverAttrs$$58456522(__$$507, mdef$$3) {
  return TcGlobals$$addFieldNeverAttrs$$58456522(__$$507, mdef$$3);
}

function TcGlobals$$mkDebuggerHiddenAttribute(__$$508) {
  return (0, _il.mkILCustomAttribute)(__$$508["ilg@180"], TcGlobals$$findSysILTypeRef$$Z721C83C5(__$$508, "System.Diagnostics.DebuggerHiddenAttribute"), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)());
}

function TcGlobals$$mkDebuggerDisplayAttribute$$Z721C83C5(__$$509, s) {
  return (0, _il.mkILCustomAttribute)(__$$509["ilg@180"], TcGlobals$$findSysILTypeRef$$Z721C83C5(__$$509, "System.Diagnostics.DebuggerDisplayAttribute"), (0, _Types.L)((0, _il.ILGlobals$$get_typ_String)(__$$509["ilg@180"]), (0, _Types.L)()), (0, _Types.L)(new _il.ILAttribElem(0, "String", s), (0, _Types.L)()), (0, _Types.L)());
}

function TcGlobals$$get_DebuggerBrowsableNeverAttribute(__$$510) {
  return TcGlobals$$mkDebuggerBrowsableNeverAttribute(__$$510);
}

function TcGlobals$$mkDebuggerStepThroughAttribute(__$$511) {
  return (0, _il.mkILCustomAttribute)(__$$511["ilg@180"], TcGlobals$$findSysILTypeRef$$Z721C83C5(__$$511, "System.Diagnostics.DebuggerStepThroughAttribute"), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)());
}

function TcGlobals$$mkDebuggableAttribute$$Z1FBCCD16(__$$512, jitOptimizerDisabled) {
  return (0, _il.mkILCustomAttribute)(__$$512["ilg@180"], __$$512.tref_DebuggableAttribute, (0, _Types.L)((0, _il.ILGlobals$$get_typ_Bool)(__$$512["ilg@180"]), (0, _Types.L)((0, _il.ILGlobals$$get_typ_Bool)(__$$512["ilg@180"]), (0, _Types.L)())), (0, _Types.L)(new _il.ILAttribElem(1, "Bool", false), (0, _Types.L)(new _il.ILAttribElem(1, "Bool", jitOptimizerDisabled), (0, _Types.L)())), (0, _Types.L)());
}

function TcGlobals$$mkDebuggableAttributeV2$$7675FF80(__$$513, jitTracking, ignoreSymbolStoreSequencePoints, jitOptimizerDisabled$$1, enableEnC) {
  const debuggingMode = (jitTracking ? 1 : 0) | (jitOptimizerDisabled$$1 ? 256 : 0) | (ignoreSymbolStoreSequencePoints ? 2 : 0) | (enableEnC ? 4 : 0) | 0;
  const tref_DebuggableAttribute_DebuggingModes = (0, _il.mkILTyRefInTyRef)(__$$513.tref_DebuggableAttribute, "DebuggingModes");
  return (0, _il.mkILCustomAttribute)(__$$513["ilg@180"], __$$513.tref_DebuggableAttribute, (0, _Types.L)((0, _il.mkILNonGenericValueTy)(tref_DebuggableAttribute_DebuggingModes), (0, _Types.L)()), (0, _Types.L)(new _il.ILAttribElem(5, "Int32", debuggingMode), (0, _Types.L)()), (0, _Types.L)());
}

function TcGlobals$$get_CompilerGeneratedAttribute(__$$514) {
  return TcGlobals$$mkCompilerGeneratedAttribute(__$$514);
}

function TcGlobals$$get_eraseClassUnionDef(__$$515) {
  return function (tref$$1) {
    return function (td) {
      return function (cud) {
        return (0, _EraseUnions.mkClassUnionDef)(function addMethodGeneratedAttrs$$1(mdef$$4) {
          return TcGlobals$$addMethodGeneratedAttrs$$3AF987BF(__$$515, mdef$$4);
        }, function addPropertyGeneratedAttrs$$1(pdef) {
          return TcGlobals$$addPropertyGeneratedAttrs$$Z3508B099(__$$515, pdef);
        }, function addPropertyNeverAttrs$$1(pdef$$1) {
          return TcGlobals$$addPropertyNeverAttrs$$Z3508B099(__$$515, pdef$$1);
        }, function addFieldGeneratedAttrs$$1(fdef$$2) {
          return TcGlobals$$addFieldGeneratedAttrs$$58456522(__$$515, fdef$$2);
        }, function addFieldNeverAttrs$$1(fdef$$3) {
          return TcGlobals$$addFieldNeverAttrs$$58456522(__$$515, fdef$$3);
        }, function mkDebuggerTypeProxyAttribute$$1(ty$$23) {
          return TcGlobals$$mkDebuggerTypeProxyAttribute$$29CE2F9F(__$$515, ty$$23);
        }, __$$515["ilg@180"], tref$$1, td, cud);
      };
    };
  };
}

function TcGlobals$$dummyAssemblyNameCarryingUsefulErrorInformation(this$$$2, path$$5, typeName) {
  return (0, _FSComp.SR$$$tcGlobalsSystemTypeNotFound$$Z721C83C5)((0, _String.join)(".", ...path$$5) + "." + typeName);
}

function TcGlobals$$findSysTypeCcu(this$$$3, path$$6, typeName$$1) {
  const matchValue = this$$$3.tryFindSysTypeCcu(path$$6, typeName$$1);

  if (matchValue != null) {
    const ccu$$8 = matchValue;
    return ccu$$8;
  } else {
    return (0, _tast.CcuThunk$$$CreateDelayed$$Z721C83C5)(function clo0(path$$7) {
      return function (typeName$$2) {
        return TcGlobals$$dummyAssemblyNameCarryingUsefulErrorInformation(this$$$3, path$$7, typeName$$2);
      };
    }(path$$6)(typeName$$1));
  }
}

function TcGlobals$$tryFindSysTyconRef(this$$$4, path$$8, nm$$172) {
  const matchValue$$1 = this$$$4.tryFindSysTypeCcu(path$$8, nm$$172);

  if (matchValue$$1 == null) {
    return null;
  } else {
    const ccu$$9 = matchValue$$1;
    return mkNonLocalTyconRef2(ccu$$9, (0, _Array.ofList)(path$$8, Array), nm$$172);
  }
}

function TcGlobals$$findSysTyconRef(this$$$5, path$$9, nm$$173) {
  const ccu$$10 = TcGlobals$$findSysTypeCcu(this$$$5, path$$9, nm$$173);
  return mkNonLocalTyconRef2(ccu$$10, (0, _Array.ofList)(path$$9, Array), nm$$173);
}

function TcGlobals$$findSysILTypeRef$$Z721C83C5(this$$$6, nm$$174) {
  const patternInput = (0, _il.splitILTypeName)(nm$$174);
  let scoref;
  const matchValue$$2 = this$$$6.tryFindSysTypeCcu(patternInput[0], patternInput[1]);

  if (matchValue$$2 != null) {
    const ccu$$11 = matchValue$$2;
    scoref = (0, _tast.CcuThunk$$get_ILScopeRef)(ccu$$11);
  } else {
    scoref = new _il.ILScopeRef(2, "Assembly", (0, _il.mkSimpleAssRef)(function clo0$$1(path$$11) {
      return function (typeName$$4) {
        return TcGlobals$$dummyAssemblyNameCarryingUsefulErrorInformation(this$$$6, path$$11, typeName$$4);
      };
    }(patternInput[0])(patternInput[1])));
  }

  return (0, _il.mkILTyRef)(scoref, nm$$174);
}

function TcGlobals$$tryFindSysILTypeRef$$Z721C83C5(this$$$7, nm$$175) {
  const patternInput$$1 = (0, _il.splitILTypeName)(nm$$175);
  return (0, _Option.defaultArg)(this$$$7.tryFindSysTypeCcu(patternInput$$1[0], patternInput$$1[1]), null, function mapping$$1(ccu$$12) {
    return (0, _il.mkILTyRef)((0, _tast.CcuThunk$$get_ILScopeRef)(ccu$$12), nm$$175);
  });
}

function TcGlobals$$findSysAttrib$$Z721C83C5(this$$$8, nm$$176) {
  const tref$$2 = TcGlobals$$findSysILTypeRef$$Z721C83C5(this$$$8, nm$$176);
  const patternInput$$2 = (0, _il.splitILTypeName)(nm$$176);
  return new BuiltinAttribInfo(0, "AttribInfo", tref$$2, TcGlobals$$findSysTyconRef(this$$$8, patternInput$$2[0], patternInput$$2[1]));
}

function TcGlobals$$tryFindSysAttrib$$Z721C83C5(this$$$9, nm$$177) {
  const patternInput$$3 = (0, _il.splitILTypeName)(nm$$177);

  if (this$$$9.tryFindSysTypeCcu(patternInput$$3[0], patternInput$$3[1]) == null) {
    return null;
  } else {
    return TcGlobals$$findSysAttrib$$Z721C83C5(this$$$9, nm$$177);
  }
}

function TcGlobals$$mkSysNonGenericTy(this$$$10, path$$15, n$$31) {
  return mkNonGenericTy(TcGlobals$$findSysTyconRef(this$$$10, path$$15, n$$31));
}

function TcGlobals$$tryMkSysNonGenericTy(this$$$11, path$$16, n$$32) {
  return (0, _Option.defaultArg)(TcGlobals$$tryFindSysTyconRef(this$$$11, path$$16, n$$32), null, mkNonGenericTy);
}

function TcGlobals$$mkNullableTy$$ZB53B58E(this$$$12, ty$$24) {
  return new _tast.TType(1, "TType_app", this$$$12.v_nullable_tcr, (0, _Types.L)(ty$$24, (0, _Types.L)()));
}

function TcGlobals$$mkByrefTy$$ZB53B58E(this$$$13, ty$$25) {
  return new _tast.TType(1, "TType_app", this$$$13.v_byref_tcr, (0, _Types.L)(ty$$25, (0, _Types.L)()));
}

function TcGlobals$$mkNativePtrTy$$ZB53B58E(this$$$14, ty$$26) {
  return new _tast.TType(1, "TType_app", this$$$14.v_nativeptr_tcr, (0, _Types.L)(ty$$26, (0, _Types.L)()));
}

function TcGlobals$$mkFunTy(this$$$15, d$$8, r$$11) {
  return new _tast.TType(3, "TType_fun", d$$8, r$$11);
}

function TcGlobals$$op_MinusMinusGreater(this$$$16, d$$9, r$$12) {
  return TcGlobals$$mkFunTy(this$$$16, d$$9, r$$12);
}

function TcGlobals$$mkIteratedFunTy(this$$$17, dl, r$$13) {
  return (0, _List.foldBack)(function (d$$10, r$$14) {
    return TcGlobals$$mkFunTy(this$$$17, d$$10, r$$14);
  }, dl, r$$13);
}

function TcGlobals$$mkSmallRefTupledTy$$50B4DF78(this$$$18, l$$26) {
  if (l$$26.tail != null) {
    if (l$$26.tail.tail == null) {
      return l$$26.head;
    } else {
      return (0, _tast.mkRawRefTupleTy)(l$$26);
    }
  } else {
    return this$$$18.v_unit_ty;
  }
}

function TcGlobals$$mkForallTyIfNeeded(this$$$19, d$$11, r$$15) {
  if (d$$11.tail == null) {
    return r$$15;
  } else {
    const tps = d$$11;
    return new _tast.TType(0, "TType_forall", tps, r$$15);
  }
}

function TcGlobals$$makeIntrinsicValRef$$72DFE8B8(this$$$20, enclosingEntity, logicalName$$168, memberParentName$$168, compiledNameOpt$$168, typars$$168, _arg1$$170) {
  const ty$$27 = TcGlobals$$mkForallTyIfNeeded(this$$$20, typars$$168, TcGlobals$$mkIteratedFunTy(this$$$20, (0, _List.map)(function (l$$27) {
    return TcGlobals$$mkSmallRefTupledTy$$50B4DF78(this$$$20, l$$27);
  }, _arg1$$170[0]), _arg1$$170[1]));
  const isMember = memberParentName$$168 != null;
  const argCount = (isMember ? (0, _List.sum)((0, _List.map)(_List.length, _arg1$$170[0]), {
    GetZero() {
      return 0;
    },

    Add($x$$4, $y$$5) {
      return $x$$4 + $y$$5;
    }

  }) : 0) | 0;
  const linkageType = isMember ? ty$$27 : null;
  const key$$1 = (0, _tast.ValLinkageFullKey$$$$002Ector$$72991465)(new _tast.ValLinkagePartialKey(memberParentName$$168, false, logicalName$$168, argCount), linkageType);
  const vref = new IntrinsicValRef(0, "IntrinsicValRef", enclosingEntity, logicalName$$168, isMember, ty$$27, key$$1);
  const compiledName = (0, _Option.defaultArg)(compiledNameOpt$$168, logicalName$$168);
  this$$$20.v_knownIntrinsics.set([(0, _tast.NonLocalEntityRef$$get_LastItemMangledName)(enclosingEntity), compiledName], ValRefForIntrinsic(vref));
  return vref;
}

function TcGlobals$$mk_unop_ty$$1505(this$$$21, ty$$28) {
  return [(0, _Types.L)((0, _Types.L)(ty$$28, (0, _Types.L)()), (0, _Types.L)()), ty$$28];
}

function TcGlobals$$mk_binop_ty$$1505(this$$$22, ty$$29) {
  return [(0, _Types.L)((0, _Types.L)(ty$$29, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(ty$$29, (0, _Types.L)()), (0, _Types.L)())), ty$$29];
}

function TcGlobals$$mk_shiftop_ty$$ZB53B58E(this$$$23, ty$$30) {
  return [(0, _Types.L)((0, _Types.L)(ty$$30, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(this$$$23.v_int_ty, (0, _Types.L)()), (0, _Types.L)())), ty$$30];
}

function TcGlobals$$mk_binop_ty3(this$$$24, ty1$$1, ty2$$2, ty3) {
  return [(0, _Types.L)((0, _Types.L)(ty1$$1, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(ty2$$2, (0, _Types.L)()), (0, _Types.L)())), ty3];
}

function TcGlobals$$mk_rel_sig$$1505(this$$$25, ty$$31) {
  return [(0, _Types.L)((0, _Types.L)(ty$$31, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(ty$$31, (0, _Types.L)()), (0, _Types.L)())), this$$$25.v_bool_ty];
}

function TcGlobals$$mk_compare_sig$$1505(this$$$26, ty$$32) {
  return [(0, _Types.L)((0, _Types.L)(ty$$32, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(ty$$32, (0, _Types.L)()), (0, _Types.L)())), this$$$26.v_int_ty];
}

function TcGlobals$$mk_hash_sig$$1505(this$$$27, ty$$33) {
  return [(0, _Types.L)((0, _Types.L)(ty$$33, (0, _Types.L)()), (0, _Types.L)()), this$$$27.v_int_ty];
}

function TcGlobals$$mk_compare_withc_sig$$ZB53B58E(this$$$28, ty$$34) {
  return [(0, _Types.L)((0, _Types.L)(this$$$28.v_IComparer_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(ty$$34, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(ty$$34, (0, _Types.L)()), (0, _Types.L)()))), this$$$28.v_int_ty];
}

function TcGlobals$$mk_equality_withc_sig$$ZB53B58E(this$$$29, ty$$35) {
  return [(0, _Types.L)((0, _Types.L)(this$$$29.v_IEqualityComparer_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(ty$$35, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(ty$$35, (0, _Types.L)()), (0, _Types.L)()))), this$$$29.v_bool_ty];
}

function TcGlobals$$mk_hash_withc_sig$$ZB53B58E(this$$$30, ty$$36) {
  return [(0, _Types.L)((0, _Types.L)(this$$$30.v_IEqualityComparer_ty, (0, _Types.L)()), (0, _Types.L)((0, _Types.L)(ty$$36, (0, _Types.L)()), (0, _Types.L)())), this$$$30.v_int_ty];
}

function TcGlobals$$mkListTy$$ZB53B58E(this$$$31, ty$$37) {
  return new _tast.TType(1, "TType_app", this$$$31.v_list_tcr_nice, (0, _Types.L)(ty$$37, (0, _Types.L)()));
}

function TcGlobals$$mkSeqTy$$ZB53B58E(this$$$32, ty1$$2) {
  return new _tast.TType(1, "TType_app", this$$$32.v_seq_tcr, (0, _Types.L)(ty1$$2, (0, _Types.L)()));
}

function TcGlobals$$mkRefCellTy$$ZB53B58E(this$$$33, ty$$38) {
  return new _tast.TType(1, "TType_app", this$$$33.v_refcell_tcr_canon, (0, _Types.L)(ty$$38, (0, _Types.L)()));
}

function TcGlobals$$mkQuerySourceTy(this$$$34, ty1$$3, ty2$$3) {
  return new _tast.TType(1, "TType_app", this$$$34.v_querySource_tcr, (0, _Types.L)(ty1$$3, (0, _Types.L)(ty2$$3, (0, _Types.L)())));
}

function TcGlobals$$mkArrayType(this$$$35, rank$$16, ty$$39) {
  return new _tast.TType(1, "TType_app", this$$$35.v_il_arr_tcr_map[rank$$16 - 1], (0, _Types.L)(ty$$39, (0, _Types.L)()));
}

function TcGlobals$$mkLazyTy$$ZB53B58E(this$$$36, ty$$40) {
  return new _tast.TType(1, "TType_app", this$$$36.lazy_tcr, (0, _Types.L)(ty$$40, (0, _Types.L)()));
}

function TcGlobals$$mkPrintfFormatTy(this$$$37, aty$$1, bty$$2, cty$$2, dty$$2, ety) {
  return new _tast.TType(1, "TType_app", this$$$37.v_format_tcr, (0, _Types.L)(aty$$1, (0, _Types.L)(bty$$2, (0, _Types.L)(cty$$2, (0, _Types.L)(dty$$2, (0, _Types.L)(ety, (0, _Types.L)()))))));
}

function TcGlobals$$mk_format4_ty(this$$$38, aty$$2, bty$$3, cty$$3, dty$$3) {
  return new _tast.TType(1, "TType_app", this$$$38.v_format4_tcr, (0, _Types.L)(aty$$2, (0, _Types.L)(bty$$3, (0, _Types.L)(cty$$3, (0, _Types.L)(dty$$3, (0, _Types.L)())))));
}

function TcGlobals$$mkQuotedExprTy$$ZB53B58E(this$$$39, aty$$3) {
  return new _tast.TType(1, "TType_app", this$$$39.v_expr_tcr, (0, _Types.L)(aty$$3, (0, _Types.L)()));
}

function TcGlobals$$mkLinqExpressionTy$$ZB53B58E(this$$$40, aty$$4) {
  return new _tast.TType(1, "TType_app", this$$$40.v_linqExpression_tcr, (0, _Types.L)(aty$$4, (0, _Types.L)()));
}

function TcGlobals$$tyconRefEq(this$$$41, x$$9, y$$2) {
  return (0, _tast.primEntityRefEq)(this$$$41["compilingFslib@180"], this$$$41["fslibCcu@180"], x$$9, y$$2);
}

function TcGlobals$$tryDecodeTupleTy(this$$$42, tupInfo, l$$28) {
  var tcref$$9, t8$$2, tcref$$7, t8;
  var $target$$6, marker, t1, t2, t3, t4, t5, t6, t7;

  if (l$$28.tail == null) {
    $target$$6 = 1;
  } else if (l$$28.tail.tail == null) {
    $target$$6 = 2;
  } else if (l$$28.tail.tail.tail != null) {
    if (l$$28.tail.tail.tail.tail != null) {
      if (l$$28.tail.tail.tail.tail.tail != null) {
        if (l$$28.tail.tail.tail.tail.tail.tail != null) {
          if (l$$28.tail.tail.tail.tail.tail.tail.tail != null) {
            if (l$$28.tail.tail.tail.tail.tail.tail.tail.tail != null) {
              if (l$$28.tail.tail.tail.tail.tail.tail.tail.tail.tail == null) {
                $target$$6 = 0;
                marker = l$$28.tail.tail.tail.tail.tail.tail.tail.head;
                t1 = l$$28.head;
                t2 = l$$28.tail.head;
                t3 = l$$28.tail.tail.head;
                t4 = l$$28.tail.tail.tail.head;
                t5 = l$$28.tail.tail.tail.tail.head;
                t6 = l$$28.tail.tail.tail.tail.tail.head;
                t7 = l$$28.tail.tail.tail.tail.tail.tail.head;
              } else {
                $target$$6 = 3;
              }
            } else {
              $target$$6 = 3;
            }
          } else {
            $target$$6 = 3;
          }
        } else {
          $target$$6 = 3;
        }
      } else {
        $target$$6 = 3;
      }
    } else {
      $target$$6 = 3;
    }
  } else {
    $target$$6 = 3;
  }

  switch ($target$$6) {
    case 0:
      {
        var $target$$7, t8$$1, tcref$$8;

        if (marker.tag === 1) {
          if (marker.fields[1].tail != null) {
            if (marker.fields[1].tail.tail == null) {
              if (tcref$$7 = marker.fields[0], (t8 = marker.fields[1].head, TcGlobals$$tyconRefEq(this$$$42, tcref$$7, this$$$42.v_ref_tuple1_tcr))) {
                $target$$7 = 0;
                t8$$1 = marker.fields[1].head;
                tcref$$8 = marker.fields[0];
              } else {
                $target$$7 = 1;
              }
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
              return (0, _tast.mkRawRefTupleTy)((0, _Types.L)(t1, (0, _Types.L)(t2, (0, _Types.L)(t3, (0, _Types.L)(t4, (0, _Types.L)(t5, (0, _Types.L)(t6, (0, _Types.L)(t7, (0, _Types.L)(t8$$1, (0, _Types.L)())))))))));
            }

          case 1:
            {
              var $target$$8, t8$$3, tcref$$10;

              if (marker.tag === 1) {
                if (marker.fields[1].tail != null) {
                  if (marker.fields[1].tail.tail == null) {
                    if (tcref$$9 = marker.fields[0], (t8$$2 = marker.fields[1].head, TcGlobals$$tyconRefEq(this$$$42, tcref$$9, this$$$42.v_struct_tuple1_tcr))) {
                      $target$$8 = 0;
                      t8$$3 = marker.fields[1].head;
                      tcref$$10 = marker.fields[0];
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
                    return (0, _tast.mkRawStructTupleTy)((0, _Types.L)(t1, (0, _Types.L)(t2, (0, _Types.L)(t3, (0, _Types.L)(t4, (0, _Types.L)(t5, (0, _Types.L)(t6, (0, _Types.L)(t7, (0, _Types.L)(t8$$3, (0, _Types.L)())))))))));
                  }

                case 1:
                  {
                    if (marker.tag === 2) {
                      const t8plus = marker.fields[1];
                      const _structness2 = marker.fields[0];
                      return new _tast.TType(2, "TType_tuple", tupInfo, (0, _List.append)((0, _Types.L)(t1, (0, _Types.L)(t2, (0, _Types.L)(t3, (0, _Types.L)(t4, (0, _Types.L)(t5, (0, _Types.L)(t6, (0, _Types.L)(t7, (0, _Types.L)()))))))), t8plus));
                    } else {
                      return null;
                    }
                  }
              }
            }
        }
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
        return new _tast.TType(2, "TType_tuple", tupInfo, l$$28);
      }
  }
}

function TcGlobals$$decodeTupleTy(this$$$43, tupInfo$$1, l$$29) {
  const matchValue$$4 = TcGlobals$$tryDecodeTupleTy(this$$$43, tupInfo$$1, l$$29);

  if (matchValue$$4 == null) {
    throw new Error("couldn't decode tuple ty");
  } else {
    const ty$$41 = matchValue$$4;
    return ty$$41;
  }
}

function TcGlobals$$decodeTupleTyIfPossible(this$$$44, tcref$$11, tupInfo$$2, l$$30) {
  const matchValue$$5 = TcGlobals$$tryDecodeTupleTy(this$$$44, tupInfo$$2, l$$30);

  if (matchValue$$5 == null) {
    return new _tast.TType(1, "TType_app", tcref$$11, l$$30);
  } else {
    const ty$$42 = matchValue$$5;
    return ty$$42;
  }
}

function TcGlobals$$mk_MFCore_attrib$$Z721C83C5(this$$$45, nm$$178) {
  return new BuiltinAttribInfo(0, "AttribInfo", (0, _il.mkILTyRef)((0, _ilxsettings.ilxFsharpCoreLibScopeRef)(), _ast.FSharpLib$$$Core + "." + nm$$178), mk_MFCore_tcref(this$$$45["fslibCcu@180"], nm$$178));
}

function TcGlobals$$mk_doc$$Z721C83C5(this$$$46, filename$$1) {
  return (0, _il.ILSourceDocument$$$Create$$Z127DAF94)(null, null, null, filename$$1);
}

function TcGlobals$$mkDebuggerNonUserCodeAttribute(this$$$47) {
  return (0, _il.mkILCustomAttribute)(this$$$47["ilg@180"], TcGlobals$$findSysILTypeRef$$Z721C83C5(this$$$47, "System.Diagnostics.DebuggerNonUserCodeAttribute"), (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)());
}

function TcGlobals$$mkCompilerGeneratedAttribute(this$$$48) {
  return (0, _il.mkILCustomAttribute)(this$$$48["ilg@180"], this$$$48.tref_CompilerGeneratedAttribute, (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)());
}

function TcGlobals$$addGeneratedAttrs$$6A1A3D88(this$$$49, attrs) {
  let attribs;
  const matchValue$$6 = this$$$49.generatedAttribsCache;

  if (matchValue$$6.tail == null) {
    const res = (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return !this$$$49.noDebugData ? (0, _Seq.append)((0, _Seq.singleton)(TcGlobals$$mkCompilerGeneratedAttribute(this$$$49)), (0, _Seq.delay)(function () {
        return (0, _Seq.singleton)(TcGlobals$$mkDebuggerNonUserCodeAttribute(this$$$49));
      })) : (0, _Seq.empty)();
    }));
    this$$$49.generatedAttribsCache = res;
    attribs = res;
  } else {
    const res$$1 = matchValue$$6;
    attribs = res$$1;
  }

  return (0, _il.mkILCustomAttrs)((0, _List.append)((0, _il.ILAttributes$$get_AsList)(attrs), attribs));
}

function TcGlobals$$addMethodGeneratedAttrs$$3AF987BF(this$$$50, mdef$$5) {
  return (0, _il.ILMethodDef$$With$$Z3726C02C)(mdef$$5, null, null, null, null, null, null, null, null, null, null, TcGlobals$$addGeneratedAttrs$$6A1A3D88(this$$$50, (0, _il.ILMethodDef$$get_CustomAttrs)(mdef$$5)));
}

function TcGlobals$$addPropertyGeneratedAttrs$$Z3508B099(this$$$51, pdef$$2) {
  return (0, _il.ILPropertyDef$$With$$2CBB49EB)(pdef$$2, null, null, null, null, null, null, null, null, TcGlobals$$addGeneratedAttrs$$6A1A3D88(this$$$51, (0, _il.ILPropertyDef$$get_CustomAttrs)(pdef$$2)));
}

function TcGlobals$$addFieldGeneratedAttrs$$58456522(this$$$52, fdef$$4) {
  return (0, _il.ILFieldDef$$With$$Z1EED4EE7)(fdef$$4, null, null, null, null, null, null, null, TcGlobals$$addGeneratedAttrs$$6A1A3D88(this$$$52, (0, _il.ILFieldDef$$get_CustomAttrs)(fdef$$4)));
}

function TcGlobals$$tref_DebuggerBrowsableAttribute$$Z524259A4(this$$$53, n$$33) {
  let typ_DebuggerBrowsableState;
  const tref$$3 = TcGlobals$$findSysILTypeRef$$Z721C83C5(this$$$53, "System.Diagnostics.DebuggerBrowsableState");
  typ_DebuggerBrowsableState = new _il.ILType(2, "Value", (0, _il.mkILNonGenericTySpec)(tref$$3));
  return (0, _il.mkILCustomAttribute)(this$$$53["ilg@180"], TcGlobals$$findSysILTypeRef$$Z721C83C5(this$$$53, "System.Diagnostics.DebuggerBrowsableAttribute"), (0, _Types.L)(typ_DebuggerBrowsableState, (0, _Types.L)()), (0, _Types.L)(new _il.ILAttribElem(5, "Int32", n$$33), (0, _Types.L)()), (0, _Types.L)());
}

function TcGlobals$$mkDebuggerBrowsableNeverAttribute(this$$$54) {
  const matchValue$$7 = this$$$54.debuggerBrowsableNeverAttributeCache;

  if (matchValue$$7 != null) {
    const res$$3 = matchValue$$7;
    return res$$3;
  } else {
    const res$$2 = TcGlobals$$tref_DebuggerBrowsableAttribute$$Z524259A4(this$$$54, 0);
    this$$$54.debuggerBrowsableNeverAttributeCache = res$$2;
    return res$$2;
  }
}

function TcGlobals$$addNeverAttrs$$6A1A3D88(this$$$55, attrs$$4) {
  return (0, _il.mkILCustomAttrs)((0, _List.append)((0, _il.ILAttributes$$get_AsList)(attrs$$4), (0, _Types.L)(TcGlobals$$mkDebuggerBrowsableNeverAttribute(this$$$55), (0, _Types.L)())));
}

function TcGlobals$$addPropertyNeverAttrs$$Z3508B099(this$$$56, pdef$$3) {
  return (0, _il.ILPropertyDef$$With$$2CBB49EB)(pdef$$3, null, null, null, null, null, null, null, null, TcGlobals$$addNeverAttrs$$6A1A3D88(this$$$56, (0, _il.ILPropertyDef$$get_CustomAttrs)(pdef$$3)));
}

function TcGlobals$$addFieldNeverAttrs$$58456522(this$$$57, fdef$$5) {
  return (0, _il.ILFieldDef$$With$$Z1EED4EE7)(fdef$$5, null, null, null, null, null, null, null, TcGlobals$$addNeverAttrs$$6A1A3D88(this$$$57, (0, _il.ILFieldDef$$get_CustomAttrs)(fdef$$5)));
}

function TcGlobals$$mkDebuggerTypeProxyAttribute$$29CE2F9F(this$$$58, ty$$43) {
  return (0, _il.mkILCustomAttribute)(this$$$58["ilg@180"], TcGlobals$$findSysILTypeRef$$Z721C83C5(this$$$58, "System.Diagnostics.DebuggerTypeProxyAttribute"), (0, _Types.L)((0, _il.ILGlobals$$get_typ_Type)(this$$$58["ilg@180"]), (0, _Types.L)()), (0, _Types.L)(new _il.ILAttribElem(15, "TypeRef", (0, _il.ILType$$get_TypeRef)(ty$$43)), (0, _Types.L)()), (0, _Types.L)());
}

function TcGlobals$$getDecompileTypeDict(this$$$59) {
  const matchValue$$8 = this$$$59.decompileTypeDict;

  if ((0, _Util.equals)(matchValue$$8, null)) {
    const entries = this$$$59.decompileTyconEntries;
    let t;
    const size = entries.length | 0;
    t = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp.HashIdentity$$$Structural)()));

    for (let idx$$1 = 0; idx$$1 <= entries.length - 1; idx$$1++) {
      const forLoopVar = entries[idx$$1];

      if ((0, _tast.EntityRef$$get_CanDeref)(forLoopVar[1])) {
        t.set((0, _tast.EntityRef$$get_Stamp)(forLoopVar[1]), forLoopVar[2]);
      }
    }

    this$$$59.decompileTypeDict = t;
    return t;
  } else {
    const t$$1 = matchValue$$8;
    return t$$1;
  }
}

function TcGlobals$$getBetterTypeDict1(this$$$60) {
  const matchValue$$9 = this$$$60.betterTypeDict1;

  if ((0, _Util.equals)(matchValue$$9, null)) {
    const entries$$1 = this$$$60.betterEntries;
    let t$$2;
    const size$$1 = entries$$1.length | 0;
    t$$2 = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp.HashIdentity$$$Structural)()));

    for (let idx$$2 = 0; idx$$2 <= entries$$1.length - 1; idx$$2++) {
      const forLoopVar$$1 = entries$$1[idx$$2];
      t$$2.set(forLoopVar$$1[0], function (tcref2) {
        return function (tinst2) {
          return TcGlobals$$tyconRefEq(this$$$60, forLoopVar$$1[1], tcref2) ? forLoopVar$$1[2](tinst2) : new _tast.TType(1, "TType_app", tcref2, tinst2);
        };
      });
    }

    this$$$60.betterTypeDict1 = t$$2;
    return t$$2;
  } else {
    const t$$3 = matchValue$$9;
    return t$$3;
  }
}

function TcGlobals$$getBetterTypeDict2(this$$$61) {
  const matchValue$$10 = this$$$61.betterTypeDict2;

  if ((0, _Util.equals)(matchValue$$10, null)) {
    const entries$$2 = this$$$61.betterEntries;
    let t$$4;
    const size$$2 = entries$$2.length | 0;
    t$$4 = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp.HashIdentity$$$Structural)()));

    for (let idx$$3 = 0; idx$$3 <= entries$$2.length - 1; idx$$3++) {
      const forLoopVar$$2 = entries$$2[idx$$3];

      if ((0, _tast.EntityRef$$get_CanDeref)(forLoopVar$$2[1])) {
        t$$4.set((0, _tast.EntityRef$$get_Stamp)(forLoopVar$$2[1]), forLoopVar$$2[2]);
      }
    }

    this$$$61.betterTypeDict2 = t$$4;
    return t$$4;
  } else {
    const t$$5 = matchValue$$10;
    return t$$5;
  }
}

function TcGlobals$$decompileTy(this$$$62, tcref$$15, tinst$$3) {
  if (this$$$62["compilingFslib@180"]) {
    return new _tast.TType(1, "TType_app", tcref$$15, tinst$$3);
  } else {
    const dict = TcGlobals$$getDecompileTypeDict(this$$$62);
    const patternInput$$4 = (0, _Util.tryGetValue)(dict, (0, _tast.EntityRef$$get_Stamp)(tcref$$15), null);

    if (patternInput$$4[0]) {
      return patternInput$$4[1](tinst$$3);
    } else {
      return new _tast.TType(1, "TType_app", tcref$$15, tinst$$3);
    }
  }
}

function TcGlobals$$improveTy(this$$$63, tcref$$16, tinst$$4) {
  if (this$$$63["compilingFslib@180"]) {
    const dict$$1 = TcGlobals$$getBetterTypeDict1(this$$$63);
    const patternInput$$5 = (0, _Util.tryGetValue)(dict$$1, (0, _tast.EntityRef$$get_LogicalName)(tcref$$16), null);

    if (patternInput$$5[0]) {
      return patternInput$$5[1](tcref$$16)(tinst$$4);
    } else {
      return new _tast.TType(1, "TType_app", tcref$$16, tinst$$4);
    }
  } else {
    const dict$$2 = TcGlobals$$getBetterTypeDict2(this$$$63);
    const patternInput$$6 = (0, _Util.tryGetValue)(dict$$2, (0, _tast.EntityRef$$get_Stamp)(tcref$$16), null);

    if (patternInput$$6[0]) {
      return patternInput$$6[1](tinst$$4);
    } else {
      return new _tast.TType(1, "TType_app", tcref$$16, tinst$$4);
    }
  }
}