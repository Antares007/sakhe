"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context$$$Create$$Z6559E4BE = Context$$$Create$$Z6559E4BE;
exports.Helpers$$$nonAbbreviatedType = Helpers$$$nonAbbreviatedType;
exports.Helpers$$$getEntityFullName = Helpers$$$getEntityFullName;
exports.Helpers$$$getGenericArguments = Helpers$$$getGenericArguments;
exports.Helpers$$$getEntityDeclarationName = Helpers$$$getEntityDeclarationName;
exports.Helpers$$$isUnit = Helpers$$$isUnit;
exports.Helpers$$$getInterfaceImplementationName = Helpers$$$getInterfaceImplementationName;
exports.Helpers$$$getMemberDeclarationName = Helpers$$$getMemberDeclarationName;
exports.Helpers$$$getMemberUniqueName = Helpers$$$getMemberUniqueName;
exports.Helpers$$$getMemberDisplayName = Helpers$$$getMemberDisplayName;
exports.Helpers$$$tryFindAtt = Helpers$$$tryFindAtt;
exports.Helpers$$$tryDefinition = Helpers$$$tryDefinition;
exports.Helpers$$$getFsTypeFullName = Helpers$$$getFsTypeFullName;
exports.Helpers$$$tryEntityBase = Helpers$$$tryEntityBase;
exports.Helpers$$$isInline = Helpers$$$isInline;
exports.Helpers$$$isPublicEntity = Helpers$$$isPublicEntity;
exports.Helpers$$$isPublicMember = Helpers$$$isPublicMember;
exports.Helpers$$$makeRange = Helpers$$$makeRange;
exports.Helpers$$$makeRangeFrom = Helpers$$$makeRangeFrom;
exports.Helpers$$$unionCaseTag = Helpers$$$unionCaseTag;
exports.Helpers$$$unionCaseCompiledName = Helpers$$$unionCaseCompiledName;
exports.Helpers$$$applyCaseRule = Helpers$$$applyCaseRule;
exports.Helpers$$$isModuleValueForDeclarations = Helpers$$$isModuleValueForDeclarations;
exports.Helpers$$$isModuleValueForCalls = Helpers$$$isModuleValueForCalls;
exports.Helpers$$$isSelfConstructorCall = Helpers$$$isSelfConstructorCall;
exports.Helpers$$$isInterfaceEmpty = Helpers$$$isInterfaceEmpty;
exports.Helpers$$$testInterfaceHierarcy = Helpers$$$testInterfaceHierarcy;
exports.Helpers$$$hasSeqSpread = Helpers$$$hasSeqSpread;
exports.Patterns$$$$007CTypeDefinition$007C_$007C = Patterns$$$$007CTypeDefinition$007C_$007C;
exports.Patterns$$$$007CFSharpExprTypeFullName$007C_$007C = Patterns$$$$007CFSharpExprTypeFullName$007C_$007C;
exports.Patterns$$$$007CMemberFullName$007C = Patterns$$$$007CMemberFullName$007C;
exports.Patterns$$$$007CAttFullName$007C_$007C = Patterns$$$$007CAttFullName$007C_$007C;
exports.Patterns$$$$007CAttArguments$007C = Patterns$$$$007CAttArguments$007C;
exports.Patterns$$$$007CRefType$007C_$007C = Patterns$$$$007CRefType$007C_$007C;
exports.Patterns$$$$007CForOf$007C_$007C = Patterns$$$$007CForOf$007C_$007C;
exports.Patterns$$$$007CPrintFormat$007C_$007C = Patterns$$$$007CPrintFormat$007C_$007C;
exports.Patterns$$$$007CTryGetValue$007C_$007C = Patterns$$$$007CTryGetValue$007C_$007C;
exports.Patterns$$$$007CCreateEvent$007C_$007C = Patterns$$$$007CCreateEvent$007C_$007C;
exports.Patterns$$$$007CConstructorCall$007C_$007C = Patterns$$$$007CConstructorCall$007C_$007C;
exports.Patterns$$$$007COptimizedOperator$007C_$007C = Patterns$$$$007COptimizedOperator$007C_$007C;
exports.Patterns$$$$007CNumberKind$007C_$007C = Patterns$$$$007CNumberKind$007C_$007C;
exports.Patterns$$$$007COptionUnion$007CListUnion$007CErasedUnion$007CStringEnum$007CDiscriminatedUnion$007C = Patterns$$$$007COptionUnion$007CListUnion$007CErasedUnion$007CStringEnum$007CDiscriminatedUnion$007C;
exports.Patterns$$$$007CContainsAtt$007C_$007C = Patterns$$$$007CContainsAtt$007C_$007C;
exports.TypeHelpers$$$resolveGenParam = TypeHelpers$$$resolveGenParam;
exports.TypeHelpers$$$makeGenArgs = TypeHelpers$$$makeGenArgs;
exports.TypeHelpers$$$makeTypeFromDelegate = TypeHelpers$$$makeTypeFromDelegate;
exports.TypeHelpers$$$makeTypeFromDef = TypeHelpers$$$makeTypeFromDef;
exports.TypeHelpers$$$makeType = TypeHelpers$$$makeType;
exports.TypeHelpers$$$isSignedIntType = TypeHelpers$$$isSignedIntType;
exports.TypeHelpers$$$getBaseClass = TypeHelpers$$$getBaseClass;
exports.TypeHelpers$$$getOwnAndInheritedFsharpMembers = TypeHelpers$$$getOwnAndInheritedFsharpMembers;
exports.TypeHelpers$$$getArgTypes = TypeHelpers$$$getArgTypes;
exports.TypeHelpers$$$isAbstract = TypeHelpers$$$isAbstract;
exports.TypeHelpers$$$tryGetInterfaceTypeFromMethod = TypeHelpers$$$tryGetInterfaceTypeFromMethod;
exports.TypeHelpers$$$tryGetInterfaceDefinitionFromMethod = TypeHelpers$$$tryGetInterfaceDefinitionFromMethod;
exports.TypeHelpers$$$tryFindMember = TypeHelpers$$$tryFindMember;
exports.Identifiers$$$bindExpr = Identifiers$$$bindExpr;
exports.Identifiers$$$makeIdentFrom = Identifiers$$$makeIdentFrom;
exports.Identifiers$$$bindIdentFrom = Identifiers$$$bindIdentFrom;
exports.Identifiers$$$$007CBindIdent$007C = Identifiers$$$$007CBindIdent$007C;
exports.Identifiers$$$tryGetBoundExpr = Identifiers$$$tryGetBoundExpr;
exports.Util$$$makeFunctionArgs = Util$$$makeFunctionArgs;
exports.Util$$$bindMemberArgs = Util$$$bindMemberArgs;
exports.Util$$$makeTryCatch = Util$$$makeTryCatch;
exports.Util$$$matchGenericParams = Util$$$matchGenericParams;
exports.Util$$$matchGenericParamsFrom = Util$$$matchGenericParamsFrom;
exports.Util$$$countNonCurriedParams = Util$$$countNonCurriedParams;
exports.Util$$$countNonCurriedParamsForOverride = Util$$$countNonCurriedParamsForOverride;
exports.Util$$$fixImportedRelativePath = Util$$$fixImportedRelativePath;
exports.Util$$$tryImportAttribute = Util$$$tryImportAttribute;
exports.Util$$$tryGlobalOrImportedMember = Util$$$tryGlobalOrImportedMember;
exports.Util$$$tryImportedEntity = Util$$$tryImportedEntity;
exports.Util$$$entityRef = Util$$$entityRef;
exports.Util$$$entityRefMaybeImported = Util$$$entityRefMaybeImported;
exports.Util$$$memberRefTyped = Util$$$memberRefTyped;
exports.Util$$$memberRef = Util$$$memberRef;
exports.Util$$$tryFindImplementingEntity = Util$$$tryFindImplementingEntity;
exports.Util$$$isReplacementCandidate = Util$$$isReplacementCandidate;
exports.Util$$$callInstanceMember = Util$$$callInstanceMember;
exports.Util$$$$007CReplaced$007C_$007C = Util$$$$007CReplaced$007C_$007C;
exports.Util$$$$007CEmitted$007C_$007C = Util$$$$007CEmitted$007C_$007C;
exports.Util$$$$007CImported$007C_$007C = Util$$$$007CImported$007C_$007C;
exports.Util$$$inlineExpr = Util$$$inlineExpr;
exports.Util$$$$007CInlined$007C_$007C = Util$$$$007CInlined$007C_$007C;
exports.Util$$$transformOptionalArguments = Util$$$transformOptionalArguments;
exports.Util$$$hasAttribute = Util$$$hasAttribute;
exports.Util$$$hasInterface = Util$$$hasInterface;
exports.Util$$$hasImplicitConstructor = Util$$$hasImplicitConstructor;
exports.Util$$$makeCallFrom = Util$$$makeCallFrom;
exports.Util$$$makeValueFrom = Util$$$makeValueFrom;
exports.Context = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _Map = require("../fable-core.2.0.3/Map");

var _Symbols = require("../symbols/Symbols");

var _Option = require("../fable-core.2.0.3/Option");

var _range = require("../fsharp/range");

var _String = require("../fable-core.2.0.3/String");

var _Prelude = require("../Global/Prelude");

var _OverloadSuffix = require("./OverloadSuffix");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Exprs = require("../symbols/Exprs");

var _Transforms = require("./Transforms.Util");

var _List = require("../fable-core.2.0.3/List");

var _AST = require("../AST/AST.Common");

var _AST2 = require("../AST/AST.Fable");

var _ServiceAssemblyContent = require("../service/ServiceAssemblyContent");

const Context = (0, _Types.declare)(function Context(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.Scope = arg1;
  this.ScopeInlineValues = arg2;
  this.GenericArgs = arg3;
  this.EnclosingMember = arg4;
  this.EnclosingEntity = arg5;
  this.CaughtException = arg6;
  this.BoundConstructorThis = arg7;
  this.BoundMemberThis = arg8;
  this.InlinePath = arg9;
}, _Types.Record);
exports.Context = Context;

function Context$$$Create$$Z6559E4BE(enclosingEntity) {
  return new Context((0, _Types.L)(), (0, _Types.L)(), (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }), null, enclosingEntity, null, null, null, (0, _Types.L)());
}

function Helpers$$$nonAbbreviatedType(t) {
  Helpers$$$nonAbbreviatedType: while (true) {
    if ((0, _Symbols.FSharpType$$get_IsAbbreviation)(t)) {
      t = (0, _Symbols.FSharpType$$get_AbbreviatedType)(t);
      continue Helpers$$$nonAbbreviatedType;
    } else {
      return t;
    }
  }
}

function Helpers$$$getEntityFullName(ent) {
  if ((0, _Symbols.FSharpEntity$$get_IsNamespace)(ent)) {
    const matchValue = (0, _Symbols.FSharpEntity$$get_Namespace)(ent);

    if (matchValue == null) {
      return (0, _Symbols.FSharpEntity$$get_CompiledName)(ent);
    } else {
      const ns = matchValue;
      return ns + "." + (0, _Symbols.FSharpEntity$$get_CompiledName)(ent);
    }
  } else {
    return (0, _Option.defaultArg)((0, _Symbols.FSharpEntity$$get_TryFullName)(ent), (0, _Symbols.FSharpEntity$$get_CompiledName)(ent));
  }
}

function Helpers$$$getGenericArguments(t$$1) {
  if ((0, _Symbols.FSharpType$$get_IsGenericParameter)(t$$1)) {
    return [];
  } else {
    return (0, _Symbols.FSharpType$$get_GenericArguments)(Helpers$$$nonAbbreviatedType(t$$1));
  }
}

function Helpers$$$getEntityMangledName(com, trimRootModule, ent$$1) {
  var fullName;
  const matchValue$$1 = (0, _Symbols.FSharpEntity$$get_TryFullName)(ent$$1);
  var $target$$13, fullName$$1;

  if (matchValue$$1 != null) {
    if (fullName = matchValue$$1, !trimRootModule) {
      $target$$13 = 0;
      fullName$$1 = matchValue$$1;
    } else {
      $target$$13 = 1;
    }
  } else {
    $target$$13 = 1;
  }

  switch ($target$$13) {
    case 0:
      {
        return fullName$$1;
      }

    case 1:
      {
        if (matchValue$$1 == null) {
          return (0, _Symbols.FSharpEntity$$get_CompiledName)(ent$$1);
        } else {
          const fullName$$2 = matchValue$$1;
          const loc = (0, _Symbols.FSharpEntity$$get_DeclarationLocation)(ent$$1);
          const rootMod = com.GetRootModule((0, _range.range$$get_FileName)(loc));

          if (fullName$$2.indexOf(rootMod) === 0) {
            return (0, _String.trimStart)(fullName$$2.substr(rootMod.length), ".");
          } else {
            return fullName$$2;
          }
        }
      }
  }
}

function Helpers$$$getEntityDeclarationName(com$$1, ent$$3) {
  return (0, _Prelude.Naming$$$sanitizeIdent)(function conflicts(_arg1) {
    return false;
  }, Helpers$$$getEntityMangledName(com$$1, true, ent$$3), new _Prelude.Naming$002EMemberPart(2, "NoMemberPart"));
}

function Helpers$$$isUnit(typ) {
  const typ$$1 = Helpers$$$nonAbbreviatedType(typ);

  if ((0, _Symbols.FSharpType$$get_HasTypeDefinition)(typ$$1)) {
    return (0, _Util.equals)((0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpType$$get_TypeDefinition)(typ$$1)), "Microsoft.FSharp.Core.Unit");
  } else {
    return false;
  }
}

function Helpers$$$getInterfaceImplementationName(com$$2, implementingEntity, interfaceEntityFullName) {
  const entityName = Helpers$$$getEntityMangledName(com$$2, true, implementingEntity);
  const memberPart = new _Prelude.Naming$002EMemberPart(1, "StaticMemberPart", interfaceEntityFullName, "");
  return (0, _Prelude.Naming$$$sanitizeIdent)(function (_arg1$$1) {
    return false;
  }, entityName, memberPart);
}

function Helpers$$$getMemberMangledName(com$$3, trimRootModule$$1, memb) {
  var ent$$4;

  if ((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsExtensionMember)(memb)) {
    const overloadSuffix = (0, _OverloadSuffix.getExtensionHash)(memb);

    if (trimRootModule$$1) {
      return [(0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb), new _Prelude.Naming$002EMemberPart(0, "InstanceMemberPart", "", overloadSuffix)];
    } else {
      return [(0, _Symbols.FSharpSymbol$$get_FullName)(memb), new _Prelude.Naming$002EMemberPart(0, "InstanceMemberPart", "", overloadSuffix)];
    }
  } else {
    const matchValue$$2 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(memb);
    var $target$$14, ent$$5;

    if (matchValue$$2 != null) {
      if (ent$$4 = matchValue$$2, (0, _Symbols.FSharpEntity$$get_IsFSharpModule)(ent$$4)) {
        $target$$14 = 0;
        ent$$5 = matchValue$$2;
      } else {
        $target$$14 = 1;
      }
    } else {
      $target$$14 = 1;
    }

    switch ($target$$14) {
      case 0:
        {
          const matchValue$$3 = Helpers$$$getEntityMangledName(com$$3, trimRootModule$$1, ent$$5);

          if (matchValue$$3 === "") {
            return [(0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb), new _Prelude.Naming$002EMemberPart(2, "NoMemberPart")];
          } else {
            const moduleName = matchValue$$3;
            return [moduleName, new _Prelude.Naming$002EMemberPart(1, "StaticMemberPart", (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb), "")];
          }
        }

      case 1:
        {
          if (matchValue$$2 == null) {
            return [(0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb), new _Prelude.Naming$002EMemberPart(2, "NoMemberPart")];
          } else {
            const ent$$6 = matchValue$$2;
            const overloadSuffix$$1 = (0, _OverloadSuffix.getHash)(ent$$6, memb);
            const entName = Helpers$$$getEntityMangledName(com$$3, trimRootModule$$1, ent$$6);

            if ((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsInstanceMember)(memb)) {
              return [entName, new _Prelude.Naming$002EMemberPart(0, "InstanceMemberPart", (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb), overloadSuffix$$1)];
            } else {
              return [entName, new _Prelude.Naming$002EMemberPart(1, "StaticMemberPart", (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb), overloadSuffix$$1)];
            }
          }
        }
    }
  }
}

function Helpers$$$getMemberDeclarationName(com$$4, memb$$1) {
  const tupledArg = Helpers$$$getMemberMangledName(com$$4, true, memb$$1);
  return function func(name$$1, part$$1) {
    return (0, _Prelude.Naming$$$sanitizeIdent)(function conflicts$$1(_arg1$$2) {
      return false;
    }, name$$1, part$$1);
  }(tupledArg[0], tupledArg[1]);
}

function Helpers$$$getMemberUniqueName(com$$5, memb$$2) {
  const tupledArg$$1 = Helpers$$$getMemberMangledName(com$$5, false, memb$$2);
  return (0, _Prelude.Naming$$$buildNameWithoutSanitation)(tupledArg$$1[0], tupledArg$$1[1]);
}

function Helpers$$$getMemberDisplayName(memb$$3) {
  return (0, _Prelude.Naming$$$removeGetSetPrefix)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DisplayName)(memb$$3));
}

function Helpers$$$tryFindAtt(fullName$$3, atts) {
  return (0, _Seq.tryPick)(function chooser(att) {
    const matchValue$$4 = (0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpAttribute$$get_AttributeType)(att));

    if (matchValue$$4 == null) {
      return null;
    } else {
      const fullName$0027 = matchValue$$4;

      if (fullName$$3 === fullName$0027) {
        return att;
      } else {
        return null;
      }
    }
  }, atts);
}

function Helpers$$$tryDefinition(typ$$2) {
  const typ$$3 = Helpers$$$nonAbbreviatedType(typ$$2);

  if ((0, _Symbols.FSharpType$$get_HasTypeDefinition)(typ$$3)) {
    const tdef = (0, _Symbols.FSharpType$$get_TypeDefinition)(typ$$3);
    return [tdef, (0, _Symbols.FSharpEntity$$get_TryFullName)(tdef)];
  } else {
    return null;
  }
}

function Helpers$$$getFsTypeFullName(typ$$4) {
  const matchValue$$5 = Helpers$$$tryDefinition(typ$$4);
  var $target$$15, fullName$$4;

  if (matchValue$$5 != null) {
    if (matchValue$$5[1] != null) {
      $target$$15 = 0;
      fullName$$4 = matchValue$$5[1];
    } else {
      $target$$15 = 1;
    }
  } else {
    $target$$15 = 1;
  }

  switch ($target$$15) {
    case 0:
      {
        return fullName$$4;
      }

    case 1:
      {
        return "UNKNOWN";
      }
  }
}

function Helpers$$$tryEntityBase(ent$$7) {
  return (0, _Option.defaultArg)((0, _Option.defaultArg)((0, _Symbols.FSharpEntity$$get_BaseType)(ent$$7), null, Helpers$$$tryDefinition), null, function binder$$1(tupledArg$$2) {
    if ((0, _Util.equals)(tupledArg$$2[1], "System.Object")) {
      return null;
    } else {
      return tupledArg$$2[0];
    }
  });
}

function Helpers$$$isInline(memb$$4) {
  const matchValue$$6 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_InlineAnnotation)(memb$$4);
  var $target$$16;

  switch (matchValue$$6.tag) {
    case 2:
      $target$$16 = 0;
      break;

    case 0:
    case 1:
    case 4:
      $target$$16 = 1;
      break;

    default:
      $target$$16 = 0;
  }

  switch ($target$$16) {
    case 0:
      {
        return false;
      }

    case 1:
      {
        return true;
      }
  }
}

function Helpers$$$isPublicEntity(ent$$8) {
  return !(0, _Symbols.FSharpAccessibility$$get_IsPrivate)((0, _Symbols.FSharpEntity$$get_Accessibility)(ent$$8));
}

function Helpers$$$isPublicMember(memb$$5) {
  if ((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsCompilerGenerated)(memb$$5)) {
    return false;
  } else {
    return !(0, _Symbols.FSharpAccessibility$$get_IsPrivate)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_Accessibility)(memb$$5));
  }
}

function Helpers$$$makeRange(r) {
  return new _Prelude.SourceLocation(new _Prelude.Position((0, _range.range$$get_StartLine)(r), (0, _range.range$$get_StartColumn)(r)), new _Prelude.Position((0, _range.range$$get_EndLine)(r), (0, _range.range$$get_EndColumn)(r)));
}

function Helpers$$$makeRangeFrom(fsExpr) {
  return Helpers$$$makeRange((0, _Exprs.FSharpExpr$$get_Range)(fsExpr));
}

function Helpers$$$unionCaseTag(ent$$9, unionCase) {
  try {
    return (0, _Seq.findIndex)(function predicate(uci) {
      return (0, _Symbols.FSharpUnionCase$$get_Name)(unionCase) === (0, _Symbols.FSharpUnionCase$$get_Name)(uci);
    }, (0, _Symbols.FSharpEntity$$get_UnionCases)(ent$$9)) | 0;
  } catch (matchValue$$7) {
    return (0, _String.toFail)((0, _String.printf)("Cannot find case %s in %s"))((0, _Symbols.FSharpUnionCase$$get_Name)(unionCase))(Helpers$$$getEntityFullName(ent$$9)) | 0;
  }
}

function Helpers$$$unionCaseCompiledName(unionCase$$1) {
  return (0, _Option.defaultArg)(Helpers$$$tryFindAtt("Microsoft.FSharp.Core.CompiledNameAttribute", (0, _Symbols.FSharpUnionCase$$get_Attributes)(unionCase$$1)), null, function mapping(att$$1) {
    return (0, _Util.toString)((0, _Symbols.FSharpAttribute$$get_ConstructorArguments)(att$$1)[0][1]);
  });
}

function Helpers$$$applyCaseRule(rule, unionCase$$2) {
  var matchValue$$8, name$$3;
  return (0, _Transforms.AST$$$makeStrConst)((matchValue$$8 = Helpers$$$unionCaseCompiledName(unionCase$$2), matchValue$$8 == null ? rule === 0 ? (0, _Symbols.FSharpUnionCase$$get_Name)(unionCase$$2) : rule === 1 ? (0, _Prelude.Naming$$$lowerFirst)((0, _Symbols.FSharpUnionCase$$get_Name)(unionCase$$2)) : (0, _Symbols.FSharpUnionCase$$get_Name)(unionCase$$2) : (name$$3 = matchValue$$8, name$$3)));
}

function Helpers$$$isModuleValueForDeclarations(memb$$6) {
  if ((0, _Util.count)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(memb$$6)) === 0) {
    return (0, _Util.count)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_GenericParameters)(memb$$6)) === 0;
  } else {
    return false;
  }
}

function Helpers$$$isModuleValueForCalls(memb$$7) {
  if (Helpers$$$isModuleValueForDeclarations(memb$$7)) {
    if (!(0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsMutable)(memb$$7)) {
      return true;
    } else {
      return !Helpers$$$isPublicMember(memb$$7);
    }
  } else {
    return false;
  }
}

function Helpers$$$isSelfConstructorCall(ctx, memb$$8) {
  var ent$$10, enclosingMember;
  const matchValue$$9 = [(0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsConstructor)(memb$$8), (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(memb$$8), ctx.EnclosingMember];
  var $target$$17, enclosingMember$$1, ent$$11;

  if (matchValue$$9[0]) {
    if (matchValue$$9[1] != null) {
      if (matchValue$$9[2] != null) {
        if (ent$$10 = matchValue$$9[1], (enclosingMember = matchValue$$9[2], (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsConstructor)(enclosingMember))) {
          $target$$17 = 0;
          enclosingMember$$1 = matchValue$$9[2];
          ent$$11 = matchValue$$9[1];
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
        const matchValue$$10 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(enclosingMember$$1);

        if (matchValue$$10 == null) {
          return false;
        } else {
          const enclosingEntity$$1 = matchValue$$10;
          return (0, _Util.equals)(ent$$11, enclosingEntity$$1);
        }
      }

    case 1:
      {
        return false;
      }
  }
}

function Helpers$$$isInterfaceEmpty(ent$$12) {
  if ((0, _Util.count)((0, _Symbols.FSharpEntity$$get_MembersFunctionsAndValues)(ent$$12)) === 0) {
    if ((0, _Util.count)((0, _Symbols.FSharpEntity$$get_DeclaredInterfaces)(ent$$12)) > 0) {
      return (0, _Seq.forAll)(function predicate$$1(ifc) {
        const matchValue$$11 = Helpers$$$tryDefinition(ifc);

        if (matchValue$$11 == null) {
          return true;
        } else {
          const e = matchValue$$11[0];
          return Helpers$$$isInterfaceEmpty(e);
        }
      }, (0, _Symbols.FSharpEntity$$get_DeclaredInterfaces)(ent$$12));
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function Helpers$$$testInterfaceHierarcy(interfaceFullname, interfaceType) {
  const matchValue$$12 = Helpers$$$tryDefinition(interfaceType);
  var $target$$18, e$$1, fullname2;

  if (matchValue$$12 != null) {
    if (matchValue$$12[1] != null) {
      $target$$18 = 0;
      e$$1 = matchValue$$12[0];
      fullname2 = matchValue$$12[1];
    } else {
      $target$$18 = 1;
    }
  } else {
    $target$$18 = 1;
  }

  switch ($target$$18) {
    case 0:
      {
        if (interfaceFullname === fullname2) {
          return true;
        } else {
          return (0, _Seq.exists)(function predicate$$2(interfaceType$$1) {
            return Helpers$$$testInterfaceHierarcy(interfaceFullname, interfaceType$$1);
          }, (0, _Symbols.FSharpEntity$$get_DeclaredInterfaces)(e$$1));
        }
      }

    case 1:
      {
        return false;
      }
  }
}

function Helpers$$$hasSeqSpread(memb$$9) {
  const hasParamArray = function hasParamArray(memb$$10) {
    if ((0, _Util.count)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(memb$$10)) !== 1) {
      return false;
    } else {
      const args = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(memb$$10)[0];

      if ((0, _Util.count)(args) > 0) {
        return (0, _Symbols.FSharpParameter$$get_IsParamArrayArg)(args[(0, _Util.count)(args) - 1]);
      } else {
        return false;
      }
    }
  };

  const hasParamSeq = function hasParamSeq(memb$$11) {
    return (0, _Option.defaultArg)((0, _Option.defaultArg)((0, _Seq.tryLast)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(memb$$11)), null, function binder$$2(source$$4) {
      return (0, _Seq.tryLast)(source$$4);
    }), null, function binder$$3(lastParam) {
      return Helpers$$$tryFindAtt("Fable.Core.ParamListAttribute", (0, _Symbols.FSharpParameter$$get_Attributes)(lastParam));
    }) != null;
  };

  if (hasParamArray(memb$$9)) {
    return true;
  } else {
    return hasParamSeq(memb$$9);
  }
}

function Patterns$$$$007CTypeDefinition$007C_$007C(_arg1$$3) {
  const t$$3 = Helpers$$$nonAbbreviatedType(_arg1$$3);

  if ((0, _Symbols.FSharpType$$get_HasTypeDefinition)(t$$3)) {
    return (0, _Symbols.FSharpType$$get_TypeDefinition)(t$$3);
  } else {
    return null;
  }
}

function Patterns$$$$007CFSharpExprTypeFullName$007C_$007C(e$$2) {
  const t$$4 = (0, _Exprs.FSharpExpr$$get_Type)(e$$2);

  if ((0, _Symbols.FSharpType$$get_HasTypeDefinition)(t$$4)) {
    return (0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpType$$get_TypeDefinition)(t$$4));
  } else {
    return null;
  }
}

function Patterns$$$$007CMemberFullName$007C(memb$$12) {
  return (0, _Symbols.FSharpSymbol$$get_FullName)(memb$$12);
}

function Patterns$$$$007CAttFullName$007C_$007C(att$$2) {
  const matchValue$$13 = (0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpAttribute$$get_AttributeType)(att$$2));

  if (matchValue$$13 == null) {
    return null;
  } else {
    const fullName$$7 = matchValue$$13;
    return [fullName$$7, att$$2];
  }
}

function Patterns$$$$007CAttArguments$007C(att$$3) {
  return (0, _List.ofSeq)((0, _Seq.map)(function mapping$$1(tuple$$1) {
    return tuple$$1[1];
  }, (0, _Symbols.FSharpAttribute$$get_ConstructorArguments)(att$$3)));
}

function Patterns$$$$007CRefType$007C_$007C(_arg1$$4) {
  var tdef$$1, t$$5;
  var $target$$19, t$$6, tdef$$2;
  const activePatternResult66024 = Patterns$$$$007CTypeDefinition$007C_$007C(_arg1$$4);

  if (activePatternResult66024 != null) {
    if (tdef$$1 = activePatternResult66024, (t$$5 = _arg1$$4, (0, _Util.equals)((0, _Symbols.FSharpEntity$$get_TryFullName)(tdef$$1), "Microsoft.FSharp.Core.FSharpRef`1"))) {
      $target$$19 = 0;
      t$$6 = _arg1$$4;
      tdef$$2 = activePatternResult66024;
    } else {
      $target$$19 = 1;
    }
  } else {
    $target$$19 = 1;
  }

  switch ($target$$19) {
    case 0:
      {
        return (0, _Option.some)(t$$6);
      }

    case 1:
      {
        return null;
      }
  }
}

function Patterns$$$$007CForOf$007C_$007C(_arg1$$5) {
  var value$$14, unionCase$$5, typ$$8, ident$$13, field$$2, body$$13, value$$12, unionCase$$3, typ$$6, ident$$11, field, body$$11, value$$1, meth, ident, body, value$$2, meth$$1, ident$$1, body$$1, value$$3, meth$$2, ident$$2, body$$2, value$$4, meth$$3, ident$$3, body$$3, value$$5, meth$$4, ident$$4, body$$4, value$$6, meth$$5, ident$$5, body$$5, value$$7, meth$$6, ident$$6, body$$6, value$$8, meth$$7, ident$$7, body$$7, value$$9, meth$$8, ident$$8, body$$8, value$$10, meth$$9, ident$$9, body$$9;
  var $target$$20, body$$10, ident$$10, meth$$10, value$$11;
  const activePatternResult66034 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(_arg1$$5);

  if (activePatternResult66034 != null) {
    const activePatternResult66035 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult66034[1]);

    if (activePatternResult66035 != null) {
      const activePatternResult66036 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66035[0][1]);

      if (activePatternResult66036 != null) {
        if (activePatternResult66036[0] == null) {
          if (activePatternResult66036[3].tail == null) {
            if (activePatternResult66036[4].tail == null) {
              const activePatternResult66037 = (0, _Exprs.BasicPatterns$$$$007CTryFinally$007C_$007C)(activePatternResult66035[1]);

              if (activePatternResult66037 != null) {
                const activePatternResult66038 = (0, _Exprs.BasicPatterns$$$$007CWhileLoop$007C_$007C)(activePatternResult66037[0]);

                if (activePatternResult66038 != null) {
                  const activePatternResult66039 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult66038[1]);

                  if (activePatternResult66039 != null) {
                    if (value$$1 = activePatternResult66034[0][1], (meth = activePatternResult66036[1], (ident = activePatternResult66039[0][0], (body = activePatternResult66039[1], (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(meth) === "GetEnumerator")))) {
                      $target$$20 = 0;
                      body$$10 = activePatternResult66039[1];
                      ident$$10 = activePatternResult66039[0][0];
                      meth$$10 = activePatternResult66036[1];
                      value$$11 = activePatternResult66034[0][1];
                    } else {
                      const activePatternResult66040 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66034[0][1]);

                      if (activePatternResult66040 != null) {
                        if (activePatternResult66040[0] != null) {
                          if (activePatternResult66040[3].tail == null) {
                            if (activePatternResult66040[4].tail == null) {
                              const activePatternResult66041 = (0, _Exprs.BasicPatterns$$$$007CTryFinally$007C_$007C)(activePatternResult66034[1]);

                              if (activePatternResult66041 != null) {
                                const activePatternResult66042 = (0, _Exprs.BasicPatterns$$$$007CWhileLoop$007C_$007C)(activePatternResult66041[0]);

                                if (activePatternResult66042 != null) {
                                  const activePatternResult66043 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult66042[1]);

                                  if (activePatternResult66043 != null) {
                                    if (value$$2 = activePatternResult66040[0], (meth$$1 = activePatternResult66040[1], (ident$$1 = activePatternResult66043[0][0], (body$$1 = activePatternResult66043[1], (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(meth$$1) === "GetEnumerator")))) {
                                      $target$$20 = 0;
                                      body$$10 = activePatternResult66043[1];
                                      ident$$10 = activePatternResult66043[0][0];
                                      meth$$10 = activePatternResult66040[1];
                                      value$$11 = activePatternResult66040[0];
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
                        } else {
                          $target$$20 = 1;
                        }
                      } else {
                        $target$$20 = 1;
                      }
                    }
                  } else {
                    const activePatternResult66044 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66034[0][1]);

                    if (activePatternResult66044 != null) {
                      if (activePatternResult66044[0] != null) {
                        if (activePatternResult66044[3].tail == null) {
                          if (activePatternResult66044[4].tail == null) {
                            const activePatternResult66045 = (0, _Exprs.BasicPatterns$$$$007CTryFinally$007C_$007C)(activePatternResult66034[1]);

                            if (activePatternResult66045 != null) {
                              const activePatternResult66046 = (0, _Exprs.BasicPatterns$$$$007CWhileLoop$007C_$007C)(activePatternResult66045[0]);

                              if (activePatternResult66046 != null) {
                                const activePatternResult66047 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult66046[1]);

                                if (activePatternResult66047 != null) {
                                  if (value$$3 = activePatternResult66044[0], (meth$$2 = activePatternResult66044[1], (ident$$2 = activePatternResult66047[0][0], (body$$2 = activePatternResult66047[1], (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(meth$$2) === "GetEnumerator")))) {
                                    $target$$20 = 0;
                                    body$$10 = activePatternResult66047[1];
                                    ident$$10 = activePatternResult66047[0][0];
                                    meth$$10 = activePatternResult66044[1];
                                    value$$11 = activePatternResult66044[0];
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
                      } else {
                        $target$$20 = 1;
                      }
                    } else {
                      $target$$20 = 1;
                    }
                  }
                } else {
                  const activePatternResult66048 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66034[0][1]);

                  if (activePatternResult66048 != null) {
                    if (activePatternResult66048[0] != null) {
                      if (activePatternResult66048[3].tail == null) {
                        if (activePatternResult66048[4].tail == null) {
                          const activePatternResult66049 = (0, _Exprs.BasicPatterns$$$$007CTryFinally$007C_$007C)(activePatternResult66034[1]);

                          if (activePatternResult66049 != null) {
                            const activePatternResult66050 = (0, _Exprs.BasicPatterns$$$$007CWhileLoop$007C_$007C)(activePatternResult66049[0]);

                            if (activePatternResult66050 != null) {
                              const activePatternResult66051 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult66050[1]);

                              if (activePatternResult66051 != null) {
                                if (value$$4 = activePatternResult66048[0], (meth$$3 = activePatternResult66048[1], (ident$$3 = activePatternResult66051[0][0], (body$$3 = activePatternResult66051[1], (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(meth$$3) === "GetEnumerator")))) {
                                  $target$$20 = 0;
                                  body$$10 = activePatternResult66051[1];
                                  ident$$10 = activePatternResult66051[0][0];
                                  meth$$10 = activePatternResult66048[1];
                                  value$$11 = activePatternResult66048[0];
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
                    } else {
                      $target$$20 = 1;
                    }
                  } else {
                    $target$$20 = 1;
                  }
                }
              } else {
                const activePatternResult66052 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66034[0][1]);

                if (activePatternResult66052 != null) {
                  if (activePatternResult66052[0] != null) {
                    if (activePatternResult66052[3].tail == null) {
                      if (activePatternResult66052[4].tail == null) {
                        const activePatternResult66053 = (0, _Exprs.BasicPatterns$$$$007CTryFinally$007C_$007C)(activePatternResult66034[1]);

                        if (activePatternResult66053 != null) {
                          const activePatternResult66054 = (0, _Exprs.BasicPatterns$$$$007CWhileLoop$007C_$007C)(activePatternResult66053[0]);

                          if (activePatternResult66054 != null) {
                            const activePatternResult66055 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult66054[1]);

                            if (activePatternResult66055 != null) {
                              if (value$$5 = activePatternResult66052[0], (meth$$4 = activePatternResult66052[1], (ident$$4 = activePatternResult66055[0][0], (body$$4 = activePatternResult66055[1], (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(meth$$4) === "GetEnumerator")))) {
                                $target$$20 = 0;
                                body$$10 = activePatternResult66055[1];
                                ident$$10 = activePatternResult66055[0][0];
                                meth$$10 = activePatternResult66052[1];
                                value$$11 = activePatternResult66052[0];
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
                  } else {
                    $target$$20 = 1;
                  }
                } else {
                  $target$$20 = 1;
                }
              }
            } else {
              const activePatternResult66056 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66034[0][1]);

              if (activePatternResult66056 != null) {
                if (activePatternResult66056[0] != null) {
                  if (activePatternResult66056[3].tail == null) {
                    if (activePatternResult66056[4].tail == null) {
                      const activePatternResult66057 = (0, _Exprs.BasicPatterns$$$$007CTryFinally$007C_$007C)(activePatternResult66034[1]);

                      if (activePatternResult66057 != null) {
                        const activePatternResult66058 = (0, _Exprs.BasicPatterns$$$$007CWhileLoop$007C_$007C)(activePatternResult66057[0]);

                        if (activePatternResult66058 != null) {
                          const activePatternResult66059 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult66058[1]);

                          if (activePatternResult66059 != null) {
                            if (value$$6 = activePatternResult66056[0], (meth$$5 = activePatternResult66056[1], (ident$$5 = activePatternResult66059[0][0], (body$$5 = activePatternResult66059[1], (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(meth$$5) === "GetEnumerator")))) {
                              $target$$20 = 0;
                              body$$10 = activePatternResult66059[1];
                              ident$$10 = activePatternResult66059[0][0];
                              meth$$10 = activePatternResult66056[1];
                              value$$11 = activePatternResult66056[0];
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
                } else {
                  $target$$20 = 1;
                }
              } else {
                $target$$20 = 1;
              }
            }
          } else {
            const activePatternResult66060 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66034[0][1]);

            if (activePatternResult66060 != null) {
              if (activePatternResult66060[0] != null) {
                if (activePatternResult66060[3].tail == null) {
                  if (activePatternResult66060[4].tail == null) {
                    const activePatternResult66061 = (0, _Exprs.BasicPatterns$$$$007CTryFinally$007C_$007C)(activePatternResult66034[1]);

                    if (activePatternResult66061 != null) {
                      const activePatternResult66062 = (0, _Exprs.BasicPatterns$$$$007CWhileLoop$007C_$007C)(activePatternResult66061[0]);

                      if (activePatternResult66062 != null) {
                        const activePatternResult66063 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult66062[1]);

                        if (activePatternResult66063 != null) {
                          if (value$$7 = activePatternResult66060[0], (meth$$6 = activePatternResult66060[1], (ident$$6 = activePatternResult66063[0][0], (body$$6 = activePatternResult66063[1], (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(meth$$6) === "GetEnumerator")))) {
                            $target$$20 = 0;
                            body$$10 = activePatternResult66063[1];
                            ident$$10 = activePatternResult66063[0][0];
                            meth$$10 = activePatternResult66060[1];
                            value$$11 = activePatternResult66060[0];
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
              } else {
                $target$$20 = 1;
              }
            } else {
              $target$$20 = 1;
            }
          }
        } else {
          const activePatternResult66064 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66034[0][1]);

          if (activePatternResult66064 != null) {
            if (activePatternResult66064[0] != null) {
              if (activePatternResult66064[3].tail == null) {
                if (activePatternResult66064[4].tail == null) {
                  const activePatternResult66065 = (0, _Exprs.BasicPatterns$$$$007CTryFinally$007C_$007C)(activePatternResult66034[1]);

                  if (activePatternResult66065 != null) {
                    const activePatternResult66066 = (0, _Exprs.BasicPatterns$$$$007CWhileLoop$007C_$007C)(activePatternResult66065[0]);

                    if (activePatternResult66066 != null) {
                      const activePatternResult66067 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult66066[1]);

                      if (activePatternResult66067 != null) {
                        if (value$$8 = activePatternResult66064[0], (meth$$7 = activePatternResult66064[1], (ident$$7 = activePatternResult66067[0][0], (body$$7 = activePatternResult66067[1], (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(meth$$7) === "GetEnumerator")))) {
                          $target$$20 = 0;
                          body$$10 = activePatternResult66067[1];
                          ident$$10 = activePatternResult66067[0][0];
                          meth$$10 = activePatternResult66064[1];
                          value$$11 = activePatternResult66064[0];
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
            } else {
              $target$$20 = 1;
            }
          } else {
            $target$$20 = 1;
          }
        }
      } else {
        const activePatternResult66068 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66034[0][1]);

        if (activePatternResult66068 != null) {
          if (activePatternResult66068[0] != null) {
            if (activePatternResult66068[3].tail == null) {
              if (activePatternResult66068[4].tail == null) {
                const activePatternResult66069 = (0, _Exprs.BasicPatterns$$$$007CTryFinally$007C_$007C)(activePatternResult66034[1]);

                if (activePatternResult66069 != null) {
                  const activePatternResult66070 = (0, _Exprs.BasicPatterns$$$$007CWhileLoop$007C_$007C)(activePatternResult66069[0]);

                  if (activePatternResult66070 != null) {
                    const activePatternResult66071 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult66070[1]);

                    if (activePatternResult66071 != null) {
                      if (value$$9 = activePatternResult66068[0], (meth$$8 = activePatternResult66068[1], (ident$$8 = activePatternResult66071[0][0], (body$$8 = activePatternResult66071[1], (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(meth$$8) === "GetEnumerator")))) {
                        $target$$20 = 0;
                        body$$10 = activePatternResult66071[1];
                        ident$$10 = activePatternResult66071[0][0];
                        meth$$10 = activePatternResult66068[1];
                        value$$11 = activePatternResult66068[0];
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
          } else {
            $target$$20 = 1;
          }
        } else {
          $target$$20 = 1;
        }
      }
    } else {
      const activePatternResult66072 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66034[0][1]);

      if (activePatternResult66072 != null) {
        if (activePatternResult66072[0] != null) {
          if (activePatternResult66072[3].tail == null) {
            if (activePatternResult66072[4].tail == null) {
              const activePatternResult66073 = (0, _Exprs.BasicPatterns$$$$007CTryFinally$007C_$007C)(activePatternResult66034[1]);

              if (activePatternResult66073 != null) {
                const activePatternResult66074 = (0, _Exprs.BasicPatterns$$$$007CWhileLoop$007C_$007C)(activePatternResult66073[0]);

                if (activePatternResult66074 != null) {
                  const activePatternResult66075 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult66074[1]);

                  if (activePatternResult66075 != null) {
                    if (value$$10 = activePatternResult66072[0], (meth$$9 = activePatternResult66072[1], (ident$$9 = activePatternResult66075[0][0], (body$$9 = activePatternResult66075[1], (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(meth$$9) === "GetEnumerator")))) {
                      $target$$20 = 0;
                      body$$10 = activePatternResult66075[1];
                      ident$$10 = activePatternResult66075[0][0];
                      meth$$10 = activePatternResult66072[1];
                      value$$11 = activePatternResult66072[0];
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
        } else {
          $target$$20 = 1;
        }
      } else {
        $target$$20 = 1;
      }
    }
  } else {
    $target$$20 = 1;
  }

  switch ($target$$20) {
    case 0:
      {
        return [ident$$10, value$$11, body$$10];
      }

    case 1:
      {
        var $target$$21, body$$12, field$$1, ident$$12, typ$$7, unionCase$$4, value$$13;
        const activePatternResult66030 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(_arg1$$5);

        if (activePatternResult66030 != null) {
          const activePatternResult66031 = (0, _Exprs.BasicPatterns$$$$007CUnionCaseGet$007C_$007C)(activePatternResult66030[0][1]);

          if (activePatternResult66031 != null) {
            const activePatternResult66032 = (0, _Exprs.BasicPatterns$$$$007CWhileLoop$007C_$007C)(activePatternResult66030[1]);

            if (activePatternResult66032 != null) {
              const activePatternResult66033 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(activePatternResult66032[1]);

              if (activePatternResult66033 != null) {
                if (value$$12 = activePatternResult66031[0], (unionCase$$3 = activePatternResult66031[2], (typ$$6 = activePatternResult66031[1], (ident$$11 = activePatternResult66033[0][0], (field = activePatternResult66031[3], (body$$11 = activePatternResult66033[1], (Helpers$$$getFsTypeFullName(typ$$6) === "Microsoft.FSharp.Collections.FSharpList`1" ? (0, _Symbols.FSharpUnionCase$$get_Name)(unionCase$$3) === "op_ColonColon" : false) ? (0, _Symbols.FSharpField$$get_Name)(field) === "Tail" : false)))))) {
                  $target$$21 = 0;
                  body$$12 = activePatternResult66033[1];
                  field$$1 = activePatternResult66031[3];
                  ident$$12 = activePatternResult66033[0][0];
                  typ$$7 = activePatternResult66031[1];
                  unionCase$$4 = activePatternResult66031[2];
                  value$$13 = activePatternResult66031[0];
                } else {
                  $target$$21 = 1;
                }
              } else {
                $target$$21 = 1;
              }
            } else {
              $target$$21 = 1;
            }
          } else {
            $target$$21 = 1;
          }
        } else {
          $target$$21 = 1;
        }

        switch ($target$$21) {
          case 0:
            {
              return [ident$$12, value$$13, body$$12];
            }

          case 1:
            {
              var $target$$22, body$$14, field$$3, ident$$14, typ$$9, unionCase$$6, value$$15;
              const activePatternResult66027 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(_arg1$$5);

              if (activePatternResult66027 != null) {
                const activePatternResult66028 = (0, _Exprs.BasicPatterns$$$$007CUnionCaseGet$007C_$007C)(activePatternResult66027[0][1]);

                if (activePatternResult66028 != null) {
                  const activePatternResult66029 = (0, _Exprs.BasicPatterns$$$$007CWhileLoop$007C_$007C)(activePatternResult66027[1]);

                  if (activePatternResult66029 != null) {
                    if (value$$14 = activePatternResult66028[0], (unionCase$$5 = activePatternResult66028[2], (typ$$8 = activePatternResult66028[1], (ident$$13 = activePatternResult66027[0][0], (field$$2 = activePatternResult66028[3], (body$$13 = activePatternResult66029[1], (Helpers$$$getFsTypeFullName(typ$$8) === "Microsoft.FSharp.Collections.FSharpList`1" ? (0, _Symbols.FSharpUnionCase$$get_Name)(unionCase$$5) === "op_ColonColon" : false) ? (0, _Symbols.FSharpField$$get_Name)(field$$2) === "Tail" : false)))))) {
                      $target$$22 = 0;
                      body$$14 = activePatternResult66029[1];
                      field$$3 = activePatternResult66028[3];
                      ident$$14 = activePatternResult66027[0][0];
                      typ$$9 = activePatternResult66028[1];
                      unionCase$$6 = activePatternResult66028[2];
                      value$$15 = activePatternResult66028[0];
                    } else {
                      $target$$22 = 1;
                    }
                  } else {
                    $target$$22 = 1;
                  }
                } else {
                  $target$$22 = 1;
                }
              } else {
                $target$$22 = 1;
              }

              switch ($target$$22) {
                case 0:
                  {
                    return [ident$$14, value$$15, body$$14];
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

function Patterns$$$$007CPrintFormat$007C_$007C(fsExpr$$1) {
  var v, e$$3, args$$1;
  var $target$$23, args$$2, e$$4, v$$1;
  const activePatternResult66077 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(fsExpr$$1);

  if (activePatternResult66077 != null) {
    const activePatternResult66078 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66077[0][1]);

    if (activePatternResult66078 != null) {
      if (activePatternResult66078[0] == null) {
        if (v = activePatternResult66077[0][0], (e$$3 = activePatternResult66077[0][1], (args$$1 = activePatternResult66078[4], (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsCompilerGenerated)(v)))) {
          $target$$23 = 0;
          args$$2 = activePatternResult66078[4];
          e$$4 = activePatternResult66077[0][1];
          v$$1 = activePatternResult66077[0][0];
        } else {
          $target$$23 = 1;
        }
      } else {
        $target$$23 = 1;
      }
    } else {
      $target$$23 = 1;
    }
  } else {
    $target$$23 = 1;
  }

  switch ($target$$23) {
    case 0:
      {
        const matchValue$$14 = (0, _List.tryLast)(args$$2);

        if (matchValue$$14 == null) {
          return null;
        } else {
          const arg = matchValue$$14;

          if ((0, _Symbols.FSharpType$$get_HasTypeDefinition)((0, _Exprs.FSharpExpr$$get_Type)(arg)) ? (0, _Symbols.FSharpEntity$$get_AccessPath)((0, _Symbols.FSharpType$$get_TypeDefinition)((0, _Exprs.FSharpExpr$$get_Type)(arg))) === "Microsoft.FSharp.Core.PrintfModule" : false) {
            return e$$4;
          } else {
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

function Patterns$$$$007CTryGetValue$007C_$007C(_arg1$$6) {
  var typArgs, outArg3, outArg2, outArg1, methTypArgs, memb$$13, def, callee, arg$$1;
  var $target$$24, arg$$2, callee$$1, def$$1, memb$$14, methTypArgs$$1, outArg1$$1, outArg2$$1, outArg3$$1, typArgs$$1;
  const activePatternResult66080 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(_arg1$$6);

  if (activePatternResult66080 != null) {
    if ((0, _Exprs.BasicPatterns$$$$007CDefaultValue$007C_$007C)(activePatternResult66080[0][1]) != null) {
      const activePatternResult66082 = (0, _Exprs.BasicPatterns$$$$007CNewTuple$007C_$007C)(activePatternResult66080[1]);

      if (activePatternResult66082 != null) {
        if (activePatternResult66082[1].tail != null) {
          const activePatternResult66083 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66082[1].head);

          if (activePatternResult66083 != null) {
            if (activePatternResult66083[4].tail != null) {
              if (activePatternResult66083[4].tail.tail != null) {
                const activePatternResult66084 = (0, _Exprs.BasicPatterns$$$$007CAddressOf$007C_$007C)(activePatternResult66083[4].tail.head);

                if (activePatternResult66084 != null) {
                  const activePatternResult66085 = (0, _Exprs.BasicPatterns$$$$007CValue$007C_$007C)(activePatternResult66084);

                  if (activePatternResult66085 != null) {
                    if (activePatternResult66083[4].tail.tail.tail == null) {
                      if (activePatternResult66082[1].tail.tail != null) {
                        const activePatternResult66086 = (0, _Exprs.BasicPatterns$$$$007CValue$007C_$007C)(activePatternResult66082[1].tail.head);

                        if (activePatternResult66086 != null) {
                          if (activePatternResult66082[1].tail.tail.tail == null) {
                            if (typArgs = activePatternResult66083[2], (outArg3 = activePatternResult66086, (outArg2 = activePatternResult66085, (outArg1 = activePatternResult66080[0][0], (methTypArgs = activePatternResult66083[3], (memb$$13 = activePatternResult66083[1], (def = activePatternResult66080[0][1], (callee = activePatternResult66083[0], (arg$$1 = activePatternResult66083[4].head, (0, _Util.equals)(outArg1, outArg2) ? (0, _Util.equals)(outArg1, outArg3) : false))))))))) {
                              $target$$24 = 0;
                              arg$$2 = activePatternResult66083[4].head;
                              callee$$1 = activePatternResult66083[0];
                              def$$1 = activePatternResult66080[0][1];
                              memb$$14 = activePatternResult66083[1];
                              methTypArgs$$1 = activePatternResult66083[3];
                              outArg1$$1 = activePatternResult66080[0][0];
                              outArg2$$1 = activePatternResult66085;
                              outArg3$$1 = activePatternResult66086;
                              typArgs$$1 = activePatternResult66083[2];
                            } else {
                              $target$$24 = 1;
                            }
                          } else {
                            $target$$24 = 1;
                          }
                        } else {
                          $target$$24 = 1;
                        }
                      } else {
                        $target$$24 = 1;
                      }
                    } else {
                      $target$$24 = 1;
                    }
                  } else {
                    $target$$24 = 1;
                  }
                } else {
                  $target$$24 = 1;
                }
              } else {
                $target$$24 = 1;
              }
            } else {
              $target$$24 = 1;
            }
          } else {
            $target$$24 = 1;
          }
        } else {
          $target$$24 = 1;
        }
      } else {
        $target$$24 = 1;
      }
    } else {
      $target$$24 = 1;
    }
  } else {
    $target$$24 = 1;
  }

  switch ($target$$24) {
    case 0:
      {
        return [callee$$1, memb$$14, typArgs$$1, methTypArgs$$1, (0, _Types.L)(arg$$2, (0, _Types.L)(def$$1, (0, _Types.L)()))];
      }

    case 1:
      {
        return null;
      }
  }
}

function Patterns$$$$007CCreateEvent$007C_$007C(_arg1$$7) {
  var typArgs$$2, methTypArgs$$2, memb$$15, createEvent, callee$$2, args$$3, addEvent, _removeEvent, _eventDelegate2$0027, _eventDelegate2, _eventDelegate$0027, _eventDelegate, _delegateArg1$0027, _delegateArg1, _delegateArg0$0027, _delegateArg0, _callee2, _callback$0027, _callback;

  var $target$$25, _callback$$1, _callback$0027$$1, _callee2$$1, _delegateArg0$$1, _delegateArg0$0027$$1, _delegateArg1$$1, _delegateArg1$0027$$1, _eventDelegate$$1, _eventDelegate$0027$$1, _eventDelegate2$$1, _eventDelegate2$0027$$1, _removeEvent$$1, addEvent$$1, args$$4, callee$$3, createEvent$$1, memb$$16, methTypArgs$$3, typArgs$$3;

  const activePatternResult66088 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(_arg1$$7);

  if (activePatternResult66088 != null) {
    if (activePatternResult66088[0] != null) {
      const activePatternResult66089 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66088[0]);

      if (activePatternResult66089 != null) {
        if (activePatternResult66089[0] == null) {
          if (activePatternResult66089[4].tail != null) {
            const activePatternResult66090 = (0, _Exprs.BasicPatterns$$$$007CLambda$007C_$007C)(activePatternResult66089[4].head);

            if (activePatternResult66090 != null) {
              const activePatternResult66091 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66090[1]);

              if (activePatternResult66091 != null) {
                if (activePatternResult66091[0] != null) {
                  if (activePatternResult66091[2].tail == null) {
                    if (activePatternResult66091[3].tail == null) {
                      if (activePatternResult66091[4].tail != null) {
                        const activePatternResult66092 = (0, _Exprs.BasicPatterns$$$$007CValue$007C_$007C)(activePatternResult66091[4].head);

                        if (activePatternResult66092 != null) {
                          if (activePatternResult66091[4].tail.tail == null) {
                            if (activePatternResult66089[4].tail.tail != null) {
                              const activePatternResult66093 = (0, _Exprs.BasicPatterns$$$$007CLambda$007C_$007C)(activePatternResult66089[4].tail.head);

                              if (activePatternResult66093 != null) {
                                const activePatternResult66094 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66093[1]);

                                if (activePatternResult66094 != null) {
                                  if (activePatternResult66094[0] != null) {
                                    if (activePatternResult66094[2].tail == null) {
                                      if (activePatternResult66094[3].tail == null) {
                                        if (activePatternResult66094[4].tail != null) {
                                          const activePatternResult66095 = (0, _Exprs.BasicPatterns$$$$007CValue$007C_$007C)(activePatternResult66094[4].head);

                                          if (activePatternResult66095 != null) {
                                            if (activePatternResult66094[4].tail.tail == null) {
                                              if (activePatternResult66089[4].tail.tail.tail != null) {
                                                const activePatternResult66096 = (0, _Exprs.BasicPatterns$$$$007CLambda$007C_$007C)(activePatternResult66089[4].tail.tail.head);

                                                if (activePatternResult66096 != null) {
                                                  const activePatternResult66097 = (0, _Exprs.BasicPatterns$$$$007CNewDelegate$007C_$007C)(activePatternResult66096[1]);

                                                  if (activePatternResult66097 != null) {
                                                    const activePatternResult66098 = (0, _Exprs.BasicPatterns$$$$007CLambda$007C_$007C)(activePatternResult66097[1]);

                                                    if (activePatternResult66098 != null) {
                                                      const activePatternResult66099 = (0, _Exprs.BasicPatterns$$$$007CLambda$007C_$007C)(activePatternResult66098[1]);

                                                      if (activePatternResult66099 != null) {
                                                        const activePatternResult66100 = (0, _Exprs.BasicPatterns$$$$007CApplication$007C_$007C)(activePatternResult66099[1]);

                                                        if (activePatternResult66100 != null) {
                                                          const activePatternResult66101 = (0, _Exprs.BasicPatterns$$$$007CValue$007C_$007C)(activePatternResult66100[0]);

                                                          if (activePatternResult66101 != null) {
                                                            if (activePatternResult66100[1].tail == null) {
                                                              if (activePatternResult66100[2].tail != null) {
                                                                const activePatternResult66102 = (0, _Exprs.BasicPatterns$$$$007CValue$007C_$007C)(activePatternResult66100[2].head);

                                                                if (activePatternResult66102 != null) {
                                                                  if (activePatternResult66100[2].tail.tail != null) {
                                                                    const activePatternResult66103 = (0, _Exprs.BasicPatterns$$$$007CValue$007C_$007C)(activePatternResult66100[2].tail.head);

                                                                    if (activePatternResult66103 != null) {
                                                                      if (activePatternResult66100[2].tail.tail.tail == null) {
                                                                        if (activePatternResult66089[4].tail.tail.tail.tail == null) {
                                                                          if (typArgs$$2 = activePatternResult66088[2], (methTypArgs$$2 = activePatternResult66088[3], (memb$$15 = activePatternResult66088[1], (createEvent = activePatternResult66089[1], (callee$$2 = activePatternResult66091[0], (args$$3 = activePatternResult66088[4], (addEvent = activePatternResult66091[1], (_removeEvent = activePatternResult66094[1], (_eventDelegate2$0027 = activePatternResult66095, (_eventDelegate2 = activePatternResult66093[0], (_eventDelegate$0027 = activePatternResult66092, (_eventDelegate = activePatternResult66090[0], (_delegateArg1$0027 = activePatternResult66103, (_delegateArg1 = activePatternResult66099[0], (_delegateArg0$0027 = activePatternResult66102, (_delegateArg0 = activePatternResult66098[0], (_callee2 = activePatternResult66094[0], (_callback$0027 = activePatternResult66101, (_callback = activePatternResult66096[0], (0, _Symbols.FSharpSymbol$$get_FullName)(createEvent) === "Microsoft.FSharp.Core.CompilerServices.RuntimeHelpers.CreateEvent"))))))))))))))))))) {
                                                                            $target$$25 = 0;
                                                                            _callback$$1 = activePatternResult66096[0];
                                                                            _callback$0027$$1 = activePatternResult66101;
                                                                            _callee2$$1 = activePatternResult66094[0];
                                                                            _delegateArg0$$1 = activePatternResult66098[0];
                                                                            _delegateArg0$0027$$1 = activePatternResult66102;
                                                                            _delegateArg1$$1 = activePatternResult66099[0];
                                                                            _delegateArg1$0027$$1 = activePatternResult66103;
                                                                            _eventDelegate$$1 = activePatternResult66090[0];
                                                                            _eventDelegate$0027$$1 = activePatternResult66092;
                                                                            _eventDelegate2$$1 = activePatternResult66093[0];
                                                                            _eventDelegate2$0027$$1 = activePatternResult66095;
                                                                            _removeEvent$$1 = activePatternResult66094[1];
                                                                            addEvent$$1 = activePatternResult66091[1];
                                                                            args$$4 = activePatternResult66088[4];
                                                                            callee$$3 = activePatternResult66091[0];
                                                                            createEvent$$1 = activePatternResult66089[1];
                                                                            memb$$16 = activePatternResult66088[1];
                                                                            methTypArgs$$3 = activePatternResult66088[3];
                                                                            typArgs$$3 = activePatternResult66088[2];
                                                                          } else {
                                                                            $target$$25 = 1;
                                                                          }
                                                                        } else {
                                                                          $target$$25 = 1;
                                                                        }
                                                                      } else {
                                                                        $target$$25 = 1;
                                                                      }
                                                                    } else {
                                                                      $target$$25 = 1;
                                                                    }
                                                                  } else {
                                                                    $target$$25 = 1;
                                                                  }
                                                                } else {
                                                                  $target$$25 = 1;
                                                                }
                                                              } else {
                                                                $target$$25 = 1;
                                                              }
                                                            } else {
                                                              $target$$25 = 1;
                                                            }
                                                          } else {
                                                            $target$$25 = 1;
                                                          }
                                                        } else {
                                                          $target$$25 = 1;
                                                        }
                                                      } else {
                                                        $target$$25 = 1;
                                                      }
                                                    } else {
                                                      $target$$25 = 1;
                                                    }
                                                  } else {
                                                    $target$$25 = 1;
                                                  }
                                                } else {
                                                  $target$$25 = 1;
                                                }
                                              } else {
                                                $target$$25 = 1;
                                              }
                                            } else {
                                              $target$$25 = 1;
                                            }
                                          } else {
                                            $target$$25 = 1;
                                          }
                                        } else {
                                          $target$$25 = 1;
                                        }
                                      } else {
                                        $target$$25 = 1;
                                      }
                                    } else {
                                      $target$$25 = 1;
                                    }
                                  } else {
                                    $target$$25 = 1;
                                  }
                                } else {
                                  $target$$25 = 1;
                                }
                              } else {
                                $target$$25 = 1;
                              }
                            } else {
                              $target$$25 = 1;
                            }
                          } else {
                            $target$$25 = 1;
                          }
                        } else {
                          $target$$25 = 1;
                        }
                      } else {
                        $target$$25 = 1;
                      }
                    } else {
                      $target$$25 = 1;
                    }
                  } else {
                    $target$$25 = 1;
                  }
                } else {
                  $target$$25 = 1;
                }
              } else {
                $target$$25 = 1;
              }
            } else {
              $target$$25 = 1;
            }
          } else {
            $target$$25 = 1;
          }
        } else {
          $target$$25 = 1;
        }
      } else {
        $target$$25 = 1;
      }
    } else {
      $target$$25 = 1;
    }
  } else {
    $target$$25 = 1;
  }

  switch ($target$$25) {
    case 0:
      {
        const eventName = (0, _String.replace)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(addEvent$$1), "add_", "");
        return [callee$$3, eventName, memb$$16, typArgs$$3, methTypArgs$$3, args$$4];
      }

    case 1:
      {
        return null;
      }
  }
}

function Patterns$$$$007CConstructorCall$007C_$007C(_arg1$$8) {
  var genArgs2, genArgs1, baseCall$$1, baseArgs$$1;
  const activePatternResult66106 = (0, _Exprs.BasicPatterns$$$$007CNewObject$007C_$007C)(_arg1$$8);

  if (activePatternResult66106 != null) {
    return [activePatternResult66106[0], activePatternResult66106[1], activePatternResult66106[2]];
  } else {
    var $target$$26, baseArgs$$2, baseCall$$2, genArgs1$$1, genArgs2$$1;
    const activePatternResult66105 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(_arg1$$8);

    if (activePatternResult66105 != null) {
      if (activePatternResult66105[0] == null) {
        if (genArgs2 = activePatternResult66105[3], (genArgs1 = activePatternResult66105[2], (baseCall$$1 = activePatternResult66105[1], (baseArgs$$1 = activePatternResult66105[4], (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsConstructor)(baseCall$$1))))) {
          $target$$26 = 0;
          baseArgs$$2 = activePatternResult66105[4];
          baseCall$$2 = activePatternResult66105[1];
          genArgs1$$1 = activePatternResult66105[2];
          genArgs2$$1 = activePatternResult66105[3];
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
          return [baseCall$$2, (0, _List.append)(genArgs1$$1, genArgs2$$1), baseArgs$$2];
        }

      case 1:
        {
          return null;
        }
    }
  }
}

function Patterns$$$$007COptimizedOperator$007C_$007C(_arg1$$9) {
  var t2, memb$$21, e2, e1, comp$$2, memb$$19, expr, comp, vv, var$, tt, membArgs, membArgTypes, memb$$17;
  var $target$$27, memb$$18, membArgTypes$$1, membArgs$$1, tt$$1, var$$$1, vv$$1;
  const activePatternResult66113 = (0, _Exprs.BasicPatterns$$$$007CLet$007C_$007C)(_arg1$$9);

  if (activePatternResult66113 != null) {
    const activePatternResult66114 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66113[0][1]);

    if (activePatternResult66114 != null) {
      if (activePatternResult66114[0] == null) {
        const activePatternResult66115 = (0, _Exprs.BasicPatterns$$$$007CDecisionTree$007C_$007C)(activePatternResult66113[1]);

        if (activePatternResult66115 != null) {
          const activePatternResult66116 = (0, _Exprs.BasicPatterns$$$$007CIfThenElse$007C_$007C)(activePatternResult66115[0]);

          if (activePatternResult66116 != null) {
            const activePatternResult66117 = (0, _Exprs.BasicPatterns$$$$007CIfThenElse$007C_$007C)(activePatternResult66116[2]);

            if (activePatternResult66117 != null) {
              const activePatternResult66118 = (0, _Exprs.BasicPatterns$$$$007CTypeTest$007C_$007C)(activePatternResult66117[0]);

              if (activePatternResult66118 != null) {
                const activePatternResult66119 = (0, _Exprs.BasicPatterns$$$$007CValue$007C_$007C)(activePatternResult66118[1]);

                if (activePatternResult66119 != null) {
                  if (vv = activePatternResult66119, (var$ = activePatternResult66113[0][0], (tt = activePatternResult66118[0], (membArgs = activePatternResult66114[4], (membArgTypes = activePatternResult66114[3], (memb$$17 = activePatternResult66114[1], (((0, _Symbols.FSharpSymbol$$get_FullName)(var$) === "matchValue" ? (0, _Symbols.FSharpSymbol$$get_FullName)(memb$$17) === "Microsoft.FSharp.Core.Operators.box" : false) ? (0, _Symbols.FSharpSymbol$$get_FullName)(vv) === "matchValue" : false) ? Helpers$$$getFsTypeFullName(tt) === "System.IFormattable" : false)))))) {
                    $target$$27 = 0;
                    memb$$18 = activePatternResult66114[1];
                    membArgTypes$$1 = activePatternResult66114[3];
                    membArgs$$1 = activePatternResult66114[4];
                    tt$$1 = activePatternResult66118[0];
                    var$$$1 = activePatternResult66113[0][0];
                    vv$$1 = activePatternResult66119;
                  } else {
                    $target$$27 = 1;
                  }
                } else {
                  $target$$27 = 1;
                }
              } else {
                $target$$27 = 1;
              }
            } else {
              $target$$27 = 1;
            }
          } else {
            $target$$27 = 1;
          }
        } else {
          $target$$27 = 1;
        }
      } else {
        $target$$27 = 1;
      }
    } else {
      $target$$27 = 1;
    }
  } else {
    $target$$27 = 1;
  }

  switch ($target$$27) {
    case 0:
      {
        return [memb$$18, null, "ToString", membArgTypes$$1, membArgs$$1];
      }

    case 1:
      {
        var $target$$28, comp$$1, expr$$1, memb$$20;
        const activePatternResult66111 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(_arg1$$9);

        if (activePatternResult66111 != null) {
          if (activePatternResult66111[0] != null) {
            if (activePatternResult66111[3].tail == null) {
              if (activePatternResult66111[4].tail != null) {
                const activePatternResult66112 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66111[4].head);

                if (activePatternResult66112 != null) {
                  if (activePatternResult66112[0] == null) {
                    if (activePatternResult66112[2].tail == null) {
                      if (activePatternResult66112[3].tail == null) {
                        if (activePatternResult66112[4].tail == null) {
                          if (activePatternResult66111[4].tail.tail == null) {
                            if (memb$$19 = activePatternResult66111[1], (expr = activePatternResult66111[0], (comp = activePatternResult66112[1], (0, _String.endsWith)((0, _Symbols.FSharpSymbol$$get_FullName)(memb$$19), ".GetHashCode") ? (0, _Symbols.FSharpSymbol$$get_FullName)(comp) === "Microsoft.FSharp.Core.LanguagePrimitives.GenericEqualityERComparer" : false))) {
                              $target$$28 = 0;
                              comp$$1 = activePatternResult66112[1];
                              expr$$1 = activePatternResult66111[0];
                              memb$$20 = activePatternResult66111[1];
                            } else {
                              $target$$28 = 1;
                            }
                          } else {
                            $target$$28 = 1;
                          }
                        } else {
                          $target$$28 = 1;
                        }
                      } else {
                        $target$$28 = 1;
                      }
                    } else {
                      $target$$28 = 1;
                    }
                  } else {
                    $target$$28 = 1;
                  }
                } else {
                  $target$$28 = 1;
                }
              } else {
                $target$$28 = 1;
              }
            } else {
              $target$$28 = 1;
            }
          } else {
            $target$$28 = 1;
          }
        } else {
          $target$$28 = 1;
        }

        switch ($target$$28) {
          case 0:
            {
              return [memb$$20, comp$$1, "GenericHash", (0, _Types.L)((0, _Exprs.FSharpExpr$$get_Type)(expr$$1), (0, _Types.L)()), (0, _Types.L)(expr$$1, (0, _Types.L)())];
            }

          case 1:
            {
              var $target$$29, comp$$3, e1$$1, e2$$1, memb$$22, t2$$1;
              const activePatternResult66108 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(_arg1$$9);

              if (activePatternResult66108 != null) {
                if (activePatternResult66108[0] != null) {
                  if (activePatternResult66108[3].tail == null) {
                    if (activePatternResult66108[4].tail != null) {
                      const activePatternResult66109 = (0, _Exprs.BasicPatterns$$$$007CCoerce$007C_$007C)(activePatternResult66108[4].head);

                      if (activePatternResult66109 != null) {
                        if (activePatternResult66108[4].tail.tail != null) {
                          const activePatternResult66110 = (0, _Exprs.BasicPatterns$$$$007CCall$007C_$007C)(activePatternResult66108[4].tail.head);

                          if (activePatternResult66110 != null) {
                            if (activePatternResult66110[0] == null) {
                              if (activePatternResult66110[2].tail == null) {
                                if (activePatternResult66110[3].tail == null) {
                                  if (activePatternResult66110[4].tail == null) {
                                    if (activePatternResult66108[4].tail.tail.tail == null) {
                                      if (t2 = activePatternResult66109[0], (memb$$21 = activePatternResult66108[1], (e2 = activePatternResult66109[1], (e1 = activePatternResult66108[0], (comp$$2 = activePatternResult66110[1], (((0, _String.endsWith)((0, _Symbols.FSharpSymbol$$get_FullName)(memb$$21), ".Equals") ? (0, _Symbols.FSharpType$$get_HasTypeDefinition)(t2) : false) ? (0, _Symbols.FSharpEntity$$get_CompiledName)((0, _Symbols.FSharpType$$get_TypeDefinition)(t2)) === "obj" : false) ? (0, _Symbols.FSharpSymbol$$get_FullName)(comp$$2) === "Microsoft.FSharp.Core.LanguagePrimitives.GenericEqualityComparer" : false))))) {
                                        $target$$29 = 0;
                                        comp$$3 = activePatternResult66110[1];
                                        e1$$1 = activePatternResult66108[0];
                                        e2$$1 = activePatternResult66109[1];
                                        memb$$22 = activePatternResult66108[1];
                                        t2$$1 = activePatternResult66109[0];
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
              } else {
                $target$$29 = 1;
              }

              switch ($target$$29) {
                case 0:
                  {
                    return [memb$$22, comp$$3, "GenericEquality", (0, _Types.L)((0, _Exprs.FSharpExpr$$get_Type)(e1$$1), (0, _Types.L)((0, _Exprs.FSharpExpr$$get_Type)(e2$$1), (0, _Types.L)())), (0, _Types.L)(e1$$1, (0, _Types.L)(e2$$1, (0, _Types.L)()))];
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

const Patterns$$$numberTypes = new Map([["System.SByte", new _AST.NumberKind(0, "Int8")], ["System.Byte", new _AST.NumberKind(1, "UInt8")], ["System.Int16", new _AST.NumberKind(2, "Int16")], ["System.UInt16", new _AST.NumberKind(3, "UInt16")], ["System.Int32", new _AST.NumberKind(4, "Int32")], ["System.UInt32", new _AST.NumberKind(5, "UInt32")], ["System.Single", new _AST.NumberKind(6, "Float32")], ["System.Double", new _AST.NumberKind(7, "Float64")], ["System.Decimal", new _AST.NumberKind(8, "Decimal")], ["Microsoft.FSharp.Core.sbyte`1", new _AST.NumberKind(0, "Int8")], ["Microsoft.FSharp.Core.int16`1", new _AST.NumberKind(2, "Int16")], ["Microsoft.FSharp.Core.int`1", new _AST.NumberKind(4, "Int32")], ["Microsoft.FSharp.Core.float32`1", new _AST.NumberKind(6, "Float32")], ["Microsoft.FSharp.Core.float`1", new _AST.NumberKind(7, "Float64")], ["Microsoft.FSharp.Core.decimal`1", new _AST.NumberKind(8, "Decimal")]]);

function Patterns$$$$007CNumberKind$007C_$007C(fullName$$8) {
  const matchValue$$15 = (0, _Util.tryGetValue)(Patterns$$$numberTypes, fullName$$8, null);

  if (matchValue$$15[0]) {
    return matchValue$$15[1];
  } else {
    return null;
  }
}

function Patterns$$$$007COptionUnion$007CListUnion$007CErasedUnion$007CStringEnum$007CDiscriminatedUnion$007C(_arg1$$10) {
  const typ$$10 = Helpers$$$nonAbbreviatedType(_arg1$$10);
  const matchValue$$16 = Helpers$$$tryDefinition(typ$$10);

  if (matchValue$$16 != null) {
    const tdef$$3 = matchValue$$16[0];
    const fullName$$9 = matchValue$$16[1];
    const matchValue$$17 = (0, _Option.defaultArg)(fullName$$9, (0, _Symbols.FSharpEntity$$get_CompiledName)(tdef$$3));

    switch (matchValue$$17) {
      case "Microsoft.FSharp.Core.FSharpOption`1":
        {
          return new _Option.Choice(0, "Choice1Of5", (0, _Symbols.FSharpType$$get_GenericArguments)(typ$$10)[0]);
        }

      case "Microsoft.FSharp.Collections.FSharpList`1":
        {
          return new _Option.Choice(1, "Choice2Of5", (0, _Symbols.FSharpType$$get_GenericArguments)(typ$$10)[0]);
        }

      default:
        {
          return (0, _Option.defaultArg)((0, _Seq.tryPick)(function chooser$$1(att$$4) {
            const matchValue$$18 = (0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpAttribute$$get_AttributeType)(att$$4));
            var $target$$30;

            if (matchValue$$18 != null) {
              if (matchValue$$18 === "Fable.Core.EraseAttribute") {
                $target$$30 = 0;
              } else if (matchValue$$18 === "Fable.Core.StringEnumAttribute") {
                $target$$30 = 1;
              } else {
                $target$$30 = 2;
              }
            } else {
              $target$$30 = 2;
            }

            switch ($target$$30) {
              case 0:
                {
                  return new _Option.Choice(2, "Choice3Of5", [tdef$$3, (0, _Symbols.FSharpType$$get_GenericArguments)(typ$$10)]);
                }

              case 1:
                {
                  const matchValue$$19 = (0, _Seq.tryHead)((0, _Symbols.FSharpAttribute$$get_ConstructorArguments)(att$$4));
                  var $target$$31, rule$$1;

                  if (matchValue$$19 != null) {
                    if (typeof matchValue$$19[1] === "number") {
                      $target$$31 = 0;
                      rule$$1 = matchValue$$19[1];
                    } else {
                      $target$$31 = 1;
                    }
                  } else {
                    $target$$31 = 1;
                  }

                  switch ($target$$31) {
                    case 0:
                      {
                        return new _Option.Choice(3, "Choice4Of5", [tdef$$3, rule$$1]);
                      }

                    case 1:
                      {
                        return new _Option.Choice(3, "Choice4Of5", [tdef$$3, 1]);
                      }
                  }
                }

              case 2:
                {
                  return null;
                }
            }
          }, (0, _Symbols.FSharpEntity$$get_Attributes)(tdef$$3)), new _Option.Choice(4, "Choice5Of5", [tdef$$3, (0, _Symbols.FSharpType$$get_GenericArguments)(typ$$10)]));
        }
    }
  } else {
    throw new Error("Union without definition");
  }
}

function Patterns$$$$007CContainsAtt$007C_$007C(fullName$$10, ent$$13) {
  return Helpers$$$tryFindAtt(fullName$$10, (0, _Symbols.FSharpEntity$$get_Attributes)(ent$$13));
}

function TypeHelpers$$$resolveGenParam(ctxTypeArgs, genParam) {
  const matchValue$$20 = (0, _Map.tryFind)((0, _Symbols.FSharpGenericParameter$$get_Name)(genParam), ctxTypeArgs);

  if (matchValue$$20 != null) {
    const typ$$11 = matchValue$$20;
    return typ$$11;
  } else {
    return new _AST2.Type(14, "GenericParam", (0, _Symbols.FSharpGenericParameter$$get_Name)(genParam));
  }
}

function TypeHelpers$$$makeGenArgs(com$$6, ctxTypeArgs$$1, genArgs$$1) {
  return (0, _List.ofSeq)((0, _Seq.map)(function mapping$$2(genArg) {
    if ((0, _Symbols.FSharpType$$get_IsGenericParameter)(genArg)) {
      return TypeHelpers$$$resolveGenParam(ctxTypeArgs$$1, (0, _Symbols.FSharpType$$get_GenericParameter)(genArg));
    } else {
      return TypeHelpers$$$makeType(com$$6, ctxTypeArgs$$1, genArg);
    }
  }, genArgs$$1));
}

function TypeHelpers$$$makeTypeFromDelegate(com$$7, ctxTypeArgs$$2, genArgs$$2, tdef$$4, fullName$$11) {
  const invokeMember = (0, _Seq.find)(function predicate$$3(f) {
    return (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DisplayName)(f) === "Invoke";
  }, (0, _Symbols.FSharpEntity$$get_MembersFunctionsAndValues)(tdef$$4));
  const argTypes = (0, _List.ofSeq)((0, _Seq.map)(function mapping$$3(p) {
    return TypeHelpers$$$makeType(com$$7, ctxTypeArgs$$2, (0, _Symbols.FSharpParameter$$get_Type)(p));
  }, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(invokeMember)[0]));
  const returnType = TypeHelpers$$$makeType(com$$7, ctxTypeArgs$$2, (0, _Symbols.FSharpParameter$$get_Type)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_ReturnParameter)(invokeMember)));
  return new _AST2.Type(13, "FunctionType", new _AST2.FunctionTypeKind(1, "DelegateType", argTypes), returnType);
}

function TypeHelpers$$$makeTypeFromDef(com$$8, ctxTypeArgs$$3, genArgs$$3, tdef$$5) {
  const matchValue$$21 = [Helpers$$$getEntityFullName(tdef$$5), tdef$$5];

  if ((0, _Symbols.FSharpEntity$$get_IsArrayType)(tdef$$5)) {
    return new _AST2.Type(11, "Array", (0, _List.head)(TypeHelpers$$$makeGenArgs(com$$8, ctxTypeArgs$$3, genArgs$$3)));
  } else if ((0, _Symbols.FSharpEntity$$get_IsEnum)(tdef$$5)) {
    return new _AST2.Type(8, "EnumType", new _AST2.EnumTypeKind(0, "NumberEnumType"), matchValue$$21[0]);
  } else if ((0, _Symbols.FSharpEntity$$get_IsDelegate)(tdef$$5)) {
    return TypeHelpers$$$makeTypeFromDelegate(com$$8, ctxTypeArgs$$3, genArgs$$3, tdef$$5, matchValue$$21[0]);
  } else {
    if (matchValue$$21[0] === "System.Object") {
      return new _AST2.Type(1, "Any");
    } else if (matchValue$$21[0] === "Microsoft.FSharp.Core.Unit") {
      return new _AST2.Type(2, "Unit");
    } else if (matchValue$$21[0] === "System.Boolean") {
      return new _AST2.Type(3, "Boolean");
    } else if (matchValue$$21[0] === "System.Char") {
      return new _AST2.Type(4, "Char");
    } else if (matchValue$$21[0] === "System.String") {
      return new _AST2.Type(5, "String");
    } else if (matchValue$$21[0] === "System.Text.RegularExpressions.Regex") {
      return new _AST2.Type(6, "Regex");
    } else if (matchValue$$21[0] === "Microsoft.FSharp.Core.FSharpOption`1") {
      return new _AST2.Type(9, "Option", (0, _List.head)(TypeHelpers$$$makeGenArgs(com$$8, ctxTypeArgs$$3, genArgs$$3)));
    } else if (matchValue$$21[0] === "System.Collections.Generic.List`1") {
      return new _AST2.Type(11, "Array", (0, _List.head)(TypeHelpers$$$makeGenArgs(com$$8, ctxTypeArgs$$3, genArgs$$3)));
    } else if (matchValue$$21[0] === "Microsoft.FSharp.Collections.FSharpList`1") {
      return new _AST2.Type(12, "List", (0, _List.head)(TypeHelpers$$$makeGenArgs(com$$8, ctxTypeArgs$$3, genArgs$$3)));
    } else {
      const activePatternResult66149 = Patterns$$$$007CNumberKind$007C_$007C(matchValue$$21[0]);

      if (activePatternResult66149 != null) {
        const kind$$1 = activePatternResult66149;
        return new _AST2.Type(7, "Number", kind$$1);
      } else {
        if (Patterns$$$$007CContainsAtt$007C_$007C("Fable.Core.StringEnumAttribute", matchValue$$21[1]) != null) {
          return new _AST2.Type(8, "EnumType", new _AST2.EnumTypeKind(1, "StringEnumType"), matchValue$$21[0]);
        } else {
          if (Patterns$$$$007CContainsAtt$007C_$007C("Fable.Core.EraseAttribute", matchValue$$21[1]) != null) {
            return new _AST2.Type(15, "ErasedUnion", TypeHelpers$$$makeGenArgs(com$$8, ctxTypeArgs$$3, genArgs$$3));
          } else {
            return new _AST2.Type(16, "DeclaredType", tdef$$5, TypeHelpers$$$makeGenArgs(com$$8, ctxTypeArgs$$3, genArgs$$3));
          }
        }
      }
    }
  }
}

function TypeHelpers$$$makeType(com$$9, ctxTypeArgs$$4, _arg1$$11) {
  const t$$9 = Helpers$$$nonAbbreviatedType(_arg1$$11);

  if ((0, _Symbols.FSharpType$$get_IsGenericParameter)(t$$9)) {
    return TypeHelpers$$$resolveGenParam(ctxTypeArgs$$4, (0, _Symbols.FSharpType$$get_GenericParameter)(t$$9));
  } else if ((0, _Symbols.FSharpType$$get_IsTupleType)(t$$9)) {
    return new _AST2.Type(10, "Tuple", TypeHelpers$$$makeGenArgs(com$$9, ctxTypeArgs$$4, (0, _Symbols.FSharpType$$get_GenericArguments)(t$$9)));
  } else if ((0, _Symbols.FSharpType$$get_IsFunctionType)(t$$9)) {
    const argType = TypeHelpers$$$makeType(com$$9, ctxTypeArgs$$4, (0, _Symbols.FSharpType$$get_GenericArguments)(t$$9)[0]);
    const returnType$$1 = TypeHelpers$$$makeType(com$$9, ctxTypeArgs$$4, (0, _Symbols.FSharpType$$get_GenericArguments)(t$$9)[1]);
    return new _AST2.Type(13, "FunctionType", new _AST2.FunctionTypeKind(0, "LambdaType", argType), returnType$$1);
  } else if ((0, _Symbols.FSharpType$$get_HasTypeDefinition)(t$$9)) {
    return TypeHelpers$$$makeTypeFromDef(com$$9, ctxTypeArgs$$4, (0, _Symbols.FSharpType$$get_GenericArguments)(t$$9), (0, _Symbols.FSharpType$$get_TypeDefinition)(t$$9));
  } else {
    return new _AST2.Type(1, "Any");
  }
}

function TypeHelpers$$$isSignedIntType(_arg1$$12) {
  const t$$11 = Helpers$$$nonAbbreviatedType(_arg1$$12);

  if ((0, _Symbols.FSharpType$$get_HasTypeDefinition)(t$$11)) {
    const matchValue$$22 = (0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpType$$get_TypeDefinition)(t$$11));
    var $target$$32;

    if (matchValue$$22 != null) {
      if (matchValue$$22 === "System.SByte") {
        $target$$32 = 0;
      } else if (matchValue$$22 === "System.Int16") {
        $target$$32 = 0;
      } else if (matchValue$$22 === "System.Int32") {
        $target$$32 = 0;
      } else {
        $target$$32 = 1;
      }
    } else {
      $target$$32 = 1;
    }

    switch ($target$$32) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return false;
        }
    }
  } else {
    return false;
  }
}

function TypeHelpers$$$getBaseClass(tdef$$6) {
  var tdef$$7;
  const matchValue$$23 = (0, _Symbols.FSharpEntity$$get_BaseType)(tdef$$6);
  var $target$$33, tdef$$8;

  if (matchValue$$23 != null) {
    const activePatternResult66161 = Patterns$$$$007CTypeDefinition$007C_$007C(matchValue$$23);

    if (activePatternResult66161 != null) {
      if (tdef$$7 = activePatternResult66161, !(0, _Util.equals)((0, _Symbols.FSharpEntity$$get_TryFullName)(tdef$$7), "System.Object")) {
        $target$$33 = 0;
        tdef$$8 = activePatternResult66161;
      } else {
        $target$$33 = 1;
      }
    } else {
      $target$$33 = 1;
    }
  } else {
    $target$$33 = 1;
  }

  switch ($target$$33) {
    case 0:
      {
        return tdef$$8;
      }

    case 1:
      {
        return null;
      }
  }
}

function TypeHelpers$$$getOwnAndInheritedFsharpMembers(tdef$$9) {
  return (0, _Seq.delay)(function () {
    return (0, _Seq.append)((0, _ServiceAssemblyContent.FSharpEntity$002Eget_TryGetMembersFunctionsAndValues)(tdef$$9), (0, _Seq.delay)(function () {
      var baseDef;
      const matchValue$$24 = (0, _Symbols.FSharpEntity$$get_BaseType)(tdef$$9);
      var $target$$34, baseDef$$1;

      if (matchValue$$24 != null) {
        const activePatternResult66163 = Patterns$$$$007CTypeDefinition$007C_$007C(matchValue$$24);

        if (activePatternResult66163 != null) {
          if (baseDef = activePatternResult66163, !(0, _Util.equals)((0, _Symbols.FSharpEntity$$get_TryFullName)(tdef$$9), "System.Object")) {
            $target$$34 = 0;
            baseDef$$1 = activePatternResult66163;
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
            return TypeHelpers$$$getOwnAndInheritedFsharpMembers(baseDef$$1);
          }

        case 1:
          {
            return (0, _Seq.empty)();
          }
      }
    }));
  });
}

function TypeHelpers$$$getArgTypes(com$$10, memb$$23) {
  return (0, _List.ofSeq)((0, _Seq.map)(function mapping$$4(x$$1) {
    return TypeHelpers$$$makeType(com$$10, (0, _Map.empty)({
      Compare: _Util.comparePrimitives
    }), (0, _Symbols.FSharpParameter$$get_Type)(x$$1));
  }, (0, _Seq.concat)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(memb$$23))));
}

function TypeHelpers$$$isAbstract(ent$$16) {
  return Helpers$$$tryFindAtt("Microsoft.FSharp.Core.AbstractClassAttribute", (0, _Symbols.FSharpEntity$$get_Attributes)(ent$$16)) != null;
}

function TypeHelpers$$$tryGetInterfaceTypeFromMethod(meth$$11) {
  if ((0, _Util.count)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_ImplementedAbstractSignatures)(meth$$11)) > 0) {
    return Helpers$$$nonAbbreviatedType((0, _Symbols.FSharpAbstractSignature$$get_DeclaringType)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_ImplementedAbstractSignatures)(meth$$11)[0]));
  } else {
    return null;
  }
}

function TypeHelpers$$$tryGetInterfaceDefinitionFromMethod(meth$$12) {
  if ((0, _Util.count)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_ImplementedAbstractSignatures)(meth$$12)) > 0) {
    const t$$12 = Helpers$$$nonAbbreviatedType((0, _Symbols.FSharpAbstractSignature$$get_DeclaringType)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_ImplementedAbstractSignatures)(meth$$12)[0]));

    if ((0, _Symbols.FSharpType$$get_HasTypeDefinition)(t$$12)) {
      return (0, _Symbols.FSharpType$$get_TypeDefinition)(t$$12);
    } else {
      return null;
    }
  } else {
    return null;
  }
}

function TypeHelpers$$$tryFindMember(com$$11, entity, genArgs$$4, membCompiledName, isInstance, argTypes$$1) {
  const argsEqual = function argsEqual(args1, args1Length, args2) {
    const args2Length = (0, _Seq.sumBy)(_Util.count, args2, {
      GetZero() {
        return 0;
      },

      Add($x$$5, $y$$6) {
        return $x$$5 + $y$$6;
      }

    }) | 0;

    if (args1Length === args2Length) {
      const args2$$1 = (0, _Seq.collect)(function mapping$$6(g$$1) {
        return (0, _List.ofSeq)((0, _Seq.map)(function mapping$$5(p$$1) {
          return TypeHelpers$$$makeType(com$$11, genArgs$$4, (0, _Symbols.FSharpParameter$$get_Type)(p$$1));
        }, g$$1));
      }, args2);
      return (0, _Transforms.AST$$$listEquals)(function (typ1, typ2) {
        return (0, _Transforms.AST$$$typeEquals)(false, typ1, typ2);
      }, args1, (0, _List.ofSeq)(args2$$1));
    } else {
      return false;
    }
  };

  const argTypesLength = (0, _List.length)(argTypes$$1) | 0;
  return (0, _Seq.tryFind)(function predicate$$4(m2) {
    if ((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsInstanceMember)(m2) === isInstance ? (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(m2) === membCompiledName : false) {
      return argsEqual(argTypes$$1, argTypesLength, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(m2));
    } else {
      return false;
    }
  }, TypeHelpers$$$getOwnAndInheritedFsharpMembers(entity));
}

function Identifiers$$$bindExpr(ctx$$1, fsRef, expr$$2) {
  return new Context((0, _Types.L)([fsRef, expr$$2], ctx$$1.Scope), ctx$$1.ScopeInlineValues, ctx$$1.GenericArgs, ctx$$1.EnclosingMember, ctx$$1.EnclosingEntity, ctx$$1.CaughtException, ctx$$1.BoundConstructorThis, ctx$$1.BoundMemberThis, ctx$$1.InlinePath);
}

function Identifiers$$$makeIdentFrom(com$$12, ctx$$2, fsRef$$1) {
  const sanitizedName = (0, _Prelude.Naming$$$sanitizeIdent)(function conflicts$$2(arg00) {
    return com$$12.IsUsedVarName(arg00);
  }, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(fsRef$$1), new _Prelude.Naming$002EMemberPart(2, "NoMemberPart"));
  com$$12.AddUsedVarName(sanitizedName);
  return new _AST2.Ident(sanitizedName, TypeHelpers$$$makeType(com$$12, ctx$$2.GenericArgs, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_FullType)(fsRef$$1)), new _AST2.IdentKind(0, "UnspecifiedIdent"), (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsMutable)(fsRef$$1), (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsCompilerGenerated)(fsRef$$1), Helpers$$$makeRange((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclarationLocation)(fsRef$$1)));
}

function Identifiers$$$bindIdentFrom(com$$13, ctx$$3, fsRef$$2) {
  const ident$$15 = Identifiers$$$makeIdentFrom(com$$13, ctx$$3, fsRef$$2);
  return [Identifiers$$$bindExpr(ctx$$3, fsRef$$2, new _AST2.Expr(1, "IdentExpr", ident$$15)), ident$$15];
}

function Identifiers$$$$007CBindIdent$007C(com$$14, ctx$$4, fsRef$$3) {
  return Identifiers$$$bindIdentFrom(com$$14, ctx$$4, fsRef$$3);
}

function Identifiers$$$tryGetBoundExpr(ctx$$5, r$$1, fsRef$$4) {
  const matchValue$$25 = (0, _List.tryFind)(function (tupledArg$$3) {
    return (0, _Util.equals)(fsRef$$4, tupledArg$$3[0]);
  }, ctx$$5.Scope);

  if (matchValue$$25 == null) {
    return null;
  } else if (matchValue$$25[1].tag === 1) {
    return new _AST2.Expr(1, "IdentExpr", new _AST2.Ident(matchValue$$25[1].fields[0].Name, matchValue$$25[1].fields[0].Type, matchValue$$25[1].fields[0].Kind, matchValue$$25[1].fields[0].IsMutable, matchValue$$25[1].fields[0].IsCompilerGenerated, r$$1));
  } else {
    return matchValue$$25[1];
  }
}

function Util$$$makeFunctionArgs(com$$15, ctx$$6, args$$5) {
  const patternInput$$1 = (0, _List.fold)(function folder(tupledArg$$4, var$$$2) {
    const patternInput = Identifiers$$$bindIdentFrom(com$$15, tupledArg$$4[0], var$$$2);
    return [patternInput[0], (0, _Types.L)(patternInput[1], tupledArg$$4[1])];
  }, [ctx$$6, (0, _Types.L)()], args$$5);
  return [patternInput$$1[0], (0, _List.reverse)(patternInput$$1[1])];
}

function Util$$$bindMemberArgs(com$$16, ctx$$9, args$$7) {
  var restArgs2, restArgs1, firstArg;
  let patternInput$$3;
  var $target$$35, firstArg$$1, restArgs1$$1, restArgs2$$1;

  if (args$$7.tail != null) {
    if (args$$7.head.tail != null) {
      if (restArgs2 = args$$7.tail, (restArgs1 = args$$7.head.tail, (firstArg = args$$7.head.head, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsConstructorThisValue)(firstArg) ? true : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsMemberThisValue)(firstArg)))) {
        $target$$35 = 0;
        firstArg$$1 = args$$7.head.head;
        restArgs1$$1 = args$$7.head.tail;
        restArgs2$$1 = args$$7.tail;
      } else {
        $target$$35 = 1;
      }
    } else {
      $target$$35 = 1;
    }
  } else {
    $target$$35 = 1;
  }

  switch ($target$$35) {
    case 0:
      {
        const patternInput$$2 = Identifiers$$$bindIdentFrom(com$$16, ctx$$9, firstArg$$1);
        const thisArg$$1 = new _AST2.Ident(patternInput$$2[1].Name, patternInput$$2[1].Type, new _AST2.IdentKind(2, "ThisArgIdentDeclaration"), patternInput$$2[1].IsMutable, patternInput$$2[1].IsCompilerGenerated, patternInput$$2[1].Range);
        const ctx$$11 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsConstructorThisValue)(firstArg$$1) ? new Context(patternInput$$2[0].Scope, patternInput$$2[0].ScopeInlineValues, patternInput$$2[0].GenericArgs, patternInput$$2[0].EnclosingMember, patternInput$$2[0].EnclosingEntity, patternInput$$2[0].CaughtException, thisArg$$1, patternInput$$2[0].BoundMemberThis, patternInput$$2[0].InlinePath) : new Context(patternInput$$2[0].Scope, patternInput$$2[0].ScopeInlineValues, patternInput$$2[0].GenericArgs, patternInput$$2[0].EnclosingMember, patternInput$$2[0].EnclosingEntity, patternInput$$2[0].CaughtException, patternInput$$2[0].BoundConstructorThis, thisArg$$1, patternInput$$2[0].InlinePath);
        patternInput$$3 = [ctx$$11, (0, _Types.L)(thisArg$$1, (0, _Types.L)()), (0, _Types.L)(restArgs1$$1, restArgs2$$1)];
        break;
      }

    case 1:
      {
        patternInput$$3 = [ctx$$9, (0, _Types.L)(), args$$7];
        break;
      }
  }

  const patternInput$$5 = (0, _List.foldBack)(function folder$$1(tupledArg$$5, tupledArg$$6) {
    const patternInput$$4 = Util$$$makeFunctionArgs(com$$16, tupledArg$$6[0], tupledArg$$5);
    return [patternInput$$4[0], (0, _List.append)(patternInput$$4[1], tupledArg$$6[1])];
  }, patternInput$$3[2], [patternInput$$3[0], (0, _Types.L)()]);
  return [patternInput$$5[0], (0, _List.append)(patternInput$$3[1], patternInput$$5[1])];
}

function Util$$$makeTryCatch(com$$17, ctx$$16, _arg1$$14, catchClause, finalBody) {
  const body$$15 = com$$17.Transform(ctx$$16, _arg1$$14);
  let catchClause$$1;

  if (catchClause == null) {
    catchClause$$1 = null;
  } else {
    const activePatternResult66221 = Identifiers$$$$007CBindIdent$007C(com$$17, ctx$$16, catchClause[0]);
    const catchBody = catchClause[1];
    const catchContext$$1 = new Context(activePatternResult66221[0].Scope, activePatternResult66221[0].ScopeInlineValues, activePatternResult66221[0].GenericArgs, activePatternResult66221[0].EnclosingMember, activePatternResult66221[0].EnclosingEntity, activePatternResult66221[1], activePatternResult66221[0].BoundConstructorThis, activePatternResult66221[0].BoundMemberThis, activePatternResult66221[0].InlinePath);
    catchClause$$1 = [activePatternResult66221[1], com$$17.Transform(catchContext$$1, catchBody)];
  }

  let finalizer;

  if (finalBody == null) {
    finalizer = null;
  } else {
    const finalBody$$1 = com$$17.Transform(ctx$$16, finalBody);
    finalizer = finalBody$$1;
  }

  return new _AST2.Expr(18, "TryCatch", body$$15, catchClause$$1, finalizer);
}

function Util$$$matchGenericParams(genArgs$$5, genParams) {
  return (0, _Seq.zip)((0, _Seq.map)(function mapping$$7(x$$2) {
    return (0, _Symbols.FSharpGenericParameter$$get_Name)(x$$2);
  }, genParams), genArgs$$5);
}

function Util$$$matchGenericParamsFrom(memb$$24, genArgs$$6) {
  var matchValue$$26, ent$$17, ent$$18;
  const genArgsLen = (0, _Seq.length)(genArgs$$6) | 0;
  return Util$$$matchGenericParams(genArgs$$6, (matchValue$$26 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(memb$$24), matchValue$$26 != null ? (ent$$17 = matchValue$$26, genArgsLen > (0, _Util.count)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_GenericParameters)(memb$$24))) ? (ent$$18 = matchValue$$26, (0, _Seq.append)((0, _Symbols.FSharpEntity$$get_GenericParameters)(ent$$18), (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_GenericParameters)(memb$$24))) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_GenericParameters)(memb$$24) : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_GenericParameters)(memb$$24)));
}

function Util$$$countNonCurriedParams(meth$$13) {
  const args$$10 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(meth$$13);

  if ((0, _Util.count)(args$$10) === 0) {
    return 0;
  } else if ((0, _Util.count)(args$$10[0]) === 1) {
    if (Helpers$$$isUnit((0, _Symbols.FSharpParameter$$get_Type)(args$$10[0][0]))) {
      return 0;
    } else {
      return 1;
    }
  } else {
    return (0, _Util.count)(args$$10[0]) | 0;
  }
}

function Util$$$countNonCurriedParamsForOverride(over) {
  var t$$13;
  const args$$11 = (0, _Exprs.FSharpObjectExprOverride$$get_CurriedParameterGroups)(over);

  var $target$$36, _thisArg, firsGroup;

  if (args$$11.tail != null) {
    if (args$$11.tail.tail != null) {
      $target$$36 = 1;
      _thisArg = args$$11.head;
      firsGroup = args$$11.tail.head;
    } else {
      $target$$36 = 0;
    }
  } else {
    $target$$36 = 0;
  }

  switch ($target$$36) {
    case 0:
      {
        return 0;
      }

    case 1:
      {
        var $target$$37, arg$$4, args$$12;

        if (firsGroup.tail != null) {
          if (firsGroup.tail.tail == null) {
            $target$$37 = 0;
            arg$$4 = firsGroup.head;
          } else {
            $target$$37 = 1;
            args$$12 = firsGroup;
          }
        } else {
          $target$$37 = 1;
          args$$12 = firsGroup;
        }

        switch ($target$$37) {
          case 0:
            {
              const matchValue$$27 = (0, _ServiceAssemblyContent.FSharpMemberOrFunctionOrValue$002Eget_FullTypeSafe)(arg$$4);
              var $target$$38, t$$14;

              if (matchValue$$27 != null) {
                if (t$$13 = matchValue$$27, Helpers$$$isUnit(t$$13)) {
                  $target$$38 = 0;
                  t$$14 = matchValue$$27;
                } else {
                  $target$$38 = 1;
                }
              } else {
                $target$$38 = 1;
              }

              switch ($target$$38) {
                case 0:
                  {
                    return 0;
                  }

                case 1:
                  {
                    return 1;
                  }
              }
            }

          case 1:
            {
              return (0, _List.length)(args$$12) | 0;
            }
        }
      }
  }
}

function Util$$$fixImportedRelativePath(com$$20, path, loc$$1) {
  var copyOfStruct;

  if (path.indexOf(".") === 0) {
    const file = (0, _Prelude.Path$$$normalizePathAndEnsureFsExtension)((copyOfStruct = loc$$1.Value, (0, _range.range$$get_FileName)(copyOfStruct)));

    if (file === com$$20.CurrentFile) {
      return path;
    } else {
      return (0, _Prelude.Path$$$getRelativePath)(com$$20.CurrentFile, (0, _Prelude.Path$$$Combine)((0, _Prelude.Path$$$GetDirectoryName)(file), path));
    }
  } else {
    return path;
  }
}

function Util$$$tryImportAttribute(atts$$2) {
  return (0, _Seq.tryPick)(function chooser$$2(_arg1$$15) {
    var $target$$39, path$$1, selector;
    const activePatternResult66242 = Patterns$$$$007CAttFullName$007C_$007C(_arg1$$15);

    if (activePatternResult66242 != null) {
      if (activePatternResult66242[0] === "Fable.Core.ImportAttribute") {
        const activePatternResult66243 = Patterns$$$$007CAttArguments$007C(activePatternResult66242[1]);

        if (activePatternResult66243.tail != null) {
          if (typeof activePatternResult66243.head === "string") {
            if (activePatternResult66243.tail.tail != null) {
              if (typeof activePatternResult66243.tail.head === "string") {
                if (activePatternResult66243.tail.tail.tail == null) {
                  $target$$39 = 0;
                  path$$1 = activePatternResult66243.tail.head;
                  selector = activePatternResult66243.head;
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
          return [selector.trim(), path$$1.trim()];
        }

      case 1:
        {
          return null;
        }
    }
  }, atts$$2);
}

function Util$$$tryGlobalOrImportedMember(com$$21, typ$$12, memb$$25) {
  return (0, _Seq.tryPick)(function chooser$$3(_arg1$$16) {
    var $target$$40, att$$5;
    const activePatternResult66256 = Patterns$$$$007CAttFullName$007C_$007C(_arg1$$16);

    if (activePatternResult66256 != null) {
      if (activePatternResult66256[0] === "Fable.Core.GlobalAttribute") {
        $target$$40 = 0;
        att$$5 = activePatternResult66256[1];
      } else {
        $target$$40 = 1;
      }
    } else {
      $target$$40 = 1;
    }

    switch ($target$$40) {
      case 0:
        {
          var $target$$41, customName;
          const activePatternResult66251 = Patterns$$$$007CAttArguments$007C(att$$5);

          if (activePatternResult66251.tail != null) {
            if (typeof activePatternResult66251.head === "string") {
              if (activePatternResult66251.tail.tail == null) {
                $target$$41 = 0;
                customName = activePatternResult66251.head;
              } else {
                $target$$41 = 1;
              }
            } else {
              $target$$41 = 1;
            }
          } else {
            $target$$41 = 1;
          }

          switch ($target$$41) {
            case 0:
              {
                return new _AST2.Expr(1, "IdentExpr", (0, _Transforms.AST$$$makeTypedIdentNonMangled)(typ$$12, customName));
              }

            case 1:
              {
                return new _AST2.Expr(1, "IdentExpr", (0, _Transforms.AST$$$makeTypedIdentNonMangled)(typ$$12, Helpers$$$getMemberDisplayName(memb$$25)));
              }
          }
        }

      case 1:
        {
          var $target$$42, path$$2, selector$$1;
          const activePatternResult66254 = Patterns$$$$007CAttFullName$007C_$007C(_arg1$$16);

          if (activePatternResult66254 != null) {
            if (activePatternResult66254[0] === "Fable.Core.ImportAttribute") {
              const activePatternResult66255 = Patterns$$$$007CAttArguments$007C(activePatternResult66254[1]);

              if (activePatternResult66255.tail != null) {
                if (typeof activePatternResult66255.head === "string") {
                  if (activePatternResult66255.tail.tail != null) {
                    if (typeof activePatternResult66255.tail.head === "string") {
                      if (activePatternResult66255.tail.tail.tail == null) {
                        $target$$42 = 0;
                        path$$2 = activePatternResult66255.tail.head;
                        selector$$1 = activePatternResult66255.head;
                      } else {
                        $target$$42 = 1;
                      }
                    } else {
                      $target$$42 = 1;
                    }
                  } else {
                    $target$$42 = 1;
                  }
                } else {
                  $target$$42 = 1;
                }
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
                const path$$3 = Util$$$fixImportedRelativePath(com$$21, path$$2, new _Util.Lazy(function () {
                  return (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclarationLocation)(memb$$25);
                }));
                return (0, _Transforms.AST$$$makeCustomImport)(typ$$12, selector$$1, path$$3);
              }

            case 1:
              {
                return null;
              }
          }
        }
    }
  }, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_Attributes)(memb$$25));
}

function Util$$$tryImportedEntity(com$$22, ent$$19) {
  return (0, _Option.defaultArg)(Util$$$tryImportAttribute((0, _Symbols.FSharpEntity$$get_Attributes)(ent$$19)), null, function mapping$$8(tupledArg$$7) {
    const path$$5 = Util$$$fixImportedRelativePath(com$$22, tupledArg$$7[1], new _Util.Lazy(function () {
      return (0, _Symbols.FSharpEntity$$get_DeclarationLocation)(ent$$19);
    }));
    return (0, _Transforms.AST$$$makeCustomImport)(new _AST2.Type(1, "Any"), tupledArg$$7[0], path$$5);
  });
}

function Util$$$entityRef(com$$23, ent$$21) {
  const entLoc = (0, _Symbols.FSharpEntity$$get_DeclarationLocation)(ent$$21);
  const file$$1 = (0, _Prelude.Path$$$normalizePathAndEnsureFsExtension)((0, _range.range$$get_FileName)(entLoc));
  const entityName$$1 = Helpers$$$getEntityDeclarationName(com$$23, ent$$21);

  if (file$$1 === com$$23.CurrentFile) {
    return (0, _Transforms.AST$$$makeIdentExprNonMangled)(entityName$$1);
  } else {
    return (0, _Transforms.AST$$$makeInternalImport)(new _AST2.Type(1, "Any"), entityName$$1, file$$1);
  }
}

function Util$$$entityRefMaybeImported(com$$24, ent$$23) {
  const matchValue$$28 = Util$$$tryImportedEntity(com$$24, ent$$23);

  if (matchValue$$28 == null) {
    return Util$$$entityRef(com$$24, ent$$23);
  } else {
    const importedEntity = matchValue$$28;
    return importedEntity;
  }
}

function Util$$$memberRefPrivate(com$$25, typ$$13, entity$$1, memberName) {
  let file$$2;

  if (entity$$1 == null) {
    file$$2 = com$$25.CurrentFile;
  } else {
    const ent$$24 = entity$$1;
    const entLoc$$1 = (0, _Symbols.FSharpEntity$$get_DeclarationLocation)(ent$$24);
    file$$2 = (0, _Prelude.Path$$$normalizePathAndEnsureFsExtension)((0, _range.range$$get_FileName)(entLoc$$1));
  }

  if (file$$2 === com$$25.CurrentFile) {
    return new _AST2.Expr(1, "IdentExpr", (0, _Transforms.AST$$$makeTypedIdentNonMangled)(typ$$13, memberName));
  } else {
    return (0, _Transforms.AST$$$makeInternalImport)(typ$$13, memberName, file$$2);
  }
}

function Util$$$memberRefTyped(com$$26, typ$$14, memb$$27) {
  return Util$$$memberRefPrivate(com$$26, typ$$14, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(memb$$27), Helpers$$$getMemberDeclarationName(com$$26, memb$$27));
}

function Util$$$memberRef(com$$27, memb$$28) {
  return Util$$$memberRefTyped(com$$27, new _AST2.Type(1, "Any"), memb$$28);
}

function Util$$$tryFindImplementingEntity(ent$$26, interfaceFullName) {
  var t$$16;

  Util$$$tryFindImplementingEntity: while (true) {
    if ((0, _Seq.exists)(function predicate$$5(interfaceType$$2) {
      return Helpers$$$testInterfaceHierarcy(interfaceFullName, interfaceType$$2);
    }, (0, _Symbols.FSharpEntity$$get_DeclaredInterfaces)(ent$$26))) {
      return ent$$26;
    } else {
      const matchValue$$29 = (0, _Symbols.FSharpEntity$$get_BaseType)(ent$$26);
      var $target$$43, t$$17;

      if (matchValue$$29 != null) {
        const activePatternResult66280 = Helpers$$$nonAbbreviatedType(matchValue$$29);

        if (t$$16 = activePatternResult66280, (0, _Symbols.FSharpType$$get_HasTypeDefinition)(t$$16)) {
          $target$$43 = 0;
          t$$17 = activePatternResult66280;
        } else {
          $target$$43 = 1;
        }
      } else {
        $target$$43 = 1;
      }

      switch ($target$$43) {
        case 0:
          {
            ent$$26 = (0, _Symbols.FSharpType$$get_TypeDefinition)(t$$17);
            interfaceFullName = interfaceFullName;
            continue Util$$$tryFindImplementingEntity;
          }

        case 1:
          {
            return null;
          }
      }
    }
  }
}

function Util$$$isReplacementCandidate(ent$$27) {
  const matchValue$$30 = [(0, _Symbols.FSharpAssembly$$get_FileName)((0, _Symbols.FSharpSymbol$$get_Assembly)(ent$$27)), (0, _Symbols.FSharpEntity$$get_TryFullName)(ent$$27)];

  if (matchValue$$30[0] == null) {
    if (matchValue$$30[1] == null) {
      return false;
    } else {
      const entityFullName = matchValue$$30[1];
      return entityFullName.indexOf("Fable.Core.") === 0;
    }
  } else {
    const asmPath = matchValue$$30[0];
    return !(0, _String.isNullOrEmpty)(asmPath);
  }
}

function Util$$$callInstanceMember(com$$28, ctx$$19, r$$2, typ$$15, argInfo, entity$$3, memb$$29) {
  var arg$$5;
  let callee$$5;

  if (argInfo.ThisArg == null) {
    throw new Error((0, _Transforms.Log$$$attachRange)(r$$2, (0, _String.toText)((0, _String.printf)("Unexpected static interface/override call: %s"))((0, _Symbols.FSharpSymbol$$get_FullName)(memb$$29))));
  } else {
    const callee$$4 = argInfo.ThisArg;
    callee$$5 = callee$$4;
  }

  const name$$6 = Helpers$$$getMemberDisplayName(memb$$29);
  var $target$$44, arg$$6;

  if (argInfo.Args.tail != null) {
    if (argInfo.Args.tail.tail == null) {
      if (arg$$5 = argInfo.Args.head, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsPropertySetterMethod)(memb$$29)) {
        $target$$44 = 0;
        arg$$6 = argInfo.Args.head;
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
        const t$$18 = TypeHelpers$$$makeType(com$$28, (0, _Map.empty)({
          Compare: _Util.comparePrimitives
        }), (0, _Symbols.FSharpParameter$$get_Type)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(memb$$29)[0][0]));
        return new _AST2.Expr(16, "Set", callee$$5, new _AST2.SetKind(2, "FieldSet", name$$6, t$$18), arg$$6, r$$2);
      }

    case 1:
      {
        if ((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsPropertyGetterMethod)(memb$$29) ? Util$$$countNonCurriedParams(memb$$29) === 0 : false) {
          const t$$19 = TypeHelpers$$$makeType(com$$28, (0, _Map.empty)({
            Compare: _Util.comparePrimitives
          }), (0, _Symbols.FSharpParameter$$get_Type)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_ReturnParameter)(memb$$29)));
          const kind$$2 = new _AST2.GetKind(2, "FieldGet", name$$6, true, t$$19);
          return new _AST2.Expr(9, "Get", callee$$5, kind$$2, typ$$15, r$$2);
        } else {
          const argInfo$$1 = new _AST2.ArgInfo(callee$$5, argInfo.Args, argInfo.SignatureArgTypes, argInfo.Spread, argInfo.IsBaseOrSelfConstructorCall);
          return (0, _Transforms.AST$$$instanceCall)(r$$2, typ$$15, argInfo$$1, (0, _Transforms.AST$$$makeStrConst)(name$$6));
        }
      }
  }
}

function Util$$$$007CReplaced$007C_$007C(com$$29, ctx$$20, r$$3, typ$$16, argTypes$$2, genArgs$$7, argInfo$$2, memb$$31, entity$$4) {
  var ent$$28;
  var $target$$45, ent$$29;

  if (entity$$4 != null) {
    if (ent$$28 = entity$$4, Util$$$isReplacementCandidate(ent$$28)) {
      $target$$45 = 0;
      ent$$29 = entity$$4;
    } else {
      $target$$45 = 1;
    }
  } else {
    $target$$45 = 1;
  }

  switch ($target$$45) {
    case 0:
      {
        const info = new _AST2.ReplaceCallInfo((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(memb$$31), new _Util.Lazy(function () {
          return (0, _Symbols.FSharpEntity$$get_IsFSharpModule)(ent$$29) ? "" : (0, _OverloadSuffix.getHash)(ent$$29, memb$$31);
        }), argTypes$$2, argInfo$$2.Spread, (0, _Symbols.FSharpEntity$$get_FullName)(ent$$29), genArgs$$7.Value);
        const matchValue$$33 = com$$29.TryReplace(ctx$$20, r$$3, typ$$16, info, argInfo$$2.ThisArg, argInfo$$2.Args);

        if (matchValue$$33 == null) {
          if ((0, _Symbols.FSharpEntity$$get_IsInterface)(ent$$29)) {
            return Util$$$callInstanceMember(com$$29, ctx$$20, r$$3, typ$$16, argInfo$$2, ent$$29, memb$$31);
          } else {
            if (matchValue$$33 == null) {
              return (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$29, ctx$$20.InlinePath, r$$3, (0, _String.toText)((0, _String.printf)("Cannot resolve %s.%s"))(info.DeclaringEntityFullName)(info.CompiledName));
            } else {
              throw new _Types.MatchFailureException("C:/code/fable/src/dotnet/Fable.Compiler/Transforms/FSharp2Fable.Util.fs", 810, 18);
            }
          }
        } else {
          const e$$9 = matchValue$$33;
          return e$$9;
        }
      }

    case 1:
      {
        return null;
      }
  }
}

function Util$$$$007CEmitted$007C_$007C(com$$30, r$$4, typ$$17, argInfo$$3, memb$$32) {
  const activePatternResult66307 = (0, _Prelude.Patterns$$$$007CTry$007C_$007C)(function (atts$$3) {
    return Helpers$$$tryFindAtt("Fable.Core.EmitAttribute", atts$$3);
  }, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_Attributes)(memb$$32));

  if (activePatternResult66307 != null) {
    const att$$6 = activePatternResult66307;
    const matchValue$$35 = (0, _Seq.tryHead)((0, _Symbols.FSharpAttribute$$get_ConstructorArguments)(att$$6));
    var $target$$46, macro;

    if (matchValue$$35 != null) {
      if (typeof matchValue$$35[1] === "string") {
        $target$$46 = 0;
        macro = matchValue$$35[1];
      } else {
        $target$$46 = 1;
      }
    } else {
      $target$$46 = 1;
    }

    switch ($target$$46) {
      case 0:
        {
          let argInfo$$5;
          const matchValue$$36 = [argInfo$$3, Util$$$tryGlobalOrImportedMember(com$$30, new _AST2.Type(1, "Any"), memb$$32)];
          var $target$$47, argInfo$$4, importExpr;

          if (matchValue$$36[0] != null) {
            if (matchValue$$36[1] != null) {
              $target$$47 = 0;
              argInfo$$4 = matchValue$$36[0];
              importExpr = matchValue$$36[1];
            } else {
              $target$$47 = 1;
            }
          } else {
            $target$$47 = 1;
          }

          switch ($target$$47) {
            case 0:
              {
                argInfo$$5 = new _AST2.ArgInfo(importExpr, argInfo$$4.Args, argInfo$$4.SignatureArgTypes, argInfo$$4.Spread, argInfo$$4.IsBaseOrSelfConstructorCall);
                break;
              }

            case 1:
              {
                argInfo$$5 = argInfo$$3;
                break;
              }
          }

          return new _AST2.Expr(8, "Operation", new _AST2.OperationKind(2, "Emit", macro, argInfo$$5), typ$$17, r$$4);
        }

      case 1:
        {
          throw new Error((0, _Transforms.Log$$$attachRange)(r$$4, "EmitAttribute must receive a string argument"));
        }
    }
  } else {
    return null;
  }
}

function Util$$$$007CImported$007C_$007C(com$$31, ctx$$21, r$$5, typ$$18, argInfo$$6, memb$$33, entity$$5) {
  const importValueType = argInfo$$6 != null ? new _AST2.Type(1, "Any") : typ$$18;
  const matchValue$$37 = [Util$$$tryGlobalOrImportedMember(com$$31, importValueType, memb$$33), argInfo$$6, entity$$5];
  var $target$$48, argInfo$$7, e$$10, importExpr$$1, importExpr$$2, argInfo$$8, e$$11;

  if (matchValue$$37[0] == null) {
    if (matchValue$$37[1] != null) {
      if (matchValue$$37[2] != null) {
        $target$$48 = 2;
        argInfo$$8 = matchValue$$37[1];
        e$$11 = matchValue$$37[2];
      } else {
        $target$$48 = 3;
      }
    } else {
      $target$$48 = 3;
    }
  } else if (matchValue$$37[1] == null) {
    $target$$48 = 1;
    importExpr$$2 = matchValue$$37[0];
  } else if (matchValue$$37[2] != null) {
    $target$$48 = 0;
    argInfo$$7 = matchValue$$37[1];
    e$$10 = matchValue$$37[2];
    importExpr$$1 = matchValue$$37[0];
  } else {
    $target$$48 = 3;
  }

  switch ($target$$48) {
    case 0:
      {
        if (((0, _Symbols.FSharpEntity$$get_IsFSharpModule)(e$$10) ? Helpers$$$isModuleValueForCalls(memb$$33) : false) ? true : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsPropertyGetterMethod)(memb$$33) ? Util$$$countNonCurriedParams(memb$$33) === 0 : false) {
          return importExpr$$1;
        } else {
          return (0, _Transforms.AST$$$staticCall)(r$$5, typ$$18, argInfo$$7, importExpr$$1);
        }
      }

    case 1:
      {
        return importExpr$$2;
      }

    case 2:
      {
        const matchValue$$38 = [Util$$$tryImportedEntity(com$$31, e$$11), argInfo$$8.IsBaseOrSelfConstructorCall, argInfo$$8.ThisArg];

        if (matchValue$$38[0] == null) {
          return null;
        } else if (matchValue$$38[1]) {
          const classExpr = matchValue$$38[0];
          return (0, _Transforms.AST$$$staticCall)(r$$5, typ$$18, argInfo$$8, classExpr);
        } else if (matchValue$$38[2] == null) {
          const classExpr$$1 = matchValue$$38[0];

          if ((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsConstructor)(memb$$33)) {
            return new _AST2.Expr(8, "Operation", new _AST2.OperationKind(0, "Call", new _AST2.CallKind(0, "ConstructorCall", classExpr$$1), argInfo$$8), typ$$18, r$$5);
          } else {
            const argInfo$$9 = new _AST2.ArgInfo(classExpr$$1, argInfo$$8.Args, argInfo$$8.SignatureArgTypes, argInfo$$8.Spread, argInfo$$8.IsBaseOrSelfConstructorCall);
            return Util$$$callInstanceMember(com$$31, ctx$$21, r$$5, typ$$18, argInfo$$9, e$$11, memb$$33);
          }
        } else {
          return Util$$$callInstanceMember(com$$31, ctx$$21, r$$5, typ$$18, argInfo$$8, e$$11, memb$$33);
        }
      }

    case 3:
      {
        return null;
      }
  }
}

function Util$$$inlineExpr(com$$32, ctx$$22, r$$6, genArgs$$8, callee$$6, args$$13, memb$$34) {
  let args$$14;

  if (callee$$6 == null) {
    args$$14 = args$$13;
  } else {
    const c = callee$$6;
    args$$14 = (0, _Types.L)(c, args$$13);
  }

  const inExpr = com$$32.GetInlineExpr(memb$$34);
  const patternInput$$6 = (0, _List.fold2)(function folder$$2(tupledArg$$8, argId, arg$$7) {
    let ident$$17;
    const inputRecord = Identifiers$$$makeIdentFrom(com$$32, tupledArg$$8[0], argId);
    ident$$17 = new _AST2.Ident(inputRecord.Name, (0, _AST2.Expr$$get_Type)(arg$$7), inputRecord.Kind, inputRecord.IsMutable, true, inputRecord.Range);
    const ctx$$24 = Identifiers$$$bindExpr(tupledArg$$8[0], argId, new _AST2.Expr(1, "IdentExpr", ident$$17));
    return [ctx$$24, (0, _Types.L)([ident$$17, arg$$7], tupledArg$$8[1])];
  }, [ctx$$22, (0, _Types.L)()], inExpr.Args, args$$14);
  const ctx$$26 = new Context(patternInput$$6[0].Scope, patternInput$$6[0].ScopeInlineValues, (0, _Map.ofSeq)(genArgs$$8.Value, {
    Compare: _Util.comparePrimitives
  }), patternInput$$6[0].EnclosingMember, patternInput$$6[0].EnclosingEntity, patternInput$$6[0].CaughtException, patternInput$$6[0].BoundConstructorThis, patternInput$$6[0].BoundMemberThis, (0, _Types.L)([inExpr.FileName, r$$6], patternInput$$6[0].InlinePath));
  return (0, _List.fold)(function folder$$3(body$$16, binding) {
    return new _AST2.Expr(15, "Let", (0, _Types.L)(binding, (0, _Types.L)()), body$$16);
  }, com$$32.Transform(ctx$$26, inExpr.Body), patternInput$$6[1]);
}

function Util$$$$007CInlined$007C_$007C(com$$33, ctx$$27, r$$7, genArgs$$9, callee$$7, args$$15, memb$$35) {
  if (!Helpers$$$isInline(memb$$35)) {
    return null;
  } else {
    return Util$$$inlineExpr(com$$33, ctx$$27, r$$7, genArgs$$9, callee$$7, args$$15, memb$$35);
  }
}

function Util$$$transformOptionalArguments(com$$34, ctx$$28, r$$8, memb$$36, genArgs$$10, args$$16) {
  var tupledArg$$10;

  if ((0, _Util.count)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(memb$$36)) !== 1 ? true : (0, _Util.count)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(memb$$36)[0]) !== (0, _List.length)(args$$16)) {
    return args$$16;
  } else {
    return (tupledArg$$10 = ["optional", (0, _Types.L)()], (0, _Seq.foldBack2)(function folder$$4(par, arg$$8, tupledArg$$9) {
      var $target$$49;

      if (tupledArg$$9[0] === "optional") {
        if ((0, _Symbols.FSharpParameter$$get_IsOptionalArg)(par)) {
          $target$$49 = 0;
        } else {
          $target$$49 = 1;
        }
      } else if (tupledArg$$9[0] === "inject") {
        if ((0, _Symbols.FSharpParameter$$get_IsOptionalArg)(par)) {
          $target$$49 = 0;
        } else {
          $target$$49 = 1;
        }
      } else {
        $target$$49 = 1;
      }

      switch ($target$$49) {
        case 0:
          {
            var $target$$50;

            if (arg$$8.tag === 0) {
              if (arg$$8.fields[0].tag === 9) {
                if (arg$$8.fields[0].fields[0] == null) {
                  $target$$50 = 0;
                } else {
                  $target$$50 = 1;
                }
              } else {
                $target$$50 = 1;
              }
            } else {
              $target$$50 = 1;
            }

            switch ($target$$50) {
              case 0:
                {
                  if (Helpers$$$tryFindAtt("Fable.Core.InjectAttribute", (0, _Symbols.FSharpParameter$$get_Attributes)(par)) == null) {
                    return [tupledArg$$9[0], tupledArg$$9[0] === "optional" ? tupledArg$$9[1] : (0, _Types.L)(arg$$8, tupledArg$$9[1])];
                  } else {
                    return ["inject", (0, _Types.L)(com$$34.InjectArgument(ctx$$28, r$$8, genArgs$$10.Value, par), tupledArg$$9[1])];
                  }
                }

              case 1:
                {
                  return ["inject", (0, _Types.L)(arg$$8, tupledArg$$9[1])];
                }
            }
          }

        case 1:
          {
            return ["none", (0, _Types.L)(arg$$8, tupledArg$$9[1])];
          }
      }
    }, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(memb$$36)[0], args$$16, [tupledArg$$10[0], tupledArg$$10[1]]))[1];
  }
}

function Util$$$hasAttribute(attFullName, attributes) {
  let found = false;
  const attFullName$$1 = attFullName;
  (0, _Seq.iterate)(function (att$$7) {
    found = found ? true : (0, _Util.equals)((0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpAttribute$$get_AttributeType)(att$$7)), attFullName$$1);
  }, attributes);
  return found;
}

function Util$$$hasInterface(interfaceFullname$$1, ent$$30) {
  let found$$1 = false;
  const interfaceFullname$$2 = interfaceFullname$$1;
  (0, _Seq.iterate)(function (t$$20) {
    found$$1 = found$$1 ? true : (0, _Symbols.FSharpType$$get_HasTypeDefinition)(t$$20) ? (0, _Util.equals)((0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpType$$get_TypeDefinition)(t$$20)), interfaceFullname$$2) : false;
  }, (0, _Symbols.FSharpEntity$$get_AllInterfaces)(ent$$30));
  return found$$1;
}

function Util$$$hasImplicitConstructor(ent$$31) {
  let found$$2 = false;
  (0, _Seq.iterate)(function (m) {
    found$$2 = found$$2 ? true : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsImplicitConstructor)(m);
  }, (0, _Symbols.FSharpEntity$$get_MembersFunctionsAndValues)(ent$$31));
  return found$$2;
}

function Util$$$makeCallFrom(com$$35, ctx$$29, r$$9, typ$$19, isBaseCall, genArgs$$11, callee$$8, args$$17, memb$$37) {
  var entity$$8;
  const genArgs$$12 = new _Util.Lazy(function () {
    return (0, _List.ofSeq)(Util$$$matchGenericParamsFrom(memb$$37, genArgs$$11));
  });
  const args$$18 = Util$$$transformOptionalArguments(com$$35, ctx$$29, r$$9, memb$$37, genArgs$$12, args$$17);
  const argTypes$$3 = TypeHelpers$$$getArgTypes(com$$35, memb$$37);
  const argInfo$$10 = new _AST2.ArgInfo(callee$$8, args$$18, new _AST2.SignatureKind(0, "Typed", argTypes$$3), Helpers$$$hasSeqSpread(memb$$37) ? new _AST2.SpreadKind(1, "SeqSpread") : new _AST2.SpreadKind(0, "NoSpread"), isBaseCall);
  const matchValue$$40 = [memb$$37, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(memb$$37)];
  const activePatternResult66384 = Util$$$$007CEmitted$007C_$007C(com$$35, r$$9, typ$$19, argInfo$$10, matchValue$$40[0]);

  if (activePatternResult66384 != null) {
    const emitted = activePatternResult66384;
    return emitted;
  } else {
    const activePatternResult66382 = Util$$$$007CImported$007C_$007C(com$$35, ctx$$29, r$$9, typ$$19, argInfo$$10, matchValue$$40[0], matchValue$$40[1]);

    if (activePatternResult66382 != null) {
      const imported = activePatternResult66382;
      return imported;
    } else {
      const activePatternResult66380 = Util$$$$007CReplaced$007C_$007C(com$$35, ctx$$29, r$$9, typ$$19, argTypes$$3, genArgs$$12, argInfo$$10, matchValue$$40[0], matchValue$$40[1]);

      if (activePatternResult66380 != null) {
        const replaced = activePatternResult66380;
        return replaced;
      } else {
        const activePatternResult66378 = Util$$$$007CInlined$007C_$007C(com$$35, ctx$$29, r$$9, genArgs$$12, callee$$8, args$$18, matchValue$$40[0]);

        if (activePatternResult66378 != null) {
          const expr$$3 = activePatternResult66378;
          return expr$$3;
        } else {
          const activePatternResult66376 = (0, _Prelude.Patterns$$$$007CTry$007C_$007C)(function (fsRef$$6) {
            return Identifiers$$$tryGetBoundExpr(ctx$$29, r$$9, fsRef$$6);
          }, matchValue$$40[0]);

          if (activePatternResult66376 != null) {
            const funcExpr = activePatternResult66376;

            if (Helpers$$$isModuleValueForCalls(memb$$37)) {
              return funcExpr;
            } else {
              return (0, _Transforms.AST$$$staticCall)(r$$9, typ$$19, argInfo$$10, funcExpr);
            }
          } else {
            var $target$$51, entity$$9;

            if (matchValue$$40[1] != null) {
              if (entity$$8 = matchValue$$40[1], ((0, _Symbols.FSharpEntity$$get_IsInterface)(entity$$8) ? true : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsOverrideOrExplicitInterfaceImplementation)(memb$$37)) ? true : (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsDispatchSlot)(memb$$37)) {
                $target$$51 = 0;
                entity$$9 = matchValue$$40[1];
              } else {
                $target$$51 = 1;
              }
            } else {
              $target$$51 = 1;
            }

            switch ($target$$51) {
              case 0:
                {
                  return Util$$$callInstanceMember(com$$35, ctx$$29, r$$9, typ$$19, argInfo$$10, entity$$9, memb$$37);
                }

              case 1:
                {
                  if (Helpers$$$isModuleValueForCalls(memb$$37)) {
                    return Util$$$memberRefTyped(com$$35, typ$$19, memb$$37);
                  } else {
                    const argInfo$$13 = (!argInfo$$10.IsBaseOrSelfConstructorCall ? Helpers$$$isSelfConstructorCall(ctx$$29, memb$$37) : false) ? new _AST2.ArgInfo(argInfo$$10.ThisArg, argInfo$$10.Args, argInfo$$10.SignatureArgTypes, argInfo$$10.Spread, true) : argInfo$$10;
                    return (0, _Transforms.AST$$$staticCall)(r$$9, typ$$19, argInfo$$13, Util$$$memberRef(com$$35, memb$$37));
                  }
                }
            }
          }
        }
      }
    }
  }
}

function Util$$$makeValueFrom(com$$36, ctx$$30, r$$10, v$$2) {
  const typ$$20 = TypeHelpers$$$makeType(com$$36, ctx$$30.GenericArgs, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_FullType)(v$$2));
  const matchValue$$41 = [v$$2, (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(v$$2)];

  if ((0, _Util.equals)(typ$$20, new _AST2.Type(2, "Unit"))) {
    if (com$$36.Options.verbose ? !(0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsCompilerGenerated)(v$$2) : false) {
      (0, _Transforms.Log$$$addWarning)(com$$36, ctx$$30.InlinePath, r$$10, (0, _String.toText)((0, _String.printf)("Value %s is replaced with unit constant"))((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DisplayName)(v$$2)));
    }

    return new _AST2.Expr(0, "Value", new _AST2.ValueKind(2, "UnitConstant"));
  } else {
    const activePatternResult66399 = Util$$$$007CEmitted$007C_$007C(com$$36, r$$10, typ$$20, null, matchValue$$41[0]);

    if (activePatternResult66399 != null) {
      const emitted$$1 = activePatternResult66399;
      return emitted$$1;
    } else {
      const activePatternResult66397 = Util$$$$007CImported$007C_$007C(com$$36, ctx$$30, r$$10, typ$$20, null, matchValue$$41[0], matchValue$$41[1]);

      if (activePatternResult66397 != null) {
        const imported$$1 = activePatternResult66397;
        return imported$$1;
      } else {
        const activePatternResult66395 = (0, _Prelude.Patterns$$$$007CTry$007C_$007C)(function (fsRef$$7) {
          return Identifiers$$$tryGetBoundExpr(ctx$$30, r$$10, fsRef$$7);
        }, matchValue$$41[0]);

        if (activePatternResult66395 != null) {
          const expr$$4 = activePatternResult66395;
          return expr$$4;
        } else {
          return Util$$$memberRefTyped(com$$36, typ$$20, v$$2);
        }
      }
    }
  }
}