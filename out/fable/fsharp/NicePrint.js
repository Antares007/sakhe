"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrintUtilities$$$bracketIfL = PrintUtilities$$$bracketIfL;
exports.PrintUtilities$$$squareAngleL = PrintUtilities$$$squareAngleL;
exports.PrintUtilities$$$angleL = PrintUtilities$$$angleL;
exports.PrintUtilities$$$braceL = PrintUtilities$$$braceL;
exports.PrintUtilities$$$comment = PrintUtilities$$$comment;
exports.PrintUtilities$$$layoutsL = PrintUtilities$$$layoutsL;
exports.PrintUtilities$$$suppressInheritanceAndInterfacesForTyInSimplifiedDisplays = PrintUtilities$$$suppressInheritanceAndInterfacesForTyInSimplifiedDisplays;
exports.PrintUtilities$$$applyMaxMembers = PrintUtilities$$$applyMaxMembers;
exports.PrintUtilities$$$adjustILName = PrintUtilities$$$adjustILName;
exports.PrintUtilities$$$shrinkOverloads = PrintUtilities$$$shrinkOverloads;
exports.PrintUtilities$$$layoutTyconRefImpl = PrintUtilities$$$layoutTyconRefImpl;
exports.PrintUtilities$$$layoutBuiltinAttribute = PrintUtilities$$$layoutBuiltinAttribute;
exports.layoutTyparConstraint = layoutTyparConstraint;
exports.outputType = outputType;
exports.layoutType = layoutType;
exports.outputTypars = outputTypars;
exports.outputTyconRef = outputTyconRef;
exports.layoutTyconRef = layoutTyconRef;
exports.layoutConst = layoutConst;
exports.prettyLayoutOfMemberSig = prettyLayoutOfMemberSig;
exports.prettyLayoutOfUncurriedSig = prettyLayoutOfUncurriedSig;
exports.InfoMemberPrinting$$$layoutParamData = InfoMemberPrinting$$$layoutParamData;
exports.InfoMemberPrinting$$$formatParamDataToBuffer = InfoMemberPrinting$$$formatParamDataToBuffer;
exports.InfoMemberPrinting$$$prettifyILMethInfo = InfoMemberPrinting$$$prettifyILMethInfo;
exports.InfoMemberPrinting$$$prettyLayoutOfMethInfoFreeStyle = InfoMemberPrinting$$$prettyLayoutOfMethInfoFreeStyle;
exports.InfoMemberPrinting$$$prettyLayoutOfPropInfoFreeStyle = InfoMemberPrinting$$$prettyLayoutOfPropInfoFreeStyle;
exports.InfoMemberPrinting$$$formatMethInfoToBufferFreeStyle = InfoMemberPrinting$$$formatMethInfoToBufferFreeStyle;
exports.InfoMemberPrinting$$$layoutMethInfoFSharpStyle = InfoMemberPrinting$$$layoutMethInfoFSharpStyle;
exports.dataExprL = dataExprL;
exports.outputValOrMember = outputValOrMember;
exports.stringValOrMember = stringValOrMember;
exports.layoutQualifiedValOrMember = layoutQualifiedValOrMember;
exports.outputQualifiedValOrMember = outputQualifiedValOrMember;
exports.outputQualifiedValSpec = outputQualifiedValSpec;
exports.stringOfQualifiedValOrMember = stringOfQualifiedValOrMember;
exports.formatMethInfoToBufferFreeStyle = formatMethInfoToBufferFreeStyle;
exports.prettyLayoutOfMethInfoFreeStyle = prettyLayoutOfMethInfoFreeStyle;
exports.prettyLayoutOfPropInfoFreeStyle = prettyLayoutOfPropInfoFreeStyle;
exports.stringOfMethInfo = stringOfMethInfo;
exports.stringOfParamData = stringOfParamData;
exports.layoutOfParamData = layoutOfParamData;
exports.outputILTypeRef = outputILTypeRef;
exports.layoutILTypeRef = layoutILTypeRef;
exports.outputExnDef = outputExnDef;
exports.layoutExnDef = layoutExnDef;
exports.stringOfTyparConstraints = stringOfTyparConstraints;
exports.outputTycon = outputTycon;
exports.layoutTycon = layoutTycon;
exports.layoutUnionCases = layoutUnionCases;
exports.outputUnionCases = outputUnionCases;
exports.isGeneratedUnionCaseField = isGeneratedUnionCaseField;
exports.isGeneratedExceptionField = isGeneratedExceptionField;
exports.stringOfTyparConstraint = stringOfTyparConstraint;
exports.stringOfTy = stringOfTy;
exports.prettyLayoutOfType = prettyLayoutOfType;
exports.prettyLayoutOfTypeNoCx = prettyLayoutOfTypeNoCx;
exports.prettyStringOfTy = prettyStringOfTy;
exports.prettyStringOfTyNoCx = prettyStringOfTyNoCx;
exports.stringOfRecdField = stringOfRecdField;
exports.stringOfUnionCase = stringOfUnionCase;
exports.stringOfExnDef = stringOfExnDef;
exports.stringOfFSAttrib = stringOfFSAttrib;
exports.stringOfILAttrib = stringOfILAttrib;
exports.layoutInferredSigOfModuleExpr = layoutInferredSigOfModuleExpr;
exports.prettyLayoutOfValOrMember = prettyLayoutOfValOrMember;
exports.prettyLayoutOfValOrMemberNoInst = prettyLayoutOfValOrMemberNoInst;
exports.prettyLayoutOfInstAndSig = prettyLayoutOfInstAndSig;
exports.minimalStringsOfTwoTypes = minimalStringsOfTwoTypes;
exports.minimalStringsOfTwoValues = minimalStringsOfTwoValues;
exports.minimalStringOfType = minimalStringOfType;

var _layout = require("./layout");

var _String = require("../fable-core.2.0.3/String");

var _List = require("../fable-core.2.0.3/List");

var _TastOps = require("./TastOps");

var _TcGlobals = require("./TcGlobals");

var _infos = require("./infos");

var _Types = require("../fable-core.2.0.3/Types");

var _lexhelp = require("./lexhelp");

var _FSComp = require("../codegen/FSComp");

var _tast = require("./tast");

var _illib = require("../absil/illib");

var _il = require("../absil/il");

var _PrettyNaming = require("./PrettyNaming");

var _Int = require("../fable-core.2.0.3/Int32");

var _Util = require("../fable-core.2.0.3/Util");

var _Long = require("../fable-core.2.0.3/Long");

var _Char = require("../fable-core.2.0.3/Char");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Set = require("../fable-core.2.0.3/Set");

var _Option = require("../fable-core.2.0.3/Option");

var _ast = require("./ast");

var _zmap = require("../absil/zmap");

var _zset = require("../absil/zset");

var _lib = require("./lib");

var _rational = require("./rational");

var _ErrorLogger = require("./ErrorLogger");

var _import = require("./import");

var _AttributeChecking = require("./AttributeChecking");

function PrintUtilities$$$bracketIfL(x, lyt) {
  if (x) {
    return (0, _layout.bracketL)(lyt);
  } else {
    return lyt;
  }
}

function PrintUtilities$$$squareAngleL(x$$1) {
  return (0, _layout.op_HatHat)(_layout.LeftL$$$leftBracketAngle, (0, _layout.op_HatHat)(x$$1, _layout.RightL$$$rightBracketAngle));
}

function PrintUtilities$$$angleL(x$$2) {
  return (0, _layout.op_HatHat)((0, _layout.sepL)(_layout.TaggedTextOps$002ELiterals$$$leftAngle), (0, _layout.op_HatHat)(x$$2, (0, _layout.rightL)(_layout.TaggedTextOps$002ELiterals$$$rightAngle)));
}

function PrintUtilities$$$braceL(x$$3) {
  return (0, _layout.op_HatHat)((0, _layout.leftL)(_layout.TaggedTextOps$002ELiterals$$$leftBrace), (0, _layout.op_HatHat)(x$$3, (0, _layout.rightL)(_layout.TaggedTextOps$002ELiterals$$$rightBrace)));
}

function PrintUtilities$$$comment(str) {
  return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _String.toText)((0, _String.printf)("(* %s *)"))(str)));
}

function PrintUtilities$$$layoutsL(ls) {
  if (ls.tail != null) {
    if (ls.tail.tail == null) {
      return ls.head;
    } else {
      return (0, _List.fold)(_layout.op_HatHat, ls.head, ls.tail);
    }
  } else {
    return _layout.emptyL;
  }
}

function PrintUtilities$$$suppressInheritanceAndInterfacesForTyInSimplifiedDisplays(g, amap, m, ty) {
  if (((0, _TastOps.isEnumTy)(g, ty) ? true : (0, _TastOps.isDelegateTy)(g, ty)) ? true : (0, _infos.ExistsHeadTypeInEntireHierarchy)(g, amap, m, ty, (0, _TcGlobals.TcGlobals$$get_exn_tcr)(g))) {
    return true;
  } else {
    return (0, _infos.ExistsHeadTypeInEntireHierarchy)(g, amap, m, ty, (0, _TcGlobals.TcGlobals$$get_tcref_System_Attribute)(g));
  }
}

function PrintUtilities$$$applyMaxMembers(maxMembers, alldecls) {
  var n;
  var $target$$50, n$$1;

  if (maxMembers != null) {
    if (n = maxMembers | 0, (0, _List.length)(alldecls) > n) {
      $target$$50 = 0;
      n$$1 = maxMembers;
    } else {
      $target$$50 = 1;
    }
  } else {
    $target$$50 = 1;
  }

  switch ($target$$50) {
    case 0:
      {
        return (0, _List.append)((0, _List.truncate)(n$$1, alldecls), (0, _Types.L)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("...")), (0, _Types.L)()));
      }

    case 1:
      {
        return alldecls;
      }
  }
}

function PrintUtilities$$$adjustILName(n$$2) {
  return (0, _lexhelp.Keywords$$$QuoteIdentifierIfNeeded)(n$$2);
}

function PrintUtilities$$$shrinkOverloads(layoutFunction, resultFunction, group) {
  var matchValue, n$$3;

  if (group.tail != null) {
    if (group.tail.tail == null) {
      return (0, _Types.L)(resultFunction(group.head, layoutFunction(group.head)), (0, _Types.L)());
    } else {
      return (0, _Types.L)(resultFunction(group.head, (0, _layout.op_MinusMinus)(layoutFunction(group.head), (0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagText)((matchValue = (0, _List.length)(group.tail) | 0, matchValue === 1 ? (0, _FSComp.SR$$$nicePrintOtherOverloads1)() : (n$$3 = matchValue | 0, (0, _FSComp.SR$$$nicePrintOtherOverloadsN$$Z524259A4)(n$$3))))))), (0, _Types.L)());
    }
  } else {
    return (0, _Types.L)();
  }
}

function PrintUtilities$$$layoutTyconRefImpl(isAttribute, denv, tcref) {
  let demangled;
  const name = denv.includeStaticParametersInTypeNames ? (0, _tast.EntityRef$$get_DisplayNameWithStaticParameters)(tcref) : (0, _tast.EntityRef$$get_DisplayName)(tcref) === (0, _tast.EntityRef$$get_DisplayNameWithStaticParameters)(tcref) ? (0, _tast.EntityRef$$get_DisplayName)(tcref) : (0, _tast.EntityRef$$get_DisplayName)(tcref) + "<...>";
  demangled = (isAttribute ? (0, _String.endsWith)(name, "Attribute", 4) : false) ? (0, _illib.String$$$dropSuffix)(name, "Attribute") : name;
  const tyconTextL = (0, _layout.wordL)((0, _layout.mkNav)((0, _tast.EntityRef$$get_DefinitionRange)(tcref), (0, _TastOps.tagEntityRefName)(tcref, demangled)));

  if (denv.shortTypeNames) {
    return tyconTextL;
  } else {
    const path = (0, _tast.CompilationPath$$get_DemangledPath)((0, _tast.EntityRef$$get_CompilationPath)(tcref));
    const path$$1 = denv.includeStaticParametersInTypeNames ? path : (0, _List.map)(function mapping(s) {
      const i = s.indexOf(",") | 0;

      if (i !== -1) {
        return s.substr(0, i) + "<...>";
      } else {
        return s;
      }
    }, path);
    const pathText = (0, _TastOps.trimPathByDisplayEnv)(denv, path$$1);

    if (pathText === "") {
      return tyconTextL;
    } else {
      return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagUnknownEntity)(pathText)), tyconTextL);
    }
  }
}

function PrintUtilities$$$layoutBuiltinAttribute(denv$$1, attrib) {
  const tcref$$1 = (0, _TcGlobals.BuiltinAttribInfo$$get_TyconRef)(attrib);
  return PrintUtilities$$$squareAngleL(PrintUtilities$$$layoutTyconRefImpl(true, denv$$1, tcref$$1));
}

function PrintIL$$$fullySplitILTypeRef(tref) {
  return (0, _List.collect)(_il.splitNamespace, (0, _List.append)((0, _il.ILTypeRef$$get_Enclosing)(tref), (0, _Types.L)((0, _il.ungenericizeTypeName)((0, _il.ILTypeRef$$get_Name)(tref)), (0, _Types.L)())));
}

function PrintIL$$$layoutILTypeRefName(denv$$2, path$$2) {
  const path$$3 = path$$2.tail != null ? path$$2.head === "System" ? path$$2.tail.tail != null ? path$$2.tail.head === "Void" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("unit", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "Object" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("obj", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "String" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("string", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "Single" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("float32", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "Double" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("float", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "Decimal" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("decimal", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "Char" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("char", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "Byte" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("byte", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "SByte" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("sbyte", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "Int16" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("int16", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "Int32" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("int", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "Int64" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("int64", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "UInt16" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("uint16", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "UInt32" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("uint32", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "UInt64" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("uint64", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "IntPtr" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("nativeint", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "UIntPtr" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("unativeint", (0, _Types.L)()) : path$$2 : path$$2.tail.head === "Boolean" ? path$$2.tail.tail.tail == null ? (0, _Types.L)("bool", (0, _Types.L)()) : path$$2 : path$$2 : path$$2 : path$$2 : path$$2;
  const patternInput = (0, _illib.List$$$frontAndBack)(path$$3);
  const tagged = (patternInput[1] === "obj" ? true : patternInput[1] === "string") ? (0, _layout.TaggedTextOps$$$tagClass)(patternInput[1]) : (0, _layout.TaggedTextOps$$$tagStruct)(patternInput[1]);

  if (denv$$2.shortTypeNames) {
    return (0, _layout.wordL)(tagged);
  } else {
    return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagNamespace)((0, _TastOps.trimPathByDisplayEnv)(denv$$2, patternInput[0]))), (0, _layout.wordL)(tagged));
  }
}

function PrintIL$$$layoutILTypeRef(denv$$3, tref$$1) {
  const path$$4 = PrintIL$$$fullySplitILTypeRef(tref$$1);
  return PrintIL$$$layoutILTypeRefName(denv$$3, path$$4);
}

function PrintIL$$$adjustILMethodName(n$$5) {
  const demangleOperatorNameIfNeeded = function demangleOperatorNameIfNeeded(s$$1) {
    if ((0, _PrettyNaming.IsMangledOpName)(s$$1)) {
      return (0, _PrettyNaming.DemangleOperatorName)(s$$1);
    } else {
      return s$$1;
    }
  };

  return demangleOperatorNameIfNeeded((0, _lexhelp.Keywords$$$QuoteIdentifierIfNeeded)(n$$5));
}

function PrintIL$$$isStaticILEvent(e) {
  if ((0, _il.ILCallingConv$$get_IsStatic)((0, _il.ILMethodRef$$get_CallingSignature)((0, _il.ILEventDef$$get_AddMethod)(e)).CallingConv)) {
    return true;
  } else {
    return (0, _il.ILCallingConv$$get_IsStatic)((0, _il.ILMethodRef$$get_CallingSignature)((0, _il.ILEventDef$$get_RemoveMethod)(e)).CallingConv);
  }
}

function PrintIL$$$layoutILArrayShape(_arg1) {
  const sh = _arg1.fields[0];
  return (0, _layout.op_HatHat)(_layout.SepL$$$leftBracket, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)((0, _String.join)("", ...(0, _List.map)(function mapping$$1(_arg1$$1) {
    return ",";
  }, (0, _List.tail)(sh))))), _layout.RightL$$$rightBracket));
}

function PrintIL$$$layoutILGenericParameterDefs(ps) {
  return (0, _List.map)(function mapping$$2(x$$9) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagTypeParameter)("'" + x$$9.Name));
  }, ps);
}

function PrintIL$$$paramsL(ps$$1) {
  if (ps$$1.tail == null) {
    return _layout.emptyL;
  } else {
    const body = (0, _layout.commaListL)(ps$$1);
    return (0, _layout.op_HatHat)(_layout.SepL$$$leftAngle, (0, _layout.op_HatHat)(body, _layout.RightL$$$rightAngle));
  }
}

function PrintIL$$$pruneParms(className, ilTyparSubst) {
  let numParms;
  const rightMost = (0, _List.last)((0, _PrettyNaming.SplitNamesForILPath)(className));
  const matchValue$$1 = (0, _Int.tryParse)(rightMost, 10, 0);
  numParms = matchValue$$1[0] ? matchValue$$1[1] : 0;
  return (0, _List.reverse)((0, _List.truncate)(numParms, (0, _List.reverse)(ilTyparSubst)));
}

function PrintIL$$$layoutILType(denv$$4, ilTyparSubst$$1, ty$$1) {
  PrintIL$$$layoutILType: while (true) {
    var $target$$54, t$$1, t$$2;

    switch (ty$$1.tag) {
      case 1:
        $target$$54 = 1;
        break;

      case 2:
        $target$$54 = 2;
        t$$1 = ty$$1.fields[0];
        break;

      case 3:
        $target$$54 = 2;
        t$$1 = ty$$1.fields[0];
        break;

      case 4:
        $target$$54 = 3;
        t$$2 = ty$$1.fields[0];
        break;

      case 5:
        $target$$54 = 3;
        t$$2 = ty$$1.fields[0];
        break;

      case 6:
        $target$$54 = 4;
        break;

      case 7:
        $target$$54 = 5;
        break;

      case 8:
        $target$$54 = 6;
        break;

      default:
        $target$$54 = 0;
    }

    switch ($target$$54) {
      case 0:
        {
          return _layout.WordL$$$structUnit;
        }

      case 1:
        {
          const t = ty$$1.fields[1];
          const sh$$1 = ty$$1.fields[0];
          return (0, _layout.op_HatHat)(PrintIL$$$layoutILType(denv$$4, ilTyparSubst$$1, t), PrintIL$$$layoutILArrayShape(sh$$1));
        }

      case 2:
        {
          return (0, _layout.op_HatHat)(PrintIL$$$layoutILTypeRef(denv$$4, (0, _il.ILTypeSpec$$get_TypeRef)(t$$1)), PrintIL$$$paramsL((0, _List.map)(function mapping$$3(ty$$2) {
            return PrintIL$$$layoutILType(denv$$4, ilTyparSubst$$1, ty$$2);
          }, (0, _il.ILTypeSpec$$get_GenericArgs)(t$$1))));
        }

      case 3:
        {
          denv$$4 = denv$$4;
          ilTyparSubst$$1 = ilTyparSubst$$1;
          ty$$1 = t$$2;
          continue PrintIL$$$layoutILType;
        }

      case 4:
        {
          const t$$3 = ty$$1.fields[0];
          return PrintIL$$$layoutILCallingSignature(denv$$4, ilTyparSubst$$1, null, t$$3);
        }

      case 5:
        {
          const n$$7 = ty$$1.fields[0];
          return (0, _List.item)(~~n$$7, ilTyparSubst$$1);
        }

      case 6:
        {
          const t$$4 = ty$$1.fields[2];
          denv$$4 = denv$$4;
          ilTyparSubst$$1 = ilTyparSubst$$1;
          ty$$1 = t$$4;
          continue PrintIL$$$layoutILType;
        }
    }
  }
}

function PrintIL$$$layoutILCallingSignature(denv$$5, ilTyparSubst$$2, cons, signatur) {
  const args = (0, _List.map)(function mapping$$4(ty$$3) {
    return PrintIL$$$layoutILType(denv$$5, ilTyparSubst$$2, ty$$3);
  }, signatur.ArgTypes);
  let res;

  if (cons == null) {
    res = PrintIL$$$layoutILType(denv$$5, ilTyparSubst$$2, signatur.ReturnType);
  } else {
    const className$$1 = cons;
    res = (0, _layout.op_HatHat)(PrintIL$$$layoutILTypeRefName(denv$$5, (0, _PrettyNaming.SplitNamesForILPath)((0, _il.ungenericizeTypeName)(className$$1))), PrintIL$$$paramsL(PrintIL$$$pruneParms(className$$1, ilTyparSubst$$2)));
  }

  if (args.tail != null) {
    if (args.tail.tail == null) {
      return (0, _layout.op_HatHat)(args.head, (0, _layout.op_HatHat)(_layout.WordL$$$arrow, res));
    } else {
      return (0, _layout.op_HatHat)((0, _layout.sepListL)(_layout.WordL$$$star, args), (0, _layout.op_HatHat)(_layout.WordL$$$arrow, res));
    }
  } else {
    return (0, _layout.op_HatHat)(_layout.WordL$$$structUnit, (0, _layout.op_HatHat)(_layout.WordL$$$arrow, res));
  }
}

function PrintIL$$$layoutILParameter(denv$$6, ilTyparSubst$$3, p) {
  var nm, nm$$1, nm$$2;
  let preL;
  const isParamArray = (0, _TastOps.TryFindILAttribute)((0, _TcGlobals.TcGlobals$$get_attrib_ParamArrayAttribute)(denv$$6.g), (0, _il.ILParameter$$get_CustomAttrs)(p));
  const matchValue$$2 = [isParamArray, p.Name, p.IsOptional];
  preL = matchValue$$2[1] == null ? _layout.LeftL$$$colon : matchValue$$2[2] ? (nm = matchValue$$2[1], (0, _layout.op_HatHat)(_layout.LeftL$$$questionMark, (0, _layout.op_HatHat)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagParameter)(nm)), _layout.SepL$$$colon))) : matchValue$$2[0] ? (nm$$1 = matchValue$$2[1], (0, _layout.op_HatHat)(PrintUtilities$$$layoutBuiltinAttribute(denv$$6, (0, _TcGlobals.TcGlobals$$get_attrib_ParamArrayAttribute)(denv$$6.g)), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagParameter)(nm$$1)), _layout.SepL$$$colon))) : (nm$$2 = matchValue$$2[1], (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagParameter)(nm$$2)), _layout.SepL$$$colon));
  return (0, _layout.op_HatHat)(preL, PrintIL$$$layoutILType(denv$$6, ilTyparSubst$$3, p.Type));
}

function PrintIL$$$layoutILParameters(denv$$7, ilTyparSubst$$4, cons$$1, parameters, retType) {
  let res$$1;

  if (cons$$1 == null) {
    res$$1 = PrintIL$$$layoutILType(denv$$7, ilTyparSubst$$4, retType);
  } else {
    const className$$2 = cons$$1;
    res$$1 = (0, _layout.op_HatHat)(PrintIL$$$layoutILTypeRefName(denv$$7, (0, _PrettyNaming.SplitNamesForILPath)((0, _il.ungenericizeTypeName)(className$$2))), PrintIL$$$paramsL(PrintIL$$$pruneParms(className$$2, ilTyparSubst$$4)));
  }

  if (parameters.tail != null) {
    if (parameters.tail.tail == null) {
      return (0, _layout.op_HatHat)(PrintIL$$$layoutILParameter(denv$$7, ilTyparSubst$$4, parameters.head), (0, _layout.op_HatHat)(_layout.WordL$$$arrow, res$$1));
    } else {
      return (0, _layout.op_HatHat)((0, _layout.sepListL)(_layout.WordL$$$star, (0, _List.map)(function (p$$1) {
        return PrintIL$$$layoutILParameter(denv$$7, ilTyparSubst$$4, p$$1);
      }, parameters)), (0, _layout.op_HatHat)(_layout.WordL$$$arrow, res$$1));
    }
  } else {
    return (0, _layout.op_HatHat)(_layout.WordL$$$structUnit, (0, _layout.op_HatHat)(_layout.WordL$$$arrow, res$$1));
  }
}

function PrintIL$$$layoutILMethodDef(denv$$8, ilTyparSubst$$5, className$$3, m$$1) {
  const myParms = PrintIL$$$layoutILGenericParameterDefs((0, _il.ILMethodDef$$get_GenericParams)(m$$1));
  const ilTyparSubst$$6 = (0, _List.append)(ilTyparSubst$$5, myParms);
  const name$$1 = PrintIL$$$adjustILMethodName((0, _il.ILMethodDef$$get_Name)(m$$1));
  const patternInput$$1 = (0, _il.ILMethodDef$$get_IsConstructor)(m$$1) ? [_layout.WordL$$$keywordNew, className$$3] : (0, _il.ILMethodDef$$get_IsStatic)(m$$1) ? [(0, _layout.op_HatHat)(_layout.WordL$$$keywordStatic, (0, _layout.op_HatHat)(_layout.WordL$$$keywordMember, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagMethod)(name$$1)), PrintIL$$$paramsL(myParms)))), null] : [(0, _layout.op_HatHat)(_layout.WordL$$$keywordMember, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagMethod)(name$$1)), PrintIL$$$paramsL(myParms))), null];
  let signaturL;
  const tupledArg = [(0, _il.ILMethodDef$$get_Parameters)(m$$1), (0, _il.ILMethodDef$$get_Return)(m$$1).Type];
  signaturL = PrintIL$$$layoutILParameters(denv$$8, ilTyparSubst$$6, patternInput$$1[1], tupledArg[0], tupledArg[1]);
  return (0, _layout.op_HatHat)(patternInput$$1[0], (0, _layout.op_HatHat)(_layout.WordL$$$colon, signaturL));
}

function PrintIL$$$layoutILFieldDef(denv$$9, ilTyparSubst$$7, f) {
  const staticL = (0, _il.ILFieldDef$$get_IsStatic)(f) ? _layout.WordL$$$keywordStatic : _layout.emptyL;
  const name$$2 = PrintUtilities$$$adjustILName((0, _il.ILFieldDef$$get_Name)(f));
  const nameL$$1 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagField)(name$$2));
  const typL = PrintIL$$$layoutILType(denv$$9, ilTyparSubst$$7, (0, _il.ILFieldDef$$get_FieldType)(f));
  return (0, _layout.op_HatHat)(staticL, (0, _layout.op_HatHat)(_layout.WordL$$$keywordVal, (0, _layout.op_HatHat)(nameL$$1, (0, _layout.op_HatHat)(_layout.WordL$$$colon, typL))));
}

function PrintIL$$$layoutILEventDef(denv$$10, ilTyparSubst$$8, e$$1) {
  const staticL$$1 = PrintIL$$$isStaticILEvent(e$$1) ? _layout.WordL$$$keywordStatic : _layout.emptyL;
  const name$$3 = PrintUtilities$$$adjustILName((0, _il.ILEventDef$$get_Name)(e$$1));
  const nameL$$2 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagEvent)(name$$3));
  let typL$$1;
  const matchValue$$3 = (0, _il.ILEventDef$$get_EventType)(e$$1);

  if (matchValue$$3 != null) {
    const t$$5 = matchValue$$3;
    typL$$1 = PrintIL$$$layoutILType(denv$$10, ilTyparSubst$$8, t$$5);
  } else {
    typL$$1 = _layout.emptyL;
  }

  return (0, _layout.op_HatHat)(staticL$$1, (0, _layout.op_HatHat)(_layout.WordL$$$keywordEvent, (0, _layout.op_HatHat)(nameL$$2, (0, _layout.op_HatHat)(_layout.WordL$$$colon, typL$$1))));
}

function PrintIL$$$layoutILPropertyDef(denv$$11, ilTyparSubst$$9, p$$2) {
  const staticL$$2 = (0, _Util.equals)((0, _il.ILPropertyDef$$get_CallingConv)(p$$2), new _il.ILThisConvention(2, "Static")) ? _layout.WordL$$$keywordStatic : _layout.emptyL;
  const name$$4 = PrintUtilities$$$adjustILName((0, _il.ILPropertyDef$$get_Name)(p$$2));
  const nameL$$3 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagProperty)(name$$4));

  const layoutGetterType = function layoutGetterType(getterRef) {
    if ((0, _il.ILMethodRef$$get_ArgTypes)(getterRef).tail == null) {
      return PrintIL$$$layoutILType(denv$$11, ilTyparSubst$$9, (0, _il.ILMethodRef$$get_ReturnType)(getterRef));
    } else {
      return PrintIL$$$layoutILCallingSignature(denv$$11, ilTyparSubst$$9, null, (0, _il.ILMethodRef$$get_CallingSignature)(getterRef));
    }
  };

  const layoutSetterType = function layoutSetterType(setterRef) {
    const argTypes = (0, _il.ILMethodRef$$get_ArgTypes)(setterRef);

    if (argTypes.tail == null) {
      return _layout.emptyL;
    } else {
      const patternInput$$2 = (0, _illib.List$$$frontAndBack)(argTypes);
      const argsL = (0, _layout.sepListL)(_layout.WordL$$$star, (0, _List.map)(function mapping$$5(ty$$6) {
        return PrintIL$$$layoutILType(denv$$11, ilTyparSubst$$9, ty$$6);
      }, patternInput$$2[0]));
      return (0, _layout.op_HatHat)(argsL, (0, _layout.op_HatHat)(_layout.WordL$$$arrow, PrintIL$$$layoutILType(denv$$11, ilTyparSubst$$9, patternInput$$2[1])));
    }
  };

  let typL$$2;
  const matchValue$$4 = [(0, _il.ILPropertyDef$$get_GetMethod)(p$$2), (0, _il.ILPropertyDef$$get_SetMethod)(p$$2)];

  if (matchValue$$4[0] != null) {
    const getterRef$$1 = matchValue$$4[0];
    typL$$2 = layoutGetterType(getterRef$$1);
  } else if (matchValue$$4[1] != null) {
    const setterRef$$1 = matchValue$$4[1];
    typL$$2 = layoutSetterType(setterRef$$1);
  } else {
    typL$$2 = PrintIL$$$layoutILType(denv$$11, ilTyparSubst$$9, (0, _il.ILPropertyDef$$get_PropertyType)(p$$2));
  }

  let specGetSetL;
  const matchValue$$5 = [(0, _il.ILPropertyDef$$get_GetMethod)(p$$2), (0, _il.ILPropertyDef$$get_SetMethod)(p$$2)];
  var $target$$55;

  if (matchValue$$5[0] != null) {
    if (matchValue$$5[1] != null) {
      $target$$55 = 2;
    } else {
      $target$$55 = 0;
    }
  } else if (matchValue$$5[1] != null) {
    $target$$55 = 1;
  } else {
    $target$$55 = 0;
  }

  switch ($target$$55) {
    case 0:
      {
        specGetSetL = _layout.emptyL;
        break;
      }

    case 1:
      {
        specGetSetL = (0, _layout.op_HatHat)(_layout.WordL$$$keywordWith, _layout.WordL$$$keywordSet);
        break;
      }

    case 2:
      {
        specGetSetL = (0, _layout.op_HatHat)(_layout.WordL$$$keywordWith, (0, _layout.op_HatHat)(_layout.WordL$$$keywordGet, (0, _layout.op_HatHat)(_layout.RightL$$$comma, _layout.WordL$$$keywordSet)));
        break;
      }
  }

  return (0, _layout.op_HatHat)(staticL$$2, (0, _layout.op_HatHat)(_layout.WordL$$$keywordMember, (0, _layout.op_HatHat)(nameL$$3, (0, _layout.op_HatHat)(_layout.WordL$$$colon, (0, _layout.op_HatHat)(typL$$2, specGetSetL)))));
}

function PrintIL$$$layoutILFieldInit(x$$12) {
  var copyOfStruct;
  let textOpt;

  if (x$$12 == null) {
    textOpt = null;
  } else {
    const init = x$$12;

    switch (init.tag) {
      case 1:
        {
          const x$$13 = init.fields[0];
          textOpt = x$$13 ? _layout.TaggedTextOps$002ELiterals$$$keywordTrue : _layout.TaggedTextOps$002ELiterals$$$keywordFalse;
          break;
        }

      case 2:
        {
          const c = init.fields[0];
          textOpt = (0, _layout.TaggedTextOps$$$tagStringLiteral)("'" + (copyOfStruct = String.fromCharCode(c), copyOfStruct) + "'");
          break;
        }

      case 3:
        {
          const x$$14 = init.fields[0] | 0;
          textOpt = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Util.int32ToString)(x$$14) + "y");
          break;
        }

      case 4:
        {
          const x$$15 = init.fields[0] | 0;
          textOpt = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Util.int32ToString)(x$$15) + "s");
          break;
        }

      case 5:
        {
          const x$$16 = init.fields[0] | 0;
          textOpt = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Util.int32ToString)(x$$16));
          break;
        }

      case 6:
        {
          const x$$17 = init.fields[0];
          textOpt = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Long.toString)(x$$17) + "L");
          break;
        }

      case 7:
        {
          const x$$18 = init.fields[0];
          textOpt = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Util.int32ToString)(~~x$$18) + "uy");
          break;
        }

      case 8:
        {
          const x$$19 = init.fields[0];
          textOpt = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Util.int32ToString)(~~x$$19) + "us");
          break;
        }

      case 9:
        {
          const x$$20 = init.fields[0];
          textOpt = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Long.toString)((0, _Long.fromInteger)(x$$20, false, 6)) + "u");
          break;
        }

      case 10:
        {
          const x$$21 = init.fields[0];
          textOpt = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Long.toString)((0, _Long.fromValue)(x$$21, false)) + "UL");
          break;
        }

      case 11:
        {
          const d = init.fields[0];
          const s$$3 = d.toString();
          const s$$4 = (0, _Seq.forAll)(function (c$$1) {
            return (0, _Char.isDigit)(c$$1) ? true : c$$1 === "-";
          }, s$$3.split("")) ? s$$3 + ".0" : s$$3;
          textOpt = (0, _layout.TaggedTextOps$$$tagNumericLiteral)(s$$4 + "f");
          break;
        }

      case 12:
        {
          const d$$1 = init.fields[0];
          const s$$5 = d$$1.toString();
          const s$$6 = (0, _Seq.forAll)(function (c$$2) {
            return (0, _Char.isDigit)(c$$2) ? true : c$$2 === "-";
          }, s$$5.split("")) ? s$$5 + ".0" : s$$5;
          textOpt = (0, _layout.TaggedTextOps$$$tagNumericLiteral)(s$$6);
          break;
        }

      default:
        {
          textOpt = null;
        }
    }
  }

  if (textOpt != null) {
    const s$$7 = textOpt;
    return (0, _layout.op_HatHat)(_layout.WordL$$$equals, (0, _layout.wordL)(s$$7));
  } else {
    return (0, _layout.op_HatHat)(_layout.WordL$$$equals, PrintUtilities$$$comment("value unavailable"));
  }
}

function PrintIL$$$layoutILEnumDefParts(nm$$3, litVal) {
  return (0, _layout.op_HatHat)(_layout.WordL$$$bar, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagEnum)(PrintUtilities$$$adjustILName(nm$$3))), PrintIL$$$layoutILFieldInit(litVal)));
}

function PrintIL$$$layoutILEnumDef(f$$1) {
  return PrintIL$$$layoutILEnumDefParts((0, _il.ILFieldDef$$get_Name)(f$$1), (0, _il.ILFieldDef$$get_LiteralValue)(f$$1));
}

function PrintIL$$$isStaticILProperty(p$$3) {
  const matchValue$$6 = [(0, _il.ILPropertyDef$$get_GetMethod)(p$$3), (0, _il.ILPropertyDef$$get_SetMethod)(p$$3)];

  if (matchValue$$6[0] == null) {
    if (matchValue$$6[1] == null) {
      return true;
    } else {
      const setter = matchValue$$6[1];
      return (0, _il.ILCallingConv$$get_IsStatic)((0, _il.ILMethodRef$$get_CallingSignature)(setter).CallingConv);
    }
  } else {
    const getter = matchValue$$6[0];
    return (0, _il.ILCallingConv$$get_IsStatic)((0, _il.ILMethodRef$$get_CallingSignature)(getter).CallingConv);
  }
}

function PrintIL$$$isPublicILMethod(m$$2) {
  return (0, _Util.equals)((0, _il.ILMethodDef$$get_Access)(m$$2), new _il.ILMemberAccess(6, "Public"));
}

function PrintIL$$$isPublicILEvent(typeDef, e$$2) {
  try {
    return PrintIL$$$isPublicILMethod((0, _il.resolveILMethodRef)(typeDef, (0, _il.ILEventDef$$get_AddMethod)(e$$2))) ? PrintIL$$$isPublicILMethod((0, _il.resolveILMethodRef)(typeDef, (0, _il.ILEventDef$$get_RemoveMethod)(e$$2))) : false;
  } catch (matchValue$$7) {
    return false;
  }
}

function PrintIL$$$isPublicILProperty(typeDef$$1, m$$3) {
  try {
    const matchValue$$8 = (0, _il.ILPropertyDef$$get_GetMethod)(m$$3);

    if (matchValue$$8 == null) {
      const matchValue$$9 = (0, _il.ILPropertyDef$$get_SetMethod)(m$$3);

      if (matchValue$$9 != null) {
        const ilMethRef$$1 = matchValue$$9;
        return PrintIL$$$isPublicILMethod((0, _il.resolveILMethodRef)(typeDef$$1, ilMethRef$$1));
      } else {
        return false;
      }
    } else {
      const ilMethRef = matchValue$$8;
      return PrintIL$$$isPublicILMethod((0, _il.resolveILMethodRef)(typeDef$$1, ilMethRef));
    }
  } catch (matchValue$$10) {
    return false;
  }
}

function PrintIL$$$isPublicILCtor(m$$4) {
  if ((0, _Util.equals)((0, _il.ILMethodDef$$get_Access)(m$$4), new _il.ILMemberAccess(6, "Public"))) {
    return (0, _il.ILMethodDef$$get_IsConstructor)(m$$4);
  } else {
    return false;
  }
}

function PrintIL$$$isNotSpecialName(m$$5) {
  return !(0, _il.ILMethodDef$$get_IsSpecialName)(m$$5);
}

function PrintIL$$$isPublicILField(f$$2) {
  return (0, _Util.equals)((0, _il.ILFieldDef$$get_Access)(f$$2), new _il.ILMemberAccess(6, "Public"));
}

function PrintIL$$$isPublicILTypeDef(c$$3) {
  const matchValue$$11 = (0, _il.ILTypeDef$$get_Access)(c$$3);
  var $target$$56;

  if (matchValue$$11.tag === 0) {
    $target$$56 = 0;
  } else if (matchValue$$11.tag === 2) {
    if (matchValue$$11.fields[0].tag === 6) {
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
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

function PrintIL$$$isShowEnumField(f$$3) {
  return (0, _il.ILFieldDef$$get_Name)(f$$3) !== "value__";
}

const PrintIL$$$noShow = (0, _Set.ofSeq)(["System.Object", "Object", "System.ValueType", "ValueType", "obj"], {
  Compare: _Util.comparePrimitives
});

function PrintIL$$$isShowBase(n$$8) {
  return !(0, _Set.FSharpSet$$Contains$$2B595)(PrintIL$$$noShow, (0, _layout.showL)(n$$8));
}

function PrintIL$$$layoutILTypeDef(denv$$12, typeDef$$2) {
  const ilTyparSubst$$10 = PrintIL$$$layoutILGenericParameterDefs((0, _il.ILTypeDef$$get_GenericParams)(typeDef$$2));

  const renderL = function renderL(pre, body$$1, post) {
    if (pre == null) {
      return (0, _layout.aboveListL)(body$$1);
    } else {
      const pre$$1 = pre;

      if (body$$1.tail == null) {
        return _layout.emptyL;
      } else {
        return (0, _layout.op_AtAt)((0, _layout.op_AtAtMinusMinus)(pre$$1, (0, _layout.aboveListL)(body$$1)), post);
      }
    }
  };

  if (((0, _il.ILTypeDef$$get_IsClass)(typeDef$$2) ? true : (0, _il.ILTypeDef$$get_IsStruct)(typeDef$$2)) ? true : (0, _il.ILTypeDef$$get_IsInterface)(typeDef$$2)) {
    const pre$$2 = (0, _il.ILTypeDef$$get_IsStruct)(typeDef$$2) ? _layout.WordL$$$keywordStruct : null;
    let baseT;
    const matchValue$$12 = (0, _il.ILTypeDef$$get_Extends)(typeDef$$2);

    if (matchValue$$12 == null) {
      baseT = (0, _il.ILTypeDef$$get_IsInterface)(typeDef$$2) ? (0, _List.choose)(function chooser(b$$1) {
        const baseName$$1 = PrintIL$$$layoutILType(denv$$12, ilTyparSubst$$10, b$$1);

        if (PrintIL$$$isShowBase(baseName$$1)) {
          return (0, _layout.op_HatHat)(_layout.WordL$$$keywordInherit, baseName$$1);
        } else {
          return null;
        }
      }, (0, _il.ILTypeDef$$get_Implements)(typeDef$$2)) : (0, _Types.L)();
    } else {
      const b = matchValue$$12;
      const baseName = PrintIL$$$layoutILType(denv$$12, ilTyparSubst$$10, b);
      baseT = PrintIL$$$isShowBase(baseName) ? (0, _Types.L)((0, _layout.op_HatHat)(_layout.WordL$$$keywordInherit, baseName), (0, _Types.L)()) : (0, _Types.L)();
    }

    const memberBlockLs = function memberBlockLs(tupledArg$$1) {
      const ctors = PrintUtilities$$$shrinkOverloads(function layoutFunction$$1(m$$7) {
        return PrintIL$$$layoutILMethodDef(denv$$12, ilTyparSubst$$10, (0, _il.ILTypeDef$$get_Name)(typeDef$$2), m$$7);
      }, function resultFunction$$1(_arg1$$2, xL) {
        return xL;
      }, (0, _List.sortBy)(function projection(md) {
        return (0, _List.length)((0, _il.ILMethodDef$$get_Parameters)(md));
      }, (0, _List.filter)(PrintIL$$$isPublicILCtor, (0, _il.ILMethodDefs$$get_AsList)(tupledArg$$1[1])), {
        Compare: _Util.comparePrimitives
      }));
      const fields = (0, _List.map)(function mapping$$6(f$$5) {
        return PrintIL$$$layoutILFieldDef(denv$$12, ilTyparSubst$$10, f$$5);
      }, (0, _List.filter)(PrintIL$$$isPublicILField, (0, _il.ILFieldDefs$$get_AsList)(tupledArg$$1[0])));
      const props = (0, _List.map)(function mapping$$7(pd) {
        return [[(0, _il.ILPropertyDef$$get_Name)(pd), (0, _List.length)((0, _il.ILPropertyDef$$get_Args)(pd))], PrintIL$$$layoutILPropertyDef(denv$$12, ilTyparSubst$$10, pd)];
      }, (0, _List.filter)(function predicate(m$$8) {
        return PrintIL$$$isPublicILProperty(typeDef$$2, m$$8);
      }, (0, _il.ILPropertyDefs$$get_AsList)(tupledArg$$1[2])));
      const events = (0, _List.map)(function mapping$$8(e$$4) {
        return PrintIL$$$layoutILEventDef(denv$$12, ilTyparSubst$$10, e$$4);
      }, (0, _List.filter)(function predicate$$1(e$$3) {
        return PrintIL$$$isPublicILEvent(typeDef$$2, e$$3);
      }, (0, _il.ILEventDefs$$get_AsList)(tupledArg$$1[3])));
      const meths = (0, _List.collect)(function mapping$$10(tupledArg$$2) {
        return PrintUtilities$$$shrinkOverloads(function layoutFunction$$2($arg$$23) {
          return PrintIL$$$layoutILMethodDef(denv$$12, ilTyparSubst$$10, (0, _il.ILTypeDef$$get_Name)(typeDef$$2), $arg$$23[1]);
        }, function resultFunction$$2(x$$22, xL$$1) {
          return [x$$22[0], xL$$1];
        }, (0, _List.sortBy)(function projection$$2(tuple$$2) {
          return tuple$$2[0];
        }, tupledArg$$2[1], {
          Compare: _Util.compareArrays
        }));
      }, (0, _List.groupBy)(function projection$$1($arg$$18) {
        return $arg$$18[0][0];
      }, (0, _List.map)(function mapping$$9(md$$1) {
        return [[(0, _il.ILMethodDef$$get_Name)(md$$1), (0, _List.length)((0, _il.ILMethodDef$$get_Parameters)(md$$1))], md$$1];
      }, (0, _List.filter)(PrintIL$$$isNotSpecialName, (0, _List.filter)(PrintIL$$$isPublicILMethod, (0, _il.ILMethodDefs$$get_AsList)(tupledArg$$1[1])))), {
        Equals($x$$19, $y$$20) {
          return $x$$19 === $y$$20;
        },

        GetHashCode: _Util.structuralHash
      }));
      const members = (0, _List.map)(function mapping$$11(tuple$$5) {
        return tuple$$5[1];
      }, (0, _List.sortBy)(function projection$$3(tuple$$4) {
        return tuple$$4[0];
      }, (0, _List.append)(props, meths), {
        Compare: _Util.compareArrays
      }));
      return (0, _List.append)(ctors, (0, _List.append)(fields, (0, _List.append)(members, events)));
    };

    const bodyStatic = memberBlockLs([(0, _il.mkILFields)((0, _List.filter)(function predicate$$2(fd) {
      return (0, _il.ILFieldDef$$get_IsStatic)(fd);
    }, (0, _il.ILFieldDefs$$get_AsList)((0, _il.ILTypeDef$$get_Fields)(typeDef$$2)))), (0, _il.mkILMethods)((0, _List.filter)(function predicate$$3(md$$2) {
      return (0, _il.ILMethodDef$$get_IsStatic)(md$$2);
    }, (0, _il.ILMethodDefs$$get_AsList)((0, _il.ILTypeDef$$get_Methods)(typeDef$$2)))), (0, _il.mkILProperties)((0, _List.filter)(PrintIL$$$isStaticILProperty, (0, _il.ILPropertyDefs$$get_AsList)((0, _il.ILTypeDef$$get_Properties)(typeDef$$2)))), (0, _il.mkILEvents)((0, _List.filter)(PrintIL$$$isStaticILEvent, (0, _il.ILEventDefs$$get_AsList)((0, _il.ILTypeDef$$get_Events)(typeDef$$2))))]);
    const bodyInstance = memberBlockLs([(0, _il.mkILFields)((0, _List.filter)(function predicate$$6(fd$$1) {
      return !(0, _il.ILFieldDef$$get_IsStatic)(fd$$1);
    }, (0, _il.ILFieldDefs$$get_AsList)((0, _il.ILTypeDef$$get_Fields)(typeDef$$2)))), (0, _il.mkILMethods)((0, _List.filter)(function predicate$$7(md$$3) {
      return !(0, _il.ILMethodDef$$get_IsStatic)(md$$3);
    }, (0, _il.ILMethodDefs$$get_AsList)((0, _il.ILTypeDef$$get_Methods)(typeDef$$2)))), (0, _il.mkILProperties)((0, _List.filter)(function predicate$$8(pd$$2) {
      return !PrintIL$$$isStaticILProperty(pd$$2);
    }, (0, _il.ILPropertyDefs$$get_AsList)((0, _il.ILTypeDef$$get_Properties)(typeDef$$2)))), (0, _il.mkILEvents)((0, _List.filter)(function predicate$$9(ed$$1) {
      return !PrintIL$$$isStaticILEvent(ed$$1);
    }, (0, _il.ILEventDefs$$get_AsList)((0, _il.ILTypeDef$$get_Events)(typeDef$$2))))]);
    const body$$2 = (0, _List.append)(bodyInstance, bodyStatic);
    const body$$3 = PrintUtilities$$$applyMaxMembers(denv$$12.maxMembers, body$$2);
    const types = (0, _List.map)(function mapping$$12(typeDef$$3) {
      return PrintIL$$$layoutILNestedClassDef(denv$$12, typeDef$$3);
    }, (0, _List.sortBy)(function projection$$4(t$$6) {
      return PrintUtilities$$$adjustILName((0, _il.ILTypeDef$$get_Name)(t$$6));
    }, (0, _List.filter)(PrintIL$$$isPublicILTypeDef, (0, _il.ILTypeDefs$$get_AsList)((0, _il.ILTypeDef$$get_NestedTypes)(typeDef$$2))), {
      Compare: _Util.comparePrimitives
    }));
    const post$$1 = _layout.WordL$$$keywordEnd;
    return renderL(pre$$2, (0, _List.append)(baseT, (0, _List.append)(body$$3, types)), post$$1);
  } else if ((0, _il.ILTypeDef$$get_IsEnum)(typeDef$$2)) {
    const fldsL = PrintUtilities$$$applyMaxMembers(denv$$12.maxMembers, (0, _List.map)(PrintIL$$$layoutILEnumDef, (0, _List.filter)(PrintIL$$$isShowEnumField, (0, _il.ILFieldDefs$$get_AsList)((0, _il.ILTypeDef$$get_Fields)(typeDef$$2)))));
    return renderL(null, fldsL, _layout.emptyL);
  } else {
    let rhs;
    const matchValue$$13 = (0, _List.filter)(function predicate$$10(m$$12) {
      return (0, _il.ILMethodDef$$get_Name)(m$$12) === "Invoke";
    }, (0, _il.ILMethodDefs$$get_AsList)((0, _il.ILTypeDef$$get_Methods)(typeDef$$2)));

    if (matchValue$$13.tail != null) {
      const m$$13 = matchValue$$13.head;
      rhs = PrintIL$$$layoutILCallingSignature(denv$$12, ilTyparSubst$$10, null, (0, _il.ILMethodDef$$get_CallingSignature)(m$$13));
    } else {
      rhs = PrintUtilities$$$comment("`Invoke` method could not be found");
    }

    return (0, _layout.op_HatHat)(_layout.WordL$$$keywordDelegate, (0, _layout.op_HatHat)(_layout.WordL$$$keywordOf, rhs));
  }
}

function PrintIL$$$layoutILNestedClassDef(denv$$13, typeDef$$4) {
  const name$$5 = PrintUtilities$$$adjustILName((0, _il.ILTypeDef$$get_Name)(typeDef$$4));
  const nameL$$4 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagClass)(name$$5));
  const ilTyparSubst$$11 = PrintIL$$$layoutILGenericParameterDefs((0, _il.ILTypeDef$$get_GenericParams)(typeDef$$4));
  const paramsL = PrintIL$$$paramsL(PrintIL$$$pruneParms((0, _il.ILTypeDef$$get_Name)(typeDef$$4), ilTyparSubst$$11));

  if (denv$$13.suppressNestedTypes) {
    return (0, _layout.op_HatHat)(_layout.WordL$$$keywordNested, (0, _layout.op_HatHat)(_layout.WordL$$$keywordType, (0, _layout.op_HatHat)(nameL$$4, paramsL)));
  } else {
    const pre$$3 = (0, _layout.op_HatHat)(_layout.WordL$$$keywordNested, (0, _layout.op_HatHat)(_layout.WordL$$$keywordType, (0, _layout.op_HatHat)(nameL$$4, paramsL)));
    const body$$4 = PrintIL$$$layoutILTypeDef(denv$$13, typeDef$$4);
    return (0, _layout.op_AtAtMinusMinus)((0, _layout.op_HatHat)(pre$$3, _layout.WordL$$$equals), body$$4);
  }
}

function PrintTypes$$$layoutConst(g$$1, ty$$7, c$$5) {
  var s$$8;
  let str$$1;

  switch (c$$5.tag) {
    case 1:
      {
        const x$$24 = c$$5.fields[0] | 0;
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)(x$$24.toString() + "y");
        break;
      }

    case 2:
      {
        const x$$25 = c$$5.fields[0];
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)(x$$25.toString() + "uy");
        break;
      }

    case 3:
      {
        const x$$26 = c$$5.fields[0] | 0;
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Util.int16ToString)(x$$26) + "s");
        break;
      }

    case 4:
      {
        const x$$27 = c$$5.fields[0];
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)(x$$27.toString() + "us");
        break;
      }

    case 5:
      {
        const x$$28 = c$$5.fields[0] | 0;
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Util.int32ToString)(x$$28));
        break;
      }

    case 6:
      {
        const x$$29 = c$$5.fields[0];
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)(x$$29.toString() + "u");
        break;
      }

    case 7:
      {
        const x$$30 = c$$5.fields[0];
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Long.toString)(x$$30) + "L");
        break;
      }

    case 8:
      {
        const x$$31 = c$$5.fields[0];
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Long.toString)(x$$31) + "UL");
        break;
      }

    case 9:
      {
        const x$$32 = c$$5.fields[0];
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Long.toString)(x$$32) + "n");
        break;
      }

    case 10:
      {
        const x$$33 = c$$5.fields[0];
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Long.toString)(x$$33) + "un");
        break;
      }

    case 11:
      {
        const d$$2 = c$$5.fields[0];
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((s$$8 = d$$2.toString(), (0, _Seq.forAll)(function (c$$6) {
          return (0, _Char.isDigit)(c$$6) ? true : c$$6 === "-";
        }, s$$8.split("")) ? s$$8 + ".0" : s$$8) + "f");
        break;
      }

    case 12:
      {
        const d$$3 = c$$5.fields[0];
        const s$$9 = d$$3.toString();
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Seq.forAll)(function (c$$7) {
          return (0, _Char.isDigit)(c$$7) ? true : c$$7 === "-";
        }, s$$9.split("")) ? s$$9 + ".0" : s$$9);
        break;
      }

    case 13:
      {
        const c$$8 = c$$5.fields[0];
        str$$1 = (0, _layout.TaggedTextOps$$$tagStringLiteral)("'" + c$$8 + "'");
        break;
      }

    case 14:
      {
        const bs = c$$5.fields[0];
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)("\"" + bs + "\"");
        break;
      }

    case 16:
      {
        str$$1 = (0, _layout.TaggedTextOps$$$tagPunctuation)("()");
        break;
      }

    case 15:
      {
        const bs$$1 = c$$5.fields[0];
        str$$1 = (0, _layout.TaggedTextOps$$$tagNumericLiteral)(bs$$1.toString() + "M");
        break;
      }

    case 17:
      {
        str$$1 = (0, _layout.TaggedTextOps$$$tagKeyword)((0, _TastOps.isRefTy)(g$$1, ty$$7) ? "null" : "default");
        break;
      }

    default:
      {
        const x$$23 = c$$5.fields[0];
        str$$1 = x$$23 ? _layout.TaggedTextOps$002ELiterals$$$keywordTrue : _layout.TaggedTextOps$002ELiterals$$$keywordFalse;
      }
  }

  return (0, _layout.wordL)(str$$1);
}

function PrintTypes$$$layoutAccessibility(denv$$14, accessibility, itemL) {
  const isInternalCompPath = function isInternalCompPath(x$$34) {
    var $target$$57;

    if (x$$34.fields[0].tag === 0) {
      if (x$$34.fields[1].tail == null) {
        $target$$57 = 0;
      } else {
        $target$$57 = 1;
      }
    } else {
      $target$$57 = 1;
    }

    switch ($target$$57) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return false;
        }
    }
  };

  const $007CPublic$007CInternal$007CPrivate$007C = function $007CPublic$007CInternal$007CPrivate$007C(_arg1$$3) {
    const p$$4 = _arg1$$3.fields[0];

    if (p$$4.tail == null) {
      return new _Option.Choice(0, "Choice1Of3", null);
    } else if ((0, _List.forAll)(isInternalCompPath, p$$4)) {
      return new _Option.Choice(1, "Choice2Of3", null);
    } else {
      return new _Option.Choice(2, "Choice3Of3", null);
    }
  };

  const matchValue$$14 = [denv$$14.contextAccessibility, accessibility];
  var $target$$58;
  const activePatternResult38583 = $007CPublic$007CInternal$007CPrivate$007C(matchValue$$14[0]);

  if (activePatternResult38583.tag === 0) {
    const activePatternResult38584 = $007CPublic$007CInternal$007CPrivate$007C(matchValue$$14[1]);

    if (activePatternResult38584.tag === 1) {
      $target$$58 = 0;
    } else if (activePatternResult38584.tag === 2) {
      $target$$58 = 1;
    } else {
      $target$$58 = 3;
    }
  } else if (activePatternResult38583.tag === 1) {
    if ($007CPublic$007CInternal$007CPrivate$007C(matchValue$$14[1]).tag === 2) {
      $target$$58 = 2;
    } else {
      $target$$58 = 3;
    }
  } else {
    $target$$58 = 3;
  }

  switch ($target$$58) {
    case 0:
      {
        return (0, _layout.op_PlusPlus)(_layout.WordL$$$keywordInternal, itemL);
      }

    case 1:
      {
        return (0, _layout.op_PlusPlus)(_layout.WordL$$$keywordPrivate, itemL);
      }

    case 2:
      {
        return (0, _layout.op_PlusPlus)(_layout.WordL$$$keywordPrivate, itemL);
      }

    case 3:
      {
        return itemL;
      }
  }
}

function PrintTypes$$$layoutTyconRef(denv$$15, tycon) {
  return PrintUtilities$$$layoutTyconRefImpl(false, denv$$15, tycon);
}

function PrintTypes$$$layoutMemberFlags(memFlags) {
  const stat = (memFlags.IsInstance ? true : (0, _Util.equals)(memFlags.MemberKind, new _ast.MemberKind(1, "Constructor"))) ? _layout.emptyL : _layout.WordL$$$keywordStatic;
  const stat$$1 = memFlags.IsDispatchSlot ? (0, _layout.op_PlusPlus)(stat, _layout.WordL$$$keywordAbstract) : memFlags.IsOverrideOrExplicitImpl ? (0, _layout.op_PlusPlus)(stat, _layout.WordL$$$keywordOverride) : stat;
  const stat$$2 = memFlags.IsOverrideOrExplicitImpl ? stat$$1 : memFlags.MemberKind.tag === 1 ? stat$$1 : memFlags.MemberKind.tag === 5 ? stat$$1 : memFlags.MemberKind.tag === 2 ? (0, _layout.op_PlusPlus)(stat$$1, _layout.WordL$$$keywordMember) : memFlags.MemberKind.tag === 3 ? (0, _layout.op_PlusPlus)(stat$$1, _layout.WordL$$$keywordMember) : memFlags.MemberKind.tag === 4 ? (0, _layout.op_PlusPlus)(stat$$1, _layout.WordL$$$keywordMember) : stat$$1;
  return stat$$2;
}

function PrintTypes$$$layoutAttribArg(denv$$16, arg) {
  var $target$$59, c$$9, ty$$8, _elemTy, args$$2, ty$$9;

  if (arg.tag === 0) {
    $target$$59 = 0;
    c$$9 = arg.fields[0];
    ty$$8 = arg.fields[2];
  } else if (arg.tag === 11) {
    if (arg.fields[0].tag === 3) {
      if (arg.fields[1].tail != null) {
        if (arg.fields[1].tail.tail == null) {
          $target$$59 = 1;
          _elemTy = arg.fields[1].head;
          args$$2 = arg.fields[2];
        } else {
          const activePatternResult38605 = (0, _TastOps.$007CTypeOfExpr$007C_$007C)(denv$$16.g, arg);

          if (activePatternResult38605 != null) {
            $target$$59 = 2;
            ty$$9 = activePatternResult38605;
          } else {
            $target$$59 = 3;
          }
        }
      } else {
        const activePatternResult38606 = (0, _TastOps.$007CTypeOfExpr$007C_$007C)(denv$$16.g, arg);

        if (activePatternResult38606 != null) {
          $target$$59 = 2;
          ty$$9 = activePatternResult38606;
        } else {
          $target$$59 = 3;
        }
      }
    } else {
      const activePatternResult38607 = (0, _TastOps.$007CTypeOfExpr$007C_$007C)(denv$$16.g, arg);

      if (activePatternResult38607 != null) {
        $target$$59 = 2;
        ty$$9 = activePatternResult38607;
      } else {
        $target$$59 = 3;
      }
    }
  } else {
    const activePatternResult38608 = (0, _TastOps.$007CTypeOfExpr$007C_$007C)(denv$$16.g, arg);

    if (activePatternResult38608 != null) {
      $target$$59 = 2;
      ty$$9 = activePatternResult38608;
    } else {
      $target$$59 = 3;
    }
  }

  switch ($target$$59) {
    case 0:
      {
        if ((0, _TastOps.isEnumTy)(denv$$16.g, ty$$8)) {
          return (0, _layout.op_HatHat)(_layout.WordL$$$keywordEnum, (0, _layout.op_HatHat)(PrintUtilities$$$angleL(PrintTypes$$$layoutType(denv$$16, ty$$8)), (0, _layout.bracketL)(PrintTypes$$$layoutConst(denv$$16.g, ty$$8, c$$9))));
        } else {
          return PrintTypes$$$layoutConst(denv$$16.g, ty$$8, c$$9);
        }
      }

    case 1:
      {
        return (0, _layout.op_HatHat)(_layout.LeftL$$$leftBracketBar, (0, _layout.op_HatHat)((0, _layout.semiListL)((0, _List.map)(function (arg$$1) {
          return PrintTypes$$$layoutAttribArg(denv$$16, arg$$1);
        }, args$$2)), _layout.RightL$$$rightBracketBar));
      }

    case 2:
      {
        return (0, _layout.op_HatHat)(_layout.LeftL$$$keywordTypeof, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("<")), (0, _layout.op_HatHat)(PrintTypes$$$layoutType(denv$$16, ty$$9), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagPunctuation)(">")))));
      }

    case 3:
      {
        const activePatternResult38603 = (0, _TastOps.$007CTypeDefOfExpr$007C_$007C)(denv$$16.g, arg);

        if (activePatternResult38603 != null) {
          const ty$$10 = activePatternResult38603;
          return (0, _layout.op_HatHat)(_layout.LeftL$$$keywordTypedefof, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("<")), (0, _layout.op_HatHat)(PrintTypes$$$layoutType(denv$$16, ty$$10), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagPunctuation)(">")))));
        } else {
          var $target$$60, arg2, tgTy, arg1, arg2$$1;

          if (arg.tag === 11) {
            if (arg.fields[0].tag === 24) {
              if (arg.fields[1].tail != null) {
                if (arg.fields[1].tail.tail != null) {
                  if (arg.fields[1].tail.tail.tail == null) {
                    if (arg.fields[2].tail != null) {
                      if (arg.fields[2].tail.tail == null) {
                        $target$$60 = 0;
                        arg2 = arg.fields[2].head;
                        tgTy = arg.fields[1].head;
                      } else {
                        const activePatternResult38595 = (0, _TastOps.$007CAttribBitwiseOrExpr$007C_$007C)(denv$$16.g, arg);

                        if (activePatternResult38595 != null) {
                          $target$$60 = 1;
                          arg1 = activePatternResult38595[0];
                          arg2$$1 = activePatternResult38595[1];
                        } else {
                          $target$$60 = 2;
                        }
                      }
                    } else {
                      const activePatternResult38596 = (0, _TastOps.$007CAttribBitwiseOrExpr$007C_$007C)(denv$$16.g, arg);

                      if (activePatternResult38596 != null) {
                        $target$$60 = 1;
                        arg1 = activePatternResult38596[0];
                        arg2$$1 = activePatternResult38596[1];
                      } else {
                        $target$$60 = 2;
                      }
                    }
                  } else {
                    const activePatternResult38597 = (0, _TastOps.$007CAttribBitwiseOrExpr$007C_$007C)(denv$$16.g, arg);

                    if (activePatternResult38597 != null) {
                      $target$$60 = 1;
                      arg1 = activePatternResult38597[0];
                      arg2$$1 = activePatternResult38597[1];
                    } else {
                      $target$$60 = 2;
                    }
                  }
                } else {
                  const activePatternResult38598 = (0, _TastOps.$007CAttribBitwiseOrExpr$007C_$007C)(denv$$16.g, arg);

                  if (activePatternResult38598 != null) {
                    $target$$60 = 1;
                    arg1 = activePatternResult38598[0];
                    arg2$$1 = activePatternResult38598[1];
                  } else {
                    $target$$60 = 2;
                  }
                }
              } else {
                const activePatternResult38599 = (0, _TastOps.$007CAttribBitwiseOrExpr$007C_$007C)(denv$$16.g, arg);

                if (activePatternResult38599 != null) {
                  $target$$60 = 1;
                  arg1 = activePatternResult38599[0];
                  arg2$$1 = activePatternResult38599[1];
                } else {
                  $target$$60 = 2;
                }
              }
            } else {
              const activePatternResult38600 = (0, _TastOps.$007CAttribBitwiseOrExpr$007C_$007C)(denv$$16.g, arg);

              if (activePatternResult38600 != null) {
                $target$$60 = 1;
                arg1 = activePatternResult38600[0];
                arg2$$1 = activePatternResult38600[1];
              } else {
                $target$$60 = 2;
              }
            }
          } else {
            const activePatternResult38601 = (0, _TastOps.$007CAttribBitwiseOrExpr$007C_$007C)(denv$$16.g, arg);

            if (activePatternResult38601 != null) {
              $target$$60 = 1;
              arg1 = activePatternResult38601[0];
              arg2$$1 = activePatternResult38601[1];
            } else {
              $target$$60 = 2;
            }
          }

          switch ($target$$60) {
            case 0:
              {
                return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagPunctuation)("(")), (0, _layout.op_HatHat)(PrintTypes$$$layoutAttribArg(denv$$16, arg2), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)(":>")), (0, _layout.op_HatHat)(PrintTypes$$$layoutType(denv$$16, tgTy), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagPunctuation)(")"))))));
              }

            case 1:
              {
                return (0, _layout.op_HatHat)(PrintTypes$$$layoutAttribArg(denv$$16, arg1), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("|||")), PrintTypes$$$layoutAttribArg(denv$$16, arg2$$1)));
              }

            case 2:
              {
                const activePatternResult38593 = (0, _TastOps.$007CEnumExpr$007C_$007C)(denv$$16.g, arg);

                if (activePatternResult38593 != null) {
                  const arg1$$1 = activePatternResult38593;
                  return (0, _layout.op_PlusPlus)(_layout.WordL$$$keywordEnum, (0, _layout.bracketL)(PrintTypes$$$layoutAttribArg(denv$$16, arg1$$1)));
                } else {
                  return PrintUtilities$$$comment("(* unsupported attribute argument *)");
                }
              }
          }
        }
      }
  }
}

function PrintTypes$$$layoutAttribArgs(denv$$17, args$$3) {
  return (0, _layout.sepListL)((0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagPunctuation)(",")), (0, _List.map)(function (_arg1$$4) {
    const e1 = _arg1$$4.fields[0];
    return PrintTypes$$$layoutAttribArg(denv$$17, e1);
  }, args$$3));
}

function PrintTypes$$$layoutAttrib(denv$$18, _arg1$$5) {
  const k = _arg1$$5.fields[1];
  const args$$4 = _arg1$$5.fields[2];
  const _props = _arg1$$5.fields[3];
  const argsL$$1 = (0, _layout.bracketL)(PrintTypes$$$layoutAttribArgs(denv$$18, args$$4));

  if (k.tag === 1) {
    const vref = k.fields[0];
    const patternInput$$3 = (0, _TastOps.GetTypeOfMemberInMemberForm)(denv$$18.g, vref);
    const rty$$1 = (0, _TastOps.GetFSharpViewOfReturnType)(denv$$18.g, patternInput$$3[2]);
    const tcref$$2 = (0, _TastOps.tcrefOfAppTy)(denv$$18.g, rty$$1);
    return (0, _layout.op_PlusPlus)(PrintTypes$$$layoutTyconRef(denv$$18, tcref$$2), argsL$$1);
  } else {
    const ilMethRef$$2 = k.fields[0];
    let trimmedName;
    const name$$6 = (0, _il.ILTypeRef$$get_Name)((0, _il.ILMethodRef$$get_DeclaringTypeRef)(ilMethRef$$2));
    trimmedName = (0, _String.endsWith)(name$$6, "Attribute", 4) ? (0, _illib.String$$$dropSuffix)(name$$6, "Attribute") : name$$6;
    const tref$$2 = (0, _il.ILMethodRef$$get_DeclaringTypeRef)(ilMethRef$$2);
    const tref$$3 = (0, _il.ILTypeRef$$$Create$$113F1D6)((0, _il.ILTypeRef$$get_Scope)(tref$$2), (0, _il.ILTypeRef$$get_Enclosing)(tref$$2), trimmedName);
    return (0, _layout.op_PlusPlus)(PrintIL$$$layoutILTypeRef(denv$$18, tref$$3), argsL$$1);
  }
}

function PrintTypes$$$layoutILAttribElement(denv$$19, arg$$2) {
  if (arg$$2.tag === 1) {
    if (arg$$2.fields[0]) {
      return _layout.WordL$$$keywordTrue;
    } else {
      return _layout.WordL$$$keywordFalse;
    }
  } else if (arg$$2.tag === 2) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagStringLiteral)("'" + arg$$2.fields[0] + "'"));
  } else if (arg$$2.tag === 3) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)(arg$$2.fields[0].toString() + "y"));
  } else if (arg$$2.tag === 4) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Util.int16ToString)(arg$$2.fields[0]) + "s"));
  } else if (arg$$2.tag === 5) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Util.int32ToString)(arg$$2.fields[0])));
  } else if (arg$$2.tag === 6) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Long.toString)(arg$$2.fields[0]) + "L"));
  } else if (arg$$2.tag === 7) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)(arg$$2.fields[0].toString() + "uy"));
  } else if (arg$$2.tag === 8) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)(arg$$2.fields[0].toString() + "us"));
  } else if (arg$$2.tag === 9) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)(arg$$2.fields[0].toString() + "u"));
  } else if (arg$$2.tag === 10) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _Long.toString)(arg$$2.fields[0]) + "UL"));
  } else if (arg$$2.tag === 11) {
    let str$$2;
    const s$$10 = arg$$2.fields[0].toString();
    str$$2 = ((0, _Seq.forAll)(function (c$$10) {
      return (0, _Char.isDigit)(c$$10) ? true : c$$10 === "-";
    }, s$$10.split("")) ? s$$10 + ".0" : s$$10) + "f";
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)(str$$2));
  } else if (arg$$2.tag === 12) {
    let str$$3;
    const s$$11 = arg$$2.fields[0].toString();
    str$$3 = (0, _Seq.forAll)(function (c$$11) {
      return (0, _Char.isDigit)(c$$11) ? true : c$$11 === "-";
    }, s$$11.split("")) ? s$$11 + ".0" : s$$11;
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)(str$$3));
  } else if (arg$$2.tag === 13) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("null"));
  } else if (arg$$2.tag === 16) {
    return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagPunctuation)("[|")), (0, _layout.op_HatHat)((0, _layout.semiListL)((0, _List.map)(function (arg$$3) {
      return PrintTypes$$$layoutILAttribElement(denv$$19, arg$$3);
    }, arg$$2.fields[1])), _layout.RightL$$$rightBracketBar));
  } else if (arg$$2.tag === 14) {
    if (arg$$2.fields[0] == null) {
      return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(""));
    } else {
      const ty$$11 = arg$$2.fields[0];
      return (0, _layout.op_HatHat)(_layout.LeftL$$$keywordTypeof, (0, _layout.op_HatHat)(_layout.SepL$$$leftAngle, (0, _layout.op_HatHat)(PrintIL$$$layoutILType(denv$$19, (0, _Types.L)(), ty$$11), _layout.RightL$$$rightAngle)));
    }
  } else if (arg$$2.tag === 15) {
    if (arg$$2.fields[0] == null) {
      return _layout.emptyL;
    } else {
      const ty$$12 = arg$$2.fields[0];
      return (0, _layout.op_HatHat)(_layout.LeftL$$$keywordTypedefof, (0, _layout.op_HatHat)(_layout.SepL$$$leftAngle, (0, _layout.op_HatHat)(PrintIL$$$layoutILTypeRef(denv$$19, ty$$12), _layout.RightL$$$rightAngle)));
    }
  } else if (arg$$2.fields[0] == null) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagStringLiteral)(""));
  } else {
    const x$$36 = arg$$2.fields[0];
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagStringLiteral)("\"" + x$$36 + "\""));
  }
}

function PrintTypes$$$layoutILAttrib(denv$$20, ty$$13, args$$5) {
  const argsL$$2 = (0, _layout.bracketL)((0, _layout.sepListL)((0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagPunctuation)(",")), (0, _List.map)(function (arg$$4) {
    return PrintTypes$$$layoutILAttribElement(denv$$20, arg$$4);
  }, args$$5)));
  return (0, _layout.op_PlusPlus)(PrintIL$$$layoutILType(denv$$20, (0, _Types.L)(), ty$$13), argsL$$2);
}

function PrintTypes$$$layoutAttribs(denv$$21, ty$$14, kind, attrs, restL) {
  if (denv$$21.showAttributes) {
    const attrs$$1 = (0, _List.filter)(function predicate$$11($arg$$28) {
      return !(0, _TastOps.IsMatchingFSharpAttributeOpt)(denv$$21.g, (0, _TcGlobals.TcGlobals$$get_attrib_DllImportAttribute)(denv$$21.g), $arg$$28);
    }, attrs);
    const attrs$$2 = (0, _List.filter)(function predicate$$12($arg$$29) {
      return !(0, _TastOps.IsMatchingFSharpAttributeOpt)(denv$$21.g, (0, _TcGlobals.TcGlobals$$get_attrib_ContextStaticAttribute)(denv$$21.g), $arg$$29);
    }, attrs$$1);
    const attrs$$3 = (0, _List.filter)(function predicate$$13($arg$$30) {
      return !(0, _TastOps.IsMatchingFSharpAttributeOpt)(denv$$21.g, (0, _TcGlobals.TcGlobals$$get_attrib_ThreadStaticAttribute)(denv$$21.g), $arg$$30);
    }, attrs$$2);
    const attrs$$4 = (0, _List.filter)(function predicate$$14($arg$$31) {
      return !(0, _TastOps.IsMatchingFSharpAttribute)(denv$$21.g, (0, _TcGlobals.TcGlobals$$get_attrib_EntryPointAttribute)(denv$$21.g), $arg$$31);
    }, attrs$$3);
    const attrs$$5 = (0, _List.filter)(function predicate$$15($arg$$32) {
      return !(0, _TastOps.IsMatchingFSharpAttributeOpt)(denv$$21.g, (0, _TcGlobals.TcGlobals$$get_attrib_MarshalAsAttribute)(denv$$21.g), $arg$$32);
    }, attrs$$4);
    const attrs$$6 = (0, _List.filter)(function predicate$$16($arg$$33) {
      return !(0, _TastOps.IsMatchingFSharpAttribute)(denv$$21.g, (0, _TcGlobals.TcGlobals$$get_attrib_ReflectedDefinitionAttribute)(denv$$21.g), $arg$$33);
    }, attrs$$5);
    const attrs$$7 = (0, _List.filter)(function predicate$$17($arg$$34) {
      return !(0, _TastOps.IsMatchingFSharpAttribute)(denv$$21.g, (0, _TcGlobals.TcGlobals$$get_attrib_StructLayoutAttribute)(denv$$21.g), $arg$$34);
    }, attrs$$6);
    const attrs$$8 = (0, _List.filter)(function predicate$$18($arg$$35) {
      return !(0, _TastOps.IsMatchingFSharpAttribute)(denv$$21.g, (0, _TcGlobals.TcGlobals$$get_attrib_AutoSerializableAttribute)(denv$$21.g), $arg$$35);
    }, attrs$$7);

    if (attrs$$8.tail == null) {
      return restL;
    } else {
      return (0, _layout.op_AtAt)(PrintUtilities$$$squareAngleL((0, _layout.sepListL)((0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagPunctuation)(";")), (0, _List.map)(function (arg10$0040$$24) {
        return PrintTypes$$$layoutAttrib(denv$$21, arg10$0040$$24);
      }, attrs$$8))), restL);
    }
  } else if ((0, _TastOps.isStructRecordOrUnionTyconTy)(denv$$21.g, ty$$14) ? true : ((0, _TastOps.isUnionTy)(denv$$21.g, ty$$14) ? true : (0, _TastOps.isRecdTy)(denv$$21.g, ty$$14)) ? (0, _TastOps.HasFSharpAttribute)(denv$$21.g, (0, _TcGlobals.TcGlobals$$get_attrib_StructAttribute)(denv$$21.g), attrs) : false) {
    return (0, _layout.op_AtAt)(PrintUtilities$$$squareAngleL((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagClass)("Struct"))), restL);
  } else {
    if (kind.tag === 1) {
      return (0, _layout.op_AtAt)(PrintUtilities$$$squareAngleL((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagClass)("Measure"))), restL);
    } else {
      return restL;
    }
  }
}

function PrintTypes$$$layoutTyparAttribs(denv$$22, kind$$1, attrs$$9, restL$$1) {
  const matchValue$$16 = [attrs$$9, kind$$1];
  var $target$$61;

  if (matchValue$$16[0].tail == null) {
    if (matchValue$$16[1].tag === 0) {
      $target$$61 = 0;
    } else {
      $target$$61 = 1;
    }
  } else {
    $target$$61 = 1;
  }

  switch ($target$$61) {
    case 0:
      {
        return restL$$1;
      }

    case 1:
      {
        return (0, _layout.op_HatHat)(PrintUtilities$$$squareAngleL((0, _layout.sepListL)((0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagPunctuation)(";")), (0, _List.append)(kind$$1.tag === 1 ? (0, _Types.L)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("Measure")), (0, _Types.L)()) : (0, _Types.L)(), (0, _List.map)(function (arg10$0040$$25) {
          return PrintTypes$$$layoutAttrib(denv$$22, arg10$0040$$25);
        }, attrs$$9)))), restL$$1);
      }
  }
}

function PrintTypes$$$layoutTyparRef(denv$$23, typar) {
  return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagTypeParameter)((0, _String.toText)((0, _String.printf)("%s%s%s"))(denv$$23.showConstraintTyparAnnotations ? (0, _TastOps.prefixOfStaticReq)((0, _tast.Typar$$get_StaticReq)(typar)) : "'")(denv$$23.showImperativeTyparAnnotations ? (0, _TastOps.prefixOfRigidTypar)(typar) : "")((0, _tast.Typar$$get_DisplayName)(typar))));
}

function PrintTypes$$$layoutTyparRefWithInfo(denv$$24, env, typar$$1) {
  const varL = PrintTypes$$$layoutTyparRef(denv$$24, typar$$1);
  const varL$$1 = denv$$24.showAttributes ? PrintTypes$$$layoutTyparAttribs(denv$$24, (0, _tast.Typar$$get_Kind)(typar$$1), (0, _tast.Typar$$get_Attribs)(typar$$1), varL) : varL;
  const matchValue$$17 = (0, _zmap.ZmapModule$$$tryFind)(typar$$1, env.inplaceConstraints);

  if (matchValue$$17 != null) {
    const typarConstraintTy = matchValue$$17;

    if ((0, _zset.ZsetModule$$$contains)(typar$$1, env.singletons)) {
      return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagPunctuation)("#")), PrintTypes$$$layoutTypeWithInfo(denv$$24, env, typarConstraintTy));
    } else {
      return (0, _layout.bracketL)((0, _layout.op_HatHat)(varL$$1, (0, _layout.op_HatHat)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagPunctuation)(":>")), PrintTypes$$$layoutTypeWithInfo(denv$$24, env, typarConstraintTy))));
    }
  } else {
    return varL$$1;
  }
}

function PrintTypes$$$layoutConstraintsWithInfo(denv$$25, env$$1, cxs) {
  const cxs$$1 = (0, _lib.ListSet$$$setify)(function f$$8(tupledArg$$3, tupledArg$$4) {
    const matchValue$$18 = [tupledArg$$3[1], tupledArg$$4[1]];
    var $target$$62, traitInfo1, traitInfo2;

    if (matchValue$$18[0].tag === 3) {
      if (matchValue$$18[1].tag === 3) {
        $target$$62 = 0;
        traitInfo1 = matchValue$$18[0].fields[0];
        traitInfo2 = matchValue$$18[1].fields[0];
      } else {
        $target$$62 = 1;
      }
    } else {
      $target$$62 = 1;
    }

    switch ($target$$62) {
      case 0:
        {
          return (0, _TastOps.traitsAEquiv)(denv$$25.g, (0, _TastOps.TypeEquivEnv$$$get_Empty)(), traitInfo1, traitInfo2);
        }

      case 1:
        {
          return false;
        }
    }
  }, cxs);
  const cxsL = (0, _List.collect)(function (tupledArg$$5) {
    return PrintTypes$$$layoutConstraintWithInfo(denv$$25, env$$1, tupledArg$$5[0], tupledArg$$5[1]);
  }, cxs$$1);

  if (cxsL.tail == null) {
    return _layout.emptyL;
  } else if (denv$$25.abbreviateAdditionalConstraints) {
    return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("when")), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("<constraints>")));
  } else if (denv$$25.shortConstraints) {
    return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagPunctuation)("(")), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("requires")), (0, _layout.op_HatHat)((0, _layout.sepListL)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("and")), cxsL), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagPunctuation)(")")))));
  } else {
    return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("when")), (0, _layout.sepListL)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("and")), cxsL));
  }
}

function PrintTypes$$$layoutConstraintWithInfo(denv$$26, env$$2, tp$$1, tpc$$1) {
  const longConstraintPrefix = function longConstraintPrefix(l$$3) {
    return (0, _layout.op_HatHat)(PrintTypes$$$layoutTyparRefWithInfo(denv$$26, env$$2, tp$$1), (0, _layout.op_HatHat)(_layout.WordL$$$colon, l$$3));
  };

  switch (tpc$$1.tag) {
    case 3:
      {
        const traitInfo = tpc$$1.fields[0];
        return (0, _Types.L)(PrintTypes$$$layoutTraitWithInfo(denv$$26, env$$2, traitInfo), (0, _Types.L)());
      }

    case 1:
      {
        const ty$$15 = tpc$$1.fields[1];

        if (denv$$26.showTyparDefaultConstraints) {
          return (0, _Types.L)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("default")), (0, _layout.op_HatHat)(PrintTypes$$$layoutTyparRefWithInfo(denv$$26, env$$2, tp$$1), (0, _layout.op_HatHat)(_layout.WordL$$$colon, PrintTypes$$$layoutTypeWithInfo(denv$$26, env$$2, ty$$15)))), (0, _Types.L)());
        } else {
          return (0, _Types.L)();
        }
      }

    case 8:
      {
        const ty$$16 = tpc$$1.fields[0];

        if (denv$$26.shortConstraints) {
          return (0, _Types.L)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("enum")), (0, _Types.L)());
        } else {
          return (0, _Types.L)(longConstraintPrefix(PrintTypes$$$layoutTypeAppWithInfoAndPrec(denv$$26, env$$2, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("enum")), 2, true, (0, _Types.L)(ty$$16, (0, _Types.L)()))), (0, _Types.L)());
        }
      }

    case 9:
      {
        if (denv$$26.shortConstraints) {
          return (0, _Types.L)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("comparison")), (0, _Types.L)());
        } else {
          return (0, _Types.L)(longConstraintPrefix((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("comparison"))), (0, _Types.L)());
        }
      }

    case 10:
      {
        if (denv$$26.shortConstraints) {
          return (0, _Types.L)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("equality")), (0, _Types.L)());
        } else {
          return (0, _Types.L)(longConstraintPrefix((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("equality"))), (0, _Types.L)());
        }
      }

    case 11:
      {
        const bty = tpc$$1.fields[1];
        const aty = tpc$$1.fields[0];

        if (denv$$26.shortConstraints) {
          return (0, _Types.L)(_layout.WordL$$$keywordDelegate, (0, _Types.L)());
        } else {
          return (0, _Types.L)(longConstraintPrefix(PrintTypes$$$layoutTypeAppWithInfoAndPrec(denv$$26, env$$2, _layout.WordL$$$keywordDelegate, 2, true, (0, _Types.L)(aty, (0, _Types.L)(bty, (0, _Types.L)())))), (0, _Types.L)());
        }
      }

    case 2:
      {
        return (0, _Types.L)(longConstraintPrefix((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("null"))), (0, _Types.L)());
      }

    case 4:
      {
        if (denv$$26.shortConstraints) {
          return (0, _Types.L)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("value type")), (0, _Types.L)());
        } else {
          return (0, _Types.L)(longConstraintPrefix(_layout.WordL$$$keywordStruct), (0, _Types.L)());
        }
      }

    case 12:
      {
        if (denv$$26.shortConstraints) {
          return (0, _Types.L)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("unmanaged")), (0, _Types.L)());
        } else {
          return (0, _Types.L)(longConstraintPrefix((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("unmanaged"))), (0, _Types.L)());
        }
      }

    case 5:
      {
        if (denv$$26.shortConstraints) {
          return (0, _Types.L)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("reference type")), (0, _Types.L)());
        } else {
          return (0, _Types.L)(longConstraintPrefix((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("not")), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("struct")))), (0, _Types.L)());
        }
      }

    case 6:
      {
        const tys = tpc$$1.fields[0];
        return (0, _Types.L)(longConstraintPrefix((0, _layout.bracketL)((0, _layout.sepListL)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagPunctuation)("|")), (0, _List.map)(function (ty$$17) {
          return PrintTypes$$$layoutTypeWithInfo(denv$$26, env$$2, ty$$17);
        }, tys)))), (0, _Types.L)());
      }

    case 7:
      {
        if (denv$$26.shortConstraints) {
          return (0, _Types.L)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("default")), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("constructor"))), (0, _Types.L)());
        } else {
          return (0, _Types.L)(longConstraintPrefix((0, _layout.bracketL)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("new")), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)(":")), (0, _layout.op_HatHat)(_layout.WordL$$$structUnit, (0, _layout.op_HatHat)(_layout.WordL$$$arrow, PrintTypes$$$layoutTyparRefWithInfo(denv$$26, env$$2, tp$$1))))))), (0, _Types.L)());
        }
      }

    default:
      {
        const tpct = tpc$$1.fields[0];
        return (0, _Types.L)((0, _layout.op_HatHat)(PrintTypes$$$layoutTyparRefWithInfo(denv$$26, env$$2, tp$$1), (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagOperator)(":>")), PrintTypes$$$layoutTypeWithInfo(denv$$26, env$$2, tpct))), (0, _Types.L)());
      }
  }
}

function PrintTypes$$$layoutTraitWithInfo(denv$$27, env$$3, _arg2$$2) {
  const tys$$1 = _arg2$$2.fields[0];
  const rty$$2 = _arg2$$2.fields[4];
  const nm$$4 = _arg2$$2.fields[1];
  const memFlags$$1 = _arg2$$2.fields[2];
  const argtys = _arg2$$2.fields[3];
  const nm$$5 = (0, _PrettyNaming.DemangleOperatorName)(nm$$4);

  if (denv$$27.shortConstraints) {
    return (0, _layout.op_HatHat)(_layout.WordL$$$keywordMember, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagMember)(nm$$5)));
  } else {
    const rty$$3 = (0, _TastOps.GetFSharpViewOfReturnType)(denv$$27.g, rty$$2);
    const stat$$3 = PrintTypes$$$layoutMemberFlags(memFlags$$1);
    const tys$$2 = (0, _lib.ListSet$$$setify)(function (arg10$0040$$26, arg20$0040$$8) {
      return (0, _TastOps.typeEquiv)(denv$$27.g, arg10$0040$$26, arg20$0040$$8);
    }, tys$$1);
    const tysL = tys$$2.tail != null ? tys$$2.tail.tail == null ? PrintTypes$$$layoutTypeWithInfo(denv$$27, env$$3, tys$$2.head) : (0, _layout.bracketL)(PrintTypes$$$layoutTypesWithInfoAndPrec(denv$$27, env$$3, 2, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("or")), tys$$2)) : (0, _layout.bracketL)(PrintTypes$$$layoutTypesWithInfoAndPrec(denv$$27, env$$3, 2, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("or")), tys$$2));
    return (0, _layout.op_HatHat)(tysL, (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)(":")), (0, _layout.bracketL)((0, _layout.op_HatHat)((0, _layout.op_PlusPlus)(stat$$3, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagMember)(nm$$5))), (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)(":")), (0, _layout.op_MinusMinusMinus)((0, _layout.op_MinusMinusMinus)(PrintTypes$$$layoutTypesWithInfoAndPrec(denv$$27, env$$3, 2, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("*")), argtys), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("->"))), PrintTypes$$$layoutTypeWithInfo(denv$$27, env$$3, rty$$3)))))));
  }
}

function PrintTypes$$$layoutMeasure(denv$$28, unt) {
  const sortVars = function sortVars(vs) {
    return (0, _List.sortBy)(function projection$$5(tupledArg$$6) {
      return (0, _tast.Typar$$get_DisplayName)(tupledArg$$6[0]);
    }, vs, {
      Compare: _Util.comparePrimitives
    });
  };

  const sortCons = function sortCons(cs) {
    return (0, _List.sortBy)(function projection$$6(tupledArg$$7) {
      return (0, _tast.EntityRef$$get_DisplayName)(tupledArg$$7[0]);
    }, cs, {
      Compare: _Util.comparePrimitives
    });
  };

  const patternInput$$4 = (0, _List.partition)(function predicate$$19(tupledArg$$8) {
    return (0, _rational.SignRational)(tupledArg$$8[1]) < 0;
  }, sortVars((0, _TastOps.ListMeasureVarOccsWithNonZeroExponents)(unt)));
  const patternInput$$5 = (0, _List.partition)(function predicate$$20(tupledArg$$9) {
    return (0, _rational.SignRational)(tupledArg$$9[1]) < 0;
  }, sortCons((0, _TastOps.ListMeasureConOccsWithNonZeroExponents)(denv$$28.g, false, unt)));

  const unparL = function unparL(uv) {
    return PrintTypes$$$layoutTyparRef(denv$$28, uv);
  };

  const unconL = function unconL(tc) {
    return PrintTypes$$$layoutTyconRef(denv$$28, tc);
  };

  const rationalL = function rationalL(e$$7) {
    return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)((0, _rational.RationalToString)(e$$7)));
  };

  const measureToPowerL = function measureToPowerL(x$$49, e$$8) {
    if ((0, _Util.equals)(e$$8, _rational.OneRational)) {
      return x$$49;
    } else {
      return (0, _layout.op_MinusMinus)((0, _layout.op_MinusMinus)(x$$49, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("^"))), rationalL(e$$8));
    }
  };

  const prefix = (0, _layout.spaceListL)((0, _List.append)((0, _List.map)(function (tupledArg$$10) {
    return measureToPowerL(unparL(tupledArg$$10[0]), tupledArg$$10[1]);
  }, patternInput$$4[1]), (0, _List.map)(function (tupledArg$$11) {
    return measureToPowerL(unconL(tupledArg$$11[0]), tupledArg$$11[1]);
  }, patternInput$$5[1])));
  const postfix = (0, _layout.spaceListL)((0, _List.append)((0, _List.map)(function (tupledArg$$12) {
    return measureToPowerL(unparL(tupledArg$$12[0]), (0, _rational.NegRational)(tupledArg$$12[1]));
  }, patternInput$$4[0]), (0, _List.map)(function (tupledArg$$13) {
    return measureToPowerL(unconL(tupledArg$$13[0]), (0, _rational.NegRational)(tupledArg$$13[1]));
  }, patternInput$$5[0])));
  const matchValue$$19 = [patternInput$$4[0], patternInput$$5[0]];
  var $target$$63;

  if (matchValue$$19[0].tail == null) {
    if (matchValue$$19[1].tail == null) {
      $target$$63 = 0;
    } else {
      $target$$63 = 1;
    }
  } else {
    $target$$63 = 1;
  }

  switch ($target$$63) {
    case 0:
      {
        const matchValue$$20 = [patternInput$$4[1], patternInput$$5[1]];
        var $target$$64;

        if (matchValue$$20[0].tail == null) {
          if (matchValue$$20[1].tail == null) {
            $target$$64 = 0;
          } else {
            $target$$64 = 1;
          }
        } else {
          $target$$64 = 1;
        }

        switch ($target$$64) {
          case 0:
            {
              return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNumericLiteral)("1"));
            }

          case 1:
            {
              return prefix;
            }
        }
      }

    case 1:
      {
        return (0, _layout.op_HatHat)(prefix, (0, _layout.op_HatHat)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagPunctuation)("/")), (0, _List.length)(patternInput$$4[0]) + (0, _List.length)(patternInput$$5[0]) > 1 ? (0, _layout.op_HatHat)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagPunctuation)("(")), (0, _layout.op_HatHat)(postfix, (0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagPunctuation)(")")))) : postfix));
      }
  }
}

function PrintTypes$$$layoutTypeAppWithInfoAndPrec(denv$$29, env$$4, tcL, prec, prefix$$1, args$$6) {
  if (prefix$$1) {
    if (args$$6.tail != null) {
      if (args$$6.tail.tail == null) {
        return (0, _layout.op_HatHat)(tcL, (0, _layout.op_HatHat)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagPunctuation)("<")), (0, _layout.op_HatHat)(PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$29, env$$4, 4, args$$6.head), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagPunctuation)(">")))));
      } else {
        return PrintUtilities$$$bracketIfL(prec <= 1, (0, _layout.op_HatHat)(tcL, PrintUtilities$$$angleL(PrintTypes$$$layoutTypesWithInfoAndPrec(denv$$29, env$$4, 2, (0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagPunctuation)(",")), args$$6))));
      }
    } else {
      return tcL;
    }
  } else {
    if (args$$6.tail != null) {
      if (args$$6.tail.tail == null) {
        return (0, _layout.op_HatHat)(PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$29, env$$4, 2, args$$6.head), tcL);
      } else {
        return PrintUtilities$$$bracketIfL(prec <= 1, (0, _layout.op_MinusMinusMinus)((0, _layout.bracketL)(PrintTypes$$$layoutTypesWithInfoAndPrec(denv$$29, env$$4, 2, (0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagPunctuation)(",")), args$$6)), tcL));
      }
    } else {
      return tcL;
    }
  }
}

function PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$30, env$$5, prec$$1, ty$$19) {
  var ty$$20, tc$$1, ty$$22, tc$$3, ty$$24, tc$$5, tc$$7, args$$9;

  PrintTypes$$$layoutTypeWithInfoAndPrec: while (true) {
    const matchValue$$21 = (0, _tast.stripTyparEqns)(ty$$19);

    if (ty$$20 = matchValue$$21, (0, _TastOps.isInByrefTy)(denv$$30.g, ty$$20) ? ty$$20.tag === 1 ? (tc$$1 = ty$$20.fields[0], (0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_inref_tcr)(denv$$30.g)) ? (0, _TastOps.tyconRefEq)(denv$$30.g, tc$$1, (0, _TcGlobals.TcGlobals$$get_byref2_tcr)(denv$$30.g)) : false) ? true : false : false : false) {
      const ty$$21 = matchValue$$21;
      const $var$$65 = denv$$30;
      env$$5 = env$$5;
      prec$$1 = prec$$1;
      ty$$19 = (0, _TastOps.mkInByrefTy)(denv$$30.g, (0, _TastOps.destByrefTy)(denv$$30.g, ty$$21));
      denv$$30 = $var$$65;
      continue PrintTypes$$$layoutTypeWithInfoAndPrec;
    } else if (ty$$22 = matchValue$$21, (0, _TastOps.isOutByrefTy)(denv$$30.g, ty$$22) ? ty$$22.tag === 1 ? (tc$$3 = ty$$22.fields[0], (0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_outref_tcr)(denv$$30.g)) ? (0, _TastOps.tyconRefEq)(denv$$30.g, tc$$3, (0, _TcGlobals.TcGlobals$$get_byref2_tcr)(denv$$30.g)) : false) ? true : false : false : false) {
      const ty$$23 = matchValue$$21;
      const $var$$66 = denv$$30;
      env$$5 = env$$5;
      prec$$1 = prec$$1;
      ty$$19 = (0, _TastOps.mkOutByrefTy)(denv$$30.g, (0, _TastOps.destByrefTy)(denv$$30.g, ty$$23));
      denv$$30 = $var$$66;
      continue PrintTypes$$$layoutTypeWithInfoAndPrec;
    } else if (ty$$24 = matchValue$$21, (0, _TastOps.isByrefTy)(denv$$30.g, ty$$24) ? ty$$24.tag === 1 ? (tc$$5 = ty$$24.fields[0], (0, _tast.EntityRef$$get_CanDeref)((0, _TcGlobals.TcGlobals$$get_byref_tcr)(denv$$30.g)) ? (0, _TastOps.tyconRefEq)(denv$$30.g, tc$$5, (0, _TcGlobals.TcGlobals$$get_byref2_tcr)(denv$$30.g)) : false) ? true : false : false : false) {
      const ty$$25 = matchValue$$21;
      const $var$$67 = denv$$30;
      env$$5 = env$$5;
      prec$$1 = prec$$1;
      ty$$19 = (0, _TastOps.mkByrefTy)(denv$$30.g, (0, _TastOps.destByrefTy)(denv$$30.g, ty$$25));
      denv$$30 = $var$$67;
      continue PrintTypes$$$layoutTypeWithInfoAndPrec;
    } else {
      var $target$$68, args$$10, tc$$8;

      if (matchValue$$21.tag === 1) {
        if (tc$$7 = matchValue$$21.fields[0], (args$$9 = matchValue$$21.fields[1], (0, _tast.EntityRef$$get_IsMeasureableReprTycon)(tc$$7) ? (0, _List.forAll)(function (arg10$0040$$27) {
          return (0, _TastOps.isDimensionless)(denv$$30.g, arg10$0040$$27);
        }, args$$9) : false)) {
          $target$$68 = 0;
          args$$10 = matchValue$$21.fields[1];
          tc$$8 = matchValue$$21.fields[0];
        } else {
          $target$$68 = 1;
        }
      } else {
        $target$$68 = 1;
      }

      switch ($target$$68) {
        case 0:
          {
            const $var$$69 = denv$$30;
            env$$5 = env$$5;
            prec$$1 = prec$$1;
            ty$$19 = (0, _TastOps.reduceTyconRefMeasureableOrProvided)(denv$$30.g, tc$$8, args$$10);
            denv$$30 = $var$$69;
            continue PrintTypes$$$layoutTypeWithInfoAndPrec;
          }

        case 1:
          {
            switch (matchValue$$21.tag) {
              case 4:
                {
                  const tc$$10 = matchValue$$21.fields[0].fields[0];
                  const args$$12 = matchValue$$21.fields[1];
                  return PrintTypes$$$layoutTypeAppWithInfoAndPrec(denv$$30, env$$5, PrintTypes$$$layoutTyconRef(denv$$30, tc$$10), prec$$1, (0, _tast.EntityRef$$get_IsPrefixDisplay)(tc$$10), args$$12);
                }

              case 2:
                {
                  const tupInfo = matchValue$$21.fields[0];
                  const t$$7 = matchValue$$21.fields[1];

                  if ((0, _TastOps.evalTupInfoIsStruct)(tupInfo)) {
                    return (0, _layout.op_MinusMinusMinus)(_layout.WordL$$$keywordStruct, (0, _layout.bracketL)(PrintTypes$$$layoutTypesWithInfoAndPrec(denv$$30, env$$5, 2, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("*")), t$$7)));
                  } else {
                    return PrintUtilities$$$bracketIfL(prec$$1 <= 2, PrintTypes$$$layoutTypesWithInfoAndPrec(denv$$30, env$$5, 2, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("*")), t$$7));
                  }
                }

              case 0:
                {
                  const tps = matchValue$$21.fields[0];
                  const tau = matchValue$$21.fields[1];
                  const tauL = PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$30, env$$5, prec$$1, tau);

                  if (tps.tail != null) {
                    if (tps.tail.tail == null) {
                      return (0, _layout.op_HatHat)(PrintTypes$$$layoutTyparRefWithInfo(denv$$30, env$$5, tps.head), (0, _layout.op_MinusMinusMinus)((0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagPunctuation)(".")), tauL));
                    } else {
                      return (0, _layout.op_HatHat)((0, _layout.spaceListL)((0, _List.map)(function (typar$$2) {
                        return PrintTypes$$$layoutTyparRefWithInfo(denv$$30, env$$5, typar$$2);
                      }, (0, _Types.L)(tps.head, tps.tail))), (0, _layout.op_MinusMinusMinus)((0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagPunctuation)(".")), tauL));
                    }
                  } else {
                    return tauL;
                  }
                }

              case 3:
                {
                  const loop = function loop(soFarL, ty$$26) {
                    loop: while (true) {
                      const matchValue$$22 = (0, _tast.stripTyparEqns)(ty$$26);

                      if (matchValue$$22.tag === 3) {
                        const rty$$4 = matchValue$$22.fields[1];
                        const dty = matchValue$$22.fields[0];
                        soFarL = (0, _layout.op_MinusMinusMinus)(soFarL, (0, _layout.op_HatHat)(PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$30, env$$5, 4, dty), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("->"))));
                        ty$$26 = rty$$4;
                        continue loop;
                      } else {
                        const rty$$5 = matchValue$$22;
                        return (0, _layout.op_MinusMinusMinus)(soFarL, PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$30, env$$5, 5, rty$$5));
                      }
                    }
                  };

                  return PrintUtilities$$$bracketIfL(prec$$1 <= 4, loop(_layout.emptyL, ty$$19));
                }

              case 5:
                {
                  const r = matchValue$$21.fields[0];
                  return PrintTypes$$$layoutTyparRefWithInfo(denv$$30, env$$5, r);
                }

              case 6:
                {
                  const unt$$1 = matchValue$$21.fields[0];
                  return PrintTypes$$$layoutMeasure(denv$$30, unt$$1);
                }

              default:
                {
                  const tc$$9 = matchValue$$21.fields[0];
                  const args$$11 = matchValue$$21.fields[1];
                  return PrintTypes$$$layoutTypeAppWithInfoAndPrec(denv$$30, env$$5, PrintTypes$$$layoutTyconRef(denv$$30, tc$$9), prec$$1, (0, _tast.EntityRef$$get_IsPrefixDisplay)(tc$$9), args$$11);
                }
            }
          }
      }
    }
  }
}

function PrintTypes$$$layoutTypesWithInfoAndPrec(denv$$31, env$$6, prec$$2, sep$$1, typl) {
  return (0, _layout.sepListL)(sep$$1, (0, _List.map)(function (ty$$27) {
    return PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$31, env$$6, prec$$2, ty$$27);
  }, typl));
}

function PrintTypes$$$layoutTypeWithInfo(denv$$32, env$$7, ty$$28) {
  return PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$32, env$$7, 5, ty$$28);
}

function PrintTypes$$$layoutType(denv$$33, ty$$29) {
  return PrintTypes$$$layoutTypeWithInfo(denv$$33, _TastOps.SimplifyTypes$$$typeSimplificationInfo0, ty$$29);
}

function PrintTypes$$$layoutTopType(denv$$34, env$$8, argInfos, rty$$6, cxs$$2) {
  const rtyL = PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$34, env$$8, 4, rty$$6);
  const cxsL$$1 = PrintTypes$$$layoutConstraintsWithInfo(denv$$34, env$$8, cxs$$2);

  if (argInfos.tail == null) {
    return (0, _layout.op_MinusMinusMinus)(rtyL, cxsL$$1);
  } else {
    const argL = function argL(tupledArg$$14) {
      const isOptionalArg = (0, _TastOps.HasFSharpAttribute)(denv$$34.g, (0, _TcGlobals.TcGlobals$$get_attrib_OptionalArgumentAttribute)(denv$$34.g), tupledArg$$14[1].Attribs);
      const isParamArray$$1 = (0, _TastOps.HasFSharpAttribute)(denv$$34.g, (0, _TcGlobals.TcGlobals$$get_attrib_ParamArrayAttribute)(denv$$34.g), tupledArg$$14[1].Attribs);
      const matchValue$$23 = [tupledArg$$14[1].Name, isOptionalArg, isParamArray$$1, (0, _TastOps.tryDestOptionTy)(denv$$34.g, tupledArg$$14[0])];
      var $target$$70, id, ty$$31, id$$1, isParamArray$$2;

      if (matchValue$$23[0] == null) {
        $target$$70 = 1;
      } else if (matchValue$$23[1]) {
        if (matchValue$$23[3] != null) {
          $target$$70 = 0;
          id = matchValue$$23[0];
          ty$$31 = matchValue$$23[3];
        } else {
          $target$$70 = 2;
          id$$1 = matchValue$$23[0];
          isParamArray$$2 = matchValue$$23[2];
        }
      } else {
        $target$$70 = 2;
        id$$1 = matchValue$$23[0];
        isParamArray$$2 = matchValue$$23[2];
      }

      switch ($target$$70) {
        case 0:
          {
            return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagPunctuation)("?")), (0, _layout.op_HatHat)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagParameter)((0, _ast.Ident$$get_idText)(id))), (0, _layout.op_HatHat)(_layout.SepL$$$colon, PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$34, env$$8, 2, ty$$31))));
          }

        case 1:
          {
            return PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$34, env$$8, 2, tupledArg$$14[0]);
          }

        case 2:
          {
            const prefix$$2 = isParamArray$$2 ? (0, _layout.op_HatHat)(PrintUtilities$$$layoutBuiltinAttribute(denv$$34, (0, _TcGlobals.TcGlobals$$get_attrib_ParamArrayAttribute)(denv$$34.g)), (0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagParameter)((0, _ast.Ident$$get_idText)(id$$1)))) : (0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagParameter)((0, _ast.Ident$$get_idText)(id$$1)));
            return (0, _layout.op_HatHat)(prefix$$2, (0, _layout.op_HatHat)(_layout.SepL$$$colon, PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$34, env$$8, 2, tupledArg$$14[0])));
          }
      }
    };

    const delimitReturnValue = (0, _layout.TaggedTextOps$$$tagPunctuation)(denv$$34.useColonForReturnType ? ":" : "->");
    const allArgsL = (0, _List.map)(function mapping$$14(x$$50) {
      return (0, _layout.op_HatHat)(x$$50, (0, _layout.wordL)(delimitReturnValue));
    }, (0, _List.map)(function mapping$$13(arg10$0040$$28) {
      return (0, _layout.sepListL)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("*")), arg10$0040$$28);
    }, (0, _illib.List$$$mapSquared)(argL, argInfos)));
    return (0, _layout.op_MinusMinusMinus)((0, _List.foldBack)(_layout.op_MinusMinusMinus, allArgsL, rtyL), cxsL$$1);
  }
}

function PrintTypes$$$layoutTyparDecls(denv$$35, nmL, prefix$$3, typars) {
  var h$$2;
  const env$$9 = _TastOps.SimplifyTypes$$$typeSimplificationInfo0;
  const tpcs = (0, _List.collect)(function mapping$$15(tp$$2) {
    return (0, _List.map)(function (tpc$$2) {
      return [tp$$2, tpc$$2];
    }, (0, _tast.Typar$$get_Constraints)(tp$$2));
  }, typars);
  const matchValue$$24 = [typars, tpcs];
  var $target$$71, h$$3;

  if (matchValue$$24[0].tail != null) {
    if (matchValue$$24[0].tail.tail == null) {
      if (matchValue$$24[1].tail == null) {
        if (h$$2 = matchValue$$24[0].head, !prefix$$3) {
          $target$$71 = 1;
          h$$3 = matchValue$$24[0].head;
        } else {
          $target$$71 = 2;
        }
      } else {
        $target$$71 = 2;
      }
    } else {
      $target$$71 = 2;
    }
  } else if (matchValue$$24[1].tail == null) {
    $target$$71 = 0;
  } else {
    $target$$71 = 2;
  }

  switch ($target$$71) {
    case 0:
      {
        return nmL;
      }

    case 1:
      {
        return (0, _layout.op_MinusMinusMinus)(PrintTypes$$$layoutTyparRefWithInfo(denv$$35, env$$9, h$$3), nmL);
      }

    case 2:
      {
        const tpcsL = PrintTypes$$$layoutConstraintsWithInfo(denv$$35, env$$9, tpcs);
        const coreL = (0, _layout.sepListL)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagPunctuation)(",")), (0, _List.map)(function (typar$$3) {
          return PrintTypes$$$layoutTyparRefWithInfo(denv$$35, env$$9, typar$$3);
        }, typars));

        if (prefix$$3 ? true : !(tpcs.tail == null)) {
          return (0, _layout.op_HatHat)(nmL, PrintUtilities$$$angleL((0, _layout.op_MinusMinusMinus)(coreL, tpcsL)));
        } else {
          return (0, _layout.op_MinusMinusMinus)((0, _layout.bracketL)(coreL), nmL);
        }
      }
  }
}

function PrintTypes$$$layoutTyparConstraint(denv$$36, tp$$3, tpc$$3) {
  const matchValue$$25 = PrintTypes$$$layoutConstraintWithInfo(denv$$36, _TastOps.SimplifyTypes$$$typeSimplificationInfo0, tp$$3, tpc$$3);

  if (matchValue$$25.tail == null) {
    return _layout.emptyL;
  } else {
    const h$$4 = matchValue$$25.head;
    return h$$4;
  }
}

function PrintTypes$$$prettyLayoutOfInstAndSig(denv$$37, typarInst, tys$$4, retTy) {
  const patternInput$$6 = (0, _TastOps.PrettyTypes$$$PrettifyInstAndSig)(denv$$37.g, typarInst, tys$$4, retTy);
  const prettyTys = patternInput$$6[0][1];
  const prettyTyparInst = patternInput$$6[0][0];
  const prettyRetTy = patternInput$$6[0][2];
  const env$$10 = (0, _TastOps.SimplifyTypes$$$CollectInfo)(true, (0, _Types.L)(prettyRetTy, prettyTys), patternInput$$6[1]);
  const prettyTysL = (0, _List.map)(function (ty$$32) {
    return PrintTypes$$$layoutTypeWithInfo(denv$$37, env$$10, ty$$32);
  }, prettyTys);
  const prettyRetTyL = PrintTypes$$$layoutTopType(denv$$37, env$$10, (0, _Types.L)((0, _Types.L)(), (0, _Types.L)()), prettyRetTy, (0, _Types.L)());
  return [prettyTyparInst, [prettyTys, prettyRetTy], [prettyTysL, prettyRetTyL], PrintTypes$$$layoutConstraintsWithInfo(denv$$37, env$$10, env$$10.postfixConstraints)];
}

function PrintTypes$$$prettyLayoutOfTopTypeInfoAux(denv$$38, prettyArgInfos, prettyRetTy$$1, cxs$$4) {
  const env$$11 = (0, _TastOps.SimplifyTypes$$$CollectInfo)(true, (0, _Types.L)(prettyRetTy$$1, (0, _List.collect)(function (list$$58) {
    return (0, _List.map)(function mapping$$16(tuple$$6) {
      return tuple$$6[0];
    }, list$$58);
  }, prettyArgInfos)), cxs$$4);
  return PrintTypes$$$layoutTopType(denv$$38, env$$11, prettyArgInfos, prettyRetTy$$1, env$$11.postfixConstraints);
}

function PrintTypes$$$prettyLayoutOfUncurriedSig(denv$$39, typarInst$$1, argInfos$$1, retTy$$1) {
  const patternInput$$7 = (0, _TastOps.PrettyTypes$$$PrettifyInstAndUncurriedSig)(denv$$39.g, typarInst$$1, argInfos$$1, retTy$$1);
  const prettyTyparInst$$1 = patternInput$$7[0][0];
  const prettyRetTy$$2 = patternInput$$7[0][2];
  const prettyArgInfos$$1 = patternInput$$7[0][1];
  return [prettyTyparInst$$1, PrintTypes$$$prettyLayoutOfTopTypeInfoAux(denv$$39, (0, _Types.L)(prettyArgInfos$$1, (0, _Types.L)()), prettyRetTy$$2, patternInput$$7[1])];
}

function PrintTypes$$$prettyLayoutOfCurriedMemberSig(denv$$40, typarInst$$2, argInfos$$2, retTy$$2, parentTyparTys) {
  const patternInput$$8 = (0, _TastOps.PrettyTypes$$$PrettifyInstAndCurriedSig)(denv$$40.g, typarInst$$2, parentTyparTys, argInfos$$2, retTy$$2);
  const retTy$$3 = patternInput$$8[0][3];
  const prettyTyparInst$$2 = patternInput$$8[0][0];
  const parentTyparTys$$1 = patternInput$$8[0][1];
  const argInfos$$3 = patternInput$$8[0][2];
  const cxs$$7 = (0, _List.filter)(function predicate$$22(tupledArg$$15) {
    return !(0, _List.exists)(function predicate$$21(ty$$33) {
      const matchValue$$26 = (0, _TastOps.tryDestTyparTy)(denv$$40.g, ty$$33);

      if (matchValue$$26 == null) {
        return false;
      } else {
        const destTypar = matchValue$$26;
        return (0, _tast.typarEq)(tupledArg$$15[0], destTypar);
      }
    }, parentTyparTys$$1);
  }, patternInput$$8[1]);
  return [prettyTyparInst$$2, PrintTypes$$$prettyLayoutOfTopTypeInfoAux(denv$$40, argInfos$$3, retTy$$3, cxs$$7)];
}

function PrintTypes$$$prettyLayoutOfMemberSigCore(denv$$41, memberToParentInst, typarInst$$3, methTypars, argInfos$$4, retTy$$4) {
  let patternInput$$9;
  const methTyparNames = (0, _List.mapIndexed)(function mapping$$17(i$$1, tp$$5) {
    if ((0, _TastOps.PrettyTypes$$$NeedsPrettyTyparName)(tp$$5)) {
      return (0, _String.toText)((0, _String.printf)("a%d"))((0, _List.length)(memberToParentInst) + i$$1);
    } else {
      return (0, _tast.Typar$$get_Name)(tp$$5);
    }
  }, methTypars);
  patternInput$$9 = (0, _TastOps.PrettyTypes$$$NewPrettyTypars)(memberToParentInst, methTypars, methTyparNames);
  const retTy$$5 = (0, _TastOps.instType)(patternInput$$9[1], retTy$$4);
  const argInfos$$5 = (0, _List.map)(function mapping$$19(infos) {
    if (infos.tail == null) {
      return (0, _Types.L)([(0, _TcGlobals.TcGlobals$$get_unit_ty)(denv$$41.g), _tast.ValReprInfoModule$$$unnamedTopArg1], (0, _Types.L)());
    } else {
      return (0, _List.map)(function mapping$$18(tupledArg$$16) {
        return (0, _lib.map1Of2)(function f$$9(arg10$0040$$30) {
          return (0, _TastOps.instType)(patternInput$$9[1], arg10$0040$$30);
        }, tupledArg$$16[0], tupledArg$$16[1]);
      }, infos);
    }
  }, argInfos$$4);
  const memberParentTypars = (0, _List.map)(function (tuple$$7) {
    return tuple$$7[0];
  }, memberToParentInst);
  const parentTyparTys$$2 = (0, _List.map)(function ($arg$$40) {
    return (0, _TastOps.instType)(patternInput$$9[1], (0, _tast.mkTyparTy)($arg$$40));
  }, memberParentTypars);
  const patternInput$$10 = PrintTypes$$$prettyLayoutOfCurriedMemberSig(denv$$41, typarInst$$3, argInfos$$5, retTy$$5, parentTyparTys$$2);
  return [patternInput$$10[0], patternInput$$9[0], patternInput$$10[1]];
}

function PrintTypes$$$prettyLayoutOfMemberType(denv$$42, v$$3, typarInst$$4, argInfos$$6, retTy$$6) {
  const matchValue$$27 = (0, _TastOps.PartitionValRefTypars)(denv$$42.g, v$$3);

  if (matchValue$$27 == null) {
    const patternInput$$11 = PrintTypes$$$prettyLayoutOfUncurriedSig(denv$$42, typarInst$$4, (0, _List.concat)(argInfos$$6), retTy$$6);
    return [patternInput$$11[0], (0, _Types.L)(), patternInput$$11[1]];
  } else {
    const memberToParentInst$$1 = matchValue$$27[3];
    const memberMethodTypars = matchValue$$27[2];
    return PrintTypes$$$prettyLayoutOfMemberSigCore(denv$$42, memberToParentInst$$1, typarInst$$4, memberMethodTypars, argInfos$$6, retTy$$6);
  }
}

function PrintTypes$$$prettyLayoutOfMemberSig(denv$$43, memberToParentInst$$2, nm$$6, methTypars$$1, argInfos$$7, retTy$$7) {
  const patternInput$$12 = PrintTypes$$$prettyLayoutOfMemberSigCore(denv$$43, memberToParentInst$$2, _TastOps.emptyTyparInst, methTypars$$1, argInfos$$7, retTy$$7);
  let nameL$$7;
  const nameL$$5 = (0, _PrettyNaming.DemangleOperatorNameAsLayout)(_layout.TaggedTextOps$$$tagMember, nm$$6);
  const nameL$$6 = denv$$43.showTyparBinding ? PrintTypes$$$layoutTyparDecls(denv$$43, nameL$$5, true, patternInput$$12[1]) : nameL$$5;
  nameL$$7 = nameL$$6;
  return (0, _layout.op_HatHat)(nameL$$7, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)(":")), patternInput$$12[2]));
}

function PrintTypes$$$prettyLayoutOfType(denv$$44, ty$$34) {
  const patternInput$$13 = (0, _TastOps.PrettyTypes$$$PrettifyType)(denv$$44.g, ty$$34);
  const env$$12 = (0, _TastOps.SimplifyTypes$$$CollectInfo)(true, (0, _Types.L)(patternInput$$13[0], (0, _Types.L)()), patternInput$$13[1]);
  const cxsL$$2 = PrintTypes$$$layoutConstraintsWithInfo(denv$$44, env$$12, env$$12.postfixConstraints);
  return (0, _layout.op_MinusMinusMinus)(PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$44, env$$12, 2, patternInput$$13[0]), cxsL$$2);
}

function PrintTypes$$$prettyLayoutOfTypeNoConstraints(denv$$45, ty$$36) {
  const patternInput$$14 = (0, _TastOps.PrettyTypes$$$PrettifyType)(denv$$45.g, ty$$36);
  return PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$45, _TastOps.SimplifyTypes$$$typeSimplificationInfo0, 5, patternInput$$14[0]);
}

function PrintTypes$$$layoutAssemblyName(_denv, ty$$38) {
  return (0, _tast.TType$$GetAssemblyName)(ty$$38);
}

function PrintTastMemberOrVals$$$prettyLayoutOfMember(denv$$46, typarInst$$5, v$$4) {
  var copyOfStruct$$1, ty$$39, copyOfStruct$$2;
  const v$$5 = (0, _tast.mkLocalValRef)(v$$4);
  const membInfo = (0, _tast.ValRef$$get_MemberInfo)(v$$5);
  const stat$$4 = PrintTypes$$$layoutMemberFlags(membInfo.MemberFlags);
  const patternInput$$15 = (0, _TastOps.GetTypeOfMemberInFSharpForm)(denv$$46.g, v$$5);

  const mkNameL = function mkNameL(niceMethodTypars$$2, tagFunction, name$$7) {
    const nameL$$8 = (0, _PrettyNaming.DemangleOperatorNameAsLayout)(function ($arg$$41) {
      return (0, _layout.mkNav)((0, _tast.ValRef$$get_DefinitionRange)(v$$5), tagFunction($arg$$41));
    }, name$$7);
    const nameL$$9 = denv$$46.showMemberContainers ? (0, _layout.op_HatHat)(PrintTypes$$$layoutTyconRef(denv$$46, (0, _tast.ValRef$$get_MemberApparentEntity)(v$$5)), (0, _layout.op_HatHat)(_layout.SepL$$$dot, nameL$$8)) : nameL$$8;
    const nameL$$10 = denv$$46.showTyparBinding ? PrintTypes$$$layoutTyparDecls(denv$$46, nameL$$9, true, niceMethodTypars$$2) : nameL$$9;
    const nameL$$11 = PrintTypes$$$layoutAccessibility(denv$$46, (0, _tast.ValRef$$get_Accessibility)(v$$5), nameL$$10);
    return nameL$$11;
  };

  var $target$$75;

  if (membInfo.MemberFlags.MemberKind.tag === 0) {
    $target$$75 = 1;
  } else if (membInfo.MemberFlags.MemberKind.tag === 1) {
    $target$$75 = 1;
  } else if (membInfo.MemberFlags.MemberKind.tag === 5) {
    $target$$75 = 2;
  } else if (membInfo.MemberFlags.MemberKind.tag === 3) {
    $target$$75 = 3;
  } else if (membInfo.MemberFlags.MemberKind.tag === 4) {
    $target$$75 = 4;
  } else {
    $target$$75 = 0;
  }

  switch ($target$$75) {
    case 0:
      {
        const patternInput$$16 = PrintTypes$$$prettyLayoutOfMemberType(denv$$46, v$$5, typarInst$$5, patternInput$$15[1], patternInput$$15[2]);
        const nameL$$12 = mkNameL(patternInput$$16[1], _layout.TaggedTextOps$$$tagMember, (0, _tast.ValRef$$get_LogicalName)(v$$5));
        const resL = (0, _layout.op_MinusMinusMinus)(stat$$4, (0, _layout.op_HatHat)(nameL$$12, (0, _layout.op_HatHat)(_layout.WordL$$$colon, patternInput$$16[2])));
        return [patternInput$$16[0], resL];
      }

    case 1:
      {
        const patternInput$$17 = PrintTypes$$$prettyLayoutOfMemberType(denv$$46, v$$5, typarInst$$5, patternInput$$15[1], patternInput$$15[2]);
        const newL = PrintTypes$$$layoutAccessibility(denv$$46, (0, _tast.ValRef$$get_Accessibility)(v$$5), _layout.WordL$$$keywordNew);
        const resL$$1 = (0, _layout.op_HatHat)((0, _layout.op_PlusPlus)(stat$$4, newL), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)(":")), patternInput$$17[2]));
        return [patternInput$$17[0], resL$$1];
      }

    case 2:
      {
        return [_TastOps.emptyTyparInst, stat$$4];
      }

    case 3:
      {
        if (patternInput$$15[1].tail == null) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastInvalidFormForPropertyGetter)(), (copyOfStruct$$1 = (0, _tast.ValRef$$get_Id)(v$$5), (0, _ast.Ident$$get_idRange)(copyOfStruct$$1))));
          const nameL$$13 = mkNameL((0, _Types.L)(), _layout.TaggedTextOps$$$tagProperty, (0, _tast.ValRef$$get_CoreDisplayName)(v$$5));
          const resL$$2 = (0, _layout.op_MinusMinusMinus)((0, _layout.op_MinusMinusMinus)(stat$$4, nameL$$13), (0, _layout.op_HatHat)(_layout.WordL$$$keywordWith, _layout.WordL$$$keywordGet));
          return [_TastOps.emptyTyparInst, resL$$2];
        } else {
          const argInfos$$9 = patternInput$$15[1].tail != null ? patternInput$$15[1].head.tail != null ? patternInput$$15[1].head.tail.tail == null ? patternInput$$15[1].tail.tail == null ? (ty$$39 = patternInput$$15[1].head.head[0], (0, _TastOps.isUnitTy)(denv$$46.g, ty$$39)) ? (0, _Types.L)() : patternInput$$15[1] : patternInput$$15[1] : patternInput$$15[1] : patternInput$$15[1] : patternInput$$15[1];
          const patternInput$$18 = PrintTypes$$$prettyLayoutOfMemberType(denv$$46, v$$5, typarInst$$5, argInfos$$9, patternInput$$15[2]);
          const nameL$$14 = mkNameL(patternInput$$18[1], _layout.TaggedTextOps$$$tagProperty, (0, _tast.ValRef$$get_CoreDisplayName)(v$$5));
          const resL$$3 = (0, _layout.op_MinusMinusMinus)(stat$$4, (0, _layout.op_HatHat)(nameL$$14, (0, _layout.op_HatHat)(_layout.WordL$$$colon, argInfos$$9.tail == null ? patternInput$$18[2] : (0, _layout.op_MinusMinusMinus)(patternInput$$18[2], (0, _layout.op_HatHat)(_layout.WordL$$$keywordWith, _layout.WordL$$$keywordGet)))));
          return [patternInput$$18[0], resL$$3];
        }
      }

    case 4:
      {
        if ((0, _List.length)(patternInput$$15[1]) !== 1 ? true : (0, _List.head)(patternInput$$15[1]).tail == null) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tastInvalidFormForPropertySetter)(), (copyOfStruct$$2 = (0, _tast.ValRef$$get_Id)(v$$5), (0, _ast.Ident$$get_idRange)(copyOfStruct$$2))));
          const nameL$$15 = mkNameL((0, _Types.L)(), _layout.TaggedTextOps$$$tagProperty, (0, _tast.ValRef$$get_CoreDisplayName)(v$$5));
          const resL$$4 = (0, _layout.op_MinusMinusMinus)((0, _layout.op_MinusMinusMinus)(stat$$4, nameL$$15), (0, _layout.op_HatHat)(_layout.WordL$$$keywordWith, _layout.WordL$$$keywordSet));
          return [_TastOps.emptyTyparInst, resL$$4];
        } else {
          const patternInput$$19 = (0, _illib.List$$$frontAndBack)((0, _List.head)(patternInput$$15[1]));
          const patternInput$$20 = PrintTypes$$$prettyLayoutOfMemberType(denv$$46, v$$5, typarInst$$5, patternInput$$19[0].tail == null ? (0, _Types.L)() : (0, _Types.L)(patternInput$$19[0], (0, _Types.L)()), patternInput$$19[1][0]);
          const nameL$$16 = mkNameL(patternInput$$20[1], _layout.TaggedTextOps$$$tagProperty, (0, _tast.ValRef$$get_CoreDisplayName)(v$$5));
          const resL$$5 = (0, _layout.op_MinusMinusMinus)(stat$$4, (0, _layout.op_HatHat)(nameL$$16, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)(":")), (0, _layout.op_MinusMinusMinus)(patternInput$$20[2], (0, _layout.op_HatHat)(_layout.WordL$$$keywordWith, _layout.WordL$$$keywordSet)))));
          return [patternInput$$20[0], resL$$5];
        }
      }
  }
}

function PrintTastMemberOrVals$$$layoutNonMemberVal(denv$$47, tps$$1, v$$6, tau$$1, cxs$$9) {
  const env$$13 = (0, _TastOps.SimplifyTypes$$$CollectInfo)(true, (0, _Types.L)(tau$$1, (0, _Types.L)()), cxs$$9);
  const cxs$$10 = env$$13.postfixConstraints;
  const patternInput$$21 = (0, _TastOps.GetTopTauTypeInFSharpForm)(denv$$47.g, (0, _tast.ValReprInfo$$get_ArgInfos)((0, _tast.arityOfVal)(v$$6)), tau$$1, (0, _tast.Val$$get_Range)(v$$6));
  const nameL$$17 = (0, _layout.wordL)((0, _layout.mkNav)((0, _tast.Val$$get_DefinitionRange)(v$$6), ((0, _tast.Val$$get_IsModuleBinding)(v$$6) ? _layout.TaggedTextOps$$$tagModuleBinding : _layout.TaggedTextOps$$$tagUnknownEntity)((0, _tast.Val$$get_DisplayName)(v$$6))));
  const nameL$$18 = PrintTypes$$$layoutAccessibility(denv$$47, (0, _tast.Val$$get_Accessibility)(v$$6), nameL$$17);
  const nameL$$19 = ((0, _tast.Val$$get_IsMutable)(v$$6) ? !denv$$47.suppressMutableKeyword : false) ? (0, _layout.op_PlusPlus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("mutable")), nameL$$18) : nameL$$18;
  const nameL$$20 = ((0, _tast.Val$$get_MustInline)(v$$6) ? !denv$$47.suppressInlineKeyword : false) ? (0, _layout.op_PlusPlus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("inline")), nameL$$19) : nameL$$19;
  const isOverGeneric = (0, _List.length)((0, _zset.ZsetModule$$$elements)((0, _TastOps.freeInType)(_TastOps.CollectTyparsNoCaching, tau$$1).FreeTypars)) < (0, _List.length)(tps$$1);
  const isTyFunction = (0, _tast.Val$$get_IsTypeFunction)(v$$6);
  const typarBindingsL = ((isTyFunction ? true : isOverGeneric) ? true : denv$$47.showTyparBinding) ? PrintTypes$$$layoutTyparDecls(denv$$47, nameL$$20, true, tps$$1) : nameL$$20;
  const valAndTypeL = (0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)(_layout.WordL$$$keywordVal, (0, _layout.op_MinusMinusMinus)(typarBindingsL, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)(":")))), PrintTypes$$$layoutTopType(denv$$47, env$$13, patternInput$$21[0], patternInput$$21[1], cxs$$10));
  const matchValue$$29 = denv$$47.generatedValueLayout(v$$6);

  if (matchValue$$29 != null) {
    const rhsL = matchValue$$29;
    return (0, _layout.op_MinusMinusMinus)((0, _layout.op_PlusPlus)(valAndTypeL, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("="))), rhsL);
  } else {
    return valAndTypeL;
  }
}

function PrintTastMemberOrVals$$$prettyLayoutOfValOrMember(denv$$48, typarInst$$6, v$$7) {
  let patternInput$$24;

  if ((0, _tast.Val$$get_MemberInfo)(v$$7) != null) {
    patternInput$$24 = PrintTastMemberOrVals$$$prettyLayoutOfMember(denv$$48, typarInst$$6, v$$7);
  } else {
    const patternInput$$22 = (0, _tast.Val$$get_TypeScheme)(v$$7);
    const tau$$3 = (0, _TastOps.StripSelfRefCell)(denv$$48.g, (0, _tast.Val$$get_BaseOrThisInfo)(v$$7), patternInput$$22[1]);
    const patternInput$$23 = (0, _TastOps.PrettyTypes$$$PrettifyInstAndTyparsAndType)(denv$$48.g, typarInst$$6, patternInput$$22[0], tau$$3);
    const prettyTypars = patternInput$$23[0][1];
    const prettyTyparInst$$9 = patternInput$$23[0][0];
    const prettyTauTy = patternInput$$23[0][2];
    const resL$$6 = PrintTastMemberOrVals$$$layoutNonMemberVal(denv$$48, prettyTypars, v$$7, prettyTauTy, patternInput$$23[1]);
    patternInput$$24 = [prettyTyparInst$$9, resL$$6];
  }

  return [patternInput$$24[0], PrintTypes$$$layoutAttribs(denv$$48, (0, _tast.Val$$get_Type)(v$$7), new _tast.TyparKind(0, "Type"), (0, _tast.Val$$get_Attribs)(v$$7), patternInput$$24[1])];
}

function PrintTastMemberOrVals$$$prettyLayoutOfValOrMemberNoInst(denv$$49, v$$8) {
  return PrintTastMemberOrVals$$$prettyLayoutOfValOrMember(denv$$49, _TastOps.emptyTyparInst, v$$8)[1];
}

function layoutTyparConstraint(denv$$50, x_0, x_1) {
  const x$$51 = [x_0, x_1];
  return PrintTypes$$$layoutTyparConstraint(denv$$50, x$$51[0], x$$51[1]);
}

function outputType(denv$$51, os, x$$52) {
  (0, _layout.bufferL)(os, PrintTypes$$$layoutType(denv$$51, x$$52));
}

function layoutType(denv$$52, x$$53) {
  return PrintTypes$$$layoutType(denv$$52, x$$53);
}

function outputTypars(denv$$53, nm$$7, os$$1, x$$54) {
  (0, _layout.bufferL)(os$$1, PrintTypes$$$layoutTyparDecls(denv$$53, (0, _layout.wordL)(nm$$7), true, x$$54));
}

function outputTyconRef(denv$$54, os$$2, x$$55) {
  (0, _layout.bufferL)(os$$2, PrintTypes$$$layoutTyconRef(denv$$54, x$$55));
}

function layoutTyconRef(denv$$55, x$$56) {
  return PrintTypes$$$layoutTyconRef(denv$$55, x$$56);
}

function layoutConst(g$$2, ty$$43, c$$15) {
  return PrintTypes$$$layoutConst(g$$2, ty$$43, c$$15);
}

function prettyLayoutOfMemberSig(denv$$56, x_0$$1, x_1$$1, x_2, x_3, x_4) {
  const x$$57 = [x_0$$1, x_1$$1, x_2, x_3, x_4];
  return PrintTypes$$$prettyLayoutOfMemberSig(denv$$56, x$$57[0], x$$57[1], x$$57[2], x$$57[3], x$$57[4]);
}

function prettyLayoutOfUncurriedSig(denv$$57, argInfos$$13, tau$$4) {
  return function (retTy$$9) {
    return PrintTypes$$$prettyLayoutOfUncurriedSig(denv$$57, argInfos$$13, tau$$4, retTy$$9);
  };
}

function InfoMemberPrinting$$$layoutParamData(denv$$58, _arg1$$7) {
  const pty = _arg1$$7.fields[7];
  const optArgInfo = _arg1$$7.fields[3];
  const nmOpt = _arg1$$7.fields[5];
  const isParamArray$$3 = _arg1$$7.fields[0];
  const _reflArgInfo = _arg1$$7.fields[6];
  const _isOutArg = _arg1$$7.fields[2];
  const _isInArg = _arg1$$7.fields[1];
  const _callerInfo = _arg1$$7.fields[4];
  const isOptArg = (0, _infos.OptionalArgInfo$$get_IsOptional)(optArgInfo);
  const matchValue$$31 = [isParamArray$$3, nmOpt, isOptArg, (0, _TastOps.tryDestOptionTy)(denv$$58.g, pty)];

  if (matchValue$$31[1] == null) {
    return PrintTypes$$$layoutType(denv$$58, pty);
  } else if (matchValue$$31[2]) {
    const nm$$9 = matchValue$$31[1];
    const pty$$1 = (0, _Option.defaultArg)(matchValue$$31[3], pty);
    return (0, _layout.op_HatHat)(_layout.SepL$$$questionMark, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagParameter)((0, _ast.Ident$$get_idText)(nm$$9))), (0, _layout.op_HatHat)(_layout.RightL$$$colon, PrintTypes$$$layoutType(denv$$58, pty$$1))));
  } else if (matchValue$$31[0]) {
    const nm$$10 = matchValue$$31[1];
    return (0, _layout.op_HatHat)(PrintUtilities$$$layoutBuiltinAttribute(denv$$58, (0, _TcGlobals.TcGlobals$$get_attrib_ParamArrayAttribute)(denv$$58.g)), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagParameter)((0, _ast.Ident$$get_idText)(nm$$10))), (0, _layout.op_HatHat)(_layout.RightL$$$colon, PrintTypes$$$layoutType(denv$$58, pty))));
  } else {
    const nm$$11 = matchValue$$31[1];
    return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagParameter)((0, _ast.Ident$$get_idText)(nm$$11))), (0, _layout.op_HatHat)(_layout.RightL$$$colon, PrintTypes$$$layoutType(denv$$58, pty)));
  }
}

function InfoMemberPrinting$$$formatParamDataToBuffer(denv$$59, os$$3, pd$$3) {
  (0, _layout.bufferL)(os$$3, InfoMemberPrinting$$$layoutParamData(denv$$59, pd$$3));
}

function InfoMemberPrinting$$$layoutMethInfoFSharpStyleCore(amap$$1, m$$14, denv$$60, minfo, minst) {
  const layout$$2 = (!(0, _infos.MethInfo$$get_IsConstructor)(minfo) ? !(0, _infos.MethInfo$$get_IsInstance)(minfo) : false) ? _layout.WordL$$$keywordStatic : _layout.emptyL;
  const layout$$3 = (0, _layout.op_HatHat)(layout$$2, (0, _layout.op_HatHat)((0, _infos.MethInfo$$get_IsConstructor)(minfo) ? (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("new")) : (0, _layout.op_HatHat)(_layout.WordL$$$keywordMember, PrintTypes$$$layoutTyparDecls(denv$$60, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagMethod)((0, _infos.MethInfo$$get_LogicalName)(minfo))), true, (0, _infos.MethInfo$$get_FormalMethodTypars)(minfo))), _layout.WordL$$$colon));
  const paramDatas = (0, _infos.MethInfo$$GetParamDatas$$Z5D984B3C)(minfo, amap$$1, m$$14, minst);
  const layout$$4 = (0, _layout.op_HatHat)(layout$$3, (0, _List.forAll)(function (l$$10) {
    return l$$10.tail == null;
  }, paramDatas) ? _layout.WordL$$$structUnit : (0, _layout.sepListL)(_layout.WordL$$$arrow, (0, _List.map)(function ($arg$$42) {
    return (0, _layout.sepListL)(_layout.WordL$$$star, (0, _List.map)(function mapping$$20(arg10$0040$$38) {
      return InfoMemberPrinting$$$layoutParamData(denv$$60, arg10$0040$$38);
    }, $arg$$42));
  }, paramDatas)));
  const retTy$$10 = (0, _infos.MethInfo$$GetFSharpReturnTy$$Z5D984B3C)(minfo, amap$$1, m$$14, minst);
  return (0, _layout.op_HatHat)(layout$$4, (0, _layout.op_HatHat)(_layout.WordL$$$arrow, PrintTypes$$$layoutType(denv$$60, retTy$$10)));
}

function InfoMemberPrinting$$$layoutMethInfoCSharpStyle(amap$$2, m$$15, denv$$61, minfo$$1, minst$$1) {
  var tcref$$3;
  const retTy$$11 = (0, _infos.MethInfo$$get_IsConstructor)(minfo$$1) ? (0, _infos.MethInfo$$get_ApparentEnclosingType)(minfo$$1) : (0, _infos.MethInfo$$GetFSharpReturnTy$$Z5D984B3C)(minfo$$1, amap$$2, m$$15, minst$$1);
  const layout$$5 = (0, _infos.MethInfo$$get_IsExtensionMember)(minfo$$1) ? (0, _layout.op_HatHat)(_layout.LeftL$$$leftParen, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)((0, _FSComp.SR$$$typeInfoExtension)())), _layout.RightL$$$rightParen)) : _layout.emptyL;
  const layout$$6 = (0, _layout.op_HatHat)(layout$$5, (0, _TastOps.isAppTy)((0, _infos.MethInfo$$get_TcGlobals)(minfo$$1), (0, _infos.MethInfo$$get_ApparentEnclosingAppType)(minfo$$1)) ? (tcref$$3 = (0, _infos.MethInfo$$get_ApparentEnclosingTyconRef)(minfo$$1), PrintTypes$$$layoutTyconRef(denv$$61, tcref$$3)) : _layout.emptyL);
  const layout$$7 = (0, _layout.op_HatHat)(layout$$6, (0, _infos.MethInfo$$get_IsConstructor)(minfo$$1) ? _layout.SepL$$$leftParen : (0, _layout.op_HatHat)(_layout.SepL$$$dot, (0, _layout.op_HatHat)(PrintTypes$$$layoutTyparDecls(denv$$61, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagMethod)((0, _infos.MethInfo$$get_LogicalName)(minfo$$1))), true, (0, _infos.MethInfo$$get_FormalMethodTypars)(minfo$$1)), _layout.SepL$$$leftParen)));
  const paramDatas$$1 = (0, _infos.MethInfo$$GetParamDatas$$Z5D984B3C)(minfo$$1, amap$$2, m$$15, minst$$1);
  const layout$$8 = (0, _layout.op_HatHat)(layout$$7, (0, _layout.sepListL)(_layout.RightL$$$comma, (0, _List.map)(function mapping$$21(arg10$0040$$40) {
    return InfoMemberPrinting$$$layoutParamData(denv$$61, arg10$0040$$40);
  }, (0, _List.concat)(paramDatas$$1))));
  return (0, _layout.op_HatHat)(layout$$8, (0, _layout.op_HatHat)(_layout.RightL$$$rightParen, (0, _layout.op_HatHat)(_layout.WordL$$$colon, PrintTypes$$$layoutType(denv$$61, retTy$$11))));
}

function InfoMemberPrinting$$$prettifyILMethInfo(amap$$3, m$$16, minfo$$2, typarInst$$7, ilMethInfo) {
  const mdef = ilMethInfo.fields[3];
  const dty$$1 = ilMethInfo.fields[2];
  const apparentTy = ilMethInfo.fields[1];
  const patternInput$$25 = (0, _TastOps.PrettyTypes$$$PrettifyInstAndTypes)((0, _import.ImportMap$$get_g)(amap$$3), typarInst$$7, (0, _Types.L)(apparentTy, (0, _infos.MethInfo$$get_FormalMethodInst)(minfo$$2)));
  const prettyTys$$1 = patternInput$$25[0][1];
  const prettyTyparInst$$11 = patternInput$$25[0][0];
  const patternInput$$26 = (0, _illib.List$$$headAndTail)(prettyTys$$1);
  let prettyMethInfo;

  if (dty$$1 != null) {
    const declaringTyconRef = dty$$1;
    prettyMethInfo = (0, _infos.MethInfo$$$CreateILExtensionMeth$$Z447F6EC6)(amap$$3, m$$16, patternInput$$26[0], declaringTyconRef, (0, _infos.MethInfo$$get_ExtensionMemberPriorityOption)(minfo$$2), mdef);
  } else {
    prettyMethInfo = (0, _infos.MethInfo$$$CreateILMeth$$Z136523CF)(amap$$3, m$$16, patternInput$$26[0], mdef);
  }

  return [prettyTyparInst$$11, prettyMethInfo, patternInput$$26[1]];
}

function InfoMemberPrinting$$$prettyLayoutOfMethInfoFreeStyle(amap$$4, m$$17, denv$$62, typarInst$$8, methInfo) {
  switch (methInfo.tag) {
    case 0:
      {
        const vref$$1 = methInfo.fields[2];
        const patternInput$$28 = PrintTastMemberOrVals$$$prettyLayoutOfValOrMember(new _TastOps.DisplayEnv(denv$$62.includeStaticParametersInTypeNames, denv$$62.openTopPathsSorted, denv$$62.openTopPathsRaw, denv$$62.shortTypeNames, denv$$62.suppressNestedTypes, denv$$62.maxMembers, denv$$62.showObsoleteMembers, denv$$62.showHiddenMembers, denv$$62.showTyparBinding, denv$$62.showImperativeTyparAnnotations, denv$$62.suppressInlineKeyword, denv$$62.suppressMutableKeyword, true, denv$$62.shortConstraints, denv$$62.useColonForReturnType, denv$$62.showAttributes, denv$$62.showOverrides, denv$$62.showConstraintTyparAnnotations, denv$$62.abbreviateAdditionalConstraints, denv$$62.showTyparDefaultConstraints, denv$$62.g, denv$$62.contextAccessibility, denv$$62.generatedValueLayout), typarInst$$8, (0, _tast.ValRef$$get_Deref)(vref$$1));
        return [patternInput$$28[0], patternInput$$28[1]];
      }

    case 1:
      {
        const ilminfo = methInfo.fields[1];
        const patternInput$$29 = InfoMemberPrinting$$$prettifyILMethInfo(amap$$4, m$$17, methInfo, typarInst$$8, ilminfo);
        const resL$$8 = InfoMemberPrinting$$$layoutMethInfoCSharpStyle(amap$$4, m$$17, denv$$62, patternInput$$29[1], patternInput$$29[2]);
        return [patternInput$$29[0], resL$$8];
      }

    default:
      {
        const patternInput$$27 = (0, _TastOps.PrettyTypes$$$PrettifyInst)((0, _import.ImportMap$$get_g)(amap$$4), typarInst$$8);
        return [patternInput$$27[0], (0, _layout.op_HatHat)(PrintTypes$$$layoutTyconRef(denv$$62, (0, _infos.MethInfo$$get_ApparentEnclosingTyconRef)(methInfo)), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("()")))];
      }
  }
}

function InfoMemberPrinting$$$prettyLayoutOfPropInfoFreeStyle(g$$3, amap$$5, m$$18, denv$$63, pinfo) {
  const rty$$9 = (0, _infos.PropInfo$$GetPropertyType$$73F6E43C)(pinfo, amap$$5, m$$18);
  const rty$$10 = (0, _infos.PropInfo$$get_IsIndexer)(pinfo) ? (0, _TastOps.op_MinusMinusGreater)((0, _TastOps.mkRefTupledTy)(g$$3, (0, _infos.PropInfo$$GetParamTypes$$73F6E43C)(pinfo, amap$$5, m$$18)), rty$$9) : rty$$9;
  const patternInput$$30 = (0, _TastOps.PrettyTypes$$$PrettifyType)(g$$3, rty$$10);
  let tagProp;
  const matchValue$$32 = (0, _infos.PropInfo$$get_ArbitraryValRef)(pinfo);

  if (matchValue$$32 != null) {
    const vref$$2 = matchValue$$32;

    tagProp = function ($arg$$44) {
      return (0, _layout.mkNav)((0, _tast.ValRef$$get_DefinitionRange)(vref$$2), (0, _layout.TaggedTextOps$$$tagProperty)($arg$$44));
    };
  } else {
    tagProp = _layout.TaggedTextOps$$$tagProperty;
  }

  const nameL$$21 = (0, _PrettyNaming.DemangleOperatorNameAsLayout)(tagProp, (0, _infos.PropInfo$$get_PropertyName)(pinfo));
  return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)((0, _FSComp.SR$$$typeInfoProperty)())), (0, _layout.op_HatHat)(layoutTyconRef(denv$$63, (0, _infos.PropInfo$$get_ApparentEnclosingTyconRef)(pinfo)), (0, _layout.op_HatHat)(_layout.SepL$$$dot, (0, _layout.op_HatHat)(nameL$$21, (0, _layout.op_HatHat)(_layout.RightL$$$colon, layoutType(denv$$63, patternInput$$30[0]))))));
}

function InfoMemberPrinting$$$formatMethInfoToBufferFreeStyle(amap$$6, m$$19, denv$$64, os$$4, minfo$$3) {
  const patternInput$$31 = InfoMemberPrinting$$$prettyLayoutOfMethInfoFreeStyle(amap$$6, m$$19, denv$$64, _TastOps.emptyTyparInst, minfo$$3);
  (0, _layout.bufferL)(os$$4, patternInput$$31[1]);
}

function InfoMemberPrinting$$$layoutMethInfoFSharpStyle(amap$$7, m$$20, denv$$65, minfo$$4) {
  return InfoMemberPrinting$$$layoutMethInfoFSharpStyleCore(amap$$7, m$$20, denv$$65, minfo$$4, (0, _infos.MethInfo$$get_FormalMethodInst)(minfo$$4));
}

function TastDefinitionPrinting$$$layoutExtensionMember(denv$$66, v$$9) {
  const tycon$$3 = (0, _tast.EntityRef$$get_Deref)((0, _tast.Val$$get_MemberApparentEntity)(v$$9));
  const nameL$$22 = (0, _layout.wordL)((0, _layout.mkNav)((0, _tast.Val$$get_DefinitionRange)(v$$9), (0, _layout.TaggedTextOps$$$tagMethod)((0, _tast.Entity$$get_DisplayName)(tycon$$3))));
  const nameL$$23 = PrintTypes$$$layoutAccessibility(denv$$66, (0, _tast.Entity$$get_Accessibility)(tycon$$3), nameL$$22);
  let tps$$3;
  const matchValue$$33 = (0, _TastOps.PartitionValTyparsForApparentEnclosingType)(denv$$66.g, v$$9);

  if (matchValue$$33 == null) {
    tps$$3 = (0, _Types.L)();
  } else {
    const memberParentTypars$$1 = matchValue$$33[1];
    tps$$3 = memberParentTypars$$1;
  }

  const lhsL = (0, _layout.op_HatHat)(_layout.WordL$$$keywordType, PrintTypes$$$layoutTyparDecls(denv$$66, nameL$$23, (0, _tast.Entity$$get_IsPrefixDisplay)(tycon$$3), tps$$3));
  const memberL = PrintTastMemberOrVals$$$prettyLayoutOfValOrMemberNoInst(denv$$66, v$$9);
  return (0, _layout.op_AtAtMinusMinus)((0, _layout.op_HatHat)(lhsL, _layout.WordL$$$keywordWith), memberL);
}

function TastDefinitionPrinting$$$layoutExtensionMembers(denv$$67, vs$$1) {
  return (0, _layout.aboveListL)((0, _List.map)(function (v$$10) {
    return TastDefinitionPrinting$$$layoutExtensionMember(denv$$67, v$$10);
  }, vs$$1));
}

function TastDefinitionPrinting$$$layoutRecdField(addAccess, denv$$68, fld) {
  const lhs = (0, _layout.wordL)((0, _layout.mkNav)((0, _tast.RecdField$$get_DefinitionRange)(fld), (0, _layout.TaggedTextOps$$$tagRecordField)((0, _tast.RecdField$$get_Name)(fld))));
  const lhs$$1 = addAccess ? PrintTypes$$$layoutAccessibility(denv$$68, (0, _tast.RecdField$$get_Accessibility)(fld), lhs) : lhs;
  const lhs$$2 = (0, _tast.RecdField$$get_IsMutable)(fld) ? (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("mutable")), lhs$$1) : lhs$$1;
  return (0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)(lhs$$2, _layout.RightL$$$colon), PrintTypes$$$layoutType(denv$$68, (0, _tast.RecdField$$get_FormalType)(fld)));
}

function TastDefinitionPrinting$$$layoutUnionOrExceptionField(denv$$69, isGenerated, i$$2, fld$$1) {
  if (isGenerated(i$$2, fld$$1)) {
    return PrintTypes$$$layoutTypeWithInfoAndPrec(denv$$69, _TastOps.SimplifyTypes$$$typeSimplificationInfo0, 2, (0, _tast.RecdField$$get_FormalType)(fld$$1));
  } else {
    return TastDefinitionPrinting$$$layoutRecdField(false, denv$$69, fld$$1);
  }
}

function TastDefinitionPrinting$$$isGeneratedUnionCaseField(pos, f$$10) {
  if (pos < 0) {
    return (0, _tast.RecdField$$get_Name)(f$$10) === "Item";
  } else {
    return (0, _tast.RecdField$$get_Name)(f$$10) === "Item" + (0, _Util.int32ToString)(pos + 1);
  }
}

function TastDefinitionPrinting$$$isGeneratedExceptionField(pos$$1, f$$11) {
  return (0, _tast.RecdField$$get_Name)(f$$11) === "Data" + (0, _Util.int32ToString)(pos$$1);
}

function TastDefinitionPrinting$$$layoutUnionCaseFields(denv$$70, isUnionCase, fields$$1) {
  var f$$12;
  var $target$$80, f$$13;

  if (fields$$1.tail != null) {
    if (fields$$1.tail.tail == null) {
      if (f$$12 = fields$$1.head, isUnionCase) {
        $target$$80 = 0;
        f$$13 = fields$$1.head;
      } else {
        $target$$80 = 1;
      }
    } else {
      $target$$80 = 1;
    }
  } else {
    $target$$80 = 1;
  }

  switch ($target$$80) {
    case 0:
      {
        return TastDefinitionPrinting$$$layoutUnionOrExceptionField(denv$$70, TastDefinitionPrinting$$$isGeneratedUnionCaseField, -1, f$$13);
      }

    case 1:
      {
        const isGenerated$$1 = isUnionCase ? function (pos$$3) {
          return function (f$$15) {
            return TastDefinitionPrinting$$$isGeneratedUnionCaseField(pos$$3, f$$15);
          };
        } : function (pos$$4) {
          return function (f$$16) {
            return TastDefinitionPrinting$$$isGeneratedExceptionField(pos$$4, f$$16);
          };
        };
        return (0, _layout.sepListL)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("*")), (0, _List.mapIndexed)(function (i$$3, fld$$2) {
          return TastDefinitionPrinting$$$layoutUnionOrExceptionField(denv$$70, (0, _Util.uncurry)(2, isGenerated$$1), i$$3, fld$$2);
        }, fields$$1));
      }
  }
}

function TastDefinitionPrinting$$$layoutUnionCase(denv$$71, prefixL, ucase) {
  const nmL$$2 = (0, _PrettyNaming.DemangleOperatorNameAsLayout)(function ($arg$$45) {
    return (0, _layout.mkNav)((0, _tast.UnionCase$$get_DefinitionRange)(ucase), (0, _layout.TaggedTextOps$$$tagUnionCase)($arg$$45));
  }, (0, _ast.Ident$$get_idText)(ucase.Id));
  const matchValue$$34 = (0, _tast.UnionCase$$get_RecdFields)(ucase);

  if (matchValue$$34.tail == null) {
    return (0, _layout.op_HatHat)(prefixL, nmL$$2);
  } else {
    const fields$$2 = matchValue$$34;
    return (0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)(prefixL, (0, _layout.op_HatHat)(nmL$$2, _layout.WordL$$$keywordOf)), TastDefinitionPrinting$$$layoutUnionCaseFields(denv$$71, true, fields$$2));
  }
}

function TastDefinitionPrinting$$$layoutUnionCases(denv$$72, ucases) {
  const prefixL$$1 = _layout.WordL$$$bar;
  return (0, _List.map)(function (ucase$$1) {
    return TastDefinitionPrinting$$$layoutUnionCase(denv$$72, prefixL$$1, ucase$$1);
  }, ucases);
}

function TastDefinitionPrinting$$$breakTypeDefnEqn(repr) {
  var l$$12;
  var $target$$81;

  switch (repr.tag) {
    case 2:
      $target$$81 = 1;
      break;

    case 1:
      $target$$81 = 2;
      break;

    case 4:
    case 3:
    case 5:
    case 6:
      $target$$81 = 3;
      break;

    default:
      $target$$81 = 0;
  }

  switch ($target$$81) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        const r$$1 = repr.fields[0];
        return !(l$$12 = (0, _tast.TyconUnionCases$$get_UnionCasesAsList)(r$$1.CasesTable), l$$12.tail != null ? l$$12.tail.tail == null ? true : false : true);
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

function TastDefinitionPrinting$$$layoutTycon(denv$$73, infoReader, ad, m$$21, simplified, typewordL, tycon$$4) {
  var r$$2;
  const g$$4 = denv$$73.g;
  const patternInput$$32 = (0, _TastOps.generalizeTyconRef)((0, _tast.mkLocalTyconRef)(tycon$$4));
  let patternInput$$33;
  const n$$9 = (0, _tast.Entity$$get_DisplayName)(tycon$$4);
  patternInput$$33 = (0, _TastOps.isStructTy)(g$$4, patternInput$$32[1]) ? ["struct", (0, _layout.TaggedTextOps$$$tagStruct)(n$$9)] : (0, _TastOps.isInterfaceTy)(g$$4, patternInput$$32[1]) ? ["interface", (0, _layout.TaggedTextOps$$$tagInterface)(n$$9)] : (0, _TastOps.isClassTy)(g$$4, patternInput$$32[1]) ? [simplified ? null : "class", (0, _layout.TaggedTextOps$$$tagClass)(n$$9)] : [null, (0, _layout.TaggedTextOps$$$tagUnknownType)(n$$9)];
  const name$$9 = (0, _layout.mkNav)((0, _tast.Entity$$get_DefinitionRange)(tycon$$4), patternInput$$33[1]);
  const nameL$$24 = PrintTypes$$$layoutAccessibility(denv$$73, (0, _tast.Entity$$get_Accessibility)(tycon$$4), (0, _layout.wordL)(name$$9));
  const denv$$74 = (0, _TastOps.DisplayEnv$$AddAccessibility$$Z104C0010)(denv$$73, (0, _tast.Entity$$get_Accessibility)(tycon$$4));
  let lhsL$$1;
  const tps$$4 = (0, _tast.Entity$$get_TyparsNoRange)(tycon$$4);
  const tpsL = PrintTypes$$$layoutTyparDecls(denv$$74, nameL$$24, (0, _tast.Entity$$get_IsPrefixDisplay)(tycon$$4), tps$$4);
  lhsL$$1 = (0, _layout.op_HatHat)(typewordL, tpsL);
  const start$$1 = (0, _Option.defaultArg)(patternInput$$33[0], null, _layout.TaggedTextOps$$$tagKeyword);
  [infoReader, ad, m$$21];
  let patternInput$$34;
  const adhoc = (0, _List.filter)(function predicate$$27(v$$15) {
    if (denv$$74.showHiddenMembers) {
      return true;
    } else {
      return !(0, _AttributeChecking.CheckFSharpAttributesForHidden)(denv$$74.g, (0, _tast.ValRef$$get_Attribs)(v$$15));
    }
  }, (0, _List.filter)(function predicate$$26(v$$14) {
    if (denv$$74.showObsoleteMembers) {
      return true;
    } else {
      return !(0, _AttributeChecking.CheckFSharpAttributesForObsolete)(denv$$74.g, (0, _tast.ValRef$$get_Attribs)(v$$14));
    }
  }, (0, _List.filter)(function predicate$$25(v$$13) {
    const matchValue$$35 = (0, _tast.ValRef$$get_MemberInfo)(v$$13).ImplementedSlotSigs;

    if (matchValue$$35.tail == null) {
      return true;
    } else {
      const oty = matchValue$$35.head.fields[1];

      if (denv$$74.showOverrides) {
        return !(0, _TastOps.isInterfaceTy)(denv$$74.g, oty);
      } else {
        return false;
      }
    }
  }, (0, _List.filter)(function predicate$$24(v$$12) {
    return !(0, _tast.Val$$get_IsClassConstructor)((0, _tast.ValRef$$get_Deref)(v$$12));
  }, (0, _List.filter)(function predicate$$23(v$$11) {
    return !(0, _tast.ValRef$$get_IsDispatchSlot)(v$$11);
  }, (0, _tast.Entity$$get_MembersOfFSharpTyconSorted)(tycon$$4))))));

  const sortKey = function sortKey(v$$16) {
    var copyOfStruct$$3;
    return [!(0, _tast.ValRef$$get_IsConstructor)(v$$16), (copyOfStruct$$3 = (0, _tast.ValRef$$get_Id)(v$$16), (0, _ast.Ident$$get_idText)(copyOfStruct$$3)), (0, _tast.ValRef$$get_IsCompiledAsTopLevel)(v$$16) ? (0, _tast.ValReprInfo$$get_NumCurriedArgs)((0, _tast.ValRef$$get_ValReprInfo)(v$$16)) : 0, (0, _tast.ValRef$$get_IsCompiledAsTopLevel)(v$$16) ? (0, _tast.ValReprInfo$$get_AritiesOfArgs)((0, _tast.ValRef$$get_ValReprInfo)(v$$16)) : (0, _Types.L)()];
  };

  const adhoc$$1 = (0, _List.sortBy)(sortKey, adhoc, {
    Compare: _Util.compareArrays
  });
  let iimpls;
  const matchValue$$36 = (0, _tast.Entity$$get_TypeReprInfo)(tycon$$4);
  var $target$$82, r$$3;

  if (matchValue$$36.tag === 0) {
    if (r$$2 = matchValue$$36.fields[0], r$$2.fsobjmodel_kind.tag === 1 ? true : false) {
      $target$$82 = 0;
      r$$3 = matchValue$$36.fields[0];
    } else {
      $target$$82 = 1;
    }
  } else {
    $target$$82 = 1;
  }

  switch ($target$$82) {
    case 0:
      {
        iimpls = (0, _Types.L)();
        break;
      }

    case 1:
      {
        iimpls = (0, _tast.Entity$$get_ImmediateInterfacesOfFSharpTycon)(tycon$$4);
        break;
      }
  }

  const iimpls$$1 = (0, _List.filter)(function predicate$$28(tupledArg$$19) {
    return !tupledArg$$19[1];
  }, iimpls);
  const iimplsLs = (0, _List.map)(function mapping$$22(tupledArg$$20) {
    return (0, _layout.op_MinusMinusMinus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("interface")), PrintTypes$$$layoutType(denv$$74, tupledArg$$20[0]));
  }, iimpls$$1);
  const adhocCtorsLs = (0, _List.map)(function mapping$$23(vref$$3) {
    return PrintTastMemberOrVals$$$prettyLayoutOfValOrMemberNoInst(denv$$74, (0, _tast.ValRef$$get_Deref)(vref$$3));
  }, (0, _List.filter)(function predicate$$29(v$$17) {
    return (0, _tast.ValRef$$get_IsConstructor)(v$$17);
  }, adhoc$$1));
  const adhocInstanceLs = (0, _List.map)(function mapping$$24(vref$$4) {
    return PrintTastMemberOrVals$$$prettyLayoutOfValOrMemberNoInst(denv$$74, (0, _tast.ValRef$$get_Deref)(vref$$4));
  }, (0, _List.filter)(function predicate$$30(v$$18) {
    if (!(0, _tast.ValRef$$get_IsConstructor)(v$$18)) {
      return (0, _tast.ValRef$$get_IsInstanceMember)(v$$18);
    } else {
      return false;
    }
  }, adhoc$$1));
  const adhocStaticLs = (0, _List.map)(function mapping$$25(vref$$5) {
    return PrintTastMemberOrVals$$$prettyLayoutOfValOrMemberNoInst(denv$$74, (0, _tast.ValRef$$get_Deref)(vref$$5));
  }, (0, _List.filter)(function predicate$$31(v$$19) {
    if (!(0, _tast.ValRef$$get_IsConstructor)(v$$19)) {
      return !(0, _tast.ValRef$$get_IsInstanceMember)(v$$19);
    } else {
      return false;
    }
  }, adhoc$$1));
  patternInput$$34 = [iimplsLs, adhocCtorsLs, adhocInstanceLs, adhocStaticLs];
  const memberLs = (0, _List.append)(patternInput$$34[0], (0, _List.append)(patternInput$$34[1], (0, _List.append)(patternInput$$34[2], patternInput$$34[3])));

  const addMembersAsWithEnd = function addMembersAsWithEnd(reprL) {
    if (memberLs.tail == null) {
      return reprL;
    } else {
      const memberLs$$1 = PrintUtilities$$$applyMaxMembers(denv$$74.maxMembers, memberLs);

      if (simplified) {
        return (0, _layout.op_AtAtMinusMinus)(reprL, (0, _layout.aboveListL)(memberLs$$1));
      } else {
        return (0, _layout.op_AtAt)(reprL, (0, _layout.op_AtAt)((0, _layout.op_AtAtMinusMinus)(_layout.WordL$$$keywordWith, (0, _layout.aboveListL)(memberLs$$1)), _layout.WordL$$$keywordEnd));
      }
    }
  };

  let reprL$$1;
  const repr$$1 = (0, _tast.Entity$$get_TypeReprInfo)(tycon$$4);
  var $target$$83;

  switch (repr$$1.tag) {
    case 1:
    case 2:
    case 0:
    case 4:
    case 5:
    case 3:
      $target$$83 = 0;
      break;

    default:
      $target$$83 = 1;
  }

  switch ($target$$83) {
    case 0:
      {
        const brk = !(memberLs.tail == null) ? true : TastDefinitionPrinting$$$breakTypeDefnEqn(repr$$1);
        let rhsL$$1;

        const addReprAccessL = function addReprAccessL(l$$15) {
          return PrintTypes$$$layoutAccessibility(denv$$74, (0, _tast.Entity$$get_TypeReprAccessibility)(tycon$$4), l$$15);
        };

        const denv$$75 = (0, _TastOps.DisplayEnv$$AddAccessibility$$Z104C0010)(denv$$74, (0, _tast.Entity$$get_TypeReprAccessibility)(tycon$$4));

        switch (repr$$1.tag) {
          case 1:
            {
              const recdFieldRefL = function recdFieldRefL(fld$$3) {
                return (0, _layout.op_HatHat)(TastDefinitionPrinting$$$layoutRecdField(false, denv$$75, fld$$3), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagPunctuation)(";")));
              };

              const recdL = PrintUtilities$$$braceL((0, _layout.aboveListL)(PrintUtilities$$$applyMaxMembers(denv$$75.maxMembers, (0, _List.map)(recdFieldRefL, (0, _tast.Entity$$get_TrueFieldsAsList)(tycon$$4)))));
              rhsL$$1 = addMembersAsWithEnd(addReprAccessL(recdL));
              break;
            }

          case 0:
            {
              const r$$4 = repr$$1.fields[0];

              if (r$$4.fsobjmodel_kind.tag === 3) {
                const rty$$12 = r$$4.fsobjmodel_kind.fields[0].fields[5];
                const paraml = r$$4.fsobjmodel_kind.fields[0].fields[4];
                const rty$$13 = (0, _TastOps.GetFSharpViewOfReturnType)(denv$$75.g, rty$$12);
                rhsL$$1 = (0, _layout.op_HatHat)(_layout.WordL$$$keywordDelegate, (0, _layout.op_MinusMinusMinus)(_layout.WordL$$$keywordOf, PrintTypes$$$layoutTopType(denv$$75, _TastOps.SimplifyTypes$$$typeSimplificationInfo0, (0, _illib.List$$$mapSquared)(function f$$17(sp) {
                  return [(0, _tast.SlotParam$$get_Type)(sp), _tast.ValReprInfoModule$$$unnamedTopArg1];
                }, paraml), rty$$13, (0, _Types.L)())));
              } else if (r$$4.fsobjmodel_kind.tag === 4) {
                rhsL$$1 = (0, _layout.aboveListL)((0, _List.map)(function mapping$$26(f$$18) {
                  const matchValue$$40 = (0, _tast.RecdField$$get_LiteralValue)(f$$18);

                  if (matchValue$$40 != null) {
                    const c$$16 = matchValue$$40;
                    return (0, _layout.op_HatHat)(_layout.WordL$$$bar, (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagField)((0, _tast.RecdField$$get_Name)(f$$18))), (0, _layout.op_HatHat)(_layout.WordL$$$equals, PrintTypes$$$layoutConst(denv$$75.g, patternInput$$32[1], c$$16))));
                  } else {
                    return _layout.emptyL;
                  }
                }, (0, _tast.Entity$$get_TrueFieldsAsList)(tycon$$4)));
              } else {
                let inherits;
                const matchValue$$41 = [r$$4.fsobjmodel_kind, (0, _tast.Entity$$get_TypeContents)(tycon$$4).tcaug_super];
                var $target$$84;

                if (matchValue$$41[0].tag === 0) {
                  if (matchValue$$41[1] != null) {
                    $target$$84 = 0;
                  } else {
                    $target$$84 = 2;
                  }
                } else if (matchValue$$41[0].tag === 1) {
                  $target$$84 = 1;
                } else {
                  $target$$84 = 2;
                }

                switch ($target$$84) {
                  case 0:
                    {
                      const super$ = matchValue$$41[1];
                      inherits = (0, _Types.L)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("inherit")), PrintTypes$$$layoutType(denv$$75, super$)), (0, _Types.L)());
                      break;
                    }

                  case 1:
                    {
                      inherits = (0, _List.map)(function mapping$$27(tupledArg$$22) {
                        return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("inherit")), PrintTypes$$$layoutType(denv$$75, tupledArg$$22[0]));
                      }, (0, _List.filter)(function predicate$$32(tupledArg$$21) {
                        return !tupledArg$$21[1];
                      }, (0, _tast.Entity$$get_ImmediateInterfacesOfFSharpTycon)(tycon$$4)));
                      break;
                    }

                  case 2:
                    {
                      inherits = (0, _Types.L)();
                      break;
                    }
                }

                const vsprs = (0, _List.map)(function mapping$$28(vref$$6) {
                  return PrintTastMemberOrVals$$$prettyLayoutOfValOrMemberNoInst(denv$$75, (0, _tast.ValRef$$get_Deref)(vref$$6));
                }, (0, _List.filter)(function predicate$$34(v$$21) {
                  return (0, _tast.ValRef$$get_IsDispatchSlot)(v$$21);
                }, (0, _List.filter)(function predicate$$33(v$$20) {
                  return (0, _tast.ValRef$$get_MemberInfo)(v$$20).ImplementedSlotSigs.tail == null;
                }, (0, _tast.Entity$$get_MembersOfFSharpTyconSorted)(tycon$$4))));
                const staticValsLs = (0, _List.map)(function mapping$$29(f$$20) {
                  return (0, _layout.op_HatHat)(_layout.WordL$$$keywordStatic, (0, _layout.op_HatHat)(_layout.WordL$$$keywordVal, TastDefinitionPrinting$$$layoutRecdField(true, denv$$75, f$$20)));
                }, (0, _List.filter)(function predicate$$35(f$$19) {
                  return (0, _tast.RecdField$$get_IsStatic)(f$$19);
                }, (0, _tast.Entity$$get_TrueFieldsAsList)(tycon$$4)));
                const instanceValsLs = (0, _List.map)(function mapping$$30(f$$22) {
                  return (0, _layout.op_HatHat)(_layout.WordL$$$keywordVal, TastDefinitionPrinting$$$layoutRecdField(true, denv$$75, f$$22));
                }, (0, _List.filter)(function predicate$$36(f$$21) {
                  return !(0, _tast.RecdField$$get_IsStatic)(f$$21);
                }, (0, _tast.Entity$$get_TrueFieldsAsList)(tycon$$4)));
                const alldecls$$3 = (0, _List.append)(inherits, (0, _List.append)(patternInput$$34[0], (0, _List.append)(patternInput$$34[1], (0, _List.append)(instanceValsLs, (0, _List.append)(vsprs, (0, _List.append)(patternInput$$34[2], (0, _List.append)(staticValsLs, patternInput$$34[3])))))));

                if (alldecls$$3.tail == null) {
                  rhsL$$1 = null;
                } else {
                  const alldecls$$4 = PrintUtilities$$$applyMaxMembers(denv$$75.maxMembers, alldecls$$3);
                  const emptyMeasure = (0, _tast.Entity$$get_TypeOrMeasureKind)(tycon$$4).tag === 1 ? alldecls$$4.tail == null : false;

                  if (emptyMeasure) {
                    rhsL$$1 = null;
                  } else {
                    const declsL = (0, _layout.aboveListL)(alldecls$$4);
                    let declsL$$1;

                    if (start$$1 == null) {
                      declsL$$1 = declsL;
                    } else {
                      const s$$12 = start$$1;
                      declsL$$1 = (0, _layout.op_AtAt)((0, _layout.op_AtAtMinusMinus)((0, _layout.wordL)(s$$12), declsL), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("end")));
                    }

                    rhsL$$1 = declsL$$1;
                  }
                }
              }

              break;
            }

          case 2:
            {
              const layoutUnionCases$$1 = (0, _layout.aboveListL)(PrintUtilities$$$applyMaxMembers(denv$$75.maxMembers, TastDefinitionPrinting$$$layoutUnionCases(denv$$75, (0, _tast.Entity$$get_UnionCasesAsList)(tycon$$4))));
              rhsL$$1 = addMembersAsWithEnd(addReprAccessL(layoutUnionCases$$1));
              break;
            }

          case 4:
            {
              rhsL$$1 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("(# \"<Common IL Type Omitted>\" #)"));
              break;
            }

          case 5:
            {
              const ty$$46 = repr$$1.fields[0];
              rhsL$$1 = PrintTypes$$$layoutType(denv$$75, ty$$46);
              break;
            }

          case 3:
            {
              const td = (0, _tast.Entity$$get_ILTyconRawMetadata)(tycon$$4);
              rhsL$$1 = PrintIL$$$layoutILTypeDef(denv$$75, td);
              break;
            }

          default:
            {
              rhsL$$1 = null;
            }
        }

        const brk$$1 = (0, _tast.Entity$$get_TypeReprInfo)(tycon$$4).tag === 3 ? true : brk;

        if (rhsL$$1 != null) {
          const rhsL$$2 = rhsL$$1;
          reprL$$1 = brk$$1 ? (0, _layout.op_AtAtMinusMinus)((0, _layout.op_HatHat)(lhsL$$1, _layout.WordL$$$equals), rhsL$$2) : (0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)(lhsL$$1, _layout.WordL$$$equals), rhsL$$2);
        } else {
          reprL$$1 = lhsL$$1;
        }

        break;
      }

    case 1:
      {
        const matchValue$$44 = (0, _tast.Entity$$get_TypeAbbrev)(tycon$$4);

        if (matchValue$$44 != null) {
          const a = matchValue$$44;
          reprL$$1 = (0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)(lhsL$$1, _layout.WordL$$$equals), PrintTypes$$$layoutType(new _TastOps.DisplayEnv(denv$$74.includeStaticParametersInTypeNames, denv$$74.openTopPathsSorted, denv$$74.openTopPathsRaw, false, denv$$74.suppressNestedTypes, denv$$74.maxMembers, denv$$74.showObsoleteMembers, denv$$74.showHiddenMembers, denv$$74.showTyparBinding, denv$$74.showImperativeTyparAnnotations, denv$$74.suppressInlineKeyword, denv$$74.suppressMutableKeyword, denv$$74.showMemberContainers, denv$$74.shortConstraints, denv$$74.useColonForReturnType, denv$$74.showAttributes, denv$$74.showOverrides, denv$$74.showConstraintTyparAnnotations, denv$$74.abbreviateAdditionalConstraints, denv$$74.showTyparDefaultConstraints, denv$$74.g, denv$$74.contextAccessibility, denv$$74.generatedValueLayout), a));
        } else {
          reprL$$1 = addMembersAsWithEnd((0, _layout.op_HatHat)(lhsL$$1, _layout.WordL$$$equals));
        }

        break;
      }
  }

  return PrintTypes$$$layoutAttribs(denv$$74, patternInput$$32[1], (0, _tast.Entity$$get_TypeOrMeasureKind)(tycon$$4), (0, _tast.Entity$$get_Attribs)(tycon$$4), reprL$$1);
}

function TastDefinitionPrinting$$$layoutExnDefn(denv$$76, exnc) {
  const nm$$12 = (0, _tast.Entity$$get_LogicalName)(exnc);
  const nmL$$3 = (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagClass)(nm$$12));
  const nmL$$4 = PrintTypes$$$layoutAccessibility(denv$$76, (0, _tast.Entity$$get_TypeReprAccessibility)(exnc), nmL$$3);
  const exnL = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("exception")), nmL$$4);
  let reprL$$2;
  const matchValue$$45 = (0, _tast.Entity$$get_ExceptionInfo)(exnc);

  switch (matchValue$$45.tag) {
    case 1:
      {
        reprL$$2 = (0, _layout.op_MinusMinusMinus)(_layout.WordL$$$equals, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)("(# ... #)")));
        break;
      }

    case 3:
      {
        reprL$$2 = _layout.emptyL;
        break;
      }

    case 2:
      {
        const r$$5 = matchValue$$45.fields[0];
        const matchValue$$46 = (0, _tast.TyconRecdFields$$get_TrueFieldsAsList)(r$$5);

        if (matchValue$$46.tail == null) {
          reprL$$2 = _layout.emptyL;
        } else {
          const r$$6 = matchValue$$46;
          reprL$$2 = (0, _layout.op_MinusMinusMinus)(_layout.WordL$$$keywordOf, TastDefinitionPrinting$$$layoutUnionCaseFields(denv$$76, false, r$$6));
        }

        break;
      }

    default:
      {
        const ecref = matchValue$$45.fields[0];
        reprL$$2 = (0, _layout.op_MinusMinusMinus)(_layout.WordL$$$equals, PrintTypes$$$layoutTyconRef(denv$$76, ecref));
      }
  }

  return (0, _layout.op_HatHat)(exnL, reprL$$2);
}

function TastDefinitionPrinting$$$layoutTyconDefns(denv$$77, infoReader$$1, ad$$1, m$$22, tycons) {
  var h$$5;
  var $target$$85, h$$6;

  if (tycons.tail != null) {
    if (tycons.tail.tail == null) {
      if (h$$5 = tycons.head, (0, _tast.Entity$$get_IsExceptionDecl)(h$$5)) {
        $target$$85 = 1;
        h$$6 = tycons.head;
      } else {
        $target$$85 = 2;
      }
    } else {
      $target$$85 = 2;
    }
  } else {
    $target$$85 = 0;
  }

  switch ($target$$85) {
    case 0:
      {
        return _layout.emptyL;
      }

    case 1:
      {
        return TastDefinitionPrinting$$$layoutExnDefn(denv$$77, h$$6);
      }

    case 2:
      {
        if (tycons.tail != null) {
          const t$$9 = tycons.tail;
          const h$$7 = tycons.head;
          const x$$59 = TastDefinitionPrinting$$$layoutTycon(denv$$77, infoReader$$1, ad$$1, m$$22, false, _layout.WordL$$$keywordType, h$$7);
          const xs$$2 = (0, _List.map)(function (tycon$$5) {
            return TastDefinitionPrinting$$$layoutTycon(denv$$77, infoReader$$1, ad$$1, m$$22, false, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("and")), tycon$$5);
          }, t$$9);
          return (0, _layout.aboveListL)((0, _Types.L)(x$$59, xs$$2));
        } else {
          throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/NicePrint.fs", 1850, 14);
        }
      }
  }
}

function InferredSigPrinting$$$layoutInferredSigOfModuleExpr(showHeader, denv$$78, infoReader$$2, ad$$2, m$$23, expr) {
  const isConcreteNamespace = function isConcreteNamespace(x$$60) {
    isConcreteNamespace: while (true) {
      switch (x$$60.tag) {
        case 2:
          {
            return true;
          }

        case 3:
          {
            return true;
          }

        case 1:
          {
            const defs = x$$60.fields[0];
            return (0, _List.exists)(isConcreteNamespace, defs);
          }

        case 0:
          {
            const def = x$$60.fields[0].fields[1];
            x$$60 = def;
            continue isConcreteNamespace;
          }

        default:
          {
            const tycons$$1 = x$$60.fields[1];
            const mbinds = x$$60.fields[2];

            if (!(tycons$$1.tail == null)) {
              return true;
            } else {
              return (0, _List.exists)(function predicate$$37(_arg1$$9) {
                if (_arg1$$9.tag === 1) {
                  const x$$61 = _arg1$$9.fields[0];
                  return !(0, _tast.Entity$$get_IsNamespace)(x$$61);
                } else {
                  return true;
                }
              }, mbinds);
            }
          }
      }
    }
  };

  const imexprLP = function imexprLP(denv$$79) {
    return function (_arg2$$4) {
      const def$$1 = _arg2$$4.fields[1];
      return imdefL(denv$$79)(def$$1);
    };
  };

  const imexprL = function imexprL(denv$$80) {
    return function (_arg3$$2) {
      const mty = _arg3$$2.fields[0];
      const m$$24 = _arg3$$2.fields[2];
      const def$$2 = _arg3$$2.fields[1];
      return imexprLP(denv$$80)(new _tast.ModuleOrNamespaceExprWithSig(0, "ModuleOrNamespaceExprWithSig", mty, def$$2, m$$24));
    };
  };

  const imdefsL = function imdefsL(denv$$81) {
    return function (x$$62) {
      return (0, _layout.aboveListL)((0, _List.map)(imdefL(denv$$81), x$$62));
    };
  };

  const imdefL = function imdefL(denv$$82) {
    return function (x$$63) {
      const filterVal = function filterVal(v$$22) {
        if (!(0, _tast.Val$$get_IsCompilerGenerated)(v$$22)) {
          return (0, _tast.Val$$get_MemberInfo)(v$$22) == null;
        } else {
          return false;
        }
      };

      const filterExtMem = function filterExtMem(v$$23) {
        return (0, _tast.Val$$get_IsExtensionMember)(v$$23);
      };

      switch (x$$63.tag) {
        case 2:
          {
            const bind$$2 = x$$63.fields[0];
            return (0, _layout.aboveListL)((0, _List.map)(function mapping$$34(v$$25) {
              return PrintTastMemberOrVals$$$prettyLayoutOfValOrMemberNoInst(denv$$82, v$$25);
            }, (0, _List.filter)(filterVal, (0, _Types.L)((0, _tast.Binding$$get_Var)(bind$$2), (0, _Types.L)()))));
          }

        case 1:
          {
            const defs$$1 = x$$63.fields[0];
            return imdefsL(denv$$82)(defs$$1);
          }

        case 3:
          {
            return _layout.emptyL;
          }

        case 0:
          {
            const mexpr = x$$63.fields[0];
            return imexprLP(denv$$82)(mexpr);
          }

        default:
          {
            const tycons$$2 = x$$63.fields[1];
            const mbinds$$1 = x$$63.fields[2];
            return (0, _layout.op_AtAt)(TastDefinitionPrinting$$$layoutTyconDefns(denv$$82, infoReader$$2, ad$$2, m$$23, tycons$$2), (0, _layout.op_AtAt)(TastDefinitionPrinting$$$layoutExtensionMembers(denv$$82, (0, _List.filter)(filterExtMem, (0, _TastOps.valsOfBinds)((0, _List.choose)(function chooser$$1(_arg4$$2) {
              if (_arg4$$2.tag === 0) {
                const bind = _arg4$$2.fields[0];
                return bind;
              } else {
                return null;
              }
            }, mbinds$$1)))), (0, _layout.op_AtAt)((0, _layout.aboveListL)((0, _List.map)(function mapping$$32(v$$24) {
              return PrintTastMemberOrVals$$$prettyLayoutOfValOrMemberNoInst(denv$$82, v$$24);
            }, (0, _List.filter)(filterVal, (0, _TastOps.valsOfBinds)((0, _List.choose)(function chooser$$2(_arg5$$2) {
              if (_arg5$$2.tag === 0) {
                const bind$$1 = _arg5$$2.fields[0];
                return bind$$1;
              } else {
                return null;
              }
            }, mbinds$$1))))), (0, _layout.aboveListL)((0, _List.map)(imbindL(denv$$82), (0, _List.choose)(function chooser$$3(_arg6$$2) {
              if (_arg6$$2.tag === 1) {
                const mspec = _arg6$$2.fields[0];
                const def$$3 = _arg6$$2.fields[1];
                return [mspec, def$$3];
              } else {
                return null;
              }
            }, mbinds$$1))))));
          }
      }
    };
  };

  const imbindL = function imbindL(denv$$83) {
    return function (tupledArg$$23) {
      const nm$$13 = (0, _tast.Entity$$get_DemangledModuleOrNamespaceName)(tupledArg$$23[0]);
      const innerPath = (0, _tast.CompilationPath$$get_AccessPath)((0, _tast.fullCompPathOfModuleOrNamespace)(tupledArg$$23[0]));
      const outerPath = (0, _tast.CompilationPath$$get_AccessPath)((0, _tast.Entity$$get_CompilationPath)(tupledArg$$23[0]));
      const denv$$84 = (0, _TastOps.DisplayEnv$$AddOpenPath$$1334CEF1)(denv$$83, (0, _List.map)(function (tuple$$9) {
        return tuple$$9[0];
      }, innerPath));

      if ((0, _tast.Entity$$get_IsNamespace)(tupledArg$$23[0])) {
        const basic = imdefL(denv$$84)(tupledArg$$23[1]);

        if (isConcreteNamespace(tupledArg$$23[1])) {
          const headerL = (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("namespace")), (0, _layout.sepListL)(_layout.SepL$$$dot, (0, _List.map)(function ($arg$$49) {
            return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagNamespace)($arg$$49[0]));
          }, innerPath)));
          return (0, _layout.op_AtAtMinusMinus)(headerL, basic);
        } else {
          return basic;
        }
      } else {
        const nmL$$5 = PrintTypes$$$layoutAccessibility(denv$$84, (0, _tast.Entity$$get_Accessibility)(tupledArg$$23[0]), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagModule)(nm$$13)));
        const denv$$85 = (0, _TastOps.DisplayEnv$$AddAccessibility$$Z104C0010)(denv$$84, (0, _tast.Entity$$get_Accessibility)(tupledArg$$23[0]));
        const basic$$1 = imdefL(denv$$85)(tupledArg$$23[1]);
        return (0, _List.forAll)(function predicate$$39(tupledArg$$24) {
          return (0, _Util.equals)(tupledArg$$24[1], new _tast.ModuleOrNamespaceKind(2, "Namespace"));
        }, outerPath) ? showHeader ? outerPath.tail == null ? (0, _layout.op_AtAt)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("module")), nmL$$5), basic$$1) : (0, _layout.op_AtAt)((0, _layout.op_AtAtMinusMinus)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("module")), (0, _layout.op_HatHat)(nmL$$5, (0, _layout.op_HatHat)(_layout.WordL$$$equals, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("begin"))))), basic$$1), _layout.WordL$$$keywordEnd) : basic$$1 : (0, _layout.op_AtAt)((0, _layout.op_AtAtMinusMinus)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("module")), (0, _layout.op_HatHat)(nmL$$5, (0, _layout.op_HatHat)(_layout.WordL$$$equals, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("begin"))))), basic$$1), _layout.WordL$$$keywordEnd);
      }
    };
  };

  return imexprL(denv$$78)(expr);
}

function PrintData$$$dataExprL(denv$$86, expr$$1) {
  return PrintData$$$dataExprWrapL(denv$$86, false, expr$$1);
}

function PrintData$$$dataExprWrapL(denv$$87, isAtomic, expr$$2) {
  PrintData$$$dataExprWrapL: while (true) {
    var $target$$86, c$$17, ty$$47, v$$26, rX, args$$13, c$$18, args$$14, c$$19, xs$$3, tc$$11, xs$$4, name$$10, tcref$$4, xs$$5;

    if (expr$$2.tag === 0) {
      $target$$86 = 0;
      c$$17 = expr$$2.fields[0];
      ty$$47 = expr$$2.fields[2];
    } else if (expr$$2.tag === 1) {
      $target$$86 = 1;
      v$$26 = expr$$2.fields[0];
    } else if (expr$$2.tag === 14) {
      $target$$86 = 2;
      rX = expr$$2.fields[0];
    } else if (expr$$2.tag === 11) {
      if (expr$$2.fields[0].tag === 0) {
        $target$$86 = 3;
        args$$13 = expr$$2.fields[2];
        c$$18 = expr$$2.fields[0].fields[0];
      } else if (expr$$2.fields[0].tag === 1) {
        $target$$86 = 4;
        args$$14 = expr$$2.fields[2];
        c$$19 = expr$$2.fields[0].fields[0];
      } else if (expr$$2.fields[0].tag === 2) {
        $target$$86 = 5;
        xs$$3 = expr$$2.fields[2];
      } else if (expr$$2.fields[0].tag === 10) {
        $target$$86 = 6;
        tc$$11 = expr$$2.fields[0].fields[1];
        xs$$4 = expr$$2.fields[2];
      } else if (expr$$2.fields[0].tag === 12) {
        $target$$86 = 7;
        name$$10 = expr$$2.fields[0].fields[0].fields[1];
        tcref$$4 = expr$$2.fields[0].fields[0].fields[0];
      } else if (expr$$2.fields[0].tag === 3) {
        if (expr$$2.fields[1].tail != null) {
          if (expr$$2.fields[1].tail.tail == null) {
            $target$$86 = 8;
            xs$$5 = expr$$2.fields[2];
          } else {
            $target$$86 = 9;
          }
        } else {
          $target$$86 = 9;
        }
      } else {
        $target$$86 = 9;
      }
    } else {
      $target$$86 = 9;
    }

    switch ($target$$86) {
      case 0:
        {
          if ((0, _TastOps.isEnumTy)(denv$$87.g, ty$$47)) {
            return (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagKeyword)("enum")), (0, _layout.op_HatHat)(PrintUtilities$$$angleL(PrintTypes$$$layoutType(denv$$87, ty$$47)), (0, _layout.bracketL)(PrintTypes$$$layoutConst(denv$$87.g, ty$$47, c$$17))));
          } else {
            return PrintTypes$$$layoutConst(denv$$87.g, ty$$47, c$$17);
          }
        }

      case 1:
        {
          return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagLocal)((0, _tast.ValRef$$get_DisplayName)(v$$26)));
        }

      case 2:
        {
          denv$$87 = denv$$87;
          isAtomic = isAtomic;
          expr$$2 = rX.contents;
          continue PrintData$$$dataExprWrapL;
        }

      case 3:
        {
          if ((0, _TcGlobals.TcGlobals$$unionCaseRefEq)(denv$$87.g, c$$18, (0, _TcGlobals.TcGlobals$$get_nil_ucref)(denv$$87.g))) {
            return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("[]"));
          } else if ((0, _TcGlobals.TcGlobals$$unionCaseRefEq)(denv$$87.g, c$$18, (0, _TcGlobals.TcGlobals$$get_cons_ucref)(denv$$87.g))) {
            const strip = function strip(_arg1$$11) {
              var $target$$87, h$$8, t$$10;

              if (_arg1$$11.tag === 11) {
                if (_arg1$$11.fields[0].tag === 0) {
                  if (_arg1$$11.fields[2].tail != null) {
                    if (_arg1$$11.fields[2].tail.tail != null) {
                      if (_arg1$$11.fields[2].tail.tail.tail == null) {
                        $target$$87 = 0;
                        h$$8 = _arg1$$11.fields[2].head;
                        t$$10 = _arg1$$11.fields[2].tail.head;
                      } else {
                        $target$$87 = 1;
                      }
                    } else {
                      $target$$87 = 1;
                    }
                  } else {
                    $target$$87 = 1;
                  }
                } else {
                  $target$$87 = 1;
                }
              } else {
                $target$$87 = 1;
              }

              switch ($target$$87) {
                case 0:
                  {
                    return (0, _Types.L)(h$$8, strip(t$$10));
                  }

                case 1:
                  {
                    return (0, _Types.L)();
                  }
              }
            };

            return (0, _layout.listL)(function (expr$$3) {
              return PrintData$$$dataExprL(denv$$87, expr$$3);
            }, strip(expr$$2));
          } else if (args$$13.tail == null) {
            return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagUnionCase)((0, _tast.UnionCaseRef$$get_CaseName)(c$$18)));
          } else {
            return (0, _layout.op_PlusPlus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagUnionCase)((0, _tast.UnionCaseRef$$get_CaseName)(c$$18))), (0, _layout.bracketL)((0, _layout.commaListL)(PrintData$$$dataExprsL(denv$$87, args$$13))));
          }
        }

      case 4:
        {
          return (0, _layout.op_PlusPlus)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagMethod)((0, _tast.EntityRef$$get_LogicalName)(c$$19))), (0, _layout.bracketL)((0, _layout.commaListL)(PrintData$$$dataExprsL(denv$$87, args$$14))));
        }

      case 5:
        {
          return (0, _layout.tupleL)(PrintData$$$dataExprsL(denv$$87, xs$$3));
        }

      case 6:
        {
          const fields$$3 = (0, _tast.EntityRef$$get_TrueInstanceFieldsAsList)(tc$$11);

          const lay = function lay(fs, x$$64) {
            return (0, _layout.op_MinusMinusMinus)((0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagRecordField)((0, _ast.Ident$$get_idText)(fs.rfield_id))), (0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagPunctuation)("="))), PrintData$$$dataExprL(denv$$87, x$$64));
          };

          return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagPunctuation)("{")), (0, _layout.op_HatHat)((0, _layout.semiListL)((0, _List.map2)(lay, fields$$3, xs$$4)), (0, _layout.rightL)((0, _layout.TaggedTextOps$$$tagPunctuation)("}"))));
        }

      case 7:
        {
          return (0, _layout.op_HatHat)(PrintTypes$$$layoutTyconRef(denv$$87, tcref$$4), (0, _layout.op_HatHat)((0, _layout.sepL)((0, _layout.TaggedTextOps$$$tagPunctuation)(".")), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagField)(name$$10))));
        }

      case 8:
        {
          return (0, _layout.op_HatHat)((0, _layout.leftL)((0, _layout.TaggedTextOps$$$tagPunctuation)("[|")), (0, _layout.op_HatHat)((0, _layout.semiListL)(PrintData$$$dataExprsL(denv$$87, xs$$5)), _layout.RightL$$$rightBracketBar));
        }

      case 9:
        {
          return (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagPunctuation)("?"));
        }
    }
  }
}

function PrintData$$$dataExprsL(denv$$88, xs$$6) {
  return (0, _List.map)(function (expr$$4) {
    return PrintData$$$dataExprL(denv$$88, expr$$4);
  }, xs$$6);
}

function dataExprL(denv$$89, expr$$5) {
  return PrintData$$$dataExprL(denv$$89, expr$$5);
}

function outputValOrMember(denv$$90, os$$5, x$$65) {
  (0, _layout.bufferL)(os$$5, PrintTastMemberOrVals$$$prettyLayoutOfValOrMemberNoInst(denv$$90, x$$65));
}

function stringValOrMember(denv$$91, x$$66) {
  return (0, _layout.showL)(PrintTastMemberOrVals$$$prettyLayoutOfValOrMemberNoInst(denv$$91, x$$66));
}

function layoutQualifiedValOrMember(denv$$92, typarInst$$9, v$$29) {
  return PrintTastMemberOrVals$$$prettyLayoutOfValOrMember(new _TastOps.DisplayEnv(denv$$92.includeStaticParametersInTypeNames, denv$$92.openTopPathsSorted, denv$$92.openTopPathsRaw, denv$$92.shortTypeNames, denv$$92.suppressNestedTypes, denv$$92.maxMembers, denv$$92.showObsoleteMembers, denv$$92.showHiddenMembers, denv$$92.showTyparBinding, denv$$92.showImperativeTyparAnnotations, denv$$92.suppressInlineKeyword, denv$$92.suppressMutableKeyword, true, denv$$92.shortConstraints, denv$$92.useColonForReturnType, denv$$92.showAttributes, denv$$92.showOverrides, denv$$92.showConstraintTyparAnnotations, denv$$92.abbreviateAdditionalConstraints, denv$$92.showTyparDefaultConstraints, denv$$92.g, denv$$92.contextAccessibility, denv$$92.generatedValueLayout), typarInst$$9, v$$29);
}

function outputQualifiedValOrMember(denv$$93, os$$6, v$$30) {
  outputValOrMember(new _TastOps.DisplayEnv(denv$$93.includeStaticParametersInTypeNames, denv$$93.openTopPathsSorted, denv$$93.openTopPathsRaw, denv$$93.shortTypeNames, denv$$93.suppressNestedTypes, denv$$93.maxMembers, denv$$93.showObsoleteMembers, denv$$93.showHiddenMembers, denv$$93.showTyparBinding, denv$$93.showImperativeTyparAnnotations, denv$$93.suppressInlineKeyword, denv$$93.suppressMutableKeyword, true, denv$$93.shortConstraints, denv$$93.useColonForReturnType, denv$$93.showAttributes, denv$$93.showOverrides, denv$$93.showConstraintTyparAnnotations, denv$$93.abbreviateAdditionalConstraints, denv$$93.showTyparDefaultConstraints, denv$$93.g, denv$$93.contextAccessibility, denv$$93.generatedValueLayout), os$$6, v$$30);
}

function outputQualifiedValSpec(denv$$94, os$$7, v$$31) {
  outputQualifiedValOrMember(denv$$94, os$$7, v$$31);
}

function stringOfQualifiedValOrMember(denv$$95, v$$32) {
  return (0, _layout.showL)(PrintTastMemberOrVals$$$prettyLayoutOfValOrMemberNoInst(new _TastOps.DisplayEnv(denv$$95.includeStaticParametersInTypeNames, denv$$95.openTopPathsSorted, denv$$95.openTopPathsRaw, denv$$95.shortTypeNames, denv$$95.suppressNestedTypes, denv$$95.maxMembers, denv$$95.showObsoleteMembers, denv$$95.showHiddenMembers, denv$$95.showTyparBinding, denv$$95.showImperativeTyparAnnotations, denv$$95.suppressInlineKeyword, denv$$95.suppressMutableKeyword, true, denv$$95.shortConstraints, denv$$95.useColonForReturnType, denv$$95.showAttributes, denv$$95.showOverrides, denv$$95.showConstraintTyparAnnotations, denv$$95.abbreviateAdditionalConstraints, denv$$95.showTyparDefaultConstraints, denv$$95.g, denv$$95.contextAccessibility, denv$$95.generatedValueLayout), v$$32));
}

function formatMethInfoToBufferFreeStyle(amap$$8, m$$25, denv$$96, buf, d$$4) {
  InfoMemberPrinting$$$formatMethInfoToBufferFreeStyle(amap$$8, m$$25, denv$$96, buf, d$$4);
}

function prettyLayoutOfMethInfoFreeStyle(amap$$9, m$$26, denv$$97, typarInst$$10, minfo$$5) {
  return InfoMemberPrinting$$$prettyLayoutOfMethInfoFreeStyle(amap$$9, m$$26, denv$$97, typarInst$$10, minfo$$5);
}

function prettyLayoutOfPropInfoFreeStyle(g$$5, amap$$10, m$$27, denv$$98, d$$5) {
  return InfoMemberPrinting$$$prettyLayoutOfPropInfoFreeStyle(g$$5, amap$$10, m$$27, denv$$98, d$$5);
}

function stringOfMethInfo(amap$$11, m$$28, denv$$99, d$$6) {
  return (0, _lib.bufs)(function (buf$$1) {
    InfoMemberPrinting$$$formatMethInfoToBufferFreeStyle(amap$$11, m$$28, denv$$99, buf$$1, d$$6);
  });
}

function stringOfParamData(denv$$100, paramData) {
  return (0, _lib.bufs)(function (buf$$2) {
    InfoMemberPrinting$$$formatParamDataToBuffer(denv$$100, buf$$2, paramData);
  });
}

function layoutOfParamData(denv$$101, paramData$$1) {
  return InfoMemberPrinting$$$layoutParamData(denv$$101, paramData$$1);
}

function outputILTypeRef(denv$$102, os$$8, x$$67) {
  (0, _layout.bufferL)(os$$8, PrintIL$$$layoutILTypeRef(denv$$102, x$$67));
}

function layoutILTypeRef(denv$$103, x$$68) {
  return PrintIL$$$layoutILTypeRef(denv$$103, x$$68);
}

function outputExnDef(denv$$104, os$$9, x$$69) {
  (0, _layout.bufferL)(os$$9, TastDefinitionPrinting$$$layoutExnDefn(denv$$104, x$$69));
}

function layoutExnDef(denv$$105, x$$70) {
  return TastDefinitionPrinting$$$layoutExnDefn(denv$$105, x$$70);
}

function stringOfTyparConstraints(denv$$106, x$$71) {
  return (0, _layout.showL)(PrintTypes$$$layoutConstraintsWithInfo(denv$$106, _TastOps.SimplifyTypes$$$typeSimplificationInfo0, x$$71));
}

function outputTycon(denv$$107, infoReader$$3, ad$$3, m$$29, os$$10, x$$72) {
  (0, _layout.bufferL)(os$$10, TastDefinitionPrinting$$$layoutTycon(denv$$107, infoReader$$3, ad$$3, m$$29, true, _layout.WordL$$$keywordType, x$$72));
}

function layoutTycon(denv$$108, infoReader$$4, ad$$4, m$$30, x$$73) {
  return TastDefinitionPrinting$$$layoutTycon(denv$$108, infoReader$$4, ad$$4, m$$30, true, _layout.WordL$$$keywordType, x$$73);
}

function layoutUnionCases(denv$$109, x$$74) {
  return TastDefinitionPrinting$$$layoutUnionCaseFields(denv$$109, true, x$$74);
}

function outputUnionCases(denv$$110, os$$11, x$$75) {
  (0, _layout.bufferL)(os$$11, TastDefinitionPrinting$$$layoutUnionCaseFields(denv$$110, true, x$$75));
}

function isGeneratedUnionCaseField(pos$$5, f$$23) {
  return TastDefinitionPrinting$$$isGeneratedUnionCaseField(pos$$5, f$$23);
}

function isGeneratedExceptionField(pos$$6, f$$24) {
  return TastDefinitionPrinting$$$isGeneratedExceptionField(pos$$6, f$$24);
}

function stringOfTyparConstraint(denv$$111, tpc_0, tpc_1) {
  const tpc$$5 = [tpc_0, tpc_1];
  return stringOfTyparConstraints(denv$$111, (0, _Types.L)(tpc$$5, (0, _Types.L)()));
}

function stringOfTy(denv$$112, x$$76) {
  return (0, _layout.showL)(PrintTypes$$$layoutType(denv$$112, x$$76));
}

function prettyLayoutOfType(denv$$113, x$$77) {
  return PrintTypes$$$prettyLayoutOfType(denv$$113, x$$77);
}

function prettyLayoutOfTypeNoCx(denv$$114, x$$78) {
  return PrintTypes$$$prettyLayoutOfTypeNoConstraints(denv$$114, x$$78);
}

function prettyStringOfTy(denv$$115, x$$79) {
  return (0, _layout.showL)(PrintTypes$$$prettyLayoutOfType(denv$$115, x$$79));
}

function prettyStringOfTyNoCx(denv$$116, x$$80) {
  return (0, _layout.showL)(PrintTypes$$$prettyLayoutOfTypeNoConstraints(denv$$116, x$$80));
}

function stringOfRecdField(denv$$117, x$$81) {
  return (0, _layout.showL)(TastDefinitionPrinting$$$layoutRecdField(false, denv$$117, x$$81));
}

function stringOfUnionCase(denv$$118, x$$82) {
  return (0, _layout.showL)(TastDefinitionPrinting$$$layoutUnionCase(denv$$118, _layout.WordL$$$bar, x$$82));
}

function stringOfExnDef(denv$$119, x$$83) {
  return (0, _layout.showL)(TastDefinitionPrinting$$$layoutExnDefn(denv$$119, x$$83));
}

function stringOfFSAttrib(denv$$120, x$$84) {
  return (0, _layout.showL)(PrintUtilities$$$squareAngleL(PrintTypes$$$layoutAttrib(denv$$120, x$$84)));
}

function stringOfILAttrib(denv$$121, x_0$$2, x_1$$2) {
  const x$$86 = [x_0$$2, x_1$$2];
  return (0, _layout.showL)(PrintUtilities$$$squareAngleL(PrintTypes$$$layoutILAttrib(denv$$121, x$$86[0], x$$86[1])));
}

function layoutInferredSigOfModuleExpr(showHeader$$1, denv$$122, infoReader$$5, ad$$5, m$$31, expr$$6) {
  return InferredSigPrinting$$$layoutInferredSigOfModuleExpr(showHeader$$1, denv$$122, infoReader$$5, ad$$5, m$$31, expr$$6);
}

function prettyLayoutOfValOrMember(denv$$123, typarInst$$11, v$$33) {
  return PrintTastMemberOrVals$$$prettyLayoutOfValOrMember(denv$$123, typarInst$$11, v$$33);
}

function prettyLayoutOfValOrMemberNoInst(denv$$124, v$$34) {
  return PrintTastMemberOrVals$$$prettyLayoutOfValOrMemberNoInst(denv$$124, v$$34);
}

function prettyLayoutOfInstAndSig(denv$$125, x_0$$3, x_1$$3, x_2$$1) {
  const x$$88 = [x_0$$3, x_1$$3, x_2$$1];
  return PrintTypes$$$prettyLayoutOfInstAndSig(denv$$125, x$$88[0], x$$88[1], x$$88[2]);
}

function minimalStringsOfTwoTypes(denv$$126, t1, t2) {
  const patternInput$$35 = (0, _TastOps.PrettyTypes$$$PrettifyTypePair)(denv$$126.g, t1, t2);
  const t2$$1 = patternInput$$35[0][1];
  const t1$$1 = patternInput$$35[0][0];
  let attempt1;
  const denv$$127 = new _TastOps.DisplayEnv(denv$$126.includeStaticParametersInTypeNames, denv$$126.openTopPathsSorted, denv$$126.openTopPathsRaw, denv$$126.shortTypeNames, denv$$126.suppressNestedTypes, denv$$126.maxMembers, denv$$126.showObsoleteMembers, denv$$126.showHiddenMembers, denv$$126.showTyparBinding, false, denv$$126.suppressInlineKeyword, denv$$126.suppressMutableKeyword, denv$$126.showMemberContainers, denv$$126.shortConstraints, denv$$126.useColonForReturnType, denv$$126.showAttributes, denv$$126.showOverrides, false, denv$$126.abbreviateAdditionalConstraints, denv$$126.showTyparDefaultConstraints, denv$$126.g, denv$$126.contextAccessibility, denv$$126.generatedValueLayout);
  const min1 = stringOfTy(denv$$127, t1$$1);
  const min2 = stringOfTy(denv$$127, t2$$1);
  attempt1 = min1 !== min2 ? [min1, min2, ""] : null;

  if (attempt1 == null) {
    let attempt2;
    const denv$$128 = (0, _TastOps.DisplayEnv$$SetOpenPaths$$Z7F4D45E5)(new _TastOps.DisplayEnv(denv$$126.includeStaticParametersInTypeNames, denv$$126.openTopPathsSorted, denv$$126.openTopPathsRaw, denv$$126.shortTypeNames, denv$$126.suppressNestedTypes, denv$$126.maxMembers, denv$$126.showObsoleteMembers, denv$$126.showHiddenMembers, denv$$126.showTyparBinding, false, denv$$126.suppressInlineKeyword, denv$$126.suppressMutableKeyword, denv$$126.showMemberContainers, denv$$126.shortConstraints, denv$$126.useColonForReturnType, denv$$126.showAttributes, denv$$126.showOverrides, false, denv$$126.abbreviateAdditionalConstraints, denv$$126.showTyparDefaultConstraints, denv$$126.g, denv$$126.contextAccessibility, denv$$126.generatedValueLayout), (0, _Types.L)());
    const min1$$1 = stringOfTy(denv$$128, t1$$1);
    const min2$$1 = stringOfTy(denv$$128, t2$$1);
    attempt2 = min1$$1 !== min2$$1 ? [min1$$1, min2$$1, ""] : null;

    if (attempt2 == null) {
      let attempt3;
      const min1$$2 = stringOfTy(denv$$126, t1$$1);
      const min2$$2 = stringOfTy(denv$$126, t2$$1);
      attempt3 = min1$$2 !== min2$$2 ? [min1$$2, min2$$2, stringOfTyparConstraints(denv$$126, patternInput$$35[1])] : null;

      if (attempt3 == null) {
        let attempt4;
        const denv$$129 = (0, _TastOps.DisplayEnv$$SetOpenPaths$$Z7F4D45E5)(denv$$126, (0, _Types.L)());
        const denv$$130 = new _TastOps.DisplayEnv(true, denv$$129.openTopPathsSorted, denv$$129.openTopPathsRaw, denv$$129.shortTypeNames, denv$$129.suppressNestedTypes, denv$$129.maxMembers, denv$$129.showObsoleteMembers, denv$$129.showHiddenMembers, denv$$129.showTyparBinding, denv$$129.showImperativeTyparAnnotations, denv$$129.suppressInlineKeyword, denv$$129.suppressMutableKeyword, denv$$129.showMemberContainers, denv$$129.shortConstraints, denv$$129.useColonForReturnType, denv$$129.showAttributes, denv$$129.showOverrides, denv$$129.showConstraintTyparAnnotations, denv$$129.abbreviateAdditionalConstraints, denv$$129.showTyparDefaultConstraints, denv$$129.g, denv$$129.contextAccessibility, denv$$129.generatedValueLayout);
        const min1$$3 = stringOfTy(denv$$130, t1$$1);
        const min2$$3 = stringOfTy(denv$$130, t2$$1);
        attempt4 = min1$$3 !== min2$$3 ? [min1$$3, min2$$3, stringOfTyparConstraints(denv$$130, patternInput$$35[1])] : null;

        if (attempt4 == null) {
          const denv$$131 = (0, _TastOps.DisplayEnv$$SetOpenPaths$$Z7F4D45E5)(denv$$126, (0, _Types.L)());
          const denv$$132 = new _TastOps.DisplayEnv(true, denv$$131.openTopPathsSorted, denv$$131.openTopPathsRaw, denv$$131.shortTypeNames, denv$$131.suppressNestedTypes, denv$$131.maxMembers, denv$$131.showObsoleteMembers, denv$$131.showHiddenMembers, denv$$131.showTyparBinding, denv$$131.showImperativeTyparAnnotations, denv$$131.suppressInlineKeyword, denv$$131.suppressMutableKeyword, denv$$131.showMemberContainers, denv$$131.shortConstraints, denv$$131.useColonForReturnType, denv$$131.showAttributes, denv$$131.showOverrides, denv$$131.showConstraintTyparAnnotations, denv$$131.abbreviateAdditionalConstraints, denv$$131.showTyparDefaultConstraints, denv$$131.g, denv$$131.contextAccessibility, denv$$131.generatedValueLayout);

          const makeName = function makeName(t$$11) {
            let assemblyName;

            const _arg1$$12 = PrintTypes$$$layoutAssemblyName(denv$$132, t$$11);

            var $target$$88;

            switch (_arg1$$12) {
              case null:
              case "":
                $target$$88 = 0;
                break;

              default:
                $target$$88 = 1;
            }

            switch ($target$$88) {
              case 0:
                {
                  assemblyName = "";
                  break;
                }

              case 1:
                {
                  const name$$11 = _arg1$$12;
                  assemblyName = (0, _String.toText)((0, _String.printf)(" (%s)"))(name$$11);
                  break;
                }
            }

            return (0, _String.toText)((0, _String.printf)("%s%s"))(stringOfTy(denv$$132, t1$$1))(assemblyName);
          };

          return [makeName(t1$$1), makeName(t2$$1), stringOfTyparConstraints(denv$$132, patternInput$$35[1])];
        } else {
          const res$$5 = attempt4;
          return res$$5;
        }
      } else {
        const res$$4 = attempt3;
        return res$$4;
      }
    } else {
      const res$$3 = attempt2;
      return res$$3;
    }
  } else {
    const res$$2 = attempt1;
    return res$$2;
  }
}

function minimalStringsOfTwoValues(denv$$133, v1, v2) {
  const denvMin = new _TastOps.DisplayEnv(denv$$133.includeStaticParametersInTypeNames, denv$$133.openTopPathsSorted, denv$$133.openTopPathsRaw, denv$$133.shortTypeNames, denv$$133.suppressNestedTypes, denv$$133.maxMembers, denv$$133.showObsoleteMembers, denv$$133.showHiddenMembers, denv$$133.showTyparBinding, true, denv$$133.suppressInlineKeyword, denv$$133.suppressMutableKeyword, denv$$133.showMemberContainers, denv$$133.shortConstraints, denv$$133.useColonForReturnType, denv$$133.showAttributes, denv$$133.showOverrides, false, denv$$133.abbreviateAdditionalConstraints, denv$$133.showTyparDefaultConstraints, denv$$133.g, denv$$133.contextAccessibility, denv$$133.generatedValueLayout);
  const min1$$4 = (0, _lib.bufs)(function (buf$$3) {
    outputQualifiedValOrMember(denvMin, buf$$3, v1);
  });
  const min2$$4 = (0, _lib.bufs)(function (buf$$4) {
    outputQualifiedValOrMember(denvMin, buf$$4, v2);
  });

  if (min1$$4 !== min2$$4) {
    return [min1$$4, min2$$4];
  } else {
    const denvMax = new _TastOps.DisplayEnv(denv$$133.includeStaticParametersInTypeNames, denv$$133.openTopPathsSorted, denv$$133.openTopPathsRaw, denv$$133.shortTypeNames, denv$$133.suppressNestedTypes, denv$$133.maxMembers, denv$$133.showObsoleteMembers, denv$$133.showHiddenMembers, denv$$133.showTyparBinding, true, denv$$133.suppressInlineKeyword, denv$$133.suppressMutableKeyword, denv$$133.showMemberContainers, denv$$133.shortConstraints, denv$$133.useColonForReturnType, denv$$133.showAttributes, denv$$133.showOverrides, true, denv$$133.abbreviateAdditionalConstraints, denv$$133.showTyparDefaultConstraints, denv$$133.g, denv$$133.contextAccessibility, denv$$133.generatedValueLayout);
    const max1 = (0, _lib.bufs)(function (buf$$5) {
      outputQualifiedValOrMember(denvMax, buf$$5, v1);
    });
    const max2 = (0, _lib.bufs)(function (buf$$6) {
      outputQualifiedValOrMember(denvMax, buf$$6, v2);
    });
    return [max1, max2];
  }
}

function minimalStringOfType(denv$$134, ty$$54) {
  const patternInput$$36 = (0, _TastOps.PrettyTypes$$$PrettifyType)(denv$$134.g, ty$$54);
  const denvMin$$1 = new _TastOps.DisplayEnv(denv$$134.includeStaticParametersInTypeNames, denv$$134.openTopPathsSorted, denv$$134.openTopPathsRaw, denv$$134.shortTypeNames, denv$$134.suppressNestedTypes, denv$$134.maxMembers, denv$$134.showObsoleteMembers, denv$$134.showHiddenMembers, denv$$134.showTyparBinding, false, denv$$134.suppressInlineKeyword, denv$$134.suppressMutableKeyword, denv$$134.showMemberContainers, denv$$134.shortConstraints, denv$$134.useColonForReturnType, denv$$134.showAttributes, denv$$134.showOverrides, false, denv$$134.abbreviateAdditionalConstraints, denv$$134.showTyparDefaultConstraints, denv$$134.g, denv$$134.contextAccessibility, denv$$134.generatedValueLayout);
  return (0, _layout.showL)(PrintTypes$$$layoutTypeWithInfoAndPrec(denvMin$$1, _TastOps.SimplifyTypes$$$typeSimplificationInfo0, 2, patternInput$$36[0]));
}