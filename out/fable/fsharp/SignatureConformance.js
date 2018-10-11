"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checker$$$$002Ector$$675B03B6 = Checker$$$$002Ector$$675B03B6;
exports.Checker$$CheckSignature = Checker$$CheckSignature;
exports.Checker$$CheckTypars = Checker$$CheckTypars;
exports.CheckNamesOfModuleOrNamespaceContents = CheckNamesOfModuleOrNamespaceContents;
exports.CheckNamesOfModuleOrNamespace = CheckNamesOfModuleOrNamespace;
exports.Checker = exports.InterfaceNotRevealed = exports.FieldNotContained = exports.ExnconstrNotContained = exports.ConstrNotContained = exports.ValueNotContained = exports.RequiredButNotSpecified = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _TastOps = require("./TastOps");

var _List = require("../fable-core.2.0.3/List");

var _tast = require("./tast");

var _illib = require("../absil/illib");

var _Util = require("../fable-core.2.0.3/Util");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _ast = require("./ast");

var _NicePrint = require("./NicePrint");

var _layout = require("./layout");

var _lib = require("./lib");

var _infos = require("./infos");

var _zset = require("../absil/zset");

var _String = require("../fable-core.2.0.3/String");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

var _Option = require("../fable-core.2.0.3/Option");

var _Seq = require("../fable-core.2.0.3/Seq");

const RequiredButNotSpecified = (0, _Types.declare)(function RequiredButNotSpecified(arg1, arg2, arg3, arg4, arg5) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
  this.Data4 = arg5;
}, _Types.FSharpException);
exports.RequiredButNotSpecified = RequiredButNotSpecified;
const ValueNotContained = (0, _Types.declare)(function ValueNotContained(arg1, arg2, arg3, arg4, arg5) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
  this.Data4 = arg5;
}, _Types.FSharpException);
exports.ValueNotContained = ValueNotContained;
const ConstrNotContained = (0, _Types.declare)(function ConstrNotContained(arg1, arg2, arg3, arg4) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
}, _Types.FSharpException);
exports.ConstrNotContained = ConstrNotContained;
const ExnconstrNotContained = (0, _Types.declare)(function ExnconstrNotContained(arg1, arg2, arg3, arg4) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
}, _Types.FSharpException);
exports.ExnconstrNotContained = ExnconstrNotContained;
const FieldNotContained = (0, _Types.declare)(function FieldNotContained(arg1, arg2, arg3, arg4) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
  this.Data3 = arg4;
}, _Types.FSharpException);
exports.FieldNotContained = FieldNotContained;
const InterfaceNotRevealed = (0, _Types.declare)(function InterfaceNotRevealed(arg1, arg2, arg3) {
  this.Data0 = arg1;
  this.Data1 = arg2;
  this.Data2 = arg3;
}, _Types.FSharpException);
exports.InterfaceNotRevealed = InterfaceNotRevealed;
const Checker = (0, _Types.declare)(function Checker(g, amap, denv, remapInfo, checkingSig) {
  const $this$$1 = this;
  $this$$1.g = g;
  $this$$1.amap = amap;
  $this$$1.denv = denv;
  $this$$1.checkingSig = checkingSig;
  const remap = (0, _TastOps.Remap$$$get_Empty)();
  const remap$$1 = (0, _List.foldBack)(function folder(tupledArg, acc) {
    return (0, _TastOps.addTyconRefRemap)(tupledArg[1], tupledArg[0], acc);
  }, remapInfo.mrpiEntities, remap);
  const remap$$2 = (0, _List.foldBack)(function folder$$1(tupledArg$$1, acc$$1) {
    return (0, _TastOps.addValRemap)((0, _tast.ValRef$$get_Deref)(tupledArg$$1[1]), (0, _tast.ValRef$$get_Deref)(tupledArg$$1[0]), acc$$1);
  }, remapInfo.mrpiVals, remap$$1);
  $this$$1.sigToImplRemap = remap$$2;
});
exports.Checker = Checker;

function Checker$$$$002Ector$$675B03B6(g, amap, denv, remapInfo, checkingSig) {
  return this != null ? Checker.call(this, g, amap, denv, remapInfo, checkingSig) : new Checker(g, amap, denv, remapInfo, checkingSig);
}

function Checker$$CheckSignature(__, aenv, implModRef, signModType) {
  return Checker$$checkModuleOrNamespaceContents(__, (0, _tast.EntityRef$$get_Range)(implModRef), aenv, implModRef, signModType);
}

function Checker$$CheckTypars(__$$1, m$$1, aenv$$1, implTypars, signTypars) {
  return Checker$$checkTypars(__$$1, m$$1, aenv$$1, implTypars, signTypars);
}

function Checker$$checkAttribs(this$, _aenv, implAttribs, sigAttribs, fixup) {
  const sigAttribs$$1 = (0, _List.map)(function mapping(arg20$0040) {
    return (0, _TastOps.remapAttrib)(this$.g, this$.sigToImplRemap, arg20$0040);
  }, sigAttribs);

  const attribExprEq = function attribExprEq(_arg2, _arg1) {
    const e1 = _arg2.fields[1];
    const e2 = _arg1.fields[1];
    return (0, _TastOps.EvaledAttribExprEquality)(this$.g, e1, e2);
  };

  const attribNamedArgEq = function attribNamedArgEq(_arg4, _arg3) {
    const ty1 = _arg4.fields[0][1];
    const nm1 = _arg4.fields[0][0];
    const isProp1 = _arg4.fields[0][2];
    const e1$$1 = _arg4.fields[0][3];
    const ty2 = _arg3.fields[0][1];
    const nm2 = _arg3.fields[0][0];
    const isProp2 = _arg3.fields[0][2];
    const e2$$1 = _arg3.fields[0][3];

    if ((nm1 === nm2 ? (0, _TastOps.typeEquiv)(this$.g, ty1, ty2) : false) ? isProp1 === isProp2 : false) {
      return attribExprEq(e1$$1, e2$$1);
    } else {
      return false;
    }
  };

  const attribsEq = function attribsEq(attrib1, attrib2) {
    const implTcref$$1 = attrib1.fields[0];
    const implNamedArgs = attrib1.fields[3];
    const implArgs = attrib1.fields[2];
    const _implRange = attrib1.fields[6];
    const signTcref$$1 = attrib2.fields[0];
    const signNamedArgs = attrib2.fields[3];
    const signArgs = attrib2.fields[2];
    const _signRange = attrib2.fields[6];

    if ((0, _TastOps.tyconRefEq)(this$.g, signTcref$$1, implTcref$$1) ? (0, _illib.List$$$lengthsEqAndForall2)(attribExprEq, implArgs, signArgs) : false) {
      return (0, _illib.List$$$lengthsEqAndForall2)(attribNamedArgEq, implNamedArgs, signNamedArgs);
    } else {
      return false;
    }
  };

  const attribsHaveSameTycon = function attribsHaveSameTycon(attrib1$$1, attrib2$$1) {
    const implTcref$$2 = attrib1$$1.fields[0];
    const signTcref$$2 = attrib2$$1.fields[0];
    return (0, _TastOps.tyconRefEq)(this$.g, signTcref$$2, implTcref$$2);
  };

  const check = function check(keptImplAttribsRev, implAttribs$$1, sigAttribs$$2) {
    check: while (true) {
      if (implAttribs$$1.tail != null) {
        const remainingImplAttribs = implAttribs$$1.tail;
        const implAttrib = implAttribs$$1.head;
        const lookForMatchingAttrib = (0, _illib.List$$$tryRemove)((0, _Util.partialApply)(1, attribsEq, [implAttrib]), sigAttribs$$2);

        if (lookForMatchingAttrib == null) {
          const existsSimilarAttrib = (0, _List.exists)((0, _Util.partialApply)(1, attribsHaveSameTycon, [implAttrib]), sigAttribs$$2);

          if (existsSimilarAttrib) {
            const implTcref$$3 = implAttrib.fields[0];
            const implRange = implAttrib.fields[6];
            (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcAttribArgsDiffer$$Z721C83C5)((0, _tast.EntityRef$$get_DisplayName)(implTcref$$3)), implRange));
            keptImplAttribsRev = keptImplAttribsRev;
            implAttribs$$1 = remainingImplAttribs;
            sigAttribs$$2 = sigAttribs$$2;
            continue check;
          } else {
            keptImplAttribsRev = (0, _Types.L)(implAttrib, keptImplAttribsRev);
            implAttribs$$1 = remainingImplAttribs;
            sigAttribs$$2 = sigAttribs$$2;
            continue check;
          }
        } else {
          const remainingSigAttribs = lookForMatchingAttrib[1];
          keptImplAttribsRev = keptImplAttribsRev;
          implAttribs$$1 = remainingImplAttribs;
          sigAttribs$$2 = remainingSigAttribs;
          continue check;
        }
      } else {
        return (0, _List.reverse)(keptImplAttribsRev);
      }
    }
  };

  const keptImplAttribs = check((0, _Types.L)(), implAttribs, sigAttribs$$1);
  fixup((0, _List.append)(sigAttribs$$1, keptImplAttribs));
  return true;
}

function Checker$$checkTypars(this$$$1, m$$2, aenv$$2, implTypars$$1, sigTypars) {
  if ((0, _List.length)(implTypars$$1) !== (0, _List.length)(sigTypars)) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelSigImplNotCompatibleParamCountsDiffer)(), m$$2));
    return false;
  } else {
    const aenv$$3 = (0, _TastOps.TypeEquivEnv$$BindEquivTypars)(aenv$$2, implTypars$$1, sigTypars);
    return (0, _List.forAll2)(function predicate$$3(implTypar, sigTypar) {
      var copyOfStruct;
      const m$$3 = (0, _tast.Typar$$get_Range)(sigTypar);

      if (!(0, _Util.equals)((0, _tast.Typar$$get_StaticReq)(implTypar), (0, _tast.Typar$$get_StaticReq)(sigTypar))) {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelSigImplNotCompatibleCompileTimeRequirementsDiffer)(), m$$3));
      }

      (0, _tast.Typar$$SetIdent$$31D53C78)(implTypar, (0, _ast.mkSynId)((0, _tast.Typar$$get_Range)(implTypar), (copyOfStruct = (0, _tast.Typar$$get_Id)(sigTypar), (0, _ast.Ident$$get_idText)(copyOfStruct))));
      (0, _tast.Typar$$SetCompilerGenerated$$Z1FBCCD16)(implTypar, false);

      if ((0, _List.forAll)(function predicate$$1(implTyparCx) {
        if (implTyparCx.tag === 1) {
          const _acty = implTyparCx.fields[1];
          return true;
        } else if (!(0, _List.exists)(function (arg30$0040) {
          return (0, _TastOps.typarConstraintsAEquiv)(this$$$1.g, aenv$$3, implTyparCx, arg30$0040);
        }, (0, _tast.Typar$$get_Constraints)(sigTypar))) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelSigImplNotCompatibleConstraintsDiffer$$Z384F8060)((0, _tast.Typar$$get_Name)(sigTypar), (0, _layout.showL)((0, _NicePrint.layoutTyparConstraint)(this$$$1.denv, implTypar, implTyparCx))), m$$3));
          return false;
        } else {
          return true;
        }
      }, (0, _tast.Typar$$get_Constraints)(implTypar)) ? (0, _List.forAll)(function predicate$$2(sigTyparCx) {
        switch (sigTyparCx.tag) {
          case 1:
            {
              const _acty$$1 = sigTyparCx.fields[1];
              return true;
            }

          case 9:
            {
              return true;
            }

          case 10:
            {
              return true;
            }

          default:
            {
              if (!(0, _List.exists)(function (implTyparCx$$1) {
                return (0, _TastOps.typarConstraintsAEquiv)(this$$$1.g, aenv$$3, implTyparCx$$1, sigTyparCx);
              }, (0, _tast.Typar$$get_Constraints)(implTypar))) {
                (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelSigImplNotCompatibleConstraintsDifferRemove$$Z384F8060)((0, _tast.Typar$$get_Name)(sigTypar), (0, _layout.showL)((0, _NicePrint.layoutTyparConstraint)(this$$$1.denv, sigTypar, sigTyparCx))), m$$3));
                return false;
              } else {
                return true;
              }
            }
        }
      }, (0, _tast.Typar$$get_Constraints)(sigTypar)) : false) {
        if (!this$$$1.checkingSig) {
          return true;
        } else {
          return Checker$$checkAttribs(this$$$1, aenv$$3, (0, _tast.Typar$$get_Attribs)(implTypar), (0, _tast.Typar$$get_Attribs)(sigTypar), function fixup$$1(attribs) {
            (0, _tast.Typar$$SetAttribs$$A32CD4C)(implTypar, attribs);
          });
        }
      } else {
        return false;
      }
    }, implTypars$$1, sigTypars);
  }
}

function Checker$$checkTypeDef(this$$$2, aenv$$4, implTycon, sigTycon) {
  const m$$4 = (0, _tast.Entity$$get_Range)(implTycon);
  (0, _tast.Entity$$SetOtherRange$$56F61A9)(sigTycon, [(0, _tast.Entity$$get_Range)(implTycon), true]);
  (0, _tast.Entity$$SetOtherRange$$56F61A9)(implTycon, [(0, _tast.Entity$$get_Range)(sigTycon), false]);

  if ((0, _tast.Entity$$get_LogicalName)(implTycon) !== (0, _tast.Entity$$get_LogicalName)(sigTycon)) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleNamesDiffer$$30230F9B)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_LogicalName)(sigTycon), (0, _tast.Entity$$get_LogicalName)(implTycon)), m$$4));
    return false;
  } else if ((0, _tast.Entity$$get_CompiledName)(implTycon) !== (0, _tast.Entity$$get_CompiledName)(sigTycon)) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleNamesDiffer$$30230F9B)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_CompiledName)(sigTycon), (0, _tast.Entity$$get_CompiledName)(implTycon)), m$$4));
    return false;
  } else if (Checker$$checkExnInfo(this$$$2, function err(f$$1) {
    return new ExnconstrNotContained(this$$$2.denv, implTycon, sigTycon, f$$1);
  }, aenv$$4, (0, _tast.Entity$$get_ExceptionInfo)(implTycon), (0, _tast.Entity$$get_ExceptionInfo)(sigTycon))) {
    const implTypars$$2 = (0, _tast.Entity$$Typars$$4DB9192C)(implTycon, m$$4);
    const sigTypars$$1 = (0, _tast.Entity$$Typars$$4DB9192C)(sigTycon, m$$4);

    if ((0, _List.length)(implTypars$$2) !== (0, _List.length)(sigTypars$$1)) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleParameterCountsDiffer$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon)), m$$4));
      return false;
    } else if ((0, _tast.isLessAccessible)((0, _tast.Entity$$get_Accessibility)(implTycon), (0, _tast.Entity$$get_Accessibility)(sigTycon))) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleAccessibilityDiffer$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon)), m$$4));
      return false;
    } else {
      const aenv$$5 = (0, _TastOps.TypeEquivEnv$$BindEquivTypars)(aenv$$4, implTypars$$2, sigTypars$$1);
      const aintfs = (0, _tast.Entity$$get_ImmediateInterfaceTypesOfFSharpTycon)(implTycon);
      const fintfs = (0, _tast.Entity$$get_ImmediateInterfaceTypesOfFSharpTycon)(sigTycon);
      const aintfsUser = (0, _List.map)(function mapping$$1(tupledArg$$3) {
        return (0, _lib.p13)(tupledArg$$3[0], tupledArg$$3[1], tupledArg$$3[2]);
      }, (0, _List.filter)(function predicate$$4(tupledArg$$2) {
        return !tupledArg$$2[1];
      }, (0, _tast.Entity$$get_TypeContents)(implTycon).tcaug_interfaces));

      const flatten = function flatten(tys) {
        return (0, _List.filter)(function predicate$$5(arg10$0040$$2) {
          return (0, _TastOps.isInterfaceTy)(this$$$2.g, arg10$0040$$2);
        }, (0, _lib.ListSet$$$setify)(function f$$2(arg10$0040$$1, arg20$0040$$1) {
          return (0, _TastOps.typeEquiv)(this$$$2.g, arg10$0040$$1, arg20$0040$$1);
        }, (0, _List.collect)(function mapping$$2(ty) {
          return (0, _infos.AllSuperTypesOfType)(this$$$2.g, this$$$2.amap, m$$4, new _infos.AllowMultiIntfInstantiations(0, "Yes"), ty);
        }, tys)));
      };

      const aintfs$$1 = flatten(aintfs);
      const aintfsUser$$1 = flatten(aintfsUser);
      const fintfs$$1 = flatten(fintfs);
      const unimpl = (0, _lib.ListSet$$$subtract)(function (fity, aity) {
        return (0, _TastOps.typeAEquiv)(this$$$2.g, aenv$$5, aity, fity);
      }, fintfs$$1, aintfs$$1);

      if ((0, _List.forAll)(function predicate$$6(ity) {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleMissingInterface$$30230F9B)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon), (0, _NicePrint.minimalStringOfType)(this$$$2.denv, ity)), m$$4));
        return false;
      }, unimpl)) {
        const hidden = (0, _lib.ListSet$$$subtract)(function (arg20$0040$$2, arg30$0040$$1) {
          return (0, _TastOps.typeAEquiv)(this$$$2.g, aenv$$5, arg20$0040$$2, arg30$0040$$1);
        }, aintfsUser$$1, fintfs$$1);
        const warningOrError = (0, _tast.Entity$$get_IsFSharpInterfaceTycon)(implTycon) ? _ErrorLogger.error : _ErrorLogger.warning;
        (0, _List.iterate)(function action(ity$$1) {
          warningOrError(new InterfaceNotRevealed(this$$$2.denv, ity$$1, (0, _tast.Entity$$get_Range)(implTycon)));
        }, hidden);
        const aNull = (0, _TastOps.IsUnionTypeWithNullAsTrueValue)(this$$$2.g, implTycon);
        const fNull = (0, _TastOps.IsUnionTypeWithNullAsTrueValue)(this$$$2.g, sigTycon);

        if (aNull ? !fNull : false) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleImplementationSaysNull$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon)), m$$4));
        } else if (fNull ? !aNull : false) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleSignatureSaysNull$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon)), m$$4));
        }

        const aNull2 = (0, _TastOps.TypeNullIsExtraValue)(this$$$2.g, m$$4, (0, _TastOps.generalizedTyconRef)((0, _tast.mkLocalTyconRef)(implTycon)));
        const fNull2 = (0, _TastOps.TypeNullIsExtraValue)(this$$$2.g, m$$4, (0, _TastOps.generalizedTyconRef)((0, _tast.mkLocalTyconRef)(implTycon)));

        if (aNull2 ? !fNull2 : false) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleImplementationSaysNull2$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon)), m$$4));
        } else if (fNull2 ? !aNull2 : false) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleSignatureSaysNull2$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon)), m$$4));
        }

        const aSealed = (0, _TastOps.isSealedTy)(this$$$2.g, (0, _TastOps.generalizedTyconRef)((0, _tast.mkLocalTyconRef)(implTycon)));
        const fSealed = (0, _TastOps.isSealedTy)(this$$$2.g, (0, _TastOps.generalizedTyconRef)((0, _tast.mkLocalTyconRef)(sigTycon)));

        if (aSealed ? !fSealed : false) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleImplementationSealed$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon)), m$$4));
        }

        if (!aSealed ? fSealed : false) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleImplementationIsNotSealed$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon)), m$$4));
        }

        const aPartial = (0, _TastOps.isAbstractTycon)(implTycon);
        const fPartial = (0, _TastOps.isAbstractTycon)(sigTycon);

        if (aPartial ? !fPartial : false) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleImplementationIsAbstract$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon)), m$$4));
        }

        if (!aPartial ? fPartial : false) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleSignatureIsAbstract$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon)), m$$4));
        }

        if (!(0, _TastOps.typeAEquiv)(this$$$2.g, aenv$$5, (0, _TastOps.superOfTycon)(this$$$2.g, implTycon), (0, _TastOps.superOfTycon)(this$$$2.g, sigTycon))) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleTypesHaveDifferentBaseTypes$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon)), m$$4));
        }

        if (((Checker$$checkTypars(this$$$2, m$$4, aenv$$5, implTypars$$2, sigTypars$$1) ? Checker$$checkTypeRepr(this$$$2, m$$4, aenv$$5, implTycon, (0, _tast.Entity$$get_TypeReprInfo)(sigTycon)) : false) ? Checker$$checkTypeAbbrev(this$$$2, m$$4, aenv$$5, implTycon, sigTycon) : false) ? Checker$$checkAttribs(this$$$2, aenv$$5, (0, _tast.Entity$$get_Attribs)(implTycon), (0, _tast.Entity$$get_Attribs)(sigTycon), function fixup$$2(attribs$$1) {
          implTycon.entity_attribs = attribs$$1;
        }) : false) {
          return Checker$$checkModuleOrNamespaceContents(this$$$2, (0, _tast.Entity$$get_Range)(implTycon), aenv$$5, (0, _tast.mkLocalEntityRef)(implTycon), (0, _tast.Entity$$get_ModuleOrNamespaceType)(sigTycon));
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

function Checker$$checkValInfo(this$$$3, aenv$$6, err$$1, implVal, sigVal) {
  const id = (0, _tast.Val$$get_Id)(implVal);
  const matchValue = [(0, _tast.Val$$get_ValReprInfo)(implVal), (0, _tast.Val$$get_ValReprInfo)(sigVal)];

  if (matchValue[1] != null) {
    if (matchValue[0] != null) {
      const implValInfo = matchValue[0];
      const sigValInfo = matchValue[1];
      const ntps = (0, _List.length)(matchValue[0].fields[0]) | 0;
      const mtps = (0, _List.length)(matchValue[1].fields[0]) | 0;
      const nSigArgInfos = (0, _List.length)(matchValue[1].fields[1]) | 0;

      if (ntps !== mtps) {
        return err$$1(function (tupledArg$$5) {
          return (0, _FSComp.SR$$$ValueNotContainedMutabilityGenericParametersDiffer$$6BD52AFB)(tupledArg$$5[0], tupledArg$$5[1], tupledArg$$5[2], (0, _Util.int32ToString)(mtps), (0, _Util.int32ToString)(ntps));
        });
      } else if (!(0, _Util.equals)((0, _tast.ValReprInfo$$get_KindsOfTypars)(implValInfo), (0, _tast.ValReprInfo$$get_KindsOfTypars)(sigValInfo))) {
        return err$$1(function (tupledArg$$6) {
          return (0, _FSComp.SR$$$ValueNotContainedMutabilityGenericParametersAreDifferentKinds$$30230F9B)(tupledArg$$6[0], tupledArg$$6[1], tupledArg$$6[2]);
        });
      } else if (!(nSigArgInfos <= (0, _List.length)(matchValue[0].fields[1]) ? (0, _List.forAll2)(function (x$$2, y$$1) {
        return (0, _List.length)(x$$2) <= (0, _List.length)(y$$1);
      }, matchValue[1].fields[1], (0, _List.splitAt)(nSigArgInfos, matchValue[0].fields[1])[0]) : false)) {
        return err$$1(function (tupledArg$$7) {
          return (0, _FSComp.SR$$$ValueNotContainedMutabilityAritiesDiffer$$533BBE5B)(tupledArg$$7[0], tupledArg$$7[1], tupledArg$$7[2], (0, _ast.Ident$$get_idText)(id), (0, _Util.int32ToString)(nSigArgInfos), (0, _ast.Ident$$get_idText)(id), (0, _ast.Ident$$get_idText)(id));
        });
      } else {
        const implArgInfos$$1 = (0, _List.truncate)(nSigArgInfos, matchValue[0].fields[1]);
        const implArgInfos$$2 = (0, _List.map2)(function mapping$$3(l1$$2, l2$$2) {
          return (0, _List.take)((0, _List.length)(l2$$2), l1$$2);
        }, implArgInfos$$1, matchValue[1].fields[1]);
        const res = (0, _List.forAll2)(function predicate$$8(list1$$2, list2$$2) {
          return (0, _List.forAll2)(function predicate$$7(implArgInfo, sigArgInfo) {
            return Checker$$checkAttribs(this$$$3, aenv$$6, implArgInfo.Attribs, sigArgInfo.Attribs, function fixup$$3(attribs$$2) {
              var sname, iname;
              const matchValue$$1 = [implArgInfo.Name, sigArgInfo.Name];
              var $target$$13, iname$$1, sname$$1;

              if (matchValue$$1[0] != null) {
                if (matchValue$$1[1] != null) {
                  if (sname = matchValue$$1[1], (iname = matchValue$$1[0], (0, _ast.Ident$$get_idText)(sname) !== (0, _ast.Ident$$get_idText)(iname))) {
                    $target$$13 = 0;
                    iname$$1 = matchValue$$1[0];
                    sname$$1 = matchValue$$1[1];
                  } else {
                    $target$$13 = 1;
                  }
                } else {
                  $target$$13 = 1;
                }
              } else {
                $target$$13 = 1;
              }

              switch ($target$$13) {
                case 0:
                  {
                    (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$ArgumentsInSigAndImplMismatch$$Z384F8060)((0, _ast.Ident$$get_idText)(sname$$1), (0, _ast.Ident$$get_idText)(iname$$1)), (0, _ast.Ident$$get_idRange)(iname$$1)));
                    break;
                  }
              }

              implArgInfo.Name = sigArgInfo.Name;
              implArgInfo.Attribs = attribs$$2;
            });
          }, list1$$2, list2$$2);
        }, implArgInfos$$2, matchValue[1].fields[1]) ? Checker$$checkAttribs(this$$$3, aenv$$6, matchValue[0].fields[2].Attribs, matchValue[1].fields[2].Attribs, function fixup$$4(attribs$$3) {
          matchValue[0].fields[2].Name = matchValue[1].fields[2].Name;
          matchValue[0].fields[2].Attribs = attribs$$3;
        }) : false;
        (0, _tast.Val$$SetValReprInfo$$Z35BE7615)(implVal, new _tast.ValReprInfo(0, "ValReprInfo", matchValue[1].fields[0], implArgInfos$$2, matchValue[0].fields[2]));
        return res;
      }
    } else {
      return err$$1(function (tupledArg$$4) {
        return (0, _FSComp.SR$$$ValueNotContainedMutabilityArityNotInferred$$30230F9B)(tupledArg$$4[0], tupledArg$$4[1], tupledArg$$4[2]);
      });
    }
  } else {
    return true;
  }
}

function Checker$$checkVal(this$$$4, implModRef$$2, aenv$$7, implVal$$1, sigVal$$1) {
  (0, _tast.Val$$SetOtherRange$$56F61A9)(sigVal$$1, [(0, _tast.Val$$get_Range)(implVal$$1), true]);
  (0, _tast.Val$$SetOtherRange$$56F61A9)(implVal$$1, [(0, _tast.Val$$get_Range)(sigVal$$1), false]);

  const mk_err = function mk_err(denv$$1, f$$3) {
    return new ValueNotContained(denv$$1, implModRef$$2, implVal$$1, sigVal$$1, f$$3);
  };

  const err$$2 = function err$$2(denv$$2, f$$4) {
    (0, _ErrorLogger.errorR)(mk_err(denv$$2, f$$4));
    return false;
  };

  const m$$6 = (0, _tast.Val$$get_Range)(implVal$$1);

  if ((0, _tast.Val$$get_IsMutable)(implVal$$1) !== (0, _tast.Val$$get_IsMutable)(sigVal$$1)) {
    return err$$2(this$$$4.denv, function (tupledArg$$8) {
      return (0, _FSComp.SR$$$ValueNotContainedMutabilityAttributesDiffer$$30230F9B)(tupledArg$$8[0], tupledArg$$8[1], tupledArg$$8[2]);
    });
  } else if ((0, _tast.Val$$get_LogicalName)(implVal$$1) !== (0, _tast.Val$$get_LogicalName)(sigVal$$1)) {
    return err$$2(this$$$4.denv, function (tupledArg$$9) {
      return (0, _FSComp.SR$$$ValueNotContainedMutabilityNamesDiffer$$30230F9B)(tupledArg$$9[0], tupledArg$$9[1], tupledArg$$9[2]);
    });
  } else if ((0, _tast.Val$$get_CompiledName)(implVal$$1) !== (0, _tast.Val$$get_CompiledName)(sigVal$$1)) {
    return err$$2(this$$$4.denv, function (tupledArg$$10) {
      return (0, _FSComp.SR$$$ValueNotContainedMutabilityCompiledNamesDiffer$$30230F9B)(tupledArg$$10[0], tupledArg$$10[1], tupledArg$$10[2]);
    });
  } else if ((0, _tast.Val$$get_DisplayName)(implVal$$1) !== (0, _tast.Val$$get_DisplayName)(sigVal$$1)) {
    return err$$2(this$$$4.denv, function (tupledArg$$11) {
      return (0, _FSComp.SR$$$ValueNotContainedMutabilityDisplayNamesDiffer$$30230F9B)(tupledArg$$11[0], tupledArg$$11[1], tupledArg$$11[2]);
    });
  } else if ((0, _tast.isLessAccessible)((0, _tast.Val$$get_Accessibility)(implVal$$1), (0, _tast.Val$$get_Accessibility)(sigVal$$1))) {
    return err$$2(this$$$4.denv, function (tupledArg$$12) {
      return (0, _FSComp.SR$$$ValueNotContainedMutabilityAccessibilityMore$$30230F9B)(tupledArg$$12[0], tupledArg$$12[1], tupledArg$$12[2]);
    });
  } else if ((0, _tast.Val$$get_MustInline)(implVal$$1) !== (0, _tast.Val$$get_MustInline)(sigVal$$1)) {
    return err$$2(this$$$4.denv, function (tupledArg$$13) {
      return (0, _FSComp.SR$$$ValueNotContainedMutabilityInlineFlagsDiffer$$30230F9B)(tupledArg$$13[0], tupledArg$$13[1], tupledArg$$13[2]);
    });
  } else if (!(0, _Util.equals)((0, _tast.Val$$get_LiteralValue)(implVal$$1), (0, _tast.Val$$get_LiteralValue)(sigVal$$1))) {
    return err$$2(this$$$4.denv, function (tupledArg$$14) {
      return (0, _FSComp.SR$$$ValueNotContainedMutabilityLiteralConstantValuesDiffer$$30230F9B)(tupledArg$$14[0], tupledArg$$14[1], tupledArg$$14[2]);
    });
  } else if ((0, _tast.Val$$get_IsTypeFunction)(implVal$$1) !== (0, _tast.Val$$get_IsTypeFunction)(sigVal$$1)) {
    return err$$2(this$$$4.denv, function (tupledArg$$15) {
      return (0, _FSComp.SR$$$ValueNotContainedMutabilityOneIsTypeFunction$$30230F9B)(tupledArg$$15[0], tupledArg$$15[1], tupledArg$$15[2]);
    });
  } else {
    const patternInput = (0, _tast.Val$$get_TypeScheme)(implVal$$1);
    const patternInput$$1 = (0, _tast.Val$$get_TypeScheme)(sigVal$$1);

    if ((0, _List.length)(patternInput[0]) !== (0, _List.length)(patternInput$$1[0])) {
      return err$$2(new _TastOps.DisplayEnv(this$$$4.denv.includeStaticParametersInTypeNames, this$$$4.denv.openTopPathsSorted, this$$$4.denv.openTopPathsRaw, this$$$4.denv.shortTypeNames, this$$$4.denv.suppressNestedTypes, this$$$4.denv.maxMembers, this$$$4.denv.showObsoleteMembers, this$$$4.denv.showHiddenMembers, true, this$$$4.denv.showImperativeTyparAnnotations, this$$$4.denv.suppressInlineKeyword, this$$$4.denv.suppressMutableKeyword, this$$$4.denv.showMemberContainers, this$$$4.denv.shortConstraints, this$$$4.denv.useColonForReturnType, this$$$4.denv.showAttributes, this$$$4.denv.showOverrides, this$$$4.denv.showConstraintTyparAnnotations, this$$$4.denv.abbreviateAdditionalConstraints, this$$$4.denv.showTyparDefaultConstraints, this$$$4.denv.g, this$$$4.denv.contextAccessibility, this$$$4.denv.generatedValueLayout), function (tupledArg$$16) {
        return (0, _FSComp.SR$$$ValueNotContainedMutabilityParameterCountsDiffer$$30230F9B)(tupledArg$$16[0], tupledArg$$16[1], tupledArg$$16[2]);
      });
    } else {
      const aenv$$8 = (0, _TastOps.TypeEquivEnv$$BindEquivTypars)(aenv$$7, patternInput[0], patternInput$$1[0]);

      if (Checker$$checkTypars(this$$$4, m$$6, aenv$$8, patternInput[0], patternInput$$1[0])) {
        if (!(0, _TastOps.typeAEquiv)(this$$$4.g, aenv$$8, patternInput[1], patternInput$$1[1])) {
          return err$$2(this$$$4.denv, function (tupledArg$$17) {
            return (0, _FSComp.SR$$$ValueNotContainedMutabilityTypesDiffer$$30230F9B)(tupledArg$$17[0], tupledArg$$17[1], tupledArg$$17[2]);
          });
        } else if (!Checker$$checkValInfo(this$$$4, aenv$$8, (0, _Util.partialApply)(1, err$$2, [this$$$4.denv]), implVal$$1, sigVal$$1)) {
          return false;
        } else if (!((0, _tast.Val$$get_IsExtensionMember)(implVal$$1) === (0, _tast.Val$$get_IsExtensionMember)(sigVal$$1))) {
          return err$$2(this$$$4.denv, function (tupledArg$$18) {
            return (0, _FSComp.SR$$$ValueNotContainedMutabilityExtensionsDiffer$$30230F9B)(tupledArg$$18[0], tupledArg$$18[1], tupledArg$$18[2]);
          });
        } else if (!Checker$$checkMemberDatasConform(this$$$4, (0, _Util.partialApply)(1, err$$2, [this$$$4.denv]), (0, _tast.Val$$get_Attribs)(implVal$$1), implVal$$1, (0, _tast.Val$$get_MemberInfo)(implVal$$1), (0, _tast.Val$$get_Attribs)(sigVal$$1), sigVal$$1, (0, _tast.Val$$get_MemberInfo)(sigVal$$1))) {
          return false;
        } else {
          return Checker$$checkAttribs(this$$$4, aenv$$8, (0, _tast.Val$$get_Attribs)(implVal$$1), (0, _tast.Val$$get_Attribs)(sigVal$$1), function fixup$$5(attribs$$4) {
            (0, _tast.Val$$SetAttribs$$A32CD4C)(implVal$$1, attribs$$4);
          });
        }
      } else {
        return false;
      }
    }
  }
}

function Checker$$checkExnInfo(this$$$5, err$$5, aenv$$9, implTypeRepr$$1, sigTypeRepr$$2) {
  const matchValue$$2 = [implTypeRepr$$1, sigTypeRepr$$2];
  var $target$$23, tcr1, tcr2, ecr1, ecr2, r1, r2;

  if (matchValue$$2[0].tag === 0) {
    if (matchValue$$2[1].tag === 2) {
      $target$$23 = 2;
    } else if (matchValue$$2[1].tag === 0) {
      $target$$23 = 3;
      ecr1 = matchValue$$2[0].fields[0];
      ecr2 = matchValue$$2[1].fields[0];
    } else {
      $target$$23 = 6;
    }
  } else if (matchValue$$2[0].tag === 2) {
    if (matchValue$$2[1].tag === 2) {
      $target$$23 = 4;
      r1 = matchValue$$2[0].fields[0];
      r2 = matchValue$$2[1].fields[0];
    } else {
      $target$$23 = 6;
    }
  } else if (matchValue$$2[0].tag === 3) {
    if (matchValue$$2[1].tag === 3) {
      $target$$23 = 5;
    } else {
      $target$$23 = 6;
    }
  } else if (matchValue$$2[1].tag === 2) {
    $target$$23 = 0;
  } else if (matchValue$$2[1].tag === 1) {
    $target$$23 = 1;
    tcr1 = matchValue$$2[0].fields[0];
    tcr2 = matchValue$$2[1].fields[0];
  } else {
    $target$$23 = 6;
  }

  switch ($target$$23) {
    case 0:
      {
        (0, _ErrorLogger.errorR)(err$$5(function (tupledArg$$19) {
          return (0, _FSComp.SR$$$ExceptionDefsNotCompatibleHiddenBySignature$$Z384F8060)(tupledArg$$19[0], tupledArg$$19[1]);
        }));
        return false;
      }

    case 1:
      {
        if (!(0, _Util.equals)(tcr1, tcr2)) {
          (0, _ErrorLogger.errorR)(err$$5(function (tupledArg$$20) {
            return (0, _FSComp.SR$$$ExceptionDefsNotCompatibleDotNetRepresentationsDiffer$$Z384F8060)(tupledArg$$20[0], tupledArg$$20[1]);
          }));
          return false;
        } else {
          return true;
        }
      }

    case 2:
      {
        (0, _ErrorLogger.errorR)(err$$5(function (tupledArg$$21) {
          return (0, _FSComp.SR$$$ExceptionDefsNotCompatibleAbbreviationHiddenBySignature$$Z384F8060)(tupledArg$$21[0], tupledArg$$21[1]);
        }));
        return false;
      }

    case 3:
      {
        if (!(0, _TastOps.tcrefAEquiv)(this$$$5.g, aenv$$9, ecr1, ecr2)) {
          (0, _ErrorLogger.errorR)(err$$5(function (tupledArg$$22) {
            return (0, _FSComp.SR$$$ExceptionDefsNotCompatibleSignaturesDiffer$$Z384F8060)(tupledArg$$22[0], tupledArg$$22[1]);
          }));
          return false;
        } else {
          return true;
        }
      }

    case 4:
      {
        return Checker$$checkRecordFieldsForExn(this$$$5, this$$$5.g, this$$$5.denv, err$$5, aenv$$9, r1, r2);
      }

    case 5:
      {
        return true;
      }

    case 6:
      {
        (0, _ErrorLogger.errorR)(err$$5(function (tupledArg$$23) {
          return (0, _FSComp.SR$$$ExceptionDefsNotCompatibleExceptionDeclarationsDiffer$$Z384F8060)(tupledArg$$23[0], tupledArg$$23[1]);
        }));
        return false;
      }
  }
}

function Checker$$checkUnionCase(this$$$6, aenv$$10, implUnionCase, sigUnionCase) {
  const err$$6 = function err$$6(f$$5) {
    (0, _ErrorLogger.errorR)(new ConstrNotContained(this$$$6.denv, implUnionCase, sigUnionCase, f$$5));
    return false;
  };

  sigUnionCase.OtherRangeOpt = [(0, _tast.UnionCase$$get_Range)(implUnionCase), true];
  implUnionCase.OtherRangeOpt = [(0, _tast.UnionCase$$get_Range)(sigUnionCase), false];

  if ((0, _ast.Ident$$get_idText)(implUnionCase.Id) !== (0, _ast.Ident$$get_idText)(sigUnionCase.Id)) {
    return err$$6(function (tupledArg$$24) {
      return (0, _FSComp.SR$$$ModuleContainsConstructorButNamesDiffer$$Z384F8060)(tupledArg$$24[0], tupledArg$$24[1]);
    });
  } else if ((0, _List.length)((0, _tast.UnionCase$$get_RecdFields)(implUnionCase)) !== (0, _List.length)((0, _tast.UnionCase$$get_RecdFields)(sigUnionCase))) {
    return err$$6(function (tupledArg$$25) {
      return (0, _FSComp.SR$$$ModuleContainsConstructorButDataFieldsDiffer$$Z384F8060)(tupledArg$$25[0], tupledArg$$25[1]);
    });
  } else if (!(0, _List.forAll2)(function (implField, sigField) {
    return Checker$$checkField(this$$$6, aenv$$10, implField, sigField);
  }, (0, _tast.UnionCase$$get_RecdFields)(implUnionCase), (0, _tast.UnionCase$$get_RecdFields)(sigUnionCase))) {
    return err$$6(function (tupledArg$$26) {
      return (0, _FSComp.SR$$$ModuleContainsConstructorButTypesOfFieldsDiffer$$Z384F8060)(tupledArg$$26[0], tupledArg$$26[1]);
    });
  } else if ((0, _tast.isLessAccessible)(implUnionCase.Accessibility, sigUnionCase.Accessibility)) {
    return err$$6(function (tupledArg$$27) {
      return (0, _FSComp.SR$$$ModuleContainsConstructorButAccessibilityDiffers$$Z384F8060)(tupledArg$$27[0], tupledArg$$27[1]);
    });
  } else {
    return Checker$$checkAttribs(this$$$6, aenv$$10, implUnionCase.Attribs, sigUnionCase.Attribs, function fixup$$6(attribs$$5) {
      implUnionCase.Attribs = attribs$$5;
    });
  }
}

function Checker$$checkField(this$$$7, aenv$$11, implField$$1, sigField$$1) {
  const err$$7 = function err$$7(f$$6) {
    (0, _ErrorLogger.errorR)(new FieldNotContained(this$$$7.denv, implField$$1, sigField$$1, f$$6));
    return false;
  };

  sigField$$1.rfield_other_range = [(0, _tast.RecdField$$get_Range)(implField$$1), true];
  implField$$1.rfield_other_range = [(0, _tast.RecdField$$get_Range)(sigField$$1), false];

  if ((0, _ast.Ident$$get_idText)(implField$$1.rfield_id) !== (0, _ast.Ident$$get_idText)(sigField$$1.rfield_id)) {
    return err$$7(function (tupledArg$$28) {
      return (0, _FSComp.SR$$$FieldNotContainedNamesDiffer$$Z384F8060)(tupledArg$$28[0], tupledArg$$28[1]);
    });
  } else if ((0, _tast.isLessAccessible)((0, _tast.RecdField$$get_Accessibility)(implField$$1), (0, _tast.RecdField$$get_Accessibility)(sigField$$1))) {
    return err$$7(function (tupledArg$$29) {
      return (0, _FSComp.SR$$$FieldNotContainedAccessibilitiesDiffer$$Z384F8060)(tupledArg$$29[0], tupledArg$$29[1]);
    });
  } else if ((0, _tast.RecdField$$get_IsStatic)(implField$$1) !== (0, _tast.RecdField$$get_IsStatic)(sigField$$1)) {
    return err$$7(function (tupledArg$$30) {
      return (0, _FSComp.SR$$$FieldNotContainedStaticsDiffer$$Z384F8060)(tupledArg$$30[0], tupledArg$$30[1]);
    });
  } else if ((0, _tast.RecdField$$get_IsMutable)(implField$$1) !== (0, _tast.RecdField$$get_IsMutable)(sigField$$1)) {
    return err$$7(function (tupledArg$$31) {
      return (0, _FSComp.SR$$$FieldNotContainedMutablesDiffer$$Z384F8060)(tupledArg$$31[0], tupledArg$$31[1]);
    });
  } else if (!(0, _Util.equals)((0, _tast.RecdField$$get_LiteralValue)(implField$$1), (0, _tast.RecdField$$get_LiteralValue)(sigField$$1))) {
    return err$$7(function (tupledArg$$32) {
      return (0, _FSComp.SR$$$FieldNotContainedLiteralsDiffer$$Z384F8060)(tupledArg$$32[0], tupledArg$$32[1]);
    });
  } else if (!(0, _TastOps.typeAEquiv)(this$$$7.g, aenv$$11, (0, _tast.RecdField$$get_FormalType)(implField$$1), (0, _tast.RecdField$$get_FormalType)(sigField$$1))) {
    return err$$7(function (tupledArg$$33) {
      return (0, _FSComp.SR$$$FieldNotContainedTypesDiffer$$Z384F8060)(tupledArg$$33[0], tupledArg$$33[1]);
    });
  } else if (Checker$$checkAttribs(this$$$7, aenv$$11, (0, _tast.RecdField$$get_FieldAttribs)(implField$$1), (0, _tast.RecdField$$get_FieldAttribs)(sigField$$1), function fixup$$7(attribs$$6) {
    implField$$1.rfield_fattribs = attribs$$6;
  })) {
    return Checker$$checkAttribs(this$$$7, aenv$$11, (0, _tast.RecdField$$get_PropertyAttribs)(implField$$1), (0, _tast.RecdField$$get_PropertyAttribs)(sigField$$1), function fixup$$8(attribs$$7) {
      implField$$1.rfield_pattribs = attribs$$7;
    });
  } else {
    return false;
  }
}

function Checker$$checkMemberDatasConform(this$$$8, err$$8, _implAttrs$$1, implVal$$2, implMemberInfo$$1, _sigAttrs$$1, sigVal$$2, sigMemberInfo$$1) {
  const matchValue$$3 = [implMemberInfo$$1, sigMemberInfo$$1];
  var $target$$34, implMembInfo, sigMembInfo;

  if (matchValue$$3[0] != null) {
    if (matchValue$$3[1] != null) {
      $target$$34 = 1;
      implMembInfo = matchValue$$3[0];
      sigMembInfo = matchValue$$3[1];
    } else {
      $target$$34 = 2;
    }
  } else if (matchValue$$3[1] == null) {
    $target$$34 = 0;
  } else {
    $target$$34 = 2;
  }

  switch ($target$$34) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        if (!((0, _tast.Val$$get_CompiledName)(implVal$$2) === (0, _tast.Val$$get_CompiledName)(sigVal$$2))) {
          return err$$8(function (tupledArg$$34) {
            return (0, _FSComp.SR$$$ValueNotContainedMutabilityDotNetNamesDiffer$$30230F9B)(tupledArg$$34[0], tupledArg$$34[1], tupledArg$$34[2]);
          });
        } else if (!(implMembInfo.MemberFlags.IsInstance === sigMembInfo.MemberFlags.IsInstance)) {
          return err$$8(function (tupledArg$$35) {
            return (0, _FSComp.SR$$$ValueNotContainedMutabilityStaticsDiffer$$30230F9B)(tupledArg$$35[0], tupledArg$$35[1], tupledArg$$35[2]);
          });
        } else if (false) {
          return err$$8(function (tupledArg$$36) {
            return (0, _FSComp.SR$$$ValueNotContainedMutabilityVirtualsDiffer$$30230F9B)(tupledArg$$36[0], tupledArg$$36[1], tupledArg$$36[2]);
          });
        } else if (!(implMembInfo.MemberFlags.IsDispatchSlot === sigMembInfo.MemberFlags.IsDispatchSlot)) {
          return err$$8(function (tupledArg$$37) {
            return (0, _FSComp.SR$$$ValueNotContainedMutabilityAbstractsDiffer$$30230F9B)(tupledArg$$37[0], tupledArg$$37[1], tupledArg$$37[2]);
          });
        } else if (!implMembInfo.MemberFlags.IsFinal ? sigMembInfo.MemberFlags.IsFinal : false) {
          return err$$8(function (tupledArg$$38) {
            return (0, _FSComp.SR$$$ValueNotContainedMutabilityFinalsDiffer$$30230F9B)(tupledArg$$38[0], tupledArg$$38[1], tupledArg$$38[2]);
          });
        } else if (!(implMembInfo.MemberFlags.IsOverrideOrExplicitImpl === sigMembInfo.MemberFlags.IsOverrideOrExplicitImpl)) {
          return err$$8(function (tupledArg$$39) {
            return (0, _FSComp.SR$$$ValueNotContainedMutabilityOverridesDiffer$$30230F9B)(tupledArg$$39[0], tupledArg$$39[1], tupledArg$$39[2]);
          });
        } else if (!(0, _Util.equals)(implMembInfo.MemberFlags.MemberKind, sigMembInfo.MemberFlags.MemberKind)) {
          return err$$8(function (tupledArg$$40) {
            return (0, _FSComp.SR$$$ValueNotContainedMutabilityOneIsConstructor$$30230F9B)(tupledArg$$40[0], tupledArg$$40[1], tupledArg$$40[2]);
          });
        } else {
          const finstance = (0, _TastOps.ValSpecIsCompiledAsInstance)(this$$$8.g, sigVal$$2);
          const ainstance = (0, _TastOps.ValSpecIsCompiledAsInstance)(this$$$8.g, implVal$$2);

          if (finstance ? !ainstance : false) {
            return err$$8(function (tupledArg$$41) {
              return (0, _FSComp.SR$$$ValueNotContainedMutabilityStaticButInstance$$30230F9B)(tupledArg$$41[0], tupledArg$$41[1], tupledArg$$41[2]);
            });
          } else if (!finstance ? ainstance : false) {
            return err$$8(function (tupledArg$$42) {
              return (0, _FSComp.SR$$$ValueNotContainedMutabilityInstanceButStatic$$30230F9B)(tupledArg$$42[0], tupledArg$$42[1], tupledArg$$42[2]);
            });
          } else {
            return true;
          }
        }
      }

    case 2:
      {
        return false;
      }
  }
}

function Checker$$checkRecordFields(this$$$9, m$$7, aenv$$12, implTycon$$1, implFields, sigFields) {
  const implFields$$1 = (0, _tast.TyconRecdFields$$get_TrueFieldsAsList)(implFields);
  const sigFields$$1 = (0, _tast.TyconRecdFields$$get_TrueFieldsAsList)(sigFields);
  const m1 = (0, _illib.NameMapModule$$$ofKeyedList)(function f$$7(rfld) {
    return (0, _tast.RecdField$$get_Name)(rfld);
  }, implFields$$1);
  const m2 = (0, _illib.NameMapModule$$$ofKeyedList)(function f$$8(rfld$$1) {
    return (0, _tast.RecdField$$get_Name)(rfld$$1);
  }, sigFields$$1);

  if ((0, _illib.NameMapModule$$$suball2)(function (fieldName, _arg3$$1) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleFieldRequiredButNotSpecified$$30230F9B)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$1).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$1), fieldName), m$$7));
    return false;
  }, function (implField$$2, sigField$$2) {
    return Checker$$checkField(this$$$9, aenv$$12, implField$$2, sigField$$2);
  }, m1, m2) ? (0, _illib.NameMapModule$$$suball2)(function (fieldName$$1, _arg4$$1) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleFieldWasPresent$$30230F9B)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$1).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$1), fieldName$$1), m$$7));
    return false;
  }, function (x$$4, y$$3) {
    return Checker$$checkField(this$$$9, aenv$$12, y$$3, x$$4);
  }, m2, m1) : false) {
    if ((0, _List.forAll2)(function (implField$$3, sigField$$3) {
      return Checker$$checkField(this$$$9, aenv$$12, implField$$3, sigField$$3);
    }, implFields$$1, sigFields$$1)) {
      return true;
    } else {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleFieldOrderDiffer$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$1).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$1)), m$$7));
      return false;
    }
  } else {
    return false;
  }
}

function Checker$$checkRecordFieldsForExn(this$$$10, _g$$1, _denv$$1, err$$9, aenv$$13, implFields$$2, sigFields$$2) {
  const implFields$$3 = (0, _tast.TyconRecdFields$$get_TrueFieldsAsList)(implFields$$2);
  const sigFields$$3 = (0, _tast.TyconRecdFields$$get_TrueFieldsAsList)(sigFields$$2);
  const m1$$1 = (0, _illib.NameMapModule$$$ofKeyedList)(function f$$9(rfld$$2) {
    return (0, _tast.RecdField$$get_Name)(rfld$$2);
  }, implFields$$3);
  const m2$$1 = (0, _illib.NameMapModule$$$ofKeyedList)(function f$$10(rfld$$3) {
    return (0, _tast.RecdField$$get_Name)(rfld$$3);
  }, sigFields$$3);

  if ((0, _illib.NameMapModule$$$suball2)(function (s, _arg5) {
    (0, _ErrorLogger.errorR)(err$$9(function (tupledArg$$43) {
      return (0, _FSComp.SR$$$ExceptionDefsNotCompatibleFieldInSigButNotImpl$$30230F9B)(s, tupledArg$$43[0], tupledArg$$43[1]);
    }));
    return false;
  }, function (implField$$4, sigField$$4) {
    return Checker$$checkField(this$$$10, aenv$$13, implField$$4, sigField$$4);
  }, m1$$1, m2$$1) ? (0, _illib.NameMapModule$$$suball2)(function (s$$1, _arg6) {
    (0, _ErrorLogger.errorR)(err$$9(function (tupledArg$$44) {
      return (0, _FSComp.SR$$$ExceptionDefsNotCompatibleFieldInImplButNotSig$$30230F9B)(s$$1, tupledArg$$44[0], tupledArg$$44[1]);
    }));
    return false;
  }, function (x$$7, y$$6) {
    return Checker$$checkField(this$$$10, aenv$$13, y$$6, x$$7);
  }, m2$$1, m1$$1) : false) {
    if ((0, _List.forAll2)(function (implField$$5, sigField$$5) {
      return Checker$$checkField(this$$$10, aenv$$13, implField$$5, sigField$$5);
    }, implFields$$3, sigFields$$3)) {
      return true;
    } else {
      (0, _ErrorLogger.errorR)(err$$9(function (tupledArg$$45) {
        return (0, _FSComp.SR$$$ExceptionDefsNotCompatibleFieldOrderDiffers$$Z384F8060)(tupledArg$$45[0], tupledArg$$45[1]);
      }));
      return false;
    }
  } else {
    return false;
  }
}

function Checker$$checkVirtualSlots(this$$$11, denv$$3, m$$8, implTycon$$2, implAbstractSlots, sigAbstractSlots) {
  const m1$$2 = (0, _illib.NameMapModule$$$ofKeyedList)(function (v) {
    return (0, _tast.ValRef$$get_DisplayName)(v);
  }, implAbstractSlots);
  const m2$$2 = (0, _illib.NameMapModule$$$ofKeyedList)(function (v$$1) {
    return (0, _tast.ValRef$$get_DisplayName)(v$$1);
  }, sigAbstractSlots);

  if ((0, _illib.NameMapModule$$$suball2)(function errf(_s, vref) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleAbstractMemberMissingInImpl$$30230F9B)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$2).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$2), (0, _NicePrint.stringValOrMember)(denv$$3, (0, _tast.ValRef$$get_Deref)(vref))), m$$8));
    return false;
  }, function p(_x, _y$$1) {
    return true;
  }, m1$$2, m2$$2)) {
    return (0, _illib.NameMapModule$$$suball2)(function errf$$1(_s$$1, vref$$1) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleAbstractMemberMissingInSig$$30230F9B)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$2).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$2), (0, _NicePrint.stringValOrMember)(denv$$3, (0, _tast.ValRef$$get_Deref)(vref$$1))), m$$8));
      return false;
    }, function p$$1(_x$$1, _y$$2) {
      return true;
    }, m2$$2, m1$$2);
  } else {
    return false;
  }
}

function Checker$$checkClassFields(this$$$12, isStruct, m$$9, aenv$$14, implTycon$$3, implFields$$4, sigFields$$4) {
  const implFields$$5 = (0, _tast.TyconRecdFields$$get_TrueFieldsAsList)(implFields$$4);
  const sigFields$$5 = (0, _tast.TyconRecdFields$$get_TrueFieldsAsList)(sigFields$$4);
  const m1$$5 = (0, _illib.NameMapModule$$$ofKeyedList)(function f$$11(rfld$$4) {
    return (0, _tast.RecdField$$get_Name)(rfld$$4);
  }, implFields$$5);
  const m2$$5 = (0, _illib.NameMapModule$$$ofKeyedList)(function f$$12(rfld$$5) {
    return (0, _tast.RecdField$$get_Name)(rfld$$5);
  }, sigFields$$5);

  if ((0, _illib.NameMapModule$$$suball2)(function (fieldName$$2, _arg7) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleFieldRequiredButNotSpecified$$30230F9B)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$3).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$3), fieldName$$2), m$$9));
    return false;
  }, function (implField$$6, sigField$$6) {
    return Checker$$checkField(this$$$12, aenv$$14, implField$$6, sigField$$6);
  }, m1$$5, m2$$5)) {
    if (isStruct) {
      return (0, _illib.NameMapModule$$$suball2)(function (fieldName$$3, _arg8) {
        (0, _ErrorLogger.warning)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleFieldIsInImplButNotSig$$30230F9B)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$3).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$3), fieldName$$3), m$$9));
        return true;
      }, function (x$$8, y$$7) {
        return Checker$$checkField(this$$$12, aenv$$14, y$$7, x$$8);
      }, m2$$5, m1$$5);
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function Checker$$checkTypeRepr(this$$$13, m$$10, aenv$$15, implTycon$$4, sigTypeRepr$$3) {
  var matchValue$$8, aenv$$16, aenv$$17;

  const reportNiceError = function reportNiceError(k, s1, s2) {
    const aset = (0, _lib.NameSetModule$$$ofList)(s1);
    const fset = (0, _lib.NameSetModule$$$ofList)(s2);
    const matchValue$$4 = (0, _zset.ZsetModule$$$elements)((0, _zset.ZsetModule$$$diff)(aset, fset));

    if (matchValue$$4.tail == null) {
      const matchValue$$5 = (0, _zset.ZsetModule$$$elements)((0, _zset.ZsetModule$$$diff)(fset, aset));

      if (matchValue$$5.tail == null) {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleNumbersDiffer$$30230F9B)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$4).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$4), k), m$$10));
        return false;
      } else {
        const l$$7 = matchValue$$5;
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleSignatureDefinesButImplDoesNot$$Z46998140)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$4).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$4), k, (0, _String.join)(";", ...l$$7)), m$$10));
        return false;
      }
    } else {
      const l$$8 = matchValue$$4;
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleImplDefinesButSignatureDoesNot$$Z46998140)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$4).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$4), k, (0, _String.join)(";", ...l$$8)), m$$10));
      return false;
    }
  };

  const matchValue$$6 = [(0, _tast.Entity$$get_TypeReprInfo)(implTycon$$4), sigTypeRepr$$3];
  var $target$$42, r, r1$$1, r2$$1, implFields$$6, sigFields$$6, r1$$2, r2$$2, tcr1$$1, tcr2$$1, ty1$$1, ty2$$1;

  if (matchValue$$6[0].tag === 2) {
    if (matchValue$$6[1].tag === 6) {
      $target$$42 = 0;
    } else if (matchValue$$6[1].tag === 2) {
      $target$$42 = 4;
      r1$$1 = matchValue$$6[0].fields[0];
      r2$$1 = matchValue$$6[1].fields[0];
    } else {
      $target$$42 = 11;
    }
  } else if (matchValue$$6[0].tag === 3) {
    if (matchValue$$6[1].tag === 6) {
      $target$$42 = 0;
    } else {
      $target$$42 = 11;
    }
  } else if (matchValue$$6[0].tag === 0) {
    if (matchValue$$6[1].tag === 6) {
      $target$$42 = 1;
      r = matchValue$$6[0].fields[0];
    } else if (matchValue$$6[1].tag === 0) {
      $target$$42 = 6;
      r1$$2 = matchValue$$6[0].fields[0];
      r2$$2 = matchValue$$6[1].fields[0];
    } else {
      $target$$42 = 11;
    }
  } else if (matchValue$$6[0].tag === 4) {
    if (matchValue$$6[1].tag === 6) {
      $target$$42 = 2;
    } else if (matchValue$$6[1].tag === 4) {
      $target$$42 = 7;
      tcr1$$1 = matchValue$$6[0].fields[0];
      tcr2$$1 = matchValue$$6[1].fields[0];
    } else {
      $target$$42 = 11;
    }
  } else if (matchValue$$6[0].tag === 5) {
    if (matchValue$$6[1].tag === 6) {
      $target$$42 = 3;
    } else if (matchValue$$6[1].tag === 5) {
      $target$$42 = 8;
      ty1$$1 = matchValue$$6[0].fields[0];
      ty2$$1 = matchValue$$6[1].fields[0];
    } else {
      $target$$42 = 11;
    }
  } else if (matchValue$$6[0].tag === 6) {
    if (matchValue$$6[1].tag === 6) {
      $target$$42 = 9;
    } else {
      $target$$42 = 10;
    }
  } else if (matchValue$$6[1].tag === 6) {
    $target$$42 = 0;
  } else if (matchValue$$6[1].tag === 1) {
    $target$$42 = 5;
    implFields$$6 = matchValue$$6[0].fields[0];
    sigFields$$6 = matchValue$$6[1].fields[0];
  } else {
    $target$$42 = 11;
  }

  switch ($target$$42) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        var $target$$43;

        if (r.fsobjmodel_kind.tag === 2) {
          $target$$43 = 0;
        } else if (r.fsobjmodel_kind.tag === 4) {
          $target$$43 = 0;
        } else {
          $target$$43 = 1;
        }

        switch ($target$$43) {
          case 0:
            {
              (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleImplDefinesStruct$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$4).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$4)), m$$10));
              return false;
            }

          case 1:
            {
              return true;
            }
        }
      }

    case 2:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleDotNetTypeRepresentationIsHidden$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$4).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$4)), m$$10));
        return false;
      }

    case 3:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleTypeIsHidden$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$4).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$4)), m$$10));
        return false;
      }

    case 4:
      {
        const ucases1 = (0, _tast.TyconUnionData$$get_UnionCasesAsList)(r1$$1);
        const ucases2 = (0, _tast.TyconUnionData$$get_UnionCasesAsList)(r2$$1);

        if ((0, _List.length)(ucases1) !== (0, _List.length)(ucases2)) {
          const names = function names(l$$9) {
            return (0, _List.map)(function mapping$$4(c) {
              return (0, _ast.Ident$$get_idText)(c.Id);
            }, l$$9);
          };

          return reportNiceError("union case", names(ucases1), names(ucases2));
        } else {
          return (0, _List.forAll2)(function (implUnionCase$$1, sigUnionCase$$1) {
            return Checker$$checkUnionCase(this$$$13, aenv$$15, implUnionCase$$1, sigUnionCase$$1);
          }, ucases1, ucases2);
        }
      }

    case 5:
      {
        return Checker$$checkRecordFields(this$$$13, m$$10, aenv$$15, implTycon$$4, implFields$$6, sigFields$$6);
      }

    case 6:
      {
        if (!(matchValue$$8 = [r1$$2.fsobjmodel_kind, r2$$2.fsobjmodel_kind], matchValue$$8[0].tag === 1 ? matchValue$$8[1].tag === 1 ? true : false : matchValue$$8[0].tag === 2 ? matchValue$$8[1].tag === 2 ? true : false : matchValue$$8[0].tag === 4 ? matchValue$$8[1].tag === 4 ? true : false : matchValue$$8[0].tag === 3 ? matchValue$$8[1].tag === 3 ? ((0, _TastOps.typeAEquiv)(this$$$13.g, aenv$$15, matchValue$$8[0].fields[0].fields[1], matchValue$$8[1].fields[0].fields[1]) ? (0, _List.length)(matchValue$$8[0].fields[0].fields[2]) === (0, _List.length)(matchValue$$8[1].fields[0].fields[2]) : false) ? (aenv$$16 = (0, _TastOps.TypeEquivEnv$$BindEquivTypars)(aenv$$15, matchValue$$8[0].fields[0].fields[2], matchValue$$8[1].fields[0].fields[2]), ((0, _TastOps.typarsAEquiv)(this$$$13.g, aenv$$16, matchValue$$8[0].fields[0].fields[2], matchValue$$8[1].fields[0].fields[2]) ? (0, _List.length)(matchValue$$8[0].fields[0].fields[3]) === (0, _List.length)(matchValue$$8[1].fields[0].fields[3]) : false) ? (aenv$$17 = (0, _TastOps.TypeEquivEnv$$BindEquivTypars)(aenv$$16, matchValue$$8[0].fields[0].fields[3], matchValue$$8[1].fields[0].fields[3]), ((0, _TastOps.typarsAEquiv)(this$$$13.g, aenv$$17, matchValue$$8[0].fields[0].fields[3], matchValue$$8[1].fields[0].fields[3]) ? (0, _illib.List$$$lengthsEqAndForall2)(function p$$3(l1$$3, l2$$3) {
          return (0, _illib.List$$$lengthsEqAndForall2)(function p$$2(p1, p2) {
            return (0, _TastOps.typeAEquiv)(this$$$13.g, aenv$$17, (0, _tast.SlotParam$$get_Type)(p1), (0, _tast.SlotParam$$get_Type)(p2));
          }, l1$$3, l2$$3);
        }, matchValue$$8[0].fields[0].fields[4], matchValue$$8[1].fields[0].fields[4]) : false) ? (0, _TastOps.returnTypesAEquiv)(this$$$13.g, aenv$$17, matchValue$$8[0].fields[0].fields[5], matchValue$$8[1].fields[0].fields[5]) : false) : false) : false : false : matchValue$$8[1].tag === 0 ? true : false)) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleTypeIsDifferentKind$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$4).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$4)), m$$10));
          return false;
        } else {
          const isStruct$$1 = r1$$2.fsobjmodel_kind.tag === 2 ? true : false;

          if (Checker$$checkClassFields(this$$$13, isStruct$$1, m$$10, aenv$$15, implTycon$$4, r1$$2.fsobjmodel_rfields, r2$$2.fsobjmodel_rfields)) {
            return Checker$$checkVirtualSlots(this$$$13, this$$$13.denv, m$$10, implTycon$$4, r1$$2.fsobjmodel_vslots, r2$$2.fsobjmodel_vslots);
          } else {
            return false;
          }
        }
      }

    case 7:
      {
        if (!(0, _Util.equals)(tcr1$$1, tcr2$$1)) {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleILDiffer$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$4).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$4)), m$$10));
          return false;
        } else {
          return true;
        }
      }

    case 8:
      {
        if ((0, _TastOps.typeAEquiv)(this$$$13.g, aenv$$15, ty1$$1, ty2$$1)) {
          return true;
        } else {
          (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleRepresentationsDiffer$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$4).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$4)), m$$10));
          return false;
        }
      }

    case 9:
      {
        return true;
      }

    case 10:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleRepresentationsDiffer$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$4).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$4)), m$$10));
        return false;
      }

    case 11:
      {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleRepresentationsDiffer$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$4).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$4)), m$$10));
        return false;
      }
  }
}

function Checker$$checkTypeAbbrev(this$$$14, m$$11, aenv$$18, implTycon$$5, sigTycon$$1) {
  const kind1 = (0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$5);
  const kind2 = (0, _tast.Entity$$get_TypeOrMeasureKind)(sigTycon$$1);

  if (!(0, _Util.equals)(kind1, kind2)) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleSignatureDeclaresDiffer$$Z46998140)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$5).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$5), kind2.toString(), kind1.toString()), m$$11));
    return false;
  } else {
    const matchValue$$10 = [(0, _tast.Entity$$get_TypeAbbrev)(implTycon$$5), (0, _tast.Entity$$get_TypeAbbrev)(sigTycon$$1)];

    if (matchValue$$10[0] == null) {
      if (matchValue$$10[1] != null) {
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleSigHasAbbreviation$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$5).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$5)), m$$11));
        return false;
      } else {
        return true;
      }
    } else if (matchValue$$10[1] == null) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleAbbreviationHiddenBySig$$Z384F8060)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$5).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$5)), m$$11));
      return false;
    } else {
      const ty1$$2 = matchValue$$10[0];
      const ty2$$2 = matchValue$$10[1];

      if (!(0, _TastOps.typeAEquiv)(this$$$14.g, aenv$$18, ty1$$2, ty2$$2)) {
        const patternInput$$2 = (0, _NicePrint.minimalStringsOfTwoTypes)(this$$$14.denv, ty1$$2, ty2$$2);
        (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$DefinitionsInSigAndImplNotCompatibleAbbreviationsDiffer$$Z46998140)((0, _tast.Entity$$get_TypeOrMeasureKind)(implTycon$$5).toString(), (0, _tast.Entity$$get_DisplayName)(implTycon$$5), patternInput$$2[0], patternInput$$2[1]), m$$11));
        return false;
      } else {
        return true;
      }
    }
  }
}

function Checker$$checkModuleOrNamespaceContents(this$$$15, m$$12, aenv$$19, implModRef$$3, signModType$$2) {
  const implModType = (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(implModRef$$3);

  if (!(0, _Util.equals)((0, _tast.ModuleOrNamespaceType$$get_ModuleOrNamespaceKind)(implModType), (0, _tast.ModuleOrNamespaceType$$get_ModuleOrNamespaceKind)(signModType$$2))) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typrelModuleNamespaceAttributesDifferInSigAndImpl)(), m$$12));
  }

  if ((0, _illib.NameMapModule$$$suball2)(function errf$$2(s$$2, _fx) {
    (0, _ErrorLogger.errorR)(new RequiredButNotSpecified(this$$$15.denv, implModRef$$3, "type", function (os) {
      (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os, (0, _String.printf)("%s"))(s$$2);
    }, m$$12));
    return false;
  }, function p$$4(implTycon$$6, sigTycon$$2) {
    return Checker$$checkTypeDef(this$$$15, aenv$$19, implTycon$$6, sigTycon$$2);
  }, (0, _tast.ModuleOrNamespaceType$$get_TypesByMangledName)(implModType), (0, _tast.ModuleOrNamespaceType$$get_TypesByMangledName)(signModType$$2)) ? (0, _illib.NameMapModule$$$suball2)(function errf$$3(s$$3, fx) {
    (0, _ErrorLogger.errorR)(new RequiredButNotSpecified(this$$$15.denv, implModRef$$3, (0, _tast.Entity$$get_IsModule)(fx) ? "module" : "namespace", function (os$$1) {
      (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os$$1, (0, _String.printf)("%s"))(s$$3);
    }, m$$12));
    return false;
  }, function p$$5(x1, x2) {
    return Checker$$checkModuleOrNamespace(this$$$15, aenv$$19, (0, _tast.mkLocalModRef)(x1), x2);
  }, (0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(implModType), (0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(signModType$$2)) : false) {
    const sigValHadNoMatchingImplementation = function sigValHadNoMatchingImplementation(fx$$1, _closeActualVal) {
      (0, _ErrorLogger.errorR)(new RequiredButNotSpecified(this$$$15.denv, implModRef$$3, "value", function (os$$2) {
        if ((0, _tast.Val$$get_IsMember)(fx$$1)) {
          (0, _NicePrint.outputQualifiedValOrMember)(this$$$15.denv, os$$2, fx$$1);
        } else {
          (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os$$2, (0, _String.printf)("%s"))((0, _tast.Val$$get_DisplayName)(fx$$1));
        }
      }, m$$12));
    };

    const valuesPartiallyMatch = function valuesPartiallyMatch(av, fv) {
      const akey = (0, _tast.Val$$GetLinkagePartialKey)(av);
      const fkey = (0, _tast.Val$$GetLinkagePartialKey)(fv);

      if ((0, _Util.equals)(akey.MemberParentMangledName, fkey.MemberParentMangledName) ? akey.LogicalName === fkey.LogicalName : false) {
        return akey.TotalArgCount === fkey.TotalArgCount;
      } else {
        return false;
      }
    };

    return (0, _illib.NameMapModule$$$suball2)(function errf$$4(_s$$2, fxs) {
      sigValHadNoMatchingImplementation((0, _List.head)(fxs), null);
      return false;
    }, function p$$6(avs, fvs) {
      const matchValue$$11 = [avs, fvs];
      var $target$$44, av$$1, fv$$1;

      if (matchValue$$11[0].tail != null) {
        if (matchValue$$11[1].tail != null) {
          if (matchValue$$11[1].tail.tail == null) {
            if (matchValue$$11[0].tail.tail == null) {
              $target$$44 = 1;
              av$$1 = matchValue$$11[0].head;
              fv$$1 = matchValue$$11[1].head;
            } else {
              $target$$44 = 2;
            }
          } else {
            $target$$44 = 2;
          }
        } else {
          $target$$44 = 0;
        }
      } else {
        $target$$44 = 0;
      }

      switch ($target$$44) {
        case 0:
          {
            throw new Error("unreachable");
          }

        case 1:
          {
            if (valuesPartiallyMatch(av$$1, fv$$1)) {
              return Checker$$checkVal(this$$$15, implModRef$$3, aenv$$19, av$$1, fv$$1);
            } else {
              sigValHadNoMatchingImplementation(fv$$1, null);
              return false;
            }
          }

        case 2:
          {
            const matchingPairs = (0, _List.choose)(function chooser(fv$$2) {
              const matchValue$$12 = (0, _List.tryFind)(function predicate$$9(av$$2) {
                const res$$1 = (0, _TastOps.valLinkageAEquiv)(this$$$15.g, aenv$$19, av$$2, fv$$2);
                return res$$1;
              }, avs);

              if (matchValue$$12 != null) {
                const av$$3 = matchValue$$12;
                return [fv$$2, av$$3];
              } else {
                return null;
              }
            }, fvs);
            const allPairsOk = (0, _List.forAll)(function predicate$$10(x$$9) {
              return x$$9;
            }, (0, _List.map)(function mapping$$5(tupledArg$$46) {
              return Checker$$checkVal(this$$$15, implModRef$$3, aenv$$19, tupledArg$$46[1], tupledArg$$46[0]);
            }, matchingPairs));
            const someNotOk = (0, _List.length)(matchingPairs) < (0, _List.length)(fvs);

            if (someNotOk) {
              const patternInput$$3 = (0, _illib.List$$$splitChoose)(function select(fv$$4) {
                const matchValue$$13 = (0, _List.tryFind)(function predicate$$11(av$$5) {
                  return valuesPartiallyMatch(av$$5, fv$$4);
                }, avs);

                if (matchValue$$13 != null) {
                  const av$$6 = matchValue$$13;
                  return new _Option.Choice(1, "Choice2Of2", [fv$$4, av$$6]);
                } else {
                  return new _Option.Choice(0, "Choice1Of2", fv$$4);
                }
              }, fvs);
              (0, _Seq.iterate)(function (forLoopVar) {
                Checker$$checkVal(this$$$15, implModRef$$3, aenv$$19, forLoopVar[1], forLoopVar[0]);
              }, patternInput$$3[1]);
              (0, _Seq.iterate)(function (fv$$6) {
                sigValHadNoMatchingImplementation(fv$$6, null);
              }, patternInput$$3[0]);
            }

            if (allPairsOk) {
              return !someNotOk;
            } else {
              return false;
            }
          }
      }
    }, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembersByLogicalNameUncached)(implModType), (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembersByLogicalNameUncached)(signModType$$2));
  } else {
    return false;
  }
}

function Checker$$checkModuleOrNamespace(this$$$16, aenv$$20, implModRef$$5, sigModRef) {
  (0, _tast.Entity$$SetOtherRange$$56F61A9)(sigModRef, [(0, _tast.EntityRef$$get_Range)(implModRef$$5), true]);
  (0, _tast.Entity$$SetOtherRange$$56F61A9)((0, _tast.EntityRef$$get_Deref)(implModRef$$5), [(0, _tast.Entity$$get_Range)(sigModRef), false]);

  if (Checker$$checkModuleOrNamespaceContents(this$$$16, (0, _tast.EntityRef$$get_Range)(implModRef$$5), aenv$$20, implModRef$$5, (0, _tast.Entity$$get_ModuleOrNamespaceType)(sigModRef))) {
    return Checker$$checkAttribs(this$$$16, aenv$$20, (0, _tast.EntityRef$$get_Attribs)(implModRef$$5), (0, _tast.Entity$$get_Attribs)(sigModRef), function fixup$$9(arg00$$43) {
      (0, _tast.Entity$$SetAttribs$$A32CD4C)((0, _tast.EntityRef$$get_Deref)(implModRef$$5), arg00$$43);
    });
  } else {
    return false;
  }
}

function CheckNamesOfModuleOrNamespaceContents(denv$$5, implModRef$$6, signModType$$4) {
  const m$$14 = (0, _tast.EntityRef$$get_Range)(implModRef$$6);
  const implModType$$1 = (0, _tast.EntityRef$$get_ModuleOrNamespaceType)(implModRef$$6);

  if ((0, _illib.NameMapModule$$$suball2)(function (s$$4, _fx$$1) {
    (0, _ErrorLogger.errorR)(new RequiredButNotSpecified(denv$$5, implModRef$$6, "type", function (os$$3) {
      (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os$$3, (0, _String.printf)("%s"))(s$$4);
    }, m$$14));
    return false;
  }, function (_arg10, _arg9) {
    return true;
  }, (0, _tast.ModuleOrNamespaceType$$get_TypesByMangledName)(implModType$$1), (0, _tast.ModuleOrNamespaceType$$get_TypesByMangledName)(signModType$$4)) ? (0, _illib.NameMapModule$$$suball2)(function errf$$5(s$$5, fx$$2) {
    (0, _ErrorLogger.errorR)(new RequiredButNotSpecified(denv$$5, implModRef$$6, (0, _tast.Entity$$get_IsModule)(fx$$2) ? "module" : "namespace", function (os$$4) {
      (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os$$4, (0, _String.printf)("%s"))(s$$5);
    }, m$$14));
    return false;
  }, function p$$7(x1$$1, x2$$1) {
    return CheckNamesOfModuleOrNamespace(denv$$5, (0, _tast.mkLocalModRef)(x1$$1), (0, _tast.Entity$$get_ModuleOrNamespaceType)(x2$$1));
  }, (0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(implModType$$1), (0, _tast.ModuleOrNamespaceType$$get_ModulesAndNamespacesByDemangledName)(signModType$$4)) : false) {
    return (0, _illib.NameMapModule$$$suball2)(function errf$$6(_s$$3, fxs$$1) {
      const fx$$3 = (0, _List.head)(fxs$$1);
      (0, _ErrorLogger.errorR)(new RequiredButNotSpecified(denv$$5, implModRef$$6, "value", function (os$$5) {
        if ((0, _tast.Val$$get_MemberInfo)(fx$$3) != null) {
          (0, _NicePrint.outputQualifiedValOrMember)(denv$$5, os$$5, fx$$3);
        } else {
          (0, _FSharp.PrintfModule$$$PrintFormatToStringBuilder)(os$$5, (0, _String.printf)("%s"))((0, _tast.Val$$get_DisplayName)(fx$$3));
        }
      }, m$$14));
      return false;
    }, function p$$8(_arg12, _arg11) {
      return true;
    }, (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembersByLogicalNameUncached)(implModType$$1), (0, _tast.ModuleOrNamespaceType$$get_AllValsAndMembersByLogicalNameUncached)(signModType$$4));
  } else {
    return false;
  }
}

function CheckNamesOfModuleOrNamespace(denv$$6, implModRef$$7, signModType$$5) {
  return CheckNamesOfModuleOrNamespaceContents(denv$$6, implModRef$$7, signModType$$5);
}