"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableMorphCustomAttributeData = enableMorphCustomAttributeData;
exports.disableMorphCustomAttributeData = disableMorphCustomAttributeData;
exports.code_instr2instr = code_instr2instr;
exports.code_instr2instrs = code_instr2instrs;
exports.code_instr2instr_ty2ty = code_instr2instr_ty2ty;
exports.ty_tref2tref = ty_tref2tref;
exports.tspec_tref2tref = tspec_tref2tref;
exports.ty_scoref2scoref_tyvar2ty = ty_scoref2scoref_tyvar2ty;
exports.tspec_scoref2scoref_tyvar2ty = tspec_scoref2scoref_tyvar2ty;
exports.callsig_scoref2scoref_tyvar2ty = callsig_scoref2scoref_tyvar2ty;
exports.tys_scoref2scoref_tyvar2ty = tys_scoref2scoref_tyvar2ty;
exports.gparams_scoref2scoref_tyvar2ty = gparams_scoref2scoref_tyvar2ty;
exports.gparam_scoref2scoref_tyvar2ty = gparam_scoref2scoref_tyvar2ty;
exports.morphILScopeRefsInILTypeRef = morphILScopeRefsInILTypeRef;
exports.callsig_ty2ty = callsig_ty2ty;
exports.gparam_ty2ty = gparam_ty2ty;
exports.gparams_ty2ty = gparams_ty2ty;
exports.tys_ty2ty = tys_ty2ty;
exports.mref_ty2ty = mref_ty2ty;
exports.mspec_ty2ty = mspec_ty2ty;
exports.fref_ty2ty = fref_ty2ty;
exports.fspec_ty2ty = fspec_ty2ty;
exports.celem_ty2ty = celem_ty2ty;
exports.cnamedarg_ty2ty = cnamedarg_ty2ty;
exports.cattr_ty2ty = cattr_ty2ty;
exports.cattrs_ty2ty = cattrs_ty2ty;
exports.fdef_ty2ty = fdef_ty2ty;
exports.local_ty2ty = local_ty2ty;
exports.varargs_ty2ty = varargs_ty2ty;
exports.morphILTypesInILInstr = morphILTypesInILInstr;
exports.return_ty2ty = return_ty2ty;
exports.param_ty2ty = param_ty2ty;
exports.morphILMethodDefs = morphILMethodDefs;
exports.fdefs_fdef2fdef = fdefs_fdef2fdef;
exports.morphILTypeDefs = morphILTypeDefs;
exports.locals_ty2ty = locals_ty2ty;
exports.ilmbody_instr2instr_ty2ty = ilmbody_instr2instr_ty2ty;
exports.morphILMethodBody = morphILMethodBody;
exports.ospec_ty2ty = ospec_ty2ty;
exports.mdef_ty2ty_ilmbody2ilmbody = mdef_ty2ty_ilmbody2ilmbody;
exports.fdefs_ty2ty = fdefs_ty2ty;
exports.mdefs_ty2ty_ilmbody2ilmbody = mdefs_ty2ty_ilmbody2ilmbody;
exports.mimpl_ty2ty = mimpl_ty2ty;
exports.edef_ty2ty = edef_ty2ty;
exports.pdef_ty2ty = pdef_ty2ty;
exports.pdefs_ty2ty = pdefs_ty2ty;
exports.edefs_ty2ty = edefs_ty2ty;
exports.mimpls_ty2ty = mimpls_ty2ty;
exports.tdef_ty2ty_ilmbody2ilmbody_mdefs2mdefs = tdef_ty2ty_ilmbody2ilmbody_mdefs2mdefs;
exports.tdefs_ty2ty_ilmbody2ilmbody_mdefs2mdefs = tdefs_ty2ty_ilmbody2ilmbody_mdefs2mdefs;
exports.manifest_ty2ty = manifest_ty2ty;
exports.morphILTypeInILModule_ilmbody2ilmbody_mdefs2mdefs = morphILTypeInILModule_ilmbody2ilmbody_mdefs2mdefs;
exports.module_instr2instr_ty2ty = module_instr2instr_ty2ty;
exports.morphILInstrsAndILTypesInILModule = morphILInstrsAndILTypesInILModule;
exports.morphILInstrsInILCode = morphILInstrsInILCode;
exports.morphILTypeInILModule = morphILTypeInILModule;
exports.morphILTypeRefsInILModuleMemoized = morphILTypeRefsInILModuleMemoized;
exports.morphILScopeRefsInILModuleMemoized = morphILScopeRefsInILModuleMemoized;
exports.morphCustomAttributeData = void 0;

var _Util = require("../fable-core.2.0.3/Util");

var _il = require("./il");

var _Array = require("../fable-core.2.0.3/Array");

var _Seq = require("../fable-core.2.0.3/Seq");

var _FSharp = require("../fable-core.2.0.3/FSharp.Collections");

var _Map = require("../fable-core.2.0.3/Map");

var _List = require("../fable-core.2.0.3/List");

var _Option = require("../fable-core.2.0.3/Option");

var _Types = require("../fable-core.2.0.3/Types");

var _illib = require("./illib");

const morphCustomAttributeData = (0, _Util.createAtom)(false);
exports.morphCustomAttributeData = morphCustomAttributeData;

function enableMorphCustomAttributeData() {
  morphCustomAttributeData(true);
}

function disableMorphCustomAttributeData() {
  morphCustomAttributeData(false);
}

function code_instr2instr(f, code) {
  return new _il.ILCode(code.Labels, (0, _Array.map)(f, code.Instrs, Array), code.Exceptions, code.Locals);
}

function code_instr2instrs(f$$1, code$$1) {
  const instrs = code$$1.Instrs;
  const codebuf = [];
  const adjust = new Map([]);
  let old = 0;
  let nw = 0;

  for (let idx = 0; idx <= instrs.length - 1; idx++) {
    const instr = instrs[idx];
    adjust.set(old, nw);
    const instrs$$1 = f$$1(instr);
    (0, _Seq.iterate)(function (instr2) {
      codebuf.push(instr2);
      nw = nw + 1;
    }, instrs$$1);
    old = old + 1;
  }

  adjust.set(old, nw);
  let labels;
  let dict;
  const size = code$$1.Labels.size | 0;
  dict = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp.HashIdentity$$$Structural)()));
  (0, _Seq.iterate)(function (kvp) {
    dict.set(kvp[0], adjust.get(kvp[1]));
  }, code$$1.Labels);
  labels = dict;
  return new _il.ILCode(labels, codebuf.slice(), code$$1.Exceptions, code$$1.Locals);
}

function code_instr2instr_ty2ty(finstr, fty, c) {
  const c$$1 = code_instr2instr(finstr, c);
  return new _il.ILCode(c$$1.Labels, c$$1.Instrs, (0, _List.map)(function mapping(e) {
    var ilty, b, cl;
    return new _il.ILExceptionSpec(e.Range, e.Clause.tag === 3 ? (ilty = e.Clause.fields[0], (b = e.Clause.fields[1], new _il.ILExceptionClause(3, "TypeCatch", fty(ilty), b))) : (cl = e.Clause, cl));
  }, c$$1.Exceptions), c$$1.Locals);
}

function ty_tref2tref(f$$2, x) {
  switch (x.tag) {
    case 6:
      {
        const x$$1 = x.fields[0];
        return new _il.ILType(6, "FunctionPointer", new _il.ILCallingSignature(x$$1.CallingConv, (0, _List.map)(function (x$$2) {
          return ty_tref2tref(f$$2, x$$2);
        }, x$$1.ArgTypes), ty_tref2tref(f$$2, x$$1.ReturnType)));
      }

    case 5:
      {
        const t$$1 = x.fields[0];
        return new _il.ILType(5, "Byref", ty_tref2tref(f$$2, t$$1));
      }

    case 3:
      {
        const cr = x.fields[0];
        return (0, _il.mkILBoxedType)(tspec_tref2tref(f$$2, cr));
      }

    case 2:
      {
        const ir = x.fields[0];
        return new _il.ILType(2, "Value", tspec_tref2tref(f$$2, ir));
      }

    case 1:
      {
        const ty = x.fields[1];
        const s = x.fields[0];
        return new _il.ILType(1, "Array", s, ty_tref2tref(f$$2, ty));
      }

    case 7:
      {
        const v = x.fields[0];
        return new _il.ILType(7, "TypeVar", v);
      }

    case 8:
      {
        const ty$$1 = x.fields[2];
        const tref = x.fields[1];
        const req = x.fields[0];
        return new _il.ILType(8, "Modified", req, f$$2(tref), ty_tref2tref(f$$2, ty$$1));
      }

    case 0:
      {
        return new _il.ILType(0, "Void");
      }

    default:
      {
        const t = x.fields[0];
        return new _il.ILType(4, "Ptr", ty_tref2tref(f$$2, t));
      }
  }
}

function tspec_tref2tref(f$$3, x$$3) {
  return (0, _il.mkILTySpec)(f$$3((0, _il.ILTypeSpec$$get_TypeRef)(x$$3)), (0, _List.map)(function (x$$4) {
    return ty_tref2tref(f$$3, x$$4);
  }, (0, _il.ILTypeSpec$$get_GenericArgs)(x$$3)));
}

function ty_scoref2scoref_tyvar2ty(_arg1_0, _arg1_1, x$$5) {
  const _arg1$$1 = [_arg1_0, _arg1_1];
  const fs = _arg1$$1;
  const ftyvar = fs[1];
  const _fscope = fs[0];

  switch (x$$5.tag) {
    case 4:
      {
        const t$$2 = x$$5.fields[0];
        return new _il.ILType(4, "Ptr", ty_scoref2scoref_tyvar2ty(fs[0], fs[1], t$$2));
      }

    case 6:
      {
        const t$$3 = x$$5.fields[0];
        return new _il.ILType(6, "FunctionPointer", callsig_scoref2scoref_tyvar2ty(fs[0], fs[1], t$$3));
      }

    case 5:
      {
        const t$$4 = x$$5.fields[0];
        return new _il.ILType(5, "Byref", ty_scoref2scoref_tyvar2ty(fs[0], fs[1], t$$4));
      }

    case 3:
      {
        const cr$$1 = x$$5.fields[0];
        return (0, _il.mkILBoxedType)(tspec_scoref2scoref_tyvar2ty(fs[0], fs[1], cr$$1));
      }

    case 2:
      {
        const ir$$1 = x$$5.fields[0];
        return new _il.ILType(2, "Value", tspec_scoref2scoref_tyvar2ty(fs[0], fs[1], ir$$1));
      }

    case 1:
      {
        const ty$$2 = x$$5.fields[1];
        const s$$1 = x$$5.fields[0];
        return new _il.ILType(1, "Array", s$$1, ty_scoref2scoref_tyvar2ty(fs[0], fs[1], ty$$2));
      }

    case 7:
      {
        const v$$1 = x$$5.fields[0];
        return ftyvar(v$$1);
      }

    default:
      {
        const x$$6 = x$$5;
        return x$$6;
      }
  }
}

function tspec_scoref2scoref_tyvar2ty(fs_0, fs_1, x$$7) {
  const fs$$1 = [fs_0, fs_1];
  return (0, _il.ILTypeSpec$$$Create$$7469E1FB)(morphILScopeRefsInILTypeRef(fs$$1[0], (0, _il.ILTypeSpec$$get_TypeRef)(x$$7)), tys_scoref2scoref_tyvar2ty(fs$$1[0], fs$$1[1], (0, _il.ILTypeSpec$$get_GenericArgs)(x$$7)));
}

function callsig_scoref2scoref_tyvar2ty(f_0, f_1, x$$8) {
  const f$$4 = [f_0, f_1];
  return new _il.ILCallingSignature(x$$8.CallingConv, (0, _List.map)(function (x$$9) {
    return ty_scoref2scoref_tyvar2ty(f$$4[0], f$$4[1], x$$9);
  }, x$$8.ArgTypes), ty_scoref2scoref_tyvar2ty(f$$4[0], f$$4[1], x$$8.ReturnType));
}

function tys_scoref2scoref_tyvar2ty(f_0$$1, f_1$$1, i$$1) {
  const f$$5 = [f_0$$1, f_1$$1];
  return (0, _List.map)(function (x$$11) {
    return ty_scoref2scoref_tyvar2ty(f$$5[0], f$$5[1], x$$11);
  }, i$$1);
}

function gparams_scoref2scoref_tyvar2ty(f$$6, i$$2) {
  return (0, _List.map)(function (i$$3) {
    return gparam_scoref2scoref_tyvar2ty(f$$6, i$$3);
  }, i$$2);
}

function gparam_scoref2scoref_tyvar2ty(_f, i$$4) {
  return i$$4;
}

function morphILScopeRefsInILTypeRef(fscope, x$$12) {
  return (0, _il.ILTypeRef$$$Create$$113F1D6)(fscope((0, _il.ILTypeRef$$get_Scope)(x$$12)), (0, _il.ILTypeRef$$get_Enclosing)(x$$12), (0, _il.ILTypeRef$$get_Name)(x$$12));
}

function callsig_ty2ty(f$$7, x$$13) {
  return new _il.ILCallingSignature(x$$13.CallingConv, (0, _List.map)(f$$7, x$$13.ArgTypes), f$$7(x$$13.ReturnType));
}

function gparam_ty2ty(f$$8, gf) {
  return new _il.ILGenericParameterDef(gf.Name, (0, _List.map)(f$$8, gf.Constraints), gf.Variance, gf.HasReferenceTypeConstraint, gf.HasNotNullableValueTypeConstraint, gf.HasDefaultConstructorConstraint, gf.CustomAttrsStored, gf.MetadataIndex);
}

function gparams_ty2ty(f$$9, gfs) {
  return (0, _List.map)(function (gf$$1) {
    return gparam_ty2ty(f$$9, gf$$1);
  }, gfs);
}

function tys_ty2ty(f$$10, x$$14) {
  return (0, _List.map)(f$$10, x$$14);
}

function mref_ty2ty(f$$11, x$$15) {
  return (0, _il.ILMethodRef$$$Create$$Z6DE7B28E)((0, _il.ILType$$get_TypeRef)(f$$11((0, _il.mkILBoxedType)((0, _il.mkILNonGenericTySpec)((0, _il.ILMethodRef$$get_DeclaringTypeRef)(x$$15))))), (0, _il.ILMethodRef$$get_CallingConv)(x$$15), (0, _il.ILMethodRef$$get_Name)(x$$15), (0, _il.ILMethodRef$$get_GenericArity)(x$$15), (0, _List.map)(f$$11, (0, _il.ILMethodRef$$get_ArgTypes)(x$$15)), f$$11((0, _il.ILMethodRef$$get_ReturnType)(x$$15)));
}

function mspec_ty2ty(_arg1_0$$1, _arg1_1$$1, x$$16) {
  const _arg1$$2 = [_arg1_0$$1, (0, _Util.curry)(2, _arg1_1$$1)];
  return (0, _il.mkILMethSpecForMethRefInTy)(mref_ty2ty(_arg1$$2[1](new _Option.Choice(0, "Choice1Of2", x$$16)), (0, _il.ILMethodSpec$$get_MethodRef)(x$$16)), _arg1$$2[0]((0, _il.ILMethodSpec$$get_DeclaringType)(x$$16)), tys_ty2ty(_arg1$$2[0], (0, _il.ILMethodSpec$$get_GenericArgs)(x$$16)));
}

function fref_ty2ty(f$$12, x$$17) {
  return new _il.ILFieldRef((0, _il.ILType$$get_TypeRef)(f$$12((0, _il.mkILBoxedType)((0, _il.mkILNonGenericTySpec)(x$$17.DeclaringTypeRef)))), x$$17.Name, f$$12(x$$17.Type));
}

function fspec_ty2ty(_arg1_0$$2, _arg1_1$$2, x$$18) {
  const _arg1$$3 = [_arg1_0$$2, (0, _Util.curry)(2, _arg1_1$$2)];
  return new _il.ILFieldSpec(fref_ty2ty(_arg1$$3[1](new _Option.Choice(1, "Choice2Of2", x$$18)), x$$18.FieldRef), _arg1$$3[0](x$$18.DeclaringType));
}

function celem_ty2ty(f$$13, celem) {
  var $target$$46, ty$$3, tref$$1, elemTy, elems;

  if (celem.tag === 14) {
    if (celem.fields[0] != null) {
      $target$$46 = 0;
      ty$$3 = celem.fields[0];
    } else {
      $target$$46 = 3;
    }
  } else if (celem.tag === 15) {
    if (celem.fields[0] != null) {
      $target$$46 = 1;
      tref$$1 = celem.fields[0];
    } else {
      $target$$46 = 3;
    }
  } else if (celem.tag === 16) {
    $target$$46 = 2;
    elemTy = celem.fields[0];
    elems = celem.fields[1];
  } else {
    $target$$46 = 3;
  }

  switch ($target$$46) {
    case 0:
      {
        return new _il.ILAttribElem(14, "Type", f$$13(ty$$3));
      }

    case 1:
      {
        return new _il.ILAttribElem(15, "TypeRef", (0, _il.ILType$$get_TypeRef)(f$$13((0, _il.mkILBoxedType)((0, _il.mkILNonGenericTySpec)(tref$$1)))));
      }

    case 2:
      {
        return new _il.ILAttribElem(16, "Array", f$$13(elemTy), (0, _List.map)(function (celem$$1) {
          return celem_ty2ty(f$$13, celem$$1);
        }, elems));
      }

    case 3:
      {
        return celem;
      }
  }
}

function cnamedarg_ty2ty(f$$14, _arg1_0$$3, _arg1_1$$3, _arg1_2, _arg1_3) {
  const _arg1$$4 = [_arg1_0$$3, _arg1_1$$3, _arg1_2, _arg1_3];
  return [_arg1$$4[0], f$$14(_arg1$$4[1]), _arg1$$4[2], celem_ty2ty(f$$14, _arg1$$4[3])];
}

function cattr_ty2ty(ilg, f$$15, c$$2) {
  const meth = mspec_ty2ty(f$$15, (0, _Util.uncurry)(2, function (_arg1$$5) {
    return f$$15;
  }), c$$2.Method);

  if (morphCustomAttributeData()) {
    try {
      const patternInput = (0, _il.decodeILAttribData)(ilg, c$$2);
      const elems$$2 = (0, _List.map)(function mapping$$1(celem$$2) {
        return celem_ty2ty(f$$15, celem$$2);
      }, patternInput[0]);
      const namedArgs$$1 = (0, _List.map)(function mapping$$2(tupledArg) {
        return cnamedarg_ty2ty(f$$15, tupledArg[0], tupledArg[1], tupledArg[2], tupledArg[3]);
      }, patternInput[1]);
      return (0, _il.mkILCustomAttribMethRef)(ilg, meth, elems$$2, namedArgs$$1);
    } catch (matchValue) {
      return new _il.ILAttribute(meth, c$$2.Data, c$$2.Elements);
    }
  } else {
    return new _il.ILAttribute(meth, c$$2.Data, c$$2.Elements);
  }
}

function cattrs_ty2ty(ilg$$1, f$$16, cs) {
  return (0, _il.mkILCustomAttrs)((0, _List.map)(function (c$$3) {
    return cattr_ty2ty(ilg$$1, f$$16, c$$3);
  }, (0, _il.ILAttributes$$get_AsList)(cs)));
}

function fdef_ty2ty(ilg$$2, ftye, fd) {
  return (0, _il.ILFieldDef$$With$$Z1EED4EE7)(fd, null, ftye((0, _il.ILFieldDef$$get_FieldType)(fd)), null, null, null, null, null, cattrs_ty2ty(ilg$$2, ftye, (0, _il.ILFieldDef$$get_CustomAttrs)(fd)));
}

function local_ty2ty(f$$17, l) {
  return new _il.ILLocal(f$$17(l.Type), l.IsPinned, l.DebugInfo);
}

function varargs_ty2ty(f$$18, varargs) {
  return (0, _Option.defaultArg)(varargs, null, function (list$$3) {
    return (0, _List.map)(f$$18, list$$3);
  });
}

function morphILTypesInILInstr(_arg1_0$$4, _arg1_1$$4, i$$5) {
  const _arg1$$6 = [(0, _Util.curry)(2, _arg1_0$$4), (0, _Util.curry)(3, _arg1_1$$4)];

  const factualty$$3 = _arg1$$6[0](i$$5);

  const conv_fspec = function conv_fspec(fr) {
    return fspec_ty2ty(factualty$$3, (0, _Util.uncurry)(2, _arg1$$6[1](i$$5)), fr);
  };

  const conv_mspec = function conv_mspec(mr) {
    return mspec_ty2ty(factualty$$3, (0, _Util.uncurry)(2, _arg1$$6[1](i$$5)), mr);
  };

  switch (i$$5.tag) {
    case 51:
      {
        const varargs$$1 = i$$5.fields[2];
        const mref = i$$5.fields[1];
        const a = i$$5.fields[0];
        return new _il.ILInstr(51, "I_calli", a, callsig_ty2ty(factualty$$3, mref), varargs_ty2ty(factualty$$3, varargs$$1));
      }

    case 48:
      {
        const varargs$$2 = i$$5.fields[2];
        const mr$$1 = i$$5.fields[1];
        const a$$1 = i$$5.fields[0];
        return new _il.ILInstr(48, "I_call", a$$1, conv_mspec(mr$$1), varargs_ty2ty(factualty$$3, varargs$$2));
      }

    case 49:
      {
        const varargs$$3 = i$$5.fields[2];
        const mr$$2 = i$$5.fields[1];
        const a$$2 = i$$5.fields[0];
        return new _il.ILInstr(49, "I_callvirt", a$$2, conv_mspec(mr$$2), varargs_ty2ty(factualty$$3, varargs$$3));
      }

    case 50:
      {
        const varargs$$4 = i$$5.fields[3];
        const ty$$5 = i$$5.fields[1];
        const mr$$3 = i$$5.fields[2];
        const a$$3 = i$$5.fields[0];
        return new _il.ILInstr(50, "I_callconstraint", a$$3, factualty$$3(ty$$5), conv_mspec(mr$$3), varargs_ty2ty(factualty$$3, varargs$$4));
      }

    case 53:
      {
        const varargs$$5 = i$$5.fields[1];
        const mr$$4 = i$$5.fields[0];
        return new _il.ILInstr(53, "I_newobj", conv_mspec(mr$$4), varargs_ty2ty(factualty$$3, varargs$$5));
      }

    case 52:
      {
        const mr$$5 = i$$5.fields[0];
        return new _il.ILInstr(52, "I_ldftn", conv_mspec(mr$$5));
      }

    case 69:
      {
        const mr$$6 = i$$5.fields[0];
        return new _il.ILInstr(69, "I_ldvirtftn", conv_mspec(mr$$6));
      }

    case 60:
      {
        const fr$$1 = i$$5.fields[2];
        const b$$1 = i$$5.fields[1];
        const a$$4 = i$$5.fields[0];
        return new _il.ILInstr(60, "I_ldfld", a$$4, b$$1, conv_fspec(fr$$1));
      }

    case 59:
      {
        const fr$$2 = i$$5.fields[1];
        const a$$5 = i$$5.fields[0];
        return new _il.ILInstr(59, "I_ldsfld", a$$5, conv_fspec(fr$$2));
      }

    case 61:
      {
        const fr$$3 = i$$5.fields[0];
        return new _il.ILInstr(61, "I_ldsflda", conv_fspec(fr$$3));
      }

    case 62:
      {
        const fr$$4 = i$$5.fields[0];
        return new _il.ILInstr(62, "I_ldflda", conv_fspec(fr$$4));
      }

    case 64:
      {
        const fr$$5 = i$$5.fields[2];
        const b$$2 = i$$5.fields[1];
        const a$$6 = i$$5.fields[0];
        return new _il.ILInstr(64, "I_stfld", a$$6, b$$2, conv_fspec(fr$$5));
      }

    case 63:
      {
        const fr$$6 = i$$5.fields[1];
        const a$$7 = i$$5.fields[0];
        return new _il.ILInstr(63, "I_stsfld", a$$7, conv_fspec(fr$$6));
      }

    case 67:
      {
        const ty$$6 = i$$5.fields[0];
        return new _il.ILInstr(67, "I_castclass", factualty$$3(ty$$6));
      }

    case 66:
      {
        const ty$$7 = i$$5.fields[0];
        return new _il.ILInstr(66, "I_isinst", factualty$$3(ty$$7));
      }

    case 71:
      {
        const ty$$8 = i$$5.fields[0];
        return new _il.ILInstr(71, "I_initobj", factualty$$3(ty$$8));
      }

    case 70:
      {
        const ty$$9 = i$$5.fields[0];
        return new _il.ILInstr(70, "I_cpobj", factualty$$3(ty$$9));
      }

    case 73:
      {
        const vol = i$$5.fields[1];
        const ty$$10 = i$$5.fields[2];
        const al = i$$5.fields[0];
        return new _il.ILInstr(73, "I_stobj", al, vol, factualty$$3(ty$$10));
      }

    case 72:
      {
        const vol$$1 = i$$5.fields[1];
        const ty$$11 = i$$5.fields[2];
        const al$$1 = i$$5.fields[0];
        return new _il.ILInstr(72, "I_ldobj", al$$1, vol$$1, factualty$$3(ty$$11));
      }

    case 74:
      {
        const ty$$12 = i$$5.fields[0];
        return new _il.ILInstr(74, "I_box", factualty$$3(ty$$12));
      }

    case 75:
      {
        const ty$$13 = i$$5.fields[0];
        return new _il.ILInstr(75, "I_unbox", factualty$$3(ty$$13));
      }

    case 76:
      {
        const ty$$14 = i$$5.fields[0];
        return new _il.ILInstr(76, "I_unbox_any", factualty$$3(ty$$14));
      }

    case 81:
      {
        const ty$$15 = i$$5.fields[1];
        const shape = i$$5.fields[0];
        return new _il.ILInstr(81, "I_ldelem_any", shape, factualty$$3(ty$$15));
      }

    case 82:
      {
        const ty$$16 = i$$5.fields[1];
        const shape$$1 = i$$5.fields[0];
        return new _il.ILInstr(82, "I_stelem_any", shape$$1, factualty$$3(ty$$16));
      }

    case 83:
      {
        const ty$$17 = i$$5.fields[1];
        const shape$$2 = i$$5.fields[0];
        return new _il.ILInstr(83, "I_newarr", shape$$2, factualty$$3(ty$$17));
      }

    case 80:
      {
        const ty$$18 = i$$5.fields[3];
        const shape$$3 = i$$5.fields[2];
        const ro = i$$5.fields[0];
        const isNativePtr = i$$5.fields[1];
        return new _il.ILInstr(80, "I_ldelema", ro, isNativePtr, shape$$3, factualty$$3(ty$$18));
      }

    case 77:
      {
        const ty$$19 = i$$5.fields[0];
        return new _il.ILInstr(77, "I_sizeof", factualty$$3(ty$$19));
      }

    case 68:
      {
        const tok = i$$5.fields[0];

        switch (tok.tag) {
          case 1:
            {
              const mr$$7 = tok.fields[0];
              return new _il.ILInstr(68, "I_ldtoken", new _il.ILToken(1, "ILMethod", conv_mspec(mr$$7)));
            }

          case 2:
            {
              const fr$$7 = tok.fields[0];
              return new _il.ILInstr(68, "I_ldtoken", new _il.ILToken(2, "ILField", conv_fspec(fr$$7)));
            }

          default:
            {
              const ty$$20 = tok.fields[0];
              return new _il.ILInstr(68, "I_ldtoken", new _il.ILToken(0, "ILType", factualty$$3(ty$$20)));
            }
        }
      }

    default:
      {
        const x$$19 = i$$5;
        return x$$19;
      }
  }
}

function return_ty2ty(ilg$$3, f$$19, r) {
  return new _il.ILReturn(r.Marshal, f$$19(r.Type), (0, _il.storeILCustomAttrs)(cattrs_ty2ty(ilg$$3, f$$19, (0, _il.ILReturn$$get_CustomAttrs)(r))), r.MetadataIndex);
}

function param_ty2ty(ilg$$4, f$$20, p) {
  return new _il.ILParameter(p.Name, f$$20(p.Type), p.Default, p.Marshal, p.IsIn, p.IsOut, p.IsOptional, (0, _il.storeILCustomAttrs)(cattrs_ty2ty(ilg$$4, f$$20, (0, _il.ILParameter$$get_CustomAttrs)(p))), p.MetadataIndex);
}

function morphILMethodDefs(f$$21, m) {
  return (0, _il.mkILMethods)((0, _List.map)(f$$21, (0, _il.ILMethodDefs$$get_AsList)(m)));
}

function fdefs_fdef2fdef(f$$22, m$$1) {
  return (0, _il.mkILFields)((0, _List.map)(f$$22, (0, _il.ILFieldDefs$$get_AsList)(m$$1)));
}

function morphILTypeDefs(f$$23, m$$2) {
  return (0, _il.mkILTypeDefsFromArray)((0, _Array.map)(f$$23, (0, _il.ILTypeDefs$$get_AsArray)(m$$2), Array));
}

function locals_ty2ty(f$$24, ls) {
  return (0, _List.map)(function (l$$1) {
    return local_ty2ty(f$$24, l$$1);
  }, ls);
}

function ilmbody_instr2instr_ty2ty(fs_0$$1, fs_1$$1, il) {
  const fs$$2 = [fs_0$$1, fs_1$$1];
  const ftye$$1 = fs$$2[1];
  const finstr$$1 = fs$$2[0];
  return new _il.ILMethodBody(il.IsZeroInit, il.MaxStack, il.NoInlining, il.AggressiveInlining, locals_ty2ty(ftye$$1, il.Locals), code_instr2instr_ty2ty(finstr$$1, ftye$$1, il.Code), il.SourceMarker);
}

function morphILMethodBody(filmbody, x$$20) {
  let c$$4;
  const matchValue$$1 = (0, _il.ILLazyMethodBody$$get_Contents)(x$$20);

  if (matchValue$$1.tag === 0) {
    const il$$1 = matchValue$$1.fields[0];
    c$$4 = new _il.MethodBody(0, "IL", filmbody(il$$1));
  } else {
    const x$$21 = matchValue$$1;
    c$$4 = x$$21;
  }

  return (0, _il.mkMethBodyAux)(c$$4);
}

function ospec_ty2ty(f$$25, _arg1$$7) {
  const ty$$21 = _arg1$$7.fields[1];
  const mref$$1 = _arg1$$7.fields[0];
  return new _il.ILOverridesSpec(0, "OverridesSpec", mref_ty2ty(f$$25, mref$$1), f$$25(ty$$21));
}

function mdef_ty2ty_ilmbody2ilmbody(ilg$$5, fs_0$$2, fs_1$$2, md) {
  const fs$$3 = [(0, _Util.curry)(2, fs_0$$2), (0, _Util.curry)(2, fs_1$$2)];
  const ftye$$2 = fs$$3[0];
  const filmbody$$1 = fs$$3[1];
  const ftye$0027 = ftye$$2(md);
  const body$0027 = morphILMethodBody(filmbody$$1(md), (0, _il.ILMethodDef$$get_Body)(md));
  return (0, _il.ILMethodDef$$With$$Z3726C02C)(md, null, null, null, null, (0, _List.map)(function (p$$1) {
    return param_ty2ty(ilg$$5, ftye$0027, p$$1);
  }, (0, _il.ILMethodDef$$get_Parameters)(md)), return_ty2ty(ilg$$5, ftye$0027, (0, _il.ILMethodDef$$get_Return)(md)), body$0027, null, null, gparams_ty2ty(ftye$0027, (0, _il.ILMethodDef$$get_GenericParams)(md)), cattrs_ty2ty(ilg$$5, ftye$0027, (0, _il.ILMethodDef$$get_CustomAttrs)(md)));
}

function fdefs_ty2ty(ilg$$6, f$$26, x$$22) {
  return fdefs_fdef2fdef(function (fd$$1) {
    return fdef_ty2ty(ilg$$6, f$$26, fd$$1);
  }, x$$22);
}

function mdefs_ty2ty_ilmbody2ilmbody(ilg$$7, fs_0$$3, fs_1$$3, x$$23) {
  const fs$$4 = [(0, _Util.curry)(2, fs_0$$3), (0, _Util.curry)(2, fs_1$$3)];
  return morphILMethodDefs(function (md$$1) {
    return mdef_ty2ty_ilmbody2ilmbody(ilg$$7, (0, _Util.uncurry)(2, fs$$4[0]), (0, _Util.uncurry)(2, fs$$4[1]), md$$1);
  }, x$$23);
}

function mimpl_ty2ty(f$$27, e$$1) {
  return new _il.ILMethodImplDef(ospec_ty2ty(f$$27, e$$1.Overrides), mspec_ty2ty(f$$27, (0, _Util.uncurry)(2, function (_arg1$$8) {
    return f$$27;
  }), e$$1.OverrideBy));
}

function edef_ty2ty(ilg$$8, f$$28, e$$2) {
  return (0, _il.ILEventDef$$With$$ZAE8B55E)(e$$2, (0, _Option.some)((0, _Option.defaultArg)((0, _il.ILEventDef$$get_EventType)(e$$2), null, f$$28)), null, null, mref_ty2ty(f$$28, (0, _il.ILEventDef$$get_AddMethod)(e$$2)), mref_ty2ty(f$$28, (0, _il.ILEventDef$$get_RemoveMethod)(e$$2)), (0, _Option.some)((0, _Option.defaultArg)((0, _il.ILEventDef$$get_FireMethod)(e$$2), null, function (x$$24) {
    return mref_ty2ty(f$$28, x$$24);
  })), (0, _List.map)(function (x$$25) {
    return mref_ty2ty(f$$28, x$$25);
  }, (0, _il.ILEventDef$$get_OtherMethods)(e$$2)), cattrs_ty2ty(ilg$$8, f$$28, (0, _il.ILEventDef$$get_CustomAttrs)(e$$2)));
}

function pdef_ty2ty(ilg$$9, f$$29, p$$2) {
  return (0, _il.ILPropertyDef$$With$$2CBB49EB)(p$$2, null, null, (0, _Option.some)((0, _Option.defaultArg)((0, _il.ILPropertyDef$$get_SetMethod)(p$$2), null, function (x$$26) {
    return mref_ty2ty(f$$29, x$$26);
  })), (0, _Option.some)((0, _Option.defaultArg)((0, _il.ILPropertyDef$$get_GetMethod)(p$$2), null, function (x$$27) {
    return mref_ty2ty(f$$29, x$$27);
  })), null, f$$29((0, _il.ILPropertyDef$$get_PropertyType)(p$$2)), null, (0, _List.map)(f$$29, (0, _il.ILPropertyDef$$get_Args)(p$$2)), cattrs_ty2ty(ilg$$9, f$$29, (0, _il.ILPropertyDef$$get_CustomAttrs)(p$$2)));
}

function pdefs_ty2ty(ilg$$10, f$$30, pdefs) {
  return (0, _il.mkILProperties)((0, _List.map)(function (p$$3) {
    return pdef_ty2ty(ilg$$10, f$$30, p$$3);
  }, (0, _il.ILPropertyDefs$$get_AsList)(pdefs)));
}

function edefs_ty2ty(ilg$$11, f$$31, edefs) {
  return (0, _il.mkILEvents)((0, _List.map)(function (e$$3) {
    return edef_ty2ty(ilg$$11, f$$31, e$$3);
  }, (0, _il.ILEventDefs$$get_AsList)(edefs)));
}

function mimpls_ty2ty(f$$32, mimpls) {
  return (0, _il.mkILMethodImpls)((0, _List.map)(function (e$$4) {
    return mimpl_ty2ty(f$$32, e$$4);
  }, (0, _il.ILMethodImplDefs$$get_AsList)(mimpls)));
}

function tdef_ty2ty_ilmbody2ilmbody_mdefs2mdefs(ilg$$12, enc, fs_0$$4, fs_1$$4, td) {
  const fs$$5 = [(0, _Util.curry)(3, fs_0$$4), (0, _Util.curry)(2, fs_1$$4)];
  const ftye$$3 = fs$$5[0];
  const fmdefs = fs$$5[1];
  const ftye$0027$$1 = ftye$$3([enc, td])(null);
  const mdefs$0027 = fmdefs([enc, td])((0, _il.ILTypeDef$$get_Methods)(td));
  const fdefs$0027 = fdefs_ty2ty(ilg$$12, ftye$0027$$1, (0, _il.ILTypeDef$$get_Fields)(td));
  return (0, _il.ILTypeDef$$With$$4DED7EA9)(td, null, null, null, (0, _List.map)(ftye$0027$$1, (0, _il.ILTypeDef$$get_Implements)(td)), gparams_ty2ty(ftye$0027$$1, (0, _il.ILTypeDef$$get_GenericParams)(td)), (0, _Option.some)((0, _Option.defaultArg)((0, _il.ILTypeDef$$get_Extends)(td), null, ftye$0027$$1)), mdefs$0027, tdefs_ty2ty_ilmbody2ilmbody_mdefs2mdefs(ilg$$12, (0, _List.append)(enc, (0, _Types.L)(td, (0, _Types.L)())), (0, _Util.uncurry)(3, fs$$5[0]), (0, _Util.uncurry)(2, fs$$5[1]), (0, _il.ILTypeDef$$get_NestedTypes)(td)), fdefs$0027, mimpls_ty2ty(ftye$0027$$1, (0, _il.ILTypeDef$$get_MethodImpls)(td)), edefs_ty2ty(ilg$$12, ftye$0027$$1, (0, _il.ILTypeDef$$get_Events)(td)), pdefs_ty2ty(ilg$$12, ftye$0027$$1, (0, _il.ILTypeDef$$get_Properties)(td)), cattrs_ty2ty(ilg$$12, ftye$0027$$1, (0, _il.ILTypeDef$$get_CustomAttrs)(td)));
}

function tdefs_ty2ty_ilmbody2ilmbody_mdefs2mdefs(ilg$$13, enc$$2, fs_0$$5, fs_1$$5, tdefs$$1) {
  const fs$$6 = [(0, _Util.curry)(3, fs_0$$5), (0, _Util.curry)(2, fs_1$$5)];
  return morphILTypeDefs(function (td$$1) {
    return tdef_ty2ty_ilmbody2ilmbody_mdefs2mdefs(ilg$$13, enc$$2, (0, _Util.uncurry)(3, fs$$6[0]), (0, _Util.uncurry)(2, fs$$6[1]), td$$1);
  }, tdefs$$1);
}

function manifest_ty2ty(ilg$$14, f$$33, m$$3) {
  return new _il.ILAssemblyManifest(m$$3.Name, m$$3.AuxModuleHashAlgorithm, m$$3.SecurityDeclsStored, m$$3.PublicKey, m$$3.Version, m$$3.Locale, (0, _il.storeILCustomAttrs)(cattrs_ty2ty(ilg$$14, f$$33, (0, _il.ILAssemblyManifest$$get_CustomAttrs)(m$$3))), m$$3.AssemblyLongevity, m$$3.DisableJitOptimizations, m$$3.JitTracking, m$$3.IgnoreSymbolStoreSequencePoints, m$$3.Retargetable, m$$3.ExportedTypes, m$$3.EntrypointElsewhere, m$$3.MetadataIndex);
}

function morphILTypeInILModule_ilmbody2ilmbody_mdefs2mdefs(ilg$$15, ftye$$4, fmdefs$$1, m$$4) {
  const ftdefs = function ftdefs(tdefs$$2) {
    return tdefs_ty2ty_ilmbody2ilmbody_mdefs2mdefs(ilg$$15, (0, _Types.L)(), (0, _Util.uncurry)(3, (0, _Util.partialApply)(3, ftye$$4, [m$$4])), (0, _Util.uncurry)(2, (0, _Util.partialApply)(2, fmdefs$$1, [m$$4])), tdefs$$2);
  };

  return new _il.ILModuleDef((0, _Option.defaultArg)(m$$4.Manifest, null, function (m$$5) {
    return manifest_ty2ty(ilg$$15, (0, _Util.partialApply)(1, ftye$$4, [m$$4, null, null]), m$$5);
  }), m$$4.Name, ftdefs(m$$4.TypeDefs), m$$4.SubsystemVersion, m$$4.UseHighEntropyVA, m$$4.SubSystemFlags, m$$4.IsDLL, m$$4.IsILOnly, m$$4.Platform, m$$4.StackReserveSize, m$$4.Is32Bit, m$$4.Is32BitPreferred, m$$4.Is64Bit, m$$4.VirtualAlignment, m$$4.PhysicalAlignment, m$$4.ImageBase, m$$4.MetadataVersion, m$$4.Resources, m$$4.NativeResources, (0, _il.storeILCustomAttrs)(cattrs_ty2ty(ilg$$15, (0, _Util.partialApply)(1, ftye$$4, [m$$4, null, null]), (0, _il.ILModuleDef$$get_CustomAttrs)(m$$4))), m$$4.MetadataIndex);
}

function module_instr2instr_ty2ty(ilg$$16, fs_0$$6, fs_1$$6, x$$28) {
  const fs$$7 = [(0, _Util.curry)(4, fs_0$$6), (0, _Util.curry)(4, fs_1$$6)];
  const ftye$$5 = fs$$7[1];
  const fcode = fs$$7[0];

  const filmbody$$2 = function filmbody$$2(modCtxt, tdefCtxt, mdefCtxt, il$$2) {
    return ilmbody_instr2instr_ty2ty(fcode(modCtxt)(tdefCtxt)(mdefCtxt), ftye$$5(modCtxt)(tdefCtxt)(mdefCtxt), il$$2);
  };

  const fmdefs$$2 = function fmdefs$$2(modCtxt$$1, tdefCtxt$$1, x$$29) {
    return mdefs_ty2ty_ilmbody2ilmbody(ilg$$16, (0, _Util.uncurry)(2, ftye$$5(modCtxt$$1)(tdefCtxt$$1)), (0, _Util.uncurry)(2, (0, _Util.partialApply)(2, filmbody$$2, [modCtxt$$1, tdefCtxt$$1])), x$$29);
  };

  return morphILTypeInILModule_ilmbody2ilmbody_mdefs2mdefs(ilg$$16, (0, _Util.uncurry)(4, ftye$$5), fmdefs$$2, x$$28);
}

function morphILInstrsAndILTypesInILModule(ilg$$17, f1, f2, x$$30) {
  return module_instr2instr_ty2ty(ilg$$17, f1, f2, x$$30);
}

function morphILInstrsInILCode(f$$35, x$$31) {
  return code_instr2instrs(f$$35, x$$31);
}

function morphILTypeInILModule(ilg$$18, ftye$$6, y) {
  const finstr$$2 = function finstr$$2(modCtxt$$2) {
    return function (tdefCtxt$$2) {
      return function (mdefCtxt$$1) {
        const fty$$1 = (0, _Util.partialApply)(1, ftye$$6, [modCtxt$$2, tdefCtxt$$2, mdefCtxt$$1]);
        return function (i$$6) {
          return morphILTypesInILInstr((0, _Util.uncurry)(2, function arg00$0040$$11(_instrCtxt) {
            return fty$$1;
          }), (0, _Util.uncurry)(3, function arg01$0040$$11(_instrCtxt$$1) {
            return function (_formalCtxt) {
              return fty$$1;
            };
          }), i$$6);
        };
      };
    };
  };

  return morphILInstrsAndILTypesInILModule(ilg$$18, (0, _Util.uncurry)(4, finstr$$2), ftye$$6, y);
}

function morphILTypeRefsInILModuleMemoized(ilg$$19, f$$36, modul) {
  const fty$$2 = (0, _illib.Tables$$$memoize)(function (x$$32) {
    return ty_tref2tref(f$$36, x$$32);
  });
  return morphILTypeInILModule(ilg$$19, function (_arg3, _arg2, _arg1$$9, ty$$22) {
    return fty$$2(ty$$22);
  }, modul);
}

function morphILScopeRefsInILModuleMemoized(ilg$$20, f$$37, modul$$1) {
  return morphILTypeRefsInILModuleMemoized(ilg$$20, function (arg10$0040$$3) {
    return morphILScopeRefsInILTypeRef(f$$37, arg10$0040$$3);
  }, modul$$1);
}