"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExternalTypeModule$$$tryOfILType = ExternalTypeModule$$$tryOfILType;
exports.ParamTypeSymbolModule$$$tryOfILType = ParamTypeSymbolModule$$$tryOfILType;
exports.ParamTypeSymbolModule$$$tryOfILTypes = ParamTypeSymbolModule$$$tryOfILTypes;
exports.ExternalSymbol$$ToDebuggerDisplay = ExternalSymbol$$ToDebuggerDisplay;
exports.ExternalSymbol = exports.ParamTypeSymbol = exports.ExternalType = void 0;

var _List = require("../fable-core.2.0.3/List");

var _Option = require("../fable-core.2.0.3/Option");

var _Types = require("../fable-core.2.0.3/Types");

var _String = require("../fable-core.2.0.3/String");

var _il = require("../absil/il");

var _Array = require("../fable-core.2.0.3/Array");

var _Reflection = require("../fable-core.2.0.3/Reflection");

function Option$$$ofOptionList(xs) {
  if ((0, _List.forAll)(function predicate(option) {
    return option != null;
  }, xs)) {
    return (0, _List.map)(function mapping(option$$1) {
      return (0, _Option.value)(option$$1);
    }, xs);
  } else {
    return null;
  }
}

const ExternalType = (0, _Types.declare)(function ExternalType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ExternalType = ExternalType;

ExternalType.prototype.toString = function () {
  var args;
  const this$ = this;

  switch (this$.tag) {
    case 1:
      {
        const inner = this$.fields[0];
        return (0, _String.toText)((0, _String.printf)("%O[]"))(inner);
      }

    case 2:
      {
        const inner$$1 = this$.fields[0];
        return (0, _String.toText)((0, _String.printf)("&%O"))(inner$$1);
      }

    case 3:
      {
        const name$$1 = this$.fields[0];
        return (0, _String.toText)((0, _String.printf)("'%s"))(name$$1);
      }

    default:
      {
        const name = this$.fields[0];
        const genericArgs = this$.fields[1];
        return (0, _String.toText)((0, _String.printf)("%s%s"))(name)(genericArgs.tail == null ? "" : (args = genericArgs, (0, _String.toText)((0, _String.printf)("<%s>"))((0, _String.join)(", ", ...(0, _List.map)(function mapping$$1(arg10) {
          return (0, _String.toText)((0, _String.printf)("%O"))(arg10);
        }, args)))));
      }
  }
};

function ExternalTypeModule$$$tryOfILType(typeVarNames, ilType) {
  var $target$$1, tyspec;

  switch (ilType.tag) {
    case 1:
      $target$$1 = 0;
      break;

    case 3:
      $target$$1 = 1;
      tyspec = ilType.fields[0];
      break;

    case 2:
      $target$$1 = 1;
      tyspec = ilType.fields[0];
      break;

    case 4:
      $target$$1 = 2;
      break;

    case 7:
      $target$$1 = 3;
      break;

    default:
      $target$$1 = 4;
  }

  switch ($target$$1) {
    case 0:
      {
        const inner$$2 = ilType.fields[1];
        return (0, _Option.defaultArg)(ExternalTypeModule$$$tryOfILType(typeVarNames, inner$$2), null, function mapping$$2(arg0$$1) {
          return new ExternalType(1, "Array", arg0$$1);
        });
      }

    case 1:
      {
        return (0, _Option.defaultArg)(Option$$$ofOptionList((0, _List.map)(function mapping$$3(arg10$0040) {
          return ExternalTypeModule$$$tryOfILType(typeVarNames, arg10$0040);
        }, (0, _il.ILTypeSpec$$get_GenericArgs)(tyspec))), null, function mapping$$4(genericArgs$$1) {
          return new ExternalType(0, "Type", (0, _il.ILTypeSpec$$get_FullName)(tyspec), genericArgs$$1);
        });
      }

    case 2:
      {
        const inner$$3 = ilType.fields[0];
        return (0, _Option.defaultArg)(ExternalTypeModule$$$tryOfILType(typeVarNames, inner$$3), null, function mapping$$5(arg0$$2) {
          return new ExternalType(2, "Pointer", arg0$$2);
        });
      }

    case 3:
      {
        const ordinal = ilType.fields[0];
        return (0, _Option.defaultArg)((0, _Array.tryItem)(~~ordinal, typeVarNames), null, function mapping$$6(typeVarName) {
          return new ExternalType(3, "TypeVar", typeVarName);
        });
      }

    case 4:
      {
        return null;
      }
  }
}

const ParamTypeSymbol = (0, _Types.declare)(function ParamTypeSymbol(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParamTypeSymbol = ParamTypeSymbol;

ParamTypeSymbol.prototype.toString = function () {
  const this$$$1 = this;

  if (this$$$1.tag === 1) {
    const t$$1 = this$$$1.fields[0];
    return (0, _String.toText)((0, _String.printf)("ref %O"))(t$$1);
  } else {
    const t = this$$$1.fields[0];
    return t.toString();
  }
};

function ParamTypeSymbolModule$$$tryOfILType(typeVarNames$$1, _arg1) {
  if (_arg1.tag === 5) {
    const inner$$4 = _arg1.fields[0];
    return (0, _Option.defaultArg)(ExternalTypeModule$$$tryOfILType(typeVarNames$$1, inner$$4), null, function mapping$$7(arg0$$3) {
      return new ParamTypeSymbol(1, "Byref", arg0$$3);
    });
  } else {
    const ilType$$1 = _arg1;
    return (0, _Option.defaultArg)(ExternalTypeModule$$$tryOfILType(typeVarNames$$1, ilType$$1), null, function mapping$$8(arg0$$4) {
      return new ParamTypeSymbol(0, "Param", arg0$$4);
    });
  }
}

function ParamTypeSymbolModule$$$tryOfILTypes(typeVarNames$$2, ilTypes) {
  return Option$$$ofOptionList((0, _List.map)(function mapping$$9(arg10$0040$$1) {
    return ParamTypeSymbolModule$$$tryOfILType(typeVarNames$$2, arg10$0040$$1);
  }, ilTypes));
}

const ExternalSymbol = (0, _Types.declare)(function ExternalSymbol(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ExternalSymbol = ExternalSymbol;

ExternalSymbol.prototype.toString = function () {
  const this$$$2 = this;
  var $target$$2, name$$3, typeName$$2;

  switch (this$$$2.tag) {
    case 1:
      $target$$2 = 1;
      break;

    case 2:
      $target$$2 = 2;
      break;

    case 3:
      $target$$2 = 3;
      name$$3 = this$$$2.fields[1];
      typeName$$2 = this$$$2.fields[0];
      break;

    case 4:
      $target$$2 = 3;
      name$$3 = this$$$2.fields[1];
      typeName$$2 = this$$$2.fields[0];
      break;

    case 5:
      $target$$2 = 3;
      name$$3 = this$$$2.fields[1];
      typeName$$2 = this$$$2.fields[0];
      break;

    default:
      $target$$2 = 0;
  }

  switch ($target$$2) {
    case 0:
      {
        const fullName = this$$$2.fields[0];
        return fullName;
      }

    case 1:
      {
        const typeName = this$$$2.fields[0];
        const args$$1 = this$$$2.fields[1];
        return (0, _String.toText)((0, _String.printf)("%s..ctor(%s)"))(typeName)((0, _String.join)(", ", ...(0, _List.map)(function mapping$$10(arg10$$7) {
          return (0, _String.toText)((0, _String.printf)("%O"))(arg10$$7);
        }, args$$1)));
      }

    case 2:
      {
        const typeName$$1 = this$$$2.fields[0];
        const name$$2 = this$$$2.fields[1];
        const genericArity = this$$$2.fields[3] | 0;
        const args$$2 = this$$$2.fields[2];
        const genericAritySuffix = genericArity > 0 ? (0, _String.toText)((0, _String.printf)("`%d"))(genericArity) : "";
        return (0, _String.toText)((0, _String.printf)("%s.%s%s(%s)"))(typeName$$1)(name$$2)(genericAritySuffix)((0, _String.join)(", ", ...(0, _List.map)(function mapping$$11(arg10$$10) {
          return (0, _String.toText)((0, _String.printf)("%O"))(arg10$$10);
        }, args$$2)));
      }

    case 3:
      {
        return (0, _String.toText)((0, _String.printf)("%s.%s"))(typeName$$2)(name$$3);
      }
  }
};

function ExternalSymbol$$ToDebuggerDisplay(this$$$3) {
  const patternInput = (0, _Reflection.getUnionFields)(this$$$3, function () {
    const $type$$3 = (0, _Reflection.union)("Microsoft.FSharp.Compiler.SourceCodeServices.ExternalSymbol", () => [], ExternalSymbol, () => [["Type", [_Reflection.string]], ["Constructor", [_Reflection.string, (0, _Reflection.list)($type$$4)]], ["Method", [_Reflection.string, _Reflection.string, (0, _Reflection.list)($type$$4), _Reflection.int32]], ["Field", [_Reflection.string, _Reflection.string]], ["Event", [_Reflection.string, _Reflection.string]], ["Property", [_Reflection.string, _Reflection.string]]]);
    const $type$$5 = (0, _Reflection.union)("Microsoft.FSharp.Compiler.SourceCodeServices.ExternalType", () => [], ExternalType, () => [["Type", [_Reflection.string, (0, _Reflection.list)($type$$5)]], ["Array", [$type$$5]], ["Pointer", [$type$$5]], ["TypeVar", [_Reflection.string]]]);
    const $type$$4 = (0, _Reflection.union)("Microsoft.FSharp.Compiler.SourceCodeServices.ParamTypeSymbol", () => [], ParamTypeSymbol, () => [["Param", [$type$$5]], ["Byref", [$type$$5]]]);
    return $type$$3;
  }());
  return (0, _String.toText)((0, _String.printf)("%s %O"))((0, _Reflection.name)(patternInput[0]))(this$$$3);
}