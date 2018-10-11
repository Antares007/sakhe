"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FableCompiler$$$$002Ector$$168196CA = FableCompiler$$$$002Ector$$168196CA;
exports.FableCompiler$$get_UsedVarNames = FableCompiler$$get_UsedVarNames;
exports.FableCompiler$$get_Dependencies = FableCompiler$$get_Dependencies;
exports.FableCompiler$$AddUsedVarName$$Z721C83C5 = FableCompiler$$AddUsedVarName$$Z721C83C5;
exports.FableCompiler$$AddInlineExpr$$4468F7A4 = FableCompiler$$AddInlineExpr$$4468F7A4;
exports.getRootModuleFullName = getRootModuleFullName;
exports.transformFile = transformFile;
exports.FableCompiler = void 0;

var _FSharp2Fable = require("./FSharp2Fable.Util");

var _Symbols = require("../symbols/Symbols");

var _Option = require("../fable-core.2.0.3/Option");

var _AST = require("../AST/AST.Fable");

var _Transforms = require("./Transforms.Util");

var _Util = require("../fable-core.2.0.3/Util");

var _Types = require("../fable-core.2.0.3/Types");

var _List = require("../fable-core.2.0.3/List");

var _Map = require("../fable-core.2.0.3/Map");

var _Replacements = require("./Replacements");

var _Prelude = require("../Global/Prelude");

var _Seq = require("../fable-core.2.0.3/Seq");

var _MonadicTrampoline = require("./MonadicTrampoline");

var _Exprs = require("../symbols/Exprs");

var _ServiceAssemblyContent = require("../service/ServiceAssemblyContent");

var _AST2 = require("../AST/AST.Common");

var _String = require("../fable-core.2.0.3/String");

var _Set = require("../fable-core.2.0.3/Set");

var _Compiler = require("../Global/Compiler");

var _Inject = require("./Inject");

var _range = require("../fsharp/range");

function transformNewUnion(com, ctx, r, fsType, unionCase, argExprs) {
  const activePatternResult68317 = (0, _FSharp2Fable.Patterns$$$$007COptionUnion$007CListUnion$007CErasedUnion$007CStringEnum$007CDiscriminatedUnion$007C)(fsType);

  if (activePatternResult68317.tag === 3) {
    const enumName = (0, _Option.defaultArg)((0, _Symbols.FSharpEntity$$get_TryFullName)(activePatternResult68317.fields[0][0]), "UNKNOWN");

    if (argExprs.tail == null) {
      return new _AST.Expr(0, "Value", new _AST.ValueKind(8, "Enum", new _AST.EnumKind(1, "StringEnum", (0, _FSharp2Fable.Helpers$$$applyCaseRule)(activePatternResult68317.fields[0][1], unionCase)), enumName));
    } else {
      return (0, _Transforms.Log$$$addErrorAndReturnNull)(com, ctx.InlinePath, r, "StringEnum types cannot have fields: " + enumName);
    }
  } else if (activePatternResult68317.tag === 0) {
    const typ$$1 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com, ctx.GenericArgs, activePatternResult68317.fields[0]);
    let expr$$2;

    if (argExprs.tail != null) {
      if (argExprs.tail.tail == null) {
        expr$$2 = argExprs.head;
      } else {
        throw new Error("Unexpected args for Option constructor");
      }
    } else {
      expr$$2 = null;
    }

    return new _AST.Expr(0, "Value", new _AST.ValueKind(9, "NewOption", expr$$2, typ$$1));
  } else if (activePatternResult68317.tag === 1) {
    const typ$$3 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com, ctx.GenericArgs, activePatternResult68317.fields[0]);
    let headAndTail;
    var $target$$24, head, tail;

    if (argExprs.tail != null) {
      if (argExprs.tail.tail != null) {
        if (argExprs.tail.tail.tail == null) {
          $target$$24 = 1;
          head = argExprs.head;
          tail = argExprs.tail.head;
        } else {
          $target$$24 = 2;
        }
      } else {
        $target$$24 = 2;
      }
    } else {
      $target$$24 = 0;
    }

    switch ($target$$24) {
      case 0:
        {
          headAndTail = null;
          break;
        }

      case 1:
        {
          headAndTail = [head, tail];
          break;
        }

      case 2:
        {
          throw new Error("Unexpected args for List constructor");
          break;
        }
    }

    return new _AST.Expr(0, "Value", new _AST.ValueKind(11, "NewList", headAndTail, typ$$3));
  } else if (activePatternResult68317.tag === 4) {
    const genArgs$$3 = (0, _FSharp2Fable.TypeHelpers$$$makeGenArgs)(com, ctx.GenericArgs, activePatternResult68317.fields[0][1]);
    return new _AST.Expr(0, "Value", new _AST.ValueKind(14, "NewUnion", argExprs, unionCase, activePatternResult68317.fields[0][0], genArgs$$3));
  } else {
    var $target$$25, expr;

    if (argExprs.tail != null) {
      if (argExprs.tail.tail == null) {
        $target$$25 = 0;
        expr = argExprs.head;
      } else {
        $target$$25 = 1;
      }
    } else {
      $target$$25 = 1;
    }

    switch ($target$$25) {
      case 0:
        {
          const genArgs$$1 = (0, _FSharp2Fable.TypeHelpers$$$makeGenArgs)(com, ctx.GenericArgs, activePatternResult68317.fields[0][1]);
          return new _AST.Expr(0, "Value", new _AST.ValueKind(15, "NewErasedUnion", expr, genArgs$$1));
        }

      case 1:
        {
          return (0, _Transforms.Log$$$addErrorAndReturnNull)(com, ctx.InlinePath, r, "Erased Union Cases must have one single field: " + (0, _FSharp2Fable.Helpers$$$getFsTypeFullName)(fsType));
        }
    }
  }
}

function transformTraitCall(com$$1, ctx$$1, r$$1, typ$$4, sourceTypes, traitName, flags, argTypes, argExprs$$1) {
  var thisArg$$1, args$$1, argTypes$$4;

  const makeCallInfo = function makeCallInfo(traitName$$1, entityFullName, argTypes$$1, genArgs$$4) {
    return new _AST.ReplaceCallInfo(traitName$$1, new _Util.Lazy(function () {
      return "";
    }), argTypes$$1, new _AST.SpreadKind(0, "NoSpread"), entityFullName, genArgs$$4.tail != null ? genArgs$$4.tail.tail == null ? (0, _Types.L)(["T", genArgs$$4.head], (0, _Types.L)()) : (0, _List.mapIndexed)(function mapping(i, genArg$$1) {
      return ["T" + (0, _Util.int32ToString)(i), genArg$$1];
    }, genArgs$$4) : (0, _Types.L)());
  };

  const resolveMemberCall = function resolveMemberCall(entity, genArgs$$6, membCompiledName, isInstance, argTypes$$2, thisArg, args) {
    const genArgs$$7 = (0, _FSharp2Fable.Util$$$matchGenericParams)(genArgs$$6, (0, _Symbols.FSharpEntity$$get_GenericParameters)(entity));
    return (0, _Option.defaultArg)((0, _FSharp2Fable.TypeHelpers$$$tryFindMember)(com$$1, entity, (0, _Map.ofSeq)(genArgs$$7, {
      Compare: _Util.comparePrimitives
    }), membCompiledName, isInstance, argTypes$$2), null, function mapping$$1(memb) {
      return (0, _FSharp2Fable.Util$$$makeCallFrom)(com$$1, ctx$$1, r$$1, typ$$4, false, [], thisArg, args, memb);
    });
  };

  const isInstance$$1 = flags.IsInstance;
  const argTypes$$3 = (0, _List.map)(function (arg20$0040) {
    return (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$1, ctx$$1.GenericArgs, arg20$0040);
  }, argTypes);
  const argExprs$$2 = (0, _List.map)(function (e) {
    return com$$1.Transform(ctx$$1, e);
  }, argExprs$$1);
  let patternInput;
  const matchValue = [argExprs$$2, argTypes$$3];
  var $target$$26, argTypes$$5, args$$2, thisArg$$2;

  if (matchValue[0].tail != null) {
    if (matchValue[1].tail != null) {
      if (thisArg$$1 = matchValue[0].head, (args$$1 = matchValue[0].tail, (argTypes$$4 = matchValue[1].tail, isInstance$$1))) {
        $target$$26 = 0;
        argTypes$$5 = matchValue[1].tail;
        args$$2 = matchValue[0].tail;
        thisArg$$2 = matchValue[0].head;
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
        patternInput = [thisArg$$2, args$$2, argTypes$$5];
        break;
      }

    case 1:
      {
        patternInput = [null, matchValue[0], matchValue[1]];
        break;
      }
  }

  return (0, _Option.defaultArgWith)((0, _Seq.tryPick)(function chooser$$1(t) {
    const matchValue$$1 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$1, ctx$$1.GenericArgs, t);

    switch (matchValue$$1.tag) {
      case 5:
        {
          const info = makeCallInfo(traitName, "System.String", patternInput[2], (0, _Types.L)());
          return (0, _Replacements.strings)(com$$1, ctx$$1, r$$1, typ$$4, info, patternInput[0], patternInput[1]);
        }

      case 9:
        {
          const genArg$$2 = matchValue$$1.fields[0];
          const info$$1 = makeCallInfo(traitName, "Microsoft.FSharp.Core.FSharpOption`1", patternInput[2], (0, _Types.L)(genArg$$2, (0, _Types.L)()));
          return (0, _Replacements.options)(com$$1, ctx$$1, r$$1, typ$$4, info$$1, patternInput[0], patternInput[1]);
        }

      case 11:
        {
          const genArg$$3 = matchValue$$1.fields[0];
          const info$$2 = makeCallInfo(traitName, "System.Array", patternInput[2], (0, _Types.L)(genArg$$3, (0, _Types.L)()));
          return (0, _Replacements.arrays)(com$$1, ctx$$1, r$$1, typ$$4, info$$2, patternInput[0], patternInput[1]);
        }

      case 12:
        {
          const genArg$$4 = matchValue$$1.fields[0];
          const info$$3 = makeCallInfo(traitName, "Microsoft.FSharp.Collections.FSharpList`1", patternInput[2], (0, _Types.L)(genArg$$4, (0, _Types.L)()));
          return (0, _Replacements.lists)(com$$1, ctx$$1, r$$1, typ$$4, info$$3, patternInput[0], patternInput[1]);
        }

      case 16:
        {
          const genArgs$$8 = matchValue$$1.fields[1];
          const entity$$1 = matchValue$$1.fields[0];

          if (((isInstance$$1 ? (0, _Symbols.FSharpEntity$$get_IsFSharpRecord)(entity$$1) : false) ? patternInput[1].tail == null : false) ? patternInput[0] != null : false) {
            const fieldName = (0, _Prelude.Naming$$$removeGetSetPrefix)(traitName);
            return (0, _Option.defaultArgWith)((0, _Seq.tryPick)(function chooser(fi) {
              if ((0, _Symbols.FSharpField$$get_Name)(fi) === fieldName) {
                const kind = new _AST.GetKind(2, "FieldGet", (0, _Symbols.FSharpField$$get_Name)(fi), (0, _Symbols.FSharpField$$get_IsMutable)(fi), (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$1, (0, _Map.empty)({
                  Compare: _Util.comparePrimitives
                }), (0, _Symbols.FSharpField$$get_FieldType)(fi)));
                return new _AST.Expr(9, "Get", patternInput[0], kind, typ$$4, r$$1);
              } else {
                return null;
              }
            }, (0, _Symbols.FSharpEntity$$get_FSharpFields)(entity$$1)), function ifNoneThunk() {
              return resolveMemberCall(entity$$1, genArgs$$8, traitName, isInstance$$1, patternInput[2], patternInput[0], patternInput[1]);
            });
          } else {
            return resolveMemberCall(entity$$1, genArgs$$8, traitName, isInstance$$1, patternInput[2], patternInput[0], patternInput[1]);
          }
        }

      default:
        {
          return null;
        }
    }
  }, sourceTypes), function defThunk() {
    return (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$1, ctx$$1.InlinePath, r$$1, "Cannot resolve trait call " + traitName);
  });
}

function transformObjExpr(com$$2, ctx$$2, objType, baseCallExpr, overrides, otherOverrides) {
  const mapOverride = function mapOverride(over) {
    const builder$0040 = _MonadicTrampoline.trampoline;
    return (0, _MonadicTrampoline.TrampolineBuilder$$Delay$$Z6B697DAB)(builder$0040, function () {
      const patternInput$$1 = (0, _FSharp2Fable.Util$$$bindMemberArgs)(com$$2, ctx$$2, (0, _Exprs.FSharpObjectExprOverride$$get_CurriedParameterGroups)(over));
      return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040, transformExpr(com$$2, patternInput$$1[0], (0, _Exprs.FSharpObjectExprOverride$$get_Body)(over)), function (_arg1) {
        var name$$2, name;
        const body = _arg1;
        const value = new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", patternInput$$1[1]), body, null);
        let patternInput$$2;
        const matchValue$$2 = (0, _Symbols.FSharpAbstractSignature$$get_Name)((0, _Exprs.FSharpObjectExprOverride$$get_Signature)(over));
        var $target$$27, name$$1;
        const activePatternResult68359 = (0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("get_", matchValue$$2);

        if (activePatternResult68359 != null) {
          if (name = activePatternResult68359, (0, _FSharp2Fable.Util$$$countNonCurriedParamsForOverride)(over) === 0) {
            $target$$27 = 0;
            name$$1 = activePatternResult68359;
          } else {
            $target$$27 = 1;
          }
        } else {
          $target$$27 = 1;
        }

        switch ($target$$27) {
          case 0:
            {
              patternInput$$2 = [name$$1, new _AST.ObjectMemberKind(2, "ObjectGetter")];
              break;
            }

          case 1:
            {
              var $target$$28, name$$3;
              const activePatternResult68357 = (0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("set_", matchValue$$2);

              if (activePatternResult68357 != null) {
                if (name$$2 = activePatternResult68357, (0, _FSharp2Fable.Util$$$countNonCurriedParamsForOverride)(over) === 1) {
                  $target$$28 = 0;
                  name$$3 = activePatternResult68357;
                } else {
                  $target$$28 = 1;
                }
              } else {
                $target$$28 = 1;
              }

              switch ($target$$28) {
                case 0:
                  {
                    patternInput$$2 = [name$$3, new _AST.ObjectMemberKind(3, "ObjectSetter")];
                    break;
                  }

                case 1:
                  {
                    const name$$4 = matchValue$$2;

                    if ((0, _Symbols.FSharpType$$get_HasTypeDefinition)((0, _Symbols.FSharpAbstractSignature$$get_DeclaringType)((0, _Exprs.FSharpObjectExprOverride$$get_Signature)(over)))) {
                      const tdef$$2 = (0, _Symbols.FSharpType$$get_TypeDefinition)((0, _Symbols.FSharpAbstractSignature$$get_DeclaringType)((0, _Exprs.FSharpObjectExprOverride$$get_Signature)(over)));
                      const matchValue$$3 = (0, _Symbols.FSharpEntity$$get_TryFullName)(tdef$$2);
                      var $target$$29;

                      if (matchValue$$3 != null) {
                        if (matchValue$$3 === "System.Collections.Generic.IEnumerable`1") {
                          $target$$29 = 0;
                        } else {
                          $target$$29 = 1;
                        }
                      } else {
                        $target$$29 = 1;
                      }

                      switch ($target$$29) {
                        case 0:
                          {
                            patternInput$$2 = [name$$4, new _AST.ObjectMemberKind(4, "ObjectIterator")];
                            break;
                          }

                        case 1:
                          {
                            let hasSpread;

                            const _arg2 = (0, _Seq.tryFind)(function predicate(x) {
                              return (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(x) === (0, _Symbols.FSharpAbstractSignature$$get_Name)((0, _Exprs.FSharpObjectExprOverride$$get_Signature)(over));
                            }, (0, _ServiceAssemblyContent.FSharpEntity$002Eget_TryGetMembersFunctionsAndValues)(tdef$$2));

                            if (_arg2 == null) {
                              hasSpread = false;
                            } else {
                              const m = _arg2;
                              hasSpread = (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(m);
                            }

                            patternInput$$2 = [name$$4, new _AST.ObjectMemberKind(1, "ObjectMethod", hasSpread)];
                            break;
                          }
                      }
                    } else {
                      patternInput$$2 = [name$$4, new _AST.ObjectMemberKind(1, "ObjectMethod", false)];
                    }

                    break;
                  }
              }

              break;
            }
        }

        return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040, new _AST.ObjectMember(0, "ObjectMember", (0, _Transforms.AST$$$makeStrConst)(patternInput$$2[0]), value, patternInput$$2[1]));
      });
    });
  };

  const builder$0040$$1 = _MonadicTrampoline.trampoline;
  return (0, _MonadicTrampoline.TrampolineBuilder$$Delay$$Z6B697DAB)(builder$0040$$1, function () {
    var builder$0040$$2;
    return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$1, (builder$0040$$2 = _MonadicTrampoline.trampoline, (0, _MonadicTrampoline.TrampolineBuilder$$Delay$$Z6B697DAB)(builder$0040$$2, function () {
      var baseType;
      var $target$$30, baseArgs, baseCall, genArgs1, genArgs2;
      const activePatternResult68366 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(baseCallExpr);

      if (activePatternResult68366 != null) {
        if (activePatternResult68366[0] == null) {
          $target$$30 = 0;
          baseArgs = activePatternResult68366[4];
          baseCall = activePatternResult68366[1];
          genArgs1 = activePatternResult68366[2];
          genArgs2 = activePatternResult68366[3];
        } else {
          $target$$30 = 1;
        }
      } else {
        $target$$30 = 1;
      }

      switch ($target$$30) {
        case 0:
          {
            const matchValue$$4 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(baseCall);
            var $target$$31, baseType$$1;

            if (matchValue$$4 != null) {
              if (baseType = matchValue$$4, !(0, _Util.equals)((0, _Symbols.FSharpEntity$$get_TryFullName)(baseType), "System.Object")) {
                $target$$31 = 0;
                baseType$$1 = matchValue$$4;
              } else {
                $target$$31 = 1;
              }
            } else {
              $target$$31 = 1;
            }

            switch ($target$$31) {
              case 0:
                {
                  const typ$$5 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$2, ctx$$2.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(baseCallExpr));
                  return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$2, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f(fsExpr) {
                    return transformExpr(com$$2, ctx$$2, fsExpr);
                  }, baseArgs), function (_arg3) {
                    const baseArgs$$1 = _arg3;
                    const genArgs$$9 = (0, _Seq.map)(function mapping$$2(arg20$0040$$1) {
                      return (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$2, ctx$$2.GenericArgs, arg20$0040$$1);
                    }, (0, _List.append)(genArgs1, genArgs2));
                    return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$2, (0, _FSharp2Fable.Util$$$makeCallFrom)(com$$2, ctx$$2, null, typ$$5, false, genArgs$$9, null, baseArgs$$1, baseCall));
                  });
                }

              case 1:
                {
                  return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$2, null);
                }
            }
          }

        case 1:
          {
            return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$2, null);
          }
      }
    })), function (_arg4) {
      const baseCall$$1 = _arg4;
      return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$1, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$2(tupledArg) {
        return (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), mapOverride, tupledArg[1]);
      }, (0, _Types.L)([objType, overrides], otherOverrides)), function (_arg5) {
        const members = _arg5;
        return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$1, new _AST.Expr(6, "ObjectExpr", (0, _List.concat)(members), (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$2, ctx$$2.GenericArgs, objType), baseCall$$1));
      });
    });
  });
}

function transformDelegate(com$$4, ctx$$5, delegateType, expr$$3) {
  const builder$0040$$3 = _MonadicTrampoline.trampoline;
  return (0, _MonadicTrampoline.TrampolineBuilder$$Delay$$Z6B697DAB)(builder$0040$$3, function () {
    return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$3, transformExpr(com$$4, ctx$$5, expr$$3), function (_arg6) {
      var lambda;
      const expr$$4 = _arg6;
      const matchValue$$5 = (0, _FSharp2Fable.Helpers$$$tryDefinition)(delegateType);
      var $target$$32;

      if (matchValue$$5 != null) {
        if (matchValue$$5[1] != null) {
          if (matchValue$$5[1] === "System.Func`1") {
            $target$$32 = 0;
          } else {
            $target$$32 = 1;
          }
        } else {
          $target$$32 = 1;
        }
      } else {
        $target$$32 = 1;
      }

      switch ($target$$32) {
        case 0:
          {
            return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$3, expr$$4);
          }

        case 1:
          {
            const matchValue$$6 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$4, ctx$$5.GenericArgs, delegateType);
            var $target$$33, argTypes$$8;

            if (matchValue$$6.tag === 13) {
              if (matchValue$$6.fields[0].tag === 1) {
                $target$$33 = 0;
                argTypes$$8 = matchValue$$6.fields[0].fields[0];
              } else {
                $target$$33 = 1;
              }
            } else {
              $target$$33 = 1;
            }

            switch ($target$$33) {
              case 0:
                {
                  const arity = (0, _List.length)(argTypes$$8) | 0;
                  const activePatternResult68381 = (0, _Transforms.AST$$$$007CLambdaUncurriedAtCompileTime$007C_$007C)(arity, expr$$4);
                  return activePatternResult68381 != null ? (lambda = activePatternResult68381, (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$3, lambda)) : (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$3, (0, _Replacements.uncurryExprAtRuntime)(arity, expr$$4));
                }

              case 1:
                {
                  return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$3, expr$$4);
                }
            }
          }
      }
    });
  });
}

function transformUnionCaseTest(com$$5, ctx$$6, r$$2, unionExpr, fsType$$1, unionCase$$1) {
  const builder$0040$$4 = _MonadicTrampoline.trampoline;
  return (0, _MonadicTrampoline.TrampolineBuilder$$Delay$$Z6B697DAB)(builder$0040$$4, function () {
    return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$4, transformExpr(com$$5, ctx$$6, unionExpr), function (_arg7) {
      const unionExpr$$1 = _arg7;
      const activePatternResult68391 = (0, _FSharp2Fable.Patterns$$$$007COptionUnion$007CListUnion$007CErasedUnion$007CStringEnum$007CDiscriminatedUnion$007C)(fsType$$1);

      if (activePatternResult68391.tag === 0) {
        const kind$$3 = new _AST.TestKind(2, "OptionTest", (0, _Symbols.FSharpUnionCase$$get_Name)(unionCase$$1) !== "None");
        return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$4, new _AST.Expr(7, "Test", unionExpr$$1, kind$$3, r$$2));
      } else if (activePatternResult68391.tag === 1) {
        const kind$$4 = new _AST.TestKind(3, "ListTest", (0, _Symbols.FSharpUnionCase$$get_CompiledName)(unionCase$$1) !== "Empty");
        return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$4, new _AST.Expr(7, "Test", unionExpr$$1, kind$$4, r$$2));
      } else if (activePatternResult68391.tag === 3) {
        return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$4, (0, _Transforms.AST$$$makeEqOp)(r$$2, unionExpr$$1, (0, _FSharp2Fable.Helpers$$$applyCaseRule)(activePatternResult68391.fields[0][1], unionCase$$1), new _AST2.BinaryOperator(2, "BinaryEqualStrict")));
      } else if (activePatternResult68391.tag === 4) {
        const kind$$5 = new _AST.TestKind(4, "UnionCaseTest", unionCase$$1, activePatternResult68391.fields[0][0]);
        return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$4, new _AST.Expr(7, "Test", unionExpr$$1, kind$$5, r$$2));
      } else {
        if ((0, _Util.count)((0, _Symbols.FSharpUnionCase$$get_UnionCaseFields)(unionCase$$1)) !== 1) {
          return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$4, (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$5, ctx$$6.InlinePath, r$$2, "Erased Union Cases must have one single field: " + (0, _FSharp2Fable.Helpers$$$getFsTypeFullName)(fsType$$1)));
        } else {
          const fi$$1 = (0, _Symbols.FSharpUnionCase$$get_UnionCaseFields)(unionCase$$1)[0];
          let typ$$7;

          if ((0, _Symbols.FSharpType$$get_IsGenericParameter)((0, _Symbols.FSharpField$$get_FieldType)(fi$$1))) {
            const name$$6 = (0, _Symbols.FSharpGenericParameter$$get_Name)((0, _Symbols.FSharpType$$get_GenericParameter)((0, _Symbols.FSharpField$$get_FieldType)(fi$$1)));
            const index = (0, _Seq.findIndex)(function predicate$$1(arg) {
              return (0, _Symbols.FSharpGenericParameter$$get_Name)(arg) === name$$6;
            }, (0, _Symbols.FSharpEntity$$get_GenericParameters)(activePatternResult68391.fields[0][0])) | 0;
            typ$$7 = activePatternResult68391.fields[0][1][index];
          } else {
            typ$$7 = (0, _Symbols.FSharpField$$get_FieldType)(fi$$1);
          }

          const kind$$2 = new _AST.TestKind(0, "TypeTest", (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$5, ctx$$6.GenericArgs, typ$$7));
          return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$4, new _AST.Expr(7, "Test", unionExpr$$1, kind$$2, r$$2));
        }
      }
    });
  });
}

function transformExpr(com$$6, ctx$$7, fsExpr$$1) {
  const builder$0040$$5 = _MonadicTrampoline.trampoline;
  return (0, _MonadicTrampoline.TrampolineBuilder$$Delay$$Z6B697DAB)(builder$0040$$5, function () {
    var builder$0040$$6, builder$0040$$7, builder$0040$$8, builder$0040$$9, baseEnt, unionCase$$3, typ$$24, next2, next1, field$$3, current, _value, optionProp, memb$$6, genArgs$$17, m$$1, e2, e1, args$$15, _genArgs$$2, var$$$2, genArgs$$14, args$$11;

    const activePatternResult68546 = (0, _FSharp2Fable.Patterns$$$$007COptimizedOperator$007C_$007C)(fsExpr$$1);

    if (activePatternResult68546 != null) {
      const patternInput$$3 = [(0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$1))];
      const argTypes$$10 = (0, _List.map)(function mapping$$3(arg20$0040$$2) {
        return (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, arg20$0040$$2);
      }, activePatternResult68546[3]);
      return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$4(fsExpr$$2) {
        return transformExpr(com$$6, ctx$$7, fsExpr$$2);
      }, activePatternResult68546[4]), function (_arg8) {
        var memb$$2;
        const args$$6 = _arg8;
        let entity$$2;

        if (activePatternResult68546[1] == null) {
          entity$$2 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(activePatternResult68546[0]);
        } else {
          const comp$$1 = activePatternResult68546[1];
          entity$$2 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(comp$$1);
        }

        const membOpt = (0, _FSharp2Fable.TypeHelpers$$$tryFindMember)(com$$6, entity$$2, ctx$$7.GenericArgs, activePatternResult68546[2], false, argTypes$$10);
        return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, membOpt == null ? (0, _String.toFail)((0, _String.printf)("Cannot find member %A.%A"))((0, _Symbols.FSharpEntity$$get_FullName)(entity$$2))(activePatternResult68546[2]) : (memb$$2 = membOpt, (0, _FSharp2Fable.Util$$$makeCallFrom)(com$$6, ctx$$7, patternInput$$3[0], patternInput$$3[1], false, argTypes$$10, null, args$$6, memb$$2)));
      });
    } else {
      const activePatternResult68545 = (0, _Exprs.BasicPatterns$$$$007CCoerce$007C_$007C)(fsExpr$$1);

      if (activePatternResult68545 != null) {
        return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68545[1]), function (_arg9) {
          const inpExpr$$1 = _arg9;
          const t$$1 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, activePatternResult68545[0]);
          const matchValue$$7 = (0, _FSharp2Fable.Helpers$$$tryDefinition)(activePatternResult68545[0]);
          var $target$$34;

          if (matchValue$$7 != null) {
            if (matchValue$$7[1] != null) {
              if (matchValue$$7[1] === "System.Collections.Generic.IEnumerable`1") {
                $target$$34 = 0;
              } else if (matchValue$$7[1] === "System.Collections.IEnumerable") {
                $target$$34 = 0;
              } else {
                $target$$34 = 1;
              }
            } else {
              $target$$34 = 1;
            }
          } else {
            $target$$34 = 1;
          }

          switch ($target$$34) {
            case 0:
              {
                return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Replacements.toSeq)(t$$1, inpExpr$$1));
              }

            case 1:
              {
                return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(2, "TypeCast", inpExpr$$1, t$$1));
              }
          }
        });
      } else {
        const activePatternResult68544 = (0, _Exprs.BasicPatterns$$$$007CTypeLambda$007C_$007C)(fsExpr$$1);

        if (activePatternResult68544 != null) {
          return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68544[1]), function (_arg10) {
            const lambda$$2 = _arg10;
            return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, lambda$$2);
          });
        } else {
          const activePatternResult68543 = (0, _FSharp2Fable.Patterns$$$$007CTryGetValue$007C_$007C)(fsExpr$$1);

          if (activePatternResult68543 != null) {
            return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (builder$0040$$6 = _MonadicTrampoline.trampoline, (0, _MonadicTrampoline.TrampolineBuilder$$Delay$$Z6B697DAB)(builder$0040$$6, function () {
              if (activePatternResult68543[0] == null) {
                return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$6, null);
              } else {
                const e$$1 = (0, _Option.value)(activePatternResult68543[0]);
                return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$6, function f$$5(fsExpr$$3) {
                  return transformExpr(com$$6, ctx$$7, fsExpr$$3);
                }(e$$1), function (_arg1$$1) {
                  const x$$1 = _arg1$$1;
                  return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$6, x$$1);
                });
              }
            })), function (_arg11) {
              const callee$$1 = _arg11;
              return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$6(fsExpr$$4) {
                return transformExpr(com$$6, ctx$$7, fsExpr$$4);
              }, activePatternResult68543[4]), function (_arg12) {
                const args$$7 = _arg12;
                const genArgs$$11 = (0, _Seq.map)(function mapping$$4(arg20$0040$$3) {
                  return (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, arg20$0040$$3);
                }, (0, _List.append)(activePatternResult68543[2], activePatternResult68543[3]));
                const typ$$9 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$1));
                return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _FSharp2Fable.Util$$$makeCallFrom)(com$$6, ctx$$7, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), typ$$9, false, genArgs$$11, callee$$1, args$$7, activePatternResult68543[1]));
              });
            });
          } else {
            const activePatternResult68542 = (0, _FSharp2Fable.Patterns$$$$007CCreateEvent$007C_$007C)(fsExpr$$1);

            if (activePatternResult68542 != null) {
              return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68542[0]), function (_arg13) {
                const callee$$3 = _arg13;
                return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$7(fsExpr$$5) {
                  return transformExpr(com$$6, ctx$$7, fsExpr$$5);
                }, activePatternResult68542[5]), function (_arg14) {
                  const args$$8 = _arg14;
                  const callee$$4 = (0, _Transforms.AST$$$get)(null, new _AST.Type(1, "Any"), callee$$3, activePatternResult68542[1]);
                  const genArgs$$12 = (0, _Seq.map)(function mapping$$5(arg20$0040$$4) {
                    return (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, arg20$0040$$4);
                  }, (0, _List.append)(activePatternResult68542[3], activePatternResult68542[4]));
                  const typ$$10 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$1));
                  return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _FSharp2Fable.Util$$$makeCallFrom)(com$$6, ctx$$7, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), typ$$10, false, genArgs$$12, callee$$4, args$$8, activePatternResult68542[2]));
                });
              });
            } else {
              const activePatternResult68539 = (0, _FSharp2Fable.Patterns$$$$007CForOf$007C_$007C)(fsExpr$$1);

              if (activePatternResult68539 != null) {
                const activePatternResult68541 = (0, _FSharp2Fable.Identifiers$$$$007CBindIdent$007C)(com$$6, ctx$$7, activePatternResult68539[0]);
                return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68539[1]), function (_arg15) {
                  const value$$2 = _arg15;
                  return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, activePatternResult68541[0], activePatternResult68539[2]), function (_arg16) {
                    const body$$2 = _arg16;
                    return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Replacements.iterate)((0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), activePatternResult68541[1], body$$2, value$$2));
                  });
                });
              } else {
                const activePatternResult68538 = (0, _Exprs.BasicPatterns$$$$007CFastIntegerForLoop$007C_$007C)(fsExpr$$1);

                if (activePatternResult68538 != null) {
                  const r$$4 = (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1);
                  const activePatternResult68413 = (0, _Exprs.BasicPatterns$$$$007CLambda$007C_$007C)(activePatternResult68538[2]);

                  if (activePatternResult68413 != null) {
                    const activePatternResult68415 = (0, _FSharp2Fable.Identifiers$$$$007CBindIdent$007C)(com$$6, ctx$$7, activePatternResult68413[0]);
                    return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68538[0]), function (_arg17) {
                      const start$$1 = _arg17;
                      return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68538[1]), function (_arg18) {
                        const limit$$1 = _arg18;
                        return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, activePatternResult68415[0], activePatternResult68413[1]), function (_arg19) {
                          const body$$5 = _arg19;
                          return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Transforms.AST$$$makeLoop)(r$$4, new _AST.LoopKind(1, "For", activePatternResult68415[1], start$$1, limit$$1, body$$5, activePatternResult68538[3])));
                        });
                      });
                    });
                  } else {
                    return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _String.toFail)((0, _String.printf)("Unexpected loop %O: %A"))(r$$4)(fsExpr$$1));
                  }
                } else {
                  const activePatternResult68537 = (0, _Exprs.BasicPatterns$$$$007CWhileLoop$007C_$007C)(fsExpr$$1);

                  if (activePatternResult68537 != null) {
                    return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68537[0]), function (_arg20) {
                      const guardExpr$$1 = _arg20;
                      return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68537[1]), function (_arg21) {
                        const bodyExpr$$1 = _arg21;
                        return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Transforms.AST$$$makeLoop)((0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), new _AST.LoopKind(0, "While", guardExpr$$1, bodyExpr$$1)));
                      });
                    });
                  } else {
                    const activePatternResult68534 = (0, _Exprs.BasicPatterns$$$$007CConst$007C_$007C)(fsExpr$$1);

                    if (activePatternResult68534 != null) {
                      const typ$$11 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, activePatternResult68534[1]);
                      return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Replacements.makeTypeConst)(typ$$11, activePatternResult68534[0]));
                    } else {
                      const activePatternResult68533 = (0, _Exprs.BasicPatterns$$$$007CBaseValue$007C_$007C)(fsExpr$$1);

                      if (activePatternResult68533 != null) {
                        const typ$$12 = activePatternResult68533;
                        const typ$$13 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, (0, _Map.empty)({
                          Compare: _Util.comparePrimitives
                        }), typ$$12);
                        const matchValue$$8 = [ctx$$7.BoundMemberThis, ctx$$7.BoundConstructorThis];
                        var $target$$35, thisArg$$4;

                        if (matchValue$$8[0] != null) {
                          $target$$35 = 0;
                          thisArg$$4 = matchValue$$8[0];
                        } else if (matchValue$$8[1] != null) {
                          $target$$35 = 0;
                          thisArg$$4 = matchValue$$8[1];
                        } else {
                          $target$$35 = 1;
                        }

                        switch ($target$$35) {
                          case 0:
                            {
                              return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(1, "IdentExpr", new _AST.Ident(thisArg$$4.Name, typ$$13, new _AST.IdentKind(1, "BaseValueIdent"), thisArg$$4.IsMutable, thisArg$$4.IsCompilerGenerated, thisArg$$4.Range)));
                            }

                          case 1:
                            {
                              (0, _Transforms.Log$$$addError)(com$$6, ctx$$7.InlinePath, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), "Unexpected unbound this for base value");
                              return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(0, "Value", new _AST.ValueKind(1, "Null", new _AST.Type(1, "Any"))));
                            }
                        }
                      } else {
                        const activePatternResult68532 = (0, _Exprs.BasicPatterns$$$$007CThisValue$007C_$007C)(fsExpr$$1);

                        if (activePatternResult68532 != null) {
                          const _typ = activePatternResult68532;

                          if (ctx$$7.BoundConstructorThis != null) {
                            const thisArg$$5 = ctx$$7.BoundConstructorThis;
                            return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(1, "IdentExpr", thisArg$$5));
                          } else {
                            (0, _Transforms.Log$$$addError)(com$$6, ctx$$7.InlinePath, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), "Unexpected unbound this");
                            return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(0, "Value", new _AST.ValueKind(1, "Null", new _AST.Type(1, "Any"))));
                          }
                        } else {
                          const activePatternResult68531 = (0, _Exprs.BasicPatterns$$$$007CValue$007C_$007C)(fsExpr$$1);

                          if (activePatternResult68531 != null) {
                            const var$ = activePatternResult68531;
                            const r$$5 = (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1);

                            if ((0, _FSharp2Fable.Helpers$$$isInline)(var$)) {
                              const matchValue$$10 = (0, _List.tryFind)(function predicate$$2(tupledArg$$1) {
                                return (0, _Util.equals)(tupledArg$$1[0], var$);
                              }, ctx$$7.ScopeInlineValues);

                              if (matchValue$$10 == null) {
                                return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$6, ctx$$7.InlinePath, r$$5, "Cannot resolve locally inlined value: " + (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DisplayName)(var$)));
                              } else {
                                const fsExpr$$6 = matchValue$$10[1];
                                return (0, _MonadicTrampoline.TrampolineBuilder$$ReturnFrom$$1C7D6CBF)(builder$0040$$5, transformExpr(com$$6, ctx$$7, fsExpr$$6));
                              }
                            } else {
                              return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _FSharp2Fable.Util$$$makeValueFrom)(com$$6, ctx$$7, r$$5, var$));
                            }
                          } else {
                            const activePatternResult68528 = (0, _Exprs.BasicPatterns$$$$007CDefaultValue$007C_$007C)(fsExpr$$1);

                            if (activePatternResult68528 != null) {
                              const typ$$14 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, activePatternResult68528);
                              return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Replacements.defaultof)(typ$$14));
                            } else {
                              const activePatternResult68527 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(fsExpr$$1);

                              if (activePatternResult68527 != null) {
                                if ((0, _FSharp2Fable.Helpers$$$isInline)(activePatternResult68527[0][0])) {
                                  const ctx$$14 = new _FSharp2Fable.Context(ctx$$7.Scope, (0, _Types.L)([activePatternResult68527[0][0], activePatternResult68527[0][1]], ctx$$7.ScopeInlineValues), ctx$$7.GenericArgs, ctx$$7.EnclosingMember, ctx$$7.EnclosingEntity, ctx$$7.CaughtException, ctx$$7.BoundConstructorThis, ctx$$7.BoundMemberThis, ctx$$7.InlinePath);
                                  return (0, _MonadicTrampoline.TrampolineBuilder$$ReturnFrom$$1C7D6CBF)(builder$0040$$5, transformExpr(com$$6, ctx$$14, activePatternResult68527[1]));
                                } else {
                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68527[0][1]), function (_arg22) {
                                    const value$$5 = _arg22;
                                    const patternInput$$4 = (0, _FSharp2Fable.Identifiers$$$bindIdentFrom)(com$$6, ctx$$7, activePatternResult68527[0][0]);
                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, patternInput$$4[0], activePatternResult68527[1]), function (_arg23) {
                                      const body$$7 = _arg23;
                                      return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(15, "Let", (0, _Types.L)([patternInput$$4[1], value$$5], (0, _Types.L)()), body$$7));
                                    });
                                  });
                                }
                              } else {
                                const activePatternResult68526 = (0, _Exprs.BasicPatterns$$$$007CLetRec$007C_$007C)(fsExpr$$1);

                                if (activePatternResult68526 != null) {
                                  const patternInput$$5 = (0, _List.foldBack)(function folder(tupledArg$$2, tupledArg$$3) {
                                    const activePatternResult68423 = (0, _FSharp2Fable.Identifiers$$$$007CBindIdent$007C)(com$$6, tupledArg$$3[0], tupledArg$$2[0]);
                                    return [activePatternResult68423[0], (0, _Types.L)(activePatternResult68423[1], tupledArg$$3[1])];
                                  }, activePatternResult68526[0], [ctx$$7, (0, _Types.L)()]);
                                  const patternInput$$6 = (0, _List.unzip)(activePatternResult68526[0]);
                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$8(fsExpr$$7) {
                                    return transformExpr(com$$6, patternInput$$5[0], fsExpr$$7);
                                  }, patternInput$$6[1]), function (_arg24) {
                                    const exprs = _arg24;
                                    const bindings = (0, _List.zip)(patternInput$$5[1], exprs);
                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, patternInput$$5[0], activePatternResult68526[1]), function (_arg25) {
                                      const body$$9 = _arg25;
                                      return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(15, "Let", bindings, body$$9));
                                    });
                                  });
                                } else {
                                  const activePatternResult68525 = (0, _Exprs.BasicPatterns$$$$007CTraitCall$007C_$007C)(fsExpr$$1);

                                  if (activePatternResult68525 != null) {
                                    const typ$$15 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$1));
                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, transformTraitCall(com$$6, ctx$$7, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), typ$$15, activePatternResult68525[0], activePatternResult68525[1], activePatternResult68525[2], activePatternResult68525[3], activePatternResult68525[5]));
                                  } else {
                                    const activePatternResult68524 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(fsExpr$$1);

                                    if (activePatternResult68524 != null) {
                                      return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (builder$0040$$7 = _MonadicTrampoline.trampoline, (0, _MonadicTrampoline.TrampolineBuilder$$Delay$$Z6B697DAB)(builder$0040$$7, function () {
                                        if (activePatternResult68524[0] == null) {
                                          return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$7, null);
                                        } else {
                                          const e$$2 = (0, _Option.value)(activePatternResult68524[0]);
                                          return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$7, function f$$9(fsExpr$$8) {
                                            return transformExpr(com$$6, ctx$$7, fsExpr$$8);
                                          }(e$$2), function (_arg1$$3) {
                                            const x$$2 = _arg1$$3;
                                            return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$7, x$$2);
                                          });
                                        }
                                      })), function (_arg26) {
                                        const callee$$6 = _arg26;
                                        return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$10(fsExpr$$9) {
                                          return transformExpr(com$$6, ctx$$7, fsExpr$$9);
                                        }, activePatternResult68524[4]), function (_arg27) {
                                          const args$$10 = _arg27;
                                          const genArgs$$13 = (0, _Seq.map)(function mapping$$6(arg20$0040$$5) {
                                            return (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, arg20$0040$$5);
                                          }, (0, _List.append)(activePatternResult68524[2], activePatternResult68524[3]));
                                          const typ$$16 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$1));
                                          return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _FSharp2Fable.Util$$$makeCallFrom)(com$$6, ctx$$7, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), typ$$16, false, genArgs$$13, callee$$6, args$$10, activePatternResult68524[1]));
                                        });
                                      });
                                    } else {
                                      var $target$$36, _genArgs$$1, applied;

                                      const activePatternResult68523 = (0, _Exprs.BasicPatterns$$$$007CApplication$007C_$007C)(fsExpr$$1);

                                      if (activePatternResult68523 != null) {
                                        if (activePatternResult68523[2].tail == null) {
                                          $target$$36 = 0;
                                          _genArgs$$1 = activePatternResult68523[1];
                                          applied = activePatternResult68523[0];
                                        } else {
                                          $target$$36 = 1;
                                        }
                                      } else {
                                        $target$$36 = 1;
                                      }

                                      switch ($target$$36) {
                                        case 0:
                                          {
                                            return (0, _MonadicTrampoline.TrampolineBuilder$$ReturnFrom$$1C7D6CBF)(builder$0040$$5, transformExpr(com$$6, ctx$$7, applied));
                                          }

                                        case 1:
                                          {
                                            var $target$$37, args$$12, genArgs$$15, var$$$3;
                                            const activePatternResult68521 = (0, _Exprs.BasicPatterns$$$$007CApplication$007C_$007C)(fsExpr$$1);

                                            if (activePatternResult68521 != null) {
                                              const activePatternResult68522 = (0, _Exprs.BasicPatterns$$$$007CValue$007C_$007C)(activePatternResult68521[0]);

                                              if (activePatternResult68522 != null) {
                                                if (var$$$2 = activePatternResult68522, (genArgs$$14 = activePatternResult68521[1], (args$$11 = activePatternResult68521[2], (0, _FSharp2Fable.Helpers$$$isInline)(var$$$2)))) {
                                                  $target$$37 = 0;
                                                  args$$12 = activePatternResult68521[2];
                                                  genArgs$$15 = activePatternResult68521[1];
                                                  var$$$3 = activePatternResult68522;
                                                } else {
                                                  $target$$37 = 1;
                                                }
                                              } else {
                                                $target$$37 = 1;
                                              }
                                            } else {
                                              $target$$37 = 1;
                                            }

                                            switch ($target$$37) {
                                              case 0:
                                                {
                                                  const r$$6 = (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1);
                                                  const matchValue$$11 = (0, _List.tryFind)(function predicate$$3(tupledArg$$4) {
                                                    return (0, _Util.equals)(tupledArg$$4[0], var$$$3);
                                                  }, ctx$$7.ScopeInlineValues);

                                                  if (matchValue$$11 == null) {
                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$6, ctx$$7.InlinePath, r$$6, "Cannot resolve locally inlined value: " + (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DisplayName)(var$$$3)));
                                                  } else {
                                                    const fsExpr$$10 = matchValue$$11[1];
                                                    const genArgs$$16 = (0, _Seq.map)(function (arg20$0040$$6) {
                                                      return (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, arg20$0040$$6);
                                                    }, genArgs$$15);
                                                    const resolvedCtx = new _FSharp2Fable.Context(ctx$$7.Scope, ctx$$7.ScopeInlineValues, (0, _Map.ofSeq)((0, _FSharp2Fable.Util$$$matchGenericParamsFrom)(var$$$3, genArgs$$16), {
                                                      Compare: _Util.comparePrimitives
                                                    }), ctx$$7.EnclosingMember, ctx$$7.EnclosingEntity, ctx$$7.CaughtException, ctx$$7.BoundConstructorThis, ctx$$7.BoundMemberThis, ctx$$7.InlinePath);
                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, resolvedCtx, fsExpr$$10), function (_arg28) {
                                                      const callee$$7 = _arg28;

                                                      if (args$$12.tail == null) {
                                                        return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, callee$$7);
                                                      } else {
                                                        const args$$13 = args$$12;
                                                        const typ$$17 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$10));
                                                        return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$11(fsExpr$$11) {
                                                          return transformExpr(com$$6, ctx$$7, fsExpr$$11);
                                                        }, args$$13), function (_arg29) {
                                                          const args$$14 = _arg29;
                                                          return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(8, "Operation", new _AST.OperationKind(1, "CurriedApply", callee$$7, args$$14), typ$$17, r$$6));
                                                        });
                                                      }
                                                    });
                                                  }
                                                }

                                              case 1:
                                                {
                                                  var $target$$38, _genArgs$$3, args$$16, e1$$1, e2$$1, m$$2;

                                                  const activePatternResult68518 = (0, _Exprs.BasicPatterns$$$$007CApplication$007C_$007C)(fsExpr$$1);

                                                  if (activePatternResult68518 != null) {
                                                    const activePatternResult68519 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult68518[0]);

                                                    if (activePatternResult68519 != null) {
                                                      const activePatternResult68520 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult68519[0][1]);

                                                      if (activePatternResult68520 != null) {
                                                        if (activePatternResult68520[0] == null) {
                                                          if (activePatternResult68520[4].tail != null) {
                                                            if (activePatternResult68520[4].tail.tail != null) {
                                                              if (activePatternResult68520[4].tail.tail.tail == null) {
                                                                if (m$$1 = activePatternResult68520[1], (e2 = activePatternResult68520[4].tail.head, (e1 = activePatternResult68520[4].head, (args$$15 = activePatternResult68518[2], (_genArgs$$2 = activePatternResult68518[1], (0, _Symbols.FSharpSymbol$$get_FullName)(m$$1) === "Fable.Core.JsInterop.( ? )"))))) {
                                                                  $target$$38 = 0;
                                                                  _genArgs$$3 = activePatternResult68518[1];
                                                                  args$$16 = activePatternResult68518[2];
                                                                  e1$$1 = activePatternResult68520[4].head;
                                                                  e2$$1 = activePatternResult68520[4].tail.head;
                                                                  m$$2 = activePatternResult68520[1];
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
                                                        return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, e1$$1), function (_arg30) {
                                                          const e1$$2 = _arg30;
                                                          return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, e2$$1), function (_arg31) {
                                                            const e2$$2 = _arg31;
                                                            return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$12(fsExpr$$12) {
                                                              return transformExpr(com$$6, ctx$$7, fsExpr$$12);
                                                            }, args$$16), function (_arg32) {
                                                              const args$$17 = _arg32;
                                                              let argInfo;
                                                              const inputRecord = (0, _Transforms.AST$$$argInfo)(e1$$2, args$$17, new _AST.SignatureKind(1, "AutoUncurrying"));
                                                              argInfo = new _AST.ArgInfo(inputRecord.ThisArg, inputRecord.Args, inputRecord.SignatureArgTypes, new _AST.SpreadKind(2, "TupleSpread"), inputRecord.IsBaseOrSelfConstructorCall);
                                                              const typ$$18 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$1));
                                                              return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(8, "Operation", new _AST.OperationKind(0, "Call", new _AST.CallKind(2, "InstanceCall", e2$$2), argInfo), typ$$18, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1)));
                                                            });
                                                          });
                                                        });
                                                      }

                                                    case 1:
                                                      {
                                                        var $target$$39, genArgs$$18, memb$$7, optionProp$$1;
                                                        const activePatternResult68515 = (0, _Exprs.BasicPatterns$$$$007CApplication$007C_$007C)(fsExpr$$1);

                                                        if (activePatternResult68515 != null) {
                                                          const activePatternResult68516 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult68515[0]);

                                                          if (activePatternResult68516 != null) {
                                                            if (activePatternResult68516[0] != null) {
                                                              if (activePatternResult68516[3].tail == null) {
                                                                if (activePatternResult68516[4].tail == null) {
                                                                  if (activePatternResult68515[2].tail != null) {
                                                                    const activePatternResult68517 = (0, _Exprs.BasicPatterns$$$$007CConst$007C_$007C)(activePatternResult68515[2].head);

                                                                    if (activePatternResult68517 != null) {
                                                                      if ((0, _Util.equals)(activePatternResult68517[0], null)) {
                                                                        if (activePatternResult68515[2].tail.tail == null) {
                                                                          if (optionProp = activePatternResult68515[0], (memb$$6 = activePatternResult68516[1], (genArgs$$17 = activePatternResult68515[1], (0, _Symbols.FSharpSymbol$$get_FullName)(memb$$6) === "Microsoft.FSharp.Core.IsSome" ? true : (0, _Symbols.FSharpSymbol$$get_FullName)(memb$$6) === "Microsoft.FSharp.Core.IsNone"))) {
                                                                            $target$$39 = 0;
                                                                            genArgs$$18 = activePatternResult68515[1];
                                                                            memb$$7 = activePatternResult68516[1];
                                                                            optionProp$$1 = activePatternResult68515[0];
                                                                          } else {
                                                                            $target$$39 = 1;
                                                                          }
                                                                        } else {
                                                                          $target$$39 = 1;
                                                                        }
                                                                      } else {
                                                                        $target$$39 = 1;
                                                                      }
                                                                    } else {
                                                                      $target$$39 = 1;
                                                                    }
                                                                  } else {
                                                                    $target$$39 = 1;
                                                                  }
                                                                } else {
                                                                  $target$$39 = 1;
                                                                }
                                                              } else {
                                                                $target$$39 = 1;
                                                              }
                                                            } else {
                                                              $target$$39 = 1;
                                                            }
                                                          } else {
                                                            $target$$39 = 1;
                                                          }
                                                        } else {
                                                          $target$$39 = 1;
                                                        }

                                                        switch ($target$$39) {
                                                          case 0:
                                                            {
                                                              return (0, _MonadicTrampoline.TrampolineBuilder$$ReturnFrom$$1C7D6CBF)(builder$0040$$5, transformExpr(com$$6, ctx$$7, optionProp$$1));
                                                            }

                                                          case 1:
                                                            {
                                                              const activePatternResult68514 = (0, _Exprs.BasicPatterns$$$$007CApplication$007C_$007C)(fsExpr$$1);

                                                              if (activePatternResult68514 != null) {
                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68514[0]), function (_arg33) {
                                                                  const applied$$2 = _arg33;
                                                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$13(fsExpr$$13) {
                                                                    return transformExpr(com$$6, ctx$$7, fsExpr$$13);
                                                                  }, activePatternResult68514[2]), function (_arg34) {
                                                                    const args$$19 = _arg34;
                                                                    const typ$$19 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$1));
                                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(8, "Operation", new _AST.OperationKind(1, "CurriedApply", applied$$2, args$$19), typ$$19, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1)));
                                                                  });
                                                                });
                                                              } else {
                                                                const activePatternResult68513 = (0, _Exprs.BasicPatterns$$$$007CIfThenElse$007C_$007C)(fsExpr$$1);

                                                                if (activePatternResult68513 != null) {
                                                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68513[0]), function (_arg35) {
                                                                    const guardExpr$$3 = _arg35;
                                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68513[1]), function (_arg36) {
                                                                      const thenExpr$$1 = _arg36;
                                                                      return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68513[2]), function (_arg37) {
                                                                        const elseExpr$$1 = _arg37;
                                                                        return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(19, "IfThenElse", guardExpr$$3, thenExpr$$1, elseExpr$$1));
                                                                      });
                                                                    });
                                                                  });
                                                                } else {
                                                                  const activePatternResult68512 = (0, _Exprs.BasicPatterns$$$$007CTryFinally$007C_$007C)(fsExpr$$1);

                                                                  if (activePatternResult68512 != null) {
                                                                    const activePatternResult68442 = (0, _Exprs.BasicPatterns$$$$007CTryWith$007C_$007C)(activePatternResult68512[0]);
                                                                    return activePatternResult68442 != null ? (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _FSharp2Fable.Util$$$makeTryCatch)(com$$6, ctx$$7, activePatternResult68442[0], [activePatternResult68442[3], activePatternResult68442[4]], activePatternResult68512[1])) : (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _FSharp2Fable.Util$$$makeTryCatch)(com$$6, ctx$$7, activePatternResult68512[0], null, activePatternResult68512[1]));
                                                                  } else {
                                                                    const activePatternResult68511 = (0, _Exprs.BasicPatterns$$$$007CTryWith$007C_$007C)(fsExpr$$1);

                                                                    if (activePatternResult68511 != null) {
                                                                      return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _FSharp2Fable.Util$$$makeTryCatch)(com$$6, ctx$$7, activePatternResult68511[0], [activePatternResult68511[3], activePatternResult68511[4]], null));
                                                                    } else {
                                                                      const activePatternResult68510 = (0, _Exprs.BasicPatterns$$$$007CNewDelegate$007C_$007C)(fsExpr$$1);

                                                                      if (activePatternResult68510 != null) {
                                                                        return (0, _MonadicTrampoline.TrampolineBuilder$$ReturnFrom$$1C7D6CBF)(builder$0040$$5, transformDelegate(com$$6, ctx$$7, activePatternResult68510[0], activePatternResult68510[1]));
                                                                      } else {
                                                                        const activePatternResult68509 = (0, _Exprs.BasicPatterns$$$$007CLambda$007C_$007C)(fsExpr$$1);

                                                                        if (activePatternResult68509 != null) {
                                                                          const patternInput$$7 = (0, _FSharp2Fable.Util$$$makeFunctionArgs)(com$$6, ctx$$7, (0, _Types.L)(activePatternResult68509[0], (0, _Types.L)()));
                                                                          var $target$$40, arg$$2;

                                                                          if (patternInput$$7[1].tail != null) {
                                                                            if (patternInput$$7[1].tail.tail == null) {
                                                                              $target$$40 = 0;
                                                                              arg$$2 = patternInput$$7[1].head;
                                                                            } else {
                                                                              $target$$40 = 1;
                                                                            }
                                                                          } else {
                                                                            $target$$40 = 1;
                                                                          }

                                                                          switch ($target$$40) {
                                                                            case 0:
                                                                              {
                                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, patternInput$$7[0], activePatternResult68509[1]), function (_arg38) {
                                                                                  const body$$14 = _arg38;
                                                                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(5, "Function", new _AST.FunctionKind(0, "Lambda", arg$$2), body$$14, null));
                                                                                });
                                                                              }

                                                                            case 1:
                                                                              {
                                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (() => {
                                                                                  throw new Error("makeFunctionArgs returns args with different length");
                                                                                })());
                                                                              }
                                                                          }
                                                                        } else {
                                                                          const activePatternResult68508 = (0, _Exprs.BasicPatterns$$$$007CFSharpFieldGet$007C_$007C)(fsExpr$$1);

                                                                          if (activePatternResult68508 != null) {
                                                                            return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (builder$0040$$8 = _MonadicTrampoline.trampoline, (0, _MonadicTrampoline.TrampolineBuilder$$Delay$$Z6B697DAB)(builder$0040$$8, function () {
                                                                              if (activePatternResult68508[0] == null) {
                                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$8, null);
                                                                              } else {
                                                                                const e$$3 = (0, _Option.value)(activePatternResult68508[0]);
                                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$8, function f$$14(fsExpr$$15) {
                                                                                  return transformExpr(com$$6, ctx$$7, fsExpr$$15);
                                                                                }(e$$3), function (_arg1$$4) {
                                                                                  const x$$3 = _arg1$$4;
                                                                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$8, x$$3);
                                                                                });
                                                                              }
                                                                            })), function (_arg39) {
                                                                              const callee$$9 = _arg39;
                                                                              let callee$$11;

                                                                              if (callee$$9 == null) {
                                                                                callee$$11 = (0, _FSharp2Fable.Util$$$entityRef)(com$$6, (0, _Symbols.FSharpType$$get_TypeDefinition)(activePatternResult68508[1]));
                                                                              } else {
                                                                                const callee$$10 = callee$$9;
                                                                                callee$$11 = callee$$10;
                                                                              }

                                                                              const kind$$6 = new _AST.GetKind(2, "FieldGet", (0, _Symbols.FSharpField$$get_Name)(activePatternResult68508[2]), (0, _Symbols.FSharpField$$get_IsMutable)(activePatternResult68508[2]), (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, (0, _Map.empty)({
                                                                                Compare: _Util.comparePrimitives
                                                                              }), (0, _Symbols.FSharpField$$get_FieldType)(activePatternResult68508[2])));
                                                                              const typ$$20 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$1));
                                                                              return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(9, "Get", callee$$11, kind$$6, typ$$20, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1)));
                                                                            });
                                                                          } else {
                                                                            const activePatternResult68507 = (0, _Exprs.BasicPatterns$$$$007CTupleGet$007C_$007C)(fsExpr$$1);

                                                                            if (activePatternResult68507 != null) {
                                                                              return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68507[2]), function (_arg40) {
                                                                                const tupleExpr$$1 = _arg40;
                                                                                const typ$$21 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$1));
                                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(9, "Get", tupleExpr$$1, new _AST.GetKind(1, "TupleGet", activePatternResult68507[1]), typ$$21, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1)));
                                                                              });
                                                                            } else {
                                                                              const activePatternResult68506 = (0, _Exprs.BasicPatterns$$$$007CUnionCaseGet$007C_$007C)(fsExpr$$1);

                                                                              if (activePatternResult68506 != null) {
                                                                                const r$$7 = (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1);
                                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68506[0]), function (_arg41) {
                                                                                  const unionExpr$$3 = _arg41;
                                                                                  const activePatternResult68446 = (0, _FSharp2Fable.Patterns$$$$007COptionUnion$007CListUnion$007CErasedUnion$007CStringEnum$007CDiscriminatedUnion$007C)(activePatternResult68506[1]);

                                                                                  if (activePatternResult68446.tag === 3) {
                                                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$6, ctx$$7.InlinePath, r$$7, "StringEnum types cannot have fields"));
                                                                                  } else if (activePatternResult68446.tag === 0) {
                                                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(9, "Get", unionExpr$$3, new _AST.GetKind(7, "OptionValue"), (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, activePatternResult68446.fields[0]), r$$7));
                                                                                  } else if (activePatternResult68446.tag === 1) {
                                                                                    const t$$8 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, activePatternResult68446.fields[0]);
                                                                                    const patternInput$$8 = (0, _Symbols.FSharpField$$get_Name)(activePatternResult68506[3]) === "Head" ? [new _AST.GetKind(5, "ListHead"), t$$8] : [new _AST.GetKind(6, "ListTail"), new _AST.Type(12, "List", t$$8)];
                                                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(9, "Get", unionExpr$$3, patternInput$$8[0], patternInput$$8[1], r$$7));
                                                                                  } else if (activePatternResult68446.tag === 4) {
                                                                                    const t$$10 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, (0, _Map.empty)({
                                                                                      Compare: _Util.comparePrimitives
                                                                                    }), (0, _Symbols.FSharpField$$get_FieldType)(activePatternResult68506[3]));
                                                                                    const kind$$8 = new _AST.GetKind(3, "UnionField", activePatternResult68506[3], activePatternResult68506[2], t$$10);
                                                                                    const typ$$22 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$1));
                                                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(9, "Get", unionExpr$$3, kind$$8, typ$$22, r$$7));
                                                                                  } else {
                                                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, unionExpr$$3);
                                                                                  }
                                                                                });
                                                                              } else {
                                                                                const activePatternResult68505 = (0, _Exprs.BasicPatterns$$$$007CFSharpFieldSet$007C_$007C)(fsExpr$$1);

                                                                                if (activePatternResult68505 != null) {
                                                                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (builder$0040$$9 = _MonadicTrampoline.trampoline, (0, _MonadicTrampoline.TrampolineBuilder$$Delay$$Z6B697DAB)(builder$0040$$9, function () {
                                                                                    if (activePatternResult68505[0] == null) {
                                                                                      return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$9, null);
                                                                                    } else {
                                                                                      const e$$4 = (0, _Option.value)(activePatternResult68505[0]);
                                                                                      return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$9, function f$$15(fsExpr$$16) {
                                                                                        return transformExpr(com$$6, ctx$$7, fsExpr$$16);
                                                                                      }(e$$4), function (_arg1$$5) {
                                                                                        const x$$4 = _arg1$$5;
                                                                                        return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$9, x$$4);
                                                                                      });
                                                                                    }
                                                                                  })), function (_arg42) {
                                                                                    const callee$$13 = _arg42;
                                                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68505[3]), function (_arg43) {
                                                                                      const value$$7 = _arg43;
                                                                                      let callee$$15;

                                                                                      if (callee$$13 == null) {
                                                                                        callee$$15 = (0, _FSharp2Fable.Util$$$entityRef)(com$$6, (0, _Symbols.FSharpType$$get_TypeDefinition)(activePatternResult68505[1]));
                                                                                      } else {
                                                                                        const callee$$14 = callee$$13;
                                                                                        callee$$15 = callee$$14;
                                                                                      }

                                                                                      return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(16, "Set", callee$$15, new _AST.SetKind(2, "FieldSet", (0, _Symbols.FSharpField$$get_Name)(activePatternResult68505[2]), (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, (0, _Map.empty)({
                                                                                        Compare: _Util.comparePrimitives
                                                                                      }), (0, _Symbols.FSharpField$$get_FieldType)(activePatternResult68505[2]))), value$$7, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1)));
                                                                                    });
                                                                                  });
                                                                                } else {
                                                                                  const activePatternResult68504 = (0, _Exprs.BasicPatterns$$$$007CUnionCaseTag$007C_$007C)(fsExpr$$1);

                                                                                  if (activePatternResult68504 != null) {
                                                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68504[0]), function (_arg44) {
                                                                                      const unionExpr$$5 = _arg44;
                                                                                      return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(9, "Get", unionExpr$$5, new _AST.GetKind(4, "UnionTag"), new _AST.Type(1, "Any"), (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1)));
                                                                                    });
                                                                                  } else {
                                                                                    const activePatternResult68503 = (0, _Exprs.BasicPatterns$$$$007CUnionCaseSet$007C_$007C)(fsExpr$$1);

                                                                                    if (activePatternResult68503 != null) {
                                                                                      return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$6, ctx$$7.InlinePath, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), "Unexpected UnionCaseSet"));
                                                                                    } else {
                                                                                      const activePatternResult68502 = (0, _Exprs.BasicPatterns$$$$007CValueSet$007C_$007C)(fsExpr$$1);

                                                                                      if (activePatternResult68502 != null) {
                                                                                        const r$$8 = (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1);
                                                                                        return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68502[1]), function (_arg45) {
                                                                                          var ent;
                                                                                          const valueExpr$$1 = _arg45;
                                                                                          const matchValue$$12 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(activePatternResult68502[0]);
                                                                                          var $target$$41, ent$$1;

                                                                                          if (matchValue$$12 != null) {
                                                                                            if (ent = matchValue$$12, (0, _Symbols.FSharpEntity$$get_IsFSharpModule)(ent) ? (0, _FSharp2Fable.Helpers$$$isPublicMember)(activePatternResult68502[0]) : false) {
                                                                                              $target$$41 = 0;
                                                                                              ent$$1 = matchValue$$12;
                                                                                            } else {
                                                                                              $target$$41 = 1;
                                                                                            }
                                                                                          } else {
                                                                                            $target$$41 = 1;
                                                                                          }

                                                                                          switch ($target$$41) {
                                                                                            case 0:
                                                                                              {
                                                                                                const valToSet$$1 = (0, _FSharp2Fable.Util$$$makeValueFrom)(com$$6, ctx$$7, r$$8, activePatternResult68502[0]);
                                                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(8, "Operation", new _AST.OperationKind(1, "CurriedApply", valToSet$$1, (0, _Types.L)(valueExpr$$1, (0, _Types.L)())), new _AST.Type(2, "Unit"), r$$8));
                                                                                              }

                                                                                            case 1:
                                                                                              {
                                                                                                const valToSet$$2 = (0, _FSharp2Fable.Util$$$makeValueFrom)(com$$6, ctx$$7, r$$8, activePatternResult68502[0]);
                                                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(16, "Set", valToSet$$2, new _AST.SetKind(0, "VarSet"), valueExpr$$1, r$$8));
                                                                                              }
                                                                                          }
                                                                                        });
                                                                                      } else {
                                                                                        const activePatternResult68499 = (0, _Exprs.BasicPatterns$$$$007CNewArray$007C_$007C)(fsExpr$$1);

                                                                                        if (activePatternResult68499 != null) {
                                                                                          const elTyp = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, activePatternResult68499[0]);
                                                                                          return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$16(fsExpr$$17) {
                                                                                            return transformExpr(com$$6, ctx$$7, fsExpr$$17);
                                                                                          }, activePatternResult68499[1]), function (_arg46) {
                                                                                            const argExprs$$6 = _arg46;
                                                                                            return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Transforms.AST$$$makeArray)(elTyp, argExprs$$6));
                                                                                          });
                                                                                        } else {
                                                                                          const activePatternResult68498 = (0, _Exprs.BasicPatterns$$$$007CNewTuple$007C_$007C)(fsExpr$$1);

                                                                                          if (activePatternResult68498 != null) {
                                                                                            return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$17(fsExpr$$18) {
                                                                                              return transformExpr(com$$6, ctx$$7, fsExpr$$18);
                                                                                            }, activePatternResult68498[1]), function (_arg47) {
                                                                                              const argExprs$$8 = _arg47;
                                                                                              return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(0, "Value", new _AST.ValueKind(12, "NewTuple", argExprs$$8)));
                                                                                            });
                                                                                          } else {
                                                                                            const activePatternResult68497 = (0, _Exprs.BasicPatterns$$$$007CObjectExpr$007C_$007C)(fsExpr$$1);

                                                                                            if (activePatternResult68497 != null) {
                                                                                              return (0, _MonadicTrampoline.TrampolineBuilder$$ReturnFrom$$1C7D6CBF)(builder$0040$$5, transformObjExpr(com$$6, ctx$$7, activePatternResult68497[0], activePatternResult68497[1], activePatternResult68497[2], activePatternResult68497[3]));
                                                                                            } else {
                                                                                              const activePatternResult68496 = (0, _Exprs.BasicPatterns$$$$007CNewObject$007C_$007C)(fsExpr$$1);

                                                                                              if (activePatternResult68496 != null) {
                                                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$18(fsExpr$$19) {
                                                                                                  return transformExpr(com$$6, ctx$$7, fsExpr$$19);
                                                                                                }, activePatternResult68496[2]), function (_arg48) {
                                                                                                  const args$$22 = _arg48;
                                                                                                  const genArgs$$20 = (0, _Seq.map)(function (arg20$0040$$7) {
                                                                                                    return (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, arg20$0040$$7);
                                                                                                  }, activePatternResult68496[1]);
                                                                                                  const typ$$23 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$1));
                                                                                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _FSharp2Fable.Util$$$makeCallFrom)(com$$6, ctx$$7, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), typ$$23, false, genArgs$$20, null, args$$22, activePatternResult68496[0]));
                                                                                                });
                                                                                              } else {
                                                                                                var $target$$42, argExprs$$9, baseCall$$3, fsType$$3;
                                                                                                const activePatternResult68493 = (0, _Exprs.BasicPatterns$$$$007CSequential$007C_$007C)(fsExpr$$1);

                                                                                                if (activePatternResult68493 != null) {
                                                                                                  const activePatternResult68494 = (0, _FSharp2Fable.Patterns$$$$007CConstructorCall$007C_$007C)(activePatternResult68493[0]);

                                                                                                  if (activePatternResult68494 != null) {
                                                                                                    const activePatternResult68495 = (0, _Exprs.BasicPatterns$$$$007CNewRecord$007C_$007C)(activePatternResult68493[1]);

                                                                                                    if (activePatternResult68495 != null) {
                                                                                                      $target$$42 = 0;
                                                                                                      argExprs$$9 = activePatternResult68495[1];
                                                                                                      baseCall$$3 = activePatternResult68494[0];
                                                                                                      fsType$$3 = activePatternResult68495[0];
                                                                                                    } else {
                                                                                                      $target$$42 = 1;
                                                                                                    }
                                                                                                  } else {
                                                                                                    $target$$42 = 1;
                                                                                                  }
                                                                                                } else {
                                                                                                  $target$$42 = 1;
                                                                                                }

                                                                                                switch ($target$$42) {
                                                                                                  case 0:
                                                                                                    {
                                                                                                      const matchValue$$13 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(baseCall$$3);
                                                                                                      var $target$$43, baseEnt$$1;

                                                                                                      if (matchValue$$13 != null) {
                                                                                                        if (baseEnt = matchValue$$13, (0, _Util.equals)((0, _Symbols.FSharpEntity$$get_TryFullName)(baseEnt), "System.Object")) {
                                                                                                          $target$$43 = 0;
                                                                                                          baseEnt$$1 = matchValue$$13;
                                                                                                        } else {
                                                                                                          $target$$43 = 1;
                                                                                                        }
                                                                                                      } else {
                                                                                                        $target$$43 = 1;
                                                                                                      }

                                                                                                      switch ($target$$43) {
                                                                                                        case 0:
                                                                                                          {
                                                                                                            return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$19(fsExpr$$20) {
                                                                                                              return transformExpr(com$$6, ctx$$7, fsExpr$$20);
                                                                                                            }, argExprs$$9), function (_arg49) {
                                                                                                              const argExprs$$10 = _arg49;
                                                                                                              const genArgs$$21 = (0, _FSharp2Fable.TypeHelpers$$$makeGenArgs)(com$$6, ctx$$7.GenericArgs, (0, _FSharp2Fable.Helpers$$$getGenericArguments)(fsType$$3));
                                                                                                              return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(0, "Value", new _AST.ValueKind(13, "NewRecord", argExprs$$10, (0, _Symbols.FSharpType$$get_TypeDefinition)(fsType$$3), genArgs$$21)));
                                                                                                            });
                                                                                                          }

                                                                                                        case 1:
                                                                                                          {
                                                                                                            return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$6, ctx$$7.InlinePath, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), "Internal constructor with inheritance are not supported"));
                                                                                                          }
                                                                                                      }
                                                                                                    }

                                                                                                  case 1:
                                                                                                    {
                                                                                                      var $target$$44, _value$$1, current$$1, field$$4, next1$$1, next2$$1, typ$$25, unionCase$$4;

                                                                                                      const activePatternResult68488 = (0, _Exprs.BasicPatterns$$$$007CSequential$007C_$007C)(fsExpr$$1);

                                                                                                      if (activePatternResult68488 != null) {
                                                                                                        const activePatternResult68489 = (0, _Exprs.BasicPatterns$$$$007CValueSet$007C_$007C)(activePatternResult68488[0]);

                                                                                                        if (activePatternResult68489 != null) {
                                                                                                          const activePatternResult68490 = (0, _Exprs.BasicPatterns$$$$007CValue$007C_$007C)(activePatternResult68489[1]);

                                                                                                          if (activePatternResult68490 != null) {
                                                                                                            const activePatternResult68491 = (0, _Exprs.BasicPatterns$$$$007CValueSet$007C_$007C)(activePatternResult68488[1]);

                                                                                                            if (activePatternResult68491 != null) {
                                                                                                              const activePatternResult68492 = (0, _Exprs.BasicPatterns$$$$007CUnionCaseGet$007C_$007C)(activePatternResult68491[1]);

                                                                                                              if (activePatternResult68492 != null) {
                                                                                                                if (unionCase$$3 = activePatternResult68492[2], (typ$$24 = activePatternResult68492[1], (next2 = activePatternResult68491[0], (next1 = activePatternResult68490, (field$$3 = activePatternResult68492[3], (current = activePatternResult68489[0], (_value = activePatternResult68492[0], (((((0, _Symbols.FSharpSymbol$$get_FullName)(next1) === "next" ? (0, _Symbols.FSharpSymbol$$get_FullName)(next2) === "next" : false) ? (0, _Symbols.FSharpSymbol$$get_FullName)(current) === "current" : false) ? (0, _FSharp2Fable.Helpers$$$getFsTypeFullName)(typ$$24) === "Microsoft.FSharp.Collections.FSharpList`1" : false) ? (0, _Symbols.FSharpUnionCase$$get_Name)(unionCase$$3) === "op_ColonColon" : false) ? (0, _Symbols.FSharpField$$get_Name)(field$$3) === "Tail" : false))))))) {
                                                                                                                  $target$$44 = 0;
                                                                                                                  _value$$1 = activePatternResult68492[0];
                                                                                                                  current$$1 = activePatternResult68489[0];
                                                                                                                  field$$4 = activePatternResult68492[3];
                                                                                                                  next1$$1 = activePatternResult68490;
                                                                                                                  next2$$1 = activePatternResult68491[0];
                                                                                                                  typ$$25 = activePatternResult68492[1];
                                                                                                                  unionCase$$4 = activePatternResult68492[2];
                                                                                                                } else {
                                                                                                                  $target$$44 = 1;
                                                                                                                }
                                                                                                              } else {
                                                                                                                $target$$44 = 1;
                                                                                                              }
                                                                                                            } else {
                                                                                                              $target$$44 = 1;
                                                                                                            }
                                                                                                          } else {
                                                                                                            $target$$44 = 1;
                                                                                                          }
                                                                                                        } else {
                                                                                                          $target$$44 = 1;
                                                                                                        }
                                                                                                      } else {
                                                                                                        $target$$44 = 1;
                                                                                                      }

                                                                                                      switch ($target$$44) {
                                                                                                        case 0:
                                                                                                          {
                                                                                                            return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(0, "Value", new _AST.ValueKind(2, "UnitConstant")));
                                                                                                          }

                                                                                                        case 1:
                                                                                                          {
                                                                                                            const activePatternResult68487 = (0, _Exprs.BasicPatterns$$$$007CSequential$007C_$007C)(fsExpr$$1);

                                                                                                            if (activePatternResult68487 != null) {
                                                                                                              return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68487[0]), function (_arg50) {
                                                                                                                const first$$1 = _arg50;
                                                                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68487[1]), function (_arg51) {
                                                                                                                  const second$$1 = _arg51;
                                                                                                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(14, "Sequential", (0, _Types.L)(first$$1, (0, _Types.L)(second$$1, (0, _Types.L)()))));
                                                                                                                });
                                                                                                              });
                                                                                                            } else {
                                                                                                              const activePatternResult68486 = (0, _Exprs.BasicPatterns$$$$007CNewRecord$007C_$007C)(fsExpr$$1);

                                                                                                              if (activePatternResult68486 != null) {
                                                                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$20(fsExpr$$21) {
                                                                                                                  return transformExpr(com$$6, ctx$$7, fsExpr$$21);
                                                                                                                }, activePatternResult68486[1]), function (_arg52) {
                                                                                                                  const argExprs$$12 = _arg52;
                                                                                                                  const genArgs$$22 = (0, _FSharp2Fable.TypeHelpers$$$makeGenArgs)(com$$6, ctx$$7.GenericArgs, (0, _FSharp2Fable.Helpers$$$getGenericArguments)(activePatternResult68486[0]));
                                                                                                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(0, "Value", new _AST.ValueKind(13, "NewRecord", argExprs$$12, (0, _Symbols.FSharpType$$get_TypeDefinition)(activePatternResult68486[0]), genArgs$$22)));
                                                                                                                });
                                                                                                              } else {
                                                                                                                const activePatternResult68485 = (0, _Exprs.BasicPatterns$$$$007CNewUnionCase$007C_$007C)(fsExpr$$1);

                                                                                                                if (activePatternResult68485 != null) {
                                                                                                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$21(fsExpr$$22) {
                                                                                                                    return transformExpr(com$$6, ctx$$7, fsExpr$$22);
                                                                                                                  }, activePatternResult68485[2]), function (_arg53) {
                                                                                                                    const argExprs$$14 = _arg53;
                                                                                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, transformNewUnion(com$$6, ctx$$7, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), activePatternResult68485[0], activePatternResult68485[1], argExprs$$14));
                                                                                                                  });
                                                                                                                } else {
                                                                                                                  const activePatternResult68482 = (0, _Exprs.BasicPatterns$$$$007CTypeTest$007C_$007C)(fsExpr$$1);

                                                                                                                  if (activePatternResult68482 != null) {
                                                                                                                    const typ$$26 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, activePatternResult68482[0]);
                                                                                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68482[1]), function (_arg54) {
                                                                                                                      const expr$$6 = _arg54;
                                                                                                                      return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(7, "Test", expr$$6, new _AST.TestKind(0, "TypeTest", typ$$26), (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1)));
                                                                                                                    });
                                                                                                                  } else {
                                                                                                                    const activePatternResult68481 = (0, _Exprs.BasicPatterns$$$$007CUnionCaseTest$007C_$007C)(fsExpr$$1);

                                                                                                                    if (activePatternResult68481 != null) {
                                                                                                                      return (0, _MonadicTrampoline.TrampolineBuilder$$ReturnFrom$$1C7D6CBF)(builder$0040$$5, transformUnionCaseTest(com$$6, ctx$$7, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), activePatternResult68481[0], activePatternResult68481[1], activePatternResult68481[2]));
                                                                                                                    } else {
                                                                                                                      const activePatternResult68480 = (0, _Exprs.BasicPatterns$$$$007CDecisionTree$007C_$007C)(fsExpr$$1);

                                                                                                                      if (activePatternResult68480 != null) {
                                                                                                                        return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, activePatternResult68480[0]), function (_arg55) {
                                                                                                                          const decisionExpr$$1 = _arg55;

                                                                                                                          const transformDecisionTargets = function transformDecisionTargets(acc, xs$$34) {
                                                                                                                            const builder$0040$$10 = _MonadicTrampoline.trampoline;
                                                                                                                            return (0, _MonadicTrampoline.TrampolineBuilder$$Delay$$Z6B697DAB)(builder$0040$$10, function () {
                                                                                                                              if (xs$$34.tail != null) {
                                                                                                                                const tail$$1 = xs$$34.tail;
                                                                                                                                const idents$$2 = xs$$34.head[0];
                                                                                                                                const expr$$7 = xs$$34.head[1];
                                                                                                                                const patternInput$$10 = (0, _List.foldBack)(function folder$$1(ident$$4, tupledArg$$5) {
                                                                                                                                  const patternInput$$9 = (0, _FSharp2Fable.Identifiers$$$bindIdentFrom)(com$$6, tupledArg$$5[0], ident$$4);
                                                                                                                                  return [patternInput$$9[0], (0, _Types.L)(patternInput$$9[1], tupledArg$$5[1])];
                                                                                                                                }, idents$$2, [ctx$$7, (0, _Types.L)()]);
                                                                                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$10, transformExpr(com$$6, patternInput$$10[0], expr$$7), function (_arg56) {
                                                                                                                                  const expr$$8 = _arg56;
                                                                                                                                  return (0, _MonadicTrampoline.TrampolineBuilder$$ReturnFrom$$1C7D6CBF)(builder$0040$$10, transformDecisionTargets((0, _Types.L)([patternInput$$10[1], expr$$8], acc), tail$$1));
                                                                                                                                });
                                                                                                                              } else {
                                                                                                                                return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$10, (0, _List.reverse)(acc));
                                                                                                                              }
                                                                                                                            });
                                                                                                                          };

                                                                                                                          return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformDecisionTargets((0, _Types.L)(), activePatternResult68480[1]), function (_arg57) {
                                                                                                                            const decisionTargets$$1 = _arg57;
                                                                                                                            return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(12, "DecisionTree", decisionExpr$$1, decisionTargets$$1));
                                                                                                                          });
                                                                                                                        });
                                                                                                                      } else {
                                                                                                                        const activePatternResult68479 = (0, _Exprs.BasicPatterns$$$$007CDecisionTreeSuccess$007C_$007C)(fsExpr$$1);

                                                                                                                        if (activePatternResult68479 != null) {
                                                                                                                          return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, (0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$22(fsExpr$$23) {
                                                                                                                            return transformExpr(com$$6, ctx$$7, fsExpr$$23);
                                                                                                                          }, activePatternResult68479[1]), function (_arg58) {
                                                                                                                            const boundValues$$1 = _arg58;
                                                                                                                            const typ$$27 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$1));
                                                                                                                            return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, new _AST.Expr(13, "DecisionTreeSuccess", activePatternResult68479[0], boundValues$$1, typ$$27));
                                                                                                                          });
                                                                                                                        } else {
                                                                                                                          var $target$$45, fieldName$$1, ownerTyp;
                                                                                                                          const activePatternResult68478 = (0, _Exprs.BasicPatterns$$$$007CILFieldGet$007C_$007C)(fsExpr$$1);

                                                                                                                          if (activePatternResult68478 != null) {
                                                                                                                            if (activePatternResult68478[0] == null) {
                                                                                                                              $target$$45 = 0;
                                                                                                                              fieldName$$1 = activePatternResult68478[2];
                                                                                                                              ownerTyp = activePatternResult68478[1];
                                                                                                                            } else {
                                                                                                                              $target$$45 = 1;
                                                                                                                            }
                                                                                                                          } else {
                                                                                                                            $target$$45 = 1;
                                                                                                                          }

                                                                                                                          switch ($target$$45) {
                                                                                                                            case 0:
                                                                                                                              {
                                                                                                                                const ownerTyp$$1 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, ownerTyp);
                                                                                                                                const typ$$28 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$6, ctx$$7.GenericArgs, (0, _Exprs.FSharpExpr$$get_Type)(fsExpr$$1));
                                                                                                                                const matchValue$$14 = (0, _Replacements.tryField)(typ$$28, ownerTyp$$1, fieldName$$1);

                                                                                                                                if (matchValue$$14 == null) {
                                                                                                                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$6, ctx$$7.InlinePath, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), (0, _String.toText)((0, _String.printf)("Cannot compile ILFieldGet(%A, %s)"))(ownerTyp$$1)(fieldName$$1)));
                                                                                                                                } else {
                                                                                                                                  const expr$$9 = matchValue$$14;
                                                                                                                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, expr$$9);
                                                                                                                                }
                                                                                                                              }

                                                                                                                            case 1:
                                                                                                                              {
                                                                                                                                if ((0, _Exprs.BasicPatterns$$$$007CQuote$007C_$007C)(fsExpr$$1) != null) {
                                                                                                                                  return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$6, ctx$$7.InlinePath, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), "Quotes are not currently supported by Fable"));
                                                                                                                                } else {
                                                                                                                                  const activePatternResult68476 = (0, _Exprs.BasicPatterns$$$$007CAddressOf$007C_$007C)(fsExpr$$1);

                                                                                                                                  if (activePatternResult68476 != null) {
                                                                                                                                    const expr$$10 = activePatternResult68476;
                                                                                                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Bind$$1CF97553)(builder$0040$$5, transformExpr(com$$6, ctx$$7, expr$$10), function (_arg59) {
                                                                                                                                      const expr$$11 = _arg59;
                                                                                                                                      return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, expr$$11);
                                                                                                                                    });
                                                                                                                                  } else {
                                                                                                                                    const expr$$12 = fsExpr$$1;
                                                                                                                                    return (0, _MonadicTrampoline.TrampolineBuilder$$Return$$1505)(builder$0040$$5, (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$6, ctx$$7.InlinePath, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$1), (0, _String.toText)((0, _String.printf)("Cannot compile expression %A"))(expr$$12)));
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
              }
            }
          }
        }
      }
    }
  });
}

function isImportedEntity(ent$$2) {
  return (0, _Seq.exists)(function predicate$$4(att) {
    const matchValue$$15 = (0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpAttribute$$get_AttributeType)(att));
    var $target$$46;

    if (matchValue$$15 != null) {
      if (matchValue$$15 === "Fable.Core.GlobalAttribute") {
        $target$$46 = 0;
      } else if (matchValue$$15 === "Fable.Core.ImportAttribute") {
        $target$$46 = 0;
      } else {
        $target$$46 = 1;
      }
    } else {
      $target$$46 = 1;
    }

    switch ($target$$46) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return false;
        }
    }
  }, (0, _Symbols.FSharpEntity$$get_Attributes)(ent$$2));
}

function isErasedUnion(ent$$3) {
  return (0, _Seq.exists)(function predicate$$5(att$$1) {
    const matchValue$$16 = (0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpAttribute$$get_AttributeType)(att$$1));
    var $target$$47;

    if (matchValue$$16 != null) {
      if (matchValue$$16 === "Fable.Core.EraseAttribute") {
        $target$$47 = 0;
      } else if (matchValue$$16 === "Fable.Core.StringEnumAttribute") {
        $target$$47 = 0;
      } else {
        $target$$47 = 1;
      }
    } else {
      $target$$47 = 1;
    }

    switch ($target$$47) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return false;
        }
    }
  }, (0, _Symbols.FSharpEntity$$get_Attributes)(ent$$3));
}

function isIgnoredMember(meth) {
  if ((((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsCompilerGenerated)(meth) ? (0, _Set.FSharpSet$$Contains$$2B595)(_Prelude.Naming$$$ignoredCompilerGenerated, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(meth)) : false) ? true : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_LiteralValue)(meth) != null) ? true : (0, _Seq.exists)(function predicate$$6(att$$2) {
    const matchValue$$17 = (0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpAttribute$$get_AttributeType)(att$$2));
    var $target$$48;

    if (matchValue$$17 != null) {
      if (matchValue$$17 === "Fable.Core.GlobalAttribute") {
        $target$$48 = 0;
      } else if (matchValue$$17 === "Fable.Core.EmitAttribute") {
        $target$$48 = 0;
      } else if (matchValue$$17 === "Fable.Core.EraseAttribute") {
        $target$$48 = 0;
      } else {
        $target$$48 = 1;
      }
    } else {
      $target$$48 = 1;
    }

    switch ($target$$48) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return false;
        }
    }
  }, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_Attributes)(meth))) {
    return true;
  } else {
    const matchValue$$18 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(meth);

    if (matchValue$$18 == null) {
      return false;
    } else {
      const ent$$4 = matchValue$$18;
      return isImportedEntity(ent$$4);
    }
  }
}

function getBaseConsAndBody(com$$30, ctx$$39, baseType$$2, acc$$1, body$$15) {
  getBaseConsAndBody: while (true) {
    const transformBodyStatements = function transformBodyStatements(com$$31, ctx$$40, acc$$2, body$$16) {
      return (0, _MonadicTrampoline.run)((0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$23(fsExpr$$24) {
        return transformExpr(com$$31, ctx$$40, fsExpr$$24);
      }, (0, _List.append)(acc$$2, (0, _Types.L)(body$$16, (0, _Types.L)()))));
    };

    const getBaseConsInfo = function getBaseConsInfo(com$$33, ctx$$42, r$$10, baseCall$$4, genArgs$$23, baseArgs$$2) {
      return (0, _Option.defaultArg)((0, _Option.defaultArg)(baseType$$2, null, function binder(_arg1$$6) {
        var name$$7;
        const baseType$$3 = (0, _FSharp2Fable.Helpers$$$nonAbbreviatedType)(_arg1$$6);

        if ((0, _Symbols.FSharpType$$get_HasTypeDefinition)(baseType$$3)) {
          const ent$$5 = (0, _Symbols.FSharpType$$get_TypeDefinition)(baseType$$3);
          const matchValue$$19 = (0, _Symbols.FSharpEntity$$get_TryFullName)(ent$$5);
          var $target$$49, name$$8;

          if (matchValue$$19 != null) {
            if (name$$7 = matchValue$$19, name$$7 !== "System.Object") {
              $target$$49 = 0;
              name$$8 = matchValue$$19;
            } else {
              $target$$49 = 1;
            }
          } else {
            $target$$49 = 1;
          }

          switch ($target$$49) {
            case 0:
              {
                return ent$$5;
              }

            case 1:
              {
                return null;
              }
          }
        } else {
          return null;
        }
      }), null, function mapping$$9(baseEntity) {
        const thisArg$$6 = (0, _Option.defaultArg)(ctx$$42.BoundConstructorThis, null, function mapping$$7(arg0$$13) {
          return new _AST.Expr(1, "IdentExpr", arg0$$13);
        });
        const baseArgs$$3 = (0, _MonadicTrampoline.run)((0, _MonadicTrampoline.trampolineListMapAcc)((0, _Types.L)(), function f$$24(fsExpr$$25) {
          return transformExpr(com$$33, ctx$$42, fsExpr$$25);
        }, baseArgs$$2));
        const genArgs$$24 = (0, _Seq.map)(function mapping$$8(arg20$0040$$8) {
          return (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$33, ctx$$42.GenericArgs, arg20$0040$$8);
        }, genArgs$$23);
        const matchValue$$20 = (0, _Replacements.tryBaseConstructor)(com$$33, baseEntity, baseCall$$4, genArgs$$24, baseArgs$$3);

        if (matchValue$$20 == null) {
          if (!(0, _FSharp2Fable.Util$$$hasImplicitConstructor)(baseEntity)) {
            (0, _Transforms.Log$$$addError)(com$$33, ctx$$42.InlinePath, null, "Classes without a primary constructor cannot be inherited: " + (0, _Symbols.FSharpEntity$$get_FullName)(baseEntity));
          }

          const baseCons = (0, _FSharp2Fable.Util$$$makeCallFrom)(com$$33, ctx$$42, r$$10, new _AST.Type(2, "Unit"), true, genArgs$$24, thisArg$$6, baseArgs$$3, baseCall$$4);
          return [(0, _FSharp2Fable.Util$$$entityRefMaybeImported)(com$$33, baseEntity), baseCons];
        } else {
          const baseRef = matchValue$$20[0];
          const args$$23 = matchValue$$20[1];
          const argInfo$$1 = new _AST.ArgInfo(thisArg$$6, args$$23, new _AST.SignatureKind(0, "Typed", (0, _FSharp2Fable.TypeHelpers$$$getArgTypes)(com$$33, baseCall$$4)), new _AST.SpreadKind(0, "NoSpread"), true);
          return [baseRef, (0, _Transforms.AST$$$staticCall)(r$$10, new _AST.Type(2, "Unit"), argInfo$$1, baseRef)];
        }
      });
    };

    const activePatternResult68578 = (0, _Exprs.BasicPatterns$$$$007CSequential$007C_$007C)(body$$15);

    if (activePatternResult68578 != null) {
      const activePatternResult68577 = (0, _FSharp2Fable.Patterns$$$$007CConstructorCall$007C_$007C)(activePatternResult68578[0]);

      if (activePatternResult68577 != null) {
        const baseConsInfo = getBaseConsInfo(com$$30, ctx$$39, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(activePatternResult68578[0]), activePatternResult68577[0], activePatternResult68577[1], activePatternResult68577[2]);
        return [baseConsInfo, transformBodyStatements(com$$30, ctx$$39, acc$$1, activePatternResult68578[1])];
      } else {
        var $target$$50, baseArgs$$5, baseCall$$7, fsExpr$$27, genArgs$$26;
        const activePatternResult68575 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult68578[0]);

        if (activePatternResult68575 != null) {
          const activePatternResult68576 = (0, _FSharp2Fable.Patterns$$$$007CConstructorCall$007C_$007C)(activePatternResult68575[1]);

          if (activePatternResult68576 != null) {
            $target$$50 = 0;
            baseArgs$$5 = activePatternResult68576[2];
            baseCall$$7 = activePatternResult68576[0];
            fsExpr$$27 = activePatternResult68575[1];
            genArgs$$26 = activePatternResult68576[1];
          } else {
            $target$$50 = 1;
          }
        } else {
          $target$$50 = 1;
        }

        switch ($target$$50) {
          case 0:
            {
              const baseConsInfo$$1 = getBaseConsInfo(com$$30, ctx$$39, (0, _FSharp2Fable.Helpers$$$makeRangeFrom)(fsExpr$$27), baseCall$$7, genArgs$$26, baseArgs$$5);
              return [baseConsInfo$$1, transformBodyStatements(com$$30, ctx$$39, acc$$1, activePatternResult68578[1])];
            }

          case 1:
            {
              com$$30 = com$$30;
              ctx$$39 = ctx$$39;
              baseType$$2 = baseType$$2;
              acc$$1 = (0, _List.append)(acc$$1, (0, _Types.L)(activePatternResult68578[0], (0, _Types.L)()));
              body$$15 = activePatternResult68578[1];
              continue getBaseConsAndBody;
            }
        }
      }
    } else {
      const body$$18 = body$$15;
      return [null, transformBodyStatements(com$$30, ctx$$39, acc$$1, body$$18)];
    }
  }
}

function transformImplicitConstructor(com$$35, ctx$$44, memb$$9, args$$24, body$$19) {
  const matchValue$$21 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(memb$$9);

  if (matchValue$$21 != null) {
    const ent$$6 = matchValue$$21;
    const patternInput$$11 = (0, _FSharp2Fable.Util$$$bindMemberArgs)(com$$35, ctx$$44, args$$24);
    const boundThis = (0, _Transforms.AST$$$makeIdentUnique)(com$$35, "this");
    const bodyCtx$$1 = new _FSharp2Fable.Context(patternInput$$11[0].Scope, patternInput$$11[0].ScopeInlineValues, patternInput$$11[0].GenericArgs, patternInput$$11[0].EnclosingMember, patternInput$$11[0].EnclosingEntity, patternInput$$11[0].CaughtException, boundThis, patternInput$$11[0].BoundMemberThis, patternInput$$11[0].InlinePath);
    const patternInput$$12 = getBaseConsAndBody(com$$35, bodyCtx$$1, (0, _Symbols.FSharpEntity$$get_BaseType)(ent$$6), (0, _Types.L)(), body$$19);
    let patternInput$$13;

    if (patternInput$$12[0] == null) {
      patternInput$$13 = [null, new _AST.Expr(14, "Sequential", patternInput$$12[1])];
    } else {
      const baseExpr = patternInput$$12[0][0];
      const baseCons$$2 = patternInput$$12[0][1];
      patternInput$$13 = [baseExpr, new _AST.Expr(14, "Sequential", (0, _Types.L)(baseCons$$2, patternInput$$12[1]))];
    }

    const name$$9 = (0, _FSharp2Fable.Helpers$$$getMemberDeclarationName)(com$$35, memb$$9);
    const entityName = (0, _FSharp2Fable.Helpers$$$getEntityDeclarationName)(com$$35, ent$$6);
    com$$35.AddUsedVarName(name$$9);
    com$$35.AddUsedVarName(entityName);
    const info$$4 = new _AST.ClassImplicitConstructorInfo(name$$9, ent$$6, entityName, (0, _FSharp2Fable.Helpers$$$isPublicEntity)(ent$$6), (0, _FSharp2Fable.Helpers$$$isPublicMember)(memb$$9), (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$9), patternInput$$13[0], patternInput$$11[1], boundThis, patternInput$$13[1]);
    return (0, _Types.L)(new _AST.Declaration(3, "ConstructorDeclaration", new _AST.ConstructorKind(0, "ClassImplicitConstructor", info$$4)), (0, _Types.L)());
  } else {
    (0, _Transforms.Log$$$addError)(com$$35, ctx$$44.InlinePath, null, "Unexpected constructor without declaring entity: " + (0, _Symbols.FSharpSymbol$$get_FullName)(memb$$9));
    return (0, _Types.L)();
  }
}

function importExprSelector(memb$$10, selector) {
  var $target$$51;

  if (selector.tag === 0) {
    if (selector.fields[0].tag === 5) {
      if (selector.fields[0].fields[0] === "__PLACE-HOLDER__") {
        $target$$51 = 0;
      } else {
        $target$$51 = 1;
      }
    } else {
      $target$$51 = 1;
    }
  } else {
    $target$$51 = 1;
  }

  switch ($target$$51) {
    case 0:
      {
        return (0, _Transforms.AST$$$makeStrConst)((0, _FSharp2Fable.Helpers$$$getMemberDisplayName)(memb$$10));
      }

    case 1:
      {
        return selector;
      }
  }
}

function transformImport(r$$11, typ$$29, isPublic, name$$10, selector$$1, path) {
  const info$$5 = new _AST.ValueDeclarationInfo(name$$10, isPublic, false, false, false);
  const fableValue = new _AST.Expr(4, "Import", selector$$1, path, new _AST.ImportKind(2, "CustomImport"), typ$$29, r$$11);
  return (0, _Types.L)(new _AST.Declaration(1, "ValueDeclaration", fableValue, info$$5), (0, _Types.L)());
}

function transformMemberValue(com$$36, ctx$$45, isPublic$$1, name$$11, memb$$11, value$$8) {
  const value$$9 = (0, _MonadicTrampoline.run)(transformExpr(com$$36, ctx$$45, value$$8));
  var $target$$52, path$$1, r$$12, selector$$2, typ$$30, fableValue$$1;

  if (value$$9.tag === 4) {
    if (value$$9.fields[2].tag === 2) {
      $target$$52 = 0;
      path$$1 = value$$9.fields[1];
      r$$12 = value$$9.fields[4];
      selector$$2 = value$$9.fields[0];
      typ$$30 = value$$9.fields[3];
    } else {
      $target$$52 = 1;
      fableValue$$1 = value$$9;
    }
  } else {
    $target$$52 = 1;
    fableValue$$1 = value$$9;
  }

  switch ($target$$52) {
    case 0:
      {
        var $target$$53;

        if (typ$$30.tag === 13) {
          if (typ$$30.fields[0].tag === 0) {
            if (typ$$30.fields[1].tag === 13) {
              if (typ$$30.fields[1].fields[0].tag === 0) {
                $target$$53 = 0;
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
              (0, _Transforms.Log$$$addError)(com$$36, ctx$$45.InlinePath, null, "Change declaration of member: " + name$$11 + "\n" + "Importing JS functions with multiple arguments as `let add: int->int->int` won't uncurry parameters." + "\n" + "Use following syntax: `let add (x:int) (y:int): int = import ...`");
              break;
            }
        }

        const selector$$3 = importExprSelector(memb$$11, selector$$2);
        return transformImport(r$$12, typ$$30, isPublic$$1, name$$11, selector$$3, path$$1);
      }

    case 1:
      {
        const info$$6 = new _AST.ValueDeclarationInfo(name$$11, isPublic$$1, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsMutable)(memb$$11), false, false);
        return (0, _Types.L)(new _AST.Declaration(1, "ValueDeclaration", fableValue$$1, info$$6), (0, _Types.L)());
      }
  }
}

function transformMemberFunction(com$$37, ctx$$46, isPublic$$2, name$$12, memb$$12, args$$26, body$$22) {
  const patternInput$$14 = (0, _FSharp2Fable.Util$$$bindMemberArgs)(com$$37, ctx$$46, args$$26);
  const body$$23 = (0, _MonadicTrampoline.run)(transformExpr(com$$37, patternInput$$14[0], body$$22));
  var $target$$54, path$$2, r$$13, selector$$4, body$$24;

  if (body$$23.tag === 4) {
    if (body$$23.fields[2].tag === 2) {
      $target$$54 = 0;
      path$$2 = body$$23.fields[1];
      r$$13 = body$$23.fields[4];
      selector$$4 = body$$23.fields[0];
    } else {
      $target$$54 = 1;
      body$$24 = body$$23;
    }
  } else {
    $target$$54 = 1;
    body$$24 = body$$23;
  }

  switch ($target$$54) {
    case 0:
      {
        const typ$$31 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$37, (0, _Map.empty)({
          Compare: _Util.comparePrimitives
        }), (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_FullType)(memb$$12));
        const selector$$5 = importExprSelector(memb$$12, selector$$4);
        return transformImport(r$$13, typ$$31, isPublic$$2, name$$12, selector$$5, path$$2);
      }

    case 1:
      {
        const fn = new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", patternInput$$14[1]), body$$24, name$$12);

        if ((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$12) === ".cctor") {
          const apply = (0, _Transforms.AST$$$staticCall)(null, new _AST.Type(2, "Unit"), (0, _Transforms.AST$$$argInfo)(null, (0, _Types.L)(), new _AST.SignatureKind(2, "NoUncurrying")), fn);
          return (0, _Types.L)(new _AST.Declaration(0, "ActionDeclaration", apply), (0, _Types.L)());
        } else {
          const info$$7 = new _AST.ValueDeclarationInfo(name$$12, isPublic$$2, false, (0, _FSharp2Fable.Util$$$hasAttribute)("Microsoft.FSharp.Core.EntryPointAttribute", (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_Attributes)(memb$$12)), (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$12));
          return (0, _Types.L)(new _AST.Declaration(1, "ValueDeclaration", fn, info$$7), (0, _Types.L)());
        }
      }
  }
}

function transformMemberFunctionOrValue(com$$38, ctx$$47, memb$$13, args$$28, body$$25) {
  const isPublic$$3 = (0, _FSharp2Fable.Helpers$$$isPublicMember)(memb$$13);
  const name$$13 = (0, _FSharp2Fable.Helpers$$$getMemberDeclarationName)(com$$38, memb$$13);
  com$$38.AddUsedVarName(name$$13);
  const matchValue$$22 = (0, _FSharp2Fable.Util$$$tryImportAttribute)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_Attributes)(memb$$13));

  if (matchValue$$22 == null) {
    if ((0, _FSharp2Fable.Helpers$$$isModuleValueForDeclarations)(memb$$13)) {
      return transformMemberValue(com$$38, ctx$$47, isPublic$$3, name$$13, memb$$13, body$$25);
    } else {
      return transformMemberFunction(com$$38, ctx$$47, isPublic$$3, name$$13, memb$$13, args$$28, body$$25);
    }
  } else {
    const selector$$6 = matchValue$$22[0];
    const path$$3 = matchValue$$22[1];
    const typ$$32 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$38, (0, _Map.empty)({
      Compare: _Util.comparePrimitives
    }), (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_FullType)(memb$$13));
    return transformImport(null, typ$$32, isPublic$$3, name$$13, (0, _Transforms.AST$$$makeStrConst)(selector$$6), (0, _Transforms.AST$$$makeStrConst)(path$$3));
  }
}

function transformAttachedMember(com$$39, ctx$$48, memb$$14, args$$29, body$$26) {
  var unitArg, _thisArg, _valueArg, _thisArg$$2;

  const matchValue$$23 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(memb$$14);

  if (matchValue$$23 != null) {
    const ent$$7 = matchValue$$23;
    const patternInput$$15 = (0, _FSharp2Fable.Util$$$bindMemberArgs)(com$$39, ctx$$48, args$$29);
    const body$$27 = (0, _MonadicTrampoline.run)(transformExpr(com$$39, patternInput$$15[0], body$$26));
    const kind$$9 = patternInput$$15[1].tail != null ? patternInput$$15[1].tail.tail != null ? patternInput$$15[1].tail.tail.tail == null ? (unitArg = patternInput$$15[1].tail.head, (_thisArg = patternInput$$15[1].head, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsPropertyGetterMethod)(memb$$14) ? (0, _Util.equals)(unitArg.Type, new _AST.Type(2, "Unit")) : false)) ? new _AST.ObjectMemberKind(2, "ObjectGetter") : patternInput$$15[1].tail != null ? patternInput$$15[1].tail.tail != null ? patternInput$$15[1].tail.tail.tail == null ? (_valueArg = patternInput$$15[1].tail.head, (_thisArg$$2 = patternInput$$15[1].head, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsPropertySetterMethod)(memb$$14))) ? new _AST.ObjectMemberKind(3, "ObjectSetter") : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : patternInput$$15[1].tail != null ? patternInput$$15[1].tail.tail != null ? patternInput$$15[1].tail.tail.tail == null ? (_valueArg = patternInput$$15[1].tail.head, (_thisArg$$2 = patternInput$$15[1].head, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsPropertySetterMethod)(memb$$14))) ? new _AST.ObjectMemberKind(3, "ObjectSetter") : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : patternInput$$15[1].tail != null ? patternInput$$15[1].tail.tail != null ? patternInput$$15[1].tail.tail.tail == null ? (_valueArg = patternInput$$15[1].tail.head, (_thisArg$$2 = patternInput$$15[1].head, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsPropertySetterMethod)(memb$$14))) ? new _AST.ObjectMemberKind(3, "ObjectSetter") : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : patternInput$$15[1].tail != null ? patternInput$$15[1].tail.tail != null ? patternInput$$15[1].tail.tail.tail == null ? (_valueArg = patternInput$$15[1].tail.head, (_thisArg$$2 = patternInput$$15[1].head, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsPropertySetterMethod)(memb$$14))) ? new _AST.ObjectMemberKind(3, "ObjectSetter") : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14)) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$14) === "System-Collections-Generic-IEnumerable`1-GetEnumerator" ? new _AST.ObjectMemberKind(4, "ObjectIterator") : new _AST.ObjectMemberKind(1, "ObjectMethod", (0, _FSharp2Fable.Helpers$$$hasSeqSpread)(memb$$14));
    const info$$8 = new _AST.AttachedMemberDeclarationInfo((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DisplayName)(memb$$14), kind$$9, (0, _FSharp2Fable.Helpers$$$getEntityDeclarationName)(com$$39, ent$$7));
    return (0, _Types.L)(new _AST.Declaration(2, "AttachedMemberDeclaration", patternInput$$15[1], body$$27, info$$8), (0, _Types.L)());
  } else {
    (0, _Transforms.Log$$$addError)(com$$39, ctx$$48.InlinePath, null, "Unexpected override without declaring entity: " + (0, _Symbols.FSharpSymbol$$get_FullName)(memb$$14));
    return (0, _Types.L)();
  }
}

function transformMemberDecl(com$$40, ctx$$49, memb$$15, args$$31, body$$28) {
  var interfaceEntity;
  const ctx$$50 = new _FSharp2Fable.Context(ctx$$49.Scope, ctx$$49.ScopeInlineValues, ctx$$49.GenericArgs, memb$$15, ctx$$49.EnclosingEntity, ctx$$49.CaughtException, ctx$$49.BoundConstructorThis, ctx$$49.BoundMemberThis, ctx$$49.InlinePath);

  if (isIgnoredMember(memb$$15)) {
    return (0, _Types.L)();
  } else if ((0, _FSharp2Fable.Helpers$$$isInline)(memb$$15)) {
    const inlineExpr = new _Compiler.InlineExpr((0, _List.concat)(args$$31), body$$28, com$$40.CurrentFile);
    FableCompiler$$AddInlineExpr$$4468F7A4(com$$40, memb$$15, inlineExpr);
    return (0, _Types.L)();
  } else if ((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsImplicitConstructor)(memb$$15)) {
    return transformImplicitConstructor(com$$40, ctx$$50, memb$$15, args$$31, body$$28);
  } else if ((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsExplicitInterfaceImplementation)(memb$$15)) {
    if ((0, _Set.contains)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$15), _Prelude.Naming$$$interfaceMethodsImplementedInPrototype)) {
      return transformAttachedMember(com$$40, ctx$$50, memb$$15, args$$31, body$$28);
    } else {
      const matchValue$$24 = (0, _FSharp2Fable.TypeHelpers$$$tryGetInterfaceDefinitionFromMethod)(memb$$15);
      var $target$$55, interfaceEntity$$1;

      if (matchValue$$24 != null) {
        if (interfaceEntity = matchValue$$24, !(0, _Set.FSharpSet$$Contains$$2B595)(_Prelude.Naming$$$ignoredInterfaces, (0, _Symbols.FSharpEntity$$get_FullName)(interfaceEntity))) {
          $target$$55 = 0;
          interfaceEntity$$1 = matchValue$$24;
        } else {
          $target$$55 = 1;
        }
      } else {
        $target$$55 = 1;
      }

      switch ($target$$55) {
        case 0:
          {
            return transformAttachedMember(com$$40, ctx$$50, memb$$15, args$$31, body$$28);
          }

        case 1:
          {
            return (0, _Types.L)();
          }
      }
    }
  } else if ((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsOverrideOrExplicitInterfaceImplementation)(memb$$15)) {
    return transformAttachedMember(com$$40, ctx$$50, memb$$15, args$$31, body$$28);
  } else {
    return transformMemberFunctionOrValue(com$$40, ctx$$50, memb$$15, args$$31, body$$28);
  }
}

function transformDeclarations(com$$41, ctx$$51, rootEnt, rootDecls) {
  const transformDeclarationsInner = function transformDeclarationsInner(com$$42, ctx$$52, fsDecls) {
    return (0, _List.collect)(function mapping$$10(fsDecl) {
      switch (fsDecl.tag) {
        case 1:
          {
            const meth$$1 = fsDecl.fields[0];
            const body$$29 = fsDecl.fields[2];
            const args$$32 = fsDecl.fields[1];
            return transformMemberDecl(com$$42, ctx$$52, meth$$1, args$$32, body$$29);
          }

        case 2:
          {
            const fe = fsDecl.fields[0];
            return (0, _Types.L)(new _AST.Declaration(0, "ActionDeclaration", (0, _MonadicTrampoline.run)(transformExpr(com$$42, ctx$$52, fe))), (0, _Types.L)());
          }

        default:
          {
            const sub = fsDecl.fields[1];
            const ent$$8 = fsDecl.fields[0];
            const matchValue$$25 = (0, _FSharp2Fable.Util$$$tryImportAttribute)((0, _Symbols.FSharpEntity$$get_Attributes)(ent$$8));

            if (matchValue$$25 == null) {
              if ((0, _Symbols.FSharpEntity$$get_IsFSharpUnion)(ent$$8) ? !isErasedUnion(ent$$8) : false) {
                const entityName$$1 = (0, _FSharp2Fable.Helpers$$$getEntityDeclarationName)(com$$42, ent$$8);
                FableCompiler$$AddUsedVarName$$Z721C83C5(com$$42, entityName$$1);
                const info$$9 = new _AST.UnionConstructorInfo(ent$$8, entityName$$1, (0, _FSharp2Fable.Helpers$$$isPublicEntity)(ent$$8));
                return (0, _Types.L)(new _AST.Declaration(3, "ConstructorDeclaration", new _AST.ConstructorKind(1, "UnionConstructor", info$$9)), (0, _Types.L)());
              } else {
                var $target$$56;

                if (matchValue$$25 == null) {
                  if (((0, _Symbols.FSharpEntity$$get_IsFSharpRecord)(ent$$8) ? true : (0, _Symbols.FSharpEntity$$get_IsFSharpExceptionDeclaration)(ent$$8)) ? true : (((0, _Symbols.FSharpEntity$$get_IsClass)(ent$$8) ? true : (0, _Symbols.FSharpEntity$$get_IsValueType)(ent$$8)) ? !(0, _Symbols.FSharpEntity$$get_IsMeasure)(ent$$8) : false) ? !(0, _FSharp2Fable.Util$$$hasImplicitConstructor)(ent$$8) : false) {
                    $target$$56 = 0;
                  } else {
                    $target$$56 = 1;
                  }
                } else {
                  $target$$56 = 1;
                }

                switch ($target$$56) {
                  case 0:
                    {
                      const entityName$$2 = (0, _FSharp2Fable.Helpers$$$getEntityDeclarationName)(com$$42, ent$$8);
                      FableCompiler$$AddUsedVarName$$Z721C83C5(com$$42, entityName$$2);
                      const info$$10 = new _AST.CompilerGeneratedConstructorInfo(ent$$8, entityName$$2, (0, _FSharp2Fable.Helpers$$$isPublicEntity)(ent$$8));
                      return (0, _Types.L)(new _AST.Declaration(3, "ConstructorDeclaration", new _AST.ConstructorKind(2, "CompilerGeneratedConstructor", info$$10)), (0, _Types.L)());
                    }

                  case 1:
                    {
                      if (matchValue$$25 == null) {
                        return transformDeclarationsInner(com$$42, new _FSharp2Fable.Context(ctx$$52.Scope, ctx$$52.ScopeInlineValues, ctx$$52.GenericArgs, ctx$$52.EnclosingMember, ent$$8, ctx$$52.CaughtException, ctx$$52.BoundConstructorThis, ctx$$52.BoundMemberThis, ctx$$52.InlinePath), sub);
                      } else {
                        throw new _Types.MatchFailureException("C:/code/fable/src/dotnet/Fable.Compiler/Transforms/FSharp2Fable.fs", 870, 22);
                      }
                    }
                }
              }
            } else {
              const selector$$7 = matchValue$$25[0];
              const path$$4 = matchValue$$25[1];
              const name$$14 = (0, _FSharp2Fable.Helpers$$$getEntityDeclarationName)(com$$42, ent$$8);
              FableCompiler$$AddUsedVarName$$Z721C83C5(com$$42, name$$14);
              return transformImport(null, new _AST.Type(1, "Any"), !(0, _Symbols.FSharpAccessibility$$get_IsPrivate)((0, _Symbols.FSharpEntity$$get_Accessibility)(ent$$8)), name$$14, (0, _Transforms.AST$$$makeStrConst)(selector$$7), (0, _Transforms.AST$$$makeStrConst)(path$$4));
            }
          }
      }
    }, fsDecls);
  };

  (0, _List.iterate)(function action(_arg60) {
    switch (_arg60.tag) {
      case 1:
        {
          const memb$$16 = _arg60.fields[0];
          FableCompiler$$AddUsedVarName$$Z721C83C5(com$$41, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$16));
          break;
        }

      case 2:
        {
          break;
        }

      default:
        {
          const ent$$9 = _arg60.fields[0];
          FableCompiler$$AddUsedVarName$$Z721C83C5(com$$41, (0, _Symbols.FSharpEntity$$get_CompiledName)(ent$$9));
        }
    }
  }, rootDecls);
  return transformDeclarationsInner(com$$41, ctx$$51, rootDecls);
}

function getRootModuleAndDecls(decls) {
  const $007CCommonNamespace$007C_$007C = function $007CCommonNamespace$007C_$007C(_arg61) {
    var subDecls, restDecls, ent$$10;
    var $target$$57, ent$$11, restDecls$$1, subDecls$$1;

    if (_arg61.tail != null) {
      if (_arg61.head.tag === 0) {
        if (subDecls = _arg61.head.fields[1], (restDecls = _arg61.tail, (ent$$10 = _arg61.head.fields[0], (0, _Symbols.FSharpEntity$$get_IsNamespace)(ent$$10)))) {
          $target$$57 = 0;
          ent$$11 = _arg61.head.fields[0];
          restDecls$$1 = _arg61.tail;
          subDecls$$1 = _arg61.head.fields[1];
        } else {
          $target$$57 = 1;
        }
      } else {
        $target$$57 = 1;
      }
    } else {
      $target$$57 = 1;
    }

    switch ($target$$57) {
      case 0:
        {
          const commonName = (0, _Symbols.FSharpEntity$$get_CompiledName)(ent$$11);
          return (0, _Option.defaultArg)((0, _List.fold)(function folder$$2(acc$$3, decl) {
            const matchValue$$26 = [acc$$3, decl];
            var $target$$58, ent$$12, subDecls$$2, subDecls2;

            if (matchValue$$26[0] != null) {
              if (matchValue$$26[1].tag === 0) {
                $target$$58 = 0;
                ent$$12 = matchValue$$26[1].fields[0];
                subDecls$$2 = matchValue$$26[0];
                subDecls2 = matchValue$$26[1].fields[1];
              } else {
                $target$$58 = 1;
              }
            } else {
              $target$$58 = 1;
            }

            switch ($target$$58) {
              case 0:
                {
                  if ((0, _Symbols.FSharpEntity$$get_CompiledName)(ent$$12) === commonName) {
                    return (0, _List.append)(subDecls$$2, subDecls2);
                  } else {
                    return null;
                  }
                }

              case 1:
                {
                  return null;
                }
            }
          }, subDecls$$1, restDecls$$1), null, function mapping$$11(subDecls$$3) {
            return [ent$$11, subDecls$$3];
          });
        }

      case 1:
        {
          return null;
        }
    }
  };

  const getRootModuleAndDeclsInner = function getRootModuleAndDeclsInner(outerEnt, decls$$1) {
    var ent$$13, decls$$2;

    getRootModuleAndDeclsInner: while (true) {
      var $target$$59, decls$$3, ent$$14;

      if (decls$$1.tail != null) {
        if (decls$$1.head.tag === 0) {
          if (decls$$1.tail.tail == null) {
            if (ent$$13 = decls$$1.head.fields[0], (decls$$2 = decls$$1.head.fields[1], (0, _Symbols.FSharpEntity$$get_IsFSharpModule)(ent$$13) ? true : (0, _Symbols.FSharpEntity$$get_IsNamespace)(ent$$13))) {
              $target$$59 = 0;
              decls$$3 = decls$$1.head.fields[1];
              ent$$14 = decls$$1.head.fields[0];
            } else {
              $target$$59 = 1;
            }
          } else {
            $target$$59 = 1;
          }
        } else {
          $target$$59 = 1;
        }
      } else {
        $target$$59 = 1;
      }

      switch ($target$$59) {
        case 0:
          {
            outerEnt = ent$$14;
            decls$$1 = decls$$3;
            continue getRootModuleAndDeclsInner;
          }

        case 1:
          {
            const activePatternResult68640 = $007CCommonNamespace$007C_$007C(decls$$1);

            if (activePatternResult68640 != null) {
              outerEnt = activePatternResult68640[0];
              decls$$1 = activePatternResult68640[1];
              continue getRootModuleAndDeclsInner;
            } else {
              const decls$$5 = decls$$1;
              return [outerEnt, decls$$5];
            }
          }
      }
    }
  };

  return getRootModuleAndDeclsInner(null, decls);
}

function tryGetMemberArgsAndBody(com$$43, implFiles, fileName, meth$$2) {
  const tryGetMemberArgsAndBody$0027 = function tryGetMemberArgsAndBody$0027(methFullName, _arg62) {
    switch (_arg62.tag) {
      case 1:
        {
          const meth2 = _arg62.fields[0];
          const body$$30 = _arg62.fields[2];
          const args$$33 = _arg62.fields[1];

          if ((0, _FSharp2Fable.Helpers$$$getMemberUniqueName)(com$$43, meth2) === methFullName) {
            return [args$$33, body$$30];
          } else {
            return null;
          }
        }

      case 2:
        {
          return null;
        }

      default:
        {
          const e$$5 = _arg62.fields[0];
          const decls$$6 = _arg62.fields[1];
          const entFullName = (0, _FSharp2Fable.Helpers$$$getEntityFullName)(e$$5);

          if (methFullName.indexOf(entFullName) === 0) {
            return (0, _List.tryPick)((0, _Util.partialApply)(1, tryGetMemberArgsAndBody$0027, [methFullName]), decls$$6);
          } else {
            return null;
          }
        }
    }
  };

  const fullName = (0, _FSharp2Fable.Helpers$$$getMemberUniqueName)(com$$43, meth$$2);
  return (0, _Option.defaultArg)((0, _Map.tryFind)(fileName, implFiles), null, function binder$$1(f$$25) {
    return (0, _List.tryPick)((0, _Util.partialApply)(1, tryGetMemberArgsAndBody$0027, [fullName]), (0, _Exprs.FSharpImplementationFileContents$$get_Declarations)(f$$25));
  });
}

const FableCompiler = (0, _Types.declare)(function FableCompiler(com$$44, implFiles$$1) {
  const $this$$19 = this;
  $this$$19.com = com$$44;
  $this$$19.implFiles = implFiles$$1;
  $this$$19["UsedVarNames@"] = new Set([]);
  $this$$19["Dependencies@"] = new Set([]);
});
exports.FableCompiler = FableCompiler;

function FableCompiler$$$$002Ector$$168196CA(com$$44, implFiles$$1) {
  return this != null ? FableCompiler.call(this, com$$44, implFiles$$1) : new FableCompiler(com$$44, implFiles$$1);
}

function FableCompiler$$get_UsedVarNames(__) {
  return __["UsedVarNames@"];
}

function FableCompiler$$get_Dependencies(__$$1) {
  return __$$1["Dependencies@"];
}

function FableCompiler$$AddUsedVarName$$Z721C83C5(this$, varName) {
  (0, _Util.addToSet)(varName, FableCompiler$$get_UsedVarNames(this$));
}

function FableCompiler$$AddInlineExpr$$4468F7A4(__$$2, memb$$17, inlineExpr$$1) {
  const fullName$$1 = (0, _FSharp2Fable.Helpers$$$getMemberUniqueName)(__$$2.com, memb$$17);

  __$$2.com.GetOrAddInlineExpr(fullName$$1, function () {
    return inlineExpr$$1;
  });
}

FableCompiler.prototype.Transform = function (ctx$$53, fsExpr$$28) {
  const this$$$1 = this;
  return (0, _MonadicTrampoline.run)(transformExpr(this$$$1, ctx$$53, fsExpr$$28));
};

FableCompiler.prototype.TryReplace = function (ctx$$54, r$$15, t$$16, info$$11, thisArg$$7, args$$34) {
  const this$$$2 = this;
  return (0, _Replacements.tryCall)(this$$$2, ctx$$54, r$$15, t$$16, info$$11, thisArg$$7, args$$34);
};

FableCompiler.prototype.InjectArgument = function (ctx$$55, r$$16, genArgs$$27, parameter) {
  const this$$$3 = this;
  return (0, _Inject.injectArg)(this$$$3, ctx$$55, r$$16, genArgs$$27, parameter);
};

FableCompiler.prototype.GetInlineExpr = function (memb$$18) {
  var copyOfStruct;
  const this$$$4 = this;
  const fileName$$1 = (0, _Prelude.Path$$$normalizePathAndEnsureFsExtension)((copyOfStruct = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclarationLocation)(memb$$18), (0, _range.range$$get_FileName)(copyOfStruct)));

  if (fileName$$1 !== this$$$4.com.CurrentFile) {
    (0, _Util.addToSet)(fileName$$1, FableCompiler$$get_Dependencies(this$$$4));
  }

  const fullName$$2 = (0, _FSharp2Fable.Helpers$$$getMemberUniqueName)(this$$$4.com, memb$$18);
  return this$$$4.com.GetOrAddInlineExpr(fullName$$2, function () {
    const matchValue$$27 = tryGetMemberArgsAndBody(this$$$4.com, this$$$4.implFiles, fileName$$1, memb$$18);

    if (matchValue$$27 == null) {
      throw new Error("Cannot find inline member " + (0, _Symbols.FSharpSymbol$$get_FullName)(memb$$18));
    } else {
      const body$$31 = matchValue$$27[1];
      const args$$35 = matchValue$$27[0];
      return new _Compiler.InlineExpr((0, _List.concat)(args$$35), body$$31, fileName$$1);
    }
  });
};

FableCompiler.prototype.AddUsedVarName = function (varName$$1) {
  const this$$$5 = this;
  const value$$13 = FableCompiler$$AddUsedVarName$$Z721C83C5(this$$$5, varName$$1);
};

FableCompiler.prototype.IsUsedVarName = function (varName$$2) {
  const this$$$6 = this;
  return FableCompiler$$get_UsedVarNames(this$$$6).has(varName$$2);
};

Object.defineProperty(FableCompiler.prototype, "Options", {
  "get": function () {
    const __$$3 = this;
    return __$$3.com.Options;
  }
});
Object.defineProperty(FableCompiler.prototype, "FableCore", {
  "get": function () {
    const __$$4 = this;
    return __$$4.com.FableCore;
  }
});
Object.defineProperty(FableCompiler.prototype, "CurrentFile", {
  "get": function () {
    const __$$5 = this;
    return __$$5.com.CurrentFile;
  }
});

FableCompiler.prototype.GetUniqueVar = function (name$$15) {
  const __$$6 = this;
  return __$$6.com.GetUniqueVar(name$$15);
};

FableCompiler.prototype.GetRootModule = function (fileName$$2) {
  const __$$7 = this;
  return __$$7.com.GetRootModule(fileName$$2);
};

FableCompiler.prototype.GetOrAddInlineExpr = function (fullName$$3, generate) {
  const __$$8 = this;
  return __$$8.com.GetOrAddInlineExpr(fullName$$3, generate);
};

FableCompiler.prototype.AddLog = function (msg, severity, range$$10, fileName$$3, tag) {
  const __$$9 = this;

  __$$9.com.AddLog(msg, severity, range$$10, fileName$$3, tag);
};

function getRootModuleFullName(file) {
  const patternInput$$16 = getRootModuleAndDecls((0, _Exprs.FSharpImplementationFileContents$$get_Declarations)(file));

  if (patternInput$$16[0] == null) {
    return "";
  } else {
    const rootEnt$$2 = patternInput$$16[0];
    return (0, _FSharp2Fable.Helpers$$$getEntityFullName)(rootEnt$$2);
  }
}

function transformFile(com$$45, implFiles$$2) {
  try {
    let file$$2;
    const matchValue$$28 = (0, _Map.tryFind)(com$$45.CurrentFile, implFiles$$2);

    if (matchValue$$28 == null) {
      file$$2 = (0, _String.toFail)((0, _String.printf)("File %s doesn't belong to parsed project"))(com$$45.CurrentFile);
    } else {
      const file$$1 = matchValue$$28;
      file$$2 = file$$1;
    }

    const patternInput$$17 = getRootModuleAndDecls((0, _Exprs.FSharpImplementationFileContents$$get_Declarations)(file$$2));
    const fcom = FableCompiler$$$$002Ector$$168196CA(com$$45, implFiles$$2);
    const ctx$$56 = (0, _FSharp2Fable.Context$$$Create$$Z6559E4BE)(patternInput$$17[0]);
    const rootDecls$$2 = transformDeclarations(fcom, ctx$$56, patternInput$$17[0], patternInput$$17[1]);
    return (0, _AST.File$$$$002Ector$$788BC77C)(com$$45.CurrentFile, rootDecls$$2, (0, _Set.ofSeq)(FableCompiler$$get_UsedVarNames(fcom), {
      Compare: _Util.comparePrimitives
    }), (0, _Set.ofSeq)(FableCompiler$$get_Dependencies(fcom), {
      Compare: _Util.comparePrimitives
    }));
  } catch (ex) {
    throw new Error((0, _String.toText)((0, _String.printf)("%s (%s)"))(ex.message)(com$$45.CurrentFile), ex);
  }
}