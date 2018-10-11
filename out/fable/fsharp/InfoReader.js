"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrySelectMemberVal = TrySelectMemberVal;
exports.GetImmediateIntrinsicMethInfosOfTypeAux = GetImmediateIntrinsicMethInfosOfTypeAux;
exports.GetImmediateIntrinsicMethInfosOfType = GetImmediateIntrinsicMethInfosOfType;
exports.PropertyCollector$$$$002Ector$$Z6F07ABE7 = PropertyCollector$$$$002Ector$$Z6F07ABE7;
exports.PropertyCollector$$Collect$$40A26F = PropertyCollector$$Collect$$40A26F;
exports.PropertyCollector$$Close = PropertyCollector$$Close;
exports.GetImmediateIntrinsicPropInfosOfTypeAux = GetImmediateIntrinsicPropInfosOfTypeAux;
exports.GetImmediateIntrinsicPropInfosOfType = GetImmediateIntrinsicPropInfosOfType;
exports.IsIndexerType = IsIndexerType;
exports.InfoReader$$$$002Ector$$Z11454F64 = InfoReader$$$$002Ector$$Z11454F64;
exports.InfoReader$$get_g = InfoReader$$get_g;
exports.InfoReader$$get_amap = InfoReader$$get_amap;
exports.InfoReader$$GetRawIntrinsicMethodSetsOfType$$Z1FA90CF3 = InfoReader$$GetRawIntrinsicMethodSetsOfType$$Z1FA90CF3;
exports.InfoReader$$GetRawIntrinsicPropertySetsOfType$$Z1FA90CF3 = InfoReader$$GetRawIntrinsicPropertySetsOfType$$Z1FA90CF3;
exports.InfoReader$$GetRecordOrClassFieldsOfType$$Z5B2D1E7B = InfoReader$$GetRecordOrClassFieldsOfType$$Z5B2D1E7B;
exports.InfoReader$$GetILFieldInfosOfType$$Z5B2D1E7B = InfoReader$$GetILFieldInfosOfType$$Z5B2D1E7B;
exports.InfoReader$$GetImmediateIntrinsicEventsOfType$$Z5B2D1E7B = InfoReader$$GetImmediateIntrinsicEventsOfType$$Z5B2D1E7B;
exports.InfoReader$$GetEventInfosOfType$$Z5B2D1E7B = InfoReader$$GetEventInfosOfType$$Z5B2D1E7B;
exports.InfoReader$$TryFindRecdOrClassFieldInfoOfType$$ZE7EC41B = InfoReader$$TryFindRecdOrClassFieldInfoOfType$$ZE7EC41B;
exports.InfoReader$$TryFindNamedItemOfType$$42DC0F0 = InfoReader$$TryFindNamedItemOfType$$42DC0F0;
exports.InfoReader$$GetEntireTypeHierachy$$ZF03EB4A = InfoReader$$GetEntireTypeHierachy$$ZF03EB4A;
exports.InfoReader$$GetPrimaryTypeHierachy$$ZF03EB4A = InfoReader$$GetPrimaryTypeHierachy$$ZF03EB4A;
exports.GetIntrinsicConstructorInfosOfTypeAux = GetIntrinsicConstructorInfosOfTypeAux;
exports.GetIntrinsicConstructorInfosOfType = GetIntrinsicConstructorInfosOfType;
exports.ExcludeHiddenOfMethInfos = ExcludeHiddenOfMethInfos;
exports.ExcludeHiddenOfPropInfos = ExcludeHiddenOfPropInfos;
exports.GetIntrinsicMethInfoSetsOfType = GetIntrinsicMethInfoSetsOfType;
exports.GetIntrinsicPropInfoSetsOfType = GetIntrinsicPropInfoSetsOfType;
exports.GetIntrinsicMethInfosOfType = GetIntrinsicMethInfosOfType;
exports.GetIntrinsicPropInfosOfType = GetIntrinsicPropInfosOfType;
exports.TryFindIntrinsicNamedItemOfType = TryFindIntrinsicNamedItemOfType;
exports.TryFindIntrinsicMethInfo = TryFindIntrinsicMethInfo;
exports.TryFindPropInfo = TryFindPropInfo;
exports.GetSigOfFunctionForDelegate = GetSigOfFunctionForDelegate;
exports.TryDestStandardDelegateType = TryDestStandardDelegateType;
exports.IsStandardEventInfo = IsStandardEventInfo;
exports.ArgsTypOfEventInfo = ArgsTypOfEventInfo;
exports.PropTypOfEventInfo = PropTypOfEventInfo;
exports.SigOfFunctionForDelegate = exports.FindMemberFlag = exports.InfoReader = exports.HierarchyItem = exports.PropertyCollector = void 0;

var _tast = require("./tast");

var _TastOps = require("./TastOps");

var _illib = require("../absil/illib");

var _List = require("../fable-core.2.0.3/List");

var _infos = require("./infos");

var _Types = require("../fable-core.2.0.3/Types");

var _il = require("../absil/il");

var _AccessibilityLogic = require("./AccessibilityLogic");

var _Util = require("../fable-core.2.0.3/Util");

var _FSharp = require("../fable-core.2.0.3/FSharp.Collections");

var _Map = require("../fable-core.2.0.3/Map");

var _Seq = require("../fable-core.2.0.3/Seq");

var _range = require("./range");

var _ErrorLogger = require("./ErrorLogger");

var _ast = require("./ast");

var _FSComp = require("../codegen/FSComp");

var _TcGlobals = require("./TcGlobals");

var _AttributeChecking = require("./AttributeChecking");

function SelectImmediateMemberVals(g, optFilter, f, tcref) {
  const chooser = function chooser(vref) {
    var membInfo;
    const matchValue = (0, _tast.ValRef$$get_MemberInfo)(vref);
    var $target$$8, membInfo$$1;

    if (matchValue != null) {
      if (membInfo = matchValue, !(0, _TastOps.ValRefIsExplicitImpl)(g, vref)) {
        $target$$8 = 0;
        membInfo$$1 = matchValue;
      } else {
        $target$$8 = 1;
      }
    } else {
      $target$$8 = 1;
    }

    switch ($target$$8) {
      case 0:
        {
          return f(membInfo$$1, vref);
        }

      case 1:
        {
          return null;
        }
    }
  };

  if (optFilter != null) {
    const nm = optFilter;
    return (0, _List.choose)(chooser, (0, _illib.NameMultiMapModule$$$find)(nm, (0, _tast.EntityRef$$get_MembersOfFSharpTyconByName)(tcref)));
  } else {
    return (0, _illib.NameMultiMapModule$$$chooseRange)(chooser, (0, _tast.EntityRef$$get_MembersOfFSharpTyconByName)(tcref));
  }
}

function checkFilter(optFilter$$1, nm$$1) {
  if (optFilter$$1 != null) {
    const n2 = optFilter$$1;
    return nm$$1 === n2;
  } else {
    return true;
  }
}

function TrySelectMemberVal(g$$1, optFilter$$2, ty, pri, _membInfo, vref$$1) {
  if (checkFilter(optFilter$$2, (0, _tast.ValRef$$get_LogicalName)(vref$$1))) {
    return new _infos.MethInfo(0, "FSMeth", g$$1, ty, vref$$1, pri);
  } else {
    return null;
  }
}

function GetImmediateIntrinsicMethInfosOfTypeAux(optFilter$$3, ad, g$$2, amap, m$$2, origTy, metadataTy) {
  let minfos;

  if ((0, _TastOps.metadataOfTy)(g$$2, metadataTy).tag === 1) {
    if ((0, _TastOps.isAnyTupleTy)(g$$2, metadataTy)) {
      const betterMetadataTy = (0, _TastOps.convertToTypeWithMetadataIfPossible)(g$$2, metadataTy);
      minfos = GetImmediateIntrinsicMethInfosOfTypeAux(optFilter$$3, ad, g$$2, amap, m$$2, origTy, betterMetadataTy);
    } else if ((0, _TastOps.isFunTy)(g$$2, metadataTy)) {
      const betterMetadataTy$$1 = (0, _TastOps.convertToTypeWithMetadataIfPossible)(g$$2, metadataTy);
      minfos = (0, _List.filter)(function predicate(minfo) {
        return !(0, _infos.MethInfo$$get_IsInstance)(minfo);
      }, GetImmediateIntrinsicMethInfosOfTypeAux(optFilter$$3, ad, g$$2, amap, m$$2, origTy, betterMetadataTy$$1));
    } else {
      const matchValue$$2 = (0, _TastOps.tryDestAppTy)(g$$2, metadataTy);

      if (matchValue$$2 != null) {
        const tcref$$1 = matchValue$$2;
        minfos = SelectImmediateMemberVals(g$$2, optFilter$$3, function (_membInfo$$1, vref$$2) {
          return TrySelectMemberVal(g$$2, optFilter$$3, origTy, null, _membInfo$$1, vref$$2);
        }, tcref$$1);
      } else {
        minfos = (0, _Types.L)();
      }
    }
  } else {
    const tinfo = (0, _infos.ILTypeInfo$$$FromType)(g$$2, origTy);
    const mdefs = (0, _il.ILTypeDef$$get_Methods)((0, _infos.ILTypeInfo$$get_RawMetadata)(tinfo));
    let mdefs$$1;

    if (optFilter$$3 != null) {
      const nm$$2 = optFilter$$3;
      mdefs$$1 = (0, _il.ILMethodDefs$$FindByName$$Z721C83C5)(mdefs, nm$$2);
    } else {
      mdefs$$1 = (0, _il.ILMethodDefs$$get_AsList)(mdefs);
    }

    minfos = (0, _List.map)(function mapping(mdef) {
      return (0, _infos.MethInfo$$$CreateILMeth$$Z136523CF)(amap, m$$2, origTy, mdef);
    }, mdefs$$1);
  }

  const minfos$$1 = (0, _List.filter)(function predicate$$1(minfo$$1) {
    return (0, _AccessibilityLogic.IsMethInfoAccessible)(amap, m$$2, ad, minfo$$1);
  }, minfos);
  return minfos$$1;
}

function GetImmediateIntrinsicMethInfosOfType(optFilter$$4, ad$$1, g$$3, amap$$1, m$$3, ty$$1) {
  return GetImmediateIntrinsicMethInfosOfTypeAux(optFilter$$4, ad$$1, g$$3, amap$$1, m$$3, ty$$1, ty$$1);
}

const PropertyCollector = (0, _Types.declare)(function PropertyCollector(g$$4, amap$$2, m$$4, ty$$2, optFilter$$5, ad$$2) {
  const $this$$1 = this;
  $this$$1.g = g$$4;
  $this$$1.amap = amap$$2;
  $this$$1.m = m$$4;
  $this$$1.ty = ty$$2;
  $this$$1.optFilter = optFilter$$5;
  $this$$1.ad = ad$$2;
  const hashIdentity = (0, _FSharp.HashIdentity$$$FromFunctions)(function (pinfo) {
    return (0, _Util.structuralHash)((0, _infos.PropInfo$$get_PropertyName)(pinfo));
  }, function (pinfo1, pinfo2) {
    return ((0, _infos.PropInfo$$get_IsStatic)(pinfo1) === (0, _infos.PropInfo$$get_IsStatic)(pinfo2) ? (0, _infos.PropInfosEquivByNameAndPartialSig)(new _TastOps.Erasure(2, "EraseNone"), $this$$1.g, $this$$1.amap, $this$$1.m, pinfo1, pinfo2) : false) ? (0, _infos.PropInfo$$get_IsDefiniteFSharpOverride)(pinfo1) === (0, _infos.PropInfo$$get_IsDefiniteFSharpOverride)(pinfo2) : false;
  });
  $this$$1.props = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)(hashIdentity));
});
exports.PropertyCollector = PropertyCollector;

function PropertyCollector$$$$002Ector$$Z6F07ABE7(g$$4, amap$$2, m$$4, ty$$2, optFilter$$5, ad$$2) {
  return this != null ? PropertyCollector.call(this, g$$4, amap$$2, m$$4, ty$$2, optFilter$$5, ad$$2) : new PropertyCollector(g$$4, amap$$2, m$$4, ty$$2, optFilter$$5, ad$$2);
}

function PropertyCollector$$Collect$$40A26F(x, membInfo$$2, vref$$3) {
  if (membInfo$$2.MemberFlags.MemberKind.tag === 3) {
    const pinfo$$1 = new _infos.PropInfo(0, "FSProp", x.g, x.ty, vref$$3, null);

    if (checkFilter(x.optFilter, (0, _tast.ValRef$$get_PropertyName)(vref$$3)) ? (0, _AccessibilityLogic.IsPropInfoAccessible)(x.g, x.amap, x.m, x.ad, pinfo$$1) : false) {
      PropertyCollector$$add$$5E1DAF02(x, pinfo$$1);
    }
  } else if (membInfo$$2.MemberFlags.MemberKind.tag === 4) {
    const pinfo$$2 = new _infos.PropInfo(0, "FSProp", x.g, x.ty, null, vref$$3);

    if (checkFilter(x.optFilter, (0, _tast.ValRef$$get_PropertyName)(vref$$3)) ? (0, _AccessibilityLogic.IsPropInfoAccessible)(x.g, x.amap, x.m, x.ad, pinfo$$2) : false) {
      PropertyCollector$$add$$5E1DAF02(x, pinfo$$2);
    }
  }
}

function PropertyCollector$$Close(x$$1) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (matchValue$$4) {
      const activePatternResult37831 = matchValue$$4;
      return (0, _Seq.singleton)(activePatternResult37831[1]);
    }, x$$1.props);
  }));
}

function PropertyCollector$$add$$5E1DAF02(this$, pinfo$$4) {
  const matchValue$$5 = [(0, _Util.tryGetValue)(this$.props, pinfo$$4, null), pinfo$$4];
  var $target$$9, ty$$3, vref1, vref2;

  if (matchValue$$5[0][0]) {
    if (matchValue$$5[0][1].tag === 0) {
      if (matchValue$$5[0][1].fields[2] != null) {
        if (matchValue$$5[1].tag === 0) {
          if (matchValue$$5[1].fields[3] != null) {
            $target$$9 = 0;
            ty$$3 = matchValue$$5[0][1].fields[1];
            vref1 = matchValue$$5[0][1].fields[2];
            vref2 = matchValue$$5[1].fields[3];
          } else if (matchValue$$5[1].fields[2] != null) {
            if (matchValue$$5[0][1].fields[3] != null) {
              $target$$9 = 0;
              ty$$3 = matchValue$$5[0][1].fields[1];
              vref1 = matchValue$$5[1].fields[2];
              vref2 = matchValue$$5[0][1].fields[3];
            } else {
              $target$$9 = 1;
            }
          } else {
            $target$$9 = 1;
          }
        } else {
          $target$$9 = 1;
        }
      } else if (matchValue$$5[0][1].fields[3] != null) {
        if (matchValue$$5[1].tag === 0) {
          if (matchValue$$5[1].fields[2] != null) {
            $target$$9 = 0;
            ty$$3 = matchValue$$5[0][1].fields[1];
            vref1 = matchValue$$5[1].fields[2];
            vref2 = matchValue$$5[0][1].fields[3];
          } else {
            $target$$9 = 1;
          }
        } else {
          $target$$9 = 1;
        }
      } else {
        $target$$9 = 1;
      }
    } else {
      $target$$9 = 1;
    }
  } else {
    $target$$9 = 2;
  }

  switch ($target$$9) {
    case 0:
      {
        const pinfo$$5 = new _infos.PropInfo(0, "FSProp", this$.g, ty$$3, vref1, vref2);
        this$.props.set(pinfo$$5, pinfo$$5);
        break;
      }

    case 2:
      {
        this$.props.set(pinfo$$4, pinfo$$4);
        break;
      }
  }
}

function GetImmediateIntrinsicPropInfosOfTypeAux(optFilter$$6, ad$$3, g$$5, amap$$3, m$$5, origTy$$1, metadataTy$$1) {
  let pinfos;

  if ((0, _TastOps.metadataOfTy)(g$$5, metadataTy$$1).tag === 1) {
    if ((0, _TastOps.isAnyTupleTy)(g$$5, metadataTy$$1) ? true : (0, _TastOps.isFunTy)(g$$5, metadataTy$$1)) {
      const betterMetadataTy$$2 = (0, _TastOps.convertToTypeWithMetadataIfPossible)(g$$5, metadataTy$$1);
      pinfos = GetImmediateIntrinsicPropInfosOfTypeAux(optFilter$$6, ad$$3, g$$5, amap$$3, m$$5, origTy$$1, betterMetadataTy$$2);
    } else {
      const matchValue$$7 = (0, _TastOps.tryDestAppTy)(g$$5, metadataTy$$1);

      if (matchValue$$7 != null) {
        const tcref$$2 = matchValue$$7;
        const propCollector = PropertyCollector$$$$002Ector$$Z6F07ABE7(g$$5, amap$$3, m$$5, origTy$$1, optFilter$$6, ad$$3);
        SelectImmediateMemberVals(g$$5, null, function (membInfo$$3, vref$$4) {
          PropertyCollector$$Collect$$40A26F(propCollector, membInfo$$3, vref$$4);
          return null;
        }, tcref$$2);
        pinfos = PropertyCollector$$Close(propCollector);
      } else {
        pinfos = (0, _Types.L)();
      }
    }
  } else {
    const tinfo$$1 = (0, _infos.ILTypeInfo$$$FromType)(g$$5, origTy$$1);
    const pdefs = (0, _il.ILTypeDef$$get_Properties)((0, _infos.ILTypeInfo$$get_RawMetadata)(tinfo$$1));
    let pdefs$$1;

    if (optFilter$$6 != null) {
      const nm$$3 = optFilter$$6;
      pdefs$$1 = (0, _il.ILPropertyDefs$$LookupByName$$Z721C83C5)(pdefs, nm$$3);
    } else {
      pdefs$$1 = (0, _il.ILPropertyDefs$$get_AsList)(pdefs);
    }

    pinfos = (0, _List.map)(function mapping$$1(pdef) {
      return new _infos.PropInfo(1, "ILProp", new _infos.ILPropInfo(0, "ILPropInfo", tinfo$$1, pdef));
    }, pdefs$$1);
  }

  const pinfos$$1 = (0, _List.filter)(function predicate$$2(_arg1) {
    return (0, _AccessibilityLogic.IsPropInfoAccessible)(g$$5, amap$$3, m$$5, ad$$3, _arg1);
  }, pinfos);
  return pinfos$$1;
}

function GetImmediateIntrinsicPropInfosOfType(optFilter$$7, ad$$4, g$$6, amap$$4, m$$6, ty$$4) {
  return GetImmediateIntrinsicPropInfosOfTypeAux(optFilter$$7, ad$$4, g$$6, amap$$4, m$$6, ty$$4, ty$$4);
}

function IsIndexerType(g$$7, amap$$5, ty$$5) {
  if ((0, _TastOps.isArray1DTy)(g$$7, ty$$5) ? true : (0, _TastOps.isListTy)(g$$7, ty$$5)) {
    return true;
  } else {
    const matchValue$$8 = (0, _TastOps.tryDestAppTy)(g$$7, ty$$5);

    if (matchValue$$8 == null) {
      return false;
    } else {
      const tcref$$3 = matchValue$$8;
      const patternInput = (0, _TastOps.generalizeTyconRef)(tcref$$3);
      const props = GetImmediateIntrinsicPropInfosOfType(null, new _AccessibilityLogic.AccessorDomain(2, "AccessibleFromSomeFSharpCode"), g$$7, amap$$5, _range.range0, patternInput[1]);
      return (0, _List.exists)(function predicate$$3(x$$2) {
        return (0, _infos.PropInfo$$get_PropertyName)(x$$2) === "Item";
      }, props);
    }
  }
}

const HierarchyItem = (0, _Types.declare)(function HierarchyItem(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.HierarchyItem = HierarchyItem;
const InfoReader = (0, _Types.declare)(function InfoReader(g$$8, amap$$6) {
  const $this$$2 = this;
  $this$$2["g@214"] = g$$8;
  $this$$2["amap@214"] = amap$$6;
  const hashFlags1 = {
    GetHashCode(_arg13) {
      return (0, _Util.structuralHash)(_arg13[0]) + (0, _AccessibilityLogic.AccessorDomain$$$CustomGetHashCode$$Z2EC759CB)(_arg13[1]);
    },

    Equals(_arg14, _arg15) {
      return (0, _Util.equals)(_arg14[0], _arg15[0]) ? (0, _AccessibilityLogic.AccessorDomain$$$CustomEquals$$5028E2EC)($this$$2["g@214"], _arg14[1], _arg15[1]) : false;
    }

  };
  const hashFlags2 = {
    GetHashCode(_arg16) {
      return (0, _Util.structuralHash)(_arg16[0]) + (0, _AccessibilityLogic.AccessorDomain$$$CustomGetHashCode$$Z2EC759CB)(_arg16[1]);
    },

    Equals(_arg17, _arg18) {
      return _arg17[0] === _arg18[0] ? (0, _AccessibilityLogic.AccessorDomain$$$CustomEquals$$5028E2EC)($this$$2["g@214"], _arg17[1], _arg18[1]) : false;
    }

  };
  $this$$2.methodInfoCache = InfoReader$$MakeInfoCache($this$$2, function (tupledArg) {
    return InfoReader$$GetIntrinsicMethodSetsUncached$$Z11346973($this$$2, tupledArg[0], tupledArg[1], tupledArg[2]);
  }, InfoReader$$hashFlags0($this$$2));
  $this$$2.propertyInfoCache = InfoReader$$MakeInfoCache($this$$2, function (tupledArg$$1) {
    return InfoReader$$GetIntrinsicPropertySetsUncached$$Z11346973($this$$2, tupledArg$$1[0], tupledArg$$1[1], tupledArg$$1[2]);
  }, InfoReader$$hashFlags0($this$$2));
  $this$$2.recdOrClassFieldInfoCache = InfoReader$$MakeInfoCache($this$$2, function (tupledArg$$2) {
    return InfoReader$$GetIntrinsicRecdOrClassFieldInfosUncached$$Z60A83826($this$$2, tupledArg$$2[0], tupledArg$$2[1], tupledArg$$2[2]);
  }, hashFlags1);
  $this$$2.ilFieldInfoCache = InfoReader$$MakeInfoCache($this$$2, function (tupledArg$$3) {
    return InfoReader$$GetIntrinsicILFieldInfosUncached$$Z4E5747F6($this$$2, tupledArg$$3[0], tupledArg$$3[1], tupledArg$$3[2]);
  }, hashFlags1);
  $this$$2.eventInfoCache = InfoReader$$MakeInfoCache($this$$2, function (tupledArg$$4) {
    return InfoReader$$GetIntrinsicEventInfosUncached$$Z4E5747F6($this$$2, tupledArg$$4[0], tupledArg$$4[1], tupledArg$$4[2]);
  }, hashFlags1);
  $this$$2.namedItemsCache = InfoReader$$MakeInfoCache($this$$2, function (tupledArg$$5) {
    return InfoReader$$GetIntrinsicNamedItemsUncached$$7D33B09F($this$$2, tupledArg$$5[0], tupledArg$$5[1], tupledArg$$5[2]);
  }, hashFlags2);
  $this$$2.entireTypeHierarchyCache = InfoReader$$MakeInfoCache($this$$2, function (tupledArg$$6) {
    return InfoReader$$GetEntireTypeHierachyUncached$$ZF03EB4A($this$$2, tupledArg$$6[0], tupledArg$$6[1], tupledArg$$6[2]);
  }, (0, _FSharp.HashIdentity$$$Structural)());
  $this$$2.primaryTypeHierarchyCache = InfoReader$$MakeInfoCache($this$$2, function (tupledArg$$7) {
    return InfoReader$$GetPrimaryTypeHierachyUncached$$ZF03EB4A($this$$2, tupledArg$$7[0], tupledArg$$7[1], tupledArg$$7[2]);
  }, (0, _FSharp.HashIdentity$$$Structural)());
});
exports.InfoReader = InfoReader;

function InfoReader$$$$002Ector$$Z11454F64(g$$8, amap$$6) {
  return this != null ? InfoReader.call(this, g$$8, amap$$6) : new InfoReader(g$$8, amap$$6);
}

function InfoReader$$get_g(x$$7) {
  return x$$7["g@214"];
}

function InfoReader$$get_amap(x$$8) {
  return x$$8["amap@214"];
}

function InfoReader$$GetRawIntrinsicMethodSetsOfType$$Z1FA90CF3(x$$9, optFilter$$8, ad$$7, allowMultiIntfInst$$2, m$$15, ty$$14) {
  return (0, _illib.MemoizationTable$00602$$Apply$$2B595)(x$$9.methodInfoCache, [[optFilter$$8, ad$$7, allowMultiIntfInst$$2], m$$15, ty$$14]);
}

function InfoReader$$GetRawIntrinsicPropertySetsOfType$$Z1FA90CF3(x$$10, optFilter$$9, ad$$8, allowMultiIntfInst$$3, m$$16, ty$$15) {
  return (0, _illib.MemoizationTable$00602$$Apply$$2B595)(x$$10.propertyInfoCache, [[optFilter$$9, ad$$8, allowMultiIntfInst$$3], m$$16, ty$$15]);
}

function InfoReader$$GetRecordOrClassFieldsOfType$$Z5B2D1E7B(x$$11, optFilter$$10, ad$$9, m$$17, ty$$16) {
  return (0, _illib.MemoizationTable$00602$$Apply$$2B595)(x$$11.recdOrClassFieldInfoCache, [[optFilter$$10, ad$$9], m$$17, ty$$16]);
}

function InfoReader$$GetILFieldInfosOfType$$Z5B2D1E7B(x$$12, optFilter$$11, ad$$10, m$$18, ty$$17) {
  return (0, _illib.MemoizationTable$00602$$Apply$$2B595)(x$$12.ilFieldInfoCache, [[optFilter$$11, ad$$10], m$$18, ty$$17]);
}

function InfoReader$$GetImmediateIntrinsicEventsOfType$$Z5B2D1E7B(x$$13, optFilter$$12, ad$$11, m$$19, ty$$18) {
  return InfoReader$$ComputeImmediateIntrinsicEventsOfType(x$$13, optFilter$$12, ad$$11, m$$19, ty$$18);
}

function InfoReader$$GetEventInfosOfType$$Z5B2D1E7B(x$$14, optFilter$$13, ad$$12, m$$20, ty$$19) {
  return (0, _illib.MemoizationTable$00602$$Apply$$2B595)(x$$14.eventInfoCache, [[optFilter$$13, ad$$12], m$$20, ty$$19]);
}

function InfoReader$$TryFindRecdOrClassFieldInfoOfType$$ZE7EC41B(x$$15, nm$$5, m$$21, ty$$20) {
  const matchValue$$9 = (0, _illib.MemoizationTable$00602$$Apply$$2B595)(x$$15.recdOrClassFieldInfoCache, [[nm$$5, new _AccessibilityLogic.AccessorDomain(3, "AccessibleFromSomewhere")], m$$21, ty$$20]);

  if (matchValue$$9.tail != null) {
    if (matchValue$$9.tail.tail == null) {
      return matchValue$$9.head;
    } else {
      const matchValue$$10 = (0, _TastOps.tryDestAppTy)(x$$15["g@214"], ty$$20);

      if (matchValue$$10 != null) {
        const tcref$$4 = matchValue$$10;
        const matchValue$$11 = (0, _List.filter)(function predicate$$4(rfinfo) {
          return (0, _TastOps.tyconRefEq)(x$$15["g@214"], tcref$$4, (0, _infos.RecdFieldInfo$$get_TyconRef)(rfinfo));
        }, matchValue$$9);

        if (matchValue$$11.tail != null) {
          if (matchValue$$11.tail.tail == null) {
            return matchValue$$11.head;
          } else {
            throw new Error("unexpected multiple fields with same name");
          }
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
}

function InfoReader$$TryFindNamedItemOfType$$42DC0F0(x$$16, nm$$6, ad$$13, m$$22, ty$$21) {
  return (0, _illib.MemoizationTable$00602$$Apply$$2B595)(x$$16.namedItemsCache, [[nm$$6, ad$$13], m$$22, ty$$21]);
}

function InfoReader$$GetEntireTypeHierachy$$ZF03EB4A(x$$17, allowMultiIntfInst$$4, m$$23, ty$$22) {
  return (0, _illib.MemoizationTable$00602$$Apply$$2B595)(x$$17.entireTypeHierarchyCache, [allowMultiIntfInst$$4, m$$23, ty$$22]);
}

function InfoReader$$GetPrimaryTypeHierachy$$ZF03EB4A(x$$18, allowMultiIntfInst$$5, m$$24, ty$$23) {
  return (0, _illib.MemoizationTable$00602$$Apply$$2B595)(x$$18.primaryTypeHierarchyCache, [allowMultiIntfInst$$5, m$$24, ty$$23]);
}

function InfoReader$$GetImmediateIntrinsicILFieldsOfType(this$$$1, optFilter$$14, ad$$14, m$$25, ty$$24) {
  let infos;

  if ((0, _TastOps.metadataOfTy)(this$$$1["g@214"], ty$$24).tag === 1) {
    infos = (0, _Types.L)();
  } else {
    const tinfo$$2 = (0, _infos.ILTypeInfo$$$FromType)(this$$$1["g@214"], ty$$24);
    const fdefs = (0, _il.ILTypeDef$$get_Fields)((0, _infos.ILTypeInfo$$get_RawMetadata)(tinfo$$2));
    let fdefs$$1;

    if (optFilter$$14 != null) {
      const nm$$7 = optFilter$$14;
      fdefs$$1 = (0, _il.ILFieldDefs$$LookupByName$$Z721C83C5)(fdefs, nm$$7);
    } else {
      fdefs$$1 = (0, _il.ILFieldDefs$$get_AsList)(fdefs);
    }

    infos = (0, _List.map)(function mapping$$2(pd) {
      return new _infos.ILFieldInfo(0, "ILFieldInfo", tinfo$$2, pd);
    }, fdefs$$1);
  }

  const infos$$1 = (0, _List.filter)(function predicate$$5(x$$19) {
    return (0, _AccessibilityLogic.IsILFieldInfoAccessible)(this$$$1["g@214"], this$$$1["amap@214"], m$$25, ad$$14, x$$19);
  }, infos);
  return infos$$1;
}

function InfoReader$$ComputeImmediateIntrinsicEventsOfType(this$$$2, optFilter$$15, ad$$15, m$$26, ty$$25) {
  let infos$$2;

  if ((0, _TastOps.metadataOfTy)(this$$$2["g@214"], ty$$25).tag === 1) {
    infos$$2 = (0, _Types.L)();
  } else {
    const tinfo$$3 = (0, _infos.ILTypeInfo$$$FromType)(this$$$2["g@214"], ty$$25);
    const edefs = (0, _il.ILTypeDef$$get_Events)((0, _infos.ILTypeInfo$$get_RawMetadata)(tinfo$$3));
    let edefs$$1;

    if (optFilter$$15 != null) {
      const nm$$8 = optFilter$$15;
      edefs$$1 = (0, _il.ILEventDefs$$LookupByName$$Z721C83C5)(edefs, nm$$8);
    } else {
      edefs$$1 = (0, _il.ILEventDefs$$get_AsList)(edefs);
    }

    infos$$2 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (edef) {
        const ileinfo = new _infos.ILEventInfo(0, "ILEventInfo", tinfo$$3, edef);
        return (0, _AccessibilityLogic.IsILEventInfoAccessible)(this$$$2["g@214"], this$$$2["amap@214"], m$$26, ad$$15, ileinfo) ? (0, _Seq.singleton)(new _infos.EventInfo(1, "ILEvent", ileinfo)) : (0, _Seq.empty)();
      }, edefs$$1);
    }));
  }

  return infos$$2;
}

function InfoReader$$MakeRecdFieldInfo(this$$$3, g$$10, ty$$26, tcref$$5, fspec) {
  return new _infos.RecdFieldInfo(0, "RecdFieldInfo", (0, _TastOps.argsOfAppTy)(g$$10, ty$$26), (0, _tast.EntityRef$$MakeNestedRecdFieldRef$$Z3DF09F14)(tcref$$5, fspec));
}

function InfoReader$$GetImmediateIntrinsicRecdOrClassFieldsOfType(this$$$4, optFilter$$16, _ad, _m, ty$$27) {
  var rfield;
  const matchValue$$14 = (0, _TastOps.tryDestAppTy)(this$$$4["g@214"], ty$$27);

  if (matchValue$$14 != null) {
    const tcref$$6 = matchValue$$14;

    if (optFilter$$16 == null) {
      return (0, _List.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.collect)(function (fdef) {
          return !(0, _tast.RecdField$$get_IsCompilerGenerated)(fdef) ? (0, _Seq.singleton)(InfoReader$$MakeRecdFieldInfo(this$$$4, this$$$4["g@214"], ty$$27, tcref$$6, fdef)) : (0, _Seq.empty)();
        }, (0, _tast.EntityRef$$get_AllFieldsArray)(tcref$$6));
      }));
    } else {
      const nm$$9 = optFilter$$16;
      const matchValue$$15 = (0, _tast.EntityRef$$GetFieldByName$$Z721C83C5)(tcref$$6, nm$$9);
      var $target$$10, rfield$$1;

      if (matchValue$$15 != null) {
        if (rfield = matchValue$$15, !(0, _tast.RecdField$$get_IsCompilerGenerated)(rfield)) {
          $target$$10 = 0;
          rfield$$1 = matchValue$$15;
        } else {
          $target$$10 = 1;
        }
      } else {
        $target$$10 = 1;
      }

      switch ($target$$10) {
        case 0:
          {
            return (0, _Types.L)(InfoReader$$MakeRecdFieldInfo(this$$$4, this$$$4["g@214"], ty$$27, tcref$$6, rfield$$1), (0, _Types.L)());
          }

        case 1:
          {
            return (0, _Types.L)();
          }
      }
    }
  } else {
    return (0, _Types.L)();
  }
}

function InfoReader$$GetIntrinsicMethodSetsUncached$$Z11346973(this$$$5, _arg1$$2, m$$27, ty$$28) {
  return (0, _infos.FoldPrimaryHierarchyOfType)(function (ty$$29, acc) {
    return (0, _Types.L)(GetImmediateIntrinsicMethInfosOfType(_arg1$$2[0], _arg1$$2[1], this$$$5["g@214"], this$$$5["amap@214"], m$$27, ty$$29), acc);
  }, this$$$5["g@214"], this$$$5["amap@214"], m$$27, _arg1$$2[2], ty$$28, (0, _Types.L)());
}

function InfoReader$$GetIntrinsicPropertySetsUncached$$Z11346973(this$$$6, _arg2$$1, m$$28, ty$$30) {
  return (0, _infos.FoldPrimaryHierarchyOfType)(function (ty$$31, acc$$1) {
    return (0, _Types.L)(GetImmediateIntrinsicPropInfosOfType(_arg2$$1[0], _arg2$$1[1], this$$$6["g@214"], this$$$6["amap@214"], m$$28, ty$$31), acc$$1);
  }, this$$$6["g@214"], this$$$6["amap@214"], m$$28, _arg2$$1[2], ty$$30, (0, _Types.L)());
}

function InfoReader$$GetIntrinsicILFieldInfosUncached$$Z4E5747F6(this$$$7, _arg3$$1, m$$29, ty$$32) {
  return (0, _infos.FoldPrimaryHierarchyOfType)(function (ty$$33, acc$$2) {
    return (0, _List.append)(InfoReader$$GetImmediateIntrinsicILFieldsOfType(this$$$7, _arg3$$1[0], _arg3$$1[1], m$$29, ty$$33), acc$$2);
  }, this$$$7["g@214"], this$$$7["amap@214"], m$$29, new _infos.AllowMultiIntfInstantiations(0, "Yes"), ty$$32, (0, _Types.L)());
}

function InfoReader$$GetIntrinsicEventInfosUncached$$Z4E5747F6(this$$$8, _arg4$$1, m$$30, ty$$34) {
  return (0, _infos.FoldPrimaryHierarchyOfType)(function (ty$$35, acc$$3) {
    return (0, _List.append)(InfoReader$$ComputeImmediateIntrinsicEventsOfType(this$$$8, _arg4$$1[0], _arg4$$1[1], m$$30, ty$$35), acc$$3);
  }, this$$$8["g@214"], this$$$8["amap@214"], m$$30, new _infos.AllowMultiIntfInstantiations(0, "Yes"), ty$$34, (0, _Types.L)());
}

function InfoReader$$GetIntrinsicRecdOrClassFieldInfosUncached$$Z60A83826(this$$$9, _arg5$$1, m$$31, ty$$36) {
  return (0, _infos.FoldPrimaryHierarchyOfType)(function (ty$$37, acc$$4) {
    return (0, _List.append)(InfoReader$$GetImmediateIntrinsicRecdOrClassFieldsOfType(this$$$9, _arg5$$1[0], _arg5$$1[1], m$$31, ty$$37), acc$$4);
  }, this$$$9["g@214"], this$$$9["amap@214"], m$$31, new _infos.AllowMultiIntfInstantiations(0, "Yes"), ty$$36, (0, _Types.L)());
}

function InfoReader$$GetEntireTypeHierachyUncached$$ZF03EB4A(this$$$10, allowMultiIntfInst$$8, m$$32, ty$$38) {
  return (0, _infos.FoldEntireHierarchyOfType)(function (ty$$39, acc$$5) {
    return (0, _Types.L)(ty$$39, acc$$5);
  }, this$$$10["g@214"], this$$$10["amap@214"], m$$32, allowMultiIntfInst$$8, ty$$38, (0, _Types.L)());
}

function InfoReader$$GetPrimaryTypeHierachyUncached$$ZF03EB4A(this$$$11, allowMultiIntfInst$$9, m$$33, ty$$40) {
  return (0, _infos.FoldPrimaryHierarchyOfType)(function (ty$$41, acc$$6) {
    return (0, _Types.L)(ty$$41, acc$$6);
  }, this$$$11["g@214"], this$$$11["amap@214"], m$$33, allowMultiIntfInst$$9, ty$$40, (0, _Types.L)());
}

function InfoReader$$GetIntrinsicNamedItemsUncached$$7D33B09F(this$$$12, _arg6$$1, m$$34, ty$$42) {
  if (_arg6$$1[0] === ".ctor") {
    return null;
  } else {
    const optFilter$$22 = _arg6$$1[0];
    return (0, _infos.FoldPrimaryHierarchyOfType)(function (ty$$43, acc$$7) {
      var inheritedPropSets, inheritedMethSets;
      const minfos$$2 = GetImmediateIntrinsicMethInfosOfType(optFilter$$22, _arg6$$1[1], this$$$12["g@214"], this$$$12["amap@214"], m$$34, ty$$43);
      const pinfos$$2 = GetImmediateIntrinsicPropInfosOfType(optFilter$$22, _arg6$$1[1], this$$$12["g@214"], this$$$12["amap@214"], m$$34, ty$$43);
      const finfos = InfoReader$$GetImmediateIntrinsicILFieldsOfType(this$$$12, optFilter$$22, _arg6$$1[1], m$$34, ty$$43);
      const einfos = InfoReader$$ComputeImmediateIntrinsicEventsOfType(this$$$12, optFilter$$22, _arg6$$1[1], m$$34, ty$$43);
      const rfinfos = InfoReader$$GetImmediateIntrinsicRecdOrClassFieldsOfType(this$$$12, optFilter$$22, _arg6$$1[1], m$$34, ty$$43);
      var $target$$11, inheritedMethSets$$1;

      if (acc$$7 != null) {
        if (acc$$7.tag === 0) {
          if (inheritedMethSets = acc$$7.fields[0], !(minfos$$2.tail == null)) {
            $target$$11 = 0;
            inheritedMethSets$$1 = acc$$7.fields[0];
          } else {
            $target$$11 = 1;
          }
        } else {
          $target$$11 = 1;
        }
      } else {
        $target$$11 = 1;
      }

      switch ($target$$11) {
        case 0:
          {
            return new HierarchyItem(0, "MethodItem", (0, _Types.L)(minfos$$2, inheritedMethSets$$1));
          }

        case 1:
          {
            if (!(minfos$$2.tail == null)) {
              return new HierarchyItem(0, "MethodItem", (0, _Types.L)(minfos$$2, (0, _Types.L)()));
            } else {
              var $target$$12, inheritedPropSets$$1;

              if (acc$$7 != null) {
                if (acc$$7.tag === 1) {
                  if (inheritedPropSets = acc$$7.fields[0], !(pinfos$$2.tail == null)) {
                    $target$$12 = 0;
                    inheritedPropSets$$1 = acc$$7.fields[0];
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
                    return new HierarchyItem(1, "PropertyItem", (0, _Types.L)(pinfos$$2, inheritedPropSets$$1));
                  }

                case 1:
                  {
                    if (!(pinfos$$2.tail == null)) {
                      return new HierarchyItem(1, "PropertyItem", (0, _Types.L)(pinfos$$2, (0, _Types.L)()));
                    } else if (!(finfos.tail == null)) {
                      return new HierarchyItem(4, "ILFieldItem", finfos);
                    } else if (!(einfos.tail == null)) {
                      return new HierarchyItem(3, "EventItem", einfos);
                    } else if (!(rfinfos.tail == null)) {
                      var $target$$13, single$$2;

                      if (rfinfos.tail != null) {
                        if (rfinfos.tail.tail == null) {
                          $target$$13 = 0;
                          single$$2 = rfinfos.head;
                        } else {
                          $target$$13 = 1;
                        }
                      } else {
                        $target$$13 = 1;
                      }

                      switch ($target$$13) {
                        case 0:
                          {
                            return new HierarchyItem(2, "RecdFieldItem", single$$2);
                          }

                        case 1:
                          {
                            throw new Error("Unexpected multiple fields with the same name");
                          }
                      }
                    } else {
                      return acc$$7;
                    }
                  }
              }
            }
          }
      }
    }, this$$$12["g@214"], this$$$12["amap@214"], m$$34, new _infos.AllowMultiIntfInstantiations(0, "Yes"), ty$$42, null);
  }
}

function InfoReader$$MakeInfoCache(this$$$13, f$$9, flagsEq$$8) {
  return (0, _illib.MemoizationTable$00602$$$$002Ector$$Z1CDD427E)(f$$9, {
    Equals(_arg7, _arg8) {
      if (flagsEq$$8.Equals(_arg7[0], _arg8[0])) {
        const matchValue$$16 = [(0, _TastOps.stripTyEqns)(this$$$13["g@214"], _arg7[2]), (0, _TastOps.stripTyEqns)(this$$$13["g@214"], _arg8[2])];
        var $target$$17, tcref1, tcref2;

        if (matchValue$$16[0].tag === 1) {
          if (matchValue$$16[0].fields[1].tail == null) {
            if (matchValue$$16[1].tag === 1) {
              if (matchValue$$16[1].fields[1].tail == null) {
                $target$$17 = 0;
                tcref1 = matchValue$$16[0].fields[0];
                tcref2 = matchValue$$16[1].fields[0];
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
              return (0, _TastOps.tyconRefEq)(this$$$13["g@214"], tcref1, tcref2);
            }

          case 1:
            {
              return false;
            }
        }
      } else {
        return false;
      }
    },

    GetHashCode(_arg9) {
      var matchValue$$17;
      return flagsEq$$8.GetHashCode(_arg9[0]) + (matchValue$$17 = (0, _TastOps.stripTyEqns)(this$$$13["g@214"], _arg9[2]), matchValue$$17.tag === 1 ? matchValue$$17.fields[1].tail == null ? (0, _Util.structuralHash)((0, _tast.EntityRef$$get_LogicalName)(matchValue$$17.fields[0])) : 0 : 0);
    }

  }, function (tupledArg$$8) {
    const matchValue$$18 = (0, _TastOps.stripTyEqns)(this$$$13["g@214"], tupledArg$$8[2]);
    var $target$$18, tcref$$8;

    if (matchValue$$18.tag === 1) {
      if (matchValue$$18.fields[1].tail == null) {
        $target$$18 = 0;
        tcref$$8 = matchValue$$18.fields[0];
      } else {
        $target$$18 = 1;
      }
    } else {
      $target$$18 = 1;
    }

    switch ($target$$18) {
      case 0:
        {
          return (0, _tast.EntityRef$$get_TypeContents)(tcref$$8).tcaug_closed;
        }

      case 1:
        {
          return false;
        }
    }
  });
}

function InfoReader$$hashFlags0(this$$$14) {
  return {
    GetHashCode(_arg10) {
      return (0, _Util.structuralHash)(_arg10[0]) + (0, _AccessibilityLogic.AccessorDomain$$$CustomGetHashCode$$Z2EC759CB)(_arg10[1]);
    },

    Equals(_arg11, _arg12) {
      return ((0, _Util.equals)(_arg11[0], _arg12[0]) ? (0, _AccessibilityLogic.AccessorDomain$$$CustomEquals$$5028E2EC)(this$$$14["g@214"], _arg11[1], _arg12[1]) : false) ? (0, _Util.equals)(_arg11[2], _arg12[2]) : false;
    }

  };
}

function GetIntrinsicConstructorInfosOfTypeAux(infoReader, m$$35, origTy$$2, metadataTy$$2) {
  try {
    return function f$$10() {
      const g$$13 = InfoReader$$get_g(infoReader);
      const amap$$8 = InfoReader$$get_amap(infoReader);

      if ((0, _TastOps.metadataOfTy)(g$$13, metadataTy$$2).tag === 1) {
        if ((0, _TastOps.isAnyTupleTy)(g$$13, metadataTy$$2) ? true : (0, _TastOps.isFunTy)(g$$13, metadataTy$$2)) {
          const betterMetadataTy$$3 = (0, _TastOps.convertToTypeWithMetadataIfPossible)(g$$13, metadataTy$$2);
          return GetIntrinsicConstructorInfosOfTypeAux(infoReader, m$$35, origTy$$2, betterMetadataTy$$3);
        } else {
          const matchValue$$20 = (0, _TastOps.tryDestAppTy)(g$$13, metadataTy$$2);

          if (matchValue$$20 != null) {
            const tcref$$9 = matchValue$$20;
            return (0, _List.map)(function mapping$$4(x$$24) {
              return new _infos.MethInfo(0, "FSMeth", g$$13, origTy$$2, x$$24, null);
            }, (0, _List.choose)(function chooser$$1(vref$$5) {
              var membInfo$$4;
              const matchValue$$21 = (0, _tast.ValRef$$get_MemberInfo)(vref$$5);
              var $target$$19, membInfo$$5;

              if (matchValue$$21 != null) {
                if (membInfo$$4 = matchValue$$21, (0, _Util.equals)(membInfo$$4.MemberFlags.MemberKind, new _ast.MemberKind(1, "Constructor"))) {
                  $target$$19 = 0;
                  membInfo$$5 = matchValue$$21;
                } else {
                  $target$$19 = 1;
                }
              } else {
                $target$$19 = 1;
              }

              switch ($target$$19) {
                case 0:
                  {
                    return vref$$5;
                  }

                case 1:
                  {
                    return null;
                  }
              }
            }, (0, _illib.NameMultiMapModule$$$find)(".ctor", (0, _tast.EntityRef$$get_MembersOfFSharpTyconByName)(tcref$$9))));
          } else {
            return (0, _Types.L)();
          }
        }
      } else {
        const tinfo$$4 = (0, _infos.ILTypeInfo$$$FromType)(g$$13, origTy$$2);
        return (0, _List.map)(function mapping$$3(mdef$$1) {
          return (0, _infos.MethInfo$$$CreateILMeth$$Z136523CF)(amap$$8, m$$35, origTy$$2, mdef$$1);
        }, (0, _List.filter)(function predicate$$6(md) {
          return (0, _il.ILMethodDef$$get_IsConstructor)(md);
        }, (0, _il.ILMethodDefs$$FindByName$$Z721C83C5)((0, _il.ILTypeDef$$get_Methods)((0, _infos.ILTypeInfo$$get_RawMetadata)(tinfo$$4)), ".ctor")));
      }
    }();
  } catch (matchValue$$22) {
    if (matchValue$$22 instanceof _ErrorLogger.UnresolvedPathReferenceNoRange) {
      return (0, _Types.L)();
    } else {
      throw matchValue$$22;
    }
  }
}

function GetIntrinsicConstructorInfosOfType(infoReader$$1, m$$37, ty$$46) {
  return GetIntrinsicConstructorInfosOfTypeAux(infoReader$$1, m$$37, ty$$46, ty$$46);
}

const FindMemberFlag = (0, _Types.declare)(function FindMemberFlag(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FindMemberFlag = FindMemberFlag;
const IndexedList$00601 = (0, _Types.declare)(function IndexedList$00601(itemLists, itemsByName) {
  const $this$$3 = this;
  $this$$3.itemLists = itemLists;
  $this$$3.itemsByName = itemsByName;
});

function IndexedList$00601$$$$002Ector$$CDF7BAF(itemLists, itemsByName) {
  return this != null ? IndexedList$00601.call(this, itemLists, itemsByName) : new IndexedList$00601(itemLists, itemsByName);
}

function IndexedList$00601$$get_Items(x$$25) {
  return x$$25.itemLists;
}

function IndexedList$00601$$ItemsWithName$$Z721C83C5(x$$26, nm$$11) {
  return (0, _illib.NameMultiMapModule$$$find)(nm$$11, x$$26.itemsByName);
}

function IndexedList$00601$$AddItems$$Z73AB3D9(x$$27, items, nmf) {
  return IndexedList$00601$$$$002Ector$$CDF7BAF((0, _Types.L)(items, x$$27.itemLists), (0, _List.foldBack)(function (x$$28, acc$$8) {
    return (0, _illib.NameMultiMapModule$$$add)(nmf(x$$28), x$$28, acc$$8);
  }, items, x$$27.itemsByName));
}

function IndexedList$00601$$$get_Empty() {
  return IndexedList$00601$$$$002Ector$$CDF7BAF((0, _Types.L)(), (0, _illib.NameMultiMapModule$$$empty)());
}

function IndexedList$00601$$FilterNewItems(x$$29, keepTest, nmf$$1, itemsToAdd) {
  return (0, _List.filter)(function predicate$$7(item) {
    return (0, _List.forAll)((0, _Util.partialApply)(1, keepTest, [item]), IndexedList$00601$$ItemsWithName$$Z721C83C5(x$$29, nmf$$1(item)));
  }, itemsToAdd);
}

function FilterItemsInSubTypesBasedOnItemsInSuperTypes(nmf$$2, keepTest$$1, itemLists$$1) {
  const loop = function loop(itemLists$$2) {
    if (itemLists$$2.tail != null) {
      const itemsInSuperTypes = itemLists$$2.tail;
      const items$$1 = itemLists$$2.head;
      const ilist = loop(itemsInSuperTypes);
      const itemsToAdd$$1 = IndexedList$00601$$FilterNewItems(ilist, keepTest$$1, nmf$$2, items$$1);
      return IndexedList$00601$$AddItems$$Z73AB3D9(ilist, itemsToAdd$$1, nmf$$2);
    } else {
      return IndexedList$00601$$$get_Empty();
    }
  };

  return IndexedList$00601$$get_Items(loop(itemLists$$1));
}

function FilterItemsInSuperTypesBasedOnItemsInSubTypes(nmf$$3, keepTest$$2, itemLists$$3) {
  const loop$$1 = function loop$$1(itemLists$$4, indexedItemsInSubTypes) {
    loop$$1: while (true) {
      if (itemLists$$4.tail != null) {
        const itemsInSuperTypes$$1 = itemLists$$4.tail;
        const items$$2 = itemLists$$4.head;
        const itemsToAdd$$2 = (0, _List.filter)(function predicate$$8(item$$1) {
          return keepTest$$2(item$$1, IndexedList$00601$$ItemsWithName$$Z721C83C5(indexedItemsInSubTypes, nmf$$3(item$$1)));
        }, items$$2);
        const ilist$$1 = IndexedList$00601$$AddItems$$Z73AB3D9(indexedItemsInSubTypes, itemsToAdd$$2, nmf$$3);
        itemLists$$4 = itemsInSuperTypes$$1;
        indexedItemsInSubTypes = ilist$$1;
        continue loop$$1;
      } else {
        return (0, _List.reverse)(IndexedList$00601$$get_Items(indexedItemsInSubTypes));
      }
    }
  };

  return loop$$1(itemLists$$3, IndexedList$00601$$$get_Empty());
}

function ExcludeItemsInSuperTypesBasedOnEquivTestWithItemsInSubTypes(nmf$$4, equivTest, itemLists$$5) {
  return FilterItemsInSuperTypesBasedOnItemsInSubTypes(nmf$$4, function (item1, items$$3) {
    return !(0, _List.exists)(function predicate$$9(item2) {
      return equivTest(item1, item2);
    }, items$$3);
  }, itemLists$$5);
}

function FilterOverrides(findFlag, isVirt, isNewSlot, isDefiniteOverride, isFinal, equivSigs, nmf$$5, items$$4) {
  const equivVirts = function equivVirts(x$$30, y) {
    if (isVirt(x$$30) ? isVirt(y) : false) {
      return equivSigs(x$$30, y);
    } else {
      return false;
    }
  };

  if (findFlag.tag === 0) {
    const equivNewSlots = function equivNewSlots(x$$31, y$$1) {
      if (isNewSlot(x$$31) ? isNewSlot(y$$1) : false) {
        return equivSigs(x$$31, y$$1);
      } else {
        return false;
      }
    };

    return FilterItemsInSuperTypesBasedOnItemsInSubTypes(nmf$$5, function keepTest$$4(item1$$1, superTypeItems) {
      return !((isNewSlot(item1$$1) ? (0, _List.exists)((0, _Util.partialApply)(1, equivNewSlots, [item1$$1]), superTypeItems) : false) ? (0, _List.exists)(function predicate$$13(item2$$1) {
        if (isDefiniteOverride(item1$$1)) {
          return equivVirts(item1$$1, item2$$1);
        } else {
          return false;
        }
      }, superTypeItems) : false);
    }, FilterItemsInSubTypesBasedOnItemsInSuperTypes(nmf$$5, function keepTest$$3(newItem, priorItem) {
      if (((isVirt(newItem) ? isFinal(newItem) : false) ? true : !isVirt(newItem)) ? true : isNewSlot(newItem)) {
        return true;
      } else {
        return !equivVirts(newItem, priorItem);
      }
    }, (0, _List.map)(function mapping$$6(list$$20) {
      return (0, _List.filter)(function predicate$$11(x$$32) {
        return !isDefiniteOverride(x$$32);
      }, list$$20);
    }, items$$4)));
  } else {
    return ExcludeItemsInSuperTypesBasedOnEquivTestWithItemsInSubTypes(nmf$$5, equivVirts, (0, _List.map)(function mapping$$5(items$$5) {
      const definiteOverrides = (0, _List.filter)(isDefiniteOverride, items$$5);
      return (0, _List.filter)(function predicate$$10(item$$2) {
        if (isDefiniteOverride(item$$2)) {
          return true;
        } else {
          return !(0, _List.exists)((0, _Util.partialApply)(1, equivVirts, [item$$2]), definiteOverrides);
        }
      }, items$$5);
    }, items$$4));
  }
}

function FilterOverridesOfMethInfos(findFlag$$1, g$$14, amap$$9, m$$38, minfos$$3) {
  return FilterOverrides(findFlag$$1, function (minfo$$2) {
    return (0, _infos.MethInfo$$get_IsVirtual)(minfo$$2);
  }, function (minfo$$3) {
    return (0, _infos.MethInfo$$get_IsNewSlot)(minfo$$3);
  }, function (minfo$$4) {
    return (0, _infos.MethInfo$$get_IsDefiniteFSharpOverride)(minfo$$4);
  }, function (minfo$$5) {
    return (0, _infos.MethInfo$$get_IsFinal)(minfo$$5);
  }, function (minfo$$6, minfo2) {
    return (0, _infos.MethInfosEquivByNameAndSig)(new _TastOps.Erasure(2, "EraseNone"), true, g$$14, amap$$9, m$$38, minfo$$6, minfo2);
  }, function (minfo$$7) {
    return (0, _infos.MethInfo$$get_LogicalName)(minfo$$7);
  }, minfos$$3);
}

function FilterOverridesOfPropInfos(findFlag$$2, g$$15, amap$$10, m$$39, props$$1) {
  return FilterOverrides(findFlag$$2, function (pinfo$$6) {
    return (0, _infos.PropInfo$$get_IsVirtualProperty)(pinfo$$6);
  }, function (pinfo$$7) {
    return (0, _infos.PropInfo$$get_IsNewSlot)(pinfo$$7);
  }, function (pinfo$$8) {
    return (0, _infos.PropInfo$$get_IsDefiniteFSharpOverride)(pinfo$$8);
  }, function (_arg1$$4) {
    return false;
  }, function (pinfo$$9, pinfo2$$1) {
    return (0, _infos.PropInfosEquivByNameAndSig)(new _TastOps.Erasure(2, "EraseNone"), g$$15, amap$$10, m$$39, pinfo$$9, pinfo2$$1);
  }, function (pinfo$$10) {
    return (0, _infos.PropInfo$$get_PropertyName)(pinfo$$10);
  }, props$$1);
}

function ExcludeHiddenOfMethInfos(g$$16, amap$$11, m$$40, minfos$$4) {
  return (0, _List.concat)(ExcludeItemsInSuperTypesBasedOnEquivTestWithItemsInSubTypes(function nmf$$6(minfo$$8) {
    return (0, _infos.MethInfo$$get_LogicalName)(minfo$$8);
  }, function equivTest$$1(m1, m2) {
    if (!(0, _TastOps.tyconRefEq)(g$$16, (0, _infos.MethInfo$$get_DeclaringTyconRef)(m1), (0, _infos.MethInfo$$get_DeclaringTyconRef)(m2))) {
      return (0, _infos.MethInfosEquivByNameAndPartialSig)(new _TastOps.Erasure(2, "EraseNone"), true, g$$16, amap$$11, m$$40, m1, m2);
    } else {
      return false;
    }
  }, minfos$$4));
}

function ExcludeHiddenOfPropInfos(g$$17, amap$$12, m$$41, pinfos$$3) {
  return (0, _List.concat)(ExcludeItemsInSuperTypesBasedOnEquivTestWithItemsInSubTypes(function nmf$$7(pinfo$$11) {
    return (0, _infos.PropInfo$$get_PropertyName)(pinfo$$11);
  }, function equivTest$$2(pinfo$$12, pinfo2$$2) {
    return (0, _infos.PropInfosEquivByNameAndPartialSig)(new _TastOps.Erasure(2, "EraseNone"), g$$17, amap$$12, m$$41, pinfo$$12, pinfo2$$2);
  }, pinfos$$3));
}

function GetIntrinsicMethInfoSetsOfType(infoReader$$2, optFilter$$23, ad$$23, allowMultiIntfInst$$10, findFlag$$3, m$$42, ty$$47) {
  return FilterOverridesOfMethInfos(findFlag$$3, InfoReader$$get_g(infoReader$$2), InfoReader$$get_amap(infoReader$$2), m$$42, InfoReader$$GetRawIntrinsicMethodSetsOfType$$Z1FA90CF3(infoReader$$2, optFilter$$23, ad$$23, allowMultiIntfInst$$10, m$$42, ty$$47));
}

function GetIntrinsicPropInfoSetsOfType(infoReader$$3, optFilter$$24, ad$$24, allowMultiIntfInst$$11, findFlag$$4, m$$43, ty$$48) {
  return FilterOverridesOfPropInfos(findFlag$$4, InfoReader$$get_g(infoReader$$3), InfoReader$$get_amap(infoReader$$3), m$$43, InfoReader$$GetRawIntrinsicPropertySetsOfType$$Z1FA90CF3(infoReader$$3, optFilter$$24, ad$$24, allowMultiIntfInst$$11, m$$43, ty$$48));
}

function GetIntrinsicMethInfosOfType(infoReader$$4, optFilter$$25, ad$$25, allowMultiIntfInst$$12, findFlag$$5, m$$44, ty$$49) {
  return (0, _List.concat)(GetIntrinsicMethInfoSetsOfType(infoReader$$4, optFilter$$25, ad$$25, allowMultiIntfInst$$12, findFlag$$5, m$$44, ty$$49));
}

function GetIntrinsicPropInfosOfType(infoReader$$5, optFilter$$26, ad$$26, allowMultiIntfInst$$13, findFlag$$6, m$$45, ty$$50) {
  return (0, _List.concat)(GetIntrinsicPropInfoSetsOfType(infoReader$$5, optFilter$$26, ad$$26, allowMultiIntfInst$$13, findFlag$$6, m$$45, ty$$50));
}

function TryFindIntrinsicNamedItemOfType(infoReader$$6, nm$$12, ad$$27, findFlag$$7, m$$46, ty$$51) {
  const matchValue$$23 = InfoReader$$TryFindNamedItemOfType$$42DC0F0(infoReader$$6, nm$$12, ad$$27, m$$46, ty$$51);

  if (matchValue$$23 == null) {
    return null;
  } else {
    const item$$3 = matchValue$$23;

    switch (item$$3.tag) {
      case 1:
        {
          const psets = item$$3.fields[0];
          return new HierarchyItem(1, "PropertyItem", FilterOverridesOfPropInfos(findFlag$$7, InfoReader$$get_g(infoReader$$6), InfoReader$$get_amap(infoReader$$6), m$$46, psets));
        }

      case 0:
        {
          const msets = item$$3.fields[0];
          return new HierarchyItem(0, "MethodItem", FilterOverridesOfMethInfos(findFlag$$7, InfoReader$$get_g(infoReader$$6), InfoReader$$get_amap(infoReader$$6), m$$46, msets));
        }

      default:
        {
          return item$$3;
        }
    }
  }
}

function TryFindIntrinsicMethInfo(infoReader$$7, m$$47, ad$$28, nm$$13, ty$$52) {
  return GetIntrinsicMethInfosOfType(infoReader$$7, nm$$13, ad$$28, new _infos.AllowMultiIntfInstantiations(0, "Yes"), new FindMemberFlag(0, "IgnoreOverrides"), m$$47, ty$$52);
}

function TryFindPropInfo(infoReader$$8, m$$48, ad$$29, nm$$14, ty$$53) {
  return GetIntrinsicPropInfosOfType(infoReader$$8, nm$$14, ad$$29, new _infos.AllowMultiIntfInstantiations(0, "Yes"), new FindMemberFlag(0, "IgnoreOverrides"), m$$48, ty$$53);
}

const SigOfFunctionForDelegate = (0, _Types.declare)(function SigOfFunctionForDelegate(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.SigOfFunctionForDelegate = SigOfFunctionForDelegate;

function GetSigOfFunctionForDelegate(infoReader$$9, delty, m$$49, ad$$30) {
  const g$$22 = InfoReader$$get_g(infoReader$$9);
  const amap$$17 = InfoReader$$get_amap(infoReader$$9);
  let invokeMethInfo;
  const matchValue$$24 = GetIntrinsicMethInfosOfType(infoReader$$9, "Invoke", ad$$30, new _infos.AllowMultiIntfInstantiations(0, "Yes"), new FindMemberFlag(0, "IgnoreOverrides"), m$$49, delty);

  if (matchValue$$24.tail == null) {
    invokeMethInfo = (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$noInvokeMethodsFound)(), m$$49));
  } else if (matchValue$$24.tail.tail == null) {
    invokeMethInfo = matchValue$$24.head;
  } else {
    (0, _ErrorLogger.warning)(new _ErrorLogger.InternalError((0, _FSComp.SR$$$moreThanOneInvokeMethodFound)(), m$$49));
    invokeMethInfo = matchValue$$24.head;
  }

  const minst = (0, _Types.L)();
  let compiledViewOfDelArgTys;
  const matchValue$$25 = (0, _infos.MethInfo$$GetParamTypes$$Z5D984B3C)(invokeMethInfo, amap$$17, m$$49, minst);
  var $target$$44, args;

  if (matchValue$$25.tail != null) {
    if (matchValue$$25.tail.tail == null) {
      $target$$44 = 0;
      args = matchValue$$25.head;
    } else {
      $target$$44 = 1;
    }
  } else {
    $target$$44 = 1;
  }

  switch ($target$$44) {
    case 0:
      {
        compiledViewOfDelArgTys = args;
        break;
      }

    case 1:
      {
        compiledViewOfDelArgTys = (0, _ErrorLogger.error)(new _ErrorLogger.Error$((0, _FSComp.SR$$$delegatesNotAllowedToHaveCurriedSignatures)(), m$$49));
        break;
      }
  }

  const fsharpViewOfDelArgTys = compiledViewOfDelArgTys.tail == null ? (0, _Types.L)((0, _TcGlobals.TcGlobals$$get_unit_ty)(g$$22), (0, _Types.L)()) : compiledViewOfDelArgTys;
  const delRetTy = (0, _infos.MethInfo$$GetFSharpReturnTy$$Z5D984B3C)(invokeMethInfo, amap$$17, m$$49, minst);
  (0, _ErrorLogger.CommitOperationResult)((0, _AttributeChecking.CheckMethInfoAttributes)(g$$22, m$$49, null, invokeMethInfo));
  const fty = (0, _TastOps.mkIteratedFunTy)(fsharpViewOfDelArgTys, delRetTy);
  return new SigOfFunctionForDelegate(0, "SigOfFunctionForDelegate", invokeMethInfo, compiledViewOfDelArgTys, delRetTy, fty);
}

function TryDestStandardDelegateType(infoReader$$10, m$$50, ad$$31, delTy) {
  var senderTy, argTys;
  const g$$23 = InfoReader$$get_g(infoReader$$10);
  const patternInput$$1 = GetSigOfFunctionForDelegate(infoReader$$10, delTy, m$$50, ad$$31);
  const delRetTy$$1 = patternInput$$1.fields[2];
  const compiledViewOfDelArgTys$$1 = patternInput$$1.fields[1];
  var $target$$45, argTys$$1, senderTy$$1;

  if (compiledViewOfDelArgTys$$1.tail != null) {
    if (senderTy = compiledViewOfDelArgTys$$1.head, (argTys = compiledViewOfDelArgTys$$1.tail, (0, _TastOps.isObjTy)(g$$23, senderTy) ? !(0, _List.exists)(function (arg10$0040) {
      return (0, _TastOps.isByrefTy)(g$$23, arg10$0040);
    }, argTys) : false)) {
      $target$$45 = 0;
      argTys$$1 = compiledViewOfDelArgTys$$1.tail;
      senderTy$$1 = compiledViewOfDelArgTys$$1.head;
    } else {
      $target$$45 = 1;
    }
  } else {
    $target$$45 = 1;
  }

  switch ($target$$45) {
    case 0:
      {
        return [(0, _TastOps.mkRefTupledTy)(g$$23, argTys$$1), delRetTy$$1];
      }

    case 1:
      {
        return null;
      }
  }
}

function IsStandardEventInfo(infoReader$$11, m$$51, ad$$32, einfo) {
  const dty = (0, _infos.EventInfo$$GetDelegateType$$73F6E43C)(einfo, InfoReader$$get_amap(infoReader$$11), m$$51);

  if (TryDestStandardDelegateType(infoReader$$11, m$$51, ad$$32, dty) == null) {
    return false;
  } else {
    return true;
  }
}

function ArgsTypOfEventInfo(infoReader$$12, m$$52, ad$$33, einfo$$1) {
  const amap$$18 = InfoReader$$get_amap(infoReader$$12);
  const dty$$1 = (0, _infos.EventInfo$$GetDelegateType$$73F6E43C)(einfo$$1, amap$$18, m$$52);
  const matchValue$$27 = TryDestStandardDelegateType(infoReader$$12, m$$52, ad$$33, dty$$1);

  if (matchValue$$27 == null) {
    return (0, _ErrorLogger.error)((0, _infos.nonStandardEventError)((0, _infos.EventInfo$$get_EventName)(einfo$$1), m$$52));
  } else {
    const argtys = matchValue$$27[0];
    return argtys;
  }
}

function PropTypOfEventInfo(infoReader$$13, m$$53, ad$$34, einfo$$2) {
  const g$$24 = InfoReader$$get_g(infoReader$$13);
  const amap$$19 = InfoReader$$get_amap(infoReader$$13);
  const delTy$$1 = (0, _infos.EventInfo$$GetDelegateType$$73F6E43C)(einfo$$2, amap$$19, m$$53);
  const argsTy = ArgsTypOfEventInfo(infoReader$$13, m$$53, ad$$34, einfo$$2);
  return (0, _TastOps.mkIEventType)(g$$24, delTy$$1, argsTy);
}