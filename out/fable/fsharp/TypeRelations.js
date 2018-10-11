"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeDefinitelySubsumesTypeNoCoercion = TypeDefinitelySubsumesTypeNoCoercion;
exports.TypesFeasiblyEquiv = TypesFeasiblyEquiv;
exports.TypeFeasiblySubsumesType = TypeFeasiblySubsumesType;
exports.ChooseTyparSolutionAndRange = ChooseTyparSolutionAndRange;
exports.ChooseTyparSolution = ChooseTyparSolution;
exports.IterativelySubstituteTyparSolutions = IterativelySubstituteTyparSolutions;
exports.ChooseTyparSolutionsForFreeChoiceTypars = ChooseTyparSolutionsForFreeChoiceTypars;
exports.tryDestTopLambda = tryDestTopLambda;
exports.destTopLambda = destTopLambda;
exports.IteratedAdjustArityOfLambdaBody = IteratedAdjustArityOfLambdaBody;
exports.IteratedAdjustArityOfLambda = IteratedAdjustArityOfLambda;
exports.FindUniqueFeasibleSupertype = FindUniqueFeasibleSupertype;
exports.CanCoerce = void 0;

var _ErrorLogger = require("./ErrorLogger");

var _TastOps = require("./TastOps");

var _illib = require("../absil/illib");

var _TcGlobals = require("./TcGlobals");

var _infos = require("./infos");

var _List = require("../fable-core.2.0.3/List");

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _tast = require("./tast");

var _FSComp = require("../codegen/FSComp");

var _zset = require("../absil/zset");

var _String = require("../fable-core.2.0.3/String");

var _Option = require("../fable-core.2.0.3/Option");

function TypeDefinitelySubsumesTypeNoCoercion(ndeep, g, amap, m, ty1, ty2) {
  var matchValue$$1, ty, tc2$$2, tc1$$2, l2$$2, l1$$2, tc2, tc1, l2, l1;

  if (ndeep > 100) {
    (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("recursive class hierarchy (detected in TypeDefinitelySubsumesTypeNoCoercion), ty1 = " + (0, _TastOps.DebugPrint$$$showType)(ty1), m));
  }

  if (ty1 === ty2) {
    return true;
  } else if ((0, _TastOps.typeEquiv)(g, ty1, ty2)) {
    return true;
  } else {
    const ty1$$1 = (0, _TastOps.stripTyEqns)(g, ty1);
    const ty2$$1 = (0, _TastOps.stripTyEqns)(g, ty2);
    const matchValue = [ty1$$1, ty2$$1];
    var $target$$2, l1$$1, l2$$1, tc1$$1, tc2$$1;

    if (matchValue[0].tag === 1) {
      if (matchValue[1].tag === 1) {
        if (tc2 = matchValue[1].fields[0], (tc1 = matchValue[0].fields[0], (l2 = matchValue[1].fields[1], (l1 = matchValue[0].fields[1], (0, _TastOps.tyconRefEq)(g, tc1, tc2))))) {
          $target$$2 = 0;
          l1$$1 = matchValue[0].fields[1];
          l2$$1 = matchValue[1].fields[1];
          tc1$$1 = matchValue[0].fields[0];
          tc2$$1 = matchValue[1].fields[0];
        } else {
          $target$$2 = 1;
        }
      } else {
        $target$$2 = 1;
      }
    } else {
      $target$$2 = 1;
    }

    switch ($target$$2) {
      case 0:
        {
          return (0, _illib.List$$$lengthsEqAndForall2)(function (arg10$0040, arg20$0040) {
            return (0, _TastOps.typeEquiv)(g, arg10$0040, arg20$0040);
          }, l1$$1, l2$$1);
        }

      case 1:
        {
          var $target$$3, l1$$3, l2$$3, tc1$$3, tc2$$3;

          if (matchValue[0].tag === 4) {
            if (matchValue[1].tag === 4) {
              if (tc2$$2 = matchValue[1].fields[0], (tc1$$2 = matchValue[0].fields[0], (l2$$2 = matchValue[1].fields[1], (l1$$2 = matchValue[0].fields[1], (0, _TcGlobals.TcGlobals$$unionCaseRefEq)(g, tc1$$2, tc2$$2))))) {
                $target$$3 = 0;
                l1$$3 = matchValue[0].fields[1];
                l2$$3 = matchValue[1].fields[1];
                tc1$$3 = matchValue[0].fields[0];
                tc2$$3 = matchValue[1].fields[0];
              } else {
                $target$$3 = 1;
              }
            } else {
              $target$$3 = 1;
            }
          } else {
            $target$$3 = 1;
          }

          switch ($target$$3) {
            case 0:
              {
                return (0, _illib.List$$$lengthsEqAndForall2)(function (arg10$0040$$1, arg20$0040$$1) {
                  return (0, _TastOps.typeEquiv)(g, arg10$0040$$1, arg20$0040$$1);
                }, l1$$3, l2$$3);
              }

            case 1:
              {
                var $target$$4, l1$$4, l2$$4, tupInfo1, tupInfo2, d1, d2, r1, r2, measure1, measure2;

                if (matchValue[0].tag === 2) {
                  if (matchValue[1].tag === 2) {
                    $target$$4 = 0;
                    l1$$4 = matchValue[0].fields[1];
                    l2$$4 = matchValue[1].fields[1];
                    tupInfo1 = matchValue[0].fields[0];
                    tupInfo2 = matchValue[1].fields[0];
                  } else {
                    $target$$4 = 3;
                  }
                } else if (matchValue[0].tag === 3) {
                  if (matchValue[1].tag === 3) {
                    $target$$4 = 1;
                    d1 = matchValue[0].fields[0];
                    d2 = matchValue[1].fields[0];
                    r1 = matchValue[0].fields[1];
                    r2 = matchValue[1].fields[1];
                  } else {
                    $target$$4 = 3;
                  }
                } else if (matchValue[0].tag === 6) {
                  if (matchValue[1].tag === 6) {
                    $target$$4 = 2;
                    measure1 = matchValue[0].fields[0];
                    measure2 = matchValue[1].fields[0];
                  } else {
                    $target$$4 = 3;
                  }
                } else {
                  $target$$4 = 3;
                }

                switch ($target$$4) {
                  case 0:
                    {
                      if ((0, _TastOps.evalTupInfoIsStruct)(tupInfo1) === (0, _TastOps.evalTupInfoIsStruct)(tupInfo2)) {
                        return (0, _illib.List$$$lengthsEqAndForall2)(function (arg10$0040$$2, arg20$0040$$2) {
                          return (0, _TastOps.typeEquiv)(g, arg10$0040$$2, arg20$0040$$2);
                        }, l1$$4, l2$$4);
                      } else {
                        return false;
                      }
                    }

                  case 1:
                    {
                      if ((0, _TastOps.typeEquiv)(g, d1, d2)) {
                        return (0, _TastOps.typeEquiv)(g, r1, r2);
                      } else {
                        return false;
                      }
                    }

                  case 2:
                    {
                      return (0, _TastOps.measureEquiv)(g, measure1, measure2);
                    }

                  case 3:
                    {
                      if ((0, _TastOps.typeEquiv)(g, ty1$$1, (0, _TcGlobals.TcGlobals$$get_obj_ty)(g)) ? (0, _TastOps.isRefTy)(g, ty2$$1) : false) {
                        return true;
                      } else if ((0, _TastOps.isAppTy)(g, ty2$$1) ? (0, _TastOps.isRefTy)(g, ty2$$1) : false) {
                        if (matchValue$$1 = (0, _infos.GetSuperTypeOfType)(g, amap, m, ty2$$1), matchValue$$1 != null ? (ty = matchValue$$1, TypeDefinitelySubsumesTypeNoCoercion(ndeep + 1, g, amap, m, ty1$$1, ty)) : false) {
                          return true;
                        } else if ((0, _TastOps.isInterfaceTy)(g, ty1$$1)) {
                          return (0, _List.exists)(function predicate(ty2$$2) {
                            return TypeDefinitelySubsumesTypeNoCoercion(ndeep + 1, g, amap, m, ty1$$1, ty2$$2);
                          }, (0, _infos.GetImmediateInterfacesOfType)(new _infos.SkipUnrefInterfaces(0, "Yes"), g, amap, m, ty2$$1));
                        } else {
                          return false;
                        }
                      } else {
                        return false;
                      }
                    }
                }
              }
          }
        }
    }
  }
}

const CanCoerce = (0, _Types.declare)(function CanCoerce(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.CanCoerce = CanCoerce;

function TypesFeasiblyEquiv(ndeep$$2, g$$1, amap$$1, m$$1, ty1$$2, ty2$$3) {
  var tc2$$4, tc1$$4, l2$$5, l1$$5;

  TypesFeasiblyEquiv: while (true) {
    if (ndeep$$2 > 100) {
      (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("recursive class hierarchy (detected in TypeFeasiblySubsumesType), ty1 = " + (0, _TastOps.DebugPrint$$$showType)(ty1$$2), m$$1));
    }

    const ty1$$3 = (0, _TastOps.stripTyEqns)(g$$1, ty1$$2);
    const ty2$$4 = (0, _TastOps.stripTyEqns)(g$$1, ty2$$3);
    const matchValue$$2 = [ty1$$3, ty2$$4];
    var $target$$5, l1$$6, l2$$6, tc1$$5, tc2$$5;

    if (matchValue$$2[0].tag === 5) {
      $target$$5 = 0;
    } else if (matchValue$$2[0].tag === 1) {
      if (matchValue$$2[1].tag === 5) {
        $target$$5 = 0;
      } else if (matchValue$$2[1].tag === 1) {
        if (tc2$$4 = matchValue$$2[1].fields[0], (tc1$$4 = matchValue$$2[0].fields[0], (l2$$5 = matchValue$$2[1].fields[1], (l1$$5 = matchValue$$2[0].fields[1], (0, _TastOps.tyconRefEq)(g$$1, tc1$$4, tc2$$4))))) {
          $target$$5 = 1;
          l1$$6 = matchValue$$2[0].fields[1];
          l2$$6 = matchValue$$2[1].fields[1];
          tc1$$5 = matchValue$$2[0].fields[0];
          tc2$$5 = matchValue$$2[1].fields[0];
        } else {
          $target$$5 = 2;
        }
      } else {
        $target$$5 = 2;
      }
    } else if (matchValue$$2[1].tag === 5) {
      $target$$5 = 0;
    } else {
      $target$$5 = 2;
    }

    switch ($target$$5) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return (0, _illib.List$$$lengthsEqAndForall2)(function (ty1$$4, ty2$$5) {
            return TypesFeasiblyEquiv(ndeep$$2, g$$1, amap$$1, m$$1, ty1$$4, ty2$$5);
          }, l1$$6, l2$$6);
        }

      case 2:
        {
          var $target$$6, l1$$7, l2$$7, tupInfo1$$1, tupInfo2$$1, d1$$1, d2$$1, r1$$1, r2$$1;

          if (matchValue$$2[0].tag === 2) {
            if (matchValue$$2[1].tag === 2) {
              $target$$6 = 0;
              l1$$7 = matchValue$$2[0].fields[1];
              l2$$7 = matchValue$$2[1].fields[1];
              tupInfo1$$1 = matchValue$$2[0].fields[0];
              tupInfo2$$1 = matchValue$$2[1].fields[0];
            } else {
              $target$$6 = 3;
            }
          } else if (matchValue$$2[0].tag === 3) {
            if (matchValue$$2[1].tag === 3) {
              $target$$6 = 1;
              d1$$1 = matchValue$$2[0].fields[0];
              d2$$1 = matchValue$$2[1].fields[0];
              r1$$1 = matchValue$$2[0].fields[1];
              r2$$1 = matchValue$$2[1].fields[1];
            } else {
              $target$$6 = 3;
            }
          } else if (matchValue$$2[0].tag === 6) {
            if (matchValue$$2[1].tag === 6) {
              $target$$6 = 2;
            } else {
              $target$$6 = 3;
            }
          } else {
            $target$$6 = 3;
          }

          switch ($target$$6) {
            case 0:
              {
                if ((0, _TastOps.evalTupInfoIsStruct)(tupInfo1$$1) === (0, _TastOps.evalTupInfoIsStruct)(tupInfo2$$1)) {
                  return (0, _illib.List$$$lengthsEqAndForall2)(function (ty1$$5, ty2$$6) {
                    return TypesFeasiblyEquiv(ndeep$$2, g$$1, amap$$1, m$$1, ty1$$5, ty2$$6);
                  }, l1$$7, l2$$7);
                } else {
                  return false;
                }
              }

            case 1:
              {
                if (TypesFeasiblyEquiv(ndeep$$2, g$$1, amap$$1, m$$1, d1$$1, d2$$1)) {
                  ndeep$$2 = ndeep$$2;
                  g$$1 = g$$1;
                  amap$$1 = amap$$1;
                  m$$1 = m$$1;
                  ty1$$2 = r1$$1;
                  ty2$$3 = r2$$1;
                  continue TypesFeasiblyEquiv;
                } else {
                  return false;
                }
              }

            case 2:
              {
                return true;
              }

            case 3:
              {
                return false;
              }
          }
        }
    }
  }
}

function TypeFeasiblySubsumesType(ndeep$$3, g$$2, amap$$2, m$$2, ty1$$6, canCoerce, ty2$$7) {
  var matchValue$$4, ty$$2, tc2$$6, tc1$$6, l2$$8, l1$$8;

  if (ndeep$$3 > 100) {
    (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("recursive class hierarchy (detected in TypeFeasiblySubsumesType), ty1 = " + (0, _TastOps.DebugPrint$$$showType)(ty1$$6), m$$2));
  }

  const ty1$$7 = (0, _TastOps.stripTyEqns)(g$$2, ty1$$6);
  const ty2$$8 = (0, _TastOps.stripTyEqns)(g$$2, ty2$$7);
  const matchValue$$3 = [ty1$$7, ty2$$8];
  var $target$$7, l1$$9, l2$$9, tc1$$7, tc2$$7;

  if (matchValue$$3[0].tag === 5) {
    $target$$7 = 0;
  } else if (matchValue$$3[0].tag === 1) {
    if (matchValue$$3[1].tag === 5) {
      $target$$7 = 0;
    } else if (matchValue$$3[1].tag === 1) {
      if (tc2$$6 = matchValue$$3[1].fields[0], (tc1$$6 = matchValue$$3[0].fields[0], (l2$$8 = matchValue$$3[1].fields[1], (l1$$8 = matchValue$$3[0].fields[1], (0, _TastOps.tyconRefEq)(g$$2, tc1$$6, tc2$$6))))) {
        $target$$7 = 1;
        l1$$9 = matchValue$$3[0].fields[1];
        l2$$9 = matchValue$$3[1].fields[1];
        tc1$$7 = matchValue$$3[0].fields[0];
        tc2$$7 = matchValue$$3[1].fields[0];
      } else {
        $target$$7 = 2;
      }
    } else {
      $target$$7 = 2;
    }
  } else if (matchValue$$3[1].tag === 5) {
    $target$$7 = 0;
  } else {
    $target$$7 = 2;
  }

  switch ($target$$7) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return (0, _illib.List$$$lengthsEqAndForall2)(function (ty1$$8, ty2$$9) {
          return TypesFeasiblyEquiv(ndeep$$3, g$$2, amap$$2, m$$2, ty1$$8, ty2$$9);
        }, l1$$9, l2$$9);
      }

    case 2:
      {
        var $target$$8, l1$$10, l2$$10, tupInfo1$$2, tupInfo2$$2, d1$$2, d2$$2, r1$$2, r2$$2;

        if (matchValue$$3[0].tag === 2) {
          if (matchValue$$3[1].tag === 2) {
            $target$$8 = 0;
            l1$$10 = matchValue$$3[0].fields[1];
            l2$$10 = matchValue$$3[1].fields[1];
            tupInfo1$$2 = matchValue$$3[0].fields[0];
            tupInfo2$$2 = matchValue$$3[1].fields[0];
          } else {
            $target$$8 = 3;
          }
        } else if (matchValue$$3[0].tag === 3) {
          if (matchValue$$3[1].tag === 3) {
            $target$$8 = 1;
            d1$$2 = matchValue$$3[0].fields[0];
            d2$$2 = matchValue$$3[1].fields[0];
            r1$$2 = matchValue$$3[0].fields[1];
            r2$$2 = matchValue$$3[1].fields[1];
          } else {
            $target$$8 = 3;
          }
        } else if (matchValue$$3[0].tag === 6) {
          if (matchValue$$3[1].tag === 6) {
            $target$$8 = 2;
          } else {
            $target$$8 = 3;
          }
        } else {
          $target$$8 = 3;
        }

        switch ($target$$8) {
          case 0:
            {
              if ((0, _TastOps.evalTupInfoIsStruct)(tupInfo1$$2) === (0, _TastOps.evalTupInfoIsStruct)(tupInfo2$$2)) {
                return (0, _illib.List$$$lengthsEqAndForall2)(function (ty1$$9, ty2$$10) {
                  return TypesFeasiblyEquiv(ndeep$$3, g$$2, amap$$2, m$$2, ty1$$9, ty2$$10);
                }, l1$$10, l2$$10);
              } else {
                return false;
              }
            }

          case 1:
            {
              if (TypesFeasiblyEquiv(ndeep$$3, g$$2, amap$$2, m$$2, d1$$2, d2$$2)) {
                return TypesFeasiblyEquiv(ndeep$$3, g$$2, amap$$2, m$$2, r1$$2, r2$$2);
              } else {
                return false;
              }
            }

          case 2:
            {
              return true;
            }

          case 3:
            {
              if ((0, _TastOps.isObjTy)(g$$2, ty1$$7) ? (0, _Util.equals)(canCoerce, new CanCoerce(0, "CanCoerce")) ? true : (0, _TastOps.isRefTy)(g$$2, ty2$$8) : false) {
                return true;
              } else if (((0, _TastOps.isAppTy)(g$$2, ty2$$8) ? (0, _Util.equals)(canCoerce, new CanCoerce(0, "CanCoerce")) ? true : (0, _TastOps.isRefTy)(g$$2, ty2$$8) : false) ? (matchValue$$4 = (0, _infos.GetSuperTypeOfType)(g$$2, amap$$2, m$$2, ty2$$8), matchValue$$4 != null ? (ty$$2 = matchValue$$4, TypeFeasiblySubsumesType(ndeep$$3 + 1, g$$2, amap$$2, m$$2, ty1$$7, new CanCoerce(1, "NoCoerce"), ty$$2)) : false) : false) {
                return true;
              } else {
                return (0, _List.exists)(function predicate$$1(ty2$$13) {
                  return TypeFeasiblySubsumesType(ndeep$$3 + 1, g$$2, amap$$2, m$$2, ty1$$7, new CanCoerce(1, "NoCoerce"), ty2$$13);
                }, (0, _infos.GetImmediateInterfacesOfType)(new _infos.SkipUnrefInterfaces(0, "Yes"), g$$2, amap$$2, m$$2, ty2$$8));
              }
            }
        }
      }
  }
}

function ChooseTyparSolutionAndRange(g$$3, amap$$3, tp) {
  const m$$3 = (0, _tast.Typar$$get_Range)(tp);
  let patternInput;
  const initial = (0, _tast.Typar$$get_Kind)(tp).tag === 1 ? new _tast.TType(6, "TType_measure", new _tast.Measure(4, "One")) : (0, _TcGlobals.TcGlobals$$get_obj_ty)(g$$3);
  patternInput = (0, _List.fold)(function folder(tupledArg, tpc) {
    const join = function join(m$$4, x$$1) {
      if (TypeFeasiblySubsumesType(0, g$$3, amap$$3, m$$4, x$$1, new CanCoerce(0, "CanCoerce"), tupledArg[0])) {
        return tupledArg[0];
      } else if (TypeFeasiblySubsumesType(0, g$$3, amap$$3, m$$4, tupledArg[0], new CanCoerce(0, "CanCoerce"), x$$1)) {
        return x$$1;
      } else {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelCannotResolveImplicitGenericInstantiation$$Z384F8060)((0, _TastOps.DebugPrint$$$showType)(x$$1), (0, _TastOps.DebugPrint$$$showType)(tupledArg[0])), m$$4));
        return tupledArg[0];
      }
    };

    if ((0, _tast.Typar$$get_IsSolved)(tp)) {
      return [tupledArg[0], m$$3];
    } else {
      switch (tpc.tag) {
        case 3:
          {
            const m$$6 = tpc.fields[1];
            return [tupledArg[0], m$$6];
          }

        case 6:
          {
            const m$$7 = tpc.fields[1];
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelCannotResolveAmbiguityInPrintf)(), m$$7));
            return [tupledArg[0], m$$7];
          }

        case 2:
          {
            const m$$8 = tpc.fields[0];
            return [tupledArg[0], m$$8];
          }

        case 9:
          {
            const m$$9 = tpc.fields[0];
            return [join(m$$9, (0, _TcGlobals.TcGlobals$$get_mk_IComparable_ty)(g$$3)), m$$9];
          }

        case 10:
          {
            const m$$10 = tpc.fields[0];
            return [tupledArg[0], m$$10];
          }

        case 8:
          {
            const m$$11 = tpc.fields[1];
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelCannotResolveAmbiguityInEnum)(), m$$11));
            return [tupledArg[0], m$$11];
          }

        case 11:
          {
            const m$$12 = tpc.fields[2];
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelCannotResolveAmbiguityInDelegate)(), m$$12));
            return [tupledArg[0], m$$12];
          }

        case 4:
          {
            const m$$13 = tpc.fields[0];
            return [join(m$$13, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$3)), m$$13];
          }

        case 12:
          {
            const m$$14 = tpc.fields[0];
            (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelCannotResolveAmbiguityInUnmanaged)(), m$$14));
            return [tupledArg[0], m$$14];
          }

        case 7:
          {
            const m$$15 = tpc.fields[0];
            return [tupledArg[0], m$$15];
          }

        case 5:
          {
            const m$$16 = tpc.fields[0];
            return [tupledArg[0], m$$16];
          }

        case 1:
          {
            const m$$17 = tpc.fields[2];
            const _ty = tpc.fields[1];

            const _priority = tpc.fields[0] | 0;

            return [tupledArg[0], m$$17];
          }

        default:
          {
            const x$$2 = tpc.fields[0];
            const m$$5 = tpc.fields[1];
            return [join(m$$5, x$$2), m$$5];
          }
      }
    }
  }, [initial, m$$3], (0, _tast.Typar$$get_Constraints)(tp));
  return [patternInput[0], patternInput[1]];
}

function ChooseTyparSolution(g$$4, amap$$4, tp$$1) {
  const patternInput$$1 = ChooseTyparSolutionAndRange(g$$4, amap$$4, tp$$1);

  if ((0, _Util.equals)((0, _tast.Typar$$get_Rigidity)(tp$$1), new _tast.TyparRigidity(4, "Anon")) ? (0, _TastOps.typeEquiv)(g$$4, patternInput$$1[0], new _tast.TType(6, "TType_measure", new _tast.Measure(4, "One"))) : false) {
    (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$csCodeLessGeneric)(), (0, _tast.Typar$$get_Range)(tp$$1)));
  }

  return patternInput$$1[0];
}

function IterativelySubstituteTyparSolutions(g$$5, tps, solutions) {
  const tpenv = (0, _TastOps.mkTyparInst)(tps, solutions);

  const loop = function loop(n, curr) {
    loop: while (true) {
      const curr$0027 = (0, _TastOps.instTypes)(tpenv, curr);

      if (n > 40 ? true : (0, _List.forAll2)(function (arg10$0040$$4, arg20$0040$$3) {
        return (0, _TastOps.typeEquiv)(g$$5, arg10$0040$$4, arg20$0040$$3);
      }, curr, curr$0027)) {
        return curr;
      } else {
        n = n + 1;
        curr = curr$0027;
        continue loop;
      }
    }
  };

  return loop(0, solutions);
}

function ChooseTyparSolutionsForFreeChoiceTypars(g$$6, amap$$5, e) {
  if (e.tag === 13) {
    const tps$$1 = e.fields[0];
    const e1 = e.fields[1];
    const _m$$1 = e.fields[2];
    const ftvs = (0, _TastOps.freeInExpr)(_TastOps.CollectTyparsNoCaching, e1).FreeTyvars.FreeTypars;
    const tps$$2 = (0, _List.filter)(function predicate$$2(arg10$0040$$5) {
      return (0, _zset.ZsetModule$$$memberOf)(ftvs, arg10$0040$$5);
    }, tps$$1);
    const solutions$$2 = IterativelySubstituteTyparSolutions(g$$6, tps$$2, (0, _List.map)(function mapping(tp$$2) {
      return ChooseTyparSolution(g$$6, amap$$5, tp$$2);
    }, tps$$2));
    const tpenv$$1 = (0, _TastOps.mkTyparInst)(tps$$2, solutions$$2);
    return (0, _TastOps.instExpr)(g$$6, tpenv$$1, e1);
  } else {
    return e;
  }
}

function tryDestTopLambda(g$$7, amap$$6, _arg1$$1, e$$1, ty$$5) {
  var tps$$3, retTy$$4, b$$4;
  const tvd = _arg1$$1;
  const tpNames = tvd.fields[0];

  const stripLambdaUpto = function stripLambdaUpto(n$$1, tupledArg$$1) {
    var v, retTy, b;
    var $target$$9, b$$1, retTy$$1, v$$1;

    if (tupledArg$$1[0].tag === 3) {
      if (tupledArg$$1[0].fields[1] == null) {
        if (tupledArg$$1[0].fields[2] == null) {
          if (v = tupledArg$$1[0].fields[3], (retTy = tupledArg$$1[0].fields[6], (b = tupledArg$$1[0].fields[4], n$$1 > 0))) {
            $target$$9 = 0;
            b$$1 = tupledArg$$1[0].fields[4];
            retTy$$1 = tupledArg$$1[0].fields[6];
            v$$1 = tupledArg$$1[0].fields[3];
          } else {
            $target$$9 = 1;
          }
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
          const patternInput$$2 = stripLambdaUpto(n$$1 - 1, [b$$1, retTy$$1]);
          return [(0, _Types.L)(v$$1, patternInput$$2[0]), patternInput$$2[1], patternInput$$2[2]];
        }

      case 1:
        {
          return [(0, _Types.L)(), tupledArg$$1[0], tupledArg$$1[1]];
        }
    }
  };

  const startStripLambdaUpto = function startStripLambdaUpto(n$$2, tupledArg$$2) {
    var v$$2, retTy$$2, ctorThisValOpt, baseValOpt, b$$2;

    startStripLambdaUpto: while (true) {
      var $target$$10, b$$3, baseValOpt$$1, ctorThisValOpt$$1, retTy$$3, v$$3;

      if (tupledArg$$2[0].tag === 3) {
        if (v$$2 = tupledArg$$2[0].fields[3], (retTy$$2 = tupledArg$$2[0].fields[6], (ctorThisValOpt = tupledArg$$2[0].fields[1], (baseValOpt = tupledArg$$2[0].fields[2], (b$$2 = tupledArg$$2[0].fields[4], n$$2 > 0))))) {
          $target$$10 = 0;
          b$$3 = tupledArg$$2[0].fields[4];
          baseValOpt$$1 = tupledArg$$2[0].fields[2];
          ctorThisValOpt$$1 = tupledArg$$2[0].fields[1];
          retTy$$3 = tupledArg$$2[0].fields[6];
          v$$3 = tupledArg$$2[0].fields[3];
        } else {
          $target$$10 = 1;
        }
      } else {
        $target$$10 = 1;
      }

      switch ($target$$10) {
        case 0:
          {
            const patternInput$$3 = stripLambdaUpto(n$$2 - 1, [b$$3, retTy$$3]);
            return [ctorThisValOpt$$1, baseValOpt$$1, (0, _Types.L)(v$$3, patternInput$$3[0]), patternInput$$3[1], patternInput$$3[2]];
          }

        case 1:
          {
            if (tupledArg$$2[0].tag === 13) {
              const _tps = tupledArg$$2[0].fields[0];
              const _b = tupledArg$$2[0].fields[1];
              n$$2 = n$$2;
              tupledArg$$2 = [ChooseTyparSolutionsForFreeChoiceTypars(g$$7, amap$$6, tupledArg$$2[0]), tupledArg$$2[1]];
              continue startStripLambdaUpto;
            } else {
              return [null, null, (0, _Types.L)(), tupledArg$$2[0], tupledArg$$2[1]];
            }
          }
      }
    }
  };

  const n$$3 = (0, _tast.ValReprInfo$$get_NumCurriedArgs)(tvd) | 0;
  const patternInput$$4 = e$$1.tag === 4 ? (tps$$3 = e$$1.fields[1], (retTy$$4 = e$$1.fields[4], (b$$4 = e$$1.fields[2], !(tpNames.tail == null)))) ? [e$$1.fields[1], e$$1.fields[2], e$$1.fields[4]] : [(0, _Types.L)(), e$$1, ty$$5] : [(0, _Types.L)(), e$$1, ty$$5];
  const patternInput$$5 = startStripLambdaUpto(n$$3, [patternInput$$4[1], patternInput$$4[2]]);

  if ((0, _List.length)(patternInput$$5[2]) !== n$$3) {
    return null;
  } else {
    return [patternInput$$4[0], patternInput$$5[0], patternInput$$5[1], patternInput$$5[2], patternInput$$5[3], patternInput$$5[4]];
  }
}

function destTopLambda(g$$8, amap$$7, topValInfo, e$$4, ty$$8) {
  const matchValue$$6 = tryDestTopLambda(g$$8, amap$$7, topValInfo, e$$4, ty$$8);

  if (matchValue$$6 != null) {
    const res = matchValue$$6;
    return res;
  } else {
    return (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelInvalidValue)(), (0, _TastOps.Expr$002Eget_Range)(e$$4)));
  }
}

function IteratedAdjustArityOfLambdaBody(g$$9, arities, vsl$$1, body$$1) {
  return (0, _List.foldBack2)(function folder$$1(arities$$1, vs, tupledArg$$3) {
    const patternInput$$6 = (0, _TastOps.AdjustArityOfLambdaBody)(g$$9, arities$$1, vs, tupledArg$$3[1]);
    return [(0, _Types.L)(patternInput$$6[0], tupledArg$$3[0]), patternInput$$6[1]];
  }, arities, vsl$$1, [(0, _Types.L)(), body$$1]);
}

function IteratedAdjustArityOfLambda(g$$10, amap$$8, topValInfo$$1, e$$5) {
  const patternInput$$7 = destTopLambda(g$$10, amap$$8, topValInfo$$1, e$$5, (0, _TastOps.tyOfExpr)(g$$10, e$$5));
  const arities$$2 = (0, _tast.ValReprInfo$$get_AritiesOfArgs)(topValInfo$$1);

  if ((0, _List.length)(arities$$2) !== (0, _List.length)(patternInput$$7[3])) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.InternalError((0, _String.toText)((0, _String.printf)("IteratedAdjustArityOfLambda, List.length arities = %d, List.length vsl = %d"))((0, _List.length)(arities$$2))((0, _List.length)(patternInput$$7[3])), (0, _TastOps.Expr$002Eget_Range)(patternInput$$7[4])));
  }

  const patternInput$$8 = IteratedAdjustArityOfLambdaBody(g$$10, arities$$2, patternInput$$7[3], patternInput$$7[4]);
  return [patternInput$$7[0], patternInput$$7[1], patternInput$$7[2], patternInput$$8[0], patternInput$$8[1], patternInput$$7[5]];
}

function FindUniqueFeasibleSupertype(g$$11, amap$$9, m$$19, ty1$$12, ty2$$14) {
  if (!(0, _TastOps.isAppTy)(g$$11, ty2$$14)) {
    return null;
  } else {
    const supertypes = (0, _List.append)((0, _List.ofArray)((0, _Option.defaultArg)((0, _infos.GetSuperTypeOfType)(g$$11, amap$$9, m$$19, ty2$$14), [], function ($x$$1) {
      return [$x$$1];
    })), (0, _infos.GetImmediateInterfacesOfType)(new _infos.SkipUnrefInterfaces(0, "Yes"), g$$11, amap$$9, m$$19, ty2$$14));
    return (0, _List.tryFind)(function predicate$$3(ty2$$15) {
      return TypeFeasiblySubsumesType(0, g$$11, amap$$9, m$$19, ty1$$12, new CanCoerce(1, "NoCoerce"), ty2$$15);
    }, supertypes);
  }
}