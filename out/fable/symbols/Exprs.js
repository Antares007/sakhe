"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExprTranslationImpl$$$nonNil = ExprTranslationImpl$$$nonNil;
exports.ExprTranslationImpl$002EExprTranslationEnv$$$get_Empty = ExprTranslationImpl$002EExprTranslationEnv$$$get_Empty;
exports.ExprTranslationImpl$002EExprTranslationEnv$$BindTypar$$Z2BE70ABC = ExprTranslationImpl$002EExprTranslationEnv$$BindTypar$$Z2BE70ABC;
exports.ExprTranslationImpl$002EExprTranslationEnv$$BindTypars$$5242D310 = ExprTranslationImpl$002EExprTranslationEnv$$BindTypars$$5242D310;
exports.ExprTranslationImpl$002EExprTranslationEnv$$BindVal$$7D0CFEA5 = ExprTranslationImpl$002EExprTranslationEnv$$BindVal$$7D0CFEA5;
exports.ExprTranslationImpl$002EExprTranslationEnv$$BindIsInstVal = ExprTranslationImpl$002EExprTranslationEnv$$BindIsInstVal;
exports.ExprTranslationImpl$002EExprTranslationEnv$$BindSubstVal = ExprTranslationImpl$002EExprTranslationEnv$$BindSubstVal;
exports.ExprTranslationImpl$002EExprTranslationEnv$$BindVals$$Z51437EF1 = ExprTranslationImpl$002EExprTranslationEnv$$BindVals$$Z51437EF1;
exports.ExprTranslationImpl$002EExprTranslationEnv$$BindCurriedVals$$614D085 = ExprTranslationImpl$002EExprTranslationEnv$$BindCurriedVals$$614D085;
exports.ExprTranslationImpl$$$wfail = ExprTranslationImpl$$$wfail;
exports.FSharpObjectExprOverride$$$$002Ector$$410CA850 = FSharpObjectExprOverride$$$$002Ector$$410CA850;
exports.FSharpObjectExprOverride$$get_Signature = FSharpObjectExprOverride$$get_Signature;
exports.FSharpObjectExprOverride$$get_GenericParameters = FSharpObjectExprOverride$$get_GenericParameters;
exports.FSharpObjectExprOverride$$get_CurriedParameterGroups = FSharpObjectExprOverride$$get_CurriedParameterGroups;
exports.FSharpObjectExprOverride$$get_Body = FSharpObjectExprOverride$$get_Body;
exports.FSharpExpr$$$$002Ector$$740F346C = FSharpExpr$$$$002Ector$$740F346C;
exports.FSharpExpr$$get_Range = FSharpExpr$$get_Range;
exports.FSharpExpr$$get_Type = FSharpExpr$$get_Type;
exports.FSharpExpr$$get_cenv = FSharpExpr$$get_cenv;
exports.FSharpExpr$$get_E = FSharpExpr$$get_E;
exports.FSharpExpr$$get_ImmediateSubExpressions = FSharpExpr$$get_ImmediateSubExpressions;
exports.FSharpExprConvert$$$IsStaticInitializationField = FSharpExprConvert$$$IsStaticInitializationField;
exports.FSharpExprConvert$$$$007CStaticInitializationCheck$007C_$007C = FSharpExprConvert$$$$007CStaticInitializationCheck$007C_$007C;
exports.FSharpExprConvert$$$$007CStaticInitializationCount$007C_$007C = FSharpExprConvert$$$$007CStaticInitializationCount$007C_$007C;
exports.FSharpExprConvert$$$$007CILUnaryOp$007C_$007C = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C;
exports.FSharpExprConvert$$$$007CILBinaryOp$007C_$007C = FSharpExprConvert$$$$007CILBinaryOp$007C_$007C;
exports.FSharpExprConvert$$$$007CILConvertOp$007C_$007C = FSharpExprConvert$$$$007CILConvertOp$007C_$007C;
exports.FSharpExprConvert$$$$007CTTypeConvOp$007C_$007C = FSharpExprConvert$$$$007CTTypeConvOp$007C_$007C;
exports.FSharpExprConvert$$$ConvType = FSharpExprConvert$$$ConvType;
exports.FSharpExprConvert$$$ConvTypes = FSharpExprConvert$$$ConvTypes;
exports.FSharpExprConvert$$$ConvILTypeRefApp = FSharpExprConvert$$$ConvILTypeRefApp;
exports.FSharpExprConvert$$$ConvUnionCaseRef = FSharpExprConvert$$$ConvUnionCaseRef;
exports.FSharpExprConvert$$$ConvRecdFieldRef = FSharpExprConvert$$$ConvRecdFieldRef;
exports.FSharpExprConvert$$$exprOfExprAddr = FSharpExprConvert$$$exprOfExprAddr;
exports.FSharpExprConvert$$$Mk = FSharpExprConvert$$$Mk;
exports.FSharpExprConvert$$$Mk2 = FSharpExprConvert$$$Mk2;
exports.FSharpExprConvert$$$ConvLValueExpr = FSharpExprConvert$$$ConvLValueExpr;
exports.FSharpExprConvert$$$ConvExpr = FSharpExprConvert$$$ConvExpr;
exports.FSharpExprConvert$$$ConvExprLinear = FSharpExprConvert$$$ConvExprLinear;
exports.FSharpExprConvert$$$ConvExprPrimLinear = FSharpExprConvert$$$ConvExprPrimLinear;
exports.FSharpExprConvert$$$ConvModuleValueOrMemberUseLinear = FSharpExprConvert$$$ConvModuleValueOrMemberUseLinear;
exports.FSharpExprConvert$$$ConvExprPrim = FSharpExprConvert$$$ConvExprPrim;
exports.FSharpExprConvert$$$ConvLetBind = FSharpExprConvert$$$ConvLetBind;
exports.FSharpExprConvert$$$ConvILCall = FSharpExprConvert$$$ConvILCall;
exports.FSharpExprConvert$$$ConvObjectModelCallLinear = FSharpExprConvert$$$ConvObjectModelCallLinear;
exports.FSharpExprConvert$$$ConvExprs = FSharpExprConvert$$$ConvExprs;
exports.FSharpExprConvert$$$ConvExprsLinear = FSharpExprConvert$$$ConvExprsLinear;
exports.FSharpExprConvert$$$ConvTargetsLinear = FSharpExprConvert$$$ConvTargetsLinear;
exports.FSharpExprConvert$$$ConvValRef = FSharpExprConvert$$$ConvValRef;
exports.FSharpExprConvert$$$ConvVal = FSharpExprConvert$$$ConvVal;
exports.FSharpExprConvert$$$ConvConst = FSharpExprConvert$$$ConvConst;
exports.FSharpExprConvert$$$ConvDecisionTree = FSharpExprConvert$$$ConvDecisionTree;
exports.FSharpExprConvert$$$ConvDecisionTreePrim = FSharpExprConvert$$$ConvDecisionTreePrim;
exports.FSharpExprConvert$$$ConvExprOnDemand = FSharpExprConvert$$$ConvExprOnDemand;
exports.FSharpAssemblyContents$$$$002Ector$$68827A5F = FSharpAssemblyContents$$$$002Ector$$68827A5F;
exports.FSharpAssemblyContents$$$$002Ector$$2BF0DF82 = FSharpAssemblyContents$$$$002Ector$$2BF0DF82;
exports.FSharpAssemblyContents$$get_ImplementationFiles = FSharpAssemblyContents$$get_ImplementationFiles;
exports.FSharpImplementationFileContents$$$$002Ector$$Z172BEBAB = FSharpImplementationFileContents$$$$002Ector$$Z172BEBAB;
exports.FSharpImplementationFileContents$$get_QualifiedName = FSharpImplementationFileContents$$get_QualifiedName;
exports.FSharpImplementationFileContents$$get_FileName = FSharpImplementationFileContents$$get_FileName;
exports.FSharpImplementationFileContents$$get_Declarations = FSharpImplementationFileContents$$get_Declarations;
exports.FSharpImplementationFileContents$$get_HasExplicitEntryPoint = FSharpImplementationFileContents$$get_HasExplicitEntryPoint;
exports.FSharpImplementationFileContents$$get_IsScript = FSharpImplementationFileContents$$get_IsScript;
exports.BasicPatterns$$$$007CValue$007C_$007C = BasicPatterns$$$$007CValue$007C_$007C;
exports.BasicPatterns$$$$007CConst$007C_$007C = BasicPatterns$$$$007CConst$007C_$007C;
exports.BasicPatterns$$$$007CTypeLambda$007C_$007C = BasicPatterns$$$$007CTypeLambda$007C_$007C;
exports.BasicPatterns$$$$007CLambda$007C_$007C = BasicPatterns$$$$007CLambda$007C_$007C;
exports.BasicPatterns$$$$007CApplication$007C_$007C = BasicPatterns$$$$007CApplication$007C_$007C;
exports.BasicPatterns$$$$007CIfThenElse$007C_$007C = BasicPatterns$$$$007CIfThenElse$007C_$007C;
exports.BasicPatterns$$$$007CLet$007C_$007C = BasicPatterns$$$$007CLet$007C_$007C;
exports.BasicPatterns$$$$007CLetRec$007C_$007C = BasicPatterns$$$$007CLetRec$007C_$007C;
exports.BasicPatterns$$$$007CNewRecord$007C_$007C = BasicPatterns$$$$007CNewRecord$007C_$007C;
exports.BasicPatterns$$$$007CNewUnionCase$007C_$007C = BasicPatterns$$$$007CNewUnionCase$007C_$007C;
exports.BasicPatterns$$$$007CNewTuple$007C_$007C = BasicPatterns$$$$007CNewTuple$007C_$007C;
exports.BasicPatterns$$$$007CTupleGet$007C_$007C = BasicPatterns$$$$007CTupleGet$007C_$007C;
exports.BasicPatterns$$$$007CCall$007C_$007C = BasicPatterns$$$$007CCall$007C_$007C;
exports.BasicPatterns$$$$007CNewObject$007C_$007C = BasicPatterns$$$$007CNewObject$007C_$007C;
exports.BasicPatterns$$$$007CFSharpFieldGet$007C_$007C = BasicPatterns$$$$007CFSharpFieldGet$007C_$007C;
exports.BasicPatterns$$$$007CFSharpFieldSet$007C_$007C = BasicPatterns$$$$007CFSharpFieldSet$007C_$007C;
exports.BasicPatterns$$$$007CUnionCaseGet$007C_$007C = BasicPatterns$$$$007CUnionCaseGet$007C_$007C;
exports.BasicPatterns$$$$007CUnionCaseTag$007C_$007C = BasicPatterns$$$$007CUnionCaseTag$007C_$007C;
exports.BasicPatterns$$$$007CUnionCaseTest$007C_$007C = BasicPatterns$$$$007CUnionCaseTest$007C_$007C;
exports.BasicPatterns$$$$007CNewArray$007C_$007C = BasicPatterns$$$$007CNewArray$007C_$007C;
exports.BasicPatterns$$$$007CCoerce$007C_$007C = BasicPatterns$$$$007CCoerce$007C_$007C;
exports.BasicPatterns$$$$007CQuote$007C_$007C = BasicPatterns$$$$007CQuote$007C_$007C;
exports.BasicPatterns$$$$007CTypeTest$007C_$007C = BasicPatterns$$$$007CTypeTest$007C_$007C;
exports.BasicPatterns$$$$007CSequential$007C_$007C = BasicPatterns$$$$007CSequential$007C_$007C;
exports.BasicPatterns$$$$007CFastIntegerForLoop$007C_$007C = BasicPatterns$$$$007CFastIntegerForLoop$007C_$007C;
exports.BasicPatterns$$$$007CWhileLoop$007C_$007C = BasicPatterns$$$$007CWhileLoop$007C_$007C;
exports.BasicPatterns$$$$007CTryFinally$007C_$007C = BasicPatterns$$$$007CTryFinally$007C_$007C;
exports.BasicPatterns$$$$007CTryWith$007C_$007C = BasicPatterns$$$$007CTryWith$007C_$007C;
exports.BasicPatterns$$$$007CNewDelegate$007C_$007C = BasicPatterns$$$$007CNewDelegate$007C_$007C;
exports.BasicPatterns$$$$007CDefaultValue$007C_$007C = BasicPatterns$$$$007CDefaultValue$007C_$007C;
exports.BasicPatterns$$$$007CAddressSet$007C_$007C = BasicPatterns$$$$007CAddressSet$007C_$007C;
exports.BasicPatterns$$$$007CValueSet$007C_$007C = BasicPatterns$$$$007CValueSet$007C_$007C;
exports.BasicPatterns$$$$007CAddressOf$007C_$007C = BasicPatterns$$$$007CAddressOf$007C_$007C;
exports.BasicPatterns$$$$007CThisValue$007C_$007C = BasicPatterns$$$$007CThisValue$007C_$007C;
exports.BasicPatterns$$$$007CBaseValue$007C_$007C = BasicPatterns$$$$007CBaseValue$007C_$007C;
exports.BasicPatterns$$$$007CILAsm$007C_$007C = BasicPatterns$$$$007CILAsm$007C_$007C;
exports.BasicPatterns$$$$007CILFieldGet$007C_$007C = BasicPatterns$$$$007CILFieldGet$007C_$007C;
exports.BasicPatterns$$$$007CILFieldSet$007C_$007C = BasicPatterns$$$$007CILFieldSet$007C_$007C;
exports.BasicPatterns$$$$007CObjectExpr$007C_$007C = BasicPatterns$$$$007CObjectExpr$007C_$007C;
exports.BasicPatterns$$$$007CDecisionTree$007C_$007C = BasicPatterns$$$$007CDecisionTree$007C_$007C;
exports.BasicPatterns$$$$007CDecisionTreeSuccess$007C_$007C = BasicPatterns$$$$007CDecisionTreeSuccess$007C_$007C;
exports.BasicPatterns$$$$007CUnionCaseSet$007C_$007C = BasicPatterns$$$$007CUnionCaseSet$007C_$007C;
exports.BasicPatterns$$$$007CTraitCall$007C_$007C = BasicPatterns$$$$007CTraitCall$007C_$007C;
exports.FSharpImplementationFileContents = exports.FSharpAssemblyContents = exports.FSharpImplementationFileDeclaration = exports.FSharpExpr = exports.FSharpObjectExprOverride = exports.E = exports.ExprTranslationImpl$002EIgnoringPartOfQuotedTermWarning = exports.ExprTranslationImpl$002EExprTranslationEnv = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _TastOps = require("../fsharp/TastOps");

var _Long = require("../fable-core.2.0.3/Long");

var _Map = require("../fable-core.2.0.3/Map");

var _tast = require("../fsharp/tast");

var _List = require("../fable-core.2.0.3/List");

var _String = require("../fable-core.2.0.3/String");

var _Symbols = require("./Symbols");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Option = require("../fable-core.2.0.3/Option");

var _TcGlobals = require("../fsharp/TcGlobals");

var _import = require("../fsharp/import");

var _il = require("../absil/il");

var _QuotationTranslator = require("../fsharp/QuotationTranslator");

var _illib = require("../absil/illib");

var _TypeRelations = require("../fsharp/TypeRelations");

var _Util = require("../fable-core.2.0.3/Util");

var _infos = require("../fsharp/infos");

var _PrettyNaming = require("../fsharp/PrettyNaming");

var _ast = require("../fsharp/ast");

var _range = require("../fsharp/range");

function ExprTranslationImpl$$$nonNil(x) {
  return !(x.tail == null);
}

const ExprTranslationImpl$002EExprTranslationEnv = (0, _Types.declare)(function ExprTranslationImpl$002EExprTranslationEnv(arg1, arg2, arg3, arg4) {
  this.vs = arg1;
  this.tyvs = arg2;
  this.isinstVals = arg3;
  this.substVals = arg4;
}, _Types.Record);
exports.ExprTranslationImpl$002EExprTranslationEnv = ExprTranslationImpl$002EExprTranslationEnv;

function ExprTranslationImpl$002EExprTranslationEnv$$$get_Empty() {
  return new ExprTranslationImpl$002EExprTranslationEnv((0, _TastOps.ValMap$00601$$$get_Empty)(), (0, _Map.empty)({
    Compare: _Long.compare
  }), (0, _TastOps.ValMap$00601$$$get_Empty)(), (0, _TastOps.ValMap$00601$$$get_Empty)());
}

function ExprTranslationImpl$002EExprTranslationEnv$$BindTypar$$Z2BE70ABC(env, v, gp) {
  return new ExprTranslationImpl$002EExprTranslationEnv(env.vs, (0, _Map.FSharpMap$$Add$$5BDDA1)(env.tyvs, (0, _tast.Typar$$get_Stamp)(v), gp), env.isinstVals, env.substVals);
}

function ExprTranslationImpl$002EExprTranslationEnv$$BindTypars$$5242D310(env$$1, vs) {
  return (0, _List.fold)(function folder(env$$2, v$$1) {
    return ExprTranslationImpl$002EExprTranslationEnv$$BindTypar$$Z2BE70ABC(env$$2, v$$1[0], v$$1[1]);
  }, env$$1, vs);
}

function ExprTranslationImpl$002EExprTranslationEnv$$BindVal$$7D0CFEA5(env$$3, v$$2) {
  return new ExprTranslationImpl$002EExprTranslationEnv((0, _TastOps.ValMap$00601$$Add)(env$$3.vs, v$$2, null), env$$3.tyvs, env$$3.isinstVals, env$$3.substVals);
}

function ExprTranslationImpl$002EExprTranslationEnv$$BindIsInstVal(env$$4, v$$3, ty, e) {
  return new ExprTranslationImpl$002EExprTranslationEnv(env$$4.vs, env$$4.tyvs, (0, _TastOps.ValMap$00601$$Add)(env$$4.isinstVals, v$$3, [ty, e]), env$$4.substVals);
}

function ExprTranslationImpl$002EExprTranslationEnv$$BindSubstVal(env$$5, v$$4, e$$1) {
  return new ExprTranslationImpl$002EExprTranslationEnv(env$$5.vs, env$$5.tyvs, env$$5.isinstVals, (0, _TastOps.ValMap$00601$$Add)(env$$5.substVals, v$$4, e$$1));
}

function ExprTranslationImpl$002EExprTranslationEnv$$BindVals$$Z51437EF1(env$$6, vs$$1) {
  return (0, _List.fold)(function folder$$1(env$$7, v$$5) {
    return ExprTranslationImpl$002EExprTranslationEnv$$BindVal$$7D0CFEA5(env$$7, v$$5);
  }, env$$6, vs$$1);
}

function ExprTranslationImpl$002EExprTranslationEnv$$BindCurriedVals$$614D085(env$$8, vsl) {
  return (0, _List.fold)(function folder$$2(env$$9, vs$$2) {
    return ExprTranslationImpl$002EExprTranslationEnv$$BindVals$$Z51437EF1(env$$9, vs$$2);
  }, env$$8, vsl);
}

const ExprTranslationImpl$002EIgnoringPartOfQuotedTermWarning = (0, _Types.declare)(function ExprTranslationImpl$002EIgnoringPartOfQuotedTermWarning(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.ExprTranslationImpl$002EIgnoringPartOfQuotedTermWarning = ExprTranslationImpl$002EIgnoringPartOfQuotedTermWarning;

function ExprTranslationImpl$$$wfail(msg, m) {
  throw new Error(msg + (0, _String.toText)((0, _String.printf)(" at %s"))(m.toString()));
}

const E = (0, _Types.declare)(function E(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.E = E;
const FSharpObjectExprOverride = (0, _Types.declare)(function FSharpObjectExprOverride(sgn, gps, args, body) {
  const $this$$3 = this;
  $this$$3.sgn = sgn;
  $this$$3.gps = gps;
  $this$$3.args = args;
  $this$$3.body = body;
});
exports.FSharpObjectExprOverride = FSharpObjectExprOverride;

function FSharpObjectExprOverride$$$$002Ector$$410CA850(sgn, gps, args, body) {
  return this != null ? FSharpObjectExprOverride.call(this, sgn, gps, args, body) : new FSharpObjectExprOverride(sgn, gps, args, body);
}

function FSharpObjectExprOverride$$get_Signature(__) {
  return __.sgn;
}

function FSharpObjectExprOverride$$get_GenericParameters(__$$1) {
  return __$$1.gps;
}

function FSharpObjectExprOverride$$get_CurriedParameterGroups(__$$2) {
  return __$$2.args;
}

function FSharpObjectExprOverride$$get_Body(__$$3) {
  return __$$3.body;
}

const FSharpExpr = (0, _Types.declare)(function FSharpExpr(cenv, f, e$$2, m$$1, ty$$1) {
  const $this$$4 = this;
  $this$$4["cenv@118"] = cenv;
  $this$$4.f = f;
  $this$$4.e = e$$2;
  $this$$4.m = m$$1;
  $this$$4.ty = ty$$1;
});
exports.FSharpExpr = FSharpExpr;

function FSharpExpr$$$$002Ector$$740F346C(cenv, f, e$$2, m$$1, ty$$1) {
  return this != null ? FSharpExpr.call(this, cenv, f, e$$2, m$$1, ty$$1) : new FSharpExpr(cenv, f, e$$2, m$$1, ty$$1);
}

function FSharpExpr$$get_Range(x$$1) {
  return x$$1.m;
}

function FSharpExpr$$get_Type(x$$2) {
  return (0, _Symbols.FSharpType$$$$002Ector$$4367869B)(x$$2["cenv@118"], x$$2.ty);
}

function FSharpExpr$$get_cenv(x$$3) {
  return x$$3["cenv@118"];
}

function FSharpExpr$$get_E(x$$4) {
  if (x$$4.f != null) {
    const f$$1 = x$$4.f;
    return FSharpExpr$$get_E(f$$1());
  } else {
    return x$$4.e;
  }
}

FSharpExpr.prototype.toString = function () {
  const x$$5 = this;
  return (0, _String.toText)((0, _String.printf)("%+A"))(FSharpExpr$$get_E(x$$5));
};

function FSharpExpr$$get_ImmediateSubExpressions(x$$6) {
  const matchValue$$1 = FSharpExpr$$get_E(x$$6);

  switch (matchValue$$1.tag) {
    case 33:
      {
        const _ty = matchValue$$1.fields[1];
        const _constValue = matchValue$$1.fields[0];
        return (0, _Types.L)();
      }

    case 5:
      {
        const body$$1 = matchValue$$1.fields[1];
        const _v$$1 = matchValue$$1.fields[0];
        return (0, _Types.L)(body$$1, (0, _Types.L)());
      }

    case 4:
      {
        const body$$2 = matchValue$$1.fields[1];
        const _v$$2 = matchValue$$1.fields[0];
        return (0, _Types.L)(body$$2, (0, _Types.L)());
      }

    case 3:
      {
        const f$$2 = matchValue$$1.fields[0];
        const arg = matchValue$$1.fields[2];
        const _tyargs = matchValue$$1.fields[1];
        return (0, _Types.L)(f$$2, arg);
      }

    case 7:
      {
        const e3 = matchValue$$1.fields[2];
        const e2 = matchValue$$1.fields[1];
        const e1 = matchValue$$1.fields[0];
        return (0, _Types.L)(e1, (0, _Types.L)(e2, (0, _Types.L)(e3, (0, _Types.L)())));
      }

    case 13:
      {
        const bindingExpr = matchValue$$1.fields[0][1];
        const b = matchValue$$1.fields[1];
        const _bindingVar = matchValue$$1.fields[0][0];
        return (0, _Types.L)(bindingExpr, (0, _Types.L)(b, (0, _Types.L)()));
      }

    case 12:
      {
        const ves = matchValue$$1.fields[0];
        const b$$1 = matchValue$$1.fields[1];
        return (0, _List.append)((0, _List.map)(function (tuple) {
          return tuple[1];
        }, ves), (0, _Types.L)(b$$1, (0, _Types.L)()));
      }

    case 14:
      {
        const es = matchValue$$1.fields[1];
        const _recordType = matchValue$$1.fields[0];
        return es;
      }

    case 18:
      {
        const es$$1 = matchValue$$1.fields[2];
        const _unionType = matchValue$$1.fields[0];
        const _unionCase = matchValue$$1.fields[1];
        return es$$1;
      }

    case 24:
      {
        const es$$2 = matchValue$$1.fields[1];
        const _tupleType = matchValue$$1.fields[0];
        return es$$2;
      }

    case 25:
      {
        const tupleExpr = matchValue$$1.fields[2];
        const _tupleType$$1 = matchValue$$1.fields[0];

        const _itemIndex = matchValue$$1.fields[1] | 0;

        return (0, _Types.L)(tupleExpr, (0, _Types.L)());
      }

    case 10:
      {
        const objOpt = matchValue$$1.fields[0];
        const es$$3 = matchValue$$1.fields[4];
        const _d = matchValue$$1.fields[3];
        const _c = matchValue$$1.fields[2];
        const _b = matchValue$$1.fields[1];

        if (objOpt != null) {
          const x$$7 = objOpt;
          return (0, _Types.L)(x$$7, es$$3);
        } else {
          return es$$3;
        }
      }

    case 11:
      {
        const c = matchValue$$1.fields[2];
        const _b$$1 = matchValue$$1.fields[1];
        const _a = matchValue$$1.fields[0];
        return c;
      }

    case 16:
      {
        const objOpt$$1 = matchValue$$1.fields[0];
        const _c$$1 = matchValue$$1.fields[2];
        const _b$$2 = matchValue$$1.fields[1];

        if (objOpt$$1 != null) {
          const x$$8 = objOpt$$1;
          return (0, _Types.L)(x$$8, (0, _Types.L)());
        } else {
          return (0, _Types.L)();
        }
      }

    case 17:
      {
        const objOpt$$2 = matchValue$$1.fields[0];
        const d = matchValue$$1.fields[3];
        const _c$$2 = matchValue$$1.fields[2];
        const _b$$3 = matchValue$$1.fields[1];

        if (objOpt$$2 != null) {
          const x$$9 = objOpt$$2;
          return (0, _Types.L)(x$$9, (0, _Types.L)(d, (0, _Types.L)()));
        } else {
          return (0, _Types.L)(d, (0, _Types.L)());
        }
      }

    case 19:
      {
        const obj = matchValue$$1.fields[0];
        const _d$$1 = matchValue$$1.fields[3];
        const _c$$3 = matchValue$$1.fields[2];
        const _b$$4 = matchValue$$1.fields[1];
        return (0, _Types.L)(obj, (0, _Types.L)());
      }

    case 21:
      {
        const obj$$1 = matchValue$$1.fields[0];
        const _b$$5 = matchValue$$1.fields[1];
        return (0, _Types.L)(obj$$1, (0, _Types.L)());
      }

    case 22:
      {
        const obj$$2 = matchValue$$1.fields[0];
        const _c$$4 = matchValue$$1.fields[2];
        const _b$$6 = matchValue$$1.fields[1];
        return (0, _Types.L)(obj$$2, (0, _Types.L)());
      }

    case 27:
      {
        const elems = matchValue$$1.fields[1];
        const _ty$$1 = matchValue$$1.fields[0];
        return elems;
      }

    case 26:
      {
        const b$$2 = matchValue$$1.fields[1];
        const _ty$$2 = matchValue$$1.fields[0];
        return (0, _Types.L)(b$$2, (0, _Types.L)());
      }

    case 6:
      {
        const a = matchValue$$1.fields[0];
        return (0, _Types.L)(a, (0, _Types.L)());
      }

    case 28:
      {
        const b$$3 = matchValue$$1.fields[1];
        const _ty$$3 = matchValue$$1.fields[0];
        return (0, _Types.L)(b$$3, (0, _Types.L)());
      }

    case 35:
      {
        const b$$4 = matchValue$$1.fields[1];
        const a$$1 = matchValue$$1.fields[0];
        return (0, _Types.L)(a$$1, (0, _Types.L)(b$$4, (0, _Types.L)()));
      }

    case 36:
      {
        const c$$1 = matchValue$$1.fields[2];
        const b$$5 = matchValue$$1.fields[1];
        const a$$2 = matchValue$$1.fields[0];
        const _dir = matchValue$$1.fields[3];
        return (0, _Types.L)(a$$2, (0, _Types.L)(b$$5, (0, _Types.L)(c$$1, (0, _Types.L)())));
      }

    case 37:
      {
        const guard = matchValue$$1.fields[0];
        const body$$3 = matchValue$$1.fields[1];
        return (0, _Types.L)(guard, (0, _Types.L)(body$$3, (0, _Types.L)()));
      }

    case 38:
      {
        const body$$4 = matchValue$$1.fields[0];
        const b$$6 = matchValue$$1.fields[1];
        return (0, _Types.L)(body$$4, (0, _Types.L)(b$$6, (0, _Types.L)()));
      }

    case 39:
      {
        const handler = matchValue$$1.fields[4];
        const body$$5 = matchValue$$1.fields[0];
        const _d$$2 = matchValue$$1.fields[3];
        const _c$$5 = matchValue$$1.fields[2];
        const _b$$7 = matchValue$$1.fields[1];
        return (0, _Types.L)(body$$5, (0, _Types.L)(handler, (0, _Types.L)()));
      }

    case 40:
      {
        const body$$6 = matchValue$$1.fields[1];
        const _ty$$4 = matchValue$$1.fields[0];
        return (0, _Types.L)(body$$6, (0, _Types.L)());
      }

    case 32:
      {
        const _ty$$5 = matchValue$$1.fields[0];
        return (0, _Types.L)();
      }

    case 29:
      {
        const rvalueExpr = matchValue$$1.fields[1];
        const lvalueExpr = matchValue$$1.fields[0];
        return (0, _Types.L)(lvalueExpr, (0, _Types.L)(rvalueExpr, (0, _Types.L)()));
      }

    case 30:
      {
        const rvalueExpr$$1 = matchValue$$1.fields[1];
        const _v$$3 = matchValue$$1.fields[0];
        return (0, _Types.L)(rvalueExpr$$1, (0, _Types.L)());
      }

    case 34:
      {
        const lvalueExpr$$1 = matchValue$$1.fields[0];
        return (0, _Types.L)(lvalueExpr$$1, (0, _Types.L)());
      }

    case 1:
      {
        const _ty$$6 = matchValue$$1.fields[0];
        return (0, _Types.L)();
      }

    case 2:
      {
        const _ty$$7 = matchValue$$1.fields[0];
        return (0, _Types.L)();
      }

    case 43:
      {
        const argExprs = matchValue$$1.fields[2];
        const _tyargs$$1 = matchValue$$1.fields[1];
        const _code = matchValue$$1.fields[0];
        return argExprs;
      }

    case 41:
      {
        const objOpt$$3 = matchValue$$1.fields[0];
        const _ty$$8 = matchValue$$1.fields[1];
        const _fieldName = matchValue$$1.fields[2];

        if (objOpt$$3 != null) {
          const x$$10 = objOpt$$3;
          return (0, _Types.L)(x$$10, (0, _Types.L)());
        } else {
          return (0, _Types.L)();
        }
      }

    case 42:
      {
        const objOpt$$4 = matchValue$$1.fields[0];
        const d$$1 = matchValue$$1.fields[3];
        const _ty$$9 = matchValue$$1.fields[1];
        const _fieldName$$1 = matchValue$$1.fields[2];

        if (objOpt$$4 != null) {
          const x$$11 = objOpt$$4;
          return (0, _Types.L)(x$$11, (0, _Types.L)(d$$1, (0, _Types.L)()));
        } else {
          return (0, _Types.L)(d$$1, (0, _Types.L)());
        }
      }

    case 15:
      {
        const overrides = matchValue$$1.fields[2];
        const interfaceImpls = matchValue$$1.fields[3];
        const basecall = matchValue$$1.fields[1];
        const _ty$$10 = matchValue$$1.fields[0];
        return (0, _List.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Seq.singleton)(basecall), (0, _Seq.delay)(function () {
            return (0, _Seq.append)((0, _Seq.map)(function (m$$2) {
              return FSharpObjectExprOverride$$get_Body(m$$2);
            }, overrides), (0, _Seq.delay)(function () {
              return (0, _Seq.collect)(function (matchValue$$2) {
                return (0, _Seq.map)(function (m$$3) {
                  return FSharpObjectExprOverride$$get_Body(m$$3);
                }, matchValue$$2[1]);
              }, interfaceImpls);
            }));
          }));
        }));
      }

    case 8:
      {
        const targetCases = matchValue$$1.fields[1];
        const inputExpr = matchValue$$1.fields[0];
        return (0, _List.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Seq.singleton)(inputExpr), (0, _Seq.delay)(function () {
            return (0, _Seq.collect)(function (matchValue$$3) {
              return (0, _Seq.singleton)(matchValue$$3[1]);
            }, targetCases);
          }));
        }));
      }

    case 9:
      {
        const targetArgs = matchValue$$1.fields[1];

        const _targetNumber = matchValue$$1.fields[0] | 0;

        return targetArgs;
      }

    case 20:
      {
        const valueExpr = matchValue$$1.fields[4];
        const obj$$3 = matchValue$$1.fields[0];
        const _unionType$$1 = matchValue$$1.fields[1];
        const _unionField = matchValue$$1.fields[3];
        const _unionCase$$1 = matchValue$$1.fields[2];
        return (0, _List.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Seq.singleton)(obj$$3), (0, _Seq.delay)(function () {
            return (0, _Seq.singleton)(valueExpr);
          }));
        }));
      }

    case 23:
      {
        const args$$1 = matchValue$$1.fields[5];
        const _traitName = matchValue$$1.fields[1];
        const _sourceTypes = matchValue$$1.fields[0];
        const _retTypes = matchValue$$1.fields[4];
        const _paramTypes = matchValue$$1.fields[3];
        const _memberFlags = matchValue$$1.fields[2];
        return args$$1;
      }

    case 31:
      {
        return (0, _Types.L)();
      }

    default:
      {
        const _v = matchValue$$1.fields[0];
        return (0, _Types.L)();
      }
  }
}

function FSharpExprConvert$$$IsStaticInitializationField(rfref) {
  if (((0, _tast.RecdField$$get_IsCompilerGenerated)((0, _tast.RecdFieldRef$$get_RecdField)(rfref)) ? (0, _tast.RecdField$$get_IsStatic)((0, _tast.RecdFieldRef$$get_RecdField)(rfref)) : false) ? (0, _tast.RecdField$$get_IsMutable)((0, _tast.RecdFieldRef$$get_RecdField)(rfref)) : false) {
    return (0, _String.startsWith)((0, _tast.RecdField$$get_Name)((0, _tast.RecdFieldRef$$get_RecdField)(rfref)), "init", 4);
  } else {
    return false;
  }
}

function FSharpExprConvert$$$$007CStaticInitializationCheck$007C_$007C(e$$3) {
  var rfref$$1;
  var $target$$14, rfref$$2;

  if (e$$3.tag === 9) {
    if (e$$3.fields[2].tag === 0) {
      if (e$$3.fields[2].fields[0].tag === 11) {
        if (e$$3.fields[2].fields[0].fields[0].tag === 22) {
          if (e$$3.fields[2].fields[0].fields[0].fields[0].tail != null) {
            if (e$$3.fields[2].fields[0].fields[0].fields[0].head.tag === 9) {
              if (e$$3.fields[2].fields[0].fields[0].fields[0].tail.tail == null) {
                if (e$$3.fields[2].fields[0].fields[2].tail != null) {
                  if (e$$3.fields[2].fields[0].fields[2].head.tag === 11) {
                    if (e$$3.fields[2].fields[0].fields[2].head.fields[0].tag === 12) {
                      if (e$$3.fields[2].fields[0].fields[2].tail.tail != null) {
                        if (e$$3.fields[2].fields[0].fields[2].tail.tail.tail == null) {
                          if (rfref$$1 = e$$3.fields[2].fields[0].fields[2].head.fields[0].fields[0], FSharpExprConvert$$$IsStaticInitializationField(rfref$$1)) {
                            $target$$14 = 0;
                            rfref$$2 = e$$3.fields[2].fields[0].fields[2].head.fields[0].fields[0];
                          } else {
                            $target$$14 = 1;
                          }
                        } else {
                          $target$$14 = 1;
                        }
                      } else {
                        $target$$14 = 1;
                      }
                    } else {
                      $target$$14 = 1;
                    }
                  } else {
                    $target$$14 = 1;
                  }
                } else {
                  $target$$14 = 1;
                }
              } else {
                $target$$14 = 1;
              }
            } else {
              $target$$14 = 1;
            }
          } else {
            $target$$14 = 1;
          }
        } else {
          $target$$14 = 1;
        }
      } else {
        $target$$14 = 1;
      }
    } else {
      $target$$14 = 1;
    }
  } else {
    $target$$14 = 1;
  }

  switch ($target$$14) {
    case 0:
      {
        return (0, _Option.some)(null);
      }

    case 1:
      {
        return null;
      }
  }
}

function FSharpExprConvert$$$$007CStaticInitializationCount$007C_$007C(e$$4) {
  var rfref$$3;
  var $target$$15, rfref$$4;

  if (e$$4.tag === 11) {
    if (e$$4.fields[0].tag === 11) {
      if (rfref$$3 = e$$4.fields[0].fields[0], FSharpExprConvert$$$IsStaticInitializationField(rfref$$3)) {
        $target$$15 = 0;
        rfref$$4 = e$$4.fields[0].fields[0];
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
        return (0, _Option.some)(null);
      }

    case 1:
      {
        return null;
      }
  }
}

function FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(e$$5) {
  switch (e$$5.tag) {
    case 27:
      {
        return function (arg00$0040) {
          return function (arg10$0040) {
            return function (arg20$0040) {
              return function (arg30$0040) {
                return (0, _TastOps.mkCallUnaryNegOperator)(arg00$0040, arg10$0040, arg20$0040, arg30$0040);
              };
            };
          };
        };
      }

    case 28:
      {
        return function (arg00$0040$$1) {
          return function (arg10$0040$$1) {
            return function (arg20$0040$$1) {
              return function (arg30$0040$$1) {
                return (0, _TastOps.mkCallUnaryNotOperator)(arg00$0040$$1, arg10$0040$$1, arg20$0040$$1, arg30$0040$$1);
              };
            };
          };
        };
      }

    default:
      {
        return null;
      }
  }
}

function FSharpExprConvert$$$$007CILBinaryOp$007C_$007C(e$$6) {
  var $target$$16;

  switch (e$$6.tag) {
    case 0:
      $target$$16 = 0;
      break;

    case 1:
    case 2:
      $target$$16 = 1;
      break;

    case 22:
      $target$$16 = 2;
      break;

    case 23:
    case 24:
      $target$$16 = 3;
      break;

    case 14:
      $target$$16 = 4;
      break;

    case 15:
    case 16:
      $target$$16 = 5;
      break;

    case 4:
    case 5:
      $target$$16 = 6;
      break;

    case 17:
    case 18:
      $target$$16 = 7;
      break;

    case 6:
      $target$$16 = 8;
      break;

    case 9:
    case 10:
      $target$$16 = 9;
      break;

    case 7:
    case 8:
      $target$$16 = 10;
      break;

    case 3:
      $target$$16 = 11;
      break;

    case 26:
      $target$$16 = 12;
      break;

    case 25:
      $target$$16 = 13;
      break;

    case 19:
      $target$$16 = 14;
      break;

    case 20:
    case 21:
      $target$$16 = 15;
      break;

    default:
      $target$$16 = 16;
  }

  switch ($target$$16) {
    case 0:
      {
        return function (arg00$0040$$2) {
          return function (arg10$0040$$2) {
            return function (arg20$0040$$2) {
              return function (arg30$0040$$2) {
                return function (arg40$0040) {
                  return (0, _TastOps.mkCallAdditionOperator)(arg00$0040$$2, arg10$0040$$2, arg20$0040$$2, arg30$0040$$2, arg40$0040);
                };
              };
            };
          };
        };
      }

    case 1:
      {
        return function (arg00$0040$$3) {
          return function (arg10$0040$$3) {
            return function (arg20$0040$$3) {
              return function (arg30$0040$$3) {
                return function (arg40$0040$$1) {
                  return (0, _TastOps.mkCallAdditionChecked)(arg00$0040$$3, arg10$0040$$3, arg20$0040$$3, arg30$0040$$3, arg40$0040$$1);
                };
              };
            };
          };
        };
      }

    case 2:
      {
        return function (arg00$0040$$4) {
          return function (arg10$0040$$4) {
            return function (arg20$0040$$4) {
              return function (arg30$0040$$4) {
                return function (arg40$0040$$2) {
                  return (0, _TastOps.mkCallSubtractionOperator)(arg00$0040$$4, arg10$0040$$4, arg20$0040$$4, arg30$0040$$4, arg40$0040$$2);
                };
              };
            };
          };
        };
      }

    case 3:
      {
        return function (arg00$0040$$5) {
          return function (arg10$0040$$5) {
            return function (arg20$0040$$5) {
              return function (arg30$0040$$5) {
                return function (arg40$0040$$3) {
                  return (0, _TastOps.mkCallSubtractionChecked)(arg00$0040$$5, arg10$0040$$5, arg20$0040$$5, arg30$0040$$5, arg40$0040$$3);
                };
              };
            };
          };
        };
      }

    case 4:
      {
        return function (arg00$0040$$6) {
          return function (arg10$0040$$6) {
            return function (arg20$0040$$6) {
              return function (arg30$0040$$6) {
                return function (arg40$0040$$4) {
                  return (0, _TastOps.mkCallMultiplyOperator)(arg00$0040$$6, arg10$0040$$6, arg20$0040$$6, arg30$0040$$6, arg40$0040$$4);
                };
              };
            };
          };
        };
      }

    case 5:
      {
        return function (arg00$0040$$7) {
          return function (arg10$0040$$7) {
            return function (arg20$0040$$7) {
              return function (arg30$0040$$7) {
                return function (arg40$0040$$5) {
                  return (0, _TastOps.mkCallMultiplyChecked)(arg00$0040$$7, arg10$0040$$7, arg20$0040$$7, arg30$0040$$7, arg40$0040$$5);
                };
              };
            };
          };
        };
      }

    case 6:
      {
        return function (arg00$0040$$8) {
          return function (arg10$0040$$8) {
            return function (arg20$0040$$8) {
              return function (arg30$0040$$8) {
                return function (arg40$0040$$6) {
                  return (0, _TastOps.mkCallDivisionOperator)(arg00$0040$$8, arg10$0040$$8, arg20$0040$$8, arg30$0040$$8, arg40$0040$$6);
                };
              };
            };
          };
        };
      }

    case 7:
      {
        return function (arg00$0040$$9) {
          return function (arg10$0040$$9) {
            return function (arg20$0040$$9) {
              return function (arg30$0040$$9) {
                return function (arg40$0040$$7) {
                  return (0, _TastOps.mkCallModulusOperator)(arg00$0040$$9, arg10$0040$$9, arg20$0040$$9, arg30$0040$$9, arg40$0040$$7);
                };
              };
            };
          };
        };
      }

    case 8:
      {
        return function (arg00$0040$$10) {
          return function (arg10$0040$$10) {
            return function (arg20$0040$$10) {
              return function (arg30$0040$$10) {
                return function (arg40$0040$$8) {
                  return (0, _TastOps.mkCallEqualsOperator)(arg00$0040$$10, arg10$0040$$10, arg20$0040$$10, arg30$0040$$10, arg40$0040$$8);
                };
              };
            };
          };
        };
      }

    case 9:
      {
        return function (arg00$0040$$11) {
          return function (arg10$0040$$11) {
            return function (arg20$0040$$11) {
              return function (arg30$0040$$11) {
                return function (arg40$0040$$9) {
                  return (0, _TastOps.mkCallLessThanOperator)(arg00$0040$$11, arg10$0040$$11, arg20$0040$$11, arg30$0040$$11, arg40$0040$$9);
                };
              };
            };
          };
        };
      }

    case 10:
      {
        return function (arg00$0040$$12) {
          return function (arg10$0040$$12) {
            return function (arg20$0040$$12) {
              return function (arg30$0040$$12) {
                return function (arg40$0040$$10) {
                  return (0, _TastOps.mkCallGreaterThanOperator)(arg00$0040$$12, arg10$0040$$12, arg20$0040$$12, arg30$0040$$12, arg40$0040$$10);
                };
              };
            };
          };
        };
      }

    case 11:
      {
        return function (arg00$0040$$13) {
          return function (arg10$0040$$13) {
            return function (arg20$0040$$13) {
              return function (arg30$0040$$13) {
                return function (arg40$0040$$11) {
                  return (0, _TastOps.mkCallBitwiseAndOperator)(arg00$0040$$13, arg10$0040$$13, arg20$0040$$13, arg30$0040$$13, arg40$0040$$11);
                };
              };
            };
          };
        };
      }

    case 12:
      {
        return function (arg00$0040$$14) {
          return function (arg10$0040$$14) {
            return function (arg20$0040$$14) {
              return function (arg30$0040$$14) {
                return function (arg40$0040$$12) {
                  return (0, _TastOps.mkCallBitwiseOrOperator)(arg00$0040$$14, arg10$0040$$14, arg20$0040$$14, arg30$0040$$14, arg40$0040$$12);
                };
              };
            };
          };
        };
      }

    case 13:
      {
        return function (arg00$0040$$15) {
          return function (arg10$0040$$15) {
            return function (arg20$0040$$15) {
              return function (arg30$0040$$15) {
                return function (arg40$0040$$13) {
                  return (0, _TastOps.mkCallBitwiseXorOperator)(arg00$0040$$15, arg10$0040$$15, arg20$0040$$15, arg30$0040$$15, arg40$0040$$13);
                };
              };
            };
          };
        };
      }

    case 14:
      {
        return function (arg00$0040$$16) {
          return function (arg10$0040$$16) {
            return function (arg20$0040$$16) {
              return function (arg30$0040$$16) {
                return function (arg40$0040$$14) {
                  return (0, _TastOps.mkCallShiftLeftOperator)(arg00$0040$$16, arg10$0040$$16, arg20$0040$$16, arg30$0040$$16, arg40$0040$$14);
                };
              };
            };
          };
        };
      }

    case 15:
      {
        return function (arg00$0040$$17) {
          return function (arg10$0040$$17) {
            return function (arg20$0040$$17) {
              return function (arg30$0040$$17) {
                return function (arg40$0040$$15) {
                  return (0, _TastOps.mkCallShiftRightOperator)(arg00$0040$$17, arg10$0040$$17, arg20$0040$$17, arg30$0040$$17, arg40$0040$$15);
                };
              };
            };
          };
        };
      }

    case 16:
      {
        return null;
      }
  }
}

function FSharpExprConvert$$$$007CILConvertOp$007C_$007C(e$$7) {
  var $target$$17, basicTy$$1;

  switch (e$$7.tag) {
    case 11:
      $target$$17 = 0;
      break;

    case 12:
      $target$$17 = 1;
      basicTy$$1 = e$$7.fields[0];
      break;

    case 13:
      $target$$17 = 1;
      basicTy$$1 = e$$7.fields[0];
      break;

    default:
      $target$$17 = 2;
  }

  switch ($target$$17) {
    case 0:
      {
        const basicTy = e$$7.fields[0];

        switch (basicTy.tag) {
          case 1:
            {
              return function (arg00$0040$$19) {
                return function (arg10$0040$$19) {
                  return function (arg20$0040$$19) {
                    return function (arg30$0040$$19) {
                      return (0, _TastOps.mkCallToSByteOperator)(arg00$0040$$19, arg10$0040$$19, arg20$0040$$19, arg30$0040$$19);
                    };
                  };
                };
              };
            }

          case 2:
            {
              return function (arg00$0040$$20) {
                return function (arg10$0040$$20) {
                  return function (arg20$0040$$20) {
                    return function (arg30$0040$$20) {
                      return (0, _TastOps.mkCallToByteOperator)(arg00$0040$$20, arg10$0040$$20, arg20$0040$$20, arg30$0040$$20);
                    };
                  };
                };
              };
            }

          case 3:
            {
              return function (arg00$0040$$21) {
                return function (arg10$0040$$21) {
                  return function (arg20$0040$$21) {
                    return function (arg30$0040$$21) {
                      return (0, _TastOps.mkCallToInt16Operator)(arg00$0040$$21, arg10$0040$$21, arg20$0040$$21, arg30$0040$$21);
                    };
                  };
                };
              };
            }

          case 4:
            {
              return function (arg00$0040$$22) {
                return function (arg10$0040$$22) {
                  return function (arg20$0040$$22) {
                    return function (arg30$0040$$22) {
                      return (0, _TastOps.mkCallToUInt16Operator)(arg00$0040$$22, arg10$0040$$22, arg20$0040$$22, arg30$0040$$22);
                    };
                  };
                };
              };
            }

          case 5:
            {
              return function (arg00$0040$$23) {
                return function (arg10$0040$$23) {
                  return function (arg20$0040$$23) {
                    return function (arg30$0040$$23) {
                      return (0, _TastOps.mkCallToInt32Operator)(arg00$0040$$23, arg10$0040$$23, arg20$0040$$23, arg30$0040$$23);
                    };
                  };
                };
              };
            }

          case 6:
            {
              return function (arg00$0040$$24) {
                return function (arg10$0040$$24) {
                  return function (arg20$0040$$24) {
                    return function (arg30$0040$$24) {
                      return (0, _TastOps.mkCallToUInt32Operator)(arg00$0040$$24, arg10$0040$$24, arg20$0040$$24, arg30$0040$$24);
                    };
                  };
                };
              };
            }

          case 7:
            {
              return function (arg00$0040$$25) {
                return function (arg10$0040$$25) {
                  return function (arg20$0040$$25) {
                    return function (arg30$0040$$25) {
                      return (0, _TastOps.mkCallToInt64Operator)(arg00$0040$$25, arg10$0040$$25, arg20$0040$$25, arg30$0040$$25);
                    };
                  };
                };
              };
            }

          case 8:
            {
              return function (arg00$0040$$26) {
                return function (arg10$0040$$26) {
                  return function (arg20$0040$$26) {
                    return function (arg30$0040$$26) {
                      return (0, _TastOps.mkCallToUInt64Operator)(arg00$0040$$26, arg10$0040$$26, arg20$0040$$26, arg30$0040$$26);
                    };
                  };
                };
              };
            }

          case 9:
            {
              return function (arg00$0040$$27) {
                return function (arg10$0040$$27) {
                  return function (arg20$0040$$27) {
                    return function (arg30$0040$$27) {
                      return (0, _TastOps.mkCallToSingleOperator)(arg00$0040$$27, arg10$0040$$27, arg20$0040$$27, arg30$0040$$27);
                    };
                  };
                };
              };
            }

          case 10:
            {
              return function (arg00$0040$$28) {
                return function (arg10$0040$$28) {
                  return function (arg20$0040$$28) {
                    return function (arg30$0040$$28) {
                      return (0, _TastOps.mkCallToDoubleOperator)(arg00$0040$$28, arg10$0040$$28, arg20$0040$$28, arg30$0040$$28);
                    };
                  };
                };
              };
            }

          case 11:
            {
              return function (arg00$0040$$29) {
                return function (arg10$0040$$29) {
                  return function (arg20$0040$$29) {
                    return function (arg30$0040$$29) {
                      return (0, _TastOps.mkCallToIntPtrOperator)(arg00$0040$$29, arg10$0040$$29, arg20$0040$$29, arg30$0040$$29);
                    };
                  };
                };
              };
            }

          case 12:
            {
              return function (arg00$0040$$30) {
                return function (arg10$0040$$30) {
                  return function (arg20$0040$$30) {
                    return function (arg30$0040$$30) {
                      return (0, _TastOps.mkCallToUIntPtrOperator)(arg00$0040$$30, arg10$0040$$30, arg20$0040$$30, arg30$0040$$30);
                    };
                  };
                };
              };
            }

          case 13:
            {
              return null;
            }

          default:
            {
              return function (arg00$0040$$18) {
                return function (arg10$0040$$18) {
                  return function (arg20$0040$$18) {
                    return function (arg30$0040$$18) {
                      return (0, _TastOps.mkCallToDoubleOperator)(arg00$0040$$18, arg10$0040$$18, arg20$0040$$18, arg30$0040$$18);
                    };
                  };
                };
              };
            }
        }
      }

    case 1:
      {
        switch (basicTy$$1.tag) {
          case 1:
            {
              return function (arg00$0040$$32) {
                return function (arg10$0040$$32) {
                  return function (arg20$0040$$32) {
                    return function (arg30$0040$$32) {
                      return (0, _TastOps.mkCallToSByteChecked)(arg00$0040$$32, arg10$0040$$32, arg20$0040$$32, arg30$0040$$32);
                    };
                  };
                };
              };
            }

          case 2:
            {
              return function (arg00$0040$$33) {
                return function (arg10$0040$$33) {
                  return function (arg20$0040$$33) {
                    return function (arg30$0040$$33) {
                      return (0, _TastOps.mkCallToByteChecked)(arg00$0040$$33, arg10$0040$$33, arg20$0040$$33, arg30$0040$$33);
                    };
                  };
                };
              };
            }

          case 3:
            {
              return function (arg00$0040$$34) {
                return function (arg10$0040$$34) {
                  return function (arg20$0040$$34) {
                    return function (arg30$0040$$34) {
                      return (0, _TastOps.mkCallToInt16Checked)(arg00$0040$$34, arg10$0040$$34, arg20$0040$$34, arg30$0040$$34);
                    };
                  };
                };
              };
            }

          case 4:
            {
              return function (arg00$0040$$35) {
                return function (arg10$0040$$35) {
                  return function (arg20$0040$$35) {
                    return function (arg30$0040$$35) {
                      return (0, _TastOps.mkCallToUInt16Checked)(arg00$0040$$35, arg10$0040$$35, arg20$0040$$35, arg30$0040$$35);
                    };
                  };
                };
              };
            }

          case 5:
            {
              return function (arg00$0040$$36) {
                return function (arg10$0040$$36) {
                  return function (arg20$0040$$36) {
                    return function (arg30$0040$$36) {
                      return (0, _TastOps.mkCallToInt32Checked)(arg00$0040$$36, arg10$0040$$36, arg20$0040$$36, arg30$0040$$36);
                    };
                  };
                };
              };
            }

          case 6:
            {
              return function (arg00$0040$$37) {
                return function (arg10$0040$$37) {
                  return function (arg20$0040$$37) {
                    return function (arg30$0040$$37) {
                      return (0, _TastOps.mkCallToUInt32Checked)(arg00$0040$$37, arg10$0040$$37, arg20$0040$$37, arg30$0040$$37);
                    };
                  };
                };
              };
            }

          case 7:
            {
              return function (arg00$0040$$38) {
                return function (arg10$0040$$38) {
                  return function (arg20$0040$$38) {
                    return function (arg30$0040$$38) {
                      return (0, _TastOps.mkCallToInt64Checked)(arg00$0040$$38, arg10$0040$$38, arg20$0040$$38, arg30$0040$$38);
                    };
                  };
                };
              };
            }

          case 8:
            {
              return function (arg00$0040$$39) {
                return function (arg10$0040$$39) {
                  return function (arg20$0040$$39) {
                    return function (arg30$0040$$39) {
                      return (0, _TastOps.mkCallToUInt64Checked)(arg00$0040$$39, arg10$0040$$39, arg20$0040$$39, arg30$0040$$39);
                    };
                  };
                };
              };
            }

          case 9:
            {
              return function (arg00$0040$$40) {
                return function (arg10$0040$$40) {
                  return function (arg20$0040$$40) {
                    return function (arg30$0040$$40) {
                      return (0, _TastOps.mkCallToSingleOperator)(arg00$0040$$40, arg10$0040$$40, arg20$0040$$40, arg30$0040$$40);
                    };
                  };
                };
              };
            }

          case 10:
            {
              return function (arg00$0040$$41) {
                return function (arg10$0040$$41) {
                  return function (arg20$0040$$41) {
                    return function (arg30$0040$$41) {
                      return (0, _TastOps.mkCallToDoubleOperator)(arg00$0040$$41, arg10$0040$$41, arg20$0040$$41, arg30$0040$$41);
                    };
                  };
                };
              };
            }

          case 11:
            {
              return function (arg00$0040$$42) {
                return function (arg10$0040$$42) {
                  return function (arg20$0040$$42) {
                    return function (arg30$0040$$42) {
                      return (0, _TastOps.mkCallToIntPtrChecked)(arg00$0040$$42, arg10$0040$$42, arg20$0040$$42, arg30$0040$$42);
                    };
                  };
                };
              };
            }

          case 12:
            {
              return function (arg00$0040$$43) {
                return function (arg10$0040$$43) {
                  return function (arg20$0040$$43) {
                    return function (arg30$0040$$43) {
                      return (0, _TastOps.mkCallToUIntPtrChecked)(arg00$0040$$43, arg10$0040$$43, arg20$0040$$43, arg30$0040$$43);
                    };
                  };
                };
              };
            }

          case 13:
            {
              return null;
            }

          default:
            {
              return function (arg00$0040$$31) {
                return function (arg10$0040$$31) {
                  return function (arg20$0040$$31) {
                    return function (arg30$0040$$31) {
                      return (0, _TastOps.mkCallToDoubleOperator)(arg00$0040$$31, arg10$0040$$31, arg20$0040$$31, arg30$0040$$31);
                    };
                  };
                };
              };
            }
        }
      }

    case 2:
      {
        return null;
      }
  }
}

function FSharpExprConvert$$$$007CTTypeConvOp$007C_$007C(cenv$$1, ty$$2) {
  const g = (0, _Symbols.SymbolEnv$$get_g)(cenv$$1);

  if (ty$$2.tag === 1) {
    const tcref = ty$$2.fields[0];

    if ((0, _TastOps.tyconRefEq)(g, tcref, (0, _TcGlobals.TcGlobals$$get_sbyte_tcr)(g))) {
      return function (arg00$0040$$44) {
        return function (arg10$0040$$44) {
          return function (arg20$0040$$44) {
            return function (arg30$0040$$44) {
              return (0, _TastOps.mkCallToSByteOperator)(arg00$0040$$44, arg10$0040$$44, arg20$0040$$44, arg30$0040$$44);
            };
          };
        };
      };
    } else if ((0, _TastOps.tyconRefEq)(g, tcref, (0, _TcGlobals.TcGlobals$$get_byte_tcr)(g))) {
      return function (arg00$0040$$45) {
        return function (arg10$0040$$45) {
          return function (arg20$0040$$45) {
            return function (arg30$0040$$45) {
              return (0, _TastOps.mkCallToByteOperator)(arg00$0040$$45, arg10$0040$$45, arg20$0040$$45, arg30$0040$$45);
            };
          };
        };
      };
    } else if ((0, _TastOps.tyconRefEq)(g, tcref, (0, _TcGlobals.TcGlobals$$get_int16_tcr)(g))) {
      return function (arg00$0040$$46) {
        return function (arg10$0040$$46) {
          return function (arg20$0040$$46) {
            return function (arg30$0040$$46) {
              return (0, _TastOps.mkCallToInt16Operator)(arg00$0040$$46, arg10$0040$$46, arg20$0040$$46, arg30$0040$$46);
            };
          };
        };
      };
    } else if ((0, _TastOps.tyconRefEq)(g, tcref, (0, _TcGlobals.TcGlobals$$get_uint16_tcr)(g))) {
      return function (arg00$0040$$47) {
        return function (arg10$0040$$47) {
          return function (arg20$0040$$47) {
            return function (arg30$0040$$47) {
              return (0, _TastOps.mkCallToUInt16Operator)(arg00$0040$$47, arg10$0040$$47, arg20$0040$$47, arg30$0040$$47);
            };
          };
        };
      };
    } else if ((0, _TastOps.tyconRefEq)(g, tcref, (0, _TcGlobals.TcGlobals$$get_int_tcr)(g))) {
      return function (arg00$0040$$48) {
        return function (arg10$0040$$48) {
          return function (arg20$0040$$48) {
            return function (arg30$0040$$48) {
              return (0, _TastOps.mkCallToIntOperator)(arg00$0040$$48, arg10$0040$$48, arg20$0040$$48, arg30$0040$$48);
            };
          };
        };
      };
    } else if ((0, _TastOps.tyconRefEq)(g, tcref, (0, _TcGlobals.TcGlobals$$get_int32_tcr)(g))) {
      return function (arg00$0040$$49) {
        return function (arg10$0040$$49) {
          return function (arg20$0040$$49) {
            return function (arg30$0040$$49) {
              return (0, _TastOps.mkCallToInt32Operator)(arg00$0040$$49, arg10$0040$$49, arg20$0040$$49, arg30$0040$$49);
            };
          };
        };
      };
    } else if ((0, _TastOps.tyconRefEq)(g, tcref, (0, _TcGlobals.TcGlobals$$get_uint32_tcr)(g))) {
      return function (arg00$0040$$50) {
        return function (arg10$0040$$50) {
          return function (arg20$0040$$50) {
            return function (arg30$0040$$50) {
              return (0, _TastOps.mkCallToUInt32Operator)(arg00$0040$$50, arg10$0040$$50, arg20$0040$$50, arg30$0040$$50);
            };
          };
        };
      };
    } else if ((0, _TastOps.tyconRefEq)(g, tcref, (0, _TcGlobals.TcGlobals$$get_int64_tcr)(g))) {
      return function (arg00$0040$$51) {
        return function (arg10$0040$$51) {
          return function (arg20$0040$$51) {
            return function (arg30$0040$$51) {
              return (0, _TastOps.mkCallToInt64Operator)(arg00$0040$$51, arg10$0040$$51, arg20$0040$$51, arg30$0040$$51);
            };
          };
        };
      };
    } else if ((0, _TastOps.tyconRefEq)(g, tcref, (0, _TcGlobals.TcGlobals$$get_uint64_tcr)(g))) {
      return function (arg00$0040$$52) {
        return function (arg10$0040$$52) {
          return function (arg20$0040$$52) {
            return function (arg30$0040$$52) {
              return (0, _TastOps.mkCallToUInt64Operator)(arg00$0040$$52, arg10$0040$$52, arg20$0040$$52, arg30$0040$$52);
            };
          };
        };
      };
    } else if ((0, _TastOps.tyconRefEq)(g, tcref, (0, _TcGlobals.TcGlobals$$get_float32_tcr)(g))) {
      return function (arg00$0040$$53) {
        return function (arg10$0040$$53) {
          return function (arg20$0040$$53) {
            return function (arg30$0040$$53) {
              return (0, _TastOps.mkCallToSingleOperator)(arg00$0040$$53, arg10$0040$$53, arg20$0040$$53, arg30$0040$$53);
            };
          };
        };
      };
    } else if ((0, _TastOps.tyconRefEq)(g, tcref, (0, _TcGlobals.TcGlobals$$get_float_tcr)(g))) {
      return function (arg00$0040$$54) {
        return function (arg10$0040$$54) {
          return function (arg20$0040$$54) {
            return function (arg30$0040$$54) {
              return (0, _TastOps.mkCallToDoubleOperator)(arg00$0040$$54, arg10$0040$$54, arg20$0040$$54, arg30$0040$$54);
            };
          };
        };
      };
    } else if ((0, _TastOps.tyconRefEq)(g, tcref, (0, _TcGlobals.TcGlobals$$get_nativeint_tcr)(g))) {
      return function (arg00$0040$$55) {
        return function (arg10$0040$$55) {
          return function (arg20$0040$$55) {
            return function (arg30$0040$$55) {
              return (0, _TastOps.mkCallToIntPtrOperator)(arg00$0040$$55, arg10$0040$$55, arg20$0040$$55, arg30$0040$$55);
            };
          };
        };
      };
    } else if ((0, _TastOps.tyconRefEq)(g, tcref, (0, _TcGlobals.TcGlobals$$get_unativeint_tcr)(g))) {
      return function (arg00$0040$$56) {
        return function (arg10$0040$$56) {
          return function (arg20$0040$$56) {
            return function (arg30$0040$$56) {
              return (0, _TastOps.mkCallToUIntPtrOperator)(arg00$0040$$56, arg10$0040$$56, arg20$0040$$56, arg30$0040$$56);
            };
          };
        };
      };
    } else {
      return null;
    }
  } else {
    return null;
  }
}

function FSharpExprConvert$$$ConvType(cenv$$2, ty$$3) {
  return (0, _Symbols.FSharpType$$$$002Ector$$4367869B)(cenv$$2, ty$$3);
}

function FSharpExprConvert$$$ConvTypes(cenv$$3, tys) {
  return (0, _List.map)(function (ty$$4) {
    return FSharpExprConvert$$$ConvType(cenv$$3, ty$$4);
  }, tys);
}

function FSharpExprConvert$$$ConvILTypeRefApp(cenv$$4, m$$4, tref, tyargs) {
  const tcref$$1 = (0, _import.ImportILTypeRef)((0, _Symbols.SymbolEnv$$get_amap)(cenv$$4), m$$4, tref);
  return FSharpExprConvert$$$ConvType(cenv$$4, (0, _TastOps.mkAppTy)(tcref$$1, tyargs));
}

function FSharpExprConvert$$$ConvUnionCaseRef(cenv$$5, ucref) {
  return (0, _Symbols.FSharpUnionCase$$$$002Ector$$322F2FE1)(cenv$$5, ucref);
}

function FSharpExprConvert$$$ConvRecdFieldRef(cenv$$6, rfref$$5) {
  return (0, _Symbols.FSharpField$$$$002Ector$$47183474)(cenv$$6, rfref$$5);
}

function FSharpExprConvert$$$exprOfExprAddr(cenv$$7, expr) {
  if (expr.tag === 11) {
    const tyargs$$1 = expr.fields[1];
    const op = expr.fields[0];
    const m$$5 = expr.fields[3];
    const args$$2 = expr.fields[2];
    const matchValue$$4 = [op, args$$2, tyargs$$1];

    var $target$$18, vref, rfref$$6, arg$$1, rfref$$7, arg$$2, n, uref, arg$$3, fspec, rtys, fspec$$1, rtys$$1, _isNativePtr, _ro, _tyarg, arr, elemty, idxs, shape;

    if (matchValue$$4[0].tag === 30) {
      if (matchValue$$4[0].fields[0].tag === 0) {
        $target$$18 = 0;
        vref = matchValue$$4[0].fields[1];
      } else {
        $target$$18 = 7;
      }
    } else if (matchValue$$4[0].tag === 13) {
      if (matchValue$$4[1].tail != null) {
        if (matchValue$$4[1].tail.tail == null) {
          $target$$18 = 2;
          arg$$1 = matchValue$$4[1].head;
          rfref$$7 = matchValue$$4[0].fields[0];
        } else {
          $target$$18 = 7;
        }
      } else {
        $target$$18 = 1;
        rfref$$6 = matchValue$$4[0].fields[0];
      }
    } else if (matchValue$$4[0].tag === 17) {
      if (matchValue$$4[1].tail != null) {
        if (matchValue$$4[1].tail.tail == null) {
          $target$$18 = 3;
          arg$$2 = matchValue$$4[1].head;
          n = matchValue$$4[0].fields[1];
          uref = matchValue$$4[0].fields[0];
        } else {
          $target$$18 = 7;
        }
      } else {
        $target$$18 = 7;
      }
    } else if (matchValue$$4[0].tag === 22) {
      if (matchValue$$4[0].fields[0].tail != null) {
        if (matchValue$$4[0].fields[0].head.tag === 62) {
          if (matchValue$$4[0].fields[0].tail.tail == null) {
            if (matchValue$$4[1].tail != null) {
              if (matchValue$$4[1].tail.tail == null) {
                $target$$18 = 4;
                arg$$3 = matchValue$$4[1].head;
                fspec = matchValue$$4[0].fields[0].head.fields[0];
                rtys = matchValue$$4[0].fields[1];
              } else {
                $target$$18 = 7;
              }
            } else {
              $target$$18 = 7;
            }
          } else {
            $target$$18 = 7;
          }
        } else if (matchValue$$4[0].fields[0].head.tag === 61) {
          if (matchValue$$4[0].fields[0].tail.tail == null) {
            $target$$18 = 5;
            fspec$$1 = matchValue$$4[0].fields[0].head.fields[0];
            rtys$$1 = matchValue$$4[0].fields[1];
          } else {
            $target$$18 = 7;
          }
        } else if (matchValue$$4[0].fields[0].head.tag === 80) {
          if (matchValue$$4[0].fields[0].tail.tail == null) {
            if (matchValue$$4[1].tail != null) {
              if (matchValue$$4[2].tail != null) {
                if (matchValue$$4[2].tail.tail == null) {
                  $target$$18 = 6;
                  _isNativePtr = matchValue$$4[0].fields[0].head.fields[1];
                  _ro = matchValue$$4[0].fields[0].head.fields[0];
                  _tyarg = matchValue$$4[0].fields[0].head.fields[3];
                  arr = matchValue$$4[1].head;
                  elemty = matchValue$$4[2].head;
                  idxs = matchValue$$4[1].tail;
                  shape = matchValue$$4[0].fields[0].head.fields[2];
                } else {
                  $target$$18 = 7;
                }
              } else {
                $target$$18 = 7;
              }
            } else {
              $target$$18 = 7;
            }
          } else {
            $target$$18 = 7;
          }
        } else {
          $target$$18 = 7;
        }
      } else {
        $target$$18 = 7;
      }
    } else {
      $target$$18 = 7;
    }

    switch ($target$$18) {
      case 0:
        {
          return (0, _TastOps.exprForValRef)(m$$5, vref);
        }

      case 1:
        {
          return (0, _TastOps.mkStaticRecdFieldGet)(rfref$$6, tyargs$$1, m$$5);
        }

      case 2:
        {
          return (0, _TastOps.mkRecdFieldGetViaExprAddr)(FSharpExprConvert$$$exprOfExprAddr(cenv$$7, arg$$1), rfref$$7, tyargs$$1, m$$5);
        }

      case 3:
        {
          return (0, _TastOps.mkUnionCaseFieldGetProvenViaExprAddr)(FSharpExprConvert$$$exprOfExprAddr(cenv$$7, arg$$2), uref, tyargs$$1, n, m$$5);
        }

      case 4:
        {
          return (0, _TastOps.mkAsmExpr)((0, _Types.L)((0, _il.mkNormalLdfld)(fspec), (0, _Types.L)()), tyargs$$1, (0, _Types.L)(FSharpExprConvert$$$exprOfExprAddr(cenv$$7, arg$$3), (0, _Types.L)()), rtys, m$$5);
        }

      case 5:
        {
          return (0, _TastOps.mkAsmExpr)((0, _Types.L)((0, _il.mkNormalLdsfld)(fspec$$1), (0, _Types.L)()), tyargs$$1, args$$2, rtys$$1, m$$5);
        }

      case 6:
        {
          const matchValue$$5 = [(0, _il.ILArrayShape$$get_Rank)(shape), idxs];
          var $target$$19, idx1, idx1$$1, idx2, idx1$$2, idx2$$1, idx3, idx1$$3, idx2$$2, idx3$$1, idx4;

          if (matchValue$$5[0] === 1) {
            if (matchValue$$5[1].tail != null) {
              if (matchValue$$5[1].tail.tail == null) {
                $target$$19 = 0;
                idx1 = matchValue$$5[1].head;
              } else {
                $target$$19 = 4;
              }
            } else {
              $target$$19 = 4;
            }
          } else if (matchValue$$5[0] === 2) {
            if (matchValue$$5[1].tail != null) {
              if (matchValue$$5[1].tail.tail != null) {
                if (matchValue$$5[1].tail.tail.tail == null) {
                  $target$$19 = 1;
                  idx1$$1 = matchValue$$5[1].head;
                  idx2 = matchValue$$5[1].tail.head;
                } else {
                  $target$$19 = 4;
                }
              } else {
                $target$$19 = 4;
              }
            } else {
              $target$$19 = 4;
            }
          } else if (matchValue$$5[0] === 3) {
            if (matchValue$$5[1].tail != null) {
              if (matchValue$$5[1].tail.tail != null) {
                if (matchValue$$5[1].tail.tail.tail != null) {
                  if (matchValue$$5[1].tail.tail.tail.tail == null) {
                    $target$$19 = 2;
                    idx1$$2 = matchValue$$5[1].head;
                    idx2$$1 = matchValue$$5[1].tail.head;
                    idx3 = matchValue$$5[1].tail.tail.head;
                  } else {
                    $target$$19 = 4;
                  }
                } else {
                  $target$$19 = 4;
                }
              } else {
                $target$$19 = 4;
              }
            } else {
              $target$$19 = 4;
            }
          } else if (matchValue$$5[0] === 4) {
            if (matchValue$$5[1].tail != null) {
              if (matchValue$$5[1].tail.tail != null) {
                if (matchValue$$5[1].tail.tail.tail != null) {
                  if (matchValue$$5[1].tail.tail.tail.tail != null) {
                    if (matchValue$$5[1].tail.tail.tail.tail.tail == null) {
                      $target$$19 = 3;
                      idx1$$3 = matchValue$$5[1].head;
                      idx2$$2 = matchValue$$5[1].tail.head;
                      idx3$$1 = matchValue$$5[1].tail.tail.head;
                      idx4 = matchValue$$5[1].tail.tail.tail.head;
                    } else {
                      $target$$19 = 4;
                    }
                  } else {
                    $target$$19 = 4;
                  }
                } else {
                  $target$$19 = 4;
                }
              } else {
                $target$$19 = 4;
              }
            } else {
              $target$$19 = 4;
            }
          } else {
            $target$$19 = 4;
          }

          switch ($target$$19) {
            case 0:
              {
                return (0, _TastOps.mkCallArrayGet)((0, _Symbols.SymbolEnv$$get_g)(cenv$$7), m$$5, elemty, arr, idx1);
              }

            case 1:
              {
                return (0, _TastOps.mkCallArray2DGet)((0, _Symbols.SymbolEnv$$get_g)(cenv$$7), m$$5, elemty, arr, idx1$$1, idx2);
              }

            case 2:
              {
                return (0, _TastOps.mkCallArray3DGet)((0, _Symbols.SymbolEnv$$get_g)(cenv$$7), m$$5, elemty, arr, idx1$$2, idx2$$1, idx3);
              }

            case 3:
              {
                return (0, _TastOps.mkCallArray4DGet)((0, _Symbols.SymbolEnv$$get_g)(cenv$$7), m$$5, elemty, arr, idx1$$3, idx2$$2, idx3$$1, idx4);
              }

            case 4:
              {
                return expr;
              }
          }
        }

      case 7:
        {
          return expr;
        }
    }
  } else {
    return expr;
  }
}

function FSharpExprConvert$$$Mk(cenv$$8, m$$6, ty$$5, e$$8) {
  return FSharpExpr$$$$002Ector$$740F346C(cenv$$8, null, e$$8, m$$6, ty$$5);
}

function FSharpExprConvert$$$Mk2(cenv$$9, orig, e$$9) {
  return FSharpExpr$$$$002Ector$$740F346C(cenv$$9, null, e$$9, (0, _TastOps.Expr$002Eget_Range)(orig), (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$9), orig));
}

function FSharpExprConvert$$$ConvLValueExpr(cenv$$10, env$$10, expr$$1) {
  return FSharpExprConvert$$$ConvExpr(cenv$$10, env$$10, FSharpExprConvert$$$exprOfExprAddr(cenv$$10, expr$$1));
}

function FSharpExprConvert$$$ConvExpr(cenv$$11, env$$11, expr$$2) {
  return FSharpExprConvert$$$Mk2(cenv$$11, expr$$2, FSharpExprConvert$$$ConvExprPrim(cenv$$11, env$$11, expr$$2));
}

function FSharpExprConvert$$$ConvExprLinear(cenv$$12, env$$12, expr$$3, contf) {
  return FSharpExprConvert$$$ConvExprPrimLinear(cenv$$12, env$$12, expr$$3, function (exprR) {
    return contf(FSharpExprConvert$$$Mk2(cenv$$12, expr$$3, exprR));
  });
}

function FSharpExprConvert$$$ConvExprPrimLinear($arg$$24, $arg$$25, $arg$$26, $arg$$27) {
  var vref$$1, vFlags, tyargs$$3, curriedArgs, _fty, _f;

  FSharpExprConvert$$$ConvExprPrimLinear: while (true) {
    const cenv$$13 = $arg$$24,
          env$$13 = $arg$$25,
          expr$$4 = $arg$$26,
          contf$$1 = $arg$$27;
    var $target$$28, e1$$1, e2$$1, tyargs$$2, ucref$$1, bind, body$$7, x1;

    if (expr$$4.tag === 11) {
      if (expr$$4.fields[0].tag === 0) {
        if (expr$$4.fields[2].tail != null) {
          if (expr$$4.fields[2].tail.tail != null) {
            if (expr$$4.fields[2].tail.tail.tail == null) {
              $target$$28 = 0;
              e1$$1 = expr$$4.fields[2].head;
              e2$$1 = expr$$4.fields[2].tail.head;
              tyargs$$2 = expr$$4.fields[1];
              ucref$$1 = expr$$4.fields[0].fields[0];
            } else {
              $target$$28 = 3;
            }
          } else {
            $target$$28 = 3;
          }
        } else {
          $target$$28 = 3;
        }
      } else {
        $target$$28 = 3;
      }
    } else if (expr$$4.tag === 7) {
      $target$$28 = 1;
      bind = expr$$4.fields[0];
      body$$7 = expr$$4.fields[1];
    } else if (expr$$4.tag === 2) {
      if ((0, _QuotationTranslator.$007CObjectInitializationCheck$007C_$007C)((0, _Symbols.SymbolEnv$$get_g)(cenv$$13), expr$$4.fields[0]) != null) {
        if (expr$$4.fields[2].tag === 0) {
          $target$$28 = 2;
          x1 = expr$$4.fields[1];
        } else {
          $target$$28 = 3;
        }
      } else if (FSharpExprConvert$$$$007CStaticInitializationCount$007C_$007C(expr$$4.fields[0]) != null) {
        if (expr$$4.fields[2].tag === 0) {
          $target$$28 = 2;
          x1 = expr$$4.fields[1];
        } else {
          $target$$28 = 3;
        }
      } else if (FSharpExprConvert$$$$007CStaticInitializationCheck$007C_$007C(expr$$4.fields[0]) != null) {
        if (expr$$4.fields[2].tag === 0) {
          $target$$28 = 2;
          x1 = expr$$4.fields[1];
        } else {
          $target$$28 = 3;
        }
      } else {
        $target$$28 = 3;
      }
    } else {
      $target$$28 = 3;
    }

    switch ($target$$28) {
      case 0:
        {
          const mkR = FSharpExprConvert$$$ConvUnionCaseRef(cenv$$13, ucref$$1);
          const typR = FSharpExprConvert$$$ConvType(cenv$$13, (0, _TastOps.mkAppTy)((0, _tast.UnionCaseRef$$get_TyconRef)(ucref$$1), tyargs$$2));
          const e1R = FSharpExprConvert$$$ConvExpr(cenv$$13, env$$13, e1$$1);
          return FSharpExprConvert$$$ConvExprLinear(cenv$$13, env$$13, e2$$1, function ($arg$$5) {
            return contf$$1(new E(18, "NewUnionCase", typR, mkR, (0, _Types.L)(e1R, (0, _Types.L)($arg$$5, (0, _Types.L)()))));
          });
        }

      case 1:
        {
          const matchValue$$6 = FSharpExprConvert$$$ConvLetBind(cenv$$13, env$$13, bind);

          if (matchValue$$6[0] != null) {
            const bindR = matchValue$$6[0];
            return FSharpExprConvert$$$ConvExprLinear(cenv$$13, matchValue$$6[1], body$$7, function ($arg$$6) {
              return contf$$1(new E(13, "Let", bindR, $arg$$6));
            });
          } else {
            $arg$$24 = cenv$$13;
            $arg$$25 = matchValue$$6[1];
            $arg$$26 = body$$7;
            $arg$$27 = contf$$1;
            continue FSharpExprConvert$$$ConvExprPrimLinear;
          }
        }

      case 2:
        {
          return contf$$1(FSharpExprConvert$$$ConvExprPrim(cenv$$13, env$$13, x1));
        }

      case 3:
        {
          var $target$$29, e1$$2, e2$$2, x0, x1$$1, _f$$1, _fty$$1, curriedArgs$$1, tyargs$$4, vFlags$$1, vref$$2;

          if (expr$$4.tag === 2) {
            if (expr$$4.fields[2].tag === 1) {
              $target$$29 = 1;
              x0 = expr$$4.fields[0];
              x1$$1 = expr$$4.fields[1];
            } else {
              $target$$29 = 0;
              e1$$2 = expr$$4.fields[0];
              e2$$2 = expr$$4.fields[1];
            }
          } else {
            const activePatternResult58592 = (0, _QuotationTranslator.$007CModuleValueOrMemberUse$007C_$007C)((0, _Symbols.SymbolEnv$$get_g)(cenv$$13), expr$$4);

            if (activePatternResult58592 != null) {
              if (vref$$1 = activePatternResult58592[0], (vFlags = activePatternResult58592[1], (tyargs$$3 = activePatternResult58592[4], (curriedArgs = activePatternResult58592[5], (_fty = activePatternResult58592[3], (_f = activePatternResult58592[2], (ExprTranslationImpl$$$nonNil(tyargs$$3) ? true : ExprTranslationImpl$$$nonNil(curriedArgs)) ? (0, _tast.ValRef$$get_IsMemberOrModuleBinding)(vref$$1) : false)))))) {
                $target$$29 = 2;
                _f$$1 = activePatternResult58592[2];
                _fty$$1 = activePatternResult58592[3];
                curriedArgs$$1 = activePatternResult58592[5];
                tyargs$$4 = activePatternResult58592[4];
                vFlags$$1 = activePatternResult58592[1];
                vref$$2 = activePatternResult58592[0];
              } else {
                $target$$29 = 3;
              }
            } else {
              $target$$29 = 3;
            }
          }

          switch ($target$$29) {
            case 0:
              {
                const e1R$$1 = FSharpExprConvert$$$ConvExpr(cenv$$13, env$$13, e1$$2);
                return FSharpExprConvert$$$ConvExprLinear(cenv$$13, env$$13, e2$$2, function ($arg$$7) {
                  return contf$$1(new E(35, "Sequential", e1R$$1, $arg$$7));
                });
              }

            case 1:
              {
                return new E(35, "Sequential", FSharpExprConvert$$$ConvExpr(cenv$$13, env$$13, x0), FSharpExprConvert$$$ConvExpr(cenv$$13, env$$13, x1$$1));
              }

            case 2:
              {
                return FSharpExprConvert$$$ConvModuleValueOrMemberUseLinear(cenv$$13, env$$13, expr$$4, vref$$2, vFlags$$1, tyargs$$4, curriedArgs$$1, contf$$1);
              }

            case 3:
              {
                if (expr$$4.tag === 9) {
                  const tgs = expr$$4.fields[3];
                  const retTy = expr$$4.fields[5];
                  const m$$7 = expr$$4.fields[1];
                  const dtree = expr$$4.fields[2];
                  const _spBind = expr$$4.fields[0];
                  const dtreeR = FSharpExprConvert$$$ConvDecisionTree(cenv$$13, env$$13, retTy, dtree, m$$7);
                  return FSharpExprConvert$$$ConvTargetsLinear(cenv$$13, env$$13, (0, _List.ofArray)(tgs), function ($arg$$8) {
                    var $007CE$007C, activePatternResult58587, activePatternResult58588, activePatternResult58589;
                    return contf$$1(($007CE$007C = function $007CE$007C(x$$13) {
                      return FSharpExpr$$get_E(x$$13);
                    }, (activePatternResult58587 = $007CE$007C(dtreeR), activePatternResult58587.tag === 7 ? (activePatternResult58588 = $007CE$007C(activePatternResult58587.fields[1]), activePatternResult58588.tag === 9 ? activePatternResult58588.fields[0] === 0 ? activePatternResult58588.fields[1].tail == null ? (activePatternResult58589 = $007CE$007C(activePatternResult58587.fields[2]), activePatternResult58589.tag === 9 ? activePatternResult58589.fields[0] === 1 ? activePatternResult58589.fields[1].tail == null ? new E(7, "IfThenElse", activePatternResult58587.fields[0], (0, _List.item)(0, $arg$$8)[1], (0, _List.item)(1, $arg$$8)[1]) : new E(8, "DecisionTree", dtreeR, $arg$$8) : new E(8, "DecisionTree", dtreeR, $arg$$8) : new E(8, "DecisionTree", dtreeR, $arg$$8)) : new E(8, "DecisionTree", dtreeR, $arg$$8) : new E(8, "DecisionTree", dtreeR, $arg$$8) : new E(8, "DecisionTree", dtreeR, $arg$$8)) : new E(8, "DecisionTree", dtreeR, $arg$$8))));
                  });
                } else {
                  return contf$$1(FSharpExprConvert$$$ConvExprPrim(cenv$$13, env$$13, expr$$4));
                }
              }
          }
        }
    }
  }
}

function FSharpExprConvert$$$ConvModuleValueOrMemberUseLinear(cenv$$14, env$$16, expr$$5, vref$$3, vFlags$$2, tyargs$$5, curriedArgs$$2, contf$$2) {
  const m$$8 = (0, _TastOps.Expr$002Eget_Range)(expr$$5);
  const patternInput = (0, _TastOps.GetMemberCallInfo)((0, _Symbols.SymbolEnv$$get_g)(cenv$$14), vref$$3, vFlags$$2);
  let patternInput$$3;
  var $target$$38;

  if ((0, _tast.ValRef$$get_MemberInfo)(vref$$3) != null) {
    if (!(0, _tast.ValRef$$get_IsExtensionMember)(vref$$3)) {
      $target$$38 = 0;
    } else {
      $target$$38 = 1;
    }
  } else {
    $target$$38 = 1;
  }

  switch ($target$$38) {
    case 0:
      {
        const patternInput$$1 = (0, _TastOps.GetTypeOfMemberInFSharpForm)((0, _Symbols.SymbolEnv$$get_g)(cenv$$14), vref$$3);
        patternInput$$3 = [true, patternInput$$1[1]];
        break;
      }

    case 1:
      {
        const arities = (0, _tast.arityOfVal)((0, _tast.ValRef$$get_Deref)(vref$$3));
        const patternInput$$2 = (0, _TastOps.GetTopValTypeInFSharpForm)((0, _Symbols.SymbolEnv$$get_g)(cenv$$14), arities, (0, _tast.ValRef$$get_Type)(vref$$3), m$$8);
        patternInput$$3 = [false, patternInput$$2[1]];
        break;
      }
  }

  let patternInput$$4;
  const matchValue$$8 = [patternInput[5], curriedArgs$$2];

  if (matchValue$$8[0]) {
    if (matchValue$$8[1].tail == null) {
      throw new Error("warning: unexpected missing object argument when generating quotation for call to F# object member " + (0, _tast.ValRef$$get_LogicalName)(vref$$3));
    } else {
      const objArg = matchValue$$8[1].head;
      const curriedArgs$$4 = matchValue$$8[1].tail;
      patternInput$$4 = [(0, _Types.L)(objArg, (0, _Types.L)()), curriedArgs$$4];
    }
  } else {
    patternInput$$4 = [(0, _Types.L)(), matchValue$$8[1]];
  }

  if ((0, _List.length)(patternInput$$4[1]) < (0, _List.length)(patternInput$$3[1]) ? true : (0, _List.exists2)(function predicate(arg$$4, argInfo) {
    return (0, _List.length)(argInfo) > (0, _List.length)((0, _TastOps.tryDestRefTupleExpr)(arg$$4));
  }, (0, _List.truncate)((0, _List.length)(patternInput$$3[1]), patternInput$$4[1]), patternInput$$3[1])) {
    let topValInfo;
    const matchValue$$9 = (0, _tast.ValRef$$get_ValReprInfo)(vref$$3);

    if (matchValue$$9 != null) {
      const a$$4 = matchValue$$9;
      topValInfo = a$$4;
    } else {
      throw new Error("no arity information found for F# value " + (0, _tast.ValRef$$get_LogicalName)(vref$$3));
    }

    const patternInput$$5 = (0, _TastOps.AdjustValForExpectedArity)((0, _Symbols.SymbolEnv$$get_g)(cenv$$14), m$$8, vref$$3, vFlags$$2, topValInfo);
    const splitCallExpr = (0, _TastOps.MakeApplicationAndBetaReduce)((0, _Symbols.SymbolEnv$$get_g)(cenv$$14), patternInput$$5[0], patternInput$$5[1], (0, _Types.L)(tyargs$$5, (0, _Types.L)()), patternInput$$4[1], m$$8);
    return FSharpExprConvert$$$ConvExprPrimLinear(cenv$$14, env$$16, splitCallExpr, contf$$2);
  } else {
    const patternInput$$6 = (0, _List.splitAt)((0, _List.length)(patternInput$$3[1]), patternInput$$4[1]);
    const untupledCurriedArgs = (0, _List.map2)(function mapping(arg$$5, curriedArgInfo) {
      const numUntupledArgs = (0, _List.length)(curriedArgInfo) | 0;

      if (numUntupledArgs === 0) {
        return (0, _Types.L)();
      } else if (numUntupledArgs === 1) {
        return (0, _Types.L)(arg$$5, (0, _Types.L)());
      } else {
        return (0, _TastOps.tryDestRefTupleExpr)(arg$$5);
      }
    }, patternInput$$6[0], patternInput$$3[1]);
    const contf2 = patternInput$$6[1].tail == null ? contf$$2 : function (subCallR) {
      return contf$$2((0, _List.fold)(function folder$$3(fR, arg$$6) {
        return new E(3, "Application", FSharpExprConvert$$$Mk2(cenv$$14, arg$$6, fR), (0, _Types.L)(), (0, _Types.L)(FSharpExprConvert$$$ConvExpr(cenv$$14, env$$16, arg$$6), (0, _Types.L)()));
      }, subCallR, patternInput$$6[1]));
    };

    if (patternInput$$3[0]) {
      const callArgs = (0, _List.concat)((0, _Types.L)(patternInput$$4[0], untupledCurriedArgs));
      const patternInput$$7 = (0, _illib.List$$$splitAfter)(patternInput[0], tyargs$$5);
      return FSharpExprConvert$$$ConvObjectModelCallLinear(cenv$$14, env$$16, patternInput[2], (0, _Symbols.FSharpMemberOrFunctionOrValue$$$$002Ector$$Z3519D4A3)(cenv$$14, vref$$3), patternInput$$7[0], patternInput$$7[1], callArgs, contf2);
    } else {
      const v$$6 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$$$002Ector$$Z3519D4A3)(cenv$$14, vref$$3);
      return FSharpExprConvert$$$ConvObjectModelCallLinear(cenv$$14, env$$16, false, v$$6, (0, _Types.L)(), tyargs$$5, (0, _List.concat)(untupledCurriedArgs), contf2);
    }
  }
}

function FSharpExprConvert$$$ConvExprPrim(cenv$$15, env$$17, expr$$7) {
  var ty$$16, mref, mspec, arg$$7, ty$$6, tps, tmvs, tmethod, m$$9, e$$12, ctyp, vref$$4, vFlags$$3, tyargs$$6, curriedArgs$$7, _fty$$2, _f$$2, vref$$5, vFlags$$4, tyargs$$7, curriedArgs$$8, _fty$$3, _f$$3, vref$$6, vFlags$$5, tyargs$$8, curriedArgs$$9, _fty$$4, _f$$4, vref$$7, vFlags$$6, tyargs$$9, curriedArgs$$10, _fty$$5, _f$$5, vref$$8, vFlags$$7, tyargs$$10, curriedArgs$$11, _fty$$6, _f$$6, vref$$9, vFlags$$8, tyargs$$11, curriedArgs$$12, _fty$$7, _f$$7, vref$$10, vFlags$$9, tyargs$$12, curriedArgs$$13, _fty$$8, _f$$8, vref$$11, vFlags$$10, tyargs$$13, curriedArgs$$14, _fty$$9, _f$$9;

  FSharpExprConvert$$$ConvExprPrim: while (true) {
    const expr$$8 = (0, _TastOps.DetectAndOptimizeForExpression)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), new _TastOps.OptimizeForExpressionOptions(0, "OptimizeIntRangesOnly"), expr$$7);
    const expr$$9 = (0, _TastOps.NormalizeAndAdjustPossibleSubsumptionExprs)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), expr$$8);
    const expr$$10 = (0, _TastOps.stripExpr)(expr$$9);

    var $target$$39, _fty$$10, ve, _f$$10, _fty$$11, curriedArgs$$15, tyargs$$14, vFlags$$11, vref$$12;

    if (expr$$10.tag === 5) {
      const activePatternResult58667 = (0, _TastOps.$007CInnerExprPat$007C)(expr$$10.fields[0]);

      if (activePatternResult58667.tag === 1) {
        if (expr$$10.fields[2].tail == null) {
          if (expr$$10.fields[3].tail == null) {
            $target$$39 = 0;
            _fty$$10 = expr$$10.fields[1];
            ve = activePatternResult58667;
          } else {
            const activePatternResult58668 = (0, _QuotationTranslator.$007CModuleValueOrMemberUse$007C_$007C)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), expr$$10);

            if (activePatternResult58668 != null) {
              if (vref$$4 = activePatternResult58668[0], (vFlags$$3 = activePatternResult58668[1], (tyargs$$6 = activePatternResult58668[4], (curriedArgs$$7 = activePatternResult58668[5], (_fty$$2 = activePatternResult58668[3], (_f$$2 = activePatternResult58668[2], (0, _tast.ValRef$$get_IsMemberOrModuleBinding)(vref$$4))))))) {
                $target$$39 = 2;
                _f$$10 = activePatternResult58668[2];
                _fty$$11 = activePatternResult58668[3];
                curriedArgs$$15 = activePatternResult58668[5];
                tyargs$$14 = activePatternResult58668[4];
                vFlags$$11 = activePatternResult58668[1];
                vref$$12 = activePatternResult58668[0];
              } else {
                $target$$39 = 3;
              }
            } else {
              $target$$39 = 3;
            }
          }
        } else {
          const activePatternResult58669 = (0, _QuotationTranslator.$007CModuleValueOrMemberUse$007C_$007C)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), expr$$10);

          if (activePatternResult58669 != null) {
            if (vref$$5 = activePatternResult58669[0], (vFlags$$4 = activePatternResult58669[1], (tyargs$$7 = activePatternResult58669[4], (curriedArgs$$8 = activePatternResult58669[5], (_fty$$3 = activePatternResult58669[3], (_f$$3 = activePatternResult58669[2], (0, _tast.ValRef$$get_IsMemberOrModuleBinding)(vref$$5))))))) {
              $target$$39 = 2;
              _f$$10 = activePatternResult58669[2];
              _fty$$11 = activePatternResult58669[3];
              curriedArgs$$15 = activePatternResult58669[5];
              tyargs$$14 = activePatternResult58669[4];
              vFlags$$11 = activePatternResult58669[1];
              vref$$12 = activePatternResult58669[0];
            } else {
              $target$$39 = 3;
            }
          } else {
            $target$$39 = 3;
          }
        }
      } else {
        const activePatternResult58670 = (0, _QuotationTranslator.$007CModuleValueOrMemberUse$007C_$007C)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), expr$$10);

        if (activePatternResult58670 != null) {
          if (vref$$6 = activePatternResult58670[0], (vFlags$$5 = activePatternResult58670[1], (tyargs$$8 = activePatternResult58670[4], (curriedArgs$$9 = activePatternResult58670[5], (_fty$$4 = activePatternResult58670[3], (_f$$4 = activePatternResult58670[2], (0, _tast.ValRef$$get_IsMemberOrModuleBinding)(vref$$6))))))) {
            $target$$39 = 2;
            _f$$10 = activePatternResult58670[2];
            _fty$$11 = activePatternResult58670[3];
            curriedArgs$$15 = activePatternResult58670[5];
            tyargs$$14 = activePatternResult58670[4];
            vFlags$$11 = activePatternResult58670[1];
            vref$$12 = activePatternResult58670[0];
          } else {
            $target$$39 = 3;
          }
        } else {
          $target$$39 = 3;
        }
      }
    } else if (expr$$10.tag === 11) {
      if (expr$$10.fields[0].tag === 0) {
        if (expr$$10.fields[2].tail != null) {
          if (expr$$10.fields[2].tail.tail != null) {
            if (expr$$10.fields[2].tail.tail.tail == null) {
              $target$$39 = 1;
            } else {
              const activePatternResult58671 = (0, _QuotationTranslator.$007CModuleValueOrMemberUse$007C_$007C)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), expr$$10);

              if (activePatternResult58671 != null) {
                if (vref$$7 = activePatternResult58671[0], (vFlags$$6 = activePatternResult58671[1], (tyargs$$9 = activePatternResult58671[4], (curriedArgs$$10 = activePatternResult58671[5], (_fty$$5 = activePatternResult58671[3], (_f$$5 = activePatternResult58671[2], (0, _tast.ValRef$$get_IsMemberOrModuleBinding)(vref$$7))))))) {
                  $target$$39 = 2;
                  _f$$10 = activePatternResult58671[2];
                  _fty$$11 = activePatternResult58671[3];
                  curriedArgs$$15 = activePatternResult58671[5];
                  tyargs$$14 = activePatternResult58671[4];
                  vFlags$$11 = activePatternResult58671[1];
                  vref$$12 = activePatternResult58671[0];
                } else {
                  $target$$39 = 3;
                }
              } else {
                $target$$39 = 3;
              }
            }
          } else {
            const activePatternResult58672 = (0, _QuotationTranslator.$007CModuleValueOrMemberUse$007C_$007C)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), expr$$10);

            if (activePatternResult58672 != null) {
              if (vref$$8 = activePatternResult58672[0], (vFlags$$7 = activePatternResult58672[1], (tyargs$$10 = activePatternResult58672[4], (curriedArgs$$11 = activePatternResult58672[5], (_fty$$6 = activePatternResult58672[3], (_f$$6 = activePatternResult58672[2], (0, _tast.ValRef$$get_IsMemberOrModuleBinding)(vref$$8))))))) {
                $target$$39 = 2;
                _f$$10 = activePatternResult58672[2];
                _fty$$11 = activePatternResult58672[3];
                curriedArgs$$15 = activePatternResult58672[5];
                tyargs$$14 = activePatternResult58672[4];
                vFlags$$11 = activePatternResult58672[1];
                vref$$12 = activePatternResult58672[0];
              } else {
                $target$$39 = 3;
              }
            } else {
              $target$$39 = 3;
            }
          }
        } else {
          const activePatternResult58673 = (0, _QuotationTranslator.$007CModuleValueOrMemberUse$007C_$007C)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), expr$$10);

          if (activePatternResult58673 != null) {
            if (vref$$9 = activePatternResult58673[0], (vFlags$$8 = activePatternResult58673[1], (tyargs$$11 = activePatternResult58673[4], (curriedArgs$$12 = activePatternResult58673[5], (_fty$$7 = activePatternResult58673[3], (_f$$7 = activePatternResult58673[2], (0, _tast.ValRef$$get_IsMemberOrModuleBinding)(vref$$9))))))) {
              $target$$39 = 2;
              _f$$10 = activePatternResult58673[2];
              _fty$$11 = activePatternResult58673[3];
              curriedArgs$$15 = activePatternResult58673[5];
              tyargs$$14 = activePatternResult58673[4];
              vFlags$$11 = activePatternResult58673[1];
              vref$$12 = activePatternResult58673[0];
            } else {
              $target$$39 = 3;
            }
          } else {
            $target$$39 = 3;
          }
        }
      } else {
        const activePatternResult58674 = (0, _QuotationTranslator.$007CModuleValueOrMemberUse$007C_$007C)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), expr$$10);

        if (activePatternResult58674 != null) {
          if (vref$$10 = activePatternResult58674[0], (vFlags$$9 = activePatternResult58674[1], (tyargs$$12 = activePatternResult58674[4], (curriedArgs$$13 = activePatternResult58674[5], (_fty$$8 = activePatternResult58674[3], (_f$$8 = activePatternResult58674[2], (0, _tast.ValRef$$get_IsMemberOrModuleBinding)(vref$$10))))))) {
            $target$$39 = 2;
            _f$$10 = activePatternResult58674[2];
            _fty$$11 = activePatternResult58674[3];
            curriedArgs$$15 = activePatternResult58674[5];
            tyargs$$14 = activePatternResult58674[4];
            vFlags$$11 = activePatternResult58674[1];
            vref$$12 = activePatternResult58674[0];
          } else {
            $target$$39 = 3;
          }
        } else {
          $target$$39 = 3;
        }
      }
    } else if (expr$$10.tag === 7) {
      $target$$39 = 1;
    } else if (expr$$10.tag === 9) {
      $target$$39 = 1;
    } else if (expr$$10.tag === 2) {
      $target$$39 = 1;
    } else {
      const activePatternResult58675 = (0, _QuotationTranslator.$007CModuleValueOrMemberUse$007C_$007C)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), expr$$10);

      if (activePatternResult58675 != null) {
        if (vref$$11 = activePatternResult58675[0], (vFlags$$10 = activePatternResult58675[1], (tyargs$$13 = activePatternResult58675[4], (curriedArgs$$14 = activePatternResult58675[5], (_fty$$9 = activePatternResult58675[3], (_f$$9 = activePatternResult58675[2], (0, _tast.ValRef$$get_IsMemberOrModuleBinding)(vref$$11))))))) {
          $target$$39 = 2;
          _f$$10 = activePatternResult58675[2];
          _fty$$11 = activePatternResult58675[3];
          curriedArgs$$15 = activePatternResult58675[5];
          tyargs$$14 = activePatternResult58675[4];
          vFlags$$11 = activePatternResult58675[1];
          vref$$12 = activePatternResult58675[0];
        } else {
          $target$$39 = 3;
        }
      } else {
        $target$$39 = 3;
      }
    }

    switch ($target$$39) {
      case 0:
        {
          cenv$$15 = cenv$$15;
          env$$17 = env$$17;
          expr$$7 = ve;
          continue FSharpExprConvert$$$ConvExprPrim;
        }

      case 1:
        {
          return FSharpExprConvert$$$ConvExprPrimLinear(cenv$$15, env$$17, expr$$10, function (e$$10) {
            return e$$10;
          });
        }

      case 2:
        {
          return FSharpExprConvert$$$ConvModuleValueOrMemberUseLinear(cenv$$15, env$$17, expr$$10, vref$$12, vFlags$$11, tyargs$$14, curriedArgs$$15, function (e$$11) {
            return e$$11;
          });
        }

      case 3:
        {
          var $target$$40, _vFlags, m$$10, vref$$13, _fty$$12, _m, args$$3, f$$3, tyargs$$15, c$$2, m$$11, ty$$7, binds, body$$8, b$$8, vs$$4, ast, b$$10, tps$$1, ctyp$$1, e$$13, m$$12, tmethod$$1, tmvs$$1, tps$$2, ty$$8;

          if (expr$$10.tag === 1) {
            $target$$40 = 0;
            _vFlags = expr$$10.fields[1];
            m$$10 = expr$$10.fields[2];
            vref$$13 = expr$$10.fields[0];
          } else if (expr$$10.tag === 5) {
            $target$$40 = 1;
            _fty$$12 = expr$$10.fields[1];
            _m = expr$$10.fields[4];
            args$$3 = expr$$10.fields[3];
            f$$3 = expr$$10.fields[0];
            tyargs$$15 = expr$$10.fields[2];
          } else if (expr$$10.tag === 0) {
            $target$$40 = 2;
            c$$2 = expr$$10.fields[0];
            m$$11 = expr$$10.fields[1];
            ty$$7 = expr$$10.fields[2];
          } else if (expr$$10.tag === 6) {
            $target$$40 = 3;
            binds = expr$$10.fields[0];
            body$$8 = expr$$10.fields[1];
          } else if (expr$$10.tag === 3) {
            $target$$40 = 4;
            b$$8 = expr$$10.fields[4];
            vs$$4 = expr$$10.fields[3];
          } else if (expr$$10.tag === 12) {
            $target$$40 = 5;
            ast = expr$$10.fields[0];
          } else if (expr$$10.tag === 4) {
            $target$$40 = 6;
            b$$10 = expr$$10.fields[2];
            tps$$1 = expr$$10.fields[1];
          } else if (expr$$10.tag === 8) {
            if (expr$$10.fields[4].tail != null) {
              if (expr$$10.fields[4].head.fields[3].tail != null) {
                if (expr$$10.fields[4].head.fields[3].tail.tail == null) {
                  if (expr$$10.fields[4].tail.tail == null) {
                    if (ty$$6 = expr$$10.fields[1], (tps = expr$$10.fields[4].head.fields[2], (tmvs = expr$$10.fields[4].head.fields[3].head, (tmethod = expr$$10.fields[4].head, (m$$9 = expr$$10.fields[6], (e$$12 = expr$$10.fields[4].head.fields[4], (ctyp = expr$$10.fields[4].head.fields[0].fields[1], (0, _TastOps.isDelegateTy)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), ty$$6)))))))) {
                      $target$$40 = 7;
                      ctyp$$1 = expr$$10.fields[4].head.fields[0].fields[1];
                      e$$13 = expr$$10.fields[4].head.fields[4];
                      m$$12 = expr$$10.fields[6];
                      tmethod$$1 = expr$$10.fields[4].head;
                      tmvs$$1 = expr$$10.fields[4].head.fields[3].head;
                      tps$$2 = expr$$10.fields[4].head.fields[2];
                      ty$$8 = expr$$10.fields[1];
                    } else {
                      $target$$40 = 8;
                    }
                  } else {
                    $target$$40 = 8;
                  }
                } else {
                  $target$$40 = 8;
                }
              } else {
                $target$$40 = 8;
              }
            } else {
              $target$$40 = 8;
            }
          } else {
            $target$$40 = 8;
          }

          switch ($target$$40) {
            case 0:
              {
                return FSharpExprConvert$$$ConvValRef(cenv$$15, env$$17, m$$10, vref$$13);
              }

            case 1:
              {
                return new E(3, "Application", FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, f$$3), FSharpExprConvert$$$ConvTypes(cenv$$15, tyargs$$15), FSharpExprConvert$$$ConvExprs(cenv$$15, env$$17, args$$3));
              }

            case 2:
              {
                return FSharpExprConvert$$$ConvConst(cenv$$15, env$$17, m$$11, c$$2, ty$$7);
              }

            case 3:
              {
                const vs$$3 = (0, _TastOps.valsOfBinds)(binds);
                const vsR = (0, _List.map)(function mapping$$1(v$$7) {
                  return FSharpExprConvert$$$ConvVal(cenv$$15, v$$7);
                }, vs$$3);
                const env$$18 = ExprTranslationImpl$002EExprTranslationEnv$$BindVals$$Z51437EF1(env$$17, vs$$3);
                const bodyR$$1 = FSharpExprConvert$$$ConvExpr(cenv$$15, env$$18, body$$8);
                const bindsR = (0, _List.zip)(vsR, (0, _List.map)(function mapping$$2(b$$7) {
                  return FSharpExprConvert$$$ConvExpr(cenv$$15, env$$18, (0, _tast.Binding$$get_Expr)(b$$7));
                }, binds));
                return new E(12, "LetRec", bindsR, bodyR$$1);
              }

            case 4:
              {
                const patternInput$$8 = (0, _TastOps.MultiLambdaToTupledLambda)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), vs$$4, b$$8);
                const vR = FSharpExprConvert$$$ConvVal(cenv$$15, patternInput$$8[0]);
                const bR = FSharpExprConvert$$$ConvExpr(cenv$$15, ExprTranslationImpl$002EExprTranslationEnv$$BindVal$$7D0CFEA5(env$$17, patternInput$$8[0]), patternInput$$8[1]);
                return new E(4, "Lambda", vR, bR);
              }

            case 5:
              {
                return new E(6, "Quote", FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, ast));
              }

            case 6:
              {
                const gps$$1 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
                  return (0, _Seq.map)(function (tp) {
                    return (0, _Symbols.FSharpGenericParameter$$$$002Ector$$437E1539)(cenv$$15, tp);
                  }, tps$$1);
                }));
                const env$$19 = ExprTranslationImpl$002EExprTranslationEnv$$BindTypars$$5242D310(env$$17, (0, _List.ofSeq)((0, _Seq.zip)(tps$$1, gps$$1)));
                return new E(5, "TypeLambda", gps$$1, FSharpExprConvert$$$ConvExpr(cenv$$15, env$$19, b$$10));
              }

            case 7:
              {
                const f$$4 = (0, _TastOps.mkLambdas)(m$$12, tps$$2, tmvs$$1, e$$13, (0, _TastOps.GetFSharpViewOfReturnType)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), (0, _TastOps.returnTyOfMethod)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), tmethod$$1)));
                const fR$$1 = FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, f$$4);
                const tyargR = FSharpExprConvert$$$ConvType(cenv$$15, ctyp$$1);
                return new E(40, "NewDelegate", tyargR, fR$$1);
              }

            case 8:
              {
                switch (expr$$10.tag) {
                  case 10:
                    {
                      const x$$14 = expr$$10.fields[2];
                      cenv$$15 = cenv$$15;
                      env$$17 = env$$17;
                      expr$$7 = x$$14;
                      continue FSharpExprConvert$$$ConvExprPrim;
                    }

                  case 13:
                    {
                      const $var$$41 = cenv$$15;
                      env$$17 = env$$17;
                      expr$$7 = (0, _TypeRelations.ChooseTyparSolutionsForFreeChoiceTypars)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), (0, _Symbols.SymbolEnv$$get_amap)(cenv$$15), expr$$10);
                      cenv$$15 = $var$$41;
                      continue FSharpExprConvert$$$ConvExprPrim;
                    }

                  case 8:
                    {
                      const ty$$9 = expr$$10.fields[1];
                      const overrides$$1 = expr$$10.fields[4];
                      const iimpls = expr$$10.fields[5];
                      const basecall$$1 = expr$$10.fields[3];
                      const _m$$1 = expr$$10.fields[6];
                      const _lambdaId = expr$$10.fields[0];
                      const _basev = expr$$10.fields[2];
                      const basecallR = FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, basecall$$1);

                      const ConvertMethods = function ConvertMethods(methods) {
                        return (0, _List.ofSeq)((0, _Seq.delay)(function () {
                          return (0, _Seq.collect)(function (matchValue$$10) {
                            var vslR, sgn$$1, tpsR, env$$20, env$$21, bodyR$$2;
                            const tps$$3 = matchValue$$10.fields[2];
                            const tmvs$$2 = matchValue$$10.fields[3];
                            const slotsig = matchValue$$10.fields[0];
                            const body$$9 = matchValue$$10.fields[4];
                            return (0, _Seq.singleton)((vslR = (0, _List.map)(function (list$$6) {
                              return (0, _List.map)(function mapping$$3(v$$9) {
                                return FSharpExprConvert$$$ConvVal(cenv$$15, v$$9);
                              }, list$$6);
                            }, tmvs$$2), (sgn$$1 = (0, _Symbols.FSharpAbstractSignature$$$$002Ector$$418A41EE)(cenv$$15, slotsig), (tpsR = (0, _List.ofSeq)((0, _Seq.delay)(function () {
                              return (0, _Seq.map)(function (tp$$1) {
                                return (0, _Symbols.FSharpGenericParameter$$$$002Ector$$437E1539)(cenv$$15, tp$$1);
                              }, tps$$3);
                            })), (env$$20 = ExprTranslationImpl$002EExprTranslationEnv$$BindTypars$$5242D310(ExprTranslationImpl$002EExprTranslationEnv$$$get_Empty(), (0, _List.ofSeq)((0, _Seq.zip)(tps$$3, tpsR))), (env$$21 = ExprTranslationImpl$002EExprTranslationEnv$$BindCurriedVals$$614D085(env$$20, tmvs$$2), (bodyR$$2 = FSharpExprConvert$$$ConvExpr(cenv$$15, env$$21, body$$9), FSharpObjectExprOverride$$$$002Ector$$410CA850(sgn$$1, tpsR, vslR, bodyR$$2))))))));
                          }, methods);
                        }));
                      };

                      const overridesR = ConvertMethods(overrides$$1);
                      const iimplsR = (0, _List.map)(function (tupledArg$$1) {
                        return [FSharpExprConvert$$$ConvType(cenv$$15, tupledArg$$1[0]), ConvertMethods(tupledArg$$1[1])];
                      }, iimpls);
                      return new E(15, "ObjectExpr", FSharpExprConvert$$$ConvType(cenv$$15, ty$$9), basecallR, overridesR, iimplsR);
                    }

                  case 11:
                    {
                      const tyargs$$16 = expr$$10.fields[1];
                      const op$$1 = expr$$10.fields[0];
                      const m$$13 = expr$$10.fields[3];
                      const args$$4 = expr$$10.fields[2];
                      const matchValue$$11 = [op$$1, tyargs$$16, args$$4];

                      var $target$$42, ucref$$2, tupInfo, tyargs$$17, tcref$$2, e1$$3, n$$1, tyargs$$18, ucref$$3, e1$$4, e2$$3, n$$2, tyargs$$19, ucref$$4, _tyargs$$2, _tyargs$$3, rfref$$8, tyargs$$20, obj$$4, rfref$$9, tyargs$$21, e$$14, n$$3, tupInfo$$1, tyargs$$22, enclTypeArgs, fspec$$2, obj$$5, enclTypeArgs$$1, fspec$$3, arg$$8, enclTypeArgs$$2, fspec$$4, obj$$6, arg$$9, enclTypeArgs$$3, fspec$$5, arg$$10, tty, arg$$11, ty$$12, arg$$12, ty$$13, arg$$13, ty$$14, arg$$14, mspec$$1;

                      if (matchValue$$11[0].tag === 0) {
                        $target$$42 = 0;
                        ucref$$2 = matchValue$$11[0].fields[0];
                      } else if (matchValue$$11[0].tag === 2) {
                        $target$$42 = 1;
                        tupInfo = matchValue$$11[0].fields[0];
                        tyargs$$17 = matchValue$$11[1];
                      } else if (matchValue$$11[0].tag === 10) {
                        $target$$42 = 2;
                        tcref$$2 = matchValue$$11[0].fields[1];
                      } else if (matchValue$$11[0].tag === 16) {
                        if (matchValue$$11[2].tail != null) {
                          if (matchValue$$11[2].tail.tail == null) {
                            $target$$42 = 3;
                            e1$$3 = matchValue$$11[2].head;
                            n$$1 = matchValue$$11[0].fields[1];
                            tyargs$$18 = matchValue$$11[1];
                            ucref$$3 = matchValue$$11[0].fields[0];
                          } else {
                            $target$$42 = 19;
                          }
                        } else {
                          $target$$42 = 19;
                        }
                      } else if (matchValue$$11[0].tag === 18) {
                        if (matchValue$$11[2].tail != null) {
                          if (matchValue$$11[2].tail.tail != null) {
                            if (matchValue$$11[2].tail.tail.tail == null) {
                              $target$$42 = 4;
                              e1$$4 = matchValue$$11[2].head;
                              e2$$3 = matchValue$$11[2].tail.head;
                              n$$2 = matchValue$$11[0].fields[1];
                              tyargs$$19 = matchValue$$11[1];
                              ucref$$4 = matchValue$$11[0].fields[0];
                            } else {
                              $target$$42 = 19;
                            }
                          } else {
                            $target$$42 = 19;
                          }
                        } else {
                          $target$$42 = 19;
                        }
                      } else if (matchValue$$11[0].tag === 17) {
                        $target$$42 = 5;
                        _tyargs$$2 = matchValue$$11[1];
                      } else if (matchValue$$11[0].tag === 13) {
                        $target$$42 = 6;
                        _tyargs$$3 = matchValue$$11[1];
                      } else if (matchValue$$11[0].tag === 12) {
                        if (matchValue$$11[2].tail != null) {
                          if (matchValue$$11[2].tail.tail == null) {
                            $target$$42 = 8;
                            obj$$4 = matchValue$$11[2].head;
                            rfref$$9 = matchValue$$11[0].fields[0];
                            tyargs$$21 = matchValue$$11[1];
                          } else {
                            $target$$42 = 19;
                          }
                        } else {
                          $target$$42 = 7;
                          rfref$$8 = matchValue$$11[0].fields[0];
                          tyargs$$20 = matchValue$$11[1];
                        }
                      } else if (matchValue$$11[0].tag === 21) {
                        if (matchValue$$11[2].tail != null) {
                          if (matchValue$$11[2].tail.tail == null) {
                            $target$$42 = 9;
                            e$$14 = matchValue$$11[2].head;
                            n$$3 = matchValue$$11[0].fields[1];
                            tupInfo$$1 = matchValue$$11[0].fields[0];
                            tyargs$$22 = matchValue$$11[1];
                          } else {
                            $target$$42 = 19;
                          }
                        } else {
                          $target$$42 = 19;
                        }
                      } else if (matchValue$$11[0].tag === 22) {
                        if (matchValue$$11[0].fields[0].tail == null) {
                          if (matchValue$$11[0].fields[1].tail != null) {
                            if (matchValue$$11[0].fields[1].tail.tail == null) {
                              if (matchValue$$11[2].tail != null) {
                                if (matchValue$$11[2].tail.tail == null) {
                                  $target$$42 = 14;
                                  arg$$10 = matchValue$$11[2].head;
                                  tty = matchValue$$11[0].fields[1].head;
                                } else {
                                  $target$$42 = 19;
                                }
                              } else {
                                $target$$42 = 19;
                              }
                            } else {
                              $target$$42 = 19;
                            }
                          } else {
                            $target$$42 = 19;
                          }
                        } else if (matchValue$$11[0].fields[0].head.tag === 60) {
                          if (matchValue$$11[0].fields[0].tail.tail == null) {
                            if (matchValue$$11[2].tail != null) {
                              if (matchValue$$11[2].tail.tail == null) {
                                $target$$42 = 10;
                                enclTypeArgs = matchValue$$11[1];
                                fspec$$2 = matchValue$$11[0].fields[0].head.fields[2];
                                obj$$5 = matchValue$$11[2].head;
                              } else {
                                $target$$42 = 19;
                              }
                            } else {
                              $target$$42 = 19;
                            }
                          } else {
                            $target$$42 = 19;
                          }
                        } else if (matchValue$$11[0].fields[0].head.tag === 59) {
                          if (matchValue$$11[0].fields[0].tail.tail != null) {
                            if (matchValue$$11[0].fields[0].tail.head.tag === 33) {
                              if (matchValue$$11[0].fields[0].tail.tail.tail == null) {
                                if (matchValue$$11[2].tail == null) {
                                  $target$$42 = 11;
                                  enclTypeArgs$$1 = matchValue$$11[1];
                                  fspec$$3 = matchValue$$11[0].fields[0].head.fields[1];
                                } else {
                                  $target$$42 = 19;
                                }
                              } else {
                                $target$$42 = 19;
                              }
                            } else {
                              $target$$42 = 19;
                            }
                          } else if (matchValue$$11[2].tail == null) {
                            $target$$42 = 11;
                            enclTypeArgs$$1 = matchValue$$11[1];
                            fspec$$3 = matchValue$$11[0].fields[0].head.fields[1];
                          } else {
                            $target$$42 = 19;
                          }
                        } else if (matchValue$$11[0].fields[0].head.tag === 64) {
                          if (matchValue$$11[0].fields[0].tail.tail == null) {
                            if (matchValue$$11[2].tail != null) {
                              if (matchValue$$11[2].tail.tail != null) {
                                if (matchValue$$11[2].tail.tail.tail == null) {
                                  $target$$42 = 12;
                                  arg$$8 = matchValue$$11[2].tail.head;
                                  enclTypeArgs$$2 = matchValue$$11[1];
                                  fspec$$4 = matchValue$$11[0].fields[0].head.fields[2];
                                  obj$$6 = matchValue$$11[2].head;
                                } else {
                                  $target$$42 = 19;
                                }
                              } else {
                                $target$$42 = 19;
                              }
                            } else {
                              $target$$42 = 19;
                            }
                          } else {
                            $target$$42 = 19;
                          }
                        } else if (matchValue$$11[0].fields[0].head.tag === 63) {
                          if (matchValue$$11[0].fields[0].tail.tail == null) {
                            if (matchValue$$11[2].tail != null) {
                              if (matchValue$$11[2].tail.tail == null) {
                                $target$$42 = 13;
                                arg$$9 = matchValue$$11[2].head;
                                enclTypeArgs$$3 = matchValue$$11[1];
                                fspec$$5 = matchValue$$11[0].fields[0].head.fields[1];
                              } else {
                                $target$$42 = 19;
                              }
                            } else {
                              $target$$42 = 19;
                            }
                          } else {
                            $target$$42 = 19;
                          }
                        } else if (matchValue$$11[0].fields[0].head.tag === 74) {
                          if (matchValue$$11[0].fields[0].tail.tail == null) {
                            if (matchValue$$11[1].tail != null) {
                              if (matchValue$$11[1].tail.tail == null) {
                                if (matchValue$$11[2].tail != null) {
                                  if (matchValue$$11[2].tail.tail == null) {
                                    $target$$42 = 15;
                                    arg$$11 = matchValue$$11[2].head;
                                    ty$$12 = matchValue$$11[1].head;
                                  } else {
                                    $target$$42 = 19;
                                  }
                                } else {
                                  $target$$42 = 19;
                                }
                              } else {
                                $target$$42 = 19;
                              }
                            } else {
                              $target$$42 = 19;
                            }
                          } else {
                            $target$$42 = 19;
                          }
                        } else if (matchValue$$11[0].fields[0].head.tag === 76) {
                          if (matchValue$$11[0].fields[0].tail.tail == null) {
                            if (matchValue$$11[1].tail != null) {
                              if (matchValue$$11[1].tail.tail == null) {
                                if (matchValue$$11[2].tail != null) {
                                  if (matchValue$$11[2].tail.tail == null) {
                                    $target$$42 = 16;
                                    arg$$12 = matchValue$$11[2].head;
                                    ty$$13 = matchValue$$11[1].head;
                                  } else {
                                    $target$$42 = 19;
                                  }
                                } else {
                                  $target$$42 = 19;
                                }
                              } else {
                                $target$$42 = 19;
                              }
                            } else {
                              $target$$42 = 19;
                            }
                          } else {
                            $target$$42 = 19;
                          }
                        } else if (matchValue$$11[0].fields[0].head.tag === 66) {
                          if (matchValue$$11[0].fields[0].tail.tail == null) {
                            if (matchValue$$11[1].tail != null) {
                              if (matchValue$$11[1].tail.tail == null) {
                                if (matchValue$$11[2].tail != null) {
                                  if (matchValue$$11[2].tail.tail == null) {
                                    $target$$42 = 17;
                                    arg$$13 = matchValue$$11[2].head;
                                    ty$$14 = matchValue$$11[1].head;
                                  } else {
                                    $target$$42 = 19;
                                  }
                                } else {
                                  $target$$42 = 19;
                                }
                              } else {
                                $target$$42 = 19;
                              }
                            } else {
                              $target$$42 = 19;
                            }
                          } else {
                            $target$$42 = 19;
                          }
                        } else if (matchValue$$11[0].fields[0].head.tag === 48) {
                          if (matchValue$$11[0].fields[0].head.fields[0].tag === 1) {
                            if (matchValue$$11[0].fields[0].head.fields[2] == null) {
                              if (matchValue$$11[0].fields[0].tail.tail == null) {
                                if (matchValue$$11[2].tail != null) {
                                  if (matchValue$$11[2].tail.tail == null) {
                                    if (mspec = matchValue$$11[0].fields[0].head.fields[1], (arg$$7 = matchValue$$11[2].head, (0, _il.ILTypeRef$$get_Name)((0, _il.ILMethodRef$$get_DeclaringTypeRef)((0, _il.ILMethodSpec$$get_MethodRef)(mspec))) === "System.String" ? (0, _il.ILMethodSpec$$get_Name)(mspec) === "GetHashCode" : false)) {
                                      $target$$42 = 18;
                                      arg$$14 = matchValue$$11[2].head;
                                      mspec$$1 = matchValue$$11[0].fields[0].head.fields[1];
                                    } else {
                                      $target$$42 = 19;
                                    }
                                  } else {
                                    $target$$42 = 19;
                                  }
                                } else {
                                  $target$$42 = 19;
                                }
                              } else {
                                $target$$42 = 19;
                              }
                            } else {
                              $target$$42 = 19;
                            }
                          } else {
                            $target$$42 = 19;
                          }
                        } else {
                          $target$$42 = 19;
                        }
                      } else {
                        $target$$42 = 19;
                      }

                      switch ($target$$42) {
                        case 0:
                          {
                            const mkR$$1 = FSharpExprConvert$$$ConvUnionCaseRef(cenv$$15, ucref$$2);
                            const typR$$1 = FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAppTy)((0, _tast.UnionCaseRef$$get_TyconRef)(ucref$$2), tyargs$$16));
                            const argsR = FSharpExprConvert$$$ConvExprs(cenv$$15, env$$17, args$$4);
                            return new E(18, "NewUnionCase", typR$$1, mkR$$1, argsR);
                          }

                        case 1:
                          {
                            const tyR = FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAnyTupledTy)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), tupInfo, tyargs$$17));
                            const argsR$$1 = FSharpExprConvert$$$ConvExprs(cenv$$15, env$$17, args$$4);
                            return new E(24, "NewTuple", tyR, argsR$$1);
                          }

                        case 2:
                          {
                            const typR$$2 = FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAppTy)(tcref$$2, tyargs$$16));
                            const argsR$$2 = FSharpExprConvert$$$ConvExprs(cenv$$15, env$$17, args$$4);
                            return new E(14, "NewRecord", typR$$2, argsR$$2);
                          }

                        case 3:
                          {
                            const mkR$$2 = FSharpExprConvert$$$ConvUnionCaseRef(cenv$$15, ucref$$3);
                            const typR$$3 = FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAppTy)((0, _tast.UnionCaseRef$$get_TyconRef)(ucref$$3), tyargs$$18));
                            const projR = (0, _Symbols.FSharpField$$$$002Ector$$Z2A5775A3)(cenv$$15, ucref$$3, n$$1);
                            return new E(19, "UnionCaseGet", FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, e1$$3), typR$$3, mkR$$2, projR);
                          }

                        case 4:
                          {
                            const mkR$$3 = FSharpExprConvert$$$ConvUnionCaseRef(cenv$$15, ucref$$4);
                            const typR$$4 = FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAppTy)((0, _tast.UnionCaseRef$$get_TyconRef)(ucref$$4), tyargs$$19));
                            const projR$$1 = (0, _Symbols.FSharpField$$$$002Ector$$Z2A5775A3)(cenv$$15, ucref$$4, n$$2);
                            return new E(20, "UnionCaseSet", FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, e1$$4), typR$$4, mkR$$3, projR$$1, FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, e2$$3));
                          }

                        case 5:
                          {
                            return new E(34, "AddressOf", FSharpExprConvert$$$ConvLValueExpr(cenv$$15, env$$17, expr$$10));
                          }

                        case 6:
                          {
                            return new E(34, "AddressOf", FSharpExprConvert$$$ConvLValueExpr(cenv$$15, env$$17, expr$$10));
                          }

                        case 7:
                          {
                            const projR$$2 = FSharpExprConvert$$$ConvRecdFieldRef(cenv$$15, rfref$$8);
                            const typR$$5 = FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAppTy)((0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$8), tyargs$$20));
                            return new E(16, "FSharpFieldGet", null, typR$$5, projR$$2);
                          }

                        case 8:
                          {
                            const objR = FSharpExprConvert$$$ConvLValueExpr(cenv$$15, env$$17, obj$$4);
                            const projR$$3 = FSharpExprConvert$$$ConvRecdFieldRef(cenv$$15, rfref$$9);
                            const typR$$6 = FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAppTy)((0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$9), tyargs$$21));
                            return new E(16, "FSharpFieldGet", objR, typR$$6, projR$$3);
                          }

                        case 9:
                          {
                            const tyR$$1 = FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAnyTupledTy)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), tupInfo$$1, tyargs$$22));
                            return new E(25, "TupleGet", tyR$$1, n$$3, FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, e$$14));
                          }

                        case 10:
                          {
                            const typR$$7 = FSharpExprConvert$$$ConvILTypeRefApp(cenv$$15, m$$13, (0, _il.ILFieldSpec$$get_DeclaringTypeRef)(fspec$$2), enclTypeArgs);
                            const objR$$1 = FSharpExprConvert$$$ConvLValueExpr(cenv$$15, env$$17, obj$$5);
                            return new E(41, "ILFieldGet", objR$$1, typR$$7, (0, _il.ILFieldSpec$$get_Name)(fspec$$2));
                          }

                        case 11:
                          {
                            const typR$$8 = FSharpExprConvert$$$ConvILTypeRefApp(cenv$$15, m$$13, (0, _il.ILFieldSpec$$get_DeclaringTypeRef)(fspec$$3), enclTypeArgs$$1);
                            return new E(41, "ILFieldGet", null, typR$$8, (0, _il.ILFieldSpec$$get_Name)(fspec$$3));
                          }

                        case 12:
                          {
                            const typR$$9 = FSharpExprConvert$$$ConvILTypeRefApp(cenv$$15, m$$13, (0, _il.ILFieldSpec$$get_DeclaringTypeRef)(fspec$$4), enclTypeArgs$$2);
                            const objR$$2 = FSharpExprConvert$$$ConvLValueExpr(cenv$$15, env$$17, obj$$6);
                            const argR = FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, arg$$8);
                            return new E(42, "ILFieldSet", objR$$2, typR$$9, (0, _il.ILFieldSpec$$get_Name)(fspec$$4), argR);
                          }

                        case 13:
                          {
                            const typR$$10 = FSharpExprConvert$$$ConvILTypeRefApp(cenv$$15, m$$13, (0, _il.ILFieldSpec$$get_DeclaringTypeRef)(fspec$$5), enclTypeArgs$$3);
                            const argR$$1 = FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, arg$$9);
                            return new E(42, "ILFieldSet", null, typR$$10, (0, _il.ILFieldSpec$$get_Name)(fspec$$5), argR$$1);
                          }

                        case 14:
                          {
                            const activePatternResult58624 = FSharpExprConvert$$$$007CTTypeConvOp$007C_$007C(cenv$$15, tty);

                            if (activePatternResult58624 != null) {
                              const convOp = activePatternResult58624;
                              const ty$$11 = (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), arg$$10);
                              const op$$2 = convOp((0, _Symbols.SymbolEnv$$get_g)(cenv$$15))(m$$13)(ty$$11)(arg$$10);
                              cenv$$15 = cenv$$15;
                              env$$17 = env$$17;
                              expr$$7 = op$$2;
                              continue FSharpExprConvert$$$ConvExprPrim;
                            } else {
                              cenv$$15 = cenv$$15;
                              env$$17 = env$$17;
                              expr$$7 = arg$$10;
                              continue FSharpExprConvert$$$ConvExprPrim;
                            }
                          }

                        case 15:
                          {
                            const op$$3 = (0, _TastOps.mkCallBox)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), m$$13, ty$$12, arg$$11);
                            cenv$$15 = cenv$$15;
                            env$$17 = env$$17;
                            expr$$7 = op$$3;
                            continue FSharpExprConvert$$$ConvExprPrim;
                          }

                        case 16:
                          {
                            const op$$4 = (0, _TastOps.mkCallUnbox)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), m$$13, ty$$13, arg$$12);
                            cenv$$15 = cenv$$15;
                            env$$17 = env$$17;
                            expr$$7 = op$$4;
                            continue FSharpExprConvert$$$ConvExprPrim;
                          }

                        case 17:
                          {
                            const op$$5 = (0, _TastOps.mkCallTypeTest)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), m$$13, ty$$14, arg$$13);
                            cenv$$15 = cenv$$15;
                            env$$17 = env$$17;
                            expr$$7 = op$$5;
                            continue FSharpExprConvert$$$ConvExprPrim;
                          }

                        case 18:
                          {
                            const ty$$15 = (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), arg$$14);
                            const op$$6 = (0, _TastOps.mkCallHash)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), m$$13, ty$$15, arg$$14);
                            cenv$$15 = cenv$$15;
                            env$$17 = env$$17;
                            expr$$7 = op$$6;
                            continue FSharpExprConvert$$$ConvExprPrim;
                          }

                        case 19:
                          {
                            var $target$$43, mref$$1, ty$$17;

                            if (matchValue$$11[0].tag === 31) {
                              if (matchValue$$11[1].tail == null) {
                                if (matchValue$$11[2].tail != null) {
                                  if (matchValue$$11[2].head.tag === 11) {
                                    if (matchValue$$11[2].head.fields[0].tag === 22) {
                                      if (matchValue$$11[2].head.fields[0].fields[0].tail != null) {
                                        if (matchValue$$11[2].head.fields[0].fields[0].head.tag === 68) {
                                          if (matchValue$$11[2].head.fields[0].fields[0].head.fields[0].tag === 0) {
                                            if (matchValue$$11[2].head.fields[0].fields[0].tail.tail == null) {
                                              if (matchValue$$11[2].head.fields[1].tail != null) {
                                                if (matchValue$$11[2].head.fields[1].tail.tail == null) {
                                                  if (matchValue$$11[2].tail.tail == null) {
                                                    if (ty$$16 = matchValue$$11[2].head.fields[1].head, (mref = matchValue$$11[0].fields[7], (0, _il.ILTypeRef$$get_Name)((0, _il.ILMethodRef$$get_DeclaringTypeRef)(mref)) === "System.Type" ? (0, _il.ILMethodRef$$get_Name)(mref) === "GetTypeFromHandle" : false)) {
                                                      $target$$43 = 0;
                                                      mref$$1 = matchValue$$11[0].fields[7];
                                                      ty$$17 = matchValue$$11[2].head.fields[1].head;
                                                    } else {
                                                      $target$$43 = 1;
                                                    }
                                                  } else {
                                                    $target$$43 = 1;
                                                  }
                                                } else {
                                                  $target$$43 = 1;
                                                }
                                              } else {
                                                $target$$43 = 1;
                                              }
                                            } else {
                                              $target$$43 = 1;
                                            }
                                          } else {
                                            $target$$43 = 1;
                                          }
                                        } else {
                                          $target$$43 = 1;
                                        }
                                      } else {
                                        $target$$43 = 1;
                                      }
                                    } else {
                                      $target$$43 = 1;
                                    }
                                  } else {
                                    $target$$43 = 1;
                                  }
                                } else {
                                  $target$$43 = 1;
                                }
                              } else {
                                $target$$43 = 1;
                              }
                            } else {
                              $target$$43 = 1;
                            }

                            switch ($target$$43) {
                              case 0:
                                {
                                  const op$$7 = (0, _TastOps.mkCallTypeOf)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), m$$13, ty$$17);
                                  cenv$$15 = cenv$$15;
                                  env$$17 = env$$17;
                                  expr$$7 = op$$7;
                                  continue FSharpExprConvert$$$ConvExprPrim;
                                }

                              case 1:
                                {
                                  var $target$$44, ty$$18, arg$$15, arr$$1, elemTy$$2, xa, arr$$2, elemTy$$3, idx1$$4, arr$$3, elemTy$$4, idx1$$5, v$$10, arg$$16, unaryOp;

                                  if (matchValue$$11[0].tag === 22) {
                                    if (matchValue$$11[0].fields[0].tail != null) {
                                      if (matchValue$$11[0].fields[0].head.tag === 94) {
                                        if (matchValue$$11[0].fields[0].tail.tail == null) {
                                          if (matchValue$$11[1].tail != null) {
                                            if (matchValue$$11[1].tail.tail == null) {
                                              $target$$44 = 0;
                                              ty$$18 = matchValue$$11[1].head;
                                            } else {
                                              const activePatternResult58637 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                              if (activePatternResult58637 != null) {
                                                if (matchValue$$11[2].tail != null) {
                                                  if (matchValue$$11[2].tail.tail == null) {
                                                    $target$$44 = 6;
                                                    arg$$16 = matchValue$$11[2].head;
                                                    unaryOp = activePatternResult58637;
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            }
                                          } else {
                                            const activePatternResult58638 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                            if (activePatternResult58638 != null) {
                                              if (matchValue$$11[2].tail != null) {
                                                if (matchValue$$11[2].tail.tail == null) {
                                                  $target$$44 = 6;
                                                  arg$$16 = matchValue$$11[2].head;
                                                  unaryOp = activePatternResult58638;
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            } else {
                                              $target$$44 = 7;
                                            }
                                          }
                                        } else {
                                          $target$$44 = 7;
                                        }
                                      } else if (matchValue$$11[0].fields[0].head.tag === 29) {
                                        if (matchValue$$11[0].fields[0].tail.tail == null) {
                                          const activePatternResult58639 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                          if (activePatternResult58639 != null) {
                                            if (matchValue$$11[2].tail != null) {
                                              if (matchValue$$11[2].tail.tail == null) {
                                                $target$$44 = 6;
                                                arg$$16 = matchValue$$11[2].head;
                                                unaryOp = activePatternResult58639;
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            } else {
                                              $target$$44 = 7;
                                            }
                                          } else {
                                            $target$$44 = 7;
                                          }
                                        } else if (matchValue$$11[0].fields[0].tail.head.tag === 8) {
                                          if (matchValue$$11[0].fields[0].tail.tail.tail == null) {
                                            if (matchValue$$11[2].tail != null) {
                                              if (matchValue$$11[2].tail.tail == null) {
                                                $target$$44 = 1;
                                                arg$$15 = matchValue$$11[2].head;
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            } else {
                                              $target$$44 = 7;
                                            }
                                          } else {
                                            $target$$44 = 7;
                                          }
                                        } else {
                                          $target$$44 = 7;
                                        }
                                      } else if (matchValue$$11[0].fields[0].head.tag === 84) {
                                        if (matchValue$$11[0].fields[0].tail.tail == null) {
                                          const activePatternResult58640 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                          if (activePatternResult58640 != null) {
                                            if (matchValue$$11[2].tail != null) {
                                              if (matchValue$$11[2].tail.tail == null) {
                                                $target$$44 = 6;
                                                arg$$16 = matchValue$$11[2].head;
                                                unaryOp = activePatternResult58640;
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            } else {
                                              $target$$44 = 7;
                                            }
                                          } else {
                                            $target$$44 = 7;
                                          }
                                        } else if (matchValue$$11[0].fields[0].tail.head.tag === 11) {
                                          if (matchValue$$11[0].fields[0].tail.head.fields[0].tag === 5) {
                                            if (matchValue$$11[0].fields[0].tail.tail.tail == null) {
                                              if (matchValue$$11[2].tail != null) {
                                                if (matchValue$$11[2].tail.tail == null) {
                                                  $target$$44 = 2;
                                                  arr$$1 = matchValue$$11[2].head;
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            } else {
                                              $target$$44 = 7;
                                            }
                                          } else {
                                            $target$$44 = 7;
                                          }
                                        } else {
                                          $target$$44 = 7;
                                        }
                                      } else if (matchValue$$11[0].fields[0].head.tag === 83) {
                                        if (matchValue$$11[0].fields[0].head.fields[0].fields[0].tail != null) {
                                          if (matchValue$$11[0].fields[0].head.fields[0].fields[0].head[0] != null) {
                                            if (matchValue$$11[0].fields[0].head.fields[0].fields[0].head[0] === 0) {
                                              if (matchValue$$11[0].fields[0].head.fields[0].fields[0].head[1] == null) {
                                                if (matchValue$$11[0].fields[0].head.fields[0].fields[0].tail.tail == null) {
                                                  if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                    if (matchValue$$11[1].tail != null) {
                                                      if (matchValue$$11[1].tail.tail == null) {
                                                        $target$$44 = 3;
                                                        elemTy$$2 = matchValue$$11[1].head;
                                                        xa = matchValue$$11[2];
                                                      } else {
                                                        const activePatternResult58641 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                        if (activePatternResult58641 != null) {
                                                          if (matchValue$$11[2].tail != null) {
                                                            if (matchValue$$11[2].tail.tail == null) {
                                                              $target$$44 = 6;
                                                              arg$$16 = matchValue$$11[2].head;
                                                              unaryOp = activePatternResult58641;
                                                            } else {
                                                              $target$$44 = 7;
                                                            }
                                                          } else {
                                                            $target$$44 = 7;
                                                          }
                                                        } else {
                                                          $target$$44 = 7;
                                                        }
                                                      }
                                                    } else {
                                                      const activePatternResult58642 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                      if (activePatternResult58642 != null) {
                                                        if (matchValue$$11[2].tail != null) {
                                                          if (matchValue$$11[2].tail.tail == null) {
                                                            $target$$44 = 6;
                                                            arg$$16 = matchValue$$11[2].head;
                                                            unaryOp = activePatternResult58642;
                                                          } else {
                                                            $target$$44 = 7;
                                                          }
                                                        } else {
                                                          $target$$44 = 7;
                                                        }
                                                      } else {
                                                        $target$$44 = 7;
                                                      }
                                                    }
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                } else {
                                                  const activePatternResult58643 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                  if (activePatternResult58643 != null) {
                                                    if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                      if (matchValue$$11[2].tail != null) {
                                                        if (matchValue$$11[2].tail.tail == null) {
                                                          $target$$44 = 6;
                                                          arg$$16 = matchValue$$11[2].head;
                                                          unaryOp = activePatternResult58643;
                                                        } else {
                                                          $target$$44 = 7;
                                                        }
                                                      } else {
                                                        $target$$44 = 7;
                                                      }
                                                    } else {
                                                      $target$$44 = 7;
                                                    }
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                }
                                              } else {
                                                const activePatternResult58644 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                if (activePatternResult58644 != null) {
                                                  if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                    if (matchValue$$11[2].tail != null) {
                                                      if (matchValue$$11[2].tail.tail == null) {
                                                        $target$$44 = 6;
                                                        arg$$16 = matchValue$$11[2].head;
                                                        unaryOp = activePatternResult58644;
                                                      } else {
                                                        $target$$44 = 7;
                                                      }
                                                    } else {
                                                      $target$$44 = 7;
                                                    }
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              }
                                            } else {
                                              const activePatternResult58645 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                              if (activePatternResult58645 != null) {
                                                if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                  if (matchValue$$11[2].tail != null) {
                                                    if (matchValue$$11[2].tail.tail == null) {
                                                      $target$$44 = 6;
                                                      arg$$16 = matchValue$$11[2].head;
                                                      unaryOp = activePatternResult58645;
                                                    } else {
                                                      $target$$44 = 7;
                                                    }
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            }
                                          } else {
                                            const activePatternResult58646 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                            if (activePatternResult58646 != null) {
                                              if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                if (matchValue$$11[2].tail != null) {
                                                  if (matchValue$$11[2].tail.tail == null) {
                                                    $target$$44 = 6;
                                                    arg$$16 = matchValue$$11[2].head;
                                                    unaryOp = activePatternResult58646;
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            } else {
                                              $target$$44 = 7;
                                            }
                                          }
                                        } else {
                                          const activePatternResult58647 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                          if (activePatternResult58647 != null) {
                                            if (matchValue$$11[0].fields[0].tail.tail == null) {
                                              if (matchValue$$11[2].tail != null) {
                                                if (matchValue$$11[2].tail.tail == null) {
                                                  $target$$44 = 6;
                                                  arg$$16 = matchValue$$11[2].head;
                                                  unaryOp = activePatternResult58647;
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            } else {
                                              $target$$44 = 7;
                                            }
                                          } else {
                                            $target$$44 = 7;
                                          }
                                        }
                                      } else if (matchValue$$11[0].fields[0].head.tag === 81) {
                                        if (matchValue$$11[0].fields[0].head.fields[0].fields[0].tail != null) {
                                          if (matchValue$$11[0].fields[0].head.fields[0].fields[0].head[0] != null) {
                                            if (matchValue$$11[0].fields[0].head.fields[0].fields[0].head[0] === 0) {
                                              if (matchValue$$11[0].fields[0].head.fields[0].fields[0].head[1] == null) {
                                                if (matchValue$$11[0].fields[0].head.fields[0].fields[0].tail.tail == null) {
                                                  if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                    if (matchValue$$11[1].tail != null) {
                                                      if (matchValue$$11[1].tail.tail == null) {
                                                        if (matchValue$$11[2].tail != null) {
                                                          if (matchValue$$11[2].tail.tail == null) {
                                                            const activePatternResult58648 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                            if (activePatternResult58648 != null) {
                                                              $target$$44 = 6;
                                                              arg$$16 = matchValue$$11[2].head;
                                                              unaryOp = activePatternResult58648;
                                                            } else {
                                                              $target$$44 = 7;
                                                            }
                                                          } else if (matchValue$$11[2].tail.tail.tail == null) {
                                                            $target$$44 = 4;
                                                            arr$$2 = matchValue$$11[2].head;
                                                            elemTy$$3 = matchValue$$11[1].head;
                                                            idx1$$4 = matchValue$$11[2].tail.head;
                                                          } else {
                                                            $target$$44 = 7;
                                                          }
                                                        } else {
                                                          $target$$44 = 7;
                                                        }
                                                      } else {
                                                        const activePatternResult58649 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                        if (activePatternResult58649 != null) {
                                                          if (matchValue$$11[2].tail != null) {
                                                            if (matchValue$$11[2].tail.tail == null) {
                                                              $target$$44 = 6;
                                                              arg$$16 = matchValue$$11[2].head;
                                                              unaryOp = activePatternResult58649;
                                                            } else {
                                                              $target$$44 = 7;
                                                            }
                                                          } else {
                                                            $target$$44 = 7;
                                                          }
                                                        } else {
                                                          $target$$44 = 7;
                                                        }
                                                      }
                                                    } else {
                                                      const activePatternResult58650 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                      if (activePatternResult58650 != null) {
                                                        if (matchValue$$11[2].tail != null) {
                                                          if (matchValue$$11[2].tail.tail == null) {
                                                            $target$$44 = 6;
                                                            arg$$16 = matchValue$$11[2].head;
                                                            unaryOp = activePatternResult58650;
                                                          } else {
                                                            $target$$44 = 7;
                                                          }
                                                        } else {
                                                          $target$$44 = 7;
                                                        }
                                                      } else {
                                                        $target$$44 = 7;
                                                      }
                                                    }
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                } else {
                                                  const activePatternResult58651 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                  if (activePatternResult58651 != null) {
                                                    if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                      if (matchValue$$11[2].tail != null) {
                                                        if (matchValue$$11[2].tail.tail == null) {
                                                          $target$$44 = 6;
                                                          arg$$16 = matchValue$$11[2].head;
                                                          unaryOp = activePatternResult58651;
                                                        } else {
                                                          $target$$44 = 7;
                                                        }
                                                      } else {
                                                        $target$$44 = 7;
                                                      }
                                                    } else {
                                                      $target$$44 = 7;
                                                    }
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                }
                                              } else {
                                                const activePatternResult58652 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                if (activePatternResult58652 != null) {
                                                  if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                    if (matchValue$$11[2].tail != null) {
                                                      if (matchValue$$11[2].tail.tail == null) {
                                                        $target$$44 = 6;
                                                        arg$$16 = matchValue$$11[2].head;
                                                        unaryOp = activePatternResult58652;
                                                      } else {
                                                        $target$$44 = 7;
                                                      }
                                                    } else {
                                                      $target$$44 = 7;
                                                    }
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              }
                                            } else {
                                              const activePatternResult58653 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                              if (activePatternResult58653 != null) {
                                                if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                  if (matchValue$$11[2].tail != null) {
                                                    if (matchValue$$11[2].tail.tail == null) {
                                                      $target$$44 = 6;
                                                      arg$$16 = matchValue$$11[2].head;
                                                      unaryOp = activePatternResult58653;
                                                    } else {
                                                      $target$$44 = 7;
                                                    }
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            }
                                          } else {
                                            const activePatternResult58654 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                            if (activePatternResult58654 != null) {
                                              if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                if (matchValue$$11[2].tail != null) {
                                                  if (matchValue$$11[2].tail.tail == null) {
                                                    $target$$44 = 6;
                                                    arg$$16 = matchValue$$11[2].head;
                                                    unaryOp = activePatternResult58654;
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            } else {
                                              $target$$44 = 7;
                                            }
                                          }
                                        } else {
                                          const activePatternResult58655 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                          if (activePatternResult58655 != null) {
                                            if (matchValue$$11[0].fields[0].tail.tail == null) {
                                              if (matchValue$$11[2].tail != null) {
                                                if (matchValue$$11[2].tail.tail == null) {
                                                  $target$$44 = 6;
                                                  arg$$16 = matchValue$$11[2].head;
                                                  unaryOp = activePatternResult58655;
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            } else {
                                              $target$$44 = 7;
                                            }
                                          } else {
                                            $target$$44 = 7;
                                          }
                                        }
                                      } else if (matchValue$$11[0].fields[0].head.tag === 82) {
                                        if (matchValue$$11[0].fields[0].head.fields[0].fields[0].tail != null) {
                                          if (matchValue$$11[0].fields[0].head.fields[0].fields[0].head[0] != null) {
                                            if (matchValue$$11[0].fields[0].head.fields[0].fields[0].head[0] === 0) {
                                              if (matchValue$$11[0].fields[0].head.fields[0].fields[0].head[1] == null) {
                                                if (matchValue$$11[0].fields[0].head.fields[0].fields[0].tail.tail == null) {
                                                  if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                    if (matchValue$$11[1].tail != null) {
                                                      if (matchValue$$11[1].tail.tail == null) {
                                                        if (matchValue$$11[2].tail != null) {
                                                          if (matchValue$$11[2].tail.tail == null) {
                                                            const activePatternResult58656 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                            if (activePatternResult58656 != null) {
                                                              $target$$44 = 6;
                                                              arg$$16 = matchValue$$11[2].head;
                                                              unaryOp = activePatternResult58656;
                                                            } else {
                                                              $target$$44 = 7;
                                                            }
                                                          } else if (matchValue$$11[2].tail.tail.tail != null) {
                                                            if (matchValue$$11[2].tail.tail.tail.tail == null) {
                                                              $target$$44 = 5;
                                                              arr$$3 = matchValue$$11[2].head;
                                                              elemTy$$4 = matchValue$$11[1].head;
                                                              idx1$$5 = matchValue$$11[2].tail.head;
                                                              v$$10 = matchValue$$11[2].tail.tail.head;
                                                            } else {
                                                              $target$$44 = 7;
                                                            }
                                                          } else {
                                                            $target$$44 = 7;
                                                          }
                                                        } else {
                                                          $target$$44 = 7;
                                                        }
                                                      } else {
                                                        const activePatternResult58657 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                        if (activePatternResult58657 != null) {
                                                          if (matchValue$$11[2].tail != null) {
                                                            if (matchValue$$11[2].tail.tail == null) {
                                                              $target$$44 = 6;
                                                              arg$$16 = matchValue$$11[2].head;
                                                              unaryOp = activePatternResult58657;
                                                            } else {
                                                              $target$$44 = 7;
                                                            }
                                                          } else {
                                                            $target$$44 = 7;
                                                          }
                                                        } else {
                                                          $target$$44 = 7;
                                                        }
                                                      }
                                                    } else {
                                                      const activePatternResult58658 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                      if (activePatternResult58658 != null) {
                                                        if (matchValue$$11[2].tail != null) {
                                                          if (matchValue$$11[2].tail.tail == null) {
                                                            $target$$44 = 6;
                                                            arg$$16 = matchValue$$11[2].head;
                                                            unaryOp = activePatternResult58658;
                                                          } else {
                                                            $target$$44 = 7;
                                                          }
                                                        } else {
                                                          $target$$44 = 7;
                                                        }
                                                      } else {
                                                        $target$$44 = 7;
                                                      }
                                                    }
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                } else {
                                                  const activePatternResult58659 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                  if (activePatternResult58659 != null) {
                                                    if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                      if (matchValue$$11[2].tail != null) {
                                                        if (matchValue$$11[2].tail.tail == null) {
                                                          $target$$44 = 6;
                                                          arg$$16 = matchValue$$11[2].head;
                                                          unaryOp = activePatternResult58659;
                                                        } else {
                                                          $target$$44 = 7;
                                                        }
                                                      } else {
                                                        $target$$44 = 7;
                                                      }
                                                    } else {
                                                      $target$$44 = 7;
                                                    }
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                }
                                              } else {
                                                const activePatternResult58660 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                if (activePatternResult58660 != null) {
                                                  if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                    if (matchValue$$11[2].tail != null) {
                                                      if (matchValue$$11[2].tail.tail == null) {
                                                        $target$$44 = 6;
                                                        arg$$16 = matchValue$$11[2].head;
                                                        unaryOp = activePatternResult58660;
                                                      } else {
                                                        $target$$44 = 7;
                                                      }
                                                    } else {
                                                      $target$$44 = 7;
                                                    }
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              }
                                            } else {
                                              const activePatternResult58661 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                              if (activePatternResult58661 != null) {
                                                if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                  if (matchValue$$11[2].tail != null) {
                                                    if (matchValue$$11[2].tail.tail == null) {
                                                      $target$$44 = 6;
                                                      arg$$16 = matchValue$$11[2].head;
                                                      unaryOp = activePatternResult58661;
                                                    } else {
                                                      $target$$44 = 7;
                                                    }
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            }
                                          } else {
                                            const activePatternResult58662 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                            if (activePatternResult58662 != null) {
                                              if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                if (matchValue$$11[2].tail != null) {
                                                  if (matchValue$$11[2].tail.tail == null) {
                                                    $target$$44 = 6;
                                                    arg$$16 = matchValue$$11[2].head;
                                                    unaryOp = activePatternResult58662;
                                                  } else {
                                                    $target$$44 = 7;
                                                  }
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            } else {
                                              $target$$44 = 7;
                                            }
                                          }
                                        } else {
                                          const activePatternResult58663 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                          if (activePatternResult58663 != null) {
                                            if (matchValue$$11[0].fields[0].tail.tail == null) {
                                              if (matchValue$$11[2].tail != null) {
                                                if (matchValue$$11[2].tail.tail == null) {
                                                  $target$$44 = 6;
                                                  arg$$16 = matchValue$$11[2].head;
                                                  unaryOp = activePatternResult58663;
                                                } else {
                                                  $target$$44 = 7;
                                                }
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            } else {
                                              $target$$44 = 7;
                                            }
                                          } else {
                                            $target$$44 = 7;
                                          }
                                        }
                                      } else {
                                        const activePatternResult58664 = FSharpExprConvert$$$$007CILUnaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                        if (activePatternResult58664 != null) {
                                          if (matchValue$$11[0].fields[0].tail.tail == null) {
                                            if (matchValue$$11[2].tail != null) {
                                              if (matchValue$$11[2].tail.tail == null) {
                                                $target$$44 = 6;
                                                arg$$16 = matchValue$$11[2].head;
                                                unaryOp = activePatternResult58664;
                                              } else {
                                                $target$$44 = 7;
                                              }
                                            } else {
                                              $target$$44 = 7;
                                            }
                                          } else {
                                            $target$$44 = 7;
                                          }
                                        } else {
                                          $target$$44 = 7;
                                        }
                                      }
                                    } else {
                                      $target$$44 = 7;
                                    }
                                  } else {
                                    $target$$44 = 7;
                                  }

                                  switch ($target$$44) {
                                    case 0:
                                      {
                                        return new E(32, "DefaultValue", FSharpExprConvert$$$ConvType(cenv$$15, ty$$18));
                                      }

                                    case 1:
                                      {
                                        const elemTy = (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), arg$$15);
                                        const nullVal = (0, _TastOps.mkNull)(m$$13, elemTy);
                                        const op$$8 = (0, _TastOps.mkCallNotEqualsOperator)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), m$$13, elemTy, arg$$15, nullVal);
                                        cenv$$15 = cenv$$15;
                                        env$$17 = env$$17;
                                        expr$$7 = op$$8;
                                        continue FSharpExprConvert$$$ConvExprPrim;
                                      }

                                    case 2:
                                      {
                                        const arrayTy = (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), arr$$1);
                                        const elemTy$$1 = (0, _TastOps.destArrayTy)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), arrayTy);
                                        const op$$9 = (0, _TastOps.mkCallArrayLength)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), m$$13, elemTy$$1, arr$$1);
                                        cenv$$15 = cenv$$15;
                                        env$$17 = env$$17;
                                        expr$$7 = op$$9;
                                        continue FSharpExprConvert$$$ConvExprPrim;
                                      }

                                    case 3:
                                      {
                                        return new E(27, "NewArray", FSharpExprConvert$$$ConvType(cenv$$15, elemTy$$2), FSharpExprConvert$$$ConvExprs(cenv$$15, env$$17, xa));
                                      }

                                    case 4:
                                      {
                                        const op$$10 = (0, _TastOps.mkCallArrayGet)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), m$$13, elemTy$$3, arr$$2, idx1$$4);
                                        cenv$$15 = cenv$$15;
                                        env$$17 = env$$17;
                                        expr$$7 = op$$10;
                                        continue FSharpExprConvert$$$ConvExprPrim;
                                      }

                                    case 5:
                                      {
                                        const op$$11 = (0, _TastOps.mkCallArraySet)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), m$$13, elemTy$$4, arr$$3, idx1$$5, v$$10);
                                        cenv$$15 = cenv$$15;
                                        env$$17 = env$$17;
                                        expr$$7 = op$$11;
                                        continue FSharpExprConvert$$$ConvExprPrim;
                                      }

                                    case 6:
                                      {
                                        const ty$$19 = (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), arg$$16);
                                        const op$$12 = unaryOp((0, _Symbols.SymbolEnv$$get_g)(cenv$$15))(m$$13)(ty$$19)(arg$$16);
                                        cenv$$15 = cenv$$15;
                                        env$$17 = env$$17;
                                        expr$$7 = op$$12;
                                        continue FSharpExprConvert$$$ConvExprPrim;
                                      }

                                    case 7:
                                      {
                                        var $target$$45, arg1, arg2, binaryOp;

                                        if (matchValue$$11[0].tag === 22) {
                                          if (matchValue$$11[0].fields[0].tail != null) {
                                            const activePatternResult58635 = FSharpExprConvert$$$$007CILBinaryOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                            if (activePatternResult58635 != null) {
                                              if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                if (matchValue$$11[2].tail != null) {
                                                  if (matchValue$$11[2].tail.tail != null) {
                                                    if (matchValue$$11[2].tail.tail.tail == null) {
                                                      $target$$45 = 0;
                                                      arg1 = matchValue$$11[2].head;
                                                      arg2 = matchValue$$11[2].tail.head;
                                                      binaryOp = activePatternResult58635;
                                                    } else {
                                                      $target$$45 = 1;
                                                    }
                                                  } else {
                                                    $target$$45 = 1;
                                                  }
                                                } else {
                                                  $target$$45 = 1;
                                                }
                                              } else {
                                                $target$$45 = 1;
                                              }
                                            } else {
                                              $target$$45 = 1;
                                            }
                                          } else {
                                            $target$$45 = 1;
                                          }
                                        } else {
                                          $target$$45 = 1;
                                        }

                                        switch ($target$$45) {
                                          case 0:
                                            {
                                              const ty$$20 = (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), arg1);
                                              const op$$13 = binaryOp((0, _Symbols.SymbolEnv$$get_g)(cenv$$15))(m$$13)(ty$$20)(arg1)(arg2);
                                              cenv$$15 = cenv$$15;
                                              env$$17 = env$$17;
                                              expr$$7 = op$$13;
                                              continue FSharpExprConvert$$$ConvExprPrim;
                                            }

                                          case 1:
                                            {
                                              var $target$$46, arg$$17, convertOp1, convertOp2;

                                              if (matchValue$$11[0].tag === 22) {
                                                if (matchValue$$11[0].fields[0].tail != null) {
                                                  const activePatternResult58631 = FSharpExprConvert$$$$007CILConvertOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                  if (activePatternResult58631 != null) {
                                                    if (matchValue$$11[0].fields[0].tail.tail != null) {
                                                      const activePatternResult58633 = FSharpExprConvert$$$$007CILConvertOp$007C_$007C(matchValue$$11[0].fields[0].tail.head);

                                                      if (activePatternResult58633 != null) {
                                                        if (matchValue$$11[0].fields[0].tail.tail.tail == null) {
                                                          if (matchValue$$11[2].tail != null) {
                                                            if (matchValue$$11[2].tail.tail == null) {
                                                              $target$$46 = 0;
                                                              arg$$17 = matchValue$$11[2].head;
                                                              convertOp1 = activePatternResult58631;
                                                              convertOp2 = activePatternResult58633;
                                                            } else {
                                                              $target$$46 = 1;
                                                            }
                                                          } else {
                                                            $target$$46 = 1;
                                                          }
                                                        } else {
                                                          $target$$46 = 1;
                                                        }
                                                      } else {
                                                        $target$$46 = 1;
                                                      }
                                                    } else {
                                                      $target$$46 = 1;
                                                    }
                                                  } else {
                                                    $target$$46 = 1;
                                                  }
                                                } else {
                                                  $target$$46 = 1;
                                                }
                                              } else {
                                                $target$$46 = 1;
                                              }

                                              switch ($target$$46) {
                                                case 0:
                                                  {
                                                    const ty1 = (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), arg$$17);
                                                    const op1 = convertOp1((0, _Symbols.SymbolEnv$$get_g)(cenv$$15))(m$$13)(ty1)(arg$$17);
                                                    const ty2 = (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), op1);
                                                    const op2 = convertOp2((0, _Symbols.SymbolEnv$$get_g)(cenv$$15))(m$$13)(ty2)(op1);
                                                    cenv$$15 = cenv$$15;
                                                    env$$17 = env$$17;
                                                    expr$$7 = op2;
                                                    continue FSharpExprConvert$$$ConvExprPrim;
                                                  }

                                                case 1:
                                                  {
                                                    var $target$$47, arg$$18, convertOp, tcref$$3;

                                                    if (matchValue$$11[0].tag === 22) {
                                                      if (matchValue$$11[0].fields[0].tail != null) {
                                                        const activePatternResult58629 = FSharpExprConvert$$$$007CILConvertOp$007C_$007C(matchValue$$11[0].fields[0].head);

                                                        if (activePatternResult58629 != null) {
                                                          if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                            if (matchValue$$11[0].fields[1].tail != null) {
                                                              if (matchValue$$11[0].fields[1].head.tag === 1) {
                                                                if (matchValue$$11[0].fields[1].tail.tail == null) {
                                                                  if (matchValue$$11[2].tail != null) {
                                                                    if (matchValue$$11[2].tail.tail == null) {
                                                                      $target$$47 = 0;
                                                                      arg$$18 = matchValue$$11[2].head;
                                                                      convertOp = activePatternResult58629;
                                                                      tcref$$3 = matchValue$$11[0].fields[1].head.fields[0];
                                                                    } else {
                                                                      $target$$47 = 1;
                                                                    }
                                                                  } else {
                                                                    $target$$47 = 1;
                                                                  }
                                                                } else {
                                                                  $target$$47 = 1;
                                                                }
                                                              } else {
                                                                $target$$47 = 1;
                                                              }
                                                            } else {
                                                              $target$$47 = 1;
                                                            }
                                                          } else {
                                                            $target$$47 = 1;
                                                          }
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
                                                          const ty$$21 = (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), arg$$18);
                                                          const op$$14 = (0, _TastOps.tyconRefEq)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), tcref$$3, (0, _TcGlobals.TcGlobals$$get_char_tcr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15))) ? (0, _TastOps.mkCallToCharOperator)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), m$$13, ty$$21, arg$$18) : convertOp((0, _Symbols.SymbolEnv$$get_g)(cenv$$15))(m$$13)(ty$$21)(arg$$18);
                                                          cenv$$15 = cenv$$15;
                                                          env$$17 = env$$17;
                                                          expr$$7 = op$$14;
                                                          continue FSharpExprConvert$$$ConvExprPrim;
                                                        }

                                                      case 1:
                                                        {
                                                          var $target$$48, arg1$$1, args$$5, il, tyargs$$23, args$$6, tcref$$4, tyargs$$24, _tinst, arg$$19, obj$$7, rfref$$10, _tinst$$1, arg$$20, rfref$$11, i, obj$$8, tcref$$5, e2$$4, i$$1, obj$$9, tcref$$6, srcTy, tgtTy, x$$15, toTy, vref$$14, e$$15, vref$$15, e$$16, vref$$16, vref$$17, ty$$22, xa$$1, body$$10, test, arr$$4, body$$11, dir, elemTy$$5, lim0, lm;

                                                          if (matchValue$$11[0].tag === 22) {
                                                            if (matchValue$$11[0].fields[0].tail != null) {
                                                              if (matchValue$$11[0].fields[0].head.tag === 54) {
                                                                if (matchValue$$11[0].fields[0].tail.tail == null) {
                                                                  if (matchValue$$11[2].tail != null) {
                                                                    if (matchValue$$11[2].tail.tail == null) {
                                                                      $target$$48 = 0;
                                                                      arg1$$1 = matchValue$$11[2].head;
                                                                    } else {
                                                                      $target$$48 = 1;
                                                                      args$$5 = matchValue$$11[2];
                                                                      il = matchValue$$11[0].fields[0];
                                                                      tyargs$$23 = matchValue$$11[1];
                                                                    }
                                                                  } else {
                                                                    $target$$48 = 1;
                                                                    args$$5 = matchValue$$11[2];
                                                                    il = matchValue$$11[0].fields[0];
                                                                    tyargs$$23 = matchValue$$11[1];
                                                                  }
                                                                } else {
                                                                  $target$$48 = 1;
                                                                  args$$5 = matchValue$$11[2];
                                                                  il = matchValue$$11[0].fields[0];
                                                                  tyargs$$23 = matchValue$$11[1];
                                                                }
                                                              } else {
                                                                $target$$48 = 1;
                                                                args$$5 = matchValue$$11[2];
                                                                il = matchValue$$11[0].fields[0];
                                                                tyargs$$23 = matchValue$$11[1];
                                                              }
                                                            } else {
                                                              $target$$48 = 1;
                                                              args$$5 = matchValue$$11[2];
                                                              il = matchValue$$11[0].fields[0];
                                                              tyargs$$23 = matchValue$$11[1];
                                                            }
                                                          } else if (matchValue$$11[0].tag === 1) {
                                                            $target$$48 = 2;
                                                            args$$6 = matchValue$$11[2];
                                                            tcref$$4 = matchValue$$11[0].fields[0];
                                                            tyargs$$24 = matchValue$$11[1];
                                                          } else if (matchValue$$11[0].tag === 11) {
                                                            if (matchValue$$11[2].tail != null) {
                                                              if (matchValue$$11[2].tail.tail == null) {
                                                                $target$$48 = 4;
                                                                _tinst$$1 = matchValue$$11[1];
                                                                arg$$20 = matchValue$$11[2].head;
                                                                rfref$$11 = matchValue$$11[0].fields[0];
                                                              } else if (matchValue$$11[2].tail.tail.tail == null) {
                                                                $target$$48 = 3;
                                                                _tinst = matchValue$$11[1];
                                                                arg$$19 = matchValue$$11[2].tail.head;
                                                                obj$$7 = matchValue$$11[2].head;
                                                                rfref$$10 = matchValue$$11[0].fields[0];
                                                              } else {
                                                                $target$$48 = 16;
                                                              }
                                                            } else {
                                                              $target$$48 = 16;
                                                            }
                                                          } else if (matchValue$$11[0].tag === 19) {
                                                            if (matchValue$$11[1].tail == null) {
                                                              if (matchValue$$11[2].tail != null) {
                                                                if (matchValue$$11[2].tail.tail == null) {
                                                                  $target$$48 = 5;
                                                                  i = matchValue$$11[0].fields[1];
                                                                  obj$$8 = matchValue$$11[2].head;
                                                                  tcref$$5 = matchValue$$11[0].fields[0];
                                                                } else {
                                                                  $target$$48 = 16;
                                                                }
                                                              } else {
                                                                $target$$48 = 16;
                                                              }
                                                            } else {
                                                              $target$$48 = 16;
                                                            }
                                                          } else if (matchValue$$11[0].tag === 20) {
                                                            if (matchValue$$11[1].tail == null) {
                                                              if (matchValue$$11[2].tail != null) {
                                                                if (matchValue$$11[2].tail.tail != null) {
                                                                  if (matchValue$$11[2].tail.tail.tail == null) {
                                                                    $target$$48 = 6;
                                                                    e2$$4 = matchValue$$11[2].tail.head;
                                                                    i$$1 = matchValue$$11[0].fields[1];
                                                                    obj$$9 = matchValue$$11[2].head;
                                                                    tcref$$6 = matchValue$$11[0].fields[0];
                                                                  } else {
                                                                    $target$$48 = 16;
                                                                  }
                                                                } else {
                                                                  $target$$48 = 16;
                                                                }
                                                              } else {
                                                                $target$$48 = 16;
                                                              }
                                                            } else {
                                                              $target$$48 = 16;
                                                            }
                                                          } else if (matchValue$$11[0].tag === 24) {
                                                            if (matchValue$$11[1].tail != null) {
                                                              if (matchValue$$11[1].tail.tail != null) {
                                                                if (matchValue$$11[1].tail.tail.tail == null) {
                                                                  if (matchValue$$11[2].tail != null) {
                                                                    if (matchValue$$11[2].tail.tail == null) {
                                                                      $target$$48 = 7;
                                                                      srcTy = matchValue$$11[1].tail.head;
                                                                      tgtTy = matchValue$$11[1].head;
                                                                      x$$15 = matchValue$$11[2].head;
                                                                    } else {
                                                                      $target$$48 = 16;
                                                                    }
                                                                  } else {
                                                                    $target$$48 = 16;
                                                                  }
                                                                } else {
                                                                  $target$$48 = 16;
                                                                }
                                                              } else {
                                                                $target$$48 = 16;
                                                              }
                                                            } else {
                                                              $target$$48 = 16;
                                                            }
                                                          } else if (matchValue$$11[0].tag === 25) {
                                                            if (matchValue$$11[1].tail != null) {
                                                              if (matchValue$$11[1].tail.tail == null) {
                                                                if (matchValue$$11[2].tail == null) {
                                                                  $target$$48 = 8;
                                                                  toTy = matchValue$$11[1].head;
                                                                } else {
                                                                  $target$$48 = 16;
                                                                }
                                                              } else {
                                                                $target$$48 = 16;
                                                              }
                                                            } else {
                                                              $target$$48 = 16;
                                                            }
                                                          } else if (matchValue$$11[0].tag === 30) {
                                                            if (matchValue$$11[0].fields[0].tag === 3) {
                                                              if (matchValue$$11[1].tail == null) {
                                                                if (matchValue$$11[2].tail != null) {
                                                                  if (matchValue$$11[2].tail.tail == null) {
                                                                    $target$$48 = 10;
                                                                    e$$15 = matchValue$$11[2].head;
                                                                    vref$$15 = matchValue$$11[0].fields[1];
                                                                  } else {
                                                                    $target$$48 = 16;
                                                                  }
                                                                } else {
                                                                  $target$$48 = 16;
                                                                }
                                                              } else {
                                                                $target$$48 = 16;
                                                              }
                                                            } else if (matchValue$$11[0].fields[0].tag === 2) {
                                                              if (matchValue$$11[1].tail == null) {
                                                                if (matchValue$$11[2].tail != null) {
                                                                  if (matchValue$$11[2].tail.tail == null) {
                                                                    $target$$48 = 11;
                                                                    e$$16 = matchValue$$11[2].head;
                                                                    vref$$16 = matchValue$$11[0].fields[1];
                                                                  } else {
                                                                    $target$$48 = 16;
                                                                  }
                                                                } else {
                                                                  $target$$48 = 16;
                                                                }
                                                              } else {
                                                                $target$$48 = 16;
                                                              }
                                                            } else if (matchValue$$11[0].fields[0].tag === 1) {
                                                              if (matchValue$$11[1].tail == null) {
                                                                if (matchValue$$11[2].tail == null) {
                                                                  $target$$48 = 12;
                                                                  vref$$17 = matchValue$$11[0].fields[1];
                                                                } else {
                                                                  $target$$48 = 16;
                                                                }
                                                              } else {
                                                                $target$$48 = 16;
                                                              }
                                                            } else if (matchValue$$11[1].tail == null) {
                                                              if (matchValue$$11[2].tail == null) {
                                                                $target$$48 = 9;
                                                                vref$$14 = matchValue$$11[0].fields[1];
                                                              } else {
                                                                $target$$48 = 16;
                                                              }
                                                            } else {
                                                              $target$$48 = 16;
                                                            }
                                                          } else if (matchValue$$11[0].tag === 3) {
                                                            if (matchValue$$11[1].tail != null) {
                                                              if (matchValue$$11[1].tail.tail == null) {
                                                                $target$$48 = 13;
                                                                ty$$22 = matchValue$$11[1].head;
                                                                xa$$1 = matchValue$$11[2];
                                                              } else {
                                                                $target$$48 = 16;
                                                              }
                                                            } else {
                                                              $target$$48 = 16;
                                                            }
                                                          } else if (matchValue$$11[0].tag === 6) {
                                                            if (matchValue$$11[1].tail == null) {
                                                              if (matchValue$$11[2].tail != null) {
                                                                if (matchValue$$11[2].head.tag === 3) {
                                                                  if (matchValue$$11[2].head.fields[3].tail != null) {
                                                                    if (matchValue$$11[2].head.fields[3].tail.tail == null) {
                                                                      if (matchValue$$11[2].tail.tail != null) {
                                                                        if (matchValue$$11[2].tail.head.tag === 3) {
                                                                          if (matchValue$$11[2].tail.head.fields[3].tail != null) {
                                                                            if (matchValue$$11[2].tail.head.fields[3].tail.tail == null) {
                                                                              if (matchValue$$11[2].tail.tail.tail == null) {
                                                                                $target$$48 = 14;
                                                                                body$$10 = matchValue$$11[2].tail.head.fields[4];
                                                                                test = matchValue$$11[2].head.fields[4];
                                                                              } else {
                                                                                $target$$48 = 16;
                                                                              }
                                                                            } else {
                                                                              $target$$48 = 16;
                                                                            }
                                                                          } else {
                                                                            $target$$48 = 16;
                                                                          }
                                                                        } else {
                                                                          $target$$48 = 16;
                                                                        }
                                                                      } else {
                                                                        $target$$48 = 16;
                                                                      }
                                                                    } else {
                                                                      $target$$48 = 16;
                                                                    }
                                                                  } else {
                                                                    $target$$48 = 16;
                                                                  }
                                                                } else {
                                                                  $target$$48 = 16;
                                                                }
                                                              } else {
                                                                $target$$48 = 16;
                                                              }
                                                            } else {
                                                              $target$$48 = 16;
                                                            }
                                                          } else if (matchValue$$11[0].tag === 7) {
                                                            if (matchValue$$11[1].tail == null) {
                                                              if (matchValue$$11[2].tail != null) {
                                                                if (matchValue$$11[2].head.tag === 3) {
                                                                  if (matchValue$$11[2].head.fields[3].tail != null) {
                                                                    if (matchValue$$11[2].head.fields[3].tail.tail == null) {
                                                                      if (matchValue$$11[2].tail.tail != null) {
                                                                        if (matchValue$$11[2].tail.head.tag === 3) {
                                                                          if (matchValue$$11[2].tail.head.fields[3].tail != null) {
                                                                            if (matchValue$$11[2].tail.head.fields[3].tail.tail == null) {
                                                                              if ((0, _QuotationTranslator.$007CSimpleArrayLoopUpperBound$007C_$007C)(matchValue$$11[2].tail.head.fields[4]) != null) {
                                                                                if (matchValue$$11[2].tail.tail.tail != null) {
                                                                                  const activePatternResult58627 = (0, _QuotationTranslator.$007CSimpleArrayLoopBody$007C_$007C)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), matchValue$$11[2].tail.tail.head);

                                                                                  if (activePatternResult58627 != null) {
                                                                                    if (matchValue$$11[2].tail.tail.tail.tail == null) {
                                                                                      $target$$48 = 15;
                                                                                      arr$$4 = activePatternResult58627[0];
                                                                                      body$$11 = activePatternResult58627[2];
                                                                                      dir = matchValue$$11[0].fields[1];
                                                                                      elemTy$$5 = activePatternResult58627[1];
                                                                                      lim0 = matchValue$$11[2].head.fields[4];
                                                                                      lm = matchValue$$11[2].tail.head.fields[5];
                                                                                    } else {
                                                                                      $target$$48 = 16;
                                                                                    }
                                                                                  } else {
                                                                                    $target$$48 = 16;
                                                                                  }
                                                                                } else {
                                                                                  $target$$48 = 16;
                                                                                }
                                                                              } else {
                                                                                $target$$48 = 16;
                                                                              }
                                                                            } else {
                                                                              $target$$48 = 16;
                                                                            }
                                                                          } else {
                                                                            $target$$48 = 16;
                                                                          }
                                                                        } else {
                                                                          $target$$48 = 16;
                                                                        }
                                                                      } else {
                                                                        $target$$48 = 16;
                                                                      }
                                                                    } else {
                                                                      $target$$48 = 16;
                                                                    }
                                                                  } else {
                                                                    $target$$48 = 16;
                                                                  }
                                                                } else {
                                                                  $target$$48 = 16;
                                                                }
                                                              } else {
                                                                $target$$48 = 16;
                                                              }
                                                            } else {
                                                              $target$$48 = 16;
                                                            }
                                                          } else {
                                                            $target$$48 = 16;
                                                          }

                                                          switch ($target$$48) {
                                                            case 0:
                                                              {
                                                                const raiseExpr = (0, _TastOps.mkCallRaise)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), m$$13, (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), expr$$10), arg1$$1);
                                                                cenv$$15 = cenv$$15;
                                                                env$$17 = env$$17;
                                                                expr$$7 = raiseExpr;
                                                                continue FSharpExprConvert$$$ConvExprPrim;
                                                              }

                                                            case 1:
                                                              {
                                                                return new E(43, "ILAsm", (0, _String.toText)((0, _String.printf)("%+A"))(il), FSharpExprConvert$$$ConvTypes(cenv$$15, tyargs$$23), FSharpExprConvert$$$ConvExprs(cenv$$15, env$$17, args$$5));
                                                              }

                                                            case 2:
                                                              {
                                                                return new E(14, "NewRecord", FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAppTy)(tcref$$4, tyargs$$24)), FSharpExprConvert$$$ConvExprs(cenv$$15, env$$17, args$$6));
                                                              }

                                                            case 3:
                                                              {
                                                                const objR$$3 = FSharpExprConvert$$$ConvLValueExpr(cenv$$15, env$$17, obj$$7);
                                                                const argR$$2 = FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, arg$$19);
                                                                const typR$$11 = FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAppTy)((0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$10), tyargs$$16));
                                                                const projR$$4 = FSharpExprConvert$$$ConvRecdFieldRef(cenv$$15, rfref$$10);
                                                                return new E(17, "FSharpFieldSet", objR$$3, typR$$11, projR$$4, argR$$2);
                                                              }

                                                            case 4:
                                                              {
                                                                const argR$$3 = FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, arg$$20);
                                                                const typR$$12 = FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAppTy)((0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$11), tyargs$$16));
                                                                const projR$$5 = FSharpExprConvert$$$ConvRecdFieldRef(cenv$$15, rfref$$11);
                                                                return new E(17, "FSharpFieldSet", null, typR$$12, projR$$5, argR$$3);
                                                              }

                                                            case 5:
                                                              {
                                                                const exnc = (0, _TastOps.stripExnEqns)(tcref$$5);
                                                                const fspec$$6 = (0, _List.item)(i, (0, _tast.Entity$$get_TrueInstanceFieldsAsList)(exnc));
                                                                const fref = (0, _tast.mkRecdFieldRef)(tcref$$5, (0, _tast.RecdField$$get_Name)(fspec$$6));
                                                                const typR$$13 = FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAppTy)(tcref$$5, tyargs$$16));
                                                                const objR$$4 = FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, (0, _TastOps.mkCoerceExpr)(obj$$8, (0, _TastOps.mkAppTy)(tcref$$5, (0, _Types.L)()), m$$13, (0, _TcGlobals.TcGlobals$$get_exn_ty)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15))));
                                                                return new E(16, "FSharpFieldGet", objR$$4, typR$$13, FSharpExprConvert$$$ConvRecdFieldRef(cenv$$15, fref));
                                                              }

                                                            case 6:
                                                              {
                                                                const exnc$$1 = (0, _TastOps.stripExnEqns)(tcref$$6);
                                                                const fspec$$7 = (0, _List.item)(i$$1, (0, _tast.Entity$$get_TrueInstanceFieldsAsList)(exnc$$1));
                                                                const fref$$1 = (0, _tast.mkRecdFieldRef)(tcref$$6, (0, _tast.RecdField$$get_Name)(fspec$$7));
                                                                const typR$$14 = FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAppTy)(tcref$$6, tyargs$$16));
                                                                const objR$$5 = FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, (0, _TastOps.mkCoerceExpr)(obj$$9, (0, _TastOps.mkAppTy)(tcref$$6, (0, _Types.L)()), m$$13, (0, _TcGlobals.TcGlobals$$get_exn_ty)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15))));
                                                                return new E(17, "FSharpFieldSet", objR$$5, typR$$14, FSharpExprConvert$$$ConvRecdFieldRef(cenv$$15, fref$$1), FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, e2$$4));
                                                              }

                                                            case 7:
                                                              {
                                                                if ((0, _TastOps.typeEquiv)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), tgtTy, srcTy)) {
                                                                  cenv$$15 = cenv$$15;
                                                                  env$$17 = env$$17;
                                                                  expr$$7 = x$$15;
                                                                  continue FSharpExprConvert$$$ConvExprPrim;
                                                                } else {
                                                                  return new E(26, "Coerce", FSharpExprConvert$$$ConvType(cenv$$15, tgtTy), FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, x$$15));
                                                                }
                                                              }

                                                            case 8:
                                                              {
                                                                const $var$$49 = cenv$$15;
                                                                env$$17 = env$$17;
                                                                expr$$7 = (0, _TastOps.mkReraiseLibCall)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), toTy, m$$13);
                                                                cenv$$15 = $var$$49;
                                                                continue FSharpExprConvert$$$ConvExprPrim;
                                                              }

                                                            case 9:
                                                              {
                                                                return new E(34, "AddressOf", FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, (0, _TastOps.exprForValRef)(m$$13, vref$$14)));
                                                              }

                                                            case 10:
                                                              {
                                                                return new E(29, "AddressSet", FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, (0, _TastOps.exprForValRef)(m$$13, vref$$15)), FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, e$$15));
                                                              }

                                                            case 11:
                                                              {
                                                                return new E(30, "ValueSet", (0, _Symbols.FSharpMemberOrFunctionOrValue$$$$002Ector$$Z3519D4A3)(cenv$$15, vref$$16), FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, e$$16));
                                                              }

                                                            case 12:
                                                              {
                                                                return FSharpExprConvert$$$ConvValRef(cenv$$15, env$$17, m$$13, vref$$17);
                                                              }

                                                            case 13:
                                                              {
                                                                return new E(27, "NewArray", FSharpExprConvert$$$ConvType(cenv$$15, ty$$22), FSharpExprConvert$$$ConvExprs(cenv$$15, env$$17, xa$$1));
                                                              }

                                                            case 14:
                                                              {
                                                                return new E(37, "WhileLoop", FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, test), FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, body$$10));
                                                              }

                                                            case 15:
                                                              {
                                                                let lim1;
                                                                const len = (0, _TastOps.mkCallArrayLength)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), lm, elemTy$$5, arr$$4);
                                                                lim1 = (0, _TastOps.mkCallSubtractionOperator)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), lm, (0, _TcGlobals.TcGlobals$$get_int32_ty)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15)), len, (0, _TastOps.mkOne)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), lm));
                                                                return new E(36, "FastIntegerForLoop", FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, lim0), FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, lim1), FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, body$$11), !(0, _Util.equals)(dir, new _tast.ForLoopStyle(1, "FSharpForLoopDown")));
                                                              }

                                                            case 16:
                                                              {
                                                                var $target$$50, body$$12, dir$$1, lim0$$1, lim1$$1, lm$$1, _isProp, _tys, callArgs$$1, enclTypeArgs$$4, ilMethRef, isNewObj$$1, methTypeArgs, valUseFlags, _resty, e1$$5, e2$$5, _resty$$1, e1$$6, ef, eh, vf, vh, bytes, arr$$5, e$$17, arg1$$2, tyargs$$25, tycr, _colution, _rty, argtys, memFlags, nm, tys$$1, e$$18, readonly, ty$$23;

                                                                if (matchValue$$11[0].tag === 7) {
                                                                  if (matchValue$$11[1].tail == null) {
                                                                    if (matchValue$$11[2].tail != null) {
                                                                      if (matchValue$$11[2].head.tag === 3) {
                                                                        if (matchValue$$11[2].head.fields[3].tail != null) {
                                                                          if (matchValue$$11[2].head.fields[3].tail.tail == null) {
                                                                            if (matchValue$$11[2].tail.tail != null) {
                                                                              if (matchValue$$11[2].tail.head.tag === 3) {
                                                                                if (matchValue$$11[2].tail.head.fields[3].tail != null) {
                                                                                  if (matchValue$$11[2].tail.head.fields[3].tail.tail == null) {
                                                                                    if (matchValue$$11[2].tail.tail.tail != null) {
                                                                                      if (matchValue$$11[2].tail.tail.tail.tail == null) {
                                                                                        $target$$50 = 0;
                                                                                        body$$12 = matchValue$$11[2].tail.tail.head;
                                                                                        dir$$1 = matchValue$$11[0].fields[1];
                                                                                        lim0$$1 = matchValue$$11[2].head.fields[4];
                                                                                        lim1$$1 = matchValue$$11[2].tail.head.fields[4];
                                                                                        lm$$1 = matchValue$$11[2].tail.head.fields[5];
                                                                                      } else {
                                                                                        $target$$50 = 10;
                                                                                      }
                                                                                    } else {
                                                                                      $target$$50 = 10;
                                                                                    }
                                                                                  } else {
                                                                                    $target$$50 = 10;
                                                                                  }
                                                                                } else {
                                                                                  $target$$50 = 10;
                                                                                }
                                                                              } else {
                                                                                $target$$50 = 10;
                                                                              }
                                                                            } else {
                                                                              $target$$50 = 10;
                                                                            }
                                                                          } else {
                                                                            $target$$50 = 10;
                                                                          }
                                                                        } else {
                                                                          $target$$50 = 10;
                                                                        }
                                                                      } else {
                                                                        $target$$50 = 10;
                                                                      }
                                                                    } else {
                                                                      $target$$50 = 10;
                                                                    }
                                                                  } else {
                                                                    $target$$50 = 10;
                                                                  }
                                                                } else if (matchValue$$11[0].tag === 31) {
                                                                  if (matchValue$$11[1].tail == null) {
                                                                    $target$$50 = 1;
                                                                    _isProp = matchValue$$11[0].fields[5];
                                                                    _tys = matchValue$$11[0].fields[10];
                                                                    callArgs$$1 = matchValue$$11[2];
                                                                    enclTypeArgs$$4 = matchValue$$11[0].fields[8];
                                                                    ilMethRef = matchValue$$11[0].fields[7];
                                                                    isNewObj$$1 = matchValue$$11[0].fields[3];
                                                                    methTypeArgs = matchValue$$11[0].fields[9];
                                                                    valUseFlags = matchValue$$11[0].fields[4];
                                                                  } else {
                                                                    $target$$50 = 10;
                                                                  }
                                                                } else if (matchValue$$11[0].tag === 9) {
                                                                  if (matchValue$$11[1].tail != null) {
                                                                    if (matchValue$$11[1].tail.tail == null) {
                                                                      if (matchValue$$11[2].tail != null) {
                                                                        if (matchValue$$11[2].head.tag === 3) {
                                                                          if (matchValue$$11[2].head.fields[3].tail != null) {
                                                                            if (matchValue$$11[2].head.fields[3].tail.tail == null) {
                                                                              if (matchValue$$11[2].tail.tail != null) {
                                                                                if (matchValue$$11[2].tail.head.tag === 3) {
                                                                                  if (matchValue$$11[2].tail.head.fields[3].tail != null) {
                                                                                    if (matchValue$$11[2].tail.head.fields[3].tail.tail == null) {
                                                                                      if (matchValue$$11[2].tail.tail.tail == null) {
                                                                                        $target$$50 = 2;
                                                                                        _resty = matchValue$$11[1].head;
                                                                                        e1$$5 = matchValue$$11[2].head.fields[4];
                                                                                        e2$$5 = matchValue$$11[2].tail.head.fields[4];
                                                                                      } else {
                                                                                        $target$$50 = 10;
                                                                                      }
                                                                                    } else {
                                                                                      $target$$50 = 10;
                                                                                    }
                                                                                  } else {
                                                                                    $target$$50 = 10;
                                                                                  }
                                                                                } else {
                                                                                  $target$$50 = 10;
                                                                                }
                                                                              } else {
                                                                                $target$$50 = 10;
                                                                              }
                                                                            } else {
                                                                              $target$$50 = 10;
                                                                            }
                                                                          } else {
                                                                            $target$$50 = 10;
                                                                          }
                                                                        } else {
                                                                          $target$$50 = 10;
                                                                        }
                                                                      } else {
                                                                        $target$$50 = 10;
                                                                      }
                                                                    } else {
                                                                      $target$$50 = 10;
                                                                    }
                                                                  } else {
                                                                    $target$$50 = 10;
                                                                  }
                                                                } else if (matchValue$$11[0].tag === 8) {
                                                                  if (matchValue$$11[1].tail != null) {
                                                                    if (matchValue$$11[1].tail.tail == null) {
                                                                      if (matchValue$$11[2].tail != null) {
                                                                        if (matchValue$$11[2].head.tag === 3) {
                                                                          if (matchValue$$11[2].head.fields[3].tail != null) {
                                                                            if (matchValue$$11[2].head.fields[3].tail.tail == null) {
                                                                              if (matchValue$$11[2].tail.tail != null) {
                                                                                if (matchValue$$11[2].tail.head.tag === 3) {
                                                                                  if (matchValue$$11[2].tail.head.fields[3].tail != null) {
                                                                                    if (matchValue$$11[2].tail.head.fields[3].tail.tail == null) {
                                                                                      if (matchValue$$11[2].tail.tail.tail != null) {
                                                                                        if (matchValue$$11[2].tail.tail.head.tag === 3) {
                                                                                          if (matchValue$$11[2].tail.tail.head.fields[3].tail != null) {
                                                                                            if (matchValue$$11[2].tail.tail.head.fields[3].tail.tail == null) {
                                                                                              if (matchValue$$11[2].tail.tail.tail.tail == null) {
                                                                                                $target$$50 = 3;
                                                                                                _resty$$1 = matchValue$$11[1].head;
                                                                                                e1$$6 = matchValue$$11[2].head.fields[4];
                                                                                                ef = matchValue$$11[2].tail.head.fields[4];
                                                                                                eh = matchValue$$11[2].tail.tail.head.fields[4];
                                                                                                vf = matchValue$$11[2].tail.head.fields[3].head;
                                                                                                vh = matchValue$$11[2].tail.tail.head.fields[3].head;
                                                                                              } else {
                                                                                                $target$$50 = 10;
                                                                                              }
                                                                                            } else {
                                                                                              $target$$50 = 10;
                                                                                            }
                                                                                          } else {
                                                                                            $target$$50 = 10;
                                                                                          }
                                                                                        } else {
                                                                                          $target$$50 = 10;
                                                                                        }
                                                                                      } else {
                                                                                        $target$$50 = 10;
                                                                                      }
                                                                                    } else {
                                                                                      $target$$50 = 10;
                                                                                    }
                                                                                  } else {
                                                                                    $target$$50 = 10;
                                                                                  }
                                                                                } else {
                                                                                  $target$$50 = 10;
                                                                                }
                                                                              } else {
                                                                                $target$$50 = 10;
                                                                              }
                                                                            } else {
                                                                              $target$$50 = 10;
                                                                            }
                                                                          } else {
                                                                            $target$$50 = 10;
                                                                          }
                                                                        } else {
                                                                          $target$$50 = 10;
                                                                        }
                                                                      } else {
                                                                        $target$$50 = 10;
                                                                      }
                                                                    } else {
                                                                      $target$$50 = 10;
                                                                    }
                                                                  } else {
                                                                    $target$$50 = 10;
                                                                  }
                                                                } else if (matchValue$$11[0].tag === 4) {
                                                                  if (matchValue$$11[1].tail == null) {
                                                                    if (matchValue$$11[2].tail == null) {
                                                                      $target$$50 = 4;
                                                                      bytes = matchValue$$11[0].fields[0];
                                                                    } else {
                                                                      $target$$50 = 10;
                                                                    }
                                                                  } else {
                                                                    $target$$50 = 10;
                                                                  }
                                                                } else if (matchValue$$11[0].tag === 5) {
                                                                  if (matchValue$$11[1].tail == null) {
                                                                    if (matchValue$$11[2].tail == null) {
                                                                      $target$$50 = 5;
                                                                      arr$$5 = matchValue$$11[0].fields[0];
                                                                    } else {
                                                                      $target$$50 = 10;
                                                                    }
                                                                  } else {
                                                                    $target$$50 = 10;
                                                                  }
                                                                } else if (matchValue$$11[0].tag === 15) {
                                                                  if (matchValue$$11[2].tail != null) {
                                                                    if (matchValue$$11[2].tail.tail == null) {
                                                                      $target$$50 = 6;
                                                                      e$$17 = matchValue$$11[2].head;
                                                                    } else {
                                                                      $target$$50 = 10;
                                                                    }
                                                                  } else {
                                                                    $target$$50 = 10;
                                                                  }
                                                                } else if (matchValue$$11[0].tag === 14) {
                                                                  if (matchValue$$11[2].tail != null) {
                                                                    if (matchValue$$11[2].tail.tail == null) {
                                                                      $target$$50 = 7;
                                                                      arg1$$2 = matchValue$$11[2].head;
                                                                      tyargs$$25 = matchValue$$11[1];
                                                                      tycr = matchValue$$11[0].fields[0];
                                                                    } else {
                                                                      $target$$50 = 10;
                                                                    }
                                                                  } else {
                                                                    $target$$50 = 10;
                                                                  }
                                                                } else if (matchValue$$11[0].tag === 29) {
                                                                  $target$$50 = 8;
                                                                  _colution = matchValue$$11[0].fields[0].fields[5];
                                                                  _rty = matchValue$$11[0].fields[0].fields[4];
                                                                  argtys = matchValue$$11[0].fields[0].fields[3];
                                                                  memFlags = matchValue$$11[0].fields[0].fields[2];
                                                                  nm = matchValue$$11[0].fields[0].fields[1];
                                                                  tys$$1 = matchValue$$11[0].fields[0].fields[0];
                                                                } else if (matchValue$$11[0].tag === 23) {
                                                                  if (matchValue$$11[1].tail != null) {
                                                                    if (matchValue$$11[1].tail.tail == null) {
                                                                      if (matchValue$$11[2].tail != null) {
                                                                        if (matchValue$$11[2].tail.tail == null) {
                                                                          $target$$50 = 9;
                                                                          e$$18 = matchValue$$11[2].head;
                                                                          readonly = matchValue$$11[0].fields[0];
                                                                          ty$$23 = matchValue$$11[1].head;
                                                                        } else {
                                                                          $target$$50 = 10;
                                                                        }
                                                                      } else {
                                                                        $target$$50 = 10;
                                                                      }
                                                                    } else {
                                                                      $target$$50 = 10;
                                                                    }
                                                                  } else {
                                                                    $target$$50 = 10;
                                                                  }
                                                                } else {
                                                                  $target$$50 = 10;
                                                                }

                                                                switch ($target$$50) {
                                                                  case 0:
                                                                    {
                                                                      const lim1$$2 = (0, _Util.equals)(dir$$1, new _tast.ForLoopStyle(2, "CSharpForLoopUp")) ? (0, _TastOps.mkCallSubtractionOperator)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), lm$$1, (0, _TcGlobals.TcGlobals$$get_int32_ty)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15)), lim1$$1, (0, _TastOps.mkOne)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), lm$$1)) : lim1$$1;
                                                                      return new E(36, "FastIntegerForLoop", FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, lim0$$1), FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, lim1$$2), FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, body$$12), !(0, _Util.equals)(dir$$1, new _tast.ForLoopStyle(1, "FSharpForLoopDown")));
                                                                    }

                                                                  case 1:
                                                                    {
                                                                      return FSharpExprConvert$$$ConvILCall(cenv$$15, env$$17, isNewObj$$1, valUseFlags, ilMethRef, enclTypeArgs$$4, methTypeArgs, callArgs$$1, m$$13);
                                                                    }

                                                                  case 2:
                                                                    {
                                                                      return new E(38, "TryFinally", FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, e1$$5), FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, e2$$5));
                                                                    }

                                                                  case 3:
                                                                    {
                                                                      const vfR = FSharpExprConvert$$$ConvVal(cenv$$15, vf);
                                                                      const envf = ExprTranslationImpl$002EExprTranslationEnv$$BindVal$$7D0CFEA5(env$$17, vf);
                                                                      const vhR = FSharpExprConvert$$$ConvVal(cenv$$15, vh);
                                                                      const envh = ExprTranslationImpl$002EExprTranslationEnv$$BindVal$$7D0CFEA5(env$$17, vh);
                                                                      return new E(39, "TryWith", FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, e1$$6), vfR, FSharpExprConvert$$$ConvExpr(cenv$$15, envf, ef), vhR, FSharpExprConvert$$$ConvExpr(cenv$$15, envh, eh));
                                                                    }

                                                                  case 4:
                                                                    {
                                                                      return new E(33, "Const", bytes, FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), expr$$10)));
                                                                    }

                                                                  case 5:
                                                                    {
                                                                      return new E(33, "Const", arr$$5, FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15), expr$$10)));
                                                                    }

                                                                  case 6:
                                                                    {
                                                                      cenv$$15 = cenv$$15;
                                                                      env$$17 = env$$17;
                                                                      expr$$7 = e$$17;
                                                                      continue FSharpExprConvert$$$ConvExprPrim;
                                                                    }

                                                                  case 7:
                                                                    {
                                                                      const typR$$15 = FSharpExprConvert$$$ConvType(cenv$$15, (0, _TastOps.mkAppTy)(tycr, tyargs$$25));
                                                                      return new E(21, "UnionCaseTag", FSharpExprConvert$$$ConvExpr(cenv$$15, env$$17, arg1$$2), typR$$15);
                                                                    }

                                                                  case 8:
                                                                    {
                                                                      const tysR = FSharpExprConvert$$$ConvTypes(cenv$$15, tys$$1);
                                                                      const tyargsR = FSharpExprConvert$$$ConvTypes(cenv$$15, tyargs$$16);
                                                                      const argtysR = FSharpExprConvert$$$ConvTypes(cenv$$15, argtys);
                                                                      const argsR$$3 = FSharpExprConvert$$$ConvExprs(cenv$$15, env$$17, args$$4);
                                                                      return new E(23, "TraitCall", tysR, nm, memFlags, argtysR, tyargsR, argsR$$3);
                                                                    }

                                                                  case 9:
                                                                    {
                                                                      const replExpr = (0, _TastOps.mkRecdFieldGetAddrViaExprAddr)(readonly, e$$18, (0, _TastOps.mkRefCellContentsRef)((0, _Symbols.SymbolEnv$$get_g)(cenv$$15)), (0, _Types.L)(ty$$23, (0, _Types.L)()), m$$13);
                                                                      cenv$$15 = cenv$$15;
                                                                      env$$17 = env$$17;
                                                                      expr$$7 = replExpr;
                                                                      continue FSharpExprConvert$$$ConvExprPrim;
                                                                    }

                                                                  case 10:
                                                                    {
                                                                      return ExprTranslationImpl$$$wfail((0, _String.toText)((0, _String.printf)("unhandled construct in AST")), m$$13);
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

                  default:
                    {
                      return ExprTranslationImpl$$$wfail((0, _String.toText)((0, _String.printf)("unhandled construct in AST")), (0, _TastOps.Expr$002Eget_Range)(expr$$10));
                    }
                }
              }
          }
        }
    }
  }
}

function FSharpExprConvert$$$ConvLetBind(cenv$$16, env$$22, bind$$1) {
  const matchValue$$12 = (0, _tast.Binding$$get_Expr)(bind$$1);
  var $target$$51, e$$19, ty$$24;

  if (matchValue$$12.tag === 11) {
    if (matchValue$$12.fields[0].tag === 22) {
      if (matchValue$$12.fields[0].fields[0].tail != null) {
        if (matchValue$$12.fields[0].fields[0].head.tag === 66) {
          if (matchValue$$12.fields[0].fields[0].tail.tail == null) {
            if (matchValue$$12.fields[1].tail != null) {
              if (matchValue$$12.fields[1].tail.tail == null) {
                if (matchValue$$12.fields[2].tail != null) {
                  if (matchValue$$12.fields[2].tail.tail == null) {
                    $target$$51 = 0;
                    e$$19 = matchValue$$12.fields[2].head;
                    ty$$24 = matchValue$$12.fields[1].head;
                  } else {
                    $target$$51 = 2;
                  }
                } else {
                  $target$$51 = 2;
                }
              } else {
                $target$$51 = 2;
              }
            } else {
              $target$$51 = 2;
            }
          } else {
            $target$$51 = 2;
          }
        } else {
          $target$$51 = 2;
        }
      } else {
        $target$$51 = 2;
      }
    } else {
      $target$$51 = 2;
    }
  } else if (matchValue$$12.tag === 1) {
    if ((0, _tast.Val$$get_IsCompilerGenerated)((0, _tast.Binding$$get_Var)(bind$$1))) {
      $target$$51 = 1;
    } else {
      $target$$51 = 2;
    }
  } else {
    $target$$51 = 2;
  }

  switch ($target$$51) {
    case 0:
      {
        return [null, ExprTranslationImpl$002EExprTranslationEnv$$BindIsInstVal(env$$22, (0, _tast.Binding$$get_Var)(bind$$1), ty$$24, e$$19)];
      }

    case 1:
      {
        return [null, ExprTranslationImpl$002EExprTranslationEnv$$BindSubstVal(env$$22, (0, _tast.Binding$$get_Var)(bind$$1), (0, _tast.Binding$$get_Expr)(bind$$1))];
      }

    case 2:
      {
        var $target$$52;

        if (matchValue$$12.tag === 0) {
          if (matchValue$$12.fields[0].tag === 16) {
            if ((0, _tast.Val$$get_IsCompilerGenerated)((0, _tast.Binding$$get_Var)(bind$$1))) {
              $target$$52 = 0;
            } else {
              $target$$52 = 1;
            }
          } else {
            $target$$52 = 1;
          }
        } else {
          $target$$52 = 1;
        }

        switch ($target$$52) {
          case 0:
            {
              return [null, ExprTranslationImpl$002EExprTranslationEnv$$BindSubstVal(env$$22, (0, _tast.Binding$$get_Var)(bind$$1), (0, _tast.Binding$$get_Expr)(bind$$1))];
            }

          case 1:
            {
              var $target$$53, e$$20;

              if (matchValue$$12.tag === 11) {
                if (matchValue$$12.fields[0].tag === 15) {
                  if (matchValue$$12.fields[2].tail != null) {
                    if (matchValue$$12.fields[2].tail.tail == null) {
                      $target$$53 = 0;
                      e$$20 = matchValue$$12.fields[2].head;
                    } else {
                      $target$$53 = 1;
                    }
                  } else {
                    $target$$53 = 1;
                  }
                } else {
                  $target$$53 = 1;
                }
              } else {
                $target$$53 = 1;
              }

              switch ($target$$53) {
                case 0:
                  {
                    return [null, ExprTranslationImpl$002EExprTranslationEnv$$BindSubstVal(env$$22, (0, _tast.Binding$$get_Var)(bind$$1), e$$20)];
                  }

                case 1:
                  {
                    const v$$11 = (0, _tast.Binding$$get_Var)(bind$$1);
                    const vR$$1 = FSharpExprConvert$$$ConvVal(cenv$$16, v$$11);
                    const rhsR = FSharpExprConvert$$$ConvExpr(cenv$$16, env$$22, (0, _tast.Binding$$get_Expr)(bind$$1));
                    const envinner = ExprTranslationImpl$002EExprTranslationEnv$$BindVal$$7D0CFEA5(env$$22, v$$11);
                    return [[vR$$1, rhsR], envinner];
                  }
              }
            }
        }
      }
  }
}

function FSharpExprConvert$$$ConvILCall(cenv$$17, env$$23, isNewObj$$2, valUseFlags$$1, ilMethRef$$1, enclTypeArgs$$5, methTypeArgs$$1, callArgs$$2, m$$14) {
  const isNewObj$$3 = isNewObj$$2 ? true : valUseFlags$$1.tag === 2 ? true : valUseFlags$$1.tag === 3 ? true : false;
  const methName = (0, _il.ILMethodRef$$get_Name)(ilMethRef$$1);
  const isPropGet = (0, _String.startsWith)(methName, "get_", 4);
  const isPropSet = (0, _String.startsWith)(methName, "set_", 4);
  const isProp = isPropGet ? true : isPropSet;
  let patternInput$$9;

  try {
    patternInput$$9 = [(0, _import.ImportILTypeRef)((0, _Symbols.SymbolEnv$$get_amap)(cenv$$17), m$$14, (0, _il.ILMethodRef$$get_DeclaringTypeRef)(ilMethRef$$1)), null];
  } catch (matchValue$$13) {
    const e$$21 = (0, _il.ILMethodRef$$get_DeclaringTypeRef)(ilMethRef$$1);
    const parent = (0, _il.ILTypeRef$$$Create$$113F1D6)((0, _il.ILTypeRef$$get_Scope)(e$$21), (0, _List.tail)((0, _il.ILTypeRef$$get_Enclosing)(e$$21)), (0, _List.head)((0, _il.ILTypeRef$$get_Enclosing)(e$$21)));
    patternInput$$9 = [(0, _import.ImportILTypeRef)((0, _Symbols.SymbolEnv$$get_amap)(cenv$$17), m$$14, parent), (0, _il.ILTypeRef$$get_Name)(e$$21)];
  }

  const enclosingType = (0, _TastOps.generalizedTyconRef)(patternInput$$9[0]);

  const makeCall = function makeCall(minfo) {
    return FSharpExprConvert$$$ConvObjectModelCallLinear(cenv$$17, env$$23, isNewObj$$3, minfo, enclTypeArgs$$5, methTypeArgs$$1, callArgs$$2, function (x$$18) {
      return x$$18;
    });
  };

  const makeFSCall = function makeFSCall(isMember$$1, vr) {
    let memOrVal;

    if (isMember$$1) {
      const minfo$$1 = new _infos.MethInfo(0, "FSMeth", (0, _Symbols.SymbolEnv$$get_g)(cenv$$17), enclosingType, vr, null);
      memOrVal = (0, _Symbols.FSharpMemberOrFunctionOrValue$$$$002Ector$$2F3392A2)(cenv$$17, minfo$$1);
    } else {
      memOrVal = (0, _Symbols.FSharpMemberOrFunctionOrValue$$$$002Ector$$Z3519D4A3)(cenv$$17, vr);
    }

    return makeCall(memOrVal);
  };

  const makeFSExpr = function makeFSExpr(isMember$$2, vr$$1) {
    const nlr = vr$$1.nlr;
    let enclosingEntity;

    try {
      enclosingEntity = (0, _tast.EntityRef$$get_Deref)(nlr.EnclosingEntity);
    } catch (matchValue$$14) {
      enclosingEntity = (0, _String.toFail)((0, _String.printf)("Failed to resolve type '%s'"))((0, _tast.EntityRef$$get_CompiledName)(nlr.EnclosingEntity));
    }

    const ccu = (0, _tast.NonLocalEntityRef$$get_Ccu)(nlr.EnclosingEntity.nlr);
    const vName = (0, _tast.ValLinkageFullKey$$get_PartialKey)(nlr.ItemKey).LogicalName;
    const findByName = (0, _List.filter)(function predicate$$1(v$$12) {
      return (0, _tast.ValRef$$get_CompiledName)(v$$12) === vName;
    }, (0, _tast.Entity$$get_MembersOfFSharpTyconSorted)(enclosingEntity));

    if (findByName.tail == null) {
      const typR$$16 = FSharpExprConvert$$$ConvType(cenv$$17, (0, _TastOps.mkAppTy)(patternInput$$9[0], enclTypeArgs$$5));

      if ((0, _tast.Entity$$get_IsModuleOrNamespace)(enclosingEntity)) {
        const findModuleMemberByName = (0, _List.ofSeq)((0, _Seq.filter)(function predicate$$2(v$$14) {
          if ((0, _tast.Val$$get_CompiledName)(v$$14) === vName) {
            const matchValue$$15 = (0, _tast.Val$$get_DeclaringEntity)(v$$14);

            if (matchValue$$15.tag === 0) {
              const p = matchValue$$15.fields[0];
              return (0, _Util.equals)((0, _tast.EntityRef$$get_PublicPath)(p), (0, _tast.Entity$$get_PublicPath)(enclosingEntity));
            } else {
              return false;
            }
          } else {
            return false;
          }
        }, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)((0, _tast.Entity$$get_ModuleOrNamespaceType)(enclosingEntity))));

        if (findModuleMemberByName.tail == null) {
          const isPropGet$$1 = (0, _String.startsWith)(vName, "get_", 4);
          const isPropSet$$1 = (0, _String.startsWith)(vName, "set_", 4);

          if (isPropGet$$1 ? true : isPropSet$$1) {
            const name = (0, _PrettyNaming.ChopPropertyName)(vName);
            const findByName$$1 = (0, _List.ofSeq)((0, _Seq.filter)(function predicate$$3(v$$16) {
              return (0, _tast.Val$$get_CompiledName)(v$$16) === name;
            }, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembers)((0, _tast.Entity$$get_ModuleOrNamespaceType)(enclosingEntity))));
            var $target$$54, v$$17;

            if (findByName$$1.tail != null) {
              if (findByName$$1.tail.tail == null) {
                $target$$54 = 0;
                v$$17 = findByName$$1.head;
              } else {
                $target$$54 = 1;
              }
            } else {
              $target$$54 = 1;
            }

            switch ($target$$54) {
              case 0:
                {
                  const m$$15 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$$$002Ector$$Z3519D4A3)(cenv$$17, (0, _tast.VRefLocal)(v$$17));

                  if (isPropGet$$1) {
                    return new E(0, "Value", m$$15);
                  } else {
                    const valR = FSharpExprConvert$$$ConvExpr(cenv$$17, env$$23, (0, _List.head)(callArgs$$2));
                    return new E(30, "ValueSet", m$$15, valR);
                  }
                }

              case 1:
                {
                  throw new Error("Failed to resolve module value unambigously");
                }
            }
          } else {
            throw new Error("Failed to resolve module member");
          }
        } else if (findModuleMemberByName.tail.tail == null) {
          const vr$$2 = (0, _tast.VRefLocal)(findModuleMemberByName.head);
          return makeFSCall(isMember$$2, vr$$2);
        } else {
          throw new Error("Failed to resolve overloaded module member");
        }
      } else if ((0, _tast.Entity$$get_IsRecordTycon)(enclosingEntity)) {
        if (isProp) {
          const name$$1 = (0, _PrettyNaming.ChopPropertyName)(vName);
          const projR$$6 = FSharpExprConvert$$$ConvRecdFieldRef(cenv$$17, new _tast.RecdFieldRef(0, "RFRef", patternInput$$9[0], name$$1));
          const objR$$6 = FSharpExprConvert$$$ConvLValueExpr(cenv$$17, env$$23, (0, _List.head)(callArgs$$2));

          if (isPropGet) {
            return new E(16, "FSharpFieldGet", objR$$6, typR$$16, projR$$6);
          } else {
            const valR$$1 = FSharpExprConvert$$$ConvExpr(cenv$$17, env$$23, (0, _List.head)((0, _List.tail)(callArgs$$2)));
            return new E(17, "FSharpFieldSet", objR$$6, typR$$16, projR$$6, valR$$1);
          }
        } else if (vName === ".ctor") {
          const argsR$$4 = FSharpExprConvert$$$ConvExprs(cenv$$17, env$$23, callArgs$$2);
          return new E(14, "NewRecord", typR$$16, argsR$$4);
        } else {
          throw new Error("Failed to recognize record type member");
        }
      } else if ((0, _tast.Entity$$get_IsUnionTycon)(enclosingEntity)) {
        if (vName === "GetTag" ? true : vName === "get_Tag") {
          const objR$$7 = FSharpExprConvert$$$ConvExpr(cenv$$17, env$$23, (0, _List.head)(callArgs$$2));
          return new E(21, "UnionCaseTag", objR$$7, typR$$16);
        } else if ((0, _String.startsWith)(vName, "New", 4)) {
          const name$$2 = vName.substr(3);
          const mkR$$4 = FSharpExprConvert$$$ConvUnionCaseRef(cenv$$17, new _tast.UnionCaseRef(0, "UCRef", patternInput$$9[0], name$$2));
          const argsR$$5 = FSharpExprConvert$$$ConvExprs(cenv$$17, env$$23, callArgs$$2);
          return new E(18, "NewUnionCase", typR$$16, mkR$$4, argsR$$5);
        } else if ((0, _String.startsWith)(vName, "Is", 4)) {
          const name$$3 = vName.substr(2);
          const mkR$$5 = FSharpExprConvert$$$ConvUnionCaseRef(cenv$$17, new _tast.UnionCaseRef(0, "UCRef", patternInput$$9[0], name$$3));
          const objR$$8 = FSharpExprConvert$$$ConvExpr(cenv$$17, env$$23, (0, _List.head)(callArgs$$2));
          return new E(22, "UnionCaseTest", objR$$8, typR$$16, mkR$$5);
        } else if (patternInput$$9[1] != null) {
          const name$$4 = patternInput$$9[1];
          const ucref$$5 = new _tast.UnionCaseRef(0, "UCRef", patternInput$$9[0], name$$4);
          const mkR$$6 = FSharpExprConvert$$$ConvUnionCaseRef(cenv$$17, ucref$$5);
          const objR$$9 = FSharpExprConvert$$$ConvLValueExpr(cenv$$17, env$$23, (0, _List.head)(callArgs$$2));
          const projR$$7 = (0, _Symbols.FSharpField$$$$002Ector$$Z2A5775A3)(cenv$$17, ucref$$5, (0, _tast.UnionCaseRef$$get_Index)(ucref$$5));
          return new E(19, "UnionCaseGet", objR$$9, typR$$16, mkR$$6, projR$$7);
        } else {
          throw new Error("Failed to recognize union type member");
        }
      } else {
        const names = (0, _String.join)(", ", ...(0, _List.map)(function mapping$$4(v$$18) {
          return (0, _tast.ValRef$$get_CompiledName)(v$$18);
        }, (0, _tast.Entity$$get_MembersOfFSharpTyconSorted)(enclosingEntity)));
        return (0, _String.toFail)((0, _String.printf)("Member '%s' not found in type %s, found: %s"))(vName)((0, _tast.Entity$$get_DisplayName)(enclosingEntity))(names);
      }
    } else if (findByName.tail.tail == null) {
      return makeFSCall(isMember$$2, findByName.head);
    } else {
      const matchValue$$16 = (0, _tast.ValLinkageFullKey$$get_TypeForLinkage)(nlr.ItemKey);

      if (matchValue$$16 != null) {
        const keyTy = matchValue$$16;
        const findBySig = (0, _List.tryFind)(function predicate$$4(v$$19) {
          return (0, _tast.CcuThunk$$MemberSignatureEquality$$7E99D2C0)(ccu, keyTy, (0, _tast.ValRef$$get_Type)(v$$19));
        }, findByName);

        if (findBySig != null) {
          const v$$20 = findBySig;
          return makeFSCall(isMember$$2, v$$20);
        } else {
          throw new Error("Failed to recognize F# member");
        }
      } else {
        throw new Error("Type of signature could not be resolved");
      }
    }
  };

  let try1;

  if ((0, _tast.EntityRef$$get_IsILTycon)(patternInput$$9[0])) {
    try {
      const mdef = (0, _il.resolveILMethodRefWithRescope)(_il.unscopeILType, (0, _tast.EntityRef$$get_ILTyconRawMetadata)(patternInput$$9[0]), ilMethRef$$1);
      const minfo$$2 = (0, _infos.MethInfo$$$CreateILMeth$$Z136523CF)((0, _Symbols.SymbolEnv$$get_amap)(cenv$$17), m$$14, enclosingType, mdef);
      try1 = makeCall((0, _Symbols.FSharpMemberOrFunctionOrValue$$$$002Ector$$2F3392A2)(cenv$$17, minfo$$2));
    } catch (matchValue$$17) {
      try1 = null;
    }
  } else {
    try1 = null;
  }

  if (try1 == null) {
    try {
      const memberParentName = (0, _tast.EntityRef$$get_IsModuleOrNamespace)(patternInput$$9[0]) ? null : (0, _tast.EntityRef$$get_LogicalName)(patternInput$$9[0]);
      const logicalName = (0, _il.ILMethodRef$$get_Name)(ilMethRef$$1);
      const isMember$$3 = memberParentName != null;

      if (isMember$$3) {
        const matchValue$$18 = [(0, _il.ILMethodRef$$get_Name)(ilMethRef$$1), (0, _il.ILTypeRef$$get_Name)((0, _il.ILMethodRef$$get_DeclaringTypeRef)(ilMethRef$$1))];
        var $target$$55;

        if (matchValue$$18[0] === "Invoke") {
          if (matchValue$$18[1] === "Microsoft.FSharp.Core.FSharpFunc`2") {
            $target$$55 = 0;
          } else {
            $target$$55 = 1;
          }
        } else {
          $target$$55 = 1;
        }

        switch ($target$$55) {
          case 0:
            {
              const objR$$10 = FSharpExprConvert$$$ConvLValueExpr(cenv$$17, env$$23, (0, _List.head)(callArgs$$2));
              const argR$$4 = FSharpExprConvert$$$ConvExpr(cenv$$17, env$$23, (0, _List.head)((0, _List.tail)(callArgs$$2)));
              const typR$$17 = FSharpExprConvert$$$ConvType(cenv$$17, (0, _List.head)(enclTypeArgs$$5));
              return new E(3, "Application", objR$$10, (0, _Types.L)(typR$$17, (0, _Types.L)()), (0, _Types.L)(argR$$4, (0, _Types.L)()));
            }

          case 1:
            {
              const isCtor = (0, _il.ILMethodRef$$get_Name)(ilMethRef$$1) === ".ctor";
              const isStatic = isCtor ? true : (0, _il.ILCallingConv$$get_IsStatic)((0, _il.ILMethodRef$$get_CallingConv)(ilMethRef$$1));
              const scoref = (0, _il.ILTypeRef$$get_Scope)((0, _il.ILMethodRef$$get_DeclaringTypeRef)(ilMethRef$$1));
              const typars1 = (0, _tast.EntityRef$$Typars$$4DB9192C)(patternInput$$9[0], m$$14);
              const typars2 = (0, _List.map)(function mapping$$5(_arg1) {
                return (0, _tast.NewRigidTypar)("T", m$$14);
              }, (0, _List.ofSeq)((0, _Seq.rangeNumber)(1, 1, (0, _il.ILMethodRef$$get_GenericArity)(ilMethRef$$1))));
              const tinst1 = (0, _TastOps.generalizeTypars)(typars1);
              const tinst2 = (0, _TastOps.generalizeTypars)(typars2);
              const argtys$$1 = (0, _Types.L)((0, _List.map)(function mapping$$6(ilty) {
                return (0, _infos.ImportILTypeFromMetadata)((0, _Symbols.SymbolEnv$$get_amap)(cenv$$17), m$$14, scoref, tinst1, tinst2, ilty);
              }, (0, _il.ILMethodRef$$get_ArgTypes)(ilMethRef$$1)), (0, _Types.L)());
              let rty;
              const matchValue$$19 = (0, _infos.ImportReturnTypeFromMetaData)((0, _Symbols.SymbolEnv$$get_amap)(cenv$$17), m$$14, (0, _il.ILMethodRef$$get_ReturnType)(ilMethRef$$1), scoref, tinst1, tinst2);

              if (matchValue$$19 != null) {
                const ty$$25 = matchValue$$19;
                rty = ty$$25;
              } else {
                rty = isCtor ? enclosingType : (0, _TcGlobals.TcGlobals$$get_unit_ty)((0, _Symbols.SymbolEnv$$get_g)(cenv$$17));
              }

              let linkageType;
              const ty$$26 = (0, _TastOps.mkIteratedFunTy)((0, _List.map)(function (arg10$0040$$68) {
                return (0, _TastOps.mkRefTupledTy)((0, _Symbols.SymbolEnv$$get_g)(cenv$$17), arg10$0040$$68);
              }, argtys$$1), rty);
              const ty$$27 = isStatic ? ty$$26 : (0, _TastOps.mkFunTy)(enclosingType, ty$$26);
              linkageType = (0, _TastOps.mkForallTyIfNeeded)((0, _List.append)(typars1, typars2), ty$$27);
              const argCount = (0, _List.sum)((0, _List.map)(_List.length, argtys$$1), {
                GetZero() {
                  return 0;
                },

                Add($x$$9, $y$$10) {
                  return $x$$9 + $y$$10;
                }

              }) + (isStatic ? 0 : 1) | 0;
              const key = (0, _tast.ValLinkageFullKey$$$$002Ector$$72991465)(new _tast.ValLinkagePartialKey(memberParentName, false, logicalName, argCount), linkageType);
              const p$$1 = (0, _tast.EntityRef$$get_PublicPath)(patternInput$$9[0]).fields[0];
              const enclosingNonLocalRef = (0, _tast.mkNonLocalEntityRef)((0, _tast.NonLocalEntityRef$$get_Ccu)(patternInput$$9[0].nlr), p$$1);
              const vref$$18 = (0, _tast.mkNonLocalValRef)(enclosingNonLocalRef, key);
              return makeFSExpr(isMember$$3, vref$$18);
            }
        }
      } else {
        const key$$1 = (0, _tast.ValLinkageFullKey$$$$002Ector$$72991465)(new _tast.ValLinkagePartialKey(memberParentName, false, logicalName, 0), null);
        const vref$$19 = (0, _tast.mkNonLocalValRef)(patternInput$$9[0].nlr, key$$1);
        return makeFSExpr(isMember$$3, vref$$19);
      }
    } catch (e$$22) {
      return (0, _String.toFail)((0, _String.printf)("An IL call to '%s' could not be resolved: %s"))((0, _Util.toString)(ilMethRef$$1))(e$$22.message);
    }
  } else {
    const res = try1;
    return res;
  }
}

function FSharpExprConvert$$$ConvObjectModelCallLinear(cenv$$18, env$$24, isNewObj$$4, v$$21, enclTyArgs$$1, methTyArgs$$1, callArgs$$3, contf$$3) {
  const enclTyArgsR = FSharpExprConvert$$$ConvTypes(cenv$$18, enclTyArgs$$1);
  const methTyArgsR = FSharpExprConvert$$$ConvTypes(cenv$$18, methTyArgs$$1);
  let patternInput$$11;

  if ((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsInstanceMember)(v$$21)) {
    if (callArgs$$3.tail != null) {
      const rest = callArgs$$3.tail;
      const obj$$10 = callArgs$$3.head;
      patternInput$$11 = [obj$$10, rest];
    } else {
      throw new Error((0, _String.toText)((0, _String.printf)("unexpected shape of arguments: %A"))(callArgs$$3));
    }
  } else {
    patternInput$$11 = [null, callArgs$$3];
  }

  const objR$$11 = (0, _Option.defaultArg)(patternInput$$11[0], null, function (expr$$13) {
    return FSharpExprConvert$$$ConvLValueExpr(cenv$$18, env$$24, expr$$13);
  });
  return FSharpExprConvert$$$ConvExprsLinear(cenv$$18, env$$24, patternInput$$11[1], function ($arg$$11) {
    return contf$$3(isNewObj$$4 ? new E(11, "NewObject", v$$21, enclTyArgsR, $arg$$11) : new E(10, "Call", objR$$11, v$$21, enclTyArgsR, methTyArgsR, $arg$$11));
  });
}

function FSharpExprConvert$$$ConvExprs(cenv$$19, env$$25, args$$7) {
  return (0, _List.map)(function (expr$$14) {
    return FSharpExprConvert$$$ConvExpr(cenv$$19, env$$25, expr$$14);
  }, args$$7);
}

function FSharpExprConvert$$$ConvExprsLinear(cenv$$20, env$$26, args$$8, contf$$4) {
  if (args$$8.tail != null) {
    if (args$$8.tail.tail == null) {
      return FSharpExprConvert$$$ConvExprLinear(cenv$$20, env$$26, args$$8.head, function (argR$$5) {
        return contf$$4((0, _Types.L)(argR$$5, (0, _Types.L)()));
      });
    } else {
      return FSharpExprConvert$$$ConvExprLinear(cenv$$20, env$$26, args$$8.head, function (argR$$6) {
        return FSharpExprConvert$$$ConvExprsLinear(cenv$$20, env$$26, args$$8.tail, function (restR) {
          return contf$$4((0, _Types.L)(argR$$6, restR));
        });
      });
    }
  } else {
    return contf$$4((0, _Types.L)());
  }
}

function FSharpExprConvert$$$ConvTargetsLinear(cenv$$21, env$$27, tgs$$1, contf$$5) {
  if (tgs$$1.tail != null) {
    const vars = tgs$$1.head.fields[0];
    const rhs = tgs$$1.head.fields[1];
    const rest$$2 = tgs$$1.tail;
    const varsR = (0, _List.map)(function mapping$$7(v$$22) {
      return FSharpExprConvert$$$ConvVal(cenv$$21, v$$22);
    }, (0, _List.reverse)(vars));
    return FSharpExprConvert$$$ConvExprLinear(cenv$$21, env$$27, rhs, function (targetR) {
      return FSharpExprConvert$$$ConvTargetsLinear(cenv$$21, env$$27, rest$$2, function (restR$$1) {
        return contf$$5((0, _Types.L)([varsR, targetR], restR$$1));
      });
    });
  } else {
    return contf$$5((0, _Types.L)());
  }
}

function FSharpExprConvert$$$ConvValRef(cenv$$22, env$$28, m$$16, vref$$20) {
  const v$$23 = (0, _tast.ValRef$$get_Deref)(vref$$20);

  if ((0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(env$$28.isinstVals, v$$23)) {
    const patternInput$$12 = (0, _TastOps.ValMap$00601$$get_Item$$7D0CFEA5)(env$$28.isinstVals, v$$23);
    return FSharpExprConvert$$$ConvExprPrim(cenv$$22, env$$28, (0, _TastOps.mkCallUnbox)((0, _Symbols.SymbolEnv$$get_g)(cenv$$22), m$$16, patternInput$$12[0], patternInput$$12[1]));
  } else if ((0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(env$$28.substVals, v$$23)) {
    const e$$24 = (0, _TastOps.ValMap$00601$$get_Item$$7D0CFEA5)(env$$28.substVals, v$$23);
    return FSharpExprConvert$$$ConvExprPrim(cenv$$22, env$$28, e$$24);
  } else if ((0, _Util.equals)((0, _tast.Val$$get_BaseOrThisInfo)(v$$23), new _tast.ValBaseOrThisInfo(0, "CtorThisVal"))) {
    return new E(1, "ThisValue", FSharpExprConvert$$$ConvType(cenv$$22, (0, _tast.Val$$get_Type)(v$$23)));
  } else if ((0, _Util.equals)((0, _tast.Val$$get_BaseOrThisInfo)(v$$23), new _tast.ValBaseOrThisInfo(1, "BaseVal"))) {
    return new E(2, "BaseValue", FSharpExprConvert$$$ConvType(cenv$$22, (0, _tast.Val$$get_Type)(v$$23)));
  } else {
    return new E(0, "Value", (0, _Symbols.FSharpMemberOrFunctionOrValue$$$$002Ector$$Z3519D4A3)(cenv$$22, vref$$20));
  }
}

function FSharpExprConvert$$$ConvVal(cenv$$23, v$$24) {
  const vref$$21 = (0, _tast.mkLocalValRef)(v$$24);
  return (0, _Symbols.FSharpMemberOrFunctionOrValue$$$$002Ector$$Z3519D4A3)(cenv$$23, vref$$21);
}

function FSharpExprConvert$$$ConvConst(cenv$$24, env$$29, m$$17, c$$3, ty$$29) {
  const matchValue$$20 = (0, _TastOps.TryEliminateDesugaredConstants)((0, _Symbols.SymbolEnv$$get_g)(cenv$$24), m$$17, c$$3);

  if (matchValue$$20 == null) {
    const tyR$$2 = FSharpExprConvert$$$ConvType(cenv$$24, ty$$29);

    switch (c$$3.tag) {
      case 1:
        {
          const i$$3 = c$$3.fields[0] | 0;
          return new E(33, "Const", i$$3, tyR$$2);
        }

      case 2:
        {
          const i$$4 = c$$3.fields[0];
          return new E(33, "Const", i$$4, tyR$$2);
        }

      case 3:
        {
          const i$$5 = c$$3.fields[0] | 0;
          return new E(33, "Const", i$$5, tyR$$2);
        }

      case 4:
        {
          const i$$6 = c$$3.fields[0];
          return new E(33, "Const", i$$6, tyR$$2);
        }

      case 5:
        {
          const i$$7 = c$$3.fields[0] | 0;
          return new E(33, "Const", i$$7, tyR$$2);
        }

      case 6:
        {
          const i$$8 = c$$3.fields[0];
          return new E(33, "Const", i$$8, tyR$$2);
        }

      case 7:
        {
          const i$$9 = c$$3.fields[0];
          return new E(33, "Const", i$$9, tyR$$2);
        }

      case 8:
        {
          const i$$10 = c$$3.fields[0];
          return new E(33, "Const", i$$10, tyR$$2);
        }

      case 9:
        {
          const i$$11 = c$$3.fields[0];
          return new E(33, "Const", i$$11, tyR$$2);
        }

      case 10:
        {
          const i$$12 = c$$3.fields[0];
          return new E(33, "Const", i$$12, tyR$$2);
        }

      case 15:
        {
          const i$$13 = c$$3.fields[0];
          return new E(33, "Const", i$$13, tyR$$2);
        }

      case 12:
        {
          const i$$14 = c$$3.fields[0];
          return new E(33, "Const", i$$14, tyR$$2);
        }

      case 11:
        {
          const i$$15 = c$$3.fields[0];
          return new E(33, "Const", i$$15, tyR$$2);
        }

      case 14:
        {
          const i$$16 = c$$3.fields[0];
          return new E(33, "Const", i$$16, tyR$$2);
        }

      case 13:
        {
          const i$$17 = c$$3.fields[0];
          return new E(33, "Const", i$$17, tyR$$2);
        }

      case 16:
        {
          return new E(33, "Const", null, tyR$$2);
        }

      case 17:
        {
          return new E(32, "DefaultValue", FSharpExprConvert$$$ConvType(cenv$$24, ty$$29));
        }

      default:
        {
          const i$$2 = c$$3.fields[0];
          return new E(33, "Const", i$$2, tyR$$2);
        }
    }
  } else {
    const e$$25 = matchValue$$20;
    return FSharpExprConvert$$$ConvExprPrim(cenv$$24, env$$29, e$$25);
  }
}

function FSharpExprConvert$$$ConvDecisionTree(cenv$$25, env$$30, dtreeRetTy, x$$23, m$$18) {
  return FSharpExprConvert$$$Mk(cenv$$25, m$$18, dtreeRetTy, FSharpExprConvert$$$ConvDecisionTreePrim(cenv$$25, env$$30, dtreeRetTy, x$$23));
}

function FSharpExprConvert$$$ConvDecisionTreePrim(cenv$$26, env$$31, dtreeRetTy$$1, x$$24) {
  FSharpExprConvert$$$ConvDecisionTreePrim: while (true) {
    switch (x$$24.tag) {
      case 1:
        {
          const n$$4 = x$$24.fields[1] | 0;
          const args$$9 = x$$24.fields[0];
          const args$$10 = (0, _List.reverse)(args$$9);
          const argsR$$6 = FSharpExprConvert$$$ConvExprs(cenv$$26, env$$31, args$$10);
          return new E(9, "DecisionTreeSuccess", n$$4, argsR$$6);
        }

      case 2:
        {
          const rest$$3 = x$$24.fields[1];
          const bind$$2 = x$$24.fields[0];
          const matchValue$$21 = FSharpExprConvert$$$ConvLetBind(cenv$$26, env$$31, bind$$2);

          if (matchValue$$21[0] != null) {
            const bindR$$1 = matchValue$$21[0];
            return new E(13, "Let", bindR$$1, FSharpExprConvert$$$ConvDecisionTree(cenv$$26, matchValue$$21[1], dtreeRetTy$$1, rest$$3, (0, _tast.Val$$get_Range)((0, _tast.Binding$$get_Var)(bind$$2))));
          } else {
            cenv$$26 = cenv$$26;
            env$$31 = matchValue$$21[1];
            dtreeRetTy$$1 = dtreeRetTy$$1;
            x$$24 = rest$$3;
            continue FSharpExprConvert$$$ConvDecisionTreePrim;
          }
        }

      default:
        {
          const m$$19 = x$$24.fields[3];
          const e1$$7 = x$$24.fields[0];
          const dfltOpt = x$$24.fields[2];
          const csl = x$$24.fields[1];
          let acc;

          if (dfltOpt == null) {
            acc = ExprTranslationImpl$$$wfail("FSharp.Compiler.Service cannot yet return this kind of pattern match", m$$19);
          } else {
            const d$$2 = dfltOpt;
            acc = FSharpExprConvert$$$ConvDecisionTreePrim(cenv$$26, env$$31, dtreeRetTy$$1, d$$2);
          }

          return (0, _List.foldBack)(function folder$$4(_arg2, acc$$1) {
            var vref$$22;
            const dtree$$1 = _arg2.fields[1];
            const discrim = _arg2.fields[0];
            const acc$$2 = FSharpExprConvert$$$Mk(cenv$$26, m$$19, dtreeRetTy$$1, acc$$1);

            if (discrim.tag === 2) {
              if (discrim.fields[0].tag === 0) {
                if (discrim.fields[0].fields[0]) {
                  const e1R$$2 = FSharpExprConvert$$$ConvExpr(cenv$$26, env$$31, e1$$7);
                  return new E(7, "IfThenElse", e1R$$2, FSharpExprConvert$$$ConvDecisionTree(cenv$$26, env$$31, dtreeRetTy$$1, dtree$$1, m$$19), acc$$2);
                } else {
                  const e1R$$3 = FSharpExprConvert$$$ConvExpr(cenv$$26, env$$31, e1$$7);
                  return new E(7, "IfThenElse", e1R$$3, acc$$2, FSharpExprConvert$$$ConvDecisionTree(cenv$$26, env$$31, dtreeRetTy$$1, dtree$$1, m$$19));
                }
              } else {
                const ty$$31 = (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$26), e1$$7);
                const eq = (0, _TastOps.mkCallEqualsOperator)((0, _Symbols.SymbolEnv$$get_g)(cenv$$26), m$$19, ty$$31, e1$$7, new _tast.Expr(0, "Const", discrim.fields[0], m$$19, ty$$31));
                const eqR = FSharpExprConvert$$$ConvExpr(cenv$$26, env$$31, eq);
                return new E(7, "IfThenElse", eqR, FSharpExprConvert$$$ConvDecisionTree(cenv$$26, env$$31, dtreeRetTy$$1, dtree$$1, m$$19), acc$$2);
              }
            } else if (discrim.tag === 3) {
              var $target$$72, vref$$23;

              if (e1$$7.tag === 1) {
                if (vref$$22 = e1$$7.fields[0], (0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(env$$31.isinstVals, (0, _tast.ValRef$$get_Deref)(vref$$22))) {
                  $target$$72 = 0;
                  vref$$23 = e1$$7.fields[0];
                } else {
                  $target$$72 = 1;
                }
              } else {
                $target$$72 = 1;
              }

              switch ($target$$72) {
                case 0:
                  {
                    const patternInput$$13 = (0, _TastOps.ValMap$00601$$get_Item$$7D0CFEA5)(env$$31.isinstVals, (0, _tast.ValRef$$get_Deref)(vref$$23));
                    const tyR$$3 = FSharpExprConvert$$$ConvType(cenv$$26, patternInput$$13[0]);
                    const eR = FSharpExprConvert$$$ConvExpr(cenv$$26, env$$31, patternInput$$13[1]);
                    return new E(7, "IfThenElse", FSharpExprConvert$$$Mk(cenv$$26, m$$19, (0, _TcGlobals.TcGlobals$$get_bool_ty)((0, _Symbols.SymbolEnv$$get_g)(cenv$$26)), new E(28, "TypeTest", tyR$$3, eR)), acc$$2, FSharpExprConvert$$$ConvDecisionTree(cenv$$26, env$$31, dtreeRetTy$$1, dtree$$1, m$$19));
                  }

                case 1:
                  {
                    const ty$$34 = (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$26), e1$$7);
                    const eq$$1 = (0, _TastOps.mkCallEqualsOperator)((0, _Symbols.SymbolEnv$$get_g)(cenv$$26), m$$19, ty$$34, e1$$7, new _tast.Expr(0, "Const", new _tast.Const(17, "Zero"), m$$19, ty$$34));
                    const eqR$$1 = FSharpExprConvert$$$ConvExpr(cenv$$26, env$$31, eq$$1);
                    return new E(7, "IfThenElse", eqR$$1, FSharpExprConvert$$$ConvDecisionTree(cenv$$26, env$$31, dtreeRetTy$$1, dtree$$1, m$$19), acc$$2);
                  }
              }
            } else if (discrim.tag === 4) {
              const e1R$$4 = FSharpExprConvert$$$ConvExpr(cenv$$26, env$$31, e1$$7);
              return new E(7, "IfThenElse", FSharpExprConvert$$$Mk(cenv$$26, m$$19, (0, _TcGlobals.TcGlobals$$get_bool_ty)((0, _Symbols.SymbolEnv$$get_g)(cenv$$26)), new E(28, "TypeTest", FSharpExprConvert$$$ConvType(cenv$$26, discrim.fields[1]), e1R$$4)), FSharpExprConvert$$$ConvDecisionTree(cenv$$26, env$$31, dtreeRetTy$$1, dtree$$1, m$$19), acc$$2);
            } else if (discrim.tag === 5) {
              return ExprTranslationImpl$$$wfail("unexpected Test.ActivePatternCase test in quoted expression", m$$19);
            } else if (discrim.tag === 1) {
              return ExprTranslationImpl$$$wfail("FSharp.Compiler.Service cannot yet return array pattern matching", m$$19);
            } else {
              const objR$$12 = FSharpExprConvert$$$ConvExpr(cenv$$26, env$$31, e1$$7);
              const ucR = FSharpExprConvert$$$ConvUnionCaseRef(cenv$$26, discrim.fields[0]);
              const utypR = FSharpExprConvert$$$ConvType(cenv$$26, (0, _TastOps.mkAppTy)((0, _tast.UnionCaseRef$$get_TyconRef)(discrim.fields[0]), discrim.fields[1]));
              return new E(7, "IfThenElse", FSharpExprConvert$$$Mk(cenv$$26, m$$19, (0, _TcGlobals.TcGlobals$$get_bool_ty)((0, _Symbols.SymbolEnv$$get_g)(cenv$$26)), new E(22, "UnionCaseTest", objR$$12, utypR, ucR)), FSharpExprConvert$$$ConvDecisionTree(cenv$$26, env$$31, dtreeRetTy$$1, dtree$$1, m$$19), acc$$2);
            }
          }, csl, acc);
        }
    }
  }
}

function FSharpExprConvert$$$ConvExprOnDemand(cenv$$27, env$$34, expr$$15) {
  return FSharpExpr$$$$002Ector$$740F346C(cenv$$27, function () {
    return FSharpExprConvert$$$ConvExpr(cenv$$27, env$$34, expr$$15);
  }, new E(31, "Unused"), (0, _TastOps.Expr$002Eget_Range)(expr$$15), (0, _TastOps.tyOfExpr)((0, _Symbols.SymbolEnv$$get_g)(cenv$$27), expr$$15));
}

const FSharpImplementationFileDeclaration = (0, _Types.declare)(function FSharpImplementationFileDeclaration(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FSharpImplementationFileDeclaration = FSharpImplementationFileDeclaration;
const FSharpAssemblyContents = (0, _Types.declare)(function FSharpAssemblyContents(cenv$$28, mimpls) {
  const $this$$12 = this;
  $this$$12.cenv = cenv$$28;
  $this$$12.mimpls = mimpls;
});
exports.FSharpAssemblyContents = FSharpAssemblyContents;

function FSharpAssemblyContents$$$$002Ector$$68827A5F(cenv$$28, mimpls) {
  return this != null ? FSharpAssemblyContents.call(this, cenv$$28, mimpls) : new FSharpAssemblyContents(cenv$$28, mimpls);
}

function FSharpAssemblyContents$$$$002Ector$$2BF0DF82(g$$1, thisCcu, thisCcuType, tcImports, mimpls$$1) {
  return FSharpAssemblyContents$$$$002Ector$$68827A5F.call(this, (0, _Symbols.SymbolEnv$$$$002Ector$$Z4628ED4C)(g$$1, thisCcu, thisCcuType, tcImports), mimpls$$1);
}

function FSharpAssemblyContents$$get_ImplementationFiles(__$$4) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (mimpl) {
      return FSharpImplementationFileContents$$$$002Ector$$Z172BEBAB(__$$4.cenv, mimpl);
    }, __$$4.mimpls);
  }));
}

const FSharpImplementationFileContents = (0, _Types.declare)(function FSharpImplementationFileContents(cenv$$29, mimpl$$1) {
  const $this$$13 = this;
  $this$$13.cenv = cenv$$29;
  $this$$13.qname = mimpl$$1.fields[0];
  $this$$13.mdef = mimpl$$1.fields[2].fields[1];
  $this$$13.isScript = mimpl$$1.fields[4];
  $this$$13.hasExplicitEntryPoint = mimpl$$1.fields[3];
  const _pragmas = mimpl$$1.fields[1];
});
exports.FSharpImplementationFileContents = FSharpImplementationFileContents;

function FSharpImplementationFileContents$$$$002Ector$$Z172BEBAB(cenv$$29, mimpl$$1) {
  return this != null ? FSharpImplementationFileContents.call(this, cenv$$29, mimpl$$1) : new FSharpImplementationFileContents(cenv$$29, mimpl$$1);
}

function FSharpImplementationFileContents$$get_QualifiedName(__$$5) {
  return (0, _ast.QualifiedNameOfFile$$get_Text)(__$$5.qname);
}

function FSharpImplementationFileContents$$get_FileName(__$$6) {
  let copyOfStruct = (0, _ast.QualifiedNameOfFile$$get_Range)(__$$6.qname);
  return (0, _range.range$$get_FileName)(copyOfStruct);
}

function FSharpImplementationFileContents$$get_Declarations(__$$7) {
  return FSharpImplementationFileContents$$getDecls$$67E46BC5(__$$7, __$$7.mdef);
}

function FSharpImplementationFileContents$$get_HasExplicitEntryPoint(__$$8) {
  return __$$8.hasExplicitEntryPoint;
}

function FSharpImplementationFileContents$$get_IsScript(__$$9) {
  return __$$9.isScript;
}

function FSharpImplementationFileContents$$getDecls2$$495FC11A(this$, _arg1$$1) {
  const def = _arg1$$1.fields[1];
  const _mty = _arg1$$1.fields[0];
  const _m$$2 = _arg1$$1.fields[2];
  return FSharpImplementationFileContents$$getDecls$$67E46BC5(this$, def);
}

function FSharpImplementationFileContents$$getBind$$14D453FF(this$$$1, bind$$3) {
  const v$$25 = (0, _tast.Binding$$get_Var)(bind$$3);
  const topValInfo$$1 = (0, _TastOps.InferArityOfExprBinding)((0, _Symbols.SymbolEnv$$get_g)(this$$$1.cenv), new _TastOps.AllowTypeDirectedDetupling(0, "Yes"), v$$25, (0, _tast.Binding$$get_Expr)(bind$$3));
  const patternInput$$14 = (0, _TypeRelations.IteratedAdjustArityOfLambda)((0, _Symbols.SymbolEnv$$get_g)(this$$$1.cenv), (0, _Symbols.SymbolEnv$$get_amap)(this$$$1.cenv), topValInfo$$1, (0, _tast.Binding$$get_Expr)(bind$$3));
  const v$$26 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$$$002Ector$$Z3519D4A3)(this$$$1.cenv, (0, _tast.mkLocalValRef)(v$$25));
  const gps$$2 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_GenericParameters)(v$$26);
  const vslR$$1 = (0, _List.map)(function (list$$15) {
    return (0, _List.map)(function mapping$$8(v$$27) {
      return FSharpExprConvert$$$ConvVal(this$$$1.cenv, v$$27);
    }, list$$15);
  }, patternInput$$14[3]);
  const env$$35 = ExprTranslationImpl$002EExprTranslationEnv$$BindTypars$$5242D310(ExprTranslationImpl$002EExprTranslationEnv$$$get_Empty(), (0, _List.ofSeq)((0, _Seq.zip)(patternInput$$14[0], gps$$2)));
  const env$$36 = ExprTranslationImpl$002EExprTranslationEnv$$BindCurriedVals$$614D085(env$$35, patternInput$$14[3]);
  const e$$32 = FSharpExprConvert$$$ConvExprOnDemand(this$$$1.cenv, env$$36, patternInput$$14[4]);
  return new FSharpImplementationFileDeclaration(1, "MemberOrFunctionOrValue", v$$26, vslR$$1, e$$32);
}

function FSharpImplementationFileContents$$getDecls$$67E46BC5(this$$$2, mdef$$2) {
  switch (mdef$$2.tag) {
    case 0:
      {
        const mexpr = mdef$$2.fields[0];
        return FSharpImplementationFileContents$$getDecls2$$495FC11A(this$$$2, mexpr);
      }

    case 2:
      {
        const bind$$5 = mdef$$2.fields[0];
        const _m$$4 = mdef$$2.fields[1];
        return (0, _List.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.singleton)(FSharpImplementationFileContents$$getBind$$14D453FF(this$$$2, bind$$5));
        }));
      }

    case 3:
      {
        const expr$$16 = mdef$$2.fields[0];
        const _m$$5 = mdef$$2.fields[1];
        return (0, _List.ofSeq)((0, _Seq.delay)(function () {
          const expr$$17 = FSharpExprConvert$$$ConvExprOnDemand(this$$$2.cenv, ExprTranslationImpl$002EExprTranslationEnv$$$get_Empty(), expr$$16);
          return (0, _Seq.singleton)(new FSharpImplementationFileDeclaration(2, "InitAction", expr$$17));
        }));
      }

    case 1:
      {
        const mdefs = mdef$$2.fields[0];
        return (0, _List.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.collect)(function (mdef$$3) {
            return FSharpImplementationFileContents$$getDecls$$67E46BC5(this$$$2, mdef$$3);
          }, mdefs);
        }));
      }

    default:
      {
        const tycons = mdef$$2.fields[1];
        const mbinds = mdef$$2.fields[2];
        const _m$$3 = mdef$$2.fields[3];
        const _isRec = mdef$$2.fields[0];
        return (0, _List.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Seq.collect)(function (tycon) {
            const entity = (0, _Symbols.FSharpEntity$$$$002Ector$$30B979BD)(this$$$2.cenv, (0, _tast.mkLocalEntityRef)(tycon));
            return (0, _Seq.singleton)(new FSharpImplementationFileDeclaration(0, "Entity", entity, (0, _Types.L)()));
          }, tycons), (0, _Seq.delay)(function () {
            return (0, _Seq.collect)(function (mbind) {
              if (mbind.tag === 0) {
                const bind$$4 = mbind.fields[0];
                return (0, _Seq.singleton)(FSharpImplementationFileContents$$getBind$$14D453FF(this$$$2, bind$$4));
              } else {
                const mspec$$2 = mbind.fields[0];
                const def$$1 = mbind.fields[1];
                const entity$$1 = (0, _Symbols.FSharpEntity$$$$002Ector$$30B979BD)(this$$$2.cenv, (0, _tast.mkLocalEntityRef)(mspec$$2));
                return (0, _Seq.singleton)(new FSharpImplementationFileDeclaration(0, "Entity", entity$$1, FSharpImplementationFileContents$$getDecls$$67E46BC5(this$$$2, def$$1)));
              }
            }, mbinds);
          }));
        }));
      }
  }
}

function BasicPatterns$$$$007CValue$007C_$007C(e$$33) {
  const matchValue$$22 = FSharpExpr$$get_E(e$$33);

  if (matchValue$$22.tag === 0) {
    const v$$28 = matchValue$$22.fields[0];
    return v$$28;
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CConst$007C_$007C(e$$34) {
  const matchValue$$23 = FSharpExpr$$get_E(e$$34);

  if (matchValue$$23.tag === 33) {
    const v$$29 = matchValue$$23.fields[0];
    const ty$$36 = matchValue$$23.fields[1];
    return [v$$29, ty$$36];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CTypeLambda$007C_$007C(e$$35) {
  const matchValue$$24 = FSharpExpr$$get_E(e$$35);

  if (matchValue$$24.tag === 5) {
    const v$$30 = matchValue$$24.fields[0];
    const e$$36 = matchValue$$24.fields[1];
    return [v$$30, e$$36];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CLambda$007C_$007C(e$$37) {
  const matchValue$$25 = FSharpExpr$$get_E(e$$37);

  if (matchValue$$25.tag === 4) {
    const v$$31 = matchValue$$25.fields[0];
    const e$$38 = matchValue$$25.fields[1];
    return [v$$31, e$$38];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CApplication$007C_$007C(e$$39) {
  const matchValue$$26 = FSharpExpr$$get_E(e$$39);

  if (matchValue$$26.tag === 3) {
    const tys$$2 = matchValue$$26.fields[1];
    const f$$5 = matchValue$$26.fields[0];
    const e$$40 = matchValue$$26.fields[2];
    return [f$$5, tys$$2, e$$40];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CIfThenElse$007C_$007C(e$$41) {
  const matchValue$$27 = FSharpExpr$$get_E(e$$41);

  if (matchValue$$27.tag === 7) {
    const e3$$1 = matchValue$$27.fields[2];
    const e2$$6 = matchValue$$27.fields[1];
    const e1$$8 = matchValue$$27.fields[0];
    return [e1$$8, e2$$6, e3$$1];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CLet$007C_$007C(e$$42) {
  const matchValue$$28 = FSharpExpr$$get_E(e$$42);

  if (matchValue$$28.tag === 13) {
    const v$$32 = matchValue$$28.fields[0][0];
    const e$$43 = matchValue$$28.fields[0][1];
    const b$$11 = matchValue$$28.fields[1];
    return [[v$$32, e$$43], b$$11];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CLetRec$007C_$007C(e$$44) {
  const matchValue$$29 = FSharpExpr$$get_E(e$$44);

  if (matchValue$$29.tag === 12) {
    const ves$$1 = matchValue$$29.fields[0];
    const b$$12 = matchValue$$29.fields[1];
    return [ves$$1, b$$12];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CNewRecord$007C_$007C(e$$45) {
  const matchValue$$30 = FSharpExpr$$get_E(e$$45);

  if (matchValue$$30.tag === 14) {
    const ty$$37 = matchValue$$30.fields[0];
    const es$$4 = matchValue$$30.fields[1];
    return [ty$$37, es$$4];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CNewUnionCase$007C_$007C(e$$46) {
  const matchValue$$31 = FSharpExpr$$get_E(e$$46);

  if (matchValue$$31.tag === 18) {
    const tys$$3 = matchValue$$31.fields[1];
    const es$$5 = matchValue$$31.fields[2];
    const e$$47 = matchValue$$31.fields[0];
    return [e$$47, tys$$3, es$$5];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CNewTuple$007C_$007C(e$$48) {
  const matchValue$$32 = FSharpExpr$$get_E(e$$48);

  if (matchValue$$32.tag === 24) {
    const ty$$38 = matchValue$$32.fields[0];
    const es$$6 = matchValue$$32.fields[1];
    return [ty$$38, es$$6];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CTupleGet$007C_$007C(e$$49) {
  const matchValue$$33 = FSharpExpr$$get_E(e$$49);

  if (matchValue$$33.tag === 25) {
    const ty$$39 = matchValue$$33.fields[0];
    const n$$5 = matchValue$$33.fields[1] | 0;
    const es$$7 = matchValue$$33.fields[2];
    return [ty$$39, n$$5, es$$7];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CCall$007C_$007C(e$$50) {
  const matchValue$$34 = FSharpExpr$$get_E(e$$50);

  if (matchValue$$34.tag === 10) {
    const e$$51 = matchValue$$34.fields[4];
    const d$$3 = matchValue$$34.fields[3];
    const c$$5 = matchValue$$34.fields[2];
    const b$$13 = matchValue$$34.fields[1];
    const a$$5 = matchValue$$34.fields[0];
    return [a$$5, b$$13, c$$5, d$$3, e$$51];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CNewObject$007C_$007C(e$$52) {
  const matchValue$$35 = FSharpExpr$$get_E(e$$52);

  if (matchValue$$35.tag === 11) {
    const c$$6 = matchValue$$35.fields[2];
    const b$$14 = matchValue$$35.fields[1];
    const a$$6 = matchValue$$35.fields[0];
    return [a$$6, b$$14, c$$6];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CFSharpFieldGet$007C_$007C(e$$53) {
  const matchValue$$36 = FSharpExpr$$get_E(e$$53);

  if (matchValue$$36.tag === 16) {
    const c$$7 = matchValue$$36.fields[2];
    const b$$15 = matchValue$$36.fields[1];
    const a$$7 = matchValue$$36.fields[0];
    return [a$$7, b$$15, c$$7];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CFSharpFieldSet$007C_$007C(e$$54) {
  const matchValue$$37 = FSharpExpr$$get_E(e$$54);

  if (matchValue$$37.tag === 17) {
    const d$$4 = matchValue$$37.fields[3];
    const c$$8 = matchValue$$37.fields[2];
    const b$$16 = matchValue$$37.fields[1];
    const a$$8 = matchValue$$37.fields[0];
    return [a$$8, b$$16, c$$8, d$$4];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CUnionCaseGet$007C_$007C(e$$55) {
  const matchValue$$38 = FSharpExpr$$get_E(e$$55);

  if (matchValue$$38.tag === 19) {
    const d$$5 = matchValue$$38.fields[3];
    const c$$9 = matchValue$$38.fields[2];
    const b$$17 = matchValue$$38.fields[1];
    const a$$9 = matchValue$$38.fields[0];
    return [a$$9, b$$17, c$$9, d$$5];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CUnionCaseTag$007C_$007C(e$$56) {
  const matchValue$$39 = FSharpExpr$$get_E(e$$56);

  if (matchValue$$39.tag === 21) {
    const b$$18 = matchValue$$39.fields[1];
    const a$$10 = matchValue$$39.fields[0];
    return [a$$10, b$$18];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CUnionCaseTest$007C_$007C(e$$57) {
  const matchValue$$40 = FSharpExpr$$get_E(e$$57);

  if (matchValue$$40.tag === 22) {
    const c$$10 = matchValue$$40.fields[2];
    const b$$19 = matchValue$$40.fields[1];
    const a$$11 = matchValue$$40.fields[0];
    return [a$$11, b$$19, c$$10];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CNewArray$007C_$007C(e$$58) {
  const matchValue$$41 = FSharpExpr$$get_E(e$$58);

  if (matchValue$$41.tag === 27) {
    const b$$20 = matchValue$$41.fields[1];
    const a$$12 = matchValue$$41.fields[0];
    return [a$$12, b$$20];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CCoerce$007C_$007C(e$$59) {
  const matchValue$$42 = FSharpExpr$$get_E(e$$59);

  if (matchValue$$42.tag === 26) {
    const b$$21 = matchValue$$42.fields[1];
    const a$$13 = matchValue$$42.fields[0];
    return [a$$13, b$$21];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CQuote$007C_$007C(e$$60) {
  const matchValue$$43 = FSharpExpr$$get_E(e$$60);

  if (matchValue$$43.tag === 6) {
    const a$$14 = matchValue$$43.fields[0];
    return a$$14;
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CTypeTest$007C_$007C(e$$61) {
  const matchValue$$44 = FSharpExpr$$get_E(e$$61);

  if (matchValue$$44.tag === 28) {
    const b$$22 = matchValue$$44.fields[1];
    const a$$15 = matchValue$$44.fields[0];
    return [a$$15, b$$22];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CSequential$007C_$007C(e$$62) {
  const matchValue$$45 = FSharpExpr$$get_E(e$$62);

  if (matchValue$$45.tag === 35) {
    const b$$23 = matchValue$$45.fields[1];
    const a$$16 = matchValue$$45.fields[0];
    return [a$$16, b$$23];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CFastIntegerForLoop$007C_$007C(e$$63) {
  const matchValue$$46 = FSharpExpr$$get_E(e$$63);

  if (matchValue$$46.tag === 36) {
    const d$$6 = matchValue$$46.fields[3];
    const c$$11 = matchValue$$46.fields[2];
    const b$$24 = matchValue$$46.fields[1];
    const a$$17 = matchValue$$46.fields[0];
    return [a$$17, b$$24, c$$11, d$$6];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CWhileLoop$007C_$007C(e$$64) {
  const matchValue$$47 = FSharpExpr$$get_E(e$$64);

  if (matchValue$$47.tag === 37) {
    const b$$25 = matchValue$$47.fields[1];
    const a$$18 = matchValue$$47.fields[0];
    return [a$$18, b$$25];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CTryFinally$007C_$007C(e$$65) {
  const matchValue$$48 = FSharpExpr$$get_E(e$$65);

  if (matchValue$$48.tag === 38) {
    const b$$26 = matchValue$$48.fields[1];
    const a$$19 = matchValue$$48.fields[0];
    return [a$$19, b$$26];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CTryWith$007C_$007C(e$$66) {
  const matchValue$$49 = FSharpExpr$$get_E(e$$66);

  if (matchValue$$49.tag === 39) {
    const e$$67 = matchValue$$49.fields[4];
    const d$$7 = matchValue$$49.fields[3];
    const c$$12 = matchValue$$49.fields[2];
    const b$$27 = matchValue$$49.fields[1];
    const a$$20 = matchValue$$49.fields[0];
    return [a$$20, b$$27, c$$12, d$$7, e$$67];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CNewDelegate$007C_$007C(e$$68) {
  const matchValue$$50 = FSharpExpr$$get_E(e$$68);

  if (matchValue$$50.tag === 40) {
    const ty$$40 = matchValue$$50.fields[0];
    const e$$69 = matchValue$$50.fields[1];
    return [ty$$40, e$$69];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CDefaultValue$007C_$007C(e$$70) {
  const matchValue$$51 = FSharpExpr$$get_E(e$$70);

  if (matchValue$$51.tag === 32) {
    const ty$$41 = matchValue$$51.fields[0];
    return ty$$41;
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CAddressSet$007C_$007C(e$$71) {
  const matchValue$$52 = FSharpExpr$$get_E(e$$71);

  if (matchValue$$52.tag === 29) {
    const b$$28 = matchValue$$52.fields[1];
    const a$$21 = matchValue$$52.fields[0];
    return [a$$21, b$$28];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CValueSet$007C_$007C(e$$72) {
  const matchValue$$53 = FSharpExpr$$get_E(e$$72);

  if (matchValue$$53.tag === 30) {
    const b$$29 = matchValue$$53.fields[1];
    const a$$22 = matchValue$$53.fields[0];
    return [a$$22, b$$29];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CAddressOf$007C_$007C(e$$73) {
  const matchValue$$54 = FSharpExpr$$get_E(e$$73);

  if (matchValue$$54.tag === 34) {
    const a$$23 = matchValue$$54.fields[0];
    return a$$23;
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CThisValue$007C_$007C(e$$74) {
  const matchValue$$55 = FSharpExpr$$get_E(e$$74);

  if (matchValue$$55.tag === 1) {
    const a$$24 = matchValue$$55.fields[0];
    return a$$24;
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CBaseValue$007C_$007C(e$$75) {
  const matchValue$$56 = FSharpExpr$$get_E(e$$75);

  if (matchValue$$56.tag === 2) {
    const a$$25 = matchValue$$56.fields[0];
    return a$$25;
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CILAsm$007C_$007C(e$$76) {
  const matchValue$$57 = FSharpExpr$$get_E(e$$76);

  if (matchValue$$57.tag === 43) {
    const c$$13 = matchValue$$57.fields[2];
    const b$$30 = matchValue$$57.fields[1];
    const a$$26 = matchValue$$57.fields[0];
    return [a$$26, b$$30, c$$13];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CILFieldGet$007C_$007C(e$$77) {
  const matchValue$$58 = FSharpExpr$$get_E(e$$77);

  if (matchValue$$58.tag === 41) {
    const c$$14 = matchValue$$58.fields[2];
    const b$$31 = matchValue$$58.fields[1];
    const a$$27 = matchValue$$58.fields[0];
    return [a$$27, b$$31, c$$14];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CILFieldSet$007C_$007C(e$$78) {
  const matchValue$$59 = FSharpExpr$$get_E(e$$78);

  if (matchValue$$59.tag === 42) {
    const d$$8 = matchValue$$59.fields[3];
    const c$$15 = matchValue$$59.fields[2];
    const b$$32 = matchValue$$59.fields[1];
    const a$$28 = matchValue$$59.fields[0];
    return [a$$28, b$$32, c$$15, d$$8];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CObjectExpr$007C_$007C(e$$79) {
  const matchValue$$60 = FSharpExpr$$get_E(e$$79);

  if (matchValue$$60.tag === 15) {
    const d$$9 = matchValue$$60.fields[3];
    const c$$16 = matchValue$$60.fields[2];
    const b$$33 = matchValue$$60.fields[1];
    const a$$29 = matchValue$$60.fields[0];
    return [a$$29, b$$33, c$$16, d$$9];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CDecisionTree$007C_$007C(e$$80) {
  const matchValue$$61 = FSharpExpr$$get_E(e$$80);

  if (matchValue$$61.tag === 8) {
    const b$$34 = matchValue$$61.fields[1];
    const a$$30 = matchValue$$61.fields[0];
    return [a$$30, b$$34];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CDecisionTreeSuccess$007C_$007C(e$$81) {
  const matchValue$$62 = FSharpExpr$$get_E(e$$81);

  if (matchValue$$62.tag === 9) {
    const b$$35 = matchValue$$62.fields[1];
    const a$$31 = matchValue$$62.fields[0] | 0;
    return [a$$31, b$$35];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CUnionCaseSet$007C_$007C(e$$82) {
  const matchValue$$63 = FSharpExpr$$get_E(e$$82);

  if (matchValue$$63.tag === 20) {
    const e$$83 = matchValue$$63.fields[4];
    const d$$10 = matchValue$$63.fields[3];
    const c$$17 = matchValue$$63.fields[2];
    const b$$36 = matchValue$$63.fields[1];
    const a$$32 = matchValue$$63.fields[0];
    return [a$$32, b$$36, c$$17, d$$10, e$$83];
  } else {
    return null;
  }
}

function BasicPatterns$$$$007CTraitCall$007C_$007C(e$$84) {
  const matchValue$$64 = FSharpExpr$$get_E(e$$84);

  if (matchValue$$64.tag === 23) {
    const f$$6 = matchValue$$64.fields[5];
    const e$$85 = matchValue$$64.fields[4];
    const d$$11 = matchValue$$64.fields[3];
    const c$$18 = matchValue$$64.fields[2];
    const b$$37 = matchValue$$64.fields[1];
    const a$$33 = matchValue$$64.fields[0];
    return [a$$33, b$$37, c$$18, d$$11, e$$85, f$$6];
  } else {
    return null;
  }
}