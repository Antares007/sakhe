"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasEmptyOverloadSuffix = hasEmptyOverloadSuffix;
exports.getHash = getHash;
exports.getExtensionHash = getExtensionHash;

var _Symbols = require("../symbols/Symbols");

var _Util = require("../fable-core.2.0.3/Util");

var _Seq = require("../fable-core.2.0.3/Seq");

var _List = require("../fable-core.2.0.3/List");

var _String = require("../fable-core.2.0.3/String");

var _Array = require("../fable-core.2.0.3/Array");

function nonAbbreviatedType(t) {
  nonAbbreviatedType: while (true) {
    if ((0, _Symbols.FSharpType$$get_IsAbbreviation)(t)) {
      t = (0, _Symbols.FSharpType$$get_AbbreviatedType)(t);
      continue nonAbbreviatedType;
    } else {
      return t;
    }
  }
}

function isUnit(typ) {
  const typ$$1 = nonAbbreviatedType(typ);

  if ((0, _Symbols.FSharpType$$get_HasTypeDefinition)(typ$$1)) {
    return (0, _Util.equals)((0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpType$$get_TypeDefinition)(typ$$1)), "Microsoft.FSharp.Core.Unit");
  } else {
    return false;
  }
}

function tryFindAttributeArgs(fullName, atts) {
  return (0, _Seq.tryPick)(function chooser(att) {
    const matchValue = (0, _Symbols.FSharpEntity$$get_TryFullName)((0, _Symbols.FSharpAttribute$$get_AttributeType)(att));

    if (matchValue == null) {
      return null;
    } else {
      const fullName$0027 = matchValue;

      if (fullName === fullName$0027) {
        return (0, _List.ofSeq)((0, _Seq.map)(function mapping(tuple) {
          return tuple[1];
        }, (0, _Symbols.FSharpAttribute$$get_ConstructorArguments)(att)));
      } else {
        return null;
      }
    }
  }, atts);
}

function getTypeFastFullName(genParams, t$$1) {
  const t$$2 = nonAbbreviatedType(t$$1);

  if ((0, _Symbols.FSharpType$$get_IsGenericParameter)(t$$2)) {
    const matchValue$$1 = (0, _Util.tryGetValue)(genParams, (0, _Symbols.FSharpGenericParameter$$get_Name)((0, _Symbols.FSharpType$$get_GenericParameter)(t$$2)), null);

    if (matchValue$$1[0]) {
      return matchValue$$1[1];
    } else {
      return "";
    }
  } else if ((0, _Symbols.FSharpType$$get_IsTupleType)(t$$2)) {
    return (0, _String.join)(" * ", ...(0, _Seq.map)(function mapping$$1(t$$3) {
      return getTypeFastFullName(genParams, t$$3);
    }, (0, _Symbols.FSharpType$$get_GenericArguments)(t$$2)));
  } else if ((0, _Symbols.FSharpType$$get_IsFunctionType)(t$$2)) {
    return (0, _String.join)(" -> ", ...(0, _Seq.map)(function mapping$$2(t$$4) {
      return getTypeFastFullName(genParams, t$$4);
    }, (0, _Symbols.FSharpType$$get_GenericArguments)(t$$2)));
  } else if ((0, _Symbols.FSharpType$$get_HasTypeDefinition)(t$$2)) {
    const tdef = (0, _Symbols.FSharpType$$get_TypeDefinition)(t$$2);
    const genArgs = (0, _String.join)(",", ...(0, _Seq.map)(function mapping$$3(t$$5) {
      return getTypeFastFullName(genParams, t$$5);
    }, (0, _Symbols.FSharpType$$get_GenericArguments)(t$$2)));

    if ((0, _Symbols.FSharpEntity$$get_IsArrayType)(tdef)) {
      return genArgs + "[]";
    } else if ((0, _Symbols.FSharpEntity$$get_IsByRef)(tdef)) {
      return genArgs;
    } else {
      const matchValue$$2 = tryFindAttributeArgs("Fable.Core.ReplacesAttribute", (0, _Symbols.FSharpEntity$$get_Attributes)(tdef));
      var $target$$1, replacedTypeFullName;

      if (matchValue$$2 != null) {
        if (matchValue$$2.tail != null) {
          if (typeof matchValue$$2.head === "string") {
            if (matchValue$$2.tail.tail == null) {
              $target$$1 = 0;
              replacedTypeFullName = matchValue$$2.head;
            } else {
              $target$$1 = 1;
            }
          } else {
            $target$$1 = 1;
          }
        } else {
          $target$$1 = 1;
        }
      } else {
        $target$$1 = 1;
      }

      switch ($target$$1) {
        case 0:
          {
            const genArgs$$1 = genArgs === "" ? "" : "[" + genArgs + "]";
            return replacedTypeFullName + genArgs$$1;
          }

        case 1:
          {
            const genArgs$$2 = genArgs === "" ? "" : "[" + genArgs + "]";
            return (0, _Symbols.FSharpEntity$$get_FullName)(tdef) + genArgs$$2;
          }
      }
    }
  } else {
    return "System.Object";
  }
}

function combineHashCodes(hashes) {
  const hashes$$1 = (0, _Array.ofSeq)(hashes, Int32Array);

  if (hashes$$1.length === 0) {
    return 0;
  } else {
    return hashes$$1.reduce(function reduction(h1, h2) {
      return (h1 << 5) + h1 ^ h2;
    }) | 0;
  }
}

function stringHash(s) {
  let h = 5381;

  for (let i$$1 = 0; i$$1 <= s.length - 1; i$$1++) {
    h = h * 33 ^ s[i$$1].charCodeAt(0);
  }

  return h | 0;
}

function hashToString(i$$2) {
  var copyOfStruct;

  if (i$$2 < 0) {
    return "Z" + (copyOfStruct = Math.abs(i$$2) | 0, (0, _String.format)("{0:" + "X" + "}", copyOfStruct));
  } else {
    return (0, _String.format)("{0:" + "X" + "}", i$$2);
  }
}

function getHashPrivate(m, curriedParams, genParams$$1) {
  const matchValue$$3 = tryFindAttributeArgs("Fable.Core.OverloadSuffixAttribute", (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_Attributes)(m));
  var $target$$2, overloadSuffix;

  if (matchValue$$3 != null) {
    if (matchValue$$3.tail != null) {
      if (typeof matchValue$$3.head === "string") {
        if (matchValue$$3.tail.tail == null) {
          $target$$2 = 0;
          overloadSuffix = matchValue$$3.head;
        } else {
          $target$$2 = 1;
        }
      } else {
        $target$$2 = 1;
      }
    } else {
      $target$$2 = 1;
    }
  } else {
    $target$$2 = 1;
  }

  switch ($target$$2) {
    case 0:
      {
        return overloadSuffix;
      }

    case 1:
      {
        return hashToString(combineHashCodes((0, _Seq.map)(function mapping$$4(p) {
          return stringHash(getTypeFastFullName(genParams$$1, (0, _Symbols.FSharpParameter$$get_Type)(p)));
        }, curriedParams[0])));
      }
  }
}

function hasEmptyOverloadSuffix(m$$1, curriedParams$$1) {
  if (((0, _Symbols.FSharpMemberOrFunctionOrValue$$get_IsOverrideOrExplicitInterfaceImplementation)(m$$1) ? true : (0, _Util.count)(curriedParams$$1) !== 1) ? true : (0, _Util.count)(curriedParams$$1[0]) === 0) {
    return true;
  } else if ((0, _Util.count)(curriedParams$$1[0]) === 1) {
    return isUnit((0, _Symbols.FSharpParameter$$get_Type)(curriedParams$$1[0][0]));
  } else {
    return false;
  }
}

function getHash(entity, m$$2) {
  const curriedParams$$2 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(m$$2);

  if (hasEmptyOverloadSuffix(m$$2, curriedParams$$2)) {
    return "";
  } else {
    const genParams$$2 = new Map((0, _Seq.mapIndexed)(function mapping$$5(i$$4, p$$1) {
      return [(0, _Symbols.FSharpGenericParameter$$get_Name)(p$$1), (0, _Util.int32ToString)(i$$4)];
    }, (0, _Symbols.FSharpEntity$$get_GenericParameters)(entity)));
    return getHashPrivate(m$$2, curriedParams$$2, genParams$$2);
  }
}

function getExtensionHash(m$$3) {
  const curriedParams$$3 = (0, _Symbols.FSharpMemberOrFunctionOrValue$$get_CurriedParameterGroups)(m$$3);

  if (hasEmptyOverloadSuffix(m$$3, curriedParams$$3)) {
    return "";
  } else {
    return getHashPrivate(m$$3, curriedParams$$3, new Map([]));
  }
}