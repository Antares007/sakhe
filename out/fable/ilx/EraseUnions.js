"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnionReprDecisions$00603$$$$002Ector$$34927E1D = UnionReprDecisions$00603$$$$002Ector$$34927E1D;
exports.UnionReprDecisions$00603$$RepresentAllAlternativesAsConstantFieldsInRootClass$$2B595 = UnionReprDecisions$00603$$RepresentAllAlternativesAsConstantFieldsInRootClass$$2B595;
exports.UnionReprDecisions$00603$$DiscriminationTechnique$$2B595 = UnionReprDecisions$00603$$DiscriminationTechnique$$2B595;
exports.UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1 = UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1;
exports.UnionReprDecisions$00603$$RepresentOneAlternativeAsNull$$2B595 = UnionReprDecisions$00603$$RepresentOneAlternativeAsNull$$2B595;
exports.UnionReprDecisions$00603$$RepresentSingleNonNullaryAlternativeAsInstancesOfRootClassAndAnyOtherAlternativesAsNull$$5BDDA1 = UnionReprDecisions$00603$$RepresentSingleNonNullaryAlternativeAsInstancesOfRootClassAndAnyOtherAlternativesAsNull$$5BDDA1;
exports.UnionReprDecisions$00603$$RepresentAlternativeAsStructValue$$2B595 = UnionReprDecisions$00603$$RepresentAlternativeAsStructValue$$2B595;
exports.UnionReprDecisions$00603$$RepresentAlternativeAsFreshInstancesOfRootClass$$5BDDA1 = UnionReprDecisions$00603$$RepresentAlternativeAsFreshInstancesOfRootClass$$5BDDA1;
exports.UnionReprDecisions$00603$$RepresentAlternativeAsConstantFieldInTaggedRootClass$$5BDDA1 = UnionReprDecisions$00603$$RepresentAlternativeAsConstantFieldInTaggedRootClass$$5BDDA1;
exports.UnionReprDecisions$00603$$Flatten$$2B595 = UnionReprDecisions$00603$$Flatten$$2B595;
exports.UnionReprDecisions$00603$$OptimizeAlternativeToRootClass$$5BDDA1 = UnionReprDecisions$00603$$OptimizeAlternativeToRootClass$$5BDDA1;
exports.UnionReprDecisions$00603$$MaintainPossiblyUniqueConstantFieldForAlternative$$5BDDA1 = UnionReprDecisions$00603$$MaintainPossiblyUniqueConstantFieldForAlternative$$5BDDA1;
exports.UnionReprDecisions$00603$$TypeForAlternative$$5BDDA1 = UnionReprDecisions$00603$$TypeForAlternative$$5BDDA1;
exports.baseTyOfUnionSpec = baseTyOfUnionSpec;
exports.mkMakerName = mkMakerName;
exports.mkCasesTypeRef = mkCasesTypeRef;
exports.mkTesterName = mkTesterName;
exports.mkUnionCaseFieldId = mkUnionCaseFieldId;
exports.refToFieldInTy = refToFieldInTy;
exports.formalTypeArgs = formalTypeArgs;
exports.constFieldName = constFieldName;
exports.constFormalFieldTy = constFormalFieldTy;
exports.mkConstFieldSpecFromId = mkConstFieldSpecFromId;
exports.mkConstFieldSpec = mkConstFieldSpec;
exports.tyForAlt = tyForAlt;
exports.GetILTypeForAlternative = GetILTypeForAlternative;
exports.mkTagFieldType = mkTagFieldType;
exports.mkTagFieldFormalType = mkTagFieldFormalType;
exports.mkTagFieldId = mkTagFieldId;
exports.mkTailOrNullId = mkTailOrNullId;
exports.altOfUnionSpec = altOfUnionSpec;
exports.doesRuntimeTypeDiscriminateUseHelper = doesRuntimeTypeDiscriminateUseHelper;
exports.mkRuntimeTypeDiscriminate = mkRuntimeTypeDiscriminate;
exports.mkRuntimeTypeDiscriminateThen = mkRuntimeTypeDiscriminateThen;
exports.mkGetTagFromField = mkGetTagFromField;
exports.adjustFieldName = adjustFieldName;
exports.mkLdData = mkLdData;
exports.mkLdDataAddr = mkLdDataAddr;
exports.mkGetTailOrNull = mkGetTailOrNull;
exports.mkGetTagFromHelpers = mkGetTagFromHelpers;
exports.mkGetTag = mkGetTag;
exports.mkCeqThen = mkCeqThen;
exports.mkTagDiscriminate = mkTagDiscriminate;
exports.mkTagDiscriminateThen = mkTagDiscriminateThen;
exports.extraTysAndInstrsForStructCtor = extraTysAndInstrsForStructCtor;
exports.takesExtraParams = takesExtraParams;
exports.convNewDataInstrInternal = convNewDataInstrInternal;
exports.mkStData = mkStData;
exports.mkNewData = mkNewData;
exports.mkIsData = mkIsData;
exports.genWith = genWith;
exports.mkBrIsData = mkBrIsData;
exports.emitLdDataTagPrim = emitLdDataTagPrim;
exports.emitLdDataTag = emitLdDataTag;
exports.emitCastData = emitCastData;
exports.emitDataSwitch = emitDataSwitch;
exports.mkMethodsAndPropertiesForFields = mkMethodsAndPropertiesForFields;
exports.convAlternativeDef = convAlternativeDef;
exports.mkClassUnionDef = mkClassUnionDef;
exports.tagPropertyName = exports.cudefRepr = exports.NoTypesGeneratedViaThisReprDecider = exports.cuspecRepr = exports.UnionReprDecisions$00603 = exports.DiscriminationTechnique = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _illib = require("../absil/illib");

var _ilx = require("../absil/ilx");

var _il = require("../absil/il");

var _List = require("../fable-core.2.0.3/List");

var _String = require("../fable-core.2.0.3/String");

var _Array = require("../fable-core.2.0.3/Array");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Option = require("../fable-core.2.0.3/Option");

const DiscriminationTechnique = (0, _Types.declare)(function DiscriminationTechnique(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.DiscriminationTechnique = DiscriminationTechnique;
const UnionReprDecisions$00603 = (0, _Types.declare)(function UnionReprDecisions$00603(getAlternatives, nullPermitted, isNullary, isList, isStruct, nameOfAlt, makeRootType, makeNestedType) {
  const $this$$1 = this;
  $this$$1.getAlternatives = getAlternatives;
  $this$$1.nullPermitted = nullPermitted;
  $this$$1.isNullary = isNullary;
  $this$$1.isList = isList;
  $this$$1.isStruct = isStruct;
  $this$$1.nameOfAlt = nameOfAlt;
  $this$$1.makeRootType = makeRootType;
  $this$$1.makeNestedType = makeNestedType;
});
exports.UnionReprDecisions$00603 = UnionReprDecisions$00603;

function UnionReprDecisions$00603$$$$002Ector$$34927E1D(getAlternatives, nullPermitted, isNullary, isList, isStruct, nameOfAlt, makeRootType, makeNestedType) {
  return this != null ? UnionReprDecisions$00603.call(this, getAlternatives, nullPermitted, isNullary, isList, isStruct, nameOfAlt, makeRootType, makeNestedType) : new UnionReprDecisions$00603(getAlternatives, nullPermitted, isNullary, isList, isStruct, nameOfAlt, makeRootType, makeNestedType);
}

(function UnionReprDecisions$00603$$$$002Ecctor() {
  UnionReprDecisions$00603.TaggingThresholdFixedConstant = 4;
})();

function UnionReprDecisions$00603$$RepresentAllAlternativesAsConstantFieldsInRootClass$$2B595(repr, cu) {
  return repr.getAlternatives(cu).every(repr.isNullary);
}

function UnionReprDecisions$00603$$DiscriminationTechnique$$2B595(repr$$1, cu$$1) {
  if (repr$$1.isList(cu$$1)) {
    return new DiscriminationTechnique(0, "TailOrNull");
  } else {
    const alts = repr$$1.getAlternatives(cu$$1);

    if (alts.length === 1) {
      return new DiscriminationTechnique(2, "SingleCase");
    } else if ((!repr$$1.isStruct(cu$$1) ? alts.length < UnionReprDecisions$00603.TaggingThresholdFixedConstant : false) ? !UnionReprDecisions$00603$$RepresentAllAlternativesAsConstantFieldsInRootClass$$2B595(repr$$1, cu$$1) : false) {
      return new DiscriminationTechnique(1, "RuntimeTypes");
    } else {
      return new DiscriminationTechnique(3, "IntegerTag");
    }
  }
}

function UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(repr$$2, cu$$2, alt) {
  const alts$$1 = repr$$2.getAlternatives(cu$$2);

  if (((repr$$2.nullPermitted(cu$$2) ? (0, _Util.equals)(UnionReprDecisions$00603$$DiscriminationTechnique$$2B595(repr$$2, cu$$2), new DiscriminationTechnique(1, "RuntimeTypes")) : false) ? (0, _illib.Array$$$existsOne)(repr$$2.isNullary, alts$$1) : false) ? alts$$1.some(function ($arg$$2) {
    return !repr$$2.isNullary($arg$$2);
  }) : false) {
    return repr$$2.isNullary(alt);
  } else {
    return false;
  }
}

function UnionReprDecisions$00603$$RepresentOneAlternativeAsNull$$2B595(repr$$3, cu$$3) {
  const alts$$2 = repr$$3.getAlternatives(cu$$3);

  if (repr$$3.nullPermitted(cu$$3)) {
    return (0, _illib.Array$$$existsOne)(function p(alt$$1) {
      return UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(repr$$3, cu$$3, alt$$1);
    }, alts$$2);
  } else {
    return false;
  }
}

function UnionReprDecisions$00603$$RepresentSingleNonNullaryAlternativeAsInstancesOfRootClassAndAnyOtherAlternativesAsNull$$5BDDA1(repr$$4, cu$$4, alt$$2) {
  const alts$$3 = repr$$4.getAlternatives(cu$$4);

  if ((!repr$$4.isStruct(cu$$4) ? !repr$$4.isNullary(alt$$2) : false) ? alts$$3.every(function predicate$$1(alt2) {
    if (!repr$$4.isNullary(alt2)) {
      return true;
    } else {
      return UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(repr$$4, cu$$4, alt2);
    }
  }) : false) {
    return (0, _illib.Array$$$existsOne)(function ($arg$$3) {
      return !repr$$4.isNullary($arg$$3);
    }, alts$$3);
  } else {
    return false;
  }
}

function UnionReprDecisions$00603$$RepresentAlternativeAsStructValue$$2B595(repr$$5, cu$$5) {
  return repr$$5.isStruct(cu$$5);
}

function UnionReprDecisions$00603$$RepresentAlternativeAsFreshInstancesOfRootClass$$5BDDA1(repr$$6, cu$$6, alt$$3) {
  if (!repr$$6.isStruct(cu$$6)) {
    if (repr$$6.isList(cu$$6) ? repr$$6.nameOfAlt(alt$$3) === "Cons" : false) {
      return true;
    } else {
      return UnionReprDecisions$00603$$RepresentSingleNonNullaryAlternativeAsInstancesOfRootClassAndAnyOtherAlternativesAsNull$$5BDDA1(repr$$6, cu$$6, alt$$3);
    }
  } else {
    return false;
  }
}

function UnionReprDecisions$00603$$RepresentAlternativeAsConstantFieldInTaggedRootClass$$5BDDA1(repr$$7, cu$$7, alt$$4) {
  if ((!repr$$7.isStruct(cu$$7) ? repr$$7.isNullary(alt$$4) : false) ? !UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(repr$$7, cu$$7, alt$$4) : false) {
    return !(0, _Util.equals)(UnionReprDecisions$00603$$DiscriminationTechnique$$2B595(repr$$7, cu$$7), new DiscriminationTechnique(1, "RuntimeTypes"));
  } else {
    return false;
  }
}

function UnionReprDecisions$00603$$Flatten$$2B595(repr$$8, cu$$8) {
  return repr$$8.isStruct(cu$$8);
}

function UnionReprDecisions$00603$$OptimizeAlternativeToRootClass$$5BDDA1(repr$$9, cu$$9, alt$$5) {
  if ((((repr$$9.isList(cu$$9) ? true : UnionReprDecisions$00603$$Flatten$$2B595(repr$$9, cu$$9)) ? true : UnionReprDecisions$00603$$RepresentAllAlternativesAsConstantFieldsInRootClass$$2B595(repr$$9, cu$$9)) ? true : UnionReprDecisions$00603$$RepresentAlternativeAsConstantFieldInTaggedRootClass$$5BDDA1(repr$$9, cu$$9, alt$$5)) ? true : UnionReprDecisions$00603$$RepresentAlternativeAsStructValue$$2B595(repr$$9, cu$$9)) {
    return true;
  } else {
    return UnionReprDecisions$00603$$RepresentAlternativeAsFreshInstancesOfRootClass$$5BDDA1(repr$$9, cu$$9, alt$$5);
  }
}

function UnionReprDecisions$00603$$MaintainPossiblyUniqueConstantFieldForAlternative$$5BDDA1(repr$$10, cu$$10, alt$$6) {
  if (!repr$$10.isStruct(cu$$10) ? !UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(repr$$10, cu$$10, alt$$6) : false) {
    return repr$$10.isNullary(alt$$6);
  } else {
    return false;
  }
}

function UnionReprDecisions$00603$$TypeForAlternative$$5BDDA1(repr$$11, cuspec, alt$$7) {
  if (UnionReprDecisions$00603$$OptimizeAlternativeToRootClass$$5BDDA1(repr$$11, cuspec, alt$$7) ? true : UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(repr$$11, cuspec, alt$$7)) {
    return repr$$11.makeRootType(cuspec);
  } else {
    const altName = repr$$11.nameOfAlt(alt$$7);
    const nm = (repr$$11.isNullary(alt$$7) ? true : repr$$11.isList(cuspec)) ? "_" + altName : altName;
    return repr$$11.makeNestedType([cuspec, nm]);
  }
}

function baseTyOfUnionSpec(cuspec$$1) {
  return (0, _il.mkILNamedTy)((0, _ilx.IlxUnionSpec$$get_Boxity)(cuspec$$1), (0, _ilx.IlxUnionSpec$$get_TypeRef)(cuspec$$1), (0, _ilx.IlxUnionSpec$$get_GenericArgs)(cuspec$$1));
}

function mkMakerName(cuspec$$2, nm$$1) {
  const matchValue = (0, _ilx.IlxUnionSpec$$get_HasHelpers)(cuspec$$2);
  var $target$$11;

  switch (matchValue.tag) {
    case 3:
      $target$$11 = 0;
      break;

    case 1:
    case 0:
      $target$$11 = 1;
      break;

    default:
      $target$$11 = 0;
  }

  switch ($target$$11) {
    case 0:
      {
        return nm$$1;
      }

    case 1:
      {
        return "New" + nm$$1;
      }
  }
}

function mkCasesTypeRef(cuspec$$3) {
  return (0, _ilx.IlxUnionSpec$$get_TypeRef)(cuspec$$3);
}

const cuspecRepr = UnionReprDecisions$00603$$$$002Ector$$34927E1D(function (cuspec$$4) {
  return (0, _ilx.IlxUnionSpec$$get_AlternativesArray)(cuspec$$4);
}, function (cuspec$$5) {
  return (0, _ilx.IlxUnionSpec$$get_IsNullPermitted)(cuspec$$5);
}, function (alt$$8) {
  return (0, _ilx.IlxUnionAlternative$$get_IsNullary)(alt$$8);
}, function (cuspec$$6) {
  return (0, _Util.equals)((0, _ilx.IlxUnionSpec$$get_HasHelpers)(cuspec$$6), new _ilx.IlxUnionHasHelpers(2, "SpecialFSharpListHelpers"));
}, function (cuspec$$7) {
  return (0, _Util.equals)((0, _ilx.IlxUnionSpec$$get_Boxity)(cuspec$$7), new _il.ILBoxity(1, "AsValue"));
}, function (alt$$9) {
  return (0, _ilx.IlxUnionAlternative$$get_Name)(alt$$9);
}, function (cuspec$$8) {
  return (0, _ilx.IlxUnionSpec$$get_DeclaringType)(cuspec$$8);
}, function (tupledArg) {
  return (0, _il.mkILNamedTy)((0, _ilx.IlxUnionSpec$$get_Boxity)(tupledArg[0]), (0, _il.mkILTyRefInTyRef)(mkCasesTypeRef(tupledArg[0]), tupledArg[1]), (0, _ilx.IlxUnionSpec$$get_GenericArgs)(tupledArg[0]));
});
exports.cuspecRepr = cuspecRepr;
const NoTypesGeneratedViaThisReprDecider = (0, _Types.declare)(function NoTypesGeneratedViaThisReprDecider(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.NoTypesGeneratedViaThisReprDecider = NoTypesGeneratedViaThisReprDecider;
const cudefRepr = UnionReprDecisions$00603$$$$002Ector$$34927E1D(function (tupledArg$$1) {
  return tupledArg$$1[1].cudAlternatives;
}, function (tupledArg$$2) {
  return tupledArg$$2[1].cudNullPermitted;
}, function (alt$$10) {
  return (0, _ilx.IlxUnionAlternative$$get_IsNullary)(alt$$10);
}, function (tupledArg$$3) {
  return (0, _Util.equals)(tupledArg$$3[1].cudHasHelpers, new _ilx.IlxUnionHasHelpers(2, "SpecialFSharpListHelpers"));
}, function (tupledArg$$4) {
  return (0, _il.ILTypeDef$$get_IsStruct)(tupledArg$$4[0]);
}, function (alt$$11) {
  return (0, _ilx.IlxUnionAlternative$$get_Name)(alt$$11);
}, function (tupledArg$$5) {
  return new NoTypesGeneratedViaThisReprDecider(0, "NoTypesGeneratedViaThisReprDecider");
}, function (tupledArg$$6) {
  return new NoTypesGeneratedViaThisReprDecider(0, "NoTypesGeneratedViaThisReprDecider");
});
exports.cudefRepr = cudefRepr;

function mkTesterName(nm$$3) {
  return "Is" + nm$$3;
}

const tagPropertyName = "Tag";
exports.tagPropertyName = tagPropertyName;

function mkUnionCaseFieldId(fdef) {
  return [(0, _ilx.IlxUnionField$$get_LowerName)(fdef), (0, _ilx.IlxUnionField$$get_Type)(fdef)];
}

function refToFieldInTy(ty, nm$$4, fldTy) {
  return (0, _il.mkILFieldSpecInTy)(ty, nm$$4, fldTy);
}

function formalTypeArgs(baseTy) {
  return (0, _List.mapIndexed)(function (i, _arg1$$1) {
    return (0, _il.mkILTyvarTy)(i & 0xFFFF);
  }, (0, _il.ILType$$get_GenericArgs)(baseTy));
}

function constFieldName(nm$$5) {
  return "_unique_" + nm$$5;
}

function constFormalFieldTy(baseTy$$1) {
  return (0, _il.mkILNamedTy)((0, _il.ILType$$get_Boxity)(baseTy$$1), (0, _il.ILType$$get_TypeRef)(baseTy$$1), formalTypeArgs(baseTy$$1));
}

function mkConstFieldSpecFromId(baseTy$$2, constFieldId_0, constFieldId_1) {
  const constFieldId = [constFieldId_0, constFieldId_1];
  return refToFieldInTy(baseTy$$2, constFieldId[0], constFieldId[1]);
}

function mkConstFieldSpec(nm$$7, baseTy$$3) {
  return mkConstFieldSpecFromId(baseTy$$3, constFieldName(nm$$7), constFormalFieldTy(baseTy$$3));
}

function tyForAlt(cuspec$$10, alt$$12) {
  return UnionReprDecisions$00603$$TypeForAlternative$$5BDDA1(cuspecRepr, cuspec$$10, alt$$12);
}

function GetILTypeForAlternative(cuspec$$11, alt$$13) {
  return UnionReprDecisions$00603$$TypeForAlternative$$5BDDA1(cuspecRepr, cuspec$$11, (0, _ilx.IlxUnionSpec$$Alternative$$Z524259A4)(cuspec$$11, alt$$13));
}

function mkTagFieldType(ilg, _cuspec) {
  return (0, _il.ILGlobals$$get_typ_Int32)(ilg);
}

function mkTagFieldFormalType(ilg$$1, _cuspec$$1) {
  return (0, _il.ILGlobals$$get_typ_Int32)(ilg$$1);
}

function mkTagFieldId(ilg$$2, cuspec$$12) {
  return ["_tag", mkTagFieldType(ilg$$2, cuspec$$12)];
}

function mkTailOrNullId(baseTy$$4) {
  return ["tail", constFormalFieldTy(baseTy$$4)];
}

function altOfUnionSpec(cuspec$$13, cidx) {
  try {
    return (0, _ilx.IlxUnionSpec$$Alternative$$Z524259A4)(cuspec$$13, cidx);
  } catch (matchValue$$1) {
    throw new Error("alternative " + (0, _Util.int32ToString)(cidx) + " not found");
  }
}

function doesRuntimeTypeDiscriminateUseHelper(avoidHelpers, cuspec$$14, alt$$14) {
  if (!avoidHelpers ? (0, _ilx.IlxUnionAlternative$$get_IsNullary)(alt$$14) : false) {
    return (0, _Util.equals)((0, _ilx.IlxUnionSpec$$get_HasHelpers)(cuspec$$14), new _ilx.IlxUnionHasHelpers(1, "AllHelpers"));
  } else {
    return false;
  }
}

function mkRuntimeTypeDiscriminate(ilg$$3, avoidHelpers$$1, cuspec$$15, alt$$15, altName$$1, altTy) {
  const useHelper = doesRuntimeTypeDiscriminateUseHelper(avoidHelpers$$1, cuspec$$15, alt$$15);

  if (useHelper) {
    const baseTy$$5 = baseTyOfUnionSpec(cuspec$$15);
    return (0, _Types.L)((0, _il.mkNormalCall)((0, _il.mkILNonGenericInstanceMethSpecInTy)(baseTy$$5, "get_" + mkTesterName(altName$$1), (0, _Types.L)(), (0, _il.ILGlobals$$get_typ_Bool)(ilg$$3))), (0, _Types.L)());
  } else {
    return (0, _Types.L)(new _il.ILInstr(66, "I_isinst", altTy), (0, _Types.L)(new _il.ILInstr(29, "AI_ldnull"), (0, _Types.L)(new _il.ILInstr(8, "AI_cgt_un"), (0, _Types.L)())));
  }
}

function mkRuntimeTypeDiscriminateThen(ilg$$4, avoidHelpers$$2, cuspec$$16, alt$$16, altName$$2, altTy$$1, after) {
  const useHelper$$1 = doesRuntimeTypeDiscriminateUseHelper(avoidHelpers$$2, cuspec$$16, alt$$16);
  var $target$$12;

  if (after.tag === 45) {
    if (after.fields[0].tag === 10) {
      if (!useHelper$$1) {
        $target$$12 = 0;
      } else {
        $target$$12 = 1;
      }
    } else if (after.fields[0].tag === 11) {
      if (!useHelper$$1) {
        $target$$12 = 0;
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
        return (0, _Types.L)(new _il.ILInstr(66, "I_isinst", altTy$$1), (0, _Types.L)(after, (0, _Types.L)()));
      }

    case 1:
      {
        return (0, _List.append)(mkRuntimeTypeDiscriminate(ilg$$4, avoidHelpers$$2, cuspec$$16, alt$$16, altName$$2, altTy$$1), (0, _Types.L)(after, (0, _Types.L)()));
      }
  }
}

function mkGetTagFromField(ilg$$5, cuspec$$17, baseTy$$6) {
  var tupledArg$$7;
  return (0, _Types.L)((0, _il.mkNormalLdfld)((tupledArg$$7 = mkTagFieldId(ilg$$5, cuspec$$17), refToFieldInTy(baseTy$$6, tupledArg$$7[0], tupledArg$$7[1]))), (0, _Types.L)());
}

function adjustFieldName(hasHelpers, nm$$9) {
  const matchValue$$2 = [hasHelpers, nm$$9];
  var $target$$13;

  if (matchValue$$2[0].tag === 2) {
    if (matchValue$$2[1] === "Head") {
      $target$$13 = 0;
    } else if (matchValue$$2[1] === "Tail") {
      $target$$13 = 1;
    } else {
      $target$$13 = 2;
    }
  } else {
    $target$$13 = 2;
  }

  switch ($target$$13) {
    case 0:
      {
        return "HeadOrDefault";
      }

    case 1:
      {
        return "TailOrNull";
      }

    case 2:
      {
        return nm$$9;
      }
  }
}

function mkLdData(avoidHelpers$$3, cuspec$$18, cidx$$1, fidx) {
  const alt$$17 = altOfUnionSpec(cuspec$$18, cidx$$1);
  const altTy$$2 = tyForAlt(cuspec$$18, alt$$17);
  const fieldDef = (0, _ilx.IlxUnionAlternative$$FieldDef$$Z524259A4)(alt$$17, fidx);

  if (avoidHelpers$$3) {
    return (0, _Types.L)((0, _il.mkNormalLdfld)((0, _il.mkILFieldSpecInTy)(altTy$$2, (0, _ilx.IlxUnionField$$get_LowerName)(fieldDef), (0, _ilx.IlxUnionField$$get_Type)(fieldDef))), (0, _Types.L)());
  } else {
    return (0, _Types.L)((0, _il.mkNormalCall)((0, _il.mkILNonGenericInstanceMethSpecInTy)(altTy$$2, "get_" + adjustFieldName((0, _ilx.IlxUnionSpec$$get_HasHelpers)(cuspec$$18), (0, _ilx.IlxUnionField$$get_Name)(fieldDef)), (0, _Types.L)(), (0, _ilx.IlxUnionField$$get_Type)(fieldDef))), (0, _Types.L)());
  }
}

function mkLdDataAddr(avoidHelpers$$4, cuspec$$19, cidx$$2, fidx$$1) {
  const alt$$18 = altOfUnionSpec(cuspec$$19, cidx$$2);
  const altTy$$3 = tyForAlt(cuspec$$19, alt$$18);
  const fieldDef$$1 = (0, _ilx.IlxUnionAlternative$$FieldDef$$Z524259A4)(alt$$18, fidx$$1);

  if (avoidHelpers$$4) {
    return (0, _Types.L)((0, _il.mkNormalLdflda)((0, _il.mkILFieldSpecInTy)(altTy$$3, (0, _ilx.IlxUnionField$$get_LowerName)(fieldDef$$1), (0, _ilx.IlxUnionField$$get_Type)(fieldDef$$1))), (0, _Types.L)());
  } else {
    throw new Error((0, _String.toText)((0, _String.printf)("can't load address using helpers, for fieldDef %s"))((0, _ilx.IlxUnionField$$get_LowerName)(fieldDef$$1)));
  }
}

function mkGetTailOrNull(avoidHelpers$$5, cuspec$$20) {
  return mkLdData(avoidHelpers$$5, cuspec$$20, 1, 1);
}

function mkGetTagFromHelpers(ilg$$6, cuspec$$21) {
  const baseTy$$7 = baseTyOfUnionSpec(cuspec$$21);

  if (UnionReprDecisions$00603$$RepresentOneAlternativeAsNull$$2B595(cuspecRepr, cuspec$$21)) {
    return (0, _il.mkNormalCall)((0, _il.mkILNonGenericStaticMethSpecInTy)(baseTy$$7, "Get" + tagPropertyName, (0, _Types.L)(baseTy$$7, (0, _Types.L)()), mkTagFieldFormalType(ilg$$6, cuspec$$21)));
  } else {
    return (0, _il.mkNormalCall)((0, _il.mkILNonGenericInstanceMethSpecInTy)(baseTy$$7, "get_" + tagPropertyName, (0, _Types.L)(), mkTagFieldFormalType(ilg$$6, cuspec$$21)));
  }
}

function mkGetTag(ilg$$7, cuspec$$22) {
  const matchValue$$3 = (0, _ilx.IlxUnionSpec$$get_HasHelpers)(cuspec$$22);

  if (matchValue$$3.tag === 1) {
    return (0, _Types.L)(mkGetTagFromHelpers(ilg$$7, cuspec$$22), (0, _Types.L)());
  } else {
    const _hasHelpers = matchValue$$3;
    return mkGetTagFromField(ilg$$7, cuspec$$22, baseTyOfUnionSpec(cuspec$$22));
  }
}

function mkCeqThen(after$$1) {
  var $target$$14, a, a$$1;

  if (after$$1.tag === 45) {
    if (after$$1.fields[0].tag === 10) {
      $target$$14 = 0;
      a = after$$1.fields[1];
    } else if (after$$1.fields[0].tag === 11) {
      $target$$14 = 1;
      a$$1 = after$$1.fields[1];
    } else {
      $target$$14 = 2;
    }
  } else {
    $target$$14 = 2;
  }

  switch ($target$$14) {
    case 0:
      {
        return (0, _Types.L)(new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(9, "BI_bne_un"), a), (0, _Types.L)());
      }

    case 1:
      {
        return (0, _Types.L)(new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(0, "BI_beq"), a$$1), (0, _Types.L)());
      }

    case 2:
      {
        return (0, _Types.L)(new _il.ILInstr(6, "AI_ceq"), (0, _Types.L)(after$$1, (0, _Types.L)()));
      }
  }
}

function mkTagDiscriminate(ilg$$8, cuspec$$23, _baseTy, cidx$$3) {
  return (0, _List.append)(mkGetTag(ilg$$8, cuspec$$23), (0, _Types.L)((0, _il.mkLdcInt32)(cidx$$3), (0, _Types.L)(new _il.ILInstr(6, "AI_ceq"), (0, _Types.L)())));
}

function mkTagDiscriminateThen(ilg$$9, cuspec$$24, cidx$$4, after$$2) {
  return (0, _List.append)(mkGetTag(ilg$$9, cuspec$$24), (0, _List.append)((0, _Types.L)((0, _il.mkLdcInt32)(cidx$$4), (0, _Types.L)()), mkCeqThen(after$$2)));
}

function extraTysAndInstrsForStructCtor(ilg$$10, cidx$$5) {
  switch (cidx$$5) {
    case 0:
      {
        return [(0, _Types.L)((0, _il.ILGlobals$$get_typ_Bool)(ilg$$10), (0, _Types.L)()), (0, _Types.L)((0, _il.mkLdcInt32)(0), (0, _Types.L)())];
      }

    case 1:
      {
        return [(0, _Types.L)((0, _il.ILGlobals$$get_typ_Byte)(ilg$$10), (0, _Types.L)()), (0, _Types.L)((0, _il.mkLdcInt32)(0), (0, _Types.L)())];
      }

    case 2:
      {
        return [(0, _Types.L)((0, _il.ILGlobals$$get_typ_SByte)(ilg$$10), (0, _Types.L)()), (0, _Types.L)((0, _il.mkLdcInt32)(0), (0, _Types.L)())];
      }

    case 3:
      {
        return [(0, _Types.L)((0, _il.ILGlobals$$get_typ_Char)(ilg$$10), (0, _Types.L)()), (0, _Types.L)((0, _il.mkLdcInt32)(0), (0, _Types.L)())];
      }

    case 4:
      {
        return [(0, _Types.L)((0, _il.ILGlobals$$get_typ_Int16)(ilg$$10), (0, _Types.L)()), (0, _Types.L)((0, _il.mkLdcInt32)(0), (0, _Types.L)())];
      }

    case 5:
      {
        return [(0, _Types.L)((0, _il.ILGlobals$$get_typ_Int32)(ilg$$10), (0, _Types.L)()), (0, _Types.L)((0, _il.mkLdcInt32)(0), (0, _Types.L)())];
      }

    case 6:
      {
        return [(0, _Types.L)((0, _il.ILGlobals$$get_typ_UInt16)(ilg$$10), (0, _Types.L)()), (0, _Types.L)((0, _il.mkLdcInt32)(0), (0, _Types.L)())];
      }

    default:
      {
        const patternInput = extraTysAndInstrsForStructCtor(ilg$$10, cidx$$5 - 7);
        return [(0, _Types.L)((0, _il.ILGlobals$$get_typ_UInt32)(ilg$$10), patternInput[0]), (0, _Types.L)((0, _il.mkLdcInt32)(0), patternInput[1])];
      }
  }
}

function takesExtraParams(alts$$4) {
  if (alts$$4.length > 1) {
    if (alts$$4.some(function predicate$$2(d) {
      return (0, _ilx.IlxUnionAlternative$$get_FieldDefs)(d).length > 0;
    })) {
      return true;
    } else {
      return (0, _Array.countBy)(function projection(d$$1) {
        return (0, _ilx.IlxUnionAlternative$$get_FieldDefs)(d$$1).length;
      }, alts$$4, {
        Equals($x$$4, $y$$5) {
          return $x$$4 === $y$$5;
        },

        GetHashCode: _Util.structuralHash
      }).length !== alts$$4.length;
    }
  } else {
    return false;
  }
}

function convNewDataInstrInternal(ilg$$11, cuspec$$25, cidx$$6) {
  const alt$$19 = altOfUnionSpec(cuspec$$25, cidx$$6);
  const altTy$$4 = tyForAlt(cuspec$$25, alt$$19);
  const altName$$3 = (0, _ilx.IlxUnionAlternative$$get_Name)(alt$$19);

  if (UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(cuspecRepr, cuspec$$25, alt$$19)) {
    return (0, _Types.L)(new _il.ILInstr(29, "AI_ldnull"), (0, _Types.L)());
  } else if (UnionReprDecisions$00603$$MaintainPossiblyUniqueConstantFieldForAlternative$$5BDDA1(cuspecRepr, cuspec$$25, alt$$19)) {
    const baseTy$$8 = baseTyOfUnionSpec(cuspec$$25);
    return (0, _Types.L)(new _il.ILInstr(59, "I_ldsfld", new _il.ILVolatility(1, "Nonvolatile"), mkConstFieldSpec(altName$$3, baseTy$$8)), (0, _Types.L)());
  } else if (UnionReprDecisions$00603$$RepresentAlternativeAsFreshInstancesOfRootClass$$5BDDA1(cuspecRepr, cuspec$$25, alt$$19)) {
    const baseTy$$9 = baseTyOfUnionSpec(cuspec$$25);
    const patternInput$$1 = UnionReprDecisions$00603$$DiscriminationTechnique$$2B595(cuspecRepr, cuspec$$25).tag === 3 ? [(0, _Types.L)((0, _il.mkLdcInt32)(cidx$$6), (0, _Types.L)()), (0, _Types.L)(mkTagFieldType(ilg$$11, cuspec$$25), (0, _Types.L)())] : [(0, _Types.L)(), (0, _Types.L)()];
    const ctorFieldTys = (0, _Array.toList)((0, _ilx.IlxUnionAlternative$$get_FieldTypes)(alt$$19));
    return (0, _List.append)(patternInput$$1[0], (0, _Types.L)((0, _il.mkNormalNewobj)((0, _il.mkILCtorMethSpecForTy)(baseTy$$9, (0, _List.append)(ctorFieldTys, patternInput$$1[1]))), (0, _Types.L)()));
  } else if (UnionReprDecisions$00603$$RepresentAlternativeAsStructValue$$2B595(cuspecRepr, cuspec$$25)) {
    const baseTy$$10 = baseTyOfUnionSpec(cuspec$$25);
    const patternInput$$2 = UnionReprDecisions$00603$$DiscriminationTechnique$$2B595(cuspecRepr, cuspec$$25).tag === 3 ? [(0, _Types.L)((0, _il.mkLdcInt32)(cidx$$6), (0, _Types.L)()), (0, _Types.L)(mkTagFieldType(ilg$$11, cuspec$$25), (0, _Types.L)())] : [(0, _Types.L)(), (0, _Types.L)()];
    const ctorFieldTys$$1 = (0, _Array.toList)((0, _ilx.IlxUnionAlternative$$get_FieldTypes)(alt$$19));
    const patternInput$$3 = takesExtraParams((0, _ilx.IlxUnionSpec$$get_AlternativesArray)(cuspec$$25)) ? extraTysAndInstrsForStructCtor(ilg$$11, cidx$$6) : [(0, _Types.L)(), (0, _Types.L)()];
    return (0, _List.append)(patternInput$$2[0], (0, _List.append)(patternInput$$3[1], (0, _Types.L)((0, _il.mkNormalNewobj)((0, _il.mkILCtorMethSpecForTy)(baseTy$$10, (0, _List.append)(ctorFieldTys$$1, (0, _List.append)(patternInput$$2[1], patternInput$$3[0])))), (0, _Types.L)())));
  } else {
    return (0, _Types.L)((0, _il.mkNormalNewobj)((0, _il.mkILCtorMethSpecForTy)(altTy$$4, (0, _Array.toList)((0, _ilx.IlxUnionAlternative$$get_FieldTypes)(alt$$19)))), (0, _Types.L)());
  }
}

function mkStData(cuspec$$26, cidx$$7, fidx$$2) {
  const alt$$20 = altOfUnionSpec(cuspec$$26, cidx$$7);
  const altTy$$5 = tyForAlt(cuspec$$26, alt$$20);
  const fieldDef$$2 = (0, _ilx.IlxUnionAlternative$$FieldDef$$Z524259A4)(alt$$20, fidx$$2);
  return (0, _Types.L)((0, _il.mkNormalStfld)((0, _il.mkILFieldSpecInTy)(altTy$$5, (0, _ilx.IlxUnionField$$get_LowerName)(fieldDef$$2), (0, _ilx.IlxUnionField$$get_Type)(fieldDef$$2))), (0, _Types.L)());
}

function mkNewData(ilg$$12, cuspec$$27, cidx$$8) {
  const alt$$21 = altOfUnionSpec(cuspec$$27, cidx$$8);
  const altName$$4 = (0, _ilx.IlxUnionAlternative$$get_Name)(alt$$21);
  const baseTy$$11 = baseTyOfUnionSpec(cuspec$$27);
  const matchValue$$6 = (0, _ilx.IlxUnionSpec$$get_HasHelpers)(cuspec$$27);
  var $target$$15;

  switch (matchValue$$6.tag) {
    case 2:
    case 3:
      $target$$15 = 0;
      break;

    case 0:
      $target$$15 = 1;
      break;

    default:
      $target$$15 = 0;
  }

  switch ($target$$15) {
    case 0:
      {
        if (UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(cuspecRepr, cuspec$$27, alt$$21)) {
          return (0, _Types.L)(new _il.ILInstr(29, "AI_ldnull"), (0, _Types.L)());
        } else if ((0, _ilx.IlxUnionAlternative$$get_IsNullary)(alt$$21)) {
          return (0, _Types.L)((0, _il.mkNormalCall)((0, _il.mkILNonGenericStaticMethSpecInTy)(baseTy$$11, "get_" + altName$$4, (0, _Types.L)(), constFormalFieldTy(baseTy$$11))), (0, _Types.L)());
        } else {
          return (0, _Types.L)((0, _il.mkNormalCall)((0, _il.mkILNonGenericStaticMethSpecInTy)(baseTy$$11, mkMakerName(cuspec$$27, altName$$4), (0, _Array.toList)((0, _ilx.IlxUnionAlternative$$get_FieldTypes)(alt$$21)), constFormalFieldTy(baseTy$$11))), (0, _Types.L)());
        }
      }

    case 1:
      {
        if (UnionReprDecisions$00603$$MaintainPossiblyUniqueConstantFieldForAlternative$$5BDDA1(cuspecRepr, cuspec$$27, alt$$21)) {
          return (0, _Types.L)((0, _il.mkNormalCall)((0, _il.mkILNonGenericStaticMethSpecInTy)(baseTy$$11, "get_" + altName$$4, (0, _Types.L)(), constFormalFieldTy(baseTy$$11))), (0, _Types.L)());
        } else {
          return convNewDataInstrInternal(ilg$$12, cuspec$$27, cidx$$8);
        }
      }
  }
}

function mkIsData(ilg$$13, avoidHelpers$$6, cuspec$$28, cidx$$9) {
  const alt$$22 = altOfUnionSpec(cuspec$$28, cidx$$9);
  const altTy$$6 = tyForAlt(cuspec$$28, alt$$22);
  const altName$$5 = (0, _ilx.IlxUnionAlternative$$get_Name)(alt$$22);

  if (UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(cuspecRepr, cuspec$$28, alt$$22)) {
    return (0, _Types.L)(new _il.ILInstr(29, "AI_ldnull"), (0, _Types.L)(new _il.ILInstr(6, "AI_ceq"), (0, _Types.L)()));
  } else if (UnionReprDecisions$00603$$RepresentSingleNonNullaryAlternativeAsInstancesOfRootClassAndAnyOtherAlternativesAsNull$$5BDDA1(cuspecRepr, cuspec$$28, alt$$22)) {
    return (0, _Types.L)(new _il.ILInstr(29, "AI_ldnull"), (0, _Types.L)(new _il.ILInstr(8, "AI_cgt_un"), (0, _Types.L)()));
  } else {
    const matchValue$$7 = UnionReprDecisions$00603$$DiscriminationTechnique$$2B595(cuspecRepr, cuspec$$28);

    switch (matchValue$$7.tag) {
      case 1:
        {
          return mkRuntimeTypeDiscriminate(ilg$$13, avoidHelpers$$6, cuspec$$28, alt$$22, altName$$5, altTy$$6);
        }

      case 3:
        {
          return mkTagDiscriminate(ilg$$13, cuspec$$28, baseTyOfUnionSpec(cuspec$$28), cidx$$9);
        }

      case 0:
        {
          switch (cidx$$9) {
            case 0:
              {
                return (0, _List.append)(mkGetTailOrNull(avoidHelpers$$6, cuspec$$28), (0, _Types.L)(new _il.ILInstr(29, "AI_ldnull"), (0, _Types.L)(new _il.ILInstr(6, "AI_ceq"), (0, _Types.L)())));
              }

            case 1:
              {
                return (0, _List.append)(mkGetTailOrNull(avoidHelpers$$6, cuspec$$28), (0, _Types.L)(new _il.ILInstr(29, "AI_ldnull"), (0, _Types.L)(new _il.ILInstr(8, "AI_cgt_un"), (0, _Types.L)())));
              }

            default:
              {
                throw new Error("unexpected");
              }
          }
        }

      default:
        {
          return (0, _Types.L)((0, _il.mkLdcInt32)(1), (0, _Types.L)());
        }
    }
  }
}

function genWith(g) {
  const instrs$$3 = [];
  const lab2pc = new Map([]);
  g({
    CodeLabel(m) {
      return m;
    },

    GenerateDelayMark() {
      return (0, _il.generateCodeLabel)();
    },

    GenLocal(ilty) {
      throw new Error("not needed");
    },

    SetMarkToHere(m$$1) {
      lab2pc.set(m$$1, (0, _Util.count)(instrs$$3));
    },

    EmitInstr(x) {
      instrs$$3.push(x);
    },

    EmitInstrs(xs) {
      const cg = this;
      (0, _Seq.iterate)(function (i$$1) {
        cg.EmitInstr(i$$1);
      }, xs);
    },

    MkInvalidCastExnNewobj() {
      throw new Error("not needed");
    }

  });
  return new _il.ILCode(lab2pc, instrs$$3.slice(), (0, _Types.L)(), (0, _Types.L)());
}

function mkBrIsData(ilg$$14, sense, avoidHelpers$$7, cuspec$$29, cidx$$10, tg) {
  const neg = sense ? new _il.ILComparisonInstr(10, "BI_brfalse") : new _il.ILComparisonInstr(11, "BI_brtrue");
  const pos = sense ? new _il.ILComparisonInstr(11, "BI_brtrue") : new _il.ILComparisonInstr(10, "BI_brfalse");
  const alt$$23 = altOfUnionSpec(cuspec$$29, cidx$$10);
  const altTy$$7 = tyForAlt(cuspec$$29, alt$$23);
  const altName$$6 = (0, _ilx.IlxUnionAlternative$$get_Name)(alt$$23);

  if (UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(cuspecRepr, cuspec$$29, alt$$23)) {
    return (0, _Types.L)(new _il.ILInstr(45, "I_brcmp", neg, tg), (0, _Types.L)());
  } else if (UnionReprDecisions$00603$$RepresentSingleNonNullaryAlternativeAsInstancesOfRootClassAndAnyOtherAlternativesAsNull$$5BDDA1(cuspecRepr, cuspec$$29, alt$$23)) {
    return (0, _Types.L)(new _il.ILInstr(45, "I_brcmp", pos, tg), (0, _Types.L)());
  } else {
    const matchValue$$8 = UnionReprDecisions$00603$$DiscriminationTechnique$$2B595(cuspecRepr, cuspec$$29);

    switch (matchValue$$8.tag) {
      case 1:
        {
          return mkRuntimeTypeDiscriminateThen(ilg$$14, avoidHelpers$$7, cuspec$$29, alt$$23, altName$$6, altTy$$7, new _il.ILInstr(45, "I_brcmp", pos, tg));
        }

      case 3:
        {
          return mkTagDiscriminateThen(ilg$$14, cuspec$$29, cidx$$10, new _il.ILInstr(45, "I_brcmp", pos, tg));
        }

      case 0:
        {
          switch (cidx$$10) {
            case 0:
              {
                return (0, _List.append)(mkGetTailOrNull(avoidHelpers$$7, cuspec$$29), (0, _Types.L)(new _il.ILInstr(45, "I_brcmp", neg, tg), (0, _Types.L)()));
              }

            case 1:
              {
                return (0, _List.append)(mkGetTailOrNull(avoidHelpers$$7, cuspec$$29), (0, _Types.L)(new _il.ILInstr(45, "I_brcmp", pos, tg), (0, _Types.L)()));
              }

            default:
              {
                throw new Error("unexpected");
              }
          }
        }

      default:
        {
          return (0, _Types.L)();
        }
    }
  }
}

function emitLdDataTagPrim(ilg$$15, ldOpt, cg$$1, avoidHelpers$$8, cuspec$$30) {
  const matchValue$$9 = (0, _ilx.IlxUnionSpec$$get_HasHelpers)(cuspec$$30);
  var $target$$17;

  if (matchValue$$9.tag === 2) {
    if (!avoidHelpers$$8) {
      $target$$17 = 0;
    } else {
      $target$$17 = 1;
    }
  } else if (matchValue$$9.tag === 1) {
    if (!avoidHelpers$$8) {
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
        (0, _Seq.iterate)(function action(arg00) {
          cg$$1.EmitInstr(arg00);
        }, (0, _Option.defaultArg)(ldOpt, [], function ($x$$6) {
          return [$x$$6];
        }));
        cg$$1.EmitInstr(mkGetTagFromHelpers(ilg$$15, cuspec$$30));
        break;
      }

    case 1:
      {
        const alts$$5 = (0, _ilx.IlxUnionSpec$$get_Alternatives)(cuspec$$30);
        const matchValue$$10 = UnionReprDecisions$00603$$DiscriminationTechnique$$2B595(cuspecRepr, cuspec$$30);

        switch (matchValue$$10.tag) {
          case 3:
            {
              const baseTy$$12 = baseTyOfUnionSpec(cuspec$$30);
              (0, _Seq.iterate)(function action$$2(arg00$$2) {
                cg$$1.EmitInstr(arg00$$2);
              }, (0, _Option.defaultArg)(ldOpt, [], function ($x$$8) {
                return [$x$$8];
              }));
              cg$$1.EmitInstrs(mkGetTagFromField(ilg$$15, cuspec$$30, baseTy$$12));
              break;
            }

          case 2:
            {
              (0, _Seq.iterate)(function action$$3(arg00$$3) {
                cg$$1.EmitInstr(arg00$$3);
              }, (0, _Option.defaultArg)(ldOpt, [], function ($x$$9) {
                return [$x$$9];
              }));
              cg$$1.EmitInstrs((0, _Types.L)(new _il.ILInstr(31, "AI_pop"), (0, _Types.L)((0, _il.mkLdcInt32)(0), (0, _Types.L)())));
              break;
            }

          case 1:
            {
              const baseTy$$13 = baseTyOfUnionSpec(cuspec$$30);
              let ld;

              if (ldOpt != null) {
                const i$$2 = ldOpt;
                ld = i$$2;
              } else {
                const locn = cg$$1.GenLocal(baseTy$$13);
                cg$$1.EmitInstr((0, _il.mkStloc)(locn));
                ld = (0, _il.mkLdloc)(locn);
              }

              const outlab = cg$$1.GenerateDelayMark();

              const emitCase = function emitCase(cidx$$11) {
                const alt$$24 = altOfUnionSpec(cuspec$$30, cidx$$11);
                const internalLab = cg$$1.GenerateDelayMark();
                const failLab = cg$$1.GenerateDelayMark();
                const cmpNull = UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(cuspecRepr, cuspec$$30, alt$$24);
                const test = new _il.ILInstr(45, "I_brcmp", cmpNull ? new _il.ILComparisonInstr(11, "BI_brtrue") : new _il.ILComparisonInstr(10, "BI_brfalse"), cg$$1.CodeLabel(failLab));
                let testBlock;

                if (cmpNull ? true : UnionReprDecisions$00603$$RepresentAlternativeAsFreshInstancesOfRootClass$$5BDDA1(cuspecRepr, cuspec$$30, alt$$24)) {
                  testBlock = (0, _Types.L)(test, (0, _Types.L)());
                } else {
                  const altName$$7 = (0, _ilx.IlxUnionAlternative$$get_Name)(alt$$24);
                  const altTy$$8 = tyForAlt(cuspec$$30, alt$$24);
                  testBlock = mkRuntimeTypeDiscriminateThen(ilg$$15, avoidHelpers$$8, cuspec$$30, alt$$24, altName$$7, altTy$$8, test);
                }

                cg$$1.EmitInstrs((0, _Types.L)(ld, testBlock));
                cg$$1.SetMarkToHere(internalLab);
                cg$$1.EmitInstrs((0, _Types.L)((0, _il.mkLdcInt32)(cidx$$11), (0, _Types.L)(new _il.ILInstr(43, "I_br", cg$$1.CodeLabel(outlab)), (0, _Types.L)())));
                cg$$1.SetMarkToHere(failLab);
              };

              (0, _Seq.iterate)(function (n) {
                emitCase(n);
              }, (0, _Seq.rangeNumber)((0, _List.length)(alts$$5) - 1, -1, 1));
              cg$$1.EmitInstr((0, _il.mkLdcInt32)(0));
              cg$$1.SetMarkToHere(outlab);
              break;
            }

          default:
            {
              (0, _Seq.iterate)(function action$$1(arg00$$1) {
                cg$$1.EmitInstr(arg00$$1);
              }, (0, _Option.defaultArg)(ldOpt, [], function ($x$$7) {
                return [$x$$7];
              }));
              cg$$1.EmitInstrs((0, _List.append)(mkGetTailOrNull(avoidHelpers$$8, cuspec$$30), (0, _Types.L)(new _il.ILInstr(29, "AI_ldnull"), (0, _Types.L)(new _il.ILInstr(8, "AI_cgt_un"), (0, _Types.L)()))));
            }
        }

        break;
      }
  }
}

function emitLdDataTag(ilg$$16, cg$$2, avoidHelpers$$9, cuspec$$31) {
  emitLdDataTagPrim(ilg$$16, null, cg$$2, avoidHelpers$$9, cuspec$$31);
}

function emitCastData(ilg$$17, cg$$3, canfail, avoidHelpers$$10, cuspec$$32, cidx$$12) {
  const alt$$25 = altOfUnionSpec(cuspec$$32, cidx$$12);

  if (UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(cuspecRepr, cuspec$$32, alt$$25)) {
    if (canfail) {
      const outlab$$1 = cg$$3.GenerateDelayMark();
      const internal1 = cg$$3.GenerateDelayMark();
      cg$$3.EmitInstrs((0, _Types.L)(new _il.ILInstr(30, "AI_dup"), (0, _Types.L)(new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(10, "BI_brfalse"), cg$$3.CodeLabel(outlab$$1)), (0, _Types.L)())));
      cg$$3.SetMarkToHere(internal1);
      cg$$3.EmitInstrs((0, _Types.L)(cg$$3.MkInvalidCastExnNewobj(), (0, _Types.L)(new _il.ILInstr(54, "I_throw"), (0, _Types.L)())));
      cg$$3.SetMarkToHere(outlab$$1);
    }
  } else if (UnionReprDecisions$00603$$Flatten$$2B595(cuspecRepr, cuspec$$32)) {
    if (canfail) {
      const outlab$$2 = cg$$3.GenerateDelayMark();
      const internal1$$1 = cg$$3.GenerateDelayMark();
      cg$$3.EmitInstrs((0, _Types.L)(new _il.ILInstr(30, "AI_dup"), (0, _Types.L)()));
      emitLdDataTagPrim(ilg$$17, null, cg$$3, avoidHelpers$$10, cuspec$$32);
      cg$$3.EmitInstrs((0, _Types.L)((0, _il.mkLdcInt32)(cidx$$12), (0, _Types.L)(new _il.ILInstr(45, "I_brcmp", new _il.ILComparisonInstr(0, "BI_beq"), cg$$3.CodeLabel(outlab$$2)), (0, _Types.L)())));
      cg$$3.SetMarkToHere(internal1$$1);
      cg$$3.EmitInstrs((0, _Types.L)(cg$$3.MkInvalidCastExnNewobj(), (0, _Types.L)(new _il.ILInstr(54, "I_throw"), (0, _Types.L)())));
      cg$$3.SetMarkToHere(outlab$$2);
    }
  } else if (UnionReprDecisions$00603$$OptimizeAlternativeToRootClass$$5BDDA1(cuspecRepr, cuspec$$32, alt$$25)) {} else {
    const altTy$$9 = tyForAlt(cuspec$$32, alt$$25);
    cg$$3.EmitInstr(new _il.ILInstr(67, "I_castclass", altTy$$9));
  }
}

function emitDataSwitch(ilg$$18, cg$$4, avoidHelpers$$11, cuspec$$33, cases) {
  const baseTy$$14 = baseTyOfUnionSpec(cuspec$$33);
  const matchValue$$11 = UnionReprDecisions$00603$$DiscriminationTechnique$$2B595(cuspecRepr, cuspec$$33);

  switch (matchValue$$11.tag) {
    case 3:
      {
        if (cases.tail == null) {
          cg$$4.EmitInstrs((0, _Types.L)(new _il.ILInstr(31, "AI_pop"), (0, _Types.L)()));
        } else {
          const dict = new Map([]);
          (0, _Seq.iterate)(function (forLoopVar$$1) {
            dict.set(forLoopVar$$1[0], forLoopVar$$1[1]);
          }, cases);
          const failLab$$2 = cg$$4.GenerateDelayMark();

          const emitCase$$1 = function emitCase$$1(i$$4, _arg1$$2) {
            const patternInput$$4 = (0, _Util.tryGetValue)(dict, i$$4, 0);

            if (patternInput$$4[0]) {
              return patternInput$$4[1] | 0;
            } else {
              return cg$$4.CodeLabel(failLab$$2) | 0;
            }
          };

          const dests = (0, _Array.mapIndexed)(emitCase$$1, (0, _ilx.IlxUnionSpec$$get_AlternativesArray)(cuspec$$33), Int32Array);
          cg$$4.EmitInstrs(mkGetTag(ilg$$18, cuspec$$33));
          cg$$4.EmitInstr(new _il.ILInstr(46, "I_switch", (0, _Array.toList)(dests)));
          cg$$4.SetMarkToHere(failLab$$2);
        }

        break;
      }

    case 2:
      {
        var $target$$18, tg$$2;

        if (cases.tail == null) {
          $target$$18 = 1;
        } else if (cases.head[0] === 0) {
          if (cases.tail.tail == null) {
            $target$$18 = 0;
            tg$$2 = cases.head[1];
          } else {
            $target$$18 = 2;
          }
        } else {
          $target$$18 = 2;
        }

        switch ($target$$18) {
          case 0:
            {
              cg$$4.EmitInstrs((0, _Types.L)(new _il.ILInstr(31, "AI_pop"), (0, _Types.L)(new _il.ILInstr(43, "I_br", tg$$2), (0, _Types.L)())));
              break;
            }

          case 1:
            {
              cg$$4.EmitInstrs((0, _Types.L)(new _il.ILInstr(31, "AI_pop"), (0, _Types.L)()));
              break;
            }

          case 2:
            {
              throw new Error("unexpected: strange switch on single-case unions should not be present");
              break;
            }
        }

        break;
      }

    case 0:
      {
        throw new Error("unexpected: switches on lists should have been eliminated to brisdata tests");
        break;
      }

    default:
      {
        const locn$$1 = cg$$4.GenLocal(baseTy$$14);
        cg$$4.EmitInstr((0, _il.mkStloc)(locn$$1));
        (0, _Seq.iterate)(function (forLoopVar) {
          const alt$$26 = altOfUnionSpec(cuspec$$33, forLoopVar[0]);
          const altTy$$10 = tyForAlt(cuspec$$33, alt$$26);
          const altName$$8 = (0, _ilx.IlxUnionAlternative$$get_Name)(alt$$26);
          const failLab$$1 = cg$$4.GenerateDelayMark();
          const cmpNull$$1 = UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(cuspecRepr, cuspec$$33, alt$$26);
          cg$$4.EmitInstr((0, _il.mkLdloc)(locn$$1));
          const testInstr = new _il.ILInstr(45, "I_brcmp", cmpNull$$1 ? new _il.ILComparisonInstr(10, "BI_brfalse") : new _il.ILComparisonInstr(11, "BI_brtrue"), forLoopVar[1]);

          if (cmpNull$$1 ? true : UnionReprDecisions$00603$$RepresentAlternativeAsFreshInstancesOfRootClass$$5BDDA1(cuspecRepr, cuspec$$33, alt$$26)) {
            cg$$4.EmitInstr(testInstr);
          } else {
            cg$$4.EmitInstrs(mkRuntimeTypeDiscriminateThen(ilg$$18, avoidHelpers$$11, cuspec$$33, alt$$26, altName$$8, altTy$$10, testInstr));
          }

          cg$$4.SetMarkToHere(failLab$$1);
        }, cases);
      }
  }
}

function mkMethodsAndPropertiesForFields(addMethodGeneratedAttrs, addPropertyGeneratedAttrs, access, attr, hasHelpers$$1, ilTy, fields) {
  const basicProps = (0, _Array.toList)((0, _Array.map)(function mapping(field) {
    return addPropertyGeneratedAttrs((0, _il.ILPropertyDef$$$Create$$Z7C56322)(adjustFieldName(hasHelpers$$1, (0, _ilx.IlxUnionField$$get_Name)(field)), 0, null, (0, _il.mkILMethRef)((0, _il.ILType$$get_TypeRef)(ilTy), (0, _il.ILCallingConv$$$get_Instance)(), "get_" + adjustFieldName(hasHelpers$$1, (0, _ilx.IlxUnionField$$get_Name)(field)), 0, (0, _Types.L)(), (0, _ilx.IlxUnionField$$get_Type)(field)), new _il.ILThisConvention(0, "Instance"), (0, _ilx.IlxUnionField$$get_Type)(field), null, (0, _Types.L)(), (0, _il.ILFieldDef$$get_CustomAttrs)((0, _ilx.IlxUnionField$$get_ILField)(field))));
  }, fields, Array));
  const basicMethods = (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (field$$1) {
      const fspec = (0, _il.mkILFieldSpecInTy)(ilTy, (0, _ilx.IlxUnionField$$get_LowerName)(field$$1), (0, _ilx.IlxUnionField$$get_Type)(field$$1));
      return (0, _Seq.singleton)(addMethodGeneratedAttrs((0, _il.mkILNonGenericInstanceMethod)("get_" + adjustFieldName(hasHelpers$$1, (0, _ilx.IlxUnionField$$get_Name)(field$$1)), access, (0, _Types.L)(), (0, _il.mkILReturn)((0, _ilx.IlxUnionField$$get_Type)(field$$1)), (0, _il.mkMethodBody)(true, (0, _Types.L)(), 2, (0, _il.nonBranchingInstrsToCode)((0, _Types.L)((0, _il.mkLdarg)(0), (0, _Types.L)((0, _il.mkNormalLdfld)(fspec), (0, _Types.L)()))), attr))));
    }, fields);
  }));
  return [basicProps, basicMethods];
}

function convAlternativeDef(addMethodGeneratedAttrs$$1, addPropertyGeneratedAttrs$$1, addPropertyNeverAttrs, addFieldGeneratedAttrs, addFieldNeverAttrs, mkDebuggerTypeProxyAttribute, ilg$$19, num, td$$1, cud$$3, info_0, info_1, cuspec$$34, baseTy$$15, alt$$27) {
  const info = [info_0, info_1];
  const attr$$1 = cud$$3.cudWhere;
  const altName$$9 = (0, _ilx.IlxUnionAlternative$$get_Name)(alt$$27);
  const fields$$1 = (0, _ilx.IlxUnionAlternative$$get_FieldDefs)(alt$$27);
  const altTy$$11 = tyForAlt(cuspec$$34, alt$$27);
  const repr$$12 = cudefRepr;

  const addAltAttribs = function addAltAttribs(mdef) {
    return (0, _il.ILMethodDef$$With$$Z3726C02C)(mdef, null, null, null, null, null, null, null, null, null, null, alt$$27.altCustomAttrs);
  };

  const isTotallyImmutable = !(0, _Util.equals)(cud$$3.cudHasHelpers, new _ilx.IlxUnionHasHelpers(2, "SpecialFSharpListHelpers"));
  let altUniqObjMeths;
  var $target$$41;

  if (cud$$3.cudHasHelpers.tag === 1) {
    $target$$41 = 0;
  } else if (cud$$3.cudHasHelpers.tag === 3) {
    $target$$41 = 0;
  } else if (cud$$3.cudHasHelpers.tag === 2) {
    $target$$41 = 0;
  } else {
    $target$$41 = 1;
  }

  switch ($target$$41) {
    case 0:
      {
        altUniqObjMeths = (0, _Types.L)();
        break;
      }

    case 1:
      {
        if ((0, _ilx.IlxUnionAlternative$$get_IsNullary)(alt$$27) ? UnionReprDecisions$00603$$MaintainPossiblyUniqueConstantFieldForAlternative$$5BDDA1(repr$$12, info, alt$$27) : false) {
          const methName = "get_" + altName$$9;
          const meth = addMethodGeneratedAttrs$$1((0, _il.mkILNonGenericStaticMethod)(methName, cud$$3.cudReprAccess, (0, _Types.L)(), (0, _il.mkILReturn)(baseTy$$15), (0, _il.mkMethodBody)(true, (0, _Types.L)(), fields$$1.length, (0, _il.nonBranchingInstrsToCode)((0, _Types.L)(new _il.ILInstr(59, "I_ldsfld", new _il.ILVolatility(1, "Nonvolatile"), mkConstFieldSpec(altName$$9, baseTy$$15)), (0, _Types.L)())), attr$$1)));
          altUniqObjMeths = (0, _Types.L)(meth, (0, _Types.L)());
        } else {
          altUniqObjMeths = (0, _Types.L)();
        }

        break;
      }
  }

  let patternInput$$7;
  var $target$$42;

  if (cud$$3.cudHasHelpers.tag === 3) {
    $target$$42 = 0;
  } else if (cud$$3.cudHasHelpers.tag === 2) {
    $target$$42 = 0;
  } else if (cud$$3.cudHasHelpers.tag === 0) {
    $target$$42 = 1;
  } else {
    $target$$42 = 0;
  }

  switch ($target$$42) {
    case 0:
      {
        const patternInput$$5 = cud$$3.cudAlternatives.length <= 1 ? [(0, _Types.L)(), (0, _Types.L)()] : UnionReprDecisions$00603$$RepresentOneAlternativeAsNull$$2B595(repr$$12, info) ? [(0, _Types.L)(), (0, _Types.L)()] : [(0, _Types.L)(addMethodGeneratedAttrs$$1((0, _il.mkILNonGenericInstanceMethod)("get_" + mkTesterName(altName$$9), cud$$3.cudHelpersAccess, (0, _Types.L)(), (0, _il.mkILReturn)((0, _il.ILGlobals$$get_typ_Bool)(ilg$$19)), (0, _il.mkMethodBody)(true, (0, _Types.L)(), 2, (0, _il.nonBranchingInstrsToCode)((0, _List.append)((0, _Types.L)(_il.mkLdarg0, (0, _Types.L)()), mkIsData(ilg$$19, true, cuspec$$34, num))), attr$$1))), (0, _Types.L)()), (0, _Types.L)(addPropertyNeverAttrs(addPropertyGeneratedAttrs$$1((0, _il.ILPropertyDef$$$Create$$Z7C56322)(mkTesterName(altName$$9), 0, null, (0, _il.mkILMethRef)((0, _il.ILType$$get_TypeRef)(baseTy$$15), (0, _il.ILCallingConv$$$get_Instance)(), "get_" + mkTesterName(altName$$9), 0, (0, _Types.L)(), (0, _il.ILGlobals$$get_typ_Bool)(ilg$$19)), new _il.ILThisConvention(0, "Instance"), (0, _il.ILGlobals$$get_typ_Bool)(ilg$$19), null, (0, _Types.L)(), _il.emptyILCustomAttrs))), (0, _Types.L)())];
        let patternInput$$6;

        if ((0, _ilx.IlxUnionAlternative$$get_IsNullary)(alt$$27)) {
          const nullaryMeth = addAltAttribs(addMethodGeneratedAttrs$$1((0, _il.mkILNonGenericStaticMethod)("get_" + altName$$9, cud$$3.cudHelpersAccess, (0, _Types.L)(), (0, _il.mkILReturn)(baseTy$$15), (0, _il.mkMethodBody)(true, (0, _Types.L)(), fields$$1.length, (0, _il.nonBranchingInstrsToCode)(convNewDataInstrInternal(ilg$$19, cuspec$$34, num)), attr$$1))));
          const nullaryProp = addPropertyNeverAttrs(addPropertyGeneratedAttrs$$1((0, _il.ILPropertyDef$$$Create$$Z7C56322)(altName$$9, 0, null, (0, _il.mkILMethRef)((0, _il.ILType$$get_TypeRef)(baseTy$$15), (0, _il.ILCallingConv$$$get_Static)(), "get_" + altName$$9, 0, (0, _Types.L)(), baseTy$$15), new _il.ILThisConvention(2, "Static"), baseTy$$15, null, (0, _Types.L)(), _il.emptyILCustomAttrs)));
          patternInput$$6 = [(0, _Types.L)(nullaryMeth, (0, _Types.L)()), (0, _Types.L)(nullaryProp, (0, _Types.L)())];
        } else {
          const mdef$$1 = addAltAttribs(addMethodGeneratedAttrs$$1((0, _il.mkILNonGenericStaticMethod)(mkMakerName(cuspec$$34, altName$$9), cud$$3.cudHelpersAccess, (0, _Array.toList)((0, _Array.map)(function mapping$$1(fd) {
            return (0, _il.mkILParamNamed)((0, _ilx.IlxUnionField$$get_LowerName)(fd), (0, _ilx.IlxUnionField$$get_Type)(fd));
          }, fields$$1, Array)), (0, _il.mkILReturn)(baseTy$$15), (0, _il.mkMethodBody)(true, (0, _Types.L)(), fields$$1.length, (0, _il.nonBranchingInstrsToCode)((0, _List.append)((0, _Array.toList)((0, _Array.mapIndexed)(function (i$$5, _arg1$$3) {
            return (0, _il.mkLdarg)(i$$5 & 0xFFFF);
          }, fields$$1, Array)), convNewDataInstrInternal(ilg$$19, cuspec$$34, num))), attr$$1))));
          patternInput$$6 = [(0, _Types.L)(mdef$$1, (0, _Types.L)()), (0, _Types.L)()];
        }

        patternInput$$7 = [(0, _List.append)(patternInput$$6[0], patternInput$$5[0]), (0, _List.append)(patternInput$$6[1], patternInput$$5[1])];
        break;
      }

    case 1:
      {
        patternInput$$7 = [(0, _Types.L)(), (0, _Types.L)()];
        break;
      }
  }

  let patternInput$$13;

  if (UnionReprDecisions$00603$$RepresentAlternativeAsNull$$5BDDA1(repr$$12, info, alt$$27)) {
    patternInput$$13 = [(0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)()];
  } else if (UnionReprDecisions$00603$$RepresentAlternativeAsFreshInstancesOfRootClass$$5BDDA1(repr$$12, info, alt$$27)) {
    patternInput$$13 = [(0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)()];
  } else if (UnionReprDecisions$00603$$RepresentAlternativeAsStructValue$$2B595(repr$$12, info)) {
    patternInput$$13 = [(0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)()];
  } else {
    let altNullaryFields;

    if (UnionReprDecisions$00603$$MaintainPossiblyUniqueConstantFieldForAlternative$$5BDDA1(repr$$12, info, alt$$27)) {
      const basic = addFieldGeneratedAttrs(addFieldNeverAttrs((0, _il.mkILStaticField)(constFieldName(altName$$9), baseTy$$15, null, null, new _il.ILMemberAccess(0, "Assembly"))));
      const uniqObjField = (0, _il.ILFieldDef$$WithInitOnly$$Z1FBCCD16)(basic, true);
      const inRootClass = UnionReprDecisions$00603$$OptimizeAlternativeToRootClass$$5BDDA1(cuspecRepr, cuspec$$34, alt$$27);
      altNullaryFields = (0, _Types.L)([info, alt$$27, altTy$$11, num, uniqObjField, inRootClass], (0, _Types.L)());
    } else {
      altNullaryFields = (0, _Types.L)();
    }

    let patternInput$$12;

    if (UnionReprDecisions$00603$$OptimizeAlternativeToRootClass$$5BDDA1(repr$$12, info, alt$$27)) {
      patternInput$$12 = [(0, _Types.L)(), (0, _Types.L)()];
    } else {
      let patternInput$$9;

      if (!cud$$3.cudDebugProxies) {
        patternInput$$9 = [(0, _Types.L)(), (0, _Types.L)()];
      } else {
        const debugProxyTypeName = (0, _il.ILTypeSpec$$get_Name)((0, _il.ILType$$get_TypeSpec)(altTy$$11)) + "@DebugTypeProxy";
        const debugProxyTy = (0, _il.mkILBoxedTy)((0, _il.mkILNestedTyRef)((0, _il.ILTypeSpec$$get_Scope)((0, _il.ILType$$get_TypeSpec)(altTy$$11)), (0, _il.ILTypeSpec$$get_Enclosing)((0, _il.ILType$$get_TypeSpec)(altTy$$11)), debugProxyTypeName), (0, _il.ILType$$get_GenericArgs)(altTy$$11));
        const debugProxyFieldName = "_obj";
        const debugProxyFields = (0, _Types.L)(addFieldGeneratedAttrs(addFieldNeverAttrs((0, _il.mkILInstanceField)(debugProxyFieldName, altTy$$11, null, new _il.ILMemberAccess(0, "Assembly")))), (0, _Types.L)());
        const debugProxyCtor = addMethodGeneratedAttrs$$1((0, _il.mkILCtor)(new _il.ILMemberAccess(6, "Public"), (0, _Types.L)((0, _il.mkILParamNamed)("obj", altTy$$11), (0, _Types.L)()), (0, _il.mkMethodBody)(false, (0, _Types.L)(), 3, (0, _il.nonBranchingInstrsToCode)((0, _List.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Seq.singleton)(_il.mkLdarg0), (0, _Seq.delay)(function () {
            return (0, _Seq.append)((0, _Seq.singleton)((0, _il.mkNormalCall)((0, _il.mkILCtorMethSpecForTy)((0, _il.ILGlobals$$get_typ_Object)(ilg$$19), (0, _Types.L)()))), (0, _Seq.delay)(function () {
              return (0, _Seq.append)((0, _Seq.singleton)(_il.mkLdarg0), (0, _Seq.delay)(function () {
                return (0, _Seq.append)((0, _Seq.singleton)((0, _il.mkLdarg)(1)), (0, _Seq.delay)(function () {
                  return (0, _Seq.singleton)((0, _il.mkNormalStfld)((0, _il.mkILFieldSpecInTy)(debugProxyTy, debugProxyFieldName, altTy$$11)));
                }));
              }));
            }));
          }));
        }))), null)));
        const debugProxyGetterMeths = (0, _Array.toList)((0, _Array.map)(function mapping$$2(field$$2) {
          const patternInput$$8 = mkUnionCaseFieldId(field$$2);
          return addMethodGeneratedAttrs$$1((0, _il.mkILNonGenericInstanceMethod)("get_" + (0, _ilx.IlxUnionField$$get_Name)(field$$2), new _il.ILMemberAccess(6, "Public"), (0, _Types.L)(), (0, _il.mkILReturn)((0, _ilx.IlxUnionField$$get_Type)(field$$2)), (0, _il.mkMethodBody)(true, (0, _Types.L)(), 2, (0, _il.nonBranchingInstrsToCode)((0, _Types.L)(_il.mkLdarg0, (0, _Types.L)(((0, _il.ILTypeDef$$get_IsStruct)(td$$1) ? _il.mkNormalLdflda : _il.mkNormalLdfld)((0, _il.mkILFieldSpecInTy)(debugProxyTy, debugProxyFieldName, altTy$$11)), (0, _Types.L)((0, _il.mkNormalLdfld)((0, _il.mkILFieldSpecInTy)(altTy$$11, patternInput$$8[0], patternInput$$8[1])), (0, _Types.L)())))), null)));
        }, fields$$1, Array));
        const debugProxyGetterProps = (0, _Array.toList)((0, _Array.map)(function mapping$$3(fdef$$1) {
          return addPropertyGeneratedAttrs$$1((0, _il.ILPropertyDef$$$Create$$Z7C56322)((0, _ilx.IlxUnionField$$get_Name)(fdef$$1), 0, null, (0, _il.mkILMethRef)((0, _il.ILType$$get_TypeRef)(debugProxyTy), (0, _il.ILCallingConv$$$get_Instance)(), "get_" + (0, _ilx.IlxUnionField$$get_Name)(fdef$$1), 0, (0, _Types.L)(), (0, _ilx.IlxUnionField$$get_Type)(fdef$$1)), new _il.ILThisConvention(0, "Instance"), (0, _ilx.IlxUnionField$$get_Type)(fdef$$1), null, (0, _Types.L)(), (0, _il.ILFieldDef$$get_CustomAttrs)((0, _ilx.IlxUnionField$$get_ILField)(fdef$$1))));
        }, fields$$1, Array));
        const debugProxyTypeDef = (0, _il.mkILGenericClass)(debugProxyTypeName, new _il.ILTypeDefAccess(2, "Nested", new _il.ILMemberAccess(0, "Assembly")), (0, _il.ILTypeDef$$get_GenericParams)(td$$1), (0, _il.ILGlobals$$get_typ_Object)(ilg$$19), (0, _Types.L)(), (0, _il.mkILMethods)((0, _List.append)((0, _Types.L)(debugProxyCtor, (0, _Types.L)()), debugProxyGetterMeths)), (0, _il.mkILFields)(debugProxyFields), _il.emptyILTypeDefs, (0, _il.mkILProperties)(debugProxyGetterProps), _il.emptyILEvents, _il.emptyILCustomAttrs, new _il.ILTypeInit(0, "BeforeField"));
        patternInput$$9 = [(0, _Types.L)((0, _il.ILTypeDef$$WithSpecialName$$Z1FBCCD16)(debugProxyTypeDef, true), (0, _Types.L)()), (0, _List.append)((0, _Types.L)(mkDebuggerTypeProxyAttribute(debugProxyTy), (0, _Types.L)()), cud$$3.cudDebugDisplayAttributes)];
      }

      let altTypeDef$$1;
      const basicFields = (0, _Array.toList)((0, _Array.map)(function mapping$$4(field$$3) {
        const patternInput$$10 = mkUnionCaseFieldId(field$$3);
        const fdef$$2 = addFieldGeneratedAttrs(addFieldNeverAttrs((0, _il.mkILInstanceField)(patternInput$$10[0], patternInput$$10[1], null, new _il.ILMemberAccess(0, "Assembly"))));
        return (0, _il.ILFieldDef$$WithInitOnly$$Z1FBCCD16)(fdef$$2, isTotallyImmutable);
      }, fields$$1, Array));
      const patternInput$$11 = mkMethodsAndPropertiesForFields(addMethodGeneratedAttrs$$1, addPropertyGeneratedAttrs$$1, cud$$3.cudReprAccess, attr$$1, cud$$3.cudHasHelpers, altTy$$11, fields$$1);
      const basicCtorMeth = addMethodGeneratedAttrs$$1((0, _il.mkILStorageCtor)(attr$$1, (0, _List.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.append)((0, _Seq.singleton)(_il.mkLdarg0), (0, _Seq.delay)(function () {
          const matchValue$$14 = UnionReprDecisions$00603$$DiscriminationTechnique$$2B595(repr$$12, info);
          var $target$$43;

          switch (matchValue$$14.tag) {
            case 2:
            case 1:
              $target$$43 = 1;
              break;

            case 0:
              $target$$43 = 2;
              break;

            default:
              $target$$43 = 0;
          }

          switch ($target$$43) {
            case 0:
              {
                return (0, _Seq.append)((0, _Seq.singleton)((0, _il.mkLdcInt32)(num)), (0, _Seq.delay)(function () {
                  return (0, _Seq.singleton)((0, _il.mkNormalCall)((0, _il.mkILCtorMethSpecForTy)(baseTy$$15, (0, _Types.L)(mkTagFieldType(ilg$$19, cuspec$$34), (0, _Types.L)()))));
                }));
              }

            case 1:
              {
                return (0, _Seq.singleton)((0, _il.mkNormalCall)((0, _il.mkILCtorMethSpecForTy)(baseTy$$15, (0, _Types.L)())));
              }

            case 2:
              {
                throw new Error("unreachable");
                return (0, _Seq.empty)();
              }
          }
        }));
      })), altTy$$11, (0, _List.map)(function mapping$$5(fdef$$3) {
        return [(0, _il.ILFieldDef$$get_Name)(fdef$$3), (0, _il.ILFieldDef$$get_FieldType)(fdef$$3)];
      }, basicFields), (0, _Util.equals)((0, _ilx.IlxUnionSpec$$get_HasHelpers)(cuspec$$34), new _ilx.IlxUnionHasHelpers(1, "AllHelpers")) ? new _il.ILMemberAccess(0, "Assembly") : cud$$3.cudReprAccess));
      const altTypeDef = (0, _il.mkILGenericClass)((0, _il.ILTypeSpec$$get_Name)((0, _il.ILType$$get_TypeSpec)(altTy$$11)), new _il.ILTypeDefAccess(2, "Nested", ((0, _ilx.IlxUnionAlternative$$get_IsNullary)(alt$$27) ? (0, _Util.equals)(cud$$3.cudHasHelpers, new _ilx.IlxUnionHasHelpers(1, "AllHelpers")) : false) ? new _il.ILMemberAccess(0, "Assembly") : cud$$3.cudReprAccess), (0, _il.ILTypeDef$$get_GenericParams)(td$$1), baseTy$$15, (0, _Types.L)(), (0, _il.mkILMethods)((0, _List.append)((0, _Types.L)(basicCtorMeth, (0, _Types.L)()), patternInput$$11[1])), (0, _il.mkILFields)(basicFields), _il.emptyILTypeDefs, (0, _il.mkILProperties)(patternInput$$11[0]), _il.emptyILEvents, (0, _il.mkILCustomAttrs)(patternInput$$9[1]), new _il.ILTypeInit(0, "BeforeField"));
      altTypeDef$$1 = (0, _il.ILTypeDef$$WithSerializable$$Z1FBCCD16)((0, _il.ILTypeDef$$WithSpecialName$$Z1FBCCD16)(altTypeDef, true), (0, _il.ILTypeDef$$get_IsSerializable)(td$$1));
      patternInput$$12 = [(0, _Types.L)(altTypeDef$$1, (0, _Types.L)()), patternInput$$9[0]];
    }

    patternInput$$13 = [patternInput$$12[0], patternInput$$12[1], altNullaryFields];
  }

  return [patternInput$$7[0], patternInput$$7[1], altUniqObjMeths, patternInput$$13[0], patternInput$$13[1], patternInput$$13[2]];
}

function mkClassUnionDef(addMethodGeneratedAttrs$$2, addPropertyGeneratedAttrs$$2, addPropertyNeverAttrs$$1, addFieldGeneratedAttrs$$1, addFieldNeverAttrs$$1, mkDebuggerTypeProxyAttribute$$1, ilg$$20, tref, td$$2, cud$$4) {
  var matchValue$$19, ilTy$$2;
  const boxity = (0, _il.ILTypeDef$$get_IsStruct)(td$$2) ? new _il.ILBoxity(1, "AsValue") : new _il.ILBoxity(0, "AsObject");
  const baseTy$$16 = (0, _il.mkILFormalNamedTy)(boxity, tref, (0, _il.ILTypeDef$$get_GenericParams)(td$$2));
  const cuspec$$35 = new _ilx.IlxUnionSpec(0, "IlxUnionSpec", new _ilx.IlxUnionRef(0, "IlxUnionRef", boxity, (0, _il.ILType$$get_TypeRef)(baseTy$$16), cud$$4.cudAlternatives, cud$$4.cudNullPermitted, cud$$4.cudHasHelpers), (0, _il.ILType$$get_GenericArgs)(baseTy$$16));
  const info$$1 = [td$$2, cud$$4];
  const repr$$13 = cudefRepr;
  const isTotallyImmutable$$1 = !(0, _Util.equals)(cud$$4.cudHasHelpers, new _ilx.IlxUnionHasHelpers(2, "SpecialFSharpListHelpers"));
  const results = (0, _List.mapIndexed)(function mapping$$6(i$$6, alt$$28) {
    return convAlternativeDef(addMethodGeneratedAttrs$$2, addPropertyGeneratedAttrs$$2, addPropertyNeverAttrs$$1, addFieldGeneratedAttrs$$1, addFieldNeverAttrs$$1, mkDebuggerTypeProxyAttribute$$1, ilg$$20, i$$6, td$$2, cud$$4, info$$1[0], info$$1[1], cuspec$$35, baseTy$$16, alt$$28);
  }, (0, _List.ofArray)(cud$$4.cudAlternatives));
  const baseMethsFromAlt = (0, _List.collect)(function mapping$$7(tupledArg$$8) {
    return tupledArg$$8[0];
  }, results);
  const basePropsFromAlt = (0, _List.collect)(function mapping$$8(tupledArg$$9) {
    return tupledArg$$9[1];
  }, results);
  const altUniqObjMeths$$1 = (0, _List.collect)(function mapping$$9(tupledArg$$10) {
    return tupledArg$$10[2];
  }, results);
  const altTypeDefs = (0, _List.collect)(function mapping$$10(tupledArg$$11) {
    return tupledArg$$11[3];
  }, results);
  const altDebugTypeDefs$$3 = (0, _List.collect)(function mapping$$11(tupledArg$$12) {
    return tupledArg$$12[4];
  }, results);
  const altNullaryFields$$2 = (0, _List.collect)(function mapping$$12(tupledArg$$13) {
    return tupledArg$$13[5];
  }, results);
  let tagFieldsInObject;
  const matchValue$$15 = UnionReprDecisions$00603$$DiscriminationTechnique$$2B595(repr$$13, info$$1);
  var $target$$54;

  switch (matchValue$$15.tag) {
    case 1:
    case 0:
      $target$$54 = 0;
      break;

    case 3:
      $target$$54 = 1;
      break;

    default:
      $target$$54 = 0;
  }

  switch ($target$$54) {
    case 0:
      {
        tagFieldsInObject = (0, _Types.L)();
        break;
      }

    case 1:
      {
        tagFieldsInObject = (0, _Types.L)(mkTagFieldId(ilg$$20, cuspec$$35), (0, _Types.L)());
        break;
      }
  }

  const isStruct$$1 = (0, _il.ILTypeDef$$get_IsStruct)(td$$2);
  let patternInput$$16;
  const tupledArg$$14 = (0, _List.unzip3)((0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (matchValue$$16) {
      if (UnionReprDecisions$00603$$RepresentAlternativeAsFreshInstancesOfRootClass$$5BDDA1(repr$$13, info$$1, matchValue$$16[1]) ? true : UnionReprDecisions$00603$$RepresentAlternativeAsStructValue$$2B595(repr$$13, info$$1)) {
        const fields$$2 = (0, _Array.toList)((0, _Array.map)(mkUnionCaseFieldId, (0, _ilx.IlxUnionAlternative$$get_FieldDefs)(matchValue$$16[1]), Array));
        let baseInit;

        if (isStruct$$1) {
          baseInit = null;
        } else {
          const matchValue$$17 = (0, _il.ILTypeDef$$get_Extends)(td$$2);

          if (matchValue$$17 != null) {
            const ilTy$$1 = matchValue$$17;
            baseInit = (0, _il.ILType$$get_TypeSpec)(ilTy$$1);
          } else {
            baseInit = (0, _il.ILType$$get_TypeSpec)((0, _il.ILGlobals$$get_typ_Object)(ilg$$20));
          }
        }

        let extraParamsForCtor;

        if (isStruct$$1 ? takesExtraParams(cud$$4.cudAlternatives) : false) {
          const patternInput$$14 = extraTysAndInstrsForStructCtor(ilg$$20, matchValue$$16[0]);
          extraParamsForCtor = (0, _List.map)(_il.mkILParamAnon, patternInput$$14[0]);
        } else {
          extraParamsForCtor = (0, _Types.L)();
        }

        const ctor = addMethodGeneratedAttrs$$2((0, _il.mkILSimpleStorageCtor)(cud$$4.cudWhere, baseInit, baseTy$$16, extraParamsForCtor, (0, _List.append)(fields$$2, tagFieldsInObject), (0, _Util.equals)((0, _ilx.IlxUnionSpec$$get_HasHelpers)(cuspec$$35), new _ilx.IlxUnionHasHelpers(1, "AllHelpers")) ? new _il.ILMemberAccess(0, "Assembly") : cud$$4.cudReprAccess));
        const patternInput$$15 = mkMethodsAndPropertiesForFields(addMethodGeneratedAttrs$$2, addPropertyGeneratedAttrs$$2, cud$$4.cudReprAccess, cud$$4.cudWhere, cud$$4.cudHasHelpers, baseTy$$16, (0, _ilx.IlxUnionAlternative$$get_FieldDefs)(matchValue$$16[1]));
        return (0, _Seq.singleton)([fields$$2, (0, _List.append)((0, _Types.L)(ctor, (0, _Types.L)()), patternInput$$15[1]), patternInput$$15[0]]);
      } else {
        return (0, _Seq.empty)();
      }
    }, (0, _Array.indexed)(cud$$4.cudAlternatives));
  })));
  patternInput$$16 = [(0, _List.concat)(tupledArg$$14[0]), (0, _List.concat)(tupledArg$$14[1]), (0, _List.concat)(tupledArg$$14[2])];
  const selfAndTagFields = (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (matchValue$$18) {
      const fdef$$5 = addFieldGeneratedAttrs$$1(addFieldNeverAttrs$$1((0, _il.mkILInstanceField)(matchValue$$18[0], matchValue$$18[1], null, new _il.ILMemberAccess(0, "Assembly"))));
      return (0, _Seq.singleton)((0, _il.ILFieldDef$$WithInitOnly$$Z1FBCCD16)(fdef$$5, !isStruct$$1 ? isTotallyImmutable$$1 : false));
    }, (0, _List.append)(patternInput$$16[0], tagFieldsInObject));
  }));
  const ctorMeths = ((((patternInput$$16[0].tail == null ? tagFieldsInObject.tail == null : false) ? !(patternInput$$16[1].tail == null) : false) ? true : isStruct$$1) ? true : cud$$4.cudAlternatives.every(function predicate$$3(alt$$30) {
    return UnionReprDecisions$00603$$RepresentAlternativeAsFreshInstancesOfRootClass$$5BDDA1(repr$$13, info$$1, alt$$30);
  })) ? (0, _Types.L)() : (0, _Types.L)(addMethodGeneratedAttrs$$2((0, _il.mkILSimpleStorageCtor)(cud$$4.cudWhere, (0, _il.ILType$$get_TypeSpec)((matchValue$$19 = (0, _il.ILTypeDef$$get_Extends)(td$$2), matchValue$$19 != null ? (ilTy$$2 = matchValue$$19, ilTy$$2) : (0, _il.ILGlobals$$get_typ_Object)(ilg$$20))), baseTy$$16, (0, _Types.L)(), tagFieldsInObject, new _il.ILMemberAccess(0, "Assembly"))), (0, _Types.L)());

  const addConstFieldInit = function addConstFieldInit(cd) {
    if (altNullaryFields$$2.tail == null) {
      return cd;
    } else {
      return (0, _il.prependInstrsToClassCtor)((0, _List.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.collect)(function (matchValue$$20) {
          var matchValue$$21;
          const constFieldId$$1 = [(0, _il.ILFieldDef$$get_Name)(matchValue$$20[4]), baseTy$$16];
          const constFieldSpec = mkConstFieldSpecFromId(baseTy$$16, constFieldId$$1[0], constFieldId$$1[1]);
          return (0, _Seq.append)((matchValue$$21 = UnionReprDecisions$00603$$DiscriminationTechnique$$2B595(repr$$13, matchValue$$20[0]), matchValue$$21.tag === 1 ? (0, _Seq.singleton)((0, _il.mkNormalNewobj)((0, _il.mkILCtorMethSpecForTy)(matchValue$$20[2], (0, _Types.L)()))) : matchValue$$21.tag === 0 ? (0, _Seq.singleton)((0, _il.mkNormalNewobj)((0, _il.mkILCtorMethSpecForTy)(matchValue$$20[2], (0, _Types.L)()))) : matchValue$$21.tag === 3 ? matchValue$$20[5] ? (0, _Seq.append)((0, _Seq.singleton)((0, _il.mkLdcInt32)(matchValue$$20[3])), (0, _Seq.delay)(function () {
            return (0, _Seq.singleton)((0, _il.mkNormalNewobj)((0, _il.mkILCtorMethSpecForTy)(matchValue$$20[2], (0, _Types.L)(mkTagFieldType(ilg$$20, cuspec$$35), (0, _Types.L)()))));
          })) : (0, _Seq.singleton)((0, _il.mkNormalNewobj)((0, _il.mkILCtorMethSpecForTy)(matchValue$$20[2], (0, _Types.L)()))) : (0, _Seq.singleton)((0, _il.mkNormalNewobj)((0, _il.mkILCtorMethSpecForTy)(matchValue$$20[2], (0, _Types.L)())))), (0, _Seq.delay)(function () {
            return (0, _Seq.singleton)((0, _il.mkNormalStsfld)(constFieldSpec));
          }));
        }, altNullaryFields$$2);
      })), cud$$4.cudWhere, cd);
    }
  };

  let patternInput$$18;
  const tagFieldType = mkTagFieldType(ilg$$20, cuspec$$35);
  const tagEnumFields = (0, _Array.toList)((0, _Array.mapIndexed)(function mapping$$13(num$$1, alt$$31) {
    return (0, _il.mkILLiteralField)((0, _ilx.IlxUnionAlternative$$get_Name)(alt$$31), tagFieldType, new _il.ILFieldInit(5, "Int32", num$$1), null, new _il.ILMemberAccess(6, "Public"));
  }, cud$$4.cudAlternatives, Array));
  let patternInput$$17;
  const body = (0, _il.mkMethodBody)(true, (0, _Types.L)(), 2, genWith(function (cg$$5) {
    emitLdDataTagPrim(ilg$$20, _il.mkLdarg0, cg$$5, true, cuspec$$35);
    cg$$5.EmitInstr(new _il.ILInstr(47, "I_ret"));
  }), cud$$4.cudWhere);
  patternInput$$17 = UnionReprDecisions$00603$$RepresentOneAlternativeAsNull$$2B595(repr$$13, info$$1) ? [(0, _Types.L)(addMethodGeneratedAttrs$$2((0, _il.mkILNonGenericStaticMethod)("Get" + tagPropertyName, cud$$4.cudHelpersAccess, (0, _Types.L)((0, _il.mkILParamAnon)(baseTy$$16), (0, _Types.L)()), (0, _il.mkILReturn)(tagFieldType), body)), (0, _Types.L)()), (0, _Types.L)()] : [(0, _Types.L)(addMethodGeneratedAttrs$$2((0, _il.mkILNonGenericInstanceMethod)("get_" + tagPropertyName, cud$$4.cudHelpersAccess, (0, _Types.L)(), (0, _il.mkILReturn)(tagFieldType), body)), (0, _Types.L)()), (0, _Types.L)(addPropertyNeverAttrs$$1(addPropertyGeneratedAttrs$$2((0, _il.ILPropertyDef$$$Create$$Z7C56322)(tagPropertyName, 0, null, (0, _il.mkILMethRef)((0, _il.ILType$$get_TypeRef)(baseTy$$16), (0, _il.ILCallingConv$$$get_Instance)(), "get_" + tagPropertyName, 0, (0, _Types.L)(), tagFieldType), new _il.ILThisConvention(0, "Instance"), tagFieldType, null, (0, _Types.L)(), _il.emptyILCustomAttrs))), (0, _Types.L)())];
  patternInput$$18 = [patternInput$$17[0], patternInput$$17[1], tagEnumFields];
  const isAbstract = (0, _List.length)(altTypeDefs) === cud$$4.cudAlternatives.length;
  const existingMeths = (0, _il.ILMethodDefs$$get_AsList)((0, _il.ILTypeDef$$get_Methods)(td$$2));
  const existingProps = (0, _il.ILPropertyDefs$$get_AsList)((0, _il.ILTypeDef$$get_Properties)(td$$2));
  let enumTypeDef;

  if ((0, _List.length)(patternInput$$18[2]) <= 1) {
    enumTypeDef = null;
  } else {
    const tdef = (0, _il.ILTypeDef$$WithHasSecurity$$Z1FBCCD16)((0, _il.ILTypeDef$$WithEncoding$$Z475EF4F1)((0, _il.ILTypeDef$$WithImport$$Z1FBCCD16)((0, _il.ILTypeDef$$WithSealed$$Z1FBCCD16)((0, _il.ILTypeDef$$WithAbstract$$Z1FBCCD16)((0, _il.ILTypeDef$$WithNestedAccess$$4BB0D833)((0, _il.ILTypeDef$$$Create$$659DAD29)("Tags", 0, new _il.ILTypeDefLayout(0, "Auto"), (0, _Types.L)(), (0, _il.ILTypeDef$$get_GenericParams)(td$$2), (0, _il.ILGlobals$$get_typ_Object)(ilg$$20), _il.emptyILMethods, _il.emptyILTypeDefs, (0, _il.mkILFields)(patternInput$$18[2]), _il.emptyILMethodImpls, _il.emptyILEvents, _il.emptyILProperties, _il.emptyILSecurityDecls, _il.emptyILCustomAttrs), cud$$4.cudReprAccess), true), true), false), new _il.ILDefaultPInvokeEncoding(0, "Ansi")), false);
    enumTypeDef = tdef;
  }

  const baseTypeDef = addConstFieldInit((0, _il.ILTypeDef$$With$$4DED7EA9)((0, _il.ILTypeDef$$WithInitSemantics$$Z419EA49B)(td$$2, new _il.ILTypeInit(0, "BeforeField")), null, null, null, null, null, (0, _Option.some)((0, _il.ILTypeDef$$get_Extends)(td$$2) == null ? (0, _il.ILGlobals$$get_typ_Object)(ilg$$20) : (0, _il.ILTypeDef$$get_Extends)(td$$2)), (0, _il.mkILMethods)((0, _List.append)(ctorMeths, (0, _List.append)(baseMethsFromAlt, (0, _List.append)(patternInput$$16[1], (0, _List.append)(patternInput$$18[0], (0, _List.append)(altUniqObjMeths$$1, existingMeths)))))), (0, _il.mkILTypeDefs)((0, _List.append)((0, _List.ofArray)((0, _Option.defaultArg)(enumTypeDef, [], function ($x$$10) {
    return [$x$$10];
  })), (0, _List.append)(altTypeDefs, (0, _List.append)(altDebugTypeDefs$$3, (0, _il.ILTypeDefs$$get_AsList)((0, _il.ILTypeDef$$get_NestedTypes)(td$$2)))))), (0, _il.mkILFields)((0, _List.append)(selfAndTagFields, (0, _List.append)((0, _List.map)(function (tupledArg$$15) {
    return tupledArg$$15[4];
  }, altNullaryFields$$2), (0, _il.ILFieldDefs$$get_AsList)((0, _il.ILTypeDef$$get_Fields)(td$$2))))), null, null, (0, _il.mkILProperties)((0, _List.append)(patternInput$$18[1], (0, _List.append)(basePropsFromAlt, (0, _List.append)(patternInput$$16[2], existingProps))))));
  return (0, _il.ILTypeDef$$WithSealed$$Z1FBCCD16)((0, _il.ILTypeDef$$WithAbstract$$Z1FBCCD16)(baseTypeDef, isAbstract), altTypeDefs.tail == null);
}