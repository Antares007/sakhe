"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecideEscapes = DecideEscapes;
exports.DecideLambda = DecideLambda;
exports.DecideExprOp = DecideExprOp;
exports.DecideExpr = DecideExpr;
exports.DecideBinding = DecideBinding;
exports.DecideBindings = DecideBindings;
exports.DecideImplFile = DecideImplFile;
exports.TransformExpr = TransformExpr;
exports.TransformBinding = TransformBinding;
exports.TransformImplFile = TransformImplFile;
exports.cenv = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _tast = require("./tast");

var _List = require("../fable-core.2.0.3/List");

var _TastOps = require("./TastOps");

var _zset = require("../absil/zset");

var _TypeRelations = require("./TypeRelations");

var _Option = require("../fable-core.2.0.3/Option");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Util = require("../fable-core.2.0.3/Util");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

const cenv = (0, _Types.declare)(function cenv(arg1, arg2) {
  this.g = arg1;
  this.amap = arg2;
}, _Types.Record);
exports.cenv = cenv;

function DecideEscapes(syntacticArgs, body) {
  const cantBeFree = function cantBeFree(v) {
    const passedIn = (0, _List.exists)(function f(lv1) {
      return function (lv2) {
        return (0, _tast.valEq)(lv1, lv2);
      };
    }(v), syntacticArgs);

    if (!passedIn) {
      if ((0, _tast.Val$$get_IsMutable)(v)) {
        return (0, _tast.Val$$get_ValReprInfo)(v) == null;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const frees = (0, _TastOps.freeInExpr)(_TastOps.CollectLocals, body);
  return (0, _zset.ZsetModule$$$filter)(cantBeFree, frees.FreeLocals);
}

function DecideLambda(exprF, cenv$$1, topValInfo, expr, ety, z) {
  var $target$$3;

  switch (expr.tag) {
    case 3:
    case 4:
      $target$$3 = 0;
      break;

    default:
      $target$$3 = 1;
  }

  switch ($target$$3) {
    case 0:
      {
        const patternInput = (0, _TypeRelations.destTopLambda)(cenv$$1.g, cenv$$1.amap, topValInfo, expr, ety);

        const snoc = function snoc(x$$1, y) {
          return (0, _Types.L)(y, x$$1);
        };

        const args = (0, _List.concat)(patternInput[3]);
        const args$$1 = (0, _Seq.fold)(snoc, args, (0, _Option.defaultArg)(patternInput[2], [], function ($x$$1) {
          return [$x$$1];
        }));
        const syntacticArgs$$1 = (0, _Seq.fold)(snoc, args$$1, (0, _Option.defaultArg)(patternInput[1], [], function ($x$$2) {
          return [$x$$2];
        }));
        const z$$1 = (0, _zset.ZsetModule$$$union)(z, DecideEscapes(syntacticArgs$$1, patternInput[4]));
        let z$$2;

        if ((0, _Util.curry)(2, exprF) == null) {
          z$$2 = z$$1;
        } else {
          const f$$1 = exprF;
          z$$2 = f$$1(z$$1, patternInput[4]);
        }

        return z$$2;
      }

    case 1:
      {
        return z;
      }
  }
}

function DecideExprOp(exprF$$1, z$$3, op, tyargs, args$$2) {
  const matchValue = [op, tyargs, args$$2];

  var $target$$9, e1, e2, e1$$1, e2$$1, e1$$2, e2$$2, e3, _e2, e1$$3, e3$$1;

  if (matchValue[0].tag === 6) {
    if (matchValue[2].tail != null) {
      if (matchValue[2].head.tag === 3) {
        if (matchValue[2].head.fields[3].tail != null) {
          if (matchValue[2].head.fields[3].tail.tail == null) {
            if (matchValue[2].tail.tail != null) {
              if (matchValue[2].tail.head.tag === 3) {
                if (matchValue[2].tail.head.fields[3].tail != null) {
                  if (matchValue[2].tail.head.fields[3].tail.tail == null) {
                    if (matchValue[2].tail.tail.tail == null) {
                      $target$$9 = 0;
                      e1 = matchValue[2].head.fields[4];
                      e2 = matchValue[2].tail.head.fields[4];
                    } else {
                      $target$$9 = 4;
                    }
                  } else {
                    $target$$9 = 4;
                  }
                } else {
                  $target$$9 = 4;
                }
              } else {
                $target$$9 = 4;
              }
            } else {
              $target$$9 = 4;
            }
          } else {
            $target$$9 = 4;
          }
        } else {
          $target$$9 = 4;
        }
      } else {
        $target$$9 = 4;
      }
    } else {
      $target$$9 = 4;
    }
  } else if (matchValue[0].tag === 9) {
    if (matchValue[1].tail != null) {
      if (matchValue[1].tail.tail == null) {
        if (matchValue[2].tail != null) {
          if (matchValue[2].head.tag === 3) {
            if (matchValue[2].head.fields[3].tail != null) {
              if (matchValue[2].head.fields[3].tail.tail == null) {
                if (matchValue[2].tail.tail != null) {
                  if (matchValue[2].tail.head.tag === 3) {
                    if (matchValue[2].tail.head.fields[3].tail != null) {
                      if (matchValue[2].tail.head.fields[3].tail.tail == null) {
                        if (matchValue[2].tail.tail.tail == null) {
                          $target$$9 = 1;
                          e1$$1 = matchValue[2].head.fields[4];
                          e2$$1 = matchValue[2].tail.head.fields[4];
                        } else {
                          $target$$9 = 4;
                        }
                      } else {
                        $target$$9 = 4;
                      }
                    } else {
                      $target$$9 = 4;
                    }
                  } else {
                    $target$$9 = 4;
                  }
                } else {
                  $target$$9 = 4;
                }
              } else {
                $target$$9 = 4;
              }
            } else {
              $target$$9 = 4;
            }
          } else {
            $target$$9 = 4;
          }
        } else {
          $target$$9 = 4;
        }
      } else {
        $target$$9 = 4;
      }
    } else {
      $target$$9 = 4;
    }
  } else if (matchValue[0].tag === 7) {
    if (matchValue[2].tail != null) {
      if (matchValue[2].head.tag === 3) {
        if (matchValue[2].head.fields[3].tail != null) {
          if (matchValue[2].head.fields[3].tail.tail == null) {
            if (matchValue[2].tail.tail != null) {
              if (matchValue[2].tail.head.tag === 3) {
                if (matchValue[2].tail.head.fields[3].tail != null) {
                  if (matchValue[2].tail.head.fields[3].tail.tail == null) {
                    if (matchValue[2].tail.tail.tail != null) {
                      if (matchValue[2].tail.tail.head.tag === 3) {
                        if (matchValue[2].tail.tail.head.fields[3].tail != null) {
                          if (matchValue[2].tail.tail.head.fields[3].tail.tail == null) {
                            if (matchValue[2].tail.tail.tail.tail == null) {
                              $target$$9 = 2;
                              e1$$2 = matchValue[2].head.fields[4];
                              e2$$2 = matchValue[2].tail.head.fields[4];
                              e3 = matchValue[2].tail.tail.head.fields[4];
                            } else {
                              $target$$9 = 4;
                            }
                          } else {
                            $target$$9 = 4;
                          }
                        } else {
                          $target$$9 = 4;
                        }
                      } else {
                        $target$$9 = 4;
                      }
                    } else {
                      $target$$9 = 4;
                    }
                  } else {
                    $target$$9 = 4;
                  }
                } else {
                  $target$$9 = 4;
                }
              } else {
                $target$$9 = 4;
              }
            } else {
              $target$$9 = 4;
            }
          } else {
            $target$$9 = 4;
          }
        } else {
          $target$$9 = 4;
        }
      } else {
        $target$$9 = 4;
      }
    } else {
      $target$$9 = 4;
    }
  } else if (matchValue[0].tag === 8) {
    if (matchValue[1].tail != null) {
      if (matchValue[1].tail.tail == null) {
        if (matchValue[2].tail != null) {
          if (matchValue[2].head.tag === 3) {
            if (matchValue[2].head.fields[3].tail != null) {
              if (matchValue[2].head.fields[3].tail.tail == null) {
                if (matchValue[2].tail.tail != null) {
                  if (matchValue[2].tail.head.tag === 3) {
                    if (matchValue[2].tail.head.fields[3].tail != null) {
                      if (matchValue[2].tail.head.fields[3].tail.tail == null) {
                        if (matchValue[2].tail.tail.tail != null) {
                          if (matchValue[2].tail.tail.head.tag === 3) {
                            if (matchValue[2].tail.tail.head.fields[3].tail != null) {
                              if (matchValue[2].tail.tail.head.fields[3].tail.tail == null) {
                                if (matchValue[2].tail.tail.tail.tail == null) {
                                  $target$$9 = 3;
                                  _e2 = matchValue[2].tail.head.fields[4];
                                  e1$$3 = matchValue[2].head.fields[4];
                                  e3$$1 = matchValue[2].tail.tail.head.fields[4];
                                } else {
                                  $target$$9 = 4;
                                }
                              } else {
                                $target$$9 = 4;
                              }
                            } else {
                              $target$$9 = 4;
                            }
                          } else {
                            $target$$9 = 4;
                          }
                        } else {
                          $target$$9 = 4;
                        }
                      } else {
                        $target$$9 = 4;
                      }
                    } else {
                      $target$$9 = 4;
                    }
                  } else {
                    $target$$9 = 4;
                  }
                } else {
                  $target$$9 = 4;
                }
              } else {
                $target$$9 = 4;
              }
            } else {
              $target$$9 = 4;
            }
          } else {
            $target$$9 = 4;
          }
        } else {
          $target$$9 = 4;
        }
      } else {
        $target$$9 = 4;
      }
    } else {
      $target$$9 = 4;
    }
  } else {
    $target$$9 = 4;
  }

  switch ($target$$9) {
    case 0:
      {
        return (0, _Option.some)(exprF$$1(exprF$$1(z$$3, e1), e2));
      }

    case 1:
      {
        return (0, _Option.some)(exprF$$1(exprF$$1(z$$3, e1$$1), e2$$1));
      }

    case 2:
      {
        return (0, _Option.some)(exprF$$1(exprF$$1(exprF$$1(z$$3, e1$$2), e2$$2), e3));
      }

    case 3:
      {
        return (0, _Option.some)(exprF$$1(exprF$$1(exprF$$1(z$$3, e1$$3), _e2), e3$$1));
      }

    case 4:
      {
        return null;
      }
  }
}

function DecideExpr(cenv$$2, exprF$$2, z$$4, expr$$1) {
  switch (expr$$1.tag) {
    case 3:
      {
        const rty = expr$$1.fields[6];
        const m = expr$$1.fields[5];
        const argvs = expr$$1.fields[3];
        const _ctorThisValOpt = expr$$1.fields[1];
        const _baseValOpt = expr$$1.fields[2];
        const topValInfo$$1 = new _tast.ValReprInfo(0, "ValReprInfo", (0, _Types.L)(), (0, _Types.L)((0, _List.map)(function mapping(_arg1) {
          return _tast.ValReprInfoModule$$$unnamedTopArg1;
        }, argvs), (0, _Types.L)()), _tast.ValReprInfoModule$$$unnamedRetVal);
        const ty = (0, _TastOps.mkMultiLambdaTy)(m, argvs, rty);
        const z$$5 = DecideLambda(exprF$$2, cenv$$2, topValInfo$$1, expr$$1, ty, z$$4);
        return z$$5;
      }

    case 4:
      {
        const tps = expr$$1.fields[1];
        const rty$$1 = expr$$1.fields[4];
        const _m = expr$$1.fields[3];
        const topValInfo$$2 = new _tast.ValReprInfo(0, "ValReprInfo", (0, _tast.ValReprInfoModule$$$InferTyparInfo)(tps), (0, _Types.L)(), _tast.ValReprInfoModule$$$unnamedRetVal);
        const ty$$1 = (0, _TastOps.mkForallTyIfNeeded)(tps, rty$$1);
        const z$$6 = DecideLambda(exprF$$2, cenv$$2, topValInfo$$2, expr$$1, ty$$1, z$$4);
        return z$$6;
      }

    case 8:
      {
        const superInitCall = expr$$1.fields[3];
        const overrides = expr$$1.fields[4];
        const iimpls = expr$$1.fields[5];
        const baseValOpt$$1 = expr$$1.fields[2];
        const _m$$1 = expr$$1.fields[6];

        const CheckMethod = function CheckMethod(z$$7, _arg1$$1) {
          const vs = _arg1$$1.fields[3];
          const body$$2 = _arg1$$1.fields[4];
          const _tps$$1 = _arg1$$1.fields[2];
          const _m$$2 = _arg1$$1.fields[5];
          const _attribs = _arg1$$1.fields[1];
          const vs$$1 = (0, _List.concat)(vs);
          let syntacticArgs$$2;

          if (baseValOpt$$1 == null) {
            syntacticArgs$$2 = vs$$1;
          } else {
            const x$$2 = baseValOpt$$1;
            syntacticArgs$$2 = (0, _Types.L)(x$$2, vs$$1);
          }

          const z$$8 = (0, _zset.ZsetModule$$$union)(z$$7, DecideEscapes(syntacticArgs$$2, body$$2));
          return exprF$$2(z$$8, body$$2);
        };

        const CheckMethods = function CheckMethods(z$$9, l$$1) {
          return (0, _List.fold)(CheckMethod, z$$9, l$$1);
        };

        const CheckInterfaceImpl = function CheckInterfaceImpl(z$$10, tupledArg) {
          return CheckMethods(z$$10, tupledArg[1]);
        };

        const z$$11 = exprF$$2(z$$4, superInitCall);
        const z$$12 = CheckMethods(z$$11, overrides);
        const z$$13 = (0, _List.fold)(CheckInterfaceImpl, z$$12, iimpls);
        return z$$13;
      }

    case 11:
      {
        const tyargs$$1 = expr$$1.fields[1];
        const c = expr$$1.fields[0];
        const args$$3 = expr$$1.fields[2];
        const _m$$3 = expr$$1.fields[3];
        return DecideExprOp(exprF$$2, z$$4, c, tyargs$$1, args$$3);
      }

    default:
      {
        return null;
      }
  }
}

function DecideBinding(cenv$$3, z$$14, _arg1$$2) {
  const bind = _arg1$$2;
  const v$$1 = bind.fields[0];
  const expr$$2 = bind.fields[1];
  const _m$$4 = bind.fields[2];
  let topValInfo$$3;
  const matchValue$$1 = (0, _tast.Val$$get_ValReprInfo)((0, _tast.Binding$$get_Var)(bind));

  if (matchValue$$1 != null) {
    const info = matchValue$$1;
    topValInfo$$3 = info;
  } else {
    topValInfo$$3 = _tast.ValReprInfoModule$$$emptyValData;
  }

  return DecideLambda((0, _Util.uncurry)(2, null), cenv$$3, topValInfo$$3, expr$$2, (0, _tast.Val$$get_Type)(v$$1), z$$14);
}

function DecideBindings(cenv$$4, z$$15, binds) {
  return (0, _List.fold)(function folder$$1(z$$16, arg20$0040) {
    return DecideBinding(cenv$$4, z$$16, arg20$0040);
  }, z$$15, binds);
}

function DecideImplFile(g, amap, implFile) {
  const cenv$$5 = new cenv(g, amap);
  let folder$$2;
  const inputRecord = (0, _TastOps.ExprFolder0)();
  folder$$2 = new _TastOps.ExprFolder$00601(function (exprF$$3, z$$19, expr$$3) {
    return DecideExpr(cenv$$5, exprF$$3, z$$19, expr$$3);
  }, inputRecord.valBindingSiteIntercept, function nonRecBindingsIntercept(z$$17, arg20$0040$$1) {
    return DecideBinding(cenv$$5, z$$17, arg20$0040$$1);
  }, function recBindingsIntercept(z$$18, binds$$1) {
    return DecideBindings(cenv$$5, z$$18, binds$$1);
  }, inputRecord.dtreeIntercept, inputRecord.targetIntercept, inputRecord.tmethodIntercept);
  const z$$20 = (0, _TastOps.FoldImplFile)(folder$$2)(_TastOps.emptyFreeLocals)(implFile);
  return z$$20;
}

function TransformExpr(g$$1, nvs, exprF$$4, expr$$4) {
  var v$$6, readonly, m$$5, v$$4, m$$3, arg, v$$2, m$$1;
  var $target$$18, m$$2, v$$3;

  if (expr$$4.tag === 1) {
    const activePatternResult51738 = (0, _tast.$007CValDeref$007C)(expr$$4.fields[0]);

    if (v$$2 = activePatternResult51738, (m$$1 = expr$$4.fields[2], (0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(nvs, v$$2))) {
      $target$$18 = 0;
      m$$2 = expr$$4.fields[2];
      v$$3 = activePatternResult51738;
    } else {
      $target$$18 = 1;
    }
  } else {
    $target$$18 = 1;
  }

  switch ($target$$18) {
    case 0:
      {
        const patternInput$$1 = (0, _TastOps.ValMap$00601$$get_Item$$7D0CFEA5)(nvs, v$$3);
        return (0, _TastOps.mkRefCellGet)(g$$1, m$$2, (0, _tast.Val$$get_Type)(v$$3), patternInput$$1[1]);
      }

    case 1:
      {
        var $target$$19, arg$$1, m$$4, v$$5;

        if (expr$$4.tag === 11) {
          if (expr$$4.fields[0].tag === 30) {
            if (expr$$4.fields[0].fields[0].tag === 2) {
              const activePatternResult51737 = (0, _tast.$007CValDeref$007C)(expr$$4.fields[0].fields[1]);

              if (expr$$4.fields[1].tail == null) {
                if (expr$$4.fields[2].tail != null) {
                  if (expr$$4.fields[2].tail.tail == null) {
                    if (v$$4 = activePatternResult51737, (m$$3 = expr$$4.fields[3], (arg = expr$$4.fields[2].head, (0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(nvs, v$$4)))) {
                      $target$$19 = 0;
                      arg$$1 = expr$$4.fields[2].head;
                      m$$4 = expr$$4.fields[3];
                      v$$5 = activePatternResult51737;
                    } else {
                      $target$$19 = 1;
                    }
                  } else {
                    $target$$19 = 1;
                  }
                } else {
                  $target$$19 = 1;
                }
              } else {
                $target$$19 = 1;
              }
            } else {
              $target$$19 = 1;
            }
          } else {
            $target$$19 = 1;
          }
        } else {
          $target$$19 = 1;
        }

        switch ($target$$19) {
          case 0:
            {
              const patternInput$$2 = (0, _TastOps.ValMap$00601$$get_Item$$7D0CFEA5)(nvs, v$$5);
              const arg$$2 = exprF$$4(arg$$1);
              return (0, _TastOps.mkRefCellSet)(g$$1, m$$4, (0, _tast.Val$$get_Type)(v$$5), patternInput$$2[1], arg$$2);
            }

          case 1:
            {
              var $target$$20, m$$6, readonly$$1, v$$7;

              if (expr$$4.tag === 11) {
                if (expr$$4.fields[0].tag === 30) {
                  if (expr$$4.fields[0].fields[0].tag === 0) {
                    const activePatternResult51736 = (0, _tast.$007CValDeref$007C)(expr$$4.fields[0].fields[1]);

                    if (expr$$4.fields[1].tail == null) {
                      if (expr$$4.fields[2].tail == null) {
                        if (v$$6 = activePatternResult51736, (readonly = expr$$4.fields[0].fields[0].fields[0], (m$$5 = expr$$4.fields[3], (0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(nvs, v$$6)))) {
                          $target$$20 = 0;
                          m$$6 = expr$$4.fields[3];
                          readonly$$1 = expr$$4.fields[0].fields[0].fields[0];
                          v$$7 = activePatternResult51736;
                        } else {
                          $target$$20 = 1;
                        }
                      } else {
                        $target$$20 = 1;
                      }
                    } else {
                      $target$$20 = 1;
                    }
                  } else {
                    $target$$20 = 1;
                  }
                } else {
                  $target$$20 = 1;
                }
              } else {
                $target$$20 = 1;
              }

              switch ($target$$20) {
                case 0:
                  {
                    const patternInput$$3 = (0, _TastOps.ValMap$00601$$get_Item$$7D0CFEA5)(nvs, v$$7);
                    return (0, _TastOps.mkRecdFieldGetAddrViaExprAddr)(readonly$$1, patternInput$$3[1], (0, _TastOps.mkRefCellContentsRef)(g$$1), (0, _Types.L)((0, _tast.Val$$get_Type)(v$$7), (0, _Types.L)()), m$$6);
                  }

                case 1:
                  {
                    return null;
                  }
              }
            }
        }
      }
  }
}

function TransformBinding(g$$2, nvs$$1, exprF$$5, _arg1$$3) {
  const v$$8 = _arg1$$3.fields[0];
  const m$$7 = _arg1$$3.fields[2];
  const expr$$5 = _arg1$$3.fields[1];

  if ((0, _TastOps.ValMap$00601$$ContainsVal$$7D0CFEA5)(nvs$$1, v$$8)) {
    const patternInput$$4 = (0, _TastOps.ValMap$00601$$get_Item$$7D0CFEA5)(nvs$$1, v$$8);
    const exprRange = (0, _TastOps.Expr$002Eget_Range)(expr$$5);
    const expr$$6 = exprF$$5(expr$$5);
    return new _tast.Binding(0, "TBind", patternInput$$4[0], (0, _TastOps.mkRefCell)(g$$2, exprRange, (0, _tast.Val$$get_Type)(v$$8), expr$$6), m$$7);
  } else {
    return null;
  }
}

function TransformImplFile(g$$3, amap$$1, implFile$$1) {
  const fvs = DecideImplFile(g$$3, amap$$1, implFile$$1);

  if ((0, _zset.ZsetModule$$$isEmpty)(fvs)) {
    return implFile$$1;
  } else {
    (0, _Seq.iterate)(function (fv) {
      (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$abImplicitHeapAllocation$$Z721C83C5)((0, _tast.Val$$get_DisplayName)(fv)), (0, _tast.Val$$get_Range)(fv)));
    }, fvs);
    const nvs$$2 = (0, _TastOps.ValMap$00601$$$OfList$$Z2CE9D52B)((0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (fv$$1) {
        const nty = (0, _TastOps.mkRefCellTy)(g$$3, (0, _tast.Val$$get_Type)(fv$$1));
        const patternInput$$5 = (0, _tast.Val$$get_IsCompilerGenerated)(fv$$1) ? (0, _TastOps.mkCompGenLocal)((0, _tast.Val$$get_Range)(fv$$1), (0, _tast.Val$$get_LogicalName)(fv$$1), nty) : (0, _TastOps.mkLocal)((0, _tast.Val$$get_Range)(fv$$1), (0, _tast.Val$$get_LogicalName)(fv$$1), nty);
        return (0, _Seq.singleton)([fv$$1, [patternInput$$5[0], patternInput$$5[1]]]);
      }, fvs);
    })));
    return (0, _TastOps.RewriteImplFile)(new _TastOps.ExprRewritingEnv(function (exprF$$6, expr$$7) {
      return TransformExpr(g$$3, nvs$$2, exprF$$6, expr$$7);
    }, function (_arg1$$4) {
      return null;
    }, function (exprF$$7, arg30$0040) {
      return TransformBinding(g$$3, nvs$$2, exprF$$7, arg30$0040);
    }, false), implFile$$1);
  }
}