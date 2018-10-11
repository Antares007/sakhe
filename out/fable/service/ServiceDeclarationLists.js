"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FSharpMethodGroupItemParameter$$$$002Ector$$Z62E84B58 = FSharpMethodGroupItemParameter$$$$002Ector$$Z62E84B58;
exports.FSharpMethodGroupItemParameter$$get_ParameterName = FSharpMethodGroupItemParameter$$get_ParameterName;
exports.FSharpMethodGroupItemParameter$$get_CanonicalTypeTextForSorting = FSharpMethodGroupItemParameter$$get_CanonicalTypeTextForSorting;
exports.FSharpMethodGroupItemParameter$$get_StructuredDisplay = FSharpMethodGroupItemParameter$$get_StructuredDisplay;
exports.FSharpMethodGroupItemParameter$$get_Display = FSharpMethodGroupItemParameter$$get_Display;
exports.FSharpMethodGroupItemParameter$$get_IsOptional = FSharpMethodGroupItemParameter$$get_IsOptional;
exports.DescriptionListsImpl$$$isFunction = DescriptionListsImpl$$$isFunction;
exports.DescriptionListsImpl$$$printCanonicalizedTypeName = DescriptionListsImpl$$$printCanonicalizedTypeName;
exports.DescriptionListsImpl$$$PrettyParamOfRecdField = DescriptionListsImpl$$$PrettyParamOfRecdField;
exports.DescriptionListsImpl$$$PrettyParamOfUnionCaseField = DescriptionListsImpl$$$PrettyParamOfUnionCaseField;
exports.DescriptionListsImpl$$$ParamOfParamData = DescriptionListsImpl$$$ParamOfParamData;
exports.DescriptionListsImpl$$$PrettyParamsOfParamDatas = DescriptionListsImpl$$$PrettyParamsOfParamDatas;
exports.DescriptionListsImpl$$$PrettyParamsOfTypes = DescriptionListsImpl$$$PrettyParamsOfTypes;
exports.DescriptionListsImpl$$$PrettyParamsAndReturnTypeOfItem = DescriptionListsImpl$$$PrettyParamsAndReturnTypeOfItem;
exports.DescriptionListsImpl$$$GlyphOfItem = DescriptionListsImpl$$$GlyphOfItem;
exports.DescriptionListsImpl$$$AnotherFlattenItems = DescriptionListsImpl$$$AnotherFlattenItems;
exports.FSharpDeclarationListItem$$$$002Ector$$Z5B12C4FE = FSharpDeclarationListItem$$$$002Ector$$Z5B12C4FE;
exports.FSharpDeclarationListItem$$get_Name = FSharpDeclarationListItem$$get_Name;
exports.FSharpDeclarationListItem$$get_NameInCode = FSharpDeclarationListItem$$get_NameInCode;
exports.FSharpDeclarationListItem$$get_Glyph = FSharpDeclarationListItem$$get_Glyph;
exports.FSharpDeclarationListItem$$get_Accessibility = FSharpDeclarationListItem$$get_Accessibility;
exports.FSharpDeclarationListItem$$get_Kind = FSharpDeclarationListItem$$get_Kind;
exports.FSharpDeclarationListItem$$get_IsOwnMember = FSharpDeclarationListItem$$get_IsOwnMember;
exports.FSharpDeclarationListItem$$get_MinorPriority = FSharpDeclarationListItem$$get_MinorPriority;
exports.FSharpDeclarationListItem$$get_FullName = FSharpDeclarationListItem$$get_FullName;
exports.FSharpDeclarationListItem$$get_IsResolved = FSharpDeclarationListItem$$get_IsResolved;
exports.FSharpDeclarationListItem$$get_NamespaceToOpen = FSharpDeclarationListItem$$get_NamespaceToOpen;
exports.FSharpDeclarationListInfo$$$$002Ector$$Z1CF26BA3 = FSharpDeclarationListInfo$$$$002Ector$$Z1CF26BA3;
exports.FSharpDeclarationListInfo$$get_Items = FSharpDeclarationListInfo$$get_Items;
exports.FSharpDeclarationListInfo$$get_IsForType = FSharpDeclarationListInfo$$get_IsForType;
exports.FSharpDeclarationListInfo$$get_IsError = FSharpDeclarationListInfo$$get_IsError;
exports.FSharpDeclarationListInfo$$$Create$$Z76BB07D2 = FSharpDeclarationListInfo$$$Create$$Z76BB07D2;
exports.FSharpDeclarationListInfo$$$Error$$Z721C83C5 = FSharpDeclarationListInfo$$$Error$$Z721C83C5;
exports.FSharpDeclarationListInfo$$$get_Empty = FSharpDeclarationListInfo$$$get_Empty;
exports.FSharpMethodGroupItem$$$$002Ector$$6ECFCC8B = FSharpMethodGroupItem$$$$002Ector$$6ECFCC8B;
exports.FSharpMethodGroupItem$$get_StructuredDescription = FSharpMethodGroupItem$$get_StructuredDescription;
exports.FSharpMethodGroupItem$$get_Description = FSharpMethodGroupItem$$get_Description;
exports.FSharpMethodGroupItem$$get_XmlDoc = FSharpMethodGroupItem$$get_XmlDoc;
exports.FSharpMethodGroupItem$$get_StructuredReturnTypeText = FSharpMethodGroupItem$$get_StructuredReturnTypeText;
exports.FSharpMethodGroupItem$$get_ReturnTypeText = FSharpMethodGroupItem$$get_ReturnTypeText;
exports.FSharpMethodGroupItem$$get_Parameters = FSharpMethodGroupItem$$get_Parameters;
exports.FSharpMethodGroupItem$$get_HasParameters = FSharpMethodGroupItem$$get_HasParameters;
exports.FSharpMethodGroupItem$$get_HasParamArrayArg = FSharpMethodGroupItem$$get_HasParamArrayArg;
exports.FSharpMethodGroupItem$$get_StaticParameters = FSharpMethodGroupItem$$get_StaticParameters;
exports.FSharpMethodGroup$$$$002Ector$$5F5A1124 = FSharpMethodGroup$$$$002Ector$$5F5A1124;
exports.FSharpMethodGroup$$get_MethodName = FSharpMethodGroup$$get_MethodName;
exports.FSharpMethodGroup$$get_Methods = FSharpMethodGroup$$get_Methods;
exports.FSharpMethodGroup$$$Create$$Z19558353 = FSharpMethodGroup$$$Create$$Z19558353;
exports.FSharpMethodGroup = exports.FSharpMethodGroupItem = exports.FSharpDeclarationListInfo = exports.FSharpDeclarationListItem = exports.FSharpMethodGroupItemParameter = exports.EnvMisc3$$$dataTipSpinWaitTime = void 0;

var _lib = require("../fsharp/lib");

var _Types = require("../fable-core.2.0.3/Types");

var _layout = require("../fsharp/layout");

var _TastOps = require("../fsharp/TastOps");

var _NicePrint = require("../fsharp/NicePrint");

var _tast = require("../fsharp/tast");

var _infos = require("../fsharp/infos");

var _ast = require("../fsharp/ast");

var _Option = require("../fable-core.2.0.3/Option");

var _TcGlobals = require("../fsharp/TcGlobals");

var _List = require("../fable-core.2.0.3/List");

var _InfoReader = require("../fsharp/InfoReader");

var _SymbolHelpers = require("../symbols/SymbolHelpers");

var _AccessibilityLogic = require("../fsharp/AccessibilityLogic");

var _NameResolution = require("../fsharp/NameResolution");

var _ServiceConstants = require("./ServiceConstants");

var _il = require("../absil/il");

var _ErrorLogger = require("../fsharp/ErrorLogger");

var _Util = require("../fable-core.2.0.3/Util");

var _String = require("../fable-core.2.0.3/String");

var _ildiag = require("../absil/ildiag");

var _Array = require("../fable-core.2.0.3/Array");

var _PrettyNaming = require("../fsharp/PrettyNaming");

var _lexhelp = require("../fsharp/lexhelp");

var _illib = require("../absil/illib");

var _Seq = require("../fable-core.2.0.3/Seq");

const EnvMisc3$$$dataTipSpinWaitTime = (0, _lib.GetEnvInteger)("FCS_ToolTipSpinWaitTime", 300);
exports.EnvMisc3$$$dataTipSpinWaitTime = EnvMisc3$$$dataTipSpinWaitTime;
const FSharpMethodGroupItemParameter = (0, _Types.declare)(function FSharpMethodGroupItemParameter(name, canonicalTypeTextForSorting, display, isOptional) {
  const $this$$1 = this;
  $this$$1.name = name;
  $this$$1.canonicalTypeTextForSorting = canonicalTypeTextForSorting;
  $this$$1.display = display;
  $this$$1.isOptional = isOptional;
});
exports.FSharpMethodGroupItemParameter = FSharpMethodGroupItemParameter;

function FSharpMethodGroupItemParameter$$$$002Ector$$Z62E84B58(name, canonicalTypeTextForSorting, display, isOptional) {
  return this != null ? FSharpMethodGroupItemParameter.call(this, name, canonicalTypeTextForSorting, display, isOptional) : new FSharpMethodGroupItemParameter(name, canonicalTypeTextForSorting, display, isOptional);
}

function FSharpMethodGroupItemParameter$$get_ParameterName(__) {
  return __.name;
}

function FSharpMethodGroupItemParameter$$get_CanonicalTypeTextForSorting(__$$1) {
  return __$$1.canonicalTypeTextForSorting;
}

function FSharpMethodGroupItemParameter$$get_StructuredDisplay(__$$2) {
  return __$$2.display;
}

function FSharpMethodGroupItemParameter$$get_Display(__$$3) {
  return (0, _layout.showL)(__$$3.display);
}

function FSharpMethodGroupItemParameter$$get_IsOptional(__$$4) {
  return __$$4.isOptional;
}

function DescriptionListsImpl$$$isFunction(g, ty) {
  const patternInput = (0, _TastOps.tryDestForallTy)(g, ty);
  return (0, _TastOps.isFunTy)(g, patternInput[1]);
}

function DescriptionListsImpl$$$printCanonicalizedTypeName(g$$1, denv, tau$$1) {
  const strippedType = (0, _TastOps.stripTyEqnsWrtErasure)(new _TastOps.Erasure(0, "EraseAll"), g$$1, tau$$1);
  const denv$$1 = (0, _TastOps.DisplayEnv$$SetOpenPaths$$Z7F4D45E5)(denv, (0, _Types.L)());
  return (0, _NicePrint.stringOfTy)(denv$$1, strippedType);
}

function DescriptionListsImpl$$$PrettyParamOfRecdField(g$$2, denv$$2, f) {
  return FSharpMethodGroupItemParameter$$$$002Ector$$Z62E84B58((0, _tast.RecdField$$get_Name)(f), DescriptionListsImpl$$$printCanonicalizedTypeName(g$$2, denv$$2, (0, _tast.RecdField$$get_FormalType)(f)), (0, _NicePrint.prettyLayoutOfType)(denv$$2, (0, _tast.RecdField$$get_FormalType)(f)), false);
}

function DescriptionListsImpl$$$PrettyParamOfUnionCaseField(g$$3, denv$$3, isGenerated, i, f$$1) {
  const initial = DescriptionListsImpl$$$PrettyParamOfRecdField(g$$3, denv$$3, f$$1);
  const display$$1 = isGenerated(i, f$$1) ? FSharpMethodGroupItemParameter$$get_StructuredDisplay(initial) : (0, _NicePrint.layoutOfParamData)(denv$$3, new _infos.ParamData(0, "ParamData", false, false, false, new _infos.OptionalArgInfo(0, "NotOptional"), new _infos.CallerInfo(0, "NoCallerInfo"), (0, _tast.RecdField$$get_Id)(f$$1), new _infos.ReflectedArgInfo(0, "None"), (0, _tast.RecdField$$get_FormalType)(f$$1)));
  return FSharpMethodGroupItemParameter$$$$002Ector$$Z62E84B58(FSharpMethodGroupItemParameter$$get_ParameterName(initial), FSharpMethodGroupItemParameter$$get_CanonicalTypeTextForSorting(initial), display$$1, false);
}

function DescriptionListsImpl$$$ParamOfParamData(g$$4, denv$$4, _arg1) {
  var pn;
  const paramData = _arg1;
  const pty = paramData.fields[7];
  const optArgInfo = paramData.fields[3];
  const nmOpt = paramData.fields[5];
  const _reflArgInfo = paramData.fields[6];
  const _isParamArrayArg = paramData.fields[0];
  const _isOutArg = paramData.fields[2];
  const _isInArg = paramData.fields[1];
  const _callerInfo = paramData.fields[4];
  return FSharpMethodGroupItemParameter$$$$002Ector$$Z62E84B58(nmOpt != null ? (pn = nmOpt, (0, _ast.Ident$$get_idText)(pn)) : "", DescriptionListsImpl$$$printCanonicalizedTypeName(g$$4, denv$$4, pty), (0, _NicePrint.layoutOfParamData)(denv$$4, paramData), (0, _infos.OptionalArgInfo$$get_IsOptional)(optArgInfo));
}

function DescriptionListsImpl$$$PrettyParamsOfParamDatas(g$$5, denv$$5, typarInst, paramDatas, rty) {
  const patternInput$$1 = (0, _List.unzip)((0, _List.map)(function mapping(_arg1$$1) {
    const pty$$1 = _arg1$$1.fields[7];
    const optArgInfo$$1 = _arg1$$1.fields[3];
    const nmOpt$$1 = _arg1$$1.fields[5];
    const isParamArrayArg = _arg1$$1.fields[0];
    const _reflArgInfo$$1 = _arg1$$1.fields[6];
    const _isOutArg$$1 = _arg1$$1.fields[2];
    const _isInArg$$1 = _arg1$$1.fields[1];
    const _callerInfo$$1 = _arg1$$1.fields[4];
    const isOptArg = (0, _infos.OptionalArgInfo$$get_IsOptional)(optArgInfo$$1);
    const matchValue = [nmOpt$$1, isOptArg, (0, _TastOps.tryDestOptionTy)(denv$$5.g, pty$$1)];

    if (matchValue[0] == null) {
      return [["", isOptArg, _layout.emptyL], pty$$1];
    } else if (matchValue[1]) {
      const id = matchValue[0];
      const nm = (0, _ast.Ident$$get_idText)(id);
      const pty$$2 = (0, _Option.defaultArg)(matchValue[2], pty$$1);
      return [[nm, isOptArg, (0, _layout.op_HatHat)(_layout.SepL$$$questionMark, (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagParameter)(nm)))], pty$$2];
    } else {
      const id$$1 = matchValue[0];
      const nm$$1 = (0, _ast.Ident$$get_idText)(id$$1);
      const prefix = isParamArrayArg ? (0, _layout.op_HatHat)((0, _NicePrint.PrintUtilities$$$layoutBuiltinAttribute)(denv$$5, (0, _TcGlobals.TcGlobals$$get_attrib_ParamArrayAttribute)(denv$$5.g)), (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagParameter)(nm$$1)), _layout.RightL$$$colon)) : (0, _layout.op_HatHat)((0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagParameter)(nm$$1)), _layout.RightL$$$colon);
      return [[nm$$1, isOptArg, prefix], pty$$1];
    }
  }, paramDatas));
  const patternInput$$2 = (0, _NicePrint.prettyLayoutOfInstAndSig)(denv$$5, typarInst, patternInput$$1[1], rty);
  const prettyRetTyL = patternInput$$2[2][1];
  const prettyParamTysL = patternInput$$2[2][0];
  const prettyParamTys = patternInput$$2[1][0];
  const _prettyRetTy = patternInput$$2[1][1];
  const prettyParams = (0, _List.map3)(function mapping$$1(tupledArg, tau$$2, tyL) {
    return FSharpMethodGroupItemParameter$$$$002Ector$$Z62E84B58(tupledArg[0], DescriptionListsImpl$$$printCanonicalizedTypeName(g$$5, denv$$5, tau$$2), (0, _layout.op_HatHat)(tupledArg[2], tyL), tupledArg[1]);
  }, patternInput$$1[0], prettyParamTys, prettyParamTysL);
  return [patternInput$$2[0], prettyParams, prettyRetTyL, patternInput$$2[3]];
}

function DescriptionListsImpl$$$PrettyParamsOfTypes(g$$6, denv$$6, typarInst$$1, paramTys, retTy) {
  const patternInput$$3 = (0, _NicePrint.prettyLayoutOfInstAndSig)(denv$$6, typarInst$$1, paramTys, retTy);
  const prettyRetTyL$$1 = patternInput$$3[2][1];
  const prettyParamTysL$$1 = patternInput$$3[2][0];
  const prettyParamTys$$1 = patternInput$$3[1][0];
  const _prettyRetTy$$1 = patternInput$$3[1][1];
  const parameters = (0, _List.map)(function mapping$$2(tupledArg$$1) {
    return FSharpMethodGroupItemParameter$$$$002Ector$$Z62E84B58("", DescriptionListsImpl$$$printCanonicalizedTypeName(g$$6, denv$$6, tupledArg$$1[0]), tupledArg$$1[1], false);
  }, (0, _List.zip)(prettyParamTys$$1, prettyParamTysL$$1));
  return [patternInput$$3[0], parameters, prettyRetTyL$$1, patternInput$$3[3]];
}

function DescriptionListsImpl$$$PrettyParamsAndReturnTypeOfItem(infoReader, m, denv$$7, item) {
  DescriptionListsImpl$$$PrettyParamsAndReturnTypeOfItem: while (true) {
    const amap = (0, _InfoReader.InfoReader$$get_amap)(infoReader);
    const g$$7 = (0, _InfoReader.InfoReader$$get_g)(infoReader);
    let denv$$8;
    const inputRecord = (0, _SymbolHelpers.SymbolHelpers$$$SimplerDisplayEnv)(denv$$7);
    denv$$8 = new _TastOps.DisplayEnv(inputRecord.includeStaticParametersInTypeNames, inputRecord.openTopPathsSorted, inputRecord.openTopPathsRaw, inputRecord.shortTypeNames, inputRecord.suppressNestedTypes, inputRecord.maxMembers, inputRecord.showObsoleteMembers, inputRecord.showHiddenMembers, inputRecord.showTyparBinding, inputRecord.showImperativeTyparAnnotations, inputRecord.suppressInlineKeyword, inputRecord.suppressMutableKeyword, inputRecord.showMemberContainers, inputRecord.shortConstraints, true, inputRecord.showAttributes, inputRecord.showOverrides, inputRecord.showConstraintTyparAnnotations, inputRecord.abbreviateAdditionalConstraints, inputRecord.showTyparDefaultConstraints, inputRecord.g, inputRecord.contextAccessibility, inputRecord.generatedValueLayout);
    var $target$$23, vref, ucinfo, apref, ecref, rfinfo, finfo, einfo, pinfo, minfo, vref$$1, minfo$$1, usageText, ty$$2, delty;

    if (item.Item.tag === 0) {
      $target$$23 = 0;
      vref = item.Item.fields[0];
    } else if (item.Item.tag === 1) {
      $target$$23 = 1;
      ucinfo = item.Item.fields[0];
    } else if (item.Item.tag === 3) {
      $target$$23 = 2;
      apref = item.Item.fields[0];
    } else if (item.Item.tag === 4) {
      $target$$23 = 3;
      ecref = item.Item.fields[0];
    } else if (item.Item.tag === 5) {
      $target$$23 = 4;
      rfinfo = item.Item.fields[0];
    } else if (item.Item.tag === 7) {
      $target$$23 = 5;
      finfo = item.Item.fields[0];
    } else if (item.Item.tag === 8) {
      $target$$23 = 6;
      einfo = item.Item.fields[0];
    } else if (item.Item.tag === 9) {
      if (item.Item.fields[1].tail != null) {
        $target$$23 = 7;
        pinfo = item.Item.fields[1].head;
      } else {
        $target$$23 = 14;
      }
    } else if (item.Item.tag === 11) {
      if (item.Item.fields[1].tail != null) {
        $target$$23 = 8;
        minfo = item.Item.fields[1].head;
      } else {
        $target$$23 = 14;
      }
    } else if (item.Item.tag === 10) {
      if (item.Item.fields[1].tail != null) {
        $target$$23 = 8;
        minfo = item.Item.fields[1].head;
      } else {
        $target$$23 = 14;
      }
    } else if (item.Item.tag === 16) {
      $target$$23 = 9;
      vref$$1 = item.Item.fields[1];
    } else if (item.Item.tag === 17) {
      $target$$23 = 10;
    } else if (item.Item.tag === 15) {
      if (item.Item.fields[2] != null) {
        $target$$23 = 11;
        minfo$$1 = item.Item.fields[2];
        usageText = item.Item.fields[1];
      } else {
        $target$$23 = 14;
      }
    } else if (item.Item.tag === 12) {
      $target$$23 = 12;
      ty$$2 = item.Item.fields[0];
    } else if (item.Item.tag === 13) {
      $target$$23 = 13;
      delty = item.Item.fields[0];
    } else {
      $target$$23 = 14;
    }

    switch ($target$$23) {
      case 0:
        {
          const getPrettyParamsOfTypes = function getPrettyParamsOfTypes() {
            const tau$$4 = (0, _tast.ValRef$$get_TauType)(vref);
            const matchValue$$2 = (0, _TastOps.tryDestFunTy)(denv$$8.g, tau$$4);

            if (matchValue$$2 == null) {
              const patternInput$$5 = (0, _NicePrint.prettyLayoutOfUncurriedSig)(denv$$8, item.TyparInst, (0, _Types.L)())(tau$$4);
              return [(0, _Types.L)(), patternInput$$5[1]];
            } else {
              const rtau = matchValue$$2[1];
              const arg = matchValue$$2[0];
              const args = (0, _TastOps.tryDestRefTupleTy)(denv$$8.g, arg);
              const patternInput$$4 = DescriptionListsImpl$$$PrettyParamsOfTypes(g$$7, denv$$8, item.TyparInst, args, rtau);
              return [patternInput$$4[1], patternInput$$4[2]];
            }
          };

          const matchValue$$3 = (0, _tast.ValRef$$get_ValReprInfo)(vref);

          if (matchValue$$3 != null) {
            const valRefInfo = matchValue$$3;
            const patternInput$$6 = (0, _TastOps.GetTopValTypeInFSharpForm)(g$$7, valRefInfo, (0, _tast.ValRef$$get_Type)(vref), m);

            if (patternInput$$6[1].tail != null) {
              const firstCurriedArgInfo = patternInput$$6[1].head;
              const firstCurriedParamDatas = (0, _List.map)(function mapping$$4(_arg1$$2) {
                const pty$$3 = _arg1$$2.fields[1];
                const nmOpt$$2 = _arg1$$2.fields[0];
                return new _infos.ParamData(0, "ParamData", false, false, false, new _infos.OptionalArgInfo(0, "NotOptional"), new _infos.CallerInfo(0, "NoCallerInfo"), nmOpt$$2, new _infos.ReflectedArgInfo(0, "None"), pty$$3);
              }, (0, _List.map)(function mapping$$3(tupledArg$$2) {
                return (0, _infos.ParamNameAndType$$$FromArgInfo$$Z2D9B2ABD)(tupledArg$$2[0], tupledArg$$2[1]);
              }, firstCurriedArgInfo));
              let curriedRetTy;
              const matchValue$$4 = (0, _TastOps.tryDestFunTy)(denv$$8.g, (0, _tast.ValRef$$get_TauType)(vref));

              if (matchValue$$4 == null) {
                curriedRetTy = patternInput$$6[2];
              } else {
                const rtau$$1 = matchValue$$4[1];
                curriedRetTy = rtau$$1;
              }

              const patternInput$$7 = DescriptionListsImpl$$$PrettyParamsOfParamDatas(g$$7, denv$$8, item.TyparInst, firstCurriedParamDatas, curriedRetTy);
              const prettyCurriedRetTyL$$1 = (0, _layout.op_HatHat)(patternInput$$7[2], (0, _layout.op_HatHat)(_layout.SepL$$$space, patternInput$$7[3]));
              return [patternInput$$7[1], prettyCurriedRetTyL$$1];
            } else {
              return getPrettyParamsOfTypes();
            }
          } else {
            return getPrettyParamsOfTypes();
          }
        }

      case 1:
        {
          let prettyParams$$2;
          const matchValue$$5 = (0, _tast.UnionCase$$get_RecdFields)((0, _infos.UnionCaseInfo$$get_UnionCase)(ucinfo));
          var $target$$24, f$$2, fs;

          if (matchValue$$5.tail != null) {
            if (matchValue$$5.tail.tail == null) {
              $target$$24 = 0;
              f$$2 = matchValue$$5.head;
            } else {
              $target$$24 = 1;
              fs = matchValue$$5;
            }
          } else {
            $target$$24 = 1;
            fs = matchValue$$5;
          }

          switch ($target$$24) {
            case 0:
              {
                prettyParams$$2 = (0, _Types.L)(DescriptionListsImpl$$$PrettyParamOfUnionCaseField(g$$7, denv$$8, _NicePrint.isGeneratedUnionCaseField, -1, f$$2), (0, _Types.L)());
                break;
              }

            case 1:
              {
                prettyParams$$2 = (0, _List.mapIndexed)(function mapping$$5(i$$1, f$$4) {
                  return DescriptionListsImpl$$$PrettyParamOfUnionCaseField(g$$7, denv$$8, _NicePrint.isGeneratedUnionCaseField, i$$1, f$$4);
                }, fs);
                break;
              }
          }

          const rty$$1 = (0, _TastOps.generalizedTyconRef)((0, _infos.UnionCaseInfo$$get_TyconRef)(ucinfo));
          const rtyL = (0, _NicePrint.layoutType)(denv$$8, rty$$1);
          return [prettyParams$$2, rtyL];
        }

      case 2:
        {
          const v = (0, _tast.ActivePatternElemRef$$get_ActivePatternVal)(apref);
          const tau$$5 = (0, _tast.ValRef$$get_TauType)(v);
          const patternInput$$8 = (0, _TastOps.stripFunTy)(denv$$8.g, tau$$5);
          const apinfo = (0, _TastOps.TryGetActivePatternInfo)(v);
          const aparity = (0, _List.length)((0, _TastOps.ActivePatternInfo$002Eget_Names)(apinfo)) | 0;
          const rty$$2 = aparity <= 1 ? patternInput$$8[1] : (0, _List.item)((0, _tast.ActivePatternElemRef$$get_CaseIndex)(apref), (0, _TastOps.argsOfAppTy)(g$$7, patternInput$$8[1]));
          const patternInput$$9 = DescriptionListsImpl$$$PrettyParamsOfTypes(g$$7, denv$$8, item.TyparInst, patternInput$$8[0], rty$$2);
          return [patternInput$$9[1], patternInput$$9[2]];
        }

      case 3:
        {
          const prettyParams$$4 = (0, _List.mapIndexed)(function mapping$$6(i$$2, f$$6) {
            return DescriptionListsImpl$$$PrettyParamOfUnionCaseField(g$$7, denv$$8, _NicePrint.isGeneratedExceptionField, i$$2, f$$6);
          }, (0, _TastOps.recdFieldsOfExnDefRef)(ecref));
          const patternInput$$10 = (0, _NicePrint.prettyLayoutOfUncurriedSig)(denv$$8, item.TyparInst, (0, _Types.L)())((0, _TcGlobals.TcGlobals$$get_exn_ty)(g$$7));
          return [prettyParams$$4, patternInput$$10[1]];
        }

      case 4:
        {
          const patternInput$$11 = (0, _NicePrint.prettyLayoutOfUncurriedSig)(denv$$8, item.TyparInst, (0, _Types.L)())((0, _infos.RecdFieldInfo$$get_FieldType)(rfinfo));
          return [(0, _Types.L)(), patternInput$$11[1]];
        }

      case 5:
        {
          const patternInput$$12 = (0, _NicePrint.prettyLayoutOfUncurriedSig)(denv$$8, item.TyparInst, (0, _Types.L)())((0, _infos.ILFieldInfo$$FieldType$$73F6E43C)(finfo, amap, m));
          return [(0, _Types.L)(), patternInput$$12[1]];
        }

      case 6:
        {
          const patternInput$$13 = (0, _NicePrint.prettyLayoutOfUncurriedSig)(denv$$8, item.TyparInst, (0, _Types.L)())((0, _InfoReader.PropTypOfEventInfo)(infoReader, m, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere"), einfo));
          return [(0, _Types.L)(), patternInput$$13[1]];
        }

      case 7:
        {
          const paramDatas$$1 = (0, _infos.PropInfo$$GetParamDatas$$73F6E43C)(pinfo, amap, m);
          const rty$$3 = (0, _infos.PropInfo$$GetPropertyType$$73F6E43C)(pinfo, amap, m);
          const patternInput$$14 = DescriptionListsImpl$$$PrettyParamsOfParamDatas(g$$7, denv$$8, item.TyparInst, paramDatas$$1, rty$$3);
          return [patternInput$$14[1], patternInput$$14[2]];
        }

      case 8:
        {
          const paramDatas$$2 = (0, _List.head)((0, _infos.MethInfo$$GetParamDatas$$Z5D984B3C)(minfo, amap, m, (0, _infos.MethInfo$$get_FormalMethodInst)(minfo)));
          const rty$$4 = (0, _infos.MethInfo$$GetFSharpReturnTy$$Z5D984B3C)(minfo, amap, m, (0, _infos.MethInfo$$get_FormalMethodInst)(minfo));
          const patternInput$$15 = DescriptionListsImpl$$$PrettyParamsOfParamDatas(g$$7, denv$$8, item.TyparInst, paramDatas$$2, rty$$4);
          return [patternInput$$15[1], patternInput$$15[2]];
        }

      case 9:
        {
          infoReader = infoReader;
          m = m;
          denv$$7 = denv$$8;
          item = new _NameResolution.ItemWithInst(new _NameResolution.Item(0, "Value", vref$$1), item.TyparInst);
          continue DescriptionListsImpl$$$PrettyParamsAndReturnTypeOfItem;
        }

      case 10:
        {
          return [(0, _Types.L)(), _layout.emptyL];
        }

      case 11:
        {
          if (usageText() != null) {
            const rty$$6 = (0, _infos.MethInfo$$GetFSharpReturnTy$$Z5D984B3C)(minfo$$1, amap, m, (0, _infos.MethInfo$$get_FormalMethodInst)(minfo$$1));
            const patternInput$$18 = (0, _NicePrint.prettyLayoutOfUncurriedSig)(denv$$8, item.TyparInst, (0, _Types.L)())(rty$$6);
            return [(0, _Types.L)(), patternInput$$18[1]];
          } else {
            const argNamesAndTys = (0, _SymbolHelpers.SymbolHelpers$$$ParamNameAndTypesOfUnaryCustomOperation)(g$$7, minfo$$1);
            const patternInput$$16 = (0, _TastOps.PrettyTypes$$$PrettifyTypes)(g$$7, (0, _List.map)(function mapping$$7(_arg2) {
              const ty$$1 = _arg2.fields[1];
              return ty$$1;
            }, argNamesAndTys));
            const paramDatas$$3 = (0, _List.map2)(function mapping$$8(_arg3, argTy) {
              const nmOpt$$3 = _arg3.fields[0];
              return new _infos.ParamData(0, "ParamData", false, false, false, new _infos.OptionalArgInfo(0, "NotOptional"), new _infos.CallerInfo(0, "NoCallerInfo"), nmOpt$$3, new _infos.ReflectedArgInfo(0, "None"), argTy);
            }, argNamesAndTys, patternInput$$16[0]);
            const rty$$5 = (0, _infos.MethInfo$$GetFSharpReturnTy$$Z5D984B3C)(minfo$$1, amap, m, (0, _infos.MethInfo$$get_FormalMethodInst)(minfo$$1));
            const patternInput$$17 = DescriptionListsImpl$$$PrettyParamsOfParamDatas(g$$7, denv$$8, item.TyparInst, paramDatas$$3, rty$$5);
            return [patternInput$$17[1], patternInput$$17[2]];
          }
        }

      case 12:
        {
          const patternInput$$19 = (0, _NicePrint.prettyLayoutOfUncurriedSig)(denv$$8, item.TyparInst, (0, _Types.L)())(ty$$2);
          return [(0, _Types.L)(), patternInput$$19[1]];
        }

      case 13:
        {
          const fty = (0, _InfoReader.GetSigOfFunctionForDelegate)(infoReader, delty, m, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere")).fields[3];
          const patternInput$$21 = DescriptionListsImpl$$$PrettyParamsOfParamDatas(g$$7, denv$$8, item.TyparInst, (0, _Types.L)(new _infos.ParamData(0, "ParamData", false, false, false, new _infos.OptionalArgInfo(0, "NotOptional"), new _infos.CallerInfo(0, "NoCallerInfo"), null, new _infos.ReflectedArgInfo(0, "None"), fty), (0, _Types.L)()), delty);
          return [patternInput$$21[1], patternInput$$21[2]];
        }

      case 14:
        {
          return [(0, _Types.L)(), _layout.emptyL];
        }
    }
  }
}

function DescriptionListsImpl$$$GlyphOfItem(denv$$9, item$$1) {
  const reprToGlyph = function reprToGlyph(repr) {
    switch (repr.tag) {
      case 1:
        {
          return new _ServiceConstants.FSharpGlyph(16, "Type");
        }

      case 2:
        {
          return new _ServiceConstants.FSharpGlyph(17, "Union");
        }

      case 3:
        {
          const td = repr.fields[0].fields[2];

          if ((0, _il.ILTypeDef$$get_IsClass)(td)) {
            return new _ServiceConstants.FSharpGlyph(0, "Class");
          } else if ((0, _il.ILTypeDef$$get_IsStruct)(td)) {
            return new _ServiceConstants.FSharpGlyph(14, "Struct");
          } else if ((0, _il.ILTypeDef$$get_IsInterface)(td)) {
            return new _ServiceConstants.FSharpGlyph(8, "Interface");
          } else if ((0, _il.ILTypeDef$$get_IsEnum)(td)) {
            return new _ServiceConstants.FSharpGlyph(3, "Enum");
          } else {
            return new _ServiceConstants.FSharpGlyph(2, "Delegate");
          }
        }

      case 4:
        {
          return new _ServiceConstants.FSharpGlyph(15, "Typedef");
        }

      case 5:
        {
          return new _ServiceConstants.FSharpGlyph(15, "Typedef");
        }

      case 6:
        {
          return new _ServiceConstants.FSharpGlyph(0, "Class");
        }

      default:
        {
          const om = repr.fields[0];

          if (om.fsobjmodel_kind.tag === 1) {
            return new _ServiceConstants.FSharpGlyph(8, "Interface");
          } else if (om.fsobjmodel_kind.tag === 2) {
            return new _ServiceConstants.FSharpGlyph(14, "Struct");
          } else if (om.fsobjmodel_kind.tag === 3) {
            return new _ServiceConstants.FSharpGlyph(2, "Delegate");
          } else if (om.fsobjmodel_kind.tag === 4) {
            return new _ServiceConstants.FSharpGlyph(3, "Enum");
          } else {
            return new _ServiceConstants.FSharpGlyph(0, "Class");
          }
        }
    }
  };

  const typeToGlyph = function typeToGlyph(ty$$3) {
    if ((0, _TastOps.isAppTy)(denv$$9.g, ty$$3)) {
      const tcref = (0, _TastOps.tcrefOfAppTy)(denv$$9.g, ty$$3);
      return reprToGlyph((0, _tast.EntityRef$$get_TypeReprInfo)(tcref));
    } else if ((0, _TastOps.isStructTupleTy)(denv$$9.g, ty$$3)) {
      return new _ServiceConstants.FSharpGlyph(14, "Struct");
    } else if ((0, _TastOps.isRefTupleTy)(denv$$9.g, ty$$3)) {
      return new _ServiceConstants.FSharpGlyph(0, "Class");
    } else if (DescriptionListsImpl$$$isFunction(denv$$9.g, ty$$3)) {
      return new _ServiceConstants.FSharpGlyph(2, "Delegate");
    } else if ((0, _TastOps.isTyparTy)(denv$$9.g, ty$$3)) {
      return new _ServiceConstants.FSharpGlyph(14, "Struct");
    } else {
      return new _ServiceConstants.FSharpGlyph(15, "Typedef");
    }
  };

  try {
    return function f$$8() {
      var minfos;
      var $target$$25, vref$$2, ty$$4, minfos$$1;

      if (item$$1.tag === 0) {
        $target$$25 = 0;
        vref$$2 = item$$1.fields[0];
      } else if (item$$1.tag === 16) {
        $target$$25 = 0;
        vref$$2 = item$$1.fields[1];
      } else if (item$$1.tag === 14) {
        if (item$$1.fields[1].tail != null) {
          $target$$25 = 1;
          ty$$4 = item$$1.fields[1].head;
        } else {
          $target$$25 = 10;
        }
      } else if (item$$1.tag === 1) {
        $target$$25 = 2;
      } else if (item$$1.tag === 3) {
        $target$$25 = 2;
      } else if (item$$1.tag === 4) {
        $target$$25 = 3;
      } else if (item$$1.tag === 5) {
        $target$$25 = 4;
      } else if (item$$1.tag === 7) {
        $target$$25 = 5;
      } else if (item$$1.tag === 8) {
        $target$$25 = 6;
      } else if (item$$1.tag === 9) {
        $target$$25 = 7;
      } else if (item$$1.tag === 11) {
        $target$$25 = 8;
      } else if (item$$1.tag === 13) {
        $target$$25 = 8;
      } else if (item$$1.tag === 12) {
        $target$$25 = 8;
      } else if (item$$1.tag === 15) {
        $target$$25 = 8;
      } else if (item$$1.tag === 10) {
        if (minfos = item$$1.fields[1], (0, _List.forAll)(function predicate(minfo$$2) {
          return (0, _infos.MethInfo$$get_IsExtensionMember)(minfo$$2);
        }, minfos)) {
          $target$$25 = 9;
          minfos$$1 = item$$1.fields[1];
        } else {
          $target$$25 = 10;
        }
      } else {
        $target$$25 = 10;
      }

      switch ($target$$25) {
        case 0:
          {
            if (DescriptionListsImpl$$$isFunction(denv$$9.g, (0, _tast.ValRef$$get_Type)(vref$$2))) {
              return new _ServiceConstants.FSharpGlyph(9, "Method");
            } else if ((0, _tast.ValRef$$get_LiteralValue)(vref$$2) != null) {
              return new _ServiceConstants.FSharpGlyph(1, "Constant");
            } else {
              return new _ServiceConstants.FSharpGlyph(18, "Variable");
            }
          }

        case 1:
          {
            return typeToGlyph((0, _TastOps.stripTyEqns)(denv$$9.g, ty$$4));
          }

        case 2:
          {
            return new _ServiceConstants.FSharpGlyph(4, "EnumMember");
          }

        case 3:
          {
            return new _ServiceConstants.FSharpGlyph(6, "Exception");
          }

        case 4:
          {
            return new _ServiceConstants.FSharpGlyph(7, "Field");
          }

        case 5:
          {
            return new _ServiceConstants.FSharpGlyph(7, "Field");
          }

        case 6:
          {
            return new _ServiceConstants.FSharpGlyph(5, "Event");
          }

        case 7:
          {
            return new _ServiceConstants.FSharpGlyph(13, "Property");
          }

        case 8:
          {
            return new _ServiceConstants.FSharpGlyph(9, "Method");
          }

        case 9:
          {
            return new _ServiceConstants.FSharpGlyph(19, "ExtensionMethod");
          }

        case 10:
          {
            var $target$$26, tcref$$1, modref;

            if (item$$1.tag === 10) {
              $target$$26 = 0;
            } else if (item$$1.tag === 17) {
              $target$$26 = 1;
            } else if (item$$1.tag === 14) {
              $target$$26 = 1;
            } else if (item$$1.tag === 22) {
              if (item$$1.fields[0].tail != null) {
                $target$$26 = 2;
                tcref$$1 = item$$1.fields[0].head;
              } else {
                $target$$26 = 6;
              }
            } else if (item$$1.tag === 18) {
              if (item$$1.fields[0].tail != null) {
                $target$$26 = 3;
                modref = item$$1.fields[0].head;
              } else {
                $target$$26 = 6;
              }
            } else if (item$$1.tag === 20) {
              $target$$26 = 4;
            } else if (item$$1.tag === 21) {
              $target$$26 = 5;
            } else {
              $target$$26 = 6;
            }

            switch ($target$$26) {
              case 0:
                {
                  return new _ServiceConstants.FSharpGlyph(9, "Method");
                }

              case 1:
                {
                  return new _ServiceConstants.FSharpGlyph(0, "Class");
                }

              case 2:
                {
                  if ((0, _tast.EntityRef$$get_IsEnumTycon)(tcref$$1) ? true : (0, _tast.EntityRef$$get_IsILEnumTycon)(tcref$$1)) {
                    return new _ServiceConstants.FSharpGlyph(3, "Enum");
                  } else if ((0, _tast.EntityRef$$get_IsExceptionDecl)(tcref$$1)) {
                    return new _ServiceConstants.FSharpGlyph(6, "Exception");
                  } else if ((0, _tast.EntityRef$$get_IsFSharpDelegateTycon)(tcref$$1)) {
                    return new _ServiceConstants.FSharpGlyph(2, "Delegate");
                  } else if ((0, _tast.EntityRef$$get_IsFSharpInterfaceTycon)(tcref$$1)) {
                    return new _ServiceConstants.FSharpGlyph(8, "Interface");
                  } else if ((0, _tast.EntityRef$$get_IsFSharpStructOrEnumTycon)(tcref$$1)) {
                    return new _ServiceConstants.FSharpGlyph(14, "Struct");
                  } else if ((0, _tast.EntityRef$$get_IsModule)(tcref$$1)) {
                    return new _ServiceConstants.FSharpGlyph(11, "Module");
                  } else if ((0, _tast.EntityRef$$get_IsNamespace)(tcref$$1)) {
                    return new _ServiceConstants.FSharpGlyph(12, "NameSpace");
                  } else if ((0, _tast.EntityRef$$get_IsUnionTycon)(tcref$$1)) {
                    return new _ServiceConstants.FSharpGlyph(17, "Union");
                  } else if ((0, _tast.EntityRef$$get_IsILTycon)(tcref$$1)) {
                    const tydef = (0, _tast.EntityRef$$get_ILTyconInfo)(tcref$$1).fields[2];

                    if ((0, _il.ILTypeDef$$get_IsInterface)(tydef)) {
                      return new _ServiceConstants.FSharpGlyph(8, "Interface");
                    } else if ((0, _il.ILTypeDef$$get_IsDelegate)(tydef)) {
                      return new _ServiceConstants.FSharpGlyph(2, "Delegate");
                    } else if ((0, _il.ILTypeDef$$get_IsEnum)(tydef)) {
                      return new _ServiceConstants.FSharpGlyph(3, "Enum");
                    } else if ((0, _il.ILTypeDef$$get_IsStruct)(tydef)) {
                      return new _ServiceConstants.FSharpGlyph(14, "Struct");
                    } else {
                      return new _ServiceConstants.FSharpGlyph(0, "Class");
                    }
                  } else {
                    return new _ServiceConstants.FSharpGlyph(0, "Class");
                  }
                }

              case 3:
                {
                  if ((0, _tast.EntityRef$$get_IsNamespace)(modref)) {
                    return new _ServiceConstants.FSharpGlyph(12, "NameSpace");
                  } else {
                    return new _ServiceConstants.FSharpGlyph(11, "Module");
                  }
                }

              case 4:
                {
                  return new _ServiceConstants.FSharpGlyph(18, "Variable");
                }

              case 5:
                {
                  return new _ServiceConstants.FSharpGlyph(18, "Variable");
                }

              case 6:
                {
                  return new _ServiceConstants.FSharpGlyph(20, "Error");
                }
            }
          }
      }
    }();
  } catch (matchValue$$8) {
    if (matchValue$$8 instanceof _ErrorLogger.UnresolvedPathReferenceNoRange) {
      return new _ServiceConstants.FSharpGlyph(0, "Class");
    } else {
      throw matchValue$$8;
    }
  }
}

function DescriptionListsImpl$$$AnotherFlattenItems(g$$8, _m, item$$2) {
  var $target$$27;

  switch (item$$2.tag) {
    case 11:
      $target$$27 = 0;
      break;

    case 12:
    case 13:
      $target$$27 = 1;
      break;

    case 6:
    case 7:
      $target$$27 = 2;
      break;

    case 8:
      $target$$27 = 3;
      break;

    case 5:
      $target$$27 = 4;
      break;

    case 0:
      $target$$27 = 5;
      break;

    case 1:
      $target$$27 = 6;
      break;

    case 4:
      $target$$27 = 7;
      break;

    case 9:
      $target$$27 = 8;
      break;

    case 10:
      $target$$27 = 9;
      break;

    case 15:
      $target$$27 = 10;
      break;

    case 17:
      $target$$27 = 11;
      break;

    case 16:
      $target$$27 = 12;
      break;

    default:
      $target$$27 = 13;
  }

  switch ($target$$27) {
    case 0:
      {
        const nm$$3 = item$$2.fields[0];
        const cinfos = item$$2.fields[1];
        return (0, _List.map)(function (minfo$$3) {
          return new _NameResolution.Item(11, "CtorGroup", nm$$3, (0, _Types.L)(minfo$$3, (0, _Types.L)()));
        }, cinfos);
      }

    case 1:
      {
        return (0, _Types.L)(item$$2, (0, _Types.L)());
      }

    case 2:
      {
        return (0, _Types.L)();
      }

    case 3:
      {
        return (0, _Types.L)();
      }

    case 4:
      {
        const rfinfo$$1 = item$$2.fields[0];

        if (DescriptionListsImpl$$$isFunction(g$$8, (0, _infos.RecdFieldInfo$$get_FieldType)(rfinfo$$1))) {
          return (0, _Types.L)(item$$2, (0, _Types.L)());
        } else {
          return (0, _Types.L)();
        }
      }

    case 5:
      {
        const v$$1 = item$$2.fields[0];

        if (DescriptionListsImpl$$$isFunction(g$$8, (0, _tast.ValRef$$get_Type)(v$$1))) {
          return (0, _Types.L)(item$$2, (0, _Types.L)());
        } else {
          return (0, _Types.L)();
        }
      }

    case 6:
      {
        const ucr = item$$2.fields[0];

        if (!(0, _tast.UnionCase$$get_IsNullary)((0, _infos.UnionCaseInfo$$get_UnionCase)(ucr))) {
          return (0, _Types.L)(item$$2, (0, _Types.L)());
        } else {
          return (0, _Types.L)();
        }
      }

    case 7:
      {
        const ecr = item$$2.fields[0];

        if ((0, _TastOps.recdFieldsOfExnDefRef)(ecr).tail == null) {
          return (0, _Types.L)();
        } else {
          return (0, _Types.L)(item$$2, (0, _Types.L)());
        }
      }

    case 8:
      {
        const pinfos = item$$2.fields[1];
        const pinfo$$1 = (0, _List.head)(pinfos);

        if ((0, _infos.PropInfo$$get_IsIndexer)(pinfo$$1)) {
          return (0, _Types.L)(item$$2, (0, _Types.L)());
        } else {
          return (0, _Types.L)();
        }
      }

    case 9:
      {
        const orig = item$$2.fields[2];
        const nm$$4 = item$$2.fields[0];
        const minfos$$2 = item$$2.fields[1];
        return (0, _List.map)(function mapping$$9(minfo$$4) {
          return new _NameResolution.Item(10, "MethodGroup", nm$$4, (0, _Types.L)(minfo$$4, (0, _Types.L)()), orig);
        }, minfos$$2);
      }

    case 10:
      {
        const _name = item$$2.fields[0];
        const _minfo = item$$2.fields[2];
        const _helpText = item$$2.fields[1];
        return (0, _Types.L)(item$$2, (0, _Types.L)());
      }

    case 11:
      {
        return (0, _Types.L)();
      }

    case 12:
      {
        return (0, _Types.L)();
      }

    case 13:
      {
        return (0, _Types.L)();
      }
  }
}

const FSharpDeclarationListItem = (0, _Types.declare)(function FSharpDeclarationListItem(name$$1, nameInCode, fullName, glyph, _info, accessibility, kind, isOwnMember, priority, isResolved, namespaceToOpen) {
  const $this$$2 = this;
  $this$$2.name = name$$1;
  $this$$2.nameInCode = nameInCode;
  $this$$2.fullName = fullName;
  $this$$2.glyph = glyph;
  $this$$2.accessibility = accessibility;
  $this$$2.kind = kind;
  $this$$2.isOwnMember = isOwnMember;
  $this$$2.priority = priority;
  $this$$2.isResolved = isResolved;
  $this$$2.namespaceToOpen = namespaceToOpen;
});
exports.FSharpDeclarationListItem = FSharpDeclarationListItem;

function FSharpDeclarationListItem$$$$002Ector$$Z5B12C4FE(name$$1, nameInCode, fullName, glyph, _info, accessibility, kind, isOwnMember, priority, isResolved, namespaceToOpen) {
  return this != null ? FSharpDeclarationListItem.call(this, name$$1, nameInCode, fullName, glyph, _info, accessibility, kind, isOwnMember, priority, isResolved, namespaceToOpen) : new FSharpDeclarationListItem(name$$1, nameInCode, fullName, glyph, _info, accessibility, kind, isOwnMember, priority, isResolved, namespaceToOpen);
}

function FSharpDeclarationListItem$$get_Name(__$$5) {
  return __$$5.name;
}

function FSharpDeclarationListItem$$get_NameInCode(__$$6) {
  return __$$6.nameInCode;
}

function FSharpDeclarationListItem$$get_Glyph(__$$7) {
  return __$$7.glyph;
}

function FSharpDeclarationListItem$$get_Accessibility(__$$8) {
  return __$$8.accessibility;
}

function FSharpDeclarationListItem$$get_Kind(__$$9) {
  return __$$9.kind;
}

function FSharpDeclarationListItem$$get_IsOwnMember(__$$10) {
  return __$$10.isOwnMember;
}

function FSharpDeclarationListItem$$get_MinorPriority(__$$11) {
  return __$$11.priority;
}

function FSharpDeclarationListItem$$get_FullName(__$$12) {
  return __$$12.fullName;
}

function FSharpDeclarationListItem$$get_IsResolved(__$$13) {
  return __$$13.isResolved;
}

function FSharpDeclarationListItem$$get_NamespaceToOpen(__$$14) {
  return __$$14.namespaceToOpen;
}

const FSharpDeclarationListInfo = (0, _Types.declare)(function FSharpDeclarationListInfo(declarations, isForType, isError) {
  const $this$$3 = this;
  $this$$3.declarations = declarations;
  $this$$3.isForType = isForType;
  $this$$3.isError = isError;
});
exports.FSharpDeclarationListInfo = FSharpDeclarationListInfo;

function FSharpDeclarationListInfo$$$$002Ector$$Z1CF26BA3(declarations, isForType, isError) {
  return this != null ? FSharpDeclarationListInfo.call(this, declarations, isForType, isError) : new FSharpDeclarationListInfo(declarations, isForType, isError);
}

(function FSharpDeclarationListInfo$$$$002Ecctor() {
  FSharpDeclarationListInfo.fsharpNamespace = ["Microsoft", "FSharp"];
})();

function FSharpDeclarationListInfo$$get_Items(__$$15) {
  return __$$15.declarations;
}

function FSharpDeclarationListInfo$$get_IsForType(__$$16) {
  return __$$16.isForType;
}

function FSharpDeclarationListInfo$$get_IsError(__$$17) {
  return __$$17.isError;
}

function FSharpDeclarationListInfo$$$Create$$Z76BB07D2(infoReader$$1, m$$1, denv$$10, getAccessibility, items, reactor, currentNamespaceOrModule, isAttributeApplicationContext, checkAlive) {
  var state;
  const g$$9 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$1);
  const isForType$$1 = (0, _List.exists)(function predicate$$1(x) {
    return x.Type != null;
  }, items);
  const items$$1 = (0, _SymbolHelpers.SymbolHelpers$$$RemoveExplicitlySuppressedCompletionItems)(g$$9, items);

  const tyconRefOptEq = function tyconRefOptEq(tref1, tref2) {
    const matchValue$$9 = [tref1, tref2];

    if (matchValue$$9[0] != null) {
      const tref1$$1 = matchValue$$9[0];
      return (0, _TastOps.tyconRefEq)(g$$9, tref1$$1, matchValue$$9[1]);
    } else {
      return false;
    }
  };

  const patternInput$$23 = (state = [0, 0, (0, _Types.L)()], function (list$$14) {
    return (0, _List.fold)(function folder(tupledArg$$3, x$$3) {
      if (x$$3.MinorPriority === tupledArg$$3[0]) {
        return [tupledArg$$3[0], tupledArg$$3[1], (0, _Types.L)(x$$3, tupledArg$$3[2])];
      } else {
        const normalizedPrior = tupledArg$$3[1] + 1 | 0;
        return [x$$3.MinorPriority, normalizedPrior, (0, _Types.L)(new _SymbolHelpers.CompletionItem(x$$3.ItemWithInst, x$$3.Kind, x$$3.IsOwnMember, normalizedPrior, x$$3.Type, x$$3.Unresolved), tupledArg$$3[2])];
      }
    }, state, list$$14);
  })((0, _List.sortBy)(function projection(x$$2) {
    return x$$2.MinorPriority;
  }, (0, _List.map)(function mapping$$10(x$$1) {
    const matchValue$$10 = (0, _SymbolHelpers.CompletionItem$$get_Item)(x$$1);
    var $target$$37, tcref$$2, tcref$$3, cinfo, minfo$$5, pinfo$$2, finfo$$1;

    if (matchValue$$10.tag === 14) {
      if (matchValue$$10.fields[1].tail != null) {
        if (matchValue$$10.fields[1].head.tag === 1) {
          $target$$37 = 0;
          tcref$$2 = matchValue$$10.fields[1].head.fields[0];
        } else {
          $target$$37 = 6;
        }
      } else {
        $target$$37 = 6;
      }
    } else if (matchValue$$10.tag === 12) {
      if (matchValue$$10.fields[0].tag === 1) {
        $target$$37 = 1;
        tcref$$3 = matchValue$$10.fields[0].fields[0];
      } else {
        $target$$37 = 6;
      }
    } else if (matchValue$$10.tag === 13) {
      if (matchValue$$10.fields[0].tag === 1) {
        $target$$37 = 1;
        tcref$$3 = matchValue$$10.fields[0].fields[0];
      } else {
        $target$$37 = 6;
      }
    } else if (matchValue$$10.tag === 11) {
      if (matchValue$$10.fields[1].tail != null) {
        $target$$37 = 2;
        cinfo = matchValue$$10.fields[1].head;
      } else {
        $target$$37 = 6;
      }
    } else if (matchValue$$10.tag === 10) {
      if (matchValue$$10.fields[1].tail != null) {
        $target$$37 = 3;
        minfo$$5 = matchValue$$10.fields[1].head;
      } else {
        $target$$37 = 6;
      }
    } else if (matchValue$$10.tag === 9) {
      if (matchValue$$10.fields[1].tail != null) {
        $target$$37 = 4;
        pinfo$$2 = matchValue$$10.fields[1].head;
      } else {
        $target$$37 = 6;
      }
    } else if (matchValue$$10.tag === 7) {
      $target$$37 = 5;
      finfo$$1 = matchValue$$10.fields[0];
    } else {
      $target$$37 = 6;
    }

    switch ($target$$37) {
      case 0:
        {
          return new _SymbolHelpers.CompletionItem(x$$1.ItemWithInst, x$$1.Kind, x$$1.IsOwnMember, 1 + (0, _List.length)((0, _tast.EntityRef$$get_TyparsNoRange)(tcref$$2)), x$$1.Type, x$$1.Unresolved);
        }

      case 1:
        {
          return new _SymbolHelpers.CompletionItem(x$$1.ItemWithInst, x$$1.Kind, x$$1.IsOwnMember, 1000 + (0, _List.length)((0, _tast.EntityRef$$get_TyparsNoRange)(tcref$$3)), x$$1.Type, x$$1.Unresolved);
        }

      case 2:
        {
          return new _SymbolHelpers.CompletionItem(x$$1.ItemWithInst, x$$1.Kind, x$$1.IsOwnMember, 1000 + 10 * (0, _List.length)((0, _tast.EntityRef$$get_TyparsNoRange)((0, _infos.MethInfo$$get_DeclaringTyconRef)(cinfo))), x$$1.Type, x$$1.Unresolved);
        }

      case 3:
        {
          return new _SymbolHelpers.CompletionItem(x$$1.ItemWithInst, x$$1.Kind, tyconRefOptEq(x$$1.Type, (0, _infos.MethInfo$$get_DeclaringTyconRef)(minfo$$5)), x$$1.MinorPriority, x$$1.Type, x$$1.Unresolved);
        }

      case 4:
        {
          return new _SymbolHelpers.CompletionItem(x$$1.ItemWithInst, x$$1.Kind, tyconRefOptEq(x$$1.Type, (0, _infos.PropInfo$$get_DeclaringTyconRef)(pinfo$$2)), x$$1.MinorPriority, x$$1.Type, x$$1.Unresolved);
        }

      case 5:
        {
          return new _SymbolHelpers.CompletionItem(x$$1.ItemWithInst, x$$1.Kind, tyconRefOptEq(x$$1.Type, (0, _infos.ILFieldInfo$$get_DeclaringTyconRef)(finfo$$1)), x$$1.MinorPriority, x$$1.Type, x$$1.Unresolved);
        }

      case 6:
        {
          return x$$1;
        }
    }
  }, items$$1), {
    Compare: _Util.comparePrimitives
  }));

  if (_lib.verbose) {
    (0, _ildiag.dprintf)((0, _String.printf)("service.ml: mkDecls: %d found groups after filtering\n"))((0, _List.length)(patternInput$$23[2]));
  }

  const items$$4 = (0, _List.map)(function mapping$$11(tupledArg$$4) {
    const item$$3 = (0, _List.head)(tupledArg$$4[1]);
    let name$$2;

    if (item$$3.Unresolved == null) {
      name$$2 = (0, _NameResolution.Item$$get_DisplayName)((0, _SymbolHelpers.CompletionItem$$get_Item)(item$$3));
    } else {
      const u$$1 = item$$3.Unresolved;
      name$$2 = u$$1.DisplayName;
    }

    return [name$$2, tupledArg$$4[1]];
  }, (0, _List.groupBy)(function projection$$2(x$$5) {
    if (x$$5.Unresolved == null) {
      return (0, _NameResolution.Item$$get_DisplayName)((0, _SymbolHelpers.CompletionItem$$get_Item)(x$$5));
    } else {
      const u = x$$5.Unresolved;

      if (!(0, _Array.equalsWith)(_Util.comparePrimitives, u.Namespace, null) ? u.Namespace.length === 0 : false) {
        return u.DisplayName;
      } else {
        const ns = u.Namespace;
        return (0, _String.join)(".", ...ns) + "." + u.DisplayName;
      }
    }
  }, (0, _SymbolHelpers.SymbolHelpers$$$RemoveDuplicateCompletionItems)(g$$9, (0, _List.sortBy)(function projection$$1(x$$4) {
    return x$$4.Unresolved != null;
  }, (0, _List.reverse)(patternInput$$23[2]), {
    Compare: _Util.comparePrimitives
  })), {
    Equals($x$$10, $y$$11) {
      return $x$$10 === $y$$11;
    },

    GetHashCode: _Util.structuralHash
  }));
  let items$$8;

  const isOperatorItem = function isOperatorItem(tupledArg$$5) {
    const matchValue$$14 = (0, _List.map)(function mapping$$12(x$$6) {
      return (0, _SymbolHelpers.CompletionItem$$get_Item)(x$$6);
    }, tupledArg$$5[1]);
    var $target$$38;

    if (matchValue$$14.tail != null) {
      if (matchValue$$14.head.tag === 0) {
        if (matchValue$$14.tail.tail == null) {
          $target$$38 = 0;
        } else {
          $target$$38 = 1;
        }
      } else if (matchValue$$14.head.tag === 10) {
        if (matchValue$$14.tail.tail == null) {
          $target$$38 = 0;
        } else {
          $target$$38 = 1;
        }
      } else if (matchValue$$14.head.tag === 1) {
        if (matchValue$$14.tail.tail == null) {
          $target$$38 = 0;
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
          return (0, _PrettyNaming.IsOperatorName)(tupledArg$$5[0]);
        }

      case 1:
        {
          return false;
        }
    }
  };

  const isActivePatternItem = function isActivePatternItem(items$$6) {
    const matchValue$$15 = (0, _List.map)(function mapping$$13(x$$7) {
      return (0, _SymbolHelpers.CompletionItem$$get_Item)(x$$7);
    }, items$$6);
    var $target$$39, vref$$3;

    if (matchValue$$15.tail != null) {
      if (matchValue$$15.head.tag === 0) {
        if (matchValue$$15.tail.tail == null) {
          $target$$39 = 0;
          vref$$3 = matchValue$$15.head.fields[0];
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
          return (0, _PrettyNaming.IsActivePatternName)((0, _tast.ValRef$$get_CompiledName)(vref$$3));
        }

      case 1:
        {
          return false;
        }
    }
  };

  items$$8 = (0, _List.filter)(function predicate$$2(tupledArg$$6) {
    if (!isOperatorItem([tupledArg$$6[0], tupledArg$$6[1]]) ? !(tupledArg$$6[0] === "[]") : false) {
      return !isActivePatternItem(tupledArg$$6[1]);
    } else {
      return false;
    }
  }, items$$4);
  const decls = (0, _List.map)(function mapping$$16(tupledArg$$7) {
    if (tupledArg$$7[1].tail == null) {
      throw new Error("Unexpected empty bag");
    } else {
      let items$$9;
      const matchValue$$16 = (0, _List.partition)(function predicate$$3(x$$8) {
        return x$$8.Unresolved == null;
      }, tupledArg$$7[1]);
      items$$9 = matchValue$$16[0].tail == null ? matchValue$$16[1] : matchValue$$16[0];
      const item$$4 = (0, _List.head)(items$$9);
      const glyph$$1 = DescriptionListsImpl$$$GlyphOfItem(denv$$10, (0, _SymbolHelpers.CompletionItem$$get_Item)(item$$4));
      let patternInput$$24;

      if ((0, _String.startsWith)(tupledArg$$7[0], "( ", 4) ? (0, _String.endsWith)(tupledArg$$7[0], " )", 4) : false) {
        const cleanName = tupledArg$$7[0].slice(2, tupledArg$$7[0].length - 3 + 1);
        patternInput$$24 = [cleanName, (0, _PrettyNaming.IsOperatorName)(tupledArg$$7[0]) ? cleanName : "``" + cleanName + "``"];
      } else {
        patternInput$$24 = [tupledArg$$7[0], item$$4.Unresolved == null ? (0, _lexhelp.Keywords$$$QuoteIdentifierIfNeeded)(tupledArg$$7[0]) : tupledArg$$7[0]];
      }

      const isAttributeItem = new _Util.Lazy(function () {
        return (0, _SymbolHelpers.SymbolHelpers$$$IsAttribute)(infoReader$$1, (0, _SymbolHelpers.CompletionItem$$get_Item)(item$$4));
      });

      const cutAttributeSuffix = function cutAttributeSuffix(name$$5) {
        if (((isAttributeApplicationContext ? name$$5 !== "Attribute" : false) ? (0, _String.endsWith)(name$$5, "Attribute", 4) : false) ? isAttributeItem.Value : false) {
          return name$$5.slice(0, name$$5.length - "Attribute".length - 1 + 1);
        } else {
          return name$$5;
        }
      };

      const name$$6 = cutAttributeSuffix(patternInput$$24[0]);
      const nameInCode$$2 = cutAttributeSuffix(patternInput$$24[1]);
      let fullName$$1;

      if (item$$4.Unresolved == null) {
        fullName$$1 = (0, _SymbolHelpers.SymbolHelpers$$$FullNameOfItem)(g$$9, (0, _SymbolHelpers.CompletionItem$$get_Item)(item$$4));
      } else {
        const x$$12 = item$$4.Unresolved;
        fullName$$1 = x$$12.FullName;
      }

      const namespaceToOpen$$1 = (0, _Option.defaultArg)((0, _Option.defaultArg)((0, _Option.defaultArg)((0, _Option.defaultArg)(item$$4.Unresolved, null, function mapping$$14(x$$13) {
        return x$$13.Namespace;
      }), null, function binder(ns$$1) {
        if ((0, _illib.Array$$$startsWith)(FSharpDeclarationListInfo.fsharpNamespace, ns$$1)) {
          return null;
        } else {
          return ns$$1;
        }
      }), null, function mapping$$15(ns$$2) {
        if (currentNamespaceOrModule == null) {
          return ns$$2;
        } else {
          const currentNs = currentNamespaceOrModule;

          if ((0, _illib.Array$$$startsWith)(currentNs, ns$$2)) {
            return ns$$2.slice(currentNs.length, ns$$2.length);
          } else {
            return ns$$2;
          }
        }
      }), null, function binder$$1(_arg1$$4) {
        if (!(0, _Array.equalsWith)(_Util.comparePrimitives, _arg1$$4, null) ? _arg1$$4.length === 0 : false) {
          return null;
        } else {
          const ns$$3 = _arg1$$4;
          return (0, _String.join)(".", ...ns$$3);
        }
      });
      return FSharpDeclarationListItem$$$$002Ector$$Z5B12C4FE(name$$6, nameInCode$$2, fullName$$1, glyph$$1, new _Option.Choice(0, "Choice1Of2", [items$$9, infoReader$$1, m$$1, denv$$10, reactor, checkAlive]), getAccessibility((0, _SymbolHelpers.CompletionItem$$get_Item)(item$$4)), item$$4.Kind, item$$4.IsOwnMember, item$$4.MinorPriority, item$$4.Unresolved == null, namespaceToOpen$$1);
    }
  }, items$$8);
  return FSharpDeclarationListInfo$$$$002Ector$$Z1CF26BA3((0, _Array.ofList)(decls, Array), isForType$$1, false);
}

function FSharpDeclarationListInfo$$$Error$$Z721C83C5(msg) {
  return FSharpDeclarationListInfo$$$$002Ector$$Z1CF26BA3([FSharpDeclarationListItem$$$$002Ector$$Z5B12C4FE("<Note>", "<Note>", "<Note>", new _ServiceConstants.FSharpGlyph(20, "Error"), new _Option.Choice(1, "Choice2Of2", new _SymbolHelpers.FSharpToolTipText$00601(0, "FSharpToolTipText", (0, _Types.L)(new _SymbolHelpers.FSharpToolTipElement$00601(2, "CompositionError", msg), (0, _Types.L)()))), null, new _SymbolHelpers.CompletionItemKind(6, "Other"), false, 0, false, null)], false, true);
}

function FSharpDeclarationListInfo$$$get_Empty() {
  return FSharpDeclarationListInfo$$$$002Ector$$Z1CF26BA3([], false, false);
}

const FSharpMethodGroupItem = (0, _Types.declare)(function FSharpMethodGroupItem(description, xmlDoc, returnType, parameters$$1, hasParameters, hasParamArrayArg, staticParameters) {
  const $this$$14 = this;
  $this$$14.description = description;
  $this$$14.xmlDoc = xmlDoc;
  $this$$14.returnType = returnType;
  $this$$14.parameters = parameters$$1;
  $this$$14.hasParameters = hasParameters;
  $this$$14.hasParamArrayArg = hasParamArrayArg;
  $this$$14.staticParameters = staticParameters;
});
exports.FSharpMethodGroupItem = FSharpMethodGroupItem;

function FSharpMethodGroupItem$$$$002Ector$$6ECFCC8B(description, xmlDoc, returnType, parameters$$1, hasParameters, hasParamArrayArg, staticParameters) {
  return this != null ? FSharpMethodGroupItem.call(this, description, xmlDoc, returnType, parameters$$1, hasParameters, hasParamArrayArg, staticParameters) : new FSharpMethodGroupItem(description, xmlDoc, returnType, parameters$$1, hasParameters, hasParamArrayArg, staticParameters);
}

function FSharpMethodGroupItem$$get_StructuredDescription(__$$18) {
  return __$$18.description;
}

function FSharpMethodGroupItem$$get_Description(__$$19) {
  return (0, _SymbolHelpers.Tooltips$$$ToFSharpToolTipText)(__$$19.description);
}

function FSharpMethodGroupItem$$get_XmlDoc(__$$20) {
  return __$$20.xmlDoc;
}

function FSharpMethodGroupItem$$get_StructuredReturnTypeText(__$$21) {
  return __$$21.returnType;
}

function FSharpMethodGroupItem$$get_ReturnTypeText(__$$22) {
  return (0, _layout.showL)(__$$22.returnType);
}

function FSharpMethodGroupItem$$get_Parameters(__$$23) {
  return __$$23.parameters;
}

function FSharpMethodGroupItem$$get_HasParameters(__$$24) {
  return __$$24.hasParameters;
}

function FSharpMethodGroupItem$$get_HasParamArrayArg(__$$25) {
  return __$$25.hasParamArrayArg;
}

function FSharpMethodGroupItem$$get_StaticParameters(__$$26) {
  return __$$26.staticParameters;
}

const FSharpMethodGroup = (0, _Types.declare)(function FSharpMethodGroup(name$$7, unsortedMethods) {
  const $this$$15 = this;
  $this$$15.name = name$$7;
  $this$$15.methods = (0, _Array.sortBy)(function projection$$3(meth$$1) {
    const parms$$1 = FSharpMethodGroupItem$$get_Parameters(meth$$1);
    return [parms$$1.length, (0, _Array.map)(function mapping$$18(p) {
      return FSharpMethodGroupItemParameter$$get_CanonicalTypeTextForSorting(p);
    }, parms$$1, Array)];
  }, (0, _Array.map)(function mapping$$17(meth) {
    const parms = FSharpMethodGroupItem$$get_Parameters(meth);

    if (parms.length === 1 ? FSharpMethodGroupItemParameter$$get_CanonicalTypeTextForSorting(parms[0]) === "Microsoft.FSharp.Core.Unit" : false) {
      return FSharpMethodGroupItem$$$$002Ector$$6ECFCC8B(FSharpMethodGroupItem$$get_StructuredDescription(meth), FSharpMethodGroupItem$$get_XmlDoc(meth), FSharpMethodGroupItem$$get_StructuredReturnTypeText(meth), [], true, FSharpMethodGroupItem$$get_HasParamArrayArg(meth), FSharpMethodGroupItem$$get_StaticParameters(meth));
    } else {
      return meth;
    }
  }, unsortedMethods, Array), {
    Compare: _Util.compareArrays
  });
});
exports.FSharpMethodGroup = FSharpMethodGroup;

function FSharpMethodGroup$$$$002Ector$$5F5A1124(name$$7, unsortedMethods) {
  return this != null ? FSharpMethodGroup.call(this, name$$7, unsortedMethods) : new FSharpMethodGroup(name$$7, unsortedMethods);
}

function FSharpMethodGroup$$get_MethodName(__$$27) {
  return __$$27.name;
}

function FSharpMethodGroup$$get_Methods(__$$28) {
  return __$$28.methods;
}

function FSharpMethodGroup$$$Create$$Z19558353(infoReader$$2, m$$2, denv$$11, items$$10) {
  const g$$10 = (0, _InfoReader.InfoReader$$get_g)(infoReader$$2);

  if (items$$10.tail == null) {
    return FSharpMethodGroup$$$$002Ector$$5F5A1124("", []);
  } else {
    const name$$8 = (0, _NameResolution.Item$$get_DisplayName)((0, _List.head)(items$$10).Item);
    const methods$$1 = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (item$$5) {
        const flatItems = DescriptionListsImpl$$$AnotherFlattenItems(g$$10, m$$2, item$$5.Item);
        const methods = (0, _Array.map)(function mapping$$19(flatItem) {
          const patternInput$$25 = (0, _SymbolHelpers.ErrorScope$$$Protect)(m$$2, function () {
            return DescriptionListsImpl$$$PrettyParamsAndReturnTypeOfItem(infoReader$$2, m$$2, denv$$11, new _NameResolution.ItemWithInst(flatItem, item$$5.TyparInst));
          }, function (err) {
            return [(0, _Types.L)(), (0, _layout.wordL)((0, _layout.TaggedTextOps$$$tagText)(err))];
          });
          const description$$1 = new _SymbolHelpers.FSharpToolTipText$00601(0, "FSharpToolTipText", (0, _Types.L)((0, _SymbolHelpers.SymbolHelpers$$$FormatStructuredDescriptionOfItem)(true, infoReader$$2, m$$2, denv$$11, new _NameResolution.ItemWithInst(flatItem, item$$5.TyparInst)), (0, _Types.L)()));
          const hasParamArrayArg$$1 = flatItem.tag === 11 ? flatItem.fields[1].tail != null ? flatItem.fields[1].tail.tail == null ? (0, _infos.MethInfo$$HasParamArrayArg$$Z5D984B3C)(flatItem.fields[1].head, (0, _InfoReader.InfoReader$$get_amap)(infoReader$$2), m$$2, (0, _infos.MethInfo$$get_FormalMethodInst)(flatItem.fields[1].head)) : false : false : flatItem.tag === 10 ? flatItem.fields[1].tail != null ? flatItem.fields[1].tail.tail == null ? (0, _infos.MethInfo$$HasParamArrayArg$$Z5D984B3C)(flatItem.fields[1].head, (0, _InfoReader.InfoReader$$get_amap)(infoReader$$2), m$$2, (0, _infos.MethInfo$$get_FormalMethodInst)(flatItem.fields[1].head)) : false : false : false;
          const hasStaticParameters = true;
          return FSharpMethodGroupItem$$$$002Ector$$6ECFCC8B(description$$1, (0, _SymbolHelpers.SymbolHelpers$$$GetXmlCommentForItem)(infoReader$$2, m$$2, flatItem), patternInput$$25[1], (0, _Array.ofList)(patternInput$$25[0], Array), hasStaticParameters, hasParamArrayArg$$1, []);
        }, (0, _Array.ofList)(flatItems, Array), Array);
        return methods;
      }, items$$10);
    }), Array);
    return FSharpMethodGroup$$$$002Ector$$5F5A1124(name$$8, methods$$1);
  }
}