"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccessorDomain$$$CustomGetHashCode$$Z2EC759CB = AccessorDomain$$$CustomGetHashCode$$Z2EC759CB;
exports.AccessorDomain$$$CustomEquals$$5028E2EC = AccessorDomain$$$CustomEquals$$5028E2EC;
exports.IsAccessible = IsAccessible;
exports.IsEntityAccessible = IsEntityAccessible;
exports.CheckTyconAccessible = CheckTyconAccessible;
exports.IsTyconReprAccessible = IsTyconReprAccessible;
exports.CheckTyconReprAccessible = CheckTyconReprAccessible;
exports.IsTypeAccessible = IsTypeAccessible;
exports.IsTypeInstAccessible = IsTypeInstAccessible;
exports.IsProvidedMemberAccessible = IsProvidedMemberAccessible;
exports.ComputeILAccess = ComputeILAccess;
exports.IsILFieldInfoAccessible = IsILFieldInfoAccessible;
exports.GetILAccessOfILEventInfo = GetILAccessOfILEventInfo;
exports.IsILEventInfoAccessible = IsILEventInfoAccessible;
exports.GetILAccessOfILPropInfo = GetILAccessOfILPropInfo;
exports.IsILPropInfoAccessible = IsILPropInfoAccessible;
exports.IsValAccessible = IsValAccessible;
exports.CheckValAccessible = CheckValAccessible;
exports.IsUnionCaseAccessible = IsUnionCaseAccessible;
exports.CheckUnionCaseAccessible = CheckUnionCaseAccessible;
exports.IsRecdFieldAccessible = IsRecdFieldAccessible;
exports.CheckRecdFieldAccessible = CheckRecdFieldAccessible;
exports.CheckRecdFieldInfoAccessible = CheckRecdFieldInfoAccessible;
exports.CheckILFieldInfoAccessible = CheckILFieldInfoAccessible;
exports.IsTypeAndMethInfoAccessible = IsTypeAndMethInfoAccessible;
exports.IsMethInfoAccessible = IsMethInfoAccessible;
exports.IsPropInfoAccessible = IsPropInfoAccessible;
exports.IsFieldInfoAccessible = IsFieldInfoAccessible;
exports.AccessorDomain = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _TastOps = require("./TastOps");

var _tast = require("./tast");

var _List = require("../fable-core.2.0.3/List");

var _il = require("../absil/il");

var _infos = require("./infos");

var _import = require("./import");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

const AccessorDomain = (0, _Types.declare)(function AccessorDomain(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AccessorDomain = AccessorDomain;

function AccessorDomain$$$CustomGetHashCode$$Z2EC759CB(ad) {
  switch (ad.tag) {
    case 1:
      {
        return 2;
      }

    case 2:
      {
        return 3;
      }

    case 3:
      {
        return 4;
      }

    default:
      {
        return 1;
      }
  }
}

function AccessorDomain$$$CustomEquals$$5028E2EC(g, ad1, ad2) {
  const matchValue = [ad1, ad2];
  var $target$$1, cs1, cs2, tc1, tc2;

  if (matchValue[0].tag === 1) {
    if (matchValue[1].tag === 1) {
      $target$$1 = 1;
    } else {
      $target$$1 = 4;
    }
  } else if (matchValue[0].tag === 2) {
    if (matchValue[1].tag === 2) {
      $target$$1 = 2;
    } else {
      $target$$1 = 4;
    }
  } else if (matchValue[0].tag === 3) {
    if (matchValue[1].tag === 3) {
      $target$$1 = 3;
    } else {
      $target$$1 = 4;
    }
  } else if (matchValue[1].tag === 0) {
    $target$$1 = 0;
    cs1 = matchValue[0].fields[0];
    cs2 = matchValue[1].fields[0];
    tc1 = matchValue[0].fields[1];
    tc2 = matchValue[1].fields[1];
  } else {
    $target$$1 = 4;
  }

  switch ($target$$1) {
    case 0:
      {
        if ((0, _Util.equals)(cs1, cs2)) {
          const matchValue$$1 = [tc1, tc2];
          var $target$$2, tc1$$1, tc2$$1;

          if (matchValue$$1[0] != null) {
            if (matchValue$$1[1] != null) {
              $target$$2 = 1;
              tc1$$1 = matchValue$$1[0];
              tc2$$1 = matchValue$$1[1];
            } else {
              $target$$2 = 2;
            }
          } else if (matchValue$$1[1] == null) {
            $target$$2 = 0;
          } else {
            $target$$2 = 2;
          }

          switch ($target$$2) {
            case 0:
              {
                return true;
              }

            case 1:
              {
                return (0, _TastOps.tyconRefEq)(g, tc1$$1, tc2$$1);
              }

            case 2:
              {
                return false;
              }
          }
        } else {
          return false;
        }
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
  }
}

function IsAccessible(ad$$1, taccess) {
  switch (ad$$1.tag) {
    case 2:
      {
        return (0, _tast.canAccessFromSomewhere)(taccess);
      }

    case 3:
      {
        return true;
      }

    case 0:
      {
        const cpaths = ad$$1.fields[0];
        const _tcrefViewedFromOption = ad$$1.fields[1];
        return (0, _List.exists)(function (cpath) {
          return (0, _tast.canAccessFrom)(taccess, cpath);
        }, cpaths);
      }

    default:
      {
        return (0, _tast.canAccessFromEverywhere)(taccess);
      }
  }
}

function IsILMemberAccessible(g$$1, amap, m, tcrefOfViewedItem, ad$$2, access) {
  switch (ad$$2.tag) {
    case 2:
      {
        if ((0, _Util.equals)(access, new _il.ILMemberAccess(6, "Public")) ? true : (0, _Util.equals)(access, new _il.ILMemberAccess(4, "Family"))) {
          return true;
        } else {
          return (0, _Util.equals)(access, new _il.ILMemberAccess(3, "FamilyOrAssembly"));
        }
      }

    case 0:
      {
        const tcrefViewedFromOption = ad$$2.fields[1];
        const cpaths$$1 = ad$$2.fields[0];
        let accessibleByFamily;

        if ((0, _Util.equals)(access, new _il.ILMemberAccess(4, "Family")) ? true : (0, _Util.equals)(access, new _il.ILMemberAccess(3, "FamilyOrAssembly"))) {
          if (tcrefViewedFromOption != null) {
            const tcrefViewedFrom = tcrefViewedFromOption;
            accessibleByFamily = (0, _infos.ExistsHeadTypeInEntireHierarchy)(g$$1, amap, m, (0, _TastOps.generalizedTyconRef)(tcrefViewedFrom), tcrefOfViewedItem);
          } else {
            accessibleByFamily = false;
          }
        } else {
          accessibleByFamily = false;
        }

        const accessibleByInternalsVisibleTo = ((0, _Util.equals)(access, new _il.ILMemberAccess(0, "Assembly")) ? true : (0, _Util.equals)(access, new _il.ILMemberAccess(3, "FamilyOrAssembly"))) ? (0, _tast.canAccessFromOneOf)(cpaths$$1, (0, _tast.EntityRef$$get_CompilationPath)(tcrefOfViewedItem)) : false;
        let accessibleByFamilyAndAssembly;

        if ((0, _Util.equals)(access, new _il.ILMemberAccess(2, "FamilyAndAssembly")) ? (0, _tast.canAccessFromOneOf)(cpaths$$1, (0, _tast.EntityRef$$get_CompilationPath)(tcrefOfViewedItem)) : false) {
          if (tcrefViewedFromOption != null) {
            const tcrefViewedFrom$$1 = tcrefViewedFromOption;
            accessibleByFamilyAndAssembly = (0, _infos.ExistsHeadTypeInEntireHierarchy)(g$$1, amap, m, (0, _TastOps.generalizedTyconRef)(tcrefViewedFrom$$1), tcrefOfViewedItem);
          } else {
            accessibleByFamilyAndAssembly = false;
          }
        } else {
          accessibleByFamilyAndAssembly = false;
        }

        if (((0, _Util.equals)(access, new _il.ILMemberAccess(6, "Public")) ? true : accessibleByFamily) ? true : accessibleByInternalsVisibleTo) {
          return true;
        } else {
          return accessibleByFamilyAndAssembly;
        }
      }

    case 3:
      {
        return true;
      }

    default:
      {
        return (0, _Util.equals)(access, new _il.ILMemberAccess(6, "Public"));
      }
  }
}

function IsILTypeDefAccessible(amap$$1, m$$1, ad$$3, encTyconRefOpt, tdef) {
  const matchValue$$2 = (0, _il.ILTypeDef$$get_Access)(tdef);

  if (matchValue$$2.tag === 2) {
    const nestedAccess = matchValue$$2.fields[0];

    if (encTyconRefOpt != null) {
      const encTyconRef = encTyconRefOpt;
      return IsILMemberAccessible((0, _import.ImportMap$$get_g)(amap$$1), amap$$1, m$$1, encTyconRef, ad$$3, nestedAccess);
    } else {
      return true;
    }
  } else {
    var $target$$3;

    switch (ad$$3.tag) {
      case 1:
      case 2:
      case 0:
        $target$$3 = 1;
        break;

      default:
        $target$$3 = 0;
    }

    switch ($target$$3) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return (0, _Util.equals)((0, _il.ILTypeDef$$get_Access)(tdef), new _il.ILTypeDefAccess(0, "Public"));
        }
    }
  }
}

function IsTyconAccessibleViaVisibleTo(ad$$4, tcrefOfViewedItem$$1) {
  var $target$$4;

  switch (ad$$4.tag) {
    case 3:
    case 2:
      $target$$4 = 0;
      break;

    case 0:
      $target$$4 = 1;
      break;

    default:
      $target$$4 = 0;
  }

  switch ($target$$4) {
    case 0:
      {
        return false;
      }

    case 1:
      {
        const cpaths$$2 = ad$$4.fields[0];
        const _tcrefViewedFromOption$$1 = ad$$4.fields[1];
        return (0, _tast.canAccessFromOneOf)(cpaths$$2, (0, _tast.EntityRef$$get_CompilationPath)(tcrefOfViewedItem$$1));
      }
  }
}

function IsILTypeInfoAccessible(amap$$2, m$$2, ad$$5, tcrefOfViewedItem$$2) {
  const patternInput = (0, _tast.EntityRef$$get_ILTyconInfo)(tcrefOfViewedItem$$2);
  const tdef$$1 = patternInput.fields[2];
  const scoref = patternInput.fields[0];
  const enc = patternInput.fields[1];

  const check = function check(parentTycon, path) {
    let ilTypeDefAccessible;

    if (parentTycon != null) {
      const parentTycon$$2 = parentTycon[0];
      const parentPath = parentTycon[1];

      if (path.tail != null) {
        const xs$$1 = path.tail;
        const x$$2 = path.head;

        if (IsILTypeDefAccessible(amap$$2, m$$2, ad$$5, parentTycon$$2, x$$2)) {
          const parentILTyRef$$1 = (0, _il.mkRefForNestedILTypeDef)(scoref, parentPath, x$$2);
          const parentTycon$$3 = (0, _import.ImportILTypeRef)(amap$$2, m$$2, parentILTyRef$$1);
          ilTypeDefAccessible = check([parentTycon$$3, (0, _List.append)(parentPath, (0, _Types.L)(x$$2, (0, _Types.L)()))], xs$$1);
        } else {
          ilTypeDefAccessible = false;
        }
      } else {
        ilTypeDefAccessible = true;
      }
    } else {
      if (path.tail != null) {
        if (path.tail.tail == null) {
          ilTypeDefAccessible = IsILTypeDefAccessible(amap$$2, m$$2, ad$$5, null, path.head);
        } else {
          if (IsILTypeDefAccessible(amap$$2, m$$2, ad$$5, null, path.head)) {
            const parentILTyRef = (0, _il.mkRefForNestedILTypeDef)(scoref, (0, _Types.L)(), path.head);
            const parentTycon$$1 = (0, _import.ImportILTypeRef)(amap$$2, m$$2, parentILTyRef);
            ilTypeDefAccessible = check([parentTycon$$1, (0, _Types.L)(path.head, (0, _Types.L)())], path.tail);
          } else {
            ilTypeDefAccessible = false;
          }
        }
      } else {
        ilTypeDefAccessible = true;
      }
    }

    if (ilTypeDefAccessible) {
      return true;
    } else {
      return IsTyconAccessibleViaVisibleTo(ad$$5, tcrefOfViewedItem$$2);
    }
  };

  return check(null, (0, _List.append)(enc, (0, _Types.L)(tdef$$1, (0, _Types.L)())));
}

function IsILTypeAndMemberAccessible(g$$2, amap$$3, m$$3, adType, ad$$6, ty, access$$1) {
  if (IsILTypeInfoAccessible(amap$$3, m$$3, adType, (0, _infos.ILTypeInfo$$get_TyconRefOfRawMetadata)(ty))) {
    return IsILMemberAccessible(g$$2, amap$$3, m$$3, (0, _infos.ILTypeInfo$$get_TyconRefOfRawMetadata)(ty), ad$$6, access$$1);
  } else {
    return false;
  }
}

function IsEntityAccessible(amap$$4, m$$4, ad$$7, tcref) {
  if ((0, _tast.EntityRef$$get_IsILTycon)(tcref)) {
    return IsILTypeInfoAccessible(amap$$4, m$$4, ad$$7, tcref);
  } else {
    return IsAccessible(ad$$7, (0, _tast.EntityRef$$get_Accessibility)(tcref));
  }
}

function CheckTyconAccessible(amap$$5, m$$5, ad$$8, tcref$$1) {
  const res = IsEntityAccessible(amap$$5, m$$5, ad$$8, tcref$$1);

  if (!res) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$typeIsNotAccessible$$Z721C83C5)((0, _tast.EntityRef$$get_DisplayName)(tcref$$1)), m$$5));
  }

  return res;
}

function IsTyconReprAccessible(amap$$6, m$$6, ad$$9, tcref$$2) {
  if (IsEntityAccessible(amap$$6, m$$6, ad$$9, tcref$$2)) {
    return IsAccessible(ad$$9, (0, _tast.EntityRef$$get_TypeReprAccessibility)(tcref$$2));
  } else {
    return false;
  }
}

function CheckTyconReprAccessible(amap$$7, m$$7, ad$$10, tcref$$3) {
  if (CheckTyconAccessible(amap$$7, m$$7, ad$$10, tcref$$3)) {
    const res$$1 = IsAccessible(ad$$10, (0, _tast.EntityRef$$get_TypeReprAccessibility)(tcref$$3));

    if (!res$$1) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$unionCasesAreNotAccessible$$Z721C83C5)((0, _tast.EntityRef$$get_DisplayName)(tcref$$3)), m$$7));
    }

    return res$$1;
  } else {
    return false;
  }
}

function IsTypeAccessible(g$$3, amap$$8, m$$8, ad$$11, ty$$1) {
  if (!(0, _TastOps.isAppTy)(g$$3, ty$$1)) {
    return true;
  } else {
    const patternInput$$1 = (0, _TastOps.destAppTy)(g$$3, ty$$1);

    if (IsEntityAccessible(amap$$8, m$$8, ad$$11, patternInput$$1[0])) {
      return IsTypeInstAccessible(g$$3, amap$$8, m$$8, ad$$11, patternInput$$1[1]);
    } else {
      return false;
    }
  }
}

function IsTypeInstAccessible(g$$4, amap$$9, m$$9, ad$$12, tinst$$1) {
  if (tinst$$1.tail == null) {
    return true;
  } else {
    return (0, _List.forAll)(function (ty$$2) {
      return IsTypeAccessible(g$$4, amap$$9, m$$9, ad$$12, ty$$2);
    }, tinst$$1);
  }
}

function IsProvidedMemberAccessible(amap$$10, m$$10, ad$$13, ty$$3, access$$2) {
  const g$$5 = (0, _import.ImportMap$$get_g)(amap$$10);
  const isTyAccessible = IsTypeAccessible(g$$5, amap$$10, m$$10, ad$$13, ty$$3);

  if (!isTyAccessible) {
    return false;
  } else if (!(0, _TastOps.isAppTy)(g$$5, ty$$3)) {
    return true;
  } else {
    const patternInput$$2 = (0, _TastOps.destAppTy)(g$$5, ty$$3);
    return IsILMemberAccessible(g$$5, amap$$10, m$$10, patternInput$$2[0], ad$$13, access$$2);
  }
}

function ComputeILAccess(isPublic, isFamily, isFamilyOrAssembly, isFamilyAndAssembly) {
  if (isPublic) {
    return new _il.ILMemberAccess(6, "Public");
  } else if (isFamily) {
    return new _il.ILMemberAccess(4, "Family");
  } else if (isFamilyOrAssembly) {
    return new _il.ILMemberAccess(3, "FamilyOrAssembly");
  } else if (isFamilyAndAssembly) {
    return new _il.ILMemberAccess(2, "FamilyAndAssembly");
  } else {
    return new _il.ILMemberAccess(5, "Private");
  }
}

function IsILFieldInfoAccessible(g$$6, amap$$11, m$$11, ad$$14, x$$3) {
  const tinfo = x$$3.fields[0];
  const fd = x$$3.fields[1];
  return IsILTypeAndMemberAccessible(g$$6, amap$$11, m$$11, ad$$14, ad$$14, tinfo, (0, _il.ILFieldDef$$get_Access)(fd));
}

function GetILAccessOfILEventInfo(_arg1) {
  const tinfo$$1 = _arg1.fields[0];
  const edef = _arg1.fields[1];
  return (0, _il.ILMethodDef$$get_Access)((0, _il.resolveILMethodRef)((0, _infos.ILTypeInfo$$get_RawMetadata)(tinfo$$1), (0, _il.ILEventDef$$get_AddMethod)(edef)));
}

function IsILEventInfoAccessible(g$$7, amap$$12, m$$12, ad$$15, einfo) {
  const access$$3 = GetILAccessOfILEventInfo(einfo);
  return IsILTypeAndMemberAccessible(g$$7, amap$$12, m$$12, ad$$15, ad$$15, (0, _infos.ILEventInfo$$get_ILTypeInfo)(einfo), access$$3);
}

function IsILMethInfoAccessible(g$$8, amap$$13, m$$13, adType$$1, ad$$16, ilminfo) {
  if (ilminfo.fields[2] != null) {
    const mdef$$1 = ilminfo.fields[3];
    const declaringTyconRef = ilminfo.fields[2];
    return IsILMemberAccessible(g$$8, amap$$13, m$$13, declaringTyconRef, ad$$16, (0, _il.ILMethodDef$$get_Access)(mdef$$1));
  } else {
    const ty$$4 = ilminfo.fields[1];
    const mdef = ilminfo.fields[3];
    return IsILTypeAndMemberAccessible(g$$8, amap$$13, m$$13, adType$$1, ad$$16, (0, _infos.ILTypeInfo$$$FromType)(g$$8, ty$$4), (0, _il.ILMethodDef$$get_Access)(mdef));
  }
}

function GetILAccessOfILPropInfo(_arg1$$1) {
  const tinfo$$2 = _arg1$$1.fields[0];
  const pdef = _arg1$$1.fields[1];
  const tdef$$2 = (0, _infos.ILTypeInfo$$get_RawMetadata)(tinfo$$2);
  let ilAccess;
  const matchValue$$3 = (0, _il.ILPropertyDef$$get_GetMethod)(pdef);

  if (matchValue$$3 == null) {
    const matchValue$$4 = (0, _il.ILPropertyDef$$get_SetMethod)(pdef);

    if (matchValue$$4 != null) {
      const mref$$1 = matchValue$$4;
      ilAccess = (0, _il.ILMethodDef$$get_Access)((0, _il.resolveILMethodRef)(tdef$$2, mref$$1));
    } else {
      ilAccess = new _il.ILMemberAccess(6, "Public");
    }
  } else {
    const mref = matchValue$$3;
    ilAccess = (0, _il.ILMethodDef$$get_Access)((0, _il.resolveILMethodRef)(tdef$$2, mref));
  }

  return ilAccess;
}

function IsILPropInfoAccessible(g$$9, amap$$14, m$$14, ad$$17, pinfo) {
  const ilAccess$$1 = GetILAccessOfILPropInfo(pinfo);
  return IsILTypeAndMemberAccessible(g$$9, amap$$14, m$$14, ad$$17, ad$$17, (0, _infos.ILPropInfo$$get_ILTypeInfo)(pinfo), ilAccess$$1);
}

function IsValAccessible(ad$$18, vref) {
  return IsAccessible(ad$$18, (0, _tast.ValRef$$get_Accessibility)(vref));
}

function CheckValAccessible(m$$15, ad$$19, vref$$1) {
  if (!IsValAccessible(ad$$19, vref$$1)) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$valueIsNotAccessible$$Z721C83C5)((0, _tast.ValRef$$get_DisplayName)(vref$$1)), m$$15));
  }
}

function IsUnionCaseAccessible(amap$$15, m$$16, ad$$20, ucref) {
  if (IsTyconReprAccessible(amap$$15, m$$16, ad$$20, (0, _tast.UnionCaseRef$$get_TyconRef)(ucref))) {
    return IsAccessible(ad$$20, (0, _tast.UnionCaseRef$$get_UnionCase)(ucref).Accessibility);
  } else {
    return false;
  }
}

function CheckUnionCaseAccessible(amap$$16, m$$17, ad$$21, ucref$$1) {
  if (CheckTyconReprAccessible(amap$$16, m$$17, ad$$21, (0, _tast.UnionCaseRef$$get_TyconRef)(ucref$$1))) {
    const res$$2 = IsAccessible(ad$$21, (0, _tast.UnionCaseRef$$get_UnionCase)(ucref$$1).Accessibility);

    if (!res$$2) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$unionCaseIsNotAccessible$$Z721C83C5)((0, _tast.UnionCaseRef$$get_CaseName)(ucref$$1)), m$$17));
    }

    return res$$2;
  } else {
    return false;
  }
}

function IsRecdFieldAccessible(amap$$17, m$$18, ad$$22, rfref) {
  if (IsTyconReprAccessible(amap$$17, m$$18, ad$$22, (0, _tast.RecdFieldRef$$get_TyconRef)(rfref))) {
    return IsAccessible(ad$$22, (0, _tast.RecdField$$get_Accessibility)((0, _tast.RecdFieldRef$$get_RecdField)(rfref)));
  } else {
    return false;
  }
}

function CheckRecdFieldAccessible(amap$$18, m$$19, ad$$23, rfref$$1) {
  if (CheckTyconReprAccessible(amap$$18, m$$19, ad$$23, (0, _tast.RecdFieldRef$$get_TyconRef)(rfref$$1))) {
    const res$$3 = IsAccessible(ad$$23, (0, _tast.RecdField$$get_Accessibility)((0, _tast.RecdFieldRef$$get_RecdField)(rfref$$1)));

    if (!res$$3) {
      (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$fieldIsNotAccessible$$Z721C83C5)((0, _tast.RecdFieldRef$$get_FieldName)(rfref$$1)), m$$19));
    }

    return res$$3;
  } else {
    return false;
  }
}

function CheckRecdFieldInfoAccessible(amap$$19, m$$20, ad$$24, rfinfo) {
  CheckRecdFieldAccessible(amap$$19, m$$20, ad$$24, (0, _infos.RecdFieldInfo$$get_RecdFieldRef)(rfinfo));
}

function CheckILFieldInfoAccessible(g$$10, amap$$20, m$$21, ad$$25, finfo) {
  if (!IsILFieldInfoAccessible(g$$10, amap$$20, m$$21, ad$$25, finfo)) {
    (0, _ErrorLogger.errorR)(new _ErrorLogger.Error$((0, _FSComp.SR$$$structOrClassFieldIsNotAccessible$$Z721C83C5)((0, _infos.ILFieldInfo$$get_FieldName)(finfo)), m$$21));
  }
}

function IsTypeAndMethInfoAccessible(amap$$21, m$$22, accessDomainTy, ad$$26, _arg1$$2) {
  switch (_arg1$$2.tag) {
    case 0:
      {
        const vref$$2 = _arg1$$2.fields[2];
        return IsValAccessible(ad$$26, vref$$2);
      }

    case 2:
      {
        const ty$$5 = _arg1$$2.fields[1];
        const g$$12 = _arg1$$2.fields[0];
        return IsTypeAccessible(g$$12, amap$$21, m$$22, ad$$26, ty$$5);
      }

    default:
      {
        const x$$4 = _arg1$$2.fields[1];
        const g$$11 = _arg1$$2.fields[0];
        return IsILMethInfoAccessible(g$$11, amap$$21, m$$22, accessDomainTy, ad$$26, x$$4);
      }
  }
}

function IsMethInfoAccessible(amap$$22, m$$23, ad$$27, minfo) {
  return IsTypeAndMethInfoAccessible(amap$$22, m$$23, ad$$27, ad$$27, minfo);
}

function IsPropInfoAccessible(g$$13, amap$$23, m$$24, ad$$28, _arg1$$3) {
  var $target$$5, ilpinfo, vref$$3;

  if (_arg1$$3.tag === 0) {
    if (_arg1$$3.fields[2] != null) {
      $target$$5 = 1;
      vref$$3 = _arg1$$3.fields[2];
    } else if (_arg1$$3.fields[3] != null) {
      $target$$5 = 1;
      vref$$3 = _arg1$$3.fields[3];
    } else {
      $target$$5 = 2;
    }
  } else {
    $target$$5 = 0;
    ilpinfo = _arg1$$3.fields[0];
  }

  switch ($target$$5) {
    case 0:
      {
        return IsILPropInfoAccessible(g$$13, amap$$23, m$$24, ad$$28, ilpinfo);
      }

    case 1:
      {
        return IsValAccessible(ad$$28, vref$$3);
      }

    case 2:
      {
        return false;
      }
  }
}

function IsFieldInfoAccessible(ad$$29, rfref$$2) {
  return IsAccessible(ad$$29, (0, _tast.RecdField$$get_Accessibility)((0, _infos.RecdFieldInfo$$get_RecdField)(rfref$$2)));
}