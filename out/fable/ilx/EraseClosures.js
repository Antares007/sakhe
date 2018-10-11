"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notlazy = notlazy;
exports.stripUpTo = stripUpTo;
exports.destTyLambda = destTyLambda;
exports.isTyLambda = isTyLambda;
exports.isTyApp = isTyApp;
exports.stripTyLambdasUpTo = stripTyLambdasUpTo;
exports.stripSupportedIndirectCall = stripSupportedIndirectCall;
exports.stripSupportedAbstraction = stripSupportedAbstraction;
exports.isSupportedDirectCall = isSupportedDirectCall;
exports.mkFuncTypeRef = mkFuncTypeRef;
exports.addMethodGeneratedAttrsToTypeDef = addMethodGeneratedAttrsToTypeDef;
exports.newIlxPubCloEnv = newIlxPubCloEnv;
exports.mkILTyFuncTy = mkILTyFuncTy;
exports.mkILFuncTy = mkILFuncTy;
exports.mkILCurriedFuncTy = mkILCurriedFuncTy;
exports.typ_Func = typ_Func;
exports.mkTyOfApps = mkTyOfApps;
exports.mkTyOfLambdas = mkTyOfLambdas;
exports.mkMethSpecForMultiApp = mkMethSpecForMultiApp;
exports.mkCallBlockForMultiValueApp = mkCallBlockForMultiValueApp;
exports.mkMethSpecForClosureCall = mkMethSpecForClosureCall;
exports.mkLdFreeVar = mkLdFreeVar;
exports.mkCallFunc = mkCallFunc;
exports.convReturnInstr = convReturnInstr;
exports.convILMethodBody = convILMethodBody;
exports.convMethodBody = convMethodBody;
exports.convMethodDef = convMethodDef;
exports.mkILFreeVarForParam = mkILFreeVarForParam;
exports.mkILLocalForFreeVar = mkILLocalForFreeVar;
exports.mkILCloFldSpecs = mkILCloFldSpecs;
exports.mkILCloFldDefs = mkILCloFldDefs;
exports.convIlxClosureDef = convIlxClosureDef;
exports.cenv = void 0;

var _Util = require("../fable-core.2.0.3/Util");

var _Types = require("../fable-core.2.0.3/Types");

var _ilx = require("../absil/ilx");

var _ilxsettings = require("./ilxsettings");

var _il = require("../absil/il");

var _List = require("../fable-core.2.0.3/List");

var _Array = require("../fable-core.2.0.3/Array");

var _ilmorph = require("../absil/ilmorph");

var _illib = require("../absil/illib");

var _PrettyNaming = require("../fsharp/PrettyNaming");

var _Option = require("../fable-core.2.0.3/Option");

function notlazy(v) {
  return (0, _Util.lazyFromValue)(v);
}

function stripUpTo(n, test, dest, x) {
  if (n === 0) {
    return [(0, _Types.L)(), x];
  } else if (test(x)) {
    const patternInput = dest(x);
    const patternInput$$1 = stripUpTo(n - 1, test, dest, patternInput[1]);
    return [(0, _Types.L)(patternInput[0], patternInput$$1[0]), patternInput$$1[1]];
  } else {
    return [(0, _Types.L)(), x];
  }
}

function destTyLambda(_arg1) {
  if (_arg1.tag === 0) {
    const r$$1 = _arg1.fields[1];
    const l$$1 = _arg1.fields[0];
    return [l$$1, r$$1];
  } else {
    throw new Error("no");
  }
}

function isTyLambda(_arg1$$1) {
  if (_arg1$$1.tag === 0) {
    return true;
  } else {
    return false;
  }
}

function isTyApp(_arg1$$2) {
  if (_arg1$$2.tag === 0) {
    return true;
  } else {
    return false;
  }
}

function stripTyLambdasUpTo(n$$1, lambdas) {
  return stripUpTo(n$$1, isTyLambda, destTyLambda, lambdas);
}

function stripSupportedIndirectCall(apps) {
  if (apps.tag === 1) {
    if (apps.fields[1].tag === 1) {
      if (apps.fields[1].fields[1].tag === 1) {
        if (apps.fields[1].fields[1].fields[1].tag === 1) {
          if (apps.fields[1].fields[1].fields[1].fields[1].tag === 1) {
            return [(0, _Types.L)(), (0, _Types.L)(apps.fields[0], (0, _Types.L)(apps.fields[1].fields[0], (0, _Types.L)(apps.fields[1].fields[1].fields[0], (0, _Types.L)(apps.fields[1].fields[1].fields[1].fields[0], (0, _Types.L)(apps.fields[1].fields[1].fields[1].fields[1].fields[0], (0, _Types.L)()))))), apps.fields[1].fields[1].fields[1].fields[1].fields[1]];
          } else {
            return [(0, _Types.L)(), (0, _Types.L)(apps.fields[0], (0, _Types.L)(apps.fields[1].fields[0], (0, _Types.L)(apps.fields[1].fields[1].fields[0], (0, _Types.L)(apps.fields[1].fields[1].fields[1].fields[0], (0, _Types.L)())))), apps.fields[1].fields[1].fields[1].fields[1]];
          }
        } else {
          return [(0, _Types.L)(), (0, _Types.L)(apps.fields[0], (0, _Types.L)(apps.fields[1].fields[0], (0, _Types.L)(apps.fields[1].fields[1].fields[0], (0, _Types.L)()))), apps.fields[1].fields[1].fields[1]];
        }
      } else {
        return [(0, _Types.L)(), (0, _Types.L)(apps.fields[0], (0, _Types.L)(apps.fields[1].fields[0], (0, _Types.L)())), apps.fields[1].fields[1]];
      }
    } else {
      return [(0, _Types.L)(), (0, _Types.L)(apps.fields[0], (0, _Types.L)()), apps.fields[1]];
    }
  } else if (apps.tag === 0) {
    const maxTyApps = 1;
    const patternInput$$2 = stripUpTo(maxTyApps, isTyApp, _ilx.destTyFuncApp, apps);
    return [patternInput$$2[0], (0, _Types.L)(), patternInput$$2[1]];
  } else {
    return [(0, _Types.L)(), (0, _Types.L)(), apps];
  }
}

function stripSupportedAbstraction(lambdas$$1) {
  if (lambdas$$1.tag === 1) {
    if (lambdas$$1.fields[1].tag === 1) {
      if (lambdas$$1.fields[1].fields[1].tag === 1) {
        if (lambdas$$1.fields[1].fields[1].fields[1].tag === 1) {
          if (lambdas$$1.fields[1].fields[1].fields[1].fields[1].tag === 1) {
            return [(0, _Types.L)(), (0, _Types.L)(lambdas$$1.fields[0], (0, _Types.L)(lambdas$$1.fields[1].fields[0], (0, _Types.L)(lambdas$$1.fields[1].fields[1].fields[0], (0, _Types.L)(lambdas$$1.fields[1].fields[1].fields[1].fields[0], (0, _Types.L)(lambdas$$1.fields[1].fields[1].fields[1].fields[1].fields[0], (0, _Types.L)()))))), lambdas$$1.fields[1].fields[1].fields[1].fields[1].fields[1]];
          } else {
            return [(0, _Types.L)(), (0, _Types.L)(lambdas$$1.fields[0], (0, _Types.L)(lambdas$$1.fields[1].fields[0], (0, _Types.L)(lambdas$$1.fields[1].fields[1].fields[0], (0, _Types.L)(lambdas$$1.fields[1].fields[1].fields[1].fields[0], (0, _Types.L)())))), lambdas$$1.fields[1].fields[1].fields[1].fields[1]];
          }
        } else {
          return [(0, _Types.L)(), (0, _Types.L)(lambdas$$1.fields[0], (0, _Types.L)(lambdas$$1.fields[1].fields[0], (0, _Types.L)(lambdas$$1.fields[1].fields[1].fields[0], (0, _Types.L)()))), lambdas$$1.fields[1].fields[1].fields[1]];
        }
      } else {
        return [(0, _Types.L)(), (0, _Types.L)(lambdas$$1.fields[0], (0, _Types.L)(lambdas$$1.fields[1].fields[0], (0, _Types.L)())), lambdas$$1.fields[1].fields[1]];
      }
    } else {
      return [(0, _Types.L)(), (0, _Types.L)(lambdas$$1.fields[0], (0, _Types.L)()), lambdas$$1.fields[1]];
    }
  } else if (lambdas$$1.tag === 0) {
    const maxTyApps$$1 = 1;
    const patternInput$$3 = stripTyLambdasUpTo(maxTyApps$$1, lambdas$$1);
    return [patternInput$$3[0], (0, _Types.L)(), patternInput$$3[1]];
  } else {
    return [(0, _Types.L)(), (0, _Types.L)(), lambdas$$1];
  }
}

function isSupportedDirectCall(apps$$1) {
  var $target$$6;

  if (apps$$1.tag === 1) {
    if (apps$$1.fields[1].tag === 2) {
      $target$$6 = 0;
    } else if (apps$$1.fields[1].tag === 1) {
      if (apps$$1.fields[1].fields[1].tag === 2) {
        $target$$6 = 1;
      } else if (apps$$1.fields[1].fields[1].tag === 1) {
        if (apps$$1.fields[1].fields[1].fields[1].tag === 2) {
          $target$$6 = 2;
        } else if (apps$$1.fields[1].fields[1].fields[1].tag === 1) {
          if (apps$$1.fields[1].fields[1].fields[1].fields[1].tag === 2) {
            $target$$6 = 3;
          } else {
            $target$$6 = 5;
          }
        } else {
          $target$$6 = 5;
        }
      } else {
        $target$$6 = 5;
      }
    } else {
      $target$$6 = 5;
    }
  } else if (apps$$1.tag === 0) {
    $target$$6 = 4;
  } else {
    $target$$6 = 5;
  }

  switch ($target$$6) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return true;
      }

    case 2:
      {
        return true;
      }

    case 3:
      {
        return true;
      }

    case 4:
      {
        return false;
      }

    case 5:
      {
        return false;
      }
  }
}

function mkFuncTypeRef(n$$2) {
  if (n$$2 === 1) {
    return (0, _il.mkILTyRef)((0, _ilxsettings.ilxFsharpCoreLibScopeRef)(), (0, _ilxsettings.ilxNamespace)() + ".FSharpFunc`2");
  } else {
    return (0, _il.mkILNestedTyRef)((0, _ilxsettings.ilxFsharpCoreLibScopeRef)(), (0, _Types.L)((0, _ilxsettings.ilxNamespace)() + ".OptimizedClosures", (0, _Types.L)()), "FSharpFunc`" + (0, _Util.int32ToString)(n$$2 + 1));
  }
}

const cenv = (0, _Types.declare)(function cenv(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.ilg = arg1;
  this.tref_Func = arg2;
  this.mkILTyFuncTy = arg3;
  this.addFieldGeneratedAttrs = arg4;
  this.addFieldNeverAttrs = arg5;
  this.addMethodGeneratedAttrs = arg6;
}, _Types.Record);
exports.cenv = cenv;

function addMethodGeneratedAttrsToTypeDef(cenv$$1, tdef) {
  return (0, _il.ILTypeDef$$With$$4DED7EA9)(tdef, null, null, null, null, null, null, (0, _il.mkILMethods)((0, _List.map)(function mapping(md) {
    return cenv$$1.addMethodGeneratedAttrs(md);
  }, (0, _il.ILMethodDefs$$get_AsList)((0, _il.ILTypeDef$$get_Methods)(tdef)))));
}

function newIlxPubCloEnv(ilg, addMethodGeneratedAttrs, addFieldGeneratedAttrs, addFieldNeverAttrs) {
  return new cenv(ilg, (0, _Array.initialize)(10, function (i) {
    return mkFuncTypeRef(i + 1);
  }, Array), new _il.ILType(3, "Boxed", (0, _il.mkILNonGenericTySpec)((0, _il.mkILTyRef)((0, _ilxsettings.ilxFsharpCoreLibScopeRef)(), (0, _ilxsettings.ilxNamespace)() + ".FSharpTypeFunc"))), addFieldGeneratedAttrs, addFieldNeverAttrs, addMethodGeneratedAttrs);
}

function mkILTyFuncTy(cenv$$2) {
  return cenv$$2.mkILTyFuncTy;
}

function mkILFuncTy(cenv$$3, dty, rty) {
  return (0, _il.mkILBoxedTy)(cenv$$3.tref_Func[0], (0, _Types.L)(dty, (0, _Types.L)(rty, (0, _Types.L)())));
}

function mkILCurriedFuncTy(cenv$$4, dtys, rty$$1) {
  return (0, _List.foldBack)(function (arg10$0040, arg20$0040) {
    return mkILFuncTy(cenv$$4, arg10$0040, arg20$0040);
  }, dtys, rty$$1);
}

function typ_Func(cenv$$5, dtys$$1, rty$$2) {
  const n$$3 = (0, _List.length)(dtys$$1) | 0;
  const tref = n$$3 <= 10 ? cenv$$5.tref_Func[n$$3 - 1] : mkFuncTypeRef(n$$3);
  return (0, _il.mkILBoxedTy)(tref, (0, _List.append)(dtys$$1, (0, _Types.L)(rty$$2, (0, _Types.L)())));
}

function mkTyOfApps(cenv$$6, apps$$2) {
  switch (apps$$2.tag) {
    case 1:
      {
        const rest$$14 = apps$$2.fields[1];
        const dty$$1 = apps$$2.fields[0];
        return mkILFuncTy(cenv$$6, dty$$1, mkTyOfApps(cenv$$6, rest$$14));
      }

    case 2:
      {
        const rty$$3 = apps$$2.fields[0];
        return rty$$3;
      }

    default:
      {
        return cenv$$6.mkILTyFuncTy;
      }
  }
}

function mkTyOfLambdas(cenv$$7, lam) {
  switch (lam.tag) {
    case 1:
      {
        const r$$2 = lam.fields[1];
        const d = lam.fields[0];
        return mkILFuncTy(cenv$$7, d.Type, mkTyOfLambdas(cenv$$7, r$$2));
      }

    case 0:
      {
        return cenv$$7.mkILTyFuncTy;
      }

    default:
      {
        const rty$$4 = lam.fields[0];
        return rty$$4;
      }
  }
}

function mkMethSpecForMultiApp(cenv$$8, argtys$0027, rty$$5) {
  const n$$4 = (0, _List.length)(argtys$0027) | 0;
  const formalArgTys = (0, _List.mapIndexed)(function (i$$1, _arg1$$6) {
    return new _il.ILType(7, "TypeVar", i$$1 & 0xFFFF);
  }, argtys$0027);
  const formalRetTy = new _il.ILType(7, "TypeVar", n$$4 & 0xFFFF);
  const inst = (0, _List.append)(argtys$0027, (0, _Types.L)(rty$$5, (0, _Types.L)()));

  if (n$$4 === 1) {
    return [true, (0, _il.mkILNonGenericInstanceMethSpecInTy)((0, _il.mkILBoxedTy)(cenv$$8.tref_Func[0], inst), "Invoke", formalArgTys, formalRetTy)];
  } else {
    return [false, (0, _il.mkILStaticMethSpecInTy)(mkILFuncTy(cenv$$8, (0, _List.item)(0, inst), (0, _List.item)(1, inst)), "InvokeFast", (0, _List.append)((0, _Types.L)(mkILCurriedFuncTy(cenv$$8, formalArgTys, formalRetTy), (0, _Types.L)()), formalArgTys), formalRetTy, (0, _List.tail)((0, _List.tail)(inst)))];
  }
}

function mkCallBlockForMultiValueApp(cenv$$9, doTailCall, args$0027, rty$0027) {
  const patternInput$$4 = mkMethSpecForMultiApp(cenv$$9, args$0027, rty$0027);
  return (0, _Types.L)(patternInput$$4[0] ? new _il.ILInstr(49, "I_callvirt", doTailCall, patternInput$$4[1], null) : new _il.ILInstr(48, "I_call", doTailCall, patternInput$$4[1], null), (0, _Types.L)());
}

function mkMethSpecForClosureCall(cenv$$10, clospec) {
  const patternInput$$5 = stripSupportedAbstraction((0, _ilx.IlxClosureSpec$$get_FormalLambdas)(clospec));

  if (!(patternInput$$5[0].tail == null)) {
    throw new Error("mkMethSpecForClosureCall: internal error");
  }

  const rty$0027$$1 = mkTyOfLambdas(cenv$$10, patternInput$$5[2]);
  const argtys$0027$$1 = (0, _il.typesOfILParams)(patternInput$$5[1]);
  const minst$0027 = (0, _ilx.IlxClosureSpec$$get_GenericArgs)(clospec);
  return (0, _il.mkILInstanceMethSpecInTy)((0, _ilx.IlxClosureSpec$$get_ILType)(clospec), "Invoke", argtys$0027$$1, rty$0027$$1, minst$0027);
}

function mkLdFreeVar(clospec$$1, fv) {
  return (0, _Types.L)(_il.mkLdarg0, (0, _Types.L)((0, _il.mkNormalLdfld)((0, _il.mkILFieldSpecInTy)((0, _ilx.IlxClosureSpec$$get_ILType)(clospec$$1), fv.fvName, fv.fvType)), (0, _Types.L)()));
}

function mkCallFunc(cenv$$11, allocLocal, numThisGenParams, tl, apps$$3) {
  const varCount = numThisGenParams | 0;

  const unwind = function unwind(apps$$4) {
    switch (apps$$4.tag) {
      case 1:
        {
          const rest$$17 = apps$$4.fields[1];
          const arg = apps$$4.fields[0];
          const patternInput$$7 = unwind(rest$$17);
          let patternInput$$8;
          const locn = allocLocal(arg);
          patternInput$$8 = [(0, _Types.L)((0, _il.mkStloc)(locn), (0, _Types.L)()), (0, _Types.L)((0, _il.mkLdloc)(locn), (0, _Types.L)())];
          return [(0, _Types.L)(patternInput$$8[0], patternInput$$7[0]), (0, _Types.L)(patternInput$$8[1], patternInput$$7[1])];
        }

      case 2:
        {
          return [(0, _Types.L)(), (0, _Types.L)()];
        }

      default:
        {
          const rest$$15 = apps$$4.fields[1];
          const actual = apps$$4.fields[0];
          const rest$$16 = (0, _ilx.instAppsAux)(varCount, (0, _Types.L)(actual, (0, _Types.L)()), rest$$15);
          const patternInput$$6 = unwind(rest$$16);
          return [(0, _Types.L)((0, _Types.L)(), patternInput$$6[0]), (0, _Types.L)((0, _Types.L)(), patternInput$$6[1])];
        }
    }
  };

  const computePreCall = function computePreCall(fst, n$$5, rest$$18, loaders$$2) {
    if (fst) {
      const patternInput$$9 = unwind(rest$$18);
      return [(0, _List.reverse)((0, _List.concat)(patternInput$$9[0])), (0, _List.concat)(patternInput$$9[1])];
    } else {
      return stripUpTo(n$$5, function (_arg1$$7) {
        if (_arg1$$7.tail != null) {
          const _y = _arg1$$7.tail;
          const _x = _arg1$$7.head;
          return true;
        } else {
          return false;
        }
      }, function (_arg2) {
        if (_arg2.tail != null) {
          const y$$8 = _arg2.tail;
          const x$$11 = _arg2.head;
          return [x$$11, y$$8];
        } else {
          throw new Error("no!");
        }
      }, loaders$$2);
    }
  };

  const buildApp = function buildApp(fst$$1, loaders$$3, apps$$5) {
    const matchValue = stripSupportedIndirectCall(apps$$5);
    var $target$$16;

    if (matchValue[1].tail == null) {
      if (!(matchValue[0].tail == null)) {
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
          const patternInput$$11 = (0, _List.fold)(function folder(tupledArg, _arg1$$8) {
            const patternInput$$10 = (0, _ilx.destTyFuncApp)(tupledArg[1]);
            const rest$0027$0027 = (0, _ilx.instAppsAux)(varCount, (0, _Types.L)(patternInput$$10[0], (0, _Types.L)()), patternInput$$10[1]);
            return [(0, _Types.L)(patternInput$$10[0], tupledArg[0]), rest$0027$0027];
          }, [(0, _Types.L)(), apps$$5], matchValue[0]);
          const instTyargs = (0, _List.reverse)(patternInput$$11[0]);
          const patternInput$$12 = computePreCall(fst$$1, 0, patternInput$$11[1], loaders$$3);
          const doTailCall$$1 = (0, _il.andTailness)(tl, false);
          const instrs1 = (0, _List.append)(patternInput$$12[0], (0, _Types.L)(new _il.ILInstr(49, "I_callvirt", doTailCall$$1, (0, _il.mkILInstanceMethSpecInTy)(cenv$$11.mkILTyFuncTy, "Specialize", (0, _Types.L)(), (0, _il.ILGlobals$$get_typ_Object)(cenv$$11.ilg), instTyargs), null), (0, _Types.L)()));
          let instrs1$$1;
          const rtnTy = mkTyOfApps(cenv$$11, patternInput$$11[1]);
          instrs1$$1 = (0, _List.append)(instrs1, (0, _Types.L)(new _il.ILInstr(76, "I_unbox_any", rtnTy), (0, _Types.L)()));

          if ((0, _Util.equals)(doTailCall$$1, new _il.ILTailcall(0, "Tailcall"))) {
            return instrs1$$1;
          } else {
            return (0, _List.append)(instrs1$$1, buildApp(false, patternInput$$12[1], patternInput$$11[1]));
          }
        }

      case 1:
        {
          var $target$$17;

          if (matchValue[0].tail == null) {
            if (!(matchValue[1].tail == null)) {
              $target$$17 = 0;
            } else {
              $target$$17 = 1;
            }
          } else {
            $target$$17 = 1;
          }

          switch ($target$$17) {
            case 0:
              {
                const patternInput$$13 = computePreCall(fst$$1, (0, _List.length)(matchValue[1]), matchValue[2], loaders$$3);
                const isLast = matchValue[2].tag === 2 ? true : false;
                const rty$$6 = mkTyOfApps(cenv$$11, matchValue[2]);
                const doTailCall$$2 = (0, _il.andTailness)(tl, isLast);
                const preCallBlock = patternInput$$13[0];

                if ((0, _Util.equals)(doTailCall$$2, new _il.ILTailcall(0, "Tailcall"))) {
                  const callBlock = mkCallBlockForMultiValueApp(cenv$$11, doTailCall$$2, matchValue[1], rty$$6);
                  return (0, _List.append)(preCallBlock, callBlock);
                } else {
                  const callBlock$$1 = mkCallBlockForMultiValueApp(cenv$$11, doTailCall$$2, matchValue[1], rty$$6);
                  const restBlock = buildApp(false, patternInput$$13[1], matchValue[2]);
                  return (0, _List.append)(preCallBlock, (0, _List.append)(callBlock$$1, restBlock));
                }
              }

            case 1:
              {
                var $target$$18;

                if (matchValue[0].tail == null) {
                  if (matchValue[1].tail == null) {
                    if (matchValue[2].tag === 2) {
                      $target$$18 = 0;
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
                      const _rty = matchValue[2].fields[0];
                      return (0, _Types.L)();
                    }

                  case 1:
                    {
                      throw new Error("*** Error: internal error: unknown indirect calling convention returned by stripSupportedIndirectCall");
                    }
                }
              }
          }
        }
    }
  };

  return buildApp(true, (0, _Types.L)(), apps$$3);
}

function convReturnInstr(ty, instr) {
  switch (instr.tag) {
    case 47:
      {
        return (0, _Types.L)(new _il.ILInstr(74, "I_box", ty), (0, _Types.L)(new _il.ILInstr(47, "I_ret"), (0, _Types.L)()));
      }

    case 48:
      {
        const varargs = instr.fields[2];
        const mspec = instr.fields[1];
        return (0, _Types.L)(new _il.ILInstr(48, "I_call", new _il.ILTailcall(1, "Normalcall"), mspec, varargs), (0, _Types.L)());
      }

    case 49:
      {
        const varargs$$1 = instr.fields[2];
        const mspec$$1 = instr.fields[1];
        return (0, _Types.L)(new _il.ILInstr(49, "I_callvirt", new _il.ILTailcall(1, "Normalcall"), mspec$$1, varargs$$1), (0, _Types.L)());
      }

    case 50:
      {
        const varargs$$2 = instr.fields[3];
        const ty$$1 = instr.fields[1];
        const mspec$$2 = instr.fields[2];
        return (0, _Types.L)(new _il.ILInstr(50, "I_callconstraint", new _il.ILTailcall(1, "Normalcall"), ty$$1, mspec$$2, varargs$$2), (0, _Types.L)());
      }

    case 51:
      {
        const varargs$$3 = instr.fields[2];
        const csig = instr.fields[1];
        return (0, _Types.L)(new _il.ILInstr(51, "I_calli", new _il.ILTailcall(1, "Normalcall"), csig, varargs$$3), (0, _Types.L)());
      }

    default:
      {
        return (0, _Types.L)(instr, (0, _Types.L)());
      }
  }
}

function convILMethodBody(thisClo, boxReturnTy, il) {
  const newMax = (thisClo == null ? il.MaxStack : il.MaxStack + 2) | 0;
  const code = il.Code;
  let code$$1;

  if (boxReturnTy != null) {
    const ty$$2 = boxReturnTy;
    code$$1 = (0, _ilmorph.morphILInstrsInILCode)(function (instr$$1) {
      return convReturnInstr(ty$$2, instr$$1);
    }, code);
  } else {
    code$$1 = code;
  }

  return new _il.ILMethodBody(true, newMax, il.NoInlining, il.AggressiveInlining, il.Locals, code$$1, il.SourceMarker);
}

function convMethodBody(thisClo$$1, _arg1$$9) {
  if (_arg1$$9.tag === 0) {
    const il$$1 = _arg1$$9.fields[0];
    return new _il.MethodBody(0, "IL", convILMethodBody(thisClo$$1, null, il$$1));
  } else {
    const x$$12 = _arg1$$9;
    return x$$12;
  }
}

function convMethodDef(thisClo$$2, md$$1) {
  const b$0027 = convMethodBody(thisClo$$2, (0, _il.ILLazyMethodBody$$get_Contents)((0, _il.ILMethodDef$$get_Body)(md$$1)));
  return (0, _il.ILMethodDef$$With$$Z3726C02C)(md$$1, null, null, null, null, null, null, (0, _il.mkMethBodyAux)(b$0027));
}

function mkILFreeVarForParam(p) {
  let nm;

  if (p.Name == null) {
    throw new Error("closure parameters must be given names");
  } else {
    const x$$13 = p.Name;
    nm = x$$13;
  }

  return (0, _ilx.mkILFreeVar)(nm, false, p.Type);
}

function mkILLocalForFreeVar(p$$1) {
  return (0, _il.mkILLocal)(p$$1.fvType, null);
}

function mkILCloFldSpecs(_cenv, flds) {
  return (0, _Array.toList)((0, _Array.map)(function mapping$$1(fv$$1) {
    return [fv$$1.fvName, fv$$1.fvType];
  }, flds, Array));
}

function mkILCloFldDefs(cenv$$12, flds$$1) {
  return (0, _List.map)(function mapping$$2(fv$$2) {
    const fdef = (0, _il.mkILInstanceField)(fv$$2.fvName, fv$$2.fvType, null, new _il.ILMemberAccess(6, "Public"));

    if (fv$$2.fvCompilerGenerated) {
      return cenv$$12.addFieldGeneratedAttrs(cenv$$12.addFieldNeverAttrs(fdef));
    } else {
      return fdef;
    }
  }, (0, _Array.toList)(flds$$1));
}

function convIlxClosureDef(cenv$$13, encl, td, clo) {
  var matchValue$$4, x$$21;
  let newTypeDefs;
  const nowFields = clo.cloFreeVars;
  const nowTypeRef = (0, _il.mkILNestedTyRef)(new _il.ILScopeRef(0, "Local"), encl, (0, _il.ILTypeDef$$get_Name)(td));
  const nowTy = (0, _il.mkILFormalBoxedTy)(nowTypeRef, (0, _il.ILTypeDef$$get_GenericParams)(td));
  const nowCloRef = new _ilx.IlxClosureRef(0, "IlxClosureRef", nowTypeRef, clo.cloStructure, nowFields);
  const nowCloSpec = (0, _ilx.mkILFormalCloRef)((0, _il.ILTypeDef$$get_GenericParams)(td), nowCloRef);
  const tagApp = (0, _illib.Lazy$$$force)(clo.cloCode).SourceMarker;
  const patternInput$$14 = stripSupportedAbstraction(clo.cloStructure);

  const rewriteCodeToAccessArgsFromEnv = function rewriteCodeToAccessArgsFromEnv(laterCloSpec, argToFreeVarMap) {
    const il$$2 = (0, _illib.Lazy$$$force)(clo.cloCode);
    const numLocals = (0, _List.length)(il$$2.Locals) | 0;

    const rewriteInstrToAccessArgsFromEnv = function rewriteInstrToAccessArgsFromEnv(instr$$2) {
      const fixupArg = function fixupArg(mkEnv, mkArg, n$$6) {
        const findMatchingArg = function findMatchingArg(l$$5, c) {
          findMatchingArg: while (true) {
            if (l$$5.tail == null) {
              return mkArg(n$$6 - (0, _List.length)(argToFreeVarMap) + 1);
            } else {
              const t = l$$5.tail;
              const m = l$$5.head[0] | 0;

              if (n$$6 === m) {
                return mkEnv(c);
              } else {
                l$$5 = t;
                c = c + 1;
                continue findMatchingArg;
              }
            }
          }
        };

        return findMatchingArg(argToFreeVarMap, 0);
      };

      switch (instr$$2.tag) {
        case 35:
          {
            const n$$7 = instr$$2.fields[0];
            return fixupArg(function (x$$14) {
              return (0, _Types.L)((0, _il.mkLdloc)(x$$14 + numLocals & 0xFFFF), (0, _Types.L)());
            }, function (x$$15) {
              return (0, _Types.L)((0, _il.mkLdarg)(x$$15 & 0xFFFF), (0, _Types.L)());
            }, ~~n$$7);
          }

        case 40:
          {
            const n$$8 = instr$$2.fields[0];
            return fixupArg(function (x$$16) {
              return (0, _Types.L)((0, _il.mkStloc)(x$$16 + numLocals & 0xFFFF), (0, _Types.L)());
            }, function (x$$17) {
              return (0, _Types.L)(new _il.ILInstr(40, "I_starg", x$$17 & 0xFFFF), (0, _Types.L)());
            }, ~~n$$8);
          }

        case 36:
          {
            const n$$9 = instr$$2.fields[0];
            return fixupArg(function (x$$18) {
              return (0, _Types.L)(new _il.ILInstr(39, "I_ldloca", x$$18 + numLocals & 0xFFFF), (0, _Types.L)());
            }, function (x$$19) {
              return (0, _Types.L)(new _il.ILInstr(36, "I_ldarga", x$$19 & 0xFFFF), (0, _Types.L)());
            }, ~~n$$9);
          }

        default:
          {
            const i$$2 = instr$$2;
            return (0, _Types.L)(i$$2, (0, _Types.L)());
          }
      }
    };

    const mainCode = (0, _ilmorph.morphILInstrsInILCode)(rewriteInstrToAccessArgsFromEnv, il$$2.Code);
    const ldenvCode = (0, _List.concat)((0, _List.mapIndexed)(function mapping$$3(n$$10, tupledArg$$1) {
      return (0, _List.append)(mkLdFreeVar(laterCloSpec, tupledArg$$1[1]), (0, _Types.L)((0, _il.mkStloc)(n$$10 + numLocals & 0xFFFF), (0, _Types.L)()));
    }, argToFreeVarMap));
    const code$$2 = (0, _il.prependInstrsToCode)(ldenvCode, mainCode);
    return new _il.ILMethodBody(il$$2.IsZeroInit, il$$2.MaxStack + 1, il$$2.NoInlining, il$$2.AggressiveInlining, (0, _List.append)(il$$2.Locals, (0, _List.map)(function ($arg$$1) {
      return mkILLocalForFreeVar($arg$$1[1]);
    }, argToFreeVarMap)), code$$2, il$$2.SourceMarker);
  };

  const matchValue$$2 = [patternInput$$14[0], patternInput$$14[1], patternInput$$14[2]];
  var $target$$22, nowParams, a, b;

  if (matchValue$$2[0].tail == null) {
    if (matchValue$$2[1].tail == null) {
      if (matchValue$$2[2].tag === 2) {
        $target$$22 = 2;
      } else {
        $target$$22 = 3;
        a = matchValue$$2[0];
        b = matchValue$$2[1];
      }
    } else {
      $target$$22 = 1;
      nowParams = matchValue$$2[1];
    }
  } else if (matchValue$$2[1].tail == null) {
    $target$$22 = 0;
  } else {
    $target$$22 = 3;
    a = matchValue$$2[0];
    b = matchValue$$2[1];
  }

  switch ($target$$22) {
    case 0:
      {
        const addedGenParams = patternInput$$14[0];
        const nowReturnTy = mkTyOfLambdas(cenv$$13, patternInput$$14[2]);

        if (patternInput$$14[2].tag === 2 ? false : true) {
          const nowStruct = (0, _List.foldBack)(function (x$$20, y$$9) {
            return new _ilx.IlxClosureLambdas(0, "Lambdas_forall", x$$20, y$$9);
          }, patternInput$$14[0], new _ilx.IlxClosureLambdas(2, "Lambdas_return", nowReturnTy));
          const laterTypeName = (0, _il.ILTypeDef$$get_Name)(td) + "T";
          const laterTypeRef = (0, _il.mkILNestedTyRef)(new _il.ILScopeRef(0, "Local"), encl, laterTypeName);
          const laterGenericParams = (0, _List.append)((0, _il.ILTypeDef$$get_GenericParams)(td), addedGenParams);
          const selfFreeVar = (0, _ilx.mkILFreeVar)((0, _PrettyNaming.CompilerGeneratedName)("self" + (0, _Util.int32ToString)(nowFields.length)), true, (0, _ilx.IlxClosureSpec$$get_ILType)(nowCloSpec));
          const laterFields = (0, _Array.append)(nowFields, [selfFreeVar], Array);
          const laterCloRef = new _ilx.IlxClosureRef(0, "IlxClosureRef", laterTypeRef, patternInput$$14[2], laterFields);
          const laterCloSpec$$1 = (0, _ilx.mkILFormalCloRef)(laterGenericParams, laterCloRef);
          const laterCode = rewriteCodeToAccessArgsFromEnv(laterCloSpec$$1, (0, _Types.L)([0, selfFreeVar], (0, _Types.L)()));
          const laterTypeDefs = convIlxClosureDef(cenv$$13, encl, (0, _il.ILTypeDef$$With$$4DED7EA9)(td, laterTypeName, null, null, null, laterGenericParams), new _ilx.IlxClosureInfo(patternInput$$14[2], laterFields, notlazy(laterCode)));
          const nowCode = (0, _il.mkILMethodBody)(false, (0, _Types.L)(), nowFields.length + 1, (0, _il.nonBranchingInstrsToCode)((0, _List.append)((0, _List.collect)(function mapping$$4(fv$$4) {
            return mkLdFreeVar(nowCloSpec, fv$$4);
          }, (0, _Array.toList)(nowFields)), (0, _List.append)((0, _Types.L)(_il.mkLdarg0, (0, _Types.L)()), (0, _Types.L)(new _il.ILInstr(53, "I_newobj", (0, _ilx.IlxClosureSpec$$get_Constructor)(laterCloSpec$$1), null), (0, _Types.L)())))), tagApp);
          const nowTypeDefs = convIlxClosureDef(cenv$$13, encl, td, new _ilx.IlxClosureInfo(nowStruct, clo.cloFreeVars, notlazy(nowCode)));
          const nowTypeDefs$$1 = (0, _List.map)(function mapping$$5(tdef$$1) {
            return addMethodGeneratedAttrsToTypeDef(cenv$$13, tdef$$1);
          }, nowTypeDefs);
          newTypeDefs = (0, _List.append)(nowTypeDefs$$1, laterTypeDefs);
        } else {
          const boxReturnTy$$1 = nowReturnTy;
          const nowApplyMethDef = (0, _il.mkILGenericVirtualMethod)("Specialize", new _il.ILMemberAccess(6, "Public"), addedGenParams, (0, _Types.L)(), (0, _il.mkILReturn)((0, _il.ILGlobals$$get_typ_Object)(cenv$$13.ilg)), new _il.MethodBody(0, "IL", convILMethodBody(nowCloSpec, boxReturnTy$$1, (0, _illib.Lazy$$$force)(clo.cloCode))));
          const ctorMethodDef = cenv$$13.addMethodGeneratedAttrs((0, _il.mkILStorageCtor)(null, (0, _Types.L)(_il.mkLdarg0, (0, _Types.L)((0, _il.mkNormalCall)((0, _il.mkILCtorMethSpecForTy)(cenv$$13.mkILTyFuncTy, (0, _Types.L)())), (0, _Types.L)())), nowTy, mkILCloFldSpecs(cenv$$13, nowFields), new _il.ILMemberAccess(0, "Assembly")));
          const cloTypeDef = (0, _il.ILTypeDef$$WithEncoding$$Z475EF4F1)((0, _il.ILTypeDef$$WithInitSemantics$$Z419EA49B)((0, _il.ILTypeDef$$WithSealed$$Z1FBCCD16)((0, _il.ILTypeDef$$WithAbstract$$Z1FBCCD16)((0, _il.ILTypeDef$$WithHasSecurity$$Z1FBCCD16)((0, _il.ILTypeDef$$WithImport$$Z1FBCCD16)((0, _il.ILTypeDef$$WithSpecialName$$Z1FBCCD16)((0, _il.ILTypeDef$$$Create$$659DAD29)((0, _il.ILTypeDef$$get_Name)(td), (0, _il.ILTypeDef$$get_Attributes)(td), new _il.ILTypeDefLayout(0, "Auto"), (0, _Types.L)(), (0, _il.ILTypeDef$$get_GenericParams)(td), cenv$$13.mkILTyFuncTy, (0, _il.mkILMethods)((0, _List.append)((0, _Types.L)(ctorMethodDef, (0, _Types.L)()), (0, _Types.L)(nowApplyMethDef, (0, _Types.L)()))), _il.emptyILTypeDefs, (0, _il.mkILFields)(mkILCloFldDefs(cenv$$13, nowFields)), _il.emptyILMethodImpls, _il.emptyILEvents, _il.emptyILProperties, _il.emptyILSecurityDecls, _il.emptyILCustomAttrs), false), false), false), false), true), new _il.ILTypeInit(0, "BeforeField")), new _il.ILDefaultPInvokeEncoding(0, "Ansi"));
          newTypeDefs = (0, _Types.L)(cloTypeDef, (0, _Types.L)());
        }

        break;
      }

    case 1:
      {
        const nowReturnTy$$1 = mkTyOfLambdas(cenv$$13, patternInput$$14[2]);

        if (patternInput$$14[2].tag === 2 ? false : true) {
          const nowStruct$$1 = (0, _List.foldBack)(function (l$$6, r$$3) {
            return new _ilx.IlxClosureLambdas(1, "Lambdas_lambda", l$$6, r$$3);
          }, nowParams, new _ilx.IlxClosureLambdas(2, "Lambdas_return", nowReturnTy$$1));
          const laterTypeName$$1 = (0, _il.ILTypeDef$$get_Name)(td) + "D";
          const laterTypeRef$$1 = (0, _il.mkILNestedTyRef)(new _il.ILScopeRef(0, "Local"), encl, laterTypeName$$1);
          const laterGenericParams$$1 = (0, _il.ILTypeDef$$get_GenericParams)(td);
          const selfFreeVar$$1 = (0, _ilx.mkILFreeVar)((0, _PrettyNaming.CompilerGeneratedName)("self"), true, (0, _ilx.IlxClosureSpec$$get_ILType)(nowCloSpec));
          const argToFreeVarMap$$1 = (0, _Types.L)([0, selfFreeVar$$1], (0, _List.mapIndexed)(function mapping$$6(i$$3, p$$3) {
            return [i$$3 + 1, mkILFreeVarForParam(p$$3)];
          }, nowParams));
          const laterFreeVars = (0, _Array.ofList)((0, _List.map)(function mapping$$7(tuple$$1) {
            return tuple$$1[1];
          }, argToFreeVarMap$$1), Array);
          const laterFields$$1 = (0, _Array.append)(nowFields, laterFreeVars, Array);
          const laterCloRef$$1 = new _ilx.IlxClosureRef(0, "IlxClosureRef", laterTypeRef$$1, patternInput$$14[2], laterFields$$1);
          const laterCloSpec$$2 = (0, _ilx.mkILFormalCloRef)(laterGenericParams$$1, laterCloRef$$1);
          const nowCode$$1 = (0, _il.mkILMethodBody)(false, (0, _Types.L)(), (0, _List.length)(argToFreeVarMap$$1) + nowFields.length, (0, _il.nonBranchingInstrsToCode)((0, _List.append)((0, _List.collect)(function mapping$$8(fv$$5) {
            return mkLdFreeVar(nowCloSpec, fv$$5);
          }, (0, _Array.toList)(nowFields)), (0, _List.append)((0, _List.map)(function mapping$$9(tupledArg$$2) {
            return (0, _il.mkLdarg)(tupledArg$$2[0] & 0xFFFF);
          }, argToFreeVarMap$$1), (0, _Types.L)(new _il.ILInstr(53, "I_newobj", (0, _ilx.IlxClosureSpec$$get_Constructor)(laterCloSpec$$2), null), (0, _Types.L)())))), tagApp);
          const nowTypeDefs$$2 = convIlxClosureDef(cenv$$13, encl, td, new _ilx.IlxClosureInfo(nowStruct$$1, clo.cloFreeVars, notlazy(nowCode$$1)));
          const laterCode$$1 = rewriteCodeToAccessArgsFromEnv(laterCloSpec$$2, argToFreeVarMap$$1);
          const laterTypeDefs$$1 = convIlxClosureDef(cenv$$13, encl, (0, _il.ILTypeDef$$With$$4DED7EA9)(td, laterTypeName$$1, null, null, null, laterGenericParams$$1), new _ilx.IlxClosureInfo(patternInput$$14[2], laterFields$$1, notlazy(laterCode$$1)));
          const nowTypeDefs$$3 = (0, _List.map)(function mapping$$10(tdef$$2) {
            return addMethodGeneratedAttrsToTypeDef(cenv$$13, tdef$$2);
          }, nowTypeDefs$$2);
          newTypeDefs = (0, _List.append)(nowTypeDefs$$3, laterTypeDefs$$1);
        } else {
          const nowEnvParentClass = typ_Func(cenv$$13, (0, _il.typesOfILParams)(nowParams), nowReturnTy$$1);
          let cloTypeDef$$1;
          const nowApplyMethDef$$1 = (0, _il.mkILNonGenericVirtualMethod)("Invoke", new _il.ILMemberAccess(6, "Public"), nowParams, (0, _il.mkILReturn)(nowReturnTy$$1), new _il.MethodBody(0, "IL", convILMethodBody(nowCloSpec, null, (0, _illib.Lazy$$$force)(clo.cloCode))));
          const ctorMethodDef$$1 = cenv$$13.addMethodGeneratedAttrs((0, _il.mkILStorageCtor)(null, (0, _Types.L)(_il.mkLdarg0, (0, _Types.L)((0, _il.mkNormalCall)((0, _il.mkILCtorMethSpecForTy)(nowEnvParentClass, (0, _Types.L)())), (0, _Types.L)())), nowTy, mkILCloFldSpecs(cenv$$13, nowFields), new _il.ILMemberAccess(0, "Assembly")));
          cloTypeDef$$1 = (0, _il.ILTypeDef$$WithInitSemantics$$Z419EA49B)((0, _il.ILTypeDef$$WithSealed$$Z1FBCCD16)((0, _il.ILTypeDef$$WithEncoding$$Z475EF4F1)((0, _il.ILTypeDef$$WithImport$$Z1FBCCD16)((0, _il.ILTypeDef$$WithAbstract$$Z1FBCCD16)((0, _il.ILTypeDef$$WithSpecialName$$Z1FBCCD16)((0, _il.ILTypeDef$$WithHasSecurity$$Z1FBCCD16)((0, _il.ILTypeDef$$$Create$$659DAD29)((0, _il.ILTypeDef$$get_Name)(td), (0, _il.ILTypeDef$$get_Attributes)(td), new _il.ILTypeDefLayout(0, "Auto"), (0, _Types.L)(), (0, _il.ILTypeDef$$get_GenericParams)(td), nowEnvParentClass, (0, _il.mkILMethods)((0, _List.append)((0, _Types.L)(ctorMethodDef$$1, (0, _Types.L)()), (0, _Types.L)(nowApplyMethDef$$1, (0, _Types.L)()))), _il.emptyILTypeDefs, (0, _il.mkILFields)(mkILCloFldDefs(cenv$$13, nowFields)), _il.emptyILMethodImpls, _il.emptyILEvents, _il.emptyILProperties, _il.emptyILSecurityDecls, _il.emptyILCustomAttrs), false), false), false), false), new _il.ILDefaultPInvokeEncoding(0, "Ansi")), true), new _il.ILTypeInit(0, "BeforeField"));
          newTypeDefs = (0, _Types.L)(cloTypeDef$$1, (0, _Types.L)());
        }

        break;
      }

    case 2:
      {
        const cloCode$0027 = (0, _il.ILTypeDef$$get_Extends)(td) != null ? convILMethodBody(nowCloSpec, null, (0, _illib.Lazy$$$force)(clo.cloCode)) : (0, _il.ILMethodDef$$get_MethodBody)((0, _il.mkILNonGenericEmptyCtor)(null, (0, _il.ILGlobals$$get_typ_Object)(cenv$$13.ilg)));
        let ctorMethodDef$$2;
        const flds$$2 = mkILCloFldSpecs(cenv$$13, nowFields);
        ctorMethodDef$$2 = (0, _il.mkILCtor)(new _il.ILMemberAccess(6, "Public"), (0, _List.map)(function (tupledArg$$3) {
          return (0, _il.mkILParamNamed)(tupledArg$$3[0], tupledArg$$3[1]);
        }, flds$$2), (0, _il.mkMethodBody)(cloCode$0027.IsZeroInit, cloCode$0027.Locals, cloCode$0027.MaxStack, (0, _il.prependInstrsToCode)((0, _List.concat)((0, _List.mapIndexed)(function (n$$12, tupledArg$$4) {
          return (0, _Types.L)(_il.mkLdarg0, (0, _Types.L)((0, _il.mkLdarg)(n$$12 + 1 & 0xFFFF), (0, _Types.L)((0, _il.mkNormalStfld)((0, _il.mkILFieldSpecInTy)(nowTy, tupledArg$$4[0], tupledArg$$4[1])), (0, _Types.L)())));
        }, flds$$2)), cloCode$0027.Code), null));
        const cloTypeDef$$2 = (0, _il.ILTypeDef$$With$$4DED7EA9)(td, (0, _il.ILTypeDef$$get_Name)(td), null, null, (0, _il.ILTypeDef$$get_Implements)(td), (0, _il.ILTypeDef$$get_GenericParams)(td), (0, _Option.some)((matchValue$$4 = (0, _il.ILTypeDef$$get_Extends)(td), matchValue$$4 != null ? (x$$21 = matchValue$$4, x$$21) : (0, _il.ILGlobals$$get_typ_Object)(cenv$$13.ilg))), (0, _il.mkILMethods)((0, _Types.L)(ctorMethodDef$$2, (0, _List.map)(function (md$$2) {
          return convMethodDef(nowCloSpec, md$$2);
        }, (0, _il.ILMethodDefs$$get_AsList)((0, _il.ILTypeDef$$get_Methods)(td))))), null, (0, _il.mkILFields)((0, _List.append)(mkILCloFldDefs(cenv$$13, nowFields), (0, _il.ILFieldDefs$$get_AsList)((0, _il.ILTypeDef$$get_Fields)(td)))));
        newTypeDefs = (0, _Types.L)(cloTypeDef$$2, (0, _Types.L)());
        break;
      }

    case 3:
      {
        throw new Error("Unexpected unsupported abstraction sequence, #tyabs = " + (0, _Util.int32ToString)((0, _List.length)(a)) + ", #tmabs = " + (0, _Util.int32ToString)((0, _List.length)(b)));
        break;
      }
  }

  return newTypeDefs;
}