"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkLowerName = mkLowerName;
exports.IlxUnionField$$$$002Ector$$58456522 = IlxUnionField$$$$002Ector$$58456522;
exports.IlxUnionField$$get_ILField = IlxUnionField$$get_ILField;
exports.IlxUnionField$$get_Type = IlxUnionField$$get_Type;
exports.IlxUnionField$$get_Name = IlxUnionField$$get_Name;
exports.IlxUnionField$$get_LowerName = IlxUnionField$$get_LowerName;
exports.IlxUnionAlternative$$get_FieldDefs = IlxUnionAlternative$$get_FieldDefs;
exports.IlxUnionAlternative$$FieldDef$$Z524259A4 = IlxUnionAlternative$$FieldDef$$Z524259A4;
exports.IlxUnionAlternative$$get_Name = IlxUnionAlternative$$get_Name;
exports.IlxUnionAlternative$$get_IsNullary = IlxUnionAlternative$$get_IsNullary;
exports.IlxUnionAlternative$$get_FieldTypes = IlxUnionAlternative$$get_FieldTypes;
exports.IlxUnionSpec$$get_DeclaringType = IlxUnionSpec$$get_DeclaringType;
exports.IlxUnionSpec$$get_Boxity = IlxUnionSpec$$get_Boxity;
exports.IlxUnionSpec$$get_TypeRef = IlxUnionSpec$$get_TypeRef;
exports.IlxUnionSpec$$get_GenericArgs = IlxUnionSpec$$get_GenericArgs;
exports.IlxUnionSpec$$get_AlternativesArray = IlxUnionSpec$$get_AlternativesArray;
exports.IlxUnionSpec$$get_IsNullPermitted = IlxUnionSpec$$get_IsNullPermitted;
exports.IlxUnionSpec$$get_HasHelpers = IlxUnionSpec$$get_HasHelpers;
exports.IlxUnionSpec$$get_Alternatives = IlxUnionSpec$$get_Alternatives;
exports.IlxUnionSpec$$Alternative$$Z524259A4 = IlxUnionSpec$$Alternative$$Z524259A4;
exports.IlxUnionSpec$$FieldDef = IlxUnionSpec$$FieldDef;
exports.instAppsAux = instAppsAux;
exports.instLambdasAux = instLambdasAux;
exports.instLambdas = instLambdas;
exports.mkILFreeVar = mkILFreeVar;
exports.IlxClosureSpec$$get_TypeRef = IlxClosureSpec$$get_TypeRef;
exports.IlxClosureSpec$$get_ILType = IlxClosureSpec$$get_ILType;
exports.IlxClosureSpec$$get_ClosureRef = IlxClosureSpec$$get_ClosureRef;
exports.IlxClosureSpec$$get_FormalFreeVars = IlxClosureSpec$$get_FormalFreeVars;
exports.IlxClosureSpec$$get_FormalLambdas = IlxClosureSpec$$get_FormalLambdas;
exports.IlxClosureSpec$$get_GenericArgs = IlxClosureSpec$$get_GenericArgs;
exports.IlxClosureSpec$$$Create$$Z1824D46D = IlxClosureSpec$$$Create$$Z1824D46D;
exports.IlxClosureSpec$$get_Constructor = IlxClosureSpec$$get_Constructor;
exports.destTyFuncApp = destTyFuncApp;
exports.mkILFormalCloRef = mkILFormalCloRef;
exports.actualTypOfIlxUnionField = actualTypOfIlxUnionField;
exports.IlxUnionInfo = exports.IlxClosureInfo = exports.IlxClosureSpec = exports.IlxClosureRef = exports.IlxClosureFreeVar = exports.IlxClosureApps = exports.IlxClosureLambdas = exports.IlxUnionSpec = exports.IlxUnionRef = exports.IlxUnionHasHelpers = exports.IlxUnionAlternative = exports.IlxUnionField = void 0;

var _illib = require("./illib");

var _il = require("./il");

var _Types = require("../fable-core.2.0.3/Types");

var _Array = require("../fable-core.2.0.3/Array");

function mkLowerName(nm) {
  const lowerName = (0, _illib.String$$$uncapitalize)(nm);

  if (lowerName === nm) {
    return "_" + nm;
  } else {
    return lowerName;
  }
}

const IlxUnionField = (0, _Types.declare)(function IlxUnionField(fd) {
  const $this$$1 = this;
  $this$$1.fd = fd;
  $this$$1.lowerName = mkLowerName((0, _il.ILFieldDef$$get_Name)($this$$1.fd));
});
exports.IlxUnionField = IlxUnionField;

function IlxUnionField$$$$002Ector$$58456522(fd) {
  return this != null ? IlxUnionField.call(this, fd) : new IlxUnionField(fd);
}

function IlxUnionField$$get_ILField(x) {
  return x.fd;
}

function IlxUnionField$$get_Type(x$$1) {
  return (0, _il.ILFieldDef$$get_FieldType)(IlxUnionField$$get_ILField(x$$1));
}

function IlxUnionField$$get_Name(x$$2) {
  return (0, _il.ILFieldDef$$get_Name)(IlxUnionField$$get_ILField(x$$2));
}

function IlxUnionField$$get_LowerName(x$$3) {
  return x$$3.lowerName;
}

const IlxUnionAlternative = (0, _Types.declare)(function IlxUnionAlternative(arg1, arg2, arg3) {
  this.altName = arg1;
  this.altFields = arg2;
  this.altCustomAttrs = arg3;
}, _Types.Record);
exports.IlxUnionAlternative = IlxUnionAlternative;

function IlxUnionAlternative$$get_FieldDefs(x$$4) {
  return x$$4.altFields;
}

function IlxUnionAlternative$$FieldDef$$Z524259A4(x$$5, n) {
  return x$$5.altFields[n];
}

function IlxUnionAlternative$$get_Name(x$$6) {
  return x$$6.altName;
}

function IlxUnionAlternative$$get_IsNullary(x$$7) {
  return IlxUnionAlternative$$get_FieldDefs(x$$7).length === 0;
}

function IlxUnionAlternative$$get_FieldTypes(x$$8) {
  return (0, _Array.map)(function mapping(fd$$1) {
    return IlxUnionField$$get_Type(fd$$1);
  }, IlxUnionAlternative$$get_FieldDefs(x$$8), Array);
}

const IlxUnionHasHelpers = (0, _Types.declare)(function IlxUnionHasHelpers(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.IlxUnionHasHelpers = IlxUnionHasHelpers;
const IlxUnionRef = (0, _Types.declare)(function IlxUnionRef(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.IlxUnionRef = IlxUnionRef;
const IlxUnionSpec = (0, _Types.declare)(function IlxUnionSpec(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.IlxUnionSpec = IlxUnionSpec;

function IlxUnionSpec$$get_DeclaringType(x$$9) {
  const tref = x$$9.fields[0].fields[1];
  const inst = x$$9.fields[1];
  const bx = x$$9.fields[0].fields[0];
  return (0, _il.mkILNamedTy)(bx, tref, inst);
}

function IlxUnionSpec$$get_Boxity(x$$10) {
  const bx$$1 = x$$10.fields[0].fields[0];
  return bx$$1;
}

function IlxUnionSpec$$get_TypeRef(x$$11) {
  const tref$$1 = x$$11.fields[0].fields[1];
  return tref$$1;
}

function IlxUnionSpec$$get_GenericArgs(x$$12) {
  const inst$$1 = x$$12.fields[1];
  return inst$$1;
}

function IlxUnionSpec$$get_AlternativesArray(x$$13) {
  const alts = x$$13.fields[0].fields[2];
  return alts;
}

function IlxUnionSpec$$get_IsNullPermitted(x$$14) {
  const np = x$$14.fields[0].fields[3];
  return np;
}

function IlxUnionSpec$$get_HasHelpers(x$$15) {
  const b = x$$15.fields[0].fields[4];
  return b;
}

function IlxUnionSpec$$get_Alternatives(x$$16) {
  return (0, _Array.toList)(IlxUnionSpec$$get_AlternativesArray(x$$16));
}

function IlxUnionSpec$$Alternative$$Z524259A4(x$$17, idx) {
  return IlxUnionSpec$$get_AlternativesArray(x$$17)[idx];
}

function IlxUnionSpec$$FieldDef(x$$18, idx$$1, fidx) {
  return IlxUnionAlternative$$FieldDef$$Z524259A4(IlxUnionSpec$$Alternative$$Z524259A4(x$$18, idx$$1), fidx);
}

const IlxClosureLambdas = (0, _Types.declare)(function IlxClosureLambdas(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.IlxClosureLambdas = IlxClosureLambdas;
const IlxClosureApps = (0, _Types.declare)(function IlxClosureApps(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.IlxClosureApps = IlxClosureApps;

function instAppsAux(n$$1, inst$$2, _arg1) {
  switch (_arg1.tag) {
    case 1:
      {
        const rty$$1 = _arg1.fields[1];
        const dty = _arg1.fields[0];
        return new IlxClosureApps(1, "Apps_app", (0, _il.instILTypeAux)(n$$1, inst$$2, dty), instAppsAux(n$$1, inst$$2, rty$$1));
      }

    case 2:
      {
        const rty$$2 = _arg1.fields[0];
        return new IlxClosureApps(2, "Apps_done", (0, _il.instILTypeAux)(n$$1, inst$$2, rty$$2));
      }

    default:
      {
        const ty = _arg1.fields[0];
        const rty = _arg1.fields[1];
        return new IlxClosureApps(0, "Apps_tyapp", (0, _il.instILTypeAux)(n$$1, inst$$2, ty), instAppsAux(n$$1, inst$$2, rty));
      }
  }
}

function instLambdasAux(n$$2, inst$$3, _arg1$$1) {
  switch (_arg1$$1.tag) {
    case 1:
      {
        const rty$$4 = _arg1$$1.fields[1];
        const p = _arg1$$1.fields[0];
        return new IlxClosureLambdas(1, "Lambdas_lambda", new _il.ILParameter(p.Name, (0, _il.instILTypeAux)(n$$2, inst$$3, p.Type), p.Default, p.Marshal, p.IsIn, p.IsOut, p.IsOptional, p.CustomAttrsStored, p.MetadataIndex), instLambdasAux(n$$2, inst$$3, rty$$4));
      }

    case 2:
      {
        const rty$$5 = _arg1$$1.fields[0];
        return new IlxClosureLambdas(2, "Lambdas_return", (0, _il.instILTypeAux)(n$$2, inst$$3, rty$$5));
      }

    default:
      {
        const rty$$3 = _arg1$$1.fields[1];
        const b$$1 = _arg1$$1.fields[0];
        return new IlxClosureLambdas(0, "Lambdas_forall", b$$1, instLambdasAux(n$$2, inst$$3, rty$$3));
      }
  }
}

function instLambdas(i, t) {
  return instLambdasAux(0, i, t);
}

const IlxClosureFreeVar = (0, _Types.declare)(function IlxClosureFreeVar(arg1, arg2, arg3) {
  this.fvName = arg1;
  this.fvCompilerGenerated = arg2;
  this.fvType = arg3;
}, _Types.Record);
exports.IlxClosureFreeVar = IlxClosureFreeVar;

function mkILFreeVar(name, compgen, ty$$1) {
  return new IlxClosureFreeVar(name, compgen, ty$$1);
}

const IlxClosureRef = (0, _Types.declare)(function IlxClosureRef(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.IlxClosureRef = IlxClosureRef;
const IlxClosureSpec = (0, _Types.declare)(function IlxClosureSpec(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.IlxClosureSpec = IlxClosureSpec;

function IlxClosureSpec$$get_TypeRef(x$$19) {
  const tref$$2 = IlxClosureSpec$$get_ClosureRef(x$$19).fields[0];
  return tref$$2;
}

function IlxClosureSpec$$get_ILType(x$$20) {
  const ty$$2 = x$$20.fields[2];
  return ty$$2;
}

function IlxClosureSpec$$get_ClosureRef(x$$21) {
  const cloref = x$$21.fields[0];
  return cloref;
}

function IlxClosureSpec$$get_FormalFreeVars(x$$22) {
  const fvs = IlxClosureSpec$$get_ClosureRef(x$$22).fields[2];
  return fvs;
}

function IlxClosureSpec$$get_FormalLambdas(x$$23) {
  const lambdas = IlxClosureSpec$$get_ClosureRef(x$$23).fields[1];
  return lambdas;
}

function IlxClosureSpec$$get_GenericArgs(x$$24) {
  const inst$$4 = x$$24.fields[1];
  return inst$$4;
}

function IlxClosureSpec$$$Create$$Z1824D46D(cloref$$1, inst$$5) {
  const tref$$3 = cloref$$1.fields[0];
  return new IlxClosureSpec(0, "IlxClosureSpec", cloref$$1, inst$$5, (0, _il.mkILBoxedType)((0, _il.mkILTySpec)(tref$$3, inst$$5)));
}

function IlxClosureSpec$$get_Constructor(clospec) {
  const cloTy = IlxClosureSpec$$get_ILType(clospec);
  const fields = IlxClosureSpec$$get_FormalFreeVars(clospec);
  return (0, _il.mkILCtorMethSpecForTy)(cloTy, (0, _Array.toList)((0, _Array.map)(function mapping$$1(fv) {
    return fv.fvType;
  }, fields, Array)));
}

const IlxClosureInfo = (0, _Types.declare)(function IlxClosureInfo(arg1, arg2, arg3) {
  this.cloStructure = arg1;
  this.cloFreeVars = arg2;
  this.cloCode = arg3;
}, _Types.Record);
exports.IlxClosureInfo = IlxClosureInfo;
const IlxUnionInfo = (0, _Types.declare)(function IlxUnionInfo(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this.cudReprAccess = arg1;
  this.cudHelpersAccess = arg2;
  this.cudHasHelpers = arg3;
  this.cudDebugProxies = arg4;
  this.cudDebugDisplayAttributes = arg5;
  this.cudAlternatives = arg6;
  this.cudNullPermitted = arg7;
  this.cudWhere = arg8;
}, _Types.Record);
exports.IlxUnionInfo = IlxUnionInfo;

function destTyFuncApp(_arg1$$2) {
  if (_arg1$$2.tag === 0) {
    const c = _arg1$$2.fields[1];
    const b$$2 = _arg1$$2.fields[0];
    return [b$$2, c];
  } else {
    throw new Error("destTyFuncApp");
  }
}

function mkILFormalCloRef(gparams, csig) {
  return IlxClosureSpec$$$Create$$Z1824D46D(csig, (0, _il.mkILFormalGenericArgs)(0, gparams));
}

function actualTypOfIlxUnionField(cuspec, idx$$2, fidx$$1) {
  return (0, _il.instILType)(IlxUnionSpec$$get_GenericArgs(cuspec), IlxUnionField$$get_Type(IlxUnionSpec$$FieldDef(cuspec, idx$$2, fidx$$1)));
}