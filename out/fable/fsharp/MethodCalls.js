"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallerArg$00601$$get_Type = CallerArg$00601$$get_Type;
exports.CallerArg$00601$$get_Range = CallerArg$00601$$get_Range;
exports.CallerArg$00601$$get_IsOptional = CallerArg$00601$$get_IsOptional;
exports.CallerArg$00601$$get_Expr = CallerArg$00601$$get_Expr;
exports.GetCalledArg = GetCalledArg;
exports.AssignedCalledArg$00601$$get_Position = AssignedCalledArg$00601$$get_Position;
exports.CallerNamedArg$00601$$get_Ident = CallerNamedArg$00601$$get_Ident;
exports.CallerNamedArg$00601$$get_Name = CallerNamedArg$00601$$get_Name;
exports.CallerNamedArg$00601$$get_CallerArg = CallerNamedArg$00601$$get_CallerArg;
exports.AdjustCalledArgType = AdjustCalledArgType;
exports.CalledMethArgSet$00601$$get_NumUnnamedCallerArgs = CalledMethArgSet$00601$$get_NumUnnamedCallerArgs;
exports.CalledMethArgSet$00601$$get_NumAssignedNamedArgs = CalledMethArgSet$00601$$get_NumAssignedNamedArgs;
exports.CalledMethArgSet$00601$$get_NumUnnamedCalledArgs = CalledMethArgSet$00601$$get_NumUnnamedCalledArgs;
exports.MakeCalledArgs = MakeCalledArgs;
exports.CalledMeth$00601$$$$002Ector$$Z3D1385F = CalledMeth$00601$$$$002Ector$$Z3D1385F;
exports.CalledMeth$00601$$get_infoReader = CalledMeth$00601$$get_infoReader;
exports.CalledMeth$00601$$get_amap = CalledMeth$00601$$get_amap;
exports.CalledMeth$00601$$get_Method = CalledMeth$00601$$get_Method;
exports.CalledMeth$00601$$get_CalledTyArgs = CalledMeth$00601$$get_CalledTyArgs;
exports.CalledMeth$00601$$get_CalledTyparInst = CalledMeth$00601$$get_CalledTyparInst;
exports.CalledMeth$00601$$get_CallerTyArgs = CalledMeth$00601$$get_CallerTyArgs;
exports.CalledMeth$00601$$get_CallerObjArgTys = CalledMeth$00601$$get_CallerObjArgTys;
exports.CalledMeth$00601$$get_ArgSets = CalledMeth$00601$$get_ArgSets;
exports.CalledMeth$00601$$get_CalledReturnTypeAfterByrefDeref = CalledMeth$00601$$get_CalledReturnTypeAfterByrefDeref;
exports.CalledMeth$00601$$get_CalledReturnTypeAfterOutArgTupling = CalledMeth$00601$$get_CalledReturnTypeAfterOutArgTupling;
exports.CalledMeth$00601$$get_AssignedItemSetters = CalledMeth$00601$$get_AssignedItemSetters;
exports.CalledMeth$00601$$get_AssociatedPropertyInfo = CalledMeth$00601$$get_AssociatedPropertyInfo;
exports.CalledMeth$00601$$get_UnassignedNamedArgs = CalledMeth$00601$$get_UnassignedNamedArgs;
exports.CalledMeth$00601$$get_AttributeAssignedNamedArgs = CalledMeth$00601$$get_AttributeAssignedNamedArgs;
exports.CalledMeth$00601$$get_UnnamedCalledOptArgs = CalledMeth$00601$$get_UnnamedCalledOptArgs;
exports.CalledMeth$00601$$get_UnnamedCalledOutArgs = CalledMeth$00601$$get_UnnamedCalledOutArgs;
exports.CalledMeth$00601$$$GetMethod$$1BF99E32 = CalledMeth$00601$$$GetMethod$$1BF99E32;
exports.CalledMeth$00601$$get_NumArgSets = CalledMeth$00601$$get_NumArgSets;
exports.CalledMeth$00601$$get_HasOptArgs = CalledMeth$00601$$get_HasOptArgs;
exports.CalledMeth$00601$$get_HasOutArgs = CalledMeth$00601$$get_HasOutArgs;
exports.CalledMeth$00601$$get_UsesParamArrayConversion = CalledMeth$00601$$get_UsesParamArrayConversion;
exports.CalledMeth$00601$$get_ParamArrayCalledArgOpt = CalledMeth$00601$$get_ParamArrayCalledArgOpt;
exports.CalledMeth$00601$$get_ParamArrayCallerArgs = CalledMeth$00601$$get_ParamArrayCallerArgs;
exports.CalledMeth$00601$$get_ParamArrayElementType = CalledMeth$00601$$get_ParamArrayElementType;
exports.CalledMeth$00601$$get_NumAssignedProps = CalledMeth$00601$$get_NumAssignedProps;
exports.CalledMeth$00601$$CalledObjArgTys$$4DB9192C = CalledMeth$00601$$CalledObjArgTys$$4DB9192C;
exports.CalledMeth$00601$$get_NumCalledTyArgs = CalledMeth$00601$$get_NumCalledTyArgs;
exports.CalledMeth$00601$$get_NumCallerTyArgs = CalledMeth$00601$$get_NumCallerTyArgs;
exports.CalledMeth$00601$$get_AssignsAllNamedArgs = CalledMeth$00601$$get_AssignsAllNamedArgs;
exports.CalledMeth$00601$$get_HasCorrectArity = CalledMeth$00601$$get_HasCorrectArity;
exports.CalledMeth$00601$$get_HasCorrectGenericArity = CalledMeth$00601$$get_HasCorrectGenericArity;
exports.CalledMeth$00601$$IsAccessible$$Z2A1B6767 = CalledMeth$00601$$IsAccessible$$Z2A1B6767;
exports.CalledMeth$00601$$HasCorrectObjArgs$$4DB9192C = CalledMeth$00601$$HasCorrectObjArgs$$4DB9192C;
exports.CalledMeth$00601$$IsCandidate$$Z2A1B6767 = CalledMeth$00601$$IsCandidate$$Z2A1B6767;
exports.CalledMeth$00601$$get_AssignedUnnamedArgs = CalledMeth$00601$$get_AssignedUnnamedArgs;
exports.CalledMeth$00601$$get_AssignedNamedArgs = CalledMeth$00601$$get_AssignedNamedArgs;
exports.CalledMeth$00601$$get_AllUnnamedCalledArgs = CalledMeth$00601$$get_AllUnnamedCalledArgs;
exports.CalledMeth$00601$$get_TotalNumUnnamedCalledArgs = CalledMeth$00601$$get_TotalNumUnnamedCalledArgs;
exports.CalledMeth$00601$$get_TotalNumUnnamedCallerArgs = CalledMeth$00601$$get_TotalNumUnnamedCallerArgs;
exports.CalledMeth$00601$$get_TotalNumAssignedNamedArgs = CalledMeth$00601$$get_TotalNumAssignedNamedArgs;
exports.NamesOfCalledArgs = NamesOfCalledArgs;
exports.InferLambdaArgsForLambdaPropagation = InferLambdaArgsForLambdaPropagation;
exports.ExamineArgumentForLambdaPropagation = ExamineArgumentForLambdaPropagation;
exports.ExamineMethodForLambdaPropagation = ExamineMethodForLambdaPropagation;
exports.IsBaseCall = IsBaseCall;
exports.ComputeConstrainedCallInfo = ComputeConstrainedCallInfo;
exports.TakeObjAddrForMethodCall = TakeObjAddrForMethodCall;
exports.BuildILMethInfoCall = BuildILMethInfoCall;
exports.BuildObjCtorCall = BuildObjCtorCall;
exports.BuildFSharpMethodApp = BuildFSharpMethodApp;
exports.BuildFSharpMethodCall = BuildFSharpMethodCall;
exports.MakeMethInfoCall = MakeMethInfoCall;
exports.BuildMethodCall = BuildMethodCall;
exports.BuildNewDelegateExpr = BuildNewDelegateExpr;
exports.CoerceFromFSharpFuncToDelegate = CoerceFromFSharpFuncToDelegate;
exports.RecdFieldInstanceChecks = RecdFieldInstanceChecks;
exports.ILFieldInstanceChecks = ILFieldInstanceChecks;
exports.MethInfoChecks = MethInfoChecks;
exports.CheckRecdFieldMutation = CheckRecdFieldMutation;
exports.FieldNotMutable = exports.ArgumentAnalysis = exports.CalledMeth$00601 = exports.CalledMethArgSet$00601 = exports.CallerNamedArg$00601 = exports.AssignedItemSetter$00601 = exports.AssignedItemSetterTarget = exports.AssignedCalledArg$00601 = exports.CalledArg = exports.CallerArg$00601 = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _ast = require("./ast");

var _InfoReader = require("./InfoReader");

var _TastOps = require("./TastOps");

var _AccessibilityLogic = require("./AccessibilityLogic");

var _TcGlobals = require("./TcGlobals");

var _List = require("../fable-core.2.0.3/List");

var _infos = require("./infos");

var _illib = require("../absil/illib");

var _Option = require("../fable-core.2.0.3/Option");

var _NameResolution = require("./NameResolution");

var _lib = require("./lib");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _import = require("./import");

var _Seq = require("../fable-core.2.0.3/Seq");

var _tast = require("./tast");

var _Util = require("../fable-core.2.0.3/Util");

var _TypeRelations = require("./TypeRelations");

var _il = require("../absil/il");

var _String = require("../fable-core.2.0.3/String");

var _layout = require("./layout");

var _AttributeChecking = require("./AttributeChecking");

const CallerArg$00601 = (0, _Types.declare)(function CallerArg$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CallerArg$00601 = CallerArg$00601;

function CallerArg$00601$$get_Type(x) {
  const ty = x.fields[0];
  return ty;
}

function CallerArg$00601$$get_Range(x$$1) {
  const m = x$$1.fields[1];
  return m;
}

function CallerArg$00601$$get_IsOptional(x$$2) {
  const isOpt = x$$2.fields[2];
  return isOpt;
}

function CallerArg$00601$$get_Expr(x$$3) {
  const expr = x$$3.fields[3];
  return expr;
}

const CalledArg = (0, _Types.declare)(function CalledArg(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.Position = arg1;
  this.IsParamArray = arg2;
  this.OptArgInfo = arg3;
  this.CallerInfo = arg4;
  this.IsInArg = arg5;
  this.IsOutArg = arg6;
  this.ReflArgInfo = arg7;
  this.NameOpt = arg8;
  this.CalledArgumentType = arg9;
}, _Types.Record);
exports.CalledArg = CalledArg;

function GetCalledArg(pos, isParamArray, optArgInfo, callerInfo, isInArg, isOutArg, nameOpt, reflArgInfo, calledArgTy) {
  return new CalledArg(pos, isParamArray, optArgInfo, callerInfo, isInArg, isOutArg, reflArgInfo, nameOpt, calledArgTy);
}

const AssignedCalledArg$00601 = (0, _Types.declare)(function AssignedCalledArg$00601(arg1, arg2, arg3) {
  this.NamedArgIdOpt = arg1;
  this.CalledArg = arg2;
  this.CallerArg = arg3;
}, _Types.Record);
exports.AssignedCalledArg$00601 = AssignedCalledArg$00601;

function AssignedCalledArg$00601$$get_Position(x$$4) {
  return x$$4.CalledArg.Position;
}

const AssignedItemSetterTarget = (0, _Types.declare)(function AssignedItemSetterTarget(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AssignedItemSetterTarget = AssignedItemSetterTarget;
const AssignedItemSetter$00601 = (0, _Types.declare)(function AssignedItemSetter$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AssignedItemSetter$00601 = AssignedItemSetter$00601;
const CallerNamedArg$00601 = (0, _Types.declare)(function CallerNamedArg$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CallerNamedArg$00601 = CallerNamedArg$00601;

function CallerNamedArg$00601$$get_Ident(x$$5) {
  const id = x$$5.fields[0];
  return id;
}

function CallerNamedArg$00601$$get_Name(x$$6) {
  let copyOfStruct = CallerNamedArg$00601$$get_Ident(x$$6);
  return (0, _ast.Ident$$get_idText)(copyOfStruct);
}

function CallerNamedArg$00601$$get_CallerArg(x$$7) {
  const a = x$$7.fields[1];
  return a;
}

function AdjustCalledArgType(infoReader, isConstraint, calledArg, callerArg) {
  const g = (0, _InfoReader.InfoReader$$get_g)(infoReader);
  const calledArgTy$$1 = calledArg.CalledArgumentType;
  const callerArgTy = CallerArg$00601$$get_Type(callerArg);
  const m$$1 = CallerArg$00601$$get_Range(callerArg);

  if (isConstraint) {
    return calledArgTy$$1;
  } else if ((0, _TastOps.isInByrefTy)(g, calledArgTy$$1)) {
    return calledArgTy$$1;
  } else if ((0, _TastOps.isByrefTy)(g, calledArgTy$$1)) {
    if ((0, _TastOps.isByrefTy)(g, callerArgTy)) {
      return calledArgTy$$1;
    } else {
      return (0, _TastOps.mkRefCellTy)(g, (0, _TastOps.destByrefTy)(g, calledArgTy$$1));
    }
  } else {
    let calledArgTy$$3;

    const adjustDelegateTy = function adjustDelegateTy(calledTy) {
      const patternInput = (0, _InfoReader.GetSigOfFunctionForDelegate)(infoReader, calledTy, m$$1, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"));
      const fty = patternInput.fields[3];
      const delArgTys = patternInput.fields[1];
      const delArgTys$$1 = delArgTys.tail == null ? (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_unit_ty)(g), (0, _Types.L)()) : delArgTys;

      if ((0, _List.length)((0, _TastOps.stripFunTy)(g, callerArgTy)[0]) === (0, _List.length)(delArgTys$$1)) {
        return fty;
      } else {
        return calledArgTy$$1;
      }
    };

    if ((0, _TastOps.isDelegateTy)(g, calledArgTy$$1) ? (0, _TastOps.isFunTy)(g, callerArgTy) : false) {
      calledArgTy$$3 = adjustDelegateTy(calledArgTy$$1);
    } else if ((0, _TastOps.isLinqExpressionTy)(g, calledArgTy$$1) ? (0, _TastOps.isFunTy)(g, callerArgTy) : false) {
      const origArgTy = calledArgTy$$1;
      const calledArgTy$$2 = (0, _TastOps.destLinqExpressionTy)(g, calledArgTy$$1);
      calledArgTy$$3 = (0, _TastOps.isDelegateTy)(g, calledArgTy$$2) ? adjustDelegateTy(calledArgTy$$2) : origArgTy;
    } else if (((0, _infos.ReflectedArgInfo$$get_AutoQuote)(calledArg.ReflArgInfo) ? (0, _TastOps.isQuotedExprTy)(g, calledArgTy$$1) : false) ? !(0, _TastOps.isQuotedExprTy)(g, callerArgTy) : false) {
      calledArgTy$$3 = (0, _TastOps.destQuotedExprTy)(g, calledArgTy$$1);
    } else {
      calledArgTy$$3 = calledArgTy$$1;
    }

    let calledArgTy$$4;
    var $target$$10;

    if (calledArg.OptArgInfo.tag === 0) {
      $target$$10 = 0;
    } else if (calledArg.OptArgInfo.tag === 1) {
      if (!CallerArg$00601$$get_IsOptional(callerArg) ? (0, _TastOps.isOptionTy)(g, calledArgTy$$3) : false) {
        $target$$10 = 1;
      } else {
        $target$$10 = 2;
      }
    } else {
      $target$$10 = 2;
    }

    switch ($target$$10) {
      case 0:
        {
          calledArgTy$$4 = calledArgTy$$3;
          break;
        }

      case 1:
        {
          calledArgTy$$4 = (0, _TastOps.destOptionTy)(g, calledArgTy$$3);
          break;
        }

      case 2:
        {
          var $target$$11;

          if (calledArg.OptArgInfo.tag === 1) {
            $target$$11 = 0;
          } else if (calledArg.OptArgInfo.tag === 2) {
            $target$$11 = 0;
          } else {
            $target$$11 = 1;
          }

          switch ($target$$11) {
            case 0:
              {
                calledArgTy$$4 = calledArgTy$$3;
                break;
              }

            case 1:
              {
                throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/MethodCalls.fs", 183, 22);
                break;
              }
          }

          break;
        }
    }

    return calledArgTy$$4;
  }
}

const CalledMethArgSet$00601 = (0, _Types.declare)(function CalledMethArgSet$00601(arg1, arg2, arg3, arg4, arg5) {
  this.UnnamedCalledArgs = arg1;
  this.UnnamedCallerArgs = arg2;
  this.ParamArrayCalledArgOpt = arg3;
  this.ParamArrayCallerArgs = arg4;
  this.AssignedNamedArgs = arg5;
}, _Types.Record);
exports.CalledMethArgSet$00601 = CalledMethArgSet$00601;

function CalledMethArgSet$00601$$get_NumUnnamedCallerArgs(x$$8) {
  return (0, _List.length)(x$$8.UnnamedCallerArgs);
}

function CalledMethArgSet$00601$$get_NumAssignedNamedArgs(x$$9) {
  return (0, _List.length)(x$$9.AssignedNamedArgs);
}

function CalledMethArgSet$00601$$get_NumUnnamedCalledArgs(x$$10) {
  return (0, _List.length)(x$$10.UnnamedCalledArgs);
}

function MakeCalledArgs(amap, m$$2, minfo, minst) {
  const paramDatas = (0, _infos.MethInfo$$GetParamDatas$$Z5D984B3C)(minfo, amap, m$$2, minst);
  return (0, _illib.List$$$mapiSquared)(function f(i, j, _arg1) {
    const typeOfCalledArg = _arg1.fields[7];
    const reflArgInfo$$1 = _arg1.fields[6];
    const optArgInfo$$1 = _arg1.fields[3];
    const nmOpt = _arg1.fields[5];
    const isParamArrayArg = _arg1.fields[0];
    const isOutArg$$1 = _arg1.fields[2];
    const isInArg$$1 = _arg1.fields[1];
    const callerInfoFlags = _arg1.fields[4];
    return new CalledArg([i, j], isParamArrayArg, optArgInfo$$1, callerInfoFlags, isInArg$$1, isOutArg$$1, reflArgInfo$$1, nmOpt, typeOfCalledArg);
  }, paramDatas);
}

const CalledMeth$00601 = (0, _Types.declare)(function CalledMeth$00601(infoReader$$1, nameEnv, isCheckingAttributeCall, freshenMethInfo, m$$3, ad, minfo$$1, calledTyArgs, callerTyArgs, pinfoOpt, callerObjArgTys, curriedCallerArgs, allowParamArgs, allowOutAndOptArgs, tyargsOpt) {
  const $this$$1 = this;
  $this$$1["infoReader@229"] = infoReader$$1;
  $this$$1.minfo = minfo$$1;
  $this$$1.calledTyArgs = calledTyArgs;
  $this$$1.callerTyArgs = callerTyArgs;
  $this$$1.pinfoOpt = pinfoOpt;
  $this$$1.callerObjArgTys = callerObjArgTys;
  $this$$1.g = (0, _InfoReader.InfoReader$$get_g)($this$$1["infoReader@229"]);
  $this$$1.methodRetTy = (0, _infos.MethInfo$$GetFSharpReturnTy$$Z5D984B3C)($this$$1.minfo, (0, _InfoReader.InfoReader$$get_amap)($this$$1["infoReader@229"]), m$$3, $this$$1.calledTyArgs);
  const fullCurriedCalledArgs = MakeCalledArgs((0, _InfoReader.InfoReader$$get_amap)($this$$1["infoReader@229"]), m$$3, $this$$1.minfo, $this$$1.calledTyArgs);
  const argSetInfos = (0, _List.map2)(function mapping$$1(tupledArg, fullCalledArgs) {
    const unnamedCalledArgs = (0, _List.filter)(function predicate$$1(calledArg$$1) {
      if (calledArg$$1.NameOpt == null) {
        return true;
      } else {
        const nm = calledArg$$1.NameOpt;
        return (0, _List.forAll)(function predicate(_arg1$$1) {
          const nm2 = _arg1$$1.fields[0];
          const _e = _arg1$$1.fields[1];
          return (0, _ast.Ident$$get_idText)(nm) !== (0, _ast.Ident$$get_idText)(nm2);
        }, tupledArg[1]);
      }
    }, fullCalledArgs);
    let patternInput$$2;
    const nUnnamedCallerArgs = (0, _List.length)(tupledArg[0]) | 0;
    const nUnnamedCalledArgs = (0, _List.length)(unnamedCalledArgs) | 0;

    if (allowOutAndOptArgs ? nUnnamedCallerArgs < nUnnamedCalledArgs : false) {
      const patternInput$$1 = (0, _List.splitAt)(nUnnamedCallerArgs, unnamedCalledArgs);
      patternInput$$2 = (0, _List.forAll)(function predicate$$2(x$$11) {
        if (x$$11.IsOutArg) {
          return (0, _TastOps.isByrefTy)($this$$1.g, x$$11.CalledArgumentType);
        } else {
          return false;
        }
      }, patternInput$$1[1]) ? [nUnnamedCallerArgs - 1, patternInput$$1[0], (0, _Types.L)(), patternInput$$1[1]] : (0, _List.forAll)(function predicate$$3(x$$12) {
        return (0, _infos.OptionalArgInfo$$get_IsOptional)(x$$12.OptArgInfo);
      }, patternInput$$1[1]) ? [nUnnamedCallerArgs - 1, patternInput$$1[0], patternInput$$1[1], (0, _Types.L)()] : [nUnnamedCalledArgs - 1, unnamedCalledArgs, (0, _Types.L)(), (0, _Types.L)()];
    } else {
      patternInput$$2 = [nUnnamedCalledArgs - 1, unnamedCalledArgs, (0, _Types.L)(), (0, _Types.L)()];
    }

    let patternInput$$4;
    let supportsParamArgs;

    if (allowParamArgs ? patternInput$$2[0] >= 0 : false) {
      const calledArg$$2 = (0, _List.last)(patternInput$$2[1]);
      supportsParamArgs = calledArg$$2.IsParamArray ? (0, _TastOps.isArray1DTy)($this$$1.g, calledArg$$2.CalledArgumentType) : false;
    } else {
      supportsParamArgs = false;
    }

    if (supportsParamArgs ? (0, _List.length)(tupledArg[0]) >= patternInput$$2[0] : false) {
      const patternInput$$3 = (0, _illib.List$$$frontAndBack)(patternInput$$2[1]);
      patternInput$$4 = [(0, _List.splitAt)(patternInput$$2[0], tupledArg[0]), patternInput$$3[0], patternInput$$3[1]];
    } else {
      patternInput$$4 = [[tupledArg[0], (0, _Types.L)()], patternInput$$2[1], null];
    }

    const unnamedCallerArgs$$1 = patternInput$$4[0][0];
    const paramArrayCallerArgs = patternInput$$4[0][1];
    const assignedNamedArgs = (0, _List.choose)(function chooser$$1(calledArg$$3) {
      if (calledArg$$3.NameOpt != null) {
        const nm$$1 = calledArg$$3.NameOpt;
        return (0, _List.tryPick)(function chooser(_arg2) {
          const nm2$$1 = _arg2.fields[0];
          const callerArg$$1 = _arg2.fields[1];

          if ((0, _ast.Ident$$get_idText)(nm$$1) === (0, _ast.Ident$$get_idText)(nm2$$1)) {
            return new AssignedCalledArg$00601(nm2$$1, calledArg$$3, callerArg$$1);
          } else {
            return null;
          }
        }, tupledArg[1]);
      } else {
        return null;
      }
    }, fullCalledArgs);
    const unassignedNamedItems = (0, _List.filter)(function predicate$$5(_arg3) {
      const nm$$2 = _arg3.fields[0];
      const _e$$1 = _arg3.fields[1];
      return (0, _List.forAll)(function predicate$$4(calledArg$$4) {
        if (calledArg$$4.NameOpt == null) {
          return true;
        } else {
          const nm2$$2 = calledArg$$4.NameOpt;
          return (0, _ast.Ident$$get_idText)(nm$$2) !== (0, _ast.Ident$$get_idText)(nm2$$2);
        }
      }, fullCalledArgs);
    }, tupledArg[1]);
    const attributeAssignedNamedItems = isCheckingAttributeCall ? unassignedNamedItems : (0, _Types.L)();
    let patternInput$$5;
    const returnedObjTy = (0, _infos.MethInfo$$get_IsConstructor)($this$$1.minfo) ? (0, _infos.MethInfo$$get_ApparentEnclosingType)($this$$1.minfo) : $this$$1.methodRetTy;
    patternInput$$5 = (0, _illib.List$$$splitChoose)(function select(_arg4) {
      var pinfo$$2, pinfo;
      const arg = _arg4;
      const id$$1 = arg.fields[0];
      const e = arg.fields[1];
      const nm$$3 = (0, _ast.Ident$$get_idText)(id$$1);
      const pinfos = (0, _InfoReader.GetIntrinsicPropInfoSetsOfType)($this$$1["infoReader@229"], nm$$3, ad, new _infos.AllowMultiIntfInstantiations(0, "Yes"), new _InfoReader.FindMemberFlag(0, "IgnoreOverrides"), (0, _ast.Ident$$get_idRange)(id$$1), returnedObjTy);
      const pinfos$$2 = (0, _InfoReader.ExcludeHiddenOfPropInfos)($this$$1.g, (0, _InfoReader.InfoReader$$get_amap)($this$$1["infoReader@229"]), m$$3, pinfos);
      var $target$$12, pinfo$$1;

      if (pinfos$$2.tail != null) {
        if (pinfos$$2.tail.tail == null) {
          if (pinfo = pinfos$$2.head, (0, _infos.PropInfo$$get_HasSetter)(pinfo) ? !(0, _infos.PropInfo$$get_IsIndexer)(pinfo) : false) {
            $target$$12 = 0;
            pinfo$$1 = pinfos$$2.head;
          } else {
            $target$$12 = 1;
          }
        } else {
          $target$$12 = 1;
        }
      } else {
        $target$$12 = 1;
      }

      switch ($target$$12) {
        case 0:
          {
            const pminfo = (0, _infos.PropInfo$$get_SetterMethod)(pinfo$$1);
            const pminst = freshenMethInfo(m$$3, pminfo);
            return new _Option.Choice(0, "Choice1Of2", new AssignedItemSetter$00601(0, "AssignedItemSetter", id$$1, new AssignedItemSetterTarget(0, "AssignedPropSetter", pinfo$$1, pminfo, pminst), e));
          }

        case 1:
          {
            let epinfos;

            if (nameEnv != null) {
              const ne = nameEnv;
              epinfos = (0, _NameResolution.ExtensionPropInfosOfTypeInScope)($this$$1["infoReader@229"], ne, nm$$3, ad, m$$3, returnedObjTy);
            } else {
              epinfos = (0, _Types.L)();
            }

            var $target$$13, pinfo$$3;

            if (epinfos.tail != null) {
              if (epinfos.tail.tail == null) {
                if (pinfo$$2 = epinfos.head, (0, _infos.PropInfo$$get_HasSetter)(pinfo$$2) ? !(0, _infos.PropInfo$$get_IsIndexer)(pinfo$$2) : false) {
                  $target$$13 = 0;
                  pinfo$$3 = epinfos.head;
                } else {
                  $target$$13 = 1;
                }
              } else {
                $target$$13 = 1;
              }
            } else {
              $target$$13 = 1;
            }

            switch ($target$$13) {
              case 0:
                {
                  const pminfo$$1 = (0, _infos.PropInfo$$get_SetterMethod)(pinfo$$3);
                  const pminst$$1 = $this$$1.minfo.tag === 0 ? $this$$1.minfo.fields[1].tag === 1 ? $this$$1.minfo.fields[1].fields[1] : freshenMethInfo(m$$3, pminfo$$1) : freshenMethInfo(m$$3, pminfo$$1);
                  const pminst$$2 = tyargsOpt != null ? tyargsOpt.tag === 1 ? tyargsOpt.fields[1] : pminst$$1 : pminst$$1;
                  return new _Option.Choice(0, "Choice1Of2", new AssignedItemSetter$00601(0, "AssignedItemSetter", id$$1, new AssignedItemSetterTarget(0, "AssignedPropSetter", pinfo$$3, pminfo$$1, pminst$$2), e));
                }

              case 1:
                {
                  const matchValue$$5 = (0, _InfoReader.InfoReader$$GetILFieldInfosOfType$$Z5B2D1E7B)($this$$1["infoReader@229"], nm$$3, ad, m$$3, returnedObjTy);

                  if (matchValue$$5.tail != null) {
                    const finfo = matchValue$$5.head;
                    return new _Option.Choice(0, "Choice1Of2", new AssignedItemSetter$00601(0, "AssignedItemSetter", id$$1, new AssignedItemSetterTarget(1, "AssignedILFieldSetter", finfo), e));
                  } else {
                    const matchValue$$6 = (0, _InfoReader.InfoReader$$TryFindRecdOrClassFieldInfoOfType$$ZE7EC41B)($this$$1["infoReader@229"], nm$$3, m$$3, returnedObjTy);

                    if (matchValue$$6 == null) {
                      return new _Option.Choice(1, "Choice2Of2", arg);
                    } else {
                      const rfinfo = matchValue$$6;
                      return new _Option.Choice(0, "Choice1Of2", new AssignedItemSetter$00601(0, "AssignedItemSetter", id$$1, new AssignedItemSetterTarget(2, "AssignedRecdFieldSetter", rfinfo), e));
                    }
                  }
                }
            }
          }
      }
    }, unassignedNamedItems);
    const names = (0, _List.map)(function mapping(_arg5) {
      const nm$$4 = _arg5.fields[0];
      return (0, _ast.Ident$$get_idText)(nm$$4);
    }, tupledArg[1]);

    if ((0, _List.length)((0, _lib.List$$$noRepeats)(_illib.String$$$order, names)) !== (0, _List.length)(tupledArg[1])) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelNamedArgumentHasBeenAssignedMoreThenOnce)(), m$$3));
    }

    const argSet = new CalledMethArgSet$00601(patternInput$$4[1], unnamedCallerArgs$$1, patternInput$$4[2], paramArrayCallerArgs, assignedNamedArgs);
    return [argSet, patternInput$$5[0], patternInput$$5[1], attributeAssignedNamedItems, patternInput$$2[2], patternInput$$2[3]];
  }, curriedCallerArgs, fullCurriedCalledArgs);
  $this$$1.argSets = (0, _List.map)(function mapping$$2(tupledArg$$1) {
    return tupledArg$$1[0];
  }, argSetInfos);
  $this$$1.assignedNamedProps = (0, _List.collect)(function mapping$$3(tupledArg$$2) {
    return tupledArg$$2[1];
  }, argSetInfos);
  $this$$1.unassignedNamedItems = (0, _List.collect)(function mapping$$4(tupledArg$$3) {
    return tupledArg$$3[2];
  }, argSetInfos);
  $this$$1.attributeAssignedNamedItems = (0, _List.collect)(function mapping$$5(tupledArg$$4) {
    return tupledArg$$4[3];
  }, argSetInfos);
  $this$$1.unnamedCalledOptArgs = (0, _List.collect)(function mapping$$6(tupledArg$$5) {
    return tupledArg$$5[4];
  }, argSetInfos);
  $this$$1.unnamedCalledOutArgs = (0, _List.collect)(function mapping$$7(tupledArg$$6) {
    return tupledArg$$6[5];
  }, argSetInfos);
});
exports.CalledMeth$00601 = CalledMeth$00601;

function CalledMeth$00601$$$$002Ector$$Z3D1385F(infoReader$$1, nameEnv, isCheckingAttributeCall, freshenMethInfo, m$$3, ad, minfo$$1, calledTyArgs, callerTyArgs, pinfoOpt, callerObjArgTys, curriedCallerArgs, allowParamArgs, allowOutAndOptArgs, tyargsOpt) {
  return this != null ? CalledMeth$00601.call(this, infoReader$$1, nameEnv, isCheckingAttributeCall, freshenMethInfo, m$$3, ad, minfo$$1, calledTyArgs, callerTyArgs, pinfoOpt, callerObjArgTys, curriedCallerArgs, allowParamArgs, allowOutAndOptArgs, tyargsOpt) : new CalledMeth$00601(infoReader$$1, nameEnv, isCheckingAttributeCall, freshenMethInfo, m$$3, ad, minfo$$1, calledTyArgs, callerTyArgs, pinfoOpt, callerObjArgTys, curriedCallerArgs, allowParamArgs, allowOutAndOptArgs, tyargsOpt);
}

function CalledMeth$00601$$get_infoReader(x$$19) {
  return x$$19["infoReader@229"];
}

function CalledMeth$00601$$get_amap(x$$20) {
  return (0, _InfoReader.InfoReader$$get_amap)(x$$20["infoReader@229"]);
}

function CalledMeth$00601$$get_Method(x$$21) {
  return x$$21.minfo;
}

function CalledMeth$00601$$get_CalledTyArgs(x$$22) {
  return x$$22.calledTyArgs;
}

function CalledMeth$00601$$get_CalledTyparInst(x$$23) {
  const tps = (0, _infos.MethInfo$$get_FormalMethodTypars)(x$$23.minfo);

  if ((0, _List.length)(tps) === (0, _List.length)(x$$23.calledTyArgs)) {
    return (0, _TastOps.mkTyparInst)(tps, x$$23.calledTyArgs);
  } else {
    return (0, _Types.L)();
  }
}

function CalledMeth$00601$$get_CallerTyArgs(x$$24) {
  return x$$24.callerTyArgs;
}

function CalledMeth$00601$$get_CallerObjArgTys(x$$25) {
  return x$$25.callerObjArgTys;
}

function CalledMeth$00601$$get_ArgSets(x$$26) {
  return x$$26.argSets;
}

function CalledMeth$00601$$get_CalledReturnTypeAfterByrefDeref(x$$27) {
  const retTy = x$$27.methodRetTy;

  if ((0, _TastOps.isByrefTy)(x$$27.g, retTy)) {
    return (0, _TastOps.destByrefTy)(x$$27.g, retTy);
  } else {
    return retTy;
  }
}

function CalledMeth$00601$$get_CalledReturnTypeAfterOutArgTupling(x$$28) {
  const retTy$$1 = CalledMeth$00601$$get_CalledReturnTypeAfterByrefDeref(x$$28);

  if (x$$28.unnamedCalledOutArgs.tail == null) {
    return retTy$$1;
  } else {
    const outArgTys = (0, _List.map)(function mapping$$8(calledArg$$5) {
      return (0, _TastOps.destByrefTy)(x$$28.g, calledArg$$5.CalledArgumentType);
    }, x$$28.unnamedCalledOutArgs);

    if ((0, _TastOps.isUnitTy)(x$$28.g, retTy$$1)) {
      return (0, _TastOps.mkRefTupledTy)(x$$28.g, outArgTys);
    } else {
      return (0, _TastOps.mkRefTupledTy)(x$$28.g, (0, _Types.L)(retTy$$1, outArgTys));
    }
  }
}

function CalledMeth$00601$$get_AssignedItemSetters(x$$29) {
  return x$$29.assignedNamedProps;
}

function CalledMeth$00601$$get_AssociatedPropertyInfo(x$$30) {
  return x$$30.pinfoOpt;
}

function CalledMeth$00601$$get_UnassignedNamedArgs(x$$31) {
  return x$$31.unassignedNamedItems;
}

function CalledMeth$00601$$get_AttributeAssignedNamedArgs(x$$32) {
  return x$$32.attributeAssignedNamedItems;
}

function CalledMeth$00601$$get_UnnamedCalledOptArgs(x$$33) {
  return x$$33.unnamedCalledOptArgs;
}

function CalledMeth$00601$$get_UnnamedCalledOutArgs(x$$34) {
  return x$$34.unnamedCalledOutArgs;
}

function CalledMeth$00601$$$GetMethod$$1BF99E32(x$$35) {
  return CalledMeth$00601$$get_Method(x$$35);
}

function CalledMeth$00601$$get_NumArgSets(x$$36) {
  return (0, _List.length)(CalledMeth$00601$$get_ArgSets(x$$36));
}

function CalledMeth$00601$$get_HasOptArgs(x$$37) {
  return !(CalledMeth$00601$$get_UnnamedCalledOptArgs(x$$37).tail == null);
}

function CalledMeth$00601$$get_HasOutArgs(x$$38) {
  return !(CalledMeth$00601$$get_UnnamedCalledOutArgs(x$$38).tail == null);
}

function CalledMeth$00601$$get_UsesParamArrayConversion(x$$39) {
  return (0, _List.exists)(function predicate$$6(argSet$$1) {
    return argSet$$1.ParamArrayCalledArgOpt != null;
  }, CalledMeth$00601$$get_ArgSets(x$$39));
}

function CalledMeth$00601$$get_ParamArrayCalledArgOpt(x$$40) {
  return (0, _List.tryPick)(function chooser$$2(argSet$$2) {
    return argSet$$2.ParamArrayCalledArgOpt;
  }, CalledMeth$00601$$get_ArgSets(x$$40));
}

function CalledMeth$00601$$get_ParamArrayCallerArgs(x$$41) {
  return (0, _List.tryPick)(function chooser$$3(argSet$$3) {
    if (argSet$$3.ParamArrayCalledArgOpt != null) {
      return argSet$$3.ParamArrayCallerArgs;
    } else {
      return null;
    }
  }, CalledMeth$00601$$get_ArgSets(x$$41));
}

function CalledMeth$00601$$get_ParamArrayElementType(x$$42) {
  return (0, _TastOps.destArrayTy)((0, _import.ImportMap$$get_g)(CalledMeth$00601$$get_amap(x$$42)), CalledMeth$00601$$get_ParamArrayCalledArgOpt(x$$42).CalledArgumentType);
}

function CalledMeth$00601$$get_NumAssignedProps(x$$43) {
  return (0, _List.length)(CalledMeth$00601$$get_AssignedItemSetters(x$$43));
}

function CalledMeth$00601$$CalledObjArgTys$$4DB9192C(x$$44, m$$4) {
  var thisArgTy;
  const matchValue$$7 = (0, _infos.MethInfo$$GetObjArgTypes$$Z5D984B3C)(CalledMeth$00601$$get_Method(x$$44), CalledMeth$00601$$get_amap(x$$44), m$$4, CalledMeth$00601$$get_CalledTyArgs(x$$44));
  var $target$$14, thisArgTy$$1;

  if (matchValue$$7.tail != null) {
    if (matchValue$$7.tail.tail == null) {
      if (thisArgTy = matchValue$$7.head, (0, _TastOps.isByrefTy)(x$$44.g, thisArgTy)) {
        $target$$14 = 0;
        thisArgTy$$1 = matchValue$$7.head;
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
        return (0, _Types.L)((0, _TastOps.destByrefTy)(x$$44.g, thisArgTy$$1), (0, _Types.L)());
      }

    case 1:
      {
        const res = matchValue$$7;
        return res;
      }
  }
}

function CalledMeth$00601$$get_NumCalledTyArgs(x$$45) {
  return (0, _List.length)(CalledMeth$00601$$get_CalledTyArgs(x$$45));
}

function CalledMeth$00601$$get_NumCallerTyArgs(x$$46) {
  return (0, _List.length)(CalledMeth$00601$$get_CallerTyArgs(x$$46));
}

function CalledMeth$00601$$get_AssignsAllNamedArgs(x$$47) {
  return CalledMeth$00601$$get_UnassignedNamedArgs(x$$47).tail == null;
}

function CalledMeth$00601$$get_HasCorrectArity(x$$48) {
  if (CalledMeth$00601$$get_NumCalledTyArgs(x$$48) === CalledMeth$00601$$get_NumCallerTyArgs(x$$48)) {
    return (0, _List.forAll)(function predicate$$7(argSet$$4) {
      return CalledMethArgSet$00601$$get_NumUnnamedCalledArgs(argSet$$4) === CalledMethArgSet$00601$$get_NumUnnamedCallerArgs(argSet$$4);
    }, CalledMeth$00601$$get_ArgSets(x$$48));
  } else {
    return false;
  }
}

function CalledMeth$00601$$get_HasCorrectGenericArity(x$$49) {
  return CalledMeth$00601$$get_NumCalledTyArgs(x$$49) === CalledMeth$00601$$get_NumCallerTyArgs(x$$49);
}

function CalledMeth$00601$$IsAccessible$$Z2A1B6767(x$$50, m$$5, ad$$1) {
  return (0, _AccessibilityLogic.IsMethInfoAccessible)(CalledMeth$00601$$get_amap(x$$50), m$$5, ad$$1, CalledMeth$00601$$get_Method(x$$50));
}

function CalledMeth$00601$$HasCorrectObjArgs$$4DB9192C(x$$51, m$$6) {
  return (0, _List.length)(CalledMeth$00601$$CalledObjArgTys$$4DB9192C(x$$51, m$$6)) === (0, _List.length)(CalledMeth$00601$$get_CallerObjArgTys(x$$51));
}

function CalledMeth$00601$$IsCandidate$$Z2A1B6767(x$$52, m$$7, ad$$2) {
  if ((CalledMeth$00601$$IsAccessible$$Z2A1B6767(x$$52, m$$7, ad$$2) ? CalledMeth$00601$$get_HasCorrectArity(x$$52) : false) ? CalledMeth$00601$$HasCorrectObjArgs$$4DB9192C(x$$52, m$$7) : false) {
    return CalledMeth$00601$$get_AssignsAllNamedArgs(x$$52);
  } else {
    return false;
  }
}

function CalledMeth$00601$$get_AssignedUnnamedArgs(x$$53) {
  return (0, _List.map)(function mapping$$10(argSet$$5) {
    return (0, _List.ofSeq)((0, _Seq.map2)(function mapping$$9(calledArg$$6, callerArg$$2) {
      return new AssignedCalledArg$00601(null, calledArg$$6, callerArg$$2);
    }, argSet$$5.UnnamedCalledArgs, argSet$$5.UnnamedCallerArgs));
  }, CalledMeth$00601$$get_ArgSets(x$$53));
}

function CalledMeth$00601$$get_AssignedNamedArgs(x$$54) {
  return (0, _List.map)(function mapping$$11(argSet$$6) {
    return argSet$$6.AssignedNamedArgs;
  }, CalledMeth$00601$$get_ArgSets(x$$54));
}

function CalledMeth$00601$$get_AllUnnamedCalledArgs(x$$55) {
  return (0, _List.collect)(function mapping$$12(x$$56) {
    return x$$56.UnnamedCalledArgs;
  }, CalledMeth$00601$$get_ArgSets(x$$55));
}

function CalledMeth$00601$$get_TotalNumUnnamedCalledArgs(x$$57) {
  return (0, _List.sumBy)(function projection(x$$58) {
    return CalledMethArgSet$00601$$get_NumUnnamedCalledArgs(x$$58);
  }, CalledMeth$00601$$get_ArgSets(x$$57), {
    GetZero() {
      return 0;
    },

    Add($x$$2, $y$$3) {
      return $x$$2 + $y$$3;
    }

  });
}

function CalledMeth$00601$$get_TotalNumUnnamedCallerArgs(x$$59) {
  return (0, _List.sumBy)(function projection$$1(x$$60) {
    return CalledMethArgSet$00601$$get_NumUnnamedCallerArgs(x$$60);
  }, CalledMeth$00601$$get_ArgSets(x$$59), {
    GetZero() {
      return 0;
    },

    Add($x$$4, $y$$5) {
      return $x$$4 + $y$$5;
    }

  });
}

function CalledMeth$00601$$get_TotalNumAssignedNamedArgs(x$$61) {
  return (0, _List.sumBy)(function projection$$2(x$$62) {
    return CalledMethArgSet$00601$$get_NumAssignedNamedArgs(x$$62);
  }, CalledMeth$00601$$get_ArgSets(x$$61), {
    GetZero() {
      return 0;
    },

    Add($x$$6, $y$$7) {
      return $x$$6 + $y$$7;
    }

  });
}

function NamesOfCalledArgs(calledArgs) {
  return (0, _List.choose)(function chooser$$4(x$$63) {
    return x$$63.NameOpt;
  }, calledArgs);
}

const ArgumentAnalysis = (0, _Types.declare)(function ArgumentAnalysis(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ArgumentAnalysis = ArgumentAnalysis;

function InferLambdaArgsForLambdaPropagation(origRhsExpr) {
  const loop = function loop(e$$1) {
    switch (e$$1.tag) {
      case 15:
        {
          const rest = e$$1.fields[3];
          return 1 + loop(rest) | 0;
        }

      case 16:
        {
          return 1;
        }

      default:
        {
          return 0;
        }
    }
  };

  return loop(origRhsExpr) | 0;
}

function ExamineArgumentForLambdaPropagation(infoReader$$2, arg$$1) {
  const g$$2 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$2);
  let argExpr;
  const matchValue$$8 = CallerArg$00601$$get_Expr(arg$$1.CallerArg);

  if (matchValue$$8.tag === 0) {
    const x$$64 = matchValue$$8.fields[0];
    argExpr = x$$64;
  } else {
    const x$$65 = matchValue$$8;
    argExpr = x$$65;
  }

  const countOfCallerLambdaArg = InferLambdaArgsForLambdaPropagation(argExpr) | 0;
  const adjustedCalledArgTy = AdjustCalledArgType(infoReader$$2, false, arg$$1.CalledArg, arg$$1.CallerArg);

  if (countOfCallerLambdaArg > 0) {
    const patternInput$$6 = (0, _TastOps.stripFunTy)(g$$2, adjustedCalledArgTy);

    if ((0, _List.length)(patternInput$$6[0]) >= countOfCallerLambdaArg) {
      return new ArgumentAnalysis(2, "CallerLambdaHasArgTypes", patternInput$$6[0]);
    } else if ((0, _TastOps.isDelegateTy)(g$$2, (0, _TastOps.isLinqExpressionTy)(g$$2, adjustedCalledArgTy) ? (0, _TastOps.destLinqExpressionTy)(g$$2, adjustedCalledArgTy) : adjustedCalledArgTy)) {
      return new ArgumentAnalysis(1, "ArgDoesNotMatch");
    } else {
      return new ArgumentAnalysis(0, "NoInfo");
    }
  } else {
    return new ArgumentAnalysis(3, "CalledArgMatchesType", adjustedCalledArgTy);
  }
}

function ExamineMethodForLambdaPropagation(x$$66) {
  const unnamedInfo = (0, _illib.List$$$mapSquared)(function f$$1(arg$$2) {
    return ExamineArgumentForLambdaPropagation(CalledMeth$00601$$get_infoReader(x$$66), arg$$2);
  }, CalledMeth$00601$$get_AssignedUnnamedArgs(x$$66));
  const namedInfo = (0, _illib.List$$$mapSquared)(function f$$2(arg$$3) {
    return [arg$$3.NamedArgIdOpt, ExamineArgumentForLambdaPropagation(CalledMeth$00601$$get_infoReader(x$$66), arg$$3)];
  }, CalledMeth$00601$$get_AssignedNamedArgs(x$$66));

  if ((0, _illib.List$$$existsSquared)(function f$$3(_arg1$$2) {
    if (_arg1$$2.tag === 2) {
      return true;
    } else {
      return false;
    }
  }, unnamedInfo) ? true : (0, _illib.List$$$existsSquared)(function f$$4(_arg2$$1) {
    if (_arg2$$1[1].tag === 2) {
      return true;
    } else {
      return false;
    }
  }, namedInfo)) {
    return [unnamedInfo, namedInfo];
  } else {
    return null;
  }
}

function IsBaseCall(objArgs) {
  var v;
  var $target$$15, v$$1;

  if (objArgs.tail != null) {
    if (objArgs.head.tag === 1) {
      if (objArgs.tail.tail == null) {
        if (v = objArgs.head.fields[0], (0, _Util.equals)((0, _tast.ValRef$$get_BaseOrThisInfo)(v), new _tast.ValBaseOrThisInfo(1, "BaseVal"))) {
          $target$$15 = 0;
          v$$1 = objArgs.head.fields[0];
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
        return false;
      }
  }
}

function ComputeConstrainedCallInfo(g$$3, amap$$2, m$$8, objArgs$$1, minfo$$2) {
  var objArgExpr;
  var $target$$16, objArgExpr$$1;

  if (objArgs$$1.tail != null) {
    if (objArgs$$1.tail.tail == null) {
      if (objArgExpr = objArgs$$1.head, !(0, _infos.MethInfo$$get_IsExtensionMember)(minfo$$2)) {
        $target$$16 = 0;
        objArgExpr$$1 = objArgs$$1.head;
      } else {
        $target$$16 = 1;
      }
    } else {
      $target$$16 = 1;
    }
  } else {
    $target$$16 = 1;
  }

  switch ($target$$16) {
    case 0:
      {
        const methObjTy = (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$2);
        const objArgTy = (0, _TastOps.tyOfExpr)(g$$3, objArgExpr$$1);

        if ((0, _TypeRelations.TypeDefinitelySubsumesTypeNoCoercion)(0, g$$3, amap$$2, m$$8, methObjTy, objArgTy) ? true : (0, _TastOps.isClassTy)(g$$3, methObjTy) ? !(((0, _TastOps.typeEquiv)(g$$3, methObjTy, (0, _TcGlobals.TcGlobals$$get_system_Object_ty)(g$$3)) ? true : (0, _TastOps.typeEquiv)(g$$3, methObjTy, (0, _TcGlobals.TcGlobals$$get_system_Value_ty)(g$$3))) ? true : (0, _TastOps.typeEquiv)(g$$3, methObjTy, (0, _TcGlobals.TcGlobals$$get_system_Enum_ty)(g$$3))) : false) {
          return null;
        } else {
          return objArgTy;
        }
      }

    case 1:
      {
        return null;
      }
  }
}

function TakeObjAddrForMethodCall(g$$4, amap$$3, minfo$$3, isMutable, m$$9, objArgs$$2, f$$5) {
  const ccallInfo = ComputeConstrainedCallInfo(g$$4, amap$$3, m$$9, objArgs$$2, minfo$$3);
  let patternInput$$8;
  var $target$$24, objArgExpr$$2;

  if (objArgs$$2.tail != null) {
    if (objArgs$$2.tail.tail == null) {
      $target$$24 = 0;
      objArgExpr$$2 = objArgs$$2.head;
    } else {
      $target$$24 = 1;
    }
  } else {
    $target$$24 = 1;
  }

  switch ($target$$24) {
    case 0:
      {
        const hasCallInfo = ccallInfo != null;
        const mustTakeAddress = hasCallInfo ? true : (0, _infos.MethInfo$$ObjArgNeedsAddress$$73F6E43C)(minfo$$3, amap$$3, m$$9);
        const objArgTy$$1 = (0, _TastOps.tyOfExpr)(g$$4, objArgExpr$$2);
        const patternInput$$7 = (0, _TastOps.mkExprAddrOfExpr)(g$$4, mustTakeAddress, hasCallInfo, isMutable, objArgExpr$$2, null, m$$9);
        const objArgExpr$0027$$1 = (!hasCallInfo ? !(0, _TypeRelations.TypeDefinitelySubsumesTypeNoCoercion)(0, g$$4, amap$$3, m$$9, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$3), objArgTy$$1) : false) ? (0, _TastOps.mkCoerceExpr)(patternInput$$7[1], (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$3), m$$9, objArgTy$$1) : patternInput$$7[1];
        patternInput$$8 = [patternInput$$7[0], (0, _Types.L)(objArgExpr$0027$$1, (0, _Types.L)())];
        break;
      }

    case 1:
      {
        patternInput$$8 = [function (x$$67) {
          return x$$67;
        }, objArgs$$2];
        break;
      }
  }

  const patternInput$$9 = f$$5(ccallInfo, patternInput$$8[1]);
  return [patternInput$$8[0](patternInput$$9[0]), patternInput$$9[1]];
}

function BuildILMethInfoCall(g$$5, amap$$4, m$$10, isProp, minfo$$4, valUseFlags, minst$$1, direct, args) {
  const valu = (0, _TastOps.isStructTy)(g$$5, (0, _infos.ILMethInfo$$get_ApparentEnclosingType)(minfo$$4));
  const ctor = (0, _infos.ILMethInfo$$get_IsConstructor)(minfo$$4);

  if ((0, _infos.ILMethInfo$$get_IsClassConstructor)(minfo$$4)) {
    (0, _ErrorLogger.error)(new _ErrorLogger.InternalError((0, _infos.ILMethInfo$$get_ILName)(minfo$$4) + ": cannot call a class constructor", m$$10));
  }

  const useCallvirt = (!valu ? !direct : false) ? (0, _infos.ILMethInfo$$get_IsVirtual)(minfo$$4) : false;
  const isProtected = (0, _infos.ILMethInfo$$get_IsProtectedAccessibility)(minfo$$4);
  const ilMethRef = (0, _infos.ILMethInfo$$get_ILMethodRef)(minfo$$4);
  const newobj = ctor ? valUseFlags.tag === 1 ? true : false : false;
  const exprTy = ctor ? (0, _infos.ILMethInfo$$get_ApparentEnclosingType)(minfo$$4) : (0, _infos.ILMethInfo$$GetFSharpReturnTy$$Z5D984B3C)(minfo$$4, amap$$4, m$$10, minst$$1);
  const retTy$$2 = (!ctor ? (0, _Util.equals)((0, _il.ILMethodRef$$get_ReturnType)(ilMethRef), new _il.ILType(0, "Void")) : false) ? (0, _Types.L)() : (0, _Types.L)(exprTy, (0, _Types.L)());
  const isDllImport = (0, _infos.ILMethInfo$$IsDllImport$$2AE8EA0C)(minfo$$4, g$$5);
  return [new _tast.Expr(11, "Op", new _tast.TOp(31, "ILCall", useCallvirt, isProtected, valu, newobj, valUseFlags, isProp, isDllImport, ilMethRef, (0, _infos.ILMethInfo$$get_DeclaringTypeInst)(minfo$$4), minst$$1, retTy$$2), (0, _Types.L)(), args, m$$10), exprTy];
}

function BuildObjCtorCall(g$$6, m$$11) {
  const ilMethRef$$1 = (0, _il.ILMethodSpec$$get_MethodRef)((0, _il.mkILCtorMethSpecForTy)((0, _il.ILGlobals$$get_typ_Object)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$6)), (0, _Types.L)()));
  return new _tast.Expr(11, "Op", new _tast.TOp(31, "ILCall", false, false, false, false, new _tast.ValUseFlag(2, "CtorValUsedAsSuperInit"), false, true, ilMethRef$$1, (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$6), (0, _Types.L)())), (0, _Types.L)(), (0, _Types.L)(), m$$11);
}

function BuildFSharpMethodApp(g$$7, m$$12, vref, vexp, vexprty, args$$1) {
  const arities = (0, _tast.ValReprInfo$$get_AritiesOfArgs)((0, _tast.arityOfVal)((0, _tast.ValRef$$get_Deref)(vref)));
  const patternInput$$11 = (0, _List.mapFold)(function mapping$$14(tupledArg$$7, arity) {
    const matchValue$$9 = [arity, tupledArg$$7[0]];
    var $target$$25;

    if (matchValue$$9[0] === 0) {
      if (matchValue$$9[1].tail == null) {
        if ((0, _TastOps.typeEquiv)(g$$7, (0, _TastOps.domainOfFunTy)(g$$7, tupledArg$$7[1]), (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$7))) {
          $target$$25 = 0;
        } else {
          $target$$25 = 1;
        }
      } else {
        $target$$25 = 1;
      }
    } else if (matchValue$$9[0] === 1) {
      if (matchValue$$9[1].tail == null) {
        if ((0, _TastOps.typeEquiv)(g$$7, (0, _TastOps.domainOfFunTy)(g$$7, tupledArg$$7[1]), (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$7))) {
          $target$$25 = 0;
        } else {
          $target$$25 = 1;
        }
      } else {
        $target$$25 = 1;
      }
    } else {
      $target$$25 = 1;
    }

    switch ($target$$25) {
      case 0:
        {
          return [(0, _TastOps.mkUnit)(g$$7, m$$12), [tupledArg$$7[0], (0, _TastOps.rangeOfFunTy)(g$$7, tupledArg$$7[1])]];
        }

      case 1:
        {
          var $target$$26;

          if (matchValue$$9[0] === 0) {
            if (matchValue$$9[1].tail != null) {
              $target$$26 = 0;
            } else {
              $target$$26 = 3;
            }
          } else if (matchValue$$9[0] === 1) {
            if (matchValue$$9[1].tail == null) {
              $target$$26 = 2;
            } else {
              $target$$26 = 1;
            }
          } else {
            $target$$26 = 3;
          }

          switch ($target$$26) {
            case 0:
              {
                const argst = matchValue$$9[1].tail;
                const arg$$4 = matchValue$$9[1].head;
                (0, _ErrorLogger.warning)(new _ErrorLogger.InternalError((0, _String.toText)((0, _String.printf)("Unexpected zero arity, args = %s"))((0, _layout.showL)((0, _layout.sepListL)((0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagText)(";")), (0, _List.map)(_TastOps.DebugPrint$$$exprL, tupledArg$$7[0])))), m$$12));
                return [arg$$4, [argst, (0, _TastOps.rangeOfFunTy)(g$$7, tupledArg$$7[1])]];
              }

            case 1:
              {
                const argst$$1 = matchValue$$9[1].tail;
                const arg$$5 = matchValue$$9[1].head;
                return [arg$$5, [argst$$1, (0, _TastOps.rangeOfFunTy)(g$$7, tupledArg$$7[1])]];
              }

            case 2:
              {
                return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("expected additional arguments here", m$$12));
              }

            case 3:
              {
                if ((0, _List.length)(tupledArg$$7[0]) < arity) {
                  (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("internal error in getting arguments, n = " + (0, _Util.int32ToString)(arity) + ", #args = " + (0, _Util.int32ToString)((0, _List.length)(tupledArg$$7[0])), m$$12));
                }

                const patternInput$$10 = (0, _List.splitAt)(arity, tupledArg$$7[0]);
                const tuptys = (0, _List.map)(function mapping$$13(arg10$0040$$1) {
                  return (0, _TastOps.tyOfExpr)(g$$7, arg10$0040$$1);
                }, patternInput$$10[0]);
                return [(0, _TastOps.mkRefTupled)(g$$7, m$$12, patternInput$$10[0], tuptys), [patternInput$$10[1], (0, _TastOps.rangeOfFunTy)(g$$7, tupledArg$$7[1])]];
              }
          }
        }
    }
  }, [args$$1, vexprty], arities);
  const retTy$$3 = patternInput$$11[1][1];
  const leftover = patternInput$$11[1][0];

  if (!(leftover.tail == null)) {
    (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("Unexpected " + (0, _Util.int32ToString)((0, _List.length)(leftover)) + " remaining arguments in method application", m$$12));
  }

  return [(0, _TastOps.mkApps)(g$$7, [vexp, vexprty], (0, _Types.L)(), patternInput$$11[0], m$$12), retTy$$3];
}

function BuildFSharpMethodCall(g$$8, m$$13, ty$$1, vref$$1, valUseFlags$$1, minst$$2, args$$3) {
  const vexp$$1 = new _tast.Expr(1, "Val", vref$$1, valUseFlags$$1, m$$13);
  const vexpty = (0, _tast.ValRef$$get_Type)(vref$$1);
  const patternInput$$12 = (0, _tast.ValRef$$get_TypeScheme)(vref$$1);
  const vtinst = (0, _List.append)((0, _TastOps.argsOfAppTy)(g$$8, ty$$1), minst$$2);

  if ((0, _List.length)(patternInput$$12[0]) !== (0, _List.length)(vtinst)) {
    (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("BuildFSharpMethodCall: unexpected List.length mismatch", m$$13));
  }

  const expr$$1 = (0, _TastOps.mkTyAppExpr)(m$$13, vexp$$1, vexpty, vtinst);
  const exprty = (0, _TastOps.instType)((0, _TastOps.mkTyparInst)(patternInput$$12[0], vtinst), patternInput$$12[1]);
  return BuildFSharpMethodApp(g$$8, m$$13, vref$$1, expr$$1, exprty, args$$3);
}

function MakeMethInfoCall(amap$$5, m$$14, minfo$$5, minst$$3, args$$4) {
  const valUseFlags$$2 = new _tast.ValUseFlag(1, "NormalValUse");

  switch (minfo$$5.tag) {
    case 0:
      {
        const vref$$2 = minfo$$5.fields[2];
        const ty$$2 = minfo$$5.fields[1];
        const g$$10 = minfo$$5.fields[0];
        return BuildFSharpMethodCall(g$$10, m$$14, ty$$2, vref$$2, valUseFlags$$2, minst$$3, args$$4)[0];
      }

    case 2:
      {
        const ty$$3 = minfo$$5.fields[1];
        return (0, _TastOps.mkDefault)(m$$14, ty$$3);
      }

    default:
      {
        const ilminfo = minfo$$5.fields[1];
        const g$$9 = minfo$$5.fields[0];
        const direct$$1 = !(0, _infos.MethInfo$$get_IsVirtual)(minfo$$5);
        const isProp$$1 = false;
        return BuildILMethInfoCall(g$$9, amap$$5, m$$14, isProp$$1, ilminfo, valUseFlags$$2, minst$$3, direct$$1, args$$4)[0];
      }
  }
}

function BuildMethodCall(tcVal, g$$11, amap$$6, isMutable$$1, m$$15, isProp$$2, minfo$$6, valUseFlags$$3, minst$$4, objArgs$$4, args$$5) {
  const direct$$2 = IsBaseCall(objArgs$$4);
  return TakeObjAddrForMethodCall(g$$11, amap$$6, minfo$$6, isMutable$$1, m$$15, objArgs$$4, function (ccallInfo$$1, objArgs$$5) {
    const allArgs = (0, _List.append)(objArgs$$5, args$$5);
    let valUseFlags$$4;

    if (direct$$2 ? valUseFlags$$3.tag === 1 ? true : false : false) {
      valUseFlags$$4 = new _tast.ValUseFlag(4, "VSlotDirectCall");
    } else {
      if (ccallInfo$$1 == null) {
        valUseFlags$$4 = valUseFlags$$3;
      } else {
        const ty$$4 = ccallInfo$$1;
        valUseFlags$$4 = new _tast.ValUseFlag(0, "PossibleConstrainedCall", ty$$4);
      }
    }

    switch (minfo$$6.tag) {
      case 0:
        {
          const vref$$3 = minfo$$6.fields[2];
          const patternInput$$13 = tcVal(vref$$3, valUseFlags$$4, (0, _List.append)((0, _infos.MethInfo$$get_DeclaringTypeInst)(minfo$$6), minst$$4), m$$15);
          return BuildFSharpMethodApp(g$$11, m$$15, vref$$3, patternInput$$13[0], patternInput$$13[1], allArgs);
        }

      case 2:
        {
          const ty$$5 = minfo$$6.fields[1];
          const g$$12 = minfo$$6.fields[0];

          if (!(0, _TastOps.TypeHasDefaultValue)(g$$12, m$$15, ty$$5)) {
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcDefaultStructConstructorCall)(), m$$15));
          }

          return [(0, _TastOps.mkDefault)(m$$15, ty$$5), ty$$5];
        }

      default:
        {
          const ilMethInfo = minfo$$6.fields[1];
          return BuildILMethInfoCall(g$$11, amap$$6, m$$15, isProp$$2, ilMethInfo, valUseFlags$$4, minst$$4, direct$$2, allArgs);
        }
    }
  });
}

function BuildNewDelegateExpr(eventInfoOpt, g$$13, amap$$7, delegateTy, invokeMethInfo, delArgTys$$2, f$$6, fty$$2, m$$16) {
  var h;
  const slotsig = (0, _infos.MethInfo$$GetSlotSig$$73F6E43C)(invokeMethInfo, amap$$7, m$$16);
  let patternInput$$15;
  const topValInfo = new _tast.ValReprInfo(0, "ValReprInfo", (0, _Types.L)(), (0, _List.replicate)((0, _Util.max)(_Util.comparePrimitives, 1, (0, _List.length)(delArgTys$$2)), _tast.ValReprInfoModule$$$unnamedTopArg), _tast.ValReprInfoModule$$$unnamedRetVal);
  const lambdaContents = eventInfoOpt != null ? null : (0, _TypeRelations.tryDestTopLambda)(g$$13, amap$$7, topValInfo, f$$6, fty$$2);

  if (lambdaContents != null) {
    const patternInput$$14 = (0, _TypeRelations.IteratedAdjustArityOfLambda)(g$$13, amap$$7, topValInfo, f$$6);
    patternInput$$15 = [(0, _List.concat)(patternInput$$14[3]), patternInput$$14[4]];
  } else {
    if ((0, _List.exists)(function (arg10$0040$$2) {
      return (0, _TastOps.isByrefTy)(g$$13, arg10$0040$$2);
    }, delArgTys$$2)) {
      (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcFunctionRequiresExplicitLambda$$Z524259A4)((0, _List.length)(delArgTys$$2)), m$$16));
    }

    const delArgVals = (0, _List.mapIndexed)(function mapping$$15(i$$1, argty) {
      return (0, _TastOps.mkCompGenLocal)(m$$16, "delegateArg" + (0, _Util.int32ToString)(i$$1), argty)[0];
    }, delArgTys$$2);
    let expr$$2;
    let args$$6;

    if (eventInfoOpt == null) {
      args$$6 = delArgTys$$2.tail == null ? (0, _Types.L)((0, _TastOps.mkUnit)(g$$13, m$$16), (0, _Types.L)()) : (0, _List.map)(function (arg10$0040$$3) {
        return (0, _TastOps.exprForVal)(m$$16, arg10$0040$$3);
      }, delArgVals);
    } else {
      const einfo = eventInfoOpt;

      if (delArgVals.tail != null) {
        if (h = delArgVals.head, !(0, _TastOps.isObjTy)(g$$13, (0, _tast.Val$$get_Type)(h))) {
          args$$6 = (0, _ErrorLogger.error)((0, _infos.nonStandardEventError)((0, _infos.EventInfo$$get_EventName)(einfo), m$$16));
        } else {
          if (delArgVals.tail != null) {
            const t = delArgVals.tail;
            const h$$2 = delArgVals.head;
            args$$6 = (0, _Types.L)((0, _TastOps.exprForVal)(m$$16, h$$2), (0, _Types.L)((0, _TastOps.mkRefTupledVars)(g$$13, m$$16, t), (0, _Types.L)()));
          } else {
            throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/MethodCalls.fs", 844, 30);
          }
        }
      } else {
        args$$6 = (0, _ErrorLogger.error)((0, _infos.nonStandardEventError)((0, _infos.EventInfo$$get_EventName)(einfo), m$$16));
      }
    }

    expr$$2 = (0, _TastOps.mkApps)(g$$13, [f$$6, fty$$2], (0, _Types.L)(), args$$6, m$$16);
    patternInput$$15 = [delArgVals, expr$$2];
  }

  const meth = new _tast.ObjExprMethod(0, "TObjExprMethod", slotsig, (0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)(patternInput$$15[0], (0, _Types.L)()), patternInput$$15[1], m$$16);
  return (0, _TastOps.mkObjExpr)(delegateTy, null, BuildObjCtorCall(g$$13, m$$16), (0, _Types.L)(meth, (0, _Types.L)()), (0, _Types.L)(), m$$16);
}

function CoerceFromFSharpFuncToDelegate(g$$14, amap$$8, infoReader$$4, ad$$3, callerArgTy$$1, m$$17, callerArgExpr, delegateTy$$1) {
  const patternInput$$16 = (0, _InfoReader.GetSigOfFunctionForDelegate)(infoReader$$4, delegateTy$$1, m$$17, ad$$3);
  const invokeMethInfo$$1 = patternInput$$16.fields[0];
  const delArgTys$$3 = patternInput$$16.fields[1];
  return BuildNewDelegateExpr(null, g$$14, amap$$8, delegateTy$$1, invokeMethInfo$$1, delArgTys$$3, callerArgExpr, callerArgTy$$1, m$$17);
}

function RecdFieldInstanceChecks(g$$15, amap$$9, ad$$4, m$$18, rfinfo$$1) {
  if ((0, _infos.RecdFieldInfo$$get_IsStatic)(rfinfo$$1)) {
    (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcStaticFieldUsedWhenInstanceFieldExpected)(), m$$18));
  }

  (0, _ErrorLogger.CommitOperationResult)((0, _AttributeChecking.CheckRecdFieldInfoAttributes)(g$$15, rfinfo$$1, m$$18));
  (0, _AccessibilityLogic.CheckRecdFieldInfoAccessible)(amap$$9, m$$18, ad$$4, rfinfo$$1);
}

function ILFieldInstanceChecks(g$$16, amap$$10, ad$$5, m$$19, finfo$$1) {
  if ((0, _infos.ILFieldInfo$$get_IsStatic)(finfo$$1)) {
    (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcStaticFieldUsedWhenInstanceFieldExpected)(), m$$19));
  }

  (0, _AccessibilityLogic.CheckILFieldInfoAccessible)(g$$16, amap$$10, m$$19, ad$$5, finfo$$1);
  (0, _AttributeChecking.CheckILFieldAttributes)(g$$16, finfo$$1, m$$19);
}

function MethInfoChecks(g$$17, amap$$11, isInstance, tyargsOpt$$1, objArgs$$6, ad$$6, m$$20, minfo$$7) {
  if ((0, _infos.MethInfo$$get_IsInstance)(minfo$$7) !== isInstance) {
    if (isInstance) {
      (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csMethodIsNotAnInstanceMethod$$Z721C83C5)((0, _infos.MethInfo$$get_LogicalName)(minfo$$7)), m$$20));
    } else {
      (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csMethodIsNotAStaticMethod$$Z721C83C5)((0, _infos.MethInfo$$get_LogicalName)(minfo$$7)), m$$20));
    }
  }

  const adOriginal = ad$$6;
  let ad$$7;
  const matchValue$$10 = [objArgs$$6, ad$$6];
  var $target$$38, objArg, paths, tcref;

  if (matchValue$$10[0].tail != null) {
    if (matchValue$$10[0].tail.tail == null) {
      if (matchValue$$10[1].tag === 0) {
        if (matchValue$$10[1].fields[1] != null) {
          $target$$38 = 0;
          objArg = matchValue$$10[0].head;
          paths = matchValue$$10[1].fields[0];
          tcref = matchValue$$10[1].fields[1];
        } else {
          $target$$38 = 1;
        }
      } else {
        $target$$38 = 1;
      }
    } else {
      $target$$38 = 1;
    }
  } else {
    $target$$38 = 1;
  }

  switch ($target$$38) {
    case 0:
      {
        const objArgTy$$2 = (0, _TastOps.tyOfExpr)(g$$17, objArg);
        const ty$$6 = (0, _TastOps.generalizedTyconRef)(tcref);
        ad$$7 = (0, _TypeRelations.TypeFeasiblySubsumesType)(0, g$$17, amap$$11, m$$20, ty$$6, new _TypeRelations.CanCoerce(0, "CanCoerce"), objArgTy$$2) ? ad$$6 : IsBaseCall(objArgs$$6) ? ad$$6 : new _AccessibilityLogic.AccessorDomain(0, "AccessibleFrom", paths, null);
        break;
      }

    case 1:
      {
        ad$$7 = ad$$6;
        break;
      }
  }

  if (!(0, _AccessibilityLogic.IsTypeAndMethInfoAccessible)(amap$$11, m$$20, adOriginal, ad$$7, minfo$$7)) {
    (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcMethodNotAccessible$$Z721C83C5)((0, _infos.MethInfo$$get_LogicalName)(minfo$$7)), m$$20));
  }

  if (((0, _TastOps.isAnyTupleTy)(g$$17, (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$7)) ? !(0, _infos.MethInfo$$get_IsExtensionMember)(minfo$$7) : false) ? (0, _String.startsWith)((0, _infos.MethInfo$$get_LogicalName)(minfo$$7), "get_Item", 4) ? true : (0, _String.startsWith)((0, _infos.MethInfo$$get_LogicalName)(minfo$$7), "get_Rest", 4) : false) {
    (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcTupleMemberNotNormallyUsed)(), m$$20));
  }

  (0, _ErrorLogger.CommitOperationResult)((0, _AttributeChecking.CheckMethInfoAttributes)(g$$17, m$$20, tyargsOpt$$1, minfo$$7));
}

const FieldNotMutable = (0, _Types.declare)(function FieldNotMutable(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.FieldNotMutable = FieldNotMutable;

function CheckRecdFieldMutation(m$$21, denv, rfinfo$$2) {
  if (!(0, _tast.RecdField$$get_IsMutable)((0, _infos.RecdFieldInfo$$get_RecdField)(rfinfo$$2))) {
    (0, _ErrorLogger.error)(new FieldNotMutable(denv, (0, _infos.RecdFieldInfo$$get_RecdFieldRef)(rfinfo$$2), m$$21));
  }
}