"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkRLinear = mkRLinear;
exports.mkVarTy = mkVarTy;
exports.mkFunTy = mkFunTy;
exports.mkArrayTy = mkArrayTy;
exports.mkILNamedTy = mkILNamedTy;
exports.mkVar = mkVar;
exports.mkHole = mkHole;
exports.mkApp = mkApp;
exports.mkLambda = mkLambda;
exports.mkQuote = mkQuote;
exports.mkQuoteRaw40 = mkQuoteRaw40;
exports.mkCond = mkCond;
exports.mkModuleValueApp = mkModuleValueApp;
exports.mkTuple = mkTuple;
exports.mkLet = mkLet;
exports.mkUnit = mkUnit;
exports.mkNull = mkNull;
exports.mkLetRecRaw = mkLetRecRaw;
exports.mkLetRecCombRaw = mkLetRecCombRaw;
exports.mkLetRec = mkLetRec;
exports.mkRecdMk = mkRecdMk;
exports.mkRecdGet = mkRecdGet;
exports.mkRecdSet = mkRecdSet;
exports.mkUnion = mkUnion;
exports.mkUnionFieldGet = mkUnionFieldGet;
exports.mkUnionCaseTagTest = mkUnionCaseTagTest;
exports.mkTupleGet = mkTupleGet;
exports.mkCoerce = mkCoerce;
exports.mkTypeTest = mkTypeTest;
exports.mkAddressOf = mkAddressOf;
exports.mkAddressSet = mkAddressSet;
exports.mkVarSet = mkVarSet;
exports.mkDefaultValue = mkDefaultValue;
exports.mkThisVar = mkThisVar;
exports.mkNewArray = mkNewArray;
exports.mkBool = mkBool;
exports.mkString = mkString;
exports.mkSingle = mkSingle;
exports.mkDouble = mkDouble;
exports.mkChar = mkChar;
exports.mkSByte = mkSByte;
exports.mkByte = mkByte;
exports.mkInt16 = mkInt16;
exports.mkUInt16 = mkUInt16;
exports.mkInt32 = mkInt32;
exports.mkUInt32 = mkUInt32;
exports.mkInt64 = mkInt64;
exports.mkUInt64 = mkUInt64;
exports.mkSequential = mkSequential;
exports.mkForLoop = mkForLoop;
exports.mkWhileLoop = mkWhileLoop;
exports.mkTryFinally = mkTryFinally;
exports.mkTryWith = mkTryWith;
exports.mkDelegate = mkDelegate;
exports.mkPropGet = mkPropGet;
exports.mkPropSet = mkPropSet;
exports.mkFieldGet = mkFieldGet;
exports.mkFieldSet = mkFieldSet;
exports.mkCtorCall = mkCtorCall;
exports.mkMethodCall = mkMethodCall;
exports.mkAttributedExpression = mkAttributedExpression;
exports.isAttributedExpression = isAttributedExpression;
exports.freshVar = freshVar;
exports.SimplePickle$002ETable$00601$$$Create = SimplePickle$002ETable$00601$$$Create;
exports.SimplePickle$002ETable$00601$$get_AsList = SimplePickle$002ETable$00601$$get_AsList;
exports.SimplePickle$002ETable$00601$$get_Count = SimplePickle$002ETable$00601$$get_Count;
exports.SimplePickle$002ETable$00601$$Add$$2B595 = SimplePickle$002ETable$00601$$Add$$2B595;
exports.SimplePickle$002ETable$00601$$FindOrAdd$$2B595 = SimplePickle$002ETable$00601$$FindOrAdd$$2B595;
exports.SimplePickle$002ETable$00601$$Find$$2B595 = SimplePickle$002ETable$00601$$Find$$2B595;
exports.SimplePickle$002ETable$00601$$ContainsKey$$2B595 = SimplePickle$002ETable$00601$$ContainsKey$$2B595;
exports.SimplePickle$$$p_byte = SimplePickle$$$p_byte;
exports.SimplePickle$$$p_bool = SimplePickle$$$p_bool;
exports.SimplePickle$$$p_void = SimplePickle$$$p_void;
exports.SimplePickle$$$p_unit = SimplePickle$$$p_unit;
exports.SimplePickle$$$prim_pint32 = SimplePickle$$$prim_pint32;
exports.SimplePickle$$$p_int32 = SimplePickle$$$p_int32;
exports.SimplePickle$$$p_bytes = SimplePickle$$$p_bytes;
exports.SimplePickle$$$prim_pstring = SimplePickle$$$prim_pstring;
exports.SimplePickle$$$p_int = SimplePickle$$$p_int;
exports.SimplePickle$$$p_int8 = SimplePickle$$$p_int8;
exports.SimplePickle$$$p_uint8 = SimplePickle$$$p_uint8;
exports.SimplePickle$$$p_int16 = SimplePickle$$$p_int16;
exports.SimplePickle$$$p_uint16 = SimplePickle$$$p_uint16;
exports.SimplePickle$$$puint32 = SimplePickle$$$puint32;
exports.SimplePickle$$$p_int64 = SimplePickle$$$p_int64;
exports.SimplePickle$$$bits_of_float32 = SimplePickle$$$bits_of_float32;
exports.SimplePickle$$$bits_of_float = SimplePickle$$$bits_of_float;
exports.SimplePickle$$$p_uint64 = SimplePickle$$$p_uint64;
exports.SimplePickle$$$p_double = SimplePickle$$$p_double;
exports.SimplePickle$$$p_single = SimplePickle$$$p_single;
exports.SimplePickle$$$p_char = SimplePickle$$$p_char;
exports.SimplePickle$$$puniq = SimplePickle$$$puniq;
exports.SimplePickle$$$p_string = SimplePickle$$$p_string;
exports.SimplePickle$$$p_list = SimplePickle$$$p_list;
exports.SimplePickle$$$pickle_obj = SimplePickle$$$pickle_obj;
exports.p_assref = p_assref;
exports.p_NamedType = p_NamedType;
exports.p_tycon = p_tycon;
exports.p_type = p_type;
exports.p_types = p_types;
exports.p_varDecl = p_varDecl;
exports.p_recdFieldSpec = p_recdFieldSpec;
exports.p_ucaseSpec = p_ucaseSpec;
exports.p_MethodData = p_MethodData;
exports.p_CtorData = p_CtorData;
exports.p_PropInfoData = p_PropInfoData;
exports.p_CombOp = p_CombOp;
exports.p_expr = p_expr;
exports.pickle = pickle;
exports.p_MethodBase = p_MethodBase;
exports.PickleDefns = PickleDefns;
exports.MethodBaseData = exports.ModuleDefnData = exports.SimplePickle$002EQuotationPickleOutState = exports.SimplePickle$002ETable$00601 = exports.SerializedReflectedDefinitionsResourceNameBase = exports.ExprData = exports.CombOp = exports.VarData = exports.MethodData = exports.CtorData = exports.TypeData = exports.TypeCombOp = exports.NamedTypeData = exports.TypeVarData = void 0;

var _List = require("../fable-core.2.0.3/List");

var _Types = require("../fable-core.2.0.3/Types");

var _FSharp = require("../fable-core.2.0.3/FSharp.Collections");

var _HashMultiMap = require("../utils/HashMultiMap");

var _bytes = require("../absil/bytes");

var _lib = require("./lib");

var _Encoding = require("../fable-core.2.0.3/Encoding");

var _Long = require("../fable-core.2.0.3/Long");

var _BitConverter = require("../fable-core.2.0.3/BitConverter");

var _Util = require("../fable-core.2.0.3/Util");

function mkRLinear(mk, vs, body) {
  return (0, _List.foldBack)(function (v, acc) {
    return mk([v, acc]);
  }, vs, body);
}

const TypeVarData = (0, _Types.declare)(function TypeVarData(arg1) {
  this.tvName = arg1;
}, _Types.Record);
exports.TypeVarData = TypeVarData;
const NamedTypeData = (0, _Types.declare)(function NamedTypeData(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.NamedTypeData = NamedTypeData;
const TypeCombOp = (0, _Types.declare)(function TypeCombOp(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TypeCombOp = TypeCombOp;
const TypeData = (0, _Types.declare)(function TypeData(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TypeData = TypeData;

function mkVarTy(v$$1) {
  return new TypeData(0, "VarType", v$$1);
}

function mkFunTy(tupledArg) {
  return new TypeData(1, "AppType", new TypeCombOp(1, "FunTyOp"), (0, _Types.L)(tupledArg[0], (0, _Types.L)(tupledArg[1], (0, _Types.L)())));
}

function mkArrayTy(tupledArg$$1) {
  return new TypeData(1, "AppType", new TypeCombOp(0, "ArrayTyOp", tupledArg$$1[0]), (0, _Types.L)(tupledArg$$1[1], (0, _Types.L)()));
}

function mkILNamedTy(tupledArg$$2) {
  return new TypeData(1, "AppType", new TypeCombOp(2, "NamedTyOp", tupledArg$$2[0]), tupledArg$$2[1]);
}

const CtorData = (0, _Types.declare)(function CtorData(arg1, arg2) {
  this.ctorParent = arg1;
  this.ctorArgTypes = arg2;
}, _Types.Record);
exports.CtorData = CtorData;
const MethodData = (0, _Types.declare)(function MethodData(arg1, arg2, arg3, arg4, arg5) {
  this.methParent = arg1;
  this.methName = arg2;
  this.methArgTypes = arg3;
  this.methRetType = arg4;
  this.numGenericArgs = arg5 | 0;
}, _Types.Record);
exports.MethodData = MethodData;
const VarData = (0, _Types.declare)(function VarData(arg1, arg2, arg3) {
  this.vText = arg1;
  this.vType = arg2;
  this.vMutable = arg3;
}, _Types.Record);
exports.VarData = VarData;
const CombOp = (0, _Types.declare)(function CombOp(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CombOp = CombOp;
const ExprData = (0, _Types.declare)(function ExprData(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ExprData = ExprData;

function mkVar(v$$2) {
  return new ExprData(2, "VarExpr", v$$2);
}

function mkHole(v$$3, idx) {
  return new ExprData(5, "HoleExpr", v$$3, idx);
}

function mkApp(a, b) {
  return new ExprData(1, "CombExpr", new CombOp(0, "AppOp"), (0, _Types.L)(), (0, _Types.L)(a, (0, _Types.L)(b, (0, _Types.L)())));
}

function mkLambda(a$$1, b$$1) {
  return new ExprData(4, "LambdaExpr", a$$1, b$$1);
}

function mkQuote(a$$2) {
  return new ExprData(3, "QuoteExpr", a$$2);
}

function mkQuoteRaw40(a$$3) {
  return new ExprData(7, "QuoteRawExpr", a$$3);
}

function mkCond(x1$$1, x2$$1, x3) {
  return new ExprData(1, "CombExpr", new CombOp(1, "CondOp"), (0, _Types.L)(), (0, _Types.L)(x1$$1, (0, _Types.L)(x2$$1, (0, _Types.L)(x3, (0, _Types.L)()))));
}

function mkModuleValueApp(tcref, nm, isProp, tyargs, args) {
  return new ExprData(1, "CombExpr", new CombOp(2, "ModuleValueOp", tcref, nm, isProp), tyargs, (0, _List.concat)(args));
}

function mkTuple(ty, x$$1) {
  return new ExprData(1, "CombExpr", new CombOp(12, "TupleMkOp"), (0, _Types.L)(ty, (0, _Types.L)()), x$$1);
}

function mkLet(_arg1, b$$2) {
  return new ExprData(1, "CombExpr", new CombOp(5, "LetOp"), (0, _Types.L)(), (0, _Types.L)(_arg1[1], (0, _Types.L)(mkLambda(_arg1[0], b$$2), (0, _Types.L)())));
}

function mkUnit() {
  return new ExprData(1, "CombExpr", new CombOp(14, "UnitOp"), (0, _Types.L)(), (0, _Types.L)());
}

function mkNull(ty$$1) {
  return new ExprData(1, "CombExpr", new CombOp(38, "NullOp"), (0, _Types.L)(ty$$1, (0, _Types.L)()), (0, _Types.L)());
}

function mkLetRecRaw(e1) {
  return new ExprData(1, "CombExpr", new CombOp(3, "LetRecOp"), (0, _Types.L)(), (0, _Types.L)(e1, (0, _Types.L)()));
}

function mkLetRecCombRaw(args$$1) {
  return new ExprData(1, "CombExpr", new CombOp(4, "LetRecCombOp"), (0, _Types.L)(), args$$1);
}

function mkLetRec(ves, body$$1) {
  const patternInput = (0, _List.unzip)(ves);
  return mkLetRecRaw(mkRLinear(function (tupledArg$$3) {
    return mkLambda(tupledArg$$3[0], tupledArg$$3[1]);
  }, patternInput[0], mkLetRecCombRaw((0, _Types.L)(body$$1, patternInput[1]))));
}

function mkRecdMk(n$$1, tys, args$$2) {
  return new ExprData(1, "CombExpr", new CombOp(6, "RecdMkOp", n$$1), tys, args$$2);
}

function mkRecdGet(_arg1$$1, tyargs$$1, args$$3) {
  return new ExprData(1, "CombExpr", new CombOp(7, "RecdGetOp", _arg1$$1[0], _arg1$$1[1]), tyargs$$1, args$$3);
}

function mkRecdSet(_arg1$$2, tyargs$$2, args$$4) {
  return new ExprData(1, "CombExpr", new CombOp(8, "RecdSetOp", _arg1$$2[0], _arg1$$2[1]), tyargs$$2, args$$4);
}

function mkUnion(_arg1$$3, tyargs$$3, args$$5) {
  return new ExprData(1, "CombExpr", new CombOp(9, "SumMkOp", _arg1$$3[0], _arg1$$3[1]), tyargs$$3, args$$5);
}

function mkUnionFieldGet(_arg1$$4, tyargs$$4, arg) {
  return new ExprData(1, "CombExpr", new CombOp(10, "SumFieldGetOp", _arg1$$4[0], _arg1$$4[1], _arg1$$4[2]), tyargs$$4, (0, _Types.L)(arg, (0, _Types.L)()));
}

function mkUnionCaseTagTest(_arg1$$5, tyargs$$5, arg$$1) {
  return new ExprData(1, "CombExpr", new CombOp(11, "SumTagTestOp", _arg1$$5[0], _arg1$$5[1]), tyargs$$5, (0, _Types.L)(arg$$1, (0, _Types.L)()));
}

function mkTupleGet(ty$$2, n$$2, e$$1) {
  return new ExprData(1, "CombExpr", new CombOp(13, "TupleGetOp", n$$2), (0, _Types.L)(ty$$2, (0, _Types.L)()), (0, _Types.L)(e$$1, (0, _Types.L)()));
}

function mkCoerce(ty$$3, arg$$2) {
  return new ExprData(1, "CombExpr", new CombOp(32, "CoerceOp"), (0, _Types.L)(ty$$3, (0, _Types.L)()), (0, _Types.L)(arg$$2, (0, _Types.L)()));
}

function mkTypeTest(ty$$4, arg$$3) {
  return new ExprData(1, "CombExpr", new CombOp(45, "TypeTestOp"), (0, _Types.L)(ty$$4, (0, _Types.L)()), (0, _Types.L)(arg$$3, (0, _Types.L)()));
}

function mkAddressOf(arg$$4) {
  return new ExprData(1, "CombExpr", new CombOp(42, "AddressOfOp"), (0, _Types.L)(), (0, _Types.L)(arg$$4, (0, _Types.L)()));
}

function mkAddressSet(arg1, arg2) {
  return new ExprData(1, "CombExpr", new CombOp(44, "AddressSetOp"), (0, _Types.L)(), (0, _Types.L)(arg1, (0, _Types.L)(arg2, (0, _Types.L)())));
}

function mkVarSet(arg1$$1, arg2$$1) {
  return new ExprData(1, "CombExpr", new CombOp(43, "ExprSetOp"), (0, _Types.L)(), (0, _Types.L)(arg1$$1, (0, _Types.L)(arg2$$1, (0, _Types.L)())));
}

function mkDefaultValue(ty$$5) {
  return new ExprData(1, "CombExpr", new CombOp(39, "DefaultValueOp"), (0, _Types.L)(ty$$5, (0, _Types.L)()), (0, _Types.L)());
}

function mkThisVar(ty$$6) {
  return new ExprData(6, "ThisVarExpr", ty$$6);
}

function mkNewArray(ty$$7, args$$6) {
  return new ExprData(1, "CombExpr", new CombOp(33, "NewArrayOp"), (0, _Types.L)(ty$$7, (0, _Types.L)()), args$$6);
}

function mkBool(v$$5, ty$$8) {
  return new ExprData(1, "CombExpr", new CombOp(15, "BoolOp", v$$5), (0, _Types.L)(ty$$8, (0, _Types.L)()), (0, _Types.L)());
}

function mkString(v$$6, ty$$9) {
  return new ExprData(1, "CombExpr", new CombOp(16, "StringOp", v$$6), (0, _Types.L)(ty$$9, (0, _Types.L)()), (0, _Types.L)());
}

function mkSingle(v$$7, ty$$10) {
  return new ExprData(1, "CombExpr", new CombOp(17, "SingleOp", v$$7), (0, _Types.L)(ty$$10, (0, _Types.L)()), (0, _Types.L)());
}

function mkDouble(v$$8, ty$$11) {
  return new ExprData(1, "CombExpr", new CombOp(18, "DoubleOp", v$$8), (0, _Types.L)(ty$$11, (0, _Types.L)()), (0, _Types.L)());
}

function mkChar(v$$9, ty$$12) {
  return new ExprData(1, "CombExpr", new CombOp(19, "CharOp", v$$9), (0, _Types.L)(ty$$12, (0, _Types.L)()), (0, _Types.L)());
}

function mkSByte(v$$10, ty$$13) {
  return new ExprData(1, "CombExpr", new CombOp(20, "SByteOp", v$$10), (0, _Types.L)(ty$$13, (0, _Types.L)()), (0, _Types.L)());
}

function mkByte(v$$11, ty$$14) {
  return new ExprData(1, "CombExpr", new CombOp(21, "ByteOp", v$$11), (0, _Types.L)(ty$$14, (0, _Types.L)()), (0, _Types.L)());
}

function mkInt16(v$$12, ty$$15) {
  return new ExprData(1, "CombExpr", new CombOp(22, "Int16Op", v$$12), (0, _Types.L)(ty$$15, (0, _Types.L)()), (0, _Types.L)());
}

function mkUInt16(v$$13, ty$$16) {
  return new ExprData(1, "CombExpr", new CombOp(23, "UInt16Op", v$$13), (0, _Types.L)(ty$$16, (0, _Types.L)()), (0, _Types.L)());
}

function mkInt32(v$$14, ty$$17) {
  return new ExprData(1, "CombExpr", new CombOp(24, "Int32Op", v$$14), (0, _Types.L)(ty$$17, (0, _Types.L)()), (0, _Types.L)());
}

function mkUInt32(v$$15, ty$$18) {
  return new ExprData(1, "CombExpr", new CombOp(25, "UInt32Op", v$$15), (0, _Types.L)(ty$$18, (0, _Types.L)()), (0, _Types.L)());
}

function mkInt64(v$$16, ty$$19) {
  return new ExprData(1, "CombExpr", new CombOp(26, "Int64Op", v$$16), (0, _Types.L)(ty$$19, (0, _Types.L)()), (0, _Types.L)());
}

function mkUInt64(v$$17, ty$$20) {
  return new ExprData(1, "CombExpr", new CombOp(27, "UInt64Op", v$$17), (0, _Types.L)(ty$$20, (0, _Types.L)()), (0, _Types.L)());
}

function mkSequential(e1$$1, e2) {
  return new ExprData(1, "CombExpr", new CombOp(35, "SeqOp"), (0, _Types.L)(), (0, _Types.L)(e1$$1, (0, _Types.L)(e2, (0, _Types.L)())));
}

function mkForLoop(x1$$2, x2$$2, x3$$1) {
  return new ExprData(1, "CombExpr", new CombOp(36, "ForLoopOp"), (0, _Types.L)(), (0, _Types.L)(x1$$2, (0, _Types.L)(x2$$2, (0, _Types.L)(x3$$1, (0, _Types.L)()))));
}

function mkWhileLoop(e1$$2, e2$$1) {
  return new ExprData(1, "CombExpr", new CombOp(37, "WhileLoopOp"), (0, _Types.L)(), (0, _Types.L)(e1$$2, (0, _Types.L)(e2$$1, (0, _Types.L)())));
}

function mkTryFinally(e1$$3, e2$$2) {
  return new ExprData(1, "CombExpr", new CombOp(46, "TryFinallyOp"), (0, _Types.L)(), (0, _Types.L)(e1$$3, (0, _Types.L)(e2$$2, (0, _Types.L)())));
}

function mkTryWith(e1$$4, vf, ef, vh, eh) {
  return new ExprData(1, "CombExpr", new CombOp(47, "TryWithOp"), (0, _Types.L)(), (0, _Types.L)(e1$$4, (0, _Types.L)(mkLambda(vf, ef), (0, _Types.L)(mkLambda(vh, eh), (0, _Types.L)()))));
}

function mkDelegate(ty$$21, e$$2) {
  return new ExprData(1, "CombExpr", new CombOp(34, "DelegateOp"), (0, _Types.L)(ty$$21, (0, _Types.L)()), (0, _Types.L)(e$$2, (0, _Types.L)()));
}

function mkPropGet(d, tyargs$$6, args$$7) {
  return new ExprData(1, "CombExpr", new CombOp(28, "PropGetOp", d), tyargs$$6, args$$7);
}

function mkPropSet(d$$1, tyargs$$7, args$$8) {
  return new ExprData(1, "CombExpr", new CombOp(40, "PropSetOp", d$$1), tyargs$$7, args$$8);
}

function mkFieldGet(_arg1$$6, tyargs$$8, args$$9) {
  return new ExprData(1, "CombExpr", new CombOp(29, "FieldGetOp", _arg1$$6[0], _arg1$$6[1]), tyargs$$8, args$$9);
}

function mkFieldSet(_arg1$$7, tyargs$$9, args$$10) {
  return new ExprData(1, "CombExpr", new CombOp(41, "FieldSetOp", _arg1$$7[0], _arg1$$7[1]), tyargs$$9, args$$10);
}

function mkCtorCall(d$$2, tyargs$$10, args$$11) {
  return new ExprData(1, "CombExpr", new CombOp(30, "CtorCallOp", d$$2), tyargs$$10, args$$11);
}

function mkMethodCall(d$$3, tyargs$$11, args$$12) {
  return new ExprData(1, "CombExpr", new CombOp(31, "MethodCallOp", d$$3), tyargs$$11, args$$12);
}

function mkAttributedExpression(e$$3, attr) {
  return new ExprData(0, "AttrExpr", e$$3, (0, _Types.L)(attr, (0, _Types.L)()));
}

function isAttributedExpression(e$$4) {
  if (e$$4.tag === 0) {
    return true;
  } else {
    return false;
  }
}

const SerializedReflectedDefinitionsResourceNameBase = "ReflectedDefinitions";
exports.SerializedReflectedDefinitionsResourceNameBase = SerializedReflectedDefinitionsResourceNameBase;

function freshVar(n$$3, ty$$22, mut) {
  return new VarData(n$$3, ty$$22, mut);
}

const SimplePickle$002ETable$00601 = (0, _Types.declare)(function SimplePickle$002ETable$00601(arg1, arg2, arg3) {
  this.tbl = arg1;
  this.rows = arg2;
  this.count = arg3 | 0;
}, _Types.Record);
exports.SimplePickle$002ETable$00601 = SimplePickle$002ETable$00601;

function SimplePickle$002ETable$00601$$$Create() {
  return new SimplePickle$002ETable$00601((0, _HashMultiMap.HashMultiMap$00602$$$$002Ector$$Z1C047C8B)(20, (0, _FSharp.HashIdentity$$$Structural)()), (0, _Types.L)(), 0);
}

function SimplePickle$002ETable$00601$$get_AsList(tbl) {
  return (0, _List.reverse)(tbl.rows);
}

function SimplePickle$002ETable$00601$$get_Count(tbl$$1) {
  return (0, _List.length)(tbl$$1.rows);
}

function SimplePickle$002ETable$00601$$Add$$2B595(tbl$$2, x$$2) {
  const n$$4 = tbl$$2.count | 0;
  tbl$$2.count = tbl$$2.count + 1;
  (0, _HashMultiMap.HashMultiMap$00602$$Add$$5BDDA1)(tbl$$2.tbl, x$$2, n$$4);
  tbl$$2.rows = (0, _Types.L)(x$$2, tbl$$2.rows);
  return n$$4 | 0;
}

function SimplePickle$002ETable$00601$$FindOrAdd$$2B595(tbl$$3, x$$3) {
  if ((0, _HashMultiMap.HashMultiMap$00602$$ContainsKey$$2B595)(tbl$$3.tbl, x$$3)) {
    return (0, _HashMultiMap.HashMultiMap$00602$$get_Item$$2B595)(tbl$$3.tbl, x$$3) | 0;
  } else {
    return SimplePickle$002ETable$00601$$Add$$2B595(tbl$$3, x$$3) | 0;
  }
}

function SimplePickle$002ETable$00601$$Find$$2B595(tbl$$4, x$$4) {
  return (0, _HashMultiMap.HashMultiMap$00602$$get_Item$$2B595)(tbl$$4.tbl, x$$4);
}

function SimplePickle$002ETable$00601$$ContainsKey$$2B595(tbl$$5, x$$5) {
  return (0, _HashMultiMap.HashMultiMap$00602$$ContainsKey$$2B595)(tbl$$5.tbl, x$$5);
}

const SimplePickle$002EQuotationPickleOutState = (0, _Types.declare)(function SimplePickle$002EQuotationPickleOutState(arg1, arg2) {
  this.os = arg1;
  this.ostrings = arg2;
}, _Types.Record);
exports.SimplePickle$002EQuotationPickleOutState = SimplePickle$002EQuotationPickleOutState;

function SimplePickle$$$p_byte(b$$3, st) {
  (0, _bytes.ByteBuffer$$EmitIntAsByte$$Z524259A4)(st.os, b$$3);
}

function SimplePickle$$$p_bool(b$$4, st$$1) {
  SimplePickle$$$p_byte(b$$4 ? 1 : 0, st$$1);
}

function SimplePickle$$$p_void(_os) {}

function SimplePickle$$$p_unit(unitVar0$$2, _os$$1) {}

function SimplePickle$$$prim_pint32(i, st$$2) {
  SimplePickle$$$p_byte((0, _lib.Bits$$$b0)(i), st$$2);
  SimplePickle$$$p_byte((0, _lib.Bits$$$b1)(i), st$$2);
  SimplePickle$$$p_byte((0, _lib.Bits$$$b2)(i), st$$2);
  SimplePickle$$$p_byte((0, _lib.Bits$$$b3)(i), st$$2);
}

function SimplePickle$$$p_int32(n$$5, st$$3) {
  if (n$$5 >= 0 ? n$$5 <= 127 : false) {
    SimplePickle$$$p_byte((0, _lib.Bits$$$b0)(n$$5), st$$3);
  } else if (n$$5 >= 128 ? n$$5 <= 16383 : false) {
    SimplePickle$$$p_byte(128 | n$$5 >> 8, st$$3);
    SimplePickle$$$p_byte(n$$5 & 255, st$$3);
  } else {
    SimplePickle$$$p_byte(255, st$$3);
    SimplePickle$$$prim_pint32(n$$5, st$$3);
  }
}

function SimplePickle$$$p_bytes(s, st$$4) {
  const len = s.length | 0;
  SimplePickle$$$p_int32(len, st$$4);
  (0, _bytes.ByteBuffer$$EmitBytes$$6C95DA22)(st$$4.os, s);
}

function SimplePickle$$$prim_pstring(s$$1, st$$5) {
  const bytes = (0, _Encoding.get_UTF8)().getBytes(s$$1);
  const len$$1 = bytes.length | 0;
  SimplePickle$$$p_int32(len$$1, st$$5);
  (0, _bytes.ByteBuffer$$EmitBytes$$6C95DA22)(st$$5.os, bytes);
}

function SimplePickle$$$p_int(c, st$$6) {
  SimplePickle$$$p_int32(c, st$$6);
}

function SimplePickle$$$p_int8(i$$1, st$$7) {
  SimplePickle$$$p_int32(i$$1, st$$7);
}

function SimplePickle$$$p_uint8(i$$2, st$$8) {
  SimplePickle$$$p_byte(~~i$$2, st$$8);
}

function SimplePickle$$$p_int16(i$$3, st$$9) {
  SimplePickle$$$p_int32(i$$3, st$$9);
}

function SimplePickle$$$p_uint16(x$$6, st$$10) {
  SimplePickle$$$p_int32(~~x$$6, st$$10);
}

function SimplePickle$$$puint32(x$$7, st$$11) {
  SimplePickle$$$p_int32(~~x$$7, st$$11);
}

function SimplePickle$$$p_int64(i$$4, st$$12) {
  SimplePickle$$$p_int32(~~(0, _Long.toIntNumber)((0, _Long.op_BitwiseAnd)(i$$4, (0, _Long.fromBits)(4294967295, 0, false))), st$$12);
  SimplePickle$$$p_int32(~~(0, _Long.toIntNumber)((0, _Long.op_RightShift)(i$$4, 32)), st$$12);
}

function SimplePickle$$$bits_of_float32(x$$8) {
  return (0, _BitConverter.toInt32)((0, _BitConverter.getBytesSingle)(x$$8), 0);
}

function SimplePickle$$$bits_of_float(x$$9) {
  return (0, _BitConverter.toInt64)((0, _BitConverter.getBytesDouble)(x$$9), 0);
}

function SimplePickle$$$p_uint64(x$$10, st$$13) {
  SimplePickle$$$p_int64((0, _Long.fromValue)(x$$10, false), st$$13);
}

function SimplePickle$$$p_double(i$$5, st$$14) {
  SimplePickle$$$p_int64(SimplePickle$$$bits_of_float(i$$5), st$$14);
}

function SimplePickle$$$p_single(i$$6, st$$15) {
  SimplePickle$$$p_int32(SimplePickle$$$bits_of_float32(i$$6), st$$15);
}

function SimplePickle$$$p_char(i$$7, st$$16) {
  SimplePickle$$$p_uint16(i$$7.charCodeAt(0) & 0xFFFF, st$$16);
}

function SimplePickle$$$puniq(tbl$$6, key, st$$17) {
  SimplePickle$$$p_int(SimplePickle$002ETable$00601$$FindOrAdd$$2B595(tbl$$6, key), st$$17);
}

function SimplePickle$$$p_string(s$$2, st$$18) {
  SimplePickle$$$puniq(st$$18.ostrings, s$$2, st$$18);
}

function SimplePickle$$$p_list(f, x$$11, st$$19) {
  if (x$$11.tail != null) {
    const t = x$$11.tail;
    const h = x$$11.head;
    SimplePickle$$$p_byte(1, st$$19);
    f(h, st$$19);
    SimplePickle$$$p_list(f, t, st$$19);
  } else {
    SimplePickle$$$p_byte(0, st$$19);
  }
}

function SimplePickle$$$pickle_obj(p, x$$12) {
  let patternInput$$1;
  const st1 = new SimplePickle$002EQuotationPickleOutState((0, _bytes.ByteBuffer$$$Create$$Z524259A4)(100000), SimplePickle$002ETable$00601$$$Create());
  p(x$$12, st1);
  patternInput$$1 = [SimplePickle$002ETable$00601$$get_AsList(st1.ostrings), (0, _bytes.ByteBuffer$$Close)(st1.os)];
  const phase2data = [patternInput$$1[0], patternInput$$1[1]];
  let phase2bytes;
  const st2 = new SimplePickle$002EQuotationPickleOutState((0, _bytes.ByteBuffer$$$Create$$Z524259A4)(100000), SimplePickle$002ETable$00601$$$Create());

  (function p1(x$$13, st$$20) {
    SimplePickle$$$p_list(SimplePickle$$$prim_pstring, x$$13, st$$20);
  })(phase2data[0], st2);

  SimplePickle$$$p_bytes(phase2data[1], st2);
  phase2bytes = (0, _bytes.ByteBuffer$$Close)(st2.os);
  return phase2bytes;
}

function p_assref(x$$14, st$$24) {
  SimplePickle$$$p_string(x$$14, st$$24);
}

function p_NamedType(x$$15, st$$25) {
  if (x$$15.tag === 1) {
    const nm$$1 = x$$15.fields[0];
    const ass = x$$15.fields[1];
    SimplePickle$$$p_string(nm$$1, st$$25);
    p_assref(ass, st$$25);
  } else {
    const n$$6 = x$$15.fields[0] | 0;
    SimplePickle$$$p_string((0, _Util.int32ToString)(n$$6), st$$25);
    p_assref("", st$$25);
  }
}

function p_tycon(x$$18, st$$32) {
  switch (x$$18.tag) {
    case 2:
      {
        const a$$8 = x$$18.fields[0];
        SimplePickle$$$p_byte(2, st$$32);
        p_NamedType(a$$8, st$$32);
        break;
      }

    case 0:
      {
        const a$$9 = x$$18.fields[0] | 0;
        SimplePickle$$$p_byte(3, st$$32);
        SimplePickle$$$p_int(a$$9, st$$32);
        break;
      }

    default:
      {
        SimplePickle$$$p_byte(1, st$$32);
      }
  }
}

function p_type(x$$19, st$$33) {
  if (x$$19.tag === 1) {
    const ts = x$$19.fields[1];
    const c$$1 = x$$19.fields[0];
    SimplePickle$$$p_byte(1, st$$33);
    p_tycon(c$$1, st$$33);
    p_types(ts, st$$33);
  } else {
    const v$$18 = x$$19.fields[0] | 0;
    SimplePickle$$$p_byte(0, st$$33);
    SimplePickle$$$p_int(v$$18, st$$33);
  }
}

function p_types(x$$22, st$$37) {
  SimplePickle$$$p_list(p_type, x$$22, st$$37);
}

function p_varDecl(v$$19, st$$39) {
  SimplePickle$$$p_string(v$$19.vText, st$$39);
  p_type(v$$19.vType, st$$39);
  SimplePickle$$$p_bool(v$$19.vMutable, st$$39);
}

function p_recdFieldSpec(v_0, v_1, st$$44) {
  const v$$20 = [v_0, v_1];
  p_NamedType(v$$20[0], st$$44);
  SimplePickle$$$p_string(v$$20[1], st$$44);
}

function p_ucaseSpec(v_0$$1, v_1$$1, st$$48) {
  const v$$21 = [v_0$$1, v_1$$1];
  p_NamedType(v$$21[0], st$$48);
  SimplePickle$$$p_string(v$$21[1], st$$48);
}

function p_MethodData(a$$16, st$$52) {
  p_NamedType(a$$16.methParent, st$$52);
  p_types(a$$16.methArgTypes, st$$52);
  p_type(a$$16.methRetType, st$$52);
  SimplePickle$$$p_string(a$$16.methName, st$$52);
  SimplePickle$$$p_int(a$$16.numGenericArgs, st$$52);
}

function p_CtorData(a$$18, st$$59) {
  p_NamedType(a$$18.ctorParent, st$$59);
  p_types(a$$18.ctorArgTypes, st$$59);
}

function p_PropInfoData(a_0, a_1, a_2, a_3, st$$63) {
  const a$$20 = [a_0, a_1, a_2, a_3];
  p_NamedType(a$$20[0], st$$63);
  SimplePickle$$$p_string(a$$20[1], st$$63);
  p_type(a$$20[2], st$$63);
  p_types(a$$20[3], st$$63);
}

function p_CombOp(x$$35, st$$69) {
  switch (x$$35.tag) {
    case 2:
      {
        const z = x$$35.fields[2];
        const y = x$$35.fields[1];
        const x$$36 = x$$35.fields[0];
        SimplePickle$$$p_byte(1, st$$69);
        p_NamedType(x$$36, st$$69);
        SimplePickle$$$p_string(y, st$$69);
        SimplePickle$$$p_bool(z, st$$69);
        break;
      }

    case 3:
      {
        SimplePickle$$$p_byte(2, st$$69);
        break;
      }

    case 6:
      {
        const a$$24 = x$$35.fields[0];
        SimplePickle$$$p_byte(3, st$$69);
        p_NamedType(a$$24, st$$69);
        break;
      }

    case 7:
      {
        const y$$1 = x$$35.fields[1];
        const x$$38 = x$$35.fields[0];
        SimplePickle$$$p_byte(4, st$$69);
        p_recdFieldSpec(x$$38, y$$1, st$$69);
        break;
      }

    case 9:
      {
        const y$$2 = x$$35.fields[1];
        const x$$39 = x$$35.fields[0];
        SimplePickle$$$p_byte(5, st$$69);
        p_ucaseSpec(x$$39, y$$2, st$$69);
        break;
      }

    case 10:
      {
        const c$$8 = x$$35.fields[2] | 0;
        const b$$22 = x$$35.fields[1];
        const a$$25 = x$$35.fields[0];
        SimplePickle$$$p_byte(6, st$$69);
        const a$$26 = [a$$25, b$$22];

        (function p1$$12(tupledArg$$4, st$$74) {
          p_ucaseSpec(tupledArg$$4[0], tupledArg$$4[1], st$$74);
        })(a$$26, st$$69);

        SimplePickle$$$p_int(c$$8, st$$69);
        break;
      }

    case 11:
      {
        const y$$3 = x$$35.fields[1];
        const x$$40 = x$$35.fields[0];
        SimplePickle$$$p_byte(7, st$$69);
        p_ucaseSpec(x$$40, y$$3, st$$69);
        break;
      }

    case 12:
      {
        SimplePickle$$$p_byte(8, st$$69);
        break;
      }

    case 13:
      {
        const a$$27 = x$$35.fields[0] | 0;
        SimplePickle$$$p_byte(9, st$$69);
        SimplePickle$$$p_int(a$$27, st$$69);
        break;
      }

    case 15:
      {
        const a$$28 = x$$35.fields[0];
        SimplePickle$$$p_byte(11, st$$69);
        SimplePickle$$$p_bool(a$$28, st$$69);
        break;
      }

    case 16:
      {
        const a$$29 = x$$35.fields[0];
        SimplePickle$$$p_byte(12, st$$69);
        SimplePickle$$$p_string(a$$29, st$$69);
        break;
      }

    case 17:
      {
        const a$$30 = x$$35.fields[0];
        SimplePickle$$$p_byte(13, st$$69);
        SimplePickle$$$p_single(a$$30, st$$69);
        break;
      }

    case 18:
      {
        const a$$31 = x$$35.fields[0];
        SimplePickle$$$p_byte(14, st$$69);
        SimplePickle$$$p_double(a$$31, st$$69);
        break;
      }

    case 19:
      {
        const a$$32 = x$$35.fields[0];
        SimplePickle$$$p_byte(15, st$$69);
        SimplePickle$$$p_char(a$$32, st$$69);
        break;
      }

    case 20:
      {
        const a$$33 = x$$35.fields[0] | 0;
        SimplePickle$$$p_byte(16, st$$69);
        SimplePickle$$$p_int8(a$$33, st$$69);
        break;
      }

    case 21:
      {
        const a$$34 = x$$35.fields[0];
        SimplePickle$$$p_byte(17, st$$69);
        SimplePickle$$$p_uint8(a$$34, st$$69);
        break;
      }

    case 22:
      {
        const a$$35 = x$$35.fields[0] | 0;
        SimplePickle$$$p_byte(18, st$$69);
        SimplePickle$$$p_int16(a$$35, st$$69);
        break;
      }

    case 23:
      {
        const a$$36 = x$$35.fields[0];
        SimplePickle$$$p_byte(19, st$$69);
        SimplePickle$$$p_uint16(a$$36, st$$69);
        break;
      }

    case 24:
      {
        const a$$37 = x$$35.fields[0] | 0;
        SimplePickle$$$p_byte(20, st$$69);
        SimplePickle$$$p_int32(a$$37, st$$69);
        break;
      }

    case 25:
      {
        const a$$38 = x$$35.fields[0];
        SimplePickle$$$p_byte(21, st$$69);
        SimplePickle$$$puint32(a$$38, st$$69);
        break;
      }

    case 26:
      {
        const a$$39 = x$$35.fields[0];
        SimplePickle$$$p_byte(22, st$$69);
        SimplePickle$$$p_int64(a$$39, st$$69);
        break;
      }

    case 27:
      {
        const a$$40 = x$$35.fields[0];
        SimplePickle$$$p_byte(23, st$$69);
        SimplePickle$$$p_uint64(a$$40, st$$69);
        break;
      }

    case 14:
      {
        SimplePickle$$$p_byte(24, st$$69);
        break;
      }

    case 28:
      {
        const d$$7 = x$$35.fields[0];
        SimplePickle$$$p_byte(25, st$$69);
        p_PropInfoData(d$$7[0], d$$7[1], d$$7[2], d$$7[3], st$$69);
        break;
      }

    case 30:
      {
        const a$$41 = x$$35.fields[0];
        SimplePickle$$$p_byte(26, st$$69);
        p_CtorData(a$$41, st$$69);
        break;
      }

    case 32:
      {
        SimplePickle$$$p_byte(28, st$$69);
        break;
      }

    case 35:
      {
        SimplePickle$$$p_byte(29, st$$69);
        break;
      }

    case 36:
      {
        SimplePickle$$$p_byte(30, st$$69);
        break;
      }

    case 31:
      {
        const a$$42 = x$$35.fields[0];
        SimplePickle$$$p_byte(31, st$$69);
        p_MethodData(a$$42, st$$69);
        break;
      }

    case 33:
      {
        SimplePickle$$$p_byte(32, st$$69);
        break;
      }

    case 34:
      {
        SimplePickle$$$p_byte(33, st$$69);
        break;
      }

    case 37:
      {
        SimplePickle$$$p_byte(34, st$$69);
        break;
      }

    case 5:
      {
        SimplePickle$$$p_byte(35, st$$69);
        break;
      }

    case 8:
      {
        const y$$4 = x$$35.fields[1];
        const x$$41 = x$$35.fields[0];
        SimplePickle$$$p_byte(36, st$$69);
        p_recdFieldSpec(x$$41, y$$4, st$$69);
        break;
      }

    case 29:
      {
        const b$$24 = x$$35.fields[1];
        const a$$43 = x$$35.fields[0];
        SimplePickle$$$p_byte(37, st$$69);
        p_NamedType(a$$43, st$$69);
        SimplePickle$$$p_string(b$$24, st$$69);
        break;
      }

    case 4:
      {
        SimplePickle$$$p_byte(38, st$$69);
        break;
      }

    case 0:
      {
        SimplePickle$$$p_byte(39, st$$69);
        break;
      }

    case 38:
      {
        SimplePickle$$$p_byte(40, st$$69);
        break;
      }

    case 39:
      {
        SimplePickle$$$p_byte(41, st$$69);
        break;
      }

    case 40:
      {
        const d$$8 = x$$35.fields[0];
        SimplePickle$$$p_byte(42, st$$69);
        p_PropInfoData(d$$8[0], d$$8[1], d$$8[2], d$$8[3], st$$69);
        break;
      }

    case 41:
      {
        const b$$26 = x$$35.fields[1];
        const a$$45 = x$$35.fields[0];
        SimplePickle$$$p_byte(43, st$$69);
        p_NamedType(a$$45, st$$69);
        SimplePickle$$$p_string(b$$26, st$$69);
        break;
      }

    case 42:
      {
        SimplePickle$$$p_byte(44, st$$69);
        break;
      }

    case 44:
      {
        SimplePickle$$$p_byte(45, st$$69);
        break;
      }

    case 45:
      {
        SimplePickle$$$p_byte(46, st$$69);
        break;
      }

    case 46:
      {
        SimplePickle$$$p_byte(47, st$$69);
        break;
      }

    case 47:
      {
        SimplePickle$$$p_byte(48, st$$69);
        break;
      }

    case 43:
      {
        SimplePickle$$$p_byte(49, st$$69);
        break;
      }

    default:
      {
        SimplePickle$$$p_byte(0, st$$69);
      }
  }
}

function p_expr(x$$44, st$$83) {
  switch (x$$44.tag) {
    case 2:
      {
        const v$$22 = x$$44.fields[0] | 0;
        SimplePickle$$$p_byte(1, st$$83);
        SimplePickle$$$p_int(v$$22, st$$83);
        break;
      }

    case 4:
      {
        const v$$23 = x$$44.fields[0];
        const e$$6 = x$$44.fields[1];
        SimplePickle$$$p_byte(2, st$$83);
        p_varDecl(v$$23, st$$83);
        p_expr(e$$6, st$$83);
        break;
      }

    case 5:
      {
        const ty$$23 = x$$44.fields[0];
        const idx$$1 = x$$44.fields[1] | 0;
        SimplePickle$$$p_byte(3, st$$83);
        p_type(ty$$23, st$$83);
        SimplePickle$$$p_int(idx$$1, st$$83);
        break;
      }

    case 3:
      {
        const tm = x$$44.fields[0];
        SimplePickle$$$p_byte(4, st$$83);
        p_expr(tm, st$$83);
        break;
      }

    case 0:
      {
        const e$$7 = x$$44.fields[0];
        const attrs = x$$44.fields[1];
        SimplePickle$$$p_byte(5, st$$83);
        p_expr(e$$7, st$$83);

        (function p2$$16(x$$52, st$$94) {
          SimplePickle$$$p_list(p_expr, x$$52, st$$94);
        })(attrs, st$$83);

        break;
      }

    case 6:
      {
        const ty$$24 = x$$44.fields[0];
        SimplePickle$$$p_byte(6, st$$83);
        p_type(ty$$24, st$$83);
        break;
      }

    case 7:
      {
        const tm$$1 = x$$44.fields[0];
        SimplePickle$$$p_byte(7, st$$83);
        p_expr(tm$$1, st$$83);
        break;
      }

    default:
      {
        const ts$$1 = x$$44.fields[1];
        const c$$10 = x$$44.fields[0];
        const args$$13 = x$$44.fields[2];
        SimplePickle$$$p_byte(0, st$$83);
        p_CombOp(c$$10, st$$83);
        p_types(ts$$1, st$$83);

        (function p3$$4(x$$48, st$$87) {
          SimplePickle$$$p_list(p_expr, x$$48, st$$87);
        })(args$$13, st$$83);
      }
  }
}

const ModuleDefnData = (0, _Types.declare)(function ModuleDefnData(arg1, arg2, arg3) {
  this.Module = arg1;
  this.Name = arg2;
  this.IsProperty = arg3;
}, _Types.Record);
exports.ModuleDefnData = ModuleDefnData;
const MethodBaseData = (0, _Types.declare)(function MethodBaseData(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.MethodBaseData = MethodBaseData;

function pickle(x$$53) {
  return SimplePickle$$$pickle_obj(p_expr, x$$53);
}

function p_MethodBase(x$$55, st$$97) {
  switch (x$$55.tag) {
    case 1:
      {
        const md$$1 = x$$55.fields[0];
        SimplePickle$$$p_byte(1, st$$97);
        p_MethodData(md$$1, st$$97);
        break;
      }

    case 2:
      {
        const md$$2 = x$$55.fields[0];
        SimplePickle$$$p_byte(2, st$$97);
        p_CtorData(md$$2, st$$97);
        break;
      }

    default:
      {
        const md = x$$55.fields[0];
        SimplePickle$$$p_byte(0, st$$97);
        p_NamedType(md.Module, st$$97);
        SimplePickle$$$p_string(md.Name, st$$97);
        SimplePickle$$$p_bool(md.IsProperty, st$$97);
      }
  }
}

function PickleDefns(x$$59) {
  return SimplePickle$$$pickle_obj(function p$$1(x$$58, st$$102) {
    SimplePickle$$$p_list(function f$$3(tupledArg$$5, st$$98) {
      p_MethodBase(tupledArg$$5[0], st$$98);
      p_expr(tupledArg$$5[1], st$$98);
    }, x$$58, st$$102);
  }, x$$59);
}