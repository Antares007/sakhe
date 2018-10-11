"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FSharpEntity$002ETryGetFullName = FSharpEntity$002ETryGetFullName;
exports.FSharpEntity$002ETryGetFullDisplayName = FSharpEntity$002ETryGetFullDisplayName;
exports.FSharpEntity$002ETryGetFullCompiledName = FSharpEntity$002ETryGetFullCompiledName;
exports.FSharpEntity$002Eget_PublicNestedEntities = FSharpEntity$002Eget_PublicNestedEntities;
exports.FSharpEntity$002Eget_TryGetMembersFunctionsAndValues = FSharpEntity$002Eget_TryGetMembersFunctionsAndValues;
exports.Extensions$$$isOperator = Extensions$$$isOperator;
exports.FSharpMemberOrFunctionOrValue$002Eget_FullTypeSafe = FSharpMemberOrFunctionOrValue$002Eget_FullTypeSafe;
exports.FSharpMemberOrFunctionOrValue$002ETryGetFullDisplayName = FSharpMemberOrFunctionOrValue$002ETryGetFullDisplayName;
exports.FSharpMemberOrFunctionOrValue$002ETryGetFullCompiledOperatorNameIdents = FSharpMemberOrFunctionOrValue$002ETryGetFullCompiledOperatorNameIdents;
exports.FSharpAssemblySignature$002ETryGetEntities = FSharpAssemblySignature$002ETryGetEntities;
exports.Parent$$$get_Empty = Parent$$$get_Empty;
exports.Parent$$$RewriteParentIdents = Parent$$$RewriteParentIdents;
exports.Parent$$FixParentModuleSuffix$$Z6B4C8463 = Parent$$FixParentModuleSuffix$$Z6B4C8463;
exports.Parent$$FormatEntityFullName$$32DBD857 = Parent$$FormatEntityFullName$$32DBD857;
exports.EntityCache$$$$002Ector = EntityCache$$$$002Ector;
exports.EntityCache$$Clear = EntityCache$$Clear;
exports.EntityCache$$Locking$$6E023EB3 = EntityCache$$Locking$$6E023EB3;
exports.EntityModule$$$getRelativeNamespace = EntityModule$$$getRelativeNamespace;
exports.EntityModule$$$cutAutoOpenModules = EntityModule$$$cutAutoOpenModules;
exports.EntityModule$$$tryCreate = EntityModule$$$tryCreate;
exports.ParsedInput$$$$007CSequentials$007C_$007C = ParsedInput$$$$007CSequentials$007C_$007C;
exports.ParsedInput$$$$007CConstructorPats$007C = ParsedInput$$$$007CConstructorPats$007C;
exports.ParsedInput$$$getLongIdents = ParsedInput$$$getLongIdents;
exports.ParsedInput$$$getLongIdentAt = ParsedInput$$$getLongIdentAt;
exports.ParsedInput$$$tryFindNearestPointAndModules = ParsedInput$$$tryFindNearestPointAndModules;
exports.ParsedInput$$$findBestPositionToInsertOpenDeclaration = ParsedInput$$$findBestPositionToInsertOpenDeclaration;
exports.ParsedInput$$$tryFindInsertionContext = ParsedInput$$$tryFindInsertionContext;
exports.ParsedInput$$$adjustInsertionPoint = ParsedInput$$$adjustInsertionPoint;
exports.ParsedInput$$$findNearestPointToInsertOpenDeclaration = ParsedInput$$$findNearestPointToInsertOpenDeclaration;
exports.ParsedInput$002EScope = exports.OpenStatementInsertionPoint = exports.Module = exports.InsertContext = exports.ScopeKind = exports.Entity = exports.EntityCache = exports.AssemblyContentCacheEntry = exports.Parent = exports.AssemblyContentType = exports.AssemblySymbol = exports.LookupType = exports.MaybeUnresolvedIdent = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Symbols = require("../symbols/Symbols");

var _String = require("../fable-core.2.0.3/String");

var _Option = require("../fable-core.2.0.3/Option");

var _illib = require("../absil/illib");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Char = require("../fable-core.2.0.3/Char");

var _Array = require("../fable-core.2.0.3/Array");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

var _Util = require("../fable-core.2.0.3/Util");

var _List = require("../fable-core.2.0.3/List");

var _Map = require("../fable-core.2.0.3/Map");

var _ast = require("../fsharp/ast");

var _range = require("../fsharp/range");

var _SymbolHelpers = require("../symbols/SymbolHelpers");

const MaybeUnresolvedIdent = (0, _Types.declare)(function MaybeUnresolvedIdent(arg1, arg2) {
  this.Ident = arg1;
  this.Resolved = arg2;
}, _Types.Record);
exports.MaybeUnresolvedIdent = MaybeUnresolvedIdent;

function FSharpEntity$002ETryGetFullName(x) {
  try {
    return (0, _Symbols.FSharpEntity$$get_TryFullName)(x);
  } catch (matchValue) {
    try {
      return (0, _String.join)(".", (0, _Symbols.FSharpEntity$$get_AccessPath)(x), (0, _Symbols.FSharpEntity$$get_DisplayName)(x));
    } catch (matchValue$$1) {
      return null;
    }
  }
}

function FSharpEntity$002ETryGetFullDisplayName(x$$1) {
  var fullName$$2, matchValue$$2, shortDisplayName, shortDisplayName$$1;
  const fullName$$1 = (0, _Option.defaultArg)(FSharpEntity$002ETryGetFullName(x$$1), null, function mapping(fullName) {
    return fullName.split(".");
  });
  const res = (0, _Option.defaultArg)(fullName$$1 == null ? null : (fullName$$2 = fullName$$1, (matchValue$$2 = (0, _illib.Option$$$attempt)(function () {
    return (0, _Symbols.FSharpEntity$$get_DisplayName)(x$$1);
  }), matchValue$$2 != null ? (shortDisplayName = matchValue$$2, !(shortDisplayName.indexOf(".") >= 0)) ? (shortDisplayName$$1 = matchValue$$2, (0, _illib.Array$$$replace)(fullName$$2.length - 1, shortDisplayName$$1, fullName$$2)) : fullName$$2 : fullName$$2)), null, function mapping$$1(fullDisplayName) {
    return (0, _String.join)(".", ...fullDisplayName);
  });
  return res;
}

function FSharpEntity$002ETryGetFullCompiledName(x$$2) {
  var fullName$$5, matchValue$$3, shortCompiledName, shortCompiledName$$1;
  const fullName$$4 = (0, _Option.defaultArg)(FSharpEntity$002ETryGetFullName(x$$2), null, function mapping$$2(fullName$$3) {
    return fullName$$3.split(".");
  });
  const res$$1 = (0, _Option.defaultArg)(fullName$$4 == null ? null : (fullName$$5 = fullName$$4, (matchValue$$3 = (0, _illib.Option$$$attempt)(function () {
    return (0, _Symbols.FSharpEntity$$get_CompiledName)(x$$2);
  }), matchValue$$3 != null ? (shortCompiledName = matchValue$$3, !(shortCompiledName.indexOf(".") >= 0)) ? (shortCompiledName$$1 = matchValue$$3, (0, _illib.Array$$$replace)(fullName$$5.length - 1, shortCompiledName$$1, fullName$$5)) : fullName$$5 : fullName$$5)), null, function mapping$$3(fullDisplayName$$1) {
    return (0, _String.join)(".", ...fullDisplayName$$1);
  });
  return res$$1;
}

function FSharpEntity$002Eget_PublicNestedEntities(x$$3) {
  return (0, _Seq.filter)(function predicate(entity) {
    return (0, _Symbols.FSharpAccessibility$$get_IsPublic)((0, _Symbols.FSharpEntity$$get_Accessibility)(entity));
  }, (0, _Symbols.FSharpEntity$$get_NestedEntities)(x$$3));
}

function FSharpEntity$002Eget_TryGetMembersFunctionsAndValues(x$$4) {
  try {
    return (0, _Symbols.FSharpEntity$$get_MembersFunctionsAndValues)(x$$4);
  } catch (matchValue$$4) {
    return [];
  }
}

function Extensions$$$isOperator(name) {
  if (((0, _String.startsWith)(name, "( ", 4) ? (0, _String.endsWith)(name, " )", 4) : false) ? name.length > 4 : false) {
    return (0, _Seq.forAll)(function predicate$$1(c) {
      if (c !== " ") {
        return !(0, _Char.isLetter)(c);
      } else {
        return false;
      }
    }, name.substr(2, name.length - 4).split(""));
  } else {
    return false;
  }
}

function FSharpMemberOrFunctionOrValue$002Eget_FullTypeSafe(x$$7) {
  return (0, _illib.Option$$$attempt)(function () {
    return (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_FullType)(x$$7);
  });
}

function FSharpMemberOrFunctionOrValue$002ETryGetFullDisplayName(x$$8) {
  var fullName$$7, matchValue$$5, shortDisplayName$$2, shortDisplayName$$3;
  const fullName$$6 = (0, _illib.Option$$$attempt)(function () {
    return (0, _Symbols.FSharpSymbol$$get_FullName)(x$$8).split(".");
  });
  return (0, _Option.defaultArg)(fullName$$6 == null ? null : (fullName$$7 = fullName$$6, (matchValue$$5 = (0, _illib.Option$$$attempt)(function () {
    return (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DisplayName)(x$$8);
  }), matchValue$$5 != null ? (shortDisplayName$$2 = matchValue$$5, !(shortDisplayName$$2.indexOf(".") >= 0)) ? (shortDisplayName$$3 = matchValue$$5, (0, _illib.Array$$$replace)(fullName$$7.length - 1, shortDisplayName$$3, fullName$$7)) : fullName$$7 : fullName$$7)), null, function mapping$$4(fullDisplayName$$2) {
    return (0, _String.join)(".", ...fullDisplayName$$2);
  });
}

function FSharpMemberOrFunctionOrValue$002ETryGetFullCompiledOperatorNameIdents(x$$9) {
  if (Extensions$$$isOperator((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DisplayName)(x$$9)) ? (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DisplayName)(x$$9) !== (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(x$$9) : false) {
    return (0, _Option.defaultArg)((0, _Option.defaultArg)((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_DeclaringEntity)(x$$9), null, function binder(e) {
      return FSharpEntity$002ETryGetFullName(e);
    }), null, function mapping$$5(enclosingEntityFullName) {
      return (0, _Array.append)(enclosingEntityFullName.split("."), [(0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CompiledName)(x$$9)], Array);
    });
  } else {
    return null;
  }
}

function FSharpAssemblySignature$002ETryGetEntities(x$$10) {
  try {
    return (0, _Symbols.FSharpAssemblySignature$$get_Entities)(x$$10);
  } catch (matchValue$$6) {
    return (0, _Seq.empty)();
  }
}

const LookupType = (0, _Types.declare)(function LookupType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.LookupType = LookupType;
const AssemblySymbol = (0, _Types.declare)(function AssemblySymbol(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this.FullName = arg1;
  this.CleanedIdents = arg2;
  this.Namespace = arg3;
  this.NearestRequireQualifiedAccessParent = arg4;
  this.TopRequireQualifiedAccessParent = arg5;
  this.AutoOpenParent = arg6;
  this.Symbol = arg7;
  this.Kind = arg8;
  this.UnresolvedSymbol = arg9;
}, _Types.Record);
exports.AssemblySymbol = AssemblySymbol;

AssemblySymbol.prototype.toString = function () {
  const x$$11 = this;
  return (0, _String.toText)((0, _String.printf)("%A"))(x$$11);
};

const AssemblyContentType = (0, _Types.declare)(function AssemblyContentType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AssemblyContentType = AssemblyContentType;
const Parent = (0, _Types.declare)(function Parent(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Namespace = arg1;
  this.ThisRequiresQualifiedAccess = arg2;
  this.TopRequiresQualifiedAccess = arg3;
  this.AutoOpen = arg4;
  this.WithModuleSuffix = arg5;
  this.IsModule = arg6;
}, _Types.Record);
exports.Parent = Parent;

function Parent$$$get_Empty() {
  return new Parent(null, function (_arg4) {
    return null;
  }, function (_arg5) {
    return null;
  }, null, null, true);
}

function Parent$$$RewriteParentIdents(parentIdents, idents) {
  var p;
  var $target$$33, p$$1;

  if (parentIdents != null) {
    if (p = parentIdents, p.length <= idents.length) {
      $target$$33 = 0;
      p$$1 = parentIdents;
    } else {
      $target$$33 = 1;
    }
  } else {
    $target$$33 = 1;
  }

  switch ($target$$33) {
    case 0:
      {
        for (let i = 0; i <= p$$1.length - 1; i++) {
          idents[i] = p$$1[i];
        }

        break;
      }
  }

  return idents;
}

function Parent$$FixParentModuleSuffix$$Z6B4C8463(x$$12, idents$$1) {
  return Parent$$$RewriteParentIdents(x$$12.WithModuleSuffix, idents$$1);
}

function Parent$$FormatEntityFullName$$32DBD857(__, entity$$1) {
  const removeGenericParamsCount = function removeGenericParamsCount(idents$$2) {
    return (0, _Array.map)(function mapping$$6(ident) {
      if (ident.length > 0 ? (0, _Char.isDigit)(ident[ident.length - 1]) : false) {
        const lastBacktickIndex = ident.lastIndexOf("`") | 0;

        if (lastBacktickIndex !== -1) {
          return ident.substr(0, lastBacktickIndex);
        } else {
          return ident;
        }
      } else {
        return ident;
      }
    }, idents$$2, Array);
  };

  const removeModuleSuffix = function removeModuleSuffix(idents$$3) {
    if ((0, _Symbols.FSharpEntity$$get_IsFSharpModule)(entity$$1) ? idents$$3.length > 0 : false) {
      const lastIdent = idents$$3[idents$$3.length - 1];

      if (lastIdent !== (0, _Symbols.FSharpEntity$$get_DisplayName)(entity$$1)) {
        return (0, _illib.Array$$$replace)(idents$$3.length - 1, (0, _Symbols.FSharpEntity$$get_DisplayName)(entity$$1), idents$$3);
      } else {
        return idents$$3;
      }
    } else {
      return idents$$3;
    }
  };

  return (0, _Option.defaultArg)(FSharpEntity$002ETryGetFullName(entity$$1), null, function binder$$1(fullName$$8) {
    return (0, _Option.defaultArg)(FSharpEntity$002ETryGetFullDisplayName(entity$$1), null, function mapping$$7(fullDisplayName$$3) {
      return [fullName$$8, removeModuleSuffix(removeGenericParamsCount(fullDisplayName$$3.split(".")))];
    });
  });
}

const AssemblyContentCacheEntry = (0, _Types.declare)(function AssemblyContentCacheEntry(arg1, arg2, arg3) {
  this.FileWriteTime = arg1;
  this.ContentType = arg2;
  this.Symbols = arg3;
}, _Types.Record);
exports.AssemblyContentCacheEntry = AssemblyContentCacheEntry;
const EntityCache = (0, _Types.declare)(function EntityCache() {
  const $this$$1 = this;
  $this$$1.dic = new Map([]);
});
exports.EntityCache = EntityCache;

function EntityCache$$$$002Ector() {
  return this != null ? EntityCache.call(this) : new EntityCache();
}

function EntityCache$$Clear(__$$1) {
  __$$1.dic.clear();
}

function EntityCache$$Locking$$6E023EB3(x$$13, f) {
  return (0, _FSharp.Operators$$$Lock)(x$$13.dic, function () {
    return f(x$$13);
  });
}

EntityCache.prototype.TryGet = function (assembly) {
  const __$$2 = this;
  const matchValue$$7 = (0, _Util.tryGetValue)(__$$2.dic, assembly, null);
  return matchValue$$7[0] ? matchValue$$7[1] : null;
};

EntityCache.prototype.Set = function (assembly$$1, entry$$1) {
  const __$$3 = this;

  __$$3.dic.set(assembly$$1, entry$$1);
};

const Entity = (0, _Types.declare)(function Entity(arg1, arg2, arg3, arg4, arg5) {
  this.FullRelativeName = arg1;
  this.Qualifier = arg2;
  this.Namespace = arg3;
  this.Name = arg4;
  this.LastIdent = arg5;
}, _Types.Record);
exports.Entity = Entity;

Entity.prototype.toString = function () {
  const x$$14 = this;
  return (0, _String.toText)((0, _String.printf)("%A"))(x$$14);
};

function EntityModule$$$getRelativeNamespace(targetNs, sourceNs) {
  const loop = function loop(index$$4) {
    loop: while (true) {
      if (index$$4 > targetNs.length - 1) {
        return sourceNs.slice(index$$4, sourceNs.length);
      } else if (index$$4 > sourceNs.length - 1) {
        return sourceNs;
      } else if (targetNs[index$$4] === sourceNs[index$$4]) {
        index$$4 = index$$4 + 1;
        continue loop;
      } else {
        return sourceNs.slice(index$$4, sourceNs.length);
      }
    }
  };

  if (sourceNs.length === 0 ? true : targetNs.length === 0) {
    return sourceNs;
  } else {
    return loop(0);
  }
}

function EntityModule$$$cutAutoOpenModules(autoOpenParent, candidateNs) {
  var parent, parent$$1;
  const nsCount = (autoOpenParent != null ? (parent = autoOpenParent, parent.length > 0) ? (parent$$1 = autoOpenParent, (0, _Util.min)(_Util.comparePrimitives, parent$$1.length - 1, candidateNs.length)) : candidateNs.length : candidateNs.length) | 0;
  return candidateNs.slice(0, nsCount - 1 + 1);
}

function EntityModule$$$tryCreate(targetNamespace, targetScope, partiallyQualifiedName, requiresQualifiedAccessParent, autoOpenParent$$1, candidateNamespace, candidate) {
  if (!(0, _Array.equalsWith)(_Util.comparePrimitives, candidate, null) ? candidate.length === 0 : false) {
    return [];
  } else {
    return (0, _Array.choose)(function chooser(parts) {
      const parts$$1 = (0, _Array.map)(function mapping$$8(x$$17) {
        return x$$17.Ident;
      }, parts, Array);

      if (!(0, _illib.Array$$$endsWith)(parts$$1, candidate)) {
        return null;
      } else {
        const identCount = parts$$1.length | 0;
        let patternInput;
        let openableNsCount;

        if (requiresQualifiedAccessParent == null) {
          openableNsCount = candidate.length;
        } else {
          const parent$$2 = requiresQualifiedAccessParent;
          openableNsCount = (0, _Util.min)(_Util.comparePrimitives, parent$$2.length, candidate.length);
        }

        patternInput = [candidate.slice(0, openableNsCount - 2 + 1), candidate.slice(openableNsCount - 1, candidate.length)];
        const openableNs = EntityModule$$$cutAutoOpenModules(autoOpenParent$$1, patternInput[0]);

        const getRelativeNs = function getRelativeNs(ns) {
          var targetNs$$1, candidateNs$$1;
          const matchValue$$8 = [targetNamespace, candidateNamespace];
          var $target$$36, candidateNs$$2, targetNs$$2;

          if (matchValue$$8[0] != null) {
            if (matchValue$$8[1] != null) {
              if (targetNs$$1 = matchValue$$8[0], (candidateNs$$1 = matchValue$$8[1], (0, _Array.equalsWith)(_Util.comparePrimitives, candidateNs$$1, targetNs$$1))) {
                $target$$36 = 0;
                candidateNs$$2 = matchValue$$8[1];
                targetNs$$2 = matchValue$$8[0];
              } else {
                $target$$36 = 1;
              }
            } else {
              $target$$36 = 1;
            }
          } else {
            $target$$36 = 1;
          }

          switch ($target$$36) {
            case 0:
              {
                return EntityModule$$$getRelativeNamespace(targetScope, ns);
              }

            case 1:
              {
                if (matchValue$$8[0] == null) {
                  return EntityModule$$$getRelativeNamespace(targetScope, ns);
                } else {
                  return ns;
                }
              }
          }
        };

        const relativeNs = getRelativeNs(openableNs);
        const matchValue$$9 = [relativeNs, patternInput[1]];
        var $target$$37;

        if (!(0, _Array.equalsWith)(_Util.comparePrimitives, matchValue$$9[0], null) ? matchValue$$9[0].length === 0 : false) {
          if (!(0, _Array.equalsWith)(_Util.comparePrimitives, matchValue$$9[1], null) ? matchValue$$9[1].length === 0 : false) {
            $target$$37 = 0;
          } else if (!(0, _Array.equalsWith)(_Util.comparePrimitives, matchValue$$9[1], null) ? matchValue$$9[1].length === 1 : false) {
            $target$$37 = 1;
          } else {
            $target$$37 = 2;
          }
        } else {
          $target$$37 = 2;
        }

        switch ($target$$37) {
          case 0:
            {
              return null;
            }

          case 1:
            {
              return null;
            }

          case 2:
            {
              const fullRelativeName = (0, _Array.append)(getRelativeNs(patternInput[0]), patternInput[1], Array);
              const ns$$1 = (!(0, _Array.equalsWith)(_Util.comparePrimitives, relativeNs, null) ? relativeNs.length === 0 : false) ? null : (identCount > 1 ? relativeNs.length >= identCount : false) ? (0, _String.join)(".", ...relativeNs.slice(0, relativeNs.length - identCount + 1)) : (0, _String.join)(".", ...relativeNs);
              const qualifier = (fullRelativeName.length > 1 ? fullRelativeName.length >= identCount : false) ? fullRelativeName.slice(0, fullRelativeName.length - identCount + 1) : fullRelativeName;
              return new Entity((0, _String.join)(".", ...fullRelativeName), (0, _String.join)(".", ...qualifier), ns$$1, (!(0, _Array.equalsWith)(_Util.comparePrimitives, patternInput[1], null) ? patternInput[1].length === 1 : false) ? "" : (0, _String.join)(".", ...patternInput[1]), (0, _Option.defaultArg)((0, _Array.tryLast)(patternInput[1]), ""));
            }
        }
      }
    }, (0, _illib.Array$$$heads)(partiallyQualifiedName).filter(function predicate$$3(x$$15) {
      return x$$15.some(function predicate$$2(x$$16) {
        return !x$$16.Resolved;
      });
    }), Array);
  }
}

const ScopeKind = (0, _Types.declare)(function ScopeKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ScopeKind = ScopeKind;

ScopeKind.prototype.toString = function () {
  const x$$18 = this;
  return (0, _String.toText)((0, _String.printf)("%A"))(x$$18);
};

const InsertContext = (0, _Types.declare)(function InsertContext(arg1, arg2) {
  this.ScopeKind = arg1;
  this.Pos = arg2;
}, _Types.Record);
exports.InsertContext = InsertContext;
const Module = (0, _Types.declare)(function Module(arg1, arg2) {
  this.Idents = arg1;
  this.Range = arg2;
}, _Types.Record);
exports.Module = Module;
const OpenStatementInsertionPoint = (0, _Types.declare)(function OpenStatementInsertionPoint(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.OpenStatementInsertionPoint = OpenStatementInsertionPoint;

function ParsedInput$$$$007CSequentials$007C_$007C(_arg1$$2) {
  var $target$$38, e$$1, es;

  if (_arg1$$2.tag === 26) {
    const activePatternResult61272 = ParsedInput$$$$007CSequentials$007C_$007C(_arg1$$2.fields[3]);

    if (activePatternResult61272 != null) {
      $target$$38 = 0;
      e$$1 = _arg1$$2.fields[2];
      es = activePatternResult61272;
    } else {
      $target$$38 = 1;
    }
  } else {
    $target$$38 = 1;
  }

  switch ($target$$38) {
    case 0:
      {
        return (0, _Types.L)(e$$1, es);
      }

    case 1:
      {
        if (_arg1$$2.tag === 26) {
          const e2 = _arg1$$2.fields[3];
          const e1 = _arg1$$2.fields[2];
          return (0, _Types.L)(e1, (0, _Types.L)(e2, (0, _Types.L)()));
        } else {
          return null;
        }
      }
  }
}

function ParsedInput$$$$007CConstructorPats$007C(_arg1$$3) {
  if (_arg1$$3.tag === 1) {
    const xs = _arg1$$3.fields[0];
    return (0, _List.map)(function (tuple) {
      return tuple[1];
    }, xs);
  } else {
    const ps = _arg1$$3.fields[0];
    return ps;
  }
}

function ParsedInput$$$getLongIdents(input) {
  const identsByEndPos = (0, _Map.createMutable)([], {
    Compare($x$$20, $y$$21) {
      return $x$$20.CompareTo($y$$21);
    }

  });

  const addLongIdent = function addLongIdent(longIdent) {
    (0, _Seq.iterate)(function (ident$$1) {
      var copyOfStruct;
      identsByEndPos.set((copyOfStruct = (0, _ast.Ident$$get_idRange)(ident$$1), (0, _range.range$$get_End)(copyOfStruct)), longIdent);
    }, longIdent);
  };

  const addLongIdentWithDots = function addLongIdentWithDots(_arg1$$4) {
    var copyOfStruct$$1, copyOfStruct$$2;
    const value$$4 = _arg1$$4;
    const longIdent$$1 = value$$4.fields[0];
    const lids = value$$4.fields[1];

    if (longIdent$$1.tail != null) {
      if (longIdent$$1.tail.tail == null) {
        identsByEndPos.set((copyOfStruct$$1 = (0, _ast.LongIdentWithDots$$get_Range)(value$$4), (0, _range.range$$get_End)(copyOfStruct$$1)), longIdent$$1);
      } else {
        (0, _Seq.iterate)(function (dotRange) {
          identsByEndPos.set((0, _range.mkPos)((0, _range.range$$get_EndLine)(dotRange), (0, _range.range$$get_EndColumn)(dotRange) - 1), longIdent$$1);
        }, lids);
        identsByEndPos.set((copyOfStruct$$2 = (0, _ast.LongIdentWithDots$$get_Range)(value$$4), (0, _range.range$$get_End)(copyOfStruct$$2)), longIdent$$1);
      }
    }
  };

  const addIdent = function addIdent(ident$$2) {
    var copyOfStruct$$3;
    identsByEndPos.set((copyOfStruct$$3 = (0, _ast.Ident$$get_idRange)(ident$$2), (0, _range.range$$get_End)(copyOfStruct$$3)), (0, _Types.L)(ident$$2, (0, _Types.L)()));
  };

  const walkImplFileInput = function walkImplFileInput(_arg2$$2) {
    const moduleOrNamespaceList = _arg2$$2.fields[5];
    (0, _List.iterate)(walkSynModuleOrNamespace, moduleOrNamespaceList);
  };

  const walkSynModuleOrNamespace = function walkSynModuleOrNamespace(_arg3$$1) {
    const decls = _arg3$$1.fields[3];
    const attrs = _arg3$$1.fields[5];
    (0, _List.iterate)(walkAttribute, attrs);
    (0, _List.iterate)(walkSynModuleDecl, decls);
  };

  const walkAttribute = function walkAttribute(attr) {
    addLongIdentWithDots(attr.TypeName);
    walkExpr(attr.ArgExpr);
  };

  const walkTyparDecl = function walkTyparDecl(_arg4$$1) {
    const typar = _arg4$$1.fields[1];
    const attrs$$1 = _arg4$$1.fields[0];
    (0, _List.iterate)(walkAttribute, attrs$$1);
    walkTypar(typar);
  };

  const walkTypeConstraint = function walkTypeConstraint(_arg15) {
    var $target$$39, t, t$$1, ty, t$$2, ts;

    switch (_arg15.tag) {
      case 1:
        $target$$39 = 0;
        t = _arg15.fields[0];
        break;

      case 2:
        $target$$39 = 0;
        t = _arg15.fields[0];
        break;

      case 3:
        $target$$39 = 0;
        t = _arg15.fields[0];
        break;

      case 4:
        $target$$39 = 0;
        t = _arg15.fields[0];
        break;

      case 5:
        $target$$39 = 0;
        t = _arg15.fields[0];
        break;

      case 6:
        $target$$39 = 1;
        t$$1 = _arg15.fields[0];
        ty = _arg15.fields[1];
        break;

      case 7:
        $target$$39 = 1;
        t$$1 = _arg15.fields[0];
        ty = _arg15.fields[1];
        break;

      case 9:
        $target$$39 = 2;
        t$$2 = _arg15.fields[0];
        ts = _arg15.fields[1];
        break;

      case 10:
        $target$$39 = 2;
        t$$2 = _arg15.fields[0];
        ts = _arg15.fields[1];
        break;

      case 8:
        $target$$39 = 3;
        break;

      default:
        $target$$39 = 0;
        t = _arg15.fields[0];
    }

    switch ($target$$39) {
      case 0:
        {
          walkTypar(t);
          break;
        }

      case 1:
        {
          walkTypar(t$$1);
          walkType(ty);
          break;
        }

      case 2:
        {
          walkTypar(t$$2);
          (0, _List.iterate)(walkType, ts);
          break;
        }

      case 3:
        {
          const ts$$1 = _arg15.fields[0];
          const sign = _arg15.fields[1];
          (0, _List.iterate)(walkType, ts$$1);
          walkMemberSig(sign);
          break;
        }
    }
  };

  const walkPat = function walkPat(_arg16) {
    var $target$$40, pats;

    switch (_arg16.tag) {
      case 8:
        $target$$40 = 0;
        pats = _arg16.fields[0];
        break;

      case 11:
        $target$$40 = 0;
        pats = _arg16.fields[1];
        break;

      case 6:
        $target$$40 = 0;
        pats = _arg16.fields[0];
        break;

      case 2:
        $target$$40 = 1;
        break;

      case 3:
        $target$$40 = 2;
        break;

      case 4:
        $target$$40 = 3;
        break;

      case 5:
        $target$$40 = 4;
        break;

      case 7:
        $target$$40 = 5;
        break;

      case 10:
        $target$$40 = 6;
        break;

      case 15:
        $target$$40 = 7;
        break;

      case 16:
        $target$$40 = 8;
        break;

      default:
        $target$$40 = 9;
    }

    switch ($target$$40) {
      case 0:
        {
          (0, _List.iterate)(walkPat, pats);
          break;
        }

      case 1:
        {
          const pat = _arg16.fields[0];
          const ident$$3 = _arg16.fields[1];
          walkPat(pat);
          addIdent(ident$$3);
          break;
        }

      case 2:
        {
          const t$$3 = _arg16.fields[1];
          const pat$$1 = _arg16.fields[0];
          walkPat(pat$$1);
          walkType(t$$3);
          break;
        }

      case 3:
        {
          const pat$$2 = _arg16.fields[0];
          const attrs$$2 = _arg16.fields[1];
          walkPat(pat$$2);
          (0, _List.iterate)(walkAttribute, attrs$$2);
          break;
        }

      case 4:
        {
          const pat2 = _arg16.fields[1];
          const pat1 = _arg16.fields[0];
          (0, _List.iterate)(walkPat, (0, _Types.L)(pat1, (0, _Types.L)(pat2, (0, _Types.L)())));
          break;
        }

      case 5:
        {
          const typars = _arg16.fields[2];
          const pats$$1 = ParsedInput$$$$007CConstructorPats$007C(_arg16.fields[3]);
          const ident$$4 = _arg16.fields[0];
          addLongIdentWithDots(ident$$4);
          (0, _Seq.iterate)(function action$$1(_arg1$$5) {
            const typars$$1 = _arg1$$5.fields[0];
            const constraints = _arg1$$5.fields[2];
            (0, _List.iterate)(walkTyparDecl, typars$$1);
            (0, _List.iterate)(walkTypeConstraint, constraints);
          }, (0, _Option.defaultArg)(typars, [], function ($x$$22) {
            return [$x$$22];
          }));
          (0, _List.iterate)(walkPat, pats$$1);
          break;
        }

      case 6:
        {
          const pat$$3 = _arg16.fields[0];
          walkPat(pat$$3);
          break;
        }

      case 7:
        {
          const t$$4 = _arg16.fields[0];
          walkType(t$$4);
          break;
        }

      case 8:
        {
          const e$$2 = _arg16.fields[0];
          walkExpr(e$$2);
          break;
        }
    }
  };

  const walkTypar = function walkTypar(_arg5$$1) {};

  const walkBinding = function walkBinding(_arg6$$1) {
    const returnInfo = _arg6$$1.fields[8];
    const pat$$4 = _arg6$$1.fields[7];
    const e$$3 = _arg6$$1.fields[9];
    const attrs$$3 = _arg6$$1.fields[4];
    (0, _List.iterate)(walkAttribute, attrs$$3);
    walkPat(pat$$4);
    walkExpr(e$$3);
    (0, _Seq.iterate)(function action$$2(_arg2$$3) {
      const t$$5 = _arg2$$3.fields[0];
      walkType(t$$5);
    }, (0, _Option.defaultArg)(returnInfo, [], function ($x$$23) {
      return [$x$$23];
    }));
  };

  const walkInterfaceImpl = function walkInterfaceImpl(_arg7) {
    const bindings = _arg7.fields[1];
    (0, _List.iterate)(walkBinding, bindings);
  };

  const walkIndexerArg = function walkIndexerArg(_arg17) {
    if (_arg17.tag === 0) {
      const e2$$1 = _arg17.fields[1];
      const e1$$1 = _arg17.fields[0];
      (0, _List.iterate)(walkExpr, (0, _Types.L)(e1$$1, (0, _Types.L)(e2$$1, (0, _Types.L)())));
    } else {
      const e$$4 = _arg17.fields[0];
      walkExpr(e$$4);
    }
  };

  const walkType = function walkType(_arg18) {
    var $target$$41, t$$6, t1, t2;

    switch (_arg18.tag) {
      case 5:
        $target$$41 = 0;
        t$$6 = _arg18.fields[1];
        break;

      case 10:
        $target$$41 = 0;
        t$$6 = _arg18.fields[0];
        break;

      case 12:
        $target$$41 = 0;
        t$$6 = _arg18.fields[0];
        break;

      case 6:
        $target$$41 = 1;
        t1 = _arg18.fields[0];
        t2 = _arg18.fields[1];
        break;

      case 11:
        $target$$41 = 1;
        t1 = _arg18.fields[0];
        t2 = _arg18.fields[1];
        break;

      case 0:
        $target$$41 = 2;
        break;

      case 1:
        $target$$41 = 3;
        break;

      case 2:
        $target$$41 = 4;
        break;

      case 3:
        $target$$41 = 5;
        break;

      case 9:
        $target$$41 = 6;
        break;

      default:
        $target$$41 = 7;
    }

    switch ($target$$41) {
      case 0:
        {
          walkType(t$$6);
          break;
        }

      case 1:
        {
          walkType(t1);
          walkType(t2);
          break;
        }

      case 2:
        {
          const ident$$5 = _arg18.fields[0];
          addLongIdentWithDots(ident$$5);
          break;
        }

      case 3:
        {
          const types = _arg18.fields[2];
          const ty$$1 = _arg18.fields[0];
          walkType(ty$$1);
          (0, _List.iterate)(walkType, types);
          break;
        }

      case 4:
        {
          const types$$1 = _arg18.fields[3];
          (0, _List.iterate)(walkType, types$$1);
          break;
        }

      case 5:
        {
          const ts$$2 = _arg18.fields[0];
          (0, _List.iterate)(function action$$3(tupledArg) {
            walkType(tupledArg[1]);
          }, ts$$2);
          break;
        }

      case 6:
        {
          const typeConstraints = _arg18.fields[1];
          const t$$8 = _arg18.fields[0];
          walkType(t$$8);
          (0, _List.iterate)(walkTypeConstraint, typeConstraints);
          break;
        }
    }
  };

  const walkClause = function walkClause(_arg8) {
    const pat$$5 = _arg8.fields[0];
    const e2$$2 = _arg8.fields[2];
    const e1$$2 = _arg8.fields[1];
    walkPat(pat$$5);
    walkExpr(e2$$2);
    (0, _Seq.iterate)(walkExpr, (0, _Option.defaultArg)(e1$$2, [], function ($x$$24) {
      return [$x$$24];
    }));
  };

  const walkSimplePats = function walkSimplePats(_arg19) {
    if (_arg19.tag === 1) {
      const ty$$2 = _arg19.fields[1];
      const pats$$3 = _arg19.fields[0];
      walkSimplePats(pats$$3);
      walkType(ty$$2);
    } else {
      const pats$$2 = _arg19.fields[0];
      (0, _List.iterate)(walkSimplePat, pats$$2);
    }
  };

  const walkExpr = function walkExpr(_arg20) {
    var $target$$42, e$$5, e$$6, pats$$4, e$$7, t$$9, es$$1;

    if (_arg20.tag === 0) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[0];
    } else if (_arg20.tag === 1) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[2];
    } else if (_arg20.tag === 3) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[0];
    } else if (_arg20.tag === 41) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[0];
    } else if (_arg20.tag === 42) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[0];
    } else if (_arg20.tag === 44) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[1];
    } else if (_arg20.tag === 52) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[0];
    } else if (_arg20.tag === 48) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[1];
    } else if (_arg20.tag === 13) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[1];
    } else if (_arg20.tag === 14) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[2];
    } else if (_arg20.tag === 18) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[0];
    } else if (_arg20.tag === 19) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[0];
    } else if (_arg20.tag === 25) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[0];
    } else if (_arg20.tag === 49) {
      $target$$42 = 0;
      e$$5 = _arg20.fields[1];
    } else if (_arg20.tag === 15) {
      $target$$42 = 1;
      e$$6 = _arg20.fields[3];
      pats$$4 = _arg20.fields[2];
    } else if (_arg20.tag === 8) {
      $target$$42 = 2;
      e$$7 = _arg20.fields[2];
      t$$9 = _arg20.fields[1];
    } else if (_arg20.tag === 38) {
      $target$$42 = 2;
      e$$7 = _arg20.fields[0];
      t$$9 = _arg20.fields[1];
    } else if (_arg20.tag === 39) {
      $target$$42 = 2;
      e$$7 = _arg20.fields[0];
      t$$9 = _arg20.fields[1];
    } else if (_arg20.tag === 40) {
      $target$$42 = 2;
      e$$7 = _arg20.fields[0];
      t$$9 = _arg20.fields[1];
    } else if (_arg20.tag === 4) {
      $target$$42 = 3;
      es$$1 = _arg20.fields[0];
    } else if (_arg20.tag === 6) {
      const activePatternResult61305 = ParsedInput$$$$007CSequentials$007C_$007C(_arg20);

      if (activePatternResult61305 != null) {
        $target$$42 = 3;
        es$$1 = activePatternResult61305;
      } else {
        $target$$42 = 3;
        es$$1 = _arg20.fields[1];
      }
    } else {
      const activePatternResult61306 = ParsedInput$$$$007CSequentials$007C_$007C(_arg20);

      if (activePatternResult61306 != null) {
        $target$$42 = 3;
        es$$1 = activePatternResult61306;
      } else {
        $target$$42 = 4;
      }
    }

    switch ($target$$42) {
      case 0:
        {
          walkExpr(e$$5);
          break;
        }

      case 1:
        {
          walkSimplePats(pats$$4);
          walkExpr(e$$6);
          break;
        }

      case 2:
        {
          walkExpr(e$$7);
          walkType(t$$9);
          break;
        }

      case 3:
        {
          (0, _List.iterate)(walkExpr, es$$1);
          break;
        }

      case 4:
        {
          var $target$$43, e1$$3, e2$$3, fields, ident$$7, argOpt, bindings$$1, ifaces, ty$$3, ident$$9, e1$$4, e2$$4, e3, ident$$10, e1$$5, e2$$5, pat$$6, synMatchClauseList, e$$10, synMatchClauseList$$1, e$$11, tys, bindings$$2, e$$12, clauses, e$$13, e1$$6, e2$$6, e3$$1, e$$14, ident$$11, e1$$7, e2$$7, idents$$6, e1$$8, e2$$8, args, e$$15, args$$1, e1$$9, e2$$9, e1$$10, e2$$10, ident$$12, e1$$11, e2$$11, e3$$2, ident$$13, e1$$12, e2$$12, e1$$13, e2$$13, pat$$7, e$$16, sign$$1, ts$$3, m;

          if (_arg20.tag === 20) {
            $target$$43 = 0;
            e1$$3 = _arg20.fields[2];
            e2$$3 = _arg20.fields[3];
          } else if (_arg20.tag === 24) {
            $target$$43 = 0;
            e1$$3 = _arg20.fields[0];
            e2$$3 = _arg20.fields[1];
          } else if (_arg20.tag === 10) {
            $target$$43 = 0;
            e1$$3 = _arg20.fields[1];
            e2$$3 = _arg20.fields[2];
          } else if (_arg20.tag === 7) {
            $target$$43 = 1;
            fields = _arg20.fields[2];
          } else if (_arg20.tag === 28) {
            $target$$43 = 2;
            ident$$7 = _arg20.fields[0];
          } else if (_arg20.tag === 9) {
            $target$$43 = 3;
            argOpt = _arg20.fields[1];
            bindings$$1 = _arg20.fields[2];
            ifaces = _arg20.fields[3];
            ty$$3 = _arg20.fields[0];
          } else if (_arg20.tag === 29) {
            $target$$43 = 4;
            ident$$9 = _arg20.fields[1];
          } else if (_arg20.tag === 11) {
            $target$$43 = 5;
            e1$$4 = _arg20.fields[2];
            e2$$4 = _arg20.fields[4];
            e3 = _arg20.fields[5];
            ident$$10 = _arg20.fields[1];
          } else if (_arg20.tag === 12) {
            $target$$43 = 6;
            e1$$5 = _arg20.fields[4];
            e2$$5 = _arg20.fields[5];
            pat$$6 = _arg20.fields[3];
          } else if (_arg20.tag === 16) {
            $target$$43 = 7;
            synMatchClauseList = _arg20.fields[2];
          } else if (_arg20.tag === 17) {
            $target$$43 = 8;
            e$$10 = _arg20.fields[1];
            synMatchClauseList$$1 = _arg20.fields[2];
          } else if (_arg20.tag === 21) {
            $target$$43 = 9;
            e$$11 = _arg20.fields[0];
            tys = _arg20.fields[2];
          } else if (_arg20.tag === 22) {
            $target$$43 = 10;
            bindings$$2 = _arg20.fields[2];
            e$$12 = _arg20.fields[3];
          } else if (_arg20.tag === 23) {
            $target$$43 = 11;
            clauses = _arg20.fields[2];
            e$$13 = _arg20.fields[0];
          } else if (_arg20.tag === 27) {
            $target$$43 = 12;
            e1$$6 = _arg20.fields[0];
            e2$$6 = _arg20.fields[1];
            e3$$1 = _arg20.fields[2];
          } else if (_arg20.tag === 30) {
            $target$$43 = 13;
            e$$14 = _arg20.fields[1];
            ident$$11 = _arg20.fields[0];
          } else if (_arg20.tag === 31) {
            $target$$43 = 13;
            e$$14 = _arg20.fields[0];
            ident$$11 = _arg20.fields[2];
          } else if (_arg20.tag === 32) {
            $target$$43 = 14;
            e1$$7 = _arg20.fields[0];
            e2$$7 = _arg20.fields[2];
            idents$$6 = _arg20.fields[1];
          } else if (_arg20.tag === 33) {
            $target$$43 = 15;
            e1$$8 = _arg20.fields[0];
            e2$$8 = _arg20.fields[1];
          } else if (_arg20.tag === 34) {
            $target$$43 = 16;
            args = _arg20.fields[1];
            e$$15 = _arg20.fields[0];
          } else if (_arg20.tag === 35) {
            $target$$43 = 17;
            args$$1 = _arg20.fields[1];
            e1$$9 = _arg20.fields[0];
            e2$$9 = _arg20.fields[2];
          } else if (_arg20.tag === 36) {
            $target$$43 = 18;
            e1$$10 = _arg20.fields[1];
            e2$$10 = _arg20.fields[2];
            ident$$12 = _arg20.fields[0];
          } else if (_arg20.tag === 37) {
            $target$$43 = 19;
            e1$$11 = _arg20.fields[0];
            e2$$11 = _arg20.fields[2];
            e3$$2 = _arg20.fields[3];
            ident$$13 = _arg20.fields[1];
          } else if (_arg20.tag === 46) {
            $target$$43 = 20;
            e1$$12 = _arg20.fields[0];
            e2$$12 = _arg20.fields[2];
          } else if (_arg20.tag === 50) {
            $target$$43 = 21;
            e1$$13 = _arg20.fields[4];
            e2$$13 = _arg20.fields[5];
            pat$$7 = _arg20.fields[3];
          } else if (_arg20.tag === 45) {
            $target$$43 = 22;
            e$$16 = _arg20.fields[2];
            sign$$1 = _arg20.fields[1];
            ts$$3 = _arg20.fields[0];
          } else if (_arg20.tag === 2) {
            if (_arg20.fields[0].tag === 20) {
              $target$$43 = 23;
              m = _arg20.fields[0].fields[1];
            } else {
              $target$$43 = 24;
            }
          } else {
            $target$$43 = 24;
          }

          switch ($target$$43) {
            case 0:
              {
                (0, _List.iterate)(walkExpr, (0, _Types.L)(e1$$3, (0, _Types.L)(e2$$3, (0, _Types.L)())));
                break;
              }

            case 1:
              {
                (0, _List.iterate)(function action$$6(tupledArg$$1) {
                  addLongIdentWithDots(tupledArg$$1[0][0]);
                  (0, _Seq.iterate)(walkExpr, (0, _Option.defaultArg)(tupledArg$$1[1], [], function ($x$$25) {
                    return [$x$$25];
                  }));
                }, fields);
                break;
              }

            case 2:
              {
                addIdent(ident$$7);
                break;
              }

            case 3:
              {
                (0, _Seq.iterate)(function action$$7(tupledArg$$2) {
                  walkExpr(tupledArg$$2[0]);
                  (0, _Seq.iterate)(addIdent, (0, _Option.defaultArg)(tupledArg$$2[1], [], function ($x$$26) {
                    return [$x$$26];
                  }));
                }, (0, _Option.defaultArg)(argOpt, [], function ($x$$27) {
                  return [$x$$27];
                }));
                walkType(ty$$3);
                (0, _List.iterate)(walkBinding, bindings$$1);
                (0, _List.iterate)(walkInterfaceImpl, ifaces);
                break;
              }

            case 4:
              {
                addLongIdentWithDots(ident$$9);
                break;
              }

            case 5:
              {
                addIdent(ident$$10);
                (0, _List.iterate)(walkExpr, (0, _Types.L)(e1$$4, (0, _Types.L)(e2$$4, (0, _Types.L)(e3, (0, _Types.L)()))));
                break;
              }

            case 6:
              {
                walkPat(pat$$6);
                (0, _List.iterate)(walkExpr, (0, _Types.L)(e1$$5, (0, _Types.L)(e2$$5, (0, _Types.L)())));
                break;
              }

            case 7:
              {
                (0, _List.iterate)(walkClause, synMatchClauseList);
                break;
              }

            case 8:
              {
                walkExpr(e$$10);
                (0, _List.iterate)(walkClause, synMatchClauseList$$1);
                break;
              }

            case 9:
              {
                (0, _List.iterate)(walkType, tys);
                walkExpr(e$$11);
                break;
              }

            case 10:
              {
                (0, _List.iterate)(walkBinding, bindings$$2);
                walkExpr(e$$12);
                break;
              }

            case 11:
              {
                (0, _List.iterate)(walkClause, clauses);
                walkExpr(e$$13);
                break;
              }

            case 12:
              {
                (0, _List.iterate)(walkExpr, (0, _Types.L)(e1$$6, (0, _Types.L)(e2$$6, (0, _Types.L)())));
                (0, _Seq.iterate)(walkExpr, (0, _Option.defaultArg)(e3$$1, [], function ($x$$28) {
                  return [$x$$28];
                }));
                break;
              }

            case 13:
              {
                addLongIdentWithDots(ident$$11);
                walkExpr(e$$14);
                break;
              }

            case 14:
              {
                walkExpr(e1$$7);
                addLongIdentWithDots(idents$$6);
                walkExpr(e2$$7);
                break;
              }

            case 15:
              {
                walkExpr(e1$$8);
                walkExpr(e2$$8);
                break;
              }

            case 16:
              {
                walkExpr(e$$15);
                (0, _List.iterate)(walkIndexerArg, args);
                break;
              }

            case 17:
              {
                walkExpr(e1$$9);
                (0, _List.iterate)(walkIndexerArg, args$$1);
                walkExpr(e2$$9);
                break;
              }

            case 18:
              {
                addLongIdentWithDots(ident$$12);
                (0, _List.iterate)(walkExpr, (0, _Types.L)(e1$$10, (0, _Types.L)(e2$$10, (0, _Types.L)())));
                break;
              }

            case 19:
              {
                addLongIdentWithDots(ident$$13);
                (0, _List.iterate)(walkExpr, (0, _Types.L)(e1$$11, (0, _Types.L)(e2$$11, (0, _Types.L)(e3$$2, (0, _Types.L)()))));
                break;
              }

            case 20:
              {
                (0, _List.iterate)(walkExpr, (0, _Types.L)(e1$$12, (0, _Types.L)(e2$$12, (0, _Types.L)())));
                break;
              }

            case 21:
              {
                walkPat(pat$$7);
                (0, _List.iterate)(walkExpr, (0, _Types.L)(e1$$13, (0, _Types.L)(e2$$13, (0, _Types.L)())));
                break;
              }

            case 22:
              {
                (0, _List.iterate)(walkTypar, ts$$3);
                walkMemberSig(sign$$1);
                walkExpr(e$$16);
                break;
              }

            case 23:
              {
                walkMeasure(m);
                break;
              }
          }

          break;
        }
    }
  };

  const walkMeasure = function walkMeasure(_arg21) {
    var $target$$44, m1, m2;

    switch (_arg21.tag) {
      case 3:
        $target$$44 = 0;
        m1 = _arg21.fields[0];
        m2 = _arg21.fields[1];
        break;

      case 0:
        $target$$44 = 1;
        break;

      case 2:
        $target$$44 = 2;
        break;

      case 4:
        $target$$44 = 3;
        break;

      case 7:
        $target$$44 = 4;
        break;

      case 5:
      case 6:
        $target$$44 = 5;
        break;

      default:
        $target$$44 = 0;
        m1 = _arg21.fields[0];
        m2 = _arg21.fields[1];
    }

    switch ($target$$44) {
      case 0:
        {
          walkMeasure(m1);
          walkMeasure(m2);
          break;
        }

      case 1:
        {
          const longIdent$$2 = _arg21.fields[0];
          addLongIdent(longIdent$$2);
          break;
        }

      case 2:
        {
          const ms = _arg21.fields[0];
          (0, _List.iterate)(walkMeasure, ms);
          break;
        }

      case 3:
        {
          const m$$1 = _arg21.fields[0];
          walkMeasure(m$$1);
          break;
        }

      case 4:
        {
          const ty$$4 = _arg21.fields[0];
          walkTypar(ty$$4);
          break;
        }
    }
  };

  const walkSimplePat = function walkSimplePat(_arg22) {
    switch (_arg22.tag) {
      case 2:
        {
          const pat$$8 = _arg22.fields[0];
          const attrs$$4 = _arg22.fields[1];
          walkSimplePat(pat$$8);
          (0, _List.iterate)(walkAttribute, attrs$$4);
          break;
        }

      case 1:
        {
          const t$$10 = _arg22.fields[1];
          const pat$$9 = _arg22.fields[0];
          walkSimplePat(pat$$9);
          walkType(t$$10);
          break;
        }

      default:
        {}
    }
  };

  const walkField = function walkField(_arg9) {
    const t$$11 = _arg9.fields[3];
    const attrs$$5 = _arg9.fields[0];
    (0, _List.iterate)(walkAttribute, attrs$$5);
    walkType(t$$11);
  };

  const walkValSig = function walkValSig(_arg10) {
    const t$$12 = _arg10.fields[3];
    const attrs$$6 = _arg10.fields[0];
    const argInfos = _arg10.fields[4].fields[0];
    const argInfo = _arg10.fields[4].fields[1];
    (0, _List.iterate)(walkAttribute, attrs$$6);
    walkType(t$$12);
    (0, _List.iterate)(walkAttribute, (0, _List.concat)((0, _List.map)(function mapping$$9(_arg6$$2) {
      const attrs$$7 = _arg6$$2.fields[0];
      return attrs$$7;
    }, (0, _Types.L)(argInfo, (0, _List.concat)(argInfos)))));
  };

  const walkMemberSig = function walkMemberSig(_arg23) {
    var $target$$45, t$$13;

    switch (_arg23.tag) {
      case 1:
        $target$$45 = 0;
        t$$13 = _arg23.fields[0];
        break;

      case 0:
        $target$$45 = 1;
        break;

      case 3:
        $target$$45 = 2;
        break;

      case 4:
        $target$$45 = 3;
        break;

      default:
        $target$$45 = 0;
        t$$13 = _arg23.fields[0];
    }

    switch ($target$$45) {
      case 0:
        {
          walkType(t$$13);
          break;
        }

      case 1:
        {
          const vs = _arg23.fields[0];
          walkValSig(vs);
          break;
        }

      case 2:
        {
          const f$$1 = _arg23.fields[0];
          walkField(f$$1);
          break;
        }

      case 3:
        {
          const repr = _arg23.fields[0].fields[1];
          const memberSigs = _arg23.fields[0].fields[2];
          const info = _arg23.fields[0].fields[0];
          const isTypeExtensionOrAlias = repr.tag === 1 ? repr.fields[0].tag === 5 ? true : false : repr.tag === 0 ? repr.fields[0].tag === 6 ? true : repr.fields[0].tag === 8 ? true : false : false;
          walkComponentInfo(isTypeExtensionOrAlias)(info);
          walkTypeDefnSigRepr(repr);
          (0, _List.iterate)(walkMemberSig, memberSigs);
          break;
        }
    }
  };

  const walkMember = function walkMember(_arg24) {
    switch (_arg24.tag) {
      case 5:
        {
          const valSig = _arg24.fields[0];
          walkValSig(valSig);
          break;
        }

      case 1:
        {
          const binding = _arg24.fields[0];
          walkBinding(binding);
          break;
        }

      case 2:
        {
          const pats$$5 = _arg24.fields[2];
          const attrs$$8 = _arg24.fields[1];
          (0, _List.iterate)(walkAttribute, attrs$$8);
          (0, _List.iterate)(walkSimplePat, pats$$5);
          break;
        }

      case 3:
        {
          const t$$14 = _arg24.fields[0];
          const e$$17 = _arg24.fields[1];
          walkType(t$$14);
          walkExpr(e$$17);
          break;
        }

      case 4:
        {
          const bindings$$3 = _arg24.fields[0];
          (0, _List.iterate)(walkBinding, bindings$$3);
          break;
        }

      case 6:
        {
          const t$$15 = _arg24.fields[0];
          const members = _arg24.fields[1];
          walkType(t$$15);
          (0, _Seq.iterate)(function action$$11(list$$4) {
            (0, _List.iterate)(walkMember, list$$4);
          }, (0, _Option.defaultArg)(members, [], function ($x$$29) {
            return [$x$$29];
          }));
          break;
        }

      case 7:
        {
          const t$$16 = _arg24.fields[0];
          walkType(t$$16);
          break;
        }

      case 8:
        {
          const field = _arg24.fields[0];
          walkField(field);
          break;
        }

      case 9:
        {
          const tdef = _arg24.fields[0];
          walkTypeDefn(tdef);
          break;
        }

      case 10:
        {
          const t$$17 = _arg24.fields[3];
          const e$$18 = _arg24.fields[8];
          const attrs$$9 = _arg24.fields[0];
          (0, _List.iterate)(walkAttribute, attrs$$9);
          (0, _Seq.iterate)(walkType, (0, _Option.defaultArg)(t$$17, [], function ($x$$30) {
            return [$x$$30];
          }));
          walkExpr(e$$18);
          break;
        }

      default:
        {}
    }
  };

  const walkEnumCase = function walkEnumCase(_arg11) {
    const attrs$$10 = _arg11.fields[0];
    (0, _List.iterate)(walkAttribute, attrs$$10);
  };

  const walkUnionCaseType = function walkUnionCaseType(_arg25) {
    if (_arg25.tag === 1) {
      const t$$18 = _arg25.fields[0][0];
      walkType(t$$18);
    } else {
      const fields$$1 = _arg25.fields[0];
      (0, _List.iterate)(walkField, fields$$1);
    }
  };

  const walkUnionCase = function walkUnionCase(_arg12) {
    const t$$19 = _arg12.fields[2];
    const attrs$$11 = _arg12.fields[0];
    (0, _List.iterate)(walkAttribute, attrs$$11);
    walkUnionCaseType(t$$19);
  };

  const walkTypeDefnSimple = function walkTypeDefnSimple(_arg26) {
    switch (_arg26.tag) {
      case 1:
        {
          const cases = _arg26.fields[0];
          (0, _List.iterate)(walkEnumCase, cases);
          break;
        }

      case 0:
        {
          const cases$$1 = _arg26.fields[1];
          (0, _List.iterate)(walkUnionCase, cases$$1);
          break;
        }

      case 2:
        {
          const fields$$2 = _arg26.fields[1];
          (0, _List.iterate)(walkField, fields$$2);
          break;
        }

      case 5:
        {
          const t$$20 = _arg26.fields[1];
          walkType(t$$20);
          break;
        }

      default:
        {}
    }
  };

  const walkComponentInfo = function walkComponentInfo(isTypeExtensionOrAlias$$1) {
    return function (_arg13) {
      const typars$$2 = _arg13.fields[1];
      const longIdent$$3 = _arg13.fields[3];
      const constraints$$1 = _arg13.fields[2];
      const attrs$$12 = _arg13.fields[0];
      (0, _List.iterate)(walkAttribute, attrs$$12);
      (0, _List.iterate)(walkTyparDecl, typars$$2);
      (0, _List.iterate)(walkTypeConstraint, constraints$$1);

      if (isTypeExtensionOrAlias$$1) {
        addLongIdent(longIdent$$3);
      }
    };
  };

  const walkTypeDefnRepr = function walkTypeDefnRepr(_arg27) {
    switch (_arg27.tag) {
      case 1:
        {
          const defn = _arg27.fields[0];
          walkTypeDefnSimple(defn);
          break;
        }

      case 2:
        {
          break;
        }

      default:
        {
          const defns = _arg27.fields[1];
          (0, _List.iterate)(walkMember, defns);
        }
    }
  };

  const walkTypeDefnSigRepr = function walkTypeDefnSigRepr(_arg28) {
    switch (_arg28.tag) {
      case 1:
        {
          const defn$$1 = _arg28.fields[0];
          walkTypeDefnSimple(defn$$1);
          break;
        }

      case 2:
        {
          break;
        }

      default:
        {
          const defns$$1 = _arg28.fields[1];
          (0, _List.iterate)(walkMemberSig, defns$$1);
        }
    }
  };

  const walkTypeDefn = function walkTypeDefn(_arg14) {
    const repr$$1 = _arg14.fields[1];
    const members$$1 = _arg14.fields[2];
    const info$$1 = _arg14.fields[0];
    const isTypeExtensionOrAlias$$2 = repr$$1.tag === 0 ? repr$$1.fields[0].tag === 8 ? true : repr$$1.fields[0].tag === 6 ? true : false : repr$$1.tag === 1 ? repr$$1.fields[0].tag === 5 ? true : false : false;
    walkComponentInfo(isTypeExtensionOrAlias$$2)(info$$1);
    walkTypeDefnRepr(repr$$1);
    (0, _List.iterate)(walkMember, members$$1);
  };

  const walkSynModuleDecl = function walkSynModuleDecl(decl) {
    switch (decl.tag) {
      case 9:
        {
          const fragment = decl.fields[0];
          walkSynModuleOrNamespace(fragment);
          break;
        }

      case 1:
        {
          const modules = decl.fields[2];
          const info$$2 = decl.fields[0];
          walkComponentInfo(false)(info$$2);
          (0, _List.iterate)(walkSynModuleDecl, modules);
          break;
        }

      case 2:
        {
          const bindings$$4 = decl.fields[1];
          (0, _List.iterate)(walkBinding, bindings$$4);
          break;
        }

      case 3:
        {
          const expr = decl.fields[1];
          walkExpr(expr);
          break;
        }

      case 4:
        {
          const types$$2 = decl.fields[0];
          (0, _List.iterate)(walkTypeDefn, types$$2);
          break;
        }

      case 7:
        {
          const attrs$$13 = decl.fields[0];
          (0, _List.iterate)(walkAttribute, attrs$$13);
          break;
        }

      default:
        {}
    }
  };

  var $target$$46, input$$1;

  if (input != null) {
    if (input.tag === 0) {
      $target$$46 = 0;
      input$$1 = input.fields[0];
    } else {
      $target$$46 = 1;
    }
  } else {
    $target$$46 = 1;
  }

  switch ($target$$46) {
    case 0:
      {
        walkImplFileInput(input$$1);
        break;
      }
  }

  return identsByEndPos;
}

function ParsedInput$$$getLongIdentAt(ast, pos) {
  const idents$$7 = ParsedInput$$$getLongIdents(ast);
  const matchValue$$10 = (0, _Util.tryGetValue)(idents$$7, pos, null);

  if (matchValue$$10[0]) {
    return matchValue$$10[1];
  } else {
    return null;
  }
}

const ParsedInput$002EScope = (0, _Types.declare)(function ParsedInput$002EScope(arg1, arg2) {
  this.Idents = arg1;
  this.Kind = arg2;
}, _Types.Record);
exports.ParsedInput$002EScope = ParsedInput$002EScope;

function ParsedInput$$$tryFindNearestPointAndModules(currentLine, ast$$1, insertionPoint) {
  var projection;

  const _ignoreAllDiagnostics = (0, _SymbolHelpers.ErrorScope$$$$002Ector)();

  try {
    const result = new _Types.FSharpRef(null);
    const ns$$2 = new _Types.FSharpRef(null);
    const modules$$1 = [];

    const addModule = function addModule(tupledArg$$3) {
      modules$$1.push(new Module((0, _Array.ofList)((0, _List.map)(function mapping$$10(value$$5) {
        return value$$5.toString();
      }, tupledArg$$3[0]), Array), tupledArg$$3[1]));
    };

    const doRange = function doRange(kind, scope, line, col) {
      var oldScope, oldPos;

      if (line <= currentLine) {
        const matchValue$$11 = [result.contents, insertionPoint];
        var $target$$47, oldPos$$1, oldScope$$1;

        if (matchValue$$11[0] != null) {
          if (matchValue$$11[0][2]) {
            $target$$47 = 1;
          } else if (matchValue$$11[1].tag === 0) {
            if (oldScope = matchValue$$11[0][0], (oldPos = matchValue$$11[0][1], !(0, _Util.equals)(kind, new ScopeKind(3, "OpenDeclaration")))) {
              $target$$47 = 2;
              oldPos$$1 = matchValue$$11[0][1];
              oldScope$$1 = matchValue$$11[0][0];
            } else {
              $target$$47 = 3;
            }
          } else {
            $target$$47 = 3;
          }
        } else {
          $target$$47 = 0;
        }

        switch ($target$$47) {
          case 0:
            {
              result.contents = [new ParsedInput$002EScope(function clo0(ident$$14) {
                return (0, _Array.ofSeq)((0, _Seq.map)(_Util.toString, ident$$14), Array);
              }(scope), kind), (0, _range.mkPos)(line, col), false];
              break;
            }

          case 2:
            {
              result.contents = [oldScope$$1, oldPos$$1, true];
              break;
            }

          case 3:
            {
              if (matchValue$$11[0] != null) {
                const oldScope$$2 = matchValue$$11[0][0];
                const oldPos$$2 = matchValue$$11[0][1];
                const matchValue$$12 = [kind, oldScope$$2.Kind];
                var $target$$48;

                if (matchValue$$12[0].tag === 0) {
                  if (matchValue$$12[1].tag === 3) {
                    if ((0, _range.pos$$get_Line)(oldPos$$2) <= line) {
                      $target$$48 = 0;
                    } else if ((0, _range.pos$$get_Line)(oldPos$$2) <= line) {
                      $target$$48 = 0;
                    } else {
                      $target$$48 = 1;
                    }
                  } else if ((0, _range.pos$$get_Line)(oldPos$$2) <= line) {
                    $target$$48 = 0;
                  } else {
                    $target$$48 = 1;
                  }
                } else if (matchValue$$12[0].tag === 2) {
                  if (matchValue$$12[1].tag === 3) {
                    if ((0, _range.pos$$get_Line)(oldPos$$2) <= line) {
                      $target$$48 = 0;
                    } else if ((0, _range.pos$$get_Line)(oldPos$$2) <= line) {
                      $target$$48 = 0;
                    } else {
                      $target$$48 = 1;
                    }
                  } else if ((0, _range.pos$$get_Line)(oldPos$$2) <= line) {
                    $target$$48 = 0;
                  } else {
                    $target$$48 = 1;
                  }
                } else if (matchValue$$12[0].tag === 1) {
                  if (matchValue$$12[1].tag === 3) {
                    if ((0, _range.pos$$get_Line)(oldPos$$2) <= line) {
                      $target$$48 = 0;
                    } else if ((0, _range.pos$$get_Line)(oldPos$$2) <= line) {
                      $target$$48 = 0;
                    } else {
                      $target$$48 = 1;
                    }
                  } else if ((0, _range.pos$$get_Line)(oldPos$$2) <= line) {
                    $target$$48 = 0;
                  } else {
                    $target$$48 = 1;
                  }
                } else if ((0, _range.pos$$get_Line)(oldPos$$2) <= line) {
                  $target$$48 = 0;
                } else {
                  $target$$48 = 1;
                }

                switch ($target$$48) {
                  case 0:
                    {
                      result.contents = [new ParsedInput$002EScope(scope.tail == null ? oldScope$$2.Idents : function clo0$$1(ident$$15) {
                        return (0, _Array.ofSeq)((0, _Seq.map)(_Util.toString, ident$$15), Array);
                      }(scope), kind), (0, _range.mkPos)(line, col), false];
                      break;
                    }
                }
              } else {
                throw new _Types.MatchFailureException("C:/code/FSharp.Compiler.Service_fable/src/fsharp/service/ServiceAssemblyContent.fs", 884, 22);
              }

              break;
            }
        }
      }
    };

    const getMinColumn = function getMinColumn(decls$$1) {
      if (decls$$1.tail != null) {
        const firstDecl = decls$$1.head;
        return (0, _Option.defaultArg)(firstDecl.tag === 1 ? firstDecl.fields[4] : firstDecl.tag === 2 ? firstDecl.fields[2] : firstDecl.tag === 3 ? firstDecl.fields[2] : firstDecl.tag === 4 ? firstDecl.fields[1] : firstDecl.tag === 5 ? firstDecl.fields[1] : firstDecl.tag === 6 ? firstDecl.fields[1] : firstDecl.tag === 8 ? firstDecl.fields[1] : null, null, function mapping$$13(r$$1) {
          return (0, _range.range$$get_StartColumn)(r$$1);
        });
      } else {
        return null;
      }
    };

    const walkImplFileInput$$1 = function walkImplFileInput$$1(_arg1$$6) {
      const moduleOrNamespaceList$$1 = _arg1$$6.fields[5];
      (0, _List.iterate)(walkSynModuleOrNamespace$$1((0, _Types.L)()), moduleOrNamespaceList$$1);
    };

    const walkSynModuleOrNamespace$$1 = function walkSynModuleOrNamespace$$1(parent$$3) {
      return function (_arg2$$4) {
        const range$$1 = _arg2$$4.fields[7];
        const isModule = _arg2$$4.fields[2];
        const ident$$16 = _arg2$$4.fields[0];
        const decls$$2 = _arg2$$4.fields[3];

        if ((0, _range.range$$get_EndLine)(range$$1) >= currentLine) {
          const matchValue$$13 = [isModule, parent$$3, ident$$16];

          var $target$$49, _f, _s;

          if (matchValue$$13[0]) {
            if (matchValue$$13[1].tail == null) {
              if (matchValue$$13[2].tail != null) {
                if (matchValue$$13[2].tail.tail != null) {
                  $target$$49 = 1;
                  _f = matchValue$$13[2].head;
                  _s = matchValue$$13[2].tail.head;
                } else {
                  $target$$49 = 2;
                }
              } else {
                $target$$49 = 2;
              }
            } else {
              $target$$49 = 2;
            }
          } else {
            $target$$49 = 0;
          }

          switch ($target$$49) {
            case 0:
              {
                ns$$2.contents = function clo0$$2(ident$$17) {
                  return (0, _Array.ofSeq)((0, _Seq.map)(_Util.toString, ident$$17), Array);
                }(ident$$16);

                break;
              }

            case 1:
              {
                const ident$$19 = function clo0$$3(ident$$18) {
                  return (0, _Array.ofSeq)((0, _Seq.map)(_Util.toString, ident$$18), Array);
                }(ident$$16);

                ns$$2.contents = ident$$19.slice(0, ident$$19.length - 2 + 1);
                break;
              }
          }

          const fullIdent = (0, _List.append)(parent$$3, ident$$16);
          const startLine = (isModule ? (0, _range.range$$get_StartLine)(range$$1) : (0, _range.range$$get_StartLine)(range$$1) - 1) | 0;
          let scopeKind;
          const matchValue$$14 = [isModule, parent$$3];
          scopeKind = matchValue$$14[0] ? matchValue$$14[1].tail == null ? new ScopeKind(1, "TopModule") : new ScopeKind(2, "NestedModule") : new ScopeKind(0, "Namespace");
          doRange(scopeKind, fullIdent, startLine, (0, _range.range$$get_StartColumn)(range$$1));
          addModule([fullIdent, range$$1]);
          (0, _List.iterate)(walkSynModuleDecl$$1(fullIdent), decls$$2);
        }
      };
    };

    const walkSynModuleDecl$$1 = function walkSynModuleDecl$$1(parent$$4) {
      return function (decl$$1) {
        switch (decl$$1.tag) {
          case 9:
            {
              const fragment$$1 = decl$$1.fields[0];
              walkSynModuleOrNamespace$$1(parent$$4)(fragment$$1);
              break;
            }

          case 1:
            {
              const range$$2 = decl$$1.fields[4];
              const ident$$20 = decl$$1.fields[0].fields[3];
              const decls$$3 = decl$$1.fields[2];
              const fullIdent$$1 = (0, _List.append)(parent$$4, ident$$20);
              addModule([fullIdent$$1, range$$2]);

              if ((0, _range.range$$get_EndLine)(range$$2) >= currentLine) {
                const moduleBodyIdentation = (0, _Option.defaultArg)(getMinColumn(decls$$3), (0, _range.range$$get_StartColumn)(range$$2) + 4) | 0;
                doRange(new ScopeKind(2, "NestedModule"), fullIdent$$1, (0, _range.range$$get_StartLine)(range$$2), moduleBodyIdentation);
                (0, _List.iterate)(walkSynModuleDecl$$1(fullIdent$$1), decls$$3);
              }

              break;
            }

          case 6:
            {
              const range$$3 = decl$$1.fields[1];
              doRange(new ScopeKind(3, "OpenDeclaration"), (0, _Types.L)(), (0, _range.range$$get_EndLine)(range$$3), (0, _range.range$$get_StartColumn)(range$$3) - 5);
              break;
            }

          case 8:
            {
              const range$$4 = decl$$1.fields[1];
              doRange(new ScopeKind(4, "HashDirective"), (0, _Types.L)(), (0, _range.range$$get_EndLine)(range$$4), (0, _range.range$$get_StartColumn)(range$$4));
              break;
            }

          default:
            {}
        }
      };
    };

    if (ast$$1.tag === 0) {
      const input$$2 = ast$$1.fields[0];
      walkImplFileInput$$1(input$$2);
    }

    const res$$2 = (0, _Option.defaultArg)(result.contents, null, function mapping$$18(tupledArg$$4) {
      const ns$$3 = (0, _Option.defaultArg)(ns$$2.contents, null, function mapping$$17(arg00$$5) {
        return function clo0$$4(ident$$21) {
          return (0, _Array.ofSeq)((0, _Seq.map)(_Util.toString, ident$$21), Array);
        }(arg00$$5);
      });
      return [tupledArg$$4[0], ns$$3, (0, _range.mkPos)((0, _range.pos$$get_Line)(tupledArg$$4[1]) + 1, (0, _range.pos$$get_Column)(tupledArg$$4[1]))];
    });
    const modules$$2 = (0, _List.ofSeq)((projection = function projection(x$$25) {
      return -x$$25.Idents.length;
    }, function (source$$12) {
      return (0, _Seq.sortWith)(function ($x$$31, $y$$32) {
        return (0, _Util.comparePrimitives)(projection($x$$31), projection($y$$32));
      }, source$$12);
    })((0, _Seq.filter)(function predicate$$4(x$$24) {
      return (0, _range.range$$get_EndLine)(x$$24.Range) < currentLine;
    }, modules$$1)));
    return [res$$2, modules$$2];
  } finally {
    if ((0, _Util.isDisposable)(_ignoreAllDiagnostics)) {
      _ignoreAllDiagnostics.Dispose();
    }
  }
}

function ParsedInput$$$findBestPositionToInsertOpenDeclaration(modules$$3, scope$$2, pos$$2, entity$$2) {
  const matchValue$$15 = (0, _List.filter)(function predicate$$5(x$$26) {
    return (0, _illib.Array$$$startsWith)(x$$26.Idents, entity$$2);
  }, modules$$3);

  if (matchValue$$15.tail != null) {
    const m$$2 = matchValue$$15.head;
    let scopeKind$$1;

    if (scope$$2.Kind.tag === 1) {
      scopeKind$$1 = new ScopeKind(2, "NestedModule");
    } else {
      const x$$27 = scope$$2.Kind;
      scopeKind$$1 = x$$27;
    }

    return new InsertContext(scopeKind$$1, (0, _range.mkPos)((0, _range.Line$$$fromZ)((0, _range.range$$get_EndLine)(m$$2.Range)), (0, _range.range$$get_StartColumn)(m$$2.Range)));
  } else {
    return new InsertContext(scope$$2.Kind, pos$$2);
  }
}

function ParsedInput$$$tryFindInsertionContext(currentLine$$1, ast$$2, partiallyQualifiedName$$1, insertionPoint$$1) {
  const patternInput$$1 = ParsedInput$$$tryFindNearestPointAndModules(currentLine$$1, ast$$2, insertionPoint$$1);
  return function (tupledArg$$5) {
    const _ignoreAllDiagnostics$$1 = (0, _SymbolHelpers.ErrorScope$$$$002Ector)();

    try {
      if (patternInput$$1[0] != null) {
        const scope$$3 = patternInput$$1[0][0];
        const pos$$3 = patternInput$$1[0][2];
        const ns$$4 = patternInput$$1[0][1];
        return (0, _Array.map)(function mapping$$19(e$$19) {
          return [e$$19, ParsedInput$$$findBestPositionToInsertOpenDeclaration(patternInput$$1[1], scope$$3, pos$$3, tupledArg$$5[3])];
        }, EntityModule$$$tryCreate(ns$$4, scope$$3.Idents, partiallyQualifiedName$$1, tupledArg$$5[0], tupledArg$$5[1], tupledArg$$5[2], tupledArg$$5[3]), Array);
      } else {
        return [];
      }
    } finally {
      if ((0, _Util.isDisposable)(_ignoreAllDiagnostics$$1)) {
        _ignoreAllDiagnostics$$1.Dispose();
      }
    }
  };
}

function ParsedInput$$$adjustInsertionPoint(getLineStr, ctx) {
  let line$$4;

  if (ctx.ScopeKind.tag === 1) {
    if ((0, _range.pos$$get_Line)(ctx.Pos) > 1) {
      const line$$1 = getLineStr((0, _range.pos$$get_Line)(ctx.Pos) - 2);
      const isImpliciteTopLevelModule = !((0, _String.startsWith)(line$$1, "module", 4) ? !(0, _String.endsWith)(line$$1, "=", 4) : false);
      line$$4 = isImpliciteTopLevelModule ? 1 : (0, _range.pos$$get_Line)(ctx.Pos);
    } else {
      line$$4 = 1;
    }
  } else if (ctx.ScopeKind.tag === 0) {
    if ((0, _range.pos$$get_Line)(ctx.Pos) > 1) {
      const _arg1$$8 = (0, _List.tryPick)(function chooser$$1(tupledArg$$6) {
        if ((0, _String.startsWith)(tupledArg$$6[1], "namespace", 4)) {
          return tupledArg$$6[0];
        } else {
          return null;
        }
      }, (0, _List.mapIndexed)(function mapping$$20(i$$1, line$$2) {
        return [i$$1, getLineStr(line$$2)];
      }, (0, _List.ofSeq)((0, _Seq.rangeNumber)(0, 1, (0, _range.pos$$get_Line)(ctx.Pos) - 1))));

      if (_arg1$$8 == null) {
        line$$4 = (0, _range.pos$$get_Line)(ctx.Pos);
      } else {
        const line$$3 = _arg1$$8 | 0;
        line$$4 = line$$3 + 2;
      }
    } else {
      line$$4 = 1;
    }
  } else {
    line$$4 = (0, _range.pos$$get_Line)(ctx.Pos);
  }

  return (0, _range.mkPos)(line$$4, (0, _range.pos$$get_Column)(ctx.Pos));
}

function ParsedInput$$$findNearestPointToInsertOpenDeclaration(currentLine$$2, ast$$3, entity$$4, insertionPoint$$2) {
  const matchValue$$18 = ParsedInput$$$tryFindNearestPointAndModules(currentLine$$2, ast$$3, insertionPoint$$2);

  if (matchValue$$18[0] != null) {
    const scope$$4 = matchValue$$18[0][0];
    const point = matchValue$$18[0][2];
    return ParsedInput$$$findBestPositionToInsertOpenDeclaration(matchValue$$18[1], scope$$4, point, entity$$4);
  } else {
    return new InsertContext(new ScopeKind(1, "TopModule"), (0, _range.mkPos)(1, 0));
  }
}