"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$007CTyappAndApp$007C_$007C = $007CTyappAndApp$007C_$007C;
exports.GlobalUsageAnalysis$$$bindAccBounds = GlobalUsageAnalysis$$$bindAccBounds;
exports.GlobalUsageAnalysis$$$GetValsBoundInExpr = GlobalUsageAnalysis$$$GetValsBoundInExpr;
exports.GlobalUsageAnalysis$$$logUse = GlobalUsageAnalysis$$$logUse;
exports.GlobalUsageAnalysis$$$logBinding = GlobalUsageAnalysis$$$logBinding;
exports.GlobalUsageAnalysis$$$logNonRecBinding = GlobalUsageAnalysis$$$logNonRecBinding;
exports.GlobalUsageAnalysis$$$logRecBindings = GlobalUsageAnalysis$$$logRecBindings;
exports.GlobalUsageAnalysis$$$foldUnderLambda = GlobalUsageAnalysis$$$foldUnderLambda;
exports.GlobalUsageAnalysis$$$UsageFolders = GlobalUsageAnalysis$$$UsageFolders;
exports.GlobalUsageAnalysis$$$GetUsageInfoOfImplFile = GlobalUsageAnalysis$$$GetUsageInfoOfImplFile;
exports.internalError = internalError;
exports.mkLocalVal = mkLocalVal;
exports.ValReprInfoForTS = ValReprInfoForTS;
exports.andTS = andTS;
exports.checkTS = checkTS;
exports.uncheckedExprTS = uncheckedExprTS;
exports.uncheckedTypeTS = uncheckedTypeTS;
exports.exprTS = exprTS;
exports.typeTS = typeTS;
exports.rebuildTS = rebuildTS;
exports.callPatternOrder = callPatternOrder;
exports.argsCP = argsCP;
exports.noArgsCP = noArgsCP;
exports.minimalCallPattern = minimalCallPattern;
exports.commonCallPattern = commonCallPattern;
exports.siteCP = siteCP;
exports.sitesCPs = sitesCPs;
exports.mkTransform = mkTransform;
exports.zipTupleStructureAndType = zipTupleStructureAndType;
exports.zipTupleStructuresAndTypes = zipTupleStructuresAndTypes;
exports.zipCallPatternArgTys = zipCallPatternArgTys;
exports.decideFormalSuggestedCP = decideFormalSuggestedCP;
exports.decideTransform = decideTransform;
exports.eligibleVal = eligibleVal;
exports.determineTransforms = determineTransforms;
exports.hasTransfrom = hasTransfrom;
exports.suffixE = suffixE;
exports.rangeE = rangeE;
exports.push = push;
exports.pushL = pushL;
exports.newLocal = newLocal;
exports.newLocalN = newLocalN;
exports.noEffectExpr = noEffectExpr;
exports.buildProjections = buildProjections;
exports.collapseArg = collapseArg;
exports.collapseArgs = collapseArgs;
exports.mkLets = mkLets;
exports.fixupApp = fixupApp;
exports.transFormal = transFormal;
exports.transRebind = transRebind;
exports.passBind = passBind;
exports.passBinds = passBinds;
exports.passBindRhs = passBindRhs;
exports.preInterceptExpr = preInterceptExpr;
exports.postTransformExpr = postTransformExpr;
exports.passImplFile = passImplFile;
exports.DetupleImplFile = DetupleImplFile;
exports.env = exports.penv = exports.Transform = exports.TransformedFormal = exports.TupleStructure = exports.GlobalUsageAnalysis$$$z0 = exports.GlobalUsageAnalysis$002EResults = exports.GlobalUsageAnalysis$002Eaccessor = void 0;

var _TastOps = require("./TastOps");

var _List = require("../fable-core.2.0.3/List");

var _zset = require("../absil/zset");

var _Types = require("../fable-core.2.0.3/Types");

var _zmap = require("../absil/zmap");

var _tast = require("./tast");

var _TcGlobals = require("./TcGlobals");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

var _ast = require("./ast");

var _Util = require("../fable-core.2.0.3/Util");

var _illib = require("../absil/illib");

function $007CTyappAndApp$007C_$007C(e) {
  if (e.tag === 5) {
    const tys = e.fields[2];
    const m = e.fields[4];
    const fty = e.fields[1];
    const f = e.fields[0];
    const args = e.fields[3];
    const matchValue = (0, _TastOps.stripExpr)(f);

    if (matchValue.tag === 5) {
      if (matchValue.fields[3].tail == null) {
        return [matchValue.fields[0], matchValue.fields[1], (0, _List.append)(matchValue.fields[2], tys), args, matchValue.fields[4]];
      } else {
        return [f, fty, tys, args, m];
      }
    } else {
      return [matchValue, fty, tys, args, m];
    }
  } else {
    return null;
  }
}

function GlobalUsageAnalysis$$$bindAccBounds(vals, _isInDTree, v) {
  return (0, _zset.ZsetModule$$$add)(v, vals);
}

function GlobalUsageAnalysis$$$GetValsBoundInExpr(expr) {
  let folder;
  const inputRecord = (0, _TastOps.ExprFolder0)();
  folder = new _TastOps.ExprFolder$00601(inputRecord.exprIntercept, function valBindingSiteIntercept(vals$$1, tupledArg) {
    return GlobalUsageAnalysis$$$bindAccBounds(vals$$1, tupledArg[0], tupledArg[1]);
  }, inputRecord.nonRecBindingsIntercept, inputRecord.recBindingsIntercept, inputRecord.dtreeIntercept, inputRecord.targetIntercept, inputRecord.tmethodIntercept);
  const z0 = (0, _zset.ZsetModule$$$empty)(_TastOps.valOrder);
  const z = (0, _TastOps.FoldExpr)(folder)(z0)(expr);
  return z;
}

const GlobalUsageAnalysis$002Eaccessor = (0, _Types.declare)(function GlobalUsageAnalysis$002Eaccessor(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.GlobalUsageAnalysis$002Eaccessor = GlobalUsageAnalysis$002Eaccessor;
const GlobalUsageAnalysis$002EResults = (0, _Types.declare)(function GlobalUsageAnalysis$002EResults(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Uses = arg1;
  this.Defns = arg2;
  this.DecisionTreeBindings = arg3;
  this.RecursiveBindings = arg4;
  this.TopLevelBindings = arg5;
  this.IterationIsAtTopLevel = arg6;
}, _Types.Record);
exports.GlobalUsageAnalysis$002EResults = GlobalUsageAnalysis$002EResults;
const GlobalUsageAnalysis$$$z0 = new GlobalUsageAnalysis$002EResults((0, _zmap.ZmapModule$$$empty)(_TastOps.valOrder), (0, _zmap.ZmapModule$$$empty)(_TastOps.valOrder), (0, _zset.ZsetModule$$$empty)(_TastOps.valOrder), (0, _zmap.ZmapModule$$$empty)(_TastOps.valOrder), (0, _zset.ZsetModule$$$empty)(_TastOps.valOrder), true);
exports.GlobalUsageAnalysis$$$z0 = GlobalUsageAnalysis$$$z0;

function GlobalUsageAnalysis$$$logUse(f$$2, tup_0, tup_1, tup_2, z$$1) {
  var matchValue$$1, sites;
  const tup = [tup_0, tup_1, tup_2];
  return new GlobalUsageAnalysis$002EResults((matchValue$$1 = (0, _zmap.ZmapModule$$$tryFind)(f$$2, z$$1.Uses), matchValue$$1 == null ? (0, _zmap.ZmapModule$$$add)(f$$2, (0, _Types.L)(tup, (0, _Types.L)()), z$$1.Uses) : (sites = matchValue$$1, (0, _zmap.ZmapModule$$$add)(f$$2, (0, _Types.L)(tup, sites), z$$1.Uses))), z$$1.Defns, z$$1.DecisionTreeBindings, z$$1.RecursiveBindings, z$$1.TopLevelBindings, z$$1.IterationIsAtTopLevel);
}

function GlobalUsageAnalysis$$$logBinding(z$$2, isInDTree, v$$2) {
  const z$$3 = isInDTree ? new GlobalUsageAnalysis$002EResults(z$$2.Uses, z$$2.Defns, (0, _zset.ZsetModule$$$add)(v$$2, z$$2.DecisionTreeBindings), z$$2.RecursiveBindings, z$$2.TopLevelBindings, z$$2.IterationIsAtTopLevel) : z$$2;
  const z$$4 = z$$3.IterationIsAtTopLevel ? new GlobalUsageAnalysis$002EResults(z$$3.Uses, z$$3.Defns, z$$3.DecisionTreeBindings, z$$3.RecursiveBindings, (0, _zset.ZsetModule$$$add)(v$$2, z$$3.TopLevelBindings), z$$3.IterationIsAtTopLevel) : z$$3;
  return z$$4;
}

function GlobalUsageAnalysis$$$logNonRecBinding(z$$5, bind) {
  const v$$3 = (0, _tast.Binding$$get_Var)(bind);
  const vs = (0, _Types.L)(v$$3, (0, _Types.L)());
  return new GlobalUsageAnalysis$002EResults(z$$5.Uses, (0, _zmap.ZmapModule$$$add)(v$$3, (0, _tast.Binding$$get_Expr)(bind), z$$5.Defns), z$$5.DecisionTreeBindings, (0, _zmap.ZmapModule$$$add)(v$$3, [false, vs], z$$5.RecursiveBindings), z$$5.TopLevelBindings, z$$5.IterationIsAtTopLevel);
}

function GlobalUsageAnalysis$$$logRecBindings(z$$6, binds) {
  const vs$$1 = (0, _TastOps.valsOfBinds)(binds);
  return new GlobalUsageAnalysis$002EResults(z$$6.Uses, (0, _List.fold)(function folder$$2(eqns, bind$$1) {
    return (0, _zmap.ZmapModule$$$add)((0, _tast.Binding$$get_Var)(bind$$1), (0, _tast.Binding$$get_Expr)(bind$$1), eqns);
  }, z$$6.Defns, binds), z$$6.DecisionTreeBindings, (0, _List.fold)(function folder$$1(mubinds, v$$4) {
    return (0, _zmap.ZmapModule$$$add)(v$$4, [true, vs$$1], mubinds);
  }, z$$6.RecursiveBindings, vs$$1), z$$6.TopLevelBindings, z$$6.IterationIsAtTopLevel);
}

function GlobalUsageAnalysis$$$foldUnderLambda(f$$3, z$$7, x) {
  const saved = z$$7.IterationIsAtTopLevel;
  const z$$8 = new GlobalUsageAnalysis$002EResults(z$$7.Uses, z$$7.Defns, z$$7.DecisionTreeBindings, z$$7.RecursiveBindings, z$$7.TopLevelBindings, false);
  const z$$9 = f$$3(z$$8, x);
  const z$$10 = new GlobalUsageAnalysis$002EResults(z$$9.Uses, z$$9.Defns, z$$9.DecisionTreeBindings, z$$9.RecursiveBindings, z$$9.TopLevelBindings, saved);
  return z$$10;
}

function GlobalUsageAnalysis$$$UsageFolders(g) {
  const foldLocalVal = function foldLocalVal(f$$4, z$$11, vref) {
    if ((0, _tast.valRefInThisAssembly)((0, _TcGlobals.TcGlobals$$get_compilingFslib)(g), vref)) {
      return f$$4(z$$11, (0, _tast.ValRef$$get_Deref)(vref));
    } else {
      return z$$11;
    }
  };

  const exprUsageIntercept = function exprUsageIntercept(exprF, z$$12, expr$$1) {
    const recognise = function recognise(context, expr$$2) {
      var x$$1, tupInfo, ts, n;

      recognise: while (true) {
        if (expr$$2.tag === 1) {
          const z$$14 = foldLocalVal(function (z$$13, v$$6) {
            return GlobalUsageAnalysis$$$logUse(v$$6, context, (0, _Types.L)(), (0, _Types.L)(), z$$13);
          }, z$$12, expr$$2.fields[0]);
          return z$$14;
        } else {
          const activePatternResult51045 = $007CTyappAndApp$007C_$007C(expr$$2);

          if (activePatternResult51045 != null) {
            if (activePatternResult51045[0].tag === 1) {
              const fOrig = activePatternResult51045[0].fields[0];

              const collect = function collect(z$$15, f$$6) {
                return GlobalUsageAnalysis$$$logUse(f$$6, context, activePatternResult51045[2], activePatternResult51045[3], z$$15);
              };

              const z$$16 = foldLocalVal(collect, z$$12, fOrig);
              const z$$17 = (0, _List.fold)(exprF, z$$16, activePatternResult51045[3]);
              return z$$17;
            } else {
              return null;
            }
          } else {
            var $target$$10, n$$1, ts$$1, tupInfo$$1, x$$2;

            if (expr$$2.tag === 11) {
              if (expr$$2.fields[0].tag === 21) {
                if (expr$$2.fields[2].tail != null) {
                  if (expr$$2.fields[2].tail.tail == null) {
                    if (x$$1 = expr$$2.fields[2].head, (tupInfo = expr$$2.fields[0].fields[0], (ts = expr$$2.fields[1], (n = expr$$2.fields[0].fields[1] | 0, !(0, _TastOps.evalTupInfoIsStruct)(tupInfo))))) {
                      $target$$10 = 0;
                      n$$1 = expr$$2.fields[0].fields[1];
                      ts$$1 = expr$$2.fields[1];
                      tupInfo$$1 = expr$$2.fields[0].fields[0];
                      x$$2 = expr$$2.fields[2].head;
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
                  const context$$1 = (0, _Types.L)(new GlobalUsageAnalysis$002Eaccessor(0, "TupleGet", n$$1, ts$$1), context);
                  context = context$$1;
                  expr$$2 = x$$2;
                  continue recognise;
                }

              case 1:
                {
                  switch (expr$$2.tag) {
                    case 3:
                      {
                        const body = expr$$2.fields[4];
                        const _vs = expr$$2.fields[3];
                        const _id = expr$$2.fields[0];
                        const _ctorThisValOpt = expr$$2.fields[1];
                        const _baseValOpt = expr$$2.fields[2];
                        const z$$18 = GlobalUsageAnalysis$$$foldUnderLambda(exprF, z$$12, body);
                        return z$$18;
                      }

                    case 4:
                      {
                        const body$$1 = expr$$2.fields[2];
                        const _tps = expr$$2.fields[1];
                        const _id$$1 = expr$$2.fields[0];
                        const z$$19 = GlobalUsageAnalysis$$$foldUnderLambda(exprF, z$$12, body$$1);
                        return z$$19;
                      }

                    default:
                      {
                        return null;
                      }
                  }
                }
            }
          }
        }
      }
    };

    const context$$2 = (0, _Types.L)();
    return recognise(context$$2, expr$$1);
  };

  const targetIntercept = function targetIntercept(exprF$$1, z$$20, _arg1) {
    const body$$2 = _arg1.fields[1];
    const _argvs = _arg1.fields[0];
    return GlobalUsageAnalysis$$$foldUnderLambda(exprF$$1, z$$20, body$$2);
  };

  const tmethodIntercept = function tmethodIntercept(exprF$$2, z$$21, _arg2) {
    const e$$1 = _arg2.fields[4];
    const _m = _arg2.fields[5];
    return GlobalUsageAnalysis$$$foldUnderLambda(exprF$$2, z$$21, e$$1);
  };

  return new _TastOps.ExprFolder$00601(exprUsageIntercept, function (z$$22, tupledArg$$1) {
    return GlobalUsageAnalysis$$$logBinding(z$$22, tupledArg$$1[0], tupledArg$$1[1]);
  }, GlobalUsageAnalysis$$$logNonRecBinding, GlobalUsageAnalysis$$$logRecBindings, (0, _TastOps.ExprFolder0)().dtreeIntercept, targetIntercept, tmethodIntercept);
}

function GlobalUsageAnalysis$$$GetUsageInfoOfImplFile(g$$1, expr$$3) {
  const folder$$3 = GlobalUsageAnalysis$$$UsageFolders(g$$1);
  const z$$25 = (0, _TastOps.FoldImplFile)(folder$$3)(GlobalUsageAnalysis$$$z0)(expr$$3);
  return z$$25;
}

function internalError(str) {
  throw (0, _FSharp.Operators$$$Failure)(str);
}

function mkLocalVal(m$$1, name, ty, topValInfo) {
  const compgen = false;
  return (0, _tast.NewVal)(name, m$$1, null, ty, new _tast.ValMutability(0, "Immutable"), compgen, topValInfo, _tast.taccessPublic, new _tast.ValRecursiveScopeInfo(1, "ValNotInRecScope"), null, new _tast.ValBaseOrThisInfo(2, "NormalVal"), (0, _Types.L)(), new _tast.ValInline(2, "Optional"), (0, _ast.XmlDoc$$$get_Empty)(), false, false, false, false, false, false, null, new _tast.ParentRef(1, "ParentNone"));
}

const TupleStructure = (0, _Types.declare)(function TupleStructure(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TupleStructure = TupleStructure;

function ValReprInfoForTS(ts$$2) {
  if (ts$$2.tag === 1) {
    const ts$$3 = ts$$2.fields[0];
    return (0, _List.collect)(ValReprInfoForTS, ts$$3);
  } else {
    return (0, _Types.L)(_tast.ValReprInfoModule$$$unnamedTopArg, (0, _Types.L)());
  }
}

function andTS(ts$$5, tsB) {
  const matchValue$$2 = [ts$$5, tsB];

  if (matchValue$$2[1].tag === 1) {
    if (matchValue$$2[0].tag === 1) {
      if ((0, _List.length)(matchValue$$2[0].fields[0]) !== (0, _List.length)(matchValue$$2[1].fields[0])) {
        return new TupleStructure(0, "UnknownTS");
      } else {
        return new TupleStructure(1, "TupleTS", (0, _List.map2)(andTS, matchValue$$2[0].fields[0], matchValue$$2[1].fields[0]));
      }
    } else {
      return new TupleStructure(0, "UnknownTS");
    }
  } else {
    return new TupleStructure(0, "UnknownTS");
  }
}

function checkTS(_arg1$$1) {
  var $target$$17, ts$$7;

  if (_arg1$$1.tag === 1) {
    if (_arg1$$1.fields[0].tail != null) {
      if (_arg1$$1.fields[0].tail.tail == null) {
        $target$$17 = 1;
      } else {
        $target$$17 = 2;
        ts$$7 = _arg1$$1;
      }
    } else {
      $target$$17 = 0;
    }
  } else {
    $target$$17 = 2;
    ts$$7 = _arg1$$1;
  }

  switch ($target$$17) {
    case 0:
      {
        return internalError("exprTS: Tuple[]  not expected. (units not done that way).");
      }

    case 1:
      {
        return internalError("exprTS: Tuple[x] not expected. (singleton tuples should not exist.");
      }

    case 2:
      {
        return ts$$7;
      }
  }
}

function uncheckedExprTS(expr$$4) {
  var tupInfo$$2, args$$2, _tys;

  var $target$$18, _tys$$1, args$$3, tupInfo$$3;

  if (expr$$4.tag === 11) {
    if (expr$$4.fields[0].tag === 2) {
      if (tupInfo$$2 = expr$$4.fields[0].fields[0], (args$$2 = expr$$4.fields[2], (_tys = expr$$4.fields[1], !(0, _TastOps.evalTupInfoIsStruct)(tupInfo$$2)))) {
        $target$$18 = 0;
        _tys$$1 = expr$$4.fields[1];
        args$$3 = expr$$4.fields[2];
        tupInfo$$3 = expr$$4.fields[0].fields[0];
      } else {
        $target$$18 = 1;
      }
    } else {
      $target$$18 = 1;
    }
  } else {
    $target$$18 = 1;
  }

  switch ($target$$18) {
    case 0:
      {
        return new TupleStructure(1, "TupleTS", (0, _List.map)(uncheckedExprTS, args$$3));
      }

    case 1:
      {
        return new TupleStructure(0, "UnknownTS");
      }
  }
}

function uncheckedTypeTS(g$$2, ty$$1) {
  if ((0, _TastOps.isRefTupleTy)(g$$2, ty$$1)) {
    const tys$$2 = (0, _TastOps.destRefTupleTy)(g$$2, ty$$1);
    return new TupleStructure(1, "TupleTS", (0, _List.map)(function (ty$$2) {
      return uncheckedTypeTS(g$$2, ty$$2);
    }, tys$$2));
  } else {
    return new TupleStructure(0, "UnknownTS");
  }
}

function exprTS(exprs) {
  return checkTS(uncheckedExprTS(exprs));
}

function typeTS(g$$3, tys$$3) {
  return checkTS(uncheckedTypeTS(g$$3, tys$$3));
}

function rebuildTS(g$$4, m$$2, ts$$8, vs$$2) {
  const rebuild = function rebuild(vs$$3, ts$$9) {
    const matchValue$$3 = [vs$$3, ts$$9];
    var $target$$19, v$$8, vs$$4, tss, vs$$5;

    if (matchValue$$3[0].tail != null) {
      if (matchValue$$3[1].tag === 1) {
        $target$$19 = 2;
        tss = matchValue$$3[1].fields[0];
        vs$$5 = matchValue$$3[0];
      } else {
        $target$$19 = 1;
        v$$8 = matchValue$$3[0].head;
        vs$$4 = matchValue$$3[0].tail;
      }
    } else if (matchValue$$3[1].tag === 1) {
      $target$$19 = 2;
      tss = matchValue$$3[1].fields[0];
      vs$$5 = matchValue$$3[0];
    } else {
      $target$$19 = 0;
    }

    switch ($target$$19) {
      case 0:
        {
          return internalError("rebuildTS: not enough fringe to build tuple");
        }

      case 1:
        {
          return [[(0, _TastOps.exprForVal)(m$$2, v$$8), (0, _tast.Val$$get_Type)(v$$8)], vs$$4];
        }

      case 2:
        {
          const patternInput = (0, _List.mapFold)(rebuild, vs$$5, tss);
          const patternInput$$1 = (0, _List.unzip)(patternInput[0]);
          const x$$3 = (0, _TastOps.mkRefTupled)(g$$4, m$$2, patternInput$$1[0], patternInput$$1[1]);
          const ty$$4 = (0, _TastOps.mkRefTupledTy)(g$$4, patternInput$$1[1]);
          return [[x$$3, ty$$4], patternInput[1]];
        }
    }
  };

  const patternInput$$2 = rebuild(vs$$2, ts$$8);
  const x$$4 = patternInput$$2[0][0];
  const _ty = patternInput$$2[0][1];

  if ((0, _List.length)(patternInput$$2[1]) !== 0) {
    internalError("rebuildTS: had more fringe vars than fringe. REPORT BUG");
  }

  return x$$4;
}

function callPatternOrder(e1) {
  return function (e2) {
    return (0, _Util.compare)(e1, e2);
  };
}

function argsCP(exprs$$1) {
  return (0, _List.map)(exprTS, exprs$$1);
}

function noArgsCP() {
  return (0, _Types.L)();
}

function minimalCallPattern(callPattern) {
  if (callPattern.tail != null) {
    if (callPattern.head.tag === 1) {
      return (0, _Types.L)(new TupleStructure(1, "TupleTS", callPattern.head.fields[0]), minimalCallPattern(callPattern.tail));
    } else {
      const matchValue$$4 = minimalCallPattern(callPattern.tail);

      if (matchValue$$4.tail == null) {
        return (0, _Types.L)();
      } else {
        const tss$$2 = matchValue$$4;
        return (0, _Types.L)(new TupleStructure(0, "UnknownTS"), tss$$2);
      }
    }
  } else {
    return (0, _Types.L)();
  }
}

function commonCallPattern(callPatterns) {
  const andCPs = function andCPs(cpA, cpB) {
    const matchValue$$5 = [cpA, cpB];

    if (matchValue$$5[0].tail != null) {
      if (matchValue$$5[1].tail == null) {
        return (0, _Types.L)();
      } else {
        return (0, _Types.L)(andTS(matchValue$$5[0].head, matchValue$$5[1].head), andCPs(matchValue$$5[0].tail, matchValue$$5[1].tail));
      }
    } else if (matchValue$$5[1].tail != null) {
      return (0, _Types.L)();
    } else {
      return (0, _Types.L)();
    }
  };

  return (0, _List.reduce)(andCPs, callPatterns);
}

function siteCP(_accessors, _inst, args$$4) {
  return argsCP(args$$4);
}

function sitesCPs(sites$$1) {
  return (0, _List.map)(function (tupledArg$$2) {
    return siteCP(tupledArg$$2[0], tupledArg$$2[1], tupledArg$$2[2]);
  }, sites$$1);
}

const TransformedFormal = (0, _Types.declare)(function TransformedFormal(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TransformedFormal = TransformedFormal;
const Transform = (0, _Types.declare)(function Transform(arg1, arg2, arg3) {
  this.transformCallPattern = arg1;
  this.transformedFormals = arg2;
  this.transformedVal = arg3;
}, _Types.Record);
exports.Transform = Transform;

function mkTransform(g$$5, f$$7, m$$3, tps, x1Ntys, rty, callPattern$$1, tyfringes) {
  const transformedFormals = (0, _List.map2)(function mapping$$3(cpi, tupledArg$$3) {
    if (cpi.tag === 1) {
      if (cpi.fields[0].tail == null) {
        return new TransformedFormal(0, "SameArg");
      } else {
        let vs$$9;

        if ((0, _List.length)(tupledArg$$3[1]) === (0, _List.length)(tupledArg$$3[0])) {
          vs$$9 = (0, _List.map)(function mapping$$1(v$$9) {
            return (0, _TastOps.mkCompGenLocal)((0, _tast.Val$$get_Range)(v$$9), (0, _tast.Val$$get_LogicalName)(v$$9), (0, _tast.Val$$get_Type)(v$$9))[0];
          }, tupledArg$$3[1]);
        } else {
          const baseName = tupledArg$$3[1].tail != null ? tupledArg$$3[1].tail.tail == null ? (0, _tast.Val$$get_LogicalName)(tupledArg$$3[1].head) : "arg" : "arg";
          const baseRange = tupledArg$$3[1].tail != null ? tupledArg$$3[1].tail.tail == null ? (0, _tast.Val$$get_Range)(tupledArg$$3[1].head) : m$$3 : m$$3;
          vs$$9 = (0, _List.mapIndexed)(function mapping$$2(i, ty$$5) {
            const name$$1 = baseName + (0, _Util.int32ToString)(i);
            return (0, _TastOps.mkCompGenLocal)(baseRange, name$$1, ty$$5)[0];
          }, tupledArg$$3[0]);
        }

        return new TransformedFormal(1, "NewArgs", vs$$9, rebuildTS(g$$5, m$$3, cpi, vs$$9));
      }
    } else {
      return new TransformedFormal(0, "SameArg");
    }
  }, callPattern$$1, tyfringes);
  const topValInfo$$1 = (0, _tast.Val$$get_ValReprInfo)(f$$7) == null ? null : new _tast.ValReprInfo(0, "ValReprInfo", (0, _tast.ValReprInfoModule$$$InferTyparInfo)(tps), (0, _List.collect)(ValReprInfoForTS, callPattern$$1), _tast.ValReprInfoModule$$$unnamedRetVal);
  const tys1r = (0, _List.collect)(function (tuple$$2) {
    return tuple$$2[0];
  }, tyfringes);
  const tysrN = (0, _illib.List$$$drop)((0, _List.length)(tyfringes), x1Ntys);
  const argtys = (0, _List.append)(tys1r, tysrN);
  const fCty = (0, _TastOps.mkLambdaTy)(tps, argtys, rty);
  const transformedVal = mkLocalVal((0, _tast.Val$$get_Range)(f$$7), (0, _ast.NiceNameGenerator$$FreshCompilerGeneratedName$$7EA1AB7)(_tast.globalNng, (0, _tast.Val$$get_LogicalName)(f$$7), (0, _tast.Val$$get_Range)(f$$7)), fCty, topValInfo$$1);
  return new Transform(callPattern$$1, transformedFormals, transformedVal);
}

function zipTupleStructureAndType(g$$6, ts$$12, ty$$6) {
  var tss$$4;
  var $target$$20, tss$$5;

  if (ts$$12.tag === 1) {
    if (tss$$4 = ts$$12.fields[0], (0, _TastOps.isRefTupleTy)(g$$6, ty$$6)) {
      $target$$20 = 0;
      tss$$5 = ts$$12.fields[0];
    } else {
      $target$$20 = 1;
    }
  } else {
    $target$$20 = 1;
  }

  switch ($target$$20) {
    case 0:
      {
        const tys$$5 = (0, _TastOps.destRefTupleTy)(g$$6, ty$$6);
        const patternInput$$3 = zipTupleStructuresAndTypes(g$$6, tss$$5, tys$$5);
        return [new TupleStructure(1, "TupleTS", patternInput$$3[0]), patternInput$$3[1]];
      }

    case 1:
      {
        return [new TupleStructure(0, "UnknownTS"), (0, _Types.L)(ty$$6, (0, _Types.L)())];
      }
  }
}

function zipTupleStructuresAndTypes(g$$7, tss$$7, tys$$6) {
  const tstys = (0, _List.map2)(function (ts$$13, ty$$7) {
    return zipTupleStructureAndType(g$$7, ts$$13, ty$$7);
  }, tss$$7, tys$$6);
  const tss$$8 = (0, _List.map)(function (tuple$$3) {
    return tuple$$3[0];
  }, tstys);
  const tys$$7 = (0, _List.collect)(function (tuple$$4) {
    return tuple$$4[1];
  }, tstys);
  return [tss$$8, tys$$7];
}

function zipCallPatternArgTys(m$$4, g$$8, callPattern$$2, vss) {
  const vss$$1 = (0, _List.take)((0, _List.length)(callPattern$$2), vss);
  const tstys$$1 = (0, _List.map2)(function (ts$$14, vs$$10) {
    const patternInput$$4 = zipTupleStructureAndType(g$$8, ts$$14, (0, _TastOps.typeOfLambdaArg)(m$$4, vs$$10));
    return [patternInput$$4[0], [patternInput$$4[1], vs$$10]];
  }, callPattern$$2, vss$$1);
  return (0, _List.unzip)(tstys$$1);
}

function decideFormalSuggestedCP(g$$9, z$$26, tys$$8, vss$$2) {
  const trimTsByAccess = function trimTsByAccess(accessors, ts$$16) {
    const matchValue$$7 = [ts$$16, accessors];

    if (matchValue$$7[0].tag === 1) {
      if (matchValue$$7[1].tail != null) {
        const tss$$10 = (0, _illib.List$$$mapNth)(matchValue$$7[1].head.fields[0], (0, _Util.partialApply)(1, trimTsByAccess, [matchValue$$7[1].tail]), matchValue$$7[0].fields[0]);
        return new TupleStructure(1, "TupleTS", tss$$10);
      } else {
        return new TupleStructure(0, "UnknownTS");
      }
    } else {
      return new TupleStructure(0, "UnknownTS");
    }
  };

  const trimTsByVal = function trimTsByVal(z$$27, ts$$17, v$$12) {
    const matchValue$$8 = (0, _zmap.ZmapModule$$$tryFind)(v$$12, z$$27.Uses);

    if (matchValue$$8 != null) {
      const sites$$2 = matchValue$$8;

      const trim = function trim(ts$$18, tupledArg$$4) {
        return trimTsByAccess(tupledArg$$4[0], ts$$18);
      };

      return (0, _List.fold)(trim, ts$$17, sites$$2);
    } else {
      return new TupleStructure(0, "UnknownTS");
    }
  };

  const trimTsByFormal = function trimTsByFormal(z$$28, ts$$19, vss$$3) {
    var $target$$21, v$$13, vs$$11;

    if (vss$$3.tail != null) {
      if (vss$$3.tail.tail == null) {
        $target$$21 = 0;
        v$$13 = vss$$3.head;
      } else {
        $target$$21 = 1;
        vs$$11 = vss$$3;
      }
    } else {
      $target$$21 = 1;
      vs$$11 = vss$$3;
    }

    switch ($target$$21) {
      case 0:
        {
          return trimTsByVal(z$$28, ts$$19, v$$13);
        }

      case 1:
        {
          let tss$$12;

          if (ts$$19.tag === 1) {
            const tss$$11 = ts$$19.fields[0];
            tss$$12 = tss$$11;
          } else {
            tss$$12 = internalError("trimByFormal: ts must be tuple?? PLEASE REPORT\n");
          }

          const tss$$13 = (0, _List.map2)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, trimTsByVal, [z$$28])), tss$$12, vs$$11);
          return new TupleStructure(1, "TupleTS", tss$$13);
        }
    }
  };

  const tss$$14 = (0, _List.map)(function (tys$$9) {
    return typeTS(g$$9, tys$$9);
  }, tys$$8);
  const tss$$15 = (0, _List.map2)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, trimTsByFormal, [z$$26])), tss$$14, vss$$2);
  return tss$$15;
}

function decideTransform(g$$10, z$$29, v$$14, callPatterns$$1, m$$5, tps$$1, vss$$4, rty$$1) {
  const tys$$10 = (0, _List.map)(function (arg10$0040) {
    return (0, _TastOps.typeOfLambdaArg)(m$$5, arg10$0040);
  }, vss$$4);
  const callPattern$$3 = commonCallPattern(callPatterns$$1);
  const callPattern$$4 = (0, _List.truncate)((0, _List.length)(vss$$4), callPattern$$3);
  const formalCallPattern = decideFormalSuggestedCP(g$$10, z$$29, tys$$10, vss$$4);
  const callPattern$$5 = (0, _List.truncate)((0, _List.length)(callPattern$$4), formalCallPattern);
  const patternInput$$5 = zipCallPatternArgTys(m$$5, g$$10, callPattern$$5, vss$$4);
  const callPattern$$7 = minimalCallPattern(patternInput$$5[0]);
  const tyfringes$$2 = (0, _List.truncate)((0, _List.length)(callPattern$$7), patternInput$$5[1]);

  if (callPattern$$7.tail == null) {
    return null;
  } else {
    return [v$$14, mkTransform(g$$10, v$$14, m$$5, tps$$1, tys$$10, rty$$1, callPattern$$7, tyfringes$$2)];
  }
}

function eligibleVal(g$$11, m$$6, v$$15) {
  const dllImportStubOrOtherNeverInline = (0, _Util.equals)((0, _tast.Val$$get_InlineInfo)(v$$15), new _tast.ValInline(3, "Never"));
  const mutableVal = (0, _tast.Val$$get_IsMutable)(v$$15);
  const byrefVal = (0, _TastOps.isByrefLikeTy)(g$$11, m$$6, (0, _tast.Val$$get_Type)(v$$15));

  if (((!dllImportStubOrOtherNeverInline ? !byrefVal : false) ? !mutableVal : false) ? !(0, _tast.Val$$get_IsMemberOrModuleBinding)(v$$15) : false) {
    return !(0, _tast.Val$$get_IsCompiledAsTopLevel)(v$$15);
  } else {
    return false;
  }
}

function determineTransforms(g$$12, z$$30) {
  const selectTransform = function selectTransform(f$$8, sites$$3) {
    if (!eligibleVal(g$$12, (0, _tast.Val$$get_Range)(f$$8), f$$8)) {
      return null;
    } else {
      const matchValue$$9 = (0, _zmap.ZmapModule$$$tryFind)(f$$8, z$$30.Defns);

      if (matchValue$$9 != null) {
        const e$$2 = matchValue$$9;
        const patternInput$$6 = (0, _TastOps.stripTopLambda)(e$$2, (0, _tast.Val$$get_Type)(f$$8));
        const matchValue$$10 = (0, _List.concat)(patternInput$$6[1]);

        if (matchValue$$10.tail != null) {
          const arg1 = matchValue$$10.head;
          const m$$7 = (0, _tast.Val$$get_Range)(arg1);
          const callPatterns$$2 = sitesCPs(sites$$3);
          return decideTransform(g$$12, z$$30, f$$8, callPatterns$$2, m$$7, patternInput$$6[0], patternInput$$6[1], patternInput$$6[3]);
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  };

  const vtransforms = (0, _zmap.ZmapModule$$$chooseL)(selectTransform, z$$30.Uses);
  const vtransforms$$1 = (0, _zmap.ZmapModule$$$ofList)(_TastOps.valOrder, vtransforms);
  return vtransforms$$1;
}

const penv = (0, _Types.declare)(function penv(arg1, arg2, arg3) {
  this.transforms = arg1;
  this.ccu = arg2;
  this.g = arg3;
}, _Types.Record);
exports.penv = penv;

function hasTransfrom(penv$$1, f$$9) {
  return (0, _zmap.ZmapModule$$$tryFind)(f$$9, penv$$1.transforms);
}

const env = (0, _Types.declare)(function env(arg1, arg2, arg3) {
  this.eg = arg1;
  this.prefix = arg2;
  this.m = arg3;
}, _Types.Record);
exports.env = env;

function suffixE(env$$1, s) {
  return new env(env$$1.eg, env$$1.prefix + s, env$$1.m);
}

function rangeE(env$$2, m$$8) {
  return new env(env$$2.eg, env$$2.prefix, m$$8);
}

function push(b, bs) {
  return (0, _Types.L)(b, bs);
}

function pushL(xs$$2, bs$$1) {
  return (0, _List.append)(xs$$2, bs$$1);
}

function newLocal(env$$3, ty$$8) {
  return (0, _TastOps.mkCompGenLocal)(env$$3.m, env$$3.prefix, ty$$8);
}

function newLocalN(env$$4, i$$2, ty$$9) {
  return (0, _TastOps.mkCompGenLocal)(env$$4.m, env$$4.prefix + (0, _Util.int32ToString)(i$$2), ty$$9);
}

function noEffectExpr(env$$5, bindings, x$$5) {
  if (x$$5.tag === 1) {
    const _v = x$$5.fields[0];
    const _m$$1 = x$$5.fields[2];
    return [bindings, x$$5];
  } else {
    const x$$6 = x$$5;
    const patternInput$$7 = newLocal(env$$5, (0, _TastOps.tyOfExpr)(env$$5.eg, x$$6));
    const bind$$3 = (0, _TastOps.mkCompGenBind)(patternInput$$7[0], x$$6);
    return [push(bind$$3, bindings), patternInput$$7[1]];
  }
}

function buildProjections(env$$6, bindings$$1, x$$7, xtys$$1) {
  const patternInput$$9 = (0, _List.unzip)((0, _List.mapIndexed)(function mapping$$4(i$$3, xty) {
    const patternInput$$8 = newLocalN(env$$6, i$$3, xty);
    const bind$$4 = (0, _TastOps.mkBind)(new _ast.SequencePointInfoForBinding(4, "NoSequencePointAtInvisibleBinding"), patternInput$$8[0], (0, _TastOps.mkTupleFieldGet)(env$$6.eg, _tast.tupInfoRef, x$$7, xtys$$1, i$$3, env$$6.m));
    return [bind$$4, patternInput$$8[1]];
  }, xtys$$1));
  const bindings$$2 = pushL((0, _List.reverse)(patternInput$$9[0]), bindings$$1);
  return [bindings$$2, patternInput$$9[1]];
}

function collapseArg(env$$7, bindings$$3, ts$$20, x$$8) {
  var xs$$3, tupInfo$$4, tss$$16, _xtys;

  collapseArg: while (true) {
    const m$$9 = (0, _TastOps.Expr$002Eget_Range)(x$$8);
    const env$$8 = rangeE(env$$7, m$$9);
    const matchValue$$11 = [ts$$20, x$$8];

    var $target$$22, x$$9, _xtys$$1, tss$$17, tupInfo$$5, xs$$4;

    if (matchValue$$11[0].tag === 1) {
      if (matchValue$$11[1].tag === 11) {
        if (matchValue$$11[1].fields[0].tag === 2) {
          if (xs$$3 = matchValue$$11[1].fields[2], (tupInfo$$4 = matchValue$$11[1].fields[0].fields[0], (tss$$16 = matchValue$$11[0].fields[0], (_xtys = matchValue$$11[1].fields[1], !(0, _TastOps.evalTupInfoIsStruct)(tupInfo$$4))))) {
            $target$$22 = 1;
            _xtys$$1 = matchValue$$11[1].fields[1];
            tss$$17 = matchValue$$11[0].fields[0];
            tupInfo$$5 = matchValue$$11[1].fields[0].fields[0];
            xs$$4 = matchValue$$11[1].fields[2];
          } else {
            $target$$22 = 2;
          }
        } else {
          $target$$22 = 2;
        }
      } else {
        $target$$22 = 2;
      }
    } else {
      $target$$22 = 0;
      x$$9 = matchValue$$11[1];
    }

    switch ($target$$22) {
      case 0:
        {
          const patternInput$$10 = noEffectExpr(env$$8, bindings$$3, x$$9);
          return [patternInput$$10[0], (0, _Types.L)(patternInput$$10[1], (0, _Types.L)())];
        }

      case 1:
        {
          const env$$9 = suffixE(env$$8, "'");
          return collapseArgs(env$$9, bindings$$3, 1, tss$$17, xs$$4);
        }

      case 2:
        {
          if (matchValue$$11[0].tag === 1) {
            const tss$$18 = matchValue$$11[0].fields[0];
            const patternInput$$11 = noEffectExpr(env$$8, bindings$$3, matchValue$$11[1]);
            const env$$10 = suffixE(env$$8, "_p");
            const xty$$1 = (0, _TastOps.tyOfExpr)(env$$10.eg, patternInput$$11[1]);
            const xtys$$2 = (0, _TastOps.destRefTupleTy)(env$$10.eg, xty$$1);
            const patternInput$$12 = buildProjections(env$$10, patternInput$$11[0], patternInput$$11[1], xtys$$2);
            env$$7 = env$$10;
            bindings$$3 = patternInput$$12[0];
            ts$$20 = new TupleStructure(1, "TupleTS", tss$$18);
            x$$8 = (0, _TastOps.mkRefTupled)(env$$10.eg, m$$9, patternInput$$12[1], xtys$$2);
            continue collapseArg;
          } else {
            throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/DetupleArgs.fs", 687, 10);
          }
        }
    }
  }
}

function collapseArgs(env$$11, bindings$$7, n$$2, callPattern$$8, args$$6) {
  const matchValue$$12 = [callPattern$$8, args$$6];

  if (matchValue$$12[0].tail != null) {
    if (matchValue$$12[1].tail == null) {
      return internalError("collapseArgs: CallPattern longer than callsite args. REPORT BUG");
    } else {
      const env1 = suffixE(env$$11, (0, _Util.int32ToString)(n$$2));
      const patternInput$$13 = collapseArg(env1, bindings$$7, matchValue$$12[0].head, matchValue$$12[1].head);
      const patternInput$$14 = collapseArgs(env$$11, patternInput$$13[0], n$$2 + 1, matchValue$$12[0].tail, matchValue$$12[1].tail);
      return [patternInput$$14[0], (0, _List.append)(patternInput$$13[1], patternInput$$14[1])];
    }
  } else {
    return [bindings$$7, matchValue$$12[1]];
  }
}

function mkLets(binds$$3, body$$3) {
  return (0, _List.foldBack)(function folder$$4(b$$1, acc) {
    return (0, _TastOps.mkLetBind)((0, _TastOps.Expr$002Eget_Range)(acc), b$$1, acc);
  }, binds$$3, body$$3);
}

function fixupApp(penv$$2, fx, fty$$1, tys$$11, args$$9, m$$10) {
  if (fx.tag === 1) {
    const vref$$1 = fx.fields[0];
    const m$$11 = fx.fields[2];
    const f$$10 = (0, _tast.ValRef$$get_Deref)(vref$$1);
    const matchValue$$13 = hasTransfrom(penv$$2, f$$10);

    if (matchValue$$13 == null) {
      return new _tast.Expr(5, "App", fx, fty$$1, tys$$11, args$$9, m$$11);
    } else {
      const trans = matchValue$$13;
      const callPattern$$9 = trans.transformCallPattern;
      const transformedVal$$1 = trans.transformedVal;
      const fCty$$1 = (0, _tast.Val$$get_Type)(transformedVal$$1);
      const fCx = (0, _TastOps.exprForVal)(m$$11, transformedVal$$1);
      const env$$12 = new env(penv$$2.g, "arg", m$$11);
      const bindings$$10 = (0, _Types.L)();
      const patternInput$$15 = collapseArgs(env$$12, bindings$$10, 0, callPattern$$9, args$$9);
      const bindings$$12 = (0, _List.reverse)(patternInput$$15[0]);
      return mkLets(bindings$$12, new _tast.Expr(5, "App", fCx, fCty$$1, tys$$11, patternInput$$15[1], m$$11));
    }
  } else {
    return new _tast.Expr(5, "App", fx, fty$$1, tys$$11, args$$9, m$$10);
  }
}

function transFormal(ybi, xi) {
  if (ybi.tag === 1) {
    const vs$$12 = ybi.fields[0];
    const _x = ybi.fields[1];
    return (0, _List.map)(function mapping$$5(value) {
      return (0, _Types.L)(value, (0, _Types.L)());
    }, vs$$12);
  } else {
    return (0, _Types.L)(xi, (0, _Types.L)());
  }
}

function transRebind(ybi$$1, xi$$1) {
  const matchValue$$14 = [xi$$1, ybi$$1];

  var $target$$23, _vs$$1, u, x$$12, _vs$$2, us, x$$13;

  if (matchValue$$14[1].tag === 1) {
    if (matchValue$$14[0].tail != null) {
      if (matchValue$$14[0].tail.tail == null) {
        $target$$23 = 1;
        _vs$$1 = matchValue$$14[1].fields[0];
        u = matchValue$$14[0].head;
        x$$12 = matchValue$$14[1].fields[1];
      } else {
        $target$$23 = 2;
        _vs$$2 = matchValue$$14[1].fields[0];
        us = matchValue$$14[0];
        x$$13 = matchValue$$14[1].fields[1];
      }
    } else {
      $target$$23 = 2;
      _vs$$2 = matchValue$$14[1].fields[0];
      us = matchValue$$14[0];
      x$$13 = matchValue$$14[1].fields[1];
    }
  } else {
    $target$$23 = 0;
  }

  switch ($target$$23) {
    case 0:
      {
        return (0, _Types.L)();
      }

    case 1:
      {
        return (0, _Types.L)((0, _TastOps.mkCompGenBind)(u, x$$12), (0, _Types.L)());
      }

    case 2:
      {
        return (0, _List.map2)(_TastOps.mkCompGenBind, us, (0, _TastOps.tryDestRefTupleExpr)(x$$13));
      }
  }
}

function passBind(penv$$3, _arg1$$4) {
  const bind$$5 = _arg1$$4;
  const repr = bind$$5.fields[1];
  const letSeqPtOpt = bind$$5.fields[2];
  const fOrig$$1 = bind$$5.fields[0];
  const m$$12 = (0, _tast.Val$$get_Range)(fOrig$$1);
  const matchValue$$15 = hasTransfrom(penv$$3, fOrig$$1);

  if (matchValue$$15 != null) {
    const trans$$1 = matchValue$$15;
    const patternInput$$16 = (0, _TastOps.stripTopLambda)(repr, (0, _tast.Val$$get_Type)(fOrig$$1));
    const transformedVal$$2 = trans$$1.transformedVal;
    const transformedFormals$$1 = trans$$1.transformedFormals;
    const p = (0, _List.length)(transformedFormals$$1) | 0;

    if ((0, _List.length)(patternInput$$16[1]) < p) {
      internalError("passBinds: |vss|<p - detuple pass");
    }

    const xqNs = (0, _illib.List$$$drop)(p, patternInput$$16[1]);
    const x1ps = (0, _List.truncate)(p, patternInput$$16[1]);
    const y1Ps = (0, _List.concat)((0, _List.map2)(transFormal, transformedFormals$$1, x1ps));
    const formals = (0, _List.append)(y1Ps, xqNs);
    const rebinds = (0, _List.concat)((0, _List.map2)(transRebind, transformedFormals$$1, x1ps));
    const patternInput$$17 = [(0, _TastOps.mkLetsBind)(m$$12, rebinds, patternInput$$16[2]), patternInput$$16[3]];
    const bind$$6 = (0, _TastOps.mkMultiLambdaBind)(transformedVal$$2, letSeqPtOpt, m$$12, patternInput$$16[0], formals, patternInput$$17[0], patternInput$$17[1]);
    return bind$$6;
  } else {
    return bind$$5;
  }
}

function passBinds(penv$$4, binds$$4) {
  return (0, _List.map)(function mapping$$6(arg10$0040$$2) {
    return passBind(penv$$4, arg10$0040$$2);
  }, binds$$4);
}

function passBindRhs(conv, _arg1$$5) {
  const v$$16 = _arg1$$5.fields[0];
  const repr$$1 = _arg1$$5.fields[1];
  const letSeqPtOpt$$1 = _arg1$$5.fields[2];
  return new _tast.Binding(0, "TBind", v$$16, conv(repr$$1), letSeqPtOpt$$1);
}

function preInterceptExpr(penv$$5, conv$$1, expr$$7) {
  if (expr$$7.tag === 6) {
    const binds$$6 = (0, _List.map)(function (arg10$0040$$3) {
      return passBindRhs(conv$$1, arg10$0040$$3);
    }, expr$$7.fields[0]);
    const binds$$7 = passBinds(penv$$5, binds$$6);
    return (0, _TastOps.mkLetRecBinds)(expr$$7.fields[2], binds$$7, conv$$1(expr$$7.fields[1]));
  } else if (expr$$7.tag === 7) {
    const bind$$8 = passBindRhs(conv$$1, expr$$7.fields[0]);
    const bind$$9 = passBind(penv$$5, bind$$8);
    return (0, _TastOps.mkLetBind)(expr$$7.fields[2], bind$$9, conv$$1(expr$$7.fields[1]));
  } else {
    const activePatternResult51225 = $007CTyappAndApp$007C_$007C(expr$$7);

    if (activePatternResult51225 != null) {
      const args$$12 = (0, _List.map)(conv$$1, activePatternResult51225[3]);
      const f$$12 = conv$$1(activePatternResult51225[0]);
      return fixupApp(penv$$5, f$$12, activePatternResult51225[1], activePatternResult51225[2], args$$12, activePatternResult51225[4]);
    } else {
      return null;
    }
  }
}

function postTransformExpr(penv$$6, expr$$8) {
  if (expr$$8.tag === 6) {
    const binds$$9 = passBinds(penv$$6, expr$$8.fields[0]);
    return (0, _TastOps.mkLetRecBinds)(expr$$8.fields[2], binds$$9, expr$$8.fields[1]);
  } else if (expr$$8.tag === 7) {
    const bind$$11 = passBind(penv$$6, expr$$8.fields[0]);
    return (0, _TastOps.mkLetBind)(expr$$8.fields[2], bind$$11, expr$$8.fields[1]);
  } else {
    const activePatternResult51229 = $007CTyappAndApp$007C_$007C(expr$$8);

    if (activePatternResult51229 != null) {
      return fixupApp(penv$$6, activePatternResult51229[0], activePatternResult51229[1], activePatternResult51229[2], activePatternResult51229[3], activePatternResult51229[4]);
    } else {
      return null;
    }
  }
}

function passImplFile(penv$$7, ass) {
  return (0, _TastOps.RewriteImplFile)(new _TastOps.ExprRewritingEnv((0, _Util.uncurry)(2, null), function (expr$$9) {
    return postTransformExpr(penv$$7, expr$$9);
  }, (0, _Util.uncurry)(2, null), false), ass);
}

function DetupleImplFile(ccu, g$$13, expr$$10) {
  const z$$31 = GlobalUsageAnalysis$$$GetUsageInfoOfImplFile(g$$13, expr$$10);
  const vtrans = determineTransforms(g$$13, z$$31);
  const penv$$8 = new penv(vtrans, ccu, g$$13);
  const expr$$11 = passImplFile(penv$$8, expr$$10);
  return expr$$11;
}