"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuotationGenerationScope$$$Create$$Z76DDC216 = QuotationGenerationScope$$$Create$$Z76DDC216;
exports.QuotationGenerationScope$$Close = QuotationGenerationScope$$Close;
exports.QuotationGenerationScope$$$ComputeQuotationFormat$$2AE8EA0C = QuotationGenerationScope$$$ComputeQuotationFormat$$2AE8EA0C;
exports.QuotationTranslationEnv$$$get_Empty = QuotationTranslationEnv$$$get_Empty;
exports.QuotationTranslationEnv$$BindTypar$$ZB4A2630 = QuotationTranslationEnv$$BindTypar$$ZB4A2630;
exports.QuotationTranslationEnv$$BindTypars$$52A2C29A = QuotationTranslationEnv$$BindTypars$$52A2C29A;
exports.BindFormalTypars = BindFormalTypars;
exports.BindVal = BindVal;
exports.BindIsInstVal = BindIsInstVal;
exports.BindSubstVal = BindSubstVal;
exports.BindVals = BindVals;
exports.BindFlatVals = BindFlatVals;
exports.wfail = wfail;
exports.$007CModuleValueOrMemberUse$007C_$007C = $007CModuleValueOrMemberUse$007C_$007C;
exports.$007CSimpleArrayLoopUpperBound$007C_$007C = $007CSimpleArrayLoopUpperBound$007C_$007C;
exports.$007CSimpleArrayLoopBody$007C_$007C = $007CSimpleArrayLoopBody$007C_$007C;
exports.$007CObjectInitializationCheck$007C_$007C = $007CObjectInitializationCheck$007C_$007C;
exports.isSplice = isSplice;
exports.EmitDebugInfoIfNecessary = EmitDebugInfoIfNecessary;
exports.ConvExpr = ConvExpr;
exports.ConvLdfld = ConvLdfld;
exports.ConvUnionFieldGet = ConvUnionFieldGet;
exports.ConvClassOrRecdFieldGet = ConvClassOrRecdFieldGet;
exports.ConvLetBind = ConvLetBind;
exports.ConvLValueArgs = ConvLValueArgs;
exports.ConvLValueExpr = ConvLValueExpr;
exports.ConvLValueExprCore = ConvLValueExprCore;
exports.ConvObjectModelCall = ConvObjectModelCall;
exports.ConvObjectModelCallCore = ConvObjectModelCallCore;
exports.ConvModuleValueApp = ConvModuleValueApp;
exports.ConvModuleValueAppCore = ConvModuleValueAppCore;
exports.ConvExprs = ConvExprs;
exports.ConvValRef = ConvValRef;
exports.ConvUnionCaseRef = ConvUnionCaseRef;
exports.ConvRecdFieldRef = ConvRecdFieldRef;
exports.ConvVal = ConvVal;
exports.ConvTyparRef = ConvTyparRef;
exports.FilterMeasureTyargs = FilterMeasureTyargs;
exports.ConvType = ConvType;
exports.ConvTypes = ConvTypes;
exports.ConvConst = ConvConst;
exports.ConvDecisionTree = ConvDecisionTree;
exports.IsILTypeRefStaticLinkLocal = IsILTypeRefStaticLinkLocal;
exports.ConvILTypeRefUnadjusted = ConvILTypeRefUnadjusted;
exports.ConvILTypeRef = ConvILTypeRef;
exports.ConvVoidType = ConvVoidType;
exports.ConvILType = ConvILType;
exports.ConvTyconRef = ConvTyconRef;
exports.ConvReturnType = ConvReturnType;
exports.ConvExprPublic = ConvExprPublic;
exports.ConvMethodBase = ConvMethodBase;
exports.IgnoringPartOfQuotedTermWarning = exports.InvalidQuotedTerm = exports.QuotationTranslationEnv = exports.QuotationGenerationScope = exports.QuotationSerializationFormat = exports.IsReflectedDefinition = exports.verboseCReflect = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Map = require("../fable-core.2.0.3/Map");

var _TcGlobals = require("./TcGlobals");

var _ResizeArray = require("../utils/ResizeArray");

var _tast = require("./tast");

var _illib = require("../absil/illib");

var _TastOps = require("./TastOps");

var _Long = require("../fable-core.2.0.3/Long");

var _List = require("../fable-core.2.0.3/List");

var _Option = require("../fable-core.2.0.3/Option");

var _Array = require("../fable-core.2.0.3/Array");

var _PrettyNaming = require("./PrettyNaming");

var _String = require("../fable-core.2.0.3/String");

var _Util = require("../fable-core.2.0.3/Util");

var _QuotationPickler = require("./QuotationPickler");

var _range = require("./range");

var _Seq = require("../fable-core.2.0.3/Seq");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _ildiag = require("../absil/ildiag");

var _TypeRelations = require("./TypeRelations");

var _il2 = require("../absil/il");

var _ast = require("./ast");

const verboseCReflect = false;
exports.verboseCReflect = verboseCReflect;
const IsReflectedDefinition = (0, _Types.declare)(function IsReflectedDefinition(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.IsReflectedDefinition = IsReflectedDefinition;
const QuotationSerializationFormat = (0, _Types.declare)(function QuotationSerializationFormat(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.QuotationSerializationFormat = QuotationSerializationFormat;
const QuotationGenerationScope = (0, _Types.declare)(function QuotationGenerationScope(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
  this.g = arg1;
  this.amap = arg2;
  this.scope = arg3;
  this.referencedTypeDefs = arg4;
  this.referencedTypeDefsTable = arg5;
  this.typeSplices = arg6;
  this.exprSplices = arg7;
  this.isReflectedDefinition = arg8;
  this.quotationFormat = arg9;
  this.emitDebugInfoInQuotations = arg10;
}, _Types.Record);
exports.QuotationGenerationScope = QuotationGenerationScope;

function QuotationGenerationScope$$$Create$$Z76DDC216(g, amap, scope, isReflectedDefinition) {
  return new QuotationGenerationScope(g, amap, scope, [], (0, _Map.createMutable)([], {
    Compare($x$$1, $y$$2) {
      return $x$$1.CompareTo($y$$2);
    }

  }), [], [], isReflectedDefinition, QuotationGenerationScope$$$ComputeQuotationFormat$$2AE8EA0C(g), (0, _TcGlobals.TcGlobals$$get_emitDebugInfoInQuotations)(g));
}

function QuotationGenerationScope$$Close(cenv) {
  return [(0, _ResizeArray.toList)(cenv.referencedTypeDefs), (0, _ResizeArray.toList)((0, _ResizeArray.map)(function arg00$0040$$1(tupledArg) {
    return [(0, _tast.mkTyparTy)(tupledArg[0]), tupledArg[1]];
  }, cenv.typeSplices)), (0, _ResizeArray.toList)(cenv.exprSplices)];
}

function QuotationGenerationScope$$$ComputeQuotationFormat$$2AE8EA0C(g$$1) {
  var copyOfStruct;
  const deserializeExValRef = (0, _TcGlobals.ValRefForIntrinsic)((0, _TcGlobals.TcGlobals$$get_deserialize_quoted_FSharp_40_plus_info)(g$$1));

  if (copyOfStruct = (0, _tast.ValRef$$get_TryDeref)(deserializeExValRef), (0, _illib.ValueOption$00601$$get_IsSome)(copyOfStruct)) {
    return new QuotationSerializationFormat(0, "FSharp_40_Plus");
  } else {
    return new QuotationSerializationFormat(1, "FSharp_20_Plus");
  }
}

const QuotationTranslationEnv = (0, _Types.declare)(function QuotationTranslationEnv(arg1, arg2, arg3, arg4, arg5) {
  this.vs = arg1;
  this.nvs = arg2 | 0;
  this.tyvs = arg3;
  this.isinstVals = arg4;
  this.substVals = arg5;
}, _Types.Record);
exports.QuotationTranslationEnv = QuotationTranslationEnv;

function QuotationTranslationEnv$$$get_Empty() {
  return new QuotationTranslationEnv((0, _TastOps.ValMap$00601$$$get_Empty)(), 0, (0, _Map.empty)({
    Compare: _Long.compare
  }), (0, _TastOps.ValMap$00601$$$get_Empty)(), (0, _TastOps.ValMap$00601$$$get_Empty)());
}

function QuotationTranslationEnv$$BindTypar$$ZB4A2630(env, v) {
  const idx = (0, _Map.FSharpMap$$get_Count)(env.tyvs) | 0;
  return new QuotationTranslationEnv(env.vs, env.nvs, (0, _Map.FSharpMap$$Add$$5BDDA1)(env.tyvs, (0, _tast.Typar$$get_Stamp)(v), idx), env.isinstVals, env.substVals);
}

function QuotationTranslationEnv$$BindTypars$$52A2C29A(env$$1, vs) {
  return (0, _List.fold)(function folder(env$$2, v$$1) {
    return QuotationTranslationEnv$$BindTypar$$ZB4A2630(env$$2, v$$1);
  }, env$$1, vs);
}

function BindFormalTypars(env$$3, vs$$1) {
  return QuotationTranslationEnv$$BindTypars$$52A2C29A(new QuotationTranslationEnv(env$$3.vs, env$$3.nvs, (0, _Map.empty)({
    Compare: _Long.compare
  }), env$$3.isinstVals, env$$3.substVals), vs$$1);
}

function BindVal(env$$4, v$$2) {
  return new QuotationTranslationEnv((0, _TastOps.ValMap$00601$$Add)(env$$4.vs, v$$2, env$$4.nvs), env$$4.nvs + 1, env$$4.tyvs, env$$4.isinstVals, env$$4.substVals);
}

function BindIsInstVal(env$$5, v$$3, ty$$1, e) {
  return new QuotationTranslationEnv(env$$5.vs, env$$5.nvs, env$$5.tyvs, (0, _TastOps.ValMap$00601$$Add)(env$$5.isinstVals, v$$3, [ty$$1, e]), env$$5.substVals);
}

function BindSubstVal(env$$6, v$$4, e$$1) {
  return new QuotationTranslationEnv(env$$6.vs, env$$6.nvs, env$$6.tyvs, env$$6.isinstVals, (0, _TastOps.ValMap$00601$$Add)(env$$6.substVals, v$$4, e$$1));
}

function BindVals(env$$7, vs$$2) {
  return (0, _List.fold)(BindVal, env$$7, vs$$2);
}

function BindFlatVals(env$$9, vs$$3) {
  return (0, _List.fold)(BindVal, env$$9, vs$$3);
}

const InvalidQuotedTerm = (0, _Types.declare)(function InvalidQuotedTerm(arg1) {
  this.Data0 = arg1;
}, _Types.FSharpException);
exports.InvalidQuotedTerm = InvalidQuotedTerm;
const IgnoringPartOfQuotedTermWarning = (0, _Types.declare)(function IgnoringPartOfQuotedTermWarning(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.IgnoringPartOfQuotedTermWarning = IgnoringPartOfQuotedTermWarning;

function wfail(e$$2) {
  throw new InvalidQuotedTerm(e$$2);
}

function $007CModuleValueOrMemberUse$007C_$007C(g$$2, expr) {
  const loop = function loop(expr$$1, args) {
    var vref$$2, vFlags$$2, f$$2, _m$$2, vref, vFlags, tyargs, fty, f, actualArgs, _m;

    loop: while (true) {
      const matchValue = (0, _TastOps.stripExpr)(expr$$1);

      var $target$$9, _m$$1, actualArgs$$1, f$$1, fty$$1, tyargs$$1, vFlags$$1, vref$$1;

      if (matchValue.tag === 5) {
        const activePatternResult44804 = (0, _TastOps.$007CInnerExprPat$007C)(matchValue.fields[0]);

        if (activePatternResult44804.tag === 1) {
          if (vref = activePatternResult44804.fields[0], (vFlags = activePatternResult44804.fields[1], (tyargs = matchValue.fields[2], (fty = matchValue.fields[1], (f = activePatternResult44804, (actualArgs = matchValue.fields[3], (_m = matchValue.fields[4], (0, _tast.ValRef$$get_IsMemberOrModuleBinding)(vref)))))))) {
            $target$$9 = 0;
            _m$$1 = matchValue.fields[4];
            actualArgs$$1 = matchValue.fields[3];
            f$$1 = activePatternResult44804;
            fty$$1 = matchValue.fields[1];
            tyargs$$1 = matchValue.fields[2];
            vFlags$$1 = activePatternResult44804.fields[1];
            vref$$1 = activePatternResult44804.fields[0];
          } else {
            $target$$9 = 1;
          }
        } else {
          $target$$9 = 1;
        }
      } else {
        $target$$9 = 1;
      }

      switch ($target$$9) {
        case 0:
          {
            return [vref$$1, vFlags$$1, f$$1, fty$$1, tyargs$$1, (0, _List.append)(actualArgs$$1, args)];
          }

        case 1:
          {
            var $target$$10, _fty, actualArgs$$2, f$$3, _m$$3, f$$4, vFlags$$3, vref$$3;

            if (matchValue.tag === 5) {
              if (matchValue.fields[2].tail == null) {
                $target$$10 = 0;
                _fty = matchValue.fields[1];
                actualArgs$$2 = matchValue.fields[3];
                f$$3 = matchValue.fields[0];
              } else {
                $target$$10 = 2;
              }
            } else if (matchValue.tag === 1) {
              if (vref$$2 = matchValue.fields[0], (vFlags$$2 = matchValue.fields[1], (f$$2 = matchValue, (_m$$2 = matchValue.fields[2], (0, _tast.ValRef$$get_DeclaringEntity)(vref$$2).tag === 1 ? false : true)))) {
                $target$$10 = 1;
                _m$$3 = matchValue.fields[2];
                f$$4 = matchValue;
                vFlags$$3 = matchValue.fields[1];
                vref$$3 = matchValue.fields[0];
              } else {
                $target$$10 = 2;
              }
            } else {
              $target$$10 = 2;
            }

            switch ($target$$10) {
              case 0:
                {
                  expr$$1 = f$$3;
                  args = (0, _List.append)(actualArgs$$2, args);
                  continue loop;
                }

              case 1:
                {
                  const fty$$2 = (0, _TastOps.tyOfExpr)(g$$2, f$$4);
                  return [vref$$3, vFlags$$3, f$$4, fty$$2, (0, _Types.L)(), args];
                }

              case 2:
                {
                  return null;
                }
            }
          }
      }
    }
  };

  return loop(expr, (0, _Types.L)());
}

function $007CSimpleArrayLoopUpperBound$007C_$007C(expr$$2) {
  var $target$$11;

  if (expr$$2.tag === 11) {
    if (expr$$2.fields[0].tag === 22) {
      if (expr$$2.fields[0].fields[0].tail != null) {
        if (expr$$2.fields[0].fields[0].head.tag === 22) {
          if (expr$$2.fields[0].fields[0].tail.tail == null) {
            if (expr$$2.fields[2].tail != null) {
              if (expr$$2.fields[2].head.tag === 11) {
                if (expr$$2.fields[2].head.fields[0].tag === 22) {
                  if (expr$$2.fields[2].head.fields[0].fields[0].tail != null) {
                    if (expr$$2.fields[2].head.fields[0].fields[0].head.tag === 84) {
                      if (expr$$2.fields[2].head.fields[0].fields[0].tail.tail != null) {
                        if (expr$$2.fields[2].head.fields[0].fields[0].tail.head.tag === 11) {
                          if (expr$$2.fields[2].head.fields[0].fields[0].tail.head.fields[0].tag === 5) {
                            if (expr$$2.fields[2].head.fields[0].fields[0].tail.tail.tail == null) {
                              if (expr$$2.fields[2].tail.tail != null) {
                                if (expr$$2.fields[2].tail.head.tag === 0) {
                                  if (expr$$2.fields[2].tail.head.fields[0].tag === 5) {
                                    if (expr$$2.fields[2].tail.head.fields[0].fields[0] === 1) {
                                      if (expr$$2.fields[2].tail.tail.tail == null) {
                                        $target$$11 = 0;
                                      } else {
                                        $target$$11 = 1;
                                      }
                                    } else {
                                      $target$$11 = 1;
                                    }
                                  } else {
                                    $target$$11 = 1;
                                  }
                                } else {
                                  $target$$11 = 1;
                                }
                              } else {
                                $target$$11 = 1;
                              }
                            } else {
                              $target$$11 = 1;
                            }
                          } else {
                            $target$$11 = 1;
                          }
                        } else {
                          $target$$11 = 1;
                        }
                      } else {
                        $target$$11 = 1;
                      }
                    } else {
                      $target$$11 = 1;
                    }
                  } else {
                    $target$$11 = 1;
                  }
                } else {
                  $target$$11 = 1;
                }
              } else {
                $target$$11 = 1;
              }
            } else {
              $target$$11 = 1;
            }
          } else {
            $target$$11 = 1;
          }
        } else {
          $target$$11 = 1;
        }
      } else {
        $target$$11 = 1;
      }
    } else {
      $target$$11 = 1;
    }
  } else {
    $target$$11 = 1;
  }

  switch ($target$$11) {
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

function $007CSimpleArrayLoopBody$007C_$007C(g$$3, expr$$3) {
  var $target$$12, a, args$$1, arr, b, body, elemTy, forVarLoop, freeVars, idx$$1, m$$1, m1, m2, seqPoint, ty$$2;

  if (expr$$3.tag === 3) {
    if (expr$$3.fields[3].tail != null) {
      if (expr$$3.fields[3].tail.tail == null) {
        if (expr$$3.fields[4].tag === 7) {
          if (expr$$3.fields[4].fields[0].fields[1].tag === 11) {
            if (expr$$3.fields[4].fields[0].fields[1].fields[0].tag === 22) {
              if (expr$$3.fields[4].fields[0].fields[1].fields[0].fields[0].tail != null) {
                if (expr$$3.fields[4].fields[0].fields[1].fields[0].fields[0].head.tag === 81) {
                  if (expr$$3.fields[4].fields[0].fields[1].fields[0].fields[0].head.fields[0].fields[0].tail != null) {
                    if (expr$$3.fields[4].fields[0].fields[1].fields[0].fields[0].head.fields[0].fields[0].head[0] != null) {
                      if (expr$$3.fields[4].fields[0].fields[1].fields[0].fields[0].head.fields[0].fields[0].head[0] === 0) {
                        if (expr$$3.fields[4].fields[0].fields[1].fields[0].fields[0].head.fields[0].fields[0].head[1] == null) {
                          if (expr$$3.fields[4].fields[0].fields[1].fields[0].fields[0].head.fields[0].fields[0].tail.tail == null) {
                            if (expr$$3.fields[4].fields[0].fields[1].fields[0].fields[0].tail.tail == null) {
                              if (expr$$3.fields[4].fields[0].fields[1].fields[1].tail != null) {
                                if (expr$$3.fields[4].fields[0].fields[1].fields[1].tail.tail == null) {
                                  if (expr$$3.fields[4].fields[0].fields[1].fields[2].tail != null) {
                                    if (expr$$3.fields[4].fields[0].fields[1].fields[2].tail.tail != null) {
                                      if (expr$$3.fields[4].fields[0].fields[1].fields[2].tail.tail.tail == null) {
                                        $target$$12 = 0;
                                        a = expr$$3.fields[1];
                                        args$$1 = expr$$3.fields[3];
                                        arr = expr$$3.fields[4].fields[0].fields[1].fields[2].head;
                                        b = expr$$3.fields[2];
                                        body = expr$$3.fields[4].fields[1];
                                        elemTy = expr$$3.fields[4].fields[0].fields[1].fields[1].head;
                                        forVarLoop = expr$$3.fields[4].fields[0].fields[0];
                                        freeVars = expr$$3.fields[4].fields[3];
                                        idx$$1 = expr$$3.fields[4].fields[0].fields[1].fields[2].tail.head;
                                        m$$1 = expr$$3.fields[5];
                                        m1 = expr$$3.fields[4].fields[0].fields[1].fields[3];
                                        m2 = expr$$3.fields[4].fields[2];
                                        seqPoint = expr$$3.fields[4].fields[0].fields[2];
                                        ty$$2 = expr$$3.fields[6];
                                      } else {
                                        $target$$12 = 1;
                                      }
                                    } else {
                                      $target$$12 = 1;
                                    }
                                  } else {
                                    $target$$12 = 1;
                                  }
                                } else {
                                  $target$$12 = 1;
                                }
                              } else {
                                $target$$12 = 1;
                              }
                            } else {
                              $target$$12 = 1;
                            }
                          } else {
                            $target$$12 = 1;
                          }
                        } else {
                          $target$$12 = 1;
                        }
                      } else {
                        $target$$12 = 1;
                      }
                    } else {
                      $target$$12 = 1;
                    }
                  } else {
                    $target$$12 = 1;
                  }
                } else {
                  $target$$12 = 1;
                }
              } else {
                $target$$12 = 1;
              }
            } else {
              $target$$12 = 1;
            }
          } else {
            $target$$12 = 1;
          }
        } else {
          $target$$12 = 1;
        }
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
        const body$$1 = new _tast.Expr(7, "Let", new _tast.Binding(0, "TBind", forVarLoop, (0, _TastOps.mkCallArrayGet)(g$$3, m1, elemTy, arr, idx$$1), seqPoint), body, m2, freeVars);
        const expr$$4 = new _tast.Expr(3, "Lambda", (0, _tast.newUnique)(), a, b, args$$1, body$$1, m$$1, ty$$2);
        return [arr, elemTy, expr$$4];
      }

    case 1:
      {
        return null;
      }
  }
}

function $007CObjectInitializationCheck$007C_$007C(g$$4, expr$$5) {
  var selfRef, resultTy, name, failInitRef;
  var $target$$13, failInitRef$$1, name$$1, resultTy$$1, selfRef$$1;

  if (expr$$5.tag === 9) {
    if (expr$$5.fields[2].tag === 0) {
      if (expr$$5.fields[2].fields[0].tag === 11) {
        if (expr$$5.fields[2].fields[0].fields[0].tag === 22) {
          if (expr$$5.fields[2].fields[0].fields[0].fields[0].tail != null) {
            if (expr$$5.fields[2].fields[0].fields[0].fields[0].head.tag === 9) {
              if (expr$$5.fields[2].fields[0].fields[0].fields[0].tail.tail == null) {
                if (expr$$5.fields[2].fields[0].fields[2].tail != null) {
                  if (expr$$5.fields[2].fields[0].fields[2].head.tag === 11) {
                    if (expr$$5.fields[2].fields[0].fields[2].head.fields[0].tag === 12) {
                      if (expr$$5.fields[2].fields[0].fields[2].head.fields[2].tail != null) {
                        if (expr$$5.fields[2].fields[0].fields[2].head.fields[2].head.tag === 1) {
                          if (expr$$5.fields[2].fields[0].fields[2].head.fields[2].head.fields[1].tag === 1) {
                            if (expr$$5.fields[2].fields[0].fields[2].head.fields[2].tail.tail == null) {
                              if (expr$$5.fields[2].fields[0].fields[2].tail.tail != null) {
                                if (expr$$5.fields[2].fields[0].fields[2].tail.head.tag === 0) {
                                  if (expr$$5.fields[2].fields[0].fields[2].tail.head.fields[0].tag === 5) {
                                    if (expr$$5.fields[2].fields[0].fields[2].tail.head.fields[0].fields[0] === 1) {
                                      if (expr$$5.fields[2].fields[0].fields[2].tail.tail.tail == null) {
                                        if (!(0, _Array.equalsWith)(function ($x$$7, $y$$8) {
                                          return $x$$7.CompareTo($y$$8);
                                        }, expr$$5.fields[3], null) ? expr$$5.fields[3].length === 2 : false) {
                                          if (expr$$5.fields[3][0].fields[0].tail == null) {
                                            if (expr$$5.fields[3][0].fields[1].tag === 5) {
                                              if (expr$$5.fields[3][0].fields[1].fields[0].tag === 1) {
                                                if (selfRef = expr$$5.fields[2].fields[0].fields[2].head.fields[2].head.fields[0], (resultTy = expr$$5.fields[5], (name = expr$$5.fields[2].fields[0].fields[2].head.fields[0].fields[0].fields[1], (failInitRef = expr$$5.fields[3][0].fields[1].fields[0].fields[0], ((((0, _PrettyNaming.IsCompilerGeneratedName)(name) ? (0, _String.startsWith)(name, "init", 4) : false) ? (0, _Util.equals)((0, _tast.ValRef$$get_BaseOrThisInfo)(selfRef), new _tast.ValBaseOrThisInfo(3, "MemberThisVal")) : false) ? (0, _TastOps.valRefEq)(g$$4, failInitRef, (0, _TcGlobals.ValRefForIntrinsic)((0, _TcGlobals.TcGlobals$$get_fail_init_info)(g$$4))) : false) ? (0, _TastOps.isUnitTy)(g$$4, resultTy) : false)))) {
                                                  $target$$13 = 0;
                                                  failInitRef$$1 = expr$$5.fields[3][0].fields[1].fields[0].fields[0];
                                                  name$$1 = expr$$5.fields[2].fields[0].fields[2].head.fields[0].fields[0].fields[1];
                                                  resultTy$$1 = expr$$5.fields[5];
                                                  selfRef$$1 = expr$$5.fields[2].fields[0].fields[2].head.fields[2].head.fields[0];
                                                } else {
                                                  $target$$13 = 1;
                                                }
                                              } else {
                                                $target$$13 = 1;
                                              }
                                            } else {
                                              $target$$13 = 1;
                                            }
                                          } else {
                                            $target$$13 = 1;
                                          }
                                        } else {
                                          $target$$13 = 1;
                                        }
                                      } else {
                                        $target$$13 = 1;
                                      }
                                    } else {
                                      $target$$13 = 1;
                                    }
                                  } else {
                                    $target$$13 = 1;
                                  }
                                } else {
                                  $target$$13 = 1;
                                }
                              } else {
                                $target$$13 = 1;
                              }
                            } else {
                              $target$$13 = 1;
                            }
                          } else {
                            $target$$13 = 1;
                          }
                        } else {
                          $target$$13 = 1;
                        }
                      } else {
                        $target$$13 = 1;
                      }
                    } else {
                      $target$$13 = 1;
                    }
                  } else {
                    $target$$13 = 1;
                  }
                } else {
                  $target$$13 = 1;
                }
              } else {
                $target$$13 = 1;
              }
            } else {
              $target$$13 = 1;
            }
          } else {
            $target$$13 = 1;
          }
        } else {
          $target$$13 = 1;
        }
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
        return (0, _Option.some)(null);
      }

    case 1:
      {
        return null;
      }
  }
}

function isSplice(g$$5, vref$$4) {
  if ((0, _TastOps.valRefEq)(g$$5, vref$$4, (0, _TcGlobals.TcGlobals$$get_splice_expr_vref)(g$$5))) {
    return true;
  } else {
    return (0, _TastOps.valRefEq)(g$$5, vref$$4, (0, _TcGlobals.TcGlobals$$get_splice_raw_expr_vref)(g$$5));
  }
}

function EmitDebugInfoIfNecessary(cenv$$1, env$$11, m$$2, astExpr) {
  if (cenv$$1.emitDebugInfoInQuotations ? !(0, _QuotationPickler.isAttributedExpression)(astExpr) : false) {
    cenv$$1.emitDebugInfoInQuotations = false;

    try {
      const mk_tuple = function mk_tuple(g$$6, m$$3, es) {
        return (0, _TastOps.mkRefTupled)(g$$6, m$$3, es, (0, _List.map)(function (arg10$0040$$1) {
          return (0, _TastOps.tyOfExpr)(g$$6, arg10$0040$$1);
        }, es));
      };

      const rangeExpr = mk_tuple(cenv$$1.g, m$$2, (0, _Types.L)((0, _TastOps.mkString)(cenv$$1.g, m$$2, (0, _range.range$$get_FileName)(m$$2)), (0, _Types.L)((0, _TastOps.mkInt)(cenv$$1.g, m$$2, (0, _range.range$$get_StartLine)(m$$2)), (0, _Types.L)((0, _TastOps.mkInt)(cenv$$1.g, m$$2, (0, _range.range$$get_StartColumn)(m$$2)), (0, _Types.L)((0, _TastOps.mkInt)(cenv$$1.g, m$$2, (0, _range.range$$get_EndLine)(m$$2)), (0, _Types.L)((0, _TastOps.mkInt)(cenv$$1.g, m$$2, (0, _range.range$$get_EndColumn)(m$$2)), (0, _Types.L)()))))));
      const attrExpr = mk_tuple(cenv$$1.g, m$$2, (0, _Types.L)((0, _TastOps.mkString)(cenv$$1.g, m$$2, "DebugRange"), (0, _Types.L)(rangeExpr, (0, _Types.L)())));
      const attrExprR = ConvExprCore(cenv$$1, env$$11, attrExpr);
      return (0, _QuotationPickler.mkAttributedExpression)(astExpr, attrExprR);
    } finally {
      cenv$$1.emitDebugInfoInQuotations = true;
    }
  } else {
    return astExpr;
  }
}

function ConvExpr(cenv$$2, env$$12, expr$$6) {
  return EmitDebugInfoIfNecessary(cenv$$2, env$$12, (0, _TastOps.Expr$002Eget_Range)(expr$$6), ConvExprCore(cenv$$2, env$$12, expr$$6));
}

function ConvExprCore(cenv$$3, env$$13, expr$$7) {
  var tcref$$4, ty$$5, tps$$3, tmvs, tmethod, m$$14, e$$3, ctyp, vref$$5, vFlags$$4, tyargs$$2, curriedArgs, _fty$$1, _f, x0, vf, rest, m$$4;

  const expr$$8 = (0, _TastOps.DetectAndOptimizeForExpression)(cenv$$3.g, new _TastOps.OptimizeForExpressionOptions(0, "OptimizeIntRangesOnly"), expr$$7);
  const expr$$9 = (0, _TastOps.NormalizeAndAdjustPossibleSubsumptionExprs)(cenv$$3.g, expr$$8);
  const expr$$10 = (0, _TastOps.stripExpr)(expr$$9);
  var $target$$14, m$$5, rest$$1, vf$$1, x0$$1;

  if (expr$$10.tag === 5) {
    const activePatternResult44851 = (0, _TastOps.$007CInnerExprPat$007C)(expr$$10.fields[0]);

    if (activePatternResult44851.tag === 1) {
      if (expr$$10.fields[3].tail != null) {
        if (x0 = expr$$10.fields[3].head, (vf = activePatternResult44851.fields[0], (rest = expr$$10.fields[3].tail, (m$$4 = expr$$10.fields[4], isSplice(cenv$$3.g, vf))))) {
          $target$$14 = 0;
          m$$5 = expr$$10.fields[4];
          rest$$1 = expr$$10.fields[3].tail;
          vf$$1 = activePatternResult44851.fields[0];
          x0$$1 = expr$$10.fields[3].head;
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
        const idx$$2 = (0, _Util.count)(cenv$$3.exprSplices) | 0;
        const ty$$3 = (0, _TastOps.tyOfExpr)(cenv$$3.g, expr$$10);
        const matchValue$$2 = (0, _Seq.tryPick)(function chooser(v$$7) {
          if ((0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(env$$13.vs, v$$7)) {
            return v$$7;
          } else {
            return null;
          }
        }, (0, _TastOps.freeInExpr)(_TastOps.CollectTyparsAndLocalsNoCaching, x0$$1).FreeLocals);

        if (matchValue$$2 == null) {} else {
          const v$$8 = matchValue$$2;
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefBoundVarUsedInSplice$$Z721C83C5)((0, _tast.Val$$get_DisplayName)(v$$8)), (0, _tast.Val$$get_Range)(v$$8)));
        }

        cenv$$3.exprSplices.push([x0$$1, m$$5]);
        const hole = (0, _QuotationPickler.mkHole)(ConvType(cenv$$3, env$$13, m$$5, ty$$3), idx$$2);
        return (0, _List.fold)(function folder$$1(fR, arg) {
          return (0, _QuotationPickler.mkApp)(fR, ConvExpr(cenv$$3, env$$13, arg));
        }, hole, rest$$1);
      }

    case 1:
      {
        var $target$$15, _f$$1, _fty$$2, curriedArgs$$1, tyargs$$3, vFlags$$5, vref$$6;

        const activePatternResult44850 = $007CModuleValueOrMemberUse$007C_$007C(cenv$$3.g, expr$$10);

        if (activePatternResult44850 != null) {
          if (vref$$5 = activePatternResult44850[0], (vFlags$$4 = activePatternResult44850[1], (tyargs$$2 = activePatternResult44850[4], (curriedArgs = activePatternResult44850[5], (_fty$$1 = activePatternResult44850[3], (_f = activePatternResult44850[2], !isSplice(cenv$$3.g, vref$$5))))))) {
            $target$$15 = 0;
            _f$$1 = activePatternResult44850[2];
            _fty$$2 = activePatternResult44850[3];
            curriedArgs$$1 = activePatternResult44850[5];
            tyargs$$3 = activePatternResult44850[4];
            vFlags$$5 = activePatternResult44850[1];
            vref$$6 = activePatternResult44850[0];
          } else {
            $target$$15 = 1;
          }
        } else {
          $target$$15 = 1;
        }

        switch ($target$$15) {
          case 0:
            {
              const m$$6 = (0, _TastOps.Expr$002Eget_Range)(expr$$10);
              const patternInput = (0, _TastOps.GetMemberCallInfo)(cenv$$3.g, vref$$6, vFlags$$5);
              let patternInput$$3;
              var $target$$16;

              if ((0, _tast.ValRef$$get_MemberInfo)(vref$$6) != null) {
                if (!(0, _tast.ValRef$$get_IsExtensionMember)(vref$$6)) {
                  $target$$16 = 0;
                } else {
                  $target$$16 = 1;
                }
              } else {
                $target$$16 = 1;
              }

              switch ($target$$16) {
                case 0:
                  {
                    const patternInput$$1 = (0, _TastOps.GetTypeOfIntrinsicMemberInCompiledForm)(cenv$$3.g, vref$$6);
                    patternInput$$3 = [true, patternInput$$1[0], patternInput$$1[1], patternInput$$1[2]];
                    break;
                  }

                case 1:
                  {
                    const arities = (0, _tast.arityOfVal)((0, _tast.ValRef$$get_Deref)(vref$$6));
                    const patternInput$$2 = (0, _TastOps.GetTopValTypeInCompiledForm)(cenv$$3.g, arities, (0, _tast.ValRef$$get_Type)(vref$$6), m$$6);
                    patternInput$$3 = [false, patternInput$$2[0], patternInput$$2[1], patternInput$$2[2]];
                    break;
                  }
              }

              let patternInput$$4;
              const matchValue$$4 = [patternInput[5], curriedArgs$$1];

              if (matchValue$$4[0]) {
                if (matchValue$$4[1].tail == null) {
                  patternInput$$4 = wfail(new _ErrorLogger.InternalError("warning: unexpected missing object argument when generating quotation for call to F# object member " + (0, _tast.ValRef$$get_LogicalName)(vref$$6), m$$6));
                } else {
                  const objArg = matchValue$$4[1].head;
                  const curriedArgs$$3 = matchValue$$4[1].tail;
                  patternInput$$4 = [(0, _Types.L)(objArg, (0, _Types.L)()), curriedArgs$$3];
                }
              } else {
                patternInput$$4 = [(0, _Types.L)(), matchValue$$4[1]];
              }

              if (verboseCReflect) {
                (0, _ildiag.dprintfn)((0, _String.printf)("vref.DisplayName = %A,  #objArgs = %A, #curriedArgs = %A"))((0, _tast.ValRef$$get_DisplayName)(vref$$6))((0, _List.length)(patternInput$$4[0]))((0, _List.length)(patternInput$$4[1]));
              }

              const nCurriedArgInfos = (0, _List.length)(patternInput$$3[2]) | 0;

              if ((0, _List.length)(patternInput$$4[1]) < nCurriedArgInfos ? true : (0, _List.exists2)(function predicate(arg$$1, argInfo) {
                return (0, _List.length)(argInfo) > (0, _List.length)((0, _TastOps.tryDestRefTupleExpr)(arg$$1));
              }, (0, _List.truncate)(nCurriedArgInfos, patternInput$$4[1]), patternInput$$3[2])) {
                if (verboseCReflect) {
                  (0, _ildiag.dprintfn)((0, _String.printf)("vref.DisplayName = %A was under applied"))((0, _tast.ValRef$$get_DisplayName)(vref$$6));
                }

                let topValInfo;
                const matchValue$$5 = (0, _tast.ValRef$$get_ValReprInfo)(vref$$6);

                if (matchValue$$5 != null) {
                  const a$$1 = matchValue$$5;
                  topValInfo = a$$1;
                } else {
                  topValInfo = (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("no arity information found for F# value " + (0, _tast.ValRef$$get_LogicalName)(vref$$6), (0, _tast.ValRef$$get_Range)(vref$$6)));
                }

                const patternInput$$5 = (0, _TastOps.AdjustValForExpectedArity)(cenv$$3.g, m$$6, vref$$6, vFlags$$5, topValInfo);
                return ConvExpr(cenv$$3, env$$13, (0, _TastOps.MakeApplicationAndBetaReduce)(cenv$$3.g, patternInput$$5[0], patternInput$$5[1], (0, _Types.L)(tyargs$$3, (0, _Types.L)()), patternInput$$4[1], m$$6));
              } else {
                const patternInput$$6 = (0, _List.splitAt)(nCurriedArgInfos, patternInput$$4[1]);
                let callR;
                const untupledCurriedArgs = (0, _List.map2)(function mapping(arg$$2, curriedArgInfo) {
                  const numUntupledArgs = (0, _List.length)(curriedArgInfo) | 0;

                  if (numUntupledArgs === 0) {
                    return (0, _Types.L)();
                  } else if (numUntupledArgs === 1) {
                    return (0, _Types.L)(arg$$2, (0, _Types.L)());
                  } else {
                    return (0, _TastOps.tryDestRefTupleExpr)(arg$$2);
                  }
                }, patternInput$$6[0], patternInput$$3[2]);

                if (verboseCReflect) {
                  (0, _ildiag.dprintfn)((0, _String.printf)("vref.DisplayName  = %A , after unit adjust, #untupledCurriedArgs = %A, #curriedArgInfos = %d"))((0, _tast.ValRef$$get_DisplayName)(vref$$6))((0, _List.map)(_List.length, untupledCurriedArgs))((0, _List.length)(patternInput$$3[2]));
                }

                let subCall;

                if (patternInput$$3[0]) {
                  const callArgs = (0, _List.concat)((0, _Types.L)(patternInput$$4[0], untupledCurriedArgs));
                  const parentTyconR = ConvTyconRef(cenv$$3, (0, _tast.ValRef$$get_TopValDeclaringEntity)(vref$$6), m$$6);
                  const isNewObj$$1 = (patternInput[2] ? true : patternInput[3]) ? true : patternInput[4];
                  const envinner = BindFormalTypars(env$$13, patternInput$$3[1]);
                  const argTys = (0, _List.map)(function mapping$$1(tuple) {
                    return tuple[0];
                  }, (0, _List.concat)(patternInput$$3[2]));
                  const methArgTypesR = ConvTypes(cenv$$3, envinner, m$$6, argTys);
                  const methRetTypeR = ConvReturnType(cenv$$3, envinner, m$$6, patternInput$$3[3]);
                  const methName = (0, _tast.ValRef$$get_CompiledName)(vref$$6);
                  const numGenericArgs = (0, _List.length)(tyargs$$3) - patternInput[0] | 0;
                  subCall = ConvObjectModelCall(cenv$$3, env$$13, m$$6, patternInput[6], patternInput[7], isNewObj$$1, parentTyconR, methArgTypesR, methRetTypeR, methName, tyargs$$3, numGenericArgs, callArgs);
                } else {
                  subCall = ConvModuleValueApp(cenv$$3, env$$13, m$$6, vref$$6, tyargs$$3, untupledCurriedArgs);
                }

                const matchValue$$6 = [patternInput$$6[0], patternInput$$3[2]];
                var $target$$17, arg$$3;

                if (matchValue$$6[0].tail != null) {
                  if (matchValue$$6[0].tail.tail == null) {
                    if (matchValue$$6[1].tail != null) {
                      if (matchValue$$6[1].head.tail == null) {
                        if (matchValue$$6[1].tail.tail == null) {
                          $target$$17 = 0;
                          arg$$3 = matchValue$$6[0].head;
                        } else {
                          $target$$17 = 1;
                        }
                      } else {
                        $target$$17 = 1;
                      }
                    } else {
                      $target$$17 = 1;
                    }
                  } else {
                    $target$$17 = 1;
                  }
                } else {
                  $target$$17 = 1;
                }

                switch ($target$$17) {
                  case 0:
                    {
                      var $target$$18;

                      if (arg$$3.tag === 1) {
                        $target$$18 = 0;
                      } else if (arg$$3.tag === 0) {
                        if (arg$$3.fields[0].tag === 16) {
                          $target$$18 = 0;
                        } else {
                          $target$$18 = 1;
                        }
                      } else {
                        $target$$18 = 1;
                      }

                      switch ($target$$18) {
                        case 0:
                          {
                            callR = subCall;
                            break;
                          }

                        case 1:
                          {
                            const argQ = ConvExpr(cenv$$3, env$$13, arg$$3);
                            callR = (0, _QuotationPickler.mkSequential)(argQ, subCall);
                            break;
                          }
                      }

                      break;
                    }

                  case 1:
                    {
                      callR = subCall;
                      break;
                    }
                }

                return (0, _List.fold)(function (fR$$1, arg$$4) {
                  return (0, _QuotationPickler.mkApp)(fR$$1, ConvExpr(cenv$$3, env$$13, arg$$4));
                }, callR, patternInput$$6[1]);
              }
            }

          case 1:
            {
              var $target$$19, args$$2, f$$5, fty$$3, m$$7, tyargs$$4, _fty$$3, _vFlags, m$$8, tyargs$$5, vref$$7, _fty$$4, args$$3, f$$6, m$$9, tyargs$$6, c, m$$10, ty$$4, _vFlags$$1, m$$11, vref$$8, bind, body$$2, binds, body$$3, b$$2, vs$$5, ast, ety, m$$12, _spBind, dtree, m$$13, retTy$$3, tgs, x1;

              if (expr$$10.tag === 5) {
                if (expr$$10.fields[2].tail != null) {
                  if (expr$$10.fields[3].tail == null) {
                    const activePatternResult44845 = (0, _TastOps.$007CInnerExprPat$007C)(expr$$10.fields[0]);

                    if (activePatternResult44845.tag === 1) {
                      $target$$19 = 1;
                      _fty$$3 = expr$$10.fields[1];
                      _vFlags = activePatternResult44845.fields[1];
                      m$$8 = activePatternResult44845.fields[2];
                      tyargs$$5 = expr$$10.fields[2];
                      vref$$7 = activePatternResult44845.fields[0];
                    } else {
                      $target$$19 = 2;
                      _fty$$4 = expr$$10.fields[1];
                      args$$3 = expr$$10.fields[3];
                      f$$6 = expr$$10.fields[0];
                      m$$9 = expr$$10.fields[4];
                      tyargs$$6 = expr$$10.fields[2];
                    }
                  } else {
                    $target$$19 = 0;
                    args$$2 = expr$$10.fields[3];
                    f$$5 = expr$$10.fields[0];
                    fty$$3 = expr$$10.fields[1];
                    m$$7 = expr$$10.fields[4];
                    tyargs$$4 = expr$$10.fields[2];
                  }
                } else {
                  const activePatternResult44846 = (0, _TastOps.$007CInnerExprPat$007C)(expr$$10.fields[0]);

                  if (activePatternResult44846.tag === 1) {
                    if (expr$$10.fields[3].tail == null) {
                      $target$$19 = 1;
                      _fty$$3 = expr$$10.fields[1];
                      _vFlags = activePatternResult44846.fields[1];
                      m$$8 = activePatternResult44846.fields[2];
                      tyargs$$5 = expr$$10.fields[2];
                      vref$$7 = activePatternResult44846.fields[0];
                    } else {
                      $target$$19 = 2;
                      _fty$$4 = expr$$10.fields[1];
                      args$$3 = expr$$10.fields[3];
                      f$$6 = expr$$10.fields[0];
                      m$$9 = expr$$10.fields[4];
                      tyargs$$6 = expr$$10.fields[2];
                    }
                  } else {
                    $target$$19 = 2;
                    _fty$$4 = expr$$10.fields[1];
                    args$$3 = expr$$10.fields[3];
                    f$$6 = expr$$10.fields[0];
                    m$$9 = expr$$10.fields[4];
                    tyargs$$6 = expr$$10.fields[2];
                  }
                }
              } else if (expr$$10.tag === 0) {
                $target$$19 = 3;
                c = expr$$10.fields[0];
                m$$10 = expr$$10.fields[1];
                ty$$4 = expr$$10.fields[2];
              } else if (expr$$10.tag === 1) {
                $target$$19 = 4;
                _vFlags$$1 = expr$$10.fields[1];
                m$$11 = expr$$10.fields[2];
                vref$$8 = expr$$10.fields[0];
              } else if (expr$$10.tag === 7) {
                $target$$19 = 5;
                bind = expr$$10.fields[0];
                body$$2 = expr$$10.fields[1];
              } else if (expr$$10.tag === 6) {
                $target$$19 = 6;
                binds = expr$$10.fields[0];
                body$$3 = expr$$10.fields[1];
              } else if (expr$$10.tag === 3) {
                $target$$19 = 7;
                b$$2 = expr$$10.fields[4];
                vs$$5 = expr$$10.fields[3];
              } else if (expr$$10.tag === 12) {
                $target$$19 = 8;
                ast = expr$$10.fields[0];
                ety = expr$$10.fields[4];
              } else if (expr$$10.tag === 4) {
                $target$$19 = 9;
                m$$12 = expr$$10.fields[3];
              } else if (expr$$10.tag === 9) {
                $target$$19 = 10;
                _spBind = expr$$10.fields[0];
                dtree = expr$$10.fields[2];
                m$$13 = expr$$10.fields[1];
                retTy$$3 = expr$$10.fields[5];
                tgs = expr$$10.fields[3];
              } else if (expr$$10.tag === 2) {
                if ($007CObjectInitializationCheck$007C_$007C(cenv$$3.g, expr$$10.fields[0]) != null) {
                  if (expr$$10.fields[2].tag === 0) {
                    $target$$19 = 11;
                    x1 = expr$$10.fields[1];
                  } else {
                    $target$$19 = 12;
                  }
                } else {
                  $target$$19 = 12;
                }
              } else {
                $target$$19 = 12;
              }

              switch ($target$$19) {
                case 0:
                  {
                    const rfty = (0, _TastOps.applyForallTy)(cenv$$3.g, fty$$3, tyargs$$4);
                    return ConvExpr(cenv$$3, env$$13, (0, _TastOps.primMkApp)([(0, _TastOps.primMkApp)([f$$5, fty$$3], tyargs$$4, (0, _Types.L)(), m$$7), rfty], (0, _Types.L)(), args$$2, m$$7));
                  }

                case 1:
                  {
                    return ConvValRef(true, cenv$$3, env$$13, m$$8, vref$$7, tyargs$$5);
                  }

                case 2:
                  {
                    if (!(tyargs$$6.tail == null)) {
                      wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainGenericExprs)(), m$$9));
                    }

                    return (0, _List.fold)(function (fR$$2, arg$$5) {
                      return (0, _QuotationPickler.mkApp)(fR$$2, ConvExpr(cenv$$3, env$$13, arg$$5));
                    }, ConvExpr(cenv$$3, env$$13, f$$6), args$$3);
                  }

                case 3:
                  {
                    return ConvConst(cenv$$3, env$$13, m$$10, c, ty$$4);
                  }

                case 4:
                  {
                    return ConvValRef(true, cenv$$3, env$$13, m$$11, vref$$8, (0, _Types.L)());
                  }

                case 5:
                  {
                    const matchValue$$7 = ConvLetBind(cenv$$3, env$$13, bind);

                    if (matchValue$$7[0] != null) {
                      const bindR = matchValue$$7[0];
                      return (0, _QuotationPickler.mkLet)(bindR, ConvExpr(cenv$$3, matchValue$$7[1], body$$2));
                    } else {
                      return ConvExpr(cenv$$3, matchValue$$7[1], body$$2);
                    }
                  }

                case 6:
                  {
                    const vs$$4 = (0, _TastOps.valsOfBinds)(binds);
                    const vsR = (0, _List.map)(function mapping$$2(v$$9) {
                      return ConvVal(cenv$$3, env$$13, v$$9);
                    }, vs$$4);
                    const env$$16 = BindFlatVals(env$$13, vs$$4);
                    const bodyR = ConvExpr(cenv$$3, env$$16, body$$3);
                    const bindsR = (0, _List.zip)(vsR, (0, _List.map)(function mapping$$3(b$$1) {
                      return ConvExpr(cenv$$3, env$$16, (0, _tast.Binding$$get_Expr)(b$$1));
                    }, binds));
                    return (0, _QuotationPickler.mkLetRec)(bindsR, bodyR);
                  }

                case 7:
                  {
                    const patternInput$$7 = (0, _TastOps.MultiLambdaToTupledLambda)(cenv$$3.g, vs$$5, b$$2);
                    const vR = ConvVal(cenv$$3, env$$13, patternInput$$7[0]);
                    const bR = ConvExpr(cenv$$3, BindVal(env$$13, patternInput$$7[0]), patternInput$$7[1]);
                    return (0, _QuotationPickler.mkLambda)(vR, bR);
                  }

                case 8:
                  {
                    if ((0, _Util.equals)(cenv$$3.quotationFormat, new QuotationSerializationFormat(0, "FSharp_40_Plus")) ? (0, _TastOps.tyconRefEq)(cenv$$3.g, (0, _TastOps.tcrefOfAppTy)(cenv$$3.g, ety), (0, _TcGlobals.TcGlobals$$get_raw_expr_tcr)(cenv$$3.g)) : false) {
                      return (0, _QuotationPickler.mkQuoteRaw40)(ConvExpr(cenv$$3, env$$13, ast));
                    } else {
                      return (0, _QuotationPickler.mkQuote)(ConvExpr(cenv$$3, env$$13, ast));
                    }
                  }

                case 9:
                  {
                    return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainGenericFunctions)(), m$$12));
                  }

                case 10:
                  {
                    const typR = ConvType(cenv$$3, env$$13, m$$13, retTy$$3);
                    return ConvDecisionTree(cenv$$3, env$$13, tgs, typR, dtree);
                  }

                case 11:
                  {
                    return ConvExpr(cenv$$3, env$$13, x1);
                  }

                case 12:
                  {
                    var $target$$20, x0$$2, x1$$1, ctyp$$1, e$$4, m$$15, tmethod$$1, tmvs$$1, tps$$4, ty$$6;

                    if (expr$$10.tag === 2) {
                      if (expr$$10.fields[2].tag === 0) {
                        $target$$20 = 0;
                        x0$$2 = expr$$10.fields[0];
                        x1$$1 = expr$$10.fields[1];
                      } else {
                        $target$$20 = 2;
                      }
                    } else if (expr$$10.tag === 8) {
                      if (expr$$10.fields[4].tail != null) {
                        if (expr$$10.fields[4].head.fields[3].tail != null) {
                          if (expr$$10.fields[4].head.fields[3].tail.tail == null) {
                            if (expr$$10.fields[4].tail.tail == null) {
                              if (ty$$5 = expr$$10.fields[1], (tps$$3 = expr$$10.fields[4].head.fields[2], (tmvs = expr$$10.fields[4].head.fields[3].head, (tmethod = expr$$10.fields[4].head, (m$$14 = expr$$10.fields[6], (e$$3 = expr$$10.fields[4].head.fields[4], (ctyp = expr$$10.fields[4].head.fields[0].fields[1], (0, _TastOps.isDelegateTy)(cenv$$3.g, ty$$5)))))))) {
                                $target$$20 = 1;
                                ctyp$$1 = expr$$10.fields[4].head.fields[0].fields[1];
                                e$$4 = expr$$10.fields[4].head.fields[4];
                                m$$15 = expr$$10.fields[6];
                                tmethod$$1 = expr$$10.fields[4].head;
                                tmvs$$1 = expr$$10.fields[4].head.fields[3].head;
                                tps$$4 = expr$$10.fields[4].head.fields[2];
                                ty$$6 = expr$$10.fields[1];
                              } else {
                                $target$$20 = 2;
                              }
                            } else {
                              $target$$20 = 2;
                            }
                          } else {
                            $target$$20 = 2;
                          }
                        } else {
                          $target$$20 = 2;
                        }
                      } else {
                        $target$$20 = 2;
                      }
                    } else {
                      $target$$20 = 2;
                    }

                    switch ($target$$20) {
                      case 0:
                        {
                          return (0, _QuotationPickler.mkSequential)(ConvExpr(cenv$$3, env$$13, x0$$2), ConvExpr(cenv$$3, env$$13, x1$$1));
                        }

                      case 1:
                        {
                          const f$$7 = (0, _TastOps.mkLambdas)(m$$15, tps$$4, tmvs$$1, e$$4, (0, _TastOps.GetFSharpViewOfReturnType)(cenv$$3.g, (0, _TastOps.returnTyOfMethod)(cenv$$3.g, tmethod$$1)));
                          const fR$$3 = ConvExpr(cenv$$3, env$$13, f$$7);
                          const tyargR = ConvType(cenv$$3, env$$13, m$$15, ctyp$$1);
                          return (0, _QuotationPickler.mkDelegate)(tyargR, fR$$3);
                        }

                      case 2:
                        {
                          var $target$$21, x$$1, x0$$3, x1$$2, _basecall, _basev, _iimpls, _lambdaId, _overrides, _typ, m$$16, args$$4, m$$17, op, tyargs$$7;

                          if (expr$$10.tag === 10) {
                            $target$$21 = 0;
                            x$$1 = expr$$10.fields[2];
                          } else if (expr$$10.tag === 13) {
                            $target$$21 = 1;
                          } else if (expr$$10.tag === 2) {
                            if (expr$$10.fields[2].tag === 1) {
                              $target$$21 = 2;
                              x0$$3 = expr$$10.fields[0];
                              x1$$2 = expr$$10.fields[1];
                            } else {
                              $target$$21 = 5;
                            }
                          } else if (expr$$10.tag === 8) {
                            $target$$21 = 3;
                            _basecall = expr$$10.fields[3];
                            _basev = expr$$10.fields[2];
                            _iimpls = expr$$10.fields[5];
                            _lambdaId = expr$$10.fields[0];
                            _overrides = expr$$10.fields[4];
                            _typ = expr$$10.fields[1];
                            m$$16 = expr$$10.fields[6];
                          } else if (expr$$10.tag === 11) {
                            $target$$21 = 4;
                            args$$4 = expr$$10.fields[2];
                            m$$17 = expr$$10.fields[3];
                            op = expr$$10.fields[0];
                            tyargs$$7 = expr$$10.fields[1];
                          } else {
                            $target$$21 = 5;
                          }

                          switch ($target$$21) {
                            case 0:
                              {
                                return ConvExpr(cenv$$3, env$$13, x$$1);
                              }

                            case 1:
                              {
                                return ConvExpr(cenv$$3, env$$13, (0, _TypeRelations.ChooseTyparSolutionsForFreeChoiceTypars)(cenv$$3.g, cenv$$3.amap, expr$$10));
                              }

                            case 2:
                              {
                                return (0, _QuotationPickler.mkSequential)(ConvExpr(cenv$$3, env$$13, x0$$3), ConvExpr(cenv$$3, env$$13, x1$$2));
                              }

                            case 3:
                              {
                                return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainObjExprs)(), m$$16));
                              }

                            case 4:
                              {
                                const matchValue$$8 = [op, tyargs$$7, args$$4];

                                var $target$$22, ucref, tupInfo, tyargs$$8, tcref, e$$5, n, tyargs$$9, ucref$$1, _readonly, _rfref, _tyargs, _tyargs$$1, _rfref$$1, _tyargs$$2, args$$5, rfref, tyargs$$10, e$$6, n$$1, tupInfo$$1, tyargs$$11, args$$6, enclTypeArgs, fspec, args$$7, enclTypeArgs$$1, fspec$$1, arg1, arg2, arg1$$1, _il, args$$8, tcref$$1, _tinst, args$$9, rfref$$1, i, obj, tcref$$3, srcTy, tgtTy, x$$2, toTy, vref$$9, e$$7, vref$$10, e$$8, vref$$11, vref$$12, ty$$8, xa, body$$4, test, arr$$1, body$$5, elemTy$$1, lim0, lm;

                                if (matchValue$$8[0].tag === 0) {
                                  $target$$22 = 0;
                                  ucref = matchValue$$8[0].fields[0];
                                } else if (matchValue$$8[0].tag === 2) {
                                  $target$$22 = 1;
                                  tupInfo = matchValue$$8[0].fields[0];
                                  tyargs$$8 = matchValue$$8[1];
                                } else if (matchValue$$8[0].tag === 10) {
                                  $target$$22 = 2;
                                  tcref = matchValue$$8[0].fields[1];
                                } else if (matchValue$$8[0].tag === 16) {
                                  if (matchValue$$8[2].tail != null) {
                                    if (matchValue$$8[2].tail.tail == null) {
                                      $target$$22 = 3;
                                      e$$5 = matchValue$$8[2].head;
                                      n = matchValue$$8[0].fields[1];
                                      tyargs$$9 = matchValue$$8[1];
                                      ucref$$1 = matchValue$$8[0].fields[0];
                                    } else {
                                      $target$$22 = 26;
                                    }
                                  } else {
                                    $target$$22 = 26;
                                  }
                                } else if (matchValue$$8[0].tag === 13) {
                                  $target$$22 = 4;
                                  _readonly = matchValue$$8[0].fields[1];
                                  _rfref = matchValue$$8[0].fields[0];
                                  _tyargs = matchValue$$8[1];
                                } else if (matchValue$$8[0].tag === 17) {
                                  $target$$22 = 5;
                                  _tyargs$$1 = matchValue$$8[1];
                                } else if (matchValue$$8[0].tag === 12) {
                                  if (matchValue$$8[2].tail == null) {
                                    $target$$22 = 6;
                                    _rfref$$1 = matchValue$$8[0].fields[0];
                                    _tyargs$$2 = matchValue$$8[1];
                                  } else {
                                    $target$$22 = 7;
                                    args$$5 = matchValue$$8[2];
                                    rfref = matchValue$$8[0].fields[0];
                                    tyargs$$10 = matchValue$$8[1];
                                  }
                                } else if (matchValue$$8[0].tag === 21) {
                                  if (matchValue$$8[2].tail != null) {
                                    if (matchValue$$8[2].tail.tail == null) {
                                      $target$$22 = 8;
                                      e$$6 = matchValue$$8[2].head;
                                      n$$1 = matchValue$$8[0].fields[1];
                                      tupInfo$$1 = matchValue$$8[0].fields[0];
                                      tyargs$$11 = matchValue$$8[1];
                                    } else {
                                      $target$$22 = 26;
                                    }
                                  } else {
                                    $target$$22 = 26;
                                  }
                                } else if (matchValue$$8[0].tag === 22) {
                                  if (matchValue$$8[0].fields[0].tail != null) {
                                    if (matchValue$$8[0].fields[0].head.tag === 60) {
                                      if (matchValue$$8[0].fields[0].tail.tail != null) {
                                        if (matchValue$$8[0].fields[0].tail.head.tag === 33) {
                                          if (matchValue$$8[0].fields[0].tail.tail.tail == null) {
                                            $target$$22 = 9;
                                            args$$6 = matchValue$$8[2];
                                            enclTypeArgs = matchValue$$8[1];
                                            fspec = matchValue$$8[0].fields[0].head.fields[2];
                                          } else {
                                            $target$$22 = 13;
                                            _il = matchValue$$8[0].fields[0];
                                          }
                                        } else {
                                          $target$$22 = 13;
                                          _il = matchValue$$8[0].fields[0];
                                        }
                                      } else {
                                        $target$$22 = 9;
                                        args$$6 = matchValue$$8[2];
                                        enclTypeArgs = matchValue$$8[1];
                                        fspec = matchValue$$8[0].fields[0].head.fields[2];
                                      }
                                    } else if (matchValue$$8[0].fields[0].head.tag === 59) {
                                      if (matchValue$$8[0].fields[0].tail.tail != null) {
                                        if (matchValue$$8[0].fields[0].tail.head.tag === 33) {
                                          if (matchValue$$8[0].fields[0].tail.tail.tail == null) {
                                            $target$$22 = 9;
                                            args$$6 = matchValue$$8[2];
                                            enclTypeArgs = matchValue$$8[1];
                                            fspec = matchValue$$8[0].fields[0].head.fields[1];
                                          } else {
                                            $target$$22 = 13;
                                            _il = matchValue$$8[0].fields[0];
                                          }
                                        } else {
                                          $target$$22 = 13;
                                          _il = matchValue$$8[0].fields[0];
                                        }
                                      } else {
                                        $target$$22 = 9;
                                        args$$6 = matchValue$$8[2];
                                        enclTypeArgs = matchValue$$8[1];
                                        fspec = matchValue$$8[0].fields[0].head.fields[1];
                                      }
                                    } else if (matchValue$$8[0].fields[0].head.tag === 64) {
                                      if (matchValue$$8[0].fields[0].tail.tail == null) {
                                        $target$$22 = 10;
                                        args$$7 = matchValue$$8[2];
                                        enclTypeArgs$$1 = matchValue$$8[1];
                                        fspec$$1 = matchValue$$8[0].fields[0].head.fields[2];
                                      } else {
                                        $target$$22 = 13;
                                        _il = matchValue$$8[0].fields[0];
                                      }
                                    } else if (matchValue$$8[0].fields[0].head.tag === 63) {
                                      if (matchValue$$8[0].fields[0].tail.tail == null) {
                                        $target$$22 = 10;
                                        args$$7 = matchValue$$8[2];
                                        enclTypeArgs$$1 = matchValue$$8[1];
                                        fspec$$1 = matchValue$$8[0].fields[0].head.fields[1];
                                      } else {
                                        $target$$22 = 13;
                                        _il = matchValue$$8[0].fields[0];
                                      }
                                    } else if (matchValue$$8[0].fields[0].head.tag === 6) {
                                      if (matchValue$$8[0].fields[0].tail.tail == null) {
                                        if (matchValue$$8[2].tail != null) {
                                          if (matchValue$$8[2].tail.tail != null) {
                                            if (matchValue$$8[2].tail.tail.tail == null) {
                                              $target$$22 = 11;
                                              arg1 = matchValue$$8[2].head;
                                              arg2 = matchValue$$8[2].tail.head;
                                            } else {
                                              $target$$22 = 13;
                                              _il = matchValue$$8[0].fields[0];
                                            }
                                          } else {
                                            $target$$22 = 13;
                                            _il = matchValue$$8[0].fields[0];
                                          }
                                        } else {
                                          $target$$22 = 13;
                                          _il = matchValue$$8[0].fields[0];
                                        }
                                      } else {
                                        $target$$22 = 13;
                                        _il = matchValue$$8[0].fields[0];
                                      }
                                    } else if (matchValue$$8[0].fields[0].head.tag === 54) {
                                      if (matchValue$$8[0].fields[0].tail.tail == null) {
                                        if (matchValue$$8[2].tail != null) {
                                          if (matchValue$$8[2].tail.tail == null) {
                                            $target$$22 = 12;
                                            arg1$$1 = matchValue$$8[2].head;
                                          } else {
                                            $target$$22 = 13;
                                            _il = matchValue$$8[0].fields[0];
                                          }
                                        } else {
                                          $target$$22 = 13;
                                          _il = matchValue$$8[0].fields[0];
                                        }
                                      } else {
                                        $target$$22 = 13;
                                        _il = matchValue$$8[0].fields[0];
                                      }
                                    } else {
                                      $target$$22 = 13;
                                      _il = matchValue$$8[0].fields[0];
                                    }
                                  } else {
                                    $target$$22 = 13;
                                    _il = matchValue$$8[0].fields[0];
                                  }
                                } else if (matchValue$$8[0].tag === 1) {
                                  $target$$22 = 14;
                                  args$$8 = matchValue$$8[2];
                                  tcref$$1 = matchValue$$8[0].fields[0];
                                } else if (matchValue$$8[0].tag === 11) {
                                  $target$$22 = 15;
                                  _tinst = matchValue$$8[1];
                                  args$$9 = matchValue$$8[2];
                                  rfref$$1 = matchValue$$8[0].fields[0];
                                } else if (matchValue$$8[0].tag === 19) {
                                  if (matchValue$$8[1].tail == null) {
                                    if (matchValue$$8[2].tail != null) {
                                      if (matchValue$$8[2].tail.tail == null) {
                                        $target$$22 = 16;
                                        i = matchValue$$8[0].fields[1];
                                        obj = matchValue$$8[2].head;
                                        tcref$$3 = matchValue$$8[0].fields[0];
                                      } else {
                                        $target$$22 = 26;
                                      }
                                    } else {
                                      $target$$22 = 26;
                                    }
                                  } else {
                                    $target$$22 = 26;
                                  }
                                } else if (matchValue$$8[0].tag === 24) {
                                  if (matchValue$$8[1].tail != null) {
                                    if (matchValue$$8[1].tail.tail != null) {
                                      if (matchValue$$8[1].tail.tail.tail == null) {
                                        if (matchValue$$8[2].tail != null) {
                                          if (matchValue$$8[2].tail.tail == null) {
                                            $target$$22 = 17;
                                            srcTy = matchValue$$8[1].tail.head;
                                            tgtTy = matchValue$$8[1].head;
                                            x$$2 = matchValue$$8[2].head;
                                          } else {
                                            $target$$22 = 26;
                                          }
                                        } else {
                                          $target$$22 = 26;
                                        }
                                      } else {
                                        $target$$22 = 26;
                                      }
                                    } else {
                                      $target$$22 = 26;
                                    }
                                  } else {
                                    $target$$22 = 26;
                                  }
                                } else if (matchValue$$8[0].tag === 25) {
                                  if (matchValue$$8[1].tail != null) {
                                    if (matchValue$$8[1].tail.tail == null) {
                                      if (matchValue$$8[2].tail == null) {
                                        $target$$22 = 18;
                                        toTy = matchValue$$8[1].head;
                                      } else {
                                        $target$$22 = 26;
                                      }
                                    } else {
                                      $target$$22 = 26;
                                    }
                                  } else {
                                    $target$$22 = 26;
                                  }
                                } else if (matchValue$$8[0].tag === 30) {
                                  if (matchValue$$8[0].fields[0].tag === 3) {
                                    if (matchValue$$8[1].tail == null) {
                                      if (matchValue$$8[2].tail != null) {
                                        if (matchValue$$8[2].tail.tail == null) {
                                          $target$$22 = 20;
                                          e$$7 = matchValue$$8[2].head;
                                          vref$$10 = matchValue$$8[0].fields[1];
                                        } else {
                                          $target$$22 = 26;
                                        }
                                      } else {
                                        $target$$22 = 26;
                                      }
                                    } else {
                                      $target$$22 = 26;
                                    }
                                  } else if (matchValue$$8[0].fields[0].tag === 2) {
                                    if (matchValue$$8[1].tail == null) {
                                      if (matchValue$$8[2].tail != null) {
                                        if (matchValue$$8[2].tail.tail == null) {
                                          $target$$22 = 21;
                                          e$$8 = matchValue$$8[2].head;
                                          vref$$11 = matchValue$$8[0].fields[1];
                                        } else {
                                          $target$$22 = 26;
                                        }
                                      } else {
                                        $target$$22 = 26;
                                      }
                                    } else {
                                      $target$$22 = 26;
                                    }
                                  } else if (matchValue$$8[0].fields[0].tag === 1) {
                                    if (matchValue$$8[1].tail == null) {
                                      if (matchValue$$8[2].tail == null) {
                                        $target$$22 = 22;
                                        vref$$12 = matchValue$$8[0].fields[1];
                                      } else {
                                        $target$$22 = 26;
                                      }
                                    } else {
                                      $target$$22 = 26;
                                    }
                                  } else if (matchValue$$8[1].tail == null) {
                                    if (matchValue$$8[2].tail == null) {
                                      $target$$22 = 19;
                                      vref$$9 = matchValue$$8[0].fields[1];
                                    } else {
                                      $target$$22 = 26;
                                    }
                                  } else {
                                    $target$$22 = 26;
                                  }
                                } else if (matchValue$$8[0].tag === 3) {
                                  if (matchValue$$8[1].tail != null) {
                                    if (matchValue$$8[1].tail.tail == null) {
                                      $target$$22 = 23;
                                      ty$$8 = matchValue$$8[1].head;
                                      xa = matchValue$$8[2];
                                    } else {
                                      $target$$22 = 26;
                                    }
                                  } else {
                                    $target$$22 = 26;
                                  }
                                } else if (matchValue$$8[0].tag === 6) {
                                  if (matchValue$$8[1].tail == null) {
                                    if (matchValue$$8[2].tail != null) {
                                      if (matchValue$$8[2].head.tag === 3) {
                                        if (matchValue$$8[2].head.fields[3].tail != null) {
                                          if (matchValue$$8[2].head.fields[3].tail.tail == null) {
                                            if (matchValue$$8[2].tail.tail != null) {
                                              if (matchValue$$8[2].tail.head.tag === 3) {
                                                if (matchValue$$8[2].tail.head.fields[3].tail != null) {
                                                  if (matchValue$$8[2].tail.head.fields[3].tail.tail == null) {
                                                    if (matchValue$$8[2].tail.tail.tail == null) {
                                                      $target$$22 = 24;
                                                      body$$4 = matchValue$$8[2].tail.head.fields[4];
                                                      test = matchValue$$8[2].head.fields[4];
                                                    } else {
                                                      $target$$22 = 26;
                                                    }
                                                  } else {
                                                    $target$$22 = 26;
                                                  }
                                                } else {
                                                  $target$$22 = 26;
                                                }
                                              } else {
                                                $target$$22 = 26;
                                              }
                                            } else {
                                              $target$$22 = 26;
                                            }
                                          } else {
                                            $target$$22 = 26;
                                          }
                                        } else {
                                          $target$$22 = 26;
                                        }
                                      } else {
                                        $target$$22 = 26;
                                      }
                                    } else {
                                      $target$$22 = 26;
                                    }
                                  } else {
                                    $target$$22 = 26;
                                  }
                                } else if (matchValue$$8[0].tag === 7) {
                                  if (matchValue$$8[0].fields[1].tag === 0) {
                                    if (matchValue$$8[1].tail == null) {
                                      if (matchValue$$8[2].tail != null) {
                                        if (matchValue$$8[2].head.tag === 3) {
                                          if (matchValue$$8[2].head.fields[3].tail != null) {
                                            if (matchValue$$8[2].head.fields[3].tail.tail == null) {
                                              if (matchValue$$8[2].tail.tail != null) {
                                                if (matchValue$$8[2].tail.head.tag === 3) {
                                                  if (matchValue$$8[2].tail.head.fields[3].tail != null) {
                                                    if (matchValue$$8[2].tail.head.fields[3].tail.tail == null) {
                                                      if ($007CSimpleArrayLoopUpperBound$007C_$007C(matchValue$$8[2].tail.head.fields[4]) != null) {
                                                        if (matchValue$$8[2].tail.tail.tail != null) {
                                                          const activePatternResult44843 = $007CSimpleArrayLoopBody$007C_$007C(cenv$$3.g, matchValue$$8[2].tail.tail.head);

                                                          if (activePatternResult44843 != null) {
                                                            if (matchValue$$8[2].tail.tail.tail.tail == null) {
                                                              $target$$22 = 25;
                                                              arr$$1 = activePatternResult44843[0];
                                                              body$$5 = activePatternResult44843[2];
                                                              elemTy$$1 = activePatternResult44843[1];
                                                              lim0 = matchValue$$8[2].head.fields[4];
                                                              lm = matchValue$$8[2].tail.head.fields[5];
                                                            } else {
                                                              $target$$22 = 26;
                                                            }
                                                          } else {
                                                            $target$$22 = 26;
                                                          }
                                                        } else {
                                                          $target$$22 = 26;
                                                        }
                                                      } else {
                                                        $target$$22 = 26;
                                                      }
                                                    } else {
                                                      $target$$22 = 26;
                                                    }
                                                  } else {
                                                    $target$$22 = 26;
                                                  }
                                                } else {
                                                  $target$$22 = 26;
                                                }
                                              } else {
                                                $target$$22 = 26;
                                              }
                                            } else {
                                              $target$$22 = 26;
                                            }
                                          } else {
                                            $target$$22 = 26;
                                          }
                                        } else {
                                          $target$$22 = 26;
                                        }
                                      } else {
                                        $target$$22 = 26;
                                      }
                                    } else {
                                      $target$$22 = 26;
                                    }
                                  } else {
                                    $target$$22 = 26;
                                  }
                                } else {
                                  $target$$22 = 26;
                                }

                                switch ($target$$22) {
                                  case 0:
                                    {
                                      const mkR = ConvUnionCaseRef(cenv$$3, ucref, m$$17);
                                      const tyargsR = ConvTypes(cenv$$3, env$$13, m$$17, tyargs$$7);
                                      const argsR = ConvExprs(cenv$$3, env$$13, args$$4);
                                      return (0, _QuotationPickler.mkUnion)(mkR, tyargsR, argsR);
                                    }

                                  case 1:
                                    {
                                      const tyR = ConvType(cenv$$3, env$$13, m$$17, (0, _TastOps.mkAnyTupledTy)(cenv$$3.g, tupInfo, tyargs$$8));
                                      const argsR$$1 = ConvExprs(cenv$$3, env$$13, args$$4);
                                      return (0, _QuotationPickler.mkTuple)(tyR, argsR$$1);
                                    }

                                  case 2:
                                    {
                                      const rgtypR = ConvTyconRef(cenv$$3, tcref, m$$17);
                                      const tyargsR$$1 = ConvTypes(cenv$$3, env$$13, m$$17, tyargs$$7);
                                      const argsR$$2 = ConvExprs(cenv$$3, env$$13, args$$4);
                                      return (0, _QuotationPickler.mkRecdMk)(rgtypR, tyargsR$$1, argsR$$2);
                                    }

                                  case 3:
                                    {
                                      return ConvUnionFieldGet(cenv$$3, env$$13, m$$17, ucref$$1, n, tyargs$$9, e$$5);
                                    }

                                  case 4:
                                    {
                                      return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainAddressOf)(), m$$17));
                                    }

                                  case 5:
                                    {
                                      return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainAddressOf)(), m$$17));
                                    }

                                  case 6:
                                    {
                                      return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainStaticFieldRef)(), m$$17));
                                    }

                                  case 7:
                                    {
                                      return ConvClassOrRecdFieldGet(cenv$$3, env$$13, m$$17, rfref, tyargs$$10, args$$5);
                                    }

                                  case 8:
                                    {
                                      const eR = ConvLValueExpr(cenv$$3, env$$13, e$$6);
                                      const tyR$$1 = ConvType(cenv$$3, env$$13, m$$17, (0, _TastOps.mkAnyTupledTy)(cenv$$3.g, tupInfo$$1, tyargs$$11));
                                      return (0, _QuotationPickler.mkTupleGet)(tyR$$1, n$$1, eR);
                                    }

                                  case 9:
                                    {
                                      return ConvLdfld(cenv$$3, env$$13, m$$17, fspec, enclTypeArgs, args$$6);
                                    }

                                  case 10:
                                    {
                                      const tyargsR$$2 = ConvTypes(cenv$$3, env$$13, m$$17, enclTypeArgs$$1);
                                      const parentTyconR$$1 = ConvILTypeRefUnadjusted(cenv$$3, m$$17, (0, _il2.ILFieldSpec$$get_DeclaringTypeRef)(fspec$$1));
                                      const argsR$$3 = ConvLValueArgs(cenv$$3, env$$13, args$$7);
                                      return (0, _QuotationPickler.mkFieldSet)([parentTyconR$$1, (0, _il2.ILFieldSpec$$get_Name)(fspec$$1)], tyargsR$$2, argsR$$3);
                                    }

                                  case 11:
                                    {
                                      const ty$$7 = (0, _TastOps.tyOfExpr)(cenv$$3.g, arg1);
                                      const eq = (0, _TastOps.mkCallEqualsOperator)(cenv$$3.g, m$$17, ty$$7, arg1, arg2);
                                      return ConvExpr(cenv$$3, env$$13, eq);
                                    }

                                  case 12:
                                    {
                                      const raiseExpr = (0, _TastOps.mkCallRaise)(cenv$$3.g, m$$17, (0, _TastOps.tyOfExpr)(cenv$$3.g, expr$$10), arg1$$1);
                                      return ConvExpr(cenv$$3, env$$13, raiseExpr);
                                    }

                                  case 13:
                                    {
                                      return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainInlineIL)(), m$$17));
                                    }

                                  case 14:
                                    {
                                      const _rgtypR = ConvTyconRef(cenv$$3, tcref$$1, m$$17);

                                      const _typ$$1 = (0, _TastOps.mkAppTy)(tcref$$1, (0, _Types.L)());

                                      const parentTyconR$$2 = ConvTyconRef(cenv$$3, tcref$$1, m$$17);
                                      const argtys = (0, _List.map)(function mapping$$4(rfld) {
                                        return (0, _tast.RecdField$$get_FormalType)(rfld);
                                      }, (0, _TastOps.recdFieldsOfExnDefRef)(tcref$$1));
                                      const methArgTypesR$$1 = ConvTypes(cenv$$3, env$$13, m$$17, argtys);
                                      const argsR$$4 = ConvExprs(cenv$$3, env$$13, args$$8);
                                      const objR = (0, _QuotationPickler.mkCtorCall)(new _QuotationPickler.CtorData(parentTyconR$$2, methArgTypesR$$1), (0, _Types.L)(), argsR$$4);
                                      const exnTypeR = ConvType(cenv$$3, env$$13, m$$17, (0, _TcGlobals.TcGlobals$$get_exn_ty)(cenv$$3.g));
                                      return (0, _QuotationPickler.mkCoerce)(exnTypeR, objR);
                                    }

                                  case 15:
                                    {
                                      const argsR$$5 = ConvLValueArgs(cenv$$3, env$$13, args$$9);
                                      const tyargsR$$3 = ConvTypes(cenv$$3, env$$13, m$$17, tyargs$$7);
                                      const projR = ConvRecdFieldRef(cenv$$3, rfref$$1, m$$17);
                                      const fldOrPropName = projR[1];
                                      const _parentTyconR = projR[0];

                                      if ((0, _tast.EntityRef$$get_IsRecordTycon)((0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$1))) {
                                        return (0, _QuotationPickler.mkRecdSet)(projR, tyargsR$$3, argsR$$5);
                                      } else {
                                        const fspec$$2 = (0, _tast.RecdFieldRef$$get_RecdField)(rfref$$1);
                                        const tcref$$2 = (0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$1);
                                        const parentTyconR$$3 = ConvTyconRef(cenv$$3, tcref$$2, m$$17);

                                        if ((0, _TastOps.useGenuineField)((0, _tast.EntityRef$$get_Deref)(tcref$$2), fspec$$2)) {
                                          return (0, _QuotationPickler.mkFieldSet)(projR, tyargsR$$3, argsR$$5);
                                        } else {
                                          const envinner$$1 = BindFormalTypars(env$$13, (0, _tast.EntityRef$$get_TyparsNoRange)(tcref$$2));
                                          const propRetTypeR = ConvType(cenv$$3, envinner$$1, m$$17, (0, _tast.RecdField$$get_FormalType)(fspec$$2));
                                          return (0, _QuotationPickler.mkPropSet)([parentTyconR$$3, fldOrPropName, propRetTypeR, (0, _Types.L)()], tyargsR$$3, argsR$$5);
                                        }
                                      }
                                    }

                                  case 16:
                                    {
                                      const exnc = (0, _TastOps.stripExnEqns)(tcref$$3);
                                      const fspec$$3 = (0, _List.item)(i, (0, _tast.Entity$$get_TrueInstanceFieldsAsList)(exnc));
                                      const parentTyconR$$4 = ConvTyconRef(cenv$$3, tcref$$3, m$$17);
                                      const propRetTypeR$$1 = ConvType(cenv$$3, env$$13, m$$17, (0, _tast.RecdField$$get_FormalType)(fspec$$3));
                                      const callArgR = ConvExpr(cenv$$3, env$$13, obj);
                                      const exnTypeR$$1 = ConvType(cenv$$3, env$$13, m$$17, (0, _TastOps.generalizedTyconRef)(tcref$$3));
                                      return (0, _QuotationPickler.mkPropGet)([parentTyconR$$4, (0, _tast.RecdField$$get_Name)(fspec$$3), propRetTypeR$$1, (0, _Types.L)()], (0, _Types.L)(), (0, _Types.L)((0, _QuotationPickler.mkCoerce)(exnTypeR$$1, callArgR), (0, _Types.L)()));
                                    }

                                  case 17:
                                    {
                                      const xR = ConvExpr(cenv$$3, env$$13, x$$2);

                                      if ((0, _TastOps.typeEquiv)(cenv$$3.g, tgtTy, srcTy)) {
                                        return xR;
                                      } else {
                                        return (0, _QuotationPickler.mkCoerce)(ConvType(cenv$$3, env$$13, m$$17, tgtTy), xR);
                                      }
                                    }

                                  case 18:
                                    {
                                      return ConvExpr(cenv$$3, env$$13, (0, _TastOps.mkReraiseLibCall)(cenv$$3.g, toTy, m$$17));
                                    }

                                  case 19:
                                    {
                                      return (0, _QuotationPickler.mkAddressOf)(ConvValRef(false, cenv$$3, env$$13, m$$17, vref$$9, (0, _Types.L)()));
                                    }

                                  case 20:
                                    {
                                      return (0, _QuotationPickler.mkAddressSet)(ConvValRef(false, cenv$$3, env$$13, m$$17, vref$$10, (0, _Types.L)()), ConvExpr(cenv$$3, env$$13, e$$7));
                                    }

                                  case 21:
                                    {
                                      const matchValue$$9 = (0, _tast.ValRef$$get_DeclaringEntity)(vref$$11);
                                      var $target$$23, tcref$$5;

                                      if (matchValue$$9.tag === 0) {
                                        if (tcref$$4 = matchValue$$9.fields[0], (0, _TastOps.IsCompiledAsStaticProperty)(cenv$$3.g, (0, _tast.ValRef$$get_Deref)(vref$$11))) {
                                          $target$$23 = 0;
                                          tcref$$5 = matchValue$$9.fields[0];
                                        } else {
                                          $target$$23 = 1;
                                        }
                                      } else {
                                        $target$$23 = 1;
                                      }

                                      switch ($target$$23) {
                                        case 0:
                                          {
                                            const parentTyconR$$5 = ConvTyconRef(cenv$$3, tcref$$5, m$$17);
                                            const propName = (0, _tast.ValRef$$get_CompiledName)(vref$$11);
                                            const propTy = ConvType(cenv$$3, env$$13, m$$17, (0, _tast.ValRef$$get_Type)(vref$$11));
                                            return (0, _QuotationPickler.mkPropSet)([parentTyconR$$5, propName, propTy, (0, _Types.L)()], (0, _Types.L)(), (0, _Types.L)(ConvExpr(cenv$$3, env$$13, e$$8), (0, _Types.L)()));
                                          }

                                        case 1:
                                          {
                                            return (0, _QuotationPickler.mkVarSet)(ConvValRef(false, cenv$$3, env$$13, m$$17, vref$$11, (0, _Types.L)()), ConvExpr(cenv$$3, env$$13, e$$8));
                                          }
                                      }
                                    }

                                  case 22:
                                    {
                                      return ConvValRef(false, cenv$$3, env$$13, m$$17, vref$$12, (0, _Types.L)());
                                    }

                                  case 23:
                                    {
                                      return (0, _QuotationPickler.mkNewArray)(ConvType(cenv$$3, env$$13, m$$17, ty$$8), ConvExprs(cenv$$3, env$$13, xa));
                                    }

                                  case 24:
                                    {
                                      return (0, _QuotationPickler.mkWhileLoop)(ConvExpr(cenv$$3, env$$13, test), ConvExpr(cenv$$3, env$$13, body$$4));
                                    }

                                  case 25:
                                    {
                                      let lim1;
                                      const len = (0, _TastOps.mkCallArrayLength)(cenv$$3.g, lm, elemTy$$1, arr$$1);
                                      lim1 = (0, _TastOps.mkCallSubtractionOperator)(cenv$$3.g, lm, (0, _TcGlobals.TcGlobals$$get_int32_ty)(cenv$$3.g), len, new _tast.Expr(0, "Const", new _tast.Const(5, "Int32", 1), m$$17, (0, _TcGlobals.TcGlobals$$get_int32_ty)(cenv$$3.g)));
                                      return (0, _QuotationPickler.mkForLoop)(ConvExpr(cenv$$3, env$$13, lim0), ConvExpr(cenv$$3, env$$13, lim1), ConvExpr(cenv$$3, env$$13, body$$5));
                                    }

                                  case 26:
                                    {
                                      var $target$$24, body$$6, dir, lim0$$1, lim1$$1, _tys, callArgs$$1, enclTypeArgs$$2, ilMethRef, isNewObj$$2, isProp, methTypeArgs, valUseFlags$$1, _resty, e1, e2, _resty$$1, e1$$1, ef, eh, vf$$2, vh, bytes, arr$$2, e$$9, _cx, _tinst$$1, _tycr, _c, _cx$$1, _i, _tinst$$2, _x, _ex, _i$$1, _tcref, _x$$1, _ss;

                                      if (matchValue$$8[0].tag === 7) {
                                        if (matchValue$$8[1].tail == null) {
                                          if (matchValue$$8[2].tail != null) {
                                            if (matchValue$$8[2].head.tag === 3) {
                                              if (matchValue$$8[2].head.fields[3].tail != null) {
                                                if (matchValue$$8[2].head.fields[3].tail.tail == null) {
                                                  if (matchValue$$8[2].tail.tail != null) {
                                                    if (matchValue$$8[2].tail.head.tag === 3) {
                                                      if (matchValue$$8[2].tail.head.fields[3].tail != null) {
                                                        if (matchValue$$8[2].tail.head.fields[3].tail.tail == null) {
                                                          if (matchValue$$8[2].tail.tail.tail != null) {
                                                            if (matchValue$$8[2].tail.tail.tail.tail == null) {
                                                              $target$$24 = 0;
                                                              body$$6 = matchValue$$8[2].tail.tail.head;
                                                              dir = matchValue$$8[0].fields[1];
                                                              lim0$$1 = matchValue$$8[2].head.fields[4];
                                                              lim1$$1 = matchValue$$8[2].tail.head.fields[4];
                                                            } else {
                                                              $target$$24 = 12;
                                                            }
                                                          } else {
                                                            $target$$24 = 12;
                                                          }
                                                        } else {
                                                          $target$$24 = 12;
                                                        }
                                                      } else {
                                                        $target$$24 = 12;
                                                      }
                                                    } else {
                                                      $target$$24 = 12;
                                                    }
                                                  } else {
                                                    $target$$24 = 12;
                                                  }
                                                } else {
                                                  $target$$24 = 12;
                                                }
                                              } else {
                                                $target$$24 = 12;
                                              }
                                            } else {
                                              $target$$24 = 12;
                                            }
                                          } else {
                                            $target$$24 = 12;
                                          }
                                        } else {
                                          $target$$24 = 12;
                                        }
                                      } else if (matchValue$$8[0].tag === 31) {
                                        if (matchValue$$8[1].tail == null) {
                                          $target$$24 = 1;
                                          _tys = matchValue$$8[0].fields[10];
                                          callArgs$$1 = matchValue$$8[2];
                                          enclTypeArgs$$2 = matchValue$$8[0].fields[8];
                                          ilMethRef = matchValue$$8[0].fields[7];
                                          isNewObj$$2 = matchValue$$8[0].fields[3];
                                          isProp = matchValue$$8[0].fields[5];
                                          methTypeArgs = matchValue$$8[0].fields[9];
                                          valUseFlags$$1 = matchValue$$8[0].fields[4];
                                        } else {
                                          $target$$24 = 12;
                                        }
                                      } else if (matchValue$$8[0].tag === 9) {
                                        if (matchValue$$8[1].tail != null) {
                                          if (matchValue$$8[1].tail.tail == null) {
                                            if (matchValue$$8[2].tail != null) {
                                              if (matchValue$$8[2].head.tag === 3) {
                                                if (matchValue$$8[2].head.fields[3].tail != null) {
                                                  if (matchValue$$8[2].head.fields[3].tail.tail == null) {
                                                    if (matchValue$$8[2].tail.tail != null) {
                                                      if (matchValue$$8[2].tail.head.tag === 3) {
                                                        if (matchValue$$8[2].tail.head.fields[3].tail != null) {
                                                          if (matchValue$$8[2].tail.head.fields[3].tail.tail == null) {
                                                            if (matchValue$$8[2].tail.tail.tail == null) {
                                                              $target$$24 = 2;
                                                              _resty = matchValue$$8[1].head;
                                                              e1 = matchValue$$8[2].head.fields[4];
                                                              e2 = matchValue$$8[2].tail.head.fields[4];
                                                            } else {
                                                              $target$$24 = 12;
                                                            }
                                                          } else {
                                                            $target$$24 = 12;
                                                          }
                                                        } else {
                                                          $target$$24 = 12;
                                                        }
                                                      } else {
                                                        $target$$24 = 12;
                                                      }
                                                    } else {
                                                      $target$$24 = 12;
                                                    }
                                                  } else {
                                                    $target$$24 = 12;
                                                  }
                                                } else {
                                                  $target$$24 = 12;
                                                }
                                              } else {
                                                $target$$24 = 12;
                                              }
                                            } else {
                                              $target$$24 = 12;
                                            }
                                          } else {
                                            $target$$24 = 12;
                                          }
                                        } else {
                                          $target$$24 = 12;
                                        }
                                      } else if (matchValue$$8[0].tag === 8) {
                                        if (matchValue$$8[1].tail != null) {
                                          if (matchValue$$8[1].tail.tail == null) {
                                            if (matchValue$$8[2].tail != null) {
                                              if (matchValue$$8[2].head.tag === 3) {
                                                if (matchValue$$8[2].head.fields[3].tail != null) {
                                                  if (matchValue$$8[2].head.fields[3].tail.tail == null) {
                                                    if (matchValue$$8[2].tail.tail != null) {
                                                      if (matchValue$$8[2].tail.head.tag === 3) {
                                                        if (matchValue$$8[2].tail.head.fields[3].tail != null) {
                                                          if (matchValue$$8[2].tail.head.fields[3].tail.tail == null) {
                                                            if (matchValue$$8[2].tail.tail.tail != null) {
                                                              if (matchValue$$8[2].tail.tail.head.tag === 3) {
                                                                if (matchValue$$8[2].tail.tail.head.fields[3].tail != null) {
                                                                  if (matchValue$$8[2].tail.tail.head.fields[3].tail.tail == null) {
                                                                    if (matchValue$$8[2].tail.tail.tail.tail == null) {
                                                                      $target$$24 = 3;
                                                                      _resty$$1 = matchValue$$8[1].head;
                                                                      e1$$1 = matchValue$$8[2].head.fields[4];
                                                                      ef = matchValue$$8[2].tail.head.fields[4];
                                                                      eh = matchValue$$8[2].tail.tail.head.fields[4];
                                                                      vf$$2 = matchValue$$8[2].tail.head.fields[3].head;
                                                                      vh = matchValue$$8[2].tail.tail.head.fields[3].head;
                                                                    } else {
                                                                      $target$$24 = 12;
                                                                    }
                                                                  } else {
                                                                    $target$$24 = 12;
                                                                  }
                                                                } else {
                                                                  $target$$24 = 12;
                                                                }
                                                              } else {
                                                                $target$$24 = 12;
                                                              }
                                                            } else {
                                                              $target$$24 = 12;
                                                            }
                                                          } else {
                                                            $target$$24 = 12;
                                                          }
                                                        } else {
                                                          $target$$24 = 12;
                                                        }
                                                      } else {
                                                        $target$$24 = 12;
                                                      }
                                                    } else {
                                                      $target$$24 = 12;
                                                    }
                                                  } else {
                                                    $target$$24 = 12;
                                                  }
                                                } else {
                                                  $target$$24 = 12;
                                                }
                                              } else {
                                                $target$$24 = 12;
                                              }
                                            } else {
                                              $target$$24 = 12;
                                            }
                                          } else {
                                            $target$$24 = 12;
                                          }
                                        } else {
                                          $target$$24 = 12;
                                        }
                                      } else if (matchValue$$8[0].tag === 4) {
                                        if (matchValue$$8[1].tail == null) {
                                          if (matchValue$$8[2].tail == null) {
                                            $target$$24 = 4;
                                            bytes = matchValue$$8[0].fields[0];
                                          } else {
                                            $target$$24 = 12;
                                          }
                                        } else {
                                          $target$$24 = 12;
                                        }
                                      } else if (matchValue$$8[0].tag === 5) {
                                        if (matchValue$$8[1].tail == null) {
                                          if (matchValue$$8[2].tail == null) {
                                            $target$$24 = 5;
                                            arr$$2 = matchValue$$8[0].fields[0];
                                          } else {
                                            $target$$24 = 12;
                                          }
                                        } else {
                                          $target$$24 = 12;
                                        }
                                      } else if (matchValue$$8[0].tag === 15) {
                                        if (matchValue$$8[2].tail != null) {
                                          if (matchValue$$8[2].tail.tail == null) {
                                            $target$$24 = 6;
                                            e$$9 = matchValue$$8[2].head;
                                          } else {
                                            $target$$24 = 12;
                                          }
                                        } else {
                                          $target$$24 = 12;
                                        }
                                      } else if (matchValue$$8[0].tag === 14) {
                                        if (matchValue$$8[2].tail != null) {
                                          if (matchValue$$8[2].tail.tail == null) {
                                            $target$$24 = 7;
                                            _cx = matchValue$$8[2].head;
                                            _tinst$$1 = matchValue$$8[1];
                                            _tycr = matchValue$$8[0].fields[0];
                                          } else {
                                            $target$$24 = 12;
                                          }
                                        } else {
                                          $target$$24 = 12;
                                        }
                                      } else if (matchValue$$8[0].tag === 18) {
                                        if (matchValue$$8[2].tail != null) {
                                          if (matchValue$$8[2].tail.tail != null) {
                                            if (matchValue$$8[2].tail.tail.tail == null) {
                                              $target$$24 = 8;
                                              _c = matchValue$$8[0].fields[0];
                                              _cx$$1 = matchValue$$8[2].head;
                                              _i = matchValue$$8[0].fields[1];
                                              _tinst$$2 = matchValue$$8[1];
                                              _x = matchValue$$8[2].tail.head;
                                            } else {
                                              $target$$24 = 12;
                                            }
                                          } else {
                                            $target$$24 = 12;
                                          }
                                        } else {
                                          $target$$24 = 12;
                                        }
                                      } else if (matchValue$$8[0].tag === 20) {
                                        if (matchValue$$8[1].tail == null) {
                                          if (matchValue$$8[2].tail != null) {
                                            if (matchValue$$8[2].tail.tail != null) {
                                              if (matchValue$$8[2].tail.tail.tail == null) {
                                                $target$$24 = 9;
                                                _ex = matchValue$$8[2].head;
                                                _i$$1 = matchValue$$8[0].fields[1];
                                                _tcref = matchValue$$8[0].fields[0];
                                                _x$$1 = matchValue$$8[2].tail.head;
                                              } else {
                                                $target$$24 = 12;
                                              }
                                            } else {
                                              $target$$24 = 12;
                                            }
                                          } else {
                                            $target$$24 = 12;
                                          }
                                        } else {
                                          $target$$24 = 12;
                                        }
                                      } else if (matchValue$$8[0].tag === 23) {
                                        $target$$24 = 10;
                                      } else if (matchValue$$8[0].tag === 29) {
                                        $target$$24 = 11;
                                        _ss = matchValue$$8[0].fields[0];
                                      } else {
                                        $target$$24 = 12;
                                      }

                                      switch ($target$$24) {
                                        case 0:
                                          {
                                            if (dir.tag === 0) {
                                              return (0, _QuotationPickler.mkForLoop)(ConvExpr(cenv$$3, env$$13, lim0$$1), ConvExpr(cenv$$3, env$$13, lim1$$1), ConvExpr(cenv$$3, env$$13, body$$6));
                                            } else {
                                              return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainDescendingForLoops)(), m$$17));
                                            }
                                          }

                                        case 1:
                                          {
                                            const parentTyconR$$6 = ConvILTypeRefUnadjusted(cenv$$3, m$$17, (0, _il2.ILMethodRef$$get_DeclaringTypeRef)(ilMethRef));
                                            const isNewObj$$3 = isNewObj$$2 ? true : valUseFlags$$1.tag === 2 ? true : valUseFlags$$1.tag === 3 ? true : false;
                                            const methArgTypesR$$2 = (0, _List.map)(function (ty$$9) {
                                              return ConvILType(cenv$$3, env$$13, m$$17, ty$$9);
                                            }, (0, _il2.ILMethodRef$$get_ArgTypes)(ilMethRef));
                                            const methRetTypeR$$1 = ConvILType(cenv$$3, env$$13, m$$17, (0, _il2.ILMethodRef$$get_ReturnType)(ilMethRef));
                                            const methName$$1 = (0, _il2.ILMethodRef$$get_Name)(ilMethRef);
                                            const isPropGet$$1 = isProp ? (0, _String.startsWith)(methName$$1, "get_", 4) : false;
                                            const isPropSet$$1 = isProp ? (0, _String.startsWith)(methName$$1, "set_", 4) : false;
                                            const tyargs$$12 = (0, _List.append)(enclTypeArgs$$2, methTypeArgs);
                                            return ConvObjectModelCall(cenv$$3, env$$13, m$$17, isPropGet$$1, isPropSet$$1, isNewObj$$3, parentTyconR$$6, methArgTypesR$$2, methRetTypeR$$1, methName$$1, tyargs$$12, (0, _List.length)(methTypeArgs), callArgs$$1);
                                          }

                                        case 2:
                                          {
                                            return (0, _QuotationPickler.mkTryFinally)(ConvExpr(cenv$$3, env$$13, e1), ConvExpr(cenv$$3, env$$13, e2));
                                          }

                                        case 3:
                                          {
                                            const vfR = ConvVal(cenv$$3, env$$13, vf$$2);
                                            const envf = BindVal(env$$13, vf$$2);
                                            const vhR = ConvVal(cenv$$3, env$$13, vh);
                                            const envh = BindVal(env$$13, vh);
                                            return (0, _QuotationPickler.mkTryWith)(ConvExpr(cenv$$3, env$$13, e1$$1), vfR, ConvExpr(cenv$$3, envf, ef), vhR, ConvExpr(cenv$$3, envh, eh));
                                          }

                                        case 4:
                                          {
                                            return ConvExpr(cenv$$3, env$$13, new _tast.Expr(11, "Op", new _tast.TOp(3, "Array"), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_byte_ty)(cenv$$3.g), (0, _Types.L)()), (0, _List.ofArray)((0, _Array.map)(function (arg20$0040) {
                                              return (0, _TastOps.mkByte)(cenv$$3.g, m$$17, arg20$0040);
                                            }, bytes, Array)), m$$17));
                                          }

                                        case 5:
                                          {
                                            return ConvExpr(cenv$$3, env$$13, new _tast.Expr(11, "Op", new _tast.TOp(3, "Array"), (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_uint16_ty)(cenv$$3.g), (0, _Types.L)()), (0, _List.ofArray)((0, _Array.map)(function (arg20$0040$$1) {
                                              return (0, _TastOps.mkUInt16)(cenv$$3.g, m$$17, arg20$0040$$1);
                                            }, arr$$2, Array)), m$$17));
                                          }

                                        case 6:
                                          {
                                            return ConvExpr(cenv$$3, env$$13, e$$9);
                                          }

                                        case 7:
                                          {
                                            return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantFetchUnionIndexes)(), m$$17));
                                          }

                                        case 8:
                                          {
                                            return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantSetUnionFields)(), m$$17));
                                          }

                                        case 9:
                                          {
                                            return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantSetExceptionFields)(), m$$17));
                                          }

                                        case 10:
                                          {
                                            return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantRequireByref)(), m$$17));
                                          }

                                        case 11:
                                          {
                                            return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantCallTraitMembers)(), m$$17));
                                          }

                                        case 12:
                                          {
                                            return wfail(new _ErrorLogger.InternalError("Unexpected expression shape", m$$17));
                                          }
                                      }
                                    }
                                }
                              }

                            case 5:
                              {
                                return wfail(new _ErrorLogger.InternalError((0, _String.toText)((0, _String.printf)("unhandled construct in AST: %A"))(expr$$10), (0, _TastOps.Expr$002Eget_Range)(expr$$10)));
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

function ConvLdfld(cenv$$4, env$$17, m$$18, fspec$$4, enclTypeArgs$$3, args$$10) {
  const tyargsR$$4 = ConvTypes(cenv$$4, env$$17, m$$18, enclTypeArgs$$3);
  const parentTyconR$$7 = ConvILTypeRefUnadjusted(cenv$$4, m$$18, (0, _il2.ILFieldSpec$$get_DeclaringTypeRef)(fspec$$4));
  const argsR$$6 = ConvLValueArgs(cenv$$4, env$$17, args$$10);
  return (0, _QuotationPickler.mkFieldGet)([parentTyconR$$7, (0, _il2.ILFieldSpec$$get_Name)(fspec$$4)], tyargsR$$4, argsR$$6);
}

function ConvUnionFieldGet(cenv$$5, env$$18, m$$19, ucref$$2, n$$2, tyargs$$13, e$$10) {
  const tyargsR$$5 = ConvTypes(cenv$$5, env$$18, m$$19, tyargs$$13);
  const patternInput$$8 = ConvUnionCaseRef(cenv$$5, ucref$$2, m$$19);
  const projR$$1 = [patternInput$$8[0], patternInput$$8[1], n$$2];
  const eR$$1 = ConvLValueExpr(cenv$$5, env$$18, e$$10);
  return (0, _QuotationPickler.mkUnionFieldGet)(projR$$1, tyargsR$$5, eR$$1);
}

function ConvClassOrRecdFieldGet(cenv$$6, env$$19, m$$20, rfref$$2, tyargs$$14, args$$11) {
  return EmitDebugInfoIfNecessary(cenv$$6, env$$19, m$$20, ConvClassOrRecdFieldGetCore(cenv$$6, env$$19, m$$20, rfref$$2, tyargs$$14, args$$11));
}

function ConvClassOrRecdFieldGetCore(cenv$$7, env$$20, m$$21, rfref$$3, tyargs$$15, args$$12) {
  const tyargsR$$6 = ConvTypes(cenv$$7, env$$20, m$$21, tyargs$$15);
  const argsR$$7 = ConvLValueArgs(cenv$$7, env$$20, args$$12);
  const projR$$2 = ConvRecdFieldRef(cenv$$7, rfref$$3, m$$21);
  const parentTyconR$$8 = projR$$2[0];
  const fldOrPropName$$1 = projR$$2[1];

  if ((0, _tast.EntityRef$$get_IsRecordTycon)((0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$3))) {
    return (0, _QuotationPickler.mkRecdGet)(projR$$2, tyargsR$$6, argsR$$7);
  } else {
    const fspec$$5 = (0, _tast.RecdFieldRef$$get_RecdField)(rfref$$3);
    const tcref$$6 = (0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$3);

    if ((0, _TastOps.useGenuineField)((0, _tast.EntityRef$$get_Deref)(tcref$$6), fspec$$5)) {
      return (0, _QuotationPickler.mkFieldGet)(projR$$2, tyargsR$$6, argsR$$7);
    } else {
      const envinner$$2 = BindFormalTypars(env$$20, (0, _tast.EntityRef$$get_TyparsNoRange)(tcref$$6));
      const propRetTypeR$$2 = ConvType(cenv$$7, envinner$$2, m$$21, (0, _tast.RecdField$$get_FormalType)(fspec$$5));
      return (0, _QuotationPickler.mkPropGet)([parentTyconR$$8, fldOrPropName$$1, propRetTypeR$$2, (0, _Types.L)()], tyargsR$$6, argsR$$7);
    }
  }
}

function ConvLetBind(cenv$$8, env$$21, bind$$1) {
  const matchValue$$10 = (0, _tast.Binding$$get_Expr)(bind$$1);
  var $target$$25, e$$11, ty$$10;

  if (matchValue$$10.tag === 11) {
    if (matchValue$$10.fields[0].tag === 22) {
      if (matchValue$$10.fields[0].fields[0].tail != null) {
        if (matchValue$$10.fields[0].fields[0].head.tag === 66) {
          if (matchValue$$10.fields[0].fields[0].tail.tail == null) {
            if (matchValue$$10.fields[1].tail != null) {
              if (matchValue$$10.fields[1].tail.tail == null) {
                if (matchValue$$10.fields[2].tail != null) {
                  if (matchValue$$10.fields[2].tail.tail == null) {
                    $target$$25 = 0;
                    e$$11 = matchValue$$10.fields[2].head;
                    ty$$10 = matchValue$$10.fields[1].head;
                  } else {
                    $target$$25 = 2;
                  }
                } else {
                  $target$$25 = 2;
                }
              } else {
                $target$$25 = 2;
              }
            } else {
              $target$$25 = 2;
            }
          } else {
            $target$$25 = 2;
          }
        } else {
          $target$$25 = 2;
        }
      } else {
        $target$$25 = 2;
      }
    } else {
      $target$$25 = 2;
    }
  } else if (matchValue$$10.tag === 1) {
    if ((0, _tast.Val$$get_IsCompilerGenerated)((0, _tast.Binding$$get_Var)(bind$$1))) {
      $target$$25 = 1;
    } else {
      $target$$25 = 2;
    }
  } else {
    $target$$25 = 2;
  }

  switch ($target$$25) {
    case 0:
      {
        return [null, BindIsInstVal(env$$21, (0, _tast.Binding$$get_Var)(bind$$1), ty$$10, e$$11)];
      }

    case 1:
      {
        return [null, BindSubstVal(env$$21, (0, _tast.Binding$$get_Var)(bind$$1), (0, _tast.Binding$$get_Expr)(bind$$1))];
      }

    case 2:
      {
        var $target$$26, e$$12;

        if (matchValue$$10.tag === 11) {
          if (matchValue$$10.fields[0].tag === 15) {
            if (matchValue$$10.fields[2].tail != null) {
              if (matchValue$$10.fields[2].tail.tail == null) {
                $target$$26 = 0;
                e$$12 = matchValue$$10.fields[2].head;
              } else {
                $target$$26 = 1;
              }
            } else {
              $target$$26 = 1;
            }
          } else {
            $target$$26 = 1;
          }
        } else {
          $target$$26 = 1;
        }

        switch ($target$$26) {
          case 0:
            {
              return [null, BindSubstVal(env$$21, (0, _tast.Binding$$get_Var)(bind$$1), e$$12)];
            }

          case 1:
            {
              const v$$11 = (0, _tast.Binding$$get_Var)(bind$$1);
              const vR$$1 = ConvVal(cenv$$8, env$$21, v$$11);
              const rhsR = ConvExpr(cenv$$8, env$$21, (0, _tast.Binding$$get_Expr)(bind$$1));
              const envinner$$3 = BindVal(env$$21, v$$11);
              return [[vR$$1, rhsR], envinner$$3];
            }
        }
      }
  }
}

function ConvLValueArgs(cenv$$9, env$$22, args$$13) {
  if (args$$13.tail == null) {
    return (0, _Types.L)();
  } else {
    const rest$$2 = args$$13.tail;
    const obj$$1 = args$$13.head;
    return (0, _Types.L)(ConvLValueExpr(cenv$$9, env$$22, obj$$1), ConvExprs(cenv$$9, env$$22, rest$$2));
  }
}

function ConvLValueExpr(cenv$$10, env$$23, expr$$13) {
  return EmitDebugInfoIfNecessary(cenv$$10, env$$23, (0, _TastOps.Expr$002Eget_Range)(expr$$13), ConvLValueExprCore(cenv$$10, env$$23, expr$$13));
}

function ConvLValueExprCore(cenv$$11, env$$24, expr$$14) {
  if (expr$$14.tag === 11) {
    const tyargs$$16 = expr$$14.fields[1];
    const op$$1 = expr$$14.fields[0];
    const m$$22 = expr$$14.fields[3];
    const args$$14 = expr$$14.fields[2];
    const matchValue$$11 = [op$$1, args$$14, tyargs$$16];

    var $target$$27, vref$$13, rfref$$4, e$$13, n$$3, ucref$$3, _rtys, fspec$$6, _rtys$$1, fspec$$7, _isNativePtr, _ro, _tyarg, arr$$3, elemty, idxs, shape;

    if (matchValue$$11[0].tag === 30) {
      if (matchValue$$11[0].fields[0].tag === 0) {
        $target$$27 = 0;
        vref$$13 = matchValue$$11[0].fields[1];
      } else {
        $target$$27 = 6;
      }
    } else if (matchValue$$11[0].tag === 13) {
      $target$$27 = 1;
      rfref$$4 = matchValue$$11[0].fields[0];
    } else if (matchValue$$11[0].tag === 17) {
      if (matchValue$$11[1].tail != null) {
        if (matchValue$$11[1].tail.tail == null) {
          $target$$27 = 2;
          e$$13 = matchValue$$11[1].head;
          n$$3 = matchValue$$11[0].fields[1];
          ucref$$3 = matchValue$$11[0].fields[0];
        } else {
          $target$$27 = 6;
        }
      } else {
        $target$$27 = 6;
      }
    } else if (matchValue$$11[0].tag === 22) {
      if (matchValue$$11[0].fields[0].tail != null) {
        if (matchValue$$11[0].fields[0].head.tag === 62) {
          if (matchValue$$11[0].fields[0].tail.tail == null) {
            $target$$27 = 3;
            _rtys = matchValue$$11[0].fields[1];
            fspec$$6 = matchValue$$11[0].fields[0].head.fields[0];
          } else {
            $target$$27 = 6;
          }
        } else if (matchValue$$11[0].fields[0].head.tag === 61) {
          if (matchValue$$11[0].fields[0].tail.tail == null) {
            $target$$27 = 4;
            _rtys$$1 = matchValue$$11[0].fields[1];
            fspec$$7 = matchValue$$11[0].fields[0].head.fields[0];
          } else {
            $target$$27 = 6;
          }
        } else if (matchValue$$11[0].fields[0].head.tag === 80) {
          if (matchValue$$11[0].fields[0].tail.tail == null) {
            if (matchValue$$11[1].tail != null) {
              if (matchValue$$11[2].tail != null) {
                if (matchValue$$11[2].tail.tail == null) {
                  $target$$27 = 5;
                  _isNativePtr = matchValue$$11[0].fields[0].head.fields[1];
                  _ro = matchValue$$11[0].fields[0].head.fields[0];
                  _tyarg = matchValue$$11[0].fields[0].head.fields[3];
                  arr$$3 = matchValue$$11[1].head;
                  elemty = matchValue$$11[2].head;
                  idxs = matchValue$$11[1].tail;
                  shape = matchValue$$11[0].fields[0].head.fields[2];
                } else {
                  $target$$27 = 6;
                }
              } else {
                $target$$27 = 6;
              }
            } else {
              $target$$27 = 6;
            }
          } else {
            $target$$27 = 6;
          }
        } else {
          $target$$27 = 6;
        }
      } else {
        $target$$27 = 6;
      }
    } else {
      $target$$27 = 6;
    }

    switch ($target$$27) {
      case 0:
        {
          return ConvValRef(false, cenv$$11, env$$24, m$$22, vref$$13, (0, _Types.L)());
        }

      case 1:
        {
          return ConvClassOrRecdFieldGet(cenv$$11, env$$24, m$$22, rfref$$4, tyargs$$16, args$$14);
        }

      case 2:
        {
          return ConvUnionFieldGet(cenv$$11, env$$24, m$$22, ucref$$3, n$$3, tyargs$$16, e$$13);
        }

      case 3:
        {
          return ConvLdfld(cenv$$11, env$$24, m$$22, fspec$$6, tyargs$$16, args$$14);
        }

      case 4:
        {
          return ConvLdfld(cenv$$11, env$$24, m$$22, fspec$$7, tyargs$$16, args$$14);
        }

      case 5:
        {
          const matchValue$$12 = [(0, _il2.ILArrayShape$$get_Rank)(shape), idxs];
          var $target$$28, idx1, idx1$$1, idx2, idx1$$2, idx2$$1, idx3, idx1$$3, idx2$$2, idx3$$1, idx4;

          if (matchValue$$12[0] === 1) {
            if (matchValue$$12[1].tail != null) {
              if (matchValue$$12[1].tail.tail == null) {
                $target$$28 = 0;
                idx1 = matchValue$$12[1].head;
              } else {
                $target$$28 = 4;
              }
            } else {
              $target$$28 = 4;
            }
          } else if (matchValue$$12[0] === 2) {
            if (matchValue$$12[1].tail != null) {
              if (matchValue$$12[1].tail.tail != null) {
                if (matchValue$$12[1].tail.tail.tail == null) {
                  $target$$28 = 1;
                  idx1$$1 = matchValue$$12[1].head;
                  idx2 = matchValue$$12[1].tail.head;
                } else {
                  $target$$28 = 4;
                }
              } else {
                $target$$28 = 4;
              }
            } else {
              $target$$28 = 4;
            }
          } else if (matchValue$$12[0] === 3) {
            if (matchValue$$12[1].tail != null) {
              if (matchValue$$12[1].tail.tail != null) {
                if (matchValue$$12[1].tail.tail.tail != null) {
                  if (matchValue$$12[1].tail.tail.tail.tail == null) {
                    $target$$28 = 2;
                    idx1$$2 = matchValue$$12[1].head;
                    idx2$$1 = matchValue$$12[1].tail.head;
                    idx3 = matchValue$$12[1].tail.tail.head;
                  } else {
                    $target$$28 = 4;
                  }
                } else {
                  $target$$28 = 4;
                }
              } else {
                $target$$28 = 4;
              }
            } else {
              $target$$28 = 4;
            }
          } else if (matchValue$$12[0] === 4) {
            if (matchValue$$12[1].tail != null) {
              if (matchValue$$12[1].tail.tail != null) {
                if (matchValue$$12[1].tail.tail.tail != null) {
                  if (matchValue$$12[1].tail.tail.tail.tail != null) {
                    if (matchValue$$12[1].tail.tail.tail.tail.tail == null) {
                      $target$$28 = 3;
                      idx1$$3 = matchValue$$12[1].head;
                      idx2$$2 = matchValue$$12[1].tail.head;
                      idx3$$1 = matchValue$$12[1].tail.tail.head;
                      idx4 = matchValue$$12[1].tail.tail.tail.head;
                    } else {
                      $target$$28 = 4;
                    }
                  } else {
                    $target$$28 = 4;
                  }
                } else {
                  $target$$28 = 4;
                }
              } else {
                $target$$28 = 4;
              }
            } else {
              $target$$28 = 4;
            }
          } else {
            $target$$28 = 4;
          }

          switch ($target$$28) {
            case 0:
              {
                return ConvExpr(cenv$$11, env$$24, (0, _TastOps.mkCallArrayGet)(cenv$$11.g, m$$22, elemty, arr$$3, idx1));
              }

            case 1:
              {
                return ConvExpr(cenv$$11, env$$24, (0, _TastOps.mkCallArray2DGet)(cenv$$11.g, m$$22, elemty, arr$$3, idx1$$1, idx2));
              }

            case 2:
              {
                return ConvExpr(cenv$$11, env$$24, (0, _TastOps.mkCallArray3DGet)(cenv$$11.g, m$$22, elemty, arr$$3, idx1$$2, idx2$$1, idx3));
              }

            case 3:
              {
                return ConvExpr(cenv$$11, env$$24, (0, _TastOps.mkCallArray4DGet)(cenv$$11.g, m$$22, elemty, arr$$3, idx1$$3, idx2$$2, idx3$$1, idx4));
              }

            case 4:
              {
                return ConvExpr(cenv$$11, env$$24, expr$$14);
              }
          }
        }

      case 6:
        {
          return ConvExpr(cenv$$11, env$$24, expr$$14);
        }
    }
  } else {
    return ConvExpr(cenv$$11, env$$24, expr$$14);
  }
}

function ConvObjectModelCall(cenv$$12, env$$25, m$$23, callInfo_0, callInfo_1, callInfo_2, callInfo_3, callInfo_4, callInfo_5, callInfo_6, callInfo_7, callInfo_8, callInfo_9) {
  const callInfo = [callInfo_0, callInfo_1, callInfo_2, callInfo_3, callInfo_4, callInfo_5, callInfo_6, callInfo_7, callInfo_8, callInfo_9];
  return EmitDebugInfoIfNecessary(cenv$$12, env$$25, m$$23, ConvObjectModelCallCore(cenv$$12, env$$25, m$$23, callInfo[0], callInfo[1], callInfo[2], callInfo[3], callInfo[4], callInfo[5], callInfo[6], callInfo[7], callInfo[8], callInfo[9]));
}

function ConvObjectModelCallCore(cenv$$13, env$$26, m$$24, isPropGet$$3, isPropSet$$3, isNewObj$$5, parentTyconR$$10, methArgTypesR$$4, methRetTypeR$$3, methName$$3, tyargs$$18, numGenericArgs$$2, callArgs$$3) {
  const tyargsR$$7 = ConvTypes(cenv$$13, env$$26, m$$24, tyargs$$18);
  const callArgsR = ConvLValueArgs(cenv$$13, env$$26, callArgs$$3);

  if (isPropGet$$3 ? true : isPropSet$$3) {
    const propName$$1 = (0, _PrettyNaming.ChopPropertyName)(methName$$3);

    if (isPropGet$$3) {
      return (0, _QuotationPickler.mkPropGet)([parentTyconR$$10, propName$$1, methRetTypeR$$3, methArgTypesR$$4], tyargsR$$7, callArgsR);
    } else {
      const patternInput$$9 = (0, _illib.List$$$frontAndBack)(methArgTypesR$$4);
      return (0, _QuotationPickler.mkPropSet)([parentTyconR$$10, propName$$1, patternInput$$9[1], patternInput$$9[0]], tyargsR$$7, callArgsR);
    }
  } else if (isNewObj$$5) {
    const ctorR = new _QuotationPickler.CtorData(parentTyconR$$10, methArgTypesR$$4);
    return (0, _QuotationPickler.mkCtorCall)(ctorR, tyargsR$$7, callArgsR);
  } else {
    const methR = new _QuotationPickler.MethodData(parentTyconR$$10, methName$$3, methArgTypesR$$4, methRetTypeR$$3, numGenericArgs$$2);
    return (0, _QuotationPickler.mkMethodCall)(methR, tyargsR$$7, callArgsR);
  }
}

function ConvModuleValueApp(cenv$$14, env$$27, m$$25, vref$$14, tyargs$$19, args$$16) {
  return EmitDebugInfoIfNecessary(cenv$$14, env$$27, m$$25, ConvModuleValueAppCore(cenv$$14, env$$27, m$$25, vref$$14, tyargs$$19, args$$16));
}

function ConvModuleValueAppCore(cenv$$15, env$$28, m$$26, vref$$15, tyargs$$20, args$$17) {
  const matchValue$$13 = (0, _tast.ValRef$$get_DeclaringEntity)(vref$$15);

  if (matchValue$$13.tag === 0) {
    const tcref$$7 = matchValue$$13.fields[0];
    const isProperty = (0, _TastOps.IsCompiledAsStaticProperty)(cenv$$15.g, (0, _tast.ValRef$$get_Deref)(vref$$15));
    const tcrefR = ConvTyconRef(cenv$$15, tcref$$7, m$$26);
    const tyargsR$$8 = ConvTypes(cenv$$15, env$$28, m$$26, tyargs$$20);
    const nm = (0, _tast.ValRef$$get_CompiledName)(vref$$15);
    const argsR$$8 = (0, _List.map)(function (args$$18) {
      return ConvExprs(cenv$$15, env$$28, args$$18);
    }, args$$17);
    return (0, _QuotationPickler.mkModuleValueApp)(tcrefR, nm, isProperty, tyargsR$$8, argsR$$8);
  } else {
    throw new Error("ConvModuleValueApp");
  }
}

function ConvExprs(cenv$$16, env$$29, args$$19) {
  return (0, _List.map)(function (expr$$15) {
    return ConvExpr(cenv$$16, env$$29, expr$$15);
  }, args$$19);
}

function ConvValRef(holeOk, cenv$$17, env$$30, m$$27, vref$$16, tyargs$$21) {
  return EmitDebugInfoIfNecessary(cenv$$17, env$$30, m$$27, ConvValRefCore(holeOk, cenv$$17, env$$30, m$$27, vref$$16, tyargs$$21));
}

function ConvValRefCore(holeOk$$1, cenv$$18, env$$31, m$$28, vref$$17, tyargs$$22) {
  const v$$12 = (0, _tast.ValRef$$get_Deref)(vref$$17);

  if ((0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(env$$31.isinstVals, v$$12)) {
    const patternInput$$10 = (0, _TastOps.ValMap$00601$$get_Item$$7D0CFEA5)(env$$31.isinstVals, v$$12);
    return ConvExpr(cenv$$18, env$$31, (0, _TastOps.mkCallUnbox)(cenv$$18.g, m$$28, patternInput$$10[0], patternInput$$10[1]));
  } else if ((0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(env$$31.substVals, v$$12)) {
    const e$$15 = (0, _TastOps.ValMap$00601$$get_Item$$7D0CFEA5)(env$$31.substVals, v$$12);
    return ConvExpr(cenv$$18, env$$31, e$$15);
  } else if ((0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(env$$31.vs, v$$12)) {
    if (!(tyargs$$22.tail == null)) {
      wfail(new _ErrorLogger.InternalError("ignoring generic application of local quoted variable", m$$28));
    }

    return (0, _QuotationPickler.mkVar)((0, _TastOps.ValMap$00601$$get_Item$$7D0CFEA5)(env$$31.vs, v$$12));
  } else if ((0, _Util.equals)((0, _tast.Val$$get_BaseOrThisInfo)(v$$12), new _tast.ValBaseOrThisInfo(0, "CtorThisVal")) ? (0, _Util.equals)(cenv$$18.isReflectedDefinition, new IsReflectedDefinition(0, "Yes")) : false) {
    return (0, _QuotationPickler.mkThisVar)(ConvType(cenv$$18, env$$31, m$$28, (0, _tast.Val$$get_Type)(v$$12)));
  } else {
    const vty = (0, _tast.Val$$get_Type)(v$$12);

    if ((0, _tast.Val$$get_DeclaringEntity)(v$$12).tag === 0) {
      return ConvModuleValueApp(cenv$$18, env$$31, m$$28, vref$$17, tyargs$$22, (0, _Types.L)());
    } else {
      if (!holeOk$$1) {
        wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefNoSetOfHole)(), m$$28));
      }

      const idx$$3 = (0, _Util.count)(cenv$$18.exprSplices) | 0;
      cenv$$18.exprSplices.push([(0, _TastOps.mkCallLiftValueWithName)(cenv$$18.g, m$$28, vty, (0, _tast.Val$$get_LogicalName)(v$$12), (0, _TastOps.exprForValRef)(m$$28, vref$$17)), m$$28]);
      return (0, _QuotationPickler.mkHole)(ConvType(cenv$$18, env$$31, m$$28, vty), idx$$3);
    }
  }
}

function ConvUnionCaseRef(cenv$$19, ucref$$4, m$$29) {
  const ucgtypR = ConvTyconRef(cenv$$19, (0, _tast.UnionCaseRef$$get_TyconRef)(ucref$$4), m$$29);
  const nm$$1 = (0, _TcGlobals.TcGlobals$$unionCaseRefEq)(cenv$$19.g, ucref$$4, (0, _TcGlobals.TcGlobals$$get_cons_ucref)(cenv$$19.g)) ? "Cons" : (0, _TcGlobals.TcGlobals$$unionCaseRefEq)(cenv$$19.g, ucref$$4, (0, _TcGlobals.TcGlobals$$get_nil_ucref)(cenv$$19.g)) ? "Empty" : (0, _tast.UnionCaseRef$$get_CaseName)(ucref$$4);
  return [ucgtypR, nm$$1];
}

function ConvRecdFieldRef(cenv$$20, rfref$$5, m$$30) {
  const typR$$1 = ConvTyconRef(cenv$$20, (0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$5), m$$30);
  const nm$$2 = (0, _TastOps.useGenuineField)((0, _tast.EntityRef$$get_Deref)((0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$5)), (0, _tast.RecdFieldRef$$get_RecdField)(rfref$$5)) ? (0, _TastOps.ComputeFieldName)((0, _tast.EntityRef$$get_Deref)((0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$5)), (0, _tast.RecdFieldRef$$get_RecdField)(rfref$$5)) : (0, _tast.RecdFieldRef$$get_FieldName)(rfref$$5);
  return [typR$$1, nm$$2];
}

function ConvVal(cenv$$21, env$$32, v$$13) {
  const tyR$$2 = ConvType(cenv$$21, env$$32, (0, _tast.Val$$get_Range)(v$$13), (0, _tast.Val$$get_Type)(v$$13));
  return (0, _QuotationPickler.freshVar)((0, _tast.Val$$get_CompiledName)(v$$13), tyR$$2, (0, _tast.Val$$get_IsMutable)(v$$13));
}

function ConvTyparRef(cenv$$22, env$$33, m$$31, tp) {
  const matchValue$$15 = (0, _Map.FSharpMap$$TryFind$$2B595)(env$$33.tyvs, (0, _tast.Typar$$get_Stamp)(tp));

  if (matchValue$$15 == null) {
    const matchValue$$16 = (0, _ResizeArray.tryFindIndex)(function (tupledArg$$1) {
      return (0, _tast.typarEq)(tp, tupledArg$$1[0]);
    }, cenv$$22.typeSplices);

    if (matchValue$$16 == null) {
      const idx$$5 = (0, _Util.count)(cenv$$22.typeSplices) | 0;
      cenv$$22.typeSplices.push([tp, m$$31]);
      return idx$$5 | 0;
    } else {
      const idx$$4 = matchValue$$16 | 0;
      return idx$$4 | 0;
    }
  } else {
    const x$$5 = matchValue$$15 | 0;
    return x$$5 | 0;
  }
}

function FilterMeasureTyargs(tys) {
  return (0, _List.filter)(function predicate$$1(ty$$12) {
    if (ty$$12.tag === 6) {
      return false;
    } else {
      return true;
    }
  }, tys);
}

function ConvType(cenv$$23, env$$34, m$$32, ty$$13) {
  var tyarg, tcref$$8;

  ConvType: while (true) {
    const matchValue$$17 = (0, _TastOps.stripTyEqnsAndMeasureEqns)(cenv$$23.g, ty$$13);
    var $target$$29, tcref$$9, tyarg$$1;

    if (matchValue$$17.tag === 1) {
      if (matchValue$$17.fields[1].tail != null) {
        if (matchValue$$17.fields[1].tail.tail == null) {
          if (tyarg = matchValue$$17.fields[1].head, (tcref$$8 = matchValue$$17.fields[0], (0, _TastOps.isArrayTyconRef)(cenv$$23.g, tcref$$8))) {
            $target$$29 = 0;
            tcref$$9 = matchValue$$17.fields[0];
            tyarg$$1 = matchValue$$17.fields[1].head;
          } else {
            $target$$29 = 1;
          }
        } else {
          $target$$29 = 1;
        }
      } else {
        $target$$29 = 1;
      }
    } else {
      $target$$29 = 1;
    }

    switch ($target$$29) {
      case 0:
        {
          return (0, _QuotationPickler.mkArrayTy)([(0, _TastOps.rankOfArrayTyconRef)(cenv$$23.g, tcref$$9), ConvType(cenv$$23, env$$34, m$$32, tyarg$$1)]);
        }

      case 1:
        {
          var $target$$30, tcref$$10, tyargs$$23;

          switch (matchValue$$17.tag) {
            case 4:
              $target$$30 = 0;
              tcref$$10 = matchValue$$17.fields[0].fields[0];
              tyargs$$23 = matchValue$$17.fields[1];
              break;

            case 1:
              $target$$30 = 0;
              tcref$$10 = matchValue$$17.fields[0];
              tyargs$$23 = matchValue$$17.fields[1];
              break;

            case 3:
              $target$$30 = 1;
              break;

            case 2:
              $target$$30 = 2;
              break;

            case 5:
              $target$$30 = 3;
              break;

            case 0:
              $target$$30 = 4;
              break;

            default:
              $target$$30 = 5;
          }

          switch ($target$$30) {
            case 0:
              {
                return (0, _QuotationPickler.mkILNamedTy)([ConvTyconRef(cenv$$23, tcref$$10, m$$32), ConvTypes(cenv$$23, env$$34, m$$32, tyargs$$23)]);
              }

            case 1:
              {
                const b$$4 = matchValue$$17.fields[1];
                const a$$2 = matchValue$$17.fields[0];
                return (0, _QuotationPickler.mkFunTy)([ConvType(cenv$$23, env$$34, m$$32, a$$2), ConvType(cenv$$23, env$$34, m$$32, b$$4)]);
              }

            case 2:
              {
                const tupInfo$$2 = matchValue$$17.fields[0];
                const l = matchValue$$17.fields[1];
                const $var$$31 = cenv$$23;
                env$$34 = env$$34;
                m$$32 = m$$32;
                ty$$13 = (0, _TastOps.mkCompiledTupleTy)(cenv$$23.g, (0, _TastOps.evalTupInfoIsStruct)(tupInfo$$2), l);
                cenv$$23 = $var$$31;
                continue ConvType;
              }

            case 3:
              {
                const tp$$1 = matchValue$$17.fields[0];
                return (0, _QuotationPickler.mkVarTy)(ConvTyparRef(cenv$$23, env$$34, m$$32, tp$$1));
              }

            case 4:
              {
                const _ty = matchValue$$17.fields[1];
                const _spec = matchValue$$17.fields[0];
                return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefNoInnerGenericsInQuotations)(), m$$32));
              }

            case 5:
              {
                return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainThisType)(), m$$32));
              }
          }
        }
    }
  }
}

function ConvTypes(cenv$$24, env$$35, m$$33, tys$$1) {
  return (0, _List.map)(function (ty$$14) {
    return ConvType(cenv$$24, env$$35, m$$33, ty$$14);
  }, FilterMeasureTyargs(tys$$1));
}

function ConvConst(cenv$$25, env$$36, m$$34, c$$1, ty$$15) {
  const matchValue$$18 = (0, _TastOps.TryEliminateDesugaredConstants)(cenv$$25.g, m$$34, c$$1);

  if (matchValue$$18 == null) {
    const tyR$$3 = ConvType(cenv$$25, env$$36, m$$34, ty$$15);

    switch (c$$1.tag) {
      case 0:
        {
          const i$$1 = c$$1.fields[0];
          return (0, _QuotationPickler.mkBool)(i$$1, tyR$$3);
        }

      case 1:
        {
          const i$$2 = c$$1.fields[0] | 0;
          return (0, _QuotationPickler.mkSByte)(i$$2, tyR$$3);
        }

      case 2:
        {
          const i$$3 = c$$1.fields[0];
          return (0, _QuotationPickler.mkByte)(i$$3, tyR$$3);
        }

      case 3:
        {
          const i$$4 = c$$1.fields[0] | 0;
          return (0, _QuotationPickler.mkInt16)(i$$4, tyR$$3);
        }

      case 4:
        {
          const i$$5 = c$$1.fields[0];
          return (0, _QuotationPickler.mkUInt16)(i$$5, tyR$$3);
        }

      case 5:
        {
          const i$$6 = c$$1.fields[0] | 0;
          return (0, _QuotationPickler.mkInt32)(i$$6, tyR$$3);
        }

      case 6:
        {
          const i$$7 = c$$1.fields[0];
          return (0, _QuotationPickler.mkUInt32)(i$$7, tyR$$3);
        }

      case 7:
        {
          const i$$8 = c$$1.fields[0];
          return (0, _QuotationPickler.mkInt64)(i$$8, tyR$$3);
        }

      case 8:
        {
          const i$$9 = c$$1.fields[0];
          return (0, _QuotationPickler.mkUInt64)(i$$9, tyR$$3);
        }

      case 12:
        {
          const i$$10 = c$$1.fields[0];
          return (0, _QuotationPickler.mkDouble)(i$$10, tyR$$3);
        }

      case 11:
        {
          const i$$11 = c$$1.fields[0];
          return (0, _QuotationPickler.mkSingle)(i$$11, tyR$$3);
        }

      case 14:
        {
          const s$$1 = c$$1.fields[0];
          return (0, _QuotationPickler.mkString)(s$$1, tyR$$3);
        }

      case 13:
        {
          const c$$2 = c$$1.fields[0];
          return (0, _QuotationPickler.mkChar)(c$$2, tyR$$3);
        }

      case 16:
        {
          return (0, _QuotationPickler.mkUnit)();
        }

      case 17:
        {
          if ((0, _TastOps.isRefTy)(cenv$$25.g, ty$$15)) {
            return (0, _QuotationPickler.mkNull)(tyR$$3);
          } else {
            return (0, _QuotationPickler.mkDefaultValue)(tyR$$3);
          }
        }

      default:
        {
          return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainThisConstant)(), m$$34));
        }
    }
  } else {
    const e$$16 = matchValue$$18;
    return ConvExpr(cenv$$25, env$$36, e$$16);
  }
}

function ConvDecisionTree(cenv$$26, env$$37, tgs$$1, typR$$2, x$$6) {
  ConvDecisionTree: while (true) {
    switch (x$$6.tag) {
      case 1:
        {
          const n$$4 = x$$6.fields[1] | 0;
          const args$$20 = x$$6.fields[0];
          const patternInput$$12 = tgs$$1[n$$4];
          const vars = patternInput$$12.fields[0];
          const rhs = patternInput$$12.fields[1];
          const args$$21 = (0, _List.reverse)(args$$20);
          const vars$$1 = (0, _List.reverse)(vars);
          const varsR = (0, _List.map)(function mapping$$5(v$$14) {
            return ConvVal(cenv$$26, env$$37, v$$14);
          }, vars$$1);
          const targetR = ConvExpr(cenv$$26, BindVals(env$$37, vars$$1), rhs);
          return (0, _List.foldBack2)(function folder$$3(vR$$2, arg$$6, acc$$2) {
            return (0, _QuotationPickler.mkLet)([vR$$2, ConvExpr(cenv$$26, env$$37, arg$$6)], acc$$2);
          }, varsR, args$$21, targetR);
        }

      case 2:
        {
          const rest$$3 = x$$6.fields[1];
          const bind$$2 = x$$6.fields[0];
          const matchValue$$19 = ConvLetBind(cenv$$26, env$$37, bind$$2);

          if (matchValue$$19[0] != null) {
            const bindR$$1 = matchValue$$19[0];
            return (0, _QuotationPickler.mkLet)(bindR$$1, ConvDecisionTree(cenv$$26, matchValue$$19[1], tgs$$1, typR$$2, rest$$3));
          } else {
            cenv$$26 = cenv$$26;
            env$$37 = matchValue$$19[1];
            tgs$$1 = tgs$$1;
            typR$$2 = typR$$2;
            x$$6 = rest$$3;
            continue ConvDecisionTree;
          }
        }

      default:
        {
          const m$$35 = x$$6.fields[3];
          const e1$$2 = x$$6.fields[0];
          const dfltOpt = x$$6.fields[2];
          const csl = x$$6.fields[1];
          let acc;

          if (dfltOpt == null) {
            acc = wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainThisPatternMatch)(), m$$35));
          } else {
            const d = dfltOpt;
            acc = ConvDecisionTree(cenv$$26, env$$37, tgs$$1, typR$$2, d);
          }

          const converted = (0, _List.foldBack)(function folder$$2(_arg1, acc$$1) {
            var vref$$18;
            const dtree$$1 = _arg1.fields[1];
            const discrim = _arg1.fields[0];

            if (discrim.tag === 2) {
              if (discrim.fields[0].tag === 0) {
                if (discrim.fields[0].fields[0]) {
                  const e1R$$1 = ConvExpr(cenv$$26, env$$37, e1$$2);
                  return (0, _QuotationPickler.mkCond)(e1R$$1, ConvDecisionTree(cenv$$26, env$$37, tgs$$1, typR$$2, dtree$$1), acc$$1);
                } else {
                  const e1R$$2 = ConvExpr(cenv$$26, env$$37, e1$$2);
                  return (0, _QuotationPickler.mkCond)(e1R$$2, acc$$1, ConvDecisionTree(cenv$$26, env$$37, tgs$$1, typR$$2, dtree$$1));
                }
              } else {
                const ty$$16 = (0, _TastOps.tyOfExpr)(cenv$$26.g, e1$$2);
                const eq$$1 = (0, _TastOps.mkCallEqualsOperator)(cenv$$26.g, m$$35, ty$$16, e1$$2, new _tast.Expr(0, "Const", discrim.fields[0], m$$35, ty$$16));
                const eqR = ConvExpr(cenv$$26, env$$37, eq$$1);
                return (0, _QuotationPickler.mkCond)(eqR, ConvDecisionTree(cenv$$26, env$$37, tgs$$1, typR$$2, dtree$$1), acc$$1);
              }
            } else if (discrim.tag === 3) {
              var $target$$32, vref$$19;

              if (e1$$2.tag === 1) {
                if (vref$$18 = e1$$2.fields[0], (0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(env$$37.isinstVals, (0, _tast.ValRef$$get_Deref)(vref$$18))) {
                  $target$$32 = 0;
                  vref$$19 = e1$$2.fields[0];
                } else {
                  $target$$32 = 1;
                }
              } else {
                $target$$32 = 1;
              }

              switch ($target$$32) {
                case 0:
                  {
                    const patternInput$$11 = (0, _TastOps.ValMap$00601$$get_Item$$7D0CFEA5)(env$$37.isinstVals, (0, _tast.ValRef$$get_Deref)(vref$$19));
                    const tyR$$4 = ConvType(cenv$$26, env$$37, m$$35, patternInput$$11[0]);
                    const eR$$2 = ConvExpr(cenv$$26, env$$37, patternInput$$11[1]);
                    return (0, _QuotationPickler.mkCond)((0, _QuotationPickler.mkTypeTest)(tyR$$4, eR$$2), acc$$1, ConvDecisionTree(cenv$$26, env$$37, tgs$$1, typR$$2, dtree$$1));
                  }

                case 1:
                  {
                    const ty$$18 = (0, _TastOps.tyOfExpr)(cenv$$26.g, e1$$2);
                    const eq$$2 = (0, _TastOps.mkCallEqualsOperator)(cenv$$26.g, m$$35, ty$$18, e1$$2, new _tast.Expr(0, "Const", new _tast.Const(17, "Zero"), m$$35, ty$$18));
                    const eqR$$1 = ConvExpr(cenv$$26, env$$37, eq$$2);
                    return (0, _QuotationPickler.mkCond)(eqR$$1, ConvDecisionTree(cenv$$26, env$$37, tgs$$1, typR$$2, dtree$$1), acc$$1);
                  }
              }
            } else if (discrim.tag === 4) {
              const e1R$$3 = ConvExpr(cenv$$26, env$$37, e1$$2);
              return (0, _QuotationPickler.mkCond)((0, _QuotationPickler.mkTypeTest)(ConvType(cenv$$26, env$$37, m$$35, discrim.fields[1]), e1R$$3), ConvDecisionTree(cenv$$26, env$$37, tgs$$1, typR$$2, dtree$$1), acc$$1);
            } else if (discrim.tag === 5) {
              return wfail(new _ErrorLogger.InternalError("DecisionTreeTest.ActivePatternCase test in quoted expression", m$$35));
            } else if (discrim.tag === 1) {
              return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainArrayPatternMatching)(), m$$35));
            } else {
              const e1R = ConvLValueExpr(cenv$$26, env$$37, e1$$2);
              const ucR = ConvUnionCaseRef(cenv$$26, discrim.fields[0], m$$35);
              const tyargsR$$9 = ConvTypes(cenv$$26, env$$37, m$$35, discrim.fields[1]);
              return (0, _QuotationPickler.mkCond)((0, _QuotationPickler.mkUnionCaseTagTest)(ucR, tyargsR$$9, e1R), ConvDecisionTree(cenv$$26, env$$37, tgs$$1, typR$$2, dtree$$1), acc$$1);
            }
          }, csl, acc);
          return EmitDebugInfoIfNecessary(cenv$$26, env$$37, m$$35, converted);
        }
    }
  }
}

function IsILTypeRefStaticLinkLocal(cenv$$27, m$$36, tr) {
  cenv$$27;
  m$$36;
  const matchValue$$20 = (0, _il2.ILTypeRef$$get_Scope)(tr);
  return false;
}

function ConvILTypeRefUnadjusted(cenv$$28, m$$37, tr$$1) {
  const trefAdjusted = IsILTypeRefStaticLinkLocal(cenv$$28, m$$37, tr$$1) ? (0, _il2.ILTypeRef$$$Create$$113F1D6)(new _il2.ILScopeRef(0, "Local"), (0, _il2.ILTypeRef$$get_Enclosing)(tr$$1), (0, _il2.ILTypeRef$$get_Name)(tr$$1)) : tr$$1;
  return ConvILTypeRef(cenv$$28, trefAdjusted);
}

function ConvILTypeRef(cenv$$29, tr$$2) {
  if (cenv$$29.quotationFormat.tag === 1) {
    const assref = (0, _il2.ILTypeRef$$get_Scope)(tr$$2).tag === 0 ? "." : (0, _il2.ILScopeRef$$get_QualifiedName)((0, _il2.ILTypeRef$$get_Scope)(tr$$2));
    return new _QuotationPickler.NamedTypeData(1, "Named", (0, _il2.ILTypeRef$$get_BasicQualifiedName)(tr$$2), assref);
  } else {
    let idx$$8;
    const matchValue$$22 = (0, _Util.tryGetValue)(cenv$$29.referencedTypeDefsTable, tr$$2, 0);

    if (matchValue$$22[0]) {
      idx$$8 = matchValue$$22[1];
    } else {
      const idx$$7 = (0, _Util.count)(cenv$$29.referencedTypeDefs) | 0;
      cenv$$29.referencedTypeDefs.push(tr$$2);
      cenv$$29.referencedTypeDefsTable.set(tr$$2, idx$$7);
      idx$$8 = idx$$7;
    }

    return new _QuotationPickler.NamedTypeData(0, "Idx", idx$$8);
  }
}

function ConvVoidType(cenv$$30, m$$38) {
  return (0, _QuotationPickler.mkILNamedTy)([ConvTyconRef(cenv$$30, (0, _TcGlobals.TcGlobals$$get_system_Void_tcref)(cenv$$30.g), m$$38), (0, _Types.L)()]);
}

function ConvILType(cenv$$31, env$$40, m$$39, ty$$19) {
  var $target$$33, tspec;

  switch (ty$$19.tag) {
    case 2:
      $target$$33 = 0;
      tspec = ty$$19.fields[0];
      break;

    case 1:
      $target$$33 = 1;
      break;

    case 7:
      $target$$33 = 2;
      break;

    case 0:
      $target$$33 = 3;
      break;

    case 4:
    case 5:
    case 8:
    case 6:
      $target$$33 = 4;
      break;

    default:
      $target$$33 = 0;
      tspec = ty$$19.fields[0];
  }

  switch ($target$$33) {
    case 0:
      {
        return (0, _QuotationPickler.mkILNamedTy)([ConvILTypeRefUnadjusted(cenv$$31, m$$39, (0, _il2.ILTypeSpec$$get_TypeRef)(tspec)), (0, _List.map)(function (ty$$20) {
          return ConvILType(cenv$$31, env$$40, m$$39, ty$$20);
        }, (0, _il2.ILTypeSpec$$get_GenericArgs)(tspec))]);
      }

    case 1:
      {
        const ty$$21 = ty$$19.fields[1];
        const shape$$1 = ty$$19.fields[0];
        return (0, _QuotationPickler.mkArrayTy)([(0, _il2.ILArrayShape$$get_Rank)(shape$$1), ConvILType(cenv$$31, env$$40, m$$39, ty$$21)]);
      }

    case 2:
      {
        const idx$$9 = ty$$19.fields[0];
        return (0, _QuotationPickler.mkVarTy)(~~idx$$9);
      }

    case 3:
      {
        return ConvVoidType(cenv$$31, m$$39);
      }

    case 4:
      {
        return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainThisType)(), m$$39));
      }
  }
}

function ConvTyconRef(cenv$$32, tcref$$11, m$$40) {
  const repr = (0, _tast.EntityRef$$get_CompiledRepresentation)(tcref$$11);

  if (repr.tag === 0) {
    const tref = repr.fields[0];
    const _boxity = repr.fields[1];
    return ConvILTypeRefUnadjusted(cenv$$32, m$$40, tref);
  } else {
    const asm = repr.fields[0];
    var $target$$34, tspec$$1;

    switch (asm.tag) {
      case 3:
        $target$$34 = 0;
        tspec$$1 = asm.fields[0];
        break;

      case 2:
        $target$$34 = 0;
        tspec$$1 = asm.fields[0];
        break;

      default:
        $target$$34 = 1;
    }

    switch ($target$$34) {
      case 0:
        {
          return ConvILTypeRef(cenv$$32, (0, _il2.ILTypeSpec$$get_TypeRef)(tspec$$1));
        }

      case 1:
        {
          return wfail(new _ErrorLogger.Error$((0, _FSComp.SR$$$crefQuotationsCantContainThisType)(), m$$40));
        }
    }
  }
}

function ConvReturnType(cenv$$33, envinner$$4, m$$41, retTy$$4) {
  if (retTy$$4 != null) {
    const ty$$22 = retTy$$4;
    return ConvType(cenv$$33, envinner$$4, m$$41, ty$$22);
  } else {
    return ConvVoidType(cenv$$33, m$$41);
  }
}

function ConvExprPublic(cenv$$34, env$$41, e$$18) {
  let astExpr$$2;
  const astExpr$$1 = ConvExpr(cenv$$34, env$$41, e$$18);
  cenv$$34.emitDebugInfoInQuotations = true;
  astExpr$$2 = EmitDebugInfoIfNecessary(cenv$$34, env$$41, (0, _TastOps.Expr$002Eget_Range)(e$$18), astExpr$$1);
  return astExpr$$2;
}

function ConvMethodBase(cenv$$35, env$$42, methName$$4, v$$15) {
  var vspr;
  const m$$42 = (0, _tast.Val$$get_Range)(v$$15);
  const parentTyconR$$11 = ConvTyconRef(cenv$$35, (0, _tast.Val$$get_TopValDeclaringEntity)(v$$15), m$$42);
  const matchValue$$24 = (0, _tast.Val$$get_MemberInfo)(v$$15);
  var $target$$35, vspr$$1;

  if (matchValue$$24 != null) {
    if (vspr = matchValue$$24, !(0, _tast.Val$$get_IsExtensionMember)(v$$15)) {
      $target$$35 = 0;
      vspr$$1 = matchValue$$24;
    } else {
      $target$$35 = 1;
    }
  } else {
    $target$$35 = 1;
  }

  switch ($target$$35) {
    case 0:
      {
        const vref$$20 = (0, _tast.mkLocalValRef)(v$$15);
        const patternInput$$13 = (0, _TastOps.GetTypeOfMemberInMemberForm)(cenv$$35.g, vref$$20);
        const numEnclTypeArgs$$1 = (0, _List.length)((0, _tast.EntityRef$$get_TyparsNoRange)((0, _tast.ValRef$$get_MemberApparentEntity)(vref$$20))) | 0;
        const argTys$$1 = (0, _List.map)(function mapping$$6(tuple$$1) {
          return tuple$$1[0];
        }, (0, _List.concat)(patternInput$$13[1]));
        const isNewObj$$6 = (0, _Util.equals)(vspr$$1.MemberFlags.MemberKind, new _ast.MemberKind(1, "Constructor"));
        const envinner$$5 = BindFormalTypars(env$$42, patternInput$$13[0]);
        const methArgTypesR$$5 = ConvTypes(cenv$$35, envinner$$5, m$$42, argTys$$1);
        const methRetTypeR$$4 = ConvReturnType(cenv$$35, envinner$$5, m$$42, patternInput$$13[2]);
        const numGenericArgs$$3 = (0, _List.length)(patternInput$$13[0]) - numEnclTypeArgs$$1 | 0;

        if (isNewObj$$6) {
          return new _QuotationPickler.MethodBaseData(2, "Ctor", new _QuotationPickler.CtorData(parentTyconR$$11, methArgTypesR$$5));
        } else {
          return new _QuotationPickler.MethodBaseData(1, "Method", new _QuotationPickler.MethodData(parentTyconR$$11, methName$$4, methArgTypesR$$5, methRetTypeR$$4, numGenericArgs$$3));
        }
      }

    case 1:
      {
        if ((0, _tast.Val$$get_IsExtensionMember)(v$$15)) {
          const patternInput$$14 = (0, _TastOps.GetTopValTypeInCompiledForm)(cenv$$35.g, (0, _tast.Val$$get_ValReprInfo)(v$$15), (0, _tast.Val$$get_Type)(v$$15), (0, _tast.Val$$get_Range)(v$$15));
          const argTys$$2 = (0, _List.map)(function mapping$$7(tuple$$2) {
            return tuple$$2[0];
          }, (0, _List.concat)(patternInput$$14[1]));
          const envinner$$6 = BindFormalTypars(env$$42, patternInput$$14[0]);
          const methArgTypesR$$6 = ConvTypes(cenv$$35, envinner$$6, m$$42, argTys$$2);
          const methRetTypeR$$5 = ConvReturnType(cenv$$35, envinner$$6, m$$42, patternInput$$14[2]);
          const numGenericArgs$$4 = (0, _List.length)(patternInput$$14[0]) | 0;
          return new _QuotationPickler.MethodBaseData(1, "Method", new _QuotationPickler.MethodData(parentTyconR$$11, methName$$4, methArgTypesR$$6, methRetTypeR$$5, numGenericArgs$$4));
        } else {
          return new _QuotationPickler.MethodBaseData(0, "ModuleDefn", new _QuotationPickler.ModuleDefnData(parentTyconR$$11, methName$$4, (0, _TastOps.IsCompiledAsStaticProperty)(cenv$$35.g, v$$15)));
        }
      }
  }
}