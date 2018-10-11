"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterceptExpr = InterceptExpr;
exports.LowerImplFile = LowerImplFile;
exports.mkLambdaNoType = mkLambdaNoType;
exports.mkUnitDelayLambda = mkUnitDelayLambda;
exports.callNonOverloadedMethod = callNonOverloadedMethod;
exports.isVarFreeInExpr = isVarFreeInExpr;
exports.LowerSeqExpr = LowerSeqExpr;
exports.LoweredSeqFirstPhaseResult = void 0;

var _tast = require("./tast");

var _TastOps = require("./TastOps");

var _List = require("../fable-core.2.0.3/List");

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _TcGlobals = require("./TcGlobals");

var _InfoReader = require("./InfoReader");

var _AccessibilityLogic = require("./AccessibilityLogic");

var _MethodCalls = require("./MethodCalls");

var _ErrorLogger = require("./ErrorLogger");

var _zset = require("../absil/zset");

var _ast = require("./ast");

var _il = require("../absil/il");

var _Map = require("../fable-core.2.0.3/Map");

var _Array = require("../fable-core.2.0.3/Array");

var _infos = require("./infos");

var _Seq = require("../fable-core.2.0.3/Seq");

function InterceptExpr(g, cont, expr) {
  if (expr.tag === 1) {
    const matchValue = (0, _tast.ValRef$$get_ValReprInfo)(expr.fields[0]);

    if (matchValue == null) {
      return null;
    } else {
      const arity = matchValue;
      return (0, _TastOps.AdjustValForExpectedArity)(g, expr.fields[2], expr.fields[0], expr.fields[1], arity)[0];
    }
  } else if (expr.tag === 5) {
    if (expr.fields[0].tag === 1) {
      const matchValue$$1 = (0, _tast.ValRef$$get_ValReprInfo)(expr.fields[0].fields[0]);

      if (matchValue$$1 == null) {
        return null;
      } else {
        const topValInfo = matchValue$$1;
        const argsl$$1 = (0, _List.map)(cont, expr.fields[3]);
        const f0$$1 = (0, _List.length)((0, _tast.ValReprInfo$$get_AritiesOfArgs)(topValInfo)) > (0, _List.length)(argsl$$1) ? (0, _TastOps.AdjustValForExpectedArity)(g, expr.fields[4], expr.fields[0].fields[0], expr.fields[0].fields[1], topValInfo)[0] : expr.fields[0];
        return (0, _TastOps.MakeApplicationAndBetaReduce)(g, f0$$1, expr.fields[1], (0, _Types.L)(expr.fields[2], (0, _Types.L)()), argsl$$1, expr.fields[4]);
      }
    } else {
      return (0, _TastOps.MakeApplicationAndBetaReduce)(g, expr.fields[0], expr.fields[1], (0, _Types.L)(expr.fields[2], (0, _Types.L)()), expr.fields[3], expr.fields[4]);
    }
  } else {
    return null;
  }
}

function LowerImplFile(g$$1, ass) {
  return (0, _TastOps.RewriteImplFile)(new _TastOps.ExprRewritingEnv(function (cont$$1, expr$$1) {
    return InterceptExpr(g$$1, cont$$1, expr$$1);
  }, function (_arg1) {
    return null;
  }, (0, _Util.uncurry)(2, null), false), ass);
}

function mkLambdaNoType(g$$2, m$$3, uv, e) {
  return (0, _TastOps.mkLambda)(m$$3, uv, e, (0, _TastOps.tyOfExpr)(g$$2, e));
}

function mkUnitDelayLambda(g$$3, m$$4, e$$1) {
  const patternInput = (0, _TastOps.mkCompGenLocal)(m$$4, "unitVar", (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$3));
  return mkLambdaNoType(g$$3, m$$4, patternInput[0], e$$1);
}

function callNonOverloadedMethod(g$$4, amap, m$$5, methName, ty, args) {
  const matchValue$$2 = (0, _InfoReader.TryFindIntrinsicMethInfo)((0, _InfoReader.InfoReader$$$$002Ector$$Z11454F64)(g$$4, amap), m$$5, new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode"), methName, ty);

  if (matchValue$$2.tail != null) {
    if (matchValue$$2.head.tag === 1) {
      return (0, _MethodCalls.BuildILMethInfoCall)(matchValue$$2.head.fields[0], amap, m$$5, false, matchValue$$2.head.fields[1], new _tast.ValUseFlag(1, "NormalValUse"), (0, _Types.L)(), false, args)[0];
    } else {
      return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("The method called '" + methName + "' resolved to a non-IL type", m$$5));
    }
  } else {
    return (0, _ErrorLogger.error)(new _ErrorLogger.InternalError("No method called '" + methName + "' was found", m$$5));
  }
}

const LoweredSeqFirstPhaseResult = (0, _Types.declare)(function LoweredSeqFirstPhaseResult(arg1, arg2, arg3, arg4) {
  this.phase2 = arg1;
  this.labels = arg2;
  this.significantClose = arg3;
  this.stateVars = arg4;
}, _Types.Record);
exports.LoweredSeqFirstPhaseResult = LoweredSeqFirstPhaseResult;

function isVarFreeInExpr(v, e$$2) {
  return (0, _zset.ZsetModule$$$contains)(v, (0, _TastOps.freeInExpr)(_TastOps.CollectTyparsAndLocals, e$$2).FreeLocals);
}

function LowerSeqExpr(g$$6, amap$$1, overallExpr) {
  const $007CSeqYield$007C_$007C = function $007CSeqYield$007C_$007C(expr$$2) {
    var vref$$2, m$$6, arg, _tyargsl, _f0ty;

    var $target$$8, _f0ty$$1, _tyargsl$$1, arg$$1, m$$7, vref$$3;

    if (expr$$2.tag === 5) {
      if (expr$$2.fields[0].tag === 1) {
        if (expr$$2.fields[3].tail != null) {
          if (expr$$2.fields[3].tail.tail == null) {
            if (vref$$2 = expr$$2.fields[0].fields[0], (m$$6 = expr$$2.fields[4], (arg = expr$$2.fields[3].head, (_tyargsl = expr$$2.fields[2], (_f0ty = expr$$2.fields[1], (0, _TastOps.valRefEq)(g$$6, vref$$2, (0, _TcGlobals.TcGlobals$$get_seq_singleton_vref)(g$$6))))))) {
              $target$$8 = 0;
              _f0ty$$1 = expr$$2.fields[1];
              _tyargsl$$1 = expr$$2.fields[2];
              arg$$1 = expr$$2.fields[3].head;
              m$$7 = expr$$2.fields[4];
              vref$$3 = expr$$2.fields[0].fields[0];
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
    } else {
      $target$$8 = 1;
    }

    switch ($target$$8) {
      case 0:
        {
          return [arg$$1, m$$7];
        }

      case 1:
        {
          return null;
        }
    }
  };

  const $007CSeqAppend$007C_$007C = function $007CSeqAppend$007C_$007C(expr$$3) {
    var vref$$4, m$$8, arg2, arg1, _tyargsl$$2, _f0ty$$2;

    var $target$$9, _f0ty$$3, _tyargsl$$3, arg1$$1, arg2$$1, m$$9, vref$$5;

    if (expr$$3.tag === 5) {
      if (expr$$3.fields[0].tag === 1) {
        if (expr$$3.fields[3].tail != null) {
          if (expr$$3.fields[3].tail.tail != null) {
            if (expr$$3.fields[3].tail.tail.tail == null) {
              if (vref$$4 = expr$$3.fields[0].fields[0], (m$$8 = expr$$3.fields[4], (arg2 = expr$$3.fields[3].tail.head, (arg1 = expr$$3.fields[3].head, (_tyargsl$$2 = expr$$3.fields[2], (_f0ty$$2 = expr$$3.fields[1], (0, _TastOps.valRefEq)(g$$6, vref$$4, (0, _TcGlobals.TcGlobals$$get_seq_append_vref)(g$$6)))))))) {
                $target$$9 = 0;
                _f0ty$$3 = expr$$3.fields[1];
                _tyargsl$$3 = expr$$3.fields[2];
                arg1$$1 = expr$$3.fields[3].head;
                arg2$$1 = expr$$3.fields[3].tail.head;
                m$$9 = expr$$3.fields[4];
                vref$$5 = expr$$3.fields[0].fields[0];
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
      } else {
        $target$$9 = 1;
      }
    } else {
      $target$$9 = 1;
    }

    switch ($target$$9) {
      case 0:
        {
          return [arg1$$1, arg2$$1, m$$9];
        }

      case 1:
        {
          return null;
        }
    }
  };

  const $007CSeqWhile$007C_$007C = function $007CSeqWhile$007C_$007C(expr$$4) {
    var vref$$6, m$$10, gd, dummyv, arg2$$2, _tyargsl$$4, _f0ty$$4;

    var $target$$10, _f0ty$$5, _tyargsl$$5, arg2$$3, dummyv$$1, gd$$1, m$$11, vref$$7;

    if (expr$$4.tag === 5) {
      if (expr$$4.fields[0].tag === 1) {
        if (expr$$4.fields[3].tail != null) {
          if (expr$$4.fields[3].head.tag === 3) {
            if (expr$$4.fields[3].head.fields[3].tail != null) {
              if (expr$$4.fields[3].head.fields[3].tail.tail == null) {
                if (expr$$4.fields[3].tail.tail != null) {
                  if (expr$$4.fields[3].tail.tail.tail == null) {
                    if (vref$$6 = expr$$4.fields[0].fields[0], (m$$10 = expr$$4.fields[4], (gd = expr$$4.fields[3].head.fields[4], (dummyv = expr$$4.fields[3].head.fields[3].head, (arg2$$2 = expr$$4.fields[3].tail.head, (_tyargsl$$4 = expr$$4.fields[2], (_f0ty$$4 = expr$$4.fields[1], (0, _TastOps.valRefEq)(g$$6, vref$$6, (0, _TcGlobals.TcGlobals$$get_seq_generated_vref)(g$$6)) ? !isVarFreeInExpr(dummyv, gd) : false))))))) {
                      $target$$10 = 0;
                      _f0ty$$5 = expr$$4.fields[1];
                      _tyargsl$$5 = expr$$4.fields[2];
                      arg2$$3 = expr$$4.fields[3].tail.head;
                      dummyv$$1 = expr$$4.fields[3].head.fields[3].head;
                      gd$$1 = expr$$4.fields[3].head.fields[4];
                      m$$11 = expr$$4.fields[4];
                      vref$$7 = expr$$4.fields[0].fields[0];
                    } else {
                      $target$$10 = 1;
                    }
                  } else {
                    $target$$10 = 1;
                  }
                } else {
                  $target$$10 = 1;
                }
              } else {
                $target$$10 = 1;
              }
            } else {
              $target$$10 = 1;
            }
          } else {
            $target$$10 = 1;
          }
        } else {
          $target$$10 = 1;
        }
      } else {
        $target$$10 = 1;
      }
    } else {
      $target$$10 = 1;
    }

    switch ($target$$10) {
      case 0:
        {
          return [gd$$1, arg2$$3, m$$11];
        }

      case 1:
        {
          return null;
        }
    }
  };

  const $007CSeqTryFinally$007C_$007C = function $007CSeqTryFinally$007C_$007C(expr$$5) {
    var vref$$8, m$$12, dummyv$$2, compensation, arg1$$2, _tyargsl$$6, _f0ty$$6;

    var $target$$11, _f0ty$$7, _tyargsl$$7, arg1$$3, compensation$$1, dummyv$$3, m$$13, vref$$9;

    if (expr$$5.tag === 5) {
      if (expr$$5.fields[0].tag === 1) {
        if (expr$$5.fields[3].tail != null) {
          if (expr$$5.fields[3].tail.tail != null) {
            if (expr$$5.fields[3].tail.head.tag === 3) {
              if (expr$$5.fields[3].tail.head.fields[3].tail != null) {
                if (expr$$5.fields[3].tail.head.fields[3].tail.tail == null) {
                  if (expr$$5.fields[3].tail.tail.tail == null) {
                    if (vref$$8 = expr$$5.fields[0].fields[0], (m$$12 = expr$$5.fields[4], (dummyv$$2 = expr$$5.fields[3].tail.head.fields[3].head, (compensation = expr$$5.fields[3].tail.head.fields[4], (arg1$$2 = expr$$5.fields[3].head, (_tyargsl$$6 = expr$$5.fields[2], (_f0ty$$6 = expr$$5.fields[1], (0, _TastOps.valRefEq)(g$$6, vref$$8, (0, _TcGlobals.TcGlobals$$get_seq_finally_vref)(g$$6)) ? !isVarFreeInExpr(dummyv$$2, compensation) : false))))))) {
                      $target$$11 = 0;
                      _f0ty$$7 = expr$$5.fields[1];
                      _tyargsl$$7 = expr$$5.fields[2];
                      arg1$$3 = expr$$5.fields[3].head;
                      compensation$$1 = expr$$5.fields[3].tail.head.fields[4];
                      dummyv$$3 = expr$$5.fields[3].tail.head.fields[3].head;
                      m$$13 = expr$$5.fields[4];
                      vref$$9 = expr$$5.fields[0].fields[0];
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
          return [arg1$$3, compensation$$1, m$$13];
        }

      case 1:
        {
          return null;
        }
    }
  };

  const $007CSeqUsing$007C_$007C = function $007CSeqUsing$007C_$007C(expr$$6) {
    var vref$$10, v$$1, resource, m$$14, elemTy, body, _f0ty$$8;

    var $target$$12, _f0ty$$9, body$$1, elemTy$$1, m$$15, resource$$1, v$$2, vref$$11;

    if (expr$$6.tag === 5) {
      if (expr$$6.fields[0].tag === 1) {
        if (expr$$6.fields[2].tail != null) {
          if (expr$$6.fields[2].tail.tail != null) {
            if (expr$$6.fields[2].tail.tail.tail != null) {
              if (expr$$6.fields[2].tail.tail.tail.tail == null) {
                if (expr$$6.fields[3].tail != null) {
                  if (expr$$6.fields[3].tail.tail != null) {
                    if (expr$$6.fields[3].tail.head.tag === 3) {
                      if (expr$$6.fields[3].tail.head.fields[3].tail != null) {
                        if (expr$$6.fields[3].tail.head.fields[3].tail.tail == null) {
                          if (expr$$6.fields[3].tail.tail.tail == null) {
                            if (vref$$10 = expr$$6.fields[0].fields[0], (v$$1 = expr$$6.fields[3].tail.head.fields[3].head, (resource = expr$$6.fields[3].head, (m$$14 = expr$$6.fields[4], (elemTy = expr$$6.fields[2].tail.tail.head, (body = expr$$6.fields[3].tail.head.fields[4], (_f0ty$$8 = expr$$6.fields[1], (0, _TastOps.valRefEq)(g$$6, vref$$10, (0, _TcGlobals.TcGlobals$$get_seq_using_vref)(g$$6))))))))) {
                              $target$$12 = 0;
                              _f0ty$$9 = expr$$6.fields[1];
                              body$$1 = expr$$6.fields[3].tail.head.fields[4];
                              elemTy$$1 = expr$$6.fields[2].tail.tail.head;
                              m$$15 = expr$$6.fields[4];
                              resource$$1 = expr$$6.fields[3].head;
                              v$$2 = expr$$6.fields[3].tail.head.fields[3].head;
                              vref$$11 = expr$$6.fields[0].fields[0];
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
          return [resource$$1, v$$2, body$$1, elemTy$$1, m$$15];
        }

      case 1:
        {
          return null;
        }
    }
  };

  const $007CSeqFor$007C_$007C = function $007CSeqFor$007C_$007C(expr$$7) {
    var vref$$14, v$$5, m$$18, inp$$2, genElemTy$$2, body$$4, _inpElemTy$$2, _f0ty$$12, vref$$12, v$$3, m$$16, inp, genElemTy, body$$2, _inpElemTy, _f0ty$$10, _enumty2;

    var $target$$13, _enumty2$$1, _f0ty$$11, _inpElemTy$$1, body$$3, genElemTy$$1, inp$$1, m$$17, v$$4, vref$$13;

    if (expr$$7.tag === 5) {
      if (expr$$7.fields[0].tag === 1) {
        if (expr$$7.fields[2].tail != null) {
          if (expr$$7.fields[2].tail.tail != null) {
            if (expr$$7.fields[2].tail.tail.tail != null) {
              if (expr$$7.fields[2].tail.tail.tail.tail == null) {
                if (expr$$7.fields[3].tail != null) {
                  if (expr$$7.fields[3].head.tag === 3) {
                    if (expr$$7.fields[3].head.fields[3].tail != null) {
                      if (expr$$7.fields[3].head.fields[3].tail.tail == null) {
                        if (expr$$7.fields[3].tail.tail != null) {
                          if (expr$$7.fields[3].tail.tail.tail == null) {
                            if (vref$$12 = expr$$7.fields[0].fields[0], (v$$3 = expr$$7.fields[3].head.fields[3].head, (m$$16 = expr$$7.fields[4], (inp = expr$$7.fields[3].tail.head, (genElemTy = expr$$7.fields[2].tail.tail.head, (body$$2 = expr$$7.fields[3].head.fields[4], (_inpElemTy = expr$$7.fields[2].head, (_f0ty$$10 = expr$$7.fields[1], (_enumty2 = expr$$7.fields[2].tail.head, (0, _TastOps.valRefEq)(g$$6, vref$$12, (0, _TcGlobals.TcGlobals$$get_seq_collect_vref)(g$$6))))))))))) {
                              $target$$13 = 0;
                              _enumty2$$1 = expr$$7.fields[2].tail.head;
                              _f0ty$$11 = expr$$7.fields[1];
                              _inpElemTy$$1 = expr$$7.fields[2].head;
                              body$$3 = expr$$7.fields[3].head.fields[4];
                              genElemTy$$1 = expr$$7.fields[2].tail.tail.head;
                              inp$$1 = expr$$7.fields[3].tail.head;
                              m$$17 = expr$$7.fields[4];
                              v$$4 = expr$$7.fields[3].head.fields[3].head;
                              vref$$13 = expr$$7.fields[0].fields[0];
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
          return [inp$$1, v$$4, body$$3, genElemTy$$1, m$$17];
        }

      case 1:
        {
          var $target$$14, _f0ty$$13, _inpElemTy$$3, body$$5, genElemTy$$3, inp$$3, m$$19, v$$6, vref$$15;

          if (expr$$7.tag === 5) {
            if (expr$$7.fields[0].tag === 1) {
              if (expr$$7.fields[2].tail != null) {
                if (expr$$7.fields[2].tail.tail != null) {
                  if (expr$$7.fields[2].tail.tail.tail == null) {
                    if (expr$$7.fields[3].tail != null) {
                      if (expr$$7.fields[3].head.tag === 3) {
                        if (expr$$7.fields[3].head.fields[3].tail != null) {
                          if (expr$$7.fields[3].head.fields[3].tail.tail == null) {
                            if (expr$$7.fields[3].tail.tail != null) {
                              if (expr$$7.fields[3].tail.tail.tail == null) {
                                if (vref$$14 = expr$$7.fields[0].fields[0], (v$$5 = expr$$7.fields[3].head.fields[3].head, (m$$18 = expr$$7.fields[4], (inp$$2 = expr$$7.fields[3].tail.head, (genElemTy$$2 = expr$$7.fields[2].tail.head, (body$$4 = expr$$7.fields[3].head.fields[4], (_inpElemTy$$2 = expr$$7.fields[2].head, (_f0ty$$12 = expr$$7.fields[1], (0, _TastOps.valRefEq)(g$$6, vref$$14, (0, _TcGlobals.TcGlobals$$get_seq_map_vref)(g$$6)))))))))) {
                                  $target$$14 = 0;
                                  _f0ty$$13 = expr$$7.fields[1];
                                  _inpElemTy$$3 = expr$$7.fields[2].head;
                                  body$$5 = expr$$7.fields[3].head.fields[4];
                                  genElemTy$$3 = expr$$7.fields[2].tail.head;
                                  inp$$3 = expr$$7.fields[3].tail.head;
                                  m$$19 = expr$$7.fields[4];
                                  v$$6 = expr$$7.fields[3].head.fields[3].head;
                                  vref$$15 = expr$$7.fields[0].fields[0];
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
                return [inp$$3, v$$6, (0, _TastOps.mkCallSeqSingleton)(g$$6, (0, _TastOps.Expr$002Eget_Range)(body$$5), genElemTy$$3, body$$5), genElemTy$$3, m$$19];
              }

            case 1:
              {
                return null;
              }
          }
        }
    }
  };

  const $007CSeqDelay$007C_$007C = function $007CSeqDelay$007C_$007C(expr$$8) {
    var vref$$16, v$$7, elemTy$$2, e$$3, _m, _f0ty$$14;

    var $target$$15, _f0ty$$15, _m$$1, e$$4, elemTy$$3, v$$8, vref$$17;

    if (expr$$8.tag === 5) {
      if (expr$$8.fields[0].tag === 1) {
        if (expr$$8.fields[2].tail != null) {
          if (expr$$8.fields[2].tail.tail == null) {
            if (expr$$8.fields[3].tail != null) {
              if (expr$$8.fields[3].head.tag === 3) {
                if (expr$$8.fields[3].head.fields[3].tail != null) {
                  if (expr$$8.fields[3].head.fields[3].tail.tail == null) {
                    if (expr$$8.fields[3].tail.tail == null) {
                      if (vref$$16 = expr$$8.fields[0].fields[0], (v$$7 = expr$$8.fields[3].head.fields[3].head, (elemTy$$2 = expr$$8.fields[2].head, (e$$3 = expr$$8.fields[3].head.fields[4], (_m = expr$$8.fields[4], (_f0ty$$14 = expr$$8.fields[1], (0, _TastOps.valRefEq)(g$$6, vref$$16, (0, _TcGlobals.TcGlobals$$get_seq_delay_vref)(g$$6)) ? !isVarFreeInExpr(v$$7, e$$3) : false)))))) {
                        $target$$15 = 0;
                        _f0ty$$15 = expr$$8.fields[1];
                        _m$$1 = expr$$8.fields[4];
                        e$$4 = expr$$8.fields[3].head.fields[4];
                        elemTy$$3 = expr$$8.fields[2].head;
                        v$$8 = expr$$8.fields[3].head.fields[3].head;
                        vref$$17 = expr$$8.fields[0].fields[0];
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
      } else {
        $target$$15 = 1;
      }
    } else {
      $target$$15 = 1;
    }

    switch ($target$$15) {
      case 0:
        {
          return [e$$4, elemTy$$3];
        }

      case 1:
        {
          return null;
        }
    }
  };

  const $007CSeqEmpty$007C_$007C = function $007CSeqEmpty$007C_$007C(expr$$9) {
    var vref$$18, m$$20, _tyargsl$$8, _f0ty$$16;

    var $target$$16, _f0ty$$17, _tyargsl$$9, m$$21, vref$$19;

    if (expr$$9.tag === 5) {
      if (expr$$9.fields[0].tag === 1) {
        if (expr$$9.fields[3].tail == null) {
          if (vref$$18 = expr$$9.fields[0].fields[0], (m$$20 = expr$$9.fields[4], (_tyargsl$$8 = expr$$9.fields[2], (_f0ty$$16 = expr$$9.fields[1], (0, _TastOps.valRefEq)(g$$6, vref$$18, (0, _TcGlobals.TcGlobals$$get_seq_empty_vref)(g$$6)))))) {
            $target$$16 = 0;
            _f0ty$$17 = expr$$9.fields[1];
            _tyargsl$$9 = expr$$9.fields[2];
            m$$21 = expr$$9.fields[4];
            vref$$19 = expr$$9.fields[0].fields[0];
          } else {
            $target$$16 = 1;
          }
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
          return m$$21;
        }

      case 1:
        {
          return null;
        }
    }
  };

  const $007CSeq$007C_$007C = function $007CSeq$007C_$007C(expr$$10) {
    var vref$$20, elemTy$$4, e$$5, _m$$2, _f0ty$$18;

    var $target$$17, _f0ty$$19, _m$$3, e$$6, elemTy$$5, vref$$21;

    if (expr$$10.tag === 5) {
      if (expr$$10.fields[0].tag === 1) {
        if (expr$$10.fields[2].tail != null) {
          if (expr$$10.fields[2].tail.tail == null) {
            if (expr$$10.fields[3].tail != null) {
              if (expr$$10.fields[3].tail.tail == null) {
                if (vref$$20 = expr$$10.fields[0].fields[0], (elemTy$$4 = expr$$10.fields[2].head, (e$$5 = expr$$10.fields[3].head, (_m$$2 = expr$$10.fields[4], (_f0ty$$18 = expr$$10.fields[1], (0, _TastOps.valRefEq)(g$$6, vref$$20, (0, _TcGlobals.TcGlobals$$get_seq_vref)(g$$6))))))) {
                  $target$$17 = 0;
                  _f0ty$$19 = expr$$10.fields[1];
                  _m$$3 = expr$$10.fields[4];
                  e$$6 = expr$$10.fields[3].head;
                  elemTy$$5 = expr$$10.fields[2].head;
                  vref$$21 = expr$$10.fields[0].fields[0];
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
      } else {
        $target$$17 = 1;
      }
    } else {
      $target$$17 = 1;
    }

    switch ($target$$17) {
      case 0:
        {
          return [e$$6, elemTy$$5];
        }

      case 1:
        {
          return null;
        }
    }
  };

  const RepresentBindingAsStateMachineLocal = function RepresentBindingAsStateMachineLocal(bind, res2, m$$22) {
    const v$$9 = bind.fields[0];
    const sp = bind.fields[2];
    const e$$7 = bind.fields[1];
    let patternInput$$1;

    if (sp.tag === 0) {
      const m$$23 = sp.fields[0];
      patternInput$$1 = [new _ast.SequencePointInfoForSeq(0, "SequencePointsAtSeq"), m$$23];
    } else {
      patternInput$$1 = [new _ast.SequencePointInfoForSeq(1, "SuppressSequencePointOnExprOfSequential"), (0, _TastOps.Expr$002Eget_Range)(e$$7)];
    }

    const vref$$22 = (0, _tast.mkLocalValRef)(v$$9);
    return new LoweredSeqFirstPhaseResult(function phase2(ctxt) {
      const patternInput$$2 = res2.phase2(ctxt);
      const generate = (0, _TastOps.mkCompGenSequential)(m$$22, (0, _TastOps.mkSequential)(patternInput$$1[0], m$$22, (0, _TastOps.mkValSet)(patternInput$$1[1], vref$$22, e$$7), patternInput$$2[0]), (0, _TastOps.mkValSet)(m$$22, vref$$22, (0, _TastOps.mkDefault)(m$$22, (0, _tast.ValRef$$get_Type)(vref$$22))));
      const dispose = patternInput$$2[1];
      const checkDispose = patternInput$$2[2];
      return [generate, dispose, checkDispose];
    }, res2.labels, res2.significantClose, (0, _Types.L)(vref$$22, res2.stateVars));
  };

  const RepresentBindingsAsLifted = function RepresentBindingsAsLifted(mkBinds, res2$$1) {
    return new LoweredSeqFirstPhaseResult(function (ctxt$$1) {
      const patternInput$$3 = res2$$1.phase2(ctxt$$1);
      const generate$$1 = mkBinds(patternInput$$3[0]);
      const dispose$$1 = patternInput$$3[1];
      const checkDispose$$1 = patternInput$$3[2];
      return [generate$$1, dispose$$1, checkDispose$$1];
    }, res2$$1.labels, res2$$1.significantClose, res2$$1.stateVars);
  };

  const Lower = function Lower(isWholeExpr, isTailCall, noDisposeContinuationLabel, currentDisposeContinuationLabel, expr$$11) {
    var ty$$2, targets, spBind, pt, m$$34, exprm, m$$31, e2$$2, bind$$1;

    Lower: while (true) {
      const activePatternResult51665 = $007CSeqYield$007C_$007C(expr$$11);

      if (activePatternResult51665 != null) {
        const label = (0, _il.generateCodeLabel)() | 0;
        return new LoweredSeqFirstPhaseResult(function phase2$$1(tupledArg) {
          const generate$$2 = (0, _TastOps.mkCompGenSequential)(activePatternResult51665[1], (0, _TastOps.mkValSet)(activePatternResult51665[1], tupledArg[0], (0, _TastOps.mkInt32)(g$$6, activePatternResult51665[1], (0, _Map.FSharpMap$$get_Item$$2B595)(tupledArg[3], label))), (0, _TastOps.mkSequential)(new _ast.SequencePointInfoForSeq(0, "SequencePointsAtSeq"), activePatternResult51665[1], (0, _TastOps.mkValSet)(activePatternResult51665[1], tupledArg[1], activePatternResult51665[0]), (0, _TastOps.mkCompGenSequential)(activePatternResult51665[1], new _tast.Expr(11, "Op", new _tast.TOp(26, "Return"), (0, _Types.L)(), (0, _Types.L)((0, _TastOps.mkOne)(g$$6, activePatternResult51665[1]), (0, _Types.L)()), activePatternResult51665[1]), new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", label), (0, _Types.L)(), (0, _Types.L)(), activePatternResult51665[1]))));
          const dispose$$2 = (0, _TastOps.mkCompGenSequential)(activePatternResult51665[1], new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", label), (0, _Types.L)(), (0, _Types.L)(), activePatternResult51665[1]), new _tast.Expr(11, "Op", new _tast.TOp(27, "Goto", currentDisposeContinuationLabel), (0, _Types.L)(), (0, _Types.L)(), activePatternResult51665[1]));
          const checkDispose$$2 = (0, _TastOps.mkCompGenSequential)(activePatternResult51665[1], new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", label), (0, _Types.L)(), (0, _Types.L)(), activePatternResult51665[1]), new _tast.Expr(11, "Op", new _tast.TOp(26, "Return"), (0, _Types.L)(), (0, _Types.L)((0, _TastOps.mkBool)(g$$6, activePatternResult51665[1], !(noDisposeContinuationLabel === currentDisposeContinuationLabel)), (0, _Types.L)()), activePatternResult51665[1]));
          return [generate$$2, dispose$$2, checkDispose$$2];
        }, (0, _Types.L)(label, (0, _Types.L)()), false, (0, _Types.L)());
      } else {
        const activePatternResult51664 = $007CSeqDelay$007C_$007C(expr$$11);

        if (activePatternResult51664 != null) {
          isWholeExpr = isWholeExpr;
          isTailCall = isTailCall;
          noDisposeContinuationLabel = noDisposeContinuationLabel;
          currentDisposeContinuationLabel = currentDisposeContinuationLabel;
          expr$$11 = activePatternResult51664[0];
          continue Lower;
        } else {
          const activePatternResult51663 = $007CSeqAppend$007C_$007C(expr$$11);

          if (activePatternResult51663 != null) {
            const matchValue$$3 = [Lower(false, false, noDisposeContinuationLabel, currentDisposeContinuationLabel, activePatternResult51663[0]), Lower(false, isTailCall, noDisposeContinuationLabel, currentDisposeContinuationLabel, activePatternResult51663[1])];
            var $target$$20, res1, res2$$2;

            if (matchValue$$3[0] != null) {
              if (matchValue$$3[1] != null) {
                $target$$20 = 0;
                res1 = matchValue$$3[0];
                res2$$2 = matchValue$$3[1];
              } else {
                $target$$20 = 1;
              }
            } else {
              $target$$20 = 1;
            }

            switch ($target$$20) {
              case 0:
                {
                  return new LoweredSeqFirstPhaseResult(function phase2$$2(ctxt$$2) {
                    const patternInput$$4 = res1.phase2(ctxt$$2);
                    const patternInput$$5 = res2$$2.phase2(ctxt$$2);
                    const generate$$3 = (0, _TastOps.mkCompGenSequential)(activePatternResult51663[2], patternInput$$4[0], patternInput$$5[0]);
                    const dispose$$3 = (0, _TastOps.mkCompGenSequential)(activePatternResult51663[2], patternInput$$5[1], patternInput$$4[1]);
                    const checkDispose$$3 = (0, _TastOps.mkCompGenSequential)(activePatternResult51663[2], patternInput$$5[2], patternInput$$4[2]);
                    return [generate$$3, dispose$$3, checkDispose$$3];
                  }, (0, _List.append)(res1.labels, res2$$2.labels), res1.significantClose ? true : res2$$2.significantClose, (0, _List.append)(res1.stateVars, res2$$2.stateVars));
                }

              case 1:
                {
                  return null;
                }
            }
          } else {
            const activePatternResult51662 = $007CSeqWhile$007C_$007C(expr$$11);

            if (activePatternResult51662 != null) {
              const matchValue$$4 = Lower(false, false, noDisposeContinuationLabel, currentDisposeContinuationLabel, activePatternResult51662[1]);

              if (matchValue$$4 != null) {
                const res2$$3 = matchValue$$4;
                return new LoweredSeqFirstPhaseResult(function phase2$$3(ctxt$$3) {
                  const patternInput$$6 = res2$$3.phase2(ctxt$$3);
                  const generate$$4 = (0, _TastOps.mkWhile)(g$$6, new _ast.SequencePointInfoForWhileLoop(0, "SequencePointAtWhileLoop", (0, _TastOps.Expr$002Eget_Range)(activePatternResult51662[0])), new _tast.SpecialWhileLoopMarker(0, "NoSpecialWhileLoopMarker"), activePatternResult51662[0], patternInput$$6[0], activePatternResult51662[2]);
                  const dispose$$4 = patternInput$$6[1];
                  const checkDispose$$4 = patternInput$$6[2];
                  return [generate$$4, dispose$$4, checkDispose$$4];
                }, res2$$3.labels, res2$$3.significantClose, res2$$3.stateVars);
              } else {
                return null;
              }
            } else {
              const activePatternResult51661 = $007CSeqUsing$007C_$007C(expr$$11);

              if (activePatternResult51661 != null) {
                isWholeExpr = false;
                isTailCall = isTailCall;
                noDisposeContinuationLabel = noDisposeContinuationLabel;
                currentDisposeContinuationLabel = currentDisposeContinuationLabel;
                expr$$11 = (0, _TastOps.mkLet)(new _ast.SequencePointInfoForBinding(0, "SequencePointAtBinding", (0, _TastOps.Expr$002Eget_Range)(activePatternResult51661[2])), activePatternResult51661[4], activePatternResult51661[1], activePatternResult51661[0], (0, _TastOps.mkCallSeqFinally)(g$$6, activePatternResult51661[4], activePatternResult51661[3], activePatternResult51661[2], mkUnitDelayLambda(g$$6, activePatternResult51661[4], (0, _TastOps.mkCallDispose)(g$$6, activePatternResult51661[4], (0, _tast.Val$$get_Type)(activePatternResult51661[1]), (0, _TastOps.exprForVal)(activePatternResult51661[4], activePatternResult51661[1])))));
                continue Lower;
              } else {
                const activePatternResult51660 = $007CSeqFor$007C_$007C(expr$$11);

                if (activePatternResult51660 != null) {
                  const inpElemTy = (0, _tast.Val$$get_Type)(activePatternResult51660[1]);
                  const inpEnumTy = (0, _TastOps.mkIEnumeratorTy)(g$$6, inpElemTy);
                  const patternInput$$7 = (0, _TastOps.mkCompGenLocal)(activePatternResult51660[4], "enum", inpEnumTy);
                  isWholeExpr = false;
                  isTailCall = isTailCall;
                  noDisposeContinuationLabel = noDisposeContinuationLabel;
                  currentDisposeContinuationLabel = currentDisposeContinuationLabel;
                  expr$$11 = (0, _TastOps.mkCallSeqUsing)(g$$6, activePatternResult51660[4], inpEnumTy, activePatternResult51660[3], callNonOverloadedMethod(g$$6, amap$$1, activePatternResult51660[4], "GetEnumerator", (0, _TastOps.mkSeqTy)(g$$6, inpElemTy), (0, _Types.L)(activePatternResult51660[0], (0, _Types.L)())), mkLambdaNoType(g$$6, activePatternResult51660[4], patternInput$$7[0], (0, _TastOps.mkCallSeqGenerated)(g$$6, activePatternResult51660[4], activePatternResult51660[3], mkUnitDelayLambda(g$$6, activePatternResult51660[4], callNonOverloadedMethod(g$$6, amap$$1, activePatternResult51660[4], "MoveNext", inpEnumTy, (0, _Types.L)(patternInput$$7[1], (0, _Types.L)()))), (0, _TastOps.mkInvisibleLet)(activePatternResult51660[4], activePatternResult51660[1], callNonOverloadedMethod(g$$6, amap$$1, activePatternResult51660[4], "get_Current", inpEnumTy, (0, _Types.L)(patternInput$$7[1], (0, _Types.L)())), (0, _TastOps.mkCoerceIfNeeded)(g$$6, (0, _TastOps.mkSeqTy)(g$$6, activePatternResult51660[3]), (0, _TastOps.tyOfExpr)(g$$6, activePatternResult51660[2]), activePatternResult51660[2])))));
                  continue Lower;
                } else {
                  const activePatternResult51659 = $007CSeqTryFinally$007C_$007C(expr$$11);

                  if (activePatternResult51659 != null) {
                    const innerDisposeContinuationLabel = (0, _il.generateCodeLabel)() | 0;
                    const matchValue$$5 = Lower(false, false, noDisposeContinuationLabel, innerDisposeContinuationLabel, activePatternResult51659[0]);

                    if (matchValue$$5 != null) {
                      const res1$$1 = matchValue$$5;
                      return new LoweredSeqFirstPhaseResult(function phase2$$4(_arg1$$1) {
                        const ctxt$$4 = _arg1$$1;
                        const pcv$$1 = ctxt$$4[0];
                        const pcMap$$1 = ctxt$$4[3];
                        const _currv = ctxt$$4[1];
                        const patternInput$$8 = res1$$1.phase2(ctxt$$4);
                        let generate$$5;
                        const compensation$$3 = (0, _TastOps.copyExpr)(g$$6, new _TastOps.ValCopyFlag(1, "CloneAllAndMarkExprValsAsCompilerGenerated"), activePatternResult51659[1]);
                        generate$$5 = (0, _TastOps.mkCompGenSequential)(activePatternResult51659[2], (0, _TastOps.mkCompGenSequential)(activePatternResult51659[2], (0, _TastOps.mkValSet)(activePatternResult51659[2], pcv$$1, (0, _TastOps.mkInt32)(g$$6, activePatternResult51659[2], (0, _Map.FSharpMap$$get_Item$$2B595)(pcMap$$1, innerDisposeContinuationLabel))), patternInput$$8[0]), (0, _TastOps.mkCompGenSequential)(activePatternResult51659[2], new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", innerDisposeContinuationLabel), (0, _Types.L)(), (0, _Types.L)(), activePatternResult51659[2]), (0, _TastOps.mkCompGenSequential)(activePatternResult51659[2], (0, _TastOps.mkValSet)(activePatternResult51659[2], pcv$$1, (0, _TastOps.mkInt32)(g$$6, activePatternResult51659[2], (0, _Map.FSharpMap$$get_Item$$2B595)(pcMap$$1, currentDisposeContinuationLabel))), compensation$$3)));
                        const dispose$$5 = (0, _TastOps.mkCompGenSequential)(activePatternResult51659[2], patternInput$$8[1], (0, _TastOps.mkCompGenSequential)(activePatternResult51659[2], new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", innerDisposeContinuationLabel), (0, _Types.L)(), (0, _Types.L)(), activePatternResult51659[2]), (0, _TastOps.mkCompGenSequential)(activePatternResult51659[2], (0, _TastOps.mkValSet)(activePatternResult51659[2], pcv$$1, (0, _TastOps.mkInt32)(g$$6, activePatternResult51659[2], (0, _Map.FSharpMap$$get_Item$$2B595)(pcMap$$1, currentDisposeContinuationLabel))), (0, _TastOps.mkCompGenSequential)(activePatternResult51659[2], activePatternResult51659[1], new _tast.Expr(11, "Op", new _tast.TOp(27, "Goto", currentDisposeContinuationLabel), (0, _Types.L)(), (0, _Types.L)(), activePatternResult51659[2])))));
                        const checkDispose$$5 = (0, _TastOps.mkCompGenSequential)(activePatternResult51659[2], patternInput$$8[2], (0, _TastOps.mkCompGenSequential)(activePatternResult51659[2], new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", innerDisposeContinuationLabel), (0, _Types.L)(), (0, _Types.L)(), activePatternResult51659[2]), new _tast.Expr(11, "Op", new _tast.TOp(26, "Return"), (0, _Types.L)(), (0, _Types.L)((0, _TastOps.mkTrue)(g$$6, activePatternResult51659[2]), (0, _Types.L)()), activePatternResult51659[2])));
                        return [generate$$5, dispose$$5, checkDispose$$5];
                      }, (0, _Types.L)(innerDisposeContinuationLabel, res1$$1.labels), true, res1$$1.stateVars);
                    } else {
                      return null;
                    }
                  } else {
                    const activePatternResult51658 = $007CSeqEmpty$007C_$007C(expr$$11);

                    if (activePatternResult51658 != null) {
                      const m$$30 = activePatternResult51658;
                      return new LoweredSeqFirstPhaseResult(function phase2$$5(_arg2) {
                        const generate$$6 = (0, _TastOps.mkUnit)(g$$6, m$$30);
                        const dispose$$6 = new _tast.Expr(11, "Op", new _tast.TOp(27, "Goto", currentDisposeContinuationLabel), (0, _Types.L)(), (0, _Types.L)(), m$$30);
                        const checkDispose$$6 = new _tast.Expr(11, "Op", new _tast.TOp(27, "Goto", currentDisposeContinuationLabel), (0, _Types.L)(), (0, _Types.L)(), m$$30);
                        return [generate$$6, dispose$$6, checkDispose$$6];
                      }, (0, _Types.L)(), false, (0, _Types.L)());
                    } else {
                      var $target$$21, m$$32, ty$$1, x1, x2, bind$$2, e2$$3, m$$33;

                      if (expr$$11.tag === 2) {
                        if (expr$$11.fields[2].tag === 0) {
                          $target$$21 = 0;
                          m$$32 = expr$$11.fields[4];
                          ty$$1 = expr$$11.fields[3];
                          x1 = expr$$11.fields[0];
                          x2 = expr$$11.fields[1];
                        } else {
                          $target$$21 = 2;
                        }
                      } else if (expr$$11.tag === 7) {
                        if (m$$31 = expr$$11.fields[2], (e2$$2 = expr$$11.fields[1], (bind$$1 = expr$$11.fields[0], (0, _tast.Val$$get_IsCompiledAsTopLevel)((0, _tast.Binding$$get_Var)(bind$$1)) ? true : !(0, _TastOps.IsGenericValWithGenericContraints)(g$$6, (0, _tast.Binding$$get_Var)(bind$$1))))) {
                          $target$$21 = 1;
                          bind$$2 = expr$$11.fields[0];
                          e2$$3 = expr$$11.fields[1];
                          m$$33 = expr$$11.fields[2];
                        } else {
                          $target$$21 = 2;
                        }
                      } else {
                        $target$$21 = 2;
                      }

                      switch ($target$$21) {
                        case 0:
                          {
                            const matchValue$$6 = Lower(false, isTailCall, noDisposeContinuationLabel, currentDisposeContinuationLabel, x2);

                            if (matchValue$$6 == null) {
                              return null;
                            } else {
                              const res2$$4 = matchValue$$6;
                              return new LoweredSeqFirstPhaseResult(function (ctxt$$5) {
                                const patternInput$$9 = res2$$4.phase2(ctxt$$5);
                                const generate$$7 = new _tast.Expr(2, "Sequential", x1, patternInput$$9[0], new _tast.SequentialOpKind(0, "NormalSeq"), ty$$1, m$$32);
                                const dispose$$7 = patternInput$$9[1];
                                const checkDispose$$7 = patternInput$$9[2];
                                return [generate$$7, dispose$$7, checkDispose$$7];
                              }, res2$$4.labels, res2$$4.significantClose, res2$$4.stateVars);
                            }
                          }

                        case 1:
                          {
                            const matchValue$$7 = Lower(false, isTailCall, noDisposeContinuationLabel, currentDisposeContinuationLabel, e2$$3);

                            if (matchValue$$7 == null) {
                              return null;
                            } else {
                              const res2$$5 = matchValue$$7;

                              if ((0, _tast.Val$$get_IsCompiledAsTopLevel)((0, _tast.Binding$$get_Var)(bind$$2))) {
                                return RepresentBindingsAsLifted(function (arg20$0040) {
                                  return (0, _TastOps.mkLetBind)(m$$33, bind$$2, arg20$0040);
                                }, res2$$5);
                              } else {
                                return RepresentBindingAsStateMachineLocal(bind$$2, res2$$5, m$$33);
                              }
                            }
                          }

                        case 2:
                          {
                            var $target$$22, exprm$$1, m$$35, pt$$1, spBind$$1, targets$$1, ty$$3;

                            if (expr$$11.tag === 9) {
                              if (ty$$2 = expr$$11.fields[5], (targets = expr$$11.fields[3], (spBind = expr$$11.fields[0], (pt = expr$$11.fields[2], (m$$34 = expr$$11.fields[4], (exprm = expr$$11.fields[1], targets.every(function predicate(_arg3) {
                                const vs = _arg3.fields[0];
                                const _spTarget = _arg3.fields[2];
                                const _e = _arg3.fields[1];
                                return vs.tail == null;
                              }))))))) {
                                $target$$22 = 0;
                                exprm$$1 = expr$$11.fields[1];
                                m$$35 = expr$$11.fields[4];
                                pt$$1 = expr$$11.fields[2];
                                spBind$$1 = expr$$11.fields[0];
                                targets$$1 = expr$$11.fields[3];
                                ty$$3 = expr$$11.fields[5];
                              } else {
                                $target$$22 = 1;
                              }
                            } else {
                              $target$$22 = 1;
                            }

                            switch ($target$$22) {
                              case 0:
                                {
                                  const tgl = (0, _Array.toList)((0, _Array.map)(function mapping(_arg4) {
                                    const e$$10 = _arg4.fields[1];
                                    const _vs = _arg4.fields[0];
                                    const _spTarget$$1 = _arg4.fields[2];
                                    return Lower(false, isTailCall, noDisposeContinuationLabel, currentDisposeContinuationLabel, e$$10);
                                  }, targets$$1, Array));

                                  if ((0, _List.forAll)(function predicate$$1(option) {
                                    return option != null;
                                  }, tgl)) {
                                    const tgl$$1 = (0, _List.map)(function (option$$1) {
                                      return option$$1;
                                    }, tgl);
                                    const labs = (0, _List.collect)(function mapping$$1(res) {
                                      return res.labels;
                                    }, tgl$$1);
                                    const stateVars$$6 = (0, _List.collect)(function mapping$$2(res$$1) {
                                      return res$$1.stateVars;
                                    }, tgl$$1);
                                    const significantClose = (0, _List.exists)(function predicate$$2(res$$2) {
                                      return res$$2.significantClose;
                                    }, tgl$$1);
                                    return new LoweredSeqFirstPhaseResult(function phase2$$6(ctxt$$6) {
                                      const patternInput$$11 = (0, _List.unzip3)((0, _List.map2)(function mapping$$3(_arg5, res$$3) {
                                        const vs$$1 = _arg5.fields[0];
                                        const spTarget = _arg5.fields[2];
                                        const patternInput$$10 = res$$3.phase2(ctxt$$6);
                                        const gtg = new _tast.DecisionTreeTarget(0, "TTarget", vs$$1, patternInput$$10[0], spTarget);
                                        return [gtg, patternInput$$10[1], patternInput$$10[2]];
                                      }, (0, _Array.toList)(targets$$1), tgl$$1));
                                      const generate$$9 = (0, _TastOps.primMkMatch)(spBind$$1, exprm$$1, pt$$1, (0, _Array.ofList)(patternInput$$11[0], Array), m$$35, ty$$3);
                                      const dispose$$9 = patternInput$$11[1].tail == null ? (0, _TastOps.mkUnit)(g$$6, m$$35) : (0, _List.reduce)(function (arg10$0040, arg20$0040$$1) {
                                        return (0, _TastOps.mkCompGenSequential)(m$$35, arg10$0040, arg20$0040$$1);
                                      }, patternInput$$11[1]);
                                      const checkDispose$$9 = patternInput$$11[2].tail == null ? (0, _TastOps.mkFalse)(g$$6, m$$35) : (0, _List.reduce)(function (arg10$0040$$1, arg20$0040$$2) {
                                        return (0, _TastOps.mkCompGenSequential)(m$$35, arg10$0040$$1, arg20$0040$$2);
                                      }, patternInput$$11[2]);
                                      return [generate$$9, dispose$$9, checkDispose$$9];
                                    }, labs, significantClose, stateVars$$6);
                                  } else {
                                    return null;
                                  }
                                }

                              case 1:
                                {
                                  const arbitrarySeqExpr = expr$$11;
                                  const m$$36 = (0, _TastOps.Expr$002Eget_Range)(arbitrarySeqExpr);

                                  if (isWholeExpr) {
                                    return null;
                                  } else {
                                    const tyConfirmsToSeq = function tyConfirmsToSeq(g$$7, ty$$4) {
                                      if ((0, _TastOps.isAppTy)(g$$7, ty$$4)) {
                                        return (0, _TastOps.tyconRefEq)(g$$7, (0, _TastOps.tcrefOfAppTy)(g$$7, ty$$4), (0, _TcGlobals.TcGlobals$$get_tcref_System_Collections_Generic_IEnumerable)(g$$7));
                                      } else {
                                        return false;
                                      }
                                    };

                                    const matchValue$$8 = (0, _infos.SearchEntireHierarchyOfType)((0, _Util.partialApply)(1, tyConfirmsToSeq, [g$$6]), g$$6, amap$$1, m$$36, (0, _TastOps.tyOfExpr)(g$$6, arbitrarySeqExpr));

                                    if (matchValue$$8 != null) {
                                      const ty$$5 = matchValue$$8;
                                      const inpElemTy$$1 = (0, _List.head)((0, _TastOps.argsOfAppTy)(g$$6, ty$$5));

                                      if (isTailCall) {
                                        const label$$1 = (0, _il.generateCodeLabel)() | 0;
                                        return new LoweredSeqFirstPhaseResult(function phase2$$7(tupledArg$$1) {
                                          const generate$$10 = (0, _TastOps.mkCompGenSequential)(m$$36, (0, _TastOps.mkValSet)(m$$36, tupledArg$$1[0], (0, _TastOps.mkInt32)(g$$6, m$$36, (0, _Map.FSharpMap$$get_Item$$2B595)(tupledArg$$1[3], label$$1))), (0, _TastOps.mkSequential)(new _ast.SequencePointInfoForSeq(0, "SequencePointsAtSeq"), m$$36, (0, _TastOps.mkAddrSet)(m$$36, tupledArg$$1[2], arbitrarySeqExpr), (0, _TastOps.mkCompGenSequential)(m$$36, new _tast.Expr(11, "Op", new _tast.TOp(26, "Return"), (0, _Types.L)(), (0, _Types.L)((0, _TastOps.mkTwo)(g$$6, m$$36), (0, _Types.L)()), m$$36), new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", label$$1), (0, _Types.L)(), (0, _Types.L)(), m$$36))));
                                          const dispose$$10 = (0, _TastOps.mkCompGenSequential)(m$$36, new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", label$$1), (0, _Types.L)(), (0, _Types.L)(), m$$36), new _tast.Expr(11, "Op", new _tast.TOp(27, "Goto", currentDisposeContinuationLabel), (0, _Types.L)(), (0, _Types.L)(), m$$36));
                                          const checkDispose$$10 = (0, _TastOps.mkCompGenSequential)(m$$36, new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", label$$1), (0, _Types.L)(), (0, _Types.L)(), m$$36), new _tast.Expr(11, "Op", new _tast.TOp(26, "Return"), (0, _Types.L)(), (0, _Types.L)((0, _TastOps.mkFalse)(g$$6, m$$36), (0, _Types.L)()), m$$36));
                                          return [generate$$10, dispose$$10, checkDispose$$10];
                                        }, (0, _Types.L)(label$$1, (0, _Types.L)()), false, (0, _Types.L)());
                                      } else {
                                        const patternInput$$12 = (0, _TastOps.mkCompGenLocal)(m$$36, "v", inpElemTy$$1);
                                        isWholeExpr = false;
                                        isTailCall = isTailCall;
                                        noDisposeContinuationLabel = noDisposeContinuationLabel;
                                        currentDisposeContinuationLabel = currentDisposeContinuationLabel;
                                        expr$$11 = (0, _TastOps.mkCallSeqCollect)(g$$6, m$$36, inpElemTy$$1, inpElemTy$$1, mkLambdaNoType(g$$6, m$$36, patternInput$$12[0], (0, _TastOps.mkCallSeqSingleton)(g$$6, m$$36, inpElemTy$$1, patternInput$$12[1])), arbitrarySeqExpr);
                                        continue Lower;
                                      }
                                    } else {
                                      return null;
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
  };

  const activePatternResult51682 = $007CSeq$007C_$007C(overallExpr);

  if (activePatternResult51682 != null) {
    const m$$37 = (0, _TastOps.Expr$002Eget_Range)(activePatternResult51682[0]);
    const initLabel = (0, _il.generateCodeLabel)() | 0;
    const noDisposeContinuationLabel$$1 = (0, _il.generateCodeLabel)() | 0;
    const matchValue$$9 = Lower(true, true, noDisposeContinuationLabel$$1, noDisposeContinuationLabel$$1, activePatternResult51682[0]);

    if (matchValue$$9 == null) {
      return null;
    } else {
      const res$$4 = matchValue$$9;
      const labs$$1 = res$$4.labels;
      const stateVars$$8 = res$$4.stateVars;
      const patternInput$$13 = (0, _TastOps.mkMutableCompGenLocal)(m$$37, "pc", (0, _TcGlobals.TcGlobals$$get_int32_ty)(g$$6));
      const patternInput$$14 = (0, _TastOps.mkMutableCompGenLocal)(m$$37, "current", activePatternResult51682[1]);
      const patternInput$$15 = (0, _TastOps.mkMutableCompGenLocal)(m$$37, "next", (0, _TastOps.mkByrefTy)(g$$6, (0, _TastOps.mkSeqTy)(g$$6, activePatternResult51682[1])));
      const nextvref = (0, _tast.mkLocalValRef)(patternInput$$15[0]);
      const pcvref = (0, _tast.mkLocalValRef)(patternInput$$13[0]);
      const currvref = (0, _tast.mkLocalValRef)(patternInput$$14[0]);
      const pcs = (0, _List.mapIndexed)(function mapping$$4(i, _arg6) {
        return i + 1;
      }, labs$$1);
      const pcDone = (0, _List.length)(labs$$1) + 1 | 0;
      const pcInit = 0;
      const pc2lab = (0, _Map.ofList)((0, _Types.L)([pcInit, initLabel], (0, _Types.L)([pcDone, noDisposeContinuationLabel$$1], (0, _List.zip)(pcs, labs$$1))), {
        Compare: _Util.comparePrimitives
      });
      const lab2pc = (0, _Map.ofList)((0, _Types.L)([initLabel, pcInit], (0, _Types.L)([noDisposeContinuationLabel$$1, pcDone], (0, _List.zip)(labs$$1, pcs))), {
        Compare: _Util.comparePrimitives
      });
      const patternInput$$16 = res$$4.phase2([pcvref, currvref, nextvref, lab2pc]);
      const stateMachineExpr$$1 = (0, _TastOps.mkCompGenSequential)(m$$37, patternInput$$16[0], (0, _TastOps.mkCompGenSequential)(m$$37, (0, _TastOps.mkValSet)(m$$37, pcvref, (0, _TastOps.mkInt32)(g$$6, m$$37, pcDone)), (0, _TastOps.mkCompGenSequential)(m$$37, new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", noDisposeContinuationLabel$$1), (0, _Types.L)(), (0, _Types.L)(), m$$37), (0, _TastOps.mkCompGenSequential)(m$$37, (0, _TastOps.mkValSet)(m$$37, currvref, (0, _TastOps.mkDefault)(m$$37, (0, _tast.ValRef$$get_Type)(currvref))), new _tast.Expr(11, "Op", new _tast.TOp(26, "Return"), (0, _Types.L)(), (0, _Types.L)((0, _TastOps.mkZero)(g$$6, m$$37), (0, _Types.L)()), m$$37)))));
      const checkDisposeExpr$$1 = (0, _TastOps.mkCompGenSequential)(m$$37, patternInput$$16[2], (0, _TastOps.mkCompGenSequential)(m$$37, new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", noDisposeContinuationLabel$$1), (0, _Types.L)(), (0, _Types.L)(), m$$37), new _tast.Expr(11, "Op", new _tast.TOp(26, "Return"), (0, _Types.L)(), (0, _Types.L)((0, _TastOps.mkFalse)(g$$6, m$$37), (0, _Types.L)()), m$$37)));

      const addJumpTable = function addJumpTable(isDisposal, expr$$12) {
        const mbuilder = (0, _TastOps.MatchBuilder$$$$002Ector$$5D7B8C21)(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), m$$37);

        const mkGotoLabelTarget = function mkGotoLabelTarget(lab) {
          return (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder, new _tast.Expr(11, "Op", new _tast.TOp(27, "Goto", lab), (0, _Types.L)(), (0, _Types.L)(), m$$37), new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
        };

        const dtree = new _tast.DecisionTree(0, "TDSwitch", patternInput$$13[1], (0, _List.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.append)(isDisposal ? (0, _Seq.singleton)((0, _TastOps.mkCase)(new _tast.DecisionTreeTest(2, "Const", new _tast.Const(5, "Int32", pcInit)), mkGotoLabelTarget(noDisposeContinuationLabel$$1))) : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
            return (0, _Seq.append)((0, _Seq.map)(function (pc) {
              return (0, _TastOps.mkCase)(new _tast.DecisionTreeTest(2, "Const", new _tast.Const(5, "Int32", pc)), mkGotoLabelTarget((0, _Map.FSharpMap$$get_Item$$2B595)(pc2lab, pc)));
            }, pcs), (0, _Seq.delay)(function () {
              return (0, _Seq.singleton)((0, _TastOps.mkCase)(new _tast.DecisionTreeTest(2, "Const", new _tast.Const(5, "Int32", pcDone)), mkGotoLabelTarget(noDisposeContinuationLabel$$1)));
            }));
          }));
        })), mkGotoLabelTarget((0, _Map.FSharpMap$$get_Item$$2B595)(pc2lab, pcInit)), m$$37);
        const table = (0, _TastOps.MatchBuilder$$Close$$569B5856)(mbuilder, dtree, m$$37, (0, _TcGlobals.TcGlobals$$get_int_ty)(g$$6));
        return (0, _TastOps.mkCompGenSequential)(m$$37, table, (0, _TastOps.mkCompGenSequential)(m$$37, new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", initLabel), (0, _Types.L)(), (0, _Types.L)(), m$$37), expr$$12));
      };

      const handleExeceptionsInDispose = function handleExeceptionsInDispose(disposalExpr$$1) {
        const patternInput$$17 = (0, _TastOps.mkMutableCompGenLocal)(m$$37, "exn", (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$6));
        const exnVref = (0, _tast.mkLocalValRef)(patternInput$$17[0]);
        const startLabel = (0, _il.generateCodeLabel)() | 0;
        const doneLabel = (0, _il.generateCodeLabel)() | 0;
        const patternInput$$18 = (0, _TastOps.mkLocal)(m$$37, "e", (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$6));
        const patternInput$$19 = (0, _TastOps.mkLocal)(m$$37, "ef", (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$6));
        const assignToExn = new _tast.Expr(11, "Op", new _tast.TOp(30, "LValueOp", new _tast.LValueOperation(2, "LSet"), exnVref), (0, _Types.L)(), (0, _Types.L)(patternInput$$18[1], (0, _Types.L)()), m$$37);
        const exceptionCatcher = (0, _TastOps.mkTryWith)(g$$6, disposalExpr$$1, patternInput$$19[0], new _tast.Expr(0, "Const", new _tast.Const(0, "Bool", true), m$$37, (0, _TcGlobals.TcGlobals$$get_bool_ty)(g$$6)), patternInput$$18[0], assignToExn, m$$37, (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$6), new _ast.SequencePointInfoForTry(2, "NoSequencePointAtTry"), new _ast.SequencePointInfoForWith(1, "NoSequencePointAtWith"));
        let whileLoop;
        const mbuilder$$1 = (0, _TastOps.MatchBuilder$$$$002Ector$$5D7B8C21)(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), m$$37);

        const addResultTarget = function addResultTarget(e$$12) {
          return (0, _TastOps.MatchBuilder$$AddResultTarget$$6E549ABC)(mbuilder$$1, e$$12, new _ast.SequencePointInfoForTarget(1, "SuppressSequencePointAtTarget"));
        };

        const dtree$$1 = new _tast.DecisionTree(0, "TDSwitch", patternInput$$13[1], (0, _Types.L)((0, _TastOps.mkCase)(new _tast.DecisionTreeTest(2, "Const", new _tast.Const(5, "Int32", pcDone)), addResultTarget(new _tast.Expr(11, "Op", new _tast.TOp(27, "Goto", doneLabel), (0, _Types.L)(), (0, _Types.L)(), m$$37))), (0, _Types.L)()), addResultTarget((0, _TastOps.mkUnit)(g$$6, m$$37)), m$$37);
        const pcIsEndStateComparison = (0, _TastOps.MatchBuilder$$Close$$569B5856)(mbuilder$$1, dtree$$1, m$$37, (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$6));
        whileLoop = (0, _TastOps.mkCompGenSequential)(m$$37, new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", startLabel), (0, _Types.L)(), (0, _Types.L)(), m$$37), (0, _TastOps.mkCompGenSequential)(m$$37, pcIsEndStateComparison, (0, _TastOps.mkCompGenSequential)(m$$37, exceptionCatcher, (0, _TastOps.mkCompGenSequential)(m$$37, new _tast.Expr(11, "Op", new _tast.TOp(27, "Goto", startLabel), (0, _Types.L)(), (0, _Types.L)(), m$$37), new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", doneLabel), (0, _Types.L)(), (0, _Types.L)(), m$$37)))));
        const doRaise = (0, _TastOps.mkNonNullCond)(g$$6, m$$37, (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$6), patternInput$$17[1], (0, _TastOps.mkThrow)(m$$37, (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$6), patternInput$$17[1]), new _tast.Expr(0, "Const", new _tast.Const(16, "Unit"), m$$37, (0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$6)));
        return (0, _TastOps.mkLet)(new _ast.SequencePointInfoForBinding(2, "NoSequencePointAtLetBinding"), m$$37, patternInput$$17[0], new _tast.Expr(0, "Const", new _tast.Const(17, "Zero"), m$$37, (0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$6)), (0, _TastOps.mkCompGenSequential)(m$$37, whileLoop, doRaise));
      };

      const stateMachineExprWithJumpTable = addJumpTable(false, stateMachineExpr$$1);
      let disposalExpr$$3;

      if (res$$4.significantClose) {
        const disposalExpr$$2 = (0, _TastOps.mkCompGenSequential)(m$$37, patternInput$$16[1], (0, _TastOps.mkCompGenSequential)(m$$37, new _tast.Expr(11, "Op", new _tast.TOp(28, "Label", noDisposeContinuationLabel$$1), (0, _Types.L)(), (0, _Types.L)(), m$$37), (0, _TastOps.mkCompGenSequential)(m$$37, (0, _TastOps.mkValSet)(m$$37, pcvref, (0, _TastOps.mkInt32)(g$$6, m$$37, pcDone)), (0, _TastOps.mkValSet)(m$$37, currvref, (0, _TastOps.mkDefault)(m$$37, (0, _tast.ValRef$$get_Type)(currvref))))));
        disposalExpr$$3 = handleExeceptionsInDispose(addJumpTable(true, disposalExpr$$2));
      } else {
        disposalExpr$$3 = (0, _TastOps.mkValSet)(m$$37, pcvref, (0, _TastOps.mkInt32)(g$$6, m$$37, pcDone));
      }

      const checkDisposeExprWithJumpTable = addJumpTable(true, checkDisposeExpr$$1);
      return [nextvref, pcvref, currvref, stateVars$$8, stateMachineExprWithJumpTable, disposalExpr$$3, checkDisposeExprWithJumpTable, activePatternResult51682[1], m$$37];
    }
  } else {
    return null;
  }
}