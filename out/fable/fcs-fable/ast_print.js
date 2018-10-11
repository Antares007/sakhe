"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attribsOfSymbol = attribsOfSymbol;
exports.printFSharpDecls = printFSharpDecls;

var _Symbols = require("../symbols/Symbols");

var _Seq = require("../fable-core.2.0.3/Seq");

var _String = require("../fable-core.2.0.3/String");

var _List = require("../fable-core.2.0.3/List");

function attribsOfSymbol(s) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    var matchValue, t, t$$1, matchValue$$1, e;

    if (s instanceof _Symbols.FSharpField) {
      return (0, _Seq.append)((0, _Seq.singleton)("field"), (0, _Seq.delay)(function () {
        return (0, _Seq.append)((0, _Symbols.FSharpField$$get_IsCompilerGenerated)(s) ? (0, _Seq.singleton)("compgen") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Symbols.FSharpField$$get_IsDefaultValue)(s) ? (0, _Seq.singleton)("default") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
            return (0, _Seq.append)((0, _Symbols.FSharpField$$get_IsMutable)(s) ? (0, _Seq.singleton)("mutable") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
              return (0, _Seq.append)((0, _Symbols.FSharpField$$get_IsVolatile)(s) ? (0, _Seq.singleton)("volatile") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                return (0, _Seq.append)((0, _Symbols.FSharpField$$get_IsStatic)(s) ? (0, _Seq.singleton)("static") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                  return (0, _Symbols.FSharpField$$get_IsLiteral)(s) ? (0, _Seq.singleton)((0, _String.toText)((0, _String.printf)("%A"))((0, _Symbols.FSharpField$$get_LiteralValue)(s))) : (0, _Seq.empty)();
                }));
              }));
            }));
          }));
        }));
      }));
    } else if (s instanceof _Symbols.FSharpEntity) {
      (0, _Symbols.FSharpEntity$$get_TryFullName)(s);
      return (0, _Seq.append)((matchValue = (0, _Symbols.FSharpEntity$$get_BaseType)(s), matchValue != null ? (t = matchValue, (0, _Symbols.FSharpType$$get_HasTypeDefinition)(t) ? (0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpType$$get_TypeDefinition)(t)) != null : false) ? (t$$1 = matchValue, (0, _Seq.singleton)((0, _String.toText)((0, _String.printf)("inherits %s"))((0, _Symbols.FSharpEntity$$get_FullName)((0, _Symbols.FSharpType$$get_TypeDefinition)(t$$1))))) : (null, (0, _Seq.empty)()) : (null, (0, _Seq.empty)())), (0, _Seq.delay)(function () {
        return (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_IsNamespace)(s) ? (0, _Seq.singleton)("namespace") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_IsFSharpModule)(s) ? (0, _Seq.singleton)("module") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
            return (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_IsByRef)(s) ? (0, _Seq.singleton)("byref") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
              return (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_IsClass)(s) ? (0, _Seq.singleton)("class") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                return (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_IsDelegate)(s) ? (0, _Seq.singleton)("delegate") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                  return (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_IsEnum)(s) ? (0, _Seq.singleton)("enum") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_IsFSharpAbbreviation)(s) ? (0, _Seq.singleton)("abbrev") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                      return (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_IsFSharpExceptionDeclaration)(s) ? (0, _Seq.singleton)("exception") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                        return (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_IsFSharpRecord)(s) ? (0, _Seq.singleton)("record") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                          return (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_IsFSharpUnion)(s) ? (0, _Seq.singleton)("union") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                            return (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_IsInterface)(s) ? (0, _Seq.singleton)("interface") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                              return (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_IsMeasure)(s) ? (0, _Seq.singleton)("measure") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                                return (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_IsUnresolved)(s) ? (0, _Seq.singleton)("unresolved") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                                  return (0, _Symbols.FSharpEntity$$get_IsValueType)(s) ? (0, _Seq.singleton)("valuetype") : (0, _Seq.empty)();
                                }));
                              }));
                            }));
                          }));
                        }));
                      }));
                    }));
                  }));
                }));
              }));
            }));
          }));
        }));
      }));
    } else if (s instanceof _Symbols.FSharpMemberOrFunctionOrValue) {
      return (0, _Seq.append)((0, _Seq.singleton)("owner: " + (matchValue$$1 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(s), matchValue$$1 != null ? (e = matchValue$$1, (0, _Symbols.FSharpEntity$$get_CompiledName)(e)) : "<unknown>")), (0, _Seq.delay)(function () {
        return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsActivePattern)(s) ? (0, _Seq.singleton)("active_pattern") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsDispatchSlot)(s) ? (0, _Seq.singleton)("dispatch_slot") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
            return (0, _Seq.append)(((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsModuleValueOrMember)(s) ? !(0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsMember)(s) : false) ? (0, _Seq.singleton)("val") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
              return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsMember)(s) ? (0, _Seq.singleton)("member") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsProperty)(s) ? (0, _Seq.singleton)("property") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                  return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsExtensionMember)(s) ? (0, _Seq.singleton)("extension_member") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                    return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsPropertyGetterMethod)(s) ? (0, _Seq.singleton)("property_getter") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                      return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsPropertySetterMethod)(s) ? (0, _Seq.singleton)("property_setter") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                        return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsEvent)(s) ? (0, _Seq.singleton)("event") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                          return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_EventForFSharpProperty)(s) != null ? (0, _Seq.singleton)("property_event") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                            return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsEventAddMethod)(s) ? (0, _Seq.singleton)("event_add") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                              return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsEventRemoveMethod)(s) ? (0, _Seq.singleton)("event_remove") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                                return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsTypeFunction)(s) ? (0, _Seq.singleton)("type_func") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                                  return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsCompilerGenerated)(s) ? (0, _Seq.singleton)("compiler_gen") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                                    return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsImplicitConstructor)(s) ? (0, _Seq.singleton)("implicit_ctor") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                                      return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsMutable)(s) ? (0, _Seq.singleton)("mutable") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                                        return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsOverrideOrExplicitInterfaceImplementation)(s) ? (0, _Seq.singleton)("override_impl") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                                          return (0, _Seq.append)(!(0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsInstanceMember)(s) ? (0, _Seq.singleton)("static") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                                            return (0, _Seq.append)((((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsInstanceMember)(s) ? !(0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsInstanceMemberInCompiledCode)(s) : false) ? !(0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsExtensionMember)(s) : false) ? (0, _Seq.singleton)("funky") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                                              return (0, _Seq.append)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsExplicitInterfaceImplementation)(s) ? (0, _Seq.singleton)("interface_impl") : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                                                return (0, _Seq.singleton)((0, _String.toText)((0, _String.printf)("%A"))((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_InlineAnnotation)(s)));
                                              }));
                                            }));
                                          }));
                                        }));
                                      }));
                                    }));
                                  }));
                                }));
                              }));
                            }));
                          }));
                        }));
                      }));
                    }));
                  }));
                }));
              }));
            }));
          }));
        }));
      }));
    } else {
      return (0, _Seq.empty)();
    }
  }));
}

function printFSharpDecls(prefix, decls) {
  return (0, _Seq.delay)(function () {
    let i = 0;
    return (0, _Seq.collect)(function (decl) {
      i = i + 1;

      switch (decl.tag) {
        case 1:
          {
            const meth = decl.fields[0];
            const body = decl.fields[2];
            const args = decl.fields[1];
            return (0, _Seq.append)((0, _Seq.singleton)((0, _String.toText)((0, _String.printf)("%s%i) METHOD: %s %A"))(prefix)(i)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(meth))(attribsOfSymbol(meth))), (0, _Seq.delay)(function () {
              return (0, _Seq.append)((0, _Seq.singleton)((0, _String.toText)((0, _String.printf)("%stype: %A"))(prefix)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_FullType)(meth))), (0, _Seq.delay)(function () {
                return (0, _Seq.append)((0, _Seq.singleton)((0, _String.toText)((0, _String.printf)("%sargs: %A"))(prefix)(args)), (0, _Seq.delay)(function () {
                  return (0, _Seq.append)((0, _Seq.singleton)((0, _String.toText)((0, _String.printf)("%sbody: %A"))(prefix)(body)), (0, _Seq.delay)(function () {
                    return (0, _Seq.singleton)("");
                  }));
                }));
              }));
            }));
          }

        case 2:
          {
            const expr = decl.fields[0];
            return (0, _Seq.append)((0, _Seq.singleton)((0, _String.toText)((0, _String.printf)("%s%i) ACTION"))(prefix)(i)), (0, _Seq.delay)(function () {
              return (0, _Seq.append)((0, _Seq.singleton)((0, _String.toText)((0, _String.printf)("%s%A"))(prefix)(expr)), (0, _Seq.delay)(function () {
                return (0, _Seq.singleton)("");
              }));
            }));
          }

        default:
          {
            const sub = decl.fields[1];
            const e$$1 = decl.fields[0];
            return (0, _Seq.append)((0, _Seq.singleton)((0, _String.toText)((0, _String.printf)("%s%i) ENTITY: %s %A"))(prefix)(i)((0, _Symbols.FSharpEntity$$get_CompiledName)(e$$1))(attribsOfSymbol(e$$1))), (0, _Seq.delay)(function () {
              return (0, _Seq.append)(!(0, _Seq.isEmpty)((0, _Symbols.FSharpEntity$$get_Attributes)(e$$1)) ? (0, _Seq.singleton)((0, _String.toText)((0, _String.printf)("%sattributes: %A"))(prefix)((0, _List.ofSeq)((0, _Symbols.FSharpEntity$$get_Attributes)(e$$1)))) : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                return (0, _Seq.append)(!(0, _Seq.isEmpty)((0, _Symbols.FSharpEntity$$get_DeclaredInterfaces)(e$$1)) ? (0, _Seq.singleton)((0, _String.toText)((0, _String.printf)("%sinterfaces: %A"))(prefix)((0, _List.ofSeq)((0, _Symbols.FSharpEntity$$get_DeclaredInterfaces)(e$$1)))) : (0, _Seq.empty)(), (0, _Seq.delay)(function () {
                  return (0, _Seq.append)((0, _Seq.singleton)(""), (0, _Seq.delay)(function () {
                    return printFSharpDecls(prefix + "\t", sub);
                  }));
                }));
              }));
            }));
          }
      }
    }, decls);
  });
}