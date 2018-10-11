"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accTy = accTy;
exports.accTypeInst = accTypeInst;
exports.accExpr = accExpr;
exports.accMethods = accMethods;
exports.accMethod = accMethod;
exports.accIntfImpls = accIntfImpls;
exports.accIntfImpl = accIntfImpl;
exports.accOp = accOp;
exports.accLambdas = accLambdas;
exports.accExprs = accExprs;
exports.accTargets = accTargets;
exports.accTarget = accTarget;
exports.accDTree = accDTree;
exports.accSwitch = accSwitch;
exports.accDiscrim = accDiscrim;
exports.accAttrib = accAttrib;
exports.accAttribs = accAttribs;
exports.accValReprInfo = accValReprInfo;
exports.accArgReprInfo = accArgReprInfo;
exports.accVal = accVal;
exports.accBind = accBind;
exports.accBinds = accBinds;
exports.accTyconRecdField = accTyconRecdField;
exports.accTycon = accTycon;
exports.accTycons = accTycons;
exports.accModuleOrNamespaceExpr = accModuleOrNamespaceExpr;
exports.accModuleOrNamespaceDefs = accModuleOrNamespaceDefs;
exports.accModuleOrNamespaceDef = accModuleOrNamespaceDef;
exports.accModuleOrNamespaceBinds = accModuleOrNamespaceBinds;
exports.accModuleOrNamespaceBind = accModuleOrNamespaceBind;
exports.UnsolvedTyparsOfModuleDef = UnsolvedTyparsOfModuleDef;
exports.cenv = exports.env = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _tast = require("./tast");

var _Util = require("../fable-core.2.0.3/Util");

var _TastOps = require("./TastOps");

var _zset = require("../absil/zset");

var _List = require("../fable-core.2.0.3/List");

var _illib = require("../absil/illib");

var _Option = require("../fable-core.2.0.3/Option");

var _Seq = require("../fable-core.2.0.3/Seq");

var _TypeRelations = require("./TypeRelations");

const env = (0, _Types.declare)(function env(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.env = env;
const cenv = (0, _Types.declare)(function cenv(arg1, arg2, arg3, arg4) {
  this.g = arg1;
  this.amap = arg2;
  this.denv = arg3;
  this.unsolved = arg4;
}, _Types.Record);
exports.cenv = cenv;

function accTy(cenv$$1, _env, ty) {
  (0, _zset.ZsetModule$$$iter)(function arg00$0040(tp) {
    if (!(0, _Util.equals)((0, _tast.Typar$$get_Rigidity)(tp), new _tast.TyparRigidity(0, "Rigid"))) {
      cenv$$1.unsolved = (0, _Types.L)(tp, cenv$$1.unsolved);
    }
  }, (0, _TastOps.freeInType)(_TastOps.CollectTyparsNoCaching, (0, _TastOps.tryNormalizeMeasureInType)(cenv$$1.g, ty)).FreeTypars);
}

function accTypeInst(cenv$$2, env$$1, tyargs) {
  (0, _List.iterate)(function action(ty$$1) {
    accTy(cenv$$2, env$$1, ty$$1);
  }, tyargs);
}

function accExpr(cenv$$3, env$$2, expr) {
  const expr$$1 = (0, _TastOps.stripExpr)(expr);

  switch (expr$$1.tag) {
    case 7:
      {
        const body = expr$$1.fields[1];
        const bind = expr$$1.fields[0];
        accBind(cenv$$3, env$$2, bind);
        accExpr(cenv$$3, env$$2, body);
        break;
      }

    case 0:
      {
        const ty$$2 = expr$$1.fields[2];
        accTy(cenv$$3, env$$2, ty$$2);
        break;
      }

    case 1:
      {
        const _vFlags = expr$$1.fields[1];
        const _v = expr$$1.fields[0];
        const _m = expr$$1.fields[2];
        break;
      }

    case 12:
      {
        const ty$$3 = expr$$1.fields[4];
        const ast = expr$$1.fields[0];
        const _m$$1 = expr$$1.fields[3];
        accExpr(cenv$$3, env$$2, ast);
        accTy(cenv$$3, env$$2, ty$$3);
        break;
      }

    case 8:
      {
        const ty$$4 = expr$$1.fields[1];
        const overrides = expr$$1.fields[4];
        const iimpls = expr$$1.fields[5];
        const basev = expr$$1.fields[2];
        const basecall = expr$$1.fields[3];
        const _m$$2 = expr$$1.fields[6];
        accTy(cenv$$3, env$$2, ty$$4);
        accExpr(cenv$$3, env$$2, basecall);
        accMethods(cenv$$3, env$$2, basev, overrides);
        accIntfImpls(cenv$$3, env$$2, basev, iimpls);
        break;
      }

    case 11:
      {
        const tyargs$$1 = expr$$1.fields[1];
        const m = expr$$1.fields[3];
        const c = expr$$1.fields[0];
        const args = expr$$1.fields[2];
        accOp(cenv$$3, env$$2, c, tyargs$$1, args, m);
        break;
      }

    case 5:
      {
        const tyargs$$2 = expr$$1.fields[2];
        const fty = expr$$1.fields[1];
        const f = expr$$1.fields[0];
        const argsl = expr$$1.fields[3];
        const _m$$3 = expr$$1.fields[4];
        accTy(cenv$$3, env$$2, fty);
        accTypeInst(cenv$$3, env$$2, tyargs$$2);
        accExpr(cenv$$3, env$$2, f);
        accExprs(cenv$$3, env$$2, argsl);
        break;
      }

    case 3:
      {
        const rty = expr$$1.fields[6];
        const m$$1 = expr$$1.fields[5];
        const argvs = expr$$1.fields[3];
        const _ctorThisValOpt = expr$$1.fields[1];
        const _body = expr$$1.fields[4];
        const _baseValOpt = expr$$1.fields[2];
        const topValInfo = new _tast.ValReprInfo(0, "ValReprInfo", (0, _Types.L)(), (0, _Types.L)((0, _List.map)(function mapping(_arg1) {
          return _tast.ValReprInfoModule$$$unnamedTopArg1;
        }, argvs), (0, _Types.L)()), _tast.ValReprInfoModule$$$unnamedRetVal);
        const ty$$5 = (0, _TastOps.mkMultiLambdaTy)(m$$1, argvs, rty);
        accLambdas(cenv$$3, env$$2, topValInfo, expr$$1, ty$$5);
        break;
      }

    case 4:
      {
        const tps = expr$$1.fields[1];
        const rty$$1 = expr$$1.fields[4];
        const _m$$4 = expr$$1.fields[3];
        const _body$$1 = expr$$1.fields[2];
        const topValInfo$$1 = new _tast.ValReprInfo(0, "ValReprInfo", (0, _tast.ValReprInfoModule$$$InferTyparInfo)(tps), (0, _Types.L)(), _tast.ValReprInfoModule$$$unnamedRetVal);
        accTy(cenv$$3, env$$2, rty$$1);
        const ty$$6 = (0, _TastOps.mkForallTyIfNeeded)(tps, rty$$1);
        accLambdas(cenv$$3, env$$2, topValInfo$$1, expr$$1, ty$$6);
        break;
      }

    case 13:
      {
        const e1$$1 = expr$$1.fields[1];
        const _tps = expr$$1.fields[0];
        const _m$$5 = expr$$1.fields[2];
        accExpr(cenv$$3, env$$2, e1$$1);
        break;
      }

    case 9:
      {
        const ty$$7 = expr$$1.fields[5];
        const targets = expr$$1.fields[3];
        const m$$2 = expr$$1.fields[4];
        const dtree = expr$$1.fields[2];
        const _exprm = expr$$1.fields[1];
        accTy(cenv$$3, env$$2, ty$$7);
        accDTree(cenv$$3, env$$2, dtree);
        accTargets(cenv$$3, env$$2, m$$2, ty$$7, targets);
        break;
      }

    case 6:
      {
        const e = expr$$1.fields[1];
        const binds = expr$$1.fields[0];
        const _m$$6 = expr$$1.fields[2];
        accBinds(cenv$$3, env$$2, binds);
        accExpr(cenv$$3, env$$2, e);
        break;
      }

    case 10:
      {
        const e3 = expr$$1.fields[2];
        const e2$$1 = expr$$1.fields[1];
        const constraints = expr$$1.fields[0];
        const _m$$7 = expr$$1.fields[3];
        accExpr(cenv$$3, env$$2, e2$$1);
        accExpr(cenv$$3, env$$2, e3);
        (0, _List.iterate)(function action$$1(_arg5) {
          if (_arg5.tag === 1) {
            const ty1$$1 = _arg5.fields[0];
            accTy(cenv$$3, env$$2, ty1$$1);
          } else {
            const ty2 = _arg5.fields[1];
            const ty1 = _arg5.fields[0];
            accTy(cenv$$3, env$$2, ty1);
            accTy(cenv$$3, env$$2, ty2);
          }
        }, constraints);
        break;
      }

    case 14:
      {
        const _eref = expr$$1.fields[0];
        throw new Error("Unexpected reclink");
        break;
      }

    default:
      {
        const e2 = expr$$1.fields[1];
        const e1 = expr$$1.fields[0];
        accExpr(cenv$$3, env$$2, e1);
        accExpr(cenv$$3, env$$2, e2);
      }
  }
}

function accMethods(cenv$$4, env$$3, baseValOpt, l) {
  (0, _List.iterate)(function (arg30$0040) {
    accMethod(cenv$$4, env$$3, baseValOpt, arg30$0040);
  }, l);
}

function accMethod(cenv$$5, env$$4, _baseValOpt$$1, _arg1$$1) {
  const vs = _arg1$$1.fields[3];
  const e$$1 = _arg1$$1.fields[4];
  const _tps$$1 = _arg1$$1.fields[2];
  const _slotsig = _arg1$$1.fields[0];
  const _m$$8 = _arg1$$1.fields[5];
  const _attribs = _arg1$$1.fields[1];
  (0, _illib.List$$$iterSquared)(function f$$1(v) {
    accVal(cenv$$5, env$$4, v);
  }, vs);
  accExpr(cenv$$5, env$$4, e$$1);
}

function accIntfImpls(cenv$$6, env$$5, baseValOpt$$1, l$$1) {
  (0, _List.iterate)(function (tupledArg) {
    accIntfImpl(cenv$$6, env$$5, baseValOpt$$1, tupledArg[0], tupledArg[1]);
  }, l$$1);
}

function accIntfImpl(cenv$$7, env$$6, baseValOpt$$2, ty$$9, overrides$$2) {
  accTy(cenv$$7, env$$6, ty$$9);
  accMethods(cenv$$7, env$$6, baseValOpt$$2, overrides$$2);
}

function accOp(cenv$$8, env$$7, op, tyargs$$3, args$$1, _m$$9) {
  accTypeInst(cenv$$8, env$$7, tyargs$$3);
  accExprs(cenv$$8, env$$7, args$$1);

  switch (op.tag) {
    case 31:
      {
        const tys = op.fields[10];
        const methTypeArgs = op.fields[9];
        const enclTypeArgs = op.fields[8];
        accTypeInst(cenv$$8, env$$7, enclTypeArgs);
        accTypeInst(cenv$$8, env$$7, methTypeArgs);
        accTypeInst(cenv$$8, env$$7, tys);
        break;
      }

    case 29:
      {
        const tys$$1 = op.fields[0].fields[0];
        const rty$$2 = op.fields[0].fields[4];
        const argtys = op.fields[0].fields[3];
        const _sln = op.fields[0].fields[5];
        const _nm = op.fields[0].fields[1];
        accTypeInst(cenv$$8, env$$7, argtys);
        (0, _Seq.iterate)(function action$$2(ty$$10) {
          accTy(cenv$$8, env$$7, ty$$10);
        }, (0, _Option.defaultArg)(rty$$2, [], function ($x$$1) {
          return [$x$$1];
        }));
        (0, _List.iterate)(function action$$3(ty$$11) {
          accTy(cenv$$8, env$$7, ty$$11);
        }, tys$$1);
        break;
      }

    case 22:
      {
        const tys$$2 = op.fields[1];
        accTypeInst(cenv$$8, env$$7, tys$$2);
        break;
      }

    default:
      {}
  }
}

function accLambdas(cenv$$9, env$$8, topValInfo$$2, e$$2, ety) {
  var $target$$6;

  switch (e$$2.tag) {
    case 13:
      $target$$6 = 0;
      break;

    case 3:
    case 4:
      $target$$6 = 1;
      break;

    default:
      $target$$6 = 2;
  }

  switch ($target$$6) {
    case 0:
      {
        const e1$$2 = e$$2.fields[1];
        const _tps$$2 = e$$2.fields[0];
        const _m$$10 = e$$2.fields[2];
        accLambdas(cenv$$9, env$$8, topValInfo$$2, e1$$2, ety);
        break;
      }

    case 1:
      {
        const patternInput = (0, _TypeRelations.destTopLambda)(cenv$$9.g, cenv$$9.amap, topValInfo$$2, e$$2, ety);
        accTy(cenv$$9, env$$8, patternInput[5]);
        (0, _illib.List$$$iterSquared)(function f$$2(v$$1) {
          accVal(cenv$$9, env$$8, v$$1);
        }, patternInput[3]);
        (0, _Seq.iterate)(function action$$4(v$$2) {
          accVal(cenv$$9, env$$8, v$$2);
        }, (0, _Option.defaultArg)(patternInput[2], [], function ($x$$2) {
          return [$x$$2];
        }));
        (0, _Seq.iterate)(function action$$5(v$$3) {
          accVal(cenv$$9, env$$8, v$$3);
        }, (0, _Option.defaultArg)(patternInput[1], [], function ($x$$3) {
          return [$x$$3];
        }));
        accExpr(cenv$$9, env$$8, patternInput[4]);
        break;
      }

    case 2:
      {
        accExpr(cenv$$9, env$$8, e$$2);
        break;
      }
  }
}

function accExprs(cenv$$10, env$$9, exprs) {
  (0, _List.iterate)(function action$$6(expr$$2) {
    accExpr(cenv$$10, env$$9, expr$$2);
  }, exprs);
}

function accTargets(cenv$$11, env$$10, m$$3, ty$$12, targets$$1) {
  targets$$1.forEach(function (arg40$0040) {
    accTarget(cenv$$11, env$$10, m$$3, ty$$12, arg40$0040);
  });
}

function accTarget(cenv$$12, env$$11, _m$$11, _ty, _arg2) {
  const e$$3 = _arg2.fields[1];
  const _vs = _arg2.fields[0];
  accExpr(cenv$$12, env$$11, e$$3);
}

function accDTree(cenv$$13, env$$12, x) {
  switch (x.tag) {
    case 2:
      {
        const rest = x.fields[1];
        const bind$$1 = x.fields[0];
        accBind(cenv$$13, env$$12, bind$$1);
        accDTree(cenv$$13, env$$12, rest);
        break;
      }

    case 0:
      {
        const m$$4 = x.fields[3];
        const e$$4 = x.fields[0];
        const dflt = x.fields[2];
        const cases = x.fields[1];
        accSwitch(cenv$$13, env$$12, e$$4, cases, dflt, m$$4);
        break;
      }

    default:
      {
        const es = x.fields[0];

        const _n = x.fields[1] | 0;

        accExprs(cenv$$13, env$$12, es);
      }
  }
}

function accSwitch(cenv$$14, env$$13, e$$5, cases$$1, dflt$$1, _m$$12) {
  accExpr(cenv$$14, env$$13, e$$5);
  (0, _List.iterate)(function action$$7(_arg2$$1) {
    const e$$6 = _arg2$$1.fields[1];
    const discrim = _arg2$$1.fields[0];
    accDiscrim(cenv$$14, env$$13, discrim);
    accDTree(cenv$$14, env$$13, e$$6);
  }, cases$$1);
  (0, _Seq.iterate)(function action$$8(x$$1) {
    accDTree(cenv$$14, env$$13, x$$1);
  }, (0, _Option.defaultArg)(dflt$$1, [], function ($x$$4) {
    return [$x$$4];
  }));
}

function accDiscrim(cenv$$15, env$$14, d) {
  var $target$$7;

  switch (d.tag) {
    case 1:
      $target$$7 = 1;
      break;

    case 2:
    case 3:
      $target$$7 = 2;
      break;

    case 4:
      $target$$7 = 3;
      break;

    case 5:
      $target$$7 = 4;
      break;

    default:
      $target$$7 = 0;
  }

  switch ($target$$7) {
    case 0:
      {
        const tinst = d.fields[1];
        const _ucref = d.fields[0];
        accTypeInst(cenv$$15, env$$14, tinst);
        break;
      }

    case 1:
      {
        const ty$$13 = d.fields[1];
        accTy(cenv$$15, env$$14, ty$$13);
        break;
      }

    case 3:
      {
        const tgty = d.fields[1];
        const srcty = d.fields[0];
        accTy(cenv$$15, env$$14, srcty);
        accTy(cenv$$15, env$$14, tgty);
        break;
      }

    case 4:
      {
        const tys$$3 = d.fields[1];
        const exp = d.fields[0];
        accExpr(cenv$$15, env$$14, exp);
        accTypeInst(cenv$$15, env$$14, tys$$3);
        break;
      }
  }
}

function accAttrib(cenv$$16, env$$15, _arg3) {
  const props = _arg3.fields[3];
  const args$$2 = _arg3.fields[2];
  const _m$$13 = _arg3.fields[6];
  const _k = _arg3.fields[1];
  (0, _List.iterate)(function action$$9(_arg3$$1) {
    const expr2 = _arg3$$1.fields[1];
    const expr1 = _arg3$$1.fields[0];
    accExpr(cenv$$16, env$$15, expr1);
    accExpr(cenv$$16, env$$15, expr2);
  }, args$$2);
  (0, _List.iterate)(function action$$10(_arg4) {
    const ty$$14 = _arg4.fields[0][1];
    const expr2$$1 = _arg4.fields[0][3].fields[1];
    const expr$$3 = _arg4.fields[0][3].fields[0];
    const _nm$$1 = _arg4.fields[0][0];
    const _flg = _arg4.fields[0][2];
    accExpr(cenv$$16, env$$15, expr$$3);
    accExpr(cenv$$16, env$$15, expr2$$1);
    accTy(cenv$$16, env$$15, ty$$14);
  }, props);
}

function accAttribs(cenv$$17, env$$16, attribs) {
  (0, _List.iterate)(function (arg20$0040) {
    accAttrib(cenv$$17, env$$16, arg20$0040);
  }, attribs);
}

function accValReprInfo(cenv$$18, env$$17, _arg4$$1) {
  const ret = _arg4$$1.fields[2];
  const args$$3 = _arg4$$1.fields[1];
  (0, _illib.List$$$iterSquared)(function f$$3(argInfo) {
    accArgReprInfo(cenv$$18, env$$17, argInfo);
  }, args$$3);
  accArgReprInfo(cenv$$18, env$$17, ret);
}

function accArgReprInfo(cenv$$19, env$$18, argInfo$$2) {
  accAttribs(cenv$$19, env$$18, argInfo$$2.Attribs);
}

function accVal(cenv$$20, env$$19, v$$4) {
  accAttribs(cenv$$20, env$$19, (0, _tast.Val$$get_Attribs)(v$$4));
  (0, _Seq.iterate)(function action$$11(arg20$0040$$1) {
    accValReprInfo(cenv$$20, env$$19, arg20$0040$$1);
  }, (0, _Option.defaultArg)((0, _tast.Val$$get_ValReprInfo)(v$$4), [], function ($x$$5) {
    return [$x$$5];
  }));
  accTy(cenv$$20, env$$19, (0, _tast.Val$$get_Type)(v$$4));
}

function accBind(cenv$$21, env$$20, bind$$2) {
  accVal(cenv$$21, env$$20, (0, _tast.Binding$$get_Var)(bind$$2));
  let topValInfo$$3;
  const matchValue = (0, _tast.Val$$get_ValReprInfo)((0, _tast.Binding$$get_Var)(bind$$2));

  if (matchValue != null) {
    const info = matchValue;
    topValInfo$$3 = info;
  } else {
    topValInfo$$3 = _tast.ValReprInfoModule$$$emptyValData;
  }

  accLambdas(cenv$$21, env$$20, topValInfo$$3, (0, _tast.Binding$$get_Expr)(bind$$2), (0, _tast.Val$$get_Type)((0, _tast.Binding$$get_Var)(bind$$2)));
}

function accBinds(cenv$$22, env$$21, xs) {
  (0, _List.iterate)(function action$$12(bind$$3) {
    accBind(cenv$$22, env$$21, bind$$3);
  }, xs);
}

function accTyconRecdField(cenv$$23, env$$22, _tycon, rfield) {
  accAttribs(cenv$$23, env$$22, (0, _tast.RecdField$$get_PropertyAttribs)(rfield));
  accAttribs(cenv$$23, env$$22, (0, _tast.RecdField$$get_FieldAttribs)(rfield));
}

function accTycon(cenv$$24, env$$23, tycon) {
  accAttribs(cenv$$24, env$$23, (0, _tast.Entity$$get_Attribs)(tycon));
  (0, _List.iterate)(function action$$13(v$$5) {
    accVal(cenv$$24, env$$23, v$$5);
  }, (0, _TastOps.abstractSlotValsOfTycons)((0, _Types.L)(tycon, (0, _Types.L)())));
  (0, _tast.Entity$$get_AllFieldsArray)(tycon).forEach(function action$$14(rfield$$1) {
    accTyconRecdField(cenv$$24, env$$23, tycon, rfield$$1);
  });

  if ((0, _tast.Entity$$get_IsUnionTycon)(tycon)) {
    (0, _List.iterate)(function action$$16(uc) {
      accAttribs(cenv$$24, env$$23, uc.Attribs);
      (0, _List.iterate)(function action$$15(rfield$$2) {
        accTyconRecdField(cenv$$24, env$$23, tycon, rfield$$2);
      }, (0, _tast.UnionCase$$get_RecdFields)(uc));
    }, (0, _tast.Entity$$get_UnionCasesAsList)(tycon));
  }
}

function accTycons(cenv$$25, env$$24, tycons) {
  (0, _List.iterate)(function (tycon$$1) {
    accTycon(cenv$$25, env$$24, tycon$$1);
  }, tycons);
}

function accModuleOrNamespaceExpr(cenv$$26, env$$25, x$$2) {
  const def = x$$2.fields[1];
  const _mty = x$$2.fields[0];
  const _m$$14 = x$$2.fields[2];
  accModuleOrNamespaceDef(cenv$$26, env$$25, def);
}

function accModuleOrNamespaceDefs(cenv$$27, env$$26, x$$3) {
  (0, _List.iterate)(function (x$$4) {
    accModuleOrNamespaceDef(cenv$$27, env$$26, x$$4);
  }, x$$3);
}

function accModuleOrNamespaceDef(cenv$$28, env$$27, x$$5) {
  switch (x$$5.tag) {
    case 2:
      {
        const bind$$4 = x$$5.fields[0];
        const _m$$16 = x$$5.fields[1];
        accBind(cenv$$28, env$$27, bind$$4);
        break;
      }

    case 3:
      {
        const e$$7 = x$$5.fields[0];
        const _m$$17 = x$$5.fields[1];
        accExpr(cenv$$28, env$$27, e$$7);
        break;
      }

    case 0:
      {
        const def$$1 = x$$5.fields[0];
        accModuleOrNamespaceExpr(cenv$$28, env$$27, def$$1);
        break;
      }

    case 1:
      {
        const defs = x$$5.fields[0];
        accModuleOrNamespaceDefs(cenv$$28, env$$27, defs);
        break;
      }

    default:
      {
        const tycons$$1 = x$$5.fields[1];
        const mbinds = x$$5.fields[2];
        const _m$$15 = x$$5.fields[3];
        accTycons(cenv$$28, env$$27, tycons$$1);
        accModuleOrNamespaceBinds(cenv$$28, env$$27, mbinds);
      }
  }
}

function accModuleOrNamespaceBinds(cenv$$29, env$$28, xs$$1) {
  (0, _List.iterate)(function (x$$6) {
    accModuleOrNamespaceBind(cenv$$29, env$$28, x$$6);
  }, xs$$1);
}

function accModuleOrNamespaceBind(cenv$$30, env$$29, x$$7) {
  if (x$$7.tag === 1) {
    const rhs = x$$7.fields[1];
    const mspec = x$$7.fields[0];
    accTycon(cenv$$30, env$$29, mspec);
    accModuleOrNamespaceDef(cenv$$30, env$$29, rhs);
  } else {
    const bind$$5 = x$$7.fields[0];
    accBind(cenv$$30, env$$29, bind$$5);
  }
}

function UnsolvedTyparsOfModuleDef(g, amap, denv, mdef, extraAttribs) {
  const cenv$$31 = new cenv(g, amap, denv, (0, _Types.L)());
  accModuleOrNamespaceDef(cenv$$31, new env(0, "Nix"), mdef);
  accAttribs(cenv$$31, new env(0, "Nix"), extraAttribs);
  return (0, _List.reverse)(cenv$$31.unsolved);
}