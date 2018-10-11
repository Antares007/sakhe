"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fail = fail;
exports.AttribInfo$$get_TyconRef = AttribInfo$$get_TyconRef;
exports.AttribInfo$$get_ConstructorArguments = AttribInfo$$get_ConstructorArguments;
exports.AttribInfo$$get_NamedArguments = AttribInfo$$get_NamedArguments;
exports.AttribInfosOfIL = AttribInfosOfIL;
exports.AttribInfosOfFS = AttribInfosOfFS;
exports.GetAttribInfosOfEntity = GetAttribInfosOfEntity;
exports.GetAttribInfosOfMethod = GetAttribInfosOfMethod;
exports.GetAttribInfosOfProp = GetAttribInfosOfProp;
exports.GetAttribInfosOfEvent = GetAttribInfosOfEvent;
exports.TryBindTyconRefAttribute = TryBindTyconRefAttribute;
exports.BindMethInfoAttributes = BindMethInfoAttributes;
exports.TryBindMethInfoAttribute = TryBindMethInfoAttribute;
exports.TryFindMethInfoStringAttribute = TryFindMethInfoStringAttribute;
exports.MethInfoHasAttribute = MethInfoHasAttribute;
exports.CheckFSharpAttributes = CheckFSharpAttributes;
exports.CheckILAttributesForUnseen = CheckILAttributesForUnseen;
exports.CheckFSharpAttributesForHidden = CheckFSharpAttributesForHidden;
exports.CheckFSharpAttributesForObsolete = CheckFSharpAttributesForObsolete;
exports.CheckFSharpAttributesForUnseen = CheckFSharpAttributesForUnseen;
exports.CheckPropInfoAttributes = CheckPropInfoAttributes;
exports.CheckILFieldAttributes = CheckILFieldAttributes;
exports.CheckMethInfoAttributes = CheckMethInfoAttributes;
exports.MethInfoIsUnseen = MethInfoIsUnseen;
exports.PropInfoIsUnseen = PropInfoIsUnseen;
exports.CheckEntityAttributes = CheckEntityAttributes;
exports.CheckUnionCaseAttributes = CheckUnionCaseAttributes;
exports.CheckRecdFieldAttributes = CheckRecdFieldAttributes;
exports.CheckValAttributes = CheckValAttributes;
exports.CheckRecdFieldInfoAttributes = CheckRecdFieldInfoAttributes;
exports.IsSecurityAttribute = IsSecurityAttribute;
exports.IsSecurityCriticalAttribute = IsSecurityCriticalAttribute;
exports.AttribInfo = exports.ObsoleteError = exports.ObsoleteWarning = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Array = require("../fable-core.2.0.3/Array");

var _TastOps = require("./TastOps");

var _il = require("../absil/il");

var _infos = require("./infos");

var _TcGlobals = require("./TcGlobals");

var _List = require("../fable-core.2.0.3/List");

var _tast = require("./tast");

var _Option = require("../fable-core.2.0.3/Option");

var _ErrorLogger = require("./ErrorLogger");

var _FSComp = require("../codegen/FSComp");

var _Util = require("../fable-core.2.0.3/Util");

const ObsoleteWarning = (0, _Types.declare)(function ObsoleteWarning(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.ObsoleteWarning = ObsoleteWarning;
const ObsoleteError = (0, _Types.declare)(function ObsoleteError(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.ObsoleteError = ObsoleteError;

function fail() {
  throw new Error("This custom attribute has an argument that can not yet be converted using this API");
}

function evalILAttribElem(e) {
  if (e.tag === 1) {
    return e.fields[0];
  } else if (e.tag === 2) {
    return e.fields[0];
  } else if (e.tag === 3) {
    return e.fields[0];
  } else if (e.tag === 4) {
    return e.fields[0];
  } else if (e.tag === 5) {
    return e.fields[0];
  } else if (e.tag === 6) {
    return e.fields[0];
  } else if (e.tag === 7) {
    return e.fields[0];
  } else if (e.tag === 8) {
    return e.fields[0];
  } else if (e.tag === 9) {
    return e.fields[0];
  } else if (e.tag === 10) {
    return e.fields[0];
  } else if (e.tag === 11) {
    return e.fields[0];
  } else if (e.tag === 12) {
    return e.fields[0];
  } else if (e.tag === 13) {
    return null;
  } else if (e.tag === 16) {
    return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.map)(evalILAttribElem, e.fields[1]);
    }), Array);
  } else if (e.tag === 14) {
    if (e.fields[0] == null) {
      return null;
    } else {
      const _t = e.fields[0];
      return fail();
    }
  } else if (e.tag === 15) {
    if (e.fields[0] == null) {
      return null;
    } else {
      const _t$$1 = e.fields[0];
      return fail();
    }
  } else if (e.fields[0] == null) {
    return null;
  } else {
    const x = e.fields[0];
    return x;
  }
}

function evalFSharpAttribArg(g, e$$1) {
  var $target$$1, c, a$$1, ty;

  if (e$$1.tag === 0) {
    $target$$1 = 0;
    c = e$$1.fields[0];
  } else if (e$$1.tag === 11) {
    if (e$$1.fields[0].tag === 3) {
      $target$$1 = 1;
      a$$1 = e$$1.fields[2];
    } else {
      const activePatternResult37625 = (0, _TastOps.$007CTypeOfExpr$007C_$007C)(g, e$$1);

      if (activePatternResult37625 != null) {
        $target$$1 = 2;
        ty = activePatternResult37625;
      } else {
        $target$$1 = 3;
      }
    }
  } else {
    const activePatternResult37626 = (0, _TastOps.$007CTypeOfExpr$007C_$007C)(g, e$$1);

    if (activePatternResult37626 != null) {
      $target$$1 = 2;
      ty = activePatternResult37626;
    } else {
      $target$$1 = 3;
    }
  }

  switch ($target$$1) {
    case 0:
      {
        switch (c.tag) {
          case 0:
            {
              const b = c.fields[0];
              return b;
            }

          case 1:
            {
              const i$$1 = c.fields[0] | 0;
              return i$$1;
            }

          case 3:
            {
              const i$$2 = c.fields[0] | 0;
              return i$$2;
            }

          case 5:
            {
              const i$$3 = c.fields[0] | 0;
              return i$$3;
            }

          case 7:
            {
              const i$$4 = c.fields[0];
              return i$$4;
            }

          case 2:
            {
              const i$$5 = c.fields[0];
              return i$$5;
            }

          case 4:
            {
              const i$$6 = c.fields[0];
              return i$$6;
            }

          case 6:
            {
              const i$$7 = c.fields[0];
              return i$$7;
            }

          case 8:
            {
              const i$$8 = c.fields[0];
              return i$$8;
            }

          case 11:
            {
              const i$$9 = c.fields[0];
              return i$$9;
            }

          case 12:
            {
              const i$$10 = c.fields[0];
              return i$$10;
            }

          case 13:
            {
              const i$$11 = c.fields[0];
              return i$$11;
            }

          case 17:
            {
              return null;
            }

          case 14:
            {
              const s = c.fields[0];
              return s;
            }

          default:
            {
              return fail();
            }
        }
      }

    case 1:
      {
        return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
          return (0, _Seq.map)(function (i$$12) {
            return evalFSharpAttribArg(g, i$$12);
          }, a$$1);
        }), Array);
      }

    case 2:
      {
        return ty;
      }

    case 3:
      {
        return fail();
      }
  }
}

const AttribInfo = (0, _Types.declare)(function AttribInfo(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AttribInfo = AttribInfo;

function AttribInfo$$get_TyconRef(x$$13) {
  if (x$$13.tag === 1) {
    const scoref = x$$13.fields[2];
    const m = x$$13.fields[4];
    const g$$1 = x$$13.fields[0];
    const amap = x$$13.fields[1];
    const a$$2 = x$$13.fields[3];
    const ty$$1 = (0, _infos.ImportILType)(scoref, amap, m, (0, _Types.L)(), (0, _il.ILMethodSpec$$get_DeclaringType)(a$$2.Method));
    return (0, _TastOps.tcrefOfAppTy)(g$$1, ty$$1);
  } else {
    const tcref = x$$13.fields[1].fields[0];
    const _g = x$$13.fields[0];
    return tcref;
  }
}

function AttribInfo$$get_ConstructorArguments(x$$14) {
  if (x$$14.tag === 1) {
    const scoref$$1 = x$$14.fields[2];
    const m$$1 = x$$14.fields[4];
    const g$$3 = x$$14.fields[0];
    const cattr = x$$14.fields[3];
    const amap$$1 = x$$14.fields[1];
    const patternInput = (0, _il.decodeILAttribData)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$3), cattr);
    return (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (matchValue) {
        var ty$$3, obj$$1;
        return (0, _Seq.singleton)((ty$$3 = (0, _infos.ImportILType)(scoref$$1, amap$$1, m$$1, (0, _Types.L)(), matchValue[0]), (obj$$1 = evalILAttribElem(matchValue[1]), [ty$$3, obj$$1])));
      }, (0, _Seq.zip)((0, _il.ILMethodSpec$$get_FormalArgTypes)(cattr.Method), patternInput[0]));
    }));
  } else {
    const unnamedArgs = x$$14.fields[1].fields[2];
    const g$$2 = x$$14.fields[0];
    return (0, _List.map)(function mapping(_arg1) {
      const origExpr = _arg1.fields[0];
      const evaluatedExpr = _arg1.fields[1];
      const ty$$2 = (0, _TastOps.tyOfExpr)(g$$2, origExpr);
      const obj = evalFSharpAttribArg(g$$2, evaluatedExpr);
      return [ty$$2, obj];
    }, unnamedArgs);
  }
}

function AttribInfo$$get_NamedArguments(x$$15) {
  if (x$$15.tag === 1) {
    const scoref$$2 = x$$15.fields[2];
    const m$$2 = x$$15.fields[4];
    const g$$5 = x$$15.fields[0];
    const cattr$$1 = x$$15.fields[3];
    const amap$$2 = x$$15.fields[1];
    const patternInput$$1 = (0, _il.decodeILAttribData)((0, _TcGlobals.TcGlobals$$get_ilg)(g$$5), cattr$$1);
    return (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (matchValue$$1) {
        var ty$$5, obj$$3, isField$$1;
        return (0, _Seq.singleton)((ty$$5 = (0, _infos.ImportILType)(scoref$$2, amap$$2, m$$2, (0, _Types.L)(), matchValue$$1[1]), (obj$$3 = evalILAttribElem(matchValue$$1[3]), (isField$$1 = !matchValue$$1[2], [ty$$5, matchValue$$1[0], isField$$1, obj$$3]))));
      }, patternInput$$1[1]);
    }));
  } else {
    const namedArgs = x$$15.fields[1].fields[3];
    const g$$4 = x$$15.fields[0];
    return (0, _List.map)(function mapping$$1(_arg2) {
      const origExpr$$1 = _arg2.fields[0][3].fields[0];
      const nm = _arg2.fields[0][0];
      const isField = _arg2.fields[0][2];
      const evaluatedExpr$$1 = _arg2.fields[0][3].fields[1];
      const ty$$4 = (0, _TastOps.tyOfExpr)(g$$4, origExpr$$1);
      const obj$$2 = evalFSharpAttribArg(g$$4, evaluatedExpr$$1);
      return [ty$$4, nm, isField, obj$$2];
    }, namedArgs);
  }
}

function AttribInfosOfIL(g$$6, amap$$3, scoref$$3, m$$3, attribs) {
  return (0, _List.map)(function mapping$$2(a$$3) {
    return new AttribInfo(1, "ILAttribInfo", g$$6, amap$$3, scoref$$3, a$$3, m$$3);
  }, (0, _il.ILAttributes$$get_AsList)(attribs));
}

function AttribInfosOfFS(g$$7, attribs$$1) {
  return (0, _List.map)(function mapping$$3(a$$4) {
    return new AttribInfo(0, "FSAttribInfo", g$$7, a$$4);
  }, attribs$$1);
}

function GetAttribInfosOfEntity(g$$8, amap$$4, m$$4, tcref$$1) {
  const matchValue$$2 = (0, _TastOps.metadataOfTycon)((0, _tast.EntityRef$$get_Deref)(tcref$$1));

  if (matchValue$$2.tag === 1) {
    return (0, _List.map)(function mapping$$4(a$$5) {
      return new AttribInfo(0, "FSAttribInfo", g$$8, a$$5);
    }, (0, _tast.EntityRef$$get_Attribs)(tcref$$1));
  } else {
    const tdef = matchValue$$2.fields[0].fields[2];
    const scoref$$4 = matchValue$$2.fields[0].fields[0];
    return AttribInfosOfIL(g$$8, amap$$4, scoref$$4, m$$4, (0, _il.ILTypeDef$$get_CustomAttrs)(tdef));
  }
}

function GetAttribInfosOfMethod(amap$$5, m$$5, minfo) {
  switch (minfo.tag) {
    case 0:
      {
        const vref = minfo.fields[2];
        const g$$10 = minfo.fields[0];
        return AttribInfosOfFS(g$$10, (0, _tast.ValRef$$get_Attribs)(vref));
      }

    case 2:
      {
        return (0, _Types.L)();
      }

    default:
      {
        const ilminfo = minfo.fields[1];
        const g$$9 = minfo.fields[0];
        return AttribInfosOfIL(g$$9, amap$$5, (0, _infos.ILMethInfo$$get_MetadataScope)(ilminfo), m$$5, (0, _il.ILMethodDef$$get_CustomAttrs)((0, _infos.ILMethInfo$$get_RawMetadata)(ilminfo)));
      }
  }
}

function GetAttribInfosOfProp(amap$$6, m$$6, pinfo) {
  var $target$$2, ilpinfo, g$$12, vref$$1;

  if (pinfo.tag === 0) {
    if (pinfo.fields[2] != null) {
      $target$$2 = 1;
      g$$12 = pinfo.fields[0];
      vref$$1 = pinfo.fields[2];
    } else if (pinfo.fields[3] != null) {
      $target$$2 = 1;
      g$$12 = pinfo.fields[0];
      vref$$1 = pinfo.fields[3];
    } else {
      $target$$2 = 2;
    }
  } else {
    $target$$2 = 0;
    ilpinfo = pinfo.fields[0];
  }

  switch ($target$$2) {
    case 0:
      {
        return AttribInfosOfIL((0, _infos.ILPropInfo$$get_TcGlobals)(ilpinfo), amap$$6, (0, _infos.ILTypeInfo$$get_ILScopeRef)((0, _infos.ILPropInfo$$get_ILTypeInfo)(ilpinfo)), m$$6, (0, _il.ILPropertyDef$$get_CustomAttrs)((0, _infos.ILPropInfo$$get_RawMetadata)(ilpinfo)));
      }

    case 1:
      {
        return AttribInfosOfFS(g$$12, (0, _tast.ValRef$$get_Attribs)(vref$$1));
      }

    case 2:
      {
        throw new Error("GetAttribInfosOfProp: unreachable");
      }
  }
}

function GetAttribInfosOfEvent(amap$$7, m$$7, einfo) {
  if (einfo.tag === 0) {
    const pi = einfo.fields[1];
    const _vref2 = einfo.fields[3];
    const _vref1 = einfo.fields[2];
    return GetAttribInfosOfProp(amap$$7, m$$7, pi);
  } else {
    const ileinfo = einfo.fields[0];
    return AttribInfosOfIL((0, _infos.EventInfo$$get_TcGlobals)(einfo), amap$$7, (0, _infos.ILTypeInfo$$get_ILScopeRef)((0, _infos.ILEventInfo$$get_ILTypeInfo)(ileinfo)), m$$7, (0, _il.ILEventDef$$get_CustomAttrs)((0, _infos.ILEventInfo$$get_RawMetadata)(ileinfo)));
  }
}

function TryBindTyconRefAttribute(g$$14, m$$8, _arg1$$1, tcref$$2, f1, f2, f3) {
  const args = _arg1$$1;
  const atref = args.fields[0];
  m$$8;
  f3;
  const matchValue$$3 = (0, _TastOps.metadataOfTycon)((0, _tast.EntityRef$$get_Deref)(tcref$$2));

  if (matchValue$$3.tag === 1) {
    const matchValue$$5 = (0, _TastOps.TryFindFSharpAttribute)(g$$14, args, (0, _tast.EntityRef$$get_Attribs)(tcref$$2));

    if (matchValue$$5 != null) {
      const attr$$1 = matchValue$$5;
      return f2(attr$$1);
    } else {
      return null;
    }
  } else {
    const tdef$$1 = matchValue$$3.fields[0].fields[2];
    const matchValue$$4 = (0, _TastOps.TryDecodeILAttribute)(g$$14, atref, (0, _il.ILTypeDef$$get_CustomAttrs)(tdef$$1));

    if (matchValue$$4 != null) {
      const attr = matchValue$$4;
      return f1(attr);
    } else {
      return null;
    }
  }
}

function BindMethInfoAttributes(m$$9, minfo$$1, f1$$1, f2$$1, f3$$1) {
  m$$9;
  f3$$1;

  switch (minfo$$1.tag) {
    case 0:
      {
        const vref$$2 = minfo$$1.fields[2];
        return f2$$1((0, _tast.ValRef$$get_Attribs)(vref$$2));
      }

    case 2:
      {
        return f2$$1((0, _Types.L)());
      }

    default:
      {
        const x$$16 = minfo$$1.fields[1];
        return f1$$1((0, _il.ILMethodDef$$get_CustomAttrs)((0, _infos.ILMethInfo$$get_RawMetadata)(x$$16)));
      }
  }
}

function TryBindMethInfoAttribute(g$$15, m$$10, _arg1$$2, minfo$$2, f1$$2, f2$$2, f3$$2) {
  const attribSpec = _arg1$$2;
  const atref$$1 = attribSpec.fields[0];
  f3$$2;
  return BindMethInfoAttributes(m$$10, minfo$$2, function (ilAttribs) {
    return (0, _Option.defaultArg)((0, _TastOps.TryDecodeILAttribute)(g$$15, atref$$1, ilAttribs), null, f1$$2);
  }, function (fsAttribs) {
    return (0, _Option.defaultArg)((0, _TastOps.TryFindFSharpAttribute)(g$$15, attribSpec, fsAttribs), null, f2$$2);
  }, function (_provAttribs) {
    return null;
  });
}

function TryFindMethInfoStringAttribute(g$$16, m$$11, attribSpec$$1, minfo$$3) {
  return TryBindMethInfoAttribute(g$$16, m$$11, attribSpec$$1, minfo$$3, function (_arg1$$3) {
    var msg;
    return _arg1$$3[0].tail != null ? _arg1$$3[0].head.tag === 0 ? _arg1$$3[0].head.fields[0] != null ? _arg1$$3[0].tail.tail == null ? (msg = _arg1$$3[0].head.fields[0], msg) : null : null : null : null;
  }, function (_arg2$$1) {
    var activePatternResult37690, msg$$1;
    return _arg2$$1.fields[2].tail != null ? (activePatternResult37690 = (0, _TastOps.$007CAttribStringArg$007C_$007C)(_arg2$$1.fields[2].head), activePatternResult37690 != null ? _arg2$$1.fields[2].tail.tail == null ? (msg$$1 = activePatternResult37690, msg$$1) : null : null) : null;
  }, function (_arg3) {
    var msg$$2;
    return _arg3[0].tail != null ? _arg3[0].head != null ? typeof _arg3[0].head === "string" ? _arg3[0].tail.tail == null ? (msg$$2 = _arg3[0].head, msg$$2) : null : null : null : null;
  });
}

function MethInfoHasAttribute(g$$17, m$$12, attribSpec$$2, minfo$$4) {
  return TryBindMethInfoAttribute(g$$17, m$$12, attribSpec$$2, minfo$$4, function (_arg1$$4) {
    return (0, _Option.some)(null);
  }, function (_arg2$$2) {
    return (0, _Option.some)(null);
  }, function (_arg3$$1) {
    return (0, _Option.some)(null);
  }) != null;
}

function CheckILAttributes(g$$18, isByrefLikeTyconRef, cattrs, m$$13) {
  var msg$$5, isError, msg$$3;
  const tref = (0, _TcGlobals.TcGlobals$$get_attrib_SystemObsolete)(g$$18).fields[0];
  const matchValue$$6 = (0, _TastOps.TryDecodeILAttribute)(g$$18, tref, cattrs);
  var $target$$22, msg$$4;

  if (matchValue$$6 != null) {
    if (matchValue$$6[0].tail != null) {
      if (matchValue$$6[0].head.tag === 0) {
        if (matchValue$$6[0].head.fields[0] != null) {
          if (matchValue$$6[0].tail.tail == null) {
            if (msg$$3 = matchValue$$6[0].head.fields[0], !isByrefLikeTyconRef) {
              $target$$22 = 0;
              msg$$4 = matchValue$$6[0].head.fields[0];
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
    } else {
      $target$$22 = 1;
    }
  } else {
    $target$$22 = 1;
  }

  switch ($target$$22) {
    case 0:
      {
        return (0, _ErrorLogger.WarnD)(new ObsoleteWarning(msg$$4, m$$13));
      }

    case 1:
      {
        var $target$$23, isError$$1, msg$$6;

        if (matchValue$$6 != null) {
          if (matchValue$$6[0].tail != null) {
            if (matchValue$$6[0].head.tag === 0) {
              if (matchValue$$6[0].head.fields[0] != null) {
                if (matchValue$$6[0].tail.tail != null) {
                  if (matchValue$$6[0].tail.head.tag === 1) {
                    if (matchValue$$6[0].tail.tail.tail == null) {
                      if (msg$$5 = matchValue$$6[0].head.fields[0], (isError = matchValue$$6[0].tail.head.fields[0], !isByrefLikeTyconRef)) {
                        $target$$23 = 0;
                        isError$$1 = matchValue$$6[0].tail.head.fields[0];
                        msg$$6 = matchValue$$6[0].head.fields[0];
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
              if (isError$$1) {
                return (0, _ErrorLogger.ErrorD)(new ObsoleteError(msg$$6, m$$13));
              } else {
                return (0, _ErrorLogger.WarnD)(new ObsoleteWarning(msg$$6, m$$13));
              }
            }

          case 1:
            {
              var $target$$24;

              if (matchValue$$6 != null) {
                if (matchValue$$6[0].tail != null) {
                  if (matchValue$$6[0].head.tag === 0) {
                    if (matchValue$$6[0].head.fields[0] == null) {
                      if (matchValue$$6[0].tail.tail == null) {
                        if (!isByrefLikeTyconRef) {
                          $target$$24 = 0;
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
                    return (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$13));
                  }

                case 1:
                  {
                    var $target$$25;

                    if (matchValue$$6 != null) {
                      if (!isByrefLikeTyconRef) {
                        $target$$25 = 0;
                      } else {
                        $target$$25 = 1;
                      }
                    } else {
                      $target$$25 = 1;
                    }

                    switch ($target$$25) {
                      case 0:
                        {
                          return (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$13));
                        }

                      case 1:
                        {
                          return _ErrorLogger.CompleteD;
                        }
                    }
                  }
              }
            }
        }
      }
  }
}

function CheckFSharpAttributes(g$$19, attribs$$8, m$$14) {
  var matchValue$$7, activePatternResult37712, s$$1, activePatternResult37710, activePatternResult37711, s$$2, isError$$2;

  if (attribs$$8.tail == null) {
    return _ErrorLogger.CompleteD;
  } else {
    return (0, _ErrorLogger.op_PlusPlus)((0, _ErrorLogger.op_PlusPlus)((0, _ErrorLogger.op_PlusPlus)((matchValue$$7 = (0, _TastOps.TryFindFSharpAttribute)(g$$19, (0, _TcGlobals.TcGlobals$$get_attrib_SystemObsolete)(g$$19), attribs$$8), matchValue$$7 != null ? matchValue$$7.fields[2].tail != null ? (activePatternResult37712 = (0, _TastOps.$007CAttribStringArg$007C_$007C)(matchValue$$7.fields[2].head), activePatternResult37712 != null ? matchValue$$7.fields[2].tail.tail == null ? (s$$1 = activePatternResult37712, (0, _ErrorLogger.WarnD)(new ObsoleteWarning(s$$1, m$$14))) : matchValue$$7 != null ? matchValue$$7.fields[2].tail != null ? (activePatternResult37710 = (0, _TastOps.$007CAttribStringArg$007C_$007C)(matchValue$$7.fields[2].head), activePatternResult37710 != null ? matchValue$$7.fields[2].tail.tail != null ? (activePatternResult37711 = (0, _TastOps.$007CAttribBoolArg$007C_$007C)(matchValue$$7.fields[2].tail.head), activePatternResult37711 != null ? matchValue$$7.fields[2].tail.tail.tail == null ? (s$$2 = activePatternResult37710, isError$$2 = activePatternResult37711, isError$$2 ? (0, _ErrorLogger.ErrorD)(new ObsoleteError(s$$2, m$$14)) : (0, _ErrorLogger.WarnD)(new ObsoleteWarning(s$$2, m$$14))) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14))) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14))) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 != null ? matchValue$$7.fields[2].tail != null ? (activePatternResult37710 = (0, _TastOps.$007CAttribStringArg$007C_$007C)(matchValue$$7.fields[2].head), activePatternResult37710 != null ? matchValue$$7.fields[2].tail.tail != null ? (activePatternResult37711 = (0, _TastOps.$007CAttribBoolArg$007C_$007C)(matchValue$$7.fields[2].tail.head), activePatternResult37711 != null ? matchValue$$7.fields[2].tail.tail.tail == null ? (s$$2 = activePatternResult37710, isError$$2 = activePatternResult37711, isError$$2 ? (0, _ErrorLogger.ErrorD)(new ObsoleteError(s$$2, m$$14)) : (0, _ErrorLogger.WarnD)(new ObsoleteWarning(s$$2, m$$14))) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14))) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14))) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14))) : matchValue$$7 != null ? matchValue$$7.fields[2].tail != null ? (activePatternResult37710 = (0, _TastOps.$007CAttribStringArg$007C_$007C)(matchValue$$7.fields[2].head), activePatternResult37710 != null ? matchValue$$7.fields[2].tail.tail != null ? (activePatternResult37711 = (0, _TastOps.$007CAttribBoolArg$007C_$007C)(matchValue$$7.fields[2].tail.head), activePatternResult37711 != null ? matchValue$$7.fields[2].tail.tail.tail == null ? (s$$2 = activePatternResult37710, isError$$2 = activePatternResult37711, isError$$2 ? (0, _ErrorLogger.ErrorD)(new ObsoleteError(s$$2, m$$14)) : (0, _ErrorLogger.WarnD)(new ObsoleteWarning(s$$2, m$$14))) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14))) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14))) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 != null ? matchValue$$7.fields[2].tail != null ? (activePatternResult37710 = (0, _TastOps.$007CAttribStringArg$007C_$007C)(matchValue$$7.fields[2].head), activePatternResult37710 != null ? matchValue$$7.fields[2].tail.tail != null ? (activePatternResult37711 = (0, _TastOps.$007CAttribBoolArg$007C_$007C)(matchValue$$7.fields[2].tail.head), activePatternResult37711 != null ? matchValue$$7.fields[2].tail.tail.tail == null ? (s$$2 = activePatternResult37710, isError$$2 = activePatternResult37711, isError$$2 ? (0, _ErrorLogger.ErrorD)(new ObsoleteError(s$$2, m$$14)) : (0, _ErrorLogger.WarnD)(new ObsoleteWarning(s$$2, m$$14))) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14))) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14))) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14)) : matchValue$$7 == null ? _ErrorLogger.CompleteD : (0, _ErrorLogger.WarnD)(new ObsoleteWarning("", m$$14))), function () {
      var activePatternResult37714, activePatternResult37715, v;
      const matchValue$$8 = (0, _TastOps.TryFindFSharpAttribute)(g$$19, (0, _TcGlobals.TcGlobals$$get_attrib_CompilerMessageAttribute)(g$$19), attribs$$8);
      var $target$$26, n, namedArgs$$2, s$$3;

      if (matchValue$$8 != null) {
        if (matchValue$$8.fields[2].tail != null) {
          const activePatternResult37716 = (0, _TastOps.$007CAttribStringArg$007C_$007C)(matchValue$$8.fields[2].head);

          if (activePatternResult37716 != null) {
            if (matchValue$$8.fields[2].tail.tail != null) {
              const activePatternResult37717 = (0, _TastOps.$007CAttribInt32Arg$007C_$007C)(matchValue$$8.fields[2].tail.head);

              if (activePatternResult37717 != null) {
                if (matchValue$$8.fields[2].tail.tail.tail == null) {
                  $target$$26 = 0;
                  n = activePatternResult37717;
                  namedArgs$$2 = matchValue$$8.fields[3];
                  s$$3 = activePatternResult37716;
                } else {
                  $target$$26 = 1;
                }
              } else {
                $target$$26 = 1;
              }
            } else {
              $target$$26 = 1;
            }
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
            const msg$$7 = new _ErrorLogger.UserCompilerMessage(s$$3, n, m$$14);
            const isError$$3 = (activePatternResult37714 = (0, _TastOps.$007CExtractAttribNamedArg$007C_$007C)("IsError", namedArgs$$2), activePatternResult37714 != null ? (activePatternResult37715 = (0, _TastOps.$007CAttribBoolArg$007C_$007C)(activePatternResult37714), activePatternResult37715 != null ? (v = activePatternResult37715, v) : false) : false);
            return (isError$$3 ? !(0, _TcGlobals.TcGlobals$$get_compilingFslib)(g$$19) ? true : n !== 1204 : false) ? (0, _ErrorLogger.ErrorD)(msg$$7) : (0, _ErrorLogger.WarnD)(msg$$7);
          }

        case 1:
          {
            return _ErrorLogger.CompleteD;
          }
      }
    }), function () {
      const matchValue$$9 = (0, _TastOps.TryFindFSharpAttribute)(g$$19, (0, _TcGlobals.TcGlobals$$get_attrib_ExperimentalAttribute)(g$$19), attribs$$8);
      var $target$$27, s$$4;

      if (matchValue$$9 != null) {
        if (matchValue$$9.fields[2].tail != null) {
          const activePatternResult37719 = (0, _TastOps.$007CAttribStringArg$007C_$007C)(matchValue$$9.fields[2].head);

          if (activePatternResult37719 != null) {
            if (matchValue$$9.fields[2].tail.tail == null) {
              $target$$27 = 0;
              s$$4 = activePatternResult37719;
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
            return (0, _ErrorLogger.WarnD)(new _ErrorLogger.Experimental(s$$4, m$$14));
          }

        case 1:
          {
            return matchValue$$9 != null ? (0, _ErrorLogger.WarnD)(new _ErrorLogger.Experimental((0, _FSComp.SR$$$experimentalConstruct)(), m$$14)) : _ErrorLogger.CompleteD;
          }
      }
    }), function () {
      return (0, _TastOps.TryFindFSharpAttribute)(g$$19, (0, _TcGlobals.TcGlobals$$get_attrib_UnverifiableAttribute)(g$$19), attribs$$8) != null ? (0, _ErrorLogger.WarnD)(new _ErrorLogger.PossibleUnverifiableCode(m$$14)) : _ErrorLogger.CompleteD;
    });
  }
}

function CheckILAttributesForUnseen(g$$20, cattrs$$1, _m) {
  const tref$$1 = (0, _TcGlobals.TcGlobals$$get_attrib_SystemObsolete)(g$$20).fields[0];
  return (0, _TastOps.TryDecodeILAttribute)(g$$20, tref$$1, cattrs$$1) != null;
}

function CheckFSharpAttributesForHidden(g$$21, attribs$$9) {
  var matchValue$$11, activePatternResult37731, activePatternResult37732, activePatternResult37733, v$$1, messageNumber;

  if (!(attribs$$9.tail == null) ? (matchValue$$11 = (0, _TastOps.TryFindFSharpAttribute)(g$$21, (0, _TcGlobals.TcGlobals$$get_attrib_CompilerMessageAttribute)(g$$21), attribs$$9), matchValue$$11 != null ? matchValue$$11.fields[2].tail != null ? (0, _TastOps.$007CAttribStringArg$007C_$007C)(matchValue$$11.fields[2].head) != null ? matchValue$$11.fields[2].tail.tail != null ? (activePatternResult37731 = (0, _TastOps.$007CAttribInt32Arg$007C_$007C)(matchValue$$11.fields[2].tail.head), activePatternResult37731 != null ? matchValue$$11.fields[2].tail.tail.tail == null ? (activePatternResult37732 = (0, _TastOps.$007CExtractAttribNamedArg$007C_$007C)("IsHidden", matchValue$$11.fields[3]), activePatternResult37732 != null ? (activePatternResult37733 = (0, _TastOps.$007CAttribBoolArg$007C_$007C)(activePatternResult37732), activePatternResult37733 != null ? (v$$1 = activePatternResult37733, messageNumber = activePatternResult37731 | 0, v$$1 ? !(messageNumber === 62 ? (0, _TcGlobals.TcGlobals$$get_mlCompatibility)(g$$21) : false) : false) : false) : false) : false : false) : false : false : false : false) : false) {
    return true;
  } else {
    const matchValue$$12 = (0, _TastOps.TryFindFSharpAttribute)(g$$21, (0, _TcGlobals.TcGlobals$$get_attrib_ComponentModelEditorBrowsableAttribute)(g$$21), attribs$$9);
    var $target$$28, state;

    if (matchValue$$12 != null) {
      if (matchValue$$12.fields[2].tail != null) {
        const activePatternResult37734 = (0, _TastOps.$007CAttribInt32Arg$007C_$007C)(matchValue$$12.fields[2].head);

        if (activePatternResult37734 != null) {
          if (matchValue$$12.fields[2].tail.tail == null) {
            $target$$28 = 0;
            state = activePatternResult37734;
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
          return state === 1;
        }

      case 1:
        {
          return false;
        }
    }
  }
}

function CheckFSharpAttributesForObsolete(g$$22, attribs$$10) {
  if (!(attribs$$10.tail == null)) {
    return (0, _TastOps.HasFSharpAttribute)(g$$22, (0, _TcGlobals.TcGlobals$$get_attrib_SystemObsolete)(g$$22), attribs$$10);
  } else {
    return false;
  }
}

function CheckFSharpAttributesForUnseen(g$$23, attribs$$11, _m$$1) {
  if (!(attribs$$11.tail == null)) {
    if (CheckFSharpAttributesForObsolete(g$$23, attribs$$11)) {
      return true;
    } else {
      return CheckFSharpAttributesForHidden(g$$23, attribs$$11);
    }
  } else {
    return false;
  }
}

function CheckPropInfoAttributes(pinfo$$1, m$$15) {
  var $target$$29, pdef, g$$24, vref$$3;

  if (pinfo$$1.tag === 0) {
    if (pinfo$$1.fields[2] != null) {
      $target$$29 = 1;
      g$$24 = pinfo$$1.fields[0];
      vref$$3 = pinfo$$1.fields[2];
    } else if (pinfo$$1.fields[3] != null) {
      $target$$29 = 1;
      g$$24 = pinfo$$1.fields[0];
      vref$$3 = pinfo$$1.fields[3];
    } else {
      $target$$29 = 2;
    }
  } else {
    $target$$29 = 0;
    pdef = pinfo$$1.fields[0].fields[1];
  }

  switch ($target$$29) {
    case 0:
      {
        return CheckILAttributes((0, _infos.PropInfo$$get_TcGlobals)(pinfo$$1), false, (0, _il.ILPropertyDef$$get_CustomAttrs)(pdef), m$$15);
      }

    case 1:
      {
        return CheckFSharpAttributes(g$$24, (0, _tast.ValRef$$get_Attribs)(vref$$3), m$$15);
      }

    case 2:
      {
        throw new Error("CheckPropInfoAttributes: unreachable");
      }
  }
}

function CheckILFieldAttributes(g$$25, finfo, m$$16) {
  const pd = finfo.fields[1];
  (0, _ErrorLogger.CommitOperationResult)(CheckILAttributes(g$$25, false, (0, _il.ILFieldDef$$get_CustomAttrs)(pd), m$$16));
}

function CheckMethInfoAttributes(g$$26, m$$17, tyargsOpt, minfo$$5) {
  const search = BindMethInfoAttributes(m$$17, minfo$$5, function (ilAttribs$$1) {
    return CheckILAttributes(g$$26, false, ilAttribs$$1, m$$17);
  }, function (fsAttribs$$1) {
    const res$$1 = (0, _ErrorLogger.op_PlusPlus)(CheckFSharpAttributes(g$$26, fsAttribs$$1, m$$17), function () {
      return (tyargsOpt == null ? (0, _TastOps.HasFSharpAttribute)(g$$26, (0, _TcGlobals.TcGlobals$$get_attrib_RequiresExplicitTypeArgumentsAttribute)(g$$26), fsAttribs$$1) : false) ? (0, _ErrorLogger.ErrorD)(new _ErrorLogger.Error$((0, _FSComp.SR$$$tcFunctionRequiresExplicitTypeArguments$$Z721C83C5)((0, _infos.MethInfo$$get_LogicalName)(minfo$$5)), m$$17)) : _ErrorLogger.CompleteD;
    });
    return res$$1;
  }, function (_provAttribs$$1) {
    return null;
  });

  if (search == null) {
    return _ErrorLogger.CompleteD;
  } else {
    const res$$2 = search;
    return res$$2;
  }
}

function MethInfoIsUnseen(g$$27, m$$18, ty$$6, minfo$$6) {
  const isUnseenByObsoleteAttrib = function isUnseenByObsoleteAttrib() {
    const matchValue$$13 = BindMethInfoAttributes(m$$18, minfo$$6, function (ilAttribs$$2) {
      return CheckILAttributesForUnseen(g$$27, ilAttribs$$2, m$$18);
    }, function (fsAttribs$$2) {
      return CheckFSharpAttributesForUnseen(g$$27, fsAttribs$$2, m$$18);
    }, function (_provAttribs$$2) {
      return null;
    });

    if (matchValue$$13 == null) {
      return false;
    } else {
      const res$$3 = matchValue$$13;
      return res$$3;
    }
  };

  const isUnseenByHidingAttribute = function isUnseenByHidingAttribute() {
    ty$$6;
    return false;
  };

  if (isUnseenByObsoleteAttrib()) {
    return true;
  } else {
    return isUnseenByHidingAttribute();
  }
}

function PropInfoIsUnseen(m$$19, pinfo$$2) {
  var $target$$30, ilpinfo$$1, pdef$$1, g$$28, vref$$4;

  if (pinfo$$2.tag === 0) {
    if (pinfo$$2.fields[2] != null) {
      $target$$30 = 1;
      g$$28 = pinfo$$2.fields[0];
      vref$$4 = pinfo$$2.fields[2];
    } else if (pinfo$$2.fields[3] != null) {
      $target$$30 = 1;
      g$$28 = pinfo$$2.fields[0];
      vref$$4 = pinfo$$2.fields[3];
    } else {
      $target$$30 = 2;
    }
  } else {
    $target$$30 = 0;
    ilpinfo$$1 = pinfo$$2.fields[0];
    pdef$$1 = pinfo$$2.fields[0].fields[1];
  }

  switch ($target$$30) {
    case 0:
      {
        if ((0, _TastOps.isAnyTupleTy)((0, _infos.PropInfo$$get_TcGlobals)(pinfo$$2), (0, _infos.ILTypeInfo$$get_ToType)((0, _infos.ILPropInfo$$get_ILTypeInfo)(ilpinfo$$1)))) {
          return true;
        } else {
          return CheckILAttributesForUnseen((0, _infos.PropInfo$$get_TcGlobals)(pinfo$$2), (0, _il.ILPropertyDef$$get_CustomAttrs)(pdef$$1), m$$19);
        }
      }

    case 1:
      {
        return CheckFSharpAttributesForUnseen(g$$28, (0, _tast.ValRef$$get_Attribs)(vref$$4), m$$19);
      }

    case 2:
      {
        throw new Error("CheckPropInfoAttributes: unreachable");
      }
  }
}

function CheckEntityAttributes(g$$29, x$$17, m$$20) {
  if ((0, _tast.EntityRef$$get_IsILTycon)(x$$17)) {
    return CheckILAttributes(g$$29, (0, _TastOps.isByrefLikeTyconRef)(g$$29, m$$20, x$$17), (0, _il.ILTypeDef$$get_CustomAttrs)((0, _tast.EntityRef$$get_ILTyconRawMetadata)(x$$17)), m$$20);
  } else {
    return CheckFSharpAttributes(g$$29, (0, _tast.EntityRef$$get_Attribs)(x$$17), m$$20);
  }
}

function CheckUnionCaseAttributes(g$$30, x$$18, m$$21) {
  return (0, _ErrorLogger.op_PlusPlus)(CheckEntityAttributes(g$$30, (0, _tast.UnionCaseRef$$get_TyconRef)(x$$18), m$$21), function () {
    return CheckFSharpAttributes(g$$30, (0, _tast.UnionCaseRef$$get_Attribs)(x$$18), m$$21);
  });
}

function CheckRecdFieldAttributes(g$$31, x$$19, m$$22) {
  return (0, _ErrorLogger.op_PlusPlus)(CheckEntityAttributes(g$$31, (0, _tast.RecdFieldRef$$get_TyconRef)(x$$19), m$$22), function () {
    return CheckFSharpAttributes(g$$31, (0, _tast.RecdFieldRef$$get_PropertyAttribs)(x$$19), m$$22);
  });
}

function CheckValAttributes(g$$32, x$$20, m$$23) {
  return CheckFSharpAttributes(g$$32, (0, _tast.ValRef$$get_Attribs)(x$$20), m$$23);
}

function CheckRecdFieldInfoAttributes(g$$33, x$$21, m$$24) {
  return CheckRecdFieldAttributes(g$$33, (0, _infos.RecdFieldInfo$$get_RecdFieldRef)(x$$21), m$$24);
}

function IsSecurityAttribute(g$$34, amap$$8, casmap, _arg1$$5, m$$25) {
  const tcref$$3 = _arg1$$5.fields[0];
  const matchValue$$14 = (0, _TcGlobals.TcGlobals$$get_attrib_SecurityAttribute)(g$$34);

  if (matchValue$$14 != null) {
    const attr$$2 = matchValue$$14;

    if ((0, _tast.EntityRef$$get_TryDeref)((0, _TcGlobals.BuiltinAttribInfo$$get_TyconRef)(attr$$2)).tag === 1) {
      return false;
    } else {
      const tcs = (0, _tast.EntityRef$$get_Stamp)(tcref$$3);
      const matchValue$$16 = (0, _Util.tryGetValue)(casmap, tcs, false);

      if (matchValue$$16[0]) {
        return matchValue$$16[1];
      } else {
        const exists = (0, _infos.ExistsInEntireHierarchyOfType)(function (t) {
          return (0, _TastOps.typeEquiv)(g$$34, t, (0, _TastOps.mkAppTy)((0, _TcGlobals.BuiltinAttribInfo$$get_TyconRef)(attr$$2), (0, _Types.L)()));
        }, g$$34, amap$$8, m$$25, new _infos.AllowMultiIntfInstantiations(0, "Yes"), (0, _TastOps.mkAppTy)(tcref$$3, (0, _Types.L)()));
        casmap.set(tcs, exists);
        return exists;
      }
    }
  } else {
    return false;
  }
}

function IsSecurityCriticalAttribute(g$$35, _arg1$$6) {
  const tcref$$4 = _arg1$$6.fields[0];

  if ((0, _TastOps.tyconRefEq)(g$$35, tcref$$4, (0, _TcGlobals.BuiltinAttribInfo$$get_TyconRef)((0, _TcGlobals.TcGlobals$$get_attrib_SecurityCriticalAttribute)(g$$35)))) {
    return true;
  } else {
    return (0, _TastOps.tyconRefEq)(g$$35, tcref$$4, (0, _TcGlobals.BuiltinAttribInfo$$get_TyconRef)((0, _TcGlobals.TcGlobals$$get_attrib_SecuritySafeCriticalAttribute)(g$$35)));
  }
}