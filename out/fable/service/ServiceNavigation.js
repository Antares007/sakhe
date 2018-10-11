"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FSharpNavigationDeclarationItem$$$$002Ector$$Z35E5CBFB = FSharpNavigationDeclarationItem$$$$002Ector$$Z35E5CBFB;
exports.FSharpNavigationDeclarationItem$$get_bodyRange = FSharpNavigationDeclarationItem$$get_bodyRange;
exports.FSharpNavigationDeclarationItem$$get_UniqueName = FSharpNavigationDeclarationItem$$get_UniqueName;
exports.FSharpNavigationDeclarationItem$$get_Name = FSharpNavigationDeclarationItem$$get_Name;
exports.FSharpNavigationDeclarationItem$$get_Glyph = FSharpNavigationDeclarationItem$$get_Glyph;
exports.FSharpNavigationDeclarationItem$$get_Kind = FSharpNavigationDeclarationItem$$get_Kind;
exports.FSharpNavigationDeclarationItem$$get_Range = FSharpNavigationDeclarationItem$$get_Range;
exports.FSharpNavigationDeclarationItem$$get_BodyRange = FSharpNavigationDeclarationItem$$get_BodyRange;
exports.FSharpNavigationDeclarationItem$$get_IsSingleTopLevel = FSharpNavigationDeclarationItem$$get_IsSingleTopLevel;
exports.FSharpNavigationDeclarationItem$$get_EnclosingEntityKind = FSharpNavigationDeclarationItem$$get_EnclosingEntityKind;
exports.FSharpNavigationDeclarationItem$$get_IsAbstract = FSharpNavigationDeclarationItem$$get_IsAbstract;
exports.FSharpNavigationDeclarationItem$$get_Access = FSharpNavigationDeclarationItem$$get_Access;
exports.FSharpNavigationDeclarationItem$$WithUniqueName$$Z721C83C5 = FSharpNavigationDeclarationItem$$WithUniqueName$$Z721C83C5;
exports.FSharpNavigationDeclarationItem$$$Create$$Z59C62BE2 = FSharpNavigationDeclarationItem$$$Create$$Z59C62BE2;
exports.FSharpNavigationItems$$$$002Ector$$Z22AB1383 = FSharpNavigationItems$$$$002Ector$$Z22AB1383;
exports.FSharpNavigationItems$$get_Declarations = FSharpNavigationItems$$get_Declarations;
exports.NavigationImpl$$$unionRangesChecked = NavigationImpl$$$unionRangesChecked;
exports.NavigationImpl$$$rangeOfDecls2 = NavigationImpl$$$rangeOfDecls2;
exports.NavigationImpl$$$rangeOfDecls = NavigationImpl$$$rangeOfDecls;
exports.NavigationImpl$$$moduleRange = NavigationImpl$$$moduleRange;
exports.NavigationImpl$$$fldspecRange = NavigationImpl$$$fldspecRange;
exports.NavigationImpl$$$bodyRange = NavigationImpl$$$bodyRange;
exports.NavigationImpl$$$getNavigationFromImplFile = NavigationImpl$$$getNavigationFromImplFile;
exports.NavigationImpl$$$getNavigationFromSigFile = NavigationImpl$$$getNavigationFromSigFile;
exports.NavigationImpl$$$getNavigation = NavigationImpl$$$getNavigation;
exports.NavigateTo$$$getNavigableItems = NavigateTo$$$getNavigableItems;
exports.NavigateTo$002ENavigableItem = exports.NavigateTo$002EContainer = exports.NavigateTo$002EContainerType = exports.NavigateTo$002ENavigableItemKind = exports.NavigationImpl$$$empty = exports.FSharpNavigationItems = exports.FSharpNavigationTopLevelDeclaration = exports.FSharpNavigationDeclarationItem = exports.FSharpEnclosingEntityKind = exports.FSharpNavigationDeclarationItemKind = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _range2 = require("../fsharp/range");

var _Util = require("../fable-core.2.0.3/Util");

var _List = require("../fable-core.2.0.3/List");

var _ast = require("../fsharp/ast");

var _Map = require("../fable-core.2.0.3/Map");

var _Option = require("../fable-core.2.0.3/Option");

var _String = require("../fable-core.2.0.3/String");

var _ServiceConstants = require("./ServiceConstants");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Array = require("../fable-core.2.0.3/Array");

const FSharpNavigationDeclarationItemKind = (0, _Types.declare)(function FSharpNavigationDeclarationItemKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FSharpNavigationDeclarationItemKind = FSharpNavigationDeclarationItemKind;
const FSharpEnclosingEntityKind = (0, _Types.declare)(function FSharpEnclosingEntityKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FSharpEnclosingEntityKind = FSharpEnclosingEntityKind;
const FSharpNavigationDeclarationItem = (0, _Types.declare)(function FSharpNavigationDeclarationItem(uniqueName, name, kind, glyph, range, bodyRange, singleTopLevel, enclosingEntityKind, isAbstract, access) {
  const $this$$1 = this;
  $this$$1.uniqueName = uniqueName;
  $this$$1.name = name;
  $this$$1.kind = kind;
  $this$$1.glyph = glyph;
  $this$$1.range = range;
  $this$$1["bodyRange@39"] = bodyRange;
  $this$$1.singleTopLevel = singleTopLevel;
  $this$$1.enclosingEntityKind = enclosingEntityKind;
  $this$$1.isAbstract = isAbstract;
  $this$$1.access = access;
});
exports.FSharpNavigationDeclarationItem = FSharpNavigationDeclarationItem;

function FSharpNavigationDeclarationItem$$$$002Ector$$Z35E5CBFB(uniqueName, name, kind, glyph, range, bodyRange, singleTopLevel, enclosingEntityKind, isAbstract, access) {
  return this != null ? FSharpNavigationDeclarationItem.call(this, uniqueName, name, kind, glyph, range, bodyRange, singleTopLevel, enclosingEntityKind, isAbstract, access) : new FSharpNavigationDeclarationItem(uniqueName, name, kind, glyph, range, bodyRange, singleTopLevel, enclosingEntityKind, isAbstract, access);
}

function FSharpNavigationDeclarationItem$$get_bodyRange(x) {
  return x["bodyRange@39"];
}

function FSharpNavigationDeclarationItem$$get_UniqueName(x$$1) {
  return x$$1.uniqueName;
}

function FSharpNavigationDeclarationItem$$get_Name(x$$2) {
  return x$$2.name;
}

function FSharpNavigationDeclarationItem$$get_Glyph(x$$3) {
  return x$$3.glyph;
}

function FSharpNavigationDeclarationItem$$get_Kind(x$$4) {
  return x$$4.kind;
}

function FSharpNavigationDeclarationItem$$get_Range(x$$5) {
  return x$$5.range;
}

function FSharpNavigationDeclarationItem$$get_BodyRange(x$$6) {
  return x$$6["bodyRange@39"];
}

function FSharpNavigationDeclarationItem$$get_IsSingleTopLevel(x$$7) {
  return x$$7.singleTopLevel;
}

function FSharpNavigationDeclarationItem$$get_EnclosingEntityKind(x$$8) {
  return x$$8.enclosingEntityKind;
}

function FSharpNavigationDeclarationItem$$get_IsAbstract(x$$9) {
  return x$$9.isAbstract;
}

function FSharpNavigationDeclarationItem$$get_Access(x$$10) {
  return x$$10.access;
}

function FSharpNavigationDeclarationItem$$WithUniqueName$$Z721C83C5(x$$11, uniqueName$$1) {
  return FSharpNavigationDeclarationItem$$$$002Ector$$Z35E5CBFB(uniqueName$$1, x$$11.name, x$$11.kind, x$$11.glyph, x$$11.range, x$$11["bodyRange@39"], x$$11.singleTopLevel, x$$11.enclosingEntityKind, x$$11.isAbstract, x$$11.access);
}

function FSharpNavigationDeclarationItem$$$Create$$Z59C62BE2(name$$1, kind$$1, glyph$$1, range$$1, bodyRange$$1, singleTopLevel$$1, enclosingEntityKind$$1, isAbstract$$1, access$$1) {
  return FSharpNavigationDeclarationItem$$$$002Ector$$Z35E5CBFB("", name$$1, kind$$1, glyph$$1, range$$1, bodyRange$$1, singleTopLevel$$1, enclosingEntityKind$$1, isAbstract$$1, access$$1);
}

const FSharpNavigationTopLevelDeclaration = (0, _Types.declare)(function FSharpNavigationTopLevelDeclaration(arg1, arg2) {
  this.Declaration = arg1;
  this.Nested = arg2;
}, _Types.Record);
exports.FSharpNavigationTopLevelDeclaration = FSharpNavigationTopLevelDeclaration;
const FSharpNavigationItems = (0, _Types.declare)(function FSharpNavigationItems(declarations) {
  const $this$$2 = this;
  $this$$2.declarations = declarations;
});
exports.FSharpNavigationItems = FSharpNavigationItems;

function FSharpNavigationItems$$$$002Ector$$Z22AB1383(declarations) {
  return this != null ? FSharpNavigationItems.call(this, declarations) : new FSharpNavigationItems(declarations);
}

function FSharpNavigationItems$$get_Declarations(x$$12) {
  return x$$12.declarations;
}

function NavigationImpl$$$unionRangesChecked(r1, r2) {
  if ((0, _Util.equals)(r1, (0, _range2.range$$$get_Zero)())) {
    return r2;
  } else if ((0, _Util.equals)(r2, (0, _range2.range$$$get_Zero)())) {
    return r1;
  } else {
    return (0, _range2.unionRanges)(r1, r2);
  }
}

function NavigationImpl$$$rangeOfDecls2(f, decls) {
  const matchValue = (0, _List.map)(function mapping($arg$$3) {
    return FSharpNavigationDeclarationItem$$get_bodyRange(f($arg$$3));
  }, decls);

  if (matchValue.tail == null) {
    return (0, _range2.range$$$get_Zero)();
  } else {
    const tl = matchValue.tail;
    const hd = matchValue.head;
    return (0, _List.fold)(NavigationImpl$$$unionRangesChecked, hd, tl);
  }
}

function NavigationImpl$$$rangeOfDecls(decls$$1) {
  return NavigationImpl$$$rangeOfDecls2(function f$$1(tuple) {
    return tuple[0];
  }, decls$$1);
}

function NavigationImpl$$$moduleRange(idm, others) {
  return NavigationImpl$$$unionRangesChecked((0, _range2.range$$get_EndRange)(idm), NavigationImpl$$$rangeOfDecls2(function (tupledArg) {
    return tupledArg[0];
  }, others));
}

function NavigationImpl$$$fldspecRange(fldspec) {
  if (fldspec.tag === 1) {
    const ty = fldspec.fields[0][0];
    return (0, _ast.SynType$$get_Range)(ty);
  } else {
    const flds = fldspec.fields[0];
    return (0, _List.fold)(function folder(st, _arg1$$1) {
      const m = _arg1$$1.fields[7];
      return NavigationImpl$$$unionRangesChecked(m, st);
    }, (0, _range2.range$$$get_Zero)(), flds);
  }
}

function NavigationImpl$$$bodyRange(mb, decls$$2) {
  return NavigationImpl$$$unionRangesChecked(NavigationImpl$$$rangeOfDecls(decls$$2), mb);
}

function NavigationImpl$$$getNavigationFromImplFile(modules) {
  const nameMap = new _Types.FSharpRef((0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }));

  const addItemName = function addItemName(name$$2) {
    const count = (0, _Option.defaultArg)((0, _Map.tryFind)(name$$2, nameMap.contents), 0) | 0;
    nameMap.contents = (0, _Map.add)(name$$2, count + 1, nameMap.contents);
    return count + 1 | 0;
  };

  const uniqueName$$2 = function uniqueName$$2(name$$3, idx) {
    const total = (0, _Map.find)(name$$3, nameMap.contents) | 0;
    return (0, _String.toText)((0, _String.printf)("%s_%d_of_%d"))(name$$3)(idx)(total);
  };

  const createDeclLid = function createDeclLid(tupledArg$$1) {
    const name$$4 = (tupledArg$$1[0] !== "" ? tupledArg$$1[0] + "." : "") + (0, _ast.textOfLid)(tupledArg$$1[1]);
    return [FSharpNavigationDeclarationItem$$$Create$$Z59C62BE2(name$$4, tupledArg$$1[2], tupledArg$$1[3], tupledArg$$1[4], tupledArg$$1[5], false, tupledArg$$1[7], tupledArg$$1[8], tupledArg$$1[9]), addItemName(name$$4), tupledArg$$1[6]];
  };

  const createDecl = function createDecl(tupledArg$$2) {
    const name$$5 = (tupledArg$$2[0] !== "" ? tupledArg$$2[0] + "." : "") + (0, _ast.Ident$$get_idText)(tupledArg$$2[1]);
    return [FSharpNavigationDeclarationItem$$$Create$$Z59C62BE2(name$$5, tupledArg$$2[2], tupledArg$$2[3], tupledArg$$2[4], tupledArg$$2[5], false, tupledArg$$2[7], tupledArg$$2[8], tupledArg$$2[9]), addItemName(name$$5), tupledArg$$2[6]];
  };

  const createMemberLid = function createMemberLid(tupledArg$$3) {
    return [FSharpNavigationDeclarationItem$$$Create$$Z59C62BE2((0, _ast.textOfLid)(tupledArg$$3[0]), tupledArg$$3[1], tupledArg$$3[2], tupledArg$$3[3], tupledArg$$3[3], false, tupledArg$$3[4], tupledArg$$3[5], tupledArg$$3[6]), addItemName((0, _ast.textOfLid)(tupledArg$$3[0]))];
  };

  const createMember = function createMember(tupledArg$$4) {
    return [FSharpNavigationDeclarationItem$$$Create$$Z59C62BE2((0, _ast.Ident$$get_idText)(tupledArg$$4[0]), tupledArg$$4[1], tupledArg$$4[2], tupledArg$$4[3], tupledArg$$4[3], false, tupledArg$$4[4], tupledArg$$4[5], tupledArg$$4[6]), addItemName((0, _ast.Ident$$get_idText)(tupledArg$$4[0]))];
  };

  const processBinding = function processBinding(isMember, enclosingEntityKind$$6, isAbstract$$6, _arg1$$2) {
    var copyOfStruct, lid$$2, flags, access$$6;
    const synPat = _arg1$$2.fields[7];
    const synExpr = _arg1$$2.fields[9];
    const memebrOpt = _arg1$$2.fields[6].fields[0];
    let m$$5;

    if (synExpr.tag === 3) {
      const e = synExpr.fields[0];
      m$$5 = (0, _ast.SynExpr$$get_Range)(e);
    } else {
      m$$5 = (0, _ast.SynExpr$$get_Range)(synExpr);
    }

    const matchValue$$1 = [synPat, memebrOpt];
    var $target$$14, access$$7, flags$$1, lid$$3;

    if (matchValue$$1[0].tag === 7) {
      if (matchValue$$1[1] != null) {
        if (lid$$2 = matchValue$$1[0].fields[0].fields[0], (flags = matchValue$$1[1], (access$$6 = matchValue$$1[0].fields[4], isMember))) {
          $target$$14 = 0;
          access$$7 = matchValue$$1[0].fields[4];
          flags$$1 = matchValue$$1[1];
          lid$$3 = matchValue$$1[0].fields[0].fields[0];
        } else {
          $target$$14 = 1;
        }
      } else {
        $target$$14 = 1;
      }
    } else {
      $target$$14 = 1;
    }

    switch ($target$$14) {
      case 0:
        {
          const patternInput = flags$$1.MemberKind.tag === 1 ? [flags$$1.IsOverrideOrExplicitImpl ? new _ServiceConstants.FSharpGlyph(10, "OverridenMethod") : new _ServiceConstants.FSharpGlyph(9, "Method"), new FSharpNavigationDeclarationItemKind(5, "MethodDecl")] : flags$$1.MemberKind.tag === 2 ? [flags$$1.IsOverrideOrExplicitImpl ? new _ServiceConstants.FSharpGlyph(10, "OverridenMethod") : new _ServiceConstants.FSharpGlyph(9, "Method"), new FSharpNavigationDeclarationItemKind(5, "MethodDecl")] : flags$$1.MemberKind.tag === 5 ? [new _ServiceConstants.FSharpGlyph(13, "Property"), new FSharpNavigationDeclarationItemKind(6, "PropertyDecl")] : flags$$1.MemberKind.tag === 4 ? [new _ServiceConstants.FSharpGlyph(13, "Property"), new FSharpNavigationDeclarationItemKind(6, "PropertyDecl")] : flags$$1.MemberKind.tag === 3 ? [new _ServiceConstants.FSharpGlyph(13, "Property"), new FSharpNavigationDeclarationItemKind(6, "PropertyDecl")] : [flags$$1.IsOverrideOrExplicitImpl ? new _ServiceConstants.FSharpGlyph(10, "OverridenMethod") : new _ServiceConstants.FSharpGlyph(9, "Method"), new FSharpNavigationDeclarationItemKind(5, "MethodDecl")];
          const patternInput$$1 = lid$$3.tail != null ? lid$$3.tail.tail != null ? [(0, _List.tail)(lid$$3), (0, _ast.Ident$$get_idRange)(lid$$3.tail.head)] : [lid$$3, (0, _ast.Ident$$get_idRange)(lid$$3.head)] : [lid$$3, m$$5];
          return (0, _Types.L)(createMemberLid([patternInput$$1[0], patternInput[1], patternInput[0], (0, _range2.unionRanges)(patternInput$$1[1], m$$5), enclosingEntityKind$$6, isAbstract$$6, access$$7]), (0, _Types.L)());
        }

      case 1:
        {
          if (matchValue$$1[0].tag === 7) {
            const lid$$4 = matchValue$$1[0].fields[0].fields[0];
            const access$$8 = matchValue$$1[0].fields[4];
            return (0, _Types.L)(createMemberLid([lid$$4, new FSharpNavigationDeclarationItemKind(7, "FieldDecl"), new _ServiceConstants.FSharpGlyph(7, "Field"), (0, _range2.unionRanges)((copyOfStruct = (0, _List.head)(lid$$4), (0, _ast.Ident$$get_idRange)(copyOfStruct)), m$$5), enclosingEntityKind$$6, isAbstract$$6, access$$8]), (0, _Types.L)());
          } else if (matchValue$$1[0].tag === 2) {
            const id$$2 = matchValue$$1[0].fields[1];
            const access$$9 = matchValue$$1[0].fields[3];
            const glyph$$2 = isMember ? new _ServiceConstants.FSharpGlyph(9, "Method") : new _ServiceConstants.FSharpGlyph(7, "Field");
            return (0, _Types.L)(createMember([id$$2, new FSharpNavigationDeclarationItemKind(7, "FieldDecl"), glyph$$2, (0, _range2.unionRanges)((0, _ast.Ident$$get_idRange)(id$$2), m$$5), enclosingEntityKind$$6, isAbstract$$6, access$$9]), (0, _Types.L)());
          } else {
            return (0, _Types.L)();
          }
        }
    }
  };

  const processExnDefnRepr = function processExnDefnRepr(baseName$$2) {
    return function (nested$$2) {
      return function (_arg2$$1) {
        const m$$6 = _arg2$$1.fields[5];
        const id$$3 = _arg2$$1.fields[1].fields[1];
        const fldspec$$1 = _arg2$$1.fields[1].fields[2];
        const access$$10 = _arg2$$1.fields[4];
        return (0, _Types.L)(createDecl([baseName$$2, id$$3, new FSharpNavigationDeclarationItemKind(2, "ExnDecl"), new _ServiceConstants.FSharpGlyph(6, "Exception"), m$$6, NavigationImpl$$$fldspecRange(fldspec$$1), nested$$2, new FSharpEnclosingEntityKind(3, "Exception"), false, access$$10]), (0, _Types.L)());
      };
    };
  };

  const processExnDefn = function processExnDefn(baseName$$3) {
    return function (_arg3) {
      const repr = _arg3.fields[0];
      const membDefns = _arg3.fields[1];
      const nested$$3 = processMembers(membDefns)(new FSharpEnclosingEntityKind(3, "Exception"))[1];
      return processExnDefnRepr(baseName$$3)(nested$$3)(repr);
    };
  };

  const processTycon = function processTycon(baseName$$4) {
    return function (_arg4) {
      const repr$$1 = _arg4.fields[1];
      const membDefns$$1 = _arg4.fields[2];
      const m$$7 = _arg4.fields[3];
      const lid$$5 = _arg4.fields[0].fields[3];
      const access$$11 = _arg4.fields[0].fields[6];
      const topMembers = processMembers(membDefns$$1)(new FSharpEnclosingEntityKind(2, "Class"))[1];

      switch (repr$$1.tag) {
        case 0:
          {
            const membDefns$$2 = repr$$1.fields[1];
            const mb$$1 = repr$$1.fields[2];
            const members = processMembers(membDefns$$2)(new FSharpEnclosingEntityKind(2, "Class"))[1];
            const nested$$4 = (0, _List.append)(members, topMembers);
            return (0, _Types.L)(createDeclLid([baseName$$4, lid$$5, new FSharpNavigationDeclarationItemKind(4, "TypeDecl"), new _ServiceConstants.FSharpGlyph(0, "Class"), m$$7, NavigationImpl$$$bodyRange(mb$$1, nested$$4), nested$$4, new FSharpEnclosingEntityKind(2, "Class"), false, access$$11]), (0, _Types.L)());
          }

        case 1:
          {
            const simple = repr$$1.fields[0];

            switch (simple.tag) {
              case 0:
                {
                  const mb$$2 = simple.fields[2];
                  const cases = simple.fields[1];
                  const cases$$1 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
                    return (0, _Seq.collect)(function (matchValue$$3) {
                      const id$$4 = matchValue$$3.fields[1];
                      const fldspec$$2 = matchValue$$3.fields[2];
                      return (0, _Seq.singleton)(createMember([id$$4, new FSharpNavigationDeclarationItemKind(8, "OtherDecl"), new _ServiceConstants.FSharpGlyph(14, "Struct"), (0, _range2.unionRanges)(NavigationImpl$$$fldspecRange(fldspec$$2), (0, _ast.Ident$$get_idRange)(id$$4)), new FSharpEnclosingEntityKind(7, "DU"), false, access$$11]));
                    }, cases);
                  }));
                  const nested$$5 = (0, _List.append)(cases$$1, topMembers);
                  return (0, _Types.L)(createDeclLid([baseName$$4, lid$$5, new FSharpNavigationDeclarationItemKind(4, "TypeDecl"), new _ServiceConstants.FSharpGlyph(17, "Union"), m$$7, NavigationImpl$$$bodyRange(mb$$2, nested$$5), nested$$5, new FSharpEnclosingEntityKind(7, "DU"), false, access$$11]), (0, _Types.L)());
                }

              case 1:
                {
                  const mb$$3 = simple.fields[1];
                  const cases$$2 = simple.fields[0];
                  const cases$$3 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
                    return (0, _Seq.collect)(function (matchValue$$4) {
                      const m$$8 = matchValue$$4.fields[4];
                      const id$$5 = matchValue$$4.fields[1];
                      return (0, _Seq.singleton)(createMember([id$$5, new FSharpNavigationDeclarationItemKind(7, "FieldDecl"), new _ServiceConstants.FSharpGlyph(4, "EnumMember"), m$$8, new FSharpEnclosingEntityKind(6, "Enum"), false, access$$11]));
                    }, cases$$2);
                  }));
                  const nested$$6 = (0, _List.append)(cases$$3, topMembers);
                  return (0, _Types.L)(createDeclLid([baseName$$4, lid$$5, new FSharpNavigationDeclarationItemKind(4, "TypeDecl"), new _ServiceConstants.FSharpGlyph(3, "Enum"), m$$7, NavigationImpl$$$bodyRange(mb$$3, nested$$6), nested$$6, new FSharpEnclosingEntityKind(6, "Enum"), false, access$$11]), (0, _Types.L)());
                }

              case 2:
                {
                  const mb$$4 = simple.fields[2];
                  const fields = simple.fields[1];
                  const fields$$1 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
                    return (0, _Seq.collect)(function (matchValue$$5) {
                      const m$$9 = matchValue$$5.fields[7];
                      const id$$6 = matchValue$$5.fields[2];
                      return id$$6 != null ? (0, _Seq.singleton)(createMember([id$$6, new FSharpNavigationDeclarationItemKind(7, "FieldDecl"), new _ServiceConstants.FSharpGlyph(7, "Field"), m$$9, new FSharpEnclosingEntityKind(5, "Record"), false, access$$11])) : (0, _Seq.empty)();
                    }, fields);
                  }));
                  const nested$$7 = (0, _List.append)(fields$$1, topMembers);
                  return (0, _Types.L)(createDeclLid([baseName$$4, lid$$5, new FSharpNavigationDeclarationItemKind(4, "TypeDecl"), new _ServiceConstants.FSharpGlyph(16, "Type"), m$$7, NavigationImpl$$$bodyRange(mb$$4, nested$$7), nested$$7, new FSharpEnclosingEntityKind(5, "Record"), false, access$$11]), (0, _Types.L)());
                }

              case 5:
                {
                  const mb$$5 = simple.fields[2];
                  return (0, _Types.L)(createDeclLid([baseName$$4, lid$$5, new FSharpNavigationDeclarationItemKind(4, "TypeDecl"), new _ServiceConstants.FSharpGlyph(15, "Typedef"), m$$7, NavigationImpl$$$bodyRange(mb$$5, topMembers), topMembers, new FSharpEnclosingEntityKind(2, "Class"), false, access$$11]), (0, _Types.L)());
                }

              default:
                {
                  return (0, _Types.L)();
                }
            }
          }

        default:
          {
            const repr$$2 = repr$$1.fields[0];
            return processExnDefnRepr(baseName$$4)((0, _Types.L)())(repr$$2);
          }
      }
    };
  };

  const processMembers = function processMembers(members$$1) {
    return function (enclosingEntityKind$$7) {
      const members$$3 = (0, _List.map)(function mapping$$1(tupledArg$$5) {
        var info2, info1, matchValue$$6, x$$14, rcid, membs;
        return [tupledArg$$5[0], tupledArg$$5[1].tail != null ? tupledArg$$5[1].tail.tail != null ? tupledArg$$5[1].tail.head.tag === 1 ? tupledArg$$5[1].tail.head.fields[0].fields[7].tag === 7 ? tupledArg$$5[1].tail.head.fields[0].fields[7].fields[1] != null ? tupledArg$$5[1].tail.tail.tail == null ? tupledArg$$5[1].head.tag === 1 ? tupledArg$$5[1].head.fields[0].fields[7].tag === 7 ? tupledArg$$5[1].head.fields[0].fields[7].fields[1] != null ? (info2 = tupledArg$$5[1].tail.head.fields[0].fields[7].fields[1], info1 = tupledArg$$5[1].head.fields[0].fields[7].fields[1], (null, (null, (matchValue$$6 = processBinding(true, enclosingEntityKind$$7, false, tupledArg$$5[1].head.fields[0]), matchValue$$6.tail == null ? processBinding(true, enclosingEntityKind$$7, false, tupledArg$$5[1].tail.head.fields[0]) : (x$$14 = matchValue$$6, x$$14))))) : (0, _Types.L)() : (0, _Types.L)() : (0, _Types.L)() : (0, _Types.L)() : (0, _Types.L)() : (0, _Types.L)() : (0, _Types.L)() : tupledArg$$5[1].head.tag === 4 ? (0, _List.collect)((0, _Util.partialApply)(1, processBinding, [false, enclosingEntityKind$$7, false]), tupledArg$$5[1].head.fields[0]) : tupledArg$$5[1].head.tag === 1 ? processBinding(true, enclosingEntityKind$$7, false, tupledArg$$5[1].head.fields[0]) : tupledArg$$5[1].head.tag === 8 ? tupledArg$$5[1].head.fields[0].fields[2] != null ? (rcid = tupledArg$$5[1].head.fields[0].fields[2], (0, _Types.L)(createMember([rcid, new FSharpNavigationDeclarationItemKind(7, "FieldDecl"), new _ServiceConstants.FSharpGlyph(7, "Field"), (0, _ast.SynType$$get_Range)(tupledArg$$5[1].head.fields[0].fields[3]), enclosingEntityKind$$7, false, tupledArg$$5[1].head.fields[0].fields[6]]), (0, _Types.L)())) : (0, _Types.L)() : tupledArg$$5[1].head.tag === 10 ? (0, _Types.L)(createMember([tupledArg$$5[1].head.fields[2], new FSharpNavigationDeclarationItemKind(7, "FieldDecl"), new _ServiceConstants.FSharpGlyph(7, "Field"), (0, _ast.Ident$$get_idRange)(tupledArg$$5[1].head.fields[2]), enclosingEntityKind$$7, false, tupledArg$$5[1].head.fields[7]]), (0, _Types.L)()) : tupledArg$$5[1].head.tag === 5 ? (0, _Types.L)(createMember([tupledArg$$5[1].head.fields[0].fields[1], new FSharpNavigationDeclarationItemKind(5, "MethodDecl"), new _ServiceConstants.FSharpGlyph(10, "OverridenMethod"), (0, _ast.SynType$$get_Range)(tupledArg$$5[1].head.fields[0].fields[3]), enclosingEntityKind$$7, true, tupledArg$$5[1].head.fields[0].fields[8]]), (0, _Types.L)()) : tupledArg$$5[1].head.tag === 9 ? (() => {
          throw new Error("tycon as member????");
        })() : tupledArg$$5[1].head.tag === 6 ? tupledArg$$5[1].head.fields[1] != null ? (membs = tupledArg$$5[1].head.fields[1], processMembers(membs)(enclosingEntityKind$$7)[1]) : (0, _Types.L)() : (0, _Types.L)() : (0, _Types.L)()];
      }, (0, _List.groupBy)(function projection(x$$13) {
        return (0, _ast.SynMemberDefn$$get_Range)(x$$13);
      }, members$$1, {
        Equals: _Util.equals,
        GetHashCode: _Util.structuralHash
      }));
      return [(0, _Seq.fold)(NavigationImpl$$$unionRangesChecked, (0, _range2.range$$$get_Zero)(), (0, _Seq.map)(function mapping$$2(tuple$$5) {
        return tuple$$5[0];
      }, members$$3)), (0, _List.concat)((0, _List.map)(function mapping$$3(tuple$$6) {
        return tuple$$6[1];
      }, members$$3))];
    };
  };

  const processNestedDeclarations = function processNestedDeclarations(decls$$3) {
    return (0, _List.collect)(function mapping$$4(_arg5) {
      if (_arg5.tag === 2) {
        const binds$$1 = _arg5.fields[1];
        return (0, _List.collect)((0, _Util.partialApply)(1, processBinding, [false, new FSharpEnclosingEntityKind(1, "Module"), false]), binds$$1);
      } else {
        return (0, _Types.L)();
      }
    }, decls$$3);
  };

  const processFSharpNavigationTopLevelDeclarations = function processFSharpNavigationTopLevelDeclarations(tupledArg$$6) {
    return (0, _List.collect)(function mapping$$6(_arg6) {
      switch (_arg6.tag) {
        case 0:
          {
            const m$$10 = _arg6.fields[2];
            const lid$$6 = _arg6.fields[1];
            const id$$9 = _arg6.fields[0];
            return (0, _Types.L)(createDecl([tupledArg$$6[0], id$$9, new FSharpNavigationDeclarationItemKind(3, "ModuleDecl"), new _ServiceConstants.FSharpGlyph(11, "Module"), m$$10, (0, _ast.rangeOfLid)(lid$$6), (0, _Types.L)(), new FSharpEnclosingEntityKind(0, "Namespace"), false, null]), (0, _Types.L)());
          }

        case 1:
          {
            const m$$11 = _arg6.fields[4];
            const lid$$7 = _arg6.fields[0].fields[3];
            const decls$$5 = _arg6.fields[2];
            const access$$15 = _arg6.fields[0].fields[6];
            const _isRec = _arg6.fields[1];
            const nested$$8 = processNestedDeclarations(decls$$5);
            const newBaseName = (tupledArg$$6[0] === "" ? "" : tupledArg$$6[0] + ".") + (0, _ast.textOfLid)(lid$$7);
            const other = processFSharpNavigationTopLevelDeclarations([newBaseName, decls$$5]);
            return (0, _Types.L)(createDeclLid([tupledArg$$6[0], lid$$7, new FSharpNavigationDeclarationItemKind(3, "ModuleDecl"), new _ServiceConstants.FSharpGlyph(11, "Module"), m$$11, NavigationImpl$$$unionRangesChecked(NavigationImpl$$$rangeOfDecls(nested$$8), NavigationImpl$$$moduleRange((0, _ast.rangeOfLid)(lid$$7), other)), nested$$8, new FSharpEnclosingEntityKind(1, "Module"), false, access$$15]), other);
          }

        case 4:
          {
            const tydefs = _arg6.fields[0];
            return (0, _List.collect)(processTycon(tupledArg$$6[0]), tydefs);
          }

        case 5:
          {
            const defn = _arg6.fields[0];
            return processExnDefn(tupledArg$$6[0])(defn);
          }

        default:
          {
            return (0, _Types.L)();
          }
      }
    }, tupledArg$$6[1]);
  };

  let items;
  const singleTopLevel$$2 = (0, _List.length)(modules) === 1;
  items = (0, _List.collect)(function mapping$$7(_arg1$$3) {
    const m$$12 = _arg1$$3.fields[7];
    const isModule = _arg1$$3.fields[2];
    const id$$10 = _arg1$$3.fields[0];
    const decls$$6 = _arg1$$3.fields[3];
    const access$$16 = _arg1$$3.fields[6];
    const _isRec$$1 = _arg1$$3.fields[1];
    const baseName$$6 = !singleTopLevel$$2 ? (0, _ast.textOfLid)(id$$10) : "";
    const nested$$9 = processNestedDeclarations(decls$$6);
    const other$$1 = processFSharpNavigationTopLevelDeclarations([baseName$$6, decls$$6]);

    if (id$$10.tail == null) {
      return other$$1;
    } else {
      const decl = [FSharpNavigationDeclarationItem$$$Create$$Z59C62BE2((0, _ast.textOfLid)(id$$10), isModule ? new FSharpNavigationDeclarationItemKind(1, "ModuleFileDecl") : new FSharpNavigationDeclarationItemKind(0, "NamespaceDecl"), new _ServiceConstants.FSharpGlyph(11, "Module"), m$$12, NavigationImpl$$$unionRangesChecked(NavigationImpl$$$rangeOfDecls(nested$$9), NavigationImpl$$$moduleRange((0, _ast.rangeOfLid)(id$$10), other$$1)), singleTopLevel$$2, new FSharpEnclosingEntityKind(1, "Module"), false, access$$16), addItemName((0, _ast.textOfLid)(id$$10)), nested$$9];
      return (0, _Types.L)(decl, other$$1);
    }
  }, modules);
  const items$$1 = (0, _Array.map)(function mapping$$9(tupledArg$$7) {
    const nest$$1 = (0, _Array.map)(function mapping$$8(tupledArg$$8) {
      return FSharpNavigationDeclarationItem$$WithUniqueName$$Z721C83C5(tupledArg$$8[0], uniqueName$$2(FSharpNavigationDeclarationItem$$get_Name(tupledArg$$7[0]), tupledArg$$8[1]));
    }, (0, _Array.ofList)(tupledArg$$7[2], Array), Array);
    nest$$1.sort(function comparer(a$$1, b) {
      return (0, _Util.comparePrimitives)(FSharpNavigationDeclarationItem$$get_Name(a$$1), FSharpNavigationDeclarationItem$$get_Name(b));
    });
    return new FSharpNavigationTopLevelDeclaration(FSharpNavigationDeclarationItem$$WithUniqueName$$Z721C83C5(tupledArg$$7[0], uniqueName$$2(FSharpNavigationDeclarationItem$$get_Name(tupledArg$$7[0]), tupledArg$$7[1])), nest$$1);
  }, (0, _Array.ofList)(items, Array), Array);
  items$$1.sort(function comparer$$1(a$$2, b$$1) {
    return (0, _Util.comparePrimitives)(FSharpNavigationDeclarationItem$$get_Name(a$$2.Declaration), FSharpNavigationDeclarationItem$$get_Name(b$$1.Declaration));
  });
  return FSharpNavigationItems$$$$002Ector$$Z22AB1383(items$$1);
}

function NavigationImpl$$$getNavigationFromSigFile(modules$$1) {
  const nameMap$$1 = new _Types.FSharpRef((0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }));

  const addItemName$$1 = function addItemName$$1(name$$6) {
    const count$$1 = (0, _Option.defaultArg)((0, _Map.tryFind)(name$$6, nameMap$$1.contents), 0) | 0;
    nameMap$$1.contents = (0, _Map.add)(name$$6, count$$1 + 1, nameMap$$1.contents);
    return count$$1 + 1 | 0;
  };

  const uniqueName$$3 = function uniqueName$$3(name$$7, idx$$3) {
    const total$$1 = (0, _Map.find)(name$$7, nameMap$$1.contents) | 0;
    return (0, _String.toText)((0, _String.printf)("%s_%d_of_%d"))(name$$7)(idx$$3)(total$$1);
  };

  const createDeclLid$$1 = function createDeclLid$$1(tupledArg$$9) {
    const name$$8 = (tupledArg$$9[0] !== "" ? tupledArg$$9[0] + "." : "") + (0, _ast.textOfLid)(tupledArg$$9[1]);
    return [FSharpNavigationDeclarationItem$$$Create$$Z59C62BE2(name$$8, tupledArg$$9[2], tupledArg$$9[3], tupledArg$$9[4], tupledArg$$9[5], false, tupledArg$$9[7], tupledArg$$9[8], tupledArg$$9[9]), addItemName$$1(name$$8), tupledArg$$9[6]];
  };

  const createDecl$$1 = function createDecl$$1(tupledArg$$10) {
    const name$$9 = (tupledArg$$10[0] !== "" ? tupledArg$$10[0] + "." : "") + (0, _ast.Ident$$get_idText)(tupledArg$$10[1]);
    return [FSharpNavigationDeclarationItem$$$Create$$Z59C62BE2(name$$9, tupledArg$$10[2], tupledArg$$10[3], tupledArg$$10[4], tupledArg$$10[5], false, tupledArg$$10[7], tupledArg$$10[8], tupledArg$$10[9]), addItemName$$1(name$$9), tupledArg$$10[6]];
  };

  const createMember$$1 = function createMember$$1(tupledArg$$11) {
    return [FSharpNavigationDeclarationItem$$$Create$$Z59C62BE2((0, _ast.Ident$$get_idText)(tupledArg$$11[0]), tupledArg$$11[1], tupledArg$$11[2], tupledArg$$11[3], tupledArg$$11[3], false, tupledArg$$11[4], tupledArg$$11[5], tupledArg$$11[6]), addItemName$$1((0, _ast.Ident$$get_idText)(tupledArg$$11[0]))];
  };

  const processExnRepr = function processExnRepr(baseName$$9) {
    return function (nested$$12) {
      return function (_arg1$$4) {
        const m$$16 = _arg1$$4.fields[5];
        const id$$13 = _arg1$$4.fields[1].fields[1];
        const fldspec$$3 = _arg1$$4.fields[1].fields[2];
        const access$$20 = _arg1$$4.fields[4];
        return (0, _Types.L)(createDecl$$1([baseName$$9, id$$13, new FSharpNavigationDeclarationItemKind(2, "ExnDecl"), new _ServiceConstants.FSharpGlyph(6, "Exception"), m$$16, NavigationImpl$$$fldspecRange(fldspec$$3), nested$$12, new FSharpEnclosingEntityKind(3, "Exception"), false, access$$20]), (0, _Types.L)());
      };
    };
  };

  const processExnSig = function processExnSig(baseName$$10) {
    return function (_arg2$$2) {
      const repr$$3 = _arg2$$2.fields[0];
      const memberSigs = _arg2$$2.fields[1];
      const nested$$13 = processSigMembers(memberSigs);
      return processExnRepr(baseName$$10)(nested$$13)(repr$$3);
    };
  };

  const processTycon$$1 = function processTycon$$1(baseName$$11) {
    return function (_arg3$$1) {
      const repr$$4 = _arg3$$1.fields[1];
      const membDefns$$3 = _arg3$$1.fields[2];
      const m$$17 = _arg3$$1.fields[3];
      const lid$$9 = _arg3$$1.fields[0].fields[3];
      const access$$21 = _arg3$$1.fields[0].fields[6];
      const topMembers$$1 = processSigMembers(membDefns$$3);

      switch (repr$$4.tag) {
        case 0:
          {
            const membDefns$$4 = repr$$4.fields[1];
            const mb$$6 = repr$$4.fields[2];
            const members$$4 = processSigMembers(membDefns$$4);
            const nested$$14 = (0, _List.append)(members$$4, topMembers$$1);
            return (0, _Types.L)(createDeclLid$$1([baseName$$11, lid$$9, new FSharpNavigationDeclarationItemKind(4, "TypeDecl"), new _ServiceConstants.FSharpGlyph(0, "Class"), m$$17, NavigationImpl$$$bodyRange(mb$$6, nested$$14), nested$$14, new FSharpEnclosingEntityKind(2, "Class"), false, access$$21]), (0, _Types.L)());
          }

        case 1:
          {
            const simple$$1 = repr$$4.fields[0];

            switch (simple$$1.tag) {
              case 0:
                {
                  const mb$$7 = simple$$1.fields[2];
                  const cases$$4 = simple$$1.fields[1];
                  const cases$$5 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
                    return (0, _Seq.collect)(function (matchValue$$7) {
                      const id$$14 = matchValue$$7.fields[1];
                      const fldspec$$4 = matchValue$$7.fields[2];
                      return (0, _Seq.singleton)(createMember$$1([id$$14, new FSharpNavigationDeclarationItemKind(8, "OtherDecl"), new _ServiceConstants.FSharpGlyph(14, "Struct"), (0, _range2.unionRanges)(NavigationImpl$$$fldspecRange(fldspec$$4), (0, _ast.Ident$$get_idRange)(id$$14)), new FSharpEnclosingEntityKind(7, "DU"), false, access$$21]));
                    }, cases$$4);
                  }));
                  const nested$$15 = (0, _List.append)(cases$$5, topMembers$$1);
                  return (0, _Types.L)(createDeclLid$$1([baseName$$11, lid$$9, new FSharpNavigationDeclarationItemKind(4, "TypeDecl"), new _ServiceConstants.FSharpGlyph(17, "Union"), m$$17, NavigationImpl$$$bodyRange(mb$$7, nested$$15), nested$$15, new FSharpEnclosingEntityKind(7, "DU"), false, access$$21]), (0, _Types.L)());
                }

              case 1:
                {
                  const mb$$8 = simple$$1.fields[1];
                  const cases$$6 = simple$$1.fields[0];
                  const cases$$7 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
                    return (0, _Seq.collect)(function (matchValue$$8) {
                      const m$$18 = matchValue$$8.fields[4];
                      const id$$15 = matchValue$$8.fields[1];
                      return (0, _Seq.singleton)(createMember$$1([id$$15, new FSharpNavigationDeclarationItemKind(7, "FieldDecl"), new _ServiceConstants.FSharpGlyph(4, "EnumMember"), m$$18, new FSharpEnclosingEntityKind(6, "Enum"), false, access$$21]));
                    }, cases$$6);
                  }));
                  const nested$$16 = (0, _List.append)(cases$$7, topMembers$$1);
                  return (0, _Types.L)(createDeclLid$$1([baseName$$11, lid$$9, new FSharpNavigationDeclarationItemKind(4, "TypeDecl"), new _ServiceConstants.FSharpGlyph(3, "Enum"), m$$17, NavigationImpl$$$bodyRange(mb$$8, nested$$16), nested$$16, new FSharpEnclosingEntityKind(6, "Enum"), false, access$$21]), (0, _Types.L)());
                }

              case 2:
                {
                  const mb$$9 = simple$$1.fields[2];
                  const fields$$2 = simple$$1.fields[1];
                  const fields$$3 = (0, _List.ofSeq)((0, _Seq.delay)(function () {
                    return (0, _Seq.collect)(function (matchValue$$9) {
                      const m$$19 = matchValue$$9.fields[7];
                      const id$$16 = matchValue$$9.fields[2];
                      return id$$16 != null ? (0, _Seq.singleton)(createMember$$1([id$$16, new FSharpNavigationDeclarationItemKind(7, "FieldDecl"), new _ServiceConstants.FSharpGlyph(7, "Field"), m$$19, new FSharpEnclosingEntityKind(5, "Record"), false, access$$21])) : (0, _Seq.empty)();
                    }, fields$$2);
                  }));
                  const nested$$17 = (0, _List.append)(fields$$3, topMembers$$1);
                  return (0, _Types.L)(createDeclLid$$1([baseName$$11, lid$$9, new FSharpNavigationDeclarationItemKind(4, "TypeDecl"), new _ServiceConstants.FSharpGlyph(16, "Type"), m$$17, NavigationImpl$$$bodyRange(mb$$9, nested$$17), nested$$17, new FSharpEnclosingEntityKind(5, "Record"), false, access$$21]), (0, _Types.L)());
                }

              case 5:
                {
                  const mb$$10 = simple$$1.fields[2];
                  return (0, _Types.L)(createDeclLid$$1([baseName$$11, lid$$9, new FSharpNavigationDeclarationItemKind(4, "TypeDecl"), new _ServiceConstants.FSharpGlyph(15, "Typedef"), m$$17, NavigationImpl$$$bodyRange(mb$$10, topMembers$$1), topMembers$$1, new FSharpEnclosingEntityKind(2, "Class"), false, access$$21]), (0, _Types.L)());
                }

              default:
                {
                  return (0, _Types.L)();
                }
            }
          }

        default:
          {
            const repr$$5 = repr$$4.fields[0];
            return processExnRepr(baseName$$11)((0, _Types.L)())(repr$$5);
          }
      }
    };
  };

  const processSigMembers = function processSigMembers(members$$5) {
    return (0, _List.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (memb$$1) {
        var $target$$15, access$$22, id$$17, m$$20, access$$23, rcid$$1, ty$$3;

        if (memb$$1.tag === 0) {
          $target$$15 = 0;
          access$$22 = memb$$1.fields[0].fields[8];
          id$$17 = memb$$1.fields[0].fields[1];
          m$$20 = memb$$1.fields[0].fields[10];
        } else if (memb$$1.tag === 3) {
          if (memb$$1.fields[0].fields[2] != null) {
            $target$$15 = 1;
            access$$23 = memb$$1.fields[0].fields[6];
            rcid$$1 = memb$$1.fields[0].fields[2];
            ty$$3 = memb$$1.fields[0].fields[3];
          } else {
            $target$$15 = 2;
          }
        } else {
          $target$$15 = 2;
        }

        switch ($target$$15) {
          case 0:
            {
              return (0, _Seq.singleton)(createMember$$1([id$$17, new FSharpNavigationDeclarationItemKind(5, "MethodDecl"), new _ServiceConstants.FSharpGlyph(9, "Method"), m$$20, new FSharpEnclosingEntityKind(2, "Class"), false, access$$22]));
            }

          case 1:
            {
              return (0, _Seq.singleton)(createMember$$1([rcid$$1, new FSharpNavigationDeclarationItemKind(7, "FieldDecl"), new _ServiceConstants.FSharpGlyph(7, "Field"), (0, _ast.SynType$$get_Range)(ty$$3), new FSharpEnclosingEntityKind(2, "Class"), false, access$$23]));
            }

          case 2:
            {
              return (0, _Seq.empty)();
            }
        }
      }, members$$5);
    }));
  };

  const processNestedSigDeclarations = function processNestedSigDeclarations(decls$$7) {
    return (0, _List.collect)(function mapping$$10(_arg4$$1) {
      if (_arg4$$1.tag === 2) {
        const m$$21 = _arg4$$1.fields[0].fields[10];
        const id$$18 = _arg4$$1.fields[0].fields[1];
        const access$$24 = _arg4$$1.fields[0].fields[8];
        return (0, _Types.L)(createMember$$1([id$$18, new FSharpNavigationDeclarationItemKind(5, "MethodDecl"), new _ServiceConstants.FSharpGlyph(9, "Method"), m$$21, new FSharpEnclosingEntityKind(1, "Module"), false, access$$24]), (0, _Types.L)());
      } else {
        return (0, _Types.L)();
      }
    }, decls$$7);
  };

  const processFSharpNavigationTopLevelSigDeclarations = function processFSharpNavigationTopLevelSigDeclarations(tupledArg$$12) {
    return (0, _List.collect)(function mapping$$12(_arg5$$1) {
      switch (_arg5$$1.tag) {
        case 0:
          {
            const m$$22 = _arg5$$1.fields[2];
            const lid$$10 = _arg5$$1.fields[1];
            const id$$19 = _arg5$$1.fields[0];
            return (0, _Types.L)(createDecl$$1([tupledArg$$12[0], id$$19, new FSharpNavigationDeclarationItemKind(3, "ModuleDecl"), new _ServiceConstants.FSharpGlyph(11, "Module"), m$$22, (0, _ast.rangeOfLid)(lid$$10), (0, _Types.L)(), new FSharpEnclosingEntityKind(1, "Module"), false, null]), (0, _Types.L)());
          }

        case 1:
          {
            const m$$23 = _arg5$$1.fields[3];
            const lid$$11 = _arg5$$1.fields[0].fields[3];
            const decls$$9 = _arg5$$1.fields[2];
            const access$$25 = _arg5$$1.fields[0].fields[6];
            const nested$$18 = processNestedSigDeclarations(decls$$9);
            const newBaseName$$1 = (tupledArg$$12[0] === "" ? "" : tupledArg$$12[0] + ".") + (0, _ast.textOfLid)(lid$$11);
            const other$$2 = processFSharpNavigationTopLevelSigDeclarations([newBaseName$$1, decls$$9]);
            return (0, _Types.L)(createDeclLid$$1([tupledArg$$12[0], lid$$11, new FSharpNavigationDeclarationItemKind(3, "ModuleDecl"), new _ServiceConstants.FSharpGlyph(11, "Module"), m$$23, NavigationImpl$$$unionRangesChecked(NavigationImpl$$$rangeOfDecls(nested$$18), NavigationImpl$$$moduleRange((0, _ast.rangeOfLid)(lid$$11), other$$2)), nested$$18, new FSharpEnclosingEntityKind(1, "Module"), false, access$$25]), other$$2);
          }

        case 3:
          {
            const tydefs$$1 = _arg5$$1.fields[0];
            return (0, _List.collect)(processTycon$$1(tupledArg$$12[0]), tydefs$$1);
          }

        case 4:
          {
            const defn$$1 = _arg5$$1.fields[0];
            return processExnSig(tupledArg$$12[0])(defn$$1);
          }

        default:
          {
            return (0, _Types.L)();
          }
      }
    }, tupledArg$$12[1]);
  };

  let items$$2;
  const singleTopLevel$$3 = (0, _List.length)(modules$$1) === 1;
  items$$2 = (0, _List.collect)(function mapping$$13(_arg1$$5) {
    const m$$24 = _arg1$$5.fields[7];
    const isModule$$1 = _arg1$$5.fields[2];
    const id$$20 = _arg1$$5.fields[0];
    const decls$$10 = _arg1$$5.fields[3];
    const access$$26 = _arg1$$5.fields[6];
    const _isRec$$2 = _arg1$$5.fields[1];
    const baseName$$13 = !singleTopLevel$$3 ? (0, _ast.textOfLid)(id$$20) : "";
    const nested$$19 = processNestedSigDeclarations(decls$$10);
    const other$$3 = processFSharpNavigationTopLevelSigDeclarations([baseName$$13, decls$$10]);
    const decl$$2 = [FSharpNavigationDeclarationItem$$$Create$$Z59C62BE2((0, _ast.textOfLid)(id$$20), isModule$$1 ? new FSharpNavigationDeclarationItemKind(1, "ModuleFileDecl") : new FSharpNavigationDeclarationItemKind(0, "NamespaceDecl"), new _ServiceConstants.FSharpGlyph(11, "Module"), m$$24, NavigationImpl$$$unionRangesChecked(NavigationImpl$$$rangeOfDecls(nested$$19), NavigationImpl$$$moduleRange((0, _ast.rangeOfLid)(id$$20), other$$3)), singleTopLevel$$3, new FSharpEnclosingEntityKind(1, "Module"), false, access$$26), addItemName$$1((0, _ast.textOfLid)(id$$20)), nested$$19];
    return (0, _Types.L)(decl$$2, other$$3);
  }, modules$$1);
  const items$$3 = (0, _Array.map)(function mapping$$15(tupledArg$$13) {
    const nest$$3 = (0, _Array.map)(function mapping$$14(tupledArg$$14) {
      return FSharpNavigationDeclarationItem$$WithUniqueName$$Z721C83C5(tupledArg$$14[0], uniqueName$$3(FSharpNavigationDeclarationItem$$get_Name(tupledArg$$13[0]), tupledArg$$14[1]));
    }, (0, _Array.ofList)(tupledArg$$13[2], Array), Array);
    nest$$3.sort(function comparer$$2(a$$3, b$$2) {
      return (0, _Util.comparePrimitives)(FSharpNavigationDeclarationItem$$get_Name(a$$3), FSharpNavigationDeclarationItem$$get_Name(b$$2));
    });
    const nest$$4 = (0, _Array.distinctBy)(function projection$$1(x$$15) {
      return [FSharpNavigationDeclarationItem$$get_Range(x$$15), FSharpNavigationDeclarationItem$$get_BodyRange(x$$15), FSharpNavigationDeclarationItem$$get_Name(x$$15), FSharpNavigationDeclarationItem$$get_Kind(x$$15)];
    }, nest$$3, {
      Equals: _Util.equalArrays,
      GetHashCode: _Util.structuralHash
    });
    return new FSharpNavigationTopLevelDeclaration(FSharpNavigationDeclarationItem$$WithUniqueName$$Z721C83C5(tupledArg$$13[0], uniqueName$$3(FSharpNavigationDeclarationItem$$get_Name(tupledArg$$13[0]), tupledArg$$13[1])), nest$$4);
  }, (0, _Array.ofList)(items$$2, Array), Array);
  items$$3.sort(function comparer$$3(a$$4, b$$3) {
    return (0, _Util.comparePrimitives)(FSharpNavigationDeclarationItem$$get_Name(a$$4.Declaration), FSharpNavigationDeclarationItem$$get_Name(b$$3.Declaration));
  });
  return FSharpNavigationItems$$$$002Ector$$Z22AB1383(items$$3);
}

function NavigationImpl$$$getNavigation(parsedInput) {
  if (parsedInput.tag === 0) {
    const modules$$3 = parsedInput.fields[0].fields[5];
    return NavigationImpl$$$getNavigationFromImplFile(modules$$3);
  } else {
    const modules$$2 = parsedInput.fields[0].fields[4];
    return NavigationImpl$$$getNavigationFromSigFile(modules$$2);
  }
}

const NavigationImpl$$$empty = FSharpNavigationItems$$$$002Ector$$Z22AB1383([]);
exports.NavigationImpl$$$empty = NavigationImpl$$$empty;
const NavigateTo$002ENavigableItemKind = (0, _Types.declare)(function NavigateTo$002ENavigableItemKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.NavigateTo$002ENavigableItemKind = NavigateTo$002ENavigableItemKind;

NavigateTo$002ENavigableItemKind.prototype.toString = function () {
  const x$$16 = this;
  return (0, _String.toText)((0, _String.printf)("%+A"))(x$$16);
};

const NavigateTo$002EContainerType = (0, _Types.declare)(function NavigateTo$002EContainerType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.NavigateTo$002EContainerType = NavigateTo$002EContainerType;
const NavigateTo$002EContainer = (0, _Types.declare)(function NavigateTo$002EContainer(arg1, arg2) {
  this.Type = arg1;
  this.Name = arg2;
}, _Types.Record);
exports.NavigateTo$002EContainer = NavigateTo$002EContainer;
const NavigateTo$002ENavigableItem = (0, _Types.declare)(function NavigateTo$002ENavigableItem(arg1, arg2, arg3, arg4, arg5) {
  this.Name = arg1;
  this.Range = arg2;
  this.IsSignature = arg3;
  this.Kind = arg4;
  this.Container = arg5;
}, _Types.Record);
exports.NavigateTo$002ENavigableItem = NavigateTo$002ENavigableItem;

function NavigateTo$$$getNavigableItems(parsedInput$$1) {
  const lastInLid = function lastInLid(lid$$12) {
    lastInLid: while (true) {
      if (lid$$12.tail != null) {
        if (lid$$12.tail.tail == null) {
          return lid$$12.head;
        } else {
          lid$$12 = lid$$12.tail;
          continue lastInLid;
        }
      } else {
        return null;
      }
    }
  };

  const formatLongIdent = function formatLongIdent(lid$$13) {
    return (0, _String.join)(".", ...(0, _List.map)(function mapping$$16(id$$21) {
      return (0, _ast.Ident$$get_idText)(id$$21);
    }, lid$$13));
  };

  const result = [];

  const addIdent = function addIdent(kind$$10, id$$22, isSignature, container) {
    if (!(0, _String.isNullOrEmpty)((0, _ast.Ident$$get_idText)(id$$22))) {
      const item = new NavigateTo$002ENavigableItem((0, _ast.Ident$$get_idText)(id$$22), (0, _ast.Ident$$get_idRange)(id$$22), isSignature, kind$$10, container);
      result.push(item);
    }
  };

  const addModule = function addModule(lid$$14, isSig, container$$1) {
    const matchValue$$10 = lastInLid(lid$$14);

    if (matchValue$$10 != null) {
      const id$$23 = matchValue$$10;
      addIdent(new NavigateTo$002ENavigableItemKind(0, "Module"), id$$23, isSig, container$$1);
    }
  };

  const addModuleAbbreviation = function addModuleAbbreviation(id$$24, isSig$$1, container$$2) {
    addIdent(new NavigateTo$002ENavigableItemKind(1, "ModuleAbbreviation"), id$$24, isSig$$1, container$$2);
  };

  const addExceptionRepr = function addExceptionRepr(_arg1$$6, isSig$$2, container$$3) {
    const id$$25 = _arg1$$6.fields[1].fields[1];
    addIdent(new NavigateTo$002ENavigableItemKind(2, "Exception"), id$$25, isSig$$2, container$$3);
    return new NavigateTo$002EContainer(new NavigateTo$002EContainerType(4, "Exception"), (0, _ast.Ident$$get_idText)(id$$25));
  };

  const addComponentInfo = function addComponentInfo(containerType, kind$$11, _arg2$$3, isSig$$3, container$$4) {
    const lid$$15 = _arg2$$3.fields[3];
    const matchValue$$11 = lastInLid(lid$$15);

    if (matchValue$$11 != null) {
      const id$$26 = matchValue$$11;
      addIdent(kind$$11, id$$26, isSig$$3, container$$4);
    }

    return new NavigateTo$002EContainer(containerType, formatLongIdent(lid$$15));
  };

  const addValSig = function addValSig(kind$$12, _arg3$$2, isSig$$4, container$$5) {
    const id$$27 = _arg3$$2.fields[1];
    addIdent(kind$$12, id$$27, isSig$$4, container$$5);
  };

  const addField = function addField(_arg4$$2, isSig$$5, container$$6) {
    const id$$28 = _arg4$$2.fields[2];

    if (id$$28 != null) {
      const id$$29 = id$$28;
      addIdent(new NavigateTo$002ENavigableItemKind(5, "Field"), id$$29, isSig$$5, container$$6);
    }
  };

  const addEnumCase = function addEnumCase(_arg5$$2) {
    return function (isSig$$6) {
      const id$$30 = _arg5$$2.fields[1];
      return (0, _Util.partialApply)(1, addIdent, [new NavigateTo$002ENavigableItemKind(9, "EnumCase"), id$$30, isSig$$6]);
    };
  };

  const addUnionCase = function addUnionCase(_arg6$$1, isSig$$7, container$$7) {
    const id$$31 = _arg6$$1.fields[1];
    addIdent(new NavigateTo$002ENavigableItemKind(10, "UnionCase"), id$$31, isSig$$7, container$$7);
  };

  const mapMemberKind = function mapMemberKind(mk) {
    var $target$$16;

    switch (mk.tag) {
      case 1:
        $target$$16 = 0;
        break;

      case 3:
      case 4:
      case 5:
        $target$$16 = 1;
        break;

      case 2:
        $target$$16 = 2;
        break;

      default:
        $target$$16 = 0;
    }

    switch ($target$$16) {
      case 0:
        {
          return new NavigateTo$002ENavigableItemKind(7, "Constructor");
        }

      case 1:
        {
          return new NavigateTo$002ENavigableItemKind(6, "Property");
        }

      case 2:
        {
          return new NavigateTo$002ENavigableItemKind(8, "Member");
        }
    }
  };

  const addBinding = function addBinding(_arg7, itemKind, container$$8) {
    const valData = _arg7.fields[6];
    const headPat = _arg7.fields[7];
    const memberFlagsOpt = valData.fields[0];
    let kind$$13;

    if (itemKind != null) {
      const x$$18 = itemKind;
      kind$$13 = x$$18;
    } else if (memberFlagsOpt != null) {
      const mf = memberFlagsOpt;
      kind$$13 = mapMemberKind(mf.MemberKind);
    } else {
      kind$$13 = new NavigateTo$002ENavigableItemKind(4, "ModuleValue");
    }

    var $target$$17, _access, id$$32, id$$33, id$$34;

    if (headPat.tag === 7) {
      if (headPat.fields[0].fields[0].tail != null) {
        if (headPat.fields[0].fields[0].tail.tail == null) {
          $target$$17 = 1;
          id$$33 = headPat.fields[0].fields[0].head;
        } else if (headPat.fields[0].fields[0].tail.tail.tail == null) {
          $target$$17 = 0;
          _access = headPat.fields[4];
          id$$32 = headPat.fields[0].fields[0].tail.head;
        } else {
          $target$$17 = 3;
        }
      } else {
        $target$$17 = 3;
      }
    } else if (headPat.tag === 2) {
      $target$$17 = 2;
      id$$34 = headPat.fields[1];
    } else {
      $target$$17 = 3;
    }

    switch ($target$$17) {
      case 0:
        {
          addIdent(kind$$13, id$$32, false, container$$8);
          break;
        }

      case 1:
        {
          addIdent(kind$$13, id$$33, false, container$$8);
          break;
        }

      case 2:
        {
          addIdent(kind$$13, id$$34, false, container$$8);
          break;
        }
    }
  };

  const addMember = function addMember(valSig, memberFlags, isSig$$8, container$$9) {
    const ctor = mapMemberKind(memberFlags.MemberKind);
    addValSig(ctor, valSig, isSig$$8, container$$9);
  };

  const walkSigFileInput = function walkSigFileInput(_arg8) {
    const moduleOrNamespaceList = _arg8.fields[4];
    const fileName = _arg8.fields[0];
    (0, _Seq.iterate)(function (item$$1) {
      walkSynModuleOrNamespaceSig(item$$1)(new NavigateTo$002EContainer(new NavigateTo$002EContainerType(0, "File"), fileName));
    }, moduleOrNamespaceList);
  };

  const walkSynModuleOrNamespaceSig = function walkSynModuleOrNamespaceSig(_arg9) {
    return function (container$$10) {
      const lid$$16 = _arg9.fields[0];
      const isModule$$2 = _arg9.fields[2];
      const decls$$11 = _arg9.fields[3];

      if (isModule$$2) {
        addModule(lid$$16, true, container$$10);
      }

      const container$$11 = new NavigateTo$002EContainer(isModule$$2 ? new NavigateTo$002EContainerType(2, "Module") : new NavigateTo$002EContainerType(1, "Namespace"), formatLongIdent(lid$$16));
      (0, _Seq.iterate)(function (decl$$4) {
        walkSynModuleSigDecl(decl$$4)(container$$11);
      }, decls$$11);
    };
  };

  const walkSynModuleSigDecl = function walkSynModuleSigDecl(decl$$5) {
    return function (container$$12) {
      var $target$$18;

      switch (decl$$5.tag) {
        case 4:
          $target$$18 = 1;
          break;

        case 7:
          $target$$18 = 2;
          break;

        case 1:
          $target$$18 = 3;
          break;

        case 3:
          $target$$18 = 4;
          break;

        case 2:
          $target$$18 = 5;
          break;

        case 6:
        case 5:
          $target$$18 = 6;
          break;

        default:
          $target$$18 = 0;
      }

      switch ($target$$18) {
        case 0:
          {
            const lhs = decl$$5.fields[0];
            const _range = decl$$5.fields[2];
            addModuleAbbreviation(lhs, true, container$$12);
            break;
          }

        case 1:
          {
            const representation = decl$$5.fields[0].fields[0];
            addExceptionRepr(representation, true, container$$12);
            break;
          }

        case 2:
          {
            const fragment = decl$$5.fields[0];
            walkSynModuleOrNamespaceSig(fragment)(container$$12);
            break;
          }

        case 3:
          {
            const nestedDecls = decl$$5.fields[2];
            const componentInfo = decl$$5.fields[0];
            const container$$13 = addComponentInfo(new NavigateTo$002EContainerType(2, "Module"), new NavigateTo$002ENavigableItemKind(0, "Module"), componentInfo, true, container$$12);
            (0, _Seq.iterate)(function (decl$$6) {
              walkSynModuleSigDecl(decl$$6)(container$$13);
            }, nestedDecls);
            break;
          }

        case 4:
          {
            const types = decl$$5.fields[0];
            (0, _Seq.iterate)(function (ty$$4) {
              walkSynTypeDefnSig(ty$$4)(container$$12);
            }, types);
            break;
          }

        case 5:
          {
            const valSig$$1 = decl$$5.fields[0];
            const _range$$1 = decl$$5.fields[1];
            addValSig(new NavigateTo$002ENavigableItemKind(4, "ModuleValue"), valSig$$1, true, container$$12);
            break;
          }
      }
    };
  };

  const walkSynTypeDefnSig = function walkSynTypeDefnSig(_arg10) {
    return function (container$$14) {
      const repr$$6 = _arg10.fields[1];
      const members$$6 = _arg10.fields[2];
      const componentInfo$$1 = _arg10.fields[0];
      const container$$15 = addComponentInfo(new NavigateTo$002EContainerType(3, "Type"), new NavigateTo$002ENavigableItemKind(3, "Type"), componentInfo$$1, true, container$$14);
      (0, _Seq.iterate)(function (m$$25) {
        walkSynMemberSig(m$$25)(container$$15);
      }, members$$6);

      switch (repr$$6.tag) {
        case 1:
          {
            const repr$$7 = repr$$6.fields[0];
            walkSynTypeDefnSimpleRepr(repr$$7)(true)(container$$15);
            break;
          }

        case 2:
          {
            break;
          }

        default:
          {
            const membersSigs = repr$$6.fields[1];
            (0, _Seq.iterate)(function (m$$26) {
              walkSynMemberSig(m$$26)(container$$15);
            }, membersSigs);
          }
      }
    };
  };

  const walkSynMemberSig = function walkSynMemberSig(synMemberSig) {
    return function (container$$16) {
      var $target$$19;

      switch (synMemberSig.tag) {
        case 3:
          $target$$19 = 1;
          break;

        case 4:
          $target$$19 = 2;
          break;

        case 2:
        case 1:
          $target$$19 = 3;
          break;

        default:
          $target$$19 = 0;
      }

      switch ($target$$19) {
        case 0:
          {
            const valSig$$2 = synMemberSig.fields[0];
            const memberFlags$$1 = synMemberSig.fields[1];
            addMember(valSig$$2, memberFlags$$1, true, container$$16);
            break;
          }

        case 1:
          {
            const synField = synMemberSig.fields[0];
            addField(synField, true, container$$16);
            break;
          }

        case 2:
          {
            const synTypeDef = synMemberSig.fields[0];
            walkSynTypeDefnSig(synTypeDef)(container$$16);
            break;
          }
      }
    };
  };

  const walkImplFileInpit = function walkImplFileInpit(_arg11) {
    const moduleOrNamespaceList$$1 = _arg11.fields[5];
    const fileName$$1 = _arg11.fields[0];
    const container$$17 = new NavigateTo$002EContainer(new NavigateTo$002EContainerType(0, "File"), fileName$$1);
    (0, _Seq.iterate)(function (item$$2) {
      walkSynModuleOrNamespace(item$$2)(container$$17);
    }, moduleOrNamespaceList$$1);
  };

  const walkSynModuleOrNamespace = function walkSynModuleOrNamespace(_arg12) {
    return function (container$$18) {
      const lid$$17 = _arg12.fields[0];
      const isModule$$3 = _arg12.fields[2];
      const decls$$12 = _arg12.fields[3];

      if (isModule$$3) {
        addModule(lid$$17, false, container$$18);
      }

      const container$$19 = new NavigateTo$002EContainer(isModule$$3 ? new NavigateTo$002EContainerType(2, "Module") : new NavigateTo$002EContainerType(1, "Namespace"), formatLongIdent(lid$$17));
      (0, _Seq.iterate)(function (decl$$7) {
        walkSynModuleDecl(decl$$7)(container$$19);
      }, decls$$12);
    };
  };

  const walkSynModuleDecl = function walkSynModuleDecl(decl$$8) {
    return function (container$$20) {
      var $target$$20;

      switch (decl$$8.tag) {
        case 2:
          $target$$20 = 1;
          break;

        case 0:
          $target$$20 = 2;
          break;

        case 9:
          $target$$20 = 3;
          break;

        case 1:
          $target$$20 = 4;
          break;

        case 4:
          $target$$20 = 5;
          break;

        case 7:
        case 3:
        case 8:
        case 6:
          $target$$20 = 6;
          break;

        default:
          $target$$20 = 0;
      }

      switch ($target$$20) {
        case 0:
          {
            const synMembers = decl$$8.fields[0].fields[1];
            const repr$$8 = decl$$8.fields[0].fields[0];
            const container$$21 = addExceptionRepr(repr$$8, false, container$$20);
            (0, _Seq.iterate)(function (m$$27) {
              walkSynMemberDefn(m$$27)(container$$21);
            }, synMembers);
            break;
          }

        case 1:
          {
            const bindings = decl$$8.fields[1];
            (0, _Seq.iterate)(function (binding) {
              addBinding(binding, null, container$$20);
            }, bindings);
            break;
          }

        case 2:
          {
            const lhs$$1 = decl$$8.fields[0];
            addModuleAbbreviation(lhs$$1, false, container$$20);
            break;
          }

        case 3:
          {
            const fragment$$1 = decl$$8.fields[0];
            walkSynModuleOrNamespace(fragment$$1)(container$$20);
            break;
          }

        case 4:
          {
            const modules$$4 = decl$$8.fields[2];
            const componentInfo$$2 = decl$$8.fields[0];
            const container$$22 = addComponentInfo(new NavigateTo$002EContainerType(2, "Module"), new NavigateTo$002ENavigableItemKind(0, "Module"), componentInfo$$2, false, container$$20);
            (0, _Seq.iterate)(function (m$$28) {
              walkSynModuleDecl(m$$28)(container$$22);
            }, modules$$4);
            break;
          }

        case 5:
          {
            const typeDefs = decl$$8.fields[0];
            const _range$$2 = decl$$8.fields[1];
            (0, _Seq.iterate)(function (t) {
              walkSynTypeDefn(t)(container$$20);
            }, typeDefs);
            break;
          }
      }
    };
  };

  const walkSynTypeDefn = function walkSynTypeDefn(_arg13) {
    return function (container$$23) {
      const representation$$1 = _arg13.fields[1];
      const members$$7 = _arg13.fields[2];
      const componentInfo$$3 = _arg13.fields[0];
      const container$$24 = addComponentInfo(new NavigateTo$002EContainerType(3, "Type"), new NavigateTo$002ENavigableItemKind(3, "Type"), componentInfo$$3, false, container$$23);
      walkSynTypeDefnRepr(representation$$1)(container$$24);
      (0, _Seq.iterate)(function (m$$29) {
        walkSynMemberDefn(m$$29)(container$$24);
      }, members$$7);
    };
  };

  const walkSynTypeDefnRepr = function walkSynTypeDefnRepr(typeDefnRepr) {
    return function (container$$25) {
      switch (typeDefnRepr.tag) {
        case 1:
          {
            const repr$$9 = typeDefnRepr.fields[0];
            walkSynTypeDefnSimpleRepr(repr$$9)(false)(container$$25);
            break;
          }

        case 2:
          {
            break;
          }

        default:
          {
            const members$$8 = typeDefnRepr.fields[1];
            (0, _Seq.iterate)(function (m$$30) {
              walkSynMemberDefn(m$$30)(container$$25);
            }, members$$8);
          }
      }
    };
  };

  const walkSynTypeDefnSimpleRepr = function walkSynTypeDefnSimpleRepr(repr$$10) {
    return function (isSig$$9) {
      return function (container$$26) {
        var $target$$21;

        switch (repr$$10.tag) {
          case 2:
            $target$$21 = 1;
            break;

          case 0:
            $target$$21 = 2;
            break;

          case 3:
          case 4:
          case 6:
          case 5:
          case 7:
            $target$$21 = 3;
            break;

          default:
            $target$$21 = 0;
        }

        switch ($target$$21) {
          case 0:
            {
              const enumCases = repr$$10.fields[0];
              (0, _Seq.iterate)(function (c) {
                addEnumCase(c)(isSig$$9)(container$$26);
              }, enumCases);
              break;
            }

          case 1:
            {
              const fields$$4 = repr$$10.fields[1];
              (0, _Seq.iterate)(function (f$$2) {
                addField(f$$2, isSig$$9, container$$26);
              }, fields$$4);
              break;
            }

          case 2:
            {
              const unionCases = repr$$10.fields[1];
              (0, _Seq.iterate)(function (uc) {
                addUnionCase(uc, isSig$$9, container$$26);
              }, unionCases);
              break;
            }
        }
      };
    };
  };

  const walkSynMemberDefn = function walkSynMemberDefn(memberDefn) {
    return function (container$$27) {
      var $target$$22;

      switch (memberDefn.tag) {
        case 10:
          $target$$22 = 1;
          break;

        case 6:
          $target$$22 = 2;
          break;

        case 1:
          $target$$22 = 3;
          break;

        case 9:
          $target$$22 = 4;
          break;

        case 8:
          $target$$22 = 5;
          break;

        case 4:
          $target$$22 = 6;
          break;

        case 0:
        case 3:
        case 7:
        case 2:
          $target$$22 = 7;
          break;

        default:
          $target$$22 = 0;
      }

      switch ($target$$22) {
        case 0:
          {
            const synValSig = memberDefn.fields[0];
            const memberFlags$$2 = memberDefn.fields[1];
            addMember(synValSig, memberFlags$$2, false, container$$27);
            break;
          }

        case 1:
          {
            const id$$35 = memberDefn.fields[2];
            addIdent(new NavigateTo$002ENavigableItemKind(6, "Property"), id$$35, false, container$$27);
            break;
          }

        case 2:
          {
            const members$$9 = memberDefn.fields[1];

            if (members$$9 == null) {} else {
              const members$$10 = members$$9;
              (0, _Seq.iterate)(function (m$$31) {
                walkSynMemberDefn(m$$31)(container$$27);
              }, members$$10);
            }

            break;
          }

        case 3:
          {
            const binding$$1 = memberDefn.fields[0];
            addBinding(binding$$1, null, container$$27);
            break;
          }

        case 4:
          {
            const typeDef = memberDefn.fields[0];
            walkSynTypeDefn(typeDef)(container$$27);
            break;
          }

        case 5:
          {
            const field = memberDefn.fields[0];
            addField(field, false, container$$27);
            break;
          }

        case 6:
          {
            const bindings$$1 = memberDefn.fields[0];
            (0, _List.iterate)(function action(binding$$2) {
              addBinding(binding$$2, new NavigateTo$002ENavigableItemKind(5, "Field"), container$$27);
            }, bindings$$1);
            break;
          }
      }
    };
  };

  if (parsedInput$$1.tag === 0) {
    const input$$1 = parsedInput$$1.fields[0];
    walkImplFileInpit(input$$1);
  } else {
    const input = parsedInput$$1.fields[0];
    walkSigFileInput(input);
  }

  return result.slice();
}