"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$007CTryDefinition$007C_$007C = $007CTryDefinition$007C_$007C;
exports.$007CImplicit$007C_$007C = $007CImplicit$007C_$007C;
exports.$007CGeneratedInterface$007C_$007C = $007CGeneratedInterface$007C_$007C;
exports.injectArg = injectArg;

var _List = require("../fable-core.2.0.3/List");

var _AST = require("../AST/AST.Fable");

var _Option = require("../fable-core.2.0.3/Option");

var _FSharp2Fable = require("./FSharp2Fable.Util");

var _Symbols = require("../symbols/Symbols");

var _String = require("../fable-core.2.0.3/String");

var _Transforms = require("./Transforms.Util");

var _ServiceAssemblyContent = require("../service/ServiceAssemblyContent");

var _Util = require("../fable-core.2.0.3/Util");

var _Map = require("../fable-core.2.0.3/Map");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Types = require("../fable-core.2.0.3/Types");

var _Replacements = require("./Replacements");

function resolveParamGeneric(genArg, _arg1) {
  if (_arg1.tag === 14) {
    const genParamName = _arg1.fields[0];
    return (0, _Option.defaultArg)((0, _List.tryPick)(function chooser(tupledArg) {
      if (tupledArg[0] === genParamName) {
        return tupledArg[1];
      } else {
        return null;
      }
    }, genArg.Value), new _AST.Type(14, "GenericParam", genParamName));
  } else {
    const t = _arg1;
    return t;
  }
}

function $007CTryDefinition$007C_$007C(_arg1$$1) {
  const t$$2 = (0, _FSharp2Fable.Helpers$$$nonAbbreviatedType)(_arg1$$1);

  if ((0, _Symbols.FSharpType$$get_HasTypeDefinition)(t$$2)) {
    return [(0, _Symbols.FSharpType$$get_TypeDefinition)(t$$2), (0, _Symbols.FSharpType$$get_GenericArguments)(t$$2)];
  } else {
    return null;
  }
}

function $007CImplicit$007C_$007C(com, ctx, r, par, typ) {
  var m$$1;

  if ((0, _FSharp2Fable.Util$$$hasAttribute)("Fable.Core.Experimental.ImplicitAttribute", (0, _Symbols.FSharpParameter$$get_Attributes)(par))) {
    const fail = function fail(msg) {
      const msg$$1 = (0, _String.isNullOrEmpty)(msg) ? "Cannot find {0} in enclosing module" : msg;
      const msg$$2 = (0, _String.format)(msg$$1, "implicit for `" + (0, _Symbols.FSharpSymbol$$get_DisplayName)(par) + "` (" + (0, _Transforms.AST$$$getTypeFullName)(true, typ) + ")");
      return (0, _Transforms.Log$$$addErrorAndReturnNull)(com, ctx.InlinePath, r, msg$$2);
    };

    if (ctx.EnclosingEntity != null) {
      const enclosingEntity = ctx.EnclosingEntity;
      const candidates = (0, _List.ofSeq)((0, _Seq.choose)(function chooser$$1(m) {
        if ((0, _FSharp2Fable.Util$$$hasAttribute)("Fable.Core.Experimental.ImplicitAttribute", (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_Attributes)(m))) {
          return (0, _Option.defaultArg)((0, _ServiceAssemblyContent.FSharpMemberOrFunctionOrValue$002Eget_FullTypeSafe)(m), null, function binder(typ2) {
            const typ2$$1 = (0, _FSharp2Fable.TypeHelpers$$$makeType)(com, (0, _Map.empty)({
              Compare: _Util.comparePrimitives
            }), typ2);

            if ((0, _Transforms.AST$$$typeEquals)(true, typ, typ2$$1)) {
              return m;
            } else {
              return null;
            }
          });
        } else {
          return null;
        }
      }, (0, _Symbols.FSharpEntity$$get_MembersFunctionsAndValues)(enclosingEntity)));
      var $target$$5, m$$2;

      if (candidates.tail != null) {
        if (candidates.tail.tail == null) {
          if (m$$1 = candidates.head, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsMutable)(m$$1)) {
            $target$$5 = 1;
            m$$2 = candidates.head;
          } else {
            $target$$5 = 2;
          }
        } else {
          $target$$5 = 2;
        }
      } else {
        $target$$5 = 0;
      }

      switch ($target$$5) {
        case 0:
          {
            return fail("");
          }

        case 1:
          {
            return fail("Found {0} but it's mutable");
          }

        case 2:
          {
            var $target$$6, implicitValue;

            if (candidates.tail != null) {
              if (candidates.tail.tail == null) {
                $target$$6 = 0;
                implicitValue = candidates.head;
              } else {
                $target$$6 = 1;
              }
            } else {
              $target$$6 = 1;
            }

            switch ($target$$6) {
              case 0:
                {
                  const e = (0, _FSharp2Fable.Util$$$memberRefTyped)(com, typ, implicitValue);
                  var $target$$7;

                  if (typ.tag === 13) {
                    if (typ.fields[0].tag === 0) {
                      if (typ.fields[1].tag === 13) {
                        if (typ.fields[1].fields[0].tag === 0) {
                          $target$$7 = 0;
                        } else {
                          $target$$7 = 1;
                        }
                      } else {
                        $target$$7 = 1;
                      }
                    } else {
                      $target$$7 = 1;
                    }
                  } else {
                    $target$$7 = 1;
                  }

                  switch ($target$$7) {
                    case 0:
                      {
                        const paramsCount = (0, _Util.count)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(implicitValue)) | 0;

                        if (paramsCount > 0) {
                          const args = (0, _List.ofSeq)((0, _Seq.delay)(function () {
                            return (0, _Seq.map)(function (i) {
                              return (0, _Transforms.AST$$$makeIdentUnique)(com, "arg");
                            }, (0, _Seq.rangeNumber)(1, 1, paramsCount));
                          }));
                          const argInfo = (0, _Transforms.AST$$$argInfo)(null, (0, _List.map)(function (arg0$$1) {
                            return new _AST.Expr(1, "IdentExpr", arg0$$1);
                          }, args), new _AST.SignatureKind(2, "NoUncurrying"));
                          return (0, _Transforms.AST$$$makeLambda)(args, (0, _Transforms.AST$$$staticCall)(null, new _AST.Type(1, "Any"), argInfo, e));
                        } else {
                          return e;
                        }
                      }

                    case 1:
                      {
                        return e;
                      }
                  }
                }

              case 1:
                {
                  return fail("Found more than one {0}, please disambiguate");
                }
            }
          }
      }
    } else {
      return fail("");
    }
  } else {
    return null;
  }
}

function $007CGeneratedInterface$007C_$007C(com$$1, ctx$$1, r$$1, t$$3) {
  var $target$$8, t$$4, typDef;

  if (t$$3.tag === 16) {
    if (t$$3.fields[1].tail != null) {
      if (t$$3.fields[1].tail.tail == null) {
        $target$$8 = 0;
        t$$4 = t$$3.fields[1].head;
        typDef = t$$3.fields[0];
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
        const matchValue$$1 = (0, _Symbols.FSharpEntity$$get_TryFullName)(typDef);
        var $target$$9;

        if (matchValue$$1 != null) {
          if (matchValue$$1 === "Fable.Core.ITypeResolver`1") {
            $target$$9 = 0;
          } else if (matchValue$$1 === "System.Collections.Generic.IComparer`1") {
            $target$$9 = 1;
          } else if (matchValue$$1 === "System.Collections.Generic.IEqualityComparer`1") {
            $target$$9 = 2;
          } else if (matchValue$$1 === "Fable.Core.IGenericAdder`1") {
            $target$$9 = 3;
          } else if (matchValue$$1 === "Fable.Core.IGenericAverager`1") {
            $target$$9 = 4;
          } else {
            $target$$9 = 5;
          }
        } else {
          $target$$9 = 5;
        }

        switch ($target$$9) {
          case 0:
            {
              const fn = (0, _Transforms.AST$$$makeDelegate)((0, _Types.L)(), new _AST.Expr(0, "Value", new _AST.ValueKind(0, "TypeInfo", t$$4, r$$1)));
              return (0, _Replacements.makeFunctionsObject)((0, _Types.L)(["ResolveType", fn], (0, _Types.L)()));
            }

          case 1:
            {
              return (0, _Replacements.makeComparer)(com$$1, t$$4);
            }

          case 2:
            {
              return (0, _Replacements.makeEqualityComparer)(com$$1, t$$4);
            }

          case 3:
            {
              return (0, _Replacements.makeGenericAdder)(com$$1, ctx$$1, t$$4);
            }

          case 4:
            {
              return (0, _Replacements.makeGenericAverager)(com$$1, ctx$$1, t$$4);
            }

          case 5:
            {
              return null;
            }
        }
      }

    case 1:
      {
        return null;
      }
  }
}

function injectArg(com$$2, ctx$$2, r$$2, genArgs, par$$1) {
  var typ$$3;
  const parType = (0, _FSharp2Fable.Helpers$$$nonAbbreviatedType)((0, _Symbols.FSharpParameter$$get_Type)(par$$1));
  const typ$$1 = ((0, _Symbols.FSharpType$$get_HasTypeDefinition)(parType) ? (0, _Util.equals)((0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpType$$get_TypeDefinition)(parType)), "Microsoft.FSharp.Core.FSharpOption`1") : false) ? (0, _FSharp2Fable.TypeHelpers$$$makeType)(com$$2, (0, _Map.ofSeq)(genArgs, {
    Compare: _Util.comparePrimitives
  }), (0, _Symbols.FSharpType$$get_GenericArguments)(parType)[0]) : null;
  var $target$$10, e$$1;

  if (typ$$1 != null) {
    const activePatternResult68295 = $007CImplicit$007C_$007C(com$$2, ctx$$2, r$$2, par$$1, typ$$1);

    if (activePatternResult68295 != null) {
      $target$$10 = 0;
      e$$1 = activePatternResult68295;
    } else {
      $target$$10 = 1;
    }
  } else {
    $target$$10 = 1;
  }

  switch ($target$$10) {
    case 0:
      {
        return e$$1;
      }

    case 1:
      {
        var $target$$11, e$$2;

        if (typ$$1 != null) {
          const activePatternResult68293 = $007CGeneratedInterface$007C_$007C(com$$2, ctx$$2, r$$2, typ$$1);

          if (activePatternResult68293 != null) {
            $target$$11 = 0;
            e$$2 = activePatternResult68293;
          } else {
            $target$$11 = 1;
          }
        } else {
          $target$$11 = 1;
        }

        switch ($target$$11) {
          case 0:
            {
              return e$$2;
            }

          case 1:
            {
              return (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$2, ctx$$2.InlinePath, r$$2, (0, _String.toText)((0, _String.printf)("Cannot inject argument %s of type %s"))((0, _Symbols.FSharpSymbol$$get_DisplayName)(par$$1))(typ$$1 == null ? (0, _Util.toString)(parType) : (typ$$3 = typ$$1, (0, _Transforms.AST$$$getTypeFullName)(true, typ$$3))));
            }
        }
      }
  }
}